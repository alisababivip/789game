var Ce = Object.defineProperty,
    Xe = Object.defineProperties;
var Me = Object.getOwnPropertyDescriptors;
var vt = Object.getOwnPropertySymbols;
var Jt = Object.prototype.hasOwnProperty,
    Yt = Object.prototype.propertyIsEnumerable;
var Ot = (t, e, i) => e in t ? Ce(t, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: i
    }) : t[e] = i,
    D = (t, e) => {
        for (var i in e || (e = {})) Jt.call(e, i) && Ot(t, i, e[i]);
        if (vt)
            for (var i of vt(e)) Yt.call(e, i) && Ot(t, i, e[i]);
        return t
    },
    Z = (t, e) => Xe(t, Me(e));
var U = (t, e) => {
    var i = {};
    for (var l in t) Jt.call(t, l) && e.indexOf(l) < 0 && (i[l] = t[l]);
    if (t != null && vt)
        for (var l of vt(t)) e.indexOf(l) < 0 && Yt.call(t, l) && (i[l] = t[l]);
    return i
};
var E = (t, e, i) => (Ot(t, typeof e != "symbol" ? e + "" : e, i), i);
import {
    c as yt,
    g as ht,
    r as L,
    _ as n,
    a as s,
    l as Pt,
    b as Ue,
    R as N
} from "./vendor-8c02be2a.js";
import {
    w as _t
} from "./CommonI18nProvider-b34bf9d5.js";
import Xt from "./GameDetail-cc0ac7d8.js";
import {
    c as w
} from "./index-66d88a57.js";
import {
    c as K,
    b as H,
    a as Mt,
    u as Te,
    f as He
} from "./context-07d48342.js";
import {
    f as zt
} from "./Coin-19c44f04.js";
import {
    _ as a
} from "./main-057d7723.js";
import {
    r as Ke
} from "./react_router-dom_share-62544329.js";
import {
    G as Je,
    S as Ye,
    A as ze,
    a as Fe
} from "./Share-8d7f396d.js";
var Ft, Pe = {
    exports: {}
};
Ft = Pe,
    function(t) {
        var e, i = {},
            l = {
                16: !1,
                18: !1,
                17: !1,
                91: !1
            },
            o = "all",
            r = {
                "⇧": 16,
                shift: 16,
                "⌥": 18,
                alt: 18,
                option: 18,
                "⌃": 17,
                ctrl: 17,
                control: 17,
                "⌘": 91,
                command: 91
            },
            m = {
                backspace: 8,
                tab: 9,
                clear: 12,
                enter: 13,
                return: 13,
                esc: 27,
                escape: 27,
                space: 32,
                left: 37,
                up: 38,
                right: 39,
                down: 40,
                del: 46,
                delete: 46,
                home: 36,
                end: 35,
                pageup: 33,
                pagedown: 34,
                ",": 188,
                ".": 190,
                "/": 191,
                "`": 192,
                "-": 189,
                "=": 187,
                ";": 186,
                "'": 222,
                "[": 219,
                "]": 221,
                "\\": 220
            },
            c = function(_) {
                return m[_] || _.toUpperCase().charCodeAt(0)
            },
            u = [];
        for (e = 1; e < 20; e++) m["f" + e] = 111 + e;

        function h(_, b) {
            for (var v = _.length; v--;)
                if (_[v] === b) return v;
            return -1
        }

        function g(_, b) {
            if (_.length != b.length) return !1;
            for (var v = 0; v < _.length; v++)
                if (_[v] !== b[v]) return !1;
            return !0
        }
        var f = {
            16: "shiftKey",
            18: "altKey",
            17: "ctrlKey",
            91: "metaKey"
        };

        function T(_) {
            for (e in l) l[e] = _[f[e]]
        }

        function y(_, b, v) {
            var A, O;
            A = V(_), v === void 0 && (v = b, b = "all");
            for (var j = 0; j < A.length; j++) O = [], (_ = A[j].split("+")).length > 1 && (O = d(_), _ = [_[_.length - 1]]), _ = _[0], (_ = c(_)) in i || (i[_] = []), i[_].push({
                shortcut: A[j],
                scope: b,
                method: v,
                key: A[j],
                mods: O
            })
        }
        for (e in r) y[e] = !1;

        function P() {
            return o || "all"
        }

        function V(_) {
            var b;
            return (b = (_ = _.replace(/\s/g, "")).split(","))[b.length - 1] == "" && (b[b.length - 2] += ","), b
        }

        function d(_) {
            for (var b = _.slice(0, _.length - 1), v = 0; v < b.length; v++) b[v] = r[b[v]];
            return b
        }

        function I(_, b, v) {
            _.addEventListener ? _.addEventListener(b, v, !1) : _.attachEvent && _.attachEvent("on" + b, function() {
                v(window.event)
            })
        }
        I(document, "keydown", function(_) {
            (function(b) {
                var v, A, O, j, B, J;
                if (v = b.keyCode, h(u, v) == -1 && u.push(v), v != 93 && v != 224 || (v = 91), v in l)
                    for (O in l[v] = !0, r) r[O] == v && (y[O] = !0);
                else if (T(b), y.filter.call(this, b) && v in i) {
                    for (J = P(), j = 0; j < i[v].length; j++)
                        if ((A = i[v][j]).scope == J || A.scope == "all") {
                            for (O in B = A.mods.length > 0, l)(!l[O] && h(A.mods, +O) > -1 || l[O] && h(A.mods, +O) == -1) && (B = !1);
                            (A.mods.length != 0 || l[16] || l[18] || l[17] || l[91]) && !B || A.method(b, A) === !1 && (b.preventDefault ? b.preventDefault() : b.returnValue = !1, b.stopPropagation && b.stopPropagation(), b.cancelBubble && (b.cancelBubble = !0))
                        }
                }
            })(_)
        }), I(document, "keyup", function(_) {
            var b, v = _.keyCode,
                A = h(u, v);
            if (A >= 0 && u.splice(A, 1), v != 93 && v != 224 || (v = 91), v in l)
                for (b in l[v] = !1, r) r[b] == v && (y[b] = !1)
        }), I(window, "focus", function() {
            for (e in l) l[e] = !1;
            for (e in r) y[e] = !1
        });
        var R = t.key;
        t.key = y, t.key.setScope = function(_) {
            o = _ || "all"
        }, t.key.getScope = P, t.key.deleteScope = function(_) {
            var b, v, A;
            for (b in i)
                for (v = i[b], A = 0; A < v.length;) v[A].scope === _ ? v.splice(A, 1) : A++
        }, t.key.filter = function(_) {
            var b = (_.target || _.srcElement).tagName;
            return !(b == "INPUT" || b == "SELECT" || b == "TEXTAREA")
        }, t.key.isPressed = function(_) {
            return typeof _ == "string" && (_ = c(_)), h(u, _) != -1
        }, t.key.getPressedKeyCodes = function() {
            return u.slice(0)
        }, t.key.noConflict = function() {
            var _ = t.key;
            return t.key = R, _
        }, t.key.unbind = function(_, b) {
            var v, A, O, j, B, J = [];
            for (v = V(_), j = 0; j < v.length; j++) {
                if ((A = v[j].split("+")).length > 1 && (J = d(A), _ = A[A.length - 1]), _ = c(_), b === void 0 && (b = P()), !i[_]) return;
                for (O = 0; O < i[_].length; O++)(B = i[_][O]).scope === b && g(B.mods, J) && (i[_][O] = {})
            }
        }, Ft.exports = y
    }(yt);
const rt = ht(Pe.exports),
    qe = _t(function({
        onChange: t
    }) {
        const [e, i] = L.useState(!1), {
            t: l
        } = n.useTranslation();
        return s.jsxs("div", {
            className: Qe,
            children: [s.jsx("div", {
                children: l("The bet amount may exceed the potential maximum profit. Please confirm you're aware that you may not get the full amount when you win a higher payout.")
            }), s.jsxs("div", {
                className: "never-show",
                children: [s.jsx(n.Switch, {
                    className: "check",
                    value: e,
                    onChange: o => {
                        i(o), t(o)
                    }
                }), l("Don't show this again!")]
            })]
        })
    }),
    Qe = "s1kyalpw",
    C = n.protobuf,
    ct = C.Reader,
    jt = C.Writer,
    gt = C.util,
    ot = C.roots.gameManage || (C.roots.gameManage = {}),
    $e = ot.JackpotChange = (() => {
        function t(e) {
            if (this.infos = [], e)
                for (let i = Object.keys(e), l = 0; l < i.length; ++l) e[i[l]] != null && (this[i[l]] = e[i[l]])
        }
        return t.prototype.infos = gt.emptyArray, t.encode = function(e, i) {
            if (i || (i = jt.create()), e.infos != null && e.infos.length)
                for (let l = 0; l < e.infos.length; ++l) ot.JackpotChange.Info.encode(e.infos[l], i.uint32(10).fork()).ldelim();
            return i
        }, t.decode = function(e, i) {
            e instanceof ct || (e = ct.create(e));
            let l = i === void 0 ? e.len : e.pos + i,
                o = new ot.JackpotChange;
            for (; e.pos < l;) {
                let r = e.uint32();
                r >>> 3 == 1 ? (o.infos && o.infos.length || (o.infos = []), o.infos.push(ot.JackpotChange.Info.decode(e, e.uint32()))) : e.skipType(7 & r)
            }
            return o
        }, t.Info = function() {
            function e(i) {
                if (i)
                    for (let l = Object.keys(i), o = 0; o < l.length; ++o) i[l[o]] != null && (this[l[o]] = i[l[o]])
            }
            return e.prototype.currencyName = "", e.prototype.jackpotAmount = gt.Long ? gt.Long.fromBits(0, 0, !1) : 0, e.encode = function(i, l) {
                return l || (l = jt.create()), i.currencyName != null && Object.hasOwnProperty.call(i, "currencyName") && l.uint32(10).string(i.currencyName), i.jackpotAmount != null && Object.hasOwnProperty.call(i, "jackpotAmount") && l.uint32(16).int64(i.jackpotAmount), l
            }, e.decode = function(i, l) {
                i instanceof ct || (i = ct.create(i));
                let o = l === void 0 ? i.len : i.pos + l,
                    r = new ot.JackpotChange.Info;
                for (; i.pos < o;) {
                    let m = i.uint32();
                    switch (m >>> 3) {
                        case 1:
                            r.currencyName = i.string();
                            break;
                        case 2:
                            r.jackpotAmount = i.int64();
                            break;
                        default:
                            i.skipType(7 & m)
                    }
                }
                return r
            }, e
        }(), t
    })(),
    ti = ot.JackpotResult = (() => {
        function t(e) {
            if (e)
                for (let i = Object.keys(e), l = 0; l < i.length; ++l) e[i[l]] != null && (this[i[l]] = e[i[l]])
        }
        return t.prototype.gameName = "", t.prototype.currencyName = "", t.prototype.type = 0, t.prototype.amount = gt.Long ? gt.Long.fromBits(0, 0, !1) : 0, t.encode = function(e, i) {
            return i || (i = jt.create()), e.gameName != null && Object.hasOwnProperty.call(e, "gameName") && i.uint32(10).string(e.gameName), e.currencyName != null && Object.hasOwnProperty.call(e, "currencyName") && i.uint32(18).string(e.currencyName), e.type != null && Object.hasOwnProperty.call(e, "type") && i.uint32(24).int32(e.type), e.amount != null && Object.hasOwnProperty.call(e, "amount") && i.uint32(32).int64(e.amount), i
        }, t.decode = function(e, i) {
            e instanceof ct || (e = ct.create(e));
            let l = i === void 0 ? e.len : e.pos + i,
                o = new ot.JackpotResult;
            for (; e.pos < l;) {
                let r = e.uint32();
                switch (r >>> 3) {
                    case 1:
                        o.gameName = e.string();
                        break;
                    case 2:
                        o.currencyName = e.string();
                        break;
                    case 3:
                        o.type = e.int32();
                        break;
                    case 4:
                        o.amount = e.int64();
                        break;
                    default:
                        e.skipType(7 & r)
                }
            }
            return o
        }, t
    })(),
    {
        proxy: Tl,
        subscribe: ei
    } = n.valtio;
class ii {
    constructor(e, {
        key: i,
        store: l
    }) {
        E(this, "data");
        E(this, "store");
        l = l || ai, this.store = new l(i), this.data = e, ei(this.data, Pt.debounce(() => {
            const o = JSON.stringify(this.data);
            this.store.save(o)
        }, 5e3, {
            leading: !0
        })), this.forceSync()
    }
    async forceSync() {
        let e = this.store.sync();
        if (e instanceof Promise && (e = await e), e) {
            const i = JSON.parse(e);
            for (let l in this.data) this.data[l] !== void 0 && (this.data[l] = i[l])
        }
    }
}
class ai {
    constructor(e) {
        E(this, "key");
        E(this, "data", "");
        this.key = `ns_${e}`
    }
    sync() {
        return this.data = localStorage.getItem(this.key) || "", this.data
    }
    save(e) {
        e != this.data && (this.data = e, localStorage.setItem(this.key, e))
    }
}
var li = {
    exports: {}
};

