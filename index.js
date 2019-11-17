
function writeCards(arr){
    let cards =[];
    for(let i = 0;i < arr.length; i++) cards.push(`Thank you, ${arr[i]}, for the wonderful surprise gift!`);
    return cards;
};

function countDown(numb){
    while(numb >= 0){
        console.log(numb--);
    }
}