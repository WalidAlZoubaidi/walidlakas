import React from 'react';
import { Layers, Dna } from 'lucide-react';
import katex from 'katex';

// Premium Scientific Architecture: Direct native KaTeX compilation to static HTML
// This architecture ensures absolute stability, zero React 19 client/server hydration conflicts,
// and complete immunity against DOM manipulation by translation extensions/tools.
const InlineMath = ({ math }) => {
  const cleanMath = typeof math === 'string' ? math : '';
  let html = '';
  try {
    html = katex.renderToString(cleanMath, {
      displayMode: false,
      throwOnError: false,
      strict: false,
      trust: true,
    });
  } catch (e) {
    html = `<span style="color: #ef4444;">${cleanMath}</span>`;
  }
  return <span className="notranslate" translate="no" dangerouslySetInnerHTML={{ __html: html }} />;
};

const BlockMath = ({ math }) => {
  const cleanMath = typeof math === 'string' ? math : '';
  let html = '';
  try {
    html = katex.renderToString(cleanMath, {
      displayMode: true,
      throwOnError: false,
      strict: false,
      trust: true,
    });
  } catch (e) {
    html = `<div style="color: #ef4444;">${cleanMath}</div>`;
  }
  return <div className="notranslate" translate="no" style={{ margin: '1rem 0', overflowX: 'auto' }} dangerouslySetInnerHTML={{ __html: html }} />;
};

