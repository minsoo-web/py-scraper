// 잘못된 나의 풀이
// 이렇게 해도 테스트 데이터는 통과한다. --> 틀린 풀이
function solution(num) {
  return num % 2 == 0 ? "Even" : "Odd";
}

// 음수를 고려한 풀이
function solution(num) {
  return Math.abs(num) % 2 == 0 ? "Even" : "Odd";
}
