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

---

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

---

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

---

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

---

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

---

## 6. 문자열 내림차순으로 배치하기

문자열 관련 정렬 문제를 몇번 풀다보니 감이 조금 잡힌다는 느낌이 든다.

한 가지 아쉬웠던 점에 대해서 피드백하고 넘어가려고 한다.

### 꾸짖기

메서드 체이닝을 적극 활용했다면 코드가 더 간결하고 짧아졌을거라 생각함

바꾸기 전

```js
function solution(s) {
  var arr = s.split("");
  str = arr
    .sort((a, b) => {
      return a > b ? -1 : a < b ? 1 : 0;
    })
    .join("");

  return str;
}
```

바꾼 뒤

```js
function solution(s) {
  return s.split("").sort((a,b)=> {return a>b ? -1 : a<b ? 1 : 0>}).join("");
  // sort().reverse() 가 가능하다... ㄸㄹㄹ
}
```

---

## 7. 문자열 다루기 기본

원본 보기  
https://programmers.co.kr/learn/courses/30/lessons/12918

문자열 길이가 4 또는 6인지를 검증하는 건 문제가 안 되는데  
문자열이 숫자로만 이루어져 있는지를 검증하는 방법이 뭘까 생각했는데  
찾아보던중 isNaN 이라는 메소드를 알게 되었다.

추가로 NaN == NaN 이 false 라는 걸 알게되었다.  
지 자스...

---

## 8. 서울에서 김서방 찾기

원본 보기  
https://programmers.co.kr/learn/courses/30/lessons/12919

이번 풀이는 forEach 문을 사용해서 해당 원소를 찾고, 찾은 원소의 index를 반환하는 코드를 짜보았다.  
문제는 위와 같은 역할을 하는 메소드가 이미 정의되어 있다는 점이고, 난 그걸 생각하지 못했다.

indexOf를 활용한 한줄 코드를 보고 가자.

원래 나의 풀이는 1.6ms,37.4MB  
indexOf 를 활용한 한 줄 코드 또한 1.6ms,37.4MB 였다.  
같은 역할을 하는 메서드를 활용해서 간결하게 표현한 것이니 내부적으로 돌아가는 효율성 테스트는 동일하다는 결론이 나왔다.

```js
function solution(seoul) {
  return `김서방은 ${seoul.indexOf("Kim")}에 있다.`;
}
```

그래도 알아보기 쉽게 간결하게 적도록 노력하자.

---

## 9. 소수 찾기

문제 원본 보기
https://programmers.co.kr/learn/courses/30/lessons/12921

처음에 소수인지 아닌지의 문제랑 소수의 갯수를 찾는 문제랑 헷갈렸다.  
for문을 돌며 일일이 검사해서 카운트를 늘려보자! 가 처음 접근 방식이었는데  
생각해보니 불필요한 연산도 많고 해서 다른 방법을 찾아봤는데 역시나 였다.

`에라토스테네스의 체`에 대해 간단하게 설명 하면  
모든 자연수는 소수들의 곱으로 표현이 되므로, 2부터 n-1 까지의 수 중에서 2의 배수를 모두 체로 거르고  
남은 숫자들 중에서 3의 배수를 거르고.. 반복해서 거르면 소수들만 남습니다.

### 꾸짖기

실제 코딩테스트에 나왔다면 영락없이 틀렸을 문제...  
검색에 의존하지 않고 푸는 연습을 하자.

---

## 10. 수박수박수

문제 원본 보기  
https://programmers.co.kr/learn/courses/30/lessons/12922

당연히 join 메소드를 써야겠다고 생각했고 당연히 반복문을 통해 배열 삽입을  
했는데 다른 사람 풀이를 보고 충격 받은 문제 중 하나

### 몰랐던 메소드

String.prototype.repeat(count)

count : 문자열을 반복할 횟수. 0과 양의 무한대 사이의 정수

반환값 : 현재 문자열을 주어진 횟수만큼 반복해 붙인 새로운 문자열.

예외 : RangeError - 반복횟수는 양의 정수여야 한다.

**효율성 테스트는 똑같다.**

---

## 11. 시저 암호

문제 원본 보기  
https://programmers.co.kr/learn/courses/30/lessons/12926

### 접근 방법

처음 문제를 보고 드는 생각은

1. ASCII 코드 써야하나?
2. 혹시 js 는 "a"+1 하면 "b" 가 나오나?

js 는 상상을 함부로 하면 안 되기에 2번도 혹시나 하는 마음에 해봤지만 역시나였다.  
ASCII code 표와 변환 메소드를 참고해가며 문제를 풀었는데 7점 짜리 문제라 그런지  
예외 처리가 생각보다 까다로웠다.

1. z 보다 커질 경우
2. 대문자 소문자
3. 공백

### 몰랐던 메소드

```js
var s = "a";
// ASCII 코드로 전환
s.charCodeAt(); //  97
// char 로 전환
String.fromCharCode(97); // a
```

---

## 12. 이상한 문자 만들기

원본 보기  
https://programmers.co.kr/learn/courses/30/lessons/12930

### 접근 방법

우선 문제가 요구하는 것은

1. 문자열 입력 문자열 반환
2. 단어 별로 인덱스를 구분
3. 문자하나 하나를 대문자 소문자로 변환

2-> 단어별로 인덱스를 구분하기 위해서는 배열로 나누어야 합니다.  
1 -> 문자열을 배열화해서 다시 문자열로 합치는 방법에는 각각 split() , join()이 있습니다.  
3-> 우선 대문자 소문자 변환에는 toUpperCase(), toLowerCase() 가 있습니다.

