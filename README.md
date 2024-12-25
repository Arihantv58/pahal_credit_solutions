# Pahal Credit Solutions - Portfolio Website

This repository contains the source code for **Pahal Credit Solutions**, a company portfolio website built using the **React.js** framework and **Firebase** for real-time database integration. The website showcases the company’s services, provides an About page, a Contact form with reCAPTCHA integration, and other essential features.

## Features

- **Single Page Application** using React Router for seamless navigation.
- **Contact Form** with data submission to Firebase and Google reCAPTCHA verification for spam prevention.
- **Responsive Design** with modern CSS styling for various screen sizes.
- **Firebase Integration** for real-time database storage.

## Technologies Used

- **Frontend**: React.js, CSS, HTML, Javascript
- **Backend**: Firebase Realtime Database
- **Others**: Google reCAPTCHA

## Directory Structure

```
.
├── App.js          # Main app component with route definitions
├── App.css         # Global styling for the app
├── Pages/          # Components for individual pages
│   ├── About.js    # About page component
│   ├── Contact.js  # Contact page component with Firebase integration
│   ├── FAQs.js     # FAQs page component
│   ├── Service.js  # Services page component
│   └── Error.js    # Error handling page
├── images/         # Static assets for the website
└── firebase.json   # Firebase configuration (not included here)
```

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Arihantv58/pahal_credit_solutions.git
   cd pahal-credit-solutions
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

## Firebase Setup

1. Set up a Firebase project and create a Realtime Database.
2. Replace the Firebase database URL in the `Contact.js` file with your project’s database URL:
   ```javascript
   const res = fetch(
     "https://your-database-url.firebaseio.com/userDataRecords.json",
     { ... }
   );
   ```

3. Configure reCAPTCHA:
   - Replace the site key in the `Contact.js` file:
     ```javascript
     <ReCAPTCHA sitekey="your-site-key" onChange={onTap} />
     ```

## Usage

- Navigate to the home page to explore the website.
- Fill out the contact form to submit your details (with Firebase integration).
- Use the navigation bar to access other pages like About, Services, and FAQs.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

