import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, BookOpen, Lightbulb, CircleHelp, Scissors, Zap, Activity, SlidersHorizontal, Code2, Ruler, TriangleAlert, Cpu } from 'lucide-react';
import { MathText, BlockMath } from '@/components/MathText';

const R = String.raw;

// Formulas are shared by every language
const M = {
  poiseuille: R`R = \frac{8\mu\ell}{\pi r^4}`,
  compliance: R`C = \frac{dV}{dP}`,
  inertance: R`L = \frac{\rho\ell}{\pi r^2}`,
  wk2: R`Q(t) = \frac{P(t)}{R} + C\,\frac{dP}{dt}(t)`,
  wk2Diastole: R`C\,\frac{dP}{dt} = -\frac{P}{R} \quad\Longrightarrow\quad P(t) = P_0\, e^{-t/\tau}, \qquad \tau = RC`,
  wk3Time: R`P = R_p\, Q + P_c, \qquad Q = \frac{P_c}{R_d} + C\,\frac{dP_c}{dt}`,
  wk3Laplace: R`Q(p) = P_c(p)\left(\frac{1}{R_d} + Cp\right) \quad\Longrightarrow\quad P_c(p) = \frac{R_d}{1 + R_d C p}\, Q(p)`,
  impedance: R`Z(p) = \frac{P(p)}{Q(p)} = R_p + \frac{R_d}{1 + R_d C p}`,
  limits: R`\lim_{p \to 0} Z(p) = R_p + R_d = R_{\text{tot}}, \qquad \lim_{p \to +\infty} Z(p) = R_p`,
  zc: R`R_p \approx Z_c = \frac{\rho\, c}{A}`,
  wk3Ode: R`P + R_d C\,\frac{dP}{dt} = (R_p + R_d)\, Q + R_p R_d C\,\frac{dQ}{dt}`,
  euler: R`\begin{aligned}
    P_c^{n+1} &= \frac{P_c^{n} + \dfrac{\Delta t}{C}\, Q^{n+1}}{1 + \dfrac{\Delta t}{R_d C}} \\[2ex]
    P^{n+1} &= R_p\, Q^{n+1} + P_c^{n+1}
  \end{aligned}`,
  flux: R`Q^{n+1} = \int_{\Gamma_{\text{out}}} \mathbf{u} \cdot \mathbf{n}\; dS`,
  rtot: R`R_{\text{tot}} = \frac{\bar{P}}{\bar{Q}} \approx \frac{93\ \text{mmHg}}{5\ \text{L/min}} \approx 1.1\ \text{mmHg·s/mL} \approx 1.5 \times 10^{8}\ \text{Pa·s/m}^3`,
  split: R`R_i = R_{\text{tot}}\,\frac{\bar{Q}_{\text{tot}}}{\bar{Q}_i}, \qquad C_i = C_{\text{tot}}\,\frac{\bar{Q}_i}{\bar{Q}_{\text{tot}}}`,
};

const OPENFOAM_CODE = `outlet
{
    type            codedFixedValue;
    value           uniform 0;
    name            windkesselRCR_outlet;   // one unique name per outlet

    code
    #{
        // RCR parameters, SI units
        const scalar Rp  = 1.0e7;     // proximal resistance  [Pa.s/m^3]
        const scalar Rd  = 1.4e8;     // distal resistance    [Pa.s/m^3]
        const scalar C   = 1.0e-8;    // compliance           [m^3/Pa]
        const scalar rho = 1060;      // incompressible solvers use p/rho

        // State of the 0D model, kept between calls
        static scalar Pc    = 1.2e4;  // initialise near mean pressure [Pa]
        static scalar PcOld = 1.2e4;
        static label  lastTimeIndex = -1;

        // New time step: freeze the state of the previous one
        const label timeIndex = this->db().time().timeIndex();
        if (timeIndex != lastTimeIndex)
        {
            PcOld = Pc;
            lastTimeIndex = timeIndex;
        }

        // Outlet flow rate from the CFD [m^3/s]
        const scalar Q = gSum
        (
            this->patch().lookupPatchField<surfaceScalarField, scalar>("phi")
        );

        // Implicit Euler on the capacitor, then the proximal resistance
        const scalar dt = this->db().time().deltaTValue();
        Pc = (PcOld + dt/C*Q)/(1 + dt/(Rd*C));

        operator==((Rp*Q + Pc)/rho);
    #};
}`;

