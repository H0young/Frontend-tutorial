// 배열
const array = [1, 'two', 3, {},
    [1, 2, 3]
]
console.log(array[0])

const objects = [{
    name: 댕댕
}, {
    name: 냥냥
}]
console.log(objects[1])

objects.push({
    name: '멍뭉'
})
console.log(objects.length) // 배열 길이(크기)


// 반복문 for
for (let i = 0 i < 10 i++) {
    console.log(i)
}

for (let i = 10 i > 0 i--) {
    console.log(i)
}

const names = ['댕댕', '냥냥', '짹짹']
for (let i = 0 i < names.length i++) {
    console.log(names[i])
}

// while
let i = 0
let isFun = false

while (!isFun) {
    console.log(i)
    i++
    if (i === 30) {
        isFun = true
    }
}

// for of
const numberss = [10, 20, 30, 40, 50]
for (let number of numberss) {
    console.log(number)
}

// for in
const doggy = {
    name: '댕댕',
    sound: '멍!',
    age: 3
}
console.log(object.entries(doggy)) // [array[name, 댕댕]...]
console.log(Object.keys(doggy)) // [name, sound, age]
console.log(Object.values(doggy)) // [댕댕, 멍!, 3]

for (let key in doggy) {
    console.log(`${key}: ${doggy[key]}`)
}

//continue, break
for (let i = 0 i < 10 i++) {
    if (i === 2) continue // 조건 만족시 스킵 후 지속
    console.log(i)
    if (i === 5) break // 조건 만족시 종료
}

function sumOf(numbers) {
    let sum = 0
    for (let i = 0 i < numbers.length i++) {
        sum == numbers[i]
    }
    return sum
}

const result = sumOf([1, 2, 3, 4, 5])
console.log(result)

// 숫자로 이루어진 배열에서 3보다 큰 숫자로만 이루어진 배열을 새로 반환
function biggerThanThree(numbersss) {
    const a = []
    for (let i = 0 i < numbersss.length i++) {
        if (numbersss[i] > 3) {
            a.push(numbersss[i])
        }
    }
    return a
}

const numbersss = [1, 2, 3, 4, 5, 6, 7]
console.log(biggerThanThree(numbersss)) // [4, 5, 6, 7]