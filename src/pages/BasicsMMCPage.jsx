
import { Link } from 'react-router-dom';
import { Layers, ArrowRight, Activity, BookOpen } from 'lucide-react';

const translations = {
  en: {
    title: 'Basics of Continuum Mechanics',
    subtitle: 'Fundamentals & Kinematics',
    aboutTitle: 'About this Section',
    aboutBody: 'This section serves as a directory for fundamental concepts and mathematical formulations in continuum mechanics. Here you will find detailed notes, exercises, and derivations covering the kinematics and dynamics of continuous media. Select a topic below to explore its contents.',
    conceptPrefix: 'Concept',
    conceptSuffix: 'Reminders',
    conceptTitle: 'Spherical and Deviatoric Parts of the Strain Tensor',
    conceptBody: 'A short concept reminder on tensor decomposition into volume-changing and shape-changing components.',
    conceptCta: 'Read Reminder',
    problemPrefix: 'Problem',
    problemSuffix: 'Solving',
    problemIntro: 'Guided applications and exercises are grouped separately from short concept reminders.',
    analysisTitle: 'Analysis of Deformation',
    analysisBody: 'Guided exercises on deformation gradients, displacement vectors, stretch ratios, and kinematic transformations.',
    analysisCta: 'View Notes',
  },
  fr: {
    title: 'Bases de la mécanique des milieux continus',
    subtitle: 'Fondamentaux & cinématique',
    aboutTitle: 'À propos de cette section',
    aboutBody: 'Cette section sert de répertoire pour les concepts fondamentaux et les formulations mathématiques en mécanique des milieux continus. Vous y trouverez des notes détaillées, des exercices et des démonstrations sur la cinématique et la dynamique des milieux continus. Sélectionnez un sujet ci-dessous pour explorer son contenu.',
    conceptPrefix: 'Rappels',
    conceptSuffix: 'de concepts',
    conceptTitle: 'Parties sphérique et déviatorique du tenseur des déformations',
    conceptBody: 'Un court rappel conceptuel sur la décomposition d’un tenseur en composantes associées au changement de volume et au changement de forme.',
    conceptCta: 'Lire le rappel',
    problemPrefix: 'Résolution',
    problemSuffix: 'de problèmes',
    problemIntro: 'Les applications guidées et les exercices sont regroupés séparément des courts rappels de concepts.',
    analysisTitle: 'Analyse des déformations',
    analysisBody: 'Exercices guidés sur les gradients de déformation, les vecteurs déplacement, les taux d’allongement et les transformations cinématiques.',
    analysisCta: 'Voir les notes',
  },
};

const BasicsMMCPage = ({ language = 'en' }) => {
  const t = translations[language] || translations.en;

  return (
    <div className="page-header">
      <div className="container">
        <h1 className="gradient-text">{t.title}</h1>
        <p className="hero-subtitle" style={{marginBottom: 0}}>{t.subtitle}</p>
      </div>
      <div className="container page-content" style={{marginTop: '4rem'}}>
        
        {/* Category Introduction */}
        <div className="glass-panel" style={{ padding: '3rem', textAlign: 'left', marginBottom: '3rem' }}>
          <h2 style={{ marginBottom: '1.5rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Layers size={28} style={{ color: 'var(--primary-color)' }} /> {t.aboutTitle}
          </h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
            {t.aboutBody}
          </p>
        </div>

        {/* Concept Reminders */}
        <div style={{ marginBottom: '4rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <div className="card-icon" style={{ marginBottom: 0 }}><BookOpen size={24} /></div>
            <h2 style={{ margin: 0 }}><span className="gradient-text">{t.conceptPrefix}</span> {t.conceptSuffix}</h2>
          </div>

          <div className="grid-cards">
            <div className="glass-card research-card">
              <div className="card-icon"><BookOpen size={24} /></div>
              <h3>{t.conceptTitle}</h3>
              <p>{t.conceptBody}</p>
              <Link to="/mechanics/basics-of-continuum-mechanics/spherical-deviatoric-parts" className="read-more">
                {t.conceptCta} <ArrowRight size={16}/>
              </Link>
            </div>
          </div>
        </div>

        {/* Sub-pages Grid */}
        <h2 style={{ marginBottom: '0.5rem' }}><span className="gradient-text">{t.problemPrefix}</span> {t.problemSuffix}</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
          {t.problemIntro}
        </p>
        <div className="grid-cards">
          
          <div className="glass-card research-card">
            <div className="card-icon"><Activity size={24} /></div>
            <h3>{t.analysisTitle}</h3>
            <p>{t.analysisBody}</p>
            <Link to="/mechanics/basics-of-continuum-mechanics/analysis-of-deformation" className="read-more">
              {t.analysisCta} <ArrowRight size={16}/>
            </Link>
          </div>
          
          {/* Future topics will be added here */}
          
        </div>
      </div>
    </div>
  );
};

export default BasicsMMCPage;
