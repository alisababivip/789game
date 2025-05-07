var _ = Object.defineProperty;
var $ = (a, e, t) => e in a ? _(a, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : a[e] = t;
var m = (a, e, t) => ($(a, typeof e != "symbol" ? e + "" : e, t), t);
import {
    _ as r,
    a as s,
    r as c,
    l as ee,
    R as H
} from "./vendor-8c02be2a.js";
import {
    q as te,
    I as se,
    s as O,
    K as ne,
    p as ae,
    r as ie,
    t as le,
    u as re,
    v as oe,
    w as Ae,
    d as ce,
    x as ue,
    y as he,
    o as ge,
    $ as R,
    z as me
} from "./AllPlayers-fab6a982.js";
import {
    c as I
} from "./index-66d88a57.js";
import {
    c as N,
    b as f
} from "./context-07d48342.js";
import {
    f as de
} from "./Coin-19c44f04.js";
import {
    G as be
} from "./GameCard-2d619a3b.js";
import {
    A as fe
} from "./GameAutoTips-8fe2ab8a.js";
import {
    G as j
} from "./index-f3bd3ea1.js";
import {
    g as we
} from "./namespace-3892e441.js";
import "./CommonI18nProvider-b34bf9d5.js";
import "./main-057d7723.js";
import "./GameDetail-cc0ac7d8.js";
import "./react_router-dom_share-62544329.js";
import "./Share-8d7f396d.js";
const pe = ({
        gameInfo: a
    }) => {
        const {
            t: e
        } = r.useTranslation();
        return s.jsx(r.Dialog, {
            title: e("What Game Is This?"),
            children: s.jsx(te, {
                children: s.jsxs("div", {
                    className: "item",
                    children: [s.jsx("h2", {
                        children: e("What Is {{gamename}}?", {
                            gamename: a.fullName
                        })
                    }), s.jsx("div", {
                        className: "content",
                        children: a.details.split(`
`).map((t, n) => s.jsx("p", {
                            children: `${t}`
                        }, n.toString()))
                    }), a.slotsInfo && a.slotsInfo.rtpDes && s.jsxs(s.Fragment, {
                        children: [s.jsx("h2", {
                            children: e("What is the {{gamename}} return rate?", {
                                gamename: a.fullName
                            })
                        }), s.jsx("div", {
                            className: "help-content",
                            children: s.jsx("p", {
                                children: e("RTP (Return to Player) is {{rtp}}%.", {
                                    rtp: a.slotsInfo.rtpDes
                                })
                            })
                        })]
                    })]
                })
            })
        })
    },
    Z = "/modules/games/sider-43b9ea10.svg",
    p = {
        icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFkAAABZCAMAAABi1XidAAABYlBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////09PT29vb39/f+/v4vKyv8/f0MBwcHAgISDg76+voxLS0uKioWEhK8u7sAAAD5+fkpJSUrJyf7+/shHR3x8fHn5+erqakmISEeGRkQCwsOCQnh4ODFxMScm5uGhIR4dnZdWlo9OTkYFBTs7Ozp6enk4+PT0tLLy8u2tbWOjIyCgIB9enpzcHBqZ2dWU1NST09KR0dEQUE4NDTv7u7e3d3R0NCzsbGlpKSTkZGLiYlhXl4aFhbY2NjU09Omo6Oko6OjoKCXlZWVk5NRTU1qgZDgAAAAMXRSTlMA8Gqy8uHbv6WEXDnoyHRiLiQXEQv6+PbQq6CLfW1nSEIoHwrYuJpYVD30rZORTDUPgPGvxwAAA1VJREFUWMPtmFlT2lAYhmPRAlq3qnWt2trN7m/2BEgCiIDgvu/7rt37/5v0gGkKaBJOLzqThwuWi2feeec7zPnCBAQEBAT8SedQf2S4m6FP+zOYPB+l7R1tRYnIE5reJxHY9ESpVdId7YGDZ6/oiJvvo4JQR/3eDyFU49FgV33eh29Ri6bhesT3HuAWWkf8ekdacQf9viawox938yja5bngQQEWJ7Nbc7nJCqO+uXWxTupu9yYeLhU8OyWrBTk+AwfZ/WJRldUdHhbhFvfeljAIM/KSKIoJOe5MfWWkzZ/zxiYI7z66FLehzIaRF020zLLDfGCIJmlj+2YC3cVuthXJeUXWVEX7CgfrCUXVCspBFmUan7oQdzlmWJ9fuJr7jL9Y/rG7sHsuwGbAhfkl/PDAhfkxMMHxErzR6OZEQ2BNYvBEgyuzxFpw0r8wE3iJvrlMkrJZsLowX9bbBGUzgSOVUDVzJDNHKhFoZ7bdt1eif5/2ntlFJSt7qrF47C8zd1sly4tKKrV06jMzx9Y+lPNKPK4tcr4zc7UO5Up6Kp5Rcj57tmNXqrMZpShfAvVk5qoXkjtc0OHZPAGUPpfUSUrzHJNymxs8ePYGno45iW2loB3qiJW81DJjOp8R05r6DTy9zNxv80k6n0iImaKO6ubV7b2cL7MU+6mKiURcPZqUqpn1vKwsffJjZnEmp0x1Qj5HFfPptSamptZ8mWPYUdJiQpTnwVeYhQU5Hi/uC77MLLCrLKVSxiW4CvNKKiOqZmTv5pJ69ui6cLhapWf2wLCuqJ7Mj20zK2FS32Crzsb03OwxbBpdmWGZS8Ck5hn0aG4BYpNs6e+OQL7cau5jXBAy1U4ld3fmdlcrShMgWXPmIXPE5fbzBtZ9tGbm7NzeF+eGNeRp1bYrsTOXb/yyuuZ3CR+L9tqVcI7ZmE6roqjZo3z/JeONzgGYbq4y8455rNXFcuW9Q92MZ0bDAJJEbWfmj6ZEraCDMNDJ+KK9CRB4pzm2byipM+INjzN+6RrsASRnz6tbF1lScDNTDx0hawKrnJTX0TGmTt73kSlxmiOdDAXaGojbNveNMHR4+gJAjCtf7BrbGHqMhwEBhBf2jk312drzFoY2Y22tvQ2hV0xAQEDA/8cvohoDRnxh0b0AAAAASUVORK5CYII=",
        center: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAGCAYAAADUtS5UAAAAAXNSR0IArs4c6QAAAH1JREFUKBVjvHr1KtvPnz+bGP7/j2MAAUbGRezs7HXa2tq/wHw0glrqWaCWlsPN//+/HCgG4lbAxZAY1FLPBPcpkuFYxWDysJCB8UE0NjGYPDY5oBgTTJ7eNBMoTjEsxSYGU4RNDpsYAfUsoIQEjlNYkAANAYnB9KHT1FIPAOiAaX72x7l3AAAAAElFTkSuQmCC",
        left: Z,
        right: Z,
        win: "/modules/games/win-449738f6.png",
        win_w: "/modules/games/win_w-62dc31a7.png",
        dice: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALUAAAC4CAMAAACSE11FAAAAyVBMVEUAAADl7/LQ3+f////////9/f3l7+/////////////P3ufL4N/o8PX////////R2+To8PX////R3efl7/LP3uf////////R3ebR3ujL3+jo8PXl7/Tj6/D////Q3+jQ2+X+///////////u8/fo8fbn8PT////T5enp8PXP3uf////////////n7/Tm7/Tk7/Hl7/Ta5Oz////Q3+fR3ufo8PX////8/f7r8vX0+Pnw9vjd5+7T4On3+vvk7PLX4+v6/P3o7vLt9PYPcF8lAAAANHRSTlMAYL7fIBAgf0Dv7hDfv59A/l++oN6Pb39wIN6AUL6ej8+gYFTPrzAw786unpCQj3BA7q+uolX2QAAABCZJREFUeNrtnely2jAURtUaY5OENE0CWVhKyNrsbY2wgQDh/R+qTqZEgLFkpIzu1fSeJzjjOfNd8QtGEERRwvpux6tW70PmDH5Q4XO83RJzgq7HlwgYfsIqX8X7znDjn/F1dDBnIoLOgDfv0OP5eHWGkauVoF3I269xgSuZ1Cu8EDVE3otBu5JJqco3wcNw5f2AL+FE3mnQGgQ+AyN7vl3Iu/Sb6+NBZJI9307k3fW4KZWAqUASNFze4j1qTkuSCa6gIfIOtYIGeMNK3qMu5L30HnUlE73zDfuGDTt8CRcyUb9Hzb2vGGOI185O3t0Kt0SA7Xxbzbt0xu3ilVwJ+nPzPvc4BF7gStCreWM738W41coEIOhM3uDvUb1MsJ3vgt7nrgStl8k5eNAaRz7g2LjzHZTmvMUU1DlGaorxQNb0nJDJOON8mgwGL32OhOR1/Drg3JN+aj6d9d4ZoPAeTKI3JjGX3Zv7adz7R/zCoUmG0ZxxS2LdiXuCeMoh6Y+jBeL89fMHc2P4TOJRtMgo/7SHvVUSDkMyiVY4Znk0hS5o3tNhlKHN8vjSW8PMdib911GU5avaGjLvmYhDwxogE7F2GtYQ3mLtNK0BMhFrZ2ptcQXF2ulbA2Qi1s7U2tIKirUztbae90w461iriSV5m6ydubWtvMXamVvbzUQEbWqtJrGwdrrW6kzM186OtfDuG69dFFm0Fnkbrh2AtVhB3bUDsBZ5a64diLXIROt8A1kLkv7mawdvLTIpunYorMUKFgoajXXRvONRhMo6zbvQ2mGzVuU9TeNAaC0yyVk7pNbCe93a4bUWmawGjdo69Z6uWTv01h+ZiLVzwjpdwaU4XLFO8/443w5Zv2XyvnaOWfd6s3TtnLNOl8NB65GL1sPIReuJk9YRWZM1WZM1WZM1WZM1WZM1WZM1WZM1WZM1WZM1WZM1WZM1WZM1WZM1Wf9X1k0nrcuIrX+wXG7wWn9juTyhtT5kEi6RWm+dMAn+A0rrw2sm58sOPuujbaakcYPLev+EFaF8gMj6UIyH0nsHifXWEcsgzRuDdXubbUb5Adx6fyUOC3mbx9FkAluZGAe9zbRpaHt/3trZzMTG2n3+ChrEccwy2Mpb/yEtgjbDb2ham6+d5bz1gm4yAUQmdtZOzdNG3mZrB5CJlvVPSdCm3hca1nprB5M3xNqZr6D52kHkDbB2CpoFMoFaO3Xe5tZ/FGtnOxOgtVOv4J7MGnztcjM5lVjDr10ujT1d6/1rBkf5IM9b9WMFlufT9d5Y1k6ed3Hr9gnDwNpMJOcbC+XLjDeqtSucCbK1K7iCozVx4AhalvcE3drlcb2wgkOEayfPO/ux24idU8qP8889HmFcO+UKJkOUa5fH8+PFbJBwzpPx8Ff7GHcci5S6tVbr9q6O4T9ICcIR/gLwQ+gHKNaA5gAAAABJRU5ErkJggg==",
        tip: "data:image/png;base64,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",
        tip_w: "data:image/png;base64,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",
        result_dice: "data:image/png;base64,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",
        lowhigh: "/modules/games/lowhigh-102357a6.svg",
        lowhigh_w: "/modules/games/lowhigh_w-999c3299.svg",
        less: "/modules/games/l-d57074dc.svg",
        less_w: "/modules/games/l_w-c91b3e00.svg",
        lesseq: "/modules/games/lq-3396df8e.svg",
        lesseq_w: "/modules/games/lq_w-d6c4ef69.svg"
    },
    C = 9999,
    P = 9799,
    xe = 1,
    X = 200;

function T(a, e, t, n) {
    let i;
    var l;
    return e ? i = (A => {
        const o = n - P > 0 ? n - P - t : -t,
            h = Math.min(C, t + P);
        return A === "left" ? {
            left: o,
            right: n - t,
            pos: t
        } : A === "right" ? {
            left: t - n,
            right: h - n,
            pos: n
        } : {
            left: -t,
            right: C - n,
            pos: (n - t) / 2 + t
        }
    })(a) : i = (l = a) === "left" ? {
        left: n === C ? xe - t : -t,
        right: n - t - X,
        pos: t
    } : l === "right" ? {
        left: t - n + X,
        right: t === 0 ? 9998 - n : C - n,
        pos: n
    } : {
        left: -t,
        right: C - n,
        pos: (n - t) / 2 + t
    }, {
        left: Math.round(i.left),
        right: Math.round(i.right),
        pos: Number(i.pos)
    }
}

function J({
    type: a,
    size: e,
    className: t,
    centerHover: n,
    set: i = () => {},
    moving: l
}) {
    const A = N(),
        o = f(),
        [h, u] = c.useState(!1),
        d = () => ({
            left: o.low,
            right: o.high,
            center: (o.high - o.low) / 2 + o.low
        }),
        w = (x, W) => {
            const F = new r.Decimal(x).add(W).todp(0).toNumber();
            return Number(F)
        },
        g = T(a, o.isIn, o.low, o.high),
        [B, S] = c.useState(d()),
        [y, D] = c.useState(g.pos),
        [M, k] = r.useSetState({
            data: g,
            dragging: !1
        });
    c.useEffect(() => {
        M.dragging || (() => {
            const x = T(a, o.isIn, o.low, o.high);
            k({
                data: x
            }), D(x.pos), S(d())
        })()
    }, [o.low, o.high]);
    const q = c.useRef(ee.throttle(() => {
            A.sounds.playSound("rangeSound")
        }, 20)),
        Q = a === "center";
    return s.jsx(de.motion.button, {
        style: {
            left: y / 100 + "%",
            zIndex: Q ? 9 : l === a ? 11 : 10
        },
        className: I(je, t, (h || n) && "show-tips"),
        onMouseEnter: () => {
            i(!0), u(!0)
        },
        onMouseLeave: () => {
            i(!1), u(!1)
        },
        drag: "x",
        dragConstraints: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
        },
        dragElastic: 0,
        onDrag: (x, W) => {
            i(!0), u(!0);
            const F = W.offset.x;
            M.dragging || k({
                dragging: !0
            });
            let b = Number(new r.Decimal(F).div(e / C).toFixed(2));
            const {
                left: U,
                right: L
            } = M.data;
            b > U && b < L && q.current(), b = b < U ? U : b > L ? L : b;
            const G = w(b, B[a]);
            D(G), a === "left" ? o.low = G : a === "right" ? o.high = G : (o.low = w(b, B.left), o.high = w(b, B.right))
        },
        onDragEnd: () => {
            i(!1), u(!1);
            const x = T(a, o.isIn, o.low, o.high);
            S(d()), k({
                data: x,
                dragging: !1
            })
        },
        children: s.jsxs("div", {
            className: "num",
            children: [s.jsx("img", {
                draggable: !1,
                className: Q ? "img-center" : "img-sider",
                alt: "img",
                src: p[a]
            }), a !== "center" ? s.jsx("div", {
                className: "tips",
                children: s.jsx("span", {
                    children: y
                })
            }) : null]
        })
    })
}
const je = "g12mak11",
    z = (a, e) => {
        const t = new r.Decimal(100 - e).div(a).toFixed(4, r.Decimal.ROUND_DOWN);
        return Number(t)
    },
    Ne = H.memo(function({
        betLeft: a,
        betRight: e,
        isBetting: t,
        isIn: n,
        currencyName: i,
        amount: l
    }) {
        const A = N(),
            {
                t: o
            } = r.useTranslation(),
            h = A.getChanceByPosition(),
            [u, d] = c.useState(z(h, A.gameChannel)),
            w = g => {
                let B = ((y, D) => Number(new r.Decimal(100 - D).div(y).toFixed(2)))(g, A.gameChannel),
                    S = z(B, A.gameChannel);
                d(S), A.changeChance(B)
            };
        return c.useEffect(() => {
            d((() => {
                const g = A.getChanceByPosition();
                return z(g, A.gameChannel)
            })())
        }, [a, e, n]), s.jsxs("div", {
            className: Be,
            children: [s.jsx(r.InputNumber, {
                label: o("Payout"),
                size: "small",
                value: u,
                onChange: g => w(g),
                precision: 4,
                disabled: t,
                min: 1.0102,
                max: 9900,
                children: s.jsx("span", {
                    className: "right-info",
                    children: "x"
                })
            }), s.jsx(r.InputNumber, {
                label: o("Win Chance"),
                size: "small",
                value: h,
                onChange: g => {
                    A.changeChance(g)
                },
                max: 98,
                disabled: t,
                min: .01,
                precision: 2,
                className: "win-change",
                children: s.jsx("div", {
                    className: "right-info",
                    children: s.jsx("span", {
                        className: "right-percent",
                        children: "%"
                    })
                })
            })]
        })
    }),
    Be = "c1fyf28j",
    Ce = c.memo(() => {
        const a = N(),
            e = f(),
            t = r.useMountedState(),
            n = c.useRef(null),
            i = r.useIsDarken(),
            [l, A] = c.useState(!1),
            o = c.useRef(null),
            h = new r.Decimal(e.gameResult).div(100).toFixed(2),
            u = c.useRef(e.gameResult);
        return c.useEffect(() => {
            if (u.current === e.gameResult) return;
            A(!1), n.current = setTimeout(() => {
                t() && A(!0)
            }, 400);
            const d = e.gameResult,
                w = {
                    val: u.current
                };
            e.isFirstRender && a.sounds.playSound("moveSound");
            const g = e.settings.fastEnable ? .01 : .4;
            return se.to(w, g, {
                val: d,
                onUpdate: () => {
                    o.current && (o.current.innerHTML = Math.round(w.val).toString())
                },
                onComplete: () => {
                    e.gameIsWin && !e.isFirstRender && a.sounds.playSound("winSound")
                }
            }), () => {
                u.current !== e.gameResult && (clearInterval(n.current), u.current = Number(d), e.isFirstRender = !1)
            }
        }, [e.gameResult]), s.jsxs(s.Fragment, {
            children: [s.jsx("div", {
                className: ve,
                style: {
                    transform: `translate3d(${h}%, 0 ,0)`
                },
                children: s.jsxs("div", {
                    className: I("result", e.gameIsWin ? "result_win" : "result_lose"),
                    children: [s.jsx("img", {
                        alt: "bg",
                        src: i ? p.win : p.win_w
                    }), s.jsxs("div", {
                        className: "dice",
                        children: [s.jsx("p", {
                            className: e.isFirstRender ? "" : e.gameIsWin ? "win" : "lose",
                            ref: o,
                            children: e.gameResult
                        }), s.jsx("img", {
                            alt: "dice",
                            className: l ? "big" : "",
                            src: p.dice
                        })]
                    })]
                })
            }), s.jsx("div", {
                className: "input-result",
                style: {
                    transform: `translate3d(${h}%, 0 ,0)`
                },
                children: s.jsx("div", {})
            })]
        })
    }),
    ve = "r1kiz6p5",
    V = (a, e, t) => {
        let n = e;
        const i = Number(a);
        if (i || i == 0) {
            const l = new r.Decimal(i).sub(e).toNumber();
            n = l < t.left ? Number((e + t.left).toFixed(2)) : l > t.right ? Number((e + t.right).toFixed(2)) : Number((e + l).toFixed(2))
        }
        return n
    },
    Te = c.memo(function() {
        const a = r.useIsMobile(),
            e = f(),
            [t, n] = r.useSetState({
                left: e.low,
                right: e.high
            });
        return c.useEffect(() => {
            e.low === t.left && e.high === t.right || n({
                left: e.low,
                right: e.high
            })
        }, [e.low, e.high]), s.jsxs("div", {
            className: Re,
            children: [s.jsxs("div", {
                className: "select-tab-wrap",
                children: [s.jsx("button", {
                    className: I("in", e.isIn && "active"),
                    onClick: () => e.isIn = !0,
                    children: a ? "IN" : "Roll Inside"
                }), s.jsx("button", {
                    className: I("out", !e.isIn && "active"),
                    onClick: () => e.isIn = !1,
                    children: a ? "OUT" : "Roll Outside"
                })]
            }), s.jsxs("div", {
                className: "input-number-wrap",
                children: [s.jsxs("div", {
                    className: "sp-input-wrap",
                    children: [s.jsx("p", {
                        className: "label",
                        children: "Low"
                    }), s.jsx(r.InputNumber, {
                        value: t.left,
                        onChange: i => {
                            if (i > 9999 || i < 0) return !1;
                            n({
                                left: i
                            });
                            const l = T("left", e.isIn, e.low, e.high),
                                A = V(i, e.low, l);
                            e.low = A
                        }
                    })]
                }), s.jsx("div", {
                    className: "change-btn-wrap",
                    children: s.jsx("button", {
                        onClick: () => {
                            const {
                                low: i,
                                high: l
                            } = e, A = Math.round(9999 - l), o = Math.round(9999 - i);
                            e.low = A, e.high = o
                        },
                        children: s.jsx(r.Icon, {
                            name: "Exchange"
                        })
                    })
                }), s.jsxs("div", {
                    className: "sp-input-wrap",
                    children: [s.jsx("p", {
                        className: "label",
                        children: "High"
                    }), s.jsx(r.InputNumber, {
                        value: t.right,
                        onChange: i => {
                            if (i > 9999 || i < 0) return !1;
                            n({
                                right: i
                            });
                            const l = T("right", e.isIn, e.low, e.high),
                                A = V(i, e.high, l);
                            e.high = A
                        }
                    })]
                })]
            })]
        })
    }),
    Re = "t1ovk8pa",
    Ie = c.memo(function() {
        const a = N(),
            e = f();
        return c.useEffect(() => {
            const {
                low: t,
                high: n
            } = e;
            e.isIn ? n - t > 9800 && a.changeChance(98) : n - t < 2 && a.changeChance(98)
        }, [e.isIn]), s.jsx(be, {
            className: ye,
            children: s.jsx("div", {
                className: "dice-area",
                children: s.jsxs("div", {
                    className: "area",
                    children: [s.jsx(Te, {}), s.jsx(Se, {}), s.jsx(Ne, {
                        betLeft: e.low,
                        betRight: e.high,
                        isBetting: e.isBetting,
                        isIn: e.isIn,
                        currencyName: e.currencyName,
                        amount: e.amount
                    })]
                })
            })
        })
    }),
    Se = c.memo(() => {
        const a = f(),
            [e, t] = c.useState(0),
            [n, i] = c.useState(!1),
            [l, A] = c.useState(""),
            o = r.useResize(({
                width: u
            }) => t(u)),
            h = new r.Decimal(a.high).sub(a.low).toNumber();
        return c.useEffect(() => A("left"), [a.low]), c.useEffect(() => A("right"), [a.high]), s.jsx("div", {
            className: De,
            children: s.jsx("div", {
                className: "input",
                children: s.jsxs("div", {
                    className: "slider" + (a.isIn ? "" : " active"),
                    ref: o,
                    children: [s.jsx(Ce, {}), s.jsx("div", {
                        className: "slider-inner" + (a.isIn ? " active" : ""),
                        style: {
                            width: h / 100 + "%",
                            left: a.low / 100 + "%"
                        }
                    }), s.jsx(J, {
                        type: "left",
                        size: e,
                        className: "slider-button left",
                        centerHover: n,
                        moving: l
                    }), s.jsx(J, {
                        type: "center",
                        size: e,
                        className: "slider-button center",
                        centerHover: n,
                        set: i
                    }), s.jsx(J, {
                        type: "right",
                        size: e,
                        className: "slider-button right",
                        centerHover: n,
                        moving: l
                    }), s.jsxs("div", {
                        className: "num-info",
                        children: [s.jsx("span", {
                            children: "0"
                        }), s.jsx("span", {
                            children: "2500"
                        }), s.jsx("span", {
                            children: "5000"
                        }), s.jsx("span", {
                            children: "7500"
                        }), s.jsx("span", {
                            children: "9999"
                        })]
                    })]
                })
            })
        })
    }),
    ye = "g6gykyt",
    De = "g46ydwd",
    Ee = c.memo(() => {
        const a = f(),
            e = O.useSingleDetailNew();
        return s.jsxs(r.ErrorBoundary, {
            children: [s.jsx(ne, {
                list: a.myBets,
                keyof: "betId",
                onDetail: e,
                getResult: t => t.gameValue
            }), s.jsx(Ie, {})]
        })
    }),
    ze = c.memo(function() {
        const a = N(),
            {
                autoBet: {
                    isRunning: e
                }
            } = f(),
            t = r.useIsMobile(),
            n = a.autoBet,
            {
                t: i
            } = r.useTranslation(),
            l = () => {
                e ? n.stop() : n.start().catch(r.notify)
            },
            A = () => s.jsx(r.Button, {
                className: "bet-button",
                size: "big",
                type: "conic",
                onClick: l,
                children: i(e ? "Stop Auto Bet" : "Start Auto Bet")
            });
        return s.jsxs("div", {
            className: Oe,
            children: [t && A(), s.jsx(j.CoinInput, {
                checkIncrease: !0
            }), s.jsx(j.TimesInput, {}), s.jsx(j.IncreaseInput, {}), s.jsx(j.IncreaseInput, {
                isLose: !0
            }), s.jsx(j.StopInput, {}), s.jsx(j.StopInput, {
                isLose: !0
            }), s.jsx(fe, {}), !t && A()]
        })
    }),
    Oe = "ak1wivv",
    Me = c.memo(function() {
        const a = N(),
            e = f(),
            t = r.useIsMobile(),
            n = r.useSetting(),
            {
                t: i
            } = r.useTranslation(),
            l = () => s.jsx(r.Button, {
                className: "bet-button",
                type: "conic",
                disabled: e.isBetting,
                onClick: () => a.handGameBet(),
                children: i("Roll Now")
            });
        return s.jsxs("div", {
            className: ke,
            children: [t && l(), s.jsx(j.CoinInput, {}), s.jsx(ae, {
                label: i("Win Amount"),
                className: "game-winamount-wrap",
                size: "small",
                currencyName: n.currencyName,
                value: e.amount.mul((() => {
                    const A = a.getChanceByPosition();
                    return z(A, a.gameChannel)
                })()).toNumber(),
                onChange: () => {},
                disabled: !0
            }), !t && l()]
        })
    }),
    ke = "mtf07mw",
    We = H.memo(() => {
        const a = N(),
            e = f(),
            {
                t
            } = r.useTranslation(),
            n = r.usePageProps().gameInfo.read(),
            i = a.config.fairComponent;
        c.useEffect(() => () => {
            e.isFirstRender = !0
        }, []);
        const l = [{
            title: t("What Game Is This?"),
            node: s.jsx(pe, {
                gameInfo: n
            })
        }, {
            title: t("Fairness"),
            node: s.jsx(r.Dialog, {
                title: t("Fairness"),
                children: s.jsx(i, {})
            })
        }, {
            title: t("Max Profits"),
            node: s.jsx(ie, {})
        }];
        return s.jsx(le, {
            manualControl: s.jsx(Me, {}),
            autoControl: s.jsx(ze, {}),
            gameView: s.jsx(Ee, {}),
            tabs: [{
                label: t("All Bets"),
                value: O.AllBetNew
            }, {
                label: t("My bets"),
                value: O.MyBetNew
            }],
            actions: [s.jsx(re, {}), s.jsx(oe, {}), s.jsx(Ae, {}), s.jsx(ce, {}), s.jsx(ue, {}), s.jsx(he, {
                list: l
            })]
        })
    }),
    Fe = O.withSingleDetailNew({
        onValidate: (a, e, t) => {
            let n = `${K}?s=${a}&c=${e}&n=${t}`;
            window.open(n)
        },
        result: ({
            betLog: a
        }) => {
            r.useTranslation();
            const {
                low: e,
                high: t,
                betType: n
            } = a.bv, i = a.gv, l = r.useIsDarken(), A = n == "in" ? "#3BC117" : "#ed6300";
            return s.jsx("div", {
                className: Ue,
                children: s.jsx("div", {
                    className: "wrap flex-center",
                    children: s.jsxs("div", {
                        className: "bg flex-center",
                        children: [s.jsxs("div", {
                            className: I(Le, "flex-center", "graph-result"),
                            children: [s.jsx("div", {
                                className: "result-img",
                                style: {
                                    left: i / 100 + "%"
                                },
                                children: s.jsx("span", {
                                    children: i
                                })
                            }), s.jsxs("div", {
                                className: "result",
                                style: {
                                    background: n != "in" ? "#3BC117" : "#ed6300"
                                },
                                children: [s.jsx("div", {
                                    className: "inner",
                                    style: {
                                        background: A,
                                        width: (t - e) / 100 + "%",
                                        left: e / 100 + "%"
                                    }
                                }), s.jsx("div", {
                                    className: "left-hand hand",
                                    style: {
                                        left: e / 100 + "%"
                                    },
                                    children: s.jsx("img", {
                                        alt: "",
                                        src: p.left
                                    })
                                }), s.jsx("div", {
                                    className: "right-hand hand",
                                    style: {
                                        left: t / 100 + "%"
                                    },
                                    children: s.jsx("img", {
                                        alt: "",
                                        src: p.right
                                    })
                                })]
                            })]
                        }), s.jsx("div", {
                            className: "more",
                            children: t - e > 1e3 ? s.jsxs(s.Fragment, {
                                children: [s.jsx("span", {
                                    className: "low",
                                    style: {
                                        left: e / 100 + "%"
                                    },
                                    children: e
                                }), s.jsx("span", {
                                    className: "high",
                                    style: {
                                        left: t / 100 + "%"
                                    },
                                    children: t
                                })]
                            }) : s.jsxs("div", {
                                className: "low-high",
                                style: {
                                    left: (t + e) / 200 + "%"
                                },
                                children: [s.jsx("span", {
                                    children: e
                                }), s.jsx("img", {
                                    alt: "low-hig",
                                    src: l ? p.lowhigh : p.lowhigh_w
                                }), s.jsx("span", {
                                    children: t
                                })]
                            })
                        })]
                    })
                })
            })
        }
    }),
    Ue = "r19k5an2",
    Le = "glt1t7w",
    Ge = Fe,
    Pe = H.memo(function({
        bodyLock: a
    }) {
        return s.jsx(ge, {
            htmlName: "ultimatedice",
            bodyLock: a
        })
    }),
    E = R.Reader,
    Y = R.Writer;
