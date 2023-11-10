
const navSlide = () => {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    // Hamburger Animation and Nav Toggle

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('change');
        nav.classList.toggle('nav-active');

        // Animate Links
        navLinks.forEach((link, index) => {
        console.log(index);
        // console.log(index / 7);
        if (link.style.animation)
            link.style.animation = '';
        else
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
        });
    });
}

navSlide();







// TEROX Travel Hamburger

// const hamburgerMenu = () => {
//     const hamburger = document.querySelector('.hamburger');

//     hamburger.addEventListener('click', () => {
//         hamburger.classList.toggle('change');
//     });
// }

// hamburgerMenu();

