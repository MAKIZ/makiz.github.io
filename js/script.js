let modal = document.querySelector('.mymodal');
let modalBtn = document.querySelector('#modalBtn');
let closeBtn = document.querySelector('.close-btn');

function touchstart(e) {
    e.preventDefault();
    return false;
}

modalBtn.addEventListener('click', openModal);
modalBtn.addEventListener('touchstart', touchstart);

closeBtn.addEventListener('click', closeModal);

function openModal() {
    modal.style.display = 'block';
    modal.style.transition = "height 5s linear 0s";
    modal.style.height = "100%";
}

function closeModal() {
    modal.style.display = 'none';
}