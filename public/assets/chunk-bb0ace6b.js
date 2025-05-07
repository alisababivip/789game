var u = Object.defineProperty;
var l = (i, e, t) => e in i ? u(i, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : i[e] = t;
var n = (i, e, t) => (l(i, typeof e != "symbol" ? e + "" : e, t), t);
import {
    cE as g,
    dl as o,
    a as r,
    ez as h,
    ds as m,
    du as p,
    dv as c
} from "./chunk-64278058.js";
import "./chunk-73e80d68.js";
import "./chunk-7a9ca7ff.js";
class v extends g {
    constructor(t) {
        super();
        n(this, "inited");
        n(this, "_isOpen", !1);
        n(this, "options");
        n(this, "activeSupport", () => {});
        n(this, "preInited", new Promise(t => this.activeSupport = t));
        this.options = t, o.waitLogin().then(async () => {
            await this.inited, this.onLogin()
        }), r.on("live_support", async (s = !0) => {
            s && await this.getPayment(), this.openLiveSupport(s)
        }), this.inited = this.preInited.then(() => this.init(t))
    }
    get isOpen() {
        return this._isOpen
    }
    set isOpen(t) {
        this._isOpen = t, this.emit("isOpen", t)
    }
    async openLiveSupport(t = !this.isOpen) {
        t && (r.emit("ad_track", "assistance_requested"), await this.getPayment()), this.activeSupport(), this.isOpen = t, await this.inited, this.toggle(t)
    }
    async sendLiveSupport(t) {
        this.activeSupport(), await this.inited, this.isOpen || this.toggle(!0), this.sendMsg(t)
    }
}

function w() {
    return p.get("/user/intercom/hash/")
}
const y = h.timeMemoize(function() {
    const {
        isBrHost: i
    } = h.getHostType(m.host), e = i ? "BRLFIAT" : "INRFIAT";
    return p.post("/payment/order/list/", {
        currencyName: e
    })
}, {
    timeout: 6e5
});
let a = null;
class _ extends v {
    constructor(e) {
        super({
            id: e
        }), r.on("live_support_order", t => {
            (a == null ? void 0 : a.OrderId) !== t.OrderId && (a = t, this.exec("update", t))
        })
    }
    async init() {
        var e = window,
            t = function() {
                t.c(arguments)
            };
        t.q = [], t.c = function(s) {
            t.q.push(s)
        }, e.Intercom = t, await h.loadScript(`https://widget.intercom.io/widget/${this.options.id}`), this.exec("onHide", () => this.isOpen = !1), this.exec("onShow", () => this.isOpen = !0), this.exec("boot", {
            hide_default_launcher: !0,
            app_id: this.options.id,
            Level: 0,
            language_override: c.language
        })
    }
    async getPayment() {
        if (o.state.login) try {
            const e = await y(),
                t = e && e.length > 0;
            this.exec("update", {
                verifyINR: t,
                INRverify: t,
                INRverify2: t ? 1 : 0
            })
        } catch (e) {}
    }
    async onLogin() {
        const {
            appId: e,
            name: t,
            userId: s,
            userHash: d
        } = await w();
        this.exec("shutdown"), this.exec("onHide", () => this.isOpen = !1), this.exec("onShow", () => this.isOpen = !0), this.exec("boot", {
            hide_default_launcher: !0,
            app_id: e,
            name: s,
            user_id: s,
            email: "",
            Level: o.state.vipLevel,
            L: o.state.vipLevel,
            created_at: Date.now(),
            user_hash: d,
            language_override: c.language,
            INRverify: !1
        }), this.isOpen && this.exec("show")
    }
    sendMsg(e) {}
    async toggle(e) {
        this.exec(e ? "show" : "hide")
    }
    async exec(...e) {
        await this.inited, window.Intercom(...e)
    }
}

function x() {
    var e;
    const i = (((e = globalThis.location) == null ? void 0 : e.host) || "").includes("stage") ? "i5ulmyr4" : "t87ss9s4";
    return i ? new _(String(i)) : null
}
const O = x();
export {
    O as l
};