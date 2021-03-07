"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((str) => str.trim());

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the timeConversion function below.
 */
function timeConversion(s) {
  /*
   * Write your code here.
   */

  const [hour, min, secondWithFormat] = s.split(":");
  const second = secondWithFormat.substring(0, secondWithFormat.length - 2);
  const format = secondWithFormat.substring(
    secondWithFormat.length - 2,
    secondWithFormat.length
  );
  let convertedHour;
  if (format === "AM") {
    convertedHour = parseInt(hour) === 12 ? (parseInt(hour) + 12) % 24 : hour;
  } else {
    convertedHour = (parseInt(hour) + 12) % 24;
  }
  if (convertedHour.toString().length < 2) convertedHour = `0${convertedHour}`;
  return `${convertedHour}:${min}:${second}`;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const s = readLine();

  let result = timeConversion(s);

  ws.write(result + "\n");

  ws.end();
}
