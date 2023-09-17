import {Vec3} from "../src";

let data: Float32Array;

describe('Vec3', () => {
    beforeEach(() => {
        // allocate space for 3 vectors
        data = new Float32Array(Vec3.SIZE * 3);
    });

    test('does initialize', () => {
        const res = new Vec3(data, 0).xyz(0, 0, 0);
        expect(res.x).toBe(0);
        expect(res.y).toBe(0);
        expect(res.z).toBe(0);
    });

    test('does copy', () => {
        const vec = new Vec3(data, 0).xyz(5, 5, 5);
        const res = new Vec3(data, 3).vec3(vec);
        expect(res.x).toBe(5);
        expect(res.y).toBe(5);
        expect(res.z).toBe(5);
    });

    test('does calculate magnitude', () => {
        const res = new Vec3(data, 0).xy(2, 0).magnitude;
        expect(res).toBe(2);
    });

    test('does add', () => {
        const veca = new Vec3(data, 0).xyz(1, 1, 1);
        const vecb = new Vec3(data, 3).xyz(2, 2, 2);
        const res = new Vec3(data, 6).vec3(veca).add(vecb);
        expect(res.x).toBe(3);
        expect(res.y).toBe(3);
        expect(res.z).toBe(3);
    });

    test('does subtract', () => {
        const veca = new Vec3(data, 0).xyz(1, 1, 1);
        const vecb = new Vec3(data, 3).xyz(3, 3, 3);
        const res = new Vec3(data, 6).vec3(veca).subtract(vecb);
        expect(res.x).toBe(-2);
        expect(res.y).toBe(-2);
        expect(res.z).toBe(-2);
    });

    test('does multiply', () => {
        const veca = new Vec3(data, 0).xyz(2, 2, 2);
        const vecb = new Vec3(data, 3).xyz(5, 5, 5);
        const res = new Vec3(data, 6).vec3(veca).multiply(vecb);
        expect(res.x).toBe(10);
        expect(res.y).toBe(10);
        expect(res.z).toBe(10);
    });

    test('does multiply scalar', () => {
        const res = new Vec3(data, 0).xyz(2, 2, 2);
        res.multiplyScalar(5);
        expect(res.x).toBe(10);
        expect(res.y).toBe(10);
        expect(res.z).toBe(10);
    });

    test('does dot', () => {
        const veca = new Vec3(data, 0).xy(1, 0);
        const vecb = new Vec3(data, 2).xy(0, 1);
        const res = Math.acos(vecb.dot(veca));
        expect(res).toBe(Math.PI/2);
    });

    test('does calculate angle to other vector', () => {
        const veca = new Vec3(data, 0).xy(1, 0);
        const vecb = new Vec3(data, 2).xy(0, 1);
        const res = vecb.angle(veca);
        expect(res).toBe(Math.PI/2);
    });

    test('does normalize', () => {
        const res = new Vec3(data, 0).xyz(2, 2, 2).normalize();
        expect(res.x).toBe(0.5773502588272095);
        expect(res.y).toBe(0.5773502588272095);
        expect(res.z).toBe(0.5773502588272095);
    });
});
