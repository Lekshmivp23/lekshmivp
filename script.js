const navbar = document.querySelector('.header .navbar');
const menuButton = document.querySelector('.header .menu');
const overlayPictures = document.querySelectorAll('.overlay-picture');


//var modal = document.getElementById("modal");
//var modalImage = document.getElementById("modal-image");
//var modalCaption = document.getElementById("modal-caption");



menuButton.addEventListener('click', () => {
  navbar.classList.toggle('show');
});

document.onscroll = () => {
  navbar.classList.remove('show');

  if (window.scrollY > 0) {
    document.querySelector('.header').classList.add('active');
  } else {
    document.querySelector('.header').classList.remove('active');
  }
};

document.onload = () => {
  if (window.scrollY > 0) {
    document.querySelector('.header').classList.add('active');
  } else {
    document.querySelector('.header').classList.remove('active');
  }
};




overlayPictures.forEach((picture) => {
  picture.addEventListener('click', (event) => {
    event.stopPropagation();
  });
});

const pictures = document.querySelectorAll('.picture');

pictures.forEach((picture) => {
  picture.addEventListener('click', (event) => {
    const overlay = event.target.nextElementSibling;
    const overlayPicture = overlay.querySelector('.overlay-picture');
    overlay.classList.toggle('active');
    overlayPicture.setAttribute('src', event.target.getAttribute('src'));
  });
});

document.addEventListener('click', (event) => {
  const overlays = document.querySelectorAll('.overlay');
  overlays.forEach((overlay) => {
    if (overlay.classList.contains('active')) {
      overlay.classList.remove('active');
    }
  });
});


//function openModal(imagePath, captionText) {
//  modal.style.display = "block";
//  modalImage.src = imagePath;
//  modalCaption.innerHTML = captionText;
//}
//
//function closeModal() {
//  modal.style.display = "none";
//}


//function openModal(image) {
//  document.getElementById('modal-image').src = image;
//  document.getElementById('modal').style.display = 'block';
//}
//
//function closeModal() {
//  document.getElementById('modal').style.display = 'none';
//}



  
const learnMoreBtn = document.querySelector('.learn-more-btn');
const hiddenDescription = document.querySelector('.hidden-description');

learnMoreBtn.addEventListener('click', function() {
  hiddenDescription.classList.toggle('hidden-description');
});
