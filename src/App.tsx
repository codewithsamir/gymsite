import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Classes from './pages/Classes';
import Trainers from './pages/Trainers';
import SuccessStories from './pages/SuccessStories';
import Locations from './pages/Locations';
import Membership from './pages/Membership';
import Join from './pages/Join';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/classes" element={<Classes />} />
            <Route path="/trainers" element={<Trainers />} />
            <Route path="/success-stories" element={<SuccessStories />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/membership" element={<Membership />} />
            <Route path="/join" element={<Join />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            {/* Fallback for other links mentioned in footer/nav but not explicitly requested as full pages yet */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
