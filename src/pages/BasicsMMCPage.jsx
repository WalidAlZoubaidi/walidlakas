
import { Link } from 'react-router-dom';
import { Layers, ArrowRight, Activity, BookOpen } from 'lucide-react';
import { BlockMath, InlineMath } from 'react-katex';

const BasicsMMCPage = () => {
  return (
    <div className="page-header">
      <div className="container">
        <h1 className="gradient-text">Basics of Continuum Mechanics</h1>
        <p className="hero-subtitle" style={{marginBottom: 0}}>Fundamentals & Kinematics</p>
      </div>
      <div className="container page-content" style={{marginTop: '4rem'}}>
        
        {/* Category Introduction */}
        <div className="glass-panel" style={{ padding: '3rem', textAlign: 'left', marginBottom: '3rem' }}>
          <h2 style={{ marginBottom: '1.5rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Layers size={28} style={{ color: 'var(--primary-color)' }} /> About this Section
          </h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
            This section serves as a directory for fundamental concepts and mathematical formulations in continuum mechanics. Here you will find detailed notes, exercises, and derivations covering the kinematics and dynamics of continuous media. Select a topic below to explore its contents.
          </p>
        </div>

        {/* Concept Reminders */}
        <div style={{ marginBottom: '4rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <div className="card-icon" style={{ marginBottom: 0 }}><BookOpen size={24} /></div>
            <h2 style={{ margin: 0 }}><span className="gradient-text">Concept</span> Reminders</h2>
          </div>

          <article className="glass-panel" style={{ padding: '3rem', textAlign: 'left' }}>
            <p style={{ color: 'var(--accent-primary)', fontWeight: 700, marginBottom: '0.75rem' }}>Tensor decomposition</p>
            <h3 style={{ fontSize: '1.75rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
              Spherical and Deviatoric Parts of the Tensor <InlineMath math="\varepsilon" />
            </h3>

            <p style={{ fontSize: '1rem', lineHeight: '1.8', color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
              Decompositions of second-order tensors are numerous: polar decomposition, canonical dyadic decomposition, and decomposition into symmetric and antisymmetric parts.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: '1.8', color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
              We now introduce another classical decomposition widely used in mechanics: the decomposition of a tensor, here the tensor <InlineMath math="\varepsilon" />, into a spherical part <InlineMath math="\varepsilon_s" /> and a deviatoric part <InlineMath math="\varepsilon_d" />:
            </p>

            <BlockMath math="\varepsilon = \varepsilon_s + \varepsilon_d" />

            <p style={{ color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>with</p>
            <BlockMath math="\varepsilon_s = \frac{1}{3}\operatorname{tr}(\varepsilon)\,I" />
            <p style={{ color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>and</p>
            <BlockMath math="\varepsilon_d = \varepsilon - \varepsilon_s" />

            <p style={{ fontSize: '1rem', lineHeight: '1.8', color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
              From this definition, we obtain:
            </p>
            <BlockMath math="\operatorname{tr}(\varepsilon_s) = \frac{1}{3}\operatorname{tr}(\varepsilon)\operatorname{tr}(I) = \operatorname{tr}(\varepsilon)" />
            <p style={{ color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>and</p>
            <BlockMath math="\operatorname{tr}(\varepsilon_d) = 0" />

            <p style={{ fontSize: '1rem', lineHeight: '1.8', color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
              Therefore, if we recall the meaning of the trace of the strain tensor in infinitesimal strain theory, <InlineMath math="\varepsilon_s" /> describes a deformation involving a change of volume. In other words, all volume changes of <InlineMath math="\varepsilon" /> are concentrated in <InlineMath math="\varepsilon_s" />.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: '1.8', color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
              As for <InlineMath math="\varepsilon_d" />, it describes an isochoric transformation: a type of deformation in which everything occurs at constant volume, so the only thing that changes is the shape.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: '1.8', color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
              Thus, the tensor <InlineMath math="\varepsilon_s" /> represents volume change without shape change, while the tensor <InlineMath math="\varepsilon_d" /> represents shape change without volume change.
            </p>

            <h4 style={{ fontSize: '1.2rem', margin: '2rem 0 1rem', color: 'var(--text-primary)' }}>
              Why is there no shape change in <InlineMath math="\varepsilon_s" />?
            </h4>
            <p style={{ fontSize: '1rem', lineHeight: '1.8', color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
              Because it is a spherical tensor:
            </p>
            <BlockMath math="\varepsilon_s = \frac{1}{3}\operatorname{tr}(\varepsilon)\,I" />
            <p style={{ fontSize: '1rem', lineHeight: '1.8', color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
              where <InlineMath math="\frac{1}{3}\operatorname{tr}(\varepsilon)" /> is a constant.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: '1.8', color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
              If we use, for example, the formulas for length-change ratios introduced above, we see that, in any basis, all vectors are changed by the same amount. We therefore obtain a deformation with spherical symmetry.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: '1.8', color: 'var(--text-secondary)', marginBottom: 0 }}>
              In practice, a spherical tensor is any tensor that is a multiple of the identity. This decomposition into spherical and deviatoric parts is especially important for strength criteria in isotropic solids.
            </p>
          </article>
        </div>

        {/* Sub-pages Grid */}
        <h2 style={{ marginBottom: '0.5rem' }}><span className="gradient-text">Problem</span> Solving</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
          Guided applications and exercises are grouped separately from short concept reminders.
        </p>
        <div className="grid-cards">
          
          <div className="glass-card research-card">
            <div className="card-icon"><Activity size={24} /></div>
            <h3>Analysis of Deformation</h3>
            <p>Guided exercises on deformation gradients, displacement vectors, stretch ratios, and kinematic transformations.</p>
            <Link to="/mechanics/basics-of-continuum-mechanics/analysis-of-deformation" className="read-more">
              View Notes <ArrowRight size={16}/>
            </Link>
          </div>
          
          {/* Future topics will be added here */}
          
        </div>
      </div>
    </div>
  );
};

export default BasicsMMCPage;
