import { Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, ListChecks, Link2, Lightbulb, PenLine, Clock } from 'lucide-react';
import { MathText, BlockMath } from '@/components/MathText';

const R = String.raw;

// Formulas are shared by every language
const M = {
  components: R`f(x) = \big(f_1(x), \dots, f_p(x)\big)`,
  general: R`J_f(a) = \begin{pmatrix}
    \dfrac{\partial f_1}{\partial x_1}(a) & \cdots & \dfrac{\partial f_1}{\partial x_n}(a) \\[1ex]
    \vdots & \ddots & \vdots \\[1ex]
    \dfrac{\partial f_p}{\partial x_1}(a) & \cdots & \dfrac{\partial f_p}{\partial x_n}(a)
  \end{pmatrix}`,
  chain: R`J_{g \circ f}(a) = J_g\big(f(a)\big) \cdot J_f(a)`,
  exF: R`f(x,y) = \left(x^2 + y^2,\; x\sin y,\; y + e^x\right)`,
  exComponents: R`f_1(x,y) = x^2 + y^2, \qquad f_2(x,y) = x\sin y, \qquad f_3(x,y) = y + e^x`,
  exPartials: R`\begin{aligned}
    \frac{\partial f_1}{\partial x}(x,y) &= 2x, &\qquad \frac{\partial f_1}{\partial y}(x,y) &= 2y, \\[1ex]
    \frac{\partial f_2}{\partial x}(x,y) &= \sin y, &\qquad \frac{\partial f_2}{\partial y}(x,y) &= x\cos y, \\[1ex]
    \frac{\partial f_3}{\partial x}(x,y) &= e^x, &\qquad \frac{\partial f_3}{\partial y}(x,y) &= 1
  \end{aligned}`,
  exJ: R`J_f(x,y) = \begin{pmatrix} 2x & 2y \\ \sin y & x\cos y \\ e^x & 1 \end{pmatrix}`,
  exJa: R`J_f(a) = \begin{pmatrix} 2a_1 & 2a_2 \\ \sin a_2 & a_1\cos a_2 \\ e^{a_1} & 1 \end{pmatrix}`,
  ex1f: R`\forall (x,y) \in \mathbb{R}^2, \quad f(x,y) = \left(\cos x - \sin y,\; \sin x + 2\cos y,\; e^x - e^y\right)`,
  ex1g: R`\forall (u,v,w) \in \mathbb{R}^3, \quad g(u,v,w) = u^2 + v^2 + w`,
};

