var Cm = Object.defineProperty,
    wm = Object.defineProperties;
var Sm = Object.getOwnPropertyDescriptors;
var xs = Object.getOwnPropertySymbols;
var Et = Object.prototype.hasOwnProperty,
    Ut = Object.prototype.propertyIsEnumerable;
var Xs = (M, Z, X) => Z in M ? Cm(M, Z, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: X
    }) : M[Z] = X,
    H = (M, Z) => {
        for (var X in Z || (Z = {})) Et.call(Z, X) && Xs(M, X, Z[X]);
        if (xs)
            for (var X of xs(Z)) Ut.call(Z, X) && Xs(M, X, Z[X]);
        return M
    },
    J = (M, Z) => wm(M, Sm(Z));
var Ds = (M, Z) => {
    var X = {};
    for (var ue in M) Et.call(M, ue) && Z.indexOf(ue) < 0 && (X[ue] = M[ue]);
    if (M != null && xs)
        for (var ue of xs(M)) Z.indexOf(ue) < 0 && Ut.call(M, ue) && (X[ue] = M[ue]);
    return X
};
var Mt = (M, Z, X) => (Xs(M, typeof Z != "symbol" ? Z + "" : Z, X), X);
import {
    j as e
} from "./chunk-a4af42e8.js";
import {
    R as f,
    r as o
} from "./chunk-73e80d68.js";
import {
    S as Ht,
    n as Tm,
    K as _m,
    z as Vm,
    ez as w,
    ds as v,
    cS as y,
    dQ as Wt,
    ed as _,
    e5 as me,
    dO as Rm,
    dr as Ie,
    dC as js,
    cT as Ve,
    ev as p,
    dL as F,
    dy as ee,
    ei as z,
    dl as gs,
    de as Lm,
    cJ as u,
    di as fs,
    ci as G,
    cB as qe,
    cE as Fm,
    e6 as Re,
    eg as V,
    e3 as le,
    e2 as Em,
    eK as Um,
    cw as Ce,
    cx as bs,
    eE as Mm,
    dW as vs,
    d8 as Ks,
    er as ve,
    cY as Le,
    d0 as q,
    c_ as Hm,
    dF as Fe,
    cl as T,
    cM as Ns,
    dJ as Wm,
    et as ks,
    ew as Ne,
    da as ys,
    cA as $e,
    dS as zs,
    cu as we,
    eB as Am,
    e9 as Ye,
    dT as At,
    ef as Oe,
    bq as pe,
    aC as $,
    dG as Im,
    ey as It,
    dK as Be,
    a as R,
    dg as xe,
    eA as qs,
    cj as Ot,
    cZ as de,
    du as ae,
    ct as $s,
    dd as Ys,
    eu as Om,
    eq as Qe,
    cp as Ze,
    ak as Bt,
    eo as Pe,
    eh as Zt,
    ex as Bm,
    cW as Zm,
    e7 as es,
    d2 as Pt,
    am as Pm,
    dZ as Jm,
    ap as Gm,
    dc as Xm,
    d1 as Jt,
    cG as Dm,
    dk as Gt,
    ec as Km,
    eI as Xt,
    an as zm,
    cQ as qm,
    __tla as $m
} from "./chunk-64278058.js";
import {
    c as g
} from "./chunk-5bcb444f.js";
import {
    h as Ym,
    a as Qm,
    H as ed,
    A as sd,
    b as nd,
    c as Qs,
    L as Dt,
    G as ad,
    d as he,
    e as Kt,
    f as td,
    R as id,
    g as ld,
    i as cd,
    T as zt,
    C as qt,
    U as $t,
    j as rd,
    k as od,
    l as md,
    P as dd,
    m as hd,
    B as ud,
    n as pd,
    o as Yt,
    u as xd,
    p as Qt,
    q as ei,
    r as jd,
    s as gd,
    V as fd,
    t as bd,
    M as en,
    S as vd,
    v as Nd,
    w as kd,
    x as yd,
    y as Cd,
    z as wd,
    D as si,
    E as ni
} from "./chunk-f82403c7.js";
import {
    u as ke,
    a as ge,
    p as Se
} from "./chunk-97fc744c.js";
import {
    a as Cs,
    m as ai,
    __tla as Sd
} from "./chunk-07d6de63.js";
import {
    o as ws
} from "./chunk-b45bd069.js";
import {
    a as W,
    __tla as Td
} from "./chunk-7a9ca7ff.js";
import {
    l as _d,
    __tla as Vd
} from "./chunk-654ef298.js";
import {
    n as Rd
} from "./chunk-5a2826fd.js";
import "./chunk-c5b9a686.js";
import {
    l as Ee
} from "./chunk-bb0ace6b.js";
import {
    g as Ld,
    u as Fd,
    L as Ed,
    a as Ud,
    s as Md
} from "./chunk-b985edb9.js";
import {
    g as Hd
} from "./chunk-8d9c7a4a.js";
import {
    g as Wd
} from "./chunk-4c2df952.js";
import {
    i as Ad,
    u as Id,
    e as Od
} from "./chunk-f1a029f1.js";
import {
    a as Y
} from "./chunk-9a1dea26.js";
import {
    w as Ue
} from "./chunk-e20af49b.js";
import {
    E as Bd
} from "./chunk-ebb6ff7f.js";
import {
    u as ti
} from "./chunk-83c301d9.js";
import {
    S as Zd,
    __tla as Pd
} from "./chunk-0e98d985.js";
import {
    _ as O
} from "./chunk-cf010ec4.js";
import {
    G as Jd
} from "./chunk-55136115.js";
let sn, ss, ii, li, ye, ci, Ss, Ts, nn, ri, an, _s, oi, tn, mi, Je, ln, di, Gd = Promise.all([(() => {
    try {
        return $m
    } catch (M) {}
})(), (() => {
    try {
        return Sd
    } catch (M) {}
})(), (() => {
    try {
        return Td
    } catch (M) {}
})(), (() => {
    try {
        return Vd
    } catch (M) {}
})(), (() => {
    try {
        return Pd
    } catch (M) {}
})()]).then(async () => {
    var Rt, Lt;
    var M = Ht ? Ht.isConcatSpreadable : void 0;

    function Z(s) {
        return Tm(s) || _m(s) || !!(M && s && s[M])
    }
    Ss = function(s, n, a, t, i) {
        var l = -1,
            r = s.length;
        for (a || (a = Z), i || (i = []); ++l < r;) {
            var m = s[l];
            n > 0 && a(m) ? n > 1 ? Ss(m, n - 1, a, t, i) : Vm(i, m) : t || (i[i.length] = m)
        }
        return i
    }, an = function(s) {
        var n = s == null ? 0 : s.length;
        return n ? Ss(s, 1) : []
    };
    const X = new URLSearchParams(w.isSSR ? "" : location.search),
        ue = w.isSSR ? "" : location.hash,
        cn = ((Lt = (Rt = globalThis == null ? void 0 : globalThis.location) == null ? void 0 : Rt.hostname) == null ? void 0 : Lt.match(/([^.]+\.[^.]+)$/)) || null,
        Vs = "supersell.com dogcrash.com dogcrash.game".split(" "),
        Rs = X.get("env_host") || (cn ? cn[0] : Vs[0]),
        hi = "".split(" "),
        Ls = 28708481,
        rn = "app_version";

    function on(s = !1) {
        let n = (localStorage.getItem(rn) || "").split(".").map(l => Number(l)),
            a = isNaN(n[0]) || n[0] === 0 ? Ls : n[0],
            t = isNaN(n[1]) ? 0 : n[1],
            i = `${a}.${t}`;
        return a !== Ls ? (a = Ls, i = `${String(a)}.0`) : s && (t++, i = `${a}.${t}`, v.version = i), localStorage.setItem(rn, i), i
    }
    const ui = [
        ["USD", "$", "US", !1, "US Dollar"],
        ["BRL", "R$", "BR", !0, "Brazil"],
        ["INR", "\u20B9", "IN", !0, "India"],
        ["EUR", "\u20AC", "", !1, "Euro"],
        ["RUB", "\u20BD", "RU", !0, "Russia"],
        ["NGN", "\u20A6", "NG", !1, "Nigeria"],
        ["IDR", "Rp", "ID", !0, "Indonesia"],
        ["BDT", "\u09F3", "BD", !1, "Bangladesh"],
        ["PHP", "\u20B1", "PH", !0, "Philippine"],
        ["VND", "\u20AB", "VN", !0, "Vietnam"],
        ["THB", "\u0E3F", "TH", !0, "Thailand"],
        ["KZT", "\u20B8", "KZ", !0, "Kazakhstani tenge"],
        ["MAD", "\u062F.\u0645.", "MA", !1, "Morocco"],
        ["ZAR", "R", "ZA", !1, "South Africa"],
        ["PLN", "z\u0142", "PL", !1, "Poland"],
        ["CUP", "\u20B1", "CU", !1, "Cuba"],
        ["KRW", "\u20A9", "KR", !1, "Korea"],
        ["JPY", "\xA5", "JP", !1, "Japan"],
        ["GBP", "\xA3", "GB", !1, "United Kingdom"],
        ["HRK", "kn", "HR", !1, "Croatia"],
        ["ISK", "kr", "IS", !1, "Iceland"],
        ["HUF", "Ft", "HU", !1, "Hungary"],
        ["NOK", "kr", "NO", !1, "Norwegian"],
        ["NZD", "$", "CK", !1, "New Zealand Dollar"],
        ["ARS", "$", "AR", !1, "Argentina Peso"],
        ["MXN", "MEX$", "MX", !1, "Mexico Peso"],
        ["AUD", "AU$", "AU", !1, "Australia Dollar"],
        ["TRY", "\u20BA", "TR", !1, "Turkey Lira"],
        ["IRR", "\uFDFC", "IR", !1, "Iran Rial"],
        ["AED", "\u062F.\u0625", "AE", !1, "UAE-Dirham"],
        ["CAD", "CA$", "CA", !1, "Canada Dollar"],
        ["UAH", "\u20B4", "UA", !1, "Ukraine Hryvnia"],
        ["CZK", "K\u010D", "CZ", !1, "Czech Republic Koruna"],
        ["LKR", "\u20A8", "LK", !1, "Sri Lanka Rupee"],
        ["ILS", "\u20AA", "IL", !1, "Israel Shekel"],
        ["EGP", "\xA3", "EG", !1, "Egypt Pound"],
        ["PKR", "\u20A8", "PK", !1, "Pakistan Rupee"],
        ["GHS", "\xA2", "GH", !1, "Ghana Cedi"],
        ["VEF", "Bs", "VE", !1, "Venezuela Bol\xEDvar"],
        ["PEN", "S/.", "PE", !1, "Peru Sol"],
        ["RON", "lei", "RO", !1, "Romania Leu"],
        ["BGN", "\u043B\u0432", "BG", !1, "Bulgaria Lev"],
        ["RSD", "\u0414\u0438\u043D.", "RS", !1, "Serbia Dinar"],
        ["CLP", "CLP$", "CL", !1, "Chile Peso"],
        ["KES", "KSh", "KSh", !1, "Kenya Shilling"],
        ["AZN", "\u20BC", "AZ", !1, "Azerbaijani Manat"],
        ["KGS", "\u0441\u043E\u043C", "KG", !1, "Kyrgyzstani Som"],
        ["MDL", "L", "MD", !1, "Moldovan Leu"],
        ["MYR", "RM", "MY", !1, "Malaysian Ringgit"],
        ["COP", "Col$", "CO", !1, "Colombian Peso"],
        ["XOF", "CFA", "XOF", !1, "West African CFA franc"],
        ["XAF", "FCFA", "XA", !1, "Central African CFA franc"],
        ["UZS", "so\u02BBm", "UZ", !1, "Uzbekistani Som"],
        ["UGX", "USh", "UG", !1, "Ugandan Shilling"],
        ["CHF", "Fr.", "CH", !1, "Swiss Franc"],
        ["CZK", "K\u010D", "CZ", !1, "Czech Koruna"],
        ["DKK", "kr.", "DK", !1, "Danish Krone"],
        ["PLN", "z\u0142", "PL", !1, "Polish Zloty"],
        ["SEK", "kr", "SE", !1, "Swedish Krona"]
    ];
    Object.assign(v, {
        isDev: !1,
        isDevHost: Vs.indexOf(Rs) !== -1,
        isBrHost: ["bc.me", "bcga.me", "bc.ai"].indexOf(Rs) !== -1,
        version: on(),
        host: Rs,
        buildHost: "BC.GAME",
        devHosts: Vs,
        siteName: "BC",
        mascot: "COCO",
        platformCoin: "BCD",
        bcl: "BCL",
        freeCoin: "JB",
        SUPPORT: "support@bc.game",
        FEEDBACK: "feedback@bcgame.com",
        GITHUB: "bcgame-project",
        SD_PROJECT: "production",
        UA_ID: "G-B23BPN2TGE",
        RECAPTCHA_V3_ID: "",
        HCAPTCHA_ID: "cf0b9a27-82e3-42fb-bfec-562f8045e495",
        crashSalt: "0000000000000000000301e2801a9a9598bfb114e574a91a887f2132f33047e6",
        KENO_SALT: "0000000000000000000301e2801a9a9598bfb114e574a91a887f2132f33047e6",
        BLACKJACK_SALT: "00000000000000000009e93621499e5a63d79a6293609ce52e95e93dd49cb1be",
        BLACKJACK_PUBLIC_KEY: "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDE9QKpw5CHZyf+OfcrT5MCeiCRCLVZjDVUSPGzwXdoGAcRi/r9y7T8t4/byXNTLky0h9dUGKBowwN7bt7fgMKvWAtz0Xf4ztfpsEoRHrzRs2r8khPUjihjrz0N+oPQ+ktAh7M95ZnQfgt/hNWFevGRd+SVsGsWhO8VFrBYb7nS8wIDAQAB",
        ISHUMEI_KEY: "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC1H4eR+xoG7K9NIBf3K6PmfnRsGkaH3aGz9A/XkYhIQdrN6XKBWt6fnxEqDe1Xp27o/VOd02JPNG6JKkJ8pVyjjUXdukNkbKADzxEYmkLn/7O5hpgHMHWiZ6iKTNlDWAQ96viViXa4Bq1Ju1u3DWnH9m+6Sz1zEAQOLH6XnQSS8QIDAQAB",
        WALLET_CONNECT_PROJECT_ID: "7312b2cd1e88e3734b150df3a241c477",
        DESIGN_WIDTH: +"440",
        MAX_DESIGN_WIDTH: +"649",
        FACEBOOK_KEY: "363146184450773",
        GOOGLE_KEY: "36897522347-eotiq46nvilc5p10653s4mtbs8405sbn.apps.googleusercontent.com",
        disableModule: hi,
        initSearchParams: X,
        initHashParams: ue,
        localCurrencys: ui.map(([s, n, a, t, i]) => ({
            value: `${s}FIAT`,
            label: s,
            cs: n,
            area: a,
            force: t,
            alias: i
        })),
        specialCurrencys: new Set(["JB", "BB", "CUP2022"])
    });
    const pi = (s, n = "") => (n = n && n + ".", `${window.location.protocol}//${n}distributedresourcestorage.com${s}`);

    function mn({
        msg: s
    }) {
        const n = an(s.map((a, t) => typeof a == "string" ? a.split(/(\n)/).map((i, l) => i == `
` ? e.jsx("br", {}, `${t}-${l}`) : i) : a.type == "gif" ? e.jsx(ji, {
            gifId: a.args[0]
        }, t) : a.type == "user" ? e.jsx(xi, {
            userId: a.args[0],
            name: a.args[1]
        }, t) : a.type == "link" ? e.jsx(gi, {
            href: a.args[0]
        }, t) : a.type == "img" ? e.jsx(fi, {
            src: a.args[0]
        }, t) : null));
        return e.jsx(e.Fragment, {
            children: n
        })
    }
    const xi = ({
            name: s,
            userId: n
        }) => {
            let a = {
                className: "cl-primary",
                href: `#/user/profile/${n}`
            };
            return f.createElement(y, a, `@${s}`)
        },
        ji = ({
            gifId: s
        }) => {
            const n = `https://media2.giphy.com/media/${s}/100.gif`,
                a = Wt(async () => {
                    const t = await w.loadImage(n);
                    return e.jsx("img", {
                        src: t
                    })
                }, [n]);
            return e.jsx("div", {
                className: `msg-gif ${vi}`,
                children: a
            })
        },
        gi = ({
            href: s
        }) => {
            s = decodeURIComponent(s);
            const n = _(),
                a = me(),
                t = async () => {
                    s.search(window.location.origin) == 0 ? (a && Ie.close(), n(s.replace(window.location.origin, ""))) : await js.confirm(e.jsx(bi, {
                        url: s
                    }), {
                        confirmText: "Continue"
                    }) && window.open(s, "_blank")
                };
            return e.jsx("span", {
                onClick: t,
                className: Ci,
                children: dn(s)
            })
        },
        fi = ({
            src: s
        }) => {
            const {
                data: n,
                error: a
            } = Rm(() => w.loadImage(s));
            if (!s || !s.startsWith("/")) return null;
            s = pi(s, "pfile");
            const t = () => {
                js.push(e.jsx("img", {
                    className: ki,
                    onClick: js.back,
                    src: s
                }))
            };
            let i;
            return a ? i = e.jsx("div", {
                className: "flex-center",
                children: "Failed to load image"
            }) : n ? i = e.jsx("img", {
                onClick: t,
                src: s
            }) : i = e.jsx(Ve, {}), e.jsx("div", {
                className: `msg-img ${Ni}`,
                children: i
            })
        },
        bi = ({
            url: s
        }) => {
            const {
                t: n
            } = p();
            return e.jsxs("div", {
                className: yi,
                children: [e.jsx("div", {
                    children: n("You are navigating to other site. For your account safety, please do not reveal your account information to any unidentified person.")
                }), e.jsxs("div", {
                    style: {
                        marginTop: "1rem"
                    },
                    children: [e.jsxs("div", {
                        children: ["Continus to: ", e.jsx("br", {})]
                    }), e.jsx("div", {
                        className: "cl-primary hover",
                        children: dn(s)
                    })]
                })]
            })
        };

    function dn(s, n = 90) {
        return s.length > n + 3 ? s.slice(0, n) + "..." : s
    }
    const vi = "g54f3qg",
        Ni = "ijqhnis",
        ki = "i43feat",
        yi = "e1xzyoih",
        Ci = "lq8mwtz";

    function wi() {
        const {
            t: s
        } = p(), n = [{
            time: 864e5,
            txt: s("1 day")
        }, {
            time: 6048e5,
            txt: s("1 week")
        }, {
            time: 220063324e4,
            txt: s("forever")
        }], a = gs.state.chatRoomPermission.blockLevel, t = a <= 0 ? 1 : a;
        return n.slice(0, t)
    }
    const Si = ({
            onChange: s
        }) => {
            let [n, a] = o.useState(0);
            const t = wi();
            o.useEffect(() => {
                s(t[0].time)
            }, []);
            const i = t.map((l, r) => e.jsx("button", {
                className: r === n ? "active" : "",
                onClick: () => {
                    s(l.time), a(r)
                },
                children: l.txt
            }, l.time));
            return e.jsx("div", {
                className: Vi,
                children: i
            })
        },
        Ti = ({
            chat: s
        }) => {
            const n = ke(),
                {
                    t: a
                } = p(),
                t = z(),
                i = F().chatRoomPermission,
                l = i.deleteable,
                r = i.blockable;
            if (!l && !r) return null;
            const m = async () => {
                    if (await t.confirm(a("Are you sure to delete this post?"))) try {
                        await n.delChat(s.id), ee(a("Successfully deleted!"))
                    } catch (d) {
                        ee(d)
                    }
                },
                c = async () => {
                    try {
                        let d = await t.prompt(Si);
                        if (!d) return;
                        await n.banned(s.userId, Number(d), s.id), ee(a("{{name}} has been banned.", {
                            name: s.name
                        }))
                    } catch (d) {
                        ee(d)
                    }
                };
            return e.jsxs("div", {
                className: `admin-opr-wrap ${_i}`,
                children: [l && e.jsx("div", {
                    className: "opr-btn",
                    onClick: m,
                    children: "D"
                }), r && e.jsx("div", {
                    className: "opr-btn",
                    onClick: c,
                    children: "B"
                })]
            })
        },
        _i = "akfu5m",
        Vi = "bh8u0q7",
        Ri = ({
            name: s,
            userId: n
        }) => {
            const {
                t: a
            } = p(), t = ke(), i = _(), l = () => {
                const m = fs.findByName(s);
                m && t.onAppendMessage(`@${m.nameId} `)
            }, r = () => {
                const m = fs.findByName(s);
                m && i(`#/tip/${m.userId}/${m.name}`)
            };
            return e.jsxs("div", {
                className: `chat-actions ${Li}`,
                children: [e.jsx(Lm, {
                    title: a("Tip"),
                    children: e.jsx("div", {
                        children: e.jsx(u, {
                            className: "tip",
                            onClick: r,
                            name: "Tip"
                        })
                    })
                }), e.jsx(u, {
                    name: "At",
                    onClick: l
                })]
            })
        },
        Li = "c10e4mlw",
        Fi = f.memo(({
            data: s,
            children: n
        }) => {
            let [a, t] = o.useState(!1);
            const {
                ref: i,
                isHover: l
            } = Mi(s), {
                name: r,
                userId: m,
                isFirst: c,
                id: d,
                level: h
            } = s;
            let x = m != 0 ? `#/user/profile/${m}` : "";
            const b = F();
            return e.jsxs("div", {
                className: g(pn, "notranslate", l && "is-hover", m == 0 && "is-sys", c && "is-first"),
                children: [e.jsx("div", {
                    className: "head",
                    children: e.jsxs(y, {
                        className: "head-link",
                        href: x,
                        children: [e.jsx(G.Avatar, {
                            userId: m,
                            name: r,
                            tooltip: !0,
                            showCrown: !0
                        }), m > 0 && e.jsx(G.UserLevel, {
                            level: h
                        })]
                    })
                }), e.jsxs("div", {
                    ref: i,
                    className: "content",
                    children: [e.jsx(Ui, {
                        data: s,
                        showAction: l
                    }), e.jsxs("div", {
                        className: "msg-wrap",
                        onClick: () => {
                            b.chatRoomPermission.deleteable && t(!a)
                        },
                        children: [e.jsx(qe, {
                            errorComponent: Ei,
                            children: n
                        }), s.userId > 0 && a && e.jsx(Ti, {
                            chat: s
                        })]
                    })]
                })]
            })
        });

    function Ei({
        msg: s
    }) {
        return e.jsx(ss, {
            style: {
                color: "red"
            },
            children: s
        })
    }
    const Ui = function({
        data: s,
        showAction: n
    }) {
        p();
        const {
            name: a,
            userId: t,
            titles: i,
            titleDesc: l,
            level: r,
            createTime: m
        } = s;
        let c = t != 0 ? `#/user/profile/${t}` : "";
        const d = new Date(m);
        return e.jsxs("div", {
            className: "title",
            children: [e.jsxs("div", {
                className: "name",
                children: [e.jsx(y, {
                    href: c,
                    children: e.jsx("span", {
                        children: a || v.buildHost
                    })
                }), e.jsx(G.UserTitle, {
                    code: i,
                    desc: l
                }), e.jsx(G.UserRank, {
                    userId: t
                }), e.jsx("div", {
                    className: "time",
                    children: w.numberZeroize(d.getHours()) + ":" + w.numberZeroize(d.getMinutes())
                })]
            }), n && e.jsx(Ri, {
                name: a,
                userId: t
            })]
        })
    };
    Ts = function(s) {
        return ({
            data: n
        }) => e.jsx(Fi, {
            data: n,
            children: e.jsx(s, {
                data: n
            })
        })
    };
    const Fs = new Fm;

    function Mi(s) {
        const n = o.useRef(null),
            [a, t] = o.useState(!1),
            i = F();
        return Re(() => {
            if (n.current && s.userId != 0 && s.isFirst && s.userId != i.userId) {
                const l = () => t(!0),
                    r = () => t(!1),
                    m = n.current;
                if (w.isSupportTouch) {
                    const c = h => {
                        h == m ? l() : r()
                    };
                    Fs.on("change", c);
                    const d = () => {
                        Fs.emit("change", m)
                    };
                    return m.addEventListener("click", d), () => {
                        r(), Fs.off("change", c), m.removeEventListener("click", d)
                    }
                } else return m.addEventListener("mouseenter", l), m.addEventListener("mouseleave", r), () => {
                    m.removeEventListener("mouseenter", l), m.removeEventListener("mouseleave", r)
                }
            }
        }, [s]), {
            isHover: a,
            ref: n
        }
    }
    let hn, un, pn, xn;
    hn = Ts(({
        data: s
    }) => e.jsx(ss, {
        className: "normal-msg",
        children: e.jsx(mn, {
            msg: s.chat
        })
    })), un = "b1eb24ec", ss = f.forwardRef((t, a) => {
        var i = t,
            {
                className: s
            } = i,
            n = Ds(i, ["className"]);
        return e.jsx("div", J(H({
            className: g(un, s)
        }, n), {
            ref: a
        }))
    }), pn = "c1mwlzx0", xn = "/assets/groupMessage.f6dfeb95.svg", _s = function({
        className: s
    }) {
        const {
            t: n
        } = p(), a = me();
        return e.jsxs(y, {
            className: g(Hi, s),
            href: "#/settings/group-message",
            children: [e.jsx("img", {
                src: xn,
                className: "icon"
            }), !a && n("Group Message")]
        })
    };
    const Hi = "wum8lkt",
        Wi = () => _d("modules/chat");

    function jn(s) {
        return async (...n) => (await Wi())[s](...n)
    }
    const ns = jn("renderChat"),
        Ai = jn("onMessage"),
        as = f.memo(function({
            render: s,
            path: n
        }) {
            const a = o.useRef(null),
                t = Ii(n);
            let i;
            return Re(() => {
                const l = a.current;
                l && (i = s({
                    el: l,
                    bridge: t
                }))
            }, []), o.useEffect(() => () => {
                i.then(l => l())
            }, []), Re(() => {
                t.update({
                    path: n
                })
            }, [n]), e.jsx("div", {
                className: "chat-root",
                ref: a
            })
        });

    function Ii(s) {
        const {
            lang: n
        } = V(), a = le(), t = me(), i = Em();
        return o.useRef({
            current: {
                path: s,
                darken: a,
                mobile: t,
                active: i,
                lang: n
            },
            update(l) {}
        }).current
    }
    ci = function() {
        const {
            t: s
        } = p(), n = F(), {
            pathname: a
        } = Um(), t = o.useRef(a);
        a.startsWith("/chat/") && (t.current = a);
        const i = vs(),
            l = () => {
                i.close(), Rd(t.current)
            };
        return e.jsxs(Ce, {
            className: Es,
            title: s("Private Messages"),
            children: [e.jsx(Oi, {}), e.jsx(bs, {
                children: e.jsxs(e.Fragment, {
                    children: [e.jsx("div", {
                        children: n.chatRoomPermission.vipable ? e.jsx(_s, {}) : null
                    }), e.jsx(u, {
                        name: "NewWindow",
                        onClick: l
                    })]
                })
            }), e.jsx(as, {
                render: ns,
                path: t.current
            })]
        })
    };

    function Oi() {
        const s = document.querySelector(".ui-dialog-overlayer");
        return s && Mm.createPortal(e.jsx("div", {
            className: gn
        }), s)
    }
    li = function() {
        const {
            t: s
        } = p(), n = F();
        return e.jsxs(Ce, {
            className: Es,
            title: s("Private Messages"),
            children: [n.chatRoomPermission.vipable ? e.jsx(bs, {
                children: e.jsx(_s, {})
            }) : null, e.jsx(as, {
                render: ns,
                path: "/chat"
            })]
        })
    }, ii = function() {
        const {
            t: s
        } = p();
        return e.jsx(Ce, {
            title: s("Group Message"),
            children: e.jsx(as, {
                render: ns,
                path: "/group-message"
            })
        })
    }, oi = function({
        path: s
    }) {
        return e.jsx("div", {
            className: fn,
            children: e.jsx(as, {
                render: ns,
                path: s
            })
        })
    };
    let gn, Es, fn, bn, vn, Nn, kn, yn, Cn, wn, Sn, Tn, _n, Vn;
    gn = "m11ri6xf", Es = "s1cdoxvp", fn = "pzzrjes", bn = "/assets/copyrigt.24adedf8.png", vn = "/assets/copyrigtw.fbd81b2a.png", Nn = "/assets/bubble.9b2b2288.png", kn = "/assets/coindrop.8fcb1038.svg", yn = "/assets/rain.91c937f7.svg", Cn = "/assets/shitcode.0badfbca.svg", wn = "/assets/tip.35667d2b.svg", Sn = "/assets/pin.280b6276.svg", Tn = "/assets/user.22808cc8.svg", _n = "/assets/spin.8e9ae5f5.png", Vn = "/assets/mute.ba98fdfb.png", ye = {
        copyrigt: bn,
        copyrigtw: vn,
        bubble: Nn,
        coindrop: kn,
        rain: yn,
        shitcode: Cn,
        tip: wn,
        pin: Sn,
        user: Tn,
        spin: _n,
        mute: Vn
    }, ln = "/assets/none.3a359f4a.png", nn = "/assets/none_w.449a0478.png";
    const Rn = f.memo(function({
            localcurrency: s,
            setlocal: n,
            hideSmall: a,
            hideSmallBtn: t,
            setHideSmall: i
        }) {
            const {
                t: l
            } = p(), r = z();
            return e.jsxs("div", {
                className: g(Bi, "other-crypto"),
                children: [e.jsxs("div", {
                    className: "switch",
                    onClick: () => {
                        n(!s), s || r.push(e.jsx(Zi, {}))
                    },
                    children: [e.jsx(Ks, {
                        value: s
                    }), l("View in fiat")]
                }), !t && e.jsxs("div", {
                    className: "switch hide-small",
                    onClick: () => i(!a),
                    children: [e.jsx(Ks, {
                        value: a
                    }), e.jsx("div", {
                        className: "label",
                        children: l("Hide Small")
                    })]
                })]
            })
        }),
        Bi = "s191y8tt",
        Zi = o.memo(function() {
            const {
                t: s
            } = p(), n = z(), a = ve(), t = o.useMemo(() => Object.values(v.localCurrencys).map(({
                label: i,
                value: l
            }) => ({
                label: i,
                value: l
            })), []);
            return e.jsx(Le, {
                title: s("Information"),
                className: Ji,
                closeable: !0,
                children: e.jsxs(q, {
                    children: [e.jsx("p", {
                        className: "fiat-sub-title",
                        children: s("Please note that these are currency approximations. All bets & transactions will be calculated in equivalent currencies. For more details feel free to contact our live support.")
                    }), e.jsx("div", {
                        className: "fiat-list",
                        children: e.jsx(Hm, {
                            value: a.localeCurrencyName,
                            onChange: i => Fe.setState({
                                localeCurrencyName: i
                            }),
                            options: t,
                            children: Pi
                        })
                    }), e.jsx(T, {
                        type: "conic",
                        className: "confirm-btn",
                        onClick: () => n.close(),
                        children: s("Confirm")
                    })]
                })
            })
        });

    function Pi({
        active: s,
        option: n
    }) {
        return e.jsxs("div", {
            className: `radio-item${s?" is-active":""}`,
            children: [e.jsx("div", {
                className: "circle"
            }), e.jsx("div", {
                className: "l",
                children: n.label
            }), e.jsx(G.CoinIcon, {
                name: n.label
            })]
        })
    }
    const Ji = "fk89wx0";

    function Gi(s, n) {
        if (s.search(/[+()[\]*\\]/) != -1) return [];
        let a = s.replace(/\ +/g, "");
        return a.length === 0 ? n : (a = a.toLowerCase(), n.filter(t => {
            var i, l;
            return ((i = Wm.getAlias(t.currencyName)) == null ? void 0 : i.toLocaleLowerCase().search(a)) > -1 || t.fullName && ((l = t.fullName) == null ? void 0 : l.toLocaleLowerCase().search(a)) > -1
        }))
    }

    function Ln(s) {
        const [n, a] = o.useState(""), {
            t
        } = p(), i = e.jsxs(Ns, {
            value: n,
            onChange: a,
            className: `${Xi} search-input`,
            placeholder: t("Search"),
            children: [e.jsx(u, {
                name: "Search",
                className: "search"
            }), n.length > 0 && e.jsx("button", {
                className: "clear",
                onClick: () => a(""),
                children: e.jsx(u, {
                    name: "Close"
                })
            })]
        });
        if (s) {
            const l = Gi(n, s);
            return {
                search: n,
                searchInput: i,
                searchList: l
            }
        }
        return {
            search: n,
            searchInput: i
        }
    }
    const Xi = "s1kooa9l";

    function Di() {
        const [s, n] = o.useState(!1), {
            t: a
        } = p(), t = e.jsxs("div", {
            className: "sub-tit",
            children: [e.jsx("span", {
                children: a("My Favorite Coins")
            }), e.jsx("button", {
                onClick: () => n(!s),
                children: e.jsx(u, {
                    className: s ? "reverse" : "",
                    name: "ReverseOrder"
                })
            })]
        });
        return {
            isreverse: s,
            view: t
        }
    }

    function Fn() {
        const [s, n] = o.useState(0), {
            isreverse: a,
            view: t
        } = Di(), {
            t: i
        } = p(), l = Ne(), {
            currency: r
        } = ks(), m = Object.values(l), c = m.filter(S => S.display), d = a ? m.concat().reverse() : m, h = a ? c.concat().reverse() : c, {
            search: x,
            searchList: b,
            searchInput: j
        } = Ln(s === 3 ? h : d);

        function N(S, C) {
            return C === "CHAIN" ? S.filter(({
                currencyName: A
            }) => r[A].currencyType === "CHAIN" || r[A].currencyType === "VIRTUAL") : S.filter(({
                currencyName: A
            }) => r[A].currencyType === C)
        }
        const L = o.useMemo(() => {
            const S = N(d, "CHAIN"),
                C = N(d, "FIAT"),
                A = N(d, "MNFT");
            return [{
                label: i("Crypto"),
                value: () => e.jsxs(e.Fragment, {
                    children: [t, " ", e.jsx(Ge, {
                        isSet: !0,
                        list: S
                    })]
                })
            }, {
                label: i("Fiat"),
                value: () => e.jsxs(e.Fragment, {
                    children: [t, " ", e.jsx(Ge, {
                        isSet: !0,
                        list: C
                    })]
                })
            }, {
                label: "mNFT",
                value: () => e.jsxs(e.Fragment, {
                    children: [t, " ", e.jsx(Ge, {
                        isSet: !0,
                        list: A
                    })]
                })
            }, {
                label: i("My Favorite"),
                value: () => e.jsxs(e.Fragment, {
                    children: [t, " ", e.jsx(Ge, {
                        isSet: !1,
                        list: h
                    })]
                })
            }]
        }, [d, h]);
        return e.jsx(Ce, {
            title: " ",
            className: zi,
            children: e.jsxs("div", {
                id: "currency-config",
                children: [e.jsx(bs, {
                    children: j
                }), x ? e.jsx(Ge, {
                    list: b,
                    isSet: s != 3
                }) : e.jsx(ys, {
                    tabs: L,
                    value: s,
                    onChange: n
                })]
            })
        })
    }

    function Ge({
        list: s,
        isSet: n
    }) {
        return s.length === 0 ? e.jsx($e, {}) : e.jsx(q, {
            children: s.map(a => e.jsx(Ki, {
                item: a,
                isSet: n
            }, a.currencyName))
        })
    }
    const Ki = o.memo(function({
            item: s,
            isSet: n
        }) {
            const {
                currency: a
            } = ks(), t = Ne(s.currencyName), i = o.useRef(0), l = a[s.currencyName], [r, m] = o.useState(t.display), c = l.currencyType === "MNFT";
            return o.useEffect(() => () => {
                i.current > 0 && (t.displayStatus = i.current)
            }, []), !n && !t.display ? null : e.jsxs("div", {
                className: g("setitem", c && "mnft"),
                onClick: () => {
                    m(!r), i.current = r ? 2 : 1
                },
                children: [e.jsxs("div", {
                    className: "coin-wrap",
                    children: [e.jsx(G.CoinIcon, {
                        name: s.currencyName
                    }), e.jsx("div", {
                        className: "currency",
                        children: l.aliasCurrencyName
                    })]
                }), e.jsxs("div", {
                    className: "amount-wrap",
                    children: [e.jsx("div", {
                        className: "full-name",
                        children: l.fullName
                    }), n && e.jsx(Ks, {
                        value: r,
                        onChange: () => {}
                    })]
                })]
            })
        }),
        zi = "skp407n",
        qi = ["BCL", "BCD", "JB"],
        $i = new Map([
            ["BCL", "#/about_ticketcoin"],
            ["BCD", "#/about_bcdcoin"],
            ["JB", "#/about_jbcoin"]
        ]);

    function Yi({
        name: s
    }) {
        const n = _();
        return qi.includes(s) ? e.jsx(T, {
            className: sl,
            onClick: a => {
                n($i.get(s)), a.stopPropagation()
            },
            children: e.jsx(u, {
                className: "icon-help",
                name: "Inform"
            })
        }) : null
    }

    function Qi({
        currency: s
    }) {
        const n = _(),
            a = zs(),
            t = new we(a.totalAmount).sub(a.releaseAmount).toNumber();
        return new we(a.totalAmount).sub(a.releaseAmount).toNumber() > 0 ? e.jsxs("div", {
            className: nl,
            onClick: i => {
                i.stopPropagation(), n("#/bonus/dashboard")
            },
            children: [e.jsx("span", {
                className: "bcd-lock",
                children: e.jsx(u, {
                    name: "Locked"
                })
            }), e.jsx(G.CoinFormat, {
                name: s,
                amount: t
            })]
        }) : null
    }

    function el(s) {
        return !s.currencyTokens.find(n => n.status === 0)
    }
    const Me = o.memo(function({
            item: s,
            showMaintain: n,
            isDeposit: a,
            isWithdraw: t,
            currency: i,
            onChange: l,
            hover: r,
            showBonusAmount: m,
            isBonus: c,
            isReal: d
        }) {
            const {
                t: h
            } = p(), x = zs(), {
                currency: b
            } = ks(), j = b[s.currencyName];
            let N = n && el(j);
            a ? N = j.currencyTokens.every(te => !te.canDeposit) : t && (N = j.currencyTokens.every(te => !te.canWithdraw));
            const L = v.specialCurrencys.has(s.currencyName),
                S = ve(),
                C = S.currencyFullName;
            let A = s.amount;
            d && (A = s.generalAmount), c && (A = s.bonusAmount);
            const re = j.currencyType === "MNFT",
                D = x.currencyName;
            return e.jsxs("div", {
                className: g(al, "currency-item", "notranslate", s.currencyName === i && "active", s.currencyName != i && r && "normal"),
                onClick: () => l(s),
                children: [e.jsxs("div", {
                    className: g("coin-wrap", re && "mnft"),
                    children: [e.jsx(G.CoinIcon, {
                        name: s.currencyName
                    }), N && e.jsxs(e.Fragment, {
                        children: [e.jsx(u, {
                            name: "Maintain"
                        }), e.jsxs("div", {
                            className: "maintain-prompt",
                            children: [j.aliasCurrencyName, " ", h("Under Maintenance")]
                        })]
                    })]
                }), e.jsxs("div", {
                    className: "name-wrap",
                    children: [e.jsxs("div", {
                        className: "currency-name",
                        children: [j.aliasCurrencyName, e.jsx(Yi, {
                            name: s.currencyName
                        })]
                    }), C && e.jsx("div", {
                        className: "full-name",
                        children: j.fullName
                    })]
                }), e.jsxs("div", {
                    className: "amount-wrap",
                    children: [e.jsxs("div", {
                        className: "amount-info",
                        children: [e.jsx(G.CoinFormat, {
                            name: s.currencyName,
                            amount: Number(A),
                            disableLocal: L,
                            className: "monospace"
                        }), m && s.bonusAmount.gt(0) && e.jsxs("div", {
                            className: "bonus-amount",
                            children: ["(", s.amount <= s.bonusAmount ? h("Bonus") : e.jsxs(e.Fragment, {
                                children: [e.jsx(G.CoinFormat, {
                                    name: s.currencyName,
                                    amount: Number(s.bonusAmount),
                                    disableLocal: L
                                }), " ", h("In Bonus")]
                            }), ")"]
                        })]
                    }), s.currencyName === D && e.jsx(Qi, {
                        currency: s.currencyName
                    }), s.currencyName !== D && !L && S.enableLocaleCurrency && e.jsx(G.CoinFormat, {
                        className: "weaken monospace",
                        name: s.currencyName,
                        disableLocal: !0,
                        amount: Number(A)
                    })]
                })]
            })
        }),
        sl = "b138cie2",
        nl = "b5mqaga",
        al = "colko44";

    function tl(s, n, a) {
        return n === "MNFT" ? Math.max(s - 1, 0) : a ? 1 : 0
    }
    di = async function({
        currencyName: s,
        filter: n
    }) {
        let a = Object.values(Am.state);
        return n && (a = a.filter(n)), new Promise((t, i) => {
            const l = r => {
                t(r), Ie.back()
            };
            Ie.push(e.jsx(En, {
                onChange: l,
                orderType: "normal",
                openSet: !1,
                currencyName: s,
                list: a,
                isSearch: !0,
                showMaintain: !1,
                hover: !0,
                focus: !1
            }))
        })
    };
    const En = function(s) {
            const {
                t: n
            } = p(), {
                currency: a
            } = ks(), t = zs(), i = Ye(), {
                list: l,
                orderType: r,
                isSearch: m,
                openSet: c,
                currencyName: d
            } = s, h = ve();

            function x(E) {
                return ws(E, [k => Number(i.amount2local(k.amount, k.currencyName)), k => Number(k.amount), k => k.sort], ["desc", "desc", "asc"])
            }

            function b(E) {
                return ws(E, [k => Number(i.amount2local(k.amount, k.currencyName)), k => k.sort], ["desc", "asc"])
            }

            function j(E) {
                return ws(E, [k => k.currencyName === Fe.state.localeCurrencyName ? 0 : 1, k => Number(i.amount2local(k.amount, k.currencyName)), k => k.amount, k => k.currencyName === t.currencyName ? 0 : 1, k => k.sort, k => k.currencyName], ["asc", "desc", "desc", "asc", "asc", "asc"])
            }
            const N = o.useCallback(E => {
                    Fe.setState({
                        enableLocaleCurrency: E
                    })
                }, []),
                L = h.hideSmallCurrency,
                S = o.useCallback(E => {
                    Fe.setState({
                        hideSmallCurrency: E
                    })
                }, []);
            let C = c ? l.filter(E => E.display) : l;
            const A = s.orderType === "deposit";
            C = L && !A ? C.filter(E => i.amount2local(new we(E.amount), E.currencyName).gte(.5) || v.specialCurrencys.has(E.currencyName)) : C, C = r ? x(C) : C;
            const {
                search: re,
                searchInput: D,
                searchList: te
            } = Ln(l);

            function I(E) {
                var k;
                return (k = a[E]) == null ? void 0 : k.currencyType
            }

            function oe(E, k) {
                return k === "CHAIN" ? E.filter(({
                    currencyName: P
                }) => {
                    const ie = I(P);
                    return ie === "CHAIN" || ie === "VIRTUAL"
                }) : E.filter(({
                    currencyName: P
                }) => I(P) === k)
            }
            const be = o.useMemo(() => {
                    const E = oe(C, "CHAIN"),
                        k = oe(C, "FIAT"),
                        P = oe(C, "MNFT");
                    return s.onChangeBonus ? [{
                        label: n("Real Money"),
                        disabled: !s.isModel && E.length === 0 && k.length === 0,
                        value: () => e.jsx(Te, J(H({}, s), {
                            openSet: !1,
                            isReal: !0,
                            list2: b(k),
                            list: E
                        }))
                    }, {
                        label: n("Bonus Money"),
                        disabled: !s.isModel && E.length === 0 && k.length === 0,
                        value: () => e.jsx(Te, J(H({}, s), {
                            openSet: !1,
                            isBonus: !0,
                            list2: b(k),
                            list: E
                        }))
                    }, {
                        label: "mNFT",
                        disabled: !s.isModel && P.length === 0,
                        value: () => e.jsx(Te, J(H({}, s), {
                            openSet: !1,
                            list: P
                        }))
                    }] : [{
                        label: n("Currency"),
                        disabled: !s.isModel && E.length === 0 && k.length === 0,
                        value: () => e.jsx(Te, J(H({}, s), {
                            openSet: !1,
                            list2: j(k),
                            list: E
                        }))
                    }, {
                        label: "mNFT",
                        disabled: !s.isModel && P.length === 0,
                        value: () => e.jsx(Te, J(H({}, s), {
                            openSet: !1,
                            list: P
                        }))
                    }]
                }, [C]),
                [ze, ps] = o.useState(tl(be.length, I(d), s.selectBonusTab)),
                Js = o.useCallback(E => {
                    ps(E), s.onChangeBonus && s.onChangeBonus(E === 1)
                }, [ze]);
            return s.isModel ? e.jsxs(e.Fragment, {
                children: [m && e.jsxs("div", {
                    className: "search-head",
                    children: [D, c && e.jsx(T, {
                        onClick: () => {
                            Ie.push(e.jsx(Fn, {}))
                        },
                        children: e.jsx(u, {
                            name: "AddSub"
                        })
                    })]
                }), e.jsxs("div", {
                    className: g(Un, "search-dialog"),
                    children: [re ? e.jsx(Te, J(H({}, s), {
                        list: te
                    })) : e.jsx(ys, {
                        tabs: be,
                        value: ze,
                        onChange: Js
                    }), e.jsx(Rn, {
                        localcurrency: h.enableLocaleCurrency,
                        hideSmallBtn: A,
                        setlocal: N,
                        hideSmall: L,
                        setHideSmall: S
                    })]
                })]
            }) : e.jsx(Ce, {
                className: il,
                title: n("Assets Portfolio"),
                children: e.jsxs(e.Fragment, {
                    children: [m && e.jsx(bs, {
                        children: e.jsxs("div", {
                            className: ll,
                            children: [D, c && e.jsx(T, {
                                onClick: () => {
                                    Ie.push(e.jsx(Fn, {}))
                                },
                                children: e.jsx(u, {
                                    name: "AddSub"
                                })
                            })]
                        })
                    }), e.jsxs("div", {
                        className: g(Un, "search-dialog"),
                        children: [re ? e.jsx(Te, J(H({}, s), {
                            list: te
                        })) : e.jsx(ys, {
                            tabs: be,
                            value: ze,
                            onChange: ps
                        }), e.jsx(Rn, {
                            hideSmallBtn: A,
                            localcurrency: h.enableLocaleCurrency,
                            setlocal: N,
                            hideSmall: L,
                            setHideSmall: S
                        })]
                    })]
                })
            })
        },
        Te = f.memo(function(s) {
            const {
                t: n
            } = p(), a = _(), t = me();
            if (s.openSet) {
                const i = s.list.filter(d => d.display),
                    l = s.list2 ? s.list2.filter(d => d.display) : void 0,
                    r = s.list.filter(d => !d.display),
                    m = i.length === 0 && r.length === 0,
                    c = e.jsxs(e.Fragment, {
                        children: [e.jsx(ts, J(H({}, s), {
                            list: i,
                            list2: l
                        })), r.length > 0 && e.jsxs(e.Fragment, {
                            children: [e.jsxs("div", {
                                className: "hide-coin",
                                children: [n("Other Supported Coin"), e.jsxs("span", {
                                    className: "sub-tit",
                                    children: ["(", n("Click to add and use Coins"), ")"]
                                })]
                            }), e.jsx(ts, J(H({}, s), {
                                list: r,
                                onClickOpen: !0
                            }))]
                        })]
                    });
                return m ? e.jsxs(e.Fragment, {
                    children: [e.jsx($e, {
                        children: n("Coin or token not found")
                    }), e.jsxs("div", {
                        className: "go-swap",
                        children: [e.jsx(T, {
                            type: "conic2",
                            onClick: () => a("/wallet/swap"),
                            children: n("Swap Coin")
                        }), e.jsx("div", {
                            className: "txt",
                            children: n("For unsupported coins and tokens, try the {{site}} Swap feature to exchange for supported coins and tokens", {
                                site: v.siteName
                            })
                        })]
                    })]
                }) : s.isModel && !t ? e.jsx("div", {
                    className: "currency-list",
                    style: {
                        overflowY: "auto"
                    },
                    children: c
                }) : e.jsx(q, {
                    className: "currency-list",
                    children: c
                })
            } else return s.list.length === 0 ? e.jsx($e, {
                children: n("Coin or token not found")
            }) : s.isModel && !t ? e.jsx("div", {
                className: "currency-list",
                style: {
                    overflowY: "auto"
                },
                children: e.jsx(ts, H({}, s))
            }) : e.jsx(q, {
                className: "currency-list",
                children: e.jsx(ts, H({}, s))
            })
        });

    function ts(s) {
        const {
            t: n
        } = p(), a = Ne();

        function t(i) {
            s.onClickOpen && (a[i.currencyName].displayStatus = 1), s.onChange(i.currencyName)
        }
        return s.list && s.list.length > 0 && s.list2 && s.list2.length > 0 ? e.jsxs(e.Fragment, {
            children: [e.jsxs("div", {
                className: "fiat-list",
                children: [e.jsx("div", {
                    className: "list-tit",
                    children: n("Fiat")
                }), s.list2.map(i => e.jsx(Me, J(H({
                    item: i
                }, s), {
                    currency: s.currencyName,
                    onChange: () => t(i)
                }), i.currencyName))]
            }), e.jsxs("div", {
                className: "fiat-list",
                children: [e.jsx("div", {
                    className: "list-tit",
                    children: n("Crypto")
                }), s.list.map(i => e.jsx(Me, J(H({
                    item: i
                }, s), {
                    currency: s.currencyName,
                    onChange: () => t(i)
                }), i.currencyName))]
            })]
        }) : e.jsx(e.Fragment, {
            children: s.list.map(i => e.jsx(Me, J(H({
                item: i
            }, s), {
                currency: s.currencyName,
                onChange: () => t(i)
            }), i.currencyName))
        })
    }
    const il = "d1nxm4j0",
        Un = "ssshfkj",
        ll = "s81v038";

    function cl() {
        return e.jsxs("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            version: "1.1",
            width: "1024",
            height: "1024",
            viewBox: "0 0 1024 1024",
            style: {
                marginTop: "-2px"
            },
            children: [e.jsx("title", {}), e.jsx("g", {
                id: "icomoon-ignore"
            }), e.jsx("path", {
                d: "M357.776 178.512c-77.118 0.807-123.488-30.712-173.478-1.85s-70.736 86.512-46.344 128.765l219.824-126.914z"
            }), e.jsx("path", {
                d: "M377.173 167.313c39.256-66.384 35.147-122.299 85.136-151.16 49.994-28.862 110.288-18.005 134.686 24.247l-219.824 126.914z"
            }), e.jsx("path", {
                d: "M45.215 409.818c-21.128 12.202-28.367 39.216-16.169 60.341l66.256 114.757 344.277-198.768-88.272-152.896 76.507-44.173 88.273 152.896 344.277-198.768-66.256-114.76c-12.202-21.128-39.211-28.367-60.336-16.169l-688.559 397.537z"
            }), e.jsx("path", {
                d: "M514.994 582.288h-353.367v397.539c0 24.398 19.776 44.173 44.173 44.173h309.2v-441.712zM603.34 582.288v441.712h265.026c24.398 0 44.173-19.776 44.173-44.173v-397.539h-309.2z"
            }), e.jsx("path", {
                d: "M713.767 516.032c0 12.195 9.89 22.086 22.086 22.086s22.086-9.89 22.086-22.086v-44.173h44.173c12.195 0 22.086-9.89 22.086-22.086s-9.89-22.086-22.086-22.086h-44.173v-44.173c0-12.198-9.89-22.086-22.086-22.086s-22.086 9.888-22.086 22.086v44.173h-44.173c-12.195 0-22.086 9.89-22.086 22.086s9.89 22.086 22.086 22.086h44.173v44.173z"
            }), e.jsx("path", {
                d: "M890.448 339.347c0 12.198 9.89 22.086 22.086 22.086s22.086-9.888 22.086-22.086v-44.173h44.173c12.195 0 22.086-9.888 22.086-22.086s-9.89-22.086-22.086-22.086h-44.173v-44.173c0-12.198-9.89-22.086-22.086-22.086s-22.086 9.888-22.086 22.086v44.173h-44.173c-12.195 0-22.086 9.888-22.086 22.086s9.89 22.086 22.086 22.086h44.173v44.173z"
            })]
        })
    }
    const rl = o.memo(function({
            sidebarorAccount: s,
            setSidebarorAccount: n
        }) {
            const {
                t: a
            } = p(), {
                urlPathname: t
            } = V(), {
                login: i
            } = F(), l = i, r = _(), m = s === "account", c = s === "sidebar", d = Ym(t), {
                isKenyaHost: h
            } = w.getHostType(v.host), x = m || c ? !1 : d.show;
            return e.jsxs("div", {
                className: ml,
                children: [e.jsxs("div", {
                    className: g("tabbar-item", s === "sidebar" && "active"),
                    onClick: () => {
                        n("sidebar")
                    },
                    children: [e.jsx(Qm, {}), e.jsx("span", {
                        children: a("More")
                    })]
                }), e.jsxs("div", {
                    className: g("tabbar-item", x && "active"),
                    onClick: () => {
                        r("/"), n("")
                    },
                    children: [e.jsx(ed, {}), e.jsx("span", {
                        children: a("Home")
                    })]
                }), l || h ? e.jsxs("div", {
                    className: "tabbar-item",
                    onClick: () => {
                        r(`/wallet?from=${t}`), n("")
                    },
                    children: [e.jsx("div", {
                        className: "wallet-tabbar-wrap",
                        children: e.jsx("div", {
                            className: "in-1",
                            children: e.jsx("div", {
                                className: "in-2",
                                children: e.jsx(u, {
                                    name: "Wallet"
                                })
                            })
                        })
                    }), e.jsx("span", {
                        children: a("Wallet")
                    })]
                }) : e.jsxs("div", {
                    className: "tabbar-item",
                    onClick: () => {
                        r("/promotion"), n("")
                    },
                    children: [e.jsx("div", {
                        className: "wallet-tabbar-wrap",
                        children: e.jsx("div", {
                            className: "in-1",
                            children: e.jsx("div", {
                                className: "in-2",
                                children: e.jsx(cl, {})
                            })
                        })
                    }), e.jsx("span", {
                        children: a("Promotions")
                    })]
                }), e.jsxs("div", {
                    className: g("tabbar-item", m && "active"),
                    onClick: () => {
                        n("account")
                    },
                    children: [e.jsx(sd, {}), e.jsx("span", {
                        children: a("Account")
                    })]
                }), h ? e.jsxs("div", {
                    className: g("tabbar-item"),
                    onClick: () => {
                        r("/sports")
                    },
                    children: [e.jsx(u, {
                        name: "Sports"
                    }), e.jsx("span", {
                        children: a("Sports")
                    })]
                }) : e.jsx(ol, {
                    setSidebarorAccount: n
                })]
            })
        }),
        ol = o.memo(function({
            setSidebarorAccount: s
        }) {
            const {
                t: n
            } = p(), a = ge(), t = _();
            let i = a.atList.length > 0;
            const l = a.unReadNum > 0;
            return e.jsxs("div", {
                className: "tabbar-item",
                onClick: () => {
                    t("#/public-chat")
                },
                children: [i ? e.jsx("div", {
                    className: "at-badge",
                    children: "@"
                }) : l ? e.jsx("div", {
                    className: "dont-badge"
                }) : null, e.jsx(u, {
                    name: "Chat"
                }), e.jsx("span", {
                    children: n("Chat")
                })]
            })
        }),
        ml = "t1b5irhq",
        dl = o.memo(function({
            closeFn: s
        }) {
            const {
                lang: n
            } = V(), a = o.useMemo(() => Object.entries(Cs).map(([i, l]) => ({
                label: l[0],
                value: i
            })), []), t = At();
            return e.jsx("div", {
                className: hl,
                children: e.jsx(q, {
                    className: "mobile-lang-list-wrap",
                    children: a.map(i => {
                        const l = i.value == n;
                        return e.jsxs("button", {
                            className: g("lang-fiat-item", l && "select"),
                            onClick: () => {
                                t(i.value), s && s()
                            },
                            children: [e.jsx("div", {
                                className: "lf-inner",
                                children: e.jsx("span", {
                                    children: i.label
                                })
                            }), e.jsx("div", {
                                className: "hover-bg"
                            })]
                        }, i.value)
                    })
                })
            })
        }),
        hl = "l1tjfrk9",
        ul = o.memo(function() {
            const [s, n] = o.useState(!1), a = o.useRef(null), t = Oe(() => n(!1), [a]);
            return e.jsxs("div", {
                className: pl,
                ref: a,
                children: [e.jsx("div", {
                    className: "lan-header-inner",
                    onClick: () => n(!s),
                    children: e.jsx(u, {
                        name: "Language",
                        className: "language"
                    })
                }), e.jsx(pe, {
                    children: s && e.jsx($.div, {
                        ref: t,
                        className: "language-motion-wrap",
                        initial: {
                            y: "7%",
                            opacity: 0
                        },
                        animate: {
                            y: "0%",
                            opacity: 1
                        },
                        children: e.jsx(dl, {
                            closeFn: () => n(!1)
                        })
                    })
                })]
            })
        }),
        pl = "l1eoxxw5";

    function xl() {
        const [s, n] = o.useState(!1), a = o.useRef(0), t = o.useRef(null), i = o.useRef(v.platformCoin);
        return o.useEffect(() => {
            const l = "recharge-bonus-notice",
                r = Im.decodeBind(m => {
                    a.current = Number(m.amount), i.current = m.currencyName, n(!0), t.current = setTimeout(() => n(!1), 4e3)
                }, "json");
            return It.on(l, r), () => {
                It.off(l, r), t && t.current && clearTimeout(t.current)
            }
        }, []), s ? e.jsxs("div", {
            className: jl,
            onClick: () => n(!1),
            children: [e.jsxs("span", {
                children: ["+ ", a.current.toFixed(2)]
            }), " ", Be.getAlias(i.current)]
        }) : null
    }
    const jl = "s1tqnqd";

    function gl(s) {
        return new Promise(n => setTimeout(n, s))
    }

    function fl(s) {
        const n = [];
        return s.map(a => {
            const t = n.findIndex(i => i.currencyName === a.currencyName);
            t >= 0 ? n[t].amount = n[t].amount.add(a.amount) : n.push(H({}, a))
        }), n
    }
    const bl = f.memo(function() {
            const s = o.useRef(null),
                n = o.useRef(!1),
                a = o.useRef([]),
                [t, i] = o.useState([]);
            o.useEffect(() => {
                const r = m => {
                    m.solved && m.amount.gt(0) && !window.document.hidden && (n.current || (n.current = !0, a.current = a.current.concat(m), s.current = setTimeout(() => {
                        i(c => c.concat(fl(a.current))), n.current = !1, a.current = []
                    }, 200)))
                };
                return R.on("deduction", r), () => {
                    R.off("deduction", r), s.current && clearTimeout(s.current)
                }
            }, []);
            const l = o.useCallback(r => {
                i(m => m.filter(c => c !== r))
            }, []);
            return e.jsx(pe, {
                children: t.map((r, m) => e.jsx(yl, {
                    onRemove: l,
                    data: r,
                    index: m
                }, r.id))
            })
        }),
        vl = {
            y: 24,
            scale: .5,
            opacity: 1
        },
        Nl = {
            y: 16,
            scale: 1,
            opacity: 1
        },
        kl = {
            y: 0,
            scale: .7,
            opacity: 0
        },
        yl = f.memo(function({
            data: s,
            onRemove: n,
            index: a
        }) {
            return o.useEffect(() => {
                (async () => (await gl(800), n(s)))()
            }, []), e.jsx($.div, {
                animate: Nl,
                initial: vl,
                exit: kl,
                transition: {
                    duration: .3
                },
                className: g(Cl, "deduction-item-" + a),
                children: e.jsx(G.CoinFormat, {
                    name: s.currencyName,
                    amount: s.amount.toNumber(),
                    showName: !1
                })
            })
        }),
        Cl = "d1uojv1d";

    function wl({
        onChange: s,
        currency: n,
        className: a,
        onChangeBonus: t,
        showBonusAmount: i,
        selectBonusTab: l
    }) {
        const r = Ne(),
            m = F();

        function c(S) {
            s(S.currencyName)
        }
        const [d, h] = o.useState(l ? 1 : 0), x = m.bonusCurrencyName, {
            t: b
        } = p(), j = Object.values(r).filter(S => S.display), N = ws(j, [S => S.currencyName === x], ["desc"]), L = o.useCallback(S => {
            h(S), t && t(S === 1)
        }, [d]);
        if (t) {
            const S = [{
                label: b("Real Money"),
                value: () => e.jsx(q, {
                    children: N.map(C => e.jsx(Me, {
                        isReal: !0,
                        item: C,
                        showMaintain: !0,
                        currency: n,
                        onChange: c,
                        hover: !0
                    }, C.currencyName))
                })
            }, {
                label: b("Bonus Money"),
                value: () => e.jsx(q, {
                    children: N.map(C => e.jsx(Me, {
                        isBonus: !0,
                        item: C,
                        showMaintain: !0,
                        currency: n,
                        onChange: c,
                        hover: !0
                    }, C.currencyName))
                })
            }];
            return e.jsx("div", {
                className: g(a, Sl),
                children: e.jsx(ys, {
                    tabs: S,
                    value: d,
                    onChange: L
                })
            })
        }
        return e.jsx(q, {
            className: a,
            children: N.map(S => e.jsx(Me, {
                showBonusAmount: i,
                item: S,
                showMaintain: !0,
                currency: n,
                onChange: c,
                hover: !0
            }, S.currencyName))
        })
    }
    const Sl = "s7aktiy";

    function Tl(s) {
        const n = Be.getCurrency(s);
        n && (n.currencyType === "MNFT" ? Fe.setState({
            lastNftCurrency: s,
            currencyName: s
        }) : n.currencyType === "FIAT" ? Fe.setState({
            lastFiatCurrency: s,
            currencyName: s
        }) : Fe.setState({
            lastCryptoCurrency: s,
            currencyName: s
        }))
    }
    const Us = {
            initial: {
                y: -10,
                opacity: 0
            },
            animate: {
                y: 0,
                opacity: 1
            }
        },
        Mn = f.memo(() => {
            const s = z(),
                n = _(),
                a = me(),
                {
                    t
                } = p(),
                [i, l] = o.useState(!1),
                [r, m] = o.useState(!1),
                [c, d] = o.useState(""),
                [h, x] = o.useState(!1),
                b = o.useRef(null),
                j = Oe(() => l(!1), [b]),
                N = ve(),
                L = Ne(N.currencyName).amount,
                {
                    isKenyaHost: S,
                    isBrHost: C,
                    isNgHost: A,
                    isIdHost: re,
                    isUsHost: D
                } = w.getHostType(v.host),
                te = C || S || A || re;
            return o.useEffect(() => {
                i ? R.emit("mobile-shadow-toggle", !0) : setTimeout(() => {
                    R.emit("mobile-shadow-toggle", !1)
                }, 100)
            }, [i]), o.useEffect(() => {
                function I(be) {
                    a ? (c && s.close(), s.push(e.jsx(Hn, {
                        show: be,
                        closeFn: () => s.close(),
                        switchFn: () => l(!0)
                    }))) : d(be)
                }

                function oe() {
                    m(!0)
                }
                return R.on("hideAmount", x), R.on("game-bet-amount-insufficient", I), R.on("in-playing-slots-game", oe), () => {
                    R.off("hideAmount", x), R.off("game-bet-amount-insufficient", I), R.off("in-playing-slots-game", oe)
                }
            }, []), e.jsxs("div", {
                className: g(Ll, "wallet-enter"),
                children: [e.jsxs("div", {
                    className: Fl,
                    ref: b,
                    onClick: I => l(!i),
                    children: [e.jsxs("div", {
                        className: g(El, "wallet-enter-lef-tinfo"),
                        children: [h ? e.jsxs("div", {
                            className: Wn,
                            children: [e.jsx(G.CoinIcon, {
                                name: N.currencyName
                            }), e.jsx("span", {
                                className: "currency",
                                children: Be.getAlias(N.currencyName)
                            }), r && e.jsx("span", {
                                className: "in-play",
                                children: t("In Play")
                            }), e.jsx(u, {
                                name: "Arrow"
                            })]
                        }) : e.jsxs("div", {
                            className: Wn,
                            children: [e.jsx(G.CoinIcon, {
                                name: N.currencyName
                            }), e.jsx(G.CoinFormat, {
                                className: "balance",
                                name: N.currencyName,
                                amount: L
                            }), e.jsx(u, {
                                name: "Arrow"
                            })]
                        }), !a && c && e.jsxs(e.Fragment, {
                            children: [e.jsx(Hn, {
                                show: c,
                                closeFn: () => d(""),
                                switchFn: () => l(!0)
                            }), e.jsx("div", {
                                className: "rac"
                            })]
                        }), e.jsx(bl, {})]
                    }), !D && e.jsxs(T, {
                        className: Ul,
                        type: "conic2",
                        onClick: I => {
                            R.emit("track", "upperbar_click", {
                                button_name: "deposit"
                            }), I.stopPropagation(), l(!1), n(te ? "#/brwallet/deposit" : "#/deposit")
                        },
                        children: [e.jsx(u, {
                            name: "Wallet"
                        }), e.jsx("span", {
                            children: t("Deposit")
                        })]
                    }), e.jsx(xl, {})]
                }), e.jsx(pe, {
                    children: i && e.jsx($.div, {
                        className: Rl,
                        ref: j,
                        initial: Us.initial,
                        animate: Us.animate,
                        exit: Us.initial,
                        children: te ? e.jsx("div", {
                            className: "balance-select bg",
                            children: e.jsx(wl, {
                                currency: N.currencyName,
                                showBonusAmount: !0,
                                onChange: I => {
                                    N.currencyName = I, l(!1)
                                }
                            })
                        }) : e.jsx(_l, {
                            currencyName: N.currencyName,
                            showBonusAmount: !0,
                            onChange: I => {
                                Tl(I), l(!1)
                            }
                        })
                    })
                })]
            })
        });

    function _l({
        currencyName: s,
        showBonusAmount: n,
        onChange: a
    }) {
        const t = Object.values(Ne());
        return e.jsx("div", {
            className: Vl,
            children: e.jsx(En, {
                isModel: !0,
                currencyName: s,
                showBonusAmount: n,
                list: t,
                openSet: !0,
                onChange: a,
                orderType: "normal",
                isSearch: !0,
                showMaintain: !1,
                hover: !0,
                focus: !1
            })
        })
    }
    const Hn = f.memo(function({
            show: s,
            closeFn: n,
            switchFn: a
        }) {
            const {
                t
            } = p(), i = _(), {
                currencyName: l
            } = ve(), r = s === "common", m = s === "balance", c = Be.getAlias(l);
            return e.jsxs("div", {
                className: g(Ml, m && "balance-wrap"),
                onClick: d => d.stopPropagation(),
                children: [e.jsx("div", {
                    className: "close-btn-w",
                    children: e.jsx("button", {
                        onClick: n,
                        className: "close",
                        children: e.jsx(u, {
                            name: "Close"
                        })
                    })
                }), m ? e.jsx("p", {
                    className: "l-d",
                    children: t("You can not play the game with your bonus money. Please play available games or go deposit.")
                }) : e.jsx("p", {
                    className: "d",
                    children: r ? e.jsxs(xe, {
                        currency_name: c,
                        i18nKey: "trans.mainpage.balance.desc1",
                        children: ["Insufficient ", e.jsx("span", {
                            className: "g",
                            children: {
                                currency_name: c
                            }
                        }), " balance. Make a deposit to keep the fun going!"]
                    }) : e.jsxs(xe, {
                        currency_name: c,
                        i18nKey: "trans.mainpage.balance.desc2",
                        children: ["Insufficient ", e.jsx("span", {
                            className: "g",
                            children: {
                                currency_name: c
                            }
                        }), " balance, switch to another asset to continue playing."]
                    })
                }), e.jsxs("div", {
                    className: "btns",
                    children: [m ? e.jsx("p", {
                        className: "cl-p",
                        onClick: () => i(`#/newuser/gamelist/${l}`),
                        children: t("Play available games")
                    }) : r ? null : e.jsx(T, {
                        className: "switch-btn",
                        onClick: () => {
                            n(), a()
                        },
                        children: t("Switch")
                    }), e.jsx(T, {
                        type: "conic",
                        onClick: () => {
                            n(), i("#/deposit")
                        },
                        children: t("Deposit")
                    })]
                })]
            })
        }),
        Vl = "sge4pt",
        Rl = "a1tlx91c",
        Ll = "w1r99ly1",
        Fl = "e1apcgi5",
        Wn = "ttilbyf",
        El = "c1wjh8dn",
        Ul = "b1roz03j",
        Ml = "izof4yk",
        An = qs.proxy({
            unrade: 0,
            showEnter: !1
        });
    Ai(s => {
        Object.assign(An, s)
    });

    function Hl() {
        return qs.useProxy(An)
    }
    const Ms = o.memo(function({
            mobile: s = !1
        }) {
            const n = _(),
                a = F(),
                t = Hl();
            return a.login && t.showEnter ? s ? e.jsx(Ot, {
                num: t.unrade
            }) : e.jsxs("div", {
                className: `${Wl} private-chat`,
                onClick: () => {
                    n("#/chat"), W.trackEvent("upperbar_click", {
                        button_name: "private_chat"
                    })
                },
                children: [e.jsx(u, {
                    name: "Mail"
                }), e.jsx(Ot, {
                    num: t.unrade
                })]
            }) : null
        }),
        Wl = "w1ct3jin",
        Al = o.memo(function({
            sidebarorAccount: s,
            changeFn: n
        }) {
            return F().login ? e.jsx(Ol, {
                changeFn: n
            }) : e.jsx(Il, {
                sidebarorAccount: s
            })
        }),
        Il = o.memo(function({
            sidebarorAccount: s
        }) {
            const {
                t: n
            } = p(), a = _(), t = s === "account";
            return e.jsxs("div", {
                className: "mobile-nologin-header-wrap",
                children: [!t && e.jsxs("div", {
                    className: "mobile-nologin-enter",
                    children: [e.jsx(T, {
                        className: "signin",
                        onClick: () => a("#/login"),
                        children: n("Sign in")
                    }), e.jsx(T, {
                        type: "conic",
                        onClick: () => a("#/login/regist"),
                        children: n("Sign up")
                    })]
                }), e.jsx(ul, {})]
            })
        }),
        Ol = o.memo(function({
            changeFn: s
        }) {
            p();
            const n = _();
            return e.jsxs("div", {
                className: "mobile-login-header-wrap",
                children: [e.jsx(Mn, {}), e.jsx(T, {
                    className: "deposit-btn",
                    onClick: () => n("#/deposit"),
                    children: e.jsx(nd, {})
                }), e.jsx(Ms, {}), e.jsx("div", {
                    className: "header-bonus-enter",
                    children: e.jsx(de.Target, {
                        id: "bonus-mobile-header-enter"
                    })
                })]
            })
        }),
        Hs = o.memo(function({
            link: s,
            buttonName: n,
            icon: a,
            label: t,
            closeFn: i,
            sportsBettings: l
        }) {
            const r = s.indexOf("http") >= 0;
            return e.jsxs(y, {
                className: "s-nav-item",
                href: s,
                target: r ? "_blank" : "_self",
                onClick: () => {
                    W.trackEvent("sidebar_click", {
                        button_name: n
                    }), i()
                },
                children: [e.jsx("div", {
                    className: "s-nav-item-left",
                    children: l ? e.jsx(Qs, {}) : a === "Leicester" ? e.jsx(Dt, {
                        className: "mb-leicester"
                    }) : e.jsx(u, {
                        name: a
                    })
                }), e.jsxs("div", {
                    className: "s-nav-item-right",
                    children: [e.jsx("span", {
                        children: t
                    }), r && e.jsx(u, {
                        name: "NewWindow"
                    })]
                })]
            })
        }),
        Bl = o.memo(function({
            link: s,
            buttonName: n,
            icon: a,
            label: t,
            closeFn: i
        }) {
            const l = _(),
                {
                    urlOriginal: r
                } = V(),
                m = r === s;
            return e.jsxs("div", {
                className: g("s-nav-item", m && "active"),
                onClick: () => {
                    W.trackEvent("sidebar_click", {
                        button_name: n
                    }), l(s), i()
                },
                children: [e.jsx("div", {
                    className: "s-nav-item-left",
                    children: e.jsx(u, {
                        name: a
                    })
                }), e.jsx("div", {
                    className: "s-nav-item-right",
                    children: e.jsx("span", {
                        children: t
                    })
                })]
            })
        }),
        Zl = o.memo(function() {
            const {
                t: s
            } = p(), n = _(), [a, t] = o.useState(-1), i = F();
            return o.useEffect(() => {
                i.login && w.serverTime().getTime() - i.createTime < 864e5 && ae.get("/account/invitation/get/").then(l => {
                    l && (!l.invitationCode || l.invitationCode === "") && t(i.createTime + 864e5)
                }).catch(console.log)
            }, [i.login]), a <= 0 ? null : e.jsxs("div", {
                className: "s-nav-wrap-item promo-item",
                onClick: () => {
                    n("#/promocode")
                },
                children: [e.jsxs("div", {
                    className: "left-c c-wrap",
                    children: [e.jsx("div", {}), e.jsx("div", {}), e.jsx("div", {})]
                }), e.jsxs("div", {
                    className: "right-c c-wrap",
                    children: [e.jsx("div", {}), e.jsx("div", {}), e.jsx("div", {})]
                }), e.jsx("div", {
                    className: "gift",
                    children: e.jsx(ad, {})
                }), e.jsxs("div", {
                    className: "time-left",
                    children: [e.jsx("div", {
                        children: s("Enter Referral/Promo Code")
                    }), e.jsx("div", {
                        className: "lines"
                    }), e.jsx("div", {
                        children: e.jsx($s, {
                            endTime: a,
                            children: ({
                                hours: l,
                                minutes: r,
                                seconds: m
                            }) => `${l}:${r}:${m}`
                        })
                    })]
                })]
            })
        }),
        Pl = o.memo(function({
            closeFn: s
        }) {
            const {
                t: n
            } = p(), {
                isKenyaHost: a
            } = w.getHostType(v.host), t = Gl(), i = () => {
                var l;
                (l = Ee) == null || l.openLiveSupport(), W.trackEvent("sidebar_click", {
                    button_name: "live_support"
                })
            };
            return e.jsxs(e.Fragment, {
                children: [e.jsx(Zl, {}), e.jsx("div", {
                    className: "s-nav-wrap-item",
                    children: t.map((l, r) => l.kenya && a ? null : l.links ? e.jsx(Jl, {
                        closeFn: s,
                        icon: l.icon,
                        label: l.label,
                        links: l.links
                    }, "s-toggle-" + r) : l.fair && a ? null : o.createElement(Hs, J(H({}, l), {
                        closeFn: s,
                        key: "s-link-" + r
                    })))
                }), e.jsxs("div", {
                    className: "s-nav-wrap-item",
                    children: [e.jsx("div", {
                        className: "s-nav-title",
                        children: e.jsx("span", {
                            children: n("Support")
                        })
                    }), e.jsxs("div", {
                        className: "s-nav-item",
                        onClick: i,
                        children: [e.jsx("div", {
                            className: "s-nav-item-left",
                            children: e.jsx(u, {
                                name: "Support"
                            })
                        }), e.jsx("div", {
                            className: "s-nav-item-right",
                            children: e.jsx("span", {
                                children: n("Live Support")
                            })
                        })]
                    })]
                })]
            })
        }),
        Jl = o.memo(function({
            icon: s,
            label: n,
            links: a,
            closeFn: t
        }) {
            const [i, l] = o.useState(!1);
            return e.jsxs("div", {
                className: g(Xl, i && "open"),
                children: [e.jsxs("div", {
                    className: "s-nav-item",
                    onClick: () => {
                        l(!i)
                    },
                    children: [e.jsx("div", {
                        className: "s-nav-item-left",
                        children: e.jsx(u, {
                            name: s
                        })
                    }), e.jsxs("div", {
                        className: "s-nav-item-right",
                        children: [e.jsx("span", {
                            children: n
                        }), e.jsx(u, {
                            className: "s-arrow",
                            name: "Arrow"
                        })]
                    })]
                }), e.jsx(Ys, {
                    visible: i,
                    children: e.jsx("div", {
                        className: "s-sub-navs-wrap",
                        children: a.map((r, m) => o.createElement(Hs, J(H({}, r), {
                            closeFn: t,
                            key: "s-sub-link-" + m
                        })))
                    })
                })]
            })
        });

    function Gl() {
        const {
            t: s
        } = p(), {
            lang: n
        } = V(), a = ["bn", "uk", "ru", "pt", "hi"].find(t => n === t);
        return [{
            label: s("VIP Club"),
            icon: "VipClub",
            link: "#/vip",
            buttonName: "vip_club"
        }, {
            label: s("Promotions"),
            icon: "Promotion",
            link: "/promotion",
            buttonName: "promotion",
            kenya: !0
        }, {
            label: s("Daily Contest"),
            icon: "DailyContest",
            link: "/promotions/daily-contest",
            buttonName: "daily-contest",
            kenya: !0
        }, {
            label: s("Weekly Raffle"),
            icon: "WeeklyRaffle",
            link: "/promotions/weekly-raffle",
            buttonName: "weekly-raffle",
            kenya: !0
        }, {
            label: s("Affiliate"),
            icon: "Affiliate",
            link: "/affiliate",
            buttonName: "",
            kenya: !0
        }, {
            label: s("Forum"),
            icon: "Forum",
            link: `https://forum.${v.host}/`,
            buttonName: "forum",
            kenya: !0
        }, {
            label: s("Provably Fair"),
            icon: "ProvablyFair",
            link: "/help",
            buttonName: "provably_fair",
            fair: !0,
            kenya: !0
        }, {
            label: s("Blog"),
            icon: "Blog",
            link: `https://blog.${v.host}/`,
            buttonName: "blog",
            kenya: !0
        }, {
            label: s("Sport Betting Insights"),
            icon: "Blog",
            sportsBettings: !0,
            link: `https://betting.${v.buildHost}/${a!=null?a:""}`,
            buttonName: ""
        }, {
            label: s("Sponsorships"),
            icon: "Sponsorship",
            link: "",
            buttonName: "",
            kenya: !0,
            links: [{
                label: s("AFA"),
                icon: "AFA",
                link: "/sponsorship/afa",
                buttonName: "sponsorship"
            }, {
                label: s("Cloud9"),
                icon: "Cloud9",
                link: "/sponsorship/cloud-9",
                buttonName: "sponsorship"
            }]
        }]
    }
    const Xl = "t9kszd3",
        Dl = o.memo(function({
            active: s,
            setSearch: n
        }) {
            const {
                t: a
            } = p();
            return e.jsx("div", {
                className: Kl,
                children: e.jsxs("div", {
                    className: "s-search-right",
                    onClick: () => n(String(s)),
                    children: [e.jsx(u, {
                        name: "Search"
                    }), e.jsxs("span", {
                        children: [s === he.CASINO && a("Game name | Provider"), s === he.SPORTS && a("Search"), s === he.LOTTERY && a("Search Lottery Name")]
                    })]
                })
            })
        }),
        Kl = "trofzcu",
        zl = o.memo(function({
            closeFn: s
        }) {
            const {
                t: n
            } = p(), a = $l(), t = F();
            return e.jsxs(e.Fragment, {
                children: [t.login && e.jsxs("div", {
                    className: "s-nav-wrap-item s-login-item-wrap",
                    children: [e.jsxs(y, {
                        href: "/gamelist/picks-for-you",
                        onClick: () => {
                            W.trackEvent("sidebar_click", {
                                button_name: "picks_for_you"
                            }), s()
                        },
                        children: [e.jsx(u, {
                            name: "PicksForYou"
                        }), e.jsx("span", {
                            children: n("Picks For You")
                        })]
                    }), e.jsxs(y, {
                        href: t.login ? "/favorite" : "",
                        onClick: () => {
                            W.trackEvent("sidebar_click", {
                                button_name: "favorite_games"
                            }), s()
                        },
                        children: [e.jsx(u, {
                            name: "Favorites"
                        }), e.jsx("span", {
                            children: n("Favorites")
                        })]
                    }), e.jsxs(y, {
                        href: t.login ? "/recent" : "",
                        onClick: () => {
                            W.trackEvent("sidebar_click", {
                                button_name: "recent_games"
                            }), s()
                        },
                        children: [e.jsx(u, {
                            name: "Recent"
                        }), e.jsx("span", {
                            children: n("Recent")
                        })]
                    })]
                }), e.jsxs("div", {
                    className: "s-nav-wrap-item",
                    children: [e.jsx("div", {
                        className: "s-nav-title",
                        children: e.jsx("span", {
                            children: n("Games")
                        })
                    }), a.map((i, l) => i.buttonName === "games_for_bonus" ? e.jsx(ql, {
                        item: i
                    }) : o.createElement(Hs, J(H({}, i), {
                        closeFn: s,
                        key: "s-sub-link-" + l
                    })))]
                })]
            })
        }),
        ql = o.memo(function({
            item: s
        }) {
            const n = Ne();
            return F().login && Object.values(n).find(a => a.bonusAmount.gt(0)) ? e.jsxs(y, {
                className: "s-nav-item",
                href: s.link,
                onClick: () => {
                    W.trackEvent("sidebar_click", {
                        button_name: s.buttonName
                    })
                },
                children: [e.jsx("div", {
                    className: "s-nav-item-left",
                    children: e.jsx(Kt, {})
                }), e.jsx("div", {
                    className: "s-nav-item-right",
                    children: e.jsx("span", {
                        children: s.label
                    })
                })]
            }) : null
        });

    function $l() {
        const {
            t: s
        } = p();
        return [{
            label: s("{{site}} Originals", {
                site: v.siteName
            }),
            icon: "ClassicDice",
            link: "/gamelist/brand",
            buttonName: "originals"
        }, {
            label: s("Slots"),
            icon: "Slots",
            link: "/gamelist/slots",
            buttonName: "slots"
        }, {
            label: s("Live Casino"),
            icon: "LiveCasino",
            link: "/gamelist/live",
            buttonName: "live_casino"
        }, {
            label: s("Games for bonus"),
            icon: "Recent",
            link: "/games-for-bonus",
            buttonName: "games_for_bonus"
        }, {
            label: s("Hot Games"),
            icon: "HotGame",
            link: "/tagname/hot",
            buttonName: "hot_games"
        }, {
            label: s("New Releases"),
            icon: "NewReleases",
            link: "/tagname/new-releases",
            buttonName: "new_releases"
        }, {
            label: s("Feature Buy-in"),
            icon: "FeatureBuy-in",
            link: "/tagname/feature-buy-in",
            buttonName: "feature_buy_in"
        }, {
            label: s("Blackjack"),
            icon: "Blackjack",
            link: "/tagname/blackjack",
            buttonName: "blackjack"
        }, {
            label: s("Table Games"),
            icon: "TableGame",
            link: "/tagname/table-games",
            buttonName: "table_games"
        }]
    }
    const Yl = o.memo(function({
        closeFn: s
    }) {
        const {
            t: n
        } = p(), a = _(), t = Ql(), i = F();
        return e.jsxs(e.Fragment, {
            children: [i.login && e.jsxs("div", {
                className: "s-nav-wrap-item s-login-item-wrap",
                children: [e.jsxs(y, {
                    href: "#",
                    onClick: () => {
                        W.trackEvent("sidebar_click", {
                            button_name: "sports_live_events"
                        }), a("/sports?bt-path=%2Flive"), s()
                    },
                    children: [e.jsx(u, {
                        name: "LiveEvents"
                    }), e.jsx("span", {
                        children: n("Live Events")
                    })]
                }), e.jsxs(y, {
                    href: "#",
                    onClick: () => {
                        W.trackEvent("sidebar_click", {
                            button_name: "sports_favorite_games"
                        }), a("/sports?bt-path=%2Ffavorites"), s()
                    },
                    children: [e.jsx(u, {
                        name: "Favorites"
                    }), e.jsx("span", {
                        children: n("Favorites")
                    })]
                }), e.jsxs(y, {
                    href: "#",
                    onClick: () => {
                        W.trackEvent("sidebar_click", {
                            button_name: "sports_mybets"
                        }), a("/sports?bt-path=%2Fbets"), s()
                    },
                    children: [e.jsx(td, {}), e.jsx("span", {
                        children: n("My bets")
                    })]
                })]
            }), e.jsxs("div", {
                className: "s-nav-wrap-item",
                children: [e.jsx("div", {
                    className: "s-nav-title",
                    children: e.jsx("span", {
                        children: n("Games")
                    })
                }), t.map((l, r) => o.createElement(Bl, J(H({}, l), {
                    closeFn: s,
                    key: "sports-sub-link-" + r
                })))]
            })]
        })
    });

    function Ql() {
        const {
            t: s
        } = p();
        return [{
            label: s("Soccer"),
            icon: "Soccer",
            link: "/sports?bt-path=%2Fsoccer-1",
            buttonName: "soccer"
        }, {
            label: s("Tennis"),
            icon: "Tennis",
            link: "/sports?bt-path=%2Ftennis-5",
            buttonName: "tennis"
        }, {
            label: s("Basketball"),
            icon: "Basketball",
            link: "/sports?bt-path=%2Fbasketball-2",
            buttonName: "basketball"
        }, {
            label: s("Cricket"),
            icon: "Cricket",
            link: "/sports?bt-path=%2Fcricket-21",
            buttonName: "cricket"
        }, {
            label: s("FIFA"),
            icon: "FIFA",
            link: "/sports?bt-path=%2Ffifa-300",
            buttonName: "fifa"
        }, {
            label: s("American Football"),
            icon: "AmericanFootball",
            link: "/sports?bt-path=%2Famerican-football-16",
            buttonName: "american_football"
        }, {
            label: s("Ice Hockey"),
            icon: "IceHockey",
            link: "/sports?bt-path=%2Fice-hockey-4",
            buttonName: "ice_hockey"
        }, {
            label: s("Baseball"),
            icon: "Baseball",
            link: "/sports?bt-path=%2Fbaseball-3",
            buttonName: "baseball"
        }, {
            label: s("Handball"),
            icon: "Handball",
            link: "/sports?bt-path=%2Fhandball-6",
            buttonName: "handball"
        }]
    }
    const is = f.memo(function({
            name: s,
            icon: n
        }) {
            return s === "RacingIcon" ? e.jsx(id, {}) : s === "RacingHorse" ? e.jsx(ld, {
                className: "racing-horse-svg"
            }) : s === "RacingGreyhound" ? e.jsx(cd, {
                className: "racing-horse-svg"
            }) : s === "TradingIcon" ? e.jsx(zt, {}) : s === "ContractIcon" ? e.jsx(qt, {}) : s === "UpDownIcon" ? e.jsx($t, {}) : s === "GamesIcon" ? e.jsx(rd, {}) : s === "LotteryMyBets" ? e.jsx(od, {}) : s === "LotteryAllLotteries" ? e.jsx(md, {}) : s === "LotteryPicksForYou" ? e.jsx(dd, {}) : s === "LotteryFavourite" ? e.jsx(hd, {}) : s === "LotteryBcLottery" ? e.jsx(ud, {}) : s === "LotteryPopular" ? e.jsx(pd, {}) : n === "Leicester" ? e.jsx(Dt, {}) : e.jsx(u, {
                name: n
            })
        }),
        ec = o.memo(function({
            closeFn: s
        }) {
            const {
                t: n
            } = p(), a = nc(), t = F().login, i = t ? a : a.filter(l => !l.isLoginShow);
            return e.jsxs(e.Fragment, {
                children: [t && e.jsxs("div", {
                    className: "s-nav-wrap-item s-login-item-wrap",
                    children: [e.jsxs(y, {
                        href: "/lottery/allLotteries?sort=lottery_picks_for_you",
                        onClick: () => {
                            s()
                        },
                        children: [e.jsx(u, {
                            name: "PicksForYou"
                        }), e.jsx("span", {
                            children: n("Picks For You")
                        })]
                    }), e.jsxs(y, {
                        href: "/lottery/favourite",
                        onClick: () => {
                            s()
                        },
                        children: [e.jsx(u, {
                            name: "Favorites"
                        }), e.jsx("span", {
                            children: n("Favorites")
                        })]
                    }), e.jsxs(y, {
                        href: "/lottery/mybets",
                        onClick: () => {
                            s()
                        },
                        children: [e.jsx(u, {
                            name: "Recent"
                        }), e.jsx("span", {
                            children: n("My bets")
                        })]
                    })]
                }), e.jsxs("div", {
                    className: "s-nav-wrap-item",
                    children: [e.jsx("div", {
                        className: "s-nav-title",
                        children: e.jsx("span", {
                            children: n("Lottery")
                        })
                    }), i.map((l, r) => e.jsx(sc, {
                        item: l,
                        closeFn: s
                    }, l.buttonName))]
                })]
            })
        }),
        sc = o.memo(function({
            item: s,
            closeFn: n
        }) {
            return e.jsxs(y, {
                className: "s-nav-item",
                href: s.link,
                onClick: () => {
                    n(), W.trackEvent("sidebar_click", {
                        button_name: s.buttonName
                    })
                },
                children: [e.jsx("div", {
                    className: "s-nav-item-left",
                    children: e.jsx(is, {
                        icon: s.icon,
                        name: s.iconName
                    })
                }), e.jsx("div", {
                    className: "s-nav-item-right",
                    children: e.jsx("span", {
                        children: s.label
                    })
                })]
            })
        });

    function nc() {
        const {
            t: s
        } = p();
        return [{
            label: s("My bets"),
            icon: "Mybets",
            link: "/lottery/myBets",
            buttonName: "LotteryMyBets",
            iconName: "LotteryMyBets",
            isLoginShow: !0
        }, {
            label: s("All Lotteries"),
            link: "/lottery/allLotteries",
            buttonName: "LotteryAllLotteries",
            iconName: "LotteryAllLotteries"
        }, {
            label: s("Picks For You"),
            link: "/lottery/allLotteries?sort=lottery_picks_for_you",
            buttonName: "LotteryPicksForYou",
            iconName: "LotteryPicksForYou",
            isLoginShow: !0
        }, {
            label: s("Favourite"),
            link: "/lottery/favourite",
            buttonName: "LotteryFavourite",
            iconName: "LotteryFavourite",
            isLoginShow: !0
        }, {
            label: s("{{site}} Lottery", {
                site: v.siteName
            }),
            link: "/lottery/detail/0",
            buttonName: "LotteryBcLottery",
            iconName: "LotteryBcLottery"
        }, {
            label: s("Popular"),
            link: "/lottery/allLotteries?sort=lottery_popular",
            buttonName: "LotteryPopular",
            iconName: "LotteryPopular"
        }]
    }
    const ac = f.memo(function({
            setSearch: s,
            closeFn: n
        }) {
            const {
                lang: a,
                urlPathname: t
            } = V(), [i, l] = o.useState(Yt(t)), r = i === he.CASINO || i === he.SPORTS || i === he.LOTTERY, m = _(), c = xd(), d = t.startsWith("/sports"), h = t === "/", {
                isKenyaHost: x
            } = w.getHostType(v.host), b = a === "ja";
            return o.useEffect(() => {
                l(Yt(t))
            }, [t]), e.jsx("div", {
                className: tc,
                children: e.jsx("div", {
                    className: "s-scroll-wrap",
                    children: e.jsx(pe, {
                        children: e.jsx($.div, {
                            className: "s-motion-item",
                            initial: {
                                y: "25%",
                                opacity: 0
                            },
                            animate: {
                                y: "0%",
                                opacity: 1
                            },
                            transition: {
                                duration: .2
                            },
                            children: e.jsxs(q, {
                                children: [x && !d && !h && e.jsx("div", {
                                    className: g(ic, "s-nav-wrap-item"),
                                    children: e.jsx(q, {
                                        className: "kenya-scroll",
                                        children: e.jsx("div", {
                                            className: "kenya-navs-wrap",
                                            children: c.map(j => {
                                                let N = Qt(t, j.type),
                                                    L = j.route || ei[j.type];
                                                return b && j.type === he.TRADING ? null : e.jsxs("button", {
                                                    className: g("kenya-top-navigate-item", N && "active"),
                                                    onClick: () => {
                                                        m(L), n()
                                                    },
                                                    children: [j.icon, e.jsx("span", {
                                                        children: j.label
                                                    })]
                                                }, j.label)
                                            })
                                        })
                                    })
                                }), r && e.jsx(Dl, {
                                    active: i,
                                    setSearch: s
                                }), i === he.CASINO && e.jsx(zl, {
                                    closeFn: n
                                }), i === he.SPORTS && e.jsx(Yl, {
                                    closeFn: n
                                }), i === he.LOTTERY && e.jsx(ec, {
                                    closeFn: n
                                }), e.jsx(Pl, {
                                    closeFn: n
                                })]
                            })
                        }, i)
                    })
                })
            })
        }),
        tc = "m18t3jnw",
        ic = "k1bfzm5s",
        lc = o.memo(function({
            closeFn: s
        }) {
            const {
                t: n
            } = p(), a = _();
            return e.jsxs("div", {
                className: g(cc, "a-wrap-item"),
                children: [e.jsxs("div", {
                    className: "a-top",
                    children: [e.jsx(jd, {}), e.jsxs("div", {
                        className: "a-p",
                        children: [e.jsxs("p", {
                            className: "a-t",
                            children: [e.jsx("span", {
                                children: n("Welcome to")
                            }), e.jsx("span", {
                                className: "host",
                                children: v.host
                            })]
                        }), e.jsx("p", {
                            className: "a-d",
                            children: n("Please Sign up or Log in first")
                        })]
                    })]
                }), e.jsxs("div", {
                    className: "a-sign",
                    children: [e.jsx(T, {
                        className: "a-s",
                        onClick: () => {
                            a("#/login")
                        },
                        children: n("Sign in")
                    }), e.jsx(T, {
                        className: "a-r",
                        type: "conic",
                        onClick: () => {
                            a("#/login/regist")
                        },
                        children: n("Sign up")
                    })]
                })]
            })
        }),
        cc = "nrb2lhb",
        In = o.memo(function({
            isBig: s = !1,
            styles: n
        }) {
            const {
                t: a
            } = p(), t = le(), i = Om();
            return e.jsx("div", {
                className: g(rc, "theme-wrap", !t && "light"),
                style: n,
                children: e.jsxs("div", {
                    className: "theme-inner",
                    children: [e.jsxs("button", {
                        className: t ? "active" : "",
                        onClick: () => {
                            i(!0), W.trackEvent("sidebar_click", {
                                button_name: "theme"
                            })
                        },
                        children: [e.jsx(u, {
                            name: "Dark"
                        }), s && e.jsx("span", {
                            children: a("Dark")
                        })]
                    }), e.jsxs("button", {
                        className: t ? "" : "active",
                        onClick: () => {
                            i(!1), W.trackEvent("sidebar_click", {
                                button_name: "theme"
                            })
                        },
                        children: [e.jsx(u, {
                            name: "Light"
                        }), s && e.jsx("span", {
                            children: a("Light")
                        })]
                    }), e.jsx("div", {
                        className: "theme-bg"
                    })]
                })
            })
        }),
        rc = "t92zz1d",
        oc = o.memo(function({
            closeFn: s
        }) {
            const {
                t: n
            } = p(), a = _(), {
                lang: t
            } = V(), i = F(), l = ai(t), {
                localeCurrencyName: r,
                enableLocaleCurrency: m
            } = ve(), {
                isKenyaHost: c
            } = w.getHostType(v.host);
            return e.jsxs("div", {
                className: g(mc, "a-wrap-item"),
                children: [i.login && e.jsxs("div", {
                    className: "a-action-item",
                    onClick: () => {
                        a("/setting"), s()
                    },
                    children: [e.jsxs("div", {
                        className: "a-action-left",
                        children: [e.jsx("div", {
                            className: "a-settings",
                            children: e.jsx(u, {
                                name: "Setting"
                            })
                        }), e.jsx("span", {
                            children: n("Global Settings")
                        })]
                    }), e.jsxs("div", {
                        className: "a-action-right",
                        children: [e.jsx("span", {
                            className: "a-r-span",
                            children: e.jsx(de.Target, {
                                id: "settings-mobile-security-enter"
                            })
                        }), e.jsx(u, {
                            name: "Arrow"
                        })]
                    })]
                }), e.jsxs("div", {
                    className: "a-action-item",
                    onClick: () => {
                        R.emit("open-language-fiat", 0)
                    },
                    children: [e.jsxs("div", {
                        className: "a-action-left",
                        children: [e.jsx(u, {
                            name: "Language"
                        }), e.jsx("span", {
                            children: n("Language")
                        })]
                    }), e.jsxs("div", {
                        className: "a-action-right",
                        children: [e.jsx("span", {
                            className: "a-r-span",
                            children: Cs[l][0]
                        }), e.jsx(u, {
                            name: "Arrow"
                        })]
                    })]
                }), e.jsxs("div", {
                    className: "a-action-item",
                    onClick: () => {
                        c || R.emit("open-language-fiat", 1)
                    },
                    children: [e.jsxs("div", {
                        className: "a-action-left",
                        children: [e.jsx(u, {
                            name: "Interests"
                        }), e.jsx("span", {
                            children: n("Currency")
                        })]
                    }), e.jsxs("div", {
                        className: "a-action-right",
                        children: [m && e.jsx("span", {
                            className: "a-r-span",
                            children: r
                        }), e.jsx(u, {
                            name: "Arrow"
                        })]
                    })]
                }), e.jsxs("div", {
                    className: "a-action-item",
                    children: [e.jsxs("div", {
                        className: "a-action-left",
                        children: [e.jsx(u, {
                            name: "Exchange"
                        }), e.jsx("span", {
                            children: n("Theme")
                        })]
                    }), e.jsx("div", {
                        className: "a-action-right",
                        children: e.jsx(In, {})
                    })]
                })]
            })
        }),
        mc = "cdog9uw",
        dc = G.Avatar,
        hc = o.memo(function({
            closeFn: s
        }) {
            const {
                t: n
            } = p(), a = _(), t = F(), i = G.getUserLevelInfo(t.vipLevel);
            let l = (t.currXP - t.levelStartXP) / Math.max(t.levelEndXP - t.levelStartXP, 1) * 100;
            const r = i.isSvip && i.vipLevel > G.maxLevel - 69 ? 100 : l < 2 ? 2 : new we(l).todp(2).toNumber();
            return i.isSvip && i.vipLevel > G.maxLevel - 69 && (l = 100), e.jsxs("div", {
                className: g(uc, "a-wrap-item"),
                children: [e.jsxs("div", {
                    className: "a-login-user",
                    onClick: () => {
                        a(`#/user/profile/${t.userId}`)
                    },
                    children: [e.jsxs("div", {
                        className: "a-user-left",
                        children: [e.jsx(dc, {
                            userId: t.userId,
                            name: t.name
                        }), e.jsxs("div", {
                            className: "a-left-name",
                            children: [e.jsx("p", {
                                className: "a-name-t",
                                children: t.name
                            }), e.jsxs("p", {
                                className: "a-name-d",
                                children: [e.jsxs("span", {
                                    children: [n("User ID"), ": "]
                                }), e.jsx("span", {
                                    children: t.userId
                                })]
                            })]
                        })]
                    }), e.jsx("div", {
                        className: "a-user-right",
                        children: e.jsx(u, {
                            name: "Arrow"
                        })
                    })]
                }), e.jsxs("div", {
                    className: "a-login-vip",
                    onClick: () => {
                        a("#/vip")
                    },
                    children: [e.jsxs("div", {
                        className: "a-vip-left",
                        children: [e.jsx("div", {
                            className: "a-vip-icon",
                            children: e.jsxs("p", {
                                className: "a-vip-level",
                                children: [e.jsx("span", {
                                    children: i.isSvip ? "SVIP" : "VIP"
                                }), e.jsx("span", {
                                    className: "lv",
                                    children: i.vipLevel
                                })]
                            })
                        }), e.jsx("div", {
                            className: "a-vip-stage",
                            children: e.jsx("div", {
                                className: "a-vip-stage-inner",
                                style: {
                                    width: r + "%"
                                }
                            })
                        }), e.jsxs("div", {
                            className: "a-vip-status",
                            children: [e.jsx("p", {
                                className: "a-xp",
                                children: n("XP to Next Level")
                            }), e.jsxs("p", {
                                children: [e.jsx("span", {
                                    className: "a-w",
                                    children: t.currXP
                                }), " /", " ", e.jsx("span", {
                                    children: t.levelEndXP
                                })]
                            })]
                        })]
                    }), e.jsx("div", {
                        className: "a-vip-right",
                        children: e.jsx(u, {
                            name: "Arrow"
                        })
                    })]
                })]
            })
        }),
        uc = "uzb60dz",
        Ws = f.memo(function({
            fold: s = !1,
            closeFn: n
        }) {
            return s ? e.jsx(pc, {}) : e.jsx(xc, {
                closeFn: n
            })
        }),
        pc = f.memo(function() {
            return e.jsx("div", {
                className: jc,
                children: e.jsx("div", {
                    className: "auto-inner",
                    children: e.jsx("div", {
                        className: "hover-list-wrap",
                        children: e.jsx(de.Target, {
                            id: "bonus-sidebar-list-enter"
                        })
                    })
                })
            })
        }),
        xc = f.memo(function({
            closeFn: s
        }) {
            return p(), e.jsx("div", {
                className: g(gc, "bonus-list-wrap"),
                onClick: s,
                children: e.jsx(de.Target, {
                    id: "bonus-sidebar-list-enter"
                })
            })
        }),
        jc = "b1gyxa15",
        gc = "blug9f",
        fc = o.memo(function({
            closeFn: s
        }) {
            const {
                t: n
            } = p(), a = _(), t = F().vipLevel >= 38, [i, l] = Qe({
                loading: !0,
                hostCard: null
            });
            o.useEffect(() => {
                ae.get("/game/support/vip/get/").then(m => {
                    if (m) {
                        const c = m.hostCard;
                        l({
                            loading: !1,
                            hostCard: c
                        })
                    }
                }).catch(console.log)
            }, []);
            const r = i.loading ? t : !!i.hostCard;
            return e.jsxs(e.Fragment, {
                children: [r && e.jsxs("div", {
                    className: g(vc, "a-wrap-item"),
                    children: [e.jsx("div", {
                        className: "a-host-top",
                        children: e.jsx("p", {
                            children: n("VIP HOST")
                        })
                    }), e.jsx("div", {
                        className: "a-host-wrap",
                        onClick: () => {
                            i.hostCard && a(`#/chat/${i.hostCard.userId}`)
                        },
                        children: i.loading || !i.hostCard ? e.jsx(Ve, {}) : e.jsxs("div", {
                            className: "a-host-wrap-inner",
                            children: [e.jsxs("div", {
                                className: g("a-avatar-wrap", !!i.hostCard.onlineStatus && "online"),
                                children: [e.jsx(G.Avatar, {
                                    userId: i.hostCard.userId,
                                    name: i.hostCard.name
                                }), e.jsx("div", {
                                    className: g("a-dont", !!i.hostCard.onlineStatus && "g"),
                                    children: e.jsx("div", {
                                        className: "a-dont-inner"
                                    })
                                })]
                            }), e.jsxs("div", {
                                className: "a-host-name",
                                children: [e.jsx("p", {
                                    className: "a-host-d",
                                    children: i.hostCard.name
                                }), e.jsxs("p", {
                                    className: "a-host-t",
                                    children: [n("Online"), ":", On(i.hostCard.workingHoursStart), "-", On(i.hostCard.workingHoursEnd)]
                                })]
                            }), e.jsxs("div", {
                                className: "a-host-right",
                                children: [e.jsx(Ms, {
                                    mobile: !0
                                }), e.jsx(u, {
                                    name: "Arrow"
                                })]
                            })]
                        })
                    })]
                }), e.jsx(Ws, {})]
            })
        });

    function bc(s, n = !0) {
        const a = new Date().getTimezoneOffset() / 60,
            t = n ? s - 36e5 * a : s + 36e5 * a;
        return t >= 0 ? t : 864e5 + t
    }

    function On(s) {
        s = bc(s);
        const n = 60 * 1e3,
            a = 60 * n,
            t = Math.floor(s / a),
            i = Math.floor(s % a / n),
            l = i < 10 ? `0${i}` : i,
            r = t > 24;
        let m = t;
        r && (m = t - 24);
        const c = m > 12;
        return c && (m = t - 12), `${m} : ${l} ${c?"pm":"am"}`
    }
    const vc = "vuizquv",
        Nc = "/assets/refer.8563340a.png",
        kc = o.memo(function() {
            const s = z(),
                {
                    t: n
                } = p(),
                [a, t] = o.useState(""),
                i = Ye();
            o.useEffect(() => {
                ae.get("/agent/invitation/code/custom/").then(m => {
                    m && t(m.invitationUrl || "")
                }).catch(ee)
            }, []);
            const l = () => {
                    w.copyToClipboard(a), ee(n("Copied"))
                },
                r = i.amount2localStr(new we(1e3));
            return e.jsx("div", {
                className: yc,
                children: e.jsx(pe, {
                    children: e.jsx($.div, {
                        className: "a-refer-inner",
                        initial: {
                            y: "100%",
                            opacity: 0
                        },
                        animate: {
                            y: "0%",
                            opacity: 1
                        },
                        transition: {
                            delay: .3,
                            duration: .2
                        },
                        children: e.jsxs("div", {
                            className: "a-pop-inner",
                            children: [e.jsx(Ze, {
                                onClick: () => s.close()
                            }), e.jsxs("div", {
                                className: "refer-top",
                                children: [e.jsx("div", {
                                    className: "refer-bg"
                                }), e.jsx("img", {
                                    alt: "referImg",
                                    src: Nc
                                }), e.jsxs("div", {
                                    className: "refer-right",
                                    children: [e.jsx("p", {
                                        className: "t",
                                        children: e.jsxs(xe, {
                                            number: r,
                                            i18nKey: "trans.mainpage.refer.desc",
                                            children: ["Refer a friend and get ", e.jsxs("span", {
                                                className: "s-y",
                                                children: [e.jsx("br", {}), {
                                                    number: r
                                                }]
                                            }), " ", e.jsx("span", {
                                                children: "+"
                                            }), " ", e.jsxs("span", {
                                                className: "s-g",
                                                children: ["15%", e.jsx("br", {})]
                                            }), " commission"]
                                        })
                                    }), e.jsx("p", {
                                        className: "g",
                                        children: n("Invite friends, earn money.")
                                    })]
                                })]
                            }), e.jsxs("div", {
                                className: "refer-bottom",
                                children: [e.jsx("p", {
                                    className: "sub-t",
                                    children: n("Share your referral link:")
                                }), e.jsx(Ns, {
                                    value: a,
                                    readOnly: !0,
                                    after: e.jsx("button", {
                                        onClick: l,
                                        children: e.jsx(u, {
                                            name: "Copy"
                                        })
                                    })
                                }), e.jsx(T, {
                                    onClick: l,
                                    type: "conic",
                                    className: "copy-btn",
                                    children: n("Copy link")
                                })]
                            })]
                        })
                    })
                })
            })
        }),
        yc = "rahigm",
        Cc = o.memo(function({
            closeFn: s
        }) {
            const {
                t: n
            } = p(), a = z(), t = _(), i = wc(), l = Ne(), r = Ye(), {
                isKenyaHost: m,
                isBrHost: c,
                isNgHost: d,
                isIdHost: h
            } = w.getHostType(v.host), x = Object.values(l).reduce((b, j) => b.add(Be.convertCurrency(j.amount, j.currencyName)), new we(0));
            return w.formateAmount(x), e.jsxs(e.Fragment, {
                children: [e.jsxs("div", {
                    className: g(Sc, "a-wrap-item"),
                    children: [e.jsxs("div", {
                        className: "a-balance-top",
                        children: [e.jsx("p", {
                            children: n("Total Balance")
                        }), e.jsx("p", {
                            className: "a-num",
                            children: r.amount2localStr(x)
                        })]
                    }), e.jsx("div", {
                        className: "a-navs-wrap",
                        children: i.map((b, j) => (m || c || d || h) && b.kenya ? null : e.jsxs(y, {
                            className: "a-nav-item",
                            href: b.link,
                            onClick: () => {
                                b.link.startsWith("#") || s()
                            },
                            children: [b.iconNode ? b.iconNode : e.jsx(u, {
                                name: b.icon
                            }), e.jsx("span", {
                                children: b.label
                            })]
                        }, "a-nav-" + j))
                    })]
                }), e.jsxs("div", {
                    className: "a-wrap-item",
                    children: [e.jsxs("div", {
                        className: "a-action-item",
                        onClick: () => {
                            t("#/notification")
                        },
                        children: [e.jsxs("div", {
                            className: "a-action-left",
                            children: [e.jsx(u, {
                                name: "Notice"
                            }), e.jsx("span", {
                                children: n("Notification")
                            })]
                        }), e.jsxs("div", {
                            className: "a-action-right",
                            children: [e.jsx(de.Target, {
                                id: "notice-mobile-dont-enter",
                                className: "mobile-notice-dont"
                            }), e.jsx(u, {
                                name: "Arrow"
                            })]
                        })]
                    }), e.jsxs("div", {
                        className: "a-action-item",
                        onClick: () => {
                            a.push(e.jsx(kc, {}))
                        },
                        children: [e.jsxs("div", {
                            className: "a-action-left",
                            children: [e.jsx(u, {
                                name: "AddFirend"
                            }), e.jsx("span", {
                                children: n("Refer and Earn")
                            })]
                        }), e.jsx("div", {
                            className: "a-action-right",
                            children: e.jsx(u, {
                                name: "Arrow"
                            })
                        })]
                    }), e.jsxs("div", {
                        className: "a-action-item",
                        onClick: () => {
                            t("/affiliate"), s()
                        },
                        children: [e.jsxs("div", {
                            className: "a-action-left",
                            children: [e.jsx(u, {
                                name: "Affiliate"
                            }), e.jsx("span", {
                                children: n("Affiliate")
                            })]
                        }), e.jsx("div", {
                            className: "a-action-right",
                            children: e.jsx(u, {
                                name: "Arrow"
                            })
                        })]
                    })]
                })]
            })
        });

    function wc() {
        const {
            t: s
        } = p();
        return [{
            label: s("Deposit"),
            icon: "TransferIn",
            link: "/wallet/deposit?from=account",
            buttonName: "deposit"
        }, {
            label: s("Withdraw"),
            icon: "TransferOut",
            link: "/wallet/withdraw?from=account",
            buttonName: "withdraw"
        }, {
            label: s("Buy"),
            icon: "",
            iconNode: e.jsx(gd, {}),
            link: "/wallet/buy?from=account",
            buttonName: "buy",
            kenya: !0
        }, {
            label: s("Swap"),
            icon: "Swap",
            link: "/wallet/swap?from=account",
            buttonName: "swap",
            kenya: !0
        }, {
            label: s("Vault Pro"),
            icon: "",
            iconNode: e.jsx(fd, {}),
            link: "/wallet/vault?from=account",
            buttonName: "vault",
            kenya: !0
        }, {
            label: "NFTs",
            icon: "Nft",
            link: "/wallet/mynft?from=account",
            buttonName: "mynft",
            kenya: !0
        }, {
            label: s("Rollover"),
            icon: "Analyze",
            link: "/wallet/rollover?from=account",
            buttonName: "rollover"
        }, {
            label: s("Transaction"),
            icon: "Transaction",
            link: "/wallet/transaction?from=account",
            buttonName: "transaction"
        }, {
            label: s("Bet History"),
            icon: "History",
            link: "/wallet/bet-history?from=account",
            buttonName: "bethistory"
        }]
    }
    const Sc = "b8o72vw";
    async function Tc() {
        await ae.post("/account/logout/"), R.emit("ad_track", "logout"), location.reload()
    }
    const _c = o.memo(function({
            closeFn: s
        }) {
            const {
                t: n
            } = p(), a = z();
            return e.jsx("div", {
                className: Vc,
                children: e.jsx(pe, {
                    children: e.jsx($.div, {
                        className: "a-logout-inner",
                        initial: {
                            y: "100%",
                            opacity: 0
                        },
                        animate: {
                            y: "0%",
                            opacity: 1
                        },
                        transition: {
                            delay: .3,
                            duration: .2
                        },
                        children: e.jsxs("div", {
                            className: "a-pop-inner",
                            children: [e.jsx(Ze, {
                                onClick: () => a.close()
                            }), e.jsx("div", {
                                className: "a-pop-title",
                                children: n("Log out")
                            }), e.jsx("p", {
                                className: "a-pop-desc",
                                children: n("Are you sure you want to log out? Check our great promotions and bonuses before you leave!")
                            }), e.jsxs("div", {
                                className: "a-pop-btns",
                                children: [e.jsx(T, {
                                    className: "a-logout",
                                    onClick: async () => {
                                        await Tc(), s()
                                    },
                                    children: n("Log out")
                                }), e.jsx(T, {
                                    className: "a-cancel",
                                    type: "conic",
                                    onClick: () => a.close(),
                                    children: n("Cancel")
                                })]
                            })]
                        })
                    })
                })
            })
        }),
        Vc = "l1or7ee9",
        Rc = o.memo(function({
            closeFn: s
        }) {
            const {
                t: n
            } = p(), a = z(), t = F();
            return e.jsx("div", {
                className: Lc,
                children: e.jsxs(q, {
                    bodyLock: !0,
                    children: [t.login ? e.jsxs(e.Fragment, {
                        children: [e.jsx(hc, {
                            closeFn: s
                        }), e.jsx(fc, {
                            closeFn: s
                        }), e.jsx(Cc, {
                            closeFn: s
                        })]
                    }) : e.jsx(lc, {
                        closeFn: s
                    }), e.jsx(oc, {
                        closeFn: s
                    }), t.login && e.jsx(T, {
                        className: "a-logout",
                        onClick: () => a.push(e.jsx(_c, {
                            closeFn: s
                        })),
                        children: n("Log out")
                    })]
                })
            })
        }),
        Lc = "m4h64m3",
        Fc = o.memo(function({
            closeFn: s,
            jumpFn: n
        }) {
            const {
                t: a
            } = p(), t = _(), {
                urlPathname: i
            } = V(), l = Ld(i), r = Ud(l), m = Fd(l), c = i.includes("/lottery"), [d, h] = Qe({
                search: "",
                searching: !1,
                searchHistory: [],
                searchResult: [],
                searchResultLen: 0
            });
            o.useEffect(() => {
                const j = window.localStorage.getItem("game-search-list");
                if (j) {
                    const N = j.split("**");
                    h({
                        searchHistory: N
                    })
                }
            }, []);
            const x = F(),
                b = o.useRef(Bt(async j => {
                    h({
                        searching: !0
                    });
                    const {
                        distinctId: N
                    } = await Hd(), L = {
                        keyword: j,
                        page: 1,
                        device: 1,
                        pageSize: 100,
                        areaCode: x.areaCode
                    }, S = c ? {
                        name: j,
                        distinctId: N
                    } : L;
                    ae.post(r.searchUrl, S).then(C => {
                        C && h({
                            searching: !1,
                            searchResult: C.list || [],
                            searchResultLen: C.total || 0
                        })
                    }).catch(C => {
                        ee(C), h({
                            searching: !1
                        })
                    }).finally(() => {
                        Md(j, r.localStorgeName)
                    })
                }, 1e3));
            return o.useEffect(() => {
                d.search && d.search.length > 2 && b.current(d.search)
            }, [d.search]), e.jsxs("div", {
                className: Ec,
                children: [e.jsx(Ns, {
                    value: d.search,
                    autoFocus: !0,
                    placeholder: m,
                    onChange: j => {
                        h({
                            search: j
                        })
                    },
                    after: e.jsxs(e.Fragment, {
                        children: [e.jsx(u, {
                            className: "input-search-icon",
                            name: "Search"
                        }), e.jsx("button", {
                            className: "input-cancel-btn",
                            onClick: s,
                            children: e.jsx("div", {
                                className: "btn-inner",
                                children: e.jsx(u, {
                                    name: "Close"
                                })
                            })
                        })]
                    })
                }), e.jsx("div", {
                    className: "search-scroll-wrap",
                    children: e.jsx(q, {
                        children: d.searching ? e.jsx(Ve, {}) : d.search.length > 0 ? e.jsx("div", {
                            className: "result-list",
                            children: d.searchResultLen > 0 ? e.jsxs(e.Fragment, {
                                children: [e.jsxs("div", {
                                    className: "search-res-tit",
                                    children: [e.jsx("p", {
                                        children: a("Search Result")
                                    }), e.jsxs("p", {
                                        children: [e.jsx("span", {
                                            className: "n",
                                            children: d.searchResultLen
                                        }), e.jsx("span", {
                                            className: "ttl",
                                            children: a("Results")
                                        })]
                                    })]
                                }), e.jsx("div", {
                                    className: "search-results",
                                    children: c ? e.jsx(Ed, {
                                        closeFn: n,
                                        list: d.searchResult,
                                        searchPageInfo: {
                                            page: 1,
                                            pageSize: 100,
                                            total: d.searchResultLen,
                                            totalPage: 1
                                        }
                                    }) : d.searchResult.map(j => e.jsxs("div", {
                                        className: "search-result-item",
                                        onClick: () => {
                                            t(`/game/${j.gameUnique}`), n()
                                        },
                                        children: [e.jsx("img", {
                                            alt: "thumbnail",
                                            src: j.thumbnail,
                                            className: "thumbnail"
                                        }), e.jsx("p", {
                                            className: "full-name",
                                            children: j.fullName
                                        }), e.jsx(u, {
                                            name: "Arrow"
                                        })]
                                    }, j.gameUnique))
                                })]
                            }) : e.jsx($e, {})
                        }) : e.jsxs(e.Fragment, {
                            children: [e.jsx("p", {
                                className: "search-alert",
                                children: a("Search requires at least 3 characters")
                            }), d.searchHistory.length > 0 && e.jsxs("div", {
                                className: "his",
                                children: [e.jsxs("div", {
                                    className: "his-tit",
                                    children: [e.jsx("p", {
                                        children: a("Search history")
                                    }), e.jsx("button", {
                                        onClick: () => {
                                            window.localStorage.removeItem(r.localStorgeName), h({
                                                searchHistory: []
                                            })
                                        },
                                        children: e.jsx(u, {
                                            name: "Clear1"
                                        })
                                    })]
                                }), e.jsx("div", {
                                    className: "his-search",
                                    children: d.searchHistory.map((j, N) => e.jsx("div", {
                                        className: "his-item",
                                        onClick: () => h({
                                            search: j
                                        }),
                                        children: j
                                    }, "his-item-" + N))
                                })]
                            })]
                        })
                    })
                })]
            })
        }),
        Ec = "ce7hr3x",
        Uc = async (s, n) => await ae.get(`/platform-sports/v14/search-popular/${s}/${n}/`, {
            cache: !0
        }),
        Mc = o.memo(function({
            closeFn: s,
            jumpFn: n
        }) {
            const {
                t: a
            } = p(), t = Wd(), {
                lang: i
            } = V(), [l, r] = Qe({
                search: "",
                searching: !1,
                searchHistory: [],
                searchResult: [],
                searchResultLen: 0,
                img_path: "",
                popular: []
            }), m = o.useRef(Bt((c, d) => {
                r({
                    searching: !0
                }), ae.post("/platform-sports/v14/search/", {
                    query: c,
                    lang: i,
                    brandId: t
                }).then(h => {
                    h && h.found && (r({
                        searching: !1,
                        searchResult: h.found,
                        searchHistory: [c, ...d]
                    }), Nd(c, !1))
                }).catch(h => {
                    ee(h), r({
                        searching: !1
                    })
                })
            }, 1e3));
            return o.useEffect(() => {
                l.search && l.search.length > 1 && m.current(l.search, l.searchHistory)
            }, [l.search]), o.useEffect(() => {
                const c = window.localStorage.getItem("game-sports-search-list");
                if (c) {
                    const d = c.split("**");
                    r({
                        searchHistory: d
                    })
                }
            }, []), o.useEffect(() => {
                try {
                    Uc(t, i).then(c => {
                        c && c.items && r({
                            popular: c.items,
                            img_path: c.imgDomain
                        })
                    }).catch(console.log)
                } catch (c) {}
            }, []), e.jsxs("div", {
                className: Wc,
                children: [e.jsx(Ns, {
                    disabled: l.searching,
                    value: l.search,
                    autoFocus: !0,
                    placeholder: a("Search"),
                    onChange: c => {
                        r({
                            search: c
                        })
                    },
                    after: e.jsxs(e.Fragment, {
                        children: [e.jsx(u, {
                            className: "input-search-icon",
                            name: "Search"
                        }), e.jsx("button", {
                            className: "input-cancel-btn",
                            onClick: s,
                            children: e.jsx("div", {
                                className: "btn-inner",
                                children: e.jsx(u, {
                                    name: "Close"
                                })
                            })
                        })]
                    })
                }), e.jsx("div", {
                    className: "search-scroll-wrap",
                    children: e.jsx(q, {
                        children: l.searching ? e.jsx(Ve, {}) : l.searchResult && l.searchResult.length > 0 ? e.jsxs("div", {
                            className: "result-list",
                            children: [e.jsx("div", {
                                className: "search-res-tit",
                                children: e.jsxs("p", {
                                    children: [l.searchResult.length, " ", e.jsx("span", {
                                        children: a("Search Result")
                                    })]
                                })
                            }), e.jsx(Hc, {
                                img_path: l.img_path,
                                jumpFn: n,
                                list: l.searchResult
                            })]
                        }) : e.jsxs(e.Fragment, {
                            children: [l.searchHistory.length > 0 && e.jsxs("div", {
                                className: "his",
                                children: [e.jsxs("div", {
                                    className: "his-tit",
                                    children: [e.jsx("p", {
                                        children: a("Search history")
                                    }), e.jsx("button", {
                                        onClick: () => {
                                            bd(!1), r({
                                                searchHistory: []
                                            })
                                        },
                                        children: e.jsx(u, {
                                            name: "Clear1"
                                        })
                                    })]
                                }), e.jsx("div", {
                                    className: "his-search",
                                    children: l.searchHistory.map((c, d) => e.jsx("div", {
                                        className: "his-item",
                                        onClick: () => r({
                                            search: c
                                        }),
                                        children: c
                                    }, "his-item-" + d))
                                })]
                            }), l.popular && l.popular.length > 0 && e.jsxs(e.Fragment, {
                                children: [e.jsxs("div", {
                                    className: "popular-title",
                                    children: [e.jsx(u, {
                                        name: "HotGame"
                                    }), e.jsx("span", {
                                        children: a("Popular")
                                    })]
                                }), e.jsx("div", {
                                    className: "popular-wraps",
                                    children: l.popular.map(c => {
                                        var d, h;
                                        return e.jsxs("div", {
                                            className: "popular-item",
                                            onClick: () => {
                                                var x, b, j;
                                                window.location.href = `/sports?bt-path=%2F${(x=c.sportInfo)==null?void 0:x.slug}%2F${(b=c.categoryInfo)==null?void 0:b.slug}%2F${(j=c.tournamentInfo)==null?void 0:j.slug}-${c.parent_tournament_id}`, n()
                                            },
                                            children: [e.jsx("div", {
                                                className: "left-img-wrap",
                                                children: e.jsx(en, {
                                                    id: "",
                                                    img_path: l.img_path,
                                                    country_code: ((d = c.categoryInfo) == null ? void 0 : d.country_code) || "",
                                                    sports_id: c.parent_sport_id || ""
                                                })
                                            }), e.jsx("p", {
                                                className: "name",
                                                children: ((h = c.tournamentInfo) == null ? void 0 : h.name) || ""
                                            })]
                                        }, c.parent_tournament_id)
                                    })
                                })]
                            })]
                        })
                    })
                })]
            })
        }),
        Hc = f.memo(function({
            img_path: s,
            list: n,
            jumpFn: a
        }) {
            const {
                t
            } = p(), i = _(), l = n.filter(c => c.type === "tournament"), r = n.filter(c => c.type === "category"), m = n.filter(c => c.type === "match").sort(c => c.live ? -1 : 1);
            return e.jsxs("div", {
                className: g(Ac, "search-results"),
                children: [r && r.length > 0 && e.jsx(e.Fragment, {
                    children: r.map(c => {
                        var d, h;
                        return e.jsxs("div", {
                            className: "category-item",
                            onClick: () => {
                                i(`/sports?bt-path=%2F${c.parent_sport_id}%2F${c.id}`), a()
                            },
                            children: [e.jsx("p", {
                                className: "name",
                                children: e.jsx(ls, {
                                    text: ((d = c.categoryInfo) == null ? void 0 : d.name) || "",
                                    snippets: c.snippets[0]
                                })
                            }), e.jsx("p", {
                                className: "sport ttu",
                                children: (h = c.sportInfo) == null ? void 0 : h.name
                            })]
                        }, c.id)
                    })
                }), l && l.length > 0 && e.jsxs(e.Fragment, {
                    children: [e.jsx("p", {
                        className: "search-title",
                        children: t("League")
                    }), l.map(c => {
                        var d, h, x;
                        return e.jsxs("div", {
                            className: "tournament-item",
                            onClick: () => {
                                var b, j, N;
                                window.location.href = `/sports?bt-path=%2F${(b=c.sportInfo)==null?void 0:b.slug}%2F${(j=c.categoryInfo)==null?void 0:j.slug}%2F${(N=c.tournamentInfo)==null?void 0:N.slug}-${c.id}`, a()
                            },
                            children: [e.jsx("div", {
                                className: "left-icon",
                                children: e.jsx(vd, {
                                    id: c.parent_sport_id || "0"
                                })
                            }), e.jsxs("div", {
                                className: "right-info",
                                children: [e.jsx("p", {
                                    className: "name",
                                    children: e.jsx(ls, {
                                        text: ((d = c.tournamentInfo) == null ? void 0 : d.name) || "",
                                        snippets: c.snippets[0]
                                    })
                                }), e.jsx("div", {
                                    className: "nav-name ttu",
                                    children: `${(h=c.sportInfo)==null?void 0:h.name} . ${(x=c.categoryInfo)==null?void 0:x.name}`
                                })]
                            })]
                        }, c.id)
                    })]
                }), m && m.length > 0 && e.jsxs(e.Fragment, {
                    children: [e.jsx("p", {
                        className: "search-title",
                        children: t("Matches")
                    }), m.map(c => {
                        var x, b, j;
                        const d = (x = c.matchInfo) == null ? void 0 : x.desc.competitors[0],
                            h = (b = c.matchInfo) == null ? void 0 : b.desc.competitors[1];
                        return e.jsxs("div", {
                            className: "match-item",
                            onClick: () => {
                                var N, L, S, C;
                                window.location.href = `/sports?bt-path=%2F${(N=c.sportInfo)==null?void 0:N.slug}%2F${(L=c.categoryInfo)==null?void 0:L.slug}%2F${(S=c.tournamentInfo)==null?void 0:S.slug}%2F${(C=c.matchInfo)==null?void 0:C.desc.slug}-${c.id}`, a()
                            },
                            children: [e.jsxs("div", {
                                className: "left-imgs",
                                children: [e.jsx("div", {
                                    className: "img l",
                                    children: e.jsx(en, {
                                        img_path: s,
                                        id: (d == null ? void 0 : d.id) || "",
                                        country_code: (d == null ? void 0 : d.country_code) || "",
                                        sports_id: c.parent_sport_id || ""
                                    })
                                }), e.jsx("div", {
                                    className: "img r",
                                    children: e.jsx(en, {
                                        img_path: s,
                                        id: (h == null ? void 0 : h.id) || "",
                                        country_code: (h == null ? void 0 : h.country_code) || "",
                                        sports_id: c.parent_sport_id || ""
                                    })
                                })]
                            }), e.jsxs("div", {
                                className: "right-info",
                                children: [e.jsxs("div", {
                                    className: "name",
                                    children: [e.jsx(ls, {
                                        text: (d == null ? void 0 : d.name) || "",
                                        snippets: c.snippets[0]
                                    }), e.jsx("span", {
                                        className: "line",
                                        children: " - "
                                    }), e.jsx(ls, {
                                        text: (h == null ? void 0 : h.name) || "",
                                        snippets: c.snippets[1]
                                    })]
                                }), e.jsxs("div", {
                                    className: "times",
                                    children: [c.live && e.jsx("div", {
                                        className: "live ttu",
                                        children: e.jsx("span", {
                                            children: t("Live")
                                        })
                                    }), e.jsx("p", {
                                        children: new Date((((j = c.matchInfo) == null ? void 0 : j.desc.scheduled) || 0) * 1e3).toLocaleString()
                                    })]
                                })]
                            })]
                        }, c.id)
                    })]
                })]
            })
        }),
        ls = f.memo(function({
            text: s,
            snippets: n
        }) {
            if (!n || n.length <= 0) return e.jsx("span", {
                children: s
            });
            let a = n.flat(1);
            a.unshift(0), a.push(s.length);
            let t = [],
                i = 0;
            for (let l = 1; l < a.length; l++) {
                const r = s.slice(i, a[l]),
                    m = l % 2 === 0;
                i = a[l], t.push({
                    text: r,
                    isSearch: m
                })
            }
            return e.jsx(e.Fragment, {
                children: t.filter(l => !!l.text).map((l, r) => e.jsx("span", {
                    className: l.isSearch ? "search-text" : "",
                    children: l.text
                }, "search-text-" + r))
            })
        }),
        Wc = "s18xvu3g",
        Ac = "sqc9nqg",
        Ic = o.memo(function({
            search: s,
            setSearch: n,
            sidebarorAccount: a,
            setSidebarorAccount: t
        }) {
            if (!a || a === "") return null;
            const i = a === "account",
                {
                    isKenyaHost: l
                } = w.getHostType(v.host);
            return e.jsx("div", {
                className: g(Oc, (i || s) && "account-top"),
                children: e.jsx(pe, {
                    children: e.jsx($.div, {
                        className: g("sa-motion-wrap", l && "kenya-style"),
                        initial: {
                            y: "75%",
                            opacity: 0
                        },
                        animate: {
                            y: "0%",
                            opacity: 1
                        },
                        transition: {
                            ease: "linear",
                            duration: .1
                        },
                        children: e.jsxs("div", {
                            className: "motion-inner",
                            children: [a === "account" && e.jsx($.div, {
                                className: "motion-item",
                                initial: {
                                    y: "25%",
                                    opacity: 0
                                },
                                animate: {
                                    y: "0%",
                                    opacity: 1
                                },
                                transition: {
                                    delay: .35,
                                    duration: .2
                                },
                                children: e.jsx(Rc, {
                                    closeFn: () => {
                                        t("")
                                    }
                                })
                            }), a === "sidebar" && e.jsx($.div, {
                                className: "motion-item",
                                initial: {
                                    y: "25%",
                                    opacity: 0
                                },
                                animate: {
                                    y: "0%",
                                    opacity: 1
                                },
                                transition: {
                                    delay: .35,
                                    duration: .2
                                },
                                children: e.jsx(ac, {
                                    setSearch: n,
                                    closeFn: () => {
                                        t("")
                                    }
                                })
                            }), s && s !== "" && e.jsxs($.div, {
                                className: "s-search-wrap",
                                initial: {
                                    y: "25%",
                                    opacity: 0
                                },
                                animate: {
                                    y: "0%",
                                    opacity: 1
                                },
                                transition: {
                                    duration: .2
                                },
                                children: [(s === "1" || s === "5") && e.jsx(Fc, {
                                    closeFn: () => {
                                        n(""), a === "search" && t("")
                                    },
                                    jumpFn: () => {
                                        n(""), t("")
                                    }
                                }), s === "2" && e.jsx(Mc, {
                                    closeFn: () => {
                                        n(""), a === "search" && t("")
                                    },
                                    jumpFn: () => {
                                        n(""), t("")
                                    }
                                })]
                            })]
                        })
                    })
                })
            })
        }),
        Oc = "w1o1zyin";

    function Bc(s, n, a) {
        return Math.max(n, Math.min(s, a))
    }
    const Q = {
        toVector(s, n) {
            return s === void 0 && (s = n), Array.isArray(s) ? s : [s, s]
        },
        add(s, n) {
            return [s[0] + n[0], s[1] + n[1]]
        },
        sub(s, n) {
            return [s[0] - n[0], s[1] - n[1]]
        },
        addTo(s, n) {
            s[0] += n[0], s[1] += n[1]
        },
        subTo(s, n) {
            s[0] -= n[0], s[1] -= n[1]
        }
    };

    function Bn(s, n, a) {
        return n === 0 || Math.abs(n) === 1 / 0 ? Math.pow(s, a * 5) : s * n * a / (n + a * s)
    }

    function Zn(s, n, a, t = .15) {
        return t === 0 ? Bc(s, n, a) : s < n ? -Bn(n - s, a - n, t) + n : s > a ? +Bn(s - a, a - n, t) + a : s
    }

    function Zc(s, [n, a], [t, i]) {
        const [
            [l, r],
            [m, c]
        ] = s;
        return [Zn(n, l, r, t), Zn(a, m, c, i)]
    }

    function Pc(s, n) {
        if (typeof s != "object" || s === null) return s;
        var a = s[Symbol.toPrimitive];
        if (a !== void 0) {
            var t = a.call(s, n || "default");
            if (typeof t != "object") return t;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return (n === "string" ? String : Number)(s)
    }

    function Jc(s) {
        var n = Pc(s, "string");
        return typeof n == "symbol" ? n : String(n)
    }

    function se(s, n, a) {
        return n = Jc(n), n in s ? Object.defineProperty(s, n, {
            value: a,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : s[n] = a, s
    }

    function Pn(s, n) {
        var a = Object.keys(s);
        if (Object.getOwnPropertySymbols) {
            var t = Object.getOwnPropertySymbols(s);
            n && (t = t.filter(function(i) {
                return Object.getOwnPropertyDescriptor(s, i).enumerable
            })), a.push.apply(a, t)
        }
        return a
    }

    function B(s) {
        for (var n = 1; n < arguments.length; n++) {
            var a = arguments[n] != null ? arguments[n] : {};
            n % 2 ? Pn(Object(a), !0).forEach(function(t) {
                se(s, t, a[t])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(a)) : Pn(Object(a)).forEach(function(t) {
                Object.defineProperty(s, t, Object.getOwnPropertyDescriptor(a, t))
            })
        }
        return s
    }
    const Jn = {
        pointer: {
            start: "down",
            change: "move",
            end: "up"
        },
        mouse: {
            start: "down",
            change: "move",
            end: "up"
        },
        touch: {
            start: "start",
            change: "move",
            end: "end"
        },
        gesture: {
            start: "start",
            change: "change",
            end: "end"
        }
    };

    function Gn(s) {
        return s ? s[0].toUpperCase() + s.slice(1) : ""
    }
    const Gc = ["enter", "leave"];

    function Xc(s = !1, n) {
        return s && !Gc.includes(n)
    }

    function Dc(s, n = "", a = !1) {
        const t = Jn[s],
            i = t && t[n] || n;
        return "on" + Gn(s) + Gn(i) + (Xc(a, i) ? "Capture" : "")
    }
    const Kc = ["gotpointercapture", "lostpointercapture"];

    function zc(s) {
        let n = s.substring(2).toLowerCase();
        const a = !!~n.indexOf("passive");
        a && (n = n.replace("passive", ""));
        const t = Kc.includes(n) ? "capturecapture" : "capture",
            i = !!~n.indexOf(t);
        return i && (n = n.replace("capture", "")), {
            device: n,
            capture: i,
            passive: a
        }
    }

    function qc(s, n = "") {
        const a = Jn[s],
            t = a && a[n] || n;
        return s + t
    }

    function Xn(s) {
        return "touches" in s
    }

    function $c(s) {
        return Xn(s) ? "touch" : "pointerType" in s ? s.pointerType : "mouse"
    }

    function Yc(s) {
        return Array.from(s.touches).filter(n => {
            var a, t;
            return n.target === s.currentTarget || ((a = s.currentTarget) === null || a === void 0 || (t = a.contains) === null || t === void 0 ? void 0 : t.call(a, n.target))
        })
    }

    function Qc(s) {
        return Yc(s).map(n => n.identifier)
    }

    function er(s) {
        var n, a;
        const {
            scrollX: t,
            scrollY: i,
            scrollLeft: l,
            scrollTop: r
        } = s.currentTarget;
        return [(n = t != null ? t : l) !== null && n !== void 0 ? n : 0, (a = i != null ? i : r) !== null && a !== void 0 ? a : 0]
    }

    function sr(s) {
        const n = {};
        if ("buttons" in s && (n.buttons = s.buttons), "shiftKey" in s) {
            const {
                shiftKey: a,
                altKey: t,
                metaKey: i,
                ctrlKey: l
            } = s;
            Object.assign(n, {
                shiftKey: a,
                altKey: t,
                metaKey: i,
                ctrlKey: l
            })
        }
        return n
    }

    function cs(s, ...n) {
        return typeof s == "function" ? s(...n) : s
    }

    function nr() {}

    function ar(...s) {
        return s.length === 0 ? nr : s.length === 1 ? s[0] : function() {
            let n;
            for (const a of s) n = a.apply(this, arguments) || n;
            return n
        }
    }

    function Dn(s, n) {
        return Object.assign({}, n, s || {})
    }
    const tr = 32;
    class ir {
        constructor(n, a, t) {
            this.ctrl = n, this.args = a, this.key = t, this.state || (this.state = {}, this.computeValues([0, 0]), this.computeInitial(), this.init && this.init(), this.reset())
        }
        get state() {
            return this.ctrl.state[this.key]
        }
        set state(n) {
            this.ctrl.state[this.key] = n
        }
        get shared() {
            return this.ctrl.state.shared
        }
        get eventStore() {
            return this.ctrl.gestureEventStores[this.key]
        }
        get timeoutStore() {
            return this.ctrl.gestureTimeoutStores[this.key]
        }
        get config() {
            return this.ctrl.config[this.key]
        }
        get sharedConfig() {
            return this.ctrl.config.shared
        }
        get handler() {
            return this.ctrl.handlers[this.key]
        }
        reset() {
            const {
                state: n,
                shared: a,
                ingKey: t,
                args: i
            } = this;
            a[t] = n._active = n.active = n._blocked = n._force = !1, n._step = [!1, !1], n.intentional = !1, n._movement = [0, 0], n._distance = [0, 0], n._direction = [0, 0], n._delta = [0, 0], n._bounds = [
                [-1 / 0, 1 / 0],
                [-1 / 0, 1 / 0]
            ], n.args = i, n.axis = void 0, n.memo = void 0, n.elapsedTime = n.timeDelta = 0, n.direction = [0, 0], n.distance = [0, 0], n.overflow = [0, 0], n._movementBound = [!1, !1], n.velocity = [0, 0], n.movement = [0, 0], n.delta = [0, 0], n.timeStamp = 0
        }
        start(n) {
            const a = this.state,
                t = this.config;
            a._active || (this.reset(), this.computeInitial(), a._active = !0, a.target = n.target, a.currentTarget = n.currentTarget, a.lastOffset = t.from ? cs(t.from, a) : a.offset, a.offset = a.lastOffset, a.startTime = a.timeStamp = n.timeStamp)
        }
        computeValues(n) {
            const a = this.state;
            a._values = n, a.values = this.config.transform(n)
        }
        computeInitial() {
            const n = this.state;
            n._initial = n._values, n.initial = n.values
        }
        compute(n) {
            const {
                state: a,
                config: t,
                shared: i
            } = this;
            a.args = this.args;
            let l = 0;
            if (n && (a.event = n, t.preventDefault && n.cancelable && a.event.preventDefault(), a.type = n.type, i.touches = this.ctrl.pointerIds.size || this.ctrl.touchIds.size, i.locked = !!document.pointerLockElement, Object.assign(i, sr(n)), i.down = i.pressed = i.buttons % 2 === 1 || i.touches > 0, l = n.timeStamp - a.timeStamp, a.timeStamp = n.timeStamp, a.elapsedTime = a.timeStamp - a.startTime), a._active) {
                const I = a._delta.map(Math.abs);
                Q.addTo(a._distance, I)
            }
            this.axisIntent && this.axisIntent(n);
            const [r, m] = a._movement, [c, d] = t.threshold, {
                _step: h,
                values: x
            } = a;
            if (t.hasCustomTransform ? (h[0] === !1 && (h[0] = Math.abs(r) >= c && x[0]), h[1] === !1 && (h[1] = Math.abs(m) >= d && x[1])) : (h[0] === !1 && (h[0] = Math.abs(r) >= c && Math.sign(r) * c), h[1] === !1 && (h[1] = Math.abs(m) >= d && Math.sign(m) * d)), a.intentional = h[0] !== !1 || h[1] !== !1, !a.intentional) return;
            const b = [0, 0];
            if (t.hasCustomTransform) {
                const [I, oe] = x;
                b[0] = h[0] !== !1 ? I - h[0] : 0, b[1] = h[1] !== !1 ? oe - h[1] : 0
            } else b[0] = h[0] !== !1 ? r - h[0] : 0, b[1] = h[1] !== !1 ? m - h[1] : 0;
            this.restrictToAxis && !a._blocked && this.restrictToAxis(b);
            const j = a.offset,
                N = a._active && !a._blocked || a.active;
            N && (a.first = a._active && !a.active, a.last = !a._active && a.active, a.active = i[this.ingKey] = a._active, n && (a.first && ("bounds" in t && (a._bounds = cs(t.bounds, a)), this.setup && this.setup()), a.movement = b, this.computeOffset()));
            const [L, S] = a.offset, [
                [C, A],
                [re, D]
            ] = a._bounds;
            a.overflow = [L < C ? -1 : L > A ? 1 : 0, S < re ? -1 : S > D ? 1 : 0], a._movementBound[0] = a.overflow[0] ? a._movementBound[0] === !1 ? a._movement[0] : a._movementBound[0] : !1, a._movementBound[1] = a.overflow[1] ? a._movementBound[1] === !1 ? a._movement[1] : a._movementBound[1] : !1;
            const te = a._active ? t.rubberband || [0, 0] : [0, 0];
            if (a.offset = Zc(a._bounds, a.offset, te), a.delta = Q.sub(a.offset, j), this.computeMovement(), N && (!a.last || l > tr)) {
                a.delta = Q.sub(a.offset, j);
                const I = a.delta.map(Math.abs);
                Q.addTo(a.distance, I), a.direction = a.delta.map(Math.sign), a._direction = a._delta.map(Math.sign), !a.first && l > 0 && (a.velocity = [I[0] / l, I[1] / l], a.timeDelta = l)
            }
        }
        emit() {
            const n = this.state,
                a = this.shared,
                t = this.config;
            if (n._active || this.clean(), (n._blocked || !n.intentional) && !n._force && !t.triggerAllEvents) return;
            const i = this.handler(B(B(B({}, a), n), {}, {
                [this.aliasKey]: n.values
            }));
            i !== void 0 && (n.memo = i)
        }
        clean() {
            this.eventStore.clean(), this.timeoutStore.clean()
        }
    }

    function lr([s, n], a) {
        const t = Math.abs(s),
            i = Math.abs(n);
        if (t > i && t > a) return "x";
        if (i > t && i > a) return "y"
    }
    class cr extends ir {
        constructor(...n) {
            super(...n), se(this, "aliasKey", "xy")
        }
        reset() {
            super.reset(), this.state.axis = void 0
        }
        init() {
            this.state.offset = [0, 0], this.state.lastOffset = [0, 0]
        }
        computeOffset() {
            this.state.offset = Q.add(this.state.lastOffset, this.state.movement)
        }
        computeMovement() {
            this.state.movement = Q.sub(this.state.offset, this.state.lastOffset)
        }
        axisIntent(n) {
            const a = this.state,
                t = this.config;
            if (!a.axis && n) {
                const i = typeof t.axisThreshold == "object" ? t.axisThreshold[$c(n)] : t.axisThreshold;
                a.axis = lr(a._movement, i)
            }
            a._blocked = (t.lockDirection || !!t.axis) && !a.axis || !!t.axis && t.axis !== a.axis
        }
        restrictToAxis(n) {
            if (this.config.axis || this.config.lockDirection) switch (this.state.axis) {
                case "x":
                    n[1] = 0;
                    break;
                case "y":
                    n[0] = 0;
                    break
            }
        }
    }
    const rr = s => s,
        Kn = .15,
        zn = {
            enabled(s = !0) {
                return s
            },
            eventOptions(s, n, a) {
                return B(B({}, a.shared.eventOptions), s)
            },
            preventDefault(s = !1) {
                return s
            },
            triggerAllEvents(s = !1) {
                return s
            },
            rubberband(s = 0) {
                switch (s) {
                    case !0:
                        return [Kn, Kn];
                    case !1:
                        return [0, 0];
                    default:
                        return Q.toVector(s)
                }
            },
            from(s) {
                if (typeof s == "function") return s;
                if (s != null) return Q.toVector(s)
            },
            transform(s, n, a) {
                const t = s || a.shared.transform;
                return this.hasCustomTransform = !!t, t || rr
            },
            threshold(s) {
                return Q.toVector(s, 0)
            }
        },
        or = 0,
        Xe = B(B({}, zn), {}, {
            axis(s, n, {
                axis: a
            }) {
                if (this.lockDirection = a === "lock", !this.lockDirection) return a
            },
            axisThreshold(s = or) {
                return s
            },
            bounds(s = {}) {
                if (typeof s == "function") return l => Xe.bounds(s(l));
                if ("current" in s) return () => s.current;
                if (typeof HTMLElement == "function" && s instanceof HTMLElement) return s;
                const {
                    left: n = -1 / 0,
                    right: a = 1 / 0,
                    top: t = -1 / 0,
                    bottom: i = 1 / 0
                } = s;
                return [
                    [n, a],
                    [t, i]
                ]
            }
        }),
        De = typeof window < "u" && window.document && window.document.createElement;

    function qn() {
        return De && "ontouchstart" in window
    }

    function mr() {
        return qn() || De && window.navigator.maxTouchPoints > 1
    }

    function dr() {
        return De && "onpointerdown" in window
    }

    function hr() {
        return De && "exitPointerLock" in window.document
    }

    function ur() {
        try {
            return "constructor" in GestureEvent
        } catch (s) {
            return !1
        }
    }
    const ce = {
            isBrowser: De,
            gesture: ur(),
            touch: qn(),
            touchscreen: mr(),
            pointer: dr(),
            pointerLock: hr()
        },
        pr = 250,
        xr = 180,
        jr = .5,
        gr = 50,
        fr = 250,
        br = 10,
        $n = {
            mouse: 0,
            touch: 0,
            pen: 8
        };
    B(B({}, Xe), {}, {
        device(s, n, {
            pointer: {
                touch: a = !1,
                lock: t = !1,
                mouse: i = !1
            } = {}
        }) {
            return this.pointerLock = t && ce.pointerLock, ce.touch && a ? "touch" : this.pointerLock ? "mouse" : ce.pointer && !i ? "pointer" : ce.touch ? "touch" : "mouse"
        },
        preventScrollAxis(s, n, {
            preventScroll: a
        }) {
            if (this.preventScrollDelay = typeof a == "number" ? a : a || a === void 0 && s ? pr : void 0, !(!ce.touchscreen || a === !1)) return s || (a !== void 0 ? "y" : void 0)
        },
        pointerCapture(s, n, {
            pointer: {
                capture: a = !0,
                buttons: t = 1,
                keys: i = !0
            } = {}
        }) {
            return this.pointerButtons = t, this.keys = i, !this.pointerLock && this.device === "pointer" && a
        },
        threshold(s, n, {
            filterTaps: a = !1,
            tapsThreshold: t = 3,
            axis: i = void 0
        }) {
            const l = Q.toVector(s, a ? t : i ? 1 : 0);
            return this.filterTaps = a, this.tapsThreshold = t, l
        },
        swipe({
            velocity: s = jr,
            distance: n = gr,
            duration: a = fr
        } = {}) {
            return {
                velocity: this.transform(Q.toVector(s)),
                distance: this.transform(Q.toVector(n)),
                duration: a
            }
        },
        delay(s = 0) {
            switch (s) {
                case !0:
                    return xr;
                case !1:
                    return 0;
                default:
                    return s
            }
        },
        axisThreshold(s) {
            return s ? B(B({}, $n), s) : $n
        },
        keyboardDisplacement(s = br) {
            return s
        }
    }), B(B({}, zn), {}, {
        device(s, n, {
            shared: a,
            pointer: {
                touch: t = !1
            } = {}
        }) {
            if (a.target && !ce.touch && ce.gesture) return "gesture";
            if (ce.touch && t) return "touch";
            if (ce.touchscreen) {
                if (ce.pointer) return "pointer";
                if (ce.touch) return "touch"
            }
        },
        bounds(s, n, {
            scaleBounds: a = {},
            angleBounds: t = {}
        }) {
            const i = r => {
                    const m = Dn(cs(a, r), {
                        min: -1 / 0,
                        max: 1 / 0
                    });
                    return [m.min, m.max]
                },
                l = r => {
                    const m = Dn(cs(t, r), {
                        min: -1 / 0,
                        max: 1 / 0
                    });
                    return [m.min, m.max]
                };
            return typeof a != "function" && typeof t != "function" ? [i(), l()] : r => [i(r), l(r)]
        },
        threshold(s, n, a) {
            return this.lockDirection = a.axis === "lock", Q.toVector(s, this.lockDirection ? [.1, 3] : 0)
        },
        modifierKey(s) {
            return s === void 0 ? "ctrlKey" : s
        },
        pinchOnWheel(s = !0) {
            return s
        }
    }), B(B({}, Xe), {}, {
        mouseOnly: (s = !0) => s
    });
    class vr extends cr {
        constructor(...n) {
            super(...n), se(this, "ingKey", "scrolling")
        }
        scroll(n) {
            this.state._active || this.start(n), this.scrollChange(n), this.timeoutStore.add("scrollEnd", this.scrollEnd.bind(this))
        }
        scrollChange(n) {
            n.cancelable && n.preventDefault();
            const a = this.state,
                t = er(n);
            a._delta = Q.sub(t, a._values), Q.addTo(a._movement, a._delta), this.computeValues(t), this.compute(n), this.emit()
        }
        scrollEnd() {
            this.state._active && (this.state._active = !1, this.compute(), this.emit())
        }
        bind(n) {
            n("scroll", "", this.scroll.bind(this))
        }
    }
    const Nr = Xe;
    B(B({}, Xe), {}, {
        mouseOnly: (s = !0) => s
    });
    const Yn = new Map,
        As = new Map;

    function kr(s) {
        Yn.set(s.key, s.engine), As.set(s.key, s.resolver)
    }
    const yr = {
        key: "scroll",
        engine: vr,
        resolver: Nr
    };

    function Cr(s, n) {
        if (s == null) return {};
        var a = {},
            t = Object.keys(s),
            i, l;
        for (l = 0; l < t.length; l++) i = t[l], !(n.indexOf(i) >= 0) && (a[i] = s[i]);
        return a
    }

    function wr(s, n) {
        if (s == null) return {};
        var a = Cr(s, n),
            t, i;
        if (Object.getOwnPropertySymbols) {
            var l = Object.getOwnPropertySymbols(s);
            for (i = 0; i < l.length; i++) t = l[i], !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(s, t) && (a[t] = s[t])
        }
        return a
    }
    const Sr = {
            target(s) {
                if (s) return () => "current" in s ? s.current : s
            },
            enabled(s = !0) {
                return s
            },
            window(s = ce.isBrowser ? window : void 0) {
                return s
            },
            eventOptions({
                passive: s = !0,
                capture: n = !1
            } = {}) {
                return {
                    passive: s,
                    capture: n
                }
            },
            transform(s) {
                return s
            }
        },
        Tr = ["target", "eventOptions", "window", "enabled", "transform"];

    function rs(s = {}, n) {
        const a = {};
        for (const [t, i] of Object.entries(n)) switch (typeof i) {
            case "function":
                a[t] = i.call(a, s[t], t, s);
                break;
            case "object":
                a[t] = rs(s[t], i);
                break;
            case "boolean":
                i && (a[t] = s[t]);
                break
        }
        return a
    }

    function _r(s, n, a = {}) {
        const t = s,
            {
                target: i,
                eventOptions: l,
                window: r,
                enabled: m,
                transform: c
            } = t,
            d = wr(t, Tr);
        if (a.shared = rs({
                target: i,
                eventOptions: l,
                window: r,
                enabled: m,
                transform: c
            }, Sr), n) {
            const h = As.get(n);
            a[n] = rs(B({
                shared: a.shared
            }, d), h)
        } else
            for (const h in d) {
                const x = As.get(h);
                x && (a[h] = rs(B({
                    shared: a.shared
                }, d[h]), x))
            }
        return a
    }
    class Qn {
        constructor(n, a) {
            se(this, "_listeners", new Set), this._ctrl = n, this._gestureKey = a
        }
        add(n, a, t, i, l) {
            const r = this._listeners,
                m = qc(a, t),
                c = this._gestureKey ? this._ctrl.config[this._gestureKey].eventOptions : {},
                d = B(B({}, c), l);
            n.addEventListener(m, i, d);
            const h = () => {
                n.removeEventListener(m, i, d), r.delete(h)
            };
            return r.add(h), h
        }
        clean() {
            this._listeners.forEach(n => n()), this._listeners.clear()
        }
    }
    class Vr {
        constructor() {
            se(this, "_timeouts", new Map)
        }
        add(n, a, t = 140, ...i) {
            this.remove(n), this._timeouts.set(n, window.setTimeout(a, t, ...i))
        }
        remove(n) {
            const a = this._timeouts.get(n);
            a && window.clearTimeout(a)
        }
        clean() {
            this._timeouts.forEach(n => void window.clearTimeout(n)), this._timeouts.clear()
        }
    }
    class Rr {
        constructor(n) {
            se(this, "gestures", new Set), se(this, "_targetEventStore", new Qn(this)), se(this, "gestureEventStores", {}), se(this, "gestureTimeoutStores", {}), se(this, "handlers", {}), se(this, "config", {}), se(this, "pointerIds", new Set), se(this, "touchIds", new Set), se(this, "state", {
                shared: {
                    shiftKey: !1,
                    metaKey: !1,
                    ctrlKey: !1,
                    altKey: !1
                }
            }), Lr(this, n)
        }
        setEventIds(n) {
            if (Xn(n)) return this.touchIds = new Set(Qc(n)), this.touchIds;
            if ("pointerId" in n) return n.type === "pointerup" || n.type === "pointercancel" ? this.pointerIds.delete(n.pointerId) : n.type === "pointerdown" && this.pointerIds.add(n.pointerId), this.pointerIds
        }
        applyHandlers(n, a) {
            this.handlers = n, this.nativeHandlers = a
        }
        applyConfig(n, a) {
            this.config = _r(n, a, this.config)
        }
        clean() {
            this._targetEventStore.clean();
            for (const n of this.gestures) this.gestureEventStores[n].clean(), this.gestureTimeoutStores[n].clean()
        }
        effect() {
            return this.config.shared.target && this.bind(), () => this._targetEventStore.clean()
        }
        bind(...n) {
            const a = this.config.shared,
                t = {};
            let i;
            if (!(a.target && (i = a.target(), !i))) {
                if (a.enabled) {
                    for (const r of this.gestures) {
                        const m = this.config[r],
                            c = ea(t, m.eventOptions, !!i);
                        if (m.enabled) {
                            const d = Yn.get(r);
                            new d(this, n, r).bind(c)
                        }
                    }
                    const l = ea(t, a.eventOptions, !!i);
                    for (const r in this.nativeHandlers) l(r, "", m => this.nativeHandlers[r](B(B({}, this.state.shared), {}, {
                        event: m,
                        args: n
                    })), void 0, !0)
                }
                for (const l in t) t[l] = ar(...t[l]);
                if (!i) return t;
                for (const l in t) {
                    const {
                        device: r,
                        capture: m,
                        passive: c
                    } = zc(l);
                    this._targetEventStore.add(i, r, "", t[l], {
                        capture: m,
                        passive: c
                    })
                }
            }
        }
    }

    function He(s, n) {
        s.gestures.add(n), s.gestureEventStores[n] = new Qn(s, n), s.gestureTimeoutStores[n] = new Vr
    }

    function Lr(s, n) {
        n.drag && He(s, "drag"), n.wheel && He(s, "wheel"), n.scroll && He(s, "scroll"), n.move && He(s, "move"), n.pinch && He(s, "pinch"), n.hover && He(s, "hover")
    }
    const ea = (s, n, a) => (t, i, l, r = {}, m = !1) => {
        var c, d;
        const h = (c = r.capture) !== null && c !== void 0 ? c : n.capture,
            x = (d = r.passive) !== null && d !== void 0 ? d : n.passive;
        let b = m ? t : Dc(t, i, h);
        a && x && (b += "Passive"), s[b] = s[b] || [], s[b].push(l)
    };

    function Fr(s, n = {}, a, t) {
        const i = f.useMemo(() => new Rr(s), []);
        if (i.applyHandlers(s, t), i.applyConfig(n, a), f.useEffect(i.effect.bind(i)), f.useEffect(() => i.clean.bind(i), []), n.target === void 0) return i.bind.bind(i)
    }

    function Er(s, n) {
        return kr(yr), Fr({
            scroll: s
        }, n || {}, "scroll")
    }
    const Ur = o.memo(function({
            setSidebarorAccount: s
        }) {
            const n = kd(),
                a = yd(),
                t = _(),
                {
                    urlPathname: i,
                    lang: l
                } = V(),
                r = l === "ja",
                {
                    isKenyaHost: m
                } = w.getHostType(v.host),
                c = m ? a : n;
            return e.jsx("div", {
                className: "mobile-top-navigate-list",
                children: c.map(d => {
                    let h = Qt(i, d.type),
                        x = ei[d.type];
                    return r && d.type === he.TRADING ? null : (d.route && (h = i === d.route, x = d.route), e.jsxs("button", {
                        className: g("mb-top-navigate-item", h && "active", d.type === he.TRADING && "gr"),
                        onClick: () => {
                            t(x), s("")
                        },
                        children: [d.icon, e.jsx("span", {
                            children: d.label
                        })]
                    }, d.label))
                })
            })
        }),
        sa = {
            initial: {
                y: "-100%"
            },
            animate: {
                y: 0
            }
        },
        Mr = {
            initial: {
                y: 0
            },
            animate: {
                y: "-100%"
            }
        },
        Hr = o.memo(function({
            search: s,
            sidebarorAccount: n,
            locationShow: a,
            sidebarShow: t,
            canScrollShow: i,
            setScrollShow: l,
            setSidebarorAccount: r
        }) {
            const m = o.useRef(!0),
                c = F(),
                {
                    isSpreadHost: d
                } = w.getHostType(v.host),
                [h, x] = o.useState(sa),
                b = o.useCallback(N => {
                    N != m.current && (m.current = N, x(N ? sa : Mr))
                }, [h]),
                j = N => {
                    !c.login && d || n === "" && (N ? i && (b(!0), l(!0)) : (b(!1), l(!1)))
                };
            return Er(({
                xy: [, N],
                velocity: L,
                direction: [, S]
            }) => {
                L[1] > 2 ? j(S < 0) : N < 136 && j(!0)
            }, {
                target: globalThis
            }), o.useEffect(() => {
                b(n === "" ? a : t && s === "")
            }, [s, n, a, t]), o.useEffect(() => {
                !c.login && d && b(!1)
            }, [c.login]), e.jsx($.div, J(H({
                className: Wr
            }, h), {
                children: e.jsx(Ur, {
                    setSidebarorAccount: r
                })
            }))
        }),
        Wr = "mszcttz",
        Ar = f.memo(() => {
            const s = me(),
                [n, a] = o.useState(!1);
            o.useEffect(() => (R.on("mobile-shadow-toggle", a), () => {
                R.off("mobile-shadow-toggle", a)
            }), []);
            const t = n && s;
            return !n || !s ? null : e.jsx("div", {
                className: g(Ir, "mobile-shadow"),
                style: {
                    display: t ? "block" : "none"
                }
            })
        }),
        Ir = "m14bkfd3",
        Or = o.memo(function() {
            const s = Cd(),
                {
                    urlPathname: n
                } = V(),
                a = wd(n),
                [t, i] = o.useState(""),
                l = _(),
                r = le(),
                [m, c] = o.useState(""),
                [d, h] = o.useState(!1),
                x = a || d,
                [b, j] = o.useState(!1);
            Pe(x ? "mb-show-header" : ""), Pe(s ? "mb-back-header" : "");
            const N = F(),
                {
                    isSpreadHost: L
                } = w.getHostType(v.host),
                S = L && !N.login;
            o.useEffect(() => {
                (n || N.login) && C("")
            }, [n, N.login]);
            const C = D => {
                    m && m !== "" && D === m ? (c(""), j(!1)) : (c(D), A(D)), i("")
                },
                A = D => {
                    j(D && D !== "" ? D !== "account" : !1)
                };
            o.useEffect(() => {
                window.localStorage.getItem("mb-wallet-back-to-account") && (C("account"), window.localStorage.removeItem("mb-wallet-back-to-account")), R.on("mb-search-open-tigger", () => {
                    i("1"), c("search")
                }), R.on("page-search-pop-action", () => {
                    i("5"), c("search")
                })
            }, []);
            const re = m === "" ? x : b && t === "";
            return o.useEffect(() => {
                h(!1)
            }, [n]), e.jsxs(e.Fragment, {
                children: [e.jsxs("div", {
                    className: g(Br, "mobile-header", re && "show"),
                    children: [e.jsx(Ar, {}), e.jsxs("div", {
                        className: N.login ? "login-header-wrap" : "nologin-header-wrap",
                        children: [s ? e.jsx("button", {
                            className: "arrow-back",
                            onClick: () => l("/"),
                            children: e.jsx(u, {
                                name: "Arrow"
                            })
                        }) : e.jsx("img", {
                            alt: "logo",
                            onClick: () => l("/"),
                            className: "header-logo",
                            src: R.assets(`/logo/logo_small${r?"":"_w"}.png`)
                        }), e.jsx(Al, {
                            changeFn: C,
                            sidebarorAccount: m
                        })]
                    }), e.jsx(Hr, {
                        sidebarorAccount: m,
                        sidebarShow: b,
                        locationShow: x,
                        search: t,
                        canScrollShow: a,
                        setScrollShow: h,
                        setSidebarorAccount: C
                    })]
                }), e.jsx(Ic, {
                    search: t,
                    setSearch: i,
                    sidebarorAccount: m,
                    setSidebarorAccount: C
                }), !S && !s && e.jsx(rl, {
                    sidebarorAccount: m,
                    setSidebarorAccount: C
                })]
            })
        }),
        Br = "mia0b51";
    let na, aa, ta, ia, la, ca, ra, oa, ma, da, ha, ua, pa, xa, ja, ga, fa, ba, va, Na, ka, ya, je, Ca, wa, Sa, Ta, _a, Va, Ra, La, Fa, Ea, Ua, Ma, Ha, Wa, Aa, Ia, Oa, Ba, Za, Pa, Ja, Ga, Xa, Da, Ka, za, qa, $a, Ya, Qa, et, st, nt, at;
    na = o.memo(function({
        children: s,
        fold: n,
        onChange: a
    }) {
        const t = le(),
            i = o.useRef(!0),
            {
                isSpHost: l
            } = w.getHostType(v.host);
        return o.useEffect(() => {
            i.current = !1
        }, []), e.jsxs($.div, {
            className: aa,
            animate: {
                translateX: n ? -196 : 0,
                width: 260
            },
            transition: {
                duration: i.current ? 0 : .2,
                ease: "linear"
            },
            id: n ? "page-fold-sidebar" : "page-unfold-sidebar",
            children: [e.jsx("div", {
                className: g(ta, n ? "sidebar-header-fold" : ""),
                children: e.jsxs("div", {
                    className: "header-sidebar-inner",
                    children: [e.jsx("button", {
                        className: "fold-btn",
                        onClick: () => a(!n),
                        children: e.jsx(u, {
                            name: "Tighten"
                        })
                    }), !n && e.jsx(y, {
                        href: "/",
                        className: g("logo-pc", l && "host-87com"),
                        children: e.jsx("img", {
                            alt: "logo",
                            className: "logo-com",
                            src: R.assets(`/logo/logo${t?"":"_w"}.png`)
                        })
                    })]
                })
            }), e.jsx("div", {
                className: "pc-sidebar-inner",
                children: s
            })]
        })
    }), aa = "p17uug6s", ta = "p17gjxjj", ia = "/assets/share_1.522ec023.png", la = "/assets/share_2.45a347d3.png", ca = "/assets/share_3.21374ebb.png", ra = "/assets/share_4.657a8ccc.png", oa = "/assets/share_5.2a1f1696.png", ma = "/assets/share_6.b1025447.png", da = "/assets/share_7.f3cb39a2.png", ha = "/assets/share_8.ae8effba.png", ua = "/assets/share_9.3fce7793.png", pa = "/assets/share_10.16787b03.png", xa = "/assets/share_11.dde67eb4.png", ja = "/assets/share_12.dd912364.png", ga = "/assets/share_13.e378fe5d.png", fa = "/assets/share_14.8095e1f8.png", ba = "/assets/share_15.58cf2e9b.png", va = "/assets/share_16.207b078c.png", Na = "/assets/share_17.7a4b6ae5.png", ka = "/assets/share_18.b4e56482.png", ya = "/assets/share_19.1ce881ba.png", je = {
        share_1: ia,
        share_2: la,
        share_3: ca,
        share_4: ra,
        share_5: oa,
        share_6: ma,
        share_7: da,
        share_8: ha,
        share_9: ua,
        share_10: pa,
        share_11: xa,
        share_12: ja,
        share_13: ga,
        share_14: fa,
        share_15: ba,
        share_16: va,
        share_17: Na,
        share_18: ka,
        share_19: ya
    }, Ca = "/assets/refer.5704f428.png", wa = "/assets/banks.7ee26894.png", Sa = "/assets/banks_w.7690cd7a.png", Ta = "/assets/banks_m.29c913d7.png", _a = "/assets/banks_m_w.5d353672.png", Va = "/assets/shitcode.e709ba26.png", Ra = "/assets/task.d10fe2e1.png", La = "/assets/ball.1f6cc9ce.png", Fa = "/assets/ball_w.d2554ec4.png", Ea = "/assets/sign-bonus.d4e4f05c.png", Ua = "/assets/fire.704d77d1.png", Ma = "/assets/raf.39d7bfba.png", Ha = "/assets/raf_m.e4d29592.png", Wa = "/assets/raf_coin.fd320b17.png", Aa = "/assets/inr_refer.9322dbe5.png", Ia = "/assets/inr_refer_w.1a522fd0.png", Oa = "/assets/inr_refer_m.f3d9ce4e.png", Ba = "/assets/inr_refer_m_w.8763ebe2.png", Za = "/assets/inr_refer_f.b44eb72a.png", Pa = "/assets/japan_refer.7eb3b7c0.png", Ja = "/assets/japan_refer_m.30cf39ff.png", Ga = "/assets/japan_refer_f.5bfa64be.png", Xa = "/assets/japan_refer_m_d.cfacd600.png", Da = "/assets/japan_refer_f_d.d671ee8e.png", Ka = "/assets/japan_refer_d.e33ce6f9.png", za = "/assets/activity_icon.b7616940.png", qa = "/assets/rio_refer.b3b15c40.png", $a = "/assets/rio_refer_m.9974bcc1.png", Ya = "/assets/rio_refer_f.565b068a.png", Qa = "/assets/tele.6ad1cbb0.png", et = "/assets/read_mark.c90fe428.png", st = "/assets/uefa.90e3d4a9.png", nt = "/assets/uefa_m.f27865ee.png", at = "/assets/uefa_f.cff80825.png", Je = {
        raf: Ma,
        raf_m: Ha,
        raf_coin: Wa,
        none: ln,
        ball: La,
        ball_w: Fa,
        fire: Ua,
        sign_bonus: Ea,
        refer: Ca,
        banks: wa,
        banks_w: Sa,
        banks_m: Ta,
        banks_m_w: _a,
        shitcode: Va,
        task: Ra,
        none_w: nn,
        twitter: je.share_8,
        telegram: je.share_7,
        medium: je.share_9,
        instagram: je.share_6,
        github: je.share_5,
        facebook: je.share_3,
        discord: je.share_2,
        bitcoin: je.share_1,
        reddit: je.share_18,
        global_tele: Qa,
        inr_refer: Aa,
        inr_refer_w: Ia,
        inr_refer_m: Oa,
        inr_refer_m_w: Ba,
        inr_refer_f: Za,
        japan_refer: Pa,
        japan_refer_m: Ja,
        japan_refer_f: Ga,
        japan_refer_m_d: Xa,
        japan_refer_f_d: Da,
        japan_refer_d: Ka,
        activityIcon: za,
        rio_refer: qa,
        rio_refer_m: $a,
        rio_refer_f: Ya,
        uefa: st,
        uefa_m: nt,
        uefa_f: at,
        read_mark: et
    };
    const ne = f.memo(function({
        title: s,
        children: n,
        delay: a = 1e3
    }) {
        const [t, i] = o.useState(null), l = o.useRef(0), r = d => {
            const h = d.currentTarget.getBoundingClientRect();
            l.current = window.setTimeout(() => i(h), a)
        }, m = () => {
            window.clearTimeout(l.current), i(null)
        };
        o.useEffect(() => () => {
            window.clearTimeout(l.current)
        }, []);
        let c;
        return w.isSupportTouch ? c = {
            onTouchStart: r,
            onTouchEnd: m,
            onTouchCancel: m
        } : c = {
            onMouseEnter: r,
            onMouseLeave: m
        }, e.jsxs(e.Fragment, {
            children: [Zr(n, c), t && s && e.jsx("div", {
                className: Pr,
                style: {
                    top: t.top + t.height / 2
                },
                children: e.jsxs("div", {
                    className: "tip-inner",
                    children: [e.jsx("div", {
                        className: "rec"
                    }), e.jsx("span", {
                        children: s
                    })]
                })
            })]
        })
    });

    function Zr(s, n) {
        let a = null;
        return f.Children.map(s, t => !a && f.isValidElement(t) ? (a = f.cloneElement(t, n), a) : t)
    }
    const Pr = "fasxyqz",
        Jr = "/assets/promo_code.94c7daca.png",
        Gr = "/assets/promo_code_w.206ad2da.png";
    async function Xr() {
        if (w.serverTime().getTime() - gs.state.createTime < 864e5) {
            const s = await ae.get("/account/invitation/get/");
            return s ? s.invitationCode : ""
        } else return "init"
    }
    const tt = o.memo(({
            small: s = !1
        }) => {
            const {
                t: n
            } = p(), a = le(), t = _(), [i, l] = o.useState("init");
            o.useEffect(() => {
                Xr().then(m => l(m || ""))
            }, []);
            const r = () => t("#/promocode");
            return i ? null : s ? e.jsx("div", {
                className: g(Kr, "fold-navlink-item"),
                children: e.jsx(T, {
                    className: "promo-b",
                    onClick: r,
                    children: e.jsx(Dr, {})
                })
            }) : e.jsxs("div", {
                className: g(zr, "promo-button-enter"),
                children: [e.jsxs(T, {
                    className: "promo-btn",
                    onClick: r,
                    children: [e.jsx("img", {
                        src: a ? Jr : Gr
                    }), e.jsx("div", {
                        className: "name",
                        children: e.jsx("span", {
                            children: n("Referral/Promo Code")
                        })
                    })]
                }), e.jsx("div", {
                    className: "available",
                    children: n("Available in first 24 hours")
                })]
            })
        }),
        Dr = f.memo(function() {
            return e.jsx("svg", {
                width: "22",
                height: "20",
                viewBox: "0 0 22 20",
                xmlns: "http://www.w3.org/2000/svg",
                children: e.jsxs("g", {
                    fill: "none",
                    fillRule: "evenodd",
                    children: [e.jsx("path", {
                        d: "M.347 4.426h21.306a.35.35 0 0 1 .347.35v4.168a.35.35 0 0 1-.347.35H.347A.35.35 0 0 1 0 8.943V4.776a.35.35 0 0 1 .347-.35Z",
                        fill: "#FFCB34",
                        fillRule: "nonzero"
                    }), e.jsx("path", {
                        d: "M2.765 9.293h16.47c.128 0 .232.105.232.233v10.241a.233.233 0 0 1-.231.233H2.765a.233.233 0 0 1-.232-.233V9.527c0-.129.104-.234.232-.234Z",
                        fill: "#FFCB34",
                        fillRule: "nonzero"
                    }), e.jsx("path", {
                        d: "M12.447 2.764v6.53h6.789c.127 0 .231.021.231.048v2.125c0 .027-.104.049-.231.049h-6.789V20H9.553l-.001-8.485H2.765c-.128 0-.232-.021-.232-.048V9.342c0-.027.104-.049.232-.049h6.787V2.764h2.895Z",
                        fill: "#FF9D34",
                        fillRule: "nonzero"
                    }), e.jsx("path", {
                        d: "M4.941.284s.611-.448 1.894-.218C8.57.377 9.718 2.98 9.718 2.98v1.522S7.969 2.51 6.57 2.159c-1.074-.268-1.98.352-1.98.352l.35-2.227Zm-2.95 2.189c.504.175 3.029.664 3.029.664l2.124.474 1.954.89c-4.058.606-7.824-.095-7.824-.095l1.61-.643-.892-1.29Zm17.23 1.29.895-1.29c-.504.175-3.028.664-3.028.664l-2.125.474-1.954.894c4.058.605 7.824-.1 7.824-.1l-1.612-.642ZM17.166.287l.347 2.224s-.909-.62-1.98-.35c-1.398.353-3.143 2.344-3.143 2.344V2.982S13.536.38 15.273.07c1.282-.23 1.893.218 1.893.218Z",
                        fill: "#DC4592"
                    }), e.jsx("path", {
                        d: "M14.587 2.496c1.262-.733 2.761-.486 2.926.015.183.55-.712 1.138-2.006 1.816-.848.449-3.12.175-3.12.175s.938-1.272 2.2-2.006Zm-9.993.018c.165-.5 1.664-.748 2.927-.015 1.262.73 2.2 2.006 2.2 2.006S7.45 4.779 6.6 4.33c-1.294-.68-2.188-1.266-2.006-1.816Z",
                        fill: "#9B34FF"
                    })]
                })
            })
        }),
        Kr = "f19z6s60",
        zr = "pdpfjf";

    function it() {
        const {
            t: s
        } = p(), {
            lang: n
        } = V(), a = ["bn", "uk", "ru", "pt", "hi"].find(t => n === t);
        return [{
            label: s("VIP Club"),
            icon: "VipClub",
            link: "#/vip",
            vipclub: !0,
            buttonName: "vip_club"
        }, {
            label: s("Affiliate"),
            icon: "Affiliate",
            link: "/affiliate",
            buttonName: "affiliate"
        }, {
            label: s("Forum"),
            icon: "Forum",
            link: `https://forum.${v.host}/`,
            buttonName: "",
            exclusive: !0
        }, {
            label: s("Provably Fair"),
            icon: "ProvablyFair",
            link: "/help",
            buttonName: "provably_fair",
            exclusive: !0
        }, {
            label: s("Blog"),
            icon: "Blog",
            link: `https://blog.${v.buildHost}/`,
            buttonName: "",
            exclusive: !0
        }, {
            label: s("Sport Betting Insights"),
            icon: "Blog",
            sportsBettings: !0,
            link: `https://betting.${v.buildHost}/${a!=null?a:""}`,
            buttonName: ""
        }]
    }

    function qr() {
        const {
            t: s
        } = p();
        return [{
            label: s("Racing"),
            icon: "",
            iconName: "RacingIcon",
            link: "/racing",
            buttonName: "racing"
        }, {
            label: s("Lottery"),
            icon: "Lottery",
            link: "/lottery",
            buttonName: "lottery"
        }, {
            label: s("Bingo"),
            icon: "Bingo2",
            link: "/bingolist",
            buttonName: "bingo"
        }]
    }

    function $r() {
        const {
            t: s
        } = p();
        return [{
            label: s("Picks For You"),
            icon: "PicksForYou",
            link: "/gamelist/picks-for-you",
            buttonName: "picks_for_you"
        }, {
            label: s("Favorites"),
            icon: "Favorites",
            link: "/favorite",
            buttonName: "favorite_games",
            needLogin: !0
        }, {
            label: s("Recent"),
            icon: "Recent",
            link: "/recent",
            buttonName: "recent_games",
            needLogin: !0
        }, {
            label: s("Games for bonus"),
            icon: "Recent",
            link: "/games-for-bonus",
            buttonName: "recent_games",
            needLogin: !0,
            gameBonus: !0
        }, {
            label: s("{{site}} Originals", {
                site: v.siteName
            }),
            icon: "ClassicDice",
            link: "/gamelist/brand",
            navgmae: !0,
            buttonName: "originals"
        }, {
            label: s("Slots"),
            icon: "Slots",
            link: "/gamelist/slots",
            buttonName: "slots"
        }, {
            label: s("Live Casino"),
            icon: "LiveCasino",
            link: "/gamelist/live",
            buttonName: "live_casino"
        }, {
            label: s("Hot Games"),
            icon: "HotGame",
            link: "/tagname/hot",
            buttonName: "hot_games"
        }, {
            label: s("New Releases"),
            icon: "NewReleases",
            link: "/tagname/new-releases",
            buttonName: "new_releases"
        }, {
            label: s("Feature Buy-in"),
            icon: "FeatureBuy-in",
            link: "/tagname/feature-buy-in",
            buttonName: "feature_buy_in"
        }, {
            label: s("Bingo"),
            icon: "Bingo2",
            link: "/bingolist",
            buttonName: "bingo"
        }, {
            label: s("Blackjack"),
            icon: "Blackjack",
            link: "/tagname/blackjack",
            buttonName: "blackjack"
        }, {
            label: s("Table Games"),
            icon: "TableGame",
            link: "/tagname/table-games",
            buttonName: "table_games"
        }]
    }

    function Yr() {
        const {
            t: s
        } = p();
        return [{
            label: s("Live Events"),
            icon: "LiveEvents",
            link: "/sports?bt-path=%2Flive",
            buttonName: "live_events"
        }, {
            label: s("Soccer"),
            icon: "Soccer",
            link: "/sports?bt-path=%2Fsoccer-1",
            buttonName: "soccer"
        }, {
            label: s("Tennis"),
            icon: "Tennis",
            link: "/sports?bt-path=%2Ftennis-5",
            buttonName: "tennis"
        }, {
            label: s("Basketball"),
            icon: "Basketball",
            link: "/sports?bt-path=%2Fbasketball-2",
            buttonName: "basketball"
        }, {
            label: s("Cricket"),
            icon: "Cricket",
            link: "/sports?bt-path=%2Fcricket-21",
            buttonName: "cricket"
        }, {
            label: s("FIFA"),
            icon: "FIFA",
            link: "/sports?bt-path=%2Ffifa-300",
            buttonName: "fifa"
        }, {
            label: s("American Football"),
            icon: "AmericanFootball",
            link: "/sports?bt-path=%2Famerican-football-16",
            buttonName: "american_football"
        }, {
            label: s("Ice Hockey"),
            icon: "IceHockey",
            link: "/sports?bt-path=%2Fice-hockey-4",
            buttonName: "ice_hockey"
        }, {
            label: s("Baseball"),
            icon: "Baseball",
            link: "/sports?bt-path=%2Fbaseball-3",
            buttonName: "baseball"
        }, {
            label: s("Handball"),
            icon: "Handball",
            link: "/sports?bt-path=%2Fhandball-6",
            buttonName: "handball"
        }, {
            label: s("Racing"),
            icon: "Handball",
            iconName: "RacingIcon",
            link: "/racing",
            buttonName: "racing"
        }]
    }

    function Qr() {
        const {
            t: s
        } = p();
        return [{
            label: s("Bet History"),
            icon: "At",
            link: "/racing/history",
            buttonName: "RacingBetHistory",
            iconName: "LotteryMyBets"
        }, {
            label: s("Horse"),
            icon: "Horse",
            link: "/racing/horse",
            buttonName: "RacingHorse",
            iconName: "RacingHorse"
        }, {
            label: s("Greyhound"),
            icon: "ClassicDice",
            link: "/racing/greyhound",
            buttonName: "RacingGreyhound",
            iconName: "RacingGreyhound"
        }]
    }

    function eo() {
        const {
            t: s
        } = p();
        return [{
            label: s("AFA"),
            icon: "AFA",
            link: "/sponsorship/afa",
            buttonName: "sponsorship"
        }, {
            label: s("Cloud9"),
            icon: "Cloud9",
            link: "/sponsorship/cloud-9",
            buttonName: "sponsorship"
        }]
    }

    function lt() {
        const {
            t: s
        } = p();
        return [{
            label: s("Promotions"),
            icon: "Promotion",
            link: "/promotion",
            buttonName: "promotion"
        }, {
            label: s("Daily Contest"),
            icon: "DailyContest",
            link: "/promotions/daily-contest",
            buttonName: "daily-contest"
        }, {
            label: s("Weekly Raffle"),
            icon: "WeeklyRaffle",
            link: "/promotions/weekly-raffle",
            buttonName: "weekly-raffle"
        }]
    }

    function so() {
        const {
            t: s
        } = p();
        return [{
            label: s("Trading"),
            icon: "Casino",
            iconName: "TradingIcon",
            link: "/trading",
            buttonName: "trading"
        }, {
            label: s("Futures"),
            icon: "Casino",
            iconName: "ContractIcon",
            link: "/trading/contract",
            buttonName: "trading-contract"
        }]
    }

    function no() {
        const {
            t: s
        } = p();
        return [{
            label: s("My bets"),
            icon: "Mybets",
            link: "/lottery/myBets",
            buttonName: "LotteryMyBets",
            iconName: "LotteryMyBets",
            isLoginShow: !0
        }, {
            label: s("All Lotteries"),
            link: "/lottery/allLotteries",
            buttonName: "LotteryAllLotteries",
            iconName: "LotteryAllLotteries"
        }, {
            label: s("Picks For You"),
            link: "/lottery/allLotteries?sort=lottery_picks_for_you",
            buttonName: "LotteryPicksForYou",
            iconName: "LotteryPicksForYou",
            isLoginShow: !0
        }, {
            label: s("Favorites"),
            link: "/lottery/favourite",
            buttonName: "LotteryFavourite",
            iconName: "LotteryFavourite",
            isLoginShow: !0
        }, {
            label: s("{{site}} Lottery", {
                site: v.siteName
            }),
            link: "/lottery/detail/0",
            buttonName: "LotteryBcLottery",
            iconName: "LotteryBcLottery"
        }, {
            label: s("Popular"),
            link: "/lottery/allLotteries?sort=lottery_popular",
            buttonName: "LotteryPopular",
            iconName: "LotteryPopular"
        }]
    }
    const ao = o.memo(function({
            referFn: s,
            rioFn: n
        }) {
            const {
                t: a
            } = p(), t = it(), i = () => {
                var h;
                (h = Ee) == null || h.openLiveSupport(), W.trackEvent("sidebar_click", {
                    button_name: "live_support"
                })
            }, {
                lang: l
            } = V(), r = l === "ja", m = F(), {
                isKenyaHost: c,
                isUsHost: d
            } = w.getHostType(v.host);
            return e.jsxs("div", {
                className: g(to, "hidden-scroll-y", "fold-scroll-wrap"),
                children: [e.jsx("div", {
                    className: "fold-line",
                    children: e.jsx(de.Target, {
                        id: "bonus-sidebar-link-enter"
                    })
                }), !c && !d && e.jsx(Ws, {
                    fold: !0
                }), m.login ? e.jsx("div", {
                    className: "fold-line",
                    children: e.jsx(ne, {
                        title: a("Refer and Earn"),
                        children: e.jsx("div", {
                            className: "fold-refer",
                            onClick: s,
                            children: e.jsx("img", {
                                alt: "refer",
                                src: Je.refer
                            })
                        })
                    })
                }) : null, e.jsx("div", {
                    className: "fold-line",
                    children: c ? e.jsx(ne, {
                        title: a("Sports"),
                        children: e.jsx(y, {
                            className: "fold-navlink-item",
                            href: "/sports",
                            children: e.jsx(u, {
                                name: "Sports"
                            })
                        })
                    }) : d ? e.jsxs(e.Fragment, {
                        children: [e.jsx(ne, {
                            title: a("Casino"),
                            children: e.jsx(y, {
                                className: "fold-navlink-item",
                                href: "/casino",
                                children: e.jsx(u, {
                                    name: "Casino"
                                })
                            })
                        }), e.jsx(ne, {
                            title: a("Promotions"),
                            children: e.jsx(y, {
                                className: "fold-navlink-item",
                                href: "/promotion",
                                children: e.jsx(u, {
                                    name: "Promotion"
                                })
                            })
                        })]
                    }) : e.jsxs(e.Fragment, {
                        children: [e.jsx(ne, {
                            title: a("Casino"),
                            children: e.jsx(y, {
                                className: "fold-navlink-item",
                                href: "/casino",
                                children: e.jsx(u, {
                                    name: "Casino"
                                })
                            })
                        }), e.jsx(ne, {
                            title: a("Sports"),
                            children: e.jsx(y, {
                                className: "fold-navlink-item",
                                href: "/sports",
                                children: e.jsx(u, {
                                    name: "Sports"
                                })
                            })
                        }), !r && e.jsxs(e.Fragment, {
                            children: [e.jsx(ne, {
                                title: a("Trading"),
                                children: e.jsx(y, {
                                    className: "fold-navlink-item",
                                    href: "/trading",
                                    children: e.jsx(zt, {})
                                })
                            }), e.jsx(ne, {
                                title: a("Futures"),
                                children: e.jsx(y, {
                                    className: "fold-navlink-item",
                                    href: "/trading/contract",
                                    children: e.jsx(qt, {})
                                })
                            }), e.jsx(ne, {
                                title: a("Up Down"),
                                children: e.jsx(y, {
                                    className: "fold-navlink-item",
                                    href: "/trading/up-down",
                                    children: e.jsx($t, {})
                                })
                            })]
                        }), e.jsx(ne, {
                            title: a("Lottery"),
                            children: e.jsx(y, {
                                className: "fold-navlink-item",
                                href: "/lottery",
                                children: e.jsx(u, {
                                    name: "Lottery"
                                })
                            })
                        }), e.jsx(ne, {
                            title: a("Promotions"),
                            children: e.jsx(y, {
                                className: "fold-navlink-item",
                                href: "/promotion",
                                children: e.jsx(u, {
                                    name: "Promotion"
                                })
                            })
                        })]
                    })
                }), e.jsx("div", {
                    className: "fold-line",
                    children: t.map((h, x) => {
                        const b = h.link.indexOf("http") >= 0;
                        return h.exclusive && c ? null : e.jsx(ne, {
                            title: h.label,
                            children: e.jsx(y, {
                                className: "fold-navlink-item",
                                href: h.link,
                                target: b ? "_blank" : "_self",
                                children: h.sportsBettings ? e.jsx(Qs, {}) : e.jsx(u, {
                                    name: h.icon
                                })
                            })
                        }, "fold-nav-" + x)
                    })
                }), e.jsxs("div", {
                    className: "fold-line",
                    children: [m.login && e.jsx(tt, {
                        small: !0
                    }), !c && e.jsx(ne, {
                        title: a("Sponsorship"),
                        children: e.jsx(y, {
                            className: "fold-navlink-item",
                            href: "/sponsorship/afa",
                            children: e.jsx(u, {
                                name: "Sponsorship"
                            })
                        })
                    }), e.jsx(ne, {
                        title: a("Live Support"),
                        children: e.jsx("button", {
                            className: "fold-navlink-item support",
                            onClick: i,
                            children: e.jsx(u, {
                                name: "Support"
                            })
                        })
                    })]
                })]
            })
        }),
        to = "f11y8lik";

    function os(s) {
        return s ? Zt()[s].read() : Zt()
    }
    const io = f.memo(function({
            name: s
        }) {
            return e.jsxs("div", {
                className: g(lo, s && s.toLowerCase() === "hot" && "is-hot"),
                children: [e.jsx("p", {
                    children: s
                }), e.jsx("div", {
                    className: "scan"
                })]
            })
        }),
        lo = "t1co92t6";

    function co({
        onClose: s
    }) {
        const n = os().categoryList.read(),
            {
                urlParsed: a
            } = V(),
            t = a.pathname + a.searchOriginal;
        return e.jsx(e.Fragment, {
            children: n.map(i => e.jsxs(y, {
                className: g("nav-item", t === `/gamelist/${i.categorySection}?fromCategory=1&tag=${i.categoryName}` && "is-active"),
                href: `/gamelist/${i.categorySection}?fromCategory=1&tag=${i.categoryName}`,
                onClick: () => {
                    W.trackEvent("sidebar_click", {
                        button_name: i.categoryName
                    }), s && s()
                },
                children: [e.jsx("div", {
                    className: "nav-item-left",
                    children: e.jsx(ro, {
                        link: i.categoryIconDark ? i.categoryIconDark : i.categoryIconLight
                    })
                }), e.jsx("div", {
                    className: "nav-item-right",
                    title: i.categoryName,
                    children: e.jsx("span", {
                        children: i.categoryName
                    })
                }), i.categoryTag !== "NONE" && e.jsx(io, {
                    name: i.categoryTag
                })]
            }, i.categoryName))
        })
    }

    function ro({
        link: s
    }) {
        const [n, a] = Qe({
            svg: ""
        });
        return o.useEffect(() => {
            s && si({
                url: s,
                responseType: "text"
            }).then(t => {
                a({
                    svg: t.data
                })
            })
        }, [s]), n.svg ? e.jsx("div", {
            className: oo,
            dangerouslySetInnerHTML: {
                __html: n.svg
            }
        }) : null
    }
    const oo = "slh66v7",
        mo = f.memo(function() {
            return e.jsx("svg", {
                className: "add-icon game-icon-svg icon",
                viewBox: "0 0 1024 1024",
                children: e.jsx("path", {
                    d: "m654.997 123.938.491.29 346.281 206.985a46.645 46.645 0 0 1 20.823 28.354 46.636 46.636 0 0 1-4.92 34.812l-.29.491-292.225 488.817a46.648 46.648 0 0 1-28.641 21.296 46.636 46.636 0 0 1-34.812-4.92l-.491-.29-345.778-206.699a46.648 46.648 0 0 1-21.296-28.641 46.636 46.636 0 0 1 4.92-34.812l.29-.491 292.197-488.817a46.648 46.648 0 0 1 28.641-21.296 46.636 46.636 0 0 1 34.812 4.92zm-211.245 16.917a46.635 46.635 0 0 1 24.09 25.649l.195.518 17.737 47.717-256.096 447.22a46.577 46.577 0 0 0-4.527 35.389 46.69 46.69 0 0 0 21.36 27.966l.478.278-.085-.029 191.467 109.641-177.374 65.853a46.613 46.613 0 0 1-35.646-1.338 46.682 46.682 0 0 1-24.062-25.649l-.195-.518L2.908 339.637a46.613 46.613 0 0 1 1.338-35.646 46.682 46.682 0 0 1 25.649-24.062l.518-.195 377.666-140.191a46.553 46.553 0 0 1 35.674 1.309zM202.305 270.236l-48.425 18.589-28.621 93.517-2.243.861-27.611-71.932-41.115 15.783 65.299 170.11 41.115-15.783-17.695-46.099 8.475-27.076 68.028 50.604 49.172-18.875-97.539-70.629 31.161-99.066zm492.712-31.351-74.176 128.477c-3.169 5.348-6.572 9.392-10.21 12.131s-7.471 4.175-11.5 4.308-8.191-1.039-12.486-3.519c-4.113-2.375-7.163-5.264-9.149-8.669s-2.842-7.266-2.567-11.583c.275-4.318 1.701-8.918 4.278-13.801l-44.732-25.826c-7.743 13.275-11.279 25.789-10.608 37.548s4.57 22.398 11.695 31.916c7.127 9.518 16.497 17.63 28.111 24.335 13.127 7.578 26.126 11.777 39 12.597s24.747-1.62 35.619-7.32c10.872-5.699 19.813-14.551 26.823-26.553l74.176-128.477-44.277-25.564z"
                })
            })
        }),
        ho = f.memo(function() {
            return e.jsx("svg", {
                className: "add-icon game-icon-svg icon",
                viewBox: "0 0 1024 1024",
                children: e.jsx("path", {
                    d: "m636.234 58.055.517.304 363.888 217.51a49.013 49.013 0 0 1 21.882 29.797 48.988 48.988 0 0 1-5.17 36.582l-.304.517-164.323 274.869c-14.391-3.868-29.521-5.931-45.133-5.931l-551.985.001a49.053 49.053 0 0 1 6.591-22.252l.304-.517L569.555 75.264a49.01 49.01 0 0 1 30.098-22.379 48.988 48.988 0 0 1 36.582 5.17zM376.309 184.581a39.548 39.548 0 0 1 20.406 21.69l.189.498 15.042 40.465-208.71 364.469h-81.904c-7.577 0-15.042.486-22.362 1.429L2.467 353.154a39.525 39.525 0 0 1 1.134-30.228 39.585 39.585 0 0 1 21.69-20.382l.498-.189L346.057 183.47a39.478 39.478 0 0 1 30.252 1.111zM171.558 294.298l-41.065 15.764-24.271 79.304-1.902.73-23.416-60.999-34.867 13.384 55.375 144.256 34.867-13.384-15.006-39.093 7.187-22.963 57.689 42.913 41.699-16.007-82.715-59.895 26.424-84.01zm506.73-115.452L600.34 313.855c-3.33 5.62-6.906 9.87-10.728 12.748s-7.851 4.387-12.085 4.527c-4.234.14-8.607-1.092-13.12-3.697-4.322-2.496-7.527-5.532-9.614-9.111s-2.986-7.635-2.697-12.172c.278-4.369 1.678-9.013 4.2-13.934l.296-.569-47.006-27.139c-8.137 13.948-11.852 27.1-11.147 39.457s4.802 23.536 12.291 33.539c7.489 10.002 17.335 18.526 29.539 25.573 13.794 7.964 27.454 12.376 40.983 13.237s26.006-1.702 37.431-7.692c11.221-5.882 20.484-14.96 27.79-27.23l.397-.672 77.948-135.009-46.529-26.864zm126.758 471.19c89.072 0 161.279 72.207 161.279 161.279s-72.207 161.279-161.279 161.279H166.883c-89.072 0-161.279-72.207-161.279-161.279s72.207-161.279 161.279-161.279h638.163zm-470.118 68.251h-50.447l62.922 186.055h60.008l62.922-186.055h-50.447l-41.704 136.271h-1.548L334.93 718.287zm189.919 0h-45.074v186.055h45.074V718.287zm94.579 0H542.39v186.055h45.074v-57.779h30.595c14.265 0 26.589-2.634 36.97-7.903s18.379-12.704 23.994-22.303c5.615-9.599 8.423-20.819 8.423-33.659 0-12.779-2.762-23.999-8.286-33.659s-13.371-17.2-23.539-22.621c-10.168-5.42-22.234-8.131-36.196-8.131zm-9.743 36.248c6.738 0 12.415 1.151 17.028 3.452s8.104 5.556 10.472 9.766c2.368 4.21 3.552 9.191 3.552 14.944 0 5.693-1.184 10.674-3.552 14.944s-5.843 7.586-10.426 9.948-10.275 3.543-17.073 3.543h-22.218v-56.598z"
                })
            })
        }),
        uo = f.memo(function() {
            return e.jsx("svg", {
                className: "add-icon game-icon-svg icon",
                viewBox: "0 0 1024 1024",
                children: e.jsx("path", {
                    d: "m576.453 943.276-196.13 59.963c-34.024 10.403-56.359-1.19-66.996-34.768l-.319-1.024-7.39-24.172h270.835zm180.696-823.055c32.356 0 48.701 16.019 49.024 48.055l.005.975V855.66c0 32.356-16.021 48.701-48.054 49.024l-.975.005H266.857c-32.358 0-48.701-16.021-49.024-48.054l-.005-.975V169.251c0-32.358 16.019-48.701 48.054-49.024l.975-.005h490.292zm87.616 373.887 86.889 284.199c10.402 34.022-1.19 56.359-34.768 66.996l-1.024.319-51.22 15.661c.082-1.849.124-3.725.124-5.625l-.001-361.551zm-330.221-22.855h-5.073c-.687.506-1.401.989-2.121 1.466l-1.623 1.069c-1.8 1.194-3.548 2.433-4.933 3.994-29.218 32.882-59.815 64.376-93.198 93.08-8.886 7.64-18.314 14.673-26.926 22.601-17.646 16.244-27.606 36.485-29.772 60.458-.062.687-.272 1.361-.448 2.039l-.101.407v10.143c.163.996.316 1.994.464 2.992l.441 2.998c.443 2.998.91 5.99 1.584 8.935 8.305 36.318 38.624 64.575 75.447 70.613 18.286 2.998 35.795 1.445 51.954-8.397 3.398-2.073 6.566-4.53 10.082-6.98.086.86.231 1.632.234 2.401.012 5.282-.007 10.565-.011 15.848-.011 9.575-3.925 17.145-11.754 22.633a258.501 258.501 0 0 1-4.031 2.763l-4.057 2.723a217.103 217.103 0 0 0-6.022 4.172c-4.151 3.002-4.313 4.85-1.056 8.415l.2.216h95.726c3.697-3.108 3.743-5.473-.15-8.344-3.821-2.813-7.742-5.515-11.775-8.019-9.73-6.035-14.601-14.584-14.211-26.127.186-5.477.032-10.968.032-16.576.494.092.858.048 1.049.21 16.713 14.176 36.154 18.803 57.432 15.573 33.705-5.116 58.467-22.889 73.412-53.747 4.5-9.29 6.965-19.213 7.768-29.53.059-.775.273-1.537.452-2.303l.103-.46.004-.01v-10.143c-.959-5.594-1.594-11.276-2.948-16.775-5.018-20.359-15.736-37.289-32.099-50.333-41.944-33.426-79.623-71.224-115.178-111.247-1.571-1.77-3.583-3.144-5.617-4.5l-1.109-.739a51.832 51.832 0 0 1-2.172-1.521zM179.41 162.701a125.798 125.798 0 0 0-.171 6.549l-.001 360.661-86.894-284.217c-10.403-34.024 1.188-56.358 34.768-66.996l1.024-.319 51.271-15.677zm210.017 32.652h-39.601v101.318c-.048 3.8-.604 6.988-1.662 9.562s-2.613 4.51-4.661 5.809c-2.048 1.299-4.564 1.948-7.552 1.948-2.939 0-5.431-.637-7.479-1.912s-3.637-3.187-4.77-5.737c-1.066-2.399-1.693-5.311-1.884-8.734l-.031-.648h-40.18c-.047 11.354 2.265 20.579 6.938 27.674s10.936 12.292 18.789 15.587c7.853 3.295 16.525 4.943 26.015 4.943 10.936 0 20.608-2.032 29.014-6.098s15.007-9.742 19.8-17.03c4.667-7.097 7.085-15.299 7.253-24.608l.009-.757V195.352zM710.673 55.531l.319 1.024 7.667 25.078H444.575l199.1-60.871c34.022-10.402 56.358 1.188 66.996 34.768z"
                })
            })
        }),
        po = f.memo(function() {
            return e.jsx("svg", {
                className: "add-icon game-icon-svg icon",
                viewBox: "0 0 1024 1024",
                children: e.jsx("path", {
                    d: "m155.809 388.588 367.879 525.394c20.534 29.33 63.233 34.987 95.186 12.614L862.8 755.787 693.259 997.962c-18.642 26.625-55.218 33.706-83.85 17.17l-4.964-3.164L63.536 633.22c-27.514-19.265-35.973-55.464-20.416-83.16l3.199-5.086 109.492-156.386zM618.307 25.03l.588.824 358.813 512.439c19.197 27.421 12.374 65.519-15.117 85.429l-.839.598-330.706 231.56c-27.909 19.542-66.129 13.392-85.706-13.604l-.588-.824-358.813-512.439c-19.197-27.421-12.374-65.513 15.117-85.424l.839-.598 330.706-231.56c27.907-19.54 66.128-13.396 85.706 13.6zm58.843 326.165c-16.538 2.702-31.631 8.834-45.042 18.222-20.317 14.227-33.984 34.191-40.199 56.079-22.694-1.644-46.127 4.369-66.445 18.593-13.411 9.39-24.334 21.479-32.533 36.096-16.78 30.044-17.609 66.462-2.155 97.423 16.313 32.527 47.503 53.997 83.465 57.501.211.029.453.102.718.117l.203-.001 140.513 9.763c8.907.583 17.761-2.155 24.909-7.157 7.072-4.952 12.56-12.007 15.085-20.412l.16-.55 38.883-135.376c.061-.256.148-.644.206-.902 9.086-35.049-.5-71.641-25.486-98.096l.004.001c-23.729-25.173-58.232-36.848-92.286-31.299zm-505.006 159.62c-10.76-3.095-21.203-3.176-31.33-.243s-19.243 8.453-27.35 16.56c-8.136 8.136-13.664 17.26-16.582 27.372s-2.823 20.54.287 31.285c3.11 10.745 9.647 21.1 19.611 31.064 9.935 9.935 20.267 16.45 30.998 19.545s21.166 3.199 31.307.31c10.141-2.889 19.28-8.402 27.416-16.538 8.107-8.107 13.627-17.224 16.56-27.35s2.852-20.569-.243-31.33c-3.095-10.76-9.625-21.122-19.589-31.086s-20.326-16.494-31.086-19.589zm-25.139 27.438c5.203-1.017 10.672-.324 16.405 2.078s11.549 6.552 17.445 12.448c5.896 5.896 10.045 11.711 12.448 17.445s3.095 11.202 2.078 16.405c-1.017 5.203-3.707 9.986-8.07 14.349-4.334 4.334-9.109 7.016-14.327 8.048s-10.694.346-16.428-2.056c-5.734-2.403-11.549-6.552-17.445-12.448s-10.045-11.711-12.448-17.445c-2.403-5.734-3.088-11.21-2.056-16.428s3.714-9.994 8.048-14.327c4.363-4.363 9.146-7.053 14.349-8.07zm122.263 33.433-28.064 10.059c-.365 9.243-3.107 17.877-7.99 25.96l31.813-10.453 4.242-25.567zM370.75 214.355l-39.793 26.841-6.339 90.277-1.843 1.243-39.87-59.109-33.786 22.789 94.287 139.787 33.786-22.789-25.552-37.882 2.005-26.179 71.871 31.466 40.407-27.255-102.649-43.379 7.474-95.809z"
                })
            })
        }),
        xo = f.memo(function() {
            return e.jsx("svg", {
                className: "add-icon-new game-icon-svg icon",
                viewBox: "0 0 40 40",
                children: e.jsx("path", {
                    d: "M18.86 18.25C18.7596 17.5 18.404 17.1053 17.8909 16.7498C17.7549 16.6555 17.608 16.5 17.4518 16.5H22.55C22.3933 16.5 22.2462 16.6557 22.11 16.75C21.5962 17.1055 21.2404 17.4995 21.1402 18.2495C21.1402 18.2495 20.4444 18 20 18C19.5556 18 18.86 18.25 18.86 18.25ZM10.4427 19.75C10.5456 21.75 11.2484 23.9967 13.3853 23.9967C16.1847 23.9967 18.8184 21.8558 18.8876 18.7498C18.8876 18.7498 19.566 18.4998 20 18.4998C20.434 18.4998 21.1124 18.7498 21.1124 18.7498C21.1816 21.8555 23.8151 24 26.6147 24C28.7516 24 29.4547 21.7498 29.5573 19.7498H30V18.4998H29.5556C29.5422 18.2498 29.518 18.0732 29.4944 17.8755C29.352 16.6815 27.1342 16 24.8889 16H15.1111C12.8658 16 10.6478 16.6807 10.5053 17.8752C10.482 18.072 10.4578 18.25 10.4444 18.5H10V19.75H10.4427Z"
                })
            })
        }),
        jo = f.memo(function() {
            return e.jsx("svg", {
                className: "add-icon-new game-icon-svg icon",
                viewBox: "0 0 40 40",
                children: e.jsx("path", {
                    d: "M19.2588 21.8968L18.645 20.7747C18.6345 20.7537 18.6471 20.7284 18.6724 20.7263L20.0933 20.6442C20.1627 20.64 20.1816 20.5474 20.1185 20.5158C19.675 20.2989 19.2126 20.1368 18.7333 20.0337C18.6997 20.0274 18.6871 20.0063 18.6892 19.9726C18.6997 19.8758 18.748 19.8063 18.8363 19.7642C18.8636 19.7516 18.8847 19.7326 18.9015 19.7095C19.1411 19.3853 19.4038 19.08 19.6876 18.7937C19.7339 18.7474 19.7002 18.6716 19.6372 18.6737L18.3276 18.6989C18.294 18.6989 18.2793 18.6821 18.2856 18.6505C18.3886 18.0526 18.7459 17.5074 19.1516 17.0147C19.1726 16.9895 19.1537 16.9516 19.1222 16.9537L17.7055 17.0442C17.5625 17.0526 17.5247 16.9958 17.5899 16.8674C17.943 16.1747 18.4285 15.5916 19.0423 15.1137C19.0654 15.0947 19.0612 15.0589 19.036 15.0442C18.4012 14.7347 17.7433 14.4779 17.0686 14.2716C17.0139 14.2547 17.0097 14.1789 17.0602 14.1558C17.7811 13.8232 18.5315 13.5726 19.3114 13.4021C19.3429 13.3958 19.345 13.3832 19.3177 13.3642C18.6934 12.9368 18.0397 12.5579 17.3565 12.2274C17.2788 12.1895 17.2935 12.0758 17.3776 12.0611C18.3928 11.8716 19.4144 11.8189 20.4443 11.9053C20.4822 11.9074 20.5032 11.8632 20.478 11.8358C19.8705 11.2105 19.1873 10.6905 18.4243 10.2737C18.3508 10.2337 18.3802 10.1242 18.4622 10.1242C19.7696 10.1326 21.0413 10.44 22.2814 10.8589C22.355 10.8842 22.376 10.8611 22.3466 10.7895C22.0187 10.0526 21.4995 9.49474 20.7848 9.11789C20.7281 9.08842 20.7491 9 20.8143 9C22.0187 9.00421 23.2105 9.75368 24.0345 10.5768C24.0555 10.5979 24.0828 10.6105 24.1143 10.6126C25.2095 10.6442 26.3676 10.9347 26.6703 12.1516C26.6787 12.1811 26.6998 12.2042 26.7292 12.2126L27.6477 12.4463C27.6835 12.4547 27.7066 12.4421 27.7192 12.4084L27.8537 12.0295C27.8684 11.9874 27.8958 11.9768 27.9336 11.9979C28.4192 12.2547 28.7471 12.4063 28.9741 12.8021C29.1738 13.1495 29.1885 13.6989 29.1801 14.0821C29.178 14.2232 28.9993 14.2863 28.9089 14.1768C28.8353 14.0884 28.7387 14.0211 28.6188 13.9768C28.5831 13.9642 28.5432 13.9768 28.5201 14.0063L28.2132 14.4337C28.1375 14.5389 27.9756 14.5263 27.9189 14.4084L27.6414 13.8316C27.5847 13.7116 27.406 13.7495 27.4018 13.8821L27.3934 14.1032C27.3934 14.1453 27.3703 14.1684 27.3282 14.1705C26.8889 14.2084 26.9835 13.8168 26.6724 13.7179C26.643 13.7095 26.6199 13.7179 26.601 13.7432L26.3445 14.1179C26.3214 14.1495 26.2773 14.1558 26.2478 14.1284C26.128 14.0168 26.0545 13.8779 26.025 13.7137C26.0187 13.68 25.9956 13.6547 25.962 13.6463L25.4281 13.5095C25.3881 13.4989 25.3461 13.5284 25.3419 13.5684L25.3019 13.8758C25.2977 13.9053 25.3188 13.9347 25.3482 13.9411L25.756 14.0189C25.7854 14.0253 25.8043 14.0421 25.8106 14.0716L25.9115 14.5116C25.9199 14.5474 25.9451 14.5747 25.9788 14.5853C26.1722 14.6505 26.3571 14.6337 26.5316 14.5389C26.561 14.5221 26.5968 14.5242 26.6241 14.5432C26.9814 14.7895 26.4896 14.9979 26.6325 15.2232C26.6535 15.2568 26.6829 15.2716 26.7229 15.2695L27.467 15.2358C27.5237 15.2337 27.5679 15.2905 27.5489 15.3453C27.3997 15.7705 27.0991 16.0358 26.6451 16.1389C26.2752 16.2232 25.9073 16.2568 25.5374 16.2442C25.4974 16.2421 25.4617 16.2126 25.4533 16.1726C25.323 15.5368 25.2452 15.2758 24.5936 15.0442C24.1522 14.8863 23.7213 14.7053 23.3009 14.5032C23.2736 14.4884 23.2462 14.4926 23.221 14.5095C21.3292 15.9053 22.8427 18.1453 23.9483 19.4295C25.0981 20.7621 26.1196 22.0989 26.2184 23.9411C26.2794 25.0758 25.9977 26.1326 25.3692 27.1095C25.3167 27.1916 25.3797 27.2968 25.4764 27.2884C26.6619 27.1937 27.3156 27.9011 27.6351 28.9453C27.6414 28.9642 27.6267 28.9853 27.6057 28.9853L19.6204 29C19.5762 29 19.5405 28.9663 19.5384 28.9221L19.5216 28.6379C19.5195 28.6042 19.5026 28.5916 19.469 28.5979C18.8615 28.7221 18.2141 28.8758 17.6298 28.8947C16.1332 28.9432 14.7943 28.5221 13.6172 27.6337C12.5178 26.8063 11.6939 25.0674 11.8158 23.7032C11.8746 23.0421 12.0743 22.3916 12.4169 21.7516C13.3103 20.0737 15.3155 19.0337 13.9619 16.9558C13.9282 16.9053 13.8526 16.9137 13.8316 16.9705L13.3166 18.36C13.285 18.4442 13.1631 18.4442 13.1316 18.36C12.6355 17.0084 12.0197 15.7032 11.2798 14.4484C11.1957 14.3032 11.1158 14.1895 11.0423 14.1011C10.9708 14.0168 10.9897 13.9747 11.1011 13.9789C12.6965 14.0168 14.191 14.4168 15.5825 15.1789C15.6834 15.2337 15.6834 15.2884 15.5783 15.3368L14.6828 15.7684C14.563 15.8253 14.5567 15.8947 14.6639 15.9747C15.8557 16.84 16.4674 18.0779 16.274 19.5558C16.1437 20.5495 15.7843 21.2695 15.2146 22.2505C15.1474 22.3663 15.0822 22.5242 15.015 22.7242C14.7102 23.6421 15.4879 23.8253 16.1689 23.9032C16.2173 23.9095 16.2467 23.8863 16.2572 23.8379L16.5073 22.6021C16.5158 22.5558 16.5431 22.5411 16.5851 22.5642L17.84 23.1853C17.9199 23.2253 17.9493 23.2021 17.9241 23.1137C17.798 22.6526 17.7181 22.1853 17.6823 21.7095C17.6802 21.6695 17.6971 21.6547 17.737 21.6611L19.2336 21.9305C19.2651 21.9389 19.2735 21.9263 19.2588 21.8968ZM25.1086 12.3116C25.2599 12.3684 25.447 12.4253 25.6088 12.4105C25.6845 12.4042 25.7202 12.3116 25.6656 12.2547L25.1296 11.6968C25.0665 11.6316 24.9593 11.6505 24.9215 11.7326C24.787 12.0211 24.8479 12.2126 25.1086 12.3116ZM18.3949 24.8737C18.3697 24.9137 18.3297 24.9263 18.3087 24.9558C18.2877 24.9853 18.3234 25.0232 18.355 25.0042C19.4123 24.3832 20.8878 24.1347 21.8589 25.0211C22.4538 25.5642 22.6703 26.3179 22.6114 27.12C22.6051 27.1979 22.7081 27.2316 22.7502 27.1663C23.3829 26.1537 23.0381 24.8737 22.0986 24.1684C21.5457 23.7558 20.932 23.5937 20.2572 23.6821C19.4438 23.7895 18.8237 24.1874 18.3949 24.8737Z"
                })
            })
        }),
        go = f.memo(function() {
            return e.jsx("svg", {
                className: "add-icon-new game-icon-svg icon",
                viewBox: "0 0 40 40",
                children: e.jsx("path", {
                    d: "M29.2857 19.2857H28.5714C28.4255 17.5111 27.7259 15.8271 26.5714 14.4714L27.1071 13.9357C27.1733 13.8672 27.2253 13.7864 27.2602 13.6978C27.2951 13.6093 27.3122 13.5147 27.3105 13.4195C27.3088 13.3243 27.2885 13.2304 27.2505 13.1431C27.2125 13.0558 27.1578 12.9768 27.0893 12.9107C27.0208 12.8446 26.94 12.7926 26.8514 12.7577C26.7628 12.7228 26.6683 12.7057 26.5731 12.7074C26.4779 12.709 26.384 12.7294 26.2967 12.7674C26.2094 12.8053 26.1304 12.8601 26.0643 12.9286L25.5286 13.4643C24.1729 12.3098 22.4889 11.6102 20.7143 11.4643V10.7143C20.7143 10.5248 20.639 10.3432 20.5051 10.2092C20.3711 10.0753 20.1894 10 20 10C19.8106 10 19.6289 10.0753 19.4949 10.2092C19.361 10.3432 19.2857 10.5248 19.2857 10.7143V11.4286C17.5111 11.5745 15.8271 12.2741 14.4714 13.4286L13.9357 12.9286C13.7991 12.8116 13.6233 12.7504 13.4435 12.7573C13.2638 12.7643 13.0932 12.8388 12.966 12.966C12.8388 13.0932 12.7643 13.2638 12.7573 13.4435C12.7504 13.6233 12.8116 13.7991 12.9286 13.9357L13.4643 14.4714C12.3098 15.8271 11.6102 17.5111 11.4643 19.2857H10.7143C10.5248 19.2857 10.3432 19.361 10.2092 19.4949C10.0753 19.6289 10 19.8106 10 20C10 20.1894 10.0753 20.3711 10.2092 20.5051C10.3432 20.639 10.5248 20.7143 10.7143 20.7143H11.4286C11.5745 22.4889 12.2741 24.1729 13.4286 25.5286L12.8929 26.0643C12.7593 26.2026 12.6862 26.3883 12.6895 26.5805C12.6929 26.7727 12.7724 26.9557 12.9107 27.0893C13.049 27.2228 13.2347 27.296 13.4269 27.2926C13.6191 27.2893 13.8022 27.2097 13.9357 27.0714L14.4714 26.5357C15.8225 27.7031 17.507 28.4154 19.2857 28.5714V29.2857C19.2857 29.4752 19.361 29.6568 19.4949 29.7908C19.6289 29.9247 19.8106 30 20 30C20.1894 30 20.3711 29.9247 20.5051 29.7908C20.639 29.6568 20.7143 29.4752 20.7143 29.2857V28.5714C22.4889 28.4255 24.1729 27.7259 25.5286 26.5714L26.0643 27.1071C26.1283 27.1819 26.2071 27.2426 26.2957 27.2855C26.3844 27.3284 26.4809 27.3525 26.5792 27.3563C26.6776 27.3601 26.7757 27.3435 26.8674 27.3076C26.959 27.2717 27.0423 27.2172 27.1119 27.1476C27.1815 27.078 27.236 26.9947 27.2719 26.9031C27.3078 26.8114 27.3244 26.7133 27.3206 26.615C27.3168 26.5166 27.2927 26.4201 27.2498 26.3315C27.2069 26.2428 27.1462 26.164 27.0714 26.1L26.5357 25.5643C27.71 24.2035 28.4227 22.5055 28.5714 20.7143H29.2857C29.4752 20.7143 29.6568 20.639 29.7908 20.5051C29.9247 20.3711 30 20.1894 30 20C30 19.8106 29.9247 19.6289 29.7908 19.4949C29.6568 19.361 29.4752 19.2857 29.2857 19.2857ZM25.6643 19.2857H21.7214L24.5071 16.5C25.1373 17.3071 25.5371 18.2697 25.6643 19.2857ZM23.5214 15.4929L20.7143 18.2786V14.3357C21.7303 14.4629 22.6929 14.8627 23.5 15.4929H23.5214ZM19.2857 14.3357V18.2786L16.5 15.4929C17.3071 14.8627 18.2697 14.4629 19.2857 14.3357ZM15.4929 16.4786L18.2786 19.2643H14.3357C14.4666 18.2558 14.8663 17.301 15.4929 16.5V16.4786ZM14.3357 20.7143H18.2786L15.4929 23.5C14.8627 22.6929 14.4629 21.7303 14.3357 20.7143ZM16.4786 24.5071L19.2643 21.7214V25.6643C18.2558 25.5334 17.301 25.1337 16.5 24.5071H16.4786ZM20.7143 25.6643V21.7214L23.5 24.5071C22.6929 25.1373 21.7303 25.5371 20.7143 25.6643ZM24.5071 23.5214L21.7214 20.7143H25.6643C25.5371 21.7303 25.1373 22.6929 24.5071 23.5V23.5214Z"
                })
            })
        }),
        fo = f.memo(function() {
            return e.jsx("svg", {
                className: "add-icon-new game-icon-svg icon",
                viewBox: "0 0 40 40",
                children: e.jsx("path", {
                    d: "M17.3506 21.78C17.3506 22.0343 17.287 22.2885 17.2235 22.4792H20.3381C20.4653 22.4792 20.5924 22.4156 20.5924 22.2885V21.78C20.3381 21.8436 20.0839 21.8436 19.766 21.8436H18.0498C17.7956 21.8436 17.5414 21.8436 17.3506 21.78L17.3506 21.78ZM13.6004 24.6403C13.3462 24.3861 12.9012 24.3861 12.5834 24.6403C12.3292 24.8946 12.3292 25.3396 12.5834 25.6573C12.9013 25.9116 13.3462 25.9116 13.6004 25.6573C13.8547 25.3395 13.8547 24.8946 13.6004 24.6403ZM21.7365 21.335V22.4791C21.7365 23.1147 21.228 23.5597 20.6559 23.5597H16.9057L16.3972 25.3395C15.9523 27.0557 14.1089 28.0726 12.3927 27.5641C10.6765 27.1191 9.65954 25.2758 10.1044 23.5595L10.9307 20.6992C11.3121 19.3008 12.6469 18.3474 14.0454 18.3474C13.9818 17.7118 14.109 17.0126 14.2997 16.377C13.2191 15.932 13.0284 14.7879 12.9648 13.7073C12.9648 12.7539 14.4904 12.7539 14.4904 13.7709C14.4904 14.1523 14.6811 15.0422 15.126 15.1058C15.9523 14.2794 16.9057 13.8345 18.05 13.8345H26.8218L27.3939 13.0082H29.0465V13.8345H30V16.9492H23.7072C23.7072 17.0128 23.7708 17.1399 23.7708 17.2035H27.1396V18.3476H23.7708C23.5801 19.6188 22.8173 20.763 21.7367 21.3351L21.7365 21.335ZM20.4017 15.6144H17.4777C17.0963 15.6144 17.0963 16.25 17.4777 16.25H20.4017C20.783 16.25 20.783 15.6144 20.4017 15.6144ZM20.4017 17.5213H17.4777C17.0963 17.5213 17.0963 18.1569 17.4777 18.1569H20.4017C20.783 18.1569 20.783 17.5213 20.4017 17.5213ZM20.4017 19.4917H17.4777C17.0963 19.4917 17.0963 20.0638 17.4777 20.0638H20.4017C20.783 20.0638 20.783 19.4917 20.4017 19.4917Z"
                })
            })
        }),
        bo = f.memo(function() {
            return e.jsx("svg", {
                className: "add-icon-new game-icon-svg icon",
                viewBox: "0 0 40 40",
                children: e.jsx("path", {
                    d: "M24.7625 22.375L21.875 18.25L22.5 16.375L26.25 17L21.875 12L15.625 15.125L14.1312 22.625C11.625 23.1625 10 24.0875 10 25.125C10 26.85 14.475 28.25 20 28.25C25.525 28.25 30 26.85 30 25.125C30 23.9375 27.8813 22.9062 24.7625 22.375Z"
                })
            })
        }),
        vo = f.memo(function() {
            return e.jsxs("svg", {
                className: "add-icon-new game-icon-svg icon",
                viewBox: "0 0 40 40",
                children: [e.jsx("path", {
                    d: "M29 15.758H23.04L24.4 11C22.3723 12.0435 20.7013 13.6672 19.6 15.664L20.912 11C17.386 12.844 16.054 15.758 16.054 15.758L13.6 21.846H13.4C13.2994 21.8462 13.2012 21.8764 13.1178 21.9326C13.0345 21.9889 12.9698 22.0688 12.932 22.162L12.628 22.912C12.5313 22.9182 12.4383 22.9517 12.3598 23.0085C12.2813 23.0653 12.2204 23.1432 12.1843 23.2331C12.1481 23.323 12.1381 23.4213 12.1554 23.5166C12.1727 23.612 12.2166 23.7005 12.282 23.772L12.066 24.308C12.0345 24.3845 12.0223 24.4677 12.0307 24.55C12.0391 24.6324 12.0677 24.7114 12.114 24.78C12.1721 24.8619 12.2527 24.9251 12.346 24.962L11 28.268H23.28V25.002C23.4142 25.002 23.5429 24.9487 23.6378 24.8538C23.7327 24.7589 23.786 24.6302 23.786 24.496V23.872C23.8666 23.8282 23.9338 23.7634 23.9807 23.6846C24.0276 23.6057 24.0523 23.5157 24.0523 23.424C24.0523 23.3323 24.0276 23.2423 23.9807 23.1634C23.9338 23.0846 23.8666 23.0198 23.786 22.976V22.352C23.786 22.2178 23.7327 22.0891 23.6378 21.9942C23.5429 21.8993 23.4142 21.846 23.28 21.846V21.478C24.0312 21.4783 24.7752 21.3305 25.4693 21.0431C26.1634 20.7558 26.794 20.3344 27.3252 19.8032C27.8564 19.272 28.2778 18.6414 28.5651 17.9473C28.8525 17.2532 29.0003 16.5092 29 15.758ZM23.28 24.496H12.524L13.4 22.352H23.28V24.496ZM22.266 16.644C22.534 16.644 22.752 17.086 22.752 17.632C22.752 18.178 22.534 18.618 22.266 18.618C21.998 18.618 21.782 18.176 21.782 17.634C21.782 17.092 22 16.644 22.266 16.644Z"
                }), e.jsx("path", {
                    d: "M15.3721 23.94C15.4745 23.9399 15.5747 23.9094 15.6597 23.8523C15.7448 23.7951 15.8109 23.7139 15.8497 23.619C15.8884 23.5242 15.898 23.4199 15.8773 23.3196C15.8566 23.2192 15.8064 23.1273 15.7332 23.0555C15.6601 22.9838 15.5672 22.9355 15.4665 22.9167C15.3657 22.8979 15.2617 22.9096 15.1676 22.9502C15.0735 22.9908 14.9936 23.0585 14.9381 23.1446C14.8826 23.2308 14.8541 23.3315 14.8561 23.434C14.8582 23.5692 14.9135 23.6982 15.0101 23.793C15.1067 23.8877 15.2368 23.9405 15.3721 23.94Z"
                }), e.jsx("path", {
                    d: "M20.814 23.94C20.9166 23.9403 21.0169 23.9101 21.1023 23.8532C21.1876 23.7963 21.254 23.7153 21.2931 23.6204C21.3321 23.5256 21.342 23.4213 21.3215 23.3208C21.301 23.2203 21.251 23.1282 21.1779 23.0562C21.1048 22.9843 21.012 22.9358 20.9112 22.9168C20.8104 22.8979 20.7062 22.9094 20.612 22.95C20.5178 22.9905 20.4378 23.0582 20.3822 23.1444C20.3267 23.2306 20.298 23.3314 20.3 23.434C20.3021 23.5689 20.3572 23.6976 20.4534 23.7922C20.5495 23.8869 20.6791 23.94 20.814 23.94Z"
                }), e.jsx("path", {
                    d: "M18.094 23.94C18.1965 23.9399 18.2966 23.9094 18.3817 23.8523C18.4667 23.7951 18.5328 23.7139 18.5716 23.619C18.6103 23.5242 18.6199 23.4199 18.5992 23.3196C18.5785 23.2192 18.5283 23.1273 18.4552 23.0555C18.382 22.9838 18.2891 22.9355 18.1884 22.9167C18.0876 22.8979 17.9836 22.9096 17.8895 22.9502C17.7954 22.9908 17.7155 23.0585 17.66 23.1446C17.6046 23.2308 17.576 23.3315 17.578 23.434C17.5801 23.5692 17.6354 23.6982 17.732 23.793C17.8286 23.8877 17.9587 23.9405 18.094 23.94Z"
                })]
            })
        }),
        No = f.memo(function() {
            return e.jsx("svg", {
                className: "add-icon-new game-icon-svg icon",
                viewBox: "0 0 40 40",
                children: e.jsx("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M19.7768 19.8498C14.1765 16.3698 19.0393 11 19.0393 11C11.3418 11.8988 8.02309 21.7857 14.2687 26.879L14.3148 25.0583C15.5132 26.395 16.9881 26.5102 16.9881 26.5102C16.0432 25.7266 16.0432 23.9751 16.0432 23.9751C17.5643 25.6806 19.2006 25.0583 19.2006 25.0583C17.2877 24.436 17.426 22.4771 17.426 22.4771C20.7677 23.0533 20.6295 25.404 20.6295 25.404C19.5232 28.6996 15.6514 27.8469 15.6514 27.8469C20.3068 30.6816 26.5754 27.9852 28.35 23.0763C30.1476 18.1905 27.7047 12.3367 22.9802 13.4429C22.865 12.4058 24.0634 11.5762 24.0634 11.5762C21.3439 12.4519 21.5283 13.7425 21.5283 13.7425L20.5834 12.498L20.8138 14.5952L20.2377 17.0382C20.7908 18.7666 21.874 18.2135 22.5423 16.8538C26.5293 16.0933 24.847 22.5923 19.7768 19.8498Z"
                })
            })
        }),
        ko = f.memo(function() {
            return e.jsx("svg", {
                className: "add-icon-new game-icon-svg icon",
                viewBox: "0 0 40 40",
                children: e.jsx("path", {
                    d: "M28.2819 27.5244H27.5273V18.4366C27.5273 8.52112 12.5092 8.52112 12.5092 18.4366V27.5244H11.7546C11 27.5244 11 27.5244 11 28.2622C11 29 11 29 11.7546 29H13.2638H18.141C18.141 29 18.141 29 18.1594 29H18.8956V25.6888C18.8956 24.5911 17.3864 24.5911 15.141 20.1822C16.2637 19.0845 17.3864 21.6578 18.141 21.6578C18.141 21.6578 18.5091 21.2979 18.5091 20.92L18.141 18.3467L17.3864 16.871C17.0183 16.1332 18.141 15.7733 18.5091 16.5111L19.2637 17.9868L19.6318 19.0845H19.9999V16.889L19.6318 14.6936C19.6318 13.9558 20.7544 13.9558 20.7544 14.6936L21.1225 16.889V19.0845H21.4906L21.8587 16.889V15.0535C21.8587 14.3157 22.9814 14.3157 22.9814 15.0535V17.2489L22.6133 19.0845H22.9814L23.736 17.9868V16.5111C23.736 15.7733 24.8587 15.7733 24.8587 16.5111V18.3467L24.1041 20.92C23.3495 24.2312 22.5949 24.5911 22.5949 25.6888V29H25.2084C25.2268 29 25.2268 29 25.2268 29H26.7359H28.2451C28.9997 29 28.9997 29 28.9997 28.2622C28.9997 27.5244 29.0365 27.5244 28.2819 27.5244Z"
                })
            })
        }),
        yo = f.memo(function() {
            return e.jsx("svg", {
                viewBox: "0 0 24 24",
                className: "japarot-svg icon",
                children: e.jsx("path", {
                    d: "M20.1514 14.8028C20.3738 14.8028 20.587 14.8912 20.7442 15.0484L23.0432 17.3474C23.2291 17.5333 23.317 17.7955 23.2807 18.0559L22.7038 22.1948C22.6461 22.609 22.2918 22.9173 21.8735 22.9173H2.03086C1.60622 22.9173 1.24864 22.5998 1.19841 22.1782L0.703833 18.0256C0.674864 17.7825 0.753661 17.5388 0.919505 17.3586L3.0234 15.0734C3.18214 14.9009 3.4058 14.8028 3.64015 14.8028H20.1515L20.1514 14.8028ZM17.6227 15.6336C16.2006 15.6336 15.0478 16.076 15.0478 16.6217C15.0478 17.1673 16.2006 17.6097 17.6227 17.6097C19.0447 17.6097 20.1975 17.1673 20.1975 16.6217C20.1975 16.076 19.0447 15.6336 17.6227 15.6336ZM7.67154 15.6301H5.25638C5.16818 15.6301 5.06567 15.6704 5.02742 15.7201L3.97941 17.0806C3.94114 17.1303 3.98161 17.1705 4.06981 17.1705H6.48497C6.57317 17.1705 6.67568 17.1302 6.71393 17.0806L7.76194 15.7201C7.80022 15.6704 7.75974 15.6301 7.67154 15.6301ZM11.9031 15.6301H9.4879C9.39971 15.6301 9.29719 15.6704 9.25894 15.7201L8.21093 17.0806C8.17266 17.1303 8.21314 17.1705 8.30133 17.1705H10.7165C10.8047 17.1705 10.9072 17.1302 10.9455 17.0806L11.9935 15.7201C12.0317 15.6704 11.9913 15.6301 11.9031 15.6301ZM19.7384 5.71342C20.2455 5.71342 20.6566 6.12452 20.6566 6.63159V13.0188C20.6566 13.5259 20.2455 13.937 19.7384 13.937H4.26936C3.76226 13.937 3.35119 13.5259 3.35119 13.0188V6.63159C3.35119 6.12449 3.76229 5.71342 4.26936 5.71342H19.7384ZM20.6896 1.08269C20.8495 1.08269 21.0004 1.1564 21.0986 1.28219L21.104 1.28924L23.6015 4.60178C21.3502 6.66292 23.0858 12.2821 21.3802 13.8895L21.3275 13.937V5.12073C21.3275 4.837 21.0998 4.60645 20.8171 4.60183L20.8086 4.60176H3.19154C2.90492 4.60176 2.67258 4.83409 2.67258 5.12071V13.937C0.878841 12.3959 2.67258 6.68369 0.39856 4.60171L2.89613 1.28917C2.99417 1.15912 3.14761 1.08264 3.3105 1.08264H20.6897L20.6896 1.08269ZM8.92006 7.07071H4.70848V12.5797H8.92006V7.07071ZM19.2993 7.07071H15.0478V12.5797H19.2993V7.07071ZM14.2494 7.07071H9.71846V12.5797H14.2494V7.07071ZM5.65447 8.08082C5.72881 8.08082 5.78909 8.14068 5.78909 8.21509V8.33341C5.99122 8.18444 6.24917 8.08143 6.57633 8.0815C6.80822 8.0815 7.07504 8.13327 7.38132 8.25721C7.46811 8.2922 7.54803 8.30627 7.62017 8.30627C7.78311 8.30627 7.90728 8.23497 7.9846 8.1726C7.98561 8.17159 7.98708 8.17023 7.98814 8.16951C7.98868 8.16902 7.98868 8.16902 7.98915 8.16857C8.01406 8.14874 8.04401 8.13897 8.07382 8.13897C8.10521 8.13897 8.13652 8.14977 8.16162 8.17117C8.16319 8.17298 8.165 8.17427 8.16678 8.17659L8.17493 8.1846L8.44001 8.46559L8.44165 8.46784C8.44259 8.4689 8.44397 8.46988 8.44482 8.47131C8.49059 8.52316 8.48984 8.60074 8.44257 8.65092C8.44163 8.65216 8.44083 8.65302 8.43957 8.65445C8.43856 8.6552 8.43725 8.6567 8.43633 8.65762C8.43584 8.65797 8.43528 8.65851 8.4349 8.65879C8.27218 8.8236 8.01722 9.10448 7.7806 9.4543C7.46131 9.9933 7.27791 10.6222 7.27791 11.2926C7.27791 11.3076 7.27819 11.3276 7.27857 11.348L7.27875 11.3583C7.2796 11.3991 7.2807 11.4384 7.2807 11.4394C7.2807 11.5138 7.22054 11.5737 7.1464 11.5739H6.0702C6.00047 11.5739 5.94289 11.5209 5.93604 11.4524C5.93604 11.4507 5.93567 11.4484 5.93567 11.4467V11.4395C5.93297 11.3902 5.93183 11.3406 5.93183 11.2926C5.93183 10.3392 6.42858 9.50167 7.17826 9.02432C7.16586 9.02561 7.15285 9.02624 7.13928 9.02624C6.95084 9.02624 6.64636 8.90676 6.37055 8.90676C6.13306 8.90676 5.91683 8.9954 5.81459 9.32535C5.81384 9.32739 5.81335 9.33032 5.81248 9.33255V9.33337C5.79361 9.38746 5.74287 9.42426 5.6851 9.42426H5.2509C5.17681 9.42426 5.1162 9.36421 5.1162 9.28991V8.21514C5.1162 8.14073 5.17679 8.08087 5.2509 8.08087H5.65449L5.65447 8.08082ZM10.8441 8.08082C10.9184 8.08082 10.9787 8.14068 10.9787 8.21509V8.33341C11.1808 8.18444 11.4388 8.08143 11.766 8.0815C11.9978 8.0815 12.2647 8.13327 12.5709 8.25721C12.6577 8.2922 12.7377 8.30627 12.8098 8.30627C12.9727 8.30627 13.0969 8.23497 13.1742 8.1726C13.1752 8.17159 13.1767 8.17023 13.1778 8.16951C13.1783 8.16902 13.1783 8.16902 13.1788 8.16857C13.2037 8.14874 13.2336 8.13897 13.2634 8.13897C13.2948 8.13897 13.3261 8.14977 13.3512 8.17117C13.3528 8.17298 13.3546 8.17427 13.3564 8.17659L13.3646 8.1846L13.6296 8.46559L13.6313 8.46784C13.6322 8.4689 13.6336 8.46988 13.6344 8.47131C13.6802 8.52316 13.6795 8.60074 13.6322 8.65092C13.6313 8.65216 13.6305 8.65302 13.6292 8.65445C13.6282 8.6552 13.6269 8.6567 13.626 8.65762C13.6255 8.65797 13.6249 8.65851 13.6245 8.65879C13.4618 8.8236 13.2068 9.10448 12.9702 9.4543C12.6509 9.9933 12.4675 10.6222 12.4675 11.2926C12.4675 11.3076 12.4678 11.3276 12.4682 11.348L12.4684 11.3583C12.4692 11.3991 12.4703 11.4384 12.4703 11.4394C12.4703 11.5138 12.4102 11.5737 12.336 11.5739H11.2598C11.1901 11.5739 11.1325 11.5209 11.1257 11.4524C11.1257 11.4507 11.1253 11.4484 11.1253 11.4467V11.4395C11.1226 11.3902 11.1215 11.3406 11.1215 11.2926C11.1215 10.3392 11.6182 9.50167 12.3679 9.02432C12.3555 9.02561 12.3425 9.02624 12.3289 9.02624C12.1405 9.02624 11.836 8.90676 11.5602 8.90676C11.3227 8.90676 11.1065 8.9954 11.0042 9.32535C11.0035 9.32739 11.003 9.33032 11.0021 9.33255V9.33337C10.9832 9.38746 10.9325 9.42426 10.8747 9.42426H10.4405C10.3664 9.42426 10.3058 9.36421 10.3058 9.28991V8.21514C10.3058 8.14073 10.3664 8.08087 10.4405 8.08087H10.8441L10.8441 8.08082ZM16.0337 8.08082C16.108 8.08082 16.1683 8.14068 16.1683 8.21509V8.33341C16.3704 8.18444 16.6284 8.08143 16.9556 8.0815C17.1874 8.0815 17.4543 8.13327 17.7605 8.25721C17.8473 8.2922 17.9273 8.30627 17.9994 8.30627C18.1623 8.30627 18.2865 8.23497 18.3638 8.1726C18.3648 8.17159 18.3663 8.17023 18.3674 8.16951C18.3679 8.16902 18.3679 8.16902 18.3684 8.16857C18.3933 8.14874 18.4232 8.13897 18.4531 8.13897C18.4844 8.13897 18.5157 8.14977 18.5408 8.17117C18.5424 8.17298 18.5442 8.17427 18.546 8.17659L18.5542 8.1846L18.8192 8.46559L18.8209 8.46784C18.8218 8.4689 18.8232 8.46988 18.824 8.47131C18.8698 8.52316 18.8691 8.60074 18.8218 8.65092C18.8209 8.65216 18.8201 8.65302 18.8188 8.65445C18.8178 8.6552 18.8165 8.6567 18.8156 8.65762C18.8151 8.65797 18.8145 8.65851 18.8141 8.65879C18.6514 8.8236 18.3965 9.10448 18.1598 9.4543C17.8405 9.9933 17.6571 10.6222 17.6571 11.2926C17.6571 11.3076 17.6574 11.3276 17.6578 11.348L17.658 11.3583C17.6588 11.3991 17.6599 11.4384 17.6599 11.4394C17.6599 11.5138 17.5998 11.5737 17.5256 11.5739H16.4494C16.3797 11.5739 16.3221 11.5209 16.3153 11.4524C16.3153 11.4507 16.3149 11.4484 16.3149 11.4467V11.4395C16.3122 11.3902 16.3111 11.3406 16.3111 11.2926C16.3111 10.3392 16.8078 9.50167 17.5575 9.02432C17.5451 9.02561 17.5321 9.02624 17.5185 9.02624C17.3301 9.02624 17.0256 8.90676 16.7498 8.90676C16.5123 8.90676 16.2961 8.9954 16.1938 9.32535C16.1931 9.32739 16.1926 9.33032 16.1917 9.33255V9.33337C16.1728 9.38746 16.1221 9.42426 16.0643 9.42426H15.6301C15.556 9.42426 15.4954 9.36421 15.4954 9.28991V8.21514C15.4954 8.14073 15.556 8.08087 15.6301 8.08087H16.0337L16.0337 8.08082Z"
                })
            })
        }),
        Co = o.memo(function() {
            const {
                t: s
            } = p(), {
                lang: n,
                urlPathname: a
            } = V(), t = _(), [i, l] = o.useState(!1), r = $r(), m = F(), c = m.areaCode === "JP" || n === "ja";
            return e.jsxs("div", {
                className: g(Lo, "nav-item-wrap", i && "casino-open"),
                children: [e.jsx(wo, {
                    setOpen: l
                }), e.jsxs("div", {
                    className: g("toggle-tigger nav-item", i && "open-tigger"),
                    onClick: () => {
                        a === "/casino" ? l(!i) : t("/casino")
                    },
                    children: [e.jsx("div", {
                        className: "nav-item-left",
                        children: e.jsx(u, {
                            name: "Casino"
                        })
                    }), e.jsxs("div", {
                        className: "nav-item-right",
                        children: [e.jsx("span", {
                            children: s("Casino")
                        }), e.jsx("div", {
                            className: "hover-wrap",
                            onClick: d => {
                                d.stopPropagation(), l(!i)
                            },
                            children: e.jsx(u, {
                                name: "Arrow"
                            })
                        })]
                    })]
                }), e.jsx(Ys, {
                    visible: i,
                    children: e.jsx("div", {
                        className: "casino-sub-navs",
                        children: r.map((d, h) => {
                            const x = "casino-navitem-" + h,
                                b = d.needLogin && !m.login;
                            return d.label === "line" ? e.jsx("div", {
                                className: "line"
                            }, x) : d.navgmae ? e.jsx(o.Suspense, {
                                fallback: null,
                                children: e.jsx(qe, {
                                    children: e.jsx(To, {
                                        item: d
                                    })
                                })
                            }, x) : d.autoCategory ? e.jsx(o.Suspense, {
                                fallback: null,
                                children: e.jsx(qe, {
                                    children: e.jsx(co, {})
                                })
                            }, x) : d.gameBonus ? e.jsx(So, {
                                item: d
                            }, x) : d.japarot && !c ? null : e.jsxs(y, {
                                className: g("nav-item", b && "no-link"),
                                href: b ? "" : d.link,
                                onClick: () => {
                                    d.buttonName && W.trackEvent("sidebar_click", {
                                        button_name: d.buttonName
                                    })
                                },
                                children: [e.jsx("div", {
                                    className: "nav-item-left",
                                    children: d.japarot ? e.jsx(yo, {}) : e.jsx(u, {
                                        name: d.icon
                                    })
                                }), e.jsx("div", {
                                    className: "nav-item-right",
                                    children: e.jsx("span", {
                                        children: d.label
                                    })
                                })]
                            }, x)
                        })
                    })
                })]
            })
        }),
        wo = f.memo(function({
            setOpen: s
        }) {
            const {
                urlPathname: n
            } = V();
            return o.useEffect(() => {
                if (n.includes("/game/trade")) s(!1);
                else {
                    const a = ni(n);
                    s(!!a)
                }
            }, [n]), null
        }),
        So = o.memo(function({
            item: s
        }) {
            const n = F(),
                a = Ne();
            return n.login && Object.values(a).find(t => t.bonusAmount.greaterThan(0)) ? e.jsxs(y, {
                className: g("nav-item game-for-bonus"),
                href: s.link,
                onClick: () => {
                    s.buttonName && W.trackEvent("sidebar_click", {
                        button_name: s.buttonName
                    })
                },
                children: [e.jsx("div", {
                    className: "nav-item-left",
                    children: e.jsx(Kt, {})
                }), e.jsx("div", {
                    className: "nav-item-right",
                    children: e.jsx("span", {
                        children: s.label
                    })
                })]
            }) : null
        }),
        To = o.memo(function({
            item: s
        }) {
            const {
                urlPathname: n,
                routeParams: a,
                lang: t
            } = V(), i = n.search("/game/") === 0 ? a.gameUnique : "", l = os().bcBrand.read();
            o.useEffect(() => {
                l && localStorage.setItem("bcBrand", JSON.stringify(l))
            }, []);
            const r = l.pageList.list.findIndex(m => m.gameChannel ? m.gameChannel.gamePath === i : m.gameUnique === i) > 0;
            return Pe(r ? "ingames" : void 0), e.jsxs("div", {
                className: g("game-nav-wrap", r && "auto-show"),
                children: [e.jsxs(y, {
                    className: "nav-item",
                    href: "/casino?tab=brand",
                    children: [e.jsx("div", {
                        className: "nav-item-left",
                        children: e.jsx(u, {
                            name: s.icon
                        })
                    }), e.jsxs("div", {
                        className: "nav-item-right",
                        children: [e.jsx("span", {
                            children: s.label
                        }), e.jsx(u, {
                            name: "Arrow"
                        })]
                    })]
                }), e.jsx("div", {
                    className: "place"
                }), e.jsx("div", {
                    className: "game-list-nav-wrap",
                    children: e.jsx("div", {
                        className: "game-list-shadow-inner",
                        children: e.jsx(Ro, {})
                    })
                })]
            })
        }),
        ct = {
            fastparity: {
                icon: "Parity",
                img: Y.fastparity
            },
            "evo21:blackjack:reyd5odmlwpfzjdw": {
                icon: "BlackJackA",
                img: Y.blackJackAImg
            },
            "evo21:blackjack:reyezjtolwpf37px": {
                icon: "BlackJackB",
                img: Y.blackJackBImg
            },
            "evo21:blackjack:rgea7vnq54ehg2fs": {
                addIcon: e.jsx(mo, {}),
                img: Y.blackJackSpeedImg
            },
            "evo21:blackjack:rgdzue7v4xaga5s5": {
                addIcon: e.jsx(ho, {}),
                img: Y.blackJackVipImg
            },
            "pp23:902a13": {
                addIcon: e.jsx(uo, {}),
                img: Y.blackJackOneImg
            },
            "pp23:424i": {
                addIcon: e.jsx(po, {}),
                img: Y.baccaratSpeedImg
            },
            "CRO12:124": {
                addIcon: e.jsx(ko, {}),
                img: Y.zombies,
                add: !0
            },
            "CRO12:123": {
                addIcon: e.jsx(xo, {}),
                img: Y.johnWild,
                add: !0
            },
            "CRO12:122": {
                addIcon: e.jsx(No, {}),
                img: Y.dragonQuest,
                add: !0
            },
            "CRO12:120": {
                addIcon: e.jsx(go, {}),
                img: Y.deadliestSea,
                add: !0
            },
            "CRO12:111": {
                addIcon: e.jsx(jo, {}),
                img: Y.dragonSlayer,
                add: !0
            },
            "CRO12:121": {
                addIcon: e.jsx(bo, {}),
                img: Y.academy,
                add: !0
            },
            "CRO12:109": {
                addIcon: e.jsx(vo, {}),
                img: Y.doggyMiner,
                add: !0
            },
            "CRO12:110": {
                addIcon: e.jsx(fo, {}),
                img: Y.hunter,
                add: !0
            }
        },
        _o = Object.keys(ct),
        Vo = f.memo(function({
            gameUnique: s,
            iconName: n
        }) {
            if (_o.includes(s)) {
                const i = ct[s];
                return i ? e.jsxs(e.Fragment, {
                    children: [i.icon && e.jsx(u, {
                        name: i.icon,
                        className: "game-icon-svg"
                    }), i.addIcon && i.addIcon, e.jsx("img", {
                        src: i.img,
                        className: g("game-icon-img", i.add && "add-img"),
                        alt: ""
                    })]
                }) : null
            }
            const a = Ad(s),
                t = a === "Default";
            return e.jsxs(e.Fragment, {
                children: [e.jsx(u, {
                    name: t ? "Blackjack" : n,
                    className: "game-icon-svg"
                }), e.jsx("img", {
                    src: t ? Y.blackJack : a,
                    className: "game-icon-img",
                    alt: ""
                })]
            })
        }),
        Ro = f.memo(function() {
            const s = os("bcBrand").pageList.list;
            return e.jsx("div", {
                className: "game-list-wrap hidden-scroll-y",
                children: s.length <= 0 ? e.jsx("div", {
                    className: "e-w",
                    children: e.jsx($e, {})
                }) : s.map((n, a) => {
                    const t = n.gameChannel ? n.gameChannel.gamePath : n.gameUnique,
                        i = Id(Od(t));
                    return t === "crash-trenball" ? null : e.jsxs(y, {
                        className: "game-item",
                        href: `/game/${t}`,
                        children: [e.jsx("div", {
                            className: "game-icon",
                            children: e.jsx(Vo, {
                                gameUnique: t,
                                iconName: i
                            })
                        }), e.jsx("span", {
                            className: "game-name",
                            children: n.fullName
                        })]
                    }, t + a)
                })
            })
        }),
        Lo = "crkvmxc",
        _e = o.memo(function({
            tigger: s,
            navList: n,
            pathnameOpen: a = !1,
            tiggerUrl: t
        }) {
            const i = _(),
                {
                    urlPathname: l
                } = V(),
                [r, m] = o.useState(a);
            return o.useEffect(() => {
                m(a)
            }, [a]), e.jsxs("div", {
                className: g(Fo, "nav-item-wrap", r && "navbox-open"),
                children: [e.jsxs("div", {
                    className: g("toggle-tigger nav-item", r && "open-tigger"),
                    onClick: () => {
                        s.buttonName && W.trackEvent("sidebar_click", {
                            button_name: s.buttonName
                        }), t ? l === t ? m(!r) : i(t) : m(!r)
                    },
                    children: [e.jsx("div", {
                        className: "nav-item-left",
                        children: e.jsx(is, {
                            icon: s.icon,
                            name: s.iconName
                        })
                    }), e.jsxs("div", {
                        className: "nav-item-right",
                        children: [e.jsx("span", {
                            children: s.label
                        }), e.jsx("div", {
                            className: g("arrow-wrap", t && "hover-wrap"),
                            onClick: c => {
                                t && (c.stopPropagation(), m(!r))
                            },
                            children: e.jsx(u, {
                                name: "Arrow"
                            })
                        })]
                    })]
                }), e.jsx(Ys, {
                    visible: r,
                    children: e.jsx("div", {
                        className: "sports-sub-navs",
                        children: n.map((c, d) => {
                            const h = "sports-navitem-" + d;
                            return e.jsxs(y, {
                                className: "nav-item",
                                href: c.link,
                                onClick: () => {
                                    c.buttonName && W.trackEvent("sidebar_click", {
                                        button_name: c.buttonName
                                    })
                                },
                                children: [e.jsx("div", {
                                    className: "nav-item-left",
                                    children: e.jsx(is, {
                                        icon: c.icon,
                                        name: c.iconName
                                    })
                                }), e.jsx("div", {
                                    className: "nav-item-right",
                                    children: e.jsxs("span", {
                                        children: [c.label, c.buttonName === "MyBets" && e.jsx("div", {
                                            className: "notice-dot",
                                            children: e.jsx(de.Target, {
                                                id: "lottery-notice-enter"
                                            })
                                        })]
                                    })
                                })]
                            }, h)
                        })
                    })
                })]
            })
        }),
        Fo = "o1wxbtua",
        Eo = f.memo(function() {
            const {
                t: s
            } = p(), {
                urlPathname: n
            } = V(), a = Yr();
            return e.jsx(_e, {
                tigger: {
                    label: s("Sports"),
                    icon: "Sports"
                },
                navList: a,
                tiggerUrl: "/sports",
                pathnameOpen: n.startsWith("/sports")
            })
        }),
        Uo = f.memo(function() {
            const {
                login: s
            } = F(), {
                t: n
            } = p(), {
                urlPathname: a
            } = V(), t = no(), i = s ? t : t.filter(l => !l.isLoginShow);
            return e.jsx(_e, {
                tigger: {
                    label: n("Lottery"),
                    icon: "Lottery"
                },
                tiggerUrl: "/lottery",
                navList: i,
                pathnameOpen: a.startsWith("/lottery")
            })
        });
    f.memo(function() {
        const {
            t: s
        } = p(), {
            urlPathname: n
        } = V(), a = Qr();
        return e.jsx(_e, {
            tigger: {
                label: s("Racing"),
                icon: "AFA",
                iconName: "RacingIcon"
            },
            tiggerUrl: "/racing",
            navList: a,
            pathnameOpen: n.startsWith("/racing")
        })
    }), f.memo(function() {
        const {
            t: s
        } = p(), {
            urlPathname: n
        } = V(), a = lt();
        return e.jsx(_e, {
            tigger: {
                label: s("Promotions"),
                icon: "Promotion"
            },
            tiggerUrl: "/promotion",
            navList: a,
            pathnameOpen: n.startsWith("/promotion")
        })
    }), f.memo(function() {
        const {
            t: s
        } = p(), n = qr();
        return e.jsx(_e, {
            tigger: {
                label: s("Games"),
                icon: "Casino",
                iconName: "GamesIcon"
            },
            navList: n
        })
    });
    const Mo = f.memo(function({
        link: s,
        label: n,
        buttonName: a,
        icon: t,
        iconName: i
    }) {
        const l = s === "/lottery";
        return e.jsx("div", {
            className: "nav-item-wrap",
            children: e.jsxs(y, {
                className: "nav-item",
                href: s,
                onClick: () => {
                    W.trackEvent("sidebar_click", {
                        button_name: a
                    })
                },
                children: [e.jsx("div", {
                    className: "nav-item-left",
                    children: e.jsx(is, {
                        icon: t,
                        name: i
                    })
                }), e.jsxs("div", {
                    className: "nav-item-right",
                    children: [e.jsx("span", {
                        children: n
                    }), l && e.jsx(de.Target, {
                        id: "lottery-notice-enter"
                    })]
                })]
            })
        })
    });
    f.memo(function() {
        const {
            t: s
        } = p();
        return e.jsx(Mo, {
            link: "/bingolist",
            label: s("Bingo"),
            buttonName: "bingo",
            icon: "Bingo2"
        })
    });
    const Ho = f.memo(function() {
            const {
                t: s
            } = p(), {
                urlPathname: n
            } = V(), a = so();
            return e.jsx(_e, {
                tigger: {
                    label: s("Up Down"),
                    icon: "Casino",
                    iconName: "UpDownIcon",
                    buttonName: "trading-up-down"
                },
                tiggerUrl: "/trading/up-down",
                navList: a,
                pathnameOpen: n.startsWith("/trading")
            })
        }),
        Wo = o.memo(function({
            referFn: s,
            rioFn: n
        }) {
            const {
                t: a
            } = p(), t = F(), i = it(), l = eo(), {
                lang: r
            } = V(), m = lt(), c = () => {
                var x;
                (x = Ee) == null || x.openLiveSupport(), W.trackEvent("sidebar_click", {
                    button_name: "live_support"
                })
            }, {
                isKenyaHost: d,
                isUsHost: h
            } = w.getHostType(v.host);
            return e.jsx(e.Fragment, {
                children: e.jsxs("div", {
                    className: g(Ao, "hidden-scroll-y", "unfold-scroll-wrap"),
                    children: [e.jsx(de.Target, {
                        id: "bonus-sidebar-link-enter"
                    }), !d && !h && e.jsx(Ws, {}), t.login ? e.jsxs("div", {
                        className: g("refer-nav", (d || h) && "kenya-refer"),
                        onClick: s,
                        children: [e.jsx("div", {
                            className: "nav-item-left",
                            children: e.jsx("img", {
                                alt: "refer-friend",
                                src: Je.refer
                            })
                        }), e.jsx("div", {
                            className: "nav-item-right",
                            children: e.jsx("span", {
                                children: a("Refer and Earn")
                            })
                        })]
                    }) : null, !d && e.jsx(Co, {}), !h && e.jsx(Eo, {}), !d && !h && e.jsx(Uo, {}), !d && !h && r !== "ja" && e.jsx(Ho, {}), !d && m.map((x, b) => e.jsxs(y, {
                        className: "nav-item nav-item-wrap",
                        href: x.link,
                        onClick: () => {
                            x.buttonName && W.trackEvent("sidebar_click", {
                                button_name: x.buttonName
                            })
                        },
                        children: [e.jsx("div", {
                            className: "nav-item-left",
                            children: e.jsx(u, {
                                name: x.icon
                            })
                        }), e.jsx("div", {
                            className: "nav-item-right",
                            children: e.jsxs("span", {
                                children: [x.label, " "]
                            })
                        })]
                    }, x.icon)), e.jsx("div", {
                        className: "nav-item-wrap list-nav",
                        children: i.map((x, b) => {
                            const j = "nav-item-" + b,
                                N = x.link.indexOf("http") >= 0;
                            return d && x.exclusive ? null : e.jsxs(y, {
                                className: "nav-item",
                                href: x.link,
                                onClick: () => {
                                    x.buttonName && W.trackEvent("sidebar_click", {
                                        button_name: x.buttonName
                                    })
                                },
                                target: N ? "_blank" : "_self",
                                children: [e.jsx("div", {
                                    className: "nav-item-left",
                                    children: x.sportsBettings ? e.jsx(Qs, {}) : e.jsx(u, {
                                        name: x.icon
                                    })
                                }), e.jsxs("div", {
                                    className: "nav-item-right",
                                    children: [x.vipclub ? e.jsxs("span", {
                                        className: "v",
                                        children: [e.jsx("span", {
                                            className: "y",
                                            children: "VIP"
                                        }), a("Club")]
                                    }) : e.jsxs("span", {
                                        children: [x.label, " "]
                                    }), N && e.jsx(u, {
                                        className: "icon-blank",
                                        name: "NewWindow"
                                    })]
                                })]
                            }, j)
                        })
                    }), t.login && e.jsx(tt, {
                        small: !1
                    }), !d && !h && e.jsx(_e, {
                        tigger: {
                            label: a("Sponsorships"),
                            icon: "Sponsorship"
                        },
                        navList: l
                    }), e.jsx("div", {
                        className: "nav-item-wrap support-nav",
                        children: e.jsxs("button", {
                            className: "nav-item",
                            onClick: c,
                            children: [e.jsx("div", {
                                className: "nav-item-left",
                                children: e.jsx(u, {
                                    name: "Support"
                                })
                            }), e.jsx("div", {
                                className: "nav-item-right",
                                children: e.jsx("span", {
                                    children: a("Live Support")
                                })
                            })]
                        })
                    }), e.jsx("div", {
                        className: "theme-nav",
                        children: e.jsx(In, {
                            isBig: !0
                        })
                    })]
                })
            })
        }),
        Ao = "ur7a3n7",
        Io = o.memo(function() {
            const s = _(),
                {
                    width: n
                } = Bm(),
                a = F(),
                [t, i] = o.useState(n < 1300);
            Pe(t ? "side-fold" : "side-unfold");
            const l = o.useCallback(() => {
                    a.login ? s("#/referfriend") : s("#/login")
                }, [a.login]),
                r = () => {
                    s("/events/home")
                },
                m = o.useCallback(() => i(!0), []);
            return e.jsxs(e.Fragment, {
                children: [e.jsx(na, {
                    fold: t,
                    onChange: i,
                    children: t ? e.jsx(ao, {
                        referFn: l,
                        rioFn: r
                    }) : e.jsx(Wo, {
                        referFn: l,
                        rioFn: r
                    })
                }), e.jsx(Zm, {
                    visible: !t && n < 1200,
                    onClick: m
                })]
            })
        }),
        Oo = f.memo(function({
            smallLinks: s,
            closeFn: n
        }) {
            const {
                t: a
            } = p(), {
                urlPathname: t
            } = V(), i = t.startsWith("/sports"), l = t.startsWith("/racing"), r = t.startsWith("/lottery"), m = ni(t), {
                isKenyaHost: c,
                isNgHost: d,
                isIdHost: h
            } = w.getHostType(v.host);
            return c ? e.jsxs("div", {
                className: g(rt, s && "small-links"),
                children: [e.jsxs(y, {
                    className: g("header-link-item sports", i && "active"),
                    href: "/sports",
                    onClick: n,
                    children: [e.jsx("div", {
                        className: "img-wrap",
                        children: e.jsx(u, {
                            name: "Sports"
                        })
                    }), e.jsx("p", {
                        children: a("Sports")
                    })]
                }), e.jsxs(y, {
                    className: g("header-link-item casino", m && "active"),
                    href: "/casino",
                    onClick: n,
                    children: [e.jsx("div", {
                        className: "img-wrap",
                        children: e.jsx(u, {
                            name: "Casino"
                        })
                    }), e.jsx("p", {
                        children: a("Games")
                    })]
                })]
            }) : e.jsxs("div", {
                className: g(rt, s && "small-links"),
                children: [!d && !h && e.jsxs(y, {
                    className: g("header-link-item casino", m && "active"),
                    href: "/casino",
                    onClick: n,
                    children: [e.jsx("div", {
                        className: "img-wrap",
                        children: e.jsx(u, {
                            name: "Casino"
                        })
                    }), e.jsx("p", {
                        children: a("Casino")
                    })]
                }), e.jsxs(y, {
                    className: g("header-link-item sports", i && "active"),
                    href: "/sports",
                    onClick: n,
                    children: [e.jsx("div", {
                        className: "img-wrap",
                        children: e.jsx(u, {
                            name: "Sports"
                        })
                    }), e.jsx("p", {
                        children: a("Sports")
                    })]
                }), e.jsxs(y, {
                    className: g("header-link-item racing", l && "active"),
                    href: "/racing",
                    onClick: n,
                    children: [e.jsx("div", {
                        className: "img-wrap",
                        children: e.jsx(u, {
                            name: "Horse"
                        })
                    }), e.jsx("p", {
                        children: a("Racing")
                    })]
                }), !d && !h && e.jsxs(y, {
                    className: g("header-link-item lottery", r && "active"),
                    href: "/lottery",
                    onClick: n,
                    children: [e.jsx("div", {
                        className: "img-wrap",
                        children: e.jsx(u, {
                            name: "Lottery"
                        })
                    }), e.jsx("p", {
                        children: a("Lottery")
                    })]
                })]
            })
        }),
        rt = "ckw6bhr",
        Bo = o.memo(function({
            noSidebar: s
        }) {
            const n = es(),
                a = le(),
                t = F(),
                i = t.login ? n < 1230 : n < 930,
                l = t.login ? n < 970 : n < 770,
                r = R.assets(`/logo/logo${i?"_small":""}${a?"":"_w"}.png`),
                {
                    isSpreadHost: m,
                    isKenyaHost: c,
                    isUsHost: d
                } = w.getHostType(v.host),
                h = m && !t.login,
                x = !c && !h && !d;
            return e.jsxs("div", {
                className: g(Zo, "left", l && "hide-left"),
                children: [s && e.jsx(y, {
                    href: "/",
                    className: "no-siderbar-logo-link",
                    children: e.jsx("img", {
                        alt: "logo",
                        src: r
                    })
                }), x && e.jsx(Oo, {
                    smallLinks: !1
                })]
            })
        }),
        Zo = "pdptv36",
        ot = o.memo(function() {
            const s = ve(),
                n = v.localCurrencys.find(r => r.value === s.localeCurrencyName) || v.localCurrencys.find(r => r.value === "USDFIAT"),
                {
                    isKenyaHost: a,
                    isNgHost: t,
                    isIdHost: i
                } = w.getHostType(v.host),
                l = t || a || i;
            return e.jsxs("div", {
                className: Po,
                children: [e.jsx("div", {
                    className: "header-language header-lanitem",
                    onClick: () => {
                        R.emit("open-language-fiat", 0)
                    },
                    children: e.jsx(u, {
                        name: "Language"
                    })
                }), s.enableLocaleCurrency && e.jsxs(e.Fragment, {
                    children: [e.jsx("div", {
                        className: "line"
                    }), e.jsx("div", {
                        className: "header-fiat header-lanitem",
                        onClick: () => {
                            R.emit("open-language-fiat", l ? 0 : 1)
                        },
                        children: e.jsx("span", {
                            className: "ttu",
                            children: `${n.cs} ${n.label}`
                        })
                    })]
                })]
            })
        });
    o.memo(function() {
        const {
            lang: s
        } = V(), n = ve(), a = v.localCurrencys.find(c => c.value === n.localeCurrencyName) || v.localCurrencys.find(c => c.value === "USDFIAT"), t = ai(s), {
            isKenyaHost: i,
            isNgHost: l,
            isIdHost: r
        } = w.getHostType(v.host), m = l || i || r;
        return e.jsxs("div", {
            className: Jo,
            children: [e.jsxs("div", {
                className: "side-lanfiat-item",
                onClick: () => {
                    R.emit("open-language-fiat", 0)
                },
                children: [e.jsx("div", {
                    className: "lan-left",
                    children: e.jsx(u, {
                        name: "Language"
                    })
                }), e.jsx("span", {
                    children: Cs[t][0]
                })]
            }), n.enableLocaleCurrency && e.jsxs("div", {
                className: "side-lanfiat-item",
                onClick: () => {
                    R.emit("open-language-fiat", m ? 0 : 1)
                },
                children: [e.jsx("div", {
                    className: "lan-left",
                    children: e.jsx(u, {
                        name: "Interests"
                    })
                }), e.jsx("span", {
                    children: `${a.cs} ${a.label}`
                })]
            })]
        })
    });
    const Po = "h1skgzwz",
        Jo = "so0xecc",
        Go = function() {
            const {
                t: s
            } = p(), n = () => [s("Don't spam, harass or be offensive to other users. Also, avoid using CAPS! No one likes to be screamed at!"), s("Don't beg or ask for loans, rains, tips and doubling coins."), s("No suspicious behavior that can be seen as potential scams."), s("Don't engage in any forms of advertising/ trading/ selling/ buying or offering services."), s("Don't use URL shortener. Always submit the original link."), s("Use the designated language chatrooms accordingly.")].map((a, t) => e.jsxs("p", {
                className: "rule-item",
                children: [e.jsxs("span", {
                    children: [t + 1, ". "]
                }), e.jsx("span", {
                    children: a
                })]
            }, t));
            return e.jsxs("div", {
                className: Xo,
                children: [e.jsx("p", {
                    className: "title",
                    children: e.jsx("span", {
                        children: s("Chat Rules")
                    })
                }), e.jsx(Ze, {
                    onClick: () => js.close()
                }), n(), e.jsx("p", {
                    className: "more-rule",
                    children: s("List of our full rules can be found on our forum.")
                })]
            })
        },
        Xo = "cxv2sus",
        mt = /\@([^\s]*)$/,
        Do = ({
            value: s,
            onChange: n,
            keydownRef: a
        }) => {
            const t = s.match(mt);
            let i, l;
            if (t ? (i = t[1], l = !0) : (i = "", l = !1), !l) return null;
            const r = fs.search(i).slice(0, 50);
            return i != "" && r.push({
                userId: 0,
                name: i,
                nameId: i
            }), e.jsx(Pt, {
                className: Ko,
                keydownRef: a,
                options: r,
                onSelect: m => n(s.replace(mt, `@${m.nameId} `)),
                itemKey: "userId",
                children: m => e.jsx("div", {
                    className: "item",
                    children: m.option.name
                })
            })
        },
        Ko = "u1o5ipd7",
        zo = /^\/[^\s]+$|^\/$/,
        qo = /^\/([^\s]+)[\s]?(.*)/,
        $o = ({
            value: s,
            onChange: n,
            keydownRef: a
        }) => {
            const {
                t
            } = p(), i = Jm(), l = ge();
            let r = o.useRef(null),
                m = s.match(qo),
                c = "",
                d = "",
                h = [],
                x = zo.test(s);
            m && (c = m[1].toLowerCase(), d = m[2]), o.useEffect(() => {
                Qo(Se, t), i()
            }, []), h = o.useMemo(() => {
                const j = [...Se.commands];
                return l.canPinAndUnpin || j.splice(5, 1), j.filter(N => N.key.indexOf(c) == 0)
            }, [s, l.canPinAndUnpin]);
            const b = j => {
                let N;
                j.complete ? N = `/${j.complete}` : N = `/${j.key} `, n(N)
            };
            return a.current = j => {
                let N = r.current ? r.current(j) : !1;
                if (j == 13) {
                    if (x) return !0;
                    if (m) {
                        const L = Se.commands.find(S => S.key == c);
                        return L ? L.key === "pinmsg" ? void 0 : (L.handler(d), n(""), !0) : (n(""), !0)
                    }
                }
                return N
            }, x ? e.jsx(Pt, {
                className: s1,
                keydownRef: r,
                options: h,
                onSelect: b,
                children: j => e.jsx("div", {
                    className: "item",
                    children: j.option.label
                })
            }) : null
        },
        We = ({
            icon: s,
            command: n,
            desc: a
        }) => e.jsxs("div", {
            className: `chat-command-label ${e1}`,
            children: [e.jsx("img", {
                src: s,
                alt: "",
                className: "label-img"
            }), e.jsx("span", {
                className: "label-txt",
                children: n
            }), e.jsx("span", {
                className: "label-desc",
                children: a
            })]
        });

    function dt(s) {
        const n = s.match(/\@(.+?)(\s|$)/);
        if (n) return fs.findByKey(n[1])
    }

    function Yo(s) {
        const {
            t: n
        } = p(), a = `${s.stringAmount} ${s.locked?n("Locked")+" ":""}${Be.getAlias(s.currencyName)}`;
        return e.jsx("div", {
            children: e.jsxs(xe, {
                i18nKey: "public.chat.bonuslink.code.desc",
                amountInfo: a,
                children: ["You have got ", e.jsx("span", {
                    className: "cl-primary",
                    children: {
                        amountInfo: a
                    }
                }), " from Coco's cave."]
            })
        })
    }
    const Qo = Pm((s, n) => {
            s.addCommand({
                key: "coindrop",
                label: e.jsx(We, {
                    icon: ye.coindrop,
                    command: "/Coindrop",
                    desc: n("Tip group")
                }),
                handler: () => {
                    R.unsafeNavigate("#/user/coindrop_send/")
                }
            }), s.addCommand({
                key: "user",
                label: e.jsx(We, {
                    icon: ye.user,
                    command: "/User",
                    desc: n("@User view user")
                }),
                handler: a => {
                    const t = dt(a);
                    t && R.unsafeNavigate(`#/user/profile/${t.userId}`)
                },
                complete: "user @"
            }), s.addCommand({
                key: "tip",
                label: e.jsx(We, {
                    icon: ye.tip,
                    command: "/Tip",
                    desc: n("@User tip user")
                }),
                handler: a => {
                    const t = dt(a);
                    t && R.unsafeNavigate(`#/tip/${t.userId}/${t.name}`)
                },
                complete: "tip @"
            }), s.addCommand({
                key: "rain",
                label: e.jsx(We, {
                    icon: ye.rain,
                    command: "/Rain",
                    desc: n("Make it rain")
                }),
                handler: a => {
                    R.unsafeNavigate("#/user/rain")
                }
            }), s.addCommand({
                key: "shitcode",
                label: e.jsx(We, {
                    icon: ye.shitcode,
                    command: "/ShitCode",
                    desc: n("Redeem your bonus code")
                }),
                handler: async a => {
                    if (await gs.waitLogin(), !a) return R.unsafeNavigate("#/sweetcodes"), !1;
                    ae.post("/activity/redeemCode/useCode/", {
                        redeemCode: a
                    }).then(t => {
                        ee(e.jsx(Yo, H({}, t)), {
                            title: n("The bonus code worked!"),
                            duration: 0
                        })
                    }).catch(ee)
                }
            }), s.addCommand({
                key: "pinmsg",
                label: e.jsx(We, {
                    icon: ye.pin,
                    command: "/PinMsg",
                    desc: n("Pin your message")
                }),
                handler: a => {}
            })
        }),
        e1 = "cz94sta",
        s1 = "c1neid43",
        n1 = () => si.get("https://api.giphy.com/v1/gifs/trending?api_key=Q2bmjUvDsLEVLUEz8PpUq15t4u3U8yBC&limit=42").then(s => s.data.data),
        a1 = ({
            onChange: s
        }) => {
            const n = Wt(async () => {
                const a = await n1();
                return e.jsx(q, {
                    className: l1,
                    children: a.map((t, i) => e.jsx("div", {
                        className: "gift-item",
                        onClick: () => s(t.id),
                        children: e.jsx("img", {
                            className: "gift-img",
                            src: t.images.fixed_height_small.url,
                            alt: ""
                        })
                    }, i))
                })
            });
            return e.jsxs("div", {
                className: "gift-box-wrap",
                children: [n, e.jsx("div", {
                    className: "giphy-copyright"
                })]
            })
        },
        t1 = f.memo(({
            onChange: s,
            className: n
        }) => {
            const [a, t] = o.useState(!1);
            o.useRef(null);
            const i = Oe(() => t(!1));
            let l = a ? "open-gift" : "hide-gift",
                r = n + " " + l;
            return e.jsxs("div", {
                ref: i,
                className: g(i1, r),
                onClick: () => {
                    t(!a)
                },
                children: [a && e.jsx(a1, {
                    onChange: s
                }), e.jsx("button", {
                    className: "gift-btn",
                    onClick: () => {
                        t(!a)
                    },
                    children: e.jsx(u, {
                        name: "GIF"
                    })
                })]
            })
        }),
        i1 = "g1pkpzdg",
        l1 = "sqejf80",
        {
            proxy: c1,
            useProxy: r1
        } = qs;
    class o1 {
        constructor() {
            Mt(this, "state", c1({
                list: [null, null, null],
                inited: !1,
                activeChat: !1,
                activeHome: !1,
                timejb: -1
            }))
        }
        async active() {
            this.state.inited || (await this.getData(), this.state.inited = !0, this.setTime())
        }
        disactive() {
            clearTimeout(this.state.timejb), this.state.inited = !1
        }
        setTime() {
            if (!this.state.inited) return !1;
            clearTimeout(this.state.timejb), this.state.timejb = window.setTimeout(() => {
                this.getData()
            }, 6e4)
        }
        async getData() {
            let n = await ae.post("/game/support/rich-list/get/");
            this.formateList(n), this.setTime()
        }
        formateList(n) {
            this.state.list = n.map(a => {
                let t = a.cpAmount.map(i => {
                    let l = i.amount >= 1e6 ? Math.round(i.amount) : Number(i.amount).toFixed(8).substr(0, 8);
                    return {
                        value: i.currencyName,
                        label: l
                    }
                });
                return {
                    userId: a.userId,
                    userName: a.userName,
                    avatar: a.avatar,
                    level: a.level,
                    likeNumber: a.likeNumber,
                    upAmount: a.upAmount,
                    showProfit: a.showProfit,
                    cpAmount: t
                }
            })
        }
    }
    const fe = new o1;

    function ht() {
        return r1(fe.state)
    }
    const m1 = o.memo(function() {
            const s = ht(),
                [n, a] = o.useState(!1),
                t = Oe(() => {
                    a(!1)
                });
            return o.useEffect(() => {
                n ? (fe.active(), fe.state.activeChat = !0) : (fe.state.activeChat = !1, s.activeHome || fe.disactive())
            }, [n]), e.jsxs("div", {
                className: h1,
                ref: t,
                children: [e.jsx("img", {
                    alt: "rich",
                    className: "rich-img",
                    src: n ? Ue.rich_close : Ue.rich,
                    onClick: () => a(!n)
                }), e.jsx(pe, {
                    children: n && e.jsx($.div, {
                        className: "chat-rich-layer",
                        initial: {
                            y: "-120%",
                            opacity: 0
                        },
                        animate: {
                            y: "-100%",
                            opacity: 1
                        },
                        children: e.jsx(d1, {
                            clseFn: () => a(!1)
                        })
                    })
                })]
            })
        }),
        d1 = o.memo(function({
            clseFn: s
        }) {
            const {
                t: n
            } = p(), a = ht(), t = a.list;
            return o.useEffect(() => (fe.active(), fe.state.activeChat = !0, () => {
                fe.state.activeChat = !1, a.activeHome || fe.disactive()
            }), [a.activeHome]), e.jsx("div", {
                className: "rich-model",
                children: e.jsxs("div", {
                    className: "rich-info",
                    children: [e.jsxs("div", {
                        className: "title",
                        children: [e.jsx("img", {
                            alt: "star",
                            src: Ue.star
                        }), n("BIGGEST WINNER TODAY"), e.jsx("img", {
                            alt: "star",
                            src: Ue.star
                        })]
                    }), e.jsx(Ze, {
                        onClick: s
                    }), e.jsxs("div", {
                        className: "rich-item-wrap",
                        children: [t[0] && e.jsx(Is, {
                            ritem: t[0],
                            rindex: 0
                        }), t[1] && e.jsx(Is, {
                            ritem: t[1],
                            rindex: 1
                        }), t[2] && e.jsx(Is, {
                            ritem: t[2],
                            rindex: 2
                        })]
                    })]
                })
            })
        }),
        Is = o.memo(function({
            ritem: s,
            rindex: n,
            className: a,
            word: t
        }) {
            const {
                t: i
            } = p(), l = Ye();
            return e.jsxs("div", {
                className: `rich-item ${a}`,
                children: [e.jsxs("div", {
                    className: "user-number",
                    children: [e.jsx("img", {
                        src: n === 0 ? Ue.gold : n === 1 ? Ue.silver : Ue.copper,
                        className: "winner-trophy"
                    }), e.jsx(G.UserInfo, {
                        className: "rich-user",
                        userId: s.userId,
                        name: s.userName
                    })]
                }), t && e.jsx("div", {
                    className: "top-winner",
                    children: i("Top Winner")
                }), e.jsx("div", {
                    className: "rich-amount cl-primary",
                    children: l.amount2localStr(new we(s.upAmount))
                })]
            })
        }),
        h1 = "p1a1vamk";

    function Ae(s) {
        return s > 9 ? s : "0" + s
    }
    const u1 = o.memo(function({
            showSend: s,
            ban: n
        }) {
            const {
                t: a
            } = p(), t = ke(), i = F(), [l, r] = o.useState({
                purviewStatus: 2,
                blockType: "",
                blockTime: Date.now()
            }), m = l.blockType === "permanent";
            return o.useEffect(() => {
                i.login && ae.post(`/chat/room/${t.id}/purview/`).then(c => {
                    r(c)
                }).catch(console.log)
            }, [t, i.login, n]), l.purviewStatus === 0 ? e.jsxs("div", {
                className: g(p1, "notranslate", !s && "small", m && "permanent"),
                children: [e.jsx("img", {
                    src: ye.mute,
                    className: "mute-img"
                }), s ? e.jsxs("div", {
                    className: "word-right-wrap notranslate",
                    children: [e.jsx("p", {
                        className: "t",
                        children: a("You have been muted")
                    }), !m && e.jsxs("div", {
                        className: "d",
                        children: [e.jsx("span", {
                            children: a("Due to suspicious behavior, you will be unmuted in:")
                        }), e.jsx($s, {
                            endTime: l.blockTime,
                            onEnd: () => {
                                r(J(H({}, l), {
                                    purviewStatus: 2
                                }))
                            },
                            children: ({
                                days: c,
                                hours: d,
                                minutes: h,
                                seconds: x
                            }) => e.jsxs(e.Fragment, {
                                children: [c > 0 && e.jsxs("span", {
                                    className: "tm f",
                                    children: [c, "d:"]
                                }), e.jsxs("span", {
                                    className: g("tm", c > 0 ? "" : "f"),
                                    children: [Ae(d), "h:"]
                                }), e.jsxs("span", {
                                    className: "tm",
                                    children: [Ae(h), "m:"]
                                }), e.jsxs("span", {
                                    className: "tm",
                                    children: [Ae(x), "s"]
                                })]
                            })
                        })]
                    })]
                }) : e.jsx("p", {
                    className: "tp",
                    children: m ? "" : e.jsx($s, {
                        endTime: l.blockTime,
                        onEnd: () => {
                            r(J(H({}, l), {
                                purviewStatus: 2
                            }))
                        },
                        children: ({
                            days: c,
                            hours: d,
                            minutes: h,
                            seconds: x
                        }) => e.jsxs(e.Fragment, {
                            children: [c > 0 && e.jsxs("span", {
                                className: "tm f",
                                children: [c, "d:"]
                            }), e.jsxs("span", {
                                className: g("tm", c > 0 ? "" : "f"),
                                children: [Ae(d), "h:"]
                            }), e.jsxs("span", {
                                className: "tm",
                                children: [Ae(h), "m:"]
                            }), e.jsxs("span", {
                                className: "tm",
                                children: [Ae(x), "s"]
                            })]
                        })
                    })
                })]
            }) : null
        }),
        p1 = "m1l80al0",
        x1 = f.memo(function({
            pinMag: s,
            canPinAndUnpin: n,
            closeFn: a
        }) {
            const t = le(),
                i = z(),
                {
                    t: l
                } = p(),
                r = o.useRef(null),
                m = ke(),
                c = ge(),
                [d, h] = Qe({
                    showMoreTag: !0,
                    showMore: !1
                }),
                x = o.useMemo(() => k1(s.msgContent), [s]);
            o.useEffect(() => {
                if (r && r.current) {
                    const j = r.current.getBoundingClientRect();
                    j && j.height > 22 ? h({
                        showMoreTag: !0
                    }) : h({
                        showMoreTag: !1
                    })
                }
            }, [s]);
            const b = o.useCallback(() => {
                ae.post(`/chat/room/${m.id}/unpin/`, {
                    msgId: c.pinMsg.msgId,
                    msgContent: c.pinMsg.msgContent
                }).then(j => {
                    m.getPinnedMsg(), i.close()
                }).catch(ee)
            }, [c.pinMsg]);
            return e.jsx("div", {
                className: y1,
                children: e.jsxs("div", {
                    className: "pinmsg-inner",
                    children: [e.jsxs("div", {
                        className: "pin-top",
                        children: [e.jsx("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "15",
                            height: "14",
                            viewBox: "0 0 15 14",
                            fill: "none",
                            children: e.jsx("path", {
                                d: "M13.2094 5.97625C13.1375 6.1479 13.0155 6.29394 12.8595 6.39537C12.7034 6.4968 12.5205 6.54894 12.3344 6.545H11.2538L8.39691 9.38438V10.5C8.39691 10.6218 8.37292 10.7424 8.32631 10.8549C8.2797 10.9675 8.21138 11.0697 8.12525 11.1558C8.03913 11.242 7.93688 11.3103 7.82435 11.3569C7.71182 11.4035 7.59121 11.4275 7.46941 11.4275C7.34747 11.4283 7.22658 11.4048 7.11388 11.3582C7.00118 11.3116 6.89893 11.2429 6.81316 11.1563L5.17254 9.51563L2.11004 12.5781C2.06937 12.6191 2.02098 12.6517 1.96766 12.6739C1.91435 12.6961 1.85717 12.7075 1.79941 12.7075C1.74166 12.7075 1.68447 12.6961 1.63116 12.6739C1.57785 12.6517 1.52946 12.6191 1.48879 12.5781C1.44778 12.5375 1.41523 12.4891 1.39302 12.4358C1.37081 12.3824 1.35938 12.3253 1.35938 12.2675C1.35938 12.2098 1.37081 12.1526 1.39302 12.0993C1.41523 12.0459 1.44778 11.9976 1.48879 11.9569L4.55129 8.89438L2.93254 7.25375C2.80874 7.1235 2.72544 6.96009 2.69278 6.78339C2.66011 6.60668 2.67948 6.42429 2.74853 6.25839C2.81758 6.09249 2.93333 5.95021 3.08173 5.84887C3.23012 5.74752 3.40476 5.69146 3.58441 5.6875H4.69566L7.52191 2.83063V1.72375C7.52051 1.54016 7.57389 1.36031 7.67522 1.2072C7.77656 1.0541 7.92125 0.93469 8.0908 0.86424C8.26035 0.79379 8.44706 0.7755 8.62706 0.811708C8.80705 0.847915 8.97217 0.936975 9.10129 1.0675L12.9994 4.96563C13.1311 5.094 13.2215 5.25879 13.2589 5.43885C13.2963 5.61891 13.2791 5.80604 13.2094 5.97625Z",
                                fill: t ? "white" : "black"
                            })
                        }), e.jsx("span", {
                            children: l("Pinned by")
                        }), e.jsx("span", {
                            className: "name",
                            children: s.userName
                        }), n ? e.jsx("button", {
                            className: "unpin-btn",
                            onClick: () => {
                                i.push(e.jsx(j1, {
                                    unpinFn: b
                                }))
                            },
                            children: l("Unpin")
                        }) : e.jsx(Ze, {
                            className: "close-btn",
                            onClick: () => {
                                i.push(e.jsx(b1, {
                                    closeFn: () => {
                                        a(), i.close()
                                    }
                                }))
                            }
                        })]
                    }), e.jsxs("div", {
                        className: g("pin-msg", d.showMore && "show-more"),
                        children: [e.jsxs("div", {
                            className: "p-msg-wrap",
                            children: [e.jsx("p", {
                                className: "p-msg",
                                ref: r,
                                children: e.jsx(mn, {
                                    msg: x
                                })
                            }), d.showMoreTag && !d.showMore && e.jsx("div", {
                                className: "more-dont",
                                children: "..."
                            })]
                        }), d.showMoreTag && e.jsx("div", {
                            className: "show-more-btn",
                            onClick: () => h({
                                showMore: !d.showMore
                            }),
                            children: e.jsx("button", {
                                children: e.jsx(u, {
                                    name: "Arrow"
                                })
                            })
                        })]
                    })]
                })
            })
        }),
        j1 = f.memo(function({
            unpinFn: s
        }) {
            const {
                t: n
            } = p(), a = z();
            return e.jsx(Le, {
                className: ms,
                closeable: !0,
                children: e.jsxs("div", {
                    className: "common-pinmsg-wrap",
                    children: [e.jsx("h2", {
                        children: n("Unpin Your Message")
                    }), e.jsx("p", {
                        children: n("Are you sure to unpin your message, it will be removed for all users in this channel?")
                    }), e.jsxs("div", {
                        className: "common-pinmsg-btns",
                        children: [e.jsx(T, {
                            className: "cancel-btn",
                            onClick: () => a.close(),
                            children: n("Cancel")
                        }), e.jsx(T, {
                            type: "conic",
                            className: "send-btn",
                            onClick: s,
                            children: n("Unpin")
                        })]
                    })]
                })
            })
        }),
        g1 = f.memo(function({
            sendFn: s
        }) {
            const {
                t: n
            } = p(), a = z();
            return e.jsx(Le, {
                className: ms,
                closeable: !0,
                children: e.jsxs("div", {
                    className: "common-pinmsg-wrap",
                    children: [e.jsx("h2", {
                        children: n("Are you Sure to Pin your Message?")
                    }), e.jsx("p", {
                        children: n("Ensure you review your message thoroughly before sending, as it will be visible to all users in this channel.")
                    }), e.jsxs("div", {
                        className: "common-pinmsg-btns",
                        children: [e.jsx(T, {
                            className: "cancel-btn",
                            onClick: () => a.close(),
                            children: n("Cancel")
                        }), e.jsx(T, {
                            type: "conic",
                            className: "send-btn",
                            onClick: s,
                            children: n("Send")
                        })]
                    })]
                })
            })
        }),
        f1 = f.memo(function() {
            const {
                t: s
            } = p(), n = z();
            return e.jsx(Le, {
                className: ms,
                closeable: !0,
                children: e.jsxs("div", {
                    className: "common-pinmsg-wrap",
                    children: [e.jsx("h2", {
                        children: s("Unable to proceed")
                    }), e.jsx("p", {
                        children: s("You can only send maximum 1 pin message.")
                    }), e.jsx("div", {
                        className: "common-pinmsg-btns",
                        children: e.jsx(T, {
                            type: "conic",
                            className: "understand-btn",
                            onClick: () => n.close(),
                            children: s("Ok, I understand")
                        })
                    })]
                })
            })
        }),
        b1 = f.memo(function({
            closeFn: s
        }) {
            const {
                t: n
            } = p(), a = z();
            return e.jsx(Le, {
                className: ms,
                closeable: !0,
                children: e.jsxs("div", {
                    className: "common-pinmsg-wrap",
                    children: [e.jsx("h2", {
                        children: n("Don\u2019t show again")
                    }), e.jsx("p", {
                        children: n("Message will not be displayed at the top.")
                    }), e.jsxs("div", {
                        className: "common-pinmsg-btns",
                        children: [e.jsx(T, {
                            className: "cancel-btn",
                            onClick: () => a.close(),
                            children: n("Cancel")
                        }), e.jsx(T, {
                            type: "conic",
                            className: "send-btn",
                            onClick: s,
                            children: n("OK")
                        })]
                    })]
                })
            })
        }),
        v1 = /(\[\w+=.+?\])/,
        N1 = /(\[(\w+=.+?)\])/;

    function k1(s) {
        let n = [];
        return Gm(s).split(v1).forEach(a => {
            if (a === "") return;
            let t = a.match(N1);
            if (t) {
                let [i, l] = t[2].split("="), r = l.split(","), m = {
                    type: i,
                    args: r
                };
                n.push(m)
            } else n.push(a)
        }), n
    }
    const y1 = "p1g2hgtd",
        ms = "pe92k2b",
        ut = "/assets/send.58cdb51e.png",
        C1 = f.memo(function() {
            const {
                t: s
            } = p(), n = z(), a = _();
            return e.jsxs(Le, {
                className: pt,
                closeable: !0,
                children: [e.jsx("div", {
                    className: "top-bg"
                }), e.jsx("img", {
                    alt: "send",
                    src: ut,
                    className: "send-img"
                }), e.jsx("p", {
                    className: "error-title",
                    children: s("Unlock Chat Features")
                }), e.jsx("p", {
                    className: "error-desc",
                    children: s("Deposit and bet more to access a wider range of chat functions and contribute to our community's vibrancy.")
                }), e.jsx("div", {
                    className: "btns",
                    children: e.jsx(T, {
                        type: "conic",
                        onClick: () => {
                            n.close(), a("#/deposit")
                        },
                        children: s("Deposit")
                    })
                })]
            })
        }),
        w1 = f.memo(function() {
            const {
                t: s
            } = p(), n = z(), a = vs(), t = _();
            return e.jsxs(Le, {
                className: pt,
                closeable: !0,
                children: [e.jsx("div", {
                    className: "top-bg"
                }), e.jsx("img", {
                    alt: "send",
                    src: ut,
                    className: "send-img"
                }), e.jsx("p", {
                    className: "error-title",
                    children: s("Unlock Chat Features")
                }), e.jsx("p", {
                    className: "error-desc",
                    children: s("You haven't placed any bets yet, start betting now.")
                }), e.jsxs("div", {
                    className: "btns",
                    children: [e.jsxs(T, {
                        type: "conic",
                        onClick: () => {
                            n.close(), a.close(), t("/casino")
                        },
                        children: [e.jsx(u, {
                            name: "Casino"
                        }), e.jsx("span", {
                            children: s("Casino")
                        })]
                    }), e.jsxs(T, {
                        type: "conic",
                        onClick: () => {
                            n.close(), a.close(), t("/sports")
                        },
                        children: [e.jsx(u, {
                            name: "Sports"
                        }), e.jsx("span", {
                            children: s("Sports")
                        })]
                    })]
                })]
            })
        }),
        pt = "cmruhi1",
        ds = 1e3;

    function S1(s, n, a, t) {
        const i = s.slice(0, n),
            l = s.slice(n + a);
        return i + t + l
    }
    const T1 = o.memo(() => {
            const s = ke(),
                n = ge(),
                a = me(),
                t = F(),
                i = _(),
                l = z(),
                r = o.useRef(null),
                {
                    t: m
                } = p(),
                [c, d] = o.useState(""),
                [h, x] = o.useState(!1),
                [b, j] = o.useState(""),
                [N, L] = o.useState(!1),
                S = o.useRef(null),
                C = o.useRef(null),
                A = o.useRef(c);
            A.current = c;
            const re = o.useCallback(() => {
                    L(!0)
                }, []),
                D = o.useCallback(() => {
                    c || L(!1)
                }, []),
                te = Oe(D),
                I = o.useCallback(() => {
                    c.length > ds ? (j(m("Maximum 1000 Characters.")), setTimeout(() => j(""), 5e3)) : (A.current || "").startsWith("/pinmsg") ? n.pinMsg.msgId && n.pinMsg.msgId > 0 ? l.push(e.jsx(f1, {})) : l.push(e.jsx(g1, {
                        sendFn: () => {
                            oe(A.current), l.close()
                        }
                    })) : (oe(A.current), d(""), W.trackEvent("chatroom_message", {
                        chatroom_type: s.name
                    }))
                }, [n.pinMsg]),
                oe = o.useCallback(async k => {
                    if (!t.login) {
                        i("#/login");
                        return
                    }
                    const P = k.startsWith("/pinmsg");
                    try {
                        await s.sendMessage(k), P && (d(""), s.getPinnedMsg())
                    } catch (ie) {
                        const Gs = ie.code === 6001,
                            Ft = ie.code === 7001,
                            ym = ie.code === 7002;
                        Ft ? l.push(e.jsx(C1, {})) : ym ? l.push(e.jsx(w1, {})) : (j(ie.message), Gs ? x(!0) : Ft && setTimeout(() => j(""), 5e3))
                    }
                }, [t.login]);
            o.useEffect(() => {
                const k = r.current;
                c && !a && k && k !== document.activeElement && k.focus()
            }, [c]);
            const be = o.useCallback(k => {
                    const P = S.current,
                        ie = C.current;
                    if (P && P(k) || ie && ie(k)) return !0
                }, []),
                ze = o.useCallback(k => {
                    if (be(k.keyCode)) return k.preventDefault();
                    k.keyCode == 13 && !k.shiftKey && (I(), k.preventDefault())
                }, []),
                ps = o.useCallback(() => {
                    be(13) || I()
                }, []),
                Js = o.useCallback(k => oe(`[gif=${k}]`), []),
                E = o.useMemo(() => Se.rooms.map(k => ({
                    label: k.name,
                    value: k.id
                })), []);
            return s.onAppendMessage = o.useCallback(k => {
                const P = r.current;
                if (!P) return;
                d(Gs => S1(Gs, P.selectionStart, P.selectionEnd - P.selectionStart, k));
                const ie = P.selectionEnd + k.length;
                return setTimeout(() => {
                    P.selectionEnd = ie, P.selectionStart = ie
                }, 10), () => {
                    s.onAppendMessage = () => {}
                }
            }, []), e.jsxs("div", {
                className: _1,
                children: [e.jsxs("div", {
                    className: "send-input",
                    ref: te,
                    children: [e.jsxs(Xm, {
                        ref: r,
                        className: N ? "input-area send" : "input-area",
                        value: c,
                        onKeyDown: ze,
                        onChange: k => {
                            k.length > ds ? j("Maximum 1000 Characters.") : j(""), d(k)
                        },
                        placeholder: m("Your Message"),
                        onFocus: re,
                        maxHeight: 200,
                        children: [e.jsx(t1, {
                            className: "gift-r-wrap",
                            onChange: Js
                        }), e.jsx(Bd, {
                            className: "emoji-r-wrap",
                            onChange: k => {
                                s.onAppendMessage(k + " ")
                            }
                        })]
                    }), b && e.jsx("div", {
                        className: "forbid_tip",
                        children: b
                    }), e.jsx(u1, {
                        ban: h,
                        showSend: N
                    }), c.length > 160 && e.jsxs("div", {
                        className: "long",
                        children: [e.jsx("span", {
                            className: c.length > ds ? "red" : "",
                            children: c.length
                        }), e.jsx("span", {
                            children: "/1000"
                        })]
                    }), e.jsx(pe, {
                        children: N && e.jsx($.div, {
                            className: "send-btn-wrap",
                            initial: {
                                x: "100%",
                                opacity: 0
                            },
                            animate: {
                                x: "0%",
                                opacity: 1
                            },
                            exit: {
                                x: "100%",
                                opacity: 0
                            },
                            children: e.jsx(T, {
                                type: "conic",
                                className: `send-btn ${c&&"send-btn-active"}`,
                                disabled: c.length > ds,
                                onClick: ps,
                                children: e.jsx(u, {
                                    name: "Send"
                                })
                            })
                        })
                    })]
                }), e.jsxs("div", {
                    className: "send-controls",
                    children: [e.jsx(Jt, {
                        value: Se.currentRoom.id,
                        options: E,
                        top: !0,
                        className: "room-select-wrap",
                        renderLabel: k => e.jsx("div", {
                            className: "select-label",
                            children: k.label
                        }),
                        onChange: k => {
                            Se.joinRoom(Se.roomDict[k])
                        }
                    }), e.jsx(y, {
                        className: "chat-icon",
                        href: "#/user/rain",
                        children: e.jsx(u, {
                            name: "Rain"
                        })
                    }), e.jsx("div", {
                        className: "command-btn",
                        onClick: () => d(c === "/" ? "" : "/"),
                        children: e.jsx(u, {
                            name: "Command"
                        })
                    }), e.jsx(y, {
                        className: "chat-icon",
                        href: "#/user/coindrop_send",
                        children: e.jsx(u, {
                            name: "CoinDrop"
                        })
                    }), e.jsx(m1, {})]
                }), e.jsx(Do, {
                    keydownRef: S,
                    value: c,
                    onChange: d
                }), e.jsx($o, {
                    keydownRef: C,
                    value: c,
                    onChange: d
                })]
            })
        }),
        _1 = "c1sv70rd",
        V1 = o.memo(({}) => {
            const s = ke(),
                n = ge(),
                a = n.atList.length > 0 || n.unReadNum >= 3;
            return e.jsxs("div", {
                className: U1,
                children: [n.isLoading ? e.jsx(Ve, {}) : e.jsx(R1, {}), e.jsxs("div", {
                    className: "chat-infos " + (a ? "infos" : ""),
                    children: [e.jsx(F1, {
                        onClick: s.scrollToBottom
                    }), e.jsx(E1, {})]
                }), e.jsx(T1, {})]
            })
        }),
        R1 = o.memo(function() {
            const s = ke(),
                n = ge(),
                a = me(),
                t = o.useRef(null),
                i = o.useRef(!1);
            Re(() => {
                const c = s.virtualRef.current,
                    d = t.current;
                if (c && (c.scrollToIndex(n.chatList.length - 1), setTimeout(() => {
                        c.scrollToIndex(n.chatList.length - 1)
                    }, 30)), d) {
                    const h = x => {
                        const b = d.scrollHeight - (d.scrollTop + d.clientHeight) < 100;
                        i.current = b
                    };
                    return d.addEventListener("scroll", h), () => {
                        d.removeEventListener("scroll", h)
                    }
                }
            }, []);
            const l = o.useCallback(c => {
                if (c.type == 1) {
                    const d = Se.parseDict[c.chat.subType];
                    return d ? e.jsx(d.parser, {
                        data: c
                    }) : e.jsx(L1, {
                        data: c
                    })
                } else return e.jsx(hn, {
                    data: c
                })
            }, []);
            Re(() => {
                i.current && s.scrollToBottom()
            }, [n.chatList]);
            const r = o.useCallback(c => n.chatList[c].id, [n.chatList]),
                m = o.useCallback((c, d) => {
                    s.setReadIndex(d)
                }, []);
            return e.jsx(Dm, {
                ref: t,
                className: `${M1} chat-list`,
                data: n.chatList,
                overscan: 6,
                bodyLock: a,
                renderItem: l,
                keyExtractor: r,
                onRangeChange: m,
                paddingEnd: R.relativePx(10),
                virtualRef: s.virtualRef
            })
        }),
        L1 = Ts(({
            data: s
        }) => e.jsxs(ss, {
            className: H1,
            children: ["Unknown type ", s.chat.subType]
        })),
        F1 = o.memo(({
            onClick: s
        }) => {
            const n = ge();
            return n.unReadNum < 3 ? null : e.jsx("div", {
                onClick: s,
                className: "unreads",
                children: e.jsx("span", {
                    children: n.unReadNum
                })
            })
        }),
        E1 = o.memo(() => {
            const s = ke(),
                n = ge().atList.length;
            return n == 0 ? null : e.jsxs("button", {
                className: "at-num",
                onClick: () => s.jumpAt(),
                children: [e.jsx(u, {
                    name: "At"
                }), e.jsx("span", {
                    className: "at-red-num",
                    children: n
                })]
            })
        }),
        U1 = "c4sq9ug",
        M1 = "f18z24c6",
        H1 = "ue3jxc1";

    function W1({
        className: s,
        style: n
    }) {
        const [a, t] = o.useState(!1), i = ke(), l = ge(), r = l.pinMsg, m = r ? r.msgId > 0 : !1;
        o.useEffect(() => {
            const d = r ? `chatroom-${i.id}-close-pinmsg-${r.msgId}` : "";
            if (d) {
                const h = window.localStorage.getItem(d);
                t(!(h && h === "1"))
            } else t(!0)
        }, [r]);
        const c = () => {
            t(!1);
            const d = r ? `chatroom-${i.id}-close-pinmsg-${r.msgId}` : "";
            d && window.localStorage.setItem(d, "1")
        };
        return e.jsxs("div", {
            id: "public-chat",
            style: n,
            className: g(I1, s),
            children: [a && m && r && e.jsx(x1, {
                pinMag: r,
                canPinAndUnpin: l.canPinAndUnpin,
                closeFn: c
            }), e.jsx(V1, {}, i.id)]
        })
    }
    const A1 = f.memo(W1),
        I1 = "c4jfxhs";
    let xt, hs, jt, gt, ft, bt;
    xt = f.memo(function({
        onClose: s
    }) {
        const {
            t: n
        } = p(), a = z();
        return e.jsxs("div", {
            className: bt,
            children: [e.jsx("div", {
                className: "title",
                children: n("Chat")
            }), e.jsx("div", {
                className: "rule-btn",
                onClick: () => a.push(e.jsx(Go, {})),
                children: e.jsx(u, {
                    name: "Inform"
                })
            }), e.jsx("div", {
                className: "close-icon",
                onClick: () => s(),
                children: e.jsx(u, {
                    name: "Close"
                })
            })]
        })
    }), hs = o.memo(function({
        onClose: s
    }) {
        return e.jsxs("div", {
            className: g(gt, "chat-list-wrap"),
            children: [e.jsx(xt, {
                onClose: s
            }), e.jsx("div", {
                className: "scroll-wrap",
                children: e.jsx(A1, {})
            })]
        })
    }), jt = f.memo(function() {
        const s = vs();
        return e.jsx(Ce, {
            className: ft,
            title: "",
            children: e.jsx(hs, {
                onClose: () => s.back()
            })
        })
    }), gt = "cjtiv1", ft = "dda0z6s", bt = "c11z70vm", mi = Object.freeze(Object.defineProperty({
        __proto__: null,
        ChatDialog: jt,
        default: hs
    }, Symbol.toStringTag, {
        value: "Module"
    }));
    const O1 = o.memo(function() {
            const s = ti(),
                n = !!s.chatOrNtice,
                a = o.useRef(!0);
            let t = "";
            return s.chatOrNtice === "chat" && (t = "has-chat"), s.chatOrNtice === "notice" && (t = "has-chat"), Pe(t), o.useEffect(() => {
                if (t) return document.body.classList.add("chat-open"), () => {
                    document.body.classList.remove("chat-open")
                }
            }, [t]), o.useEffect(() => {
                a.current = !1
            }, []), e.jsx(pe, {
                children: n && e.jsx($.div, {
                    className: B1,
                    initial: {
                        translateX: "100%"
                    },
                    animate: {
                        translateX: "0%"
                    },
                    exit: {
                        translateX: "100%"
                    },
                    transition: {
                        duration: a.current ? 0 : .2,
                        ease: "linear"
                    },
                    children: s.chatOrNtice === "chat" ? e.jsx(o.Suspense, {
                        fallback: e.jsx(Ve, {}),
                        children: e.jsx(hs, {
                            onClose: () => s.chatOrNtice = void 0
                        })
                    }) : e.jsx(de.Target, {
                        id: "notice-list-enter"
                    })
                }, s.chatOrNtice)
            })
        }),
        B1 = "c1qbn194",
        Z1 = o.memo(() => {
            const s = ge();
            let n = s.atList.length > 0;
            const a = s.unReadNum;
            return n ? e.jsx("div", {
                className: "chat-badge",
                children: e.jsx(u, {
                    name: "At"
                })
            }) : a > 0 ? e.jsx("div", {
                className: "chat-green-dont"
            }) : null
        }),
        vt = o.memo(function() {
            const s = ti(),
                n = s.chatOrNtice === "chat",
                a = () => {
                    W.trackEvent("upperbar_click", {
                        button_name: "public_chat"
                    }), s.chatOrNtice = n ? void 0 : "chat"
                };
            return e.jsxs(e.Fragment, {
                children: [e.jsx("button", {
                    className: P1,
                    id: "chat",
                    onClick: a,
                    children: e.jsxs("div", {
                        className: `chat-btn ${n?"active":""}`,
                        children: [n && e.jsx(u, {
                            name: "CloseChat"
                        }), !n && e.jsx(u, {
                            name: "Chat"
                        }), e.jsx(Z1, {})]
                    })
                }), e.jsx(Gt, {
                    children: e.jsx(O1, {})
                })]
            })
        }),
        P1 = "c1mqjzsg",
        J1 = o.memo(function() {
            const {
                t: s
            } = p(), n = es(), a = _(), t = Km(), [i, l] = o.useState(!0), r = G1(n), m = F();
            o.useEffect(() => {
                gs.initData.finally(() => t() && l(!1))
            }, []);
            const {
                isSpreadHost: c,
                isKenyaHost: d
            } = w.getHostType(v.host), h = c && !m.login;
            return i ? null : m.login ? e.jsxs("div", {
                className: g(D1, "right", "width-level-" + r),
                children: [e.jsx(Nt, {}), e.jsx(Mn, {}), e.jsxs(Gt, {
                    children: [d && e.jsx(T, {
                        className: "withdraw-button",
                        type: "conic",
                        onClick: () => a("#/brwallet/withdraw"),
                        children: s("Withdraw")
                    }), e.jsx(Ms, {}), !d && e.jsxs(e.Fragment, {
                        children: [e.jsx(de.Target, {
                            id: "notice-enter-pc-header"
                        }), e.jsx(vt, {})]
                    }), e.jsx(de.Target, {
                        id: "pc-user-setting-enter"
                    })]
                }), e.jsx(ot, {})]
            }) : e.jsxs("div", {
                className: "sign-in-up",
                children: [e.jsx(Nt, {}), e.jsx("p", {
                    className: "sign-in",
                    onClick: () => a("#/login"),
                    children: s("Sign in")
                }), e.jsx("div", {
                    className: "sign-up-wrap",
                    children: e.jsx(T, {
                        type: "conic",
                        onClick: () => a("#/login/regist"),
                        children: s("Sign up")
                    })
                }), !h && !d && e.jsx(vt, {}), e.jsx(ot, {})]
            })
        }),
        Nt = f.memo(function() {
            const {
                urlPathname: s
            } = V();
            return s.startsWith("/sports") || s.startsWith("/racing") ? null : e.jsx(Zd, {
                className: X1,
                children: e.jsx("button", {
                    children: e.jsx(u, {
                        name: "Search"
                    })
                })
            })
        });

    function G1(s) {
        return s < 640 ? 4 : s < 760 ? 3 : s < 1e3 ? 2 : s < 1200 ? 1 : 0
    }
    const X1 = "s1o75t0l",
        D1 = "p1ergpk0",
        K1 = o.memo(function({
            noSidebar: s = !1
        }) {
            const n = F(),
                {
                    isSpreadHost: a
                } = w.getHostType(v.host),
                t = a && !n.login;
            return e.jsxs(e.Fragment, {
                children: [e.jsx("div", {
                    className: g(z1, s && "sports-headr", t && "xyz-layout"),
                    id: "header",
                    children: e.jsx("div", {
                        className: "header-wrap",
                        children: e.jsxs("div", {
                            className: "header-inner page-max-width-wrap",
                            children: [e.jsx(Bo, {
                                noSidebar: s
                            }), e.jsx(J1, {})]
                        })
                    })
                }), !s && e.jsx(Io, {})]
            })
        }),
        z1 = "pc0qj6z",
        q1 = o.memo(function({
            noSidebar: s
        }) {
            const n = me(),
                a = ve(),
                {
                    isKenyaHost: t,
                    isNgHost: i,
                    isIdHost: l
                } = w.getHostType(v.host);
            return o.useEffect(() => {
                i ? (a.localeCurrencyName = "NGNFIAT", a.enableLocaleCurrency = !0) : t ? (a.localeCurrencyName = "KESFIAT", a.enableLocaleCurrency = !0) : l && (a.localeCurrencyName = "INRFIAT", a.enableLocaleCurrency = !0)
            }, []), n ? e.jsx(Or, {}) : e.jsx(K1, {
                noSidebar: s
            })
        }),
        kt = f.memo(function({
            label: s
        }) {
            const n = _();
            return e.jsx("button", {
                className: "footer-link-item",
                onClick: () => {
                    n("#/verify_representative")
                },
                children: s
            })
        }),
        $1 = "/assets/tg.0c6fec5e.png",
        Y1 = "/assets/jacko.1179b676.png",
        Q1 = "/assets/jolie.15e70821.jpeg",
        e2 = "/assets/davis.24df5af1.png",
        s2 = "/assets/sam.092a42c9.jpeg";

    function n2() {
        const {
            t: s
        } = p();
        return [
            [{
                name: "Jakco",
                title: s("Business Director"),
                link: "https://t.me/jacko_bcgame",
                img: Y1
            }, {
                name: "Jolie",
                title: s("Influencer Manager"),
                link: "https://t.me/jolie_bcgame",
                img: Q1
            }, {
                name: "Sam",
                title: s("Media Buying Manager"),
                link: "https://t.me/SamShady_BCGAME",
                img: s2
            }, {
                name: "Davis",
                title: s("Affiliate Manager"),
                link: "https://t.me/davis_bcgame",
                img: e2
            }]
        ]
    }
    f.memo(function() {
        const {
            t: s
        } = p(), n = n2();
        return e.jsx("div", {
            className: g(t2, "business-contacts-wrap"),
            children: n.map((a, t) => e.jsx("div", {
                className: "business-list-item",
                children: a.map((i, l) => e.jsxs("a", {
                    href: i.link,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: [e.jsxs("div", {
                        className: "head",
                        children: [e.jsx("img", {
                            alt: "head",
                            src: i.img
                        }), e.jsx("div", {
                            className: "g-dont",
                            children: e.jsx("div", {})
                        })]
                    }), e.jsxs("div", {
                        className: "name-title",
                        children: [e.jsx("p", {
                            className: "name",
                            children: i.name
                        }), e.jsx("p", {
                            className: "title",
                            children: i.title
                        })]
                    }), e.jsx("p", {
                        className: "chatnow",
                        children: s("Chat now")
                    }), e.jsx("img", {
                        alt: "tg",
                        src: $1,
                        className: "tg"
                    })]
                }, "business-link-item-" + l))
            }, "list-item-" + t))
        })
    });
    const a2 = f.memo(function() {
            const {
                t: s
            } = p();
            return e.jsx(Ce, {
                title: "",
                className: i2,
                children: e.jsxs(q, {
                    children: [e.jsx("p", {
                        className: "t-b",
                        children: s("Get In Touch")
                    }), e.jsx("p", {
                        className: "t-m",
                        children: s("Contact us for more information")
                    }), e.jsxs("div", {
                        className: "email-wrap",
                        children: [e.jsx("p", {
                            className: "t-es",
                            children: s("Email us")
                        }), e.jsxs(y, {
                            className: "contacts-link-item",
                            href: "mailto:business@bc.game",
                            target: "_self",
                            children: [e.jsx("p", {
                                className: "l",
                                children: "business@bc.game"
                            }), e.jsx("p", {
                                className: "send-now",
                                children: s("Send now")
                            }), e.jsx(u, {
                                name: "Mail"
                            })]
                        })]
                    })]
                })
            })
        }),
        yt = f.memo(function({
            label: s
        }) {
            return e.jsx("button", {
                className: "footer-link-item",
                onClick: () => Ie.push(e.jsx(a2, {})),
                children: s
            })
        }),
        t2 = "b10r74wi",
        i2 = "b1rsak19",
        Ct = ["stage.bc.game", "bc.game", "bc.ai", "blaze.game", "bc.casino", "hash.game", "bcgame.ph", "bcga.me", "bc.co", "bc.online", "bc.fun", "bc.app", "bcgame.ai", "bcgame.im", "bcgame.top", "bc.me", "rollwithcoco.com", "luckybc888.com", "boost999.com", "gotomoon.app", "bcigra.site", "bcigra.com", "bcstavka.com"],
        l2 = o.memo(function({
            isSmall: s
        }) {
            const {
                t: n
            } = p(), {
                isUsHost: a
            } = w.getHostType(v.host), {
                casinoLinks: t,
                sportsLinks: i,
                promoLinks: l,
                supportLinks: r,
                aboutLinks: m
            } = c2();
            return e.jsxs("div", {
                className: g(m2, "footer-links-wrap", s && "small-links-wrap"),
                children: [e.jsxs("div", {
                    className: "footer-link-wrap",
                    children: [e.jsx("p", {
                        className: "f-t",
                        children: n("Casino")
                    }), e.jsx(Ke, {
                        linkList: t
                    })]
                }), !a && e.jsxs("div", {
                    className: "footer-link-wrap",
                    children: [e.jsx("p", {
                        className: "f-t",
                        children: n("Sports")
                    }), e.jsx(Ke, {
                        linkList: i
                    })]
                }), e.jsxs("div", {
                    className: "footer-link-wrap",
                    children: [e.jsx("p", {
                        className: "f-t",
                        children: n("Promo")
                    }), e.jsx(Ke, {
                        linkList: l
                    })]
                }), e.jsxs("div", {
                    className: "footer-link-wrap",
                    children: [e.jsx("p", {
                        className: "f-t",
                        children: n("Support/Legal")
                    }), e.jsx(Ke, {
                        linkList: r
                    })]
                }), e.jsxs("div", {
                    className: "footer-link-wrap",
                    children: [e.jsx("p", {
                        className: "f-t",
                        children: n("About us")
                    }), e.jsx(Ke, {
                        linkList: m
                    })]
                }), e.jsxs("div", {
                    className: "footer-link-wrap",
                    children: [e.jsx("p", {
                        className: "f-t",
                        children: n("Join our Community")
                    }), e.jsxs("div", {
                        className: "social-links",
                        children: [r2.map(c => e.jsx("a", {
                            className: c.name,
                            href: c.href,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: e.jsx("img", {
                                src: Je[c.name],
                                alt: c.name
                            })
                        }, c.name)), e.jsx("a", {
                            className: "global-tele",
                            href: "/telegram",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: e.jsx("img", {
                                src: Je.global_tele,
                                alt: "global-tele"
                            })
                        })]
                    })]
                })]
            })
        }),
        Ke = f.memo(function({
            linkList: s
        }) {
            const {
                isUsHost: n
            } = w.getHostType(v.host);
            return e.jsx("div", {
                className: "links",
                children: s.map((a, t) => {
                    if (!a || a.spus && n) return null;
                    const i = "link-" + t,
                        l = a.link.indexOf("http") >= 0;
                    return a.live ? e.jsx("button", {
                        className: "footer-link-item",
                        onClick: () => {
                            var r;
                            return (r = Ee) == null ? void 0 : r.openLiveSupport()
                        },
                        children: a.label
                    }, i) : a.verify ? e.jsx(kt, {
                        label: a.label
                    }, i) : a.business ? e.jsx(yt, {
                        label: a.label
                    }, i) : e.jsxs(y, {
                        className: "footer-link-item",
                        href: a.link,
                        title: a.label,
                        target: l ? "_blank" : "_self",
                        children: [e.jsx("span", {
                            children: a.label
                        }), l && e.jsx(o2, {})]
                    }, i)
                })
            })
        });

    function c2() {
        const {
            t: s
        } = p(), {
            lang: n
        } = V(), a = ["bn", "uk", "ru", "pt", "hi"].find(i => n === i), t = Ct.includes(v.host) ? {
            label: s("Important Announcement"),
            link: "/help/announcement"
        } : null;
        return {
            casinoLinks: [{
                label: s("Casino Home"),
                link: "/casino"
            }, {
                label: s("Slots"),
                link: "/gamelist/slots"
            }, {
                label: s("Live Casino"),
                link: "/gamelist/live"
            }, {
                label: s("New Releases"),
                link: "/tagname/new-releases"
            }, {
                label: s("Recommended"),
                link: "/gamelist/home_recommend"
            }, {
                label: s("Table Game"),
                link: "/tagname/table-games"
            }, {
                label: "BlackJack",
                link: "/tagname/blackjack"
            }, {
                label: "Roulette",
                link: "/tagname/roulette"
            }, {
                label: "Baccarat",
                link: "/tagname/baccarat"
            }],
            sportsLinks: [{
                label: s("Sports Home"),
                link: "/sports"
            }, {
                label: s("Live"),
                link: "/sports?bt-path=%2Flive"
            }, {
                label: s("Rules"),
                link: "/help/terms-sports"
            }, {
                label: s("Sport Betting Insights"),
                link: `https://betting.bc.game/${a!=null?a:""}`
            }],
            promoLinks: [{
                label: s("VIP Club"),
                link: "#/vip"
            }, {
                label: s("Affiliate"),
                link: "/affiliate"
            }, {
                label: s("Promotions"),
                link: "/promotion"
            }, {
                label: s("Lottery"),
                link: "/lottery",
                spus: !0
            }, {
                label: s("Refer a friend"),
                link: "#/referfriend"
            }],
            supportLinks: [{
                label: s("Help center"),
                link: "/help"
            }, t, {
                label: s("Gamble Aware"),
                link: "/help/gameble-aware"
            }, {
                label: s("Fairness"),
                link: "/help/provably-fair"
            }, {
                label: s("FAQ"),
                link: "/help/faq"
            }, {
                label: s("Privacy Policy"),
                link: "/help/privacy"
            }, {
                label: s("Terms Of Service"),
                link: "/help/terms-service"
            }, {
                label: s("Law Enforcement"),
                link: "/help/law-enforcement"
            }, {
                label: s("Self-exclusion"),
                link: "/help/self-exclusion"
            }, {
                label: s("AML"),
                link: "/help/aml"
            }, {
                label: s("Design Resources"),
                link: "https://drive.google.com/drive/folders/1Q48CUgrJOAeDGpBqmdHGNwWGxNEdTZzQ"
            }, {
                label: s("APP"),
                link: w.isIos() ? "/app_download" : "/app_download/android"
            }, {
                label: s("Live Support"),
                link: "",
                live: 1
            }],
            aboutLinks: [{
                label: s("News"),
                link: `https://blog.bc.game/${n}/`
            }, {
                label: s("Work with us"),
                link: "https://angel.co/company/bc-game-2"
            }, {
                label: s("Business Contacts"),
                link: "",
                business: !0
            }, {
                label: s("Help Desk"),
                link: `https://help.bc.game/${n==="ja"?"ja":"en"}/`
            }, {
                label: s("Verify Representative"),
                link: "",
                verify: 1
            }]
        }
    }
    const r2 = [{
            href: "https://t.me/bcgamewin",
            name: "telegram"
        }, {
            href: `https://github.com/${v.GITHUB}`,
            name: "github"
        }, {
            href: "https://twitter.com/BCGameOfficial",
            name: "twitter"
        }, {
            href: "https://www.facebook.com/bcgameofficial",
            name: "facebook"
        }, {
            href: "https://discord.gg/xqUMQesZQq",
            name: "discord"
        }, {
            href: "https://bitcointalk.org/index.php?topic=5088875.0",
            name: "bitcoin"
        }, {
            href: "https://instagram.com/bcgamecom",
            name: "instagram"
        }, {
            href: "https://www.reddit.com/r/bcgamecom",
            name: "reddit"
        }],
        o2 = f.memo(function() {
            return e.jsx("svg", {
                className: "hashbet",
                version: "1.1",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 1024 1024",
                children: e.jsx("path", {
                    d: "M365.386 83.556c31.44 0 56.926 25.486 56.926 56.926 0 30.897-24.617 56.046-55.307 56.904l-1.62 0.022h-170.777v629.186h629.186v-170.777c0-30.897 24.617-56.046 55.307-56.904l1.62-0.022c30.897 0 56.045 24.617 56.904 55.307l0.022 1.62v179.768c0 57.258-45.887 103.796-102.894 104.848l-1.968 0.017h-647.16c-57.258 0-103.796-45.887-104.848-102.894l-0.017-1.968v-647.16c0-57.258 45.887-103.796 102.894-104.848l1.968-0.017h179.768zM611.108 84.556l1.62 0.013 227.481 4.701c57.907 1.009 104.028 48.774 103.019 106.677l-1.176 62.495-1.198 54.931-1.442 62.539-0.437 21.864c-0.034 1.776-0.066 3.547-0.094 5.315-0.549 31.434-26.475 56.472-57.909 55.926s-56.472-26.475-55.926-57.909l0.308-16.334 2.11-93 0.246-11.744-360.933 330.867c-23.176 21.246-59.187 19.678-80.428-3.495-20.849-22.748-19.728-57.854 2.233-79.234l1.267-1.193 355.396-325.787-134.861-2.783c-30.889-0.638-55.524-25.77-55.748-56.469l0.013-1.62c0.638-30.889 25.77-55.524 56.469-55.748z"
                })
            })
        }),
        m2 = "f1mx1119",
        d2 = Object.assign({
            "../locales/ar-SA/cryptoonlinecasino.html": () => O(() =>
                import ("./cryptoonlinecasino.14d5f14e.js"), []).then(s => s.default),
            "../locales/bn-BD/cryptoonlinecasino.html": () => O(() =>
                import ("./cryptoonlinecasino.02a23ec9.js"), []).then(s => s.default),
            "../locales/de-DE/cryptoonlinecasino.html": () => O(() =>
                import ("./cryptoonlinecasino.ea53dabc.js"), []).then(s => s.default),
            "../locales/en-US/cryptoonlinecasino.html": () => O(() =>
                import ("./cryptoonlinecasino.bdc09cda.js"), []).then(s => s.default),
            "../locales/es-ES/cryptoonlinecasino.html": () => O(() =>
                import ("./cryptoonlinecasino.e9f4b826.js"), []).then(s => s.default),
            "../locales/fa-IR/cryptoonlinecasino.html": () => O(() =>
                import ("./cryptoonlinecasino.f257d166.js"), []).then(s => s.default),
            "../locales/fi-FI/cryptoonlinecasino.html": () => O(() =>
                import ("./cryptoonlinecasino.e8677e98.js"), []).then(s => s.default),
            "../locales/fil-PH/cryptoonlinecasino.html": () => O(() =>
                import ("./cryptoonlinecasino.3b3b5a0b.js"), []).then(s => s.default),
            "../locales/fr-FR/cryptoonlinecasino.html": () => O(() =>
                import ("./cryptoonlinecasino.5e653c61.js"), []).then(s => s.default),
            "../locales/hi-IN/cryptoonlinecasino.html": () => O(() =>
                import ("./cryptoonlinecasino.cc3cab26.js"), []).then(s => s.default),
            "../locales/id-ID/cryptoonlinecasino.html": () => O(() =>
                import ("./cryptoonlinecasino.d4de941c.js"), []).then(s => s.default),
            "../locales/it-IT/cryptoonlinecasino.html": () => O(() =>
                import ("./cryptoonlinecasino.acb2b6a1.js"), []).then(s => s.default),
            "../locales/ja-JP/cryptoonlinecasino.html": () => O(() =>
                import ("./cryptoonlinecasino.c5deed39.js"), []).then(s => s.default),
            "../locales/ko-KR/cryptoonlinecasino.html": () => O(() =>
                import ("./cryptoonlinecasino.f64c3c45.js"), []).then(s => s.default),
            "../locales/ms-MY/cryptoonlinecasino.html": () => O(() =>
                import ("./cryptoonlinecasino.73f2bbd1.js"), []).then(s => s.default),
            "../locales/my-MM/cryptoonlinecasino.html": () => O(() =>
                import ("./cryptoonlinecasino.bf360e9e.js"), []).then(s => s.default),
            "../locales/pl-PL/cryptoonlinecasino.html": () => O(() =>
                import ("./cryptoonlinecasino.6d89f1f9.js"), []).then(s => s.default),
            "../locales/pt-BR/cryptoonlinecasino.html": () => O(() =>
                import ("./cryptoonlinecasino.1efd8ac4.js"), []).then(s => s.default),
            "../locales/ru-RU/cryptoonlinecasino.html": () => O(() =>
                import ("./cryptoonlinecasino.a3c60d83.js"), []).then(s => s.default),
            "../locales/th-TH/cryptoonlinecasino.html": () => O(() =>
                import ("./cryptoonlinecasino.3f53c823.js"), []).then(s => s.default),
            "../locales/tr-TR/cryptoonlinecasino.html": () => O(() =>
                import ("./cryptoonlinecasino.480ec54a.js"), []).then(s => s.default),
            "../locales/uk-UA/cryptoonlinecasino.html": () => O(() =>
                import ("./cryptoonlinecasino.c15f57f6.js"), []).then(s => s.default),
            "../locales/ur-PK/cryptoonlinecasino.html": () => O(() =>
                import ("./cryptoonlinecasino.d65fa1de.js"), []).then(s => s.default),
            "../locales/vi-VN/cryptoonlinecasino.html": () => O(() =>
                import ("./cryptoonlinecasino.d8e893e0.js"), []).then(s => s.default)
        }),
        U = {};
    [d2].forEach(s => {
        const n = H({}, s);
        for (const a in n) {
            const t = a.match(/locales\/(\S*)\/cryptoonlinecasino/);
            if (t && t.length > 0) {
                const i = t[1];
                U[i] || (U[i] = {}), U[i].cryptoonlinecasino = n[a]
            }
        }
    });
    const Os = {
        en: U["en-US"],
        ar: U["ar-SA"],
        de: U["de-DE"],
        es: U["es-ES"],
        fa: U["fa-IR"],
        fi: U["fi-FI"],
        tl: U["fil-PH"],
        fr: U["fr-FR"],
        hi: U["hi-IN"],
        id: U["id-ID"],
        it: U["it-IT"],
        ja: U["ja-JP"],
        ko: U["ko-KR"],
        ms: U["ms-MY"],
        my: U["my-MM"],
        pl: U["pl-PL"],
        pt: U["pt-BR"],
        ru: U["ru-RU"],
        th: U["th-TH"],
        tr: U["tr-TR"],
        vi: U["vi-VN"],
        nl: U["nl-NL"],
        ur: U["ur-PK"],
        uk: U["uk-UA"],
        bn: U["bn-BD"]
    };

    function h2({
        html: s
    }) {
        const {
            t: n
        } = p();
        return e.jsx(Ce, {
            className: j2,
            title: n("Details"),
            children: e.jsx(q, {
                children: e.jsx("div", {
                    dangerouslySetInnerHTML: {
                        __html: s
                    }
                })
            })
        })
    }

    function u2({
        html: s,
        isSmall: n
    }) {
        const {
            t: a
        } = p(), t = vs(), i = () => {
            t.push(e.jsx(h2, {
                html: s
            }))
        };
        return e.jsx("div", {
            className: g(x2, "home-text-wrap", n && "small-text-wrap"),
            children: e.jsxs("div", {
                className: "center-box",
                children: [e.jsx("div", {
                    dangerouslySetInnerHTML: {
                        __html: s
                    },
                    className: "crypto-text"
                }), e.jsx("div", {
                    className: "btn-more",
                    children: e.jsxs("span", {
                        className: "cl-primary",
                        onClick: i,
                        children: [a("Show more"), " >>"]
                    })
                })]
            })
        })
    }
    const p2 = o.memo(function({
            isSmall: s
        }) {
            const {
                urlPathname: n,
                lang: a
            } = V(), t = "cryptoonlinecasino", [i, l] = o.useState("");
            return o.useEffect(() => {
                const r = Os[a],
                    m = r || Os.en,
                    c = m[t] ? m[t] : Os.en[t];
                typeof c == "function" ? c().then(d => {
                    l(d)
                }).catch(console.error) : l(c)
            }, [a, n]), i ? e.jsx(u2, {
                isSmall: s,
                html: i
            }) : null
        }),
        x2 = "h1ux4v4o",
        j2 = "d10zc69e",
        g2 = f.memo(function({
            isSmall: s
        }) {
            const {
                t: n
            } = p(), [a, t] = o.useState(""), i = () => {
                !a || a === "" || ae.post("/user/feedback/leave/", {
                    content: a
                }).then(l => {
                    t(""), ee(n("Success") + "!")
                }).catch(ee)
            };
            return e.jsx("div", {
                className: g(f2, "helpus-wrap", s && "small-helpus-wrap"),
                children: e.jsxs("div", {
                    className: "helpus-inner",
                    children: [e.jsxs("div", {
                        className: "help-us-infos",
                        children: [e.jsx("h2", {
                            className: "tit",
                            children: n("Help Us Improve Your Experience")
                        }), e.jsx("textarea", {
                            placeholder: n("Found a bug or have any recommendations? Please leave your message here"),
                            name: "",
                            id: "",
                            cols: 30,
                            rows: 10,
                            value: a,
                            onChange: l => t(l.target.value)
                        }), e.jsxs("div", {
                            className: "send-wrap",
                            children: [e.jsx(T, {
                                type: "conic",
                                onClick: i,
                                children: n("Leave a Message")
                            }), e.jsx("div", {
                                className: "message",
                                children: e.jsx("p", {
                                    children: n("Now get rewarded for your valuable feedback.")
                                })
                            })]
                        })]
                    }), e.jsxs("div", {
                        className: "contact",
                        children: [n("Or Email us:"), e.jsx("a", {
                            href: `mailto:${v.FEEDBACK}`,
                            className: "cl-primary",
                            children: v.FEEDBACK
                        })]
                    })]
                })
            })
        }),
        f2 = "sckkbci",
        b2 = f.memo(function({
            isSmall: s
        }) {
            const {
                urlOriginal: n
            } = V(), {
                isNgHost: a,
                isKenyaHost: t,
                isIdHost: i
            } = w.getHostType(v.host);
            return a || i || t || n !== "/" ? null : e.jsx("div", {
                className: g(v2, "footer-crypto-text-wrap", s && "small-crypto-wrap"),
                children: e.jsxs("div", {
                    className: "footer-container page-max-width-wrap",
                    children: [e.jsx(p2, {
                        isSmall: s
                    }), e.jsx(g2, {
                        isSmall: s
                    })]
                })
            })
        }),
        v2 = "s1ggjuy9",
        N2 = "/assets/afa.4900db57.png",
        k2 = "/assets/afa.4900db57.png",
        y2 = "/assets/aware.6334a112.png",
        C2 = "/assets/aware_w.80e66929.png",
        w2 = "/assets/cloudnine.22d04592.png",
        S2 = "/assets/cloudnine_w.f7b7f128.png",
        T2 = "/assets/eighteen.1ff0e7bf.png",
        _2 = "/assets/eighteen_w.6097ab4b.png",
        V2 = "/assets/gamcare.f7764b60.png",
        R2 = "/assets/gamcare_w.c2139cc2.png",
        L2 = "/assets/itech.3eab3608.png",
        F2 = "/assets/itech_w.ffaa4578.png",
        E2 = "/assets/license.d1460593.png",
        U2 = "/assets/license_w.49183d91.png",
        M2 = "/assets/respon.3cbc9f21.png",
        H2 = "/assets/respon_w.38884bf7.png",
        W2 = "/assets/sigma.0a23cc21.png",
        A2 = "/assets/sigma_w.a1f92806.png",
        I2 = "/assets/verify.f2a422bd.png",
        O2 = "/assets/verify_w.a13100a8.png",
        wt = "/assets/gcb.a73cb475.png",
        B2 = "/assets/lcfc.0c80a54c.png",
        K = {
            afa: N2,
            afa_w: k2,
            aware: y2,
            aware_w: C2,
            cloudnine: w2,
            cloudnine_w: S2,
            eighteen: T2,
            eighteen_w: _2,
            gamcare: V2,
            gamcare_w: R2,
            itech: L2,
            itech_w: F2,
            license: E2,
            license_w: U2,
            respon: M2,
            respon_w: H2,
            sigma: W2,
            sigma_w: A2,
            verify: I2,
            verify_w: O2,
            gcb: wt,
            gcb_w: wt,
            lcfc: B2
        },
        Z2 = f.memo(function({
            isSmall: s
        }) {
            const {
                t: n
            } = p(), {
                isUsHost: a
            } = w.getHostType(v.host), t = le(), i = me();
            return e.jsxs("div", {
                className: g(P2, s && "small-partner-wrap", "footer-gaming-wrap"),
                children: [e.jsx("p", {
                    className: "tit",
                    children: n(a ? "Social" : "Sponsorship and Gaming Responsibilities")
                }), e.jsxs("div", {
                    className: "partner-list-wrap",
                    children: [e.jsxs("div", {
                        className: "wrap-one",
                        children: [e.jsx("div", {
                            className: "sigma",
                            children: e.jsx(y, {
                                href: "https://sigma.world/",
                                rel: "noopener noreferrer",
                                target: "_blank",
                                children: e.jsx("img", {
                                    alt: "sigma",
                                    src: t ? K.sigma : K.sigma_w
                                })
                            })
                        }), e.jsx("div", {
                            className: "cloudnine",
                            children: e.jsx(y, {
                                href: "https://cloud9.gg/",
                                rel: "noopener noreferrer",
                                target: "_blank",
                                children: e.jsx("img", {
                                    alt: "cloudnine",
                                    src: t ? K.cloudnine : K.cloudnine_w
                                })
                            })
                        }), e.jsx("div", {
                            className: "afa",
                            children: e.jsx(y, {
                                href: "https://www.afa.com.ar/",
                                rel: "noopener noreferrer",
                                target: "_blank",
                                children: e.jsx("img", {
                                    alt: "afa",
                                    src: t ? K.afa : K.afa_w
                                })
                            })
                        }), !i && e.jsx(St, {})]
                    }), i && e.jsx("div", {
                        className: "wrap-mobile",
                        children: e.jsx(St, {})
                    }), e.jsx("div", {
                        className: "wrap-two",
                        children: e.jsx("div", {
                            className: "eighteen",
                            children: e.jsx(y, {
                                href: "/help/protect-minors",
                                rel: "noopener noreferrer",
                                children: e.jsx("img", {
                                    alt: "eighteen",
                                    src: t ? K.eighteen : K.eighteen_w
                                })
                            })
                        })
                    })]
                })]
            })
        }),
        St = f.memo(function() {
            const s = le(),
                {
                    isUsHost: n
                } = w.getHostType(v.host);
            return e.jsxs(e.Fragment, {
                children: [e.jsx("div", {
                    className: "verify",
                    children: e.jsx(y, {
                        href: "https://cryptogambling.org",
                        rel: "noopener noreferrer",
                        target: "_blank",
                        children: e.jsx("img", {
                            alt: "verify",
                            src: s ? K.verify : K.verify_w
                        })
                    })
                }), e.jsx("div", {
                    className: "itech",
                    children: e.jsx(y, {
                        href: "http://www.itechlabs.com/certificates/BCGame/RNG_Certificate_UK_BCGame_ITL2002455_12Oct20.pdf",
                        rel: "noopener noreferrer",
                        target: "_blank",
                        children: e.jsx("img", {
                            alt: "itech",
                            src: s ? K.itech : K.itech_w
                        })
                    })
                }), !n && e.jsx("div", {
                    className: "respon",
                    children: e.jsx(y, {
                        href: "https://www.responsiblegambling.org/",
                        rel: "noopener noreferrer",
                        target: "_blank",
                        children: e.jsx("img", {
                            alt: "respon",
                            src: s ? K.respon : K.respon_w
                        })
                    })
                })]
            })
        }),
        P2 = "f19tyczm",
        J2 = "/assets/bcbet.753b7ec0.png",
        Bs = {
            "bc.ai": "ZXlKcGRpSTZJbGhTZUZsT1NHTk5hV2QwYjBSVlkzaHZTVVpTVDJjOVBTSXNJblpoYkhWbElqb2ljU3RaTVZsU00waHJia0ZSVUhoaFlqaG1hMUV3WnowOUlpd2liV0ZqSWpvaU16ZGpOVEk0T0dGak1XRmpaREpqWXpObU56ZGxZalV6TmpZd1lXWXpOVFkxWVRNNU9ERmhZelE0WVdRMlpXTTROMk5tTjJJM1lURXpPVFZsTURrNFlpSXNJblJoWnlJNklpSjk=",
            "blaze.game": "ZXlKcGRpSTZJa0k1Y2xsTk1tUnBia3BOVkRKek5qVkZTSFZqWmxFOVBTSXNJblpoYkhWbElqb2lkWEZ6VWxGcVkzaEJNVEJxWjFaaFZ6aFVjbUZKZHowOUlpd2liV0ZqSWpvaU9UYzRZelkzT0Rrd1pXRTFaREZtTXpZeE1EZGxOemhpTUdNeE1UUTJabUppWW1NME5EQXhZMlkyWWpBM09USmtNemRrTW1Wa1l6azVZamd5WmpKbU15SXNJblJoWnlJNklpSjk=",
            "bc.casino": "ZXlKcGRpSTZJa2x1ZEdjMVFuUTFVRzF4VERWUWJYRXpXakZaU0VFOVBTSXNJblpoYkhWbElqb2llV3BKZFhsTlRtTkJXbkZoUWpGUE9IWnZha3hpUVQwOUlpd2liV0ZqSWpvaVltVTNNVEZtTjJRek1qVXhOemt6WldVeFpHWXlNVGxtTURVM1pqSTVNemd3WldGbFpUSmtZamszTWpGa01tSTJORFU0WWpNME9EYzRNMk0zTlRJd05DSXNJblJoWnlJNklpSjk=",
            "hash.game": "ZXlKcGRpSTZJa0p0V213cmRFRlFWVkJRVkhsalkyWkZVVU42TDBFOVBTSXNJblpoYkhWbElqb2lVVlZ3YWl0d1MzQjJUMjVYUjB4Sk9FNUhWSEpwUVQwOUlpd2liV0ZqSWpvaVlqbGlOV0k0WmpBMU9XSmhObUZqTkdZeU1qVmpaR1EyWlRNM09EVXhOV0poT1RoaVkyRTVZbVE0TUdaall6STFOakZsTmpGaE1EbGhNRE5oWVdJd1lpSXNJblJoWnlJNklpSjk=",
            "bcgame.ph": "ZXlKcGRpSTZJbEJHYUZOalFpczFWVEkwTDBSR01saHBSakpXWlVFOVBTSXNJblpoYkhWbElqb2lVbGw0SzA5alZqTnlUMGhwYW5CTWJFUm1RMUpqVVQwOUlpd2liV0ZqSWpvaU9UUmlaRGRrT1RSak1XUm1NbU14WmpFMk5UTTVaakJtTmprMk1qQmhObUV3TldRNVpEa3lObUptT0RFelpHWmtabUprTWpNMU9HUTFZekkyWmpSaFlpSXNJblJoWnlJNklpSjk=",
            "bcga.me": "ZXlKcGRpSTZJbmRSY2xGYVozRnpUaTg1WkhkSVRXbFlOakZaVmtFOVBTSXNJblpoYkhWbElqb2lSVWgxSzI1dWVFOWFhV2cxVFdsRlNXSlNlbWg1ZHowOUlpd2liV0ZqSWpvaVpXWmhNbVppTW1JMFltVmlaVEEyTldabVlqUXdaV1F5WkdVNU5XTTFNV0l3Wm1GalpUazFOR000WXpjMlpEbGhaV05rWVRjek5XUXdOVEUxWm1ZM015SXNJblJoWnlJNklpSjk=",
            "bc.co": "ZXlKcGRpSTZJaTg1VDJzd1NVd3dTR1pNYkdaS01UWlpOWE5JTTJjOVBTSXNJblpoYkhWbElqb2lZMmh0WTA5dVYySm5OMlZVTWpWaFVsYzBXbTFYUVQwOUlpd2liV0ZqSWpvaU1EVmtNVGhoWWpnMU9EVXdNR0l4TmpFNFkyUXlaVEUwWW1ZMFlUUmxNRE5qTXpRd1pEQTVaakF5WW1GaVpUUm1OakEyTTJGbU1UZzFZemt6TlRVd09DSXNJblJoWnlJNklpSjk=",
            "boost999.com": "ZXlKcGRpSTZJbEV5TkVaMmNGbGpObEpNWjFSMk1sSjNRVlpUYUVFOVBTSXNJblpoYkhWbElqb2lVRWhJV21ZdlZrVk1PV05NUjBKMk1sVjRZVGxPWnowOUlpd2liV0ZqSWpvaVptRTNNR1UzTkdJeVpHVXpZalE0TURBME4ySmtOekkxTW1NMFlqRXpObU13WW1VNE5UZzJObVk1TW1VMU1XRmtZMlU0TWpoaE9XWm1abVk0WW1WaE55SXNJblJoWnlJNklpSjk=",
            "gotomoon.app": "ZXlKcGRpSTZJall6TTAxcldGVlNaRVJUU1ZVMlNpOHZaVlprYkdjOVBTSXNJblpoYkhWbElqb2lhSFphZEdNdlVuSTFMMlEwVWxKS1dtTkVVMGxVUVQwOUlpd2liV0ZqSWpvaU16SmhZamxoTURsa09UVXpaV1EzT1dSbFpEVmpPR05qT0RSaU1tTXhZek0zWWpjek1qazNOalZpTUdVMVpETTBOR1psWlRGak5UazBNVFUwTnpBNE55SXNJblJoWnlJNklpSjk=",
            "bcigra.site": "ZXlKcGRpSTZJbTlLVnpCME56STNWVWhOY1c5aldFWnBOVFpSTlVFOVBTSXNJblpoYkhWbElqb2lTWFZqVm5oeU5URTNXbWxEYURKYVRucGFiM0ExUVQwOUlpd2liV0ZqSWpvaU16ZGlaRGcxTUdaaE5tTTNaamRoTjJZM01qWXhOMlJqTUdNeU1qa3hZbU0wTUdRME0yWmpNalJsTVRKaVpqRXlZVE0wTjJRd1pqQTRaR0UxTmpreVpTSXNJblJoWnlJNklpSjk=",
            "bcigra.in": "ZXlKcGRpSTZJbE0zVWk5RFUzSk5UMFI0VlRFdmVGUlNTWEl5UmxFOVBTSXNJblpoYkhWbElqb2lWalJYVmtaaU1WaFJXVlV5UW5sWk4xRTJSVWxXUVQwOUlpd2liV0ZqSWpvaU9Ua3hZVGcwTkRNMVptWmpNMkpoTmpSallURXhPR0V5TkRNMU1HWTFNemMzTURsbU1XUmxNakZrTUdWalpEaGlOMlk1TkRJNE9URmxaalpsTldJM1pDSXNJblJoWnlJNklpSjk=",
            "bcstavka.game": "ZXlKcGRpSTZJbk0xUVVGTU1EQk5hMDlZZEdWTWNucHpRWGx0WlZFOVBTSXNJblpoYkhWbElqb2lUblJIUWtsRmVUUlBTbkJsVlV4RFlXWm5RM2t6UVQwOUlpd2liV0ZqSWpvaU4yVTJNVFZoTURCbU9HVm1OamRqTkRnM05XVmlPVFJpTmprd05UZGpPV0l5TkdReE16STJaR015Wm1GaVlXUXpORGd5T0daalpqUmtObVk1T0RRMlppSXNJblJoWnlJNklpSjk=",
            "bcame.ai": "ZXlKcGRpSTZJbXcyYVhVdmJERk9kamRKUkRGVEwyUk1PREp6Vm1jOVBTSXNJblpoYkhWbElqb2lRMVJhYjFSNFMyaDZOMk5xTUc0NU9UTmtVa0ZhWnowOUlpd2liV0ZqSWpvaVpXWTJPVGc0WkdFellXRTNZMlppWmpGbU5ERXpObUkzWVRFMlpUbGhaamt3TWprNVptVmpNVE0yTWpZeU9UbGhOVGc1WkdFME9XWXhZems0WlRsalpTSXNJblJoWnlJNklpSjk=",
            "bcigra.com": "ZXlKcGRpSTZJbWRsZDFwNFNFMHhTVUY2UkdwMVVTdHNZMGxRZEZFOVBTSXNJblpoYkhWbElqb2lNbU0zU201clJVRkVZbWgyV1dsS1pFUnRXbk42VVQwOUlpd2liV0ZqSWpvaVpEZGpObUZrWldFek5XTXhaV0U0WldVeE9XVXpOR1JtTm1Jd1pEaG1aR0poWXpFMVpUQTFZamsyTURRME5tRm1aRGt5WXpVeU9XVTRabVl5TW1FeE1pSXNJblJoWnlJNklpSjk=",
            "bcstavka.com": "ZXlKcGRpSTZJblZLVVM5WldWSnBRMWRvUVhkVVdUVXlkMVV4Ym5jOVBTSXNJblpoYkhWbElqb2lkMjVZYjBwaGFsWjBlRkU0TlRneVdFbE9NR2hJUVQwOUlpd2liV0ZqSWpvaU5HRmtOREUyWkRFeU1EWXlaR0l5WW1ZNU1UUmlOemd5WVRVNU1HSmlNVEExWmpOallqUXdNemN3TldJek56WmpabUZpWWpsbVltVmpaVGxrWmpGak9DSXNJblJoWnlJNklpSjk=",
            "bc.online": "ZXlKcGRpSTZJbGx6YkVOSWRsWmFZbGw0V1ZKVU1FNWFUVXNyTVhjOVBTSXNJblpoYkhWbElqb2lUblpUYjFoelRpdHpXV3MxVjBsRmExVjJWMGxxZHowOUlpd2liV0ZqSWpvaU5qRTFNakpoWkdNeE5EbGtaamswTkdJNVpETXdZemMxTURFNVpqVXpNV1E1WXpCaE5qSmxZMkV4WXpWaFpqZGhaREl3WXpFNE9URTNNekl4TkRNMk5DSXNJblJoWnlJNklpSjk=",
            "bc.game": "ZXlKcGRpSTZJbFY1ZUZkWU5FbDRURFJuWkVvMWVGaGpaR2RMUTBFOVBTSXNJblpoYkhWbElqb2lhVVZDTm10RlpHTkxSelY2U21oSVFVaE5kMFJ5VVQwOUlpd2liV0ZqSWpvaVptTXdPVEJoTTJVeU5HWTVOREZoWXpWbE56RTBabUZsTUdOaU5qVXpOemd3WTJVMU5XTXpNVE01TTJNNU9HSXlNREE1WWpFNU1UVmpOamhsT0dabFpTSXNJblJoWnlJNklpSjk=",
            "bc.fun": "ZXlKcGRpSTZJalZPZGk5S2NTdDJhM1pXY21aclNrNTBOMEZLVWtFOVBTSXNJblpoYkhWbElqb2lTM1JaTkRaT1ozRTVZMnRTSzA0MU1uZDFTRXBKWnowOUlpd2liV0ZqSWpvaVlXRTFZelpsWVRJMllXWTNPR1EyTjJFNU16UmtNV00xTnpJNFpHVXdOekJrTXpCaVlUZ3haRFkzWXpreE4yUmtZalV5TXprMFlUVmpNakF4TUdJMFlTSXNJblJoWnlJNklpSjk=",
            "bc.app": "ZXlKcGRpSTZJazVWYzNSM1JHRTJhaTkxUzJRdlNEWnFiV3Q1VldjOVBTSXNJblpoYkhWbElqb2lTblZRWkhWUlIwMW1ha1ExVEhoaFRtVk5ZWGRWVVQwOUlpd2liV0ZqSWpvaVpUY3lNRE5sTWpGbVpEYzJORGRtTlRZMlpHRm1Zek0zWldRellqSTFOMkV5TVRZMFpHVTFOekl4WlRWaVpUWXdPVEExWWprM05UaGtZakZtTkRVeVl5SXNJblJoWnlJNklpSjk=",
            "bcgame.ai": "ZXlKcGRpSTZJak40VW5VMlVFVnhiSGxZTjAxcVdYYzRSV2xXVFVFOVBTSXNJblpoYkhWbElqb2ljMk4xWldSRFpsVklUVkZ5WkdJMlFXUm5USEUyVVQwOUlpd2liV0ZqSWpvaU9ERTFZekV4WVdRek5UTXpNVEprT0dVeU5tVTBabUUwTkRGaE5UVmhOakJrWWpFMlptUXhOelJpTmprell6QTNNVEl5TkdWbE5UZG1aRFpsTlRneFppSXNJblJoWnlJNklpSjk=",
            "bcgame.im": "ZXlKcGRpSTZJbTl2VG1sVmNVMTRRa3N2U0VWcVQxVnRibUpwY1VFOVBTSXNJblpoYkhWbElqb2lXV3BuWmtFMGJrbExUSG9yYnpKT1JEaEdkM1ptZHowOUlpd2liV0ZqSWpvaU1HUTVNRFkyTXpCbU16TXpNV0ptWW1FMk5qTTROMlZqWVdabU56QmtaRGRqWldRNU9HWmhNamN4TURZeE5qVmpaREE0TURCbU5qbGxabU01TmpCa015SXNJblJoWnlJNklpSjk=",
            "bcgame.top": "ZXlKcGRpSTZJbUV3WVc1TVJUQm9jSE5MVUZCUlJuUXlPRXhsTVVFOVBTSXNJblpoYkhWbElqb2laMk4wV2xocVYyWk1hVTF0UlVVdlVISldPSGN3VVQwOUlpd2liV0ZqSWpvaU16SXdOakEzWVRFNE16UmlaVEV6WXprMVpXTTVZMkV4WW1NMVpqRmtOMkV4TnpFeE4yWTNPVGhsT1RNd1pEWXpNRE01TlRsbFpURmxNVEpsTldRM01DSXNJblJoWnlJNklpSjk=",
            "bc.me": "ZXlKcGRpSTZJalJNY2pZeGFsWklTbk5KV21WMk1FOXpkblJPVUZFOVBTSXNJblpoYkhWbElqb2libFl6VFd4UGJFeFNNRVV5UkRaTlZUUjBlbkJTVVQwOUlpd2liV0ZqSWpvaU16YzRPR1EzTURnMFpUUmtaRGxpTnpJNE5XRTJNMlkwWkRVMk1USXlabUkzTWpBM01HRTBOVGhrWmpOaVpEQXdOR1ExWWpsbE9XUmxZemMwWmpBM1pDSXNJblJoWnlJNklpSjk=",
            "rollwithcoco.com": "ZXlKcGRpSTZJalpHY0Rob04zVnhSV1ZaT1ROWEszaGlSa3hCT1djOVBTSXNJblpoYkhWbElqb2lVSEJ1Y1hGYVNuaG5TMVYxUjBWcVRGVTFVMlo2U3paWFZqVTJWVk5xYVdkTU4zZHpkV3RrYlhVd1JUMGlMQ0p0WVdNaU9pSmtNakF3TkRJNFkyWmhNakV4Tm1VME5HTmhOVEUwTjJFMlpHWm1aRFEzTTJZNU9USTRaRFpsTkRaallXVmtObVF6WkROa01tRmxZVEkxTmpjMFlXVTBJaXdpZEdGbklqb2lJbjA9",
            "luckybc888.com": "ZXlKcGRpSTZJbVZyZVVwTFlVa3JNRGN5VmxsU1VWSnhNeXN6TDJjOVBTSXNJblpoYkhWbElqb2lVbTVKV0RSVlNVMURNR1poYVRocE5qYzJiMHR1ZHowOUlpd2liV0ZqSWpvaU5HSTVNV0pqWVRBNFltTm1NR1JqTUdRek56TTNOVEl3TWprMVpHRTVOakU1WVRNM05tRmxaR1F5TURRME1tSTRZVFExWm1VMk1HRTRaVEkxTmprMVlTSXNJblJoWnlJNklpSjk="
        },
        Tt = f.memo(function({
            isSmall: s
        }) {
            const {
                t: n
            } = p(), a = le(), t = v.host, i = v.host, {
                isNgHost: l,
                isNg2Host: r,
                isSpHost: m,
                isSkHost: c,
                isIdHost: d,
                isAnjouanHost: h
            } = w.getHostType(v.host), x = Object.keys(Bs).includes(v.host) || v.isDevHost || v.isDev;
            return e.jsx("div", {
                className: g(D2, "footer-text-wrap", s && "small-text-wrap"),
                children: x ? e.jsx(G2, {}) : m ? e.jsx(X2, {}) : e.jsxs(e.Fragment, {
                    children: [e.jsxs("div", {
                        className: "left-text",
                        children: [e.jsx("img", {
                            alt: "logo",
                            className: "logo",
                            src: R.assets(`/logo/logo_pure${a?"":"_w"}.png`)
                        }), !l && !d && e.jsx("p", {
                            children: e.jsxs(xe, {
                                host1: t,
                                host2: i,
                                i18nKey: "trans.mainpage.footer.desc1",
                                children: ["A multi-award winning crypto casino. With a player-centric approach,", " ", e.jsx("span", {
                                    children: {
                                        host1: t
                                    }
                                }), " is able to satisfy millions of gamblers across the globe. ", e.jsx("span", {
                                    children: {
                                        host2: i
                                    }
                                }), " has its priority set on its community, ensuring an everlasting and endlessly entertaining gambling experience."]
                            })
                        }), e.jsx("p", {
                            children: e.jsxs(xe, {
                                host1: t,
                                i18nKey: "trans.mainpage.footer.desc.new1",
                                children: ["Your use of and access to ", {
                                    host1: t
                                }, " signifies that you fully understand and agree to be legally bound by the contents of our Terms of Service and Responsible Gaming Policy."]
                            })
                        })]
                    }), e.jsxs("div", {
                        className: "right-text",
                        children: [!c && !l && !d && e.jsxs("div", {
                            className: "licensed-t",
                            children: [!r && !m && !h && e.jsx("a", {
                                href: "https://knoxxit2.sharepoint.com/:b:/s/CIL-Validations/ES3IKThD11JIp7Nt65rIIskBqDKJPUz4cK23-a6gV7UwFQ?e=geGYID",
                                target: "_blank",
                                className: "license",
                                children: e.jsx("img", {
                                    alt: "license",
                                    src: a ? K.license : K.license_w
                                })
                            }), e.jsx("p", {
                                children: r ? n("{{host}} is operated by BLOCKDANCE AFRICA LTD. Company Registration Number is 2005793, and company address is NO 29, OLASONDE STREET, PAPA AJAO, MUSHIN, LAGOS STATE, NIGERIA.", {
                                    host: v.host
                                }) : h ? n("BCKM.TOP is operated by Twocent Technologies Limited, a limited liability company registered in Belize with company registration number 000041939, with registered address at Sea Urchin Street, San Pedro, Ambergris Caye, Belize, licensed in the State of Anjouan under the Computer Gaming Licensing Act 007 of 2005.") : n('{{host}} is operated by BlockDance B.V. (Commercial register of Cura\xE7ao no.158182, Emancipatie Boulevard Dominico F. "Don" Martina 31, Cura\xE7ao) under a sublicense CIL pursuant to Master gaming License #5536/JAZ.', {
                                    host: v.host.toUpperCase()
                                })
                            })]
                        }), (l || d) && e.jsxs("div", {
                            className: "licensed-t two",
                            children: [e.jsx("a", {
                                target: "_blank",
                                className: "license",
                                href: "https://nlrc-gov.ng/sports-betting-permit/",
                                children: e.jsx("img", {
                                    alt: "license",
                                    src: J2
                                })
                            }), e.jsx("p", {
                                children: n("{{host}} is operated by BLOCKDANCE AFRICA LIMITED (commercial register 2005793. 26 Olasonde street, Papa Ajao, Mushin, Lagos State) under license number.", {
                                    host: l ? "Bcbet.ng" : "Bcgame.vc"
                                })
                            })]
                        }), e.jsx(Zs, {})]
                    })]
                })
            })
        }),
        G2 = f.memo(function() {
            const {
                t: s
            } = p(), n = le(), a = v.host, t = v.host, i = Bs[v.host] || Bs["bc.game"];
            return e.jsxs(e.Fragment, {
                children: [e.jsxs("div", {
                    className: "left-text",
                    children: [e.jsx("img", {
                        alt: "logo",
                        className: "logo",
                        src: R.assets(`/logo/logo_pure${n?"":"_w"}.png`)
                    }), e.jsx("p", {
                        children: e.jsxs(xe, {
                            host1: a,
                            host2: t,
                            i18nKey: "trans.mainpage.footer.desc1",
                            children: ["A multi-award winning crypto casino. With a player-centric approach,", " ", e.jsx("span", {
                                children: {
                                    host1: a
                                }
                            }), " is able to satisfy millions of gamblers across the globe. ", e.jsx("span", {
                                children: {
                                    host2: t
                                }
                            }), " has its priority set on its community, ensuring an everlasting and endlessly entertaining gambling experience."]
                        })
                    }), e.jsx("p", {
                        children: e.jsxs(xe, {
                            host1: a,
                            i18nKey: "trans.mainpage.footer.desc.new1",
                            children: ["Your use of and access to ", {
                                host1: a
                            }, " signifies that you fully understand and agree to be legally bound by the contents of our Terms of Service and Responsible Gaming Policy."]
                        })
                    }), e.jsx(Zs, {})]
                }), e.jsxs("div", {
                    className: "right-text",
                    children: [e.jsx("p", {
                        children: s("Small House B.V is the operator of the {{host}}\xAE website brand under a non-exclusive license from BlockDance B.V. All payment services related to Small House B.V. are processed by Fenice Tech Limited [HE416055], located at Griva Digeni, 81 Marinos Court, 3rd Floor, Flat/Office 301, 6043 L\xE1rnaka, Republic of Cyprus.", {
                            host: v.host.toUpperCase()
                        })
                    }), e.jsxs("div", {
                        className: "licensed-t",
                        children: [e.jsx("a", {
                            href: `https://cert.gcb.cw/certificate?id=${i}`,
                            target: "_blank",
                            className: "license",
                            children: e.jsx("img", {
                                alt: "license",
                                src: n ? K.gcb : K.gcb_w
                            })
                        }), e.jsx("p", {
                            children: e.jsxs(xe, {
                                children: ["Small House B.V., is licensed and regulated by the Gaming Control Board (GCB) with Licence Number: OGL/2023/118/0060 Issued in 22nd February 2024. Trust Service and Represented by", e.jsx("a", {
                                    href: "https://igagroup.com",
                                    target: "_blank",
                                    style: {
                                        marginLeft: "0.25rem"
                                    },
                                    children: "https://igagroup.com"
                                })]
                            })
                        })]
                    })]
                })]
            })
        }),
        X2 = f.memo(function() {
            const {
                t: s
            } = p(), n = le(), a = v.host;
            return e.jsxs(e.Fragment, {
                children: [e.jsxs("div", {
                    className: "left-text",
                    children: [e.jsx("img", {
                        alt: "logo",
                        className: "logo",
                        src: R.assets(`/logo/logo_pure${n?"":"_w"}.png`)
                    }), e.jsx("p", {
                        children: s("87.com is owned and operated by BlockDance Limitada, registration number 3-102-878354, registered address San Jose-Santa Ana, Doscientos Metros Norte De La Cruz Roja, Plaza Murano, Octavo Piso, Oficina Ochenta Y Dos, Land And Business Attorneys, Costa Rica.")
                    }), e.jsx("p", {
                        children: e.jsxs(xe, {
                            host1: a,
                            i18nKey: "trans.mainpage.footer.desc.new1",
                            children: ["Your use of and access to ", {
                                host1: a
                            }, " signifies that you fully understand and agree to be legally bound by the contents of our Terms of Service and Responsible Gaming Policy."]
                        })
                    })]
                }), e.jsxs("div", {
                    className: "right-text",
                    children: [e.jsx("div", {
                        className: "licensed-t",
                        children: e.jsx("p", {
                            children: s("87.com is a multi-award winning crypto casino. With a player-centric approach, 87.com is able to satisfy millions of gamblers across the globe.87.com has its priority set on its community, ensuring an everlasting and endlessly entertaining gambling experience.")
                        })
                    }), e.jsx(Zs, {})]
                })]
            })
        }),
        Zs = f.memo(function() {
            const {
                t: s
            } = p(), {
                urlPathname: n
            } = V(), {
                isNgHost: a
            } = w.getHostType(v.host), t = v.siteName, i = n === "/wallet/swap", l = Ye(!0);

            function r() {
                const m = {
                    top: document.documentElement.scrollTop || document.body.scrollTop
                };
                Xt.to(m, {
                    top: 0,
                    onUpdate: () => {
                        window.scrollTo(0, m.top)
                    }
                })
            }
            return e.jsxs("div", {
                className: "copyright-top",
                children: [e.jsxs("div", {
                    className: "copyright-info",
                    children: [i && e.jsx("p", {
                        className: "add",
                        children: e.jsxs(xe, {
                            siteName: v.siteName,
                            i18nKey: "trans.mainpage.footer.desc.new3",
                            children: [{
                                siteName: t
                            }, ".swap service is offered by our partner", " ", e.jsx("a", {
                                target: "_blank",
                                rel: "noopener noreferrer",
                                href: "https://cwallet.com/",
                                children: "Cwallet"
                            }), "."]
                        })
                    }), !a && e.jsx("p", {
                        className: "add",
                        children: s("Crypto trading is not gambling by definition, therefore it is not covered by our gaming license.")
                    }), e.jsxs("p", {
                        className: "ttu",
                        children: [s("Copyright"), " \xA9", w.serverTime().getFullYear(), " ", Ct.includes(v.host) ? "BLOCKDANCE B.V." : v.host.toUpperCase(), " ", s("ALL RIGHTS RESERVED")]
                    }), !a && e.jsxs("p", {
                        className: "btc-info",
                        children: ["1BTC=", l.amount2localStr(new we(1), "BTC")]
                    })]
                }), e.jsxs("div", {
                    className: "to-top",
                    onClick: r,
                    children: [e.jsx(u, {
                        name: "Arrow"
                    }), e.jsx("span", {
                        children: s("Top")
                    })]
                })]
            })
        }),
        D2 = "fzoz0z4",
        _t = f.memo(function(t) {
            var i = t,
                {
                    className: s,
                    name: n
                } = i,
                a = Ds(i, ["className", "name"]);
            return e.jsx("div", H({
                className: g(K2, n, `icon-${n}`, s)
            }, a))
        }),
        K2 = "cgapchl",
        z2 = [{
            network: "Bitcoin",
            coin: "BTC"
        }, {
            network: "Ethereum",
            coin: "ETH"
        }, {
            network: "Doge",
            coin: "DOGE"
        }, {
            network: "Ripple",
            coin: "XRP"
        }, {
            network: "Cardano",
            coin: "ADA"
        }, {
            network: "Polkadot",
            coin: "DOT"
        }, {
            network: "Tron",
            coin: "TRX"
        }, {
            network: "BSC",
            coin: "BNB"
        }, {
            network: "Avalanche",
            coin: "AVAX"
        }, {
            network: "Solana",
            coin: "SOL"
        }, {
            network: "Polygon",
            coin: "MATIC"
        }, {
            network: "Arbitrum",
            coin: "ETH"
        }, {
            network: "Optimism",
            coin: "ETH"
        }, {
            network: "Cronos",
            coin: "CRO"
        }, {
            network: "Fantom",
            coin: "FTM"
        }, {
            network: "Thorchain",
            coin: "RUNE"
        }, {
            network: "Cosmos",
            coin: "ATOM"
        }, {
            network: "Near",
            coin: "NEAR"
        }],
        q2 = o.memo(function({
            isSmall: s
        }) {
            const {
                t: n
            } = p();
            return e.jsxs("div", {
                className: g(Y2, "footer-coins-wrap", s && "small-coins-wrap"),
                children: [e.jsx("p", {
                    className: "coins-t",
                    children: n("Accepted Networks")
                }), e.jsx("div", {
                    className: "coins-list",
                    children: z2.map(a => e.jsx($2, {
                        info: a
                    }, a.network))
                })]
            })
        }),
        $2 = o.memo(function({
            info: s
        }) {
            const {
                t: n
            } = p(), a = me(), t = _(), [i, l] = o.useState(0), [r, m] = o.useState({
                top: 0,
                left: 0,
                width: 40
            }), [c, d] = o.useState(!1), h = Oe(() => d(!1)), x = () => {
                if (h && h.current) {
                    const N = h.current.getBoundingClientRect();
                    m({
                        top: N.top - 200,
                        left: N.left,
                        width: N.width
                    })
                }
            };
            o.useEffect(() => {
                const N = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
                l(N)
            }, [a]);
            const b = r.left + r.width / 2 - 140,
                j = b < 8 ? 8 : b + 288 > i ? i - 288 : b;
            return e.jsxs("div", {
                className: "fd-ci",
                onMouseLeave: () => {
                    a || d(!1)
                },
                ref: h,
                onMouseEnter: () => {
                    a || (d(!0), x())
                },
                onClick: () => {
                    a && (d(!c), x())
                },
                children: [e.jsx(_t, {
                    name: s.network,
                    className: "img-fill"
                }), e.jsx(pe, {
                    children: c && e.jsxs($.div, {
                        className: "hover-deposit-wrap",
                        style: {
                            left: j + "px"
                        },
                        initial: {
                            top: (r.top + 12) * .95 + "px"
                        },
                        animate: {
                            top: r.top + 12 + "px"
                        },
                        transition: {
                            ease: "linear"
                        },
                        children: [e.jsxs("div", {
                            className: "name-wrap",
                            children: [e.jsx(_t, {
                                name: s.network,
                                className: "hover-icon"
                            }), e.jsxs("div", {
                                className: "coin-text",
                                children: [e.jsx("p", {
                                    children: s.network
                                }), e.jsx("p", {
                                    children: s.coin
                                })]
                            })]
                        }), e.jsxs("div", {
                            className: "btns-wrap",
                            children: [e.jsx(T, {
                                onClick: () => t(`#/deposit?currency=${s.coin}&network=${s.network}`),
                                type: "conic",
                                children: n("Deposit")
                            }), e.jsx(T, {
                                onClick: () => t(`#/deposit/buy?to_currency=${s.coin}`),
                                type: "conic2",
                                children: n("Buy Crypto")
                            })]
                        })]
                    })
                })]
            })
        }),
        Y2 = "fdn9ps2",
        Q2 = f.memo(function({
            isSmall: s
        }) {
            const {
                t: n
            } = p(), [a, t] = o.useState(""), i = () => {
                !a || a === "" || ae.post("/user/feedback/leave/", {
                    content: a
                }).then(() => {
                    t(""), ee(n("Success") + "!")
                }).catch(ee)
            };
            return e.jsx("div", {
                className: g(em, "footer-crypto-text-wrap", s && "small-crypto-wrap"),
                children: e.jsx("div", {
                    className: "page-max-width-wrap",
                    children: e.jsxs("div", {
                        className: "footer-container",
                        children: [e.jsxs("div", {
                            className: "l",
                            children: [e.jsx("p", {
                                className: "t",
                                children: n("Help Us Improve Your Experience")
                            }), e.jsx("p", {
                                className: "d-1",
                                children: n("If you are experiencing any issues or have any feedback for us, please leave your message here, and our team will work on addressing it.")
                            })]
                        }), e.jsxs("div", {
                            className: "r",
                            children: [e.jsx("textarea", {
                                name: "",
                                id: "",
                                cols: 30,
                                rows: 10,
                                value: a,
                                onChange: l => t(l.target.value),
                                placeholder: n("Found a bug or have any recommendations? Please leave your message here")
                            }), e.jsxs("div", {
                                className: "contact-box",
                                children: [e.jsxs("div", {
                                    className: "contact",
                                    children: [e.jsx("p", {
                                        children: n("Now get rewarded for your valuable feedback.")
                                    }), e.jsx("span", {
                                        children: n("Or Email us:")
                                    }), e.jsx("a", {
                                        href: "mailto:feedback@bcgame.com",
                                        className: "cl-primary",
                                        children: "feedback@bcgame.ke"
                                    })]
                                }), e.jsx(T, {
                                    type: "conic",
                                    onClick: i,
                                    children: n("Leave a Message")
                                })]
                            })]
                        })]
                    })
                })
            })
        }),
        em = "slf2ibj",
        sm = f.memo(function({
            isSmall: s
        }) {
            const {
                t: n
            } = p(), {
                sportsLinks: a,
                promoLinks: t,
                supportLinks: i,
                aboutLinks: l
            } = nm();
            return e.jsxs("div", {
                className: g(tm, "footer-links-wrap", s && "small-links-wrap"),
                children: [e.jsxs("div", {
                    className: "footer-link-wrap",
                    children: [e.jsx("p", {
                        className: "f-t",
                        children: n("Sports")
                    }), e.jsx(Ps, {
                        linkList: a
                    })]
                }), e.jsxs("div", {
                    className: "footer-link-wrap",
                    children: [e.jsx("p", {
                        className: "f-t",
                        children: n("Promo")
                    }), e.jsx(Ps, {
                        linkList: t
                    })]
                }), e.jsxs("div", {
                    className: "footer-link-wrap",
                    children: [e.jsx("p", {
                        className: "f-t",
                        children: n("Support/Legal")
                    }), e.jsx(Ps, {
                        linkList: i
                    })]
                })]
            })
        }),
        Ps = f.memo(function({
            linkList: s
        }) {
            return e.jsx("div", {
                className: "links",
                children: s.map((n, a) => {
                    if (!n) return;
                    const t = "link-" + a,
                        i = n.link.indexOf("http") >= 0;
                    return n.live ? e.jsx("button", {
                        className: "footer-link-item",
                        onClick: () => {
                            var l;
                            return (l = Ee) == null ? void 0 : l.openLiveSupport()
                        },
                        children: n.label
                    }, t) : n.verify ? e.jsx(kt, {
                        label: n.label
                    }, t) : n.business ? e.jsx(yt, {
                        label: n.label
                    }, t) : e.jsxs(y, {
                        className: "footer-link-item",
                        href: n.link,
                        target: i ? "_blank" : "_self",
                        children: [e.jsx("span", {
                            children: n.label
                        }), n.icon && e.jsx(am, {})]
                    }, t)
                })
            })
        });

    function nm() {
        const {
            t: s
        } = p(), {
            lang: n
        } = V();
        return {
            sportsLinks: [{
                label: s("Sports Home"),
                link: "/sports"
            }, {
                label: s("Live"),
                link: "/sports?bt-path=%2Flive"
            }, {
                label: s("SportsBook"),
                link: "/sports?bt-path=%2F"
            }, {
                label: s("Rules"),
                link: "/help/terms-sports"
            }],
            promoLinks: [{
                label: s("VIP Club"),
                link: "#/vip"
            }, {
                label: s("Affiliate"),
                link: "/affiliate"
            }],
            supportLinks: [{
                label: s("Privacy Policy"),
                link: "/help/privacy"
            }, {
                label: s("Gamble Aware"),
                link: "/help/gameble-aware"
            }, {
                label: s("Terms Of Service"),
                link: "/help/terms-service"
            }, {
                label: s("Self-exclusion"),
                link: "/help/self-exclusion"
            }, {
                label: s("Live Support"),
                link: "",
                live: 1
            }],
            aboutLinks: [{
                label: s("News"),
                link: `https://blog.bc.game/${n}/`
            }, {
                label: s("Work with us"),
                link: "https://angel.co/company/bc-game-2"
            }, {
                label: s("Business Contacts"),
                link: "",
                business: !0
            }, {
                label: s("Help Desk"),
                link: `https://help.bc.game/${n==="ja"?"ja":"en"}/`
            }, {
                label: s("Verify Representative"),
                link: "",
                verify: 1
            }]
        }
    }
    const am = f.memo(function() {
            return e.jsx("svg", {
                className: "hashbet",
                version: "1.1",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 1024 1024",
                children: e.jsx("path", {
                    d: "M365.386 83.556c31.44 0 56.926 25.486 56.926 56.926 0 30.897-24.617 56.046-55.307 56.904l-1.62 0.022h-170.777v629.186h629.186v-170.777c0-30.897 24.617-56.046 55.307-56.904l1.62-0.022c30.897 0 56.045 24.617 56.904 55.307l0.022 1.62v179.768c0 57.258-45.887 103.796-102.894 104.848l-1.968 0.017h-647.16c-57.258 0-103.796-45.887-104.848-102.894l-0.017-1.968v-647.16c0-57.258 45.887-103.796 102.894-104.848l1.968-0.017h179.768zM611.108 84.556l1.62 0.013 227.481 4.701c57.907 1.009 104.028 48.774 103.019 106.677l-1.176 62.495-1.198 54.931-1.442 62.539-0.437 21.864c-0.034 1.776-0.066 3.547-0.094 5.315-0.549 31.434-26.475 56.472-57.909 55.926s-56.472-26.475-55.926-57.909l0.308-16.334 2.11-93 0.246-11.744-360.933 330.867c-23.176 21.246-59.187 19.678-80.428-3.495-20.849-22.748-19.728-57.854 2.233-79.234l1.267-1.193 355.396-325.787-134.861-2.783c-30.889-0.638-55.524-25.77-55.748-56.469l0.013-1.62c0.638-30.889 25.77-55.524 56.469-55.748z"
                })
            })
        }),
        tm = "f1otbj21",
        im = "/assets/bclb.76557093.png",
        lm = f.memo(function({
            isSmall: s
        }) {
            const n = le();
            return e.jsxs("div", {
                className: g(cm, "footer-text-wrap", s && "small-text-wrap"),
                children: [e.jsxs("div", {
                    className: "left-text",
                    children: [e.jsx("img", {
                        alt: "logo",
                        className: "logo",
                        src: R.assets(`/logo/logo_pure${n?"":"_w"}.png`)
                    }), e.jsx("p", {
                        children: "BCGAME.KE is a community-based casino that offers their players the best online casino experience possible!"
                    })]
                }), e.jsxs("div", {
                    className: "right-text",
                    children: [e.jsxs("div", {
                        className: "bclb-wrap",
                        children: [e.jsx("img", {
                            alt: "bclb",
                            className: "bclb",
                            src: im
                        }), e.jsx("p", {
                            children: "BCLB"
                        })]
                    }), e.jsx("p", {
                        children: "This platform is only for people over the age of 18 years. Betting can be addictive, please bet responsibly. BCGAME.KE is a trading name of Blockdance Africa Limited, a company registered under the laws of Kenya. The provider of this website is licensed by BCLB (Betting Control and Licensing Board of Kenya) under the Betting, Lotteries and Gaming Act, Cap 131, Laws of Kenya under License number: 0000573. All rights reserved."
                    })]
                })]
            })
        }),
        cm = "f8hme2a",
        rm = f.memo(function() {
            const s = es(),
                {
                    isNgHost: n
                } = w.getHostType(v.host),
                a = om(s),
                t = a === 2;
            return e.jsxs("div", {
                className: g(mm, "footer-type-" + a),
                id: "page-footer",
                children: [e.jsx(Q2, {
                    isSmall: t
                }), e.jsxs("div", {
                    className: "page-max-width-wrap footer-infos",
                    children: [e.jsx(sm, {
                        isSmall: t
                    }), n ? e.jsx(Tt, {
                        isSmall: t
                    }) : e.jsx(lm, {
                        isSmall: t
                    })]
                })]
            })
        });

    function om(s) {
        return s > 1200 ? 0 : s > 1e3 ? 1 : 2
    }
    const mm = "f14s0dn3";
    let Vt;
    tn = f.memo(function() {
        const {
            isKenyaHost: s
        } = w.getHostType(v.host);
        return s ? e.jsx(rm, {}) : e.jsx(Vt, {})
    }), Vt = f.memo(function() {
        const s = es(),
            n = dm(s),
            a = n === 2,
            {
                isNgHost: t,
                isKenyaHost: i,
                isIdHost: l,
                isUsHost: r
            } = w.getHostType(v.host);
        return e.jsxs("div", {
            className: g(hm, "footer-type-" + n),
            id: "page-footer",
            children: [e.jsx(b2, {
                isSmall: a
            }), e.jsxs("div", {
                className: "page-max-width-wrap footer-infos",
                children: [e.jsx(l2, {
                    isSmall: a
                }), !t && !i && !r && !l && e.jsx(q2, {
                    isSmall: a
                }), e.jsx(Z2, {
                    isSmall: a
                }), e.jsx(Tt, {
                    isSmall: a
                })]
            })]
        })
    });

    function dm(s) {
        return s > 1200 ? 0 : s > 1e3 ? 1 : 2
    }
    const hm = "fgbfo2v",
        um = f.memo(function() {
            const {
                lang: s
            } = V(), n = At(), [a, t] = o.useState(!1), i = o.useMemo(() => Object.entries(Cs).map(([l, r]) => ({
                label: r[0],
                value: l
            })), []);
            return o.useEffect(() => {
                const l = navigator.language,
                    r = localStorage.getItem("navigatorlang");
                (!l || l === "") && (!r || r === "") && t(!0)
            }, []), a ? e.jsxs("div", {
                className: pm,
                children: [e.jsxs("div", {
                    className: "lan-title",
                    children: [e.jsx(u, {
                        className: "lan",
                        name: "Language"
                    }), e.jsx("p", {
                        children: "Current language"
                    }), e.jsx(Ze, {
                        className: "lan-select-closebtn",
                        onClick: () => t(!1)
                    })]
                }), e.jsx(Jt, {
                    className: "lan-select-new",
                    top: !0,
                    value: s,
                    options: i,
                    onChange: l => {
                        localStorage.setItem("navigatorlang", l), n(l), t(!1)
                    }
                })]
            }) : null
        }),
        pm = "l11zoekl",
        xm = o.memo(function() {
            const {
                t: s
            } = p(), [n, a] = o.useState(!1);

            function t() {
                a(!1);
                const i = {
                    top: document.documentElement.scrollTop || document.body.scrollTop
                };
                Xt.to(i, {
                    top: 0,
                    onUpdate: () => {
                        window.scrollTo(0, i.top)
                    }
                })
            }
            return o.useEffect(() => {
                const i = window.innerHeight || 720,
                    l = zm(function() {
                        (document.documentElement.scrollTop || document.body.scrollTop) >= i * 1.1 ? a(!0) : a(!1)
                    }, 1e3);
                return window.addEventListener("scroll", l, !1), () => {
                    window.removeEventListener("scroll", l)
                }
            }, []), n ? e.jsxs("button", {
                className: g(jm, "page-scroll-top-button"),
                onClick: t,
                children: [e.jsx(u, {
                    name: "Arrow"
                }), e.jsx("span", {
                    children: s("Top")
                })]
            }) : null
        }),
        jm = "s1jkq2ls";
    let us;
    ri = f.memo(function({
        children: s
    }) {
        const n = F(),
            {
                isSpreadHost: a
            } = w.getHostType(v.host),
            t = a && !n.login;
        return e.jsx(sn, {
            className: t ? "sports-layout" : "base-layout",
            header: t ? null : e.jsx(q1, {}),
            footer: t ? null : e.jsx(tn, {}),
            children: s
        })
    }), us = w.isSSR ? null : document.getElementById("root"), sn = function({
        children: s,
        header: n,
        footer: a,
        className: t
    }) {
        const {
            urlOriginal: i
        } = V(), l = me();
        Pe(t), o.useEffect(() => {
            W.trackPageView({
                url: i
            })
        }, [i]), Re(() => {
            (document.scrollingElement || document.body).scrollTop = 0
        }, [s.type]);
        const r = ["/chat"],
            {
                urlPathname: m
            } = V(),
            c = o.useMemo(() => {
                const d = m.match(/^\/[^\/]+/);
                return !r.includes(d ? d[0] : "")
            }, [m]);
        return e.jsxs(qm, {
            root: us,
            children: [n, e.jsx(o.Suspense, {
                fallback: e.jsx(Ve, {}),
                children: e.jsx(qe, {
                    errorComponent: bm,
                    children: s
                })
            }), a, Ee && c && !l && e.jsx(gm, {
                ls: Ee
            }), e.jsx(xm, {}), e.jsx(vm, {}), e.jsx(um, {})]
        })
    };

    function gm({
        ls: s
    }) {
        function n() {
            s.openLiveSupport()
        }
        return e.jsx(T, {
            className: km,
            onClick: n,
            children: e.jsx("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "23",
                height: "23",
                fill: "none",
                children: e.jsx("path", {
                    fill: "#fff",
                    d: "M8.28 12.45c.79 0 1.43.64 1.43 1.43v5.56c0 .8-.64 1.43-1.43 1.43h-1.5a2.14 2.14 0 0 1-2.14-2.14v-4.14c0-1.18.96-2.14 2.14-2.14h1.5Zm8.22 0c1.18 0 2.14.96 2.14 2.14v4.14c0 1.18-.96 2.14-2.14 2.14H15c-.78 0-1.42-.64-1.42-1.43v-5.57c0-.78.64-1.42 1.42-1.42h1.5ZM11.61 2.3c5.63 0 10.21 4.48 10.35 10.06v4.47a1.05 1.05 0 0 1-2.1.11V12.63a8.23 8.23 0 0 0-8.25-8.21 8.23 8.23 0 0 0-8.23 7.98V16.86a1.06 1.06 0 0 1-2.12.1v-4.33C1.26 6.93 5.89 2.3 11.6 2.3Z"
                })
            })
        })
    }

    function fm() {
        const {
            t: s
        } = p(), n = v.host === "bcgame.ke", a = os().bcBrand;
        return n ? null : e.jsxs("div", {
            className: "original-games page-max-width-wrap",
            children: [e.jsx("div", {
                className: "tit",
                children: s("Can\u2019t get the page refreshed? Play {{site}} original games instead", {
                    site: v.siteName
                })
            }), e.jsx(Jd, {
                className: "game-list",
                source: a,
                more: !1
            })]
        })
    }

    function bm({
        msg: s
    }) {
        const {
            t: n
        } = p();

        function a() {
            on(!0), window.location.reload(!0)
        }
        return e.jsxs("div", {
            className: g("error", Nm),
            children: [e.jsxs("div", {
                className: "error-msg",
                children: [e.jsx("div", {
                    children: s
                }), e.jsx("div", {
                    children: e.jsx(T, {
                        type: "conic",
                        size: "small",
                        onClick: a,
                        children: n("Refresh now")
                    })
                })]
            }), e.jsx(qe, {
                children: e.jsx(fm, {})
            })]
        })
    }

    function vm({
        step: s = 200
    }) {
        const n = es(),
            a = Math.ceil(n / s);
        return Re(() => {
            const t = `g${a}`;
            return us.classList.add(t), () => {
                us.classList.remove(t)
            }
        }, [a]), null
    }
    const Nm = "e1g1h0lg",
        km = "l1gdc94o"
});
export {
    sn as B, ss as C, ii as G, li as L, ye as P, Gd as __tla, ci as a, Ss as b, Ts as c, nn as d, ri as e, an as f, _s as g, oi as h, tn as i, mi as j, Je as l, ln as n, di as o
};