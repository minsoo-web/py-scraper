function solution(participant, completion) {
  participant.sort();
  completion.sort();
  var answer = "";

  var CompleteHash = {};

  // 중복되는지 검사
  for (var c in completion) {
    var name = completion[c];
    CompleteHash[name] === undefined
      ? (CompleteHash[name] = 1)
      : (CompleteHash[name] += 1);
  }

  // 참가한 걸 확인하면 1 씩 뺀다
  for (var p in participant) {
    var name = participant[p];
    CompleteHash[name] === undefined
      ? (answer = name)
      : (CompleteHash[name] -= 1);
  }

  // -1 인 선수가 완주하지 못한 선수
  for (var p in participant) {
    var name = participant[p];
    CompleteHash[name] === -1 ? (answer = name) : null;
  }
  return answer;
}

//  프로그래머스 정답지
function solution(participant, completion) {
  participant.sort();
  completion.sort();

  for (let i in participant) {
    if (participant[i] !== completion[i]) return participant[i];
  }
}
