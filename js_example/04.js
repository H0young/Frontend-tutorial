// forEach

const hero = [
    '아이언맨',
    '토르',
    '캡틴아메리카'
]

function print(heros) {
    console.log(heros)
}
hero.forEach(print)

hero.forEach(heros => {
    console.log(heros)
})

// map

const array = [1, 2, 3, 4, 5, 6, 7, 8]
const a = []

for (let i = 0; i < array.length; i++) {
    a.push(array[i] * array[i])
}

array.forEach(n => {
    a.push(n * n)
})

console.log(a)

const c = array.map(n => n * n)
console.log(c)

// indexOf: 찾고자하는 값의 인덱스, find: 찾은 값 반환, findIndex: 특정 조건의 인덱스 검색
// filter: 특정 조건의 값 찾아 새로운 배열 생성
// splice: 기존 배열에서 삭제, slice: 기존 배열에서 삭제하지 않음!
// shift: 기존배열에서 첫 번째 원소 추출, pop: 기존배열에서 마지막 원소 추출
// unshift: 배열 맨 앞에 원소 추가, push: 배열 맨 뒤에 원소 추가
// concat: 배열 합치기, 기존배열 수정 X, join: 배열 원소로 문자열 생성
// reduce: 배열 원소 활용

const num = [1, 2, 3, 4, 5]
const sum2 = num.reduce((accumulator, current) => accumulator + current, 0)
console.log(sum2)