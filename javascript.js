/* slide nav bar */

let bar=document.getElementById("showbar");
console.log(document.querySelector('.main-nav ul'));
bar.addEventListener('click',()=>{
  console.log(window.innerWidth);
  if(window.innerWidth<=700){
    document.querySelector('ul').classList.toggle('show');
    
  }
},false);

let stt=document.querySelectorAll(".main-nav ul li a");
for (let i=0;i<stt.length;i++){
  stt[i].addEventListener('click',()=>{
    document.querySelector('ul').classList.toggle('show');
  },false);
}

/* show caracter by caracter */

var ch=["Software Engineer","Problem solver","Freelancer","Song Writer"];
var f=0;
var i=0;
var time=150; 

function show(){

setTimeout(()=>{showtext(i)},time);
}

   function showtext (index){
   
       document.querySelector("#texts").innerHTML+=ch[index][f]+"";
       f++;
       if (f<ch[index].length){setTimeout(()=>{showtext(index)},time);} 
       else {
           f=0;
           setTimeout(()=>{hidetext(ch[index])},time);}
   }

   function hidetext(l){
        l=l.substring(0,l.length - 1);
       document.querySelector("#texts").innerHTML=l;
       
       if (l.length!=0){setTimeout(()=>{hidetext(l)},time);}
       else if (i<ch.length) {
           i++;
           if(i==ch.length){i=0;}
           setTimeout(()=>{showtext(i)},time);}  
   }
  
show();


/* Progress line */
var timecounter;
function counter(j,target,id1,id2){
 timecounter=10;
setTimeout(()=>{count(j,target,id1,id2)},timecounter);}

function count (j,target,id1,id2){
j++;
document.getElementById(id1).value=j;
document.getElementById(id2).innerHTML=j+"%";
if (j!=target){
 if (j==target-20){timecounter=10;}
     setTimeout(()=>{count(j,target,id1,id2)},timecounter);
} 
}
function animationline(){
counter(1,75,"line1","val1");
counter(1,20,"line2","val2");
counter(1,50,"line3","val3");
}

ScrollReveal().reveal('.setline',{
  reset:true,
  afterReveal:function (){ animationline();}});





