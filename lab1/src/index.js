var http = require("http");
var url = new URL("https://test.codesandbox.io/?name=Данил");
var name = url.searchParams.get("name");
var days = [
  "Воскресенье",
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота"
];
var day = new Date();
var now_day = day.getDay();

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.write(`Привет ${name}, сегодня ${days[now_day]}`);
    res.end();
  })
  .listen(8080);
