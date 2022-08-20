//Recursive factorial
const factorial = (num) => {
    if (num <= 1) {
        return 1
    }
    return num * factorial(num - 1)
}
console.log(factorial(5)); //120

//Recursive fibonacci
const fib = (num) => {
    return num <= 1 ? num : fib(num - 1) + fib(num - 2);
}
console.log(fib(7)); //13

// Recursion examples
const countDown = (number) => {
    console.log(number);
    const newNumber = number - 1;
    if (newNumber > 0) {
        countDown(newNumber);
    }
}
countDown(10);

//next one
const run = (x) => {
    if (x === 5) return;
    console.log('running');
    run(x + 1);
}
run(0);

//next one
let list = {
    value: "A",
    next: {
        value: "B",
        next: {
            value: "C",
            next: {
                value: "D",
                next: null
            }
        }
    }
};
const copyList = (list) => {
    let arr = [];
    let tmp = list;

    while (tmp) {
        arr.push(tmp.value);
        tmp = tmp.next;
    }

    for (let i = 0; i <= arr.length - 1; i++) {
        console.log(arr[i]);
    }
}
copyList(list);

//next one
const array = (arr) => {
    if (arr.length === 0) return 1
    let product = arr[0];
    product = product * array(arr.slice(1))
    return product;
}
console.log(array([1, 2, 3, 4]));

// next one
function pow(x, n) {
    return (n == 1) ? x : (x * pow(x, n - 1));
}

//searchBar
const SearchFunc = () => {

    let input, filter, ul, li;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.querySelectorAll("li");

    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().search(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}