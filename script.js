
Shery.makeMagnet(".magnet");
Shery.hoverWithMediaCircle(".hvr", {
  videos: ["video1.mp4", "video2.mp4", "video3.mp4"],
});


gsap.from(".hvr",{
  y:200,
  opacity:0,
  duration:1,
  stagger:1
})
gsap.from("button",{
  y:20,
  duration:.5,

  repeat:-1,
  yoyo:true

})


 var home = document.querySelector("#home");

 var img = document.querySelector(".cursor")


 home.addEventListener("mousemove",function(dets){
  gsap.to(img,{
    x:dets.x,
    y:dets.y
  })
 })
