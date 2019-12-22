#include <iostream>
using namespace std;

class Node {
	friend class Tree;
private:
	char data;
	Node* left;
	Node* right;
public:
	Node(char _data) { this->data = _data; left = NULL; right = NULL; }
	void set_left(Node* _left) { this->left = _left; }
	void set_right(Node* _right) { this->right = _right; }
	char get_data() { return data; }
	Node* get_left() { return left; }
	Node* get_right() { return right; }
};

class Tree {
private:
	Node* root;
public:
	Tree() { root = NULL; }
	Tree(Node* _root) { this->root = _root; }
	void new_root(Node* _root) { this->root = _root; }
	void preorder_print(Node* _leaf) // VLR
	{
		if (_leaf == NULL) return;
		// get_data를 활용해 데이터 출력
		cout << _leaf->get_data() << " ";
		// 왼쪽 탐색
		preorder_print(_leaf->left);
		// 오른쪽 탐색
		preorder_print(_leaf->right);
	}
	void inorder_print(Node* _leaf) // LVR
	{
		if (_leaf == NULL) return;

		// 왼쪽 탐색
		inorder_print(_leaf->left);
		// get_data를 활용해 데이터 출력
		cout << _leaf->get_data() << " ";
		// 오른쪽 탐색
		inorder_print(_leaf->right);
	}
	void postorder_print(Node* _leaf) // LRV
	{
		if (_leaf == NULL) return;
		// 왼쪽 탐색
		postorder_print(_leaf->left);
		// 오른쪽 탐색
		postorder_print(_leaf->right);
		// get_data를 활용해 데이터 출력
		cout << _leaf->get_data() << " ";
	}
};

void main()
{
	Node A('A'), B('B'), C('C'), D('D'), E('E'), F('F'), G('G'), H('H'), I('I');
	Tree tree(&A);

	A.set_left(&B);
	B.set_left(&D);
	D.set_left(&H);
	D.set_right(&I);
	B.set_right(&E);
	A.set_right(&C);
	C.set_left(&F);
	C.set_right(&G);

	cout << "preorder traversal" << endl;
	tree.preorder_print(&A);

	cout << endl << "inorder traversal" << endl;
	tree.inorder_print(&A);

	cout << endl << "postorder traversal" << endl;
	tree.postorder_print(&A);
	cout << endl;

}
