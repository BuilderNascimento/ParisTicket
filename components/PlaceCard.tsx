import Image from "next/image";
import { MapPin, Clock, CreditCard, Truck, ExternalLink, Star, Wifi, Award } from "lucide-react";
import { Place } from "@/types";

interface PlaceCardProps {
  place: Place;
}

const badgeConfig = {
  verified: { label: "Verificado", color: "bg-green-100 text-green-700", icon: "✓" },
  new: { label: "Novo", color: "bg-blue-100 text-blue-700", icon: "✨" },
  "guest-favorite": { label: "Favorito", color: "bg-amber-100 text-amber-700", icon: "❤️" },
  "open-now": { label: "Aberto Agora", color: "bg-green-100 text-green-700", icon: "🟢" },
};

export default function PlaceCard({ place }: PlaceCardProps) {
  const priceSymbols = {
    $: "€",
    $$: "€€",
    $$$: "€€€",
    $$$$: "€€€€",
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < Math.floor(rating)
                ? "fill-amber-400 text-amber-400"
                : i < rating
                ? "fill-amber-200 text-amber-200"
                : "fill-gray-200 text-gray-200"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {/* Image */}
      <div className="relative h-48 w-full">
        <Image
          src={place.image}
          alt={place.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1">
          {place.badges?.map((badge) => {
            const config = badgeConfig[badge];
            return (
              <span
                key={badge}
                className={`${config.color} px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1`}
              >
                <span>{config.icon}</span>
                {config.label}
              </span>
            );
          })}
        </div>

        {/* Price Range */}
        <div className="absolute top-3 right-3 bg-white px-3 py-1 rounded-full text-sm font-semibold text-gray-700 shadow-md">
          {priceSymbols[place.priceRange]}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Title and Type */}
        <div className="mb-3">
          <h3 className="text-xl font-bold text-gray-900 mb-1">{place.name}</h3>
          <p className="text-sm text-primary-600 font-medium">{place.type}</p>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          {renderStars(place.rating)}
          <span className="text-sm font-semibold text-gray-900">{place.rating}</span>
          <span className="text-sm text-gray-500">({place.reviewCount})</span>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {place.description}
        </p>

        {/* Specialties */}
        {place.specialties && place.specialties.length > 0 && (
          <div className="mb-4">
            <p className="text-xs font-semibold text-gray-700 mb-1">Especialidades:</p>
            <div className="flex flex-wrap gap-1">
              {place.specialties.slice(0, 2).map((specialty, index) => (
                <span
                  key={index}
                  className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                >
                  {specialty}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Info Icons */}
        <div className="space-y-2 mb-4">
          <div className="flex items-start text-sm">
            <MapPin className="w-4 h-4 text-gray-400 mr-2 mt-0.5 flex-shrink-0" />
            <span className="text-gray-600">
              <strong className="text-secondary-600">{place.walkingTime}</strong> • {place.address}
            </span>
          </div>
          <div className="flex items-center text-sm">
            <Clock className="w-4 h-4 text-gray-400 mr-2 flex-shrink-0" />
            <span className="text-gray-600">{place.hours}</span>
          </div>
        </div>

        {/* Features */}
        <div className="flex flex-wrap gap-2 mb-4">
          {place.acceptsCard && (
            <span className="inline-flex items-center text-xs bg-green-50 text-green-700 px-2 py-1 rounded-full">
              <CreditCard className="w-3 h-3 mr-1" />
              Cartão
            </span>
          )}
          {place.hasDelivery && (
            <span className="inline-flex items-center text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full">
              <Truck className="w-3 h-3 mr-1" />
              Delivery
            </span>
          )}
          {place.hasWifi && (
            <span className="inline-flex items-center text-xs bg-purple-50 text-purple-700 px-2 py-1 rounded-full">
              <Wifi className="w-3 h-3 mr-1" />
              WiFi
            </span>
          )}
        </div>

        {/* Tips */}
        <div className="bg-amber-50 border-l-4 border-amber-400 p-3 mb-4">
          <p className="text-xs text-amber-800">
            <strong>💡 Dica:</strong> {place.tips}
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="space-y-2">
          <a
            href={place.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-primary-600 text-white text-center py-2.5 rounded-lg font-medium hover:bg-primary-700 transition-colors"
          >
            <span className="inline-flex items-center">
              Ver no Google Maps
              <ExternalLink className="w-4 h-4 ml-2" />
            </span>
          </a>

          {place.phone && (
            <a
              href={`tel:${place.phone}`}
              className="block w-full border-2 border-gray-300 text-gray-700 text-center py-2.5 rounded-lg font-medium hover:bg-gray-50 transition-colors"
            >
              📞 Ligar
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
