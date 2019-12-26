function getClosure(){
    var text = 'variable 1';
    return function(){
        return text;
    };
};

var closure = getClosure();
document.write(closure(),"<br>");
// 외부함수가 종료되었음에도 내부함수가 외부함수의 변수를 참조하고 있다

var base = 'Hello, ';
function sayHelloto(name){
    var text = base + name;
    return function(){
        document.write(text,'<br>');
    };
};

var Hello1 = sayHelloto('승민');
var Hello2 = sayHelloto('현섭');
var Hello3 = sayHelloto('유근');
Hello1();
Hello2();
Hello3();

// 클로저를 통한 은닉화
// private variables에 대한 접근 문제
document.write('클로저를 통한 은닉화 : ', '<br>');
function Hello(name){
    this._name = name;
}
// Hello()로 생성된 객체들은 모두 _name이라는 변수를 가지게 된다
// 변수명 앞에 _를 포함했기 때문에 일반적인 JS네이밍 컨벤션을
// 생각해 봤을 때 이 변수는 Private variable으로 쓰고 싶다는 의도를 알 수 있다.

Hello.prototype.say = function(){
    document.write('hello, '+this._name,'<br>');
}

var hello1 = new Hello('승민');
var hello2 = new Hello('현섭');
var hello3 = new Hello('유근');

hello1.say(); // hello, 승민
hello2.say(); // hello, 현섭
hello3.say(); // hello, 유근
// 하지만 실제로는 여전히 외부에서 쉽게 접근가능한 변수이다.
hello1._name = 'annoymous';
hello1.say(); // hello, annoymous

// 이 경우에는 클로져를 사용하면 외부에서 변수에 직접 접근하는 것을 제한할 수 있다. 
function hello(name){
    var _name = name;
    return function(){
        document.write('hello, '+_name,'<br>');
    };
};

var hello4 = hello('승민');
var hello5 = hello('현섭');
var hello6 = hello('유근');

hello4(); // hello, 승민
hello5(); // hello, 현섭
hello6(); // hello, 유근
// _name에 접근할 수 없다 

// 반복문 클로저
var i;
for (i=0;i<10;i++){
    setTimeout(function(){
        document.write(i);
    },100);
} // setTimeout에 들어온 함수는 0.1초 뒤에 실행이 되는데
// 0.1초 동안 반복문이 모두 완료가 되어서 i값은 이미 10이 된 상태

// 클로저를 사용

var i;
for (i=0; i<10; i++){
    (function(j){
        setTimeout(function(){
            document.write(j);
        },100);
    })(i);
}