const translations = {
  en: {
    title: R`How to find the Jacobian matrix of a function from $\mathbb{R}^n$ to $\mathbb{R}^p$?`,
    subtitle: 'Functions of Several Real Variables',
    back: 'Back to Mathematics',
    tag: 'Method',
    defHeading: 'Definition',
    def1: R`Let $U$ be an open subset of $\mathbb{R}^n$ and $f : U \to \mathbb{R}^p$ a differentiable map. We write it using its $p$ component functions $f_1, \dots, f_p$: for every $x = (x_1, \dots, x_n) \in U$,`,
    def2: R`The Jacobian matrix of $f$ at a point $a \in U$, denoted $J_f(a)$, is the matrix with $p$ rows and $n$ columns whose entry in row $i$ and column $j$ is the partial derivative $\frac{\partial f_i}{\partial x_j}(a)$:`,
    memo: R`Memory aid: each row corresponds to one component function $f_i$, each column to one variable $x_j$.`,
    stepsHeading: 'The method in 4 steps',
    steps: [
      R`Identify the component functions $f_1, \dots, f_p$.`,
      R`Compute every partial derivative $\frac{\partial f_i}{\partial x_j}$ (there are $p \times n$ of them).`,
      R`Arrange them in the matrix: row $i$ holds the derivatives of $f_i$, column $j$ the derivatives with respect to $x_j$.`,
      R`Evaluate at the required point $a$.`,
    ],
    chainHeading: 'Composition: the chain rule',
    chain1: R`Let $V$ be an open subset of $\mathbb{R}^p$ and $g : V \to \mathbb{R}^q$ differentiable on $V$. If $f(U) \subset V$, then for every $a \in U$:`,
    chain2: R`The sizes match: a $q \times p$ matrix times a $p \times n$ matrix gives a $q \times n$ matrix. Mind the order of the product, and note that $J_g$ is evaluated at $f(a)$, not at $a$.`,
    exampleHeading: 'Worked example',
    ex1: R`Consider the map $f : \mathbb{R}^2 \to \mathbb{R}^3$ defined by:`,
    ex2: R`Let us find its Jacobian matrix at a point $a = (a_1, a_2)$. Here $n = 2$ and $p = 3$, so the matrix has 3 rows and 2 columns.`,
    exStep1: 'Step 1: the component functions',
    exStep2: 'Step 2: the partial derivatives',
    exStep3: 'Step 3: arrange them in the matrix',
    exStep4: R`Step 4: evaluate at $a = (a_1, a_2)$`,
    exercisesHeading: 'Exercises',
    exA: R`Let $f$ be the map from $\mathbb{R}^2$ to $\mathbb{R}^3$ defined by:`,
    exAQ: R`Find the Jacobian matrix $J_f(x,y)$ of $f$ at the point $(x,y)$.`,
    exB: R`Let $g$ be the map from $\mathbb{R}^3$ to $\mathbb{R}$ defined by:`,
    exBQ: R`Find the Jacobian matrix $J_g(u,v,w)$ of $g$ at the point $(u,v,w)$.`,
    exC: R`Find the Jacobian matrix $J_{g \circ f}(x,y)$ of $g \circ f$ at the point $(x,y)$:`,
    exCi: R`by writing $g \circ f$ explicitly;`,
    exCii: 'using a matrix product.',
    correctionSoon: 'Solutions coming soon.',
  },
  fr: {
    title: R`Comment déterminer la matrice jacobienne d’une fonction de $\mathbb{R}^n$ dans $\mathbb{R}^p$ ?`,
    subtitle: 'Fonctions de plusieurs variables réelles',
    back: 'Retour aux mathématiques',
    tag: 'Méthode',
    defHeading: 'Définition',
    def1: R`Soit $U$ un ouvert de $\mathbb{R}^n$ et $f : U \to \mathbb{R}^p$ une application différentiable. On l’écrit à l’aide de ses $p$ fonctions coordonnées $f_1, \dots, f_p$ : pour tout $x = (x_1, \dots, x_n) \in U$,`,
    def2: R`La matrice jacobienne de $f$ en un point $a \in U$, notée $J_f(a)$, est la matrice à $p$ lignes et $n$ colonnes dont le coefficient situé sur la ligne $i$ et la colonne $j$ est la dérivée partielle $\frac{\partial f_i}{\partial x_j}(a)$ :`,
    memo: R`Moyen mnémotechnique : chaque ligne correspond à une fonction coordonnée $f_i$, chaque colonne à une variable $x_j$.`,
    stepsHeading: 'La méthode en 4 étapes',
    steps: [
      R`Identifier les fonctions coordonnées $f_1, \dots, f_p$.`,
      R`Calculer toutes les dérivées partielles $\frac{\partial f_i}{\partial x_j}$ (il y en a $p \times n$).`,
      R`Les ranger dans la matrice : la ligne $i$ contient les dérivées de $f_i$, la colonne $j$ les dérivées par rapport à $x_j$.`,
      R`Évaluer au point $a$ voulu.`,
    ],
    chainHeading: 'Composition : la règle de la chaîne',
    chain1: R`Soit $V$ un ouvert de $\mathbb{R}^p$ et $g : V \to \mathbb{R}^q$ une application différentiable sur $V$. Si $f(U) \subset V$, alors pour tout $a \in U$ :`,
    chain2: R`Les dimensions sont cohérentes : une matrice $q \times p$ multipliée par une matrice $p \times n$ donne une matrice $q \times n$. Attention à l’ordre du produit, et au fait que $J_g$ est évaluée en $f(a)$, et non en $a$.`,
    exampleHeading: 'Exemple détaillé',
    ex1: R`Considérons l’application $f : \mathbb{R}^2 \to \mathbb{R}^3$ définie par :`,
    ex2: R`Cherchons sa matrice jacobienne en un point $a = (a_1, a_2)$. Ici $n = 2$ et $p = 3$ : la matrice a donc 3 lignes et 2 colonnes.`,
    exStep1: 'Étape 1 : les fonctions coordonnées',
    exStep2: 'Étape 2 : les dérivées partielles',
    exStep3: 'Étape 3 : on les range dans la matrice',
    exStep4: R`Étape 4 : on évalue en $a = (a_1, a_2)$`,
    exercisesHeading: 'Exercices',
    exA: R`Soit $f$ l’application de $\mathbb{R}^2$ dans $\mathbb{R}^3$ définie par :`,
    exAQ: R`Déterminer la matrice jacobienne $J_f(x,y)$ de $f$ au point $(x,y)$.`,
    exB: R`Soit $g$ l’application de $\mathbb{R}^3$ dans $\mathbb{R}$ définie par :`,
    exBQ: R`Déterminer la matrice jacobienne $J_g(u,v,w)$ de $g$ au point $(u,v,w)$.`,
    exC: R`Déterminer la matrice jacobienne $J_{g \circ f}(x,y)$ de $g \circ f$ au point $(x,y)$ :`,
    exCi: R`en explicitant $g \circ f$ ;`,
    exCii: 'au moyen d’un produit de matrices.',
    correctionSoon: 'Correction à venir.',
  },
  ar: {
    title: R`كيف نحدّد المصفوفة اليعقوبية لدالة من $\mathbb{R}^n$ إلى $\mathbb{R}^p$؟`,
    subtitle: 'دوال بعدة متغيرات حقيقية',
    back: 'العودة إلى الرياضيات',
    tag: 'طريقة',
    defHeading: 'التعريف',
    def1: R`لتكن $U$ مجموعة مفتوحة من $\mathbb{R}^n$ و$f : U \to \mathbb{R}^p$ دالة قابلة للاشتقاق. نكتبها بواسطة دوالها الإحداثية $f_1, \dots, f_p$ وعددها $p$: لكل $x = (x_1, \dots, x_n) \in U$،`,
    def2: R`المصفوفة اليعقوبية للدالة $f$ عند نقطة $a \in U$، ونرمز لها بـ $J_f(a)$، هي المصفوفة ذات $p$ صفًا و$n$ عمودًا، وعنصرها في الصف $i$ والعمود $j$ هو المشتقة الجزئية $\frac{\partial f_i}{\partial x_j}(a)$:`,
    memo: R`للتذكّر: كل صف يقابل دالة إحداثية $f_i$، وكل عمود يقابل متغيرًا $x_j$.`,
    stepsHeading: 'الطريقة في أربع خطوات',
    steps: [
      R`نحدّد الدوال الإحداثية $f_1, \dots, f_p$.`,
      R`نحسب جميع المشتقات الجزئية $\frac{\partial f_i}{\partial x_j}$ (وعددها $p \times n$).`,
      R`نرتّبها في المصفوفة: يحتوي الصف $i$ على مشتقات $f_i$، ويحتوي العمود $j$ على المشتقات بالنسبة إلى $x_j$.`,
      R`نعوّض بالنقطة المطلوبة $a$.`,
    ],
    chainHeading: 'تركيب الدوال: قاعدة السلسلة',
    chain1: R`لتكن $V$ مجموعة مفتوحة من $\mathbb{R}^p$ و$g : V \to \mathbb{R}^q$ دالة قابلة للاشتقاق على $V$. إذا كان $f(U) \subset V$، فإنه لكل $a \in U$:`,
    chain2: R`الأبعاد متوافقة: ضرب مصفوفة $q \times p$ في مصفوفة $p \times n$ يعطي مصفوفة $q \times n$. انتبه إلى ترتيب الضرب، وإلى أن $J_g$ تُحسب عند $f(a)$ لا عند $a$.`,
    exampleHeading: 'مثال محلول',
    ex1: R`لنعتبر الدالة $f : \mathbb{R}^2 \to \mathbb{R}^3$ المعرّفة بما يلي:`,
    ex2: R`لنحدّد مصفوفتها اليعقوبية عند نقطة $a = (a_1, a_2)$. هنا $n = 2$ و$p = 3$، إذن للمصفوفة 3 صفوف وعمودان.`,
    exStep1: 'الخطوة 1: الدوال الإحداثية',
    exStep2: 'الخطوة 2: المشتقات الجزئية',
    exStep3: 'الخطوة 3: ترتيبها في المصفوفة',
    exStep4: R`الخطوة 4: التعويض بالنقطة $a = (a_1, a_2)$`,
    exercisesHeading: 'تمارين',
    exA: R`لتكن $f$ الدالة من $\mathbb{R}^2$ إلى $\mathbb{R}^3$ المعرّفة بما يلي:`,
    exAQ: R`حدّد المصفوفة اليعقوبية $J_f(x,y)$ للدالة $f$ عند النقطة $(x,y)$.`,
    exB: R`لتكن $g$ الدالة من $\mathbb{R}^3$ إلى $\mathbb{R}$ المعرّفة بما يلي:`,
    exBQ: R`حدّد المصفوفة اليعقوبية $J_g(u,v,w)$ للدالة $g$ عند النقطة $(u,v,w)$.`,
    exC: R`حدّد المصفوفة اليعقوبية $J_{g \circ f}(x,y)$ للدالة $g \circ f$ عند النقطة $(x,y)$:`,
    exCi: R`بكتابة $g \circ f$ صراحةً؛`,
    exCii: 'باستعمال جداء المصفوفات.',
    correctionSoon: 'الحل قريبًا.',
  },
};

