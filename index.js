function writeCards(arr, event) {
    let answer = []
    for (let i = 0; i < arr.length; i++) {
        answer.push(`Thank you, ${arr[i]}, for the wonderful ${event} gift!`);
    }
    return answer;
}

function countDown(integer) {
    while (integer >= 0) {
        console.log(integer);
        integer--;
    }
}