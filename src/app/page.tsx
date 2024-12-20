import Link from "next/link"
import Image from "next/image"

export default function BasicLandingPage() {
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

      <main className="flex-grow">
        <section className="relative h-[40vh] min-h-[300px]">
          <Image
            src="/background_hero.jpg"
            alt="Happy dog"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white">
              <h2 className="text-4xl font-bold mb-4">Bienvenido a Animalandia</h2>
              <p className="mb-6 text-xl">Rescatamos, rehabilitamos, y reubicamos animales sin hogar.</p>
              <Link 
                href="/adopta" 
                className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 transition duration-300"
              >
                Adopta una mascota
              </Link>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto">
            <h2 className="text-2xl font-bold mb-4">Nuestra Misión</h2>
            <p>
            Nos dedicamos a rescatar y proteger animales necesitados. A través de la atención médica,
            rehabilitación y amor, les damos una segunda oportunidad en la vida y les ayudamos a encontrar
            su hogar amado para siempre.
            </p>
          </div>
        </section>

        <section className="bg-gray-100 py-12">
          <div className="container mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Como puedes ayudar</h2>
            <ul className="mb-6">
              <li>Adopta una mascota</li>
              <li>Has una donación</li>
              <li>Sé voluntario</li>
              <li>Sirve de hogar de paso</li>
            </ul>
            <Link 
              href="/donaciones" 
              className="inline-block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Dona ahora
            </Link>
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 p-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Animalanda Centro de Rescate Animal. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}