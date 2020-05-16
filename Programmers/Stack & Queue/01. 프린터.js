function solution(priorities, location) {
  //  우선권이 큰 순서대로 변환함
  var order = [...priorities].sort().reverse();
  var a = [];
  priorities.forEach((element, index) => {
    var el = {
      number: element,
      index: index,
    };
    a.push(el);
  });
  var answer = 0;

  function print(ordered, array, index) {
    if (array[0].number < ordered[0]) {
      // 나갈 순서가 아니라면
      array.push(array[0]); // 뒤로 보낸다.
      array.shift();
    }
    // 나갈 순서라면
    else {
      // 방금 나간 애가 원하던 index의 요소 였는지 검증하고
      if (array.shift().index == index) {
        // 맞으니까 얘가 프린트 된 횟수를 더해서 리턴한다.
        return ++answer;
      } else {
        // 아니라면 다음 단계를 진행한다.
        ordered.shift();
        answer++;
      }
    }
    // 정답이 나올때 까지 재귀로 돌린다.
    return print(ordered, array, index);
  }
  return print(order, a, location);
}

// 테스트
console.log(solution([2, 1, 3, 2], 2));
