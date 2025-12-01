import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import IntroLoader from './components/IntroLoader';
import Home from './pages/Home';
import ModulMingguan from './pages/ModulMingguan';
import ShowcaseKarya from './pages/ShowcaseKarya';
import RefleksiAkhir from './pages/RefleksiAkhir';

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [hasVisited, setHasVisited] = useState(false);

  useEffect(() => {
    const visited = sessionStorage.getItem('hasVisited');
    if (visited) {
      setShowIntro(false);
      setHasVisited(true);
    }
  }, []);

  const handleIntroComplete = () => {
    setShowIntro(false);
    setHasVisited(true);
    sessionStorage.setItem('hasVisited', 'true');
  };

  return (
    <Router>
      {showIntro && !hasVisited && <IntroLoader onComplete={handleIntroComplete} />}
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/modul-mingguan" element={<ModulMingguan />} />
            <Route path="/showcase-karya" element={<ShowcaseKarya />} />
            <Route path="/refleksi-akhir" element={<RefleksiAkhir />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}