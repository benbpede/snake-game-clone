var x, y; // player
var cx, cy; // coin
var score;
var keepMove;
var direction; // 0 1 2 3 상 하 좌 우
var speed;
var snakeQueue = new Array();
var snakeColor = "#ED5B5B",
  tileColor = "#EEEEEE",
  wallColor = "#2E2E2E",
  coinColor = "#4476C6";

var MY = 20,
  MX = 34; // field size

function drawBoard() {
  //보드판 표시
  var boardTag = "<table border=0>";
  for (var i = 0; i < MY; i++) {
    boardTag += "<tr>";
    for (var j = 0; j < MX; j++)
      boardTag += '<td id="' + String(i) + " " + String(j) + '"></td>';
    boardTag += "</tr>";
  }
  boardTag += "</table>";
  document.write(boardTag);
}

function drawWall() {
  //벽 표시
  var wallCell = new Array();
  for (var i = 0; i < MY; i++) wallCell.push(new Array(i, 0)); // 상
  for (var i = 0; i < MY; i++) wallCell.push(new Array(i, MX - 1)); // 하
  for (var i = 0; i < MX; i++) wallCell.push(new Array(0, i)); // 좌
  for (var i = 0; i < MX; i++) wallCell.push(new Array(MY - 1, i)); // 우
  for (var i = 0; i < wallCell.length; i++) {
    var wy = wallCell[i][0];
    var wx = wallCell[i][1];
    document.getElementById(String(wy) + " " + String(wx)).style.background =
      wallColor;
    document.getElementById(String(wy) + " " + String(wx)).style.borderRadius =
      "1.5px";
  }
}

//뱀 표시
function setSnake() {
  snakeQueue.push(new Array(y, x));
  document.getElementById(String(y) + " " + String(x)).style.background =
    snakeColor;
}

function removeSnake() {
  var ty = snakeQueue[0][0];
  var tx = snakeColor[0][1];
  snakeQueue.shift();
  document.getElementById(String(ty) + " " + String(tx)).style.background =
    tileColor;
}

function move(direction) {
  switch (direction) {
    case 0:
      y -= 1;
      break; // 상
    case 1:
      y += 1;
      break; // 하
    case 2:
      x -= 1;
      break; // 좌
    case 3:
      x += 1;
      break; // 우
    default:
      return;
  }
  if (inInvalidMove(y, x)) gameover();
  setSnake();
}

//뱀 충돌 관련
function isInQueue(y, x) {
  var p = new Array(y, x);
  for (var i = 0; i < snakeQueue.length; i++) {
    if (snakeQueue[i][0] == p[0] && snakeQueue[i][1] == p[1]) {
      return true;
    }
    return false;
  }
}

function isCollapsed(y, x) {
  if (isInQueue(y, x)) return true;
  return false;
}

function inInvalidMove(y, x) {
  return y == 0 || y == MY - 1 || x == 0 || x == MX - 1 || isCollapsed(y, x);
}

function init() {
  drawBoard();
  drawWall();
  y = parseInt(MY / 2);
  x = parseInt(MX / 2);
  setSnake(y, x);
}

init();
