/* Recursion - անընդհատ կրկնվող իրավիճակ ա,որը առաջանումա ֆունկցիան ինքն իր մեջ կանչելու արդյունքում։
Stop տալու համար պետք է գրենք պայման,որը դուրս կհանի իրավիճակից։

count down numbers to 1 */
function countDown(number) {
    // display the number
    console.log(number);
    // decrease the number value
    const newNumber = number - 1;
    // base case
    if (newNumber > 0) {
        countDown(newNumber);
    }
}

console.log(countDown(4));

// countDown(4) prints 4 and calls countDown(3)
// countDown(3) prints 3 and calls countDown(2)
// countDown(2) prints 2 and calls countDown(1)
// countDown(1) prints 1 and calls countDown(0)

//In each iteration, the number value is decreased by 1 and function countDown() is called until the number is positive. 
//Here, newNumber > 0 is the base condition.
//When the number reaches 0, the base condition is met, and the function is not called anymore.

//#1
const arraySum = (myArray) => {
    if (myArray.length === 1) {
        return myArray[0];
    } else {
        return myArray.pop() + arraySum(myArray);
    }
};

console.log((arraySum([2, 3, 4, 5, 6, 7])));

//#2 How it works ? 
const recurse = () => {

    if (condition) {
        // stop calling itself
        //...
    } else {
        recurse();
    }
}
/*A recursive function always has a condition to stop calling itself. Otherwise, it will call itself indefinitely. 
So a recursive function typically looks like an infinite loop: */

//#3
const log = (num) => {
    if (num > 5) {
        return;
    }
    console.log(num);
    log(num + 1);
}

log(1);