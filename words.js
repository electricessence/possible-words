"use strict";
/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
var get_possible_words_1 = require("./core/get-possible-words");
var tree_from_words_1 = require("./core/tree-from-words");
var dictionary_1 = require("./dictionary");
exports.dictionary = tree_from_words_1.treeFromWords(dictionary_1.dictionary.fromFile("words.txt"));
function getPossibleWords(characters) {
    return get_possible_words_1.getPossibleWords(exports.dictionary, characters);
}
exports.default = getPossibleWords;
function saveToJson() {
    dictionary_1.dictionary.toJsonFile("words.json", exports.dictionary);
}
exports.saveToJson = saveToJson;
//# sourceMappingURL=words.js.map