let theArray = [2,13,34,5]

function sumTheElements(theArray) {
	let total = 0;
	// Your code here
for (let i in theArray){
	total = total + theArray[i]
	}
	return total;
}


console.log(sumTheElements([20,20,20,20]))