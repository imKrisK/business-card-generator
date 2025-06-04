# Business Card Generator

## Overview
The Business Card Generator is a web-based application designed for software engineers to create customized digital business cards. Users can input their personal information, contact details, technical skills, and social media profiles to generate a professional-looking business card.

## Project Structure
The project consists of the following files and directories:

- `index.html`: The main HTML structure of the application, containing the user input form and card preview area.
- `css/styles.css`: CSS styling for the business card generator, defining layout, colors, fonts, and overall design.
- `js/script.js`: Main JavaScript logic for handling user interactions, live preview updates, and form submissions.
- `js/cardRenderer.js`: Functions related to rendering the business card based on user input, including QR code generation.
- `js/themeManager.js`: Functions for managing different themes, allowing users to switch between styles.
- `assets/themes/`: Contains CSS files for different themes:
  - `default.css`: Styles for the default theme.
  - `dark.css`: Styles for the dark theme.
  - `technical.css`: Styles for the technical theme.
- `assets/icons/`: Contains SVG icons for social media platforms:
  - `github.svg`: GitHub icon.
  - `linkedin.svg`: LinkedIn icon.
  - `twitter.svg`: Twitter icon.
- `lib/`: Contains external libraries:
  - `qrcode.min.js`: Library for generating QR codes.
  - `html2canvas.min.js`: Library for exporting the business card as an image.

## Features
- Customizable business card with user-defined information.
- Live preview of the business card as users input their details.
- Theme switching to change the appearance of the business card.
- QR code generation for easy sharing of contact information.
- Export functionality to download the business card as an image.

## Usage
1. Open `index.html` in a web browser.
2. Fill out the form with your personal information and contact details.
3. Customize the card by selecting different themes.
4. Preview the generated business card in real-time.
5. Click the download button to save your business card as an image.

## Contributing
Contributions are welcome! Please feel free to submit issues or pull requests to enhance the functionality and design of the Business Card Generator.

## License
This project is open-source and available under the MIT License.