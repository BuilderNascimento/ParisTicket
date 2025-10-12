"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/contexts/LanguageContext";
import { 
  Menu, 
  X, 
  Home, 
  Building2, 
  UtensilsCrossed,
  ShoppingBag,
  Train,
  Ticket,
  Info,
  ChevronDown
} from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const { t } = useLanguage();

  // Scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  const navigationItems = [
    {
      label: t("header.apartment"),
      icon: Building2,
      items: [
        { label: t("header.apartment_wifi"), href: "/apartamento", icon: "🔑", badge: undefined },
        { label: t("header.apartment_rules"), href: "/apartamento#regras", icon: "📋", badge: undefined },
        { label: t("header.apartment_appliances"), href: "/apartamento#eletros", icon: "⚡", badge: undefined },
      ],
    },
    {
      label: t("header.eatDrink"),
      icon: UtensilsCrossed,
      megaMenu: true,
      columns: [
        {
          title: "Refeições",
          items: [
            { label: t("header.restaurants"), href: "/restaurantes", icon: "🍽️", badge: "12" },
            { label: t("header.cafes"), href: "/cafes", icon: "☕", badge: "8" },
          ],
        },
        {
          title: "Vida Noturna",
          items: [
            { label: t("header.bars"), href: "/bares", icon: "🍺", badge: "7" },
            { label: t("header.wineBars"), href: "/bares#wine", icon: "🍷", badge: undefined },
          ],
        },
      ],
    },
    {
      label: t("header.services"),
      icon: ShoppingBag,
      items: [
        { label: t("header.supermarkets"), href: "/compras", icon: "🛒", badge: undefined },
        { label: t("header.pharmacies"), href: "/compras#farmacias", icon: "💊", badge: undefined },
      ],
    },
    {
      label: t("header.transport"),
      icon: Train,
      items: [
        { label: t("header.metro"), href: "/transporte", icon: "🚇", badge: undefined },
        { label: t("header.fromAirport"), href: "/transporte#aeroporto", icon: "✈️", badge: undefined },
      ],
    },
    {
      label: t("header.exploreParis"),
      icon: Ticket,
      badge: t("header.withDiscount"),
      megaMenu: true,
      columns: [
        {
          title: "Culture",
          items: [
            { label: t("header.mainAttractions"), href: "/tours", icon: "🗼", badge: undefined },
            { label: t("header.museums"), href: "/tours#museus", icon: "🎨", badge: undefined },
            { label: t("header.guidedTours"), href: "/tours#guiados", icon: "🏛️", badge: undefined },
          ],
        },
        {
          title: "Expériences",
          items: [
            { label: t("header.shows"), href: "/tours#shows", icon: "🎭", badge: undefined },
            { label: t("header.gastronomy"), href: "/tours#gastronomia", icon: "🍷", badge: undefined },
            { label: t("header.boatTours"), href: "/tours#barco", icon: "🚤", badge: undefined },
          ],
        },
      ],
    },
  ];

  const isActive = (href: string) => {
    return pathname === href;
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white shadow-md"
            : pathname === "/"
            ? "bg-transparent"
            : "bg-white shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* LOGO */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div
                className={`flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-purple-500 transition-transform group-hover:scale-110`}
              >
                <Home className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span
                  className={`font-bold text-lg leading-tight transition-colors ${
                    isScrolled || pathname !== "/"
                      ? "text-gray-900"
                      : "text-white"
                  }`}
                >
                  ISS Paris
                </span>
                <span
                  className={`text-xs transition-colors ${
                    isScrolled || pathname !== "/"
                      ? "text-gray-500"
                      : "text-white/80"
                  }`}
                >
                  {t("header.yourGuide")}
                </span>
              </div>
            </Link>

            {/* DESKTOP NAVIGATION */}
            <nav className="hidden lg:flex items-center space-x-1">
              {/* Início */}
              <Link
                href="/"
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
                  isActive("/")
                    ? "bg-primary-100 text-primary-700"
                    : isScrolled || pathname !== "/"
                    ? "text-gray-700 hover:text-primary-600 hover:bg-gray-100"
                    : "text-white hover:bg-white/10"
                }`}
              >
                {t("header.home")}
              </Link>

              {/* Navigation Items with Dropdowns */}
              {navigationItems.map((item, index) => (
                <div
                  key={index}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors flex items-center gap-1 ${
                      isScrolled || pathname !== "/"
                        ? "text-gray-700 hover:text-primary-600 hover:bg-gray-100"
                        : "text-white hover:bg-white/10"
                    }`}
                  >
                    {item.label}
                    {item.badge && (
                      <span className="ml-1 px-2 py-0.5 bg-accent-500 text-white text-xs font-bold rounded-full">
                        💰
                      </span>
                    )}
                    <ChevronDown className="w-4 h-4" />
                  </button>

                  {/* Dropdown */}
                  {openDropdown === item.label && (
                    <div className="absolute top-full left-0 mt-2 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden animate-fade-in">
                      {item.megaMenu && item.columns ? (
                        // Mega Menu
                        <div className="grid grid-cols-2 gap-4 p-6 min-w-[480px]">
                          {item.columns.map((column, colIndex) => (
                            <div key={colIndex}>
                              <h4 className="text-xs font-bold text-gray-400 uppercase mb-3">
                                {column.title}
                              </h4>
                              <div className="space-y-1">
                                {column.items.map((subItem, subIndex) => (
                                  <Link
                                    key={subIndex}
                                    href={subItem.href}
                                    className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors group"
                                  >
                                    <span className="text-2xl">{subItem.icon}</span>
                                    <div className="flex-1">
                                      <p className="text-sm font-medium text-gray-900 group-hover:text-primary-600">
                                        {subItem.label}
                                      </p>
                                      {subItem.badge && (
                                        <p className="text-xs text-gray-500">{subItem.badge}</p>
                                      )}
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        // Regular Dropdown
                        <div className="py-2 min-w-[240px]">
                          {item.items?.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              href={subItem.href}
                              className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 transition-colors"
                            >
                              <span className="text-xl">{subItem.icon}</span>
                              <span className="text-sm font-medium text-gray-900">
                                {subItem.label}
                              </span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}

              {/* Info */}
              <Link
                href="/info"
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
                  isActive("/info")
                    ? "bg-primary-100 text-primary-700"
                    : isScrolled || pathname !== "/"
                    ? "text-gray-700 hover:text-primary-600 hover:bg-gray-100"
                    : "text-white hover:bg-white/10"
                }`}
              >
                {t("header.info")}
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <div className="flex items-center">
              {/* MOBILE MENU BUTTON */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`lg:hidden p-2 rounded-lg transition-colors ${
                  isScrolled || pathname !== "/"
                    ? "text-gray-900 hover:bg-gray-100"
                    : "text-white hover:bg-white/10"
                }`}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Drawer */}
          <div className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-white z-50 shadow-2xl lg:hidden overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500 to-purple-500">
                  <Home className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-bold text-lg">ISS Paris</p>
                  <p className="text-xs text-gray-500">{t("header.yourGuide")}</p>
                </div>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Menu Items */}
            <div className="p-4 space-y-2">
              <Link
                href="/"
                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <Home className="w-5 h-5 text-primary-600" />
                <span className="font-medium">{t("header.home")}</span>
              </Link>

              {navigationItems.map((item, index) => (
                <MobileMenuItem key={index} item={item} />
              ))}

              <Link
                href="/info"
                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <Info className="w-5 h-5 text-gray-600" />
                <span className="font-medium">{t("header.info")}</span>
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
}

// Mobile Menu Item Component
function MobileMenuItem({ item }: { item: any }) {
  const [isOpen, setIsOpen] = useState(false);
  const Icon = item.icon;

  if (item.megaMenu && item.columns) {
    // Mega menu items
    return (
      <div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between w-full px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <div className="flex items-center gap-3">
            <Icon className="w-5 h-5 text-gray-600" />
            <span className="font-medium">{item.label}</span>
            {item.badge && (
              <span className="px-2 py-0.5 bg-accent-500 text-white text-xs font-bold rounded-full">
                💰
              </span>
            )}
          </div>
          <ChevronDown
            className={`w-4 h-4 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>
        {isOpen && (
          <div className="ml-8 mt-1 space-y-1">
            {item.columns.map((column: any, colIndex: number) => (
              <div key={colIndex}>
                <p className="text-xs font-bold text-gray-400 uppercase px-4 py-2">
                  {column.title}
                </p>
                {column.items.map((subItem: any, subIndex: number) => (
                  <Link
                    key={subIndex}
                    href={subItem.href}
                    className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg"
                  >
                    <span>{subItem.icon}</span>
                    {subItem.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  // Regular dropdown items
  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors"
      >
        <div className="flex items-center gap-3">
          <Icon className="w-5 h-5 text-gray-600" />
          <span className="font-medium">{item.label}</span>
        </div>
        <ChevronDown
          className={`w-4 h-4 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="ml-8 mt-1 space-y-1">
          {item.items?.map((subItem: any, subIndex: number) => (
            <Link
              key={subIndex}
              href={subItem.href}
              className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg"
            >
              <span>{subItem.icon}</span>
              {subItem.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
