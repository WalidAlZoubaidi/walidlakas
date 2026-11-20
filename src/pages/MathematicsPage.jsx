import { Link } from 'react-router-dom';
import { ArrowRight, Sigma, Grid3x3, Shapes, Hash, Waves, AudioWaveform } from 'lucide-react';
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
    fourierTitle: 'Fourier Series',
    fourierIntro: 'Decomposing a periodic function into a sum of sines and cosines.',
    coefTitle: 'How to find the Fourier coefficients of a periodic function?',
    coefBody: 'Definitions of aₙ, bₙ and cₙ, using parity, and a worked example on a square wave.',
    algebraTitle: 'Algebraic Structures',
    algebraIntro: 'Groups, rings and fields: congruences and computing in quotient rings.',
    znzTitle: String.raw`How to compute in $\mathbb{Z}/n\mathbb{Z}$?`,
    znzBody: 'Compatibility of congruences with + and ×, and a worked example.',
  },
  fr: {
    title: 'Mathématiques',
    subtitle: 'Méthodes, rappels et exercices',
    multivarTitle: 'Fonctions de plusieurs variables réelles',
    multivarIntro: 'Calcul différentiel à plusieurs variables : dérivées partielles, différentielles et matrices jacobiennes.',
    jacobianTitle: String.raw`Comment déterminer la matrice jacobienne d’une fonction de $\mathbb{R}^n$ dans $\mathbb{R}^p$ ?`,
    jacobianBody: 'Définition, méthode en 4 étapes, règle de la chaîne, exemple détaillé et exercices.',
    cta: 'Lire la méthode',
    fourierTitle: 'Séries de Fourier',
    fourierIntro: 'Décomposer une fonction périodique en une somme de sinus et de cosinus.',
    coefTitle: 'Comment déterminer les coefficients de Fourier d’une fonction périodique ?',
    coefBody: 'Définitions de aₙ, bₙ et cₙ, utilisation de la parité et un exemple détaillé sur un signal créneau.',
    algebraTitle: 'Structures algébriques',
    algebraIntro: 'Groupes, anneaux et corps : congruences et calculs dans les anneaux quotients.',
    znzTitle: String.raw`Comment calculer dans $\mathbb{Z}/n\mathbb{Z}$ ?`,
    znzBody: 'Compatibilité des congruences avec + et ×, et un exemple détaillé.',
  },
  ar: {
    title: 'الرياضيات',
    subtitle: 'طرق ومراجعات وتمارين',
    multivarTitle: 'دوال لعدة متغيرات حقيقية',
    multivarIntro: 'الحساب التفاضلي للدوال ذات المتغيرات المتعددة: المشتقات الجزئية والتفاضلات والمصفوفات اليعقوبية.',
    jacobianTitle: String.raw`كيف نحدّد المصفوفة اليعقوبية لدالة من $\mathbb{R}^n$ إلى $\mathbb{R}^p$؟`,
    jacobianBody: 'التعريف، وطريقة من أربع خطوات، وقاعدة السلسلة، ومثال محلول، وتمارين.',
    cta: 'اقرأ الطريقة',
    fourierTitle: 'متسلسلات فورييه',
    fourierIntro: 'تفكيك دالة دورية إلى مجموع من الجيوب وجيوب التمام.',
    coefTitle: 'كيف نحدّد معاملات فورييه لدالة دورية؟',
    coefBody: 'تعريف المعاملات aₙ و bₙ و cₙ، واستعمال الزوجية، ومثال محلول على إشارة مربّعة.',
    algebraTitle: 'البنيات الجبرية',
    algebraIntro: 'الزمر والحلقات والحقول: الموافقات والحساب في حلقات الخارج.',
    znzTitle: String.raw`كيف نحسب في $\mathbb{Z}/n\mathbb{Z}$؟`,
    znzBody: 'توافق الموافقات مع الجمع والضرب، ومثال محلول.',
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

        <section className="topic-section">
          <div className="topic-heading">
            <div className="card-icon accent-sky" style={{ marginBottom: 0 }}><Shapes size={24} /></div>
            <h2>{t.algebraTitle}</h2>
          </div>
          <p className="topic-intro">{t.algebraIntro}</p>

          <div className="grid-cards grid-fill">
            <div className="glass-card research-card accent-sky">
              <div className="card-icon"><Hash size={24} /></div>
              <h3><MathText text={t.znzTitle} /></h3>
              <p>{t.znzBody}</p>
              <Link to="/mathematics/algebraic-structures/computing-in-z-nz" className="read-more">
                {t.cta} <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        <section className="topic-section">
          <div className="topic-heading">
            <div className="card-icon accent-amber" style={{ marginBottom: 0 }}><Waves size={24} /></div>
            <h2>{t.fourierTitle}</h2>
          </div>
          <p className="topic-intro">{t.fourierIntro}</p>

          <div className="grid-cards grid-fill">
            <div className="glass-card research-card accent-amber">
              <div className="card-icon"><AudioWaveform size={24} /></div>
              <h3>{t.coefTitle}</h3>
              <p>{t.coefBody}</p>
              <Link to="/mathematics/fourier-series/fourier-coefficients" className="read-more">
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
