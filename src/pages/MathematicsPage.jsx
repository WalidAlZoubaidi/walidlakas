import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Sigma, Grid3x3, Waves, AudioWaveform, ArrowDownUp, SquareFunction, BookOpen } from 'lucide-react';
import { MathText } from '@/components/MathText';

const R = String.raw;

const ui = {
  en: {
    title: 'Mathematics',
    subtitle: 'Methods, reminders and exercises',
    explore: 'Explore',
    back: 'Back to Mathematics',
    about: 'About this chapter',
    methodsPrefix: 'Methods',
    methodsSuffix: '& worked examples',
    methodsIntro: 'Each sheet answers one question: a method, a worked example and, when available, exercises with solutions.',
    cta: 'Read the method',
    count: (n) => `${n} method${n > 1 ? 's' : ''}`,
  },
  fr: {
    title: 'Mathématiques',
    subtitle: 'Méthodes, rappels et exercices',
    explore: 'Explorer',
    back: 'Retour aux mathématiques',
    about: 'À propos de ce chapitre',
    methodsPrefix: 'Méthodes',
    methodsSuffix: '& exemples détaillés',
    methodsIntro: 'Chaque fiche répond à une question : une méthode, un exemple détaillé et, quand il y en a, des exercices corrigés.',
    cta: 'Lire la méthode',
    count: (n) => `${n} méthode${n > 1 ? 's' : ''}`,
  },
  ar: {
    title: 'الرياضيات',
    subtitle: 'طرق ومراجعات وتمارين',
    explore: 'استكشف',
    back: 'العودة إلى الرياضيات',
    about: 'حول هذا الفصل',
    methodsPrefix: 'طرق',
    methodsSuffix: 'وأمثلة محلولة',
    methodsIntro: 'كل بطاقة تجيب عن سؤال واحد: طريقة، ومثال محلول، وتمارين مع حلولها حين تتوفر.',
    cta: 'اقرأ الطريقة',
    count: (n) => (n === 1 ? 'طريقة واحدة' : `${n} طرق`),
  },
};

