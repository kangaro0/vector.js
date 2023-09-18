import {Vec2} from "./src";

(() => {
    const numOfVectors = 16;
    const data = new Float32Array(numOfVectors * Vec2.SIZE);

    // create vectors
    const vectors = [];
    for (let i = 0; i < numOfVectors; i++) {
        // initialize
        const vec = new Vec2(data, Vec2.SIZE * i).xy(i, i + 1);
        vectors.push(vec);
    }

    // manipulate
    vectors[0].multiplyScalar(5);

    // copy
    const b = new Vec2().vec2(vectors[0]);
    //                       ^ calling without data structure will create a new one

    const sum = vectors.reduce((prev, current, i) => prev.add(current), new Vec2());

    console.log(sum.x, sum.y);
})()