import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, BookOpen, Lightbulb, ListChecks, Table2, CheckCircle2, CircleHelp, Compass, Sigma, Repeat, Puzzle, HeartPulse } from 'lucide-react';
import { MathText, BlockMath } from '@/components/MathText';

const R = String.raw;
const L = R`\mathcal{L}`;

// Formulas are shared by every language
const M = {
  // Definition
  def: R`${L}[yU](p) = \int_0^{+\infty} e^{-px}\, y(x)\, dx`,
  step: R`U(x) = \begin{cases} 1 & \text{si } x \geq 0 \\ 0 & \text{si } x < 0 \end{cases}`,
  linear: R`${L}\big[(\alpha y + \beta z)U\big] = \alpha\, ${L}[yU] + \beta\, ${L}[zU]`,

  // Derivatives
  ippSetup: R`u(x) = e^{-px} \;\Rightarrow\; u'(x) = -p\, e^{-px}, \qquad v(x) = y(x) \;\Rightarrow\; v'(x) = y'(x)`,
  ipp: R`\int_0^{+\infty} e^{-px}\, y'(x)\, dx = \Big[e^{-px}\, y(x)\Big]_0^{+\infty} - \int_0^{+\infty} \big(-p\, e^{-px}\big)\, y(x)\, dx`,
  ippBracket: R`\Big[e^{-px}\, y(x)\Big]_0^{+\infty} = \underbrace{\lim_{x \to +\infty} e^{-px}\, y(x)}_{=\,0} - \underbrace{e^{0}\, y(0)}_{=\,y(0)} = -y(0)`,
  ippIntegral: R`-\int_0^{+\infty} \big(-p\, e^{-px}\big)\, y(x)\, dx = p \int_0^{+\infty} e^{-px}\, y(x)\, dx = p\, Y(p)`,
  d1: R`${L}[y'U](p) = p\, Y(p) - y(0)`,
  d2a: R`${L}[y''U](p) = ${L}\big[(y')'U\big](p) = p\, ${L}[y'U](p) - y'(0)`,
  d2b: R`${L}[y''U](p) = p\,\big(p\, Y(p) - y(0)\big) - y'(0) = p^2\, Y(p) - p\, y(0) - y'(0)`,
  dk: R`${L}\big[y^{(k)}U\big](p) = p^k\, Y(p) - p^{k-1}\, y(0) - p^{k-2}\, y'(0) - \cdots - y^{(k-1)}(0)`,

  // Usual transforms
  t1: R`${L}[U](p) = \int_0^{+\infty} e^{-px}\, dx = \left[-\frac{e^{-px}}{p}\right]_0^{+\infty} = 0 - \left(-\frac{1}{p}\right) = \frac{1}{p}`,
  tShift: R`${L}\big[e^{ax} g\, U\big](p) = \int_0^{+\infty} e^{-px}\, e^{ax}\, g(x)\, dx = \int_0^{+\infty} e^{-(p-a)x}\, g(x)\, dx = ${L}[gU](p - a)`,
  tExp: R`${L}\big[e^{ax} U\big](p) = \frac{1}{p - a}`,
  tPow: R`${L}\big[x^n U\big](p) = \frac{n}{p}\, ${L}\big[x^{n-1} U\big](p) \quad\Longrightarrow\quad ${L}\big[x^n U\big](p) = \frac{n}{p} \cdot \frac{n-1}{p} \cdots \frac{1}{p} \cdot \frac{1}{p} = \frac{n!}{p^{n+1}}`,
  table: R`\begin{array}{c|c}
    g(x) \; (x \geq 0) & ${L}[gU](p) \\ \hline
    1 & \dfrac{1}{p} \\[2ex]
    e^{ax} & \dfrac{1}{p - a} \\[2ex]
    x^n & \dfrac{n!}{p^{n+1}} \\[2ex]
    x^n e^{ax} & \dfrac{n!}{(p - a)^{n+1}}
  \end{array}`,

  // General method
  ode: R`a_n y^{(n)}(x) + a_{n-1} y^{(n-1)}(x) + \cdots + a_0\, y(x) = f(x)`,
  notations: R`Y(p) = ${L}[yU](p), \qquad F(p) = ${L}[fU](p)`,
  ode2: R`a_2\, y'' + a_1\, y' + a_0\, y = f`,
  ode2T: R`a_2\big(p^2 Y - p\, y(0) - y'(0)\big) + a_1\big(p\, Y - y(0)\big) + a_0\, Y = F(p)`,
  ode2G: R`\big(a_2 p^2 + a_1 p + a_0\big)\, Y(p) \;\underbrace{-\, a_2\, y(0)\, p - a_2\, y'(0) - a_1\, y(0)}_{G(p)} = F(p)`,
  transformed: R`\left(a_n p^n + \cdots + a_1 p + a_0\right) Y(p) + G(p) = F(p)`,
  solvedY: R`Y(p) = \frac{F(p) - G(p)}{a_n p^n + \cdots + a_1 p + a_0}`,
  inverse: R`y(x) = ${L}^{-1}[Y](x)`,

  // Example
  exOde: R`y'' - 2y' + y = x e^x, \qquad y(0) = 1, \quad y'(0) = 0`,
  exD2: R`${L}[y''U](p) = p^2\, Y(p) - p\, \underbrace{y(0)}_{1} - \underbrace{y'(0)}_{0} = p^2\, Y(p) - p`,
  exD1: R`${L}[y'U](p) = p\, Y(p) - \underbrace{y(0)}_{1} = p\, Y(p) - 1`,
  exLin: R`${L}\big[(y'' - 2y' + y)U\big] = ${L}[y''U] - 2\, ${L}[y'U] + ${L}[yU]`,
  exLhs: R`${L}\big[(y'' - 2y' + y)U\big](p) = \big(p^2\, Y(p) - p\big) - 2\big(p\, Y(p) - 1\big) + Y(p)`,
  exRhs: R`${L}[gU](p) = ${L}\big[x\, e^{1 \cdot x}\, U\big](p) = \frac{1!}{(p-1)^{1+1}} = \frac{1}{(p-1)^2}`,
  exExpand: R`p^2 Y - p - 2pY + 2 + Y = (p^2 - 2p + 1)\, Y - p + 2`,
  exAlg: R`(p - 1)^2\, Y(p) - p + 2 = \frac{1}{(p-1)^2}`,
  exIsolate: R`(p - 1)^2\, Y(p) = \frac{1}{(p-1)^2} + p - 2`,
  exY: R`Y(p) = \frac{1}{(p-1)^2}\left(\frac{1}{(p-1)^2} + p - 2\right) = \frac{1}{(p-1)^4} + \frac{p - 2}{(p-1)^2}`,
  exSplit: R`\frac{p - 2}{(p-1)^2} = \frac{(p - 1) - 1}{(p-1)^2} = \frac{p - 1}{(p-1)^2} - \frac{1}{(p-1)^2} = \frac{1}{p-1} - \frac{1}{(p-1)^2}`,
  exYFinal: R`Y(p) = \frac{1}{(p-1)^4} - \frac{1}{(p-1)^2} + \frac{1}{p-1}`,
  exInv: R`\begin{aligned}
    \frac{1}{(p-1)^4} = \frac{1}{3!} \cdot \frac{3!}{(p-1)^{3+1}} &\;\longleftarrow\; \frac{x^3}{3!}\, e^x \qquad (n = 3,\; a = 1) \\[1ex]
    \frac{1}{(p-1)^2} = \frac{1!}{(p-1)^{1+1}} &\;\longleftarrow\; x\, e^x \qquad (n = 1,\; a = 1) \\[1ex]
    \frac{1}{p-1} &\;\longleftarrow\; e^x \qquad (a = 1)
  \end{aligned}`,
  exResult: R`y(x) = e^x\left(\frac{x^3}{3!} - x + 1\right) = e^x\left(\frac{x^3}{6} - x + 1\right)`,
  exCheckDerivs: R`\begin{aligned}
    y(x) &= e^x\left(\frac{x^3}{6} - x + 1\right) \\[1ex]
    y'(x) &= e^x\left(\frac{x^3}{6} + \frac{x^2}{2} - x\right) \\[1ex]
    y''(x) &= e^x\left(\frac{x^3}{6} + x^2 - 1\right)
  \end{aligned}`,
  exCheckSum: R`y'' - 2y' + y = e^x\Big[\Big(\tfrac{x^3}{6} + x^2 - 1\Big) - 2\Big(\tfrac{x^3}{6} + \tfrac{x^2}{2} - x\Big) + \Big(\tfrac{x^3}{6} - x + 1\Big)\Big] = x\, e^x`,
  exCheckInit: R`y(0) = e^0 \cdot 1 = 1, \qquad y'(0) = e^0 \cdot 0 = 0`,
};

