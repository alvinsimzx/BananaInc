let sliderImages = document.querySelectorAll('.slide'),
arrowleft = document.querySelector('#arrow-left'),
arrowright = document.querySelector('#arrow-right'),
current=0;

var myIndex = 0;


//Following are functions for all hiding and showing the samsung phone specs
function galaxynote9(){
    document.getElementById('galaxynote9specs').style.display ="block";
    document.getElementById('galaxyS9specs').style.display ="none";
    document.getElementById('galaxyA9specs').style.display ="none";
    document.getElementById('galaxyJ4specs').style.display ="none";
}
function galaxys9(){
    document.getElementById('galaxynote9specs').style.display ="none";
    document.getElementById('galaxyS9specs').style.display ="block";
    document.getElementById('galaxyA9specs').style.display ="none";
    document.getElementById('galaxyJ4specs').style.display ="none";
}
function galaxya9(){
    document.getElementById('galaxynote9specs').style.display ="none";
    document.getElementById('galaxyS9specs').style.display ="none";
    document.getElementById('galaxyA9specs').style.display ="block";
    document.getElementById('galaxyJ4specs').style.display ="none";
}
function galaxyj4(){
    document.getElementById('galaxynote9specs').style.display ="none";
    document.getElementById('galaxyS9specs').style.display ="none";
    document.getElementById('galaxyA9specs').style.display ="none";
    document.getElementById('galaxyJ4specs').style.display ="block";
}

//clear all images
function reset(){
    for(let i = 0; i< sliderImages.length; i++){
        sliderImages[i].style.display='none';
    }
}

//init slider
function startSlide(){
    reset();
    sliderImages[0].style.display='block';
}

//show previous
function slideleft(){
    reset()
    sliderImages[current-1].style.display='block';
    current--;

}

//show next
function slideright(){
    reset()
    sliderImages[current+1].style.display='block';
    current++;
}

arrowright.addEventListener('click',function(){
    if(current==sliderImages.length-1){
        current=-1;
    }
    slideright();
});



//left arrow click
arrowleft.addEventListener('click',function(){
    if(current==0){
        current=sliderImages.length;
    }
    slideleft();
});

function carousel(){
    var i;
    var x = document.getElementsByClassName("phoneslides");
    for (i=0; i<x.length;i++){
        x[i].style.display="none";
    }
    myIndex++
    if(myIndex>x.length){myIndex=1}
    x[myIndex-1].style.display="block";
    setTimeout(carousel,2000);
}



carousel();

startSlide()