### 아쉬웠던점

간단한 코드 블럭을 굳이 나눠서 if ele 문을 쓴 점이 조금 아쉽다.

---

## 13. 자릿수 더하기

### 문제 원본 보기

https://programmers.co.kr/learn/courses/30/lessons/12931

### 접근 방법

문제의 조건은 다음과 같다.

1. 자연수 입력 자연수 출력
2. 각 자릿수의 숫자를 합으로 출력

2 -> 숫자를 문자열로 바꿔서 각 자리수를 자른 배열을 생성 String() , split()
3 -> 각 배열 원소마다 누적되는 합을 구해서 반환 -> map()

### 아쉬웠던 점

reduce()라는 메소드를 까맣게 잊고 있었다.  
배열의 원소끼리 합을 구할 때 편한 메소드인데 그걸 까먹고...

---

## 14. 자연수 뒤집어 배열로 만들기

### 문제 원본 보기

https://programmers.co.kr/learn/courses/30/lessons/12932

### 접근 방법

문제의 조건은 다음과 같다.

1. 자연수 입력 -> 배열 출력
2. 입력된 자연수를 뒤집어야 함

2-> 배열의 메소드 중 reverse() 사용
1 -> 숫자 -> 문자열 -> 배열 String() / Number() / split()

---

## 15. 정수 내림차순으로 배치하기

### 문제 원본 보기

https://programmers.co.kr/learn/courses/30/lessons/12933

### 접근방법

문제의 조건은 다음과 같다.

1. 자연수 입력 -> 자연수 출력
2. 자연수의 각 자리수의 크기를 비교해 내림차순 정렬

2 -> 각 자리별로 나눠서 (문자열화 -> split("")) 내림차순 정렬 (sort()/ reverse()) 문자열로 바꾼 뒤 숫자로 바꾼다.

### 꾸짖기

sort().reverse() 사용법을 저번 풀이때 배웠는데 활용하지 못했다.  
물론 원칙상 내림차순 정렬을 하려면 각 요소별로 비교해야 하지만 (자리수가 다른 비교는 오류를 낸다.)  
이번 문제는 같은 자리수끼리의 비교이기에 메서드 체이닝을 썼다면 조금 더 간결한 코드가 되었을 것 같다.

---

## 16. 정수 제곱근 판별

### 문제 원본 보기

https://programmers.co.kr/learn/courses/30/lessons/12934

### 몰랐던 메소드

Number.isInteger(number)  
반환 값 bool

---

## 17. 제일 작은 수 제거하기

### 문제 원본 보기

https://programmers.co.kr/learn/courses/30/lessons/12935

### 문제 조건

1. 배열 입력 배열 출력
2. 가장 작은 정수를 제외해야함
3. 리턴할 배열의 길이가 0 이라면 \[-1]을 출력

### 접근 방법

나의 접근 방법은 이랬다.

1. 가장 작은 원소를 찾는다.
2. filter를 사용한다.

filter를 사용하는 것 자체는 나쁘지 않았는데 `Math.min(...arr)`이게 가능한줄 몰랐다.

지.. 자스

---

## 18. 짝수와 홀수

### 문제 원본 보기

https://programmers.co.kr/learn/courses/30/lessons/12937

### 꾸짖기

문제는 쉬운데 조건을 자세히 안 봤다.  
정수 입력 -> 음수도 가능  
음수홀수 % 2 = -1  
음수짝수 % 2 = -0

따라서 Math.abs()로 절댓값을 씌워주어야 한 줄짜리 삼항 연산식이 완성된다.

---

## 19. 최대공약수와 최소공배수

### 문제 원본 보기

https://programmers.co.kr/learn/courses/30/lessons/12940

### 접근 방법

문제를 보고 처음 드는 생각은 `최대공약수, 최소공배수 공식을 검색할까?`였다.  
수학적으로 정리되어 있는 식이 있었겠지만 내힘으로 해결해보자 해서 짜여진 코드가  
정의에 충실한 알고리즘이었다...

문제는 최대공약수든 최소공배수는 불필요한 연산이 너무 많다는 점이다.  
(공약수와 공배수를 죄다 구하고 최댓값과 최솟값을 구하는 방식)

### 꾸짖기

최대공약수를 구하는 방법은 나쁘진(?) 않았는데  
최소공배수를 구하는 방법은 너무 많은 연산을 요구함.

이게 아닌가? 싶은 생각이 드는 코드는 다시 보자

---

## 20. Collatz 추측

### 문제 원본 보기

https://programmers.co.kr/learn/courses/30/lessons/12943

### 접근 방법

문제 조건을 보면  
`결과로 나온 수에 같은 작업을 1이 될 때까지 반복합니다.`  
라는 조건이 있는데 이 문장을 보고 재귀함수가 바로 떠올랐다.

---

## 21. 평균 구하기

### 문제 원본 보기

https://programmers.co.kr/learn/courses/30/lessons/12944

### 칭찬하기

reduce 써먹은거 아주 아주 칭찬해.

---

## 22. 하샤드 수

### 문제 원본 보기

https://programmers.co.kr/learn/courses/30/lessons/12947

### 칭찬 및 생각

reduce 를 활용한 한 줄 코드 아주 칭찬해.  
문득 드는 생각이 한 줄 코드의 장점이 뭐지 (쓴 사람만 알아보는 느낌)
