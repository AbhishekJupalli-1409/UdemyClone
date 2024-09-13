const input = document.getElementById('Search-box-input');

// Add event listener for when the user starts typing
input.addEventListener('input', function () {
    input.classList.add('no-border'); // Hide the border while typing
});



window.addEventListener('scroll', function checkFixed() {
    var header = document.getElementById('nav-fixed');
    var stickyElement = document.getElementById('stickyElement');

    // Get the position of the header relative to the viewport
    var headerRect = header.getBoundingClientRect();

    // Check if the header's top has reached or gone past 0
    if (headerRect.top <= 0) {
        stickyElement.style.position = 'fixed';
        stickyElement.style.top = '0'; // Stick it to the top
        window.removeEventListener('scroll', checkFixed);
    }
});
window.addEventListener('scroll', function checkSticky() {
    var header = document.getElementById('nav-fixed');
    var stickyElement = document.getElementById('stickyElement');

    // Get the position of the header relative to the viewport
    var headerRect = header.getBoundingClientRect();

    // Check if the header's top has reached or gone past 0
    if (headerRect.top > 0) {
        stickyElement.style.position = 'sticky';
        // Stick it to the top
        stickyElement.style.top = '0'; // Stick it to the top
        stickyElement.style.zIndex = '1';
        window.removeEventListener('scroll', checkSticky);
    }
});











window.addEventListener('scroll', function checkCardx() {
    var content_main = document.getElementById('content-main');
    var cardElement = document.getElementById('cardElement');

    // Get the position of the header relative to the viewport
    var headerRect = content_main.getBoundingClientRect();

    // Check if the header's top has reached or gone past 0
    if (headerRect.top <= 0) {

            cardElement.style.zIndex = '6';
            
        
        window.removeEventListener('scroll', checkcardx);
    }
});


window.addEventListener('scroll', function checkCardy() {
    var content_main = document.getElementById('content-main');
    var cardElement = document.getElementById('cardElement');

    // Get the position of the header relative to the viewport
    var headerRect = content_main.getBoundingClientRect();

    // Check if the header's top has reached or gone past 0

});