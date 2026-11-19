import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { Mail, MapPin, ArrowRight, ArrowLeft, Wind, Clock, ExternalLink, Droplets, FunctionSquare, Building2, Atom, PenTool, Layers, Box, Wrench, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import LiquidEther from '@/components/LiquidEther';
import BasicsMMCPage from '@/pages/BasicsMMCPage';
import SphericalDeviatoricPartsPage from '@/pages/SphericalDeviatoricPartsPage';
import AnalysisOfDeformationPage from '@/pages/AnalysisOfDeformationPage';
import AnalyticalMechanicsPage from '@/pages/AnalyticalMechanicsPage';
import VirtualWorkApplicationPage from '@/pages/VirtualWorkApplicationPage';
import MathematicsPage from '@/pages/MathematicsPage';
import JacobianMatrixPage from '@/pages/JacobianMatrixPage';

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
      languageLabel: 'Choose language',
      menuLabel: 'Toggle mobile menu',
      logoAlt: 'Wave logo',
    },
    placeholder: {
      subtitle: 'Research & Publications',
      heading: 'Content coming soon',
      body: 'This section is currently being updated with recent research and publications.',
    },
    biomechanicsPage: {
      subtitle: 'Mechanics applied to living systems',
      explore: 'Explore',
      cfdTitle: 'CFD',
      cfdBody: 'Computational fluid dynamics: numerical methods, tools such as OpenFOAM, and applications to biological flows.',
    },
    cfd: {
      title: 'CFD',
      subtitle: 'Computational Fluid Dynamics',
      badge: 'Coming soon',
      heading: 'Content on its way',
      body: 'Articles and tutorials on computational fluid dynamics are being prepared: governing equations, meshing, turbulence models, and step-by-step OpenFOAM cases. Check back soon!',
      back: 'Back to Biomechanics',
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
      description: 'My website aims to share my work and serve as an information resource for engineers and higher education students. My interests are varied, but they revolve around applied mathematics and fluid/solid mechanics. I am particularly interested in computational fluid dynamics (CFD).',
      location: 'Based in Paris, France',
      photoAlt: 'The Eiffel Tower in Paris under a blue sky',
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
        educationMinistry: 'French Ministry of National Education',
        teacherTitle: 'Mathematics Teacher',
        teacherBody: 'Taught at high school and middle school levels. Served as a jury member for the Baccalauréat Grand Oral.',
        engineerTitle: 'Research Engineer',
        engieUrl: 'https://innovation.engie.com/en/lab-crigen-professionnal-services',
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
      languageLabel: 'Choisir la langue',
      menuLabel: 'Afficher ou masquer le menu',
      logoAlt: 'Logo de la vague',
    },
    placeholder: {
      subtitle: 'Recherche & Publications',
      heading: 'Contenu à venir',
      body: 'Cette section est actuellement mise à jour avec des recherches et publications récentes.',
    },
    biomechanicsPage: {
      subtitle: 'La mécanique appliquée au vivant',
      explore: 'Explorer',
      cfdTitle: 'CFD',
      cfdBody: 'Mécanique des fluides numérique : méthodes, outils comme OpenFOAM et applications aux écoulements biologiques.',
    },
    cfd: {
      title: 'CFD',
      subtitle: 'Mécanique des fluides numérique',
      badge: 'Bientôt disponible',
      heading: 'Du contenu arrive bientôt',
      body: 'Des articles et tutoriels sur la mécanique des fluides numérique sont en préparation : équations de conservation, maillage, modèles de turbulence et cas OpenFOAM pas à pas. Revenez bientôt !',
      back: 'Retour à la biomécanique',
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
      description: "Mon site a pour objectif de partager mes travaux et d'être une ressource d'informations pour un ingénieur ou un étudiant du supérieur. Mes centres d'intérêts sont variés mais tournent autour des mathématiques appliquées et de la mécanique des fluides/solides. Je m’intéresse particulièrement à la mécanique des fluides numérique (CFD).",
      location: 'Basé à Paris, France',
      photoAlt: 'La tour Eiffel à Paris sous un ciel bleu',
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
        educationMinistry: "Ministère de l’Éducation Nationale",
        teacherTitle: 'Professeur de mathématiques',
        teacherBody: 'Enseignement au lycée et au collège. Membre du jury pour le Grand Oral du Baccalauréat.',
        engineerTitle: 'Ingénieur de recherche',
        engieUrl: 'https://innovation.engie.com/fr/lab-crigen-professionnal-services',
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
  ar: {
    nav: {
      home: 'الرئيسية',
      biomechanics: 'الميكانيكا الحيوية',
      mathematics: 'الرياضيات',
      mechanics: 'الميكانيكا',
      blog: 'المدونة',
      languageLabel: 'اختر اللغة',
      menuLabel: 'القائمة',
      logoAlt: 'شعار الموجة',
    },
    placeholder: {
      subtitle: 'الأبحاث والمنشورات',
      heading: 'المحتوى قريبًا',
      body: 'يجري تحديث هذا القسم لإضافة أحدث الأبحاث والمنشورات.',
    },
    biomechanicsPage: {
      subtitle: 'الميكانيكا في خدمة الأنظمة الحية',
      explore: 'استكشف',
      cfdTitle: 'CFD',
      cfdBody: 'ديناميكا الموائع الحسابية: الطرق العددية، وأدوات مثل OpenFOAM، وتطبيقاتها على التدفقات الحيوية.',
    },
    cfd: {
      title: 'CFD',
      subtitle: 'ديناميكا الموائع الحسابية',
      badge: 'قريبًا',
      heading: 'المحتوى في الطريق',
      body: 'يجري إعداد مقالات ودروس حول ديناميكا الموائع الحسابية: معادلات الحفظ، وإنشاء الشبكات، ونماذج الاضطراب، وحالات OpenFOAM خطوة بخطوة. عُد قريبًا!',
      back: 'العودة إلى الميكانيكا الحيوية',
    },
    mechanics: {
      title: 'الميكانيكا',
      subtitle: 'التخصصات والنظريات الأساسية في الميكانيكا',
      explore: 'استكشف',
      cards: [
        {
          title: 'نظرية المنشآت',
          body: 'تحليل سلوك المنشآت الصلبة تحت تأثير أحمال ديناميكية وحرارية متنوعة.',
        },
        {
          title: 'أساسيات ميكانيكا الأوساط المتصلة',
          body: 'المبادئ الأساسية والإجهاد والانفعال وحركيات الأوساط المتصلة.',
        },
        {
          title: 'ميكانيكا الأوساط المتصلة',
          body: 'المفاهيم المتقدمة والمعادلات التأسيسية في ميكانيكا الأوساط المتصلة.',
        },
        {
          title: 'الميكانيكا التحليلية',
          body: 'تطبيق المبادئ الأساسية باستخدام صياغتي لاغرانج وهاملتون.',
        },
      ],
    },
    home: {
      subtitle: 'مهندس باحث في ميكانيكا الموائع والطاقة',
      description: 'أهدف من خلال هذا الموقع إلى مشاركة أعمالي وتقديم مصادر معرفية للمهندسين وطلاب التعليم العالي. تتنوع اهتماماتي وتدور حول الرياضيات التطبيقية وميكانيكا الموائع والمواد الصلبة. وأهتم خصوصًا بديناميكا الموائع الحسابية (CFD).',
      location: 'مقيم في باريس، فرنسا',
      photoAlt: 'برج إيفل في باريس تحت سماء زرقاء',
      contact: 'تواصل معي',
      blog: 'اقرأ مدونتي',
      journeyTitlePrefix: 'مسيرتي',
      journeyTitleSuffix: 'المهنية والأكاديمية',
      researchTitle: 'مجالات',
      domainsTitle: 'البحث',
      verifiedDiploma: 'شهادة موثّقة بتقنية سلسلة الكتل',
      journey: {
        founderTitle: 'مؤسس وباحث',
        founderBody: 'البحث ونشر البرمجيات العلمية.',
        teacherTitle: 'مدرّس رياضيات',
        teacherBody: 'درّست في المرحلتين الإعدادية والثانوية، وشاركت في لجنة تحكيم الامتحان الشفهي للبكالوريا الفرنسية.',
        engineerTitle: 'مهندس باحث',
        engieUrl: 'https://innovation.engie.com/en/lab-crigen-professionnal-services',
        engineerSubject: 'موضوع البحث:',
        engineerBody: 'النمذجة العددية للانتشار الحراري عبر سُمك الجدار الصلب لخزان يعمل في درجات حرارة شديدة الانخفاض.',
        masterTitle: 'ماجستير بحثي في ميكانيكا الموائع',
        bachelorTitle: 'إجازة في الرياضيات التطبيقية',
        educationMinistry: 'وزارة التربية الوطنية الفرنسية',
      },
      domains: {
        explore: 'استكشف الأبحاث',
        biomechanics: 'تطبيق مبادئ الميكانيكا في الطب، مع التركيز على المحاكاة المتقدمة ونمذجة الأنظمة الحيوية ووظائف أعضاء الإنسان لتطوير الرعاية الصحية.',
        mathematics: 'تطوير نماذج رياضية متينة وطرق عددية لحل المسائل الهندسية المعقدة غير الخطية.',
        mechanics: 'دراسة نظرية المنشآت وميكانيكا الأوساط المتصلة والميكانيكا التحليلية.',
      },
    },
    footer: {
      role: 'مهندس باحث في ميكانيكا الموائع والطاقة',
      rights: 'جميع الحقوق محفوظة.',
    },
    titles: {
      biomechanics: 'الميكانيكا الحيوية',
      mathematics: 'الرياضيات',
      structuralTheory: 'نظرية المنشآت',
      continuumMechanics: 'ميكانيكا الأوساط المتصلة',
      blog: 'مدونة الأبحاث',
    },
  },
};

