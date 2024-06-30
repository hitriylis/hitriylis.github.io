const moreDetailsButtons = document.querySelectorAll('button[id^="more-details"]');
moreDetailsButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        const cardId = e.target.id.replace('more-details', 'card-front');
        const card = document.getElementById(cardId).closest('.flipping-card');
        card.classList.add('flipped');
    });
});

const lessDetailsButtons = document.querySelectorAll('button[id^="less-details"]');
lessDetailsButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        const cardId = e.target.id.replace('less-details', 'card-back');
        const card = document.getElementById(cardId).closest('.flipping-card');
        card.classList.remove('flipped');
    });
});