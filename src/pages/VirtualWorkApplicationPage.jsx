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

const text = {
  en: {
    title: 'Analytical Mechanics',
    subtitle: 'Application Exercise',
    introTitle: 'Introduction to the Principle of Virtual Work',
    intro1: "The Principle of Virtual Work (PVW), or d'Alembert's principle, offers a highly powerful mathematical formulation of analytical mechanics. Unlike Newton's vectorial method (Fundamental Principle of Dynamics) which requires taking all forces into account, the PVW relies on a purely energetic approach.",
    intro2: 'It states that at any given instant, the sum of the virtual works of active forces and inertia forces is zero for any geometrically admissible virtual displacement. Its decisive advantage is that it completely eliminates the need to calculate perfect constraint forces (such as the reaction of a joint or the tension of a cable), because the latter do no work during these displacements.',
    applied: 'In Applied Mechanics',
    appliedText: 'In engineering, this method is essential for analyzing highly constrained multi-degree-of-freedom systems, such as articulated robotics, spatial deployment mechanisms, or in civil engineering for studying the stability of complex structures.',
    bio: 'In Biomechanics',
    bioText: 'The biomechanics of human movement (gait analysis, prosthetics) models the skeleton as a poly-articulated system. The PVW allows isolating relevant unknowns and estimating muscle forces without having to calculate the extremely complex joint contact pressures.',
    appTitle: 'Application: Pendulum with a Torsional Spring',
    statement: 'Problem Statement',
    statementText: 'Find the equation of motion for the given system; the rod has negligible mass, a concentrated mass',
    statementText2: 'at one end, and a torsional spring with elastic constant',
    statementText3: 'at the other, moving in a vertical plane.',
    solution: 'Detailed Solution',
    step1: '1. Problem Setup and Objective',
    step1p1: 'The system is an inverted pendulum modified by adding a torsional spring at its base. The assembly evolves in a vertical plane.',
    objective: 'Objective:',
    step1p2: 'Determine the differential equation of motion governing the angle',
    step1p3: 'Using the Principle of Virtual Work is ideal here because it allows us to bypass the calculation of the unknown reaction force at the pivot joint (the hinge at the origin).',
    step2: '2. Geometric and Kinematic Parameterization',
    step2p1: 'Since the system has only one degree of freedom, we choose the angle',
    step2p2: 'as our single Lagrangian coordinate. The geometric constraint equation giving the position of the point mass',
    step2p3: 'in the Cartesian coordinate system is written as:',
    step2p4: 'By differentiating with respect to time, we obtain the velocity and acceleration vectors of point',
    step2p5: 'which are essential for calculating the inertia force:',
    step3: '3. Virtual Displacement',
    step3p1: 'To apply the principle, we freeze time (the global configuration of the system is locked) and impose an infinitesimal virtual displacement compatible with the constraints. Here, this displacement corresponds to a tiny virtual angular variation',
    step3p2: 'It is crucial to distinguish the actual coordinate',
    step3p3: 'from the localized virtual displacement',
    step3p4: 'The latter induces a spatial Cartesian displacement',
    trig: 'We can rigorously evaluate this displacement vector using trigonometric addition formulas:',
    linearize: 'Since the studied displacement is strictly infinitesimal',
    linearize2: 'we linearize around the origin:',
    note: 'Note:',
    and: 'and',
    tangent: 'This approach is mathematically equivalent to computing the tangent vector directly via differential calculus:',
    step4: "4. d'Alembert's Energy Balance",
    step4p1: 'The principle states that the sum of the virtual work of active forces',
    step4p2: 'and the virtual work of inertia forces',
    step4p3: 'is identically zero for any virtual evolution:',
    inertiaCalc: 'Calculation of the virtual work of inertia forces:',
    inertiaText: 'The inertia force is defined as opposing the acceleration vector',
    inertiaText2: 'The dot product with the virtual displacement yields the virtual inertial energy:',
    cancel: 'The terms in',
    cancel2: 'which represent the centripetal acceleration, cancel out. By using the trigonometric identity',
    cancel3: 'the expression simplifies greatly:',
    activeCalc: 'Calculation of the virtual work of active forces:',
    activeText: 'The system is subjected to two purely active forces: the restoring torque of the spring (which naturally opposes any rotation) and the weight of the concentrated mass',
    project: 'By projecting the weight along the upward',
    project2: 'axis, we perform the dot product:',
    step5: '5. Conclusion: The Equation of Motion',
    sumText: "By summing the different energetic terms in the principle's equation, we obtain:",
    arbitrary: 'Given that this energetic equality must hold for any arbitrary non-zero virtual displacement',
    arbitrary2: 'we can factor out the angular variation to extract the equation of motion:',
    finalEq: 'Non-linear Differential Equation of Motion',
    bioApp: 'Biomechanical Applications',
    postural: '1. Postural Balance (Quiet Standing)',
    posturalText: 'This seemingly abstract exercise is actually one of the most fundamental models in human biomechanics! The "inverted pendulum with a torsional spring" is the standard model used to study postural balance (orthostatic posture) in humans.',
    rod: 'The Rod & Mass',
    rodText: 'Represents the entire human body, with the mass concentrated at the center of gravity.',
    pivot: 'The Pivot Point:',
    pivotText: 'Represents the human ankle joint.',
    spring: 'The Torsional Spring',
    springText: 'Represents the active and passive stiffness of the calf muscles and the Achilles tendon.',
    derived: 'The equation of motion we derived',
    derived2: 'determines if a person will fall. If the muscular stiffness',
    derived3: 'is not strong enough to counter gravity',
    derived4: 'the system becomes unstable. This equation is widely used in evaluating neurological balance disorders!',
    other: 'Other Notable Applications',
    knee: 'Joint Stiffness (Knee Reflex)',
    kneeText: 'A dangling lower leg acts as a standard pendulum. The knee is the pivot, and the ligaments/muscles (quadriceps) act as the spring',
    kneeText2: 'This model is used clinically to measure joint stiffness and diagnose muscle spasticity by observing the oscillation frequency.',
    exo: 'Exoskeletons & Prosthetics',
    exoText: 'Passive orthoses often feature physical torsional springs at the hip or ankle. Engineers use this exact equation to optimize the spring constant',
    exoText2: "allowing the device to store gravitational energy during the gait cycle and reduce the user's metabolic cost.",
    cervical: 'Cervical Spine Stabilization',
    cervicalText: 'The human head is a heavy mass balanced on the cervical spine (the rod). Neck muscles provide the necessary angular stiffness',
    cervicalText2: 'to keep the head upright. This inverted pendulum model is crucial for simulating whiplash injuries in crash tests.',
  },
  fr: {
    title: 'Mécanique analytique',
    subtitle: 'Exercice d’application',
    introTitle: 'Introduction au principe des travaux virtuels',
    intro1: 'Le principe des travaux virtuels (PTV), ou principe de d’Alembert, offre une formulation mathématique très puissante de la mécanique analytique. Contrairement à la méthode vectorielle de Newton, qui nécessite de prendre en compte toutes les forces, le PTV repose sur une approche purement énergétique.',
    intro2: 'Il affirme qu’à chaque instant, la somme des travaux virtuels des forces actives et des forces d’inertie est nulle pour tout déplacement virtuel géométriquement admissible. Son avantage décisif est qu’il élimine complètement le calcul des forces de liaison parfaites, comme la réaction d’une articulation ou la tension d’un câble, car ces forces ne travaillent pas lors de ces déplacements.',
    applied: 'En mécanique appliquée',
    appliedText: 'En ingénierie, cette méthode est essentielle pour analyser des systèmes très contraints à plusieurs degrés de liberté, comme la robotique articulée, les mécanismes de déploiement spatial ou encore l’étude de la stabilité de structures complexes en génie civil.',
    bio: 'En biomécanique',
    bioText: 'La biomécanique du mouvement humain, comme l’analyse de la marche ou les prothèses, modélise le squelette comme un système polyarticulé. Le PTV permet d’isoler les inconnues pertinentes et d’estimer les forces musculaires sans calculer les pressions de contact articulaires, extrêmement complexes.',
    appTitle: 'Application : pendule avec ressort de torsion',
    statement: 'Énoncé du problème',
    statementText: 'Trouver l’équation du mouvement du système donné ; la tige est de masse négligeable, une masse concentrée',
    statementText2: 'se trouve à une extrémité, et un ressort de torsion de constante élastique',
    statementText3: 'se trouve à l’autre extrémité, le mouvement ayant lieu dans un plan vertical.',
    solution: 'Solution détaillée',
    step1: '1. Mise en place du problème et objectif',
    step1p1: 'Le système est un pendule inversé modifié par l’ajout d’un ressort de torsion à sa base. L’ensemble évolue dans un plan vertical.',
    objective: 'Objectif :',
    step1p2: 'Déterminer l’équation différentielle du mouvement qui gouverne l’angle',
    step1p3: 'L’utilisation du principe des travaux virtuels est idéale ici, car elle permet d’éviter le calcul de la réaction inconnue au pivot, c’est-à-dire la liaison en charnière à l’origine.',
    step2: '2. Paramétrage géométrique et cinématique',
    step2p1: 'Comme le système ne possède qu’un seul degré de liberté, on choisit l’angle',
    step2p2: 'comme unique coordonnée lagrangienne. L’équation de contrainte géométrique donnant la position de la masse ponctuelle',
    step2p3: 'dans le repère cartésien s’écrit :',
    step2p4: 'En dérivant par rapport au temps, on obtient les vecteurs vitesse et accélération du point',
    step2p5: 'qui sont essentiels pour calculer la force d’inertie :',
    step3: '3. Déplacement virtuel',
    step3p1: 'Pour appliquer le principe, on fige le temps, c’est-à-dire que la configuration globale du système est bloquée, puis on impose un déplacement virtuel infinitésimal compatible avec les contraintes. Ici, ce déplacement correspond à une petite variation angulaire virtuelle',
    step3p2: 'Il est essentiel de distinguer la coordonnée réelle',
    step3p3: 'du déplacement virtuel localisé',
    step3p4: 'Ce dernier induit un déplacement cartésien spatial',
    trig: 'On peut évaluer rigoureusement ce vecteur déplacement à l’aide des formules d’addition trigonométriques :',
    linearize: 'Comme le déplacement étudié est strictement infinitésimal',
    linearize2: 'on linéarise au voisinage de l’origine :',
    note: 'Remarque :',
    and: 'et',
    tangent: 'Cette approche est mathématiquement équivalente au calcul direct du vecteur tangent par calcul différentiel :',
    step4: '4. Bilan énergétique de d’Alembert',
    step4p1: 'Le principe affirme que la somme du travail virtuel des forces actives',
    step4p2: 'et du travail virtuel des forces d’inertie',
    step4p3: 'est identiquement nulle pour toute évolution virtuelle :',
    inertiaCalc: 'Calcul du travail virtuel des forces d’inertie :',
    inertiaText: 'La force d’inertie est définie comme opposée au vecteur accélération',
    inertiaText2: 'Le produit scalaire avec le déplacement virtuel donne l’énergie virtuelle inertielle :',
    cancel: 'Les termes en',
    cancel2: 'qui représentent l’accélération centripète, se simplifient. En utilisant l’identité trigonométrique',
    cancel3: 'l’expression se simplifie fortement :',
    activeCalc: 'Calcul du travail virtuel des forces actives :',
    activeText: 'Le système est soumis à deux actions purement actives : le couple de rappel du ressort, qui s’oppose naturellement à toute rotation, et le poids de la masse concentrée',
    project: 'En projetant le poids selon l’axe',
    project2: 'orienté vers le haut, on effectue le produit scalaire :',
    step5: '5. Conclusion : l’équation du mouvement',
    sumText: 'En additionnant les différents termes énergétiques dans l’équation du principe, on obtient :',
    arbitrary: 'Comme cette égalité énergétique doit être vraie pour tout déplacement virtuel arbitraire non nul',
    arbitrary2: 'on peut factoriser la variation angulaire pour extraire l’équation du mouvement :',
    finalEq: 'Équation différentielle non linéaire du mouvement',
    bioApp: 'Applications biomécaniques',
    postural: '1. Équilibre postural',
    posturalText: 'Cet exercice, en apparence abstrait, est en réalité l’un des modèles fondamentaux de la biomécanique humaine. Le pendule inversé avec ressort de torsion est le modèle standard utilisé pour étudier l’équilibre postural, c’est-à-dire la posture orthostatique chez l’être humain.',
    rod: 'La tige et la masse',
    rodText: 'Représentent l’ensemble du corps humain, avec la masse concentrée au centre de gravité.',
    pivot: 'Le point pivot :',
    pivotText: 'Représente l’articulation de la cheville.',
    spring: 'Le ressort de torsion',
    springText: 'Représente la raideur active et passive des muscles du mollet et du tendon d’Achille.',
    derived: 'L’équation du mouvement que nous avons obtenue',
    derived2: 'détermine si une personne va tomber. Si la raideur musculaire',
    derived3: 'n’est pas suffisante pour compenser la gravité',
    derived4: 'le système devient instable. Cette équation est largement utilisée dans l’évaluation des troubles neurologiques de l’équilibre.',
    other: 'Autres applications notables',
    knee: 'Raideur articulaire (réflexe du genou)',
    kneeText: 'Une jambe inférieure suspendue se comporte comme un pendule classique. Le genou est le pivot, et les ligaments ou muscles, notamment le quadriceps, jouent le rôle du ressort',
    kneeText2: 'Ce modèle est utilisé cliniquement pour mesurer la raideur articulaire et diagnostiquer la spasticité musculaire en observant la fréquence d’oscillation.',
    exo: 'Exosquelettes & prothèses',
    exoText: 'Les orthèses passives comportent souvent des ressorts de torsion physiques au niveau de la hanche ou de la cheville. Les ingénieurs utilisent exactement cette équation pour optimiser la constante de raideur',
    exoText2: 'ce qui permet au dispositif de stocker l’énergie gravitationnelle pendant le cycle de marche et de réduire le coût métabolique de l’utilisateur.',
    cervical: 'Stabilisation de la colonne cervicale',
    cervicalText: 'La tête humaine est une masse lourde équilibrée sur la colonne cervicale, qui joue le rôle de tige. Les muscles du cou fournissent la raideur angulaire nécessaire',
    cervicalText2: 'pour maintenir la tête droite. Ce modèle de pendule inversé est crucial pour simuler les blessures de type coup du lapin lors des essais de collision.',
  },
};

