var v = Object.defineProperty,
    I = Object.defineProperties;
var k = Object.getOwnPropertyDescriptors;
var S = Object.getOwnPropertySymbols;
var q = Object.prototype.hasOwnProperty,
    U = Object.prototype.propertyIsEnumerable;
var f = (e, r, i) => r in e ? v(e, r, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: i
    }) : e[r] = i,
    d = (e, r) => {
        for (var i in r || (r = {})) q.call(r, i) && f(e, i, r[i]);
        if (S)
            for (var i of S(r)) U.call(r, i) && f(e, i, r[i]);
        return e
    },
    p = (e, r) => I(e, k(r));
import {
    r as t,
    _ as c,
    R as C,
    a,
    l as P
} from "./vendor-8c02be2a.js";
import {
    g as x
} from "./main-057d7723.js";
import {
    w as E
} from "./CommonI18nProvider-b34bf9d5.js";
const z = {
        frames: [{
            filename: "00.png",
            frame: {
                x: 129,
                y: 1,
                w: 123,
                h: 123
            },
            rotated: !1,
            trimmed: !0,
            spriteSourceSize: {
                x: 47,
                y: 48,
                w: 123,
                h: 123
            },
            sourceSize: {
                w: 200,
                h: 200
            }
        }, {
            filename: "01.png",
            frame: {
                x: 1,
                y: 125,
                w: 125,
                h: 126
            },
            rotated: !1,
            trimmed: !0,
            spriteSourceSize: {
                x: 48,
                y: 46,
                w: 125,
                h: 126
            },
            sourceSize: {
                w: 200,
                h: 200
            }
        }, {
            filename: "02.png",
            frame: {
                x: 826,
                y: 268,
                w: 133,
                h: 133
            },
            rotated: !1,
            trimmed: !0,
            spriteSourceSize: {
                x: 42,
                y: 43,
                w: 133,
                h: 133
            },
            sourceSize: {
                w: 200,
                h: 200
            }
        }, {
            filename: "03.png",
            frame: {
                x: 781,
                y: 699,
                w: 152,
                h: 161
            },
            rotated: !1,
            trimmed: !0,
            spriteSourceSize: {
                x: 35,
                y: 28,
                w: 152,
                h: 161
            },
            sourceSize: {
                w: 200,
                h: 200
            }
        }, {
            filename: "04.png",
            frame: {
                x: 314,
                y: 682,
                w: 159,
                h: 158
            },
            rotated: !1,
            trimmed: !0,
            spriteSourceSize: {
                x: 28,
                y: 25,
                w: 159,
                h: 158
            },
            sourceSize: {
                w: 200,
                h: 200
            }
        }, {
            filename: "05.png",
            frame: {
                x: 457,
                y: 531,
                w: 158,
                h: 149
            },
            rotated: !1,
            trimmed: !0,
            spriteSourceSize: {
                x: 24,
                y: 26,
                w: 158,
                h: 149
            },
            sourceSize: {
                w: 200,
                h: 200
            }
        }, {
            filename: "06.png",
            frame: {
                x: 813,
                y: 403,
                w: 143,
                h: 141
            },
            rotated: !1,
            trimmed: !0,
            spriteSourceSize: {
                x: 29,
                y: 32,
                w: 143,
                h: 141
            },
            sourceSize: {
                w: 200,
                h: 200
            }
        }, {
            filename: "07.png",
            frame: {
                x: 128,
                y: 126,
                w: 126,
                h: 126
            },
            rotated: !1,
            trimmed: !0,
            spriteSourceSize: {
                x: 43,
                y: 40,
                w: 126,
                h: 126
            },
            sourceSize: {
                w: 200,
                h: 200
            }
        }, {
            filename: "08.png",
            frame: {
                x: 254,
                y: 1,
                w: 123,
                h: 123
            },
            rotated: !1,
            trimmed: !0,
            spriteSourceSize: {
                x: 45,
                y: 42,
                w: 123,
                h: 123
            },
            sourceSize: {
                w: 200,
                h: 200
            }
        }, {
            filename: "09.png",
            frame: {
                x: 256,
                y: 126,
                w: 125,
                h: 126
            },
            rotated: !1,
            trimmed: !0,
            spriteSourceSize: {
                x: 43,
                y: 40,
                w: 125,
                h: 126
            },
            sourceSize: {
                w: 200,
                h: 200
            }
        }, {
            filename: "10.png",
            frame: {
                x: 272,
                y: 385,
                w: 132,
                h: 134
            },
            rotated: !1,
            trimmed: !0,
            spriteSourceSize: {
                x: 36,
                y: 35,
                w: 132,
                h: 134
            },
            sourceSize: {
                w: 200,
                h: 200
            }
        }, {
            filename: "11.png",
            frame: {
                x: 617,
                y: 534,
                w: 156,
                h: 150
            },
            rotated: !1,
            trimmed: !0,
            spriteSourceSize: {
                x: 27,
                y: 26,
                w: 156,
                h: 150
            },
            sourceSize: {
                w: 200,
                h: 200
            }
        }, {
            filename: "12.png",
            frame: {
                x: 775,
                y: 546,
                w: 157,
                h: 151
            },
            rotated: !1,
            trimmed: !0,
            spriteSourceSize: {
                x: 32,
                y: 27,
                w: 157,
                h: 151
            },
            sourceSize: {
                w: 200,
                h: 200
            }
        }, {
            filename: "13.png",
            frame: {
                x: 1,
                y: 520,
                w: 148,
                h: 145
            },
            rotated: !1,
            trimmed: !0,
            spriteSourceSize: {
                x: 40,
                y: 34,
                w: 148,
                h: 145
            },
            sourceSize: {
                w: 200,
                h: 200
            }
        }, {
            filename: "14.png",
            frame: {
                x: 552,
                y: 256,
                w: 135,
                h: 132
            },
            rotated: !1,
            trimmed: !0,
            spriteSourceSize: {
                x: 48,
                y: 43,
                w: 135,
                h: 132
            },
            sourceSize: {
                w: 200,
                h: 200
            }
        }, {
            filename: "15.png",
            frame: {
                x: 379,
                y: 1,
                w: 123,
                h: 123
            },
            rotated: !1,
            trimmed: !0,
            spriteSourceSize: {
                x: 46,
                y: 43,
                w: 123,
                h: 123
            },
            sourceSize: {
                w: 200,
                h: 200
            }
        }, {
            filename: "16.png",
            frame: {
                x: 629,
                y: 1,
                w: 123,
                h: 124
            },
            rotated: !1,
            trimmed: !0,
            spriteSourceSize: {
                x: 45,
                y: 41,
                w: 123,
                h: 124
            },
            sourceSize: {
                w: 200,
                h: 200
            }
        }, {
            filename: "17.png",
            frame: {
                x: 383,
                y: 126,
                w: 126,
                h: 126
            },
            rotated: !1,
            trimmed: !0,
            spriteSourceSize: {
                x: 43,
                y: 39,
                w: 126,
                h: 126
            },
            sourceSize: {
                w: 200,
                h: 200
            }
        }, {
            filename: "18.png",
            frame: {
                x: 1,
                y: 384,
                w: 134,
                h: 133
            },
            rotated: !1,
            trimmed: !0,
            spriteSourceSize: {
                x: 39,
                y: 31,
                w: 134,
                h: 133
            },
            sourceSize: {
                w: 200,
                h: 200
            }
        }, {
            filename: "19.png",
            frame: {
                x: 475,
                y: 686,
                w: 149,
                h: 158
            },
            rotated: !1,
            trimmed: !0,
            spriteSourceSize: {
                x: 36,
                y: 20,
                w: 149,
                h: 158
            },
            sourceSize: {
                w: 200,
                h: 200
            }
        }, {
            filename: "20.png",
            frame: {
                x: 1,
                y: 670,
                w: 157,
                h: 156
            },
            rotated: !1,
            trimmed: !0,
            spriteSourceSize: {
                x: 29,
                y: 25,
                w: 157,
                h: 156
            },
            sourceSize: {
                w: 200,
                h: 200
            }
        }, {
            filename: "21.png",
            frame: {
                x: 151,
                y: 521,
                w: 157,
                h: 147
            },
            rotated: !1,
            trimmed: !0,
            spriteSourceSize: {
                x: 25,
                y: 32,
                w: 157,
                h: 147
            },
            sourceSize: {
                w: 200,
                h: 200
            }
        }, {
            filename: "22.png",
            frame: {
                x: 406,
                y: 388,
                w: 144,
                h: 138
            },
            rotated: !1,
            trimmed: !0,
            spriteSourceSize: {
                x: 28,
                y: 33,
                w: 144,
                h: 138
            },
            sourceSize: {
                w: 200,
                h: 200
            }
        }, {
            filename: "23.png",
            frame: {
                x: 636,
                y: 127,
                w: 126,
                h: 127
            },
            rotated: !1,
            trimmed: !0,
            spriteSourceSize: {
                x: 43,
                y: 40,
                w: 126,
                h: 127
            },
            sourceSize: {
                w: 200,
                h: 200
            }
        }, {
            filename: "24.png",
            frame: {
                x: 754,
                y: 1,
                w: 124,
                h: 124
            },
            rotated: !1,
            trimmed: !0,
            spriteSourceSize: {
                x: 46,
                y: 41,
                w: 124,
                h: 124
            },
            sourceSize: {
                w: 200,
                h: 200
            }
        }, {
            filename: "25.png",
            frame: {
                x: 1,
                y: 1,
                w: 126,
                h: 122
            },
            rotated: !1,
            trimmed: !0,
            spriteSourceSize: {
                x: 44,
                y: 36,
                w: 126,
                h: 122
            },
            sourceSize: {
                w: 200,
                h: 200
            }
        }, {
            filename: "26.png",
            frame: {
                x: 893,
                y: 127,
                w: 129,
                h: 139
            },
            rotated: !1,
            trimmed: !0,
            spriteSourceSize: {
                x: 43,
                y: 30,
                w: 129,
                h: 139
            },
            sourceSize: {
                w: 200,
                h: 200
            }
        }, {
            filename: "27.png",
            frame: {
                x: 683,
                y: 390,
                w: 128,
                h: 142
            },
            rotated: !1,
            trimmed: !0,
            spriteSourceSize: {
                x: 43,
                y: 32,
                w: 128,
                h: 142
            },
            sourceSize: {
                w: 200,
                h: 200
            }
        }, {
            filename: "28.png",
            frame: {
                x: 552,
                y: 390,
                w: 129,
                h: 139
            },
            rotated: !1,
            trimmed: !0,
            spriteSourceSize: {
                x: 43,
                y: 37,
                w: 129,
                h: 139
            },
            sourceSize: {
                w: 200,
                h: 200
            }
        }, {
            filename: "29.png",
            frame: {
                x: 142,
                y: 254,
                w: 134,
                h: 129
            },
            rotated: !1,
            trimmed: !0,
            spriteSourceSize: {
                x: 41,
                y: 45,
                w: 134,
                h: 129
            },
            sourceSize: {
                w: 200,
                h: 200
            }
        }, {
            filename: "30.png",
            frame: {
                x: 504,
                y: 1,
                w: 123,
                h: 123
            },
            rotated: !1,
            trimmed: !0,
            spriteSourceSize: {
                x: 46,
                y: 43,
                w: 123,
                h: 123
            },
            sourceSize: {
                w: 200,
                h: 200
            }
        }, {
            filename: "31.png",
            frame: {
                x: 764,
                y: 127,
                w: 127,
                h: 127
            },
            rotated: !1,
            trimmed: !0,
            spriteSourceSize: {
                x: 44,
                y: 41,
                w: 127,
                h: 127
            },
            sourceSize: {
                w: 200,
                h: 200
            }
        }, {
            filename: "32.png",
            frame: {
                x: 689,
                y: 256,
                w: 135,
                h: 132
            },
            rotated: !1,
            trimmed: !0,
            spriteSourceSize: {
                x: 41,
                y: 43,
                w: 135,
                h: 132
            },
            sourceSize: {
                w: 200,
                h: 200
            }
        }, {
            filename: "33.png",
            frame: {
                x: 160,
                y: 678,
                w: 152,
                h: 157
            },
            rotated: !1,
            trimmed: !0,
            spriteSourceSize: {
                x: 34,
                y: 26,
                w: 152,
                h: 157
            },
            sourceSize: {
                w: 200,
                h: 200
            }
        }, {
            filename: "34.png",
            frame: {
                x: 626,
                y: 699,
                w: 153,
                h: 159
            },
            rotated: !1,
            trimmed: !0,
            spriteSourceSize: {
                x: 31,
                y: 20,
                w: 153,
                h: 159
            },
            sourceSize: {
                w: 200,
                h: 200
            }
        }, {
            filename: "35.png",
            frame: {
                x: 310,
                y: 528,
                w: 145,
                h: 148
            },
            rotated: !1,
            trimmed: !0,
            spriteSourceSize: {
                x: 31,
                y: 22,
                w: 145,
                h: 148
            },
            sourceSize: {
                w: 200,
                h: 200
            }
        }, {
            filename: "36.png",
            frame: {
                x: 137,
                y: 385,
                w: 133,
                h: 133
            },
            rotated: !1,
            trimmed: !0,
            spriteSourceSize: {
                x: 35,
                y: 28,
                w: 133,
                h: 133
            },
            sourceSize: {
                w: 200,
                h: 200
            }
        }, {
            filename: "37.png",
            frame: {
                x: 880,
                y: 1,
                w: 124,
                h: 124
            },
            rotated: !1,
            trimmed: !0,
            spriteSourceSize: {
                x: 44,
                y: 41,
                w: 124,
                h: 124
            },
            sourceSize: {
                w: 200,
                h: 200
            }
        }, {
            filename: "38.png",
            frame: {
                x: 511,
                y: 127,
                w: 123,
                h: 126
            },
            rotated: !1,
            trimmed: !0,
            spriteSourceSize: {
                x: 51,
                y: 43,
                w: 123,
                h: 126
            },
            sourceSize: {
                w: 200,
                h: 200
            }
        }, {
            filename: "39.png",
            frame: {
                x: 1,
                y: 254,
                w: 139,
                h: 128
            },
            rotated: !1,
            trimmed: !0,
            spriteSourceSize: {
                x: 41,
                y: 41,
                w: 139,
                h: 128
            },
            sourceSize: {
                w: 200,
                h: 200
            }
        }, {
            filename: "40.png",
            frame: {
                x: 278,
                y: 254,
                w: 138,
                h: 129
            },
            rotated: !1,
            trimmed: !0,
            spriteSourceSize: {
                x: 34,
                y: 41,
                w: 138,
                h: 129
            },
            sourceSize: {
                w: 200,
                h: 200
            }
        }, {
            filename: "41.png",
            frame: {
                x: 418,
                y: 255,
                w: 132,
                h: 131
            },
            rotated: !1,
            trimmed: !0,
            spriteSourceSize: {
                x: 36,
                y: 39,
                w: 132,
                h: 131
            },
            sourceSize: {
                w: 200,
                h: 200
            }
        }],
        meta: {
            app: "https://www.codeandweb.com/texturepacker",
            version: "1.0",
            image: "white.png",
            format: "RGBA8888",
            size: {
                w: 1023,
                h: 861
            },
            scale: "1",
            smartupdate: "$TexturePacker:SmartUpdate:aa4981359266e574e2f23c84c6f00aed:8d37480774902e5f35da9bb049fb5bd7:c794f86960ed6f7dd4dfce5a2714f155$"
        }
    },
    w = t.createContext(null);

