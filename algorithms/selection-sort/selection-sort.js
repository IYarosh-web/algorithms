import { addStep } from "../helpers/formatter.js";

function findSmallest(arr) {
    let smallest = arr[0];
    let smallestIndex = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
            smallestIndex = i;
        }
        addStep();
    }

    return smallestIndex;
}

export function selectionSort(arr) {
    const result = [];
    
    const input = arr.slice();
    const stepsCount = input.length;

    for (let i = 0; i < stepsCount; i++) {
        const smallest = findSmallest(input);
        result.push(input[smallest]);
        input.splice(smallest, 1);
    }

    return result;
}