const VirtualWorkApplicationPage = ({ language = 'en' }) => {
  const t = text[language] || text.en;

  return (
    <div className="page-header">
      <div className="container">
        <h1 className="gradient-text">{t.title}</h1>
        <p className="hero-subtitle" style={{marginBottom: 0}}>{t.subtitle}</p>
      </div>
      <div className="container page-content" style={{marginTop: '4rem'}}>
        
        {/* Introduction Section */}
        <div className="glass-panel" style={{ padding: '3rem', textAlign: 'left', marginBottom: '3rem' }}>
          <h2 style={{ marginBottom: '1.5rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Atom size={28} style={{ color: 'var(--primary-color)' }} /> {t.introTitle}
          </h2>
          <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
            {t.intro1}
          </p>
          <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
            {t.intro2}
          </p>
          
          <div className="grid-cards" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginTop: '2.5rem' }}>
            <div style={{ background: 'rgba(255,255,255,0.02)', padding: '2rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>
                <Compass size={24} color="var(--primary-color)"/> {t.applied}
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.6' }}>
                {t.appliedText}
              </p>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.02)', padding: '2rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>
                <Dna size={24} color="var(--primary-color)"/> {t.bio}
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.6' }}>
                {t.bioText}
              </p>
            </div>
          </div>
        </div>

        {/* Exercise Section */}
        <div className="glass-panel" style={{ padding: '3rem', textAlign: 'left' }}>
          <h2 style={{ marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
            {t.appTitle}
          </h2>

          <div style={{ background: 'rgba(255,255,255,0.03)', padding: '2rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
            <h3 style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>{t.statement}</h3>
            <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
              {t.statementText} <InlineMath math={String.raw`m`} /> {t.statementText2} <InlineMath math={String.raw`\mu`} /> {t.statementText3}
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

            <h3 style={{ marginBottom: '1.5rem', color: 'var(--text-primary)', marginTop: '3rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem' }}>{t.solution}</h3>
            
            <div style={{ background: 'rgba(14, 165, 233, 0.03)', padding: '1.5rem', borderRadius: '12px', borderLeft: '4px solid var(--primary-color)', marginBottom: '2rem' }}>
              <h4 style={{ marginBottom: '0.75rem', color: 'var(--text-primary)' }}>{t.step1}</h4>
              <p style={{ marginBottom: '0.75rem', fontSize: '1.05rem', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                {t.step1p1}
              </p>
              <p style={{ marginBottom: '0', fontSize: '1.05rem', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                <strong>{t.objective}</strong> {t.step1p2} <InlineMath math={String.raw`\theta(t)`} />. {t.step1p3}
              </p>
            </div>

            <h4 style={{ marginBottom: '1rem', color: 'var(--text-primary)', marginTop: '2rem' }}>{t.step2}</h4>
            <p style={{ marginBottom: '1rem', fontSize: '1.1rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
              {t.step2p1} <InlineMath math={String.raw`\theta`} /> {t.step2p2} <InlineMath math={String.raw`P`} /> {t.step2p3}
            </p>

            <BlockMath math={String.raw`P = l \begin{pmatrix} \sin\theta \\ \cos\theta \end{pmatrix}`} />

            <p style={{ marginBottom: '1rem', marginTop: '1.5rem', fontSize: '1.1rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
              {t.step2p4} <InlineMath math={String.raw`P`} />, {t.step2p5}
            </p>

            <BlockMath math={String.raw`\begin{cases} \dot{P} = l \dot{\theta} \begin{pmatrix} \cos\theta \\ -\sin\theta \end{pmatrix} \\ \ddot{P} = l \begin{pmatrix} -\sin(\theta)\dot{\theta}^2 + \cos(\theta)\ddot{\theta} \\ -\cos(\theta)\dot{\theta}^2 - \sin(\theta)\ddot{\theta} \end{pmatrix} \end{cases}`} />

            <h4 style={{ marginBottom: '1rem', color: 'var(--text-primary)', marginTop: '3rem' }}>{t.step3}</h4>
            <p style={{ marginBottom: '1rem', fontSize: '1.1rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
              {t.step3p1} <InlineMath math={String.raw`\delta\theta`} />.
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
              {t.step3p2} <InlineMath math={String.raw`\theta`} /> {t.step3p3} <InlineMath math={String.raw`\delta\theta`} />. {t.step3p4} <InlineMath math={String.raw`\delta P`} />:
            </p>

            <BlockMath math={String.raw`\delta P = P(\theta + \delta\theta) - P(\theta)`} />

            <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '1.5rem', borderRadius: '12px', marginBottom: '2rem' }}>
              <p style={{ marginBottom: '1rem', fontSize: '1.1rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
                {t.trig}
              </p>
              <BlockMath math={String.raw`P(\theta+\delta\theta) = l \begin{pmatrix} \sin(\theta+\delta\theta) \\ \cos(\theta+\delta\theta) \end{pmatrix} = l \begin{pmatrix} \sin\theta\cos\delta\theta + \cos\theta\sin\delta\theta \\ \cos\theta\cos\delta\theta - \sin\theta\sin\delta\theta \end{pmatrix}`} />
              
              <div style={{ borderLeft: '4px solid var(--primary-color)', paddingLeft: '1.5rem', margin: '1.5rem 0' }}>
                <p style={{ marginBottom: '0.5rem', fontSize: '1.05rem', color: 'var(--text-primary)' }}>
                  {t.linearize} (<InlineMath math={String.raw`\delta\theta \to 0`} />), {t.linearize2} <InlineMath math={String.raw`\sin\delta\theta \approx \delta\theta`} /> {t.and} <InlineMath math={String.raw`\cos\delta\theta \approx 1`} />.
                </p>
                <p style={{ marginBottom: '0', fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                  <em>{t.note} {t.tangent} <InlineMath math={String.raw`\delta P = \frac{\partial P}{\partial \theta} \delta\theta`} />.</em>
                </p>
              </div>

              <BlockMath math={String.raw`\implies \delta P = l \begin{pmatrix} \sin\theta + \cos\theta\delta\theta - \sin\theta \\ \cos\theta - \sin\theta\delta\theta - \cos\theta \end{pmatrix} = l\delta\theta \begin{pmatrix} \cos\theta \\ -\sin\theta \end{pmatrix}`} />
            </div>

            <h4 style={{ marginBottom: '1rem', color: 'var(--text-primary)', marginTop: '3rem' }}>{t.step4}</h4>
            <p style={{ marginBottom: '1rem', fontSize: '1.1rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
              {t.step4p1} (<InlineMath math={String.raw`\delta\mathcal{L}^a`} />) {t.step4p2} (<InlineMath math={String.raw`\delta\mathcal{L}^m`} />) {t.step4p3}
            </p>

            <BlockMath math={String.raw`\delta\mathcal{L}^a + \delta\mathcal{L}^m = 0 \quad \forall \delta\theta`} />

            <p style={{ marginBottom: '1rem', marginTop: '2.5rem', fontSize: '1.1rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
              <strong>{t.inertiaCalc}</strong>
            </p>
            <p style={{ marginBottom: '1rem', fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
              {t.inertiaText} (<InlineMath math={String.raw`-m\ddot{P}`} />). {t.inertiaText2}
            </p>

            <div style={{ overflowX: 'auto', padding: '1rem 0' }}>
              <BlockMath math={String.raw`\delta\mathcal{L}^m = \underbrace{-m\ddot{P}}_{\text{inertia force}} \cdot \delta P = -m l \underbrace{\begin{pmatrix} -\sin(\theta)\dot{\theta}^2 + \cos(\theta)\ddot{\theta} \\ -\cos(\theta)\dot{\theta}^2 - \sin(\theta)\ddot{\theta} \end{pmatrix}}_{\text{acceleration}} \cdot l\delta\theta \begin{pmatrix} \cos\theta \\ -\sin\theta \end{pmatrix}`} />
            </div>

            <div style={{ overflowX: 'auto', padding: '1rem 0' }}>
              <BlockMath math={String.raw`\delta\mathcal{L}^m = -ml^2\delta\theta \left( -\dot{\theta}^2\sin(\theta)\cos(\theta) + \ddot{\theta}\cos^2\theta + \sin(\theta)\cos(\theta)\dot{\theta}^2 + \sin^2(\theta)\ddot{\theta} \right)`} />
            </div>

            <p style={{ marginBottom: '1rem', marginTop: '1rem', fontSize: '1.1rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
              {t.cancel} <InlineMath math={String.raw`\dot{\theta}^2`} /> ({t.cancel2} <InlineMath math={String.raw`\sin^2\theta + \cos^2\theta = 1`} />), {t.cancel3}
            </p>

            <BlockMath math={String.raw`\delta\mathcal{L}^m = -ml^2\ddot{\theta}\delta\theta`} />

            <p style={{ marginBottom: '1rem', marginTop: '3rem', fontSize: '1.1rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
              <strong>{t.activeCalc}</strong>
            </p>
            <p style={{ marginBottom: '1rem', fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
              {t.activeText} <InlineMath math={String.raw`m`} />.
            </p>

            <div style={{ overflowX: 'auto', padding: '1rem 0' }}>
              <BlockMath math={String.raw`\delta\mathcal{L}^a = \underbrace{-\mu\theta\delta\theta}_{\substack{\text{Virtual work of} \\ \text{the torsional spring}}} - \underbrace{mg\vec{e}_y \cdot \delta P}_{\text{Virtual work of the weight}}`} />
            </div>

            <p style={{ marginBottom: '1rem', fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
              {t.project} <InlineMath math={String.raw`y`} />-{t.project2}
            </p>

            <BlockMath math={String.raw`\delta\mathcal{L}^a = -\mu\theta\delta\theta - mg \begin{pmatrix} 0 \\ 1 \end{pmatrix} \cdot l\delta\theta \begin{pmatrix} \cos\theta \\ -\sin\theta \end{pmatrix} = -\mu\theta\delta\theta + mgl\sin\theta\delta\theta`} />

            <h4 style={{ marginBottom: '1rem', color: 'var(--text-primary)', marginTop: '3rem' }}>{t.step5}</h4>
            <p style={{ marginBottom: '1rem', fontSize: '1.1rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
              {t.sumText}
            </p>

            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', margin: '2rem 0' }}>
              <BlockMath math={String.raw`-\mu\theta\delta\theta + mgl\sin\theta\delta\theta - ml^2\ddot{\theta}\delta\theta = 0 \quad \forall \delta\theta`} />
            </div>

            <p style={{ marginBottom: '1rem', marginTop: '1rem', fontSize: '1.1rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
              {t.arbitrary} (<InlineMath math={String.raw`\delta\theta \neq 0`} />), {t.arbitrary2}
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
              <h4 style={{ marginBottom: '1rem', textAlign: 'center', color: 'var(--primary-color)' }}>{t.finalEq}</h4>
              <BlockMath math={String.raw`ml^2\ddot{\theta} - mgl\sin\theta + \mu\theta = 0`} />
            </div>
            
          </div>
        </div>

        {/* Biomechanical Insight Section */}
        <div className="glass-panel" style={{ padding: '3rem', marginTop: '3rem', display: 'flex', flexDirection: 'column', gap: '2rem', borderTop: '4px solid var(--primary-color)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Dna size={32} color="var(--primary-color)" />
            <h2 style={{ color: 'var(--text-primary)', margin: 0 }}>{t.bioApp}</h2>
          </div>
          
          <div>
            <h3 style={{ marginBottom: '1.5rem', color: 'var(--text-primary)', fontSize: '1.4rem' }}>{t.postural}</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', alignItems: 'center' }}>
              <div style={{ flex: '1 1 400px' }}>
                <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
                  {t.posturalText}
                </p>
                
                <ul style={{ listStyleType: 'none', padding: 0, marginBottom: '1.5rem' }}>
                  <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--primary-color)', marginTop: '8px', flexShrink: 0 }}></div>
                    <div>
                      <strong style={{ color: 'var(--text-primary)' }}>{t.rod} (<InlineMath math={String.raw`m`} />):</strong> {t.rodText}
                    </div>
                  </li>
                  <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--primary-color)', marginTop: '8px', flexShrink: 0 }}></div>
                    <div>
                      <strong style={{ color: 'var(--text-primary)' }}>{t.pivot}</strong> {t.pivotText}
                    </div>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--primary-color)', marginTop: '8px', flexShrink: 0 }}></div>
                    <div>
                      <strong style={{ color: 'var(--text-primary)' }}>{t.spring} (<InlineMath math={String.raw`\mu`} />):</strong> {t.springText}
                    </div>
                  </li>
                </ul>

                <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
                  {t.derived}, <InlineMath math={String.raw`ml^2\ddot{\theta} - mgl\sin\theta + \mu\theta = 0`} />, {t.derived2} <InlineMath math={String.raw`\mu\theta`} /> {t.derived3} (<InlineMath math={String.raw`mgl\sin\theta`} />), {t.derived4}
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
            <h3 style={{ marginBottom: '1.5rem', color: 'var(--text-primary)', fontSize: '1.4rem' }}>{t.other}</h3>
            <div className="grid-cards" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
              
              <div style={{ background: 'rgba(255,255,255,0.02)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <h4 style={{ color: 'var(--primary-color)', marginBottom: '0.75rem' }}>{t.knee}</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>
                  {t.kneeText} <InlineMath math={String.raw`\mu`} />. {t.kneeText2}
                </p>
              </div>

              <div style={{ background: 'rgba(255,255,255,0.02)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <h4 style={{ color: 'var(--primary-color)', marginBottom: '0.75rem' }}>{t.exo}</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>
                  {t.exoText} <InlineMath math={String.raw`\mu`} />, {t.exoText2}
                </p>
              </div>

              <div style={{ background: 'rgba(255,255,255,0.02)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <h4 style={{ color: 'var(--primary-color)', marginBottom: '0.75rem' }}>{t.cervical}</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>
                  {t.cervicalText} <InlineMath math={String.raw`\mu`} /> {t.cervicalText2}
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
