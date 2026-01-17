export function binarySearch(sortedArr, item) {
    let low = 0;
    let high = sortedArr.length - 1;
    
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        const guess = sortedArr[mid];

        if (guess == item) {
            return mid;
        } else if (guess > item) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return undefined;
}
