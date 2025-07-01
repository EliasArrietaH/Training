import { IUser } from "@/interfaces/users";

export async function getUsers() {
  try {
    const res = await fetch(`http://localhost:3001/usuarios`, {
      method: "GET",
      next: { revalidate: 3600 },
      cache: "no-cache",
    });
    const users: IUser[] = await res.json();
    return users;
  } catch (error) {
    throw new Error(`Error al obtener los usuarios ${error}`);
  }
}
