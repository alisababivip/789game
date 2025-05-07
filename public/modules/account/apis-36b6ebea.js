var f = Object.defineProperty,
    A = Object.defineProperties;
var P = Object.getOwnPropertyDescriptors;
var h = Object.getOwnPropertySymbols;
var m = Object.prototype.hasOwnProperty,
    y = Object.prototype.propertyIsEnumerable;
var w = (t, e, n) => e in t ? f(t, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : t[e] = n,
    g = (t, e) => {
        for (var n in e || (e = {})) m.call(e, n) && w(t, n, e[n]);
        if (h)
            for (var n of h(e)) y.call(e, n) && w(t, n, e[n]);
        return t
    },
    l = (t, e) => A(t, P(e));
var d = (t, e) => {
    var n = {};
    for (var o in t) m.call(t, o) && e.indexOf(o) < 0 && (n[o] = t[o]);
    if (t != null && h)
        for (var o of h(t)) e.indexOf(o) < 0 && y.call(t, o) && (n[o] = t[o]);
    return n
};
import {
    m as i
} from "./md5-ba4a6ffc.js";
import {
    l as T
} from "./lodash_es_share-b99bc9c1.js";
import {
    _ as a
} from "./_bc_ui_share-16017657.js";
import {
    h as C
} from "./hmac-sha256-3d10b1b1.js";
const $ = {
    async getUserInfo() {
        return a.http.get("/account/get/")
    },
    async handleLogin(t, e, n) {
        const {
            t1: o,
            t2: r
        } = await a.wrUtils(), s = window.navigator.userAgent;
        let {
            random: c
        } = await a.http.post(`/account/login-pre/?p=${o(s)}`);
        const p = Date.now(),
            u = {
                loginName: t,
                password: String(C(String(i(e)), p.toString())),
                timestamp: p,
                random: r(c, s),
                codeType: "reCAPTCHA",
                code: n || "test"
            };
        return await a.http.post("/account/login/", u)
    },
    async getSignMsg() {
        return a.http.get("/account/wallet/login/message/")
    },
    async handleLoginSign(t) {
        const e = await a.http.post("/account/wallet/login/varify/", t);
        return a.app.emit("signin-success"), e
    },
    async handleRegist(t, e, n, o, r, s) {
        e = String(i(e));
        let c = {
            email: t,
            password: e,
            invitationCode: n,
            acceptPromotion: o,
            userGroup: r
        };
        c.codeType = "reCAPTCHA", c.code = s || "test", await a.http.post("/account/regist/", c), a.app.emit("regist-success")
    },
    async twoFa(t) {
        return a.http.post("/account/google/2-step-auth/code-2verify/", {
            code: t
        })
    },
    async innerTwoFa(t) {
        return a.http.get(`/account/verify/2fa/verify-code/?code=${t}`)
    },
    async resetTwoFa() {
        return a.http.post("/account/google/2-step-auth/recovery/")
    },
    async handleResetPassword(t, e) {
        return a.http.post("/account/password/recovery/login/", {
            email: t,
            codeType: "reCAPTCHA",
            code: e
        })
    },
    async handleResetPasswordPhone(t) {
        return t.password = String(i(t.password)), a.http.post("/account/phone/password/reset/", t)
    },
    async handleChangePhone(t) {
        return a.http.post("/account/phone/changePhone/", t)
    },
    async handleLoginPhone(t, e, n) {
        const {
            t1: o,
            t2: r
        } = await a.wrUtils(), s = window.navigator.userAgent.trim();
        let {
            random: c
        } = await a.http.post(`/account/login-pre/?p=${o(s)}`);
        const p = String(Date.now()),
            u = {
                phone: t,
                password: String(C(String(i(e)), p)),
                timestamp: p,
                random: r(c, s),
                codeType: "reCAPTCHA",
                code: n || "test"
            };
        return a.http.post("/account/phone/login/", u)
    },
    async handleRegistPhone(t, e = !1) {
        t.password = String(i(t.password));
        const n = e ? "/account/whatsapp/register/" : "/account/phone/regist/";
        await a.http.post(n, g({}, t)), a.app.emit("regist-success")
    },
    async handleGetPhoneCaptcha(o, n = !1) {
        var r = o,
            {
                invitationCode: t = ""
            } = r,
            e = d(r, ["invitationCode"]);
        const s = n ? "/account/whatsapp/captcha/" : "/account/phone/captcha/";
        return a.http.post(s, l(g({}, e), {
            invitationCode: t,
            codeType: "reCAPTCHA"
        }))
    },
    async handleGetWhatsappCaptcha(n) {
        var o = n,
            {
                invitationCode: t = ""
            } = o,
            e = d(o, ["invitationCode"]);
        return a.http.post("/account/whatsapp/send/", l(g({}, e), {
            invitationCode: t,
            codeType: "reCAPTCHA"
        }))
    },
    handleGetArea: T.once(async () => a.http.post("/account/phone/get/area/")),
    getUrlParam(t) {
        const e = new RegExp("(^|&)" + t + "=([^&]*)(&|$)"),
            n = window.location.search.substr(1).match(e);
        return n != null ? decodeURIComponent(n[2]) : null
    },
    async remoteEmailVerify(t) {
        return a.http.post("/account/verify/email/login/", {
            code: t
        })
    }
};
export {
    $ as a
};