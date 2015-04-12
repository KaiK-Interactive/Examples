/**
 * Script um die Funktionsweise von Events und EventListenern zu zeigen. 
 *
 * created by Kai Karren 
 */


document.getElementById("testListener").addEventListener("click", listenerDemo);
    
function change(){

    document.getElementById("onclickDemo").innerHTML = "<p>Was nun auch passiert ist.<p><p>&lttag  onclick= function()&gt Beliebiger Text &lt/tag&gt <p>";
  

}


function hover(obj){

     obj.style.color ="green";
     obj.style.textTransform ="uppercase";
     obj.style.fontSize="35px";
     
    document.getElementById("over").innerHTML = "&lttag onmouseover = function()  onmouseout = function() &gt Belibiger Text &lt/tag&gt";

}

function nohover(obj){

    obj.style.color ="black";
    obj.style.textTransform ="none";
    obj.style.fontSize="20px";

}

function listenerDemo(){

    document.getElementById("testListener").innerHTML = "<p>&lttag id= test &gt Beliebiger Text &lt/tag&gt </p><p>Im Script: document.getElementById(id).addEventListener(art, function());</p>";

}
