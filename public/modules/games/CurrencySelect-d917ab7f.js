var X = Object.defineProperty,
    Z = Object.defineProperties;
var ee = Object.getOwnPropertyDescriptors;
var $ = Object.getOwnPropertySymbols;
var se = Object.prototype.hasOwnProperty,
    ne = Object.prototype.propertyIsEnumerable;
var G = (s, a, c) => a in s ? X(s, a, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: c
    }) : s[a] = c,
    d = (s, a) => {
        for (var c in a || (a = {})) se.call(a, c) && G(s, c, a[c]);
        if ($)
            for (var c of $(a)) ne.call(a, c) && G(s, c, a[c]);
        return s
    },
    C = (s, a) => Z(s, ee(a));
import {
    R as U,
    _ as n,
    a as e,
    r as v,
    l as A
} from "./vendor-8c02be2a.js";
import {
    c as D
} from "./index-66d88a57.js";
const ae = U.memo(function({
        localcurrency: s,
        setlocal: a,
        hideSmall: c,
        hideSmallBtn: r,
        setHideSmall: l
    }) {
        const {
            t: o
        } = n.useTranslation();
        return e.jsxs("div", {
            className: D(ce, "other-crypto"),
            children: [e.jsxs("div", {
                className: "switch",
                onClick: () => {
                    a(!s), s || n.pop.push(e.jsx(te, {}))
                },
                children: [e.jsx(n.Switch, {
                    value: s
                }), o("View in fiat")]
            }), !r && e.jsxs("div", {
                className: "switch hide-small",
                onClick: () => l(!c),
                children: [e.jsx(n.Switch, {
                    value: c
                }), e.jsx("div", {
                    className: "label",
                    children: o("Hide Small")
                })]
            })]
        })
    }),
    ce = "s8b744u",
    te = U.memo(function() {
        const {
            t: s
        } = n.useTranslation(), a = n.usePop(), c = n.useSetting(), r = v.useMemo(() => Object.values(n.env.localCurrencys).map(({
            label: l,
            value: o
        }) => ({
            label: l,
            value: o
        })), []);
        return e.jsx(n.Pop, {
            title: s("Information"),
            className: le,
            closeable: !0,
            children: e.jsxs(n.ScrollView, {
                children: [e.jsx("p", {
                    className: "fiat-sub-title",
                    children: s("Please note that these are currency approximations. All bets & transactions will be calculated in equivalent currencies. For more details feel free to contact our live support.")
                }), e.jsx("div", {
                    className: "fiat-list",
                    children: e.jsx(n.Radio, {
                        value: c.localeCurrencyName,
                        onChange: l => c.localeCurrencyName = l,
                        options: r,
                        children: re
                    })
                }), e.jsx(n.Button, {
                    type: "conic",
                    className: "confirm-btn",
                    onClick: () => a.close(),
                    children: s("Confirm")
                })]
            })
        })
    });

function re({
    active: s,
    option: a
}) {
    return e.jsxs("div", {
        className: "radio-item" + (s ? " is-active" : ""),
        children: [e.jsx("div", {
            className: "circle"
        }), e.jsx("div", {
            className: "l",
            children: a.label
        }), e.jsx(n.BC.CoinIcon, {
            name: a.label
        })]
    })
}
const le = "f1rpvee1";

function K(s) {
    const [a, c] = v.useState(""), {
        t: r
    } = n.useTranslation(), l = e.jsxs(n.Input, {
        value: a,
        onChange: c,
        className: `${ie} search-input`,
        placeholder: r("Search"),
        children: [e.jsx(n.Icon, {
            name: "Search",
            className: "search"
        }), a.length > 0 && e.jsx("button", {
            className: "clear",
            onClick: () => c(""),
            children: e.jsx(n.Icon, {
                name: "Close"
            })
        })]
    });
    if (s) {
        const o = function(h, x) {
            if (h.search(/[+()[\]*\\]/) != -1) return [];
            let u = h.replace(/\ +/g, "");
            return u.length === 0 ? x : (u = u.toLowerCase(), x.filter(m => {
                var j, S;
                return ((j = n.systemStore.getAlias(m.currencyName)) == null ? void 0 : j.toLocaleLowerCase().search(u)) > -1 || m.fullName && ((S = m.fullName) == null ? void 0 : S.toLocaleLowerCase().search(u)) > -1
            }))
        }(a, s);
        return {
            search: a,
            searchInput: l,
            searchList: o
        }
    }
    return {
        search: a,
        searchInput: l
    }
}
const ie = "s1iv0l7o";

