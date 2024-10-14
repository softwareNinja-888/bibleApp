"use strict";

import { verse } from "./verse.js";
import { random } from "./random.js";

const display = document.querySelector(".display")
const ranVerse = document.querySelector(".ranVerse")
const ranBtn = document.querySelector(".ranBtn")
const subBtn = document.querySelector(".subBtn")

random.fecthRandom(ranVerse)

ranBtn.addEventListener("click", ()=>{
    random.fecthRandom(ranVerse)
})

subBtn.addEventListener("click",()=>{
    const book = document.querySelector(".book")
    const chapter = document.querySelector(".chapter")
    const verseNum = document.querySelector(".verse")
  
    let url = `${book.value}${chapter.value}${verseNum.value ? `:${verseNum.value}`: ''}`

    verse.showVerse(url,display)

})