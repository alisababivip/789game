var ge = Object.defineProperty,
    fe = Object.defineProperties;
var be = Object.getOwnPropertyDescriptors;
var q = Object.getOwnPropertySymbols;
var se = Object.prototype.hasOwnProperty,
    ne = Object.prototype.propertyIsEnumerable;
var te = (a, n, o) => n in a ? ge(a, n, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: o
    }) : a[n] = o,
    ae = (a, n) => {
        for (var o in n || (n = {})) se.call(n, o) && te(a, o, n[o]);
        if (q)
            for (var o of q(n)) ne.call(n, o) && te(a, o, n[o]);
        return a
    },
    oe = (a, n) => fe(a, be(n));
var re = (a, n) => {
    var o = {};
    for (var s in a) se.call(a, s) && n.indexOf(s) < 0 && (o[s] = a[s]);
    if (a != null && q)
        for (var s of q(a)) n.indexOf(s) < 0 && ne.call(a, s) && (o[s] = a[s]);
    return o
};
import {
    _ as P
} from "./main-10603bdf.js";
import {
    r as u,
    w as T,
    _ as e,
    a as t,
    R as F,
    u as M,
    j as ye,
    i as we,
    a2 as Z,
    a3 as O,
    a4 as ee,
    b as m,
    N as xe,
    d as R,
    p as G,
    h as K,
    o as Ne,
    m as ve,
    c as I,
    f as U,
    g as ke,
    a1 as je,
    a0 as J,
    $ as Ce,
    a5 as Se,
    Z as ie,
    a6 as _e,
    F as ue,
    a7 as Be
} from "./gift-b590e7c8.js";
const Ie = () => P(() =>
        import ("./LimitBonus-aa21b12b.js"), ["LimitBonus-aa21b12b.js", "gift-b590e7c8.js", "main-10603bdf.js", "gift-21e1a3d0.css", "LimitBonus-e61fdda5.css"]),
    Te = u.lazy(async () => ({
        default: (await Ie()).default
    })),
    Ee = T(function() {
        const n = e.useBcd(),
            o = e.useAccount(),
            [s, r] = u.useState(!1);
        return u.useEffect(() => {
            o.login && n.registerTime > 0 && r(!0)
        }, [o.login, n.registerTime]), s ? t.jsx(Re, {}) : null
    }),
    Re = function() {
        const n = e.useMountedState(),
            [o, s] = u.useState(!1);
        return u.useEffect(() => {
            e.bcdStore.initData.then(() => {
                n() && s(!0)
            })
        }, []), o ? t.jsx(u.Suspense, {
            fallback: null,
            children: t.jsx(Te, {})
        }) : null
    },
    bt = Ee;
