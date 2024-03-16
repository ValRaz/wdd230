let dismissBanner = document.getElementById('dismiss-banner');
let banner = document.getElementById('banner');

let currentDayOfWeek = new Date().getDay();

if (currentDayOfWeek >= 1 && currentDayOfWeek <= 3) {
    banner.style.display = 'flex';
} else {
    banner.style.display = 'none';
}

dismissBanner.addEventListener('click', () => {
    banner.style.display = 'none';
});