#include <iostream>
#include <cmath>

using namespace std;

class complex //복소수 클래스 생성
{
private: //실수 부분 real 변수와 복소수 부분 imag 변수 선언
	double real;
	double imag;
	
public: 
	complex(double _real, double _imag); //constructor 
	~complex(); //destructor
	complex operator*(complex& com); // operator overloading for operator "*"
	complex operator+(complex& com); // operator overloading for operator "+"
	complex operator/(complex& com); // operator overloading for operator "/"
	complex operator-(complex& com); // operator overloading for operator "-"
	bool operator==(complex& com); // operator overloading for operator "=="
	double abs() //복소수의 크기를 구하는 함수의 선언& 정의
	{
		return sqrt(real * real + imag * imag); // sqrt from <cmath>
	};
	void print(void); //print 함수의 선언 
};

complex::complex(double _real, double _imag) // constructor 의 정의 
{
	real = _real;
	imag = _imag;
}
complex::~complex() {} //destructor 정의 

complex complex::operator+(complex& com) // "+" 연산자 정의 
{
	return complex(this->real + com.real, this->imag + com.imag);
}
complex complex::operator*(complex& com) // "*" 연산자 정의 
{
	return complex(this->real * com.real - this->imag * com.imag, this->real * com.imag + this->imag * com.real);
}
complex complex::operator-(complex& com) // "-" 연산자 정의 
{
	return complex(this->real - com.real, this->imag - com.imag);
}
complex complex::operator/(complex& com) // "/" 연산자 정의 
{
	double a = com.real * com.real + com.imag * com.imag; // if t(3,4) -> t의 a = 3^2 + 4^2 = 25 (켤레 복소수를 분자 분모에 곱해줌으로 생기는 상수 정의)
	return complex((this->real * com.real + this->imag * com.imag) / a, (this->imag * com.real - this->real * com.imag) / a);
}
bool complex::operator==(complex& com) // bool operator ==의 정의 
{
	return (this->real == com.real && this->imag == com.imag); // &&연산자를 씀으로서 x성분과 y성분이 모두 일치해야 1 값을 반환
}

void complex::print(void) //print 함수의 정의 
{
	if (imag >= 0)
		cout << real << " +" << imag << "i" << endl;
	else
		cout << real << " " << imag << "i" << endl; // 뺄셈 연산을 통해 생길 수 있는 복소수 파트의 음수 발생 문제 해결을 위해 if- else 구문을 사용 (2+-1i -> 2-1i)

}

class vector // vector 클래스 생성
{
private: // 배열 elements 와 크기(차원) dimension 변수의 선언
	double* elements;
	int dimension;
public:
	vector(int d); //constructor1 크기만 주어지는 경우 
	vector(double* ref, int n); // constructor2 크기와 배열 모두 정의가 되는 경우 
	~vector(); // destructor 선언 
	void set(int i, double v); // set함수 선언 = 초기화 된 elements 배열에 값을 지정
	void print(); // print 함수 선언 
	double norm(); // norm 함수 선언 
	void add(const vector& v); // add 함수 선언 
	void sub(const vector& v); // sub 함수 선언 
	double operator*(const vector& v); // operator overloading for operator "*" (벡터의 내적)
	bool operator==(const vector& v); // operator overloading for operator "==" (bool operator)
};

vector::vector(int d) // constructor1 크기만 주어지는 경우의 정의 
{
	dimension = d; //d값을 지정할 dimension의 선언 (공간 생성)
	elements = new double[d]; // dynamic allocation of elements array (초기값 지정-> {0})
	for (int i = 0; i < d; i++)
		elements[i] = 0;
}

vector::vector(double* ref, int n) // constructor2 크기와 배열 모두 정의가 된 경우의 constructor 정의 
{
	dimension = n; // dimension 에 n을 지정 
	elements = new double[n]; // dynamic allocation of elements array
	for (int i = 0; i < n; i++) // 초기값을 주어진 배열로 대입 elements[i] = ref[i]
		elements[i] = ref[i];
}

