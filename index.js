function writeCards(array, eventName) {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        newArray.push(`Thank you, ${array[i]}, for the wonderful ${eventName} gift!`)
    }
    return newArray
};

function countDown(num) {
    while (num >= 0) {
        console.log(num)
        num--
    };
};