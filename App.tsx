
import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FYCModal from './components/FYCModal';
import Home from './pages/Home';
import EAM from './pages/EAM';
import Medical from './pages/Medical';
import Trust from './pages/Trust';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/asset" element={<EAM />} />
            <Route path="/medical" element={<Medical />} />
            <Route path="/trust" element={<Trust />} />
          </Routes>
        </main>
        <Footer />
        <FYCModal />
      </div>
    </Router>
  );
};

export default App;
