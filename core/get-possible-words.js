"use strict";
/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tree_from_words_1 = require("./tree-from-words");
function getPossibleWords(root, characters) {
    var results = [];
    var node = root;
    for (var _i = 0, _a = characters.split('').sort(); _i < _a.length; _i++) {
        var letter = _a[_i];
        var n = node[letter];
        if (!n || Array.isArray(n))
            continue;
        var a = n[tree_from_words_1.WORD_END];
        if (Array.isArray(a) && a.length)
            results = results.concat(a);
        node = n;
    }
    return results;
}
exports.getPossibleWords = getPossibleWords;
//# sourceMappingURL=get-possible-words.js.map