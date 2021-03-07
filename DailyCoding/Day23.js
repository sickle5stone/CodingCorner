const maze = [
  ["f", "f", "f", "f"],
  ["t", "t", "f", "t"],
  ["f", "f", "f", "f"],
  ["x", "f", "f", "f"],
];

const start = { vertical: 3, horizontal: 0 };
const end = { horizontal: 0, vertical: 0 };

const currentLocation = { ...start };
while (maze[currentLocation.vertical - 1][currentLocation.horizontal] === "f") {
  currentLocation.vertical -= 1;
}
while (maze[currentLocation.vertical][currentLocation.horizontal - 1] === "f") {
  currentLocation.horizontal -= 1;
}
console.log(maze[currentLocation.vertical][currentLocation.horizontal]);

let verticalDirection = "down";
if (start.vertical > end.vertical) {
  verticalDirection = "up";
} else if (start.vertical === end.vertical) {
  verticalDirection = "stay";
}

// Naive

// const maxLength = maze[0].length;
// const maxHeight = maze.length;

// if ()
