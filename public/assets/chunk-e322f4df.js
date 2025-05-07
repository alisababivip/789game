var E = Object.defineProperty,
    F = Object.defineProperties;
var H = Object.getOwnPropertyDescriptors;
var P = Object.getOwnPropertySymbols;
var T = Object.prototype.hasOwnProperty,
    q = Object.prototype.propertyIsEnumerable;
var B = (e, a, l) => a in e ? E(e, a, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: l
    }) : e[a] = l,
    N = (e, a) => {
        for (var l in a || (a = {})) T.call(a, l) && B(e, l, a[l]);
        if (P)
            for (var l of P(a)) q.call(a, l) && B(e, l, a[l]);
        return e
    },
    G = (e, a) => F(e, H(a));
import {
    j as s
} from "./chunk-a4af42e8.js";
import {
    eg as C,
    eh as z,
    ev as b,
    d8 as _,
    ed as w,
    d1 as R,
    e5 as f,
    ds as L,
    cB as S
} from "./chunk-64278058.js";
import {
    R as M,
    r as v
} from "./chunk-73e80d68.js";
import {
    c as I
} from "./chunk-5bcb444f.js";
import {
    G as D
} from "./chunk-55136115.js";
import {
    G as O
} from "./chunk-405456f5.js";
import {
    A as Y
} from "./chunk-4b36b7ff.js";
import {
    o as Z
} from "./chunk-b45bd069.js";
import {
    G as V
} from "./chunk-fb34d5f5.js";

function y() {
    const {
        urlParsed: e
    } = C();
    return a => {
        const l = N(N({}, e.search), a);
        return `${e.pathname}?${new URLSearchParams(l).toString()}`
    }
}
const $ = z;

function J({
    parmasVal: e,
    providerName: a
}) {
    const l = y(),
        {
            t
        } = b(),
        {
            urlPathname: r
        } = C(),
        i = {
            label: t("You may like"),
            value: ""
        },
        h = r === "/gamelist/slots",
        c = !!a,
        u = v.useMemo(() => {
            const m = [{
                label: t("Popular"),
                value: "popular"
            }, {
                label: "A-Z",
                value: "a-z"
            }, {
                label: "Z-A",
                value: "z-a"
            }, {
                label: t("New"),
                value: "new"
            }];
            return c || (h ? m.splice(1, 0, G(N({}, i), {
                value: "youmaylike"
            })) : m.unshift(i)), m
        }, [c, h]);
    v.useEffect(() => {
        c && e === i.value && p(l({
            sort: "popular",
            page: 1
        }), {
            replace: !0
        })
    }, [c, e]);
    const p = w(),
        x = m => {
            p(l({
                sort: m,
                page: 1
            }), {
                replace: !0
            })
        };
    return s.jsxs("div", {
        className: "filter-sort",
        children: [s.jsx("div", {
            className: "label",
            children: t("Sort by")
        }), s.jsx(R, {
            value: e,
            options: u,
            onChange: x
        })]
    })
}

function A() {
    const {
        t: e
    } = b();
    return v.useMemo(() => ({
        label: e("All Providers"),
        value: {
            gameNum: 0,
            providerId: 0,
            providerName: "all providers"
        }
    }), [])
}

function U({
    parmasVal: e,
    hidelabel: a
}) {
    var r;
    const l = y(),
        t = (r = $().providerList) == null ? void 0 : r.read();
    return t && t.length > 0 ? s.jsx(K, {
        makeUrl: l,
        hidelabel: a,
        parmasVal: e,
        providerList: t
    }) : null
}

