import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

import { Provider } from "react-redux";
import stores from "./Store";
import Couting from "./counting";
import About from "./about";
function Home() {
  return <h2>Home Page</h2>;
}


function Contact() {
  return <h2>Contact Page</h2>;
}
console.log(stores)
function App() {
  return (
    <>
    <BrowserRouter>
      <div>
        <nav>
          <Link to="/">Home</Link> |{" "}
          <Link to="/about">About</Link> |{" "}
          <Link to="/contact">Contact</Link>
        </nav>

        <hr />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
    <Provider store={stores}>
        <Couting></Couting>
    </Provider>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);