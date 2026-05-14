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

const AnalysisOfDeformationPage = () => {
  return (
    <div className="page-header">
      <div className="container">
        <h1 className="gradient-text">Basics of Continuum Mechanics</h1>
        <p className="hero-subtitle" style={{marginBottom: 0}}>Fundamentals & Kinematics</p>
      </div>
      <div className="container page-content" style={{marginTop: '4rem'}}>
        
        {/* Introduction Section */}
        <div className="glass-panel" style={{ padding: '3rem', textAlign: 'left', marginBottom: '2rem' }}>
          <h2 style={{ marginBottom: '1.5rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Layers size={28} style={{ color: 'var(--primary-color)' }} /> Introduction to Continuum Mechanics
          </h2>
          <p style={{ marginBottom: '1rem', fontSize: '1.1rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
            Continuum mechanics is a branch of mechanics that deals with the analysis of the mechanical behavior of materials modeled as a continuous mass rather than as discrete particles. The continuous formulation allows us to use differential equations to describe the material's behavior in space and time.
          </p>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
            This section focuses on the <strong>Analysis of Deformation</strong>, a fundamental pillar of kinematics. By studying how a body transitions from a reference configuration to a deformed configuration, we define essential metrics such as the deformation gradient, displacement fields, stretch ratios, and volumetric changes. The following exercises illustrate these core concepts in a structured, step-by-step mathematical approach.
          </p>
        </div>

        {/* Exercise Section */}
        <div className="glass-panel" style={{ padding: '3rem', textAlign: 'left' }}>
          <h2 style={{ marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
            PART 1: Analysis of Deformation
          </h2>
          <p style={{ marginBottom: '2rem', fontSize: '1.1rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
            In this exercise sheet, you will find guided problems on an essential concept in continuum mechanics: the analysis of deformation.
          </p>

          <div style={{ background: 'rgba(255,255,255,0.03)', padding: '2rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
            <h3 style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>Exercise 1</h3>
            <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>
              Consider the transformation defined by:
            </p>
            <BlockMath math={String.raw`f(P) = \alpha X_1 \mathbf{e}_1 + \beta X_2 \mathbf{e}_2 + X_3 \mathbf{e}_3 \quad (E)`} />
            <p style={{ marginTop: '1rem', marginBottom: '2rem', color: 'var(--text-secondary)' }}>
              where <InlineMath math={String.raw`\alpha`} /> and <InlineMath math={String.raw`\beta`} /> are constants.
            </p>

            <h4 style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>a) Write the deformation gradient <InlineMath math={String.raw`F`} />.</h4>
            <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>
              <em>Explanation: The deformation gradient <InlineMath math={String.raw`F`} /> is a second-order tensor that maps line elements in the reference configuration to the current configuration.</em>
            </p>
            <div style={{ marginBottom: '1rem' }}>
              <strong style={{ color: 'var(--text-primary)' }}>Answer:</strong>
            </div>
            <BlockMath math={String.raw`F = \nabla f = \begin{bmatrix} \frac{\partial x_1}{\partial X_1} & \frac{\partial x_1}{\partial X_2} & \frac{\partial x_1}{\partial X_3} \\ \frac{\partial x_2}{\partial X_1} & \frac{\partial x_2}{\partial X_2} & \frac{\partial x_2}{\partial X_3} \\ \frac{\partial x_3}{\partial X_1} & \frac{\partial x_3}{\partial X_2} & \frac{\partial x_3}{\partial X_3} \end{bmatrix}`} />
            <p style={{ marginTop: '2rem', marginBottom: '1rem', color: 'var(--text-secondary)' }}>
              From equation <InlineMath math={String.raw`(E)`} />, we deduce that:
            </p>
            <BlockMath math={String.raw`\begin{cases} x_1 = \alpha X_1 \\ x_2 = \beta X_2 \\ x_3 = X_3 \end{cases} \implies F = \begin{bmatrix} \alpha & 0 & 0 \\ 0 & \beta & 0 \\ 0 & 0 & 1 \end{bmatrix}`} />

            <div style={{ marginTop: '3rem' }}>
              <h4 style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>b) Verify that the given transformation is indeed a valid deformation.</h4>
              <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                <em>Explanation: A physically possible deformation must be bijective (no material overlapping or tearing) and preserve orientation, which requires a strictly positive Jacobian (<InlineMath math={String.raw`\det F > 0`} />).</em>
              </p>
              <div style={{ marginBottom: '1rem' }}>
                <strong style={{ color: 'var(--text-primary)' }}>Answer:</strong>
              </div>
              <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                To answer this, we must check that the transformation is bijective and that <InlineMath math={String.raw`\det F > 0`} />.
              </p>
              <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                The transformation is trivially bijective because it is linear:
              </p>
              <BlockMath math={String.raw`\begin{cases} x_1 = \alpha X_1 \\ x_2 = \beta X_2 \\ x_3 = X_3 \end{cases}`} />
              <p style={{ marginTop: '1rem', marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                For every unique macroscopic coordinate <InlineMath math={String.raw`X_i`} />, there is a uniquely associated microscopic coordinate <InlineMath math={String.raw`x_i`} />, and vice-versa.
              </p>
              <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                Let's verify that <InlineMath math={String.raw`\det F > 0`} />:
              </p>
              <BlockMath math={String.raw`\det F = \alpha \beta > 0 \iff (\alpha > 0 \text{ and } \beta > 0) \text{ or } (\alpha < 0 \text{ and } \beta < 0)`} />
              <p style={{ marginTop: '1rem', marginBottom: '3rem', color: 'var(--text-secondary)' }}>
                Thus, <InlineMath math={String.raw`f`} /> is a valid deformation if <InlineMath math={String.raw`\alpha`} /> and <InlineMath math={String.raw`\beta`} /> share the same sign.
              </p>
            </div>

            <div style={{ marginTop: '3rem' }}>
              <h4 style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>c) Find the displacement vector <InlineMath math={String.raw`\mathbf{u}`} />.</h4>
              <div style={{ marginBottom: '1rem' }}>
                <strong style={{ color: 'var(--text-primary)' }}>Answer:</strong>
              </div>
              <BlockMath math={String.raw`\begin{aligned} \mathbf{u} &= p - P = f(P) - P \\ &= \begin{pmatrix} \alpha X_1 \\ \beta X_2 \\ X_3 \end{pmatrix} - \begin{pmatrix} X_1 \\ X_2 \\ X_3 \end{pmatrix} \\ &= X_1(\alpha - 1)\mathbf{e}_1 + X_2(\beta - 1)\mathbf{e}_2 \qquad (u_3 = 0 \quad \forall P \in \Omega) \end{aligned}`} />
            </div>

            <div style={{ marginTop: '3rem' }}>
              <h4 style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>d) Write the displacement gradient <InlineMath math={String.raw`\nabla \mathbf{u}`} />.</h4>
              <div style={{ marginBottom: '1rem' }}>
                <strong style={{ color: 'var(--text-primary)' }}>Answer:</strong>
              </div>
              <BlockMath math={String.raw`\nabla \mathbf{u} = u_{i,j} \mathbf{e}_i \otimes \mathbf{e}_j = F - I = \begin{bmatrix} \alpha - 1 & 0 & 0 \\ 0 & \beta - 1 & 0 \\ 0 & 0 & 0 \end{bmatrix}`} />
            </div>

            <div style={{ marginTop: '3rem' }}>
              <h4 style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>e) Find the transformed equation of the cylinder initially given by <InlineMath math={String.raw`X_1^2 + X_2^2 = 1`} />.</h4>
              <div style={{ marginBottom: '1rem' }}>
                <strong style={{ color: 'var(--text-primary)' }}>Answer:</strong>
              </div>
              <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                How is the cylinder altered by the deformation? (Note: The height is not specified).
              </p>
              <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>We have:</p>
              <BlockMath math={String.raw`\begin{cases} X_1 = \frac{x_1}{\alpha} \\ X_2 = \frac{x_2}{\beta} \\ X_3 = x_3 \end{cases}`} />
              <p style={{ marginTop: '1rem', marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                By injecting this into the equation <InlineMath math={String.raw`X_1^2 + X_2^2 = 1`} />, we obtain:
              </p>
              <BlockMath math={String.raw`\frac{x_1^2}{\alpha^2} + \frac{x_2^2}{\beta^2} = 1`} />
              <p style={{ marginTop: '1rem', marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                <strong>Conclusion:</strong> This is the equation of an elliptical cylinder. The deformation transforms an initially circular cylinder into an elliptical cylinder.
              </p>
            </div>

            <div style={{ marginTop: '3rem' }}>
              <h4 style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>f) Calculate the local rate of change of length <InlineMath math={String.raw`\delta l(\mathbf{e})`} /></h4>
              <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                where <InlineMath math={String.raw`\mathbf{e} \in S^2`} /> is an arbitrary direction.
              </p>
              <div style={{ marginBottom: '1rem' }}>
                <strong style={{ color: 'var(--text-primary)' }}>Answer:</strong>
              </div>
              <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                Let's take a vector <InlineMath math={String.raw`\mathbf{e} = \begin{pmatrix} a \\ b \\ c \end{pmatrix}`} />. Applying the formula:
              </p>
              <BlockMath math={String.raw`\begin{aligned} \delta l(\mathbf{e}) &= \frac{|\alpha F \mathbf{e}| - |\alpha \mathbf{e}|}{|\alpha \mathbf{e}|}, \\ &\qquad \text{with } \alpha \mathbf{e} = dX,\quad \alpha \to 0^+ \\ &= \frac{\alpha |F \mathbf{e}| - \alpha |\mathbf{e}|}{\alpha |\mathbf{e}|} = |F \mathbf{e}| - 1 \end{aligned}`} />
              <p style={{ marginTop: '2rem', marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                Evaluating <InlineMath math={String.raw`F \mathbf{e}`} />:
              </p>
              <BlockMath math={String.raw`F \mathbf{e} = \begin{bmatrix} \alpha & 0 & 0 \\ 0 & \beta & 0 \\ 0 & 0 & 1 \end{bmatrix} \begin{pmatrix} a \\ b \\ c \end{pmatrix} = \begin{pmatrix} \alpha a \\ \beta b \\ c \end{pmatrix}`} />
              <p style={{ marginTop: '2rem', marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                Consequently:
              </p>
              <BlockMath math={String.raw`\delta l (\mathbf{e}) = \sqrt{\alpha^2 a^2 + \beta^2 b^2 + c^2} - 1`} />
            </div>

            <div style={{ marginTop: '3rem' }}>
              <h4 style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>g) Calculate the stretch ratio <InlineMath math={String.raw`\lambda(\mathbf{e})`} />.</h4>
              <div style={{ marginBottom: '1rem' }}>
                <strong style={{ color: 'var(--text-primary)' }}>Answer:</strong>
              </div>
              <BlockMath math={String.raw`\lambda(\mathbf{e}) = \delta l (\mathbf{e}) + 1 = \sqrt{\alpha^2 a^2 + \beta^2 b^2 + c^2}`} />
            </div>

            <div style={{ marginTop: '3rem' }}>
              <h4 style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>h) Calculate the local rate of change of area <InlineMath math={String.raw`\delta_a(\mathbf{N})`} />.</h4>
              <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                where <InlineMath math={String.raw`\mathbf{N} \in S^2`} /> is the normal to the original surface element in <InlineMath math={String.raw`\Omega`} />.
              </p>
              <div style={{ marginBottom: '1rem' }}>
                <strong style={{ color: 'var(--text-primary)' }}>Answer:</strong>
              </div>
              <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                <em>Explanation: We use Nanson's formula, defined via the cofactor tensor <InlineMath math={String.raw`F^*`} />.</em>
              </p>
              <BlockMath math={String.raw`\delta_a(\mathbf{N}) = |F^* \mathbf{N}| - 1`} />
              <BlockMath math={String.raw`F^* = \det F \cdot F^{-T}`} />
              <p style={{ marginTop: '1rem', marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                In our case: <InlineMath math={String.raw`F^T = F`} /> and <InlineMath math={String.raw`F^{-1} = F^{-T} = \begin{bmatrix} 1/\alpha & 0 & 0 \\ 0 & 1/\beta & 0 \\ 0 & 0 & 1 \end{bmatrix}`} />
              </p>
              <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                Since <InlineMath math={String.raw`\det F = \alpha \beta`} /> :
              </p>
              <BlockMath math={String.raw`\implies F^* = \begin{bmatrix} \beta & 0 & 0 \\ 0 & \alpha & 0 \\ 0 & 0 & \alpha \beta \end{bmatrix} \quad \text{for } \mathbf{N} = \begin{pmatrix} N_1 \\ N_2 \\ N_3 \end{pmatrix}`} />
              <BlockMath math={String.raw`F^* \mathbf{N} = \begin{bmatrix} \beta & 0 & 0 \\ 0 & \alpha & 0 \\ 0 & 0 & \alpha \beta \end{bmatrix} \begin{pmatrix} N_1 \\ N_2 \\ N_3 \end{pmatrix} = \begin{pmatrix} \beta N_1 \\ \alpha N_2 \\ \alpha \beta N_3 \end{pmatrix}`} />
              <p style={{ marginTop: '1rem', marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                Therefore: <InlineMath math={String.raw`\delta_a(\mathbf{N}) = \sqrt{\beta^2 N_1^2 + \alpha^2 N_2^2 + \alpha^2 \beta^2 N_3^2} - 1`} />
              </p>
            </div>

            <div style={{ marginTop: '3rem' }}>
              <h4 style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>i) Find the orthogonal vector <InlineMath math={String.raw`\mathbf{n} \in S^2`} />, post-transformation, to the surface element originally given by <InlineMath math={String.raw`\mathbf{N}`} />.</h4>
              <div style={{ marginBottom: '1rem' }}>
                <strong style={{ color: 'var(--text-primary)' }}>Answer:</strong>
              </div>
              <BlockMath math={String.raw`\mathbf{n} = \frac{F^* \mathbf{N}}{|F^* \mathbf{N}|} = \frac{1}{\sqrt{\beta^2 N_1^2 + \alpha^2 N_2^2 + \alpha^2 \beta^2 N_3^2}} \begin{pmatrix} \beta N_1 \\ \alpha N_2 \\ \alpha \beta N_3 \end{pmatrix}`} />
            </div>

            <div style={{ marginTop: '3rem' }}>
              <h4 style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>j) Calculate the rate of volumetric change <InlineMath math={String.raw`\delta v`} />.</h4>
              <div style={{ marginBottom: '1rem' }}>
                <strong style={{ color: 'var(--text-primary)' }}>Answer:</strong>
              </div>
              <BlockMath math={String.raw`\delta v = \det F - 1 = \alpha \beta - 1`} />
            </div>

            <div style={{ marginTop: '3rem' }}>
              <h4 style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>k) Calculate the total volume variation of the cylinder from question (e).</h4>
              <div style={{ marginBottom: '1rem' }}>
                <strong style={{ color: 'var(--text-primary)' }}>Answer:</strong>
              </div>
              <BlockMath math={String.raw`vol = \int_{\Omega} dv = \int_{\Omega} \det F \, dV \qquad (F \text{ is constant } \to \text{homogeneous deformation})`} />
              <BlockMath math={String.raw`Vol = \int_{\Omega} dV`} />
              <BlockMath math={String.raw`\delta v_{\text{cyl}} = \frac{vol - Vol}{Vol} = \frac{\det F \int_{\Omega} dV - \int_{\Omega} dV}{\int_{\Omega} dV} = \frac{\det F \cdot Vol - Vol}{Vol} = \det F - 1`} />
              <BlockMath math={String.raw`vol = \det F \int_{\Omega} dV = \det F \cdot Vol = \alpha \beta \pi l`} />
            </div>

            <div style={{ marginTop: '3rem' }}>
              <h4 style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>l) Calculate the angle variation between the basis vectors <InlineMath math={String.raw`\{\mathbf{e}_1, \mathbf{e}_2, \mathbf{e}_3\}`} />.</h4>
              <div style={{ marginBottom: '1rem' }}>
                <strong style={{ color: 'var(--text-primary)' }}>Answer:</strong>
              </div>
              <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                <em>Explanation: We are looking for shear deformation by analyzing how originally orthogonal unit vectors behave after transformation.</em>
              </p>
              <BlockMath math={String.raw`\delta \theta(\mathbf{e}_i, \mathbf{e}_j) = \underbrace{\arccos(\mathbf{e}_i \cdot \mathbf{e}_j)}_{= \pi / 2} - \arccos\left( \frac{F\mathbf{e}_i \cdot F\mathbf{e}_j}{\lambda(\mathbf{e}_i)\lambda(\mathbf{e}_j)} \right)`} />
              <p style={{ marginTop: '1rem', marginBottom: '2rem', color: 'var(--text-secondary)' }}>
                This is because the chosen vectors are orthogonal basis vectors.
              </p>

              <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                Let's compute the dot product <InlineMath math={String.raw`F\mathbf{e}_i \cdot F\mathbf{e}_j`} /> :
              </p>
              <BlockMath math={String.raw`F\mathbf{e}_i \cdot F\mathbf{e}_j = \mathbf{e}_i \cdot F^T F \mathbf{e}_j = \mathbf{e}_i \cdot F^2 \mathbf{e}_j`} />
              <p style={{ marginTop: '1rem', marginBottom: '1rem', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                <em>Note: We use standard tensor algebra properties. In our specific case, <InlineMath math={String.raw`F^T F = F^2`} /> is true because <InlineMath math={String.raw`F`} /> is symmetric.</em>
              </p>
              
              <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>We know that:</p>
              <BlockMath math={String.raw`F^2 = \begin{bmatrix} \alpha^2 & 0 & 0 \\ 0 & \beta^2 & 0 \\ 0 & 0 & 1 \end{bmatrix}`} />
              
              <p style={{ marginTop: '1rem', marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                Applying this to all basis vectors:
              </p>
              <BlockMath math={String.raw`\begin{aligned} \mathbf{e}_1 \cdot F^2 \mathbf{e}_2 &= \begin{pmatrix} 1 \\ 0 \\ 0 \end{pmatrix} \cdot \begin{bmatrix} \alpha^2 & 0 & 0 \\ 0 & \beta^2 & 0 \\ 0 & 0 & 1 \end{bmatrix} \begin{pmatrix} 0 \\ 1 \\ 0 \end{pmatrix} \\ &= \begin{pmatrix} 1 \\ 0 \\ 0 \end{pmatrix} \cdot \begin{pmatrix} 0 \\ \beta^2 \\ 0 \end{pmatrix} = 0 \\ \mathbf{e}_1 \cdot F^2 \mathbf{e}_3 &= 0 \\ \mathbf{e}_2 \cdot F^2 \mathbf{e}_3 &= 0 \end{aligned}`} />
              
              <p style={{ marginTop: '2rem', marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                Therefore: <InlineMath math={String.raw`\delta \theta(\mathbf{e}_i, \mathbf{e}_j) = 0 \implies`} /> <strong>There is no angle variation (no shear).</strong>
              </p>
            </div>

          </div>
        </div>

        {/* Biomechanical Insight Section */}
        <div className="glass-panel" style={{ padding: '3rem', marginTop: '3rem', display: 'flex', flexDirection: 'column', gap: '2rem', borderTop: '4px solid var(--primary-color)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Dna size={32} color="var(--primary-color)" />
            <h2 style={{ color: 'var(--text-primary)', margin: 0 }}>Biomechanical Application: Muscle Contraction</h2>
          </div>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', alignItems: 'center' }}>
            <div style={{ flex: '1 1 400px' }}>
              <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
                This exercise is not just a theoretical math problem—it perfectly models the <strong>contraction of a skeletal muscle</strong>! Biological soft tissues are often modeled geometrically as cylinders.
              </p>
              
              <ul style={{ listStyleType: 'none', padding: 0, marginBottom: '1.5rem' }}>
                <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--primary-color)', marginTop: '8px', flexShrink: 0 }}></div>
                  <div>
                    <strong style={{ color: 'var(--text-primary)' }}>The Kinematics (No Shear):</strong> In Question (l), we proved there is no angle variation. This "pure stretch" models how muscle fibers contract uniformly along their primary axis without twisting.
                  </div>
                </li>
                <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--primary-color)', marginTop: '8px', flexShrink: 0 }}></div>
                  <div>
                    <strong style={{ color: 'var(--text-primary)' }}>The Cylinder (Question e):</strong> When a muscle (a cylinder) contracts, it shortens longitudinally (<InlineMath math={String.raw`\alpha < 1`} />) and bulges radially (<InlineMath math={String.raw`\beta > 1`} />), transforming into an elliptical cylinder or a thicker cylinder.
                  </div>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--primary-color)', marginTop: '8px', flexShrink: 0 }}></div>
                  <div>
                    <strong style={{ color: 'var(--text-primary)' }}>Incompressibility (Question j):</strong> Human tissues are ~70% water, making them mathematically <strong>incompressible</strong>. This means the volume variation is strictly zero (<InlineMath math={String.raw`\delta v = 0`} />). Using your result <InlineMath math={String.raw`\alpha\beta - 1 = 0`} />, we find <InlineMath math={String.raw`\beta = 1/\alpha`} />. This simple relation defines the exact radial expansion of a muscle given its longitudinal contraction!
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
