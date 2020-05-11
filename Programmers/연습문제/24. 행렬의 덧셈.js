// 나의 풀이
// 1.79 37.3
function solution(arr1, arr2) {
  let arr = [];
  for (let i = 0; i < arr1.length; i++) {
    let tmp = [];
    for (let j = 0; j < arr1[i].length; j++) {
      tmp[j] = arr1[i][j] + arr2[i][j];
    }
    arr.push(tmp);
  }
  return arr;
}

// map을 이용한 풀이
function solution(a, b) {
  return a.map((el, index) => el.map((ele, indexx) => ele + b[index][indexx]));
}
