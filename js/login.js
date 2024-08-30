

function errorThrow() {

    let inputValue = document.getElementById("UserNameInput").value;
    console.log(inputValue)
    if(inputValue === ""){
        console.log("true")

        document.getElementById("errorMassage").style.display = "block";

    }else{
        console.log("false")
        document.getElementById("errorMassage").style.display = "block";
}
}