const text = {
  en: {
    mainTitle: 'Basics of Continuum Mechanics',
    subtitle: 'Fundamentals & Kinematics',
    introTitle: 'Introduction to Continuum Mechanics',
    intro1: "Continuum mechanics is a branch of mechanics that deals with the analysis of the mechanical behavior of materials modeled as a continuous mass rather than as discrete particles. The continuous formulation allows us to use differential equations to describe the material's behavior in space and time.",
    intro2Start: 'This section focuses on the',
    intro2Strong: 'Analysis of Deformation',
    intro2End: 'a fundamental pillar of kinematics. By studying how a body transitions from a reference configuration to a deformed configuration, we define essential metrics such as the deformation gradient, displacement fields, stretch ratios, and volumetric changes. The following exercises illustrate these core concepts in a structured, step-by-step mathematical approach.',
    partTitle: 'PART 1: Analysis of Deformation',
    partIntro: 'In this exercise sheet, you will find guided problems on an essential concept in continuum mechanics: the analysis of deformation.',
    exercise1: 'Exercise 1',
    consider: 'Consider the transformation defined by:',
    whereAlphaBeta: 'where',
    and: 'and',
    constants: 'are constants.',
    answer: 'Answer:',
    explanation: 'Explanation:',
    conclusion: 'Conclusion:',
    qA: 'a) Write the deformation gradient',
    expA: 'The deformation gradient is a second-order tensor that maps line elements in the reference configuration to the current configuration.',
    fromEquation: 'From equation',
    deduce: 'we deduce that:',
    qB: 'b) Verify that the given transformation is indeed a valid deformation.',
    expB: 'A physically possible deformation must be bijective (no material overlapping or tearing) and preserve orientation, which requires a strictly positive Jacobian',
    checkValid: 'To answer this, we must check that the transformation is bijective and that',
    bijective: 'The transformation is trivially bijective because it is linear:',
    uniqueCoords: 'For every unique macroscopic coordinate',
    uniqueCoordsEnd: 'there is a uniquely associated microscopic coordinate',
    viceVersa: 'and vice-versa.',
    verifyDet: "Let's verify that",
    validIf: 'Thus,',
    validIfEnd: 'is a valid deformation if',
    shareSign: 'share the same sign.',
    qC: 'c) Find the displacement vector',
    qD: 'd) Write the displacement gradient',
    qE: 'e) Find the transformed equation of the cylinder initially given by',
    cylinderAltered: 'How is the cylinder altered by the deformation? (Note: The height is not specified).',
    weHave: 'We have:',
    injecting: 'By injecting this into the equation',
    obtain: 'we obtain:',
    elliptical: 'This is the equation of an elliptical cylinder. The deformation transforms an initially circular cylinder into an elliptical cylinder.',
    qF: 'f) Calculate the local rate of change of length',
    whereE: 'where',
    arbitraryDirection: 'is an arbitrary direction.',
    takeVector: "Let's take a vector",
    applyingFormula: 'Applying the formula:',
    evaluating: 'Evaluating',
    consequently: 'Consequently:',
    qG: 'g) Calculate the stretch ratio',
    qH: 'h) Calculate the local rate of change of area',
    normalSurface: 'is the normal to the original surface element in',
    expH: "We use Nanson's formula, defined via the cofactor tensor",
    inOurCase: 'In our case:',
    since: 'Since',
    therefore: 'Therefore:',
    qI: 'i) Find the orthogonal vector',
    postTransformation: 'post-transformation, to the surface element originally given by',
    qJ: 'j) Calculate the rate of volumetric change',
    qK: 'k) Calculate the total volume variation of the cylinder from question (e).',
    qL: 'l) Calculate the angle variation between the basis vectors',
    expL: 'We are looking for shear deformation by analyzing how originally orthogonal unit vectors behave after transformation.',
    becauseOrthogonal: 'This is because the chosen vectors are orthogonal basis vectors.',
    computeDot: "Let's compute the dot product",
    note: 'Note:',
    noteL: 'We use standard tensor algebra properties. In our specific case,',
    noteLEnd: 'is true because',
    noteLEnd2: 'is symmetric.',
    weKnow: 'We know that:',
    applyingBasis: 'Applying this to all basis vectors:',
    noAngle: 'There is no angle variation (no shear).',
    biomechanicsTitle: 'Biomechanical Application: Muscle Contraction',
    bioIntroStart: 'This exercise is not just a theoretical math problem—it perfectly models the',
    bioIntroStrong: 'contraction of a skeletal muscle',
    bioIntroEnd: 'Biological soft tissues are often modeled geometrically as cylinders.',
    bio1Strong: 'The Kinematics (No Shear):',
    bio1: 'In Question (l), we proved there is no angle variation. This "pure stretch" models how muscle fibers contract uniformly along their primary axis without twisting.',
    bio2Strong: 'The Cylinder (Question e):',
    bio2: 'When a muscle (a cylinder) contracts, it shortens longitudinally',
    bio2End: 'and bulges radially',
    bio2End2: 'transforming into an elliptical cylinder or a thicker cylinder.',
    bio3Strong: 'Incompressibility (Question j):',
    bio3: 'Human tissues are ~70% water, making them mathematically',
    bio3Strong2: 'incompressible',
    bio3End: 'This means the volume variation is strictly zero',
    bio3End2: 'Using your result',
    bio3End3: 'we find',
    bio3End4: 'This simple relation defines the exact radial expansion of a muscle given its longitudinal contraction!',
  },
  fr: {
    mainTitle: 'Bases de la mécanique des milieux continus',
    subtitle: 'Fondamentaux & cinématique',
    introTitle: 'Introduction à la mécanique des milieux continus',
    intro1: 'La mécanique des milieux continus est une branche de la mécanique qui étudie le comportement mécanique de matériaux modélisés comme une masse continue plutôt que comme un ensemble de particules discrètes. Cette formulation continue permet d’utiliser des équations différentielles pour décrire le comportement du matériau dans l’espace et dans le temps.',
    intro2Start: 'Cette section porte sur',
    intro2Strong: 'l’analyse des déformations',
    intro2End: 'un pilier fondamental de la cinématique. En étudiant le passage d’un corps d’une configuration de référence vers une configuration déformée, on définit des grandeurs essentielles comme le gradient de déformation, les champs de déplacement, les taux d’allongement et les variations volumiques. Les exercices suivants illustrent ces concepts de façon structurée et progressive.',
    partTitle: 'PARTIE 1 : Analyse des déformations',
    partIntro: 'Dans cette feuille d’exercices, vous trouverez des problèmes guidés sur un concept essentiel de la mécanique des milieux continus : l’analyse des déformations.',
    exercise1: 'Exercice 1',
    consider: 'Considérons la transformation définie par :',
    whereAlphaBeta: 'où',
    and: 'et',
    constants: 'sont des constantes.',
    answer: 'Réponse :',
    explanation: 'Explication :',
    conclusion: 'Conclusion :',
    qA: 'a) Écrire le gradient de déformation',
    expA: 'Le gradient de déformation est un tenseur d’ordre deux qui transforme les éléments de ligne de la configuration de référence vers la configuration actuelle.',
    fromEquation: 'À partir de l’équation',
    deduce: 'on en déduit que :',
    qB: 'b) Vérifier que la transformation donnée est bien une déformation admissible.',
    expB: 'Une déformation physiquement possible doit être bijective (pas de recouvrement ni de déchirure de matière) et préserver l’orientation, ce qui impose un jacobien strictement positif',
    checkValid: 'Pour répondre, il faut vérifier que la transformation est bijective et que',
    bijective: 'La transformation est trivialement bijective car elle est linéaire :',
    uniqueCoords: 'Pour chaque coordonnée macroscopique unique',
    uniqueCoordsEnd: 'il existe une coordonnée microscopique unique associée',
    viceVersa: 'et réciproquement.',
    verifyDet: 'Vérifions que',
    validIf: 'Ainsi,',
    validIfEnd: 'est une déformation admissible si',
    shareSign: 'sont de même signe.',
    qC: 'c) Trouver le vecteur déplacement',
    qD: 'd) Écrire le gradient du déplacement',
    qE: 'e) Trouver l’équation transformée du cylindre initialement donné par',
    cylinderAltered: 'Comment le cylindre est-il modifié par la déformation ? (Remarque : la hauteur n’est pas précisée).',
    weHave: 'On a :',
    injecting: 'En injectant cela dans l’équation',
    obtain: 'on obtient :',
    elliptical: 'C’est l’équation d’un cylindre elliptique. La déformation transforme donc un cylindre initialement circulaire en cylindre elliptique.',
    qF: 'f) Calculer le taux local de changement de longueur',
    whereE: 'où',
    arbitraryDirection: 'est une direction arbitraire.',
    takeVector: 'Prenons un vecteur',
    applyingFormula: 'En appliquant la formule :',
    evaluating: 'En évaluant',
    consequently: 'Par conséquent :',
    qG: 'g) Calculer le taux d’allongement',
    qH: 'h) Calculer le taux local de changement d’aire',
    normalSurface: 'est la normale à l’élément de surface initial dans',
    expH: 'On utilise la formule de Nanson, définie à partir du tenseur cofacteur',
    inOurCase: 'Dans notre cas :',
    since: 'Comme',
    therefore: 'Donc :',
    qI: 'i) Trouver le vecteur orthogonal',
    postTransformation: 'après transformation, à l’élément de surface initialement défini par',
    qJ: 'j) Calculer le taux de variation volumique',
    qK: 'k) Calculer la variation totale de volume du cylindre de la question (e).',
    qL: 'l) Calculer la variation d’angle entre les vecteurs de base',
    expL: 'On cherche ici une déformation de cisaillement en analysant le comportement de vecteurs unitaires initialement orthogonaux après transformation.',
    becauseOrthogonal: 'Cela vient du fait que les vecteurs choisis sont des vecteurs de base orthogonaux.',
    computeDot: 'Calculons le produit scalaire',
    note: 'Remarque :',
    noteL: 'On utilise les propriétés usuelles de l’algèbre tensorielle. Dans notre cas particulier,',
    noteLEnd: 'est vrai car',
    noteLEnd2: 'est symétrique.',
    weKnow: 'On sait que :',
    applyingBasis: 'En appliquant cela à tous les vecteurs de base :',
    noAngle: 'Il n’y a pas de variation d’angle (pas de cisaillement).',
    biomechanicsTitle: 'Application biomécanique : contraction musculaire',
    bioIntroStart: 'Cet exercice n’est pas seulement un problème mathématique théorique : il modélise parfaitement la',
    bioIntroStrong: 'contraction d’un muscle squelettique',
    bioIntroEnd: 'Les tissus biologiques mous sont souvent modélisés géométriquement comme des cylindres.',
    bio1Strong: 'Cinématique (absence de cisaillement) :',
    bio1: 'À la question (l), nous avons montré qu’il n’y a pas de variation d’angle. Cet étirement pur modélise la contraction uniforme des fibres musculaires selon leur axe principal, sans torsion.',
    bio2Strong: 'Le cylindre (question e) :',
    bio2: 'Lorsqu’un muscle, modélisé par un cylindre, se contracte, il se raccourcit longitudinalement',
    bio2End: 'et se dilate radialement',
    bio2End2: 'ce qui le transforme en cylindre elliptique ou en cylindre plus épais.',
    bio3Strong: 'Incompressibilité (question j) :',
    bio3: 'Les tissus humains sont constitués d’environ 70 % d’eau, ce qui les rend mathématiquement',
    bio3Strong2: 'incompressibles',
    bio3End: 'Cela signifie que la variation de volume est strictement nulle',
    bio3End2: 'En utilisant le résultat',
    bio3End3: 'on trouve',
    bio3End4: 'Cette relation simple définit l’expansion radiale exacte d’un muscle connaissant sa contraction longitudinale.',
  },
};

