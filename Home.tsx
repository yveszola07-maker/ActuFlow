import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
}

const ARTICLES: Article[] = [
  {
    id: '1',
    title: 'PSG et Bayern Munich en demi-finales de la Ligue des Champions',
    excerpt: 'Le PSG élimine Liverpool 4-0 sur l\'ensemble des deux matches, tandis que le Bayern Munich renverse le Real Madrid (4-3) en quarts de finale.',
    category: 'Sports',
    author: 'Marc Dupont',
    date: '15 avril 2026',
    readTime: '5 min',
  },
  {
    id: '2',
    title: 'Coupe du Monde 2026 : 48 équipes, un nouveau format historique',
    excerpt: 'La Coupe du Monde 2026 débute dans 57 jours avec un format inédit : 48 équipes réparties entre les États-Unis, le Canada et le Mexique.',
    category: 'Sports',
    author: 'Jean Leclerc',
    date: '15 avril 2026',
    readTime: '7 min',
  },
  {
    id: '3',
    title: 'NBA Playoffs 2026 : Oklahoma City Thunder en tête',
    excerpt: 'Les NBA Playoffs 2026 débutent le 18 avril. Le Thunder domine avec 64 victoires, tandis que Victor Wembanyama se prépare pour les matchs décisifs.',
    category: 'Sports',
    author: 'Pierre Bernard',
    date: '16 avril 2026',
    readTime: '6 min',
  },
  {
    id: '4',
    title: 'Formule 1 2026 : Kimi Antonelli domine',
    excerpt: 'Kimi Antonelli impressionne en début de saison 2026 avec 18 points. Mercedes domine le classement des constructeurs.',
    category: 'Sports',
    author: 'Olivier Blanc',
    date: '13 avril 2026',
    readTime: '6 min',
  },
];

const CATEGORIES = ['Accueil', 'Politique', 'Économie', 'Technologie', 'Science', 'Culture', 'Sports', 'Monde'];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('Accueil');
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    if (email) {
      alert(`Merci de votre abonnement ! Un email de confirmation a été envoyé à ${email}`);
      setEmail('');
    }
  };

  return (
    <div className="min-h-screen bg-white text-foreground">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container py-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-primary rounded flex items-center justify-center">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <h1 className="text-3xl font-bold text-foreground">Actu flow</h1>
          </div>
        </div>

        {/* Navigation */}
        <nav className="border-t border-border">
          <div className="container flex gap-8 overflow-x-auto py-4">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-sm font-medium whitespace-nowrap pb-2 transition-colors duration-200 ${
                  selectedCategory === cat
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="border-b border-border">
        <div className="container py-16 grid grid-cols-3 gap-8">
          <div className="col-span-2">
            <div
              className="h-80 rounded bg-cover bg-center relative overflow-hidden"
              style={{
                backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663562074784/625QMarTnsJM9FGoe9BLEo/actuflow-hero-6wmocgec2N73dGfWPNz7nw.webp)',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
                <span className="inline-block bg-primary text-white text-xs font-bold px-3 py-1 rounded w-fit mb-4">
                  {ARTICLES[0].category}
                </span>
                <h2 className="text-4xl font-bold text-white mb-4 leading-tight">
                  {ARTICLES[0].title}
                </h2>
                <p className="text-white/90 text-sm">
                  Par {ARTICLES[0].author} • {ARTICLES[0].date}
                </p>
              </div>
            </div>
          </div>

          {/* Trends Sidebar */}
          <div className="col-span-1">
            <div className="border-l border-border pl-8">
              <h3 className="text-lg font-bold mb-6 text-foreground">Tendances</h3>
              <div className="space-y-6">
                {ARTICLES.slice(1, 4).map((article, idx) => (
                  <div key={article.id} className="pb-6 border-b border-border last:border-0">
                    <div className="text-primary font-bold text-sm mb-2">0{idx + 1}</div>
                    <h4 className="font-bold text-sm leading-snug mb-2 text-foreground hover:text-primary transition-colors cursor-pointer">
                      {article.title}
                    </h4>
                    <p className="text-xs text-muted-foreground">{article.date}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="border-b border-border">
        <div className="container py-16">
          <div className="grid grid-cols-2 gap-12">
            {ARTICLES.map((article) => (
              <Card
                key={article.id}
                className="p-0 border-0 bg-transparent hover:bg-secondary transition-colors duration-200 cursor-pointer group"
              >
                <div className="pb-6 border-b border-border">
                  <span className="inline-block text-primary text-xs font-bold mb-3">
                    {article.category}
                  </span>
                  <h3 className="text-xl font-bold mb-3 leading-tight text-foreground group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>Par {article.author}</span>
                    <span>{article.readTime} de lecture</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">{article.date}</p>
                </div>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="mt-12 text-center">
            <Button
              variant="outline"
              className="border-border text-foreground hover:bg-secondary"
            >
              Charger plus d'articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="border-b border-border bg-secondary/30">
        <div className="container py-12">
          <div className="max-w-2xl">
            <h3 className="text-2xl font-bold mb-2 text-foreground">
              Restez informé
            </h3>
            <p className="text-muted-foreground mb-6">
              Recevez les dernières actualités directement dans votre boîte mail.
            </p>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Votre email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-2 border border-border rounded bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button
                onClick={handleSubscribe}
                className="bg-primary text-white hover:bg-primary/90"
              >
                S'abonner
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white">
        <div className="container py-12">
          <div className="grid grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">Navigation</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">Accueil</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Politique</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Économie</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Technologie</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Catégories</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">Science</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Culture</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sports</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Monde</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Légal</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">Mentions légales</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Politique de confidentialité</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Conditions d'utilisation</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <p className="text-sm text-white/70">contact@actuflow.fr</p>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-sm text-white/50">
            <p>© 2026 ActuFlow. Tous droits réservés.</p>
            <p className="mt-2">Made with Manus</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
