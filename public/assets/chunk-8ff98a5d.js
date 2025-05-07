import {
    j as s
} from "./chunk-a4af42e8.js";
import {
    ev as o,
    cS as m,
    e3 as p,
    cL as d,
    e5 as x,
    eh as v
} from "./chunk-64278058.js";
import {
    r as c
} from "./chunk-73e80d68.js";
import {
    G as f,
    c as h
} from "./chunk-de5e47f6.js";
import {
    u as j
} from "./chunk-29a4230f.js";
import {
    c as l
} from "./chunk-5bcb444f.js";
import {
    G as u
} from "./chunk-fb34d5f5.js";
const N = v;

function g({
    link: e
}) {
    const {
        t: a
    } = o();
    return s.jsx(m, {
        className: "num",
        href: e,
        children: s.jsx("span", {
            children: a("View all")
        })
    })
}

function n({
    item: e
}) {
    const a = p();
    return s.jsx(m, {
        href: `/provider/${e.providerName}`,
        className: l(w, "block-item"),
        children: s.jsx(d, {
            className: "img",
            src: a ? e.logo : e.logoWhite,
            args: "w=200",
            alt: ""
        })
    })
}

function b() {
    const {
        t: e
    } = o(), a = j().providerData, i = c.useCallback(() => a.read().pageList.list, []), t = c.useCallback((r, G) => s.jsx(n, {
        item: r
    }, r.providerName), []);
    return s.jsx(f, {
        className: l("providers tow-rows"),
        title: e("Game Providers"),
        calcSize: h,
        getData: i,
        renderItem: t,
        navChildren: s.jsx(g, {
            link: "/providers"
        })
    })
}

function k() {
    const {
        t: e
    } = o(), a = x(), i = N().providersData.read(), t = [{
        label: e("Casino"),
        path: "/casino"
    }, {
        label: e("Game Providers"),
        path: ""
    }];
    return s.jsxs("div", {
        className: l(C, "page-max-width-wrap"),
        children: [s.jsx(u, {
            list: t,
            backStyle: a
        }), s.jsx("div", {
            className: "list",
            children: i.pageList.list.map(r => s.jsx(n, {
                item: r
            }, r.providerName))
        })]
    })
}
const w = "i1otx5x2",
    C = "s1bdse32";
export {
    b as P, k as a
};