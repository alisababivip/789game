import {
    _ as t,
    r as s
} from "./_bc_ui_share-16017657.js";
import {
    r as i
} from "./react_share-ba7e619d.js";
import {
    c as S
} from "./index-5bcb444f.js";
import {
    c as L,
    u as q,
    d as z,
    e as D,
    f as W,
    g as F,
    b as G,
    h as H,
    C as U,
    k as V
} from "./index-248f6d24.js";
import {
    a as _
} from "./apis-36b6ebea.js";
import {
    S as Y
} from "./SimplePage-e8c652de.js";
import "./framer_motion_share-695feab3.js";
import "./lodash_es_share-b99bc9c1.js";
import "./Enter-ad67eca9.js";
import "./index-76559910.js";
import "./___vite-browser-external_commonjs-proxy-558ed773.js";
import "./main-03098ed6.js";
import "./md5-ba4a6ffc.js";
import "./hmac-sha256-3d10b1b1.js";
const le = () => {
        var j;
        const {
            t: e
        } = t.useTranslation(), a = L(), f = q(), E = i.useRef(null), m = z(), g = D(), p = W(), [b, o] = i.useState(!1), [N, h] = i.useState(!1), [I, x] = i.useState(""), [v, k] = i.useState(0), [n, R] = i.useState(!1), M = F(), {
            input: T,
            isMobile: l
        } = G({
            mobile: v === 1 || t.env.host === "bcgame.ke",
            registEmail: v === 0
        }), A = H();
        i.useEffect(() => {
            t.app.emit("ad_track", "regist_page")
        }, []), i.useEffect(() => {
            h(!1)
        }, [a.email, v]), i.useEffect(() => {
            const c = window.location.search;
            R(c.includes("type=iframe"))
        }, []);
        const $ = async function(c) {
                var C;
                if (c && c.preventDefault(), !b) {
                    if (!l && a.email && a.email.includes("@partner.bc.game")) {
                        t.notify(e("Invalid email address"));
                        return
                    }
                    if (o(!0), !g.checked && !n) return t.notify(new Error(e("Please consent to our user agreement"))), o(!1), g.showError(), !1;
                    if (!a.password || a.password.length < 6) return t.notify(new Error(e("Password length should not be less than 6 characters"))), o(!1), !1;
                    try {
                        t.app.emit("track", "sign_click", {
                            sign_type: l ? "phone" : "email",
                            sign_input: a.email
                        });
                        const r = window.localStorage.getItem("before-user-login-type") || "";
                        if (l) {
                            const d = ((C = a.areaCode) == null ? void 0 : C.areaCode) || "";
                            let u = a.email;
                            V.includes(t.env.host) && u.startsWith("0") && (u = u.substring(1));
                            const y = await A(d, u, m.invitcode, w => {
                                    x(e(w === 4103 || w === 4104 ? "Sorry, our services are not available in your area." : w === 4001 ? "The number you entered is wrong." : "This number cannot be used for registration.")), h(!0)
                                }),
                                P = y == null ? void 0 : y.code;
                            if (!P) return o(!1), !1;
                            await _.handleRegistPhone({
                                phone: `(+${d})${u}`,
                                captcha: P,
                                password: a.password,
                                acceptPromotion: p.checked,
                                invitationCode: m.invitcode,
                                userGroup: r
                            })
                        } else {
                            const d = await t.requestRecaptcha("regist");
                            await _.handleRegist(a.email, a.password, m.invitcode, p.checked, r, d)
                        }
                        a.onEnd(), o(!1), n && window.parent.postMessage({
                            target: "bc-login",
                            data: {
                                type: "signup",
                                code: 200
                            }
                        }, "*")
                    } catch (r) {
                        o(!1), r.code === 5801 ? await M(e("Looks like you have already registered. Please sign in.")) && f("/signin") : r.code > 4e3 && r.code < 5e3 ? (h(!0), x(r.code === 4103 || r.code === 4104 ? e("Sorry, our services are not available in your area.") : r.code === 4001 ? e("The email you entered is wrong.") : r.msg || e("This email cannot be used for registration."))) : t.notify(r)
                    }
                }
            },
            B = ((j = a.areaCode) == null ? void 0 : j.countryCode) !== "BR" && t.env.host !== "bcgame.ke";
        return s.jsxs(Y, {
            className: `${J} ${n?"regist-iframe":""}`,
            id: "regist",
            children: [s.jsx("p", {
                className: "sign-title",
                children: e(n ? "Create Your Account" : "Sign up")
            }), B && s.jsxs("div", {
                className: "reg-type",
                children: [s.jsx("div", {
                    className: S("type-btn", !l && "active"),
                    onClick: () => k(0),
                    children: s.jsx("span", {
                        children: e("Email")
                    })
                }), s.jsx("div", {
                    className: S("type-btn", l && "active"),
                    onClick: () => k(1),
                    children: s.jsx("span", {
                        children: e("Phone Number")
                    })
                })]
            }), s.jsxs("form", {
                onSubmit: $,
                autoComplete: "off",
                children: [T, N && s.jsx("p", {
                    className: "regist-error",
                    children: I
                }), s.jsx(t.InputPassword, {
                    tabIndex: 2,
                    value: a.password,
                    onChange: c => a.onChange({
                        password: c
                    }),
                    placeholder: e("Login Password"),
                    required: !0
                }), s.jsx(U, {
                    str: a.password
                }), m.node, n ? s.jsxs("div", {
                    className: "hidden",
                    children: [g.node, p.node]
                }) : s.jsxs(s.Fragment, {
                    children: [g.node, p.node]
                }), s.jsx("div", {
                    className: "buttons",
                    children: s.jsx(t.Button, {
                        ref: E,
                        type: "conic",
                        size: "big",
                        loading: b,
                        children: e(n ? "Sign Up & Spin now" : "Sign up")
                    })
                })]
            }), s.jsxs("div", {
                className: "have-account",
                children: [s.jsx("p", {
                    children: e("Already have an account?")
                }), s.jsx("div", {
                    className: "r",
                    onClick: () => {
                        f(n ? "/signin?type=iframe" : "/signin")
                    },
                    children: e("Sign in")
                })]
            })]
        })
    },
    de = () => ({
        documentProps: Promise.resolve({
            title: "Register Page",
            keywords: " ",
            description: " "
        })
    }),
    J = "s15zywit";
export {
    le as
    default, de as onPageData
};