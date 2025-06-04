// JavaScript logic for the business card generator application

// Function to update the live preview of the business card
function updatePreview() {
    const name = document.getElementById('name').value;
    const title = document.getElementById('title').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const skills = document.getElementById('skills').value.split(',').map(skill => skill.trim());
    const github = document.getElementById('github').value;
    const linkedin = document.getElementById('linkedin').value;
    const twitter = document.getElementById('twitter').value;

    const card = document.getElementById('business-card');
    card.querySelector('.name').textContent = name;
    card.querySelector('.title').textContent = title;
    card.querySelector('.email').textContent = email;
    card.querySelector('.phone').textContent = phone;
    card.querySelector('.skills').textContent = skills.join(', ');

    // Update social media links
    card.querySelector('.github').href = github;
    card.querySelector('.linkedin').href = linkedin;
    card.querySelector('.twitter').href = twitter;

    // Generate QR code
    const qrCodeContainer = document.getElementById('qr-code');
    qrCodeContainer.innerHTML = ''; // Clear previous QR code
    const qrCode = new QRCode(qrCodeContainer, {
        text: `mailto:${email}`,
        width: 100,
        height: 100,
    });
}

// Function to handle theme switching
function switchTheme(theme) {
    const themes = ['default', 'dark', 'technical'];
    themes.forEach(t => {
        document.body.classList.remove(t);
    });
    document.body.classList.add(theme);
}

// Event listeners for form inputs
document.querySelectorAll('input, textarea').forEach(input => {
    input.addEventListener('input', updatePreview);
});

// Event listener for theme selection
document.getElementById('theme-selector').addEventListener('change', (event) => {
    switchTheme(event.target.value);
});

// Initial preview update
updatePreview();