function solution(n) {
  var waterMelon = "수박";
  var app = [];
  for (let i = 0; i < Math.floor(n / 2); i++) {
    app.push(waterMelon);
  }
  if (n % 2 != 0) app.push("수");
  return app.join("");
}