const le = function({
        closeFn: n
    }) {
        const o = e.useAccount(),
            s = M(),
            {
                t: r
            } = e.useTranslation(),
            c = e.useDialog(),
            {
                urlPathname: p
            } = e.usePageContext(),
            d = ye(),
            h = we(),
            g = p.startsWith("/bonus"),
            l = e.useNavigate(),
            b = s.specialBonus.first.filter(i => i.status !== "DONE"),
            x = s.bonusUnlock ? s.bonusUnlock.second > 0 : !1,
            N = s.quests.first,
            w = N.rewards && N.rewards.length > 0 ? s.quests.first.rewards.filter(i => i.rewardId > 0) : [],
            j = w.length > 0 && o.vipLevel < Z,
            C = s.spin.second > 0 && o.vipLevel < Z,
            L = s.spin.first.fiat,
            W = s.recharge.second > 0,
            Q = s.weeklyBonus.second > 0,
            H = s.monthlyBonus.second > 0,
            V = s.sportsWeeklyBonus.second > 0,
            k = s.quests.first.dailyTasks.concat(s.quests.first.weeklyTasks),
            {
                deposits: S,
                lotterys: _,
                freespins: z
            } = O(s.depositBonus),
            {
                lottery_winnings_list: Y
            } = ee(s.lotteryWinningsBonus),
            pe = () => new Promise(i => {
                const v = s.spin.first.leftTimes;
                v && e.app.emit("get-spin-rain-or-tip", v), l("#/spin"), i("success")
            }),
            he = async i => {
                var v;
                try {
                    const y = await e.http.post("/task/take-reward/", {
                        rewardId: i
                    });
                    if (G(), y) {
                        const B = y.lottery && ((v = y.lottery.currentLottery) == null ? void 0 : v.lotteryResult);
                        if (B) {
                            const $ = y.lottery ? y.lottery.totalCount : 0,
                                D = y.lottery ? y.lottery.redeemedCount : 0;
                            l(`#/welcome_bonuses/${B.numbers.join("-")}-${B.jackpotBallNumber}-${B.drawTimestamp}-${Math.max($,0)}-${Math.max(D-1,0)}`)
                        }
                    }
                    R.firstInit(!0)
                } catch (y) {
                    e.notify(y)
                }
            };
        return t.jsxs("div", {
            className: $e,
            onClick: i => i.stopPropagation(),
            children: [t.jsx("p", {
                className: "bl-t",
                children: r("Bonus Ready")
            }), t.jsxs(e.ScrollView, {
                className: "scroll-list hidden-scroll-y",
                children: [t.jsx(E, {
                    closeFn: n,
                    have: x,
                    imgSrc: m.coin,
                    imgClassName: "bcd-unlock",
                    title: r("Bonus Unlock"),
                    url: "#/bonus/dashboard"
                }), t.jsx(E, {
                    closeFn: n,
                    have: C,
                    imgSrc: L ? m.spin_fiat : m.spin,
                    imgClassName: "spin",
                    title: r("Spin Ready"),
                    btnText: r("Spin Now"),
                    onClick: pe
                }), t.jsx(Le, {
                    closeFn: n,
                    have: W,
                    imgSrc: m.recharge,
                    imgClassName: "recharge",
                    title: r("Recharge Ready"),
                    url: "#/recharge"
                }), S && S.length > 0 && S.map((i, v) => {
                    const y = i.week ? `${h(i.week)} ${r("Deposit Bonus")}` : d(i.count);
                    return t.jsx(E, {
                        have: !0,
                        imgSrc: m.bonus_deposit,
                        imgClassName: "bonus-deposit",
                        title: y,
                        onClick: async () => {
                            c.push(t.jsx(xe, {
                                count: i.count
                            }))
                        }
                    }, v + "")
                }), _ && _.length > 0 && _.map((i, v) => {
                    const y = `${i.bonusAmount||1} ${r("Lottery Tickets")}`;
                    return t.jsx(E, {
                        have: !0,
                        imgSrc: m.bonus_lottery,
                        imgClassName: "bonus-lottery",
                        title: y,
                        onClick: async () => e.http.post("/task/take-reward/", {
                            rewardId: i.rewardId
                        }).then(B => {
                            var D;
                            const $ = B.lottery && ((D = B.lottery.currentLottery) == null ? void 0 : D.lotteryResult);
                            $ && l(`#/welcome_bonuses/${$.numbers.join("-")}-${$.jackpotBallNumber}-${$.drawTimestamp}-${B.totalCount}-${B.redeemedCount}`), R.updateLotteryFreeTicket()
                        }).catch(e.notify)
                    }, i.rewardId + v + "")
                }), Y && Y.length > 0 && Y.map((i, v) => t.jsx(E, {
                    have: !0,
                    imgSrc: m.bonus_lottery,
                    imgClassName: "bonus-lottery",
                    title: r("Free Lottery Winnings"),
                    onClick: async () => e.http.post("/task/take-reward/", {
                        rewardId: i.rewardId,
                        rewardBonusId: i.rewardBonusId
                    }).then(() => {
                        R.firstInit(!0), G()
                    }).catch(e.notify),
                    currencyInfo: {
                        amount: i.amount,
                        currency: i.currency
                    }
                }, i.rewardId + v + "")), z && z.length > 0 && z.map((i, v) => {
                    const y = `${i.count} ${r("Free Spin")}`;
                    return t.jsx(E, {
                        have: !0,
                        imgSrc: m.bonus_spin,
                        imgClassName: "bonus-spin",
                        title: y,
                        onClick: async () => e.http.post("/task/take-reward/", {
                            rewardId: i.rewardId,
                            rewardBonusId: i.rewardBonusId
                        }).then(() => {
                            R.updateFreeSpin(), G()
                        }).catch(e.notify)
                    }, i.rewardId + v + "")
                }), t.jsx(E, {
                    have: Q,
                    imgSrc: m.weeklybonus,
                    imgClassName: "weeklybonus",
                    title: r("Weekly Cashback"),
                    url: "/bonus",
                    onClick: async () => {
                        const i = s.weeklyBonus.first;
                        i.rewardResult && (await K(i.rewardResult.rewardId), R.firstInit(!0))
                    }
                }), t.jsx(E, {
                    have: H,
                    imgSrc: m.monthlybonus,
                    imgClassName: "monthlybonus",
                    title: r("Monthly Cashback"),
                    url: "/bonus",
                    onClick: async () => {
                        const i = s.monthlyBonus.first;
                        i.rewardResult && (await K(i.rewardResult.rewardId), R.firstInit(!0))
                    }
                }), t.jsx(E, {
                    have: V,
                    imgSrc: m.sportsbonus,
                    imgClassName: "sportsweeklybonus",
                    title: r("Sports Weekly Bonus"),
                    url: "/bonus",
                    onClick: async () => {
                        const i = s.sportsWeeklyBonus.first;
                        i.rewardResult && (await K(i.rewardResult.rewardId), R.firstInit(!0))
                    }
                }), j && w.map((i, v) => {
                    const y = i.taskId === "tid074",
                        B = k.find($ => $.taskId === i.taskId);
                    return t.jsxs("div", {
                        className: "common-bonus reward-item",
                        children: [t.jsx("div", {
                            className: "reward-img-wrap",
                            children: t.jsx("img", {
                                alt: "quests",
                                src: y ? m.bonus_lottery : m.quests,
                                className: "quests"
                            })
                        }), t.jsxs("div", {
                            className: "reward-text",
                            children: [t.jsx("p", {
                                className: "title",
                                children: y ? r("Welcome Bonus") : B ? B.title : r("Quest Completed")
                            }), t.jsx("div", {
                                className: "coin-list",
                                children: y ? t.jsxs("span", {
                                    children: [i.amount, " ", r("Lottery Tickets")]
                                }) : B && t.jsx(e.BC.CoinFormat, {
                                    name: i.currency,
                                    amount: i.amount,
                                    icon: !0,
                                    sign: !0,
                                    showName: !0
                                })
                            })]
                        }), t.jsx(e.Button, {
                            type: "conic",
                            onClick: () => (y && e.app.emit("track", "free_lottery_click", {
                                source: "side_navi"
                            }), he(i.rewardId)),
                            children: r("Claim")
                        })]
                    }, "quests-item-" + v)
                }), b && b.length > 0 && b.map((i, v) => t.jsx(Ne, {
                    hideContent: !0,
                    rewardItem: i
                }, "reward-sidebar-item-" + v))]
            }), !g && t.jsxs(e.Button, {
                className: "dashboard-btn",
                onClick: () => {
                    l("/bonus"), n && n(), e.app.emit("mb-header-bonus-click")
                },
                children: [t.jsx("span", {
                    children: r("Bonus Dashboard")
                }), t.jsx(e.Icon, {
                    name: "Arrow"
                })]
            })]
        })
    },
    Le = function(r) {
        var c = r,
            {
                onClick: n,
                btnText: o
            } = c,
            s = re(c, ["onClick", "btnText"]);
        const {
            t: p
        } = e.useTranslation(), d = e.usePop(), h = M(), [g, l] = u.useState(!1), f = h.recharge.first, b = h.recharge.second > 0, x = f.status < 2, N = async () => {
            if (!(g || !b))
                if (x) e.app.emit("track", "recharge_request"), e.http.get("/game/support/bonus/vr/pass/").then(() => {
                    R.firstInit(!0), s.closeFn && s.closeFn()
                }).catch(e.notify);
                else {
                    if (g) return;
                    l(!0);
                    const w = f.rewards[0];
                    try {
                        const j = await e.requestRecaptcha("login");
                        e.http.post("/game/support/bonus/vr/receive/", {
                            currencyName: w.currencyName,
                            token: j
                        }).then(() => {
                            R.firstInit(!0), d.push(t.jsx(ve, {
                                amount: w.amount,
                                currencyName: w.currencyName
                            })), s.closeFn && s.closeFn()
                        }).catch(e.notify).finally(() => {
                            l(!1)
                        })
                    } catch (j) {}
                }
        };
        return t.jsx(E, oe(ae({}, s), {
            loading: g,
            onClick: N,
            btnText: p(x ? "Go Activate" : "Claim")
        }))
    },
    E = F.memo(function({
        have: n,
        imgSrc: o,
        imgClassName: s,
        title: r,
        url: c,
        btnText: p,
        closeFn: d,
        loading: h = !1,
        currencyInfo: g,
        onClick: l
    }) {
        const {
            t: f
        } = e.useTranslation(), b = e.useNavigate();
        return n ? t.jsxs("div", {
            className: "common-bonus reward-item",
            children: [t.jsx("div", {
                className: "reward-img-wrap",
                children: t.jsx("img", {
                    alt: "bonus",
                    src: o,
                    className: s
                })
            }), t.jsxs("div", {
                className: "reward-text",
                children: [t.jsx("p", {
                    className: "title",
                    children: r
                }), g && t.jsx("div", {
                    className: "coin-list",
                    children: t.jsx(e.BC.CoinFormat, {
                        name: g.currency,
                        amount: g.amount,
                        icon: !0,
                        sign: !0,
                        showName: !0
                    })
                })]
            }), t.jsx(e.Button, {
                type: l ? "conic" : "conic4",
                loading: h,
                onClick: x => {
                    x.stopPropagation(), l ? l() : (c && b(c), d && d())
                },
                children: p || f("Claim")
            })]
        }) : null
    }),
    $e = "b1chyhq7",
    Me = "/modules/bonus/kebonus-1ab9206a.svg";
