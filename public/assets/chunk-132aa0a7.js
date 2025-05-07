var q = Object.defineProperty,
    G = Object.defineProperties;
var P = Object.getOwnPropertyDescriptors;
var k = Object.getOwnPropertySymbols;
var _ = Object.prototype.hasOwnProperty,
    H = Object.prototype.propertyIsEnumerable;
var U = (e, n, s) => n in e ? q(e, n, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: s
    }) : e[n] = s,
    g = (e, n) => {
        for (var s in n || (n = {})) _.call(n, s) && U(e, s, n[s]);
        if (k)
            for (var s of k(n)) H.call(n, s) && U(e, s, n[s]);
        return e
    },
    j = (e, n) => G(e, P(n));
import {
    j as a
} from "./chunk-a4af42e8.js";
import {
    c
} from "./chunk-5bcb444f.js";
import {
    e5 as p,
    en as I,
    dL as O,
    e3 as R,
    ez as S,
    d7 as J,
    cl as y,
    cJ as B,
    ds as L,
    cS as W,
    cL as $,
    ci as f,
    et as Q,
    dG as A,
    ev as C,
    ec as V,
    dZ as X,
    dh as Z,
    cT as K,
    d9 as Y,
    a as ee,
    da as ae
} from "./chunk-64278058.js";
import {
    r as u,
    R as F
} from "./chunk-73e80d68.js";
import {
    u as se,
    a as ne,
    H as re
} from "./chunk-c300dd90.js";
import {
    i as te
} from "./chunk-f1a029f1.js";
import {
    a as ie
} from "./chunk-9a1dea26.js";
import {
    C as le
} from "./chunk-f0f89bbe.js";

function oe(e, n, s, t, i) {
    const r = e.filter(l => l.isBg).find(l => l.isNl);
    return r ? N(r, s, t) : ""
}

function ce(e, n, s, t) {
    const i = e.filter(r => !r.isBg);
    return n ? i.filter(r => r.isLv && (t ? r.mobileBannerUrl : r.bannerUrl)).map(r => j(g({}, r), {
        imgSrc: N(r, s, t)
    })) : i.filter(r => r.isNl && (t ? r.mobileBannerUrl : r.bannerUrl)).map(r => j(g({}, r), {
        imgSrc: N(r, s, t)
    }))
}

function N(e, n, s) {
    return n ? s ? e.mobileBannerUrl : e.bannerUrl : s ? e.whiteMobileBannerUrl : e.whiteBannerUrl
}
var v = (e => (e[e.mobile = 0] = "mobile", e[e.mini = 1] = "mini", e[e.small = 2] = "small", e[e.normal = 3] = "normal", e))(v || {});

function me(e) {
    return e <= 660 ? 0 : e <= 730 ? 1 : e <= 1e3 ? 2 : 3
}

function de(e) {
    switch (e) {
        case 0:
            return 1;
        case 1:
            return 2;
        case 2:
            return 3;
        default:
            return 3
    }
}
const ue = /^\/|^$/;

function he({
    list: e,
    bannerNum: n
}) {
    return a.jsx(a.Fragment, {
        children: e.map((s, t) => {
            const i = s.linkUrl.includes("rio.bc.game") ? s.linkUrl.replace("bc.game", L.host) : s.linkUrl;
            return a.jsx(W, {
                href: i,
                target: ue.test(s.linkUrl) ? "_self" : "_blank",
                className: `img-box w-${n}`,
                children: a.jsx($, {
                    src: s.imgSrc,
                    args: "w=450",
                    alt: ""
                })
            }, t)
        })
    })
}

function xe({
    size: e,
    data: n
}) {
    const s = de(e),
        t = O().login,
        i = p(),
        r = R(),
        l = ce(n, t, r, i),
        d = S.splitFillList(l, s);
    return d.length ? a.jsxs(a.Fragment, {
        children: [a.jsxs("div", {
            className: c(ge),
            children: [a.jsx(J, {
                autoplay: {
                    delay: 7e3,
                    disableOnInteraction: !1,
                    pauseOnMouseEnter: !0
                },
                loop: !0,
                speed: 600,
                threshold: 6,
                spaceBetween: i ? 8 : 15,
                slidesPerView: "auto",
                navigation: {
                    prevEl: ".navigation-prev-home-banner",
                    nextEl: ".navigation-next-home-banner"
                },
                pagination: {
                    el: ".swiper-home-banner-pagination",
                    clickable: !0
                },
                children: d.map((h, m) => a.jsx(he, {
                    list: h,
                    bannerNum: s
                }, m))
            }), a.jsx(y, {
                className: c("navigation-prev-home-banner home-swiper-btn prev"),
                children: a.jsx(B, {
                    name: "Arrow"
                })
            }), a.jsx(y, {
                className: c("navigation-next-home-banner home-swiper-btn next"),
                children: a.jsx(B, {
                    name: "Arrow"
                })
            })]
        }), a.jsx("div", {
            className: c(je, "swiper-home-banner-pagination")
        })]
    }) : null
}
const be = u.memo(function({
        data: e,
        isCasino: n,
        className: s,
        children: t
    }) {
        const i = p(),
            [r, l] = u.useState(i ? v.mobile : v.normal),
            d = I(h => {
                l(me(h.width))
            }, 500);
        return a.jsxs("div", {
            ref: d,
            className: c(s, "banner"),
            children: [a.jsx(xe, {
                size: r,
                data: e
            }), t]
        })
    }),
    ge = "s1sfm7zm",
    je = "p15nk37t";
