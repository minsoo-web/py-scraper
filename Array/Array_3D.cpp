#include<iostream>
using namespace std;

int main()
{
	double init = 1;
	int*** count = new int** [3]; // 3차원 배열 동적 할당
	for (int i = 0; i < 3; i++) // 첫번째 차원의 값 대입을 위한 for문
	{
		count[i] = new int*[3]; // 첫번째 차원의 배열의 각 원소들 마다 다시 동적할당을 해줌으로써 2차원 배열이 생성
		for (int j = 0; j < 3; j++) // 두번재 차원의 배열의 각 원소들 마다 다시 동적 할당을 해주기 위해 마지막 포문을 통해
		{
			count[i][j] = new int[4]; // 3차원의 배열이 완성이 됨
			for (int k = 0; k < 4; k++) // 생성된 배열에 값을 넣기 위한 for문
			{
				count[i][j][k] = init;
				init++; // init 값을 증감 연산자를 통해 증가 시켜줌
			}
		}
	}

	for (int i = 0; i < 3; i++) // 가시적으로 관찰하기 위한 cout
	{
		cout<< i+1 << "`th 3 dimension array" << endl;
		for (int j = 0; j < 3; j++)
		{

			for (int k = 0; k < 4; k++)
			{
				cout << count[i][j][k] << " ";
			}
			cout << endl;
		}
		cout << endl;
	}

	for (int i = 0; i < 3; i++)   //생성된 동적할당된 배열들의 메모리를 해제 시켜주기 위한 포문
	{
		for (int j = 0; j < 3; j++)
		{
			delete[] count[i][j];
		}
		delete[] count[i];
	}
	delete[] count;
}