function Pl(t) {
    throw new Error('Could not dynamically require "' + t + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')
}
var qt = {
    exports: {}
};
const si = Ue(Object.freeze(Object.defineProperty({
    __proto__: null,
    default: {}
}, Symbol.toStringTag, {
    value: "Module"
})));
var Qt;

function bt() {
    return Qt || (Qt = 1, qt.exports = (t = t || function(e, i) {
        var l;
        if (typeof window != "undefined" && window.crypto && (l = window.crypto), typeof self != "undefined" && self.crypto && (l = self.crypto), typeof globalThis != "undefined" && globalThis.crypto && (l = globalThis.crypto), !l && typeof window != "undefined" && window.msCrypto && (l = window.msCrypto), !l && yt !== void 0 && yt.crypto && (l = yt.crypto), !l) try {
            l = si
        } catch (d) {}
        var o = function() {
                if (l) {
                    if (typeof l.getRandomValues == "function") try {
                        return l.getRandomValues(new Uint32Array(1))[0]
                    } catch (d) {}
                    if (typeof l.randomBytes == "function") try {
                        return l.randomBytes(4).readInt32LE()
                    } catch (d) {}
                }
                throw new Error("Native crypto module could not be used to get secure random number.")
            },
            r = Object.create || function() {
                function d() {}
                return function(I) {
                    var R;
                    return d.prototype = I, R = new d, d.prototype = null, R
                }
            }(),
            m = {},
            c = m.lib = {},
            u = c.Base = {
                extend: function(d) {
                    var I = r(this);
                    return d && I.mixIn(d), I.hasOwnProperty("init") && this.init !== I.init || (I.init = function() {
                        I.$super.init.apply(this, arguments)
                    }), I.init.prototype = I, I.$super = this, I
                },
                create: function() {
                    var d = this.extend();
                    return d.init.apply(d, arguments), d
                },
                init: function() {},
                mixIn: function(d) {
                    for (var I in d) d.hasOwnProperty(I) && (this[I] = d[I]);
                    d.hasOwnProperty("toString") && (this.toString = d.toString)
                },
                clone: function() {
                    return this.init.prototype.extend(this)
                }
            },
            h = c.WordArray = u.extend({
                init: function(d, I) {
                    d = this.words = d || [], this.sigBytes = I != i ? I : 4 * d.length
                },
                toString: function(d) {
                    return (d || f).stringify(this)
                },
                concat: function(d) {
                    var I = this.words,
                        R = d.words,
                        _ = this.sigBytes,
                        b = d.sigBytes;
                    if (this.clamp(), _ % 4)
                        for (var v = 0; v < b; v++) {
                            var A = R[v >>> 2] >>> 24 - v % 4 * 8 & 255;
                            I[_ + v >>> 2] |= A << 24 - (_ + v) % 4 * 8
                        } else
                            for (var O = 0; O < b; O += 4) I[_ + O >>> 2] = R[O >>> 2];
                    return this.sigBytes += b, this
                },
                clamp: function() {
                    var d = this.words,
                        I = this.sigBytes;
                    d[I >>> 2] &= 4294967295 << 32 - I % 4 * 8, d.length = e.ceil(I / 4)
                },
                clone: function() {
                    var d = u.clone.call(this);
                    return d.words = this.words.slice(0), d
                },
                random: function(d) {
                    for (var I = [], R = 0; R < d; R += 4) I.push(o());
                    return new h.init(I, d)
                }
            }),
            g = m.enc = {},
            f = g.Hex = {
                stringify: function(d) {
                    for (var I = d.words, R = d.sigBytes, _ = [], b = 0; b < R; b++) {
                        var v = I[b >>> 2] >>> 24 - b % 4 * 8 & 255;
                        _.push((v >>> 4).toString(16)), _.push((15 & v).toString(16))
                    }
                    return _.join("")
                },
                parse: function(d) {
                    for (var I = d.length, R = [], _ = 0; _ < I; _ += 2) R[_ >>> 3] |= parseInt(d.substr(_, 2), 16) << 24 - _ % 8 * 4;
                    return new h.init(R, I / 2)
                }
            },
            T = g.Latin1 = {
                stringify: function(d) {
                    for (var I = d.words, R = d.sigBytes, _ = [], b = 0; b < R; b++) {
                        var v = I[b >>> 2] >>> 24 - b % 4 * 8 & 255;
                        _.push(String.fromCharCode(v))
                    }
                    return _.join("")
                },
                parse: function(d) {
                    for (var I = d.length, R = [], _ = 0; _ < I; _++) R[_ >>> 2] |= (255 & d.charCodeAt(_)) << 24 - _ % 4 * 8;
                    return new h.init(R, I)
                }
            },
            y = g.Utf8 = {
                stringify: function(d) {
                    try {
                        return decodeURIComponent(escape(T.stringify(d)))
                    } catch (I) {
                        throw new Error("Malformed UTF-8 data")
                    }
                },
                parse: function(d) {
                    return T.parse(unescape(encodeURIComponent(d)))
                }
            },
            P = c.BufferedBlockAlgorithm = u.extend({
                reset: function() {
                    this._data = new h.init, this._nDataBytes = 0
                },
                _append: function(d) {
                    typeof d == "string" && (d = y.parse(d)), this._data.concat(d), this._nDataBytes += d.sigBytes
                },
                _process: function(d) {
                    var I, R = this._data,
                        _ = R.words,
                        b = R.sigBytes,
                        v = this.blockSize,
                        A = b / (4 * v),
                        O = (A = d ? e.ceil(A) : e.max((0 | A) - this._minBufferSize, 0)) * v,
                        j = e.min(4 * O, b);
                    if (O) {
                        for (var B = 0; B < O; B += v) this._doProcessBlock(_, B);
                        I = _.splice(0, O), R.sigBytes -= j
                    }
                    return new h.init(I, j)
                },
                clone: function() {
                    var d = u.clone.call(this);
                    return d._data = this._data.clone(), d
                },
                _minBufferSize: 0
            });
        c.Hasher = P.extend({
            cfg: u.extend(),
            init: function(d) {
                this.cfg = this.cfg.extend(d), this.reset()
            },
            reset: function() {
                P.reset.call(this), this._doReset()
            },
            update: function(d) {
                return this._append(d), this._process(), this
            },
            finalize: function(d) {
                return d && this._append(d), this._doFinalize()
            },
            blockSize: 16,
            _createHelper: function(d) {
                return function(I, R) {
                    return new d.init(R).finalize(I)
                }
            },
            _createHmacHelper: function(d) {
                return function(I, R) {
                    return new V.HMAC.init(d, R).finalize(I)
                }
            }
        });
        var V = m.algo = {};
        return m
    }(Math), t)), qt.exports;
    var t
}
const $t = ht(li.exports = bt().enc.Utf8);
var te, ee = {
    exports: {}
};

function oi() {
    return te ? ee.exports : (te = 1, ee.exports = (t = bt(), function() {
        var e = t,
            i = e.lib.WordArray;

        function l(o, r, m) {
            for (var c = [], u = 0, h = 0; h < r; h++)
                if (h % 4) {
                    var g = m[o.charCodeAt(h - 1)] << h % 4 * 2 | m[o.charCodeAt(h)] >>> 6 - h % 4 * 2;
                    c[u >>> 2] |= g << 24 - u % 4 * 8, u++
                }
            return i.create(c, u)
        }
        e.enc.Base64 = {
            stringify: function(o) {
                var r = o.words,
                    m = o.sigBytes,
                    c = this._map;
                o.clamp();
                for (var u = [], h = 0; h < m; h += 3)
                    for (var g = (r[h >>> 2] >>> 24 - h % 4 * 8 & 255) << 16 | (r[h + 1 >>> 2] >>> 24 - (h + 1) % 4 * 8 & 255) << 8 | r[h + 2 >>> 2] >>> 24 - (h + 2) % 4 * 8 & 255, f = 0; f < 4 && h + .75 * f < m; f++) u.push(c.charAt(g >>> 6 * (3 - f) & 63));
                var T = c.charAt(64);
                if (T)
                    for (; u.length % 4;) u.push(T);
                return u.join("")
            },
            parse: function(o) {
                var r = o.length,
                    m = this._map,
                    c = this._reverseMap;
                if (!c) {
                    c = this._reverseMap = [];
                    for (var u = 0; u < m.length; u++) c[m.charCodeAt(u)] = u
                }
                var h = m.charAt(64);
                if (h) {
                    var g = o.indexOf(h);
                    g !== -1 && (r = g)
                }
                return l(o, r, c)
            },
            _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
        }
    }(), t.enc.Base64));
    var t
}
const ie = ht(oi()),
    Ae = "dmFyIGs9T2JqZWN0LmRlZmluZVByb3BlcnR5O3ZhciBKPShkLGYsdik9PmYgaW4gZD9rKGQsZix7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6dn0pOmRbZl09djt2YXIgaD0oZCxmLHYpPT4oSihkLHR5cGVvZiBmIT0ic3ltYm9sIj9mKyIiOmYsdiksdik7KGZ1bmN0aW9uKCl7InVzZSBzdHJpY3QiO3ZhciBkPXtleHBvcnRzOnt9fSxmPXR5cGVvZiBSZWZsZWN0PT0ib2JqZWN0Ij9SZWZsZWN0Om51bGwsdj1mJiZ0eXBlb2YgZi5hcHBseT09ImZ1bmN0aW9uIj9mLmFwcGx5OmZ1bmN0aW9uKGUsbixyKXtyZXR1cm4gRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5LmNhbGwoZSxuLHIpfSxMO2YmJnR5cGVvZiBmLm93bktleXM9PSJmdW5jdGlvbiI/TD1mLm93bktleXM6T2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scz9MPWZ1bmN0aW9uKGUpe3JldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhlKS5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhlKSl9Okw9ZnVuY3Rpb24oZSl7cmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGUpfTtmdW5jdGlvbiBTKHQpe2NvbnNvbGUmJmNvbnNvbGUud2FybiYmY29uc29sZS53YXJuKHQpfXZhciBfPU51bWJlci5pc05hTnx8ZnVuY3Rpb24oZSl7cmV0dXJuIGUhPT1lfTtmdW5jdGlvbiB1KCl7dS5pbml0LmNhbGwodGhpcyl9ZC5leHBvcnRzPXUsZC5leHBvcnRzLm9uY2U9cSx1LkV2ZW50RW1pdHRlcj11LHUucHJvdG90eXBlLl9ldmVudHM9dm9pZCAwLHUucHJvdG90eXBlLl9ldmVudHNDb3VudD0wLHUucHJvdG90eXBlLl9tYXhMaXN0ZW5lcnM9dm9pZCAwO3ZhciBNPTEwO2Z1bmN0aW9uIEUodCl7aWYodHlwZW9mIHQhPSJmdW5jdGlvbiIpdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlICJsaXN0ZW5lciIgYXJndW1lbnQgbXVzdCBiZSBvZiB0eXBlIEZ1bmN0aW9uLiBSZWNlaXZlZCB0eXBlICcrdHlwZW9mIHQpfU9iamVjdC5kZWZpbmVQcm9wZXJ0eSh1LCJkZWZhdWx0TWF4TGlzdGVuZXJzIix7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gTX0sc2V0OmZ1bmN0aW9uKHQpe2lmKHR5cGVvZiB0IT0ibnVtYmVyInx8dDwwfHxfKHQpKXRocm93IG5ldyBSYW5nZUVycm9yKCdUaGUgdmFsdWUgb2YgImRlZmF1bHRNYXhMaXN0ZW5lcnMiIGlzIG91dCBvZiByYW5nZS4gSXQgbXVzdCBiZSBhIG5vbi1uZWdhdGl2ZSBudW1iZXIuIFJlY2VpdmVkICcrdCsiLiIpO009dH19KSx1LmluaXQ9ZnVuY3Rpb24oKXsodGhpcy5fZXZlbnRzPT09dm9pZCAwfHx0aGlzLl9ldmVudHM9PT1PYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpcykuX2V2ZW50cykmJih0aGlzLl9ldmVudHM9T2JqZWN0LmNyZWF0ZShudWxsKSx0aGlzLl9ldmVudHNDb3VudD0wKSx0aGlzLl9tYXhMaXN0ZW5lcnM9dGhpcy5fbWF4TGlzdGVuZXJzfHx2b2lkIDB9LHUucHJvdG90eXBlLnNldE1heExpc3RlbmVycz1mdW5jdGlvbihlKXtpZih0eXBlb2YgZSE9Im51bWJlciJ8fGU8MHx8XyhlKSl0aHJvdyBuZXcgUmFuZ2VFcnJvcignVGhlIHZhbHVlIG9mICJuIiBpcyBvdXQgb2YgcmFuZ2UuIEl0IG11c3QgYmUgYSBub24tbmVnYXRpdmUgbnVtYmVyLiBSZWNlaXZlZCAnK2UrIi4iKTtyZXR1cm4gdGhpcy5fbWF4TGlzdGVuZXJzPWUsdGhpc307ZnVuY3Rpb24gTyh0KXtyZXR1cm4gdC5fbWF4TGlzdGVuZXJzPT09dm9pZCAwP3UuZGVmYXVsdE1heExpc3RlbmVyczp0Ll9tYXhMaXN0ZW5lcnN9dS5wcm90b3R5cGUuZ2V0TWF4TGlzdGVuZXJzPWZ1bmN0aW9uKCl7cmV0dXJuIE8odGhpcyl9LHUucHJvdG90eXBlLmVtaXQ9ZnVuY3Rpb24oZSl7Zm9yKHZhciBuPVtdLHI9MTtyPGFyZ3VtZW50cy5sZW5ndGg7cisrKW4ucHVzaChhcmd1bWVudHNbcl0pO3ZhciBzPWU9PT0iZXJyb3IiLG89dGhpcy5fZXZlbnRzO2lmKG8hPT12b2lkIDApcz1zJiZvLmVycm9yPT09dm9pZCAwO2Vsc2UgaWYoIXMpcmV0dXJuITE7aWYocyl7dmFyIGk7aWYobi5sZW5ndGg+MCYmKGk9blswXSksaSBpbnN0YW5jZW9mIEVycm9yKXRocm93IGk7dmFyIGE9bmV3IEVycm9yKCJVbmhhbmRsZWQgZXJyb3IuIisoaT8iICgiK2kubWVzc2FnZSsiKSI6IiIpKTt0aHJvdyBhLmNvbnRleHQ9aSxhfXZhciBjPW9bZV07aWYoYz09PXZvaWQgMClyZXR1cm4hMTtpZih0eXBlb2YgYz09ImZ1bmN0aW9uIil2KGMsdGhpcyxuKTtlbHNlIGZvcih2YXIgcD1jLmxlbmd0aCx5PUMoYyxwKSxyPTA7cjxwOysrcil2KHlbcl0sdGhpcyxuKTtyZXR1cm4hMH07ZnVuY3Rpb24geCh0LGUsbixyKXt2YXIgcyxvLGk7aWYoRShuKSxvPXQuX2V2ZW50cyxvPT09dm9pZCAwPyhvPXQuX2V2ZW50cz1PYmplY3QuY3JlYXRlKG51bGwpLHQuX2V2ZW50c0NvdW50PTApOihvLm5ld0xpc3RlbmVyIT09dm9pZCAwJiYodC5lbWl0KCJuZXdMaXN0ZW5lciIsZSxuLmxpc3RlbmVyP24ubGlzdGVuZXI6biksbz10Ll9ldmVudHMpLGk9b1tlXSksaT09PXZvaWQgMClpPW9bZV09biwrK3QuX2V2ZW50c0NvdW50O2Vsc2UgaWYodHlwZW9mIGk9PSJmdW5jdGlvbiI/aT1vW2VdPXI/W24saV06W2ksbl06cj9pLnVuc2hpZnQobik6aS5wdXNoKG4pLHM9Tyh0KSxzPjAmJmkubGVuZ3RoPnMmJiFpLndhcm5lZCl7aS53YXJuZWQ9ITA7dmFyIGE9bmV3IEVycm9yKCJQb3NzaWJsZSBFdmVudEVtaXR0ZXIgbWVtb3J5IGxlYWsgZGV0ZWN0ZWQuICIraS5sZW5ndGgrIiAiK1N0cmluZyhlKSsiIGxpc3RlbmVycyBhZGRlZC4gVXNlIGVtaXR0ZXIuc2V0TWF4TGlzdGVuZXJzKCkgdG8gaW5jcmVhc2UgbGltaXQiKTthLm5hbWU9Ik1heExpc3RlbmVyc0V4Y2VlZGVkV2FybmluZyIsYS5lbWl0dGVyPXQsYS50eXBlPWUsYS5jb3VudD1pLmxlbmd0aCxTKGEpfXJldHVybiB0fXUucHJvdG90eXBlLmFkZExpc3RlbmVyPWZ1bmN0aW9uKGUsbil7cmV0dXJuIHgodGhpcyxlLG4sITEpfSx1LnByb3RvdHlwZS5vbj11LnByb3RvdHlwZS5hZGRMaXN0ZW5lcix1LnByb3RvdHlwZS5wcmVwZW5kTGlzdGVuZXI9ZnVuY3Rpb24oZSxuKXtyZXR1cm4geCh0aGlzLGUsbiwhMCl9O2Z1bmN0aW9uIFQoKXtpZighdGhpcy5maXJlZClyZXR1cm4gdGhpcy50YXJnZXQucmVtb3ZlTGlzdGVuZXIodGhpcy50eXBlLHRoaXMud3JhcEZuKSx0aGlzLmZpcmVkPSEwLGFyZ3VtZW50cy5sZW5ndGg9PT0wP3RoaXMubGlzdGVuZXIuY2FsbCh0aGlzLnRhcmdldCk6dGhpcy5saXN0ZW5lci5hcHBseSh0aGlzLnRhcmdldCxhcmd1bWVudHMpfWZ1bmN0aW9uIFIodCxlLG4pe3ZhciByPXtmaXJlZDohMSx3cmFwRm46dm9pZCAwLHRhcmdldDp0LHR5cGU6ZSxsaXN0ZW5lcjpufSxzPVQuYmluZChyKTtyZXR1cm4gcy5saXN0ZW5lcj1uLHIud3JhcEZuPXMsc311LnByb3RvdHlwZS5vbmNlPWZ1bmN0aW9uKGUsbil7cmV0dXJuIEUobiksdGhpcy5vbihlLFIodGhpcyxlLG4pKSx0aGlzfSx1LnByb3RvdHlwZS5wcmVwZW5kT25jZUxpc3RlbmVyPWZ1bmN0aW9uKGUsbil7cmV0dXJuIEUobiksdGhpcy5wcmVwZW5kTGlzdGVuZXIoZSxSKHRoaXMsZSxuKSksdGhpc30sdS5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXI9ZnVuY3Rpb24oZSxuKXt2YXIgcixzLG8saSxhO2lmKEUobikscz10aGlzLl9ldmVudHMscz09PXZvaWQgMClyZXR1cm4gdGhpcztpZihyPXNbZV0scj09PXZvaWQgMClyZXR1cm4gdGhpcztpZihyPT09bnx8ci5saXN0ZW5lcj09PW4pLS10aGlzLl9ldmVudHNDb3VudD09PTA/dGhpcy5fZXZlbnRzPU9iamVjdC5jcmVhdGUobnVsbCk6KGRlbGV0ZSBzW2VdLHMucmVtb3ZlTGlzdGVuZXImJnRoaXMuZW1pdCgicmVtb3ZlTGlzdGVuZXIiLGUsci5saXN0ZW5lcnx8bikpO2Vsc2UgaWYodHlwZW9mIHIhPSJmdW5jdGlvbiIpe2ZvcihvPS0xLGk9ci5sZW5ndGgtMTtpPj0wO2ktLSlpZihyW2ldPT09bnx8cltpXS5saXN0ZW5lcj09PW4pe2E9cltpXS5saXN0ZW5lcixvPWk7YnJlYWt9aWYobzwwKXJldHVybiB0aGlzO289PT0wP3Iuc2hpZnQoKTpEKHIsbyksci5sZW5ndGg9PT0xJiYoc1tlXT1yWzBdKSxzLnJlbW92ZUxpc3RlbmVyIT09dm9pZCAwJiZ0aGlzLmVtaXQoInJlbW92ZUxpc3RlbmVyIixlLGF8fG4pfXJldHVybiB0aGlzfSx1LnByb3RvdHlwZS5vZmY9dS5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXIsdS5wcm90b3R5cGUucmVtb3ZlQWxsTGlzdGVuZXJzPWZ1bmN0aW9uKGUpe3ZhciBuLHIscztpZihyPXRoaXMuX2V2ZW50cyxyPT09dm9pZCAwKXJldHVybiB0aGlzO2lmKHIucmVtb3ZlTGlzdGVuZXI9PT12b2lkIDApcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGg9PT0wPyh0aGlzLl9ldmVudHM9T2JqZWN0LmNyZWF0ZShudWxsKSx0aGlzLl9ldmVudHNDb3VudD0wKTpyW2VdIT09dm9pZCAwJiYoLS10aGlzLl9ldmVudHNDb3VudD09PTA/dGhpcy5fZXZlbnRzPU9iamVjdC5jcmVhdGUobnVsbCk6ZGVsZXRlIHJbZV0pLHRoaXM7aWYoYXJndW1lbnRzLmxlbmd0aD09PTApe3ZhciBvPU9iamVjdC5rZXlzKHIpLGk7Zm9yKHM9MDtzPG8ubGVuZ3RoOysrcylpPW9bc10saSE9PSJyZW1vdmVMaXN0ZW5lciImJnRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKGkpO3JldHVybiB0aGlzLnJlbW92ZUFsbExpc3RlbmVycygicmVtb3ZlTGlzdGVuZXIiKSx0aGlzLl9ldmVudHM9T2JqZWN0LmNyZWF0ZShudWxsKSx0aGlzLl9ldmVudHNDb3VudD0wLHRoaXN9aWYobj1yW2VdLHR5cGVvZiBuPT0iZnVuY3Rpb24iKXRoaXMucmVtb3ZlTGlzdGVuZXIoZSxuKTtlbHNlIGlmKG4hPT12b2lkIDApZm9yKHM9bi5sZW5ndGgtMTtzPj0wO3MtLSl0aGlzLnJlbW92ZUxpc3RlbmVyKGUsbltzXSk7cmV0dXJuIHRoaXN9O2Z1bmN0aW9uIE4odCxlLG4pe3ZhciByPXQuX2V2ZW50cztpZihyPT09dm9pZCAwKXJldHVybltdO3ZhciBzPXJbZV07cmV0dXJuIHM9PT12b2lkIDA/W106dHlwZW9mIHM9PSJmdW5jdGlvbiI/bj9bcy5saXN0ZW5lcnx8c106W3NdOm4/RihzKTpDKHMscy5sZW5ndGgpfXUucHJvdG90eXBlLmxpc3RlbmVycz1mdW5jdGlvbihlKXtyZXR1cm4gTih0aGlzLGUsITApfSx1LnByb3RvdHlwZS5yYXdMaXN0ZW5lcnM9ZnVuY3Rpb24oZSl7cmV0dXJuIE4odGhpcyxlLCExKX0sdS5saXN0ZW5lckNvdW50PWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHR5cGVvZiB0Lmxpc3RlbmVyQ291bnQ9PSJmdW5jdGlvbiI/dC5saXN0ZW5lckNvdW50KGUpOmouY2FsbCh0LGUpfSx1LnByb3RvdHlwZS5saXN0ZW5lckNvdW50PWo7ZnVuY3Rpb24gaih0KXt2YXIgZT10aGlzLl9ldmVudHM7aWYoZSE9PXZvaWQgMCl7dmFyIG49ZVt0XTtpZih0eXBlb2Ygbj09ImZ1bmN0aW9uIilyZXR1cm4gMTtpZihuIT09dm9pZCAwKXJldHVybiBuLmxlbmd0aH1yZXR1cm4gMH11LnByb3RvdHlwZS5ldmVudE5hbWVzPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2V2ZW50c0NvdW50PjA/TCh0aGlzLl9ldmVudHMpOltdfTtmdW5jdGlvbiBDKHQsZSl7Zm9yKHZhciBuPW5ldyBBcnJheShlKSxyPTA7cjxlOysrciluW3JdPXRbcl07cmV0dXJuIG59ZnVuY3Rpb24gRCh0LGUpe2Zvcig7ZSsxPHQubGVuZ3RoO2UrKyl0W2VdPXRbZSsxXTt0LnBvcCgpfWZ1bmN0aW9uIEYodCl7Zm9yKHZhciBlPW5ldyBBcnJheSh0Lmxlbmd0aCksbj0wO248ZS5sZW5ndGg7KytuKWVbbl09dFtuXS5saXN0ZW5lcnx8dFtuXTtyZXR1cm4gZX1mdW5jdGlvbiBxKHQsZSl7cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKG4scil7ZnVuY3Rpb24gcyhpKXt0LnJlbW92ZUxpc3RlbmVyKGUsbykscihpKX1mdW5jdGlvbiBvKCl7dHlwZW9mIHQucmVtb3ZlTGlzdGVuZXI9PSJmdW5jdGlvbiImJnQucmVtb3ZlTGlzdGVuZXIoImVycm9yIixzKSxuKFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKSl9QSh0LGUsbyx7b25jZTohMH0pLGUhPT0iZXJyb3IiJiZHKHQscyx7b25jZTohMH0pfSl9ZnVuY3Rpb24gRyh0LGUsbil7dHlwZW9mIHQub249PSJmdW5jdGlvbiImJkEodCwiZXJyb3IiLGUsbil9ZnVuY3Rpb24gQSh0LGUsbixyKXtpZih0eXBlb2YgdC5vbj09ImZ1bmN0aW9uIilyLm9uY2U/dC5vbmNlKGUsbik6dC5vbihlLG4pO2Vsc2UgaWYodHlwZW9mIHQuYWRkRXZlbnRMaXN0ZW5lcj09ImZ1bmN0aW9uIil0LmFkZEV2ZW50TGlzdGVuZXIoZSxmdW5jdGlvbiBzKG8pe3Iub25jZSYmdC5yZW1vdmVFdmVudExpc3RlbmVyKGUscyksbihvKX0pO2Vsc2UgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlICJlbWl0dGVyIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgRXZlbnRFbWl0dGVyLiBSZWNlaXZlZCB0eXBlICcrdHlwZW9mIHQpfXZhciBXPWQuZXhwb3J0cyxiPXNlbGYsVT17c2VsZjoxLG9ubWVzc2FnZToxLHBvc3RNZXNzYWdlOjEsZ2xvYmFsOjEsd2w6MSxldmFsOjEsQXJyYXk6MSxCb29sZWFuOjEsUmVmbGVjdDoxLFByb3h5OjEsU3ltYm9sOjEsRGF0ZToxLEZ1bmN0aW9uOjEsTnVtYmVyOjEsT2JqZWN0OjEsUmVnRXhwOjEsU3RyaW5nOjEsRXJyb3I6MSxFdmFsRXJyb3I6MSxSYW5nZUVycm9yOjEsUmVmZXJlbmNlRXJyb3I6MSxTeW50YXhFcnJvcjoxLFR5cGVFcnJvcjoxLFVSSUVycm9yOjEsZGVjb2RlVVJJOjEsZGVjb2RlVVJJQ29tcG9uZW50OjEsZW5jb2RlVVJJOjEsZW5jb2RlVVJJQ29tcG9uZW50OjEsaXNGaW5pdGU6MSxpc05hTjoxLHBhcnNlRmxvYXQ6MSxwYXJzZUludDoxLEluZmluaXR5OjEsSlNPTjoxLE1hdGg6MSxOYU46MSx1bmRlZmluZWQ6MSxjb25zb2xlOjEsUHJvbWlzZToxfTtPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhiKS5mb3JFYWNoKGZ1bmN0aW9uKHQpe2lmKCFVLmhhc093blByb3BlcnR5KHQpKXRyeXtPYmplY3QuZGVmaW5lUHJvcGVydHkoYix0LHtnZXQ6ZnVuY3Rpb24oKXt0aHJvdyBuZXcgRXJyb3IoIlNlY3VyaXR5IEV4Y2VwdGlvbjogY2Fubm90IGFjY2VzcyAiK3QpfSxjb25maWd1cmFibGU6ITF9KX1jYXRjaChlKXt9fSk7Y2xhc3MgSCBleHRlbmRzIEVycm9ye2NvbnN0cnVjdG9yKCl7c3VwZXIoLi4uYXJndW1lbnRzKTtoKHRoaXMsIm5hbWUiLCJNZXNzYWdlRXJyb3IiKX19Y2xhc3MgS3tjb25zdHJ1Y3RvcihlLG49d2luZG93KXtoKHRoaXMsInRpbWVvdXQiLDVlMyk7aCh0aGlzLCJtc2dJZCIsMCk7aCh0aGlzLCJ0YXJnZXQiKTtoKHRoaXMsInNvdXJjZSIpO2godGhpcywicmVxY2JzIix7fSk7aCh0aGlzLCJldmVudERpY3QiLHt9KTt0aGlzLnRhcmdldD1lLHRoaXMuc291cmNlPW4sdGhpcy5vbk1lc3NhZ2U9dGhpcy5vbk1lc3NhZ2UuYmluZCh0aGlzKSx0aGlzLnNvdXJjZS5hZGRFdmVudExpc3RlbmVyKCJtZXNzYWdlIix0aGlzLm9uTWVzc2FnZSl9YXN5bmMgb25NZXNzYWdlKGUpe2NvbnN0IG49ZS5zb3VyY2U7aWYoZS5zb3VyY2UmJm4hPT10aGlzLnRhcmdldClyZXR1cm47bGV0e21zZ2lkOnIsZXZlbnQ6cyxwYXlsb2FkOm99PWUuZGF0YTtpZighbylyZXR1cm47bGV0W2ksYV09bztpZihzKXRyeXtsZXQgYz10aGlzLnRyaWdnZXIocyxhKTtpZighcilyZXR1cm47YyBpbnN0YW5jZW9mIFByb21pc2U/Yy50aGVuKHA9Pnt0aGlzLnNlbmRNZXNzYWdlKHttc2dpZDpyLHBheWxvYWQ6W251bGwscF19KX0pLmNhdGNoKHA9Pnt0aGlzLnNlbmRNZXNzYWdlKHttc2dpZDpyLHBheWxvYWQ6W3AubWVzc2FnZV19KX0pOnRoaXMuc2VuZE1lc3NhZ2Uoe21zZ2lkOnIscGF5bG9hZDpbbnVsbCxjXX0pfWNhdGNoKGMpe3RoaXMuc2VuZE1lc3NhZ2Uoe21zZ2lkOnIscGF5bG9hZDpbYy5tZXNzYWdlXX0pfWVsc2UgaWYociYmbyE9bnVsbCl7aWYoIXRoaXMucmVxY2JzW3JdKXJldHVybjtpIT09bnVsbD90aGlzLnJlcWNic1tyXVsxXShuZXcgSChpKSk6dGhpcy5yZXFjYnNbcl1bMF0oYSl9fXNlbmRNZXNzYWdlKGUpe3RoaXMudGFyZ2V0JiZ0aGlzLnRhcmdldC5wb3N0TWVzc2FnZShlLCIqIil9ZW1pdChlLG49bnVsbCl7dGhpcy5zZW5kTWVzc2FnZSh7ZXZlbnQ6ZSxwYXlsb2FkOltudWxsLG5dfSl9cmVxdWVzdChlLG49bnVsbCl7dGhpcy5tc2dJZCsrO2xldCByPXRoaXMubXNnSWQ7cmV0dXJuIG5ldyBQcm9taXNlKChzLG8pPT57bGV0IGk9KC4uLnkpPT57YygpLHMoLi4ueSl9LGE9KC4uLnkpPT57YygpLG8oLi4ueSl9LGM9KCk9Pnt0aGlzLnRpbWVvdXQ+MCYmY2xlYXJUaW1lb3V0KHApLGRlbGV0ZSB0aGlzLnJlcWNic1tyXX0scD0wO3RoaXMudGltZW91dD4wJiYocD13aW5kb3cuc2V0VGltZW91dChhLmJpbmQodGhpcyxgVGltZU91dDogJHtlfWApLHRoaXMudGltZW91dCkpLHRoaXMucmVxY2JzW3JdPVtpLGFdLHRoaXMuc2VuZE1lc3NhZ2Uoe21zZ2lkOnIsZXZlbnQ6ZSxwYXlsb2FkOltudWxsLG5dfSl9KX1vbihlLG4pe3RoaXMuZXZlbnREaWN0W2VdfHwodGhpcy5ldmVudERpY3RbZV09W10pLHRoaXMuZXZlbnREaWN0W2VdLnB1c2gobil9b2ZmKGUsbil7Y29uc3Qgcj10aGlzLmV2ZW50RGljdFtlXTtpZighcilyZXR1cm47bGV0IHM9ci5pbmRleE9mKG4pO3MhPS0xJiYoci5zcGxpY2UocywxKSxyLmxlbmd0aD09MCYmZGVsZXRlIHRoaXMuZXZlbnREaWN0W2VdKX10cmlnZ2VyKGUsbj17fSl7bGV0IHI9dGhpcy5ldmVudERpY3RbZV07aWYoIXIpdGhyb3cgbmV3IEVycm9yKGBSZXF1ZXN0IE5vdCBGb3VuZDogJHtlfWApO2lmKHIubGVuZ3RoPT0xKXJldHVybiByWzBdKG4pO3tsZXQgcz1bXTtmb3IobGV0IG89MCxpPXIubGVuZ3RoO288aTtvKyspcy5wdXNoKHJbb10obikpO3JldHVybiBzfX1kZXN0cm95KCl7dGhpcy5ldmVudERpY3Q9e30sdGhpcy5yZXFjYnM9e30sdGhpcy5zb3VyY2UucmVtb3ZlRXZlbnRMaXN0ZW5lcigibWVzc2FnZSIsdGhpcy5vbk1lc3NhZ2UpfX1jbGFzcyBCIGV4dGVuZHMgS3tjb25zdHJ1Y3RvcihlKXtzdXBlcihlLGUpfXNlbmRNZXNzYWdlKGUpe3RoaXMudGFyZ2V0LnBvc3RNZXNzYWdlKGUpfWRlc3Ryb3koKXtzdXBlci5kZXN0cm95KCksdGhpcy50YXJnZXQudGVybWluYXRlKCl9fWNvbnN0IGw9bmV3IEIoYik7bC50aW1lb3V0PTA7bGV0IEksdztjb25zdCBQPXttYXhBbW91bnQ6MCxtaW5BbW91bnQ6MCxjdXJyZW5jeU5hbWU6IiIsYW1vdW50OjB9LG09e2luZm8odCl7bC5lbWl0KCJsb2ciLHt0eXBlOjAsbWVzc2FnZTp0fSl9LHN1Y2Nlc3ModCl7bC5lbWl0KCJsb2ciLHt0eXBlOjEsbWVzc2FnZTp0fSl9LGVycm9yKHQpe2wuZW1pdCgibG9nIix7dHlwZToyLG1lc3NhZ2U6dH0pfX07Y2xhc3MgJCBleHRlbmRzIFcuRXZlbnRFbWl0dGVye2NvbnN0cnVjdG9yKCl7c3VwZXIoKTtoKHRoaXMsImhpc3RvcnkiLFtdKTtoKHRoaXMsImlzSGlzdG9yeVdhcm5pbmciLCExKTt0aGlzLm9uR2FtZUVuZD10aGlzLm9uR2FtZUVuZC5iaW5kKHRoaXMpfWFzeW5jIGJldChuLHIpe3JldHVybiBhd2FpdCBsLnJlcXVlc3QoImJldCIse2Ftb3VudDpuLHBheW91dDpyfSl9c3RvcCgpe3JldHVybiBsLmVtaXQoInN0b3AiKX1vbkJldCgpe31vbkdhbWVTdGFydCgpe3RoaXMuZW1pdCgiR0FNRV9TVEFSVElORyIpLGcub25CZXQoKX1vbkdhbWVFbmQobil7dGhpcy5oaXN0b3J5PW4sdGhpcy5lbWl0KCJHQU1FX0VOREVEIixuWzBdKX1nZXRIaXN0b3J5KCl7cmV0dXJuIHRoaXMuaXNIaXN0b3J5V2FybmluZ3x8KG0uaW5mbygiVGhlIGhpc3RvcnkgQVBJIGlzIGRlcHJlY2F0ZWQsIHlvdSBzaG91bGQgc3RvcmUgaXQgeW91cnNlbGYhIiksdGhpcy5pc0hpc3RvcnlXYXJuaW5nPSEwKSx0aGlzLmhpc3Rvcnl9fWNvbnN0IGc9bmV3ICQ7bC5vbigicmVnaXN0Iix0PT57bGV0IGU9bmV3IEZ1bmN0aW9uKCJnYW1lIiwiZW5naW5lIiwiY3VycmVuY3kiLCJsb2ciLGAke3R9OyByZXR1cm4gW2NvbmZpZywgbWFpbl07YCksW24scl09ZShnLGcsUCxtKTtyZXR1cm4gdz1uLEk9cix3fSksbC5vbigicnVuIix0PT57T2JqZWN0LmFzc2lnbih3LHQpO3RyeXtJKCl9Y2F0Y2goZSl7bS5lcnJvcihTdHJpbmcoZSkpLGcuc3RvcCgpfX0pLGwub24oInN5bmNDdXJyZW5jeSIsdD0+T2JqZWN0LmFzc2lnbihQLHQpKSxsLm9uKCJiZXQiLCgpPT57dHJ5e2cub25HYW1lU3RhcnQoKX1jYXRjaCh0KXttLmVycm9yKFN0cmluZyh0KSksZy5zdG9wKCl9fSksbC5vbigiZ2FtZUVuZCIsZy5vbkdhbWVFbmQpLGIuYWRkRXZlbnRMaXN0ZW5lcigidW5oYW5kbGVkcmVqZWN0aW9uIix0PT57bS5lcnJvcihTdHJpbmcodC5yZWFzb24pKSxnLnN0b3AoKX0pfSkoKTsK",
    ae = typeof window != "undefined" && window.Blob && new Blob([atob(Ae)], {
        type: "text/javascript;charset=utf-8"
    });

function ni() {
    let t;
    try {
        if (t = ae && (window.URL || window.webkitURL).createObjectURL(ae), !t) throw "";
        return new Worker(t)
    } catch (e) {
        return new Worker("data:application/javascript;base64," + Ae)
    } finally {
        t && (window.URL || window.webkitURL).revokeObjectURL(t)
    }
}
class ri extends Error {
    constructor() {
        super(...arguments);
        E(this, "name", "MessageError")
    }
}
class mi {
    constructor(e, i = window) {
        E(this, "timeout", 5e3);
        E(this, "msgId", 0);
        E(this, "target");
        E(this, "source");
        E(this, "reqcbs", {});
        E(this, "eventDict", {});
        this.target = e, this.source = i, this.onMessage = this.onMessage.bind(this), this.source.addEventListener("message", this.onMessage)
    }
    async onMessage(e) {
        const i = e.source;
        if (e.source && i !== this.target) return;
        let {
            msgid: l,
            event: o,
            payload: r
        } = e.data;
        if (!r) return;
        let [m, c] = r;
        if (o) try {
            let u = this.trigger(o, c);
            if (!l) return;
            u instanceof Promise ? u.then(h => {
                this.sendMessage({
                    msgid: l,
                    payload: [null, h]
                })
            }).catch(h => {
                this.sendMessage({
                    msgid: l,
                    payload: [h.message]
                })
            }) : this.sendMessage({
                msgid: l,
                payload: [null, u]
            })
        } catch (u) {
            this.sendMessage({
                msgid: l,
                payload: [u.message]
            })
        } else if (l && r != null) {
            if (!this.reqcbs[l]) return;
            m !== null ? this.reqcbs[l][1](new ri(m)) : this.reqcbs[l][0](c)
        }
    }
    sendMessage(e) {
        this.target && this.target.postMessage(e, "*")
    }
    emit(e, i = null) {
        this.sendMessage({
            event: e,
            payload: [null, i]
        })
    }
    request(e, i = null) {
        this.msgId++;
        let l = this.msgId;
        return new Promise((o, r) => {
            let m = (...h) => {
                    c(), r(...h)
                },
                c = () => {
                    this.timeout > 0 && clearTimeout(u), delete this.reqcbs[l]
                },
                u = 0;
            this.timeout > 0 && (u = window.setTimeout(m.bind(this, `TimeOut: ${e}`), this.timeout)), this.reqcbs[l] = [(...h) => {
                c(), o(...h)
            }, m], this.sendMessage({
                msgid: l,
                event: e,
                payload: [null, i]
            })
        })
    }
    on(e, i) {
        this.eventDict[e] || (this.eventDict[e] = []), this.eventDict[e].push(i)
    }
    off(e, i) {
        const l = this.eventDict[e];
        if (!l) return;
        let o = l.indexOf(i);
        o != -1 && (l.splice(o, 1), l.length == 0 && delete this.eventDict[e])
    }
    trigger(e, i = {}) {
        let l = this.eventDict[e];
        if (!l) throw new Error(`Request Not Found: ${e}`);
        if (l.length == 1) return l[0](i); {
            let o = [];
            for (let r = 0, m = l.length; r < m; r++) o.push(l[r](i));
            return o
        }
    }
    destroy() {
        this.eventDict = {}, this.reqcbs = {}, this.source.removeEventListener("message", this.onMessage)
    }
}
class ci extends mi {
    constructor(e) {
        super(e, e)
    }
    sendMessage(e) {
        this.target.postMessage(e)
    }
    destroy() {
        super.destroy(), this.target.terminate()
    }
}
const {
    proxy: Al,
    subscribe: Ol,
    ref: Nt
} = n.valtio, Et = class Et extends n.EventEmitter {
    constructor(i) {
        super();
        E(this, "game");
        E(this, "state");
        E(this, "interval", 500);
        E(this, "prevBetTime", Date.now());
        E(this, "isAutoStep", !0);
        E(this, "messager", null);
        E(this, "handleBet", () => {
            throw new Error("no bet handle")
        });
        E(this, "initPms", null);
        E(this, "logid", 0);
        this.game = i, this.state = this.game.getState().script, this.start = this.start.bind(this), this.stop = this.stop.bind(this), this.unRegist = this.unRegist.bind(this), this.step = this.step.bind(this), this.enableAutoStep(!0)
    }
    async initScript() {
        return this.initPms || (await n.accountStore.waitLogin(), this.initPms = n.http.post("/game/manage/scripts/list/", {
            gameName: this.game.name
        }).then(i => {
            this.state.scriptList = i.map(({
                name: l,
                content: o,
                id: r,
                userId: m
            }) => Nt({
                name: l,
                content: o,
                id: r,
                userId: m
            }))
        }).catch(() => {
            this.initPms = null
        })), this.initPms
    }
    async delScript({
        id: i
    }) {
        await n.http.post("/game/manage/scripts/delete/", {
            id: i
        });
        let l = this.state.scriptList.findIndex(o => o.id == i);
        this.state.scriptList.splice(l, 1)
    }
    async updateScript(i) {
        i = Nt(i);
        const {
            id: l,
            name: o,
            content: r
        } = i;
        if (l == 0) {
            let {
                id: m,
                userId: c
            } = await n.http.post("/game/manage/scripts/add/", {
                gameName: this.game.name,
                name: o,
                content: ie.stringify($t.parse(r))
            });
            this.state.scriptList.push(Nt({
                id: m,
                userId: c,
                name: o,
                content: r
            }))
        } else {
            await n.http.post("/game/manage/scripts/update/", {
                id: l,
                name: o,
                content: ie.stringify($t.parse(r))
            }), i.userId = n.accountStore.state.userId;
            let m = this.state.scriptList.findIndex(c => c.id == l);
            this.state.scriptList.splice(m, 1, i)
        }
    }
    async regist(i) {
        this.messager = new ci(new ni), this.messager.on("bet", this.handleBet), this.messager.on("log", o => this.addLog(o.message, o.type)), this.messager.on("stop", this.stop), this.messager.on("getHistory", () => this.emit("getHistory")), this.syncCurrency();
        let l = null;
        try {
            l = await this.messager.request("regist", i.content)
        } catch (o) {
            this.addLog(o.message, 2)
        } finally {
            this.state.script = i, this.state.config || (this.state.config = l)
        }
    }
    unRegist() {
        this.stop(), this.state.script = null, this.state.logs = [], this.state.config = null
    }
    syncCurrency() {
        var o;
        const {
            currencyName: i,
            jackpot: l
        } = this.game.getState();
        n.walletStore.state[i] && l[i] && ((o = this.messager) == null || o.emit("syncCurrency", {
            maxAmount: l[i].maxBetAmount,
            minAmount: l[i].minBetAmount,
            currencyName: i,
            amount: Number(n.walletStore.state[i].amount)
        }))
    }
    onGameEnd(i) {
        var l;
        (l = this.messager) == null || l.emit("gameEnd", i)
    }
    async start() {
        var i;
        this.game.setBetStatus(!0), this.state.isRunning = !0, !this.messager && this.state.script && this.regist(this.state.script), (i = this.messager) == null || i.emit("run", JSON.parse(JSON.stringify(this.state.config))), this.addLog("Script is running!"), this.isAutoStep && this.step()
    }
    step() {
        var i;
        this.state.isRunning && ((i = this.messager) == null || i.emit("bet"))
    }
    stop() {
        this.state.isRunning = !1, this.game.setBetStatus(!1), this.addLog("Script is stopped!"), this.game.syncCurrency(), this.messager && (this.messager.destroy(), this.messager = null)
    }
    addLog(i, l = 0) {
        let o = ++this.logid,
            r = [...this.state.logs, n.valtio.ref({
                message: i,
                type: l,
                id: o
            })];
        r.length > Et.MAX_LOG && (r = r.slice(-Et.MAX_LOG)), this.state.logs = r
    }
    enableAutoStep(i = !0) {
        this.isAutoStep = i, this.handleBet = i ? ({
            amount: l,
            payout: o
        }) => this.game.handleScriptBet(l, {
            payout: o
        }).then(([r, m]) => (this.delay().then(this.step), this.onGameEnd(m || r), r)) : ({
            amount: l,
            payout: o
        }) => this.game.handleScriptBet(l, {
            payout: o
        }).then(([r, m]) => (this.onGameEnd(m || r), r))
    }
    async delay() {
        let i = Date.now(),
            l = this.interval - (i - this.prevBetTime);
        await n.utils.delay(Math.max(l, 0)), this.prevBetTime = Date.now()
    }
};
E(Et, "MAX_LOG", 1e3);
let kt = Et,
    ui = class {
        constructor(t) {
            E(this, "sounds", {});
            E(this, "backgrounds", new Set);
            E(this, "soundEnable", !1);
            E(this, "bgSoundEnable", !1);
            E(this, "_active", !1);
            for (let e in t) {
                const i = t[e];
                let l;
                l = typeof i == "string" ? {
                    src: i
                } : i;
                const o = new n.Howl(Z(D({}, l), {
                    preload: !0
                }));
                this.sounds[e] = o, l.isBackground && this.backgrounds.add(o)
            }
        }
        get active() {
            return this._active
        }
        set active(t) {
            this._active = t, this._active && this.bgSoundEnable ? this.backgrounds.forEach(e => e.play()) : this.backgrounds.forEach(e => e.stop())
        }
        playSound(t, e) {
            const i = this.sounds[t];
            this.backgrounds.has(i) && !this.bgSoundEnable || this.soundEnable && (e && (e.volume !== void 0 && i.volume(e.volume), e.loop !== void 0 && i.loop(e.loop)), i && i.play())
        }
        stopSound(t) {
            this.sounds[t].stop()
        }
    };
const di = n.socket.decode(ti);
new n.Decimal(0), new n.Decimal(1);
const {
    proxy: hi
} = n.valtio;
class pt extends n.EventEmitter {
    constructor(i, l, o) {
        super();
        E(this, "name", "");
        E(this, "gameUnique", "");
        E(this, "namespace", "");
        E(this, "isInited", !1);
        E(this, "initPms", null);
        E(this, "config");
        E(this, "sounds");
        E(this, "script");
        E(this, "txId", 0);
        E(this, "betlistLenth", 50);
        E(this, "view");
        E(this, "socket");
        E(this, "socketRequest");
        E(this, "hotkeyList", []);
        E(this, "needMaxTip", !1);
        E(this, "needDeduction", !0);
        E(this, "disableAutoConnect", !1);
        E(this, "gameActions");
        E(this, "localeMinAmount", new n.Decimal(0));
        E(this, "settingAutoStore");
        E(this, "state");
        this.state = hi(D({
            isActived: !1,
            currencyName: "BTC",
            amount: new n.Decimal(0),
            isBetting: !1,
            controlIdx: 0,
            jackpot: {},
            actions: {
                amount: new n.Decimal(0),
                gameId: "",
                favorite: !1,
                favoriteNum: 0,
                like: !1,
                likeNum: 0,
                share: !1,
                shareNum: 0,
                unlike: !1,
                unlikeNum: 0
            },
            script: {
                script: null,
                isRunning: !1,
                config: null,
                scriptList: [],
                logs: []
            },
            settings: {
                soundEnable: !0,
                bgSoundEnable: !1,
                hotkeyEnable: !1,
                fastEnable: !1,
                ignoreMaxProfit: !1
            }
        }, o)), this.config = Object.assign({
            name: "",
            namespace: "",
            settings: {},
            validateLink: "",
            detailComponent: () => "No detail!"
        }, i), this.name = this.config.name, this.namespace = this.config.namespace, this.gameActions = new _i(this, this.state.actions), this.view = l, this.active = this.active.bind(this), this.deactivate = this.deactivate.bind(this), this.setAmount = this.setAmount.bind(this), this.onBetEnd = this.onBetEnd.bind(this), this.syncCurrency = this.syncCurrency.bind(this), this.script = new kt(this), this.handleBet = this.handleBet.bind(this), this.socket = n.socket.socket(this.namespace), this.socketRequest = n.socket.socketRequestBind(this.socket), this.addHotkey("a", this.withUnBet(() => this.setAmount(this.state.amount.div(2))), n.i18n.t("Half bet amount")), this.addHotkey("s", this.withUnBet(() => this.setAmount(this.state.amount.mul(2))), n.i18n.t("Double bet amount")), this.addHotkey("space", this.withUnBet(() => (this.handleBet(), !1)), n.i18n.t("Make a bet")), this.on("betStart", m => this.onBetStart(m)), this.on("betEnd", () => this.onBetEnd()), this.waitJackpotInject = this.waitJackpotInject.bind(this), this.settingAutoStore = new ii(this.state.settings, {
            key: this.name
        }), this.sounds = new ui(this.config.sounds || {}), this.sounds.soundEnable = this.state.settings.soundEnable, n.valtio.subscribeKey(this.state.settings, "soundEnable", m => {
            this.sounds.soundEnable = m
        }), n.valtio.subscribeKey(this.state.settings, "bgSoundEnable", m => {
            m ? this.sounds.backgrounds.forEach(c => c.play()) : this.sounds.backgrounds.forEach(c => c.stop()), this.sounds.bgSoundEnable = m
        }), this.emit("bet"), this.syncCurrency(n.settingStore.state.currencyName), n.valtio.subscribeKey(n.settingStore.state, "currencyName", m => {
            this.syncCurrency(m)
        }), rt.setScope(this.state.settings.hotkeyEnable ? this.name : "all"), n.valtio.subscribeKey(this.state.settings, "hotkeyEnable", m => {
            rt.setScope(m ? this.name : "all")
        });
        const {
            disableLimitMinAmount: r
        } = this.config;
        if (!r) {
            const m = () => {
                const {
                    jackpot: c,
                    currencyName: u
                } = this.state, h = c[u];
                if (h) {
                    const g = new n.Decimal(h.minBetAmount);
                    this.setAmount(g)
                }
            };
            m(), n.valtio.subscribeKey(this.state, "currencyName", m), n.valtio.subscribeKey(this.state, "jackpot", m)
        }
    }
    get maxProfit() {
        return new n.Decimal(0)
    }
    get maxAmount() {
        const i = this.state.jackpot[this.state.currencyName],
            l = n.walletStore.state[this.state.currencyName];
        if (!i || !l) return new n.Decimal(0);
        let o = new n.Decimal(i.maxBetAmount);
        return l.amount.gt(i.minBetAmount) && (o = n.DecimalUtils.min(l.amount, o)), new n.Decimal(o)
    }
    get minAmount() {
        const i = this.state.jackpot[this.state.currencyName];
        return new n.Decimal(i ? i.minBetAmount : 0)
    }
    getState() {
        return this.state
    }
    setAmount(i, l = !0) {
        i.gte(this.maxAmount) ? (i = this.maxAmount, l && (this.needMaxTip = !0)) : this.needMaxTip = !1, this.state.amount = i.greaterThan(this.minAmount) ? i : this.minAmount
    }
    setBetStatus(i) {
        this.state.isBetting = i
    }
    async initialize() {
        try {
            this.initPms || (this.initPms = this.init().then(() => (this.isInited = !0, this)), this.gameActions.init()), this.active(), await this.initPms
        } catch (i) {
            throw this.deactivate(), this.initPms = null, i
        }
    }
    async bet(i, ...l) {
        return {
            odds: 0
        }
    }
    async beforeBetCheck(i, l = this.state.currencyName) {
        if (!n.accountStore.state.login) throw n.app.unsafeNavigate("#/login"), new Error;
        if (await this.checkMaxBet(i), await this.checkMaxProfit(), i.gt(n.walletStore.state[l].amount)) {
            const o = this.getInsufficientFlag(i, l);
            throw n.app.emit("game-bet-amount-insufficient", o ? "common" : "switch"), new Error(n.i18n.t("Insufficient balance."))
        }
    }
    async handleBet(i = this.state.amount, ...l) {
        const o = this.state.currencyName;
        i = i.todp(n.systemStore.getCurrency(o).precisionUnit, n.Decimal.ROUND_DOWN), await this.beforeBetCheck(i);
        const r = n.walletStore.createDeduction(this.needDeduction ? i : new n.Decimal(0), o, this.name);
        this.txId = r;
        try {
            this.setBetStatus(!0), this.emit("betStart", i);
            const {
                odds: m
            } = await this.bet(i, ...l);
            return n.walletStore.resolveDeduction(r), m
        } finally {
            this.setBetStatus(!1)
        }
    }
    async handleScriptBet(i, l) {
        var o;
        return [await this.handleBet(new n.Decimal(i), ((o = this.state.script.script) == null ? void 0 : o.id) || 0), void 0]
    }
    onBetStart(i) {}
    onBetEnd() {
        setTimeout(() => {
            this.state.isBetting || this.syncCurrency()
        }, 30)
    }
    async checkMaxBet(i) {
        if (this.needMaxTip && i.eq(this.maxAmount)) {
            if (!await n.pop.confirm(n.i18n.t("Are you sure you want to place a MAX bet?"))) throw this.trackButtonClick("max-cancel"), new Error;
            this.needMaxTip = !1, this.trackButtonClick("max-sure")
        }
    }
    async checkMaxProfit() {
        if (!this.state.settings.ignoreMaxProfit && this.state.jackpot[this.state.currencyName] && this.maxProfit.gt(this.state.jackpot[this.state.currencyName].maxProfitAmount)) {
            let i = !1;
            const l = o => i = o;
            if (!await n.pop.confirm(L.createElement(qe, {
                    onChange: l
                }))) throw new Error;
            this.state.settings.ignoreMaxProfit = i
        }
    }
    trackButtonClick(i) {
        return !1
    }
    withUnBet(i) {
        return (...l) => !this.state.isBetting && i(...l)
    }
    withActive(i) {
        return (...l) => !!this.state.isActived && i(...l)
    }
    syncCurrency(i = n.settingStore.state.currencyName) {
        !this.active || this.state.isBetting || this.state.script.isRunning || this.state.currencyName !== i && (this.state.currencyName = i)
    }
    addHotkey(i, l, o = "") {
        const r = {
            key: i,
            handler: l,
            descript: o
        };
        this.hotkeyList.push(r), rt(i, this.name, () => {
            if (this.state.settings.hotkeyEnable) return r.handler()
        })
    }
    removeHotKey(i) {
        const l = this.hotkeyList.findIndex(o => o.key === i);
        l !== -1 && (this.hotkeyList.splice(l, 1), rt.unbind(i, this.name))
    }
    waitJackpotInject() {
        return new Promise(i => {
            this.socket.once("j-result", l => {
                i(di(l))
            })
        })
    }
    getInsufficientFlag(i, l) {
        const o = n.systemStore.amount2usd(i, l);
        let r = !0;
        for (const m in n.walletStore.state) {
            const c = n.systemStore.amount2usd(n.walletStore.state[m].amount, m);
            if (o.lte(c)) {
                r = !1;
                break
            }
        }
        return r
    }
    active() {
        this.state.isActived || (this.state.isActived = !0, this.sounds.active = !0, this.enableHotkey(), this.syncCurrency(), this.disableAutoConnect || this.socket.connect(), this.emit("active"))
    }
    deactivate() {
        this.state.isActived && (this.state.isActived = !1, this.sounds.active = !1, this.enableHotkey(!1), this.disableAutoConnect || this.socket.disconnect(), n.walletStore.cancelDeduction(this.name), this.emit("deactivate"))
    }
    async init() {}
    enableHotkey(i = !0) {
        i ? this.state.settings.hotkeyEnable && rt.setScope(this.name) : rt.setScope("all")
    }
}
E(pt, "source", ""), E(pt, "DetailComponent"), E(pt, "FairComponent"), E(pt, "validateLink");
const At = pt;
let _i = class {
    constructor(t, e) {
        E(this, "game");
        E(this, "state");
        this.game = t, this.state = e
    }
    async init() {
        const t = await n.http.post("/home/game/game-opt/", {
            gameUnique: this.game.gameUnique
        });
        Object.assign(this.state, D({}, t))
    }
    async doChange(t) {
        const e = this.state[t],
            i = `${t}Num`,
            l = t === "favorite" ? t : "op";
        await n.http.post(`/home/game/${t}/`, {
            gameUnique: this.game.gameUnique,
            [l]: e ? 0 : 1
        }), this.state[i] = Math.max(this.state[i] + (e ? -1 : 1), 0), this.state[t] = !e
    }
};
var at;
let Oe = (at = class extends At {
    constructor(e, i, l) {
        super(e, i, D({
            myBets: []
        }, l)), this.onMybet = this.onMybet.bind(this), this.loadMybet = this.loadMybet.bind(this)
    }
    static formatBetData(e) {
        const i = [];
        return e.forEach(l => {
            i.push(...l.bets.map(o => n.valtio.ref(Z(D({}, o), {
                userName: l.userName,
                userId: l.userId,
                gameId: l.gameId,
                odds: o.odds / 1e4,
                profitAmount: new n.Decimal(o.winAmount).sub(o.betAmount).toNumber(),
                nickName: l.userName,
                betTime: o.time
            }))))
        }), i
    }
    onMybet({
        gb: e,
        gv: i
    }) {
        if (e.gameName !== this.name) return;
        const l = this.state.myBets.reduce((m, c) => (m[c.betId] = c, m), {}),
            o = at.formatBetData(i).filter(m => !l[m.betId]),
            r = o.concat(this.state.myBets);
        this.state.myBets = r.slice(0, this.betlistLenth), o.forEach(m => this.emit("betEnd", {
            amount: new n.Decimal(m.betAmount),
            odds: m.odds,
            currencyName: m.currencyName
        }))
    }
    async init() {
        await super.init(), at.mybetSocket.on("mybet", n.socket.decodeBind(e => this.onMybet(e), "json")), n.accountStore.waitLogin().then(() => this.loadMybet())
    }
    async loadMybet() {
        const e = await n.http.post("/game/support/bet-log/my-bet/", {
            gameUnique: this.gameUnique,
            size: this.betlistLenth
        });
        this.state.myBets = at.formatBetData(e).slice(0, this.betlistLenth)
    }
}, E(at, "mybetSocket", n.socket.socket("/g/data")), at);
Oe.mybetSocket.connect();
const pi = N.memo(function() {
        const {
            gameActions: t,
            gameUnique: e
        } = K(), i = H(), l = n.useIsMobile(), o = n.useNavigate();
        return s.jsxs("div", {
            className: gi,
            children: [s.jsxs(n.Button, {
                className: w("item favorite", i.actions.favorite && "is-active"),
                onClick: () => t.doChange("favorite"),
                children: [s.jsx(n.Icon, {
                    name: "Favorites1"
                }), !l && s.jsx("span", {
                    className: "num",
                    children: i.actions.favoriteNum
                })]
            }), s.jsxs(n.Button, {
                className: w("item like", i.actions.like && "is-active"),
                onClick: () => t.doChange("like"),
                children: [s.jsx(n.Icon, {
                    name: "Like"
                }), !l && s.jsx("span", {
                    className: "num",
                    children: i.actions.likeNum
                })]
            }), s.jsx(n.Button, {
                className: "item",
                onClick: () => {
                    o(`#/social_share/${e}`)
                },
                children: s.jsx(n.Icon, {
                    name: "Send"
                })
            })]
        })
    }),
    gi = "s119zvbz",
    fi = N.memo(function({
        actions: t
    }) {
        const e = n.useIsMobile();
        let i = L.useMemo(() => [s.jsx(pi, {}, "favorite"), ...t], [t]);
        return e && i.length > 6 && (i = i.slice(0, 6).concat(s.jsx(bi, {
            actions: i.slice(6)
        }))), N.createElement("div", {
            className: `${Ii} game-action-wrap`
        }, ...i)
    }),
    et = N.forwardRef(function({
        icon: t,
        title: e,
        className: i,
        children: l,
        onClick: o,
        active: r,
        id: m
    }, c) {
        return s.jsx(n.Tooltip, {
            title: e,
            children: s.jsxs("button", {
                className: w("action-item", i, r && "active"),
                onClick: o,
                id: m,
                ref: c,
                children: [t, s.jsx("span", {
                    className: "title",
                    children: e
                }), l]
            })
        })
    }),
    Ei = N.forwardRef(function({
        icon: t,
        title: e,
        className: i,
        children: l,
        onClick: o,
        active: r,
        id: m
    }, c) {
        return s.jsx(n.Tooltip, {
            title: e,
            children: s.jsxs("div", {
                className: w("action-item", i, r && "active"),
                onClick: o,
                id: m,
                ref: c,
                children: [t, s.jsx("span", {
                    className: "title",
                    children: e
                }), l]
            })
        })
    }),
    bi = N.memo(function({
        actions: t
    }) {
        const [e, i] = L.useState(!1), l = n.useOnClickOutside(() => i(!1));
        return s.jsx(Ei, {
            ref: l,
            className: "show-more",
            title: "",
            icon: s.jsx(n.Icon, {
                name: "More"
            }),
            onClick: () => i(!e),
            children: e && N.createElement("div", {
                className: "more-layer"
            }, ...t)
        })
    }),
    Ii = "s1ui9gi3",
    Nl = N.memo(function() {
        const {
            t
        } = n.useTranslation(), e = H();
        return s.jsx(et, {
            title: t("Music"),
            icon: s.jsx(n.Icon, {
                name: e.settings.bgSoundEnable ? "MusicOn" : "MusicOff"
            }),
            onClick: () => {
                e.settings.bgSoundEnable = !e.settings.bgSoundEnable
            },
            active: e.settings.bgSoundEnable
        })
    }),
    Dl = N.memo(function() {
        const {
            t
        } = n.useTranslation(), [e, i] = L.useState(!1);
        return s.jsxs(s.Fragment, {
            children: [s.jsx(et, {
                title: t("Movie Mode"),
                icon: s.jsx(n.Icon, {
                    name: "Movie"
                }),
                onClick: () => {
                    var o;
                    const l = document.getElementsByClassName("game-style-iframe")[0];
                    if (l) {
                        let r = 0;
                        e || (r = ((((o = document.getElementById("header")) == null ? void 0 : o.clientWidth) || 0) - l.clientWidth - 20) / 2), l.style.marginLeft = -r + "px", l.style.marginRight = -r + "px", i(!e)
                    }
                },
                active: e
            }), s.jsx(et, {
                title: t("Full Screen"),
                icon: s.jsx(n.Icon, {
                    name: "FullScreen"
                }),
                onClick: () => {
                    const l = document.getElementsByTagName("iframe");
                    for (let o = 0; o < l.length; o++) {
                        const r = l[o];
                        if (r.classList.contains("game-iframe")) {
                            n.utils.requestFullscreen(r);
                            break
                        }
                    }
                }
            })]
        })
    }),
    xl = N.memo(function() {
        const {
            t
        } = n.useTranslation(), e = n.useIsMobile(), i = H(), l = Mt();
        return e ? null : s.jsx(et, {
            title: t("Hot keys"),
            icon: s.jsx(n.Icon, {
                name: "HotKeys"
            }),
            onClick: () => l(s.jsx(vi, {})),
            active: i.settings.hotkeyEnable
        })
    }),
    vi = _t(function() {
        const t = K(),
            e = H(),
            {
                t: i
            } = n.useTranslation();
        return s.jsx(n.Dialog, {
            title: i("Hot keys"),
            children: s.jsxs(n.ScrollView, {
                className: `${yi} dialog-box`,
                children: [s.jsx("div", {
                    className: "hotkey-list",
                    children: t.hotkeyList.map(l => s.jsxs("div", {
                        className: "hotkey-item",
                        children: [s.jsx("div", {
                            className: "hotkey-txt",
                            children: l.descript
                        }), s.jsx("div", {
                            className: "hotkey-key",
                            children: l.key.replace(/^\w/, o => o.toUpperCase())
                        })]
                    }, l.key))
                }), s.jsxs("div", {
                    className: "hotkey-enabled",
                    onClick: () => {
                        e.settings.hotkeyEnable = !e.settings.hotkeyEnable
                    },
                    children: [s.jsx("div", {
                        className: "hotkey-select " + (e.settings.hotkeyEnable ? "active" : "")
                    }), s.jsx("div", {
                        children: i("Hotkeys Enabled")
                    })]
                })]
            })
        })
    }),
    yi = "h98htat";
let Dt = !1;
const wl = N.memo(function() {
        const {
            t
        } = n.useTranslation(), e = K(), [i, l] = L.useState(Dt);
        return L.useEffect(() => {
            const o = m => {
                n.app.emit("onbet", m)
            };

            function r(m) {
                Dt = m, l(m)
            }
            return n.app.on("livestate_toggle", r), e.on("betEnd", o), () => {
                e.off("betEnd", o), n.app.off("livestate_toggle", r)
            }
        }, [l]), s.jsx(et, {
            title: t("Live Stats"),
            icon: s.jsx(n.Icon, {
                name: "LiveStats"
            }),
            onClick: () => {
                n.app.emit("livestate_toggle", !Dt)
            },
            active: i
        })
    }),
    jl = N.memo(function() {
        const {
            t
        } = n.useTranslation(), e = H();
        return s.jsx(et, {
            title: t("Sound"),
            icon: s.jsx(n.Icon, {
                name: e.settings.soundEnable ? "SoundOn" : "SoundOff"
            }),
            onClick: () => {
                e.settings.soundEnable = !e.settings.soundEnable
            },
            active: e.settings.soundEnable
        })
    }),
    kl = N.memo(function() {
        const {
            t
        } = n.useTranslation(), e = H();
        return s.jsx(et, {
            title: t("Turbo bet"),
            icon: s.jsx(n.Icon, {
                name: "TurboBet"
            }),
            onClick: () => {
                e.settings.fastEnable = !e.settings.fastEnable
            },
            active: e.settings.fastEnable
        })
    }),
    Sl = function({
        list: t
    }) {
        const {
            t: e
        } = n.useTranslation(), i = Mt();
        return s.jsx(et, {
            title: e("Help"),
            icon: s.jsx(n.Icon, {
                name: "Help"
            }),
            onClick: () => {
                n.app.emit("track", "article_search_click"), i(s.jsx(Ri, {
                    list: t
                }))
            },
            active: !1
        })
    },
    Ri = ({
        list: t
    }) => {
        const {
            t: e
        } = n.useTranslation(), i = Mt(), l = K(), o = n.useNavigate();
        return s.jsx(n.Dialog, {
            title: e("Help"),
            children: s.jsx(n.ScrollView, {
                className: Vi,
                children: s.jsx("div", {
                    className: "help-list",
                    children: t.map(({
                        title: r,
                        node: m
                    }, c) => s.jsxs("div", {
                        onClick: () => {
                            n.app.emit("track", "article_result_click", {
                                article_title: r,
                                article_id: (l == null ? void 0 : l.name) || ""
                            }), (u => {
                                typeof u == "string" ? o(u) : i(u)
                            })(m)
                        },
                        children: [s.jsx("span", {
                            children: r
                        }), s.jsx(n.Icon, {
                            name: "Arrow"
                        })]
                    }, c))
                })
            })
        })
    },
    Vi = "gb9i3i0",
    Li = i => {
        var l = i,
            {
                className: t
            } = l,
            e = U(l, ["className"]);
        return s.jsx(n.ScrollView, D({
            className: w(Ti, t)
        }, e))
    },
    Ti = "gocsmvy",
    Zl = N.memo(function() {
        const {
            t
        } = n.useTranslation(), e = K().getState(), {
            usdPrice: i
        } = n.useSystem();
        return s.jsx(n.Dialog, {
            title: t("Max Profits"),
            children: s.jsxs(Li, {
                children: [s.jsxs("div", {
                    className: "item",
                    children: [s.jsxs("h2", {
                        children: [t("Max Profits"), " ?"]
                    }), s.jsx("p", {
                        children: t("When your betting profit exceeds the maximum profit, the system will automatically settle to the maximum profit")
                    }), s.jsx("p", {
                        children: t("Different currencies have different max profits as follows:")
                    })]
                }), s.jsxs(n.Table, {
                    className: Pi,
                    stripe: !0,
                    hover: !1,
                    children: [s.jsx("thead", {
                        children: s.jsxs("tr", {
                            children: [s.jsx("th", {
                                children: t("Currency")
                            }), s.jsx("th", {
                                children: t("Max bet")
                            }), s.jsx("th", {
                                children: t("Max profit")
                            })]
                        })
                    }), s.jsx("tbody", {
                        children: Object.values(e.jackpot).filter(l => l.maxProfitAmount > 0 && i[l.currencyName]).map(l => s.jsxs("tr", {
                            children: [s.jsx("td", {
                                children: n.systemStore.getAlias(l.currencyName)
                            }), s.jsx("td", {
                                children: s.jsx(n.BC.CoinFormat, {
                                    name: l.currencyName,
                                    amount: l.maxBetAmount
                                })
                            }), s.jsx("td", {
                                children: s.jsx(n.BC.CoinFormat, {
                                    name: l.currencyName,
                                    amount: l.maxProfitAmount
                                })
                            })]
                        }, l.currencyName))
                    })]
                })]
            })
        })
    }),
    Pi = "m1olu66n",
    Ai = new n.Decimal(10);
class ft {
    constructor(e, i) {
        E(this, "amount");
        E(this, "value");
        E(this, "unit");
        this.amount = e, this.unit = i, this.value = e.mul(i)
    }
    static shortFormat(e) {
        let i = 1,
            l = "";
        e.gte(1e12) ? (i = 1e12, l = "T") : e.gte(1e9) ? (i = 1e9, l = "B") : e.gte(1e6) ? (i = 1e6, l = "M") : e.gte(1e3) && (i = 1e3, l = "K");
        const o = e.div(i);
        return l === "" ? {
            amount: e,
            txt: e.toString(),
            type: l
        } : {
            amount: o.todp(0, n.Decimal.ROUND_DOWN),
            txt: o.todp(0, n.Decimal.ROUND_DOWN).toString() + l,
            type: l
        }
    }
    static chipStack(e) {
        const i = [],
            l = e.todp(0),
            o = String(l),
            r = o.length;
        for (let m = 0; m < r && !(i.length > 2); m++) {
            const c = Number(o[m]);
            if (c === 0) continue;
            const u = 10 ** (r - m - 1);
            for (let h = 0; h < c && !(i.length > 2); h++) i.push(u)
        }
        return i
    }
    static chipList(e, i, l) {
        if (i.eq(0) || i.lt(e)) return [];
        const o = i.div(l).todp(0, n.Decimal.ROUND_DOWN).toString().length;
        return Array(o).fill(null).map((r, m) => new ft(Ai.pow(m), l))
    }
}
const Oi = {
        auto: "/modules/games/chip_auto-f6cec1e6.png",
        B: "/modules/games/chip_B-dc50bb1b.png",
        K: "/modules/games/chip_K-1b9d603e.png",
        M: "/modules/games/chip_M-bf27b6c5.png",
        T: "/modules/games/chip_T-b02cc36e.png"
    },
    Bl = N.memo(function({
        chip: t,
        showNum: e = !0,
        isFiat: i = !1
    }) {
        const l = ft.shortFormat(t.amount.div(i ? 100 : 1)),
            o = ft.chipStack(t.amount).map(r => {
                return m = ft.shortFormat(new n.Decimal(r)).type, Oi[m || "auto"];
                var m
            });
        return s.jsx("div", {
            className: w(Ni, "chip-img"),
            children: s.jsx("div", {
                className: "chip-img-wrap",
                children: s.jsx("div", {
                    className: "chips-btn",
                    children: o.map((r, m) => {
                        const c = 15 * -m,
                            u = m === o.length - 1;
                        return s.jsx("div", {
                            className: "chip-img-item",
                            style: {
                                transform: `translate(0%, ${c}%)`
                            },
                            children: s.jsx("div", {
                                className: "bg",
                                style: {
                                    backgroundImage: `url(${r})`
                                },
                                children: u && e && s.jsx("div", {
                                    className: w("chip-num", "len-" + l.txt.length),
                                    children: s.jsx("p", {
                                        children: l.txt
                                    })
                                })
                            })
                        }, String(m))
                    })
                })
            })
        })
    }),
    Ni = "c149eslo";
var Di = globalThis.gsap;
const xt = ht(Di),
    xi = n.utils.linearScale([210, 700], [4, 9], !0);

function Gl(c) {
    var u = c,
        {
            list: t,
            keyof: e,
            hideJackpot: i = !1,
            onDetail: l,
            children: o,
            className: r = ""
        } = u,
        m = U(u, ["list", "keyof", "hideJackpot", "onDetail", "children", "className"]);
    const {
        t: h
    } = n.useTranslation(), {
        length: g,
        ref: f
    } = function() {
        const [T, y] = L.useState(0);
        return {
            length: T,
            ref: n.useResize(({
                width: P
            }) => {
                y(Math.round(xi(P)))
            })
        }
    }();
    return s.jsxs("div", {
        className: w(ki, "game-recent", r),
        children: [s.jsx("div", {
            ref: f,
            className: "recent-list-wrap",
            children: t.length > 0 && g > 0 ? s.jsx(wi, D({
                list: t,
                keyof: e,
                onDetail: l,
                len: g
            }, m)) : s.jsx("div", {
                className: "empty-item",
                children: s.jsx("p", {
                    children: h("Game results will be displayed here.")
                })
            })
        }), o]
    })
}
const wi = N.memo(function({
        list: t,
        keyof: e,
        onDetail: i,
        item: l = ji,
        getResult: o = Ne,
        getClassName: r,
        len: m
    }) {
        t = t.slice(0, m).reverse();
        const c = L.useRef(null),
            [u] = L.useState({
                progress: 0
            }),
            h = n.useIsFirstRender(),
            g = l;
        L.useLayoutEffect(() => {
            h || xt.fromTo(u, {
                progress: u.progress + 100 / m
            }, {
                progress: 0,
                onUpdate() {
                    xt.set(c.current, {
                        x: `${u.progress}%`
                    })
                }
            })
        }), L.useEffect(() => () => {
            xt.killTweensOf(u)
        }, []);
        const [f, T] = L.useMemo(() => [{
            width: 100 + 100 / (m - 1) + "%"
        }, {
            width: 100 / m + "%"
        }], [m]);
        return s.jsx("div", {
            ref: c,
            className: "recent-list",
            style: f,
            children: t.map(y => s.jsx(g, {
                style: T,
                data: y,
                onClick: i,
                getResult: o,
                getClassName: r
            }, y[e]))
        })
    }),
    ji = N.memo(({
        data: t,
        onClick: e,
        style: i,
        getResult: l = Ne,
        getClassName: o
    }) => {
        const r = o ? o(t) : "";
        return s.jsx("div", {
            className: "recent-item",
            style: i,
            onClick: () => e(t),
            children: s.jsx("div", {
                className: `item-wrap ${t.odds>=1?"is-win":"is-lose"} ${r}`,
                children: l(t)
            })
        })
    });

function Ne(t) {
    return `${new n.Decimal(t.odds).toFixed(2,n.Decimal.ROUND_DOWN)}x`
}
const ki = "g1k8hpak",
    Si = "/modules/games/light-629efa72.png",
    Zi = "/modules/games/verified-312ca177.svg",
    Bi = Si,
    Gi = "/modules/games/winner-8a071c0d.png",
    Wi = "/modules/games/detail_bg-86bc1b97.png",
    Wl = N.memo(function(i) {
        var l = i,
            {
                className: t
            } = l,
            e = U(l, ["className"]);
        return s.jsxs("div", Z(D({
            className: w(Ci, t)
        }, e), {
            children: [s.jsx("img", {
                className: "light",
                src: Bi
            }), s.jsx("img", {
                className: "title",
                src: Gi
            })]
        }))
    }),
    Ci = "wmlw1il",
    Xi = function(u) {
        var h = u,
            {
                currencyName: t,
                children: e,
                label: i,
                value: l,
                onChange: o,
                precision: r,
                className: m
            } = h,
            c = U(h, ["currencyName", "children", "label", "value", "onChange", "precision", "className"]);
        const g = n.useSetting(),
            f = n.useLocalCurrency(),
            T = new n.Decimal(l);
        let y = T,
            P = c.min,
            V = c.max;
        const d = g.enableLocaleCurrency && n.systemStore.getUsdPrice(t).gt(0);
        g.enableLocaleCurrency && d && (y = f.amount2local(y, t), P = c.min && f.amount2local(new n.Decimal(c.min), t).toNumber(), V = c.max && f.amount2local(new n.Decimal(c.max), t).toNumber());
        const I = L.useCallback(R => o(d ? f.local2amount(new n.Decimal(R), t).toNumber() : R), [o, d, f, t]);
        return r === void 0 && (r = t.includes("FIAT") ? 2 : n.systemStore.getPrecision(t)), s.jsxs(n.InputNumber, Z(D({
            className: w(Mi, m),
            label: i && s.jsxs(s.Fragment, {
                children: [i, d && s.jsx("div", {
                    className: "label-amount",
                    children: `≈${T.todp(r).toFixed()} ${n.systemStore.getAlias(t)}`
                })]
            }),
            value: Number(y),
            onChange: I,
            precision: r
        }, c), {
            min: P,
            max: V,
            children: [s.jsx(n.BC.CoinIcon, {
                name: d ? f.currencyName : t
            }), e]
        }))
    },
    Mi = "cgn8hop",
    Ui = new n.Decimal(0),
    Hi = new n.Decimal(1),
    Ki = "c16p84vv",
    Ji = "aonfmvp",
    Yi = N.memo(function({
        min: t,
        max: e,
        onChange: i,
        value: l
    }) {
        const [o, r] = L.useState(!1), m = n.useOnClickOutside(() => {
            r(!1)
        }), [c, u] = L.useState(() => l === t ? 2 : l === e ? 1 : -1);

        function h(g) {
            u(g ? 1 : 2), i(g ? e : t)
        }
        return s.jsxs(s.Fragment, {
            children: [s.jsx(zt.AnimatePresence, {
                children: o && s.jsxs(zt.motion.div, {
                    ref: m,
                    className: "fix-layer",
                    transition: n.utils.springConfigs.fast,
                    children: [s.jsx("button", {
                        className: c === 2 ? "active" : "",
                        onClick: () => h(!1),
                        children: "Min"
                    }), s.jsx(n.Slider, {
                        min: t,
                        noDebounce: !0,
                        max: e,
                        value: l,
                        step: .01,
                        onChange: function(g) {
                            let f = -1;
                            e === g && (f = 1), t === g && (f = 2), u(f), i(g)
                        }
                    }), s.jsx("button", {
                        className: c === 1 ? "active" : "",
                        onClick: () => h(!0),
                        children: "Max"
                    })]
                })
            }), s.jsxs("button", {
                className: zi,
                onClick: () => r(!o),
                children: [s.jsx(n.Icon, {
                    name: "Arrow"
                }), s.jsx(n.Icon, {
                    name: "Arrow"
                })]
            })]
        })
    }),
    zi = "t14dunpx",
    Fi = N.memo(function(t) {
        return s.jsxs("div", {
            className: "game-area-group-buttons",
            children: [s.jsx("button", {
                onClick: () => t.onChange(t.value / 2, "/2"),
                children: "/2"
            }), s.jsx("button", {
                onClick: () => t.onChange(2 * t.value, "x2"),
                children: "x2"
            }), s.jsx(Yi, D({}, t))]
        })
    }),
    qi = ({
        jackpot: t,
        onJackpotHelp: e
    }) => {
        const {
            t: i
        } = n.useTranslation();
        return s.jsxs("div", {
            className: `${$i} label`,
            children: [s.jsx("div", {
                children: i("Amount")
            }), t && t.maxProfitAmount !== 1 / 0 && s.jsxs("div", {
                className: "max-profit",
                children: [s.jsx(n.Icon, {
                    onClick: e,
                    name: "Inform"
                }), s.jsxs("div", {
                    className: "tip",
                    children: [s.jsxs("span", {
                        className: "tit",
                        children: [i("Max profit"), ": "]
                    }), s.jsx(n.BC.CoinFormat, {
                        name: t.currencyName,
                        amount: t.maxProfitAmount
                    })]
                })]
            })]
        })
    },
    Cl = L.memo(function(t) {
        const {
            t: e
        } = n.useTranslation(), i = n.useIsMobile(), [l, o] = L.useState(!1), r = n.useLocalCurrency();
        n.useSystem();
        const m = K(),
            c = H(),
            {
                className: u,
                currencyName: h = c.currencyName,
                disabled: g = c.isBetting,
                value: f = c.amount.toNumber(),
                onChange: T = (O, j) => m.setAmount(new n.Decimal(O), j),
                max: y = m.maxAmount.toNumber(),
                min: P = m.minAmount.toNumber(),
                checkIncrease: V,
                onJackpotHelp: d
            } = t,
            {
                label: I = s.jsx(qi, {
                    jackpot: c.jackpot[c.currencyName],
                    onJackpotHelp: d
                })
            } = t,
            R = !!(V && m.autoBet && !m.autoBet.isAutoIncrease),
            _ = t.autoShow || i || c.controlIdx === 0,
            b = i || t.autoShow,
            v = L.useCallback((O, j) => {
                j && m.trackButtonClick(j), T(O, !1)
            }, []),
            A = L.useMemo(() => [1, 2, 3, 4].map((O, j) => {
                const B = function(lt, Q) {
                        let $ = lt;
                        return Q.includes("FIAT") || ($ = lt.mul(100)),
                            function(It) {
                                if (It.gt(1)) return new n.Decimal(10).pow(String(n.DecimalUtils.round(It)).length);
                                if (It.lte(0)) return Ui; {
                                    const Kt = It.toPrecision(1).toString().length - 2;
                                    return Kt <= 1 ? Hi : new n.Decimal(.1).pow(Kt - 1)
                                }
                            }($)
                    }(r.amount2local(new n.Decimal(P), c.currencyName), c.currencyName).mul(10 ** O),
                    J = B.todp().toString();
                return s.jsx(n.Button, {
                    disabled: g,
                    onClick: () => {
                        T(r.local2amount(new n.Decimal(J), c.currencyName).toNumber())
                    },
                    children: J
                }, "amount-btn-" + j)
            }), [c.currencyName, P, T, r]);
        return s.jsxs("div", {
            className: w(Ki, "game-coin-amount-input"),
            children: [s.jsxs(Xi, {
                label: I,
                className: w(ta, "game-coininput", u),
                value: Number(f.toString()),
                currencyName: h,
                disabled: g,
                onFocus: () => o(!0),
                onBlur: () => o(!1),
                onChange: O => T(O),
                max: y,
                min: P,
                children: [R && s.jsx("div", {
                    className: Qi,
                    children: e("The bet amount too small. It may fail to change automatically.")
                }), s.jsx(Fi, {
                    value: f,
                    max: y,
                    min: P,
                    onChange: v
                })]
            }), _ && s.jsx("div", {
                className: w(Ji, "amount-input-btns-wrap", b && "tip-btns-wrap", l && "is-focus"),
                children: A
            })]
        })
    }),
    Qi = "tci4gns",
    $i = "l19omkgq",
    ta = "c159p90x",
    Xl = N.memo(function(i) {
        var l = i,
            {
                className: t
            } = l,
            e = U(l, ["className"]);
        const {
            t: o
        } = n.useTranslation();
        return s.jsx(n.Input, Z(D({
            className: w(ea, t)
        }, e), {
            children: s.jsx(n.Button, {
                className: "copy-button",
                onClick: () => {
                    try {
                        n.utils.copyToClipboard(e.value !== void 0 ? String(e.value) : ""), n.notify(o("Copied"))
                    } catch (r) {
                        n.notify(r)
                    }
                },
                children: s.jsx(n.Icon, {
                    name: "Copy"
                })
            })
        }))
    }),
    ea = "i58j8vd";

function Ml({
    isLose: t = !1
}) {
    const {
        t: e
    } = n.useTranslation(), i = K(), l = H();
    if (!i.autoBet) return null;
    let o = n.valtio.useProxy(i.autoBet.onWin.state),
        r = e("On win");
    return t && (o = n.valtio.useProxy(i.autoBet.onLose.state), r = e("On lose")), s.jsxs("div", {
        className: w(aa),
        children: [s.jsx("p", {
            className: "crease-label",
            children: r
        }), s.jsxs("div", {
            className: "switch-input-wrap",
            children: [s.jsx(ia, {
                enable: o.reset,
                onChange: m => o.reset = m
            }), s.jsx(n.InputNumber, {
                className: la,
                label: null,
                placeholder: "0",
                value: o.value,
                onChange: m => o.value = m,
                disabled: l.isBetting,
                readOnly: o.reset,
                bold: !0,
                children: s.jsx("div", {
                    className: "percent",
                    children: "%"
                })
            })]
        })]
    })
}
const ia = N.memo(({
        enable: t,
        onChange: e
    }) => {
        const {
            t: i
        } = n.useTranslation();
        return s.jsxs("div", {
            className: w(sa, "increase-switch"),
            children: [s.jsx("div", {
                className: w("reset text", t && "active"),
                onClick: () => e(!0),
                children: i("Reset")
            }), s.jsx("div", {
                className: w("increse text", !t && "active"),
                onClick: () => e(!1),
                children: i("Increase by")
            })]
        })
    }),
    aa = "g1dnhffb",
    la = "g30e3bc",
    sa = "i1fi78um",
    Ul = N.memo(function(o) {
        var r = o,
            {
                label: t,
                className: e,
                disabled: i
            } = r,
            l = U(r, ["label", "className", "disabled"]);
        return s.jsx(n.InputWrap, {
            label: t,
            className: w(oa, e),
            disabled: i,
            children: s.jsx("div", {
                className: "input-control",
                children: s.jsx(n.Select, Z(D({
                    disabled: i
                }, l), {
                    disableHover: !0
                }))
            })
        })
    }),
    oa = "l12myta6",
    Hl = N.memo(function({
        min: t,
        max: e,
        label: i,
        value: l,
        onChange: o,
        className: r,
        disabled: m,
        step: c = 1
    }) {
        const [u, h] = L.useState(l);
        return s.jsx(n.InputWrap, {
            label: i,
            className: w(na, r),
            disabled: m,
            children: s.jsxs("div", {
                className: "input-control",
                children: [s.jsx("p", {
                    className: "slider-num value",
                    children: u
                }), s.jsx(n.Slider, {
                    value: l,
                    onChange: o,
                    min: t,
                    max: e,
                    step: c,
                    onDragValue: h
                }), s.jsx("p", {
                    className: "slider-num max",
                    children: e
                })]
            })
        })
    }),
    na = "sswf3lp",
    ra = () => {
        const {
            t
        } = n.useTranslation(), e = n.useDialog();
        return s.jsx(n.Dialog, {
            className: ma,
            children: s.jsx(n.ScrollView, {
                children: s.jsxs("div", {
                    className: "content",
                    children: [s.jsx("div", {
                        className: "title",
                        children: t("Sorry! You are unable to play any games right now due to 24 hours self-exclusion cool-down.")
                    }), s.jsx(n.Button, {
                        onClick: () => {
                            e.close()
                        },
                        type: "conic",
                        children: t("Ok, I understand")
                    })]
                })
            })
        })
    },
    ma = "s6lg3mp",
    ca = function({
        manualControl: t,
        autoControl: e,
        advancedControl: i,
        type: l = 0,
        controlIdx: o,
        onControlChange: r
    }) {
        var P;
        const m = K(),
            c = H(),
            {
                lang: u
            } = n.usePageContext(),
            {
                t: h
            } = n.useTranslation(),
            g = L.useMemo(() => {
                const V = [];
                return t && V.push({
                    label: h("Manual"),
                    value: V.length,
                    node: t
                }), e && V.push({
                    label: h("Auto"),
                    value: V.length,
                    node: e
                }), i && V.push({
                    label: h("Advanced"),
                    value: V.length,
                    node: i
                }), V
            }, [t, e, i, u]),
            f = Pt.isNumber(o) ? o : c.controlIdx,
            T = c.isBetting || c.script.isRunning || m.autoBet && ((P = c.autoBet) == null ? void 0 : P.isRunning) || !1,
            y = r || (V => {
                c.controlIdx = V
            });
        return g.length === 0 ? null : s.jsxs("div", {
            id: `${m.name}-control-${f}`,
            className: w(ua, "game-control", `style${l}`),
            children: [s.jsx(n.Radio, {
                className: "game-control-switch",
                value: f,
                options: g,
                disabled: T,
                onChange: y,
                children: ({
                    option: V,
                    active: d
                }) => s.jsx("button", {
                    className: d ? "is-active" : "",
                    children: s.jsx("div", {
                        className: "label",
                        children: V.label
                    })
                })
            }), s.jsx("div", {
                className: "game-control-panel",
                children: g[f].node
            })]
        })
    },
    ua = "g1lvvuvz";
var De = (t => (t.Confirmed = "cool_down_confirmed", t.EmailSent = "self_exclusion_email_sent", t))(De || {});
const Kl = L.forwardRef(function(I, d) {
        var R = I,
            {
                children: t,
                manualControl: e,
                autoControl: i,
                advancedControl: l,
                controlIdx: o,
                controlDisalbe: r,
                onControlChange: m,
                gameView: c,
                top: u,
                right: h,
                tabs: g = [],
                actions: f = [],
                type: T = 0,
                className: y = "",
                specialControlNode: P
            } = R,
            V = U(R, ["children", "manualControl", "autoControl", "advancedControl", "controlIdx", "controlDisalbe", "onControlChange", "gameView", "top", "right", "tabs", "actions", "type", "className", "specialControlNode"]);
        const _ = K(),
            b = n.useAccount(),
            {
                currencyName: v
            } = n.useSetting(),
            A = n.useDialog(),
            [O, j] = L.useState(() => window.innerWidth < 800),
            B = n.useResize(({
                width: Q
            }) => j(Q < 800)),
            J = n.useMergeRefs(d, B);
        O && (T = "-mobile"), L.useEffect(() => {
            (async Q => {
                const $ = await n.http.get(`/account/self-exclusion/status/${Q}/`);
                Object.values(De).includes($.status) && A.push(s.jsx(ra, {}))
            })(b.userId)
        }, []);
        const lt = P || s.jsx(ca, {
            manualControl: e,
            autoControl: i,
            advancedControl: l,
            controlIdx: o,
            controlDisalbe: r,
            onControlChange: m,
            type: T
        });
        return L.useEffect(() => {
            b.login && _.gameUnique !== "trade" && n.http.post("/user/amount/game-available/", {
                currencyName: v,
                gameUnique: _.gameUnique
            }).then(Q => {
                const $ = Q.availableBalance || 0,
                    Ht = Q.bonusBalance || 0;
                $ <= 0 && Ht > 0 && n.app.emit("game-bet-amount-insufficient", "balance")
            }).catch(console.log)
        }, [v, b.login]), s.jsx(xe.Provider, {
            value: {
                isMobileStyle: O
            },
            children: s.jsxs(ha, Z(D({
                id: `game-${_.name}`,
                ref: J,
                className: `notranslate game-style${T} ${y}`
            }, V), {
                children: [u, s.jsxs("div", {
                    className: "game-main",
                    children: [O ? null : lt, s.jsx("div", {
                        className: "game-view",
                        children: c
                    }), O ? lt : null, s.jsx(fi, {
                        actions: f
                    })]
                }), h, s.jsx(da, {
                    tabs: g
                })]
            }))
        })
    }),
    xe = N.createContext({
        isMobileStyle: !1
    });

function Jl() {
    return L.useContext(xe)
}
const da = N.memo(function({
        tabs: t
    }) {
        const e = Te(),
            i = He(),
            l = L.useMemo(() => t.concat(i), [t, i]),
            [o, r] = L.useState(0);
        return s.jsx(n.Portal.Source, {
            id: `tabs-${e}`,
            children: s.jsx(n.Tabs, {
                className: `game-tabs len-${l.length}`,
                value: o,
                tabs: l,
                onChange: r
            })
        })
    }),
    ha = N.forwardRef((l, i) => {
        var o = l,
            {
                className: t
            } = o,
            e = U(o, ["className"]);
        return s.jsx("div", D({
            className: w(_a, pa, t),
            ref: i
        }, e))
    }),
    _a = "g1q1pcsk",
    pa = "g2l1izk";
async function le(t) {
    let e = await n.http.get(`/game/bet/v2/bet/${t}`);
    if (e) return e.betLog.betId = e.betLog.betId, e
}

function ga({
    onValidate: t,
    result: e,
    slot: i
}) {
    return ({
        userName: l,
        data: o,
        bigWin: r
    }) => {
        const {
            seedHistory: m,
            betLog: c
        } = o, {
            t: u
        } = n.useTranslation(), h = K(), g = n.useAccount(), [f, T] = L.useState(!1), y = n.useNavigate(), P = function(I, R) {
            return R.includes("Twist") ? R + "99" : ["SlotsCave"].includes(R) ? R : I === 4 ? `${R}96` : R
        }(h.gameChannel, h.name), V = () => {
            g.userId === c.userId && y(`#/set_seed/${P}`)
        }, d = Z(D({}, c), {
            gameUnique: h.gameUnique,
            userName: l,
            bigWin: r
        });
        return s.jsx(Ea, {
            children: s.jsx(Wt, Z(D({
                single: !0,
                newShare: !0
            }, d), {
                children: s.jsxs("div", {
                    className: "toggle-wrap",
                    children: [s.jsxs("div", {
                        className: w("tw-title", f && "show"),
                        onClick: () => T(!f),
                        children: [s.jsx("p", {
                            children: u("Game Details")
                        }), s.jsx(n.Icon, {
                            name: "Arrow"
                        })]
                    }), s.jsx(n.ToggleView, {
                        visible: f,
                        children: s.jsxs("div", {
                            className: "toggle-game-detail",
                            children: [e && N.createElement(e, {
                                betLog: c,
                                seedHistory: m
                            }), s.jsxs("div", {
                                className: "seed-main",
                                children: [s.jsx(n.Input, {
                                    label: u("Server Seed"),
                                    placeholder: u("The Seed hasn't been revealed yet."),
                                    value: m.serverSeed,
                                    readOnly: !0
                                }), s.jsx(n.Input, {
                                    label: s.jsxs("div", {
                                        className: "seed-col",
                                        children: [s.jsx("div", {
                                            children: u("Server Seed (hash)")
                                        }), g.userId == c.userId && !m.serverSeed && s.jsx("a", {
                                            className: "cl-primary",
                                            onClick: V,
                                            children: u("Seed Settings")
                                        })]
                                    }),
                                    value: m.serverSeedHash,
                                    readOnly: !0
                                }), s.jsxs("div", {
                                    className: "col",
                                    children: [s.jsx(n.Input, {
                                        label: u("Client Seed"),
                                        value: m.clientSeed,
                                        readOnly: !0
                                    }), s.jsx(n.Input, {
                                        label: "nonce",
                                        value: c.nonce,
                                        readOnly: !0
                                    })]
                                }), i && N.createElement(i, {
                                    betLog: c,
                                    seedHistory: m
                                })]
                            }), c.userId == g.userId && s.jsx("div", {
                                className: "verify-wrap",
                                children: s.jsx(n.Button, {
                                    type: "conic",
                                    className: "verify-btn",
                                    onClick: async () => {
                                        const {
                                            serverSeed: I,
                                            clientSeed: R,
                                            serverSeedHash: _
                                        } = m;
                                        I ? t(I, R, c.nonce, _, o, P) : await n.pop.confirm(u("Sorry! You need to set up a new seed before validating the data (the server seed is encrypted)")) && V()
                                    },
                                    children: u("Verify")
                                })
                            })]
                        })
                    })]
                })
            }))
        })
    }
}

function wt() {
    const t = K(),
        e = n.useDialog();
    return L.useCallback(i => {
        e.push(s.jsx(fa, {
            gameUnique: t.gameUnique,
            item: i
        }))
    }, [])
}

function fa({
    gameUnique: t,
    item: e
}) {
    const i = n.useIsActive(),
        l = L.useRef(i),
        o = L.useRef(0);
    i && l.current !== i && o.current++, l.current = i;
    const r = L.useMemo(() => async function(m) {
        return await le(m) || (await n.utils.delay(3e3), le(m))
    }(e.distributeId), [l.current, t, e.userId, e.betId]);
    return s.jsx(Xt, {
        gameUnique: t,
        userName: e.nickName,
        userId: e.userId,
        data: r
    })
}
const Ea = N.forwardRef((l, i) => {
        var o = l,
            {
                className: t
            } = o,
            e = U(o, ["className"]);
        return s.jsx(n.ScrollView, Z(D({
            className: w(ba, t)
        }, e), {
            ref: i
        }))
    }),
    ba = "d1lvxte9",
    Yl = i => {
        var l = i,
            {
                className: t
            } = l,
            e = U(l, ["className"]);
        return s.jsx("div", D({
            className: w(Ia, t)
        }, e))
    },
    Ia = "dht0arl",
    zl = N.memo(function() {
        const t = K(),
            {
                t: e
            } = n.useTranslation(),
            i = n.useNavigate(),
            l = function(o, r) {
                return r.includes("Twist") ? r + "99" : ["SlotsCave"].includes(r) ? r : o === 4 ? `${r}96` : r
            }(t.gameChannel, t.name);
        return s.jsx(et, {
            title: e("Seed"),
            icon: s.jsx(n.Icon, {
                name: "Seed"
            }),
            id: "set_seed",
            onClick: () => i(`#/set_seed/${l}`)
        })
    }),
    {
        proxy: va,
        ref: we
    } = n.valtio,
    ya = () => Promise.resolve();
class se {
    constructor() {
        E(this, "state");
        this.state = va({
            reset: !0,
            value: 0
        })
    }
}
const oe = we(new n.Decimal(0));
class Ra extends n.EventEmitter {
    constructor(i, l = 500, o = ya) {
        super();
        E(this, "gameState");
        E(this, "startAmount", oe);
        E(this, "onWin", new se);
        E(this, "onLose", new se);
        E(this, "stopWithZero", !1);
        E(this, "game");
        E(this, "isLog", !0);
        E(this, "bet");
        E(this, "interval");
        E(this, "betWait");
        E(this, "state");
        E(this, "prevBetTime", Date.now());
        E(this, "stopPrev", () => {});
        this.game = i, this.gameState = i.getState(), this.state = this.gameState.autoBet, this.bet = (...r) => i.handleBet(...r), this.interval = l, this.betWait = o
    }
    get isAutoIncrease() {
        const i = this.gameState.amount,
            l = n.systemStore.state.currency[this.gameState.currencyName].precisionUnit;
        return !(!this.onWin.state.reset && this.onWin.state.value !== 0 && i.add(i.div(100).mul(this.onWin.state.value)).todp(l, n.Decimal.ROUND_DOWN) === this.gameState.amount || !this.onLose.state.reset && this.onLose.state.value !== 0 && i.add(i.div(100).mul(this.onLose.state.value)).todp(l, n.Decimal.ROUND_DOWN) === this.gameState.amount)
    }
    get isAutoCanBet() {
        return this.gameState.amount.gt(this.game.maxAmount)
    }
    get fieldStr() {
        const i = this.onWin.state.reset ? "" : `ow:${this.onWin.state.value};`,
            l = this.onLose.state.reset ? "" : `ol:${this.onLose.state.value};`;
        return `a:${this.startAmount.toFixed(9)};n:${this.state.times};${i}${l}sw:${this.state.stopOnWin};sl:${this.state.stopOnLose};`
    }
    on(i, l) {
        return super.on(i, l)
    }
    async start() {
        if (this.state.isRunning) return;
        this.emit("start"), this.state.isRunning = !0, this.state.profit = oe, this.startAmount = this.gameState.amount;
        const i = !this.stopWithZero && this.state.times === 0;
        let l = !0;
        const o = this.isLog ? (r = this.fieldStr, m = this.game.name, n.http.post("/game/manage/scripts/log/", {
            gameName: m,
            content: r
        })) : Promise.resolve(0);
        var r, m;
        for (this.stopPrev = () => l = !1; l;) {
            try {
                await this.betWait();
                const c = await o;
                if (l) {
                    const u = Date.now(),
                        h = this.interval - (u - this.prevBetTime);
                    h > 0 && await n.utils.delay(h), this.prevBetTime = Date.now();
                    const g = await this.bet(void 0, c);
                    l && this.step(g) && this.stop()
                }
            } catch (c) {
                if (!c || c.code !== 5999) throw this.stop(), this.emit("stop"), c
            }
            i || (this.state.times = Math.max(this.state.times - 1, 0), this.state.times === 0 && this.stop())
        }
        this.emit("stop"), this.gameState.amount = this.startAmount
    }
    stop() {
        this.stopPrev(), this.state.isRunning = !1
    }
    step(i) {
        const l = new n.Decimal(i),
            o = this.gameState.amount;
        return this.state.profit = we(this.state.profit.add(o.mul(l.sub(1)))), l.gt(1) ? this.onWin.state.reset ? this.gameState.amount = this.startAmount : this.gameState.amount = o.add(o.mul(this.onWin.state.value).div(100)) : l.lt(1) && (this.onLose.state.reset ? this.gameState.amount = this.startAmount : this.gameState.amount = o.add(o.mul(this.onLose.state.value).div(100))), !(this.state.stopOnWin === 0 || !this.state.profit.gte(this.state.stopOnWin)) || !(this.state.stopOnLose === 0 || !this.state.profit.lt(0) || !this.state.profit.abs().gte(this.state.stopOnLose)) || this.isAutoCanBet
    }
}
const ne = C.Reader,
    Va = C.Writer,
    it = C.util,
    Vt = C.roots.MultipleGame || (C.roots.MultipleGame = {});
Vt.BetLog = (() => {
    function t(e) {
        if (e)
            for (let i = Object.keys(e), l = 0; l < i.length; ++l) e[i[l]] != null && (this[i[l]] = e[i[l]])
    }
    return t.prototype.gameId = it.Long ? it.Long.fromBits(0, 0, !1) : 0, t.prototype.betId = it.Long ? it.Long.fromBits(0, 0, !1) : 0, t.prototype.userId = 0, t.prototype.nickName = "", t.prototype.gameName = "", t.prototype.nonce = 0, t.prototype.currencyName = "", t.prototype.betAmount = "", t.prototype.winAmount = "", t.prototype.odds = 0, t.prototype.betTime = it.Long ? it.Long.fromBits(0, 0, !1) : 0, t.prototype.betIdTmp = "", t.prototype.type = "", t.prototype.distributeId = it.Long ? it.Long.fromBits(0, 0, !1) : 0, t.encode = function(e, i) {
        return i || (i = Va.create()), e.gameId != null && Object.hasOwnProperty.call(e, "gameId") && i.uint32(8).sint64(e.gameId), e.betId != null && Object.hasOwnProperty.call(e, "betId") && i.uint32(16).sint64(e.betId), e.userId != null && Object.hasOwnProperty.call(e, "userId") && i.uint32(24).sint32(e.userId), e.nickName != null && Object.hasOwnProperty.call(e, "nickName") && i.uint32(34).string(e.nickName), e.gameName != null && Object.hasOwnProperty.call(e, "gameName") && i.uint32(42).string(e.gameName), e.nonce != null && Object.hasOwnProperty.call(e, "nonce") && i.uint32(48).sint32(e.nonce), e.currencyName != null && Object.hasOwnProperty.call(e, "currencyName") && i.uint32(58).string(e.currencyName), e.betAmount != null && Object.hasOwnProperty.call(e, "betAmount") && i.uint32(66).string(e.betAmount), e.winAmount != null && Object.hasOwnProperty.call(e, "winAmount") && i.uint32(74).string(e.winAmount), e.odds != null && Object.hasOwnProperty.call(e, "odds") && i.uint32(80).sint32(e.odds), e.betTime != null && Object.hasOwnProperty.call(e, "betTime") && i.uint32(88).sint64(e.betTime), e.betIdTmp != null && Object.hasOwnProperty.call(e, "betIdTmp") && i.uint32(98).string(e.betIdTmp), e.type != null && Object.hasOwnProperty.call(e, "type") && i.uint32(106).string(e.type), e.distributeId != null && Object.hasOwnProperty.call(e, "distributeId") && i.uint32(112).sint64(e.distributeId), i
    }, t.decode = function(e, i) {
        e instanceof ne || (e = ne.create(e));
        let l = i === void 0 ? e.len : e.pos + i,
            o = new Vt.BetLog;
        for (; e.pos < l;) {
            let r = e.uint32();
            switch (r >>> 3) {
                case 1:
                    o.gameId = e.sint64();
                    break;
                case 2:
                    o.betId = e.sint64();
                    break;
                case 3:
                    o.userId = e.sint32();
                    break;
                case 4:
                    o.nickName = e.string();
                    break;
                case 5:
                    o.gameName = e.string();
                    break;
                case 6:
                    o.nonce = e.sint32();
                    break;
                case 7:
                    o.currencyName = e.string();
                    break;
                case 8:
                    o.betAmount = e.string();
                    break;
                case 9:
                    o.winAmount = e.string();
                    break;
                case 10:
                    o.odds = e.sint32();
                    break;
                case 11:
                    o.betTime = e.sint64();
                    break;
                case 12:
                    o.betIdTmp = e.string();
                    break;
                case 13:
                    o.type = e.string();
                    break;
                case 14:
                    o.distributeId = e.sint64();
                    break;
                default:
                    e.skipType(7 & r)
            }
        }
        return o
    }, t
})();
const La = class St extends At {
        constructor(e, i, l) {
            super(e, i, D({
                myBets: []
            }, l)), this.onMybet = this.onMybet.bind(this), this.loadMybet = this.loadMybet.bind(this)
        }
        static formatMyBetDataFromHttp(e) {
            return e.map(i => Z(D({}, i), {
                odds: i.odds / 1e4,
                profitAmount: new n.Decimal(i.winAmount).sub(i.betAmount).toNumber()
            }))
        }
        static formatMyBetDataFromSocket(e) {
            return e.map(i => Z(D({}, i), {
                distributeId: i.distributeId.toString(),
                gameId: i.gameId.toNumber(),
                odds: i.odds / 1e4,
                profitAmount: new n.Decimal(i.winAmount).sub(i.betAmount).toNumber(),
                betTime: i.betTime.toNumber(),
                betId: i.betId.toString()
            }))
        }
        onMybet(e) {
            const i = this.state.myBets.reduce((r, m) => (r[m.betId] = m, r), {}),
                l = St.formatMyBetDataFromSocket([e]).filter(r => !i[r.betId.toString()]),
                o = l.concat(this.state.myBets);
            this.state.myBets = o.slice(0, this.betlistLenth), l.forEach(r => this.emit("betEnd", {
                amount: new n.Decimal(r.betAmount),
                odds: r.odds,
                currencyName: r.currencyName
            }))
        }
        async init() {
            await super.init(), this.socket.on("multilmybetlog", n.socket.decodeBind(e => this.onMybet(e), Vt.BetLog)), n.accountStore.waitLogin().then(() => this.loadMybet())
        }
        async loadMybet() {
            const e = await n.http.post("/game/bet/recent-bet", {
                gameUnique: this.gameUnique
            });
            this.state.myBets = St.formatMyBetDataFromHttp(e).slice(0, this.betlistLenth)
        }
    },
    ut = class ut extends At {
        constructor(e, i, l) {
            super(e, i, D({
                myBets: []
            }, l)), this.onMybet = this.onMybet.bind(this), this.loadMybet = this.loadMybet.bind(this)
        }
        static formatMyBetDataFromHttp(e) {
            return e.map(i => Z(D({}, i), {
                odds: i.odds / 1e4,
                profitAmount: new n.Decimal(i.winAmount).sub(i.betAmount).toNumber()
            }))
        }
        static formatMyBetDataFromSocket(e) {
            return e.map(i => Z(D({}, i), {
                distributeId: i.distributeId.toString(),
                gameId: i.gameId.toNumber(),
                odds: i.odds / 1e4,
                profitAmount: new n.Decimal(i.winAmount).sub(i.betAmount).toNumber(),
                betTime: i.betTime.toNumber(),
                betId: i.betId.toString()
            }))
        }
        onMybet(e) {
            const i = this.state.myBets.reduce((r, m) => (r[m.betId] = m, r), {}),
                l = ut.formatMyBetDataFromSocket([e]).filter(r => !i[r.betId.toString()]),
                o = l.concat(this.state.myBets);
            this.state.myBets = o.slice(0, this.betlistLenth), l.forEach(r => this.emit("betEnd", {
                amount: new n.Decimal(r.betAmount),
                odds: r.odds,
                currencyName: r.currencyName
            }))
        }
        async init() {
            await super.init(), ut.mybetSocket.on("multilmybetlog", n.socket.decodeBind(e => this.onMybet(e), Vt.BetLog)), n.accountStore.waitLogin().then(() => this.loadMybet())
        }
        async loadMybet() {
            const e = await n.http.post("/game/bet/recent-bet", {
                gameUnique: this.gameUnique
            });
            this.state.myBets = ut.formatMyBetDataFromHttp(e).slice(0, this.betlistLenth)
        }
    };
E(ut, "mybetSocket", n.socket.socket("/g/data"));
let Zt = ut;
const Fl = Zt,
    Ta = {
        toNonExponential: function(t) {
            try {
                const e = t.toExponential().match(/\d(?:\.(\d*))?e([+-]\d+)/);
                return e ? t.toFixed(Math.max(0, (e[1] || "").length - Number(e[2]))) : t + ""
            } catch (e) {
                return t + ""
            }
        }
    };
/**
 * @license
 * Copyright 2009 The Closure Library Authors
 * Copyright 2020 Daniel Wirtz / The long.js Authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 */
var Y = null;
try {
    Y = new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 13, 2, 96, 0, 1, 127, 96, 4, 127, 127, 127, 127, 1, 127, 3, 7, 6, 0, 1, 1, 1, 1, 1, 6, 6, 1, 127, 1, 65, 0, 11, 7, 50, 6, 3, 109, 117, 108, 0, 1, 5, 100, 105, 118, 95, 115, 0, 2, 5, 100, 105, 118, 95, 117, 0, 3, 5, 114, 101, 109, 95, 115, 0, 4, 5, 114, 101, 109, 95, 117, 0, 5, 8, 103, 101, 116, 95, 104, 105, 103, 104, 0, 0, 10, 191, 1, 6, 4, 0, 35, 0, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 126, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 127, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 128, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 129, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 130, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11])), {}).exports
} catch (t) {}

