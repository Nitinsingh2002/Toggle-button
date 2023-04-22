var x =document.getElementsByClassName('toggler');


var count=0;
x[0].addEventListener('click',function(){


    if(count%2==0){

        document.body.style.backgroundColor = 'cyan';
         x[0].style.float = "right";

       
    

    }
else{
    document.body.style.backgroundColor = 'white';
    x[0].style.float = "left";
}

   count++;


  
})