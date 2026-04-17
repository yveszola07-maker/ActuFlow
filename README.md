# ActuFlow - Plateforme d'Actualités Moderne

ActuFlow est une plateforme d'actualités moderne construite avec React, Tailwind CSS et Vite. Elle offre une expérience utilisateur épurée et professionnelle avec un design éditorial minimaliste.

## Caractéristiques

- **Design Éditorial Minimaliste** : Hiérarchie typographique claire avec Playfair Display et Inter
- **Flux RSS Intégré** : Automatisation Facebook gratuite via Zapier
- **Responsive Design** : Adapté à tous les appareils (mobile, tablette, desktop)
- **Performance Optimisée** : Vite pour un développement et un déploiement rapides
- **Hébergement Gratuit** : Déployable sur Netlify ou Vercel sans frais

## Structure du Projet

```
actuflow/
├── client/
│   ├── public/
│   │   ├── rss.xml          # Flux RSS pour l'automatisation Facebook
│   │   └── favicon.ico
│   ├── src/
│   │   ├── pages/
│   │   │   └── Home.tsx     # Page d'accueil principale
│   │   ├── components/      # Composants réutilisables
│   │   ├── App.tsx          # Composant racine
│   │   ├── index.css        # Styles globaux et variables CSS
│   │   └── main.tsx         # Point d'entrée
│   └── index.html
├── netlify.toml             # Configuration Netlify
├── vercel.json              # Configuration Vercel
├── DEPLOYMENT_GUIDE.md      # Guide de déploiement et d'automatisation
└── package.json
```

## Démarrage Rapide

### Installation

```bash
# Installer les dépendances
pnpm install

# Démarrer le serveur de développement
pnpm run dev

# Accéder à http://localhost:3000
```

### Build pour Production

```bash
# Compiler le projet
pnpm run build

# Prévisualiser la version production
pnpm run preview
```

## Déploiement

### Netlify (Recommandé)

1. Poussez votre code vers GitHub
2. Connectez votre repository à Netlify
3. Netlify détectera automatiquement la configuration
4. Votre site sera déployé en quelques minutes

### Vercel

1. Poussez votre code vers GitHub
2. Importez votre repository dans Vercel
3. Vercel détectera automatiquement la configuration Vite
4. Votre site sera déployé automatiquement

Pour plus de détails, consultez [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md).

## Automatisation Facebook

ActuFlow inclut un flux RSS automatique accessible à `/rss.xml`. Utilisez Zapier pour publier automatiquement vos articles sur Facebook :

1. Créez un compte Zapier gratuit
2. Créez un Zap avec le trigger "RSS by Zapier"
3. Collez l'URL du flux RSS : `https://votre-domaine.com/rss.xml`
4. Configurez l'action "Facebook Pages" → "Create Post"
5. Activez le Zap

Chaque nouvel article sera automatiquement publié sur votre page Facebook.

## Personnalisation

### Ajouter des Articles

Modifiez le tableau `ARTICLES` dans `client/src/pages/Home.tsx` et mettez à jour `client/public/rss.xml`.

### Modifier les Couleurs

Les couleurs sont définies dans `client/src/index.css`. Modifiez les variables CSS pour personnaliser l'apparence.

### Modifier les Polices

Les polices sont importées depuis Google Fonts dans `client/src/index.css`. Modifiez l'import pour utiliser d'autres polices.

## Technologies Utilisées

- **React 19** : Framework UI moderne
- **Vite** : Build tool rapide et léger
- **Tailwind CSS 4** : Framework CSS utilitaire
- **shadcn/ui** : Composants UI accessibles et réutilisables
- **TypeScript** : Typage statique pour une meilleure qualité de code

## Styles et Design

ActuFlow utilise un **design éditorial minimaliste** inspiré du design suisse moderne. Les principes clés incluent :

- Hiérarchie typographique claire et intentionnelle
- Espace blanc généreux comme élément actif
- Palette de couleurs épurée (noir, blanc, gris, bleu électrique)
- Transitions fluides et interactions subtiles
- Asymétrie visuelle pour créer de la tension et de l'intérêt

## Performance

- **Vite** : Build ultra-rapide et HMR (Hot Module Replacement) instantané
- **Tailwind CSS** : CSS optimisé et minifié
- **Code Splitting** : Chargement des ressources à la demande
- **Compression** : Gzip et Brotli activés sur Netlify/Vercel

## Accessibilité

- Contraste de couleur suffisant pour la lisibilité
- Navigation au clavier complète
- Sémantique HTML correcte
- Images avec texte alternatif

## Support

Pour toute question ou problème :

1. Consultez [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)
2. Vérifiez la documentation de Vite, Tailwind CSS ou React
3. Contactez le support Netlify ou Vercel

## Licence

MIT

## Crédits

Créé avec Manus AI - Plateforme de développement web automatisée.

---

**Prêt à déployer ?** Consultez [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) pour les instructions complètes.
