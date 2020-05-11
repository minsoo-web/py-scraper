//  나의 풀이
function solution(n) {
  return n
    .split("")
    .map((a, index) => {
      if (index < n.length - 4) return (a = "*");
      else return a;
    })
    .join("");
}

// 삼항식을 사용한 정리
function solution(n) {
  return n
    .split("")
    .map((a, index) => {
      return index < n.length - 4 ? "*" : a;
    })
    .join("");
}

// JongGyuChoi 님 외 2명의 풀이
// repeat과 slice를사용한 풀이
function solution(n) {
  return "*".repeat(n.length - 4) + n.slice(-4);
}
