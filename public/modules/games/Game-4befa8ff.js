var q = Object.defineProperty,
    W = Object.defineProperties;
var K = Object.getOwnPropertyDescriptors;
var X = Object.getOwnPropertySymbols;
var z = Object.prototype.hasOwnProperty,
    _ = Object.prototype.propertyIsEnumerable;
var T = (i, e, t) => e in i ? q(i, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : i[e] = t,
    F = (i, e) => {
        for (var t in e || (e = {})) z.call(e, t) && T(i, t, e[t]);
        if (X)
            for (var t of X(e)) _.call(e, t) && T(i, t, e[t]);
        return i
    },
    U = (i, e) => W(i, K(e));
var E = (i, e, t) => (T(i, typeof e != "symbol" ? e + "" : e, t), t);
import {
    R as G,
    _ as d,
    a as n,
    r as c,
    l as H
} from "./vendor-8c02be2a.js";
import {
    q as $,
    s as R,
    K as ee,
    p as P,
    r as te,
    t as se,
    P as ie,
    u as ne,
    w as ae,
    x as oe,
    d as de,
    y as le,
    o as re,
    $ as k,
    m as V,
    n as ue,
    z as ce
} from "./AllPlayers-fab6a982.js";
import {
    c as b,
    r as me
} from "./index-66d88a57.js";
import {
    c as N,
    b as S
} from "./context-07d48342.js";
import {
    f as he
} from "./Coin-19c44f04.js";
import {
    G as ge
} from "./GameCard-2d619a3b.js";
import {
    G as fe
} from "./main-057d7723.js";
import {
    r as pe
} from "./react_router-dom_share-62544329.js";
import {
    h as xe
} from "./enc-hex-e4b3088b.js";
import {
    g as be
} from "./namespace-3892e441.js";
import {
    u as Ae
} from "./GameWin-a8900dd5.js";
import {
    G as x
} from "./index-f3bd3ea1.js";
import {
    A as je
} from "./GameAutoTips-8fe2ab8a.js";
import "./CommonI18nProvider-b34bf9d5.js";
import "./GameDetail-cc0ac7d8.js";
import "./Share-8d7f396d.js";
const Ie = G.memo(({
        gameInfo: i
    }) => {
        const {
            t: e
        } = d.useTranslation();
        return N().gameChannel, n.jsx(d.Dialog, {
            title: e("What Game Is This?"),
            children: n.jsx($, {
                children: n.jsxs("div", {
                    className: "item",
                    children: [n.jsx("h2", {
                        children: e("What Is {{gamename}}?", {
                            gamename: i.fullName
                        })
                    }), n.jsx("div", {
                        className: "content",
                        children: i.details.split(`
`).map((t, s) => n.jsx("p", {
                            children: `${t}`
                        }, s.toString()))
                    }), n.jsx("h2", {
                        children: e("How To Play {{gamename}}?", {
                            gamename: i.fullName
                        })
                    }), n.jsxs("div", {
                        className: "content",
                        children: [n.jsx("p", {
                            children: e("1. Select the number of mines you wish to place for the round.")
                        }), n.jsx("p", {
                            children: e("2. Press BET button to start the round.")
                        }), n.jsx("p", {
                            children: e("3. Each gem revealed will increase the payout multiplier.")
                        }), n.jsx("p", {
                            children: e("4. Cash out any point to win at the last multiplier displayed.")
                        }), n.jsx("p", {
                            children: e("5. If a mine is revealed, the game is ended and your wager is lost.")
                        }), n.jsx("p", {
                            children: e("6. You may set more mines to increase multipliers on each gem revealed.")
                        })]
                    }), i.slotsInfo && i.slotsInfo.rtpDes && n.jsxs(n.Fragment, {
                        children: [n.jsx("h2", {
                            children: e("What is the {{gamename}} return rate?", {
                                gamename: i.fullName
                            })
                        }), n.jsx("div", {
                            className: "help-content",
                            children: n.jsx("p", {
                                children: e("RTP (Return to Player) is {{rtp}}%.", {
                                    rtp: i.slotsInfo.rtpDes
                                })
                            })
                        })]
                    })]
                })
            })
        })
    }),
    ye = G.memo(function({
        radius: i = "0",
        duration: e = 2e3,
        count: t = 0
    }) {
        return n.jsx("div", {
            className: Ne,
            style: {
                borderRadius: i
            },
            children: n.jsx("div", {
                className: "sp-before",
                style: {
                    animation: `lightMove ${e+"ms"} ease ${t>0?t:"infinite"}`
                }
            })
        })
    }),
    Ne = "e1wuu8md",
    ve = c.memo(function({
        index: i
    }) {
        var l;
        const e = N(),
            t = S(),
            s = ((l = t.guessQueue.find(r => r.index === i)) == null ? void 0 : l.status) === Y.PENDING,
            a = t.rounds.find(r => r.field === i + 1),
            o = () => {
                t.isBetting && !e.isAutoMode(t) && (e.sounds.stopSound("hover"), e.sounds.playSound("hover")), e.isAutoMode(t) && !t.isBetting && (e.sounds.stopSound("hover"), e.sounds.playSound("hover"))
            };
        return n.jsx("button", {
            disabled: e.isAutoMode(t) ? t.isBetting : !t.isBetting || !!s || !!a,
            className: b(Ee, function() {
                let r = ["grid-item"];
                return s && r.push("loading"), a && [j.HIDE_MINES, j.HIDE_GEMS].includes(a.status) && r.push("unselected"), r.join(" ")
            }()),
            onClick: () => e.handleItemClick(i),
            children: a && a.status === j.GEMS ? n.jsx(we, {}) : a && a.status === j.MINES ? n.jsx(Be, {}) : a && a.status === j.HIDE_GEMS ? n.jsx("div", {
                className: b(I, Ce)
            }) : a && a.status === j.HIDE_MINES ? n.jsx(Se, {}) : e.isAutoMode(t) && t.selectedItems.includes(i) ? n.jsx("div", {
                className: b(I, Ge)
            }) : n.jsx(he.motion.div, {
                className: I,
                onHoverStart: o
            })
        })
    });

function we() {
    const i = d.useIsMobile(),
        [e, t] = c.useState(!0);
    return c.useEffect(() => {
        let s = setInterval(() => {
            t(a => !a)
        }, 3e3);
        return () => {
            clearInterval(s)
        }
    }, []), n.jsxs("div", {
        className: b(I, ke),
        children: [n.jsx("div", {
            className: b(I, "graph")
        }), e && n.jsx(ye, {
            count: 1,
            radius: me(i ? 3 : 4)
        })]
    })
}

function Be() {
    const [i, e] = c.useState(!1), t = `mines${c.useRef(y(1,4)).current}`;
    return n.jsx("div", {
        className: b(I, Me, "effect", i && "end", t),
        onAnimationEnd: () => e(!0)
    })
}

function Se() {
    const i = `mines${c.useRef(y(1,4)).current}`;
    return n.jsx("div", {
        className: b(I, i)
    })
}
const I = "i1ksowiw",
    Ce = "uyar26m",
    Me = "sc43w8c",
    ke = "sacrs7a",
    Ge = "s171mend",
    Ee = "g1yesnfi";

function Oe() {
    const [i, e] = c.useState(() => [y(0, 3)]);
    return c.useEffect(() => {
        let t = setInterval(async () => {
            let s = y(1, 3),
                a = Array(s).fill(1).map(() => y(1, 40) % 4);
            e([]), await d.utils.delay(500), e(a)
        }, 5e3);
        return () => {
            clearInterval(t)
        }
    }, []), n.jsxs("div", {
        className: De,
        children: [n.jsx("div", {
            className: (i.includes(1) ? "active " : "") + " star-item index1"
        }), n.jsx("div", {
            className: (i.includes(2) ? "active " : "") + " star-item index2"
        }), n.jsx("div", {
            className: (i.includes(3) ? "active " : "") + " star-item index3"
        }), n.jsx("div", {
            className: (i.includes(0) ? "active " : "") + " star-item index4"
        })]
    })
}
const Re = c.memo(function() {
        const i = N(),
            e = S(),
            [t, s] = Ae(),
            [a, o] = c.useState(e.isBetting ? null : {
                currencyName: e.currencyName,
                odds: e.currentOdds.toNumber(),
                amount: e.amount.toNumber()
            }),
            [l, r] = c.useState(!1);
        let u;
        c.useEffect(() => (a ? (e.currentOdds.toNumber() > 1 && s({
            profitAmount: new d.Decimal(a.odds * a.amount),
            currencyName: a.currencyName,
            odds: +a.odds.toFixed(2),
            isBigWin: !1,
            enableSound: e.settings.soundEnable
        }), i.isAutoMode(e) && (u = window.setTimeout(() => {
            e.autoBet.isRunning || (s(null), i.resetStatus())
        }, 1e3))) : (s(null), u && window.clearTimeout(u)), () => {
            u && clearTimeout(u)
        }), [a]), c.useEffect(() => {
            i.isAutoMode(e) && s(null)
        }, [e.controlIdx]), c.useEffect(() => {
            e.isBetting && r(!0);
            let g = setTimeout(() => {
                r(!1)
            }, 300);
            return () => {
                clearTimeout(g)
            }
        }, [e.isBetting]), c.useEffect(() => {
            const g = () => {
                    o(null)
                },
                f = v => {
                    o(U(F({}, v), {
                        amount: v.amount.toNumber()
                    }))
                };
            return i.on("betStart", g), i.on("betEnd", f), () => {
                i.off("betStart", g), i.off("betEnd", f)
            }
        }, []);
        const m = Array(i.grids).fill(1);
        return n.jsxs("div", {
            className: b(Te, "mine-stage"),
            children: [t, n.jsx("div", {
                className: "grids-wrap " + (l ? "animate" : ""),
                children: m.map((g, f) => n.jsx(ve, {
                    index: f
                }, f))
            }), n.jsx(Oe, {})]
        })
    }),
    De = "f178dhse",
    Te = "g1428ffn",
    He = c.memo(() => {
        const i = S(),
            e = R.useSingleDetailNew();
        return n.jsxs(n.Fragment, {
            children: [n.jsx(ee, {
                list: i.myBets,
                keyof: "betId",
                onDetail: e
            }), n.jsx(ge, {
                className: Ve,
                children: n.jsx(Re, {})
            })]
        })
    }),
    Ve = "g13maj25",
    Xe = G.memo(function() {
        const i = d.useIsDarken();
        return n.jsxs("svg", {
            width: "19",
            height: "18",
            viewBox: "0 0 19 18",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [n.jsx("path", {
                d: "M5.24209 3.85061C3.65183 4.15572 3.39394 4.4033 3.07612 5.92994C2.75831 4.4033 2.50041 4.15572 0.910156 3.85061C2.50041 3.54551 2.75831 3.29793 3.07612 1.77128C3.39394 3.29793 3.65183 3.54551 5.24209 3.85061ZM12.2446 3.62897C10.8935 2.76555 10.531 2.76555 9.1816 3.62897C10.081 2.33186 10.081 1.9839 9.1816 0.688477C10.5328 1.5519 10.8952 1.5519 12.2446 0.688477C11.3452 1.9839 11.3452 2.33355 12.2446 3.62897ZM5.19509 12.6524C3.84393 11.7889 3.48147 11.7889 2.13207 12.6524C3.03148 11.3553 3.03148 11.0073 2.13207 9.71187C3.48323 10.5753 3.8457 10.5753 5.19509 9.71187C4.29569 11.0073 4.29569 11.3569 5.19509 12.6524ZM16.1888 7.97938C14.9881 7.2107 14.6614 7.2107 13.4624 7.97938C14.2631 6.82664 14.2631 6.51308 13.4624 5.36203C14.6632 6.13071 14.9898 6.13071 16.1888 5.36203C15.3881 6.51477 15.3881 6.82608 16.1888 7.97938Z",
                fill: i ? "white" : "black"
            }), n.jsx("path", {
                d: "M7.28302 6.36253L6.86763 6.76131C6.40879 7.2018 6.40879 7.91596 6.86763 8.35644L16.0064 17.1296C16.4652 17.5701 17.2091 17.5701 17.668 17.1296L18.0834 16.7308C18.5422 16.2904 18.5422 15.5762 18.0834 15.1357L8.94461 6.36253C8.48578 5.92205 7.74186 5.92205 7.28302 6.36253Z",
                fill: i ? "white" : "black"
            }), n.jsx("path", {
                d: "M6.86763 6.76131L7.28302 6.36253C7.50337 6.15101 7.80199 6.03196 8.1136 6.03196C8.42521 6.03196 8.72427 6.15101 8.94461 6.36253L10.1906 7.55866L8.1136 9.55257L6.86763 8.35644C6.64729 8.14491 6.52328 7.85781 6.52328 7.55866C6.52328 7.25952 6.64729 6.97284 6.86763 6.76131Z",
                fill: i ? "white" : "black"
            })]
        })
    }),
    Fe = c.memo(function() {
        const {
            t: i
        } = d.useTranslation(), e = N(), t = S();
        return t.isBetting ? n.jsx(d.Button, {
            className: "bet-button cashout-btn",
            type: "conic4",
            disabled: !e.canCashout(t),
            onClick: e.cashout,
            children: i("Cash Out")
        }) : n.jsx(d.Button, {
            className: "bet-button",
            type: "conic",
            onClick: async function() {
                e.handleBet().catch(s => {
                    d.notify(s)
                })
            },
            children: i("Bet")
        })
    }),
    Ue = c.memo(function() {
        const {
            t: i
        } = d.useTranslation(), e = N(), t = S();
        return n.jsxs("div", {
            className: Pe,
            children: [n.jsx(x.CoinInput, {
                checkIncrease: !0
            }), n.jsx("div", {
                className: "others-block",
                children: t.isBetting ? n.jsxs(n.Fragment, {
                    children: [n.jsxs("div", {
                        className: "gems-mines",
                        children: [n.jsx(d.Input, {
                            label: i("Mines"),
                            value: t.mines,
                            readOnly: !0,
                            size: "small"
                        }), n.jsx(d.Input, {
                            label: i("Gems"),
                            value: e.gems(t),
                            readOnly: !0,
                            size: "small"
                        })]
                    }), n.jsx(P, {
                        label: i("Profit on Next Tile") + `(${e.nextOdds(t).sub(1).add(t.currentOdds).toFixed(2)}x)`,
                        value: t.amount.mul(e.nextOdds(t).sub(1).add(t.currentOdds).toFixed(2)).toNumber(),
                        currencyName: t.currencyName,
                        size: "small",
                        readOnly: !0,
                        onChange: () => {}
                    }), n.jsx(P, {
                        label: i("Total profit") + `(${t.currentOdds.toFixed(2)}x)`,
                        value: t.amount.mul(t.currentOdds.toFixed(2)).toNumber(),
                        currencyName: t.currencyName,
                        size: "small",
                        readOnly: !0,
                        onChange: () => {}
                    })]
                }) : n.jsx(x.SilderSelect, {
                    label: i("Mines"),
                    disabled: t.isBetting,
                    value: t.mines,
                    onChange: s => {
                        t.isBetting || e.handleMinesChange(s)
                    },
                    min: e.minesOptions[0].value,
                    max: e.minesOptions[e.minesOptions.length - 1].value
                })
            }), n.jsxs("div", {
                className: "btns",
                children: [t.isBetting && n.jsxs(d.Button, {
                    className: "pick-button",
                    type: "gray",
                    disabled: !t.isBetting,
                    onClick: () => e.pickTile(),
                    children: [n.jsx(Xe, {}), n.jsx("span", {
                        children: i("Pick a Tile Randomly")
                    })]
                }), n.jsx(Fe, {})]
            })]
        })
    }),
    Pe = "mz5ibzb",
    Qe = c.memo(function() {
        const i = N(),
            e = S(),
            t = d.useIsMobile(),
            {
                t: s
            } = d.useTranslation(),
            a = () => n.jsx(d.Button, {
                className: "bet-button",
                type: "conic",
                disabled: !e.selectedItems.length,
                onClick: () => {
                    e.autoBet.isRunning ? i.autoBet.stop() : i.autoBet.start().catch(d.notify)
                },
                children: e.autoBet.isRunning ? s("Stop Auto Bet") : s("Start Auto Bet")
            });
        return n.jsxs("div", {
            className: b(Ze, "game-form"),
            children: [t && a(), n.jsx(x.CoinInput, {
                checkIncrease: !0
            }), n.jsx(x.SilderSelect, {
                label: s("Mines"),
                disabled: e.isBetting,
                value: e.mines,
                onChange: o => {
                    e.isBetting || i.handleMinesChange(o)
                },
                min: i.minesOptions[0].value,
                max: i.minesOptions[i.minesOptions.length - 1].value
            }), n.jsx(x.TimesInput, {}), n.jsx(x.IncreaseInput, {}), n.jsx(x.IncreaseInput, {
                isLose: !0
            }), n.jsx(x.StopInput, {}), n.jsx(x.StopInput, {
                isLose: !0
            }), n.jsx(je, {}), !t && a()]
        })
    }),
    Ze = "ayono44",
    Le = G.memo(() => {
        const {
            t: i
        } = d.useTranslation(), e = N(), t = d.usePageProps().gameInfo.read(), s = e.config.fairComponent, a = [{
            title: i("What Game Is This?"),
            node: n.jsx(Ie, {
                gameInfo: t
            })
        }, {
            title: i("Fairness"),
            node: n.jsx(d.Dialog, {
                title: i("Fairness"),
                children: n.jsx(s, {})
            })
        }, {
            title: i("Max Profits"),
            node: n.jsx(te, {})
        }];
        return n.jsx(se, {
            manualControl: n.jsx(Ue, {}),
            className: Ye,
            autoControl: n.jsx(Qe, {}),
            gameView: n.jsx(He, {}),
            tabs: [{
                label: i("All Bets"),
                value: R.AllBetNew
            }, {
                label: i("My bets"),
                value: R.MyBetNew
            }],
            actions: [n.jsx(ie, {}), n.jsx(ne, {}), n.jsx(ae, {}), n.jsx(oe, {}), n.jsx(de, {}), n.jsx(le, {
                list: a
            })]
        })
    }),
    Ye = "m20yu0",
    Je = R.withSingleDetailNew({
        onValidate: (i, e, t, s, a) => {
            const o = a.betLog.bv.mines || "1";
            d.app.unsafeNavigate(`#/validate/${fe.MINES}?serverSeed=${i}&clientSeed=${e}&nonce=${t}&mines=${o}`)
        },
        result: ({
            betLog: i
        }) => {
            const e = i.gv,
                t = i.bv,
                s = e.cards.slice(0, t.mines),
                a = e.fields,
                o = [...e.cards];
            return n.jsx("div", {
                className: qe,
                children: o.sort((l, r) => l - r).map(l => n.jsx("div", {
                    className: "result-item",
                    children: a.includes(l) ? n.jsx("div", {
                        className: s.includes(l) ? "mines" : "gems"
                    }) : null
                }, l))
            })
        }
    }),
    qe = "r5hchvz",
    We = Je,
    Ke = G.memo(function({
        bodyLock: i
    }) {
        return n.jsx(re, {
            htmlName: "mines",
            bodyLock: i
        })
    }),
    A = k.Reader,
    O = k.Writer,
    C = k.util,
    h = k.roots.gameMines || (k.roots.gameMines = {});
h.BetValue = (() => {
    function i(e) {
        if (e)
            for (let t = Object.keys(e), s = 0; s < t.length; ++s) e[t[s]] != null && (this[t[s]] = e[t[s]])
    }
    return i.prototype.mines = 0, i.encode = function(e, t) {
        return t || (t = O.create()), e.mines != null && Object.hasOwnProperty.call(e, "mines") && t.uint32(8).sint32(e.mines), t
    }, i.decode = function(e, t) {
        e instanceof A || (e = A.create(e));
        let s = t === void 0 ? e.len : e.pos + t,
            a = new h.BetValue;
        for (; e.pos < s;) {
            let o = e.uint32();
            o >>> 3 == 1 ? a.mines = e.sint32() : e.skipType(7 & o)
        }
        return a
    }, i.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/BetValue"
    }, i
})(), h.GameValue = (() => {
    function i(e) {
        if (this.fields = [], this.cards = [], e)
            for (let t = Object.keys(e), s = 0; s < t.length; ++s) e[t[s]] != null && (this[t[s]] = e[t[s]])
    }
    return i.prototype.odds = 0, i.prototype.fields = C.emptyArray, i.prototype.cards = C.emptyArray, i.prototype.distributeId = C.Long ? C.Long.fromBits(0, 0, !1) : 0, i.encode = function(e, t) {
        if (t || (t = O.create()), e.odds != null && Object.hasOwnProperty.call(e, "odds") && t.uint32(9).double(e.odds), e.fields != null && e.fields.length) {
            t.uint32(18).fork();
            for (let s = 0; s < e.fields.length; ++s) t.sint32(e.fields[s]);
            t.ldelim()
        }
        if (e.cards != null && e.cards.length) {
            t.uint32(26).fork();
            for (let s = 0; s < e.cards.length; ++s) t.sint32(e.cards[s]);
            t.ldelim()
        }
        return e.distributeId != null && Object.hasOwnProperty.call(e, "distributeId") && t.uint32(32).sint64(e.distributeId), t
    }, i.decode = function(e, t) {
        e instanceof A || (e = A.create(e));
        let s = t === void 0 ? e.len : e.pos + t,
            a = new h.GameValue;
        for (; e.pos < s;) {
            let o = e.uint32();
            switch (o >>> 3) {
                case 1:
                    a.odds = e.double();
                    break;
                case 2:
                    if (a.fields && a.fields.length || (a.fields = []), (7 & o) == 2) {
                        let l = e.uint32() + e.pos;
                        for (; e.pos < l;) a.fields.push(e.sint32())
                    } else a.fields.push(e.sint32());
                    break;
                case 3:
                    if (a.cards && a.cards.length || (a.cards = []), (7 & o) == 2) {
                        let l = e.uint32() + e.pos;
                        for (; e.pos < l;) a.cards.push(e.sint32())
                    } else a.cards.push(e.sint32());
                    break;
                case 4:
                    a.distributeId = e.sint64();
                    break;
                default:
                    e.skipType(7 & o)
            }
        }
        return a
    }, i.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/GameValue"
    }, i
})(), h.Next = (() => {
    function i(e) {
        if (this.fields = [], e)
            for (let t = Object.keys(e), s = 0; s < t.length; ++s) e[t[s]] != null && (this[t[s]] = e[t[s]])
    }
    return i.prototype.fields = C.emptyArray, i.encode = function(e, t) {
        if (t || (t = O.create()), e.fields != null && e.fields.length) {
            t.uint32(10).fork();
            for (let s = 0; s < e.fields.length; ++s) t.sint32(e.fields[s]);
            t.ldelim()
        }
        return t
    }, i.decode = function(e, t) {
        e instanceof A || (e = A.create(e));
        let s = t === void 0 ? e.len : e.pos + t,
            a = new h.Next;
        for (; e.pos < s;) {
            let o = e.uint32();
            if (o >>> 3 == 1)
                if (a.fields && a.fields.length || (a.fields = []), (7 & o) == 2) {
                    let l = e.uint32() + e.pos;
                    for (; e.pos < l;) a.fields.push(e.sint32())
                } else a.fields.push(e.sint32());
            else e.skipType(7 & o)
        }
        return a
    }, i.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/Next"
    }, i
})(), h.CashoutValue = (() => {
    function i(e) {
        if (e)
            for (let t = Object.keys(e), s = 0; s < t.length; ++s) e[t[s]] != null && (this[t[s]] = e[t[s]])
    }
    return i.prototype.frontgroundId = 0, i.encode = function(e, t) {
        return t || (t = O.create()), e.frontgroundId != null && Object.hasOwnProperty.call(e, "frontgroundId") && t.uint32(120).sint32(e.frontgroundId), t
    }, i.decode = function(e, t) {
        e instanceof A || (e = A.create(e));
        let s = t === void 0 ? e.len : e.pos + t,
            a = new h.CashoutValue;
        for (; e.pos < s;) {
            let o = e.uint32();
            o >>> 3 == 15 ? a.frontgroundId = e.sint32() : e.skipType(7 & o)
        }
        return a
    }, i.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/CashoutValue"
    }, i
})();
const ze = () => {
    const {
        t: i
    } = d.useTranslation(), [e] = pe.useSearchParams(), [t, s] = c.useState(e.get("serverSeed") || ""), [a, o] = c.useState(e.get("clientSeed") || ""), [l, r] = c.useState(parseInt(e.get("nonce") || "0")), u = e.get("mines") || "", m = String(V(t)), g = String(ue([a, l].join(":"), t)), f = function(p) {
        let w = p,
            D = Q([7, 2, 19, 25, 1, 13, 5, 24, 14, 6, 15, 9, 22, 16, 3, 17, 18, 20, 8, 21, 4, 12, 10, 23, 11], w);
        return w = String(V(w)), D = Q(D, w), D.map(J => J.num.num)
    }(g), v = +u;
    return n.jsxs(d.ScrollView, {
        className: _e,
        children: [n.jsx("h2", {
            children: i("Input")
        }), n.jsx(d.Input, {
            label: i("Server Seed"),
            value: t,
            onChange: p => s(p)
        }), n.jsx(d.Input, {
            label: i("Client Seed"),
            value: a,
            onChange: p => o(p)
        }), n.jsx(d.Input, {
            label: i("Nonce"),
            value: l,
            onChange: p => r(Number(p))
        }), n.jsx("h2", {
            children: i("Output")
        }), n.jsx(d.Input, {
            label: "Sha256(server_seed)",
            value: m,
            readOnly: !0
        }), n.jsx(d.Input, {
            label: "Hmac_sha256(client_seed:nonce, server_seed)",
            value: g,
            readOnly: !0
        }), n.jsx("h2", {
            children: i("Final Result")
        }), n.jsx("div", {
            className: "result-list",
            children: f.map((p, w) => n.jsx("div", {
                className: "result-item" + (w < v ? " mines-pos" : ""),
                children: p
            }, p))
        })]
    })
};

