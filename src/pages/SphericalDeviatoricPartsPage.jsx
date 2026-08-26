import { Link } from 'react-router-dom';
import { ArrowLeft, BookOpen } from 'lucide-react';
import { BlockMath, InlineMath } from 'react-katex';

const paragraphStyle = {
  fontSize: '1rem',
  lineHeight: '1.8',
  color: 'var(--text-secondary)',
  marginBottom: '1.25rem',
};

const SphericalDeviatoricPartsPage = () => {
  return (
    <div className="page-header">
      <div className="container">
        <h1 className="gradient-text">Spherical and Deviatoric Parts</h1>
        <p className="hero-subtitle" style={{ marginBottom: 0 }}>Concept Reminder</p>
      </div>

      <div className="container page-content" style={{ marginTop: '4rem', textAlign: 'left' }}>
        <Link
          to="/mechanics/basics-of-continuum-mechanics"
          className="read-more"
          style={{ marginBottom: '2rem' }}
        >
          <ArrowLeft size={16} /> Back to Basics of Continuum Mechanics
        </Link>

        <article className="glass-panel" style={{ padding: '3rem', marginTop: '1.5rem' }}>
          <p style={{ color: 'var(--accent-primary)', fontWeight: 700, marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <BookOpen size={18} /> Tensor decomposition
          </p>
          <h2 style={{ fontSize: '1.9rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
            Spherical and Deviatoric Parts of the Tensor <InlineMath math="\varepsilon" />
          </h2>

          <p style={paragraphStyle}>
            Decompositions of second-order tensors are numerous: polar decomposition, canonical dyadic decomposition, and decomposition into symmetric and antisymmetric parts.
          </p>
          <p style={paragraphStyle}>
            We now introduce another classical decomposition widely used in mechanics: the decomposition of a tensor, here the tensor <InlineMath math="\varepsilon" />, into a spherical part <InlineMath math="\varepsilon_s" /> and a deviatoric part <InlineMath math="\varepsilon_d" />:
          </p>

          <BlockMath math="\varepsilon = \varepsilon_s + \varepsilon_d" />

          <p style={{ color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>with</p>
          <BlockMath math="\varepsilon_s = \frac{1}{3}\operatorname{tr}(\varepsilon)\,I" />
          <p style={{ color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>and</p>
          <BlockMath math="\varepsilon_d = \varepsilon - \varepsilon_s" />

          <p style={paragraphStyle}>From this definition, we obtain:</p>
          <BlockMath math="\operatorname{tr}(\varepsilon_s) = \frac{1}{3}\operatorname{tr}(\varepsilon)\operatorname{tr}(I) = \operatorname{tr}(\varepsilon)" />
          <p style={{ color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>and</p>
          <BlockMath math="\operatorname{tr}(\varepsilon_d) = 0" />

          <p style={paragraphStyle}>
            Therefore, if we recall the meaning of the trace of the strain tensor in infinitesimal strain theory, <InlineMath math="\varepsilon_s" /> describes a deformation involving a change of volume. In other words, all volume changes of <InlineMath math="\varepsilon" /> are concentrated in <InlineMath math="\varepsilon_s" />.
          </p>
          <p style={paragraphStyle}>
            As for <InlineMath math="\varepsilon_d" />, it describes an isochoric transformation: a type of deformation in which everything occurs at constant volume, so the only thing that changes is the shape.
          </p>
          <p style={paragraphStyle}>
            Thus, the tensor <InlineMath math="\varepsilon_s" /> represents volume change without shape change, while the tensor <InlineMath math="\varepsilon_d" /> represents shape change without volume change.
          </p>

          <h3 style={{ fontSize: '1.25rem', margin: '2rem 0 1rem', color: 'var(--text-primary)' }}>
            Why is there no shape change in <InlineMath math="\varepsilon_s" />?
          </h3>
          <p style={paragraphStyle}>Because it is a spherical tensor:</p>
          <BlockMath math="\varepsilon_s = \frac{1}{3}\operatorname{tr}(\varepsilon)\,I" />
          <p style={paragraphStyle}>
            where <InlineMath math="\frac{1}{3}\operatorname{tr}(\varepsilon)" /> is a constant.
          </p>
          <p style={paragraphStyle}>
            If we use, for example, the formulas for length-change ratios introduced above, we see that, in any basis, all vectors are changed by the same amount. We therefore obtain a deformation with spherical symmetry.
          </p>
          <p style={{ ...paragraphStyle, marginBottom: 0 }}>
            In practice, a spherical tensor is any tensor that is a multiple of the identity. This decomposition into spherical and deviatoric parts is especially important for strength criteria in isotropic solids.
          </p>
        </article>
      </div>
    </div>
  );
};

export default SphericalDeviatoricPartsPage;
