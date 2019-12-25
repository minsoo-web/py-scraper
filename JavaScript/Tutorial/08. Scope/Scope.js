var vscope = 'global';  // 전역 변수
function fscope(){
    var vscope = 'local';  // 지역 변수 --> 함수 내에서만 접근 
    alert(vscope);   // 지역 변수에 접근 
}
fscope();   // local 

var vscope = 'global';  // 전역 변수
function fscope(){
    vscope = 'local';  // 전역 변수 
    alert(vscope);   // 전역 변수에 접근 
}
fscope();   // local 

var vscope = 'global';  // 전역 변수
function fscope(){
    var vscope = 'local';  // 지역 변수 --> 함수 내에서만 접근 
    vscope = 'local'   // 지역 변수 값만을 변경
}
fscope();   // 지역변수 vscope = local 
alert(vscope); // 전역변수 vscope = global 

// 유효 범위 예제 
function a(){
    var i = 0;  // 지역변수
}

for (var i = 0; i <5; i++){  // 전역 변수 (함수에 소속x--> js에서 지역변수는 함수에서만 유효)
    a(); 
    document.write(i);      // 01234
}

// 만약 a 함수에 i를 var i 가 아닌 i = 0으로 만든다면 
// i의 값이 계속 0으로 초기화 되면서 무한루프에 빠진다

// 정적 유효 범위 
// 사용될 때가 아닌 정의될 때의 전역변수를 참조하는 것 

var i = 5;

function a(){
    var i = 10; // 지역변수
    b();
}

function b(){
    document.write(i);   // i를 호출 --> 선언 되었을때가 아닌 
                        // 정의가 될때의 전역변수 i=5를 호출
}