function Q(i, e) {
    const t = [];
    let s = V(e).toString(xe);
    return i.forEach(a => {
        t.push({
            num: a,
            hash: s
        }), s = s.substring(1) + s.charAt(0)
    }), t.sort(function(a, o) {
        return a.hash < o.hash ? -1 : a.hash === o.hash ? 0 : 1
    }), t
}
const _e = "f1suuv8x",
    M = {
        bg: "/modules/games/bg-136f0468.png",
        bgWhite: "/modules/games/bg-w-5b09b45e.png",
        bgMobile: "/modules/games/bg-m-2dee6492.png",
        bgMobileWhite: "/modules/games/bg-m-w-7860475f.png",
        boxBg1: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKoAAAAcCAMAAADGO9TYAAAAzFBMVEUAAABISEgVGRUaHBkfJR8VGRUYHBgXGhcXGxcZHRkVGRUXGxcXGhcYGxcoLiorKysXGhYXGxcaHRoZGxkfHx8aHhoXGhYaHhoaHhoXGxc6QTwaHxoXGhc4QDwXGxc8REA7RD8VGRUaHRk1PTk9Rz8XGhY1OzgbIBs1PDk9Rj89RT89RUEYGxcVGBUaHRktMzEpLiw4Pzs6Qj02PTk0Ozc8RD8+R0EyODUwNjMjJycmKikSFhMsMS8cHx8gIyQeIyAeISIZGx0kKSUhJSPPEBtlAAAALHRSTlMABPUlGo7ww4NT1c6pQDQJvJtgKxH3tnc76IpuWVNI7sB14bQl/umzlmLZeiYE94IAAAJsSURBVFjD1dT7d5owFAfwIFRBFMVHfdXHdH1tEdjqqoIZLfz//9NIfFzC0sh+wLrP4TQeven9nlwACXwdTl8/wXT29Gw1UH7KePbrc7yyv98W38cakoED/XkFprPhs6XID/THlVi5ftg17VG9Iz7Qhxfe2o389cvF0ZjOyfxRN1T+QBcrzsaLCCuNNqtL2kHMlG7FNhREacOHdYrrxcQBsbu+iOR0jjEJvcCgNmojarzYgJ0fO38JvU3BuJic8uPIQgeWewTlgrBuIeR9y7c97j3QcnfuzvNh5mJkm5S5tJauCfhMVwq+92ISRr6X/V28X5yz2+z1FcR78rbhPiZ2cHI5qc/dcvr7yMspOuxxwtg/X82aQx8WU4eYKRUslpx+X+n0Bhg40FnCJ5hhbVnerXQbwWndil5vILGyICZ75PYaozlOCbf+GSEWcOgN8QECVaY+YTHFVJwxt1sqV6G0qjiFxFsJCCrMK9rrYMa8mXSQlIHBfdW+04RFJtcy/ChofGgrzxtmotKYBosppy+XeImTS14+qdCaYy0mv0UIq6FKzTJdjvWZlQZ+O+2qGRrK5Zb+4wq7R+T6tBK8k7cMgk8/1pLmmqEneSXoAdN9dZRTNXnQIaaUVbvnWr2TNAhaheaqcXMmL3b6KCcF/QPVLvFHewJBS1+U7K47aV4LFSN50fKnAkFh9oDLWyldKCq8u8zsDJeC2efP20YFqu+fsGAZJBesMPsceWG/iooBN21wAHFh9ue1W0negFFRwTr6IOBIZi/Ja5YCDRWu0apCUMns5ZR2A13CpMlystlfvbZdYrP/L2g6zL5QfwACtwc45qOUEQAAAABJRU5ErkJggg==",
        boxBg1White: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKoAAAAcCAMAAADGO9TYAAAAq1BMVEUAAAB+f5FnbIBiZnxeZHldYnZcYXZhZntfZHhjaX5jaH1cYXZhZ3xla39cYXVfZHljaX5bYHReY3dfZHliaH1iaH1kaX5cYHVWWm5iaHxnboJjaH1gZXljaHxeZHhjaHxZXXFiaHxZXXJnbYJla39oboNZXHFla4BZXXJWWm5gZXpdY3dhZ3taX3NcYXVjaX5VWm5YXXFkan9mbIFSV2xRVWlNUWVQVGhoboNoUh1dAAAAKnRSTlMABAwWPqNzM9CBH/Pi8+T6yL6rX05G/NrWurKakXhnVkjYq24p57OKe/ZIj2w7AAACzklEQVRYw9XViVLiQBAA0Akk5CDcICq3sOrOlUmA1f//sm0TwkyYXFIL5b6aMld30vZoNcrhuX4QBRGsID0C7fxE3lNirsr3n92xh+ozxk8PlNKABrDiY0q9hkNxDLg+v9OfL+0GqtZ0fXo1TDGsf5K/sRaTZllDJ8Me/ilotP/1/LbaGXkNXfiYEExwDE7gglLlGlZy1MlnmXxwXX6w/0x1+rOt2UAKc9i7yKXBHhL2AamASQ3186Gd8Xc/4WdyBNBg104a2ppyFYEypYDwOyHQTk1S6XYXN9Rqs7Ov8OgiMKKcqTjjsJikPdOuq/M5tBM+rOs8b22UsLPhubLFhiyExST9mR5Xmg/bGOXpPC1s5f9qFMZg16MymIXfgQmvm8BoQZmuaaCM+VeZOMj3oEwhKFbEQhHC0s8lniRhDinlOXDCgkj7bN+dGEgzwHJqZKbNZjbymm5HmTA4FHWEWMmhhLGK8Mz3ocy3ScG06lDdgzNfnYZFY+FTCTNRiVANJqzkt6SSMx8XD1UvM9hAr/+WDW9sfTn0MHT2UCaM49J49d2EhyIvNy11M4P2lBljRfvJzWu+MdpgBTt98Hg4woqPID4XBJeK64U4NV/AbX82aqIq7ukVUObCNFABY+Wog4+JYy52jun2tKEq8wmDcs9+WyMP1TEkoDts2QYqN+4TBRfHj0uCpNotw7CXM6dHCsXtjdMeUU1+11ruUC3mAGYfl8V+/FEd2PmJlW4m1GvJejk55UtMiGPtUj30DfaQcIVQKhU85ZjZpIbdshyZp3HQbXjzdl6xB5begb3Py2uYLWt611JBo9VlivjPQA70Ybr3hfWySwN0O8bIYYpQsNRU7n1ZvS/Te5UKzNdQJ/e+ut5J66V7ShugG9tZ7TDrxUPf01y/f9X7im6u+d4Npcf1lW9Zr9AdGMtHkfj9bqCfbj0Q4NVD/wPbgr2/h7/1MuGz6lMSOgAAAABJRU5ErkJggg==",
        boxBg2: "/modules/games/box-bg2-75183067.png",
        boxBg2White: "/modules/games/box-bg2-w-774c3cf2.png",
        gems: "/modules/games/gems-f2815a6d.png",
        mines1: "/modules/games/mines-1-33624994.png",
        mines2: "/modules/games/mines-2-a6f64284.png",
        mines3: "/modules/games/mines-3-b54d60a7.png",
        mines4: "/modules/games/mines-4-8900a7b8.png",
        minesEffect: "/modules/games/mines-effect-905a1992.png",
        minesStar: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAJFJREFUGBljYEAD////5wLieDRhTC5QUSkQn8KUQRIBKuAG4ldADALySFIMTCAOUJARiMWAzCogFgWJAUEUhIKSQAUhQPwCiLGBo0DBOCDmYGJkZFwD1KMFxH1A/BOqH0S9AOJ7QMwIxHxAjABAnVVQY48gRLGwgIp0oAojsEijCgEVgtzFiiqKhQdUpIhFmAEAiABrq/Lg4u0AAAAASUVORK5CYII=",
        soundBet: "/modules/games/bet-42530855.mp3",
        soundMines: "/modules/games/sound_mines-50ef3b60.mp3",
        soundGems: "/modules/games/sound_gems-08dbc6e7.mp3",
        soundHover: "/modules/games/sound_hover-61e50321.mp3",
        soundBG: "/modules/games/sound_bg-663fffac.mp3"
    };
