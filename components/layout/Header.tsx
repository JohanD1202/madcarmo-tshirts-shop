'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Search, ShoppingCart } from 'lucide-react'
import ButtonTextBar from '../header/ButtonTextBar'
import logo from '@/public/images/logo_printerest.webp'

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

      {/* 🔸 Logo + búsqueda */}
      <div className="flex items-start">
        <div className="flex-1" />

        <Image
          src={logo}
          alt="Logo de la tienda"
          className="w-[150px] h-auto"
          priority
        />

        <div className="px-[300px] pt-[50px]">
          <button
            onClick={() => setIndiceWidget(5)}
            className="hover:bg-gray-300 p-2 rounded"
          >
            <Search size={40} />
          </button>
        </div>
      </div>

      {/* 🔸 Navbar */}
      <div className="flex items-center py-2">
        <div className="flex-1" />

        <ButtonTextBar text="Inicio" onClick={() => setIndiceWidget(0)} />
        <div className="w-[50px]" />

        <ButtonTextBar text="Hombre" onClick={() => setIndiceWidget(1)} />
        <div className="w-[50px]" />

        <ButtonTextBar text="Mujer" onClick={() => setIndiceWidget(2)} />
        <div className="w-[50px]" />

        <ButtonTextBar text="Niño" onClick={() => setIndiceWidget(3)} />
        <div className="w-[50px]" />

        <ButtonTextBar text="Niña" onClick={() => setIndiceWidget(4)} />
        <div className="w-[50px]" />

        <ButtonTextBar text="Guía de Tallas" onClick={() => setIndiceWidget(8)} />
        <div className="w-[50px]" />

        <button onClick={() => setIndiceWidget(7)}>
          <ShoppingCart size={30} />
        </button>

        <div className="flex-1" />
      </div>
    </div>
  )
}