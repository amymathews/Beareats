//SLIDESHOW:
const images = document.querySelectorAll('.slideshow img');
let currentImageIndex = 0;

function showNextImage() {
  images[currentImageIndex].style.opacity = '0';
  currentImageIndex = (currentImageIndex + 1) % images.length;
  images[currentImageIndex].style.opacity = '1';
}

setInterval(showNextImage, 5000); // Change slide every 5 seconds (adjust as needed)

//toggle between login and sign up form

// JavaScript for slideshow animation

// Your existing slideshow code

// JavaScript for slideshow animation

// JavaScript for slideshow animation

// Your existing slideshow code

function toggleSignUp() {
    const loginForm = document.getElementById('loginForm');
    const signUpForm = document.getElementById('signUpForm');

    if (loginForm.style.display === 'none') {
        // Show the login form, hide the signUpForm
        loginForm.style.display = 'block';
        signUpForm.style.display = 'none';
    } else {
        // Show the signUpForm, hide the login form
        loginForm.style.display = 'none';
        signUpForm.style.display = 'block';
    }
}




