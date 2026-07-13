const menuIcon = document.querySelector('.menu-icon'); 
const closeIcon = document.querySelector('.close-icon'); 
const sideBar = document.querySelector('.sidebar');
const windowWidth = document.querySelector('.mainContainer').offsetWidth; 


menuIcon.addEventListener('click', () => {
    sideBar.style.display = 'flex'; 
    closeIcon.classList.toggle('showCloseIcon'); 
    menuIcon.classList.toggle('hideMenuIcon'); 
})

closeIcon.addEventListener('click', () => {
    sideBar.style.display = 'none'; 
    closeIcon.classList.toggle('showCloseIcon'); 
    menuIcon.classList.toggle('hideMenuIcon');
})

