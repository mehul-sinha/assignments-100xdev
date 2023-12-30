let n = 0;

function counter(){
    setTimeout(function(){
        n++;
        console.log(n);
        counter()
    }, 1000)
}

counter()