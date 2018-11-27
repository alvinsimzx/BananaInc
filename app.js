let sliderImages = document.querySelectorAll('.slide'),
arrowleft = document.querySelector('#arrow-left'),
arrowright = document.querySelector('#arrow-right'),
current=0;

var myIndex = 0;

// Scroll back to top button function
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

////////////////////////////

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//Following are functions for all hiding and showing the samsung phone specs
function phone1show(){
    document.getElementById('phone1specs').style.display ="block";
    document.getElementById('phone2specs').style.display ="none";
    document.getElementById('phone3specs').style.display ="none";
    document.getElementById('phone4specs').style.display ="none";
}
function phone2show(){
    document.getElementById('phone1specs').style.display ="none";
    document.getElementById('phone2specs').style.display ="block";
    document.getElementById('phone3specs').style.display ="none";
    document.getElementById('phone4specs').style.display ="none";
}
function phone3show(){
    document.getElementById('phone1specs').style.display ="none";
    document.getElementById('phone2specs').style.display ="none";
    document.getElementById('phone3specs').style.display ="block";
    document.getElementById('phone4specs').style.display ="none";
}
function phone4show(){
    document.getElementById('phone1specs').style.display ="none";
    document.getElementById('phone2specs').style.display ="none";
    document.getElementById('phone3specs').style.display ="none";
    document.getElementById('phone4specs').style.display ="block";
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