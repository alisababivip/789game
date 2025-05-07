var ne = Object.defineProperty,
    oe = Object.defineProperties;
var ae = Object.getOwnPropertyDescriptors;
var B = Object.getOwnPropertySymbols;
var ce = Object.prototype.hasOwnProperty,
    re = Object.prototype.propertyIsEnumerable;
var U = (t, s, o) => s in t ? ne(t, s, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: o
    }) : t[s] = o,
    L = (t, s) => {
        for (var o in s || (s = {})) ce.call(s, o) && U(t, o, s[o]);
        if (B)
            for (var o of B(s)) re.call(s, o) && U(t, o, s[o]);
        return t
    },
    M = (t, s) => oe(t, ae(s));
import {
    _ as c,
    r as e
} from "./_bc_ui_share-16017657.js";
import {
    r as u,
    R as b
} from "./react_share-ba7e619d.js";
import {
    c as C
} from "./index-5bcb444f.js";
import {
    f as z
} from "./framer_motion_share-695feab3.js";
import {
    a as N
} from "./apis-36b6ebea.js";
import {
    l as q
} from "./lodash_es_share-b99bc9c1.js";
import {
    T as ie
} from "./Enter-ad67eca9.js";
const P = "root-stack";

function F() {
    const t = c.usePortalList(P);
    return e.jsx(z.AnimatePresence, {
        children: t.map((s, o) => e.jsx(c.ActiveProvider, {
            value: o === t.length - 1,
            children: s
        }, o))
    })
}

function E({
    title: t,
    className: s,
    children: o
}) {
    const r = c.useIsActive(),
        n = w(),
        a = N.getUrlParam("type") === "whatsapp";
    return e.jsxs(z.motion.div, {
        className: C(me, s),
        initial: I.from,
        animate: r ? I.enter : I.update,
        exit: I.from,
        transition: I.transition,
        children: [t && e.jsxs("p", {
            className: "title",
            children: [!a && e.jsx(c.Button, {
                className: "back-icon",
                onClick: n.pop,
                children: e.jsx(c.Icon, {
                    name: "Arrow"
                })
            }), e.jsx("span", {
                children: t
            })]
        }), o]
    })
}
const I = {
        from: {
            x: "100%",
            visibility: "visible"
        },
        enter: {
            x: "0%",
            visibility: "visible"
        },
        update: {
            x: "-10%",
            transitionEnd: {
                visibility: "hidden"
            }
        },
        transition: {
            type: "spring",
            damping: 80,
            stiffness: 900
        }
    },
    S = new WeakMap;

function w() {
    const t = c.usePortalContext();
    return u.useMemo(() => {
        const s = n => {
            const a = t.getCache(P),
                l = a[a.length - 1];
            if (!l) return;
            const i = S.get(l);
            S.delete(l), i && i(n), t.delNode(P, l)
        };

        function o(n) {
            return new Promise(a => {
                S.set(n, a), t.sendNode(P, n)
            })
        }
        return {
            pop: s,
            del: n => {
                const a = S.get(n);
                S.delete(n), a && a(void 0), t.delNode(P, n)
            },
            push: o
        }
    }, [])
}

function le(t) {
    const s = w();
    return u.useCallback(async o => new Promise(r => {
        function n(i) {
            s.del(l), r(i)
        }
        const a = t,
            l = e.jsx(a, L({
                onData: n
            }, o));
        s.push(l)
    }), [])
}

function de({
    onData: t,
    message: s
}) {
    return e.jsx(E, {
        children: e.jsx(c.Confirm, {
            className: ue,
            onConfirm: t,
            children: s,
            hasCancel: !0
        })
    })
}

