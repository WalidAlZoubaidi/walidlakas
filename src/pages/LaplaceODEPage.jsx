import { Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, Lightbulb, ListChecks, Table2, CheckCircle2 } from 'lucide-react';
import { MathText, BlockMath } from '@/components/MathText';

const R = String.raw;
const L = R`\mathcal{L}`;

// Formulas are shared by every language
const M = {
  ode: R`a_n y^{(n)}(x) + a_{n-1} y^{(n-1)}(x) + \cdots + a_0\, y(x) = f(x)`,
  notations: R`Y(p) = ${L}[yU](p), \qquad F(p) = ${L}[fU](p)`,
  step: R`U(t) = \begin{cases} 1 & \text{si } t \geq 0 \\ 0 & \text{si } t < 0 \end{cases}`,
  derivative: R`${L}\big[y^{(k)}U\big](p) = p^k\, Y(p) - p^{k-1}\, y(0) - \cdots - y^{(k-1)}(0)`,
  transformed: R`\left(a_n p^n + \cdots + a_1 p + a_0\right) Y(p) + G(p) = F(p)`,
  solvedY: R`Y(p) = \frac{F(p) - G(p)}{a_n p^n + \cdots + a_1 p + a_0}`,
  inverse: R`y(x) = ${L}^{-1}[Y](x)`,
  table: R`\begin{array}{c|c}
    g(x) \; (x \geq 0) & ${L}[gU](p) \\ \hline
    1 & \dfrac{1}{p} \\[2ex]
    e^{ax} & \dfrac{1}{p - a} \\[2ex]
    x^n & \dfrac{n!}{p^{n+1}} \\[2ex]
    x^n e^{ax} & \dfrac{n!}{(p - a)^{n+1}}
  \end{array}`,
  exOde: R`y'' - 2y' + y = x e^x, \qquad y(0) = 1, \quad y'(0) = 0`,
  exDerivs: R`\begin{aligned}
    ${L}[y''U](p) &= p^2\, Y(p) - p\, y(0) - y'(0) = p^2\, Y(p) - p \\[1ex]
    ${L}[y'U](p) &= p\, Y(p) - y(0) = p\, Y(p) - 1
  \end{aligned}`,
  exLhs: R`${L}\big[(y'' - 2y' + y)U\big](p) = p^2\, Y(p) - p - 2\big(p\, Y(p) - 1\big) + Y(p)`,
  exRhs: R`${L}[gU](p) = \frac{1}{(p-1)^2}`,
  exAlg: R`(p^2 - 2p + 1)\, Y(p) - p + 2 = \frac{1}{(p-1)^2}`,
  exY: R`Y(p) = \frac{1}{(p-1)^2}\left(\frac{1}{(p-1)^2} + p - 2\right) = \frac{1}{(p-1)^4} - \frac{1}{(p-1)^2} + \frac{1}{p-1}`,
  exSplit: R`\frac{p - 2}{(p-1)^2} = \frac{(p - 1) - 1}{(p-1)^2} = \frac{1}{p-1} - \frac{1}{(p-1)^2}`,
  exInv: R`\begin{aligned}
    \frac{1}{(p-1)^4} = \frac{1}{3!} \cdot \frac{3!}{(p-1)^4} &\;\longleftrightarrow\; \frac{x^3}{3!}\, e^x \\[1ex]
    \frac{1}{(p-1)^2} &\;\longleftrightarrow\; x\, e^x \\[1ex]
    \frac{1}{p-1} &\;\longleftrightarrow\; e^x
  \end{aligned}`,
  exResult: R`y(x) = e^x\left(\frac{x^3}{3!} - x + 1\right)`,
  exCheck: R`y'(x) = e^x\left(\frac{x^3}{6} + \frac{x^2}{2} - x\right), \qquad y(0) = 1, \quad y'(0) = 0`,
};

// \text{...} inside formulas follows the page language
const IF = { en: 'if', fr: 'si', ar: 'if' };
const localize = (math, lang) => math.replaceAll(R`\text{si }`, R`\text{${IF[lang] || IF.en} }`);

