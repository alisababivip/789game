import {
    _ as s,
    r as e
} from "./_bc_ui_share-16017657.js";
import {
    R as N,
    r as w
} from "./react_share-ba7e619d.js";
import {
    a as p
} from "./apis-36b6ebea.js";
import {
    i as k,
    g as E,
    S as T,
    u as L,
    c as _,
    b as I,
    j as P,
    k as R
} from "./index-248f6d24.js";
import {
    S as A
} from "./SimplePage-e8c652de.js";
import {
    U as F
} from "./Enter-ad67eca9.js";
import {
    v as U
} from "./index-cbbca0a8.js";
import {
    V as O
} from "./VerifyCode-a1d67458.js";
import "./md5-ba4a6ffc.js";
import "./___vite-browser-external_commonjs-proxy-558ed773.js";
import "./lodash_es_share-b99bc9c1.js";
import "./hmac-sha256-3d10b1b1.js";
import "./index-5bcb444f.js";
import "./framer_motion_share-695feab3.js";
import "./index-76559910.js";
import "./main-03098ed6.js";
const V = N.memo(function({
        onData: a
    }) {
        const {
            t: o
        } = s.useTranslation(), c = k(), m = E(), [t, f] = w.useState(""), x = async () => {
            if (await m(o("2FA key will be sent to your email address"))) try {
                await p.resetTwoFa(), s.notify(o("Done!"))
            } catch (j) {
                s.notify(j)
            }
            a()
        }, y = () => {
            navigator.clipboard.readText().then(h => {
                f(h)
            })
        };
        return e.jsxs(T, {
            className: B,
            children: [e.jsxs("p", {
                className: "sub-title",
                children: [e.jsx(s.Button, {
                    className: "back-icon",
                    onClick: () => {
                        c.pop(), a()
                    },
                    children: e.jsx(s.Icon, {
                        name: "Arrow"
                    })
                }), e.jsx("span", {
                    children: o("GOOGLE SECURITY-2FA")
                })]
            }), e.jsx(s.Input, {
                className: "google-code",
                placeholder: o("GOOGLE SECURITY-2FA"),
                value: t,
                onChange: f,
                type: "text",
                focus: !0,
                children: e.jsx("button", {
                    className: "paste-btn",
                    onClick: y,
                    children: o("Paste")
                })
            }), e.jsx("div", {
                className: "forget-wrap",
                children: e.jsx("div", {
                    className: "forget",
                    onClick: x,
                    children: o("Lost your Google SECURITY-2FA key?")
                })
            }), e.jsx(s.Button, {
                size: "big",
                type: "conic",
                className: "submit-btn",
                disabled: !t || t.length < 6,
                onClick: () => a(t),
                children: o("Submit")
            })]
        })
    }),
    B = "shendp7";

