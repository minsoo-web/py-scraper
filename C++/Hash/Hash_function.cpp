#include <iostream>
#include <string>

using namespace std;

class MyHash
{
private:
   string* table;    //bucket
   long width;       //bucket 개수
   bool* table_slot;//slot (bucket이 차있는지 조사)

public:
   MyHash(long N);
   int Hash_function(int key);
   void insert(int key, string data);
   void print();
};


MyHash::MyHash(long N) {
   this->width = N;              //bucket 개수 = N
   table = new string[N];        // N 크기 bucket
   table_slot = new bool[N];     // N 크기 Slot
   for (long i = 0; i < N; i++)
   {
      table[i] = "";
      table_slot[i] = false;    //생성자를 통해 모든 슬롯의 bool 값을 false로 초기화
   }
}

int MyHash::Hash_function(int _key) {
   int index;
   index = _key % width;
   return index;
}

void MyHash::insert(int _key, string _data) {
   int index = Hash_function(_key); // (simple division) Hash function 으로 초기 인덱스 검색
   int sum = 0;
   for (int i = 0; i < width; i++) sum += table_slot[i];// Bucket이 얼마나 차있는지 sum에 저장

   if (sum == width) cout << "!!! Bucket is full !!!" << endl; // Bucket이 가득 차있다면 메세지 출력
   else { // Bucket에 빈 공간이 있다면

         if (table_slot[index]) { // 그 위치에 bucket이 채워져 있다면
            // Linear Probing
            insert(_key + 1, _data);
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
   hinst.insert(5, "a");
   hinst.insert(19, "b");
   hinst.insert(27, "c");
   hinst.insert(36, "d");
   hinst.insert(57, "e");
   hinst.insert(64, "f");
   hinst.insert(73, "g");
   hinst.insert(92, "h");
   hinst.insert(102, "i");
   hinst.insert(110, "j");

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
