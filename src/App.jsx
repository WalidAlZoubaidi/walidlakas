import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { Mail, ArrowRight, Droplets, FunctionSquare, Building2, Atom, PenTool, Layers, Box, Wrench, Menu, X } from 'lucide-react';
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

// Page Components Placeholder
const PageTemplate = ({ title, icon: Icon }) => (
  <div className="page-header">
    <div className="container">
      <h1 className="gradient-text">{title}</h1>
      <p className="hero-subtitle" style={{marginBottom: 0}}>Research & Publications</p>
    </div>
    <div className="container page-content" style={{marginTop: '4rem'}}>
      <div className="glass-panel empty-state">
        <Icon size={64} />
        <h2>Content coming soon</h2>
        <p>This section is currently being updated with recent research and publications.</p>
      </div>
    </div>
  </div>
);

const MechanicsPage = () => (
  <div className="page-header">
    <div className="container">
      <h1 className="gradient-text">Mechanics</h1>
      <p className="hero-subtitle" style={{marginBottom: 0}}>Core mechanics disciplines and theories</p>
    </div>
    <div className="container page-content" style={{marginTop: '4rem'}}>
      <div className="grid-cards">
        <div className="glass-card research-card">
          <div className="card-icon"><Building2 size={24} /></div>
          <h3>Theory of Structures</h3>
          <p>Analyzing the behavior of solid structures under various dynamic and thermal loads.</p>
          <Link to="/mechanics/structural-theory" className="read-more">Explore <ArrowRight size={16}/></Link>
        </div>
        <div className="glass-card research-card">
          <div className="card-icon"><Layers size={24} /></div>
          <h3>Basics of Continuum Mechanics</h3>
          <p>Fundamental principles, stress, strain, and kinematics of continuous media.</p>
          <Link to="/mechanics/basics-of-continuum-mechanics" className="read-more">Explore <ArrowRight size={16}/></Link>
        </div>
        <div className="glass-card research-card">
          <div className="card-icon"><Box size={24} /></div>
          <h3>Continuum Mechanics (MMC)</h3>
          <p>Advanced concepts and constitutive equations in continuum mechanics.</p>
          <Link to="/mechanics/continuum-mechanics" className="read-more">Explore <ArrowRight size={16}/></Link>
        </div>
        <div className="glass-card research-card">
          <div className="card-icon"><Atom size={24} /></div>
          <h3>Analytical Mechanics</h3>
          <p>Applying fundamental principles using Lagrangian and Hamiltonian formalisms.</p>
          <Link to="/mechanics/analytical-mechanics" className="read-more">Explore <ArrowRight size={16}/></Link>
        </div>
      </div>
    </div>
  </div>
);

