var robot = require("robotjs");
var keypress = require("keypress");

//points
var pointa = {};
var pointb = {};
const vidcount = 3;

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

keypress(process.stdin);

process.stdin.on("keypress", function (ch, key) {
  // console.log('got "keypress"', key);
  if (key && key.ctrl && key.name == "c") {
    process.stdin.pause();
  }

  if (key && key.name == "a") {
    pointa = robot.getMousePos();
    console.log(`Point A: ${pointa}`);
  }
  if (key && key.name == "b") {
    pointb = robot.getMousePos();
    console.log(`Point B: ${pointb}`);
  }
  if (key && key.name == "s") {
    for (i = 1; i <= vidcount; i++) {
      robot.moveMouse(pointa.x, pointa.y);
      robot.mouseClick();
      sleep(100);
      robot.moveMouse(pointb.x, pointb.y);
      robot.mouseClick();
      console.log(i);
      sleep(100);
    }
    console.log("Done");
    process.stdin.pause();
  }
});

process.stdin.setRawMode(true);
process.stdin.resume();
