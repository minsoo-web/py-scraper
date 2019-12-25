document.write("this is string <br> " );

document.write("this is string <br> this is another string <br>");

alert("this is string \nthis is another string") ;

// string.charCodeAt(index)
// index에 해당하는 문자의 unicode 값을 리턴
var string1 = "hello world"
document.write(string1.charCodeAt(0),"<br>");  // H의 unicode 값

// string1.concat(string2,string3....)
// string1에 인자로 받은 스트링 값들을 합쳐준다. (순서대로)
var str="첫번째 스트링"
var str2="두번째 스트링"
document.write(str.concat(str2),"<br>");
document.write((str + str2),"<br>");

// replace : 문자열을 다른 문자열로 치환환 결과를 리턴
// string.replace(delete_string, new_string);
var str="대체될 텍스트. 유지될 텍스트 <br>";
document.write(str.replace('대체될 텍스트','새로운 텍스트'));

// search : 정규표현식을 이용해 문자열내에서 특정한 문자열의 위치 값을 알아냄
// string.search(/find_string/);
var str="coding everybody";
document.write(str.search(/e/), "<br>");

// slice : 문자열의 특정구간을 검색, 검색 결과에 해당하는 문자열을 반환
// string.slice(begin, end);  --> begin과 end는 숫자.
var str="coding everybody";
document.write(str.slice(0,7),"<br>");  // coding 
document.write(str.slice(0,9),"<br>");  // coding e

// substr : 문자열에서 특정구간의 문자열을 추출한다.
// string.substr(start, end_from_start) : 시작지점(1)부터 몇번째 칸(n)까지의 문자열을 추출

// substring : 문자열에서 특정구간의 문자열을 추출한다.
// string.substring(start, end_from_start) : 시작지점(1)부터 몇번째 칸(n)까지의 문자열을 추출
var str="coding everybody";
document.write(str.slice(0,7),"<br>");  // coding 
document.write(str.slice(0,9),"<br>");