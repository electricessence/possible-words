"use strict";
/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
function deepFreeze(object) {
    // Retrieve the property names defined on object
    var propNames = Object.getOwnPropertyNames(object);
    // Freeze properties before freezing self
    for (var _i = 0, propNames_1 = propNames; _i < propNames_1.length; _i++) {
        var name_1 = propNames_1[_i];
        var value = object[name_1];
        object[name_1] = value && typeof value === "object" ?
            deepFreeze(value) : value;
    }
    return Object.freeze(object);
}
exports.deepFreeze = deepFreeze;
//# sourceMappingURL=deep-freeze.js.map