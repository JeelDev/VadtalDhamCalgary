import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './pages/header.jsx';
import Footer from './pages/footer.jsx';
import Home from './pages/Home.jsx';
import About from './pages/about.jsx';
import Events from './pages/event.jsx';
import Contact from './pages/Contact.jsx';
import './styles/style.css'; // Your main CSS file


function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/events"element={<Events />} />
                    <Route path="/contact" element={<Contact/>}/>
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
