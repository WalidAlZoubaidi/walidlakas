
import { Link } from 'react-router-dom';
import { Atom, ArrowRight, Activity } from 'lucide-react';

const translations = {
  en: {
    title: 'Analytical Mechanics',
    subtitle: 'Lagrangian & Hamiltonian Formalisms',
    aboutTitle: 'About this Section',
    aboutBody: 'This section covers the principles of analytical mechanics, focusing on formulating the equations of motion for complex mechanical systems using Lagrangian and Hamiltonian approaches. You will find theoretical notes and guided exercises to master these powerful formalisms.',
    conceptPrefix: 'Concept',
    conceptSuffix: 'Reminders',
    conceptIntro: 'Short theoretical reminders will be grouped here separately from problem-solving applications.',
    emptyConceptTitle: 'Concept reminders coming soon',
    emptyConceptBody: 'This area will host concise reminders on Lagrangian coordinates, virtual work, Hamiltonian mechanics, and variational principles.',
    problemPrefix: 'Problem',
    problemSuffix: 'Solving',
    problemIntro: 'Guided applications and exercises are grouped separately from short concept reminders.',
    virtualWorkTitle: 'Principle of Virtual Work',
    virtualWorkBody: 'Application exercise on the principle of virtual work: determining the equation of motion for a pendulum with a torsional spring.',
    virtualWorkCta: 'View Application',
  },
  fr: {
    title: 'Mécanique analytique',
    subtitle: 'Formalismes lagrangien & hamiltonien',
    aboutTitle: 'À propos de cette section',
    aboutBody: 'Cette section présente les principes de la mécanique analytique, avec un accent sur la formulation des équations du mouvement pour des systèmes mécaniques complexes à l’aide des approches lagrangienne et hamiltonienne. Vous y trouverez des rappels théoriques et des exercices guidés pour maîtriser ces formalismes.',
    conceptPrefix: 'Rappels',
    conceptSuffix: 'de concepts',
    conceptIntro: 'Les courts rappels théoriques seront regroupés ici séparément des applications et exercices.',
    emptyConceptTitle: 'Rappels de concepts à venir',
    emptyConceptBody: 'Cette zone accueillera des rappels concis sur les coordonnées lagrangiennes, les travaux virtuels, la mécanique hamiltonienne et les principes variationnels.',
    problemPrefix: 'Résolution',
    problemSuffix: 'de problèmes',
    problemIntro: 'Les applications guidées et les exercices sont regroupés séparément des courts rappels de concepts.',
    virtualWorkTitle: 'Principe des travaux virtuels',
    virtualWorkBody: 'Exercice d’application sur le principe des travaux virtuels : déterminer l’équation du mouvement d’un pendule avec ressort de torsion.',
    virtualWorkCta: 'Voir l’application',
  },
};

const AnalyticalMechanicsPage = ({ language = 'en' }) => {
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
            <Atom size={28} style={{ color: 'var(--primary-color)' }} /> {t.aboutTitle}
          </h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
            {t.aboutBody}
          </p>
        </div>

        {/* Concept Reminders */}
        <div style={{ marginBottom: '4rem' }}>
          <h2 style={{ marginBottom: '0.5rem' }}><span className="gradient-text">{t.conceptPrefix}</span> {t.conceptSuffix}</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
            {t.conceptIntro}
          </p>
          <div className="glass-panel empty-state" style={{ padding: '2.5rem' }}>
            <Atom size={48} />
            <h3>{t.emptyConceptTitle}</h3>
            <p>{t.emptyConceptBody}</p>
          </div>
        </div>

        {/* Problem Solving */}
        <h2 style={{ marginBottom: '0.5rem' }}><span className="gradient-text">{t.problemPrefix}</span> {t.problemSuffix}</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
          {t.problemIntro}
        </p>
        <div className="grid-cards">
          
          <div className="glass-card research-card">
            <div className="card-icon"><Activity size={24} /></div>
            <h3>{t.virtualWorkTitle}</h3>
            <p>{t.virtualWorkBody}</p>
            <Link to="/mechanics/analytical-mechanics/virtual-work-application" className="read-more">
              {t.virtualWorkCta} <ArrowRight size={16}/>
            </Link>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default AnalyticalMechanicsPage;
