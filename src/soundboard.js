import Pad from "./pad";

const COLORS = [
  // could set up styles with each of these colors and then assign a class name at this level
  "#FFBDC2",
  "#FFC2EF",
  "#A3EFFF",
  "#FFD98A",
  "#B3FFBE",
  "#A7FFA3",
  "#A8F6FF",
  "#D494FF",
  "#FFB499",
  "#76528BFF",
  "#FFA351FF",
  "#FFBE7BFF",
  "#2460A7FF"
];
const ICONS = [
  '<i class="fas fa-robot"></i>',
  '<i class="fas fa-running"></i>',
  '<i class="fas fa-kiss-wink-heart"></i>',
  '<i class="fas fa-home"></i>',
  '<i class="fas fa-laptop-code"></i>',
  '<i class="fas fa-snowplow"></i>',
  '<i class="fas fa-plane"></i>',
  '<i class="fas fa-hotdog"></i>',
  '<i class="fas fa-lemon"></i>',
  '<i class="fas fa-mountain"></i>',
  '<i class="fas fa-bicycle"></i>',
  '<i class="fas fa-star"></i>',
  '<i class="fas fa-headphones"></i>',
  '<i class="fas fa-baby-carriage"></i>',
  '<i class="fas fa-hat-wizard"></i>',
  '<i class="fas fa-toilet-paper"></i>'
];

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
      let button = document.createElement("button");
      button.classList.add("pad", `pad${i}`);

      let randColor = COLORS[Math.floor(Math.random() * COLORS.length)];
      button.style.backgroundColor = randColor;

      button.innerHTML = ICONS[i];

      new Pad({ element: button, className: `pad${i}`, board: this });

      padContainer.appendChild(button);
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
      this.editEl.innerHTML = "Select a Sound Pad";
      this.edit = true;
    }
  }

  setupMedia() {
    const audioSections = [];

    this.media.ondataavailable = e => {
      if (e.data.size > 0) {
        // const loggerEl = document.querySelector(".logger");
        // loggerEl.innerHTML =
        //   loggerEl.innerHTML + `<div>  pushin sounds func</div>`;
        audioSections.push(e.data);
      }
    };

    this.media.onstop = () => {
      // const loggerEl = document.querySelector(".logger");
      // loggerEl.innerHTML = loggerEl.innerHTML + `<div> on Stop func</div>`;
      const source = new Blob(audioSections);
      this.processMedia(source);
    };
    // debugger; had some issues with the source not coming through in our dataavailable function
    this.media.start();
  }

  processMedia(source) {
    const fileReader = new FileReader();

    // const loggerEl = document.querySelector(".logger");
    // loggerEl.innerHTML =
    //   loggerEl.innerHTML + `<div> ${source.slice(0, 50)} , process MEdia</div>`;

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
