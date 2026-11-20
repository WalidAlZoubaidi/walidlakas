import { Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, Lightbulb, Link2 } from 'lucide-react';
import { MathText, BlockMath } from '@/components/MathText';

const R = String.raw;

// Formulas are shared by every language
const M = {
  compat: R`\left.\begin{array}{r} a \equiv b \,[n] \\ c \equiv d \,[n] \end{array}\right\}
    \;\Longrightarrow\;
    \left\{\begin{array}{l} a + c \equiv b + d \,[n] \\ ac \equiv bd \,[n] \end{array}\right.`,
  power: R`a \equiv b \,[n] \;\Longrightarrow\; a^p \equiv b^p \,[n]`,
  exGoal: R`\overline{10^{6n+2} + 10^{3n+1} + 1} = \overline{0}`,
  exKey: R`10^3 = 1000 = 1 + 9 \times 111 \quad\Longrightarrow\quad 10^3 \equiv 1 \,[111]`,
  exPowers: R`\begin{aligned}
    10^{6n+2} &= \left(10^3\right)^{2n} \cdot 100 \equiv 1 \cdot 100 \,[111] \\[1ex]
    10^{3n+1} &= \left(10^3\right)^{n} \cdot 10 \equiv 1 \cdot 10 \,[111]
  \end{aligned}`,
  exSum: R`10^{6n+2} + 10^{3n+1} + 1 \equiv 100 + 10 + 1 = 111 \equiv 0 \,[111]`,
  exResult: R`\overline{10^{6n+2} + 10^{3n+1} + 1} = \overline{0}`,
};

const translations = {
  en: {
    title: R`How to compute in $\mathbb{Z}/n\mathbb{Z}$?`,
    subtitle: 'Algebraic Structures',
    back: 'Back to Mathematics',
    tag: 'Method',
    methodHeading: 'The method',
    method: R`To compute in $\mathbb{Z}/n\mathbb{Z}$, with $n \in \mathbb{N}^*$, we use the fact that congruence modulo $n$ is compatible with the operations $+$ and $\times$.`,
    rulesHeading: 'Compatibility rules',
    rules: R`In other words, for all $(a,b,c,d) \in \mathbb{Z}^4$ and $p \in \mathbb{N}$:`,
    tip: R`In practice: replace any number by a simpler number congruent to it modulo $n$ (ideally $0$, $1$ or $-1$), then add, multiply or raise to a power.`,
    exampleHeading: 'Worked example',
    exGoal: R`Show that in $\mathbb{Z}/111\mathbb{Z}$, for all $n \in \mathbb{N}$:`,
    exKey: R`Note first that a power of $10$ is very simple modulo $111$:`,
    exPowers: R`On the other hand, by compatibility with products and powers:`,
    exSum: 'Adding these congruences (compatibility with the sum):',
    exResult: 'Therefore:',
  },
  fr: {
    title: R`Comment calculer dans $\mathbb{Z}/n\mathbb{Z}$ ?`,
    subtitle: 'Structures algébriques',
    back: 'Retour aux mathématiques',
    tag: 'Méthode',
    methodHeading: 'La méthode',
    method: R`Pour calculer dans $\mathbb{Z}/n\mathbb{Z}$ avec $n \in \mathbb{N}^*$, on utilise les relations de compatibilité de la congruence modulo $n$ avec les lois $+$ et $\times$.`,
    rulesHeading: 'Les relations de compatibilité',
    rules: R`Autrement dit, soient $(a,b,c,d) \in \mathbb{Z}^4$ et $p \in \mathbb{N}$, on a :`,
    tip: R`En pratique : on remplace un nombre par un nombre plus simple qui lui est congru modulo $n$ (idéalement $0$, $1$ ou $-1$), puis on additionne, on multiplie ou on élève à une puissance.`,
    exampleHeading: 'Exemple',
    exGoal: R`Montrer que dans $\mathbb{Z}/111\mathbb{Z}$, pour tout $n \in \mathbb{N}$ :`,
    exKey: R`On remarque que :`,
    exPowers: 'D’autre part :',
    exSum: 'Donc :',
    exResult: 'Par suite :',
  },
  ar: {
    title: R`كيف نحسب في $\mathbb{Z}/n\mathbb{Z}$؟`,
    subtitle: 'البنيات الجبرية',
    back: 'العودة إلى الرياضيات',
    tag: 'طريقة',
    methodHeading: 'الطريقة',
    method: R`للحساب في $\mathbb{Z}/n\mathbb{Z}$، حيث $n \in \mathbb{N}^*$، نستعمل توافق الموافقة بترديد $n$ مع القانونين $+$ و $\times$.`,
    rulesHeading: 'علاقات التوافق',
    rules: R`بعبارة أخرى، لكل $(a,b,c,d)$ من $\mathbb{Z}^4$ ولكل $p$ من $\mathbb{N}$:`,
    tip: R`عمليًّا: نعوّض العدد بعدد أبسط يوافقه بترديد $n$ (ويُفضَّل $0$ أو $1$ أو $-1$)، ثم نجمع أو نضرب أو نرفع إلى قوة.`,
    exampleHeading: 'مثال',
    exGoal: R`بيّن أنه في $\mathbb{Z}/111\mathbb{Z}$، لكل $n$ من $\mathbb{N}$:`,
    exKey: R`نلاحظ أن:`,
    exPowers: 'ومن جهة أخرى:',
    exSum: 'إذن:',
    exResult: 'وبالتالي:',
  },
};

const ModularArithmeticPage = ({ language = 'en' }) => {
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

          <h2>{t.methodHeading}</h2>
          <p><MathText text={t.method} /></p>

          <h2><Link2 size={22} /> {t.rulesHeading}</h2>
          <p><MathText text={t.rules} /></p>
          <BlockMath math={M.compat} />
          <BlockMath math={M.power} />
          <p className="callout"><Lightbulb size={18} /> <span><MathText text={t.tip} /></span></p>
        </article>

        <article className="glass-panel math-article">
          <h2>{t.exampleHeading}</h2>
          <p><MathText text={t.exGoal} /></p>
          <BlockMath math={M.exGoal} />
          <p><MathText text={t.exKey} /></p>
          <BlockMath math={M.exKey} />
          <p><MathText text={t.exPowers} /></p>
          <BlockMath math={M.exPowers} />
          <p>{t.exSum}</p>
          <BlockMath math={M.exSum} />
          <p>{t.exResult}</p>
          <div className="result-box">
            <BlockMath math={M.exResult} />
          </div>
        </article>
      </div>
    </div>
  );
};

export default ModularArithmeticPage;
