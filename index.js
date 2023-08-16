
document.addEventListener('click', function(e){
    let elID=e.target.id;
    console.log(elID)
    if(elID == "bracket-l"){
        document.getElementById("inp").value="(" ;
    }
 
})