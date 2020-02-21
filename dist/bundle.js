/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _soundboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./soundboard */ \"./src/soundboard.js\");\n// // // creating an audio context\n// // const AudioContext = window.AudioContext || window.webkitAudioContext;\n// // const audioContext = new AudioContext();\n\n// // // get the audio element\n// // const audioElement = document.querySelector(\"audio\");\n\n// // // pass it into the audio context / creating out input node\n// // const track = audioContext.createMediaElementSource(audioElement);\n\n// // // connect our audio graph from the audio source/input node to the destination\n// // track.connect(audioContext.destination);\n\n// // // select our play button\n// // const playButton = document.querySelector(\"button\");\n// // console.log(\"sett\", playButton.dataset);\n\n// // playButton.addEventListener(\n// //   \"click\",\n// //   function() {\n// //     // check if context is in suspended state (autoplay policy)\n// //     if (audioContext.state === \"suspended\") {\n// //       audioContext.resume();\n// //     }\n\n// //     // play or pause track depending on state\n// //     debugger;\n// //     if (this.dataset.playing === \"false\") {\n// //       audioElement.play();\n// //       this.dataset.playing = \"true\";\n// //     } else if (this.dataset.playing === \"true\") {\n// //       audioElement.pause();\n// //       this.dataset.playing = \"false\";\n// //     }\n// //   },\n// //   false\n// // );\n\n// // import { Howl, Howler } from \"howler\";\n\n// // const audiosrc = document.querySelector(\"audio\").src;\n// // var sound = new Howl({\n// //   src: [`${audiosrc}`]\n// // });\n\n// // sound.play();\n\n// // const successCB = audio => {\n// //   // const context = new AudioContext();\n// //   // const source = context.createMediaStreamSource(audio);\n// //   // const processor = context.createScriptProcessor(1024, 1, 1);\n\n// //   // source.connect(processor);\n// //   // processor.connect(context.destination);\n\n// //   // processor.onaudioprocess = function(e) {\n// //   //   // Do something with the data, e.g. convert it to WAV\n// //   //   console.log(e.inputBuffer);\n\n// //   const options = { mimeType: \"audio/webm\" };\n// //   const recordedChunks = [];\n// //   const mediaRecorder = new MediaRecorder(audio, options);\n\n// //   mediaRecorder.addEventListener(\"dataavailable\", function(e) {\n// //     if (e.data.size > 0) {\n// //       recordedChunks.push(e.data);\n// //     }\n\n// //     if (shouldStop === true && stopped === false) {\n// //       mediaRecorder.stop();\n// //       stopped = true;\n// //     }\n// //     console.log(\"this is available?\");\n// //   });\n\n// //   mediaRecorder.addEventListener(\"stop\", function() {\n// //     downloadLink.href = URL.createObjectURL(new Blob(recordedChunks));\n// //     downloadLink.download = \"acetest.wav\";\n// //   });\n\n// //   mediaRecorder.start();\n// //   console.log(\"all tha way\");\n// // };\n\n// // navigator.mediaDevices\n// //   .getUserMedia({ audio: true, video: false })\n// //   .then(successCB);\n\n// // let shouldStop = false;\n// // let stopped = false;\n// const player = document.getElementById(\"player\");\n// const downloadLink = document.getElementById(\"download\");\n// const stopButton = document.getElementById(\"stop\");\n// const startButton = document.getElementById(\"start\");\n// let mediaRecorder;\n\n// startButton.addEventListener(\"click\", function() {\n//   // later can change this to any sort of press event\n\n//   navigator.mediaDevices\n//     .getUserMedia({ audio: true, video: false })\n//     .then(handleSuccess);\n// });\n\n// stopButton.addEventListener(\"click\", function() {\n//   // shouldStop = true;\n//   mediaRecorder.stop();\n// });\n\n// const handleSuccess = function(stream) {\n//   // if you agree to let them use the microphone\n\n//   const options = { mimeType: \"audio/webm\" };\n//   const recordedChunks = [];\n//   mediaRecorder = new MediaRecorder(stream, options);\n\n//   mediaRecorder.ondataavailable = function(e) {\n//     if (e.data.size > 0) {\n//       recordedChunks.push(e.data);\n//       console.log(\"--pushing data--\");\n//     }\n\n//     // if (shouldStop === true && stopped === false) {\n//     //   stopped = true;\n//     // }\n//   };\n\n//   mediaRecorder.onstop = function() {\n//     console.log(\"in stop event listener\");\n//     const source = new Blob(recordedChunks);\n//     // player.src = source; // add the file to the src for the live player on screen\n\n//     handleAudio(source);\n\n//     // won't need below unless i want the file to be downloadable later\n//     // downloadLink.href = URL.createObjectURL(new Blob(recordedChunks));\n//     // console.log(\"ref\", downloadLink.href);\n//     // downloadLink.download = \"acetest.wav\";\n//   };\n\n//   mediaRecorder.start();\n// };\n\n// // record audio\n// // pass audio into recorder api\n// // store to localStorage\n\n// function handleAudio(source) {\n//   const fileReader = new FileReader();\n//   fileReader.onload = function(evt) {\n//     // Read out file contents as a Data URL\n\n//     let result = \"data:audio/wav;\" + evt.target.result.slice(30); // formatting so <audio> will play file\n//     // Set image src to Data URL\n\n//     player.src = result;\n\n//     // Store Data URL in localStorage\n//     try {\n//       localStorage.setItem(\"player2\", result);\n//     } catch (e) {\n//       console.log(\"Storage failed: \" + e);\n//     }\n//   };\n//   // Load blob as Data URL\n//   fileReader.readAsDataURL(source);\n// }\n\n// player.src = localStorage.getItem(\"player\"); // to set the default src to whatever was there last\n\n\n\nconst sb = new _soundboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ }),