const Ue = T(function() {
        const {
            t: n
        } = e.useTranslation(), o = M(), s = e.useIsMobile(), [r, c] = e.useSetState({
            show: !1,
            top: 0
        }), p = e.useOnClickOutside(() => c({
            show: !1
        })), {
            isUsHost: d,
            isKenyaHost: h
        } = e.utils.getHostType(e.env.host), {
            deposit: g,
            lottery: l,
            freespin: f
        } = O(o.depositBonus), {
            lottery_winnings: b
        } = ee(o.lotteryWinningsBonus), x = o.unclaimedCount + g + l + f + b, N = x > 0, w = () => {
            if (p && p.current) {
                const j = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 5e3,
                    C = p.current.getBoundingClientRect();
                let L = Math.max(C.top, 20);
                j - C.top < 300 && (L = C.top - j + 44), c({
                    show: !0,
                    top: L
                })
            }
        };
        return t.jsx("div", {
            className: I(Ae, "bonus-link-enter", (h || d) && "kenya-bonus"),
            children: t.jsxs("div", {
                ref: p,
                className: "nav-item-wrap",
                onMouseEnter: w,
                onMouseLeave: () => c({
                    show: !1
                }),
                children: [t.jsxs(e.Link, {
                    className: "nav-item",
                    href: "/bonus",
                    onClick: () => {
                        e.app.emit("track", "sidebar_click", {
                            button_name: "bonus"
                        })
                    },
                    children: [t.jsx("div", {
                        className: "nav-item-left",
                        children: h || d ? t.jsx("img", {
                            alt: "kebonus",
                            src: Me
                        }) : t.jsx(e.Icon, {
                            name: "Gift"
                        })
                    }), t.jsxs("div", {
                        className: "nav-item-right",
                        children: [t.jsx("span", {
                            children: n("Bonus")
                        }), N && t.jsx("div", {
                            className: "red-unclaimed-wrap",
                            children: x
                        })]
                    })]
                }), !s && N && t.jsx(U.AnimatePresence, {
                    children: r.show && t.jsx(U.motion.div, {
                        className: "unclaimed-bonus-list",
                        initial: r.top > 0 ? {
                            x: "-64px",
                            opacity: 0,
                            top: r.top
                        } : {
                            x: "-64px",
                            opacity: 0,
                            bottom: Math.abs(r.top)
                        },
                        animate: r.top > 0 ? {
                            x: "-18px",
                            opacity: 1,
                            top: r.top
                        } : {
                            x: "-18px",
                            opacity: 1,
                            bottom: Math.abs(r.top)
                        },
                        children: t.jsx("div", {
                            className: "unclaimed-bonus-list-inner",
                            children: t.jsx(le, {})
                        })
                    })
                })]
            })
        })
    }),
    yt = T(function() {
        const n = M(),
            {
                deposit: o,
                lottery: s,
                freespin: r
            } = O(n.depositBonus),
            c = n.unclaimedCount + o + s + r;
        return c <= 0 ? null : t.jsx("div", {
            className: I("mobile-number-enter", c > 10 && "small-number"),
            children: t.jsx("span", {
                children: c
            })
        })
    }),
    wt = T(function() {
        const n = e.useNavigate(),
            o = M(),
            [s, r] = u.useState(!1),
            {
                deposit: c,
                lottery: p,
                freespin: d
            } = O(o.depositBonus),
            {
                lottery_winnings: h
            } = ee(o.lotteryWinningsBonus),
            g = o.unclaimedCount + c + p + d + h,
            l = e.useOnClickOutside(() => {
                r(!1)
            });
        return u.useEffect(() => {
            s ? e.app.emit("mobile-shadow-toggle", !0) : setTimeout(() => {
                e.app.emit("mobile-shadow-toggle", !1)
            }, 100)
        }, [s]), t.jsxs("div", {
            className: Pe,
            ref: l,
            children: [t.jsxs("button", {
                className: I("bonus-dont-wrap", s && "open"),
                onClick: () => {
                    g > 0 ? r(!s) : (n("/bonus"), e.app.emit("mb-header-bonus-click"))
                },
                children: [t.jsx(e.Icon, {
                    name: "Gift"
                }), g > 0 && t.jsx("div", {
                    className: I("dont", g > 10 ? "small" : ""),
                    children: t.jsx("span", {
                        children: g
                    })
                })]
            }), t.jsx(U.AnimatePresence, {
                children: s && t.jsx(U.motion.div, {
                    className: "mobile-bonus-list-wrap",
                    initial: {
                        y: "7%",
                        opacity: 0
                    },
                    animate: {
                        y: "0%",
                        opacity: 1
                    },
                    children: t.jsx(le, {
                        closeFn: () => {
                            r(!1)
                        }
                    })
                })
            })]
        })
    }),
    Ae = "p5pj97j",
    Pe = "m1smuv00",
    xt = Ue;
