// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Highlight active section in navigation
window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            document.querySelectorAll('nav a').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// Typing animation
const nameText = "Sadira Prathama";
const taglineText = "Information Engineering Student | Aspiring Software Engineer";
let nameIndex = 0;
let taglineIndex = 0;
let isNameComplete = false;

function typeWriter() {
    if (nameIndex < nameText.length) {
        document.getElementById("typing-name").innerHTML += nameText.charAt(nameIndex);
        nameIndex++;
        setTimeout(typeWriter, 100); // Adjust typing speed (milliseconds)
    } else if (!isNameComplete) {
        isNameComplete = true;
        setTimeout(typeWriter, 500); // Pause before tagline starts
    } else if (taglineIndex < taglineText.length) {
        document.getElementById("typing-tagline").innerHTML += taglineText.charAt(taglineIndex);
        taglineIndex++;
        setTimeout(typeWriter, 50); // Faster typing for tagline
    }
}

// Start animation when page loads
window.addEventListener('load', typeWriter);