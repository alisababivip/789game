var tt = Object.defineProperty,
    it = Object.defineProperties;
var rt = Object.getOwnPropertyDescriptors;
var ds = Object.getOwnPropertySymbols;
var ot = Object.prototype.hasOwnProperty,
    ct = Object.prototype.propertyIsEnumerable;
var gs = (D, M, R) => M in D ? tt(D, M, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: R
    }) : D[M] = R,
    W = (D, M) => {
        for (var R in M || (M = {})) ot.call(M, R) && gs(D, R, M[R]);
        if (ds)
            for (var R of ds(M)) ct.call(M, R) && gs(D, R, M[R]);
        return D
    },
    Y = (D, M) => it(D, rt(M));
import {
    j as e
} from "../../chunk-a4af42e8.js";
import {
    ez as Z,
    du as V,
    eh as hs,
    e5 as $,
    e3 as Q,
    ev as b,
    ed as T,
    dL as O,
    ci as oe,
    eq as ue,
    cu as z,
    eI as _e,
    dK as le,
    dg as ee,
    dS as xe,
    cl as y,
    eC as lt,
    dF as mt,
    e9 as pe,
    ds as U,
    cZ as dt,
    eg as se,
    en as ke,
    cB as us,
    dG as gt,
    ey as xs,
    dO as Le,
    cA as fe,
    cT as J,
    cS as ae,
    er as ht,
    es as ps,
    cJ as F,
    ak as fs,
    dv as ut,
    cL as xt,
    a as ne,
    dl as js,
    d6 as bs,
    bq as pt,
    aC as ft,
    al as ys,
    dd as jt,
    e7 as bt,
    da as yt,
    __tla as vt
} from "../../chunk-64278058.js";
import {
    r as c,
    R as A
} from "../../chunk-73e80d68.js";
import {
    c as u
} from "../../chunk-5bcb444f.js";
import {
    g as Ct,
    S as vs,
    L as Nt
} from "../../chunk-132aa0a7.js";
import {
    g as wt
} from "../../chunk-8d9c7a4a.js";
import {
    U as _t,
    S as Ie,
    M as ce
} from "../../chunk-f82403c7.js";
import {
    G as te
} from "../../chunk-42f5abfc.js";
import {
    G as kt
} from "../../chunk-55136115.js";
import {
    g as Me
} from "../../chunk-4c2df952.js";
import {
    aZ as Cs,
    bw as Ns,
    __tla as Lt
} from "../../chunk-07f95b47.js";
import {
    d as It,
    g as X
} from "../../chunk-cf8d333b.js";
import {
    g as ws
} from "../../chunk-7459b96e.js";
import {
    G as Ee
} from "../../chunk-405456f5.js";
import "../../chunk-cf010ec4.js";
import "../../chunk-c300dd90.js";
import "../../chunk-f1a029f1.js";
import "../../chunk-9a1dea26.js";
import {
    __tla as Mt
} from "../../chunk-f0f89bbe.js";
import {
    __tla as Et
} from "../../chunk-7a9ca7ff.js";
import {
    __tla as St
} from "../../chunk-07d6de63.js";
import "../../chunk-de5e47f6.js";
let _s, ks, Ht = Promise.all([(() => {
    try {
        return vt
    } catch (D) {}
})(), (() => {
    try {
        return Lt
    } catch (D) {}
})(), (() => {
    try {
        return Mt
    } catch (D) {}
})(), (() => {
    try {
        return Et
    } catch (D) {}
})(), (() => {
    try {
        return St
    } catch (D) {}
})()]).then(async () => {
    var D = function() {
            const s = Array.prototype.slice.call(arguments).filter(Boolean),
                a = {},
                n = [];
            s.forEach(i => {
                (i ? i.split(" ") : []).forEach(l => {
                    if (l.startsWith("atm_")) {
                        const [, o] = l.split("_");
                        a[o] = l
                    } else n.push(l)
                })
            });
            const t = [];
            for (const i in a) Object.prototype.hasOwnProperty.call(a, i) && t.push(a[i]);
            return t.push(...n), t.join(" ")
        },
        M = D;
    const R = Z.timeMemoize(async function(s) {
        const {
            areaCode: a
        } = await wt();
        return V.get(`/home/main/banner/?areaCode=${a}`)
    }, {
        timeout: 3e6,
        getKey: s => s
    });

    function Ls() {
        return hs()
    }

    function je() {
        return hs()
    }
    const Is = Ct,
        Ms = "/assets/banner.faa8bc46.png",
        Es = "/assets/banner_w.48b17e29.png",
        Ss = "/assets/banner_m.9bf0bc9d.png",
        Hs = "/assets/banner_w_m.38d3ae39.png";

    function Ps() {
        const s = $(),
            a = Q();
        return e.jsx("img", {
            className: "img-banner",
            src: s ? a ? Ss : Hs : a ? Ms : Es,
            alt: ""
        })
    }
    const zs = "/assets/bronze_mini.6f7b7038.png",
        Ds = "/assets/silver_mini.15b4ec85.png",
        Bs = "/assets/gold_mini.43baef12.png",
        Se = "/assets/platinum_mini.a2837eaf.png",
        be = "/assets/diamond_mini.6bf304c0.png";

    function Ts() {
        return e.jsxs("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "17",
            viewBox: "0 0 16 17",
            fill: "none",
            children: [e.jsxs("g", {
                clipPath: "url(#clip0_1026_10526)",
                children: [e.jsx("path", {
                    d: "M3 8.5H13",
                    stroke: "#45D91E",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }), e.jsx("path", {
                    d: "M8.90909 4.40918L13 8.50009L8.90909 12.591",
                    stroke: "#45D91E",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                })]
            }), e.jsx("defs", {
                children: e.jsx("clipPath", {
                    id: "clip0_1026_10526",
                    children: e.jsx("rect", {
                        width: "16",
                        height: "16",
                        fill: "white",
                        transform: "translate(0 0.5)"
                    })
                })
            })]
        })
    }
    const As = ({
        x: s,
        y: a,
        levelStatus: n
    }) => {
        const {
            t
        } = b(), i = {
            position: "absolute",
            left: s,
            top: a,
            zIndex: 10
        };
        return e.jsx("div", {
            style: i,
            children: e.jsxs("div", {
                className: Rs,
                children: [e.jsxs("span", {
                    className: "percent",
                    children: [Math.min(Math.floor(n), 100), "%"]
                }), e.jsx("span", {
                    children: t("Completed")
                })]
            })
        })
    };

    function $s() {
        const {
            t: s
        } = b();
        return [{
            label: s("Bronze"),
            img: zs,
            desc: "VIP 2-7"
        }, {
            label: s("Silver"),
            img: Ds,
            desc: "VIP 8-21"
        }, {
            label: s("Gold"),
            img: Bs,
            desc: "VIP 22-37"
        }, {
            label: `${s("Platinum")} I`,
            img: Se,
            desc: "VIP 38-55"
        }, {
            label: `${s("Platinum")} II`,
            img: Se,
            desc: "VIP 56-69"
        }, {
            label: `${s("Diamond")} I`,
            img: be,
            desc: "SVIP 1-15"
        }, {
            label: `${s("Diamond")} II`,
            img: be,
            desc: "SVIP 16-37"
        }, {
            label: `${s("Diamond")} III`,
            img: be,
            desc: `SVIP 38-${oe.maxLevel-69}`
        }]
    }

    function Fs() {
        var ls, ms;
        const {
            t: s
        } = b(), a = T(), n = $s(), t = O(), i = oe.getLevelInfo(t.vipLevel), l = oe.maxLevel - 69, o = c.useRef(null), [r, g] = ue({
            labelType: i.type === 0 ? 1 : i.type,
            xpPercent: 0
        }), [d, m] = c.useState([]), x = Math.max(t.levelEndXP - t.levelStartXP, 1), p = Math.max(t.currXP - t.levelStartXP, 1), f = Math.max(x - p, 1), v = (ls = d.map((P, K) => P.levels).flat().find(P => i.level + 1 === P.vipLevel)) == null ? void 0 : ls.bonusAmount, C = P => le.convertCurrency(new z(P), "BCD", t.bonusCurrencyName).todp(2, z.ROUND_DOWN).toString(), j = t.bonusCurrencyName !== "BCD", N = (ms = n.find((P, K) => K + 1 === r.labelType)) == null ? void 0 : ms.img, {
            isSvip: _,
            vipType: E,
            vipLevel: S
        } = oe.getUserLevelInfo(t.vipLevel);
        let k = p / x * 100;
        c.useEffect(() => {
            const P = _ && S > l ? 100 : k < 2 ? 2 : new z(k).todp(2).toNumber(),
                K = _e.timeline();
            return o.current && (K.to(o.current, {
                delay: .2
            }), K.to(o.current, {
                duration: P / 100 * 3,
                width: `${P}%`,
                ease: "power2.out"
            })), () => {
                _e.killTweensOf(K)
            }
        }, []);
        const w = _ && S >= l;
        w && (k = 100);
        const [H, h] = c.useState(!1), [L, I] = c.useState({
            text: "",
            x: 0,
            y: 0,
            levelStatus: k
        }), B = c.useRef(null), q = P => {
            h(!0), I({
                text: "",
                x: P.clientX,
                y: P.clientY,
                levelStatus: k
            })
        }, ie = P => {
            var K;
            if (B.current) {
                const nt = (K = B.current) == null ? void 0 : K.getBoundingClientRect();
                I({
                    text: "",
                    x: P.clientX - nt.left - 50,
                    y: -50,
                    levelStatus: k
                })
            }
        }, re = () => {
            h(!1)
        };
        c.useEffect(() => {
            V.get("/game/support/vip/rankInfo/").then(P => {
                P && m(P)
            }).catch()
        }, []);
        const he = `${C(v||0)} ${j?le.getAlias(t.bonusCurrencyName):"BCD"}`;
        return e.jsxs("div", {
            className: u("container", Vs),
            children: [e.jsx("div", {
                className: "sub-tit ttu",
                children: e.jsx("span", {
                    children: s("Hello, great to see you back!")
                })
            }), e.jsxs("div", {
                className: "vip-info",
                children: [e.jsxs("div", {
                    className: "cont",
                    children: [e.jsx("img", {
                        className: "current-level-icon",
                        src: N,
                        alt: ""
                    }), " ", e.jsxs("span", {
                        className: "ttu",
                        children: [E, S]
                    }), " ", t.name]
                }), e.jsxs("div", {
                    className: "view",
                    onClick: () => {
                        a("#/vip")
                    },
                    children: [s("View VIP Club"), " ", e.jsx(Ts, {})]
                })]
            }), e.jsxs("div", {
                className: "box",
                children: [e.jsxs("div", {
                    className: "vip-line",
                    ref: B,
                    onMouseOver: q,
                    onMouseMove: ie,
                    onMouseOut: re,
                    children: [e.jsx("div", {
                        className: "vip-progress",
                        ref: o
                    }), H && e.jsx(As, W({}, L))]
                }), e.jsxs("div", {
                    className: "bot-info",
                    children: [e.jsx("div", {
                        className: "next-xp",
                        title: `${f}XP` + s("To Next Lvl."),
                        children: w ? s("Maximum Level Achieved") : e.jsxs(e.Fragment, {
                            children: [e.jsxs("span", {
                                children: [f, " XP"]
                            }), " ", s("To Next Lvl.")]
                        })
                    }), i.level !== 0 && !v ? "" : e.jsx("div", {
                        className: "next-info",
                        children: i.level === 0 ? s("Next Level Bonus available at VIP 2!") : e.jsxs(ee, {
                            amount_info: he,
                            i18nKey: "trans.mainpage.next.bonus",
                            children: ["Next Level Bonus ", e.jsx("span", {
                                className: "amount",
                                children: {
                                    amount_info: he
                                }
                            })]
                        })
                    })]
                })]
            })]
        })
    }
    const Vs = "v15s7q87",
        Rs = "t1n55c6n",
        Gs = c.memo(function() {
            const {
                t: s
            } = b(), a = T(), n = O(), t = xe(), i = c.useMemo(() => {
                const r = [s("First Deposit Bonus"), s("Second Deposit Bonus"), s("Third Deposit Bonus"), s("Fourth Deposit Bonus")];
                return t.firstExpiredTime > 0 ? s("Limited Time Deposit Bonus") : r[t.rechargeValidNum || 0]
            }, []);
            let l = "-",
                o = [];
            if (t.bonusItems && t.bonusItems.length > 0) {
                const r = t.bonusItems[t.bonusItems.length - 1];
                r && (l = "+" + new z(r.bonusRatio).mul(100).toString() + "%", o = r.weeks ? r.weeks : [])
            }
            return e.jsx("div", {
                className: u("container dp-bonus", Ws),
                children: e.jsxs("div", {
                    className: "cont",
                    children: [e.jsxs("div", {
                        className: "sub-tit",
                        children: [s("Hi"), " ", e.jsxs("span", {
                            className: "name",
                            children: [n.name, "!"]
                        }), " ", s("Welcome aboard")]
                    }), e.jsxs("div", {
                        className: "title",
                        children: [e.jsx("div", {
                            className: "rewards-num ttu",
                            children: o.length > 0 ? s("Deposit Bonus") : i
                        }), " ", e.jsxs("div", {
                            className: "cl-primary gradient nowrap",
                            children: [l, " ", e.jsx("span", {
                                className: "ttu",
                                children: s("Rewards")
                            })]
                        })]
                    }), e.jsxs("div", {
                        className: "opt-wrap btns",
                        children: [e.jsx(y, {
                            type: "conic",
                            onClick: () => a("#/deposit"),
                            children: s("Deposit & Play")
                        }), e.jsx(y, {
                            type: "conic3",
                            onClick: () => {
                                lt.state.JB && mt.setState({
                                    currencyName: "JB"
                                }), a("/casino")
                            },
                            children: s("Free Play")
                        })]
                    })]
                })
            })
        }),
        Ws = "sblqamh",
        Zs = 2e4,
        Os = c.memo(function() {
            const {
                t: s
            } = b(), a = T(), n = pe(!0), {
                isKenyaHost: t
            } = Z.getHostType(U.host);
            return e.jsx("div", {
                className: u("container", qs),
                children: e.jsxs("div", {
                    className: "cont",
                    children: [e.jsxs("div", {
                        className: "title nologin-tit",
                        children: [e.jsx("div", {
                            className: "title-top ttu",
                            children: e.jsxs(ee, {
                                i18nKey: "trans.mainpage.signup.bonus",
                                children: ["Sign Up & ", e.jsx("span", {
                                    className: "cl-primary",
                                    children: "Get"
                                }), " Reward ", e.jsx("br", {}), " Up to"]
                            })
                        }), e.jsx("div", {
                            className: "title-two ttu cl-primary gradient",
                            children: n.amount2localStr(new z(Zs))
                        })]
                    }), e.jsxs("div", {
                        className: "opt-wrap",
                        children: [e.jsx(y, {
                            type: "conic2",
                            className: "btn",
                            onClick: () => a("#/login/regist"),
                            children: s("Sign Up Now")
                        }), !t && e.jsxs("div", {
                            className: "other-login",
                            children: [e.jsx("div", {
                                className: "txt",
                                children: "or"
                            }), e.jsx(dt.Target, {
                                id: "page-third-login-enter"
                            })]
                        })]
                    })]
                })
            })
        }),
        qs = "swmf6te",
        Ks = "/assets/ru.15e3ba6f.png",
        Us = "/assets/ru_w.a0bb73b3.png",
        Js = "/assets/ru_m.90981de0.png",
        Xs = "/assets/ru_m_w.5c3454c6.png",
        Ys = c.memo(function({
            props: s
        }) {
            const {
                lang: a
            } = se(), n = $(), t = Q(), {
                login: i
            } = O(), l = Is(s, i, t, n), o = ea(l, t, n, a);
            return e.jsx("img", {
                className: "img-banner",
                src: o,
                alt: ""
            })
        }),
        Qs = ["bcstavka.com", "bcigra.com", "bcstavka.game", "bcigra.in", "bcigra.site", "gotomoon.app"];

    function ea(s, a, n, t) {
        const i = Qs.find(l => U.host.includes(l));
        return t === "ru" && i && i !== "" ? n ? a ? Js : Xs : a ? Ks : Us : s
    }

    function sa() {
        const [s, a] = c.useState(0);
        return c.useEffect(() => {
            V.get("/payment/deposit/transactionCount/").then(t => {
                a(t.totalDepositCount)
            });
            const n = gt.decodeBind(t => {
                t.status !== 1 && a(t.depositCount)
            }, "json");
            return xs.on("recharge-success", n), () => {
                xs.off("recharge-success", n)
            }
        }, []), s
    }

    function aa() {
        const s = xe(),
            a = sa();
        return s.rechargeValidNum < 4 && a === 0 ? e.jsx(us, {
            children: e.jsx(Gs, {})
        }) : e.jsx(Fs, {})
    }
    const na = c.memo(function({
            props: s
        }) {
            const [a, n] = c.useState(!1), {
                login: t
            } = O(), {
                isKenyaHost: i
            } = Z.getHostType(U.host), l = ke(o => {
                o.width <= 1100 && o.width >= 740 ? n(!0) : n(!1)
            }, 500);
            return e.jsxs("div", {
                ref: l,
                className: u(ta, a && "small"),
                children: [t ? e.jsx(c.Suspense, {
                    children: e.jsx(aa, {})
                }) : e.jsx(Os, {}), e.jsx("div", {
                    className: "img-banner-wrap",
                    children: i ? e.jsx(Ps, {}) : e.jsx(Ys, {
                        props: s
                    })
                })]
            })
        }),
        ta = "s1s5kck9";

    function ye() {
        const {
            lang: s
        } = se(), {
            isKenyaHost: a,
            isBrHost: n
        } = Z.getHostType(U.host), t = s === "ja" && !n && !a, {
            data: i,
            error: l
        } = Le(() => R(s), [s]), o = $();
        return l ? e.jsx(fe, {
            children: l.message
        }) : i ? o ? a ? null : e.jsx(vs, {
            data: i
        }) : e.jsx("div", {
            className: u(ia, t && "jp-banner-wrap"),
            children: e.jsxs("div", {
                className: "page-max-width-wrap",
                children: [e.jsx(na, {
                    props: i
                }), !a && e.jsx(vs, {
                    data: i
                })]
            })
        }) : e.jsx("div", {
            className: ra,
            children: e.jsx(J, {})
        })
    }
    const ia = "s1u3sbxw",
        ra = "s1til8c",
        oa = "/assets/casino.ebb4197f.png",
        ca = "/assets/sports.2ee3ffe3.png",
        la = "/assets/racing.f6d6ead7.png",
        ma = "/assets/trading.e9326d91.png",
        da = "/assets/lottery.07712b6a.png",
        ga = s => e.jsx("svg", Y(W({
            xmlns: "http://www.w3.org/2000/svg",
            width: "27",
            height: "26",
            viewBox: "0 0 27 26",
            fill: "none"
        }, s), {
            children: e.jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M13.9632 0C14.5239 0 14.978 0.441131 14.978 0.986262C14.978 1.43259 14.673 1.80872 14.2553 1.93092C15.1002 3.77432 16.265 5.45218 17.7461 6.96363C17.9043 7.12506 18.0693 7.29187 18.2393 7.46377L18.2396 7.46405C20.9807 10.2353 25.0306 14.3297 22.9555 18.524C21.7093 21.0434 19.1631 21.9846 16.2208 21.0608C15.6246 20.8736 14.7986 20.377 13.7422 19.5692H12.7274C11.6709 20.3761 10.8441 20.8736 10.2479 21.0608C7.30563 21.9838 4.75942 21.0434 3.51319 18.524C1.43773 14.3282 5.4887 10.2337 8.23045 7.46254L8.23049 7.46251C8.40012 7.29105 8.56474 7.12467 8.72259 6.96363C10.2011 5.45564 11.3633 3.78125 12.21 1.94132C11.7689 1.83299 11.4447 1.44646 11.4447 0.986262C11.4447 0.441998 11.8988 0 12.4596 0C12.5523 0 12.6416 0.0121333 12.7274 0.0346665L12.7265 5.42531L12.7274 5.42444V11.5483C12.1354 11.7511 11.7117 12.2997 11.7117 12.9436C11.7117 13.7609 12.3928 14.423 13.2343 14.423C14.0759 14.423 14.7562 13.7609 14.7562 12.9436C14.7562 12.2997 14.3324 11.7511 13.7405 11.5483L13.7396 5.42444L13.7413 5.42531L13.7396 0.0242666C13.8115 0.00866663 13.8861 0 13.9623 0H13.9632ZM13.1876 26.0003H7.75115C7.63155 26.0003 7.53449 25.9032 7.53449 25.7836C7.53449 25.7143 7.56742 25.6493 7.62375 25.6086C8.467 24.9933 9.31545 24.202 10.1691 23.2357C11.216 22.0501 12.0688 20.8281 12.7274 19.5705H13.1417H13.2344H13.6487C14.3073 20.8281 15.1601 22.0501 16.207 23.2357C17.0598 24.202 17.9082 24.9933 18.7515 25.6086C18.8078 25.6493 18.8407 25.7143 18.8407 25.7836C18.8407 25.9032 18.7445 26.0003 18.6241 26.0003H13.1885L13.1881 25.9407L13.1876 26.0003Z",
                fill: "#65C316"
            })
        })),
        ha = s => e.jsx("svg", Y(W({
            xmlns: "http://www.w3.org/2000/svg",
            width: "26",
            height: "26",
            viewBox: "0 0 26 26",
            fill: "none"
        }, s), {
            children: e.jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M0.565591 7.83195C0.565591 7.77159 1.46072 7.77159 1.46072 7.83195C1.46072 7.89231 1.33165 9.01028 3.19528 11.4839C5.05983 13.9585 6.23446 13.9827 7.59573 15.7794C8.957 17.5762 8.957 19.2847 8.94308 19.4992C8.92822 19.7118 8.3098 19.6831 7.95323 19.4992C7.59666 19.3154 6.76003 18.6124 6.04411 18.2057C4.63084 17.4025 3.11264 17.2048 1.56937 16.2261C-1.22653 14.4535 0.565591 7.89323 0.565591 7.83195ZM25.4344 7.83195C25.4344 7.89231 27.2265 14.4525 24.4306 16.2261C22.8892 17.2048 21.3701 17.4025 19.9559 18.2057C19.24 18.6134 18.4033 19.3154 18.0468 19.4992C17.6902 19.6831 17.0709 19.7118 17.0569 19.4992C17.0421 19.2847 17.0421 17.5762 18.4043 15.7794C19.7665 13.9827 20.9411 13.9585 22.8047 11.4839C24.6693 9.00935 24.5393 7.89231 24.5393 7.83195C24.5393 7.77159 25.4344 7.77159 25.4344 7.83195ZM11.9934 0.533666C11.9981 0.56338 11.9999 0.593094 11.9999 0.622807C12.0259 6.19598 12.0408 10.575 12.0436 13.7618V16.2011C12.0399 18.7955 12.0241 20.1103 11.9962 20.1456C11.9006 20.2663 10.7761 20.2208 10.6972 20.1456C10.6182 20.0704 10.3759 16.7694 8.80103 14.8575C7.22619 12.9456 2.65302 9.89162 3.24823 5.40392C3.61594 2.62755 6.15463 0.850303 10.8624 0.074033L11.284 0.00810579C11.6248 -0.0429646 11.9424 0.192888 11.9925 0.533666H11.9934ZM14.6027 0.000451828L14.715 0.0069517L15.1366 0.0728789C19.8453 0.850077 22.384 2.6264 22.7508 5.40277C23.3451 9.89046 18.7728 12.9445 17.1989 14.8564C15.6232 16.7682 15.3808 20.0693 15.3019 20.1445C15.2239 20.2197 14.0985 20.2652 14.0028 20.1445C13.975 20.1092 13.9592 18.7944 13.9555 16.2V13.7607C13.9583 10.5739 13.9731 6.1939 13.9991 0.621653C13.9991 0.59194 14.0019 0.562226 14.0056 0.532512C14.0567 0.191734 14.3733 -0.0441187 14.7141 0.0069517L14.6027 0.000451828ZM1.22387 19.4311C0.889591 18.4059 1.52473 18.3122 3.59728 19.6288C5.66983 20.9455 8.05809 20.5407 8.51494 21.0941C8.97179 21.6457 8.05809 23.3774 5.88525 23.5306C3.71242 23.6838 1.55908 20.4571 1.2248 19.432L1.22387 19.4311ZM24.776 19.4312C24.4417 20.4563 22.2875 23.6839 20.1155 23.5298C17.9436 23.3757 17.029 21.6448 17.4859 21.0933C17.9427 20.5408 20.331 20.9456 22.4035 19.628C24.4761 18.3104 25.1112 18.4051 24.7769 19.4302L24.776 19.4312ZM11.6851 21.6404C11.8578 21.6404 11.9971 21.7797 11.9971 21.9524V25.688C11.9971 25.8607 11.8578 26 11.6851 26H11.6805C9.34144 25.9647 8.17238 25.5998 8.17238 24.9034C8.17238 24.7325 8.38966 24.5208 8.72859 24.1865L8.97094 23.9451C9.14273 23.7705 9.33494 23.569 9.53829 23.3332C9.74165 23.0973 10.0369 22.6767 10.426 22.0694C10.5978 21.8011 10.8949 21.6404 11.2134 21.6404H11.6851ZM14.7865 21.6404C15.105 21.6404 15.4021 21.8029 15.5748 22.0694C15.9639 22.6767 16.2592 23.0983 16.4616 23.3332C16.664 23.5681 16.8563 23.7705 17.029 23.9451L17.2713 24.1865C17.6093 24.5199 17.8275 24.7325 17.8275 24.9034C17.8275 25.5989 16.6594 25.9647 14.3194 26C14.143 26 14.0028 25.8607 14.0028 25.688V21.9524C14.0028 21.7797 14.143 21.6404 14.3148 21.6404H14.7865Z",
                fill: "#EA6518"
            })
        })),
        ua = s => e.jsxs("svg", Y(W({
            xmlns: "http://www.w3.org/2000/svg",
            width: "26",
            height: "26",
            viewBox: "0 0 26 26",
            fill: "none"
        }, s), {
            children: [e.jsx("g", {
                clipPath: "url(#clip0_1630_193)",
                children: e.jsx("path", {
                    d: "M20.1462 0C20.1072 0 20.0552 0 20.0162 0.013C19.9512 0.026 18.7292 0.351 18.0662 1.001C17.4032 1.651 17.0522 2.509 16.9222 3.159C10.5392 3.38 4.39018 6.968 4.39018 14.612C4.39018 16.588 4.97518 19.76 5.85918 21.06C5.85918 21.06 6.69118 22.75 10.7212 25.012C13.4642 25.922 16.2202 26 17.1302 26C17.2862 26 17.3902 26 17.4162 26C17.6372 26 17.8192 25.844 17.8842 25.636C17.9102 25.571 18.3912 24.076 18.3912 22.451C18.3912 20.761 17.7152 19.682 17.0652 18.629C16.3632 17.511 15.6352 16.341 15.6352 14.287C15.6352 13.234 16.0122 12.454 16.7532 11.947C17.8322 13.962 19.8602 14.443 20.7052 14.56C20.8742 15.067 21.2642 15.925 21.9662 16.198C22.2782 16.328 22.6292 16.328 22.9412 16.198C23.0972 16.289 23.2922 16.354 23.4742 16.328C24.0202 16.315 24.5792 15.938 24.9692 15.275C25.0082 15.21 25.0472 15.145 25.0992 15.08C25.5282 14.443 26.3992 13.117 24.4622 11.258C23.5392 7.293 21.8882 5.343 21.2642 4.589L21.1862 4.472C20.8872 4.121 20.5752 3.77 20.2502 3.432L20.6662 0.572C20.6922 0.403 20.6272 0.234 20.5102 0.117C20.4062 0.052 20.2762 0 20.1462 0ZM16.5582 0.104C16.5322 0.104 16.5192 0.117 16.4932 0.117C16.0902 0.169 15.8172 0.494 15.5312 0.819C15.4142 0.949 15.1932 1.196 15.0762 1.261C14.9722 1.235 14.7512 1.066 14.6082 0.975C14.2052 0.702 13.6982 0.351 13.1262 0.481C12.6452 0.572 12.3592 1.04 12.0862 1.469C11.9822 1.638 11.7742 1.95 11.6572 2.041C11.5402 2.002 11.3062 1.859 11.1502 1.768C10.7082 1.508 10.2402 1.235 9.77219 1.391C9.27819 1.56 8.91418 2.223 8.77118 2.704C8.71918 2.86 8.64118 3.133 8.57618 3.237C8.44618 3.224 8.09518 3.12 7.93918 3.055C7.47118 2.847 6.82118 2.795 6.34018 3.029C5.83318 3.289 5.71618 4.121 5.72918 4.615C5.72918 4.758 5.72918 4.992 5.71618 5.109C5.70318 5.226 5.66418 5.252 5.62518 5.278C5.56018 5.33 5.35218 5.33 5.18318 5.356C4.74118 5.408 4.14318 5.317 3.83118 5.707C3.50617 6.149 3.54517 6.669 3.66217 7.163C3.72717 7.332 3.81818 7.683 3.80518 7.748C3.74018 7.826 3.66217 7.878 3.46717 7.956C2.97317 8.125 2.37517 8.333 2.18017 8.931C2.06317 9.334 2.12817 9.581 2.37517 9.971C2.44017 10.075 2.55717 10.27 2.60917 10.374C2.53117 10.439 2.36217 10.543 2.25817 10.595C1.90717 10.79 1.43917 11.063 1.33517 11.622C1.28317 12.025 1.62117 12.454 1.85517 12.792C1.98517 12.961 2.08917 13.208 2.15417 13.312C2.08917 13.377 1.71217 13.741 1.63417 13.793C1.32217 14.027 0.893169 14.352 0.893169 14.885C0.893169 15.249 1.28317 16.146 1.55617 16.484C1.66017 16.614 1.51717 16.835 1.42617 16.965C1.38717 17.069 1.08817 17.394 0.919169 17.576C0.711169 17.823 0.282168 18.421 0.334168 18.928C0.399168 19.448 0.893169 20.007 1.28317 20.319C1.54317 20.514 1.54317 20.644 1.62117 20.709C1.64717 20.787 1.71217 20.852 1.76417 20.904C1.81617 20.943 2.51817 21.619 4.97518 21.606C3.87018 19.981 3.35017 16.471 3.35017 14.612C3.35017 6.578 9.60319 2.613 16.2332 2.171C16.4022 1.742 16.6882 1.079 17.2732 0.403C16.8442 0.117 16.6492 0.091 16.5582 0.104ZM21.6412 0.988L21.3422 3.12C21.4332 3.211 21.5242 3.328 21.6152 3.432C21.7842 2.925 22.0312 2.379 22.4472 1.924C22.5772 1.794 22.6292 1.599 22.5772 1.417C22.5252 1.235 22.3692 1.105 22.1872 1.053C22.0182 1.014 21.8492 0.988 21.6802 0.988H21.6412ZM20.2502 7.8C20.6792 7.8 21.0302 8.151 21.0302 8.58C21.0302 9.009 20.6792 9.36 20.2502 9.36C19.8212 9.36 19.4702 9.009 19.4702 8.58C19.4702 8.151 19.8212 7.8 20.2502 7.8Z",
                    fill: "#FFBF39"
                })
            }), e.jsx("defs", {
                children: e.jsx("clipPath", {
                    id: "clip0_1630_193",
                    children: e.jsx("rect", {
                        width: "26",
                        height: "26",
                        fill: "white"
                    })
                })
            })]
        })),
        xa = s => e.jsxs("svg", Y(W({
            width: "21",
            height: "24",
            viewBox: "0 0 21 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
        }, s), {
            children: [e.jsx("path", {
                d: "M3.95401 5.57073C3.95401 5.38296 3.80179 5.23073 3.61401 5.23073H3.18426C2.99649 5.23073 2.84426 5.38296 2.84426 5.57073V8.00255C2.84426 8.19032 2.69204 8.34255 2.50427 8.34255H0.711826C0.52405 8.34255 0.371826 8.49477 0.371826 8.68255V20.0232C0.371826 20.211 0.524049 20.3632 0.711826 20.3632H2.50426C2.69204 20.3632 2.84426 20.5154 2.84426 20.7032V23.135C2.84426 23.3228 2.99649 23.475 3.18426 23.475H3.61401C3.80179 23.475 3.95401 23.3228 3.95401 23.135V20.7032C3.95401 20.5154 4.10623 20.3632 4.29401 20.3632H6.08645C6.27423 20.3632 6.42645 20.211 6.42645 20.0232V8.68254C6.42645 8.49477 6.27423 8.34255 6.08645 8.34255H4.29401C4.10623 8.34255 3.95401 8.19032 3.95401 8.00255V5.57073Z",
                fill: "#4CCD1F"
            }), e.jsx("path", {
                d: "M11.1267 3.41502C11.1267 3.22725 10.9745 3.07502 10.7867 3.07502H10.357C10.1692 3.07502 10.017 3.22725 10.017 3.41502V5.84684C10.017 6.03461 9.86473 6.18683 9.67695 6.18683H7.88451C7.69674 6.18683 7.54451 6.33906 7.54451 6.52683V17.8679C7.54451 18.0557 7.69674 18.2079 7.88451 18.2079H9.67695C9.86473 18.2079 10.017 18.3601 10.017 18.5479V20.9797C10.017 21.1675 10.1692 21.3197 10.357 21.3197H10.7867C10.9745 21.3197 11.1267 21.1675 11.1267 20.9797V18.5479C11.1267 18.3601 11.2789 18.2079 11.4667 18.2079H13.2591C13.4469 18.2079 13.5991 18.0557 13.5991 17.8679V6.52683C13.5991 6.33906 13.4469 6.18683 13.2591 6.18683H11.4667C11.2789 6.18683 11.1267 6.03461 11.1267 5.84684V3.41502Z",
                fill: "#4CCD1F"
            }), e.jsx("path", {
                d: "M18.2994 0.865024C18.2994 0.677248 18.1472 0.525024 17.9594 0.525024H17.5296C17.3419 0.525024 17.1896 0.677247 17.1896 0.865024V3.29684C17.1896 3.48461 17.0374 3.63684 16.8496 3.63684H15.0572C14.8694 3.63684 14.7172 3.78906 14.7172 3.97684V15.3179C14.7172 15.5057 14.8694 15.6579 15.0572 15.6579H16.8496C17.0374 15.6579 17.1896 15.8101 17.1896 15.9979V18.4297C17.1896 18.6175 17.3419 18.7697 17.5296 18.7697H17.9594C18.1472 18.7697 18.2994 18.6175 18.2994 18.4297V15.9979C18.2994 15.8101 18.4516 15.6579 18.6394 15.6579H20.4318C20.6196 15.6579 20.7718 15.5057 20.7718 15.3179V3.97684C20.7718 3.78906 20.6196 3.63684 20.4318 3.63684H18.6394C18.4516 3.63684 18.2994 3.48461 18.2994 3.29684V0.865024Z",
                fill: "#4CCD1F"
            })]
        })),
        pa = s => e.jsxs("svg", Y(W({
            xmlns: "http://www.w3.org/2000/svg",
            width: "25",
            height: "25",
            viewBox: "0 0 25 25",
            fill: "none"
        }, s), {
            children: [e.jsx("path", {
                d: "M23.0105 7.44431C23.0424 7.51037 23.0773 7.59163 23.1153 7.68655L23.2383 8.01612L23.3796 8.43225C23.5648 8.97217 23.4304 9.59941 23.0758 10.1469C21.8107 12.1008 19.9745 14.3599 17.9979 16.493C15.5595 19.1235 13.1394 21.1404 10.7944 22.5247C10.0882 22.9416 9.15874 22.934 8.44645 22.5445L8.27331 22.4389L7.4585 21.877L6.78418 21.4016C6.50625 21.2042 6.43714 20.8146 6.63078 20.5306C6.8024 20.2785 7.12286 20.195 7.38712 20.318L7.4828 20.3734L8.34014 20.9764L8.9484 21.394C9.29315 21.6256 9.82471 21.6515 10.1816 21.4403C14.0066 19.182 18.3593 14.8733 22.1296 9.46424C22.1843 9.38603 22.2223 9.20378 22.2253 9.06026L22.2208 8.9623L22.198 8.86206L22.0005 8.32822C21.917 7.98194 21.9527 7.74122 22.2109 7.46785C22.5268 7.13296 22.851 7.10942 23.0113 7.44279L23.0105 7.44431ZM6.74621 16.1407L6.94972 16.2705L7.13121 16.4011C7.40307 16.6069 7.45926 16.9995 7.25727 17.2767C7.05527 17.5539 6.67179 17.6116 6.40069 17.4058C5.42186 16.6631 4.43543 16.7694 3.27359 17.7604C3.12399 17.888 2.92655 17.9336 2.73899 17.888L2.62812 17.85L2.53168 17.7946L0.968125 16.6859C0.690194 16.4885 0.621091 16.0989 0.814732 15.8149C0.96281 15.597 1.22631 15.502 1.46855 15.5658L1.57563 15.6053L1.66675 15.6585L2.82783 16.531L2.88251 16.4892C4.2023 15.5316 5.5221 15.4094 6.74621 16.1407ZM14.3088 0.557535L15.6066 1.41867C15.5512 1.48169 15.4995 1.55004 15.4517 1.62218C14.6946 2.75744 14.7766 4.28227 16.183 5.30439C17.5893 6.32651 19.3169 6.12451 20.1689 5.09328C20.2851 4.9528 20.374 4.79637 20.4377 4.62854L21.8069 5.53828C22.2162 5.81241 22.3255 6.36599 22.0507 6.7753C22.0446 6.78441 22.0377 6.79352 22.0317 6.80263C19.8454 9.79305 17.6789 12.3719 15.5307 14.5376C13.4462 16.6403 11.4285 18.2912 9.4792 19.4918C9.0828 19.7371 8.57554 19.7097 8.20725 19.4234L6.93377 18.4249C7.04388 18.3527 7.14032 18.2738 7.22006 18.1887C7.93463 17.4308 8.08271 15.7359 6.6323 14.6067C5.1819 13.4775 3.5743 13.7 2.54535 14.4495C2.42537 14.5369 2.32665 14.6394 2.24843 14.7548L0.984072 13.7653C0.693232 13.5375 0.643113 13.1168 0.871685 12.826C0.91421 12.7713 0.965847 12.7242 1.02356 12.6855C3.51962 11.0073 5.74535 9.19087 7.70074 7.23548C9.65613 5.28009 11.4498 3.13182 13.0824 0.789903C13.3596 0.391232 13.9048 0.287957 14.3088 0.557535ZM8.32571 12.6589C7.93843 12.7774 7.72428 13.2004 7.8473 13.6028C7.97032 14.0053 8.38418 14.2362 8.77222 14.1177C9.1595 13.9992 9.37365 13.5763 9.25063 13.1738C9.12761 12.7713 8.71375 12.5405 8.32571 12.6589ZM12.8615 7.49974L12.7878 7.53847L11.4194 8.47706L9.83003 7.87791C9.7503 7.84753 9.66221 7.84678 9.58171 7.87563C9.42073 7.93334 9.32581 8.09281 9.34403 8.25608L9.36301 8.33733L9.91584 9.88949L8.92106 11.1637C8.87398 11.2237 8.8474 11.2966 8.84512 11.3733C8.83905 11.5442 8.95295 11.6915 9.1109 11.7348L9.19367 11.7469L10.9228 11.8092L11.9343 13.2232C11.9798 13.2877 12.0459 13.3348 12.1211 13.3583C12.2843 13.4092 12.4567 13.3378 12.5395 13.1966L12.5729 13.1206L13.049 11.5844L14.624 11.1819C14.7052 11.1614 14.7766 11.1128 14.826 11.0453C14.927 10.9071 14.9156 10.7218 14.8085 10.5972L14.747 10.541L13.3566 9.52575L13.355 7.83842C13.355 7.76552 13.333 7.6949 13.292 7.63491C13.1956 7.49367 13.0164 7.44279 12.8637 7.50202L12.8615 7.49974ZM14.7052 6.28398C14.3179 6.40244 14.1038 6.82542 14.2268 7.22788C14.3498 7.63035 14.7637 7.8612 15.1517 7.74274C15.539 7.62428 15.7532 7.20131 15.6301 6.79884C15.5071 6.39637 15.0933 6.16552 14.7052 6.28398Z",
                fill: "url(#paint0_linear_1797_690)"
            }), e.jsx("defs", {
                children: e.jsxs("linearGradient", {
                    id: "paint0_linear_1797_690",
                    x1: "12.0838",
                    y1: "0.407471",
                    x2: "12.0838",
                    y2: "22.837",
                    gradientUnits: "userSpaceOnUse",
                    children: [e.jsx("stop", {
                        stopColor: "#81B9FF"
                    }), e.jsx("stop", {
                        offset: "1",
                        stopColor: "#3770D8"
                    })]
                })
            })]
        })),
        me = {
            Casino: ga,
            Sports: ha,
            Racing: ua,
            Trading: xa,
            Lottery: pa
        };

    function fa() {
        const {
            lang: s
        } = se(), {
            t: a
        } = b(), n = c.useMemo(() => [{
            link: "/casino",
            cover: oa,
            icon: e.jsx(me.Casino, {
                className: "icon"
            }),
            title: a("Casino"),
            btnText: a("Go to Casino"),
            desc: a("Dive into our in-house games, live casino and slots"),
            className: "casino"
        }, {
            link: "/sports",
            cover: ca,
            icon: e.jsx(me.Sports, {
                className: "icon"
            }),
            title: a("Sports"),
            btnText: a("Go to Sports"),
            desc: a("Bet on Football, Cricket, NFL, eSports & over 80 sports"),
            className: "sports"
        }, {
            link: "/racing",
            cover: la,
            icon: e.jsx(me.Racing, {
                className: "icon"
            }),
            title: a("Racing"),
            btnText: a("Go to Racing"),
            desc: a("Experience the thrill of horse racing and enjoy the winnings"),
            className: "racing"
        }, s === "ja" ? {
            link: "/lottery",
            cover: da,
            icon: e.jsx(me.Lottery, {
                className: "icon"
            }),
            title: a("Lottery"),
            btnText: a("Go to Lottery"),
            desc: a("Try your luck and seize the opportunity to win big by playing the lottery"),
            className: "lottery"
        } : {
            link: "/trading/up-down",
            cover: ma,
            icon: e.jsx(_t, {
                className: "icon"
            }),
            title: a("UpDown"),
            btnText: a("Go to Up Down"),
            desc: a("Bet on the rise and fall of crypto prices to win profits from losers' bets"),
            className: "trading"
        }], [a, s]);
        return e.jsx("div", {
            className: ba,
            children: n.map(t => e.jsx(ja, W({}, t), t.link))
        })
    }

    function ja(s) {
        const a = $(),
            n = Q(),
            {
                link: t,
                cover: i,
                icon: l,
                title: o,
                desc: r,
                btnText: g,
                className: d
            } = s;
        return e.jsxs(ae, {
            href: t,
            className: u(ya, d),
            children: [n && e.jsx("div", {
                className: "blur"
            }), !a && e.jsx("div", {
                className: "mask"
            }), e.jsx("img", {
                src: i,
                className: "cover"
            }), e.jsxs("div", {
                className: "main-content",
                children: [e.jsxs("div", {
                    className: "header",
                    children: [l, e.jsx("div", {
                        className: "title",
                        children: o
                    })]
                }), !a && e.jsxs(e.Fragment, {
                    children: [e.jsx("div", {
                        className: "desc",
                        children: r
                    }), e.jsx(y, {
                        className: "go-btn",
                        children: g
                    })]
                })]
            })]
        })
    }
    const He = c.memo(fa),
        ba = "c1byjtir",
        ya = "c1yxxwlq",
        Pe = "/assets/1.0e9ab5f5.png",
        ze = "/assets/1_w.5494fae6.png",
        De = "/assets/2.36a59f80.png",
        Be = "/assets/2_w.fe787399.png",
        Te = "/assets/3.8da55069.png",
        Ae = "/assets/3_w.42acc2ee.png",
        $e = "/assets/1.95d2ce3e.png",
        Fe = "/assets/2.9ecc809a.png",
        Ve = "/assets/3.bff69b05.png",
        Re = "/assets/1.78f54cd9.png",
        Ge = "/assets/2.cb45e76e.png",
        va = "/assets/3.887bf071.png",
        Ca = "/assets/3_w.a6d94ad9.png",
        We = "/assets/1.13dedffb.png",
        Ze = "/assets/2.8071d681.png",
        Na = "/assets/3.c0c26bc4.png",
        wa = "/assets/3_w.89ba539a.png",
        Oe = "/assets/masterpay.9a38df7b.png",
        _a = "/assets/visapay.a1cbd85f.png",
        ka = "/assets/visapay_w.f3467bc3.png",
        ve = c.memo(function({
            src: s,
            src_w: a
        }) {
            const n = Q() ? s : a;
            return e.jsx("img", {
                src: n,
                alt: ""
            })
        }),
        La = function() {
            const s = T(),
                {
                    t: a
                } = b(),
                n = ht().enableLocaleCurrency,
                t = pe(),
                i = c.useMemo(() => n && t.currencyName === "INRFIAT" ? [{
                    b: $e,
                    w: $e
                }, {
                    b: Fe,
                    w: Fe
                }, {
                    b: Ve,
                    w: Ve
                }] : n && t.currencyName === "BRLFIAT" ? [{
                    b: We,
                    w: We
                }, {
                    b: Ze,
                    w: Ze
                }, {
                    b: Na,
                    w: wa
                }] : n && t.currencyName === "IDRFIAT" ? [{
                    b: Re,
                    w: Re
                }, {
                    b: Ge,
                    w: Ge
                }, {
                    b: va,
                    w: Ca
                }] : n && t.currencyName === "JPYFIAT" ? [{
                    b: Pe,
                    w: ze
                }, {
                    b: De,
                    w: Be
                }, {
                    b: Te,
                    w: Ae
                }] : [{
                    b: Pe,
                    w: ze
                }, {
                    b: De,
                    w: Be
                }, {
                    b: Te,
                    w: Ae
                }], [t]);
            return e.jsxs("div", {
                className: Ia,
                children: [e.jsxs("div", {
                    className: "payment-list",
                    children: [e.jsx("div", {
                        className: "top-list",
                        children: i.map((l, o) => e.jsx(ve, {
                            src: l.b,
                            src_w: l.w
                        }, o))
                    }), e.jsxs("div", {
                        className: "bot-list",
                        children: [e.jsx(ve, {
                            src: Oe,
                            src_w: Oe
                        }), e.jsx(ve, {
                            src: _a,
                            src_w: ka
                        })]
                    })]
                }), e.jsx("div", {
                    className: "payment-opt",
                    children: e.jsxs("div", {
                        className: "payment-cont",
                        children: [e.jsx("div", {
                            className: "payment-title",
                            children: a("Fast & Easy Way to get started")
                        }), e.jsx("div", {
                            className: "payment-desc",
                            dangerouslySetInnerHTML: {
                                __html: a("<span>300%</span> Deposit Bonus")
                            }
                        }), e.jsx("div", {
                            className: "btn-wrap",
                            children: e.jsx(y, {
                                type: "conic2",
                                onClick: () => s("/wallet/buy"),
                                children: a("Deposit")
                            })
                        })]
                    })
                })]
            })
        },
        Ia = "shjjohl",
        qe = "/assets/ball_1.8c16948f.png",
        Ke = "/assets/ball_1_w.a971d3f8.png",
        Ma = "/assets/ball_5.c6bfb29b.png",
        Ea = "/assets/ball_5_w.07c00d38.png",
        Sa = "/assets/ball_4.6eff1ed4.png",
        Ha = "/assets/ball_4_w.681d83a9.png",
        Ue = "/assets/bonus.73eef02f.png",
        Je = "/assets/rain.c10cc3c6.png",
        de = function({
            src: s,
            src_w: a,
            className: n
        }) {
            const t = Q() ? s : a;
            return e.jsx("img", {
                src: t,
                className: n,
                alt: "ball"
            })
        },
        Pa = A.memo(function() {
            const {
                t: s
            } = b(), a = T(), n = xe().bonusItems, t = n ? n[0] : null, i = new z((t == null ? void 0 : t.bonusRatio) || 0).mul(100).toFixed(0) + "%";
            return e.jsxs("div", {
                className: u(Ye, "register-bonus"),
                children: [e.jsx(de, {
                    className: "img-ball ball-grey",
                    src: qe,
                    src_w: Ke
                }), e.jsx(de, {
                    className: "img-ball ball-color",
                    src: Ma,
                    src_w: Ea
                }), e.jsxs("div", {
                    className: "bonus-img",
                    children: [e.jsx("p", {
                        className: "ratio",
                        children: `${new z((t==null?void 0:t.bonusRatio)||0).mul(100).toFixed(0)}%`
                    }), e.jsx("img", {
                        className: "img-ball",
                        onClick: () => a("#/login/regist"),
                        src: Ue
                    })]
                }), e.jsx("div", {
                    className: "left",
                    children: e.jsxs("div", {
                        className: "wrap",
                        children: [e.jsx("p", {
                            className: "tit",
                            children: e.jsxs(ee, {
                                amount: i,
                                i18nKey: "trans.mainpage.free.bonus",
                                children: [e.jsx("span", {
                                    children: "Register"
                                }), " now to instantly redeem a ", e.jsx("span", {
                                    children: {
                                        amount: i
                                    }
                                }), " deposit bonus!"]
                            })
                        }), e.jsx("p", {
                            className: "desc",
                            children: s("Deposit bonus up to ${{number}}", {
                                number: Z.numberWithCommas(!1, (t == null ? void 0 : t.maximumBcd) || 0)
                            })
                        }), e.jsxs("div", {
                            className: "img-box",
                            children: [e.jsx("p", {
                                className: "ratio",
                                children: `${new z((t==null?void 0:t.bonusRatio)||0).mul(100).toFixed(0)}%`
                            }), e.jsx("img", {
                                alt: "bonus",
                                onClick: () => a("#/login/regist"),
                                className: "m-bonus-img",
                                src: Ue
                            })]
                        }), e.jsx(y, {
                            type: "conic4",
                            onClick: () => a("#/login/regist"),
                            children: s("Sign up")
                        })]
                    })
                })]
            })
        }),
        Xe = c.memo(function() {
            const {
                t: s
            } = b(), a = T(), n = O(), t = () => {
                n.login ? a("#/vip") : a("#/login/regist")
            }, i = U.buildHost;
            return e.jsxs("div", {
                className: u(Ye, "rain-coindrop"),
                children: [e.jsx(de, {
                    className: "img-ball ball-grey",
                    src_w: Ke,
                    src: qe
                }), e.jsx(de, {
                    className: "img-ball ball-color",
                    src_w: Ha,
                    src: Sa
                }), e.jsx("img", {
                    alt: "bonus",
                    className: "img-ball bonus-img",
                    onClick: t,
                    src: Je
                }), e.jsx("div", {
                    className: "left",
                    children: e.jsxs("div", {
                        className: "wrap",
                        children: [e.jsx("p", {
                            className: "tit",
                            children: e.jsxs(ee, {
                                host: i,
                                i18nKey: "trans.mainpage.free.bonus.unlock",
                                children: ["Unlock exclusive ", e.jsx("span", {
                                    children: "VIP"
                                }), " rewards at ", {
                                    host: i
                                }, "!"]
                            })
                        }), e.jsx("p", {
                            className: "desc",
                            children: s("Only in the VIP club")
                        }), e.jsx("img", {
                            alt: "bonus",
                            onClick: t,
                            className: "m-bonus-img",
                            src: Je
                        }), e.jsx(y, {
                            type: "conic",
                            onClick: t,
                            children: n.login ? s("Learn More") : s("Sign up")
                        })]
                    })
                })]
            })
        }),
        za = c.memo(function() {
            var g;
            const s = $(),
                a = !((g = xe().bonusItems) != null && g.length),
                n = O().login || a ? [Xe] : [Pa, Xe],
                t = c.useMemo(() => ({
                    "--grid-num": s && n.length > 1 ? 1.2 : 1
                }), [n.length]),
                {
                    scrollNode: i,
                    prevEnable: l,
                    nextEnable: o,
                    slide: r
                } = ps({
                    className: "slide-list",
                    data: n,
                    style: t,
                    renderItem(d, m) {
                        return e.jsx(d, {}, m)
                    }
                });
            return e.jsxs("div", {
                className: Da,
                children: [!s && n.length > 1 && e.jsxs(e.Fragment, {
                    children: [e.jsx("div", {
                        className: "slide-btn slide-prev",
                        children: e.jsx(y, {
                            onClick: () => r(-1),
                            disabled: !l,
                            children: e.jsx(F, {
                                name: "Arrow"
                            })
                        })
                    }), e.jsx("div", {
                        className: "slide-btn slide-next",
                        children: e.jsx(y, {
                            onClick: () => r(1),
                            disabled: !o,
                            children: e.jsx(F, {
                                name: "Arrow"
                            })
                        })
                    })]
                }), i]
            })
        }),
        Da = "ffkkwpq",
        Ye = "c1dy5tr1",
        Ce = "/assets/bronze_mini.6f7b7038.png",
        Ba = "/assets/silver_mini.15b4ec85.png",
        Ta = "/assets/gold_mini.43baef12.png",
        Qe = "/assets/platinum_mini.a2837eaf.png",
        Ne = "/assets/diamond_mini.6bf304c0.png";

    function Aa(s, a, n) {
        try {
            if (s) {
                if (s.betLog) {
                    const t = s.betLog.winAmount,
                        i = s.betLog.currencyName;
                    return n.amount2local(new z(t), i).toNumber()
                } else if (s.gv) {
                    const t = s.gv[0].bets[0].winAmount,
                        i = s.gv[0].bets[0].currencyName;
                    return n.amount2local(new z(t), i).toNumber()
                }
            }
            return n.amount2local(new z(a)).toNumber()
        } catch (t) {
            return n.amount2local(new z(a)).toNumber()
        }
    }

    function $a(s, a, n) {
        return s >= 1e6 ? le.getIntl(a, n)[0].format(s / 1e6) + "M" : s >= 1e3 ? le.getIntl(a, n)[0].format(s / 1e3) + "K" : le.getIntl(a, n)[0].format(s)
    }

    function Fa(s) {
        switch (s) {
            case 0:
                return Ce;
            case 1:
                return Ce;
            case 2:
                return Ba;
            case 3:
                return Ta;
            case 4:
                return Qe;
            case 5:
                return Qe;
            case 6:
                return Ne;
            case 7:
                return Ne;
            case 8:
                return Ne;
            default:
                return Ce
        }
    }
    const Va = Z.timeMemoize(function(s) {
            return V.get(`/game/support/home/v3/recent-big-wins/?gameTypeId=${s}`)
        }, {
            getKey: String,
            timeout: 1e8
        }),
        es = A.memo(function() {
            const {
                t: s
            } = b(), [a, n] = c.useState(0);
            return e.jsxs("div", {
                className: u(Za, "renent-big-win"),
                children: [e.jsxs("p", {
                    className: "bigwin-title",
                    children: [e.jsx("b", {}), s("Recent Big Wins")]
                }), e.jsxs("div", {
                    className: "bigwin-cont",
                    children: [e.jsxs("div", {
                        className: "tabs",
                        children: [e.jsx(y, {
                            className: u("tab", a === 0 && "active"),
                            onClick: () => n(0),
                            children: s("All")
                        }), e.jsx(y, {
                            className: u("tab", a === 1 && "active"),
                            onClick: () => n(1),
                            children: s("Original")
                        }), e.jsx(y, {
                            className: u("tab", a === 2 && "active"),
                            onClick: () => n(2),
                            children: s("Slots")
                        }), e.jsx(y, {
                            className: u("tab", a === 3 && "active"),
                            onClick: () => n(3),
                            children: s("Live Casino")
                        })]
                    }), e.jsx(us, {
                        children: e.jsx(Ra, {
                            type: a
                        })
                    })]
                })]
            })
        });

    function Ra({
        type: s
    }) {
        const {
            data: a,
            error: n
        } = Le(() => Va(s), [s]);
        return n ? e.jsx(fe, {
            children: n.message
        }) : a ? a && a.length === 0 ? e.jsx(fe, {}) : e.jsx(Ga, {
            list: a
        }) : e.jsx("div", {
            style: {
                height: "130px"
            },
            children: e.jsx(J, {})
        })
    }
    const ge = 96,
        Ga = c.memo(function({
            list: s
        }) {
            const [a, n] = c.useState(s.length >= Math.ceil(1350 / ge)), t = c.useRef(!1), i = ke(o => {
                n(s.length >= Math.ceil(o.width / ge))
            }, 500);
            c.useEffect(() => {
                i.current && n(s.length >= Math.ceil(i.current.clientWidth / ge))
            }, [s.length]), c.useEffect(() => {
                let o;
                if (i.current) {
                    const r = i.current;
                    o = setInterval(() => {
                        if (t.current) return;
                        const g = r.scrollWidth,
                            d = r.clientWidth,
                            m = r.scrollLeft;
                        d + m < g ? r.scrollLeft = m + ge : r.scrollLeft = 0
                    }, 1e3)
                }
                return () => clearInterval(o)
            }, []);
            const l = fs(function(o) {
                const r = i.current;
                if (r && a) {
                    const g = r.scrollWidth,
                        d = r.querySelector(".mark"),
                        m = r.scrollLeft;
                    d && (m >= g / 2 ? (r.classList.remove("scroll-ani"), r.scrollLeft = m - g / 2) : r.classList.add("scroll-ani"))
                }
            }, 50);
            return e.jsxs("div", {
                className: "bigwin-list scroll-ani",
                ref: i,
                onMouseEnter: () => t.current = !0,
                onMouseLeave: () => t.current = !1,
                onScroll: l,
                children: [s.map((o, r) => c.createElement(ss, Y(W({}, o), {
                    key: o.createTime
                }))), a && s.map((o, r) => c.createElement(ss, Y(W({
                    className: r === 0 ? "mark" : ""
                }, o), {
                    key: o.createTime + r
                })))]
            })
        }),
        ss = c.memo(function({
            gameIcon: s,
            userId: a,
            nickName: n,
            winAmount: t,
            gameUnique: i,
            gameData: l,
            distributeId: o,
            userVipLevel: r,
            className: g,
            gameType: d
        }) {
            const {
                t: m
            } = b(), x = T(), p = pe(!0), f = ut.language, v = oe.getLevelInfo(r), C = () => {
                ne.emit("openGameDetail", {
                    gameUnique: i,
                    userName: n,
                    userId: a,
                    distributeId: o,
                    bigWin: !0
                })
            }, j = n === "****", N = Aa(l, t, p);
            return e.jsxs("div", {
                className: u("bigwin-swiper-item", g),
                children: [e.jsx("div", {
                    className: "game-icon",
                    onClick: C,
                    children: e.jsx(xt, {
                        alt: "game-icon",
                        src: s,
                        args: "w=200"
                    })
                }), e.jsxs("div", {
                    className: u("nick-name", j && "hidden"),
                    onClick: () => {
                        j || x(`#/user/profile/${a}`)
                    },
                    children: [e.jsx("img", {
                        src: Fa(v.type)
                    }), e.jsx("div", {
                        className: "name",
                        title: j ? m("Hidden") : n,
                        children: j ? m("Hidden") : n
                    })]
                }), e.jsx(Wa, {
                    targetNumber: $a(N, p.currencyName, f),
                    realAmount: p.amount2localStr(new z(N))
                })]
            })
        }),
        Wa = ({
            targetNumber: s,
            realAmount: a
        }) => {
            const n = c.useRef(null);
            return c.useEffect(() => {
                n.current && (n.current.classList.remove("amount-ani"), setTimeout(() => n.current && n.current.classList.add("amount-ani"), 10))
            }, [s]), e.jsx("div", {
                className: "amount-wrap",
                ref: n,
                title: a,
                children: s
            })
        },
        Za = "r1t0e11a",
        Oa = c.memo(function() {
            const s = O().login,
                {
                    t: a
                } = b(),
                n = je();
            return s ? e.jsxs("div", {
                className: qa,
                children: [e.jsxs("div", {
                    className: "title",
                    children: [e.jsx(F, {
                        name: "HotGame"
                    }), a("Picks For You")]
                }), e.jsx(kt, {
                    source: n.picks_for_you,
                    className: "game-list",
                    more: !1
                }), e.jsx(ae, {
                    href: "/gamelist/picks-for-you",
                    className: "btn-view",
                    children: a("View all")
                })]
            }) : null
        }),
        qa = "s15yntg2";

    function as(s, a = "") {
        return {
            sectionId: a,
            pageList: s,
            expId: "",
            logId: "",
            maxNum: 0,
            strategyId: ""
        }
    }
    const ns = Z.timeMemoize(async function() {
            return V.post("/home/game/recent/", {
                areaCode: js.state.areaCode,
                pageSize: 10,
                page: 1
            })
        }, {
            timeout: 1e4
        }),
        Ka = Z.timeMemoize(async function() {
            return V.post("/home/game/my-favorite/", {
                areaCode: js.state.areaCode,
                pageSize: 10,
                page: 1
            })
        }, {
            timeout: 1e4
        }),
        Ua = A.memo(function() {
            const s = new bs({
                data: Ka()
            }).suspensed.data;
            return e.jsx(c.Suspense, {
                fallback: e.jsx(J, {}),
                children: e.jsx(te, {
                    source: s,
                    formateData: as,
                    line: 1,
                    icon: "Slots",
                    className: "casino-list",
                    loop: 0,
                    title: ""
                })
            })
        }),
        Ja = A.memo(function() {
            const s = new bs({
                data: ns()
            }).suspensed.data;
            return e.jsx(c.Suspense, {
                fallback: e.jsx(J, {}),
                children: e.jsx(te, {
                    source: s,
                    formateData: as,
                    line: 1,
                    icon: "Slots",
                    className: "casino-list",
                    loop: 0,
                    title: ""
                })
            })
        });

    function Xa({
        subtab: s,
        onTab: a
    }) {
        const {
            t: n
        } = b();
        return e.jsxs(e.Fragment, {
            children: [e.jsxs("div", {
                className: "login-tabs",
                children: [e.jsxs("div", {
                    onClick: () => a(0),
                    className: u("tab", !s && "active"),
                    children: [e.jsx(F, {
                        name: "Recent"
                    }), " ", n("Recent")]
                }), e.jsxs("div", {
                    onClick: () => a(1),
                    className: u("tab", s && "active"),
                    children: [e.jsx(F, {
                        name: "Favorites"
                    }), " ", n("Favorite")]
                })]
            }), s ? e.jsx(Ua, {}) : e.jsx(Ja, {})]
        })
    }

    function Ya({
        tab: s
    }) {
        var o;
        const {
            t: a
        } = b(), n = je(), t = c.useRef(null), i = c.useMemo(() => [{
            label: a("{{site}} Originals", {
                site: U.siteName
            }),
            icon: "Lobby",
            tab: "",
            data: n.origin
        }, {
            label: a("Top Picks"),
            icon: "ClassicDice",
            tab: "picks",
            data: n.top_picks
        }, {
            label: a("Slots"),
            icon: "Slots",
            tab: "slots",
            data: n.slots
        }, {
            label: a("Hot Games"),
            icon: "HotGame",
            tab: "hot",
            data: n.hot_games
        }, {
            label: a("Live Casino"),
            icon: "LiveCasino",
            tab: "live",
            data: n.live
        }, {
            label: a("Table Games"),
            icon: "TableGame",
            tab: "table-game",
            data: n.table_games
        }, {
            label: a("New Releases"),
            icon: "NewReleases",
            tab: "new",
            data: n.new_releases
        }], []), l = (o = i.find(r => r.tab === s)) != null ? o : i[0];
        return c.useEffect(() => {
            const r = t.current;
            if (r) {
                const g = t.current.querySelector(".active"),
                    d = g ? g.previousElementSibling : null,
                    m = d ? d.offsetLeft : 0,
                    x = {
                        x: r.scrollLeft
                    };
                _e.to(x, {
                    x: m,
                    onUpdate: () => {
                        r.scrollLeft = x.x
                    }
                })
            }
        }, [l]), e.jsxs(e.Fragment, {
            children: [e.jsx("div", {
                className: "tabs-wrap",
                ref: t,
                children: i.map((r, g) => e.jsxs(ae, {
                    href: r.tab ? `/?tab=${r.tab}` : "/",
                    className: u("nav-item", s === r.tab && "active"),
                    children: [e.jsx(F, {
                        name: r.icon
                    }), r.label]
                }, g))
            }), e.jsx(te, {
                className: "game-list casino-list",
                line: 1,
                source: l.data,
                loop: 0,
                title: l.label
            })]
        })
    }

    function Qa(s, a, n) {
        try {
            if (s) {
                if (s.betLog) {
                    const t = s.betLog.winAmount,
                        i = s.betLog.currencyName;
                    return n.amount2local(new z(t), i).toNumber()
                } else if (s.gv) {
                    const t = s.gv[0].bets[0].winAmount,
                        i = s.gv[0].bets[0].currencyName;
                    return n.amount2local(new z(t), i).toNumber()
                }
            }
            return n.amount2local(new z(a)).toNumber()
        } catch (t) {
            return n.amount2local(new z(a)).toNumber()
        }
    }

    function e1({
        item: s
    }) {
        const a = () => {
                ne.emit("openGameDetail", {
                    gameUnique: s.gameUnique,
                    userName: s.nickName,
                    userId: s.userId,
                    distributeId: s.distributeId,
                    bigWin: !0
                })
            },
            n = s.nickName === "****",
            {
                t
            } = b(),
            i = pe(!0),
            l = Qa(s.gameData, s.winAmount, i);
        return e.jsxs("div", {
            className: "win-item",
            onClick: a,
            children: [e.jsx("img", {
                className: "game-icon",
                src: s.gameIcon,
                alt: ""
            }), e.jsx("div", {
                className: "user-name",
                children: n ? e.jsxs(e.Fragment, {
                    children: [e.jsx(F, {
                        name: "Hidden"
                    }), t("Hidden")]
                }) : s.nickName
            }), e.jsxs("div", {
                className: "play-btn ttu",
                children: [e.jsx(oe.CoinFormat, {
                    sign: !0,
                    name: i.currencyName,
                    amount: l,
                    icon: !0
                }), e.jsx(F, {
                    name: "Arrow"
                })]
            })]
        })
    }
    const s1 = A.memo(function() {
        const {
            data: s
        } = Le(() => V.get("/game/support/home/v3/recent-big-wins/?gameTypeId=0")), {
            t: a
        } = b();
        return e.jsxs("div", {
            className: n1,
            children: [e.jsxs("div", {
                className: "bigwin-title",
                children: [e.jsx("b", {}), a("Recent Big Wins")]
            }), s && (s.length > 0 ? e.jsx(a1, {
                list: s
            }) : e.jsx(fe, {})), !s && e.jsx(J, {})]
        })
    });

    function a1({
        list: s
    }) {
        const [a, n] = c.useState(0), t = c.useMemo(() => s.length > 2 ? [...s, ...s] : s, [s]);
        return c.useEffect(() => {
            let i = 0;
            return a === s.length && (i = setTimeout(() => {
                n(0)
            }, 500)), () => clearTimeout(i)
        }, [a]), c.useEffect(() => {
            let i = 0;
            return t.length > 3 && (i = setInterval(() => {
                n(l => l === s.length ? 0 : l + 1)
            }, 2e3)), () => {
                clearInterval(i)
            }
        }, []), e.jsx("div", {
            className: u("win-container", `h-${s.length}`),
            children: e.jsx(pt, {
                initial: !1,
                custom: a,
                children: e.jsx(ft.div, {
                    initial: {
                        y: 0
                    },
                    animate: {
                        y: `-${100/t.length*a}%`
                    },
                    transition: {
                        type: "tween",
                        duration: a ? .5 : 0
                    },
                    className: "win-list",
                    children: t.map((i, l) => e.jsx(e1, {
                        item: i
                    }, l))
                })
            })
        })
    }
    const n1 = "s39lmhl",
        t1 = () => e.jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "27",
            height: "26",
            viewBox: "0 0 27 26",
            fill: "none",
            children: e.jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M13.9632 0C14.5239 0 14.978 0.441131 14.978 0.986262C14.978 1.43259 14.673 1.80872 14.2553 1.93092C15.1002 3.77432 16.265 5.45218 17.7461 6.96363C17.9043 7.12506 18.0693 7.29187 18.2393 7.46377L18.2396 7.46405C20.9807 10.2353 25.0306 14.3297 22.9555 18.524C21.7093 21.0434 19.1631 21.9846 16.2208 21.0608C15.6246 20.8736 14.7986 20.377 13.7422 19.5692H12.7274C11.6709 20.3761 10.8441 20.8736 10.2479 21.0608C7.30563 21.9838 4.75942 21.0434 3.51319 18.524C1.43773 14.3282 5.4887 10.2337 8.23045 7.46254L8.23049 7.46251C8.40012 7.29105 8.56474 7.12467 8.72259 6.96363C10.2011 5.45564 11.3633 3.78125 12.21 1.94132C11.7689 1.83299 11.4447 1.44646 11.4447 0.986262C11.4447 0.441998 11.8988 0 12.4596 0C12.5523 0 12.6416 0.0121333 12.7274 0.0346665L12.7265 5.42531L12.7274 5.42444V11.5483C12.1354 11.7511 11.7117 12.2997 11.7117 12.9436C11.7117 13.7609 12.3928 14.423 13.2343 14.423C14.0759 14.423 14.7562 13.7609 14.7562 12.9436C14.7562 12.2997 14.3324 11.7511 13.7405 11.5483L13.7396 5.42444L13.7413 5.42531L13.7396 0.0242666C13.8115 0.00866663 13.8861 0 13.9623 0H13.9632ZM13.1876 26.0003H7.75115C7.63155 26.0003 7.53449 25.9032 7.53449 25.7836C7.53449 25.7143 7.56742 25.6493 7.62375 25.6086C8.467 24.9933 9.31545 24.202 10.1691 23.2357C11.216 22.0501 12.0688 20.8281 12.7274 19.5705H13.1417H13.2344H13.6487C14.3073 20.8281 15.1601 22.0501 16.207 23.2357C17.0598 24.202 17.9082 24.9933 18.7515 25.6086C18.8078 25.6493 18.8407 25.7143 18.8407 25.7836C18.8407 25.9032 18.7445 26.0003 18.6241 26.0003H13.1885L13.1881 25.9407L13.1876 26.0003Z",
                fill: "#65C316"
            })
        }),
        i1 = c.memo(function({
            tab: s
        }) {
            const a = O().login,
                [n, t] = ue({
                    loading: !0,
                    show: !1,
                    subtab: 0
                });
            c.useEffect(() => {
                a ? ns().then(l => {
                    l && l.list.length > 0 ? t({
                        loading: !1,
                        show: !0
                    }) : t({
                        loading: !1
                    })
                }) : t({
                    loading: !1
                })
            }, [a]);
            const {
                t: i
            } = b();
            return n.loading ? e.jsx(J, {}) : e.jsxs(e.Fragment, {
                children: [!n.show && e.jsx(s1, {}), e.jsxs("div", {
                    className: r1,
                    children: [e.jsxs("div", {
                        className: "casino-head",
                        children: [e.jsxs("div", {
                            className: "title",
                            children: [e.jsx(t1, {}), i("Casino")]
                        }), e.jsx(ae, {
                            href: n.show ? n.subtab ? "/favorite" : "/recent" : "/casino",
                            children: i("View all")
                        })]
                    }), n.show ? e.jsx(Xa, {
                        subtab: n.subtab,
                        onTab: l => t({
                            subtab: l
                        })
                    }) : e.jsx(Ya, {
                        tab: s
                    })]
                })]
            })
        }),
        r1 = "svhk5i1",
        o1 = ["1", "10", "11", "16", "18", "186", "187", "188", "189", "219", "223", "225", "237", "238", "251", "254", "258", "314", "327", "328", "340", "342", "361", "406", "493", "494", "694", "697"],
        ts = s => s === 18 || s === 68 || s === 225,
        c1 = (s, a) => (a.length > 0 && Object.keys(a[0].markets).map(n => {
            if (ts(Number(n))) return s.push(Number(n))
        }), s.length === 2 ? s.concat([18]) : s.slice(0, 3)),
        we = (s, a, n) => {
            if (!o1.includes(String(s)) || !a[s]) return null;
            const t = [],
                i = a[s];
            let l = {},
                o = "",
                r = [];
            n && Object.keys(n).map((d, m) => {
                m === 0 && (l = n[d], o = d), ts(s) && Object.keys(n[d]).map(x => {
                    let p = "";
                    const f = i.variants[""];
                    for (let v = 0; v < f.length; v++) {
                        const C = f[v].outcomes;
                        for (let j = 0; j < C.length; j++) C[j].id === x && (p = C[j].name.replace("{total}", d.split("=")[1]))
                    }
                    r.push({
                        name: p,
                        value: n[d][x].k
                    })
                })
            });
            const g = i.variants[""];
            if (g && !o.includes("total"))
                for (let d = 0; d < g.length; d++) {
                    const m = g[d].outcomes;
                    let x = [];
                    for (let p = 0; p < m.length; p++) {
                        let f = m[p].name.replace(/{\$competitor1}/g, "1").replace(/{\$competitor2}/g, "2");
                        if (i.specifiers) {
                            const v = o.split("=")[1] || "";
                            f = f.replace("{", "").replace("}", "").replace("+", "").replace("-", "").replace(i.specifiers[0], v)
                        }
                        x.push({
                            name: f,
                            value: n ? l[m[p].id].k : "-"
                        })
                    }
                    t.push(x)
                }
            return t.push(r.slice(0, 6)), {
                marketName: i.name,
                marketList: t
            }
        },
        l1 = async (s, a) => Promise.all([V.get(`/platform-sports/v14/live10/${s}/${a}/`, {
            cache: !0
        }), V.get(`/platform-sports/v14/description/${s}/${a}/`, {
            cache: !0
        })]),
        m1 = A.memo(function() {
            const {
                t: s
            } = b(), a = Me(), n = T(), {
                lang: t
            } = se(), [i, l] = ue({
                banners: [],
                img_path: "",
                markets: {},
                status: {}
            });
            return c.useEffect(() => {
                try {
                    l1(a, t).then(o => {
                        o && o.length === 2 && l({
                            banners: o[0].items,
                            img_path: o[0].imgDomain,
                            markets: o[1].markets,
                            status: o[1].statuses
                        })
                    }).catch(console.log)
                } catch (o) {}
            }, [t]), e.jsxs("div", {
                className: g1,
                children: [e.jsxs("div", {
                    className: "sports-head",
                    children: [e.jsxs("div", {
                        className: "title",
                        children: [e.jsx(d1, {}), s("Live Sports")]
                    }), e.jsx(ae, {
                        href: "/sports?bt-path=%2Flive",
                        children: s("View all")
                    })]
                }), e.jsx("div", {
                    className: "banner-scroll-wrap",
                    children: e.jsx("div", {
                        className: "live-list-wrap",
                        children: i.banners && i.banners.map((o, r) => {
                            var f, v, C, j, N, _, E, S, k;
                            const g = (f = o.matchInfo) == null ? void 0 : f.desc.competitors[0],
                                d = (v = o.matchInfo) == null ? void 0 : v.desc.competitors[1],
                                m = (C = o.matchInfo) == null ? void 0 : C.score,
                                x = ((j = o.matchInfo) == null ? void 0 : j.state.match_status) || 0;
                            let p = null;
                            if ((N = o.matchInfo) != null && N.markets) {
                                let w = 1;
                                Object.keys((_ = o.matchInfo) == null ? void 0 : _.markets).map((H, h) => {
                                    h === 0 && (w = Number(H))
                                }), p = we(w, i.markets, (E = o.matchInfo) == null ? void 0 : E.markets[w])
                            }
                            return p ? e.jsxs("div", {
                                className: "live-banner-item",
                                onClick: () => {
                                    var w, H, h, L, I;
                                    n(`/sports?bt-path=%2F${(w=o.sportInfo)==null?void 0:w.slug}%2F${(H=o.categoryInfo)==null?void 0:H.slug}%2F${(h=o.tournamentInfo)==null?void 0:h.slug}/${(L=o.matchInfo)==null?void 0:L.desc.slug}-${(I=o.matchInfo)==null?void 0:I.id}`)
                                },
                                children: [e.jsxs("div", {
                                    className: "b-top",
                                    children: [e.jsxs("div", {
                                        className: "b-top-icon",
                                        children: [e.jsx(Ie, {
                                            id: ((S = o.matchInfo) == null ? void 0 : S.desc.sport) || "1"
                                        }), e.jsx("p", {
                                            className: "name",
                                            children: (k = o.tournamentInfo) == null ? void 0 : k.name
                                        })]
                                    }), e.jsxs("div", {
                                        className: "t-right",
                                        children: [x !== 0 && e.jsx("p", {
                                            className: "status",
                                            children: i.status[x] || ""
                                        }), e.jsx("div", {
                                            className: "live ttu",
                                            children: s("Live")
                                        })]
                                    })]
                                }), e.jsxs("div", {
                                    className: "b-match",
                                    children: [e.jsxs("div", {
                                        className: "c-left match-item",
                                        children: [e.jsx("div", {
                                            className: "c-img",
                                            children: e.jsx(ce, {
                                                id: (g == null ? void 0 : g.id) || "",
                                                img_path: i.img_path,
                                                country_code: "",
                                                sports_id: o.parent_sport_id || ""
                                            })
                                        }), e.jsx("p", {
                                            className: "c-name",
                                            children: (g == null ? void 0 : g.name) || ""
                                        })]
                                    }), e.jsx("div", {
                                        className: "c-center",
                                        children: m && e.jsx("p", {
                                            children: `${m.home_score} : ${m.away_score}`
                                        })
                                    }), e.jsxs("div", {
                                        className: "c-right match-item",
                                        children: [e.jsx("div", {
                                            className: "c-img",
                                            children: e.jsx(ce, {
                                                id: (d == null ? void 0 : d.id) || "",
                                                img_path: i.img_path,
                                                country_code: "",
                                                sports_id: o.parent_sport_id || ""
                                            })
                                        }), e.jsx("p", {
                                            className: "c-name",
                                            children: (d == null ? void 0 : d.name) || ""
                                        })]
                                    })]
                                }), p && e.jsx("div", {
                                    className: "b-markets",
                                    children: p.marketList[0].map((w, H) => e.jsxs("div", {
                                        className: "market-item",
                                        children: [e.jsx("span", {
                                            children: w.name
                                        }), e.jsx("span", {
                                            children: w.value
                                        })]
                                    }, "market-" + H))
                                })]
                            }, "banner-item-" + r) : null
                        })
                    })
                })]
            })
        }),
        d1 = A.memo(function() {
            return e.jsx("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "22",
                height: "23",
                viewBox: "0 0 22 23",
                fill: "none",
                children: e.jsx("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M0.479555 7.05901C0.479555 7.00794 1.23698 7.00794 1.23698 7.05901C1.23698 7.11008 1.12776 8.05606 2.70468 10.1492C4.28238 12.243 5.2763 12.2635 6.42815 13.7838C7.58 15.3041 7.58 16.7498 7.56822 16.9313C7.55564 17.1112 7.03236 17.0869 6.73065 16.9313C6.42894 16.7757 5.72102 16.181 5.11523 15.8368C3.91939 15.1572 2.63475 14.9898 1.32891 14.1617C-1.03686 12.6618 0.479555 7.11087 0.479555 7.05901ZM21.5221 7.05885C21.5221 7.10992 23.0385 12.6609 20.6727 14.1616C19.3684 14.9897 18.083 15.157 16.8864 15.8367C16.2806 16.1816 15.5727 16.7756 15.271 16.9311C14.9693 17.0867 14.4452 17.1111 14.4334 16.9311C14.4208 16.7497 14.4208 15.304 15.5735 13.7836C16.7261 12.2633 17.72 12.2429 19.2969 10.149C20.8746 8.05512 20.7646 7.10992 20.7646 7.05885C20.7646 7.00778 21.5221 7.00778 21.5221 7.05885ZM10.1489 0.88339C10.1528 0.908532 10.1544 0.933675 10.1544 0.958817C10.1764 5.67458 10.189 9.37993 10.1913 12.0764V14.1405C10.1882 16.3357 10.1748 17.4483 10.1513 17.4781C10.0703 17.5803 9.11885 17.5418 9.05206 17.4781C8.98528 17.4145 8.7802 14.6213 7.44764 13.0036C6.11508 11.3858 2.24547 8.80165 2.74911 5.00438C3.06025 2.65514 5.20837 1.15131 9.19192 0.494469L9.54863 0.438685C9.83698 0.395471 10.1057 0.595039 10.1481 0.88339H10.1489ZM12.3571 0.432389L12.4522 0.437889L12.8089 0.493674C16.7932 1.1513 18.9413 2.65434 19.2517 5.00358C19.7545 8.80086 15.8857 11.385 14.5539 13.0028C13.2206 14.6205 13.0155 17.4137 12.9487 17.4773C12.8827 17.541 11.9305 17.5795 11.8495 17.4773C11.826 17.4475 11.8126 16.3349 11.8095 14.1397V12.0756C11.8118 9.37913 11.8244 5.673 11.8464 0.958021C11.8464 0.932879 11.8488 0.907736 11.8519 0.882594C11.8951 0.594243 12.163 0.394676 12.4514 0.437889L12.3571 0.432389ZM1.03663 16.8742C0.753771 16.0068 1.2912 15.9274 3.0449 17.0415C4.7986 18.1557 6.81944 17.8131 7.20601 18.2814C7.59258 18.7481 6.81944 20.2134 4.98088 20.343C3.14232 20.4727 1.32027 17.7424 1.03741 16.875L1.03663 16.8742ZM20.9655 16.8741C20.6826 17.7415 18.8598 20.4726 17.022 20.3421C15.1843 20.2117 14.4103 18.7472 14.7969 18.2805C15.1835 17.813 17.2043 18.1555 18.958 17.0406C20.7117 15.9257 21.2491 16.0059 20.9663 16.8733L20.9655 16.8741ZM9.8883 18.7436C10.0344 18.7436 10.1523 18.8615 10.1523 19.0076V22.1685C10.1523 22.3146 10.0344 22.4325 9.8883 22.4325H9.88437C7.90517 22.4026 6.91596 22.0938 6.91596 21.5046C6.91596 21.36 7.09982 21.1809 7.3866 20.898L7.59167 20.6937C7.73703 20.546 7.89967 20.3755 8.07174 20.1759C8.24381 19.9764 8.49366 19.6205 8.82288 19.1066C8.96823 18.8795 9.21966 18.7436 9.48916 18.7436H9.8883ZM12.5127 18.7436C12.7822 18.7436 13.0337 18.8811 13.1798 19.1066C13.509 19.6205 13.7589 19.9772 13.9302 20.1759C14.1014 20.3747 14.2641 20.546 14.4102 20.6937L14.6153 20.898C14.9013 21.1801 15.0859 21.36 15.0859 21.5046C15.0859 22.093 14.0975 22.4026 12.1175 22.4325C11.9683 22.4325 11.8496 22.3146 11.8496 22.1685V19.0076C11.8496 18.8615 11.9683 18.7436 12.1136 18.7436H12.5127Z",
                    fill: "#EA6518"
                })
            })
        }),
        g1 = "s1710wl3";

    function h1() {
        const {
            t: s
        } = b(), a = je(), {
            urlParsed: n
        } = se(), t = n.search.tab || "";
        return e.jsxs("div", {
            className: u(u1),
            children: [e.jsx(ye, {}), e.jsx(i1, {
                tab: t
            }), e.jsx(m1, {}), e.jsx(te, {
                source: a.slots,
                line: 1,
                icon: "Slots",
                className: "game-list",
                loop: 0,
                title: s("Popular in Slots")
            }), e.jsx(te, {
                source: a.hot_games,
                line: 1,
                icon: "HotGame",
                className: "game-list",
                loop: 0,
                title: s("Popular Games")
            }), e.jsx(Oa, {})]
        })
    }
    const u1 = "mhwiecl",
        x1 = "/assets/right-1.4baad8b0.png",
        p1 = "/assets/right-2.5feae9e3.png",
        f1 = "/assets/bg-1.3a60f760.png",
        j1 = "/assets/bg-2.7fd6b10b.png",
        b1 = "/assets/baseball-bg.aab8c78b.png",
        y1 = "/assets/basketball-bg.f40f01e1.png",
        v1 = "/assets/soccer-bg.229b56fe.png",
        C1 = "/assets/tennis-bg.3027f336.png",
        N1 = "/assets/others-bg.ac44af4d.png",
        w1 = "/assets/right-2-w.530a9f77.png",
        _1 = "/assets/bg-1-w.5eba4d65.png",
        k1 = "/assets/bg-2-w.d60c1fe0.png",
        L1 = "/assets/baseball-bg-w.1f9767cb.png",
        I1 = "/assets/basketball-bg-w.7341f0a6.png",
        M1 = "/assets/soccer-bg-w.c3330e79.png",
        E1 = "/assets/tennis-bg-w.b18c9030.png",
        S1 = "/assets/others-bg-w.db245a80.png",
        G = {
            right_1: x1,
            right_2: p1,
            right_2_w: w1,
            bg_1: f1,
            bg_2: j1,
            Baseball_bg: b1,
            Basketball_bg: y1,
            Soccer_bg: v1,
            Tennis_bg: C1,
            others_bg: N1,
            bg_1_w: _1,
            bg_2_w: k1,
            Baseball_bg_w: L1,
            Basketball_bg_w: I1,
            Soccer_bg_w: M1,
            Tennis_bg_w: E1,
            others_bg_w: S1
        };

    function is(s) {
        return Object.keys(G).includes(s)
    }
    const H1 = A.memo(function({
            banner: s,
            img_path: a,
            api_path: n,
            markets: t,
            status: i
        }) {
            var v, C, j, N, _, E, S, k, w, H, h, L;
            const {
                t: l
            } = b(), o = T(), r = s.matchInfo, g = (v = r.matchInfo) == null ? void 0 : v.desc.competitors[0], d = (C = r.matchInfo) == null ? void 0 : C.desc.competitors[1], m = (j = r.matchInfo) == null ? void 0 : j.score, x = ((N = r.matchInfo) == null ? void 0 : N.state.match_status) || 0, p = Q() ? is(`${(_=r.sportInfo)==null?void 0:_.name}_bg`) ? G[`${(E=r.sportInfo)==null?void 0:E.name}_bg`] : G.others_bg : is(`${(S=r.sportInfo)==null?void 0:S.name}_bg`) ? G[`${(k=r.sportInfo)==null?void 0:k.name}_bg_w`] : G.others_bg_w;
            let f = null;
            if ((w = r.matchInfo) != null && w.markets) {
                let I = 1;
                Object.keys((H = r.matchInfo) == null ? void 0 : H.markets).map((B, q) => {
                    q === 0 && (I = Number(B))
                }), f = we(I, t, (h = r.matchInfo) == null ? void 0 : h.markets[I])
            }
            return f ? e.jsxs("div", {
                className: P1,
                onClick: () => {
                    var I, B, q, ie, re;
                    o(`/sports?bt-path=%2F${(I=r.sportInfo)==null?void 0:I.slug}%2F${(B=r.categoryInfo)==null?void 0:B.slug}%2F${(q=r.tournamentInfo)==null?void 0:q.slug}/${(ie=r.matchInfo)==null?void 0:ie.desc.slug}-${(re=r.matchInfo)==null?void 0:re.id}`)
                },
                children: [e.jsx("div", {
                    className: "banner-bg",
                    children: e.jsx("img", {
                        alt: "bg",
                        src: p
                    })
                }), e.jsxs("div", {
                    className: "b-top",
                    children: [e.jsx("p", {
                        className: "name",
                        children: (L = r.tournamentInfo) == null ? void 0 : L.name
                    }), e.jsxs("div", {
                        className: "t-right",
                        children: [x !== 0 && e.jsx("p", {
                            className: "status",
                            children: i[x] || ""
                        }), e.jsx("div", {
                            className: "live ttu",
                            children: l("Live")
                        })]
                    })]
                }), e.jsxs("div", {
                    className: "b-match",
                    children: [e.jsxs("div", {
                        className: "c-left match-item",
                        children: [e.jsx("div", {
                            className: "c-img",
                            children: e.jsx(ce, {
                                id: (g == null ? void 0 : g.id) || "",
                                img_path: a,
                                country_code: "",
                                sports_id: r.parent_sport_id || ""
                            })
                        }), e.jsx("p", {
                            className: "c-name",
                            children: (g == null ? void 0 : g.name) || ""
                        })]
                    }), e.jsx("div", {
                        className: "c-center",
                        children: m && e.jsx("p", {
                            children: `${m.home_score} : ${m.away_score}`
                        })
                    }), e.jsxs("div", {
                        className: "c-right match-item",
                        children: [e.jsx("div", {
                            className: "c-img",
                            children: e.jsx(ce, {
                                id: (d == null ? void 0 : d.id) || "",
                                img_path: a,
                                country_code: "",
                                sports_id: r.parent_sport_id || ""
                            })
                        }), e.jsx("p", {
                            className: "c-name",
                            children: (d == null ? void 0 : d.name) || ""
                        })]
                    })]
                }), f && e.jsx("div", {
                    className: "b-markets",
                    children: f.marketList[0].map((I, B) => e.jsxs("div", {
                        className: "market-item",
                        children: [e.jsx("span", {
                            children: I.name
                        }), e.jsx("span", {
                            children: I.value
                        })]
                    }, "market-" + B))
                })]
            }) : null
        }),
        P1 = "b11s30ne",
        z1 = ys(async (s, a) => Promise.all([V.get(`/platform-sports/v14/promo/${s}/${a}/`, {
            cache: !0
        }), V.get(`/platform-sports/v14/description/${s}/${a}/`, {
            cache: !0
        })])),
        D1 = A.memo(function() {
            const s = Me(),
                {
                    lang: a
                } = se(),
                [n, t] = ue({
                    loading: !0,
                    banners: [],
                    img_path: "",
                    api_path: "",
                    markets: {},
                    status: {}
                });
            return c.useEffect(() => {
                z1(s, a).then(i => {
                    i && i.length === 2 && t({
                        loading: !1,
                        banners: i[0].items,
                        img_path: i[0].imgDomain,
                        api_path: i[0].apiDomain,
                        markets: i[1].markets,
                        status: i[1].statuses
                    })
                }).catch(console.log)
            }, []), e.jsx("div", {
                className: B1,
                children: n.loading ? e.jsx(J, {
                    className: A1
                }) : e.jsx(T1, W({}, n))
            })
        }),
        B1 = "bhii7sw";

    function T1({
        banners: s,
        img_path: a,
        api_path: n,
        markets: t,
        status: i
    }) {
        const l = Array(s.length).fill(1),
            o = $(),
            {
                t: r
            } = b(),
            g = (N, _ = 336, E = 12) => o ? 1 : N === 0 ? 4 : (_ = ne.relativePx(_), E = ne.relativePx(E), Math.floor((N + E) / (_ + E))),
            [d, m] = c.useState(g(0)),
            x = c.useMemo(() => ({
                "--grid-num": d
            }), [d]),
            p = ke(N => m(g(N.width))),
            {
                scrollNode: f,
                prevEnable: v,
                nextEnable: C,
                slide: j
            } = ps({
                className: "slide-list",
                data: l,
                ref: p,
                style: x,
                renderItem(N, _) {
                    return e.jsx(H1, {
                        banner: s[_],
                        api_path: n,
                        img_path: a,
                        markets: t,
                        status: i
                    }, _)
                }
            });
        return e.jsxs("div", {
            className: $1,
            children: [e.jsxs("section", {
                className: "top-section",
                children: [e.jsxs("div", {
                    children: [e.jsxs("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "12",
                        height: "12",
                        viewBox: "0 0 12 12",
                        fill: "none",
                        children: [e.jsx("circle", {
                            opacity: "0.341242",
                            cx: "6",
                            cy: "6",
                            r: "6",
                            fill: "#45D91E"
                        }), e.jsx("circle", {
                            cx: "6",
                            cy: "6",
                            r: "3",
                            fill: "#45D91E"
                        })]
                    }), e.jsx("span", {
                        className: "title",
                        children: r("Highlights")
                    })]
                }), e.jsxs("div", {
                    className: "slide-btn-bar",
                    children: [e.jsx("div", {
                        className: "btn view-all",
                        children: e.jsx(ae, {
                            className: "link",
                            href: "/sports",
                            children: r("View all")
                        })
                    }), e.jsx("div", {
                        className: "btn slide-prev",
                        children: e.jsx(y, {
                            onClick: () => j(-1),
                            disabled: !v,
                            children: e.jsx(F, {
                                name: "Arrow"
                            })
                        })
                    }), e.jsx("div", {
                        className: "btn slide-next",
                        children: e.jsx(y, {
                            onClick: () => j(1),
                            disabled: !C,
                            children: e.jsx(F, {
                                name: "Arrow"
                            })
                        })
                    })]
                })]
            }), e.jsx("section", {
                className: "scroll-bar",
                children: f
            })]
        })
    }
    const A1 = "l18gfvp3",
        $1 = "s1yrbnbe",
        F1 = A.memo(function({
            data: s,
            sportInfo: a,
            config: n,
            imgDomain: t,
            isOpen: i = !0
        }) {
            const [l, o] = c.useState(i), r = $() ? [1] : c1([1, 10], s.matches), g = T(), d = n.markets || {};
            return e.jsxs("div", {
                className: V1,
                children: [e.jsxs("div", {
                    className: "troggle bar",
                    onClick: () => o(!l),
                    children: [e.jsxs("div", {
                        className: "left-box",
                        children: [e.jsx("span", {
                            className: "first-tab",
                            children: e.jsx("span", {
                                children: s.categoryInfo.name
                            })
                        }), e.jsx("i", {
                            className: "arrow-right"
                        }), e.jsx("span", {
                            children: s.tournamentInfo.name
                        })]
                    }), e.jsxs("div", {
                        className: "right-box",
                        children: [e.jsx("span", {
                            children: s.matches.length
                        }), e.jsx(F, {
                            name: "Arrow"
                        })]
                    })]
                }), e.jsxs(jt, {
                    visible: l,
                    className: "data-table",
                    children: [e.jsxs("div", {
                        className: "bar table-row tr",
                        children: [e.jsx("div", {
                            className: "box-1 box"
                        }), r.map((m, x) => e.jsx("div", {
                            className: u("box-wrap", "box-" + (x + 2)),
                            children: e.jsx("div", {
                                className: "mk-name",
                                children: x === 0 ? e.jsxs("div", {
                                    className: "mk-sp",
                                    children: [e.jsx("div", {
                                        children: "1"
                                    }), e.jsx("div", {
                                        children: "x"
                                    }), e.jsx("div", {
                                        children: "2"
                                    })]
                                }) : d[m].name || ""
                            })
                        }, "mk-" + x)), e.jsx("div", {
                            className: "box-mobile box"
                        })]
                    }), s.matches.map((m, x) => {
                        var p, f, v, C, j, N, _, E;
                        return e.jsxs("div", {
                            className: "table-row td",
                            onClick: () => {
                                var S, k;
                                g(`/sports?bt-path=%2F${a==null?void 0:a.slug}%2F${(S=s.categoryInfo)==null?void 0:S.slug}%2F${(k=s.tournamentInfo)==null?void 0:k.slug}/${m==null?void 0:m.desc.slug}-${m==null?void 0:m.id}`)
                            },
                            children: [e.jsxs("div", {
                                className: "box-1 column box",
                                children: [e.jsxs("div", {
                                    className: "label ft12",
                                    children: [e.jsx("div", {
                                        className: "icon-wrap",
                                        children: e.jsx(R1, {})
                                    }), e.jsx("span", {
                                        children: n == null ? void 0 : n.statuses[m.state.match_status]
                                    })]
                                }), e.jsxs("div", {
                                    className: "name-bar",
                                    children: [e.jsx("div", {
                                        className: "team-icon-wrap",
                                        children: e.jsx(ce, {
                                            id: ((f = (p = m.desc.competitors) == null ? void 0 : p[0]) == null ? void 0 : f.id) || "",
                                            img_path: t,
                                            country_code: "",
                                            sports_id: m.desc.sport || ""
                                        })
                                    }), e.jsx("span", {
                                        className: "name",
                                        children: (C = (v = m.desc.competitors) == null ? void 0 : v[0]) == null ? void 0 : C.name
                                    }), e.jsx("div", {
                                        className: "score",
                                        children: m.score.home_score
                                    })]
                                }), e.jsxs("div", {
                                    className: "name-bar",
                                    children: [e.jsx("div", {
                                        className: "team-icon-wrap",
                                        children: e.jsx(ce, {
                                            id: ((N = (j = m.desc.competitors) == null ? void 0 : j[1]) == null ? void 0 : N.id) || "",
                                            img_path: t,
                                            country_code: "",
                                            sports_id: m.desc.sport || ""
                                        })
                                    }), e.jsx("span", {
                                        className: "name",
                                        children: (E = (_ = m.desc.competitors) == null ? void 0 : _[1]) == null ? void 0 : E.name
                                    }), e.jsx("div", {
                                        className: "score",
                                        children: m.score.away_score
                                    })]
                                })]
                            }), r.map((S, k) => {
                                const w = we(S, d, m == null ? void 0 : m.markets[S]);
                                return e.jsx("div", {
                                    className: u("box-wrap", "box-" + (k + 2)),
                                    children: e.jsx("div", {
                                        className: "markets-wrap",
                                        children: w == null ? void 0 : w.marketList[0].map((H, h) => e.jsx("div", {
                                            className: "box-item mk-item",
                                            children: H.value === "-" ? e.jsx("div", {
                                                children: "-"
                                            }) : e.jsxs(e.Fragment, {
                                                children: [e.jsx("div", {
                                                    className: "label",
                                                    children: H.name
                                                }), e.jsx("div", {
                                                    children: H.value
                                                })]
                                            })
                                        }, "mkitemg-" + h))
                                    })
                                }, "mkd-" + k)
                            }), e.jsxs("div", {
                                className: "box-mobile box",
                                children: ["+", Object.keys(m.markets).length]
                            })]
                        }, "mathc-" + x)
                    })]
                })]
            })
        }),
        V1 = "l1slimvs",
        R1 = A.memo(function() {
            return e.jsxs("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "none",
                children: [e.jsxs("g", {
                    clipPath: "url(#clip0_815_2491)",
                    children: [e.jsx("path", {
                        d: "M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z",
                        fill: "#E90F3D"
                    }), e.jsx("path", {
                        d: "M11.3545 5C12.0932 5.82466 12.5017 6.89287 12.5017 8C12.5017 9.10713 12.0932 10.1753 11.3545 11",
                        stroke: "#E90F3D",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }), e.jsx("path", {
                        d: "M4.64572 11C3.90701 10.1753 3.49854 9.10713 3.49854 8C3.49854 6.89287 3.90701 5.82466 4.64572 5",
                        stroke: "#E90F3D",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }), e.jsx("path", {
                        d: "M13 3.10107C14.2836 4.40853 15.0028 6.16758 15.0028 7.99982C15.0028 9.83207 14.2836 11.5911 13 12.8986",
                        stroke: "#E90F3D",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }), e.jsx("path", {
                        d: "M3.00009 12.8986C1.71647 11.5911 0.997314 9.83207 0.997314 7.99982C0.997314 6.16758 1.71647 4.40853 3.00009 3.10107",
                        stroke: "#E90F3D",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    })]
                }), e.jsx("defs", {
                    children: e.jsx("clipPath", {
                        id: "clip0_815_2491",
                        children: e.jsx("rect", {
                            width: "16",
                            height: "16",
                            fill: "white"
                        })
                    })
                })]
            })
        }),
        rs = A.memo(function({
            data: s,
            config: a,
            imgDomain: n,
            defaultOpen: t
        }) {
            const {
                t: i
            } = b();
            return s.tournamentItems && s.tournamentItems.length > 0 ? e.jsxs("div", {
                className: W1,
                children: [e.jsxs("div", {
                    className: "header bar",
                    children: [e.jsxs("div", {
                        className: "left-box",
                        children: [e.jsx(Ie, {
                            id: s.tournamentItems[0].categoryInfo.sport_id
                        }), e.jsx("span", {
                            children: s.sportInfo.name
                        })]
                    }), e.jsx(ae, {
                        className: "link",
                        href: `/sports/?bt-path=%2F${s.sportInfo.slug}`,
                        children: i("View all")
                    })]
                }), s.tournamentItems.map((l, o) => e.jsx(F1, {
                    data: l,
                    imgDomain: n,
                    sportInfo: s.sportInfo,
                    config: a,
                    isOpen: t && o === 0
                }, "tab-item-" + o))]
            }) : e.jsx(J, {
                className: G1
            })
        }),
        G1 = "l1m34o3f",
        W1 = "lju1uk2",
        Z1 = ys(async (s, a) => Promise.all([V.get(`/platform-sports/v14/live50/${s}/${a}/`, {
            cache: !0
        }), V.get(`/platform-sports/v14/description/${s}/${a}/`, {
            cache: !0
        })])),
        O1 = A.memo(function() {
            const {
                t: s
            } = b(), a = $(), [n, t] = c.useState(0), i = Me(), {
                lang: l
            } = se(), o = bt(), [r, g] = c.useState(), [d, m] = c.useState();
            c.useEffect(() => {
                Z1(i, l).then(h => {
                    h && h.length === 2 && (g(h[0]), m(h[1]))
                }).catch(console.log)
            }, []);
            const [x, p] = c.useState(!1), [f, v] = c.useState(!1), C = document.querySelector(".tabs-nav:first-child"), j = document.querySelector(".tabs-nav:last-child");
            c.useEffect(() => {
                const h = document.querySelector(".tabs-scroll"),
                    L = document.querySelector(".tabs-navs");
                if (h && L) {
                    const I = h.clientWidth,
                        B = L.scrollWidth;
                    p(B > I)
                }
            }, [r, o]), c.useEffect(() => {
                const h = fs(I => {
                        const B = I.target,
                            q = B.scrollLeft,
                            ie = B.scrollWidth,
                            re = B.clientWidth,
                            he = q + re >= ie;
                        p(!he), v(q > 0)
                    }, 100),
                    L = document.querySelector(".tabs-scroll");
                return L && L.addEventListener("scroll", h), () => {
                    window.removeEventListener("scroll", h)
                }
            }, [r]);
            const N = () => {
                    C && C.scrollIntoView({
                        behavior: "smooth",
                        block: "nearest",
                        inline: "end"
                    })
                },
                _ = () => {
                    j && j.scrollIntoView({
                        behavior: "smooth",
                        block: "nearest",
                        inline: "end"
                    })
                },
                E = r != null && r.sportItems ? r.sportItems.map(h => h) : [],
                S = E.slice(0, 3),
                k = [{
                    label: e.jsx(os, {
                        name: s("Live")
                    }),
                    value: () => e.jsx(e.Fragment, {
                        children: S.map((h, L) => e.jsx(rs, {
                            data: h,
                            imgDomain: r == null ? void 0 : r.imgDomain,
                            config: d,
                            defaultOpen: L === 0
                        }, L))
                    })
                }],
                w = E.map(h => {
                    var L;
                    return {
                        label: e.jsx(os, {
                            name: h.sportInfo.name,
                            id: (L = h.tournamentItems) == null ? void 0 : L[0].categoryInfo.sport_id
                        }),
                        value: () => e.jsx(rs, {
                            data: h,
                            defaultOpen: !0,
                            config: d,
                            imgDomain: r == null ? void 0 : r.imgDomain
                        })
                    }
                }),
                H = c.useMemo(() => [...k, ...w], [r]);
            return r ? e.jsxs("div", {
                className: u(U1),
                children: [e.jsx(yt, {
                    className: u("nav-tab", "top-nav-tab", f && "show-left", x && "show-right"),
                    type: "circle",
                    tabs: H,
                    value: n,
                    onChange: h => t(h)
                }), !a && e.jsxs(e.Fragment, {
                    children: [f && e.jsx(y, {
                        className: "left",
                        onClick: N,
                        children: e.jsx(F, {
                            name: "Arrow"
                        })
                    }), x && e.jsx(y, {
                        className: "right",
                        onClick: _,
                        children: e.jsx(F, {
                            name: "Arrow"
                        })
                    })]
                })]
            }) : e.jsx(J, {
                className: q1
            })
        }),
        os = ({
            name: s,
            id: a = "live"
        }) => e.jsxs("div", {
            className: K1,
            children: [a === "live" ? e.jsx(F, {
                name: "LiveEvents"
            }) : e.jsx(Ie, {
                id: a
            }), e.jsx("span", {
                children: s
            })]
        }),
        q1 = "ltxryny",
        K1 = "l18vpxuz",
        U1 = "s1k1dw8e",
        J1 = A.memo(function() {
            const {
                t: s
            } = b(), a = O(), n = T(), t = Q(), i = $();
            return e.jsxs("div", {
                className: X1,
                children: [e.jsxs("section", {
                    children: [e.jsxs("div", {
                        className: "left-box",
                        children: [e.jsx("div", {
                            className: "html-title",
                            children: e.jsxs(ee, {
                                i18nKey: "trans.mainpage.55w.desc1",
                                children: ["Fast & Easy Way to get started ", e.jsx("div", {
                                    className: "green",
                                    children: "300% Deposit Bonus"
                                })]
                            })
                        }), e.jsx(y, {
                            type: "conic",
                            onClick: () => n(a.login ? "#/deposit" : "#/login/regist"),
                            children: a.login ? s("Deposit") : s("Sign up")
                        })]
                    }), e.jsx("img", {
                        className: "bg-img-1",
                        src: t ? G.bg_1 : G.bg_1_w
                    }), e.jsx("img", {
                        className: "right-img right-img-1",
                        src: G.right_1
                    })]
                }), e.jsxs("section", {
                    children: [e.jsxs("div", {
                        className: "left-box",
                        children: [e.jsx("div", {
                            className: "html-title",
                            children: i ? e.jsxs(ee, {
                                i18nKey: "trans.mainpage.55w.desc2",
                                children: ["Deposit fast and safely with ", e.jsx("br", {}), e.jsx("span", {
                                    className: "green",
                                    children: "M-PESA"
                                }), " your favorite ", e.jsx("br", {}), " payment method"]
                            }) : e.jsxs(ee, {
                                i18nKey: "trans.mainpage.55w.desc3",
                                children: ["Deposit fast and safely with ", e.jsx("span", {
                                    className: "green",
                                    children: "M-PESA"
                                }), e.jsx("br", {}), " your favorite payment method"]
                            })
                        }), e.jsx(y, {
                            type: "conic3",
                            onClick: () => n("#/deposit"),
                            children: s("Deposit")
                        })]
                    }), e.jsx("img", {
                        className: "bg-img-2",
                        src: t ? G.bg_2 : G.bg_2_w
                    }), e.jsx("img", {
                        className: "right-img right-img-2",
                        src: t ? G.right_2 : G.right_2_w
                    })]
                })]
            })
        }),
        X1 = "fvcly3c",
        Y1 = A.memo(function() {
            return e.jsxs("div", {
                className: "",
                children: [e.jsx(ye, {}), e.jsxs("div", {
                    className: u("home-container page-max-width-wrap"),
                    children: [e.jsx(D1, {}), e.jsx(O1, {}), e.jsx(J1, {})]
                })]
            })
        }),
        Q1 = "/assets/coin1.95fc4bdf.png",
        en = "/assets/coin2.a68e606b.png",
        sn = "/assets/banner_text.5efb6d86.png",
        an = "/assets/banner_bg3.eef3b595.png",
        cs = "/assets/paizi.a1c7403c.png",
        nn = {
            hash: "ZFo3ZsCzL8IDevuQo1MzVRPIKpc",
            spine: "3.8.95",
            x: -582.28,
            y: -400.56,
            width: 1051,
            height: 951,
            images: "",
            audio: "D:/A\u5DE5\u4F5C\u6587\u4EF6\u5939/spine/14"
        },
        tn = [{
            name: "root"
        }, {
            name: "bone",
            parent: "root",
            length: 951.85,
            rotation: .22,
            x: -51.19,
            y: -305.86
        }, {
            name: "bone2",
            parent: "bone",
            x: 32.56,
            y: 398.92
        }, {
            name: "bone3",
            parent: "bone",
            x: 8.07,
            y: 216.76
        }, {
            name: "bone5",
            parent: "bone",
            x: 203.13,
            y: 441
        }, {
            name: "bone8",
            parent: "bone",
            x: -4.6,
            y: 421.65,
            scaleX: 2,
            scaleY: 2
        }],
        rn = [{
            name: "Ellipse 2004",
            bone: "bone5",
            attachment: "Ellipse 2004"
        }, {
            name: "image 2085",
            bone: "bone2",
            attachment: "image 2085"
        }, {
            name: "image 2086",
            bone: "bone2",
            color: "ffffff00",
            attachment: "image 2085",
            blend: "additive"
        }, {
            name: "High Light",
            bone: "bone3",
            attachment: "High Light",
            blend: "additive"
        }, {
            name: "guanghuan/guanghuan_00000",
            bone: "bone8",
            blend: "additive"
        }],
        on = [{
            name: "default",
            attachments: {
                "Ellipse 2004": {
                    "Ellipse 2004": {
                        x: -1.79,
                        y: -13.26,
                        rotation: -.22,
                        width: 459,
                        height: 762
                    }
                },
                "High Light": {
                    "High Light": {
                        x: -12.94,
                        y: -32.53,
                        rotation: -.22,
                        width: 1051,
                        height: 447
                    }
                },
                "guanghuan/guanghuan_00000": {
                    "guanghuan/guanghuan_00000": {
                        x: -12.67,
                        y: 204.91,
                        rotation: -.22,
                        width: 1200,
                        height: 1e3
                    },
                    "guanghuan/guanghuan_00001": {
                        rotation: -.22,
                        width: 600,
                        height: 347
                    },
                    "guanghuan/guanghuan_00002": {
                        rotation: -.22,
                        width: 600,
                        height: 347
                    },
                    "guanghuan/guanghuan_00003": {
                        rotation: -.22,
                        width: 600,
                        height: 347
                    },
                    "guanghuan/guanghuan_00004": {
                        rotation: -.22,
                        width: 600,
                        height: 347
                    },
                    "guanghuan/guanghuan_00005": {
                        rotation: -.22,
                        width: 600,
                        height: 347
                    },
                    "guanghuan/guanghuan_00006": {
                        rotation: -.22,
                        width: 600,
                        height: 347
                    },
                    "guanghuan/guanghuan_00007": {
                        rotation: -.22,
                        width: 600,
                        height: 347
                    },
                    "guanghuan/guanghuan_00008": {
                        rotation: -.22,
                        width: 600,
                        height: 347
                    },
                    "guanghuan/guanghuan_00009": {
                        rotation: -.22,
                        width: 600,
                        height: 347
                    },
                    "guanghuan/guanghuan_00010": {
                        rotation: -.22,
                        width: 600,
                        height: 347
                    },
                    "guanghuan/guanghuan_00011": {
                        rotation: -.22,
                        width: 600,
                        height: 347
                    },
                    "guanghuan/guanghuan_00013": {
                        rotation: -.22,
                        width: 600,
                        height: 347
                    },
                    "guanghuan/guanghuan_00015": {
                        rotation: -.22,
                        width: 600,
                        height: 347
                    },
                    "guanghuan/guanghuan_00016": {
                        rotation: -.22,
                        width: 600,
                        height: 347
                    },
                    "guanghuan/guanghuan_00020": {
                        rotation: -.22,
                        width: 600,
                        height: 347
                    },
                    "guanghuan/guanghuan_00021": {
                        rotation: -.22,
                        width: 600,
                        height: 347
                    },
                    "guanghuan/guanghuan_00022": {
                        rotation: -.22,
                        width: 600,
                        height: 347
                    },
                    "guanghuan/guanghuan_00023": {
                        rotation: -.22,
                        width: 600,
                        height: 347
                    },
                    "guanghuan/guanghuan_00024": {
                        rotation: -.22,
                        width: 600,
                        height: 347
                    }
                },
                "image 2085": {
                    "image 2085": {
                        x: 53.96,
                        y: -18.46,
                        rotation: -.22,
                        width: 787,
                        height: 951
                    }
                },
                "image 2086": {
                    "image 2085": {
                        x: 53.96,
                        y: -18.46,
                        rotation: -.22,
                        width: 787,
                        height: 951
                    }
                }
            }
        }],
        cn = {
            animation: {
                slots: {
                    "High Light": {
                        color: [{
                            time: 1.5667,
                            color: "ffffffff"
                        }, {
                            time: 1.6,
                            color: "ffffff00"
                        }, {
                            time: 3.6667,
                            color: "ffffff00"
                        }, {
                            time: 3.8667,
                            color: "ffffffed"
                        }, {
                            time: 4,
                            color: "ffffffff"
                        }]
                    },
                    "guanghuan/guanghuan_00000": {
                        attachment: [{
                            time: 1.6,
                            name: "guanghuan/guanghuan_00003"
                        }, {
                            time: 1.6667,
                            name: "guanghuan/guanghuan_00004"
                        }, {
                            time: 1.7333,
                            name: "guanghuan/guanghuan_00005"
                        }, {
                            time: 1.8,
                            name: "guanghuan/guanghuan_00006"
                        }, {
                            time: 1.8667,
                            name: "guanghuan/guanghuan_00007"
                        }, {
                            time: 1.9333,
                            name: "guanghuan/guanghuan_00008"
                        }, {
                            time: 2,
                            name: "guanghuan/guanghuan_00009"
                        }, {
                            time: 2.0667,
                            name: "guanghuan/guanghuan_00010"
                        }, {
                            time: 2.1333,
                            name: "guanghuan/guanghuan_00011"
                        }, {
                            time: 2.2,
                            name: "guanghuan/guanghuan_00013"
                        }, {
                            time: 2.2667,
                            name: "guanghuan/guanghuan_00015"
                        }, {
                            time: 2.3333,
                            name: "guanghuan/guanghuan_00016"
                        }, {
                            time: 2.4,
                            name: "guanghuan/guanghuan_00020"
                        }, {
                            time: 2.4667,
                            name: "guanghuan/guanghuan_00021"
                        }, {
                            time: 2.5333,
                            name: "guanghuan/guanghuan_00022"
                        }, {
                            time: 2.6,
                            name: "guanghuan/guanghuan_00023"
                        }, {
                            time: 2.6667,
                            name: "guanghuan/guanghuan_00024"
                        }, {
                            time: 2.7333,
                            name: null
                        }]
                    },
                    "image 2086": {
                        color: [{
                            time: 1.6667,
                            color: "ffffff00"
                        }, {
                            time: 2.0667,
                            color: "ffffffff"
                        }, {
                            time: 2.6333,
                            color: "ffffff00"
                        }]
                    }
                },
                bones: {
                    bone2: {
                        translate: [{
                            curve: 0,
                            c2: .1,
                            c3: .75
                        }, {
                            time: 1,
                            x: .02,
                            y: 5.62,
                            curve: .25,
                            c3: .75
                        }, {
                            time: 3,
                            x: -.02,
                            y: -6.22,
                            curve: .25,
                            c4: .9
                        }, {
                            time: 4
                        }]
                    },
                    bone3: {
                        translate: [{
                            curve: 0,
                            c2: .06,
                            c3: .75
                        }, {
                            time: 1.5333,
                            x: 44.81,
                            y: 121.6,
                            curve: "stepped"
                        }, {
                            time: 2.7333,
                            x: -7.72,
                            y: -28.84,
                            curve: "stepped"
                        }, {
                            time: 3.6,
                            x: -7.72,
                            y: -28.84,
                            curve: .25,
                            c4: .92
                        }, {
                            time: 4
                        }]
                    },
                    bone8: {
                        translate: [{
                            time: 1.5333,
                            x: 44.81,
                            y: 121.6,
                            curve: "stepped"
                        }, {
                            time: 1.6,
                            x: 43.95,
                            y: -102.64,
                            curve: "stepped"
                        }, {
                            time: 4
                        }]
                    }
                }
            }
        },
        ln = {
            skeleton: nn,
            bones: tn,
            slots: rn,
            skins: on,
            animations: cn
        },
        mn = `
paizi.png
size: 2798,1637
format: RGBA8888
filter: Linear,Linear
repeat: none
Ellipse 2004
  rotate: false
  xy: 2, 7
  size: 424, 713
  orig: 459, 762
  offset: 18, 25
  index: -1
High Light
  rotate: false
  xy: 741, 1215
  size: 1021, 420
  orig: 1051, 447
  offset: 15, 15
  index: -1
guanghuan/guanghuan_00000
  rotate: false
  xy: 741, 794
  size: 1015, 419
  orig: 1200, 1000
  offset: 93, 54
  index: -1
guanghuan/guanghuan_00001
  rotate: true
  xy: 2585, 602
  size: 509, 211
  orig: 600, 347
  offset: 43, 61
  index: -1
guanghuan/guanghuan_00002
  rotate: false
  xy: 1733, 45
  size: 509, 212
  orig: 600, 347
  offset: 43, 61
  index: -1
guanghuan/guanghuan_00003
  rotate: false
  xy: 1222, 27
  size: 509, 215
  orig: 600, 347
  offset: 43, 61
  index: -1
guanghuan/guanghuan_00004
  rotate: true
  xy: 2106, 282
  size: 509, 220
  orig: 600, 347
  offset: 43, 58
  index: -1
guanghuan/guanghuan_00005
  rotate: true
  xy: 2562, 83
  size: 510, 227
  orig: 600, 347
  offset: 42, 54
  index: -1
guanghuan/guanghuan_00006
  rotate: true
  xy: 2328, 83
  size: 510, 232
  orig: 600, 347
  offset: 43, 51
  index: -1
guanghuan/guanghuan_00007
  rotate: false
  xy: 707, 2
  size: 513, 240
  orig: 600, 347
  offset: 42, 47
  index: -1
guanghuan/guanghuan_00008
  rotate: true
  xy: 2335, 595
  size: 516, 248
  orig: 600, 347
  offset: 42, 43
  index: -1
guanghuan/guanghuan_00009
  rotate: true
  xy: 2335, 1113
  size: 522, 255
  orig: 600, 347
  offset: 39, 40
  index: -1
guanghuan/guanghuan_00010
  rotate: false
  xy: 1570, 259
  size: 527, 262
  orig: 600, 347
  offset: 37, 36
  index: -1
guanghuan/guanghuan_00011
  rotate: false
  xy: 1570, 523
  size: 534, 268
  orig: 600, 347
  offset: 34, 34
  index: -1
guanghuan/guanghuan_00013
  rotate: false
  xy: 741, 521
  size: 552, 271
  orig: 600, 347
  offset: 27, 42
  index: -1
guanghuan/guanghuan_00015
  rotate: false
  xy: 1764, 1345
  size: 567, 290
  orig: 600, 347
  offset: 18, 34
  index: -1
guanghuan/guanghuan_00016
  rotate: false
  xy: 1764, 1068
  size: 569, 275
  orig: 600, 347
  offset: 6, 34
  index: -1
guanghuan/guanghuan_00020
  rotate: false
  xy: 1764, 1068
  size: 569, 275
  orig: 600, 347
  offset: 6, 34
  index: -1
guanghuan/guanghuan_00021
  rotate: false
  xy: 1758, 793
  size: 565, 273
  orig: 600, 347
  offset: 3, 35
  index: -1
guanghuan/guanghuan_00022
  rotate: true
  xy: 428, 149
  size: 571, 277
  orig: 600, 347
  offset: 0, 34
  index: -1
guanghuan/guanghuan_00023
  rotate: true
  xy: 1295, 260
  size: 532, 273
  orig: 600, 347
  offset: 30, 34
  index: -1
guanghuan/guanghuan_00024
  rotate: false
  xy: 707, 244
  size: 538, 275
  orig: 600, 347
  offset: 28, 34
  index: -1
image 2085
  rotate: false
  xy: 2, 722
  size: 737, 913
  orig: 787, 951
  offset: 25, 23
  index: -1
`;

    function dn() {
        const s = T();
        return e.jsxs("div", {
            className: "banner-text",
            children: [e.jsx("div", {
                className: "h1",
                children: e.jsx("img", {
                    src: sn,
                    alt: "CLAIM 10000X BTC REWARDS"
                })
            }), e.jsx("div", {
                className: "desc",
                children: "Join NFT and Crypto Competitions"
            }), e.jsx("div", {
                className: "btn",
                children: e.jsx(y, {
                    onClick: () => s("#/login/regist"),
                    type: "conic2",
                    children: "Join Now"
                })
            }), e.jsxs("div", {
                className: "coins",
                children: [e.jsx("img", {
                    className: "coin-1",
                    src: Q1,
                    alt: "BCD"
                }), e.jsx("img", {
                    className: "coin-2",
                    src: en,
                    alt: "BTC"
                })]
            })]
        })
    }

    function gn() {
        const s = $() ? {
            width: window.innerWidth,
            height: window.innerWidth / .9,
            scale: .4
        } : {
            width: 880,
            height: 800,
            scale: .8
        };
        return e.jsx(e.Fragment, {
            children: e.jsx(Cs, {
                width: s.width,
                height: s.height,
                fps: 60,
                children: e.jsx(c.Suspense, {
                    fallback: null,
                    children: e.jsx(Ns, {
                        x: s.width / 2,
                        y: s.height / 2 + 30,
                        skel: ln,
                        atlas: mn,
                        img: cs,
                        scale: s.scale
                    })
                })
            })
        })
    }

    function hn() {
        const [s, a] = c.useState(!1), n = () => {
            setTimeout(() => {
                a(!0)
            }, 1e3)
        };
        return e.jsxs("div", {
            className: `banner-bg ${s?"loaded":"loading"}`,
            children: [e.jsx("img", {
                src: cs,
                alt: "bc.xyz",
                onLoad: n,
                className: "loading-img"
            }), e.jsx("img", {
                src: an,
                alt: "CLAIM 10000X BTC REWARDS",
                className: "banner-img"
            }), e.jsx("div", {
                className: "banner-animation",
                children: e.jsx(gn, {})
            })]
        })
    }

    function un() {
        return e.jsxs("div", {
            className: M(xn, "banner"),
            children: [e.jsx(dn, {}), e.jsx(hn, {})]
        })
    }
    const xn = "b1c0lsgp",
        pn = "/assets/logo.b980cbd3.png";

    function fn() {
        const {
            t: s
        } = b(), a = T(), [n, t] = c.useState(!1);
        return c.useEffect(() => {
            const i = () => {
                window.scrollY > 0 ? t(!0) : t(!1)
            };
            return window.addEventListener("scroll", i), () => {
                window.removeEventListener("scroll", i)
            }
        }, []), e.jsx("div", {
            className: M(jn, "header", n ? "sticky" : ""),
            children: e.jsxs("div", {
                className: "header-inside",
                children: [e.jsx("div", {
                    className: "logo",
                    children: e.jsx("img", {
                        src: pn,
                        alt: "bc.xyz"
                    })
                }), e.jsxs("div", {
                    className: "login",
                    children: [e.jsx(y, {
                        onClick: () => a("#/login/regist"),
                        className: "sign-in",
                        type: "conic2",
                        children: s("Sign in")
                    }), e.jsx(y, {
                        onClick: () => a("#/login/regist"),
                        className: "sign-up",
                        type: "conic2",
                        children: s("Sign up")
                    })]
                })]
            })
        })
    }
    const jn = "hj4o3x3",
        bn = "/assets/ape_avatar.d89e6141.png",
        yn = "/assets/mb_avatar.ee543dae.png";

    function vn({
        data: s
    }) {
        const a = T();
        return e.jsxs("div", {
            className: "nft-box",
            children: [e.jsxs("div", {
                className: "tit",
                children: [e.jsx("img", {
                    className: "tit-img",
                    src: s.avatar === 1 ? bn : yn,
                    alt: s.collection
                }), e.jsx("div", {
                    className: "text",
                    children: e.jsxs("div", {
                        className: "club",
                        children: [s.collection, " ", s.number]
                    })
                })]
            }), e.jsx("div", {
                className: "nft-element",
                children: e.jsx("img", {
                    src: s.img,
                    alt: ""
                })
            }), e.jsxs("div", {
                className: "meta",
                children: [e.jsxs("div", {
                    className: "price",
                    children: [e.jsx("span", {
                        className: "eth",
                        children: s.ethPrice
                    }), e.jsx("span", {
                        className: "usd",
                        children: s.usdPrice
                    })]
                }), e.jsx("div", {
                    className: "btn",
                    children: e.jsx(y, {
                        onClick: () => a("#/login/regist"),
                        type: "conic2",
                        children: "Join Now"
                    })
                })]
            })]
        })
    }

    function Cn() {
        const s = [{
                collection: "Bored Ape Yacht Club",
                ethPrice: "12.8 ETH",
                usdPrice: "$40,733.25",
                number: "#2190",
                img: "https://i.seadn.io/gae/Uf6A7bRuei9BdJ-njy7Oo2wl4y3eXaD8E1nQGe6aJH4rU1gekPx9CrXffKQJY8MXMaOSPbGkjpkTby25NzOrM9g1_klrODkCdJGW?auto=format&dpr=1&w=1000",
                avatar: 1
            }, {
                collection: "Bored Ape Yacht Club",
                ethPrice: "12.8 ETH",
                usdPrice: "$40,733.25",
                number: "#3816",
                img: "https://i.seadn.io/gae/ZbfIqPBvzhBsnEO5VDJ8gKUFeIq7i-fscCIAVWR8LNNNbFzK4-PNvsFQT8GEfYJZHbA-Rscw_Vkgs6PpHegBsFbnQEVbZDyJ31u-?auto=format&dpr=1&w=1000",
                avatar: 1
            }, {
                collection: "Bored Ape Yacht Club",
                ethPrice: "12.8 ETH",
                usdPrice: "$40,733.25",
                number: "#8467",
                img: "https://i.seadn.io/gae/180meXNo4uQjBElSmkEL8n7Wky4qRltq88gaOQ6EGaR2fLjr3eQgbr8kTm_iPtdXu2wUw-4IP8vnxqg0XlvwHLVAvaYHPyQUS7OVjg?auto=format&dpr=1&w=1000",
                avatar: 1
            }, {
                collection: "Bored Ape Yacht Club",
                ethPrice: "12.8 ETH",
                usdPrice: "$40,733.25",
                number: "#5860",
                img: "https://i.seadn.io/gae/JmevzGiquuGTAPMy6eKKKYUHhuT79N7VFGfHTK8h81bpgz5E9b-HaLDTiZzCdmPckdKS7W-hYxIIO8S_HEi9w2lR9E6E7sngVm5OLg?auto=format&dpr=1&w=1000",
                avatar: 1
            }, {
                collection: "Bored Ape Yacht Club",
                ethPrice: "13.07 ETH",
                usdPrice: "$41,592.14",
                number: "#3865",
                img: "https://i.seadn.io/gae/9Aqcy7kWURePQWHvL3uS0g6YWdO0PqIzbzl4qkduCBR3zSLp1DH8vFix9uOkkURp9BZlPasxFMEgkbTDsWI9LDN4UVKl5tWT23mYEQ?auto=format&dpr=1&w=1000",
                avatar: 1
            }, {
                collection: "Moonbirds",
                ethPrice: "0.706 ETH",
                usdPrice: "$2,246.68",
                number: "#2441",
                img: "https://raw.seadn.io/files/04aba377ec19c59b8384619ed3259bba.bin",
                avatar: 2
            }, {
                collection: "Moonbirds",
                ethPrice: "0.7066 ETH",
                usdPrice: "$2,248.58",
                number: "#4146",
                img: "https://raw.seadn.io/files/b010f8bac10318b885a328618a3c96bf.bin",
                avatar: 2
            }, {
                collection: "Moonbirds",
                ethPrice: "0.7065 ETH",
                usdPrice: "$2,248.27",
                number: "#706",
                img: "https://raw.seadn.io/files/08b9ef3d3d58c3c79bfeedf1bbbd35bb.bin",
                avatar: 2
            }, {
                collection: "Moonbirds",
                ethPrice: "0.7065 ETH",
                usdPrice: "$2,248.27",
                number: "#6711",
                img: "https://raw.seadn.io/files/6b29ede205b917a76f8b37be04ec6d2e.bin",
                avatar: 2
            }, {
                collection: "Moonbirds",
                ethPrice: "0.7065 ETH",
                usdPrice: "$2,248.27",
                number: "#4541",
                img: "https://raw.seadn.io/files/78a0a2f6f81c5da239f1e7d43281808a.bin",
                avatar: 2
            }],
            a = $() ? 4 : 10,
            n = s.splice(0, a);
        return e.jsxs("div", {
            className: M(Nn, "nft-section"),
            children: [e.jsx("div", {
                className: "nft-list",
                children: n.map((t, i) => e.jsx(vn, {
                    data: t
                }, i))
            }), e.jsx("div", {
                className: "action",
                children: e.jsx("a", {
                    rel: "noreferrer",
                    className: "more",
                    href: "https://opensea.io/bc-game",
                    target: "_blank",
                    children: "See more Drops"
                })
            })]
        })
    }
    const Nn = "nqa0di6",
        wn = "/assets/ey.f6ad120c.png",
        _n = "/assets/about_text.3ff46bf1.png",
        kn = {
            hash: "wWq7ne3i0o4HTMBF0U/GAoKlT3E",
            spine: "3.8.95",
            x: -19.42,
            y: -13.47,
            width: 41.28,
            height: 235.86,
            images: "",
            audio: "E:/SS\u7684\u4E1C\u897F/\u5176\u4ED6\u9879\u76EE\u7EC4\u7684\u4E1C\u897F/240315/spine"
        },
        Ln = [{
            name: "root"
        }, {
            name: "bone5",
            parent: "root",
            length: 287.74,
            rotation: 91.25,
            x: 1.21,
            y: .26,
            scaleX: .6161,
            scaleY: .6161
        }, {
            name: "bone6",
            parent: "root",
            length: 3.42,
            rotation: 1.01,
            x: -2.14,
            y: -.48
        }, {
            name: "bone3",
            parent: "bone6",
            rotation: -1.01,
            x: .29,
            y: .6
        }],
        In = [{
            name: "images/yan/yan0001",
            bone: "bone5",
            color: "ffffff82",
            attachment: "images/yan/yan0001"
        }, {
            name: "images/huoxinghui",
            bone: "bone6",
            attachment: "images/huoxinghui"
        }, {
            name: "images/huoxing",
            bone: "bone3",
            attachment: "images/huoxing",
            blend: "additive"
        }],
        Mn = [{
            name: "default",
            attachments: {
                "images/huoxing": {
                    "images/huoxing": {
                        x: 1.95,
                        y: -1.95,
                        width: 23,
                        height: 23
                    }
                },
                "images/huoxinghui": {
                    "images/huoxinghui": {
                        x: 2.03,
                        y: -1.53,
                        rotation: -1.01,
                        width: 23,
                        height: 23
                    }
                },
                "images/yan/yan0001": {
                    "images/yan/yan0001": {
                        x: 171.48,
                        y: -3.77,
                        rotation: -91.25,
                        width: 67,
                        height: 378
                    },
                    "images/yan/yan0002": {
                        x: 171.48,
                        y: -3.77,
                        rotation: -91.25,
                        width: 67,
                        height: 378
                    },
                    "images/yan/yan0003": {
                        x: 171.48,
                        y: -3.77,
                        rotation: -91.25,
                        width: 67,
                        height: 378
                    },
                    "images/yan/yan0004": {
                        x: 171.48,
                        y: -3.77,
                        rotation: -91.25,
                        width: 67,
                        height: 378
                    },
                    "images/yan/yan0005": {
                        x: 171.48,
                        y: -3.77,
                        rotation: -91.25,
                        width: 67,
                        height: 378
                    },
                    "images/yan/yan0006": {
                        x: 171.48,
                        y: -3.77,
                        rotation: -91.25,
                        width: 67,
                        height: 378
                    },
                    "images/yan/yan0007": {
                        x: 171.48,
                        y: -3.77,
                        rotation: -91.25,
                        width: 67,
                        height: 378
                    },
                    "images/yan/yan0008": {
                        x: 171.48,
                        y: -3.77,
                        rotation: -91.25,
                        width: 67,
                        height: 378
                    },
                    "images/yan/yan0009": {
                        x: 171.48,
                        y: -3.77,
                        rotation: -91.25,
                        width: 67,
                        height: 378
                    },
                    "images/yan/yan0010": {
                        x: 171.48,
                        y: -3.77,
                        rotation: -91.25,
                        width: 67,
                        height: 378
                    },
                    "images/yan/yan0011": {
                        x: 171.48,
                        y: -3.77,
                        rotation: -91.25,
                        width: 67,
                        height: 378
                    },
                    "images/yan/yan0012": {
                        x: 171.48,
                        y: -3.77,
                        rotation: -91.25,
                        width: 67,
                        height: 378
                    },
                    "images/yan/yan0013": {
                        x: 171.48,
                        y: -3.77,
                        rotation: -91.25,
                        width: 67,
                        height: 378
                    },
                    "images/yan/yan0014": {
                        x: 171.48,
                        y: -3.77,
                        rotation: -91.25,
                        width: 67,
                        height: 378
                    },
                    "images/yan/yan0015": {
                        x: 171.48,
                        y: -3.77,
                        rotation: -91.25,
                        width: 67,
                        height: 378
                    },
                    "images/yan/yan0016": {
                        x: 171.48,
                        y: -3.77,
                        rotation: -91.25,
                        width: 67,
                        height: 378
                    },
                    "images/yan/yan0017": {
                        x: 171.48,
                        y: -3.77,
                        rotation: -91.25,
                        width: 67,
                        height: 378
                    },
                    "images/yan/yan0018": {
                        x: 171.48,
                        y: -3.77,
                        rotation: -91.25,
                        width: 67,
                        height: 378
                    },
                    "images/yan/yan0019": {
                        x: 171.48,
                        y: -3.77,
                        rotation: -91.25,
                        width: 67,
                        height: 378
                    },
                    "images/yan/yan0020": {
                        x: 171.48,
                        y: -3.77,
                        rotation: -91.25,
                        width: 67,
                        height: 378
                    },
                    "images/yan/yan0021": {
                        x: 171.48,
                        y: -3.77,
                        rotation: -91.25,
                        width: 67,
                        height: 378
                    },
                    "images/yan/yan0022": {
                        x: 171.48,
                        y: -3.77,
                        rotation: -91.25,
                        width: 67,
                        height: 378
                    },
                    "images/yan/yan0023": {
                        x: 171.48,
                        y: -3.77,
                        rotation: -91.25,
                        width: 67,
                        height: 378
                    },
                    "images/yan/yan0024": {
                        x: 171.48,
                        y: -3.77,
                        rotation: -91.25,
                        width: 67,
                        height: 378
                    },
                    "images/yan/yan0025": {
                        x: 171.48,
                        y: -3.77,
                        rotation: -91.25,
                        width: 67,
                        height: 378
                    },
                    "images/yan/yan0026": {
                        x: 171.48,
                        y: -3.77,
                        rotation: -91.25,
                        width: 67,
                        height: 378
                    },
                    "images/yan/yan0027": {
                        x: 171.48,
                        y: -3.77,
                        rotation: -91.25,
                        width: 67,
                        height: 378
                    }
                }
            }
        }],
        En = {
            normal: {
                slots: {
                    "images/huoxing": {
                        color: [{
                            color: "fbf90e73"
                        }, {
                            time: 1,
                            color: "f8ed16ff"
                        }, {
                            time: 2,
                            color: "ffffff74"
                        }, {
                            time: 3,
                            color: "ffffffff"
                        }, {
                            time: 4,
                            color: "ffffff74"
                        }]
                    },
                    "images/yan/yan0001": {
                        attachment: [{
                            time: .0667,
                            name: "images/yan/yan0002"
                        }, {
                            time: .1667,
                            name: "images/yan/yan0003"
                        }, {
                            time: .2667,
                            name: "images/yan/yan0005"
                        }, {
                            time: .3667,
                            name: "images/yan/yan0007"
                        }, {
                            time: .4667,
                            name: "images/yan/yan0008"
                        }, {
                            time: .5667,
                            name: "images/yan/yan0009"
                        }, {
                            time: .6667,
                            name: "images/yan/yan0010"
                        }, {
                            time: .7667,
                            name: "images/yan/yan0011"
                        }, {
                            time: .8333,
                            name: "images/yan/yan0012"
                        }, {
                            time: .9,
                            name: "images/yan/yan0013"
                        }, {
                            time: 1,
                            name: "images/yan/yan0014"
                        }, {
                            time: 1.1,
                            name: "images/yan/yan0016"
                        }, {
                            time: 1.1667,
                            name: "images/yan/yan0017"
                        }, {
                            time: 1.2667,
                            name: "images/yan/yan0018"
                        }, {
                            time: 1.3667,
                            name: "images/yan/yan0019"
                        }, {
                            time: 1.4667,
                            name: "images/yan/yan0021"
                        }, {
                            time: 1.5667,
                            name: "images/yan/yan0022"
                        }, {
                            time: 1.6667,
                            name: "images/yan/yan0024"
                        }, {
                            time: 1.7667,
                            name: "images/yan/yan0025"
                        }, {
                            time: 1.9,
                            name: "images/yan/yan0027"
                        }, {
                            time: 2,
                            name: "images/yan/yan0001"
                        }, {
                            time: 2.1,
                            name: "images/yan/yan0003"
                        }, {
                            time: 2.2,
                            name: "images/yan/yan0004"
                        }, {
                            time: 2.3,
                            name: "images/yan/yan0005"
                        }, {
                            time: 2.4,
                            name: "images/yan/yan0007"
                        }, {
                            time: 2.5,
                            name: "images/yan/yan0008"
                        }, {
                            time: 2.6,
                            name: "images/yan/yan0009"
                        }, {
                            time: 2.7333,
                            name: "images/yan/yan0011"
                        }, {
                            time: 2.8333,
                            name: "images/yan/yan0012"
                        }, {
                            time: 2.9333,
                            name: "images/yan/yan0014"
                        }, {
                            time: 3.0333,
                            name: "images/yan/yan0015"
                        }, {
                            time: 3.1333,
                            name: "images/yan/yan0017"
                        }, {
                            time: 3.2333,
                            name: "images/yan/yan0018"
                        }, {
                            time: 3.3333,
                            name: "images/yan/yan0020"
                        }, {
                            time: 3.4333,
                            name: "images/yan/yan0021"
                        }, {
                            time: 3.5333,
                            name: "images/yan/yan0022"
                        }, {
                            time: 3.6333,
                            name: "images/yan/yan0023"
                        }, {
                            time: 3.7333,
                            name: "images/yan/yan0025"
                        }, {
                            time: 3.8333,
                            name: "images/yan/yan0026"
                        }, {
                            time: 3.9333,
                            name: "images/yan/yan0027"
                        }]
                    }
                }
            }
        },
        Sn = {
            skeleton: kn,
            bones: Ln,
            slots: In,
            skins: Mn,
            animations: En
        },
        Hn = `
yan_dc.png
size: 459,996
format: RGBA8888
filter: Linear,Linear
repeat: none
images/huoxing
  rotate: false
  xy: 428, 979
  size: 14, 15
  orig: 23, 23
  offset: 2, 6
  index: -1
images/huoxinghui
  rotate: false
  xy: 414, 657
  size: 9, 9
  orig: 23, 23
  offset: 5, 9
  index: -1
images/yan/yan0001
  rotate: true
  xy: 117, 719
  size: 56, 300
  orig: 67, 378
  offset: 7, 13
  index: -1
images/yan/yan0002
  rotate: true
  xy: 117, 777
  size: 55, 303
  orig: 67, 378
  offset: 7, 10
  index: -1
images/yan/yan0003
  rotate: false
  xy: 2, 684
  size: 54, 310
  orig: 67, 378
  offset: 8, 4
  index: -1
images/yan/yan0004
  rotate: false
  xy: 2, 373
  size: 53, 309
  orig: 67, 378
  offset: 8, 5
  index: -1
images/yan/yan0005
  rotate: true
  xy: 117, 942
  size: 52, 309
  orig: 67, 378
  offset: 8, 6
  index: -1
images/yan/yan0006
  rotate: false
  xy: 2, 62
  size: 51, 309
  orig: 67, 378
  offset: 9, 6
  index: -1
images/yan/yan0007
  rotate: true
  xy: 117, 890
  size: 50, 310
  orig: 67, 378
  offset: 9, 6
  index: -1
images/yan/yan0008
  rotate: true
  xy: 117, 668
  size: 49, 306
  orig: 67, 378
  offset: 10, 10
  index: -1
images/yan/yan0009
  rotate: true
  xy: 100, 302
  size: 49, 306
  orig: 67, 378
  offset: 11, 11
  index: -1
images/yan/yan0010
  rotate: true
  xy: 105, 353
  size: 48, 304
  orig: 67, 378
  offset: 12, 14
  index: -1
images/yan/yan0011
  rotate: true
  xy: 100, 50
  size: 48, 301
  orig: 67, 378
  offset: 12, 17
  index: -1
images/yan/yan0012
  rotate: false
  xy: 412, 307
  size: 45, 307
  orig: 67, 378
  offset: 13, 11
  index: -1
images/yan/yan0013
  rotate: false
  xy: 55, 62
  size: 43, 309
  orig: 67, 378
  offset: 14, 9
  index: -1
images/yan/yan0014
  rotate: true
  xy: 2, 6
  size: 42, 312
  orig: 67, 378
  offset: 15, 6
  index: -1
images/yan/yan0015
  rotate: false
  xy: 57, 374
  size: 46, 308
  orig: 67, 378
  offset: 15, 10
  index: -1
images/yan/yan0016
  rotate: true
  xy: 105, 616
  size: 50, 307
  orig: 67, 378
  offset: 14, 11
  index: -1
images/yan/yan0017
  rotate: true
  xy: 105, 563
  size: 51, 305
  orig: 67, 378
  offset: 14, 11
  index: -1
images/yan/yan0018
  rotate: true
  xy: 105, 510
  size: 51, 304
  orig: 67, 378
  offset: 14, 11
  index: -1
images/yan/yan0019
  rotate: true
  xy: 105, 456
  size: 52, 302
  orig: 67, 378
  offset: 13, 12
  index: -1
images/yan/yan0020
  rotate: true
  xy: 100, 199
  size: 49, 302
  orig: 67, 378
  offset: 15, 12
  index: -1
images/yan/yan0021
  rotate: true
  xy: 105, 403
  size: 51, 303
  orig: 67, 378
  offset: 12, 12
  index: -1
images/yan/yan0022
  rotate: true
  xy: 100, 149
  size: 48, 303
  orig: 67, 378
  offset: 11, 12
  index: -1
images/yan/yan0023
  rotate: true
  xy: 100, 100
  size: 47, 304
  orig: 67, 378
  offset: 10, 11
  index: -1
images/yan/yan0024
  rotate: false
  xy: 408, 2
  size: 49, 303
  orig: 67, 378
  offset: 9, 12
  index: -1
images/yan/yan0025
  rotate: true
  xy: 100, 250
  size: 50, 304
  orig: 67, 378
  offset: 8, 10
  index: -1
images/yan/yan0026
  rotate: true
  xy: 117, 834
  size: 54, 305
  orig: 67, 378
  offset: 7, 8
  index: -1
images/yan/yan0027
  rotate: false
  xy: 58, 688
  size: 57, 306
  orig: 67, 378
  offset: 6, 6
  index: -1
`,
        Pn = "/assets/yan_dc.69f960b6.png";

    function zn() {
        const s = T(),
            a = $() ? {
                width: 30,
                height: 100,
                scale: .5
            } : {
                width: 50,
                height: 160,
                scale: .8
            };
        return e.jsxs("div", {
            className: M(Dn, "about"),
            children: [e.jsxs("div", {
                className: "img-ey",
                children: [e.jsx("img", {
                    src: wn,
                    alt: ""
                }), e.jsx("div", {
                    className: "yan",
                    children: e.jsx(Cs, {
                        width: a.width,
                        height: a.height,
                        fps: 60,
                        children: e.jsx(c.Suspense, {
                            fallback: null,
                            children: e.jsx(Ns, {
                                x: a.width / 2,
                                y: a.height,
                                skel: Sn,
                                atlas: Hn,
                                img: Pn,
                                scale: a.scale
                            })
                        })
                    })
                })]
            }), e.jsxs("div", {
                className: "desc",
                children: [e.jsx("div", {
                    className: "tit",
                    children: e.jsx("img", {
                        src: _n,
                        alt: "About BC.GAME"
                    })
                }), e.jsx("div", {
                    className: "txt",
                    children: "BC.GAME is a community-based crypto platform that offers its players the best online game experience possible! With open source code and provably fair games, BC.GAME gains more popularity among global users. It is a multi-award-winning crypto platform. As a pioneer in the industry, BC.GAME is capable of satisfying millions of players worldwide. BC.GAME prioritizes its community, ensuring an everlasting and endlessly entertaining playing experience."
                }), e.jsx("div", {
                    className: "btn",
                    children: e.jsx(y, {
                        onClick: () => s("#/login/regist"),
                        type: "conic2",
                        children: "Join Now"
                    })
                })]
            })]
        })
    }
    const Dn = "avxc5x9",
        Bn = "/assets/r1.aab30643.png",
        Tn = "/assets/r2.9e1da4e7.png",
        An = "/assets/r3.115092a5.png",
        $n = "/assets/r1_text.178b11e2.png",
        Fn = "/assets/r2_text.1eaf421a.png",
        Vn = "/assets/r3_text.3d1a92fb.png",
        Rn = "/assets/r1_text_m.7957edc8.png",
        Gn = "/assets/r2_text_m.ee44c586.png",
        Wn = "/assets/r3_text_m.0186c175.png";

    function Zn() {
        const s = $();
        return e.jsx("div", {
            className: M(On, "reward-list"),
            children: e.jsxs("div", {
                className: "items",
                children: [e.jsxs("div", {
                    className: "item item-1",
                    children: [e.jsxs("div", {
                        className: "icon",
                        children: [e.jsx("img", {
                            src: Bn,
                            alt: "Weekly Prize"
                        }), s && e.jsx("div", {
                            className: "bg"
                        })]
                    }), e.jsxs("div", {
                        className: "info",
                        children: [e.jsx("div", {
                            className: "tit",
                            children: e.jsx("img", {
                                src: s ? Rn : $n,
                                alt: "Weekly Prize"
                            })
                        }), e.jsx("div", {
                            className: "desc",
                            children: "Every week, we offer a variety of prizes to giveaway."
                        })]
                    }), !s && e.jsx("div", {
                        className: "bg"
                    })]
                }), e.jsxs("div", {
                    className: "item item-2",
                    children: [e.jsxs("div", {
                        className: "icon",
                        children: [e.jsx("img", {
                            src: Tn,
                            alt: "Multi Cryptocurrencies Support"
                        }), s && e.jsx("div", {
                            className: "bg"
                        })]
                    }), e.jsxs("div", {
                        className: "info",
                        children: [e.jsx("div", {
                            className: "tit",
                            children: e.jsx("img", {
                                src: s ? Gn : Fn,
                                alt: "Multi Cryptocurrencies Support"
                            })
                        }), e.jsx("div", {
                            className: "desc",
                            children: "Over 120 cryptocurrencies and fiat payments are accepted at BC.GAME."
                        })]
                    }), !s && e.jsx("div", {
                        className: "bg"
                    })]
                }), e.jsxs("div", {
                    className: "item item-3",
                    children: [e.jsxs("div", {
                        className: "icon",
                        children: [e.jsx("img", {
                            src: An,
                            alt: "Fast Withdrawal"
                        }), s && e.jsx("div", {
                            className: "bg"
                        })]
                    }), e.jsxs("div", {
                        className: "info",
                        children: [e.jsx("div", {
                            className: "tit",
                            children: e.jsx("img", {
                                src: s ? Wn : Vn,
                                alt: "Fast Withdrawal"
                            })
                        }), e.jsx("div", {
                            className: "desc",
                            children: "BC.GAME supports super fast and instantaneous withdrawals for most coins and tokens."
                        })]
                    }), !s && e.jsx("div", {
                        className: "bg"
                    })]
                })]
            })
        })
    }
    const On = "r2lu6jq",
        qn = "/assets/t1.798609da.png",
        Kn = "/assets/t2.f351aa1e.png",
        Un = "/assets/logo.dfc7b260.svg";

    function Jn() {
        const s = T();
        return e.jsx("div", {
            className: u(Xn, "footer"),
            children: e.jsxs("div", {
                className: "page-max-width-wrap",
                children: [e.jsxs("div", {
                    className: "footer-grid c-list",
                    children: [e.jsxs("div", {
                        className: "grid-left",
                        children: [e.jsx("div", {
                            className: "tit",
                            children: e.jsx("img", {
                                src: qn,
                                alt: "Crypto Currencies We Supported"
                            })
                        }), e.jsx("div", {
                            className: "crypto-list",
                            children: e.jsx("div", {
                                className: "crypto-icons",
                                children: new Array(18).fill(1).map((a, n) => e.jsx("span", {
                                    onClick: () => s("#/login/regist"),
                                    className: `c${n+1}`
                                }, n))
                            })
                        })]
                    }), e.jsxs("div", {
                        className: "grid-right",
                        children: [e.jsx("div", {
                            className: "tit",
                            children: e.jsx("img", {
                                src: Kn,
                                alt: "Join our Community"
                            })
                        }), e.jsx("div", {
                            className: "community-list",
                            children: e.jsx("div", {
                                className: "links",
                                onCanPlay: () => {},
                                children: new Array(10).fill(1).map((a, n) => e.jsx("span", {
                                    onClick: () => s("#/login/regist"),
                                    className: `c${n+1}`
                                }, n))
                            })
                        })]
                    })]
                }), e.jsx("div", {
                    className: "logo",
                    children: e.jsx("img", {
                        src: Un,
                        alt: "bc.xyz"
                    })
                }), e.jsxs("div", {
                    className: "footer-grid info-list",
                    children: [e.jsx("div", {
                        className: "grid-left",
                        children: e.jsx("div", {
                            className: "info",
                            children: "BC.GAME is a multi-award-winning cryptocurrency platform known for its user-focused approach. It successfully meets the needs of millions of players worldwide. With a strong emphasis on community, BC.GAME is dedicated to providing an enduring and continuously entertaining playing experience."
                        })
                    }), e.jsx("div", {
                        className: "grid-right",
                        children: e.jsx("div", {
                            className: "info",
                            children: "BC.GAME is a multi-award-winning cryptocurrency platform known for its user-focused approach. It successfully meets the needs of millions of players worldwide. With a strong emphasis on community, BC.GAME is dedicated to providing an enduring and continuously entertaining playing experience."
                        })
                    })]
                }), e.jsx("div", {
                    className: "copyright",
                    children: "\xA92024\xA0BLOCKDANCE B.V. ALL RIGHTS RESERVED"
                })]
            })
        })
    }
    const Xn = "s1fmojrn";

    function Yn() {
        return c.useEffect(() => (setTimeout(() => {
            ne.emit("ignore_sign_up_queue", !0)
        }, 200), () => {
            ne.emit("ignore_sign_up_queue", !1)
        }), []), e.jsxs("div", {
            className: u(Qn),
            children: [e.jsx(fn, {}), e.jsx("div", {
                className: "bg1"
            }), e.jsx("div", {
                className: "bg2"
            }), e.jsx("div", {
                className: "bg3"
            }), e.jsx("div", {
                className: u("nft-page"),
                children: e.jsxs("div", {
                    className: u("nft-page-list", "page-max-width-wrap"),
                    children: [e.jsx(un, {}), e.jsx(Cn, {}), e.jsx(zn, {}), e.jsx(Zn, {}), e.jsx(Jn, {})]
                })
            })]
        })
    }
    const Qn = "sxl5zok";

    function et() {
        const s = $(),
            a = O(),
            {
                isKenyaHost: n,
                isSpreadHost: t
            } = Z.getHostType(U.host);
        return n ? e.jsx(Y1, {}) : t && !a.login ? e.jsx(Yn, {}) : s ? e.jsx(h1, {}) : e.jsx(st, {})
    }

    function st() {
        const {
            t: s
        } = b(), {
            isSpHost: a
        } = Z.getHostType(U.host), n = Ls();
        return e.jsxs("div", {
            className: u(at),
            children: [e.jsx(ye, {}), e.jsxs("div", {
                className: u("home-container page-max-width-wrap"),
                children: [a ? e.jsxs(e.Fragment, {
                    children: [e.jsx(es, {}), e.jsx(He, {})]
                }) : e.jsxs(e.Fragment, {
                    children: [e.jsx(He, {}), e.jsx(es, {})]
                }), e.jsx(te, {
                    source: n.bestData,
                    line: 1,
                    showPlayBtn: 2,
                    className: "best-list",
                    loop: 0,
                    title: s("Top Rated Games")
                }), e.jsx(La, {}), e.jsx(Nt, {}), e.jsx(za, {}), e.jsx(te, {
                    source: n.recommendData,
                    showPlayBtn: 1,
                    line: 1,
                    className: "recommend-list",
                    loop: 0,
                    title: s("Recommended Games")
                })]
            })]
        })
    }
    const at = "s1cce63r";
    _s = function() {
        return c.useEffect(() => {
            ne.emit("ad_track", "home_page")
        }, []), e.jsx(et, {})
    }, ks = ({
        ctx: s
    }) => {
        const a = !!s.urlParsed.search.br_s;
        if (U.MAX_DESIGN_WIDTH >= globalThis.innerWidth) {
            const n = It("", 1);
            return {
                bestData: X({
                    sectionId: "home_best"
                }),
                recommendData: X({
                    sectionId: "home_recommend"
                }),
                origin: X({
                    sectionId: "casino_bc",
                    page: 1
                }),
                top_picks: X({
                    sectionId: "top_picks",
                    page: 1
                }),
                slots: n.then(t => t[1]),
                live: n.then(t => t[2]),
                new_releases: X({
                    sectionId: Ee.getTagNameSectionId("New Releases"),
                    tag: "New Releases",
                    page: 1
                }),
                hot_games: n.then(t => t[0]),
                table_games: X({
                    sectionId: Ee.getTagNameSectionId("Table games"),
                    tag: "Table games",
                    page: 1
                }),
                picks_for_you: X({
                    sectionId: Ee.sectionIdDecode("picks-for-you"),
                    pageSize: 20
                }),
                documentProps: a ? Promise.resolve({
                    title: "BCGAME Apostas Online | BCGAME Jogo | Crash & Double",
                    description: "O site de apostas online BCGAME oferece o melhor que h\xE1 no mundo dos jogos de cassino online. Visite o nosso site e desfrute dos jogos da crash, double, slots, e muitos outros cl\xE1ssicos jogos de cassino agora."
                }) : ws(s.lang, "home")
            }
        } else return {
            bestData: X({
                sectionId: "home_best"
            }),
            recommendData: X({
                sectionId: "home_recommend"
            }),
            documentProps: a ? Promise.resolve({
                title: "BCGAME Apostas Online | BCGAME Jogo | Crash & Double",
                description: "O site de apostas online BCGAME oferece o melhor que h\xE1 no mundo dos jogos de cassino online. Visite o nosso site e desfrute dos jogos da crash, double, slots, e muitos outros cl\xE1ssicos jogos de cassino agora."
            }) : ws(s.lang, "home")
        }
    }
});
export {
    _s as Page, Ht as __tla, ks as onPageData
};