// \text{...} inside formulas follows the page language
const IF = { en: 'if', fr: 'si', ar: 'if' };
const localize = (math, lang) => math.replaceAll(R`\text{si }`, R`\text{${IF[lang] || IF.en} }`);

const translations = {
  en: {
    title: 'How to solve a linear differential equation using the Laplace transform?',
    subtitle: 'Laplace Transform',
    back: 'Back to Mathematics',
    tag: 'Method',
    why: 'Why?',

    ideaHeading: 'The idea',
    idea1: 'Solving a differential equation directly is hard: the unknown is a function, and the equation involves its derivatives. The Laplace transform moves the problem into another “world”, where differentiating becomes multiplying. The differential equation then becomes an ordinary algebraic equation, which we solve as in secondary school. We finally come back to the original world.',
    flow: ['Differential equation in y', 'Algebraic equation in Y', 'Y(p) isolated', 'Solution y(x)'],
    flowArrows: ['ℒ', 'solve', 'table'],
    idea2: 'This is the same trick as logarithms, which turn a product into a sum: we change worlds to make the computation easier, then come back.',

    defHeading: 'Step 0: what is the Laplace transform?',
    def1: R`To a function $y$, the Laplace transform associates a new function $Y$ of a variable $p$, defined by:`,
    def2: R`We multiply $y$ by $e^{-px}$ and integrate from $0$ to $+\infty$. The variable $x$ disappears and only $p$ remains: we have changed worlds.`,
    defU: R`The function $U$ is the unit step function:`,
    defUWhy: R`It simply says that we only look at $y$ for $x \geq 0$: the integral starts at $0$. When you read $\mathcal{L}[yU]$, think “the Laplace transform of $y$”.`,
    defConv: R`For the integral to exist, $y$ must not grow faster than an exponential, and $p$ must be large enough. Then $e^{-px}$ crushes $y(x)$ when $x \to +\infty$: we will use this fact right away.`,
    defLin: 'Finally, since an integral is linear, so is the transform: the transform of a sum is the sum of the transforms, and constants come out.',

    derivHeading: 'Step 1: where do the derivative formulas come from?',
    deriv1: R`This is the key property of the method. We want to compute the transform of $y'$:`,
    deriv1b: R`We integrate by parts, choosing:`,
    deriv2: 'The integration by parts formula gives:',
    deriv3: R`The bracket: at $+\infty$, $e^{-px}$ crushes $y(x)$, so the limit is $0$; at $0$, $e^0 = 1$:`,
    deriv4: R`The remaining integral: the two minus signs cancel, $p$ comes out of the integral, and we recognise the definition of $Y(p)$:`,
    deriv5: 'Adding the two parts:',
    deriv5Why: R`Differentiating $y$ amounts to multiplying $Y$ by $p$, and the initial value $y(0)$ appears automatically. This is why the method takes initial conditions into account without any extra effort.`,
    deriv6: R`For $y''$, there is nothing new to compute: $y''$ is the derivative of $y'$, so we apply the same formula, replacing $y$ by $y'$ (and therefore $y(0)$ by $y'(0)$):`,
    deriv7: R`Then we replace $\mathcal{L}[y'U]$ by the formula found above:`,
    deriv8: R`Repeating the argument (by induction on $k$), each new derivative multiplies by $p$ once more and adds one more initial condition. For all $k \in \mathbb{N}$:`,

    tableHeading: 'Step 2: where do the usual transforms come from?',
    table1: R`To come back from $Y$ to $y$ at the end, we need to know a few transforms. They are all computed from the definition.`,
    tConst: R`The constant function $1$:`,
    tShift: R`Multiplying by $e^{ax}$ shifts $p$ by $a$: indeed $e^{-px} e^{ax} = e^{-(p-a)x}$, so`,
    tExp: R`Applied to $g = 1$, this gives:`,
    tPow: R`For $x^n$, an integration by parts (as for $y'$) gives the relation below, which we iterate down to $\mathcal{L}[U] = 1/p$:`,
    table2: R`Combining with the shift, we get the table (for $a \in \mathbb{R}$, $n \in \mathbb{N}$ and $p > a$):`,

    methodHeading: 'Step 3: applying it to a differential equation',
    m1: 'Consider the linear differential equation with constant coefficients:',
    m2: 'and set:',
    m3: R`To see what happens, take the case $n = 2$:`,
    m4: R`By linearity, we transform each term separately, replacing $\mathcal{L}[y''U]$ and $\mathcal{L}[y'U]$ by the formulas of step 1:`,
    m5: R`We gather the terms containing $Y$ on one side; everything else only contains the numbers $y(0)$ and $y'(0)$. We call it $G(p)$:`,
    m6: R`In the general case, it is exactly the same: the coefficient of $Y$ is the polynomial obtained by replacing each $y^{(k)}$ by $p^k$, and $G(p)$ is a polynomial of degree at most $n - 1$ built from the initial conditions $y(0), \dots, y^{(n-1)}(0)$:`,
    m7: R`It is a first-degree equation in $Y(p)$! We isolate $Y$:`,
    m8: 'All that remains is to come back to the original world:',
    m8Why: R`In practice, we never compute $\mathcal{L}^{-1}$ with a formula: we decompose $Y(p)$ into simple pieces that we recognise in the table, read backwards. This is legitimate because two continuous functions that have the same transform are equal (uniqueness of the transform).`,
    stepsHeading: 'The method in 4 steps',
    steps: [
      'Apply the Laplace transform to both sides of the equation, using linearity, the derivative formulas and the initial conditions.',
      R`Solve the algebraic equation obtained for $Y(p)$.`,
      R`Decompose $Y(p)$ into partial fractions.`,
      R`Recognise each term in the table to get back $y(x)$.`,
    ],

    exampleHeading: 'Worked example',
    ex1: 'Solve the following differential equation:',
    exS1: 'Step 1: transform both sides',
    ex2: R`Let $g : x \mapsto x e^x$ and set $Y(p) = \mathcal{L}[yU](p)$. We apply the formulas of step 1 with the initial conditions $y(0) = 1$ and $y'(0) = 0$:`,
    ex3: 'By linearity, the transform of the left-hand side is:',
    ex4: 'Replacing each term:',
    ex5: R`For the right-hand side, we use the table with $n = 1$ and $a = 1$:`,
    exS2: R`Step 2: solve for $Y(p)$`,
    ex6: 'We expand the left-hand side and group the terms in Y:',
    ex7: R`Since $p^2 - 2p + 1 = (p - 1)^2$, the equation becomes:`,
    ex8: R`We move $-p + 2$ to the right-hand side:`,
    ex9: R`then divide by $(p - 1)^2$:`,
    exS3: 'Step 3: decompose into simple pieces',
    ex10: R`The table contains $\frac{1}{p-1}$, $\frac{1}{(p-1)^2}$, …, but not $\frac{p-2}{(p-1)^2}$. Trick: we write $p - 2 = (p - 1) - 1$ to make $p - 1$ appear in the numerator:`,
    ex11: 'Hence:',
    exS4: 'Step 4: come back with the table',
    ex12: R`Each term has the form $\frac{n!}{(p-a)^{n+1}}$ with $a = 1$, up to a constant factor; we read the table from right to left:`,
    ex13: 'By linearity, we add up the three pieces:',
    checkHeading: 'Check',
    check1: 'We differentiate twice (product rule):',
    check2: R`Plugging into the equation, the $x^3$ and $x^2$ terms cancel:`,
    check3: 'And the initial conditions are satisfied:',
    appHeading: 'An application: blood flow simulation',
    appBody: 'In blood flow CFD, the vascular network downstream of the simulated arteries is replaced by an electrical-like circuit (Windkessel model). Its impedance is computed with the Laplace transform, exactly as on this page.',
    appLink: 'Read the Windkessel article',
  },
  fr: {
    title: 'Comment résoudre une équation différentielle linéaire en utilisant la transformée de Laplace ?',
    subtitle: 'Transformée de Laplace',
    back: 'Retour aux mathématiques',
    tag: 'Méthode',
    why: 'Pourquoi ?',

    ideaHeading: 'L’idée',
    idea1: 'Résoudre directement une équation différentielle est difficile : l’inconnue est une fonction, et l’équation fait intervenir ses dérivées. La transformée de Laplace fait passer le problème dans un autre « monde », où dériver devient multiplier. L’équation différentielle devient alors une simple équation algébrique, que l’on résout comme au collège. On revient enfin dans le monde de départ.',
    flow: ['Équation différentielle en y', 'Équation algébrique en Y', 'Y(p) isolé', 'Solution y(x)'],
    flowArrows: ['ℒ', 'résoudre', 'table'],
    idea2: 'C’est la même astuce que le logarithme, qui transforme un produit en somme : on change de monde pour faciliter le calcul, puis on revient.',

    defHeading: 'Étape 0 : qu’est-ce que la transformée de Laplace ?',
    def1: R`À une fonction $y$, la transformée de Laplace associe une nouvelle fonction $Y$ d’une variable $p$, définie par :`,
    def2: R`On multiplie $y$ par $e^{-px}$ et on intègre de $0$ à $+\infty$. La variable $x$ disparaît, il ne reste que $p$ : on a changé de monde.`,
    defU: R`La fonction $U$ est la fonction échelon unité :`,
    defUWhy: R`Elle indique simplement qu’on ne regarde $y$ que pour $x \geq 0$ : l’intégrale commence en $0$. Quand vous lisez $\mathcal{L}[yU]$, pensez « la transformée de Laplace de $y$ ».`,
    defConv: R`Pour que l’intégrale existe, il faut que $y$ ne croisse pas plus vite qu’une exponentielle, et que $p$ soit assez grand. Alors $e^{-px}$ écrase $y(x)$ quand $x \to +\infty$ : on va s’en servir tout de suite.`,
    defLin: 'Enfin, comme une intégrale est linéaire, la transformée l’est aussi : la transformée d’une somme est la somme des transformées, et les constantes sortent.',

    derivHeading: 'Étape 1 : d’où viennent les formules des dérivées ?',
    deriv1: R`C’est la propriété clé de la méthode. On veut calculer la transformée de $y'$ :`,
    deriv1b: R`On intègre par parties, en choisissant :`,
    deriv2: 'La formule d’intégration par parties donne :',
    deriv3: R`Le crochet : en $+\infty$, $e^{-px}$ écrase $y(x)$, donc la limite vaut $0$ ; en $0$, $e^0 = 1$ :`,
    deriv4: R`L’intégrale restante : les deux signes moins se compensent, $p$ sort de l’intégrale, et on reconnaît la définition de $Y(p)$ :`,
    deriv5: 'En additionnant les deux morceaux :',
    deriv5Why: R`Dériver $y$ revient à multiplier $Y$ par $p$, et la valeur initiale $y(0)$ apparaît toute seule. C’est pour cela que la méthode prend en compte les conditions initiales sans effort supplémentaire.`,
    deriv6: R`Pour $y''$, il n’y a rien de nouveau à calculer : $y''$ est la dérivée de $y'$, donc on applique la même formule en remplaçant $y$ par $y'$ (et donc $y(0)$ par $y'(0)$) :`,
    deriv7: R`Puis on remplace $\mathcal{L}[y'U]$ par la formule trouvée juste avant :`,
    deriv8: R`En répétant le raisonnement (par récurrence sur $k$), chaque nouvelle dérivée multiplie une fois de plus par $p$ et ajoute une condition initiale. Pour tout $k \in \mathbb{N}$ :`,

    tableHeading: 'Étape 2 : d’où viennent les transformées usuelles ?',
    table1: R`Pour revenir de $Y$ à $y$ à la fin, il faut connaître quelques transformées. Elles se calculent toutes à partir de la définition.`,
    tConst: R`La fonction constante $1$ :`,
    tShift: R`Multiplier par $e^{ax}$ décale $p$ de $a$ : en effet $e^{-px} e^{ax} = e^{-(p-a)x}$, donc`,
    tExp: R`Appliqué à $g = 1$, cela donne :`,
    tPow: R`Pour $x^n$, une intégration par parties (comme pour $y'$) donne la relation ci-dessous, que l’on répète jusqu’à $\mathcal{L}[U] = 1/p$ :`,
    table2: R`En combinant avec le décalage, on obtient la table (pour $a \in \mathbb{R}$, $n \in \mathbb{N}$ et $p > a$) :`,

    methodHeading: 'Étape 3 : application à une équation différentielle',
    m1: 'Soit l’équation différentielle linéaire à coefficients constants :',
    m2: 'et posons :',
    m3: R`Pour bien voir ce qui se passe, prenons le cas $n = 2$ :`,
    m4: R`Par linéarité, on transforme chaque terme séparément, en remplaçant $\mathcal{L}[y''U]$ et $\mathcal{L}[y'U]$ par les formules de l’étape 1 :`,
    m5: R`On regroupe d’un côté les termes qui contiennent $Y$ ; tout le reste ne contient que les nombres $y(0)$ et $y'(0)$. On l’appelle $G(p)$ :`,
    m6: R`Dans le cas général, c’est exactement pareil : le coefficient de $Y$ est le polynôme obtenu en remplaçant chaque $y^{(k)}$ par $p^k$, et $G(p)$ est un polynôme de degré au plus $n - 1$ construit avec les conditions initiales $y(0), \dots, y^{(n-1)}(0)$ :`,
    m7: R`C’est une équation du premier degré en $Y(p)$ ! On isole $Y$ :`,
    m8: 'Il ne reste plus qu’à revenir dans le monde de départ :',
    m8Why: R`En pratique, on ne calcule jamais $\mathcal{L}^{-1}$ avec une formule : on décompose $Y(p)$ en morceaux simples que l’on reconnaît dans la table, lue à l’envers. C’est légitime car deux fonctions continues qui ont la même transformée sont égales (unicité de la transformée).`,
    stepsHeading: 'La méthode en 4 étapes',
    steps: [
      'Appliquer la transformée de Laplace aux deux membres de l’équation, à l’aide de la linéarité, des formules des dérivées et des conditions initiales.',
      R`Résoudre l’équation algébrique obtenue en $Y(p)$.`,
      R`Décomposer $Y(p)$ en éléments simples.`,
      R`Reconnaître chaque terme dans la table pour retrouver $y(x)$.`,
    ],

    exampleHeading: 'Exemple détaillé',
    ex1: 'Intégrer l’équation différentielle suivante :',
    exS1: 'Étape 1 : on transforme les deux membres',
    ex2: R`Soit $g : x \mapsto x e^x$ et posons $Y(p) = \mathcal{L}[yU](p)$. On applique les formules de l’étape 1 avec les conditions initiales $y(0) = 1$ et $y'(0) = 0$ :`,
    ex3: 'Par linéarité, la transformée du premier membre est :',
    ex4: 'En remplaçant chaque terme :',
    ex5: R`Pour le second membre, on utilise la table avec $n = 1$ et $a = 1$ :`,
    exS2: R`Étape 2 : on résout en $Y(p)$`,
    ex6: 'On développe le premier membre et on regroupe les termes en Y :',
    ex7: R`Comme $p^2 - 2p + 1 = (p - 1)^2$, l’équation devient :`,
    ex8: R`On fait passer $-p + 2$ dans le second membre :`,
    ex9: R`puis on divise par $(p - 1)^2$ :`,
    exS3: 'Étape 3 : on décompose en morceaux simples',
    ex10: R`La table contient $\frac{1}{p-1}$, $\frac{1}{(p-1)^2}$, …, mais pas $\frac{p-2}{(p-1)^2}$. Astuce : on écrit $p - 2 = (p - 1) - 1$ pour faire apparaître $p - 1$ au numérateur :`,
    ex11: 'D’où :',
    exS4: 'Étape 4 : on revient avec la table',
    ex12: R`Chaque terme est de la forme $\frac{n!}{(p-a)^{n+1}}$ avec $a = 1$, à une constante près ; on lit la table de droite à gauche :`,
    ex13: 'Par linéarité, on additionne les trois morceaux :',
    checkHeading: 'Vérification',
    check1: 'On dérive deux fois (dérivée d’un produit) :',
    check2: R`En remplaçant dans l’équation, les termes en $x^3$ et en $x^2$ se simplifient :`,
    check3: 'Et les conditions initiales sont bien vérifiées :',
    appHeading: 'Une application : la simulation de l’écoulement sanguin',
    appBody: 'En CFD sanguine, le réseau vasculaire situé en aval des artères simulées est remplacé par un circuit de type électrique (modèle de Windkessel). Son impédance se calcule avec la transformée de Laplace, exactement comme sur cette page.',
    appLink: 'Lire l’article sur le Windkessel',
  },
  ar: {
    title: 'كيف نحلّ معادلة تفاضلية خطية باستعمال تحويل لابلاس؟',
    subtitle: 'تحويل لابلاس',
    back: 'العودة إلى الرياضيات',
    tag: 'طريقة',
    why: 'لماذا؟',

    ideaHeading: 'الفكرة',
    idea1: 'حلّ المعادلة التفاضلية مباشرةً أمر صعب: فالمجهول دالة، والمعادلة تتضمّن مشتقاتها. ينقل تحويل لابلاس المسألة إلى «عالم» آخر يصبح فيه الاشتقاق ضربًا. فتتحوّل المعادلة التفاضلية إلى معادلة جبرية بسيطة نحلّها كما في المرحلة الإعدادية، ثم نعود إلى العالم الأصلي.',
    flow: ['معادلة تفاضلية في y', 'معادلة جبرية في Y', 'عزل Y(p)', 'الحل y(x)'],
    flowArrows: ['ℒ', 'الحل', 'الجدول'],
    idea2: 'إنها الحيلة نفسها التي يقوم بها اللوغاريتم حين يحوّل الجداء إلى مجموع: نغيّر العالم لتسهيل الحساب، ثم نعود.',

    defHeading: 'الخطوة 0: ما هو تحويل لابلاس؟',
    def1: R`يربط تحويل لابلاس بكل دالة $y$ دالة جديدة $Y$ في متغير $p$، معرّفة بما يلي:`,
    def2: R`نضرب $y$ في $e^{-px}$ ونكامل من $0$ إلى $+\infty$. فيختفي المتغير $x$ ولا يبقى إلا $p$: لقد انتقلنا إلى عالم آخر.`,
    defU: R`الدالة $U$ هي دالة الدرجة الواحدية:`,
    defUWhy: R`وهي تعني ببساطة أننا لا ننظر إلى $y$ إلا من أجل $x \geq 0$، أي أن التكامل يبدأ من $0$. حين تقرأ $\mathcal{L}[yU]$، فكّر في «تحويل لابلاس للدالة $y$».`,
    defConv: R`لكي يوجد التكامل، يجب ألا تنمو $y$ أسرع من دالة أسّية، وأن يكون $p$ كبيرًا بما يكفي. عندئذ يسحق $e^{-px}$ القيمة $y(x)$ حين $x \to +\infty$، وسنستعمل ذلك حالًا.`,
    defLin: 'وأخيرًا، بما أن التكامل خطي، فالتحويل خطي أيضًا: تحويل المجموع هو مجموع التحويلات، والثوابت تخرج.',

    derivHeading: 'الخطوة 1: من أين تأتي صيغ المشتقات؟',
    deriv1: R`هذه هي الخاصية المحورية في الطريقة. نريد حساب تحويل $y'$:`,
    deriv1b: R`نكامل بالتجزئة، باختيار:`,
    deriv2: 'تعطي صيغة التكامل بالتجزئة:',
    deriv3: R`الحدّ بين المعقوفين: عند $+\infty$ يسحق $e^{-px}$ القيمة $y(x)$ فتكون النهاية $0$، وعند $0$ لدينا $e^0 = 1$:`,
    deriv4: R`التكامل المتبقّي: تتعادل إشارتا السالب، ويخرج $p$ من التكامل، فنتعرّف على تعريف $Y(p)$:`,
    deriv5: 'بجمع الجزأين:',
    deriv5Why: R`اشتقاق $y$ يعادل ضرب $Y$ في $p$، وتظهر القيمة الابتدائية $y(0)$ تلقائيًّا. ولهذا تأخذ الطريقة الشروط الابتدائية بعين الاعتبار دون أي جهد إضافي.`,
    deriv6: R`أما $y''$ فلا جديد في حسابها: $y''$ هي مشتقة $y'$، فنطبّق الصيغة نفسها بتعويض $y$ بـ $y'$ (وبالتالي $y(0)$ بـ $y'(0)$):`,
    deriv7: R`ثم نعوّض $\mathcal{L}[y'U]$ بالصيغة التي وجدناها قبل قليل:`,
    deriv8: R`بتكرار الاستدلال (بالترجّع على $k$)، كل مشتقة جديدة تضيف ضربًا في $p$ وشرطًا ابتدائيًّا آخر. لكل $k$ من $\mathbb{N}$:`,

    tableHeading: 'الخطوة 2: من أين تأتي التحويلات المعتادة؟',
    table1: R`للعودة من $Y$ إلى $y$ في النهاية، نحتاج إلى معرفة بعض التحويلات، وكلها تُحسب انطلاقًا من التعريف.`,
    tConst: R`الدالة الثابتة $1$:`,
    tShift: R`الضرب في $e^{ax}$ يُزيح $p$ بمقدار $a$، لأن $e^{-px} e^{ax} = e^{-(p-a)x}$، إذن:`,
    tExp: R`وبتطبيق ذلك على $g = 1$ نجد:`,
    tPow: R`أما $x^n$، فإن تكاملًا بالتجزئة (كما في حالة $y'$) يعطي العلاقة التالية، التي نكرّرها حتى نصل إلى $\mathcal{L}[U] = 1/p$:`,
    table2: R`وبالجمع مع خاصية الإزاحة نحصل على الجدول (لكل $a$ من $\mathbb{R}$ و $n$ من $\mathbb{N}$ مع $p > a$):`,

    methodHeading: 'الخطوة 3: التطبيق على معادلة تفاضلية',
    m1: 'لنعتبر المعادلة التفاضلية الخطية ذات المعاملات الثابتة:',
    m2: 'ونضع:',
    m3: R`لنرَ ما يحدث بوضوح، نأخذ الحالة $n = 2$:`,
    m4: R`بالخطية، نحوّل كل حدّ على حدة، ونعوّض $\mathcal{L}[y''U]$ و $\mathcal{L}[y'U]$ بصيغ الخطوة 1:`,
    m5: R`نجمع في جهة الحدود التي تحتوي على $Y$، أما الباقي فلا يحتوي إلا على العددين $y(0)$ و $y'(0)$، ونسمّيه $G(p)$:`,
    m6: R`وفي الحالة العامة الأمر نفسه تمامًا: معامل $Y$ هو كثيرة الحدود التي نحصل عليها بتعويض كل $y^{(k)}$ بـ $p^k$، و $G(p)$ كثيرة حدود درجتها على الأكثر $n - 1$ مبنية من الشروط الابتدائية $y(0), \dots, y^{(n-1)}(0)$:`,
    m7: R`إنها معادلة من الدرجة الأولى في $Y(p)$! نعزل $Y$:`,
    m8: 'ولا يبقى إلا العودة إلى العالم الأصلي:',
    m8Why: R`عمليًّا، لا نحسب $\mathcal{L}^{-1}$ أبدًا بصيغة، بل نفكّك $Y(p)$ إلى قطع بسيطة نتعرّف عليها في الجدول مقروءًا بالعكس. وهذا مشروع لأن دالتين متصلتين لهما التحويل نفسه متساويتان (وحدانية التحويل).`,
    stepsHeading: 'الطريقة في أربع خطوات',
    steps: [
      'نطبّق تحويل لابلاس على طرفي المعادلة، مستعملين الخطية وصيغ المشتقات والشروط الابتدائية.',
      R`نحلّ المعادلة الجبرية الناتجة بالنسبة إلى $Y(p)$.`,
      R`نفكّك $Y(p)$ إلى عناصر بسيطة.`,
      R`نتعرّف على كل حدّ في الجدول لنستنتج $y(x)$.`,
    ],

    exampleHeading: 'مثال محلول',
    ex1: 'حلّ المعادلة التفاضلية التالية:',
    exS1: 'الخطوة 1: نحوّل الطرفين',
    ex2: R`لتكن $g : x \mapsto x e^x$ ولنضع $Y(p) = \mathcal{L}[yU](p)$. نطبّق صيغ الخطوة 1 مع الشرطين الابتدائيين $y(0) = 1$ و $y'(0) = 0$:`,
    ex3: 'بالخطية، تحويل الطرف الأول هو:',
    ex4: 'بتعويض كل حدّ:',
    ex5: R`وبالنسبة إلى الطرف الثاني، نستعمل الجدول مع $n = 1$ و $a = 1$:`,
    exS2: R`الخطوة 2: نحلّ بالنسبة إلى $Y(p)$`,
    ex6: 'ننشر الطرف الأول ونجمع الحدود التي تحتوي على Y:',
    ex7: R`وبما أن $p^2 - 2p + 1 = (p - 1)^2$، تصبح المعادلة:`,
    ex8: R`ننقل $-p + 2$ إلى الطرف الثاني:`,
    ex9: R`ثم نقسم على $(p - 1)^2$:`,
    exS3: 'الخطوة 3: نفكّك إلى قطع بسيطة',
    ex10: R`يحتوي الجدول على $\frac{1}{p-1}$ و $\frac{1}{(p-1)^2}$…، لكن ليس على $\frac{p-2}{(p-1)^2}$. الحيلة: نكتب $p - 2 = (p - 1) - 1$ لإظهار $p - 1$ في البسط:`,
    ex11: 'ومنه:',
    exS4: 'الخطوة 4: نعود بواسطة الجدول',
    ex12: R`كل حدّ من الشكل $\frac{n!}{(p-a)^{n+1}}$ مع $a = 1$، بتقريب ثابت؛ نقرأ الجدول من اليمين إلى اليسار:`,
    ex13: 'بالخطية، نجمع القطع الثلاث:',
    checkHeading: 'التحقق',
    check1: 'نشتق مرتين (مشتقة جداء):',
    check2: R`بالتعويض في المعادلة، تتلاشى الحدود التي فيها $x^3$ و $x^2$:`,
    check3: 'والشرطان الابتدائيان محقَّقان:',
    appHeading: 'تطبيق: محاكاة جريان الدم',
    appBody: 'في المحاكاة العددية لجريان الدم، تُستبدل الشبكة الوعائية الواقعة بعد الشرايين المحاكاة بدارة شبيهة بالدارة الكهربائية (نموذج ويندكسل)، وتُحسب ممانعتها بتحويل لابلاس تمامًا كما في هذه الصفحة.',
    appLink: 'اقرأ مقال ويندكسل',
  },
};

