// 내 풀이
function solution(num) {
  var count = 0;
  function Collatz(number) {
    //   500회가 넘었으니
    if (count == 500) return -1;
    // number가 1이라면 횟수를 return
    if (number == 1) return count;
    else {
      // 조건에 맞는 number 변환식
      number = number % 2 == 0 ? number / 2 : number * 3 + 1;
      count++;
      // 변경된 값을 통한 재귀함수 호출
      return Collatz(number);
    }
  }
  return Collatz(num);
}
