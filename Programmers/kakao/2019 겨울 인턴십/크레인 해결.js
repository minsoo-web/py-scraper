function solution(board, moves) {
  let answer = 0;

  let stack = [];

  for (let x of moves) {
    x = x - 1;
    for (let i = 0; i < board.length; i++) {
      if (board[i][x] !== 0) {
        stack.push(board[i][x]);
        board[i][x] = 0;
        break;
      }
    }

    while (stack.length > 1) {
      let temp = stack.pop();
      if (temp === stack.slice(-1)[0]) {
        stack.pop();
        answer += 2;
      } else {
        stack.push(temp);
        break;
      }
    }
  }
  return answer;
}