function k(t, e, i) {
    this.low = 0 | t, this.high = 0 | e, this.unsigned = !!i
}

function W(t) {
    return (t && t.__isLong__) === !0
}

function re(t) {
    var e = Math.clz32(t & -t);
    return t ? 31 - e : e
}
k.prototype.__isLong__, Object.defineProperty(k.prototype, "__isLong__", {
    value: !0
}), k.isLong = W;
var me = {},
    ce = {};

function nt(t, e) {
    var i, l, o;
    return e ? (o = 0 <= (t >>>= 0) && t < 256) && (l = ce[t]) ? l : (i = x(t, 0, !0), o && (ce[t] = i), i) : (o = -128 <= (t |= 0) && t < 128) && (l = me[t]) ? l : (i = x(t, t < 0 ? -1 : 0, !1), o && (me[t] = i), i)
}

function z(t, e) {
    if (isNaN(t)) return e ? tt : q;
    if (e) {
        if (t < 0) return tt;
        if (t >= je) return Ze
    } else {
        if (t <= -ue) return M;
        if (t + 1 >= ue) return Se
    }
    return t < 0 ? z(-t, e).neg() : x(t % dt | 0, t / dt | 0, e)
}

function x(t, e, i) {
    return new k(t, e, i)
}
k.fromInt = nt, k.fromNumber = z, k.fromBits = x;
var Lt = Math.pow;

