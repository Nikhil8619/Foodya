# 🍽️ Foodya - A  React Project

Foodya is a modern food ordering web app built as part of the **React** journey. It demonstrates the use of powerful tools like **React**, **Redux Toolkit**, **Parcel**, and **React Testing Library** to build scalable, maintainable, and performant web applications.

---

## 📁 Folder Structure

foodya/
│
├── src/
│ ├── components/
│ │ ├── Header.jsx
│ │ ├── Body.jsx
│ │ ├── RestaurantCard.jsx
│ │ ├── RestaurantContainer.jsx
│ │ └── Footer.jsx
│ │
│ ├── redux/
│ │ ├── store.js
│ │ └── cartSlice.js
│ │
│ ├── App.jsx
│ └── index.js
│
├── tests/
│ └── App.test.jsx
│
├── .babelrc
├── .parcelrc
├── jest.config.js
├── package.json
└── README.md


## 🚀 Tech Stack & Tooling

### 🛠️ Parcel Bundler

- ⚙️ Dev Build
- 🌐 Local Server with Hot Module Replacement (HMR)
- 📂 File Watching (written in C++)
- 🧠 Smart Caching for Faster Builds
- 🖼️ Image Optimization
- 🗜️ Minification & Compression
- 🧩 Bundling & Code Splitting
- 🔒 HTTPS Support
- 🌲 Tree Shaking
- 📦 Differential Bundling (legacy browser support)
- ✅ Diagnostics & Error Handling
- 🔁 Consistent Hashing
- 📦 Different Dev and Prod Bundles

---

## 🧩 Component Structure

<Header /> ├── Logo └── Nav Items <Body /> ├── Search └── <RestaurantContainer /> └── <RestaurantCard /> ├── Restaurant Image ├── Name, Star Rating ├── Cuisine, Delivery Time <Footer /> ├── Copyright ├── Links ├── Address └── Contact Info ```
🔄 Import/Export in React
✅ Default Export/Import

// Export
export default Component;

// Import
import Component from './Component';
✅ Named Export/Import

// Export
export const Component = () => {};

// Import
import { Component } from './Component';
⚛️ React Hooks
useState() – Superpowered state variables

useEffect() – Side-effect handling

🌐 Routing
Client-Side Routing – Single Page Application (SPA)

Server-Side Routing – Multi Page Application (MPA)

🧰 Redux Toolkit Setup
✅ Installed @reduxjs/toolkit & react-redux

🏗️ Created central store.js

🔌 Connected Redux Store to React App

✂️ Created cartSlice.js

⚡ Used dispatch(action)

🔍 Accessed state using useSelector

🧪 Testing Setup
✅ Types of Testing
Unit Testing

Integration Testing

End-to-End (E2E) Testing

✅ Tools & Configuration
Installed React Testing Library

Installed jest

Installed Babel dependencies

Configured .babelrc for React JSX in tests

Disabled default Parcel Babel transpilation in .parcelrc

Jest setup via npx jest --init

Installed jsdom

Installed @babel/preset-react

Installed @testing-library/jest-dom

📌 Project Name
Foodya – Deliciously built with React 🍱
