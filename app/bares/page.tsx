"use client";

import PlaceCard from "@/components/PlaceCard";
import { bars } from "@/data/places";
import { useLanguage } from "@/contexts/LanguageContext";

export default function BaresPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t("bars.title")}
            </h1>
            <p className="text-xl text-purple-50 max-w-2xl mx-auto">
              {t("bars.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-purple-50 border-l-4 border-purple-400 p-6 rounded-r-lg">
          <p className="text-gray-700">
            <strong>🌙 Vida Noturna em Saint-Ambroise e Oberkampf:</strong> Você está no coração da vida noturna parisiense! 
            Oberkampf (5min) e Bastille (8min) têm desde cocktail bars sofisticados até pubs descontraídos. A maioria abre 
            após as 18h e fica aberto até 2h. Happy hour geralmente é das 17h às 20h. 🍸
          </p>
        </div>
      </section>

      {/* Bars Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bars.map((bar) => (
            <PlaceCard key={bar.id} place={bar} />
          ))}
        </div>
      </section>

      {/* Nightlife Guide */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            🌃 Guia da Vida Noturna
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-gray-900 mb-4 text-lg">Tipos de Bares</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-1">🍸 Cocktail Bars</h4>
                  <p className="text-sm text-gray-700">
                    Drinks autorais e sofisticados. Preço: €12-18 por drink. Dress code: casual elegante.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-1">🍺 Pubs & Bares</h4>
                  <p className="text-sm text-gray-700">
                    Ambiente descontraído, cervejas e petiscos. Preço: €5-10 por cerveja. Dress code: casual.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-1">🍷 Wine Bars</h4>
                  <p className="text-sm text-gray-700">
                    Vinhos franceses e tábuas de queijos. Preço: €6-12 por taça. Perfeito para um momento relaxante.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-4 text-lg">Dicas Importantes</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="text-2xl mr-3">⏰</span>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">Horários</h4>
                    <p className="text-sm text-gray-700">Happy hour: 17h-20h. Pico: 22h-00h. Maioria fecha às 2h.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-2xl mr-3">💳</span>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">Pagamento</h4>
                    <p className="text-sm text-gray-700">Cartão aceito na maioria. Sempre tenha um pouco de dinheiro.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-2xl mr-3">🚇</span>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">Como Voltar</h4>
                    <p className="text-sm text-gray-700">Metrô até 1h15 (2h15 sex/sáb). Depois use Uber/Bolt.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-2xl mr-3">🎫</span>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">Entrada</h4>
                    <p className="text-sm text-gray-700">Bares são grátis. Baladas cobram €10-20 entrada.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-2xl mr-3">👔</span>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">Dress Code</h4>
                    <p className="text-sm text-gray-700">Paris é estilosa! Evite chinelos e roupas muito casuais.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Tips */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="bg-amber-50 border-2 border-amber-200 rounded-xl p-6">
          <h3 className="font-bold text-gray-900 mb-3 text-lg">
            🔒 Dicas de Segurança
          </h3>
          <ul className="grid md:grid-cols-2 gap-3 text-sm text-gray-700">
            <li>✓ Não deixe bebida sem vigilância</li>
            <li>✓ Guarde pertences em local seguro</li>
            <li>✓ Prefira apps de transporte à noite</li>
            <li>✓ Ande sempre em grupos se possível</li>
            <li>✓ Tenha bateria no celular</li>
            <li>✓ Saiba o endereço do apartamento</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