// Chapters and their method sheets
export const mathChapters = [
  {
    slug: 'multivariable-functions',
    icon: Sigma,
    accent: 'accent-violet',
    title: {
      en: 'Functions of Several Real Variables',
      fr: 'Fonctions de plusieurs variables réelles',
      ar: 'دوال لعدة متغيرات حقيقية',
    },
    intro: {
      en: 'Differential calculus in several variables: partial derivatives, differentials and Jacobian matrices.',
      fr: 'Calcul différentiel à plusieurs variables : dérivées partielles, différentielles et matrices jacobiennes.',
      ar: 'الحساب التفاضلي للدوال ذات المتغيرات المتعددة: المشتقات الجزئية والتفاضلات والمصفوفات اليعقوبية.',
    },
    about: {
      en: 'Most physical quantities depend on several variables at once: position, time, temperature… This chapter extends differential calculus to such functions. The Jacobian matrix gathers all partial derivatives and describes how a function locally transforms space: it is at the heart of continuum mechanics, numerical methods and machine learning.',
      fr: 'La plupart des grandeurs physiques dépendent de plusieurs variables à la fois : position, temps, température… Ce chapitre étend le calcul différentiel à ces fonctions. La matrice jacobienne rassemble toutes les dérivées partielles et décrit comment une fonction transforme localement l’espace : elle est au cœur de la mécanique des milieux continus, des méthodes numériques et de l’apprentissage automatique.',
      ar: 'تتعلّق معظم المقادير الفيزيائية بعدة متغيرات في آن واحد: الموضع والزمن ودرجة الحرارة… يوسّع هذا الفصل الحساب التفاضلي إلى مثل هذه الدوال. تجمع المصفوفة اليعقوبية كل المشتقات الجزئية وتصف كيف تحوّل الدالة الفضاء محليًّا، وهي في صميم ميكانيكا الأوساط المتصلة والطرق العددية وتعلّم الآلة.',
    },
    methods: [
      {
        slug: 'jacobian-matrix',
        icon: Grid3x3,
        title: {
          en: R`How to find the Jacobian matrix of a function from $\mathbb{R}^n$ to $\mathbb{R}^p$?`,
          fr: R`Comment déterminer la matrice jacobienne d’une fonction de $\mathbb{R}^n$ dans $\mathbb{R}^p$ ?`,
          ar: R`كيف نحدّد المصفوفة اليعقوبية لدالة من $\mathbb{R}^n$ إلى $\mathbb{R}^p$؟`,
        },
        body: {
          en: 'Definition, a 4-step method, the chain rule, a worked example and exercises.',
          fr: 'Définition, méthode en 4 étapes, règle de la chaîne, exemple détaillé et exercices.',
          ar: 'التعريف، وطريقة من أربع خطوات، وقاعدة السلسلة، ومثال محلول، وتمارين.',
        },
      },
    ],
  },
  {
    slug: 'fourier-series',
    icon: Waves,
    accent: 'accent-amber',
    title: {
      en: 'Fourier Series',
      fr: 'Séries de Fourier',
      ar: 'متسلسلات فورييه',
    },
    intro: {
      en: 'Decomposing a periodic function into a sum of sines and cosines.',
      fr: 'Décomposer une fonction périodique en une somme de sinus et de cosinus.',
      ar: 'تفكيك دالة دورية إلى مجموع من الجيوب وجيوب التمام.',
    },
    about: {
      en: 'Any reasonable periodic signal can be written as a sum of sines and cosines of increasing frequencies. Fourier series give the recipe: the coefficients measure how much of each frequency the signal contains. They are used in vibration analysis, acoustics, signal processing and to solve the heat equation.',
      fr: 'Tout signal périodique raisonnable peut s’écrire comme une somme de sinus et de cosinus de fréquences croissantes. Les séries de Fourier en donnent la recette : les coefficients mesurent la part de chaque fréquence dans le signal. On les utilise en analyse vibratoire, en acoustique, en traitement du signal et pour résoudre l’équation de la chaleur.',
      ar: 'يمكن كتابة كل إشارة دورية معقولة كمجموع من الجيوب وجيوب التمام بترددات متزايدة. وتعطي متسلسلات فورييه الوصفة: فالمعاملات تقيس حصة كل تردد في الإشارة. وتُستعمل في تحليل الاهتزازات والصوتيات ومعالجة الإشارة ولحلّ معادلة الحرارة.',
    },
    methods: [
      {
        slug: 'fourier-coefficients',
        icon: AudioWaveform,
        title: {
          en: 'How to find the Fourier coefficients of a periodic function?',
          fr: 'Comment déterminer les coefficients de Fourier d’une fonction périodique ?',
          ar: 'كيف نحدّد معاملات فورييه لدالة دورية؟',
        },
        body: {
          en: 'Definitions of aₙ, bₙ and cₙ, using parity, and a worked example on a square wave.',
          fr: 'Définitions de aₙ, bₙ et cₙ, utilisation de la parité et un exemple détaillé sur un signal créneau.',
          ar: 'تعريف المعاملات aₙ و bₙ و cₙ، واستعمال الزوجية، ومثال محلول على إشارة مربّعة.',
        },
      },
    ],
  },
  {
    slug: 'laplace-transform',
    icon: ArrowDownUp,
    accent: 'accent-emerald',
    title: {
      en: 'Laplace Transform',
      fr: 'Transformée de Laplace',
      ar: 'تحويل لابلاس',
    },
    intro: {
      en: 'Turning differential equations into algebraic equations.',
      fr: 'Transformer des équations différentielles en équations algébriques.',
      ar: 'تحويل المعادلات التفاضلية إلى معادلات جبرية.',
    },
    about: {
      en: 'The Laplace transform moves a problem into a world where differentiating becomes multiplying. Linear differential equations then become algebraic equations, with the initial conditions built in. It is the everyday tool of control engineering, electrical circuits and vibration analysis, and it is used to design boundary conditions in blood flow simulations.',
      fr: 'La transformée de Laplace fait passer un problème dans un monde où dériver devient multiplier. Les équations différentielles linéaires deviennent alors des équations algébriques, avec les conditions initiales intégrées d’emblée. C’est l’outil quotidien de l’automatique, des circuits électriques et de l’analyse vibratoire, et elle sert à concevoir des conditions aux limites en simulation sanguine.',
      ar: 'ينقل تحويل لابلاس المسألة إلى عالم يصبح فيه الاشتقاق ضربًا، فتتحوّل المعادلات التفاضلية الخطية إلى معادلات جبرية مع إدماج الشروط الابتدائية منذ البداية. إنه الأداة اليومية في علم التحكّم والدارات الكهربائية وتحليل الاهتزازات، ويُستعمل لتصميم الشروط الحدّية في محاكاة جريان الدم.',
    },
    methods: [
      {
        slug: 'solving-linear-odes',
        icon: SquareFunction,
        title: {
          en: 'How to solve a linear differential equation using the Laplace transform?',
          fr: 'Comment résoudre une équation différentielle linéaire en utilisant la transformée de Laplace ?',
          ar: 'كيف نحلّ معادلة تفاضلية خطية باستعمال تحويل لابلاس؟',
        },
        body: {
          en: 'Every step explained: definition, where the derivative formulas come from, usual transforms, the method and a fully detailed example.',
          fr: 'Chaque étape expliquée : définition, origine des formules des dérivées, transformées usuelles, méthode et exemple entièrement détaillé.',
          ar: 'كل خطوة مشروحة: التعريف، ومصدر صيغ المشتقات، والتحويلات المعتادة، والطريقة، ومثال مفصّل بالكامل.',
        },
      },
    ],
  },
];

