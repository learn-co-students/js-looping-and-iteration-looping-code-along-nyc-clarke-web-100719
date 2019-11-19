const names = ["Lisa", "Kaitlin", "Jan"];

function writeCards(names, eventName) {
    let answer = []
    for (let i = 0; i < names.length; i++) {
        answer.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`)
    }

    return answer;

}

function countDown(num) {
    while (num >= 0) {
        console.log (num) 
        num = num - 1
    }
}




