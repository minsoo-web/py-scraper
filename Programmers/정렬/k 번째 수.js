function solution(array, commands) {
  // 답을 담을 배열 선언 
  var answer = [];
  
  for (var i = 0; i < commands.length; i++) {
    // 복제를 한 뒤 
    var CopyArray = [...array];

    // 문제에서 주어진 순서에 따라 자르고 정렬해서 넣는다. 
    answer.push(
      CopyArray.slice(commands[i][0] - 1, commands[i][1]).sort(
        (a, b) => a - b
      )[commands[i][2] - 1]
    );
  }

  return answer;
}
