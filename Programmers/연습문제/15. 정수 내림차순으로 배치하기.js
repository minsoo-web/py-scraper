// 나의 풀이
function solution(n) {
  return Number(
    String(n)
      .split("")
      .sort((a, b) => Number(b) - Number(a))
      .join("")
  );
}

//  reverse()를 활용한 풀이
function solution(n) {
  return +(n + "").split("").sort().reverse().join("");
}
