document.addEventListener("DOMContentLoaded", function() {
    function startCarousel(albumId) {
        const kartPics = document.querySelectorAll(`#${albumId} .kart-pic`);
        let currentIndex = 0;

        if (kartPics.length === 0) {
            console.error(`No images found for albumId: ${albumId}`);
            return;
        }

        // Initially display the first image
        kartPics[currentIndex].classList.add('active');

        // Create a unique interval for each carousel
        setInterval(function() {
            // Hide the current image
            kartPics[currentIndex].classList.remove('active');

            // Update index to the next image
            currentIndex = (currentIndex + 1) % kartPics.length;

            // Show the next image
            kartPics[currentIndex].classList.add('active');
        }, 2000); // Change image every 2 seconds
    }

    // Start the carousel for both albums
    startCarousel("album1");
    startCarousel("album2");
});
