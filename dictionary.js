"use strict";
/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var dictionary;
(function (dictionary_1) {
    function fromFile(fileName) {
        return fs.readFileSync(fileName)
            .toString()
            .split("\r\n");
    }
    dictionary_1.fromFile = fromFile;
    function toJsonFile(fileName, dictionary) {
        fs.writeFileSync(fileName, JSON.stringify(dictionary, null, "\t"));
    }
    dictionary_1.toJsonFile = toJsonFile;
})(dictionary = exports.dictionary || (exports.dictionary = {}));
//# sourceMappingURL=dictionary.js.map