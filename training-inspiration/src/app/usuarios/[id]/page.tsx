import { notFound } from "next/navigation";
// import usuarios from "@/utils/dataMock";
//import { IUser } from "@/interfaces/users";
import { deleteUser, getUserId } from "@/services/userService";
import Link from "next/link";
import Image from "next/image";
import { toast } from "sonner";
import DetallePerfiles from "@/components/DetallePerfiles";

type Props = {
  params: { id: string };
};

export default async function DetalleUsuario({ params }: Props) {
  const usuario = await getUserId(params.id);

  // const usuario: IUser | undefined = usuarios.find((u) => u.id === params.id);
  // console.log("usuario", usuario);

  if (!usuario) return notFound();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-100 p-10 flex flex-col items-center">
      <DetallePerfiles usuario={usuario} />
      <div className="mt-8">
        <Link
          href="/usuarios"
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-md transition"
        >
          Volver a Usuarios
        </Link>
      </div>
    </div>
  );
}