function K({
    makeUrl: e,
    parmasVal: a,
    providerList: l,
    hidelabel: t
}) {
    const {
        t: r
    } = b(), i = A(), h = f(), c = v.useMemo(() => {
        const n = Z(l, ["providerName"], ["asc"]).map(o => ({
            label: o.providerName,
            value: o
        }));
        return [i, ...n]
    }, [l]), u = w(), p = a.split(","), x = v.useCallback(() => {
        const n = p.length,
            o = a === "" ? i.label : h ? s.jsxs(s.Fragment, {
                children: [r("Provider"), ": ", s.jsx("span", {
                    className: "cl-primary",
                    children: n
                })]
            }) : n;
        return s.jsx("div", {
            className: "all-provider",
            children: o
        })
    }, [p]), m = (n, o) => {
        const d = n.providerName;
        if (d === i.value.providerName) u(e({
            providerName: "",
            page: 1
        }), {
            replace: !0
        });
        else if (o) {
            const g = new RegExp(`${d},?|,?${d}`),
                k = a.replace(g, "");
            u(e({
                providerName: k,
                page: 1
            }), {
                replace: !0
            })
        } else {
            const g = a ? a + "," + d : d;
            u(e({
                providerName: g,
                page: 1
            }), {
                replace: !0
            })
        }
    }, j = v.useCallback((n, o) => n.label.toLocaleLowerCase().includes(o.toLocaleLowerCase()), []);
    return s.jsxs("div", {
        className: "filter-provider",
        children: [!t && s.jsx("div", {
            className: "label",
            children: r("Provider")
        }), s.jsx(R, {
            value: i.value,
            options: c,
            onChange: m,
            filter: j,
            renderLabel: x,
            className: X,
            renderOption: n => s.jsx(Q, {
                onCheck: m,
                checked: !!p.find(o => o === n.value.providerName),
                label: n.label,
                item: n.value
            })
        })]
    })
}
const Q = M.memo(function({
        label: e,
        item: a,
        checked: l,
        onCheck: t
    }) {
        const {
            t: r
        } = b(), i = A(), h = a.providerId === 0;
        return s.jsxs("div", {
            onClick: c => {
                c.stopPropagation(), t(a, l)
            },
            className: I(l && "light", W, h && "clear-all"),
            children: [e !== i.label && s.jsx(_, {
                type: "checkbox",
                value: l
            }), s.jsx("div", {
                className: "provider-name",
                title: e,
                children: a.providerId === 0 ? r("All Providers") : e
            }), a.gameNum > 0 && s.jsx("div", {
                className: "cl-primary",
                children: a.gameNum
            })]
        })
    }),
    W = "p8xhzht",
    X = "sle65vm";

function aa({
    sectionId: e,
    gameUnique: a,
    providerName: l,
    tag: t
}) {
    const {
        t: r
    } = b(), i = f();

    function h() {
        switch (e) {
            case "casino_picks_for_you":
                return [{
                    label: r("Picks For You"),
                    path: ""
                }];
            case "game_related":
                return [{
                    label: r("Game"),
                    path: `/game/${a}`
                }, {
                    label: r("Related Games"),
                    path: ""
                }];
            case "game_next":
                return [{
                    label: r("Details"),
                    path: `/game/${a}/detail`
                }, {
                    label: r("Related Games"),
                    path: ""
                }];
            case "casino_bc":
                return [{
                    label: r("Casino"),
                    path: "/casino"
                }, {
                    label: r("{{site}} Originals", {
                        site: L.siteName
                    }),
                    path: ""
                }];
            case "casino_slots":
                return [{
                    label: r("Casino"),
                    path: "/casino"
                }, {
                    label: r("Slots"),
                    path: ""
                }];
            case "casino_live":
                return [{
                    label: r("Casino"),
                    path: "/casino"
                }, {
                    label: r("Live"),
                    path: ""
                }];
            case "home_best":
                return [{
                    label: r("Home"),
                    path: "/"
                }, {
                    label: r("Top Rated Games"),
                    path: ""
                }];
            case "home_recommend":
                return [{
                    label: r("Home"),
                    path: "/"
                }, {
                    label: r("Recommended"),
                    path: ""
                }];
            default:
                return l ? [{
                    label: l,
                    path: `/provider/${l}`
                }, {
                    label: r("Related Games"),
                    path: ""
                }] : [{
                    label: r("Casino"),
                    path: "/casino"
                }, {
                    label: r("Related Games"),
                    path: ""
                }]
        }
    }
    return e ? s.jsx(V, {
        backStyle: i,
        list: h()
    }) : null
}

