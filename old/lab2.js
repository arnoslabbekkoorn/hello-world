function myFunction()
{
var x = document.getElementById("myText").value;
document.getElementById("demo").innerHTML=x;
}
$(document).ready(function(){	
    $.get("lab2.txt", function(data){
        alert("Data Loaded: " + data);
    });

});
