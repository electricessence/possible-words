"use strict";
/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
var deep_freeze_1 = require("../util/deep-freeze");
exports.WORD_END = "\n";
function treeFromWords(words) {
    var root = {};
    for (var _i = 0, words_1 = words; _i < words_1.length; _i++) {
        var word = words_1[_i];
        if (!word)
            continue; // Just in case we get an empty blank value.
        var node = root;
        for (var _a = 0, _b = word.split('').sort(); _a < _b.length; _a++) {
            var letter = _b[_a];
            var n = node[letter];
            if (!n)
                node[letter] = n = {};
            node = n;
        }
        var a = node[exports.WORD_END];
        if (!a)
            node[exports.WORD_END] = a = [];
        a.push(word);
    }
    return deep_freeze_1.deepFreeze(root); // keep the result immutable.
}
exports.treeFromWords = treeFromWords;
//# sourceMappingURL=tree-from-words.js.map