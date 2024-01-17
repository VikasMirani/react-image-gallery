import React from "react";
import AppRoutes from "./Routes";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <div
          className="content px-10 py-9 mb-10"
        >
          <AppRoutes />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
