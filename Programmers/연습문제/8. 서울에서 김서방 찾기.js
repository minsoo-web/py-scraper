//  나의 풀이
function solution(seoul) {
  var number = 0;
  seoul.forEach((el, index) => {
    el == "Kim" ? (number = index) : null;
  });
  var answer = `김서방은 ${number}에 있다`;
  return answer;
}
console.log(solution(["123", "Kim"]));
