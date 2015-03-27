document.getElementById("testListener").addEventListener("click", listenerDemo);

function change(){

    document.getElementById("change").innerHTML = "Ich habe mich verändert.";
    document.getElementById("aChange").style.backgroundColor="lightblue";
    document.getElementById("changeAgain").innerHTML = "Verändere weiter!";

}

function changeAgain(){

    document.getElementById("change").innerHTML = "Ich habe mich wieder verändert.";


}

function hover(obj){

     obj.style.color ="green";
     obj.style.textTransform ="uppercase";

}

function nohover(obj){

    obj.style.color ="black";
    obj.style.textTransform ="none";
    

}

function listenerDemo(){

    document.getElementById("testListener").innerHTML = "Ich wurde von einem Listener erzeugt. ";

}