vector::~vector() // destructor의 정의 
{
	if (elements) delete[] elements; // elements 값이 존재할 경우 delete [] 
}


void vector::set(int i, double v) // setter 함수 set 정의 
{
	elements[i] = v; // i번째 배열의 원소를 지정
}

void vector::print() // print 함수의 정의 
{
	cout << "[";
	for (int i = 0; i < dimension; i++) //for 문을 통해 지정받은 dimension의 크기만큼 elements 배열의 원소들을 출력 
		cout << elements[i] << ", ";
	cout << "]";
}

double vector::norm() // 벡터의 크기를 구하는 함수 norm의 정의 
{
	double init=0; // 벡터의 크기 값을 받을 변수의 선언 
	for (int i = 0; i < dimension ;i++) 
		init += elements[i] * elements[i]; // a+= :: a+b init = elements[0]^2 + elements[1]^2 + ....+ elements[dimension-1]^2
	return sqrt(init); // using <cmath> 
}

void vector::add(const vector& v) // add 함수의 정의 
{
	for (int i = 0; i < dimension; i++)
		this->elements[i] +=  v.elements[i]; // elements[i] = elements[i] + v.elements[i]
}

void vector::sub(const vector& v) // sub 함수의 정의 
{
	for (int i = 0; i < dimension; i++)
		this->elements[i] -= v.elements[i];  // elements[i] = elements[i] - v.elements[i]
}

double vector::operator*(const vector& v) // operator "*"의 정의 
{
	double init = 0; // 연산 값을 받을 변수 init 의 초기화 및 선언 
	for (int i = 0; i < dimension; i++)
		init += this->elements[i] * v.elements[i]; // 벡터의 내적 연산 정의 
	return init; 
}

bool vector::operator==(const vector& v) // operator "==" 의 정의 (bool operator) 
{
	for(int i=0;i<dimension;i++)
	return (this->dimension==v.dimension && this->elements[i]==v.elements[i]); //&&연산자를 통한 참 거짓 판별 후 값 제출 
}

int main() // main 함수 
{
	complex a(3, 4), b(1, 5);  // a와 b 값을 지정 
	cout << a.abs() << " " << b.abs() << endl; // a와 b값을 abs 함수에 넣은 뒤 cout
	cout << (a == b) << endl; // a와 b 값이 같은지 판별 ( == operator)
	
	complex c(0, 0); // c값의 초기화 및 선언 
	c = a + b; c.print(); cout << endl; // 연산 값 대입 후 print 함수 제출 및 줄 바꿈
	c = a - b; c.print(); cout << endl;
	c = a * b; c.print(); cout << endl;
	c = a / b; c.print(); cout << endl;
	

	double _A[] = { 1, 2, 3, 4, 5 }, _B[] = { 1.5, 2.5, 3.5, 4.5, 5.5 }; // _A와 _B 배열의 초기화 및 선언 
	vector A(_A, 5), A1(_A, 5), B(_B, 5), C(3), C1(_A, 3); // 벡터 A, A1, B, C , C1 선언 Constructor1,2 호출
	cout << A.norm() << " " << A1.norm() << " " << B.norm() << endl; // norm 함수를 통한 A, A1, B 벡터의 크기 계산 후 cout
	cout << (A == A) << " " << (A == A1) << " " << (A == B) << " " << (A == C) << " " << (A == C1) << endl;  // "==" operator를 이용한 계산 (bool operator 연산) 
	
	A1.set(0, -1.5);   //set 함수를 통한 A1[0]=-1.5 대입 
	cout << (A == A1) << endl; // 다른 벡터가 됌 
	

	A.add(B); A.print(); cout << endl;  //add와 sub함수를 통한 벡터끼리의 연산 
	A.sub(B); A.print(); cout << endl;  
	cout << A * B << endl; //"*" operator 연산을 통한 벡터의 내적 
}
