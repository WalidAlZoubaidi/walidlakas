import { Link } from 'react-router-dom';
import { ArrowLeft, BookOpen } from 'lucide-react';
import { BlockMath, InlineMath } from 'react-katex';

const paragraphStyle = {
  fontSize: '1rem',
  lineHeight: '1.8',
  color: 'var(--text-secondary)',
  marginBottom: '1.25rem',
};

const translations = {
  en: {
    title: 'Spherical and Deviatoric Parts',
    subtitle: 'Concept Reminder',
    back: 'Back to Basics of Continuum Mechanics',
    tag: 'Tensor decomposition',
    heading: 'Spherical and Deviatoric Parts of the Tensor',
    p1: 'Decompositions of second-order tensors are numerous: polar decomposition, canonical dyadic decomposition, and decomposition into symmetric and antisymmetric parts.',
    p2Before: 'We now introduce another classical decomposition widely used in mechanics: the decomposition of a tensor, here the tensor',
    p2After: 'into a spherical part',
    p2End: 'and a deviatoric part',
    with: 'with',
    and: 'and',
    fromDefinition: 'From this definition, we obtain:',
    p3Before: 'Therefore, if we recall the meaning of the trace of the strain tensor in infinitesimal strain theory,',
    p3After: 'describes a deformation involving a change of volume. In other words, all volume changes of',
    p3End: 'are concentrated in',
    p4Before: 'As for',
    p4After: 'it describes an isochoric transformation: a type of deformation in which everything occurs at constant volume, so the only thing that changes is the shape.',
    p5Before: 'Thus, the tensor',
    p5Middle: 'represents volume change without shape change, while the tensor',
    p5End: 'represents shape change without volume change.',
    question: 'Why is there no shape change in',
    questionEnd: '?',
    because: 'Because it is a spherical tensor:',
    where: 'where',
    constant: 'is a constant.',
    p6: 'If we use, for example, the formulas for length-change ratios introduced above, we see that, in any basis, all vectors are changed by the same amount. We therefore obtain a deformation with spherical symmetry.',
    p7: 'In practice, a spherical tensor is any tensor that is a multiple of the identity. This decomposition into spherical and deviatoric parts is especially important for strength criteria in isotropic solids.',
  },
  fr: {
    title: 'Parties sphérique et déviatorique',
    subtitle: 'Rappel de concept',
    back: 'Retour aux bases de la mécanique des milieux continus',
    tag: 'Décomposition tensorielle',
    heading: 'Parties sphérique et déviatorique du tenseur',
    p1: 'Les décompositions des tenseurs du second ordre sont nombreuses : décomposition polaire, décomposition canonique par dyade, décomposition en parties symétrique et antisymétrique.',
    p2Before: 'Nous introduisons maintenant une autre décomposition classique très utilisée en mécanique : la décomposition d’un tenseur, ici le tenseur',
    p2After: 'en une partie sphérique',
    p2End: 'et une partie déviatorique',
    with: 'avec',
    and: 'et',
    fromDefinition: 'Par la définition même que nous venons de voir, on a :',
    p3Before: 'Ainsi, si l’on se remémore la signification de la trace du tenseur des déformations en théorie infinitésimale,',
    p3After: 'décrit une déformation impliquant un changement de volume. Autrement dit, tous les changements de volume de',
    p3End: 'sont concentrés dans',
    p4Before: 'Quant à',
    p4After: 'il décrit une transformation isochore : un type de déformation dans laquelle tout se produit à volume constant, et donc la seule chose qui change est la forme.',
    p5Before: 'Donc, le tenseur',
    p5Middle: 'représente le changement de volume sans changement de forme, tandis que le tenseur',
    p5End: 'représente le changement de forme sans changement de volume.',
    question: 'Pourquoi n’y a-t-il pas de changement de forme dans',
    questionEnd: ' ?',
    because: 'Parce que c’est un tenseur sphérique :',
    where: 'où',
    constant: 'est une constante.',
    p6: 'Si l’on utilise par exemple les formules de taux de changement de longueur vues précédemment, on constate que, selon une base quelconque, tous les vecteurs sont changés de la même quantité. Nous obtenons donc une déformation qui possède une symétrie sphérique.',
    p7: 'En réalité, on appelle tenseur sphérique tout tenseur qui est un multiple de l’identité. Cette décomposition en partie sphérique et déviatorique est particulièrement importante pour les critères de résistance des solides isotropes.',
  },
};

