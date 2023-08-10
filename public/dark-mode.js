
let isDarkMode = false;
const darkModeToggle = document.querySelector('#darkModeToggle');
darkModeToggle.addEventListener('click', toggleDarkMode);

function toggleDarkMode() {
    
    const bodyElement = document.body;
    const buttonElement = document.querySelector('#darkModeToggle');
    const menuItems = document.querySelectorAll('.menu-item');
    const postTitles = document.querySelectorAll('.posts_title');

    if (!isDarkMode) {
        bodyElement.classList.add('dark-mode');
        buttonElement.classList.add('dark-mode');
        menuItems.forEach(item => {
            item.classList.add('dark-mode');
        });
        postTitles.forEach(item => {
            item.classList.add('dark-mode');
        });
        isDarkMode = true; 
    } else {
        bodyElement.classList.remove('dark-mode'); 
        buttonElement.classList.remove('dark-mode');
        menuItems.forEach(item => {
            item.classList.remove('dark-mode');
        });
        postTitles.forEach(item => {
            item.classList.remove('dark-mode');
        });
        isDarkMode = false; 
    }

    localStorage.setItem('darkMode', isDarkMode);
}


function applyDarkModeOnLoad() {
    
    const isDarkModePref = localStorage.getItem('darkMode') === 'true';
    if (isDarkModePref) {
        document.body.classList.add('dark-mode');
        document.querySelector('#darkModeToggle').checked = true;
        document.querySelectorAll('.menu-item').forEach(item => {
            item.classList.add('dark-mode');
        });
        document.querySelectorAll('.posts_title').forEach(item => {
            item.classList.add('dark-mode');
        });
        isDarkMode = true; 
    }
}

document.addEventListener('DOMContentLoaded', applyDarkModeOnLoad);
