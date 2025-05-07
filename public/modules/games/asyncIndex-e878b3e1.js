var C = Object.defineProperty;
var I = Object.getOwnPropertySymbols;
var S = Object.prototype.hasOwnProperty,
    U = Object.prototype.propertyIsEnumerable;
var j = (e, a, t) => a in e ? C(e, a, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : e[a] = t,
    x = (e, a) => {
        for (var t in a || (a = {})) S.call(a, t) && j(e, t, a[t]);
        if (I)
            for (var t of I(a)) U.call(a, t) && j(e, t, a[t]);
        return e
    };
var f = (e, a, t) => (j(e, typeof a != "symbol" ? a + "" : a, t), t);
import {
    _ as n,
    r as l,
    a as s,
    l as w,
    R as p
} from "./vendor-8c02be2a.js";
import {
    r as E
} from "./react_router-dom_share-62544329.js";
import T from "./GameDetail-cc0ac7d8.js";
import {
    w as L
} from "./CommonI18nProvider-b34bf9d5.js";
import {
    A,
    a as q,
    S as D,
    G as P
} from "./Share-8d7f396d.js";
import {
    R as v
} from "./react_dom_share-6cd4a17b.js";
import "./context-07d48342.js";
import "./main-057d7723.js";
import "./index-66d88a57.js";
const ee = L(function() {
        const e = E.useParams(),
            {
                betId: a = ""
            } = e,
            t = n.useNavigate(),
            [c, i] = l.useState(null),
            [d, u] = l.useState(null),
            m = l.useCallback(async () => {
                try {
                    const r = await (h => {
                        const o = `/game/support/share-v3/info/detail/${h}/`;
                        return n.http.get(o)
                    })(a);
                    i({
                        gameUnique: r.gameChannel ? r.gameChannel.gamePath : r.gameUnique,
                        userName: r.nickName,
                        data: r.gameData,
                        userId: r.userId,
                        gameType: r.gameType
                    }), u(null)
                } catch (r) {
                    i(null), u(r)
                }
            }, [a]);
        return l.useEffect(() => {
            m()
        }, []), l.useEffect(() => {
            const r = () => {
                m()
            };
            return n.app.on("seed_update", r), () => {
                n.app.off("seed_update", r)
            }
        }, []), l.useEffect(() => {
            d && t("/")
        }, [d]), c ? s.jsx(T, x({}, c)) : s.jsx(n.Loading, {})
    }),
    R = w.memoize(async e => await n.http.get(`/game/support/share-v3/info/detail/${e}/`)),
    F = p.memo(e => {
        const {
            t: a
        } = n.useTranslation(), t = n.useCurrencyConfig(e.currencyName), c = e.odds >= 1e4, {
            data: i,
            error: d
        } = n.useAsync(() => R(e.betId));
        if (!i || d) return s.jsxs("div", {
            className: b,
            children: [s.jsx(n.CloseIcon, {
                onClick: () => n.pop.back()
            }), s.jsx(n.Loading, {})]
        }); {
            const u = i.gameData.betLog ? i.gameData.betLog.betId : e.originBetId,
                m = !!i.gameData.betLog,
                r = m ? "" : i.gameData.gv[0].gameId;
            return s.jsxs("div", {
                className: b,
                children: [s.jsx(n.CloseIcon, {
                    onClick: () => n.pop.back()
                }), s.jsxs("div", {
                    className: "tite",
                    children: [c ? s.jsx(A, {
                        show: !0
                    }) : s.jsx(q, {}), c ? s.jsx("p", {
                        children: a("Winning tastes sweet!")
                    }) : s.jsx("p", {
                        children: a("{{mascot}} took it all! 🥺", {
                            mascot: n.env.mascot
                        })
                    })]
                }), s.jsxs("div", {
                    className: "share-infos",
                    children: [s.jsxs("div", {
                        className: "info-left",
                        children: [s.jsxs("p", {
                            children: [a("User Name"), ": ", s.jsx("span", {
                                children: i.nickName
                            })]
                        }), s.jsxs("p", {
                            children: [a("Game"), ":", " ", s.jsx("span", {
                                children: e.fullName && e.fullName !== "" ? e.fullName : e.gameUnique
                            })]
                        })]
                    }), s.jsxs("div", {
                        className: "info-right",
                        children: [s.jsxs("p", {
                            children: [a("BigWin (Payout)"), ":", " ", s.jsxs("span", {
                                className: c ? "green" : "red",
                                children: [Number(e.odds) / 1e4, "x"]
                            })]
                        }), s.jsxs("p", {
                            children: [a("Profit"), ":", s.jsx("span", {
                                className: c ? "green" : "red",
                                children: n.utils.toValidAmount(new n.Decimal(e.winAmount).sub(e.betAmount), t.precisionUnit)
                            }), s.jsx("span", {
                                children: t.aliasCurrencyName
                            })]
                        })]
                    })]
                }), s.jsxs("div", {
                    className: "share-thirdpart",
                    children: [s.jsx("p", {
                        children: a("Share on social media")
                    }), s.jsx("div", {
                        className: "third-part-imgs",
                        children: s.jsx(D, {
                            third: !0,
                            isWin: c,
                            shareId: e.betId,
                            shortUrl: i.shortUrl,
                            shareObj: {
                                betId: u,
                                gameUnique: i.gameType === 3 ? "bestslots" : i.gameUnique,
                                userId: i.userId,
                                userName: i.nickName,
                                gameId: r,
                                isSingle: m
                            }
                        })
                    })]
                })]
            })
        }
    }),
    b = "s1dcm51b";
class W extends n.EventEmitter {
    constructor() {
        super(...arguments);
        f(this, "cache", {});
        f(this, "roomId", 0)
    }
    setItem(t, c) {
        let i = this.cache[t];
        const {
            count: d,
            isLike: u
        } = c;
        if (i) {
            let m = i.count,
                r = i.isLike;
            i.count = d, i.isLike = u, m === d && r === u || this.emit(t, i)
        } else i = c, this.cache[t] = c
    }
    getItem(t) {
        let c = this.cache[t];
        return c || (c = {
            count: 0,
            isLike: !1
        }, this.cache[t] = c), c
    }
}
const g = new W,
    _ = p.memo(({
        shareId: e
    }) => {
        const {
            t: a
        } = n.useTranslation(), {
            login: t
        } = n.useAccount(), c = n.useNavigate(), i = function(o) {
            const N = n.useForceUpdate();
            return g.cache[o] == null && (g.cache[o] = {
                count: 0,
                isLike: !1
            }), l.useEffect(() => {
                const k = String(o);
                return g.on(k, N), () => {
                    g.off(k, N)
                }
            }, [o]), g.cache[o]
        }(e), [d, u] = l.useState(!1), m = l.useRef(), r = () => {
            u(!1), y.destory(m.current)
        };
        return s.jsxs("div", {
            className: `${G} animation-like`,
            onClick: () => {
                t ? (u(!0), (o => n.http.post("/game/support/system-like/like-event/", {
                    likeItem: o,
                    sceneType: 2
                }))(e).then(o => {
                    o && g.setItem(e, {
                        count: o.clickCount,
                        isLike: o.hasSelfClick
                    })
                }), y.show(m.current, r)) : c("#/login")
            },
            children: [s.jsx(n.Icon, {
                className: i.isLike || d ? "red" : "common",
                name: "Like"
            }), s.jsx("div", {
                className: "like-dom",
                ref: m
            }), s.jsx("span", {
                className: "count-info",
                children: i.count > 0 ? (h = i.count, h > 0 && h < 10 ? "0" + h : h) : a("Like")
            })]
        });
        var h
    }),
    $ = p.memo(({
        changeFn: e
    }) => {
        const a = l.useRef(null);
        return l.useEffect(() => {
            var t, c;
            (t = a.current) == null || t.play(), (c = a.current) == null || c.addEventListener("complete", () => {
                var i;
                (i = a.current) == null || i.stop(), e(!1)
            })
        }, []), s.jsx(n.Lottie, {
            ref: a,
            path: "/modules/games/heat-0c37e0d5.json"
        })
    }),
    B = _,
    y = {
        show(e, a) {
            v.render(p.createElement(() => s.jsx($, {
                changeFn: a
            })), e)
        },
        destory(e) {
            v.unmountComponentAtNode(e)
        }
    },
    G = "an33jdl",
    se = L(function({
        data: e
    }) {
        const {
            t: a
        } = n.useTranslation(), t = n.useAccount(), c = n.useNavigate();
        return s.jsxs("div", {
            className: z,
            children: [s.jsx("div", {
                className: "mid-area",
                children: s.jsx(P, {
                    name: "msg",
                    gameUnique: e.chat.message.gameUnique,
                    betLog: e.chat.message,
                    open: !0,
                    chatroom: !0,
                    gameType: e.chat.message.gameType,
                    fullName: e.chat.message.fullName
                })
            }), s.jsxs("div", {
                className: "bottom-btns",
                children: [s.jsx(B, {
                    shareId: e.chat.message.betId
                }), s.jsxs("div", {
                    className: "share",
                    onClick: () => {
                        t.userId > 0 ? n.pop.push(s.jsx(F, x({}, e.chat.message))) : c("#/login")
                    },
                    children: [s.jsx(n.Icon, {
                        name: "Share"
                    }), a("Share")]
                })]
            })]
        })
    }),
    z = "s199nm6c";
export {
    se as MsgShareCard, ee as ShareDetail, g as shareLikeStore
};