R.util;
const v = R.roots.gameUltimateDice || (R.roots.gameUltimateDice = {});
v.BetValue = (() => {
    function a(e) {
        if (e)
            for (let t = Object.keys(e), n = 0; n < t.length; ++n) e[t[n]] != null && (this[t[n]] = e[t[n]])
    }
    return a.prototype.low = 0, a.prototype.high = 0, a.prototype.betType = "", a.encode = function(e, t) {
        return t || (t = Y.create()), e.low != null && Object.hasOwnProperty.call(e, "low") && t.uint32(8).sint32(e.low), e.high != null && Object.hasOwnProperty.call(e, "high") && t.uint32(16).sint32(e.high), e.betType != null && Object.hasOwnProperty.call(e, "betType") && t.uint32(26).string(e.betType), t
    }, a.decode = function(e, t) {
        e instanceof E || (e = E.create(e));
        let n = t === void 0 ? e.len : e.pos + t,
            i = new v.BetValue;
        for (; e.pos < n;) {
            let l = e.uint32();
            switch (l >>> 3) {
                case 1:
                    i.low = e.sint32();
                    break;
                case 2:
                    i.high = e.sint32();
                    break;
                case 3:
                    i.betType = e.string();
                    break;
                default:
                    e.skipType(7 & l)
            }
        }
        return i
    }, a
})(), v.GameValue = (() => {
    function a(e) {
        if (e)
            for (let t = Object.keys(e), n = 0; n < t.length; ++n) e[t[n]] != null && (this[t[n]] = e[t[n]])
    }
    return a.prototype.gameResult = 0, a.encode = function(e, t) {
        return t || (t = Y.create()), e.gameResult != null && Object.hasOwnProperty.call(e, "gameResult") && t.uint32(8).sint32(e.gameResult), t
    }, a.decode = function(e, t) {
        e instanceof E || (e = E.create(e));
        let n = t === void 0 ? e.len : e.pos + t,
            i = new v.GameValue;
        for (; e.pos < n;) {
            let l = e.uint32();
            l >>> 3 == 1 ? i.gameResult = e.sint32() : e.skipType(7 & l)
        }
        return i
    }, a
})();
const Je = {
        rangeSound: "/modules/games/range-e3b88736.mp3",
        moveSound: "/modules/games/move-5b30624c.mp3",
        winSound: "/modules/games/win-ae4b0d6d.mp3"
    },
    He = r.socket.decode(v.GameValue),
    K = `https://${r.env.GITHUB}.github.io/verify/ultimatedice_new.html`;