const SphericalDeviatoricPartsPage = ({ language = 'en' }) => {
  const t = translations[language] || translations.en;

  return (
    <div className="page-header">
      <div className="container">
        <h1 className="gradient-text">{t.title}</h1>
        <p className="hero-subtitle" style={{ marginBottom: 0 }}>{t.subtitle}</p>
      </div>

      <div className="container page-content" style={{ marginTop: '4rem', textAlign: 'left' }}>
        <Link
          to="/mechanics/basics-of-continuum-mechanics"
          className="read-more"
          style={{ marginBottom: '2rem' }}
        >
          <ArrowLeft size={16} /> {t.back}
        </Link>

        <article className="glass-panel" style={{ padding: '3rem', marginTop: '1.5rem' }}>
          <p style={{ color: 'var(--accent-primary)', fontWeight: 700, marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <BookOpen size={18} /> {t.tag}
          </p>
          <h2 style={{ fontSize: '1.9rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
            {t.heading} <InlineMath math="\varepsilon" />
          </h2>

          <p style={paragraphStyle}>
            {t.p1}
          </p>
          <p style={paragraphStyle}>
            {t.p2Before} <InlineMath math="\varepsilon" />, {t.p2After} <InlineMath math="\varepsilon_s" /> {t.and} {t.p2End} <InlineMath math="\varepsilon_d" /> :
          </p>

          <BlockMath math="\varepsilon = \varepsilon_s + \varepsilon_d" />

          <p style={{ color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>{t.with}</p>
          <BlockMath math="\varepsilon_s = \frac{1}{3}\operatorname{tr}(\varepsilon)\,I" />
          <p style={{ color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>{t.and}</p>
          <BlockMath math="\varepsilon_d = \varepsilon - \varepsilon_s" />

          <p style={paragraphStyle}>{t.fromDefinition}</p>
          <BlockMath math="\operatorname{tr}(\varepsilon_s) = \frac{1}{3}\operatorname{tr}(\varepsilon)\operatorname{tr}(I) = \operatorname{tr}(\varepsilon)" />
          <p style={{ color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>{t.and}</p>
          <BlockMath math="\operatorname{tr}(\varepsilon_d) = 0" />

          <p style={paragraphStyle}>
            {t.p3Before} <InlineMath math="\varepsilon_s" /> {t.p3After} <InlineMath math="\varepsilon" /> {t.p3End} <InlineMath math="\varepsilon_s" />.
          </p>
          <p style={paragraphStyle}>
            {t.p4Before} <InlineMath math="\varepsilon_d" />, {t.p4After}
          </p>
          <p style={paragraphStyle}>
            {t.p5Before} <InlineMath math="\varepsilon_s" /> {t.p5Middle} <InlineMath math="\varepsilon_d" /> {t.p5End}
          </p>

          <h3 style={{ fontSize: '1.25rem', margin: '2rem 0 1rem', color: 'var(--text-primary)' }}>
            {t.question} <InlineMath math="\varepsilon_s" />{t.questionEnd}
          </h3>
          <p style={paragraphStyle}>{t.because}</p>
          <BlockMath math="\varepsilon_s = \frac{1}{3}\operatorname{tr}(\varepsilon)\,I" />
          <p style={paragraphStyle}>
            {t.where} <InlineMath math="\frac{1}{3}\operatorname{tr}(\varepsilon)" /> {t.constant}
          </p>
          <p style={paragraphStyle}>
            {t.p6}
          </p>
          <p style={{ ...paragraphStyle, marginBottom: 0 }}>
            {t.p7}
          </p>
        </article>
      </div>
    </div>
  );
};

export default SphericalDeviatoricPartsPage;
