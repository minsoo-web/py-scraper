// 객체 반복문 for in 
// key값을 index로 반복 제어 한다. 
document.write("<h4>01 객체에서의 for in문</h4>")
var grade ={
    'first' : 1,
    'seconds' : 2,
    'thirds' : 3
};
for(key in grade){
    document.write('key : '+key+' and value :'+grade[key],'<br>');
}

// for in문은 배열에서도 사용 가능하다
document.write("<h4>02 배열에서의 for in문</h4>");
const array =['a','b','c'];

for(name in  array){
    document.write('index of array : '+name+' / ');
    document.write('value of array : '+array[name],'<br>');   
}

// 객체 내의 원소는 객체가 될 수도 함수(메서드)가 될 수도 있다.
document.write("<h4>객체 내의 객체 & 객체 내의 함수</h4>");
let grades ={
    'object2' :{
        'first' : 1,
        'seconds' : 2,
        'thirds' :3
    },
    'function' : function(){
        for(let key in this.object2){
            document.write('key : '+key+' and value :'+grade[key],'<br>');
        };
    }
};
// 객체 내의 함수 호출
grades.function(); 

// javaScript에서는 함수도 객체다 
function a(){} // var a = function(){}

a= {                // a라는 객체에서 b는 메서드이다.
    'b':function(){}  // b = key or property 
                    // function(){} = value --> method
};




