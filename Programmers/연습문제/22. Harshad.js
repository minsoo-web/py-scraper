// 나의 풀이
function solution(x) {
  return x % (x + "").split("").reduce((acc, cur) => (acc += +cur), 0) == 0
    ? true
    : false;
}

// ! 연산자를 더한 풀이
function solution(x) {
  return !(x % (x + "").split("").reduce((acc, cur) => (acc += +cur), 0) == 0);
}
