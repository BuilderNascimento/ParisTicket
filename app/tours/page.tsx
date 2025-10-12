"use client";

import { useState, useMemo } from "react";
import { tours } from "@/data/tours";
import TourCardPremium from "@/components/TourCardPremium";
import TourFilters from "@/components/TourFilters";
import { useLanguage } from "@/contexts/LanguageContext";
import { Sparkles, Check } from "lucide-react";

export default function ToursPage() {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedPriceRange, setSelectedPriceRange] = useState("all");
  const [selectedSort, setSelectedSort] = useState("popular");

  // Filter and sort tours
  const filteredTours = useMemo(() => {
    let filtered = [...tours];

    // Search
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (tour) =>
          tour.name.toLowerCase().includes(query) ||
          tour.title.toLowerCase().includes(query) ||
          tour.description.toLowerCase().includes(query) ||
          tour.keywords?.some((keyword) => keyword.toLowerCase().includes(query))
      );
    }

    // Category
    if (selectedCategory !== "all") {
      filtered = filtered.filter((tour) => tour.category === selectedCategory);
    }

    // Price range
    if (selectedPriceRange !== "all") {
      if (selectedPriceRange.includes("+")) {
        const minPrice = parseInt(selectedPriceRange.replace("+", ""));
        filtered = filtered.filter((tour) => tour.price >= minPrice);
      } else {
        const [minStr, maxStr] = selectedPriceRange.split("-");
        const minPrice = parseInt(minStr);
        const maxPrice = parseInt(maxStr);
        filtered = filtered.filter(
          (tour) => tour.price >= minPrice && tour.price <= maxPrice
        );
      }
    }

    // Sort
    if (selectedSort === "price-low") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (selectedSort === "price-high") {
      filtered.sort((a, b) => b.price - a.price);
    } else if (selectedSort === "rating") {
      filtered.sort((a, b) => b.rating - a.rating);
    } else if (selectedSort === "popular") {
      filtered.sort((a, b) => b.reviewCount - a.reviewCount);
    }

    return filtered;
  }, [searchQuery, selectedCategory, selectedPriceRange, selectedSort]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-purple-700 text-white">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1600')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-5 h-5 text-yellow-300" />
            <span className="font-semibold">{t("tours.hero.badge")}</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            {t("tours.hero.title")}
          </h1>
          <p className="text-lg md:text-2xl mb-4 text-white/90">
            {t("tours.hero.subtitle")}
          </p>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-sm">
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-300" />
              <span>{t("tours.hero.trust1")}</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-300" />
              <span>{t("tours.hero.trust2")}</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-300" />
              <span>{t("tours.hero.trust3")}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filters */}
        <TourFilters
          onSearch={setSearchQuery}
          onCategoryChange={setSelectedCategory}
          onPriceRangeChange={setSelectedPriceRange}
          onSortChange={setSelectedSort}
          totalResults={filteredTours.length}
        />

        {/* Tours Grid */}
        {filteredTours.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTours.map((tour) => (
              <TourCardPremium key={tour.id} tour={tour} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              {t("tours.noResults.title")}
            </h3>
            <p className="text-gray-600">
              {t("tours.noResults.desc")}
            </p>
          </div>
        )}

        {/* Why Book With Us Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t("tours.whyBook.title")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-xl font-bold mb-3">{t("tours.whyBook.bestPrice")}</h3>
              <p className="text-gray-600">
                {t("tours.whyBook.bestPriceDesc")}
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="text-5xl mb-4">🎫</div>
              <h3 className="text-xl font-bold mb-3">{t("tours.whyBook.guaranteed")}</h3>
              <p className="text-gray-600">
                {t("tours.whyBook.guaranteedDesc")}
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="text-5xl mb-4">🌍</div>
              <h3 className="text-xl font-bold mb-3">{t("tours.whyBook.support")}</h3>
              <p className="text-gray-600">
                {t("tours.whyBook.supportDesc")}
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="text-5xl mb-4">❌</div>
              <h3 className="text-xl font-bold mb-3">{t("tours.whyBook.flexible")}</h3>
              <p className="text-gray-600">
                {t("tours.whyBook.flexibleDesc")}
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-3">{t("tours.whyBook.instant")}</h3>
              <p className="text-gray-600">
                {t("tours.whyBook.instantDesc")}
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="text-5xl mb-4">⭐</div>
              <h3 className="text-xl font-bold mb-3">{t("tours.whyBook.reviews")}</h3>
              <p className="text-gray-600">
                {t("tours.whyBook.reviewsDesc")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
