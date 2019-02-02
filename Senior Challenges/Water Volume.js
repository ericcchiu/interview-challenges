const volume = heights => {

  const left = [], right = [];
  let end = heights.length;
  let volume = 0, leftMax = 0, rightMax = 0;

  for (let i = 0, j = end - 1; i < end, j >= 0; i++ , j--) {
    // Iterate from the left and right 
    left[i] = leftMax;
    leftMax = Math.max(leftMax, heights[i]);
    right[j] = rightMax;
    rightMax = Math.max(rightMax, heights[j]);

  }

  for (let k = 0; k < end; k++) {
    let trapWater = Math.min(left[k], right[k]) - heights[k];
    volume += trapWater > 0 ? trapWater : 0;
  }

  return volume;
};

const heightArr = [3, 0, 3];
console.log(volume(heightArr));