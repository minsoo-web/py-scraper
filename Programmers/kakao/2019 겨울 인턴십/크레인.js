function solution(board, moves) {
    const B = board.map((b) => b.filter((z) => z != 0));
    var answer = 0;
    const result = [];
  
    moves.forEach((m) => {
      if (B[m - 1].length) {
        var popp = B[m - 1].pop();
        if (result.length) {
          var top = result.pop();
          if (top === popp) {
            answer += 2;
          } else {
            result.push(top);
            result.push(popp);
          }
        } else {
          result.push(popp);
        }
      }
    });
    return result;
  }
  console.log(
    solution(
      [
        [3, 5, 1, 3, 1, 2],
        [4, 2, 4, 4, 2, 4],
        [0, 2, 5, 0, 1, 5],
        [4, 2, 4, 4, 2, 2],
        [3, 5, 1, 3, 1, 4],
      ],
      [1, 5, 3, 5, 1, 2, 1, 4]
    )
  );