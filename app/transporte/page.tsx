"use client";

import { transportOptions } from "@/data/transport";
import { Train, Bus, Bike, Car, Plane } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const iconMap = {
  Train: Train,
  Bus: Bus,
  Bike: Bike,
  Car: Car,
  Plane: Plane,
};

export default function TransportePage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t("transport.title")}
            </h1>
            <p className="text-xl text-blue-50 max-w-2xl mx-auto">
              {t("transport.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Quick Access */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">🚇 Metrô Mais Próximo</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <p className="font-bold text-lg mb-1">Saint-Sébastien - Froissart</p>
              <p className="text-primary-50 text-sm">Linha 8 (roxo) - 2 minutos a pé do apartamento</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <p className="font-bold text-lg mb-1">Chemin Vert</p>
              <p className="text-primary-50 text-sm">Linha 8 (roxo) - 5 minutos a pé do apartamento</p>
            </div>
          </div>
        </div>
      </section>

      {/* Transport Options */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid gap-6">
          {transportOptions.map((option) => {
            const IconComponent = iconMap[option.icon as keyof typeof iconMap] || Train;
            
            return (
              <div key={option.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary-100 p-4 rounded-lg flex-shrink-0">
                      <IconComponent className="w-8 h-8 text-primary-600" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{option.name}</h3>
                      <p className="text-gray-600 mb-4">{option.description}</p>
                      
                      {option.price && (
                        <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
                          <p className="text-sm">
                            <strong className="text-green-900">💰 Preço:</strong>{" "}
                            <span className="text-gray-700">{option.price}</span>
                          </p>
                        </div>
                      )}
                      
                      <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                        <p className="text-sm text-gray-700 whitespace-pre-line">{option.tips}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Metro Map */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            🗺️ Mapa do Metrô
          </h2>
          <p className="text-gray-600 mb-6">
            Baixe o app oficial RATP ou Citymapper para navegar facilmente pelo metrô de Paris
          </p>
          <div className="bg-gray-100 rounded-lg p-8 text-center">
            <p className="text-gray-500 mb-4">
              📱 Apps Recomendados:
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <span className="bg-primary-500 text-white px-4 py-2 rounded-lg font-semibold">
                Citymapper
              </span>
              <span className="bg-green-500 text-white px-4 py-2 rounded-lg font-semibold">
                RATP Official
              </span>
              <span className="bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold">
                Google Maps
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Tips & Tricks */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            💡 Dicas de Transporte
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-primary-600 mb-3 flex items-center">
                <span className="mr-2">🎫</span>
                Bilhetes e Passes
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Bilhete único: vale para 1 viagem (metrô, ônibus, RER zona 1)</li>
                <li>• Carnê de 10: mais econômico se ficar vários dias</li>
                <li>• Navigo Easy: cartão recarregável (€2 + créditos)</li>
                <li>• Passe dia: ilimitado por 24h (€8,45)</li>
                <li>• Compre nas máquinas ou guichês das estações</li>
                <li>• Guarde o bilhete até sair da estação!</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-primary-600 mb-3 flex items-center">
                <span className="mr-2">⚠️</span>
                Cuidados e Segurança
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Cuidado com carteiristas, especialmente em estações turísticas</li>
                <li>• Segure bolsas e mochilas na frente</li>
                <li>• Evite carregar muito dinheiro</li>
                <li>• Não aceite "ajuda" de estranhos nas máquinas</li>
                <li>• Validadores ficam nas catracas</li>
                <li>• Multa por não validar: €50</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-primary-600 mb-3 flex items-center">
                <span className="mr-2">⏰</span>
                Horários de Funcionamento
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• <strong>Metrô:</strong> 5h30 - 1h15 (dom-qui)</li>
                <li>• <strong>Sexta/Sábado:</strong> até 2h15</li>
                <li>• <strong>RER:</strong> similar ao metrô</li>
                <li>• <strong>Ônibus:</strong> 7h - 20h30 (maioria)</li>
                <li>• <strong>Noctilien:</strong> ônibus noturnos após 00h30</li>
                <li>• Frequência reduzida após 21h</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-primary-600 mb-3 flex items-center">
                <span className="mr-2">📱</span>
                Apps Essenciais
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• <strong>Citymapper:</strong> melhor para rotas (imperdível!)</li>
                <li>• <strong>RATP:</strong> oficial, horários em tempo real</li>
                <li>• <strong>Google Maps:</strong> também funciona bem</li>
                <li>• <strong>Uber/Bolt:</strong> transporte privado</li>
                <li>• <strong>Vélib':</strong> para alugar bikes</li>
                <li>• <strong>Lime/Dott:</strong> patinetes elétricos</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Main Destinations */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="bg-gradient-to-br from-primary-500 to-secondary-500 text-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6">
            🗼 Tempo até Principais Atrações
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { name: "Torre Eiffel", time: "20 min", line: "Linha 8 + 6" },
              { name: "Louvre", time: "15 min", line: "Linha 8 + 1" },
              { name: "Notre-Dame", time: "10 min", line: "A pé ou Linha 8" },
              { name: "Montmartre", time: "20 min", line: "Linha 8 + 12" },
              { name: "Champs-Élysées", time: "20 min", line: "Linha 8 + 1" },
              { name: "Versalhes", time: "60 min", line: "Metrô + RER C" },
              { name: "CDG Aeroporto", time: "50 min", line: "Metrô + RER B" },
              { name: "Disneyland", time: "45 min", line: "Metrô + RER A" },
              { name: "Bastille", time: "8 min", line: "A pé!" },
            ].map((dest) => (
              <div key={dest.name} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <p className="font-bold text-lg mb-1">{dest.name}</p>
                <p className="text-sm text-primary-50 mb-1">⏱️ {dest.time}</p>
                <p className="text-xs text-primary-100">{dest.line}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

