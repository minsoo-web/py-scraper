//  나의 풀이
function solution(n) {
  return String(n)
    .split("")
    .reverse()
    .map((s) => Number(s));
}

//  chi Hoon Koo 님 풀이
function solition(n) {
  var arr = [];
  do {
    arr.push(n % 10);
    n = Math.floor(n / 10);
  } while (n > 0);
}
