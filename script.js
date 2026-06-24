// 1. Menu Page Open and Close Logic
const openMenuButtons = document.querySelectorAll('.open-menu-btn');
const closeMenuButton = document.getElementById('close-menu-btn');
const menuPage = document.getElementById('menu-page');

// Jab Our Menu ya View Full Menu button par click ho
openMenuButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        menuPage.classList.add('active'); // Menu page kholega
        document.body.style.overflow = 'hidden'; // Background scroll stop karega
    });
});

// Jab CLOSE button par click ho
if (closeMenuButton) {
    closeMenuButton.addEventListener('click', () => {
        menuPage.classList.remove('active'); // Menu page band karega
        document.body.style.overflow = 'auto'; // Background scroll wapas chalu
    });
}

// 2. Automatic Image Slider Logic
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function changeSlide() {
    if(slides.length === 0) return; // Agar slides na ho toh error na aaye
    
    // Purani active slide aur dot ko hatao
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    
    // Agli slide par jao
    currentSlide = (currentSlide + 1) % slides.length;
    
    // Nayi slide aur dot ko active karo
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

// Har 3 second (3000ms) me image badlegi
setInterval(changeSlide, 3000);

// 3. Table Reservation Logic (Direct WhatsApp Redirect)
const reserveBtn = document.getElementById('reserve-btn');
if (reserveBtn) {
    reserveBtn.addEventListener('click', function(e) {
        // Purana behavior rokenge taaki browser link block na kare
        e.preventDefault();
        
        // Tumhara message aur number direct JS se trigger hoga
        const phoneNumber = "919354487237";
        const message = "Hello Fluxora! Mujhe ek luxury table reserve karni hai. Please meri booking confirm karein.";
        
        // Perfect WhatsApp URL format
        const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
        
        // New tab me WhatsApp open karne ke liye
        window.open(whatsappUrl, '_blank');
    });
}
