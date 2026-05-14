import React from 'react';
import { Atom, Compass, Activity, Dna } from 'lucide-react';
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

const VirtualWorkApplicationPage = () => {
  return (
    <div className="page-header">
      <div className="container">
        <h1 className="gradient-text">Analytical Mechanics</h1>
        <p className="hero-subtitle" style={{marginBottom: 0}}>Application Exercise</p>
      </div>
      <div className="container page-content" style={{marginTop: '4rem'}}>
        
        {/* Introduction Section */}
        <div className="glass-panel" style={{ padding: '3rem', textAlign: 'left', marginBottom: '3rem' }}>
          <h2 style={{ marginBottom: '1.5rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Atom size={28} style={{ color: 'var(--primary-color)' }} /> Introduction to the Principle of Virtual Work
          </h2>
          <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
            The <strong>Principle of Virtual Work (PVW)</strong>, or d'Alembert's principle, offers a highly powerful mathematical formulation of analytical mechanics. Unlike Newton's vectorial method (Fundamental Principle of Dynamics) which requires taking all forces into account, the PVW relies on a purely energetic approach.
          </p>
          <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
            It states that at any given instant, the sum of the virtual works of active forces and inertia forces is zero for any geometrically admissible virtual displacement. Its decisive advantage is that it <strong>completely eliminates the need to calculate perfect constraint forces</strong> (such as the reaction of a joint or the tension of a cable), because the latter do no work during these displacements.
          </p>
          
          <div className="grid-cards" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginTop: '2.5rem' }}>
            <div style={{ background: 'rgba(255,255,255,0.02)', padding: '2rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>
                <Compass size={24} color="var(--primary-color)"/> In Applied Mechanics
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.6' }}>
                In engineering, this method is essential for analyzing highly constrained multi-degree-of-freedom systems, such as articulated robotics, spatial deployment mechanisms, or in civil engineering for studying the stability of complex structures.
              </p>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.02)', padding: '2rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>
                <Dna size={24} color="var(--primary-color)"/> In Biomechanics
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.6' }}>
                The biomechanics of human movement (gait analysis, prosthetics) models the skeleton as a poly-articulated system. The PVW allows isolating relevant unknowns and estimating muscle forces without having to calculate the extremely complex joint contact pressures.
              </p>
            </div>
          </div>
        </div>

        {/* Exercise Section */}
        <div className="glass-panel" style={{ padding: '3rem', textAlign: 'left' }}>
          <h2 style={{ marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
            Application: Pendulum with a Torsional Spring
          </h2>

          <div style={{ background: 'rgba(255,255,255,0.03)', padding: '2rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
            <h3 style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>Problem Statement</h3>
            <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
              Find the equation of motion for the given system; the rod has negligible mass, a concentrated mass <InlineMath math={String.raw`m`} /> at one end, and a torsional spring with elastic constant <InlineMath math={String.raw`\mu`} /> at the other, moving in a vertical plane.
            </p>

            <div style={{ 
              width: '100%', 
              padding: '2rem',
              background: 'rgba(255,255,255,0.02)', 
              borderRadius: '12px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              margin: '0 auto 2rem auto',
              border: '1px solid rgba(255,255,255,0.05)',
              color: 'var(--text-primary)'
            }}>
              <svg viewBox="0 0 300 250" style={{ width: '100%', height: 'auto', maxWidth: '350px' }}>
                <defs>
                  <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="currentColor" />
                  </marker>
                  <marker id="arrowhead-red" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="#ef4444" />
                  </marker>
                </defs>
                <line x1="80" y1="200" x2="250" y2="200" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrowhead)" />
                <text x="260" y="205" fill="currentColor" fontSize="14" fontFamily="sans-serif">x</text>
                <line x1="100" y1="220" x2="100" y2="50" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrowhead)" />
                <text x="95" y="40" fill="currentColor" fontSize="14" fontFamily="sans-serif">y</text>
                <line x1="40" y1="50" x2="40" y2="90" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrowhead)" />
                <text x="25" y="75" fill="currentColor" fontSize="14" fontFamily="sans-serif">g</text>
                <path d="M 82 200 A 6 6 0 0 1 92 190 A 8 8 0 0 1 108 190 A 6 6 0 0 1 118 200" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <text x="65" y="195" fill="currentColor" fontSize="14" fontFamily="sans-serif">μ</text>
                <path d="M 80 200 L 70 210 M 90 200 L 80 210 M 100 200 L 90 210 M 110 200 L 100 210 M 120 200 L 110 210" stroke="currentColor" strokeWidth="1" />
                <line x1="100" y1="200" x2="180" y2="100" stroke="currentColor" strokeWidth="3" />
                <circle cx="100" cy="200" r="4.5" fill="#0f172a" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="100" cy="200" r="1.5" fill="currentColor" />
                <text x="150" y="160" fill="currentColor" fontSize="14" fontFamily="sans-serif">l</text>
                <circle cx="180" cy="100" r="6" fill="currentColor" />
                <text x="195" y="105" fill="currentColor" fontSize="14" fontFamily="sans-serif">P, m</text>
                <path d="M 100 130 A 70 70 0 0 1 144 145" fill="none" stroke="#ef4444" strokeWidth="2" markerEnd="url(#arrowhead-red)" />
                <text x="115" y="130" fill="#ef4444" fontSize="16" fontFamily="sans-serif">θ</text>
              </svg>
            </div>

            <h3 style={{ marginBottom: '1.5rem', color: 'var(--text-primary)', marginTop: '3rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem' }}>Detailed Solution</h3>
            
            <div style={{ background: 'rgba(14, 165, 233, 0.03)', padding: '1.5rem', borderRadius: '12px', borderLeft: '4px solid var(--primary-color)', marginBottom: '2rem' }}>
              <h4 style={{ marginBottom: '0.75rem', color: 'var(--text-primary)' }}>1. Problem Setup and Objective</h4>
              <p style={{ marginBottom: '0.75rem', fontSize: '1.05rem', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                The system is an inverted pendulum modified by adding a torsional spring at its base. The assembly evolves in a vertical plane.
              </p>
              <p style={{ marginBottom: '0', fontSize: '1.05rem', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                <strong>Objective:</strong> Determine the differential equation of motion governing the angle <InlineMath math={String.raw`\theta(t)`} />. Using the Principle of Virtual Work is ideal here because it allows us to bypass the calculation of the unknown reaction force at the pivot joint (the hinge at the origin).
              </p>
            </div>

            <h4 style={{ marginBottom: '1rem', color: 'var(--text-primary)', marginTop: '2rem' }}>2. Geometric and Kinematic Parameterization</h4>
            <p style={{ marginBottom: '1rem', fontSize: '1.1rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
              Since the system has only one degree of freedom, we choose the angle <InlineMath math={String.raw`\theta`} /> as our single <strong>Lagrangian coordinate</strong>. The geometric constraint equation giving the position of the point mass <InlineMath math={String.raw`P`} /> in the Cartesian coordinate system is written as:
            </p>

            <BlockMath math={String.raw`P = l \begin{pmatrix} \sin\theta \\ \cos\theta \end{pmatrix}`} />

            <p style={{ marginBottom: '1rem', marginTop: '1.5rem', fontSize: '1.1rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
              By differentiating with respect to time, we obtain the velocity and acceleration vectors of point <InlineMath math={String.raw`P`} />, which are essential for calculating the inertia force:
            </p>

            <BlockMath math={String.raw`\begin{cases} \dot{P} = l \dot{\theta} \begin{pmatrix} \cos\theta \\ -\sin\theta \end{pmatrix} \\ \ddot{P} = l \begin{pmatrix} -\sin(\theta)\dot{\theta}^2 + \cos(\theta)\ddot{\theta} \\ -\cos(\theta)\dot{\theta}^2 - \sin(\theta)\ddot{\theta} \end{pmatrix} \end{cases}`} />

            <h4 style={{ marginBottom: '1rem', color: 'var(--text-primary)', marginTop: '3rem' }}>3. Virtual Displacement</h4>
            <p style={{ marginBottom: '1rem', fontSize: '1.1rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
              To apply the principle, we freeze time (the global configuration of the system is locked) and impose an <strong>infinitesimal virtual displacement</strong> compatible with the constraints. Here, this displacement corresponds to a tiny virtual angular variation <InlineMath math={String.raw`\delta\theta`} />.
            </p>

            <div style={{ 
              width: '100%', 
              padding: '2rem',
              background: 'rgba(255,255,255,0.02)', 
              borderRadius: '12px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              margin: '2rem auto',
              border: '1px solid rgba(255,255,255,0.05)'
            }}>
              <svg viewBox="0 0 300 250" style={{ width: '100%', height: 'auto', maxWidth: '350px' }}>
                <defs>
                  <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="currentColor" />
                  </marker>
                  <marker id="arrowhead-red" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="#ef4444" />
                  </marker>
                </defs>
                <line x1="80" y1="200" x2="250" y2="200" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrowhead)" />
                <text x="260" y="205" fill="currentColor" fontSize="14" fontFamily="sans-serif">x</text>
                <line x1="100" y1="220" x2="100" y2="50" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrowhead)" />
                <text x="95" y="40" fill="currentColor" fontSize="14" fontFamily="sans-serif">y</text>
                <path d="M 82 200 A 6 6 0 0 1 92 190 A 8 8 0 0 1 108 190 A 6 6 0 0 1 118 200" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <text x="65" y="195" fill="currentColor" fontSize="14" fontFamily="sans-serif">μ</text>
                <path d="M 80 200 L 70 210 M 90 200 L 80 210 M 100 200 L 90 210 M 110 200 L 100 210 M 120 200 L 110 210" stroke="currentColor" strokeWidth="1" />
                
                <line x1="100" y1="200" x2="157.3" y2="118.1" stroke="currentColor" strokeWidth="3" />
                <circle cx="100" cy="200" r="4.5" fill="#0f172a" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="100" cy="200" r="1.5" fill="currentColor" />
                <circle cx="157.3" cy="118.1" r="5" fill="currentColor" />
                <text x="145" y="110" fill="currentColor" fontSize="14" fontFamily="sans-serif">P</text>
                <text x="165" y="115" fill="currentColor" fontSize="14" fontFamily="sans-serif">m</text>
                <text x="165" y="90" fill="#ef4444" fontSize="12" fontFamily="sans-serif">P(θ)</text>
                <path d="M 175 95 Q 170 105 160 115" fill="none" stroke="#ef4444" strokeWidth="1" markerEnd="url(#arrowhead-red)" />

                <line x1="100" y1="200" x2="181.9" y2="142.7" stroke="#ef4444" strokeWidth="2" strokeDasharray="5,5" />
                <circle cx="181.9" cy="142.7" r="4" fill="#ef4444" />
                <text x="190" y="155" fill="#ef4444" fontSize="12" fontFamily="sans-serif">P(θ+δθ)</text>

                <line x1="162.3" y1="120" x2="178" y2="138" stroke="#ef4444" strokeWidth="1.5" markerEnd="url(#arrowhead-red)" />
                <text x="180" y="130" fill="#ef4444" fontSize="14" fontFamily="sans-serif">δP</text>

                <path d="M 100 130 A 70 70 0 0 1 140 143" fill="none" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
                <text x="115" y="135" fill="currentColor" fontSize="14" fontFamily="sans-serif">θ</text>

                <path d="M 148 132 A 80 80 0 0 1 165 153" fill="none" stroke="#ef4444" strokeWidth="1.5" markerEnd="url(#arrowhead-red)" />
                <text x="140" y="160" fill="#ef4444" fontSize="14" fontFamily="sans-serif">δθ</text>
              </svg>
            </div>

            <p style={{ marginBottom: '1rem', fontSize: '1.1rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
              It is crucial to distinguish the actual coordinate <InlineMath math={String.raw`\theta`} /> from the localized virtual displacement <InlineMath math={String.raw`\delta\theta`} />. The latter induces a spatial Cartesian displacement <InlineMath math={String.raw`\delta P`} />:
            </p>

            <BlockMath math={String.raw`\delta P = P(\theta + \delta\theta) - P(\theta)`} />

            <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '1.5rem', borderRadius: '12px', marginBottom: '2rem' }}>
              <p style={{ marginBottom: '1rem', fontSize: '1.1rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
                We can rigorously evaluate this displacement vector using trigonometric addition formulas:
              </p>
              <BlockMath math={String.raw`P(\theta+\delta\theta) = l \begin{pmatrix} \sin(\theta+\delta\theta) \\ \cos(\theta+\delta\theta) \end{pmatrix} = l \begin{pmatrix} \sin\theta\cos\delta\theta + \cos\theta\sin\delta\theta \\ \cos\theta\cos\delta\theta - \sin\theta\sin\delta\theta \end{pmatrix}`} />
              
              <div style={{ borderLeft: '4px solid var(--primary-color)', paddingLeft: '1.5rem', margin: '1.5rem 0' }}>
                <p style={{ marginBottom: '0.5rem', fontSize: '1.05rem', color: 'var(--text-primary)' }}>
                  Since the studied displacement is strictly infinitesimal (<InlineMath math={String.raw`\delta\theta \to 0`} />), we linearize around the origin: <InlineMath math={String.raw`\sin\delta\theta \approx \delta\theta`} /> and <InlineMath math={String.raw`\cos\delta\theta \approx 1`} />.
                </p>
                <p style={{ marginBottom: '0', fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                  <em>Note: This approach is mathematically equivalent to computing the tangent vector directly via differential calculus: <InlineMath math={String.raw`\delta P = \frac{\partial P}{\partial \theta} \delta\theta`} />.</em>
                </p>
              </div>

              <BlockMath math={String.raw`\implies \delta P = l \begin{pmatrix} \sin\theta + \cos\theta\delta\theta - \sin\theta \\ \cos\theta - \sin\theta\delta\theta - \cos\theta \end{pmatrix} = l\delta\theta \begin{pmatrix} \cos\theta \\ -\sin\theta \end{pmatrix}`} />
            </div>

            <h4 style={{ marginBottom: '1rem', color: 'var(--text-primary)', marginTop: '3rem' }}>4. d'Alembert's Energy Balance</h4>
            <p style={{ marginBottom: '1rem', fontSize: '1.1rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
              The principle states that the sum of the virtual work of active forces (<InlineMath math={String.raw`\delta\mathcal{L}^a`} />) and the virtual work of inertia forces (<InlineMath math={String.raw`\delta\mathcal{L}^m`} />) is identically zero for any virtual evolution:
            </p>

            <BlockMath math={String.raw`\delta\mathcal{L}^a + \delta\mathcal{L}^m = 0 \quad \forall \delta\theta`} />

            <p style={{ marginBottom: '1rem', marginTop: '2.5rem', fontSize: '1.1rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
              <strong>Calculation of the virtual work of inertia forces:</strong>
            </p>
            <p style={{ marginBottom: '1rem', fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
              The inertia force is defined as opposing the acceleration vector (<InlineMath math={String.raw`-m\ddot{P}`} />). The dot product with the virtual displacement yields the virtual inertial energy:
            </p>

            <div style={{ overflowX: 'auto', padding: '1rem 0' }}>
              <BlockMath math={String.raw`\delta\mathcal{L}^m = \underbrace{-m\ddot{P}}_{\text{inertia force}} \cdot \delta P = -m l \underbrace{\begin{pmatrix} -\sin(\theta)\dot{\theta}^2 + \cos(\theta)\ddot{\theta} \\ -\cos(\theta)\dot{\theta}^2 - \sin(\theta)\ddot{\theta} \end{pmatrix}}_{\text{acceleration}} \cdot l\delta\theta \begin{pmatrix} \cos\theta \\ -\sin\theta \end{pmatrix}`} />
            </div>

            <div style={{ overflowX: 'auto', padding: '1rem 0' }}>
              <BlockMath math={String.raw`\delta\mathcal{L}^m = -ml^2\delta\theta \left( -\dot{\theta}^2\sin(\theta)\cos(\theta) + \ddot{\theta}\cos^2\theta + \sin(\theta)\cos(\theta)\dot{\theta}^2 + \sin^2(\theta)\ddot{\theta} \right)`} />
            </div>

            <p style={{ marginBottom: '1rem', marginTop: '1rem', fontSize: '1.1rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
              The terms in <InlineMath math={String.raw`\dot{\theta}^2`} /> (which represent the centripetal acceleration) cancel out. By using the trigonometric identity <InlineMath math={String.raw`\sin^2\theta + \cos^2\theta = 1`} />, the expression simplifies greatly:
            </p>

            <BlockMath math={String.raw`\delta\mathcal{L}^m = -ml^2\ddot{\theta}\delta\theta`} />

            <p style={{ marginBottom: '1rem', marginTop: '3rem', fontSize: '1.1rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
              <strong>Calculation of the virtual work of active forces:</strong>
            </p>
            <p style={{ marginBottom: '1rem', fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
              The system is subjected to two purely active forces: the restoring torque of the spring (which naturally opposes any rotation) and the weight of the concentrated mass <InlineMath math={String.raw`m`} />.
            </p>

            <div style={{ overflowX: 'auto', padding: '1rem 0' }}>
              <BlockMath math={String.raw`\delta\mathcal{L}^a = \underbrace{-\mu\theta\delta\theta}_{\substack{\text{Virtual work of} \\ \text{the torsional spring}}} - \underbrace{mg\vec{e}_y \cdot \delta P}_{\text{Virtual work of the weight}}`} />
            </div>

            <p style={{ marginBottom: '1rem', fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
              By projecting the weight along the upward <InlineMath math={String.raw`y`} />-axis, we perform the dot product:
            </p>

            <BlockMath math={String.raw`\delta\mathcal{L}^a = -\mu\theta\delta\theta - mg \begin{pmatrix} 0 \\ 1 \end{pmatrix} \cdot l\delta\theta \begin{pmatrix} \cos\theta \\ -\sin\theta \end{pmatrix} = -\mu\theta\delta\theta + mgl\sin\theta\delta\theta`} />

            <h4 style={{ marginBottom: '1rem', color: 'var(--text-primary)', marginTop: '3rem' }}>5. Conclusion: The Equation of Motion</h4>
            <p style={{ marginBottom: '1rem', fontSize: '1.1rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
              By summing the different energetic terms in the principle's equation, we obtain:
            </p>

            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', margin: '2rem 0' }}>
              <BlockMath math={String.raw`-\mu\theta\delta\theta + mgl\sin\theta\delta\theta - ml^2\ddot{\theta}\delta\theta = 0 \quad \forall \delta\theta`} />
            </div>

            <p style={{ marginBottom: '1rem', marginTop: '1rem', fontSize: '1.1rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
              Given that this energetic equality must hold for any arbitrary non-zero virtual displacement (<InlineMath math={String.raw`\delta\theta \neq 0`} />), we can factor out the angular variation to extract the equation of motion:
            </p>

            <div style={{ 
              background: 'rgba(14, 165, 233, 0.1)', 
              padding: '2rem', 
              borderRadius: '12px', 
              border: '2px solid var(--primary-color)', 
              margin: '3rem 0', 
              boxShadow: '0 8px 32px rgba(14, 165, 233, 0.15)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: 'var(--primary-color)' }}></div>
              <h4 style={{ marginBottom: '1rem', textAlign: 'center', color: 'var(--primary-color)' }}>Non-linear Differential Equation of Motion</h4>
              <BlockMath math={String.raw`ml^2\ddot{\theta} - mgl\sin\theta + \mu\theta = 0`} />
            </div>
            
          </div>
        </div>

        {/* Biomechanical Insight Section */}
        <div className="glass-panel" style={{ padding: '3rem', marginTop: '3rem', display: 'flex', flexDirection: 'column', gap: '2rem', borderTop: '4px solid var(--primary-color)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Dna size={32} color="var(--primary-color)" />
            <h2 style={{ color: 'var(--text-primary)', margin: 0 }}>Biomechanical Applications</h2>
          </div>
          
          <div>
            <h3 style={{ marginBottom: '1.5rem', color: 'var(--text-primary)', fontSize: '1.4rem' }}>1. Postural Balance (Quiet Standing)</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', alignItems: 'center' }}>
              <div style={{ flex: '1 1 400px' }}>
                <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
                  This seemingly abstract exercise is actually one of the most fundamental models in human biomechanics! The "inverted pendulum with a torsional spring" is the standard model used to study <strong>postural balance</strong> (orthostatic posture) in humans.
                </p>
                
                <ul style={{ listStyleType: 'none', padding: 0, marginBottom: '1.5rem' }}>
                  <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--primary-color)', marginTop: '8px', flexShrink: 0 }}></div>
                    <div>
                      <strong style={{ color: 'var(--text-primary)' }}>The Rod & Mass (<InlineMath math={String.raw`m`} />):</strong> Represents the entire human body, with the mass concentrated at the center of gravity.
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--primary-color)', marginTop: '8px', flexShrink: 0 }}></div>
                    <div>
                      <strong style={{ color: 'var(--text-primary)' }}>The Pivot Point:</strong> Represents the human ankle joint.
                    </div>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--primary-color)', marginTop: '8px', flexShrink: 0 }}></div>
                    <div>
                      <strong style={{ color: 'var(--text-primary)' }}>The Torsional Spring (<InlineMath math={String.raw`\mu`} />):</strong> Represents the active and passive stiffness of the calf muscles and the Achilles tendon.
                    </div>
                  </li>
                </ul>

                <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
                  The equation of motion we derived, <InlineMath math={String.raw`ml^2\ddot{\theta} - mgl\sin\theta + \mu\theta = 0`} />, determines if a person will fall. If the muscular stiffness <InlineMath math={String.raw`\mu\theta`} /> is not strong enough to counter gravity (<InlineMath math={String.raw`mgl\sin\theta`} />), the system becomes unstable. This equation is widely used in evaluating neurological balance disorders!
                </p>
              </div>
              
              <div style={{ flex: '1 1 300px', display: 'flex', justifyContent: 'center' }}>
                <div style={{ position: 'relative', width: '100%', maxWidth: '400px', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(135deg, rgba(14,165,233,0.2) 0%, transparent 100%)', pointerEvents: 'none' }}></div>
                  <img src="/biomechanics-posture.png" alt="Biomechanics of postural balance showing the inverted pendulum model" style={{ width: '100%', height: 'auto', display: 'block' }} />
                </div>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '1rem', paddingTop: '2.5rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
            <h3 style={{ marginBottom: '1.5rem', color: 'var(--text-primary)', fontSize: '1.4rem' }}>Other Notable Applications</h3>
            <div className="grid-cards" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
              
              <div style={{ background: 'rgba(255,255,255,0.02)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <h4 style={{ color: 'var(--primary-color)', marginBottom: '0.75rem' }}>Joint Stiffness (Knee Reflex)</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>
                  A dangling lower leg acts as a standard pendulum. The knee is the pivot, and the ligaments/muscles (quadriceps) act as the spring <InlineMath math={String.raw`\mu`} />. This model is used clinically to measure joint stiffness and diagnose muscle spasticity by observing the oscillation frequency.
                </p>
              </div>

              <div style={{ background: 'rgba(255,255,255,0.02)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <h4 style={{ color: 'var(--primary-color)', marginBottom: '0.75rem' }}>Exoskeletons & Prosthetics</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>
                  Passive orthoses often feature physical torsional springs at the hip or ankle. Engineers use this exact equation to optimize the spring constant <InlineMath math={String.raw`\mu`} />, allowing the device to store gravitational energy during the gait cycle and reduce the user's metabolic cost.
                </p>
              </div>

              <div style={{ background: 'rgba(255,255,255,0.02)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <h4 style={{ color: 'var(--primary-color)', marginBottom: '0.75rem' }}>Cervical Spine Stabilization</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>
                  The human head is a heavy mass balanced on the cervical spine (the rod). Neck muscles provide the necessary angular stiffness <InlineMath math={String.raw`\mu`} /> to keep the head upright. This inverted pendulum model is crucial for simulating whiplash injuries in crash tests.
                </p>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default VirtualWorkApplicationPage;
