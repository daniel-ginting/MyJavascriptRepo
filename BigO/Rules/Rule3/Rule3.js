// RULE 3 : DIFFERENT TERMS FOR INPUTS

// Suppose we have the below algorithm / function :

function loop(arr, arr2) {
  arr.forEach(function (item) {
    console.log(item);
  });
  arr2.forEach(function (item) {
    console.log(item);
  });
}

// What is the Big O of this ?
// Is it O(2n) thus O(n) ?

/* 

NO. arr and arr2 are two different inputs. arr maybe could be 100 and arr2 could maybe be 10. The first loop depends on arr and the second depends on arr2.

So in this case the Big O will be something like :
    O(n + x)
  Note that the variable name can be named whatever.

 */
