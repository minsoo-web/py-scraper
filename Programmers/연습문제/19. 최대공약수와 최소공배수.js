// 오징어 코드
function solution(n, m) {
  var max = Math.max(n, m);
  var div = [];
  // 정의에 충실한 최대 공약수
  for (let i = 1; i <= max; i++) {
    if (n % i == 0 && m % i == 0) div.push(i);
  }

  //   정의에 충실한 최소 공배수
  var mul = [];
  for (let i = 1; i <= m * n; i++) {
    if (i % m == 0 && i % n == 0) mul.push(i);
  }

  var answer = [];
  answer.push(Math.max(...div));
  answer.push(Math.min(...mul));
  return answer;
}

// 그나마 깨달음을 얻은 코드
function solution(n, m) {
  var max = Math.max(n, m);
  var div = [];
  for (let i = 1; i <= max; i++) {
    if (n % i == 0 && m % i == 0) div.push(i);
  }
  // 최소 공배수... 이렇게 구하면 되는 거구나
  var mul = (m * n) / Math.max(...div);

  var answer = [];
  answer.push(Math.max(...div));
  answer.push(Math.min(...mul));
  return answer;
}
