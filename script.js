"use strict";

import { verse } from "./verse.js";
import { random } from "./random.js";

const display = document.querySelector(".display")
const ranVerse = document.querySelector(".ranVerse")
const ranBtn = document.querySelector(".ranBtn")

ranBtn.addEventListener("click", ()=>{
    random.fecthRandom(ranVerse)
})
// verse.showVerse("philippians4:13",display)