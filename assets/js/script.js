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
  location.href = 'shop-single.html'
}

function sportfolio_img() {
  location.href = 'portfolio-single.html'
}

function blogSingle() {
  location.href = 'blog-single.html'
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


const videoPlayer = document.getElementById('videoPlayer');
const myVideo = document.getElementById('myVideo');
function stopVideo() {
  videoPlayer.style.display = "none";
}
function playVideo (file) {
  myVideo.src = file;
  videoPlayer.style.display = 'block';
}



let form_contact = document.getElementById('form_contact');
let submit_btn = document.getElementById('submit_btn');

submit_btn.addEventListener('click', (e) => {
  e.preventDefault();
  emailjs.sendForm('service_eapaeoa', 'template_hxl9oig', form_contact)
  .then(function(response) {
     console.log('SUCCESS!', response.status, response.text);
  }, function(error) {
     console.log('FAILED...', error);
  });
})

