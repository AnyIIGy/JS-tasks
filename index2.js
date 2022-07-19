function calculate(operator, number2) {
    let result;
    for (let number = 0; number < 10; number++) {
        switch (operator) {
            case "+":
                result = number + number2;
                console.log(`${number} + ${number2} = ${result}`);
                break;

            case "-":
                result = number - number2;
                console.log(`${number} - ${number2} = ${result}`);
                break;

            case "*":
                result = number * number2;
                console.log(`${number} * ${number2} = ${result}`);
                break;

            case "/":
                result = number / number2;
                console.log(`${number} / ${number2} = ${result}`);
                break;

            case "%":
                result = number % number2;
                console.log(`${number} % ${number2} = ${result}`);
                break;

            default:
                console.log("Error");
                break;

        };
    }
}
calculate("*", 5);

//tree
let tree = "";
for (let i = 1; i <= 7; i++) {
    for (let j = 1; j <= 7 + 7 - 1; j++) {
        if (j <= 7 - i || j >= 7 + i) {
            tree += " ";
        } else {
            tree += "*";
        }
    }
    tree += "\n";
}
console.log(tree);

//Nested loops
//for
for (let minus = 20; minus > 0; minus--) {
    console.log(minus);
};
//while
let minus = 20;

while (minus > 0) {
    console.log(minus--);
};
//for
for (let i = 1; i <= 2; i++) {
    console.log("First loop");
    for (let j = 1; j <= 3; j++) {
        console.log("Second  loop");
    }
};
//while
let i = 1;
while (i <= 2) {
    console.log("First loop");
    i++;
    let j = 1;
    while (j <= 3) {
        console.log("Second  loop");
        j++;
    }
};
//for
for (let x = 1; x <= 5; x++) {
    for (let y = 1; y <= 5; y++) {
        for (let n = 1; n <= 5; n++) {
            console.log("x: " + x + ", y: " + y + " n:" + n);
        }
    }
}
//while
let x = 0;
while (x <= 5) {
    x++
    let y = 0;
    while (y <= 5) {
        y++
        let n = 0;
        while (n <= 5) {
            n++
            console.log("x: " + x + ", y: " + y + " n:" + n)
        }
    }
};