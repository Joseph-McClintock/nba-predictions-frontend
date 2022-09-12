import "./index.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Navbar from "./Components/Navbar/Navbar";

function App() {
    return (
        <div className="app-div">
            <Navbar />

            <Routes>
                <Route index element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </div>
    );
}

export default App;
