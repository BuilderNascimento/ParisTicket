"use client";

import PlaceCard from "@/components/PlaceCard";
import { shopping } from "@/data/places";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ComprasPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-green-600 to-green-500 text-white pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
              {t("shopping.title")}
            </h1>
            <p className="text-lg md:text-xl text-green-50 max-w-2xl mx-auto">
              {t("shopping.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-r-lg">
          <p className="text-gray-700">
            <strong>🛍️ Astuce :</strong> Les supermarchés à Paris sont plus petits. Plusieurs enseignes : 
            Franprix, Carrefour, Monoprix. Pour économiser, évitez d'acheter de l'eau (eau du robinet potable) 
            et allez au marché de rue le dimanche ! 
          </p>
        </div>
      </section>

      {/* Places Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {shopping.map((place) => (
            <PlaceCard key={place.id} place={place} />
          ))}
        </div>
      </section>

      {/* Shopping Guide */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            🛒 Guide Shopping à Paris
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-3">🥖 Boulangerie</h3>
              <p className="text-sm text-gray-700 mb-2"><strong>Quoi acheter :</strong></p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Baguette (€1-1.50)</li>
                <li>• Croissants</li>
                <li>• Pains spéciaux</li>
                <li>• Parfois des sandwichs</li>
              </ul>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-3">🛒 Supermarché</h3>
              <p className="text-sm text-gray-700 mb-2"><strong>Quoi acheter :</strong></p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Produits laitiers et fromages</li>
                <li>• Fruits et légumes</li>
                <li>• Boissons</li>
                <li>• Produits d'entretien</li>
              </ul>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-3">🍖 Boucherie</h3>
              <p className="text-sm text-gray-700 mb-2"><strong>Quoi acheter :</strong></p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Viandes fraîches</li>
                <li>• Charcuterie</li>
                <li>• Qualité supérieure</li>
                <li>• Demandez au boucher</li>
              </ul>
            </div>

            <div className="bg-red-50 p-6 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-3">💊 Pharmacie</h3>
              <p className="text-sm text-gray-700 mb-2"><strong>Quoi acheter :</strong></p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Médicaments</li>
                <li>• Cosmétiques</li>
                <li>• Produits d'hygiène</li>
                <li>• Croix verte illuminée</li>
              </ul>
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-3">🍎 Marché de Rue</h3>
              <p className="text-sm text-gray-700 mb-2"><strong>Quoi acheter :</strong></p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Fruits frais</li>
                <li>• Légumes de saison</li>
                <li>• Fromages artisanaux</li>
                <li>• Dimanche matin !</li>
              </ul>
            </div>

            <div className="bg-orange-50 p-6 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-3">🏪 Supérette</h3>
              <p className="text-sm text-gray-700 mb-2"><strong>Quoi acheter :</strong></p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Ouvert tard</li>
                <li>• Plus cher</li>
                <li>• Pour dépannage</li>
                <li>• Certains 24h/24</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Price Guide */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            💰 Guide des Prix (Approximatifs)
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-bold text-primary-600 mb-3">Basiques</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>🥖 Baguette : €1-1.50</li>
                <li>🥛 Lait (1L) : €1-1.50</li>
                <li>🧈 Beurre : €2-4</li>
                <li>🥚 Œufs (6) : €2-3</li>
                <li>🧀 Fromage (200g) : €3-8</li>
                <li>☕ Café (250g) : €3-6</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-primary-600 mb-3">Fruits & Légumes</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>🍎 Pommes (kg) : €2-3</li>
                <li>🍌 Bananes (kg) : €2-3</li>
                <li>🍅 Tomates (kg) : €3-5</li>
                <li>🥗 Salade : €1-2</li>
                <li>🥕 Carottes (kg) : €2-3</li>
                <li>🍊 Oranges (kg) : €2-4</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-primary-600 mb-3">Boissons & Autres</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>💧 Eau (1.5L) : €0.50-1</li>
                <li>🍷 Vin : €5-15</li>
                <li>🍺 Bière (6) : €5-10</li>
                <li>🥤 Soda : €1-2</li>
                <li>🍫 Chocolat : €2-5</li>
                <li>🍝 Pâtes (500g) : €1-2</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 bg-amber-50 border-l-4 border-amber-400 p-4">
            <p className="text-sm text-gray-700">
              <strong>💡 Astuce :</strong> Les marques de distributeur (ex : Carrefour Bio) sont moins chères et de bonne qualité. 
              Les marchés de rue ont généralement de meilleurs prix pour les fruits et légumes !
            </p>
          </div>
        </div>
      </section>

      {/* Useful Info */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
          <h3 className="font-bold text-gray-900 mb-4 text-lg">
            ℹ️ Informations Utiles
          </h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
            <div>
              <strong>🚰 Eau du robinet :</strong> Potable et d'excellente qualité ! Pas besoin d'acheter de l'eau.
            </div>
            <div>
              <strong>♻️ Recyclage :</strong> Jaune = recyclable | Verre = conteneur vert | Noir = organique
            </div>
            <div>
              <strong>🛍️ Sacs :</strong> Pas gratuits ! Coûtent €0,10-0,50. Apportez votre propre sac.
            </div>
            <div>
              <strong>📅 Dimanches :</strong> Beaucoup de supermarchés fermés ou ouverture limitée.
            </div>
            <div>
              <strong>💳 Carte :</strong> Acceptée partout. Minimum parfois €5-10.
            </div>
            <div>
              <strong>🧾 Ticket de caisse :</strong> Gardez-le ! Peut être nécessaire pour échange sous 30 jours.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

