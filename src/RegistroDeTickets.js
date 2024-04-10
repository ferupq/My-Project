import React, { useState } from "react";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const RegistroDeTickets = () => {
  const [autor, setAutor] = useState("Fernando Mauricio Castillo Rosales");
  const [fecha, setFecha] = useState("");
  const [departamento, setDepartamento] = useState("");
  const [detalles, setDetalles] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleAutorChange = (e) => {
    setAutor(e.target.value);
  };

  const handleFechaChange = (e) => {
    setFecha(e.target.value);
  };

  const handleDepartamentoChange = (e) => {
    setDepartamento(e.target.value);
  };

  const handleDetallesChange = (e) => {
    setDetalles(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!autor || !fecha || !departamento || !detalles) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Por favor, complete todos los campos.",
      });
    } else {
      // Aquí puedes enviar los datos del ticket al servidor o realizar alguna acción con ellos
      setMensaje("El ticket se ha guardado correctamente.");
      Swal.fire({
        icon: "success",
        title: "Éxito",
        text: "El ticket se ha guardado correctamente.",
      });
    }
  };

  const handleCancel = () => {
    // Aquí puedes manejar la lógica para cancelar la edición del ticket
    Swal.fire({
      icon: "warning",
      title: "¿Estás seguro?",
      text: "¿Quieres cancelar la edición del ticket?",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          "Cancelado",
          "La edición del ticket ha sido cancelada.",
          "success"
        );
      }
    });
  };

  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="w-full max-w-3xl">
          <div
            className="bg-white shadow-md rounded-md p-6"
            style={{ backgroundColor: "#f4f4f4" }}
          >
            <h1 className="text-center text-2xl font-bold mb-4">
              Guardar Ticket
            </h1>
            {mensaje && <p className="text-green-500 mb-4">{mensaje}</p>}
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label
                  htmlFor="autor"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Autor
                </label>
                <input
                  type="text"
                  id="autor"
                  className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={autor}
                  onChange={handleAutorChange}
                  placeholder="Ingrese el autor"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="fecha"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Fecha
                </label>
                <input
                  type="date"
                  id="fecha"
                  className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={fecha}
                  onChange={handleFechaChange}
                  placeholder="Seleccione la fecha"
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
                  placeholder="Seleccione un departamento"
                >
                  <option value="">Seleccione un departamento</option>
                  <option value="Ventas">Ventas</option>
                  <option value="Compras">Compras</option>
                  <option value="Contabilidad">Contabilidad</option>
                  <option value="Produccion">Produccion</option>
                  <option value="Logistica">Logistica</option>
                </select>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="detalles"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Detalles
                </label>
                <textarea
                  id="detalles"
                  className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={detalles}
                  onChange={handleDetallesChange}
                  placeholder="Ingrese los detalles"
                ></textarea>
              </div>
              <div className="flex items-center justify-center space-x-4">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
                >
                  Guardar
                </button>
                <button
                  type="button"
                  onClick={handleCancel}
                  className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
                >
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistroDeTickets;
