//  나의 풀이
//  예전 문제라 그런지 형식이 조금 다름
process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const a = Number(n[0]),
    b = Number(n[1]);
  var answer = ("*".repeat(a) + "\n").repeat(b);
  console.log(answer);
});
