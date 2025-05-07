var S = Object.defineProperty,
    T = Object.defineProperties;
var A = Object.getOwnPropertyDescriptors;
var c = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty,
    N = Object.prototype.propertyIsEnumerable;
var d = (a, n, s) => n in a ? S(a, n, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: s
    }) : a[n] = s,
    m = (a, n) => {
        for (var s in n || (n = {})) f.call(n, s) && d(a, s, n[s]);
        if (c)
            for (var s of c(n)) N.call(n, s) && d(a, s, n[s]);
        return a
    },
    h = (a, n) => T(a, A(n));
var l = (a, n) => {
    var s = {};
    for (var e in a) f.call(a, e) && n.indexOf(e) < 0 && (s[e] = a[e]);
    if (a != null && c)
        for (var e of c(a)) n.indexOf(e) < 0 && N.call(a, e) && (s[e] = a[e]);
    return s
};
import {
    R as y,
    _ as o,
    a as r
} from "./vendor-8c02be2a.js";
import {
    c as F
} from "./index-66d88a57.js";
var B = globalThis["framer-motion"];
const I = y.memo(function(s) {
        var e = s,
            {
                name: a
            } = e,
            n = l(e, ["name"]);
        const i = `/coin/${o.systemStore.getAlias(a)}.black.png`;
        return r.jsx("img", m({
            className: "coin-icon",
            src: i
        }, n))
    }),
    L = ["+", ""];
y.memo(function(D) {
    var u = D,
        {
            name: a,
            amount: n,
            className: s,
            icon: e = !1,
            showName: i = !1,
            disableLocal: k = !1,
            sign: b = !1,
            signStrs: q = L
        } = u,
        j = l(u, ["name", "amount", "className", "icon", "showName", "disableLocal", "sign", "signStrs"]);
    const p = o.useLocalCurrency(),
        {
            localeCurrencyName: x
        } = o.useSetting(),
        {
            i18n: w
        } = o.useTranslation(),
        v = w.language,
        g = x.replace(/FIAT$/, ""),
        C = new Intl.NumberFormat(v, {
            style: "currency",
            currency: g
        });
    let t = p.amount2local(new o.Decimal(n), a).toNumber();
    return t = C.format(t).match(/\d+(\.\d+)?/g) + g, r.jsxs("div", h(m({
        className: F($, "coin", "notranslate", s, b && "has-sign")
    }, j), {
        children: [r.jsx("div", {
            className: "amount amount-str",
            children: t
        }), e && r.jsx(I, {
            name: a
        })]
    }))
});
const $ = "cjoqw9g";
export {
    I as C, B as f
};