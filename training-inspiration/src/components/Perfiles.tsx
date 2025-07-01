"use client";
import React from "react";
import usuarios from "@/utils/dataMock";
import Link from "next/link";
import { IUser } from "@/interfaces/users";
// import { getUsers } from "@/services/userService";

function Perfiles() {
  // const usuariosBack = getUsers(); //! Back
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-100 p-10">
      <h1 className="text-3xl font-bold text-center text-purple-700 mb-8">
        Perfiles de Usuarios
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {usuarios.map(
          (
            user: IUser //! {usuariosBack.map((user: IUser)... Cuando esté el back
          ) => (
            <Link href={`/usuarios/${user.id}`} key={user.id}>
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition border border-purple-100 cursor-pointer">
                <h2 className="text-xl font-semibold text-purple-700 mb-2">
                  {user.nombre}
                </h2>
                <p className="text-gray-700">
                  <strong>Especialidad:</strong> {user.especialidad}
                </p>
                <p className="text-gray-700">
                  <strong>Ciudad:</strong> {user.ciudad}
                </p>
              </div>
            </Link>
          )
        )}
      </div>
    </div>
  );
}

export default Perfiles;
