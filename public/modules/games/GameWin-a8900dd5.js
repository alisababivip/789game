import {
    _ as i,
    r as u,
    a as e
} from "./vendor-8c02be2a.js";
import {
    f as d
} from "./Coin-19c44f04.js";
import {
    _ as m
} from "./AllPlayers-fab6a982.js";
const f = "/modules/games/bigwin-49fcd839.json";

function l({
    profitAmount: t,
    currencyName: n,
    odds: o,
    style: r,
    enableSound: s
}) {
    u.useEffect(() => {
        s && i.app.emit("playsound", "win")
    }, []);
    const {
        currency: a
    } = i.useSystem(), c = a[n].precisionUnit;
    return e.jsxs(d.motion.div, {
        style: r,
        className: `${x} win-wrap`,
        children: [e.jsx(i.BC.CoinFormat, {
            amount: t.todp(c),
            name: n,
            icon: !0
        }), e.jsxs("div", {
            className: "odds",
            children: [o, "×"]
        })]
    })
}

function p({
    profitAmount: t,
    currencyName: n,
    odds: o,
    style: r,
    enableSound: s
}) {
    const a = u.useRef(null);
    return u.useEffect(() => {
        var c;
        try {
            (c = a.current) == null || c.play(1)
        } catch (N) {}
    }, []), e.jsx("div", {
        className: j,
        style: r,
        children: e.jsxs("div", {
            className: "wrap",
            children: [e.jsxs("div", {
                className: "bigwin-box",
                children: [e.jsx("img", {
                    src: m,
                    alt: ""
                }), e.jsx(i.Lottie, {
                    className: "bigwin-lottie",
                    ref: a,
                    path: f
                })]
            }), e.jsx(l, {
                profitAmount: t,
                currencyName: n,
                odds: o,
                enableSound: s
            })]
        })
    })
}

function y({
    profitAmount: t,
    odds: n,
    currencyName: o,
    isBigWin: r = !1,
    enableSound: s = !0
}) {
    return r ? e.jsx(p, {
        profitAmount: t,
        odds: n,
        currencyName: o,
        enableSound: s
    }) : e.jsx(l, {
        profitAmount: t,
        odds: n,
        currencyName: o,
        enableSound: s
    })
}

function g(t = y) {
    const n = i.useMountedState(),
        [o, r] = u.useState(null);
    return [e.jsx(d.AnimatePresence, {
        children: o
    }), s => {
        n() && r(s ? t(s) : null)
    }]
}
const x = "g68863u",
    j = "g4r1khk";
export {
    g as u
};