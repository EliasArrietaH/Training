import { notFound } from "next/navigation";
import usuarios from "@/utils/dataMock";
import { IUser } from "@/interfaces/users";

type Props = {
  params: { id: string };
};

export default function DetalleUsuario({ params }: Props) {
  const usuario: IUser | undefined = usuarios.find((u) => u.id === params.id);

  if (!usuario) return notFound();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-100 p-10 flex flex-col items-center">
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full">
        <h2 className="text-2xl font-bold text-purple-700 mb-4">
          {usuario.nombre}
        </h2>
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
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Eliminar
          </button>
        </p>
      </div>
    </div>
  );
}
