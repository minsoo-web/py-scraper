function solution(answers) {
  var problemNum = answers.length;

  var firstStudent = [];
  var secondStudent = [];
  var thirdStudent = [];

  // 1번 학생
  var cnt = 1;
  for (let i = 0; i < problemNum; i++) {
    firstStudent.push(cnt);
    if (cnt % 5 === 0) {
      cnt = 0;
    }
    cnt++;
  }

  //  2번 학생
  var cnt2 = 1;
  for (let i = 0; i < problemNum; i++) {
    if (i % 2 === 0) {
      secondStudent.push(2);
    } else {
      if (cnt2 === 2) {
        cnt2++;
        secondStudent.push(cnt2);
      } else {
        secondStudent.push(cnt2);
      }
      cnt2++;
      if (cnt2 === 6) {
        cnt2 = 1;
      }
    }
  }
  // 3번 학생
  var cnt3 = 1;
  for (let i = 0; i < problemNum; i++) {
    if (cnt3 < 3) {
      thirdStudent.push(3);
      cnt3++;
    } else if (cnt3 >= 3 && cnt3 < 5) {
      thirdStudent.push(1);
      cnt3++;
    } else if (cnt3 >= 5 && cnt3 < 7) {
      thirdStudent.push(2);
      cnt3++;
    } else if (cnt3 >= 7 && cnt3 < 9) {
      thirdStudent.push(4);
      cnt3++;
    } else if (cnt3 === 9) {
      thirdStudent.push(5);
      cnt3++;
    } else {
      thirdStudent.push(5);
      cnt3 = 1;
    }
  }

  var first = {
    num: 0,
    index: 1,
  };
  var second = {
    num: 0,
    index: 2,
  };
  var third = {
    num: 0,
    index: 3,
  };

  //    문제를 맞춘만큼 num을 + 해준다.
  for (let i = 0; i < problemNum; i++) {
    if (answers[i] === firstStudent[i]) {
      first.num += 1;
    }
    if (answers[i] === secondStudent[i]) {
      second.num += 1;
    }
    if (answers[i] === thirdStudent[i]) {
      third.num += 1;
    }
  }

  var answer = [];

  //    많이 맞춘 순서대로 정렬한다.
  var max = Math.max(Math.max(first.num, second.num), third.num);
  if (max === first.num) {
    answer.push(first.index);
  }
  if (max === second.num) {
    answer.push(second.index);
  }
  if (max === third.num) {
    answer.push(third.index);
  }
  return answer;
}