function ea({
    tagName: e
}) {
    const {
        t: a
    } = b(), l = f();

    function t() {
        switch (e) {
            case "megaways":
                return [{
                    label: a("Casino"),
                    path: "/casino"
                }, {
                    label: a("Megaways"),
                    path: ""
                }];
            case "exclusive":
                return [{
                    label: a("Casino"),
                    path: "/casino"
                }, {
                    label: a("{{site}} Exclusive", {
                        site: L.siteName
                    }),
                    path: ""
                }];
            case "table-games":
                return [{
                    label: a("Casino"),
                    path: "/casino"
                }, {
                    label: a("Table Games"),
                    path: ""
                }];
            case "high-volatility":
                return [{
                    label: a("Casino"),
                    path: "/casino"
                }, {
                    label: a("High Volatility"),
                    path: ""
                }];
            case "buy-extrabal-feature":
                return [{
                    label: a("Bingo"),
                    path: "/bingolist"
                }, {
                    label: a("Buy Extra Ball Feature"),
                    path: ""
                }];
            case "jackpot":
                return [{
                    label: a("Bingo"),
                    path: "/bingolist"
                }, {
                    label: a("Jackpot"),
                    path: ""
                }];
            case "bingo":
                return [{
                    label: a("Bingo"),
                    path: "/bingolist"
                }, {
                    label: a("All Bingo Games"),
                    path: ""
                }];
            case "bingo-new-release":
                return [{
                    label: a("Bingo"),
                    path: "/bingolist"
                }, {
                    label: a("New Release"),
                    path: ""
                }];
            case "keno":
                return [{
                    label: a("Bingo"),
                    path: "/bingolist"
                }, {
                    label: a("Keno"),
                    path: ""
                }];
            case "scratch-cards":
                return [{
                    label: a("Bingo"),
                    path: "/bingolist"
                }, {
                    label: a("Scratch Cards"),
                    path: ""
                }];
            case "hot":
                return [{
                    label: a("Casino"),
                    path: "/casino"
                }, {
                    label: a("Hot Games"),
                    path: ""
                }];
            case "blackjack":
                return [{
                    label: a("Casino"),
                    path: "/casino"
                }, {
                    label: a("Blackjack"),
                    path: ""
                }];
            case "roulette":
                return [{
                    label: a("Casino"),
                    path: "/casino"
                }, {
                    label: a("Roulette"),
                    path: ""
                }];
            case "baccarat":
                return [{
                    label: a("Casino"),
                    path: "/casino"
                }, {
                    label: a("Baccarat"),
                    path: ""
                }];
            case "feature-buy-in":
                return [{
                    label: a("Casino"),
                    path: "/casino"
                }, {
                    label: a("Feature Buy-in"),
                    path: ""
                }];
            case "new-releases":
                return [{
                    label: a("Casino"),
                    path: "/casino"
                }, {
                    label: a("New Releases"),
                    path: ""
                }];
            default:
                return [{
                    label: a("Casino"),
                    path: "/casino"
                }, {
                    label: e,
                    path: ""
                }]
        }
    }
    return e ? s.jsx(V, {
        backStyle: l,
        list: t()
    }) : null
}
const la = function({
        isTag: e
    }) {
        const {
            data: a
        } = $(), l = C(), t = f(), {
            t: r
        } = b(), i = y(), h = w(), c = e ? l.routeParams.tagName : l.routeParams.sectionId, u = l.urlParsed.search.gameUnique || "", p = l.urlParsed.search.providerName || "", x = l.urlPathname === "/gamelist/slots", m = l.urlParsed.search.sort || "", j = x ? m || "popular" : m, n = l.urlParsed.search.showingBlocked || "", o = e ? c : O.sectionIdDecode(c), d = e ? o : l.urlParsed.search.tag || "", g = o === "casino_slots" || o === "casino_live";
        return v.useEffect(() => {
            window.scrollTo(0, 0)
        }, [c]), s.jsx("div", {
            className: sa,
            children: s.jsxs("div", {
                className: "slots-container page-max-width-wrap",
                children: [s.jsxs("div", {
                    className: I("game-opt-wrap", e && "tag-filter-wrap"),
                    children: [s.jsxs("div", {
                        className: "path-wrap",
                        children: [e ? s.jsx(ea, {
                            tagName: o
                        }) : s.jsx(aa, {
                            sectionId: o,
                            gameUnique: u,
                            providerName: p,
                            tag: d
                        }), g && s.jsxs("div", {
                            className: "region-block",
                            children: [s.jsx(_, {
                                value: Number(n) === 1,
                                onChange: k => {
                                    h(i({
                                        showingBlocked: k ? 1 : 0
                                    }))
                                }
                            }), r("Show Blocked")]
                        })]
                    }), g && s.jsxs("div", {
                        className: "filter-wrap",
                        children: [s.jsx(J, {
                            parmasVal: j,
                            providerName: p
                        }), s.jsx(S, {
                            children: s.jsx(U, {
                                parmasVal: p
                            })
                        })]
                    }), e && s.jsx(S, {
                        children: s.jsx(U, {
                            hidelabel: t,
                            parmasVal: p
                        })
                    })]
                }), s.jsx(D, {
                    source: a
                }), o === "casino_bc" && s.jsx(Y, {})]
            })
        })
    },
    sa = "s1m5fjkg";
export {
    la as G
};