var E = Object.defineProperty,
    F = Object.defineProperties;
var O = Object.getOwnPropertyDescriptors;
var v = Object.getOwnPropertySymbols;
var I = Object.prototype.hasOwnProperty,
    k = Object.prototype.propertyIsEnumerable;
var w = (e, a, i) => a in e ? E(e, a, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: i
    }) : e[a] = i,
    u = (e, a) => {
        for (var i in a || (a = {})) I.call(a, i) && w(e, i, a[i]);
        if (v)
            for (var i of v(a)) k.call(a, i) && w(e, i, a[i]);
        return e
    },
    P = (e, a) => F(e, O(a));
var L = (e, a) => {
    var i = {};
    for (var t in e) I.call(e, t) && a.indexOf(t) < 0 && (i[t] = e[t]);
    if (e != null && v)
        for (var t of v(e)) a.indexOf(t) < 0 && k.call(e, t) && (i[t] = e[t]);
    return i
};
import {
    j as s
} from "./chunk-a4af42e8.js";
import {
    dV as T,
    e5 as $,
    ev as _,
    ef as B,
    cJ as V,
    df as q,
    cS as j,
    ed as Z,
    ez as C,
    cL as G,
    cl as S,
    cT as A,
    cA as z,
    cu as D,
    eg as H
} from "./chunk-64278058.js";
import {
    r as m,
    R as J
} from "./chunk-73e80d68.js";
import {
    c as y
} from "./chunk-5bcb444f.js";
import {
    a as R
} from "./chunk-7a9ca7ff.js";

function K({
    item: e
}) {
    const {
        ref: a,
        isHover: i
    } = T(200), t = $(), {
        t: l
    } = _(), [c, n] = m.useState(!1), r = B(() => n(!1), [], [], !0);
    return s.jsxs("button", {
        className: W,
        ref: a,
        onClick: o => {
            o.nativeEvent.stopImmediatePropagation(), t && n(!c)
        },
        children: [s.jsx(V, {
            name: "Inform"
        }), (i || c) && a.current && s.jsx(q, {
            rect: a.current.getBoundingClientRect(),
            children: s.jsxs("div", {
                className: X,
                ref: r,
                children: [s.jsxs("div", {
                    className: "item",
                    children: [s.jsx("div", {
                        className: "label",
                        children: "RTP:"
                    }), s.jsxs("div", {
                        className: "value cl-primary",
                        children: [e.rtpDes, "%"]
                    })]
                }), e.biggestOdds && s.jsxs("div", {
                    className: "item",
                    children: [s.jsxs("div", {
                        className: "label",
                        children: [l("Recent biggest win"), ":"]
                    }), s.jsxs("div", {
                        className: "value",
                        children: [(e.biggestOdds / 1e4).toFixed(2), "X"]
                    })]
                }), s.jsxs("div", {
                    className: "bot",
                    children: [e.tags.map(o => s.jsx(j, {
                        className: "targe",
                        href: `/tagname/${o}`,
                        children: o
                    }, o)), s.jsx("div", {
                        className: "res",
                        children: s.jsx("div", {
                            children: e.providerName
                        })
                    })]
                })]
            })
        })]
    })
}
const X = "t146477t",
    W = "s117bhl3",
    Q = "/assets/play_icon.18f9c7cd.png",
    Y = "/assets/play_icon_hover.a14e4aee.png",
    ee = function() {
        return s.jsxs("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "9",
            height: "10",
            viewBox: "0 0 9 10",
            fill: "none",
            children: [s.jsx("path", {
                d: "M7.78243 7.00126C7.98931 8.18376 7.16525 9.0422 6.01681 9.23532C4.90775 9.42188 3.09993 9.42188 1.99087 9.23532C0.842435 9.04251 0.0183723 8.18438 0.225247 7.00157C0.400872 5.99813 1.25118 5.37282 2.28993 5.42657C3.04868 5.46594 3.51493 5.56469 4.05462 5.56469C4.60056 5.56469 4.96431 5.46594 5.71743 5.42657C6.75587 5.37219 7.60712 5.99782 7.78243 7.00126ZM3.86275 0.907195C4.95368 0.907195 5.83837 1.79157 5.83837 2.88313C5.83837 3.9747 4.95368 4.85907 3.86275 4.85907C2.7715 4.85907 1.88681 3.97438 1.88681 2.88313C1.88681 1.79188 2.7715 0.907195 3.86275 0.907195Z",
                fill: "url(#paint0_linear_451_3515)"
            }), s.jsx("path", {
                d: "M7.42806 5.14407C7.95931 5.2425 8.59868 5.525 8.85493 6.28813C9.09181 6.99375 8.81275 7.54688 8.49493 7.91282C8.39368 8.02938 8.19087 7.92813 8.24118 7.78532C8.37181 7.41594 8.42431 6.94407 8.21993 6.42157C8.02118 5.91313 7.65337 5.59282 7.31962 5.39563C7.18025 5.31344 7.26681 5.11407 7.42806 5.14407ZM5.63118 0.938442C5.47243 0.825317 5.58681 0.582817 5.77868 0.631255C5.98087 0.682192 6.189 0.761567 6.38306 0.883442C7.02337 1.28657 7.33993 1.99969 7.22712 2.79188C7.17462 3.16157 7.01056 3.44907 6.82587 3.66625C6.70431 3.80969 6.46431 3.69032 6.51431 3.51157C6.63181 3.09219 6.6665 2.55657 6.44056 1.96813C6.25431 1.48344 5.93587 1.15625 5.63118 0.938442Z",
                fill: "#26AB4B"
            }), s.jsx("defs", {
                children: s.jsxs("linearGradient", {
                    id: "paint0_linear_451_3515",
                    x1: "5.21662",
                    y1: "0.333274",
                    x2: "5.21662",
                    y2: "9.37524",
                    gradientUnits: "userSpaceOnUse",
                    children: [s.jsx("stop", {
                        stopColor: "#85F25E"
                    }), s.jsx("stop", {
                        offset: "1",
                        stopColor: "#33EF00"
                    })]
                })
            })]
        })
    };

