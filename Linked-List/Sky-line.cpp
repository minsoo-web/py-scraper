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
   skyline(int left, int height, int right)
   {
      if (left < right) // 옳은 경우의 생성자
      {
         Node* leftbuilding = new Node(left, height);
         Node* rightbuilding = new Node(right, height);
         if (head == NULL) { //처음 삽입
            head = leftbuilding;
            head->next = rightbuilding;
         }
         else { // 하나의 노드라도 존재한다면
            search(head, leftbuilding);  // 왼쪽 빌딩을 먼저 추가 해준 뒤
            search(leftbuilding, rightbuilding);  // 오른쪽 빌딩을 추가 해준다.
         }
      }
      else {      // 잘못된 경우의 생성자 --> 오류
         return;
      }
   }
   Node* search(Node* _currentNode, Node* input_building) {
      if (_currentNode->location < input_building->location)
      {
         if (_currentNode->next->location > input_building->location) { // 현재 노드의 다음 노드의 위치 보다 작다면
            Node* temp = _currentNode->next;
            _currentNode->next = input_building;
            input_building->next = temp;
         }
         else {
            search(_currentNode->next, input_building);
         }

      }
      else if (_currentNode->location > input_building->location) {
         input_building->next = _currentNode;
      }
      else { // _currentNode의 위치가 input_building의 위치와 같은 경우 -> height를 비교해주어야 한다
         if (_currentNode->height!=input_building->height) { // 같지 않다면 비교해야한다
            if (_currentNode->height > input_building->height) { // 원래 높이가 더 높다는 의미이므로 새로 고침해줄 필요가 없다.
               return _currentNode;
            }
            else // input height가 더 높다는 의미이므로 새로운 높이로 반환한다.
            {
               _currentNode->height = input_building->height;  //현재 노드의 높이를 인풋빌딩의 높이로 바꾸어 준다.
               return _currentNode;
            }
         }
         else { // 같은 경우 높이도 같고 위치도 같은 경우이므로 새로 고쳐줄 것이 없다.
            return _currentNode;
         }
      }
   }

   Node* connect(Node* left, Node* right) {
      left->next = right;
   }
   void merge(const skyline &a){

   }
   void print() {
      while (head != NULL) {
         cout << "( " << head->location <<", "<<head->height << " ) ->";
         head = head->next;
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
int main()
{
   skyline A(1,3,3);
   A.print();
   skyline A(6, 4, 20);
   A.print();
   return 0;
}
/*
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
*/
