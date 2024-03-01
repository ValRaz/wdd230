const range = document.getElementById('r');
const tickmarks = document.getElementById('tickmarks');
const rangeValues = document.getElementById('rangevalues').querySelectorAll('option');
const rangeValue = document.getElementById('rangevalue');


for (let i = 0; i < rangeValues.length; i++) {
    const tickmark = document.createElement('div');
    tickmark.classList.add('tickmark');
    tickmark.textContent = rangeValues[i].textContent;
    tickmarks.appendChild(tickmark);
}


const sliderWidth = range.offsetWidth;
const numOptions = rangeValues.length;
const tickmarkWidth = sliderWidth / (numOptions - 1);

document.querySelectorAll('.tickmark').forEach((tick, index) => {
    tick.style.left = (tickmarkWidth * index) + 'px';
});

range.addEventListener('input', function() {
    rangeValue.textContent = this.value;
});
