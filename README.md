# ODIN Cultural and Social Welfare Society Website

A modern, responsive website for ODIN Cultural and Social Welfare Society built with React, TypeScript, and Tailwind CSS. This website serves as a platform for the NGO to showcase their work, accept donations, and engage with volunteers and supporters.

![ODIN NGO Website](https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80)

## Features

- 📱 Responsive design that works on all devices
- 💳 Integrated donation system with RazorPay
- 📝 Contact form connected to Google Forms
- 🤝 Volunteer registration system
- 📸 Image gallery showcasing NGO's work
- 🎯 Impact metrics display
- 📰 Programs and initiatives showcase

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Vite
- React Router DOM
- RazorPay Integration
- Lucide React Icons

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18 or higher)
- npm (v9 or higher)

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/odin-ngo-website.git
   cd odin-ngo-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your configuration:
   ```env
   VITE_RAZORPAY_KEY=your_razorpay_key
   VITE_GOOGLE_FORM_ID=your_google_form_id
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and visit `http://localhost:5173`

## Configuration

### RazorPay Setup
1. Sign up for a RazorPay account at [razorpay.com](https://razorpay.com)
2. Get your API key from the dashboard
3. Replace `YOUR_RAZORPAY_KEY` in `src/pages/GetInvolved.tsx` with your actual key

### Google Forms Setup
1. Create a new Google Form
2. Get the form ID from the URL
3. Replace `YOUR_FORM_ID` in `src/pages/Contact.tsx` with your form ID
4. Map the form fields to match your Google Form structure

## Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Deployment

### GitHub Pages

1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add these scripts to package.json:
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. Add homepage to package.json:
   ```json
   {
     "homepage": "https://yourusername.github.io/odin-ngo-website"
   }
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

### Firebase Hosting

1. Install Firebase CLI:
   ```bash
   npm install -g firebase-tools
   ```

2. Login to Firebase:
   ```bash
   firebase login
   ```

3. Initialize Firebase:
   ```bash
   firebase init
   ```
   - Select Hosting
   - Choose your project
   - Set public directory to `dist`
   - Configure as single-page app: Yes
   - Set up automatic builds: No

4. Deploy:
   ```bash
   npm run build
   firebase deploy
   ```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

Your Name - [@yourtwitter](https://twitter.com/yourtwitter)
Project Link: [https://github.com/yourusername/odin-ngo-website](https://github.com/yourusername/odin-ngo-website)

## Acknowledgments

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
- [RazorPay](https://razorpay.com/)
- [Lucide Icons](https://lucide.dev/)