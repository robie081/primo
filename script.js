
// Pilates Body & Face Copou


const pilates = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    // Hamburger Animation and Nav Toggle

    burger.addEventListener('click', () => {
        burger.classList.toggle('change');

        if (nav.style.width === '350px')
            nav.style.width = '0px';
        else
            nav.style.width = '350px';
    });
}

pilates();





