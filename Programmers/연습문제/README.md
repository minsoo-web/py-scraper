# 2016 문제

문제 원문 보기  
https://programmers.co.kr/learn/courses/30/lessons/12901

---

처음에 다 풀었을때는 한번의 에러 없이 통과해서 너무 좋았는데 다른 사람의 풀이를 보고 뜨악했다.  
if else 제어를 반복하는 나 자신이 생각해도 출제자가 이 코드를 의도하고 낸 문제일까... 싶은 기분이 들어  
푸는 내내 찝찝함을 떨쳐낼 수 없었지만 `총 날짜를 구해서 7로 나눈 나머지를 구하자!` 라는 발상이  
코드를 길고 어렵게 만든 것 같다는 생각이 들었다.

## 꾸짖기

Date 객체를 활용하지 못한건 백번 양보해서 그렇다 쳐도

```js
if (plusDay == 1) {
  answer = "SAT";
} else if (plusDay == 2) {
  answer = "SUN";
} else if (plusDay == 3) {
  answer = "MON";
} else if (plusDay == 4) {
  answer = "TUE";
} else if (plusDay == 5) {
  answer = "WED";
} else if (plusDay == 6) {
  answer = "THU";
} else {
  answer = "FRI";
}
```

이 코드는 진짜 맞아도 싸다.  
너무 창피해서 2016.js 에는 배열로 고쳐 적었다.
