# Guide de Déploiement et d'Automatisation ActuFlow

## 1. Hébergement Permanent (Gratuit)

### Option A : Netlify (Recommandé)

Netlify offre un hébergement gratuit et permanent pour les sites statiques comme ActuFlow.

**Étapes de déploiement** :

1. Créez un compte sur [Netlify](https://www.netlify.com) (gratuit)
2. Connectez votre compte GitHub à Netlify
3. Cliquez sur "New site from Git" et sélectionnez le repository ActuFlow
4. Configurez les paramètres de build :
   - **Build command** : `pnpm run build`
   - **Publish directory** : `dist`
5. Cliquez sur "Deploy site"

Netlify générera automatiquement une URL permanente pour votre site (ex: `actuflow-xyz.netlify.app`).

### Option B : Vercel

Vercel est une alternative populaire avec une configuration similaire à Netlify.

1. Créez un compte sur [Vercel](https://vercel.com) (gratuit)
2. Importez votre repository GitHub
3. Vercel détectera automatiquement que c'est un projet Vite
4. Cliquez sur "Deploy"

### Domaine Personnalisé

Pour utiliser votre propre domaine (ex: `www.actuflow.fr`) :

1. Achetez un domaine chez un registraire (GoDaddy, Namecheap, OVH, etc.)
2. Dans Netlify/Vercel, allez à "Settings" → "Domain management"
3. Ajoutez votre domaine personnalisé
4. Suivez les instructions pour configurer les DNS records

## 2. Flux RSS Automatique

Le fichier `client/public/rss.xml` est automatiquement généré et accessible à l'adresse :

```
https://votre-domaine.com/rss.xml
```

Ce flux contient tous vos articles et se met à jour automatiquement quand vous ajoutez de nouveaux articles.

## 3. Automatisation Facebook avec Zapier (Gratuit)

### Étape 1 : Créer un compte Zapier

1. Allez sur [Zapier.com](https://zapier.com)
2. Créez un compte gratuit
3. Cliquez sur "Create Zap"

### Étape 2 : Configurer le Trigger (RSS)

1. Recherchez "RSS" dans la barre de recherche
2. Sélectionnez "RSS by Zapier"
3. Choisissez le trigger "New Item in Feed"
4. Collez l'URL de votre flux RSS : `https://votre-domaine.com/rss.xml`
5. Cliquez sur "Continue"

### Étape 3 : Configurer l'Action (Facebook)

1. Recherchez "Facebook Pages" dans la barre de recherche
2. Sélectionnez "Facebook Pages"
3. Choisissez l'action "Create Post"
4. Connectez votre compte Facebook et sélectionnez votre page
5. Configurez le template du post :
   - **Message** : `{{title}} - {{description}}`
   - **Link** : `{{link}}`
   - **Image** : (optionnel)

### Étape 4 : Tester et Activer

1. Cliquez sur "Test" pour vérifier que tout fonctionne
2. Si le test est réussi, cliquez sur "Turn on Zap"

Votre Zap est maintenant actif ! Chaque fois que vous ajoutez un nouvel article à votre site, il sera automatiquement publié sur votre page Facebook.

## 4. Mise à Jour du Contenu

Pour ajouter de nouveaux articles, modifiez le fichier `client/src/pages/Home.tsx` :

1. Ajoutez un nouvel objet article au tableau `ARTICLES`
2. Mettez à jour le fichier `client/public/rss.xml` avec le nouvel article
3. Commitez et poussez les changements vers GitHub
4. Netlify/Vercel redéploiera automatiquement le site

## 5. Gestion du Domaine

### Renouvellement

Assurez-vous de renouveler votre domaine avant qu'il n'expire. La plupart des registraires envoient des rappels par email.

### Migration

Si vous changez de registraire, mettez à jour les DNS records chez le nouveau registraire pour pointer vers Netlify/Vercel.

## 6. Monitoring et Maintenance

### Vérifier le Statut du Flux RSS

Visitez régulièrement `https://votre-domaine.com/rss.xml` pour vérifier que le flux est à jour.

### Vérifier les Publications Facebook

Consultez votre page Facebook pour confirmer que les articles sont publiés automatiquement.

### Logs Netlify/Vercel

Connectez-vous à votre compte Netlify/Vercel pour consulter les logs de déploiement en cas de problème.

## 7. Ressources Utiles

- [Documentation Netlify](https://docs.netlify.com/)
- [Documentation Vercel](https://vercel.com/docs)
- [Documentation Zapier](https://zapier.com/help)
- [Spécification RSS 2.0](https://www.rssboard.org/rss-specification)

## 8. Support

Si vous rencontrez des problèmes :

1. **Netlify/Vercel** : Consultez la documentation ou contactez le support
2. **Zapier** : Utilisez le chat d'aide intégré ou consultez la base de connaissances
3. **Domaine** : Contactez votre registraire de domaine

---

**Résumé** : Votre site ActuFlow est maintenant prêt pour un hébergement permanent gratuit avec automatisation Facebook. Suivez ce guide pour déployer et configurer l'automatisation.
