// Code your solutions in this file
function writeCards(arrayOfStrings, event){
    console.log(arrayOfStrings)
    for(var i = 0; i < arrayOfStrings.length; i++ ){
       arrayOfStrings[i] = `Thank you, ${arrayOfStrings[i]}, for the wonderful ${event} gift!`
    }
    return arrayOfStrings;
};

function countDown(num){
    while (num >= 0){
        console.log(num);
        num--;
    }
}