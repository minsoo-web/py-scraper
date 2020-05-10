//  나의 풀이
function solution(s) {
  return s
    .split(" ")
    .map((s) => {
      return s
        .split("")
        .map((l, index) => {
          if (index % 2 == 0) return l.toUpperCase();
          else return l.toLowerCase();
        })
        .join("");
    })
    .join(" ");
}
