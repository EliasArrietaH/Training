"use client";
import React, { useState } from "react";

const Formulario = () => {
  const [form, setForm] = useState({
    nombre: "",
    ciudad: "",
    especialidad: "",
    email: "",
  });

  const [errors, setErrors] = useState({
    nombre: "",
    ciudad: "",
    especialidad: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validarEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validate = () => {
    const newErrors: typeof errors = {
      nombre: "",
      ciudad: "",
      especialidad: "",
      email: "",
    };
    let isValid = true;

    if (!form.nombre.trim()) {
      newErrors.nombre = "El nombre es obligatorio";
      isValid = false;
    }
    if (!form.ciudad.trim()) {
      newErrors.ciudad = "La ciudad es obligatoria";
      isValid = false;
    }
    if (!form.especialidad.trim()) {
      newErrors.especialidad = "La especialidad es obligatoria";
      isValid = false;
    }
    if (!form.email.trim()) {
      newErrors.email = "El email es obligatorio";
      isValid = false;
    } else if (!validarEmail(form.email)) {
      newErrors.email = "El email no es válido";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      alert("Formulario enviado correctamente ✅");
      console.log(form);
      // backend
      setForm({ nombre: "", ciudad: "", especialidad: "", email: "" });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-100 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md space-y-4"
      >
        <h2 className="text-2xl font-semibold text-purple-700">Formulario</h2>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Nombre
          </label>
          <input
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
            className={`mt-1 block w-full border ${
              errors.nombre ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 p-2`}
          />
          {errors.nombre && (
            <p className="text-red-500 text-sm">{errors.nombre}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Ciudad
          </label>
          <input
            name="ciudad"
            value={form.ciudad}
            onChange={handleChange}
            className={`mt-1 block w-full border ${
              errors.ciudad ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 p-2`}
          />
          {errors.ciudad && (
            <p className="text-red-500 text-sm">{errors.ciudad}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Especialidad
          </label>
          <input
            name="especialidad"
            value={form.especialidad}
            onChange={handleChange}
            className={`mt-1 block w-full border ${
              errors.especialidad ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 p-2`}
          />
          {errors.especialidad && (
            <p className="text-red-500 text-sm">{errors.especialidad}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            className={`mt-1 block w-full border ${
              errors.email ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 p-2`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </div>

        {/* Botón */}
        <button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-md transition"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Formulario;
