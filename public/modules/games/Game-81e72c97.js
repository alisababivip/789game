var M = Object.defineProperty;
var L = (a, s, t) => s in a ? M(a, s, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : a[s] = t;
var c = (a, s, t) => (L(a, typeof s != "symbol" ? s + "" : s, t), t);
import {
    s as I,
    l as G,
    o as $,
    q as F,
    I as S,
    K as A,
    p as U,
    r as V,
    t as _,
    u as q,
    v as z,
    w as K,
    d as X,
    x as J,
    y as Q,
    $ as N,
    z as Y
} from "./AllPlayers-fab6a982.js";
import {
    _ as i,
    a as e,
    R as B,
    r as o
} from "./vendor-8c02be2a.js";
import {
    c as T
} from "./index-66d88a57.js";
import {
    c as b,
    b as v
} from "./context-07d48342.js";
import {
    g as Z
} from "./namespace-3892e441.js";
import "./Coin-19c44f04.js";
import {
    G as ee
} from "./GameCard-2d619a3b.js";
import {
    A as se
} from "./GameAutoTips-8fe2ab8a.js";
import {
    G as g
} from "./index-f3bd3ea1.js";
import "./CommonI18nProvider-b34bf9d5.js";
import "./main-057d7723.js";
import "./GameDetail-cc0ac7d8.js";
import "./react_router-dom_share-62544329.js";
import "./Share-8d7f396d.js";
const te = I.withSingleDetailNew({
        onValidate: (a, s, t) => {
            let n = `${W}?s=${a}&c=${s}&n=${t}`;
            window.open(n)
        },
        result: ({
            betLog: a
        }) => {
            const {
                high: s
            } = a.bv, {
                t
            } = i.useTranslation(), n = a.gv / 100, l = new i.Decimal(a.bv.betChance).div(100).toNumber(), r = s ? new i.Decimal(100).sub(l).toNumber() : l, m = l.toFixed(2);
            return e.jsxs(G, {
                className: "rt_items",
                children: [e.jsxs("div", {
                    className: "item-wrap",
                    children: [e.jsxs("div", {
                        className: "item-num",
                        children: [e.jsx(i.Icon, {
                            className: "result",
                            name: "Result"
                        }), t("Result")]
                    }), e.jsx("div", {
                        className: "item-desc",
                        children: n
                    })]
                }), e.jsxs("div", {
                    className: "item-wrap",
                    children: [e.jsxs("div", {
                        className: "item-num",
                        children: [e.jsx(i.Icon, {
                            className: "bettype",
                            name: "Bet"
                        }), t("Bet")]
                    }), e.jsx("div", {
                        className: "item-desc",
                        children: e.jsxs("span", {
                            className: "mthan",
                            children: [s ? ">" : "<", r]
                        })
                    })]
                }), e.jsxs("div", {
                    className: "item-wrap",
                    children: [e.jsxs("div", {
                        className: "item-num",
                        children: [e.jsx(i.Icon, {
                            className: "chance",
                            name: "Chance"
                        }), t("Chance")]
                    }), e.jsx("div", {
                        className: "item-desc",
                        children: m + "%"
                    })]
                })]
            })
        }
    }),
    ae = B.memo(function({
        bodyLock: a
    }) {
        return e.jsx($, {
            htmlName: "classicdice",
            bodyLock: a
        })
    }),
    ne = B.memo(({
        gameInfo: a
    }) => {
        const {
            t: s
        } = i.useTranslation(), t = b().gameChannel;
        return e.jsx(i.Dialog, {
            title: s("What Game Is This?"),
            children: e.jsx(F, {
                children: e.jsxs("div", {
                    className: "item",
                    children: [e.jsx("h2", {
                        children: s("What Is {{gamename}}?", {
                            gamename: a.fullName
                        })
                    }), e.jsx("div", {
                        className: "help-content",
                        children: a.details.split(`
`).map((n, l) => e.jsx("p", {
                            children: `${n}`
                        }, l.toString()))
                    }), e.jsx("h2", {
                        children: s("How To Play {{gamename}}?", {
                            gamename: a.fullName
                        })
                    }), e.jsxs("div", {
                        className: "help-content",
                        children: [e.jsx("p", {
                            children: "1.Only roll outcomes that hit the green area are winners."
                        }), e.jsx("p", {
                            children: "2.Players are prohibited from using their own dice. "
                        }), e.jsx("p", {
                            children: "3.Use of script is optional and as such players must assume full responsibility for any attendant risks. we will not be held liable in this regard."
                        })]
                    }), e.jsx("h2", {
                        children: "What is the Classic Dice return rate? "
                    }), e.jsxs("div", {
                        className: "help-content",
                        children: ["Only ", t, "% HouseEdge."]
                    }), e.jsx("h2", {
                        children: "Auto Mode Operation Instructions"
                    }), e.jsxs("div", {
                        className: "help-content",
                        children: [e.jsx("p", {
                            children: s("1. Only roll outcomes that hit the green area are winners.")
                        }), e.jsx("p", {
                            children: s("2. Players are prohibited from using their own dice.")
                        }), e.jsx("p", {
                            children: s("3. Use of script is optional and as such players must assume full responsibility for any attendant risks. We will not be held liable in this regard.")
                        })]
                    }), a.slotsInfo && a.slotsInfo.rtpDes && e.jsxs(e.Fragment, {
                        children: [e.jsx("h2", {
                            children: s("What is the {{gamename}} return rate?", {
                                gamename: a.fullName
                            })
                        }), e.jsx("div", {
                            className: "help-content",
                            children: e.jsx("p", {
                                children: s("RTP (Return to Player) is {{rtp}}%.", {
                                    rtp: a.slotsInfo.rtpDes
                                })
                            })
                        })]
                    })]
                })
            })
        })
    }),
    ie = "/modules/games/dice-3c174a6c.png",
    H = (a, s) => Number(new i.Decimal(100 - s).div(a).toFixed(2)),
    C = (a, s) => Math.floor(1e4 * new i.Decimal(100 - s).div(a).toNumber()) / 1e4,
    le = function() {
        const a = v(),
            {
                gameChannel: s
            } = b(),
            {
                t
            } = i.useTranslation(),
            [n, l] = o.useState(C(a.betChance, s));
        return o.useEffect(() => {
            l(C(a.betChance, s))
        }, [a.betChance]), e.jsxs("div", {
            className: re,
            children: [e.jsx(i.InputNumber, {
                label: t("Payout"),
                value: n,
                onChange: r => (m => {
                    let j = H(m, s),
                        d = C(j, s);
                    l(d), a.betChance = H(d, s)
                })(r),
                precision: 4,
                disabled: a.isBetting,
                min: 1.0102,
                max: 9900,
                className: "f-i",
                children: e.jsx("span", {
                    className: "right-info x",
                    children: "X"
                })
            }), e.jsxs("div", {
                className: "roll-switch",
                children: [e.jsx("p", {
                    className: "switch-label",
                    children: a.isHigh ? t("Roll Over") : t("Roll Under")
                }), e.jsxs("div", {
                    className: "switch-input",
                    onClick: () => {
                        a.isBetting || (a.isHigh = !a.isHigh)
                    },
                    children: [e.jsx("p", {
                        className: "value",
                        children: a.isHigh ? 100 - a.betChance : a.betChance
                    }), e.jsx("div", {
                        className: "right-btn",
                        onClick: r => {
                            r.stopPropagation(), a.isBetting || (a.isHigh = !a.isHigh)
                        },
                        children: e.jsx(i.Icon, {
                            name: "Exchange"
                        })
                    })]
                })]
            }), e.jsx(i.InputNumber, {
                label: t("Win Chance"),
                value: a.betChance,
                onChange: r => a.betChance = r,
                max: 98,
                disabled: a.isBetting,
                min: .01,
                precision: 2,
                className: "win-change",
                children: e.jsx("span", {
                    className: "right-info",
                    children: "%"
                })
            })]
        })
    },
    re = "cf52v3v",
    ce = function() {
        const a = i.useMountedState(),
            s = b(),
            t = v(),
            [n, l] = o.useState(!1),
            [r, m] = o.useState(!1),
            [j, d] = o.useState(!0),
            f = o.useRef(),
            h = o.useRef(!0),
            u = t.isHigh ? new i.Decimal(100).sub(t.betChance).toNumber() : t.betChance,
            y = o.useRef(t.gameResult / 100);
        o.useEffect(() => {
            d(!1);
            const p = {
                    val: y.current
                },
                R = h.current ? 50 : t.gameResult / 100,
                E = t.settings.fastEnable ? .2 : .4;
            return h.current || t.settings.fastEnable || s.sounds.playSound("moveSound"), S.to(p, E, {
                val: R,
                onUpdate: () => {
                    f.current && (f.current.innerHTML = p.val.toFixed(2))
                },
                onComplete: () => {
                    h.current || (a() && d(!0), t.gameIsWin && s.sounds.playSound("winSound"))
                }
            }), () => {
                y.current = R, h.current = !1, S.killTweensOf(p)
            }
        }, [t.gameResult]);
        const P = "dice_num " + (t.gameIsWin ? "dice_win " : "") + (h.current ? "" : t.gameIsWin ? "win" : "lose") + (t.settings.fastEnable ? " fast" : ""),
            O = "dice_png" + (j ? " dice-animate" : ""),
            k = h.current ? 50 : t.gameResult / 100;
        return e.jsx(ee, {
            className: oe,
            children: e.jsxs("div", {
                className: T("game-slider", t.settings.fastEnable && "turbo-bet"),
                children: [e.jsx("div", {
                    className: "dice-main-area",
                    children: e.jsxs("div", {
                        className: "slider-wrapper",
                        children: [e.jsxs("div", {
                            className: "slider-handles",
                            children: [e.jsx("input", {
                                type: "range",
                                min: 2,
                                max: 98,
                                step: 1,
                                disabled: t.isBetting,
                                className: T("drag-block", r && "dragging", t.isBetting && "betting"),
                                onMouseEnter: () => l(!0),
                                onMouseLeave: () => l(!1),
                                onMouseDown: () => m(!0),
                                onMouseUp: () => m(!1),
                                onTouchStart: () => l(!0),
                                onTouchEnd: () => l(!1),
                                value: u,
                                onChange: p => {
                                    s.sounds.playSound("rangeSound"), t.betChance = t.isHigh ? 100 - Number(p.target.value) : Number(p.target.value)
                                }
                            }), e.jsx("div", {
                                className: "slider-track " + (t.gameIsWin ? "slider-win" : ""),
                                style: {
                                    transform: `translate(${k}%, 0px)`
                                },
                                children: e.jsxs("div", {
                                    className: O,
                                    children: [e.jsx("div", {
                                        ref: f,
                                        className: P
                                    }), e.jsx("img", {
                                        alt: "dice.png",
                                        src: ie
                                    })]
                                })
                            }), n && e.jsx("div", {
                                className: "slider-tip",
                                style: {
                                    left: `${u}%`
                                },
                                children: u
                            }), e.jsxs("div", {
                                className: "slider-line ",
                                children: [e.jsx("div", {
                                    className: t.isHigh ? "slide-lose" : "slide-win",
                                    style: {
                                        width: `${u}%`
                                    }
                                }), e.jsx("div", {
                                    className: t.isHigh ? "slide-win" : "slide-lose",
                                    style: {
                                        width: 100 - u + "%"
                                    }
                                }), e.jsx("div", {
                                    className: "slider-sign",
                                    style: {
                                        transform: `translate(${k}%, 0px)`
                                    },
                                    children: e.jsx("div", {
                                        className: "sign"
                                    })
                                })]
                            })]
                        }), e.jsxs("div", {
                            className: "slider-mark",
                            children: [e.jsx("span", {
                                className: "mark",
                                children: "0"
                            }), e.jsx("span", {
                                className: "mark",
                                children: "25"
                            }), e.jsx("span", {
                                className: "mark",
                                children: "50"
                            }), e.jsx("span", {
                                className: "mark",
                                children: "75"
                            }), e.jsx("span", {
                                className: "mark",
                                children: "100"
                            })]
                        })]
                    })
                }), e.jsx(le, {})]
            })
        })
    },
    oe = "g1mys8yx",
    me = () => {
        const a = v(),
            s = I.useSingleDetailNew();
        return e.jsxs(e.Fragment, {
            children: [e.jsx(A, {
                list: a.myBets,
                keyof: "betId",
                onDetail: s,
                getResult: t => (t.gameValue / 100).toFixed(2)
            }), e.jsx(ce, {})]
        })
    };

function he() {
    const a = i.useIsMobile(),
        s = b().autoBet,
        t = v().autoBet,
        {
            t: n
        } = i.useTranslation(),
        l = () => {
            t.isRunning ? s.stop() : s.start().catch(i.notify)
        },
        r = () => e.jsx(i.Button, {
            className: "bet-button",
            type: "conic",
            onClick: l,
            children: t.isRunning ? n("Stop Auto Bet") : n("Start Auto Bet")
        });
    return e.jsxs("div", {
        className: de,
        children: [a && r(), e.jsx(g.CoinInput, {
            checkIncrease: !0
        }), e.jsx(g.TimesInput, {}), e.jsx(g.IncreaseInput, {}), e.jsx(g.IncreaseInput, {
            isLose: !0
        }), e.jsx(g.StopInput, {}), e.jsx(g.StopInput, {
            isLose: !0
        }), e.jsx(se, {}), !a && r()]
    })
}
const de = "al7ebnw",
    ue = function() {
        const a = b(),
            s = v(),
            t = i.useIsMobile(),
            {
                t: n
            } = i.useTranslation(),
            l = () => e.jsx(i.Button, {
                className: "bet-button",
                type: "conic",
                disabled: s.isBetting,
                onClick: () => a.handGameBet(),
                children: n("Roll Now")
            }),
            r = i.useSetting(),
            {
                usdPrice: m,
                currency: j
            } = i.useSystem(),
            d = j[s.currencyName],
            f = r.enableLocaleCurrency && m[s.currencyName].gt(0),
            h = s.currencyName.includes("FIAT") || f,
            u = s.amount.mul(C(s.betChance, a.gameChannel)),
            y = h ? 2 : d.precisionUnit;
        return e.jsxs("div", {
            className: ge,
            children: [t && l(), e.jsx(g.CoinInput, {}), e.jsx(U, {
                label: n("Win Amount"),
                className: "game-winamount-wrap",
                size: "small",
                currencyName: r.currencyName,
                value: u.todp(y).toNumber(),
                onChange: () => {},
                disabled: !0
            }), !t && l()]
        })
    },
    ge = "m1j3qdd2",
    pe = B.memo(() => {
        const a = b(),
            s = i.usePageProps().gameInfo.read(),
            {
                t
            } = i.useTranslation(),
            n = a.config.fairComponent,
            l = [{
                title: t("What Game Is This?"),
                node: e.jsx(ne, {
                    gameInfo: s
                })
            }, n && {
                title: t("Fairness"),
                node: e.jsx(i.Dialog, {
                    title: t("Fairness"),
                    children: e.jsx(n, {})
                })
            }, {
                title: t("Max Profits"),
                node: e.jsx(V, {})
            }].filter(Boolean);
        return e.jsx(_, {
            manualControl: e.jsx(ue, {}),
            autoControl: e.jsx(he, {}),
            gameView: e.jsx(me, {}),
            tabs: [{
                label: t("All Bets"),
                value: I.AllBetNew
            }, {
                label: t("My bets"),
                value: I.MyBetNew
            }],
            actions: [e.jsx(q, {}), e.jsx(z, {}), e.jsx(K, {}), e.jsx(X, {}), e.jsx(J, {}), e.jsx(Q, {
                list: l
            })]
        })
    }),
    w = N.Reader,
    D = N.Writer;
N.util;
const x = N.roots.gameClassicDice || (N.roots.gameClassicDice = {});
x.BetChance = (() => {
    function a(s) {
        if (s)
            for (let t = Object.keys(s), n = 0; n < t.length; ++n) s[t[n]] != null && (this[t[n]] = s[t[n]])
    }
    return a.prototype.betChance = 0, a.prototype.isHigh = !1, a.encode = function(s, t) {
        return t || (t = D.create()), s.betChance != null && Object.hasOwnProperty.call(s, "betChance") && t.uint32(8).sint32(s.betChance), s.isHigh != null && Object.hasOwnProperty.call(s, "isHigh") && t.uint32(16).bool(s.isHigh), t
    }, a.decode = function(s, t) {
        s instanceof w || (s = w.create(s));
        let n = t === void 0 ? s.len : s.pos + t,
            l = new x.BetChance;
        for (; s.pos < n;) {
            let r = s.uint32();
            switch (r >>> 3) {
                case 1:
                    l.betChance = s.sint32();
                    break;
                case 2:
                    l.isHigh = s.bool();
                    break;
                default:
                    s.skipType(7 & r)
            }
        }
        return l
    }, a
})(), x.GameResult = (() => {
    function a(s) {
        if (s)
            for (let t = Object.keys(s), n = 0; n < t.length; ++n) s[t[n]] != null && (this[t[n]] = s[t[n]])
    }
    return a.prototype.gameResult = 0, a.encode = function(s, t) {
        return t || (t = D.create()), s.gameResult != null && Object.hasOwnProperty.call(s, "gameResult") && t.uint32(32).sint32(s.gameResult), t
    }, a.decode = function(s, t) {
        s instanceof w || (s = w.create(s));
        let n = t === void 0 ? s.len : s.pos + t,
            l = new x.GameResult;
        for (; s.pos < n;) {
            let r = s.uint32();
            r >>> 3 == 4 ? l.gameResult = s.sint32() : s.skipType(7 & r)
        }
        return l
    }, a
})();
const {
    subscribeKey: xe
} = i.valtio, be = i.socket.decode(x.GameResult), je = {
    rangeSound: "/modules/games/range-e3b88736.mp3",
    moveSound: "/modules/games/move-5b30624c.mp3",
    winSound: "/modules/games/win-ae4b0d6d.mp3"
}, W = `https://${i.env.GITHUB}.github.io/verify/classicdice_new.html`;
class Pe extends Y {
    constructor(t, n) {
        super({
            name: "ClassicDice",
            namespace: (n == null ? void 0 : n.gameSocketNameSpace) || Z("/g/cd"),
            sounds: je,
            detailComponent: te,
            fairComponent: ae,
            validateLink: W
        }, pe, {
            isHigh: !1,
            betChance: 50,
            gameResult: 0,
            gameIsWin: !1
        });
        c(this, "betInterval", 350);
        c(this, "betStartTime", new Date().getTime());
        c(this, "needDeduction", !1);
        c(this, "handGameBet", () => {
            this.state.isBetting || this.handleBet().catch(i.notify)
        });
        c(this, "onBetRequest", async t => {
            const n = await t;
            this.state.gameResult = n.gameValue, this.state.gameIsWin = n.odds > 0;
            let l = 400;
            if (this.state.settings.fastEnable) {
                const r = new Date().getTime() - this.betStartTime;
                l = r > this.betInterval ? 0 : this.betInterval - r
            }
            return await i.utils.delay(l), n
        });
        c(this, "changeToggleWin", () => {
            this.state.isBetting || (this.state.isHigh = !this.state.isHigh)
        });
        c(this, "lowerTarget", () => {
            this.state.isBetting || (this.state.betChance = this.state.betChance - 1)
        });
        c(this, "higerTarget", () => {
            this.state.isBetting || (this.state.betChance = this.state.betChance + 1)
        });
        this.gameChannel = Number(n == null ? void 0 : n.gameChannel) || 1, this.addHotkey("q", this.changeToggleWin, "Toggle condition to win"), this.addHotkey("w", this.lowerTarget, "Lower the target"), this.addHotkey("e", this.higerTarget, "Higher the target"), this.autoBet.interval = this.state.settings.fastEnable ? 350 : 1500, xe(this.state.settings, "fastEnable", r => {
            this.autoBet.interval = r ? 350 : 1500
        });
        const l = this.hotkeyList.find(r => r.key === "space");
        l && (l.handler = () => (this.state.controlIdx === 1 ? this.state.autoBet.isRunning ? this.autoBet.stop() : this.autoBet.start() : this.handGameBet(), !1)), this.on("betStart", () => {
            this.betStartTime = new Date().getTime(), this.sounds.playSound("rangeSound")
        })
    }
    get maxProfit() {
        return this.state.amount.mul(100 - this.gameChannel).div(this.state.betChance).sub(this.state.amount)
    }
    gameValueDecoder(t) {
        return be(t).gameResult
    }
    betValue() {
        return i.socket.encode(x.BetChance)({
            betChance: new i.Decimal(this.state.betChance).mul(100).toNumber(),
            isHigh: this.state.isHigh
        })
    }
}
export {
    Pe as
    default, W as validateLink
};