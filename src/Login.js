import React, { useState, useEffect } from "react";

const Login = () => {
  const [usuario, setUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [error, setError] = useState("");
  const [olvideContrasena, setOlvideContrasena] = useState(false);
  const [welcomeText, setWelcomeText] = useState("");

  useEffect(() => {
    const welcomeMessage = "Bienvenido";
    let index = 0;

    const interval = setInterval(() => {
      if (index <= welcomeMessage.length) {
        setWelcomeText(welcomeMessage.substring(0, index));
        index++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setWelcomeText("");
          index = 0;
          setInterval(() => {
            if (index <= welcomeMessage.length) {
              setWelcomeText(welcomeMessage.substring(0, index));
              index++;
            } else {
              clearInterval();
            }
          }, 200);
        }, 2000); // 2000 milliseconds delay before repeating
      }
    }, 200);

    return () => clearInterval(interval);
  }, []);

  const handleUsuarioChange = (e) => {
    setUsuario(e.target.value);
  };

  const handleContrasenaChange = (e) => {
    setContrasena(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (usuario.trim() === "" || contrasena.trim() === "") {
      setError("Por favor ingrese usuario y contraseña");
      return;
    }
    if (contrasena.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres");
      return;
    }
    alert("Inicio de sesión exitoso");
  };

  const handleOlvideContrasena = () => {
    alert(
      "Se ha enviado un correo electrónico para restablecer la contraseña."
    );
  };

  return (
    <div className="container mx-auto h-screen flex justify-center">
      <div className="w-3/4 h-3/4 flex items-center justify-center">
        <div className="bg-gray-100 shadow-md rounded-md p-8 w-96">
          <h1 className="text-center text-4xl font-bold mb-8">
            Iniciar Sesión
          </h1>
          <h1 className="text-center text-4xl font-bold mb-8">{welcomeText}</h1>
          <form onSubmit={handleSubmit} className="w-full">
            <div className="mb-6">
              <label
                htmlFor="usuario"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Usuario
              </label>
              <input
                type="text"
                id="usuario"
                className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={usuario}
                onChange={handleUsuarioChange}
                placeholder="Ingrese su usuario"
              />
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
                value={contrasena}
                onChange={handleContrasenaChange}
                placeholder="Ingrese su contraseña"
              />
            </div>
            {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
              >
                Iniciar Sesión
              </button>
              <button
                type="button"
                onClick={handleOlvideContrasena}
                className="text-gray-700 text-sm focus:outline-none"
              >
                ¿Olvidó su contraseña?
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
