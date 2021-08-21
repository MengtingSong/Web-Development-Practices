import { createRequire } from 'module';
const require = createRequire(import.meta.url);

import {franc} from 'franc';
//import pkg from 'langs';
const langs = require("langs")

const input = process.argv[2];
const guess = franc(input);

if (guess === 'und') {
    console.log("The input text is too short for guessing. Please enter a longer sentence.")
} else {
    const language = langs.where("3", guess)
    console.log(`Our best guess is ${language.name}`);
    }
