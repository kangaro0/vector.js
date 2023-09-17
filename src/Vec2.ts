
export default class Vec2 {

    public static SIZE = 2;

    readonly #data: Float32Array;
    readonly #offset: number;

    constructor(data: Float32Array = new Float32Array(Vec2.SIZE), offset: number = 0) {
        this.#data = data;
        this.#offset = offset;
    }

    public vec2(vec: Vec2) {
        return this.xy(vec.x, vec.y);
    }

    public xy(x: number, y: number) {
        this.x = x;
        this.y = y;
        return this;
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

    get data() {
        return this.#data;
    }

    get offset() {
        return this.#offset;
    }

    get magnitude() {
        return Math.sqrt(this.dot(this));
    }

    get angle_x() {
        return Math.acos(Math.atan2(this.x, this.y));
    }

    public add(vec: Vec2) {
        this.x += vec.x;
        this.y += vec.y;
        return this;
    }

    public subtract(vec: Vec2) {
        this.x -= vec.x;
        this.y -= vec.y;
        return this;
    }

    public multiply(vec: Vec2) {
        this.x *= vec.x;
        this.y *= vec.y;
        return this;
    }

    public multiplyScalar(a: number) {
        this.x *= a;
        this.y *= a;
        return this;
    }

    public dot(vec: Vec2): number {
        return this.x * vec.x + this.y * vec.y;
    }

    public angle(vec: Vec2): number {
        return Math.acos(vec.dot(this));
    }

    public normalize() {
        this.multiplyScalar(1 / this.magnitude);
        return this;
    }
}