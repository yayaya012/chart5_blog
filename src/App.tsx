import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Menu from "./Menu";
import Home from "./page/Home";
import Category from "./page/Category";
import Profile from "./page/Profile";
import Contact from "./page/Contact";

export default function App() {
    return (
        <Router>
            <Header />
            <Menu />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/category" element={<Category />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
}
