let value = 1;
console.log(value);

let text = "hello";
let name = "Nykong";

let good = true;
let something = null;
let unknown = undefined;

let a = 1 + 5;
console.log(a);

let b = 1;
console.log(b);
console.log(++b);
b += b;
// 주석처리
// 1. not = !
// 2. and = &&
// 3. or = ||

const A = !true;
const B = true && true;


const number = 0
if (number + 1 === 1) {
    console.log('숫자는 1')
}

const device = 'iPhone'

switch (device) {
    case 'iPhone':
        console.log('아이폰')
        break
    case 'iPad':
        console.log('아이패드')
        break
    default:
        console.log('모르겠네요')
}

function add(a, b) {
    return a + b
}
const sum = add(1, 2)
console.log(sum)

function hello(name) {
    return `Hello, ${name}!`
}

const result = hello('Young')
console.log(result)

function getGrade(score) {
    if (score === 100) {
        return 'A+'
    } else if (score >= 90) {
        return 'A'
    } else if (score >= 85) {
        return 'B+'
    } else if (score >= 80) {
        return 'B'
    } else if (score >= 75) {
        return 'C+'
    } else if (score >= 70) {
        return 'C'
    } else if (score >= 65) {
        return 'D+'
    } else if (score >= 60) {
        return 'D'
    } else {
        return F
    }
}

const grade = getGrade(100)
console.log(grade)