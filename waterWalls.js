const waterWalls = (walls) => {
  let leftMax = [];
  let rightMax = [];
  let max = 0;
  for (let i = 0; i < walls.length; i++) {
    if (walls[i] > max) max = walls[i];
    leftMax.push(max)
  }
  console.log(leftMax)
}

const findBlock = (arr) => {
  // returns an array of arrays, showing start and end indexes of blocks
}

const countWater = (arr) => {
  // takes an array of blocks and calculates how much water is in each
}

module.exports = { waterWalls };
