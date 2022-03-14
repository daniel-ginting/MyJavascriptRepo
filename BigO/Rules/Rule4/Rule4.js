// RULE 4 : DROP NON DOMINANTS / DROP NON DOMINANT TERM

// Observe the below function

function numAndSum(arr) {
  arr.forEach((element) => {
    console.log(element);
  });

  arr.forEach((element) => {
    arr.forEach((secondElement) => {
      console.log(element + secondElement);
    });
  });
}

numAndSum([1, 2, 3, 4, 5]);

// Total : O(n + n ^ 2)

/* 
Rule number 4 states that we must drop non dominant terms.
That means, we care only about the most important terms

In this case, we drop the n, and just have 
  O(n^2)
Because as the input increases, the size of n ^ 2 is way more
important then n.

So we just keep the dominant term

Just to ease off, look at the chart, and see the one that's
most left.

Other examples :
  O(x^2 + 3x + 1000 + x/2) ---> O(x^2)
  O(n + 1) ---> O(n)

Note : If you have nested loops, it's usually a bad idea.
It's scales really badly and most likely you're doing something wrong.
 */
