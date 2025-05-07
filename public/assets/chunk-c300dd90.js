import {
    j as s
} from "./chunk-a4af42e8.js";
import {
    r as m,
    R as x
} from "./chunk-73e80d68.js";
import {
    ev as f,
    cJ as S,
    et as A,
    dG as g,
    ec as D,
    dZ as T,
    ez as q,
    d9 as z,
    ci as l,
    e5 as C,
    dO as M,
    du as U,
    en as F,
    ds as G,
    dh as E,
    cT as O,
    a as P
} from "./chunk-64278058.js";
import {
    c as h
} from "./chunk-5bcb444f.js";
import {
    i as B
} from "./chunk-f1a029f1.js";
import {
    a as H
} from "./chunk-9a1dea26.js";
const u = new Map;

function j(e) {
    return u.get(e) || 0
}

function p(e, t, a) {
    m.useEffect(() => (u.set(e, j(e) + 1), e.on(t, a), e.disconnected && e.connect(), () => {
        u.set(e, j(e) - 1), e.off(t, a), setTimeout(() => {
            j(e) === 0 && e.disconnect()
        }, 5e3)
    }), [])
}

function N() {
    const [e, t] = m.useState(!1), {
        t: a
    } = f();
    return {
        view: m.useMemo(() => s.jsx("div", {
            className: h("show-more", J),
            onClick: () => {
                t(!e)
            },
            children: s.jsxs("button", {
                children: [a(e ? "Show less" : "Show more"), " ", s.jsx(S, {
                    name: "Arrow",
                    style: {
                        transform: `rotate(${e?"-90deg":"90deg"})`
                    }
                })]
            })
        }), [e]),
        more: e
    }
}
const J = "sggkqph";
let d = 0;

function R() {
    const e = C(),
        [t, a] = m.useState(e ? 0 : 1),
        i = M(() => U.get("/game/support/home/v2/high-rollers/")),
        c = F(r => {
            r.width <= G.MAX_DESIGN_WIDTH ? a(0) : r.width <= 1200 ? a(1) : a(2)
        }, 300);
    return s.jsx(E, {
        children: s.jsx("div", {
            className: h($, "high-rollers-wrap"),
            ref: c,
            children: i.data ? s.jsx(_, {
                list: i.data.reverse().slice(0, 50).map(r => (d++, Object.assign(r, {
                    key: d
                }))),
                size: t
            }) : s.jsx("div", {
                className: "flex-center",
                style: {
                    height: "100%"
                },
                children: s.jsx(O, {
                    className: "full-abs"
                })
            })
        })
    })
}
const _ = x.memo(function({
        size: e,
        list: t
    }) {
        const {
            gameSockets: a
        } = A(), i = a && a.find(o => o.socketDesc === "highRoller"), c = (i == null ? void 0 : i.socketEvent) || "home-high-roller", r = (i == null ? void 0 : i.socketNameSpace) || "home", k = g.socket(r), {
            t: n
        } = f(), w = D(), b = T(), {
            view: I,
            more: v
        } = N(), y = m.useMemo(() => q.intervalQueue(g.decodeBind(o => {
            w() && (t.unshift(Object.assign(o, {
                key: d
            })), t.length > 50 && t.pop(), d++, b())
        }, "json"), 600), []);
        return p(k, c, y), s.jsxs(s.Fragment, {
            children: [s.jsxs(z, {
                children: [s.jsx("thead", {
                    children: s.jsxs("tr", {
                        children: [s.jsx("th", {
                            children: n("Game")
                        }), s.jsx("th", {
                            children: n("Player")
                        }), e >= 1 && s.jsx("th", {
                            children: n("Bet Amount")
                        }), e > 1 && s.jsx("th", {
                            children: n("Time")
                        }), s.jsx("th", {
                            children: n("Multiplier")
                        }), s.jsx("th", {
                            className: "m-width",
                            children: n("Profit Amount")
                        })]
                    })
                }), s.jsx("tbody", {
                    children: t.slice(0, v ? 50 : 10).map(o => s.jsx(L, {
                        data: o,
                        size: e
                    }, o.key))
                })]
            }), I]
        })
    }),
    L = x.memo(({
        data: e,
        size: t
    }) => {
        function a() {
            P.emit("openGameDetail", {
                gameUnique: e.gameUnique,
                betId: e.betId,
                userName: e.userName,
                userId: e.userId,
                gameId: e.gameId,
                distributeId: e.distributeId
            })
        }
        const i = B(e.gameUnique);
        return s.jsxs("tr", {
            onClick: a,
            children: [s.jsxs("td", {
                className: "game-name",
                children: [s.jsx("img", {
                    src: i === "Default" ? H.blackJack : i,
                    className: "game-icon",
                    alt: ""
                }), s.jsx("div", {
                    className: "name",
                    children: e.fullName || e.gameUnique
                })]
            }), s.jsx("td", {
                onClick: c => {
                    c.stopPropagation()
                },
                children: s.jsx(l.UserInfo, {
                    userId: e.userId,
                    name: e.userName,
                    avatar: !1
                })
            }), t >= 1 && s.jsx("td", {
                children: s.jsx(l.CoinFormat, {
                    icon: !0,
                    name: e.currencyName,
                    amount: Number(e.throwAmount)
                })
            }), t > 1 && s.jsx("td", {
                children: new Date(e.createTime).toLocaleTimeString()
            }), s.jsxs("td", {
                children: [Number(e.multiplier / 100).toFixed(2), "x"]
            }), s.jsx("td", {
                className: h("profitline", Number(e.multiplier / 100) < 1 ? "lose" : "win"),
                children: s.jsx(l.CoinFormat, {
                    icon: !0,
                    sign: !0,
                    name: e.currencyName,
                    amount: Number(e.profitAmount)
                })
            })]
        }, e.key)
    }),
    $ = "syfd3w6";
export {
    R as H, p as a, N as u
};