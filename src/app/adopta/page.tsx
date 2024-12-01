import Image from "next/image"
import Link from "next/link"
import PetList from './PetList'

type Pet = {
  id: number
  name: string
  age: string
  category: string
  type: string
  imageUrl: string
}

async function getPets() {
  try {
    const res = await fetch('http://localhost:3001/api/pets', { 
      next: { revalidate: 60 },
      cache: 'no-store'
    })
    if (!res.ok) {
      throw new Error('Failed to fetch pets')
    }
    return res.json()
  } catch (error) {
    console.error('Error fetching pets:', error)
    return [] // Return an empty array if there's an error
  }
}

export default async function AdoptPage() {
  const pets = await getPets()

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
            revisa nuestros requisitos de adopción y completa el formulario de adopción.
          </p>

          {pets.length > 0 ? (
            <PetList pets={pets} />
          ) : (
            <p>No hay mascotas disponibles en este momento. Por favor, vuelve a revisar más tarde.</p>
          )}
        </div>
      </main>
    </div>
  )
}