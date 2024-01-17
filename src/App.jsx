import React, { useContext } from "react";
import AppRoutes from "./Routes";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import { ImageContext } from "./store/ImageContext";
import "./App.css";

const App = () => {
  const { bgImage } = useContext(ImageContext);
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <div
          className="content px-10 py-9 mb-10"
          style={{ backgroundImage: `url(${bgImage})`, height: '1200px' }}
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
