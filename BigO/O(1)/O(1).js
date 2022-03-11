// O(1) --> Constant Time

const arr = [1, 2, 3];

function logFirstItem(arr) {
  console.log(arr[0]);
}

logFirstItem(arr);

/* The number of operation is the same and constant, 
uneffected by the quantity of the input */

// But what if we have a function like this:

function logTwoBoxes(arr) {
  console.log(arr[0]);
  console.log(arr[1]);
}

logTwoBoxes(arr);

/* As we can see, the function or algorithm as you may say,
does two operations which is console loging the two items.

The first one console.log(arr[0]) has O(1)
and the second one console.log(arr[1]) has O(1) too.

Thus, in total the function is running O(2)

So no matter how big is the input, the amount of operation will
still the same or CONSTANT.*/


