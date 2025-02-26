
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";

const Articles = () => {
  const articles = [
    {
      title: "Trouver Votre Force Intérieure",
      excerpt: "Découvrez la puissance qui sommeille en vous pour surmonter tous les obstacles...",
      imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
    },
    {
      title: "Le Pouvoir de la Pensée Positive",
      excerpt: "Apprenez comment les pensées positives peuvent transformer votre vie...",
      imageUrl: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b"
    },
    {
      title: "Fixer des Objectifs Atteignables",
      excerpt: "Maîtrisez l'art de définir et d'atteindre des objectifs significatifs...",
      imageUrl: "https://images.unsplash.com/photo-1501854140801-50d01698950b"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12">Articles Inspirants</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <article key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={article.imageUrl}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{article.title}</h3>
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  <Button variant="outline" className="w-full">Lire Plus</Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
