import {
    r as c,
    g as y
} from "./chunk-73e80d68.js";

function u(o, r) {
    for (var a = 0; a < r.length; a++) {
        const e = r[a];
        if (typeof e != "string" && !Array.isArray(e)) {
            for (const t in e)
                if (t !== "default" && !(t in o)) {
                    const n = Object.getOwnPropertyDescriptor(e, t);
                    n && Object.defineProperty(o, t, n.get ? n : {
                        enumerable: !0,
                        get: () => e[t]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(o, Symbol.toStringTag, {
        value: "Module"
    }))
}
var s = {
        exports: {}
    },
    f = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var O = c,
    d = Symbol.for("react.element"),
    g = Symbol.for("react.fragment"),
    b = Object.prototype.hasOwnProperty,
    m = O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    v = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function i(o, r, a) {
    var e, t = {},
        n = null,
        p = null;
    a !== void 0 && (n = "" + a), r.key !== void 0 && (n = "" + r.key), r.ref !== void 0 && (p = r.ref);
    for (e in r) b.call(r, e) && !v.hasOwnProperty(e) && (t[e] = r[e]);
    if (o && o.defaultProps)
        for (e in r = o.defaultProps, r) t[e] === void 0 && (t[e] = r[e]);
    return {
        $$typeof: d,
        type: o,
        key: n,
        ref: p,
        props: t,
        _owner: m.current
    }
}
f.Fragment = g, f.jsx = i, f.jsxs = i, s.exports = f;
var l = s.exports;
const _ = y(l),
    j = u({
        __proto__: null,
        default: _
    }, [l]);
export {
    _ as a, l as j, j as r
};