function Ss() {
    const t = le(de);
    return u.useCallback(s => t({
        message: s
    }), [])
}
const ue = "c14t49zc",
    me = "s1cutwgp",
    $ = b.memo(function() {
        return e.jsxs("div", {
            className: "page-desc",
            children: [e.jsx("p", {
                className: "desc-1",
                children: "18+ Users | Promotes only fantasy sports"
            }), e.jsx("p", {
                className: "desc-2",
                children: "Andhra Pradesh, Assam, Nagaland, Odisha, Sikkim, and Telangana states are not being targeted as per google ads policy."
            }), e.jsx("p", {
                className: "desc-3",
                children: "This Product in intended for use by those 18 or older for amusement purposes only. The games are intended for an adult audience."
            }), e.jsx("p", {
                className: "desc-4",
                children: 'The games do not offer "real money gambling" or an opportunity to win real money to action headline.'
            })]
        })
    }),
    ge = "/modules/account/bg-c80415f6.png",
    he = "/modules/account/bg_w-9476816a.png",
    fe = "/modules/account/br_bg-afa8fbf1.png",
    pe = "/modules/account/br_bg_w-74b11ced.png",
    be = "/modules/account/ja_bg-f5f643df.png",
    xe = "/modules/account/ja_bg_w-9d49eb27.png",
    _e = "/modules/account/ru_bg-03d2e997.png",
    je = "/modules/account/ru_bg_w-df842f85.png",
    ve = "/modules/account/big_left-06409d8c.png",
    we = "/modules/account/pure-ab63c7ce.png",
    ye = "/modules/account/pure_bg-0caeac5a.png",
    Ce = "/modules/account/pure_bg_w-2ac2b6c7.png",
    Ne = "/modules/account/inr_bg-a0b317d2.png",
    ke = "/modules/account/inr_bg_w-d26bb351.png",
    Ie = "/modules/account/kenya_bg-9290cb57.png",
    Se = "/modules/account/kenya_bg_w-a9883526.png",
    Pe = "/modules/account/bg_m-00b35e54.png",
    Te = "/modules/account/bg_m_w-0fc8ed00.png",
    Le = "/modules/account/br_bg_m-9e4aca80.png",
    Ae = "/modules/account/br_bg_m_w-fc6874b8.png",
    Ee = "/modules/account/ja_bg_m-bd9c5b94.png",
    Re = "/modules/account/ja_bg_m_w-f2ec1ec9.png",
    Me = "/modules/account/ru_bg_m-c4184d28.png",
    $e = "/modules/account/ru_bg_m_w-db6465c7.png",
    De = "/modules/account/pure_m-c4a77e8d.png",
    We = "/modules/account/pure_bg_m-0e92af1e.png",
    Be = "/modules/account/inr_m-ee566e25.png",
    Ue = "/modules/account/inr_m_w-a0a7ed81.png",
    Oe = "/modules/account/kenya_bg_m-b3600913.png",
    He = "/modules/account/kenya_bg_m_w-74ad5a47.png",
    v = {
        common: {
            bg: ge,
            bg_w: he,
            bg_m: Pe,
            bg_m_w: Te
        },
        kenya: {
            bg: Ie,
            bg_w: Se,
            bg_m: Oe,
            bg_m_w: He
        },
        br: {
            bg: fe,
            bg_w: pe,
            bg_m: Le,
            bg_m_w: Ae
        },
        ru: {
            bg: _e,
            bg_w: je,
            bg_m: Me,
            bg_m_w: $e
        },
        ja: {
            bg: be,
            bg_w: xe,
            bg_m: Ee,
            bg_m_w: Re
        },
        inr: {
            bg: Ne,
            bg_w: ke,
            bg_m: Be,
            bg_m_w: Ue
        },
        big_left: ve,
        pure: we,
        pure_bg: ye,
        pure_bg_w: Ce,
        pure_m: De,
        pure_bg_m: We
    },
    A = ["bc.ai", "bc.me", "bcga.me"],
    K = ["bcigra.com", "bcfeast88.com", "bcwildwagers.com", "boostup77.com"],
    R = ["bcgame.ke"],
    Ve = "IN",
    G = b.createContext({
        areaCode: void 0,
        email: "",
        password: "",
        autoLogin: !1,
        areaCodes: [],
        isBr: !1,
        isAuth: !1,
        invitationCode: "",
        onChange(t) {
            Object.assign(this, t)
        },
        onEnd() {}
    });

