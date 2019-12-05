#include <iostream>

using namespace std;
//1번
class Stack
{
private:
	int data[5];        // data[5] 정적 할당 선언 data = 0[] 1[] 2[] 3[] 4[]
	int top;            // top value 선언
public:
	Stack()             // 동적 할당 없으므로 소멸자 미선언,
	{
		top = -1;
	}

	bool is_empty()     //top value가 -1이면 스택이 비어있는 것이므로 참 값 반환
	{
		return top == -1;
	}

	bool is_full()      // top value가 4이면 스택이 비어있는 것이므로 참 값 반환
	{
		return top == 4;
	}

	void push(int num)  //top value를 증감연산자로 증가 시켜주면서 지정된 num값을 대입해주는 push함수 정의
	{
		if (!is_full()) // 꽉 차있지 않다면
			data[++top] = num;
		else            // == > if (is_full())
			cout << "Stack is full ! " << endl;
	}

	int pop()           // top value를 증감 연산자로 감소 시켜주면서 int형으로 return 시켜줌 -> 3번에서 disk 옮길때 pop된 값을 disk처럼 사용할 것이기에
	{
		if (!is_empty())// 비어있는게 아니라면
			return data[top--];
		else            //비어있다면 (==if(is_empty())
		{
			cout << "Stack is empty ! " << endl;
			return -1; // 정상적인 반환 종료 값인 return 0가 아닌 -1 반환 (empty 스택에 pop을 해줬으니)
		}
	}

	int get()          //top 위치에 있는 data값을 return
	{
		return data[top];
	}

	void set_empty()   // top 위치를 -1로 지정해줌으로써 stack을 비우는 함수
	{
		top = -1;
	}
};
//2번
class Node                                  // Node 클래스 생성
{
public:
	int data;                             //data 와 Next의 선언
	Node* Next;

	Node()                               //생성자를 통해 data와 Next의 초기화
	{
		data = 0;
		Next = NULL;
	}
};

class Stack_Based_linkedList
{
private:
	Node* head;
	int top;
public:
	Stack_Based_linkedList()               // 생성자를 통해 head와 top값 초기화
	{
		head = NULL;
		top - 1;
	}

	bool is_empty()                       // stack을 만들어주는것이므로 top 이 -1 이 된다면 empty이다
	{
		return top == -1;
	}
	bool is_full()                        // stack이 5칸일 경우라 가정하고 만든 full 함수
	{
		return top == 4;
	}
	void push(int num)
	{
		if (!is_full())
		{
			Node* newNode = new Node();   //new node 선언
			newNode->data = num;         //newNode 의 데이터 = num
			newNode->Next = head;       // newNode 의 넥스트 노드는 head;
			head = newNode;            // head와 newnode를 연결해줌
			top++;
		}

		else                         // stack이 비어있다면(head = NULL)
		{
			cout << "error!" << endl;
		}
	}

	int pop()
	{
		if (!is_empty())
		{
			int a = head->data;
			Node* tmp = head;                //head의 주소를 tmp에 담는다
			head = head->Next;              // head는 head의 넥스트 노드 (head의 넥스트 노드에 head의 이름을 지어준다 생각하면 됌)
			delete tmp;                    //진짜 지움
			top--;                        // top 값을 깎아줌
			return a;                    // pop해줄 노드의 데이터를 뽑아준다.
		}
		else
		{
			cout << "Linked List is empty" << endl; //if Linked list (is_empty()==1)
			return -1;
		}
	}

	void set_empty()
	{
		while (head != NULL)           // head의 값이 NULL이 될때까지
		{
			Node* tmp = head;         // tmp를 head라 해주고
			head = head->Next;       // head를 head의 넥스트 노드에 지칭
			delete tmp;             //진짜 지워줌
		}
		cout << "* Delete all nodes" << endl; // 다 지워줬다고 알려줌
		top = -1;                            // top 값 -1로 초기화
	}

	int get()                               //top 위치에 있는 data값을 return
	{
		return head->data;
	}
};

//1번을 이용한 3번의 해결
class Hanoi                                                   // 하노이 클래스 선언
{
private:
	Stack pillar[3];                                          // stack을 이용해 기둥들을 stack으로 선언 // pillar[0], piallar[1], pillar[2]

	void move(int from, int to)                               // 문제 조건에 따라 만든 move함수 // from = 출발 기둥,  to = 도착 기둥
	{
		if (pillar[from].is_empty())                          // 출발 기둥에 있는 스택이 비어있다면
			cout << "it is performing an illegal move" << endl; // 오류
		else if (pillar[to].is_full())                        // 도착 기둥에 있는 스택이 모두 차있다면
			cout << " it is performing an illegal move" << endl; // 오류
		else                                                  // 출발 기둥에 스택도 차있고 (pop할 disk가 있고), 도착 기둥에 빈 공간도 있다면(push 받을 공간이 있다면) (pillar[from].!is_empty()||pillar[to].!is_full())
		{
			int disk = pillar[from].pop();                   // pop된 반환 값 data[top--]을 disk라는 변수 선언과 동시에 대입 -> disk를 pop된 value 와 push 해줄 value로 취급
			pillar[to].push(disk);                           // pillar[to] (목적지 기둥에) return된 pop value => disk를 push(disk)를 통해 대입
			cout << "moving disk " << disk << " from pillar " << from << " to pillar " << to << endl;
		}                                                    //cout 구문을 통해 데이터 이동을 직관적으로 관찰

	}

public:
	void print_solution(int start, int end)                 //문제 조건에 맞는 print_solution 선언 및 정의
	{
		for (int i = 0; i < 3; i++)                        // 세 기둥 empty함수를 통해 모두 초기화
			pillar[i].set_empty();
		for (int i = 5; i >= 1; i--)					   // push 포문을 통해 start 기둥에 5개의 disk를 대입 결과 : pillar[start] = {5,4,3,2,1}
			pillar[start].push(i);
		hanoi(5,start,end);							       // 5개의 디스크를 start 기둥과 end 기둥 값을 받아 작동하는 hanoi함수 동작
	};

	void hanoi(int n, int from,int to)					   // n개의 디스크, from = 출발 기둥, to = 도착 기둥
	{
		int left = 3 - from - to;						   // left는 출발 기둥과 도착 기둥이 아닌 나머지 기둥으로써 n-1개의 나머지 기둥들을 잠시 옮겨 둘 기둥이다.

		if (n == 1)										   // 디스크가 한 개라면
		{
			move(from, to);								  // from에서 to기둥으로 바로 옮기기만 하면 끝
			return;
		}

		else											  // 2개 이상부터는 재귀함수 정의로서 하노이 타워 문제 해결
		{
			hanoi(n - 1, from,left);					 // n-1개의 디스크들을 left 기둥에 잠시 놓음
			move(from, to);						     	 // n 디스크 (제일  큰 디스크)를 move함수를 통해 to 기둥(목적지 기둥)에 move함수를 통해 옮겨 놓음
			hanoi(n - 1, left, to);						// n-1개의 나머지 디스크들을 이제 left 기둥에서 to 기둥으로 옮김으로써 하노이 타워 문제 해결
		}
	}
};

int main()
{
	Hanoi hanoi;								  	    // hanoi 선언
	hanoi.print_solution(0, 2);					       // 0기둥에서 2기둥으로 옮기는 과정을 도출하는 프린트함수 호출

	return 0;
}
