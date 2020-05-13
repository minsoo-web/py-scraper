function solution(n, lost, reserve) {
  var students = [];
  for (let i = 0; i < n; i++) {
    var student = {
      number: i + 1, // 학생번호 -> 굳이 필요하진 않다.
      cloth: 1,
      reservation: 0, // 예약가능한 수
      reserved: [], // 예약 받은 index
    };
    students.push(student);
  }

  lost.forEach((a) => {
    students[a - 1].cloth--;
  });
  reserve.forEach((a) => {
    students[a - 1].cloth++;
  });

  // 예약 시스템
  for (let i = 0; i < n; i++) {
    if (students[i].cloth == 0) {
      if (i == 0) {
        if (students[i + 1].cloth == 2) {
          students[i + 1].reserved = [i];
          students[i].reservation++;
        }
      } else if (i == n - 1) {
        if (students[i - 1].cloth == 2) {
          students[i - 1].reserved.push(i);
          students[i].reservation++;
        }
      } else {
        if (students[i - 1].cloth == 2) {
          students[i - 1].reserved.push(i);
          students[i].reservation++;
        }
        if (students[i + 1].cloth == 2) {
          students[i + 1].reserved = [i];
          students[i].reservation++;
        }
      }
    }
  }

  // 최적의 선택
  for (let i = 0; i < n; i++) {
    // 한쪽 한테 밖에 못 주는 애
    if (students[i].reserved.length == 1) {
      // 예약번호
      var reserveNum = students[i].reserved[0];
      // 예약 해결해주고
      students[reserveNum].reservation = 0;
      // 옷 주고
      students[reserveNum].cloth++;
      // 자기 옷 깎고
      students[i].cloth--;
    }
  }

  for (let i = 0; i < n; i++) {
    if (students[i].cloth == 0) {
      if (i == 0) {
        if (students[i + 1].cloth == 2) {
          students[i + 1].cloth = 1;
          students[i + 1].reserved = [i];
          students[i].cloth = 1;
        }
      } else if (i == n - 1) {
        if (students[i - 1].cloth == 2) {
          students[i - 1].cloth = 1;
          students[i - 1].reserved = [i];
          students[i].cloth = 1;
        }
      } else {
        if (students[i - 1].cloth == 2) {
          students[i - 1].cloth = 1;
          students[i - 1].reserved = [i];
          students[i].cloth = 1;
        } else if (students[i + 1].cloth == 2) {
          students[i + 1].cloth = 1;
          students[i + 1].reserved = [i];
          students[i].cloth = 1;
        }
      }

      students[i].reservation--;
    }
  }

  console.log(students.filter((a) => a.cloth > 0).length);
}
solution(5, [2, 4, 5], [1, 3, 5]);
