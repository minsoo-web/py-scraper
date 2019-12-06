#include<iostream>
using namespace std;

void print(int* A)
{
 for (int i = 0; i < 8; i++)
  cout << A[i] << " ";
 cout << endl;
}

void swapping(int& i, int& j)
{
 int temp = i;
 i = j;
 j = temp;
}


int Partition(int* A, int start, int end)
{

 int pivot = A[end];//가장 마지막을 피벗으로
 int partitionIndex = start; //pivot 보다 작은 요소의 위치를 바꿀 index

 for (int i = start; i < end; i++)
 {
  //pivot보다 작으면 왼쪽으로 하나 씩 보낸다
  if (A[i] <= pivot)
  {
   swapping(A[partitionIndex], A[i]);
   partitionIndex++;
   print(A);
  }
 }
 //pivot 보다 작은 값을 왼쪽에 위치시킨후 이므로
 //그 다음 값은 pivot이 위치해야한다.
 swapping(A[partitionIndex], A[end]);
  print(A);
 //Index를 return하여 다음 pivot을 어디로 할지 정할 수 있다.
 return partitionIndex;
}

//start 부터 end 까지 정렬시킨다.
void QuickSort(int* A, int start, int end)
{
 if (start < end) //start >= end 인 경우는 정렬이 다 된 상황.
 {
  int partitionIndex = Partition(A, start, end);
  QuickSort(A, start, partitionIndex - 1);//피벗의 왼쪽
  QuickSort(A, partitionIndex + 1, end);//피벗의 오른쪽
 }
}

void main()
{

 int A[] = { 7, 2, 1, 6, 8, 5, 3, 4 };

 QuickSort(A, 0, 7);

 print(A);

}