const We = () => {
        const {
            t: a
        } = e.useTranslation(), n = e.useNavigate();
        return t.jsxs(t.Fragment, {
            children: [t.jsx("button", {
                onClick: () => n("#/quests"),
                className: I(De, "bonus-item-btn"),
                children: t.jsx("div", {
                    className: "img-wrap",
                    children: t.jsx("img", {
                        className: "img-bg",
                        src: m.quests,
                        alt: "quests"
                    })
                })
            }), t.jsx("div", {
                className: "bonus-text",
                onClick: () => n("#/quests"),
                children: t.jsx("p", {
                    className: I("t ttu", "task"),
                    children: a("Quest")
                })
            })]
        })
    },
    De = "qi1yqdz";
const qe = function() {
        const {
            t: n
        } = e.useTranslation(), o = e.useAccount(), s = M(), r = e.useNavigate(), c = s.spin.first, p = s.spin.second, d = !o.login || p > 0;
        return t.jsxs(t.Fragment, {
            children: [t.jsx("button", {
                className: `${Fe} bonus-item-btn`,
                onClick: () => r("#/spin"),
                children: t.jsx("div", {
                    className: `enter-animate ${d?"active":""}`,
                    children: t.jsx("div", {
                        className: "spin-anim",
                        children: o.bonusCurrencyName !== "BCD" || c.fiat ? t.jsx("img", {
                            className: "img-slots",
                            src: m.spin_fiat
                        }) : t.jsxs(t.Fragment, {
                            children: [t.jsx("img", {
                                className: "img-spinbg",
                                src: m.spin_bg,
                                alt: ""
                            }), t.jsx("img", {
                                className: "img-turntable",
                                src: m.turntable,
                                alt: ""
                            }), t.jsx("img", {
                                className: "img-pointer",
                                src: m.pointer,
                                alt: ""
                            })]
                        })
                    })
                })
            }), t.jsx("div", {
                className: "bonus-text",
                onClick: () => {
                    r("#/spin")
                },
                children: t.jsx("p", {
                    className: I("t ttu", "spin"),
                    children: n("Spin")
                })
            })]
        })
    },
    Fe = "eea94sw";
const Oe = function() {
        const n = e.useNavigate(),
            o = M(),
            {
                t: s
            } = e.useTranslation(),
            r = o.recharge.second > 0;
        return t.jsxs(t.Fragment, {
            children: [t.jsx("button", {
                onClick: () => n("#/recharge"),
                className: I(Qe, "bonus-item-btn"),
                children: t.jsxs("div", {
                    className: `enter-animate ${r?"active":""}`,
                    children: [t.jsx("img", {
                        className: "img-bg",
                        src: m.recharge_s,
                        alt: ""
                    }), t.jsx("img", {
                        alt: "img_progress",
                        src: m.imgprogress,
                        className: "img-progress"
                    })]
                })
            }), t.jsx("div", {
                className: "bonus-text",
                onClick: () => n("#/recharge"),
                children: t.jsx("p", {
                    className: "t ttu recharge",
                    children: s("Recharge")
                })
            })]
        })
    },
    Qe = "r127v4ms",
    He = T(function() {
        const n = e.useAccount(),
            {
                lang: o
            } = e.usePageContext(),
            {
                t: s
            } = e.useTranslation(),
            r = u.useMemo(() => {
                const c = [{
                    name: "quests",
                    element: t.jsx(We, {}),
                    label: s("Quest"),
                    url: "#/quests"
                }, {
                    name: "spin",
                    element: t.jsx(qe, {}),
                    label: s("Spin"),
                    url: "#/spin"
                }];
                return n.vipLevel >= Z && (c.pop(), c.pop()), n.vipLevel >= ke && c.push({
                    name: "recharge",
                    element: t.jsx(Oe, {}),
                    label: s("Recharge"),
                    url: "#/recharge"
                }), c
            }, [o, n.vipLevel]);
        return t.jsx("div", {
            className: I("bl-l", "bl-l-" + r.length),
            children: r.map((c, p) => {
                const d = r.length === 1 || r.length === 3 && p == 2;
                return t.jsx("div", {
                    className: I("bonus-item", "li-" + c.name, d && "item-3"),
                    style: {
                        position: "relative"
                    },
                    children: c.element
                }, c.name)
            })
        })
    }),
    Nt = He,
    de = () => P(() =>
        import ("./CatchCoco-9eb87f45.js"), ["CatchCoco-9eb87f45.js", "gift-b590e7c8.js", "main-10603bdf.js", "gift-21e1a3d0.css", "CatchCoco-7069d258.css"]),
    Ve = u.lazy(de),
    ze = T(function() {
        const [a, n] = e.useSetState({
            currencyName: "",
            dataSign: ""
        });
        return u.useEffect(() => (e.supportSocket.on("bonus-crocodile", e.socket.decodeBind(o => {
            n({
                currencyName: o.currencyName,
                dataSign: o.dataSign
            })
        }, "json")), () => {
            e.supportSocket.off("bonus-crocodile")
        }), []), a.dataSign ? t.jsx(u.Suspense, {
            fallback: null,
            children: t.jsx(Ve, {
                currencyName: a.currencyName,
                dataSign: a.dataSign,
                onClose: () => n({
                    dataSign: ""
                })
            })
        }) : null
    });
