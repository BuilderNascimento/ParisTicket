"use client";

import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Search, SlidersHorizontal, X } from "lucide-react";

interface TourFiltersProps {
  onSearch: (query: string) => void;
  onCategoryChange: (category: string) => void;
  onPriceRangeChange: (range: string) => void;
  onSortChange: (sort: string) => void;
  totalResults: number;
}

export default function TourFilters({
  onSearch,
  onCategoryChange,
  onPriceRangeChange,
  onSortChange,
  totalResults,
}: TourFiltersProps) {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedPriceRange, setSelectedPriceRange] = useState("all");
  const [selectedSort, setSelectedSort] = useState("popular");
  const [showFilters, setShowFilters] = useState(false);

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    onSearch(value);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    onCategoryChange(category);
  };

  const handlePriceRangeChange = (range: string) => {
    setSelectedPriceRange(range);
    onPriceRangeChange(range);
  };

  const handleSortChange = (sort: string) => {
    setSelectedSort(sort);
    onSortChange(sort);
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("all");
    setSelectedPriceRange("all");
    setSelectedSort("popular");
    onSearch("");
    onCategoryChange("all");
    onPriceRangeChange("all");
    onSortChange("popular");
  };

  const hasActiveFilters =
    searchQuery || selectedCategory !== "all" || selectedPriceRange !== "all";

  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-8">
      {/* Search Bar */}
      <div className="relative mb-4">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder={t("tours.filters.search")}
          value={searchQuery}
          onChange={(e) => handleSearchChange(e.target.value)}
          className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        />
      </div>

      {/* Mobile Filter Toggle */}
      <button
        onClick={() => setShowFilters(!showFilters)}
        className="lg:hidden w-full flex items-center justify-center gap-2 bg-gray-100 text-gray-700 py-3 rounded-lg font-medium mb-4"
      >
        <SlidersHorizontal className="w-5 h-5" />
        {t("tours.filters.filters")}
        {hasActiveFilters && (
          <span className="bg-primary-500 text-white px-2 py-0.5 rounded-full text-xs">
            {[searchQuery, selectedCategory !== "all", selectedPriceRange !== "all"].filter(Boolean).length}
          </span>
        )}
      </button>

      {/* Filters */}
      <div className={`${showFilters ? "block" : "hidden"} lg:block`}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {/* Category Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t("tours.filters.category")}
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => handleCategoryChange(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="all">{t("tours.filters.allCategories")}</option>
              <option value="museum">{t("tours.filters.museums")}</option>
              <option value="monument">{t("tours.filters.monuments")}</option>
              <option value="theme-park">{t("tours.filters.themeParks")}</option>
              <option value="experience">{t("tours.filters.experiences")}</option>
              <option value="tour">{t("tours.filters.toursGuided")}</option>
            </select>
          </div>

          {/* Price Range Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t("tours.filters.priceRange")}
            </label>
            <select
              value={selectedPriceRange}
              onChange={(e) => handlePriceRangeChange(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="all">{t("tours.filters.allPrices")}</option>
              <option value="0-25">€0 - €25</option>
              <option value="26-50">€26 - €50</option>
              <option value="51-100">€51 - €100</option>
              <option value="100+">€100+</option>
            </select>
          </div>

          {/* Sort */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t("tours.filters.sortBy")}
            </label>
            <select
              value={selectedSort}
              onChange={(e) => handleSortChange(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="popular">{t("tours.filters.popular")}</option>
              <option value="price-low">{t("tours.filters.priceLow")}</option>
              <option value="price-high">{t("tours.filters.priceHigh")}</option>
              <option value="rating">{t("tours.filters.rating")}</option>
            </select>
          </div>
        </div>

        {/* Clear Filters */}
        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >
            <X className="w-4 h-4" />
            {t("tours.filters.clearFilters")}
          </button>
        )}
      </div>

      {/* Results Count */}
      <div className="mt-4 pt-4 border-t border-gray-100">
        <p className="text-sm text-gray-600">
          <span className="font-semibold text-gray-900">{totalResults}</span>{" "}
          {totalResults === 1 ? t("tours.filters.result") : t("tours.filters.results")}
        </p>
      </div>
    </div>
  );
}
