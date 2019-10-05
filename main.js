        
  jQuery(document).ready(function() {
var offset = 700;
var duration = 500;
jQuery(window).scroll(function() {
if (jQuery(this).scrollTop() > offset) {
jQuery('.back-to-top').fadeIn(duration);
} else {
jQuery('.back-to-top').fadeOut(duration);
}
});
jQuery('.back-to-top').click(function(event) {
event.preventDefault();
jQuery('html, body').animate({scrollTop: 0}, duration);
return false;
})
});

// videos play and pause

const videos = document.querySelectorAll(".videos");

videos.forEach(video =>{
               video.addEventListener("mouseover", function (){
               this.play()
               })
    
    video.addEventListener("mouseout", function(){
        this.pause()
    })
               })

