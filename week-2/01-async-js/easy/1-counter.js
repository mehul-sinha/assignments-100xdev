counter = 0;

function printCounter(){
    console.log(counter);
}

setInterval(function(){
    counter++;
    printCounter(counter);
}, 1000)