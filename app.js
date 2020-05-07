document.addEventListener("DOMContentLoaded", () => {
  const squares = document.querySelectorAll(".square");
  let defaultPlayer = 1;

  function clickSquare(square) {
    if (defaultPlayer == 1) {
      const id = this.getAttribute("id");
      this.classList.add("player-1");
      defaultPlayer = 2;
    } else {
      this.classList.add("player-2");
      defaultPlayer = 1;
    }
  }

  squares.forEach((square) => {
    square.addEventListener("click", clickSquare);
  });
});
