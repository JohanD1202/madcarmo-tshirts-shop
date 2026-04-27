import { getTshirts } from '@/lib/services/tshirts_service'

export default async function Home() {
  const products = await getTshirts()
  
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Camisetas</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg p-4 shadow">
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-600 mt-2">${product.price.toLocaleString('es-CO')}</p>
            <p className="text-sm text-gray-500 mt-1">
              Tallas: {product.sizes_available.join(', ')}
            </p>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Agregar al carrito
            </button>
          </div>
        ))}
      </div>
    </main>
  )
}