/***/ "./src/pad.js":
/*!********************!*\
  !*** ./src/pad.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Pad {\n  constructor(options) {\n    this.className = options.className;\n    this.el = options.element;\n    this.board = options.board;\n    this.src = localStorage.getItem(this.className);\n    this.handler = this.handler.bind(this);\n    this.el.addEventListener(\"click\", this.handler);\n  }\n\n  // build click handler\n  handler(e) {\n    e.preventDefault();\n\n    if (this.board.edit) {\n      this.editSound();\n    } else {\n      this.playPad();\n    }\n  }\n\n  playPad() {\n    let audio = document.getElementById(\"player\");\n    audio.src = this.src;\n    audio.play();\n  }\n\n  editSound() {\n    console.log(\"edit sound function\");\n\n    // set up to record new audio\n\n    this.board.toggleEdit();\n    // at end of function need to toggle board's edit flag\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Pad);\n\n\n//# sourceURL=webpack:///./src/pad.js?");

/***/ }),

/***/ "./src/soundboard.js":
/*!***************************!*\
  !*** ./src/soundboard.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pad */ \"./src/pad.js\");\n\n\nclass SoundBoard {\n  constructor(options) {\n    this.edit = false;\n\n    this.editEl = document.querySelector(\".editButton\");\n    this.toggleEdit = this.toggleEdit.bind(this);\n    this.editEl.addEventListener(\"click\", this.toggleEdit);\n\n    this.buildBoard();\n  }\n\n  buildBoard() {\n    const padContainer = document.querySelector(\".pad-container\");\n    for (let i = 0; i < 16; i++) {\n      let div = document.createElement(\"div\");\n      div.classList.add(\"pad\", `pad${i}`);\n\n      new _pad__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({ element: div, className: `pad${i}`, board: this });\n\n      padContainer.appendChild(div);\n    }\n  }\n\n  toggleEdit(e) {\n    if (e) {\n      e.preventDefault();\n    }\n    if (this.edit) {\n      this.editEl.innerHTML = \"Edit Beet\";\n      this.edit = false;\n    } else {\n      this.editEl.innerHTML = \"Editing...\";\n      this.edit = true;\n    }\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SoundBoard);\n\n\n//# sourceURL=webpack:///./src/soundboard.js?");

/***/ })

/******/ });