"use client";

import InfoSection from "@/components/InfoSection";
import { Phone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function InfoPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-red-600 to-red-500 text-white pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
              {t("info.title")}
            </h1>
            <p className="text-lg md:text-xl text-red-50 max-w-2xl mx-auto">
              {t("info.subtitle")}
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Emergency Numbers */}
        <div className="bg-red-50 border-2 border-red-300 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-red-900 mb-6 flex items-center">
            <Phone className="w-6 h-6 mr-3" />
            🚨 Numéros d'Urgence
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4 border-l-4 border-red-500">
              <p className="font-bold text-gray-900 text-lg mb-1">🚨 Urgence Générale</p>
              <a href="tel:112" className="text-3xl font-bold text-red-600">112</a>
              <p className="text-sm text-gray-600 mt-1">Fonctionne dans toute l'Europe</p>
            </div>
            <div className="bg-white rounded-lg p-4 border-l-4 border-blue-500">
              <p className="font-bold text-gray-900 text-lg mb-1">👮 Police</p>
              <a href="tel:17" className="text-3xl font-bold text-blue-600">17</a>
              <p className="text-sm text-gray-600 mt-1">Police Nationale</p>
            </div>
            <div className="bg-white rounded-lg p-4 border-l-4 border-red-500">
              <p className="font-bold text-gray-900 text-lg mb-1">🚒 Pompiers</p>
              <a href="tel:18" className="text-3xl font-bold text-red-600">18</a>
              <p className="text-sm text-gray-600 mt-1">Sapeurs-Pompiers</p>
            </div>
            <div className="bg-white rounded-lg p-4 border-l-4 border-green-500">
              <p className="font-bold text-gray-900 text-lg mb-1">🚑 SAMU (Ambulance)</p>
              <a href="tel:15" className="text-3xl font-bold text-green-600">15</a>
              <p className="text-sm text-gray-600 mt-1">Urgence médicale</p>
            </div>
          </div>
        </div>


        {/* Health */}
        <InfoSection icon="🏥" title="Santé et Hôpitaux" defaultOpen>
          <div className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-bold text-gray-900 mb-2">Hôpital Saint-Antoine</h4>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Adresse :</strong> 184 Rue du Faubourg Saint-Antoine, 75012 Paris
              </p>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Distance :</strong> 10 minutes en taxi
              </p>
              <p className="text-sm text-gray-700">
                <strong>Tel :</strong> <a href="tel:+33149282000" className="text-primary-600">+33 1 49 28 20 00</a>
              </p>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-bold text-gray-900 mb-2">💊 Pharmacies 24h</h4>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Pharmacie Châtelet Les Halles :</strong> 10 Boulevard de Sébastopol, 75004
              </p>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Pharmacie des Champs :</strong> 84 Avenue des Champs-Élysées, 75008
              </p>
              <p className="text-sm text-gray-700">
                Recherchez "pharmacie de garde" pour d'autres options
              </p>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-400 p-4">
              <p className="text-sm text-gray-700">
                <strong>💡 Conseil :</strong> Les pharmacies françaises sont très qualifiées. Pour les problèmes mineurs, 
                allez directement à la pharmacie avant d'aller chez le médecin. Les pharmaciens peuvent prescrire certains médicaments.
              </p>
            </div>
          </div>
        </InfoSection>

        {/* Police Stations */}
        <InfoSection icon="👮" title="Commissariats Proches">
          <div className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-bold text-gray-900 mb-2">Commissariat du 11e Arrondissement</h4>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Adresse :</strong> 12-14 Rue de la Roquette, 75011 Paris
              </p>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Distance :</strong> 8 minutes à pied
              </p>
              <p className="text-sm text-gray-700">
                <strong>Tel :</strong> +33 1 53 36 18 00
              </p>
            </div>
            
            <div className="bg-amber-50 border-l-4 border-amber-400 p-4">
              <p className="text-sm text-gray-700">
                <strong>📋 Pour déposer plainte :</strong> Apportez une pièce d'identité. Si vous ne parlez pas français, 
                utilisez Google Traduction. Ils sont habitués aux touristes.
              </p>
            </div>
          </div>
        </InfoSection>

        {/* Embassies */}
        <InfoSection icon="🏛️" title="Ambassades et Consulats">
          <div className="space-y-4">
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                <span className="mr-2">🇧🇷</span> Ambassade du Brésil
              </h4>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Adresse :</strong> 34 Cours Albert 1er, 75008 Paris
              </p>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Tel :</strong> <a href="tel:+33145616300" className="text-primary-600">+33 1 45 61 63 00</a>
              </p>
              <p className="text-sm text-gray-700">
                <strong>Urgences :</strong> +33 6 03 33 38 25 (24h)
              </p>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                <span className="mr-2">🇵🇹</span> Ambassade du Portugal
              </h4>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Adresse :</strong> 3 Rue de Noisiel, 75116 Paris
              </p>
              <p className="text-sm text-gray-700">
                <strong>Tel :</strong> +33 1 47 27 35 29
              </p>
            </div>
          </div>
        </InfoSection>

        {/* Safety Tips */}
        <InfoSection icon="🔒" title="Conseils de Sécurité">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-bold text-gray-900 mb-3">✅ À Faire</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>✓ Gardez les objets de valeur cachés</li>
                <li>✓ Portez sac/mochila devant vous</li>
                <li>✓ Gardez des copies des documents</li>
                <li>✓ Ayez une photo du passeport sur le téléphone</li>
                <li>✓ Utilisez les apps de transport la nuit</li>
                <li>✓ Restez vigilant dans les lieux touristiques</li>
                <li>✓ Gardez l'adresse de l'appartement</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-3">❌ À Éviter</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>✗ Laisser le sac sur une chaise de café</li>
                <li>✗ Utiliser le téléphone dans des endroits très fréquentés</li>
                <li>✗ Accepter "l'aide" d'étrangers</li>
                <li>✗ Signer des pétitions d'étrangers</li>
                <li>✗ Jouer aux "jeux" de rue</li>
                <li>✗ Acheter aux vendeurs ambulants</li>
                <li>✗ Marcher seul dans des zones désertes la nuit</li>
              </ul>
            </div>
          </div>
        </InfoSection>

        {/* Weather */}
        <InfoSection icon="☀️" title="Climat et Saisons">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-4 rounded-lg">
              <h4 className="font-bold text-gray-900 mb-2">❄️ Hiver (Déc-Fév)</h4>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Température :</strong> 3-8°C
              </p>
              <p className="text-sm text-gray-700">
                Froid ! Apportez un manteau lourd, écharpe et gants. Il neige rarement.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-green-100 to-green-50 p-4 rounded-lg">
              <h4 className="font-bold text-gray-900 mb-2">🌸 Printemps (Mar-Mai)</h4>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Température :</strong> 10-18°C
              </p>
              <p className="text-sm text-gray-700">
                Agréable ! Manteau léger. Période magnifique pour visiter.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-100 to-yellow-50 p-4 rounded-lg">
              <h4 className="font-bold text-gray-900 mb-2">☀️ Été (Juin-Août)</h4>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Température :</strong> 20-30°C
              </p>
              <p className="text-sm text-gray-700">
                Chaud ! Vêtements légers. Pic du tourisme. Crème solaire !
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-orange-100 to-orange-50 p-4 rounded-lg">
              <h4 className="font-bold text-gray-900 mb-2">🍂 Automne (Sept-Nov)</h4>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Température :</strong> 10-20°C
              </p>
              <p className="text-sm text-gray-700">
                Agréable ! Manteau. Couleurs magnifiques. Excellente période !
              </p>
            </div>
          </div>
        </InfoSection>

        {/* Useful Phrases */}
        <InfoSection icon="💬" title="Phrases Utiles en Français">
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            {[
              { pt: "Bonjour / Bonne journée", fr: "Bonjour", pron: "bon-júr" },
              { pt: "Bonsoir / Bonne soirée", fr: "Bonsoir", pron: "bon-suár" },
              { pt: "S'il vous plaît", fr: "S'il vous plaît", pron: "sil vu plê" },
              { pt: "Merci", fr: "Merci", pron: "mer-sí" },
              { pt: "Pardon / Excusez-moi", fr: "Pardon / Excusez-moi", pron: "par-dón / eks-ku-zê muá" },
              { pt: "Je ne parle pas français", fr: "Je ne parle pas français", pron: "jê nê parl pá fran-sê" },
              { pt: "Parlez-vous anglais ?", fr: "Parlez-vous anglais ?", pron: "par-lê vu an-glê" },
              { pt: "C'est combien ?", fr: "C'est combien ?", pron: "sê con-bián" },
              { pt: "L'addition, s'il vous plaît", fr: "L'addition, s'il vous plaît", pron: "la-di-sión sil vu plê" },
              { pt: "Où est... ?", fr: "Où est... ?", pron: "u ê" },
              { pt: "J'ai besoin d'aide", fr: "J'ai besoin d'aide", pron: "jê be-zuán déd" },
              { pt: "Je suis perdu(e)", fr: "Je suis perdu(e)", pron: "jê suí per-dú" },
            ].map((phrase, index) => (
              <div key={index} className="bg-primary-50 p-3 rounded-lg">
                <p className="text-gray-900 font-semibold">{phrase.pt}</p>
                <p className="text-primary-600 font-bold text-lg">{phrase.fr}</p>
                <p className="text-gray-500 text-xs italic">{phrase.pron}</p>
              </div>
            ))}
          </div>
        </InfoSection>

        {/* Important Info */}
        <InfoSection icon="ℹ️" title="Informations Générales">
          <div className="space-y-4 text-sm text-gray-700">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-bold text-gray-900 mb-2">🔌 Électricité</h4>
                <p>220V - Prise type E (deux broches rondes + terre)</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">🚰 Eau</h4>
                <p>L'eau du robinet est potable et d'excellente qualité</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">💶 Monnaie</h4>
                <p>Euro (EUR) - Carte acceptée presque partout</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">🕐 Fuseau Horaire</h4>
                <p>GMT+1 (CET) | Été : GMT+2 (CEST)</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">💡 Pourboires</h4>
                <p>Service inclus. 5-10% optionnel si très satisfait</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">📶 WiFi</h4>
                <p>Beaucoup de cafés et restaurants offrent le WiFi gratuit</p>
              </div>
            </div>
          </div>
        </InfoSection>
      </div>
    </div>
  );
}

