import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { Mail, ArrowRight, Droplets, FunctionSquare, Building2, Atom, PenTool, Layers, Box, Wrench, Menu, X, Languages } from 'lucide-react';
import { useState, useEffect } from 'react';
import LiquidEther from '@/components/LiquidEther';
import BasicsMMCPage from '@/pages/BasicsMMCPage';
import AnalysisOfDeformationPage from '@/pages/AnalysisOfDeformationPage';
import AnalyticalMechanicsPage from '@/pages/AnalyticalMechanicsPage';
import VirtualWorkApplicationPage from '@/pages/VirtualWorkApplicationPage';

const LinkedinIcon = ({ size = 24, color = "currentColor" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const translations = {
  en: {
    nav: {
      home: 'Home',
      biomechanics: 'Biomechanics',
      mathematics: 'Mathematics',
      mechanics: 'Mechanics',
      blog: 'Blog',
      languageLabel: 'Switch language',
    },
    placeholder: {
      subtitle: 'Research & Publications',
      heading: 'Content coming soon',
      body: 'This section is currently being updated with recent research and publications.',
    },
    mechanics: {
      title: 'Mechanics',
      subtitle: 'Core mechanics disciplines and theories',
      explore: 'Explore',
      cards: [
        {
          title: 'Theory of Structures',
          body: 'Analyzing the behavior of solid structures under various dynamic and thermal loads.',
        },
        {
          title: 'Basics of Continuum Mechanics',
          body: 'Fundamental principles, stress, strain, and kinematics of continuous media.',
        },
        {
          title: 'Continuum Mechanics (MMC)',
          body: 'Advanced concepts and constitutive equations in continuum mechanics.',
        },
        {
          title: 'Analytical Mechanics',
          body: 'Applying fundamental principles using Lagrangian and Hamiltonian formalisms.',
        },
      ],
    },
    home: {
      subtitle: 'Research Engineer in Fluid Mechanics & Energy',
      description: 'My website aims to share my work and serve as an information resource for engineers and higher education students. My interests are varied, but they revolve around applied mathematics and fluid/solid mechanics.',
      contact: 'Get in touch',
      blog: 'Read my blog',
      journeyTitlePrefix: 'My',
      journeyTitleSuffix: 'Journey',
      researchTitle: 'Research',
      domainsTitle: 'Domains',
      verifiedDiploma: 'Blockchain Verified Diploma',
      journey: {
        founderTitle: 'Founder & Researcher',
        founderBody: 'Research and scientific software publishing.',
        teacherTitle: 'Mathematics Teacher',
        teacherBody: 'Taught at high school and middle school levels. Served as a jury member for the Baccalauréat Grand Oral.',
        engineerTitle: 'Research Engineer',
        engineerSubject: 'Research subject:',
        engineerBody: 'Numerical treatment of thermal diffusion through solid thickness of a cryogenic tank.',
        masterTitle: "Research Master's in Fluid Mechanics",
        bachelorTitle: "Bachelor's in Applied Mathematics",
      },
      domains: {
        explore: 'Explore research',
        biomechanics: 'Applying mechanical principles to medical applications. Focusing on advanced simulation and modeling of biological systems and human physiology to drive healthcare innovations.',
        mathematics: 'Developing robust mathematical models and computational methods to solve complex non-linear problems in engineering.',
        mechanics: 'Exploring Theory of Structures, Continuum Mechanics (MMC), and Analytical Mechanics.',
      },
    },
    footer: {
      role: 'Research Engineer in Fluid Mechanics & Energy',
      rights: 'All rights reserved.',
    },
    titles: {
      biomechanics: 'Biomechanics',
      mathematics: 'Mathematics',
      structuralTheory: 'Theory of Structures',
      continuumMechanics: 'Continuum Mechanics (MMC)',
      blog: 'Research Blog',
    },
  },
  fr: {
    nav: {
      home: 'Accueil',
      biomechanics: 'Biomécanique',
      mathematics: 'Mathématiques',
      mechanics: 'Mécanique',
      blog: 'Blog',
      languageLabel: 'Changer de langue',
    },
    placeholder: {
      subtitle: 'Recherche & Publications',
      heading: 'Contenu à venir',
      body: 'Cette section est actuellement mise à jour avec des recherches et publications récentes.',
    },
    mechanics: {
      title: 'Mécanique',
      subtitle: 'Disciplines et théories fondamentales de la mécanique',
      explore: 'Explorer',
      cards: [
        {
          title: 'Théorie des structures',
          body: 'Analyse du comportement des structures solides sous différentes charges dynamiques et thermiques.',
        },
        {
          title: 'Bases de la mécanique des milieux continus',
          body: 'Principes fondamentaux, contraintes, déformations et cinématique des milieux continus.',
        },
        {
          title: 'Mécanique des milieux continus (MMC)',
          body: 'Concepts avancés et équations constitutives en mécanique des milieux continus.',
        },
        {
          title: 'Mécanique analytique',
          body: 'Application des principes fondamentaux avec les formalismes lagrangien et hamiltonien.',
        },
      ],
    },
    home: {
      subtitle: 'Ingénieur de recherche en mécanique des fluides & énergie',
      description: "Mon site a pour objectif de partager mes travaux et d'être une ressource d'informations pour un ingénieur ou un étudiant du supérieur. Mes centres d'intérêts sont variés mais tournent autour des mathématiques appliquées et de la mécanique des fluides/solides.",
      contact: 'Me contacter',
      blog: 'Lire mon blog',
      journeyTitlePrefix: 'Mon',
      journeyTitleSuffix: 'parcours',
      researchTitle: 'Domaines',
      domainsTitle: 'de recherche',
      verifiedDiploma: 'Diplôme vérifié par blockchain',
      journey: {
        founderTitle: 'Fondateur & chercheur',
        founderBody: 'Recherche et édition de logiciels scientifiques.',
        teacherTitle: 'Professeur de mathématiques',
        teacherBody: 'Enseignement au lycée et au collège. Membre du jury pour le Grand Oral du Baccalauréat.',
        engineerTitle: 'Ingénieur de recherche',
        engineerSubject: 'Sujet de recherche :',
        engineerBody: "Traitement numérique de la diffusion thermique dans l'épaisseur solide d'un réservoir cryogénique.",
        masterTitle: 'Master recherche en mécanique des fluides',
        bachelorTitle: 'Licence en mathématiques appliquées',
      },
      domains: {
        explore: 'Explorer la recherche',
        biomechanics: 'Application des principes mécaniques aux applications médicales, avec un focus sur la simulation avancée et la modélisation des systèmes biologiques et de la physiologie humaine.',
        mathematics: 'Développement de modèles mathématiques robustes et de méthodes numériques pour résoudre des problèmes non linéaires complexes en ingénierie.',
        mechanics: 'Exploration de la théorie des structures, de la mécanique des milieux continus (MMC) et de la mécanique analytique.',
      },
    },
    footer: {
      role: 'Ingénieur de recherche en mécanique des fluides & énergie',
      rights: 'Tous droits réservés.',
    },
    titles: {
      biomechanics: 'Biomécanique',
      mathematics: 'Mathématiques',
      structuralTheory: 'Théorie des structures',
      continuumMechanics: 'Mécanique des milieux continus (MMC)',
      blog: 'Blog de recherche',
    },
  },
};

// Page Components Placeholder
const PageTemplate = ({ title, icon: Icon, t }) => (
  <div className="page-header">
    <div className="container">
      <h1 className="gradient-text">{title}</h1>
      <p className="hero-subtitle" style={{marginBottom: 0}}>{t.placeholder.subtitle}</p>
    </div>
    <div className="container page-content" style={{marginTop: '4rem'}}>
      <div className="glass-panel empty-state">
        <Icon size={64} />
        <h2>{t.placeholder.heading}</h2>
        <p>{t.placeholder.body}</p>
      </div>
    </div>
  </div>
);

const MechanicsPage = ({ t }) => (
  <div className="page-header">
    <div className="container">
      <h1 className="gradient-text">{t.mechanics.title}</h1>
      <p className="hero-subtitle" style={{marginBottom: 0}}>{t.mechanics.subtitle}</p>
    </div>
    <div className="container page-content" style={{marginTop: '4rem'}}>
      <div className="grid-cards">
        <div className="glass-card research-card">
          <div className="card-icon"><Building2 size={24} /></div>
          <h3>{t.mechanics.cards[0].title}</h3>
          <p>{t.mechanics.cards[0].body}</p>
          <Link to="/mechanics/structural-theory" className="read-more">{t.mechanics.explore} <ArrowRight size={16}/></Link>
        </div>
        <div className="glass-card research-card">
          <div className="card-icon"><Layers size={24} /></div>
          <h3>{t.mechanics.cards[1].title}</h3>
          <p>{t.mechanics.cards[1].body}</p>
          <Link to="/mechanics/basics-of-continuum-mechanics" className="read-more">{t.mechanics.explore} <ArrowRight size={16}/></Link>
        </div>
        <div className="glass-card research-card">
          <div className="card-icon"><Box size={24} /></div>
          <h3>{t.mechanics.cards[2].title}</h3>
          <p>{t.mechanics.cards[2].body}</p>
          <Link to="/mechanics/continuum-mechanics" className="read-more">{t.mechanics.explore} <ArrowRight size={16}/></Link>
        </div>
        <div className="glass-card research-card">
          <div className="card-icon"><Atom size={24} /></div>
          <h3>{t.mechanics.cards[3].title}</h3>
          <p>{t.mechanics.cards[3].body}</p>
          <Link to="/mechanics/analytical-mechanics" className="read-more">{t.mechanics.explore} <ArrowRight size={16}/></Link>
        </div>
      </div>
    </div>
  </div>
);

const Home = ({ t }) => {
  return (
  <>
    <section className="hero" style={{ position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, opacity: 0.6 }}>
        <LiquidEther colors={['#0284c7', '#0ea5e9', '#38bdf8']} />
      </div>
      <div className="container hero-grid" style={{ position: 'relative', zIndex: 1, pointerEvents: 'none' }}>
        <div className="hero-content" style={{ pointerEvents: 'auto' }}>
          <h1>Walid <span className="gradient-text">LAKAS</span></h1>
          <h2 className="hero-subtitle">{t.home.subtitle}</h2>
          <p className="hero-description">
            {t.home.description}
          </p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href="mailto:walid.lks@gmail.com" className="btn btn-primary">
              <Mail size={20} /> {t.home.contact}
            </a>
            <a href="https://www.linkedin.com/in/walid-l-11b09325a/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              <LinkedinIcon size={20} /> LinkedIn
            </a>
            <Link to="/blog" className="btn btn-secondary">
              {t.home.blog}
            </Link>
          </div>
        </div>
        <div className="hero-visual" style={{ pointerEvents: 'auto' }}>
          <div className="profile-image-container">
            <img 
              src="/profile-new.png" 
              alt="Walid LAKAS" 
              className="profile-img"
            />
          </div>
        </div>
      </div>
    </section>

    <section className="section" style={{ background: '#f8fafc' }}>
      <div className="container">
        <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span className="gradient-text">{t.home.journeyTitlePrefix}</span> {t.home.journeyTitleSuffix}
        </h2>
        <div className="timeline">
          <div className="timeline-item left">
            <div className="glass-card timeline-content">
              <div className="timeline-date">2025</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                <div style={{ width: '64px', height: '64px', borderRadius: '12px', overflow: 'hidden', flexShrink: 0, boxShadow: '0 2px 8px rgba(0,0,0,0.2)' }}>
                  <img src="/pepro.jpg" alt="Pepro" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <h3 style={{ margin: 0 }}>{t.home.journey.founderTitle}</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)' }}>Pepro</p>
              <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>{t.home.journey.founderBody}</p>
            </div>
          </div>
          <div className="timeline-item right">
            <div className="glass-card timeline-content">
              <div className="timeline-date">2025</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                <div style={{ width: '64px', height: '64px', backgroundColor: '#ffffff', borderRadius: '12px', padding: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 2px 8px rgba(0,0,0,0.2)' }}>
                  <img src="/education.png" alt="Ministère de l'Éducation Nationale" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                </div>
                <h3 style={{ margin: 0 }}>{t.home.journey.teacherTitle}</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)' }}>Ministère de l'Éducation Nationale</p>
              <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>{t.home.journey.teacherBody}</p>
            </div>
          </div>
          <div className="timeline-item left">
            <div className="glass-card timeline-content">
              <div className="timeline-date">2024</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                <div style={{ width: '64px', height: '64px', backgroundColor: '#e8e8e8', borderRadius: '12px', padding: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 2px 8px rgba(0,0,0,0.2)' }}>
                  <img src="/engie.png" alt="Engie" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                </div>
                <h3 style={{ margin: 0 }}>{t.home.journey.engineerTitle}</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)' }}>Engie</p>
              <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>{t.home.journey.engineerSubject} <em style={{ color: 'var(--text-primary)' }}>{t.home.journey.engineerBody}</em></p>
            </div>
          </div>
          <div className="timeline-item right">
            <div className="glass-card timeline-content">
              <div className="timeline-date">2024</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                <div style={{ width: '64px', height: '64px', backgroundColor: '#ffffff', borderRadius: '12px', padding: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 2px 8px rgba(0,0,0,0.2)' }}>
                  <img src="/ensam.png" alt="Arts et Métiers" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                </div>
                <h3 style={{ margin: 0 }}>{t.home.journey.masterTitle}</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>Arts et Métiers, Paris</p>
              <a
                href="https://attestation.artsetmetiers.fr/check/4F3C5BD7C74CAE8647C404A13841D2D87CC8CBE44F4E9639AC4758F3BAEEFCF3ZnB3elVSMTJuTWtnYjNiUnBvK0JWOVZXR0F5cEwyRENFM3lWUXRWZzBDN3dDamFO"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.8rem',
                  fontWeight: '600',
                  color: '#10b981',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  borderRadius: '20px',
                  padding: '0.3rem 0.8rem',
                  background: 'rgba(16, 185, 129, 0.08)',
                  transition: 'all 0.2s ease',
                  textDecoration: 'none',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(16, 185, 129, 0.18)'; e.currentTarget.style.borderColor = 'rgba(16, 185, 129, 0.6)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(16, 185, 129, 0.08)'; e.currentTarget.style.borderColor = 'rgba(16, 185, 129, 0.3)'; }}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
                {t.home.verifiedDiploma}
              </a>
            </div>
          </div>
          <div className="timeline-item left">
            <div className="glass-card timeline-content">
              <div className="timeline-date">2022</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                <div style={{ width: '64px', height: '64px', backgroundColor: '#ffffff', borderRadius: '12px', padding: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 2px 8px rgba(0,0,0,0.2)' }}>
                  <img src="/evry.png" alt="Université d'Évry Paris-Saclay" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                </div>
                <h3 style={{ margin: 0 }}>{t.home.journey.bachelorTitle}</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)' }}>Université d'Évry Paris-Saclay</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <h2><span className="gradient-text">{t.home.researchTitle}</span> {t.home.domainsTitle}</h2>
        <div className="grid-cards">
          <div className="glass-card research-card">
            <div className="card-icon"><Droplets size={24} /></div>
            <h3>Biomechanics</h3>
            <p>{t.home.domains.biomechanics}</p>
            <Link to="/biomechanics" className="read-more">{t.home.domains.explore} <ArrowRight size={16}/></Link>
          </div>
          <div className="glass-card research-card">
            <div className="card-icon"><FunctionSquare size={24} /></div>
            <h3>Mathematics</h3>
            <p>{t.home.domains.mathematics}</p>
            <Link to="/mathematics" className="read-more">{t.home.domains.explore} <ArrowRight size={16}/></Link>
          </div>
          <div className="glass-card research-card">
            <div className="card-icon"><Wrench size={24} /></div>
            <h3>Mechanics</h3>
            <p>{t.home.domains.mechanics}</p>
            <Link to="/mechanics" className="read-more">{t.home.domains.explore} <ArrowRight size={16}/></Link>
          </div>
        </div>
      </div>
    </section>
  </>
  );
};

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState(() => localStorage.getItem('language') || 'en');
  const location = useLocation();
  const t = translations[language];
  const nextLanguage = language === 'en' ? 'fr' : 'en';

  const toggleLanguage = () => {
    setLanguage(nextLanguage);
    localStorage.setItem('language', nextLanguage);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setMobileMenuOpen(false); // Close mobile menu on page change
  }, [location.pathname]);

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          <Link to="/" className="nav-logo" onClick={() => setMobileMenuOpen(false)}>
            <img src="/logo.png" alt="Wave logo" className="nav-logo-img" />
            <span className="gradient-text">W.</span> LAKAS
          </Link>
          <ul className="nav-links">
            <li><Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>{t.nav.home}</Link></li>
            <li><Link to="/biomechanics" className={`nav-link ${location.pathname === '/biomechanics' ? 'active' : ''}`}>{t.nav.biomechanics}</Link></li>
            <li><Link to="/mathematics" className={`nav-link ${location.pathname === '/mathematics' ? 'active' : ''}`}>{t.nav.mathematics}</Link></li>
            <li><Link to="/mechanics" className={`nav-link ${location.pathname.startsWith('/mechanics') ? 'active' : ''}`}>{t.nav.mechanics}</Link></li>
            <li><Link to="/blog" className={`nav-link ${location.pathname === '/blog' ? 'active' : ''}`}>{t.nav.blog}</Link></li>
          </ul>
          <button
            type="button"
            className="language-toggle"
            onClick={toggleLanguage}
            aria-label={t.nav.languageLabel}
            title={t.nav.languageLabel}
          >
            <Languages size={18} />
            <span>{language.toUpperCase()}</span>
          </button>

          {/* Mobile menu toggle button */}
          <button 
            className="mobile-menu-btn" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Responsive Mobile Overlay Menu (Bottom-Up Drawer) */}
        <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
          <div className="mobile-menu-backdrop" onClick={() => setMobileMenuOpen(false)} />
          <div className="mobile-menu-content">
            <div className="drawer-pill" />
            <button
              type="button"
              className="mobile-language-toggle"
              onClick={toggleLanguage}
              aria-label={t.nav.languageLabel}
            >
              <Languages size={18} />
              {language.toUpperCase()} / {nextLanguage.toUpperCase()}
            </button>
            <Link to="/" className={`mobile-link ${location.pathname === '/' ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>{t.nav.home}</Link>
            <Link to="/biomechanics" className={`mobile-link ${location.pathname === '/biomechanics' ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>{t.nav.biomechanics}</Link>
            <Link to="/mathematics" className={`mobile-link ${location.pathname === '/mathematics' ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>{t.nav.mathematics}</Link>
            <Link to="/mechanics" className={`mobile-link ${location.pathname.startsWith('/mechanics') ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>{t.nav.mechanics}</Link>
            <Link to="/blog" className={`mobile-link ${location.pathname === '/blog' ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>{t.nav.blog}</Link>
          </div>
        </div>
      </nav>

      <main>
        <Routes>
          <Route path="/" element={<Home t={t} />} />
          <Route path="/biomechanics" element={<PageTemplate title={t.titles.biomechanics} icon={Droplets} t={t} />} />
          <Route path="/mathematics" element={<PageTemplate title={t.titles.mathematics} icon={FunctionSquare} t={t} />} />
          <Route path="/mechanics" element={<MechanicsPage t={t} />} />
          <Route path="/mechanics/structural-theory" element={<PageTemplate title={t.titles.structuralTheory} icon={Building2} t={t} />} />
          <Route path="/mechanics/basics-of-continuum-mechanics" element={<BasicsMMCPage />} />
          <Route path="/mechanics/basics-of-continuum-mechanics/analysis-of-deformation" element={<AnalysisOfDeformationPage />} />
          <Route path="/mechanics/continuum-mechanics" element={<PageTemplate title={t.titles.continuumMechanics} icon={Box} t={t} />} />
          <Route path="/mechanics/analytical-mechanics" element={<AnalyticalMechanicsPage />} />
          <Route path="/mechanics/analytical-mechanics/virtual-work-application" element={<VirtualWorkApplicationPage />} />
          <Route path="/blog" element={<PageTemplate title={t.titles.blog} icon={PenTool} t={t} />} />
        </Routes>
      </main>

      <footer>
        <div className="container">
          <div className="footer-content">
            <div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', marginBottom: '0.5rem' }}>Walid LAKAS</h3>
              <p style={{ color: 'var(--text-secondary)' }}>{t.footer.role}</p>
            </div>
            <div className="contact-info">
              <a href="https://www.linkedin.com/in/walid-l-11b09325a/" target="_blank" rel="noopener noreferrer" className="contact-item">
                <LinkedinIcon size={18} /> LinkedIn
              </a>
              <a href="mailto:walid.lks@gmail.com" className="contact-item">
                <Mail size={18} /> walid.lks@gmail.com
              </a>
            </div>
          </div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', textAlign: 'center', borderTop: '1px solid var(--surface-border)', paddingTop: '2rem' }}>
            &copy; {new Date().getFullYear()} Walid LAKAS. {t.footer.rights}
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
