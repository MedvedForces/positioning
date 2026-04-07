/*
    Изменить элементу цвет и ширину можно вот так:

    const element = document.querySelector('.myElement');
    element.style.color = 'red';
    element.style.width = '300px';
*/
const openBtn = document.getElementById('open-modal-btn');
const overlay = document.getElementById('modal-overlay');
const closeBtn = document.querySelector('.close-btn');

// Открыть
openBtn.addEventListener('click', () => {
    overlay.classList.remove('hidden');
});

// Закрыть по крестику
closeBtn.addEventListener('click', () => {
    overlay.classList.add('hidden');
});