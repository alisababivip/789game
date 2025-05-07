var we = Object.defineProperty,
    xe = Object.defineProperties;
var Ie = Object.getOwnPropertyDescriptors;
var ae = Object.getOwnPropertySymbols;
var Se = Object.prototype.hasOwnProperty,
    ke = Object.prototype.propertyIsEnumerable;
var G = (n, e, t) => e in n ? we(n, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : n[e] = t,
    C = (n, e) => {
        for (var t in e || (e = {})) Se.call(e, t) && G(n, t, e[t]);
        if (ae)
            for (var t of ae(e)) ke.call(e, t) && G(n, t, e[t]);
        return n
    },
    K = (n, e) => xe(n, Ie(e));
var q = (n, e, t) => (G(n, typeof e != "symbol" ? e + "" : e, t), t);
import {
    D as ve,
    G as Oe,
    a as Be,
    b as Pe,
    c as Le,
    d as le,
    e as Te,
    $ as J,
    f as Ce
} from "./AllPlayers-fab6a982.js";
import {
    a as s,
    _ as a,
    r as N,
    l as $,
    R as _
} from "./vendor-8c02be2a.js";
import {
    c as F
} from "./index-66d88a57.js";
import {
    u as Ue,
    b as ce,
    c as qe
} from "./context-07d48342.js";
import {
    f as re
} from "./Coin-19c44f04.js";
import Re from "./GameDetail-cc0ac7d8.js";
import {
    G as ue
} from "./Fairness-047fe9fc.js";
import {
    GameSlotsIframeLayout as me
} from "./ProviderSlotsLayout-cb1bdfac.js";
import {
    S as Fe,
    C as Y
} from "./CurrencySelect-d917ab7f.js";
import "./CommonI18nProvider-b34bf9d5.js";
import "./main-057d7723.js";
import "./react_router-dom_share-62544329.js";
import "./Share-8d7f396d.js";
const Ee = n => {
        const e = Object.assign(n.data.betLog, {
                userName: n.userName,
                userId: n.userId
            }),
            t = {
                single: !0,
                betLog: e,
                gameUnique: n.gameUnique,
                userName: n.userName,
                userId: n.userId,
                bigWin: n.bigWin
            };
        return s.jsx(ve, {
            children: s.jsx(Oe, K(C({
                gameUnique: n.gameUnique,
                showIssus: !0
            }, e), {
                bigWin: n.bigWin,
                gameId: n.data.gameId || n.data.betLog.gameId,
                shareNode: s.jsx(Be, K(C({}, t), {
                    third: !0
                }))
            }))
        })
    },
    de = ({
        list: n,
        showName: e
    }) => {
        const t = function(i) {
                return i.map(l => ({
                    betId: l.betId,
                    userId: l.userId,
                    nickName: l.nickName,
                    nonce: 0,
                    currencyName: l.currencyName,
                    betAmount: Number(l.betAmount),
                    profitAmount: new a.Decimal(l.winAmount).sub(l.betAmount).toNumber(),
                    winAmount: Number(l.winAmount),
                    odds: l.odds,
                    betTime: Number(l.betTime),
                    userName: l.nickName,
                    gameValue: "",
                    gameId: l.gameId ? l.gameId : "",
                    distributeId: l.distributeId.toString()
                }))
            }(n),
            r = Ue(),
            o = a.useDialog();
        return s.jsx(Pe, {
            list: t,
            onClick: i => {
                const l = {
                    betLog: {
                        betAmount: i.betAmount,
                        betId: i.betId,
                        currencyName: i.currencyName,
                        odds: 1e4 * i.odds,
                        betTime: i.betTime,
                        winAmount: i.winAmount,
                        userName: i.userName,
                        userId: i.userId,
                        distributeId: i.distributeId
                    },
                    gameId: i.gameId
                };
                o.push(s.jsx(Re, {
                    data: l,
                    gameUnique: r,
                    userId: i.userId,
                    userName: i.userName
                }))
            },
            showName: e
        })
    },
    pe = function() {
        const {
            allbet: n
        } = ce();
        return n && n.length !== 0 ? s.jsx(de, {
            list: n,
            showName: !0
        }) : s.jsx(a.Empty, {})
    },
    ge = function() {
        const {
            mybet: n
        } = ce();
        return n.length === 0 ? s.jsx(a.Empty, {}) : s.jsx(de, {
            list: n
        })
    };

function Me({
    currencyName: n,
    onChange: e,
    onChangeBonus: t,
    selectBonusTab: r
}) {
    const o = a.useWallet(),
        i = Object.values(o);
    return s.jsx("div", {
        className: Ke,
        children: s.jsx(Fe, {
            isModel: !0,
            currencyName: n,
            selectBonusTab: r,
            list: i,
            onChangeBonus: t,
            openSet: !0,
            onChange: e,
            orderType: "normal",
            isSearch: !0,
            showMaintain: !1,
            hover: !0,
            focus: !1
        })
    })
}
const Ke = "siqpslq";

function Qe({
    onChange: n,
    currency: e,
    className: t,
    onChangeBonus: r,
    showBonusAmount: o,
    selectBonusTab: i
}) {
    const {
        t: l
    } = a.useTranslation(), d = a.useAccount(), j = a.useWallet(), [m, w] = N.useState(i ? 1 : 0), b = d.bonusCurrencyName, v = Object.values(j).filter(p => p.display), I = $.orderBy(v, [p => p.currencyName === b], ["desc"]);

    function S(p) {
        n(p.currencyName)
    }
    const D = N.useCallback(p => {
        w(p), r && r(p === 1)
    }, [m]);
    if (r) {
        const p = [{
            label: l("Real Money"),
            value: () => s.jsx(a.ScrollView, {
                children: I.map(x => s.jsx(Y, {
                    isReal: !0,
                    item: x,
                    showMaintain: !0,
                    currency: e,
                    onChange: S,
                    hover: !0
                }, x.currencyName))
            })
        }, {
            label: l("Bonus Money"),
            value: () => s.jsx(a.ScrollView, {
                children: I.map(x => s.jsx(Y, {
                    isBonus: !0,
                    item: x,
                    showMaintain: !0,
                    currency: e,
                    onChange: S,
                    hover: !0
                }, x.currencyName))
            })
        }];
        return s.jsx("div", {
            className: F(t, Je),
            children: s.jsx(a.Tabs, {
                tabs: p,
                value: m,
                onChange: D
            })
        })
    }
    return s.jsx(a.ScrollView, {
        className: t,
        children: I.map(p => s.jsx(Y, {
            showBonusAmount: o,
            item: p,
            showMaintain: !0,
            currency: e,
            onChange: S,
            hover: !0
        }, p.currencyName))
    })
}
const Je = "ss76xu",
    ze = ["JB"];

function oe(n = .02, e) {
    return Object.values(a.walletStore.state).find(t => {
        const r = e ? t.bonusAmount : t.generalAmount;
        return !!t.display && !(!r.gt(0) || !a.systemStore.convertCurrency(r, t.currencyName, "USD").gte(n))
    })
}
const ye = function({
        supportDemo: n,
        btnDisabled: e,
        fiatList: t,
        gameUnique: r,
        fullName: o,
        onPlay: i,
        autoAlert: l = !1,
        isBonus: d,
        setBonus: j
    }) {
        const {
            t: m
        } = a.useTranslation(), {
            urlParsed: w
        } = a.usePageContext(), b = w.search.fs || "0", v = Number(b) > 0, I = a.useNavigate(), [S, D] = N.useState(!1), [p, x] = N.useState(!1), [c, u] = N.useState(!1), h = N.useRef(null), f = a.useOnClickOutside(() => D(!1), [h]), g = a.useAccount(), y = a.useSetting(), T = a.useWallet(), U = a.useSystem(), ee = a.useLocalCurrency(), k = y.currencyName, H = ze.includes(k), fe = t.includes(ee.currencyName), E = "JB", X = k === E, Ne = a.systemStore.state.usdPrice[k] && a.systemStore.state.usdPrice[k].gt(0), te = U.currency[k].currencyType === "MNFT";
        N.useEffect(() => {
            if (l && a.app.emit("track", "provider_insufficient_balance"), d) try {
                const O = T[k],
                    W = O.bonusAmount;
                if (a.systemStore.convertCurrency(W, O.currencyName, "USD").lt(.02)) {
                    const M = oe(.02, !0);
                    if (M) a.settingStore.setState({
                        currencyName: M.currencyName
                    });
                    else {
                        const se = oe(.02);
                        se && (a.settingStore.setState({
                            currencyName: se.currencyName
                        }), j(!1))
                    }
                }
            } catch (O) {}
        }, []);
        const je = a.systemStore.getAlias(k),
            ne = fe ? ee.currencyName : "USD",
            De = a.env.siteName,
            Ae = a.env.host === "bcgame.ke";
        return s.jsxs("div", {
            className: Ve,
            children: [g.login && s.jsxs("div", {
                className: "top-select",
                children: [s.jsx("span", {
                    children: m(!p || H ? "Play with balance in" : "Insufficient balance in")
                }), s.jsxs("div", {
                    className: "coin-select-wrap",
                    children: [s.jsxs("div", {
                        className: "coins",
                        onClick: () => D(!S),
                        ref: h,
                        children: [s.jsx(a.BC.CoinIcon, {
                            name: k
                        }), s.jsx("span", {
                            className: "currency",
                            children: a.systemStore.getAlias(k)
                        }), Ne && s.jsxs("div", {
                            className: "mark",
                            children: ["(", m(d && !te ? "Bonus" : "Real Money"), ")"]
                        }), s.jsx(a.Icon, {
                            name: "Arrow"
                        })]
                    }), s.jsx(re.AnimatePresence, {
                        children: S && s.jsx(re.motion.div, {
                            className: "anim-select-wrap",
                            ref: f,
                            initial: {
                                y: "7%",
                                opacity: 0
                            },
                            animate: {
                                y: "0%",
                                opacity: 1
                            },
                            children: a.env.isBrHost || Ae ? s.jsx(Qe, {
                                currency: k,
                                onChangeBonus: j,
                                selectBonusTab: d,
                                className: "select-bg",
                                onChange: O => {
                                    a.settingStore.setState({
                                        currencyName: O
                                    }), x(!1), D(!1), u(!1)
                                }
                            }) : s.jsx(Me, {
                                currencyName: k,
                                onChangeBonus: j,
                                selectBonusTab: d,
                                onChange: O => {
                                    a.settingStore.setState({
                                        currencyName: O
                                    }), x(!1), D(!1), u(!1)
                                }
                            })
                        })
                    })]
                })]
            }), s.jsx("div", {
                className: F("d-text", p && "alert", !g.login && "notop"),
                children: c ? s.jsxs(s.Fragment, {
                    children: [s.jsx("span", {
                        className: "r",
                        children: m("Insufficient {{currency}} balance", {
                            currency: a.systemStore.getAlias(k)
                        })
                    }), s.jsxs("span", {
                        children: [", ", m("switch to another asset or deposit to continue playing.")]
                    })]
                }) : p ? H ? X ? s.jsxs(a.Trans, {
                    i18nKey: "selected.currency.4",
                    disAssets: E,
                    children: [s.jsx("span", {
                        className: "g",
                        children: {
                            disAssets: E
                        }
                    }), s.jsxs("span", {
                        children: [" ", "cannot be used in this game. Please switch to other assets."]
                    })]
                }) : s.jsxs(a.Trans, {
                    i18nKey: "selected.currency.3",
                    showcurrency: a.systemStore.getAlias(k),
                    siteName: a.env.siteName,
                    children: [s.jsx("span", {
                        className: "g",
                        children: {
                            showcurrency: je
                        }
                    }), s.jsxs("span", {
                        children: [" ", "can only be used to play Free mode or in ", {
                            siteName: De
                        }, " ", "Originals. Please deposit or switch to other assets."]
                    })]
                }) : s.jsxs(s.Fragment, {
                    children: [s.jsx("span", {
                        className: "r",
                        children: m("Insufficient {{currencys}} balance", {
                            currencys: a.systemStore.getAlias(k)
                        })
                    }), s.jsxs("span", {
                        children: [", ", m("switch to another asset or deposit to continue playing.")]
                    })]
                }) : X ? s.jsxs(a.Trans, {
                    i18nKey: "selected.currency.2",
                    disAssets: E,
                    children: [s.jsx("span", {
                        className: "g",
                        children: {
                            disAssets: E
                        }
                    }), s.jsxs("span", {
                        children: [" ", "cannot be used in this game. Please switch to other assets."]
                    })]
                }) : s.jsx("span", {
                    className: "spg",
                    children: s.jsxs(a.Trans, {
                        i18nKey: "selected.currency.1",
                        showlocal: ne,
                        children: [s.jsx("span", {
                            children: "The selected currency will be displayed in"
                        }), s.jsx("span", {
                            className: "g",
                            children: {
                                showlocal: ne
                            }
                        }), s.jsx("span", {
                            children: ", and if you change currency while playing, the game will refresh and restart."
                        })]
                    })
                })
            }), c && s.jsx("p", {
                className: "balance",
                children: m("Note: This game is not available for Bonus Money. If you want to use bonus money, please go to Bonus page to check available games.")
            }), s.jsx("div", {
                className: "btn-wrap",
                children: g.login ? p || c ? s.jsxs(a.Button, {
                    type: "conic",
                    className: "one-btn",
                    onClick: () => {
                        I("#/deposit")
                    },
                    children: [s.jsx(a.Icon, {
                        name: "Start"
                    }), s.jsx("span", {
                        children: m("Deposit & Play")
                    })]
                }) : s.jsxs(s.Fragment, {
                    children: [s.jsxs(a.Button, {
                        type: "conic",
                        className: n ? "" : "one-btn",
                        disabled: e || X,
                        onClick: () => (async () => {
                            if (v) return i(!1);
                            if (H) return x(!0);
                            try {
                                const O = await a.http.post("/user/amount/game-available/", {
                                        currencyName: y.currencyName,
                                        gameUnique: r
                                    }),
                                    W = O.availableBalance || 0,
                                    M = O.generalBalance || 0;
                                if (d) {
                                    if (W - M > 0) return i(!1);
                                    u(!0)
                                } else {
                                    if (M > 0) return i(!1);
                                    x(!0), D(!1), a.app.emit("track", "provider_insufficient_balance")
                                }
                            } catch (O) {
                                a.notify(O)
                            }
                        })(),
                        children: [s.jsx(a.Icon, {
                            name: "Start"
                        }), s.jsx("span", {
                            children: m(d && !te ? "Play With Bonus" : "Play With Real Money")
                        })]
                    }), n && s.jsxs(a.Button, {
                        type: "gray",
                        disabled: !n || e,
                        onClick: () => i(!0),
                        children: [s.jsx(a.Icon, {
                            name: "Start"
                        }), s.jsx("span", {
                            children: m("Free Play")
                        })]
                    })]
                }) : s.jsxs(s.Fragment, {
                    children: [s.jsx(a.Button, {
                        type: "conic",
                        onClick: () => I("#/login/regist"),
                        className: n ? "" : "one-btn",
                        style: {
                            textTransform: "capitalize"
                        },
                        children: s.jsx("span", {
                            children: m("Sign up")
                        })
                    }), n && s.jsxs(a.Button, {
                        type: "gray",
                        disabled: !n || e,
                        onClick: () => i(!0),
                        children: [s.jsx(a.Icon, {
                            name: "Start"
                        }), s.jsx("span", {
                            children: m("Free Play")
                        })]
                    })]
                })
            }), p && n && p && s.jsx("div", {
                className: "error-alert",
                children: s.jsxs("p", {
                    children: [m("Wanna play"), " ", o, "? ", m("Try"), " ", s.jsx("span", {
                        onClick: () => i(!0),
                        children: m("Free Play")
                    })]
                })
            })]
        })
    },
    Ve = "m4xj0k8",
    He = ["JB"],
    Xe = n => {
        const e = a.useNavigate(),
            [t, r] = N.useState(!1),
            {
                t: o
            } = a.useTranslation(),
            i = a.useSetting(),
            l = a.useWallet(),
            d = a.useAccount(),
            j = i.currencyName,
            m = l[j].generalAmount,
            w = l[j].bonusAmount,
            b = a.usePageProps().gameInfo.read(),
            v = b.releaseTime > 0 ? new Date(b.releaseTime).toLocaleDateString() : "--";
        return s.jsxs("div", {
            children: [s.jsx(me, {
                src: "",
                extSW: "",
                tabs: [{
                    label: o("All Bets"),
                    value: () => s.jsx(pe, {})
                }, {
                    label: o("My bets"),
                    value: () => s.jsx(ge, {})
                }],
                children: s.jsxs("div", {
                    className: We,
                    children: [s.jsxs("div", {
                        className: Ze,
                        children: [s.jsx("img", {
                            className: "slots-img",
                            src: b.thumbnail,
                            alt: ""
                        }), s.jsx("div", {
                            className: "slots-fullname",
                            children: b.fullName
                        }), s.jsxs("div", {
                            className: "slots-provider",
                            children: [s.jsx("span", {
                                children: "by "
                            }), s.jsx(a.Link, {
                                href: `/provider/${b.providerInfo.providerName}`,
                                children: b.providerInfo.providerName
                            })]
                        }), s.jsxs("div", {
                            className: "release",
                            children: [o("Release:"), " ", v]
                        }), s.jsx("div", {
                            className: "slots-actions",
                            children: s.jsx(Le, {})
                        })]
                    }), s.jsxs("div", {
                        className: F(Ye, b.supportDemo && "btns"),
                        children: [s.jsxs(a.Button, {
                            loading: n.btnDisabled,
                            type: "conic",
                            onClick: () => {
                                if (d.login) return (I => {
                                    if (d.login) {
                                        if (!He.includes(j)) return m.lte(0) && w.gt(0) ? (n.setBonus(!0), n.onPlay(I, {
                                            isBnous: !0
                                        })) : w.lte(0) && m.gt(0) ? (n.setBonus(!1), n.onPlay(I, {
                                            isBnous: !1
                                        })) : void r(!0);
                                        r(!0)
                                    } else e("#/login")
                                })(!1);
                                e("#/login/regist")
                            },
                            disabled: b.disabled,
                            children: [s.jsx(a.Icon, {
                                name: "Start"
                            }), s.jsx("span", {
                                style: {
                                    textTransform: "capitalize"
                                },
                                children: d.login ? o("Real Play") : o("Sign up")
                            })]
                        }), b.supportDemo && s.jsxs(a.Button, {
                            type: "gray",
                            loading: n.btnDisabled,
                            onClick: () => n.onPlay(!0),
                            disabled: b.disabled,
                            children: [s.jsx(a.Icon, {
                                name: "Start"
                            }), s.jsx("span", {
                                children: o("Free Play")
                            })]
                        })]
                    }), t && s.jsxs("div", {
                        className: "mpop-wraps",
                        children: [s.jsx(a.CloseIcon, {
                            onClick: () => r(!1)
                        }), s.jsx(ye, {
                            isBonus: n.isBonus,
                            setBonus: n.setBonus,
                            supportDemo: n.supportDemo,
                            btnDisabled: n.btnDisabled,
                            onPlay: n.onPlay,
                            fiatList: b.fiatList || [],
                            autoAlert: !0,
                            fullName: b.fullName,
                            gameUnique: b.gameUnique
                        })]
                    })]
                })
            }), s.jsxs("div", {
                className: Ge,
                children: [s.jsx(ue, {
                    rtp: String(b.slotsInfo.rtpDes)
                }), s.jsx(le, {})]
            })]
        })
    },
    We = "g1eeqknb",
    Ge = "s1hpheiv",
    Ye = "bosds82",
    Ze = "g104e0gb",
    ie = _.memo(function({
        spinNumber: n,
        spinOdds: e,
        amountInfo: t
    }) {
        const {
            t: r
        } = a.useTranslation(), o = a.usePop(), i = a.useNavigate();
        return s.jsx(a.Pop, {
            className: F($e, "no-bonus"),
            closeable: !0,
            children: s.jsxs("div", {
                className: "free-spin-pop-wrap",
                children: [s.jsx("img", {
                    alt: "freespin",
                    src: "/modules/games/freespin-8a81a041.png",
                    className: "freespin-img"
                }), s.jsx("p", {
                    className: "title",
                    children: r("You just turned your <{{spin_number}}> FS into bonus money, totaling:", {
                        spin_number: n
                    })
                }), s.jsx("p", {
                    className: "title-t",
                    children: t || "0.00"
                }), s.jsx("p", {
                    className: "desc",
                    children: r("Don’t get discouraged! To get more bonus please check our exclusive promotions")
                }), s.jsx(a.Button, {
                    type: "conic",
                    className: "promotion-btn",
                    onClick: () => {
                        o.close(), i("/promotion")
                    },
                    children: r("Check Promotions")
                })]
            })
        })
    }),
    $e = "f11bsi9h";

function Z(n) {
    if (!n || n.length === 0) return [];
    let e = [];
    const t = $.groupBy(n, r => r.currencyName);
    return t && Object.keys(t).map(r => {
        const o = t[r];
        if (o)
            if (o.length === 1) e.push(C({}, o[0]));
            else {
                let i = C({}, o[0]);
                for (let l = 1; l < o.length; l++) i.wagerRequired = Number(i.wagerRequired || 0) + Number(o[l].wagerRequired || 0) + "", i.wagerCompleted = Number(i.wagerCompleted || 0) + Number(o[l].wagerCompleted || 0) + "";
                e.push(i)
            }
    }), e
}

function Q(n, e) {
    const t = new a.Decimal(n || 0);
    if (t.lte(0)) return `0.00 ${e}`;
    const r = a.systemStore.getPrecision(e),
        o = t.toFixed(r, a.Decimal.ROUND_DOWN);
    return `${new a.Decimal(o).toNumber()} ${e}`
}
const _e = _.memo(function({
        data: n,
        gameInfo: e
    }) {
        const {
            t
        } = a.useTranslation(), r = a.usePop(), o = N.useRef(null), i = a.useSetting(), l = a.useWallet(i.currencyName).bonusAmount, d = a.useAccount(), [j, m] = a.useSetState({
            freeSpinList: [],
            bonusSummaryList: [],
            keepBonusList: []
        }), {
            haveBonusSummary: w,
            firstBonusSummary: b
        } = function(c) {
            let u = !1,
                h = null;
            return c && c.length > 0 && (u = !0, h = C({}, c[0])), {
                haveBonusSummary: u,
                firstBonusSummary: h
            }
        }(j.bonusSummaryList), v = function(c, u) {
            let h = !1;
            if (c && c.length > 0) {
                const f = c.filter(g => g.gameUnique === u);
                h = f && f.length > 0
            }
            return h
        }(j.freeSpinList, e.gameUnique), I = N.useCallback(() => {
            d.login && a.http.post("/activity/reward/freeSpin/list/", {
                gameUnique: e.gameUnique
            }).then(c => {
                c && m({
                    freeSpinList: c
                })
            }).catch(console.log)
        }, [e.gameUnique]), S = N.useCallback((c, u) => {
            let h = "/balance-controller/wager/task/bonusSummary/";
            c && (h = `/balance-controller/wager/task/bonusSummary/?currencyName=${u}`), a.http.get(h).then(f => {
                f && m({
                    bonusSummaryList: Z(f),
                    keepBonusList: f
                })
            }).catch(console.log)
        }, []), D = N.useCallback(({
            preBonusSummaryList: c,
            currBonusSummaryList: u,
            preFreeSpinList: h,
            currFreeSpinList: f
        }) => {
            if (h && h.length > 0 && (!f || h.length !== f.length)) {
                let g = null;
                for (let y = 0; y < h.length; y++)(f == null ? void 0 : f.find(U => U.fsId === h[y].fsId)) || (g = h[y]);
                g && a.http.get("/balance-controller/wager/task/bonusSummary/").then(y => {
                    if (y) {
                        const T = y.find(U => U.utxoId === (g == null ? void 0 : g.fsId));
                        T ? r.push(s.jsx(ie, {
                            spinNumber: (g == null ? void 0 : g.count) || 0,
                            spinOdds: T.wagerTimes,
                            amountInfo: Q(T.originalAmount, T.currencyName)
                        })) : r.push(s.jsx(ie, {
                            spinNumber: (g == null ? void 0 : g.count) || 0,
                            spinOdds: "0"
                        })), m({
                            bonusSummaryList: y
                        })
                    }
                }).catch(console.log)
            }
            if (c && c.length > 0 && (!u || c.length !== u.length)) {
                let g = null;
                for (let y = 0; y < c.length; y++)(u == null ? void 0 : u.find(U => U.taskId === c[y].taskId)) || (g = c[y]);
                g && a.http.post("/balance-controller/wager/task/detail/", {
                    taskId: g.taskId
                }).then(y => {
                    y && y.status === 3 && a.app.emit("game-top-nav-bonus-monty-tips", Q(y.lockedAmount, y.originalCurrencyName))
                }).catch(console.log)
            }
        }, []);
        N.useEffect(() => {
            d.login && S(n.isBonus, i.currencyName)
        }, [d.login, n.isBonus, i.currencyName]), N.useEffect(() => {
            d.login && I()
        }, [d.login]), N.useEffect(() => () => {
            o.current && (clearTimeout(o.current), o.current = null)
        }, []), N.useEffect(() => {
            if (n.playing) {
                if (o.current) return;
                o.current = setTimeout(() => {
                    (() => {
                        let c = [];
                        w && c.push(a.http.get("/balance-controller/wager/task/bonusSummary/" + (n.isBonus ? "?currencyName=" + i.currencyName : ""))), v && c.push(a.http.post("/activity/reward/freeSpin/list/", {
                            gameUnique: e.gameUnique
                        })), c.length > 0 && Promise.all(c).then(u => {
                            u.length === 2 ? (D({
                                preBonusSummaryList: j.keepBonusList,
                                currBonusSummaryList: u[0],
                                preFreeSpinList: j.freeSpinList,
                                currFreeSpinList: u[1]
                            }), m({
                                bonusSummaryList: Z(u[0]),
                                freeSpinList: u[1],
                                keepBonusList: u[0]
                            })) : (w && (D({
                                preBonusSummaryList: j.keepBonusList,
                                currBonusSummaryList: u[0]
                            }), m({
                                bonusSummaryList: Z(u[0]),
                                keepBonusList: u[0]
                            })), v && (D({
                                preFreeSpinList: j.freeSpinList,
                                currFreeSpinList: u[0]
                            }), m({
                                freeSpinList: u[0]
                            })))
                        }).catch(console.log).finally(() => {
                            clearTimeout(o.current), o.current = null
                        })
                    })()
                }, 1e4)
            }
        }, [n.playing, l]);
        const p = !n.supportDemo || n.btnDisabled || e.disabled,
            x = $.groupBy(j.freeSpinList, c => c.count);
        return s.jsxs("div", {
            className: tt,
            children: [s.jsxs("div", {
                className: "bonus-money-free-spin-wrap",
                children: [w && b && s.jsx(et, {
                    firstBonusSummary: b
                }), v && s.jsxs("div", {
                    className: F("free-spin-wrap", w && "have-left"),
                    children: [s.jsx("p", {
                        children: t("Free Spin")
                    }), s.jsx("p", {
                        className: "fs notranslate",
                        children: Object.keys(x).map((c, u) => s.jsxs("span", {
                            children: [s.jsxs("b", {
                                children: [c, " FS"]
                            }), " X ", x[c].length, s.jsx("b", {
                                className: "do",
                                children: ", "
                            })]
                        }, "freespin-" + u))
                    })]
                })]
            }), s.jsx("div", {
                className: "real-free-play-wrap",
                children: s.jsxs("div", {
                    className: F("switch-wrap", p && "disabled"),
                    children: [s.jsx("div", {
                        className: n.isDemo ? "" : "active",
                        children: t("Real Play")
                    }), s.jsx(a.Switch, {
                        value: n.isDemo,
                        onChange: c => {
                            p || n.onPlay(c)
                        },
                        type: "rangeslider"
                    }), s.jsx("div", {
                        className: n.isDemo ? "active" : "",
                        children: t("Free Play")
                    })]
                })
            })]
        })
    }),
    et = _.memo(function({
        firstBonusSummary: n
    }) {
        const {
            t: e
        } = a.useTranslation(), t = a.useWallet(n.currencyName).bonusAmount, r = new a.Decimal(n.wagerCompleted || 0), o = new a.Decimal(n.wagerRequired || 0), i = r.mul(100).div(o).todp(2, a.Decimal.ROUND_DOWN).toNumber(), l = a.systemStore.getAlias(n.currencyName), d = i <= 0 ? 0 : i >= 100 ? 100 : i;
        return s.jsxs("div", {
            className: "bonus-money-wrap",
            children: [s.jsx("img", {
                alt: "gift",
                src: "data:image/png;base64,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",
                className: "gift"
            }), s.jsxs("div", {
                className: "bonus-title",
                children: [s.jsx("p", {
                    className: "t",
                    children: e("Bonus Money")
                }), s.jsx("p", {
                    className: "d ttu notranslate",
                    children: Q(t, l)
                })]
            }), s.jsxs("div", {
                className: "bonus-step-wrap",
                children: [s.jsx("div", {
                    className: "setp-inner",
                    style: {
                        width: `${d}%`
                    }
                }), s.jsxs("div", {
                    className: "step",
                    style: {
                        left: `${d}%`
                    },
                    children: [s.jsx("span", {
                        children: Q(r, l)
                    }), s.jsx("div", {
                        className: "rec"
                    })]
                })]
            }), s.jsxs("div", {
                className: "bonus-wager",
                children: [s.jsx("p", {
                    children: e("Wager requirement")
                }), s.jsx("p", {
                    children: Q(n.wagerRequired, l)
                })]
            })]
        })
    }),
    tt = "pnlo446",
    nt = function(n) {
        const e = a.usePageProps().gameInfo.read(),
            {
                t
            } = a.useTranslation();
        return s.jsx("div", {
            className: at,
            children: s.jsx(me, {
                src: n.isDemo ? n.demoSrc : n.src,
                extSW: n.extSW,
                actions: e.disabled ? [] : [s.jsx(ue, {
                    rtp: String(e.slotsInfo.rtpDes)
                }), s.jsx(le, {}), s.jsx(Te, {})],
                bg: e.thumbnail,
                tabs: [{
                    label: t("All Bets"),
                    value: () => s.jsx(pe, {})
                }, {
                    label: t("My bets"),
                    value: () => s.jsx(ge, {})
                }],
                topView: s.jsx(_e, {
                    data: n,
                    gameInfo: e
                }),
                children: !n.playing && !e.disabled && s.jsx("div", {
                    className: st,
                    children: s.jsx(ye, {
                        isBonus: n.isBonus,
                        setBonus: n.setBonus,
                        supportDemo: n.supportDemo,
                        btnDisabled: n.btnDisabled,
                        onPlay: r => n.onPlay(r),
                        fiatList: e.fiatList || [],
                        fullName: e.fullName,
                        gameUnique: e.gameUnique
                    })
                })
            })
        })
    },
    st = "g2ylnr5",
    at = "s30gr9y";

function be() {
    const {
        currencyName: n
    } = a.useLocalCurrency();
    if (n) {
        const e = a.systemStore.getCurrency(n);
        return e ? e.aliasCurrencyName : n.replace("FIAT", "")
    }
    return ""
}
const rt = function({
        demoSrc: n,
        supportDemo: e,
        gameUrl: t
    }) {
        const {
            urlParsed: r
        } = a.usePageContext(), o = a.useNavigate(), i = r.search.fsId || "", l = r.search.bonus || "", d = r.search.currency || "", {
            t: j
        } = a.useTranslation(), m = he(), w = a.useIsMobile(), b = be(), v = a.useSetting(), I = a.useAccount(), [S, D] = a.useSetState({
            btnDisabled: !1,
            playing: !1,
            supportDemo: e,
            isDemo: e,
            src: "",
            extSW: ""
        }), [p, x] = N.useState(!!l);
        N.useEffect(() => {
            !S.playing || S.isDemo || w || (D({
                src: ""
            }), c(!1))
        }, [v.currencyName, v.localeCurrencyName]), N.useEffect(() => {
            d && d !== "" && a.settingStore.setState({
                currencyName: d
            })
        }, [d]);
        const c = async (u, h) => {
            if (u) n && n !== "" ? (D({
                playing: !0,
                isDemo: !0
            }), w && o(`/enter-game/?src=${encodeURIComponent(n||"")}&back=${t||"/"}`)) : a.notify(j("Freeplay not available for now."));
            else {
                if (!I.login) return o("#/login");
                if (S.btnDisabled) return !1;
                D({
                    btnDisabled: !0
                });
                try {
                    const f = await a.http.post("/platform-slots/launch/", {
                            gameUnique: m.gameUnique,
                            currency: v.currencyName,
                            device: w ? 1 : 2,
                            demo: !1,
                            areaCode: I.areaCode,
                            showCurrency: b,
                            bonus: h ? h.isBnous : p,
                            fsId: i || "0"
                        }),
                        g = !!f.extSW,
                        y = g ? "/softswiss.html" : f.url;
                    w && o(`/enter-game/?src=${encodeURIComponent(y||"")}&extSW=${f.extSW||""}&back=${t||"/"}`), D({
                        src: y,
                        isDemo: !1,
                        playing: !0,
                        extSW: g ? JSON.stringify(f.extSW) : ""
                    })
                } catch (f) {
                    D({
                        playing: !1
                    }), a.notify(f)
                }
                D({
                    btnDisabled: !1
                })
            }
        };
        return N.useEffect(() => {
            a.app.emit("hideAmount", !0);
            const u = h => {
                h.data !== "nested" || w || D({
                    src: ""
                })
            };
            return window.addEventListener("message", u), () => {
                a.app.emit("hideAmount", !1), window.removeEventListener("message", u)
            }
        }, []), w ? s.jsx(Xe, K(C({}, S), {
            onPlay: c,
            isBonus: p,
            setBonus: x
        })) : s.jsx(nt, K(C({}, S), {
            demoSrc: n,
            onPlay: c,
            isBonus: p,
            setBonus: x
        }))
    },
    ot = function() {
        const n = he(),
            e = a.usePageProps().gameInfo.read(),
            t = e.supportDemo,
            r = be(),
            o = `/game/${e.gameUnique}`,
            [i, l] = a.useSetState({
                demosrc: ""
            });
        return N.useEffect(() => {
            t && n.gamePreload(r).then(d => {
                l({
                    demosrc: d.url ? d.url : ""
                })
            }).catch(a.notify)
        }, []), s.jsx(rt, {
            demoSrc: i.demosrc,
            supportDemo: !!(t && t),
            gameUrl: o
        })
    },
    B = J.Reader,
    R = J.Writer,
    P = J.util,
    A = J.roots.gameSlots || (J.roots.gameSlots = {});
A.End = (() => {
    function n(e) {
        if (e)
            for (let t = Object.keys(e), r = 0; r < t.length; ++r) e[t[r]] != null && (this[t[r]] = e[t[r]])
    }
    return n.prototype.betId = "", n.prototype.odds = 0, n.prototype.time = P.Long ? P.Long.fromBits(0, 0, !0) : 0, n.prototype.currencyName = "", n.prototype.betAmount = "", n.prototype.winAmount = "", n.prototype.userId = 0, n.prototype.userName = "", n.prototype.gameName = "", n.prototype.fullName = "", n.prototype.gameId = "", n.prototype.extData = "", n.encode = function(e, t) {
        return t || (t = R.create()), e.betId != null && Object.hasOwnProperty.call(e, "betId") && t.uint32(10).string(e.betId), e.odds != null && Object.hasOwnProperty.call(e, "odds") && t.uint32(16).uint32(e.odds), e.time != null && Object.hasOwnProperty.call(e, "time") && t.uint32(24).uint64(e.time), e.currencyName != null && Object.hasOwnProperty.call(e, "currencyName") && t.uint32(34).string(e.currencyName), e.betAmount != null && Object.hasOwnProperty.call(e, "betAmount") && t.uint32(42).string(e.betAmount), e.winAmount != null && Object.hasOwnProperty.call(e, "winAmount") && t.uint32(50).string(e.winAmount), e.userId != null && Object.hasOwnProperty.call(e, "userId") && t.uint32(56).uint32(e.userId), e.userName != null && Object.hasOwnProperty.call(e, "userName") && t.uint32(66).string(e.userName), e.gameName != null && Object.hasOwnProperty.call(e, "gameName") && t.uint32(74).string(e.gameName), e.fullName != null && Object.hasOwnProperty.call(e, "fullName") && t.uint32(82).string(e.fullName), e.gameId != null && Object.hasOwnProperty.call(e, "gameId") && t.uint32(90).string(e.gameId), e.extData != null && Object.hasOwnProperty.call(e, "extData") && t.uint32(98).string(e.extData), t
    }, n.decode = function(e, t) {
        e instanceof B || (e = B.create(e));
        let r = t === void 0 ? e.len : e.pos + t,
            o = new A.End;
        for (; e.pos < r;) {
            let i = e.uint32();
            switch (i >>> 3) {
                case 1:
                    o.betId = e.string();
                    break;
                case 2:
                    o.odds = e.uint32();
                    break;
                case 3:
                    o.time = e.uint64();
                    break;
                case 4:
                    o.currencyName = e.string();
                    break;
                case 5:
                    o.betAmount = e.string();
                    break;
                case 6:
                    o.winAmount = e.string();
                    break;
                case 7:
                    o.userId = e.uint32();
                    break;
                case 8:
                    o.userName = e.string();
                    break;
                case 9:
                    o.gameName = e.string();
                    break;
                case 10:
                    o.fullName = e.string();
                    break;
                case 11:
                    o.gameId = e.string();
                    break;
                case 12:
                    o.extData = e.string();
                    break;
                default:
                    e.skipType(7 & i)
            }
        }
        return o
    }, n.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/End"
    }, n
})(), A.RoomIdParam = (() => {
    function n(e) {
        if (e)
            for (let t = Object.keys(e), r = 0; r < t.length; ++r) e[t[r]] != null && (this[t[r]] = e[t[r]])
    }
    return n.prototype.roomId = "", n.encode = function(e, t) {
        return t || (t = R.create()), e.roomId != null && Object.hasOwnProperty.call(e, "roomId") && t.uint32(10).string(e.roomId), t
    }, n.decode = function(e, t) {
        e instanceof B || (e = B.create(e));
        let r = t === void 0 ? e.len : e.pos + t,
            o = new A.RoomIdParam;
        for (; e.pos < r;) {
            let i = e.uint32();
            i >>> 3 == 1 ? o.roomId = e.string() : e.skipType(7 & i)
        }
        return o
    }, n.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/RoomIdParam"
    }, n
})(), A.BetLogs = (() => {
    function n(e) {
        if (this.endItem = [], e)
            for (let t = Object.keys(e), r = 0; r < t.length; ++r) e[t[r]] != null && (this[t[r]] = e[t[r]])
    }
    return n.prototype.endItem = P.emptyArray, n.encode = function(e, t) {
        if (t || (t = R.create()), e.endItem != null && e.endItem.length)
            for (let r = 0; r < e.endItem.length; ++r) A.End.encode(e.endItem[r], t.uint32(10).fork()).ldelim();
        return t
    }, n.decode = function(e, t) {
        e instanceof B || (e = B.create(e));
        let r = t === void 0 ? e.len : e.pos + t,
            o = new A.BetLogs;
        for (; e.pos < r;) {
            let i = e.uint32();
            i >>> 3 == 1 ? (o.endItem && o.endItem.length || (o.endItem = []), o.endItem.push(A.End.decode(e, e.uint32()))) : e.skipType(7 & i)
        }
        return o
    }, n.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/BetLogs"
    }, n
})(), A.AllBetLog = (() => {
    function n(e) {
        if (e)
            for (let t = Object.keys(e), r = 0; r < t.length; ++r) e[t[r]] != null && (this[t[r]] = e[t[r]])
    }
    return n.prototype.betId = "", n.prototype.userId = 0, n.prototype.nickName = "", n.prototype.gameName = "", n.prototype.nonce = 0, n.prototype.currencyName = "", n.prototype.betAmount = "", n.prototype.winAmount = "", n.prototype.odds = 0, n.prototype.betTime = P.Long ? P.Long.fromBits(0, 0, !1) : 0, n.prototype.betIdTmp = "", n.prototype.distributeId = P.Long ? P.Long.fromBits(0, 0, !1) : 0, n.prototype.type = "", n.encode = function(e, t) {
        return t || (t = R.create()), e.betId != null && Object.hasOwnProperty.call(e, "betId") && t.uint32(10).string(e.betId), e.userId != null && Object.hasOwnProperty.call(e, "userId") && t.uint32(16).sint32(e.userId), e.nickName != null && Object.hasOwnProperty.call(e, "nickName") && t.uint32(26).string(e.nickName), e.gameName != null && Object.hasOwnProperty.call(e, "gameName") && t.uint32(34).string(e.gameName), e.nonce != null && Object.hasOwnProperty.call(e, "nonce") && t.uint32(40).sint32(e.nonce), e.currencyName != null && Object.hasOwnProperty.call(e, "currencyName") && t.uint32(50).string(e.currencyName), e.betAmount != null && Object.hasOwnProperty.call(e, "betAmount") && t.uint32(58).string(e.betAmount), e.winAmount != null && Object.hasOwnProperty.call(e, "winAmount") && t.uint32(66).string(e.winAmount), e.odds != null && Object.hasOwnProperty.call(e, "odds") && t.uint32(72).sint32(e.odds), e.betTime != null && Object.hasOwnProperty.call(e, "betTime") && t.uint32(80).sint64(e.betTime), e.betIdTmp != null && Object.hasOwnProperty.call(e, "betIdTmp") && t.uint32(90).string(e.betIdTmp), e.distributeId != null && Object.hasOwnProperty.call(e, "distributeId") && t.uint32(96).sint64(e.distributeId), e.type != null && Object.hasOwnProperty.call(e, "type") && t.uint32(106).string(e.type), t
    }, n.decode = function(e, t) {
        e instanceof B || (e = B.create(e));
        let r = t === void 0 ? e.len : e.pos + t,
            o = new A.AllBetLog;
        for (; e.pos < r;) {
            let i = e.uint32();
            switch (i >>> 3) {
                case 1:
                    o.betId = e.string();
                    break;
                case 2:
                    o.userId = e.sint32();
                    break;
                case 3:
                    o.nickName = e.string();
                    break;
                case 4:
                    o.gameName = e.string();
                    break;
                case 5:
                    o.nonce = e.sint32();
                    break;
                case 6:
                    o.currencyName = e.string();
                    break;
                case 7:
                    o.betAmount = e.string();
                    break;
                case 8:
                    o.winAmount = e.string();
                    break;
                case 9:
                    o.odds = e.sint32();
                    break;
                case 10:
                    o.betTime = e.sint64();
                    break;
                case 11:
                    o.betIdTmp = e.string();
                    break;
                case 12:
                    o.distributeId = e.sint64();
                    break;
                case 13:
                    o.type = e.string();
                    break;
                default:
                    e.skipType(7 & i)
            }
        }
        return o
    }, n.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/AllBetLog"
    }, n
})(), A.MyBetLog = (() => {
    function n(e) {
        if (e)
            for (let t = Object.keys(e), r = 0; r < t.length; ++r) e[t[r]] != null && (this[t[r]] = e[t[r]])
    }
    return n.prototype.gameId = "", n.prototype.betId = "", n.prototype.userId = 0, n.prototype.nickName = "", n.prototype.gameName = "", n.prototype.nonce = 0, n.prototype.currencyName = "", n.prototype.betAmount = "", n.prototype.winAmount = "", n.prototype.odds = 0, n.prototype.betTime = P.Long ? P.Long.fromBits(0, 0, !1) : 0, n.prototype.betIdTmp = "", n.prototype.type = "", n.prototype.distributeId = P.Long ? P.Long.fromBits(0, 0, !1) : 0, n.encode = function(e, t) {
        return t || (t = R.create()), e.gameId != null && Object.hasOwnProperty.call(e, "gameId") && t.uint32(10).string(e.gameId), e.betId != null && Object.hasOwnProperty.call(e, "betId") && t.uint32(18).string(e.betId), e.userId != null && Object.hasOwnProperty.call(e, "userId") && t.uint32(24).sint32(e.userId), e.nickName != null && Object.hasOwnProperty.call(e, "nickName") && t.uint32(34).string(e.nickName), e.gameName != null && Object.hasOwnProperty.call(e, "gameName") && t.uint32(42).string(e.gameName), e.nonce != null && Object.hasOwnProperty.call(e, "nonce") && t.uint32(48).sint32(e.nonce), e.currencyName != null && Object.hasOwnProperty.call(e, "currencyName") && t.uint32(58).string(e.currencyName), e.betAmount != null && Object.hasOwnProperty.call(e, "betAmount") && t.uint32(66).string(e.betAmount), e.winAmount != null && Object.hasOwnProperty.call(e, "winAmount") && t.uint32(74).string(e.winAmount), e.odds != null && Object.hasOwnProperty.call(e, "odds") && t.uint32(80).sint32(e.odds), e.betTime != null && Object.hasOwnProperty.call(e, "betTime") && t.uint32(88).sint64(e.betTime), e.betIdTmp != null && Object.hasOwnProperty.call(e, "betIdTmp") && t.uint32(98).string(e.betIdTmp), e.type != null && Object.hasOwnProperty.call(e, "type") && t.uint32(106).string(e.type), e.distributeId != null && Object.hasOwnProperty.call(e, "distributeId") && t.uint32(112).sint64(e.distributeId), t
    }, n.decode = function(e, t) {
        e instanceof B || (e = B.create(e));
        let r = t === void 0 ? e.len : e.pos + t,
            o = new A.MyBetLog;
        for (; e.pos < r;) {
            let i = e.uint32();
            switch (i >>> 3) {
                case 1:
                    o.gameId = e.string();
                    break;
                case 2:
                    o.betId = e.string();
                    break;
                case 3:
                    o.userId = e.sint32();
                    break;
                case 4:
                    o.nickName = e.string();
                    break;
                case 5:
                    o.gameName = e.string();
                    break;
                case 6:
                    o.nonce = e.sint32();
                    break;
                case 7:
                    o.currencyName = e.string();
                    break;
                case 8:
                    o.betAmount = e.string();
                    break;
                case 9:
                    o.winAmount = e.string();
                    break;
                case 10:
                    o.odds = e.sint32();
                    break;
                case 11:
                    o.betTime = e.sint64();
                    break;
                case 12:
                    o.betIdTmp = e.string();
                    break;
                case 13:
                    o.type = e.string();
                    break;
                case 14:
                    o.distributeId = e.sint64();
                    break;
                default:
                    e.skipType(7 & i)
            }
        }
        return o
    }, n.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/MyBetLog"
    }, n
})(), A.JoinResult = (() => {
    function n(e) {
        if (e)
            for (let t = Object.keys(e), r = 0; r < t.length; ++r) e[t[r]] != null && (this[t[r]] = e[t[r]])
    }
    return n.prototype.gameName = "", n.encode = function(e, t) {
        return t || (t = R.create()), e.gameName != null && Object.hasOwnProperty.call(e, "gameName") && t.uint32(10).string(e.gameName), t
    }, n.decode = function(e, t) {
        e instanceof B || (e = B.create(e));
        let r = t === void 0 ? e.len : e.pos + t,
            o = new A.JoinResult;
        for (; e.pos < r;) {
            let i = e.uint32();
            i >>> 3 == 1 ? o.gameName = e.string() : e.skipType(7 & i)
        }
        return o
    }, n.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/JoinResult"
    }, n
})();
const z = a.socket.encode(A.RoomIdParam),
    it = a.socket.decode(A.JoinResult),
    lt = A.AllBetLog,
    ct = A.MyBetLog,
    L = class L extends Ce {
        constructor() {
            super({
                namespace: "/g/ps",
                detailComponent: Ee
            }, ot, {
                mybet: [],
                allbet: []
            });
            q(this, "FullName", "");
            q(this, "oddsScale", 1e4);
            q(this, "gameName", "");
            this.bindEvent()
        }
        bindEvent() {
            this.onConnect = this.onConnect.bind(this), this.onMybet = a.socket.decodeBind(this.onMybet.bind(this), ct), this.loadMybet = this.loadMybet.bind(this), this.onAllbet = a.socket.decodeBind(this.onAllbet.bind(this), lt), L.mybetSocket.on("slotsmybetlog", this.onMybet), L.allbetSocket.on("allbet", this.onAllbet), this.socket.on("connect", this.onConnect)
        }
        async init() {
            await super.init(), a.accountStore.waitLogin().then(this.loadMybet)
        }
        async loadMybet() {
            let t = await a.http.post("/game/bet/recent-bet", {
                gameUnique: this.gameUnique
            });
            t = t.map(r => (r.odds = r.odds / this.oddsScale, a.valtio.ref(r))), this.state.mybet = t
        }
        async onConnect() {
            L.allbetSocket.emit("join", z({
                roomId: this.gameUnique
            })), this.socketRequest("join2", z({
                roomId: this.gameUnique
            })).then(it).then(r => {
                this.gameName = r.gameName
            }).catch(a.notify);
            let t = await a.http.get(`/game/bet/allBet/${this.gameUnique}`);
            t = t.map(r => (r.odds = r.odds / this.oddsScale, a.valtio.ref(r))), this.state.allbet = t
        }
        onAllbet(t) {
            if (t.gameName !== this.gameName) return;
            t.odds = t.odds / this.oddsScale;
            const r = a.valtio.ref(t);
            if (this.state.allbet.find(i => i.betId === r.betId)) return;
            let o = [r, ...this.state.allbet];
            o.length > 20 && (o = o.splice(0, 20)), this.state.allbet = o
        }
        onMybet(t) {
            if (t.gameName !== this.gameName) return;
            t.odds = t.odds / this.oddsScale;
            const r = a.valtio.ref(t);
            if (this.state.mybet.find(i => i.betId === r.betId)) return;
            this.emit("betEnd", {
                amount: new a.Decimal(r.betAmount),
                odds: r.odds,
                currencyName: r.currencyName
            });
            let o = [r, ...this.state.mybet];
            o.length > 20 && (o = o.splice(0, 20)), this.state.mybet = o
        }
        active() {
            super.active()
        }
        deactivate() {
            L.mybetSocket.off("slotsmybetlog", this.onMybet), L.allbetSocket.off("allbet", this.onAllbet), this.socket.off("connect", this.onConnect), this.socket.emit("leave", z({
                roomId: this.gameUnique
            })), L.allbetSocket.emit("leave", z({
                roomId: this.gameUnique
            })), super.deactivate()
        }
        async gamePreload(t) {
            return await a.http.post("/platform-slots/preload/", {
                gameUnique: this.gameUnique,
                device: 2,
                demo: !1,
                areaCode: a.accountStore.state.areaCode,
                showCurrency: t
            })
        }
    };
q(L, "allbetSocket", a.socket.socket("/g/slots")), q(L, "mybetSocket", a.socket.socket("/g/data/slots"));
let V = L;
V.allbetSocket.connect(), V.mybetSocket.connect(), a.socket.decode(A.BetLogs);
const he = qe;
export {
    V as
    default, he as useSlotsGame
};