const translations = {
  en: {
    title: 'Windkessel boundary conditions in blood flow CFD',
    subtitle: 'CFD · Biomechanics',
    back: 'Back to CFD',
    draft: 'First draft',
    tag: 'Article',
    why: 'Why?',
    intro: 'When simulating blood flow in an artery, we can only mesh a small part of the vascular network. What should be imposed at the outlets? Windkessel models answer this question by summarising the whole downstream network in a few parameters. They are also a perfect application of the Laplace transform.',

    problemHeading: 'The problem: where to cut the domain?',
    problem1: 'In a simulation of the aorta, we mesh the aorta and the start of its branches (carotids, subclavian, iliac arteries…), then we must stop. Yet the blood keeps flowing through billions of arterioles and capillaries that are not meshed. The naive choice, a zero or constant pressure at each outlet, gives wrong results:',
    problemList: [
      'the pressure is wrong: 0 instead of the physiological 80–120 mmHg;',
      'the flow split between branches is wrong: blood goes towards the “easiest” outlet, whereas in reality the resistance of the downstream network sets the split;',
      'the waveform is wrong: the elasticity of the arteries, which stores blood in systole and releases it in diastole, is missing.',
    ],
    problem2: 'We therefore need to replace the missing network with a model that has the same overall behaviour.',

    analogyHeading: 'The electrical analogy',
    analogyIntro: 'The idea is to describe the downstream network as an electrical circuit:',
    analogyCols: ['Blood', 'Electricity', 'Physical origin'],
    analogyRows: [
      ['Pressure P', 'Voltage', ''],
      ['Flow rate Q', 'Current', ''],
      ['Viscous resistance of small arteries', 'Resistor R', 'poiseuille'],
      ['Elasticity of the arteries', 'Capacitor C', 'compliance'],
      ['Inertia of the blood', 'Inductor L', 'inertance'],
    ],
    analogyNote: 'The German word Windkessel means “air chamber”: old fire pumps had one to turn the jolts of the pump into a continuous jet. Large elastic arteries play exactly this role with heartbeats. The model was formalised by Otto Frank in 1899.',

    wk2Heading: 'The 2-element model (RC)',
    wk2Intro: R`The incoming flow has two possible destinations: going through the distal resistance $R$, or inflating the arteries (charging the capacitor $C$):`,
    wk2Diastole: R`In diastole, the aortic valve is closed: $Q = 0$. The equation becomes:`,
    wk2Why: R`This is the exponential decay observed on a real aortic pressure curve. With $\tau$ of about 1.5 s and a heartbeat lasting about 0.8 s, the pressure does not have time to fall to zero before the next systole: this is why diastolic pressure stays around 80 mmHg.`,

    wk3Heading: 'The 3-element model (RCR) and the Laplace transform',
    wk3Intro: R`The RC model has a flaw: at high frequency, the capacitor short-circuits everything and the pressure waveform is poor. We add a proximal resistance $R_p$ in series. Writing $P_c$ for the pressure across the capacitor:`,
    wk3Laplace: R`With zero initial conditions, the Laplace transform turns $\frac{dP_c}{dt}$ into $p\,P_c$ (see the Laplace page): only algebra remains.`,
    wk3Impedance: R`Since $P = R_p Q + P_c$, we obtain the impedance of the model:`,
    wk3Read: 'This formula reads as a function of frequency:',
    wk3Limits: R`At low frequency (mean flow), $Z = R_{\text{tot}}$: the peripheral resistance sets the mean pressure. At high frequency (the harmonics of the heartbeat), the capacitor lets fast variations through and they only “see” $R_p$.`,
    wk3Zc: R`We therefore choose $R_p$ equal to the characteristic impedance of the artery at the outlet, where $c$ is the pulse wave speed and $A$ the cross-section area:`,
    wk3ZcWhy: 'The pressure waves then leave the domain without being artificially reflected at the boundary. This frequency-by-frequency reasoning is exactly what the Laplace transform makes possible.',
    wk3Back: R`Going back to the time domain (multiply by $1 + R_d C p$, then replace $p$ by $\frac{d}{dt}$) gives the differential equation that is programmed:`,
    laplaceLink: 'The Laplace transform method',

    simHeading: 'Try it: interactive simulator',
    simIntro: 'The heart sends a stroke volume of 70 mL during systole (half-sine flow lasting 0.3 s). The RCR model computes the resulting aortic pressure. Move the sliders:',
    simTips: [
      R`increase $R_d$: the mean pressure rises (hypertension from vasoconstriction);`,
      R`decrease $C$: the pulse pressure (systolic − diastolic) widens, as in stiff arteries of elderly patients;`,
      R`increase $R_p$: the systolic peak sharpens.`,
    ],
    sliders: {
      rp: R`Proximal resistance $R_p$`,
      rd: R`Distal resistance $R_d$`,
      c: R`Compliance $C$`,
      hr: 'Heart rate',
    },
    units: { r: 'mmHg·s/mL', c: 'mL/mmHg', hr: 'bpm' },
    stats: { sys: 'Systolic', dia: 'Diastolic', mean: 'Mean', pulse: 'Pulse pressure', tau: 'Time constant τ' },
    chartP: 'Aortic pressure P(t) (mmHg)',
    chartQ: 'Inflow Q(t) (mL/s)',
    time: 'time (s)',
    simNote: 'Two heartbeats are shown, once the periodic regime has been reached.',

    couplingHeading: 'Coupling with the CFD solver',
    coupling1: 'At each time step, and for each outlet:',
    couplingSteps: [
      R`the CFD provides the flow rate through the outlet: $Q^{n+1} = \int_{\Gamma_{\text{out}}} \mathbf{u} \cdot \mathbf{n}\, dS$;`,
      'the Windkessel equation is advanced in time, for example with an implicit Euler scheme;',
      R`$P^{n+1}$ is imposed as a uniform pressure on the outlet.`,
    ],
    coupling2: 'Implicit Euler on the capacitor gives:',
    openfoamHeading: 'A first version for OpenFOAM',
    openfoam1: R`OpenFOAM does not provide a Windkessel condition in its standard distribution (to my knowledge). Here is a first sketch with a codedFixedValue condition on the pressure field p, for an incompressible solver (pimpleFoam). It is a draft to adapt and test, not a validated condition:`,
    openfoamNotes: [
      R`incompressible solvers work with the kinematic pressure $p/\rho$, hence the division by $\rho$, and phi is a volumetric flux in m³/s;`,
      'the condition is evaluated several times per time step inside the PIMPLE loops: the state is recomputed each time from the value of the previous time step (PcOld), which makes the coupling semi-implicit;',
      'the static variables are not saved on restart: a robust version would store Pc in a file or in the dictionary;',
      R`the outlet must have an outward-oriented flux: $Q > 0$ when blood leaves the domain.`,
    ],
    pitfallsHeading: 'Practical difficulties',
    pitfalls: [
      'Stability: an explicit coupling (Q taken from the previous time step) can diverge, especially with large resistances. Couple inside the PIMPLE loops or implicitly.',
      'Backflow: in diastole, blood can flow back in through an outlet; this requires a backflow stabilisation.',
      R`Transient: with $\tau \approx 1.5$ s, 3 to 5 cardiac cycles are needed to reach a periodic regime. Initialising $P_c$ at the mean pressure saves a lot of time.`,
      'Dedicated software such as SimVascular or CRIMSON provide RCR conditions natively.',
    ],

    calibHeading: R`Calibration: finding $R_p$, $R_d$ and $C$`,
    calib1: 'Orders of magnitude for an adult at rest:',
    calib2: R`The total resistance is split between outlets according to the target flow of each branch (measured by flow MRI, or estimated by Murray’s law $Q \propto r^3$), and the compliance in proportion to the flow:`,
    calibList: [
      R`$R_p$: the characteristic impedance $Z_c$ of the outlet artery, typically 5 to 10 % of $R_i$; then $R_d = R_i - R_p$;`,
      R`total compliance: $C_{\text{tot}} \approx 1$ to $2$ mL/mmHg, checked with the diastolic decay ($\tau = R_d C$) or the pulse pressure;`,
      'for a patient-specific simulation, the parameters are tuned until the measured systolic and diastolic pressures (e.g. from a cuff) are recovered.',
    ],

    limitsHeading: 'Limitations',
    limits: [
      'It is a 0D model: no wave propagation in the downstream network, only a global behaviour.',
      'The parameters are uncertain (especially the compliance), and they weigh heavily on the pressure results.',
      'The condition is linear, whereas arteries stiffen when pressure rises.',
      'To go further: 4-element models (with an inductor L), structured trees, or coupling with 1D models.',
    ],
  },
  fr: {
    title: 'Conditions aux limites de Windkessel en CFD sanguine',
    subtitle: 'CFD · Biomécanique',
    back: 'Retour à la CFD',
    draft: 'Premier jet',
    tag: 'Article',
    why: 'Pourquoi ?',
    intro: 'Quand on simule l’écoulement du sang dans une artère, on ne peut mailler qu’une petite partie du réseau vasculaire. Que faut-il imposer aux sorties ? Les modèles de Windkessel répondent à cette question en résumant tout le réseau en aval en quelques paramètres. C’est aussi une application parfaite de la transformée de Laplace.',

    problemHeading: 'Le problème : où couper le domaine ?',
    problem1: 'Dans une simulation de l’aorte, on maille l’aorte et le départ de ses branches (carotides, sous-clavières, iliaques…), puis il faut s’arrêter. Pourtant le sang continue dans des milliards d’artérioles et de capillaires qu’on ne maille pas. Le choix naïf, une pression nulle ou constante à chaque sortie, donne des résultats faux :',
    problemList: [
      'la pression est fausse : 0 au lieu des 80 à 120 mmHg physiologiques ;',
      'la répartition du débit entre les branches est fausse : le sang part vers la sortie « la plus facile », alors qu’en réalité c’est la résistance du réseau en aval qui fixe le partage ;',
      'la forme d’onde est fausse : il manque l’élasticité des artères, qui stocke du sang en systole et le restitue en diastole.',
    ],
    problem2: 'Il faut donc remplacer le réseau manquant par un modèle qui a le même comportement global.',

    analogyHeading: 'L’analogie électrique',
    analogyIntro: 'L’idée est de décrire le réseau en aval comme un circuit électrique :',
    analogyCols: ['Sang', 'Électricité', 'Origine physique'],
    analogyRows: [
      ['Pression P', 'Tension', ''],
      ['Débit Q', 'Courant', ''],
      ['Résistance visqueuse des petites artères', 'Résistance R', 'poiseuille'],
      ['Élasticité des artères', 'Condensateur C', 'compliance'],
      ['Inertie du sang', 'Bobine L', 'inertance'],
    ],
    analogyNote: 'Le mot allemand Windkessel signifie « chambre à air » : les anciennes pompes à incendie en avaient une pour transformer les à-coups de la pompe en jet continu. Les grosses artères élastiques jouent exactement ce rôle avec les battements du cœur. Le modèle a été formalisé par Otto Frank en 1899.',

    wk2Heading: 'Le modèle à 2 éléments (RC)',
    wk2Intro: R`Le débit qui arrive a deux destinations possibles : traverser la résistance distale $R$, ou gonfler les artères (charger le condensateur $C$) :`,
    wk2Diastole: R`En diastole, la valve aortique est fermée : $Q = 0$. L’équation devient :`,
    wk2Why: R`C’est la décroissance exponentielle qu’on observe sur une vraie courbe de pression aortique. Avec $\tau$ de l’ordre de 1,5 s et un battement d’environ 0,8 s, la pression n’a pas le temps de redescendre à zéro avant la systole suivante : voilà pourquoi la pression diastolique reste autour de 80 mmHg.`,

    wk3Heading: 'Le modèle à 3 éléments (RCR) et la transformée de Laplace',
    wk3Intro: R`Le modèle RC a un défaut : à haute fréquence, le condensateur court-circuite tout et la forme d’onde de pression est mauvaise. On ajoute une résistance proximale $R_p$ en série. En notant $P_c$ la pression aux bornes du condensateur :`,
    wk3Laplace: R`Avec des conditions initiales nulles, la transformée de Laplace change $\frac{dP_c}{dt}$ en $p\,P_c$ (voir la fiche sur Laplace) : il ne reste que de l’algèbre.`,
    wk3Impedance: R`Comme $P = R_p Q + P_c$, on obtient l’impédance du modèle :`,
    wk3Read: 'Cette formule se lit en fonction de la fréquence :',
    wk3Limits: R`À basse fréquence (le débit moyen), $Z = R_{\text{tot}}$ : la résistance périphérique fixe la pression moyenne. À haute fréquence (les harmoniques du battement), le condensateur laisse passer les variations rapides, qui ne « voient » que $R_p$.`,
    wk3Zc: R`On choisit donc $R_p$ égal à l’impédance caractéristique de l’artère à la sortie, où $c$ est la vitesse de l’onde de pouls et $A$ l’aire de la section :`,
    wk3ZcWhy: 'Les ondes de pression sortent alors du domaine sans se réfléchir artificiellement sur la frontière. Ce raisonnement fréquence par fréquence est exactement ce que permet la transformée de Laplace.',
    wk3Back: R`En revenant en temps (on multiplie par $1 + R_d C p$, puis on remplace $p$ par $\frac{d}{dt}$), on obtient l’équation différentielle que l’on programme :`,
    laplaceLink: 'La méthode de la transformée de Laplace',

    simHeading: 'À vous de jouer : simulateur interactif',
    simIntro: 'Le cœur éjecte un volume de 70 mL pendant la systole (débit en demi-sinus pendant 0,3 s). Le modèle RCR calcule la pression aortique qui en résulte. Bougez les curseurs :',
    simTips: [
      R`augmentez $R_d$ : la pression moyenne monte (hypertension par vasoconstriction) ;`,
      R`diminuez $C$ : la pression pulsée (systolique − diastolique) augmente, comme avec les artères rigides des personnes âgées ;`,
      R`augmentez $R_p$ : le pic systolique devient plus pointu.`,
    ],
    sliders: {
      rp: R`Résistance proximale $R_p$`,
      rd: R`Résistance distale $R_d$`,
      c: R`Compliance $C$`,
      hr: 'Fréquence cardiaque',
    },
    units: { r: 'mmHg·s/mL', c: 'mL/mmHg', hr: 'bpm' },
    stats: { sys: 'Systolique', dia: 'Diastolique', mean: 'Moyenne', pulse: 'Pression pulsée', tau: 'Constante de temps τ' },
    chartP: 'Pression aortique P(t) (mmHg)',
    chartQ: 'Débit entrant Q(t) (mL/s)',
    time: 'temps (s)',
    simNote: 'On affiche deux battements, une fois le régime périodique atteint.',

    couplingHeading: 'Le couplage avec le solveur CFD',
    coupling1: 'À chaque pas de temps, et pour chaque sortie :',
    couplingSteps: [
      R`la CFD fournit le débit à travers la sortie : $Q^{n+1} = \int_{\Gamma_{\text{out}}} \mathbf{u} \cdot \mathbf{n}\, dS$ ;`,
      'on avance l’équation de Windkessel en temps, par exemple avec un schéma d’Euler implicite ;',
      R`on impose $P^{n+1}$ comme pression uniforme sur la sortie.`,
    ],
    coupling2: 'Le schéma d’Euler implicite sur le condensateur donne :',
    openfoamHeading: 'Une première version pour OpenFOAM',
    openfoam1: R`À ma connaissance, OpenFOAM ne fournit pas de condition de Windkessel dans sa distribution standard. Voici une première ébauche avec une condition codedFixedValue sur le champ de pression p, pour un solveur incompressible (pimpleFoam). C’est un premier jet à adapter et à tester, pas une condition validée :`,
    openfoamNotes: [
      R`les solveurs incompressibles travaillent avec la pression cinématique $p/\rho$, d’où la division par $\rho$, et phi est un flux volumique en m³/s ;`,
      'la condition est évaluée plusieurs fois par pas de temps dans les boucles PIMPLE : l’état est recalculé à chaque fois à partir de la valeur du pas précédent (PcOld), ce qui rend le couplage semi-implicite ;',
      'les variables static ne sont pas sauvegardées en cas de reprise de calcul : une version robuste stockerait Pc dans un fichier ou dans le dictionnaire ;',
      R`le flux doit être orienté vers l’extérieur : $Q > 0$ quand le sang quitte le domaine.`,
    ],
    pitfallsHeading: 'Les difficultés pratiques',
    pitfalls: [
      'Stabilité : un couplage explicite (Q pris au pas précédent) peut diverger, surtout avec de grandes résistances. On couple dans les boucles PIMPLE, ou de façon implicite.',
      'Reflux : en diastole, le sang peut rentrer par une sortie ; il faut alors une stabilisation du reflux (backflow stabilization).',
      R`Régime transitoire : avec $\tau \approx 1{,}5$ s, il faut 3 à 5 cycles cardiaques pour atteindre un régime périodique. Initialiser $P_c$ à la pression moyenne fait gagner beaucoup de temps.`,
      'Des logiciels spécialisés comme SimVascular ou CRIMSON proposent des conditions RCR intégrées.',
    ],

    calibHeading: R`Le calibrage : trouver $R_p$, $R_d$ et $C$`,
    calib1: 'Ordres de grandeur pour un adulte au repos :',
    calib2: R`On répartit la résistance totale entre les sorties selon le débit cible de chaque branche (mesuré par IRM de flux, ou estimé par la loi de Murray $Q \propto r^3$), et la compliance au prorata du débit :`,
    calibList: [
      R`$R_p$ : l’impédance caractéristique $Z_c$ de l’artère de sortie, typiquement 5 à 10 % de $R_i$ ; puis $R_d = R_i - R_p$ ;`,
      R`compliance totale : $C_{\text{tot}} \approx 1$ à $2$ mL/mmHg, à vérifier avec la décroissance diastolique ($\tau = R_d C$) ou la pression pulsée ;`,
      'pour une simulation spécifique à un patient, on ajuste les paramètres jusqu’à retrouver ses pressions systolique et diastolique mesurées (au brassard par exemple).',
    ],

    limitsHeading: 'Les limites',
    limits: [
      'C’est un modèle 0D : pas de propagation d’onde dans le réseau en aval, seulement un comportement global.',
      'Les paramètres sont incertains (surtout la compliance), et ils pèsent énormément sur les résultats en pression.',
      'La condition est linéaire, alors que les artères se rigidifient quand la pression monte.',
      'Pour aller plus loin : modèles à 4 éléments (avec une bobine L), arbres structurés (structured trees), ou couplage avec des modèles 1D.',
    ],
  },
  ar: {
    title: 'شروط ويندكسل الحدّية في المحاكاة العددية لجريان الدم',
    subtitle: 'ديناميكا الموائع الحسابية · الميكانيكا الحيوية',
    back: 'العودة إلى CFD',
    draft: 'مسودّة أولى',
    tag: 'مقال',
    why: 'لماذا؟',
    intro: 'حين نحاكي جريان الدم في شريان، لا يمكننا أن نُشبّك إلا جزءًا صغيرًا من الشبكة الوعائية. فماذا نفرض عند المخارج؟ تجيب نماذج ويندكسل عن هذا السؤال بتلخيص الشبكة الواقعة بعد المخرج كلها في بضعة وسائط. وهي أيضًا تطبيق مثالي لتحويل لابلاس.',

    problemHeading: 'المشكلة: أين نقطع المجال؟',
    problem1: 'في محاكاة للأبهر، نُشبّك الأبهر وبدايات تفرّعاته (السباتيان وتحت الترقوتين والحرقفيان…)، ثم يجب أن نتوقف. لكن الدم يواصل طريقه في مليارات الشُّرينات والشعيرات التي لا نُشبّكها. والاختيار الساذج، أي ضغط معدوم أو ثابت عند كل مخرج، يعطي نتائج خاطئة:',
    problemList: [
      'الضغط خاطئ: 0 بدل 80 إلى 120 ملم زئبق في الحالة الفيزيولوجية؛',
      'توزيع الصبيب بين الفروع خاطئ: يتجه الدم نحو المخرج «الأسهل»، بينما في الواقع مقاومة الشبكة اللاحقة هي التي تحدّد التوزيع؛',
      'شكل الموجة خاطئ: تغيب مرونة الشرايين التي تخزّن الدم في الانقباض وتعيده في الانبساط.',
    ],
    problem2: 'لذا يجب تعويض الشبكة الناقصة بنموذج له السلوك الإجمالي نفسه.',

    analogyHeading: 'التماثل الكهربائي',
    analogyIntro: 'الفكرة هي وصف الشبكة اللاحقة كدارة كهربائية:',
    analogyCols: ['الدم', 'الكهرباء', 'الأصل الفيزيائي'],
    analogyRows: [
      ['الضغط P', 'التوتر', ''],
      ['الصبيب Q', 'التيار', ''],
      ['المقاومة اللزجة للشرايين الصغيرة', 'مقاومة R', 'poiseuille'],
      ['مرونة الشرايين', 'مكثّف C', 'compliance'],
      ['عطالة الدم', 'وشيعة L', 'inertance'],
    ],
    analogyNote: 'الكلمة الألمانية Windkessel تعني «حجرة الهواء»: كانت مضخات الإطفاء القديمة مزوّدة بها لتحويل دفعات المضخة إلى تدفق مستمر. والشرايين الكبيرة المرنة تؤدي هذا الدور تمامًا مع نبضات القلب. وقد صاغ أوتو فرانك هذا النموذج سنة 1899.',

    wk2Heading: 'النموذج ذو العنصرين (RC)',
    wk2Intro: R`للصبيب الوارد وجهتان ممكنتان: عبور المقاومة البعيدة $R$، أو نفخ الشرايين (شحن المكثّف $C$):`,
    wk2Diastole: R`في الانبساط، يكون الصمام الأبهري مغلقًا: $Q = 0$. فتصبح المعادلة:`,
    wk2Why: R`هذا هو التناقص الأسّي الذي نلاحظه على منحنى حقيقي لضغط الأبهر. بما أن $\tau$ من رتبة 1.5 ثانية والنبضة تدوم نحو 0.8 ثانية، لا يجد الضغط الوقت الكافي للنزول إلى الصفر قبل الانقباض التالي، ولهذا يبقى الضغط الانبساطي قرابة 80 ملم زئبق.`,

    wk3Heading: 'النموذج ذو العناصر الثلاثة (RCR) وتحويل لابلاس',
    wk3Intro: R`للنموذج RC عيب: عند الترددات العالية يقصِر المكثّف الدارة فيكون شكل موجة الضغط رديئًا. لذلك نضيف مقاومة قريبة $R_p$ على التوالي. نرمز بـ $P_c$ للضغط بين طرفي المكثّف:`,
    wk3Laplace: R`مع شروط ابتدائية معدومة، يحوّل تحويل لابلاس $\frac{dP_c}{dt}$ إلى $p\,P_c$ (انظر صفحة لابلاس)، فلا يبقى إلا الجبر.`,
    wk3Impedance: R`وبما أن $P = R_p Q + P_c$، نحصل على ممانعة النموذج:`,
    wk3Read: 'تُقرأ هذه الصيغة بحسب التردد:',
    wk3Limits: R`عند الترددات المنخفضة (الصبيب المتوسط) يكون $Z = R_{\text{tot}}$: المقاومة المحيطية هي التي تحدّد الضغط المتوسط. وعند الترددات العالية (توافقيات النبض) يسمح المكثّف بمرور التغيّرات السريعة التي لا «ترى» إلا $R_p$.`,
    wk3Zc: R`لذلك نختار $R_p$ مساويًا للممانعة المميِّزة للشريان عند المخرج، حيث $c$ سرعة موجة النبض و $A$ مساحة المقطع:`,
    wk3ZcWhy: 'عندئذ تغادر موجات الضغط المجال دون أن تنعكس اصطناعيًّا على الحدّ. وهذا الاستدلال ترددًا بتردد هو بالضبط ما يتيحه تحويل لابلاس.',
    wk3Back: R`بالعودة إلى الزمن (نضرب في $1 + R_d C p$ ثم نعوّض $p$ بـ $\frac{d}{dt}$) نحصل على المعادلة التفاضلية التي نبرمجها:`,
    laplaceLink: 'طريقة تحويل لابلاس',

    simHeading: 'جرّب بنفسك: محاكٍ تفاعلي',
    simIntro: 'يضخّ القلب حجمًا قدره 70 مل أثناء الانقباض (صبيب على شكل نصف جيب لمدة 0.3 ثانية)، ويحسب نموذج RCR ضغط الأبهر الناتج. حرّك المؤشرات:',
    simTips: [
      R`زِد $R_d$: يرتفع الضغط المتوسط (ارتفاع الضغط بسبب تضيّق الأوعية)؛`,
      R`أنقِص $C$: يتّسع الضغط النبضي (الانقباضي − الانبساطي)، كما في الشرايين المتصلّبة لدى المسنّين؛`,
      R`زِد $R_p$: تصبح ذروة الانقباض أكثر حدّة.`,
    ],
    sliders: {
      rp: R`المقاومة القريبة $R_p$`,
      rd: R`المقاومة البعيدة $R_d$`,
      c: R`المطاوعة $C$`,
      hr: 'نبض القلب',
    },
    units: { r: 'mmHg·s/mL', c: 'mL/mmHg', hr: 'bpm' },
    stats: { sys: 'الانقباضي', dia: 'الانبساطي', mean: 'المتوسط', pulse: 'الضغط النبضي', tau: 'ثابت الزمن τ' },
    chartP: 'ضغط الأبهر P(t) (mmHg)',
    chartQ: 'الصبيب الداخل Q(t) (mL/s)',
    time: 'الزمن (s)',
    simNote: 'نعرض نبضتين بعد بلوغ النظام الدوري.',

    couplingHeading: 'الربط مع برنامج المحاكاة',
    coupling1: 'في كل خطوة زمنية، ولكل مخرج:',
    couplingSteps: [
      R`تعطي المحاكاة الصبيب عبر المخرج: $Q^{n+1} = \int_{\Gamma_{\text{out}}} \mathbf{u} \cdot \mathbf{n}\, dS$؛`,
      'نتقدّم بمعادلة ويندكسل في الزمن، مثلًا بمخطط أويلر الضمني؛',
      R`نفرض $P^{n+1}$ ضغطًا منتظمًا على المخرج.`,
    ],
    coupling2: 'يعطي مخطط أويلر الضمني على المكثّف:',
    openfoamHeading: 'نسخة أولى لبرنامج OpenFOAM',
    openfoam1: R`على حدّ علمي، لا يوفّر OpenFOAM شرط ويندكسل في توزيعته القياسية. هذه مسودّة أولى بشرط codedFixedValue على حقل الضغط p، لحالة جريان غير قابل للانضغاط (pimpleFoam). إنها مسودّة ينبغي تكييفها واختبارها، وليست شرطًا مُتحقَّقًا منه:`,
    openfoamNotes: [
      R`تعمل برامج الجريان غير القابل للانضغاط بالضغط الحركي $p/\rho$، ومن هنا القسمة على $\rho$، و phi تدفق حجمي بوحدة m³/s؛`,
      'يُقيَّم الشرط عدة مرات في كل خطوة زمنية داخل حلقات PIMPLE: تُعاد الحالة في كل مرة انطلاقًا من قيمة الخطوة السابقة (PcOld)، مما يجعل الربط شبه ضمني؛',
      'المتغيرات static لا تُحفظ عند استئناف الحساب: نسخة متينة ستخزّن Pc في ملف أو في القاموس؛',
      R`يجب أن يكون التدفق موجّهًا نحو الخارج: $Q > 0$ حين يغادر الدم المجال.`,
    ],
    pitfallsHeading: 'الصعوبات العملية',
    pitfalls: [
      'الاستقرار: قد يتباعد الربط الصريح (أخذ Q من الخطوة السابقة)، خاصة مع مقاومات كبيرة. لذا نربط داخل حلقات PIMPLE أو بطريقة ضمنية.',
      'الجريان العكسي: في الانبساط قد يعود الدم عبر أحد المخارج، فيلزم تثبيت عددي للجريان العكسي.',
      R`النظام الانتقالي: مع $\tau \approx 1.5$ ثانية، نحتاج من 3 إلى 5 دورات قلبية لبلوغ نظام دوري. وتهيئة $P_c$ بالضغط المتوسط توفّر وقتًا كبيرًا.`,
      'توفّر برامج متخصصة مثل SimVascular و CRIMSON شروط RCR مدمجة.',
    ],

    calibHeading: R`المعايرة: إيجاد $R_p$ و $R_d$ و $C$`,
    calib1: 'رتب المقادير لدى شخص بالغ في حالة راحة:',
    calib2: R`نوزّع المقاومة الكلية على المخارج حسب الصبيب المستهدف لكل فرع (المقيس بالرنين المغناطيسي للتدفق، أو المقدَّر بقانون موراي $Q \propto r^3$)، والمطاوعة بالتناسب مع الصبيب:`,
    calibList: [
      R`$R_p$: الممانعة المميِّزة $Z_c$ لشريان المخرج، أي عادةً من 5 إلى 10 % من $R_i$؛ ثم $R_d = R_i - R_p$؛`,
      R`المطاوعة الكلية: $C_{\text{tot}} \approx 1$ إلى $2$ mL/mmHg، ونتحقق منها بالتناقص الانبساطي ($\tau = R_d C$) أو بالضغط النبضي؛`,
      'في محاكاة خاصة بمريض، نضبط الوسائط حتى نسترجع ضغطيه الانقباضي والانبساطي المقيسين (بجهاز قياس الضغط مثلًا).',
    ],

    limitsHeading: 'الحدود',
    limits: [
      'إنه نموذج 0D: لا انتشار للموجات في الشبكة اللاحقة، بل سلوك إجمالي فقط.',
      'الوسائط غير مؤكَّدة (خاصة المطاوعة)، ولها أثر كبير في نتائج الضغط.',
      'الشرط خطي، بينما تزداد صلابة الشرايين حين يرتفع الضغط.',
      'للتعمّق: نماذج بأربعة عناصر (مع وشيعة L)، والأشجار المهيكلة، أو الربط مع نماذج 1D.',
    ],
  },
};

