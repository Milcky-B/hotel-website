var link =document.querySelectorAll("li");


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

  
 