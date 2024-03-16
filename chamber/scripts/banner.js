let dismissBanner = document.getElementById('dismiss-banner');
let banner = document.getElementById('banner');

dismissBanner.addEventListener('click', () => {
    banner.style.display = 'none';
});