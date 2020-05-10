//  나의 풀이
function solution(n) {
  var solution = 0;
  String(n)
    .split("")
    .map((s) => (solution += Number(s)));
  return solution;
}

// chi Hoon Koo, 박경철, 이승택님 풀이
// reduce 를 활용한 풀이
function solution(n) {
  return (n + "").split("").reduce((acc, curr) => (acc += parseInt(curr)), 0);
}
