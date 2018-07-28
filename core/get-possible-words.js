"use strict";
/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tree_from_words_1 = require("./tree-from-words");
function getPossibleWordsFromNode(node, orderedLookup, index = 0) {
    let results = [];
    const len = orderedLookup.length;
    let previousChar;
    let char;
    for (; index < len; index++) {
        previousChar = char;
        char = orderedLookup[index];
        const n = node[char];
        if (!n)
            continue; // Invalid? Try the next one.
        const a = n[tree_from_words_1.WORD_END];
        if (a && a.length)
            results = results.concat(a);
        if (previousChar != char) {
            // some limited recursion.
            results = results.concat(getPossibleWordsFromNode(node, orderedLookup, index + 1));
        }
        node = n;
    }
    return results;
}
// noinspection SpellCheckingInspection
function getPossibleWords(root, characters) {
    // category => acegorty
    // aha => aah
    return getPossibleWordsFromNode(root, Object.freeze(characters.split('').sort() /*keep immutable just in case*/));
}
exports.getPossibleWords = getPossibleWords;
//# sourceMappingURL=get-possible-words.js.map