const translations = {
  en: {
    title: 'How to solve a linear differential equation using the Laplace transform?',
    subtitle: 'Laplace Transform',
    back: 'Back to Mathematics',
    tag: 'Method',
    principleHeading: 'Principle',
    p1: 'Consider the linear differential equation with constant coefficients:',
    p2: R`Let $U$ be the unit step function:`,
    p3: 'and set:',
    p4: R`For all $k \in \mathbb{N}$, the transform of a derivative is:`,
    p5: 'Applying the Laplace transform to the differential equation therefore gives:',
    p6: R`where $G(p)$ is a polynomial in $p$ of degree at most $n - 1$, which contains the initial conditions $y(0), \dots, y^{(n-1)}(0)$. We deduce:`,
    p7: 'Then, applying the inverse transform:',
    key: 'The Laplace transform has turned a differential equation into an algebraic equation, and the initial conditions are built in from the start.',
    stepsHeading: 'The method in 4 steps',
    steps: [
      'Apply the Laplace transform to both sides of the equation, using the formula for derivatives and the initial conditions.',
      R`Solve the algebraic equation obtained for $Y(p)$.`,
      R`Decompose $Y(p)$ into partial fractions.`,
      R`Recognise each term in a table of transforms to get back $y(x)$.`,
    ],
    tableHeading: 'Usual transforms',
    tableIntro: R`For $a \in \mathbb{R}$ and $n \in \mathbb{N}$ (with $p > a$):`,
    exampleHeading: 'Example',
    ex1: 'Solve the following differential equation:',
    ex2: R`Let $g : x \mapsto x e^x$ and set $Y(p) = \mathcal{L}[yU](p)$. Using the initial conditions:`,
    ex3: R`Applying the Laplace transform to the left-hand side of the equation $y'' - 2y' + y = x e^x$ gives:`,
    ex4: 'For the right-hand side, from the table:',
    ex5: 'It follows that:',
    ex6: R`Since $p^2 - 2p + 1 = (p - 1)^2$, we get:`,
    ex6Note: 'For the partial fraction decomposition, we wrote:',
    ex7: 'We recognise each term in the table:',
    ex8: 'Hence:',
    checkHeading: 'Check',
    check: 'Differentiating, we can check the initial conditions:',
  },
  fr: {
    title: 'Comment résoudre une équation différentielle linéaire en utilisant la transformée de Laplace ?',
    subtitle: 'Transformée de Laplace',
    back: 'Retour aux mathématiques',
    tag: 'Méthode',
    principleHeading: 'Principe',
    p1: 'Soit l’équation différentielle linéaire à coefficients constants :',
    p2: R`Notons $U$ la fonction échelon unité :`,
    p3: 'et posons :',
    p4: R`Pour tout $k \in \mathbb{N}$, la transformée d’une dérivée s’écrit :`,
    p5: 'En appliquant la transformée de Laplace à l’équation différentielle, on obtient donc :',
    p6: R`où $G(p)$ est un polynôme en $p$ de degré au plus $n - 1$, qui contient les conditions initiales $y(0), \dots, y^{(n-1)}(0)$. On en déduit :`,
    p7: 'Puis, en appliquant la transformée inverse :',
    key: 'La transformée de Laplace a donc transformé une équation différentielle en équation algébrique, en intégrant d’emblée les conditions initiales.',
    stepsHeading: 'La méthode en 4 étapes',
    steps: [
      'Appliquer la transformée de Laplace aux deux membres de l’équation, à l’aide de la formule des dérivées et des conditions initiales.',
      R`Résoudre l’équation algébrique obtenue en $Y(p)$.`,
      R`Décomposer $Y(p)$ en éléments simples.`,
      R`Reconnaître chaque terme dans une table de transformées pour retrouver $y(x)$.`,
    ],
    tableHeading: 'Transformées usuelles',
    tableIntro: R`Pour $a \in \mathbb{R}$ et $n \in \mathbb{N}$ (avec $p > a$) :`,
    exampleHeading: 'Exemple',
    ex1: 'Intégrer l’équation différentielle suivante :',
    ex2: R`Soit $g : x \mapsto x e^x$ et posons $Y(p) = \mathcal{L}[yU](p)$. Avec les conditions initiales :`,
    ex3: R`En appliquant la transformée de Laplace au premier membre de l’équation $y'' - 2y' + y = x e^x$, on obtient :`,
    ex4: 'Pour le second membre, d’après la table :',
    ex5: 'Il s’ensuit que :',
    ex6: R`Comme $p^2 - 2p + 1 = (p - 1)^2$, on obtient :`,
    ex6Note: 'Pour la décomposition en éléments simples, on a écrit :',
    ex7: 'On reconnaît chaque terme dans la table :',
    ex8: 'Par suite :',
    checkHeading: 'Vérification',
    check: 'En dérivant, on vérifie bien les conditions initiales :',
  },
  ar: {
    title: 'كيف نحلّ معادلة تفاضلية خطية باستعمال تحويل لابلاس؟',
    subtitle: 'تحويل لابلاس',
    back: 'العودة إلى الرياضيات',
    tag: 'طريقة',
    principleHeading: 'المبدأ',
    p1: 'لنعتبر المعادلة التفاضلية الخطية ذات المعاملات الثابتة:',
    p2: R`لتكن $U$ دالة الدرجة الواحدية (دالة هيفيسايد):`,
    p3: 'ونضع:',
    p4: R`لكل $k$ من $\mathbb{N}$، يُكتب تحويل المشتقة كما يلي:`,
    p5: 'بتطبيق تحويل لابلاس على المعادلة التفاضلية نحصل إذن على:',
    p6: R`حيث $G(p)$ كثيرة حدود في $p$ درجتها على الأكثر $n - 1$، تتضمّن الشروط الابتدائية $y(0), \dots, y^{(n-1)}(0)$. نستنتج أن:`,
    p7: 'ثم بتطبيق التحويل العكسي:',
    key: 'لقد حوّل تحويل لابلاس المعادلة التفاضلية إلى معادلة جبرية، مع إدماج الشروط الابتدائية منذ البداية.',
    stepsHeading: 'الطريقة في أربع خطوات',
    steps: [
      'نطبّق تحويل لابلاس على طرفي المعادلة، باستعمال صيغة المشتقات والشروط الابتدائية.',
      R`نحلّ المعادلة الجبرية الناتجة بالنسبة إلى $Y(p)$.`,
      R`نفكّك $Y(p)$ إلى عناصر بسيطة.`,
      R`نتعرّف على كل حدّ في جدول التحويلات لنستنتج $y(x)$.`,
    ],
    tableHeading: 'التحويلات المعتادة',
    tableIntro: R`لكل $a$ من $\mathbb{R}$ ولكل $n$ من $\mathbb{N}$ (مع $p > a$):`,
    exampleHeading: 'مثال',
    ex1: 'حلّ المعادلة التفاضلية التالية:',
    ex2: R`لتكن $g : x \mapsto x e^x$ ولنضع $Y(p) = \mathcal{L}[yU](p)$. باستعمال الشروط الابتدائية:`,
    ex3: R`بتطبيق تحويل لابلاس على الطرف الأول من المعادلة $y'' - 2y' + y = x e^x$ نحصل على:`,
    ex4: 'أما الطرف الثاني، فحسب الجدول:',
    ex5: 'ينتج عن ذلك أن:',
    ex6: R`وبما أن $p^2 - 2p + 1 = (p - 1)^2$، نجد:`,
    ex6Note: 'للتفكيك إلى عناصر بسيطة، كتبنا:',
    ex7: 'نتعرّف على كل حدّ في الجدول:',
    ex8: 'وبالتالي:',
    checkHeading: 'التحقق',
    check: 'بالاشتقاق، نتحقق من الشروط الابتدائية:',
  },
};

