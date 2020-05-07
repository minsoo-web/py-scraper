//  나의 풀이
function solution(arr, divisor) {
  var answer = arr.filter((a) => a % divisor == 0);
  answer = answer.sort((a, b) => {
    return a - b;
  });
  if (answer.length == 0) answer.push(-1);
  return answer;
}

//  더 깔끔한 남의 풀이
function solution(arr, divisor) {
  var answer = arr.filter((a) => a % divisor == 0);
  return answer.length ? answer.sort((a, b) => a - b) : [-1];
}
