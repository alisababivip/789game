var H = Object.defineProperty,
    Q = Object.defineProperties;
var X = Object.getOwnPropertyDescriptors;
var _ = Object.getOwnPropertySymbols;
var F = Object.prototype.hasOwnProperty,
    R = Object.prototype.propertyIsEnumerable;
var I = (s, n, i) => n in s ? H(s, n, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: i
    }) : s[n] = i,
    j = (s, n) => {
        for (var i in n || (n = {})) F.call(n, i) && I(s, i, n[i]);
        if (_)
            for (var i of _(n)) R.call(n, i) && I(s, i, n[i]);
        return s
    },
    b = (s, n) => Q(s, X(n));
var U = (s, n) => {
    var i = {};
    for (var a in s) F.call(s, a) && n.indexOf(a) < 0 && (i[a] = s[a]);
    if (s != null && _)
        for (var a of _(s)) n.indexOf(a) < 0 && R.call(s, a) && (i[a] = s[a]);
    return i
};
import {
    z,
    r as l,
    _ as t,
    a as e,
    c as g,
    C as P,
    aa as M,
    F as v,
    R as S,
    f as x,
    ab as Y,
    v as k,
    E as Z,
    a7 as E,
    Z as h,
    ac as J,
    a8 as $,
    w as K,
    a5 as ee,
    a6 as te
} from "./gift-b590e7c8.js";

function se({
    list: s,
    onBack: n
}) {
    const i = z(),
        [a, o] = l.useState(!1),
        {
            t: c
        } = t.useTranslation();
    l.useEffect(() => {
        o(!0)
    }, []);
    const u = () => {
        o(!1), setTimeout(() => {
            n()
        }, 200)
    };
    return e.jsx("div", {
        className: g(ne, "winlist", a && "enter", i.fiat && "fiat"),
        children: e.jsxs("div", {
            className: "winlist-wrap",
            children: [e.jsx("div", {
                className: "pop-control",
                children: e.jsx("button", {
                    onClick: u,
                    className: "back",
                    children: e.jsx(t.Icon, {
                        name: "Arrow"
                    })
                })
            }), e.jsxs("div", {
                className: "header",
                children: [e.jsx("img", {
                    src: P.crown,
                    className: "crown",
                    alt: ""
                }), e.jsxs("div", {
                    className: "spin-bonus",
                    children: [e.jsx("img", {
                        className: "pre-img",
                        src: P.laurel,
                        alt: ""
                    }), e.jsx("div", {
                        className: "tit",
                        children: c("Spin Bonus")
                    }), e.jsx("img", {
                        className: "suf-img",
                        src: P.laurel,
                        alt: ""
                    })]
                })]
            }), e.jsxs("div", {
                className: "win-list",
                children: [e.jsxs("div", {
                    className: "table-header td",
                    children: [e.jsx("div", {
                        className: "p",
                        children: c("User Name")
                    }), e.jsx("div", {
                        className: "p",
                        children: c("Spin Level")
                    }), e.jsx("div", {
                        className: "p",
                        children: c("Prize")
                    })]
                }), s.length > 0 ? e.jsx(t.Swiper, {
                    slidesPerView: "auto",
                    direction: "vertical",
                    loop: !0,
                    autoplay: {
                        delay: 200,
                        disableOnInteraction: !1
                    },
                    slidesPerGroup: 1,
                    className: "swiper winlist-swiper swiper-no-swiping",
                    children: s.map((r, m) => {
                        const d = new t.Decimal(r.amount || 0).mul(t.systemStore.getUsdPrice(r.currencyName)).gte(50);
                        return e.jsxs("div", {
                            className: "td",
                            children: [e.jsx("div", {
                                className: "p name",
                                children: r.username
                            }), e.jsx("div", {
                                className: "p",
                                children: e.jsx("span", {
                                    style: {
                                        color: "#FFFFFF"
                                    },
                                    children: M(v.getTab(r.level))
                                })
                            }), e.jsx("div", {
                                className: g("p", d && "big"),
                                children: e.jsx(t.BC.CoinFormat, {
                                    sign: !0,
                                    icon: !0,
                                    name: r.currencyName,
                                    amount: r.amount
                                })
                            })]
                        }, "tr-" + m)
                    })
                }) : e.jsx(t.Empty, {})]
            })]
        })
    })
}
const ne = "s2psx6n";

function ae() {
    return t.http.post("/activity/lucky/spin/news/", {
        start: new Date().getTime() - 24 * 60 * 60 * 1e3
    })
}