var j = (i => (i[i.MINES = 0] = "MINES", i[i.GEMS = 1] = "GEMS", i[i.HIDE_MINES = 2] = "HIDE_MINES", i[i.HIDE_GEMS = 3] = "HIDE_GEMS", i))(j || {}),
    Y = (i => (i.PENDING = "pending", i.FULFILLED = "fulfilled", i.REJECTED = "rejected", i))(Y || {});
const Z = d.socket.encode(h.CashoutValue),
    $e = d.socket.encode(h.BetValue),
    L = d.socket.encode(h.Next),
    et = d.socket.decode(h.BetValue),
    B = d.socket.decode(h.GameValue);

function y(i, e) {
    return Math.floor(Math.random() * (e - i + 1) + i)
}
class bt extends ce {
    constructor(t, s) {
        super({
            name: "Mines",
            namespace: (s == null ? void 0 : s.gameSocketNameSpace) || be("/g/mines"),
            sounds: {
                bet: M.soundBet,
                mines: M.soundMines,
                gems: M.soundGems,
                hover: M.soundHover,
                bg: {
                    src: M.soundBG,
                    loop: !0,
                    isBackground: !0
                }
            },
            fairComponent: Ke,
            detailComponent: We,
            validateLink: ze
        }, Le, {
            rounds: [],
            odds: 0,
            guessing: !1,
            mines: 4,
            selectedItems: [],
            guessQueue: [],
            currentOdds: new d.Decimal(1)
        });
        E(this, "DP", 15);
        E(this, "grids", 25);
        E(this, "minesOptions");
        this.gameChannel = Number(s == null ? void 0 : s.gameChannel) || 1, this.autoBet.interval = 2e3, this.minesOptions = Array(this.grids - 1).fill(1).map((o, l) => ({
            label: String(l + 1),
            value: l + 1,
            index: l
        })), this.cashout = this.cashout.bind(this), this.handleItemClick = this.handleItemClick.bind(this), this.pickTile = this.pickTile.bind(this), this.socket.on("connect", () => this.join()), d.accountStore.waitLogin().then(() => this.join()), this.addHotkey("w", this.cashout, "Cash out"), this.addHotkey("p", this.pickTile, "Pick a Tile"), this.on("submitItem", this.handleNext), this.state.controlIdx, this.resetStatus(), d.valtio.subscribeKey(this.state, "controlIdx", () => {
            this.state.controlIdx, this.resetStatus()
        });
        const a = this.hotkeyList.find(o => o.key == "space");
        a && (a.handler = () => {
            if (this.state.controlIdx === 1) this.state.autoBet.isRunning ? this.autoBet.stop() : this.state.selectedItems.length > 0 && this.autoBet.start();
            else {
                if (this.state.isBetting) return !1;
                this.handleBet()
            }
            return !1
        })
    }
    gems(t) {
        return this.grids - t.mines - t.rounds.length
    }
    canCashout(t) {
        return t.rounds.length >= 1
    }
    nextOdds(t) {
        let s, a = this.grids - t.rounds.length;
        return s = t.rounds.length ? new d.Decimal(a).div(this.gems(t)).mul(t.currentOdds).sub(t.currentOdds).add(1).todp(this.DP) : new d.Decimal(this.grids).div(this.gems(t)).mul((100 - this.gameChannel) / 100).todp(this.DP), s
    }
    isAutoMode(t) {
        return t.controlIdx === 1
    }
    hotkeyBet() {
        H.throttle(() => {
            this.state.isBetting || this.handleBet()
        }, 100)
    }
    pickTile() {
        if (!this.canGuess()) return;
        const t = this.state.rounds.map(a => a.field);
        let s = y(1, this.grids);
        for (; t.includes(s);) s = y(1, this.grids);
        this.handleItemClick(s - 1)
    }
    handleMinesChange(t) {
        this.state.mines = t, this.isAutoMode(this.state) && this.state.selectedItems.length > this.gems(this.state) && this.state.selectedItems.splice(0, this.state.selectedItems.length)
    }
    handleItemClick(t) {
        this.isAutoMode(this.state) ? this.chooseItem(t) : this.addGuessQueue(t)
    }
    resetStatus() {
        this.state.rounds = [], this.state.guessQueue = []
    }
    chooseItem(t) {
        if (this.state.selectedItems.includes(t)) {
            let s = this.state.selectedItems.indexOf(t);
            this.state.selectedItems.splice(s, 1)
        } else this.state.selectedItems.length < this.grids - this.state.mines && this.state.selectedItems.push(t)
    }
    updateOdds() {
        this.state.rounds.length ? this.state.currentOdds = new d.Decimal(this.grids).sub(this.state.rounds.length).div(this.gems(this.state)).mul(this.state.currentOdds).todp(this.DP) : this.state.currentOdds = this.nextOdds(this.state)
    }
    addGuessQueue(t, s = 0) {
        let a = {};
        a.promise = new Promise((o, l) => {
            a.index = t, a.status = "pending", a.resolve = () => {
                let r = this.state.guessQueue.find(u => u.index === t);
                r && (r.status = "fulfilled"), o(a.index)
            }, a.reject = () => {
                a.timmer && clearTimeout(a.timmer);
                let r = this.state.guessQueue.find(u => u.index === t);
                r && (r.status = "rejected"), l()
            }, a.timmer = setTimeout(() => {
                this.emit("submitItem", t)
            }, s)
        }).catch(o => o), this.state.guessQueue.push(a)
    }
    betValue() {
        return $e({
            mines: this.state.mines
        })
    }
    canGuess() {
        return this.state.isBetting && !this.state.guessing
    }
    async join() {
        if (!this.state.isActived || !d.accountStore.state.login) return;
        let t = await this.socketRequest("join").then(this.betResultDecoder),
            s = B(t.gameValue),
            a = et(t.betValue);
        if (t.odds > 0) {
            this.state.mines = a.mines, this.state.currentOdds = new d.Decimal(s.odds), this.state.guessing = !1, this.setBetStatus(!0);
            let o = this.getBetlog(t);
            s.fields.length > 0 ? (this.state.currencyName = o.currencyName, setTimeout(() => this.state.amount = new d.Decimal(o.betAmount), 100)) : this.resetStatus();
            try {
                await this.bet(new d.Decimal(o.betAmount), o), this.setBetStatus(!1)
            } catch (l) {
                this.setBetStatus(!1)
            }
        }
    }
    updateGrids(t, s) {
        let a = t.slice(0, this.state.mines),
            o = t.slice(this.state.mines, this.grids),
            l = a.filter(m => !s.includes(m)),
            r = o.filter(m => !s.includes(m)).map(m => ({
                field: m,
                status: 3
            })),
            u = l.map(m => ({
                field: m,
                status: 2
            }));
        this.state.rounds.push(...r, ...u)
    }
    async handleNext(t) {
        const s = this.state.guessQueue.find(o => o.index === t),
            a = t + 1;
        if (!this.state.guessing && (s == null ? void 0 : s.status) === "pending") {
            this.state.guessing = !0;
            try {
                const o = await this.socketRequest("next", L({
                    fields: [a]
                })).then(B);
                let l = {
                    field: a,
                    status: 1
                };
                this.state.currentOdds = new d.Decimal(o.odds), this.state.odds = o.odds, o.odds !== 0 ? (this.state.rounds.push(l), this.sounds.playSound("gems"), s == null || s.resolve(t), o.cards.length && (this.updateGrids(o.cards, o.fields), this.emit("end", {
                    odds: o.odds,
                    winAmount: this.state.amount.mul(o.odds)
                }))) : (l.status = 0, this.state.rounds.push(l), this.sounds.playSound("mines"), s == null || s.resolve(t), this.state.guessQueue.filter(r => r.status === "pending").forEach(r => r.reject()), this.updateGrids(o.cards, o.fields), this.emit("end", {
                    odds: 0,
                    winAmount: new d.Decimal(0),
                    distributeId: o.distributeId.toString()
                }))
            } catch (o) {
                s == null || s.reject(), this.join()
            } finally {
                this.state.guessing = !1;
                const o = this.state.guessQueue.find(l => l.status === "pending");
                o && this.handleNext(o.index)
            }
        }
    }
    async handleAutoNext() {
        if (!this.state.guessing) {
            this.state.guessing = !0;
            try {
                const t = await this.socketRequest("next", L({
                    fields: this.state.selectedItems.map(s => s + 1)
                })).then(B);
                if (this.state.currentOdds = new d.Decimal(t.odds), this.state.odds = t.odds, t.odds !== 0)
                    if (t.cards.length) this.state.rounds = this.state.selectedItems.map(s => ({
                        field: s + 1,
                        status: 1
                    })), this.updateGrids(t.cards, t.fields), this.emit("end", {
                        odds: t.odds,
                        winAmount: this.state.amount.mul(t.odds)
                    });
                    else {
                        const s = await this.socketRequest("cashout", Z({
                            frontgroundId: this.txId
                        })).then(this.betResultDecoder);
                        let {
                            odds: a,
                            winAmount: o,
                            distributeId: l
                        } = s, r = B(s.gameValue);
                        a /= this.oddsScale, this.state.rounds = this.state.selectedItems.map(u => ({
                            field: u + 1,
                            status: 1
                        })), this.updateGrids(r.cards, r.fields), this.emit("end", {
                            odds: a,
                            winAmount: new d.Decimal(o),
                            distributeId: l.toString()
                        })
                    }
                else {
                    let s = t.cards.slice(0, this.state.mines);
                    this.state.rounds = this.state.selectedItems.map(a => {
                        let o = a + 1;
                        return {
                            field: o,
                            status: s.includes(o) ? 0 : 1
                        }
                    }), this.updateGrids(t.cards, t.fields), this.emit("end", {
                        odds: 0,
                        winAmount: new d.Decimal(0),
                        distributeId: t.distributeId.toString()
                    })
                }
            } catch (t) {
                this.join()
            } finally {
                this.state.guessing = !1
            }
        }
    }
    async cashout() {
        if (this.canGuess() && this.canCashout(this.state)) {
            this.state.guessing = !0;
            try {
                const t = await this.socketRequest("cashout", Z({
                    frontgroundId: this.txId
                })).then(this.betResultDecoder);
                let {
                    odds: s,
                    winAmount: a
                } = t, o = B(t.gameValue);
                s /= this.oddsScale, this.state.rounds.length !== o.fields.length && (this.isAutoMode(this.state) || this.join()), this.updateGrids(o.cards, o.fields), this.emit("end", {
                    odds: s,
                    winAmount: new d.Decimal(a),
                    distributeId: t.distributeId.toString()
                })
            } catch (t) {} finally {
                this.state.guessing = !1
            }
        }
    }
    async bet(t = this.state.amount, s = 0) {
        if (this.resetStatus(), H.isNumber(s)) {
            this.sounds.playSound("bet"), this.state.guessing = !0;
            try {
                let u = this.betRequest(t, this.betValue(), s);
                this.onBetRequest && (u = this.onBetRequest(u)), s = await u, this.state.currentOdds = new d.Decimal(1), this.state.odds = s.odds
            } finally {
                H.isNumber(s) && this.join(), this.state.guessing = !1
            }
        }
        B(s.gameValue).fields.forEach(u => {
            this.state.rounds.push({
                field: u,
                status: 1
            })
        });
        let {
            odds: a,
            winAmount: o,
            distributeId: l
        } = await new Promise((u, m) => {
            const g = v => {
                    this.removeListener("deactivate", f), u(v)
                },
                f = () => {
                    this.removeListener("end", g), m()
                };
            this.once("end", g), this.once("deactivate", f), this.isAutoMode(this.state) && this.handleAutoNext()
        });
        l && (s.distributeId = l), s.odds = a, s.winAmount = o.toNumber(), s.profitAmount = o.toNumber() - this.state.amount.toNumber(), delete s.gameValue;
        let r = s.betId;
        return this.state.myBets.find(u => u.betId === r) || (this.addMyBet(s), this.emit("betEnd", {
            amount: new d.Decimal(s.betAmount),
            odds: s.odds,
            currencyName: s.currencyName
        })), s
    }
}
export {
    Y as PromiseStatus, j as RoundStatus, bt as
    default, y as getRandom
};