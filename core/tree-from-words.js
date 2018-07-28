"use strict";
/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const deep_freeze_1 = require("../util/deep-freeze");
exports.WORD_END = "\n";
function treeFromWords(words) {
    const root = {};
    for (let word of words) {
        if (!word)
            continue; // Just in case we get an empty blank value.
        let node = root;
        for (const letter of word.split('').sort()) // sort the lettering so we can leverage alphabetical ordering of the tree.
         {
            let n = node[letter];
            if (!n)
                node[letter] = n = {};
            node = n;
        }
        let a = node[exports.WORD_END];
        if (!a)
            node[exports.WORD_END] = a = [];
        a.push(word);
    }
    return deep_freeze_1.deepFreeze(root); // keep the result immutable.
}
exports.treeFromWords = treeFromWords;
//# sourceMappingURL=tree-from-words.js.map