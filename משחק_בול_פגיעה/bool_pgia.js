let colors=["red","yellow","orange","blue","pink","green"];
let rnd=["null","null","null","null"];
let counter=97;
let x=-1;

    for( let i=1;i<5;i++)
    {
       let r=Math.floor(Math.random() * (colors.length - i));
        rnd[i-1]=colors[r];
        let temp=colors[colors.length-i];
        colors[colors.length-i]=colors[r];
        colors[r]=temp;
    }
   

function circles(color)
{
  
    do
    {
        x++;
       var e=document.getElementById(String.fromCharCode(counter)+"_"+x);
    }
    while(e.style.backgroundColor != 'white' && x<4); 
    if(x>=4)
    {
       /* x=0;
        counter++;*/
        return;
    }
    
    e.style.backgroundColor = color;
}



function back()
{
  
  let i=3;
  while(document.getElementById(String.fromCharCode(counter)+"_"+i).style.backgroundColor == 'white' && i>-1)
  {
    i--;
  }
  document.getElementById(String.fromCharCode(counter)+"_"+i).style.backgroundColor = 'white';
  x--;
}




function result()
{
  let z=5;
  let y=8;
  
  for (i=0;i<4;i++)
     {
       
        for (let j=0;j<4;j++)
        {
            
            if(rnd[i] ==document.getElementById(String.fromCharCode(counter)+"_"+i).style.backgroundColor)
              {
                document.getElementById(String.fromCharCode(counter)+"_"+z).style.backgroundColor='black';
                z++;
                break;
              }
              else
                  if((rnd[i] == document.getElementById(String.fromCharCode(counter)+"_"+j).style.backgroundColor))
                  {
                    document.getElementById(String.fromCharCode(counter)+"_"+y).style.backgroundColor='gray';
                    y--;
                    break;
                  }
        }
     }
     
     let flag=true;
     for (let i=5;i<9;i++)
     {
      if(document.getElementById(String.fromCharCode(counter)+"_"+i).style.backgroundColor != 'black')
      {
       flag=false;
       x=-1;
     counter++;
        return;
      }
     } 
     if(flag==true) 
     document.getElementById("icon").style.display="block";
     x=-1;
     counter++;
}


