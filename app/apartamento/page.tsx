"use client";

import InfoSection from "@/components/InfoSection";
import { apartmentInfo } from "@/data/apartment";
import { Key } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ApartamentoPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t("apartment.title")}
          </h1>
          <p className="text-xl text-primary-50">
            {t("apartment.subtitle")}
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Check-in/Check-out */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-6">
          <div className="flex items-center mb-4">
            <Key className="w-6 h-6 mr-3 text-primary-600" />
            <h2 className="text-2xl font-bold text-gray-900">{t("apartment.checkin")} & {t("apartment.checkout")}</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
              <p className="font-bold text-green-900 mb-1">✅ {t("apartment.checkin")}</p>
              <p className="text-gray-700">{apartmentInfo.checkIn}</p>
            </div>
            <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
              <p className="font-bold text-red-900 mb-1">🚪 {t("apartment.checkout")}</p>
              <p className="text-gray-700">{apartmentInfo.checkOut}</p>
            </div>
          </div>
        </div>


        {/* Address */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-6">
          <h3 className="font-bold text-lg text-gray-900 mb-2">{t("apartment.address")}</h3>
          <p className="text-gray-700 text-lg">{apartmentInfo.address}</p>
        </div>

        {/* House Rules */}
        <InfoSection icon="📋" title={t("apartment.rules")} defaultOpen>
          <ul className="space-y-3">
            {apartmentInfo.rules.map((rule, index) => (
              <li key={index} className="flex items-start text-gray-700">
                <span className="mr-2 mt-1">•</span>
                <span>{rule}</span>
              </li>
            ))}
          </ul>
        </InfoSection>

        {/* Appliances */}
        <InfoSection icon="⚡" title={t("apartment.appliances")}>
          <div className="space-y-6">
            {apartmentInfo.appliances.map((appliance, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">{appliance.name}</h4>
                <p className="text-gray-700 text-sm">{appliance.instructions}</p>
              </div>
            ))}
          </div>
        </InfoSection>

        {/* Troubleshooting */}
        <InfoSection icon="🔧" title={t("apartment.troubleshooting")}>
          <div className="space-y-6">
            {apartmentInfo.troubleshooting.map((item, index) => (
              <div key={index} className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg">
                <h4 className="font-bold text-amber-900 mb-2">❓ {item.problem}</h4>
                <p className="text-gray-700 text-sm">
                  <strong className="text-green-700">Solução:</strong> {item.solution}
                </p>
              </div>
            ))}
          </div>
        </InfoSection>

        {/* Kitchen Items */}
        <InfoSection icon="🍳" title={t("apartment.kitchen.title")}>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {(t("apartment.kitchen.items") as unknown as string[]).map((item: string, index: number) => (
              <div key={index} className="flex items-center text-gray-700">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </InfoSection>

        {/* Bathroom Items */}
        <InfoSection icon="🚿" title={t("apartment.bathroom.title")}>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {(t("apartment.bathroom.items") as unknown as string[]).map((item: string, index: number) => (
              <div key={index} className="flex items-center text-gray-700">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </InfoSection>

        {/* Bedroom Items */}
        <InfoSection icon="🛏️" title={t("apartment.bedroom.title")}>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {(t("apartment.bedroom.items") as unknown as string[]).map((item: string, index: number) => (
              <div key={index} className="flex items-center text-gray-700">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </InfoSection>

      </div>
    </div>
  );
}