function se(e) {
    return e > 1e3 ? (e / 1e3).toFixed(1) + "K" : e
}
const U = J.memo(function(r) {
        var o = r,
            {
                item: e,
                className: a,
                thumbnail: i = e.thumbnail,
                onClick: t,
                onView: l,
                showPlayBtn: c
            } = o,
            n = L(o, ["item", "className", "thumbnail", "onClick", "onView", "showPlayBtn"]);
        const {
            t: p
        } = _(), x = Z(), d = m.useRef(null);
        return m.useEffect(() => {
            const g = d.current;
            if (!e.isTrack && l && g) return C.SIObserver.add(g, h => {
                h && (e.isTrack = !0, l(), C.SIObserver.remove(g))
            }), () => {
                C.SIObserver.remove(g)
            }
        }, [l]), s.jsxs("div", P(u({
            ref: d,
            className: y(ae, a, e.disabled && "disabled"),
            onClick: t
        }, n), {
            children: [e.cornerIcon && s.jsx("img", {
                className: "corner-icon",
                src: e.cornerIcon
            }), s.jsxs(j, {
                className: "game-img-wrap",
                href: `/game/${e.gameChannel?e.gameChannel.gamePath:e.gameUnique}`,
                children: [s.jsx(G, {
                    className: "game-img",
                    src: e.thumbnail,
                    args: "w=200",
                    alt: ""
                }), e.onlineUsers > 0 && s.jsxs("div", {
                    className: "online",
                    children: [s.jsx(ee, {}), " ", s.jsx("span", {
                        children: se(e.onlineUsers)
                    })]
                }), e.disabled && s.jsx("div", {
                    className: "disabled-banner-wrap",
                    children: s.jsx("div", {
                        className: "disabled-txt",
                        children: p("This game is temporarily disabled. Please try other games.")
                    })
                }), s.jsxs("div", {
                    className: "hover-area",
                    children: [s.jsx("p", {
                        className: "game-name",
                        children: e.fullName
                    }), s.jsx("div", {
                        className: "play-icon",
                        children: s.jsxs("div", {
                            className: "play-icon-hover",
                            children: [s.jsx("img", {
                                alt: "play_icon",
                                className: "default-icon",
                                src: Q
                            }), s.jsx("img", {
                                alt: "play_icon_hover",
                                className: "hover-icon",
                                src: Y
                            })]
                        })
                    })]
                })]
            }), s.jsxs("div", {
                className: "bot-info",
                children: [s.jsxs("div", {
                    className: "game-tit",
                    children: [s.jsx(j, {
                        href: `/provider/${e.providerName}`,
                        className: "txt",
                        children: e.providerName
                    }), s.jsx(K, {
                        item: e
                    })]
                }), c && s.jsx(S, {
                    onClick: () => x(`/game/${e.gameChannel?e.gameChannel.gamePath:e.gameUnique}`),
                    disabled: e.disabled,
                    type: c === 1 ? "conic" : "conic2",
                    children: p("Play Now")
                })]
            })]
        }))
    }),
    ae = "s1raq561",
    ie = e => {
        const a = (e.total === 0 ? 0 : new D(e.current).div(e.total).mul(100).toFixed(0)) + "%";
        return s.jsxs("div", {
            className: y(ce, "load-more-wrap"),
            children: [s.jsx("span", {
                className: "current",
                children: e.current
            }), "\xA0 / \xA0", s.jsx("span", {
                className: "total",
                children: e.total
            }), s.jsx("div", {
                className: "progress",
                children: s.jsx("div", {
                    style: {
                        width: a
                    },
                    className: "green"
                })
            }), a]
        })
    };

