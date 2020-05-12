// 나의 풀이
function solution(N, stages) {
  var answer = [];
  for (let i = 1; i <= N; i++) {
    var ithStageOver = 0;
    var ithStageStay = 0;
    for (let j = 0; j < stages.length; j++) {
      if (stages[j] > i) {
        // 통과한 애들
        ithStageOver++;
      } else if (stages[j] == i) {
        // 머물고 있는 애들
        ithStageStay++;
      } else {
        // 거기까진 못간 애들
        continue;
      }
    }
    var ithfail = 0;
    if (ithStageStay + ithStageOver == 0) ithfail = 0;
    else ithfail = ithStageStay / (ithStageStay + ithStageOver);
    var Fail = {
      number: i,
      percent: ithfail,
    };
    answer.push(Fail);
  }
  var Answer = [];
  answer
    .sort((a, b) => {
      if (b.percent == a.percent) {
        return a.number - b.number;
      }
      return b.percent - a.percent;
    })
    .forEach((c) => {
      Answer.push(c.number);
    });
  return Answer;
}
