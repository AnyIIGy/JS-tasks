//Loops
//#1

const first = 5;
const second = 5;

for (let i = 1; i <= first; i++) {
    for (let j = 1; j <= second; j++) {
        console.log(i + ' * ' + i + ' = ' + i * j);
    }
}
//result => 1 * 1 = 1,1 * 2 = 2,2 * 1 = 2,2 * 2 = 4....

//#2

const Arr = [1, 2, 3, 4, 5];
let arr1 = [];

for (let i = 0; i < Arr.length; i++) {
    arr1.push(Arr[i]);
}
for (let i = Arr.length - 1; i >= 0; i--) {
    arr1.push(Arr[i]);
}
console.log(arr1);
//result => [1,2,3,4,5],[5,4,3,2,1]

//#3

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, ];
let TrueNumbers;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        TrueNumbers = arr[i]
    } else {
        TrueNumbers = "Even numbers"
    }
}
if (!TrueNumbers) {
    console.log('Even numbers')
} else {
    console.log('Odd numbers')
};
//result => "Odd numbers"

//#4

const arr2 = [3, 5, 3, 5, 5, 3, 5, 4, 2, 6, 7, 0, 0];
for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] === 3) {
        console.log(arr2[i]);
    }
}; //result => 3,3,3

//#5

const nameSurname = "any gyozalyan";

for (let i = 0; i < nameSurname.length; i++) {
    if (i === 3) break
    let result = nameSurname.toUpperCase();
    console.log(result)
}; //result => "ANY GYOZALYAN"

//#6

for (let i = 0; i <= 6; i++) {
    if (i === 5) {
        console.log("Bye-Bye = 5")
        continue
    }
    console.log(i)

}; //result => 0,1,2,3,4,Bye-Bye = 5,6

//#7

let countDown = 20;

while (countDown > 0) {
    console.log(--countDown);
}; //result => 19,18,17,16,15,.....

//#8

const country = ["Armenia", "Italy", "USA", "France", "Canada", "UAE"];
let i = 0;
let text = "";
while (i < country.length) {
    text += country[i] + ",";
    console.log(text);
    i++
}; //result => Armenia,Armenia Italia,Armenia,Italia,USA,+ next country[i]

//#9 

let num = 0
while (true) {
    console.log(num);
    num++
    if (num === 5) {
        break
    }
}
console.log("BREAK!!"); //result => 0,1,2,3,4,"BREAK!"

//#10

const arr3 = [];

function arrNumbers(number) {
    while (number <= 20) {
        arr3.push(number)
        number++
    }
}
arrNumbers(0);
console.log(arr3); //result => arr3[1,2,3,4,5,6....]

//#11

let value = false

do {
    console.log("I'll do it))");
} while (value) ////result => "I'll do it))"