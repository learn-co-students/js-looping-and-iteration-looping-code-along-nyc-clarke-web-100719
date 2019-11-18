// Code your solutions in this file
function writeCards(arr, gift) {
    let answer = [];
    for(let i = 0; i < arr.length; i++) {
        answer.push(`Thank you, ${arr[i]}, for the wonderful ${gift} gift!`);
    }
   return answer;
    
}

function countDown(num) {
    let i = num;
    while (num > 0 && i >=0 ) {
        console.log(num-i);
        i--;
    }
}