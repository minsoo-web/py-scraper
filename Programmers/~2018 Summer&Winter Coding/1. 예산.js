// 나의 풀이 1.94 ~ 2.25
function solution(d, budget) {
  var count = 0;
  // 오름차순으로 정렬 하고
  d.sort((a, b) => {
    return a - b;
  }).map((a) => {
    //   줄 수 있는 예산이 있다면
    if (budget - a >= 0) {
      // 예산을 주고 카운트를 증가시킨다.
      budget -= a;
      count++;
    }
  });
  return count;
}

// 나의 풀이 1.95 ~ 2.16
function solution(d, budget) {
  var count = 0;
  d.sort((a, b) => {
    return a - b;
  });
  for (var a of d) {
    if (budget - a >= 0) {
      budget -= a;
      count++;
    } else {
      break;
    }
  }
  return count;
}
