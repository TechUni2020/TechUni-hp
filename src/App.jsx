import "bootstrap/dist/css/bootstrap.min.css";
import React, {useEffect, useState} from "react";
import {Outlet} from "react-router-dom";
import Preloader from "../src/components/Pre";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";

function App() {
  const [load, uploadLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      uploadLoad(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
          <>
            <Preloader load={load}/>
            <div className="App" id={load ? "no-scroll" : "scroll"}>
              <Navbar/>
              <ScrollToTop/>
              <main>
                <Outlet/>
              </main>
              <Footer/>
            </div>
          </>
  );
}

export default App;
