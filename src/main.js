// // creating an audio context
// const AudioContext = window.AudioContext || window.webkitAudioContext;
// const audioContext = new AudioContext();

// // get the audio element
// const audioElement = document.querySelector("audio");

// // pass it into the audio context / creating out input node
// const track = audioContext.createMediaElementSource(audioElement);

// // connect our audio graph from the audio source/input node to the destination
// track.connect(audioContext.destination);

// // select our play button
// const playButton = document.querySelector("button");
// console.log("sett", playButton.dataset);

// playButton.addEventListener(
//   "click",
//   function() {
//     // check if context is in suspended state (autoplay policy)
//     if (audioContext.state === "suspended") {
//       audioContext.resume();
//     }

//     // play or pause track depending on state
//     debugger;
//     if (this.dataset.playing === "false") {
//       audioElement.play();
//       this.dataset.playing = "true";
//     } else if (this.dataset.playing === "true") {
//       audioElement.pause();
//       this.dataset.playing = "false";
//     }
//   },
//   false
// );

// import { Howl, Howler } from "howler";

// const audiosrc = document.querySelector("audio").src;
// var sound = new Howl({
//   src: [`${audiosrc}`]
// });

// sound.play();

// const successCB = audio => {
//   // const context = new AudioContext();
//   // const source = context.createMediaStreamSource(audio);
//   // const processor = context.createScriptProcessor(1024, 1, 1);

//   // source.connect(processor);
//   // processor.connect(context.destination);

//   // processor.onaudioprocess = function(e) {
//   //   // Do something with the data, e.g. convert it to WAV
//   //   console.log(e.inputBuffer);

//   const options = { mimeType: "audio/webm" };
//   const recordedChunks = [];
//   const mediaRecorder = new MediaRecorder(audio, options);

//   mediaRecorder.addEventListener("dataavailable", function(e) {
//     if (e.data.size > 0) {
//       recordedChunks.push(e.data);
//     }

//     if (shouldStop === true && stopped === false) {
//       mediaRecorder.stop();
//       stopped = true;
//     }
//     console.log("this is available?");
//   });

//   mediaRecorder.addEventListener("stop", function() {
//     downloadLink.href = URL.createObjectURL(new Blob(recordedChunks));
//     downloadLink.download = "acetest.wav";
//   });

//   mediaRecorder.start();
//   console.log("all tha way");
// };

// navigator.mediaDevices
//   .getUserMedia({ audio: true, video: false })
//   .then(successCB);

// let shouldStop = false;
// let stopped = false;
const player = document.getElementById("player");
const downloadLink = document.getElementById("download");
const stopButton = document.getElementById("stop");
const startButton = document.getElementById("start");
let mediaRecorder;

startButton.addEventListener("click", function() {
  // later can change this to any sort of press event

  navigator.mediaDevices
    .getUserMedia({ audio: true, video: false })
    .then(handleSuccess);
});

stopButton.addEventListener("click", function() {
  // shouldStop = true;
  mediaRecorder.stop();
});

const handleSuccess = function(stream) {
  // if you agree to let them use the microphone

  const options = { mimeType: "audio/webm" };
  const recordedChunks = [];
  mediaRecorder = new MediaRecorder(stream, options);

  mediaRecorder.ondataavailable = function(e) {
    if (e.data.size > 0) {
      recordedChunks.push(e.data);
      console.log("--pushing data--");
    }

    // if (shouldStop === true && stopped === false) {
    //   stopped = true;
    // }
  };

  mediaRecorder.onstop = function() {
    console.log("in stop event listener");
    const source = new Blob(recordedChunks);
    // player.src = source; // add the file to the src for the live player on screen
    console.log("src", source);
    other(source);
    // won't need below unless i want the file to be downloadable later
    // downloadLink.href = URL.createObjectURL(new Blob(recordedChunks));
    // console.log("ref", downloadLink.href);
    // downloadLink.download = "acetest.wav";
  };

  mediaRecorder.start();
};

// record audio
// pass audio into recorder api
// store to localStorage

function other(source) {
  const fileReader = new FileReader();
  fileReader.onload = function(evt) {
    // Read out file contents as a Data URL

    let result = "data:audio/wav;" + evt.target.result.slice(30); // formatting so <audio> will play file
    // Set image src to Data URL

    player.src = result;

    // Store Data URL in localStorage
    try {
      localStorage.setItem("player", result);
    } catch (e) {
      console.log("Storage failed: " + e);
    }
  };
  // Load blob as Data URL
  fileReader.readAsDataURL(source);
}

player.src = localStorage.getItem("player"); // to set the default src to whatever was there last
