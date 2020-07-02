// 삼항연산자
const arr = []
let text = ''
if (arr.length === 0) {
    text = '배열이 비었음'
} else {
    text = '배열이 있음'
}

let text2 = arr.length === 0 ?
    '배열이 비었음' :
    '배열이 있음'
console.log(text2)