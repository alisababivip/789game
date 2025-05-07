var L = Object.defineProperty;
var f = Object.getOwnPropertySymbols;
var J = Object.prototype.hasOwnProperty,
    C = Object.prototype.propertyIsEnumerable;
var m = (a, r, o) => r in a ? L(a, r, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: o
    }) : a[r] = o,
    p = (a, r) => {
        for (var o in r || (r = {})) J.call(r, o) && m(a, o, r[o]);
        if (f)
            for (var o of f(r)) C.call(r, o) && m(a, o, r[o]);
        return a
    };
import {
    _ as b
} from "./chunk-cf010ec4.js";
import {
    ez as g,
    ds as c,
    am as I,
    a as j,
    dv as q,
    __tla as z
} from "./chunk-64278058.js";
import "./chunk-73e80d68.js";
let h, w, G = Promise.all([(() => {
    try {
        return z
    } catch (a) {}
})()]).then(async () => {
    let a, r;
    w = function() {
        const e = "G-B23BPN2TGE";
        return window.dataLayer = window.dataLayer || [], window.ga = function() {
            window.dataLayer.push(arguments)
        }, window.ga("js", new Date), window.ga("config", e, {
            send_page_view: !1
        }), g.loadScript(`https://www.googletagmanager.com/gtag/js?id=${e}`, "gtag"), (...t) => {
            window.ga(...t)
        }
    }(), a = () => b(() =>
        import ("./index.6705dbc2.js"), []).then(e => e.default), r = /^http/;
    let o = "",
        l = !0;
    const y = g.noSSR(async function({
            url: e,
            referrer: t = o,
            title: n = ""
        }) {
            if (!e || !l) return;
            const i = window.location.origin;
            o = e;
            const u = `${i}${e}`;
            let s = t;
            r.test(t) || (s = `${i}${t}`), c.SD_PROJECT && (await a()).quick("autoTrackSinglePage", {
                $url: u,
                $url_path: e,
                $referrer: s,
                $title: n
            }), w("event", "page_view", {
                page_title: n,
                page_location: u
            })
        }),
        _ = g.noSSR(async function(e, t = {}) {
            l && c.SD_PROJECT && (await a()).track(e, t)
        }),
        S = g.noSSR(async function() {
            return !c.SD_PROJECT || !l ? {} : (await a()).getPresetProperties()
        }),
        $ = g.noSSR(async function(e) {
            if (!c.SD_PROJECT || !l) return;
            const t = await S();
            (await a()).setOnceProfile(p({
                regist_utm_source: t.$latest_utm_source
            }, e))
        }),
        P = ["resizeobserver loop", "seed in use", "failed to start the audio device", "image load error!", "insufficient balance.", "refresh please.", "network error!"];

    function d(e, t = "") {
        if (!e || !e.message) return;
        if (t === "") {
            const s = e.stack && e.stack.split(`
`);
            if (s && s.length > 2) {
                const O = s[1].replace(/.*\//, "");
                t = `${s[s.length-1].replace(/.*\//,"")}->${O}`
            }
        }
        let n = e.message.toLowerCase();
        for (let s of P)
            if (n.search(s) !== -1) return;
        const i = e.tip;
        let u = e.message;
        i && (u += `[${i}]`), _("error_notification", {
            error_content: u,
            error_type: t,
            error_id: "0"
        })
    }

    function k() {
        globalThis.addEventListener("error", e => {
            let t = e.error,
                n = "";
            t || (t = new Error(e.message), n = `${e.filename.replace(/.*\//,"")}:${e.lineno}:${e.colno}`), n !== ":0:0" && d(t, n)
        }), globalThis.addEventListener("unhandledrejection", e => {
            if (!e.reason) return;
            let t = e.reason;
            typeof t == "string" && (t = new Error(t)), d(t)
        })
    }
    const v = I(async () => {
        const e = await a();
        return new Promise(t => {
            e.quick("isReady", function() {
                t(e.quick("getAnonymousID"))
            })
        })
    });
    async function E() {
        return c.isDev ? "dev-test" : (await a()).store.getDistinctId() || await v() || "empty_distinct_id"
    }
    async function T() {
        if (l = !0, c.SD_PROJECT) {
            const e = await a();
            e.init({
                server_url: `https://collect.analyse.lnearn.com/sa?project=${c.SD_PROJECT}`,
                show_log: !1,
                heatmap: {
                    clickmap: "not_collect"
                },
                source_channel: ["stag"],
                batch_send: !1
            });
            const t = new URLSearchParams(location.search),
                n = document.cookie.match(/utm_source=(.*?);/),
                i = n ? n[1] : "";
            !t.has("utm_source") && i && (document.cookie = "utm_source=;expires=Thu, 01 Jan 1970 00:00:01 GMT", t.set("utm_source", i), history.pushState(null, "", `${location.pathname}?${t.toString()}`), e.store.setProps({
                $latest_utm_source: i
            })), e.registerPage({
                lang: () => q.language,
                system_date: String(new Date().getTimezoneOffset() / -60)
            }), k()
        }
    }
    async function D({
        userId: e,
        level: t
    }) {
        const n = await a();
        n.login(String(e)), n.registerPage({
            level: () => Number(t)
        })
    }
    const R = {
        _profile_set_once: $,
        _login_user: D
    };
    j.on("track", (e, t) => {
        const n = R[e];
        n ? n(t) : _(e, t)
    }), h = {
        init: T,
        trackPageView: y,
        trackEvent: _,
        getDistinctId: E
    }
});
export {
    G as __tla, h as a, w as t
};