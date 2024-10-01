let prev = document.getElementById("prev");
let next = document.getElementById("next");
let gds= document.getElementById("goddess");
let god = document.getElementById("god");
let back = document.getElementById("back");
let chars = document.getElementsByClassName("char");
let titles = document.getElementsByClassName("name");
let stories = document.getElementsByClassName("story");
let mk = document.getElementById("mk");
let ms = document.getElementById("ms");
let sn = document.getElementById("sn");

let backImgs = new Array (
    "C1.jpg",
    "C2.jpg",
    "C3.jpg"
);
let tridevi = new Array (
    "Mahamaya.png",
    "Chandika.png",
    "Ambika.png"
);

i =0;
stories[1].style.visibility ="hidden";
stories[2].style.visibility ="hidden";

titles[0].classList.toggle("comein1");
stories[0].classList.toggle("comein2");
function nextprev(){
    if(i==0){
        prev.style.visibility = "hidden";
        god.style.visibility="visible";
        mk.style.visibility="visible";
    }else{
        prev.style.visibility = "visible";
        god.style.visibility="hidden";
        mk.style.visibility="hidden";
    }
    if(i==1){
        ms.style.visibility="visible";
    }else{
        ms.style.visibility="hidden";
    }
    if(i==2){
        next.style.visibility = "hidden";
        sn.style.visibility="visible";
    }else{
        next.style.visibility = "visible";
        sn.style.visibility = "hidden";
    }
}


nextprev();

next.onclick = () =>{
    if(i<2){
        i ++;
        nextprev();
        back.style.backgroundImage = "url(\" "+backImgs[i] +"\")";
        gds.style.backgroundImage = "url(\" "+tridevi[i] +"\")";
        chars[i-1].classList.remove("active");
        chars[i].classList.add("active");
        titles[i-1].style.visibility ="hidden";
        titles[i].style.visibility = "visible";
        stories[i-1].style.visibility ="hidden";
        stories[i].style.visibility = "visible";
        titles[i-1].classList.toggle("comein1");
        stories[i-1].classList.toggle("comein2");
        titles[i].classList.toggle("comein1");
        stories[i].classList.toggle("comein2");
    }
}
prev.onclick = () =>{
    if(i>0){
        i --;
        nextprev();
        back.style.backgroundImage = "url(\" "+backImgs[i] +"\")";
        gds.style.backgroundImage = "url(\" "+tridevi[i] +"\")";
        chars[i+1].classList.remove("active");
        chars[i].classList.add("active");
        titles[i+1].style.visibility ="hidden";
        titles[i].style.visibility = "visible";
        stories[i+1].style.visibility ="hidden";
        stories[i].style.visibility = "visible";
        titles[i+1].classList.toggle("comein1");
        stories[i+1].classList.toggle("comein2");
        titles[i].classList.toggle("comein1");
        stories[i].classList.toggle("comein2");
    }
}
