"use strict";
/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
var words_1 = require("./words");
var word = process.argv[process.argv.length - 1];
if (word) {
    console.log("Possible words for: \"" + word + "\"");
    for (var _i = 0, _a = words_1.default(word); _i < _a.length; _i++) {
        var w = _a[_i];
        console.log(w);
    }
}
//# sourceMappingURL=index.js.map