const Home = () => {
  return (
  <>
    <section className="hero" style={{ position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, opacity: 0.6 }}>
        <LiquidEther colors={['#0284c7', '#0ea5e9', '#38bdf8']} />
      </div>
      <div className="container hero-grid" style={{ position: 'relative', zIndex: 1, pointerEvents: 'none' }}>
        <div className="hero-content" style={{ pointerEvents: 'auto' }}>
          <h1>Walid <span className="gradient-text">LAKAS</span></h1>
          <h2 className="hero-subtitle">Research Engineer in Fluid Mechanics & Energy</h2>
          <p className="hero-description">
            Exploring the dynamic interplay between fluid behavior and energetic systems. Deeply interested in the application of mechanics to medical fields, advancing healthcare through advanced simulation, mathematical modeling, and rigorous analytical mechanics.
          </p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href="mailto:walid.lks@gmail.com" className="btn btn-primary">
              <Mail size={20} /> Get in touch
            </a>
            <a href="https://www.linkedin.com/in/walid-l-11b09325a/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              <LinkedinIcon size={20} /> LinkedIn
            </a>
            <Link to="/blog" className="btn btn-secondary">
              Read my blog
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
          <span className="gradient-text">My</span> Journey
        </h2>
        <div className="timeline">
          <div className="timeline-item left">
            <div className="glass-card timeline-content">
              <div className="timeline-date">2025</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                <div style={{ width: '64px', height: '64px', borderRadius: '12px', overflow: 'hidden', flexShrink: 0, boxShadow: '0 2px 8px rgba(0,0,0,0.2)' }}>
                  <img src="/pepro.jpg" alt="Pepro" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <h3 style={{ margin: 0 }}>Founder & Researcher</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)' }}>Pepro</p>
              <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>Research and scientific software publishing.</p>
            </div>
          </div>
          <div className="timeline-item right">
            <div className="glass-card timeline-content">
              <div className="timeline-date">2025</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                <div style={{ width: '64px', height: '64px', backgroundColor: '#ffffff', borderRadius: '12px', padding: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 2px 8px rgba(0,0,0,0.2)' }}>
                  <img src="/education.png" alt="Ministère de l'Éducation Nationale" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                </div>
                <h3 style={{ margin: 0 }}>Mathematics Teacher</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)' }}>Ministère de l'Éducation Nationale</p>
              <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>Taught at high school and middle school levels. Served as a jury member for the Baccalauréat Grand Oral.</p>
            </div>
          </div>
          <div className="timeline-item left">
            <div className="glass-card timeline-content">
              <div className="timeline-date">2024</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                <div style={{ width: '64px', height: '64px', backgroundColor: '#e8e8e8', borderRadius: '12px', padding: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 2px 8px rgba(0,0,0,0.2)' }}>
                  <img src="/engie.png" alt="Engie" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                </div>
                <h3 style={{ margin: 0 }}>Research Engineer</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)' }}>Engie</p>
              <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>Research subject: <em style={{ color: 'var(--text-primary)' }}>Numerical treatment of thermal diffusion through solid thickness of a cryogenic tank.</em></p>
            </div>
          </div>
          <div className="timeline-item right">
            <div className="glass-card timeline-content">
              <div className="timeline-date">2024</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                <div style={{ width: '64px', height: '64px', backgroundColor: '#ffffff', borderRadius: '12px', padding: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 2px 8px rgba(0,0,0,0.2)' }}>
                  <img src="/ensam.png" alt="Arts et Métiers" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                </div>
                <h3 style={{ margin: 0 }}>Research Master's in Fluid Mechanics</h3>
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
                Blockchain Verified Diploma
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
                <h3 style={{ margin: 0 }}>Bachelor's in Applied Mathematics</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)' }}>Université d'Évry Paris-Saclay</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <h2><span className="gradient-text">Research</span> Domains</h2>
        <div className="grid-cards">
          <div className="glass-card research-card">
            <div className="card-icon"><Droplets size={24} /></div>
            <h3>Biomechanics</h3>
            <p>Applying mechanical principles to medical applications. Focusing on advanced simulation and modeling of biological systems and human physiology to drive healthcare innovations.</p>
            <Link to="/biomechanics" className="read-more">Explore research <ArrowRight size={16}/></Link>
          </div>
          <div className="glass-card research-card">
            <div className="card-icon"><FunctionSquare size={24} /></div>
            <h3>Mathematics</h3>
            <p>Developing robust mathematical models and computational methods to solve complex non-linear problems in engineering.</p>
            <Link to="/mathematics" className="read-more">Explore research <ArrowRight size={16}/></Link>
          </div>
          <div className="glass-card research-card">
            <div className="card-icon"><Wrench size={24} /></div>
            <h3>Mechanics</h3>
            <p>Exploring Theory of Structures, Continuum Mechanics (MMC), and Analytical Mechanics.</p>
            <Link to="/mechanics" className="read-more">Explore research <ArrowRight size={16}/></Link>
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
  const location = useLocation();

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
            <li><Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link></li>
            <li><Link to="/biomechanics" className={`nav-link ${location.pathname === '/biomechanics' ? 'active' : ''}`}>Biomechanics</Link></li>
            <li><Link to="/mathematics" className={`nav-link ${location.pathname === '/mathematics' ? 'active' : ''}`}>Mathematics</Link></li>
            <li><Link to="/mechanics" className={`nav-link ${location.pathname.startsWith('/mechanics') ? 'active' : ''}`}>Mechanics</Link></li>
            <li><Link to="/blog" className={`nav-link ${location.pathname === '/blog' ? 'active' : ''}`}>Blog</Link></li>
          </ul>

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
            <Link to="/" className={`mobile-link ${location.pathname === '/' ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link to="/biomechanics" className={`mobile-link ${location.pathname === '/biomechanics' ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>Biomechanics</Link>
            <Link to="/mathematics" className={`mobile-link ${location.pathname === '/mathematics' ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>Mathematics</Link>
            <Link to="/mechanics" className={`mobile-link ${location.pathname.startsWith('/mechanics') ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>Mechanics</Link>
            <Link to="/blog" className={`mobile-link ${location.pathname === '/blog' ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>Blog</Link>
          </div>
        </div>
      </nav>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/biomechanics" element={<PageTemplate title="Biomechanics" icon={Droplets} />} />
          <Route path="/mathematics" element={<PageTemplate title="Mathematics" icon={FunctionSquare} />} />
          <Route path="/mechanics" element={<MechanicsPage />} />
          <Route path="/mechanics/structural-theory" element={<PageTemplate title="Theory of Structures" icon={Building2} />} />
          <Route path="/mechanics/basics-of-continuum-mechanics" element={<BasicsMMCPage />} />
          <Route path="/mechanics/basics-of-continuum-mechanics/analysis-of-deformation" element={<AnalysisOfDeformationPage />} />
          <Route path="/mechanics/continuum-mechanics" element={<PageTemplate title="Continuum Mechanics (MMC)" icon={Box} />} />
          <Route path="/mechanics/analytical-mechanics" element={<AnalyticalMechanicsPage />} />
          <Route path="/mechanics/analytical-mechanics/virtual-work-application" element={<VirtualWorkApplicationPage />} />
          <Route path="/blog" element={<PageTemplate title="Research Blog" icon={PenTool} />} />
        </Routes>
      </main>

      <footer>
        <div className="container">
          <div className="footer-content">
            <div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', marginBottom: '0.5rem' }}>Walid LAKAS</h3>
              <p style={{ color: 'var(--text-secondary)' }}>Research Engineer in Fluid Mechanics & Energy</p>
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
            &copy; {new Date().getFullYear()} Walid LAKAS. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
