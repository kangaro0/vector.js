import {Vec2} from "../src";

let data: Float32Array;

describe('Vec2', () => {
    beforeEach(() => {
        // allocate space for 3 vectors
        data = new Float32Array(Vec2.SIZE * 3);
    });

    test('does initialize', () => {
        const res = new Vec2(data, 0).xy(0, 0);
        expect(res.x).toBe(0);
        expect(res.y).toBe(0);
    });

    test('does copy', () => {
       const vec = new Vec2(data, 0).xy(5, 5);
       const res = new Vec2(data, 2).vec2(vec);
       expect(res.x).toBe(5);
       expect(res.y).toBe(5);
    });

    test('does calculate magnitude', () => {
       const res = new Vec2(data, 0).xy(2, 0).magnitude;
       expect(res).toBe(2);
    });

    test('does calculate angle to x', () => {
       const vec = new Vec2(data, 0).xy(0, 1);
       const res = vec.angle_x;
       expect(res).toBe(Math.PI/2);
    });

    test('does add', () => {
        const veca = new Vec2(data, 0).xy(1, 1);
        const vecb = new Vec2(data, 2).xy(2, 2);
        const res = new Vec2(data, 4).vec2(veca).add(vecb);
        expect(res.x).toBe(3);
        expect(res.y).toBe(3);
    });

    test('does subtract', () => {
        const veca = new Vec2(data, 0).xy(1, 1);
        const vecb = new Vec2(data, 2).xy(3, 3);
        const res = new Vec2(data, 4).vec2(veca).subtract(vecb);
        expect(res.x).toBe(-2);
        expect(res.y).toBe(-2);
    });

    test('does multiply', () => {
       const veca = new Vec2(data, 0).xy(2, 2);
       const vecb = new Vec2(data, 2).xy(5, 5);
       const res = new Vec2(data, 4).vec2(veca).multiply(vecb);
       expect(res.x).toBe(10);
       expect(res.y).toBe(10);
    });

    test('does multiply scalar', () => {
       const res = new Vec2(data, 0).xy(2, 2);
       res.multiplyScalar(5);
       expect(res.x).toBe(10);
       expect(res.y).toBe(10);
    });

    test('does dot', () => {
       const veca = new Vec2(data, 0).xy(1, 0);
       const vecb = new Vec2(data, 2).xy(0, 1);
       const res = Math.acos(vecb.dot(veca));
       expect(res).toBe(Math.PI/2);
    });

    test('does calculate angle to other vector', () => {
        const veca = new Vec2(data, 0).xy(1, 0);
        const vecb = new Vec2(data, 2).xy(0, 1);
        const res = vecb.angle(veca);
        expect(res).toBe(Math.PI/2);
    });

    test('does normalize', () => {
       const res = new Vec2(data, 0).xy(2, 2).normalize();
       expect(Math.ceil(res.magnitude)).toBe(1);
    });
});