function oe() {
    const [s, a] = v.useState(0), {
        isreverse: c,
        view: r
    } = function() {
        const [N, y] = v.useState(!1), {
            t: F
        } = n.useTranslation(), f = e.jsxs("div", {
            className: "sub-tit",
            children: [e.jsx("span", {
                children: F("My Favorite Coins")
            }), e.jsx("button", {
                onClick: () => y(!N),
                children: e.jsx(n.Icon, {
                    className: N ? "reverse" : "",
                    name: "ReverseOrder"
                })
            })]
        });
        return {
            isreverse: N,
            view: f
        }
    }(), {
        t: l
    } = n.useTranslation(), o = n.useWallet(), h = Object.values(o), x = h.filter(N => N.display), u = c ? h.concat().reverse() : h, m = c ? x.concat().reverse() : x, {
        search: j,
        searchList: S,
        searchInput: w
    } = K(s === 3 ? m : u);
    u[0].displayStatus;
    const B = v.useMemo(() => {
        const {
            chainList: N,
            fiatList: y,
            nftList: F
        } = function(f) {
            let R = [],
                O = [],
                I = [];
            for (let g = 0; g < f.length; g++) {
                const k = n.systemStore.getCurrency(f[g].currencyName).currencyType;
                k === "CHAIN" || k === "VIRTUAL" ? R.push(d({}, f[g])) : k === "FIAT" ? O.push(d({}, f[g])) : I.push(d({}, f[g]))
            }
            return {
                chainList: R,
                fiatList: O,
                nftList: I
            }
        }(u);
        return [{
            label: l("Crypto"),
            value: () => e.jsxs(e.Fragment, {
                children: [r, " ", e.jsx(M, {
                    isSet: !0,
                    list: N
                })]
            })
        }, {
            label: l("Fiat"),
            value: () => e.jsxs(e.Fragment, {
                children: [r, " ", e.jsx(M, {
                    isSet: !0,
                    list: y
                })]
            })
        }, {
            label: "mNFT",
            value: () => e.jsxs(e.Fragment, {
                children: [r, " ", e.jsx(M, {
                    isSet: !0,
                    list: F
                })]
            })
        }, {
            label: l("My Favorite"),
            value: () => e.jsxs(e.Fragment, {
                children: [r, " ", e.jsx(M, {
                    isSet: !1,
                    list: m
                })]
            })
        }]
    }, [u, m]);
    return e.jsx(n.Dialog, {
        title: " ",
        className: me,
        children: e.jsxs("div", {
            id: "currency-config",
            children: [e.jsx(n.DialogHeader, {
                children: w
            }), j ? e.jsx(M, {
                list: S,
                isSet: s != 3
            }) : e.jsx(n.Tabs, {
                tabs: B,
                value: s,
                onChange: a
            })]
        })
    })
}

