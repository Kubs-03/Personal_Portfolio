document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');
    const menuLinks = document.querySelectorAll('.menu a');
    const signupForm = document.getElementById('signup-form');
    const exploreButton = document.querySelector('.Explore'); // Assuming this is the class of your "Explore" button

    // Toggle menu function
    menuToggle.addEventListener('click', function () {
        menu.classList.toggle('active');
    });

    // Scroll to section function
    function scrollToSection(sectionId) {
        const targetElement = document.querySelector(sectionId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Adjusts for the sticky navbar height
                behavior: 'smooth'
            });
        }
    }

    // Add click event listeners to menu links
    menuLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default link behavior

            // Get the href attribute value and scroll to the corresponding section
            const sectionId = link.getAttribute('href');
            scrollToSection(sectionId);

            // Close menu if it's open (for mobile view)
            menu.classList.remove('active');
        });
    });

    // Toggle sign-up form
    menuLinks.forEach(link => {
        if (link.getAttribute('href') === '#signin') {
            link.addEventListener('click', function (event) {
                event.preventDefault();
                signupForm.style.display = 'block';
            });
        }
    });

    // Close sign-up form when clicking outside or cancel button
    signupForm.addEventListener('click', function (event) {
        if (event.target === signupForm || event.target.classList.contains('cancelbtn')) {
            signupForm.style.display = 'none';
        }
    });

    // Scroll to About section when Explore button is clicked
    exploreButton.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default link behavior

        // Scroll to the About section
        scrollToSection('#about');

        // Optionally, close the menu if it's open (for mobile view)
        menu.classList.remove('active');
    });

    // Initialize AOS
    AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: false // Whether animation should happen only once - while scrolling down
    });
});
