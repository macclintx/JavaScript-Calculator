
let currentInput = document.getElementById("inp").value




document.addEventListener('click', function(e){
    let elID=e.target.id;
    console.log(elID)

        if(elID == "bracket-l")
            currentInput+= "("
            currentInput.innerHTML= "("
        if(elID == "bracket-r")
            currentInput += ")"
            document.getElementById("inp").innerHTML=")"
        if(elID = "")
        if(elID == "equals")
            currentInput = ""
    console.log(currentInput)
})