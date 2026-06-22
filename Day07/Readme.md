# 🪙 VikNova Crypto Tracker

A modern and responsive cryptocurrency dashboard built with **React** and **Redux Toolkit**. VikNova allows users to explore live cryptocurrency data, search coins instantly, and monitor market trends through a clean and premium user interface.

## ✨ Features

* 📈 Live cryptocurrency market data from CoinGecko API
* 🔍 Instant search by coin name or symbol
* 🪙 Displays:

  * Coin image
  * Name and symbol
  * Current price
  * Market rank
  * Market capitalization
  * 24-hour price change
* 📊 Animated crypto ticker in the navbar
* 🎨 Premium luxury UI with responsive design
* 📱 Mobile-friendly and tablet-friendly layout
* ⚡ State management using Redux Toolkit
* 🚀 Fast filtering without unnecessary API calls

---

## 🛠️ Tech Stack

**Frontend**

* React.js
* JavaScript (ES6+)
* CSS3
* Redux Toolkit
* React Redux

**API**

* CoinGecko API

```bash
API LINK - https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&per_page=10&page=10
```

---

## 📂 Project Structure

```text
src/
│
├── App.jsx
├── Navbar.jsx
├── CoinCreate.jsx
├── Footer.jsx
│
├── slicer.js
├── searchSlice.js
├── store.js
│
├── App.css
└── index.css
```

---

## 🚀 Getting Started

### Clone the Repository

```bash
git clone https://github.com/mratyunjayaa/React-Journey/tree/main/Day07
cd viknova-crypto-tracker
```

### Install Dependencies

```bash
npm install
```

```bash
npm install -D parcel
```

```bash
npm install react
```

```bash
npm install react-dom
```

```bash
npm install @reduxjs/toolkit
```

```bash
npm install react-redux
```

### Run Development Server

```bash
npm parcel index.html
```

🚀 Live Demo

🔗 Live Link: https://viknova.netlify.app

## ⚙️ How It Works

### Data Flow

```text
CoinGecko API
        ↓
Redux Async Thunk
        ↓
Redux Store
        ↓
Components
        ↓
UI Rendering
```

### Search Flow

```text
Search Input
      ↓
dispatch(setSearch())
      ↓
Redux Store Updated
      ↓
Coin Filtering
      ↓
UI Re-render
```

---

## 🎯 Learning Objectives

This project helped in understanding:

* React component architecture
* Props and reusable components
* State management with Redux Toolkit
* createSlice()
* createAsyncThunk()
* useSelector()
* useDispatch()
* API integration with fetch()
* Conditional rendering
* Responsive UI development
* Search and filtering logic
* Production-level folder organization

---

## 🌟 Future Improvements

### Features

* ⭐ Add Favorites/Watchlist
* ⭐ Coin Details Page
* ⭐ Price Charts and Graphs
* ⭐ Sorting by Price, Market Cap, and Rank
* ⭐ Pagination or Infinite Scroll
* ⭐ Dark and Light Theme Toggle
* ⭐ Trending Coins Section
* ⭐ Top Gainers and Losers Section
* ⭐ Currency Switcher (INR, USD, EUR)
* ⭐ Market Statistics Dashboard
* ⭐ Recently Viewed Coins
* ⭐ Compare Multiple Coins

### Performance Improvements

* ⚡ Debounced Search
* ⚡ Memoization using useMemo()
* ⚡ Lazy Loading Components
* ⚡ Skeleton Loading Cards
* ⚡ Better API Error Handling
* ⚡ Data Caching
* ⚡ Code Splitting

### Advanced Features

* 🔔 Price Alerts and Notifications
* 📈 Historical Charts
* 🔐 Authentication and User Profiles
* ☁️ Cloud Database for Watchlists
* 🌍 Multi-language Support
* 📊 Portfolio Tracker
* 📱 Progressive Web App (PWA)
* 🤖 AI-powered market insights

---

## 👨‍💻 Author

**Vishal Tomar**

* LinkedIn: https://www.linkedin.com/in/vishaltomar13

---

## 📄 License

This project is built for learning, portfolio showcase, and educational purposes.

---

### 🚀 Simplifying Crypto, One Insight at a Time.