const pick = (field, language) => field[language] ?? field.en;

// Chapter grid, laid out like the Mechanics page
const MathematicsPage = ({ language = 'en' }) => {
  const t = ui[language] || ui.en;

  return (
    <div className="page-header">
      <div className="container">
        <h1 className="gradient-text">{t.title}</h1>
        <p className="hero-subtitle" style={{ marginBottom: 0 }}>{t.subtitle}</p>
      </div>
      <div className="container page-content" style={{ marginTop: '4rem' }}>
        <div className="grid-cards">
          {mathChapters.map(({ slug, icon: Icon, accent, title, intro, methods }) => (
            <div key={slug} className={`glass-card research-card ${accent}`}>
              <div className="card-icon"><Icon size={24} /></div>
              <h3>{pick(title, language)}</h3>
              <p>{pick(intro, language)}</p>
              <p className="chapter-count"><BookOpen size={14} /> {t.count(methods.length)}</p>
              <Link to={`/mathematics/${slug}`} className="read-more">
                {t.explore} <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// One chapter: introduction and its method sheets
export const MathChapterPage = ({ language = 'en' }) => {
  const { chapter: chapterSlug } = useParams();
  const chapter = mathChapters.find((c) => c.slug === chapterSlug);
  if (!chapter) return <Navigate to="/mathematics" replace />;

  const t = ui[language] || ui.en;
  const { icon: Icon, accent } = chapter;

  return (
    <div className="page-header">
      <div className="container">
        <h1 className="gradient-text">{pick(chapter.title, language)}</h1>
        <p className="hero-subtitle" style={{ marginBottom: 0 }}>{pick(chapter.intro, language)}</p>
      </div>
      <div className="container page-content" style={{ marginTop: '4rem', textAlign: 'start' }}>
        <Link to="/mathematics" className="read-more back-nav">
          <ArrowLeft size={16} /> {t.back}
        </Link>

        <div className="glass-panel" style={{ padding: '3rem', marginBottom: '3rem' }}>
          <h2 style={{ marginBottom: '1.5rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span className={`card-icon ${accent}`} style={{ marginBottom: 0 }}><Icon size={24} /></span> {t.about}
          </h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
            {pick(chapter.about, language)}
          </p>
        </div>

        <h2 style={{ marginBottom: '0.5rem' }}><span className="gradient-text">{t.methodsPrefix}</span> {t.methodsSuffix}</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>{t.methodsIntro}</p>
        <div className="grid-cards grid-fill">
          {chapter.methods.map(({ slug, icon: MethodIcon, title, body }) => (
            <div key={slug} className={`glass-card research-card ${accent}`}>
              <div className="card-icon"><MethodIcon size={24} /></div>
              <h3><MathText text={pick(title, language)} /></h3>
              <p>{pick(body, language)}</p>
              <Link to={`/mathematics/${chapter.slug}/${slug}`} className="read-more">
                {t.cta} <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MathematicsPage;
