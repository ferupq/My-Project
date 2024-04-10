// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faBars,
//   faCog,
//   faSun,
//   faMoon,
//   faCircle,
// } from "@fortawesome/free-solid-svg-icons";

// function App() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   const toggleDarkMode = () => {
//     setIsDarkMode(!isDarkMode);
//   };

//   // Actualiza el fondo del body
//   document.body.style.backgroundColor = isDarkMode ? "#000" : "#fff";
//   document.body.style.color = isDarkMode ? "#fff" : "#000";

//   return (
//     <div className={`App-header ${isDarkMode ? "dark-mode" : ""}`}>
//       <header className="px-6">
//         <div className="flex justify-between items-center h-16 border-b relative">
//           <button
//             className={`text-gray-400 hover:text-blue-600 hover:bg-gray-100 transition-colors rounded p-1 m-1 focus:right-2 focus:ring-slate-100 ${
//               isDarkMode ? "dark-text" : ""
//             }`}
//             onClick={toggleMenu}
//           >
//             <FontAwesomeIcon icon={faBars} />
//           </button>
//           <div className="flex items-center space-x-4 flex-grow">
//             {/* Icono de configuración en el centro */}
//             <FontAwesomeIcon
//               icon={faCog}
//               size="2x"
//               className={`text-gray-400 hover:text-blue-800 cursor-pointer ${
//                 isDarkMode ? "dark-text" : ""
//               }`}
//             />
//             {/* Barra de navegación */}
//             <nav className="flex items-center space-x-4 ml-auto">
//               <NavLink href="/">Home</NavLink>
//               <NavLink href="/about">About</NavLink>
//               <NavLink href="/blog">Blog</NavLink>
//               <NavLink href="/contact">Contact</NavLink>
//             </nav>
//           </div>
//           <div className="flex items-center">
//             {/* Icono de pantalla con margen a la derecha */}
//             <FontAwesomeIcon
//               icon={isDarkMode ? faMoon : faSun}
//               size="xl"
//               className={`text-gray-400 hover:text-yellow-600 cursor-pointer mr-2 ${
//                 isDarkMode ? "dark-text" : ""
//               }`}
//               onClick={toggleDarkMode}
//             />
//             {/* Círculo */}
//             <div className="flex items-center justify-center rounded-full h-10 w-10 bg-blue-600">
//               <span className={`text-white ${isDarkMode ? "dark-text" : ""}`}>
//                 FC
//               </span>
//             </div>
//           </div>
//           {menuOpen && (
//             <div className="fixed top-16 left-0 w-screen h-screen bg-white border border-gray-200 p-2 rounded shadow">
//               {/* Contenido del menú desplegable */}
//               <DropdownItem href="/">Home</DropdownItem>
//               <DropdownItem href="/about">About</DropdownItem>
//               <DropdownItem href="/blog">Blog</DropdownItem>
//               <DropdownItem href="/contact">Contact</DropdownItem>
//             </div>
//           )}
//         </div>
//       </header>
//     </div>
//   );
// }

// // Componente para enlaces de navegación desplegables
// const DropdownItem = ({ href, children }) => (
//   <a
//     href={href}
//     className="block text-gray-500 hover:text-white hover:bg-blue-600 transition-colors py-2 px-4"
//   >
//     {children}
//   </a>
// );

// // Componente para enlaces de navegación
// const NavLink = ({ href, children }) => (
//   <a href={href} className="text-gray-400 hover:text-blue-800 cursor-pointer">
//     {children}
//   </a>
// );

// export default App;

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Edit from "./Edit";
import ConsultarTickets from "./ConsultarTickets";
import RegistroDeTickets from "./RegistroDeTickets";
import NavBar from "./NavBar";
import Perfil from "./Perfil";

const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/consultar" element={<ConsultarTickets />} />
          <Route path="/registro" element={<RegistroDeTickets />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
