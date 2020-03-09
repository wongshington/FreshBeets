import SoundBoard from "./soundboard";

class Main {
  constructor() {
    this.board = new SoundBoard();
    this.connectStream.apply(this);
    this.infoListeners();
  }

  infoListeners() {
    const info = document.querySelector(".info");
    const close = document.querySelector(".close");
    const instructions = document.querySelector(".instructions");

    info.addEventListener(
      "click",
      () => (instructions.style.display = "block")
    );
    close.addEventListener(
      "click",
      () => (instructions.style.display = "none")
    );
  }

  connectStream() {
    // console.log("this?");
    navigator.mediaDevices
      .getUserMedia({ audio: true, video: false })
      .then(stream => {
        this.stream = stream;
        this.media = new MediaRecorder(this.stream, {
          mimeType: "audio/webm"
        });

        this.board.stream = this.stream;
        this.board.media = this.media;
      });
  }
}
const m = new Main();
