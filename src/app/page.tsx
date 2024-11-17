import Link from "next/link"

export default function BasicLandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-100 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Animalandia Centro de Rescate Animal</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><Link href="#" className="hover:underline">Inicio</Link></li>
              <li><Link href="#" className="hover:underline">Adopta</Link></li>
              <li><Link href="#" className="hover:underline">Donaciones</Link></li>
              <li><Link href="#" className="hover:underline">Contacto</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <section className="bg-gray-200 py-12">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Bienvenidos a la web de rescate animal</h2>
            <p className="mb-6">Rescatamos, rehabilitamos, y reubicamos a peluditos en necesidad.</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Adopta una mascota
            </button>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
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
            <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
              Dona ahora
            </button>
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