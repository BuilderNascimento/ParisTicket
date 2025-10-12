import Image from "next/image";
import Link from "next/link";
import { Clock, Star, ExternalLink, MapPin } from "lucide-react";
import { Tour } from "@/types";

interface TourCardProps {
  tour: Tour;
}

export default function TourCard({ tour }: TourCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Image */}
      <div className="relative h-56 w-full">
        <Image
          src={tour.images[0]}
          alt={tour.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {tour.isPopular && (
            <span className="bg-accent-500 text-white px-3 py-1 rounded-full text-xs font-bold">
              ⭐ Mais Popular
            </span>
          )}
          {tour.isRecommended && (
            <span className="bg-secondary-500 text-white px-3 py-1 rounded-full text-xs font-bold">
              ✅ Recomendado
            </span>
          )}
        </div>

        {/* Price */}
        <div className="absolute bottom-3 right-3 bg-white px-4 py-2 rounded-lg shadow-lg">
          <p className="text-2xl font-bold text-gray-900">
            €{tour.price}
          </p>
          <p className="text-xs text-gray-500">por pessoa</p>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{tour.name}</h3>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {tour.shortDescription}
        </p>

        {/* Info */}
        <div className="flex items-center gap-4 mb-4 text-sm">
          <div className="flex items-center text-gray-600">
            <Clock className="w-4 h-4 mr-1" />
            {tour.duration}
          </div>
          <div className="flex items-center text-amber-500">
            <Star className="w-4 h-4 mr-1 fill-current" />
            <span className="font-semibold text-gray-900">{tour.rating}</span>
            <span className="text-gray-500 ml-1">({tour.reviewCount})</span>
          </div>
        </div>

        {/* Included Items */}
        <div className="mb-4">
          <ul className="space-y-1">
            {tour.included.slice(0, 3).map((item, index) => (
              <li key={index} className="text-sm text-gray-600 flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* How to Get There */}
        <div className="bg-blue-50 border-l-4 border-blue-400 p-3 mb-4">
          <div className="flex items-start">
            <MapPin className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
            <p className="text-xs text-blue-800">{tour.howToGetThere}</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="space-y-2">
          <a
            href={tour.affiliateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-accent-500 text-white text-center py-3 rounded-lg font-bold hover:bg-accent-600 transition-colors"
          >
            <span className="inline-flex items-center">
              Reservar Agora
              <ExternalLink className="w-4 h-4 ml-2" />
            </span>
          </a>
          
          <Link
            href={`/tours/${tour.slug}`}
            className="block w-full border-2 border-gray-300 text-gray-700 text-center py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
          >
            Ver Detalhes
          </Link>
        </div>
      </div>
    </div>
  );
}

