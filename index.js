const Left1=document.querySelector(".left1")
const Right1=document.querySelector(".right1")
const IMG1=document.querySelector("#A-img")
const Video=document.querySelector('#myVideo')



IMG1.addEventListener('click',()=>{
    
        Right1.classList.toggle('slide-animation');
        Left1.classList.toggle('slide-animation1');
        IMG1.remove();

        if (Video.paused) {
                Video.play();
        } 
        else {
           Video.pause();
        }
})


  
  