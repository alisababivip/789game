import {
    _ as s,
    r as t
} from "./_bc_ui_share-16017657.js";
import {
    R as g
} from "./react_share-ba7e619d.js";
import {
    a as l
} from "./apis-36b6ebea.js";
import {
    u as w,
    a as b,
    b as x,
    c as P,
    k as v
} from "./index-248f6d24.js";
import {
    S as _
} from "./SimplePage-e8c652de.js";
import "./md5-ba4a6ffc.js";
import "./___vite-browser-external_commonjs-proxy-558ed773.js";
import "./lodash_es_share-b99bc9c1.js";
import "./hmac-sha256-3d10b1b1.js";
import "./index-5bcb444f.js";
import "./framer_motion_share-695feab3.js";
import "./Enter-ad67eca9.js";
import "./index-76559910.js";
import "./main-03098ed6.js";
const H = g.memo(function() {
        const {
            t: a
        } = s.useTranslation(), c = w(), u = s.env.host === "bcgame.ke", d = b(), {
            isMobile: h,
            input: p
        } = x({
            onEnter: m,
            mobile: u ? !0 : void 0
        }), r = P();
        async function f() {
            var e;
            try {
                const i = ((e = r.areaCode) == null ? void 0 : e.areaCode) || "";
                let o = r.email;
                v.includes(s.env.host) && o.startsWith("0") && (o = o.substring(1));
                const n = await d(i, o);
                if (!n || !n.code) return;
                await l.handleResetPasswordPhone({
                    phone: `(+${i})${o}`,
                    password: n.password,
                    captcha: n.code
                }), s.notify(a("Password changed successfully."))
            } catch (i) {
                s.notify(i)
            }
        }
        async function y() {
            const e = await s.requestRecaptcha("reset_password");
            e && l.handleResetPassword(r.email, e).then(() => {
                s.notify(a("Email sent successfully. Please check your email to reset your password.")), c("/signin")
            }).catch(s.notify)
        }
        async function m() {
            try {
                h ? f() : y()
            } catch (e) {
                s.notify(e)
            }
        }
        return t.jsxs(_, {
            className: j,
            children: [t.jsx("p", {
                className: "sign-title",
                children: a("Reset Password")
            }), p, t.jsx("div", {
                className: "buttons",
                children: t.jsx(s.Button, {
                    size: "big",
                    type: "conic",
                    onClick: m,
                    children: a("Reset Password")
                })
            }), t.jsxs("div", {
                className: "have-account",
                children: [t.jsx("p", {
                    children: a("Already have an account?")
                }), t.jsx("p", {
                    className: "r",
                    onClick: () => {
                        c("/signin")
                    },
                    children: a("Sign in")
                })]
            })]
        })
    }),
    j = "f1kd1gv6";
export {
    H as
    default
};