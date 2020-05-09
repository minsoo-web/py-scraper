function solution(n) {
  var arr = [];

  for (var i = 2; i < n + 1; i++) {
    arr[i] = false;
  }

  for (var i = 2; i < n + 1; i++) {
    if (arr[i] == false) {
      for (var j = i * 2; j <= n; j += i) {
        arr[j] = true;
      }
    }
  }

  return arr.filter((n) => !n).length;
}
console.log(solution(5));
