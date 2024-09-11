window.addEventListener('scroll', function() {
    var header = document.getElementById('header');
    var stickyElement = document.getElementById('stickyElement');

    // Get the position of the header relative to the viewport
    var headerRect = header.getBoundingClientRect();

    // Check if the header's top has reached or gone past 0
    if (headerRect.bottom <= 0) {
        stickyElement.style.position = 'fixed';
        stickyElement.style.top = '0'; // Stick it to the top
    } else {
        stickyElement.style.position = 'relative';
        stickyElement.style.top = ''; // Reset the top position
    }
});
