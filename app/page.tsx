"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { Home, UtensilsCrossed, Coffee, Wine, ShoppingBag, Train, Ticket, Info, MapPin, Building2, Sparkles } from "lucide-react";

export default function HomePage() {
  const { t } = useLanguage();

  // Removed loading state - translations are now static
  if (false) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-600 to-purple-600">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-white mx-auto mb-4"></div>
          <p className="text-white text-lg">Chargement...</p>
        </div>
      </div>
    );
  }

  const quickAccessCards = [
    {
      icon: Home,
      titleKey: "home.quickAccess.cards.apartment.title",
      subtitleKey: "home.quickAccess.cards.apartment.subtitle",
      href: "/apartamento",
      color: "from-blue-500 to-blue-600",
      badge: null,
    },
    {
      icon: UtensilsCrossed,
      titleKey: "home.quickAccess.cards.restaurants.title",
      subtitleKey: "home.quickAccess.cards.restaurants.subtitle",
      href: "/restaurantes",
      color: "from-orange-500 to-orange-600",
      badgeKey: "home.quickAccess.cards.restaurants.badge",
    },
    {
      icon: Coffee,
      titleKey: "home.quickAccess.cards.cafes.title",
      subtitleKey: "home.quickAccess.cards.cafes.subtitle",
      href: "/cafes",
      color: "from-amber-600 to-amber-700",
      badgeKey: "home.quickAccess.cards.cafes.badge",
    },
    {
      icon: Wine,
      titleKey: "home.quickAccess.cards.bars.title",
      subtitleKey: "home.quickAccess.cards.bars.subtitle",
      href: "/bares",
      color: "from-purple-500 to-purple-600",
      badgeKey: "home.quickAccess.cards.bars.badge",
    },
    {
      icon: ShoppingBag,
      titleKey: "home.quickAccess.cards.shopping.title",
      subtitleKey: "home.quickAccess.cards.shopping.subtitle",
      href: "/compras",
      color: "from-green-500 to-green-600",
      badge: null,
    },
    {
      icon: Train,
      titleKey: "home.quickAccess.cards.transport.title",
      subtitleKey: "home.quickAccess.cards.transport.subtitle",
      href: "/transporte",
      color: "from-blue-600 to-blue-700",
      badge: null,
    },
    {
      icon: Ticket,
      titleKey: "home.quickAccess.cards.tours.title",
      subtitleKey: "home.quickAccess.cards.tours.subtitle",
      href: "/tours",
      color: "from-pink-500 to-pink-600",
      badgeKey: "home.quickAccess.cards.tours.badge",
    },
    {
      icon: Info,
      titleKey: "home.quickAccess.cards.info.title",
      subtitleKey: "home.quickAccess.cards.info.subtitle",
      href: "/info",
      color: "from-gray-500 to-gray-600",
      badge: null,
    },
  ];

  const neighborhoodHighlights = [
    {
      icon: "🎨",
      titleKey: "home.neighborhood.highlights.culture.title",
      descriptionKey: "home.neighborhood.highlights.culture.description",
    },
    {
      icon: "🍷",
      titleKey: "home.neighborhood.highlights.gastronomy.title",
      descriptionKey: "home.neighborhood.highlights.gastronomy.description",
    },
    {
      icon: "🌃",
      titleKey: "home.neighborhood.highlights.nightlife.title",
      descriptionKey: "home.neighborhood.highlights.nightlife.description",
    },
  ];

  const quickTips = [
    {
      icon: Train,
      labelKey: "home.quickTips.nearestMetro",
      valueKey: "home.quickTips.metroValue",
      detailKey: "home.quickTips.metroDetail",
      color: "text-blue-600 bg-blue-50",
    },
    {
      icon: ShoppingBag,
      labelKey: "home.quickTips.nearestSupermarket",
      valueKey: "home.quickTips.supermarketValue",
      detailKey: "home.quickTips.supermarketDetail",
      color: "text-green-600 bg-green-50",
    },
    {
      icon: Coffee,
      labelKey: "home.quickTips.nearestBakery",
      valueKey: "home.quickTips.bakeryValue",
      detailKey: "home.quickTips.bakeryDetail",
      color: "text-amber-600 bg-amber-50",
    },
    {
      icon: Building2,
      labelKey: "home.quickTips.location",
      valueKey: "home.quickTips.locationValue",
      detailKey: "home.quickTips.locationDetail",
      color: "text-purple-600 bg-purple-50",
    },
  ];

  const emergencyInfo = [
    { icon: "🚒", labelKey: "home.quickTips.emergency.fire", number: "18" },
    { icon: "🚑", labelKey: "home.quickTips.emergency.ambulance", number: "15" },
    { icon: "👮", labelKey: "home.quickTips.emergency.police", number: "17" },
    { icon: "🆘", labelKey: "home.quickTips.emergency.general", number: "112" },
  ];

  return (
    <div className="min-h-screen">
      {/* HERO SECTION */}
      <section className="relative h-[70vh] md:h-[75vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1920&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-6 animate-fade-in">
            <MapPin className="w-4 h-4 text-white" />
            <span className="text-white text-sm font-medium">
              {t("home.hero.badge")}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 animate-fade-in leading-tight">
            {t("home.hero.title")}<br />
            <span className="bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent">
              {t("home.hero.titleHighlight")}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 mb-2 animate-fade-in">
            {t("home.hero.subtitle")}
          </p>
          
          {/* Address */}
          <p className="text-lg md:text-xl text-white/70 mb-8 animate-fade-in">
            {t("home.hero.address")}
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <a
              href="#quick-access"
              className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-2xl"
            >
              <Sparkles className="w-5 h-5" />
              {t("home.hero.ctaExplore")}
            </a>
            <Link
              href="/apartamento"
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all"
            >
              <Home className="w-5 h-5" />
              {t("home.hero.ctaGuide")}
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-white/70 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* QUICK ACCESS SECTION */}
      <section id="quick-access" className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              {t("home.quickAccess.title")}
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              {t("home.quickAccess.subtitle")}
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickAccessCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <Link
                  key={index}
                  href={card.href}
                  className="group relative bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
                >
                  {/* Gradient Background (appears on hover) */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>

                    {/* Badge */}
                    {card.badgeKey && (
                      <span className="inline-block px-2 py-1 bg-primary-100 text-primary-700 text-xs font-bold rounded-full mb-2 group-hover:bg-white/20 group-hover:text-white">
                        {t(card.badgeKey)}
                      </span>
                    )}

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-white transition-colors">
                      {t(card.titleKey)}
                    </h3>

                    {/* Subtitle */}
                    <p className="text-sm text-gray-600 group-hover:text-white/90 transition-colors">
                      {t(card.subtitleKey)}
                    </p>

                    {/* Arrow */}
                    <div className="mt-4 flex items-center text-gray-400 group-hover:text-white">
                      <span className="text-sm font-medium mr-2">{t("home.quickAccess.explore")}</span>
                      <svg className="w-4 h-4 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* NEIGHBORHOOD SECTION */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-bold mb-4">
              {t("home.neighborhood.badge")}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              {t("home.neighborhood.title")}
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t("home.neighborhood.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {neighborhoodHighlights.map((highlight, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow border border-gray-100">
                <div className="text-5xl mb-4">{highlight.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{t(highlight.titleKey)}</h3>
                <p className="text-gray-600 leading-relaxed">{t(highlight.descriptionKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUICK TIPS SECTION */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              {t("home.quickTips.title")}
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              {t("home.quickTips.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {quickTips.map((tip, index) => {
              const Icon = tip.icon;
              return (
                <div key={index} className={`${tip.color} rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow`}>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <Icon className="w-8 h-8" />
                    </div>
                    <div>
                      <p className="text-sm font-medium opacity-80 mb-1">{t(tip.labelKey)}</p>
                      <p className="text-xl font-bold mb-1">{t(tip.valueKey)}</p>
                      <p className="text-sm opacity-70">{t(tip.detailKey)}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Emergency Numbers */}
          <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-8 shadow-md">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-2xl">🚨</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-red-900">{t("home.quickTips.emergency.title")}</h3>
                <p className="text-red-700">{t("home.quickTips.emergency.subtitle")}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {emergencyInfo.map((item, index) => (
                <a
                  key={index}
                  href={`tel:${item.number}`}
                  className="bg-white rounded-xl p-4 text-center hover:bg-red-100 transition-colors border-2 border-red-200"
                >
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <p className="text-sm font-medium text-gray-700 mb-1">{t(item.labelKey)}</p>
                  <p className="text-2xl font-bold text-red-600">{item.number}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MAP SECTION */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              {t("home.map.title")}
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              {t("home.map.subtitle")}
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-4 border-gray-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.8916!2d2.3749!3d48.8586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66dfcf0f6e519%3A0x5e5e5e5e5e5e5e5e!2s8%20Impasse%20Saint-S%C3%A9bastien%2C%2075011%20Paris!5e0!3m2!1sfr!2sfr!4v1699999999999!5m2!1sfr!2sfr&zoom=15"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Distance Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {[
              { icon: "🏛️", nameKey: "home.map.places.bastille", time: "8-10 min", transportKey: "home.map.places.byFoot" },
              { icon: "🍽️", nameKey: "home.map.places.oberkampf", time: "5 min", transportKey: "home.map.places.byFoot" },
              { icon: "🏘️", nameKey: "home.map.places.lemarais", time: "10-12 min", transportKey: "home.map.places.byFoot" },
              { icon: "🗼", nameKey: "home.map.places.eiffel", time: "30 min", transportKey: "home.map.places.byMetro" },
            ].map((place, index) => (
              <div key={index} className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-4 text-center hover:scale-105 transition-transform">
                <div className="text-4xl mb-2">{place.icon}</div>
                <p className="font-bold text-gray-900">{t(place.nameKey)}</p>
                <p className="text-sm text-primary-600 font-semibold">{place.time}</p>
                <p className="text-xs text-gray-600">{t(place.transportKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 bg-gradient-to-br from-primary-600 via-blue-600 to-purple-600 text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block p-3 bg-white/10 rounded-full mb-6">
            <Sparkles className="w-10 h-10" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            {t("home.cta.title")}
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            {t("home.cta.subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/apartamento"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-xl"
            >
              <Home className="w-5 h-5" />
              {t("home.cta.btnGuide")}
            </Link>
            <Link
              href="/restaurantes"
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all"
            >
              <UtensilsCrossed className="w-5 h-5" />
              {t("home.cta.btnRestaurants")}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
