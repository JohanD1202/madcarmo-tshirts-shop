import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import { Fredoka } from 'next/font/google';
import './globals.css'

// Fuente global
const fredoka = Fredoka({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-fredoka',
})

// Metadatos SEO (globales)
export const metadata: Metadata = {
  title: {
    default: 'Mi Tienda de Camisetas',
    template: '%s | Mi Tienda'  // Para páginas específicas: "Productos | Mi Tienda"
  },
  description: 'Envíos a toda Colombia',
  keywords: ['camisetas', 'ropa', 'moda', 'estampados'],
  authors: [{ name: 'Tu Nombre' }],
  openGraph: {
    title: 'Mi Tienda de Camisetas',
    //description: 'Camisetas únicas en algodón 100%',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="light">
      <body className={fredoka.variable}>
        {/* 
          1. PROVEEDORES GLOBALES (Context)
          Ejemplo: 
          <CartProvider>
          <AuthProvider>
        */}
        
        {
        <Header>
          
        </Header>/* 
          2. HEADER (común)
          <Header />
        */}
        
        {/* 
          3. CONTENIDO PRINCIPAL
          flex-grow: empuja el footer hacia abajo si el contenido es corto
        */}
        <main className="flex-grow">
          {children}
        </main>
        
        {/* 
          4. FOOTER (común)
          <Footer />
        */}
        
        {/* 
          5. MODALES GLOBALES
          Ejemplo: <ToastContainer />, <NotificationModal />
        */}
      </body>
    </html>
  )
}