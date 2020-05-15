// 함수를 사용하지 않은 풀이
function solution(w, h) {
  var answer = 0;
  for (let i = 1; i <= w; i++) {
    answer += Math.floor(-(h / w) * i + h);
  }
  return answer * 2;
}

// 함수를 사용한 풀이
function solution(w, h) {
  var answer = 0;
  for (let i = 1; i <= w; i++) {
    answer += floor(i, w, h);
  }
  function floor(x, w, h) {
    return Math.floor(-(h / w) * x + h);
  }
  return answer * 2;
}