const FORMULA_BY_KEY = { poiseuille: M.poiseuille, compliance: M.compliance, inertance: M.inertance };

/* ---------- RCR simulation (units: mmHg, mL, s) ---------- */

const STROKE_VOLUME = 70; // mL
const SYSTOLE = 0.3; // s

function simulate({ rp, rd, c, hr }) {
  const T = 60 / hr;
  const qMax = (STROKE_VOLUME * Math.PI) / (2 * SYSTOLE);
  const inflow = (t) => {
    const tc = t % T;
    return tc < SYSTOLE ? qMax * Math.sin((Math.PI * tc) / SYSTOLE) : 0;
  };
  const dt = 0.001;
  const tau = rd * c;
  const cycles = Math.max(8, Math.ceil((6 * tau) / T) + 2);
  const steps = Math.round((cycles * T) / dt);
  const keepFrom = Math.round(((cycles - 2) * T) / dt);
  const qMean = (STROKE_VOLUME * hr) / 60;

  let pc = qMean * rd; // start near the periodic regime
  const points = [];
  for (let n = 1; n <= steps; n += 1) {
    const t = n * dt;
    const q = inflow(t);
    pc = (pc + (dt / c) * q) / (1 + dt / (rd * c));
    if (n >= keepFrom && (n - keepFrom) % 5 === 0) {
      points.push({ t: t - keepFrom * dt, p: rp * q + pc, q });
    }
  }
  const lastCycle = points.filter((pt) => pt.t >= T);
  const ps = lastCycle.map((pt) => pt.p);
  const sys = Math.max(...ps);
  const dia = Math.min(...ps);
  const mean = ps.reduce((a, b) => a + b, 0) / ps.length;
  return { points, sys, dia, mean, tau };
}

