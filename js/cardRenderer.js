function updateCardPreview(cardData) {
    const cardElement = document.getElementById('business-card');
    cardElement.querySelector('.name').textContent = cardData.name;
    cardElement.querySelector('.title').textContent = cardData.title;
    cardElement.querySelector('.email').textContent = cardData.email;
    cardElement.querySelector('.phone').textContent = cardData.phone;
    cardElement.querySelector('.skills').textContent = cardData.skills.join(', ');
    
    const socialLinks = cardElement.querySelector('.social-links');
    socialLinks.innerHTML = '';
    cardData.socials.forEach(social => {
        const link = document.createElement('a');
        link.href = social.url;
        link.target = '_blank';
        link.innerHTML = `<img src="${social.icon}" alt="${social.name} icon">`;
        socialLinks.appendChild(link);
    });
}

function generateQRCode(url) {
    const qrCodeElement = document.getElementById('qr-code');
    qrCodeElement.innerHTML = '';
    const qrCode = new QRCode(qrCodeElement, {
        text: url,
        width: 128,
        height: 128,
    });
}

export { updateCardPreview, generateQRCode };