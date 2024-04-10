import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Perfil = () => {
  const [nombre, setNombre] = useState("Fernando Mauricio Castillo Rosales");
  const [correo, setCorreo] = useState("equipoDinamita@outlook.com");
  const [contrasena, setContrasena] = useState("fernando");
  const [departamento, setDepartamento] = useState("");

  const handleNombreChange = (e) => {
    setNombre(e.target.value);
  };

  const handleCorreoChange = (e) => {
    setCorreo(e.target.value);
  };

  const handleContrasenaChange = (e) => {
    setContrasena(e.target.value);
  };

  const handleDepartamentoChange = (e) => {
    setDepartamento(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Formulario enviado");
  };

  return (
    <div>
      <div className="p-4 mt-20 text-6xl text-center font-bold flex items-center justify-center">
        Perfil de Usuario
      </div>

      <div className="container mx-auto">
        <div className="flex flex-col items-center h-screen mt-10">
          <div className="w-3/4 mt-4 mb-8">
            <div
              className="bg-white shadow-md rounded-md p-10"
              style={{ backgroundColor: "#f4f4f4", borderRadius: "1rem" }}
            >
              <div className="flex items-center justify-center mb-4">
                <div className="w-32 h-32 bg-gray-300 rounded-full overflow-hidden flex items-center justify-center relative">
                  <FontAwesomeIcon
                    icon={faUser}
                    className="text-5xl text-gray-500 absolute"
                  />
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label
                    htmlFor="nombre"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Nombre
                  </label>
                  <div className="flex items-center">
                    <input
                      type="text"
                      id="nombre"
                      className="shadow appearance-none border rounded-full w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-2"
                      placeholder="Nombre"
                      value={nombre}
                      onChange={handleNombreChange}
                    />
                    <input
                      type="email"
                      id="correo"
                      className="shadow appearance-none border rounded-full w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ml-2"
                      placeholder="Correo"
                      value={correo}
                      onChange={handleCorreoChange}
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="contrasena"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Contraseña
                  </label>
                  <input
                    type="password"
                    id="contrasena"
                    className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Contraseña"
                    value={contrasena}
                    onChange={handleContrasenaChange}
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="departamento"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Departamento
                  </label>
                  <select
                    id="departamento"
                    className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={departamento}
                    onChange={handleDepartamentoChange}
                  >
                    <option value="">Seleccione un departamento</option>
                    <option value="Ventas">Compras</option>
                    <option value="Marketing">Contabilidad</option>
                    <option value="Desarrollo">Logistica</option>
                    <option value="Desarrollo">Produccion</option>
                    <option value="Desarrollo">Ventas</option>
                  </select>
                </div>
                <div className="flex items-center justify-center">
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-20 rounded-full focus:outline-none focus:shadow-outline"
                  >
                    Guardar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Perfil;
