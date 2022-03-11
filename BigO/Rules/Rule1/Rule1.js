// RULE 1 : WORST CASE

// When calculating Big O, we always think about the WORST CASE.

const arr = ["gill", "dory", "nemo", "marlin"];

const large = new Array(1000000).fill("nemo");

function findNemo(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log("running");
    if (arr[i] === "nemo") {
      console.log("Find Nemo!");
    }
  }
}

findNemo(arr);

/* As you can see, the loop is ran 4 times,
instead we want it to stop when it finds nemo,
thus making it stop at the third loop.

To achieve that, in javascript we can use
    break;
as shown below:*/

function findNemo2(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log("running");
    if (arr[i] === "nemo") {
      console.log("Find Nemo!");
      break;
    }
  }
}

findNemo2(arr);

/* So when the loop arrives at the 'nemo' string,
it'll console log and also stop the loop.

We can see the proof of our statement by seeing
the running console log cue.
(The first one appears 4 times and the second 3 times only).

And thus, we made our code more efficient.
The changes maybe unnoticable in this scale,
but in a very big input it is more noticable*/

/* Following the above observation, we will continue
to the main topic which is the worst case rule.

What is the worst case?
The worst case is 'nemo' string, instead of
being the third item, is at the very end. 
So the break statement will be useless in this
spesific case because the loop will still run 
n amount of times according to the element amount.

In the above worst case scenario, the Big O is still
    O(n)

This is our first rule, we only care about
the worst case scenario, because when we talk about scalability,
we can't just assume that things are going well.

Now eventhough the findNemo function might be O of 1 (O(1), if nemo is the very first item of the array.),
it doesn't matter. Because we can't be certain of what the input is going to be, we must assume
that the Big O notation is O(n) -- Linear Time.

To summarize, when we talk about Big O, we are referring to its worst case.

*/