function M({
    list: s,
    isSet: a
}) {
    return s.length === 0 ? e.jsx(n.Empty, {}) : e.jsx(n.ScrollView, {
        children: s.map(c => e.jsx(ue, {
            item: c,
            isSet: a
        }, c.currencyName))
    })
}
const ue = function({
        item: s,
        isSet: a
    }) {
        const c = n.useCurrencyConfig(s.currencyName),
            r = n.walletStore.state[s.currencyName],
            [l, o] = v.useState(r.display),
            h = c.currencyType === "MNFT";
        return a || r.display ? e.jsxs("div", {
            className: D("setitem", h && "mnft"),
            onClick: () => {
                o(!l)
            },
            children: [e.jsxs("div", {
                className: "coin-wrap",
                children: [e.jsx(n.BC.CoinIcon, {
                    name: s.currencyName
                }), e.jsx("div", {
                    className: "currency",
                    children: n.systemStore.getAlias(s.currencyName)
                })]
            }), e.jsxs("div", {
                className: "amount-wrap",
                children: [e.jsx("div", {
                    className: "full-name",
                    children: n.systemStore.getCurrency(s.currencyName).fullName || s.currencyName
                }), a && e.jsx(n.Switch, {
                    value: l,
                    onChange: () => {}
                })]
            })]
        }) : null
    },
    me = "s1tq2hfp",
    de = ["BCL", "BCD", "JB"],
    he = new Map([
        ["BCL", "#/about_ticketcoin"],
        ["BCD", "#/about_bcdcoin"],
        ["JB", "#/about_jbcoin"]
    ]);

