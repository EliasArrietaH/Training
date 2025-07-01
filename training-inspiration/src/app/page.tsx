import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center gap-10 min-h-screen p-8 pb-20 sm:p-20  bg-gradient-to-br from-blue-50 to-purple-100">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Link
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-md transition"
          href="/formulario"
        >
          Formulario
        </Link>
      </main>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Link
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-md transition"
          href="/usuarios"
        >
          Usuarios
        </Link>
      </main>
    </div>
  );
}
