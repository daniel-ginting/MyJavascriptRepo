// O(n^2) --> Quadratic Time

const arr = [1, 2, 3, 4, 5];

function pairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let n = 0; n < arr.length; n++) {
      console.log(arr[i], arr[n]);
    }
  }
}

pairs(arr);

/* 
What the above function does is log every pair of items in the array (1 1, 1 2, 1 3, etc.).

And what is the Big O ?
Just for a good rule of thumb :
  - If you see nested loops, that is a loop inside a loop (like the example above), we use multiplication.
  - If the loops are seperated one after another, we use addition.
 */

// Example of seperated loops (using addition) :

function seperatedLoops(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}


/* Back to the very first example, now we can determine its Big O which is :
    O(n*n)
     which becomes    
    O(n^2) (n to the power of 2)

We call O(n^2) -- Quadratic Time

As can be seen on the big Graph, O(n^2) is horrible, it's pretty slow. As the number of inputs increases, the numbers of operations increases significantly.

*/

/* Remember our third Rule ?
If the loop is nested but has different inputs, than it will be
    O(a * b)

Make sure to differentiate the variable name for different inputs.

Just to summarize :
Any loops that are seperated is added, and loops that are nested is multiplied.
*/