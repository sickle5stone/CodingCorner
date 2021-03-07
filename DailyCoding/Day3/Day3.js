// root node

class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

let path = "root";

const node = new Node(
  "root",
  new Node("left", new Node("left.left")),
  new Node("right")
);

const serialize = (root) => {
  let finishedString = walk(root).join(",");
  // console.log(finishedString);
  return finishedString;
};

const deserialize = (btString) => {
  const array = btString.split(",");

  // let value = array.pop();
  console.log(innerDeserialize(array));
};

const innerDeserialize = (array) => {
  do {
    let value = array.pop();
    if (value === "-1" || value === undefined) {
      return;
    }

    const newNode = new Node(value);
    newNode.right = innerDeserialize(array);
    newNode.left = innerDeserialize(array);

    return newNode;
  } while (array);
  return newNode;
};

// IN ORDER
var combinedString = [];

const walk = (root) => {
  // console.log(root);
  if (root.left || root.right) {
    if (root.left) {
      walk(root.left);
    } else {
      combinedString.push("-1");
    }

    if (root.right) {
      walk(root.right);
    } else {
      combinedString.push("-1");
    }
  }
  combinedString.push(root.value);
  return combinedString;
};

deserialize(serialize(node));

// in order

// -1, left.left, left.right

// left.left, left, right, root;
