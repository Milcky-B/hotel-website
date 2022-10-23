var header=document.querySelector('.header')
var opener=document.querySelector('.ham')
var link =document.querySelectorAll("li");


opener.addEventListener('click',function(){
    header.classList.toggle('disp-menu')
})





   for(var i=0; i<link.length; i++){
    link[i].addEventListener("click",function(){
        removeSelection();
      
        link[i].classList.add('selected');
        
    });
   }


   function removeSelection(){
    for(var i=0; i<link.length; i++){   
            link[i].classList.remove("selected");       
       }
   }