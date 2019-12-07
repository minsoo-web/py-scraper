#include <iostream>
#include <stdlib.h>

using namespace std;

void print_function(char** arr, int i) // 가시적인 확인을 위한 프린트 함수
{
	cout << "Array [" << i << "] saved " << arr[i] << endl;
}

int main()
{
	int n; // 입력받을 사람의 수
	char** name;
	char name_input[20]; // 일단 20만큼의 길이로 생성을 해줌
	cout << "Number of people : ";
	cin >> n; // cin 구문을 통해 입력할 사람의 수를 입력

	name = new char*[n]; // 입력받은 사람의 수 만큼 동적할당을 해서 배열을 만들어 줌


	for (int i = 0; i < n; i++)  // 사람의 수대로 하나 하나 입력을 해주어야 하므로 for문 생성
	{
		cout << "name : ";
		cin >> name_input;  // 이름을 입력함
		int k;
		k = strlen(name_input); //입력 받은 이름의 길이를 계산해서 k에 저장
			name[i] = new char[k+1]; // name의 한 칸 한 칸 마다 입력 받은 길이 만큼 동적할당을 해주어서 2차원의 배열을 생성함
			strcpy(name[i], name_input); // 복사본으로 따로 저장을 해줌
			print_function(name, i); // 프린트 함수를 통해 확인
	}

	for (int i = 0; i < n; i++) // 동적할당 된 메모리를 해제시켜줌
	{
		delete[] name[i];
	}
	delete[] name;  // 2차원의 배열이므로 한 번 더 해제 

	return 0;
}
