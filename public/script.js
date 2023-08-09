//SLIDESHOW:
const images = document.querySelectorAll('.slideshow img');
let currentImageIndex = 0;

function showNextImage() {
  images[currentImageIndex].style.opacity = '0';
  currentImageIndex = (currentImageIndex + 1) % images.length;
  images[currentImageIndex].style.opacity = '1';
}

setInterval(showNextImage, 5000); // Change slide every 5 seconds (adjust as needed)

// toggle between login and sign up

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

function redirectToHub() {
    window.location.href = "hub.html";
}


//side bar toggle

const menu_toggle = document.querySelector('.menu-toggle');
const sidebar = document.querySelector('.sidebar');

menu_toggle.addEventListener('click', () => {
    menu_toggle.classList.toggle('is-active');
    sidebar.classList.toggle('is-active');
});

//Upload image code 

    const uploadArea = document.querySelector('.upload-area');
    const postButton = document.querySelector('.post-button');

    uploadArea.addEventListener('dragover', (e) => {
        e.preventDefault();
        uploadArea.classList.add('dragover');
    });

    uploadArea.addEventListener('dragleave', () => {
        uploadArea.classList.remove('dragover');
    });

    uploadArea.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadArea.classList.remove('dragover');

        const file = e.dataTransfer.files[0];
        if (file.type.startsWith('image/')) {
            const img = document.createElement('img');
            img.src = URL.createObjectURL(file);
            img.style.maxWidth = '100%';
            uploadArea.innerHTML = '';
            uploadArea.appendChild(img);
        } else {
            uploadArea.innerHTML = '<p>Unsupported file type</p>';
        }
    });

    postButton.addEventListener('click', () => {
        const img = uploadArea.querySelector('img');
        if (img) {
            // Here you can perform the post action
            alert('Image posted!');
        }
    });





