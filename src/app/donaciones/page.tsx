import Link from "next/link";

export default function DonacionesPage() {
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
        <section className="py-12">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">Apoya Nuestra Causa</h2>
            <p className="mb-6 text-xl">
              Con tu ayuda podemos proporcionar alimentos, atención médica, y un refugio seguro para los animales en necesidad.
              Tu contribución hace una gran diferencia en la vida de cada animal rescatado.
            </p>
            <Link
              href="/donaciones"
              className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 transition duration-300"
            >
              Dona Ahora
            </Link>
          </div>
        </section>

        <section className="bg-gray-100 py-12">
          <div className="container mx-auto">
            <h2 className="text-2xl font-bold mb-4">Formas de Donar</h2>
            <ul className="list-disc list-inside mb-6">
              <li>Donaciones monetarias para apoyo veterinario y alimentación.</li>
              <li>Donación de alimentos y suministros.</li>
              <li>Patrocina a un animal hasta que encuentre un hogar.</li>
            </ul>
            <p>
              Si deseas realizar una donación, puedes contactarnos o utilizar nuestros canales de donación en línea.
              Todo apoyo es bienvenido y hace una gran diferencia.
            </p>
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 p-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Animalandia Centro de Rescate Animal. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}