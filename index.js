//import userDetail from './user.json'

const btn = document.getElementById("loginbtn");
btn.addEventListener('click',(e)=>{
    const username = document.getElementById('username').value;
    const pswrd = document.getElementById('pswrd').value;
    if(username=="admin" && pswrd == "12345" || username=="add" && pswrd == "123"){
        //alert("login success");
        //return false;
        location.assign("signout.html");
        
    }else{
        alert("failed");
    }
})
function login(){
    location.assign("index.html")
}


