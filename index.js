//Code your solution below!

function writeCards(arr, ) {
    let messages = [];
    for(let i = 0; i < arr.length; i++) {
        messages.push(`Thank you, ${arr[i]}, for the wonderful surprise gift!`);
    }
    return messages;
}

function countDown(num) {
    let i = 0;
    while (i <= num) {
        console.log(i)
        i++
    }
}