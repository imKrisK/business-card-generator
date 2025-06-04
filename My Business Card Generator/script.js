document.addEventListener('DOMContentLoaded', function() {
    // Get form and preview elements
    const form = document.getElementById('businessCardForm');
    const downloadBtn = document.getElementById('downloadBtn');
    const previewCard = document.getElementById('businessCardPreview');
    const qrCodeContainer = document.getElementById('qrCodeContainer');
    
    // Create QR code instance
    let qrCode = null;
    
    // Live preview functionality
    const inputs = form.querySelectorAll('input[type="text"], input[type="email"], input[type="tel"], input[type="url"]');
    
    inputs.forEach(input => {
        input.addEventListener('input', updatePreview);
    });
    
    document.getElementById('theme').addEventListener('change', updateTheme);
    document.getElementById('qrcode').addEventListener('change', updateQRCode);
    
    // Initialize preview with placeholder content
    updatePreview();
    updateQRCode();
    
    // Form submission
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        updatePreview();
        downloadBtn.disabled = false;
        
        // Scroll to preview
        document.querySelector('.preview-container').scrollIntoView({
            behavior: 'smooth'
        });
    });
    
    // Download business card
    downloadBtn.addEventListener('click', function() {
        html2canvas(previewCard, {
            scale: 3, // Higher resolution
            logging: false,
            useCORS: true,
            backgroundColor: null
        }).then(canvas => {
            const link = document.createElement('a');
            link.download = 'business-card.png';
            link.href = canvas.toDataURL('image/png');
            link.click();
        });
    });
    
    // Function to update the preview
    function updatePreview() {
        // Update text content
        document.getElementById('previewName').textContent = 
            document.getElementById('name').value || 'Your Name';
        
        document.getElementById('previewTitle').textContent = 
            document.getElementById('title').value || 'Software Engineer';
        
        document.getElementById('previewCompany').textContent = 
            document.getElementById('company').value || 'Company Name';
        
        document.getElementById('previewEmail').textContent = 
            document.getElementById('email').value || 'email@example.com';
        
        document.getElementById('previewPhone').textContent = 
            document.getElementById('phone').value || '+1 (555) 123-4567';
        
        document.getElementById('previewWebsite').textContent = 
            document.getElementById('website').value || 'website.com';
        
        const github = document.getElementById('github').value;
        document.getElementById('previewGithub').textContent = 
            github ? `github.com/${github}` : 'github.com/username';
        
        const linkedin = document.getElementById('linkedin').value;
        document.getElementById('previewLinkedin').textContent = 
            linkedin ? `linkedin.com/in/${linkedin}` : 'linkedin.com/in/username';
        
        document.getElementById('previewSkills').textContent = 
            document.getElementById('skills').value || 'JavaScript, React, Node.js';
            
        // Update QR code if checked
        updateQRCode();
    }
    
    // Function to update the theme
    function updateTheme() {
        const theme = document.getElementById('theme').value;
        previewCard.className = `business-card ${theme}`;
    }
    
    // Function to update QR code
    function updateQRCode() {
        const showQR = document.getElementById('qrcode').checked;
        qrCodeContainer.innerHTML = '';
        
        if (showQR) {
            const websiteUrl = document.getElementById('website').value || 'https://example.com';
            
            // Create new QR code
            qrCode = new QRCode(qrCodeContainer, {
                text: websiteUrl,
                width: 50,
                height: 50,
                colorDark: "#000000",
                colorLight: "#ffffff",
                correctLevel: QRCode.CorrectLevel.H
            });
        }
    }
    
    // Reset form
    document.querySelector('.reset-btn').addEventListener('click', function() {
        setTimeout(() => {
            updatePreview();
            downloadBtn.disabled = true;
            updateTheme();
        }, 10);
    });
});