function ie({
    num: s
}) {
    const n = t.useLocalCurrency(!0),
        a = {
            val: z().totalBonus
        },
        o = l.useRef(null),
        {
            t: c
        } = t.useTranslation();
    return l.useEffect(() => {
        const u = k.to(a, {
            val: s,
            duration: 3,
            ease: Z.Linear.easeInOut,
            onUpdate: () => {
                o.current && (o.current.innerHTML = n.amount2localStr(new t.Decimal(a.val || 0)))
            }
        });
        return v.setState({
            totalBonus: s
        }), () => k.killTweensOf(u)
    }, [s]), e.jsxs("div", {
        className: "left-cont",
        children: [e.jsx("div", {
            className: "tit",
            children: c("SPIN BONUS TOTAL")
        }), e.jsx("div", {
            className: "amount",
            ref: o,
            children: n.amount2localStr(new t.Decimal(a.val || 0))
        })]
    })
}
const ce = S.memo(function({
        spinLoading: n,
        className: i
    }) {
        const [a, o] = l.useState(!1), {
            data: c
        } = t.useAsync(ae);
        return c ? e.jsxs(e.Fragment, {
            children: [a && e.jsx(t.Portal.Source, {
                id: "spin-winlist",
                children: e.jsx(se, {
                    list: c.updates,
                    onBack: () => o(!1)
                })
            }), e.jsxs("div", {
                className: g(O, i),
                children: [e.jsx(ie, {
                    num: c.totalBonus
                }), e.jsx("div", {
                    className: "right-cont",
                    onClick: () => {
                        n || o(!a)
                    },
                    children: e.jsx(re, {
                        list: c.updates
                    })
                })]
            })]
        }) : e.jsx("div", {
            className: g(O, i),
            children: e.jsx(t.Loading, {})
        })
    }),
    oe = S.memo(({
        data: s,
        it: n
    }) => e.jsxs(x.motion.div, {
        className: "data-cont",
        style: {
            position: "absolute"
        },
        initial: "initial",
        animate: "animate",
        exit: "exit",
        variants: n,
        children: [e.jsx(t.BC.Avatar, {
            name: "",
            userId: s.userId
        }), e.jsxs("div", {
            className: "cont",
            children: [e.jsx("div", {
                className: "name",
                children: s.username
            }), e.jsxs("div", {
                className: "win",
                children: ["Win: ", e.jsx(t.BC.CoinFormat, {
                    name: s.currencyName,
                    amount: s.amount,
                    icon: !0
                }), " "]
            }), e.jsxs("div", {
                className: "type",
                children: ["in ", e.jsx("b", {
                    style: {
                        color: Y(v.getTab(s.level))
                    },
                    children: M(v.getTab(s.level))
                })]
            })]
        }), e.jsx(t.Icon, {
            name: "Arrow"
        })]
    }));

function re({
    list: s
}) {
    const [n, i] = l.useState(0), a = s[n % s.length];
    l.useEffect(() => {
        const c = window.setInterval(() => i(u => u + 1), 5e3);
        return () => {
            clearInterval(c)
        }
    }, []);
    const o = {
        initial: {
            y: "100%"
        },
        animate: {
            y: "0"
        },
        exit: {
            y: "-100%"
        }
    };
    return !s || s.length === 0 ? null : e.jsx("div", {
        children: e.jsx(oe, {
            data: a,
            it: o
        }, n)
    })
}
const O = "s1i7029e",
    le = "/modules/bonus/crypto_point-2b3622a0.png",
    ue = "/modules/bonus/fiat_point-aff671ea.png",
    me = "/modules/bonus/crypto_spin-5290c0a3.png",
    de = "/modules/bonus/fiat_spin-c344bad1.png",
    pe = "/modules/bonus/crypto_btn-27a97635.png",
    ge = "/modules/bonus/fiat_btn-d75af4ac.png",
    he = "/modules/bonus/light-8df519d7.png";
const ye = {
        initial: {
            opacity: 1,
            scale: 1,
            rotate: 0
        },
        animate: {
            opacity: 1,
            scale: 1,
            rotate: 0
        },
        transition: {
            type: "spring",
            delay: .4
        }
    },
    xe = {
        initial: {
            scale: 1,
            opacity: 1
        },
        animate: {
            scale: 1,
            opacity: 1
        },
        transition: {
            type: "spring",
            delay: 0
        }
    },
    ve = {
        initial: {
            opacity: 1,
            scale: 0
        },
        animate: {
            opacity: 1,
            scale: 1
        },
        transition: {
            type: "spring",
            delay: 0
        }
    },
    fe = S.memo(function({
        loading: n
    }) {
        const i = l.useRef(null);
        return l.useEffect(() => {
            setInterval(() => {
                if (i.current) {
                    const a = i.current.classList;
                    a.contains("light") ? a.remove("light") : a.add("light")
                }
            }, 1e3)
        }, []), e.jsx("img", {
            ref: i,
            className: g("spin-light", !n && "active"),
            src: he,
            alt: ""
        })
    });

function je(s, n, i, a) {
    return {
        spinPoint: e.jsx(x.motion.img, b(j({}, ve), {
            src: n ? ue : le,
            alt: ""
        })),
        spinMain: e.jsxs(x.motion.div, b(j({
            className: be
        }, ye), {
            children: [e.jsx(fe, {
                loading: s
            }), e.jsx("img", {
                className: "spin-img",
                src: n ? de : me,
                alt: ""
            }), a.map((o, c) => {
                const u = {
                    initial: {
                        opacity: 1,
                        height: 24,
                        x: 1,
                        transform: `rotate(${c*22.5}deg)`
                    }
                };
                return e.jsxs(x.motion.div, b(j({}, u), {
                    className: g("spin-item", n && "fiat"),
                    children: [e.jsx("span", {
                        className: "amount",
                        children: t.utils.formateAmount(a[c].amount, n ? 2 : 5)
                    }), n && t.env.localCurrencys.find(r => r.value === a[c].currencyName) ? e.jsx("div", {
                        className: g("coin-icon", `col-${c}`),
                        children: t.systemStore.getCurrencySymbol(a[c].currencyName)
                    }) : e.jsx(t.BC.CoinIcon, {
                        name: a[c].currencyName
                    }), a[c].locked && e.jsx(t.Icon, {
                        name: "Locked"
                    })]
                }), c)
            })]
        })),
        spinBtn: e.jsx(x.motion.div, b(j({}, xe), {
            className: g(s && "loading", "btn-img"),
            onClick: i,
            children: e.jsx("img", {
                className: "btn-txt",
                src: n ? ge : pe,
                alt: ""
            })
        }))
    }
}
const be = "scs0t5e",
    Ne = "/modules/bonus/gold-7f96d3f0.png",
    Se = "/modules/bonus/gold_bg-4fea7639.png";
let D = null;

function we() {
    return t.http.get("/activity/reward/hasUserClaimedFreeMoney")
}
async function Ce() {
    const i = Date.now();
    for (;;) {
        try {
            if (await we() !== -1) break
        } catch (a) {
            console.log("Function failed:", a);
            break
        }
        if (Date.now() - i > 6e3) {
            console.log("Polling timeout");
            break
        }
        await t.utils.delay(1500)
    }
}

function _e({
    amount: s,
    currency: n
}) {
    const i = t.useAccount(),
        [a, o] = t.useSetState({
            rotate: !1
        }),
        c = t.useNavigate(),
        {
            t: u
        } = t.useTranslation(),
        r = i.login,
        m = t.usePop();
    l.useEffect(() => {
        const d = setTimeout(() => o({
            rotate: !0
        }), 1300);
        return r && t.accountStore.initData.then(async () => {
            m.push(e.jsx(E, {
                amount: s,
                currency: n
            }))
        }), () => {
            clearTimeout(d)
        }
    }, []);
    const p = l.useCallback(async () => {
        t.app.emit("track", "spin_reward_click", {
            currency: n
        }), v.soundSprites.play("Collect"), m.close(), r || c("#/login/regist"), D == null && (h.setState({
            claimed: !0
        }), D = t.accountStore.waitLogin().then(async () => {
            await t.utils.delay(3500), Ce().then(() => {
                t.asyncQueue.add(() => m.push(e.jsx(E, {
                    amount: s,
                    currency: n
                })))
            }).catch(d => {
                console.error(d)
            }), D = null
        }))
    }, []);
    return e.jsxs("div", {
        className: ke,
        children: [e.jsx("img", {
            className: g("img-bg", a.rotate && "rotate"),
            src: Se,
            alt: ""
        }), e.jsxs("div", {
            className: "bg-wrap",
            children: [e.jsx("img", {
                className: "img_glod",
                src: Ne,
                alt: ""
            }), e.jsxs("div", {
                className: "cont",
                children: [e.jsx("div", {
                    className: "tit ttu",
                    children: u("Congratulations!")
                }), e.jsx("div", {
                    className: "desc",
                    children: u("You’ve got free money to bet on our games!")
                }), e.jsx(J, {
                    className: "amount",
                    duration: 3e3,
                    currency: n,
                    targetValue: s
                }), e.jsx(t.Button, {
                    type: "conic",
                    onClick: p,
                    children: u("Claim Rewards")
                })]
            })]
        })]
    })
}
const ke = "sjfh21a",
    Le = {
        hash: "dq/TzY8eQ5VRIGaUvXV9v3j1pZk",
        spine: "3.8.95",
        x: -303.31,
        y: -288.78,
        width: 631.42,
        height: 489.6,
        images: "",
        audio: "E:/SS的东西/其他项目组的东西/超核分裂/spine/dianji"
    },
    Te = [{
        name: "root"
    }, {
        name: "bone7",
        parent: "root",
        length: 341.43,
        rotation: 134.69,
        x: 245.76,
        y: -185.95
    }, {
        name: "bone8",
        parent: "bone7",
        length: 136.18,
        rotation: 5.36,
        x: 356.65,
        y: 85.9
    }, {
        name: "bone9",
        parent: "bone8",
        length: 108.16,
        rotation: -8.48,
        x: 136.18
    }, {
        name: "bone13",
        parent: "root",
        length: 339.68,
        rotation: 139.29,
        x: 221.8,
        y: -231.78
    }, {
        name: "bone14",
        parent: "bone13",
        length: 128.31,
        rotation: -2.97,
        x: 382.08,
        y: 67.36
    }, {
        name: "bone15",
        parent: "bone14",
        length: 114.64,
        rotation: -6.94,
        x: 128.31
    }],
    Be = [{
        name: "images/23",
        bone: "bone13",
        attachment: "images/22"
    }, {
        name: "images/12",
        bone: "bone7",
        attachment: "images/11"
    }],
    Ae = [{
        name: "default",
        attachments: {
            "images/12": {
                "images/11": {
                    type: "mesh",
                    uvs: [.04153, 0, .07082, 0, .10497, .02128, .13919, .07418, .16686, .11741, .2077, .16587, .26955, .21084, .3205, .15902, .36098, .15006, .39088, .15862, .43056, .12341, .47391, .1181, .52584, .13417, .57225, .10897, .62779, .11594, .6777, .13616, .74203, .21358, .79445, .32309, .82293, .4133, .82424, .43013, .90743, .51218, .931, .5898, .93092, .6612, .91749, .71345, .89328, .7726, .84416, .84103, .77486, .89693, .71625, .91384, .65269, .91411, .61448, .90124, .54904, .83812, .53292, .84583, .43094, .84574, .37885, .83313, .31141, .80291, .25348, .75192, .19212, .67356, .18106, .5904, .22156, .47096, .20149, .43562, .11963, .33345, .02479, .19396, .00264, .12926, 0, .09623, 0, .06645, .01825, .01924, .29516, .39449, .58564, .53734, .75355, .72085, .15763, .22181, .06357, .10696],
                    triangles: [50, 43, 44, 50, 0, 1, 50, 1, 2, 50, 2, 3, 45, 0, 50, 50, 44, 45, 42, 43, 50, 41, 42, 50, 4, 50, 3, 49, 50, 4, 41, 50, 49, 49, 4, 5, 40, 41, 49, 9, 46, 6, 6, 39, 49, 6, 49, 5, 39, 6, 46, 40, 49, 39, 38, 39, 46, 35, 38, 46, 35, 36, 37, 7, 8, 9, 9, 6, 7, 14, 12, 13, 14, 16, 12, 16, 14, 15, 47, 16, 17, 47, 17, 18, 47, 18, 19, 16, 47, 12, 20, 21, 48, 9, 10, 11, 12, 9, 11, 9, 12, 47, 46, 9, 47, 21, 22, 48, 48, 47, 19, 48, 19, 20, 22, 23, 48, 24, 48, 23, 33, 34, 47, 47, 32, 33, 48, 30, 47, 25, 48, 24, 47, 31, 32, 30, 31, 47, 26, 48, 25, 29, 30, 48, 29, 48, 28, 26, 27, 48, 27, 28, 48, 47, 34, 46, 34, 35, 46, 35, 37, 38],
                    vertices: [1, 3, 115.68, -29.62, 1, 1, 3, 103.59, -43.24, 1, 1, 3, 81.55, -52.09, 1, 2, 2, 175.89, -56.97, .03382, 3, 47.68, -50.49, .96618, 3, 1, 509.66, 48.56, 25e-5, 2, 148.84, -51.48, .24286, 3, 20.12, -49.05, .75689, 3, 1, 474.6, 47.5, .01707, 2, 113.84, -49.25, .77256, 3, -14.83, -52.01, .21037, 3, 1, 431.6, 35.93, .2328, 2, 69.94, -56.76, .76498, 3, -57.14, -65.9, .00222, 2, 1, 427.69, -4.78, .63111, 2, 62.25, -96.93, .36889, 2, 1, 413.16, -25.82, .7778, 2, 45.82, -116.52, .2222, 2, 1, 397.05, -36.04, .89558, 2, 28.82, -125.19, .10442, 2, 1, 392.18, -65.95, .98769, 2, 21.18, -154.51, .01231, 2, 1, 375.1, -86.98, .99987, 2, 2.21, -173.85, 13e-5, 1, 1, 346.68, -104.3, 1, 1, 1, 335.32, -133.66, 1, 1, 1, 308.55, -155.78, 1, 1, 1, 279.55, -170.76, 1, 1, 1, 223.95, -172.03, 1, 1, 1, 162.17, -156.78, 1, 1, 1, 117.7, -137.72, 1, 1, 1, 111.16, -132.39, 1, 1, 1, 45.67, -140.38, 1, 1, 1, 7.82, -123.56, 1, 1, 1, -17.48, -98.47, 1, 1, 1, -30.14, -74.2, 1, 1, 1, -40.53, -42.73, 1, 1, 1, -43.32, 3, 1, 2, 1, -32.83, 53.26, .99892, 2, -390.83, 3.91, .00108, 2, 1, -13.19, 85.12, .99282, 2, -368.3, 33.79, .00718, 2, 1, 14.51, 113.31, .97697, 2, -338.08, 59.27, .02303, 2, 1, 35.79, 125.7, .96162, 2, -315.74, 69.61, .03838, 1, 1, 86.81, 132.48, 1, 1, 1, 91.13, 142.31, 1, 1, 1, 135.77, 187.38, 1, 1, 1, 163.03, 205.99, 1, 1, 1, 203.25, 225.2, 1, 1, 1, 246.68, 232.92, 1, 1, 1, 301.32, 232.56, 1, 1, 1, 335.66, 208.27, 1, 1, 1, 360.31, 148.44, 1, 2, 1, 381.63, 144.91, .096, 2, 30.38, 56.42, .904, 2, 2, 102.15, 50.02, .97503, 3, -41.03, 44.46, .02497, 2, 2, 192.07, 34.54, .00577, 3, 50.19, 42.4, .99423, 1, 3, 83.48, 31.28, 1, 1, 3, 96.9, 21.57, 1, 1, 3, 108.02, 11.71, 1, 1, 3, 118.11, -12.41, 1, 1, 2, -1.11, 3.28, 1, 2, 1, 177.5, 10.74, .99305, 2, -185.39, -58.08, .00695, 2, 1, 38.95, .89, .99998, 2, -324.26, -54.94, 2e-5, 3, 1, 476.66, 89.27, 68e-5, 2, 119.79, -7.86, .96164, 3, -15.04, -10.19, .03768, 1, 3, 66.65, -4.45, 1],
                    hull: 46,
                    edges: [0, 90, 0, 2, 2, 4, 4, 6, 6, 8, 8, 10, 10, 12, 12, 14, 14, 16, 16, 18, 18, 20, 20, 22, 22, 24, 24, 26, 26, 28, 28, 30, 30, 32, 32, 34, 34, 36, 36, 38, 38, 40, 40, 42, 42, 44, 44, 46, 46, 48, 48, 50, 50, 52, 52, 54, 54, 56, 56, 58, 58, 60, 60, 62, 62, 64, 64, 66, 66, 68, 68, 70, 70, 72, 72, 74, 74, 76, 76, 78, 78, 80, 80, 82, 82, 84, 84, 86, 86, 88, 88, 90],
                    width: 622,
                    height: 499
                }
            },
            "images/23": {
                "images/22": {
                    type: "mesh",
                    uvs: [.19996, .114, .26238, .20863, .28041, .22809, .33151, .27728, .34182, .28035, .3832, .23663, .44719, .23662, .45194, .22936, .48479, .20827, .52386, .20832, .55248, .22018, .61729, .20212, .66099, .20873, .71984, .25929, .77508, .36275, .80681, .45849, .80991, .48163, .86621, .53847, .89084, .57926, .89859, .63657, .88963, .70671, .84881, .79558, .78824, .85549, .73726, .88369, .68382, .89336, .63126, .87715, .58557, .83393, .57207, .82874, .47745, .83712, .39247, .80914, .32758, .76115, .26784, .68522, .25893, .60074, .29412, .51271, .29376, .50282, .22495, .41826, .1332, .2898, .11011, .23045, .10707, .17328, .12526, .12749, .15411, .10251, .22375, .29908, .34712, .43397, .60167, .54201, .77776, .68562],
                    triangles: [0, 37, 38, 38, 39, 0, 0, 39, 40, 1, 37, 0, 37, 41, 36, 1, 41, 37, 41, 1, 2, 36, 41, 35, 3, 35, 41, 42, 34, 35, 3, 42, 35, 42, 3, 4, 3, 41, 2, 33, 34, 42, 43, 30, 33, 43, 10, 11, 13, 43, 11, 13, 11, 12, 43, 13, 14, 43, 14, 15, 43, 15, 16, 6, 7, 8, 9, 6, 8, 10, 6, 9, 43, 6, 10, 44, 43, 16, 44, 16, 17, 44, 17, 18, 44, 18, 19, 20, 44, 19, 21, 44, 20, 42, 6, 43, 5, 6, 4, 29, 30, 43, 43, 28, 29, 26, 27, 43, 44, 26, 43, 27, 28, 43, 22, 44, 21, 25, 26, 44, 25, 44, 24, 22, 23, 44, 23, 24, 44, 30, 31, 32, 30, 32, 33, 42, 43, 33, 6, 42, 4],
                    vertices: [1, 6, 114.08, -56.25, 1, 3, 4, 540.3, -1.91, .00306, 5, 161.6, -60.98, .13112, 6, 40.41, -56.51, .86582, 3, 4, 522.4, -1.91, .00932, 5, 143.73, -61.9, .52334, 6, 22.78, -59.58, .46734, 2, 4, 474.02, -4.6, .344, 5, 95.55, -67.09, .656, 1, 4, 466.94, -8.25, 1, 1, 4, 460.46, -48.44, 1, 1, 4, 423.99, -79.83, 1, 1, 4, 424.12, -85.46, 1, 1, 4, 413.65, -111.16, 1, 1, 4, 391.36, -130.3, 1, 2, 4, 370.4, -138.95, .98404, 5, -.96, -206.64, .01596, 2, 4, 340.53, -178.95, 1, 5, -28.73, -248.13, 0, 1, 4, 313.03, -197.37, 1, 1, 4, 259.69, -203.24, 1, 1, 4, 187.72, -183.28, 1, 1, 4, 132.17, -155.3, 1, 1, 4, 121.34, -146.29, 1, 1, 4, 67.01, -148.05, 1, 1, 4, 37.01, -141.58, 1, 1, 4, 10.16, -119.31, 1, 1, 4, -12.18, -83.02, 1, 1, 4, -23.68, -22.58, 1, 1, 4, -12.6, 34.38, 1, 2, 4, 5.42, 72.21, .99886, 5, -376.4, -14.69, .00114, 2, 4, 32.1, 102.82, .99257, 5, -351.34, 17.27, .00743, 2, 4, 68.41, 121.22, .97622, 5, -316.04, 37.53, .02378, 1, 4, 111.36, 123.97, 1, 1, 4, 121.09, 128.24, 1, 1, 4, 171.75, 178.45, 1, 1, 4, 231.14, 207.41, 1, 1, 4, 286.91, 217.41, 1, 1, 4, 350.68, 212.17, 1, 1, 4, 388.81, 178.12, 1, 1, 4, 403.21, 120.83, 1, 2, 4, 407.28, 116.5, .904, 5, 22.62, 50.38, .096, 1, 5, 95.08, 49.42, 1, 2, 5, 198.21, 41.33, 18e-5, 6, 64.39, 49.48, .99982, 1, 6, 102.94, 40.31, 1, 1, 6, 130.9, 20.32, 1, 1, 6, 143.46, -7.69, 1, 1, 6, 141.28, -33.97, 1, 2, 5, 145.12, -1.67, .472, 6, 16.89, .38, .528, 1, 5, 22.13, -7.21, 1, 1, 4, 216.42, -16.69, 1, 1, 4, 59.85, -37.74, 1],
                    hull: 41,
                    edges: [0, 80, 0, 2, 2, 4, 4, 6, 6, 8, 8, 10, 10, 12, 12, 14, 14, 16, 16, 18, 18, 20, 20, 22, 22, 24, 24, 26, 26, 28, 28, 30, 30, 32, 32, 34, 34, 36, 36, 38, 38, 40, 40, 42, 42, 44, 44, 46, 46, 48, 48, 50, 50, 52, 52, 54, 54, 56, 56, 58, 58, 60, 60, 62, 62, 64, 64, 66, 66, 68, 68, 70, 70, 72, 72, 74, 74, 76, 76, 78, 78, 80],
                    width: 752,
                    height: 600
                }
            }
        }
    }],
    Pe = {
        animation: {
            bones: {
                bone9: {
                    rotate: [{
                        curve: 0,
                        c2: .19,
                        c3: .75
                    }, {
                        time: .3333,
                        angle: 27.12,
                        curve: .25,
                        c4: .84
                    }, {
                        time: .5
                    }],
                    translate: [{
                        curve: "stepped"
                    }, {
                        time: .5
                    }],
                    scale: [{
                        curve: "stepped"
                    }, {
                        time: .5
                    }]
                },
                bone8: {
                    rotate: [{
                        curve: 0,
                        c2: .16,
                        c3: .529,
                        c4: .68
                    }, {
                        time: .3333,
                        angle: -6.09,
                        curve: .4,
                        c2: .59,
                        c3: .775
                    }, {
                        time: .5,
                        angle: 3.43,
                        curve: 0,
                        c2: .19,
                        c3: .75
                    }, {
                        time: .6667
                    }],
                    translate: [{
                        curve: "stepped"
                    }, {
                        time: .5,
                        curve: "stepped"
                    }, {
                        time: .6667
                    }],
                    scale: [{
                        curve: "stepped"
                    }, {
                        time: .5,
                        curve: "stepped"
                    }, {
                        time: .6667
                    }]
                },
                bone7: {
                    rotate: [{
                        curve: 0,
                        c2: .19,
                        c3: .75
                    }, {
                        time: .3333,
                        angle: -19.3,
                        curve: .25,
                        c4: .84
                    }, {
                        time: .5,
                        angle: 3.12,
                        curve: 0,
                        c2: .19,
                        c3: .75
                    }, {
                        time: .6667,
                        curve: "stepped"
                    }, {
                        time: 1.3333
                    }],
                    translate: [{
                        x: 60.22,
                        y: -41.4,
                        curve: 0,
                        c2: .19,
                        c3: .75
                    }, {
                        time: .3333,
                        x: 60.22,
                        y: 133.77,
                        curve: .25,
                        c4: .84
                    }, {
                        time: .5,
                        x: 21.23,
                        y: -30.77,
                        curve: 0,
                        c2: .19,
                        c3: .75
                    }, {
                        time: .6667,
                        x: 60.22,
                        y: -41.4,
                        curve: "stepped"
                    }, {
                        time: 1.3333,
                        x: 60.22,
                        y: -41.4
                    }],
                    scale: [{
                        curve: 0,
                        c2: .19,
                        c3: .75
                    }, {
                        time: .3333,
                        x: 1.5,
                        y: 1.5,
                        curve: .25,
                        c4: .84
                    }, {
                        time: .5,
                        x: .929,
                        y: .929,
                        curve: 0,
                        c2: .19,
                        c3: .75
                    }, {
                        time: .6667,
                        curve: "stepped"
                    }, {
                        time: 1.3333
                    }]
                },
                bone15: {
                    rotate: [{
                        curve: 0,
                        c2: .19,
                        c3: .75
                    }, {
                        time: .3333,
                        angle: 11.53
                    }, {
                        time: .5
                    }],
                    translate: [{
                        curve: "stepped"
                    }, {
                        time: .5
                    }],
                    scale: [{
                        curve: "stepped"
                    }, {
                        time: .5
                    }]
                },
                bone14: {
                    rotate: [{
                        curve: 0,
                        c2: .19,
                        c3: .75
                    }, {
                        time: .3333,
                        angle: -6.32
                    }, {
                        time: .5
                    }],
                    translate: [{
                        curve: "stepped"
                    }, {
                        time: .5
                    }],
                    scale: [{
                        curve: "stepped"
                    }, {
                        time: .5
                    }]
                },
                bone13: {
                    rotate: [{
                        curve: 0,
                        c2: .19,
                        c3: .75
                    }, {
                        time: .3333,
                        angle: -1.51,
                        curve: .25,
                        c3: .976,
                        c4: .86
                    }, {
                        time: .5,
                        curve: "stepped"
                    }, {
                        time: .6667
                    }],
                    translate: [{
                        x: 75.07,
                        y: -55.62,
                        curve: 0,
                        c2: .19,
                        c3: .75
                    }, {
                        time: .3333,
                        x: 83.79,
                        y: -53.26,
                        curve: .25,
                        c3: .976,
                        c4: .86
                    }, {
                        time: .5,
                        x: 65.16,
                        y: -59.17,
                        curve: 0,
                        c2: .16,
                        c3: .462,
                        c4: .6
                    }, {
                        time: .6667,
                        x: 75.07,
                        y: -55.62
                    }],
                    scale: [{
                        curve: 0,
                        c2: .19,
                        c3: .75
                    }, {
                        time: .3333,
                        x: 1.313,
                        y: 1.313,
                        curve: .25,
                        c3: .976,
                        c4: .86
                    }, {
                        time: .5,
                        curve: "stepped"
                    }, {
                        time: .6667
                    }]
                }
            }
        }
    },
    De = {
        skeleton: Le,
        bones: Te,
        slots: Be,
        skins: Ae,
        animations: Pe
    },
    Ie = `
normal.png
size: 256,128
format: RGBA8888
filter: Linear,Linear
repeat: none
images/11
  rotate: true
  xy: 154, 2
  size: 124, 100
  orig: 124, 100
  offset: 0, 0
  index: -1
images/22
  rotate: false
  xy: 2, 6
  size: 150, 120
  orig: 150, 120
  offset: 0, 0
  index: -1
`,
    Fe = "/modules/bonus/normal-c6c700e9.png";

function Re() {
    return e.jsx($.PixiApplication, {
        width: 80,
        height: 100,
        fps: 60,
        children: e.jsx(l.Suspense, {
            fallback: null,
            children: e.jsx($.Spine, {
                x: 30,
                y: 68,
                skel: De,
                atlas: Ie,
                img: Fe,
                scale: .1
            })
        })
    })
}

function Ue() {
    return e.jsx(t.ErrorBoundary, {
        errorComponent: () => null,
        children: e.jsx(Re, {})
    })
}

function Ee(s, n) {
    let i = 360;
    if (s > 0 && n.current) {
        const a = n.current.style.transform.match(/\d+/),
            o = a ? a[0] : 0,
            c = (Math.ceil(Number(o) / 360) + 5) * 360;
        i = 360 - s * 22.5 + c
    }
    return i
}

function $e(s) {
    return h.rewardsList.map((i, a) => ({
        level: 0,
        section: a,
        currencyName: s,
        amount: t.systemStore.convertCurrency(new t.Decimal(i || 0), h.rewardsCurrency, s).toNumber(),
        locked: !1
    }))
}

function Oe() {
    let s = 0;
    const n = Object.keys(t.walletStore.state).map(a => t.walletStore.state[a]);
    return h.rewardsList.map((a, o) => {
        let c = a >= 100 ? t.walletStore.state.USDT : t.walletStore.state[h.state.randomCurrencys[o]];
        return c || (c = n[s], s++), {
            level: 0,
            section: o,
            currencyName: c.currencyName,
            amount: t.systemStore.convertCurrency(new t.Decimal(a || 0), h.rewardsCurrency, c.currencyName).toNumber(),
            locked: !1
        }
    })
}
const ze = S.memo(function(s) {
        const n = l.useRef(null),
            i = l.useRef(null),
            a = l.useRef(null),
            o = t.usePop(),
            c = t.useDialog(),
            u = s.res;
        return l.useEffect(() => {
            const r = k.timeline(),
                m = u.hitSection;
            return m > 0 && n.current && a.current && i.current ? (s.setLoading(!0), v.soundSprites.play("SpinAndBonus"), r.to(n.current, {
                rotate: Ee(m, n),
                duration: 3.6
            }), r.to(i.current, {
                scale: 1.1,
                duration: .3,
                delay: .3
            }), r.to(i.current, {
                scale: 1,
                duration: .2
            }), r.set(a.current, {
                x: -20,
                scale: 1
            }), r.to(a.current, {
                x: 200,
                skewX: -25,
                scale: 3.4,
                duration: .5,
                delay: .3
            }), r.to(i.current, {
                scale: 1,
                onComplete: () => {
                    const p = s.spinData.find(d => d.section === u.hitSection);
                    c.close(), p && o.push(e.jsx(_e, {
                        amount: p.amount,
                        currency: p.currencyName
                    }), {
                        closeable: !1
                    }), s.setLoading(!1)
                }
            })) : r.set(n.current, {
                rotate: 0
            }), () => {
                k.killTweensOf(r)
            }
        }, [u]), e.jsxs(e.Fragment, {
            children: [e.jsx("div", {
                className: "spin-wrap",
                ref: n,
                children: s.spinMain
            }), e.jsxs("div", {
                className: "point-img",
                ref: i,
                children: [e.jsx("div", {
                    className: "light-wrap",
                    children: e.jsx("div", {
                        ref: a,
                        className: "point-light"
                    })
                }), s.spinPoint]
            })]
        })
    }),
    Me = S.memo(function(c) {
        var u = c,
            {
                res: n,
                fiat: i,
                children: a
            } = u,
            o = U(u, ["res", "fiat", "children"]);
        const [r, m] = l.useState(!1), p = x.useAnimation(), [d, w] = l.useState(!0), y = i ? $e(o.currency) : Oe(), f = l.useMemo(() => ({
            initial: {
                opacity: 0,
                scale: .3,
                rotate: -30
            },
            animate: {
                opacity: 1,
                scale: 1,
                rotate: 0
            },
            transition: {
                duration: .5
            }
        }), [i]);

        function L() {
            r || (v.soundSprites.play("Click"), w(!1), o.onSpin())
        }
        l.useEffect(() => {
            p.set(f.initial), p.start(f.animate)
        }, [o.currency]);
        const {
            spinPoint: T,
            spinMain: B,
            spinBtn: A
        } = je(r, i, L, y);
        return e.jsxs("div", {
            className: Ve,
            children: [e.jsx(x.AnimatePresence, {
                children: e.jsx(x.motion.div, b(j({
                    className: We
                }, f), {
                    animate: p,
                    children: e.jsx(ze, {
                        res: n,
                        spinData: y,
                        setLoading: m,
                        spinMain: B,
                        spinPoint: T
                    }, o.currency)
                }))
            }), d && e.jsx(Ue, {}), A, a]
        })
    }),
    We = "s1c1y24o",
    Ve = "s119z0yr";

