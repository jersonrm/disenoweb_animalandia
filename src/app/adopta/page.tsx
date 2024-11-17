"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

type Pet = {
  id: number
  name: string
  age: string
  category: 'puppy' | 'young' | 'senior'
  imageUrl: string
}

export default function AdoptPage() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'puppy' | 'young' | 'senior'>('all')


  const pets: Pet[] = [
    {
      id: 1,
      name: "Max",
      age: "2 meses",
      category: "puppy",
      imageUrl: "/pets/max.jpg"
    },
    {
      id: 2,
      name: "Luna",
      age: "1 año",
      category: "young",
      imageUrl: "/pets/luna.jpg"
    },
    {
      id: 3,
      name: "Rocky",
      age: "8 años",
      category: "senior",
      imageUrl: "/pets/rocky.jpg"
    },
 
  ]

  const filteredPets = activeFilter === 'all' 
    ? pets 
    : pets.filter(pet => pet.category === activeFilter)

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-100 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Animalandia Centro de Rescate Animal</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><Link href="/" className="hover:underline">Inicio</Link></li>
              <li><Link href="/adopta" className="hover:underline">Adopta</Link></li>
              <li><Link href="/donaciones" className="hover:underline">Donaciones</Link></li>
              <li><Link href="/contacto" className="hover:underline">Contacto</Link></li>
            </ul>
          </nav>
        </div>
      </header>
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px]">
        <Image
          src="/background_hero.jpg"
          alt="Happy dog"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-2">Encuentra tu amigo peludo</h1>
            <p className="text-xl">Adopta y regalale un hogar a un angelito</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Mascotas disponibles para adopción</h2>
          <p className="mb-8">
          Estos son nuestros ángeles que buscan su hogar definitivo. Una vez que elijas tu futura mascota,
          Revisa nuestros requisitos de adopción y complete el formulario de adopción.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-4 mb-8">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded ${
                activeFilter === 'all' 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-200 hover:bg-gray-300'
              }`}
            >
              Todos
            </button>
            <button
              onClick={() => setActiveFilter('puppy')}
              className={`px-4 py-2 rounded ${
                activeFilter === 'puppy' 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-200 hover:bg-gray-300'
              }`}
            >
              Cachorros
            </button>
            <button
              onClick={() => setActiveFilter('young')}
              className={`px-4 py-2 rounded ${
                activeFilter === 'young' 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-200 hover:bg-gray-300'
              }`}
            >
              Jovenes
            </button>
            <button
              onClick={() => setActiveFilter('senior')}
              className={`px-4 py-2 rounded ${
                activeFilter === 'senior' 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-200 hover:bg-gray-300'
              }`}
            >
              Abuelitos
            </button>
          </div>

          {/* Pet Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredPets.map((pet) => (
              <div key={pet.id} className="border rounded-lg overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={pet.imageUrl}
                    alt={pet.name}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold">{pet.name}</h3>
                  <p className="text-gray-600">{pet.age}</p>
                  <Link 
                    href={`/adopta/${pet.id}`}
                    className="mt-2 inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  >
                    Conóceme
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}