const AnalysisOfDeformationPage = ({ language = 'en' }) => {
  const t = text[language] || text.en;

  return (
    <div className="page-header">
      <div className="container">
        <h1 className="gradient-text">{t.mainTitle}</h1>
        <p className="hero-subtitle" style={{marginBottom: 0}}>{t.subtitle}</p>
      </div>
      <div className="container page-content" style={{marginTop: '4rem'}}>
        
        {/* Introduction Section */}
        <div className="glass-panel" style={{ padding: '3rem', textAlign: 'left', marginBottom: '2rem' }}>
          <h2 style={{ marginBottom: '1.5rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Layers size={28} style={{ color: 'var(--primary-color)' }} /> {t.introTitle}
          </h2>
          <p style={{ marginBottom: '1rem', fontSize: '1.1rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
            {t.intro1}
          </p>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
            {t.intro2Start} <strong>{t.intro2Strong}</strong>, {t.intro2End}
          </p>
        </div>

        {/* Exercise Section */}
        <div className="glass-panel" style={{ padding: '3rem', textAlign: 'left' }}>
          <h2 style={{ marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
            {t.partTitle}
          </h2>
          <p style={{ marginBottom: '2rem', fontSize: '1.1rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
            {t.partIntro}
          </p>

          <div style={{ background: 'rgba(255,255,255,0.03)', padding: '2rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
            <h3 style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>{t.exercise1}</h3>
            <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>
              {t.consider}
            </p>
            <BlockMath math={String.raw`f(P) = \alpha X_1 \mathbf{e}_1 + \beta X_2 \mathbf{e}_2 + X_3 \mathbf{e}_3 \quad (E)`} />
            <p style={{ marginTop: '1rem', marginBottom: '2rem', color: 'var(--text-secondary)' }}>
              {t.whereAlphaBeta} <InlineMath math={String.raw`\alpha`} /> {t.and} <InlineMath math={String.raw`\beta`} /> {t.constants}
            </p>

            <h4 style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>{t.qA} <InlineMath math={String.raw`F`} />.</h4>
            <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>
              <em>{t.explanation} {t.expA}</em>
            </p>
            <div style={{ marginBottom: '1rem' }}>
              <strong style={{ color: 'var(--text-primary)' }}>{t.answer}</strong>
            </div>
            <BlockMath math={String.raw`F = \nabla f = \begin{bmatrix} \frac{\partial x_1}{\partial X_1} & \frac{\partial x_1}{\partial X_2} & \frac{\partial x_1}{\partial X_3} \\ \frac{\partial x_2}{\partial X_1} & \frac{\partial x_2}{\partial X_2} & \frac{\partial x_2}{\partial X_3} \\ \frac{\partial x_3}{\partial X_1} & \frac{\partial x_3}{\partial X_2} & \frac{\partial x_3}{\partial X_3} \end{bmatrix}`} />
            <p style={{ marginTop: '2rem', marginBottom: '1rem', color: 'var(--text-secondary)' }}>
              {t.fromEquation} <InlineMath math={String.raw`(E)`} />, {t.deduce}
            </p>
            <BlockMath math={String.raw`\begin{cases} x_1 = \alpha X_1 \\ x_2 = \beta X_2 \\ x_3 = X_3 \end{cases} \implies F = \begin{bmatrix} \alpha & 0 & 0 \\ 0 & \beta & 0 \\ 0 & 0 & 1 \end{bmatrix}`} />

            <div style={{ marginTop: '3rem' }}>
              <h4 style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>{t.qB}</h4>
              <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                <em>{t.explanation} {t.expB} (<InlineMath math={String.raw`\det F > 0`} />).</em>
              </p>
              <div style={{ marginBottom: '1rem' }}>
                <strong style={{ color: 'var(--text-primary)' }}>{t.answer}</strong>
              </div>
              <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                {t.checkValid} <InlineMath math={String.raw`\det F > 0`} />.
              </p>
              <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                {t.bijective}
              </p>
              <BlockMath math={String.raw`\begin{cases} x_1 = \alpha X_1 \\ x_2 = \beta X_2 \\ x_3 = X_3 \end{cases}`} />
              <p style={{ marginTop: '1rem', marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                {t.uniqueCoords} <InlineMath math={String.raw`X_i`} />, {t.uniqueCoordsEnd} <InlineMath math={String.raw`x_i`} />, {t.viceVersa}
              </p>
              <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                {t.verifyDet} <InlineMath math={String.raw`\det F > 0`} />:
              </p>
              <BlockMath math={String.raw`\det F = \alpha \beta > 0 \iff (\alpha > 0 \text{ and } \beta > 0) \text{ or } (\alpha < 0 \text{ and } \beta < 0)`} />
              <p style={{ marginTop: '1rem', marginBottom: '3rem', color: 'var(--text-secondary)' }}>
                {t.validIf} <InlineMath math={String.raw`f`} /> {t.validIfEnd} <InlineMath math={String.raw`\alpha`} /> {t.and} <InlineMath math={String.raw`\beta`} /> {t.shareSign}
              </p>
            </div>

            <div style={{ marginTop: '3rem' }}>
              <h4 style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>{t.qC} <InlineMath math={String.raw`\mathbf{u}`} />.</h4>
              <div style={{ marginBottom: '1rem' }}>
                <strong style={{ color: 'var(--text-primary)' }}>{t.answer}</strong>
              </div>
              <BlockMath math={String.raw`\begin{aligned} \mathbf{u} &= p - P = f(P) - P \\ &= \begin{pmatrix} \alpha X_1 \\ \beta X_2 \\ X_3 \end{pmatrix} - \begin{pmatrix} X_1 \\ X_2 \\ X_3 \end{pmatrix} \\ &= X_1(\alpha - 1)\mathbf{e}_1 + X_2(\beta - 1)\mathbf{e}_2 \qquad (u_3 = 0 \quad \forall P \in \Omega) \end{aligned}`} />
            </div>

            <div style={{ marginTop: '3rem' }}>
              <h4 style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>{t.qD} <InlineMath math={String.raw`\nabla \mathbf{u}`} />.</h4>
              <div style={{ marginBottom: '1rem' }}>
                <strong style={{ color: 'var(--text-primary)' }}>{t.answer}</strong>
              </div>
              <BlockMath math={String.raw`\nabla \mathbf{u} = u_{i,j} \mathbf{e}_i \otimes \mathbf{e}_j = F - I = \begin{bmatrix} \alpha - 1 & 0 & 0 \\ 0 & \beta - 1 & 0 \\ 0 & 0 & 0 \end{bmatrix}`} />
            </div>

            <div style={{ marginTop: '3rem' }}>
              <h4 style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>{t.qE} <InlineMath math={String.raw`X_1^2 + X_2^2 = 1`} />.</h4>
              <div style={{ marginBottom: '1rem' }}>
                <strong style={{ color: 'var(--text-primary)' }}>{t.answer}</strong>
              </div>
              <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                {t.cylinderAltered}
              </p>
              <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>{t.weHave}</p>
              <BlockMath math={String.raw`\begin{cases} X_1 = \frac{x_1}{\alpha} \\ X_2 = \frac{x_2}{\beta} \\ X_3 = x_3 \end{cases}`} />
              <p style={{ marginTop: '1rem', marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                {t.injecting} <InlineMath math={String.raw`X_1^2 + X_2^2 = 1`} />, {t.obtain}
              </p>
              <BlockMath math={String.raw`\frac{x_1^2}{\alpha^2} + \frac{x_2^2}{\beta^2} = 1`} />
              <p style={{ marginTop: '1rem', marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                <strong>{t.conclusion}</strong> {t.elliptical}
              </p>
            </div>

            <div style={{ marginTop: '3rem' }}>
              <h4 style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>{t.qF} <InlineMath math={String.raw`\delta l(\mathbf{e})`} /></h4>
              <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                {t.whereE} <InlineMath math={String.raw`\mathbf{e} \in S^2`} /> {t.arbitraryDirection}
              </p>
              <div style={{ marginBottom: '1rem' }}>
                <strong style={{ color: 'var(--text-primary)' }}>{t.answer}</strong>
              </div>
              <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                {t.takeVector} <InlineMath math={String.raw`\mathbf{e} = \begin{pmatrix} a \\ b \\ c \end{pmatrix}`} />. {t.applyingFormula}
              </p>
              <BlockMath math={String.raw`\begin{aligned} \delta l(\mathbf{e}) &= \frac{|\alpha F \mathbf{e}| - |\alpha \mathbf{e}|}{|\alpha \mathbf{e}|}, \\ &\qquad \text{with } \alpha \mathbf{e} = dX,\quad \alpha \to 0^+ \\ &= \frac{\alpha |F \mathbf{e}| - \alpha |\mathbf{e}|}{\alpha |\mathbf{e}|} = |F \mathbf{e}| - 1 \end{aligned}`} />
              <p style={{ marginTop: '2rem', marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                {t.evaluating} <InlineMath math={String.raw`F \mathbf{e}`} />:
              </p>
              <BlockMath math={String.raw`F \mathbf{e} = \begin{bmatrix} \alpha & 0 & 0 \\ 0 & \beta & 0 \\ 0 & 0 & 1 \end{bmatrix} \begin{pmatrix} a \\ b \\ c \end{pmatrix} = \begin{pmatrix} \alpha a \\ \beta b \\ c \end{pmatrix}`} />
              <p style={{ marginTop: '2rem', marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                {t.consequently}
              </p>
              <BlockMath math={String.raw`\delta l (\mathbf{e}) = \sqrt{\alpha^2 a^2 + \beta^2 b^2 + c^2} - 1`} />
            </div>

            <div style={{ marginTop: '3rem' }}>
              <h4 style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>{t.qG} <InlineMath math={String.raw`\lambda(\mathbf{e})`} />.</h4>
              <div style={{ marginBottom: '1rem' }}>
                <strong style={{ color: 'var(--text-primary)' }}>{t.answer}</strong>
              </div>
              <BlockMath math={String.raw`\lambda(\mathbf{e}) = \delta l (\mathbf{e}) + 1 = \sqrt{\alpha^2 a^2 + \beta^2 b^2 + c^2}`} />
            </div>

            <div style={{ marginTop: '3rem' }}>
              <h4 style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>{t.qH} <InlineMath math={String.raw`\delta_a(\mathbf{N})`} />.</h4>
              <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                {t.whereE} <InlineMath math={String.raw`\mathbf{N} \in S^2`} /> {t.normalSurface} <InlineMath math={String.raw`\Omega`} />.
              </p>
              <div style={{ marginBottom: '1rem' }}>
                <strong style={{ color: 'var(--text-primary)' }}>{t.answer}</strong>
              </div>
              <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                <em>{t.explanation} {t.expH} <InlineMath math={String.raw`F^*`} />.</em>
              </p>
              <BlockMath math={String.raw`\delta_a(\mathbf{N}) = |F^* \mathbf{N}| - 1`} />
              <BlockMath math={String.raw`F^* = \det F \cdot F^{-T}`} />
              <p style={{ marginTop: '1rem', marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                {t.inOurCase} <InlineMath math={String.raw`F^T = F`} /> {t.and} <InlineMath math={String.raw`F^{-1} = F^{-T} = \begin{bmatrix} 1/\alpha & 0 & 0 \\ 0 & 1/\beta & 0 \\ 0 & 0 & 1 \end{bmatrix}`} />
              </p>
              <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                {t.since} <InlineMath math={String.raw`\det F = \alpha \beta`} /> :
              </p>
              <BlockMath math={String.raw`\implies F^* = \begin{bmatrix} \beta & 0 & 0 \\ 0 & \alpha & 0 \\ 0 & 0 & \alpha \beta \end{bmatrix} \quad \text{for } \mathbf{N} = \begin{pmatrix} N_1 \\ N_2 \\ N_3 \end{pmatrix}`} />
              <BlockMath math={String.raw`F^* \mathbf{N} = \begin{bmatrix} \beta & 0 & 0 \\ 0 & \alpha & 0 \\ 0 & 0 & \alpha \beta \end{bmatrix} \begin{pmatrix} N_1 \\ N_2 \\ N_3 \end{pmatrix} = \begin{pmatrix} \beta N_1 \\ \alpha N_2 \\ \alpha \beta N_3 \end{pmatrix}`} />
              <p style={{ marginTop: '1rem', marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                {t.therefore} <InlineMath math={String.raw`\delta_a(\mathbf{N}) = \sqrt{\beta^2 N_1^2 + \alpha^2 N_2^2 + \alpha^2 \beta^2 N_3^2} - 1`} />
              </p>
            </div>

            <div style={{ marginTop: '3rem' }}>
              <h4 style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>{t.qI} <InlineMath math={String.raw`\mathbf{n} \in S^2`} />, {t.postTransformation} <InlineMath math={String.raw`\mathbf{N}`} />.</h4>
              <div style={{ marginBottom: '1rem' }}>
                <strong style={{ color: 'var(--text-primary)' }}>{t.answer}</strong>
              </div>
              <BlockMath math={String.raw`\mathbf{n} = \frac{F^* \mathbf{N}}{|F^* \mathbf{N}|} = \frac{1}{\sqrt{\beta^2 N_1^2 + \alpha^2 N_2^2 + \alpha^2 \beta^2 N_3^2}} \begin{pmatrix} \beta N_1 \\ \alpha N_2 \\ \alpha \beta N_3 \end{pmatrix}`} />
            </div>

            <div style={{ marginTop: '3rem' }}>
              <h4 style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>{t.qJ} <InlineMath math={String.raw`\delta v`} />.</h4>
              <div style={{ marginBottom: '1rem' }}>
                <strong style={{ color: 'var(--text-primary)' }}>{t.answer}</strong>
              </div>
              <BlockMath math={String.raw`\delta v = \det F - 1 = \alpha \beta - 1`} />
            </div>

            <div style={{ marginTop: '3rem' }}>
              <h4 style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>{t.qK}</h4>
              <div style={{ marginBottom: '1rem' }}>
                <strong style={{ color: 'var(--text-primary)' }}>{t.answer}</strong>
              </div>
              <BlockMath math={String.raw`vol = \int_{\Omega} dv = \int_{\Omega} \det F \, dV \qquad (F \text{ is constant } \to \text{homogeneous deformation})`} />
              <BlockMath math={String.raw`Vol = \int_{\Omega} dV`} />
              <BlockMath math={String.raw`\delta v_{\text{cyl}} = \frac{vol - Vol}{Vol} = \frac{\det F \int_{\Omega} dV - \int_{\Omega} dV}{\int_{\Omega} dV} = \frac{\det F \cdot Vol - Vol}{Vol} = \det F - 1`} />
              <BlockMath math={String.raw`vol = \det F \int_{\Omega} dV = \det F \cdot Vol = \alpha \beta \pi l`} />
            </div>

            <div style={{ marginTop: '3rem' }}>
              <h4 style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>{t.qL} <InlineMath math={String.raw`\{\mathbf{e}_1, \mathbf{e}_2, \mathbf{e}_3\}`} />.</h4>
              <div style={{ marginBottom: '1rem' }}>
                <strong style={{ color: 'var(--text-primary)' }}>{t.answer}</strong>
              </div>
              <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                <em>{t.explanation} {t.expL}</em>
              </p>
              <BlockMath math={String.raw`\delta \theta(\mathbf{e}_i, \mathbf{e}_j) = \underbrace{\arccos(\mathbf{e}_i \cdot \mathbf{e}_j)}_{= \pi / 2} - \arccos\left( \frac{F\mathbf{e}_i \cdot F\mathbf{e}_j}{\lambda(\mathbf{e}_i)\lambda(\mathbf{e}_j)} \right)`} />
              <p style={{ marginTop: '1rem', marginBottom: '2rem', color: 'var(--text-secondary)' }}>
                {t.becauseOrthogonal}
              </p>

              <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                {t.computeDot} <InlineMath math={String.raw`F\mathbf{e}_i \cdot F\mathbf{e}_j`} /> :
              </p>
              <BlockMath math={String.raw`F\mathbf{e}_i \cdot F\mathbf{e}_j = \mathbf{e}_i \cdot F^T F \mathbf{e}_j = \mathbf{e}_i \cdot F^2 \mathbf{e}_j`} />
              <p style={{ marginTop: '1rem', marginBottom: '1rem', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                <em>{t.note} {t.noteL} <InlineMath math={String.raw`F^T F = F^2`} /> {t.noteLEnd} <InlineMath math={String.raw`F`} /> {t.noteLEnd2}</em>
              </p>
              
              <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>{t.weKnow}</p>
              <BlockMath math={String.raw`F^2 = \begin{bmatrix} \alpha^2 & 0 & 0 \\ 0 & \beta^2 & 0 \\ 0 & 0 & 1 \end{bmatrix}`} />
              
              <p style={{ marginTop: '1rem', marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                {t.applyingBasis}
              </p>
              <BlockMath math={String.raw`\begin{aligned} \mathbf{e}_1 \cdot F^2 \mathbf{e}_2 &= \begin{pmatrix} 1 \\ 0 \\ 0 \end{pmatrix} \cdot \begin{bmatrix} \alpha^2 & 0 & 0 \\ 0 & \beta^2 & 0 \\ 0 & 0 & 1 \end{bmatrix} \begin{pmatrix} 0 \\ 1 \\ 0 \end{pmatrix} \\ &= \begin{pmatrix} 1 \\ 0 \\ 0 \end{pmatrix} \cdot \begin{pmatrix} 0 \\ \beta^2 \\ 0 \end{pmatrix} = 0 \\ \mathbf{e}_1 \cdot F^2 \mathbf{e}_3 &= 0 \\ \mathbf{e}_2 \cdot F^2 \mathbf{e}_3 &= 0 \end{aligned}`} />
              
              <p style={{ marginTop: '2rem', marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                {t.therefore} <InlineMath math={String.raw`\delta \theta(\mathbf{e}_i, \mathbf{e}_j) = 0 \implies`} /> <strong>{t.noAngle}</strong>
              </p>
            </div>

          </div>
        </div>

        {/* Biomechanical Insight Section */}
        <div className="glass-panel" style={{ padding: '3rem', marginTop: '3rem', display: 'flex', flexDirection: 'column', gap: '2rem', borderTop: '4px solid var(--primary-color)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Dna size={32} color="var(--primary-color)" />
            <h2 style={{ color: 'var(--text-primary)', margin: 0 }}>{t.biomechanicsTitle}</h2>
          </div>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', alignItems: 'center' }}>
            <div style={{ flex: '1 1 400px' }}>
              <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
                {t.bioIntroStart} <strong>{t.bioIntroStrong}</strong>. {t.bioIntroEnd}
              </p>
              
              <ul style={{ listStyleType: 'none', padding: 0, marginBottom: '1.5rem' }}>
                <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--primary-color)', marginTop: '8px', flexShrink: 0 }}></div>
                  <div>
                    <strong style={{ color: 'var(--text-primary)' }}>{t.bio1Strong}</strong> {t.bio1}
                  </div>
                </li>
                <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--primary-color)', marginTop: '8px', flexShrink: 0 }}></div>
                  <div>
                    <strong style={{ color: 'var(--text-primary)' }}>{t.bio2Strong}</strong> {t.bio2} (<InlineMath math={String.raw`\alpha < 1`} />) {t.bio2End} (<InlineMath math={String.raw`\beta > 1`} />), {t.bio2End2}
                  </div>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--primary-color)', marginTop: '8px', flexShrink: 0 }}></div>
                  <div>
                    <strong style={{ color: 'var(--text-primary)' }}>{t.bio3Strong}</strong> {t.bio3} <strong>{t.bio3Strong2}</strong>. {t.bio3End} (<InlineMath math={String.raw`\delta v = 0`} />). {t.bio3End2} <InlineMath math={String.raw`\alpha\beta - 1 = 0`} />, {t.bio3End3} <InlineMath math={String.raw`\beta = 1/\alpha`} />. {t.bio3End4}
                  </div>
                </li>
              </ul>
            </div>
            
            <div style={{ flex: '1 1 300px', display: 'flex', justifyContent: 'center' }}>
              <div style={{ position: 'relative', width: '100%', maxWidth: '400px', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.1)' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(135deg, rgba(14,165,233,0.2) 0%, transparent 100%)', pointerEvents: 'none' }}></div>
                <img src="/biomechanics-muscle.png" alt="Biomechanics of muscle contraction modeled as cylinder deformation" style={{ width: '100%', height: 'auto', display: 'block' }} />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AnalysisOfDeformationPage;
