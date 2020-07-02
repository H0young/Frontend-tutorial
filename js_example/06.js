// 삼항연산자
const arr = [];
let text = "";
if (arr.length === 0) {
  text = "배열이 비었음";
} else {
  text = "배열이 있음";
}

let text2 = arr.length === 0 ? "배열이 비었음" : "배열이 있음";
console.log(text2);

// Truthy, Falsy = undefined, null, 0, '', NaN
const value = {};
const truthy = !!value;

console.log(value);

// 조건문 ????

function makeSound(animal) {
  const tasks = {
    개: () => {
      console.log('멍')
    }
    고양이: () => {
      console.log('야옹')
    }
  }

  const task = tasks[animal]
  if (!task) {
    console.log('...?')
    return
  }
  task()
}

// 비구조화 할당
// spread: 객체, 배열 펼침(...) = concat()
// rest: parameter에서 사용, 배열에서는 마지막