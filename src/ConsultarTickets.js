import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";

const ConsultarTickets = () => {
  const [tickets, setTickets] = useState([
    {
      id: 1,
      fecha: "2024-03-12",
      descripcion: "Descripción del ticket 1",
      status: "Pendiente",
    },
    {
      id: 2,
      fecha: "2024-03-13",
      descripcion: "Descripción del ticket 2",
      status: "Asignado",
    },
    {
      id: 3,
      fecha: "2024-03-14",
      descripcion: "Descripción del ticket 3",
      status: "Pendiente",
    },
  ]);

  const [selectedTicket, setSelectedTicket] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleConsultar = (ticket) => {
    setSelectedTicket(ticket);
    setIsModalOpen(true);
  };

  const confirmarCancelar = (id) => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "¿Estás seguro de que quieres cancelar este ticket?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Sí, cancelar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        handleCancelar(id);
        setIsModalOpen(false);
      }
    });
  };

  const handleCancelar = (id) => {
    const updatedTickets = tickets.map((ticket) => {
      if (ticket.id === id) {
        if (ticket.status === "Asignado") {
          Swal.fire({
            title: "Error",
            text: "No puedes cancelar un ticket asignado.",
            icon: "error",
          });
          return ticket;
        } else {
          Swal.fire({
            title: "Cancelado",
            text: "El ticket ha sido cancelado exitosamente.",
            icon: "success",
          });
          return { ...ticket, status: "Cancelado" };
        }
      }
      return ticket;
    });
    setTickets(updatedTickets);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center h-screen mt-10">
        <div className="w-3/4 mt-4 mb-8">
          <div
            className="bg-white shadow-md rounded-md p-10"
            style={{ backgroundColor: "#f4f4f4", borderRadius: "1rem" }}
          >
            <table className="table-auto w-full">
              <thead>
                <tr>
                  <th className="border px-4 py-2">ID Ticket</th>
                  <th className="border px-4 py-2">Fecha</th>
                  <th className="border px-4 py-2">Descripción</th>
                  <th className="border px-4 py-2">Status</th>
                  <th className="border px-4 py-2">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {tickets.map((ticket) => (
                  <tr key={ticket.id}>
                    <td className="border px-4 py-2">{ticket.id}</td>
                    <td className="border px-4 py-2">{ticket.fecha}</td>
                    <td className="border px-4 py-2">{ticket.descripcion}</td>
                    <td className="border px-4 py-2">{ticket.status}</td>
                    <td className="border px-4 py-2">
                      <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        onClick={() => handleConsultar(ticket)}
                      >
                        Consultar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {isModalOpen && selectedTicket && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded-md">
            <h2 className="text-2xl font-bold mb-4">Detalles del Ticket</h2>
            <p>No. Ticket: {selectedTicket.id}</p>
            <p>Autor: Nombre del Autor</p>
            <p>Departamento: Nombre del Departamento</p>
            <p>Fecha: {selectedTicket.fecha}</p>
            <p>Clasificación: {selectedTicket.clasificacion}</p>
            <p>Detalles:</p>
            <textarea
              className="w-full h-24 border rounded-md p-2 mb-4"
              readOnly
              value={selectedTicket.detalles}
            />
            <p>Estatus: {selectedTicket.status}</p>
            <button
              onClick={() => confirmarCancelar(selectedTicket.id)}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4 mr-2"
            >
              Cancelar
            </button>
            <button
              onClick={handleCloseModal}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConsultarTickets;
