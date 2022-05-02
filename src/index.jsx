import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
import History2020 from "./components/History/2020/History";
import History2021 from "./components/History/2021/History";
import Sponser from "./components/Sponser/Sponser";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter basename={import.meta.env.VITE_PUBLIC_URL}>
            <Routes>
                <Route path="/" element={<App/>}>
                    <Route index element={<Home/>}/>
                    <Route path="project" element={<Projects />} />
                    <Route path="about" element={<About />} />
                    <Route path="history"  element={(
                        <div>
                            <Outlet />
                        </div>
                    )}>
                        <Route path="2020" element={<History2020 />} />
                        <Route path="2021" element={<History2021 />} />
                    </Route>
                    <Route path="sponser" element={<Sponser />} />
                    <Route path="*" element={<Home />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);
