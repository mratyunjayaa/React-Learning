import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import store from "./store";
import Navbar from "./Navbar";
import CoinCreate from "./CoinCreate";
import Footer from "./Footer";

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <CoinCreate />
      <Footer />
    </Provider>
  );
}

const root = ReactDOM.createRoot(
  document.getElementById("root")
);

root.render(<App />);