function Ut(t, e, i) {
    if (t.length === 0) throw Error("empty string");
    if (typeof e == "number" ? (i = e, e = !1) : e = !!e, t === "NaN" || t === "Infinity" || t === "+Infinity" || t === "-Infinity") return e ? tt : q;
    if ((i = i || 10) < 2 || 36 < i) throw RangeError("radix");
    var l;
    if ((l = t.indexOf("-")) > 0) throw Error("interior hyphen");
    if (l === 0) return Ut(t.substring(1), e, i).neg();
    for (var o = z(Lt(i, 8)), r = q, m = 0; m < t.length; m += 8) {
        var c = Math.min(8, t.length - m),
            u = parseInt(t.substring(m, m + c), i);
        if (c < 8) {
            var h = z(Lt(i, c));
            r = r.mul(h).add(z(u))
        } else r = (r = r.mul(o)).add(z(u))
    }
    return r.unsigned = e, r
}

function F(t, e) {
    return typeof t == "number" ? z(t, e) : typeof t == "string" ? Ut(t, e) : x(t.low, t.high, typeof e == "boolean" ? e : t.unsigned)
}
k.fromString = Ut, k.fromValue = F;
var dt = 4294967296,
    je = dt * dt,
    ue = je / 2,
    de = nt(1 << 24),
    q = nt(0);
k.ZERO = q;
var tt = nt(0, !0);
k.UZERO = tt;
var mt = nt(1);
k.ONE = mt;
var ke = nt(1, !0);
k.UONE = ke;
var Bt = nt(-1);
k.NEG_ONE = Bt;
var Se = x(-1, 2147483647, !1);
k.MAX_VALUE = Se;
var Ze = x(-1, -1, !0);
k.MAX_UNSIGNED_VALUE = Ze;
var M = x(0, -2147483648, !1);
k.MIN_VALUE = M;
var p = k.prototype;
p.toInt = function() {
    return this.unsigned ? this.low >>> 0 : this.low
}, p.toNumber = function() {
    return this.unsigned ? (this.high >>> 0) * dt + (this.low >>> 0) : this.high * dt + (this.low >>> 0)
}, p.toString = function(t) {
    if ((t = t || 10) < 2 || 36 < t) throw RangeError("radix");
    if (this.isZero()) return "0";
    if (this.isNegative()) {
        if (this.eq(M)) {
            var e = z(t),
                i = this.div(e),
                l = i.mul(e).sub(this);
            return i.toString(t) + l.toInt().toString(t)
        }
        return "-" + this.neg().toString(t)
    }
    for (var o = z(Lt(t, 6), this.unsigned), r = this, m = "";;) {
        var c = r.div(o),
            u = (r.sub(c.mul(o)).toInt() >>> 0).toString(t);
        if ((r = c).isZero()) return u + m;
        for (; u.length < 6;) u = "0" + u;
        m = "" + u + m
    }
}, p.getHighBits = function() {
    return this.high
}, p.getHighBitsUnsigned = function() {
    return this.high >>> 0
}, p.getLowBits = function() {
    return this.low
}, p.getLowBitsUnsigned = function() {
    return this.low >>> 0
}, p.getNumBitsAbs = function() {
    if (this.isNegative()) return this.eq(M) ? 64 : this.neg().getNumBitsAbs();
    for (var t = this.high != 0 ? this.high : this.low, e = 31; e > 0 && !(t & 1 << e); e--);
    return this.high != 0 ? e + 33 : e + 1
}, p.isZero = function() {
    return this.high === 0 && this.low === 0
}, p.eqz = p.isZero, p.isNegative = function() {
    return !this.unsigned && this.high < 0
}, p.isPositive = function() {
    return this.unsigned || this.high >= 0
}, p.isOdd = function() {
    return !(1 & ~this.low)
}, p.isEven = function() {
    return !(1 & this.low)
}, p.equals = function(t) {
    return W(t) || (t = F(t)), (this.unsigned === t.unsigned || this.high >>> 31 != 1 || t.high >>> 31 != 1) && this.high === t.high && this.low === t.low
}, p.eq = p.equals, p.notEquals = function(t) {
    return !this.eq(t)
}, p.neq = p.notEquals, p.ne = p.notEquals, p.lessThan = function(t) {
    return this.comp(t) < 0
}, p.lt = p.lessThan, p.lessThanOrEqual = function(t) {
    return this.comp(t) <= 0
}, p.lte = p.lessThanOrEqual, p.le = p.lessThanOrEqual, p.greaterThan = function(t) {
    return this.comp(t) > 0
}, p.gt = p.greaterThan, p.greaterThanOrEqual = function(t) {
    return this.comp(t) >= 0
}, p.gte = p.greaterThanOrEqual, p.ge = p.greaterThanOrEqual, p.compare = function(t) {
    if (W(t) || (t = F(t)), this.eq(t)) return 0;
    var e = this.isNegative(),
        i = t.isNegative();
    return e && !i ? -1 : !e && i ? 1 : this.unsigned ? t.high >>> 0 > this.high >>> 0 || t.high === this.high && t.low >>> 0 > this.low >>> 0 ? -1 : 1 : this.sub(t).isNegative() ? -1 : 1
}, p.comp = p.compare, p.negate = function() {
    return !this.unsigned && this.eq(M) ? M : this.not().add(mt)
}, p.neg = p.negate, p.add = function(t) {
    W(t) || (t = F(t));
    var e = this.high >>> 16,
        i = 65535 & this.high,
        l = this.low >>> 16,
        o = 65535 & this.low,
        r = t.high >>> 16,
        m = 65535 & t.high,
        c = t.low >>> 16,
        u = 0,
        h = 0,
        g = 0,
        f = 0;
    return g += (f += o + (65535 & t.low)) >>> 16, h += (g += l + c) >>> 16, u += (h += i + m) >>> 16, u += e + r, x((g &= 65535) << 16 | (f &= 65535), (u &= 65535) << 16 | (h &= 65535), this.unsigned)
}, p.subtract = function(t) {
    return W(t) || (t = F(t)), this.add(t.neg())
}, p.sub = p.subtract, p.multiply = function(t) {
    if (this.isZero()) return this;
    if (W(t) || (t = F(t)), Y) return x(Y.mul(this.low, this.high, t.low, t.high), Y.get_high(), this.unsigned);
    if (t.isZero()) return this.unsigned ? tt : q;
    if (this.eq(M)) return t.isOdd() ? M : q;
    if (t.eq(M)) return this.isOdd() ? M : q;
    if (this.isNegative()) return t.isNegative() ? this.neg().mul(t.neg()) : this.neg().mul(t).neg();
    if (t.isNegative()) return this.mul(t.neg()).neg();
    if (this.lt(de) && t.lt(de)) return z(this.toNumber() * t.toNumber(), this.unsigned);
    var e = this.high >>> 16,
        i = 65535 & this.high,
        l = this.low >>> 16,
        o = 65535 & this.low,
        r = t.high >>> 16,
        m = 65535 & t.high,
        c = t.low >>> 16,
        u = 65535 & t.low,
        h = 0,
        g = 0,
        f = 0,
        T = 0;
    return f += (T += o * u) >>> 16, g += (f += l * u) >>> 16, f &= 65535, g += (f += o * c) >>> 16, h += (g += i * u) >>> 16, g &= 65535, h += (g += l * c) >>> 16, g &= 65535, h += (g += o * m) >>> 16, h += e * u + i * c + l * m + o * r, x((f &= 65535) << 16 | (T &= 65535), (h &= 65535) << 16 | (g &= 65535), this.unsigned)
}, p.mul = p.multiply, p.divide = function(t) {
    if (W(t) || (t = F(t)), t.isZero()) throw Error("division by zero");
    var e, i, l;
    if (Y) return this.unsigned || this.high !== -2147483648 || t.low !== -1 || t.high !== -1 ? x((this.unsigned ? Y.div_u : Y.div_s)(this.low, this.high, t.low, t.high), Y.get_high(), this.unsigned) : this;
    if (this.isZero()) return this.unsigned ? tt : q;
    if (this.unsigned) {
        if (t.unsigned || (t = t.toUnsigned()), t.gt(this)) return tt;
        if (t.gt(this.shru(1))) return ke;
        l = tt
    } else {
        if (this.eq(M)) return t.eq(mt) || t.eq(Bt) ? M : t.eq(M) ? mt : (e = this.shr(1).div(t).shl(1)).eq(q) ? t.isNegative() ? mt : Bt : (i = this.sub(t.mul(e)), l = e.add(i.div(t)));
        if (t.eq(M)) return this.unsigned ? tt : q;
        if (this.isNegative()) return t.isNegative() ? this.neg().div(t.neg()) : this.neg().div(t).neg();
        if (t.isNegative()) return this.div(t.neg()).neg();
        l = q
    }
    for (i = this; i.gte(t);) {
        e = Math.max(1, Math.floor(i.toNumber() / t.toNumber()));
        for (var o = Math.ceil(Math.log(e) / Math.LN2), r = o <= 48 ? 1 : Lt(2, o - 48), m = z(e), c = m.mul(t); c.isNegative() || c.gt(i);) c = (m = z(e -= r, this.unsigned)).mul(t);
        m.isZero() && (m = mt), l = l.add(m), i = i.sub(c)
    }
    return l
}, p.div = p.divide, p.modulo = function(t) {
    return W(t) || (t = F(t)), Y ? x((this.unsigned ? Y.rem_u : Y.rem_s)(this.low, this.high, t.low, t.high), Y.get_high(), this.unsigned) : this.sub(this.div(t).mul(t))
}, p.mod = p.modulo, p.rem = p.modulo, p.not = function() {
    return x(~this.low, ~this.high, this.unsigned)
}, p.countLeadingZeros = function() {
    return this.high ? Math.clz32(this.high) : Math.clz32(this.low) + 32
}, p.clz = p.countLeadingZeros, p.countTrailingZeros = function() {
    return this.low ? re(this.low) : re(this.high) + 32
}, p.ctz = p.countTrailingZeros, p.and = function(t) {
    return W(t) || (t = F(t)), x(this.low & t.low, this.high & t.high, this.unsigned)
}, p.or = function(t) {
    return W(t) || (t = F(t)), x(this.low | t.low, this.high | t.high, this.unsigned)
}, p.xor = function(t) {
    return W(t) || (t = F(t)), x(this.low ^ t.low, this.high ^ t.high, this.unsigned)
}, p.shiftLeft = function(t) {
    return W(t) && (t = t.toInt()), (t &= 63) == 0 ? this : t < 32 ? x(this.low << t, this.high << t | this.low >>> 32 - t, this.unsigned) : x(0, this.low << t - 32, this.unsigned)
}, p.shl = p.shiftLeft, p.shiftRight = function(t) {
    return W(t) && (t = t.toInt()), (t &= 63) == 0 ? this : t < 32 ? x(this.low >>> t | this.high << 32 - t, this.high >> t, this.unsigned) : x(this.high >> t - 32, this.high >= 0 ? 0 : -1, this.unsigned)
}, p.shr = p.shiftRight, p.shiftRightUnsigned = function(t) {
    return W(t) && (t = t.toInt()), (t &= 63) == 0 ? this : t < 32 ? x(this.low >>> t | this.high << 32 - t, this.high >>> t, this.unsigned) : x(t === 32 ? this.high : this.high >>> t - 32, 0, this.unsigned)
}, p.shru = p.shiftRightUnsigned, p.shr_u = p.shiftRightUnsigned, p.rotateLeft = function(t) {
    var e;
    return W(t) && (t = t.toInt()), (t &= 63) == 0 ? this : t === 32 ? x(this.high, this.low, this.unsigned) : t < 32 ? (e = 32 - t, x(this.low << t | this.high >>> e, this.high << t | this.low >>> e, this.unsigned)) : (e = 32 - (t -= 32), x(this.high << t | this.low >>> e, this.low << t | this.high >>> e, this.unsigned))
}, p.rotl = p.rotateLeft, p.rotateRight = function(t) {
    var e;
    return W(t) && (t = t.toInt()), (t &= 63) == 0 ? this : t === 32 ? x(this.high, this.low, this.unsigned) : t < 32 ? (e = 32 - t, x(this.high << e | this.low >>> t, this.low << e | this.high >>> t, this.unsigned)) : (e = 32 - (t -= 32), x(this.low << e | this.high >>> t, this.high << e | this.low >>> t, this.unsigned))
}, p.rotr = p.rotateRight, p.toSigned = function() {
    return this.unsigned ? x(this.low, this.high, !1) : this
}, p.toUnsigned = function() {
    return this.unsigned ? this : x(this.low, this.high, !0)
}, p.toBytes = function(t) {
    return t ? this.toBytesLE() : this.toBytesBE()
}, p.toBytesLE = function() {
    var t = this.high,
        e = this.low;
    return [255 & e, e >>> 8 & 255, e >>> 16 & 255, e >>> 24, 255 & t, t >>> 8 & 255, t >>> 16 & 255, t >>> 24]
}, p.toBytesBE = function() {
    var t = this.high,
        e = this.low;
    return [t >>> 24, t >>> 16 & 255, t >>> 8 & 255, 255 & t, e >>> 24, e >>> 16 & 255, e >>> 8 & 255, 255 & e]
}, k.fromBytes = function(t, e, i) {
    return i ? k.fromBytesLE(t, e) : k.fromBytesBE(t, e)
}, k.fromBytesLE = function(t, e) {
    return new k(t[0] | t[1] << 8 | t[2] << 16 | t[3] << 24, t[4] | t[5] << 8 | t[6] << 16 | t[7] << 24, e)
}, k.fromBytesBE = function(t, e) {
    return new k(t[4] << 24 | t[5] << 16 | t[6] << 8 | t[7], t[0] << 24 | t[1] << 16 | t[2] << 8 | t[3], e)
};
const X = C.Reader,
    st = C.Writer,
    G = C.util,
    S = C.roots.singleGame || (C.roots.singleGame = {});
