import React, { useEffect, useState } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

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
                <Outlet/>
                <Footer/>
            </div>
        </>
    );
}

export default App;