setTimeout(() => de(), 6e3);
const vt = ze;

function Ye(a) {
    const n = a / 414 * 128;
    return Math.round(n)
}

function Ge(a) {
    const n = a / 414 * 64;
    return Math.round(n)
}
const Ke = F.memo(function({
        time: n,
        total: o,
        done: s
    }) {
        const r = e.useNavigate(),
            c = e.useIsMobile(),
            p = u.useRef(-1),
            {
                t: d
            } = e.useTranslation(),
            [h, g] = u.useState({
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            }),
            [l, f] = u.useState(!1),
            b = u.useRef(!1),
            x = u.useRef(0);
        u.useEffect(() => {
            l ? clearTimeout(x.current) : x.current = setTimeout(() => {
                f(!0)
            }, 7e3)
        }, [l]);
        const N = u.useRef(document.querySelector("#root")),
            w = globalThis.innerWidth,
            j = globalThis.innerHeight,
            C = u.useRef(null),
            L = Ye(w),
            W = Ge(w);
        u.useEffect(() => {
            c && l && p.current < 0 && setTimeout(() => {
                if (C.current) {
                    const k = C.current.getBoundingClientRect(),
                        S = Math.max(w - k.width - k.left, 0),
                        _ = Math.max(j - k.height - k.top, 0);
                    g({
                        left: Math.round(k.left),
                        right: Math.round(S),
                        top: Math.round(k.top),
                        bottom: Math.round(_)
                    }), p.current = 1
                }
            }, 450)
        }, [l]);
        const Q = Math.max(h.top - L, 0),
            H = Math.max(h.bottom - W, 0),
            V = {
                left: -h.left,
                right: h.right,
                top: -Q,
                bottom: H
            };
        return t.jsx(U.motion.div, {
            drag: l,
            dragMomentum: !1,
            className: I(Xe, l ? "small" : "common"),
            onClick: () => !b.current && l && f(!1),
            onDragStart: () => b.current = !0,
            onDragEnd: () => b.current = !1,
            dragConstraints: c ? V : N,
            dragElastic: 0,
            ref: C,
            transition: {
                duration: .4
            },
            children: t.jsxs(U.motion.div, {
                className: "deposit-main",
                initial: {
                    y: "100%",
                    opacity: 0
                },
                animate: {
                    y: "0%",
                    opacity: 1
                },
                children: [!l && t.jsx(e.CloseIcon, {
                    onClick: () => f(!l)
                }), t.jsx("img", {
                    className: "img-money",
                    src: je,
                    alt: ""
                }), t.jsx(e.CircleCountdown, {
                    endTime: n,
                    className: "cut-time-border"
                }), !l && t.jsxs(t.Fragment, {
                    children: [t.jsxs("div", {
                        className: "cont",
                        children: [t.jsx("div", {
                            className: "title ttu",
                            children: d("Claim Rewards")
                        }), t.jsxs("div", {
                            className: "desc",
                            children: [t.jsxs("b", {
                                children: [s, "/", o]
                            }), " ", d("Claimed")]
                        })]
                    }), t.jsxs("div", {
                        className: "btn-wrap",
                        children: [t.jsx(e.Button, {
                            className: "dp-btn",
                            type: "conic",
                            onClick: () => {
                                !l && !b.current && r("#/quests"), e.app.emit("track", "float_box_reward_click")
                            },
                            children: d("Claim")
                        }), t.jsx(e.Countdown, {
                            endTime: n,
                            onEnd: J.initFn,
                            children: ({
                                hours: k,
                                minutes: S,
                                seconds: _
                            }) => t.jsxs("div", {
                                className: "cut-time",
                                children: [t.jsxs("div", {
                                    children: [t.jsx("span", {
                                        className: "l",
                                        children: k > 9 ? k : "0" + k
                                    }), "h"]
                                }), t.jsx("span", {
                                    children: ":"
                                }), t.jsxs("div", {
                                    children: [t.jsx("span", {
                                        className: "l",
                                        children: S > 9 ? S : "0" + S
                                    }), "m"]
                                }), t.jsx("span", {
                                    children: ":"
                                }), t.jsxs("div", {
                                    children: [t.jsx("span", {
                                        className: "l",
                                        children: _ > 9 ? _ : "0" + _
                                    }), "s"]
                                })]
                            })
                        })]
                    })]
                }), l && t.jsx(e.Countdown, {
                    endTime: n,
                    onEnd: J.initFn,
                    children: ({
                        hours: k,
                        minutes: S,
                        seconds: _
                    }) => t.jsxs("div", {
                        className: "cut-time",
                        children: [t.jsxs("div", {
                            children: [t.jsx("span", {
                                className: "l",
                                children: k > 9 ? k : "0" + k
                            }), "h"]
                        }), t.jsx("span", {
                            children: ":"
                        }), t.jsxs("div", {
                            children: [t.jsx("span", {
                                className: "l",
                                children: S > 9 ? S : "0" + S
                            }), "m"]
                        }), t.jsx("span", {
                            children: ":"
                        }), t.jsxs("div", {
                            children: [t.jsx("span", {
                                className: "l",
                                children: _ > 9 ? _ : "0" + _
                            }), "s"]
                        })]
                    })
                })]
            })
        })
    }),
    Xe = "l1fi7676",
    Ze = T(function() {
        const {
            urlPathname: n
        } = e.usePageContext(), o = Ce(), [s, r] = u.useState(!1), c = e.useIsMobile(), p = e.useMountedState(), d = o.data.newbieTasks, h = o.data.newbieTaskExpireTime, g = h < e.utils.serverTime().getTime();
        if (u.useEffect(() => {
                let N;
                return e.accountStore.waitLogin().then(() => {
                    J.initFn(), N = setTimeout(() => {
                        e.asyncQueue.add(() => p() && r(!0))
                    }, 8e3)
                }), () => clearTimeout(N)
            }, []), n && n.startsWith("/wallet") && c || !d || d.length === 0 || g || !s) return null;
        const f = d.length,
            b = o.data.rewards,
            x = d.reduce((N, w) => {
                const j = b.find(C => C.taskId === w.taskId);
                return j && j.rewardId === "0" ? N + 1 : N
            }, 0);
        return t.jsx(Ke, {
            time: h,
            total: f,
            done: x
        })
    }),
    kt = Ze,
    Je = "/modules/bonus/spin-463f2a1f.png";
