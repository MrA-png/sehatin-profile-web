import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Articles } from './components/Articles';
import { ArticleList } from './components/ArticleList';
import { ArticleDetail } from './components/ArticleDetail';
import { ServiceDetail } from './components/ServiceDetail';
import { Tools } from './components/Tools';
import { PeriodCalculator } from './components/PeriodCalculator';
import { FAQ } from './components/FAQ';
import { Testimonials } from './components/Testimonials';
import { Community } from './components/Community';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'articleList' | 'articleDetail' | 'serviceDetail' | 'periodCalculator'>('home');
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(null);
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);

  // Scroll to top when view changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [currentView]);

  const handleViewAllArticles = () => {
    setCurrentView('articleList');
  };

  const handleArticleClick = (articleId: string) => {
    setSelectedArticleId(articleId);
    setCurrentView('articleDetail');
  };

  const handleServiceClick = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    setCurrentView('serviceDetail');
  };

  const handlePeriodCalculatorOpen = () => {
    setCurrentView('periodCalculator');
  };

  const handleBackToList = () => {
    setCurrentView('articleList');
  };

  const handleCloseArticles = () => {
    setCurrentView('home');
    setSelectedArticleId(null);
  };

  const handleCloseService = () => {
    setCurrentView('home');
    setSelectedServiceId(null);
  };

  const handleClosePeriodCalculator = () => {
    setCurrentView('home');
  };

  const handleNavigate = (section: string) => {
    // Remove # if present
    const cleanSection = section.replace('#', '');
    
    // If already on home, just scroll
    if (currentView === 'home') {
      const element = document.querySelector(`#${cleanSection}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }
    
    // If not on home, navigate back first
    setCurrentView('home');
    
    // Wait for view to change, then scroll
    setTimeout(() => {
      const element = document.querySelector(`#${cleanSection}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 150);
  };

  if (currentView === 'articleList') {
    return <ArticleList onClose={handleCloseArticles} onArticleClick={handleArticleClick} onViewAllArticles={handleViewAllArticles} />;
  }

  if (currentView === 'articleDetail' && selectedArticleId) {
    return (
      <ArticleDetail 
        articleId={selectedArticleId} 
        onClose={handleCloseArticles}
        onBackToList={handleBackToList}
        onViewAllArticles={handleViewAllArticles}
      />
    );
  }

  if (currentView === 'serviceDetail' && selectedServiceId) {
    return <ServiceDetail serviceId={selectedServiceId} onClose={handleCloseService} />;
  }

  if (currentView === 'periodCalculator') {
    return <PeriodCalculator onClose={handleClosePeriodCalculator} />;
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      <Navbar 
        onNavigate={handleNavigate}
        onPeriodCalculatorClick={handlePeriodCalculatorOpen}
        onServiceClick={handleServiceClick}
        onViewAllArticles={handleViewAllArticles}
      />
      <Hero />
      <About />
      <Services onServiceClick={handleServiceClick} />
      <Articles onViewAll={handleViewAllArticles} onArticleClick={handleArticleClick} />
      <Tools onToolClick={handlePeriodCalculatorOpen} />
      <FAQ />
      <Testimonials />
      <Community />
      <Contact />
      <Footer />
    </div>
  );
}