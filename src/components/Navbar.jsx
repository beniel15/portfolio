import { useEffect, useState } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

function Navbar({ theme, toggleTheme }) {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks.map((link) => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 120;

      sections.forEach((section) => {
        if (!section) return;
        const top = section.offsetTop;
        const height = section.offsetHeight;

        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-container">
        <a href="#home" className="navbar-logo" onClick={() => scrollToSection('home')}>
          Beniel<span className="logo-accent">.</span>
        </a>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                onClick={() => scrollToSection(link.id)}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="navbar-actions">
          <button
            className={`menu-toggle ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'light' ? <FiMoon /> : <FiSun />}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