const JacobianMatrixPage = ({ language = 'en' }) => {
  const t = translations[language] || translations.en;

  return (
    <div className="page-header">
      <div className="container">
        <h1 className="gradient-text page-title-math"><MathText text={t.title} /></h1>
        <p className="hero-subtitle" style={{ marginBottom: 0 }}>{t.subtitle}</p>
      </div>

      <div className="container page-content" style={{ marginTop: '4rem', textAlign: 'start' }}>
        <Link to="/mathematics" className="read-more back-nav">
          <ArrowLeft size={16} /> {t.back}
        </Link>

        <article className="glass-panel math-article">
          <p className="article-tag"><BookOpen size={18} /> {t.tag}</p>

          <h2>{t.defHeading}</h2>
          <p><MathText text={t.def1} /></p>
          <BlockMath math={M.components} />
          <p><MathText text={t.def2} /></p>
          <BlockMath math={M.general} />
          <p className="callout"><Lightbulb size={18} /> <span><MathText text={t.memo} /></span></p>

          <h2><ListChecks size={22} /> {t.stepsHeading}</h2>
          <ol className="method-steps">
            {t.steps.map((step, i) => (
              <li key={i}><MathText text={step} /></li>
            ))}
          </ol>

          <h2><Link2 size={22} /> {t.chainHeading}</h2>
          <p><MathText text={t.chain1} /></p>
          <BlockMath math={M.chain} />
          <p><MathText text={t.chain2} /></p>
        </article>

        <article className="glass-panel math-article">
          <h2>{t.exampleHeading}</h2>
          <p><MathText text={t.ex1} /></p>
          <BlockMath math={M.exF} />
          <p><MathText text={t.ex2} /></p>

          <h3>{t.exStep1}</h3>
          <BlockMath math={M.exComponents} />
          <h3>{t.exStep2}</h3>
          <BlockMath math={M.exPartials} />
          <h3>{t.exStep3}</h3>
          <BlockMath math={M.exJ} />
          <h3><MathText text={t.exStep4} /></h3>
          <div className="result-box">
            <BlockMath math={M.exJa} />
          </div>
        </article>

        <article className="glass-panel math-article">
          <h2><PenLine size={22} /> {t.exercisesHeading}</h2>
          <div className="exercise">
            <p><strong>a.</strong> <MathText text={t.exA} /></p>
            <BlockMath math={M.ex1f} />
            <p><MathText text={t.exAQ} /></p>
          </div>
          <div className="exercise">
            <p><strong>b.</strong> <MathText text={t.exB} /></p>
            <BlockMath math={M.ex1g} />
            <p><MathText text={t.exBQ} /></p>
          </div>
          <div className="exercise">
            <p><strong>c.</strong> <MathText text={t.exC} /></p>
            <p className="sub-item">(i) <MathText text={t.exCi} /></p>
            <p className="sub-item">(ii) {t.exCii}</p>
          </div>
          <p className="soon-note"><Clock size={16} /> {t.correctionSoon}</p>
        </article>
      </div>
    </div>
  );
};

export default JacobianMatrixPage;
