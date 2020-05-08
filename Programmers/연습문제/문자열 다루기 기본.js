function solution(s) {
  return s.length == 4 || s.length == 6
    ? s.split("").filter((p) => !isNaN(p)).length == s.length
    : false;
}
console.log(solution(""));
