import { Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, Lightbulb, Scale, LineChart } from 'lucide-react';
import { MathText, BlockMath } from '@/components/MathText';

const R = String.raw;

// Formulas are shared by every language
const M = {
  omega: R`\omega = \frac{2\pi}{T}`,
  an: R`\forall n \in \mathbb{N}, \quad a_n = \frac{2}{T}\int_0^T f(x)\cos(n\omega x)\,dx = \frac{2}{T}\int_{-T/2}^{T/2} f(x)\cos(n\omega x)\,dx`,
  bn: R`\forall n \in \mathbb{N}^*, \quad b_n = \frac{2}{T}\int_0^T f(x)\sin(n\omega x)\,dx = \frac{2}{T}\int_{-T/2}^{T/2} f(x)\sin(n\omega x)\,dx`,
  cn: R`\forall n \in \mathbb{Z}, \quad c_n = \frac{1}{T}\int_0^T f(x)\,e^{-in\omega x}\,dx`,
  even: R`\forall n \in \mathbb{N}^*, \; b_n = 0 \qquad \text{and} \qquad \forall n \in \mathbb{N}, \; a_n = \frac{4}{T}\int_0^{T/2} f(x)\cos(n\omega x)\,dx`,
  odd: R`\forall n \in \mathbb{N}, \; a_n = 0 \qquad \text{and} \qquad \forall n \in \mathbb{N}^*, \; b_n = \frac{4}{T}\int_0^{T/2} f(x)\sin(n\omega x)\,dx`,
  exF: R`f(x) = \begin{cases} 0 & \text{if } x \in \left]-\pi, 0\right] \\ 1 & \text{if } x \in \left]0, \pi\right] \end{cases}`,
  exA0: R`a_0 = \frac{2}{2\pi}\int_{-\pi}^{\pi} f(t)\,dt = \frac{1}{\pi}\int_0^{\pi} 1\,dt = 1`,
  exAn: R`a_n = \frac{2}{2\pi}\int_{-\pi}^{\pi} f(t)\cos(nt)\,dt
    = \frac{1}{\pi}\left(\int_{-\pi}^{0} 0 \cdot \cos(nt)\,dt + \int_0^{\pi} 1 \cdot \cos(nt)\,dt\right)
    = \frac{1}{n\pi}\Big[\sin(nt)\Big]_0^{\pi} = 0`,
  exBn: R`b_n = \frac{2}{2\pi}\int_{-\pi}^{\pi} f(t)\sin(nt)\,dt = \frac{1}{\pi}\int_0^{\pi} \sin(nt)\,dt
    = -\frac{1}{n\pi}\Big[\cos(nt)\Big]_0^{\pi} = \frac{1 - (-1)^n}{n\pi}`,
  exBnCases: R`b_{2k} = 0 \qquad \text{and} \qquad b_{2k+1} = \frac{2}{(2k+1)\pi}`,
};

// \text{...} inside formulas follows the page language
const WORDS = {
  en: { and: 'and', if: 'if' },
  fr: { and: 'et', if: 'si' },
  ar: { and: 'and', if: 'if' },
};
const localize = (math, lang) => {
  const w = WORDS[lang] || WORDS.en;
  return math.replaceAll(R`\text{and}`, R`\text{${w.and}}`).replaceAll(R`\text{if }`, R`\text{${w.if} }`);
};