function y() {
    return b.useContext(G)
}
const ze = {
        data: null,
        fillback: {
            currentInvitationCode: "",
            areaCode: "EN",
            loading: !0
        },
        getInitData: q.memoize(N.getUserInfo)
    },
    Z = q.memoize(N.getUserInfo);

function qe() {
    const [t, s] = u.useState(ze.fillback);
    return u.useEffect(() => {
        Z().then(o => {
            s(M(L({}, o), {
                loading: !1
            }))
        })
    }, []), t
}
const Fe = b.memo(({
    isAuth: t,
    children: s
}) => {
    var i;
    const o = Ke(),
        [r, n] = c.useSetState({
            areaCode: void 0,
            email: "",
            password: "",
            autoLogin: !1,
            isBr: !1,
            invitationCode: "",
            areaCodes: [],
            isAuth: t
        }),
        a = (i = r.areaCode) == null ? void 0 : i.countryCode;
    u.useEffect(() => {
        a && localStorage.setItem("mobileCode", a)
    }, [a]), u.useEffect(() => {
        Promise.all([N.handleGetArea(), Z()]).then(([d, g]) => {
            let f = g.areaCode;
            const h = localStorage.getItem("mobileCode");
            if (h) {
                const p = d.find(_ => _.countryCode == h);
                p && (f = p.countryCode)
            }
            let x = d.find(p => p.countryCode == f) || d[0];
            R.includes(c.env.host) && (x = d.find(p => p.areaCode === "254") || d[0]), n({
                areaCodes: d,
                areaCode: x
            })
        })
    }, []);
    const l = M(L({}, r), {
        onChange: n,
        onEnd() {
            o && (location.href = decodeURIComponent(o))
        }
    });
    return e.jsx(G.Provider, {
        value: l,
        children: s
    })
});

function Ke() {
    const t = new URL(window.location.href);
    return u.useMemo(() => t.searchParams.get("redirect"), [])
}
const O = window.location.hostname.match(/([^.]+\.[^.]+)$/),
    J = c.env.host,
    H = O ? O[0] : J,
    Y = H === "87.com" ? H : J;

function Q() {
    const t = new URL(window.location.href);
    return u.useMemo(() => t.searchParams, [])
}

function Ge({
    registEmail: t,
    mobile: s,
    onEnter: o,
    onBlur: r
} = {}) {
    const {
        t: n
    } = c.useTranslation(), [a, l] = u.useState(!0), {
        areaCode: i,
        email: d,
        onChange: g
    } = y(), f = typeof s == "undefined", h = f ? /^\+*\d{3,}$/.test(d) : s, x = t && !s && a && d && d.length > 0, p = e.jsxs(c.Input, {
        type: h ? "tel" : "text",
        tabIndex: 1,
        autoComplete: "off",
        className: "first-input",
        value: d,
        onChange: _ => g({
            email: _
        }),
        placeholder: f ? `${n("Email")} / ${n("Phone Number")}` : n(h ? "Phone Number" : "Email"),
        onEnter: o,
        onBlur: () => {
            r && r(d), l(!1)
        },
        required: !0,
        onFocus: () => l(!0),
        focus: !0,
        children: [h && i && e.jsx(Ze, {
            value: i,
            onChange: _ => g({
                areaCode: _
            })
        }), x && e.jsxs("div", {
            className: "regist-email-alert",
            children: [e.jsx("span", {
                children: n("Please make sure the email you entered is correct, as it will affect receiving your bonus.")
            }), e.jsx("span", {
                className: "rec"
            })]
        })]
    });
    return {
        isMobile: h,
        input: p
    }
}

function Ze({
    value: t,
    onChange: s
}) {
    const {
        t: o
    } = c.useTranslation(), {
        areaCodes: r
    } = y(), n = u.useMemo(() => r.map(a => ({
        label: a.en,
        value: a
    })), [r]);
    return e.jsx(c.Select, {
        className: C(es, R.includes(c.env.host) && "kenya-select"),
        value: t,
        options: n,
        onChange: s,
        disableHover: !0,
        searchNoResult: e.jsx("p", {
            className: "no-results",
            children: o("No results")
        }),
        renderLabel: a => e.jsx("div", {
            children: `+${a.value.areaCode}`
        }),
        renderOption: a => e.jsxs(e.Fragment, {
            children: [e.jsx("div", {
                className: "label",
                children: a.label
            }), e.jsx("div", {
                className: "code",
                children: `+${a.value.areaCode}`
            })]
        }),
        filter: (a, l) => {
            const i = l.toLowerCase();
            return a.label.toLowerCase().indexOf(i) !== -1 || String(a.value.areaCode).toLowerCase().indexOf(i) !== -1
        },
        getKey: a => a.value.countryCode
    })
}

