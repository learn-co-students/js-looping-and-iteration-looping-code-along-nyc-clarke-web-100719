// Code your solutions in this file

// const writeCards = [ 'Lisa', 'Kaitlin', 'Jan' ];

function writeCards(arr) {
    let newArr = [];

    for(let i=0; i < arr.length; i++) {
        newArr.push(`Thank you, ${arr[i]}, for the wonderful surprise gift!`);
    }
    return newArr;
}


function countDown(num) {
    // for (let i = 0; i < num; i++) {
    //     console.log(num);
    //     num--;
    // }

    while(num >= 0){
        console.log(num);
        num--;
    }
}
// for(let i=0; i < writeCards.length; i++) {
//     console.log( `Thank you, ${writeCards}, for the wonderful surprise gift!`);
// }