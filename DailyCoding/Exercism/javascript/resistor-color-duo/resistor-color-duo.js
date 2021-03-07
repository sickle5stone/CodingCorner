//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const colorCode = (color) => {
  return COLORS.indexOf(color);
};

export const decodedValue = (band) => {
  let decoded = 0;
  let offset = 1;
  if (band?.length > 1) {
    offset = 10;
  }
  if (band[0] && colorCode(band[0]) !== -1) {
    decoded += colorCode(band[0]) * offset;
  }
  if (band[1] && colorCode[band[1]] !== -1) {
    decoded += colorCode(band[1]);
  }
  return decoded === 0 ? null : decoded;
};

const COLORS = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white",
];
