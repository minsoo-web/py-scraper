// 나의 풀이
function solution(s) {
  var arr = s.split("");
  str = arr
    .sort((a, b) => {
      return a > b ? -1 : a < b ? 1 : 0;
    })
    .join("");

  return str;
}

console.log(solution("Zbcdefg"));

// awer000,-,박영규,김범석,-외 40명님들의 풀이
function solution(s) {
  return s.split("").sort().reverse().join("");
}
