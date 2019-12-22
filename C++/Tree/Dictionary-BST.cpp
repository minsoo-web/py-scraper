#include<iostream>
using namespace std;

class Node {
	friend class dictionary;	// private를 공유하기 위한 클래스 선언
private:
	Node* left;					//왼쪽, 오른쪽 자식
	Node* right;
	int key;
	string content;				// 문제에서는 char* 로 선언하게 끔 되어있는데 string으로 바꾸면 좋을 것 같아 바꿨습니다.

public:
	Node(int _input_key, string _content)  // 노드 생성자
	{
		// 노드가 지니고 있는 자료들의 초기화
		key = _input_key;
		content = _content;
		left = NULL;
		right = NULL;
	}
};

class dictionary {
private:
	Node* root;					// dictionary의 private 조상 노드

public:
	dictionary() {root = NULL;}
	~dictionary() {
		distroy_all_node(root); // 모든 노드들을 메모리에서 해제시키는 소멸자를 정의하기 위해 재귀함수를 만들었습니다.
		//delete root;
	}

	void distroy_all_node(Node* _current_Node)
	{
		if (_current_Node)
		{
			if (_current_Node->left)
				distroy_all_node(_current_Node->left); // 재귀함수를 통해 tree안에 모든 노드들을 방문
			if (_current_Node->right)
				distroy_all_node(_current_Node->right);
			// 왼쪽도 오른쪽도 없다면 가장 작은 노드나 다름 없다== 삭제

			cout << _current_Node->key << "is deleteed by destructor" << endl;

			delete _current_Node; // 해제

		}
	}

	void insert(int key, string content)
	{
		if (root == NULL) // 첫 삽입이라면
		{
			root = new Node(key, content);
		}
		else // 루트노드가 존재한다면 inseart_함수를 사용해서 key값에 맞는 노드를 맞는 위치에 삽입한다.
		{
			insert_node(root, key, content);
		}
	}

	//insert노드의 정의를 위한 재귀함수의 정의
	void insert_node(Node* _current_node, int _input_key, string _Input_string)
	{
		if (_current_node->key > _input_key)  // 현재 노드의 key가 넣고자 하는 key의 값보다 크다면 (왼쪽으로 삽입해야 한다면)
		{
			if (_current_node->left != NULL)  // 왼쪽 노드가 더 이상 없을때까지
				insert_node(_current_node->left, _input_key, _Input_string);  // 재귀함수를 반복해서 넣어야 하는 위치를 찾는다
			else							// 더 이상 찾을 노드가 없다면 (더 내려갈 곳이 없다면)
				_current_node->left = new Node(_input_key, _Input_string); // 노드 생성자를 통해 새로운 노드를 만들어 insert를 끝낸다
		}
		else if (_current_node->key < _input_key) // 현재 노드의 key가 넣고자 하는 key의 값보다 작다면 (오른쪽으로 삽입해야 한다면)
		{
			if (_current_node->right != NULL)	// 오른쪽 노드가 더 이상 없을때까지
				insert_node(_current_node->right, _input_key, _Input_string); // 재귀함수를 반복해서 넣어야 하는 위치를 찾는다
			else								// 더 이상 찾을 노드가 없다면 (더 내려갈 곳이 없다면)
				_current_node->right = new Node(_input_key, _Input_string); // 노드 생성자를 통해 새로운 노드를 만들어 insert를 끝낸다.
		}
		else // 현재 노드의 key 값보다 크지도 작지도 않은 key값이라면 현재 노드의 key 값과 같은 경우라고 봐도 된다
		{
			cout << "이미 같은 key 값의 노드가 존재합니다 업데이트 하겠습니다." << endl; // 문제의 조건에 따라 같은 key 값의 노드가 이미 존재한다면
			_current_node->content = _Input_string;										// content를 업데이트 해준다.
		}
	}


	string search(int key)
	{
		if (root == NULL)  // 아무것도 없는 트리의 상태에서 search 함수가 돌아갈 수는 없으므로
		{
			cout << "현재 트리는 비어있습니다." << endl;
		}
		else				// 뭐 하나라도 있다면
		{
			Node* tempNode;	// 트리 전체를 돌아다닐 노드를 생성
			tempNode = search_node(key, root); // search를 위한 재귀함수를 정의 했습니다.

			if (tempNode == NULL) // 다 돌아다녔는데 나온 노드가 NULL이라는 의미는 찾는 노드가 없는 경우
				return "입력받은 key값의 노드를 찾을 수 없습니다.";    //찾으려는 노드가 없으므로 에러문구 출력
			else					// 찾았다면
				cout << "Content of "<< key <<" is  : ";
				return tempNode->content; // 찾으려는 노드가 존재하므로 찾은 노드의 content를 return한다.
		}
	}

