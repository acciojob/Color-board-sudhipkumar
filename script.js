//your JS code here. If required.
    const container = document.getElementById("board");
    const squares = 800;

    for (let i = 0; i < squares; i++) {
      const square = document.createElement("div");
      square.classList.add("square");

      square.addEventListener("mouseover", () => {
        const color = getRandomColor();
        square.style.background = color;

        setTimeout(() => {
          square.style.background = "#1d1d1d";
        }, 1000);
      });

      container.appendChild(square);
    }

    function getRandomColor() {
      const letters = "0123456789ABCDEF";
      let color = "#";
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }