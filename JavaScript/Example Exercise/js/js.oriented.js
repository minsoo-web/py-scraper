// 생활코딩 객체지향프로그래밍 수업에서 나온 예제들을 작성해봤습니다.
// https://www.youtube.com/watch?v=05XJHbsaYc0&list=PLuHgQVnccGMAMctarDlPyv6upFUUnpSO3&index=5

var memberObject ={
    manager:'egoing',
    developer:'graphittie',
    designer:'leezhce'
};
// 읽는 법 
console.log(memberObject.designer);
console.log(memberObject['designer']);

// 수정 
memberObject.designer = '민수';

// 삭제
delete memberObject.manager;

// 배열은 반복문과 만날때 빛나고
// 객체 또한 반복문과 잘 어울린다. 

// 객체에서 사용되는 포문은 for in이다

for(let name in memberObject){
    console.log(name); // 프로퍼티를 반환
    console.log(memberObject[name]) // value를 반환
}

// 나만의 내장 객체를 만들어봅시다

let MyMath = { 
    PI:Math.PI,
    random:function(){
        return Math.random();
    },
    floor:function(){
        return Math.floor(val);
    }
};

