const openBtn = document.getElementById('open-modal-btn');
const overlay = document.getElementById('modal-overlay');
const closeBtn = document.querySelector('.close-btn');


const progressFill = document.querySelector('.progress-fill');
let timerId;

openBtn.addEventListener('click', () => {
    overlay.classList.remove('hidden');
    
    let progress = 0;
    progressFill.style.width = '0%';

    clearInterval(timerId);

    const duration = 3000; // в мс
    const frameMs = 16; // 60 fps
    const step = 100 / (duration / frameMs);

    timerId = setInterval(() => {
        progress += step;

        if (progress >= 100) {
            progressFill.style.width = '100%';
            clearInterval(timerId);
        } else {
            progressFill.style.width = progress + '%';
        }
    }, frameMs);
});

closeBtn.addEventListener('click', () => {
    overlay.classList.add('hidden');
    clearInterval(timerId);
});