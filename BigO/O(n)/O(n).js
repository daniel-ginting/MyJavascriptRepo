const arr = ["nemo", "nemo", "nemo", "nemo"];

const large = new Array(1000000).fill('nemo')

function findNemo(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "nemo") {
      console.log("Find Nemo!");
    }
  }
}

findNemo(large);


// With forEach and arrow functions

const findNemo2 = (arr) => arr.forEach(item => {
  if(item === 'nemo'){
    console.log('Find Nemo!')
  }
})