S.Bet = (() => {
    function t(e) {
        if (e)
            for (let i = Object.keys(e), l = 0; l < i.length; ++l) e[i[l]] != null && (this[i[l]] = e[i[l]])
    }
    return t.prototype.currencyName = "", t.prototype.betAmount = "", t.prototype.betValue = G.newBuffer([]), t.prototype.scriptId = 0, t.prototype.frontgroundId = 0, t.encode = function(e, i) {
        return i || (i = st.create()), e.currencyName != null && Object.hasOwnProperty.call(e, "currencyName") && i.uint32(10).string(e.currencyName), e.betAmount != null && Object.hasOwnProperty.call(e, "betAmount") && i.uint32(18).string(e.betAmount), e.betValue != null && Object.hasOwnProperty.call(e, "betValue") && i.uint32(26).bytes(e.betValue), e.scriptId != null && Object.hasOwnProperty.call(e, "scriptId") && i.uint32(32).sint32(e.scriptId), e.frontgroundId != null && Object.hasOwnProperty.call(e, "frontgroundId") && i.uint32(120).sint32(e.frontgroundId), i
    }, t.decode = function(e, i) {
        e instanceof X || (e = X.create(e));
        let l = i === void 0 ? e.len : e.pos + i,
            o = new S.Bet;
        for (; e.pos < l;) {
            let r = e.uint32();
            switch (r >>> 3) {
                case 1:
                    o.currencyName = e.string();
                    break;
                case 2:
                    o.betAmount = e.string();
                    break;
                case 3:
                    o.betValue = e.bytes();
                    break;
                case 4:
                    o.scriptId = e.sint32();
                    break;
                case 15:
                    o.frontgroundId = e.sint32();
                    break;
                default:
                    e.skipType(7 & r)
            }
        }
        return o
    }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/Bet"
    }, t
})(), S.BetResult = (() => {
    function t(e) {
        if (e)
            for (let i = Object.keys(e), l = 0; l < i.length; ++l) e[i[l]] != null && (this[i[l]] = e[i[l]])
    }
    return t.prototype.betId = G.Long ? G.Long.fromBits(0, 0, !1) : 0, t.prototype.result = 0, t.prototype.odds = 0, t.prototype.nonce = 0, t.prototype.gameValue = G.newBuffer([]), t.prototype.betTime = G.Long ? G.Long.fromBits(0, 0, !1) : 0, t.prototype.currencyName = "", t.prototype.betAmount = "", t.prototype.winAmount = "", t.prototype.betIdTmp = "", t.prototype.betValue = G.newBuffer([]), t.prototype.distributeId = G.Long ? G.Long.fromBits(0, 0, !1) : 0, t.encode = function(e, i) {
        return i || (i = st.create()), e.betId != null && Object.hasOwnProperty.call(e, "betId") && i.uint32(8).sint64(e.betId), e.result != null && Object.hasOwnProperty.call(e, "result") && i.uint32(16).sint32(e.result), e.odds != null && Object.hasOwnProperty.call(e, "odds") && i.uint32(24).sint32(e.odds), e.nonce != null && Object.hasOwnProperty.call(e, "nonce") && i.uint32(32).sint32(e.nonce), e.gameValue != null && Object.hasOwnProperty.call(e, "gameValue") && i.uint32(42).bytes(e.gameValue), e.betTime != null && Object.hasOwnProperty.call(e, "betTime") && i.uint32(48).sint64(e.betTime), e.currencyName != null && Object.hasOwnProperty.call(e, "currencyName") && i.uint32(58).string(e.currencyName), e.betAmount != null && Object.hasOwnProperty.call(e, "betAmount") && i.uint32(66).string(e.betAmount), e.winAmount != null && Object.hasOwnProperty.call(e, "winAmount") && i.uint32(74).string(e.winAmount), e.betIdTmp != null && Object.hasOwnProperty.call(e, "betIdTmp") && i.uint32(82).string(e.betIdTmp), e.betValue != null && Object.hasOwnProperty.call(e, "betValue") && i.uint32(90).bytes(e.betValue), e.distributeId != null && Object.hasOwnProperty.call(e, "distributeId") && i.uint32(96).sint64(e.distributeId), i
    }, t.decode = function(e, i) {
        e instanceof X || (e = X.create(e));
        let l = i === void 0 ? e.len : e.pos + i,
            o = new S.BetResult;
        for (; e.pos < l;) {
            let r = e.uint32();
            switch (r >>> 3) {
                case 1:
                    o.betId = e.sint64();
                    break;
                case 2:
                    o.result = e.sint32();
                    break;
                case 3:
                    o.odds = e.sint32();
                    break;
                case 4:
                    o.nonce = e.sint32();
                    break;
                case 5:
                    o.gameValue = e.bytes();
                    break;
                case 6:
                    o.betTime = e.sint64();
                    break;
                case 7:
                    o.currencyName = e.string();
                    break;
                case 8:
                    o.betAmount = e.string();
                    break;
                case 9:
                    o.winAmount = e.string();
                    break;
                case 10:
                    o.betIdTmp = e.string();
                    break;
                case 11:
                    o.betValue = e.bytes();
                    break;
                case 12:
                    o.distributeId = e.sint64();
                    break;
                default:
                    e.skipType(7 & r)
            }
        }
        return o
    }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/BetResult"
    }, t
})(), S.BetInfo = (() => {
    function t(e) {
        if (this.infos = [], e)
            for (let i = Object.keys(e), l = 0; l < i.length; ++l) e[i[l]] != null && (this[i[l]] = e[i[l]])
    }
    return t.prototype.infos = G.emptyArray, t.encode = function(e, i) {
        if (i || (i = st.create()), e.infos != null && e.infos.length)
            for (let l = 0; l < e.infos.length; ++l) S.BetInfo.Info.encode(e.infos[l], i.uint32(10).fork()).ldelim();
        return i
    }, t.decode = function(e, i) {
        e instanceof X || (e = X.create(e));
        let l = i === void 0 ? e.len : e.pos + i,
            o = new S.BetInfo;
        for (; e.pos < l;) {
            let r = e.uint32();
            r >>> 3 == 1 ? (o.infos && o.infos.length || (o.infos = []), o.infos.push(S.BetInfo.Info.decode(e, e.uint32()))) : e.skipType(7 & r)
        }
        return o
    }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/BetInfo"
    }, t.Info = function() {
        function e(i) {
            if (i)
                for (let l = Object.keys(i), o = 0; o < l.length; ++o) i[l[o]] != null && (this[l[o]] = i[l[o]])
        }
        return e.prototype.currencyName = "", e.prototype.maxBetAmount = "", e.prototype.minBetAmount = "", e.prototype.maxProfitAmount = "", e.encode = function(i, l) {
            return l || (l = st.create()), i.currencyName != null && Object.hasOwnProperty.call(i, "currencyName") && l.uint32(10).string(i.currencyName), i.maxBetAmount != null && Object.hasOwnProperty.call(i, "maxBetAmount") && l.uint32(18).string(i.maxBetAmount), i.minBetAmount != null && Object.hasOwnProperty.call(i, "minBetAmount") && l.uint32(26).string(i.minBetAmount), i.maxProfitAmount != null && Object.hasOwnProperty.call(i, "maxProfitAmount") && l.uint32(34).string(i.maxProfitAmount), l
        }, e.decode = function(i, l) {
            i instanceof X || (i = X.create(i));
            let o = l === void 0 ? i.len : i.pos + l,
                r = new S.BetInfo.Info;
            for (; i.pos < o;) {
                let m = i.uint32();
                switch (m >>> 3) {
                    case 1:
                        r.currencyName = i.string();
                        break;
                    case 2:
                        r.maxBetAmount = i.string();
                        break;
                    case 3:
                        r.minBetAmount = i.string();
                        break;
                    case 4:
                        r.maxProfitAmount = i.string();
                        break;
                    default:
                        i.skipType(7 & m)
                }
            }
            return r
        }, e.getTypeUrl = function(i) {
            return i === void 0 && (i = "type.googleapis.com"), i + "/BetInfo.Info"
        }, e
    }(), t
})(), S.GameConfig = (() => {
    function t(e) {
        if (e)
            for (let i = Object.keys(e), l = 0; l < i.length; ++l) e[i[l]] != null && (this[i[l]] = e[i[l]])
    }
    return t.prototype.gameName = "", t.prototype.gameSocketNameSpace = "", t.prototype.version = 0, t.prototype.rtp = "", t.prototype.payTable = "", t.prototype.isSingle = !1, t.prototype.isDelete = !1, t.encode = function(e, i) {
        return i || (i = st.create()), e.gameName != null && Object.hasOwnProperty.call(e, "gameName") && i.uint32(10).string(e.gameName), e.gameSocketNameSpace != null && Object.hasOwnProperty.call(e, "gameSocketNameSpace") && i.uint32(18).string(e.gameSocketNameSpace), e.version != null && Object.hasOwnProperty.call(e, "version") && i.uint32(24).sint32(e.version), e.rtp != null && Object.hasOwnProperty.call(e, "rtp") && i.uint32(34).string(e.rtp), e.payTable != null && Object.hasOwnProperty.call(e, "payTable") && i.uint32(42).string(e.payTable), e.isSingle != null && Object.hasOwnProperty.call(e, "isSingle") && i.uint32(48).bool(e.isSingle), e.isDelete != null && Object.hasOwnProperty.call(e, "isDelete") && i.uint32(56).bool(e.isDelete), i
    }, t.decode = function(e, i) {
        e instanceof X || (e = X.create(e));
        let l = i === void 0 ? e.len : e.pos + i,
            o = new S.GameConfig;
        for (; e.pos < l;) {
            let r = e.uint32();
            switch (r >>> 3) {
                case 1:
                    o.gameName = e.string();
                    break;
                case 2:
                    o.gameSocketNameSpace = e.string();
                    break;
                case 3:
                    o.version = e.sint32();
                    break;
                case 4:
                    o.rtp = e.string();
                    break;
                case 5:
                    o.payTable = e.string();
                    break;
                case 6:
                    o.isSingle = e.bool();
                    break;
                case 7:
                    o.isDelete = e.bool();
                    break;
                default:
                    e.skipType(7 & r)
            }
        }
        return o
    }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/GameConfig"
    }, t
})(), S.Init = (() => {
    function t(e) {
        if (this.betInfo = [], this.gameConfig = [], e)
            for (let i = Object.keys(e), l = 0; l < i.length; ++l) e[i[l]] != null && (this[i[l]] = e[i[l]])
    }
    return t.prototype.betInfo = G.emptyArray, t.prototype.gameConfig = G.emptyArray, t.encode = function(e, i) {
        if (i || (i = st.create()), e.betInfo != null && e.betInfo.length)
            for (let l = 0; l < e.betInfo.length; ++l) S.BetInfo.Info.encode(e.betInfo[l], i.uint32(10).fork()).ldelim();
        if (e.gameConfig != null && e.gameConfig.length)
            for (let l = 0; l < e.gameConfig.length; ++l) S.GameConfig.encode(e.gameConfig[l], i.uint32(18).fork()).ldelim();
        return i
    }, t.decode = function(e, i) {
        e instanceof X || (e = X.create(e));
        let l = i === void 0 ? e.len : e.pos + i,
            o = new S.Init;
        for (; e.pos < l;) {
            let r = e.uint32();
            switch (r >>> 3) {
                case 1:
                    o.betInfo && o.betInfo.length || (o.betInfo = []), o.betInfo.push(S.BetInfo.Info.decode(e, e.uint32()));
                    break;
                case 2:
                    o.gameConfig && o.gameConfig.length || (o.gameConfig = []), o.gameConfig.push(S.GameConfig.decode(e, e.uint32()));
                    break;
                default:
                    e.skipType(7 & r)
            }
        }
        return o
    }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/Init"
    }, t
})(), S.BetLog = (() => {
    function t(e) {
        if (e)
            for (let i = Object.keys(e), l = 0; l < i.length; ++l) e[i[l]] != null && (this[i[l]] = e[i[l]])
    }
    return t.prototype.betId = G.Long ? G.Long.fromBits(0, 0, !1) : 0, t.prototype.userId = 0, t.prototype.nickName = "", t.prototype.gameName = "", t.prototype.nonce = 0, t.prototype.currencyName = "", t.prototype.betAmount = "", t.prototype.winAmount = "", t.prototype.odds = 0, t.prototype.betTime = G.Long ? G.Long.fromBits(0, 0, !1) : 0, t.prototype.betIdTmp = "", t.prototype.distributeId = G.Long ? G.Long.fromBits(0, 0, !1) : 0, t.encode = function(e, i) {
        return i || (i = st.create()), e.betId != null && Object.hasOwnProperty.call(e, "betId") && i.uint32(8).sint64(e.betId), e.userId != null && Object.hasOwnProperty.call(e, "userId") && i.uint32(16).sint32(e.userId), e.nickName != null && Object.hasOwnProperty.call(e, "nickName") && i.uint32(26).string(e.nickName), e.gameName != null && Object.hasOwnProperty.call(e, "gameName") && i.uint32(34).string(e.gameName), e.nonce != null && Object.hasOwnProperty.call(e, "nonce") && i.uint32(40).sint32(e.nonce), e.currencyName != null && Object.hasOwnProperty.call(e, "currencyName") && i.uint32(50).string(e.currencyName), e.betAmount != null && Object.hasOwnProperty.call(e, "betAmount") && i.uint32(58).string(e.betAmount), e.winAmount != null && Object.hasOwnProperty.call(e, "winAmount") && i.uint32(66).string(e.winAmount), e.odds != null && Object.hasOwnProperty.call(e, "odds") && i.uint32(72).sint32(e.odds), e.betTime != null && Object.hasOwnProperty.call(e, "betTime") && i.uint32(80).sint64(e.betTime), e.betIdTmp != null && Object.hasOwnProperty.call(e, "betIdTmp") && i.uint32(90).string(e.betIdTmp), e.distributeId != null && Object.hasOwnProperty.call(e, "distributeId") && i.uint32(96).sint64(e.distributeId), i
    }, t.decode = function(e, i) {
        e instanceof X || (e = X.create(e));
        let l = i === void 0 ? e.len : e.pos + i,
            o = new S.BetLog;
        for (; e.pos < l;) {
            let r = e.uint32();
            switch (r >>> 3) {
                case 1:
                    o.betId = e.sint64();
                    break;
                case 2:
                    o.userId = e.sint32();
                    break;
                case 3:
                    o.nickName = e.string();
                    break;
                case 4:
                    o.gameName = e.string();
                    break;
                case 5:
                    o.nonce = e.sint32();
                    break;
                case 6:
                    o.currencyName = e.string();
                    break;
                case 7:
                    o.betAmount = e.string();
                    break;
                case 8:
                    o.winAmount = e.string();
                    break;
                case 9:
                    o.odds = e.sint32();
                    break;
                case 10:
                    o.betTime = e.sint64();
                    break;
                case 11:
                    o.betIdTmp = e.string();
                    break;
                case 12:
                    o.distributeId = e.sint64();
                    break;
                default:
                    e.skipType(7 & r)
            }
        }
        return o
    }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/BetLog"
    }, t
})();
const {
    ref: Pa
} = n.valtio, Aa = n.socket.encode(S.Bet), Oa = n.socket.decode(S.Init), ql = class extends At {
    constructor(e, i, l) {
        super(e, i, D({
            autoBet: {
                isRunning: !1,
                times: 0,
                profit: Pa(new n.Decimal(0)),
                stopOnWin: 0,
                stopOnLose: 0
            },
            allBets: [],
            myBets: [],
            gameConfig: []
        }, l));
        E(this, "autoBet");
        E(this, "oddsScale", 1e4);
        E(this, "betResultDecoder", n.socket.decode(S.BetResult));
        E(this, "gameChannel", 1);
        E(this, "cacheNickName", "");
        this.loadMybet = this.loadMybet.bind(this), this.formatBetLog = this.formatBetLog.bind(this), this.setJackpot = this.setJackpot.bind(this), this.addAllBet = this.addAllBet.bind(this), this.addMyBet = this.addMyBet.bind(this), this.socket.on("allbet", n.utils.intervalQueue(n.socket.decodeBind(o => {
            o.userId !== n.accountStore.state.userId ? this.formatBetLog(o) : this.cacheNickName = o.nickName
        }, S.BetLog), 500)), this.socket.on("j-change", n.socket.decodeBind(o => o.infos.forEach(r => this.setJackpot(r)), $e)), this.autoBet = new Ra(this), this.autoBet.on("start", () => this.setBetStatus(!0)), this.autoBet.on("stop", () => {
            this.setBetStatus(!1)
        })
    }
    setBetStatus(e) {
        this.state.autoBet.isRunning || this.state.script.isRunning || (this.state.isBetting = e)
    }
    async bet(e, i = 0) {
        try {
            let l = this.betRequest(e, this.betValue(), i);
            this.onBetRequest && (l = this.onBetRequest(l));
            const o = await l;
            return this.addMyBet(o), this.emit("betEnd", {
                amount: new n.Decimal(o.betAmount),
                odds: o.odds,
                currencyName: o.currencyName
            }), o
        } catch (l) {
            throw l
        }
    }
    addAllBet(e) {
        if (e = n.valtio.ref(e), this.state.allBets.find(l => l.betId === e.betId)) return;
        const i = [e, ...this.state.allBets];
        i.length > this.betlistLenth && i.pop(), this.state.allBets = i
    }
    addMyBet(e) {
        e = n.valtio.ref(e), this.cacheNickName && (e.nickName = this.cacheNickName);
        const i = [e, ...this.state.myBets];
        i.length > this.betlistLenth && i.pop(), this.state.myBets = i, this.addAllBet(e)
    }
    deactivate() {
        this.state.autoBet.isRunning && this.autoBet.stop(), super.deactivate()
    }
    gameValueDecoder(e) {
        return e
    }
    async betRequest(e, i, l = 0) {
        const o = await this.socketRequest("bet", Aa({
            frontgroundId: this.txId,
            currencyName: this.state.currencyName,
            betAmount: e.toString(),
            betValue: i,
            scriptId: l
        })).then(this.betResultDecoder);
        return this.getBetlog(o)
    }
    getBetlog(e) {
        const {
            betId: i,
            nonce: l,
            currencyName: o,
            betAmount: r,
            winAmount: m,
            betTime: c,
            gameValue: u,
            distributeId: h
        } = e;
        let g = e.odds;
        g /= this.oddsScale;
        const f = new n.Decimal(m).sub(r).toNumber();
        return {
            betId: i.toString(),
            nonce: l,
            nickName: n.accountStore.state.name,
            userId: n.accountStore.state.userId,
            currencyName: o,
            betAmount: new n.Decimal(r).toNumber(),
            winAmount: new n.Decimal(m).toNumber(),
            profitAmount: f,
            odds: g,
            betTime: c.toNumber(),
            gameValue: this.gameValueDecoder(u),
            distributeId: h.toString()
        }
    }
    async init() {
        await n.accountStore.initData;
        const e = super.init(),
            [i] = await Promise.all([this.socketRequest("init").then(Oa), e]),
            {
                betInfo: l,
                gameConfig: o
            } = i;
        this.state.gameConfig = o;
        const r = await n.http.get(`/game/bet/allBet/${this.gameUnique}`);
        this.state.jackpot = l.reduce((m, c) => {
            const {
                currencyName: u,
                minBetAmount: h,
                maxBetAmount: g,
                maxProfitAmount: f
            } = c;
            return m[u] = {
                currencyName: u,
                minBetAmount: new n.Decimal(h).toNumber(),
                maxBetAmount: new n.Decimal(g).toNumber(),
                maxProfitAmount: new n.Decimal(f).toNumber()
            }, m
        }, {}), setTimeout(() => {
            r.reverse().map(m => this.formatBetLog(m))
        }, 0), n.accountStore.waitLogin().then(() => this.loadMybet())
    }
    formatBetLog(e) {
        const {
            betId: i,
            userId: l,
            nickName: o,
            nonce: r,
            currencyName: m,
            betAmount: c,
            winAmount: u,
            betTime: h,
            distributeId: g
        } = e;
        let f = e.odds;
        f /= this.oddsScale;
        const T = new n.Decimal(u).sub(c).toNumber();
        this.addAllBet({
            betId: i.toString(),
            nonce: r,
            nickName: o,
            userId: l,
            currencyName: m,
            betAmount: new n.Decimal(c).toNumber(),
            winAmount: new n.Decimal(u).toNumber(),
            profitAmount: T,
            odds: f,
            betTime: Number(h),
            gameValue: 0,
            distributeId: g.toString()
        })
    }
    setJackpot(e) {
        const {
            currencyName: i,
            jackpotAmount: l
        } = e, o = this.state.jackpot[i];
        o && (o.jackpotAmount = n.systemStore.bn2amount(new k(l.toNumber()), i).toNumber())
    }
    async loadMybet() {
        let e = await n.http.post("/game/bet/recent-bet", {
            gameUnique: this.gameUnique
        });
        e = e.map(i => (i.odds = i.odds / this.oddsScale, i.nickName = n.accountStore.state.name, i.betAmount = parseFloat(i.betAmount), i.winAmount = parseFloat(i.winAmount), i.gameValue = i.gv, i.profitAmount = new n.Decimal(i.winAmount).sub(i.betAmount).toNumber(), delete i.bv, delete i.gv, n.valtio.ref(i))), setTimeout(() => {
            this.state.myBets = e
        }, 0)
    }
}, Na = L.lazy(() => a(() =>
    import ("./CardAsync-e9d2ebc3.js"), ["CardAsync-e9d2ebc3.js", "vendor-8c02be2a.js", "index-66d88a57.js", "CardAsync-e30377e9.css"])), Da = N.forwardRef(function(o, l) {
    var r = o,
        {
            style: t,
            className: e = ""
        } = r,
        i = U(r, ["style", "className"]);
    return s.jsx("div", {
        className: `${e} ${xa} card-wrap`,
        ref: l,
        style: t,
        children: s.jsx(L.Suspense, {
            fallback: null,
            children: s.jsx(Na, D({}, i))
        })
    })
}), Ql = N.memo(Da), xa = "c1iple9d", wa = t => t.stopPropagation(), Tt = function({
    list: t,
    showName: e = !1,
    onClick: i,
    detail: l
}) {
    const {
        view: o,
        more: r
    } = function() {
        const [u, h] = L.useState(!1), {
            t: g
        } = n.useTranslation();
        return {
            view: L.useMemo(() => s.jsx("div", {
                className: w("show-more", Za),
                onClick: () => {
                    h(!u)
                },
                children: s.jsxs("button", {
                    children: [g(u ? "Show less" : "Show more"), " ", s.jsx(n.Icon, {
                        name: "Arrow",
                        style: {
                            transform: `rotate(${u?"-90deg":"90deg"})`
                        }
                    })]
                })
            }), [u, g]),
            more: u
        }
    }(), m = t.length, c = t.slice(0, r ? 50 : 10);
    return s.jsx(n.ErrorBoundary, {
        children: s.jsx("div", {
            className: Sa,
            children: m ? s.jsxs(s.Fragment, {
                children: [s.jsxs(n.Table, {
                    children: [s.jsx(ja, {
                        showName: e,
                        detail: l
                    }), s.jsx("tbody", {
                        children: c.map(u => s.jsx(ka, {
                            data: u,
                            showName: e,
                            onClick: i,
                            detail: l
                        }, u.betId))
                    })]
                }), m > 10 && o]
            }) : s.jsx(n.Empty, {})
        })
    })
}, ja = N.memo(function({
    showName: t
}) {
    const {
        t: e
    } = n.useTranslation(), i = n.useIsMobile();
    return s.jsx("thead", {
        children: s.jsxs("tr", {
            children: [s.jsx("th", {
                className: "num",
                children: e("Bet ID")
            }), t ? s.jsx("th", {
                className: "user",
                children: e("Player")
            }) : s.jsx("th", {
                className: "bet",
                children: e("Bet")
            }), !i && s.jsx("th", {
                className: "time",
                children: e("Time")
            }), s.jsx("th", {
                className: "payout",
                children: e("Payout")
            }), s.jsx("th", {
                className: "profit",
                children: e("Profit")
            })]
        })
    })
}), ka = N.memo(function({
    data: t,
    showName: e,
    onClick: i
}) {
    const l = n.useIsMobile();
    return s.jsxs("tr", {
        onClick: () => i(t),
        children: [s.jsx("td", {
            children: s.jsx("a", {
                className: "hash ellipsis",
                children: t.betId
            })
        }), e ? s.jsx("td", {
            children: s.jsx(n.BC.UserInfo, {
                userId: t.userId,
                name: t.nickName,
                onClick: wa,
                avatar: !1
            })
        }) : s.jsx("td", {
            className: "bet",
            children: s.jsx(n.BC.CoinFormat, {
                className: "monospace",
                name: t.currencyName,
                amount: Number(t.betAmount),
                icon: !0
            })
        }), !l && s.jsx("td", {
            children: new Date(t.betTime).toLocaleTimeString()
        }), s.jsxs("td", {
            className: "payout",
            children: [(Math.floor(100 * t.odds) / 100).toFixed(2), "×"]
        }), s.jsx("td", {
            className: "profitline " + (t.odds < 1 ? "is-lose" : "is-win"),
            children: s.jsx(n.BC.CoinFormat, {
                className: "monospace",
                name: t.currencyName,
                amount: t.profitAmount,
                icon: !0,
                sign: !0
            })
        })]
    })
}), Sa = "b1xiqa56", Za = "sbv3jh5", he = t => {
    const {
        distributeId: e
    } = t;
    return n.http.get(`/game/bet/v2/bet/${e}`)
};
async function Ba(t) {
    return await he(t) || (await n.utils.delay(3e3), he(t))
}

function Gt() {
    const t = n.useDialog();
    return e => t.push(s.jsx(Xt, {
        gameUnique: e.gameUnique,
        userId: e.userId,
        data: Ba(e)
    }))
}
const Ga = "mfr03yk";

function _e(t, e) {
    return n.http.post("/game/bet/multi/allBetByRound", {
        gameUnique: t,
        gameId: e,
        pageSize: 100,
        page: 1
    })
}
const Wa = ({
        list: t,
        gameUnique: e
    }) => {
        const {
            t: i
        } = n.useTranslation(), l = Gt();
        return s.jsx(n.ScrollView, {
            className: Xa,
            children: t != null && t.length ? s.jsx(s.Fragment, {
                children: s.jsxs("table", {
                    className: "table",
                    children: [s.jsx("thead", {
                        children: s.jsxs("tr", {
                            children: [s.jsx("th", {
                                className: "num",
                                children: i("Bet ID")
                            }), s.jsx("th", {
                                className: "user",
                                children: i("Player")
                            }), s.jsx("th", {
                                className: "payout",
                                children: i("Payout")
                            }), s.jsx("th", {
                                className: "profit",
                                children: i("Profit")
                            })]
                        })
                    }), s.jsx("tbody", {
                        children: t.map(o => s.jsxs("tr", {
                            children: [s.jsx("td", {
                                children: s.jsx("a", {
                                    className: "betid",
                                    onClick: () => l({
                                        gameUnique: e,
                                        userId: o.userId,
                                        distributeId: o.distributeId
                                    }),
                                    children: o.betId
                                })
                            }), s.jsx("td", {
                                children: s.jsx(n.BC.UserInfo, {
                                    className: "username",
                                    userId: o.userId,
                                    name: o.nickName,
                                    avatar: !1
                                })
                            }), s.jsxs("td", {
                                className: "payout",
                                children: [(Math.round(100 * o.odds) / 100).toFixed(2), "×"]
                            }), s.jsx("td", {
                                className: "ellipsis " + (o.odds < 1 ? "is-lose" : "is-win"),
                                children: s.jsx(n.BC.CoinFormat, {
                                    name: o.currencyName,
                                    amount: o.profitAmount,
                                    icon: !0,
                                    sign: !0,
                                    showName: !1
                                })
                            })]
                        }, o.betId))
                    })]
                })
            }) : s.jsx(n.Empty, {
                className: "nothing"
            })
        })
    },
    Ca = _t(({
        gameUnique: t,
        gameId: e
    }) => {
        const {
            t: i
        } = n.useTranslation(), l = n.useAsyncNode(async () => {
            const o = await async function(m, c) {
                    let u;
                    try {
                        u = await _e(m, c)
                    } catch (h) {}
                    return u || (await n.utils.delay(3e3), _e(m, c))
                }(t, e),
                r = La.formatMyBetDataFromHttp(o);
            return r.sort((m, c) => c.odds - m.odds), s.jsx(Wa, {
                list: r,
                gameUnique: t
            })
        }, [t, e]);
        return s.jsx(n.Dialog, {
            title: i("All Players"),
            children: l
        })
    }),
    Xa = "a1n8vllu",
    $l = {
        useMultipleDetail: Ct,
        useMultipleDetailNew: Gt,
        withMultipleDetail: function(t) {
            return ({
                data: e,
                userId: i,
                gameUnique: l,
                bigWin: o
            }) => {
                const {
                    t: r
                } = n.useTranslation(), [m, c] = L.useState(!1), u = e.gv.find(f => f.userId === i), h = u.bets[0], g = Z(D({}, h), {
                    gameId: u.gameId,
                    gameUnique: l,
                    userId: i,
                    userName: u.userName,
                    betTime: h.time,
                    bigWin: o
                });
                return s.jsx(n.ScrollView, {
                    className: dl,
                    children: s.jsx(Wt, Z(D({}, g), {
                        children: s.jsxs("div", {
                            className: "toggle-wrap",
                            children: [s.jsxs("div", {
                                className: w("tw-title", m && "show"),
                                onClick: () => c(!m),
                                children: [s.jsx("p", {
                                    children: r("Game Details")
                                }), s.jsx(n.Icon, {
                                    name: "Arrow"
                                })]
                            }), s.jsx(n.ToggleView, {
                                visible: m,
                                children: N.createElement(t, Z(D({}, e), {
                                    gameUnique: l
                                }))
                            })]
                        })
                    }))
                })
            }
        },
        withMultipleDetailNew: function(t) {
            return ({
                data: e,
                userId: i,
                gameUnique: l,
                bigWin: o
            }) => {
                const {
                    betLog: r,
                    nickName: m
                } = e, {
                    t: c
                } = n.useTranslation(), [u, h] = L.useState(!1), g = Z(D({}, r), {
                    gameId: r.gameId,
                    gameUnique: l,
                    userId: i,
                    userName: m,
                    betTime: r.betTime,
                    bigWin: o
                });
                return s.jsx(n.ScrollView, {
                    className: Ga,
                    children: s.jsx(Wt, Z(D({}, g), {
                        children: s.jsxs("div", {
                            className: "toggle-wrap",
                            children: [s.jsxs("div", {
                                className: w("tw-title", u && "show"),
                                onClick: () => h(!u),
                                children: [s.jsx("p", {
                                    children: c("Game Details")
                                }), s.jsx(n.Icon, {
                                    name: "Arrow"
                                })]
                            }), s.jsx(n.ToggleView, {
                                visible: u,
                                children: N.createElement(t, Z(D({}, e), {
                                    gameUnique: l
                                }))
                            })]
                        })
                    }))
                })
            }
        },
        openAllPlayers: We,
        openAllPlayersNew: function(t) {
            n.dialog.push(s.jsx(Ca, D({}, t)))
        },
        Mybet: () => {
            const t = K(),
                e = H(),
                i = Ct();
            return s.jsx(Tt, {
                list: e.myBets,
                onClick: function(l) {
                    i({
                        gameUnique: t.gameUnique,
                        gameId: l.gameId,
                        betId: l.betId,
                        userId: l.userId
                    })
                }
            })
        },
        MybetNew: () => {
            const t = H(),
                e = Gt(),
                i = Te();
            return s.jsx(Tt, {
                list: t.myBets.map(l => l),
                onClick: function(l) {
                    e({
                        gameUnique: i,
                        userId: l.userId,
                        distributeId: l.distributeId
                    })
                }
            })
        }
    };
var pe, ge = {
    exports: {}
};

function Be() {
    return pe ? ge.exports : (pe = 1, ge.exports = (t = bt(), function(e) {
        var i = t,
            l = i.lib,
            o = l.WordArray,
            r = l.Hasher,
            m = i.algo,
            c = [],
            u = [];
        (function() {
            function f(V) {
                for (var d = e.sqrt(V), I = 2; I <= d; I++)
                    if (!(V % I)) return !1;
                return !0
            }

            function T(V) {
                return 4294967296 * (V - (0 | V)) | 0
            }
            for (var y = 2, P = 0; P < 64;) f(y) && (P < 8 && (c[P] = T(e.pow(y, .5))), u[P] = T(e.pow(y, 1 / 3)), P++), y++
        })();
        var h = [],
            g = m.SHA256 = r.extend({
                _doReset: function() {
                    this._hash = new o.init(c.slice(0))
                },
                _doProcessBlock: function(f, T) {
                    for (var y = this._hash.words, P = y[0], V = y[1], d = y[2], I = y[3], R = y[4], _ = y[5], b = y[6], v = y[7], A = 0; A < 64; A++) {
                        if (A < 16) h[A] = 0 | f[T + A];
                        else {
                            var O = h[A - 15],
                                j = (O << 25 | O >>> 7) ^ (O << 14 | O >>> 18) ^ O >>> 3,
                                B = h[A - 2],
                                J = (B << 15 | B >>> 17) ^ (B << 13 | B >>> 19) ^ B >>> 10;
                            h[A] = j + h[A - 7] + J + h[A - 16]
                        }
                        var lt = P & V ^ P & d ^ V & d,
                            Q = (P << 30 | P >>> 2) ^ (P << 19 | P >>> 13) ^ (P << 10 | P >>> 22),
                            $ = v + ((R << 26 | R >>> 6) ^ (R << 21 | R >>> 11) ^ (R << 7 | R >>> 25)) + (R & _ ^ ~R & b) + u[A] + h[A];
                        v = b, b = _, _ = R, R = I + $ | 0, I = d, d = V, V = P, P = $ + (Q + lt) | 0
                    }
                    y[0] = y[0] + P | 0, y[1] = y[1] + V | 0, y[2] = y[2] + d | 0, y[3] = y[3] + I | 0, y[4] = y[4] + R | 0, y[5] = y[5] + _ | 0, y[6] = y[6] + b | 0, y[7] = y[7] + v | 0
                },
                _doFinalize: function() {
                    var f = this._data,
                        T = f.words,
                        y = 8 * this._nDataBytes,
                        P = 8 * f.sigBytes;
                    return T[P >>> 5] |= 128 << 24 - P % 32, T[14 + (P + 64 >>> 9 << 4)] = e.floor(y / 4294967296), T[15 + (P + 64 >>> 9 << 4)] = y, f.sigBytes = 4 * T.length, this._process(), this._hash
                },
                clone: function() {
                    var f = r.clone.call(this);
                    return f._hash = this._hash.clone(), f
                }
            });
        i.SHA256 = r._createHelper(g), i.HmacSHA256 = r._createHmacHelper(g)
    }(Math), t.SHA256));
    var t
}
const Ma = ht(Be());
var fe, Ee, Ua = {
        exports: {}
    },
    be = {
        exports: {}
    };

function Ha() {
    return fe ? be.exports : (fe = 1, be.exports = (t = bt(), i = (e = t).lib.Base, l = e.enc.Utf8, void(e.algo.HMAC = i.extend({
        init: function(o, r) {
            o = this._hasher = new o.init, typeof r == "string" && (r = l.parse(r));
            var m = o.blockSize,
                c = 4 * m;
            r.sigBytes > c && (r = o.finalize(r)), r.clamp();
            for (var u = this._oKey = r.clone(), h = this._iKey = r.clone(), g = u.words, f = h.words, T = 0; T < m; T++) g[T] ^= 1549556828, f[T] ^= 909522486;
            u.sigBytes = h.sigBytes = c, this.reset()
        },
        reset: function() {
            var o = this._hasher;
            o.reset(), o.update(this._iKey)
        },
        update: function(o) {
            return this._hasher.update(o), this
        },
        finalize: function(o) {
            var r = this._hasher,
                m = r.finalize(o);
            return r.reset(), r.finalize(this._oKey.clone().concat(m))
        }
    }))));
    var t, e, i, l
}
const Ka = ht(Ua.exports = (Ee = bt(), Be(), Ha(), Ee.HmacSHA256)),
    Ja = function({
        nums: t,
        modulus: e
    }) {
        const i = t.map((o, r) => o / Math.pow(256, r + 1)),
            l = i.reduce((o, r) => o + r, 0);
        return s.jsx("table", {
            className: za,
            children: s.jsxs("tbody", {
                children: [s.jsx("tr", {
                    children: s.jsxs("td", {
                        colSpan: 3,
                        children: [s.jsx("span", {
                            children: "("
                        }), s.jsx("span", {
                            className: "cl-primary",
                            children: t.join(", ")
                        }), s.jsx("span", {
                            children: `) => [0, ..., ${e})`
                        }), s.jsx("br", {}), s.jsx("span", {
                            children: "= "
                        }), s.jsx("span", {
                            className: "cl-primary",
                            children: e == 1 ? l.toFixed(9) : Math.floor(l * e)
                        })]
                    })
                }), t.map((o, r) => s.jsxs("tr", {
                    children: [s.jsx("td", {
                        children: r != 0 && s.jsx("span", {
                            children: "+"
                        })
                    }), s.jsx("td", {
                        children: i[r].toFixed(9)
                    }), s.jsx("td", {
                        children: `(${Ya(o)} / (256^${r+1}))`
                    })]
                }, r)), s.jsxs("tr", {
                    children: [s.jsx("td", {
                        children: "="
                    }), s.jsx("td", {
                        children: l.toFixed(9)
                    })]
                }), e != 1 && s.jsxs(s.Fragment, {
                    children: [s.jsxs("tr", {
                        children: [s.jsx("td", {
                            children: "*"
                        }), s.jsx("td", {
                            className: "cl-primary",
                            children: e
                        })]
                    }), s.jsxs("tr", {
                        children: [s.jsx("td", {
                            children: "="
                        }), s.jsx("td", {
                            className: "cl-primary",
                            children: (l * e).toFixed(9)
                        })]
                    })]
                })]
            })
        })
    };

