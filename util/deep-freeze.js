"use strict";
/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
function deepFreeze(object) {
    // Retrieve the property names defined on object
    let propNames = Object.getOwnPropertyNames(object);
    // Freeze properties before freezing self
    for (let name of propNames) {
        let value = object[name];
        object[name] = value && typeof value === "object" ?
            deepFreeze(value) : value;
    }
    return Object.freeze(object);
}
exports.deepFreeze = deepFreeze;
//# sourceMappingURL=deep-freeze.js.map