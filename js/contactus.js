document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.getElementById("menu-icon");
    const navLinks = document.getElementById("nav-links");

    menuIcon.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    const currentPage = window.location.pathname.split("/").pop();
    const navItems = document.querySelectorAll(".nav-links a");

    navItems.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });
});



document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const fullName = document.getElementById('fullName');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const gender = document.querySelectorAll('input[name="gender"]');
    const subscribe = document.getElementById('subscribe');

    let isValid = true;

    document.querySelectorAll('.tooltip').forEach((tooltip) => tooltip.remove());

    // Validation
    if (fullName.value.trim() === '' || fullName.value.trim().split(' ').length < 2) {
        showTooltip(fullName, 'Please enter your full name (example: John Doe).');
        fullName.style.backgroundColor = 'rgba(255, 200, 200, 0.7)';
        isValid = false;
    } else {
        fullName.style.backgroundColor = '';
    }

    if (email.value.trim() === '' || !email.value.includes('@') || !email.value.includes('.')) {
        showTooltip(email, 'Please enter a valid email address (example: example@mail.com).');
        email.style.backgroundColor = 'rgba(255, 200, 200, 0.7)';
        isValid = false;
    } else {
        email.style.backgroundColor = '';
    }

    if (phone.value.trim() === '' || isNaN(phone.value.trim()) || phone.value.trim().length < 10) {
        showTooltip(phone, 'Please enter a valid phone number (atleast 10 digits).');
        phone.style.backgroundColor = 'rgba(255, 200, 200, 0.7)';
        isValid = false;
    } else {
        phone.style.backgroundColor = '';
    }

    if (!Array.from(gender).some((radio) => radio.checked)) {
        gender.forEach((radio) => {
            showTooltip(radio.parentElement, 'Please select your gender.');
            radio.parentElement.style.backgroundColor = 'rgba(255, 200, 200, 0.7)';
        });
        isValid = false;
    } else {
        gender.forEach((radio) => (radio.parentElement.style.backgroundColor = ''));
    }

    if (!subscribe.checked) {
        showTooltip(subscribe.parentElement, 'You must agree to subscribe to receive updates.');
        subscribe.parentElement.style.backgroundColor = 'rgba(255, 200, 200, 0.7)';
        isValid = false;
    } else {
        subscribe.parentElement.style.backgroundColor = '';
    }

    // Feedback messages
    const formMessage = document.getElementById('formMessage');
    if (!isValid) {
        formMessage.style.color = 'White';
        formMessage.textContent = 'Please  try again.';
    } else {
        formMessage.style.color = 'green';
        formMessage.textContent = 'Form submitted successfully!';
        document.getElementById('contactForm').reset();
    }
});

// Tooltip what error info
function showTooltip(element, message) {
    const tooltip = document.createElement('div');
    tooltip.classList.add('tooltip');
    tooltip.textContent = message;

    const rect = element.getBoundingClientRect();
    tooltip.style.left = `${rect.left + window.scrollX}px`;
    tooltip.style.top = `${rect.top + window.scrollY - 30}px`;

    document.body.appendChild(tooltip);

    setTimeout(() => {
        tooltip.remove();
    }, 3000);
}

document.querySelectorAll('img').forEach((img) => {
    img.setAttribute('draggable', 'false'); 
});