let tween = null;
const hoverActive = () => {
  hover = true
  console.log(tween.totalProgress())
  tween.play()
  if(tween.totalProgress() == 1){
    tween.restart()
  }
}

const hoverInactive =()=> {
 hover = false
}

const hoverState = () =>{
  if(hover){
    tween.restart()
  }
}

let  hover = false;
hoverBtn.addEventListener("mouseenter", hoverActive);
hoverBtn.addEventListener("mouseleave", hoverInactive);
tween = gsap.to(".circle", { duration:1, x:200,
  paused:true,                                
  repeat:1, 
  yoyo:true, 
  ease:"sine.inOut",
  onComplete:hoverState                            
});
