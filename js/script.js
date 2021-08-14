/*close and open toggle menu in mobile*/
var closeBtn=document.querySelector(".navbar .links ul .close");
var menuBtn=document.querySelector(".navbar .toggle-btn i");
var linksList=document.querySelector(".navbar .links ");
closeBtn.onclick=function(){
    linksList.classList.add('hide');
    linksList.classList.remove('show');
    console.log("pressed");
}
menuBtn.onclick=function(){
    linksList.classList.add('show');
    linksList.classList.remove('hide');
}

/* satrt set link active */
var link=document.querySelectorAll(".navbar .links ul li a");
link.forEach((ele)=>{
    ele.onclick=function(){
        link.forEach((sbilings)=>{
            sbilings.classList.remove("active");
        });
        this.classList.add("active");
    } 
});
/**end set link active */

/**start auto slider */
var bullts=document.querySelectorAll('.slider .bullts li');
var slides=document.querySelectorAll(".slider .box");
var curSlide=0;
var bulltsArr=Array.from(bullts);
var slideArr=Array.from(slides);

  var interval = setInterval(()=>{
     bulltsArr[curSlide].classList.remove('active');
     slideArr[curSlide].classList.remove('active');

     curSlide++;
     curSlide=curSlide%bulltsArr.length;

     bulltsArr[curSlide].classList.add('active');
     slideArr[curSlide].classList.add('active');

     if(curSlide==0)
     clearInterval(interval);
    },3000);

/*bullts[0].onclick=function(){
  console.log("zzzzzzz");
}
document.addEventListener("click",(e)=>{
console.log(e.target.tagName);
});
    bullts.forEach((bullt,index)=>{
      bullt.onclick=function(){
        console.log("pressesddddd");
        curSlide=index;
        bullts.forEach((ele)=>{
          ele.classList.remove('active');
        });
        slides.forEach((ele)=>{
          ele.classList.remove('active');
        });
        bulltsArr[curSlide].classList.add('active');
        slideArr[curSlide].classList.add('active');
      }
    });*/
/**end auto slider */