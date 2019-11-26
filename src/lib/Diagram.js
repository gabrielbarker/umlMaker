"use strict";
exports.__esModule = true;
var Diagram = /** @class */ (function () {
    function Diagram() {
        this._Objects = [];
    }
    Diagram.prototype.addObject = function (Object) {
        this.Objects.push(Object);
    };
    Object.defineProperty(Diagram.prototype, "Objects", {
        get: function () {
            return this._Objects;
        },
        set: function (Objects) {
            this._Objects = Objects;
        },
        enumerable: true,
        configurable: true
    });
    return Diagram;
}());
exports["default"] = Diagram;