function Je() {
    const {
        t
    } = c.useTranslation(), s = y(), {
        currentInvitationCode: o
    } = qe(), [r, n] = u.useState(o !== ""), [a, l] = u.useState(o || "");
    return u.useEffect(() => {
        o && (l(o), n(!0), s.onChange({
            invitationCode: o
        }))
    }, [o]), {
        node: e.jsxs("div", {
            className: Ye,
            children: [e.jsxs("div", {
                className: C("refer-title", r && "show"),
                onClick: () => n(!r),
                children: [e.jsx("span", {
                    children: t("Enter Referral/Promo Code")
                }), e.jsx(c.Icon, {
                    name: "Arrow"
                })]
            }), r && e.jsx(c.Input, {
                tabIndex: 3,
                value: a,
                onChange: i => {
                    l(i), s.onChange({
                        invitationCode: i
                    })
                },
                placeholder: `${t("Referral/Promo Code")} (${t("Optional")})`
            })]
        }),
        invitcode: a
    }
}
const Ye = "r1rod29g";

function Qe() {
    const {
        t
    } = c.useTranslation(), [s, o] = u.useState(!1), [r, n] = u.useState(!1), a = t("User Agreement"), l = e.jsxs("div", {
        className: X,
        onClick: () => {
            o(!s), r && n(!1)
        },
        children: [e.jsx(c.Switch, {
            type: "checkbox",
            value: s,
            className: r ? "err-box" : ""
        }), e.jsx("div", {
            className: "label",
            children: e.jsxs(c.Trans, {
                i18nKey: "user_agreement",
                agree: t("User Agreement"),
                children: [e.jsx("span", {
                    children: "I agree to the "
                }), e.jsx("a", {
                    className: "argument",
                    href: `https://${c.env.host}/help/terms-service`,
                    target: "_blank",
                    children: {
                        agree: a
                    }
                }), e.jsx("span", {
                    children: " & confirm I am at least 18 years old"
                })]
            })
        }), r && e.jsx("div", {
            className: "err-alert",
            children: t("Please consent to our user agreement")
        })]
    });
    return {
        checked: s,
        showError: () => n(!0),
        node: l
    }
}

function Xe() {
    const {
        t
    } = c.useTranslation(), [s, o] = u.useState(!0), r = e.jsxs("div", {
        className: X,
        onClick: () => o(!s),
        children: [e.jsx(c.Switch, {
            type: "checkbox",
            value: s
        }), e.jsx("div", {
            className: "label",
            children: e.jsx("span", {
                children: t("I agree to receive marketing promotions from {{host}}.", {
                    host: c.env.host
                })
            })
        })]
    });
    return {
        checked: s,
        node: r
    }
}
const X = "acb9vpv",
    es = "apmtsvx";
const ss = b.memo(function({
        str: s
    }) {
        const {
            t: o
        } = c.useTranslation(), r = s.length;
        let n = 0,
            a = 0;
        return /[\d+]/.test(s) && n++, /[a-z]+/.test(s) && n++, /[A-Z]+/.test(s) && n++, /[!@#$%^&*(),.'{}]+/.test(s) && n++, n > 1 && r > 15 ? a = 3 : n === 1 && r > 10 ? a = 2 : n > 2 && r > 7 ? a = 3 : n > 1 && r > 5 ? a = 2 : r === 0 ? a = 0 : a = 1, a === 0 ? null : e.jsxs("div", {
            className: C(ts, "password-check", "safe-level-" + a),
            children: [e.jsx("div", {
                className: "safe-item item-1"
            }), e.jsx("div", {
                className: "safe-item item-2"
            }), e.jsx("div", {
                className: "safe-item item-3"
            }), e.jsx("div", {
                className: "safe-text",
                children: o(a === 3 ? "Secure" : a === 2 ? "Average" : "High risk")
            })]
        })
    }),
    ts = "c19xg3se";

