export function quicksort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  const less = [];
  const greater = [];
  const pivot = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > pivot) {
      greater.push(arr[i]);
    } else {
      less.push(arr[i]);
    }
  }

  return [
    ...quicksort(less),
    pivot,
    ...quicksort(greater),
  ];
}
