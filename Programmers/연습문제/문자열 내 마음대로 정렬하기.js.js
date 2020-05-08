// 처음 풀이
function solution(strings, n) {
  var array = [];
  var answer = [];
  strings.forEach((s) => {
    var input = {
      str: s,
      char: s.charAt(n),
    };
    array.push(input);
  });
  array
    .sort((a, b) => {
      if (a.char == b.char) return a.str < b.str ? -1 : a.str > b.str ? 1 : 0;
      return a.char < b.char ? -1 : a.char > b.char ? 1 : 0;
    })
    .forEach((e) => {
      answer.push(e.str);
    });

  return answer;
}

//  문자열에 index 사용이 가능함을 알게 된 후 풀이
function solution(strings, n) {
  strings.sort((a, b) => {
    if (a[n] == b[n]) return a < b ? -1 : a > b ? 1 : 0;
    return a[n] < b[n] ? -1 : a[n] > b[n] ? 1 : 0;
  });
  return strings;
}

// localeCompare
function solution(strings, n) {
  return strings.sort((s1, s2) =>
    s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n])
  );
}
