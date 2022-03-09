// See the pdf file in this folder


const arr = ["A", "B", "C", "D", "E", "F", "G", "H"];
let newArr = [];

let random = 0;

function genRandomArray (param){
    return [param[Math.floor((Math.random() * (arr.length - 1)))],
        param[Math.floor((Math.random() * (arr.length - 1)))],
        param[Math.floor((Math.random() * (arr.length - 1)))]]
}

for (let i = 0; newArr.length !== 3; i++){
    let array = genRandomArray(arr);
    if  (
            (
                (arr.indexOf(array[1]) - 1) === arr.indexOf(array[2]) || 
                (arr.indexOf(array[1]) + 1) === arr.indexOf(array[2])
            ) &&
            (
                (arr.indexOf(array[1]) - 1) === arr.indexOf(array[0]) || 
                (arr.indexOf(array[1]) + 1) === arr.indexOf(array[0])
            )
        ) 
    {
        newArr.push(array);
    }
}
console.log(newArr)