function Ge() {
    const {
        t: s
    } = t.useTranslation(), n = t.useWallet();
    return i => {
        const o = t.env.localCurrencys.filter(c => n[c.value]).map(c => c.value).map(c => ({
            label: c,
            value: c
        }));
        return i && o.unshift({
            label: s("Crypto"),
            value: "Crypto"
        }), o
    }
}

function qe({
    currency: s,
    onChange: n,
    hasCrypto: i,
    fiat: a
}) {
    const {
        t: o
    } = t.useTranslation(), u = Ge()(i);
    return e.jsx(t.Select, {
        className: g(He, a && "fiat"),
        value: s,
        options: u,
        onChange: n,
        top: !0,
        renderLabel: r => {
            const m = r.value === "Crypto";
            return e.jsxs(e.Fragment, {
                children: [e.jsx(t.BC.CoinIcon, {
                    name: m ? "BTC" : r.value
                }), e.jsx("div", {
                    className: "alias",
                    children: m ? o("Cash") : t.systemStore.getAlias(r.value)
                })]
            })
        },
        renderOption: r => {
            const m = r.value === "Crypto";
            return e.jsxs(e.Fragment, {
                children: [e.jsx(t.BC.CoinIcon, {
                    name: m ? "BTC" : r.value
                }), e.jsx("div", {
                    className: "alias",
                    children: m ? o("Crypto") : t.systemStore.getAlias(r.value)
                })]
            })
        }
    })
}
const He = "s1nmsfqf",
    Qe = "/modules/bonus/crypto_head-fac8ff84.png",
    Xe = "/modules/bonus/fiat_head-87c5ae3f.png";