class lt extends me {
    constructor(t, n) {
        super({
            name: "UltimateDice",
            namespace: (n == null ? void 0 : n.gameSocketNameSpace) || we("/g/ud"),
            sounds: Je,
            fairComponent: Pe,
            detailComponent: Ge,
            validateLink: K
        }, We, {
            isIn: !0,
            gameResult: 5e3,
            low: 2500,
            high: 7499,
            gameIsWin: !1,
            isFirstRender: !0
        });
        m(this, "total", 9999);
        m(this, "betInterval", 350);
        m(this, "betStartTime", new Date().getTime());
        m(this, "needDeduction", !1);
        m(this, "handGameBet", () => {
            this.state.isBetting || this.handleBet().catch(r.notify)
        });
        m(this, "onBetRequest", async t => {
            let n = await t;
            this.state.gameResult = n.gameValue, this.state.gameIsWin = n.odds > 0;
            let i = 400;
            if (this.state.settings.fastEnable) {
                const l = new Date().getTime() - this.betStartTime;
                i = l > this.betInterval ? 0 : this.betInterval - l
            }
            return await r.utils.delay(i), n
        });
        m(this, "changeToggleWin", () => {
            this.state.isBetting || (this.state.isIn = !this.state.isIn)
        });
        m(this, "lowerTarget", () => {
            if (!this.state.isBetting) {
                const t = this.getChanceByPosition();
                this.changeChance(t - 1)
            }
        });
        m(this, "higerTarget", () => {
            if (!this.state.isBetting) {
                const t = this.getChanceByPosition();
                this.changeChance(t + 1)
            }
        });
        m(this, "getChanceByPosition", (t, n) => {
            const i = t || this.state.low,
                l = n || this.state.high,
                A = new r.Decimal(l).sub(i).add(1).div(100).toFixed(2),
                o = Number(A);
            return this.state.isIn ? o : Number((100 - o).toFixed(2))
        });
        m(this, "changeChance", t => {
            const n = this.getChanceByPosition();
            if (n == t) return;
            const i = new r.Decimal(n).sub(t),
                l = -new r.Decimal(i).mul(100).toNumber(),
                A = l % 2 == 0 ? l / 2 : Math.floor(l / 2),
                o = l % 2 == 0 ? l / 2 : Math.ceil(l / 2);
            let h = this.state.isIn ? this.state.low - A : this.state.low + A,
                u = this.state.isIn ? this.state.high + o : this.state.high - o;
            h < 0 ? (u += -h, h = 0) : u > this.total && (h -= u - this.total, u = this.total), this.state.low = Math.round(h), this.state.high = Math.round(u)
        });
        this.gameChannel = Number(n == null ? void 0 : n.gameChannel) || 1, this.addHotkey("q", this.changeToggleWin, "Toggle condition to win"), this.addHotkey("w", this.lowerTarget, "Lower the target"), this.addHotkey("e", this.higerTarget, "Higher the target"), this.autoBet.interval = this.state.settings.fastEnable ? 500 : 1500, r.valtio.subscribeKey(this.state.settings, "fastEnable", l => {
            this.autoBet.interval = l ? 500 : 1500
        });
        const i = this.hotkeyList.find(l => l.key == "space");
        i && (i.handler = () => (this.state.controlIdx === 1 ? this.state.autoBet.isRunning ? this.autoBet.stop() : this.autoBet.start() : this.handGameBet(), !1)), this.on("betStart", () => {
            this.betStartTime = new Date().getTime(), this.sounds.playSound("rangeSound")
        })
    }
    get maxProfit() {
        const t = this.getChanceByPosition();
        return this.state.amount.mul(100 - this.gameChannel).div(t).sub(this.state.amount)
    }
    gameValueDecoder(t) {
        return He(t).gameResult
    }
    betValue() {
        return r.socket.encode(v.BetValue)({
            low: this.state.low,
            high: this.state.high,
            betType: this.state.isIn ? "in" : "out"
        })
    }
}
export {
    lt as
    default, K as validateLink
};