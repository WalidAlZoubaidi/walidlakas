import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, BookOpen, ListChecks, Link2, Lightbulb, PenLine, Eye, Sparkles, BrainCircuit, Navigation, Brain, Bot, Wind, Layers } from 'lucide-react';
import { MathText, BlockMath } from '@/components/MathText';

const R = String.raw;

// Formulas are shared by every language
const M = {
  components: R`f(x) = \big(f_1(x), \dots, f_p(x)\big)`,
  general: R`J_f(a) = \begin{pmatrix}
    \dfrac{\partial f_1}{\partial x_1}(a) & \cdots & \dfrac{\partial f_1}{\partial x_n}(a) \\[1ex]
    \vdots & \ddots & \vdots \\[1ex]
    \dfrac{\partial f_p}{\partial x_1}(a) & \cdots & \dfrac{\partial f_p}{\partial x_n}(a)
  \end{pmatrix}`,
  chain: R`J_{g \circ f}(a) = J_g\big(f(a)\big) \cdot J_f(a)`,
  exF: R`f(x,y) = \left(x^2 + y^2,\; x\sin y,\; y + e^x\right)`,
  exComponents: R`f_1(x,y) = x^2 + y^2, \qquad f_2(x,y) = x\sin y, \qquad f_3(x,y) = y + e^x`,
  exPartials: R`\begin{aligned}
    \frac{\partial f_1}{\partial x}(x,y) &= 2x, &\qquad \frac{\partial f_1}{\partial y}(x,y) &= 2y, \\[1ex]
    \frac{\partial f_2}{\partial x}(x,y) &= \sin y, &\qquad \frac{\partial f_2}{\partial y}(x,y) &= x\cos y, \\[1ex]
    \frac{\partial f_3}{\partial x}(x,y) &= e^x, &\qquad \frac{\partial f_3}{\partial y}(x,y) &= 1
  \end{aligned}`,
  exJ: R`J_f(x,y) = \begin{pmatrix} 2x & 2y \\ \sin y & x\cos y \\ e^x & 1 \end{pmatrix}`,
  exJa: R`J_f(a) = \begin{pmatrix} 2a_1 & 2a_2 \\ \sin a_2 & a_1\cos a_2 \\ e^{a_1} & 1 \end{pmatrix}`,
  ex1f: R`\forall (x,y) \in \mathbb{R}^2, \quad f(x,y) = \left(\cos x - \sin y,\; \sin x + 2\cos y,\; e^x - e^y\right)`,
  ex1g: R`\forall (u,v,w) \in \mathbb{R}^3, \quad g(u,v,w) = u^2 + v^2 + w`,
  solAComponents: R`f_1(x,y) = \cos x - \sin y, \qquad f_2(x,y) = \sin x + 2\cos y, \qquad f_3(x,y) = e^x - e^y`,
  solAJ: R`J_f(x,y) = \begin{pmatrix} -\sin x & -\cos y \\ \cos x & -2\sin y \\ e^x & -e^y \end{pmatrix}`,
  solBJ: R`J_g(u,v,w) = \begin{pmatrix} 2u & 2v & 1 \end{pmatrix}`,
  solCiCompose: R`(g \circ f)(x,y) = g\big(f(x,y)\big) = (\cos x - \sin y)^2 + (\sin x + 2\cos y)^2 + e^x - e^y`,
  solCiExpanded: R`(g \circ f)(x,y) = 2 + 3\cos^2 y + 4\sin x\cos y - 2\cos x\sin y + e^x - e^y`,
  solCiPartials: R`\begin{aligned}
    \frac{\partial (g \circ f)}{\partial x}(x,y) &= 4\cos x\cos y + 2\sin x\sin y + e^x \\[1ex]
    \frac{\partial (g \circ f)}{\partial y}(x,y) &= -2\cos x\cos y - 4\sin x\sin y - 3\sin(2y) - e^y
  \end{aligned}`,
  solResult: R`J_{g \circ f}(x,y) = \begin{pmatrix} 4\cos x\cos y + 2\sin x\sin y + e^x & \; -2\cos x\cos y - 4\sin x\sin y - 3\sin(2y) - e^y \end{pmatrix}`,
  solCiiChain: R`J_{g \circ f}(x,y) = J_g\big(f(x,y)\big) \cdot J_f(x,y)`,
  solCiiJg: R`J_g\big(f(x,y)\big) = \begin{pmatrix} 2(\cos x - \sin y) & 2(\sin x + 2\cos y) & 1 \end{pmatrix}`,
  solCiiProduct: R`\begin{pmatrix} 2(\cos x - \sin y) & 2(\sin x + 2\cos y) & 1 \end{pmatrix}
    \begin{pmatrix} -\sin x & -\cos y \\ \cos x & -2\sin y \\ e^x & -e^y \end{pmatrix}`,
  solCiiColumns: R`\begin{aligned}
    \text{(1)} &: \; -2\sin x(\cos x - \sin y) + 2\cos x(\sin x + 2\cos y) + e^x = 4\cos x\cos y + 2\sin x\sin y + e^x \\[1ex]
    \text{(2)} &: \; -2\cos y(\cos x - \sin y) - 4\sin y(\sin x + 2\cos y) - e^y = -2\cos x\cos y - 4\sin x\sin y - 3\sin(2y) - e^y
  \end{aligned}`,
};

