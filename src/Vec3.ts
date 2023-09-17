import Vec2 from "./Vec2";

export default class Vec3 {

    public static SIZE = 3;

    readonly #data: Float32Array;
    readonly #offset: number;

    constructor(data: Float32Array, offset: number) {
        this.#data = data;
        this.#offset = offset;
    }

    public xy(x: number, y: number) {
        this.#data[this.#offset] = x;
        this.#data[this.#offset + 1] = y;
        this.#data[this.#offset + 2] = 0;
        return this;
    }

    public xyz(x: number, y: number, z: number) {
        this.xy(x, y);
        this.z = z;
        return this;
    }

    public vec2(vec: Vec2) {
        return this.xy(vec.x, vec.y);
    }

    public vec3(vec: Vec3) {
        return this.xyz(vec.x, vec.y, vec.z);
    }

    get x() {
        return this.#data[this.#offset];
    }

    set x(v: number) {
        this.#data[this.#offset] = v;
    }

    get y() {
        return this.#data[this.#offset + 1];
    }

    set y(v: number) {
        this.#data[this.#offset + 1] = v;
    }

    get z() {
        return this.#data[this.#offset + 2];
    }

    set z(v: number) {
        this.#data[this.#offset + 2] = v;
    }

    get magnitude(): number {
        return Math.sqrt(this.dot(this));
    }

    public add(vec: Vec3) {
        this.x += vec.x;
        this.y += vec.y;
        this.z += vec.z;
        return this;
    }

    public subtract(vec: Vec3) {
        this.x -= vec.x;
        this.y -= vec.y;
        this.z -= vec.z;
        return this;
    }

    public multiply(vec: Vec3) {
        this.x *= vec.x;
        this.y *= vec.y;
        this.z *= vec.z;
        return this;
    }

    public multiplyScalar(a: number) {
        this.x *= a;
        this.y *= a;
        this.z *= a;
        return this;
    }

    public dot(vec: Vec3) {
        return this.x * vec.x + this.y * vec.y + this.z * vec.z;
    }

    public cross(vec: Vec3) {
        this.x = this.y * vec.z - this.z * vec.z;
        this.y = this.z * vec.x - this.x * vec.z;
        this.z = this.x * vec.y - this.y * vec.x;
        return this;
    }

    public angle(vec: Vec3): number {
        return Math.acos(vec.dot(this));
    }

    public normalize() {
        return this.multiplyScalar(1 / this.magnitude);
    }
}