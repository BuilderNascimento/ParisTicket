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
            <strong>💡 Dica Geral:</strong> Saint-Ambroise e Oberkampf formam um dos melhores polos gastronômicos de Paris! 
            A maioria dos restaurantes não aceita reserva, então chegue cedo (antes das 19h30) ou esteja 
            preparado para esperar um pouco. Vale muito a pena! 🍷
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
            🌟 Dicas para Comer Bem em Paris
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-gray-900 mb-2">🕒 Horários</h3>
              <p className="text-gray-700 text-sm">
                Almoço: 12h-14h30 | Jantar: 19h-22h. Muitos restaurantes fecham entre 15h-19h.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">💶 Gorjeta</h3>
              <p className="text-gray-700 text-sm">
                Serviço já incluído na conta! Deixar 5-10% é opcional mas apreciado.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">📱 Apps Úteis</h3>
              <p className="text-gray-700 text-sm">
                TheFork (La Fourchette) - Reservas com desconto. Google Maps para reviews.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">🥖 Economize</h3>
              <p className="text-gray-700 text-sm">
                Menu do dia (formule) no almoço é mais barato. Água da torneira é grátis (carafe d'eau).
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

