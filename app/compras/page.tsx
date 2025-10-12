import PlaceCard from "@/components/PlaceCard";
import { supermarkets } from "@/data/places";

export default function ComprasPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-green-600 to-green-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              🛒 Supermercados & Farmácias
            </h1>
            <p className="text-xl text-green-50 max-w-2xl mx-auto">
              Onde comprar o essencial perto do apartamento
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-r-lg">
          <p className="text-gray-700">
            <strong>🛍️ Dica:</strong> Supermercados em Paris são menores que no Brasil. Existem várias 
            redes: Franprix, Carrefour, Monoprix. Para economia, evite comprar água (torneira é potável) 
            e vá aos mercados de rua aos domingos! 
          </p>
        </div>
      </section>

      {/* Places Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {supermarkets.map((place) => (
            <PlaceCard key={place.id} place={place} />
          ))}
        </div>
      </section>

      {/* Shopping Guide */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            🛒 Guia de Compras em Paris
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-3">🥖 Padaria (Boulangerie)</h3>
              <p className="text-sm text-gray-700 mb-2"><strong>O que comprar:</strong></p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Baguette (€1-1.50)</li>
                <li>• Croissants</li>
                <li>• Pães especiais</li>
                <li>• Às vezes tem sanduíches</li>
              </ul>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-3">🛒 Supermercado</h3>
              <p className="text-sm text-gray-700 mb-2"><strong>O que comprar:</strong></p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Laticínios e queijos</li>
                <li>• Frutas e verduras</li>
                <li>• Bebidas</li>
                <li>• Produtos de limpeza</li>
              </ul>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-3">🍖 Açougue (Boucherie)</h3>
              <p className="text-sm text-gray-700 mb-2"><strong>O que comprar:</strong></p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Carnes frescas</li>
                <li>• Charcutaria</li>
                <li>• Qualidade superior</li>
                <li>• Peça ao vendedor</li>
              </ul>
            </div>

            <div className="bg-red-50 p-6 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-3">💊 Farmácia (Pharmacie)</h3>
              <p className="text-sm text-gray-700 mb-2"><strong>O que comprar:</strong></p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Medicamentos</li>
                <li>• Cosméticos</li>
                <li>• Produtos de higiene</li>
                <li>• Cruz verde iluminada</li>
              </ul>
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-3">🍎 Mercado de Rua</h3>
              <p className="text-sm text-gray-700 mb-2"><strong>O que comprar:</strong></p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Frutas frescas</li>
                <li>• Legumes da estação</li>
                <li>• Queijos artesanais</li>
                <li>• Domingo de manhã!</li>
              </ul>
            </div>

            <div className="bg-orange-50 p-6 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-3">🏪 Conveniência</h3>
              <p className="text-sm text-gray-700 mb-2"><strong>O que comprar:</strong></p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Aberto até tarde</li>
                <li>• Mais caro</li>
                <li>• Para emergências</li>
                <li>• Alguns 24h</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Price Guide */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            💰 Guia de Preços (Aproximados)
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-bold text-primary-600 mb-3">Básicos</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>🥖 Baguette: €1-1.50</li>
                <li>🥛 Leite (1L): €1-1.50</li>
                <li>🧈 Manteiga: €2-4</li>
                <li>🥚 Ovos (6): €2-3</li>
                <li>🧀 Queijo (200g): €3-8</li>
                <li>☕ Café (250g): €3-6</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-primary-600 mb-3">Frutas & Verduras</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>🍎 Maçãs (kg): €2-3</li>
                <li>🍌 Bananas (kg): €2-3</li>
                <li>🍅 Tomates (kg): €3-5</li>
                <li>🥗 Alface: €1-2</li>
                <li>🥕 Cenouras (kg): €2-3</li>
                <li>🍊 Laranjas (kg): €2-4</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-primary-600 mb-3">Bebidas & Outros</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>💧 Água (1.5L): €0.50-1</li>
                <li>🍷 Vinho: €5-15</li>
                <li>🍺 Cerveja (6): €5-10</li>
                <li>🥤 Refrigerante: €1-2</li>
                <li>🍫 Chocolate: €2-5</li>
                <li>🍝 Massa (500g): €1-2</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 bg-amber-50 border-l-4 border-amber-400 p-4">
            <p className="text-sm text-gray-700">
              <strong>💡 Dica:</strong> Marcas próprias (ex: Carrefour Bio) são mais baratas e de boa qualidade. 
              Mercados de rua geralmente têm preços melhores para frutas e verduras!
            </p>
          </div>
        </div>
      </section>

      {/* Useful Info */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
          <h3 className="font-bold text-gray-900 mb-4 text-lg">
            ℹ️ Informações Úteis
          </h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
            <div>
              <strong>🚰 Água da torneira:</strong> Potável e de ótima qualidade! Não precisa comprar água.
            </div>
            <div>
              <strong>♻️ Reciclagem:</strong> Amarelo = reciclável | Verde = vidro | Preto = orgânico
            </div>
            <div>
              <strong>🛍️ Sacolas:</strong> Não são grátis! Custa €0,10-0,50. Leve sua própria sacola.
            </div>
            <div>
              <strong>📅 Domingos:</strong> Muitos supermercados fecham ou abrem meio período.
            </div>
            <div>
              <strong>💳 Cartão:</strong> Aceito em todos. Mínimo às vezes é €5-10.
            </div>
            <div>
              <strong>🧾 Nota fiscal:</strong> Guarde! Pode precisar para troca dentro de 30 dias.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

