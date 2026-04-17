# Guide Complet : Déployer ActuFlow sur Netlify et Automatiser Facebook

Ce guide vous montre exactement comment déployer votre site ActuFlow sur Netlify (gratuit) et configurer l'automatisation Facebook (gratuit avec Zapier). Suivez chaque étape dans l'ordre.

---

## PARTIE 1 : Préparer Votre Code pour GitHub

### Étape 1.1 : Créer un Compte GitHub (Gratuit)

1. Allez sur [github.com](https://github.com)
2. Cliquez sur "Sign up" (en haut à droite)
3. Entrez votre adresse email
4. Créez un mot de passe
5. Choisissez un nom d'utilisateur (ex: `actuflow-france`)
6. Cliquez sur "Create account"
7. Vérifiez votre email pour confirmer votre compte

### Étape 1.2 : Créer un Repository GitHub

Un repository est un dossier en ligne où vous stockez votre code.

1. Connectez-vous à GitHub
2. Cliquez sur le "+" en haut à droite
3. Sélectionnez "New repository"
4. Remplissez les informations :
   - **Repository name** : `actuflow` (ou le nom que vous préférez)
   - **Description** : `Plateforme d'actualités moderne avec automatisation Facebook`
   - **Public** : Sélectionnez "Public" (important pour Netlify)
   - **Initialize this repository with** : Cochez "Add a README file"
5. Cliquez sur "Create repository"

### Étape 1.3 : Télécharger et Installer Git

Git est un outil qui permet de synchroniser votre code local avec GitHub.

**Sur Windows** :
1. Allez sur [git-scm.com](https://git-scm.com)
2. Cliquez sur "Download for Windows"
3. Lancez l'installateur et suivez les instructions par défaut
4. Redémarrez votre ordinateur

**Sur Mac** :
1. Ouvrez le Terminal
2. Tapez : `xcode-select --install`
3. Suivez les instructions

**Sur Linux** :
1. Ouvrez le Terminal
2. Tapez : `sudo apt install git` (Ubuntu/Debian)

### Étape 1.4 : Configurer Git Localement

1. Ouvrez le Terminal (Windows : Command Prompt, Mac/Linux : Terminal)
2. Tapez les commandes suivantes (remplacez par vos informations) :
   ```
   git config --global user.name "Votre Nom"
   git config --global user.email "votre.email@gmail.com"
   ```

### Étape 1.5 : Cloner Votre Repository Localement

1. Allez sur votre repository GitHub
2. Cliquez sur le bouton vert "Code"
3. Copiez l'URL HTTPS (ex: `https://github.com/votre-username/actuflow.git`)
4. Ouvrez le Terminal
5. Naviguez vers le dossier où vous voulez stocker le projet :
   ```
   cd Documents
   ```
6. Clonez le repository :
   ```
   git clone https://github.com/votre-username/actuflow.git
   cd actuflow
   ```

### Étape 1.6 : Copier les Fichiers du Projet ActuFlow

1. Ouvrez l'Explorateur de fichiers (Windows) ou Finder (Mac)
2. Naviguez vers `/home/ubuntu/actuflow` (où nous avons créé le projet)
3. Sélectionnez TOUS les fichiers et dossiers (Ctrl+A ou Cmd+A)
4. Copiez-les (Ctrl+C ou Cmd+C)
5. Naviguez vers le dossier `actuflow` que vous avez cloné
6. Collez les fichiers (Ctrl+V ou Cmd+V)
7. **Important** : Assurez-vous que les fichiers cachés (`.gitignore`, `.env`, etc.) sont aussi copiés

### Étape 1.7 : Pousser le Code vers GitHub

1. Ouvrez le Terminal
2. Naviguez vers le dossier du projet :
   ```
   cd chemin/vers/actuflow
   ```
3. Tapez les commandes suivantes :
   ```
   git add .
   git commit -m "Initial commit: ActuFlow site with RSS and Facebook automation"
   git push origin main
   ```
4. Si demandé, entrez votre nom d'utilisateur et mot de passe GitHub

Votre code est maintenant sur GitHub !

---

## PARTIE 2 : Déployer sur Netlify

### Étape 2.1 : Créer un Compte Netlify (Gratuit)

1. Allez sur [netlify.com](https://www.netlify.com)
2. Cliquez sur "Sign up" (en haut à droite)
3. Sélectionnez "GitHub" pour vous connecter avec votre compte GitHub
4. Autorisez Netlify à accéder à vos repositories GitHub
5. Vérifiez votre email

### Étape 2.2 : Connecter Votre Repository GitHub à Netlify

1. Connectez-vous à Netlify
2. Cliquez sur "Add new site"
3. Sélectionnez "Import an existing project"
4. Cliquez sur "GitHub"
5. Autorisez Netlify à accéder à GitHub (si demandé)
6. Sélectionnez votre repository `actuflow`
7. Cliquez sur "Deploy site"

### Étape 2.3 : Configurer les Paramètres de Build

Netlify détectera automatiquement que c'est un projet Vite. Les paramètres par défaut devraient être :
- **Build command** : `pnpm run build`
- **Publish directory** : `dist`

Si ce n'est pas le cas, configurez-les manuellement.

### Étape 2.4 : Attendre le Déploiement

1. Netlify va maintenant construire et déployer votre site
2. Attendez quelques minutes (vous verrez une barre de progression)
3. Quand c'est terminé, vous verrez un message "Deploy successful"
4. Netlify vous donnera une URL temporaire comme `https://actuflow-xyz.netlify.app`

### Étape 2.5 : Obtenir Votre Domaine Gratuit Netlify

1. Allez dans les paramètres du site Netlify
2. Cliquez sur "Domain management"
3. Sous "Production domain", vous verrez votre domaine gratuit
4. Vous pouvez le personnaliser en cliquant sur "Edit site name"
5. Changez le nom (ex: `actuflow-france.netlify.app`)
6. Cliquez sur "Save"

Votre site est maintenant en ligne ! 🎉

**Votre URL permanente** : `https://actuflow-france.netlify.app` (remplacez par votre nom)

---

## PARTIE 3 : Vérifier que le Flux RSS Fonctionne

### Étape 3.1 : Tester le Flux RSS

1. Ouvrez votre navigateur
2. Allez à : `https://votre-domaine-netlify.netlify.app/rss.xml`
3. Vous devriez voir du code XML avec vos articles
4. Si vous voyez une erreur 404, c'est que le fichier `rss.xml` n'a pas été copié correctement

### Étape 3.2 : Copier l'URL du Flux RSS

Copiez cette URL, vous en aurez besoin pour Zapier :
```
https://votre-domaine-netlify.netlify.app/rss.xml
```

---

## PARTIE 4 : Configurer l'Automatisation Facebook avec Zapier

### Étape 4.1 : Créer un Compte Zapier (Gratuit)

1. Allez sur [zapier.com](https://zapier.com)
2. Cliquez sur "Sign Up" (en haut à droite)
3. Entrez votre email et créez un mot de passe
4. Vérifiez votre email
5. Connectez-vous à Zapier

### Étape 4.2 : Créer un Nouveau Zap

1. Depuis le tableau de bord Zapier, cliquez sur "+ Create Zap"
2. Vous êtes maintenant dans l'éditeur de Zap

### Étape 4.3 : Configurer le Trigger (Déclencheur RSS)

**Sélectionner l'application trigger** :
1. Dans la section "Trigger", cliquez sur "Choose App"
2. Recherchez "RSS"
3. Sélectionnez "RSS by Zapier"
4. Cliquez sur "Continue"

**Sélectionner le type de trigger** :
1. Sélectionnez "New Item in Feed"
2. Cliquez sur "Continue"

**Configurer le flux RSS** :
1. Dans le champ "Feed URL", collez votre URL RSS : `https://votre-domaine-netlify.netlify.app/rss.xml`
2. Cliquez sur "Continue"
3. Zapier va tester la connexion. Si tout est correct, vous verrez "Test successful"

### Étape 4.4 : Configurer l'Action (Publication Facebook)

**Sélectionner l'application action** :
1. Dans la section "Action", cliquez sur "Choose App"
2. Recherchez "Facebook"
3. Sélectionnez "Facebook Pages"
4. Cliquez sur "Continue"

**Sélectionner le type d'action** :
1. Sélectionnez "Create Post"
2. Cliquez sur "Continue"

**Connecter votre compte Facebook** :
1. Cliquez sur "Connect a new account"
2. Une fenêtre Facebook s'ouvrira
3. Entrez vos identifiants Facebook
4. Acceptez les permissions
5. Vous serez redirigé vers Zapier

**Configurer le contenu du post** :
1. **Page** : Sélectionnez votre page Facebook dans la liste déroulante
2. **Message** : Entrez le template suivant :
   ```
   🚨 NOUVELLE ACTUALITÉ 🚨

   {{title}}

   {{description}}

   👉 Lire l'article complet : {{link}}

   #ActuFlow #Actualités
   ```
3. Cliquez sur "Continue"

### Étape 4.5 : Tester le Zap

1. Cliquez sur "Test" en bas de l'écran
2. Zapier va créer un post de test sur votre page Facebook
3. Vérifiez votre page Facebook pour voir le post
4. Si le test est réussi, vous verrez "Test successful"

### Étape 4.6 : Activer le Zap

1. Cliquez sur "Turn on Zap"
2. Votre Zap est maintenant actif !

Chaque nouvel article sera automatiquement publié sur Facebook ! 🎉

---

## PARTIE 5 : Ajouter un Nouvel Article

Maintenant que tout est configuré, voici comment ajouter de nouveaux articles :

### Étape 5.1 : Modifier le Fichier Home.tsx

1. Ouvrez le fichier `client/src/pages/Home.tsx` dans un éditeur de texte
2. Trouvez le tableau `ARTICLES` au début du fichier
3. Ajoutez un nouvel article en copiant la structure d'un article existant :
   ```typescript
   {
     id: '5',
     title: 'Votre titre d\'article',
     excerpt: 'Votre résumé de l\'article',
     category: 'Sports',
     author: 'Votre Nom',
     date: '17 avril 2026',
     readTime: '5 min',
   },
   ```
4. Sauvegardez le fichier

### Étape 5.2 : Mettre à Jour le Flux RSS

1. Ouvrez le fichier `client/public/rss.xml` dans un éditeur de texte
2. Trouvez la section `<channel>`
3. Ajoutez un nouvel `<item>` au début de la liste (avant les autres articles) :
   ```xml
   <item>
     <title>Votre titre d'article</title>
     <link>https://votre-domaine-netlify.netlify.app/articles/votre-article</link>
     <guid isPermaLink="false">actuflow-5</guid>
     <pubDate>Wed, 17 Apr 2026 10:00:00 GMT</pubDate>
     <category>Sports</category>
     <author>Votre Nom</author>
     <description>Votre résumé de l'article</description>
     <content:encoded><![CDATA[
       <p>Votre résumé de l'article</p>
     ]]></content:encoded>
   </item>
   ```
4. Sauvegardez le fichier

### Étape 5.3 : Pousser les Changements vers GitHub

1. Ouvrez le Terminal
2. Naviguez vers le dossier du projet :
   ```
   cd chemin/vers/actuflow
   ```
3. Tapez les commandes :
   ```
   git add .
   git commit -m "Add new article: Votre titre d'article"
   git push origin main
   ```

### Étape 5.4 : Attendre le Redéploiement

1. Allez sur votre tableau de bord Netlify
2. Vous verrez un nouveau déploiement en cours
3. Attendez que le déploiement soit terminé (quelques minutes)
4. Votre site sera mis à jour automatiquement

### Étape 5.5 : Attendre la Publication Facebook

1. Zapier vérifie le flux RSS toutes les 15 minutes en moyenne
2. Attendez quelques minutes après le déploiement
3. Vérifiez votre page Facebook pour voir le nouvel article publié automatiquement

---

## RÉSUMÉ DU PROCESSUS

| Étape | Plateforme | Temps | Gratuit ? |
|-------|-----------|-------|----------|
| 1. Créer compte GitHub | GitHub | 5 min | ✅ Oui |
| 2. Pousser code vers GitHub | GitHub + Terminal | 10 min | ✅ Oui |
| 3. Déployer sur Netlify | Netlify | 15 min | ✅ Oui |
| 4. Configurer Zapier | Zapier | 20 min | ✅ Oui |
| 5. Ajouter un article | Votre ordinateur | 10 min | ✅ Oui |
| **Total** | | **60 min** | **✅ Oui** |

---

## DÉPANNAGE

### Le site affiche une erreur 404

**Solution** :
1. Vérifiez que tous les fichiers ont été copiés vers GitHub
2. Vérifiez que le déploiement Netlify est terminé
3. Attendez quelques minutes et rafraîchissez la page

### Le flux RSS ne fonctionne pas

**Solution** :
1. Vérifiez que le fichier `client/public/rss.xml` existe
2. Allez à `https://votre-domaine-netlify.netlify.app/rss.xml` dans votre navigateur
3. Si vous voyez une erreur 404, le fichier n'a pas été copié correctement

### Zapier ne publie pas sur Facebook

**Solution** :
1. Vérifiez que vous avez les permissions d'administrateur sur la page Facebook
2. Testez le Zap manuellement en cliquant sur "Test"
3. Vérifiez les logs du Zap pour voir les erreurs

### Je ne vois pas mon nouvel article sur Facebook

**Solution** :
1. Vérifiez que vous avez mis à jour le fichier `rss.xml`
2. Vérifiez que le déploiement Netlify est terminé
3. Attendez 15 minutes que Zapier vérifie le flux RSS
4. Testez le Zap manuellement

---

## PROCHAINES ÉTAPES

Une fois que tout fonctionne :

1. **Ajouter un Domaine Personnalisé** : Achetez un domaine `.fr` (environ 5€/an) et configurez-le dans Netlify
2. **Améliorer le Design** : Ajoutez des images pour chaque article
3. **Ajouter Plus de Catégories** : Créez des pages pour Politique, Économie, etc.
4. **Configurer Google Analytics** : Suivez le trafic de votre site

---

## BESOIN D'AIDE ?

- **GitHub** : [docs.github.com](https://docs.github.com)
- **Netlify** : [docs.netlify.com](https://docs.netlify.com)
- **Zapier** : [zapier.com/help](https://zapier.com/help)
- **Git** : [git-scm.com/doc](https://git-scm.com/doc)

Bonne chance ! 🚀
