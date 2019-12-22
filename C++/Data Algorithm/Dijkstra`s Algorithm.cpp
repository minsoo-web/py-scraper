#include <iostream>
using namespace std;

struct Adjmatrix {
private:
 double** Adj;
 int len = 0;

 double* cost;
 int* path;
 bool* visited;
public:
 Adjmatrix(int _len) {
  len = _len;   // 입력 받은 수로 길이를 지정
  Adj = new double* [len]; // 동적할당으로 가로 길이 할당
  for (int i = 0; i < len; i++) {  // 반복문으로 가로 1칸마다 len의 길이로 동적 할당
   Adj[i] = new double[len];
   for (int j = 0; j < len; j++) // 0으로 값 초기화
    Adj[i][j] = 0;
  }
  path = new int[len];   // 속성들의 배열도 len만큼 동적할당
  cost = new double[len];
  visited = new bool[len];  //  visited는 bool대수로 지정
  for (int i = 0; i < len; i++) // 모든 배열 속성들의 값들을 초기화
  {
   path[i] = -1;
   cost[i] = INFINITY;
   visited[i] = false;
  }
 }


 void addEdge(int V1, int V2, double cost) {  // v1에서 v2로 가는 cost를 지정
  // Update Adjacency matrix into cost value
  Adj[V1][V2] = cost;
  Adj[V2][V1] = cost;

 }

 void Dijkstra(int start) {
  cost[start] = 0;
  backtracking(start);
 }
 void backtracking(int V) {
  // Set V index's visited = true
  visited[V] = true;
  // Searching V index's connected nodes and update
  for (int i = 0; i < len; i++) {
   // Update weight of V's connected Node weight value (by adjacency matrix)
   double weight = Adj[V][i];
    // If weight is nonzero
    if (weight != 0) {  // 연결이 되어 있으면 (V와 i가)
     // If (connected Node's cost) is bigger than (V's cost + weight)
     if (cost[i] > Adj[V][i]+cost[V]) {
      // Update path
      path[i] = V ;
      // Update Cost
      cost[i] = Adj[V][i] + cost[V];
      // Cut Adjacency matrix
      Adj[V][i] = 0 ;
      Adj[i][V] = 0 ;
     }

    }
  }
  // Print Path & Cost table
  print_table(V, path, cost);

  // Find min cost index
  int index;
  double min_weight = INFINITY;
  for (int i = 0; i < len; i++) {
   if (cost[i] < min_weight) {
    // if Node has been visited, skip it!
    if (visited[i]==0) {
     index = i;
     min_weight = cost[i];
    }
   }
  }
  // Go Recursive function call
  if (!isinf(min_weight)) {
   backtracking(index);
  }
 }




 void print_table(int current, int* _path, double* _cost) {
  cout << endl << "( " << current << " )\t";
  for (int i = 0; i < len; i++) cout << "[" << i << "]\t";
  cout << endl << "Cost :\t";
  for (int i = 0; i < len; i++) if (!isinf(_cost[i]))cout << _cost[i] << "\t"; else cout << "\t";
  cout << endl << "Path :\t";
  for (int i = 0; i < len; i++) if (_path[i] != -1)cout << _path[i] << "\t"; else cout << "\t";
  cout << endl;
 }

};

void main() {

 Adjmatrix A(9);
 A.addEdge(0, 1, 3);
 A.addEdge(0, 3, 4);
 A.addEdge(0, 4, 8);
 A.addEdge(1, 2, 2);
 A.addEdge(1, 4, 4);
 A.addEdge(3, 4, 8);
 A.addEdge(3, 6, 3);
 A.addEdge(4, 7, 6);
 A.addEdge(4, 5, 5);
 A.addEdge(2, 5, 3);
 A.addEdge(7, 8, 2);
 A.addEdge(5, 8, 7);

 A.Dijkstra(0);

}
