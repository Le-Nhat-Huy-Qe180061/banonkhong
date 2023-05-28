let check = true;  
function play(){      
          
    var gameContainer = document.getElementById("game-container");
    var gameplay = document.getElementById("playbutton");
    if(check){
    gameContainer.style.display = "block";
    check = false;
        gameplay.innerHTML = "close";
}
    else{
        gameContainer.style.display =  "none";
        gameplay.innerHTML = "Play!";
        check = true;
    }}
<button id ="playbutton" type="button" onclick="play()">Play!</button>
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 20,
    effect: 'fade',
    loop: true,
    speed: 300,
    mousewheel: {
      invert: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

  const nuttrove=document.querySelector(".nuttrove");

  nuttrove.addEventListener("nutrove", (e) => {
    e.preventDefault();
    nuttrove.classList.add("animate");
    setTimeout(() => {

    },600)
    nuttrove.classList.add("animate")
  });