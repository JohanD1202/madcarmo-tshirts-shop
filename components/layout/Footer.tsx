import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sobre nosotros */}
          <div>
            <h3 className="text-white font-semibold mb-4">MiTienda</h3>
            <p className="text-sm">Camisetas únicas desde 2024. Calidad y diseño en cada prenda.</p>
          </div>
          
          {/* Enlaces rápidos */}
          <div>
            <h3 className="text-white font-semibold mb-4">Enlaces</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/sobre" className="hover:text-white">Sobre nosotros</Link></li>
              <li><Link href="/terminos" className="hover:text-white">Términos y condiciones</Link></li>
              <li><Link href="/privacidad" className="hover:text-white">Política de privacidad</Link></li>
              <li><Link href="/envios" className="hover:text-white">Envíos</Link></li>
            </ul>
          </div>
          
          {/* Contacto */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2 text-sm">
              <li>📧 hola@mitienda.com</li>
              <li>📞 +57 300 123 4567</li>
              <li>📍 Bogotá, Colombia</li>
            </ul>
          </div>
          
          {/* Redes sociales */}
          <div>
            <h3 className="text-white font-semibold mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white">📷 Instagram</a>
              <a href="#" className="hover:text-white">🐦 Twitter</a>
              <a href="#" className="hover:text-white">📘 Facebook</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm">
          © 2025 MiTienda. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  )
}