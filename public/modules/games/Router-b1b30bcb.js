import {
    _ as g,
    r as m,
    a as t
} from "./vendor-8c02be2a.js";
import {
    r as a
} from "./react_router-dom_share-62544329.js";
import {
    u as p,
    G as l
} from "./context-07d48342.js";
import {
    w as x
} from "./CommonI18nProvider-b34bf9d5.js";
import {
    g as h
} from "./main-057d7723.js";
const v = x(function({
    tabs: o,
    gameUnique: r
}) {
    const {
        urlPathname: u
    } = g.usePageContext(), i = p(), [s, c] = m.useState([]);
    if (m.useEffect(() => {
            const e = setInterval(() => {
                const n = h();
                n.length && (c(n), clearInterval(e))
            }, 200)
        }, []), !s.length) return null;
    const f = s[0];
    return t.jsx(a.MemoryRouter, {
        children: t.jsxs(a.Routes, {
            location: u,
            children: [s.map(([e]) => t.jsx(a.Route, {
                path: `/game/${e}`,
                element: t.jsx(l, {
                    tabs: o,
                    gameId: r
                }, e)
            }, e)), t.jsx(a.Route, {
                path: "/game/*",
                caseSensitive: !0,
                element: t.jsx(l, {
                    tabs: o,
                    gameId: r
                }, i)
            }, f[0])]
        })
    })
});
export {
    v as
    default
};