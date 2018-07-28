"use strict";
/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const words_1 = require("./words");
const word = process.argv[process.argv.length - 1];
if (word) {
    console.log(`Possible words for: "${word}"`);
    for (const w of words_1.default(word).sort())
        console.log(w);
}
//# sourceMappingURL=index.js.map