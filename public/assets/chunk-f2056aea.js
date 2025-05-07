import {
    j as a
} from "./chunk-a4af42e8.js";
import {
    ev as r,
    e5 as h,
    cS as i,
    cA as p,
    eh as d
} from "./chunk-64278058.js";
import {
    r as f
} from "./chunk-73e80d68.js";
import {
    G as u,
    c as x
} from "./chunk-de5e47f6.js";
import {
    c
} from "./chunk-5bcb444f.js";
import {
    G as j
} from "./chunk-fb34d5f5.js";
const g = d;

function b({
    link: e
}) {
    const {
        t
    } = r();
    return a.jsx(i, {
        className: "num",
        href: e,
        children: a.jsx("span", {
            children: t("View all")
        })
    })
}

function v({
    list: e
}) {
    const {
        t
    } = r(), l = f.useCallback((s, n) => a.jsx(i, {
        href: `/tagname/${s.value}`,
        className: c(m, "block-item"),
        children: t(s.label)
    }, s.value), []);
    return e ? a.jsx(u, {
        className: c("themes", o),
        title: t("Themes"),
        calcSize: x,
        getData: () => e.map(s => ({
            label: s,
            value: s
        })),
        renderItem: l,
        navChildren: a.jsx(b, {
            link: "/themes"
        })
    }) : null
}

function k() {
    const {
        t: e
    } = r(), t = h(), l = g().themesData.read(), s = [{
        label: e("Casino"),
        path: "/casino"
    }, {
        label: e("Themes"),
        path: ""
    }];
    return a.jsxs("div", {
        className: c(o, "page-max-width-wrap"),
        children: [a.jsx(j, {
            list: s,
            backStyle: t
        }), l.tags && l.tags.length > 0 ? a.jsx("div", {
            className: "list",
            children: l.tags.map(n => a.jsx(i, {
                href: `/tagname/${n}`,
                className: c(m, "block-item"),
                children: e(n)
            }, n))
        }) : a.jsx(p, {})]
    })
}
const m = "i1ccon79",
    o = "s1ecgbg";
export {
    v as T, k as a
};