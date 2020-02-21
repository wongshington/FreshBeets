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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _soundboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./soundboard */ \"./src/soundboard.js\");\n\n\nclass Main {\n  constructor() {\n    this.board = new _soundboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    this.connectStream.apply(this);\n  }\n\n  connectStream() {\n    console.log(\"this?\");\n    navigator.mediaDevices\n      .getUserMedia({ audio: true, video: false })\n      .then(stream => {\n        this.stream = stream;\n        this.media = new MediaRecorder(this.stream, {\n          mimeType: \"audio/webm\"\n        });\n\n        this.board.stream = this.stream;\n        this.board.media = this.media;\n      });\n  }\n}\nconst m = new Main();\n\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ }),

/***/ "./src/pad.js":
/*!********************!*\
  !*** ./src/pad.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Pad {\n  constructor(options) {\n    this.className = options.className;\n    this.el = options.element;\n    this.board = options.board;\n    this.src = localStorage.getItem(this.className);\n\n    this.handler = this.handler.bind(this);\n    this.el.addEventListener(\"click\", this.handler);\n  }\n\n  handler(e) {\n    e.preventDefault();\n\n    // this is where to maybe catch a future error if the board.media isn't set up yet because user hasn't granted mic privileges\n    const loggerEl = document.querySelector(\".logger\");\n    loggerEl.innerHTML =\n      loggerEl.innerHTML +\n      `<div> ${this.board.edit} , handler click func</div>`;\n\n    if (this.board.edit) {\n      this.editSound();\n    } else {\n      this.playPad();\n    }\n  }\n\n  playPad() {\n    // might need to error handle here for when this pad is clicked but there isn't a sound for it yet\n    let audio = document.getElementById(\"player\");\n    audio.src = this.src;\n    audio.play();\n  }\n\n  editSound() {\n    const loggerEl = document.querySelector(\".logger\");\n    loggerEl.innerHTML =\n      loggerEl.innerHTML +\n      `<div> ${this.board.media.state} , editSound func</div>`;\n\n    if (this.board.media.state === \"recording\") {\n      this.board.media.stop();\n    } else {\n      this.board.record(this);\n    }\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Pad);\n\n\n//# sourceURL=webpack:///./src/pad.js?");

/***/ }),

/***/ "./src/soundboard.js":
/*!***************************!*\
  !*** ./src/soundboard.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pad */ \"./src/pad.js\");\n\n\nconst COLORS = [\n  // could set up styles with each of these colors and then assign a class name at this level\n  \"#FFBDC2\",\n  \"#FFC2EF\",\n  \"#A3EFFF\",\n  \"#FFD98A\",\n  \"#B3FFBE\",\n  \"#A7FFA3\",\n  \"#A8F6FF\",\n  \"#D494FF\",\n  \"#FFB499\",\n  \"#76528BFF\",\n  \"#FFA351FF\",\n  \"#FFBE7BFF\",\n  \"#2460A7FF\"\n];\nconst ICONS = [\n  '<i class=\"fas fa-robot\"></i>',\n  '<i class=\"fas fa-running\"></i>',\n  '<i class=\"fas fa-kiss-wink-heart\"></i>',\n  '<i class=\"fas fa-home\"></i>',\n  '<i class=\"fas fa-laptop-code\"></i>',\n  '<i class=\"fas fa-snowplow\"></i>',\n  '<i class=\"fas fa-plane\"></i>',\n  '<i class=\"fas fa-hotdog\"></i>',\n  '<i class=\"fas fa-lemon\"></i>',\n  '<i class=\"fas fa-mountain\"></i>',\n  '<i class=\"fas fa-bicycle\"></i>',\n  '<i class=\"fas fa-star\"></i>',\n  '<i class=\"fas fa-headphones\"></i>',\n  '<i class=\"fas fa-baby-carriage\"></i>',\n  '<i class=\"fas fa-hat-wizard\"></i>',\n  '<i class=\"fas fa-toilet-paper\"></i>'\n];\n\nclass SoundBoard {\n  constructor(options) {\n    this.stream;\n    this.media;\n    this.edit = false;\n\n    this.editEl = document.querySelector(\".editButton\");\n    this.toggleEdit = this.toggleEdit.bind(this);\n    this.editEl.addEventListener(\"click\", this.toggleEdit);\n\n    this.buildBoard();\n\n    this.record = this.record.bind(this);\n  }\n\n  buildBoard() {\n    const padContainer = document.querySelector(\".pad-container\");\n    for (let i = 0; i < 16; i++) {\n      let button = document.createElement(\"button\");\n      button.classList.add(\"pad\", `pad${i}`);\n\n      let randColor = COLORS[Math.floor(Math.random() * COLORS.length)];\n      button.style.backgroundColor = randColor;\n\n      button.innerHTML = ICONS[i];\n\n      new _pad__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({ element: button, className: `pad${i}`, board: this });\n\n      padContainer.appendChild(button);\n    }\n  }\n\n  toggleEdit(e) {\n    if (e) {\n      e.preventDefault();\n    }\n    if (this.edit) {\n      this.editEl.innerHTML = \"Edit Beet\";\n      this.edit = false;\n    } else {\n      this.editEl.innerHTML = \"Editing...\";\n      this.edit = true;\n    }\n  }\n\n  setupMedia() {\n    const audioSections = [];\n\n    this.media.ondataavailable = e => {\n      if (e.data.size > 0) {\n        const loggerEl = document.querySelector(\".logger\");\n        loggerEl.innerHTML =\n          loggerEl.innerHTML + `<div>  pushin sounds func</div>`;\n        audioSections.push(e.data);\n      }\n    };\n\n    this.media.onstop = () => {\n      const loggerEl = document.querySelector(\".logger\");\n      loggerEl.innerHTML = loggerEl.innerHTML + `<div> on Stop func</div>`;\n      const source = new Blob(audioSections);\n      this.processMedia(source);\n    };\n    // debugger; had some issues with the source not coming through in our dataavailable function\n    this.media.start();\n  }\n\n  processMedia(source) {\n    const fileReader = new FileReader();\n\n    const loggerEl = document.querySelector(\".logger\");\n    loggerEl.innerHTML =\n      loggerEl.innerHTML + `<div> ${source.slice(0, 50)} , process MEdia</div>`;\n\n    fileReader.onload = e => {\n      let result = \"data:audio/wav;\" + e.target.result.slice(30); //format base64 string\n      localStorage.setItem(this.pad.className, result);\n      this.pad.src = result;\n      this.toggleEdit();\n    };\n\n    fileReader.readAsDataURL(source);\n  }\n\n  record(pad) {\n    this.setupMedia();\n    this.pad = pad;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SoundBoard);\n\n\n//# sourceURL=webpack:///./src/soundboard.js?");

/***/ })

/******/ });