export function slideInAnimation(element) {
    document.querySelector(element).classList.remove('webpage-hidden');
    document.querySelector(element).classList.add('webpage-visible');
}