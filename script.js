let type= new Typed ('#changing-text', {
strings : ['Front-end Developer', 'Backend Developer', 'Software Developer', 'Fullstack Developer'],
typeSpeed:50,
backSpees: 50,
loop: true,
})

//=====NAVBAR=====

// This code assumes you have a class named "active" in your CSS that highlights the active navbar link
document.addEventListener('DOMContentLoaded', (event) => {
    const navLinks = document.querySelectorAll('.navbar a');
    const currentUrl = window.location.href;

    navLinks.forEach(link => {
        if(link.href === currentUrl) {
            // Remove active class from any previously active link
            navLinks.forEach(lnk => lnk.classList.remove('active'));
            // Add active class to the current link
            link.classList.add('active');
        }
    });
});