function G({
    onData: i,
    onCancel: a
}) {
    const {
        t: o
    } = s.useTranslation(), c = s.useAccount();
    w.useEffect(() => m, []);

    function m() {
        a()
    }
    return e.jsx(s.Dialog, {
        title: " ",
        className: D,
        children: e.jsxs("div", {
            children: [e.jsx("div", {
                className: "common-img-wrap",
                children: e.jsx("img", {
                    alt: "img",
                    src: U.email
                })
            }), e.jsx("p", {
                className: "common-tit",
                children: o("Identity Verification")
            }), e.jsxs("p", {
                className: "common-desc",
                children: [e.jsx("span", {
                    children: o("We’ve detected unusual activity in your account. Please verify your identity by entering the verification code sent to your email:")
                }), e.jsx("span", {
                    className: "w",
                    children: c.email
                })]
            }), e.jsx(O, {
                noSend: !0,
                needBackCode: !0,
                modifySuccessCb: t => {
                    i(t)
                }
            })]
        })
    })
}
async function W() {
    const i = s.useDialog();
    return new Promise(a => {
        const o = () => {
                a(null), i.back()
            },
            c = m => {
                a(m), setTimeout(() => {
                    i.back()
                }, 0)
            };
        i.push(e.jsx(G, {
            onData: c,
            onCancel: o
        }))
    })
}
const D = "v1g3w27u";
const ne = () => {
        const {
            t: i
        } = s.useTranslation(), a = L(), [o, c] = w.useState(!1), m = s.useDialog(), t = _(), f = s.env.host === "bcgame.ke", {
            isMobile: x,
            input: y
        } = I({
            mobile: f ? !0 : void 0
        }), h = P(V), j = s.env.host === "supersell.com", v = async function(u) {
            var d;
            if (u && u.preventDefault(), o || !t.email || !t.password) return !1;
            c(!0);
            try {
                const n = j ? "" : await s.requestRecaptcha("login");
                let l;
                if (x) {
                    let r = t.email;
                    R.includes(s.env.host) && r.startsWith("0") && (r = r.substring(1)), l = await p.handleLoginPhone(`(+${(d=t.areaCode)==null?void 0:d.areaCode})${r}`, t.password, n)
                } else l = await p.handleLogin(t.email, t.password, n);
                if (l.google2StepAuth) {
                    let r = !0;
                    for (; r;) {
                        const g = await h();
                        if (g) try {
                            await p.twoFa(g), r = !1
                        } catch (C) {
                            if (s.notify(C), C && C.code === 6005) throw new Error("")
                        } else throw new Error("")
                    }
                }
                b()
            } catch (n) {
                if (c(!1), !n) return;
                if (n.code === s.BC.ErrorCode.SELF_EXCLUSION) {
                    const l = n.message.split("|").pop();
                    S(l)
                } else s.notify(n);
                if (n.code === s.BC.ErrorCode.REMOTE_LOGIN) {
                    let l = !0;
                    for (; l;) {
                        const r = await W();
                        if (r) try {
                            await p.remoteEmailVerify(r), l = !1, b()
                        } catch (g) {
                            s.notify(g)
                        } else throw new Error("")
                    }
                }
            }
        };

        function b() {
            c(!1), s.app.emit("signin-success"), t.onEnd()
        }
        const S = async u => {
            const d = await s.http.get(`/account/self-exclusion/status/${u}/`),
                n = d.startTime + d.period * 30 * 864e5;
            m.push(e.jsx(F, {
                startTime: d.startTime,
                endTime: n
            }))
        };
        return w.useEffect(() => {
            t.autoLogin && t.email && t.password && (v(), t.autoLogin = !1)
        }, []), e.jsxs(A, {
            className: q,
            id: "login",
            title: i("Sign in"),
            children: [e.jsxs("form", {
                onSubmit: v,
                children: [y, e.jsx(s.InputPassword, {
                    tabIndex: 2,
                    value: t.password,
                    onChange: u => t.onChange({
                        password: u
                    }),
                    placeholder: i("Login Password"),
                    required: !0
                }), e.jsx("div", {
                    className: "forget-wrap",
                    children: e.jsx("div", {
                        className: "forget",
                        onClick: () => {
                            a("/forget")
                        },
                        children: i("Forgot your password?")
                    })
                }), e.jsx("div", {
                    className: "buttons",
                    children: e.jsx(s.Button, {
                        loading: o,
                        size: "big",
                        type: "conic",
                        children: i("Sign in")
                    })
                })]
            }), e.jsxs("div", {
                className: "newto-regist",
                children: [e.jsx("p", {
                    children: i("New to {{host}}?", {
                        host: s.env.host
                    })
                }), e.jsx("div", {
                    className: "r",
                    onClick: () => {
                        window.location.search.includes("type=iframe") ? a("/regist?type=iframe") : a("/regist")
                    },
                    children: i("Create account")
                })]
            })]
        })
    },
    q = "smamgpm";
export {
    ne as
    default
};