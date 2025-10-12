"use client";

import { Tour } from "@/types";
import { useLanguage } from "@/contexts/LanguageContext";
import { CheckCircle, CreditCard, Shield, ExternalLink } from "lucide-react";

interface BookingCardProps {
  tour: Tour;
}

export default function BookingCard({ tour }: BookingCardProps) {
  const { t } = useLanguage();

  return (
    <div className="bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden sticky top-24">
      {/* Price Section */}
      <div className="p-6 bg-gradient-to-br from-primary-50 to-white border-b border-gray-100">
        {tour.originalPrice && tour.originalPrice > tour.price && (
          <div className="flex items-center gap-2 mb-2">
            <span className="text-lg text-gray-400 line-through">
              €{tour.originalPrice}
            </span>
            {tour.discount && (
              <span className="bg-accent-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                -{tour.discount}%
              </span>
            )}
          </div>
        )}
        <div className="flex items-baseline gap-2 mb-1">
          <span className="text-sm text-gray-600">{t("tours.card.from")}</span>
          <span className="text-4xl font-bold text-gray-900">
            €{tour.price}
          </span>
        </div>
        <p className="text-sm text-gray-600">{t("tours.card.perPerson")}</p>
      </div>

      {/* CTA Button */}
      <div className="p-6">
        <a
          href={tour.affiliateUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-accent-500 to-accent-600 text-white py-4 rounded-xl font-bold text-lg hover:from-accent-600 hover:to-accent-700 transition-all shadow-lg hover:shadow-xl hover:scale-105 transform"
        >
          {t("tours.detail.bookNow")}
          <ExternalLink className="w-5 h-5" />
        </a>

        {/* Trust Badges */}
        <div className="mt-6 space-y-3">
          {tour.freeCancellation && (
            <div className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-gray-900">
                  {t("tours.card.freeCancellation")}
                </p>
                <p className="text-xs text-gray-600">
                  Jusqu'à 24 heures avant le début
                </p>
              </div>
            </div>
          )}

          {tour.instantConfirmation && (
            <div className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-gray-900">
                  {t("tours.card.instantConfirmation")}
                </p>
                <p className="text-xs text-gray-600">
                  Reçu par email immédiatement
                </p>
              </div>
            </div>
          )}

          {tour.mobileTicket && (
            <div className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-gray-900">
                  {t("tours.card.mobileTicket")}
                </p>
                <p className="text-xs text-gray-600">
                  Pas besoin d'imprimer
                </p>
              </div>
            </div>
          )}

          <div className="flex items-start gap-2">
            <Shield className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-gray-900">
                {t("tours.detail.noHiddenFees")}
              </p>
              <p className="text-xs text-gray-600">
                {t("tours.detail.finalPrice")}
              </p>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mt-6 pt-6 border-t border-gray-100">
          <div className="flex items-center gap-2 mb-3">
            <CreditCard className="w-5 h-5 text-gray-400" />
            <p className="text-sm font-medium text-gray-700">
              {t("tours.detail.securePayment")}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-gray-100 px-3 py-1 rounded text-xs font-semibold text-gray-700">
              VISA
            </div>
            <div className="bg-gray-100 px-3 py-1 rounded text-xs font-semibold text-gray-700">
              Mastercard
            </div>
            <div className="bg-gray-100 px-3 py-1 rounded text-xs font-semibold text-gray-700">
              PayPal
            </div>
          </div>
        </div>

        {/* GetYourGuide Badge */}
        <div className="mt-6 pt-6 border-t border-gray-100 text-center">
          <p className="text-xs text-gray-500 mb-2">{t("tours.detail.processedBy")}</p>
          <div className="flex items-center justify-center gap-2">
            <div className="w-6 h-6 bg-accent-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">G</span>
            </div>
            <span className="font-bold text-gray-900">GetYourGuide</span>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            ✓ {t("tours.detail.officialPartner")}
          </p>
        </div>
      </div>
    </div>
  );
}
