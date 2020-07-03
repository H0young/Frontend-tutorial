function getGrade(score) {
    if (score === 100) {
        return 'A+'
    } else if (score >= 90) {
        return 'A'
    } else if (score >= 85) {
        return 'B+'
    } else {
        return 'B'
    }
}

const grade = getGrade(47)
console.log(grade)

// 화살표 함수
const add = (a, b) => {
    return a + b
}
// const add = (a, b) => a + b

const sum = add(1, 2)
console.log(sum)

// 객체
const cat = {
    name: '니콩',
    age: 5,
    alias: '콩'
}

console.log(cat)

function print({
    alias,
    name,
    age
}) {
    const text = `${alias}(${name}) 고양이 나이는 ${age} 입니다.`
    console.log(text)
}

print(cat)

const dog = {
    name: '댕댕이',
    sound: '멍멍!',
    say() {
        console.log(this.sound)
    }
}

dog.say()

// 특정 값 조회, 변경: getter > 가져오는, setter > 넣는
// 보안성, capculation

const numbers = {
    _a: 1, // _지역변수
    _b: 2,
    sum: 0,
    calculate() {
        console.log('calculate')
        this.sum = this._a + this._b
    },
    get getSum() {
        return this.sum
    },
    get a() {
        return this._a
    },
    get b() {
        return this._b
    },
    set a(value) {
        this._a + value
        this.calculate()
    },
    set b(value) {
        this._b + value
        this.calculate()
    },
    set setSum(value) {
        this.sum = this._a + this._b
    }
}
console.log("====================")
console.log(numbers.sum)
// numbers.sum = 100
console.log(numbers.getSum)
console.log(numbers.getSum)
numbers.a = 5
numbers.b = 9