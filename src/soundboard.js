import Pad from "./pad";

class SoundBoard {
  constructor(options) {
    this.stream;
    this.media;
    this.edit = false;

    this.editEl = document.querySelector(".editButton");
    this.toggleEdit = this.toggleEdit.bind(this);
    this.editEl.addEventListener("click", this.toggleEdit);

    this.buildBoard();

    this.record = this.record.bind(this);
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

  setupMedia() {
    const audioSections = [];

    this.media.ondataavailable = e => {
      if (e.data.size > 0) {
        audioSections.push(e.data);
      }
    };

    this.media.onstop = () => {
      const source = new Blob(audioSections);
      this.processMedia(source);
    };
    // debugger; had some issues with the source not coming through in our dataavailable function
    this.media.start();
  }

  processMedia(source) {
    const fileReader = new FileReader();

    fileReader.onload = e => {
      let result = "data:audio/wav;" + e.target.result.slice(30); //format base64 string
      localStorage.setItem(this.pad.className, result);
      this.pad.src = result;
      this.toggleEdit();
    };

    fileReader.readAsDataURL(source);
  }

  record(pad) {
    this.setupMedia();
    this.pad = pad;
  }
}

export default SoundBoard;
