
const bttn = document.getElementById('button');
const roHead = document.getElementById('ro-head');
const enHead = document.getElementById('en-head');
const roMain = document.getElementById('ro-main');
const enMain = document.getElementById('en-main');


// document.getElementById('bttn').addEventListener('click', Toggle);
bttn.addEventListener('click', Toggle);

function Toggle() {
    // document.getElementById('main').classList.toggle('open');

    if (bttn.innerHTML === 'en') {
        bttn.innerHTML = 'ro';
        enHead.style.display = 'block';
        enMain.style.display = 'block';
        roHead.style.display = 'none';
        roMain.style.display = 'none';
    } else {
        bttn.innerHTML = 'en';
        roHead.style.display = 'block';
        roMain.style.display = 'block'
        enHead.style.display = 'none';
        enMain.style.display = 'none';
    }
}