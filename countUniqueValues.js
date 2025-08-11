function countUniqueValues(arr) {
  let left = 0;
  let right = 1;

  if (arr.length === 0) {
    return 0;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[right] === arr[left]) {
      right++;
    } else {
      left++;
      right++;
      if (right - left > 1) {
        arr[left] = arr[right];
      }
    }
  }
  return left + 1;
}

countUniqueValues([1, 1, 1, 1, 1, 2]);
countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]);
countUniqueValues([]);
countUniqueValues([-2, -1, -1, 0, 1]);
