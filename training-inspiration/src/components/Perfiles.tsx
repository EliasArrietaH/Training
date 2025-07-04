"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { IUser } from "@/interfaces/users";
import Image from "next/image";
import { getUsers } from "@/services/userService";

function Perfiles() {
  const [usuarios, setUsuarios] = React.useState<IUser[]>([]);
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      const response = await getUsers();
      setUsuarios(response);
      setLoading(false);
    };
    fetchUsers();
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-purple-50 to-blue-100 p-10">
      <div className="flex justify-end text-center mt-10 gap-2">
        <Link
          href="/"
          className=" bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-md transition"
        >
          Volver al Inicio
        </Link>
        <Link
          href="/formulario"
          className=" bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-md transition"
        >
          Crear Perfil
        </Link>
      </div>
      <h1 className="text-3xl font-bold text-center text-purple-700 mb-8">
        Perfiles de Usuarios
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 px-10 mx-24">
        {loading ? (
          <div className="col-span-2 flex justify-center items-center h-40">
            <span className="text-purple-600 text-xl font-semibold animate-pulse">
              Cargando usuarios...
            </span>
          </div>
        ) : usuarios.length === 0 ? (
          <div className="col-span-2 flex justify-center">
            <div className="flex w-full bg-white p-6 rounded-2xl shadow-lg border border-purple-100 items-center">
              <span className="text-gray-700 text-lg text-center">
                No hay usuarios disponibles.
              </span>
            </div>
          </div>
        ) : (
          usuarios.map((user: IUser) => (
            <Link href={`/usuarios/${user.id}`} key={user.id}>
              <div className="flex bg-white p-3 rounded-2xl shadow-lg hover:shadow-2xl transition border border-purple-100 cursor-pointer">
                <div className="flex items-center  ml-2 mr-6">
                  <Image
                    src={"/user.webp"}
                    alt={`Avatar de ${user.nombre}`}
                    width={80}
                    height={80}
                    className="flex items-center rounded-full object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <h2 className="text-xl font-semibold text-purple-700 mb-2">
                    {user.nombre}
                  </h2>
                  <p className="text-gray-700">
                    <strong>Especialidad:</strong> {user.especialidad}
                  </p>
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
      <div className="mt-4"></div>
    </div>
  );
}

export default Perfiles;