function ns(t = !1) {
    const s = w();
    return async (o, r, n, a) => s.push(e.jsx(ee, {
        mobileCode: o,
        phoneNumber: r,
        captchaType: "regist",
        invitationCode: n,
        isWhatsapp: t,
        errorCallback: a
    }))
}

function ee({
    mobileCode: t,
    phoneNumber: s,
    children: o,
    captchaType: r,
    invitationCode: n,
    hasPassword: a,
    isWhatsapp: l = !1,
    errorCallback: i
}) {
    const {
        t: d
    } = c.useTranslation(), [g, f] = c.useSetState({
        code: "",
        password: "",
        countdown: 0,
        sendTimes: 0
    }), h = u.useRef(null), x = w();
    async function p() {
        try {
            const m = await c.requestRecaptcha("phone");
            await N.handleGetPhoneCaptcha({
                captchaType: r,
                code: m,
                invitationCode: n,
                phone: `(+${t})${s}`,
                resend: g.sendTimes > 0
            }, l), f({
                countdown: Date.now() + 6e4,
                sendTimes: g.sendTimes + 1
            })
        } catch (m) {
            f({
                sendTimes: g.sendTimes + 1
            }), x.pop(), m.code > 4e3 && m.code < 5e3 ? i && i(m.code) : c.notify(m)
        }
    }
    u.useEffect(() => {
        var m;
        (m = h.current) == null || m.click()
    }, []);

    function _(m) {
        m.preventDefault(), m.stopPropagation(), x.push(e.jsx(os, {}))
    }

    function j() {
        g.code && g.code.length > 5 && x.pop({
            code: g.code,
            password: g.password
        })
    }
    return e.jsxs(E, {
        className: se,
        title: d(l ? "WhatsApp Phone Verification" : "Phone Verification"),
        children: [e.jsx("p", {
            className: "st",
            children: d("Please enter the 6-digit verification code sent to {{phone}}. The code is valid for 30 minutes.", {
                phone: `+${t} ${s}`
            })
        }), e.jsx(c.Input, {
            type: "text",
            tabIndex: 1,
            autoComplete: "off",
            value: g.code,
            onChange: m => f({
                code: m
            }),
            onEnter: j,
            placeholder: d("Verification Code"),
            required: !0,
            focus: !0,
            children: e.jsx(c.Countdown, {
                endTime: g.countdown,
                children: ({
                    seconds: m
                }) => e.jsx(c.Button, {
                    ref: h,
                    className: "countdown",
                    onClick: p,
                    disabled: m > 0,
                    children: `${d("Resend")}${m>0?`(${m}s)`:""}`
                })
            })
        }), a && e.jsx(c.InputPassword, {
            tabIndex: 2,
            autoComplete: "off",
            value: g.password,
            onChange: m => f({
                password: m
            }),
            placeholder: d("New password"),
            onEnter: j,
            required: !0,
            focus: !0
        }), o, e.jsx("p", {
            className: "not-st",
            children: e.jsx("a", {
                href: "/",
                onClick: _,
                children: d("Didn't receive the verification code?")
            })
        }), e.jsx(c.Button, {
            type: "conic",
            className: "sub-btn",
            onClick: j,
            children: d("Submit")
        })]
    })
}

function os() {
    const {
        t
    } = c.useTranslation(), s = w();
    return e.jsxs(E, {
        className: C(se, "phone-verify"),
        title: t("Didn't receive the verification code?"),
        children: [e.jsx("div", {
            children: e.jsxs(c.Trans, {
                i18nKey: "sms-phone-p-ol-li",
                children: [e.jsx("p", {
                    children: "SMS sent to your phone. If you have not received the code after several attempts, please:"
                }), e.jsxs("ol", {
                    children: [e.jsx("li", {
                        children: "Check if your phone bill is overdue."
                    }), e.jsx("li", {
                        children: "Check if the message is in the SMS bin."
                    }), e.jsx("li", {
                        children: "The message may be delayed for a few minutes. Try again after 10 minutes."
                    }), e.jsx("li", {
                        children: "If this phone number already exists,we will not send you an authentication code."
                    })]
                })]
            })
        }), e.jsx(c.Button, {
            type: "conic",
            className: "sub-btn",
            onClick: s.pop,
            children: t("Confirm")
        })]
    })
}

