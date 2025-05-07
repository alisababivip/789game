var I = Object.defineProperty,
    B = Object.defineProperties;
var y = Object.getOwnPropertyDescriptors;
var p = Object.getOwnPropertySymbols;
var b = Object.prototype.hasOwnProperty,
    x = Object.prototype.propertyIsEnumerable;
var h = (e, n, s) => n in e ? I(e, n, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: s
    }) : e[n] = s,
    j = (e, n) => {
        for (var s in n || (n = {})) b.call(n, s) && h(e, s, n[s]);
        if (p)
            for (var s of p(n)) x.call(n, s) && h(e, s, n[s]);
        return e
    },
    N = (e, n) => B(e, y(n));
var v = (e, n) => {
    var s = {};
    for (var a in e) b.call(e, a) && n.indexOf(a) < 0 && (s[a] = e[a]);
    if (e != null && p)
        for (var a of p(e)) n.indexOf(a) < 0 && x.call(e, a) && (s[a] = e[a]);
    return s
};
import {
    _ as i,
    a as t,
    r as S
} from "./vendor-8c02be2a.js";
import {
    b as m,
    c as w
} from "./context-07d48342.js";
import {
    k,
    p as g,
    V as A,
    W as L,
    X as T,
    Y as W,
    Z as F
} from "./AllPlayers-fab6a982.js";
import {
    c as O
} from "./index-66d88a57.js";
import "./Coin-19c44f04.js";
const P = "cdu6fwi";

function z(e, n = 0) {
    const s = new i.Decimal(e).todp(n).toNumber().toString();
    let a = s.length;
    return s.includes(".") && a--, 10 * a + 12 + "px"
}
const E = "saokfa6",
    _ = {
        CoinInput: A,
        IncreaseInput: L,
        TimesInput: function(e) {
            const n = m(),
                {
                    autoBet: s,
                    isBetting: a
                } = n,
                {
                    t: o
                } = i.useTranslation();
            if (!s) return null;
            const {
                hideButtons: r,
                disabled: c = a,
                hideInfinite: d
            } = e, l = u => {
                n.autoBet && (n.autoBet.times = u)
            };
            return t.jsx(i.InputNumber, {
                label: o("Number of Bets"),
                className: "times-input",
                disabled: c,
                value: s.times,
                onChange: l,
                min: 0,
                precision: 0,
                placeholder: "0",
                bold: !0,
                formatter: u => u <= 0 && !d ? "∞" : String(u),
                children: !r && t.jsxs("div", {
                    className: "game-area-group-buttons",
                    children: [!d && t.jsx("button", {
                        onClick: () => l(0),
                        children: "∞"
                    }), t.jsx("button", {
                        onClick: () => l(10),
                        children: "10"
                    }), t.jsx("button", {
                        onClick: () => l(100),
                        children: "100"
                    })]
                })
            })
        },
        StopInput: function({
            isLose: e = !1
        }) {
            const {
                t: n
            } = i.useTranslation(), {
                currencyName: s,
                isBetting: a
            } = m(), o = w().getState().autoBet;
            if (!o) return null;
            const r = i.valtio.useProxy(o);
            return e ? t.jsx(g, {
                label: n("Stop on lose"),
                currencyName: s,
                value: r.stopOnLose,
                onChange: c => r.stopOnLose = c,
                disabled: a,
                placeholder: "0",
                min: 0,
                bold: !0
            }) : t.jsx(g, {
                label: n("Stop on win"),
                currencyName: s,
                value: r.stopOnWin,
                onChange: c => r.stopOnWin = c,
                disabled: a,
                placeholder: "0",
                min: 0,
                bold: !0
            })
        },
        LabelSelect: T,
        PayoutInput: function(e) {
            const [n, s] = S.useState(!1), a = m(), u = e, {
                disabled: o = a.isBetting,
                size: r,
                className: c,
                precision: d
            } = u, l = v(u, ["disabled", "size", "className", "precision"]);
            return t.jsxs(i.InputNumber, N(j({
                className: O(E, c, "payout-input"),
                disabled: o,
                size: r
            }, l), {
                bold: !0,
                precision: d,
                onFocus: () => s(!0),
                onBlur: () => s(!1),
                children: [!n && t.jsx("div", {
                    className: "xbet-flag",
                    style: {
                        left: z(e.value, d)
                    },
                    children: t.jsx("span", {
                        children: "X"
                    })
                }), t.jsxs("div", {
                    className: "payout-buttons",
                    children: [t.jsx("button", {
                        className: "sub-btn",
                        onClick: () => e.onChange(e.value - 1),
                        children: t.jsx(i.Icon, {
                            name: "Arrow"
                        })
                    }), t.jsx("button", {
                        className: "add-btn",
                        onClick: () => e.onChange(e.value + 1),
                        children: t.jsx(i.Icon, {
                            name: "Arrow"
                        })
                    })]
                })]
            }))
        },
        ChipInput: function({
            value: e,
            onChange: n,
            chips: s
        }) {
            const {
                t: a
            } = i.useTranslation(), o = m(), r = i.useWallet()[o.currencyName], c = o.currencyName.includes("FIAT"), d = t.jsxs("div", {
                className: "chip-label",
                children: [t.jsx("span", {
                    children: a("Chip value")
                }), t.jsx(i.BC.CoinFormat, {
                    name: o.currencyName,
                    amount: e.value,
                    icon: !0
                })]
            });
            return t.jsx(i.InputWrap, {
                label: d,
                className: P,
                children: t.jsxs("div", {
                    className: "chip-list",
                    children: [t.jsx(i.Button, {
                        className: "navigation-prev-chipbtn",
                        children: t.jsx(i.Icon, {
                            name: "Arrow"
                        })
                    }), t.jsx(i.Swiper, {
                        navigation: {
                            prevEl: ".navigation-prev-chipbtn",
                            nextEl: ".navigation-next-chipbtn"
                        },
                        threshold: 6,
                        slidesPerView: "auto",
                        className: "swiper",
                        slidesPerGroup: 3,
                        children: s.map((l, u) => {
                            const f = e.value.toNumber() === l.value.toNumber(),
                                C = l.value.gt(r.amount) || o.isBetting;
                            return t.jsx(i.Button, {
                                className: i.utils.classList("chip-item", f && "select"),
                                disabled: C,
                                onClick: () => n(l),
                                children: t.jsx(k, {
                                    chip: l,
                                    isFiat: c
                                })
                            }, u)
                        })
                    }), t.jsx(i.Button, {
                        className: "navigation-next-chipbtn",
                        children: t.jsx(i.Icon, {
                            name: "Arrow"
                        })
                    })]
                })
            })
        },
        SilderSelect: W,
        CopyInput: F
    };
export {
    _ as G
};