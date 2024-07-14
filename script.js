
function on(overlayId,projectName, description, mediaUrl, mediaType) {
    document.getElementById(overlayId).style.display = "block";
    document.querySelector(`#${overlayId} h2`).innerText = projectName;
    document.querySelector(`#${overlayId} p`).innerText = description;
    
    if (mediaType === 'video') {
      document.querySelector(`#${overlayId} .overlay-video`).style.display = 'block';
      document.querySelector(`#${overlayId} .overlay-image`).style.display = 'none';
      document.querySelector(`#${overlayId} .overlay-video source`).src = mediaUrl;
      document.querySelector(`#${overlayId} .overlay-video`).load();
    } else {
      document.querySelector(`#${overlayId} .overlay-video`).style.display = 'none';
      document.querySelector(`#${overlayId} .overlay-image`).src = mediaUrl;
      document.getElementById("text").innerText = projectName;
    }
  }
  
  function off(overlayId) {
    document.getElementById(overlayId).style.display = "none";
  }

  document.addEventListener('DOMContentLoaded', function () {
    // Navbar scroll behavior
    window.addEventListener("scroll", function() {
      var nav = document.querySelector(".nav");
      nav.classList.toggle("scrolled", window.scrollY > 0);
    });

    // Initialize AOS
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false // Whether animation should happen only once - while scrolling down
    });
  });

