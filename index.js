
function writeCards(list, event) {
    let arr = []
    for (let i = 0; i < list.length; i++){
        arr.push(`Thank you, ${list[i]}, for the wonderful ${event} gift!`)
    }
    return arr
}

function countDown(int) {
    while (int > 0) {
        console.log(int)
        int--
    }
    console.log(int)
}