function Ps() {
    const t = w();
    return async (s, o) => t.push(e.jsx(ee, {
        mobileCode: s,
        phoneNumber: o,
        captchaType: "reset_password",
        hasPassword: !0
    }))
}
const se = "s1ajzz03";

function as() {
    const t = y(),
        s = c.useNavigate(),
        o = n => {
            s(`/auth${n}`)
        },
        r = n => {
            s(`#/login${n}`)
        };
    return t.isAuth ? o : r
}

function cs() {
    const {
        t
    } = c.useTranslation(), s = as(), o = c.usePop(), r = w(), n = y(), a = Je(), l = ns(!0), i = Qe(), d = Xe(), {
        input: g
    } = Ge({
        mobile: !0
    }), [f, h] = u.useState(!1);
    async function x(p) {
        var _;
        if (p && p.preventDefault(), !f) {
            if (h(!0), !i.checked) return c.notify(new Error(t("Please consent to our user agreement"))), h(!1), i.showError(), !1;
            if (!n.password || n.password.length < 6) return c.notify(new Error(t("Password length should not be less than 6 characters"))), h(!1), !1;
            try {
                const j = window.localStorage.getItem("before-user-login-type") || "";
                c.app.emit("track", "sign_click", {
                    sign_type: "whatsapp",
                    sign_input: n.email
                }), c.app.emit("track", "third_register_click", {
                    account_type: "whatsapp"
                });
                const m = ((_ = n.areaCode) == null ? void 0 : _.areaCode) || "",
                    k = await l(m, n.email, a.invitcode),
                    T = k == null ? void 0 : k.code;
                if (!T) return h(!1), !1;
                await N.handleRegistPhone({
                    phone: `(+${m})${n.email}`,
                    captcha: T,
                    password: n.password,
                    invitationCode: a.invitcode,
                    acceptPromotion: d.checked,
                    userGroup: j
                }, !0), n.onEnd(), h(!1)
            } catch (j) {
                h(!1), j.code === 5801 ? await o.confirm(t("Looks like you have already registered. Please sign in.")) && (n.onChange({
                    autoLogin: !0
                }), s("/signin"), r.pop()) : j && c.notify(j)
            }
        }
    }
    return e.jsx(E, {
        title: t("WhatsApp Sign Up"),
        children: e.jsxs("form", {
            onSubmit: x,
            autoComplete: "off",
            children: [e.jsx("p", {
                children: t("Please enter your WhatsApp phone number")
            }), g, e.jsx(c.InputPassword, {
                tabIndex: 2,
                value: n.password,
                onChange: p => n.onChange({
                    password: p
                }),
                placeholder: t("Login Password"),
                required: !0
            }), e.jsx(ss, {
                str: n.password
            }), a.node, i.node, d.node, e.jsx("div", {
                className: "buttons",
                children: e.jsx(c.Button, {
                    type: "conic",
                    size: "big",
                    loading: f,
                    children: t("Sign up")
                })
            })]
        })
    })
}

