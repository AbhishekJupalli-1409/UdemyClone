document.addEventListener('DOMContentLoaded', () => {
    const triggerElement = document.querySelector('.trigger-element');
    const otherElements = document.querySelectorAll('.other-element');

    const handleScroll = () => {
        const triggerRect = triggerElement.getBoundingClientRect();
        if (triggerRect.top <= 0) {
            otherElements.forEach(element => {
                element.classList.add('z-index-2');
            });
        } else {
            otherElements.forEach(element => {
                element.classList.remove('z-index-2');
            });
        }
    };

    window.addEventListener('scroll', handleScroll);

    // Initial check in case the page is loaded with scroll position already
    handleScroll();
});