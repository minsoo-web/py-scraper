// 나의 풀이
function solution(n, arr1, arr2) {
  // 2진법과 "#" ," "으로 바꿔주는 함수
  function twoSharp(arr, n) {
    var one = arr
      .map((a) => {
        return a.toString(2); // 2진법으로 바꿔서
      })
      .map((b) => {
        // 자리수를 맞춰서 앞에 0을 추가해준다.
        if (b.length < n) {
          return "0".repeat(n - b.length) + b;
        } else {
          return b;
        }
      });
    // 0과 1을 # 과 공백으로 바꿔준다.
    one.forEach((OI, index, arr) => {
      arr[index] = OI.replace(/1/gi, "#").replace(/0/gi, " ");
    });
    // 바뀐 문자열 배열
    return one;
  }
  //  문제의 두 매트릭스를 변환한 뒤
  var one = twoSharp(arr1, n);
  var two = twoSharp(arr2, n);

  // 정답을 담을 매트릭스
  var answer = [];
  for (let i = 0; i < n; i++) {
    // 정답 행
    var row = [];
    // 두 행을 각각 선언해서 문자열로 다시 쪼갠다.
    var oneArray = one[i].split("");
    var twoArray = two[i].split("");

    // 하나하나 비교해서 필터링
    for (let j = 0; j < n; j++) {
      if (twoArray[j] == "#" || oneArray[j] == "#") {
        row.push("#");
      } else {
        row.push(" ");
      }
    }
    //  필터링된 행을 추가
    answer.push(row.join(""));
  }
  return answer;
}

// 테스트
console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));
