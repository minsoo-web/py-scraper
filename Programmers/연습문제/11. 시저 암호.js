//  나의 풀이
function solution(s, n) {
  return s
    .split("") // 배열에 저장
    .map((s) => {
      var num = s.charCodeAt(); // ASCII 코드로 전환
      if (num == 32) {
        // 공백일 경우 공백인 상태로 되돌리기
        num;
        //   대문자일 경우
      } else if (num > 64 && num < 91) {
        num = num + n;
        //  Z를 넘어 갔을 경우
        num = num > 90 ? num - 26 : num;
      } else {
        num = num + n;
        //  z 를 넘어갔을 경우
        num = num > 122 ? num - 26 : num;
      }
      return String.fromCharCode(num);
    })
    .join(""); //  문자열로 합쳐주기
}
