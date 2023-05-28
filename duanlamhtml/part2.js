let items = document.querySelectorAll('.item');
let nav = document.getElementById('nav');
document.addEventListener('scroll', (event) => {
    if(window.scrollY > 500){
        nav.classList.add('tofixed');
    }else{
        nav.classList.remove('tofixed');
    }
    items.forEach(item =>{
        if(item.offsetTop - window.scrollY < 350){
            item.classList.add('active');
        }
    })
})
var audio = document.getElementById("backgroundAudio");
var playButton = document.getElementById("playButton");
var pauseButton = document.getElementById("pauseButton");

playButton.addEventListener("click", function() {
  audio.play();
});

pauseButton.addEventListener("click", function() {
  audio.pause();
});
//let check=confirm("text")?