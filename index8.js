//writing spread function
function spreadFunc(arr) {
    let newArr = []
    arr.forEach((value) => newArr.push(value));
    return newArr
}
console.log(spreadFunc(["a", 2, "b", 4]));
//#2
function spreadFunc2(arr) {
    let newArr = []

    for (value in arr) {
        newArr.push(arr[value])
    }
    return newArr
}
console.log(spreadFunc2(["a", "b", 3, 4]));
//#3
const number = [1, 2, 3, 4]
const number2 = [5, 6, 7]

const spreadFunc3 = (mainArray, otherArray) => {
    for (let i = 0; i < otherArray.length; i++) {
        mainArray.push(otherArray[i])
    }
    return mainArray
}
console.log(spreadFunc3(number, number2));

//Spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.
const numbers = [1, 2, 3, 4, 5, 6];

const [one, two, ...rest] = numbers
console.log(rest);

//We can use the spread operator with objects and function too