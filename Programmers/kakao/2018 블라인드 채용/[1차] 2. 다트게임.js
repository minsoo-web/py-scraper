// 나의 풀이
function solution(dartResult) {
  // 정규표현식을 사용하지 않은 점수 분할
  var app = [];
  var b = "";
  dartResult.split("").forEach((a) => {
    if (!isNaN(a)) {
      if (!isNaN(b)) b += a;
      else {
        app.push(b);
        b = "";
        b += a;
      }
    } else {
      b += a;
    }
  });
  app.push(b);
  // e.g app = [1T,2D*,3S#]

  // 정답을 담을 배열
  var answer = [];
  app.forEach((c, index) => {
    // 두 자리수 일때와 한 자리수일때
    if (isNaN(c[1])) {
      var number = Number(c[0]);
      var p = c[1];
    } else {
      var number = Number(c[0] + c[1]);
      var p = c[2];
    }

    // 점수 계산
    switch (p) {
      case "S":
        number = number;
        break;
      case "D":
        number = Math.pow(number, 2);
        break;
      default:
        // T
        number = Math.pow(number, 3);
        break;
    }

    //
    if (c[c.length - 1] == "#" || c[c.length - 1] == "*") {
      var e = c[c.length - 1];
      switch (e) {
        case "#":
          answer.push(-number);
          break;
        default:
          answer.push(number * 2);
          if (index != 0) answer[index - 1] += answer[index - 1];
          break;
      }
    } else {
      answer.push(number);
    }
  });
  return answer.reduce((acc, cur) => (acc += cur), 0);
}
