  AOS.init();

  const barIcon = document.querySelector('.fa-bars');
  const navbar = document.querySelector('.navbar');
  mediaSize = 1024;
  barIcon.addEventListener('click', toggleNav);
  function toggleNav() {
    navbar.classList.toggle('active-nav')
  }



  const counters = document.querySelectorAll('.count');
  const speed = 25;
  counters.forEach((counter) => {
    const updateCount = () => {
      const target = parseInt(counter.getAttribute('data-target'));
      const count = parseInt(counter.innerText);
      const increment = Math.trunc(target / speed);

      if (count < target) {
        counter.innerText = count + increment;
        setTimeout(updateCount, 1);
      } else {
        counter.innerText = target;
      }
    }
    updateCount()
  })




function myFunctionOne() {
  location.href = 'shopSingle.html'
}

function sportfolio_img() {
  location.href = 'portfoliosingle.html'
}

function blogSingle() {
  location.href = 'blogsingle.html'
}




var swiper = new Swiper(".testimonial", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


var swiper = new Swiper(".offer-swiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  grabCursor: true,
  loop:true,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


const videoPlayar = document.getElementById('videoPlayer');
const myVideo = document.getElementById('myVideo');
function stopVideo() {
  videoPlayar.style.display = "none";
}
function playVideo (file) {
  myVideo.src = file;
  videoPlayar.style.display = 'block';
}

