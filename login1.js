function validate(){
    var username=document.getElementById("username").value;
    var pasword=document.getElementById("password").value;
    if(username=="admin" && pasword=="admin"){
        alert(' You Logged in as admin ');
        return false;
    }
    else{
        alert('access denied');
    }
}