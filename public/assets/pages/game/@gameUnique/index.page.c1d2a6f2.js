var ss = Object.defineProperty;
var K = Object.getOwnPropertySymbols;
var as = Object.prototype.hasOwnProperty,
    ts = Object.prototype.propertyIsEnumerable;
var O = (x, u, f) => u in x ? ss(x, u, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: f
    }) : x[u] = f,
    q = (x, u) => {
        for (var f in u || (u = {})) as.call(u, f) && O(x, f, u[f]);
        if (K)
            for (var f of K(u)) ts.call(u, f) && O(x, f, u[f]);
        return x
    };
import {
    j as e
} from "../../../chunk-a4af42e8.js";
import {
    eg as C,
    eh as Y,
    ev as h,
    ck as ns,
    ds as rs,
    a as _,
    cp as is,
    cJ as b,
    cS as N,
    dx as cs,
    cz as os,
    d0 as ls,
    e3 as ms,
    cL as Z,
    ap as J,
    dL as V,
    dO as ds,
    cA as W,
    cT as R,
    ci as L,
    dy as I,
    du as S,
    ed as us,
    dk as A,
    eq as hs,
    dr as xs,
    dZ as ps,
    e5 as T,
    d9 as js,
    cl as U,
    cB as Q,
    dd as gs,
    cZ as fs,
    e6 as X,
    dg as ee,
    __tla as vs
} from "../../../chunk-64278058.js";
import {
    r as l,
    R as g
} from "../../../chunk-73e80d68.js";
import {
    c as j
} from "../../../chunk-5bcb444f.js";
import {
    _ as Ns
} from "../../../chunk-cf010ec4.js";
import {
    G as ys
} from "../../../chunk-42f5abfc.js";
import {
    P as bs
} from "../../../chunk-8ff98a5d.js";
import {
    p as ks
} from "../../../chunk-569cb855.js";
import {
    g as ws,
    R as _s,
    P as Cs,
    C as Is
} from "../../../chunk-a4cceeaf.js";
import {
    w as M
} from "../../../chunk-e20af49b.js";
import {
    i as Ss,
    b as Ts,
    j as Us,
    k as Ps,
    g as qs
} from "../../../chunk-cf8d333b.js";
import {
    C as Rs,
    __tla as Ls
} from "../../../chunk-f0f89bbe.js";
import {
    H as As
} from "../../../chunk-c300dd90.js";
import {
    C as Es,
    e as Vs,
    G as Ws
} from "../../../chunk-4142ea66.js";
import "../../../chunk-55136115.js";
import {
    __tla as Ms
} from "../../../chunk-7a9ca7ff.js";
import "../../../chunk-405456f5.js";
import "../../../chunk-de5e47f6.js";
import "../../../chunk-29a4230f.js";
import "../../../chunk-8d9c7a4a.js";
import {
    __tla as $s
} from "../../../chunk-07d6de63.js";
import "../../../chunk-fb34d5f5.js";
import "../../../chunk-ebb6ff7f.js";
import "../../../chunk-f1a029f1.js";
import "../../../chunk-9a1dea26.js";
import {
    __tla as Fs
} from "../../../chunk-654ef298.js";
let se, ae, te, Hs = Promise.all([(() => {
    try {
        return vs
    } catch (x) {}
})(), (() => {
    try {
        return Ls
    } catch (x) {}
})(), (() => {
    try {
        return Ms
    } catch (x) {}
})(), (() => {
    try {
        return $s
    } catch (x) {}
})(), (() => {
    try {
        return Fs
    } catch (x) {}
})()]).then(async () => {
    function x() {
        const {
            routeParams: s
        } = C();
        return s.gameUnique
    }
    const u = Y;
    l.createContext({});
    const f = g.memo(function({
            categoryId: s,
            fullName: a,
            gameUnique: t,
            info: n,
            history: r,
            strategyCreator: o
        }) {
            const {
                t: i
            } = h(), {
                urlParsed: m
            } = C();

            function c(d) {
                return d === 4 ? {
                    label: i("Live"),
                    path: "/gamelist/live"
                } : d === 18 ? {
                    label: i("{{site}} Originals", {
                        site: rs.siteName
                    }),
                    path: "/gamelist/brand"
                } : {
                    label: i("Slots"),
                    path: "/gamelist/slots"
                }
            }
            const p = [c(s), {
                label: a,
                path: `/game/${t}`
            }];
            return n && p.push({
                label: i("Info"),
                path: ""
            }), r ? p.push({
                label: i("History"),
                path: ""
            }) : o && p.push({
                label: m.search.name,
                path: ""
            }), e.jsx(ns, {
                list: p
            })
        }),
        ne = g.memo(function() {
            const {
                t: s
            } = h(), [a, t] = l.useState("");
            return l.useEffect(() => {
                _.on("game-top-nav-bonus-monty-tips", n => {
                    t(n)
                })
            }, []), !a || a === "" ? null : e.jsxs("div", {
                className: re,
                children: [e.jsx(is, {
                    onClick: () => t("")
                }), e.jsx("div", {
                    className: "check",
                    children: e.jsx(b, {
                        name: "Check"
                    })
                }), e.jsxs("p", {
                    className: "desc",
                    children: [e.jsx("span", {
                        children: s("Congrats! You have successfully unlocked your bonus money totaling: ")
                    }), e.jsx("span", {
                        className: "mo",
                        children: a
                    })]
                })]
            })
        }),
        re = "bm4ycac";

    function $({
        history: s,
        strategyCreator: a
    }) {
        const t = u().gameInfo.read();
        return e.jsxs("div", {
            className: j(ie, "game-top-nav-wrap"),
            children: [e.jsx(f, {
                gameUnique: t.gameUnique,
                categoryId: t.categoryId,
                fullName: t.fullName,
                history: s,
                strategyCreator: a
            }), t.categoryId !== 18 && e.jsxs("div", {
                className: "provider",
                children: [e.jsx("span", {
                    className: "tit_by",
                    children: " By "
                }), e.jsx(N, {
                    href: `/provider/${t.providerName}`,
                    className: "under_txt",
                    children: t.providerName
                })]
            }), e.jsx(ne, {})]
        })
    }
    const ie = "t1m66kj2",
        ce = cs(() => Ns(() =>
            import ("../../../LiveStatsContent.a785829e.js"), ["assets/LiveStatsContent.a785829e.js", "assets/chunk-a4af42e8.js", "assets/chunk-73e80d68.js", "assets/chunk-64278058.js", "assets/chunk-cf010ec4.js", "assets/chunk-f9e44b2a.js", "assets/chunk-5bcb444f.js", "assets/LiveStatsContent.27d0be88.css"])),
        oe = l.memo(function() {
            const {
                t: s
            } = h(), [a, t] = l.useState(!1);
            l.useEffect(() => (_.on("livestate_toggle", t), () => {
                _.off("livestate_toggle", t)
            }), []);
            const [n] = l.useState({
                x: (window.innerWidth - _.relativePx(300)) / 2,
                y: window.innerHeight / 2
            });
            return e.jsx(os, {
                x: n.x,
                y: n.y,
                title: s("Live Stats"),
                visible: a,
                onClose: () => t(!1),
                children: e.jsx(ls, {
                    className: le,
                    bodyLock: !1,
                    children: a && e.jsx(ce, {})
                })
            })
        }),
        le = "c1ld52o8",
        me = l.memo(function({
            logo: s,
            logo_w: a
        }) {
            const t = ms();
            return e.jsx(Z, {
                src: t ? s : a,
                args: "w=200",
                alt: ""
            })
        }),
        de = g.memo(function() {
            const {
                t: s
            } = h(), a = u().gameInfo.read(), t = a.providerInfo;
            return e.jsxs("div", {
                className: ue,
                children: [e.jsx("div", {
                    className: "box-title",
                    children: s("About The Provider")
                }), e.jsxs("div", {
                    className: "provider-wrap",
                    children: [e.jsx("div", {
                        className: "provider-banner",
                        children: e.jsx(me, {
                            logo: t.logo,
                            logo_w: t.logoWhite
                        })
                    }), e.jsx("div", {
                        className: "provider-introduce",
                        dangerouslySetInnerHTML: {
                            __html: J(t.introduction)
                        }
                    }), e.jsxs(N, {
                        href: `/provider/${a.providerName}`,
                        className: "opt-btn",
                        children: [t.totalGame, " ", s("Games"), " ", e.jsx(b, {
                            name: "Arrow"
                        })]
                    }), e.jsx(N, {
                        href: `/provider/${a.providerName}`,
                        className: "opt-btn",
                        children: s("More Info")
                    })]
                })]
            })
        }),
        ue = "scmn7je",
        he = g.memo(function() {
            const {
                t: s
            } = h(), a = u().gameInfo.read(), {
                introduction: t
            } = u().gameIntroduction.read(), n = t.replaceAll("[GAMENAME]", a.fullName), r = a.slotsInfo;
            return e.jsxs("div", {
                className: pe,
                children: [e.jsxs("div", {
                    className: "game-img-and-desc",
                    children: [e.jsx(Z, {
                        className: "game-banner",
                        src: a.thumbnail,
                        args: "w=200",
                        alt: ""
                    }), e.jsxs("div", {
                        className: "right-desc",
                        children: [a.tags && e.jsx("div", {
                            className: "game-tags",
                            children: a.tags.map(o => e.jsx(N, {
                                href: `/tagname/${o}`,
                                className: "tag-item",
                                children: a.translatedTags ? a.translatedTags[o] : o
                            }, o))
                        }), e.jsxs("div", {
                            className: "intros",
                            children: [e.jsxs("div", {
                                className: "left-intros",
                                children: [e.jsx(y, {
                                    title: s("RTP (Return to Player)"),
                                    introValue: r.rtpDes,
                                    classType: "g",
                                    config: {
                                        isPercent: !0
                                    }
                                }), e.jsx(y, {
                                    title: s("Reel Resign"),
                                    introValue: r.reelDesign,
                                    classType: "w"
                                }), e.jsx(y, {
                                    title: s("Lucky Spin"),
                                    introValue: r.freeSpins,
                                    classType: "w",
                                    config: {
                                        isSpin: !0
                                    }
                                }), e.jsx(y, {
                                    title: s("Win Ways"),
                                    introValue: r.winWays,
                                    classType: "w"
                                })]
                            }), e.jsxs("div", {
                                className: "right-intros",
                                children: [e.jsx(y, {
                                    title: s("Max Win"),
                                    introValue: r.maxWin,
                                    classType: "g"
                                }), e.jsx(y, {
                                    title: s("Hit Rate"),
                                    introValue: r.hitRate,
                                    classType: "w",
                                    config: {
                                        isPercent: !0
                                    }
                                }), e.jsx(y, {
                                    title: s("Volatility"),
                                    introValue: r.volatility,
                                    classType: "y",
                                    config: {
                                        isVolatility: !0
                                    }
                                }), e.jsx(y, {
                                    title: s("Stakes Range"),
                                    introValue: r.stakeRange,
                                    classType: "g"
                                })]
                            })]
                        })]
                    })]
                }), t && e.jsxs("div", {
                    className: "game-intro",
                    children: [e.jsx("h2", {
                        className: "desc-title",
                        children: e.jsx("strong", {
                            children: s("About this game")
                        })
                    }), e.jsx("div", {
                        className: "desc-content",
                        dangerouslySetInnerHTML: {
                            __html: J(n)
                        }
                    })]
                })]
            })
        });

    function xe(s, a) {
        const {
            t
        } = h();
        if (s === null || !s) return "--";
        if (a.isVolatility) switch (s) {
            case 1:
                return t("Low");
            case 2:
                return t("Medium");
            default:
                return t("High")
        } else return a.isSpin ? Number(s) > 0 ? t("Yes") : t("No") : typeof s == "boolean" ? t(s ? "Yes" : "No") : a.isPercent ? s + "%" : String(s)
    }
    const y = g.memo(function({
            introValue: s,
            title: a,
            config: t = {},
            classType: n = ""
        }) {
            const r = !!s,
                o = xe(s, t);
            return e.jsxs("div", {
                className: j("intro-item", r ? "" : "hidden-value"),
                children: [e.jsx("p", {
                    children: a
                }), e.jsx("p", {
                    className: r ? n : "",
                    children: o
                })]
            })
        }),
        pe = "d1i1owal";

    function F({
        num: s,
        size: a,
        activeNum: t = 0
    }) {
        return e.jsx("div", {
            className: j("star-wrap", Ne),
            children: new Array(5).fill(null).map((n, r) => e.jsx(b, {
                className: j(a, t - 1 >= r && "active", r >= s && "hide"),
                name: "Favorites1"
            }, r))
        })
    }

    function je({
        gameUnique: s,
        myScore: a,
        setUpdate: t
    }) {
        const [n, r] = l.useState(0), [o, i] = l.useState(!1), {
            t: m
        } = h(), c = V(), p = l.useCallback(function(d) {
            if (a === d) return;
            if (o) return !1;
            if (c.vipLevel < 4) {
                I(m("Unlock at VIP 4"));
                return
            }
            i(!0);
            const k = m("Thanks for your feedback");
            S.post("/comment/star/tap/", {
                gameUnique: s,
                rank: d
            }).then(w => {
                I(k), i(!1), t(d)
            }).catch(w => {
                i(!1), I(w)
            })
        }, [a]);
        return e.jsx("div", {
            className: j("star-wrap", ye),
            children: [1, 2, 3, 4, 5].map(d => e.jsx(b, {
                onMouseEnter: () => r(d),
                onClick: () => p(d),
                onMouseLeave: () => r(0),
                className: j(a >= d && "active", n >= d && "active", n > 0 && d > n && d <= a && "disactive", "big"),
                name: a >= d || n >= d ? "Favorites1" : "Star"
            }, d))
        })
    }

    function ge(s) {
        return new Array(5).fill(null).map((a, t) => {
            var n;
            return {
                star: 5 - t,
                percent: (n = s[`${5-t}`]) != null ? n : "0"
            }
        })
    }
    async function fe(s) {
        try {
            return await S.post("/comment/star/scores/", {
                gameUnique: s
            })
        } catch (a) {
            return {
                avg: "",
                scores: {},
                my: 0,
                count: 0,
                users: []
            }
        }
    }
    const ve = l.memo(function({
            gameUnique: s
        }) {
            const {
                t: a
            } = h(), t = V().login, [n, r] = l.useState(0), {
                data: o,
                error: i
            } = ds(() => fe(s), [t, n, s]);
            return i ? e.jsx("div", {
                className: E,
                children: e.jsx("div", {
                    className: "ratings-wrap",
                    style: {
                        height: "250px"
                    },
                    children: e.jsx(W, {
                        children: i.message
                    })
                })
            }) : o ? e.jsx("div", {
                className: E,
                children: e.jsxs("div", {
                    className: "ratings-wrap",
                    children: [e.jsxs("div", {
                        className: "top-wrap",
                        children: [e.jsxs("div", {
                            className: "game-star",
                            children: [e.jsxs("div", {
                                className: "grade-num",
                                children: [e.jsx("span", {
                                    className: "avg",
                                    children: o.avg ? Number(o.avg).toFixed(1) : 0
                                }), e.jsx("span", {
                                    className: "m-txt",
                                    children: "/5"
                                })]
                            }), e.jsxs("div", {
                                className: "",
                                children: [e.jsx(F, {
                                    num: 5,
                                    activeNum: Math.ceil(Number(o.avg))
                                }), e.jsx("div", {
                                    className: "txt",
                                    children: "out of 5"
                                })]
                            })]
                        }), e.jsx("div", {
                            className: "star-progress",
                            children: ge(o.scores).map((m, c) => e.jsxs("div", {
                                className: "progress-item",
                                children: [e.jsx(F, {
                                    num: m.star,
                                    size: "small"
                                }), e.jsx("div", {
                                    className: "progress-bg",
                                    children: e.jsx("div", {
                                        className: "progress",
                                        style: {
                                            width: m.percent + "%"
                                        }
                                    })
                                })]
                            }, c))
                        })]
                    }), e.jsxs("div", {
                        className: "bottom-wrap",
                        children: [e.jsxs("div", {
                            className: "rate-game",
                            children: [e.jsx("div", {
                                className: "txt",
                                title: a("Rate this Game"),
                                children: a("Rate this Game")
                            }), e.jsx(je, {
                                gameUnique: s,
                                myScore: o.my,
                                setUpdate: r
                            })]
                        }), e.jsxs("div", {
                            className: "rate-user",
                            children: [e.jsx("div", {
                                className: "user-avatar",
                                children: o.users.map(m => e.jsx(L.Avatar, {
                                    userId: m,
                                    name: ""
                                }, m))
                            }), e.jsxs("div", {
                                className: "rate-num",
                                children: [o.count, " ", a("Ratings")]
                            })]
                        })]
                    })]
                })
            }) : e.jsx("div", {
                className: E,
                children: e.jsx("div", {
                    className: "ratings-wrap",
                    style: {
                        height: "200px"
                    },
                    children: e.jsx(R, {})
                })
            })
        }),
        E = "szx7awb",
        Ne = "svizgii",
        ye = "hm27ask";

    function H() {
        const {
            routeParams: s
        } = C();
        return s.gameUnique
    }
    const D = Y;
    l.createContext({});
    const be = l.memo(function({
            makeUrl: s
        }) {
            const {
                t: a
            } = h(), t = us(), n = H(), r = V(), o = async () => {
                if (!r.login) {
                    t("#/login");
                    return
                }
                if (r.vipLevel < 4) {
                    I(a("Unlock at VIP 4"));
                    return
                }
                async function i(m) {
                    const c = await ks(m);
                    c && S.post("/comment/add/", {
                        content: c.content,
                        gameUnique: n
                    }).then(p => {
                        t(s({
                            page: 1,
                            force: !0
                        }))
                    }).catch(p => {
                        i(c.content), I(p)
                    })
                }
                i("")
            };
            return e.jsxs("div", {
                className: ke,
                children: [e.jsx(A, {
                    children: r.login && e.jsx(L.Avatar, {
                        userId: r.userId,
                        name: r.name
                    })
                }), e.jsxs("button", {
                    className: "comment-input-btn",
                    onClick: o,
                    children: [e.jsx("p", {
                        children: a("Leave your comment")
                    }), e.jsx(b, {
                        name: "Emjoy"
                    })]
                })]
            })
        }),
        ke = "c1b59e1q",
        we = g.memo(function({
            comment: s,
            deleteComment: a
        }) {
            const t = l.useRef(-1),
                n = H(),
                [r, o] = hs(ws(s)),
                i = l.useCallback(m => {
                    t.current < 0 && (t.current = 1, S.post("/comment/reply/list/", {
                        commentId: s.commentId,
                        page: 1,
                        pageSize: 20
                    }).then(c => {
                        c && (c.list.length > 3 ? (xs.push(e.jsx(_s, {
                            gameUnique: n,
                            deleteFn: () => a(),
                            replyHttpInfo: c,
                            commentId: s.commentId
                        })), m(!1)) : (o({
                            replyList: c.list
                        }), m(!0)))
                    }).catch(I).finally(() => t.current = -1))
                }, []);
            return e.jsx(Cs, {
                gameUnique: n,
                commentInfo: r.comment,
                replyInfoList: r.replyList,
                deleteComment: a,
                inPop: !1,
                getAllReplies: i
            })
        }),
        _e = g.memo(function({
            loading: s,
            comment: a,
            nextHref: t,
            deleteComment: n
        }) {
            const {
                t: r
            } = h(), o = a ? a.list || [] : [];
            if (!a || o.length === 0) return e.jsx("div", {
                className: Ce,
                children: e.jsx(W, {})
            });
            const i = a.totalPage - a.page;
            return e.jsx("div", {
                className: Ie,
                children: e.jsxs("div", {
                    className: "overflow-inner",
                    children: [o.map((m, c) => e.jsx(we, {
                        deleteComment: () => n(c),
                        comment: m
                    }, `${m.commentId}-${c}`)), i > 0 && e.jsx("div", {
                        className: "loading-more",
                        children: s ? e.jsx(R, {}) : t && e.jsxs(N, {
                            className: "more-link",
                            href: t,
                            children: [e.jsx("p", {
                                children: r("View More Comments")
                            }), e.jsx(b, {
                                name: "Arrow"
                            })]
                        })
                    })]
                })
            })
        }),
        Ce = "l1ogepnv",
        Ie = "c13isd5j",
        Se = g.memo(function() {
            const {
                t: s
            } = h(), a = ps(), {
                urlParsed: t
            } = C(), n = t.search.sort || "createTime", {
                gameComment: r
            } = D(), [o, i] = l.useTransition(), [m, c] = l.useState(r), p = m.read(), d = l.useRef(null);
            d.current = l.useMemo(() => {
                const v = d.current;
                return v && p.page !== 1 && p.list.unshift(...v.list), p
            }, [p]);

            function k(v) {
                v.force && (v.force = Date.now());
                const B = q(q({}, t.search), v);
                return v.force || delete B.force, `${t.pathname}?${new URLSearchParams(B).toString()}`
            }
            l.useEffect(() => {
                r !== m && i(() => {
                    c(r)
                })
            }, [r]);
            const w = d.current,
                es = v => {
                    w.list.splice(v, 1), w.total -= 1, d.current = q({}, w), a()
                };
            return e.jsxs("div", {
                className: j(Te, "comment-wrap"),
                children: [e.jsxs("div", {
                    className: "comment-num-title",
                    children: [e.jsx("div", {
                        className: "cut-l tit",
                        children: e.jsx("p", {
                            children: s("Comments")
                        })
                    }), e.jsxs(Is, {
                        iconElement: e.jsx(b, {
                            name: "Tighten"
                        }),
                        children: [e.jsx(N, {
                            className: j("click-pop-item", n === "createTime" && "select"),
                            href: k({
                                sort: "createTime",
                                page: 1,
                                force: !0
                            }),
                            children: s("Newest First")
                        }), e.jsx(N, {
                            className: j("click-pop-item", n === "replyCount" && "select"),
                            href: k({
                                sort: "replyCount",
                                page: 1,
                                force: !0
                            }),
                            children: s("Top Comments")
                        }), e.jsx(N, {
                            className: j("click-pop-item", n === "likeCount" && "select"),
                            href: k({
                                sort: "likeCount",
                                page: 1,
                                force: !0
                            }),
                            children: s("Top Likes")
                        })]
                    })]
                }), e.jsx(be, {
                    makeUrl: k
                }), e.jsx(_e, {
                    deleteComment: es,
                    loading: o,
                    nextHref: p.page < p.totalPage ? k({
                        page: p.page + 1
                    }) : void 0,
                    comment: w
                })]
            })
        }),
        Te = "c1gc6kol";

    function Ue() {
        return e.jsx(l.Suspense, {
            fallback: e.jsx(R, {}),
            children: e.jsx(Se, {})
        })
    }
    const Pe = g.memo(function() {
            const s = x();
            return e.jsxs("div", {
                className: qe,
                children: [e.jsx(ve, {
                    gameUnique: s
                }), e.jsx(Ue, {})]
            })
        }),
        qe = "ro52fuk",
        Re = [M.gold, M.silver, M.copper];

    function Le(s) {
        const a = new Date(s),
            t = {
                year: "numeric",
                month: "long",
                day: "numeric"
            };
        return a.toLocaleDateString("en-US", t)
    }
    const G = g.memo(function({
            tableList: s
        }) {
            const {
                t: a
            } = h(), t = T();
            return s.length === 0 ? e.jsx(W, {}) : e.jsx("div", {
                className: Ae,
                children: e.jsxs(js, {
                    children: [e.jsx("thead", {
                        children: e.jsxs("tr", {
                            children: [e.jsx("th", {
                                children: a("Rank")
                            }), e.jsx("th", {
                                children: a("Player")
                            }), !t && e.jsxs(e.Fragment, {
                                children: [e.jsx("th", {
                                    children: a("Time")
                                }), e.jsx("th", {
                                    children: a("Bet Amount")
                                })]
                            }), e.jsx("th", {
                                children: a("Payout")
                            }), e.jsx("th", {
                                children: a("Win Amount")
                            })]
                        })
                    }), e.jsx("tbody", {
                        children: s.map((n, r) => e.jsxs("tr", {
                            children: [e.jsxs("td", {
                                className: "center",
                                children: [e.jsx("img", {
                                    className: "user-ico",
                                    src: Re[r]
                                }), e.jsx("span", {
                                    children: r + 1
                                })]
                            }), e.jsx("td", {
                                className: "w",
                                children: n.nickName
                            }), !t && e.jsxs(e.Fragment, {
                                children: [e.jsx("td", {
                                    children: Le(n.createTime)
                                }), e.jsx("td", {
                                    className: "w",
                                    children: e.jsx(L.CoinFormat, {
                                        name: n.currencyName,
                                        disableLocal: !0,
                                        icon: !0,
                                        amount: Number(n.betAmount)
                                    })
                                })]
                            }), e.jsxs("td", {
                                children: [(n.odds / 1e4).toFixed(2), "\xD7"]
                            }), e.jsx("td", {
                                className: "g",
                                children: e.jsx(L.CoinFormat, {
                                    name: n.currencyName,
                                    disableLocal: !0,
                                    icon: !0,
                                    amount: Number(n.winAmount)
                                })
                            })]
                        }))
                    })]
                })
            })
        }),
        Ae = "w38v53o",
        Ee = g.memo(function({
            tableInfo: s
        }) {
            const {
                t: a
            } = h(), [t, n] = l.useState(0);
            return e.jsxs("div", {
                className: Ve,
                children: [e.jsxs("div", {
                    className: "game-desc-tabs",
                    children: [e.jsx(U, {
                        className: j(t === 0 && "active"),
                        onClick: () => n(0),
                        children: a("Big Win")
                    }), e.jsx(U, {
                        className: j(t === 1 && "active"),
                        onClick: () => n(1),
                        children: a("Lucky Win")
                    }), e.jsx(U, {
                        className: j(t === 2 && "active"),
                        onClick: () => n(2),
                        children: a("Description")
                    }), e.jsx(U, {
                        className: j(t === 3 && "active"),
                        onClick: () => n(3),
                        children: a("Review")
                    })]
                }), t === 0 && e.jsx(P, {
                    children: e.jsx(G, {
                        tableList: s.bigWinRank
                    })
                }), t === 1 && e.jsx(P, {
                    children: e.jsx(G, {
                        tableList: s.luckyWinRank
                    })
                }), t === 2 && e.jsx(P, {
                    children: e.jsx(he, {})
                }), t === 3 && e.jsx(P, {
                    children: e.jsx(Pe, {})
                })]
            })
        }),
        P = g.memo(({
            children: s
        }) => e.jsx(Q, {
            children: e.jsx(l.Suspense, {
                fallback: e.jsx(R, {}),
                children: s
            })
        })),
        Ve = "t1a4cnqf",
        We = "/assets/trophy.9b1b3ddb.png",
        Me = {
            trophy: We
        },
        $e = g.memo(function() {
            h();
            const s = u().gameInfo.read(),
                [a, t] = l.useState({
                    open: !1
                }),
                [n, r] = l.useState({
                    bigWinRank: [],
                    luckyWinRank: []
                });

            function o(m) {
                S.get(`/game/support/home/get-rank/${m}/`).then(c => {
                    c && r(c)
                })
            }
            l.useEffect(() => {
                o(s.gameUnique)
            }, [s.gameUnique]);
            const i = l.useMemo(() => n.luckyWinRank[0], [n]);
            return e.jsxs("div", {
                className: Fe,
                children: [e.jsxs("div", {
                    className: "game-desc-wrap",
                    children: [e.jsxs("div", {
                        className: "left-fullname",
                        children: [e.jsx("h2", {
                            children: s.fullName
                        }), e.jsxs("div", {
                            className: "provider",
                            children: [e.jsx("span", {
                                children: "By"
                            }), e.jsx(N, {
                                href: `/provider/${s.providerName}`,
                                children: s.providerName
                            })]
                        })]
                    }), e.jsxs("div", {
                        className: j("right-tigger", a.open && "open"),
                        children: [i && e.jsxs("div", {
                            className: "first-box",
                            children: [e.jsx("img", {
                                src: Me.trophy
                            }), e.jsxs("span", {
                                children: [i.oddsString ? i.oddsString : (i.odds / 1e4).toFixed(2), "\xD7"]
                            }), e.jsx("span", {
                                children: i.nickName
                            })]
                        }), e.jsx(U, {
                            onClick: () => t({
                                open: !a.open
                            }),
                            children: e.jsx(b, {
                                name: "Arrow"
                            })
                        })]
                    })]
                }), e.jsx(gs, {
                    visible: a.open,
                    children: e.jsx(Ee, {
                        tableInfo: n
                    })
                })]
            })
        }),
        Fe = "g1tep4lm",
        He = g.memo(function() {
            const {
                t: s
            } = h(), a = u(), t = x(), n = a.gameRelated, r = a.gameInfo, o = l.useCallback(() => r.read().gameIdentity.gameInfoId, [r]);
            return e.jsxs("div", {
                className: De,
                children: [e.jsx($e, {}), e.jsx(ys, {
                    source: n,
                    originalId: o,
                    className: "related-games",
                    line: 1,
                    title: s("Recommended Games"),
                    link: `/gamelist/game-related?gameUnique=${t}`
                }), e.jsx("div", {
                    className: "box-title",
                    children: s("Latest bet & Race")
                }), e.jsx("div", {
                    className: "latest",
                    children: e.jsx(fs.Target, {
                        id: `tabs-${t}`
                    })
                }), e.jsx(de, {}), e.jsx(bs, {})]
            })
        }),
        De = "sh9ik1h";

    function Ge({
        children: s
    }) {
        const a = T(),
            t = x();
        return X(() => {
            (document.scrollingElement || document.body).scrollTop = 0
        }, [t]), e.jsxs(e.Fragment, {
            children: [e.jsx(ze, {}), e.jsx(A, {
                children: e.jsx(oe, {})
            }), e.jsxs("div", {
                className: j(Be, "page-max-width-wrap"),
                id: "game-layout",
                children: [!a && e.jsx($, {}), e.jsx(A, {
                    children: s
                }), e.jsx(Q, {
                    children: e.jsx(He, {})
                })]
            })]
        })
    }

    function ze() {
        const s = u().gameInfo.read();
        return e.jsx(Ke, {
            disabled: s.disabled,
            name: s.fullName
        })
    }
    const Be = "ss09y91";

    function Ke({
        name: s,
        disabled: a
    }) {
        const t = () => {
            _.emit("live_support", !0)
        };
        return h(), a ? e.jsx("div", {
            onClick: t,
            className: Oe,
            children: e.jsxs(ee, {
                name: s,
                i18nKey: "trans.mainpage.casino.desc",
                children: ["Sorry, ", {
                    name: s
                }, " is temporarily disabled for some reason. Please ", e.jsx("span", {
                    className: "cl-primary",
                    children: "contact customer support"
                }), " for help, or try another game."]
            })
        }) : null
    }
    const Oe = "sxhkg6h";

    function z({
        children: s,
        breadcrumbs: a
    }) {
        const t = T(),
            n = x();
        return X(() => {
            (document.scrollingElement || document.body).scrollTop = 0
        }, [n]), e.jsxs(e.Fragment, {
            children: [e.jsx(Ye, {}), e.jsxs("div", {
                className: j(Ze, "page-max-width-wrap"),
                id: "game-layout",
                children: [!t && e.jsx($, {
                    history: a === "history",
                    strategyCreator: a === "creator"
                }), e.jsx(A, {
                    children: s
                })]
            })]
        })
    }

    function Ye() {
        const s = u().gameInfo.read();
        return e.jsx(Je, {
            disabled: s.disabled,
            name: s.fullName
        })
    }
    const Ze = "s1fb83o6";

    function Je({
        name: s,
        disabled: a
    }) {
        const t = () => {
            _.emit("live_support", !0)
        };
        return h(), a ? e.jsx("div", {
            onClick: t,
            className: Qe,
            children: e.jsxs(ee, {
                name: s,
                i18nKey: "trans.mainpage.casino.desc",
                children: ["Sorry, ", {
                    name: s
                }, " is temporarily disabled for some reason. Please ", e.jsx("span", {
                    className: "cl-primary",
                    children: "contact customer support"
                }), " for help, or try another game."]
            })
        }) : null
    }
    const Qe = "s1oehqp";
    se = function() {
        Xe(), l.useEffect(() => {
            _.emit("ad_track", "other_events", {
                e: "enterGame"
            })
        }, []);
        const {
            t: s
        } = h(), a = T(), t = D().gameUnique.read(), {
            urlPathname: n
        } = C();
        if (n.includes("/game/crash-history")) return e.jsx(z, {
            breadcrumbs: "history",
            children: e.jsx(Es, {})
        });
        if (n.includes("/game/crash-creator")) return e.jsx(z, {
            breadcrumbs: "creator",
            children: e.jsx(Vs, {})
        });
        const r = [{
            label: s("High rollers"),
            value: As
        }, {
            label: s(a ? "Contest" : "Wager contest"),
            value: Rs
        }];
        return e.jsx(Ge, {
            children: e.jsx(Ws, {
                tabs: r,
                gameUnique: t
            })
        })
    }, te = ({
        ctx: s
    }) => {
        const {
            urlParsed: a,
            routeParams: t,
            lang: n
        } = s, r = parseInt(a.search.page || "1"), o = a.search.sort || "createTime";
        let i = t.gameUnique;
        (i === "crash-creator" || i === "crash-history") && (i = "crash");
        const m = Ss(i, n);
        return {
            gameInfo: m,
            providerData: Ts(),
            gameComment: Us(i, r, o),
            gameIntroduction: Ps(i, n),
            gameRelated: qs({
                gameUnique: i,
                sectionId: "game_related"
            }),
            gameUnique: m.then(c => c == null ? void 0 : c.gameUnique),
            documentProps: m.then(c => ({
                title: c ? c.seoTitle : i,
                description: c ? c.seoDescription : i,
                keywords: c ? c.seoKeywords : i,
                gameUnique: c ? c.gameUnique : i
            }))
        }
    }, ae = async s => s.routeParams.gameUnique === "crash-trenball" ? {
        pageContext: {
            redirectTo: "/game/crash?type=trenball"
        }
    } : {
        pageContext: {}
    };

    function Xe() {
        const s = C().routeParams.gameUnique,
            a = T(),
            t = l.useMemo(() => s === "trade" && !a, [s, a]);
        l.useEffect(() => {
            if (t) {
                const n = document.createElement("style");
                return n.innerText = `
        .page-max-width-wrap {
          max-width: unset !important;
        }
        .page-max-width-wrap .ui-breadcrumb {
          display: none !important;
        }
      `.replace(/\s(!=\.)/gm, ""), document.head.appendChild(n), () => {
                    document.head.removeChild(n)
                }
            }
        }, [t])
    }
});
export {
    se as Page, Hs as __tla, ae as onBeforeRender, te as onPageData
};