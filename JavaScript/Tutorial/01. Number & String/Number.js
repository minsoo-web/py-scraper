// 숫자 1을 alert
alert(1); // 먼저 알람 

// 문자 1 -> 숫자 1과는 다름
alert("2"); // 두 번째 알람 

// alert를 두 번 쓰면 연속으로 알람이 뜸 

// C++ / C 언어와는 달리 JavaScipt에서는 정수, 실수 , 자연수 자료형의 구분이 없음
// 수학 연산 예시

document.write(Math.pow(3,2) ,"<br>"); // 3^2 
document.write(Math.round(10.6) ,"<br>")  // 반 올림
document.write(Math.ceil(10.2) , "<br>") // 10과 가장 가까운 큰 정수 --> 올림 
document.write(Math.floor(10.2) , "<br>") // 10과 가장 가까운 작은 정수 --> 버림 

document.write(Math.random(),"<br>");  // 1보다 작은 난수 생성 
document.write(Math.round(Math.random()*100),"<br>");
