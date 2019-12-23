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