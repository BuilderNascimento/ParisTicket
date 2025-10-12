import PlaceCard from "@/components/PlaceCard";
import { cafes } from "@/data/places";

export default function CafesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-amber-600 to-amber-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              ☕ Cafés & Padarias
            </h1>
            <p className="text-xl text-amber-50 max-w-2xl mx-auto">
              Os melhores cafés da manhã e pães quentinhos do bairro
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
          <p className="text-gray-700">
            <strong>🥐 Dica:</strong> Paris é famosa por seus croissants e pães! Compre sempre pela manhã 
            quando está quentinho. Uma baguette tradicional custa cerca de €1,20 e é perfeita para o café 
            da manhã no apartamento. Bon appétit! 
          </p>
        </div>
      </section>

      {/* Cafes Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cafes.map((cafe) => (
            <PlaceCard key={cafe.id} place={cafe} />
          ))}
        </div>
      </section>

      {/* French Breakfast Guide */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            🥐 Guia do Café da Manhã Francês
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-amber-50 p-6 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-3 text-lg">O que Pedir</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>🥐 <strong>Croissant</strong> - O clássico!</li>
                <li>🍫 <strong>Pain au Chocolat</strong> - Imperdível</li>
                <li>🧈 <strong>Pain au Beurre</strong> - Brioche amanteigado</li>
                <li>🥖 <strong>Baguette Tradition</strong> - A melhor</li>
                <li>☕ <strong>Café au Lait</strong> - Café com leite</li>
                <li>🍊 <strong>Jus d'Orange</strong> - Suco de laranja</li>
              </ul>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-3 text-lg">Como Pedir</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>👋 <strong>"Bonjour!"</strong> - Sempre!</li>
                <li>🥐 <strong>"Un croissant, s'il vous plaît"</strong></li>
                <li>☕ <strong>"Un café crème"</strong> - Cappuccino</li>
                <li>🥖 <strong>"Une baguette tradition"</strong></li>
                <li>💳 <strong>"Par carte"</strong> - Com cartão</li>
                <li>😊 <strong>"Merci, bonne journée!"</strong></li>
              </ul>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-3 text-lg">Dicas Importantes</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>⏰ Vá cedo (7h-9h) para pão fresco</li>
                <li>🪑 Sentado é mais caro que no balcão</li>
                <li>🥖 Baguette dura 1 dia só</li>
                <li>❄️ Pão congela bem!</li>
                <li>🏆 Boulangerie > Supermercado</li>
                <li>🚫 Domingo muitos fecham</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Coffee Culture */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-bold mb-4">
            ☕ Cultura do Café em Paris
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <p className="mb-4">
                <strong>Tipos de Café:</strong>
              </p>
              <ul className="space-y-1">
                <li>• <strong>Expresso</strong> - Café curto e forte</li>
                <li>• <strong>Café Allongé</strong> - Expresso com água</li>
                <li>• <strong>Café Crème</strong> - Com leite vaporizado</li>
                <li>• <strong>Noisette</strong> - Expresso com um pouco de leite</li>
                <li>• <strong>Café au Lait</strong> - Metade café, metade leite</li>
              </ul>
            </div>
            <div>
              <p className="mb-4">
                <strong>Etiqueta:</strong>
              </p>
              <ul className="space-y-1">
                <li>• Cappuccino só de manhã!</li>
                <li>• Expresso após as refeições</li>
                <li>• "Bonjour" é obrigatório</li>
                <li>• Gorjeta não é necessária</li>
                <li>• WiFi: pergunte a senha (le code WiFi)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

