import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HomePage from '@/pages/HomePage';
import ApplyPage from '@/pages/ApplyPage';
import AboutPage from '@/pages/AboutPage';
import HallOfFamePage from '@/pages/HallOfFamePage';
import AdminPage from '@/pages/AdminPage';
import { PageView } from '@/types';

function App() {
  const [activePage, setActivePage] = useState<PageView>('home');

  // Handle hash change for routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash === 'admin') {
        setActivePage('admin');
      } else if (['home', 'apply', 'about', 'hall'].includes(hash)) {
        setActivePage(hash as PageView);
      }
    };

    // Check initial hash
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const setPage = (page: PageView) => {
    setActivePage(page);
    window.location.hash = page;
  };

  const renderPage = () => {
    switch (activePage) {
      case 'home': return <HomePage setPage={setPage} />;
      case 'apply': return <ApplyPage setPage={setPage} />;
      case 'about': return <AboutPage />;
      case 'hall': return <HallOfFamePage />;
      case 'admin': return <AdminPage />;
      default: return <HomePage setPage={setPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-mvp-black text-white font-sans selection:bg-mvp-gold selection:text-black flex flex-col">
      <Navbar activePage={activePage} setPage={setPage} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
