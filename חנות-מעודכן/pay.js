let curr=window.sessionStorage.getItem('currUser');
let User=JSON.parse(curr);
document.getElementById("textImg").innerHTML=User.amount;

function paid()
{
    User.amount=0;
    User.sum=0;
    User.pArr=[];
    window.sessionStorage.setItem('currUser',JSON.stringify(User));
    document.getElementById("textImg").innerHTML=User.amount;
    return;
}