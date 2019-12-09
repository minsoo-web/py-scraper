#include <iostream>
#include <string>

using namespace std;

class MyHash
{
private:
   string* table;                 //bucket
   long width;                    //bucket 개수
   bool* table_slot;              //slot (bucket이 차있는지 조사)
   long h1;
   long h2;

public:
   MyHash(long N);
   int Double_Hash_function(int key, int i);
   void insert(int key, string data);
   void print();
};


MyHash::MyHash(long N) {
   this->width = N;             //bucket 개수 = N
   table = new string[N];       // N 크기 bucket
   table_slot = new bool[N];     // N 크기 Slot
   for (long i = 0; i < N; i++)
   {
      table[i] = "";
      table_slot[i] = false;
   }
}

int MyHash::Double_Hash_function(int _key, int _i) {
   int h1 = _key % width;
   int h2 = 1 + (_key % (width - 2));
   return (h1 + _i * h2) % width;
}

void MyHash::insert(int _key, string _data) {
   int cnt = 0;
   int index = Double_Hash_function(_key, cnt);
   // (simple division) Hash function 으로 초기 인덱스 검색
   int sum = 0;
   for (int i = 0; i < width; i++) sum += table_slot[i];        // Bucket이 얼마나 차있는지 sum에 저장

   if (sum == width) cout << "!!! Bucket is full !!!" << endl; // Bucket이 가득 차있다면 메세지 출력
   else { // Bucket에 빈 공간이 있다면
         if (table_slot[index]) { // 그 위치에 bucket이 채워져 있다면
            // Double Hash_function
            cnt++;
            insert(_key, _data);
         }
         else { // 그 위치에 bucket이 채워져 있지 않다면
                //값과 슬롯을 채우고 메세지 출력
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
   MyHash hinst(19);
   hinst.insert(11, "a");
   hinst.insert(22, "b");
   hinst.insert(33, "c");
   hinst.insert(44, "d");
   hinst.insert(55, "e");
   hinst.insert(66, "f");
   hinst.insert(77, "g");
   hinst.insert(88, "h");
   hinst.insert(99, "i");
   hinst.insert(111, "j");

   hinst.print();
}
