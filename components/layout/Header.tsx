'use client'

import { useState } from 'react'
import { Search, ShoppingCart, User } from 'lucide-react'
import ButtonTextBar from '../header/ButtonTextBar'

export default function Header() {
  const [indiceWidget, setIndiceWidget] = useState(0)
  const styleTextHeader = "text-sm font-normal text-gray-700 tracking-wide"

  return (
    <div className="flex flex-col w-full">

      {/* 🔸 Barra superior */}
      <div className="w-full h-[40px] bg-gray-300 flex items-center">
        <div className="flex-[5]" />

        <span className={styleTextHeader}>
          ENVÍO GRATIS AL COMPRAR 3 O MÁS CAMISETAS
        </span>

        <div className="w-5" />
        <span className={styleTextHeader}>|</span>
        <div className="w-5" />

        <span className={styleTextHeader}>
          6 CAMISETAS x $255.000
        </span>

        <div className="flex-[2]" />
        <span className={styleTextHeader}>|</span>

        <button
          onClick={() => setIndiceWidget(6)}
          className="h-[40px] w-[200px] bg-gray-300 text-gray-700 text-sm font-medium"
        >
          ¿NECESITAS AYUDA?
        </button>

        <span className={styleTextHeader}>|</span>
        <div className="flex-1" />
      </div>

      {/* 🔸 Navbar */}
      <div className="relative flex items-center justify-between py-4 px-6">

        {/* 🔹 IZQUIERDA */}
        <div className="flex items-center gap-8">
          <ButtonTextBar text="Inicio" onClick={() => setIndiceWidget(0)} />
          <ButtonTextBar text="Hombre" onClick={() => setIndiceWidget(1)} />
          <ButtonTextBar text="Mujer" onClick={() => setIndiceWidget(2)} />
          <ButtonTextBar text="Niño" onClick={() => setIndiceWidget(3)} />
          <ButtonTextBar text="Niña" onClick={() => setIndiceWidget(4)} />
          <ButtonTextBar text="Guía de Tallas" onClick={() => setIndiceWidget(8)} />
        </div>

        {/* 🔹 CENTRO (LOGO TEXTO) */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[60%]">
          <span className="text-3xl font-semibold tracking-[0.1em]">
            Madcarmo
          </span>
        </div>

        {/* 🔹 DERECHA */}
        <div className="flex items-center gap-6">

          {/* 👤 Usuario */}
          <button className="hover:bg-gray-200 p-2 rounded">
            <User size={26} />
          </button>

          {/* 🛒 */}
          <button onClick={() => setIndiceWidget(7)}>
            <ShoppingCart size={26} />
          </button>

          {/* 🔍 */}
          <button
            onClick={() => setIndiceWidget(5)}
            className="hover:bg-gray-200 p-2 rounded"
          >
            <Search size={26} />
          </button>

        </div>
      </div>
    </div>
  )
}