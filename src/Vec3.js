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
var Vec3 = /** @class */ (function () {
    function Vec3(data, offset) {
        _Vec3_data.set(this, void 0);
        _Vec3_offset.set(this, void 0);
        __classPrivateFieldSet(this, _Vec3_data, data, "f");
        __classPrivateFieldSet(this, _Vec3_offset, offset, "f");
    }
    Vec3.prototype.xy = function (x, y) {
        __classPrivateFieldGet(this, _Vec3_data, "f")[__classPrivateFieldGet(this, _Vec3_offset, "f")] = x;
        __classPrivateFieldGet(this, _Vec3_data, "f")[__classPrivateFieldGet(this, _Vec3_offset, "f") + 1] = y;
        __classPrivateFieldGet(this, _Vec3_data, "f")[__classPrivateFieldGet(this, _Vec3_offset, "f") + 2] = 0;
        return this;
    };
    Vec3.prototype.xyz = function (x, y, z) {
        this.xy(x, y);
        this.z = z;
        return this;
    };
    Vec3.prototype.vec2 = function (vec) {
        return this.xy(vec.x, vec.y);
    };
    Vec3.prototype.vec3 = function (vec) {
        return this.xyz(vec.x, vec.y, vec.z);
    };
    Object.defineProperty(Vec3.prototype, "x", {
        get: function () {
            return __classPrivateFieldGet(this, _Vec3_data, "f")[__classPrivateFieldGet(this, _Vec3_offset, "f")];
        },
        set: function (v) {
            __classPrivateFieldGet(this, _Vec3_data, "f")[__classPrivateFieldGet(this, _Vec3_offset, "f")] = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vec3.prototype, "y", {
        get: function () {
            return __classPrivateFieldGet(this, _Vec3_data, "f")[__classPrivateFieldGet(this, _Vec3_offset, "f") + 1];
        },
        set: function (v) {
            __classPrivateFieldGet(this, _Vec3_data, "f")[__classPrivateFieldGet(this, _Vec3_offset, "f") + 1] = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vec3.prototype, "z", {
        get: function () {
            return __classPrivateFieldGet(this, _Vec3_data, "f")[__classPrivateFieldGet(this, _Vec3_offset, "f") + 2];
        },
        set: function (v) {
            __classPrivateFieldGet(this, _Vec3_data, "f")[__classPrivateFieldGet(this, _Vec3_offset, "f") + 2] = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vec3.prototype, "magnitude", {
        get: function () {
            return Math.sqrt(this.dot(this));
        },
        enumerable: false,
        configurable: true
    });
    Vec3.prototype.add = function (vec) {
        this.x += vec.x;
        this.y += vec.y;
        this.z += vec.z;
        return this;
    };
    Vec3.prototype.subtract = function (vec) {
        this.x -= vec.x;
        this.y -= vec.y;
        this.z -= vec.z;
        return this;
    };
    Vec3.prototype.multiply = function (vec) {
        this.x *= vec.x;
        this.y *= vec.y;
        this.z *= vec.z;
        return this;
    };
    Vec3.prototype.multiplyScalar = function (a) {
        this.x *= a;
        this.y *= a;
        this.z *= a;
        return this;
    };
    Vec3.prototype.dot = function (vec) {
        return this.x * vec.x + this.y * vec.y + this.z * vec.z;
    };
    Vec3.prototype.cross = function (vec) {
        this.x = this.y * vec.z - this.z * vec.z;
        this.y = this.z * vec.x - this.x * vec.z;
        this.z = this.x * vec.y - this.y * vec.x;
        return this;
    };
    Vec3.prototype.angle = function (vec) {
        return Math.acos(vec.dot(this));
    };
    Vec3.prototype.normalize = function () {
        return this.multiplyScalar(1 / this.magnitude);
    };
    var _Vec3_data, _Vec3_offset;
    _Vec3_data = new WeakMap(), _Vec3_offset = new WeakMap();
    Vec3.SIZE = 3;
    return Vec3;
}());
exports.default = Vec3;
