"use client";

import Link from "next/link";
import { Heart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t("footer.about.title")}</h4>
            <p className="text-gray-400 text-sm mb-4" dangerouslySetInnerHTML={{ __html: t("footer.about.address") }} />
            <p className="text-gray-400 text-sm">
              {t("footer.about.description")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t("footer.quickLinks.title")}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/apartamento" className="text-gray-400 hover:text-white transition-colors">
                  {t("footer.quickLinks.apartmentGuide")}
                </Link>
              </li>
              <li>
                <Link href="/transporte" className="text-gray-400 hover:text-white transition-colors">
                  {t("footer.quickLinks.howToGet")}
                </Link>
              </li>
              <li>
                <Link href="/info" className="text-gray-400 hover:text-white transition-colors">
                  {t("footer.quickLinks.usefulInfo")}
                </Link>
              </li>
              <li>
                <Link href="/tours" className="text-gray-400 hover:text-white transition-colors">
                  {t("footer.quickLinks.tours")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t("footer.explore.title")}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/restaurantes" className="text-gray-400 hover:text-white transition-colors">
                  🍽️ {t("footer.explore.restaurants")}
                </Link>
              </li>
              <li>
                <Link href="/cafes" className="text-gray-400 hover:text-white transition-colors">
                  ☕ {t("footer.explore.cafes")}
                </Link>
              </li>
              <li>
                <Link href="/bares" className="text-gray-400 hover:text-white transition-colors">
                  🍺 {t("footer.explore.bars")}
                </Link>
              </li>
              <li>
                <Link href="/compras" className="text-gray-400 hover:text-white transition-colors">
                  🛒 {t("footer.explore.shopping")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Location */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t("footer.location.title")}</h4>
            <p className="text-gray-400 text-sm">
              {t("footer.location.description")}
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400 flex items-center justify-center mb-2">
            {t("footer.madeWith")} <Heart className="w-4 h-4 mx-1 text-red-500" /> {t("footer.forGuests")}
          </p>
          <p className="text-sm text-gray-400 mb-4">
            © {new Date().getFullYear()} Guide Digital. {t("footer.allRightsReserved")}
          </p>
          
          {/* Buildify Brand */}
          <div className="text-xs text-gray-500 border-t border-gray-800 pt-4 mt-4">
            <p>{t("footer.buildify.madeBy")} <span className="font-semibold text-blue-400">Buildify</span></p>
            <p className="mt-1 italic">{t("footer.buildify.tagline")}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

