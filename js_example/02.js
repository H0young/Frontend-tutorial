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
console.log(sum) z