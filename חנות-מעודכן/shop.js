
let curr=window.sessionStorage.getItem('currUser');
let User=JSON.parse(curr);

document.getElementById("welcome").innerHTML="welcome "+User.name;  

document.getElementById("textImg").innerHTML=User.amount;
  

function addItem(id)
  {
    debugger;
    let amount=parseInt(document.getElementById("input"+id).value);
  console.log(User) ;
  
  for(let i=0 ; i<User.pArr.length; i++)
  {
    if(User.pArr[i].name==arrProduc[id-1].name)
    {
      User.pArr[i].count=amount;
      User.sum+=(arrProduc[id-1].cost*(amount-User.amount));
      User.amount=amount;
      window.sessionStorage.setItem('currUser',JSON.stringify(User));
      document.getElementById("textImg").innerHTML=User.amount;
      return;
    }
  }
  User.pArr[User.pArr.length]=arrProduc[id-1];
  arrProduc[id-1].count+=amount;
  User.amount+=amount;
  User.sum+=arrProduc[id-1].cost*amount;
  window.sessionStorage.setItem('currUser',JSON.stringify(User));
  document.getElementById("textImg").innerHTML=User.amount;
  }


  for (let i = 1; i <= 11; i++) 
  {
 
    let e = document.createElement("img");
    e.id="image"+i;
    e.src = "תמונות/p"+i + ".jpg";
    e.style.height = "200px";
    e.style.width = "250px"; 
    e.style.padding ="0.8%";

    let n=document.createElement("div");
    n.id="name"+i;
    n.style.padding="0.4%";
    n.innerHTML=(arrProduc[i-1]).name;

    let c=document.createElement("div");
    c.id="cost"+i;
    c.style.padding="0.4%";
    c.innerHTML=(arrProduc[i-1]).cost+" שח"; 

    let chosInpt=document.createElement("label");
    chosInpt.id="inpt"+i;
    chosInpt.innerHTML="amount:  ";
    
    let input=document.createElement("input");
    input.name="input";
    input.id="input"+i;
    input.type="text";
    let j=0;
    while(User.pArr[j]!=null && User.pArr[j].name!=(arrProduc[i-1]).name)
           j++;
    if(User.pArr[j]==null)
       input.value=0;
    else
        input.value=User.pArr[j].count;
       

    document.querySelector('.div'+i).appendChild(e);
    document.querySelector('.div'+i).appendChild(n);
    document.querySelector('.div'+i).appendChild(c);
    document.querySelector('.div'+i).appendChild(chosInpt);
    document.querySelector('.div'+i).appendChild(input);
  } 

  