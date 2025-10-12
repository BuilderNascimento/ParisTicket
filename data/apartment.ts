import { ApartmentInfo } from "@/types";

export const apartmentInfo: ApartmentInfo = {
  wifi: {
    name: "Paris_8Impasse_5G",
    password: "BonjourParis2024!",
  },
  address: "8 Impasse Saint Sébastien, 75011 Paris, France",
  checkIn: "15h00 - Clés dans la boîte à clés sur la porte de l'appartement (code envoyé le jour même) | Dépôt de bagages à partir de 13h",
  checkOut: "11h00 - Laissez les clés dans la boîte à clés sur la porte de l'appartement",
  emergencyContact: {
    name: "Propriétaire - Antonio",
    phone: "+33 6 12 34 56 78",
    whatsapp: "+55 11 98765-4321",
  },
  rules: [
    "🚭 Appartement 100% non-fumeur",
    "🎉 Les fêtes ne sont pas autorisées",
    "🔇 Silence après 22h (respectez les voisins)",
    "🗑️ Triez les déchets : recyclable et organique",
    "🔑 Ne perdez pas les clés ! Frais de remplacement : €150",
    "🧹 Laissez l'appartement rangé à votre départ",
    "👥 Nombre maximum d'invités : selon réservation",
  ],
  appliances: [
    {
      name: "☕ Machine à Café Nespresso",
      instructions: "Insérez la capsule, fermez le levier, appuyez sur le bouton.",
    },
    {
      name: "🍳 Plaque à Induction",
      instructions: "Utilisez uniquement des casseroles à fond magnétique. Touchez l'icône de cadenas pendant 3 secondes pour déverrouiller, puis sélectionnez la zone et la température.",
    },
    {
      name: "🍽️ Lave-vaisselle Bosch",
      instructions: "Mettez le détergent dans la porte, sélectionnez le programme ECO (le plus économique), appuyez sur démarrer. Le cycle dure ~2h.",
    },
    {
      name: "🧺 Machine à Laver",
      instructions: "Lessive en poudre dans le tiroir de gauche. Programmes : Cotton 40° pour vêtements normaux, Delicate pour vêtements délicats. Max 6kg.",
    },
    {
      name: "❄️ Réfrigérateur",
      instructions: "Ajustez la température avec le contrôle interne (recommandé : 4°C). Congélateur à -18°C.",
    },
    {
      name: "🌡️ Chauffage Central",
      instructions: "Thermostat sur le mur du salon. Tournez vers le haut pour chauffer (recommandé : 20-21°C). S'éteint automatiquement en été.",
    },
    {
      name: "📺 Smart TV",
      instructions: "Netflix, Prime Video et YouTube déjà configurés. Utilisez la télécommande - bouton Home pour le menu principal.",
    },
  ],
  troubleshooting: [
    {
      problem: "Le WiFi ne se connecte pas",
      solution: "1. Débranchez le routeur pendant 30 secondes puis rebranchez-le. 2. Mot de passe : BonjourParis2024! (sensible à la casse). 3. Si le problème persiste, contactez-moi sur WhatsApp.",
    },
    {
      problem: "Pas d'eau chaude",
      solution: "Attendez 10 minutes - le chauffe-eau peut être en train de chauffer. Si ça ne fonctionne pas après 30 min, vérifiez le disjoncteur dans le tableau électrique (couloir). Le bouton du chauffe-eau doit être sur 'allumé'.",
    },
    {
      problem: "Le chauffage ne fonctionne pas",
      solution: "Vérifiez que le thermostat est réglé au-dessus de 20°C. En hiver, cela peut prendre 15 minutes pour chauffer. Si les radiateurs restent froids, contactez-moi.",
    },
    {
      problem: "La clé n'ouvre pas la porte",
      solution: "La porte est blindée et nécessite une technique : poussez légèrement la porte vers l'intérieur PENDANT que vous tournez la clé. Forcez en tournant.",
    },
    {
      problem: "Le disjoncteur a sauté",
      solution: "Le tableau électrique est dans le couloir. Éteignez quelques appareils (surtout : chauffage, climatisation, sèche-cheveux) et remontez le disjoncteur.",
    },
    {
      problem: "La porte de l'immeuble ne s'ouvre pas",
      solution: "Code de la porte d'entrée : #4589B. Tapez le code et poussez quand vous entendez le bip. Si ça ne fonctionne pas, sonnez à l'interphone de l'appartement 8.",
    },
  ],
};

