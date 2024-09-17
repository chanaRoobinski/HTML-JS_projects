
let curr=window.sessionStorage.getItem('currUser');
let User=JSON.parse(curr);
document.getElementById("textImg").innerHTML=User.amount;
document.getElementById("items").innerHTML="The shopping cart contains "+User.amount+" items.";
document.getElementById("pay").innerHTML="Total to be paid: "+User.sum+" שח.";

function Delete(id)
{
    
   for(let i=0;i<User.pArr.length;i++)
   {
   
      if( User.pArr[i].name==id)
          {
            User.pArr[i].count--;
            User.amount--;
            User.sum-=User.pArr[i].cost
            document.getElementById("textImg").innerHTML=User.amount;
            document.getElementById("items").innerHTML="The shopping cart contains "+User.amount+" items.";
            document.getElementById("pay").innerHTML="Total to be paid: "+User.sum+" שח.";
            document.getElementById("units"+i).innerHTML=User.pArr[i].count+" units";
            
            if(User.pArr[i].count==0)
               {
                let element=document.getElementById(i)
                element.parentNode.removeChild(element);
                let tempArr=[];
                //element.parentNode.removeChild(document.getElementById("nameCart"+i));
                //element.parentNode.removeChild(document.getElementById("count"+i));
                let j=0;
                for( i++;i<User.pArr.length && document.getElementById(i)!=null;i++,j++)
                    {
                    document.getElementById(i).id=(i-1);
                    document.getElementById("imageCart"+i).id="imageCart"+(i-1);
                    document.getElementById("nameCart"+i).id="nameCart"+(i-1);
                    document.getElementById("units"+i).id="units"+(i-1);
                    tempArr[j]=User.pArr[i];
                    }
                    User.pArr=tempArr;

               }
               
               window.sessionStorage.setItem('currUser',JSON.stringify(User));
               return;
          }
   }
}

for(let i=0;i<User.amount;i++)
{
    let e = document.createElement("img");
    e.className="cartImg"
    e.id="imageCart"+i;
    e.src = User.pArr[i].img;
    e.style.height = "100px";
    e.style.width = "100px"; 

    let n=document.createElement("div");
    n.id="nameCart"+i;
    n.style.padding="8%";
    n.style.fontSize="150%";
    n.innerHTML=User.pArr[i].name;


    
    let c=document.createElement("div");
        c.id="units"+i;
        c.style.padding="8%";
        c.style.fontSize="150%";
        c.innerHTML=User.pArr[i].count+" units";

        let p=document.createElement("div");
    p.id="cost"+i;
    p.style.padding="8%";
    p.style.fontSize="150%";
    p.innerHTML=(User.pArr[i]).cost+" שח"; 

    let butt=document.createElement("button");
    butt.id=User.pArr[i].name;
    butt.className="del";
    console.log(butt.id);
    butt.style.padding="8%"
    butt.addEventListener("click", function() {Delete(butt.id)}  );

    let im=document.createElement("img");
    im.src="תמונות/x.jpg";
    im.style.height = "50px";
    im.style.width = "50px"; 
    im.style.padding ="0.2%";

    butt.appendChild(im);


    let dv=document.createElement("div");
    dv.id=i;
    dv.className="elements";

    dv.appendChild(e);
    dv.appendChild(n);
    dv.appendChild(p);
    dv.appendChild(c);
    dv.appendChild(butt);

    document.querySelector(".CartElement").appendChild(dv);
}



