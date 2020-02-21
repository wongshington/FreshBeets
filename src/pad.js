class Pad {
  constructor(options) {
    this.className = options.className;
    this.el = options.element;
    this.board = options.board;
    this.src = localStorage.getItem(this.className);
    this.handler = this.handler.bind(this);
    this.el.addEventListener("click", this.handler);
  }

  // build click handler
  handler(e) {
    e.preventDefault();

    if (this.board.edit) {
      this.editSound();
    } else {
      this.playPad();
    }
  }

  playPad() {
    let audio = document.getElementById("player");
    audio.src = this.src;
    audio.play();
  }

  editSound() {
    console.log("edit sound function");

    // set up to record new audio

    this.board.toggleEdit();
    // at end of function need to toggle board's edit flag
  }
}

export default Pad;
