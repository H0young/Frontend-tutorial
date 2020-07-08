// 비동기 작업

function work(callback) {
    setTimeout(() => {
        const start = Date.now()
        for (let i = 0; i < 1000000000; i++) {}
        const end = Date.now()
        console.log(end - start + 'ms')
        callback(end - start)
    }, 0)
}

console.log('작업 시작')
work((ms) => {
    console.log('작업 끝')
    console.log(ms + 'ms 걸림')
})
console.log('다음 작업')

// promise

function increaseAndPrint(n, callback) {
    setTimeout(() => {
        const increased = n + 1
        console.log(increased)
        if (callback) {
            callback(increased)
        }
    }, 1000)
}

// 콜백 지옥
increaseAndPrint(0, n => {
    increaseAndPrint(n, n => {
        increaseAndPrint(n, n => {
            increaseAndPrint(n, n => {
                increaseAndPrint(n, n => {
                    console.log('작업 끝!')
                })
            })
        })
    })
})