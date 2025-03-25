

document.addEventListener('DOMContentLoaded', function() {
  // Mobile-Menü-Toggle
  const menuToggle = document.querySelector('.mobile-menu-toggle');
  const navLinks = document.querySelector('nav ul');

  menuToggle.addEventListener('click', function() {
    navLinks.classList.toggle('active');
  });
});

// Elemente abrufen
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-image");
const captionText = document.getElementById("caption");
const closeBtn = document.getElementsByClassName("close")[0];
const images = document.querySelectorAll(".gallery-item img");

// Klick-Event für jedes Bild
images.forEach((img) => {
  img.addEventListener("click", function(){
    modal.style.display = "block";
    modalImg.src = this.src;       
    captionText.innerHTML = this.alt; 
  });
});

// Schließen des Modals
closeBtn.onclick = function() {
  modal.style.display = "none";
}


window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  if (window.scrollY > 50) { 
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

