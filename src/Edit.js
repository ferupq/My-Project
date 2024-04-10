import React, { useState } from "react";

// const Navbar = () => {
//   return (
//     <nav className="flex justify-between items-center bg-gray-100 p-4">
//       <div className="flex items-center">
//         <div className="w-12 h-12 bg-gray-500 rounded-full mr-2 flex items-center justify-center">
//           <svg
//             className="w-6 h-6 text-white"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M12 14l9-5-9-5-9 5 9 5z"
//             ></path>
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M12 14l9-5-9-5-9 5 9 5z"
//             ></path>
//           </svg>
//         </div>
//         <span className="text-gray-800 font-bold mr-4">Cliente</span>
//       </div>
//       <div className="flex items-center space-x-4">
//         <a href="#" className="text-gray-800 hover:text-gray-600">
//           Inicio
//         </a>
//         <a href="#" className="text-gray-800 hover:text-gray-600">
//           Perfil
//         </a>
//         <a href="#" className="text-gray-800 hover:text-gray-600">
//           Registro de Departamentos
//         </a>
//         <a href="#" className="text-gray-800 hover:text-gray-600">
//           Administración de Tickets
//         </a>
//       </div>
//     </nav>
//   );
// };

const Edit = () => {
  const [autor, setAutor] = useState("Fernando Mauricio Castillo Rosales");
  const [fecha, setFecha] = useState("");
  const [departamento, setDepartamento] = useState("");
  const [detalles, setDetalles] = useState("");

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
    // Aquí puedes enviar los datos del ticket al servidor o realizar alguna acción con ellos
    alert("Ticket actualizado");
  };

  const handleCancel = () => {
    // Aquí puedes manejar la lógica para cancelar la edición del ticket
    alert("Edición cancelada");
  };

  return (
    <div>
      {/* <Navbar /> */}
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center h-screen">
          <div className="w-full max-w-md">
            <div className="bg-white shadow-md rounded-md p-6">
              <h1 className="text-center text-2xl font-bold mb-4">
                Crear Ticket
              </h1>
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
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={autor}
                    onChange={handleAutorChange}
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
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={fecha}
                    onChange={handleFechaChange}
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
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={departamento}
                    onChange={handleDepartamentoChange}
                  >
                    <option value="">Seleccione un departamento</option>
                    <option value="Ventas">Ventas</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Desarrollo">Desarrollo</option>
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
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={detalles}
                    onChange={handleDetallesChange}
                  ></textarea>
                </div>
                <div className="flex items-center justify-center space-x-4">
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Guardar
                  </button>
                  <button
                    type="button"
                    onClick={handleCancel}
                    className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Cancelar
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

export default Edit;
