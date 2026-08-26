# Guide Détaillé des Projets OpenFOAM - Jour 1

Ce document reprend les deux projets que nous avons réalisés aujourd'hui, explique chaque étape pas à pas et détaille ce que font les commandes ainsi que les modifications que vous pouvez y apporter pour apprendre.

---

## 🏎️ Projet 1 : La Cavité Entraînée (Lid-driven Cavity)
**Le Concept** : On simule l'écoulement d'un fluide dans une boîte carrée fermée dont le couvercle supérieur glisse à une vitesse constante (1 m/s). Cela crée un grand tourbillon à l'intérieur.

### Les Étapes Pas à Pas :

1. **Aller dans le dossier de travail** :
   ```bash
   cd $FOAM_RUN
   ```
2. **Copier le tutoriel** :
   ```bash
   cp -r $FOAM_TUTORIALS/incompressible/icoFoam/cavity/cavity .
   cd cavity
   ```
3. **Générer le maillage** :
   ```bash
   blockMesh
   ```
   * **Rôle de la commande** : Elle lit le fichier de configuration `system/blockMeshDict` et découpe la boîte en petites cellules de calcul.
   * **Ce qu'on peut faire avec** : Vous pouvez ouvrir `system/blockMeshDict` et modifier la ligne qui définit le nombre de divisions (par exemple, remplacer `(20 20 1)` par `(3 3 1)`). Cela vous permet de créer un maillage très grossier pour analyser les valeurs numériques une par une.

4. **Lancer la simulation** :
   ```bash
   icoFoam
   ```
   * **Rôle de la commande** : C'est le "moteur de calcul" (le solveur) pour les fluides incompressibles et laminaires. Elle résout les équations de Navier-Stokes.

5. **Visualiser** :
   ```bash
   paraFoam
   ```
   * **Rôle** : Ouvre l'interface graphique ParaView pour transformer les fichiers de chiffres en images colorées.

---

## 🌊 Projet 2 : La Rupture de Barrage (Dam Break)
**Le Concept** : On simule un bloc d'eau qui s'effondre sous l'effet de la gravité et va s'écraser contre un petit obstacle au fond de la boîte. C'est une simulation multiphasique (Eau + Air).

### Les Étapes Pas à Pas :

1. **Copier le projet** :
   ```bash
   cd $FOAM_RUN
   cp -r $FOAM_TUTORIALS/multiphase/interFoam/laminar/damBreak/damBreak .
   cd damBreak
   ```
2. **Initialiser le dossier de départ** (Le piège du jour) :
   ```bash
   cp -r 0.orig 0
   ```
   * **Rôle** : Les tutoriels OpenFOAM protègent les fichiers de conditions initiales dans un dossier nommé `0.orig`. Pour que le solveur fonctionne, il lui faut impérativement un dossier nommé `0`. Cette commande fait la copie.

3. **Créer le maillage** :
   ```bash
   blockMesh
   ```

4. **Placer l'eau dans la boîte (La nouveauté)** :
   ```bash
   setFields
   ```
   * **Rôle de la commande** : Par défaut, toute la boîte est remplie d'air. Cette commande lit le fichier `system/setFieldsDict` et "verse" de l'eau dans la zone rectangulaire définie (en mettant la variable `alpha.water` à 1).
   * **Ce qu'on peut faire avec** : Vous pouvez modifier les coordonnées de la boîte dans `system/setFieldsDict` pour faire un barrage plus haut, plus large, ou placé ailleurs.

5. **Lancer la simulation** :
   ```bash
   interFoam
   ```
   * **Rôle de la commande** : C'est le solveur pour deux fluides non miscibles (eau et air). Il calcule le mouvement de la surface de l'eau.

6. **Visualiser** :
   ```bash
   paraFoam
   ```

---

## 🔧 Focus sur les fichiers de paramètres (Ce que vous pouvez modifier)

### 1. Pour changer le temps : `system/controlDict`
C'est le fichier que vous avez ouvert avec `nano`.
* **`endTime`** : Vous pouvez augmenter ce chiffre pour que la simulation dure plus longtemps (par exemple passer de 1 à 10 secondes).
* **`writeInterval`** : Vous pouvez réduire ce chiffre pour enregistrer plus d'images et avoir une vidéo plus fluide dans ParaView.

### 2. Pour changer la physique : `constant/transportProperties`
* Vous pouvez modifier la valeur `nu` (viscosité). Si vous augmentez celle de l'eau, elle coulera comme du miel !

---
*En comprenant ces étapes et ces fichiers, vous n'appliquez plus une recette : vous commencez à paramétrer vos propres simulations !*
