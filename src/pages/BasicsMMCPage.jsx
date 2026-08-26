
import { Link } from 'react-router-dom';
import { Layers, ArrowRight, Activity, BookOpen } from 'lucide-react';

const BasicsMMCPage = () => {
  return (
    <div className="page-header">
      <div className="container">
        <h1 className="gradient-text">Basics of Continuum Mechanics</h1>
        <p className="hero-subtitle" style={{marginBottom: 0}}>Fundamentals & Kinematics</p>
      </div>
      <div className="container page-content" style={{marginTop: '4rem'}}>
        
        {/* Category Introduction */}
        <div className="glass-panel" style={{ padding: '3rem', textAlign: 'left', marginBottom: '3rem' }}>
          <h2 style={{ marginBottom: '1.5rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Layers size={28} style={{ color: 'var(--primary-color)' }} /> About this Section
          </h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
            This section serves as a directory for fundamental concepts and mathematical formulations in continuum mechanics. Here you will find detailed notes, exercises, and derivations covering the kinematics and dynamics of continuous media. Select a topic below to explore its contents.
          </p>
        </div>

        {/* Concept Reminders */}
        <div style={{ marginBottom: '4rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <div className="card-icon" style={{ marginBottom: 0 }}><BookOpen size={24} /></div>
            <h2 style={{ margin: 0 }}><span className="gradient-text">Concept</span> Reminders</h2>
          </div>

          <div className="grid-cards">
            <div className="glass-card research-card">
              <div className="card-icon"><BookOpen size={24} /></div>
              <h3>Spherical and Deviatoric Parts of the Strain Tensor</h3>
              <p>A short concept reminder on tensor decomposition into volume-changing and shape-changing components.</p>
              <Link to="/mechanics/basics-of-continuum-mechanics/spherical-deviatoric-parts" className="read-more">
                Read Reminder <ArrowRight size={16}/>
              </Link>
            </div>
          </div>
        </div>

        {/* Sub-pages Grid */}
        <h2 style={{ marginBottom: '0.5rem' }}><span className="gradient-text">Problem</span> Solving</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
          Guided applications and exercises are grouped separately from short concept reminders.
        </p>
        <div className="grid-cards">
          
          <div className="glass-card research-card">
            <div className="card-icon"><Activity size={24} /></div>
            <h3>Analysis of Deformation</h3>
            <p>Guided exercises on deformation gradients, displacement vectors, stretch ratios, and kinematic transformations.</p>
            <Link to="/mechanics/basics-of-continuum-mechanics/analysis-of-deformation" className="read-more">
              View Notes <ArrowRight size={16}/>
            </Link>
          </div>
          
          {/* Future topics will be added here */}
          
        </div>
      </div>
    </div>
  );
};

export default BasicsMMCPage;