// External organisation link; the last word stays glued to the icon so it never wraps alone
const OrgLink = ({ href, children }) => {
  const words = children.split(' ');
  const last = words.pop();
  return (
    <a className="org-link" href={href} target="_blank" rel="noopener noreferrer">
      {words.length > 0 && `${words.join(' ')} `}
      <span className="org-link-tail">{last}<ExternalLink size={14} /></span>
    </a>
  );
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

const BiomechanicsPage = ({ t }) => (
  <div className="page-header">
    <div className="container">
      <h1 className="gradient-text">{t.titles.biomechanics}</h1>
      <p className="hero-subtitle" style={{marginBottom: 0}}>{t.biomechanicsPage.subtitle}</p>
    </div>
    <div className="container page-content" style={{marginTop: '4rem'}}>
      <div className="grid-cards grid-fill">
        <div className="glass-card research-card accent-sky">
          <div className="card-icon"><Wind size={24} /></div>
          <h3>{t.biomechanicsPage.cfdTitle} <span className="soon-badge">{t.cfd.badge}</span></h3>
          <p>{t.biomechanicsPage.cfdBody}</p>
          <Link to="/biomechanics/cfd" className="read-more">{t.biomechanicsPage.explore} <ArrowRight size={16}/></Link>
        </div>
      </div>
    </div>
  </div>
);

const CfdPage = ({ t }) => (
  <div className="page-header">
    <div className="container">
      <h1 className="gradient-text">{t.cfd.title}</h1>
      <p className="hero-subtitle" style={{marginBottom: 0}}>{t.cfd.subtitle}</p>
    </div>
    <div className="container page-content" style={{marginTop: '4rem'}}>
      <div className="glass-panel empty-state">
        <Clock size={64} />
        <span className="soon-badge">{t.cfd.badge}</span>
        <h2>{t.cfd.heading}</h2>
        <p>{t.cfd.body}</p>
        <Link to="/biomechanics" className="read-more back-link"><ArrowLeft size={16}/> {t.cfd.back}</Link>
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
        <div className="glass-card research-card accent-amber">
          <div className="card-icon"><Building2 size={24} /></div>
          <h3>{t.mechanics.cards[0].title}</h3>
          <p>{t.mechanics.cards[0].body}</p>
          <Link to="/mechanics/structural-theory" className="read-more">{t.mechanics.explore} <ArrowRight size={16}/></Link>
        </div>
        <div className="glass-card research-card accent-sky">
          <div className="card-icon"><Layers size={24} /></div>
          <h3>{t.mechanics.cards[1].title}</h3>
          <p>{t.mechanics.cards[1].body}</p>
          <Link to="/mechanics/basics-of-continuum-mechanics" className="read-more">{t.mechanics.explore} <ArrowRight size={16}/></Link>
        </div>
        <div className="glass-card research-card accent-violet">
          <div className="card-icon"><Box size={24} /></div>
          <h3>{t.mechanics.cards[2].title}</h3>
          <p>{t.mechanics.cards[2].body}</p>
          <Link to="/mechanics/continuum-mechanics" className="read-more">{t.mechanics.explore} <ArrowRight size={16}/></Link>
        </div>
        <div className="glass-card research-card accent-emerald">
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
      <div className="hero-background" aria-hidden="true">
        <LiquidEther colors={['#0284c7', '#7c3aed', '#ec4899']} />
      </div>
      <div className="container hero-intro hero-grid" style={{ position: 'relative', zIndex: 1, pointerEvents: 'none' }}>
        <div className="hero-content" style={{ pointerEvents: 'auto' }}>
          <p className="location-chip"><MapPin size={16} /> {t.home.location}</p>
          <h1 dir="ltr">Walid <span className="gradient-text">LAKAS</span></h1>
          <h2 className="hero-subtitle">{t.home.subtitle}</h2>
          <p className="hero-description">
            {t.home.description}
          </p>
          <div className="hero-actions">
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
        <figure className="hero-photo" style={{ pointerEvents: 'auto' }}>
          <img src="/paris-eiffel.webp" alt={t.home.photoAlt} width="800" height="1280" />
          <figcaption className="hero-photo-badge">
            <MapPin size={16} /> Paris
          </figcaption>
        </figure>
      </div>
    </section>

    <section className="section section-tinted">
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
              <p><OrgLink href="https://pepro.fr">Pepro</OrgLink></p>
              <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>{t.home.journey.founderBody}</p>
            </div>
          </div>
          <div className="timeline-item right">
            <div className="glass-card timeline-content">
              <div className="timeline-date">2025</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                <div style={{ width: '64px', height: '64px', backgroundColor: '#ffffff', borderRadius: '12px', padding: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 2px 8px rgba(0,0,0,0.2)' }}>
                  <img src="/education.png" alt={t.home.journey.educationMinistry} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                </div>
                <h3 style={{ margin: 0 }}>{t.home.journey.teacherTitle}</h3>
              </div>
              <p><OrgLink href="https://www.education.gouv.fr/">{t.home.journey.educationMinistry}</OrgLink></p>
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
              <p><bdi><OrgLink href={t.home.journey.engieUrl}>ENGIE Lab CRIGEN</OrgLink></bdi></p>
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
          <div className="glass-card research-card accent-rose">
            <div className="card-icon"><Droplets size={24} /></div>
            <h3>{t.nav.biomechanics}</h3>
            <p>{t.home.domains.biomechanics}</p>
            <Link to="/biomechanics" className="read-more">{t.home.domains.explore} <ArrowRight size={16}/></Link>
          </div>
          <div className="glass-card research-card accent-violet">
            <div className="card-icon"><FunctionSquare size={24} /></div>
            <h3>{t.nav.mathematics}</h3>
            <p>{t.home.domains.mathematics}</p>
            <Link to="/mathematics" className="read-more">{t.home.domains.explore} <ArrowRight size={16}/></Link>
          </div>
          <div className="glass-card research-card accent-amber">
            <div className="card-icon"><Wrench size={24} /></div>
            <h3>{t.nav.mechanics}</h3>
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
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem('language');
    return Object.hasOwn(translations, savedLanguage) ? savedLanguage : 'en';
  });
  const location = useLocation();
  const t = translations[language];

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    localStorage.setItem('language', language);
  }, [language]);

  const languageSelect = (className) => (
    <select
      className={className}
      value={language}
      onChange={(event) => setLanguage(event.target.value)}
      aria-label={t.nav.languageLabel}
      translate="no"
    >
      <option value="en" lang="en">English</option>
      <option value="fr" lang="fr">Français</option>
      <option value="ar" lang="ar">العربية</option>
    </select>
  );

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
            <img src="/logo.png" alt={t.nav.logoAlt} className="nav-logo-img" />
            <bdi dir="ltr"><span className="gradient-text">W.</span> LAKAS</bdi>
          </Link>
          <ul className="nav-links">
            <li><Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>{t.nav.home}</Link></li>
            <li><Link to="/biomechanics" className={`nav-link ${location.pathname.startsWith('/biomechanics') ? 'active' : ''}`}>{t.nav.biomechanics}</Link></li>
            <li><Link to="/mathematics" className={`nav-link ${location.pathname.startsWith('/mathematics') ? 'active' : ''}`}>{t.nav.mathematics}</Link></li>
            <li><Link to="/mechanics" className={`nav-link ${location.pathname.startsWith('/mechanics') ? 'active' : ''}`}>{t.nav.mechanics}</Link></li>
            <li><Link to="/blog" className={`nav-link ${location.pathname === '/blog' ? 'active' : ''}`}>{t.nav.blog}</Link></li>
          </ul>
          {languageSelect('language-toggle')}

          {/* Mobile menu toggle button */}
          <button 
            className="mobile-menu-btn" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={t.nav.menuLabel}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Responsive Mobile Overlay Menu (Bottom-Up Drawer) */}
        <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
          <div className="mobile-menu-backdrop" onClick={() => setMobileMenuOpen(false)} />
          <div className="mobile-menu-content">
            <div className="drawer-pill" />
            {languageSelect('mobile-language-toggle')}
            <Link to="/" className={`mobile-link ${location.pathname === '/' ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>{t.nav.home}</Link>
            <Link to="/biomechanics" className={`mobile-link ${location.pathname.startsWith('/biomechanics') ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>{t.nav.biomechanics}</Link>
            <Link to="/mathematics" className={`mobile-link ${location.pathname.startsWith('/mathematics') ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>{t.nav.mathematics}</Link>
            <Link to="/mechanics" className={`mobile-link ${location.pathname.startsWith('/mechanics') ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>{t.nav.mechanics}</Link>
            <Link to="/blog" className={`mobile-link ${location.pathname === '/blog' ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>{t.nav.blog}</Link>
          </div>
        </div>
      </nav>

      <main>
        <Routes>
          <Route path="/" element={<Home t={t} />} />
          <Route path="/biomechanics" element={<BiomechanicsPage t={t} />} />
          <Route path="/biomechanics/cfd" element={<CfdPage t={t} />} />
          <Route path="/mathematics" element={<MathematicsPage language={language} />} />
          <Route path="/mathematics/multivariable-functions/jacobian-matrix" element={<JacobianMatrixPage language={language} />} />
          <Route path="/mechanics" element={<MechanicsPage t={t} />} />
          <Route path="/mechanics/structural-theory" element={<PageTemplate title={t.titles.structuralTheory} icon={Building2} t={t} />} />
          <Route path="/mechanics/basics-of-continuum-mechanics" element={<BasicsMMCPage language={language} />} />
          <Route path="/mechanics/basics-of-continuum-mechanics/spherical-deviatoric-parts" element={<SphericalDeviatoricPartsPage language={language} />} />
          <Route path="/mechanics/basics-of-continuum-mechanics/analysis-of-deformation" element={<AnalysisOfDeformationPage language={language} />} />
          <Route path="/mechanics/continuum-mechanics" element={<PageTemplate title={t.titles.continuumMechanics} icon={Box} t={t} />} />
          <Route path="/mechanics/analytical-mechanics" element={<AnalyticalMechanicsPage language={language} />} />
          <Route path="/mechanics/analytical-mechanics/virtual-work-application" element={<VirtualWorkApplicationPage language={language} />} />
          <Route path="/blog" element={<PageTemplate title={t.titles.blog} icon={PenTool} t={t} />} />
        </Routes>
      </main>

      <footer>
        <div className="container">
          <div className="footer-content">
            <div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', marginBottom: '0.5rem' }}>Walid LAKAS</h3>
              <p style={{ color: 'var(--text-secondary)' }}>{t.footer.role}</p>
              <p className="footer-location"><MapPin size={16} /> {t.home.location}</p>
            </div>
            <div className="contact-info">
              <a href="https://www.linkedin.com/in/walid-l-11b09325a/" target="_blank" rel="noopener noreferrer" className="contact-item">
                <LinkedinIcon size={18} /> LinkedIn
              </a>
              <a href="mailto:walid.lks@gmail.com" className="contact-item">
                <Mail size={18} /> <bdi>walid.lks@gmail.com</bdi>
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
