import {
    _ as s,
    r
} from "./_bc_ui_share-16017657.js";
import {
    r as u
} from "./react_share-ba7e619d.js";
import {
    c as T
} from "./index-5bcb444f.js";
const w = function({
        noSend: m,
        autoSend: h,
        needBackCode: p,
        modifySuccessCb: o,
        email: c
    }) {
        const {
            t
        } = s.useTranslation(), [n, i] = s.useSetState({
            code: "",
            sending: !1,
            haveError: !1,
            endTime: 0,
            sendTimes: 0
        }), d = async () => {
            i({
                sending: !0
            });
            try {
                const a = {
                    codeType: "reCAPTCHA",
                    code: await s.requestRecaptcha("email")
                };
                c && (a.email = c), await s.http.post("/account/verify/email/send-code/", a), i({
                    sending: !1,
                    endTime: Date.now() + 6e4,
                    sendTimes: n.sendTimes + 1
                })
            } catch (e) {
                s.notify(e), i({
                    sending: !1,
                    sendTimes: n.sendTimes + 1
                })
            }
        }, v = async e => {
            const a = e || n.code;
            if (p) {
                o && o(a);
                return
            }
            try {
                await s.http.get(`/account/verify/email/verify-code/?code=${a}`) ? o && o(a) : s.notify(t("Verification code is invalid"))
            } catch (f) {
                s.notify(f), i({
                    haveError: !0
                })
            }
        };
        u.useEffect(() => {
            h && d()
        }, []);
        const y = n.endTime === 0 && !n.sending,
            l = n.haveError && !n.sending;
        return r.jsxs("div", {
            className: T(g, "verify-pcode-wrap", l && "error-wrap"),
            children: [r.jsx(s.BC.GoogleCode, {
                value: n.code,
                onChange: e => {
                    i({
                        code: e
                    }), e.length === 6 && v(e)
                },
                className: "verify-email-code"
            }), l && r.jsx("p", {
                className: "invalid",
                children: t("Verification code is invalid")
            }), !m && r.jsx("div", {
                className: "resend-wrap",
                children: y ? r.jsx("span", {
                    className: "g",
                    onClick: d,
                    children: n.sendTimes > 0 ? t("Resend") : t("Send")
                }) : r.jsx(s.Countdown, {
                    endTime: n.endTime,
                    onEnd: () => i({
                        endTime: 0
                    }),
                    children: ({
                        seconds: e
                    }) => r.jsxs("span", {
                        className: "gy",
                        children: [t("Resend"), e > 0 ? `(${e}s)` : ""]
                    })
                })
            })]
        })
    },
    g = "vsp5xzk";
export {
    w as V
};