function rs() {
    const t = w();
    return u.useCallback(() => t.push(e.jsx(cs, {})), [t])
}
const te = b.memo(function() {
        const {
            onEnd: s,
            invitationCode: o
        } = y(), r = rs();
        return u.useEffect(() => {
            N.getUrlParam("type") === "whatsapp" && r()
        }, []), e.jsx(ie, {
            onEnd: s,
            invitationCode: o,
            inDialog: !0,
            children: e.jsx("button", {
                id: "wa_login",
                type: "button",
                title: "whatsapp",
                onClick: () => r(),
                children: e.jsx(is, {})
            })
        })
    }),
    is = b.memo(function() {
        return e.jsx("svg", {
            width: "12",
            height: "12",
            viewBox: "0 0 15 15",
            xmlns: "http://www.w3.org/2000/svg",
            className: "icon",
            children: e.jsx("path", {
                d: "M7.2 0a7 7 0 0 0-5.67 11.1l-.87 2.6 2.7-.86A7 7 0 1 0 7.2 0Zm4.08 9.88c-.17.48-.84.88-1.38 1-.36.07-.84.13-2.45-.53-2.06-.86-3.38-2.95-3.49-3.08-.1-.14-.83-1.1-.83-2.11 0-1 .51-1.5.72-1.7.17-.18.45-.26.71-.26h.24c.2.02.3.03.44.36l.63 1.51c.05.1.1.24.03.38-.06.14-.12.2-.22.32s-.2.21-.3.34c-.1.1-.21.23-.1.43.13.2.54.88 1.14 1.41.79.7 1.42.92 1.65 1.02.17.07.37.05.49-.08.16-.17.35-.45.55-.73.14-.2.31-.22.5-.15s1.19.56 1.4.66c.2.1.34.16.38.24.05.09.05.5-.12.97Z"
            })
        })
    });
const V = "inr",
    ls = "verify",
    ds = b.memo(function({
        children: s
    }) {
        const {
            t: o
        } = c.useTranslation(), r = y(), n = c.useIsMobile(), {
            lang: a
        } = c.usePageContext(), l = Q(), [i, d] = c.useSetState({
            loading: !0,
            initAreaCode: "",
            pathName: "",
            search: "",
            bc91231IsIframe: !1
        });
        u.useEffect(() => {
            const k = l.get("areacode") || "",
                T = window.location.pathname,
                D = window.location.search;
            d({
                loading: !1,
                initAreaCode: k,
                pathName: T,
                search: D,
                bc91231IsIframe: D.includes("type=iframe")
            });
            const W = A.includes(c.env.host);
            W && r.onChange({
                isBr: W
            })
        }, []);
        const g = A.includes(c.env.host) || K.includes(c.env.host),
            f = i.search.includes(V),
            {
                imgAssets: h,
                hideText: x,
                isRuImg: p,
                spHost: _
            } = gs(f ? V : a, c.env.host),
            j = !g && !_ && i.initAreaCode === Ve,
            m = R.includes(c.env.host);
        return e.jsxs("div", {
            className: C(hs, p && "ru-wrap"),
            children: [!i.bc91231IsIframe && (i.loading ? e.jsx("div", {
                className: "login-left"
            }) : !n && j ? e.jsx(ms, {}) : e.jsx(us, {
                imgAssets: h,
                hideText: x
            })), e.jsxs("div", {
                className: "login-right",
                children: [e.jsx(u.Suspense, {
                    fallback: null,
                    children: s
                }), !i.pathName.includes(ls) && i.pathName && !m && e.jsxs("div", {
                    className: "other-sign-wrap",
                    children: [e.jsxs("div", {
                        className: "line-text",
                        children: [e.jsx("div", {
                            className: "l"
                        }), e.jsx("div", {
                            className: "t",
                            children: o("Log in directly with")
                        }), e.jsx("div", {
                            className: "l"
                        })]
                    }), e.jsx(te, {})]
                }), e.jsx(F, {})]
            }), n && j && e.jsx($, {})]
        })
    }),
    us = b.memo(function({
        imgAssets: s,
        hideText: o
    }) {
        const {
            t: r
        } = c.useTranslation(), n = c.useIsMobile(), l = c.useIsDarken() ? n ? s.bg_m : s.bg : n ? s.bg_m_w : s.bg_w;
        return e.jsxs("div", {
            className: "login-left",
            children: [e.jsx("img", {
                alt: "",
                src: l,
                className: "common-left-img"
            }), !o && e.jsxs("div", {
                className: "left-text",
                children: [e.jsxs("p", {
                    className: "t",
                    children: [r("Welcome to"), e.jsx("span", {
                        children: Y
                    })]
                }), e.jsx("p", {
                    className: "st",
                    children: r("Start your game journey now!")
                })]
            })]
        })
    }),
    ms = b.memo(function() {
        const s = c.useIsDarken();
        return e.jsxs("div", {
            className: "login-left",
            children: [e.jsx("img", {
                alt: "",
                src: s ? v.pure_bg : v.pure_bg_w,
                className: "common-left-img"
            }), e.jsx("img", {
                alt: "",
                src: v.pure,
                className: "pure"
            }), e.jsx($, {})]
        })
    });