function Ya(t) {
    return t > 99 ? `${t}` : `0${t}`
}
const za = "blpg7v2",
    Ie = function(t) {
        const {
            hash: e,
            modulusList: i,
            len: l = 4
        } = t, o = function(r) {
            let m = {
                dec: [],
                hex: []
            };
            for (let c = 0; c < r.length; c += 2) {
                let u = r[c] + r[c + 1],
                    h = parseInt(u, 16);
                m.dec.push(h), m.hex.push(u)
            }
            return m
        }(e);
        return s.jsxs(s.Fragment, {
            children: [s.jsx("h3", {
                children: "Bytes"
            }), s.jsx("div", {
                className: ve,
                children: s.jsx("table", {
                    className: "byte-table",
                    children: s.jsxs("tbody", {
                        children: [s.jsx("tr", {
                            children: o.hex.map((r, m) => s.jsx("td", {
                                children: r
                            }, m))
                        }), s.jsx("tr", {
                            children: o.dec.map((r, m) => s.jsx("td", {
                                children: r
                            }, m))
                        })]
                    })
                })
            }), s.jsx("h3", {
                children: "Bytes to Number"
            }), s.jsx("div", {
                className: ve,
                children: s.jsx("div", {
                    className: "flex",
                    children: i.map((r, m) => s.jsx(Ja, {
                        nums: o.dec.slice(m * l, (m + 1) * l),
                        modulus: r
                    }, m))
                })
            })]
        })
    },
    ve = "s1954252",
    Fa = "v15t5eur",
    ts = {
        MyBetNew: function({
            detail: t
        }) {
            const e = H(),
                i = wt(),
                l = L.useCallback(o => {
                    i(o)
                }, []);
            return s.jsx(Tt, {
                list: e.myBets,
                onClick: l,
                detail: t
            })
        },
        AllBetNew: function({
            detail: t
        }) {
            const e = H(),
                i = wt(),
                l = L.useCallback(o => {
                    i(o)
                }, []);
            return s.jsx(Tt, {
                list: e.allBets,
                onClick: l,
                detail: t,
                showName: !0
            })
        },
        GameValidate: function(t) {
            const {
                t: e
            } = n.useTranslation(), {
                modulusList: i = [],
                hasRound: l = !1
            } = t, [o] = Ke.useSearchParams(), [r, m] = L.useState(o.get("serverSeed") || ""), [c, u] = L.useState(o.get("clientSeed") || ""), [h, g] = L.useState(parseInt(o.get("nonce") || "0")), [f, T] = L.useState(parseInt(o.get("round") || "0")), y = String(Ma(r)), P = [c, h];
            l && P.push(f);
            const V = String(Ka(P.join(":"), r));
            return s.jsxs(n.ScrollView, {
                className: Fa,
                children: [s.jsx("h2", {
                    children: e("Input")
                }), s.jsx(n.Input, {
                    label: e("Server Seed"),
                    value: r,
                    onChange: d => m(d)
                }), s.jsx(n.Input, {
                    label: e("Client Seed"),
                    value: c,
                    onChange: d => u(d)
                }), s.jsx(n.Input, {
                    label: e("Nonce"),
                    value: h,
                    onChange: d => g(Number(d))
                }), l && s.jsx(n.Input, {
                    label: e("Round"),
                    value: f,
                    onChange: d => T(Number(d))
                }), s.jsx("h2", {
                    children: e("Output")
                }), s.jsx(n.Input, {
                    label: "Sha256(server_seed)",
                    value: y,
                    readOnly: !0
                }), s.jsx(n.Input, {
                    label: `HMAC_Sha256(client_seed:nonce${l?":round":""}, server_seed)`,
                    value: V,
                    readOnly: !0
                }), !t.hideHashTable && s.jsx(Ie, {
                    hash: V,
                    modulusList: i
                }), t.children && t.children(V)]
            })
        },
        HashTable: Ie,
        useSingleDetailNew: wt,
        withSingleDetailNew: ga
    },
    Ge = t => n.http.get(`/game/support/share-v3/create/${t.gameUnique}/${t.betLog.distributeId}/`),
    qa = Pt.throttle(() => n.notify("Maximum 50 Characters."), 2e3),
    Qa = _t(function(t) {
        var P;
        const {
            t: e
        } = n.useTranslation(), i = n.useMountedState(), [l, o] = L.useState(!0), [r, m] = L.useState({}), [c, u] = L.useState(""), [h, g] = L.useState(!0), f = L.useRef(), T = L.useRef("");

        function y(V) {
            const d = t.betLog,
                I = new n.Decimal(d.winAmount).sub(d.betAmount).toNumber();
            n.app.emit("track", "share_bet_result", {
                game_name: String(t.gameUnique || r.fullName),
                game_id: String(d.gameId || d.betId),
                bet_id: String(d.betId),
                coin_type: d.currencyName,
                amount: String(d.betAmount),
                amount_fiat: "",
                profit: String(I),
                profit_fiat: "",
                odds: d.odds / 1e4,
                share_methods: V
            })
        }
        return L.useEffect(() => {
            let V = !0;
            return Ge(t).then(d => {
                if (d) {
                    let I = "";
                    I = d.odds >= 1e4 ? e("I'm lucky today!") : e("Not my day..."), V && (T.current = I, m(d), f.current && typeof f.current.focus == "function" && f.current.focus())
                } else n.pop.back()
            }).catch(d => {
                n.notify(d), n.pop.back()
            }), () => {
                V = !1
            }
        }, []), s.jsxs(n.ScrollView, {
            className: $a,
            children: [s.jsx(n.CloseIcon, {
                onClick: () => n.pop.back()
            }), r.betId ? s.jsxs(s.Fragment, {
                children: [s.jsx(Je, {
                    betLog: Z(D({}, t.betLog), {
                        originBetId: t.betLog.betId,
                        betId: r.betId
                    }),
                    gameType: t.third ? 3 : 1,
                    gameUnique: t.gameUnique,
                    fullName: r.fullName
                }), s.jsx("div", {
                    className: "input-wrap" + (l ? " focus" : ""),
                    children: s.jsx("input", {
                        ref: f,
                        className: "share-input",
                        value: c,
                        placeholder: T.current,
                        disabled: !0,
                        onFocus: () => o(!0),
                        onBlur: () => o(!1),
                        onChange: V => {
                            V.target.value.length < 50 || qa(), u(V.target.value.slice(0, 50))
                        }
                    })
                }), s.jsxs("div", {
                    className: "share-ant-copy",
                    children: [s.jsxs(n.Button, {
                        type: "conic",
                        className: "share-chat",
                        onClick: () => {
                            h && (g(!1), n.app.emit("getPublicChatRoomId", V => {
                                ((d, I, R, _) => n.http.post(`/game/support/share-v3/share/sendChat/${d}/`, {
                                    roomId: R,
                                    shareContent: I
                                }))(r.betId, T.current, V, t.single).then(() => {
                                    n.notify(e("Successfully shared")), n.pop.back()
                                }).catch(d => {
                                    n.notify(d), n.pop.back()
                                })
                            }), setTimeout(() => {
                                i() && g(!0)
                            }, 5e3)), y("chatroom")
                        },
                        children: [s.jsx(n.Icon, {
                            name: "Share"
                        }), e("Share to Chatroom")]
                    }), s.jsxs(n.Button, {
                        type: "gray",
                        className: "copy-link",
                        onClick: () => {
                            if (r.betId) try {
                                const V = `${location.protocol}//${n.env.host}/#/sd/${r.betId}`;
                                n.utils.copyToClipboard(V), n.notify(e("Copied"))
                            } catch (V) {}
                        },
                        children: [s.jsx(n.Icon, {
                            name: "Link"
                        }), s.jsx("p", {
                            children: e("Copy link")
                        })]
                    })]
                }), s.jsx("div", {
                    className: "share-bottom",
                    children: s.jsx("div", {
                        className: "word",
                        children: e("Share on social media")
                    })
                }), s.jsx(Ye, {
                    isWin: t.betLog.odds >= 1e4,
                    shareId: r.betId,
                    shortUrl: r.shortUrl,
                    shareObj: {
                        betId: t.betLog.betId.toString(),
                        gameUnique: t.gameUnique,
                        userId: t.betLog.userId.toString(),
                        userName: t.betLog.userName,
                        isSingle: t.single,
                        gameId: ((P = t.betLog.gameId) == null ? void 0 : P.toString()) || ""
                    },
                    onShare: V => y(V)
                })]
            }) : s.jsx(n.Loading, {})]
        })
    }),
    $a = "gv68gdz",
    tl = _t(function(t) {
        const {
            t: e
        } = n.useTranslation(), i = t.betLog.odds >= 1e4, [l, o] = n.useSetState({
            shareData: {},
            loading: !0
        });
        L.useEffect(() => {
            let m = !0;
            return Ge(t).then(c => {
                c && m && o({
                    shareData: c,
                    loading: !1
                })
            }).catch(c => {
                n.notify(c), n.pop.back()
            }), () => {
                m = !1
            }
        }, []);
        const r = l.shareData.fullName;
        return s.jsxs("div", {
            className: il,
            children: [s.jsx(n.CloseIcon, {
                onClick: () => n.pop.back()
            }), l.loading ? s.jsx(n.Loading, {}) : s.jsxs(s.Fragment, {
                children: [s.jsxs("div", {
                    className: "titles",
                    children: [i ? s.jsx(ze, {
                        show: !0
                    }) : s.jsx(Fe, {}), s.jsxs("div", {
                        className: "word",
                        children: [i ? s.jsx("p", {
                            className: "one",
                            children: e("Winning tastes sweet!")
                        }) : s.jsx("p", {
                            className: "one",
                            children: e("{{mascot}} took it all! 🥺", {
                                mascot: n.env.mascot
                            })
                        }), s.jsx("p", {
                            className: "two",
                            children: e(i ? "{{showName}} Wow Moment" : "{{showName}} Damn Moment", {
                                showName: r
                            })
                        })]
                    })]
                }), s.jsxs("div", {
                    className: "share-wrap",
                    children: [s.jsx("p", {
                        className: "s-t",
                        children: e("Share on social media")
                    }), s.jsx(n.WithOutSsr, {
                        children: s.jsx(el, {
                            betId: l.shareData.betId
                        })
                    })]
                }), s.jsx(n.Button, {
                    className: "copybtn",
                    onClick: () => {
                        try {
                            const m = `${location.protocol}//${n.env.host}/#/sd/${l.shareData.betId}`;
                            n.utils.copyToClipboard(m), n.notify(e("Copied"))
                        } catch (m) {}
                    },
                    children: e("Copy link")
                })]
            })]
        })
    }),
    el = N.memo(function({
        betId: t
    }) {
        const e = `${location.protocol}//${n.env.host}/#/sd/${t}`,
            {
                data: i
            } = n.useAsync(() => n.BC.getShareLinks({
                title: n.env.host,
                content: "Hey buddy, you really should check this bet slip.",
                shareUrl: e,
                isGame: !1
            }));
        return i ? s.jsx("div", {
            className: "share-imgs-wrap",
            children: i.map((l, o) => l.url ? s.jsx("a", {
                href: l.url,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "share-item enabled",
                children: s.jsx("img", {
                    className: "icon",
                    src: l.icon
                })
            }, o) : null)
        }) : null
    }),
    il = "o4rel1p",
    al = function(t) {
        const e = n.useAccount();
        return e.login ? s.jsx(n.Tooltip, {
            title: "Share",
            children: s.jsx("div", {
                className: `${ll} game-share`,
                onClick: () => {
                    e.userId === t.betLog.userId ? n.pop.push(s.jsx(Qa, D({}, t)), {
                        closeable: !1
                    }) : n.pop.push(s.jsx(tl, D({}, t)), {
                        closeable: !1
                    })
                },
                children: s.jsx(n.Icon, {
                    name: "Share"
                })
            })
        }) : null
    },
    ll = "sr5hx5a",
    ye = Object.assign({
        "../../../locales/ar-SA/game/beauties.html": () => a(() =>
            import ("./beauties-2a0e5140.js"), []).then(t => t.default),
        "../../../locales/ar-SA/game/blackjack.html": () => a(() =>
            import ("./blackjack-eba68f91.js"), []).then(t => t.default),
        "../../../locales/ar-SA/game/cave.html": () => a(() =>
            import ("./cave-ee94e132.js"), []).then(t => t.default),
        "../../../locales/ar-SA/game/classicdice.html": () => a(() =>
            import ("./classicdice-aa16ec3b.js"), []).then(t => t.default),
        "../../../locales/ar-SA/game/coinflip.html": () => a(() =>
            import ("./coinflip-eeda59f1.js"), []).then(t => t.default),
        "../../../locales/ar-SA/game/crash.html": () => a(() =>
            import ("./crash-fbd1d6f2.js"), []).then(t => t.default),
        "../../../locales/ar-SA/game/egyptian.html": () => a(() =>
            import ("./egyptian-dae03a80.js"), []).then(t => t.default),
        "../../../locales/ar-SA/game/general.html": () => a(() =>
            import ("./general-9419f666.js"), []).then(t => t.default),
        "../../../locales/ar-SA/game/hashdice.html": () => a(() =>
            import ("./hashdice-241b4d19.js"), []).then(t => t.default),
        "../../../locales/ar-SA/game/hilo.html": () => a(() =>
            import ("./hilo-a28b0519.js"), []).then(t => t.default),
        "../../../locales/ar-SA/game/kemomultiplayer.html": () => a(() =>
            import ("./kemomultiplayer-6d6dd624.js"), []).then(t => t.default),
        "../../../locales/ar-SA/game/limbo.html": () => a(() =>
            import ("./limbo-0ae68b03.js"), []).then(t => t.default),
        "../../../locales/ar-SA/game/mines.html": () => a(() =>
            import ("./mines-313f1311.js"), []).then(t => t.default),
        "../../../locales/ar-SA/game/plinko.html": () => a(() =>
            import ("./plinko-dd58b3ed.js"), []).then(t => t.default),
        "../../../locales/ar-SA/game/roulettemultiplayer.html": () => a(() =>
            import ("./roulettemultiplayer-9f843ff4.js"), []).then(t => t.default),
        "../../../locales/ar-SA/game/roulettesingle.html": () => a(() =>
            import ("./roulettesingle-f3206f48.js"), []).then(t => t.default),
        "../../../locales/ar-SA/game/sword.html": () => a(() =>
            import ("./sword-06a8ce73.js"), []).then(t => t.default),
        "../../../locales/ar-SA/game/tower.html": () => a(() =>
            import ("./tower-1470d75b.js"), []).then(t => t.default),
        "../../../locales/ar-SA/game/ultimatedice.html": () => a(() =>
            import ("./ultimatedice-8b11cf0f.js"), []).then(t => t.default),
        "../../../locales/ar-SA/game/videopoker.html": () => a(() =>
            import ("./videopoker-1384c53c.js"), []).then(t => t.default),
        "../../../locales/ar-SA/game/wheel.html": () => a(() =>
            import ("./wheel-da6c5cf6.js"), []).then(t => t.default),
        "../../../locales/bn-BD/game/beauties.html": () => a(() =>
            import ("./beauties-21228d99.js"), []).then(t => t.default),
        "../../../locales/bn-BD/game/blackjack.html": () => a(() =>
            import ("./blackjack-90824ed9.js"), []).then(t => t.default),
        "../../../locales/bn-BD/game/cave.html": () => a(() =>
            import ("./cave-90162869.js"), []).then(t => t.default),
        "../../../locales/bn-BD/game/classicdice.html": () => a(() =>
            import ("./classicdice-0ecc5e96.js"), []).then(t => t.default),
        "../../../locales/bn-BD/game/coinflip.html": () => a(() =>
            import ("./coinflip-f6566018.js"), []).then(t => t.default),
        "../../../locales/bn-BD/game/crash.html": () => a(() =>
            import ("./crash-2ef2331e.js"), []).then(t => t.default),
        "../../../locales/bn-BD/game/egyptian.html": () => a(() =>
            import ("./egyptian-073ef8f2.js"), []).then(t => t.default),
        "../../../locales/bn-BD/game/general.html": () => a(() =>
            import ("./general-f087ea3d.js"), []).then(t => t.default),
        "../../../locales/bn-BD/game/hashdice.html": () => a(() =>
            import ("./hashdice-458a76a3.js"), []).then(t => t.default),
        "../../../locales/bn-BD/game/hilo.html": () => a(() =>
            import ("./hilo-8fd97cf4.js"), []).then(t => t.default),
        "../../../locales/bn-BD/game/kemomultiplayer.html": () => a(() =>
            import ("./kemomultiplayer-c6547968.js"), []).then(t => t.default),
        "../../../locales/bn-BD/game/limbo.html": () => a(() =>
            import ("./limbo-ee48b76b.js"), []).then(t => t.default),
        "../../../locales/bn-BD/game/mines.html": () => a(() =>
            import ("./mines-05fccb40.js"), []).then(t => t.default),
        "../../../locales/bn-BD/game/plinko.html": () => a(() =>
            import ("./plinko-466dfce4.js"), []).then(t => t.default),
        "../../../locales/bn-BD/game/roulettemultiplayer.html": () => a(() =>
            import ("./roulettemultiplayer-ef04128b.js"), []).then(t => t.default),
        "../../../locales/bn-BD/game/roulettesingle.html": () => a(() =>
            import ("./roulettesingle-e6ee7bfa.js"), []).then(t => t.default),
        "../../../locales/bn-BD/game/sword.html": () => a(() =>
            import ("./sword-da32288b.js"), []).then(t => t.default),
        "../../../locales/bn-BD/game/tower.html": () => a(() =>
            import ("./tower-57dc665f.js"), []).then(t => t.default),
        "../../../locales/bn-BD/game/ultimatedice.html": () => a(() =>
            import ("./ultimatedice-832625a7.js"), []).then(t => t.default),
        "../../../locales/bn-BD/game/videopoker.html": () => a(() =>
            import ("./videopoker-b058f55d.js"), []).then(t => t.default),
        "../../../locales/bn-BD/game/wheel.html": () => a(() =>
            import ("./wheel-194a7d4f.js"), []).then(t => t.default),
        "../../../locales/de-DE/game/beauties.html": () => a(() =>
            import ("./beauties-56737854.js"), []).then(t => t.default),
        "../../../locales/de-DE/game/blackjack.html": () => a(() =>
            import ("./blackjack-74e923ca.js"), []).then(t => t.default),
        "../../../locales/de-DE/game/cave.html": () => a(() =>
            import ("./cave-378af31a.js"), []).then(t => t.default),
        "../../../locales/de-DE/game/classicdice.html": () => a(() =>
            import ("./classicdice-eb3553ef.js"), []).then(t => t.default),
        "../../../locales/de-DE/game/coinflip.html": () => a(() =>
            import ("./coinflip-f2266aee.js"), []).then(t => t.default),
        "../../../locales/de-DE/game/crash.html": () => a(() =>
            import ("./crash-09e45c8f.js"), []).then(t => t.default),
        "../../../locales/de-DE/game/egyptian.html": () => a(() =>
            import ("./egyptian-99b7c2ff.js"), []).then(t => t.default),
        "../../../locales/de-DE/game/general.html": () => a(() =>
            import ("./general-df878fc0.js"), []).then(t => t.default),
        "../../../locales/de-DE/game/hashdice.html": () => a(() =>
            import ("./hashdice-d7ea8125.js"), []).then(t => t.default),
        "../../../locales/de-DE/game/hilo.html": () => a(() =>
            import ("./hilo-7d59d2f9.js"), []).then(t => t.default),
        "../../../locales/de-DE/game/kemomultiplayer.html": () => a(() =>
            import ("./kemomultiplayer-7a8f1f47.js"), []).then(t => t.default),
        "../../../locales/de-DE/game/limbo.html": () => a(() =>
            import ("./limbo-78a469d0.js"), []).then(t => t.default),
        "../../../locales/de-DE/game/mines.html": () => a(() =>
            import ("./mines-e39334d0.js"), []).then(t => t.default),
        "../../../locales/de-DE/game/plinko.html": () => a(() =>
            import ("./plinko-53462240.js"), []).then(t => t.default),
        "../../../locales/de-DE/game/roulettemultiplayer.html": () => a(() =>
            import ("./roulettemultiplayer-d9229348.js"), []).then(t => t.default),
        "../../../locales/de-DE/game/roulettesingle.html": () => a(() =>
            import ("./roulettesingle-c2723226.js"), []).then(t => t.default),
        "../../../locales/de-DE/game/sword.html": () => a(() =>
            import ("./sword-4b43878d.js"), []).then(t => t.default),
        "../../../locales/de-DE/game/tower.html": () => a(() =>
            import ("./tower-3b040842.js"), []).then(t => t.default),
        "../../../locales/de-DE/game/ultimatedice.html": () => a(() =>
            import ("./ultimatedice-b03ed5aa.js"), []).then(t => t.default),
        "../../../locales/de-DE/game/videopoker.html": () => a(() =>
            import ("./videopoker-0a407ff4.js"), []).then(t => t.default),
        "../../../locales/de-DE/game/wheel.html": () => a(() =>
            import ("./wheel-a5a5d2bb.js"), []).then(t => t.default),
        "../../../locales/en-IN/game/beauties.html": () => a(() =>
            import ("./beauties-564a074f.js"), []).then(t => t.default),
        "../../../locales/en-IN/game/blackjack.html": () => a(() =>
            import ("./blackjack-70ae5be5.js"), []).then(t => t.default),
        "../../../locales/en-IN/game/cave.html": () => a(() =>
            import ("./cave-25c99bf0.js"), []).then(t => t.default),
        "../../../locales/en-IN/game/classicdice.html": () => a(() =>
            import ("./classicdice-dd75f1d0.js"), []).then(t => t.default),
        "../../../locales/en-IN/game/coinflip.html": () => a(() =>
            import ("./coinflip-f734aa1c.js"), []).then(t => t.default),
        "../../../locales/en-IN/game/crash.html": () => a(() =>
            import ("./crash-19d67588.js"), []).then(t => t.default),
        "../../../locales/en-IN/game/double.html": () => a(() =>
            import ("./double-40dd0e25.js"), []).then(t => t.default),
        "../../../locales/en-IN/game/egyptian.html": () => a(() =>
            import ("./egyptian-f21b0b5c.js"), []).then(t => t.default),
        "../../../locales/en-IN/game/general.html": () => a(() =>
            import ("./general-aedc10a5.js"), []).then(t => t.default),
        "../../../locales/en-IN/game/hashdice.html": () => a(() =>
            import ("./hashdice-95080306.js"), []).then(t => t.default),
        "../../../locales/en-IN/game/hilo.html": () => a(() =>
            import ("./hilo-31d3c712.js"), []).then(t => t.default),
        "../../../locales/en-IN/game/kemomultiplayer.html": () => a(() =>
            import ("./kemomultiplayer-e47542f1.js"), []).then(t => t.default),
        "../../../locales/en-IN/game/limbo.html": () => a(() =>
            import ("./limbo-5b700e47.js"), []).then(t => t.default),
        "../../../locales/en-IN/game/mines.html": () => a(() =>
            import ("./mines-f9ed23fc.js"), []).then(t => t.default),
        "../../../locales/en-IN/game/parity.html": () => a(() =>
            import ("./parity-96b78dfc.js"), []).then(t => t.default),
        "../../../locales/en-IN/game/plinko.html": () => a(() =>
            import ("./plinko-cbdd7839.js"), []).then(t => t.default),
        "../../../locales/en-IN/game/roulettemultiplayer.html": () => a(() =>
            import ("./roulettemultiplayer-22fbe159.js"), []).then(t => t.default),
        "../../../locales/en-IN/game/roulettesingle.html": () => a(() =>
            import ("./roulettesingle-48dcadd1.js"), []).then(t => t.default),
        "../../../locales/en-IN/game/sword.html": () => a(() =>
            import ("./sword-f55afd71.js"), []).then(t => t.default),
        "../../../locales/en-IN/game/tower.html": () => a(() =>
            import ("./tower-0423d69a.js"), []).then(t => t.default),
        "../../../locales/en-IN/game/twist.html": () => a(() =>
            import ("./twist-44c8e84d.js"), []).then(t => t.default),
        "../../../locales/en-IN/game/ultimatedice.html": () => a(() =>
            import ("./ultimatedice-0a903664.js"), []).then(t => t.default),
        "../../../locales/en-IN/game/videopoker.html": () => a(() =>
            import ("./videopoker-99411b60.js"), []).then(t => t.default),
        "../../../locales/en-IN/game/wheel.html": () => a(() =>
            import ("./wheel-f454214c.js"), []).then(t => t.default),
        "../../../locales/en-US/game/beauties.html": () => a(() =>
            import ("./beauties-e7e772f5.js"), []).then(t => t.default),
        "../../../locales/en-US/game/blackjack.html": () => a(() =>
            import ("./blackjack-b699a277.js"), []).then(t => t.default),
        "../../../locales/en-US/game/cave.html": () => a(() =>
            import ("./cave-39f9deb2.js"), []).then(t => t.default),
        "../../../locales/en-US/game/classicdice.html": () => a(() =>
            import ("./classicdice-115b78f0.js"), []).then(t => t.default),
        "../../../locales/en-US/game/coinflip.html": () => a(() =>
            import ("./coinflip-40a668d6.js"), []).then(t => t.default),
        "../../../locales/en-US/game/crash.html": () => a(() =>
            import ("./crash-7c26b67d.js"), []).then(t => t.default),
        "../../../locales/en-US/game/double.html": () => a(() =>
            import ("./double-14e57e07.js"), []).then(t => t.default),
        "../../../locales/en-US/game/egyptian.html": () => a(() =>
            import ("./egyptian-55ec6c97.js"), []).then(t => t.default),
        "../../../locales/en-US/game/general.html": () => a(() =>
            import ("./general-082d0379.js"), []).then(t => t.default),
        "../../../locales/en-US/game/hashdice.html": () => a(() =>
            import ("./hashdice-b3d34c2e.js"), []).then(t => t.default),
        "../../../locales/en-US/game/hilo.html": () => a(() =>
            import ("./hilo-1035c22f.js"), []).then(t => t.default),
        "../../../locales/en-US/game/kemomultiplayer.html": () => a(() =>
            import ("./kemomultiplayer-2fe2c05e.js"), []).then(t => t.default),
        "../../../locales/en-US/game/limbo.html": () => a(() =>
            import ("./limbo-f887ec78.js"), []).then(t => t.default),
        "../../../locales/en-US/game/mines.html": () => a(() =>
            import ("./mines-e667f929.js"), []).then(t => t.default),
        "../../../locales/en-US/game/parity.html": () => a(() =>
            import ("./parity-4067f6b7.js"), []).then(t => t.default),
        "../../../locales/en-US/game/plinko.html": () => a(() =>
            import ("./plinko-1ab92cda.js"), []).then(t => t.default),
        "../../../locales/en-US/game/roulettemultiplayer.html": () => a(() =>
            import ("./roulettemultiplayer-d6af4f10.js"), []).then(t => t.default),
        "../../../locales/en-US/game/roulettesingle.html": () => a(() =>
            import ("./roulettesingle-027d3138.js"), []).then(t => t.default),
        "../../../locales/en-US/game/sword.html": () => a(() =>
            import ("./sword-92fd26db.js"), []).then(t => t.default),
        "../../../locales/en-US/game/tower.html": () => a(() =>
            import ("./tower-244a6e8f.js"), []).then(t => t.default),
        "../../../locales/en-US/game/twist.html": () => a(() =>
            import ("./twist-22009383.js"), []).then(t => t.default),
        "../../../locales/en-US/game/ultimatedice.html": () => a(() =>
            import ("./ultimatedice-9c59fea9.js"), []).then(t => t.default),
        "../../../locales/en-US/game/videopoker.html": () => a(() =>
            import ("./videopoker-8b82510f.js"), []).then(t => t.default),
        "../../../locales/en-US/game/wheel.html": () => a(() =>
            import ("./wheel-58b37a12.js"), []).then(t => t.default),
        "../../../locales/es-ES/game/beauties.html": () => a(() =>
            import ("./beauties-ec06062f.js"), []).then(t => t.default),
        "../../../locales/es-ES/game/blackjack.html": () => a(() =>
            import ("./blackjack-daa163f5.js"), []).then(t => t.default),
        "../../../locales/es-ES/game/cave.html": () => a(() =>
            import ("./cave-ce8b3039.js"), []).then(t => t.default),
        "../../../locales/es-ES/game/classicdice.html": () => a(() =>
            import ("./classicdice-cf133c1d.js"), []).then(t => t.default),
        "../../../locales/es-ES/game/coinflip.html": () => a(() =>
            import ("./coinflip-8b01df56.js"), []).then(t => t.default),
        "../../../locales/es-ES/game/crash.html": () => a(() =>
            import ("./crash-bade816f.js"), []).then(t => t.default),
        "../../../locales/es-ES/game/egyptian.html": () => a(() =>
            import ("./egyptian-cb0cbab5.js"), []).then(t => t.default),
        "../../../locales/es-ES/game/general.html": () => a(() =>
            import ("./general-674d45a8.js"), []).then(t => t.default),
        "../../../locales/es-ES/game/hashdice.html": () => a(() =>
            import ("./hashdice-ba06759b.js"), []).then(t => t.default),
        "../../../locales/es-ES/game/hilo.html": () => a(() =>
            import ("./hilo-66a169fa.js"), []).then(t => t.default),
        "../../../locales/es-ES/game/kemomultiplayer.html": () => a(() =>
            import ("./kemomultiplayer-c93a4cd4.js"), []).then(t => t.default),
        "../../../locales/es-ES/game/limbo.html": () => a(() =>
            import ("./limbo-11c94d53.js"), []).then(t => t.default),
        "../../../locales/es-ES/game/mines.html": () => a(() =>
            import ("./mines-39814af5.js"), []).then(t => t.default),
        "../../../locales/es-ES/game/plinko.html": () => a(() =>
            import ("./plinko-328a98be.js"), []).then(t => t.default),
        "../../../locales/es-ES/game/roulettemultiplayer.html": () => a(() =>
            import ("./roulettemultiplayer-cafc6b40.js"), []).then(t => t.default),
        "../../../locales/es-ES/game/roulettesingle.html": () => a(() =>
            import ("./roulettesingle-6e9b1acb.js"), []).then(t => t.default),
        "../../../locales/es-ES/game/sword.html": () => a(() =>
            import ("./sword-e1072206.js"), []).then(t => t.default),
        "../../../locales/es-ES/game/tower.html": () => a(() =>
            import ("./tower-9ee63d35.js"), []).then(t => t.default),
        "../../../locales/es-ES/game/ultimatedice.html": () => a(() =>
            import ("./ultimatedice-cf133c1d.js"), []).then(t => t.default),
        "../../../locales/es-ES/game/videopoker.html": () => a(() =>
            import ("./videopoker-6e3f487c.js"), []).then(t => t.default),
        "../../../locales/es-ES/game/wheel.html": () => a(() =>
            import ("./wheel-947a870f.js"), []).then(t => t.default),
        "../../../locales/fa-IR/game/beauties.html": () => a(() =>
            import ("./beauties-8cc9d1ad.js"), []).then(t => t.default),
        "../../../locales/fa-IR/game/blackjack.html": () => a(() =>
            import ("./blackjack-00c784ba.js"), []).then(t => t.default),
        "../../../locales/fa-IR/game/cave.html": () => a(() =>
            import ("./cave-1fdb5519.js"), []).then(t => t.default),
        "../../../locales/fa-IR/game/classicdice.html": () => a(() =>
            import ("./classicdice-b191dff6.js"), []).then(t => t.default),
        "../../../locales/fa-IR/game/coinflip.html": () => a(() =>
            import ("./coinflip-da6c0f81.js"), []).then(t => t.default),
        "../../../locales/fa-IR/game/crash.html": () => a(() =>
            import ("./crash-3ea9cc30.js"), []).then(t => t.default),
        "../../../locales/fa-IR/game/egyptian.html": () => a(() =>
            import ("./egyptian-8f3943d5.js"), []).then(t => t.default),
        "../../../locales/fa-IR/game/general.html": () => a(() =>
            import ("./general-59aff8d4.js"), []).then(t => t.default),
        "../../../locales/fa-IR/game/hashdice.html": () => a(() =>
            import ("./hashdice-ccd6fed5.js"), []).then(t => t.default),
        "../../../locales/fa-IR/game/hilo.html": () => a(() =>
            import ("./hilo-38208366.js"), []).then(t => t.default),
        "../../../locales/fa-IR/game/kemomultiplayer.html": () => a(() =>
            import ("./kemomultiplayer-732cbca6.js"), []).then(t => t.default),
        "../../../locales/fa-IR/game/limbo.html": () => a(() =>
            import ("./limbo-7b022123.js"), []).then(t => t.default),
        "../../../locales/fa-IR/game/mines.html": () => a(() =>
            import ("./mines-ed803988.js"), []).then(t => t.default),
        "../../../locales/fa-IR/game/plinko.html": () => a(() =>
            import ("./plinko-e74205c1.js"), []).then(t => t.default),
        "../../../locales/fa-IR/game/roulettemultiplayer.html": () => a(() =>
            import ("./roulettemultiplayer-5b0ae2ab.js"), []).then(t => t.default),
        "../../../locales/fa-IR/game/roulettesingle.html": () => a(() =>
            import ("./roulettesingle-202d16fa.js"), []).then(t => t.default),
        "../../../locales/fa-IR/game/sword.html": () => a(() =>
            import ("./sword-f4c20e4c.js"), []).then(t => t.default),
        "../../../locales/fa-IR/game/tower.html": () => a(() =>
            import ("./tower-449e3d46.js"), []).then(t => t.default),
        "../../../locales/fa-IR/game/ultimatedice.html": () => a(() =>
            import ("./ultimatedice-e2ab492b.js"), []).then(t => t.default),
        "../../../locales/fa-IR/game/videopoker.html": () => a(() =>
            import ("./videopoker-191236a2.js"), []).then(t => t.default),
        "../../../locales/fa-IR/game/wheel.html": () => a(() =>
            import ("./wheel-e7f54eb1.js"), []).then(t => t.default),
        "../../../locales/fi-FI/game/beauties.html": () => a(() =>
            import ("./beauties-847ad6ea.js"), []).then(t => t.default),
        "../../../locales/fi-FI/game/blackjack.html": () => a(() =>
            import ("./blackjack-24722d21.js"), []).then(t => t.default),
        "../../../locales/fi-FI/game/cave.html": () => a(() =>
            import ("./cave-563c5362.js"), []).then(t => t.default),
        "../../../locales/fi-FI/game/classicdice.html": () => a(() =>
            import ("./classicdice-e8f473fa.js"), []).then(t => t.default),
        "../../../locales/fi-FI/game/coinflip.html": () => a(() =>
            import ("./coinflip-0a067c04.js"), []).then(t => t.default),
        "../../../locales/fi-FI/game/crash.html": () => a(() =>
            import ("./crash-67bc3cee.js"), []).then(t => t.default),
        "../../../locales/fi-FI/game/egyptian.html": () => a(() =>
            import ("./egyptian-1e31a881.js"), []).then(t => t.default),
        "../../../locales/fi-FI/game/general.html": () => a(() =>
            import ("./general-e95ad5ea.js"), []).then(t => t.default),
        "../../../locales/fi-FI/game/hashdice.html": () => a(() =>
            import ("./hashdice-87a115e4.js"), []).then(t => t.default),
        "../../../locales/fi-FI/game/hilo.html": () => a(() =>
            import ("./hilo-aaf063af.js"), []).then(t => t.default),
        "../../../locales/fi-FI/game/kemomultiplayer.html": () => a(() =>
            import ("./kemomultiplayer-8f7a111a.js"), []).then(t => t.default),
        "../../../locales/fi-FI/game/limbo.html": () => a(() =>
            import ("./limbo-13921624.js"), []).then(t => t.default),
        "../../../locales/fi-FI/game/mines.html": () => a(() =>
            import ("./mines-d4cdebf5.js"), []).then(t => t.default),
        "../../../locales/fi-FI/game/plinko.html": () => a(() =>
            import ("./plinko-764a032a.js"), []).then(t => t.default),
        "../../../locales/fi-FI/game/roulettemultiplayer.html": () => a(() =>
            import ("./roulettemultiplayer-bad585e7.js"), []).then(t => t.default),
        "../../../locales/fi-FI/game/roulettesingle.html": () => a(() =>
            import ("./roulettesingle-db72bf5c.js"), []).then(t => t.default),
        "../../../locales/fi-FI/game/sword.html": () => a(() =>
            import ("./sword-b5ff1a1f.js"), []).then(t => t.default),
        "../../../locales/fi-FI/game/tower.html": () => a(() =>
            import ("./tower-3f97ac8d.js"), []).then(t => t.default),
        "../../../locales/fi-FI/game/ultimatedice.html": () => a(() =>
            import ("./ultimatedice-0aa51f38.js"), []).then(t => t.default),
        "../../../locales/fi-FI/game/videopoker.html": () => a(() =>
            import ("./videopoker-2131374f.js"), []).then(t => t.default),
        "../../../locales/fi-FI/game/wheel.html": () => a(() =>
            import ("./wheel-3cc69ccc.js"), []).then(t => t.default),
        "../../../locales/fil-PH/game/beauties.html": () => a(() =>
            import ("./beauties-08e4b029.js"), []).then(t => t.default),
        "../../../locales/fil-PH/game/blackjack.html": () => a(() =>
            import ("./blackjack-5eb62c22.js"), []).then(t => t.default),
        "../../../locales/fil-PH/game/cave.html": () => a(() =>
            import ("./cave-86e186bd.js"), []).then(t => t.default),
        "../../../locales/fil-PH/game/classicdice.html": () => a(() =>
            import ("./classicdice-3504e3b2.js"), []).then(t => t.default),
        "../../../locales/fil-PH/game/coinflip.html": () => a(() =>
            import ("./coinflip-4ce07b05.js"), []).then(t => t.default),
        "../../../locales/fil-PH/game/crash.html": () => a(() =>
            import ("./crash-bd4ea0b5.js"), []).then(t => t.default),
        "../../../locales/fil-PH/game/egyptian.html": () => a(() =>
            import ("./egyptian-5e04f971.js"), []).then(t => t.default),
        "../../../locales/fil-PH/game/general.html": () => a(() =>
            import ("./general-c9666a91.js"), []).then(t => t.default),
        "../../../locales/fil-PH/game/hashdice.html": () => a(() =>
            import ("./hashdice-fcacfa71.js"), []).then(t => t.default),
        "../../../locales/fil-PH/game/hilo.html": () => a(() =>
            import ("./hilo-301a0162.js"), []).then(t => t.default),
        "../../../locales/fil-PH/game/kemomultiplayer.html": () => a(() =>
            import ("./kemomultiplayer-b4aa8efc.js"), []).then(t => t.default),
        "../../../locales/fil-PH/game/limbo.html": () => a(() =>
            import ("./limbo-6165413c.js"), []).then(t => t.default),
        "../../../locales/fil-PH/game/mines.html": () => a(() =>
            import ("./mines-d7d4bf00.js"), []).then(t => t.default),
        "../../../locales/fil-PH/game/plinko.html": () => a(() =>
            import ("./plinko-07452c25.js"), []).then(t => t.default),
        "../../../locales/fil-PH/game/roulettemultiplayer.html": () => a(() =>
            import ("./roulettemultiplayer-e87774e6.js"), []).then(t => t.default),
        "../../../locales/fil-PH/game/roulettesingle.html": () => a(() =>
            import ("./roulettesingle-fdc84c45.js"), []).then(t => t.default),
        "../../../locales/fil-PH/game/sword.html": () => a(() =>
            import ("./sword-5e42d272.js"), []).then(t => t.default),
        "../../../locales/fil-PH/game/tower.html": () => a(() =>
            import ("./tower-c41a2758.js"), []).then(t => t.default),
        "../../../locales/fil-PH/game/ultimatedice.html": () => a(() =>
            import ("./ultimatedice-ca459cfa.js"), []).then(t => t.default),
        "../../../locales/fil-PH/game/videopoker.html": () => a(() =>
            import ("./videopoker-685cb105.js"), []).then(t => t.default),
        "../../../locales/fil-PH/game/wheel.html": () => a(() =>
            import ("./wheel-041a9bd0.js"), []).then(t => t.default),
        "../../../locales/fr-FR/game/beauties.html": () => a(() =>
            import ("./beauties-eb2a7bbd.js"), []).then(t => t.default),
        "../../../locales/fr-FR/game/blackjack.html": () => a(() =>
            import ("./blackjack-9dbbabdf.js"), []).then(t => t.default),
        "../../../locales/fr-FR/game/cave.html": () => a(() =>
            import ("./cave-648a246c.js"), []).then(t => t.default),
        "../../../locales/fr-FR/game/classicdice.html": () => a(() =>
            import ("./classicdice-d880fd19.js"), []).then(t => t.default),
        "../../../locales/fr-FR/game/coinflip.html": () => a(() =>
            import ("./coinflip-48e1d01e.js"), []).then(t => t.default),
        "../../../locales/fr-FR/game/crash.html": () => a(() =>
            import ("./crash-c2567a4c.js"), []).then(t => t.default),
        "../../../locales/fr-FR/game/egyptian.html": () => a(() =>
            import ("./egyptian-aa948fff.js"), []).then(t => t.default),
        "../../../locales/fr-FR/game/general.html": () => a(() =>
            import ("./general-c0bce9ef.js"), []).then(t => t.default),
        "../../../locales/fr-FR/game/hashdice.html": () => a(() =>
            import ("./hashdice-ca1b5cf3.js"), []).then(t => t.default),
        "../../../locales/fr-FR/game/hilo.html": () => a(() =>
            import ("./hilo-bae72ff8.js"), []).then(t => t.default),
        "../../../locales/fr-FR/game/kemomultiplayer.html": () => a(() =>
            import ("./kemomultiplayer-c7c90200.js"), []).then(t => t.default),
        "../../../locales/fr-FR/game/limbo.html": () => a(() =>
            import ("./limbo-bc780c4d.js"), []).then(t => t.default),
        "../../../locales/fr-FR/game/mines.html": () => a(() =>
            import ("./mines-96fd07d7.js"), []).then(t => t.default),
        "../../../locales/fr-FR/game/plinko.html": () => a(() =>
            import ("./plinko-c6ee6d9a.js"), []).then(t => t.default),
        "../../../locales/fr-FR/game/roulettemultiplayer.html": () => a(() =>
            import ("./roulettemultiplayer-4e2289ea.js"), []).then(t => t.default),
        "../../../locales/fr-FR/game/roulettesingle.html": () => a(() =>
            import ("./roulettesingle-087dc316.js"), []).then(t => t.default),
        "../../../locales/fr-FR/game/sword.html": () => a(() =>
            import ("./sword-33791a54.js"), []).then(t => t.default),
        "../../../locales/fr-FR/game/tower.html": () => a(() =>
            import ("./tower-4fb01816.js"), []).then(t => t.default),
        "../../../locales/fr-FR/game/ultimatedice.html": () => a(() =>
            import ("./ultimatedice-8465161b.js"), []).then(t => t.default),
        "../../../locales/fr-FR/game/videopoker.html": () => a(() =>
            import ("./videopoker-3315ad48.js"), []).then(t => t.default),
        "../../../locales/fr-FR/game/wheel.html": () => a(() =>
            import ("./wheel-11f0628d.js"), []).then(t => t.default),
        "../../../locales/hi-IN/game/beauties.html": () => a(() =>
            import ("./beauties-fd1d6800.js"), []).then(t => t.default),
        "../../../locales/hi-IN/game/blackjack.html": () => a(() =>
            import ("./blackjack-57952341.js"), []).then(t => t.default),
        "../../../locales/hi-IN/game/cave.html": () => a(() =>
            import ("./cave-1dc3000d.js"), []).then(t => t.default),
        "../../../locales/hi-IN/game/classicdice.html": () => a(() =>
            import ("./classicdice-4eaaf9b2.js"), []).then(t => t.default),
        "../../../locales/hi-IN/game/coinflip.html": () => a(() =>
            import ("./coinflip-89bb698c.js"), []).then(t => t.default),
        "../../../locales/hi-IN/game/crash.html": () => a(() =>
            import ("./crash-d85ef9e4.js"), []).then(t => t.default),
        "../../../locales/hi-IN/game/egyptian.html": () => a(() =>
            import ("./egyptian-d124a247.js"), []).then(t => t.default),
        "../../../locales/hi-IN/game/general.html": () => a(() =>
            import ("./general-b262e68a.js"), []).then(t => t.default),
        "../../../locales/hi-IN/game/hashdice.html": () => a(() =>
            import ("./hashdice-ce539a60.js"), []).then(t => t.default),
        "../../../locales/hi-IN/game/hilo.html": () => a(() =>
            import ("./hilo-3c016c90.js"), []).then(t => t.default),
        "../../../locales/hi-IN/game/kemomultiplayer.html": () => a(() =>
            import ("./kemomultiplayer-f1ba06b0.js"), []).then(t => t.default),
        "../../../locales/hi-IN/game/limbo.html": () => a(() =>
            import ("./limbo-877884ef.js"), []).then(t => t.default),
        "../../../locales/hi-IN/game/mines.html": () => a(() =>
            import ("./mines-c0e687bb.js"), []).then(t => t.default),
        "../../../locales/hi-IN/game/plinko.html": () => a(() =>
            import ("./plinko-e77aa030.js"), []).then(t => t.default),
        "../../../locales/hi-IN/game/roulettemultiplayer.html": () => a(() =>
            import ("./roulettemultiplayer-e05c3cba.js"), []).then(t => t.default),
        "../../../locales/hi-IN/game/roulettesingle.html": () => a(() =>
            import ("./roulettesingle-7d7ab2fa.js"), []).then(t => t.default),
        "../../../locales/hi-IN/game/sword.html": () => a(() =>
            import ("./sword-aa92baef.js"), []).then(t => t.default),
        "../../../locales/hi-IN/game/tower.html": () => a(() =>
            import ("./tower-bbdabe81.js"), []).then(t => t.default),
        "../../../locales/hi-IN/game/ultimatedice.html": () => a(() =>
            import ("./ultimatedice-87df375e.js"), []).then(t => t.default),
        "../../../locales/hi-IN/game/videopoker.html": () => a(() =>
            import ("./videopoker-81af38f7.js"), []).then(t => t.default),
        "../../../locales/hi-IN/game/wheel.html": () => a(() =>
            import ("./wheel-e2bfbab3.js"), []).then(t => t.default),
        "../../../locales/id-ID/game/beauties.html": () => a(() =>
            import ("./beauties-9add69b8.js"), []).then(t => t.default),
        "../../../locales/id-ID/game/blackjack.html": () => a(() =>
            import ("./blackjack-6283e53f.js"), []).then(t => t.default),
        "../../../locales/id-ID/game/cave.html": () => a(() =>
            import ("./cave-b24218ca.js"), []).then(t => t.default),
        "../../../locales/id-ID/game/classicdice.html": () => a(() =>
            import ("./classicdice-beac2114.js"), []).then(t => t.default),
        "../../../locales/id-ID/game/coinflip.html": () => a(() =>
            import ("./coinflip-7972d1c2.js"), []).then(t => t.default),
        "../../../locales/id-ID/game/crash.html": () => a(() =>
            import ("./crash-3687797b.js"), []).then(t => t.default),
        "../../../locales/id-ID/game/egyptian.html": () => a(() =>
            import ("./egyptian-9753ccd6.js"), []).then(t => t.default),
        "../../../locales/id-ID/game/general.html": () => a(() =>
            import ("./general-7a7cb8e1.js"), []).then(t => t.default),
        "../../../locales/id-ID/game/hashdice.html": () => a(() =>
            import ("./hashdice-abfbd0c2.js"), []).then(t => t.default),
        "../../../locales/id-ID/game/hilo.html": () => a(() =>
            import ("./hilo-b6f71801.js"), []).then(t => t.default),
        "../../../locales/id-ID/game/kemomultiplayer.html": () => a(() =>
            import ("./kemomultiplayer-4666019f.js"), []).then(t => t.default),
        "../../../locales/id-ID/game/limbo.html": () => a(() =>
            import ("./limbo-29d5559b.js"), []).then(t => t.default),
        "../../../locales/id-ID/game/mines.html": () => a(() =>
            import ("./mines-da80e8cd.js"), []).then(t => t.default),
        "../../../locales/id-ID/game/plinko.html": () => a(() =>
            import ("./plinko-504bf047.js"), []).then(t => t.default),
        "../../../locales/id-ID/game/roulettemultiplayer.html": () => a(() =>
            import ("./roulettemultiplayer-9f6ec669.js"), []).then(t => t.default),
        "../../../locales/id-ID/game/roulettesingle.html": () => a(() =>
            import ("./roulettesingle-1706f315.js"), []).then(t => t.default),
        "../../../locales/id-ID/game/sword.html": () => a(() =>
            import ("./sword-bc17782e.js"), []).then(t => t.default),
        "../../../locales/id-ID/game/tower.html": () => a(() =>
            import ("./tower-73feb7fa.js"), []).then(t => t.default),
        "../../../locales/id-ID/game/ultimatedice.html": () => a(() =>
            import ("./ultimatedice-641a21f8.js"), []).then(t => t.default),
        "../../../locales/id-ID/game/videopoker.html": () => a(() =>
            import ("./videopoker-b862b01e.js"), []).then(t => t.default),
        "../../../locales/id-ID/game/wheel.html": () => a(() =>
            import ("./wheel-19cc54e7.js"), []).then(t => t.default),
        "../../../locales/it-IT/game/beauties.html": () => a(() =>
            import ("./beauties-e41d4794.js"), []).then(t => t.default),
        "../../../locales/it-IT/game/blackjack.html": () => a(() =>
            import ("./blackjack-e683fbdb.js"), []).then(t => t.default),
        "../../../locales/it-IT/game/cave.html": () => a(() =>
            import ("./cave-8a1066a9.js"), []).then(t => t.default),
        "../../../locales/it-IT/game/classicdice.html": () => a(() =>
            import ("./classicdice-07e0d7e3.js"), []).then(t => t.default),
        "../../../locales/it-IT/game/coinflip.html": () => a(() =>
            import ("./coinflip-d48280ac.js"), []).then(t => t.default),
        "../../../locales/it-IT/game/crash.html": () => a(() =>
            import ("./crash-2e6fe0f8.js"), []).then(t => t.default),
        "../../../locales/it-IT/game/egyptian.html": () => a(() =>
            import ("./egyptian-90ca5f90.js"), []).then(t => t.default),
        "../../../locales/it-IT/game/general.html": () => a(() =>
            import ("./general-68ba0b16.js"), []).then(t => t.default),
        "../../../locales/it-IT/game/hashdice.html": () => a(() =>
            import ("./hashdice-422d9f6c.js"), []).then(t => t.default),
        "../../../locales/it-IT/game/hilo.html": () => a(() =>
            import ("./hilo-4d70da18.js"), []).then(t => t.default),
        "../../../locales/it-IT/game/kemomultiplayer.html": () => a(() =>
            import ("./kemomultiplayer-14fcb9c5.js"), []).then(t => t.default),
        "../../../locales/it-IT/game/limbo.html": () => a(() =>
            import ("./limbo-17697a7c.js"), []).then(t => t.default),
        "../../../locales/it-IT/game/mines.html": () => a(() =>
            import ("./mines-e95f7c96.js"), []).then(t => t.default),
        "../../../locales/it-IT/game/plinko.html": () => a(() =>
            import ("./plinko-4582ff2e.js"), []).then(t => t.default),
        "../../../locales/it-IT/game/roulettemultiplayer.html": () => a(() =>
            import ("./roulettemultiplayer-320083e3.js"), []).then(t => t.default),
        "../../../locales/it-IT/game/roulettesingle.html": () => a(() =>
            import ("./roulettesingle-977612e8.js"), []).then(t => t.default),
        "../../../locales/it-IT/game/sword.html": () => a(() =>
            import ("./sword-449a4d06.js"), []).then(t => t.default),
        "../../../locales/it-IT/game/tower.html": () => a(() =>
            import ("./tower-b630a7a5.js"), []).then(t => t.default),
        "../../../locales/it-IT/game/ultimatedice.html": () => a(() =>
            import ("./ultimatedice-85a8370d.js"), []).then(t => t.default),
        "../../../locales/it-IT/game/videopoker.html": () => a(() =>
            import ("./videopoker-13d6c30a.js"), []).then(t => t.default),
        "../../../locales/it-IT/game/wheel.html": () => a(() =>
            import ("./wheel-889969bb.js"), []).then(t => t.default),
        "../../../locales/ja-JP/game/beauties.html": () => a(() =>
            import ("./beauties-96664f18.js"), []).then(t => t.default),
        "../../../locales/ja-JP/game/blackjack.html": () => a(() =>
            import ("./blackjack-3ceba2bf.js"), []).then(t => t.default),
        "../../../locales/ja-JP/game/cave.html": () => a(() =>
            import ("./cave-7a9a40bb.js"), []).then(t => t.default),
        "../../../locales/ja-JP/game/classicdice.html": () => a(() =>
            import ("./classicdice-60b2cd74.js"), []).then(t => t.default),
        "../../../locales/ja-JP/game/coinflip.html": () => a(() =>
            import ("./coinflip-eaede76c.js"), []).then(t => t.default),
        "../../../locales/ja-JP/game/crash.html": () => a(() =>
            import ("./crash-31bb3924.js"), []).then(t => t.default),
        "../../../locales/ja-JP/game/egyptian.html": () => a(() =>
            import ("./egyptian-52e54ce3.js"), []).then(t => t.default),
        "../../../locales/ja-JP/game/general.html": () => a(() =>
            import ("./general-74904467.js"), []).then(t => t.default),
        "../../../locales/ja-JP/game/hashdice.html": () => a(() =>
            import ("./hashdice-46a57da8.js"), []).then(t => t.default),
        "../../../locales/ja-JP/game/hilo.html": () => a(() =>
            import ("./hilo-da6e7955.js"), []).then(t => t.default),
        "../../../locales/ja-JP/game/kemomultiplayer.html": () => a(() =>
            import ("./kemomultiplayer-849efd88.js"), []).then(t => t.default),
        "../../../locales/ja-JP/game/limbo.html": () => a(() =>
            import ("./limbo-8aa078a5.js"), []).then(t => t.default),
        "../../../locales/ja-JP/game/mines.html": () => a(() =>
            import ("./mines-12dc6c98.js"), []).then(t => t.default),
        "../../../locales/ja-JP/game/plinko.html": () => a(() =>
            import ("./plinko-364c6bbd.js"), []).then(t => t.default),
        "../../../locales/ja-JP/game/roulettemultiplayer.html": () => a(() =>
            import ("./roulettemultiplayer-035f37b3.js"), []).then(t => t.default),
        "../../../locales/ja-JP/game/roulettesingle.html": () => a(() =>
            import ("./roulettesingle-94a83764.js"), []).then(t => t.default),
        "../../../locales/ja-JP/game/sword.html": () => a(() =>
            import ("./sword-53be7e4f.js"), []).then(t => t.default),
        "../../../locales/ja-JP/game/tower.html": () => a(() =>
            import ("./tower-db35ce6f.js"), []).then(t => t.default),
        "../../../locales/ja-JP/game/ultimatedice.html": () => a(() =>
            import ("./ultimatedice-8ff1d773.js"), []).then(t => t.default),
        "../../../locales/ja-JP/game/videopoker.html": () => a(() =>
            import ("./videopoker-28592e11.js"), []).then(t => t.default),
        "../../../locales/ja-JP/game/wheel.html": () => a(() =>
            import ("./wheel-52b74c4e.js"), []).then(t => t.default),
        "../../../locales/ko-KR/game/beauties.html": () => a(() =>
            import ("./beauties-5b2019ca.js"), []).then(t => t.default),
        "../../../locales/ko-KR/game/blackjack.html": () => a(() =>
            import ("./blackjack-78ad03b1.js"), []).then(t => t.default),
        "../../../locales/ko-KR/game/cave.html": () => a(() =>
            import ("./cave-e6d80256.js"), []).then(t => t.default),
        "../../../locales/ko-KR/game/classicdice.html": () => a(() =>
            import ("./classicdice-0b14ea02.js"), []).then(t => t.default),
        "../../../locales/ko-KR/game/coinflip.html": () => a(() =>
            import ("./coinflip-279d0489.js"), []).then(t => t.default),
        "../../../locales/ko-KR/game/crash.html": () => a(() =>
            import ("./crash-a567f062.js"), []).then(t => t.default),
        "../../../locales/ko-KR/game/egyptian.html": () => a(() =>
            import ("./egyptian-43351171.js"), []).then(t => t.default),
        "../../../locales/ko-KR/game/general.html": () => a(() =>
            import ("./general-73462e27.js"), []).then(t => t.default),
        "../../../locales/ko-KR/game/hashdice.html": () => a(() =>
            import ("./hashdice-81ff3282.js"), []).then(t => t.default),
        "../../../locales/ko-KR/game/hilo.html": () => a(() =>
            import ("./hilo-c60fdba3.js"), []).then(t => t.default),
        "../../../locales/ko-KR/game/kemomultiplayer.html": () => a(() =>
            import ("./kemomultiplayer-ecceed0f.js"), []).then(t => t.default),
        "../../../locales/ko-KR/game/limbo.html": () => a(() =>
            import ("./limbo-7987a5f2.js"), []).then(t => t.default),
        "../../../locales/ko-KR/game/mines.html": () => a(() =>
            import ("./mines-2a9f5ede.js"), []).then(t => t.default),
        "../../../locales/ko-KR/game/plinko.html": () => a(() =>
            import ("./plinko-2e5c9148.js"), []).then(t => t.default),
        "../../../locales/ko-KR/game/roulettemultiplayer.html": () => a(() =>
            import ("./roulettemultiplayer-5654f5c9.js"), []).then(t => t.default),
        "../../../locales/ko-KR/game/roulettesingle.html": () => a(() =>
            import ("./roulettesingle-11c8b2b6.js"), []).then(t => t.default),
        "../../../locales/ko-KR/game/sword.html": () => a(() =>
            import ("./sword-e5ab0a66.js"), []).then(t => t.default),
        "../../../locales/ko-KR/game/tower.html": () => a(() =>
            import ("./tower-b57f74b6.js"), []).then(t => t.default),
        "../../../locales/ko-KR/game/ultimatedice.html": () => a(() =>
            import ("./ultimatedice-9a1c0149.js"), []).then(t => t.default),
        "../../../locales/ko-KR/game/videopoker.html": () => a(() =>
            import ("./videopoker-a8347dbb.js"), []).then(t => t.default),
        "../../../locales/ko-KR/game/wheel.html": () => a(() =>
            import ("./wheel-e3298403.js"), []).then(t => t.default),
        "../../../locales/mr-IN/game/beauties.html": () => a(() =>
            import ("./beauties-e327e98f.js"), []).then(t => t.default),
        "../../../locales/mr-IN/game/blackjack.html": () => a(() =>
            import ("./blackjack-2da9659a.js"), []).then(t => t.default),
        "../../../locales/mr-IN/game/cave.html": () => a(() =>
            import ("./cave-3d9e0cf2.js"), []).then(t => t.default),
        "../../../locales/mr-IN/game/classicdice.html": () => a(() =>
            import ("./classicdice-e0911915.js"), []).then(t => t.default),
        "../../../locales/mr-IN/game/coinflip.html": () => a(() =>
            import ("./coinflip-d5ec08ed.js"), []).then(t => t.default),
        "../../../locales/mr-IN/game/crash.html": () => a(() =>
            import ("./crash-83a586dc.js"), []).then(t => t.default),
        "../../../locales/mr-IN/game/egyptian.html": () => a(() =>
            import ("./egyptian-ea44cf6b.js"), []).then(t => t.default),
        "../../../locales/mr-IN/game/general.html": () => a(() =>
            import ("./general-281affaa.js"), []).then(t => t.default),
        "../../../locales/mr-IN/game/hashdice.html": () => a(() =>
            import ("./hashdice-72f3e15e.js"), []).then(t => t.default),
        "../../../locales/mr-IN/game/hilo.html": () => a(() =>
            import ("./hilo-a2894882.js"), []).then(t => t.default),
        "../../../locales/mr-IN/game/kemomultiplayer.html": () => a(() =>
            import ("./kemomultiplayer-0793e15c.js"), []).then(t => t.default),
        "../../../locales/mr-IN/game/limbo.html": () => a(() =>
            import ("./limbo-110607c0.js"), []).then(t => t.default),
        "../../../locales/mr-IN/game/mines.html": () => a(() =>
            import ("./mines-6766745b.js"), []).then(t => t.default),
        "../../../locales/mr-IN/game/plinko.html": () => a(() =>
            import ("./plinko-35532cbf.js"), []).then(t => t.default),
        "../../../locales/mr-IN/game/roulettemultiplayer.html": () => a(() =>
            import ("./roulettemultiplayer-59f7090a.js"), []).then(t => t.default),
        "../../../locales/mr-IN/game/roulettesingle.html": () => a(() =>
            import ("./roulettesingle-484e7b37.js"), []).then(t => t.default),
        "../../../locales/mr-IN/game/sword.html": () => a(() =>
            import ("./sword-e47fa3e9.js"), []).then(t => t.default),
        "../../../locales/mr-IN/game/tower.html": () => a(() =>
            import ("./tower-e33e4c14.js"), []).then(t => t.default),
        "../../../locales/mr-IN/game/ultimatedice.html": () => a(() =>
            import ("./ultimatedice-2d65e460.js"), []).then(t => t.default),
        "../../../locales/mr-IN/game/videopoker.html": () => a(() =>
            import ("./videopoker-fbf02686.js"), []).then(t => t.default),
        "../../../locales/mr-IN/game/wheel.html": () => a(() =>
            import ("./wheel-c2b5f930.js"), []).then(t => t.default),
        "../../../locales/ms-MY/game/beauties.html": () => a(() =>
            import ("./beauties-913d4af7.js"), []).then(t => t.default),
        "../../../locales/ms-MY/game/blackjack.html": () => a(() =>
            import ("./blackjack-103d66e9.js"), []).then(t => t.default),
        "../../../locales/ms-MY/game/cave.html": () => a(() =>
            import ("./cave-be88de3a.js"), []).then(t => t.default),
        "../../../locales/ms-MY/game/classicdice.html": () => a(() =>
            import ("./classicdice-22953a67.js"), []).then(t => t.default),
        "../../../locales/ms-MY/game/coinflip.html": () => a(() =>
            import ("./coinflip-d6065858.js"), []).then(t => t.default),
        "../../../locales/ms-MY/game/crash.html": () => a(() =>
            import ("./crash-7f8f5df0.js"), []).then(t => t.default),
        "../../../locales/ms-MY/game/egyptian.html": () => a(() =>
            import ("./egyptian-5e28c058.js"), []).then(t => t.default),
        "../../../locales/ms-MY/game/general.html": () => a(() =>
            import ("./general-9bc6337e.js"), []).then(t => t.default),
        "../../../locales/ms-MY/game/hashdice.html": () => a(() =>
            import ("./hashdice-7765ffc8.js"), []).then(t => t.default),
        "../../../locales/ms-MY/game/hilo.html": () => a(() =>
            import ("./hilo-e5f0901b.js"), []).then(t => t.default),
        "../../../locales/ms-MY/game/kemomultiplayer.html": () => a(() =>
            import ("./kemomultiplayer-f1e4ea52.js"), []).then(t => t.default),
        "../../../locales/ms-MY/game/limbo.html": () => a(() =>
            import ("./limbo-0e742f79.js"), []).then(t => t.default),
        "../../../locales/ms-MY/game/mines.html": () => a(() =>
            import ("./mines-38cb0537.js"), []).then(t => t.default),
        "../../../locales/ms-MY/game/plinko.html": () => a(() =>
            import ("./plinko-59c17539.js"), []).then(t => t.default),
        "../../../locales/ms-MY/game/roulettemultiplayer.html": () => a(() =>
            import ("./roulettemultiplayer-04818f14.js"), []).then(t => t.default),
        "../../../locales/ms-MY/game/roulettesingle.html": () => a(() =>
            import ("./roulettesingle-3930b50b.js"), []).then(t => t.default),
        "../../../locales/ms-MY/game/sword.html": () => a(() =>
            import ("./sword-01896eb1.js"), []).then(t => t.default),
        "../../../locales/ms-MY/game/tower.html": () => a(() =>
            import ("./tower-fe62a6d5.js"), []).then(t => t.default),
        "../../../locales/ms-MY/game/ultimatedice.html": () => a(() =>
            import ("./ultimatedice-0fba9054.js"), []).then(t => t.default),
        "../../../locales/ms-MY/game/videopoker.html": () => a(() =>
            import ("./videopoker-c59b370f.js"), []).then(t => t.default),
        "../../../locales/ms-MY/game/wheel.html": () => a(() =>
            import ("./wheel-d454fc40.js"), []).then(t => t.default),
        "../../../locales/my-MM/game/beauties.html": () => a(() =>
            import ("./beauties-9ad05604.js"), []).then(t => t.default),
        "../../../locales/my-MM/game/blackjack.html": () => a(() =>
            import ("./blackjack-66495cc7.js"), []).then(t => t.default),
        "../../../locales/my-MM/game/cave.html": () => a(() =>
            import ("./cave-637f1c06.js"), []).then(t => t.default),
        "../../../locales/my-MM/game/classicdice.html": () => a(() =>
            import ("./classicdice-e96b2492.js"), []).then(t => t.default),
        "../../../locales/my-MM/game/coinflip.html": () => a(() =>
            import ("./coinflip-13eeac6b.js"), []).then(t => t.default),
        "../../../locales/my-MM/game/crash.html": () => a(() =>
            import ("./crash-c12cfaf3.js"), []).then(t => t.default),
        "../../../locales/my-MM/game/egyptian.html": () => a(() =>
            import ("./egyptian-e222dc97.js"), []).then(t => t.default),
        "../../../locales/my-MM/game/general.html": () => a(() =>
            import ("./general-2b48cc1c.js"), []).then(t => t.default),
        "../../../locales/my-MM/game/hashdice.html": () => a(() =>
            import ("./hashdice-9ec471ed.js"), []).then(t => t.default),
        "../../../locales/my-MM/game/hilo.html": () => a(() =>
            import ("./hilo-ddd07554.js"), []).then(t => t.default),
        "../../../locales/my-MM/game/kemomultiplayer.html": () => a(() =>
            import ("./kemomultiplayer-014aac29.js"), []).then(t => t.default),
        "../../../locales/my-MM/game/limbo.html": () => a(() =>
            import ("./limbo-b3f400b9.js"), []).then(t => t.default),
        "../../../locales/my-MM/game/mines.html": () => a(() =>
            import ("./mines-855a78e1.js"), []).then(t => t.default),
        "../../../locales/my-MM/game/plinko.html": () => a(() =>
            import ("./plinko-9c394eb2.js"), []).then(t => t.default),
        "../../../locales/my-MM/game/roulettemultiplayer.html": () => a(() =>
            import ("./roulettemultiplayer-162e7d90.js"), []).then(t => t.default),
        "../../../locales/my-MM/game/roulettesingle.html": () => a(() =>
            import ("./roulettesingle-18c61ae7.js"), []).then(t => t.default),
        "../../../locales/my-MM/game/sword.html": () => a(() =>
            import ("./sword-29663a43.js"), []).then(t => t.default),
        "../../../locales/my-MM/game/tower.html": () => a(() =>
            import ("./tower-fef10c18.js"), []).then(t => t.default),
        "../../../locales/my-MM/game/ultimatedice.html": () => a(() =>
            import ("./ultimatedice-d1b165fe.js"), []).then(t => t.default),
        "../../../locales/my-MM/game/videopoker.html": () => a(() =>
            import ("./videopoker-b89506bf.js"), []).then(t => t.default),
        "../../../locales/my-MM/game/wheel.html": () => a(() =>
            import ("./wheel-45babacc.js"), []).then(t => t.default),
        "../../../locales/nl-NL/game/beauties.html": () => a(() =>
            import ("./beauties-1ce8df8a.js"), []).then(t => t.default),
        "../../../locales/nl-NL/game/blackjack.html": () => a(() =>
            import ("./blackjack-a1869fbe.js"), []).then(t => t.default),
        "../../../locales/nl-NL/game/cave.html": () => a(() =>
            import ("./cave-ffe316c5.js"), []).then(t => t.default),
        "../../../locales/nl-NL/game/classicdice.html": () => a(() =>
            import ("./classicdice-cd1f8663.js"), []).then(t => t.default),
        "../../../locales/nl-NL/game/coinflip.html": () => a(() =>
            import ("./coinflip-92d1a679.js"), []).then(t => t.default),
        "../../../locales/nl-NL/game/crash.html": () => a(() =>
            import ("./crash-78ff2b5e.js"), []).then(t => t.default),
        "../../../locales/nl-NL/game/egyptian.html": () => a(() =>
            import ("./egyptian-3cb7a950.js"), []).then(t => t.default),
        "../../../locales/nl-NL/game/general.html": () => a(() =>
            import ("./general-914845a9.js"), []).then(t => t.default),
        "../../../locales/nl-NL/game/hashdice.html": () => a(() =>
            import ("./hashdice-8ce897cc.js"), []).then(t => t.default),
        "../../../locales/nl-NL/game/hilo.html": () => a(() =>
            import ("./hilo-31391afe.js"), []).then(t => t.default),
        "../../../locales/nl-NL/game/kemomultiplayer.html": () => a(() =>
            import ("./kemomultiplayer-038cb8fa.js"), []).then(t => t.default),
        "../../../locales/nl-NL/game/limbo.html": () => a(() =>
            import ("./limbo-1774aa7c.js"), []).then(t => t.default),
        "../../../locales/nl-NL/game/mines.html": () => a(() =>
            import ("./mines-ea5ca138.js"), []).then(t => t.default),
        "../../../locales/nl-NL/game/plinko.html": () => a(() =>
            import ("./plinko-bcc084cc.js"), []).then(t => t.default),
        "../../../locales/nl-NL/game/roulettemultiplayer.html": () => a(() =>
            import ("./roulettemultiplayer-f3f6833b.js"), []).then(t => t.default),
        "../../../locales/nl-NL/game/roulettesingle.html": () => a(() =>
            import ("./roulettesingle-fe207b00.js"), []).then(t => t.default),
        "../../../locales/nl-NL/game/sword.html": () => a(() =>
            import ("./sword-d346f7c1.js"), []).then(t => t.default),
        "../../../locales/nl-NL/game/tower.html": () => a(() =>
            import ("./tower-4b15064a.js"), []).then(t => t.default),
        "../../../locales/nl-NL/game/ultimatedice.html": () => a(() =>
            import ("./ultimatedice-cde6d697.js"), []).then(t => t.default),
        "../../../locales/nl-NL/game/videopoker.html": () => a(() =>
            import ("./videopoker-15e9842c.js"), []).then(t => t.default),
        "../../../locales/nl-NL/game/wheel.html": () => a(() =>
            import ("./wheel-1c7b9560.js"), []).then(t => t.default),
        "../../../locales/pl-PL/game/beauties.html": () => a(() =>
            import ("./beauties-b49a9b6c.js"), []).then(t => t.default),
        "../../../locales/pl-PL/game/blackjack.html": () => a(() =>
            import ("./blackjack-2a7f7d67.js"), []).then(t => t.default),
        "../../../locales/pl-PL/game/cave.html": () => a(() =>
            import ("./cave-8bd1a933.js"), []).then(t => t.default),
        "../../../locales/pl-PL/game/classicdice.html": () => a(() =>
            import ("./classicdice-fa9515b1.js"), []).then(t => t.default),
        "../../../locales/pl-PL/game/coinflip.html": () => a(() =>
            import ("./coinflip-6d715e4d.js"), []).then(t => t.default),
        "../../../locales/pl-PL/game/crash.html": () => a(() =>
            import ("./crash-e3ca968d.js"), []).then(t => t.default),
        "../../../locales/pl-PL/game/egyptian.html": () => a(() =>
            import ("./egyptian-803a398a.js"), []).then(t => t.default),
        "../../../locales/pl-PL/game/general.html": () => a(() =>
            import ("./general-a7c9d39c.js"), []).then(t => t.default),
        "../../../locales/pl-PL/game/hashdice.html": () => a(() =>
            import ("./hashdice-b69a144f.js"), []).then(t => t.default),
        "../../../locales/pl-PL/game/hilo.html": () => a(() =>
            import ("./hilo-5bd91ca7.js"), []).then(t => t.default),
        "../../../locales/pl-PL/game/kemomultiplayer.html": () => a(() =>
            import ("./kemomultiplayer-6d4f4c36.js"), []).then(t => t.default),
        "../../../locales/pl-PL/game/limbo.html": () => a(() =>
            import ("./limbo-b0c621db.js"), []).then(t => t.default),
        "../../../locales/pl-PL/game/mines.html": () => a(() =>
            import ("./mines-086356a9.js"), []).then(t => t.default),
        "../../../locales/pl-PL/game/plinko.html": () => a(() =>
            import ("./plinko-02e67cfe.js"), []).then(t => t.default),
        "../../../locales/pl-PL/game/roulettemultiplayer.html": () => a(() =>
            import ("./roulettemultiplayer-c306e03f.js"), []).then(t => t.default),
        "../../../locales/pl-PL/game/roulettesingle.html": () => a(() =>
            import ("./roulettesingle-6e80c473.js"), []).then(t => t.default),
        "../../../locales/pl-PL/game/sword.html": () => a(() =>
            import ("./sword-f3e5b908.js"), []).then(t => t.default),
        "../../../locales/pl-PL/game/tower.html": () => a(() =>
            import ("./tower-4fd1f087.js"), []).then(t => t.default),
        "../../../locales/pl-PL/game/ultimatedice.html": () => a(() =>
            import ("./ultimatedice-eb78de08.js"), []).then(t => t.default),
        "../../../locales/pl-PL/game/videopoker.html": () => a(() =>
            import ("./videopoker-760669d1.js"), []).then(t => t.default),
        "../../../locales/pl-PL/game/wheel.html": () => a(() =>
            import ("./wheel-aad2f253.js"), []).then(t => t.default),
        "../../../locales/pt-BR/game/beauties.html": () => a(() =>
            import ("./beauties-0adb1f2d.js"), []).then(t => t.default),
        "../../../locales/pt-BR/game/blackjack.html": () => a(() =>
            import ("./blackjack-cf3fbe18.js"), []).then(t => t.default),
        "../../../locales/pt-BR/game/cave.html": () => a(() =>
            import ("./cave-0f7925d2.js"), []).then(t => t.default),
        "../../../locales/pt-BR/game/classicdice.html": () => a(() =>
            import ("./classicdice-9e45e2d5.js"), []).then(t => t.default),
        "../../../locales/pt-BR/game/coinflip.html": () => a(() =>
            import ("./coinflip-7fdfcbd3.js"), []).then(t => t.default),
        "../../../locales/pt-BR/game/crash.html": () => a(() =>
            import ("./crash-2e990c48.js"), []).then(t => t.default),
        "../../../locales/pt-BR/game/egyptian.html": () => a(() =>
            import ("./egyptian-89dceffe.js"), []).then(t => t.default),
        "../../../locales/pt-BR/game/general.html": () => a(() =>
            import ("./general-472db7c3.js"), []).then(t => t.default),
        "../../../locales/pt-BR/game/hashdice.html": () => a(() =>
            import ("./hashdice-6f819dc6.js"), []).then(t => t.default),
        "../../../locales/pt-BR/game/hilo.html": () => a(() =>
            import ("./hilo-957854e8.js"), []).then(t => t.default),
        "../../../locales/pt-BR/game/kemomultiplayer.html": () => a(() =>
            import ("./kemomultiplayer-19747850.js"), []).then(t => t.default),
        "../../../locales/pt-BR/game/limbo.html": () => a(() =>
            import ("./limbo-5e884d9a.js"), []).then(t => t.default),
        "../../../locales/pt-BR/game/mines.html": () => a(() =>
            import ("./mines-d7a1fdf9.js"), []).then(t => t.default),
        "../../../locales/pt-BR/game/plinko.html": () => a(() =>
            import ("./plinko-f3773d2b.js"), []).then(t => t.default),
        "../../../locales/pt-BR/game/roulettemultiplayer.html": () => a(() =>
            import ("./roulettemultiplayer-bc31af8f.js"), []).then(t => t.default),
        "../../../locales/pt-BR/game/roulettesingle.html": () => a(() =>
            import ("./roulettesingle-e2602de0.js"), []).then(t => t.default),
        "../../../locales/pt-BR/game/sword.html": () => a(() =>
            import ("./sword-b97654ce.js"), []).then(t => t.default),
        "../../../locales/pt-BR/game/tower.html": () => a(() =>
            import ("./tower-d6ec4219.js"), []).then(t => t.default),
        "../../../locales/pt-BR/game/ultimatedice.html": () => a(() =>
            import ("./ultimatedice-cf6a0903.js"), []).then(t => t.default),
        "../../../locales/pt-BR/game/videopoker.html": () => a(() =>
            import ("./videopoker-bdb871dd.js"), []).then(t => t.default),
        "../../../locales/pt-BR/game/wheel.html": () => a(() =>
            import ("./wheel-28d0283d.js"), []).then(t => t.default),
        "../../../locales/ru-RU/game/beauties.html": () => a(() =>
            import ("./beauties-aba56392.js"), []).then(t => t.default),
        "../../../locales/ru-RU/game/blackjack.html": () => a(() =>
            import ("./blackjack-deff125c.js"), []).then(t => t.default),
        "../../../locales/ru-RU/game/cave.html": () => a(() =>
            import ("./cave-e08646df.js"), []).then(t => t.default),
        "../../../locales/ru-RU/game/classicdice.html": () => a(() =>
            import ("./classicdice-d3f255e8.js"), []).then(t => t.default),
        "../../../locales/ru-RU/game/coinflip.html": () => a(() =>
            import ("./coinflip-5b40f3d9.js"), []).then(t => t.default),
        "../../../locales/ru-RU/game/crash.html": () => a(() =>
            import ("./crash-a2e526bf.js"), []).then(t => t.default),
        "../../../locales/ru-RU/game/egyptian.html": () => a(() =>
            import ("./egyptian-63edc466.js"), []).then(t => t.default),
        "../../../locales/ru-RU/game/general.html": () => a(() =>
            import ("./general-3c7b5edf.js"), []).then(t => t.default),
        "../../../locales/ru-RU/game/hashdice.html": () => a(() =>
            import ("./hashdice-14fd4687.js"), []).then(t => t.default),
        "../../../locales/ru-RU/game/hilo.html": () => a(() =>
            import ("./hilo-60827fa2.js"), []).then(t => t.default),
        "../../../locales/ru-RU/game/kemomultiplayer.html": () => a(() =>
            import ("./kemomultiplayer-265dbcb1.js"), []).then(t => t.default),
        "../../../locales/ru-RU/game/limbo.html": () => a(() =>
            import ("./limbo-a7f697e3.js"), []).then(t => t.default),
        "../../../locales/ru-RU/game/mines.html": () => a(() =>
            import ("./mines-2375ba90.js"), []).then(t => t.default),
        "../../../locales/ru-RU/game/plinko.html": () => a(() =>
            import ("./plinko-afa7feca.js"), []).then(t => t.default),
        "../../../locales/ru-RU/game/roulettemultiplayer.html": () => a(() =>
            import ("./roulettemultiplayer-12ce4fc1.js"), []).then(t => t.default),
        "../../../locales/ru-RU/game/roulettesingle.html": () => a(() =>
            import ("./roulettesingle-3cc27dd0.js"), []).then(t => t.default),
        "../../../locales/ru-RU/game/sword.html": () => a(() =>
            import ("./sword-65a1b867.js"), []).then(t => t.default),
        "../../../locales/ru-RU/game/tower.html": () => a(() =>
            import ("./tower-91ece724.js"), []).then(t => t.default),
        "../../../locales/ru-RU/game/ultimatedice.html": () => a(() =>
            import ("./ultimatedice-44c1bb25.js"), []).then(t => t.default),
        "../../../locales/ru-RU/game/videopoker.html": () => a(() =>
            import ("./videopoker-37fcff27.js"), []).then(t => t.default),
        "../../../locales/ru-RU/game/wheel.html": () => a(() =>
            import ("./wheel-d357641c.js"), []).then(t => t.default),
        "../../../locales/ta-IN/game/beauties.html": () => a(() =>
            import ("./beauties-56fc2188.js"), []).then(t => t.default),
        "../../../locales/ta-IN/game/blackjack.html": () => a(() =>
            import ("./blackjack-e2b32619.js"), []).then(t => t.default),
        "../../../locales/ta-IN/game/cave.html": () => a(() =>
            import ("./cave-a9f72b45.js"), []).then(t => t.default),
        "../../../locales/ta-IN/game/classicdice.html": () => a(() =>
            import ("./classicdice-960bb52d.js"), []).then(t => t.default),
        "../../../locales/ta-IN/game/coinflip.html": () => a(() =>
            import ("./coinflip-a7723744.js"), []).then(t => t.default),
        "../../../locales/ta-IN/game/crash.html": () => a(() =>
            import ("./crash-3bde934a.js"), []).then(t => t.default),
        "../../../locales/ta-IN/game/egyptian.html": () => a(() =>
            import ("./egyptian-438b46da.js"), []).then(t => t.default),
        "../../../locales/ta-IN/game/general.html": () => a(() =>
            import ("./general-67be7f65.js"), []).then(t => t.default),
        "../../../locales/ta-IN/game/hashdice.html": () => a(() =>
            import ("./hashdice-6eb4ca93.js"), []).then(t => t.default),
        "../../../locales/ta-IN/game/hilo.html": () => a(() =>
            import ("./hilo-e6357514.js"), []).then(t => t.default),
        "../../../locales/ta-IN/game/kemomultiplayer.html": () => a(() =>
            import ("./kemomultiplayer-4092286c.js"), []).then(t => t.default),
        "../../../locales/ta-IN/game/limbo.html": () => a(() =>
            import ("./limbo-c0e8a050.js"), []).then(t => t.default),
        "../../../locales/ta-IN/game/mines.html": () => a(() =>
            import ("./mines-b4e136ca.js"), []).then(t => t.default),
        "../../../locales/ta-IN/game/plinko.html": () => a(() =>
            import ("./plinko-3cf7e6f9.js"), []).then(t => t.default),
        "../../../locales/ta-IN/game/roulettemultiplayer.html": () => a(() =>
            import ("./roulettemultiplayer-716278e7.js"), []).then(t => t.default),
        "../../../locales/ta-IN/game/roulettesingle.html": () => a(() =>
            import ("./roulettesingle-19a303b9.js"), []).then(t => t.default),
        "../../../locales/ta-IN/game/sword.html": () => a(() =>
            import ("./sword-d14acff3.js"), []).then(t => t.default),
        "../../../locales/ta-IN/game/tower.html": () => a(() =>
            import ("./tower-f5b5eae0.js"), []).then(t => t.default),
        "../../../locales/ta-IN/game/ultimatedice.html": () => a(() =>
            import ("./ultimatedice-48af2b27.js"), []).then(t => t.default),
        "../../../locales/ta-IN/game/videopoker.html": () => a(() =>
            import ("./videopoker-acc3a39b.js"), []).then(t => t.default),
        "../../../locales/ta-IN/game/wheel.html": () => a(() =>
            import ("./wheel-b4490b30.js"), []).then(t => t.default),
        "../../../locales/te-IN/game/beauties.html": () => a(() =>
            import ("./beauties-0e64538e.js"), []).then(t => t.default),
        "../../../locales/te-IN/game/blackjack.html": () => a(() =>
            import ("./blackjack-7a8c648d.js"), []).then(t => t.default),
        "../../../locales/te-IN/game/cave.html": () => a(() =>
            import ("./cave-148fbfd8.js"), []).then(t => t.default),
        "../../../locales/te-IN/game/classicdice.html": () => a(() =>
            import ("./classicdice-e3c0c9dc.js"), []).then(t => t.default),
        "../../../locales/te-IN/game/coinflip.html": () => a(() =>
            import ("./coinflip-fc1bc246.js"), []).then(t => t.default),
        "../../../locales/te-IN/game/crash.html": () => a(() =>
            import ("./crash-de37d9cd.js"), []).then(t => t.default),
        "../../../locales/te-IN/game/egyptian.html": () => a(() =>
            import ("./egyptian-64499d4f.js"), []).then(t => t.default),
        "../../../locales/te-IN/game/general.html": () => a(() =>
            import ("./general-dbe48f42.js"), []).then(t => t.default),
        "../../../locales/te-IN/game/hashdice.html": () => a(() =>
            import ("./hashdice-1a22a95d.js"), []).then(t => t.default),
        "../../../locales/te-IN/game/hilo.html": () => a(() =>
            import ("./hilo-6c0f769d.js"), []).then(t => t.default),
        "../../../locales/te-IN/game/kemomultiplayer.html": () => a(() =>
            import ("./kemomultiplayer-5d69f29f.js"), []).then(t => t.default),
        "../../../locales/te-IN/game/limbo.html": () => a(() =>
            import ("./limbo-18d4e0fc.js"), []).then(t => t.default),
        "../../../locales/te-IN/game/mines.html": () => a(() =>
            import ("./mines-567b8032.js"), []).then(t => t.default),
        "../../../locales/te-IN/game/plinko.html": () => a(() =>
            import ("./plinko-994c5f59.js"), []).then(t => t.default),
        "../../../locales/te-IN/game/roulettemultiplayer.html": () => a(() =>
            import ("./roulettemultiplayer-58dc8105.js"), []).then(t => t.default),
        "../../../locales/te-IN/game/roulettesingle.html": () => a(() =>
            import ("./roulettesingle-fb488a49.js"), []).then(t => t.default),
        "../../../locales/te-IN/game/sword.html": () => a(() =>
            import ("./sword-c914d20e.js"), []).then(t => t.default),
        "../../../locales/te-IN/game/tower.html": () => a(() =>
            import ("./tower-9eb9d15f.js"), []).then(t => t.default),
        "../../../locales/te-IN/game/ultimatedice.html": () => a(() =>
            import ("./ultimatedice-309568dd.js"), []).then(t => t.default),
        "../../../locales/te-IN/game/videopoker.html": () => a(() =>
            import ("./videopoker-36b641ea.js"), []).then(t => t.default),
        "../../../locales/te-IN/game/wheel.html": () => a(() =>
            import ("./wheel-6900ae5c.js"), []).then(t => t.default),
        "../../../locales/th-TH/game/beauties.html": () => a(() =>
            import ("./beauties-d8b2d76c.js"), []).then(t => t.default),
        "../../../locales/th-TH/game/blackjack.html": () => a(() =>
            import ("./blackjack-19a44587.js"), []).then(t => t.default),
        "../../../locales/th-TH/game/cave.html": () => a(() =>
            import ("./cave-b67fbb11.js"), []).then(t => t.default),
        "../../../locales/th-TH/game/classicdice.html": () => a(() =>
            import ("./classicdice-f28381cc.js"), []).then(t => t.default),
        "../../../locales/th-TH/game/coinflip.html": () => a(() =>
            import ("./coinflip-573db5d5.js"), []).then(t => t.default),
        "../../../locales/th-TH/game/crash.html": () => a(() =>
            import ("./crash-4a9bbc81.js"), []).then(t => t.default),
        "../../../locales/th-TH/game/egyptian.html": () => a(() =>
            import ("./egyptian-2bc41bb7.js"), []).then(t => t.default),
        "../../../locales/th-TH/game/general.html": () => a(() =>
            import ("./general-281ad32d.js"), []).then(t => t.default),
        "../../../locales/th-TH/game/hashdice.html": () => a(() =>
            import ("./hashdice-9e82b5f0.js"), []).then(t => t.default),
        "../../../locales/th-TH/game/hilo.html": () => a(() =>
            import ("./hilo-bfab892e.js"), []).then(t => t.default),
        "../../../locales/th-TH/game/kemomultiplayer.html": () => a(() =>
            import ("./kemomultiplayer-ae018ccc.js"), []).then(t => t.default),
        "../../../locales/th-TH/game/limbo.html": () => a(() =>
            import ("./limbo-4e411ffd.js"), []).then(t => t.default),
        "../../../locales/th-TH/game/mines.html": () => a(() =>
            import ("./mines-d363f5bc.js"), []).then(t => t.default),
        "../../../locales/th-TH/game/plinko.html": () => a(() =>
            import ("./plinko-c4ca361e.js"), []).then(t => t.default),
        "../../../locales/th-TH/game/roulettemultiplayer.html": () => a(() =>
            import ("./roulettemultiplayer-6968745b.js"), []).then(t => t.default),
        "../../../locales/th-TH/game/roulettesingle.html": () => a(() =>
            import ("./roulettesingle-ae4b0801.js"), []).then(t => t.default),
        "../../../locales/th-TH/game/sword.html": () => a(() =>
            import ("./sword-f53688c9.js"), []).then(t => t.default),
        "../../../locales/th-TH/game/tower.html": () => a(() =>
            import ("./tower-3ce986e5.js"), []).then(t => t.default),
        "../../../locales/th-TH/game/ultimatedice.html": () => a(() =>
            import ("./ultimatedice-fef36965.js"), []).then(t => t.default),
        "../../../locales/th-TH/game/videopoker.html": () => a(() =>
            import ("./videopoker-f9fde065.js"), []).then(t => t.default),
        "../../../locales/th-TH/game/wheel.html": () => a(() =>
            import ("./wheel-b17dce5a.js"), []).then(t => t.default),
        "../../../locales/tr-TR/game/beauties.html": () => a(() =>
            import ("./beauties-ec6d5523.js"), []).then(t => t.default),
        "../../../locales/tr-TR/game/blackjack.html": () => a(() =>
            import ("./blackjack-b12e480f.js"), []).then(t => t.default),
        "../../../locales/tr-TR/game/cave.html": () => a(() =>
            import ("./cave-f1f61ef3.js"), []).then(t => t.default),
        "../../../locales/tr-TR/game/classicdice.html": () => a(() =>
            import ("./classicdice-bfef45cf.js"), []).then(t => t.default),
        "../../../locales/tr-TR/game/coinflip.html": () => a(() =>
            import ("./coinflip-96c9be0f.js"), []).then(t => t.default),
        "../../../locales/tr-TR/game/crash.html": () => a(() =>
            import ("./crash-ab3db6e5.js"), []).then(t => t.default),
        "../../../locales/tr-TR/game/egyptian.html": () => a(() =>
            import ("./egyptian-196671e0.js"), []).then(t => t.default),
        "../../../locales/tr-TR/game/general.html": () => a(() =>
            import ("./general-a8350913.js"), []).then(t => t.default),
        "../../../locales/tr-TR/game/hashdice.html": () => a(() =>
            import ("./hashdice-ca6e4c52.js"), []).then(t => t.default),
        "../../../locales/tr-TR/game/hilo.html": () => a(() =>
            import ("./hilo-82ea6f42.js"), []).then(t => t.default),
        "../../../locales/tr-TR/game/kemomultiplayer.html": () => a(() =>
            import ("./kemomultiplayer-ea718e3b.js"), []).then(t => t.default),
        "../../../locales/tr-TR/game/limbo.html": () => a(() =>
            import ("./limbo-87babc81.js"), []).then(t => t.default),
        "../../../locales/tr-TR/game/mines.html": () => a(() =>
            import ("./mines-939c3e46.js"), []).then(t => t.default),
        "../../../locales/tr-TR/game/plinko.html": () => a(() =>
            import ("./plinko-69fb6b7a.js"), []).then(t => t.default),
        "../../../locales/tr-TR/game/roulettemultiplayer.html": () => a(() =>
            import ("./roulettemultiplayer-c81abade.js"), []).then(t => t.default),
        "../../../locales/tr-TR/game/roulettesingle.html": () => a(() =>
            import ("./roulettesingle-35a5581b.js"), []).then(t => t.default),
        "../../../locales/tr-TR/game/sword.html": () => a(() =>
            import ("./sword-c65ab9ff.js"), []).then(t => t.default),
        "../../../locales/tr-TR/game/tower.html": () => a(() =>
            import ("./tower-4fafebb5.js"), []).then(t => t.default),
        "../../../locales/tr-TR/game/ultimatedice.html": () => a(() =>
            import ("./ultimatedice-77d1a06e.js"), []).then(t => t.default),
        "../../../locales/tr-TR/game/videopoker.html": () => a(() =>
            import ("./videopoker-d6eb6a5d.js"), []).then(t => t.default),
        "../../../locales/tr-TR/game/wheel.html": () => a(() =>
            import ("./wheel-3e8e5322.js"), []).then(t => t.default),
        "../../../locales/uk-UA/game/beauties.html": () => a(() =>
            import ("./beauties-1764e11e.js"), []).then(t => t.default),
        "../../../locales/uk-UA/game/blackjack.html": () => a(() =>
            import ("./blackjack-165ab0cf.js"), []).then(t => t.default),
        "../../../locales/uk-UA/game/cave.html": () => a(() =>
            import ("./cave-a0cf25f0.js"), []).then(t => t.default),
        "../../../locales/uk-UA/game/classicdice.html": () => a(() =>
            import ("./classicdice-1384ea02.js"), []).then(t => t.default),
        "../../../locales/uk-UA/game/coinflip.html": () => a(() =>
            import ("./coinflip-fc6abf44.js"), []).then(t => t.default),
        "../../../locales/uk-UA/game/crash.html": () => a(() =>
            import ("./crash-516a7b82.js"), []).then(t => t.default),
        "../../../locales/uk-UA/game/egyptian.html": () => a(() =>
            import ("./egyptian-af825abd.js"), []).then(t => t.default),
        "../../../locales/uk-UA/game/general.html": () => a(() =>
            import ("./general-0eb86766.js"), []).then(t => t.default),
        "../../../locales/uk-UA/game/hashdice.html": () => a(() =>
            import ("./hashdice-18ca812c.js"), []).then(t => t.default),
        "../../../locales/uk-UA/game/hilo.html": () => a(() =>
            import ("./hilo-947508aa.js"), []).then(t => t.default),
        "../../../locales/uk-UA/game/kemomultiplayer.html": () => a(() =>
            import ("./kemomultiplayer-f8a2bcd7.js"), []).then(t => t.default),
        "../../../locales/uk-UA/game/limbo.html": () => a(() =>
            import ("./limbo-b7efd086.js"), []).then(t => t.default),
        "../../../locales/uk-UA/game/mines.html": () => a(() =>
            import ("./mines-8989bf38.js"), []).then(t => t.default),
        "../../../locales/uk-UA/game/plinko.html": () => a(() =>
            import ("./plinko-bbd6ed8f.js"), []).then(t => t.default),
        "../../../locales/uk-UA/game/roulettemultiplayer.html": () => a(() =>
            import ("./roulettemultiplayer-38e09063.js"), []).then(t => t.default),
        "../../../locales/uk-UA/game/roulettesingle.html": () => a(() =>
            import ("./roulettesingle-53757b78.js"), []).then(t => t.default),
        "../../../locales/uk-UA/game/sword.html": () => a(() =>
            import ("./sword-1c04e889.js"), []).then(t => t.default),
        "../../../locales/uk-UA/game/tower.html": () => a(() =>
            import ("./tower-53c9f5b7.js"), []).then(t => t.default),
        "../../../locales/uk-UA/game/ultimatedice.html": () => a(() =>
            import ("./ultimatedice-6a148c5e.js"), []).then(t => t.default),
        "../../../locales/uk-UA/game/videopoker.html": () => a(() =>
            import ("./videopoker-2783eb2f.js"), []).then(t => t.default),
        "../../../locales/uk-UA/game/wheel.html": () => a(() =>
            import ("./wheel-6e706578.js"), []).then(t => t.default),
        "../../../locales/ur-PK/game/beauties.html": () => a(() =>
            import ("./beauties-9c5684ec.js"), []).then(t => t.default),
        "../../../locales/ur-PK/game/blackjack.html": () => a(() =>
            import ("./blackjack-4d3d12cd.js"), []).then(t => t.default),
        "../../../locales/ur-PK/game/cave.html": () => a(() =>
            import ("./cave-dc41b667.js"), []).then(t => t.default),
        "../../../locales/ur-PK/game/classicdice.html": () => a(() =>
            import ("./classicdice-ef00dd2c.js"), []).then(t => t.default),
        "../../../locales/ur-PK/game/coinflip.html": () => a(() =>
            import ("./coinflip-90e6e60b.js"), []).then(t => t.default),
        "../../../locales/ur-PK/game/crash.html": () => a(() =>
            import ("./crash-e914efca.js"), []).then(t => t.default),
        "../../../locales/ur-PK/game/egyptian.html": () => a(() =>
            import ("./egyptian-dbcf441e.js"), []).then(t => t.default),
        "../../../locales/ur-PK/game/general.html": () => a(() =>
            import ("./general-398ed60d.js"), []).then(t => t.default),
        "../../../locales/ur-PK/game/hashdice.html": () => a(() =>
            import ("./hashdice-7929d29e.js"), []).then(t => t.default),
        "../../../locales/ur-PK/game/hilo.html": () => a(() =>
            import ("./hilo-9e30a0a3.js"), []).then(t => t.default),
        "../../../locales/ur-PK/game/kemomultiplayer.html": () => a(() =>
            import ("./kemomultiplayer-24d326f2.js"), []).then(t => t.default),
        "../../../locales/ur-PK/game/limbo.html": () => a(() =>
            import ("./limbo-4bfc4d6a.js"), []).then(t => t.default),
        "../../../locales/ur-PK/game/mines.html": () => a(() =>
            import ("./mines-8198aa25.js"), []).then(t => t.default),
        "../../../locales/ur-PK/game/plinko.html": () => a(() =>
            import ("./plinko-8283c6c7.js"), []).then(t => t.default),
        "../../../locales/ur-PK/game/roulettemultiplayer.html": () => a(() =>
            import ("./roulettemultiplayer-4c8353dd.js"), []).then(t => t.default),
        "../../../locales/ur-PK/game/roulettesingle.html": () => a(() =>
            import ("./roulettesingle-dc9d0655.js"), []).then(t => t.default),
        "../../../locales/ur-PK/game/sword.html": () => a(() =>
            import ("./sword-b8843369.js"), []).then(t => t.default),
        "../../../locales/ur-PK/game/tower.html": () => a(() =>
            import ("./tower-7ddab528.js"), []).then(t => t.default),
        "../../../locales/ur-PK/game/ultimatedice.html": () => a(() =>
            import ("./ultimatedice-e375e4d6.js"), []).then(t => t.default),
        "../../../locales/ur-PK/game/videopoker.html": () => a(() =>
            import ("./videopoker-50756410.js"), []).then(t => t.default),
        "../../../locales/ur-PK/game/wheel.html": () => a(() =>
            import ("./wheel-c1508977.js"), []).then(t => t.default),
        "../../../locales/vi-VN/game/beauties.html": () => a(() =>
            import ("./beauties-2204d209.js"), []).then(t => t.default),
        "../../../locales/vi-VN/game/blackjack.html": () => a(() =>
            import ("./blackjack-05f86207.js"), []).then(t => t.default),
        "../../../locales/vi-VN/game/cave.html": () => a(() =>
            import ("./cave-e944599c.js"), []).then(t => t.default),
        "../../../locales/vi-VN/game/classicdice.html": () => a(() =>
            import ("./classicdice-c76d51c3.js"), []).then(t => t.default),
        "../../../locales/vi-VN/game/coinflip.html": () => a(() =>
            import ("./coinflip-04d70c84.js"), []).then(t => t.default),
        "../../../locales/vi-VN/game/crash.html": () => a(() =>
            import ("./crash-822811a4.js"), []).then(t => t.default),
        "../../../locales/vi-VN/game/egyptian.html": () => a(() =>
            import ("./egyptian-fc0cd452.js"), []).then(t => t.default),
        "../../../locales/vi-VN/game/general.html": () => a(() =>
            import ("./general-48c9acd6.js"), []).then(t => t.default),
        "../../../locales/vi-VN/game/hashdice.html": () => a(() =>
            import ("./hashdice-e16e6c31.js"), []).then(t => t.default),
        "../../../locales/vi-VN/game/hilo.html": () => a(() =>
            import ("./hilo-f8b03f67.js"), []).then(t => t.default),
        "../../../locales/vi-VN/game/kemomultiplayer.html": () => a(() =>
            import ("./kemomultiplayer-99f5b9a2.js"), []).then(t => t.default),
        "../../../locales/vi-VN/game/limbo.html": () => a(() =>
            import ("./limbo-d5ba84a9.js"), []).then(t => t.default),
        "../../../locales/vi-VN/game/mines.html": () => a(() =>
            import ("./mines-292a1c68.js"), []).then(t => t.default),
        "../../../locales/vi-VN/game/plinko.html": () => a(() =>
            import ("./plinko-37648039.js"), []).then(t => t.default),
        "../../../locales/vi-VN/game/roulettemultiplayer.html": () => a(() =>
            import ("./roulettemultiplayer-f2ad7954.js"), []).then(t => t.default),
        "../../../locales/vi-VN/game/roulettesingle.html": () => a(() =>
            import ("./roulettesingle-1c9246d7.js"), []).then(t => t.default),
        "../../../locales/vi-VN/game/sword.html": () => a(() =>
            import ("./sword-97590ba1.js"), []).then(t => t.default),
        "../../../locales/vi-VN/game/tower.html": () => a(() =>
            import ("./tower-5823bd0d.js"), []).then(t => t.default),
        "../../../locales/vi-VN/game/ultimatedice.html": () => a(() =>
            import ("./ultimatedice-8176c86e.js"), []).then(t => t.default),
        "../../../locales/vi-VN/game/videopoker.html": () => a(() =>
            import ("./videopoker-3a42b02d.js"), []).then(t => t.default),
        "../../../locales/vi-VN/game/wheel.html": () => a(() =>
            import ("./wheel-48004783.js"), []).then(t => t.default)
    }),
    Rt = {};
