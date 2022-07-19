//Splitting function
//#1
function splitFuncn(text) {
    let stringArray = [];
    let count = 0;

    for (let i = 0; i < text.length; i++) {
        stringArray.push('');
        stringArray[count] += text[i]
        count++;
    }
    return stringArray;
}
console.log(splitFuncn(`This code by Any`)); //result => ['t','h','i','s'...]
//#2
const str = (str, seper) => {
    let newArray = [];
    let resString = "";
    for (var i = 0; i < str.length; i++) {
        if (str[i] !== seper) {
            resString += str[i];
        } else if (resString.trim()) {
            newArray.push(resString);
            resString = "";
        }
    }
    if (resString) {
        newArray.push(resString);
    }
    return newArray;
}
console.log(str(`This code by Any`, ' ')); //result => [ 'This', 'code', 'by', 'Any' ]
//forEach function
function forEachFunc(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(`index[${i}] = value:${arr[i]}`);
    }
}
forEachFunc(["Usa", "Canada", 1234, 8877]); //result => index[0] = value : Usa...
//Sort function
function sortFunc(arr) {
    for (let i = 0; i < arr.length; i++) {
        let value = arr[i]
        for (j = i - 1; j >= 0 && arr[j] > value; j--) {
            arr[j + 1] = arr[j]
        }
        arr[j + 1] = value
    }
    return arr
}
console.log(sortFunc([5, 2, 4, 6, 1, 3])) // result =>[1, 2, 3, 4, 5, 6]
console.log(sortFunc(["b", "c", "a", "d"])) // result => [a, b, c, d]

//Object copies
let obj = {
    aboutObj: "Soon,i'll be copied",
    date: "12.07.2022",
    time: "00:34 AMT",
    city: "Erevan",
    theLastWord: "See you Soon"
}
console.log(obj);
//#1
obj.aboutObj = "I've been copied"
let objCopy1 = {
    ...obj
}
console.log(objCopy1);
//#2
obj.aboutObj = "I was copied for the second time"
let objCopy2 = Object.assign({}, obj)
console.log(objCopy2);
//#3
obj.aboutObj = "I was copied for the third time"

function objCopy3(mainObj) {
    let mainObjCopy = {}
    for (let keys in obj) {
        mainObjCopy[keys] = mainObj[keys]
    }
    return mainObjCopy
}
console.log(objCopy3(obj));

//Array copies
let arr = ["Soon,i'll be copied"]
console.log(arr);
//#1
arr[0] = "I saved my value in slice method"
let arrCopy1 = arr.slice()
console.log(arrCopy1);
//#2
arr[0] = "I've been copied"
arr[1] = "And added a new value"
let arrCopy2 = [...arr]
console.log(arrCopy2);
//#3
arr[0] = "I was copied for the third time"

function arrCopy3(mainArr) {
    let mainArrCopy = []
    for (let index in arr) {
        mainArrCopy[index] = mainArr[index]
    }
    return mainArrCopy
};
console.log(arrCopy3(arr));