function te(e) {
    const {
        urlParsed: a
    } = H(), [i, t] = m.useState(e), [l, c] = m.useTransition(), n = i.read(), r = m.useRef(null);
    r.current = m.useMemo(() => {
        const d = r.current;
        return d && d.pageList && n.pageList && n.pageList.page !== 1 && n.pageList.list.unshift(...d.pageList.list), n
    }, [n]), m.useEffect(() => {
        e !== i && c(() => {
            t(e)
        })
    }, [e]);
    const o = d => {
        const g = u(u({}, a.search), d);
        return `${a.pathname}?${new URLSearchParams(g).toString()}`
    };
    let p = 1,
        x = 1;
    return r.current.pageList && (p = r.current.pageList.page, x = r.current.pageList.totalPage), {
        cacheRefCurrent: r.current,
        isPending: l,
        page: p,
        totalPage: x,
        makeUrl: o
    }
}

function re({
    children: e,
    source: a,
    onGameClick: i,
    className: t,
    more: l = !0
}) {
    const {
        t: c
    } = _(), {
        cacheRefCurrent: n,
        isPending: r,
        page: o,
        totalPage: p,
        makeUrl: x
    } = te(a), {
        onClick: d,
        onView: g
    } = M(a), h = n.pageList;
    if (h.list.length === 0) return s.jsx("div", {
        style: {
            height: "50vh"
        },
        children: s.jsx(z, {})
    });
    const b = h.page >= h.totalPage;
    return s.jsxs("div", {
        className: y(le, t),
        children: [e, s.jsx("div", {
            className: "game-list",
            children: h.list.map((f, N) => s.jsx(U, {
                item: f,
                onClick: () => {
                    d(f, N), i && i()
                },
                onView: () => g(f, N)
            }, N))
        }), l && s.jsxs(s.Fragment, {
            children: [s.jsx(ie, {
                total: h.total,
                current: h.list.length
            }), s.jsx("div", {
                className: "more-btn-wrap",
                children: s.jsx(S, {
                    disabled: b,
                    className: "show-more",
                    loading: r,
                    children: s.jsx(j, {
                        href: o < p ? x({
                            page: o + 1
                        }) : void 0,
                        replace: !0,
                        children: c(b ? "No More" : "Load More")
                    })
                })
            })]
        })]
    })
}

function ne(e) {
    return s.jsx(m.Suspense, {
        fallback: s.jsx(A, {}),
        children: s.jsx(re, u({}, e))
    })
}

function M(e, a) {
    return m.useMemo(() => ({
        onClick: (i, t) => {
            const {
                expId: l,
                logId: c,
                strategyId: n,
                sectionId: r
            } = e.read();
            r && R.trackEvent("game_click", {
                section_id: r,
                exp_id: l,
                log_id: c,
                strategy_id: n,
                retrieve_id: i.retrieveId,
                original_item_id: a ? a() : "",
                item_id: String(i.gameIdentity.gameInfoId),
                item_type: "game",
                original_item_type: "game",
                is_recommendation: !0,
                module_sort: t,
                provider: i.providerName,
                game_tag: i.tags,
                game_category: i.categoryName
            })
        },
        onView: (i, t) => {
            const {
                expId: l,
                logId: c,
                strategyId: n,
                sectionId: r
            } = e.read();
            r && R.trackEvent("game_show", {
                section_id: r,
                exp_id: l,
                log_id: c,
                strategy_id: n,
                retrieve_id: i.retrieveId,
                original_item_id: a ? a() : "",
                item_id: String(i.gameIdentity.gameInfoId),
                item_type: "game",
                original_item_type: "game",
                is_recommendation: !0,
                module_sort: t,
                provider: i.providerName,
                game_tag: i.tags,
                game_category: i.categoryName
            })
        }
    }), [e, a])
}
const le = "s1qvj928",
    ce = "l1d038jc";
export {
    ne as G, U as a, M as u
};