let myArray = [43,23,6,87,43,1,4,6,3,67,8,3445,3,7,5435,63,346,3,456,734,6,34];

// Your code here
function findMax(myArray){
    let greatest = 0;
    for (let i = 0; i <= myArray.length-1; i++ ){
        if (myArray[i] > greatest){
           greatest = myArray[i];
        }
    }
    return greatest
}
console.log(findMax(myArray));