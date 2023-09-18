"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
Object.defineProperty(exports, "__esModule", { value: true });
var Vec2 = /** @class */ (function () {
    function Vec2(data, offset) {
        if (data === void 0) { data = new Array(Vec2.SIZE); }
        if (offset === void 0) { offset = 0; }
        _Vec2_data.set(this, void 0);
        _Vec2_offset.set(this, void 0);
        __classPrivateFieldSet(this, _Vec2_data, data, "f");
        __classPrivateFieldSet(this, _Vec2_offset, offset, "f");
    }
    Vec2.prototype.vec2 = function (vec) {
        return this.xy(vec.x, vec.y);
    };
    Vec2.prototype.xy = function (x, y) {
        this.x = x;
        this.y = y;
        return this;
    };
    Object.defineProperty(Vec2.prototype, "x", {
        get: function () {
            return __classPrivateFieldGet(this, _Vec2_data, "f")[__classPrivateFieldGet(this, _Vec2_offset, "f")];
        },
        set: function (v) {
            __classPrivateFieldGet(this, _Vec2_data, "f")[__classPrivateFieldGet(this, _Vec2_offset, "f")] = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vec2.prototype, "y", {
        get: function () {
            return __classPrivateFieldGet(this, _Vec2_data, "f")[__classPrivateFieldGet(this, _Vec2_offset, "f") + 1];
        },
        set: function (v) {
            __classPrivateFieldGet(this, _Vec2_data, "f")[__classPrivateFieldGet(this, _Vec2_offset, "f") + 1] = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vec2.prototype, "data", {
        get: function () {
            return __classPrivateFieldGet(this, _Vec2_data, "f");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vec2.prototype, "offset", {
        get: function () {
            return __classPrivateFieldGet(this, _Vec2_offset, "f");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vec2.prototype, "magnitude", {
        get: function () {
            return Math.sqrt(this.dot(this));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vec2.prototype, "angle_x", {
        get: function () {
            return Math.acos(Math.atan2(this.x, this.y));
        },
        enumerable: false,
        configurable: true
    });
    Vec2.prototype.add = function (vec) {
        this.x += vec.x;
        this.y += vec.y;
        return this;
    };
    Vec2.prototype.subtract = function (vec) {
        this.x -= vec.x;
        this.y -= vec.y;
        return this;
    };
    Vec2.prototype.multiply = function (vec) {
        this.x *= vec.x;
        this.y *= vec.y;
        return this;
    };
    Vec2.prototype.multiplyScalar = function (a) {
        this.x *= a;
        this.y *= a;
        return this;
    };
    Vec2.prototype.dot = function (vec) {
        return this.x * vec.x + this.y * vec.y;
    };
    Vec2.prototype.angle = function (vec) {
        return Math.acos(vec.dot(this));
    };
    Vec2.prototype.normalize = function () {
        this.multiplyScalar(1 / this.magnitude);
        return this;
    };
    var _Vec2_data, _Vec2_offset;
    _Vec2_data = new WeakMap(), _Vec2_offset = new WeakMap();
    Vec2.SIZE = 2;
    return Vec2;
}());
exports.default = Vec2;
