"use client";
import { IUser } from "@/interfaces/users";
import { deleteUser } from "@/services/userService";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "sonner";

const DetallePerfiles = ({ usuario }: { usuario: IUser }) => {
  const router = useRouter();
  const handleDelete = async () => {
    try {
      const response = await deleteUser(usuario.id);
      toast.success(response.message);
      router.push("/usuarios");
    } catch (error) {
      toast.error(`Error al eliminar el usuario ${error}`);
    }
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-100 p-8 rounded-2xl shadow-xl max-w-md w-full">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-purple-700 mb-4">
          {usuario.nombre}
        </h2>
        <Image
          src={"/user.webp"}
          alt={`Avatar de ${usuario.nombre}`}
          width={80}
          height={80}
          className="flex items-center rounded-full object-cover"
        />
      </div>
      <p className="text-gray-700 mb-2">
        <strong>Edad:</strong> {usuario.edad}
      </p>
      <p className="text-gray-700 mb-2">
        <strong>Ciudad:</strong> {usuario.ciudad}
      </p>
      <p className="text-gray-700 mb-2">
        <strong>Especialidad:</strong> {usuario.especialidad}
      </p>
      <p className="text-gray-700 mb-2">
        <strong>Email:</strong> {usuario.email}
      </p>
      <p className="text-gray-700 mb-2">
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleDelete}
        >
          Eliminar
        </button>
      </p>
    </div>
  );
};

export default DetallePerfiles;
