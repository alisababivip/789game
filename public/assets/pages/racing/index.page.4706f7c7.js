var T = Object.defineProperty,
    U = Object.defineProperties;
var _ = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var D = Object.prototype.hasOwnProperty,
    N = Object.prototype.propertyIsEnumerable;
var C = (e, n, r) => n in e ? T(e, n, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : e[n] = r,
    f = (e, n) => {
        for (var r in n || (n = {})) D.call(n, r) && C(e, r, n[r]);
        if (m)
            for (var r of m(n)) N.call(n, r) && C(e, r, n[r]);
        return e
    },
    R = (e, n) => U(e, _(n));
var j = (e, n) => {
    var r = {};
    for (var t in e) D.call(e, t) && n.indexOf(t) < 0 && (r[t] = e[t]);
    if (e != null && m)
        for (var t of m(e)) n.indexOf(t) < 0 && N.call(e, t) && (r[t] = e[t]);
    return r
};
import {
    j as s
} from "../../chunk-a4af42e8.js";
import {
    eq as q,
    eg as w,
    ev as v,
    e4 as G,
    ds as H,
    cT as y,
    du as W,
    dQ as L,
    dL as A,
    ed as I,
    e5 as J,
    er as z,
    e9 as O,
    cA as b,
    dy as Q,
    dF as K,
    dl as V
} from "../../chunk-64278058.js";
import {
    r as i,
    R as X
} from "../../chunk-73e80d68.js";
import {
    g as Y
} from "../../chunk-7459b96e.js";
import {
    p as F
} from "../../chunk-97fc744c.js";
import "../../chunk-cf010ec4.js";
import "../../chunk-07d6de63.js";

function S(e, n, r) {
    var t = new URL(e);
    return t.searchParams.set(n, r), t.toString()
}

function k() {
    let {
        lang: e
    } = w();
    const n = J(),
        r = z(),
        t = A().login,
        o = r.currencyName,
        g = O();
    e = e.replace(/-.+/, "");
    const l = r.enableLocaleCurrency ? g.currencyName : "USDFIAT";
    return {
        device: n ? "mobile" : "desktop",
        lang: e,
        isLogin: t,
        currency: o,
        showCurrency: l
    }
}
const Z = async function(t) {
    var o = t,
        {
            currency: e,
            isLogin: n
        } = o,
        r = j(o, ["currency", "isLogin"]);
    return e && n ? await W.post("/platform-horse/login", f({
        currency: e
    }, r)) : ""
};

function B({
    txt: e
}) {
    return v(), s.jsx("div", {
        style: {
            height: "84vh",
            whiteSpace: "break-spaces"
        },
        children: s.jsx(b, {
            children: e
        })
    })
}
const $ = i.memo(function(e) {
        const [n, r] = q({
            url: e.url,
            loading: !1
        }), {
            urlPathname: t
        } = w(), {
            t: o
        } = v(), g = G(), {
            device: l,
            lang: h,
            showCurrency: p,
            currency: d,
            isLogin: E
        } = k(), u = i.useRef(null), x = d === "JB";
        return i.useEffect(() => {
            !x && !g && u.current && M({
                device: l,
                currency: d,
                isLogin: E,
                showCurrency: p,
                lang: h
            }).then(a => {
                var c, P;
                (P = (c = u.current) == null ? void 0 : c.contentWindow) == null || P.postMessage({
                    type: "currency",
                    payload: a.currency
                }, "*")
            })
        }, [d, p]), i.useEffect(() => {
            !g && !x && (r({
                loading: !0
            }), M({
                device: l,
                currency: d,
                isLogin: E,
                showCurrency: p,
                lang: h
            }).then(a => {
                let c = S(e.url, "language", a.lang);
                c = S(c, "currency", a.currency), r({
                    loading: !1,
                    url: c
                })
            }))
        }, [h]), i.useEffect(() => {
            window.addEventListener("message", a => {
                a.data && a.data.racingEventsData && a.data.racingEventsData
            }), window.addEventListener("message", function(a) {
                a.origin === "https://bc-games.electro-bets.com" && a.data.type && a.data.type
            }, !1)
        }, []), i.useEffect(() => {
            var c;
            let a = {
                route: "/racing",
                action: {
                    fixture: "All"
                }
            };
            t.startsWith("/racing/history") ? a = {
                route: "/history/bets"
            } : t.startsWith("/racing/horse") ? a = {
                route: "/racing",
                action: {
                    fixture: "Horse"
                }
            } : t.startsWith("/racing/greyhound") && (a = {
                route: "/racing",
                action: {
                    fixture: "Greyhound"
                }
            }), u.current && ((c = u.current.contentWindow) == null || c.postMessage({
                event: "iframe_custom_event",
                detail: a
            }, "*"))
        }, [t]), x ? s.jsx(B, {
            txt: o("{{jb}} cannot be used in this game. Please switch to other assets.", {
                jb: H.freeCoin
            })
        }) : s.jsxs("div", {
            className: se,
            children: [!n.loading && s.jsx("iframe", {
                ref: u,
                src: n.url,
                width: "100%",
                height: "100%",
                frameBorder: 0
            }), n.loading && s.jsx(y, {})]
        })
    }),
    M = async function(t) {
        var o = t,
            {
                currency: e,
                isLogin: n
            } = o,
            r = j(o, ["currency", "isLogin"]);
        return W.post("/platform-horse/update", f({
            currency: e
        }, r))
    },
    ee = X.memo(function() {
        const e = k();
        let {
            lang: n
        } = w();
        n = n.replace(/-.+/, "");
        const r = L(async () => {
            try {
                const t = await Z(R(f({}, e), {
                    lang: n
                }));
                return t ? s.jsx($, {
                    url: t
                }) : s.jsx(b, {})
            } catch (t) {
                return Q(t), s.jsx(b, {
                    children: t.message
                })
            }
        }, [e.isLogin], {
            loadingNode: s.jsx(y, {})
        });
        return s.jsx(s.Fragment, {
            children: r
        })
    }),
    ne = i.memo(function() {
        const e = A().login,
            n = I(),
            {
                t: r
            } = v();
        return L(async () => e ? (await K.initData, s.jsx(ee, {})) : (n("#/login"), s.jsx(B, {
            txt: r("Please sign up or sign in before visiting Racing page.")
        })), [e], {
            loadingNode: s.jsx(y, {})
        })
    });

function re() {
    return i.useEffect(() => {
        const e = F.rooms.find(n => n.name === "Racing");
        e && F.joinRoom(e)
    }, []), L(async () => (await V.initData, s.jsx(ne, {})), [], {
        loadingNode: s.jsx(y, {})
    })
}
const te = !0,
    ae = ({
        ctx: e
    }) => ({
        documentProps: Y(e.lang, "sports")
    }),
    se = "s13bywgy";
export {
    re as Page, te as auth, ae as onPageData
};