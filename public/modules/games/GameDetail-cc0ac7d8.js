var p = Object.defineProperty,
    l = Object.defineProperties;
var b = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty,
    x = Object.prototype.propertyIsEnumerable;
var u = (t, e, a) => e in t ? p(t, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: a
    }) : t[e] = a,
    s = (t, e) => {
        for (var a in e || (e = {})) h.call(e, a) && u(t, a, e[a]);
        if (r)
            for (var a of r(e)) x.call(e, a) && u(t, a, e[a]);
        return t
    },
    m = (t, e) => l(t, b(e));
import {
    _ as n,
    a as i
} from "./vendor-8c02be2a.js";
import {
    w as j
} from "./CommonI18nProvider-b34bf9d5.js";
import {
    d as q,
    c as w
} from "./context-07d48342.js";
import "./main-057d7723.js";
const c = j(t => {
        const {
            t: e
        } = n.useTranslation();
        return i.jsx(n.Dialog, {
            title: e("Bet Slip"),
            children: i.jsx(q, {
                gameUnique: t.gameUnique,
                children: i.jsx(y, s({}, t))
            })
        })
    }),
    d = new WeakMap;

function U(t) {
    if (t instanceof Promise) {
        const e = d.get(t);
        if (e) return e;
        throw t.then(a => d.set(t, a)), t
    }
    return t
}

function y({
    data: t,
    gameUnique: e,
    userName: a,
    userId: g,
    bigWin: f
}) {
    const o = w();
    return i.jsx(o.config.detailComponent, {
        data: U(t),
        gameUnique: e,
        game: o,
        userName: a,
        userId: g,
        bigWin: f
    })
}

function H(t) {
    n.dialog.push(i.jsx(c, s({}, t)))
}

function L(t) {
    n.dialog.push(i.jsx(c, m(s({}, t), {
        data: async function() {
            const e = await n.http.get(`/game/bet/v2/bet/${t.distributeId}`);
            return {
                betLog: (e == null ? void 0 : e.betLog) || [],
                seedHistory: (e == null ? void 0 : e.seedHistory) || {}
            }
        }()
    })))
}
export {
    c as
    default, H as openGameDetail, L as openGameDetailNodata
};