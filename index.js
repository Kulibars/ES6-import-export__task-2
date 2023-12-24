import './index.css';

const cookieConsent = document.querySelector('.cookie-consent');

console.log('start');

cookieConsent.addEventListener('click', (event) => {
    const cookieButton = event.target.closest('.cookie-consent__button');
    if (cookieButton) {
        console.log(cookieButton);
        const userCookieConsent = true;
        localStorage.setItem('userCookieConsent', userCookieConsent);
        cookieConsent.classList.add('hide');
    } 
});

const accepted = localStorage.getItem('userCookieConsent');

if (JSON.parse(accepted) === true) {
    cookieConsent.classList.add('hide');
}