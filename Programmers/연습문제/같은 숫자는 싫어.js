//  내 풀이 1
function solution(arr) {
  var answer = [];
  answer.push(arr[0]);
  for (let i = 1; i < arr.length; i++) {
    var last = answer.pop();
    if (last === arr[i]) {
      answer.push(last);
    } else {
      answer.push(last);
      answer.push(arr[i]);
    }
  }
  return answer;
}

// 효율성 테스트 통과 못한 풀이
function solution(arr) {
  var answer = [];
  answer.push(arr[0]);
  var i = 1;
  (function getSize(i) {
    if (i == arr.length) {
      return;
    }
    var last = answer.pop();
    if (last === arr[i]) {
      answer.push(last);
    } else {
      answer.push(last);
      answer.push(arr[i]);
    }
    i++;
    getSize(i);
  })(i);
  return answer;
}

// 다른 사람 풀이
function solution(arr) {
  var answer = [arr[0]];

  for (let i = 1; i < arr.length; i++) {
    if (answer[answer.length - 1] !== arr[i]) {
      answer.push(arr[i]);
    }
  }

  return answer;
}

// 넘고 싶은 산
function solution(arr) {
  return arr.filter((val, index) => val != arr[index + 1]);
}

