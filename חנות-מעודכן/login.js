
function logIn()
{
    x++;
    console.log(123);
    if(window.localStorage.getItem(document.getElementById("email").value )==null)
    {
        if(x>0)
           document.getElementById("d").style.display='block';
           
        
        document.getElementById("form").action="login.html";
    }
        
    else
    {
        let userObj=window.localStorage.getItem(document.getElementById("email").value);
        window.sessionStorage.setItem('currUser',userObj);
        document.getElementById("form").action="shop.html";
    }
        
}
   