const translations = {
  en: {
    title: 'How to find the Fourier coefficients of a periodic function?',
    subtitle: 'Fourier Series',
    back: 'Back to Mathematics',
    tag: 'Method',
    defHeading: 'Definition',
    def1: R`Let $f$ be a function from $\mathbb{R}$ to $\mathbb{R}$, $T$-periodic and integrable on $[0, T]$. We set:`,
    def2: R`The Fourier coefficients of $f$ are defined by:`,
    defNote: R`Since $f$ is $T$-periodic, the integral can be taken over any interval of length $T$: $[0, T]$ or $[-T/2, T/2]$, whichever makes the computation easier.`,
    parityHeading: 'Remark: using parity',
    even: R`If $f$ is even:`,
    odd: R`If $f$ is odd:`,
    parityTip: 'Always check the parity of f first: it halves the work.',
    exampleHeading: 'Example',
    ex1: R`Find the Fourier coefficients of the $2\pi$-periodic function $f : \mathbb{R} \to \mathbb{R}$ defined on $]-\pi, \pi]$ by:`,
    graphCaption: R`Graph of $f$ (square wave)`,
    ex2: R`$f$ is piecewise continuous on $[-\pi, \pi]$, hence integrable on $[-\pi, \pi]$. Here $T = 2\pi$, so $\omega = 1$. Note that $f$ is neither even nor odd: we must compute both $a_n$ and $b_n$.`,
    exStep: 'Computing the Fourier coefficients',
    exA0: R`Coefficient $a_0$:`,
    exAll: R`For all $n \in \mathbb{N}^*$:`,
    exCases: R`Since $(-1)^n = 1$ when $n$ is even and $-1$ when $n$ is odd, for all $k \in \mathbb{N}$:`,
  },
  fr: {
    title: 'Comment déterminer les coefficients de Fourier d’une fonction périodique ?',
    subtitle: 'Séries de Fourier',
    back: 'Retour aux mathématiques',
    tag: 'Méthode',
    defHeading: 'Définition',
    def1: R`Soit $f$ une fonction de $\mathbb{R}$ dans $\mathbb{R}$, $T$-périodique et intégrable sur $[0, T]$. On pose :`,
    def2: R`Les coefficients de Fourier de $f$ sont définis par :`,
    defNote: R`Comme $f$ est $T$-périodique, on peut intégrer sur n’importe quel intervalle de longueur $T$ : $[0, T]$ ou $[-T/2, T/2]$, selon ce qui simplifie le calcul.`,
    parityHeading: 'Remarque : utiliser la parité',
    even: R`Si $f$ est paire :`,
    odd: R`Si $f$ est impaire :`,
    parityTip: 'Pensez toujours à étudier la parité de f en premier : cela divise le travail par deux.',
    exampleHeading: 'Exemple',
    ex1: R`Déterminer les coefficients de Fourier de la fonction $f : \mathbb{R} \to \mathbb{R}$, $2\pi$-périodique, définie sur $]-\pi, \pi]$ par :`,
    graphCaption: R`Graphe de $f$ (signal créneau)`,
    ex2: R`$f$ est continue par morceaux sur $[-\pi, \pi]$, donc $f$ est intégrable sur $[-\pi, \pi]$. Ici $T = 2\pi$, donc $\omega = 1$. Remarquons que $f$ n’est ni paire ni impaire : il faut calculer à la fois les $a_n$ et les $b_n$.`,
    exStep: 'Calcul des coefficients de Fourier',
    exA0: R`Coefficient $a_0$ :`,
    exAll: R`Pour tout $n \in \mathbb{N}^*$, on a :`,
    exCases: R`Comme $(-1)^n$ vaut $1$ si $n$ est pair et $-1$ si $n$ est impair, pour tout $k \in \mathbb{N}$ :`,
  },
  ar: {
    title: 'كيف نحدّد معاملات فورييه لدالة دورية؟',
    subtitle: 'متسلسلات فورييه',
    back: 'العودة إلى الرياضيات',
    tag: 'طريقة',
    defHeading: 'التعريف',
    def1: R`لتكن $f$ دالة من $\mathbb{R}$ إلى $\mathbb{R}$، دورية دورها $T$ وقابلة للتكامل على $[0, T]$. نضع:`,
    def2: R`معاملات فورييه للدالة $f$ معرّفة بما يلي:`,
    defNote: R`بما أن $f$ دورية دورها $T$، يمكن التكامل على أي مجال طوله $T$، مثل $[0, T]$ أو $[-T/2, T/2]$، حسب ما يسهّل الحساب.`,
    parityHeading: 'ملاحظة: استعمال الزوجية',
    even: R`إذا كانت $f$ زوجية:`,
    odd: R`إذا كانت $f$ فردية:`,
    parityTip: 'ادرس دائمًا زوجية الدالة أولًا: فذلك يختصر نصف العمل.',
    exampleHeading: 'مثال',
    ex1: R`حدّد معاملات فورييه للدالة $f : \mathbb{R} \to \mathbb{R}$، الدورية التي دورها $2\pi$، والمعرّفة على $]-\pi, \pi]$ بما يلي:`,
    graphCaption: R`التمثيل البياني للدالة $f$ (إشارة مربّعة)`,
    ex2: R`الدالة $f$ متصلة على أجزاء على $[-\pi, \pi]$، إذن هي قابلة للتكامل على $[-\pi, \pi]$. لدينا هنا $T = 2\pi$، إذن $\omega = 1$. نلاحظ أن $f$ ليست زوجية ولا فردية، لذا يجب حساب المعاملات $a_n$ و $b_n$ معًا.`,
    exStep: 'حساب معاملات فورييه',
    exA0: R`المعامل $a_0$:`,
    exAll: R`لكل $n$ من $\mathbb{N}^*$:`,
    exCases: R`بما أن $(-1)^n$ يساوي $1$ إذا كان $n$ زوجيًّا و $-1$ إذا كان $n$ فرديًّا، فإنه لكل $k$ من $\mathbb{N}$:`,
  },
};