let z = 0;
const pe = () => {
        const {
            gameSockets: e
        } = Q(), n = e && e.find(o => o.socketDesc === "lastBet"), s = (n == null ? void 0 : n.socketEvent) || "home-game-throw", t = (n == null ? void 0 : n.socketNameSpace) || "home", i = A.socket(t), {
            t: r
        } = C(), l = p(), d = V(), h = X(), m = u.useRef([]), w = m.current.length, [x, b] = u.useState(l ? 0 : 1), {
            view: D,
            more: E
        } = se(), M = I(o => {
            o.width <= L.MAX_DESIGN_WIDTH ? b(0) : o.width <= 1e3 ? b(1) : b(2)
        }, 300), T = u.useMemo(() => S.intervalQueue(A.decodeBind(o => {
            d() && (m.current.unshift(Object.assign(o, {
                key: z
            })), w > 50 && m.current.pop(), z++, h())
        }, "json"), 600), []);
        return ne(i, s, T), a.jsx(Z, {
            children: a.jsx("div", {
                className: c(Ne, "last-bet-wrap"),
                ref: M,
                children: m.current.length === 0 ? a.jsx("div", {
                    className: "flex-center",
                    style: {
                        height: "100%"
                    },
                    children: a.jsx(K, {
                        className: "full-abs"
                    })
                }) : a.jsxs(a.Fragment, {
                    children: [a.jsxs(Y, {
                        children: [a.jsx("thead", {
                            children: a.jsxs("tr", {
                                children: [a.jsx("th", {
                                    children: r("Game")
                                }), a.jsx("th", {
                                    children: r("Player")
                                }), x >= 1 && a.jsx("th", {
                                    children: r("Bet Amount")
                                }), x > 1 && a.jsx("th", {
                                    children: r("Time")
                                }), a.jsx("th", {
                                    children: r("Multiplier")
                                }), a.jsx("th", {
                                    className: "m-width",
                                    children: r("Profit Amount")
                                })]
                            })
                        }), a.jsx("tbody", {
                            children: m.current.slice(0, E ? 50 : 10).map(o => a.jsx(fe, {
                                data: o,
                                size: x
                            }, o.key))
                        })]
                    }), w > 10 && D]
                })
            })
        })
    },
    fe = F.memo(({
        data: e,
        size: n
    }) => {
        function s() {
            ee.emit("openGameDetail", {
                gameUnique: e.gameUnique,
                betId: String(e.betId),
                userName: e.userName,
                userId: e.userId,
                gameId: e.gameId,
                distributeId: String(e.distributeId)
            })
        }
        const t = te(e.gameUnique);
        return a.jsxs("tr", {
            onClick: s,
            children: [a.jsxs("td", {
                className: "game-name",
                children: [a.jsx("img", {
                    src: t === "Default" ? ie.blackJack : t,
                    className: "game-icon",
                    alt: ""
                }), a.jsx("div", {
                    className: "name",
                    children: e.fullName || e.gameUnique
                })]
            }), a.jsx("td", {
                onClick: i => {
                    i.stopPropagation()
                },
                children: a.jsx(f.UserInfo, {
                    userId: e.userId,
                    name: e.userName,
                    avatar: !1
                })
            }), n >= 1 && a.jsx("td", {
                children: a.jsx(f.CoinFormat, {
                    icon: !0,
                    name: e.currencyName,
                    amount: Number(e.throwAmount)
                })
            }), n > 1 && a.jsx("td", {
                children: new Date(e.createTime).toLocaleTimeString()
            }), a.jsxs("td", {
                children: [Number(e.payout / 100).toFixed(2), "x"]
            }), a.jsx("td", {
                className: c("profitline", Number(e.payout / 100) < 1 ? "lose" : "win"),
                children: a.jsx(f.CoinFormat, {
                    icon: !0,
                    sign: !0,
                    name: e.currencyName,
                    amount: Number(e.profitAmount)
                })
            })]
        }, e.key)
    }),
    Ne = "s9k15t9",
    ve = F.memo(() => {
        const {
            t: e
        } = C(), [n, s] = u.useState(0), t = [{
            label: e("Latest bets"),
            value: pe
        }, {
            label: e("High rollers"),
            value: re
        }, {
            label: e("Wager contest"),
            value: le
        }];
        return a.jsxs("div", {
            className: c(we, "labtes-bet-race"),
            children: [a.jsx("div", {
                className: "tit",
                children: e("Latest bet & Race")
            }), a.jsx(ae, {
                className: ke,
                value: n,
                tabs: t,
                onChange: s
            })]
        })
    }),
    we = "sfad2b2",
    ke = "tya2ngb";
export {
    ve as L, be as S, oe as g
};