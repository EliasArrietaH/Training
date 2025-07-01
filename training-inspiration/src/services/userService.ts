import { IUser } from "@/interfaces/users";
import { API } from "./config";

export async function getUsers() {
  try {
    const res = await fetch(`${API}/usuarios`, {
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

export async function getUserId(id: string) {
  try {
    const res = await fetch(`${API}/usuarios/${id}`, {
      method: "GET",
      next: { revalidate: 3600 },
      cache: "no-cache",
    });
    const user: IUser = await res.json();
    return user;
  } catch (error) {
    throw new Error(`Error al obtener el usuario ${error}`);
  }
}

export async function deleteUser(id: string) {
  try {
    const res = await fetch(`${API}/usuarios/${id}`, {
      method: "DELETE",
      next: { revalidate: 3600 },
      cache: "no-cache",
    });
    return await res.json();
  } catch (error) {
    throw new Error(`Error al obtener el usuario ${error}`);
  }
}
