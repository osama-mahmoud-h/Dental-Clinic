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
console.log(link);

link.forEach((ele)=>{
    ele.onclick=function(){
        link.forEach((sbilings)=>{
            sbilings.classList.remove("active");
        });
        this.classList.add("active");
        console.log("pressd");
    } 
});
/**end set link active */
