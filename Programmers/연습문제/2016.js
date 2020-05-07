//  나의 풀이
function solution(a, b) {
  var day = 0;
  var answer = "";
  var arr = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];

  for (var i = 1; i < a; i++) {
    var number;
    if (i == 2) {
      number = 29;
    } else if (i == 4 || i == 6 || i == 9 || i == 11) {
      number = 30;
    } else {
      number = 31;
    }
    day += number;
  }
  day += b;

  var plusDay = (day - 1) % 7;
  answer = arr[plusDay];
  return answer;
}

//  Date 객체를 활용한 다른 사람의 풀이
function getDayName(a, b) {
  var arr = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  var date = new Date(`2016-${a}-${b}`);
  var day = date.getDay();

  return arr[day];
}
