# React Password Generator

A clean, modern, and highly secure web application built to generate strong, customizable passwords instantly. This project was built to practice reactive state management, hooks optimization, and responsive design systems.

## 🚀 Live Demo
*(Optional: Add your GitHub Pages or Vercel link here once deployed!)*

## ✨ Features
* **Real-time Generation:** Passwords update instantly when you adjust settings.
* **Custom Length Control:** Choose any password length between 6 and 32 characters.
* **Granular Options:** Toggle numbers and special symbols on or off based on security needs.
* **One-Click Copy:** Easily copy the generated password straight to your clipboard with instant visual feedback.
* **Modern Premium UI:** Minimalist interface styled with a realistic gray palette inspired by modern AI tools.

## 🛠️ Tech Stack & Concepts Learned

This project helped me dive deep into React's core functionality and optimization hooks:

* **React (Vite):** Used as the primary framework for component lifecycle management.
* **Tailwind CSS:** Used for fast, utility-first responsive styling.
* **`useState`:** Manages the active state of inputs, lengths, checkboxes, and copy status.
* **`useCallback`:** Memorizes the generator function to avoid unnecessary re-renders and optimize browser memory.
* **`useEffect`:** Synchronizes the password generation process automatically whenever dependencies alter.
* **`useRef`:** Connects directly to the input field DOM node to programmatically highlight and capture clipboard selections.

## 🔐 Security Note
This application runs entirely client-side. No passwords are sent over the network, stored in databases, or tracked by external servers. Your generated strings stay private within your local browser execution context.
