import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import RootLayout from './RootLayout';
import Sponsor from './pages/Sponsor';
import Download from './pages/Download';

const App: React.FC = () => {
    return (
        <Router>
            <RootLayout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/sponsor" element={<Sponsor />} />
                    <Route path="/download/:token" element={<Download />} />
                </Routes>
            </RootLayout>
        </Router>
    );
};

export default App;
