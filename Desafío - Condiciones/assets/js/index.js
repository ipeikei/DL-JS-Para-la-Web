
    // Desafío 1
    const imagen = document.getElementById("imagen");
    imagen.addEventListener("click", () => {
      if (imagen.style.border) {
        imagen.style.border = "";
      } else {
        imagen.style.border = "2px solid red";
      }
    });

    // Desafío 2
    function verificarStickers() {
      const s1 = parseInt(document.getElementById("sticker1").value) || 0;
      const s2 = parseInt(document.getElementById("sticker2").value) || 0;
      const s3 = parseInt(document.getElementById("sticker3").value) || 0;

      const total = s1 + s2 + s3;
      const resultado = document.getElementById("resultadoStickers");

      if (total <= 10) {
        resultado.textContent = `Llevas ${total} stickers`;
      } else {
        resultado.textContent = "Llevas demasiados stickers";
      }
    }

    // Desafío 3
    function verificarPassword() {
      const num1 = document.getElementById("num1").value;
      const num2 = document.getElementById("num2").value;
      const num3 = document.getElementById("num3").value;

      const password = num1 + num2 + num3;
      const resultado = document.getElementById("resultadoPassword");

      if (password === "911") {
        resultado.textContent = "password 1 correcto";
      } else if (password === "714") {
        resultado.textContent = "password 2 es correcto";
      } else {
        resultado.textContent = "password incorrecto";
      }
    }