const et = F.memo(function() {
        const {
            t: n
        } = e.useTranslation(), o = e.useAccount(), s = e.useIsMobile(), r = e.useNavigate(), [c, p] = u.useState(!1), {
            urlParsed: d,
            urlPathname: h
        } = e.usePageContext(), g = d.search.bcn || "", l = Se(o.bonusCurrencyName, g.toLocaleUpperCase()), f = ie.rewardsList[ie.rewardsList.length - 1], b = o.login, x = h && h.startsWith("/landing"), N = (w, j) => {
            const C = e.systemStore.getCurrencySymbol(w),
                L = e.systemStore.convertCurrency(new e.Decimal(j || "0"), "USD", w),
                W = _e(L.toNumber());
            return C + e.utils.numberWithCommas(!1, W, 0)
        };
        return u.useEffect(() => {
            const w = window.location.search;
            p(w.includes("type=iframe"))
        }, []), !s || x || b || c ? null : t.jsxs(U.motion.div, {
            initial: {
                y: "100%",
                opacity: 0
            },
            animate: {
                y: "0%",
                opacity: 1
            },
            className: I(tt, "mb-bottom-spin-enter", x && "landing-bot-spin"),
            children: [t.jsx("img", {
                className: "img-spin",
                src: Je,
                alt: ""
            }), t.jsxs("div", {
                children: [t.jsxs("div", {
                    className: "tit",
                    children: [n("Spin To Win"), " ", t.jsx("i", {
                        children: l !== "Crypto" ? N(l, f) : `${f}USDT`
                    })]
                }), t.jsx("div", {
                    className: "desc",
                    children: n("You have a free spin available!")
                })]
            }), t.jsx(e.Button, {
                onClick: () => r("#/spin"),
                children: n("Spin Now")
            })]
        })
    }),
    tt = "ss6b0gx",
    st = u.lazy(() => P(() =>
        import ("./index-cf8f8fcd.js").then(a => a.i), ["index-cf8f8fcd.js", "gift-b590e7c8.js", "main-10603bdf.js", "gift-21e1a3d0.css", "index-645e4e5d.css"]));

function nt() {
    return e.http.get("/activity/reward/hasUserClaimedFreeMoney")
}
async function at() {
    const o = Date.now();
    for (;;) {
        try {
            if (await nt() !== -1) break
        } catch (s) {
            console.log("Function failed:", s);
            break
        }
        if (Date.now() - o > 6e3) {
            console.log("Polling timeout");
            break
        }
        await e.utils.delay(1500)
    }
}
const ot = T(function() {
        const a = e.env.initSearchParams.get("bcn_bonus"),
            n = e.env.initSearchParams.get("bcn"),
            o = e.usePop();
        return u.useEffect(() => {
            a && n && (ue.setState({
                deviceRegist: !0
            }), e.accountStore.waitLogin().then(async () => {
                await e.utils.delay(3500), at().then(() => {
                    e.asyncQueue.add(() => o.push(t.jsx(Be, {
                        amount: Number(a),
                        currency: n
                    })))
                }).catch(s => {
                    console.error(s)
                })
            }))
        }, []), a && n ? null : t.jsx(rt, {})
    }),
    rt = F.memo(function() {
        const a = e.usePop(),
            n = e.useAccount(),
            [o, s] = u.useState(!0),
            r = e.useIsMobile();
        return u.useEffect(() => {
            ue.getDeviceRegist().then(c => {
                s(c)
            })
        }, []), u.useEffect(() => {
            o === !1 && setTimeout(() => {
                e.accountStore.initData.then(() => {
                    n.login || e.asyncQueue.add(() => a.push(t.jsx(u.Suspense, {
                        fallback: null,
                        children: t.jsx(st, {})
                    })))
                })
            }, 1e3)
        }, [o]), r && !o ? t.jsx(et, {}) : null
    }),
    jt = ot;
const me = T(function({
    name: n,
    duration: o = 5e3,
    title: s,
    content: r,
    url: c,
    rewardIcon: p
}) {
    const {
        t: d
    } = e.useTranslation(), h = e.useNavigate(), l = it().find(b => b.name === n), f = l || {
        name: "other",
        imgUrl: m.general,
        label: "",
        url: "/bonus"
    };
    return t.jsx("div", {
        className: ct,
        children: t.jsxs("div", {
            className: "inner",
            onClick: () => {
                h(c || f.url)
            },
            children: [t.jsx("img", {
                alt: "bonus",
                src: p || f.imgUrl,
                className: I("bonus-rewars-img", n)
            }), t.jsxs("div", {
                className: "rewards-notify-title",
                children: [t.jsx("p", {
                    className: "l",
                    children: s || f.label
                }), r && t.jsxs("p", {
                    className: "c",
                    children: [t.jsx("span", {
                        dangerouslySetInnerHTML: {
                            __html: r
                        }
                    }), n === "task" && t.jsx("span", {
                        className: "g",
                        children: `${d("Go to Claim your rewards")}! ->`
                    })]
                })]
            })]
        })
    })
});

