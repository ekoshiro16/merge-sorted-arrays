/*
Write a function that takes in 2 sorted arrays as arguments, and returns a combined array in the correct order. 

let exampleArrA = [3, 4, 6, 10, 11, 15];
let exampleArrB = [1, 5, 8, 12, 14, 19]; 

Combining these 2 arrays would return [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19]
*/ 

function mergeSortedArrs(arrOne, arrTwo) {
    // Edge cases
    if (!Array.isArray(arrOne) || !Array.isArray(arrTwo)) {
        return "One or both input arguments are not a valid array."
    }

    // Assuming that both arrays are sorted, we can assume at any given point in time, the element at the beginning of each array is the lowest number in its respective array. We can further intuit that one of those numbers must be less than or equal to the other number. If that's the case, we can immediately identify an inherent order and logical pattern to this act of comparing the lowest number of each array to one another. 
    // To follow up on this strategy, let's create two variables, one for each array. These variables will represent the current index position of the lowest number in its respective array. 
    let indexTrackerOne = 0;
    let indexTrackerTwo = 0; 

    // Our strategy revolves around this act of comparing the lowest number of each array to one another. What if we pick up the lower of the two numbers and put it into a new array? Then repeat this comparison process over and over agaun until there are no numbers remaining in either array. 
    // To follow up on this strategy, we'll make one more variable that will represent the index position where we wil place the lower of the two numbers we will be comparing. 
    let newArrIndexTracker = 0; 

    // And here's our new empty array. 
    let newArr = []; 

    // Let's begin the comparison process, over and over again. 
    // It makes sense to set our logical condition to checking whether or not the new array's index tracker position is currently less than the combined length of the two input arrays. We can intuit that the length of our new combined sorted array will have a length equal to adding the lengths of array one and array two together. 
    while (newArrIndexTracker < arrOne.length + arrTwo.length) {
        // If the number in array one is lower than the number in array two, then put that number into the new array.
        if (arrOne[indexTrackerOne] < arrTwo[indexTrackerTwo]) {
            newArr[newArrIndexTracker] = arrOne[indexTrackerOne]; 

            // Don't forget to increment the index trackers of array one and of the new array! 
            indexTrackerOne++;
            newArrIndexTracker++;
        } else {
            // If the number in array one is NOT lower than the number in array two, then put array two's number into the new array. 
            newArr[newArrIndexTracker] = arrTwo[indexTrackerTwo];

            // And don't forget to increment the index trackers of array two and of the new array. 
            indexTrackerTwo++;
            newArrIndexTracker++;
        };
    };

    // If we keep doing the above comparison process, eventually we'll run out of numbers to compare. At that point, we know we'll be done. 
    return newArr;
};


// TESTS

// Test One
console.log(mergeSortedArrs([3, 4, 6, 10, 11, 15], [1, 5, 8, 12, 14, 19]))
// should return [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19]

// Test Two
console.log(mergeSortedArrs([1, 3, 5], [2, 4, 6]))
// should return [1, 2, 3, 4, 5, 6]

// Test Three
console.log(mergeSortedArrs([5], [2, 4, 7, 9]))
// should return [2, 4, 5, 7, 9]

// Test Four
console.log(mergeSortedArrs([5], [7]))
// should return [5, 7]