const APPS = [
  { icon: BrainCircuit, accent: 'accent-violet', math: R`J_{g \circ f} = J_g\big(f\big) \cdot J_f` },
  { icon: Navigation, accent: 'accent-sky', math: R`h(x) \approx h(\hat{x}) + J_h(\hat{x})\,(x - \hat{x})` },
  { icon: Brain, accent: 'accent-rose', math: R`\det J_\varphi(x) > 1 \;\Rightarrow\; dV > dV_0` },
  { icon: Bot, accent: 'accent-amber', math: R`\dot{X} = J(q)\,\dot{q}` },
  { icon: Wind, accent: 'accent-sky', math: R`x_{k+1} = x_k - J_F(x_k)^{-1}\,F(x_k)`, to: '/biomechanics/cfd' },
  { icon: Layers, accent: 'accent-emerald', math: R`F = J_\varphi, \qquad \det F = \frac{dV}{dV_0}`, to: '/mechanics/basics-of-continuum-mechanics/analysis-of-deformation' },
];

const translations = {
  en: {
    title: R`How to find the Jacobian matrix of a function from $\mathbb{R}^n$ to $\mathbb{R}^p$?`,
    subtitle: 'Functions of Several Real Variables',
    back: 'Back to Mathematics',
    tag: 'Method',
    labels: ['a', 'b', 'c'],
    defHeading: 'Definition',
    def1: R`Let $U$ be an open subset of $\mathbb{R}^n$ and $f : U \to \mathbb{R}^p$ a differentiable map. We write it using its $p$ component functions $f_1, \dots, f_p$: for every $x = (x_1, \dots, x_n) \in U$,`,
    def2: R`The Jacobian matrix of $f$ at a point $a \in U$, denoted $J_f(a)$, is the matrix with $p$ rows and $n$ columns whose entry in row $i$ and column $j$ is the partial derivative $\frac{\partial f_i}{\partial x_j}(a)$:`,
    memo: R`Memory aid: each row corresponds to one component function $f_i$, each column to one variable $x_j$.`,
    stepsHeading: 'The method in 4 steps',
    steps: [
      R`Identify the component functions $f_1, \dots, f_p$.`,
      R`Compute every partial derivative $\frac{\partial f_i}{\partial x_j}$ (there are $p \times n$ of them).`,
      R`Arrange them in the matrix: row $i$ holds the derivatives of $f_i$, column $j$ the derivatives with respect to $x_j$.`,
      R`Evaluate at the required point $a$.`,
    ],
    chainHeading: 'Composition: the chain rule',
    chain1: R`Let $V$ be an open subset of $\mathbb{R}^p$ and $g : V \to \mathbb{R}^q$ differentiable on $V$. If $f(U) \subset V$, then for every $a \in U$:`,
    chain2: R`The sizes match: a $q \times p$ matrix times a $p \times n$ matrix gives a $q \times n$ matrix. Mind the order of the product, and note that $J_g$ is evaluated at $f(a)$, not at $a$.`,
    exampleHeading: 'Worked example',
    ex1: R`Consider the map $f : \mathbb{R}^2 \to \mathbb{R}^3$ defined by:`,
    ex2: R`Let us find its Jacobian matrix at a point $a = (a_1, a_2)$. Here $n = 2$ and $p = 3$, so the matrix has 3 rows and 2 columns.`,
    exStep1: 'Step 1: the component functions',
    exStep2: 'Step 2: the partial derivatives',
    exStep3: 'Step 3: arrange them in the matrix',
    exStep4: R`Step 4: evaluate at $a = (a_1, a_2)$`,
    exercisesHeading: 'Exercises',
    exA: R`Let $f$ be the map from $\mathbb{R}^2$ to $\mathbb{R}^3$ defined by:`,
    exAQ: R`Find the Jacobian matrix $J_f(x,y)$ of $f$ at the point $(x,y)$.`,
    exB: R`Let $g$ be the map from $\mathbb{R}^3$ to $\mathbb{R}$ defined by:`,
    exBQ: R`Find the Jacobian matrix $J_g(u,v,w)$ of $g$ at the point $(u,v,w)$.`,
    exC: R`Find the Jacobian matrix $J_{g \circ f}(x,y)$ of $g \circ f$ at the point $(x,y)$:`,
    exCi: R`by writing $g \circ f$ explicitly;`,
    exCii: 'using a matrix product.',
    tryFirst: 'Try it yourself first: each solution is hidden below its exercise.',
    appsHeading: 'What is it used for?',
    appsIntro: 'The Jacobian matrix is not just a textbook exercise: it is at work behind many technologies of everyday life.',
    appsLink: 'Related page',
    apps: [
      { title: 'Artificial intelligence', body: 'Neural networks are trained by backpropagation, which is nothing but the chain rule applied to hundreds of composed functions: exactly the matrix-product method of exercise c (ii).' },
      { title: 'GPS and navigation', body: 'Your phone fuses GPS, accelerometer and gyroscope with an extended Kalman filter, which replaces the non-linear measurement equations by their Jacobian to estimate your position in real time.' },
      { title: 'Medical imaging', body: 'To compare two brain MRIs, we compute the deformation that maps one onto the other. The determinant of its Jacobian shows where tissue has shrunk or grown: a tool for monitoring Alzheimer’s disease or tumour growth.' },
      { title: 'Robotics and prosthetics', body: 'The Jacobian links the speed of each joint to the speed of the tool or hand. It lets a surgical robot faithfully reproduce the surgeon’s gesture, and a robotic prosthesis move smoothly.' },
      { title: 'CFD and weather forecasting', body: 'Flow solvers such as OpenFOAM handle non-linear equations with Newton’s method, which builds and inverts a Jacobian at every iteration: aerodynamics, blood flow, weather forecasts.' },
      { title: 'Continuum mechanics', body: 'The deformation gradient F is the Jacobian of the motion, and its determinant measures the local change of volume: the starting point of strain analysis.' },
    ],
    showSolution: 'Show solution',
    solA1: 'The component functions are:',
    solA2: R`They are of class $C^1$ on $\mathbb{R}^2$, so $f$ is differentiable on $\mathbb{R}^2$. Computing the partial derivatives and arranging them row by row gives:`,
    solB: R`$g$ is a polynomial function, hence of class $C^1$ on $\mathbb{R}^3$. Since $g$ is real-valued ($p = 1$), its Jacobian is a $1 \times 3$ row matrix:`,
    solCi1: 'Compose directly:',
    solCi2: R`Expanding and using $\cos^2 + \sin^2 = 1$:`,
    solCi3: R`$g \circ f$ is real-valued, so its Jacobian is the row of its two partial derivatives:`,
    solCiNote: R`For the derivative in $y$, we used $-6\cos y\sin y = -3\sin(2y)$.`,
    solCii1: 'By the chain rule:',
    solCii2: R`$J_g$ is evaluated at $f(x,y)$, that is at $u = \cos x - \sin y$ and $v = \sin x + 2\cos y$:`,
    solCii3: R`We compute the product of a $1 \times 3$ matrix by a $3 \times 2$ matrix:`,
    solCii4: 'Column by column:',
    solCii5: 'We recover the result of question (i):',
  },
  fr: {
    title: R`Comment déterminer la matrice jacobienne d’une fonction de $\mathbb{R}^n$ dans $\mathbb{R}^p$ ?`,
    subtitle: 'Fonctions de plusieurs variables réelles',
    back: 'Retour aux mathématiques',
    tag: 'Méthode',
    labels: ['a', 'b', 'c'],
    defHeading: 'Définition',
    def1: R`Soit $U$ un ouvert de $\mathbb{R}^n$ et $f : U \to \mathbb{R}^p$ une application différentiable. On l’écrit à l’aide de ses $p$ fonctions coordonnées $f_1, \dots, f_p$ : pour tout $x = (x_1, \dots, x_n) \in U$,`,
    def2: R`La matrice jacobienne de $f$ en un point $a \in U$, notée $J_f(a)$, est la matrice à $p$ lignes et $n$ colonnes dont le coefficient situé sur la ligne $i$ et la colonne $j$ est la dérivée partielle $\frac{\partial f_i}{\partial x_j}(a)$ :`,
    memo: R`Moyen mnémotechnique : chaque ligne correspond à une fonction coordonnée $f_i$, chaque colonne à une variable $x_j$.`,
    stepsHeading: 'La méthode en 4 étapes',
    steps: [
      R`Identifier les fonctions coordonnées $f_1, \dots, f_p$.`,
      R`Calculer toutes les dérivées partielles $\frac{\partial f_i}{\partial x_j}$ (il y en a $p \times n$).`,
      R`Les ranger dans la matrice : la ligne $i$ contient les dérivées de $f_i$, la colonne $j$ les dérivées par rapport à $x_j$.`,
      R`Évaluer au point $a$ voulu.`,
    ],
    chainHeading: 'Composition : la règle de la chaîne',
    chain1: R`Soit $V$ un ouvert de $\mathbb{R}^p$ et $g : V \to \mathbb{R}^q$ une application différentiable sur $V$. Si $f(U) \subset V$, alors pour tout $a \in U$ :`,
    chain2: R`Les dimensions sont cohérentes : une matrice $q \times p$ multipliée par une matrice $p \times n$ donne une matrice $q \times n$. Attention à l’ordre du produit, et au fait que $J_g$ est évaluée en $f(a)$, et non en $a$.`,
    exampleHeading: 'Exemple détaillé',
    ex1: R`Considérons l’application $f : \mathbb{R}^2 \to \mathbb{R}^3$ définie par :`,
    ex2: R`Cherchons sa matrice jacobienne en un point $a = (a_1, a_2)$. Ici $n = 2$ et $p = 3$ : la matrice a donc 3 lignes et 2 colonnes.`,
    exStep1: 'Étape 1 : les fonctions coordonnées',
    exStep2: 'Étape 2 : les dérivées partielles',
    exStep3: 'Étape 3 : on les range dans la matrice',
    exStep4: R`Étape 4 : on évalue en $a = (a_1, a_2)$`,
    exercisesHeading: 'Exercices',
    exA: R`Soit $f$ l’application de $\mathbb{R}^2$ dans $\mathbb{R}^3$ définie par :`,
    exAQ: R`Déterminer la matrice jacobienne $J_f(x,y)$ de $f$ au point $(x,y)$.`,
    exB: R`Soit $g$ l’application de $\mathbb{R}^3$ dans $\mathbb{R}$ définie par :`,
    exBQ: R`Déterminer la matrice jacobienne $J_g(u,v,w)$ de $g$ au point $(u,v,w)$.`,
    exC: R`Déterminer la matrice jacobienne $J_{g \circ f}(x,y)$ de $g \circ f$ au point $(x,y)$ :`,
    exCi: R`en explicitant $g \circ f$ ;`,
    exCii: 'au moyen d’un produit de matrices.',
    tryFirst: 'Cherchez d’abord par vous-même : la correction est masquée sous chaque exercice.',
    appsHeading: 'À quoi ça sert ?',
    appsIntro: 'La matrice jacobienne n’est pas qu’un exercice de manuel : elle est à l’œuvre derrière de nombreuses technologies du quotidien.',
    appsLink: 'Page associée',
    apps: [
      { title: 'Intelligence artificielle', body: 'Les réseaux de neurones s’entraînent par rétropropagation du gradient, qui n’est autre que la règle de la chaîne appliquée à des centaines de fonctions composées : exactement la méthode par produit de matrices de l’exercice c (ii).' },
      { title: 'GPS et navigation', body: 'Votre téléphone combine GPS, accéléromètre et gyroscope grâce au filtre de Kalman étendu, qui remplace les équations de mesure non linéaires par leur jacobienne pour estimer votre position en temps réel.' },
      { title: 'Imagerie médicale', body: 'Pour comparer deux IRM cérébrales, on calcule la déformation qui superpose l’une sur l’autre. Le déterminant de sa jacobienne montre où les tissus se sont rétractés ou ont grossi : un outil de suivi de la maladie d’Alzheimer ou de la croissance d’une tumeur.' },
      { title: 'Robotique et prothèses', body: 'La jacobienne relie la vitesse de chaque articulation à celle de l’outil ou de la main. C’est elle qui permet à un robot chirurgical de reproduire fidèlement le geste du chirurgien, et à une prothèse robotisée de bouger de façon fluide.' },
      { title: 'CFD et météo', body: 'Les solveurs d’écoulement comme OpenFOAM traitent les équations non linéaires par la méthode de Newton, qui construit et inverse une jacobienne à chaque itération : aérodynamique, écoulement sanguin, prévisions météo.' },
      { title: 'Mécanique des milieux continus', body: 'Le gradient de déformation F est la jacobienne du mouvement, et son déterminant mesure le changement de volume local : c’est le point de départ de l’analyse des déformations.' },
    ],
    showSolution: 'Afficher la correction',
    solA1: 'Les fonctions coordonnées sont :',
    solA2: R`Elles sont de classe $C^1$ sur $\mathbb{R}^2$, donc $f$ est différentiable sur $\mathbb{R}^2$. On calcule les dérivées partielles et on les range ligne par ligne :`,
    solB: R`$g$ est une fonction polynomiale, donc de classe $C^1$ sur $\mathbb{R}^3$. Comme $g$ est à valeurs réelles ($p = 1$), sa jacobienne est une matrice ligne $1 \times 3$ :`,
    solCi1: 'On compose directement :',
    solCi2: R`En développant et en utilisant $\cos^2 + \sin^2 = 1$ :`,
    solCi3: R`$g \circ f$ est à valeurs réelles : sa jacobienne est la ligne de ses deux dérivées partielles :`,
    solCiNote: R`Pour la dérivée en $y$, on a utilisé $-6\cos y\sin y = -3\sin(2y)$.`,
    solCii1: 'D’après la règle de la chaîne :',
    solCii2: R`On évalue $J_g$ au point $f(x,y)$, c’est-à-dire en $u = \cos x - \sin y$ et $v = \sin x + 2\cos y$ :`,
    solCii3: R`On effectue le produit d’une matrice $1 \times 3$ par une matrice $3 \times 2$ :`,
    solCii4: 'Colonne par colonne :',
    solCii5: 'On retrouve bien le résultat de la question (i) :',
  },
  ar: {
    title: R`كيف نحدّد المصفوفة اليعقوبية لدالة من $\mathbb{R}^n$ إلى $\mathbb{R}^p$؟`,
    subtitle: 'دوال لعدة متغيرات حقيقية',
    back: 'العودة إلى الرياضيات',
    tag: 'طريقة',
    labels: ['أ', 'ب', 'ج'],
    defHeading: 'التعريف',
    def1: R`لتكن $U$ مجموعة مفتوحة في $\mathbb{R}^n$، ولتكن $f : U \to \mathbb{R}^p$ دالة قابلة للاشتقاق. نكتب $f$ بدلالة دوالها الإحداثية $f_1, \dots, f_p$، أي لكل $x = (x_1, \dots, x_n)$ من $U$:`,
    def2: R`المصفوفة اليعقوبية للدالة $f$ عند النقطة $a$ من $U$، ونرمز لها بالرمز $J_f(a)$، هي مصفوفة مكوّنة من $p$ صفًّا و $n$ عمودًا، عنصرُها الواقع في الصف $i$ والعمود $j$ هو المشتقة الجزئية $\frac{\partial f_i}{\partial x_j}(a)$:`,
    memo: R`للتذكّر: كل صف يقابل دالة إحداثية $f_i$، وكل عمود يقابل متغيرًا $x_j$.`,
    stepsHeading: 'الطريقة في أربع خطوات',
    steps: [
      R`نحدّد الدوال الإحداثية $f_1, \dots, f_p$.`,
      R`نحسب جميع المشتقات الجزئية $\frac{\partial f_i}{\partial x_j}$، وعددها $p \times n$.`,
      R`نرتّبها في المصفوفة: يضمّ الصف $i$ مشتقات الدالة $f_i$، ويضمّ العمود $j$ المشتقات بالنسبة إلى المتغير $x_j$.`,
      R`نعوّض بالنقطة المطلوبة $a$.`,
    ],
    chainHeading: 'تركيب الدوال: قاعدة السلسلة',
    chain1: R`لتكن $V$ مجموعة مفتوحة في $\mathbb{R}^p$، ولتكن $g : V \to \mathbb{R}^q$ دالة قابلة للاشتقاق على $V$. إذا كانت $f(U) \subset V$، فإنه لكل $a$ من $U$:`,
    chain2: R`الأبعاد متوافقة: جداء مصفوفة من النوع $q \times p$ في مصفوفة من النوع $p \times n$ هو مصفوفة من النوع $q \times n$. انتبه إلى ترتيب الجداء، وإلى أن $J_g$ تُحسب عند النقطة $f(a)$ لا عند النقطة $a$.`,
    exampleHeading: 'مثال محلول',
    ex1: R`لنعتبر الدالة $f : \mathbb{R}^2 \to \mathbb{R}^3$ المعرّفة بما يلي:`,
    ex2: R`لنحدّد مصفوفتها اليعقوبية عند نقطة $a = (a_1, a_2)$. لدينا هنا $n = 2$ و $p = 3$، إذن تتكوّن المصفوفة من ثلاثة صفوف وعمودين.`,
    exStep1: 'الخطوة الأولى: الدوال الإحداثية',
    exStep2: 'الخطوة الثانية: المشتقات الجزئية',
    exStep3: 'الخطوة الثالثة: ترتيب المشتقات في المصفوفة',
    exStep4: R`الخطوة الرابعة: التعويض بالنقطة $a = (a_1, a_2)$`,
    exercisesHeading: 'تمارين',
    exA: R`لتكن $f$ الدالة من $\mathbb{R}^2$ إلى $\mathbb{R}^3$ المعرّفة بما يلي:`,
    exAQ: R`حدّد المصفوفة اليعقوبية $J_f(x,y)$ للدالة $f$ عند النقطة $(x,y)$.`,
    exB: R`لتكن $g$ الدالة من $\mathbb{R}^3$ إلى $\mathbb{R}$ المعرّفة بما يلي:`,
    exBQ: R`حدّد المصفوفة اليعقوبية $J_g(u,v,w)$ للدالة $g$ عند النقطة $(u,v,w)$.`,
    exC: R`حدّد المصفوفة اليعقوبية $J_{g \circ f}(x,y)$ للدالة $g \circ f$ عند النقطة $(x,y)$:`,
    exCi: R`بكتابة عبارة $g \circ f$ صراحةً؛`,
    exCii: 'باستعمال جداء المصفوفات.',
    tryFirst: 'حاول أولًا بنفسك: الحل مخفيّ تحت كل تمرين.',
    appsHeading: 'فيمَ تُستخدم؟',
    appsIntro: 'المصفوفة اليعقوبية ليست مجرد تمرين في كتاب: إنها تعمل خلف كثير من التقنيات التي نستعملها في حياتنا اليومية.',
    appsLink: 'صفحة ذات صلة',
    apps: [
      { title: 'الذكاء الاصطناعي', body: 'تُدرَّب الشبكات العصبية بخوارزمية الانتشار العكسي، وما هي إلا قاعدة السلسلة مطبَّقةً على مئات الدوال المركّبة، أي طريقة جداء المصفوفات نفسها التي استعملناها في السؤال الثاني من التمرين ج.' },
      { title: 'تحديد المواقع والملاحة', body: 'يدمج هاتفك بيانات نظام تحديد المواقع (GPS) ومقياس التسارع والجيروسكوب بواسطة مرشِّح كالمان الموسَّع، الذي يستبدل معادلات القياس غير الخطية بمصفوفتها اليعقوبية ليقدّر موقعك في الوقت الفعلي.' },
      { title: 'التصوير الطبي', body: 'لمقارنة صورتين للدماغ بالرنين المغناطيسي، نحسب التحويل الذي ينطبق به إحداهما على الأخرى. ويُظهر محدِّد مصفوفته اليعقوبية المواضع التي ضمرت فيها الأنسجة أو نمت، وهي أداة لمتابعة مرض ألزهايمر أو نموّ الأورام.' },
      { title: 'الروبوتات والأطراف الاصطناعية', body: 'تربط المصفوفة اليعقوبية سرعة كل مفصل بسرعة الأداة أو اليد. وبفضلها يحاكي الروبوت الجراحي حركة الجرّاح بدقة، وتتحرك الأطراف الاصطناعية الآلية بسلاسة.' },
      { title: 'ديناميكا الموائع الحسابية والأرصاد الجوية', body: 'تحلّ برامج محاكاة الجريان مثل OpenFOAM المعادلات غير الخطية بطريقة نيوتن، التي تبني مصفوفة يعقوبية وتعكسها في كل تكرار. وتُستعمل في الديناميكا الهوائية، وجريان الدم، والتنبؤات الجوية.' },
      { title: 'ميكانيكا الأوساط المتصلة', body: 'تدرُّج التشوّه F هو المصفوفة اليعقوبية للحركة، ومحدِّده يقيس التغيّر الموضعي في الحجم، وهو نقطة الانطلاق في تحليل التشوّهات.' },
    ],
    showSolution: 'إظهار الحل',
    solA1: 'الدوال الإحداثية هي:',
    solA2: R`هذه الدوال من الصنف $C^1$ على $\mathbb{R}^2$، إذن $f$ قابلة للاشتقاق على $\mathbb{R}^2$. نحسب المشتقات الجزئية ونرتّبها صفًّا صفًّا:`,
    solB: R`الدالة $g$ كثيرة حدود، فهي من الصنف $C^1$ على $\mathbb{R}^3$. وبما أن قيمها حقيقية ($p = 1$)، فإن مصفوفتها اليعقوبية مصفوفة صفّ من النوع $1 \times 3$:`,
    solCi1: 'نركّب الدالتين مباشرة:',
    solCi2: R`بالنشر واستعمال العلاقة $\cos^2 + \sin^2 = 1$ نجد:`,
    solCi3: R`قيم الدالة $g \circ f$ حقيقية، إذن مصفوفتها اليعقوبية هي الصف المكوّن من مشتقتيها الجزئيتين:`,
    solCiNote: R`في المشتقة بالنسبة إلى $y$ استعملنا العلاقة $-6\cos y\sin y = -3\sin(2y)$.`,
    solCii1: 'حسب قاعدة السلسلة:',
    solCii2: R`نحسب $J_g$ عند النقطة $f(x,y)$، أي عند $u = \cos x - \sin y$ و $v = \sin x + 2\cos y$:`,
    solCii3: R`نحسب جداء مصفوفة من النوع $1 \times 3$ في مصفوفة من النوع $3 \times 2$:`,
    solCii4: 'عمودًا بعد عمود:',
    solCii5: 'فنجد النتيجة نفسها التي حصلنا عليها في السؤال الأول:',
  },
};

