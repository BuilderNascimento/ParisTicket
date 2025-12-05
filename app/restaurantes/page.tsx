"use client";

import PlaceCard from "@/components/PlaceCard";
import { restaurants } from "@/data/places";
import { useLanguage } from "@/contexts/LanguageContext";

export default function RestaurantesPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-red-500 to-orange-500 text-white pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
              {t("restaurants.title")}
            </h1>
            <p className="text-lg md:text-xl text-red-50 max-w-2xl mx-auto">
              {t("restaurants.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg">
          <p className="text-gray-700">
            <strong>💡 Conseil Général:</strong> Les restaurants recommandés dans votre quartier forment l'un des meilleurs pôles gastronomiques de Paris ! 
            La plupart des restaurants n'acceptent pas de réservation, alors arrivez tôt (avant 19h30) ou soyez 
            prêt à attendre un peu. Ça vaut vraiment le coup ! 🍷
          </p>
        </div>
      </section>

      {/* Restaurants Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {restaurants.map((restaurant) => (
            <PlaceCard key={restaurant.id} place={restaurant} />
          ))}
        </div>
      </section>

      {/* Tips Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            🌟 Conseils pour Bien Manger à Paris
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-gray-900 mb-2">🕒 Horaires</h3>
              <p className="text-gray-700 text-sm">
                Déjeuner : 12h-14h30 | Dîner : 19h-22h. Beaucoup de restaurants ferment entre 15h-19h.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">💶 Pourboire</h3>
              <p className="text-gray-700 text-sm">
                Service déjà inclus dans l'addition ! Laisser 5-10% est optionnel mais apprécié.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">📱 Applications Utiles</h3>
              <p className="text-gray-700 text-sm">
                TheFork (La Fourchette) - Réservations avec réduction. Google Maps pour les avis.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">🥖 Économisez</h3>
              <p className="text-gray-700 text-sm">
                Menu du jour (formule) au déjeuner est moins cher. L'eau du robinet est gratuite (carafe d'eau).
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

