function get_argument(arg) {  // arg는 매개변수(parameter)
    return arg;  // 출력 
}

alert(get_argument(1));

// 함수 정의의 다른 방법 
numbering = function() {
    var i = 0;
    while(i<10){
        document.write(i," ");
        i+=1;
    }
}
numbering();

// 함수의 선언과 호출을 동시에 --> 일회성 함수
(function() {
    var i = 0;
    while(i<10){
        document.write(i," ");
        i+=1;
    }
})();

// js에서 함수는 값이기 때문에 다른 함수의 인자(매개변수)로 전달 될수도 있다.
function cal(func,num){  // func은 함수 인자
    return func(num)     // 인자로 받은 함수의 return값을 
}                        // 리턴한다.
function increase(num){
    return num+1
}
function decrease(num){
    return num-1
}
alert(cal(increase,1)); // 2 
alert(cal(decrease,1)); // 0 


// 함수는 함수의 리턴 값으로도 사용될 수 있다. 
function cal1(mode){
    var funcs={
        'plus' : function(left,right){return left+right},
        'minus' : function(left,right){return left-right}
    }
    return funcs[mode];
}
alert(cal1('plus')(2,1));
alert(cal1('minus')(2,1));

// 배열의 값으로도 사용할 수 있다.
var process = [ //배열 
    function(input){return input+10;}, // index 0 = 함수 
    function(input){return input*input;}, // index 1 = 함수
    function(input){return input/2;}       // index 2 = 함수 
];
var input = 1; 
for(var i =0;i<process.length;i++){  // 0,1,2
    input = process[i](input);
    // 0->  10+1
    // 1 -> 11*11
    // 2 -> (11*11)/2
}
alert(input);

// 콜백 
// 값으로서의 함수 --> 함수를 인자로 사용이 가능함 
var numbers =[20,10,1,2,3,4,5,6,7,8,9]
var sortfunc = function(a,b){
    if(a>b){
        return 1;
    }
    else if(a<b){
        return -1;
    }
    else{
        return 0;
    }
}
// 이를 더 단순화 한다면 
var sortfunc = function(a,b){
    return a-b;  // 오름차순 
}
var sortfunc = function(a,b){
    return b-a;  // 내림차순 
}
console.log(numbers.sort(sortfunc));  // 배열이라는 객체 안에 내장되어 있는 함수 --> 메서드
// sort()안에 들어갈 수 있는 인수는 함수이다 --> sortfunc()
// 값으로서 sortfunc 이라는 함수를 사용

// 비동기 처리에서의 콜백 

