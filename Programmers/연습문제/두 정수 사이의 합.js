//  내 풀이
function solution(a, b) {
  var answer = 0;
  var num = [a, b].sort((a, b) => a - b);
  var len = num[1] - num[0];
  if (!len) return num[0];
  for (let i = 0; i < len + 1; i++) {
    answer += num[0];
    num[0]++;
  }

  return answer;
}

//  가우스의 재림
function adder(a, b) {
  var result = 0;

  return ((a + b) * (Math.abs(b - a) + 1)) / 2;
}
