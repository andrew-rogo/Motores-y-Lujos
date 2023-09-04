document.addEventListener("DOMContentLoaded", function () {
    // Botón "Registrar"
    document.getElementById("btnRegister").addEventListener("click", function () {
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;
      
      // Guardar los datos en localStorage
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);

      alert("Datos guardados correctamente.");
    });

    // Botón "Ingresar"
    document.getElementById("btnLogin").addEventListener("click", function () {
      const storedUsername = localStorage.getItem("username");
      const storedPassword = localStorage.getItem("password");
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;

      if (username === storedUsername && password === storedPassword) {
        alert("Su login es correcto.");
      } else {
        alert("Los datos ingresados no son correctos.");
      }
    });
  });