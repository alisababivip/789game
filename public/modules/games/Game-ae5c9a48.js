var k = Object.defineProperty;
var T = (a, e, s) => e in a ? k(a, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: s
}) : a[e] = s;
var m = (a, e, s) => (T(a, typeof e != "symbol" ? e + "" : e, s), s);
import {
    R as v,
    _ as o,
    a as t,
    r
} from "./vendor-8c02be2a.js";
import {
    q as C,
    J as R,
    s as f,
    K as L,
    r as V,
    t as P,
    P as D,
    u as M,
    v as W,
    w as G,
    d as E,
    x as F,
    y as H,
    l as O,
    o as A,
    $ as g,
    z as $
} from "./AllPlayers-fab6a982.js";
import {
    c as S
} from "./index-66d88a57.js";
import {
    c as d,
    b as x
} from "./context-07d48342.js";
import "./Coin-19c44f04.js";
import {
    G as u
} from "./index-f3bd3ea1.js";
import {
    A as q
} from "./GameAutoTips-8fe2ab8a.js";
import {
    g as z
} from "./namespace-3892e441.js";
import "./CommonI18nProvider-b34bf9d5.js";
import "./main-057d7723.js";
import "./GameDetail-cc0ac7d8.js";
import "./react_router-dom_share-62544329.js";
import "./Share-8d7f396d.js";
const K = v.memo(({
        gameInfo: a
    }) => {
        const {
            t: e
        } = o.useTranslation();
        return d().gameChannel, t.jsx(o.Dialog, {
            title: e("What Game Is This?"),
            children: t.jsx(C, {
                children: t.jsxs("div", {
                    className: "item",
                    children: [t.jsx("h2", {
                        children: e("What Is {{gamename}}?", {
                            gamename: a.fullName
                        })
                    }), t.jsx("div", {
                        className: "content",
                        children: a.details.split(`
`).map((s, n) => t.jsx("p", {
                            children: `${s}`
                        }, n.toString()))
                    }), t.jsx("h2", {
                        children: e("How To Play {{gamename}}?", {
                            gamename: a.fullName
                        })
                    }), t.jsxs("div", {
                        className: "content",
                        children: [t.jsx("p", {
                            children: e("1. Target payout must be below the limbo result to win.")
                        }), t.jsx("p", {
                            children: e("2. The maximum target multiplier is x1,000,000.")
                        }), t.jsx("p", {
                            children: e("3. This is not really the edge of hell, rest assured to catch up.")
                        })]
                    }), a.slotsInfo && a.slotsInfo.rtpDes && t.jsxs(t.Fragment, {
                        children: [t.jsx("h2", {
                            children: e("What is the {{gamename}} return rate?", {
                                gamename: a.fullName
                            })
                        }), t.jsx("div", {
                            className: "help-content",
                            children: t.jsx("p", {
                                children: e("RTP (Return to Player) is {{rtp}}%.", {
                                    rtp: a.slotsInfo.rtpDes
                                })
                            })
                        })]
                    })]
                })
            })
        })
    }),
    _ = function() {
        const [a, e] = r.useState(-1), s = r.useRef();
        return r.useEffect(() => (s.current = setInterval(() => {
            e(Math.ceil(3 * Math.random()))
        }, 5e3), () => {
            clearInterval(s.current)
        }), []), t.jsx("div", {
            className: J,
            children: t.jsxs("div", {
                className: "bg-star show_" + a,
                children: [t.jsx("div", {
                    className: "l-star e-r"
                }), t.jsx("div", {
                    className: "l-star s-p"
                }), t.jsx("div", {
                    className: "l-star r-p"
                })]
            })
        })
    },
    J = "bxmu3uc",
    Q = "/modules/games/limbo_rocket-e2fbb7ee.png",
    U = r.memo(function() {
        const a = d(),
            e = x(),
            s = r.useRef(null),
            n = o.useMountedState(),
            i = r.useRef(1),
            l = r.useRef(!0),
            [c, p] = r.useState(1),
            N = () => {
                e.gameIsWin ? e.gameResult <= 2 ? a.sounds.playSound("lt2Sound") : e.gameResult <= 5 ? a.sounds.playSound("lt5Sound") : e.gameResult <= 10 ? a.sounds.playSound("lt10Sound") : a.sounds.playSound("mt10Sound") : a.sounds.playSound("boomSound")
            };
        return r.useEffect(() => {
            if (l.current) l.current = !1;
            else {
                if (e.settings.fastEnable) N(), s.current && (s.current.innerHTML = e.gameResult.toFixed(2));
                else {
                    p(2);
                    const I = {
                        num: i.current
                    };
                    R.gsap.to(I, .5, {
                        num: e.gameResult,
                        ease: "Linear.easeNone",
                        onUpdate: () => {
                            s.current && (s.current.innerHTML = I.num.toFixed(2))
                        }
                    }), setTimeout(() => {
                        N(), n() && p(3), setTimeout(() => {
                            n() && p(1)
                        }, 300)
                    }, 200)
                }
                i.current = e.gameResult
            }
        }, [e.gameResult]), t.jsx("div", {
            className: S(X, e.controlIdx > 1 && "auto"),
            children: t.jsxs("div", {
                className: "notranslate game-rocket " + (e.settings.fastEnable ? "game-turbo" : ""),
                children: [t.jsxs("div", {
                    className: "rocket-number " + (l.current ? "" : e.gameIsWin ? "game-green" : "game-red"),
                    children: [t.jsx("span", {
                        ref: s,
                        children: "1.00"
                    }), t.jsx("span", {
                        className: "gv-x",
                        children: "×"
                    }), t.jsx("div", {
                        className: "rocket-boom " + (c > 1 ? "boom" : "")
                    })]
                }), t.jsxs("div", {
                    className: "rocket-wrap " + (c === 3 ? "flying boom" : c === 2 ? "flying" : ""),
                    children: [t.jsx("div", {
                        className: "rocket-img",
                        children: t.jsx("img", {
                            src: Q,
                            alt: "rocket.png"
                        })
                    }), t.jsx("div", {
                        className: "rocket-fire"
                    })]
                })]
            })
        })
    }),
    X = "g1nyukwi",
    Y = r.memo(function() {
        const {
            t: a
        } = o.useTranslation(), e = d(), s = x(), n = o.useIsMobile();
        return t.jsxs("div", {
            className: Z,
            children: [t.jsx(_, {}), t.jsx(U, {}), t.jsxs("div", {
                className: "payout-inputs",
                children: [t.jsx(u.PayoutInput, {
                    label: a("Payout"),
                    value: s.payout,
                    disabled: s.isBetting,
                    onChange: i => s.payout = i,
                    max: 1e6,
                    min: 1.01,
                    precision: 2
                }), t.jsxs("div", {
                    className: "winchance-wrap",
                    children: [t.jsx("p", {
                        className: "chance-label",
                        children: a("Win Chance")
                    }), t.jsxs("div", {
                        className: "chance-value",
                        children: [t.jsx("span", {
                            className: "payout-span",
                            children: e.getChance(s.payout, n)
                        }), t.jsx("span", {
                            className: "percent-span",
                            children: "%"
                        })]
                    })]
                })]
            })]
        })
    }),
    Z = "g8vzywh",
    ee = r.memo(() => {
        const a = x(),
            e = f.useSingleDetailNew();
        return t.jsxs(t.Fragment, {
            children: [t.jsx(L, {
                list: a.myBets,
                keyof: "betId",
                onDetail: e,
                getResult: s => `${(s.gameValue/100).toFixed(2)}x`
            }), t.jsx(Y, {})]
        })
    }),
    te = r.memo(function() {
        const a = d(),
            e = x(),
            s = o.useIsMobile(),
            {
                t: n
            } = o.useTranslation(),
            i = () => t.jsx(o.Button, {
                className: "bet-button",
                type: "conic",
                onClick: () => {
                    e.autoBet.isRunning ? a.autoBet.stop() : a.autoBet.start().catch(o.notify)
                },
                children: e.autoBet.isRunning ? n("Stop Auto Bet") : n("Start Auto Bet")
            });
        return t.jsxs("div", {
            className: S(se, "game-form"),
            children: [s && i(), t.jsx(u.CoinInput, {
                checkIncrease: !0
            }), t.jsx(u.TimesInput, {}), t.jsx(u.IncreaseInput, {}), t.jsx(u.IncreaseInput, {
                isLose: !0
            }), t.jsx(u.StopInput, {}), t.jsx(u.StopInput, {
                isLose: !0
            }), t.jsx(q, {}), !s && i()]
        })
    }),
    se = "ahqr2h8",
    ae = r.memo(function() {
        const {
            t: a
        } = o.useTranslation(), e = o.useIsMobile(), s = d(), n = x(), i = () => t.jsx(o.Button, {
            className: "bet-button",
            type: "conic",
            disabled: n.isBetting,
            onClick: s.handGameBet,
            children: a("Bet")
        });
        return t.jsxs("div", {
            className: ne,
            children: [e && i(), t.jsx(u.CoinInput, {}), !e && i()]
        })
    }),
    ne = "m1e27pwr",
    ie = v.memo(() => {
        const {
            t: a
        } = o.useTranslation(), e = d(), s = o.usePageProps().gameInfo.read(), n = e.config.fairComponent, i = [{
            title: a("What Game Is This?"),
            node: t.jsx(K, {
                gameInfo: s
            })
        }, {
            title: a("Fairness"),
            node: t.jsx(o.Dialog, {
                title: a("Fairness"),
                children: t.jsx(n, {})
            })
        }, {
            title: a("Max Profits"),
            node: t.jsx(V, {})
        }];
        return t.jsx(P, {
            manualControl: t.jsx(ae, {}),
            autoControl: t.jsx(te, {}),
            gameView: t.jsx(ee, {}),
            tabs: [{
                label: a("All Bets"),
                value: f.AllBetNew
            }, {
                label: a("My bets"),
                value: f.MyBetNew
            }],
            actions: [t.jsx(D, {}), t.jsx(M, {}), t.jsx(W, {}), t.jsx(G, {}), t.jsx(E, {}), t.jsx(F, {}), t.jsx(H, {
                list: i
            })]
        })
    }),
    oe = f.withSingleDetailNew({
        onValidate: (a, e, s, n, i, l) => {
            const c = l.includes("96") ? "4" : "1";
            let p = y.validateLink + "?s=" + a + "&c=" + e + "&he=" + c + "&n=" + s;
            window.open(p)
        },
        result: ({
            betLog: a
        }) => {
            const {
                t: e
            } = o.useTranslation(), s = d(), {
                payout: n
            } = a.bv, i = a.gv / 100, l = (100 - s.gameChannel) / n, c = n / 100;
            return t.jsxs(O, {
                className: "rt_items",
                children: [t.jsxs("div", {
                    className: "item-wrap",
                    children: [t.jsxs("div", {
                        className: "item-num",
                        children: [t.jsx(o.Icon, {
                            className: "result",
                            name: "Result"
                        }), e("Result")]
                    }), t.jsx("div", {
                        className: "item-desc",
                        children: i
                    })]
                }), t.jsxs("div", {
                    className: "item-wrap",
                    children: [t.jsxs("div", {
                        className: "item-num",
                        children: [t.jsx(o.Icon, {
                            className: "bettype",
                            name: "Bet"
                        }), e("Bet")]
                    }), t.jsx("div", {
                        className: "item-desc",
                        children: t.jsxs("span", {
                            className: "mthan",
                            children: [">=", c]
                        })
                    })]
                }), t.jsxs("div", {
                    className: "item-wrap",
                    children: [t.jsxs("div", {
                        className: "item-num",
                        children: [t.jsx(o.Icon, {
                            className: "chance",
                            name: "Chance"
                        }), e("Chance")]
                    }), t.jsx("div", {
                        className: "item-desc",
                        children: (100 * l).toFixed(2) + "%"
                    })]
                })]
            })
        }
    }),
    le = v.memo(function({
        bodyLock: a
    }) {
        return t.jsx(A, {
            htmlName: "limbo",
            bodyLock: a
        })
    }),
    j = g.Reader,
    B = g.Writer,
    w = g.util,
    h = g.roots.gameLimbo || (g.roots.gameLimbo = {});
