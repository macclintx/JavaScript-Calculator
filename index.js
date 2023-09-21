
let elem = document.getElementById("inp");




document.addEventListener('click', function(e){
    let elID=e.target.id;
        

        if(elID == "bracket-l"){
            let i = document.getElementById("bracket-l").value
            elem.value += i
        }

        if(elID == "bracket-r"){
            let i = document.getElementById("bracket-r").value
            elem.value += i
        }
            
        if(elID == "clear"){
            elem.value = "";
        }
        
        if(elID == "equals")
            currentInput = ""
    console.log(elem.value)
})