/* ---------- Small SVG line chart with a shared crosshair ---------- */

const W = 640;
const H = 200;
const PAD = { l: 48, r: 16, t: 16, b: 32 };

const niceTicks = (min, max, count = 4) => {
  const span = max - min || 1;
  const raw = span / count;
  const mag = 10 ** Math.floor(Math.log10(raw));
  const step = [1, 2, 5, 10].map((m) => m * mag).find((s) => span / s <= count) || 10 * mag;
  const ticks = [];
  for (let v = Math.ceil(min / step) * step; v <= max + 1e-9; v += step) ticks.push(v);
  return ticks;
};

const LineChart = ({ points, yKey, color, title, xLabel, unit, hover, setHover, yFloor }) => {
  const tMax = points[points.length - 1].t;
  const ys = points.map((pt) => pt[yKey]);
  let yMin = yFloor ?? Math.min(...ys);
  let yMax = Math.max(...ys);
  const margin = (yMax - yMin) * 0.1 || 1;
  if (yFloor === undefined) yMin -= margin;
  yMax += margin;
  const x = (t) => PAD.l + (t / tMax) * (W - PAD.l - PAD.r);
  const y = (v) => H - PAD.b - ((v - yMin) / (yMax - yMin)) * (H - PAD.t - PAD.b);
  const path = points.map((pt, i) => `${i ? 'L' : 'M'}${x(pt.t).toFixed(1)},${y(pt[yKey]).toFixed(1)}`).join('');
  const yTicks = niceTicks(yMin, yMax);
  const xTicks = niceTicks(0, tMax, 6);

  const onMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const sx = ((e.clientX - rect.left) / rect.width) * W;
    const t = ((sx - PAD.l) / (W - PAD.l - PAD.r)) * tMax;
    if (t < 0 || t > tMax) { setHover(null); return; }
    const idx = Math.round((t / tMax) * (points.length - 1));
    setHover(Math.min(points.length - 1, Math.max(0, idx)));
  };

  const hp = hover !== null ? points[hover] : null;
  const tipX = hp ? Math.min(x(hp.t) + 8, W - PAD.r - 120) : 0;

  return (
    <figure className="wk-chart">
      <figcaption>{title}</figcaption>
      <svg viewBox={`0 0 ${W} ${H}`} dir="ltr" onMouseMove={onMove} onMouseLeave={() => setHover(null)} role="img" aria-label={title}>
        {yTicks.map((v) => (
          <g key={v}>
            <line x1={PAD.l} x2={W - PAD.r} y1={y(v)} y2={y(v)} className="wk-grid" />
            <text x={PAD.l - 6} y={y(v) + 4} textAnchor="end" className="wk-tick">{Math.round(v)}</text>
          </g>
        ))}
        {xTicks.map((v) => (
          <text key={v} x={x(v)} y={H - PAD.b + 18} textAnchor="middle" className="wk-tick">{v.toFixed(1)}</text>
        ))}
        <text x={W - PAD.r} y={H - 2} textAnchor="end" className="wk-tick">{xLabel}</text>
        <path d={path} fill="none" stroke={color} strokeWidth="2" strokeLinejoin="round" />
        {hp && (
          <g>
            <line x1={x(hp.t)} x2={x(hp.t)} y1={PAD.t} y2={H - PAD.b} className="wk-crosshair" />
            <circle cx={x(hp.t)} cy={y(hp[yKey])} r="5" fill={color} stroke="var(--bg-color)" strokeWidth="2" />
            <rect x={tipX} y={PAD.t} width="112" height="40" rx="6" className="wk-tip" />
            <text x={tipX + 8} y={PAD.t + 16} className="wk-tip-text">t = {hp.t.toFixed(2)} s</text>
            <text x={tipX + 8} y={PAD.t + 32} className="wk-tip-value">{Math.round(hp[yKey])} {unit}</text>
          </g>
        )}
      </svg>
    </figure>
  );
};

