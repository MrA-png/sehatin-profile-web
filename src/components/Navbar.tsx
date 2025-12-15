import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

// Import logo dari assets
const logoImage = new URL('../assets/logo.svg', import.meta.url).href;

interface NavbarProps {
  onNavigate?: (section: string) => void;
  onPeriodCalculatorClick?: () => void;
  onServiceClick?: (serviceId: string) => void;
  onViewAllArticles?: () => void;
}

export function Navbar({ onNavigate, onPeriodCalculatorClick, onServiceClick, onViewAllArticles }: NavbarProps = {}) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownTimerRef = useRef<NodeJS.Timeout | null>(null);

  const navLinks = [
    { name: 'Beranda', href: '#hero' },
    { 
      name: 'Tentang', 
      href: '#about',
      dropdown: [
        { name: 'Tentang Partner SEHATin', href: '#about' },
        { name: 'Kontak Kami', href: '#kontak' },
      ]
    },
    { 
      name: 'Layanan', 
      href: '#services',
      dropdown: [
        { name: 'Kesehatan Mental', href: '#kesehatan-mental' },
        { name: 'Kesehatan Reproduksi', href: '#kesehatan-reproduksi' },
        { name: 'Kesehatan Ibu & Anak', href: '#kesehatan-ibu-anak' },
        { name: 'Konsultasi Online', href: '#konsultasi-online' },
      ]
    },
    { 
      name: 'Informasi', 
      href: '#',
      dropdown: [
        { name: 'Artikel & Edukasi', href: '#artikel' },
        { name: 'FAQ', href: '#faq' },
        { name: 'Testimoni', href: '#testimoni' },
      ]
    },
    { 
      name: 'Tools & Kalkulator', 
      href: '#tools',
      dropdown: [
        { name: 'Kalkulator Menstruasi & Masa Subur', href: '#kalkulator-menstruasi' },
        { name: 'Wedding Planner', href: '#wedding-planner' },
      ]
    },
  ];

  const handleMouseEnter = (linkName: string) => {
    // Clear any existing timer
    if (dropdownTimerRef.current) {
      clearTimeout(dropdownTimerRef.current);
    }
    setActiveDropdown(linkName);
  };

  const handleMouseLeave = () => {
    // Add a delay before closing to allow moving to dropdown
    dropdownTimerRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const handleDropdownEnter = () => {
    // Clear the close timer when mouse enters dropdown
    if (dropdownTimerRef.current) {
      clearTimeout(dropdownTimerRef.current);
    }
  };

  const handleDropdownLeave = () => {
    // Close immediately when leaving dropdown
    setActiveDropdown(null);
  };

  const handleDropdownClick = (href: string) => {
    setActiveDropdown(null);
    setIsOpen(false);
    
    // Handle special navigation cases
    if (href === '#kalkulator-menstruasi' && onPeriodCalculatorClick) {
      onPeriodCalculatorClick();
      return;
    }

    // Handle "Artikel & Edukasi" - open ArticleList (always, regardless of current page)
    if (href === '#artikel') {
      if (onViewAllArticles) {
        onViewAllArticles();
        return;
      }
      // If onViewAllArticles not available, navigate to home then scroll to artikel section
      if (onNavigate) {
        onNavigate('artikel');
        return;
      }
      // If onNavigate not available, just scroll
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    // Handle service clicks
    if (href.startsWith('#kesehatan-') || href === '#konsultasi-online') {
      const serviceId = href.replace('#', '');
      if (onServiceClick) {
        onServiceClick(serviceId);
        return;
      }
    }

    // Handle "Wedding Planner" - placeholder for now
    if (href === '#wedding-planner') {
      // TODO: Implement wedding planner feature
      alert('Wedding Planner akan segera hadir!');
      return;
    }
    
    // Handle FAQ and Testimoni - navigate to home first if not on home, then scroll
    if (href === '#faq' || href === '#testimoni') {
      // Check if element exists on current page
      const element = document.querySelector(href);
      
      // If element exists, we're on home page - just scroll directly
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
      
      // Element doesn't exist, we're on article/service page - navigate back to home first
      // onNavigate will handle scrolling to the section after navigating to home
      if (onNavigate) {
        const section = href.replace('#', '');
        onNavigate(section);
        return;
      }
      
      // Fallback: try to scroll anyway
      requestAnimationFrame(() => {
        const targetElement = document.querySelector(href);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      });
      return;
    }
    
    // For other links, check if element exists on current page
    const element = document.querySelector(href);
    
    // If element exists, we're on home page - just scroll directly
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    
    // Element doesn't exist, we're on article/service page - navigate back to home first
    if (onNavigate) {
      const section = href.replace('#', '');
      onNavigate(section);
    }
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigate) {
      // Navigate back to home from article page
      onNavigate('#hero');
    } else {
      // Scroll to top on home page
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNavLinkClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    // Handle empty href (like "Informasi" parent link)
    if (href === '#' || !href) {
      return;
    }
    
    // Check if element exists on current page
    const element = document.querySelector(href);
    
    // If element exists, we're on home page - just scroll directly
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    
    // Element doesn't exist, we're on article/service page - navigate back to home first
    if (onNavigate) {
      const section = href.replace('#', '');
      onNavigate(section);
    }
  };

  const handleCTAClick = () => {
    if (onNavigate) {
      onNavigate('#kontak');
      setTimeout(() => {
        const element = document.querySelector('#kontak');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.querySelector('#kontak');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Cleanup timer on unmount
  useEffect(() => {
    return () => {
      if (dropdownTimerRef.current) {
        clearTimeout(dropdownTimerRef.current);
      }
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-slate-200 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#hero" className="flex items-center" onClick={handleLogoClick}>
            <img 
              src={logoImage} 
              alt="Partner SEHATin Logo" 
              className="object-contain"
              style={{ 
                maxHeight: '80px', 
                maxWidth: '120px', 
                height: 'auto', 
                width: 'auto' 
              }}
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div 
                key={link.name}
                className="relative"
                onMouseEnter={() => link.dropdown && handleMouseEnter(link.name)}
                onMouseLeave={() => link.dropdown && handleMouseLeave()}
              >
                {link.dropdown ? (
                  <>
                    <button 
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavLinkClick(e, link.href);
                      }}
                      className="flex items-center gap-1 text-slate-600 hover:text-blue-600 transition-colors px-4 py-2 rounded-lg hover:bg-blue-50"
                    >
                      <span className="text-sm">{link.name}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                    </button>
                    {activeDropdown === link.name && (
                      <div 
                        className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-xl border border-slate-100 py-2 z-50"
                        onMouseEnter={handleDropdownEnter}
                        onMouseLeave={handleDropdownLeave}
                      >
                        {link.dropdown.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            onClick={(e) => {
                              e.preventDefault();
                              handleDropdownClick(item.href);
                            }}
                            className="block px-4 py-2.5 text-sm text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <a
                    href={link.href}
                    onClick={(e) => handleNavLinkClick(e, link.href)}
                    className="text-sm text-slate-600 hover:text-blue-600 transition-colors px-4 py-2 rounded-lg hover:bg-blue-50"
                  >
                    {link.name}
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button Desktop */}
          <div className="hidden lg:block">
            <button className="px-6 py-2.5 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors text-sm" onClick={handleCTAClick}>
              Konsultasi Gratis
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-slate-600 hover:text-blue-600"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-6 border-t border-slate-200 max-h-[calc(100vh-5rem)] overflow-y-auto">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.dropdown ? (
                    <div className="py-1">
                      <button 
                        onClick={(e) => {
                          if (link.href && link.href !== '#') {
                            handleNavLinkClick(e, link.href);
                          } else {
                            setActiveDropdown(activeDropdown === link.name ? null : link.name);
                          }
                        }}
                        className="flex items-center justify-between w-full text-slate-600 hover:text-blue-600 transition-colors px-3 py-2.5 rounded-lg hover:bg-blue-50"
                      >
                        <span className="text-sm">{link.name}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                      </button>
                      {activeDropdown === link.name && (
                        <div className="mt-1 ml-3 space-y-1">
                          {link.dropdown.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              onClick={(e) => {
                                e.preventDefault();
                                handleDropdownClick(item.href);
                                setIsOpen(false);
                              }}
                              className="block py-2 px-3 text-sm text-slate-600 hover:text-blue-600 transition-colors rounded-lg hover:bg-blue-50"
                            >
                              {item.name}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <a
                      href={link.href}
                      onClick={(e) => handleNavLinkClick(e, link.href)}
                      className="block text-sm text-slate-600 hover:text-blue-600 transition-colors px-3 py-2.5 rounded-lg hover:bg-blue-50"
                    >
                      {link.name}
                    </a>
                  )}
                </div>
              ))}
              <button className="px-6 py-2.5 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors w-full mt-4 text-sm" onClick={handleCTAClick}>
                Konsultasi Gratis
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}