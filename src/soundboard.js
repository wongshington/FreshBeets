import Pad from "./pad";

class SoundBoard {
  constructor(options) {
    this.edit = false;

    this.editEl = document.querySelector(".editButton");
    this.toggleEdit = this.toggleEdit.bind(this);
    this.editEl.addEventListener("click", this.toggleEdit);

    this.buildBoard();
  }

  buildBoard() {
    const padContainer = document.querySelector(".pad-container");
    for (let i = 0; i < 16; i++) {
      let div = document.createElement("div");
      div.classList.add("pad", `pad${i}`);

      new Pad({ element: div, className: `pad${i}`, board: this });

      padContainer.appendChild(div);
    }
  }

  toggleEdit(e) {
    if (e) {
      e.preventDefault();
    }
    if (this.edit) {
      this.editEl.innerHTML = "Edit Beet";
      this.edit = false;
    } else {
      this.editEl.innerHTML = "Editing...";
      this.edit = true;
    }
  }
}

export default SoundBoard;
