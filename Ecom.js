const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar')

if (bar){
    bar.addEventListener("click",function(){
        nav.classList.add("active");
    });
}
if (close){
    close.addEventListener("click", function(){
        nav.classList.remove("active");
    });
}

let mainImg= document.getElementById("mainImg");
    let smImg = document.getElementsByClassName("smImg");

    smImg[0].onclick =function(){
        mainImg.src = smImg[0].src;
    }
    smImg[1].onclick=function(){
        mainImg.src = smImg[1].src;
    }
    smImg[2].onclick=function(){
        mainImg.src = smImg[2].src;
    }
    smImg[3].onclick=function(){
        mainImg.src = smImg[3].src;
    }




























