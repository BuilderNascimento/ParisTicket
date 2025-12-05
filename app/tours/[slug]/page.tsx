"use client";

import { useParams } from "next/navigation";
import { tours } from "@/data/tours";
import { notFound } from "next/navigation";
import Image from "next/image";
import BookingCard from "@/components/BookingCard";
import TourCardPremium from "@/components/TourCardPremium";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  MapPin,
  Clock,
  Star,
  CheckCircle,
  XCircle,
  Info,
  ChevronDown,
  ChevronUp,
  Train,
  User,
} from "lucide-react";
import { useState } from "react";

export default function TourDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const tour = tours.find((t) => t.slug === slug);
  const { t } = useLanguage();

  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState(0);

  if (!tour) {
    notFound();
  }

  // Related tours
  const relatedTours = tours
    .filter((t) => t.id !== tour.id && t.category === tour.category)
    .slice(0, 3);

  // Rating breakdown (mock data)
  const ratingBreakdown = [
    { stars: 5, percentage: 78 },
    { stars: 4, percentage: 18 },
    { stars: 3, percentage: 3 },
    { stars: 2, percentage: 1 },
    { stars: 1, percentage: 0 },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumbs */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <a href="/" className="hover:text-primary-600">
              Início
            </a>
            <span>›</span>
            <a href="/tours" className="hover:text-primary-600">
              Tours & Ingressos
            </a>
            <span>›</span>
            <span className="text-gray-900">{tour.name}</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Gallery */}
        <div className="mb-8">
          <div className="relative h-96 rounded-xl overflow-hidden mb-4">
            <Image
              src={tour.images[selectedImage]}
              alt={tour.name}
              fill
              className="object-cover"
            />
            {tour.hasDiscount && tour.discount && (
              <div className="absolute top-4 left-4 bg-accent-500 text-white px-4 py-2 rounded-full font-bold">
                {tour.discount}% OFF
              </div>
            )}
          </div>
          <div className="grid grid-cols-4 gap-4">
            {tour.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`relative h-24 rounded-lg overflow-hidden ${
                  selectedImage === index
                    ? "ring-4 ring-primary-500"
                    : "opacity-70 hover:opacity-100"
                }`}
              >
                <Image
                  src={image}
                  alt={`${tour.name} ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Header */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-sm font-semibold text-primary-600 uppercase">
                  {tour.category === "museum" && "🏛️ Museu"}
                  {tour.category === "monument" && "🗿 Monumento"}
                  {tour.category === "theme-park" && "🎢 Parque Temático"}
                  {tour.category === "experience" && "✨ Experiência"}
                  {tour.category === "tour" && "🚶 Tour"}
                </span>
                {tour.isBestSeller && (
                  <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-bold">
                    ⭐ Best Seller
                  </span>
                )}
                {tour.hasSkipLine && (
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">
                    ⚡ Skip the Line
                  </span>
                )}
              </div>

              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {tour.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-bold text-gray-900">{tour.rating}</span>
                  <span className="text-gray-600">
                    ({tour.reviewCount.toLocaleString()} avaliações)
                  </span>
                </div>

                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="w-5 h-5" />
                  <span>{tour.location}</span>
                </div>

                {tour.duration && (
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock className="w-5 h-5" />
                    <span>{tour.duration}</span>
                  </div>
                )}
              </div>
            </div>

            {/* About */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h2 className="text-2xl font-bold mb-4">Sobre esta experiência</h2>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {tour.description}
              </p>
            </div>

            {/* Highlights */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h2 className="text-2xl font-bold mb-4">Destaques</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {tour.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Included / Not Included */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h2 className="text-2xl font-bold mb-4">O que está incluído</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-green-700 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Incluído
                  </h3>
                  <ul className="space-y-2">
                    {tour.included.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-700">
                        <span className="text-green-500 mt-1">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
                    <XCircle className="w-5 h-5" />
                    Não incluído
                  </h3>
                  <ul className="space-y-2">
                    {tour.notIncluded.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-600">
                        <span className="text-gray-400 mt-1">✗</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Important Info */}
            <div className="bg-amber-50 border border-amber-200 p-6 rounded-xl">
              <div className="flex items-start gap-3 mb-4">
                <Info className="w-6 h-6 text-amber-600 flex-shrink-0" />
                <h2 className="text-xl font-bold text-gray-900">
                  Informações Importantes
                </h2>
              </div>
              <ul className="space-y-2">
                {tour.importantInfo.map((info, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-700">
                    <span className="text-amber-600 mt-1.5">•</span>
                    <span>{info}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* How to Get There */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Train className="w-6 h-6" />
                Como Chegar
              </h2>
              <div className="space-y-3">
                <div>
                  <p className="font-semibold text-gray-900 mb-1">
                    📍 Ponto de Encontro
                  </p>
                  <p className="text-gray-700">{tour.meetingPoint}</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">
                    🚇 Metrô mais próximo
                  </p>
                  <p className="text-gray-700">{tour.nearestMetro}</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">
                    🚶 Do apartamento
                  </p>
                  <p className="text-gray-700">{tour.walkingTimeFromApartment}</p>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <p className="text-sm text-gray-700">{tour.howToGetThere}</p>
                </div>
              </div>
            </div>

            {/* Reviews */}
            {tour.reviews && tour.reviews.length > 0 && (
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h2 className="text-2xl font-bold mb-6">
                  Avaliações de Clientes
                </h2>

                {/* Rating Summary */}
                <div className="mb-8 pb-8 border-b">
                  <div className="flex items-center gap-8">
                    <div className="text-center">
                      <div className="text-5xl font-bold text-gray-900 mb-2">
                        {tour.rating}
                      </div>
                      <div className="flex items-center justify-center gap-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-5 h-5 ${
                              i < Math.floor(tour.rating)
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-sm text-gray-600">
                        {tour.reviewCount.toLocaleString()} avaliações
                      </p>
                    </div>

                    <div className="flex-1 space-y-2">
                      {ratingBreakdown.map((item) => (
                        <div key={item.stars} className="flex items-center gap-3">
                          <span className="text-sm text-gray-600 w-12">
                            {item.stars} ★
                          </span>
                          <div className="flex-1 bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-yellow-400 h-2 rounded-full"
                              style={{ width: `${item.percentage}%` }}
                            />
                          </div>
                          <span className="text-sm text-gray-600 w-12">
                            {item.percentage}%
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Reviews List */}
                <div className="space-y-6">
                  {tour.reviews.map((review) => (
                    <div key={review.id} className="border-b pb-6 last:border-0">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <p className="font-semibold text-gray-900">
                              {review.author}
                            </p>
                            {review.verified && (
                              <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full">
                                ✓ Verificado
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-gray-600">
                            {review.country} • {review.date}
                          </p>
                        </div>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < review.rating
                                  ? "fill-yellow-400 text-yellow-400"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-700">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* FAQs */}
            {tour.faqs && tour.faqs.length > 0 && (
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h2 className="text-2xl font-bold mb-6">
                  Perguntas Frequentes
                </h2>
                <div className="space-y-3">
                  {tour.faqs.map((faq, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg">
                      <button
                        onClick={() => setOpenFaq(openFaq === index ? null : index)}
                        className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
                      >
                        <span className="font-semibold text-gray-900">
                          {faq.question}
                        </span>
                        {openFaq === index ? (
                          <ChevronUp className="w-5 h-5 text-gray-600 flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-600 flex-shrink-0" />
                        )}
                      </button>
                      {openFaq === index && (
                        <div className="px-4 pb-4 text-gray-700">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Related Tours */}
            {relatedTours.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold mb-6">{t("tours.detail.youMayLike")}</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedTours.map((relatedTour) => (
                    <TourCardPremium key={relatedTour.id} tour={relatedTour} />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Booking Card */}
          <div className="lg:col-span-1">
            <BookingCard tour={tour} />
          </div>
        </div>
      </div>

      {/* Mobile Floating CTA */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-2xl z-40">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs text-gray-600">A partir de</p>
            <p className="text-2xl font-bold text-gray-900">€{tour.price}</p>
          </div>
          <a
            href={tour.affiliateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-gradient-to-r from-accent-500 to-accent-600 text-white py-3 px-6 rounded-lg font-bold text-center hover:from-accent-600 hover:to-accent-700 transition-all"
          >
            Reservar Agora
          </a>
        </div>
      </div>
    </div>
  );
}
