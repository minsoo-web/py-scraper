// setTimeout : 일정 시간 간격 이후에 함수가 한 번 실행됩니다
// setInterval : 일정 시간 간격 동안 함수가 주기적으로 실행됩니다.
// 둘 다 메소드 --> 함수이다.

// setTimeout : let timerId = setTimeout(func|code, [delay],[arg1],,,,)
// func|code : 실행을 위한 함수나 문자열 
// delay : ms 단위이며 1000ms = 1s 
// arg1, arg2... : 함수에 대한 인자(argument들입니다.) (IE9 미만의 버전x)

function hi(){
    alert('hello');
}

setTimeout(hi,1000); // 함수는 ()가 아닌 이름만 호출

// 인자가 있는 경우 
function sayhi(phrase,who){
    alert(phrase + ', '+who);
}

setTimeout(sayhi,1000,"Hello","minsoo");

// clearTimeout으로 취소하기 문법 : 
// let timerId = setTimeout(...);
// clearTimeout(timerId);
let timerId = setTimeout(()=>alert("never happens"),1000); 
// timerId 는 숫자 (브라우저 내에서)
alert(timerId);  

clearTimeout(timerId); // never happens가 작동하지 않고 timerId만 alert된다. 
alert(timerId);


// setInterval 
// 문법은 setTimeout과 같다. 
// 부여된 시간간격으로 주기적으로 실행 
// 주기적으로 호출되는 것을 종료하고 싶다면 clearInterval(timerId)를 호출

// let timerId = setInterval(...);
// 2초마다 반복
let timerId = setInterval(()=>alert('tick'),2000);

// 5초 후에 정지 
setTimeout(()=>{
    clearInterval(timerId);
    alert('stop');
},5000);

// 재귀적인 setTimeout
// 무언가를 정기적으로 실현시키는 두 가지 방법 
// 1. setInterval 
// 2. 재귀적인 setTimeout 

let timerId = setTimeout(function tick(){
    alert('tick');
    timerId = setTimeout(tick,2000);
},2000)

// 서버에 5초마다 데이터를 물어보는 요청을 보내는 서비스를 작성할 때
// 서버에 요청이 너무 많을 때는 계속해서 요청을 보내기보다는 
// 우리가 주기를 10초 20초 40초 정도로 늘리는 것이 바람직

// 의사코드
let delay =5000;

let timerId = setTimeout(function request(){
    // 요청 전송
    if(/* 서버 과부화 때문에 실패한다면 */){
        // 인터벌 증가
        delay *=2;
    }
    timerId=setTimeout(request,delay)
},delay);

// 위와 같이 재귀적인 setTimeout이 setInterval보다 유연하다 
// setInterval은 함수의 호출이 시작되면 딜레이가 시작되는 반면
// 재귀적인 setTimeout은 함수의 호출이 끝이나야 딜레이가 시작된다.
// --> 고정된 딜레이를 보장

// setTimeout(func,0) 또는 setTimeout(finc) 의 용례 
// 딜레이가 없는 경우

setTimeout(()=>alert("world")); // hello가 출력된 후 바로 이어서 출력
alert("hello");

// CPU 소비가 많은 작업을 Splitting 하기 
// splitting 안 한 상태 
let i =0;
let start = Date.now();
function count(){
    //무거운 작업을 하자
    for (let j; j<1e9;j++){
        i++;
    }
    alert("Done in"+(Date.now()-start)+'ms'); /* 얼마나 시간이 걸렸는지 */
}

count();

// splitting을 해보자 

let i =0;
let start = Date.now();
function count(){
    // 약간 무거운 작업을 하자
    do {
        i++;
    }while(i%1e6!=0);
    
    if(i==1e9){
        alert("Done in"+(Date.now()-start)+'ms'); /* 얼마나 시간이 걸렸는지 */
    }
    else{
        setTimeout(count); /* 호출을 스케줄링 합니다 */
    }// 개선을 하고 싶다면 else를 if(i <1e9 - 1e6){setTimesout(count)}를 do-while
    // 구문보다 먼저 호출한다
    
}

count();

