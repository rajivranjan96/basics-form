function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }


if(getCookie("username") != ""){
    location.assign("signout.html")
}



const btn = document.getElementById("loginbtn");
btn.addEventListener('click',(e)=>{
    const username = document.getElementById('username').value;
    const pswrd = document.getElementById('pswrd').value;
    if(username=="admin" && pswrd == "12345" || username=="add" && pswrd == "123"){
        document.cookie = "username = admin "; 
        location.assign("signout.html");
    }
    else{
        alert("failed");
        location.assign("index.html")
    }
})




