var R = Object.defineProperty,
    V = Object.defineProperties;
var E = Object.getOwnPropertyDescriptors;
var l = Object.getOwnPropertySymbols;
var x = Object.prototype.hasOwnProperty,
    d = Object.prototype.propertyIsEnumerable;
var p = (s, e, a) => e in s ? R(s, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: a
    }) : s[e] = a,
    g = (s, e) => {
        for (var a in e || (e = {})) x.call(e, a) && p(s, a, e[a]);
        if (l)
            for (var a of l(e)) d.call(e, a) && p(s, a, e[a]);
        return s
    },
    h = (s, e) => V(s, E(e));
var j = (s, e) => {
    var a = {};
    for (var t in s) x.call(s, t) && e.indexOf(t) < 0 && (a[t] = s[t]);
    if (s != null && l)
        for (var t of l(s)) e.indexOf(t) < 0 && d.call(s, t) && (a[t] = s[t]);
    return a
};
import {
    r as c,
    _ as i,
    a as r,
    R as S
} from "./vendor-8c02be2a.js";
import {
    g as F,
    h as M,
    i as O,
    S as $,
    j as A
} from "./AllPlayers-fab6a982.js";
import {
    c as w
} from "./index-66d88a57.js";
import "./context-07d48342.js";
import "./Coin-19c44f04.js";
import "./CommonI18nProvider-b34bf9d5.js";
import "./main-057d7723.js";
import "./GameDetail-cc0ac7d8.js";
import "./react_router-dom_share-62544329.js";
import "./Share-8d7f396d.js";
const Z = c.forwardRef(function(q, k) {
        var f = q,
            {
                tabs: s = [],
                actions: e = [],
                src: a,
                className: t = "",
                children: n,
                topView: o,
                extSW: m,
                bg: u
            } = f,
            y = j(f, ["tabs", "actions", "src", "className", "children", "topView", "extSW", "bg"]);
        const N = i.useIsMobile(),
            v = i.useAccount(),
            I = i.useDialog();
        return c.useEffect(() => {
            (async W => {
                const _ = await i.http.get(`/account/self-exclusion/status/${W}/`);
                Object.values($).includes(_.status) && I.push(r.jsx(A, {}))
            })(v.userId)
        }, []), r.jsx(r.Fragment, {
            children: r.jsxs(F, h(g({
                className: `game-style-iframe ${t}`
            }, y), {
                children: [r.jsx("div", {
                    className: "game-area",
                    children: N ? n : r.jsxs("div", {
                        className: "game-main",
                        children: [o, r.jsxs("div", {
                            className: "game-main-cont",
                            children: [n, r.jsx(D, {
                                extSW: m,
                                src: a,
                                bg: u
                            })]
                        }), r.jsx(M, {
                            actions: e
                        })]
                    })
                }), r.jsx(O, {
                    tabs: s
                })]
            }))
        })
    }),
    D = S.memo(({
        src: s,
        extSW: e,
        bg: a
    }) => {
        const t = e !== "undefined" && e ? e : "",
            {
                ref: n,
                inView: o
            } = i.useInView(),
            m = c.useRef(null),
            u = c.useMemo(() => o ? J : L, [o]);
        return s ? r.jsx("div", {
            ref: n,
            className: w(b, "game-iframe-wrap"),
            children: t ? r.jsx(G, {
                extSW: t
            }) : r.jsx("iframe", {
                className: "game-iframe",
                style: u,
                ref: m,
                src: s,
                allow: "autopaly",
                allowFullScreen: !0
            })
        }) : r.jsx("div", {
            ref: n,
            className: w(b, "game-iframe-wrap"),
            children: a && r.jsx("div", {
                className: "slots-bg-img",
                children: r.jsx(i.Imgix, {
                    src: a,
                    alt: "",
                    args: "blur=150"
                })
            })
        })
    }),
    G = S.memo(({
        extSW: s
    }) => {
        const e = c.useRef(null);
        return c.useEffect(() => {
            const a = {
                target_element: "game_wrapper",
                launch_options: JSON.parse(s)
            };
            e.current ? e.current.launch(a, () => {}, i.notify) : i.utils.loadScript("https://casino.cur.a8r.games/public/sg.js", "sg").then(t => {
                t.launch(a, () => {}, i.notify), e.current = t
            }).catch(i.notify)
        }, [s]), r.jsx("div", {
            id: "game_wrapper",
            style: {
                width: "100%",
                height: "100%"
            }
        })
    }),
    J = {},
    L = {
        position: "fixed",
        width: 2,
        height: 1,
        left: 0,
        top: 0,
        opacity: 0
    },
    b = "wu8pmxx";
export {
    Z as GameSlotsIframeLayout, D as SlotsIframe
};