"use client";

import { transportOptions } from "@/data/transport";
import { Train, Bus, Bike, Car, Plane } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const iconMap = {
  Train: Train,
  Bus: Bus,
  Bike: Bike,
  Car: Car,
  Plane: Plane,
};

export default function TransportePage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-500 text-white pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
              {t("transport.title")}
            </h1>
            <p className="text-lg md:text-xl text-blue-50 max-w-2xl mx-auto">
              {t("transport.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Quick Access */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">🚇 Métro le Plus Proche</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <p className="font-bold text-lg mb-1">Station Personnalisée</p>
              <p className="text-primary-50 text-sm">Informations selon votre localisation</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <p className="font-bold text-lg mb-1">Station Alternative</p>
              <p className="text-primary-50 text-sm">Informations selon votre localisation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Transport Options */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid gap-6">
          {transportOptions.map((option) => {
            const IconComponent = iconMap[option.icon as keyof typeof iconMap] || Train;
            
            return (
              <div key={option.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary-100 p-4 rounded-lg flex-shrink-0">
                      <IconComponent className="w-8 h-8 text-primary-600" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{option.name}</h3>
                      <p className="text-gray-600 mb-4">{option.description}</p>
                      
                      {option.price && (
                        <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
                          <p className="text-sm">
                            <strong className="text-green-900">💰 Prix:</strong>{" "}
                            <span className="text-gray-700">{option.price}</span>
                          </p>
                        </div>
                      )}
                      
                      <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                        <p className="text-sm text-gray-700 whitespace-pre-line">{option.tips}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Metro Map */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            🗺️ Plan du Métro
          </h2>
          <p className="text-gray-600 mb-6">
            Téléchargez l'application officielle RATP ou Citymapper pour naviguer facilement dans le métro de Paris
          </p>
          <div className="bg-gray-100 rounded-lg p-8 text-center">
            <p className="text-gray-500 mb-4">
              📱 Applications Recommandées:
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <span className="bg-primary-500 text-white px-4 py-2 rounded-lg font-semibold">
                Citymapper
              </span>
              <span className="bg-green-500 text-white px-4 py-2 rounded-lg font-semibold">
                RATP Official
              </span>
              <span className="bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold">
                Google Maps
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Tips & Tricks */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            💡 Conseils de Transport
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-primary-600 mb-3 flex items-center">
                <span className="mr-2">🎫</span>
                Billets et Passes
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Billet unique : valable pour 1 voyage (métro, bus, RER zone 1)</li>
                <li>• Carnet de 10 : plus économique si vous restez plusieurs jours</li>
                <li>• Navigo Easy : carte rechargeable (€2 + crédits)</li>
                <li>• Passe jour : illimité pendant 24h (€8,45)</li>
                <li>• Achetez aux machines ou guichets des stations</li>
                <li>• Gardez le billet jusqu'à la sortie de la station !</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-primary-600 mb-3 flex items-center">
                <span className="mr-2">⚠️</span>
                Précautions et Sécurité
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Attention aux pickpockets, surtout dans les stations touristiques</li>
                <li>• Tenez vos sacs et sacs à dos devant vous</li>
                <li>• Évitez de transporter beaucoup d'argent</li>
                <li>• N'acceptez pas "l'aide" d'étrangers aux machines</li>
                <li>• Les validateurs sont aux tourniquets</li>
                <li>• Amende pour non-validation : €50</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-primary-600 mb-3 flex items-center">
                <span className="mr-2">⏰</span>
                Horaires de Fonctionnement
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• <strong>Métro:</strong> 5h30 - 1h15 (dim-jeu)</li>
                <li>• <strong>Vendredi/Samedi:</strong> jusqu'à 2h15</li>
                <li>• <strong>RER:</strong> similaire au métro</li>
                <li>• <strong>Bus:</strong> 7h - 20h30 (majorité)</li>
                <li>• <strong>Noctilien:</strong> bus de nuit après 00h30</li>
                <li>• Fréquence réduite après 21h</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-primary-600 mb-3 flex items-center">
                <span className="mr-2">📱</span>
                Applications Essentielles
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• <strong>Citymapper:</strong> meilleur pour les itinéraires (indispensable !)</li>
                <li>• <strong>RATP:</strong> officiel, horaires en temps réel</li>
                <li>• <strong>Google Maps:</strong> fonctionne aussi bien</li>
                <li>• <strong>Uber/Bolt:</strong> transport privé</li>
                <li>• <strong>Vélib':</strong> pour louer des vélos</li>
                <li>• <strong>Lime/Dott:</strong> trottinettes électriques</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Main Destinations */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="bg-gradient-to-br from-primary-500 to-secondary-500 text-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6">
            🗼 Temps jusqu'aux Principales Attractions
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { name: "Tour Eiffel", time: "Selon localisation", line: "Métro + correspondance" },
              { name: "Louvre", time: "Selon localisation", line: "Métro + correspondance" },
              { name: "Notre-Dame", time: "Selon localisation", line: "À pied ou métro" },
              { name: "Montmartre", time: "Selon localisation", line: "Métro + correspondance" },
              { name: "Champs-Élysées", time: "Selon localisation", line: "Métro + correspondance" },
              { name: "Versailles", time: "60 min", line: "Métro + RER C" },
              { name: "CDG Aéroport", time: "50 min", line: "Métro + RER B" },
              { name: "Disneyland", time: "45 min", line: "Métro + RER A" },
            ].map((dest) => (
              <div key={dest.name} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <p className="font-bold text-lg mb-1">{dest.name}</p>
                <p className="text-sm text-primary-50 mb-1">⏱️ {dest.time}</p>
                <p className="text-xs text-primary-100">{dest.line}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

