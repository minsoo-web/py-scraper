// 나의 풀이
function solution(arr) {
  if (arr.length == 1) {
    return [-1];
  }
  var array = [...arr];
  var min = array
    .sort((a, b) => {
      return b - a;
    })
    .pop();
  return arr.filter((a) => a != min);
}

// splice 를 이용한 풀이
// lsw015 , developer-do , 노국현 , choi8686 , 정만수 외 8 명님들의 풀이
function solution(arr) {
  arr.splice(arr.indexOf(Math.min(...arr)), 1);
  if (arr.length < 1) return [-1];
  return arr;
}
