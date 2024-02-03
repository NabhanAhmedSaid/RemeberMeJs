var Login = document.getElementById("loginbtn");
var UserValue = document.getElementById("usernameinput");
var PaasValue = document.getElementById("passwordinput");
var isSave = false;
Login.addEventListener("click",function(){
    if(document.getElementById("RemeberMe").checked == true)
    {
        if(UserValue.value === "")
    {
        document.getElementById("ErrorUser").innerHTML = "Enter the Username";
    }else if(PaasValue.value === "")
    {
        document.getElementById("ErrorPass").innerHTML = "Enter the Password";
    }
    else{
        localStorage.setItem("username", UserValue.value);
    localStorage.setItem("password",PaasValue.value);
    isSave = true;
    if(isSave === true){
    location.href = '/home.html';
    }

   
}
    }else{
        location.href = "/home.html"
    }
  
});

