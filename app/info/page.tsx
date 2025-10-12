"use client";

import InfoSection from "@/components/InfoSection";
import { Phone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function InfoPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-red-600 to-red-500 text-white pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
              {t("info.title")}
            </h1>
            <p className="text-lg md:text-xl text-red-50 max-w-2xl mx-auto">
              {t("info.subtitle")}
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Emergency Numbers */}
        <div className="bg-red-50 border-2 border-red-300 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-red-900 mb-6 flex items-center">
            <Phone className="w-6 h-6 mr-3" />
            🚨 Números de Emergência
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4 border-l-4 border-red-500">
              <p className="font-bold text-gray-900 text-lg mb-1">🚨 Emergência Geral</p>
              <a href="tel:112" className="text-3xl font-bold text-red-600">112</a>
              <p className="text-sm text-gray-600 mt-1">Funciona em toda Europa</p>
            </div>
            <div className="bg-white rounded-lg p-4 border-l-4 border-blue-500">
              <p className="font-bold text-gray-900 text-lg mb-1">👮 Polícia</p>
              <a href="tel:17" className="text-3xl font-bold text-blue-600">17</a>
              <p className="text-sm text-gray-600 mt-1">Police Nationale</p>
            </div>
            <div className="bg-white rounded-lg p-4 border-l-4 border-red-500">
              <p className="font-bold text-gray-900 text-lg mb-1">🚒 Bombeiros</p>
              <a href="tel:18" className="text-3xl font-bold text-red-600">18</a>
              <p className="text-sm text-gray-600 mt-1">Sapeurs-Pompiers</p>
            </div>
            <div className="bg-white rounded-lg p-4 border-l-4 border-green-500">
              <p className="font-bold text-gray-900 text-lg mb-1">🚑 SAMU (Ambulância)</p>
              <a href="tel:15" className="text-3xl font-bold text-green-600">15</a>
              <p className="text-sm text-gray-600 mt-1">Emergência médica</p>
            </div>
          </div>
        </div>


        {/* Health */}
        <InfoSection icon="🏥" title="Saúde e Hospitais" defaultOpen>
          <div className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-bold text-gray-900 mb-2">Hôpital Saint-Antoine</h4>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Endereço:</strong> 184 Rue du Faubourg Saint-Antoine, 75012 Paris
              </p>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Distância:</strong> 10 minutos de táxi
              </p>
              <p className="text-sm text-gray-700">
                <strong>Tel:</strong> <a href="tel:+33149282000" className="text-primary-600">+33 1 49 28 20 00</a>
              </p>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-bold text-gray-900 mb-2">💊 Farmácias 24h</h4>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Pharmacie Châtelet Les Halles:</strong> 10 Boulevard de Sébastopol, 75004
              </p>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Pharmacie des Champs:</strong> 84 Avenue des Champs-Élysées, 75008
              </p>
              <p className="text-sm text-gray-700">
                Busque por "pharmacie de garde" para outras opções
              </p>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-400 p-4">
              <p className="text-sm text-gray-700">
                <strong>💡 Dica:</strong> Farmácias francesas são muito qualificadas. Para problemas menores, 
                vá direto na farmácia antes de ir ao médico. Farmacêuticos podem receitar alguns medicamentos.
              </p>
            </div>
          </div>
        </InfoSection>

        {/* Police Stations */}
        <InfoSection icon="👮" title="Delegacias Próximas">
          <div className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-bold text-gray-900 mb-2">Commissariat du 11e Arrondissement</h4>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Endereço:</strong> 12-14 Rue de la Roquette, 75011 Paris
              </p>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Distância:</strong> 8 minutos a pé
              </p>
              <p className="text-sm text-gray-700">
                <strong>Tel:</strong> +33 1 53 36 18 00
              </p>
            </div>
            
            <div className="bg-amber-50 border-l-4 border-amber-400 p-4">
              <p className="text-sm text-gray-700">
                <strong>📋 Para denúncias:</strong> Leve documento de identidade. Se não falar francês, 
                use Google Tradutor. Eles são acostumados com turistas.
              </p>
            </div>
          </div>
        </InfoSection>

        {/* Embassies */}
        <InfoSection icon="🏛️" title="Embaixadas e Consulados">
          <div className="space-y-4">
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                <span className="mr-2">🇧🇷</span> Embaixada do Brasil
              </h4>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Endereço:</strong> 34 Cours Albert 1er, 75008 Paris
              </p>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Tel:</strong> <a href="tel:+33145616300" className="text-primary-600">+33 1 45 61 63 00</a>
              </p>
              <p className="text-sm text-gray-700">
                <strong>Emergências:</strong> +33 6 03 33 38 25 (24h)
              </p>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                <span className="mr-2">🇵🇹</span> Embaixada de Portugal
              </h4>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Endereço:</strong> 3 Rue de Noisiel, 75116 Paris
              </p>
              <p className="text-sm text-gray-700">
                <strong>Tel:</strong> +33 1 47 27 35 29
              </p>
            </div>
          </div>
        </InfoSection>

        {/* Safety Tips */}
        <InfoSection icon="🔒" title="Dicas de Segurança">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-bold text-gray-900 mb-3">✅ Faça</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>✓ Mantenha objetos de valor escondidos</li>
                <li>✓ Use bolsa/mochila na frente</li>
                <li>✓ Guarde cópias dos documentos</li>
                <li>✓ Tenha foto do passaporte no celular</li>
                <li>✓ Use apps de transporte à noite</li>
                <li>✓ Fique atento em lugares turísticos</li>
                <li>✓ Guarde o endereço do apartamento</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-3">❌ Evite</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>✗ Deixar bolsa em cadeira de café</li>
                <li>✗ Usar celular em locais muito movimentados</li>
                <li>✗ Aceitar "ajuda" de estranhos</li>
                <li>✗ Assinar petições de estranhos</li>
                <li>✗ Jogar "jogos" de rua</li>
                <li>✗ Comprar de vendedores ambulantes</li>
                <li>✗ Andar sozinho em áreas desertas à noite</li>
              </ul>
            </div>
          </div>
        </InfoSection>

        {/* Weather */}
        <InfoSection icon="☀️" title="Clima e Estações">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-4 rounded-lg">
              <h4 className="font-bold text-gray-900 mb-2">❄️ Inverno (Dez-Fev)</h4>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Temperatura:</strong> 3-8°C
              </p>
              <p className="text-sm text-gray-700">
                Frio! Leve casaco pesado, cachecol e luvas. Raramente neva.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-green-100 to-green-50 p-4 rounded-lg">
              <h4 className="font-bold text-gray-900 mb-2">🌸 Primavera (Mar-Mai)</h4>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Temperatura:</strong> 10-18°C
              </p>
              <p className="text-sm text-gray-700">
                Agradável! Casaco leve. Período lindo para visitar.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-100 to-yellow-50 p-4 rounded-lg">
              <h4 className="font-bold text-gray-900 mb-2">☀️ Verão (Jun-Ago)</h4>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Temperatura:</strong> 20-30°C
              </p>
              <p className="text-sm text-gray-700">
                Quente! Roupas leves. Pico de turismo. Protetor solar!
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-orange-100 to-orange-50 p-4 rounded-lg">
              <h4 className="font-bold text-gray-900 mb-2">🍂 Outono (Set-Nov)</h4>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Temperatura:</strong> 10-20°C
              </p>
              <p className="text-sm text-gray-700">
                Agradável! Casaco. Cores lindas. Ótima época!
              </p>
            </div>
          </div>
        </InfoSection>

        {/* Useful Phrases */}
        <InfoSection icon="💬" title="Frases Úteis em Francês">
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            {[
              { pt: "Olá / Bom dia", fr: "Bonjour", pron: "bon-júr" },
              { pt: "Boa tarde / Boa noite", fr: "Bonsoir", pron: "bon-suár" },
              { pt: "Por favor", fr: "S'il vous plaît", pron: "sil vu plê" },
              { pt: "Obrigado(a)", fr: "Merci", pron: "mer-sí" },
              { pt: "Desculpe", fr: "Pardon / Excusez-moi", pron: "par-dón / eks-ku-zê muá" },
              { pt: "Não falo francês", fr: "Je ne parle pas français", pron: "jê nê parl pá fran-sê" },
              { pt: "Você fala inglês?", fr: "Parlez-vous anglais?", pron: "par-lê vu an-glê" },
              { pt: "Quanto custa?", fr: "C'est combien?", pron: "sê con-bián" },
              { pt: "A conta, por favor", fr: "L'addition, s'il vous plaît", pron: "la-di-sión sil vu plê" },
              { pt: "Onde fica...?", fr: "Où est...?", pron: "u ê" },
              { pt: "Preciso de ajuda", fr: "J'ai besoin d'aide", pron: "jê be-zuán déd" },
              { pt: "Estou perdido(a)", fr: "Je suis perdu(e)", pron: "jê suí per-dú" },
            ].map((phrase, index) => (
              <div key={index} className="bg-primary-50 p-3 rounded-lg">
                <p className="text-gray-900 font-semibold">{phrase.pt}</p>
                <p className="text-primary-600 font-bold text-lg">{phrase.fr}</p>
                <p className="text-gray-500 text-xs italic">{phrase.pron}</p>
              </div>
            ))}
          </div>
        </InfoSection>

        {/* Important Info */}
        <InfoSection icon="ℹ️" title="Informações Gerais">
          <div className="space-y-4 text-sm text-gray-700">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-bold text-gray-900 mb-2">🔌 Eletricidade</h4>
                <p>220V - Tomada tipo E (dois pinos redondos + terra)</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">🚰 Água</h4>
                <p>Água da torneira é potável e de excelente qualidade</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">💶 Moeda</h4>
                <p>Euro (EUR) - Cartão aceito em quase todos os lugares</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">🕐 Fuso Horário</h4>
                <p>GMT+1 (CET) | Verão: GMT+2 (CEST)</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">💡 Gorjetas</h4>
                <p>Serviço incluído. 5-10% opcional se muito satisfeito</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">📶 WiFi</h4>
                <p>Muitos cafés e restaurantes oferecem WiFi grátis</p>
              </div>
            </div>
          </div>
        </InfoSection>
      </div>
    </div>
  );
}

