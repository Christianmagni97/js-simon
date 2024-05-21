let userSeconds = Number.parseInt(30);
for (let index = 0; index < 5; index++) {
    const pcNumber = Math.floor (Math. random() * 100) + 1;
    console.log(pcNumber);
}
const timer = setInterval( function(){
    userSeconds--;  
    if( userSeconds <= 0){
        clearInterval(timer); 
        alert('Finito il tempo !!!');
    }
}, 1000);
