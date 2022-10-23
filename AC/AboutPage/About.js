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

// let l=document.querySelectorAll('li a');

// l.forEach(a =>{
//    l.addEventListener('click', function(){
//        l.forEach(a => a.classList.remove('selected'));
//        this.classList.add('selected');
//    })
// });
