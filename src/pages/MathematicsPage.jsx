import { Link } from 'react-router-dom';
import { ArrowRight, Sigma, Grid3x3 } from 'lucide-react';
import { MathText } from '@/components/MathText';

const translations = {
  en: {
    title: 'Mathematics',
    subtitle: 'Methods, reminders and exercises',
    multivarTitle: 'Functions of Several Real Variables',
    multivarIntro: 'Differential calculus in several variables: partial derivatives, differentials and Jacobian matrices.',
    jacobianTitle: String.raw`How to find the Jacobian matrix of a function from $\mathbb{R}^n$ to $\mathbb{R}^p$?`,
    jacobianBody: 'Definition, a 4-step method, the chain rule, a worked example and exercises.',
    cta: 'Read the method',
  },
  fr: {
    title: 'Mathématiques',
    subtitle: 'Méthodes, rappels et exercices',
    multivarTitle: 'Fonctions de plusieurs variables réelles',
    multivarIntro: 'Calcul différentiel à plusieurs variables : dérivées partielles, différentielles et matrices jacobiennes.',
    jacobianTitle: String.raw`Comment déterminer la matrice jacobienne d’une fonction de $\mathbb{R}^n$ dans $\mathbb{R}^p$ ?`,
    jacobianBody: 'Définition, méthode en 4 étapes, règle de la chaîne, exemple détaillé et exercices.',
    cta: 'Lire la méthode',
  },
  ar: {
    title: 'الرياضيات',
    subtitle: 'طرق ومراجعات وتمارين',
    multivarTitle: 'دوال لعدة متغيرات حقيقية',
    multivarIntro: 'الحساب التفاضلي للدوال ذات المتغيرات المتعددة: المشتقات الجزئية والتفاضلات والمصفوفات اليعقوبية.',
    jacobianTitle: String.raw`كيف نحدّد المصفوفة اليعقوبية لدالة من $\mathbb{R}^n$ إلى $\mathbb{R}^p$؟`,
    jacobianBody: 'التعريف، وطريقة من أربع خطوات، وقاعدة السلسلة، ومثال محلول، وتمارين.',
    cta: 'اقرأ الطريقة',
  },
};

const MathematicsPage = ({ language = 'en' }) => {
  const t = translations[language] || translations.en;

  return (
    <div className="page-header">
      <div className="container">
        <h1 className="gradient-text">{t.title}</h1>
        <p className="hero-subtitle" style={{ marginBottom: 0 }}>{t.subtitle}</p>
      </div>
      <div className="container page-content" style={{ marginTop: '4rem', textAlign: 'start' }}>
        <section className="topic-section">
          <div className="topic-heading">
            <div className="card-icon accent-violet" style={{ marginBottom: 0 }}><Sigma size={24} /></div>
            <h2>{t.multivarTitle}</h2>
          </div>
          <p className="topic-intro">{t.multivarIntro}</p>

          <div className="grid-cards grid-fill">
            <div className="glass-card research-card accent-violet">
              <div className="card-icon"><Grid3x3 size={24} /></div>
              <h3><MathText text={t.jacobianTitle} /></h3>
              <p>{t.jacobianBody}</p>
              <Link to="/mathematics/multivariable-functions/jacobian-matrix" className="read-more">
                {t.cta} <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MathematicsPage;