function y() {
    return t.useContext(w).game
}

function B() {
    const e = t.useContext(w).tabs;
    return t.useMemo(() => e || [], [e])
}

function F() {
    return t.useContext(w).gameId || ""
}

function N() {
    return c.valtio.useProxy(y().getState())
}

function g() {
    const {
        routeParams: e
    } = c.usePageContext();
    return e.gameUnique
}
const T = C.memo(function({
    tabs: e,
    gameId: r
}) {
    const i = g();
    return a.jsx(t.Suspense, {
        fallback: a.jsx(l, {}),
        children: a.jsx(b, {
            gameUnique: i,
            tabs: e,
            gameId: r,
            children: a.jsx(M, {})
        })
    })
});

function M() {
    const e = y(),
        [r, i] = t.useState(null),
        [m, o] = t.useState(e.isInited);
    return t.useEffect(() => {
        o(e.isInited)
    }, [e.isInited]), t.useEffect(() => {
        if (r || m || e.initialize().then(() => {
                i(null), o(!0)
            }).catch(u => {
                i(u)
            }), m) return e.active(), () => e.deactivate()
    }, [m, r]), !m || r ? r ? a.jsxs("div", {
        children: ["Error initializing game: ", r.message]
    }) : a.jsx(l, {}) : a.jsx(e.view, {})
}
const l = function() {
    const e = c.useIsDarken() ? {
            image: "/modules/games/black-218e449a.png",
            config: z
        } : {
            image: "/modules/games/white-d03e40c1.png",
            config: z
        },
        [r] = c.useAnimatedFrames(p(d({}, e), {
            fps: 12,
            options: {
                repeat: -1
            }
        }));
    return a.jsx("div", {
        className: `${$} game-loading`,
        children: r
    })
};

function W() {
    const e = c.useDialog(),
        r = g();
    return t.useCallback(i => {
        const m = function(o) {
            return h || (h = P.memoize(function(u) {
                return E(({
                    children: n,
                    gameUnique: s
                }) => a.jsx(b, {
                    gameUnique: s,
                    children: n
                }))
            }), h.cache = new WeakMap), h(o)
        }(i.type);
        e.push(a.jsx(m, {
            gameUnique: r,
            children: i
        }))
    }, [e, r])
}

function b({
    children: e,
    gameUnique: r,
    tabs: i,
    gameId: m
}) {
    const o = function(n) {
            if (typeof n != "string") return n;
            const s = (0, (x().find(([j]) => n === j) || x()[0])[1])(n);
            if (s instanceof Promise) throw s;
            return s
        }(r),
        u = t.useMemo(() => ({
            game: o,
            tabs: i,
            gameId: m
        }), [o, m, i]);
    return a.jsx(w.Provider, {
        value: u,
        children: e
    })
}
let h;
const $ = "w14hjo3q";
export {
    T as G, W as a, N as b, y as c, b as d, F as e, B as f, g as u
};