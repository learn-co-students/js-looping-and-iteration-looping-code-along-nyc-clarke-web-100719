// Code your solutions in this file
function writeCards(nameArr){

    let x = nameArr.length;
    let ret = new Array();
    for (let i = 0; i < x ; i++)
    {
        ret.push(`Thank you, ${nameArr[i]}, for the wonderful surprise gift!`);
    }
    return ret;

}

function countDown(number){

    do {

        console.log(number);

        number--;
    } while (number > -1);

}
