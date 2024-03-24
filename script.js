// Include Anime.js library in your project (download from https://animejs.com/)
// Add the following script tag in your HTML file before the closing </body> tag:
// <script src="anime.min.js"></script>

// Define animation using Anime.js
anime({
    targets: '.animated',
    opacity: [0, 1],
    translateY: [20, 0],
    easing: 'easeInOutQuad',
    duration: 1000,
    delay: anime.stagger(100),
});
