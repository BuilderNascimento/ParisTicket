"use client";

import PlaceCard from "@/components/PlaceCard";
import { cafes } from "@/data/places";
import { useLanguage } from "@/contexts/LanguageContext";

export default function CafesPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-amber-600 to-amber-500 text-white pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
              {t("cafes.title")}
            </h1>
            <p className="text-lg md:text-xl text-amber-50 max-w-2xl mx-auto">
              {t("cafes.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
          <p className="text-gray-700">
            <strong>🥐 Conseil:</strong> Paris est célèbre pour ses croissants et ses pains ! Achetez toujours le matin 
            quand c'est encore chaud. Une baguette traditionnelle coûte environ €1,20 et est parfaite pour le petit-déjeuner 
            dans l'appartement. Bon appétit ! 
          </p>
        </div>
      </section>

      {/* Cafes Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cafes.map((cafe) => (
            <PlaceCard key={cafe.id} place={cafe} />
          ))}
        </div>
      </section>

      {/* French Breakfast Guide */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            🥐 Guide du Petit-Déjeuner Français
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-amber-50 p-6 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-3 text-lg">Que Commander</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>🥐 <strong>Croissant</strong> - Le classique !</li>
                <li>🍫 <strong>Pain au Chocolat</strong> - Immanquable</li>
                <li>🧈 <strong>Pain au Beurre</strong> - Brioche au beurre</li>
                <li>🥖 <strong>Baguette Tradition</strong> - La meilleure</li>
                <li>☕ <strong>Café au Lait</strong> - Café avec lait</li>
                <li>🍊 <strong>Jus d'Orange</strong> - Jus d'orange</li>
              </ul>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-3 text-lg">Comment Commander</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>👋 <strong>"Bonjour !"</strong> - Toujours !</li>
                <li>🥐 <strong>"Un croissant, s'il vous plaît"</strong></li>
                <li>☕ <strong>"Un café crème"</strong> - Cappuccino</li>
                <li>🥖 <strong>"Une baguette tradition"</strong></li>
                <li>💳 <strong>"Par carte"</strong> - Par carte</li>
                <li>😊 <strong>"Merci, bonne journée !"</strong></li>
              </ul>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-3 text-lg">{t("cafes.tips.title")}</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>{t("cafes.tips.fresh")}</li>
                <li>{t("cafes.tips.freeze")}</li>
                <li>{t("cafes.tips.better")}</li>
                <li>{t("cafes.tips.sunday")}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Coffee Culture */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-bold mb-4">
            ☕ Culture du Café à Paris
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <p className="mb-4">
                <strong>Types de Café :</strong>
              </p>
              <ul className="space-y-1">
                <li>• <strong>Expresso</strong> - Café court et fort</li>
                <li>• <strong>Café Allongé</strong> - Expresso avec eau</li>
                <li>• <strong>Café Crème</strong> - Avec lait vapeur</li>
                <li>• <strong>Noisette</strong> - Expresso avec un peu de lait</li>
                <li>• <strong>Café au Lait</strong> - Moitié café, moitié lait</li>
              </ul>
            </div>
            <div>
              <p className="mb-4">
                <strong>Étiquette :</strong>
              </p>
              <ul className="space-y-1">
                <li>• Cappuccino seulement le matin !</li>
                <li>• Expresso après les repas</li>
                <li>• "Bonjour" est obligatoire</li>
                <li>• Pourboire n'est pas nécessaire</li>
                <li>• WiFi : demandez le mot de passe (le code WiFi)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

