import {
    g as f
} from "./vendor-8c02be2a.js";

function c(t, i) {
    for (var o = 0; o < i.length; o++) {
        const e = i[o];
        if (typeof e != "string" && !Array.isArray(e)) {
            for (const r in e)
                if (r !== "default" && !(r in t)) {
                    const n = Object.getOwnPropertyDescriptor(e, r);
                    n && Object.defineProperty(t, r, n.get ? n : {
                        enumerable: !0,
                        get: () => e[r]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, {
        value: "Module"
    }))
}
var a = globalThis["@bc/pixi"];
const s = c({
    __proto__: null,
    default: f(a)
}, [a]);
export {
    s as P, a as _
};