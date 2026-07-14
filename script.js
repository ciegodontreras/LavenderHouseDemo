const menuIcon = document.querySelector('.menu-icon'); 
const closeIcon = document.querySelector('.close-icon'); 
const sideBar = document.querySelector('.sidebar');

window.addEventListener('resize', () => {
    if (window.innerWidth > 800) { 
        sideBar.classList.remove('hideShowSideBar');  
        closeIcon.classList.remove('showCloseIcon'); 
        menuIcon.classList.remove('hideMenuIcon'); 
    }
})

menuIcon.addEventListener('click', () => {
    sideBar.classList.toggle('hideShowSideBar');  
    closeIcon.classList.toggle('showCloseIcon'); 
    menuIcon.classList.toggle('hideMenuIcon'); 
})

closeIcon.addEventListener('click', () => {
    sideBar.classList.toggle('hideShowSideBar');  
    closeIcon.classList.toggle('showCloseIcon'); 
    menuIcon.classList.toggle('hideMenuIcon');
})

