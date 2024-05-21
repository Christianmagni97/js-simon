let userSeconds = Number.parseInt(30);
for (let index = 0; index < 5; index++) {
    const pcNumber = Math.floor (Math. random() * 100) + 1;
    console.log(pcNumber);
    document.querySelector('h3').innerHTML + pcNumber;
    

}
const timer = setInterval( function(){
    userSeconds--;  
    if( userSeconds <= 0){
        clearInterval(timer); 
        prompt('Quali numeri sono usciti?');
    }
}, 1000);