for (const t in ye) {
    const e = t.match(/locales\/(\S*)\/game/);
    if (e && e.length > 0) {
        const i = e[1],
            l = t.match(/\/game\/(\S*)\.html/);
        if (Rt[i] || (Rt[i] = {}), l && l.length > 0) {
            const o = l[1];
            Rt[i][o] = ye[t]
        }
    }
}
const Re = D({}, Rt),
    es = N.memo(function({
        htmlName: t,
        bodyLock: e
    }) {
        const {
            lang: i
        } = n.usePageContext(), [l, o] = L.useState("");
        L.useEffect(() => {
            const {
                fileInfo: m,
                enfile: c
            } = function(h) {
                let g = "en-US";
                return Object.keys(n.langsLocaleToISO6391).map(f => {
                    n.langsLocaleToISO6391[f] === h && (g = f)
                }), {
                    fileInfo: Re[g],
                    enfile: Re["en-US"]
                }
            }(i), u = m[t] || c[t];
            typeof u == "function" ? u().then(h => {
                o(h)
            }).catch(console.error) : o(u)
        }, [i]);
        const r = l.replace(/__BC_GITHUB__/g, n.env.GITHUB);
        return s.jsx(sl, {
            bodyLock: e,
            children: s.jsx("div", {
                dangerouslySetInnerHTML: {
                    __html: r
                }
            })
        })
    }),
    sl = N.memo(function(i) {
        var l = i,
            {
                className: t
            } = l,
            e = U(l, ["className"]);
        return s.jsx(n.ScrollView, D({
            className: w(ol, t)
        }, e))
    }),
    ol = "gt0clqb",
    Wt = function(t) {
        const {
            t: e
        } = n.useTranslation(), i = n.useAccount(), l = t.userId === i.userId, o = l ? i.name : t.userName, r = t.bigWin ? new n.Decimal(t.winAmount).toNumber() : new n.Decimal(t.winAmount).sub(new n.Decimal(t.betAmount)).toNumber(), m = !!l && t.showIssus;
        return s.jsxs("div", {
            className: cl,
            children: [s.jsx("div", {
                className: "top-bg",
                children: s.jsx("img", {
                    alt: "bg",
                    src: Wi
                })
            }), s.jsxs("div", {
                className: "main-detail",
                children: [s.jsxs("div", {
                    className: "top-result",
                    children: [t.shareNode ? t.shareNode : s.jsx(al, {
                        single: t.single || !1,
                        newShare: t.newShare || !1,
                        gameUnique: t.gameUnique,
                        betLog: t
                    }), s.jsxs("div", {
                        className: "top-profits",
                        children: [t.bigWin ? s.jsx("p", {
                            className: "t",
                            children: e("Total Winning")
                        }) : s.jsx("p", {
                            className: "t",
                            children: e("Profit")
                        }), s.jsxs("div", {
                            className: "c",
                            children: [s.jsx(n.BC.CoinFormat, {
                                sign: !0,
                                signStrs: ["+", "-"],
                                icon: !0,
                                className: w("number", "flex-center", "profit-num", "profit-detail", r > 0 && "is-win"),
                                amount: r,
                                name: t.currencyName
                            }), s.jsx("p", {
                                className: "cn",
                                children: n.systemStore.getAlias(t.currencyName)
                            })]
                        })]
                    }), s.jsxs("div", {
                        className: "top-amount-payout",
                        children: [s.jsxs("div", {
                            className: "top-it it-amount",
                            children: [s.jsx("p", {
                                className: "t",
                                children: e("Bet Amount")
                            }), s.jsx(n.BC.CoinFormat, {
                                icon: !0,
                                className: "number flex-center",
                                amount: Number(t.betAmount),
                                name: t.currencyName
                            })]
                        }), s.jsxs("div", {
                            className: "top-it it-payout",
                            children: [s.jsx("p", {
                                className: "t",
                                children: e("Payout")
                            }), s.jsxs("p", {
                                className: "d",
                                children: [Ta.toNonExponential(new n.Decimal(t.odds).div(1e4).toNumber()), " x"]
                            })]
                        }), s.jsx("div", {
                            className: "line"
                        })]
                    })]
                }), s.jsxs("div", {
                    className: "mid-info",
                    children: [s.jsxs("div", {
                        className: "top-line",
                        children: [s.jsx("div", {
                            className: "ball left"
                        }), s.jsx("div", {
                            className: "l"
                        }), s.jsx("div", {
                            className: "ball right"
                        })]
                    }), s.jsxs("div", {
                        className: "user-bet-info",
                        children: [s.jsx(n.BC.Avatar, {
                            userId: t.userId,
                            name: t.userName
                        }), s.jsxs("div", {
                            className: "bet-name",
                            children: [s.jsxs("div", {
                                className: "top-name",
                                children: [s.jsx(n.BC.UserInfo, {
                                    avatar: !1,
                                    userId: t.userId,
                                    name: o
                                }), s.jsx("p", {
                                    children: "On"
                                }), s.jsx("div", {
                                    className: "rt_time",
                                    children: new Date(t.betTime || t.time).toLocaleString()
                                })]
                            }), s.jsxs("div", {
                                className: "bet-id",
                                children: [s.jsxs("span", {
                                    className: "lt",
                                    children: [e("Bet ID"), ":"]
                                }), t.betId && s.jsx("img", {
                                    className: "verified",
                                    src: Zi
                                }), s.jsx("span", {
                                    className: "bd",
                                    children: t.betId
                                }), s.jsx(n.Icon, {
                                    className: "copy",
                                    name: "Copy",
                                    onClick: function() {
                                        n.utils.copyToClipboard(t.betId), n.notify(e("Copied"))
                                    }
                                })]
                            })]
                        })]
                    })]
                }), s.jsxs("div", {
                    className: "bot-game",
                    children: [s.jsx(rl, {
                        betInfo: t,
                        showIssus: m,
                        gameId: t.gameId
                    }), t.children]
                })]
            })]
        })
    },
    nl = Pt.memoize(t => n.http.get(`/home/game/info/?gameUnique=${t}`));