const Slider = ({ label, unit, value, min, max, step, onChange, digits = 2 }) => (
  <label className="wk-slider">
    <span className="wk-slider-label"><MathText text={label} /></span>
    <input type="range" min={min} max={max} step={step} value={value} onChange={(e) => onChange(Number(e.target.value))} />
    <span className="wk-slider-value" dir="ltr">{value.toFixed(digits)} {unit}</span>
  </label>
);

const Simulator = ({ t }) => {
  const [params, setParams] = useState({ rp: 0.06, rd: 1.0, c: 1.4, hr: 72 });
  const [hover, setHover] = useState(null);
  const sim = useMemo(() => simulate(params), [params]);
  const set = (key) => (v) => setParams((prev) => ({ ...prev, [key]: v }));

  const stats = [
    [t.stats.sys, `${Math.round(sim.sys)} mmHg`],
    [t.stats.dia, `${Math.round(sim.dia)} mmHg`],
    [t.stats.mean, `${Math.round(sim.mean)} mmHg`],
    [t.stats.pulse, `${Math.round(sim.sys - sim.dia)} mmHg`],
    [t.stats.tau, `${sim.tau.toFixed(2)} s`],
  ];

  return (
    <div className="wk-sim">
      <div className="wk-sliders">
        <Slider label={t.sliders.rp} unit={t.units.r} value={params.rp} min={0} max={0.2} step={0.01} onChange={set('rp')} />
        <Slider label={t.sliders.rd} unit={t.units.r} value={params.rd} min={0.5} max={2} step={0.05} onChange={set('rd')} />
        <Slider label={t.sliders.c} unit={t.units.c} value={params.c} min={0.3} max={3} step={0.1} onChange={set('c')} digits={1} />
        <Slider label={t.sliders.hr} unit={t.units.hr} value={params.hr} min={50} max={120} step={1} onChange={set('hr')} digits={0} />
      </div>
      <div className="wk-stats">
        {stats.map(([label, value]) => (
          <div key={label} className="wk-stat">
            <span className="wk-stat-label">{label}</span>
            <span className="wk-stat-value" dir="ltr">{value}</span>
          </div>
        ))}
      </div>
      <LineChart points={sim.points} yKey="p" color="var(--c-rose)" title={t.chartP} xLabel={t.time} unit="mmHg" hover={hover} setHover={setHover} />
      <LineChart points={sim.points} yKey="q" color="var(--c-sky)" title={t.chartQ} xLabel={t.time} unit="mL/s" hover={hover} setHover={setHover} yFloor={0} />
      <p className="solution-note">{t.simNote}</p>
    </div>
  );
};

