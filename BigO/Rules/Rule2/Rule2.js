// RULE 2 : REMOVE CONSTANTS

function printFirstItemThenFirstHalfThenSayHi100Times(items) {
  console.log(items[0]); // O(1)

  var middleIndex = Math.floor(items.length / 2); // O(1)
  var index = 0; // O(1)

  while (index < middleIndex) { // O(n/2), since we only console.log the first half items of the array
    console.log(items[index]); 
    index++;
  }

  for (var i = 0; i < 100; i++) { // O(100), this is a little bit tricky. The for loop doesn't the DEPEND on the input instead always run 100 times, thus it is constant(CONSTANT TIME -- O(1))
    console.log("hi");
  }
}

// Total: O(n/2 + 101) (ignore variables)

/* 
One thumb rule of big O is to remove constants. 

In an interview, we only care about the things that we saw on the chart. So because there's no O(101), we turn it to O(1)
  O(n/2 + 101) ---> O(n/2 + 1)

Also with the n/2, we drop the 2 constant since as the input gets larger and larger, the constant will have a decreasingly effect :
  O(n/2 + 1) ---> O(n + 1)

If n was a million, 1 will have very no significant effect, thus :
  O(n + 1) ---> O(n)

Now this function just becomes :
  O(n)

In other cases, what if the Big O was O(a + 50) or even O(a + 50000000) ?
It doesn't matter, just drop or remove the constants and it'll become :
  O(a)

*/

// Observe the below function :

function name(arr) {
  arr.forEach(function(item) {
    console.log(item);
  })
  arr.forEach(function(item) {
    console.log(item);
  })
}

// The Big O is O(2n).
/* But, since we drop the constants it'll become :
  O(n)  
*/

/* To proof the truth of this, in the graph chart the big O of this function is linear eventhough steeper, but it doesn't matter, it's linear */