const LaplaceODEPage = ({ language = 'en' }) => {
  const t = translations[language] || translations.en;

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

          <h2>{t.principleHeading}</h2>
          <p>{t.p1}</p>
          <BlockMath math={M.ode} />
          <p><MathText text={t.p2} /></p>
          <BlockMath math={localize(M.step, language)} />
          <p>{t.p3}</p>
          <BlockMath math={M.notations} />
          <p><MathText text={t.p4} /></p>
          <BlockMath math={M.derivative} />
          <p>{t.p5}</p>
          <BlockMath math={M.transformed} />
          <p><MathText text={t.p6} /></p>
          <BlockMath math={M.solvedY} />
          <p>{t.p7}</p>
          <BlockMath math={M.inverse} />
          <p className="callout"><Lightbulb size={18} /> <span>{t.key}</span></p>

          <h2><ListChecks size={22} /> {t.stepsHeading}</h2>
          <ol className="method-steps">
            {t.steps.map((step, i) => (
              <li key={i}><MathText text={step} /></li>
            ))}
          </ol>

          <h2><Table2 size={22} /> {t.tableHeading}</h2>
          <p><MathText text={t.tableIntro} /></p>
          <BlockMath math={M.table} />
        </article>

        <article className="glass-panel math-article">
          <h2>{t.exampleHeading}</h2>
          <p>{t.ex1}</p>
          <BlockMath math={M.exOde} />
          <p><MathText text={t.ex2} /></p>
          <BlockMath math={M.exDerivs} />
          <p><MathText text={t.ex3} /></p>
          <BlockMath math={M.exLhs} />
          <p>{t.ex4}</p>
          <BlockMath math={M.exRhs} />
          <p>{t.ex5}</p>
          <BlockMath math={M.exAlg} />
          <p><MathText text={t.ex6} /></p>
          <BlockMath math={M.exY} />
          <p className="solution-note">{t.ex6Note}</p>
          <BlockMath math={M.exSplit} />
          <p>{t.ex7}</p>
          <BlockMath math={M.exInv} />
          <p>{t.ex8}</p>
          <div className="result-box">
            <BlockMath math={M.exResult} />
          </div>

          <h3><CheckCircle2 size={18} /> {t.checkHeading}</h3>
          <p>{t.check}</p>
          <BlockMath math={M.exCheck} />
        </article>
      </div>
    </div>
  );
};

export default LaplaceODEPage;