// Square wave: f = 1 on ]2kπ, (2k+1)π], f = 0 on ](2k-1)π, 2kπ], drawn on [-3π, 3π]
const SquareWaveGraph = () => {
  const X0 = 40;
  const PI = 90; // pixels per π
  const Y0 = 130; // y = 0
  const Y1 = 50; // y = 1
  const px = (k) => X0 + (k + 3) * PI; // k in units of π
  const segments = [-3, -2, -1, 0, 1, 2].map((k) => ({ from: k, to: k + 1, y: ((k % 2) + 2) % 2 === 0 ? Y1 : Y0 }));
  const ticks = [-3, -2, -1, 0, 1, 2, 3];
  const label = (k) => (k === 0 ? '0' : `${k < 0 ? '−' : ''}${Math.abs(k) === 1 ? '' : Math.abs(k)}π`);

  return (
    <svg className="fourier-graph" viewBox="0 0 620 170" role="img" aria-label="f" dir="ltr">
      <line x1="20" y1={Y0} x2="605" y2={Y0} className="axis" />
      <polygon points={`605,${Y0} 597,${Y0 - 4} 597,${Y0 + 4}`} className="axis-head" />
      <line x1={px(0)} y1="160" x2={px(0)} y2="15" className="axis" />
      <polygon points={`${px(0)},15 ${px(0) - 4},23 ${px(0) + 4},23`} className="axis-head" />
      <line x1={px(0) - 5} y1={Y1} x2={px(0) + 5} y2={Y1} className="axis" />
      <text x={px(0) - 10} y={Y1 + 4} textAnchor="end" className="tick">1</text>
      {ticks.filter((k) => k !== 0).map((k) => (
        <g key={k}>
          <line x1={px(k)} y1={Y0 - 4} x2={px(k)} y2={Y0 + 4} className="axis" />
          <text x={px(k)} y={Y0 + 20} textAnchor="middle" className="tick">{label(k)}</text>
        </g>
      ))}
      <text x={px(0) - 8} y={Y0 + 20} textAnchor="end" className="tick">0</text>
      {segments.map(({ from, to, y }) => (
        <g key={from}>
          <line x1={px(from)} y1={y} x2={px(to)} y2={y} className="curve" />
          <circle cx={px(from)} cy={y} r="4" className="dot-open" />
          <circle cx={px(to)} cy={y} r="4" className="dot-closed" />
        </g>
      ))}
    </svg>
  );
};

const FourierCoefficientsPage = ({ language = 'en' }) => {
  const t = translations[language] || translations.en;
  const L = (math) => localize(math, language);

  return (
    <div className="page-header">
      <div className="container">
        <h1 className="gradient-text page-title-math">{t.title}</h1>
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
          <BlockMath math={M.omega} />
          <p><MathText text={t.def2} /></p>
          <BlockMath math={M.an} />
          <BlockMath math={M.bn} />
          <BlockMath math={M.cn} />
          <p><MathText text={t.defNote} /></p>

          <h2><Scale size={22} /> {t.parityHeading}</h2>
          <p><MathText text={t.even} /></p>
          <BlockMath math={L(M.even)} />
          <p><MathText text={t.odd} /></p>
          <BlockMath math={L(M.odd)} />
          <p className="callout"><Lightbulb size={18} /> <span>{t.parityTip}</span></p>
        </article>

        <article className="glass-panel math-article">
          <h2>{t.exampleHeading}</h2>
          <p><MathText text={t.ex1} /></p>
          <BlockMath math={L(M.exF)} />
          <figure className="graph-figure">
            <SquareWaveGraph />
            <figcaption><LineChart size={16} /> <MathText text={t.graphCaption} /></figcaption>
          </figure>
          <p><MathText text={t.ex2} /></p>

          <h3>{t.exStep}</h3>
          <p><MathText text={t.exA0} /></p>
          <BlockMath math={M.exA0} />
          <p><MathText text={t.exAll} /></p>
          <BlockMath math={M.exAn} />
          <BlockMath math={M.exBn} />
          <p><MathText text={t.exCases} /></p>
          <div className="result-box">
            <BlockMath math={L(M.exBnCases)} />
          </div>
        </article>
      </div>
    </div>
  );
};

export default FourierCoefficientsPage;