function it() {
    const {
        t: a
    } = e.useTranslation();
    return [{
        name: "quests",
        imgUrl: m.quests,
        label: a("Quest Completed"),
        url: "#/quests"
    }, {
        name: "spin",
        imgUrl: m.spin,
        label: a("Spin Ready"),
        url: "#/spin"
    }, {
        name: "spin_fiat",
        imgUrl: m.spin_fiat,
        label: a("Spin Ready"),
        url: "#/spin"
    }, {
        name: "roll",
        imgUrl: m.roll,
        label: a("Roll Ready"),
        url: "#/bonus/roll"
    }, {
        name: "rakeback",
        imgUrl: m.rakeback,
        label: a("Rakeback Ready"),
        url: "#/rakeback"
    }, {
        name: "recharge",
        imgUrl: m.recharge,
        label: a("Recharge Ready"),
        url: "#/recharge"
    }, {
        name: "weeklybonus",
        imgUrl: m.weeklybonus,
        label: a("Weekly Cashback"),
        url: "/bonus"
    }, {
        name: "monthlybonus",
        imgUrl: m.monthlybonus,
        label: a("Monthly Cashback"),
        url: "/bonus"
    }, {
        name: "contest",
        imgUrl: m.contest,
        label: "",
        url: "/bonus"
    }, {
        name: "vipbonus",
        imgUrl: m.vipbonus,
        label: "",
        url: "/bonus"
    }]
}
const ct = "b1pfz1um",
    ut = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: me
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    lt = T(function() {
        const n = M();
        return u.useEffect(() => {
            n.showNotify && e.notify(t.jsx(me, {
                name: n.notifyType
            }), {
                duration: 5e3,
                className: "bonus-notify-wrap",
                onClose: () => {
                    R.firstInit(!0)
                }
            })
        }, [n.showNotify, n.notifyType]), null
    }),
    Ct = lt,
    dt = u.lazy(() => P(() =>
        import ("./BonusLink-71aaf3b8.js"), ["BonusLink-71aaf3b8.js", "gift-b590e7c8.js", "main-10603bdf.js", "gift-21e1a3d0.css", "tools-65472fba.js", "BonusLink-69774164.css"])),
    A = u.lazy(() => P(() => Promise.resolve().then(() => ut), void 0)),
    mt = u.lazy(() => P(() =>
        import ("./BcdReward-4a4e2574.js"), ["BcdReward-4a4e2574.js", "gift-b590e7c8.js", "main-10603bdf.js", "gift-21e1a3d0.css", "index-16afc258.js", "BcdReward-80a985d0.css"]));