function gs(t, s) {
    let o = !1;
    const r = t === "pt",
        n = t === "ja",
        a = t === "inr";
    let l = v.common,
        i = !1;
    r && (l = v.br), n && (l = v.ja, i = !0), a && (l = v.inr, i = !0);
    const d = r || n || a;
    return A.indexOf(s) >= 0 && (l = v.br, i = !1), K.indexOf(s) >= 0 && (l = v.ru, i = !0, o = !0), R.indexOf(s) >= 0 && (l = v.kenya, i = !1), {
        imgAssets: l,
        hideText: i,
        isRuImg: o,
        spHost: d
    }
}
const hs = "ithbrou";
const fs = b.memo(function({
        children: s
    }) {
        const {
            t: o
        } = c.useTranslation(), r = y(), n = Q(), [a, l] = u.useState("");
        u.useEffect(() => {
            const d = n.get("areacode");
            d && l(d);
            const g = window.location.host,
                f = A.includes(g);
            f && r.onChange({
                isBr: f
            })
        }, []);
        const i = a === "IN";
        return e.jsxs("div", {
            className: C(ps, i && "have-bot"),
            children: [e.jsxs("div", {
                className: "big-login-left",
                children: [e.jsx("img", {
                    alt: "login-png",
                    src: v.big_left
                }), e.jsxs("div", {
                    className: "left-text-wrap",
                    children: [e.jsxs("p", {
                        className: "t",
                        children: [o("Welcome to"), e.jsx("span", {
                            children: Y
                        })]
                    }), e.jsx("p", {
                        className: "st",
                        children: o("Start your game journey now!")
                    })]
                })]
            }), e.jsxs("div", {
                className: "big-login-right",
                style: {
                    position: "relative"
                },
                children: [e.jsx(u.Suspense, {
                    fallback: null,
                    children: s
                }), e.jsxs("div", {
                    className: "other-sign-wrap",
                    children: [e.jsxs("div", {
                        className: "line-text",
                        children: [e.jsx("div", {
                            className: "l"
                        }), e.jsx("div", {
                            className: "t",
                            children: o("Log in directly with")
                        }), e.jsx("div", {
                            className: "l"
                        })]
                    }), e.jsx(te, {})]
                }), e.jsx(F, {})]
            }), e.jsx("a", {
                href: i ? "#" : "/",
                rel: "noopener noreferrer",
                children: e.jsx("img", {
                    alt: "logo",
                    src: c.app.assets("/logo/logo.png"),
                    className: "big-logo"
                })
            }), i && e.jsx($, {})]
        })
    }),
    ps = "b4aal7";
const bs = b.memo(function({
        isAuth: s,
        children: o
    }) {
        const [r, n] = u.useState(800), a = c.useResize(l => {
            n(l.width)
        });
        return e.jsx(Fe, {
            isAuth: s,
            children: e.jsx("div", {
                className: _s,
                ref: a,
                children: e.jsx(xs, {
                    width: r,
                    children: o
                })
            })
        })
    }),
    xs = b.memo(function({
        width: s,
        children: o
    }) {
        const [r, n] = u.useState(!1);
        return u.useEffect(() => {
            s >= 801 ? r || n(!0) : r && n(!1)
        }, [s]), r ? e.jsx(fs, {
            children: o
        }) : e.jsx(ds, {
            children: o
        })
    }),
    _s = "s1bscfa1",
    Ts = bs;
export {
    ss as C, Ts as M, E as S, Ps as a, Ge as b, y as c, Je as d, Qe as e, Xe as f, Ss as g, ns as h, w as i, le as j, R as k, as as u
};