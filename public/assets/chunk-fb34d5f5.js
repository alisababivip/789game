import {
    j as a
} from "./chunk-a4af42e8.js";
import {
    R as h,
    r as i
} from "./chunk-73e80d68.js";
import {
    c as n
} from "./chunk-5bcb444f.js";
import {
    cS as l,
    cJ as o
} from "./chunk-64278058.js";
const p = h.memo(function({
        list: e,
        backStyle: c
    }) {
        var m;
        const t = e.length;
        if (c && t > 0) {
            const s = (m = e[t - 2]) == null ? void 0 : m.path,
                r = e[t - 1];
            return a.jsxs(l, {
                className: n(x, "game-nav-path"),
                href: s,
                children: [t > 1 && a.jsx(o, {
                    name: "Arrow"
                }), r.label]
            })
        }
        return a.jsx("div", {
            className: `${f} game-nav-path`,
            children: e.map((s, r) => a.jsxs(i.Fragment, {
                children: [r > 0 && a.jsx(o, {
                    name: "Arrow"
                }), a.jsx(l, {
                    className: n("path", r === e.length - 1 ? "active" : "hover"),
                    href: r < e.length - 1 ? s.path : "",
                    title: s.label,
                    children: s.label
                })]
            }, r))
        })
    }),
    f = "nsy8oc0",
    x = "m14mxsi6";
export {
    p as G
};