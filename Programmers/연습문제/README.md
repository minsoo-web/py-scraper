# 연습문제

## 1. 2016 문제

문제 원문 보기  
https://programmers.co.kr/learn/courses/30/lessons/12901

---

처음에 다 풀었을때는 한번의 에러 없이 통과해서 너무 좋았는데 다른 사람의 풀이를 보고 뜨악했다.  
if else 제어를 반복하는 나 자신이 생각해도 출제자가 이 코드를 의도하고 낸 문제일까... 싶은 기분이 들어  
푸는 내내 찝찝함을 떨쳐낼 수 없었지만 `총 날짜를 구해서 7로 나눈 나머지를 구하자!` 라는 발상이  
코드를 길고 어렵게 만든 것 같다는 생각이 들었다.

### 꾸짖기

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

## 2. 같은 숫자는 싫어

문제 원문 보기  
https://programmers.co.kr/learn/courses/30/lessons/12906

---

이번 문제의 접근 방법은 카카오톡 인형뽑기 문제와 동일한 방법으로 했다.  
정답을 담을 바구니 하나를 만들어놓고 바구니의 마지막 원소와 순회하고 있는 배열의 원소와 비교해가며  
겹치지 않게 넣어주면 끝.

### 꾸짖기

문제는 나는 마지막 원소를 뽑기 위해 pop()을 사용해주었는데 이게 단점이 명확하다.  
pop을 통해 뽑아주었다면 다시 넣어주어야 한다는 것이다.  
카카오톡 문제의 경우는 같을 경우엔 둘 다 안 넣어주면 그만인데 이건 겹치면 원래 있던 원소는 유지되어야 한다.  
그래서 귀찮더라도 `answer[answer.length-1]` 이렇게 작성해주었어야 했다.  
(틀린 코드는 아니지만 코드가 길어지고 불필요한 동작을 반복하니까 어찌보면 틀린 코드)

넘사는 역시 filter를 생각하지 못했다는 점이다.  
출제자 역시 filter를 사용하는 것을 원했으리라  
더 열심히 해야겠다는 생각이 들었다.

## 3. 나누어 떨어지는 숫자 배열

나쁘지 않게 풀었다.  
다만 _같은 숫자는 싫어_ 문제를 풀지 않고 이 문제를 먼저 풀었다면 결과가 어땠을까 하는 의문이 들긴 한다.

### 꾸짖기

```js
answer = answer.sort((a, b) => {
  return a - b;
});

if (answer.length == 0) answer.push(-1);
return answer;
```

이 코드를 한 줄로 고칠 수 있다는 걸 좀만 더 생각해보자

## 4. 두 정수 사이의 합

문제 원본  
https://programmers.co.kr/learn/courses/30/lessons/12912

문제를 다 풀고 찝찝함이 남는 문제는 꼭 쉬운 풀이가 존재하는 것 같다는 생각이 들었다.

우선 접근 방법이 틀린 경우가 대부분인데  
이번에도 `두 수의 차이를 구해서 그만큼 반복문을 돌리면 되지 않을까?`하는 접근 방법이  
나의 코드를 길게 했다.

두 수의 차이를 구해서 => Math.abs() 메소드를 분명히 생각했는데 왜 등차수열의 합 공식은  
생각하지 못했을까

가우스의 재림을 잠시 감상하고 가겠다.

Heejune Wang , - , - 님의 풀이 입니다.

```js
function adder(a, b) {
  var result = 0;

  return ((a + b) * (Math.abs(b - a) + 1)) / 2;
}
```

## 5. 문자열 내 맘대로 정렬하기

문제 원본  
https://programmers.co.kr/learn/courses/30/lessons/12915

이번 문제는 문자열 내의 알파벳에 따른 정렬을 하는 문제이다.  
단번에 생각난 메소드는 charAt() 메소드인데 sort 가 생각이 안 나서 한동안 헤맸었다.

첫번째 풀이를 보면

```js
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
```

문자열 내의 n 번째 알파벳을 따로 저장해서 객체화 했는데  
문자열안에서도 인덱스 사용이 가능하다는 것을 다른 사람의 풀이를 통해 알게 되었다.

이에 따라 객체화 과정을 없앤 코드를 살펴보자

```js
function solution(strings, n) {
  strings.sort((a, b) => {
    if (a[n] == b[n]) return a < b ? -1 : a > b ? 1 : 0;
    return a[n] < b[n] ? -1 : a[n] > b[n] ? 1 : 0;
  });
  return strings;
}
```

### 꾸짖기

문자열 비교 메서드라는 검색을 한번만 해봤다면 어땠을까라는 아쉬움이 크다