const Why = ({ label, text }) => (
  <div className="callout why-box">
    <CircleHelp size={18} />
    <span><strong>{label}</strong> <MathText text={text} /></span>
  </div>
);

const Flow = ({ boxes, arrows }) => (
  <div className="method-flow">
    {boxes.map((box, i) => (
      <div key={box} className="method-flow-item">
        <div className={`method-flow-box ${i === boxes.length - 1 ? 'is-result' : ''}`}>{box}</div>
        {i < arrows.length && (
          <div className="method-flow-arrow">
            <span>{arrows[i]}</span>
            <ArrowRight size={18} />
          </div>
        )}
      </div>
    ))}
  </div>
);

const LaplaceODEPage = ({ language = 'en' }) => {
  const t = translations[language] || translations.en;

  return (
    <div className="page-header">
      <div className="container">
        <h1 className="gradient-text page-title-math">{t.title}</h1>
        <p className="hero-subtitle" style={{ marginBottom: 0 }}>{t.subtitle}</p>
      </div>

      <div className="container page-content" style={{ marginTop: '4rem', textAlign: 'start' }}>
        <Link to="/mathematics" className="read-more back-nav">
          <ArrowLeft size={16} /> {t.back}
        </Link>

        <article className="glass-panel math-article">
          <p className="article-tag"><BookOpen size={18} /> {t.tag}</p>
          <h2><Compass size={22} /> {t.ideaHeading}</h2>
          <p>{t.idea1}</p>
          <Flow boxes={t.flow} arrows={t.flowArrows} />
          <p className="callout"><Lightbulb size={18} /> <span>{t.idea2}</span></p>
        </article>

        <article className="glass-panel math-article">
          <h2><Sigma size={22} /> {t.defHeading}</h2>
          <p><MathText text={t.def1} /></p>
          <div className="result-box"><BlockMath math={M.def} /></div>
          <p><MathText text={t.def2} /></p>
          <p><MathText text={t.defU} /></p>
          <BlockMath math={localize(M.step, language)} />
          <p><MathText text={t.defUWhy} /></p>
          <p><MathText text={t.defConv} /></p>
          <p>{t.defLin}</p>
          <BlockMath math={M.linear} />
        </article>

        <article className="glass-panel math-article">
          <h2><Repeat size={22} /> {t.derivHeading}</h2>
          <p><MathText text={t.deriv1} /></p>
          <BlockMath math={R`${L}[y'U](p) = \int_0^{+\infty} e^{-px}\, y'(x)\, dx`} />
          <p><MathText text={t.deriv1b} /></p>
          <BlockMath math={M.ippSetup} />
          <p>{t.deriv2}</p>
          <BlockMath math={M.ipp} />
          <p><MathText text={t.deriv3} /></p>
          <BlockMath math={M.ippBracket} />
          <p><MathText text={t.deriv4} /></p>
          <BlockMath math={M.ippIntegral} />
          <p>{t.deriv5}</p>
          <div className="result-box"><BlockMath math={M.d1} /></div>
          <Why label={t.why} text={t.deriv5Why} />
          <p><MathText text={t.deriv6} /></p>
          <BlockMath math={M.d2a} />
          <p><MathText text={t.deriv7} /></p>
          <div className="result-box"><BlockMath math={M.d2b} /></div>
          <p><MathText text={t.deriv8} /></p>
          <BlockMath math={M.dk} />
        </article>

        <article className="glass-panel math-article">
          <h2><Table2 size={22} /> {t.tableHeading}</h2>
          <p><MathText text={t.table1} /></p>
          <p><MathText text={t.tConst} /></p>
          <BlockMath math={M.t1} />
          <p><MathText text={t.tShift} /></p>
          <BlockMath math={M.tShift} />
          <p><MathText text={t.tExp} /></p>
          <BlockMath math={M.tExp} />
          <p><MathText text={t.tPow} /></p>
          <BlockMath math={M.tPow} />
          <p><MathText text={t.table2} /></p>
          <div className="result-box"><BlockMath math={M.table} /></div>
        </article>

        <article className="glass-panel math-article">
          <h2><Puzzle size={22} /> {t.methodHeading}</h2>
          <p>{t.m1}</p>
          <BlockMath math={M.ode} />
          <p>{t.m2}</p>
          <BlockMath math={M.notations} />
          <p><MathText text={t.m3} /></p>
          <BlockMath math={M.ode2} />
          <p><MathText text={t.m4} /></p>
          <BlockMath math={M.ode2T} />
          <p><MathText text={t.m5} /></p>
          <BlockMath math={M.ode2G} />
          <p><MathText text={t.m6} /></p>
          <BlockMath math={M.transformed} />
          <p><MathText text={t.m7} /></p>
          <div className="result-box"><BlockMath math={M.solvedY} /></div>
          <p>{t.m8}</p>
          <BlockMath math={M.inverse} />
          <Why label={t.why} text={t.m8Why} />

          <h2><ListChecks size={22} /> {t.stepsHeading}</h2>
          <ol className="method-steps">
            {t.steps.map((step, i) => (
              <li key={i}><MathText text={step} /></li>
            ))}
          </ol>
        </article>

        <article className="glass-panel math-article">
          <h2>{t.exampleHeading}</h2>
          <p>{t.ex1}</p>
          <BlockMath math={M.exOde} />

          <h3>{t.exS1}</h3>
          <p><MathText text={t.ex2} /></p>
          <BlockMath math={M.exD2} />
          <BlockMath math={M.exD1} />
          <p>{t.ex3}</p>
          <BlockMath math={M.exLin} />
          <p>{t.ex4}</p>
          <BlockMath math={M.exLhs} />
          <p><MathText text={t.ex5} /></p>
          <BlockMath math={M.exRhs} />

          <h3><MathText text={t.exS2} /></h3>
          <p>{t.ex6}</p>
          <BlockMath math={M.exExpand} />
          <p><MathText text={t.ex7} /></p>
          <BlockMath math={M.exAlg} />
          <p><MathText text={t.ex8} /></p>
          <BlockMath math={M.exIsolate} />
          <p><MathText text={t.ex9} /></p>
          <BlockMath math={M.exY} />

          <h3>{t.exS3}</h3>
          <p><MathText text={t.ex10} /></p>
          <BlockMath math={M.exSplit} />
          <p>{t.ex11}</p>
          <BlockMath math={M.exYFinal} />

          <h3>{t.exS4}</h3>
          <p><MathText text={t.ex12} /></p>
          <BlockMath math={M.exInv} />
          <p>{t.ex13}</p>
          <div className="result-box">
            <BlockMath math={M.exResult} />
          </div>

          <h3><CheckCircle2 size={18} /> {t.checkHeading}</h3>
          <p>{t.check1}</p>
          <BlockMath math={M.exCheckDerivs} />
          <p><MathText text={t.check2} /></p>
          <BlockMath math={M.exCheckSum} />
          <p>{t.check3}</p>
          <BlockMath math={M.exCheckInit} />
        </article>

        <article className="glass-panel math-article">
          <h2><HeartPulse size={22} /> {t.appHeading}</h2>
          <p>{t.appBody}</p>
          <Link to="/biomechanics/cfd/windkessel-boundary-conditions" className="read-more">
            {t.appLink} <ArrowRight size={16} />
          </Link>
        </article>
      </div>
    </div>
  );
};

export default LaplaceODEPage;