function Ye() {
    const s = t.env.isBrHost,
        n = t.env.host === "bcgame.ke",
        i = t.useAccount(),
        a = t.usePop(),
        o = t.useMountedState(),
        c = t.env.initSearchParams.get("bcn") || "",
        {
            t: u
        } = t.useTranslation(),
        [r, m] = l.useState(!1),
        p = ee(i.bonusCurrencyName, c.toLocaleUpperCase()),
        [d, w] = l.useState(p),
        y = d !== "Crypto",
        f = h.rewardsList[h.rewardsList.length - 1],
        [L, T] = t.useSetState({
            spinNumber: 0,
            hitSection: 0,
            loading: !1
        }),
        B = (N, C) => {
            const V = t.systemStore.getCurrencySymbol(N),
                G = t.systemStore.convertCurrency(new t.Decimal(C || "0"), "USD", N),
                q = te(G.toNumber());
            return V + t.utils.numberWithCommas(!1, q, 0)
        },
        A = l.useCallback(function() {
            const C = h.target;
            t.app.emit("track", "spin_roll_click"), T({
                spinNumber: C,
                hitSection: C
            })
        }, []);
    l.useEffect(() => {
        t.accountStore.initData.then(() => {
            o() && (m(!0), h.initFn())
        })
    }, []);

    function W() {
        a.close(), t.app.emit("track", "spin_close")
    }
    return e.jsxs(t.Pop, {
        className: g(Je, y && "fiat-spin"),
        children: [e.jsx(t.CloseIcon, {
            onClick: W
        }), r ? e.jsxs(t.ScrollView, {
            id: "spin",
            children: [e.jsxs("div", {
                className: "spin-cont",
                children: [e.jsxs("div", {
                    className: "head",
                    style: {
                        backgroundImage: y ? `url(${Xe})` : `url(${Qe})`
                    },
                    children: [e.jsx("div", {
                        className: "txt ttu",
                        children: u("Spin To Win")
                    }), e.jsx("div", {
                        className: "amount",
                        children: y ? B(d, f) : `${f}USDT`
                    })]
                }), e.jsx(Me, {
                    fiat: y,
                    res: L,
                    onSpin: A,
                    currency: d,
                    setCurrency: w
                }), !s && !n && e.jsx(qe, {
                    hasCrypto: !0,
                    fiat: y,
                    currency: d,
                    onChange: N => w(N)
                })]
            }), e.jsx("div", {
                className: "bg bg-a"
            }), e.jsx("div", {
                className: "bg bg-b"
            }), e.jsx("div", {
                className: "bg bg-c"
            }), e.jsx(ce, {
                className: "spin-footer",
                spinLoading: !1
            }), e.jsx(t.Portal.Target, {
                id: "spin-winlist"
            })]
        }) : e.jsx(t.Loading, {})]
    })
}
const Ze = K(Ye),
    Je = "s11yeso3",
    tt = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Ze
    }, Symbol.toStringTag, {
        value: "Module"
    }));
export {
    Ze as N, se as S, ce as a, tt as i
};