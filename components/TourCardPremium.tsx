"use client";

import Link from "next/link";
import Image from "next/image";
import { Tour } from "@/types";
import { useLanguage } from "@/contexts/LanguageContext";
import { Star, Clock, CheckCircle } from "lucide-react";

interface TourCardPremiumProps {
  tour: Tour;
}

export default function TourCardPremium({ tour }: TourCardPremiumProps) {
  const { t } = useLanguage();

  const renderBadge = () => {
    if (tour.hasDiscount && tour.discount) {
      return (
        <span className="absolute top-3 left-3 bg-accent-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg z-10">
          {tour.discount}{t("tours.badges.discount")}
        </span>
      );
    }
    if (tour.isBestSeller) {
      return (
        <span className="absolute top-3 left-3 bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg z-10">
          {t("tours.badges.bestSeller")}
        </span>
      );
    }
    if (tour.hasSkipLine) {
      return (
        <span className="absolute top-3 left-3 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg z-10">
          {t("tours.badges.skipLine")}
        </span>
      );
    }
    return null;
  };

  const getCategoryLabel = () => {
    return t(`tours.categories.${tour.category}`);
  };

  return (
    <Link href={`/tours/${tour.slug}`} className="group">
      <div className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden h-full flex flex-col group-hover:-translate-y-1">
        {/* Image */}
        <div className="relative h-56 overflow-hidden">
          {renderBadge()}
          <Image
            src={tour.images[0]}
            alt={tour.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-1">
          {/* Category */}
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-semibold text-primary-600 uppercase tracking-wide">
              {getCategoryLabel()}
            </span>
            {tour.subcategory && (
              <>
                <span className="text-gray-300">•</span>
                <span className="text-xs text-gray-500">{tour.subcategory}</span>
              </>
            )}
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors">
            {tour.name}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-3">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="font-bold text-gray-900">{tour.rating}</span>
            </div>
            <span className="text-sm text-gray-500">
              ({tour.reviewCount.toLocaleString()} {t("tours.card.reviews")})
            </span>
          </div>

          {/* Description */}
          <p className="text-sm text-gray-600 mb-4 line-clamp-3 flex-1">
            {tour.shortDescription}
          </p>

          {/* Highlights - Top 3 */}
          <div className="space-y-2 mb-4">
            {tour.highlights.slice(0, 3).map((highlight, index) => (
              <div key={index} className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-xs text-gray-700">{highlight}</span>
              </div>
            ))}
          </div>

          {/* Duration */}
          {tour.duration && (
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
              <Clock className="w-4 h-4" />
              <span>{tour.duration}</span>
            </div>
          )}

          {/* Trust Badges */}
          <div className="flex flex-wrap gap-2 mb-4 pt-4 border-t border-gray-100">
            {tour.freeCancellation && (
              <div className="flex items-center gap-1 text-xs text-gray-600">
                <CheckCircle className="w-3 h-3 text-green-500" />
                <span>{t("tours.card.freeCancellation")}</span>
              </div>
            )}
            {tour.instantConfirmation && (
              <div className="flex items-center gap-1 text-xs text-gray-600">
                <CheckCircle className="w-3 h-3 text-green-500" />
                <span>{t("tours.card.instantConfirmation")}</span>
              </div>
            )}
            {tour.mobileTicket && (
              <div className="flex items-center gap-1 text-xs text-gray-600">
                <CheckCircle className="w-3 h-3 text-green-500" />
                <span>{t("tours.card.mobileTicket")}</span>
              </div>
            )}
          </div>

          {/* Price & CTA */}
          <div className="flex items-end justify-between mt-auto">
            <div>
              {tour.originalPrice && tour.originalPrice > tour.price && (
                <p className="text-sm text-gray-400 line-through">
                  €{tour.originalPrice}
                </p>
              )}
              <div className="flex items-baseline gap-1">
                <span className="text-xs text-gray-500">{t("tours.card.from")}</span>
                <span className="text-3xl font-bold text-gray-900">
                  €{tour.price}
                </span>
              </div>
              <p className="text-xs text-gray-500">{t("tours.card.perPerson")}</p>
            </div>

            <button className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors shadow-md hover:shadow-lg">
              {t("tours.card.seeDetails")}
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
