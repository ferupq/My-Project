import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center bg-gray-100 p-4">
      <div className="flex items-center">
        <div className="w-12 h-12 bg-gray-500 rounded-full mr-2 flex items-center justify-center">
          <FontAwesomeIcon icon={faUser} className="text-white" />
        </div>
        <span className="text-gray-800 font-bold mr-4">Cliente</span>
      </div>
      <div className="flex items-center space-x-4">
        <a
          href="login"
          className="text-gray-700 relative rounded-full p-2 transition duration-300 ease-in-out hover:text-black"
        >
          <span className="inline-block">Inicio de Sesion</span>
          <span className="absolute inset-0 border-gray-300 border-opacity-0 hover:border-opacity-100 border transition duration-300 ease-in-out rounded-full"></span>
        </a>
        <a
          href="perfil"
          className="text-gray-700 relative rounded-full p-2 transition duration-300 ease-in-out hover:text-black"
        >
          <span className="inline-block">Perfil</span>
          <span className="absolute inset-0 border-gray-300 border-opacity-0 hover:border-opacity-100 border transition duration-300 ease-in-out rounded-full"></span>
        </a>
        <a
          href="consultar"
          className="text-gray-700 relative rounded-full p-2 transition duration-300 ease-in-out hover:text-black"
        >
          <span className="inline-block">Consultar Tickets</span>
          <span className="absolute inset-0 border-gray-300 border-opacity-0 hover:border-opacity-100 border transition duration-300 ease-in-out rounded-full"></span>
        </a>
        <a
          href="registro"
          className="text-gray-700 relative rounded-full p-2 transition duration-300 ease-in-out hover:text-black"
        >
          <span className="inline-block">Registro de Tickets</span>
          <span className="absolute inset-0 border-gray-300 border-opacity-0 hover:border-opacity-100 border transition duration-300 ease-in-out rounded-full"></span>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
