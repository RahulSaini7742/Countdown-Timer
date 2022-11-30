const endDate = "1 August 2023 10:00 AM";

// seting the value of end date by java-Script 

document.getElementById("end-date").innerText=endDate;

const inputs=document.querySelectorAll("input")

function timer(){
const end=new Date(endDate);
const now=new Date();
const diff=(end-now)/1000;
console.log(diff);

    if(diff<0) return;
        // the only way to set the value of input is . way 

                // calculating days
                inputs[0].value= (Math.floor(diff / 3600 / 24));
                // calculating hours
                inputs[1].value= (Math.floor(diff / 3600 )%24);
                // calculating minuts
                inputs[2].value= (Math.floor(diff / 60 )%60);
                // calculating seconds
                inputs[3].value= (Math.floor(diff )%60);
     
}
timer();

// for calling itslef every seconds
setInterval(() => {
    timer()
}, 1000);