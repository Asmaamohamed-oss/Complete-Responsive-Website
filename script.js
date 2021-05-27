

// Global variable
const allSections = document.querySelectorAll('section');
const fragment = document.createDocumentFragment();
const navMenu = document.getElementById('nav-menu');
const header = document.getElementById('header-nav');
const menuToggle = document.querySelector('.menuToggle');
// console.log(allSections)

/* Create nav bar links*/
function createNav(){
    for( let section of allSections ){
        sectionName = section.getAttribute('data-nav');
        sectionLink = section.getAttribute('id');
      

        let newList = document.createElement('li');
        newList.innerHTML = `<a class = "menu-link" href ="#${sectionLink}" onclick="toggleMenu();"> ${sectionName}</a>`;
        
        fragment.appendChild(newList);
    };
    navMenu.appendChild(fragment)
};



/* create header*/


function stickyNav(){
    header.classList.toggle('sticky', window.scrollY > 0);
}


/* Smoth scroll */

function smothScroll(){
    const allLinks = document.querySelectorAll('.nav a.menu-link');
    // console.log(allLinks)
    for(let link of allLinks){
        link.addEventListener('click' ,(e) =>{
            e.preventDefault();
            let sectionId = document.querySelector(link.getAttribute('href'));
            sectionId.scrollIntoView({behavior:"smooth" , block:"start"});
        });
    };
};




/* Toggle menu*/
function toggleMenu(){
    menuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
}




createNav();

window.addEventListener('scroll', stickyNav);

smothScroll();




/* set the Date denamically*/


const date = document.querySelector('.date');

date.innerHTML = new Date().getFullYear();

/* TO top Button */
window.addEventListener('scroll' , function(){
    const scrollHeight = window.pageYOffset;
    const toTop = document.querySelector('.to-Top');
    console.log(toTop)
    if(scrollHeight >= 1200){
        toTop.classList.add('show-link')
    }
    else{
        toTop.classList.remove('show-link')
    }
})



