function replayPositivity() {
        
        var thought = document.getElementById("thought").value;
        document.getElementById("thought").value = "";
        document.getElementById("output").innerHTML = "I positively, absolutely believe that " + thought;
}

function replayNegativity(){
    var nThought = document.getElementById("thought").value;
    document.getElementById("thought").value = "";
    document.getElementById("nOutput").innerHTML = "Your belief \"" + nThought + "\" hindered you, so why bother believing it?";
}
    
     
function refresh(){
    var rThought = document.getElementById("thought").value;
    document.getElementById("thought").value = "";
    document.getElementById("rOutput").innerHTML = "Stick to you resolution \"" + rThought + "\" .";
    
}




