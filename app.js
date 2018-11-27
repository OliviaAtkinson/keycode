var codes = document.getElementById('keycode-boxes2');


onkeydown = function keycode (){
    let key = event.keyCode;

    console.log(event)
    /*console.log(key);*/
    document.getElementById('keycode-num').innerHTML = "keycode" + key; 


    let key1 = event.key
    document.getElementById('Ekey').innerHTML = "Event.key: " + key1 ;
    let key2 = event.which
    document.getElementById("whichcode").innerHTML = "Event.which: " + key2 ;
    let key3 = event.code
    document.getElementById("Ecode").innerHTML = "Event.code: " + key3;
}
document.addEventListener('keydown', ()=>{
    codes.style.visibility = 'visible';
})