// 배열의 선언 방법
var myarr = ['1','2','3'];  // 색인(index)는 0부터 시작

// 배열의 요소(원소) 호출 방법 
myarr[0]; // 1
myarr[1]; // 2

function get_members() {
    return ['first', 'seconds','thirds'];
}

members= get_members();
// 대문자로 바꾸기
document.write(members[0].toUpperCase(), "<br>");
// 배열의 길이 계산
document.write(members.length,"<br>");

// 배열과 반복문의 결합
for(i=0;i<members.length;i++){
    document.write(members[i], "<br>");
}
// 접근자 --> 본래의 배열을 건들이지 않고 새로운 값을 반환
// concat : 두 배열을 합쳐서 새로운 배열을 반환  
var new_array = ['new','new2'];
var c = members.concat(new_array,'<br>');
// concat은 합친 배열을 반환하는 것이기에 members가 바뀌진 않는다.
document.write(c);

// slice : 배열의 원소 중 특정 구간에 해당하는 것들을 추출
// array.slice(start,end) --> end index의 원소는 추출되지 않는다 
var arr1 = ['a','b','c','d','e','f'];
var arr2 = arr1.slice(0,2);  
document.write("잘라지고 난 후 :",arr1,"<br>"); // arr1 그대로  
document.write("추출된 것 : ",arr2,"<br>");     // a,b 

// indexOf : 특정한 값의 index를 리턴한다. 
// 못찾을 경우 --> -1을 리턴 
var arr3 = ['a','b','c','d','e','f'];
var arr4 = arr3.indexOf('a',0); // 찾는 원소 , 시작할 인덱스 
document.write("a가 있는 배열의 index : ",arr4,"<br>");  // 0

// 수정 --> 본래의 배열을 수정함
// push : 배열의 마지막에 하나 이상의 요소를 추가한 후 그 배열의 길이를 반환한다.
var a = ['a','b','c'];
var push = a.push('d');
document.write(a);  // a,b,c,d
document.write(push,"<br>");  // 4 


// pop : 배열의 마지막 요소를 잘라내어 반환한다. (잘라낸 요소를 반환) 
var b = ['a','b','c'];
var pop = b.pop();
document.write(b);  // a,b
document.write(pop,"<br>");  // c

// shift : 배열의 첫 번째 요소를 제거한 후 모든 배열 요소를 왼쪽으로 이동 / 반환값은 삭제된 요소의 값이다.
var c = ['a','b','c'];
var shift = c.shift();
document.write(c);  // b,c
document.write(shift,"<br>");  // a 

// unshift : 배열 앞 부분에 요소를 한 개 이상 추가한 후 배열 요소를 모두 오른쪽으로 이동시킴 / 반환 값은 배열의 길이
var d = ['a','b','c'];
var unshift = d.unshift('new_a');
document.write(d);  // new_a,a,b,c
document.write(unshift,"<br>");  // 4 

// splice : 특정 인덱스의 배열 요소를 갈아 끼우거나 삭제할 때 사용한다. 
// Array.splice(index,howmany_delete,[data])
var e = ['a','b','c','d','e','f'];
var splice = e.splice(0,2,'new','new2');
document.write(e);  // new,new2,c,d,e,f
document.write(splice,"<br>");  // a,b

// sort : 배열 안의 요소를 정렬하는 방법 
var f = ['a','v','c','e'];
f.sort();
document.write("알파벳 정렬 : ",f,"<br>");  // a,c,e,v

var g = [1,2,6,7,9,4];
g.sort();
document.write("옳은 경우의 숫자 정렬 : ",g,"<br>");  // 1,2,4,6,7,9

// 주의할 점은 배열의 요소가 숫자일 경우 일시적으로 문자열로 변환된다.
// 유니코드로 인해 sort가 제대로 되지 않는 경우가 발생
var h = [40,100,1,5,2,25,19];
h.sort();
document.write("잘못된 경우의 숫자 정렬 : ",h,"<br>"); // 1,100,19,2,25,40,5

// 오름차순 정렬
// 비교 함수의 반환값이 0보다 작은 경우, a를 우선하여 정렬한다.
var i = [40,100,1,5,2,25,19];
i.sort(function(a,b) {
    return a-b;
});
document.write("오름차순 정렬 : ",i,"<br>"); // 1,2,19,25,40,100 

// 내림차순 정렬 
// 비교 함수의 반환값이 0보다 큰 경우, b를 우선하여 정렬한다.
i.sort(function(a,b) {
    return b-a;
});
document.write("내림차순 정렬 : ",i,"<br>"); // 100,40,25,19,2,1

// toString, toLocalString : 배열의 요소를 문자열로 변환하여 쉼표로 연결한 문자열을 반환
// localstring은 지역에 맞는 언어로 지역화함
var data = new Date();
document.write(('a','b','c',data).toString(),"<br>");
document.write(('a','b','c',data).toLocaleString(),"<br>");

// 반복 메서드
// for each : 인수로 받은 함수를 배열의 요소별로 한 번씩 실행한다.
// 문법 : Array.forEach(function());
var j = [1,2,3,4,5];
j.forEach(function(item,index,myarray){
    document.write("["+index+"] = " + item,"<br>");
});

// map : 원리는 forEach와 같지만 새로운 배열을 생성해서 반환한다는 점이 다르다.
var k =[1,4,9,25,36];
var new_k = k.map(function(item){
    return Math.sqrt(item);
});
document.write("원래 배열 : ",k,"<br>");
document.write("바뀐 배열 : ", new_k,"<br>");


// reduce : 배열의 첫번째 요소부터 마지막 요소까지 함수 처리를 한다.
// reduce가 끝난 배열은 number이다. 
// previousValue : 이전 함수의 return값 
// currentValue : 현재 배열 요소의 값
// currntIndex : 인덱스 
var l =[1,2,3,4,5];
var sum_l= l.reduce(function(previousValue,currentValue,index,array) {
    document.write(previousValue+"+"+currentValue+"="+(previousValue+currentValue),"<br>")
    return previousValue+currentValue;
});
document.write(sum_l,"<br>");

// 배열 디스트럭쳐링 
// 배열을 파괴하여 개별적인 변수에 할당
// ES6 
const arr = [1,2,3];

const [one,two,three] = arr;

document.write("할당된 변수 호출",one,two,three,"<br>");