function rl({
    betInfo: t,
    showIssus: e,
    gameId: i
}) {
    const {
        data: l
    } = n.useAsync(() => nl(t.gameUnique));
    return l ? s.jsx(ml, {
        showIssus: e,
        gameId: i,
        data: l
    }) : s.jsx("div", {
        className: "game-info-loading",
        children: s.jsx(n.Loading, {})
    })
}
const ml = N.memo(function({
        showIssus: t,
        gameId: e,
        data: i
    }) {
        const {
            t: l
        } = n.useTranslation(), o = n.useNavigate();
        return s.jsxs("div", {
            className: "game-info-wrap",
            children: [s.jsxs("div", {
                className: "game-info",
                children: [i.thumbnail ? s.jsx("img", {
                    className: "thumbnail",
                    alt: "game-logo",
                    src: i.thumbnail
                }) : null, s.jsxs("div", {
                    className: "info-middle",
                    children: [s.jsx("div", {
                        className: "name",
                        children: i.fullName
                    }), t ? s.jsxs("div", {
                        className: "betid",
                        children: [s.jsx("div", {
                            className: "txt",
                            children: `${l("Game ID")}: ${e}`
                        }), s.jsx(n.Icon, {
                            onClick: () => {
                                if (t) try {
                                    n.utils.copyToClipboard(String(e)), n.notify(l("Copied"))
                                } catch (r) {
                                    n.notify(r)
                                }
                            },
                            name: "Copy"
                        })]
                    }) : s.jsx("div", {
                        children: i.providerName || "Unknown"
                    })]
                }), s.jsxs("button", {
                    className: "play",
                    onClick: function() {
                        i && (n.dialog.close(), o(i.gameUrl))
                    },
                    children: [s.jsx("span", {
                        children: l("Play Now")
                    }), s.jsx(n.Icon, {
                        name: "Arrow"
                    })]
                })]
            }), t && s.jsxs("div", {
                className: "tips",
                children: [s.jsx("p", {
                    children: l("Any issues, please contact the customer service for help and provide the game ID.")
                }), s.jsxs("button", {
                    className: "nav-item",
                    onClick: () => {
                        n.app.emit("live_support")
                    },
                    children: [s.jsx("div", {
                        className: "nav-item-left",
                        children: s.jsx(n.Icon, {
                            name: "Support"
                        })
                    }), s.jsx("div", {
                        className: "nav-item-right",
                        children: s.jsx("span", {
                            children: l("Live Support")
                        })
                    })]
                })]
            })]
        })
    }),
    cl = "g1eb67gr",
    Ve = t => {
        const {
            gameUnique: e,
            gameId: i,
            userId: l,
            betId: o
        } = t;
        return n.http.get(`/game/support/bet-log/detail/${e}/${i}/${l}/${o}/`)
    };
async function ul(t) {
    return await Ve(t) || (await n.utils.delay(3e3), Ve(t))
}

function Ct() {
    const t = n.useDialog();
    return e => t.push(s.jsx(Xt, {
        gameUnique: e.gameUnique,
        userId: e.userId,
        data: ul(e)
    }))
}
const dl = "m1vt75j3";

function Le(t, e) {
    return n.http.get(`/game/support/bet-log/all-bet/${t}/${e}/`)
}
const hl = ({
        list: t,
        gameUnique: e
    }) => {
        const {
            t: i
        } = n.useTranslation(), l = Ct();
        return s.jsx(n.ScrollView, {
            className: pl,
            children: t != null && t.length ? s.jsxs("table", {
                className: "table",
                children: [s.jsx("thead", {
                    children: s.jsxs("tr", {
                        children: [s.jsx("th", {
                            className: "num",
                            children: i("Bet ID")
                        }), s.jsx("th", {
                            className: "user",
                            children: i("Player")
                        }), s.jsx("th", {
                            className: "payout",
                            children: i("Payout")
                        }), s.jsx("th", {
                            className: "profit",
                            children: i("Profit")
                        })]
                    })
                }), s.jsx("tbody", {
                    children: t.map(o => s.jsxs("tr", {
                        children: [s.jsx("td", {
                            children: s.jsx("a", {
                                className: "betid",
                                onClick: () => l({
                                    gameUnique: e,
                                    gameId: o.gameId,
                                    betId: o.betId,
                                    userId: o.userId
                                }),
                                children: o.betId
                            })
                        }), s.jsx("td", {
                            children: s.jsx(n.BC.UserInfo, {
                                className: "username",
                                userId: o.userId,
                                name: o.userName,
                                avatar: !1
                            })
                        }), s.jsxs("td", {
                            className: "payout",
                            children: [(Math.round(100 * o.odds) / 100).toFixed(2), "×"]
                        }), s.jsx("td", {
                            className: "ellipsis " + (o.odds < 1 ? "is-lose" : "is-win"),
                            children: s.jsx(n.BC.CoinFormat, {
                                name: o.currencyName,
                                amount: o.profitAmount,
                                icon: !0,
                                sign: !0,
                                showName: !1
                            })
                        })]
                    }, o.betId))
                })]
            }) : s.jsx(n.Empty, {
                className: "nothing"
            })
        })
    },
    _l = _t(({
        gameUnique: t,
        gameId: e
    }) => {
        const {
            t: i
        } = n.useTranslation(), l = n.useAsyncNode(async () => {
            const o = await async function(m, c) {
                    let u;
                    try {
                        u = await Le(m, c)
                    } catch (h) {}
                    return u || (await n.utils.delay(3e3), Le(m, c))
                }(t, e),
                r = Oe.formatBetData(o.gv);
            return r.sort((m, c) => c.odds - m.odds), s.jsx(hl, {
                list: r,
                gameUnique: t
            })
        }, [t, e]);
        return s.jsx(n.Dialog, {
            title: i("All Players"),
            children: l
        })
    });

function We(t) {
    n.dialog.push(s.jsx(_l, D({}, t)))
}
const pl = "a45fdda",
    is = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: We
    }, Symbol.toStringTag, {
        value: "Module"
    }));
export {
    C as $, $l as A, Ql as B, ft as C, Ea as D, mi as E, et as F, Wt as G, Pl as H, xt as I, Di as J, Gl as K, Ra as L, Fl as M, Wl as N, La as O, Nl as P, k as Q, si as R, De as S, Jl as T, bt as U, Cl as V, Ml as W, Ul as X, Hl as Y, Xl as Z, Si as _, al as a, Be as a0, Ha as a1, oi as a2, ga as a3, is as a4, Tt as b, pi as c, wl as d, Dl as e, At as f, ha as g, fi as h, da as i, ra as j, Bl as k, Yl as l, Ma as m, Ka as n, es as o, Xi as p, Li as q, Zl as r, ts as s, Kl as t, jl as u, kl as v, xl as w, zl as x, Sl as y, ql as z
};