let modal = document.querySelector('.mymodal');
let modalBtn = document.querySelector('#modalBtn');
let closeBtn = document.querySelector('.close-btn');

modalBtn.addEventListener('click', openModal, false);
modalBtn.addEventListener('touchend', touchend, false);

closeBtn.addEventListener('click', closeModal, false);

function openModal() {
    modal.style.display = 'block';
    modal.style.transition = "height 5s linear 0s";
    modal.style.height = "100%";
}

function touchend(e) {
    e.preventDefault();
    modal.style.display = 'block';
    modal.style.transition = "height 5s linear 0s";
    modal.style.height = "100%";
    return false;
}

function closeModal() {
    modal.style.display = 'none';
}