	// search 함수를 정의하기 위한 재귀함수의 정의
	Node* search_node(int _input_key, Node* _current_node)
	{
		if (_current_node->key > _input_key)	//현재 노드의 key가 input된 key값보다 크다면(==인풋 키 값이 현재 노드의 key값 보다 작다면) == 현재 노드의 왼쪽 노드에서 찾아야 한다.
		{
			if (_current_node->left)			//왼쪽 자식 노드가 존재한다면 (==_current_node !=NULL) (==더 찾아봐야 할 필요가 있다면)
				search_node(_input_key, _current_node->left); //key값은 그대로 두고 현재 노드의 왼쪽 노드에서 탐색한다.
			else								// 왼쪽 자식 노드가 없다 == 찾으려는 노드가 없다는 의미(같은 값은 아니므로)
				return NULL;
		}
		else if (_current_node->key < _input_key)// 현재 노드의 key가 input된 key 값보다 작다면(== input key가 현재 노드보다 크다) == 현재 노드의 오른쪽 노드에서 찾아야 한다.
		{
			if (_current_node->right)			// 오른쪽 자식 노드가 존재한다면 (==더 뒤져봐야 할 필요가 있다면)
				search_node(_input_key, _current_node->right);
			else								// 오른쪽 자식 노드가 없다 == 찾으려는 노드가 없다
				return NULL;
		}
		else									// 작은것도 큰 것도 아니라면 지금 현재 노드가 찾으려는 노드라는 의미
		{
			return _current_node;				// 찾은 노드를 배출
		}
	}


	// remove의 경우 자식이 있는 경우 있다면 양쪽 다 있는 경우 한쪽만 있거나 없는 경우로 나누어 주었으며
	// 자식이 있는 경우 지우고자 하는 노드를 대체할 노드를 찾는 함수를 또 정의 해주었습니다.(위에서 정의한 search_node)
	void remove(int key) {

		if (root == NULL)
		{
			cout << "현재 트리는 비어있습니다." << endl;
		}
		else
		{
			remove_node(root, key);				// 재정의 해놓은 재귀함수의 호출을 통한 삭제 및 대체
		}
	}

	Node* remove_node(Node* _current_Node, int _remove_key)
	{
		Node* tempNode;								// 삭제할 노드를 담을 임시 포인터

		if (_current_Node->key > _remove_key)		 //삭제하려는 key값보다 현재 노드의 key값이 크다 == 왼쪽 트리에서 재귀 돌려야 함
		{
			_current_Node->left = remove_node(_current_Node->left, _remove_key);
			return _current_Node;
		}

		else if (_current_Node->key < _remove_key)	//삭제하려는 key값보다 현재 노드의 key값이 작다 == 오른쪽 트리에서 재귀 돌려야 함
		{
			_current_Node->right = remove_node(_current_Node->right, _remove_key);
			return _current_Node;
		}

		else										// 삭제하려는 key값이 현재 노드의 값과 같아졌다면 -> 자식노드의 유무에 따라 케이스를 나누어야 함
		{
			if (_current_Node->left != NULL && _current_Node->right != NULL)				//왼쪽 오른쪽 둘 다 있는 경우라면
			{
				tempNode = find_min_Node(_current_Node->right);								//지울 임시 노드를 현재 노드의 right subtree의 최소값의 노드를 넣어둠
				_current_Node->content = tempNode->content;
				_current_Node->key = tempNode->key;											//현재 노드의 컨텐츠에(문자열에) 지우기로한 노드의 컨텐츠,key (가장 작은 노드의 컨텐츠,key)를 넣는다

				tempNode = NULL; //delete NULL을 할 경우 소멸자가 제대로 작동하지 않는 경우가 생겨 NULL로 바꾸어주었습니다.
				cout << _remove_key << " 의 데이터가 삭제 되었습니다" << endl;
			}

			else // 자식 노드가 없거나 한 쪽만 있는 경우
			{
				tempNode = _current_Node;

				if (_current_Node->left == NULL)
					_current_Node = _current_Node->right;

				else if (_current_Node->right == NULL)
					_current_Node = _current_Node->left;

				delete tempNode;
				cout << _remove_key << " 의 데이터가 삭제 되었습니다" << endl;

			}
		}
		return _current_Node;
	}

	Node* find_min_Node(Node* current_node) // 가장 작은 key값을 찾는 노드함수
	{
		if (current_node == NULL)
			return NULL;
		if (current_node->left != NULL) //왼쪽 노드가 있다면 == 더 작은 key 값을 갖는 노드가 존재한다면
			return find_min_Node(current_node->left); //현재 노드의 더 작은 노드 (왼쪽노드)를 argument 값으로 갖는 재귀함수를 다시 호출
			//-> 수건돌리기가 끝나면 더이상 더 작은 노드값이 나오지 않고 그 결과가 else구문
		else
			return current_node; // 현재 노드보다 더 작은 노드가 없으므로 현재의 노드를 반환
	}


};
int main()
{
	dictionary A;
	A.insert(39, "Engineering math");
	A.insert(20, "Signals and systems");
	A.insert(32, "Linear algebra");
	A.insert(27, "Control theory");
	A.insert(5, "Probability and random processes");
	A.insert(70, "Logic circuit design");
	A.insert(85, "Digital signal processing");
	A.insert(60, "Electronic Circuits");

	cout << A.search(5) << endl;
	cout << A.search(20) << endl;
	cout << A.search(27) << endl;
	cout << A.search(32) << endl;
	cout << A.search(39) << endl;
	cout << A.search(50) << endl;
	cout << A.search(60) << endl;
	cout << A.search(70) << endl;
	cout << A.search(85) << endl;

	A.insert(27, "Circuit theory");
	A.insert(60, "Electromagnetics");
	A.remove(5);
	A.remove(32);
	A.remove(39);

	cout << A.search(5) << endl;
	cout << A.search(20) << endl;
	cout << A.search(27) << endl;
	cout << A.search(32) << endl;
	cout << A.search(39) << endl;
	cout << A.search(50) << endl;
	cout << A.search(60) << endl;
	cout << A.search(70) << endl;
	cout << A.search(85) << endl;

	cout << endl << "Destructor is running" << endl << endl;
}