h.BetValue = (() => {
    function a(e) {
        if (e)
            for (let s = Object.keys(e), n = 0; n < s.length; ++n) e[s[n]] != null && (this[s[n]] = e[s[n]])
    }
    return a.prototype.payout = 0, a.encode = function(e, s) {
        return s || (s = B.create()), e.payout != null && Object.hasOwnProperty.call(e, "payout") && s.uint32(8).sint32(e.payout), s
    }, a.decode = function(e, s) {
        e instanceof j || (e = j.create(e));
        let n = s === void 0 ? e.len : e.pos + s,
            i = new h.BetValue;
        for (; e.pos < n;) {
            let l = e.uint32();
            l >>> 3 == 1 ? i.payout = e.sint32() : e.skipType(7 & l)
        }
        return i
    }, a
})(), h.GameValue = (() => {
    function a(e) {
        if (e)
            for (let s = Object.keys(e), n = 0; n < s.length; ++n) e[s[n]] != null && (this[s[n]] = e[s[n]])
    }
    return a.prototype.gameValue = w.Long ? w.Long.fromBits(0, 0, !1) : 0, a.encode = function(e, s) {
        return s || (s = B.create()), e.gameValue != null && Object.hasOwnProperty.call(e, "gameValue") && s.uint32(8).sint64(e.gameValue), s
    }, a.decode = function(e, s) {
        e instanceof j || (e = j.create(e));
        let n = s === void 0 ? e.len : e.pos + s,
            i = new h.GameValue;
        for (; e.pos < n;) {
            let l = e.uint32();
            l >>> 3 == 1 ? i.gameValue = e.sint64() : e.skipType(7 & l)
        }
        return i
    }, a
})();
const re = o.socket.decode(h.GameValue),
    me = o.socket.encode(h.BetValue),
    b = class b extends $ {
        constructor(s, n) {
            super({
                name: "Limbo",
                namespace: (n == null ? void 0 : n.gameSocketNameSpace) || z("/g/kenos"),
                sounds: {
                    boomSound: "/modules/games/boom-fdf6b43d.mp3",
                    fireSound: "/modules/games/flying-0f732610.mp3",
                    lt2Sound: "/modules/games/lt2-a9bd3398.mp3",
                    lt5Sound: "/modules/games/lt5-23a8c254.mp3",
                    lt10Sound: "/modules/games/lt10-2eb39989.mp3",
                    mt10Sound: "/modules/games/mt10-6df9ddf5.mp3",
                    limbo: {
                        src: "/modules/games/limbo-d0972eea.mp3",
                        loop: !0,
                        isBackground: !0
                    }
                },
                detailComponent: oe,
                fairComponent: le,
                validateLink: b.validateLink
            }, ie, {
                gameResult: 1,
                payout: 2 - (Number(n == null ? void 0 : n.gameChannel) || 1) / 100 * 2,
                gameIsWin: !1
            });
            m(this, "betInterval", 350);
            m(this, "betStartTime", new Date().getTime());
            m(this, "needDeduction", !1);
            m(this, "handGameBet", () => {
                this.state.isBetting || (this.state.gameIsWin = !1, this.handleBet().catch(o.notify))
            });
            m(this, "addPayout", () => {
                this.state.isBetting || (this.state.payout = this.state.payout + this.gameChannel / 100 * 2)
            });
            m(this, "deletePayout", () => {
                this.state.isBetting || (this.state.payout = this.state.payout - this.gameChannel / 100 * 2)
            });
            m(this, "onBetRequest", async s => {
                let n = await s;
                this.state.gameResult = new o.Decimal(n.gameValue).div(100).toNumber(), this.state.gameIsWin = n.odds > 0;
                let i = 500;
                if (this.state.settings.fastEnable) {
                    const l = new Date().getTime() - this.betStartTime;
                    i = l > this.betInterval ? 0 : this.betInterval - l
                }
                return this.state.settings.fastEnable || this.sounds.playSound("fireSound"), await o.utils.delay(i), n
            });
            m(this, "getChance", (s, n) => {
                let i = n ? 2 : 5;
                return new o.Decimal(100 - this.gameChannel).div(s).todp(i).toString()
            });
            this.gameChannel = Number(n == null ? void 0 : n.gameChannel) || 1, this.addHotkey("w", this.deletePayout, "payout - " + this.gameChannel / 100 * 2), this.addHotkey("e", this.addPayout, "payout + " + this.gameChannel / 100 * 2), this.autoBet.interval = this.state.settings.fastEnable ? this.betInterval : 500, o.valtio.subscribeKey(this.state.settings, "fastEnable", () => {
                this.autoBet.interval = this.state.settings.fastEnable ? this.betInterval : 500
            });
            const i = this.hotkeyList.find(l => l.key == "space");
            i && (i.handler = () => (this.state.controlIdx === 1 ? this.state.autoBet.isRunning ? this.autoBet.stop() : this.autoBet.start() : this.handGameBet(), !1)), this.on("betStart", () => {
                this.betStartTime = new Date().getTime()
            })
        }
        get maxProfit() {
            return this.state.amount.mul(this.state.payout).sub(this.state.amount)
        }
        gameValueDecoder(s) {
            return re(s).gameValue.toNumber()
        }
        betValue() {
            return me({
                payout: new o.Decimal(this.state.payout).mul(100).toNumber()
            })
        }
    };
m(b, "validateLink", `https://${o.env.GITHUB}.github.io/verify/limbo.html`);
let y = b;
export {
    y as
    default
};