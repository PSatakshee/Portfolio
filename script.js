document.addEventListener("DOMContentLoaded", function () {

  autohide = document.querySelector('.autohide');
  navbar_height = document.querySelector('.mynavbar').offsetHeight;
  document.body.style.paddingTop = navbar_height + 'px';

  if (autohide) {
    var last_scroll_top = 0;
    window.addEventListener('scroll', function () {
      let scroll_top = window.scrollY;
      if (scroll_top < last_scroll_top) {
        autohide.classList.remove('scrolled-down');
        autohide.classList.add('scrolled-up');
      }
      else {
        autohide.classList.remove('scrolled-up');
        autohide.classList.add('scrolled-down');
      }
      last_scroll_top = scroll_top;
    });
  }
});

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);