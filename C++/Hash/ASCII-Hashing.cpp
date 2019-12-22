#include <iostream>
#include <string>

using namespace std;

class MyHash
{
private:
    string* table;                          //bucket
    long width;                             //bucket 개수
    bool* table_slot;                       //slot (bucket이 차있는지 조사)
    long h1;
    long h2;

public:
    MyHash(long N);
    int Hash_function(string key);
    void insert(string key, string data);
    void print();
};


MyHash::MyHash(long N) {
    this->width = N;                     //bucket 개수 = N
    table = new string[N];              // N 크기 bucket
    table_slot = new bool[N];           // N 크기 Slot
    for (long i = 0; i < N; i++)
    {
        table[i] = "";
        table_slot[i] = false;          //생성자를 통해 모든 슬롯의 bool 값을 false로 초기화
    }
}

int MyHash::Hash_function(string _key) {
    long accum = 0;
    const int size = _key.size();
    const char* bytes = _key.c_str();//string to char
    for (int i = 0; i < size; i++)                          //문자열 사이즈만큼 반복
    {
        accum += bytes[i];                                  //문자열의 아스키코드값을 모두 더함

    }

    return accum % width;
}

void MyHash::insert(string _key, string _data) {
    int index = Hash_function(_key);                     // (simple division) Hash function 으로 초기 인덱스 검색
    int sum = 0;
    for (int i = 0; i < width; i++) sum += table_slot[i];// Bucket이 얼마나 차있는지 sum에 저장

    if (sum == width) cout << "!!! Bucket is full !!!" << endl; // Bucket이 가득 차있다면 메세지 출력
    else { // Bucket에 빈 공간이 있다면

        if (table_slot[index]) { // 그 위치에 bucket이 채워져 있다면
           // Linear Probing

            index++;
            while (table_slot[index] == 1)
            {
                if (index >= width)          // index 값이 너무 늘어서 width값보다 커졌다면
                    index = index % width;  // 다시 처음부터 시작하게 해주었습니다.
            }
            table[index] = _data;
            table_slot[index] = true;
        }
        else { // 그 위치에 bucket이 채워져 있지 않다면

            table[index] = _data;
            table_slot[index] = true;
        }

    }

}

void MyHash::print() {

    for (int i = 0; i < width; i++) {
        cout << "[" << i << "] ";
        cout << table[i] << endl;
    }

}

int main()
{
    MyHash hinst(15);
    hinst.insert("Jiwoo", "a");
    hinst.insert("Kyujin", "b");
    hinst.insert("Olivia", "c");
    hinst.insert("Amelia", "d");
    hinst.insert("Hazel", "e");
    hinst.insert("Lily", "f");
    hinst.insert("Sophia", "g");
    hinst.insert("Isabella", "h");
    hinst.insert("Zoe", "i");
    hinst.insert("Aria", "j");

    hinst.print();
}
/*
int main()
{
   MyHash hinst(10);
   hinst.insert(57,"a");
   hinst.insert(34,"b");
   hinst.insert(72,"c");
   hinst.insert(84,"d");
   hinst.insert(97,"e");
   hinst.insert(11,"f");
   hinst.insert(97,"g");
   hinst.insert(46,"h");
   hinst.insert(52,"i");
   hinst.insert(31,"j");

   hinst.print();
}*/