function ye({
    name: s
}) {
    const a = n.useNavigate();
    return de.includes(s) ? e.jsx(n.Button, {
        className: xe,
        onClick: c => {
            a(he.get(s)), c.stopPropagation()
        },
        children: e.jsx(n.Icon, {
            className: "icon-help",
            name: "Inform"
        })
    }) : null
}
const E = function({
        item: s,
        currency: a,
        onChange: c,
        hover: r,
        showBonusAmount: l,
        isBonus: o,
        isReal: h
    }) {
        const {
            t: x
        } = n.useTranslation(), u = n.useSetting(), m = n.useCurrencyConfig(s.currencyName), j = n.env.specialCurrencys.has(s.currencyName), S = u.currencyFullName;
        let w = s.amount || new n.Decimal(0);
        h && (w = s.generalAmount || new n.Decimal(0)), o && (w = s.bonusAmount || new n.Decimal(0));
        const B = m.currencyType === "MNFT",
            N = w.todp(n.systemStore.getPrecision(s.currencyName), n.Decimal.ROUND_DOWN);
        let y = N.toString();
        return N.decimalPlaces() < 2 && (y = N.toFixed(2)), e.jsxs("div", {
            className: D(Ne, "currency-item", "notranslate", s.currencyName === a && "active", s.currencyName != a && r && "normal"),
            onClick: () => c(s),
            children: [e.jsx("div", {
                className: D("coin-wrap", B && "mnft"),
                children: e.jsx(n.BC.CoinIcon, {
                    name: s.currencyName
                })
            }), e.jsxs("div", {
                className: "name-wrap",
                children: [e.jsxs("div", {
                    className: "currency-name",
                    children: [n.systemStore.getAlias(s.currencyName), e.jsx(ye, {
                        name: s.currencyName
                    })]
                }), S && e.jsx("div", {
                    className: "full-name",
                    children: m.fullName || s.currencyName
                })]
            }), e.jsxs("div", {
                className: "amount-wrap",
                children: [e.jsxs("div", {
                    className: "amount-info",
                    children: [e.jsx(n.BC.CoinFormat, {
                        name: s.currencyName,
                        amount: w,
                        disableLocal: j,
                        className: "monospace"
                    }), l && s.bonusAmount.gt(0) && e.jsxs("div", {
                        className: "bonus-amount",
                        children: ["(", s.amount.lte(s.bonusAmount) ? x("Bonus") : e.jsxs(e.Fragment, {
                            children: [e.jsx(n.BC.CoinFormat, {
                                name: s.currencyName,
                                amount: s.bonusAmount,
                                disableLocal: j
                            }), " ", x("In Bonus")]
                        }), ")"]
                    })]
                }), !j && u.enableLocaleCurrency && e.jsx("div", {
                    className: "weaken monospace",
                    children: e.jsx("div", {
                        className: "amount",
                        children: y
                    })
                })]
            })]
        })
    },
    xe = "b1ccwloo",
    Ne = "c6666i4",
    fe = function(s) {
        const {
            t: a
        } = n.useTranslation(), c = n.useDialog(), r = n.useAccount(), l = n.useSetting(), o = function() {
            const i = n.useLocalCurrency(),
                L = n.useSetting();
            return function(b, p, V) {
                return p === "deposit" ? b : p === "withdraw" ? A.orderBy(b, [t => i.amount2local(t.amount, t.currencyName), t => t.sort], ["desc", "asc"]) : p === "fiat" ? A.orderBy(b, [t => t.currencyName === L.localeCurrencyName ? 0 : 1, t => i.amount2local(t.amount, t.currencyName), t => t.amount, t => t.currencyName === V ? 0 : 1, t => t.sort, t => t.currencyName], ["asc", "desc", "desc", "asc", "asc", "asc"]) : p === "real" ? A.orderBy(b, [t => i.amount2local(t.generalAmount, t.currencyName), t => t.sort], ["desc", "asc"]) : p === "bonus" ? A.orderBy(b, [t => i.amount2local(t.bonusAmount, t.currencyName), t => t.sort], ["desc", "asc"]) : A.orderBy(b, [t => i.amount2local(t.amount || 0, t.currencyName), t => t.amount, t => t.sort], ["desc", "desc", "asc"])
            }
        }(), h = n.useLocalCurrency(), {
            list: x,
            orderType: u,
            isSearch: m,
            openSet: j,
            currencyName: S
        } = s, w = v.useCallback(i => {
            l.enableLocaleCurrency = i
        }, []), B = l.hideSmallCurrency, N = v.useCallback(i => {
            l.hideSmallCurrency = i
        }, []);
        let y = j ? x.filter(i => i.display) : x;
        const F = s.orderType === "deposit";
        y = B ? y.filter(i => h.local2amount(i.amount, i.currencyName).gte(.5) || n.env.specialCurrencys.has(i.currencyName)) : y, y = u ? o(y, s.orderType) : y;
        const {
            search: f,
            searchInput: R,
            searchList: O
        } = K(x), I = v.useMemo(() => {
            const {
                chainList: i,
                fiatList: L,
                nftList: b
            } = function(p) {
                let V = [],
                    t = [],
                    z = [];
                for (let T = 0; T < p.length; T++) {
                    const _ = n.systemStore.getCurrency(p[T].currencyName).currencyType;
                    _ === "CHAIN" || _ === "VIRTUAL" ? V.push(d({}, p[T])) : _ === "FIAT" ? t.push(d({}, p[T])) : z.push(d({}, p[T]))
                }
                return {
                    chainList: V,
                    fiatList: t,
                    nftList: z
                }
            }(y);
            return [{
                label: a("Real Money"),
                disabled: !s.isModel && i.length === 0 && L.length === 0,
                value: () => e.jsx(H, C(d({}, s), {
                    openSet: !1,
                    isReal: !0,
                    list2: o(L, "real", r.bonusCurrencyName),
                    list: i
                }))
            }, {
                label: a("Bonus Money"),
                disabled: !s.isModel && i.length === 0 && L.length === 0,
                value: () => e.jsx(H, C(d({}, s), {
                    openSet: !1,
                    isBonus: !0,
                    list2: o(L, "bonus", r.bonusCurrencyName),
                    list: i
                }))
            }, {
                label: "mNFT",
                disabled: !s.isModel && b.length === 0,
                value: () => e.jsx(H, C(d({}, s), {
                    openSet: !1,
                    list: b
                }))
            }]
        }, [y]), [g, k] = v.useState((q = I.length, Y = S, J = n.systemStore.getCurrency(Y).currencyType, W = s.selectBonusTab, J === "MNFT" ? Math.max(q - 1, 0) : W ? 1 : 0));
        var q, J, W, Y;
        const Q = v.useCallback(i => {
            k(i), s.onChangeBonus && s.onChangeBonus(i === 1)
        }, [g]);
        return e.jsxs(e.Fragment, {
            children: [m && e.jsxs("div", {
                className: "search-head",
                children: [R, j && e.jsx(n.Button, {
                    onClick: () => {
                        c.push(e.jsx(oe, {}))
                    },
                    children: e.jsx(n.Icon, {
                        name: "AddSub"
                    })
                })]
            }), e.jsxs("div", {
                className: D(je, "search-dialog"),
                children: [f ? e.jsx(H, C(d({}, s), {
                    list: O
                })) : e.jsx(n.Tabs, {
                    tabs: I,
                    value: g,
                    onChange: Q
                }), e.jsx(ae, {
                    localcurrency: l.enableLocaleCurrency,
                    hideSmallBtn: F,
                    setlocal: w,
                    hideSmall: B,
                    setHideSmall: N
                })]
            })]
        })
    },
    H = U.memo(function(s) {
        const {
            t: a
        } = n.useTranslation(), c = n.useNavigate(), r = n.useIsMobile();
        if (s.openSet) {
            const l = s.list.filter(m => m.display),
                o = s.list2 ? s.list2.filter(m => m.display) : void 0,
                h = s.list.filter(m => !m.display),
                x = l.length === 0 && h.length === 0,
                u = e.jsxs(e.Fragment, {
                    children: [e.jsx(P, C(d({}, s), {
                        list: l,
                        list2: o
                    })), h.length > 0 && e.jsxs(e.Fragment, {
                        children: [e.jsxs("div", {
                            className: "hide-coin",
                            children: [a("Other Supported Coins"), e.jsxs("span", {
                                className: "sub-tit",
                                children: ["(", a("Click to add and use Coins"), ")"]
                            })]
                        }), e.jsx(P, C(d({}, s), {
                            list: h,
                            onClickOpen: !0
                        }))]
                    })]
                });
            return x ? e.jsxs(e.Fragment, {
                children: [e.jsx(n.Empty, {
                    children: a("Coin or token not found")
                }), e.jsxs("div", {
                    className: "go-swap",
                    children: [e.jsx(n.Button, {
                        type: "conic2",
                        onClick: () => c("/wallet/swap"),
                        children: a("Swap Coin")
                    }), e.jsx("div", {
                        className: "txt",
                        children: a("For unsupported coins and tokens, try the {{sitename}} Swap feature to exchange for supported coins and tokens", {
                            sitename: n.env.siteName
                        })
                    })]
                })]
            }) : s.isModel && !r ? e.jsx("div", {
                className: "currency-list",
                style: {
                    overflowY: "auto"
                },
                children: u
            }) : e.jsx(n.ScrollView, {
                className: "currency-list",
                children: u
            })
        }
        return s.list.length === 0 ? e.jsx(n.Empty, {
            children: a("Coin or token not found")
        }) : s.isModel && !r ? e.jsx("div", {
            className: "currency-list",
            style: {
                overflowY: "auto"
            },
            children: e.jsx(P, d({}, s))
        }) : e.jsx(n.ScrollView, {
            className: "currency-list",
            children: e.jsx(P, d({}, s))
        })
    });

function P(s) {
    const {
        t: a
    } = n.useTranslation();

    function c(r) {
        s.onChange(r.currencyName)
    }
    return s.list && s.list.length > 0 && s.list2 && s.list2.length > 0 ? e.jsxs(e.Fragment, {
        children: [e.jsxs("div", {
            className: "fiat-list",
            children: [e.jsx("div", {
                className: "list-tit",
                children: a("Fiat")
            }), s.list2.map(r => e.jsx(E, C(d({
                item: r
            }, s), {
                currency: s.currencyName,
                onChange: () => c(r)
            }), r.currencyName))]
        }), e.jsxs("div", {
            className: "fiat-list",
            children: [e.jsx("div", {
                className: "list-tit",
                children: a("Crypto")
            }), s.list.map(r => e.jsx(E, C(d({
                item: r
            }, s), {
                currency: s.currencyName,
                onChange: () => c(r)
            }), r.currencyName))]
        })]
    }) : e.jsx(e.Fragment, {
        children: s.list.map(r => e.jsx(E, C(d({
            item: r
        }, s), {
            currency: s.currencyName,
            onChange: () => c(r)
        }), r.currencyName))
    })
}
const je = "s525zhv";
export {
    E as C, fe as S
};