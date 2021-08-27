/**start loading animation */
var screen=document.querySelector(".loading");
  screen.classList.remove("hide");
  setTimeout(()=>{
    screen.classList.add("hide");
  },1500);
/**end loading animation */

/*close and open toggle menu in mobile*/
var closeBtn=document.querySelector(".navbar .links ul .close");
var menuBtn=document.querySelector(".navbar .toggle-btn i");
var linksList=document.querySelector(".navbar .links ");
closeBtn.onclick=function(){
    linksList.classList.add('hide');
    linksList.classList.remove('show');
}
menuBtn.onclick=function(){
    linksList.classList.add('show');
    linksList.classList.remove('hide');
}


/* satrt set link active */
var serv =document.getElementById("services");

link.forEach((ele)=>{
    ele.onclick=function(){
     //offset top of section
     var sectionOffsetTop= document.getElementById(ele.getAttribute('data-target').toString()).offsetTop;
     var body =document.querySelector("html ,body");

     //remove menu in mobile screen
     linksList.classList.add('hide');
    linksList.classList.remove('show');

     //smooth scroolling
   var scrolling = setInterval(()=>{
       if (body.scrollTop>=sectionOffsetTop-10){
         clearInterval(scrolling);
       }else{
        body.scrollTop+=10;
       }
     },3);
   
     //remove class active from all links
        link.forEach((sbilings)=>{
            sbilings.classList.remove("active");
        });
        //add class active to current link
        this.classList.add("active");
    }; 
})
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
    },2500);
/**end auto slider */

//**start up button */
var upButton=document.querySelector(".up-btn");

window.onscroll=function(){
  var bodyOffsetTop=document.querySelector("html ,body");
  if(bodyOffsetTop.scrollTop>=800){
    upButton.classList.remove("hide");
  }
  else
  upButton.classList.add("hide");
  //on click 
  upButton.onclick=function(){
    console.log("preseeee");
    var scrollingUp=setInterval(() => {
      if(bodyOffsetTop.scrollTop<=20){
        clearInterval(scrollingUp);
      }
      else{
        bodyOffsetTop.scrollTop-=20;
      }
    }, 1);
  }

}

/**end up button */

