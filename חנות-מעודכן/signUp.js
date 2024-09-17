
function save()
{
    
 let user=
 {
  name : document.getElementById("name").value,
  pass : document.getElementById("pass").value,
  mail : document.getElementById("mail").value,
  pArr : [],
  sum:0,
  amount:0
 }
 
 window.localStorage.setItem(user.mail,JSON.stringify(user));

 window.sessionStorage.setItem('currUser',JSON.stringify(user));
}