// Hidden solution block: the reader opens it once they have tried the exercise
const Solution = ({ label, children }) => (
  <details className="solution">
    <summary><Eye size={16} /> {label}</summary>
    <div className="solution-body">{children}</div>
  </details>
);

const JacobianMatrixPage = ({ language = 'en' }) => {
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

          <h2>{t.defHeading}</h2>
          <p><MathText text={t.def1} /></p>
          <BlockMath math={M.components} />
          <p><MathText text={t.def2} /></p>
          <BlockMath math={M.general} />
          <p className="callout"><Lightbulb size={18} /> <span><MathText text={t.memo} /></span></p>

          <h2><ListChecks size={22} /> {t.stepsHeading}</h2>
          <ol className="method-steps">
            {t.steps.map((step, i) => (
              <li key={i}><MathText text={step} /></li>
            ))}
          </ol>

          <h2><Link2 size={22} /> {t.chainHeading}</h2>
          <p><MathText text={t.chain1} /></p>
          <BlockMath math={M.chain} />
          <p><MathText text={t.chain2} /></p>
        </article>

        <article className="glass-panel math-article">
          <h2>{t.exampleHeading}</h2>
          <p><MathText text={t.ex1} /></p>
          <BlockMath math={M.exF} />
          <p><MathText text={t.ex2} /></p>

          <h3>{t.exStep1}</h3>
          <BlockMath math={M.exComponents} />
          <h3>{t.exStep2}</h3>
          <BlockMath math={M.exPartials} />
          <h3>{t.exStep3}</h3>
          <BlockMath math={M.exJ} />
          <h3><MathText text={t.exStep4} /></h3>
          <div className="result-box">
            <BlockMath math={M.exJa} />
          </div>
        </article>

        <article className="glass-panel math-article">
          <h2><PenLine size={22} /> {t.exercisesHeading}</h2>
          <p className="try-first"><Lightbulb size={18} /> <span>{t.tryFirst}</span></p>
          <div className="exercise">
            <p><strong>{t.labels[0]}.</strong> <MathText text={t.exA} /></p>
            <BlockMath math={M.ex1f} />
            <p><MathText text={t.exAQ} /></p>
            <Solution label={t.showSolution}>
              <p>{t.solA1}</p>
              <BlockMath math={M.solAComponents} />
              <p><MathText text={t.solA2} /></p>
              <div className="result-box"><BlockMath math={M.solAJ} /></div>
            </Solution>
          </div>
          <div className="exercise">
            <p><strong>{t.labels[1]}.</strong> <MathText text={t.exB} /></p>
            <BlockMath math={M.ex1g} />
            <p><MathText text={t.exBQ} /></p>
            <Solution label={t.showSolution}>
              <p><MathText text={t.solB} /></p>
              <div className="result-box"><BlockMath math={M.solBJ} /></div>
            </Solution>
          </div>
          <div className="exercise">
            <p><strong>{t.labels[2]}.</strong> <MathText text={t.exC} /></p>
            <p className="sub-item">(i) <MathText text={t.exCi} /></p>
            <Solution label={`${t.showSolution} (i)`}>
              <p>{t.solCi1}</p>
              <BlockMath math={M.solCiCompose} />
              <p><MathText text={t.solCi2} /></p>
              <BlockMath math={M.solCiExpanded} />
              <p><MathText text={t.solCi3} /></p>
              <BlockMath math={M.solCiPartials} />
              <p className="solution-note"><MathText text={t.solCiNote} /></p>
              <div className="result-box"><BlockMath math={M.solResult} /></div>
            </Solution>
            <p className="sub-item">(ii) {t.exCii}</p>
            <Solution label={`${t.showSolution} (ii)`}>
              <p>{t.solCii1}</p>
              <BlockMath math={M.solCiiChain} />
              <p><MathText text={t.solCii2} /></p>
              <BlockMath math={M.solCiiJg} />
              <p><MathText text={t.solCii3} /></p>
              <BlockMath math={M.solCiiProduct} />
              <p>{t.solCii4}</p>
              <BlockMath math={M.solCiiColumns} />
              <p>{t.solCii5}</p>
              <div className="result-box"><BlockMath math={M.solResult} /></div>
            </Solution>
          </div>
        </article>

        <article className="glass-panel math-article">
          <h2><Sparkles size={22} /> {t.appsHeading}</h2>
          <p>{t.appsIntro}</p>
          <div className="apps-grid">
            {APPS.map(({ icon: Icon, accent, math, to }, i) => (
              <div key={i} className={`glass-card research-card app-card ${accent}`}>
                <div className="card-icon"><Icon size={24} /></div>
                <h3>{t.apps[i].title}</h3>
                <p>{t.apps[i].body}</p>
                <div className="app-formula"><BlockMath math={math} /></div>
                {to && (
                  <Link to={to} className="read-more">{t.appsLink} <ArrowRight size={16} /></Link>
                )}
              </div>
            ))}
          </div>
        </article>
      </div>
    </div>
  );
};

export default JacobianMatrixPage;