/* ---------- Page ---------- */

const Why = ({ label, text }) => (
  <div className="callout why-box">
    <CircleHelp size={18} />
    <span><strong>{label}</strong> <MathText text={text} /></span>
  </div>
);

const WindkesselPage = ({ language = 'en' }) => {
  const t = translations[language] || translations.en;

  return (
    <div className="page-header">
      <div className="container">
        <h1 className="gradient-text page-title-math">{t.title}</h1>
        <p className="hero-subtitle" style={{ marginBottom: 0 }}>{t.subtitle}</p>
      </div>

      <div className="container page-content" style={{ marginTop: '4rem', textAlign: 'start' }}>
        <Link to="/biomechanics/cfd" className="read-more back-nav">
          <ArrowLeft size={16} /> {t.back}
        </Link>

        <article className="glass-panel math-article">
          <p className="article-tag"><BookOpen size={18} /> {t.tag} <span className="soon-badge">{t.draft}</span></p>
          <p>{t.intro}</p>

          <h2><Scissors size={22} /> {t.problemHeading}</h2>
          <p>{t.problem1}</p>
          <ul className="wk-list">
            {t.problemList.map((item) => <li key={item}>{item}</li>)}
          </ul>
          <p>{t.problem2}</p>
        </article>

        <article className="glass-panel math-article">
          <h2><Zap size={22} /> {t.analogyHeading}</h2>
          <p>{t.analogyIntro}</p>
          <div className="wk-table-wrap">
            <table className="wk-table">
              <thead>
                <tr>{t.analogyCols.map((col) => <th key={col}>{col}</th>)}</tr>
              </thead>
              <tbody>
                {t.analogyRows.map(([blood, elec, formula]) => (
                  <tr key={blood}>
                    <td>{blood}</td>
                    <td>{elec}</td>
                    <td>{formula ? <BlockMath math={FORMULA_BY_KEY[formula]} /> : '—'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="callout"><Lightbulb size={18} /> <span>{t.analogyNote}</span></p>

          <h2>{t.wk2Heading}</h2>
          <p><MathText text={t.wk2Intro} /></p>
          <BlockMath math={M.wk2} />
          <p><MathText text={t.wk2Diastole} /></p>
          <BlockMath math={M.wk2Diastole} />
          <Why label={t.why} text={t.wk2Why} />
        </article>

        <article className="glass-panel math-article">
          <h2>{t.wk3Heading}</h2>
          <p><MathText text={t.wk3Intro} /></p>
          <BlockMath math={M.wk3Time} />
          <p><MathText text={t.wk3Laplace} /></p>
          <BlockMath math={M.wk3Laplace} />
          <p><MathText text={t.wk3Impedance} /></p>
          <div className="result-box"><BlockMath math={M.impedance} /></div>
          <p>{t.wk3Read}</p>
          <BlockMath math={M.limits} />
          <p><MathText text={t.wk3Limits} /></p>
          <p><MathText text={t.wk3Zc} /></p>
          <BlockMath math={M.zc} />
          <Why label={t.why} text={t.wk3ZcWhy} />
          <p><MathText text={t.wk3Back} /></p>
          <div className="result-box"><BlockMath math={M.wk3Ode} /></div>
          <Link to="/mathematics/laplace-transform/solving-linear-odes" className="read-more">
            {t.laplaceLink} <ArrowRight size={16} />
          </Link>
        </article>

        <article className="glass-panel math-article">
          <h2><SlidersHorizontal size={22} /> {t.simHeading}</h2>
          <p>{t.simIntro}</p>
          <ul className="wk-list">
            {t.simTips.map((tip) => <li key={tip}><MathText text={tip} /></li>)}
          </ul>
          <Simulator t={t} />
        </article>

        <article className="glass-panel math-article">
          <h2><Cpu size={22} /> {t.couplingHeading}</h2>
          <p>{t.coupling1}</p>
          <ol className="method-steps">
            {t.couplingSteps.map((step) => <li key={step}><MathText text={step} /></li>)}
          </ol>
          <p>{t.coupling2}</p>
          <BlockMath math={M.euler} />

          <h3><Code2 size={18} /> {t.openfoamHeading}</h3>
          <p><MathText text={t.openfoam1} /></p>
          <pre className="wk-code" dir="ltr"><code>{OPENFOAM_CODE}</code></pre>
          <ul className="wk-list">
            {t.openfoamNotes.map((note) => <li key={note}><MathText text={note} /></li>)}
          </ul>

          <h3><TriangleAlert size={18} /> {t.pitfallsHeading}</h3>
          <ul className="wk-list">
            {t.pitfalls.map((item) => <li key={item}><MathText text={item} /></li>)}
          </ul>
        </article>

        <article className="glass-panel math-article">
          <h2><Ruler size={22} /> <MathText text={t.calibHeading} /></h2>
          <p>{t.calib1}</p>
          <BlockMath math={M.rtot} />
          <p><MathText text={t.calib2} /></p>
          <BlockMath math={M.split} />
          <ul className="wk-list">
            {t.calibList.map((item) => <li key={item}><MathText text={item} /></li>)}
          </ul>

          <h2><Activity size={22} /> {t.limitsHeading}</h2>
          <ul className="wk-list">
            {t.limits.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </article>
      </div>
    </div>
  );
};

export default WindkesselPage;
