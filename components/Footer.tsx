import Link from "next/link";
import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Sobre o Apartamento</h4>
            <p className="text-gray-400 text-sm mb-4">
              8 Impasse Saint Sébastien<br />
              75011 Paris, França
            </p>
            <p className="text-gray-400 text-sm">
              Seu guia completo para aproveitar o melhor de Paris e do bairro Le Marais.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/apartamento" className="text-gray-400 hover:text-white transition-colors">
                  Guia do Apartamento
                </Link>
              </li>
              <li>
                <Link href="/transporte" className="text-gray-400 hover:text-white transition-colors">
                  Como Chegar
                </Link>
              </li>
              <li>
                <Link href="/info" className="text-gray-400 hover:text-white transition-colors">
                  Informações Úteis
                </Link>
              </li>
              <li>
                <Link href="/tours" className="text-gray-400 hover:text-white transition-colors">
                  Tours & Ingressos
                </Link>
              </li>
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Explorar</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/restaurantes" className="text-gray-400 hover:text-white transition-colors">
                  🍽️ Restaurantes
                </Link>
              </li>
              <li>
                <Link href="/cafes" className="text-gray-400 hover:text-white transition-colors">
                  ☕ Cafés & Padarias
                </Link>
              </li>
              <li>
                <Link href="/bares" className="text-gray-400 hover:text-white transition-colors">
                  🍺 Bares & Vida Noturna
                </Link>
              </li>
              <li>
                <Link href="/compras" className="text-gray-400 hover:text-white transition-colors">
                  🛒 Compras
                </Link>
              </li>
            </ul>
          </div>

          {/* Location */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Localização</h4>
            <p className="text-gray-400 text-sm">
              No coração do Marais, um dos bairros mais charmosos e vibrantes de Paris.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p className="flex items-center justify-center">
            Feito com <Heart className="w-4 h-4 mx-1 text-red-500" /> para nossos hóspedes
          </p>
          <p className="mt-2">
            © {new Date().getFullYear()} 8 Impasse Saint Sébastien. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

