const cardFrontFirst = document.getElementById('cardFront-1');
const cardBackFirst = document.getElementById('cardBack-1');
const moreDetailsFirst = document.getElementById('moreDetails-1');
const lessDetailsFirst = document.getElementById('lessDetails-1');

moreDetailsFirst.addEventListener('click', () => {
    cardFrontFirst.style.transform = 'rotateY(360deg)';
    cardBackFirst.style.transform = 'rotateY(0)';
})

lessDetailsFirst.addEventListener('click', () => {
    cardFrontFirst.style.transform = 'rotateY(0)';
    cardBackFirst.style.transform = 'rotateY(180deg)';
})

const cardFrontSecond = document.getElementById('cardFront-2');
const cardBackSecond = document.getElementById('cardBack-2');
const moreDetailsSecond = document.getElementById('moreDetails-2');
const lessDetailsSecond = document.getElementById('lessDetails-2');

moreDetailsSecond.addEventListener('click', () => {
    cardFrontSecond.style.transform = 'rotateY(360deg)';
    cardBackSecond.style.transform = 'rotateY(0)';
})

lessDetailsSecond.addEventListener('click', () => {
    cardFrontSecond.style.transform = 'rotateY(0)';
    cardBackSecond.style.transform = 'rotateY(180deg)';
})

const cardFrontThird = document.getElementById('cardFront-3');
const cardBackThird = document.getElementById('cardBack-3');
const moreDetailsThird = document.getElementById('moreDetails-3');
const lessDetailsThird = document.getElementById('lessDetails-3');

moreDetailsThird.addEventListener('click', () => {
    cardFrontThird.style.transform = 'rotateY(360deg)';
    cardBackThird.style.transform = 'rotateY(0)';
})

lessDetailsThird.addEventListener('click', () => {
    cardFrontThird.style.transform = 'rotateY(0)';
    cardBackThird.style.transform = 'rotateY(180deg)';
})

const cardFrontFourth = document.getElementById('cardFront-4');
const cardBackFourth = document.getElementById('cardBack-4');
const moreDetailsFourth = document.getElementById('moreDetails-4');
const lessDetailsFourth = document.getElementById('lessDetails-4');

moreDetailsFourth.addEventListener('click', () => {
    cardFrontFourth.style.transform = 'rotateY(360deg)';
    cardBackFourth.style.transform = 'rotateY(0)';
})

lessDetailsFourth.addEventListener('click', () => {
    cardFrontFourth.style.transform = 'rotateY(0)';
    cardBackFourth.style.transform = 'rotateY(180deg)';
})

const cardFrontFifth = document.getElementById('cardFront-5');
const cardBackFifth = document.getElementById('cardBack-5');
const moreDetailsFifth = document.getElementById('moreDetails-5');
const lessDetailsFifth = document.getElementById('lessDetails-5');

moreDetailsFifth.addEventListener('click', () => {
    cardFrontFifth.style.transform = 'rotateY(360deg)';
    cardBackFifth.style.transform = 'rotateY(0)';
})

lessDetailsFifth.addEventListener('click', () => {
    cardFrontFifth.style.transform = 'rotateY(0)';
    cardBackFifth.style.transform = 'rotateY(180deg)';
})