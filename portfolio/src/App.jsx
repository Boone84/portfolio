import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import './App.css';

const App = () => {
    return (
        <section>
            <video autoPlay muted loop id="backgroundVideo">
                <source src="./src/images/video2.mp4" type="video/mp4" />
            </video>
            <section id="links">
                <section id="linksContainer">
                    <ul className="list">
                        <li><a href="/">Home</a></li>
                        <li><a href="/projects">Projects</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </section>

                <section>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </section>
            </section>
        </section>
    );
};

export default App;
