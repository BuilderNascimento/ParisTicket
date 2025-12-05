"use client";

import PlaceCard from "@/components/PlaceCard";
import { bars } from "@/data/places";
import { useLanguage } from "@/contexts/LanguageContext";

export default function BaresPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-500 text-white pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
              {t("bars.title")}
            </h1>
            <p className="text-lg md:text-xl text-purple-50 max-w-2xl mx-auto">
              {t("bars.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-purple-50 border-l-4 border-purple-400 p-6 rounded-r-lg">
          <p className="text-gray-700">
            <strong>🌙 Vie Nocturne:</strong> Vous êtes au cœur de la vie nocturne parisienne ! 
            Les bars recommandés dans votre quartier offrent des cocktail bars sophistiqués aux pubs décontractés. 
            La plupart ouvrent après 18h et restent ouverts jusqu'à 2h. L'heure de l'apéritif est généralement de 17h à 20h. 🍸
          </p>
        </div>
      </section>

      {/* Bars Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bars.map((bar) => (
            <PlaceCard key={bar.id} place={bar} />
          ))}
        </div>
      </section>

      {/* Nightlife Guide */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            🌃 Guide de la Vie Nocturne
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-gray-900 mb-4 text-lg">Types de Bars</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-1">🍸 Cocktail Bars</h4>
                  <p className="text-sm text-gray-700">
                    Boissons créatives et sophistiquées. Prix : €12-18 par boisson. Dress code : décontracté élégant.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-1">🍺 Pubs & Bars</h4>
                  <p className="text-sm text-gray-700">
                    Ambiance décontractée, bières et snacks. Prix : €5-10 par bière. Dress code : décontracté.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-1">🍷 Wine Bars</h4>
                  <p className="text-sm text-gray-700">
                    Vins français et planches de fromages. Prix : €6-12 par verre. Parfait pour un moment relaxant.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-4 text-lg">Conseils Importants</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="text-2xl mr-3">⏰</span>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">Horaires</h4>
                    <p className="text-sm text-gray-700">Apéritif : 17h-20h. Pic : 22h-00h. La plupart ferment à 2h.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-2xl mr-3">💳</span>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">Paiement</h4>
                    <p className="text-sm text-gray-700">Carte acceptée dans la plupart. Ayez toujours un peu d'argent.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-2xl mr-3">🚇</span>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">Comment Revenir</h4>
                    <p className="text-sm text-gray-700">Métro jusqu'à 1h15 (2h15 ven/sam). Après utilisez Uber/Bolt.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-2xl mr-3">🎫</span>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">Entrée</h4>
                    <p className="text-sm text-gray-700">Les bars sont gratuits. Les boîtes de nuit facturent €10-20 l'entrée.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-2xl mr-3">👔</span>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">Dress Code</h4>
                    <p className="text-sm text-gray-700">Paris est stylé ! Évitez les tongs et vêtements trop décontractés.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Tips */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="bg-amber-50 border-2 border-amber-200 rounded-xl p-6">
          <h3 className="font-bold text-gray-900 mb-3 text-lg">
            🔒 Conseils de Sécurité
          </h3>
          <ul className="grid md:grid-cols-2 gap-3 text-sm text-gray-700">
            <li>✓ Ne laissez pas votre boisson sans surveillance</li>
            <li>✓ Gardez vos affaires en lieu sûr</li>
            <li>✓ Préférez les apps de transport la nuit</li>
            <li>✓ Marchez toujours en groupe si possible</li>
            <li>✓ Ayez de la batterie sur votre téléphone</li>
            <li>✓ Connaissez l'adresse de l'appartement</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

