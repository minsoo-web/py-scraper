#include<iostream>
using namespace std;

class Node {
	friend class skyline;
private:
	Node* next;
	int location;
	int height;
public:
	Node() {
		next = NULL;
		location = 0;
		height = 0;
	}
	Node(int _location, int _height) {
		location = _location;
		height = _height;
		next = NULL;
	}
};

class skyline {
private:
	Node* head;
public:
	skyline()
	{
		head = NULL;
	}
	skyline(int _left, int _height, int _right) {
		if (_left < _right) {
			head = NULL;
			Node* left = new Node(_left, _height);
			Node* right = new Node(_right, _height);
			head = left;
			head->next = right;
			right->next = NULL;
		}
		else {
			cout << "잘못된 경우의 생성입니다" << endl;
			head = NULL;
		}
	}


	void merge(const skyline &input_skyline){
		if (input_skyline.head == NULL) // merge할 skyline의 head가 비어있으면 아무것도 할 수 있는게 없다.
		{
			cout << "This is empty skyline" << endl;
			return;
		}
		else if (head == NULL) { // 처음 merge 하는 경우 A는 비어있는 리스트이므로
			cout << "연결하겠습니다" << endl;
			head = input_skyline.head;

		}
		else  // 이미 merge 되어 있는 list에 새로 merge를 해야 하므로
		{
			Node* temp = head;
			while (temp->next != NULL)
			{
				temp = temp->next;
			}temp->next = input_skyline.head; // 리스트의 마지막 노드에 새로 merge할 리스트의 헤드를 연결한다. --> sorting이 필요한 상태
		}

		sorting(&head); // sorting 함수를 정의해서 sorting 해준다.
	}
	void sorting(Node** _currentNode) {
		Node* head = *_currentNode;
		Node* a;
		Node* b;

		/* Base case -- length 0 or 1 */
		if ((head == NULL) || (head->next == NULL)) {
			return;
		}

		/* Split head into 'a' and 'b' sublists */
		FrontBackSplit(head, &a, &b);

		/* Recursively sort the sublists */
		sorting(&a);
		sorting(&b);

		/* answer = merge the two sorted lists together */
		*_currentNode = SortedMerge(a, b);
	}
	void FrontBackSplit(Node* source,
		Node** frontRef, Node** backRef)
	{
		Node* fast;
		Node* slow;
		slow = source;
		fast = source->next;

		/* Advance 'fast' two nodes, and advance 'slow' one node */
		while (fast != NULL) {
			fast = fast->next;
			if (fast != NULL) {
				slow = slow->next;
				fast = fast->next;
			}
		}

		/* 'slow' is before the midpoint in the list, so split it in two
		at that point. */
		*frontRef = source;
		*backRef = slow->next;
		slow->next = NULL;
	}

	Node* SortedMerge(Node* a, Node* b)
	{
		Node* result = NULL;
		/* Base cases */
		if (a == NULL)
			return (b);
		else if (b == NULL)
			return (a);

		/* Pick either a or b, and recur */
		if (a->location <= b->location) {
			result = a;
			result->next = SortedMerge(a->next, b);
		}
		else {
			result = b;
			result->next = SortedMerge(a, b->next);
		}
		return (result);
	}

	void print() {

		if (head != NULL) {
			Node* temp = head;

			while (temp != NULL) {

				cout << "( " << temp->location << ", " << temp->height << " ) ->";
				temp = temp->next;
			}
			cout << "NULL" << endl;
		}
		else {
			cout << "출력할 리스트가 없습니다!" << endl;
		}

	}

	void flex(Node* _current) {
		Node* deleteNode;
		if (_current != NULL) {
			if (_current->location = _current->next->location) {
				if (_current->height < _current->next->height) {
					_current->height = _current->next->height;
					deleteNode = _current->next;
					_current->next = _current->next->next;
					delete deleteNode;
				}
				else { // 같거나 큰 경우
					deleteNode = _current->next;
					_current->next = _current->next->next;
					delete deleteNode;
				}
			}
			else { // 위치는 다르지만 높이가 다를 경우
				if (_current->height > _current->next->height) {

				}
				else if (_current->height > _current->next->height) {

				}
				else {

				}
			}
		}
	}

	void clear() {
		while (head != NULL) {
			Node* tmp = head;
			head = head->next;
			delete tmp;
		}
		cout << "* Delete all nodes" << endl;
	}

};

int main() {

	skyline A;

	A.merge(skyline(1, 3, 3));
	A.print();
	A.merge(skyline(6, 4, 20));
	A.print();
	A.merge(skyline(20, 10, 17));
	A.print();
	A.merge(skyline(3, 9, 19));
	A.print();
	A.merge(skyline(16, 20, 14));
	A.print();
	A.merge(skyline(1, 17, 19));
	A.print();
	A.merge(skyline(14, 16, 15));
	A.print();

	return 0;
}
