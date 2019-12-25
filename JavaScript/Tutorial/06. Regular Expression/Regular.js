var str = "a";
// str은 a라는 문자열이다 
var pattern1 = /a/;
// a는 우리가 찾고자하는 대상이다 

var pattern = new RegExp('a');
// a는 우리가 찾고자하는 대상이다 
// --> 정규표현식 객체 생성자

// 정규 표현식 메소드 실행
// 문자열에서 원하는 문자를 찾아내는 방법 

// RegExp.exec()
pattern.exec('abcedf') // 배열로서 반환됨 ['a']

// String.match()
// 문자열에서 패턴을 검색해서 이를 배열로 반환함 exec랑 비슷함
var string = 'a';
string.match(pattern1);

// String.replace(pattern, '대체')
// 문자열에서 패턴을 검색해서 이를 대체 텍스트로 변경한 후 변경된 스트링을 리턴
var string2 = 'abcdef'
string2.replace(pattern1,'A'); // "Abcdef"

var oi = /a/i; // 이 패턴 'a'는 대소문자를 구분하지 않는다.
var og = /a/g; // 문자열 내의 모든 a를 배열로 삼는다
var oig = /a/ig; // 대소문자를 구분하지 않고 모든 a를 찾는다

var pattern3 = /(\w+)\s(\w+)/;
// ()괄호는 정규표현식에서 그룹을 의미 
// \w : 문자를 의미 ==> A~Z / a~z / 0~9 다 포함 
// + : 수량자 ==> 문자가 1개 이상
// \s : 공백 

var sttr = "coding everybody";
sttr.replace(pattern3,'$2,$1');
// $2 : 2번째 그룹 
// $1 : 1번째 그룹 







