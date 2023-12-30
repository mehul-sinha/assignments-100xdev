function getCurrentTime24() {
    const currentDate = new Date();

    const istHours = currentDate.getHours();
    const istMinutes = currentDate.getMinutes();
    const istSeconds = currentDate.getSeconds();

    const format24 = `${istHours.toString().padStart(2, "0")}:${istMinutes
    .toString()
    .padStart(2, "0")}:${istSeconds.toString().padStart(2, "0")}`;

    console.log(format24);
}

function getCurrentTime12() {
    const currentDate = new Date();
    let ampm;
    let istHours12;

    const istHours = currentDate.getHours();
    const istMinutes = currentDate.getMinutes();
    const istSeconds = currentDate.getSeconds();

    if(istHours > 12){
        ampm = 'PM';
        istHours12 = istHours%12;
    }
    else{
        ampm = 'AM';
    }


    const format12 = `${istHours12.toString().padStart(2, "0")}:${istMinutes
    .toString()
    .padStart(2, "0")}:${istSeconds.toString().padStart(2, "0")}${ampm}`;

    console.log(format12);
}



function clockin24(){
    setInterval(getCurrentTime24, 1000);
}

function clockin12(){
    setInterval(getCurrentTime12, 1000);
}

// clock in 12 hour format AM/PM
clockin12();

// clock in 24 hour format 
// clockin24();