let X = null;
const ce = (a, n, o) => {
        X && clearTimeout(X), X = setTimeout(() => {
            e.notify(t.jsx(A, {
                name: "vipbonus",
                title: a,
                content: n,
                rewardIcon: o
            }), {
                duration: 5e3,
                className: "bonus-notify-wrap"
            })
        }, 2e3)
    },
    pt = T(function() {
        const {
            t: a
        } = e.useTranslation(), n = e.useNavigate(), o = e.usePop();
        return u.useEffect(() => {
            e.addUserReceiptEvent("regist-invited-present-success", s => {
                const r = s.presentAmounts;
                if (r) {
                    const c = Object.keys(r).map(d => ({
                            name: d,
                            amount: r[d],
                            locked: !1
                        })),
                        p = {
                            currencyName: c[0].name,
                            stringAmount: c[0].amount,
                            locked: c[0].locked,
                            rewardType: "Money",
                            depositBonusPercentage: 0
                        };
                    e.asyncQueue.add(() => o.push(t.jsx(dt, {
                        code: "",
                        linkInfo: p,
                        isWelcome: !0,
                        defaultStatus: 1
                    })))
                }
            }), e.addUserReceiptEvent("recharge-bonus-notice", s => {
                e.bcdStore.initFn(), e.notify(a("Your Deposit Bonus of {{amount}} {{currencyName}} has been credited to your {{currencyNameTwo}} Unlock.", {
                    amount: s.amount,
                    currencyName: e.systemStore.getAlias(s.currencyName),
                    currencyNameTwo: e.systemStore.getAlias(s.currencyName)
                }), {
                    duration: 0,
                    onClick: () => {
                        n("#/bonus/dashboard"), setTimeout(() => {
                            o.push(t.jsx(mt, {
                                amount: s.amount,
                                currencyName: s.currencyName
                            }))
                        }, 2e3)
                    }
                })
            }), e.addUserReceiptEvent("user-reward", s => {
                switch (s.rewardType) {
                    case "contest":
                        {
                            e.notify(t.jsx(A, {
                                name: "contest",
                                title: s.title,
                                content: s.content,
                                rewardIcon: s.rewardIcon
                            }), {
                                duration: 5e3,
                                className: "bonus-notify-wrap"
                            });
                            break
                        }
                    case "weekly_bonus":
                        {
                            e.notify(t.jsx(A, {
                                name: "weeklybonus",
                                duration: 0,
                                rewardIcon: s.rewardIcon
                            }), {
                                duration: 0,
                                className: "bonus-notify-wrap"
                            });
                            break
                        }
                    case "month_bonus":
                        {
                            e.notify(t.jsx(A, {
                                name: "monthlybonus",
                                duration: 0,
                                rewardIcon: s.rewardIcon
                            }), {
                                duration: 0,
                                className: "bonus-notify-wrap"
                            });
                            break
                        }
                    case "level-up":
                        {
                            ce(s.title, s.content, s.rewardIcon);
                            break
                        }
                    case "vip_give_bonus":
                        {
                            ce(s.title, s.content, s.rewardIcon);
                            break
                        }
                    case "rewardTaskHub":
                        break;
                    case "vip_recharge_bonus":
                        break;
                    case "wager-degenpass":
                        break;
                    case "bigbangfianal":
                        break;
                    default:
                        {
                            e.notify(t.jsx(A, {
                                name: "other",
                                title: s.title,
                                content: s.content,
                                rewardIcon: s.rewardIcon
                            }), {
                                duration: 5e3,
                                className: "bonus-notify-wrap"
                            });
                            break
                        }
                }
                e.app.emit("rewardClaim")
            }), e.addUserReceiptEvent("user-present-success", s => {
                switch (s.presentType) {
                    case "tip":
                        e.notify(a("Wow! You received {{amount}} tip from {{userName}}", {
                            amount: `${s.amount} ${e.systemStore.getAlias(s.currencyName)}`,
                            userName: s.userName
                        }), {
                            duration: 5e3
                        });
                        break;
                    case "rain":
                        e.notify(a("Wow! You received {{amount}} rain from {{userName}}", {
                            amount: `${s.amount} ${e.systemStore.getAlias(s.currencyName)}`,
                            userName: s.userName
                        }), {
                            duration: 5e3
                        });
                        break;
                    default:
                        e.app.emit("get-spin-rain-or-tip"), e.notify(a("Wow you got {{amount}} spin from Coco", {
                            amount: s.amount
                        }), {
                            duration: 0,
                            onClick: () => n("#/spin")
                        });
                        break
                }
            }), e.addUserReceiptEvent("task-completed", s => {
                const r = s.taskType === "daily" ? "#/quests" : "#/quests/weekly";
                e.app.emit("rewardClaim"), e.notify(t.jsx(A, {
                    name: "task",
                    content: s.content,
                    url: r
                }), {
                    duration: 5e3,
                    className: "bonus-notify-wrap"
                })
            }), e.addUserReceiptEvent("recharge-success", s => {
                e.app.emit("rewardClaim"), s.status === 1 ? e.notify(a("Deposit is in progress"), {
                    duration: 5e3
                }) : (e.app.emit("track", "deposit_recieved"), e.bcdStore.initFn(), e.walletStore.state[s.currencyName].displayStatus = 1, s.depositCount == 1 ? e.app.emit("ad_track", "ftd_success", {
                    sales: e.systemStore.amount2usd(new e.Decimal(s.amount || 0), s.currencyName).toString(),
                    orderid: String(s.id),
                    userId: String(e.accountStore.state.userId)
                }) : s.depositCount == 2 && e.app.emit("ad_track", "reccuring_deposit", {
                    sales: e.systemStore.amount2usd(new e.Decimal(s.amount || 0), s.currencyName).toString(),
                    orderid: String(s.id),
                    userId: String(e.accountStore.state.userId)
                }), e.app.emit("ad_track", "deposit_success", {
                    sales: e.systemStore.amount2usd(new e.Decimal(s.amount || 0), s.currencyName).toString(),
                    orderid: String(s.id),
                    userId: String(e.accountStore.state.userId)
                }), e.notify(`${s.amount} ${e.systemStore.getAlias(s.currencyName)}`, {
                    title: a("Congrats! Your deposit has been completed!"),
                    duration: 5e3,
                    onClick: () => n(`#/deposit_detail/${s.id}`)
                }), e.app.emit("da_track", "deposit_sended"))
            }), e.addUserReceiptEvent("withdraw-progress", () => {
                e.notify(a("Withdrawal is in progress."), {
                    duration: 5e3
                })
            }), e.addUserReceiptEvent("withdraw-success", s => {
                e.notify(a("You have successfully withdrawn {{amount}}.", {
                    amount: `${s.amount} ${e.systemStore.getAlias(s.currencyName)}`
                }), {
                    duration: 5e3,
                    title: a("Withdrawal Successful")
                })
            }), e.addUserReceiptEvent("withdraw-fail", s => {
                e.notify(a("Withdrawal failed. {{amount}} has been returned to your balance.", {
                    amount: `${s.amount} ${e.systemStore.getAlias(s.currencyName)}`
                }), {
                    duration: 0,
                    onClick: () => n(`/wallet/transaction?type=withdraw&assets=${s.currencyName}`)
                })
            }), e.addUserReceiptEvent("change-amount-success", s => {
                e.notify(`You found ${s.amount} ${e.systemStore.getAlias(s.currencyName)} under of Coco's Red throne`, {
                    title: a("Forum Tip"),
                    duration: 0,
                    onClick: () => n(`/wallet/transaction?type=bill&assets=${s.currencyName}`)
                })
            }), e.addUserReceiptEvent("use-code-success", s => {
                e.notify(a("You have got {{amount}} from {{mascot}}'s cave.", {
                    amount: `${s.amount} ${e.systemStore.getAlias(s.currencyName)}`,
                    mascot: e.env.mascot
                }), {
                    title: a("The bonus code worked!"),
                    duration: 5e3,
                    onClick: () => n(`/wallet/transaction?type=bill&assets=${s.currencyName}`)
                })
            }), e.addUserReceiptEvent("present-success", s => {
                e.notify(a("Congratulations! You got {{amount}} from {{mascot}}'s cave.", {
                    amount: `${s.amount} ${e.systemStore.getAlias(s.currencyName)}`,
                    mascot: e.env.mascot
                }), {
                    duration: 0,
                    onClick: () => n(`/wallet/transaction?type=deposit&assets=${s.currencyName}`)
                })
            }), e.addUserReceiptEvent("regist-present-success", () => {
                e.asyncQueue.add(() => n("#/spin"))
            })
        }, []), null
    }),
    St = pt;
export {
    jt as AutoNewSpin, bt as BcdTipsEnter, St as BindBonusEvents, Nt as BonusEnter, Ct as BonusNotify, vt as CatchCoco, wt as MobileLinkEnter, yt as MobileNumberEnter, kt as NewUserTask, xt as PCLinkEnter
};