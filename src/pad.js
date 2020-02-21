class Pad {
  constructor(options) {
    this.className = options.className;
    this.el = options.element;
    this.board = options.board;
    this.src = localStorage.getItem(this.className);

    if (!this.src) {
      this.el.classList.add("inactive");
    }

    this.editSound = this.editSound.bind(this);
    this.handler = this.handler.bind(this);
    this.el.addEventListener("click", this.handler);
  }

  handler(e) {
    e.preventDefault();

    // this is where to maybe catch a future error if the board.media isn't set up yet because user hasn't granted mic privileges
    let loggerEl = document.querySelector(".logger");
    loggerEl.innerHTML =
      loggerEl.innerHTML +
      `<div> ${this.board.edit} , handler click func</div>`;

    // this.editSound();
    if (this.board.edit == true) {
      let loggerEl = document.querySelector(".logger");
      loggerEl.innerHTML =
        loggerEl.innerHTML +
        `<div> ${this.board.edit} , handler click func</div>`;

      this.editSound();
    } else {
      if (!this.src) return; // handles buttons that have no audio yet
      this.playPad();
    }
  }

  playPad() {
    // might need to error handle here for when this pad is clicked but there isn't a sound for it yet
    let audio = document.getElementById("player");
    audio.src = this.src;
    audio.play();
  }

  editSound() {
    const loggerEl = document.querySelector(".logger");
    loggerEl.innerHTML =
      loggerEl.innerHTML +
      `<div> ${this.board.media.state} , editSound func</div>`;

    if (this.board.media.state === "recording") {
      this.board.media.stop();
      this.el.classList.remove("inactive");
    } else {
      this.board.record(this);
    }
  }
}

export default Pad;
