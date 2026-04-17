# Guide Complet : Automatiser la Publication Facebook avec ActuFlow et Zapier

Ce guide vous montre comment configurer une automatisation gratuite pour publier automatiquement vos articles ActuFlow sur votre page Facebook, sans payer pour IFTTT Pro.

## Pourquoi Zapier ?

Zapier offre un plan gratuit qui permet de créer des automatisations simples sans frais. Contrairement à IFTTT qui a rendu payant l'accès à Facebook, Zapier reste gratuit pour les cas d'usage basiques comme la publication automatique d'articles.

## Prérequis

Avant de commencer, assurez-vous que :

- Votre site ActuFlow est déployé et accessible en ligne (ex: `https://actuflow.fr`)
- Vous avez accès à votre page Facebook en tant qu'administrateur
- Vous avez un compte email valide

## Étape 1 : Créer un Compte Zapier

1. Allez sur [zapier.com](https://zapier.com)
2. Cliquez sur "Sign Up" (en haut à droite)
3. Entrez votre adresse email et créez un mot de passe
4. Vérifiez votre email pour confirmer votre compte
5. Connectez-vous à Zapier

## Étape 2 : Créer un Nouveau Zap

Un "Zap" est une automatisation qui relie deux applications. Dans notre cas, nous relions le flux RSS d'ActuFlow à Facebook.

1. Depuis le tableau de bord Zapier, cliquez sur le bouton orange "+ Create Zap"
2. Vous êtes maintenant dans l'éditeur de Zap

## Étape 3 : Configurer le Trigger (Déclencheur)

Le trigger est l'événement qui déclenche l'automatisation. Dans notre cas, c'est l'ajout d'un nouvel article.

### Étape 3.1 : Sélectionner l'Application Trigger

1. Dans la section "Trigger", cliquez sur "Choose App"
2. Recherchez "RSS" dans la barre de recherche
3. Sélectionnez "RSS by Zapier"
4. Cliquez sur "Continue"

### Étape 3.2 : Sélectionner le Type de Trigger

1. Sélectionnez "New Item in Feed" comme type de trigger
2. Cliquez sur "Continue"

### Étape 3.3 : Configurer le Flux RSS

1. Dans le champ "Feed URL", collez l'URL de votre flux RSS : `https://votre-domaine.com/rss.xml`
   - Remplacez `votre-domaine.com` par votre vrai domaine
2. Cliquez sur "Continue"
3. Zapier va tester la connexion au flux RSS. Si tout est correct, vous verrez un message de succès.

## Étape 4 : Configurer l'Action (Action)

L'action est ce qui se passe quand le trigger est déclenché. Dans notre cas, nous voulons publier sur Facebook.

### Étape 4.1 : Sélectionner l'Application Action

1. Dans la section "Action", cliquez sur "Choose App"
2. Recherchez "Facebook" dans la barre de recherche
3. Sélectionnez "Facebook Pages"
4. Cliquez sur "Continue"

### Étape 4.2 : Sélectionner le Type d'Action

1. Sélectionnez "Create Post" comme type d'action
2. Cliquez sur "Continue"

### Étape 4.3 : Connecter Votre Compte Facebook

1. Cliquez sur "Connect a new account"
2. Une fenêtre Facebook s'ouvrira
3. Entrez vos identifiants Facebook
4. Acceptez les permissions demandées par Zapier
5. Vous serez redirigé vers Zapier

### Étape 4.4 : Configurer le Contenu du Post

Maintenant, vous devez configurer ce que Zapier publiera sur Facebook.

1. **Page** : Sélectionnez votre page Facebook dans la liste déroulante
2. **Message** : Entrez le template du message. Utilisez les variables suivantes :
   ```
   {{title}}

   {{description}}

   Lire l'article complet : {{link}}
   ```
   - `{{title}}` sera remplacé par le titre de l'article
   - `{{description}}` sera remplacé par la description/extrait
   - `{{link}}` sera remplacé par le lien vers l'article

3. **Link** (optionnel) : Laissez vide ou entrez `{{link}}`

4. **Image** (optionnel) : Vous pouvez ajouter une image si votre flux RSS en contient

Exemple de message :
```
🚨 ACTU FLOW - Nouvelle actualité !

PSG et Bayern Munich en demi-finales de la Ligue des Champions

Le PSG élimine Liverpool 4-0 sur l'ensemble des deux matches...

Lire l'article complet : https://actuflow.fr/articles/...
```

## Étape 5 : Tester le Zap

Avant d'activer le Zap, testez-le pour vous assurer que tout fonctionne correctement.

1. Cliquez sur "Test" en bas de l'écran
2. Zapier va récupérer le dernier article de votre flux RSS et créer un post de test sur Facebook
3. Vérifiez votre page Facebook pour voir le post de test
4. Si le test est réussi, vous verrez un message vert "Test successful"

## Étape 6 : Activer le Zap

Une fois le test réussi, activez le Zap pour qu'il fonctionne automatiquement.

1. Cliquez sur "Turn on Zap" en bas de l'écran
2. Votre Zap est maintenant actif !

## Étape 7 : Vérifier le Fonctionnement

Pour vérifier que tout fonctionne correctement :

1. Ajoutez un nouvel article à votre site ActuFlow
2. Mettez à jour le fichier `client/public/rss.xml` avec le nouvel article
3. Déployez les changements sur Netlify/Vercel
4. Attendez quelques minutes (Zapier vérifie le flux RSS toutes les 15 minutes en moyenne)
5. Vérifiez votre page Facebook pour voir le nouvel article publié automatiquement

## Configuration Avancée

### Publier Uniquement Certaines Catégories

Si vous ne voulez publier que certaines catégories (ex: Sports uniquement), vous pouvez ajouter un filtre :

1. Entre le Trigger et l'Action, cliquez sur "+" pour ajouter un filtre
2. Sélectionnez "Filter by Zapier"
3. Configurez le filtre pour ne garder que les articles avec la catégorie souhaitée

### Publier à une Heure Spécifique

Si vous voulez que les articles soient publiés à une heure précise plutôt qu'immédiatement :

1. Entre le Trigger et l'Action, cliquez sur "+" pour ajouter une action
2. Sélectionnez "Delay by Zapier"
3. Configurez le délai souhaité

### Ajouter une Image à Chaque Post

Pour ajouter une image à chaque post Facebook :

1. Modifiez votre flux RSS pour inclure une balise `<image>` ou `<media:content>` dans chaque article
2. Dans la configuration de l'action Facebook, sélectionnez le champ "Image" et mappez-le à l'image du flux RSS

## Dépannage

### Le Zap ne Fonctionne Pas

**Problème** : Aucun post n'est publié sur Facebook

**Solutions** :
- Vérifiez que l'URL du flux RSS est correcte
- Vérifiez que votre site est accessible en ligne
- Vérifiez que le flux RSS contient des articles
- Vérifiez que vous avez les permissions d'administrateur sur la page Facebook
- Consultez les logs du Zap dans Zapier pour voir les erreurs

### Le Flux RSS ne se Met Pas à Jour

**Problème** : Les nouveaux articles n'apparaissent pas dans le flux RSS

**Solutions** :
- Vérifiez que vous avez mis à jour le fichier `client/public/rss.xml`
- Vérifiez que vous avez déployé les changements sur Netlify/Vercel
- Attendez quelques minutes que le cache se vide
- Testez l'URL du flux RSS dans votre navigateur pour vérifier qu'elle est accessible

### Facebook Refuse de Publier

**Problème** : Zapier affiche une erreur lors de la publication sur Facebook

**Solutions** :
- Vérifiez que vous avez les permissions d'administrateur sur la page Facebook
- Vérifiez que votre compte Facebook n'a pas de restrictions
- Reconnectez votre compte Facebook à Zapier
- Vérifiez que le contenu du post ne viole pas les politiques de Facebook

## Limites du Plan Gratuit Zapier

Le plan gratuit Zapier permet :
- **1 Zap actif** : Vous pouvez créer autant de Zaps que vous voulez, mais seul 1 peut être actif à la fois
- **100 tâches par mois** : Chaque publication compte comme une tâche
- **Pas de support prioritaire** : Vous avez accès au support communautaire

Si vous avez besoin de plus de Zaps actifs ou de plus de tâches, vous pouvez passer au plan payant (à partir de $20/mois).

## Alternative : Utiliser IFTTT avec un Compte Payant

Si vous préférez IFTTT malgré le coût, voici comment configurer l'automatisation :

1. Créez un compte IFTTT Pro (environ $10/mois)
2. Créez une applet avec le trigger "New item in feed" (RSS)
3. Sélectionnez l'action "Create a post" (Facebook Pages)
4. Configurez le template du message comme décrit ci-dessus

## Conclusion

Vous avez maintenant configuré une automatisation gratuite qui publie automatiquement vos articles ActuFlow sur Facebook. Chaque fois que vous ajoutez un nouvel article, il sera publié sur votre page Facebook sans intervention manuelle.

Pour plus d'informations, consultez la [documentation Zapier](https://zapier.com/help).

---

**Besoin d'aide ?** Consultez le [Guide de Déploiement](./DEPLOYMENT_GUIDE.md) ou contactez le support Zapier.
