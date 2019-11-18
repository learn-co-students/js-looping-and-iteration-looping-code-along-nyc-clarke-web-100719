// Code your solutions in this file
function writeCards(arrayNames, eventName) {
    let thankYouMessages = [];
    for (let i = 0; i < arrayNames.length; i++ ) {
        thankYouMessages.push(`Thank you, ${arrayNames[i]}, for the wonderful ${eventName} gift!`);
    }
    return thankYouMessages;
}

function countDown(integer) {
    while (integer >= 0) {
        console.log(integer);
        integer--;
    }
}