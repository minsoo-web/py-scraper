// 나의 풀이
function solution(x, n) {
  var answer = [];
  let j = x;
  for (let i = 0; i < n; i++) {
    x = j * (i + 1);
    answer[i] = x;
  }
  return answer;
}
