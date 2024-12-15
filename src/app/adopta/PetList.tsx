"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

type Pet = {
  id: number
  name: string
  age: string
  category: string
  type: string
  imageUrl: string
}

export default function PetList({ pets }: { pets: Pet[] }) {
  const [activeFilter, setActiveFilter] = useState<'all' | 'puppy' | 'young' | 'senior'>('all')

  const filteredPets = activeFilter === 'all' 
    ? pets 
    : pets.filter(pet => pet.category === activeFilter);

  return (
    <>
      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-4 mb-8">
        <button
          onClick={() => setActiveFilter('all')}
          className={`px-4 py-2 rounded transition-colors ${
            activeFilter === 'all' 
              ? 'bg-blue-500 text-white' 
              : 'bg-gray-200 hover:bg-gray-300'
          }`}
        >
          Todos
        </button>
        <button
          onClick={() => setActiveFilter('puppy')}
          className={`px-4 py-2 rounded transition-colors ${
            activeFilter === 'puppy' 
              ? 'bg-blue-500 text-white' 
              : 'bg-gray-200 hover:bg-gray-300'
          }`}
        >
          Cachorros
        </button>
        <button
          onClick={() => setActiveFilter('young')}
          className={`px-4 py-2 rounded transition-colors ${
            activeFilter === 'young' 
              ? 'bg-blue-500 text-white' 
              : 'bg-gray-200 hover:bg-gray-300'
          }`}
        >
          Jovenes
        </button>
        <button
          onClick={() => setActiveFilter('senior')}
          className={`px-4 py-2 rounded transition-colors ${
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
          <div key={pet.id} className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative h-48">
              <Image
                src={pet.imageUrl}
                alt={`${pet.name} - ${pet.type}`}
                fill
                style={{ objectFit: "cover" }}
                onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "/placeholder.svg?height=300&width=300";
                }}
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg">{pet.name}</h3>
              <p className="text-gray-600">Edad: {pet.age} años</p>
              <p className="text-gray-600">Tipo: {pet.type}</p>
              <Link 
                href={`/adopta/${pet.id}`}
                className="mt-2 inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
              >
                Conóceme
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}