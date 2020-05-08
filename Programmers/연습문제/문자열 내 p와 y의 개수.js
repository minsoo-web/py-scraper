// 처음 풀이
function solution(s) {
  var answer = true;
  var p = 0;
  var y = 0;

  for (let i = 0; i < s.length; i++) {
    var a = s[i].toUpperCase();
    switch (a) {
      case "P":
        p++;
        break;
      case "Y":
        y++;
        break;
      default:
        break;
    }
  }
  p - y == 0 ? answer : (answer = false);

  return answer;
}

console.log(solution("aa"));

//  toUpperCase 중복 해결

function solution(s) {
  var answer = true;
  var p = 0;
  var y = 0;
  s = s.toUpperCase();

  for (let i = 0; i < s.length; i++) {
    var a = s[i];
    switch (a) {
      case "P":
        p++;
        break;
      case "Y":
        y++;
        break;
      default:
        break;
    }
  }
  p - y == 0 ? answer : (answer = false);

  return answer;
}

console.log(solution("aa"));
