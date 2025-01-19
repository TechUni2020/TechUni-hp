import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {BrowserRouter, Outlet, Route, Routes} from "react-router-dom";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
import History2020 from "./components/History/years/History2020";
import History2021 from "./components/History/years/History2021";
import History2022 from "./components/History/years/History2022";
import History2023 from "./components/History/years/History2023";
import History2024 from "./components/History/years/History2024";
import Sponsor from "./components/Sponsor/Sponsor";
import NotFound from "./components/NotFound/NotFound";

ReactDOM.render(
        <React.StrictMode>
          <BrowserRouter basename={import.meta.env.VITE_PUBLIC_URL}>
            <Routes>
              <Route path="/" element={<App/>}>
                <Route index element={<Home/>}/>
                <Route path="project" element={<Projects/>}/>
                <Route path="about" element={<About/>}/>
                <Route path="history" element={<NotFound/>}/> {/* ~/Historyは配置していない。 */}
                <Route path="history/*" element={(
                        <section>
                          <Outlet/>
                        </section>
                )}>
                  <Route path="2020" element={<History2020/>}/>
                  <Route path="2021" element={<History2021/>}/>
                  <Route path="2022" element={<History2022/>}/>
                  <Route path="2023" element={<History2023/>}/>
                  <Route path="2024" element={<History2024/>}/>
                </Route>
                <Route path="sponsor" element={<Sponsor/>}/>
                <Route path="*" element={<NotFound/>}/>
              </Route>
            </Routes>
          </BrowserRouter>
        </React.StrictMode>,
        document.getElementById("root")
);
