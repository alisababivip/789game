import {
    j as s
} from "./chunk-a4af42e8.js";
import {
    r
} from "./chunk-73e80d68.js";
import {
    cA as N,
    ev as v,
    cS as G
} from "./chunk-64278058.js";
import {
    c as g
} from "./chunk-5bcb444f.js";
import {
    u as I,
    a as b
} from "./chunk-55136115.js";
import {
    G as L
} from "./chunk-405456f5.js";
import {
    G as S,
    c as V
} from "./chunk-de5e47f6.js";
const x = r.memo(function({
    title: i,
    showPlayBtn: t,
    source: e,
    originalId: n,
    className: a,
    link: f,
    onGameClick: c,
    icon: k,
    formateData: m,
    calcSize: l,
    loop: h = 5e3,
    pageName: y
}) {
    var p;
    const {
        onClick: j,
        onView: C
    } = I(e, n), w = r.useCallback((o, u) => s.jsx(b, {
        className: g("grid-item", void 0),
        item: o,
        thumbnail: void 0,
        showPlayBtn: t,
        onClick: () => {
            j(o, u), c && c()
        },
        onView: () => C(o, u)
    }, o.gameUnique), [e]), d = r.useCallback(() => m ? m(e.read()).pageList.list : e.read().pageList.list, [e]);
    return ((p = d()) == null ? void 0 : p.length) === 0 ? s.jsx(N, {}) : s.jsx(S, {
        className: g(q, a),
        title: i,
        loop: h,
        icon: k,
        calcSize: l != null ? l : V,
        getData: d,
        renderItem: w,
        navChildren: s.jsx(B, {
            source: e,
            link: f
        })
    })
});

function B({
    source: i,
    link: t
}) {
    const {
        t: e
    } = v(), {
        pageList: n,
        sectionId: a
    } = i.read();
    return a ? s.jsx(G, {
        className: "num",
        href: t || `/gamelist/${L.sectionIdEncode(a)}`,
        children: s.jsx("span", {
            children: e("View all")
        })
    }) : null
}
const q = "s1qlggg6";
export {
    x as G
};