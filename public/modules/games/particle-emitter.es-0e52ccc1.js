var Go = Object.defineProperty,
    jo = Object.defineProperties;
var Ho = Object.getOwnPropertyDescriptors;
var Zt = Object.getOwnPropertySymbols;
var ps = Object.prototype.hasOwnProperty,
    ms = Object.prototype.propertyIsEnumerable;
var fs = (r, e, t) => e in r ? Go(r, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : r[e] = t,
    Kt = (r, e) => {
        for (var t in e || (e = {})) ps.call(e, t) && fs(r, t, e[t]);
        if (Zt)
            for (var t of Zt(e)) ms.call(e, t) && fs(r, t, e[t]);
        return r
    },
    gs = (r, e) => jo(r, Ho(e));
var ys = (r, e) => {
    var t = {};
    for (var i in r) ps.call(r, i) && e.indexOf(i) < 0 && (t[i] = r[i]);
    if (r != null && Zt)
        for (var i of Zt(r)) e.indexOf(i) < 0 && ms.call(r, i) && (t[i] = r[i]);
    return t
};
import {
    g as Xo,
    c as vr
} from "./vendor-8c02be2a.js";
import {
    R as Vo
} from "./AllPlayers-fab6a982.js";
var st = (r => (r[r.WEBGL_LEGACY = 0] = "WEBGL_LEGACY", r[r.WEBGL = 1] = "WEBGL", r[r.WEBGL2 = 2] = "WEBGL2", r))(st || {}),
    Jn = (r => (r[r.UNKNOWN = 0] = "UNKNOWN", r[r.WEBGL = 1] = "WEBGL", r[r.CANVAS = 2] = "CANVAS", r))(Jn || {}),
    ui = (r => (r[r.COLOR = 16384] = "COLOR", r[r.DEPTH = 256] = "DEPTH", r[r.STENCIL = 1024] = "STENCIL", r))(ui || {}),
    A = (r => (r[r.NORMAL = 0] = "NORMAL", r[r.ADD = 1] = "ADD", r[r.MULTIPLY = 2] = "MULTIPLY", r[r.SCREEN = 3] = "SCREEN", r[r.OVERLAY = 4] = "OVERLAY", r[r.DARKEN = 5] = "DARKEN", r[r.LIGHTEN = 6] = "LIGHTEN", r[r.COLOR_DODGE = 7] = "COLOR_DODGE", r[r.COLOR_BURN = 8] = "COLOR_BURN", r[r.HARD_LIGHT = 9] = "HARD_LIGHT", r[r.SOFT_LIGHT = 10] = "SOFT_LIGHT", r[r.DIFFERENCE = 11] = "DIFFERENCE", r[r.EXCLUSION = 12] = "EXCLUSION", r[r.HUE = 13] = "HUE", r[r.SATURATION = 14] = "SATURATION", r[r.COLOR = 15] = "COLOR", r[r.LUMINOSITY = 16] = "LUMINOSITY", r[r.NORMAL_NPM = 17] = "NORMAL_NPM", r[r.ADD_NPM = 18] = "ADD_NPM", r[r.SCREEN_NPM = 19] = "SCREEN_NPM", r[r.NONE = 20] = "NONE", r[r.SRC_OVER = 0] = "SRC_OVER", r[r.SRC_IN = 21] = "SRC_IN", r[r.SRC_OUT = 22] = "SRC_OUT", r[r.SRC_ATOP = 23] = "SRC_ATOP", r[r.DST_OVER = 24] = "DST_OVER", r[r.DST_IN = 25] = "DST_IN", r[r.DST_OUT = 26] = "DST_OUT", r[r.DST_ATOP = 27] = "DST_ATOP", r[r.ERASE = 26] = "ERASE", r[r.SUBTRACT = 28] = "SUBTRACT", r[r.XOR = 29] = "XOR", r))(A || {}),
    Ir = (r => (r[r.POINTS = 0] = "POINTS", r[r.LINES = 1] = "LINES", r[r.LINE_LOOP = 2] = "LINE_LOOP", r[r.LINE_STRIP = 3] = "LINE_STRIP", r[r.TRIANGLES = 4] = "TRIANGLES", r[r.TRIANGLE_STRIP = 5] = "TRIANGLE_STRIP", r[r.TRIANGLE_FAN = 6] = "TRIANGLE_FAN", r))(Ir || {}),
    E = (r => (r[r.RGBA = 6408] = "RGBA", r[r.RGB = 6407] = "RGB", r[r.RG = 33319] = "RG", r[r.RED = 6403] = "RED", r[r.RGBA_INTEGER = 36249] = "RGBA_INTEGER", r[r.RGB_INTEGER = 36248] = "RGB_INTEGER", r[r.RG_INTEGER = 33320] = "RG_INTEGER", r[r.RED_INTEGER = 36244] = "RED_INTEGER", r[r.ALPHA = 6406] = "ALPHA", r[r.LUMINANCE = 6409] = "LUMINANCE", r[r.LUMINANCE_ALPHA = 6410] = "LUMINANCE_ALPHA", r[r.DEPTH_COMPONENT = 6402] = "DEPTH_COMPONENT", r[r.DEPTH_STENCIL = 34041] = "DEPTH_STENCIL", r))(E || {}),
    Et = (r => (r[r.TEXTURE_2D = 3553] = "TEXTURE_2D", r[r.TEXTURE_CUBE_MAP = 34067] = "TEXTURE_CUBE_MAP", r[r.TEXTURE_2D_ARRAY = 35866] = "TEXTURE_2D_ARRAY", r[r.TEXTURE_CUBE_MAP_POSITIVE_X = 34069] = "TEXTURE_CUBE_MAP_POSITIVE_X", r[r.TEXTURE_CUBE_MAP_NEGATIVE_X = 34070] = "TEXTURE_CUBE_MAP_NEGATIVE_X", r[r.TEXTURE_CUBE_MAP_POSITIVE_Y = 34071] = "TEXTURE_CUBE_MAP_POSITIVE_Y", r[r.TEXTURE_CUBE_MAP_NEGATIVE_Y = 34072] = "TEXTURE_CUBE_MAP_NEGATIVE_Y", r[r.TEXTURE_CUBE_MAP_POSITIVE_Z = 34073] = "TEXTURE_CUBE_MAP_POSITIVE_Z", r[r.TEXTURE_CUBE_MAP_NEGATIVE_Z = 34074] = "TEXTURE_CUBE_MAP_NEGATIVE_Z", r))(Et || {}),
    L = (r => (r[r.UNSIGNED_BYTE = 5121] = "UNSIGNED_BYTE", r[r.UNSIGNED_SHORT = 5123] = "UNSIGNED_SHORT", r[r.UNSIGNED_SHORT_5_6_5 = 33635] = "UNSIGNED_SHORT_5_6_5", r[r.UNSIGNED_SHORT_4_4_4_4 = 32819] = "UNSIGNED_SHORT_4_4_4_4", r[r.UNSIGNED_SHORT_5_5_5_1 = 32820] = "UNSIGNED_SHORT_5_5_5_1", r[r.UNSIGNED_INT = 5125] = "UNSIGNED_INT", r[r.UNSIGNED_INT_10F_11F_11F_REV = 35899] = "UNSIGNED_INT_10F_11F_11F_REV", r[r.UNSIGNED_INT_2_10_10_10_REV = 33640] = "UNSIGNED_INT_2_10_10_10_REV", r[r.UNSIGNED_INT_24_8 = 34042] = "UNSIGNED_INT_24_8", r[r.UNSIGNED_INT_5_9_9_9_REV = 35902] = "UNSIGNED_INT_5_9_9_9_REV", r[r.BYTE = 5120] = "BYTE", r[r.SHORT = 5122] = "SHORT", r[r.INT = 5124] = "INT", r[r.FLOAT = 5126] = "FLOAT", r[r.FLOAT_32_UNSIGNED_INT_24_8_REV = 36269] = "FLOAT_32_UNSIGNED_INT_24_8_REV", r[r.HALF_FLOAT = 36193] = "HALF_FLOAT", r))(L || {}),
    ci = (r => (r[r.FLOAT = 0] = "FLOAT", r[r.INT = 1] = "INT", r[r.UINT = 2] = "UINT", r))(ci || {}),
    Ne = (r => (r[r.NEAREST = 0] = "NEAREST", r[r.LINEAR = 1] = "LINEAR", r))(Ne || {}),
    rs = (r => (r[r.CLAMP = 33071] = "CLAMP", r[r.REPEAT = 10497] = "REPEAT", r[r.MIRRORED_REPEAT = 33648] = "MIRRORED_REPEAT", r))(rs || {}),
    rt = (r => (r[r.OFF = 0] = "OFF", r[r.POW2 = 1] = "POW2", r[r.ON = 2] = "ON", r[r.ON_MANUAL = 3] = "ON_MANUAL", r))(rt || {}),
    He = (r => (r[r.NPM = 0] = "NPM", r[r.UNPACK = 1] = "UNPACK", r[r.PMA = 2] = "PMA", r[r.NO_PREMULTIPLIED_ALPHA = 0] = "NO_PREMULTIPLIED_ALPHA", r[r.PREMULTIPLY_ON_UPLOAD = 1] = "PREMULTIPLY_ON_UPLOAD", r[r.PREMULTIPLIED_ALPHA = 2] = "PREMULTIPLIED_ALPHA", r))(He || {}),
    $e = (r => (r[r.NO = 0] = "NO", r[r.YES = 1] = "YES", r[r.AUTO = 2] = "AUTO", r[r.BLEND = 0] = "BLEND", r[r.CLEAR = 1] = "CLEAR", r[r.BLIT = 2] = "BLIT", r))($e || {}),
    is = (r => (r[r.AUTO = 0] = "AUTO", r[r.MANUAL = 1] = "MANUAL", r))(is || {}),
    fe = (r => (r.LOW = "lowp", r.MEDIUM = "mediump", r.HIGH = "highp", r))(fe || {}),
    q = (r => (r[r.NONE = 0] = "NONE", r[r.SCISSOR = 1] = "SCISSOR", r[r.STENCIL = 2] = "STENCIL", r[r.SPRITE = 3] = "SPRITE", r[r.COLOR = 4] = "COLOR", r))(q || {}),
    $ = (r => (r[r.NONE = 0] = "NONE", r[r.LOW = 2] = "LOW", r[r.MEDIUM = 4] = "MEDIUM", r[r.HIGH = 8] = "HIGH", r))($ || {}),
    Ie = (r => (r[r.ELEMENT_ARRAY_BUFFER = 34963] = "ELEMENT_ARRAY_BUFFER", r[r.ARRAY_BUFFER = 34962] = "ARRAY_BUFFER", r[r.UNIFORM_BUFFER = 35345] = "UNIFORM_BUFFER", r))(Ie || {});
const Yo = {
        createCanvas: (r, e) => {
            const t = document.createElement("canvas");
            return t.width = r, t.height = e, t
        },
        getCanvasRenderingContext2D: () => CanvasRenderingContext2D,
        getWebGLRenderingContext: () => WebGLRenderingContext,
        getNavigator: () => navigator,
        getBaseUrl: () => {
            var r;
            return (r = document.baseURI) != null ? r : window.location.href
        },
        getFontFaceSet: () => document.fonts,
        fetch: (r, e) => fetch(r, e),
        parseXML: r => new DOMParser().parseFromString(r, "text/xml")
    },
    B = {
        ADAPTER: Yo,
        RESOLUTION: 1,
        RENDER_OPTIONS: {
            view: null,
            width: 800,
            height: 600,
            autoDensity: !1,
            backgroundColor: 0,
            backgroundAlpha: 1,
            clearBeforeRender: !0,
            antialias: !1,
            premultipliedAlpha: !0,
            preserveDrawingBuffer: !1,
            hello: !1
        },
        CREATE_IMAGE_BITMAP: !1,
        ROUND_PIXELS: !1
    };
var kr = /iPhone/i,
    xs = /iPod/i,
    _s = /iPad/i,
    vs = /\biOS-universal(?:.+)Mac\b/i,
    Gr = /\bAndroid(?:.+)Mobile\b/i,
    bs = /Android/i,
    ot = /(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i,
    Qt = /Silk/i,
    Me = /Windows Phone/i,
    Es = /\bWindows(?:.+)ARM\b/i,
    Ts = /BlackBerry/i,
    ws = /BB10/i,
    Ss = /Opera Mini/i,
    As = /\b(CriOS|Chrome)(?:.+)Mobile/i,
    Rs = /Mobile(?:.+)Firefox\b/i,
    Is = function(r) {
        return r !== void 0 && r.platform === "MacIntel" && typeof r.maxTouchPoints == "number" && r.maxTouchPoints > 1 && typeof MSStream == "undefined"
    };
const ft = function(r) {
    var e = {
        userAgent: "",
        platform: "",
        maxTouchPoints: 0
    };
    r || typeof navigator == "undefined" ? typeof r == "string" ? e.userAgent = r : r && r.userAgent && (e = {
        userAgent: r.userAgent,
        platform: r.platform,
        maxTouchPoints: r.maxTouchPoints || 0
    }) : e = {
        userAgent: navigator.userAgent,
        platform: navigator.platform,
        maxTouchPoints: navigator.maxTouchPoints || 0
    };
    var t = e.userAgent,
        i = t.split("[FBAN");
    i[1] !== void 0 && (t = i[0]), (i = t.split("Twitter"))[1] !== void 0 && (t = i[0]);
    var s = function(o) {
            return function(a) {
                return a.test(o)
            }
        }(t),
        n = {
            apple: {
                phone: s(kr) && !s(Me),
                ipod: s(xs),
                tablet: !s(kr) && (s(_s) || Is(e)) && !s(Me),
                universal: s(vs),
                device: (s(kr) || s(xs) || s(_s) || s(vs) || Is(e)) && !s(Me)
            },
            amazon: {
                phone: s(ot),
                tablet: !s(ot) && s(Qt),
                device: s(ot) || s(Qt)
            },
            android: {
                phone: !s(Me) && s(ot) || !s(Me) && s(Gr),
                tablet: !s(Me) && !s(ot) && !s(Gr) && (s(Qt) || s(bs)),
                device: !s(Me) && (s(ot) || s(Qt) || s(Gr) || s(bs)) || s(/\bokhttp\b/i)
            },
            windows: {
                phone: s(Me),
                tablet: s(Es),
                device: s(Me) || s(Es)
            },
            other: {
                blackberry: s(Ts),
                blackberry10: s(ws),
                opera: s(Ss),
                firefox: s(Rs),
                chrome: s(As),
                device: s(Ts) || s(ws) || s(Ss) || s(Rs) || s(As)
            },
            any: !1,
            phone: !1,
            tablet: !1
        };
    return n.any = n.apple.device || n.android.device || n.windows.device || n.other.device, n.phone = n.apple.phone || n.android.phone || n.windows.phone, n.tablet = n.apple.tablet || n.android.tablet || n.windows.tablet, n
}(globalThis.navigator);
B.RETINA_PREFIX = /@([0-9\.]+)x/, B.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT = !1;
var eo = {
    exports: {}
};
(function(r) {
    var e = Object.prototype.hasOwnProperty,
        t = "~";

    function i() {}

    function s(h, l, u) {
        this.fn = h, this.context = l, this.once = u || !1
    }

    function n(h, l, u, c, d) {
        if (typeof u != "function") throw new TypeError("The listener must be a function");
        var p = new s(u, c || h, d),
            f = t ? t + l : l;
        return h._events[f] ? h._events[f].fn ? h._events[f] = [h._events[f], p] : h._events[f].push(p) : (h._events[f] = p, h._eventsCount++), h
    }

    function o(h, l) {
        --h._eventsCount == 0 ? h._events = new i : delete h._events[l]
    }

    function a() {
        this._events = new i, this._eventsCount = 0
    }
    Object.create && (i.prototype = Object.create(null), new i().__proto__ || (t = !1)), a.prototype.eventNames = function() {
        var h, l, u = [];
        if (this._eventsCount === 0) return u;
        for (l in h = this._events) e.call(h, l) && u.push(t ? l.slice(1) : l);
        return Object.getOwnPropertySymbols ? u.concat(Object.getOwnPropertySymbols(h)) : u
    }, a.prototype.listeners = function(h) {
        var l = t ? t + h : h,
            u = this._events[l];
        if (!u) return [];
        if (u.fn) return [u.fn];
        for (var c = 0, d = u.length, p = new Array(d); c < d; c++) p[c] = u[c].fn;
        return p
    }, a.prototype.listenerCount = function(h) {
        var l = t ? t + h : h,
            u = this._events[l];
        return u ? u.fn ? 1 : u.length : 0
    }, a.prototype.emit = function(h, l, u, c, d, p) {
        var f = t ? t + h : h;
        if (!this._events[f]) return !1;
        var y, m, g = this._events[f],
            _ = arguments.length;
        if (g.fn) {
            switch (g.once && this.removeListener(h, g.fn, void 0, !0), _) {
                case 1:
                    return g.fn.call(g.context), !0;
                case 2:
                    return g.fn.call(g.context, l), !0;
                case 3:
                    return g.fn.call(g.context, l, u), !0;
                case 4:
                    return g.fn.call(g.context, l, u, c), !0;
                case 5:
                    return g.fn.call(g.context, l, u, c, d), !0;
                case 6:
                    return g.fn.call(g.context, l, u, c, d, p), !0
            }
            for (m = 1, y = new Array(_ - 1); m < _; m++) y[m - 1] = arguments[m];
            g.fn.apply(g.context, y)
        } else {
            var x, b = g.length;
            for (m = 0; m < b; m++) switch (g[m].once && this.removeListener(h, g[m].fn, void 0, !0), _) {
                case 1:
                    g[m].fn.call(g[m].context);
                    break;
                case 2:
                    g[m].fn.call(g[m].context, l);
                    break;
                case 3:
                    g[m].fn.call(g[m].context, l, u);
                    break;
                case 4:
                    g[m].fn.call(g[m].context, l, u, c);
                    break;
                default:
                    if (!y)
                        for (x = 1, y = new Array(_ - 1); x < _; x++) y[x - 1] = arguments[x];
                    g[m].fn.apply(g[m].context, y)
            }
        }
        return !0
    }, a.prototype.on = function(h, l, u) {
        return n(this, h, l, u, !1)
    }, a.prototype.once = function(h, l, u) {
        return n(this, h, l, u, !0)
    }, a.prototype.removeListener = function(h, l, u, c) {
        var d = t ? t + h : h;
        if (!this._events[d]) return this;
        if (!l) return o(this, d), this;
        var p = this._events[d];
        if (p.fn) p.fn !== l || c && !p.once || u && p.context !== u || o(this, d);
        else {
            for (var f = 0, y = [], m = p.length; f < m; f++)(p[f].fn !== l || c && !p[f].once || u && p[f].context !== u) && y.push(p[f]);
            y.length ? this._events[d] = y.length === 1 ? y[0] : y : o(this, d)
        }
        return this
    }, a.prototype.removeAllListeners = function(h) {
        var l;
        return h ? (l = t ? t + h : h, this._events[l] && o(this, l)) : (this._events = new i, this._eventsCount = 0), this
    }, a.prototype.off = a.prototype.removeListener, a.prototype.addListener = a.prototype.on, a.prefixed = t, a.EventEmitter = a, r.exports = a
})(eo);
const Fr = Xo(eo.exports);
var Cs = {
    exports: {}
};

function Jt(r, e, t) {
    t = t || 2;
    var i, s, n, o, a, h, l, u = e && e.length,
        c = u ? e[0] * t : r.length,
        d = Ms(r, 0, c, t, !0),
        p = [];
    if (!d || d.next === d.prev) return p;
    if (u && (d = function(y, m, g, _) {
            var x, b, I, C = [];
            for (x = 0, b = m.length; x < b; x++)(I = Ms(y, m[x] * _, x < b - 1 ? m[x + 1] * _ : y.length, _, !1)) === I.next && (I.steiner = !0), C.push(Jo(I));
            for (C.sort(Zo), x = 0; x < C.length; x++) g = Ko(C[x], g);
            return g
        }(r, e, d, t)), r.length > 80 * t) {
        i = n = r[0], s = o = r[1];
        for (var f = t; f < c; f += t)(a = r[f]) < i && (i = a), (h = r[f + 1]) < s && (s = h), a > n && (n = a), h > o && (o = h);
        l = (l = Math.max(n - i, o - s)) !== 0 ? 32767 / l : 0
    }
    return Gt(d, p, t, i, s, l, 0), p
}

function Ms(r, e, t, i, s) {
    var n, o;
    if (s === pi(r, e, t, i) > 0)
        for (n = e; n < t; n += i) o = Ps(n, r[n], r[n + 1], o);
    else
        for (n = t - i; n >= e; n -= i) o = Ps(n, r[n], r[n + 1], o);
    return o && Br(o, o.next) && (Ht(o), o = o.next), o
}

function it(r, e) {
    if (!r) return r;
    e || (e = r);
    var t, i = r;
    do
        if (t = !1, i.steiner || !Br(i, i.next) && Y(i.prev, i, i.next) !== 0) i = i.next;
        else {
            if (Ht(i), (i = e = i.prev) === i.next) break;
            t = !0
        }
    while (t || i !== e);
    return e
}

function Gt(r, e, t, i, s, n, o) {
    if (r) {
        !o && n && function(u, c, d, p) {
            var f = u;
            do f.z === 0 && (f.z = di(f.x, f.y, c, d, p)), f.prevZ = f.prev, f.nextZ = f.next, f = f.next; while (f !== u);
            f.prevZ.nextZ = null, f.prevZ = null,
                function(y) {
                    var m, g, _, x, b, I, C, T, w = 1;
                    do {
                        for (g = y, y = null, b = null, I = 0; g;) {
                            for (I++, _ = g, C = 0, m = 0; m < w && (C++, _ = _.nextZ); m++);
                            for (T = w; C > 0 || T > 0 && _;) C !== 0 && (T === 0 || !_ || g.z <= _.z) ? (x = g, g = g.nextZ, C--) : (x = _, _ = _.nextZ, T--), b ? b.nextZ = x : y = x, x.prevZ = b, b = x;
                            g = _
                        }
                        b.nextZ = null, w *= 2
                    } while (I > 1)
                }(f)
        }(r, i, s, n);
        for (var a, h, l = r; r.prev !== r.next;)
            if (a = r.prev, h = r.next, n ? zo(r, i, s, n) : Wo(r)) e.push(a.i / t | 0), e.push(r.i / t | 0), e.push(h.i / t | 0), Ht(r), r = h.next, l = h.next;
            else if ((r = h) === l) {
            o ? o === 1 ? Gt(r = $o(it(r), e, t), e, t, i, s, n, 2) : o === 2 && qo(r, e, t, i, s, n) : Gt(it(r), e, t, i, s, n, 1);
            break
        }
    }
}

function Wo(r) {
    var e = r.prev,
        t = r,
        i = r.next;
    if (Y(e, t, i) >= 0) return !1;
    for (var s = e.x, n = t.x, o = i.x, a = e.y, h = t.y, l = i.y, u = s < n ? s < o ? s : o : n < o ? n : o, c = a < h ? a < l ? a : l : h < l ? h : l, d = s > n ? s > o ? s : o : n > o ? n : o, p = a > h ? a > l ? a : l : h > l ? h : l, f = i.next; f !== e;) {
        if (f.x >= u && f.x <= d && f.y >= c && f.y <= p && _t(s, a, n, h, o, l, f.x, f.y) && Y(f.prev, f, f.next) >= 0) return !1;
        f = f.next
    }
    return !0
}

function zo(r, e, t, i) {
    var s = r.prev,
        n = r,
        o = r.next;
    if (Y(s, n, o) >= 0) return !1;
    for (var a = s.x, h = n.x, l = o.x, u = s.y, c = n.y, d = o.y, p = a < h ? a < l ? a : l : h < l ? h : l, f = u < c ? u < d ? u : d : c < d ? c : d, y = a > h ? a > l ? a : l : h > l ? h : l, m = u > c ? u > d ? u : d : c > d ? c : d, g = di(p, f, e, t, i), _ = di(y, m, e, t, i), x = r.prevZ, b = r.nextZ; x && x.z >= g && b && b.z <= _;) {
        if (x.x >= p && x.x <= y && x.y >= f && x.y <= m && x !== s && x !== o && _t(a, u, h, c, l, d, x.x, x.y) && Y(x.prev, x, x.next) >= 0 || (x = x.prevZ, b.x >= p && b.x <= y && b.y >= f && b.y <= m && b !== s && b !== o && _t(a, u, h, c, l, d, b.x, b.y) && Y(b.prev, b, b.next) >= 0)) return !1;
        b = b.nextZ
    }
    for (; x && x.z >= g;) {
        if (x.x >= p && x.x <= y && x.y >= f && x.y <= m && x !== s && x !== o && _t(a, u, h, c, l, d, x.x, x.y) && Y(x.prev, x, x.next) >= 0) return !1;
        x = x.prevZ
    }
    for (; b && b.z <= _;) {
        if (b.x >= p && b.x <= y && b.y >= f && b.y <= m && b !== s && b !== o && _t(a, u, h, c, l, d, b.x, b.y) && Y(b.prev, b, b.next) >= 0) return !1;
        b = b.nextZ
    }
    return !0
}

function $o(r, e, t) {
    var i = r;
    do {
        var s = i.prev,
            n = i.next.next;
        !Br(s, n) && to(s, i, i.next, n) && jt(s, n) && jt(n, s) && (e.push(s.i / t | 0), e.push(i.i / t | 0), e.push(n.i / t | 0), Ht(i), Ht(i.next), i = r = n), i = i.next
    } while (i !== r);
    return it(i)
}

function qo(r, e, t, i, s, n) {
    var o = r;
    do {
        for (var a = o.next.next; a !== o.prev;) {
            if (o.i !== a.i && ea(o, a)) {
                var h = ro(o, a);
                return o = it(o, o.next), h = it(h, h.next), Gt(o, e, t, i, s, n, 0), void Gt(h, e, t, i, s, n, 0)
            }
            a = a.next
        }
        o = o.next
    } while (o !== r)
}

function Zo(r, e) {
    return r.x - e.x
}

function Ko(r, e) {
    var t = function(s, n) {
        var o, a = n,
            h = s.x,
            l = s.y,
            u = -1 / 0;
        do {
            if (l <= a.y && l >= a.next.y && a.next.y !== a.y) {
                var c = a.x + (l - a.y) * (a.next.x - a.x) / (a.next.y - a.y);
                if (c <= h && c > u && (u = c, o = a.x < a.next.x ? a : a.next, c === h)) return o
            }
            a = a.next
        } while (a !== n);
        if (!o) return null;
        var d, p = o,
            f = o.x,
            y = o.y,
            m = 1 / 0;
        a = o;
        do h >= a.x && a.x >= f && h !== a.x && _t(l < y ? h : u, l, f, y, l < y ? u : h, l, a.x, a.y) && (d = Math.abs(l - a.y) / (h - a.x), jt(a, s) && (d < m || d === m && (a.x > o.x || a.x === o.x && Qo(o, a))) && (o = a, m = d)), a = a.next; while (a !== p);
        return o
    }(r, e);
    if (!t) return e;
    var i = ro(t, r);
    return it(i, i.next), it(t, t.next)
}

function Qo(r, e) {
    return Y(r.prev, r, e.prev) < 0 && Y(e.next, r, r.next) < 0
}

function di(r, e, t, i, s) {
    return (r = 1431655765 & ((r = 858993459 & ((r = 252645135 & ((r = 16711935 & ((r = (r - t) * s | 0) | r << 8)) | r << 4)) | r << 2)) | r << 1)) | (e = 1431655765 & ((e = 858993459 & ((e = 252645135 & ((e = 16711935 & ((e = (e - i) * s | 0) | e << 8)) | e << 4)) | e << 2)) | e << 1)) << 1
}

function Jo(r) {
    var e = r,
        t = r;
    do(e.x < t.x || e.x === t.x && e.y < t.y) && (t = e), e = e.next; while (e !== r);
    return t
}

function _t(r, e, t, i, s, n, o, a) {
    return (s - o) * (e - a) >= (r - o) * (n - a) && (r - o) * (i - a) >= (t - o) * (e - a) && (t - o) * (n - a) >= (s - o) * (i - a)
}

function ea(r, e) {
    return r.next.i !== e.i && r.prev.i !== e.i && ! function(t, i) {
        var s = t;
        do {
            if (s.i !== t.i && s.next.i !== t.i && s.i !== i.i && s.next.i !== i.i && to(s, s.next, t, i)) return !0;
            s = s.next
        } while (s !== t);
        return !1
    }(r, e) && (jt(r, e) && jt(e, r) && function(t, i) {
        var s = t,
            n = !1,
            o = (t.x + i.x) / 2,
            a = (t.y + i.y) / 2;
        do s.y > a != s.next.y > a && s.next.y !== s.y && o < (s.next.x - s.x) * (a - s.y) / (s.next.y - s.y) + s.x && (n = !n), s = s.next; while (s !== t);
        return n
    }(r, e) && (Y(r.prev, r, e.prev) || Y(r, e.prev, e)) || Br(r, e) && Y(r.prev, r, r.next) > 0 && Y(e.prev, e, e.next) > 0)
}

function Y(r, e, t) {
    return (e.y - r.y) * (t.x - e.x) - (e.x - r.x) * (t.y - e.y)
}

function Br(r, e) {
    return r.x === e.x && r.y === e.y
}

function to(r, e, t, i) {
    var s = tr(Y(r, e, t)),
        n = tr(Y(r, e, i)),
        o = tr(Y(t, i, r)),
        a = tr(Y(t, i, e));
    return s !== n && o !== a || !(s !== 0 || !er(r, t, e)) || !(n !== 0 || !er(r, i, e)) || !(o !== 0 || !er(t, r, i)) || !(a !== 0 || !er(t, e, i))
}

function er(r, e, t) {
    return e.x <= Math.max(r.x, t.x) && e.x >= Math.min(r.x, t.x) && e.y <= Math.max(r.y, t.y) && e.y >= Math.min(r.y, t.y)
}

function tr(r) {
    return r > 0 ? 1 : r < 0 ? -1 : 0
}

function jt(r, e) {
    return Y(r.prev, r, r.next) < 0 ? Y(r, e, r.next) >= 0 && Y(r, r.prev, e) >= 0 : Y(r, e, r.prev) < 0 || Y(r, r.next, e) < 0
}

function ro(r, e) {
    var t = new fi(r.i, r.x, r.y),
        i = new fi(e.i, e.x, e.y),
        s = r.next,
        n = e.prev;
    return r.next = e, e.prev = r, t.next = s, s.prev = t, i.next = t, t.prev = i, n.next = i, i.prev = n, i
}

function Ps(r, e, t, i) {
    var s = new fi(r, e, t);
    return i ? (s.next = i.next, s.prev = i, i.next.prev = s, i.next = s) : (s.prev = s, s.next = s), s
}

function Ht(r) {
    r.next.prev = r.prev, r.prev.next = r.next, r.prevZ && (r.prevZ.nextZ = r.nextZ), r.nextZ && (r.nextZ.prevZ = r.prevZ)
}

function fi(r, e, t) {
    this.i = r, this.x = e, this.y = t, this.prev = null, this.next = null, this.z = 0, this.prevZ = null, this.nextZ = null, this.steiner = !1
}

function pi(r, e, t, i) {
    for (var s = 0, n = e, o = t - i; n < t; n += i) s += (r[o] - r[n]) * (r[n + 1] + r[o + 1]), o = n;
    return s
}
Cs.exports = Jt, Cs.exports.default = Jt, Jt.deviation = function(r, e, t, i) {
    var s = e && e.length,
        n = s ? e[0] * t : r.length,
        o = Math.abs(pi(r, 0, n, t));
    if (s)
        for (var a = 0, h = e.length; a < h; a++) {
            var l = e[a] * t,
                u = a < h - 1 ? e[a + 1] * t : r.length;
            o -= Math.abs(pi(r, l, u, t))
        }
    var c = 0;
    for (a = 0; a < i.length; a += 3) {
        var d = i[a] * t,
            p = i[a + 1] * t,
            f = i[a + 2] * t;
        c += Math.abs((r[d] - r[f]) * (r[p + 1] - r[d + 1]) - (r[d] - r[p]) * (r[f + 1] - r[d + 1]))
    }
    return o === 0 && c === 0 ? 0 : Math.abs((c - o) / o)
}, Jt.flatten = function(r) {
    for (var e = r[0][0].length, t = {
            vertices: [],
            holes: [],
            dimensions: e
        }, i = 0, s = 0; s < r.length; s++) {
        for (var n = 0; n < r[s].length; n++)
            for (var o = 0; o < e; o++) t.vertices.push(r[s][n][o]);
        s > 0 && (i += r[s - 1].length, t.holes.push(i))
    }
    return t
};
var Mt, rr, mi = {
    exports: {}
}; /*! https://mths.be/punycode v1.4.1 by @mathias */
Mt = mi, rr = mi.exports,
    function(r) {
        var e = rr && !rr.nodeType && rr,
            t = Mt && !Mt.nodeType && Mt,
            i = typeof vr == "object" && vr;
        i.global !== i && i.window !== i && i.self !== i || (r = i);
        var s, n, o = 2147483647,
            a = 36,
            h = 1,
            l = 26,
            u = 38,
            c = 700,
            d = 72,
            p = 128,
            f = "-",
            y = /^xn--/,
            m = /[^\x20-\x7E]/,
            g = /[\x2E\u3002\uFF0E\uFF61]/g,
            _ = {
                overflow: "Overflow: input needs wider integers to process",
                "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                "invalid-input": "Invalid input"
            },
            x = a - h,
            b = Math.floor,
            I = String.fromCharCode;

        function C(S) {
            throw new RangeError(_[S])
        }

        function T(S, R) {
            for (var D = S.length, X = []; D--;) X[D] = R(S[D]);
            return X
        }

        function w(S, R) {
            var D = S.split("@"),
                X = "";
            return D.length > 1 && (X = D[0] + "@", S = D[1]), X + T((S = S.replace(g, ".")).split("."), R).join(".")
        }

        function M(S) {
            for (var R, D, X = [], ne = 0, le = S.length; ne < le;)(R = S.charCodeAt(ne++)) >= 55296 && R <= 56319 && ne < le ? (64512 & (D = S.charCodeAt(ne++))) == 56320 ? X.push(((1023 & R) << 10) + (1023 & D) + 65536) : (X.push(R), ne--) : X.push(R);
            return X
        }

        function ee(S) {
            return T(S, function(R) {
                var D = "";
                return R > 65535 && (D += I((R -= 65536) >>> 10 & 1023 | 55296), R = 56320 | 1023 & R), D += I(R)
            }).join("")
        }

        function he(S, R) {
            return S + 22 + 75 * (S < 26) - ((R != 0) << 5)
        }

        function v(S, R, D) {
            var X = 0;
            for (S = D ? b(S / c) : S >> 1, S += b(S / R); S > x * l >> 1; X += a) S = b(S / x);
            return b(X + (x + 1) * S / (S + u))
        }

        function F(S) {
            var R, D, X, ne, le, Z, ue, be, Be, Xe, oe, Ee = [],
                nt = S.length,
                ce = 0,
                Ve = p,
                pe = d;
            for ((D = S.lastIndexOf(f)) < 0 && (D = 0), X = 0; X < D; ++X) S.charCodeAt(X) >= 128 && C("not-basic"), Ee.push(S.charCodeAt(X));
            for (ne = D > 0 ? D + 1 : 0; ne < nt;) {
                for (le = ce, Z = 1, ue = a; ne >= nt && C("invalid-input"), ((be = (oe = S.charCodeAt(ne++)) - 48 < 10 ? oe - 22 : oe - 65 < 26 ? oe - 65 : oe - 97 < 26 ? oe - 97 : a) >= a || be > b((o - ce) / Z)) && C("overflow"), ce += be * Z, !(be < (Be = ue <= pe ? h : ue >= pe + l ? l : ue - pe)); ue += a) Z > b(o / (Xe = a - Be)) && C("overflow"), Z *= Xe;
                pe = v(ce - le, R = Ee.length + 1, le == 0), b(ce / R) > o - Ve && C("overflow"), Ve += b(ce / R), ce %= R, Ee.splice(ce++, 0, Ve)
            }
            return ee(Ee)
        }

        function ie(S) {
            var R, D, X, ne, le, Z, ue, be, Be, Xe, oe, Ee, nt, ce, Ve, pe = [];
            for (Ee = (S = M(S)).length, R = p, D = 0, le = d, Z = 0; Z < Ee; ++Z)(oe = S[Z]) < 128 && pe.push(I(oe));
            for (X = ne = pe.length, ne && pe.push(f); X < Ee;) {
                for (ue = o, Z = 0; Z < Ee; ++Z)(oe = S[Z]) >= R && oe < ue && (ue = oe);
                for (ue - R > b((o - D) / (nt = X + 1)) && C("overflow"), D += (ue - R) * nt, R = ue, Z = 0; Z < Ee; ++Z)
                    if ((oe = S[Z]) < R && ++D > o && C("overflow"), oe == R) {
                        for (be = D, Be = a; !(be < (Xe = Be <= le ? h : Be >= le + l ? l : Be - le)); Be += a) Ve = be - Xe, ce = a - Xe, pe.push(I(he(Xe + Ve % ce, 0))), be = b(Ve / ce);
                        pe.push(I(he(be, 0))), le = v(D, nt, X == ne), D = 0, ++X
                    }++D, ++R
            }
            return pe.join("")
        }
        if (s = {
                version: "1.4.1",
                ucs2: {
                    decode: M,
                    encode: ee
                },
                decode: F,
                encode: ie,
                toASCII: function(S) {
                    return w(S, function(R) {
                        return m.test(R) ? "xn--" + ie(R) : R
                    })
                },
                toUnicode: function(S) {
                    return w(S, function(R) {
                        return y.test(R) ? F(R.slice(4).toLowerCase()) : R
                    })
                }
            }, e && t)
            if (Mt.exports == e) t.exports = s;
            else
                for (n in s) s.hasOwnProperty(n) && (e[n] = s[n]);
        else r.punycode = s
    }(vr);
var P, ta = mi.exports,
    ra = Error,
    ia = EvalError,
    sa = RangeError,
    na = ReferenceError,
    io = SyntaxError,
    Wt = TypeError,
    oa = URIError,
    Ns = typeof Symbol != "undefined" && Symbol,
    aa = function() {
        if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function") return !1;
        if (typeof Symbol.iterator == "symbol") return !0;
        var r = {},
            e = Symbol("test"),
            t = Object(e);
        if (typeof e == "string" || Object.prototype.toString.call(e) !== "[object Symbol]" || Object.prototype.toString.call(t) !== "[object Symbol]") return !1;
        for (e in r[e] = 42, r) return !1;
        if (typeof Object.keys == "function" && Object.keys(r).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(r).length !== 0) return !1;
        var i = Object.getOwnPropertySymbols(r);
        if (i.length !== 1 || i[0] !== e || !Object.prototype.propertyIsEnumerable.call(r, e)) return !1;
        if (typeof Object.getOwnPropertyDescriptor == "function") {
            var s = Object.getOwnPropertyDescriptor(r, e);
            if (s.value !== 42 || s.enumerable !== !0) return !1
        }
        return !0
    },
    jr = {
        __proto__: null,
        foo: {}
    },
    ha = Object,
    la = Object.prototype.toString,
    ua = Math.max,
    Os = function(r, e) {
        for (var t = [], i = 0; i < r.length; i += 1) t[i] = r[i];
        for (var s = 0; s < e.length; s += 1) t[s + r.length] = e[s];
        return t
    },
    ca = function(r) {
        var e = this;
        if (typeof e != "function" || la.apply(e) !== "[object Function]") throw new TypeError("Function.prototype.bind called on incompatible " + e);
        for (var t, i = function(h, l) {
                for (var u = [], c = l || 0, d = 0; c < h.length; c += 1, d += 1) u[d] = h[c];
                return u
            }(arguments, 1), s = ua(0, e.length - i.length), n = [], o = 0; o < s; o++) n[o] = "$" + o;
        if (t = Function("binder", "return function (" + function(h, l) {
                for (var u = "", c = 0; c < h.length; c += 1) u += h[c], c + 1 < h.length && (u += l);
                return u
            }(n, ",") + "){ return binder.apply(this,arguments); }")(function() {
                if (this instanceof t) {
                    var h = e.apply(this, Os(i, arguments));
                    return Object(h) === h ? h : this
                }
                return e.apply(r, Os(i, arguments))
            }), e.prototype) {
            var a = function() {};
            a.prototype = e.prototype, t.prototype = new a, a.prototype = null
        }
        return t
    },
    ss = Function.prototype.bind || ca,
    da = Function.prototype.call,
    fa = Object.prototype.hasOwnProperty,
    pa = ss.call(da, fa),
    ma = ra,
    ga = ia,
    ya = sa,
    xa = na,
    vt = io,
    Tt = Wt,
    _a = oa,
    so = Function,
    Hr = function(r) {
        try {
            return so('"use strict"; return (' + r + ").constructor;")()
        } catch (e) {}
    },
    et = Object.getOwnPropertyDescriptor;
if (et) try {
    et({}, "")
} catch (r) {
    et = null
}
var Xr = function() {
        throw new Tt
    },
    va = et ? function() {
        try {
            return Xr
        } catch (r) {
            try {
                return et(arguments, "callee").get
            } catch (e) {
                return Xr
            }
        }
    }() : Xr,
    at = typeof Ns == "function" && typeof Symbol == "function" && typeof Ns("foo") == "symbol" && typeof Symbol("bar") == "symbol" && aa(),
    ba = {
        __proto__: jr
    }.foo === jr.foo && !(jr instanceof ha),
    Q = Object.getPrototypeOf || (ba ? function(r) {
        return r.__proto__
    } : null),
    pt = {},
    Ea = typeof Uint8Array != "undefined" && Q ? Q(Uint8Array) : P,
    tt = {
        __proto__: null,
        "%AggregateError%": typeof AggregateError == "undefined" ? P : AggregateError,
        "%Array%": Array,
        "%ArrayBuffer%": typeof ArrayBuffer == "undefined" ? P : ArrayBuffer,
        "%ArrayIteratorPrototype%": at && Q ? Q([][Symbol.iterator]()) : P,
        "%AsyncFromSyncIteratorPrototype%": P,
        "%AsyncFunction%": pt,
        "%AsyncGenerator%": pt,
        "%AsyncGeneratorFunction%": pt,
        "%AsyncIteratorPrototype%": pt,
        "%Atomics%": typeof Atomics == "undefined" ? P : Atomics,
        "%BigInt%": typeof BigInt == "undefined" ? P : BigInt,
        "%BigInt64Array%": typeof BigInt64Array == "undefined" ? P : BigInt64Array,
        "%BigUint64Array%": typeof BigUint64Array == "undefined" ? P : BigUint64Array,
        "%Boolean%": Boolean,
        "%DataView%": typeof DataView == "undefined" ? P : DataView,
        "%Date%": Date,
        "%decodeURI%": decodeURI,
        "%decodeURIComponent%": decodeURIComponent,
        "%encodeURI%": encodeURI,
        "%encodeURIComponent%": encodeURIComponent,
        "%Error%": ma,
        "%eval%": eval,
        "%EvalError%": ga,
        "%Float32Array%": typeof Float32Array == "undefined" ? P : Float32Array,
        "%Float64Array%": typeof Float64Array == "undefined" ? P : Float64Array,
        "%FinalizationRegistry%": typeof FinalizationRegistry == "undefined" ? P : FinalizationRegistry,
        "%Function%": so,
        "%GeneratorFunction%": pt,
        "%Int8Array%": typeof Int8Array == "undefined" ? P : Int8Array,
        "%Int16Array%": typeof Int16Array == "undefined" ? P : Int16Array,
        "%Int32Array%": typeof Int32Array == "undefined" ? P : Int32Array,
        "%isFinite%": isFinite,
        "%isNaN%": isNaN,
        "%IteratorPrototype%": at && Q ? Q(Q([][Symbol.iterator]())) : P,
        "%JSON%": typeof JSON == "object" ? JSON : P,
        "%Map%": typeof Map == "undefined" ? P : Map,
        "%MapIteratorPrototype%": typeof Map != "undefined" && at && Q ? Q(new Map()[Symbol.iterator]()) : P,
        "%Math%": Math,
        "%Number%": Number,
        "%Object%": Object,
        "%parseFloat%": parseFloat,
        "%parseInt%": parseInt,
        "%Promise%": typeof Promise == "undefined" ? P : Promise,
        "%Proxy%": typeof Proxy == "undefined" ? P : Proxy,
        "%RangeError%": ya,
        "%ReferenceError%": xa,
        "%Reflect%": typeof Reflect == "undefined" ? P : Reflect,
        "%RegExp%": RegExp,
        "%Set%": typeof Set == "undefined" ? P : Set,
        "%SetIteratorPrototype%": typeof Set != "undefined" && at && Q ? Q(new Set()[Symbol.iterator]()) : P,
        "%SharedArrayBuffer%": typeof SharedArrayBuffer == "undefined" ? P : SharedArrayBuffer,
        "%String%": String,
        "%StringIteratorPrototype%": at && Q ? Q("" [Symbol.iterator]()) : P,
        "%Symbol%": at ? Symbol : P,
        "%SyntaxError%": vt,
        "%ThrowTypeError%": va,
        "%TypedArray%": Ea,
        "%TypeError%": Tt,
        "%Uint8Array%": typeof Uint8Array == "undefined" ? P : Uint8Array,
        "%Uint8ClampedArray%": typeof Uint8ClampedArray == "undefined" ? P : Uint8ClampedArray,
        "%Uint16Array%": typeof Uint16Array == "undefined" ? P : Uint16Array,
        "%Uint32Array%": typeof Uint32Array == "undefined" ? P : Uint32Array,
        "%URIError%": _a,
        "%WeakMap%": typeof WeakMap == "undefined" ? P : WeakMap,
        "%WeakRef%": typeof WeakRef == "undefined" ? P : WeakRef,
        "%WeakSet%": typeof WeakSet == "undefined" ? P : WeakSet
    };
if (Q) try {
    null.error
} catch (r) {
    var Ta = Q(Q(r));
    tt["%Error.prototype%"] = Ta
}
var Fs, Bs, wa = function r(e) {
        var t;
        if (e === "%AsyncFunction%") t = Hr("async function () {}");
        else if (e === "%GeneratorFunction%") t = Hr("function* () {}");
        else if (e === "%AsyncGeneratorFunction%") t = Hr("async function* () {}");
        else if (e === "%AsyncGenerator%") {
            var i = r("%AsyncGeneratorFunction%");
            i && (t = i.prototype)
        } else if (e === "%AsyncIteratorPrototype%") {
            var s = r("%AsyncGenerator%");
            s && Q && (t = Q(s.prototype))
        }
        return tt[e] = t, t
    },
    Ls = {
        __proto__: null,
        "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
        "%ArrayPrototype%": ["Array", "prototype"],
        "%ArrayProto_entries%": ["Array", "prototype", "entries"],
        "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
        "%ArrayProto_keys%": ["Array", "prototype", "keys"],
        "%ArrayProto_values%": ["Array", "prototype", "values"],
        "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
        "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
        "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
        "%BooleanPrototype%": ["Boolean", "prototype"],
        "%DataViewPrototype%": ["DataView", "prototype"],
        "%DatePrototype%": ["Date", "prototype"],
        "%ErrorPrototype%": ["Error", "prototype"],
        "%EvalErrorPrototype%": ["EvalError", "prototype"],
        "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
        "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
        "%FunctionPrototype%": ["Function", "prototype"],
        "%Generator%": ["GeneratorFunction", "prototype"],
        "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
        "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
        "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
        "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
        "%JSONParse%": ["JSON", "parse"],
        "%JSONStringify%": ["JSON", "stringify"],
        "%MapPrototype%": ["Map", "prototype"],
        "%NumberPrototype%": ["Number", "prototype"],
        "%ObjectPrototype%": ["Object", "prototype"],
        "%ObjProto_toString%": ["Object", "prototype", "toString"],
        "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
        "%PromisePrototype%": ["Promise", "prototype"],
        "%PromiseProto_then%": ["Promise", "prototype", "then"],
        "%Promise_all%": ["Promise", "all"],
        "%Promise_reject%": ["Promise", "reject"],
        "%Promise_resolve%": ["Promise", "resolve"],
        "%RangeErrorPrototype%": ["RangeError", "prototype"],
        "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
        "%RegExpPrototype%": ["RegExp", "prototype"],
        "%SetPrototype%": ["Set", "prototype"],
        "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
        "%StringPrototype%": ["String", "prototype"],
        "%SymbolPrototype%": ["Symbol", "prototype"],
        "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
        "%TypedArrayPrototype%": ["TypedArray", "prototype"],
        "%TypeErrorPrototype%": ["TypeError", "prototype"],
        "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
        "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
        "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
        "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
        "%URIErrorPrototype%": ["URIError", "prototype"],
        "%WeakMapPrototype%": ["WeakMap", "prototype"],
        "%WeakSetPrototype%": ["WeakSet", "prototype"]
    },
    zt = ss,
    Cr = pa,
    Sa = zt.call(Function.call, Array.prototype.concat),
    Aa = zt.call(Function.apply, Array.prototype.splice),
    Ds = zt.call(Function.call, String.prototype.replace),
    ir = zt.call(Function.call, String.prototype.slice),
    Ra = zt.call(Function.call, RegExp.prototype.exec),
    Ia = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
    Ca = /\\(\\)?/g,
    Ma = function(r, e) {
        var t, i = r;
        if (Cr(Ls, i) && (i = "%" + (t = Ls[i])[0] + "%"), Cr(tt, i)) {
            var s = tt[i];
            if (s === pt && (s = wa(i)), s === void 0 && !e) throw new Tt("intrinsic " + r + " exists, but is not available. Please file an issue!");
            return {
                alias: t,
                name: i,
                value: s
            }
        }
        throw new vt("intrinsic " + r + " does not exist!")
    },
    It = function(r, e) {
        if (typeof r != "string" || r.length === 0) throw new Tt("intrinsic name must be a non-empty string");
        if (arguments.length > 1 && typeof e != "boolean") throw new Tt('"allowMissing" argument must be a boolean');
        if (Ra(/^%?[^%]*%?$/, r) === null) throw new vt("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
        var t = function(y) {
                var m = ir(y, 0, 1),
                    g = ir(y, -1);
                if (m === "%" && g !== "%") throw new vt("invalid intrinsic syntax, expected closing `%`");
                if (g === "%" && m !== "%") throw new vt("invalid intrinsic syntax, expected opening `%`");
                var _ = [];
                return Ds(y, Ia, function(x, b, I, C) {
                    _[_.length] = I ? Ds(C, Ca, "$1") : b || x
                }), _
            }(r),
            i = t.length > 0 ? t[0] : "",
            s = Ma("%" + i + "%", e),
            n = s.name,
            o = s.value,
            a = !1,
            h = s.alias;
        h && (i = h[0], Aa(t, Sa([0, 1], h)));
        for (var l = 1, u = !0; l < t.length; l += 1) {
            var c = t[l],
                d = ir(c, 0, 1),
                p = ir(c, -1);
            if ((d === '"' || d === "'" || d === "`" || p === '"' || p === "'" || p === "`") && d !== p) throw new vt("property names with quotes must have matching quotes");
            if (c !== "constructor" && u || (a = !0), Cr(tt, n = "%" + (i += "." + c) + "%")) o = tt[n];
            else if (o != null) {
                if (!(c in o)) {
                    if (!e) throw new Tt("base intrinsic for " + r + " exists, but the property is not available.");
                    return
                }
                if (et && l + 1 >= t.length) {
                    var f = et(o, c);
                    o = (u = !!f) && "get" in f && !("originalValue" in f.get) ? f.get : o[c]
                } else u = Cr(o, c), o = o[c];
                u && !a && (tt[n] = o)
            }
        }
        return o
    },
    no = {
        exports: {}
    };

function ns() {
    if (Bs) return Fs;
    Bs = 1;
    var r = It("%Object.defineProperty%", !0) || !1;
    if (r) try {
        r({}, "a", {
            value: 1
        })
    } catch (e) {
        r = !1
    }
    return Fs = r
}
var br = It("%Object.getOwnPropertyDescriptor%", !0);
if (br) try {
    br([], "length")
} catch (r) {
    br = null
}
var oo = br,
    Us = ns(),
    Pa = io,
    ht = Wt,
    ks = oo,
    gi = ns(),
    ao = function() {
        return !!gi
    };
ao.hasArrayLengthDefineBug = function() {
    if (!gi) return null;
    try {
        return gi([], "length", {
            value: 1
        }).length !== 1
    } catch (r) {
        return !0
    }
};
var Na = It,
    Gs = function(r, e, t) {
        if (!r || typeof r != "object" && typeof r != "function") throw new ht("`obj` must be an object or a function`");
        if (typeof e != "string" && typeof e != "symbol") throw new ht("`property` must be a string or a symbol`");
        if (arguments.length > 3 && typeof arguments[3] != "boolean" && arguments[3] !== null) throw new ht("`nonEnumerable`, if provided, must be a boolean or null");
        if (arguments.length > 4 && typeof arguments[4] != "boolean" && arguments[4] !== null) throw new ht("`nonWritable`, if provided, must be a boolean or null");
        if (arguments.length > 5 && typeof arguments[5] != "boolean" && arguments[5] !== null) throw new ht("`nonConfigurable`, if provided, must be a boolean or null");
        if (arguments.length > 6 && typeof arguments[6] != "boolean") throw new ht("`loose`, if provided, must be a boolean");
        var i = arguments.length > 3 ? arguments[3] : null,
            s = arguments.length > 4 ? arguments[4] : null,
            n = arguments.length > 5 ? arguments[5] : null,
            o = arguments.length > 6 && arguments[6],
            a = !!ks && ks(r, e);
        if (Us) Us(r, e, {
            configurable: n === null && a ? a.configurable : !n,
            enumerable: i === null && a ? a.enumerable : !i,
            value: t,
            writable: s === null && a ? a.writable : !s
        });
        else {
            if (!o && (i || s || n)) throw new Pa("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
            r[e] = t
        }
    },
    Oa = ao(),
    js = oo,
    Hs = Wt,
    Fa = Na("%Math.floor%"),
    Ba = function(r, e) {
        if (typeof r != "function") throw new Hs("`fn` is not a function");
        if (typeof e != "number" || e < 0 || e > 4294967295 || Fa(e) !== e) throw new Hs("`length` must be a positive 32-bit integer");
        var t = arguments.length > 2 && !!arguments[2],
            i = !0,
            s = !0;
        if ("length" in r && js) {
            var n = js(r, "length");
            n && !n.configurable && (i = !1), n && !n.writable && (s = !1)
        }
        return (i || s || !t) && (Oa ? Gs(r, "length", e, !0, !0) : Gs(r, "length", e)), r
    };
(function(r) {
    var e = ss,
        t = It,
        i = Ba,
        s = Wt,
        n = t("%Function.prototype.apply%"),
        o = t("%Function.prototype.call%"),
        a = t("%Reflect.apply%", !0) || e.call(o, n),
        h = ns(),
        l = t("%Math.max%");
    r.exports = function(c) {
        if (typeof c != "function") throw new s("a function is required");
        var d = a(e, o, arguments);
        return i(d, 1 + l(0, c.length - (arguments.length - 1)), !0)
    };
    var u = function() {
        return a(e, n, arguments)
    };
    h ? h(r.exports, "apply", {
        value: u
    }) : r.exports.apply = u
})(no);
var ho = It,
    lo = no.exports,
    La = lo(ho("String.prototype.indexOf")),
    os = typeof Map == "function" && Map.prototype,
    Vr = Object.getOwnPropertyDescriptor && os ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null,
    sr = os && Vr && typeof Vr.get == "function" ? Vr.get : null,
    Xs = os && Map.prototype.forEach,
    as = typeof Set == "function" && Set.prototype,
    Yr = Object.getOwnPropertyDescriptor && as ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null,
    nr = as && Yr && typeof Yr.get == "function" ? Yr.get : null,
    Vs = as && Set.prototype.forEach,
    Pt = typeof WeakMap == "function" && WeakMap.prototype ? WeakMap.prototype.has : null,
    Nt = typeof WeakSet == "function" && WeakSet.prototype ? WeakSet.prototype.has : null,
    Ys = typeof WeakRef == "function" && WeakRef.prototype ? WeakRef.prototype.deref : null,
    Da = Boolean.prototype.valueOf,
    Ua = Object.prototype.toString,
    ka = Function.prototype.toString,
    Ga = String.prototype.match,
    hs = String.prototype.slice,
    ke = String.prototype.replace,
    ja = String.prototype.toUpperCase,
    Ws = String.prototype.toLowerCase,
    uo = RegExp.prototype.test,
    zs = Array.prototype.concat,
    Se = Array.prototype.join,
    Ha = Array.prototype.slice,
    $s = Math.floor,
    Wr = typeof BigInt == "function" ? BigInt.prototype.valueOf : null,
    zr = Object.getOwnPropertySymbols,
    yi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null,
    St = typeof Symbol == "function" && typeof Symbol.iterator == "object",
    re = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === St || "symbol") ? Symbol.toStringTag : null,
    co = Object.prototype.propertyIsEnumerable,
    qs = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(r) {
        return r.__proto__
    } : null);

function Zs(r, e) {
    if (r === 1 / 0 || r === -1 / 0 || r != r || r && r > -1e3 && r < 1e3 || uo.call(/e/, e)) return e;
    var t = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if (typeof r == "number") {
        var i = r < 0 ? -$s(-r) : $s(r);
        if (i !== r) {
            var s = String(i),
                n = hs.call(e, s.length + 1);
            return ke.call(s, t, "$&_") + "." + ke.call(ke.call(n, /([0-9]{3})/g, "$&_"), /_$/, "")
        }
    }
    return ke.call(e, t, "$&_")
}
var xi = Vo,
    Ks = xi.custom,
    Qs = po(Ks) ? Ks : null;

function fo(r, e, t) {
    var i = (t.quoteStyle || e) === "double" ? '"' : "'";
    return i + r + i
}

function Xa(r) {
    return ke.call(String(r), /"/g, "&quot;")
}

function _i(r) {
    return !(Ue(r) !== "[object Array]" || re && typeof r == "object" && re in r)
}

function Js(r) {
    return !(Ue(r) !== "[object RegExp]" || re && typeof r == "object" && re in r)
}

function po(r) {
    if (St) return r && typeof r == "object" && r instanceof Symbol;
    if (typeof r == "symbol") return !0;
    if (!r || typeof r != "object" || !yi) return !1;
    try {
        return yi.call(r), !0
    } catch (e) {}
    return !1
}
var Va = Object.prototype.hasOwnProperty || function(r) {
    return r in this
};

function De(r, e) {
    return Va.call(r, e)
}

function Ue(r) {
    return Ua.call(r)
}

function en(r, e) {
    if (r.indexOf) return r.indexOf(e);
    for (var t = 0, i = r.length; t < i; t++)
        if (r[t] === e) return t;
    return -1
}

function mo(r, e) {
    if (r.length > e.maxStringLength) {
        var t = r.length - e.maxStringLength,
            i = "... " + t + " more character" + (t > 1 ? "s" : "");
        return mo(hs.call(r, 0, e.maxStringLength), e) + i
    }
    return fo(ke.call(ke.call(r, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, Ya), "single", e)
}

function Ya(r) {
    var e = r.charCodeAt(0),
        t = {
            8: "b",
            9: "t",
            10: "n",
            12: "f",
            13: "r"
        }[e];
    return t ? "\\" + t : "\\x" + (e < 16 ? "0" : "") + ja.call(e.toString(16))
}

function Ot(r) {
    return "Object(" + r + ")"
}

function $r(r) {
    return r + " { ? }"
}

function tn(r, e, t, i) {
    return r + " (" + e + ") {" + (i ? vi(t, i) : Se.call(t, ", ")) + "}"
}

function vi(r, e) {
    if (r.length === 0) return "";
    var t = `
` + e.prev + e.base;
    return t + Se.call(r, "," + t) + `
` + e.prev
}

function or(r, e) {
    var t = _i(r),
        i = [];
    if (t) {
        i.length = r.length;
        for (var s = 0; s < r.length; s++) i[s] = De(r, s) ? e(r[s], r) : ""
    }
    var n, o = typeof zr == "function" ? zr(r) : [];
    if (St) {
        n = {};
        for (var a = 0; a < o.length; a++) n["$" + o[a]] = o[a]
    }
    for (var h in r) De(r, h) && (t && String(Number(h)) === h && h < r.length || St && n["$" + h] instanceof Symbol || (uo.call(/[^\w$]/, h) ? i.push(e(h, r) + ": " + e(r[h], r)) : i.push(h + ": " + e(r[h], r))));
    if (typeof zr == "function")
        for (var l = 0; l < o.length; l++) co.call(r, o[l]) && i.push("[" + e(o[l]) + "]: " + e(r[o[l]], r));
    return i
}
var go = It,
    Ct = function(r, e) {
        var t = ho(r, !!e);
        return typeof t == "function" && La(r, ".prototype.") > -1 ? lo(t) : t
    },
    Wa = function r(e, t, i, s) {
        var n = t || {};
        if (De(n, "quoteStyle") && n.quoteStyle !== "single" && n.quoteStyle !== "double") throw new TypeError('option "quoteStyle" must be "single" or "double"');
        if (De(n, "maxStringLength") && (typeof n.maxStringLength == "number" ? n.maxStringLength < 0 && n.maxStringLength !== 1 / 0 : n.maxStringLength !== null)) throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
        var o = !De(n, "customInspect") || n.customInspect;
        if (typeof o != "boolean" && o !== "symbol") throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
        if (De(n, "indent") && n.indent !== null && n.indent !== "	" && !(parseInt(n.indent, 10) === n.indent && n.indent > 0)) throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
        if (De(n, "numericSeparator") && typeof n.numericSeparator != "boolean") throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
        var a = n.numericSeparator;
        if (e === void 0) return "undefined";
        if (e === null) return "null";
        if (typeof e == "boolean") return e ? "true" : "false";
        if (typeof e == "string") return mo(e, n);
        if (typeof e == "number") {
            if (e === 0) return 1 / 0 / e > 0 ? "0" : "-0";
            var h = String(e);
            return a ? Zs(e, h) : h
        }
        if (typeof e == "bigint") {
            var l = String(e) + "n";
            return a ? Zs(e, l) : l
        }
        var u = n.depth === void 0 ? 5 : n.depth;
        if (i === void 0 && (i = 0), i >= u && u > 0 && typeof e == "object") return _i(e) ? "[Array]" : "[Object]";
        var c = function(v, F) {
            var ie;
            if (v.indent === "	") ie = "	";
            else {
                if (!(typeof v.indent == "number" && v.indent > 0)) return null;
                ie = Se.call(Array(v.indent + 1), " ")
            }
            return {
                base: ie,
                prev: Se.call(Array(F + 1), ie)
            }
        }(n, i);
        if (s === void 0) s = [];
        else if (en(s, e) >= 0) return "[Circular]";

        function d(v, F, ie) {
            if (F && (s = Ha.call(s)).push(F), ie) {
                var S = {
                    depth: n.depth
                };
                return De(n, "quoteStyle") && (S.quoteStyle = n.quoteStyle), r(v, S, i + 1, s)
            }
            return r(v, n, i + 1, s)
        }
        if (typeof e == "function" && !Js(e)) {
            var p = function(v) {
                    if (v.name) return v.name;
                    var F = Ga.call(ka.call(v), /^function\s*([\w$]+)/);
                    return F ? F[1] : null
                }(e),
                f = or(e, d);
            return "[Function" + (p ? ": " + p : " (anonymous)") + "]" + (f.length > 0 ? " { " + Se.call(f, ", ") + " }" : "")
        }
        if (po(e)) {
            var y = St ? ke.call(String(e), /^(Symbol\(.*\))_[^)]*$/, "$1") : yi.call(e);
            return typeof e != "object" || St ? y : Ot(y)
        }
        if (function(v) {
                return !v || typeof v != "object" ? !1 : typeof HTMLElement != "undefined" && v instanceof HTMLElement ? !0 : typeof v.nodeName == "string" && typeof v.getAttribute == "function"
            }(e)) {
            for (var m = "<" + Ws.call(String(e.nodeName)), g = e.attributes || [], _ = 0; _ < g.length; _++) m += " " + g[_].name + "=" + fo(Xa(g[_].value), "double", n);
            return m += ">", e.childNodes && e.childNodes.length && (m += "..."), m += "</" + Ws.call(String(e.nodeName)) + ">"
        }
        if (_i(e)) {
            if (e.length === 0) return "[]";
            var x = or(e, d);
            return c && ! function(v) {
                for (var F = 0; F < v.length; F++)
                    if (en(v[F], `
`) >= 0) return !1;
                return !0
            }(x) ? "[" + vi(x, c) + "]" : "[ " + Se.call(x, ", ") + " ]"
        }
        if (function(v) {
                return !(Ue(v) !== "[object Error]" || re && typeof v == "object" && re in v)
            }(e)) {
            var b = or(e, d);
            return "cause" in Error.prototype || !("cause" in e) || co.call(e, "cause") ? b.length === 0 ? "[" + String(e) + "]" : "{ [" + String(e) + "] " + Se.call(b, ", ") + " }" : "{ [" + String(e) + "] " + Se.call(zs.call("[cause]: " + d(e.cause), b), ", ") + " }"
        }
        if (typeof e == "object" && o) {
            if (Qs && typeof e[Qs] == "function" && xi) return xi(e, {
                depth: u - i
            });
            if (o !== "symbol" && typeof e.inspect == "function") return e.inspect()
        }
        if (function(v) {
                if (!sr || !v || typeof v != "object") return !1;
                try {
                    sr.call(v);
                    try {
                        nr.call(v)
                    } catch (F) {
                        return !0
                    }
                    return v instanceof Map
                } catch (F) {}
                return !1
            }(e)) {
            var I = [];
            return Xs && Xs.call(e, function(v, F) {
                I.push(d(F, e, !0) + " => " + d(v, e))
            }), tn("Map", sr.call(e), I, c)
        }
        if (function(v) {
                if (!nr || !v || typeof v != "object") return !1;
                try {
                    nr.call(v);
                    try {
                        sr.call(v)
                    } catch (F) {
                        return !0
                    }
                    return v instanceof Set
                } catch (F) {}
                return !1
            }(e)) {
            var C = [];
            return Vs && Vs.call(e, function(v) {
                C.push(d(v, e))
            }), tn("Set", nr.call(e), C, c)
        }
        if (function(v) {
                if (!Pt || !v || typeof v != "object") return !1;
                try {
                    Pt.call(v, Pt);
                    try {
                        Nt.call(v, Nt)
                    } catch (F) {
                        return !0
                    }
                    return v instanceof WeakMap
                } catch (F) {}
                return !1
            }(e)) return $r("WeakMap");
        if (function(v) {
                if (!Nt || !v || typeof v != "object") return !1;
                try {
                    Nt.call(v, Nt);
                    try {
                        Pt.call(v, Pt)
                    } catch (F) {
                        return !0
                    }
                    return v instanceof WeakSet
                } catch (F) {}
                return !1
            }(e)) return $r("WeakSet");
        if (function(v) {
                if (!Ys || !v || typeof v != "object") return !1;
                try {
                    return Ys.call(v), !0
                } catch (F) {}
                return !1
            }(e)) return $r("WeakRef");
        if (function(v) {
                return !(Ue(v) !== "[object Number]" || re && typeof v == "object" && re in v)
            }(e)) return Ot(d(Number(e)));
        if (function(v) {
                if (!v || typeof v != "object" || !Wr) return !1;
                try {
                    return Wr.call(v), !0
                } catch (F) {}
                return !1
            }(e)) return Ot(d(Wr.call(e)));
        if (function(v) {
                return !(Ue(v) !== "[object Boolean]" || re && typeof v == "object" && re in v)
            }(e)) return Ot(Da.call(e));
        if (function(v) {
                return !(Ue(v) !== "[object String]" || re && typeof v == "object" && re in v)
            }(e)) return Ot(d(String(e)));
        if (typeof window != "undefined" && e === window) return "{ [object Window] }";
        if (e === vr) return "{ [object globalThis] }";
        if (! function(v) {
                return !(Ue(v) !== "[object Date]" || re && typeof v == "object" && re in v)
            }(e) && !Js(e)) {
            var T = or(e, d),
                w = qs ? qs(e) === Object.prototype : e instanceof Object || e.constructor === Object,
                M = e instanceof Object ? "" : "null prototype",
                ee = !w && re && Object(e) === e && re in e ? hs.call(Ue(e), 8, -1) : M ? "Object" : "",
                he = (w || typeof e.constructor != "function" ? "" : e.constructor.name ? e.constructor.name + " " : "") + (ee || M ? "[" + Se.call(zs.call([], ee || [], M || []), ": ") + "] " : "");
            return T.length === 0 ? he + "{}" : c ? he + "{" + vi(T, c) + "}" : he + "{ " + Se.call(T, ", ") + " }"
        }
        return String(e)
    },
    za = Wt,
    ar = go("%WeakMap%", !0),
    hr = go("%Map%", !0),
    $a = Ct("WeakMap.prototype.get", !0),
    qa = Ct("WeakMap.prototype.set", !0),
    Za = Ct("WeakMap.prototype.has", !0),
    Ka = Ct("Map.prototype.get", !0),
    Qa = Ct("Map.prototype.set", !0),
    Ja = Ct("Map.prototype.has", !0),
    qr = function(r, e) {
        for (var t, i = r;
            (t = i.next) !== null; i = t)
            if (t.key === e) return i.next = t.next, t.next = r.next, r.next = t, t
    },
    eh = String.prototype.replace,
    th = /%20/g,
    rn = "RFC3986",
    ls = {
        default: rn,
        formatters: {
            RFC1738: function(r) {
                return eh.call(r, th, "+")
            },
            RFC3986: function(r) {
                return String(r)
            }
        },
        RFC1738: "RFC1738",
        RFC3986: rn
    },
    rh = ls,
    Zr = Object.prototype.hasOwnProperty,
    Ye = Array.isArray,
    Te = function() {
        for (var r = [], e = 0; e < 256; ++e) r.push("%" + ((e < 16 ? "0" : "") + e.toString(16)).toUpperCase());
        return r
    }(),
    sn = function(r, e) {
        for (var t = e && e.plainObjects ? Object.create(null) : {}, i = 0; i < r.length; ++i) r[i] !== void 0 && (t[i] = r[i]);
        return t
    },
    yo = {
        arrayToObject: sn,
        assign: function(r, e) {
            return Object.keys(e).reduce(function(t, i) {
                return t[i] = e[i], t
            }, r)
        },
        combine: function(r, e) {
            return [].concat(r, e)
        },
        compact: function(r) {
            for (var e = [{
                    obj: {
                        o: r
                    },
                    prop: "o"
                }], t = [], i = 0; i < e.length; ++i)
                for (var s = e[i], n = s.obj[s.prop], o = Object.keys(n), a = 0; a < o.length; ++a) {
                    var h = o[a],
                        l = n[h];
                    typeof l == "object" && l !== null && t.indexOf(l) === -1 && (e.push({
                        obj: n,
                        prop: h
                    }), t.push(l))
                }
            return function(u) {
                for (; u.length > 1;) {
                    var c = u.pop(),
                        d = c.obj[c.prop];
                    if (Ye(d)) {
                        for (var p = [], f = 0; f < d.length; ++f) d[f] !== void 0 && p.push(d[f]);
                        c.obj[c.prop] = p
                    }
                }
            }(e), r
        },
        decode: function(r, e, t) {
            var i = r.replace(/\+/g, " ");
            if (t === "iso-8859-1") return i.replace(/%[0-9a-f]{2}/gi, unescape);
            try {
                return decodeURIComponent(i)
            } catch (s) {
                return i
            }
        },
        encode: function(r, e, t, i, s) {
            if (r.length === 0) return r;
            var n = r;
            if (typeof r == "symbol" ? n = Symbol.prototype.toString.call(r) : typeof r != "string" && (n = String(r)), t === "iso-8859-1") return escape(n).replace(/%u[0-9a-f]{4}/gi, function(l) {
                return "%26%23" + parseInt(l.slice(2), 16) + "%3B"
            });
            for (var o = "", a = 0; a < n.length; ++a) {
                var h = n.charCodeAt(a);
                h === 45 || h === 46 || h === 95 || h === 126 || h >= 48 && h <= 57 || h >= 65 && h <= 90 || h >= 97 && h <= 122 || s === rh.RFC1738 && (h === 40 || h === 41) ? o += n.charAt(a) : h < 128 ? o += Te[h] : h < 2048 ? o += Te[192 | h >> 6] + Te[128 | 63 & h] : h < 55296 || h >= 57344 ? o += Te[224 | h >> 12] + Te[128 | h >> 6 & 63] + Te[128 | 63 & h] : (a += 1, h = 65536 + ((1023 & h) << 10 | 1023 & n.charCodeAt(a)), o += Te[240 | h >> 18] + Te[128 | h >> 12 & 63] + Te[128 | h >> 6 & 63] + Te[128 | 63 & h])
            }
            return o
        },
        isBuffer: function(r) {
            return !(!r || typeof r != "object") && !!(r.constructor && r.constructor.isBuffer && r.constructor.isBuffer(r))
        },
        isRegExp: function(r) {
            return Object.prototype.toString.call(r) === "[object RegExp]"
        },
        maybeMap: function(r, e) {
            if (Ye(r)) {
                for (var t = [], i = 0; i < r.length; i += 1) t.push(e(r[i]));
                return t
            }
            return e(r)
        },
        merge: function r(e, t, i) {
            if (!t) return e;
            if (typeof t != "object") {
                if (Ye(e)) e.push(t);
                else {
                    if (!e || typeof e != "object") return [e, t];
                    (i && (i.plainObjects || i.allowPrototypes) || !Zr.call(Object.prototype, t)) && (e[t] = !0)
                }
                return e
            }
            if (!e || typeof e != "object") return [e].concat(t);
            var s = e;
            return Ye(e) && !Ye(t) && (s = sn(e, i)), Ye(e) && Ye(t) ? (t.forEach(function(n, o) {
                if (Zr.call(e, o)) {
                    var a = e[o];
                    a && typeof a == "object" && n && typeof n == "object" ? e[o] = r(a, n, i) : e.push(n)
                } else e[o] = n
            }), e) : Object.keys(t).reduce(function(n, o) {
                var a = t[o];
                return Zr.call(n, o) ? n[o] = r(n[o], a, i) : n[o] = a, n
            }, s)
        }
    },
    xo = function() {
        var r, e, t, i = {
            assert: function(s) {
                if (!i.has(s)) throw new za("Side channel does not contain " + Wa(s))
            },
            get: function(s) {
                if (ar && s && (typeof s == "object" || typeof s == "function")) {
                    if (r) return $a(r, s)
                } else if (hr) {
                    if (e) return Ka(e, s)
                } else if (t) return function(n, o) {
                    var a = qr(n, o);
                    return a && a.value
                }(t, s)
            },
            has: function(s) {
                if (ar && s && (typeof s == "object" || typeof s == "function")) {
                    if (r) return Za(r, s)
                } else if (hr) {
                    if (e) return Ja(e, s)
                } else if (t) return function(n, o) {
                    return !!qr(n, o)
                }(t, s);
                return !1
            },
            set: function(s, n) {
                ar && s && (typeof s == "object" || typeof s == "function") ? (r || (r = new ar), qa(r, s, n)) : hr ? (e || (e = new hr), Qa(e, s, n)) : (t || (t = {
                    key: {},
                    next: null
                }), function(o, a, h) {
                    var l = qr(o, a);
                    l ? l.value = h : o.next = {
                        key: a,
                        next: o.next,
                        value: h
                    }
                }(t, s, n))
            }
        };
        return i
    },
    Er = yo,
    kt = ls,
    ih = Object.prototype.hasOwnProperty,
    nn = {
        brackets: function(r) {
            return r + "[]"
        },
        comma: "comma",
        indices: function(r, e) {
            return r + "[" + e + "]"
        },
        repeat: function(r) {
            return r
        }
    },
    Pe = Array.isArray,
    sh = Array.prototype.push,
    _o = function(r, e) {
        sh.apply(r, Pe(e) ? e : [e])
    },
    nh = Date.prototype.toISOString,
    on = kt.default,
    te = {
        addQueryPrefix: !1,
        allowDots: !1,
        charset: "utf-8",
        charsetSentinel: !1,
        delimiter: "&",
        encode: !0,
        encoder: Er.encode,
        encodeValuesOnly: !1,
        format: on,
        formatter: kt.formatters[on],
        indices: !1,
        serializeDate: function(r) {
            return nh.call(r)
        },
        skipNulls: !1,
        strictNullHandling: !1
    },
    Kr = {},
    oh = function r(e, t, i, s, n, o, a, h, l, u, c, d, p, f, y, m) {
        for (var g, _ = e, x = m, b = 0, I = !1;
            (x = x.get(Kr)) !== void 0 && !I;) {
            var C = x.get(e);
            if (b += 1, C !== void 0) {
                if (C === b) throw new RangeError("Cyclic object value");
                I = !0
            }
            x.get(Kr) === void 0 && (b = 0)
        }
        if (typeof h == "function" ? _ = h(t, _) : _ instanceof Date ? _ = c(_) : i === "comma" && Pe(_) && (_ = Er.maybeMap(_, function(R) {
                return R instanceof Date ? c(R) : R
            })), _ === null) {
            if (n) return a && !f ? a(t, te.encoder, y, "key", d) : t;
            _ = ""
        }
        if (typeof(g = _) == "string" || typeof g == "number" || typeof g == "boolean" || typeof g == "symbol" || typeof g == "bigint" || Er.isBuffer(_)) return a ? [p(f ? t : a(t, te.encoder, y, "key", d)) + "=" + p(a(_, te.encoder, y, "value", d))] : [p(t) + "=" + p(String(_))];
        var T, w = [];
        if (_ === void 0) return w;
        if (i === "comma" && Pe(_)) f && a && (_ = Er.maybeMap(_, a)), T = [{
            value: _.length > 0 ? _.join(",") || null : void 0
        }];
        else if (Pe(h)) T = h;
        else {
            var M = Object.keys(_);
            T = l ? M.sort(l) : M
        }
        for (var ee = s && Pe(_) && _.length === 1 ? t + "[]" : t, he = 0; he < T.length; ++he) {
            var v = T[he],
                F = typeof v == "object" && v.value !== void 0 ? v.value : _[v];
            if (!o || F !== null) {
                var ie = Pe(_) ? typeof i == "function" ? i(ee, v) : ee : ee + (u ? "." + v : "[" + v + "]");
                m.set(e, b);
                var S = xo();
                S.set(Kr, m), _o(w, r(F, ie, i, s, n, o, i === "comma" && f && Pe(_) ? null : a, h, l, u, c, d, p, f, y, S))
            }
        }
        return w
    },
    mt = yo,
    bi = Object.prototype.hasOwnProperty,
    ah = Array.isArray,
    K = {
        allowDots: !1,
        allowPrototypes: !1,
        allowSparse: !1,
        arrayLimit: 20,
        charset: "utf-8",
        charsetSentinel: !1,
        comma: !1,
        decoder: mt.decode,
        delimiter: "&",
        depth: 5,
        ignoreQueryPrefix: !1,
        interpretNumericEntities: !1,
        parameterLimit: 1e3,
        parseArrays: !0,
        plainObjects: !1,
        strictNullHandling: !1
    },
    hh = function(r) {
        return r.replace(/&#(\d+);/g, function(e, t) {
            return String.fromCharCode(parseInt(t, 10))
        })
    },
    vo = function(r, e) {
        return r && typeof r == "string" && e.comma && r.indexOf(",") > -1 ? r.split(",") : r
    },
    lh = function(r, e, t, i) {
        if (r) {
            var s = t.allowDots ? r.replace(/\.([^.[]+)/g, "[$1]") : r,
                n = /(\[[^[\]]*])/g,
                o = t.depth > 0 && /(\[[^[\]]*])/.exec(s),
                a = o ? s.slice(0, o.index) : s,
                h = [];
            if (a) {
                if (!t.plainObjects && bi.call(Object.prototype, a) && !t.allowPrototypes) return;
                h.push(a)
            }
            for (var l = 0; t.depth > 0 && (o = n.exec(s)) !== null && l < t.depth;) {
                if (l += 1, !t.plainObjects && bi.call(Object.prototype, o[1].slice(1, -1)) && !t.allowPrototypes) return;
                h.push(o[1])
            }
            return o && h.push("[" + s.slice(o.index) + "]"),
                function(u, c, d, p) {
                    for (var f = p ? c : vo(c, d), y = u.length - 1; y >= 0; --y) {
                        var m, g = u[y];
                        if (g === "[]" && d.parseArrays) m = [].concat(f);
                        else {
                            m = d.plainObjects ? Object.create(null) : {};
                            var _ = g.charAt(0) === "[" && g.charAt(g.length - 1) === "]" ? g.slice(1, -1) : g,
                                x = parseInt(_, 10);
                            d.parseArrays || _ !== "" ? !isNaN(x) && g !== _ && String(x) === _ && x >= 0 && d.parseArrays && x <= d.arrayLimit ? (m = [])[x] = f : _ !== "__proto__" && (m[_] = f) : m = {
                                0: f
                            }
                        }
                        f = m
                    }
                    return f
                }(h, e, t, i)
        }
    },
    uh = function(r, e) {
        var t, i = r,
            s = function(f) {
                if (!f) return te;
                if (f.encoder !== null && f.encoder !== void 0 && typeof f.encoder != "function") throw new TypeError("Encoder has to be a function.");
                var y = f.charset || te.charset;
                if (f.charset !== void 0 && f.charset !== "utf-8" && f.charset !== "iso-8859-1") throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
                var m = kt.default;
                if (f.format !== void 0) {
                    if (!ih.call(kt.formatters, f.format)) throw new TypeError("Unknown format option provided.");
                    m = f.format
                }
                var g = kt.formatters[m],
                    _ = te.filter;
                return (typeof f.filter == "function" || Pe(f.filter)) && (_ = f.filter), {
                    addQueryPrefix: typeof f.addQueryPrefix == "boolean" ? f.addQueryPrefix : te.addQueryPrefix,
                    allowDots: f.allowDots === void 0 ? te.allowDots : !!f.allowDots,
                    charset: y,
                    charsetSentinel: typeof f.charsetSentinel == "boolean" ? f.charsetSentinel : te.charsetSentinel,
                    delimiter: f.delimiter === void 0 ? te.delimiter : f.delimiter,
                    encode: typeof f.encode == "boolean" ? f.encode : te.encode,
                    encoder: typeof f.encoder == "function" ? f.encoder : te.encoder,
                    encodeValuesOnly: typeof f.encodeValuesOnly == "boolean" ? f.encodeValuesOnly : te.encodeValuesOnly,
                    filter: _,
                    format: m,
                    formatter: g,
                    serializeDate: typeof f.serializeDate == "function" ? f.serializeDate : te.serializeDate,
                    skipNulls: typeof f.skipNulls == "boolean" ? f.skipNulls : te.skipNulls,
                    sort: typeof f.sort == "function" ? f.sort : null,
                    strictNullHandling: typeof f.strictNullHandling == "boolean" ? f.strictNullHandling : te.strictNullHandling
                }
            }(e);
        typeof s.filter == "function" ? i = (0, s.filter)("", i) : Pe(s.filter) && (t = s.filter);
        var n, o = [];
        if (typeof i != "object" || i === null) return "";
        n = e && e.arrayFormat in nn ? e.arrayFormat : e && "indices" in e ? e.indices ? "indices" : "repeat" : "indices";
        var a = nn[n];
        if (e && "commaRoundTrip" in e && typeof e.commaRoundTrip != "boolean") throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
        var h = a === "comma" && e && e.commaRoundTrip;
        t || (t = Object.keys(i)), s.sort && t.sort(s.sort);
        for (var l = xo(), u = 0; u < t.length; ++u) {
            var c = t[u];
            s.skipNulls && i[c] === null || _o(o, oh(i[c], c, a, h, s.strictNullHandling, s.skipNulls, s.encode ? s.encoder : null, s.filter, s.sort, s.allowDots, s.serializeDate, s.format, s.formatter, s.encodeValuesOnly, s.charset, l))
        }
        var d = o.join(s.delimiter),
            p = s.addQueryPrefix === !0 ? "?" : "";
        return s.charsetSentinel && (s.charset === "iso-8859-1" ? p += "utf8=%26%2310003%3B&" : p += "utf8=%E2%9C%93&"), d.length > 0 ? p + d : ""
    },
    ch = {
        formats: ls,
        parse: function(r, e) {
            var t = function(l) {
                if (!l) return K;
                if (l.decoder !== null && l.decoder !== void 0 && typeof l.decoder != "function") throw new TypeError("Decoder has to be a function.");
                if (l.charset !== void 0 && l.charset !== "utf-8" && l.charset !== "iso-8859-1") throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
                var u = l.charset === void 0 ? K.charset : l.charset;
                return {
                    allowDots: l.allowDots === void 0 ? K.allowDots : !!l.allowDots,
                    allowPrototypes: typeof l.allowPrototypes == "boolean" ? l.allowPrototypes : K.allowPrototypes,
                    allowSparse: typeof l.allowSparse == "boolean" ? l.allowSparse : K.allowSparse,
                    arrayLimit: typeof l.arrayLimit == "number" ? l.arrayLimit : K.arrayLimit,
                    charset: u,
                    charsetSentinel: typeof l.charsetSentinel == "boolean" ? l.charsetSentinel : K.charsetSentinel,
                    comma: typeof l.comma == "boolean" ? l.comma : K.comma,
                    decoder: typeof l.decoder == "function" ? l.decoder : K.decoder,
                    delimiter: typeof l.delimiter == "string" || mt.isRegExp(l.delimiter) ? l.delimiter : K.delimiter,
                    depth: typeof l.depth == "number" || l.depth === !1 ? +l.depth : K.depth,
                    ignoreQueryPrefix: l.ignoreQueryPrefix === !0,
                    interpretNumericEntities: typeof l.interpretNumericEntities == "boolean" ? l.interpretNumericEntities : K.interpretNumericEntities,
                    parameterLimit: typeof l.parameterLimit == "number" ? l.parameterLimit : K.parameterLimit,
                    parseArrays: l.parseArrays !== !1,
                    plainObjects: typeof l.plainObjects == "boolean" ? l.plainObjects : K.plainObjects,
                    strictNullHandling: typeof l.strictNullHandling == "boolean" ? l.strictNullHandling : K.strictNullHandling
                }
            }(e);
            if (r === "" || r == null) return t.plainObjects ? Object.create(null) : {};
            for (var i = typeof r == "string" ? function(l, u) {
                    var c, d = {
                            __proto__: null
                        },
                        p = u.ignoreQueryPrefix ? l.replace(/^\?/, "") : l,
                        f = u.parameterLimit === 1 / 0 ? void 0 : u.parameterLimit,
                        y = p.split(u.delimiter, f),
                        m = -1,
                        g = u.charset;
                    if (u.charsetSentinel)
                        for (c = 0; c < y.length; ++c) y[c].indexOf("utf8=") === 0 && (y[c] === "utf8=%E2%9C%93" ? g = "utf-8" : y[c] === "utf8=%26%2310003%3B" && (g = "iso-8859-1"), m = c, c = y.length);
                    for (c = 0; c < y.length; ++c)
                        if (c !== m) {
                            var _, x, b = y[c],
                                I = b.indexOf("]="),
                                C = I === -1 ? b.indexOf("=") : I + 1;
                            C === -1 ? (_ = u.decoder(b, K.decoder, g, "key"), x = u.strictNullHandling ? null : "") : (_ = u.decoder(b.slice(0, C), K.decoder, g, "key"), x = mt.maybeMap(vo(b.slice(C + 1), u), function(T) {
                                return u.decoder(T, K.decoder, g, "value")
                            })), x && u.interpretNumericEntities && g === "iso-8859-1" && (x = hh(x)), b.indexOf("[]=") > -1 && (x = ah(x) ? [x] : x), bi.call(d, _) ? d[_] = mt.combine(d[_], x) : d[_] = x
                        }
                    return d
                }(r, t) : r, s = t.plainObjects ? Object.create(null) : {}, n = Object.keys(i), o = 0; o < n.length; ++o) {
                var a = n[o],
                    h = lh(a, i[a], t, typeof r == "string");
                s = mt.merge(s, h, t)
            }
            return t.allowSparse === !0 ? s : mt.compact(s)
        },
        stringify: uh
    },
    dh = ta;

function ge() {
    this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null
}
var fh = /^([a-z0-9.+-]+:)/i,
    ph = /:[0-9]*$/,
    mh = /^(\/\/?(?!\/)[^?\s]*)(\?[^\s]*)?$/,
    gh = ["{", "}", "|", "\\", "^", "`"].concat(["<", ">", '"', "`", " ", "\r", `
`, "	"]),
    Ei = ["'"].concat(gh),
    an = ["%", "/", "?", ";", "#"].concat(Ei),
    hn = ["/", "?", "#"],
    ln = /^[+a-z0-9A-Z_-]{0,63}$/,
    yh = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
    xh = {
        javascript: !0,
        "javascript:": !0
    },
    Qr = {
        javascript: !0,
        "javascript:": !0
    },
    lt = {
        http: !0,
        https: !0,
        ftp: !0,
        gopher: !0,
        file: !0,
        "http:": !0,
        "https:": !0,
        "ftp:": !0,
        "gopher:": !0,
        "file:": !0
    },
    Jr = ch;

function Tr(r, e, t) {
    if (r && typeof r == "object" && r instanceof ge) return r;
    var i = new ge;
    return i.parse(r, e, t), i
}
ge.prototype.parse = function(r, e, t) {
    if (typeof r != "string") throw new TypeError("Parameter 'url' must be a string, not " + typeof r);
    var i = r.indexOf("?"),
        s = i !== -1 && i < r.indexOf("#") ? "?" : "#",
        n = r.split(s);
    n[0] = n[0].replace(/\\/g, "/");
    var o = r = n.join(s);
    if (o = o.trim(), !t && r.split("#").length === 1) {
        var a = mh.exec(o);
        if (a) return this.path = o, this.href = o, this.pathname = a[1], a[2] ? (this.search = a[2], this.query = e ? Jr.parse(this.search.substr(1)) : this.search.substr(1)) : e && (this.search = "", this.query = {}), this
    }
    var h = fh.exec(o);
    if (h) {
        var l = (h = h[0]).toLowerCase();
        this.protocol = l, o = o.substr(h.length)
    }
    if (t || h || o.match(/^\/\/[^@/]+@[^@/]+/)) {
        var u = o.substr(0, 2) === "//";
        !u || h && Qr[h] || (o = o.substr(2), this.slashes = !0)
    }
    if (!Qr[h] && (u || h && !lt[h])) {
        for (var c, d, p = -1, f = 0; f < hn.length; f++)(y = o.indexOf(hn[f])) !== -1 && (p === -1 || y < p) && (p = y);
        for ((d = p === -1 ? o.lastIndexOf("@") : o.lastIndexOf("@", p)) !== -1 && (c = o.slice(0, d), o = o.slice(d + 1), this.auth = decodeURIComponent(c)), p = -1, f = 0; f < an.length; f++) {
            var y;
            (y = o.indexOf(an[f])) !== -1 && (p === -1 || y < p) && (p = y)
        }
        p === -1 && (p = o.length), this.host = o.slice(0, p), o = o.slice(p), this.parseHost(), this.hostname = this.hostname || "";
        var m = this.hostname[0] === "[" && this.hostname[this.hostname.length - 1] === "]";
        if (!m)
            for (var g = this.hostname.split(/\./), _ = (f = 0, g.length); f < _; f++) {
                var x = g[f];
                if (x && !x.match(ln)) {
                    for (var b = "", I = 0, C = x.length; I < C; I++) x.charCodeAt(I) > 127 ? b += "x" : b += x[I];
                    if (!b.match(ln)) {
                        var T = g.slice(0, f),
                            w = g.slice(f + 1),
                            M = x.match(yh);
                        M && (T.push(M[1]), w.unshift(M[2])), w.length && (o = "/" + w.join(".") + o), this.hostname = T.join(".");
                        break
                    }
                }
            }
        this.hostname.length > 255 ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), m || (this.hostname = dh.toASCII(this.hostname));
        var ee = this.port ? ":" + this.port : "",
            he = this.hostname || "";
        this.host = he + ee, this.href += this.host, m && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), o[0] !== "/" && (o = "/" + o))
    }
    if (!xh[l])
        for (f = 0, _ = Ei.length; f < _; f++) {
            var v = Ei[f];
            if (o.indexOf(v) !== -1) {
                var F = encodeURIComponent(v);
                F === v && (F = escape(v)), o = o.split(v).join(F)
            }
        }
    var ie = o.indexOf("#");
    ie !== -1 && (this.hash = o.substr(ie), o = o.slice(0, ie));
    var S = o.indexOf("?");
    if (S !== -1 ? (this.search = o.substr(S), this.query = o.substr(S + 1), e && (this.query = Jr.parse(this.query)), o = o.slice(0, S)) : e && (this.search = "", this.query = {}), o && (this.pathname = o), lt[l] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
        ee = this.pathname || "";
        var R = this.search || "";
        this.path = ee + R
    }
    return this.href = this.format(), this
}, ge.prototype.format = function() {
    var r = this.auth || "";
    r && (r = (r = encodeURIComponent(r)).replace(/%3A/i, ":"), r += "@");
    var e = this.protocol || "",
        t = this.pathname || "",
        i = this.hash || "",
        s = !1,
        n = "";
    this.host ? s = r + this.host : this.hostname && (s = r + (this.hostname.indexOf(":") === -1 ? this.hostname : "[" + this.hostname + "]"), this.port && (s += ":" + this.port)), this.query && typeof this.query == "object" && Object.keys(this.query).length && (n = Jr.stringify(this.query, {
        arrayFormat: "repeat",
        addQueryPrefix: !1
    }));
    var o = this.search || n && "?" + n || "";
    return e && e.substr(-1) !== ":" && (e += ":"), this.slashes || (!e || lt[e]) && s !== !1 ? (s = "//" + (s || ""), t && t.charAt(0) !== "/" && (t = "/" + t)) : s || (s = ""), i && i.charAt(0) !== "#" && (i = "#" + i), o && o.charAt(0) !== "?" && (o = "?" + o), e + s + (t = t.replace(/[?#]/g, function(a) {
        return encodeURIComponent(a)
    })) + (o = o.replace("#", "%23")) + i
}, ge.prototype.resolve = function(r) {
    return this.resolveObject(Tr(r, !1, !0)).format()
}, ge.prototype.resolveObject = function(r) {
    if (typeof r == "string") {
        var e = new ge;
        e.parse(r, !1, !0), r = e
    }
    for (var t = new ge, i = Object.keys(this), s = 0; s < i.length; s++) {
        var n = i[s];
        t[n] = this[n]
    }
    if (t.hash = r.hash, r.href === "") return t.href = t.format(), t;
    if (r.slashes && !r.protocol) {
        for (var o = Object.keys(r), a = 0; a < o.length; a++) {
            var h = o[a];
            h !== "protocol" && (t[h] = r[h])
        }
        return lt[t.protocol] && t.hostname && !t.pathname && (t.pathname = "/", t.path = t.pathname), t.href = t.format(), t
    }
    if (r.protocol && r.protocol !== t.protocol) {
        if (!lt[r.protocol]) {
            for (var l = Object.keys(r), u = 0; u < l.length; u++) {
                var c = l[u];
                t[c] = r[c]
            }
            return t.href = t.format(), t
        }
        if (t.protocol = r.protocol, r.host || Qr[r.protocol]) t.pathname = r.pathname;
        else {
            for (var d = (r.pathname || "").split("/"); d.length && !(r.host = d.shift()););
            r.host || (r.host = ""), r.hostname || (r.hostname = ""), d[0] !== "" && d.unshift(""), d.length < 2 && d.unshift(""), t.pathname = d.join("/")
        }
        if (t.search = r.search, t.query = r.query, t.host = r.host || "", t.auth = r.auth, t.hostname = r.hostname || r.host, t.port = r.port, t.pathname || t.search) {
            var p = t.pathname || "",
                f = t.search || "";
            t.path = p + f
        }
        return t.slashes = t.slashes || r.slashes, t.href = t.format(), t
    }
    var y = t.pathname && t.pathname.charAt(0) === "/",
        m = r.host || r.pathname && r.pathname.charAt(0) === "/",
        g = m || y || t.host && r.pathname,
        _ = g,
        x = t.pathname && t.pathname.split("/") || [],
        b = (d = r.pathname && r.pathname.split("/") || [], t.protocol && !lt[t.protocol]);
    if (b && (t.hostname = "", t.port = null, t.host && (x[0] === "" ? x[0] = t.host : x.unshift(t.host)), t.host = "", r.protocol && (r.hostname = null, r.port = null, r.host && (d[0] === "" ? d[0] = r.host : d.unshift(r.host)), r.host = null), g = g && (d[0] === "" || x[0] === "")), m) t.host = r.host || r.host === "" ? r.host : t.host, t.hostname = r.hostname || r.hostname === "" ? r.hostname : t.hostname, t.search = r.search, t.query = r.query, x = d;
    else if (d.length) x || (x = []), x.pop(), x = x.concat(d), t.search = r.search, t.query = r.query;
    else if (r.search != null) return b && (t.host = x.shift(), t.hostname = t.host, (M = !!(t.host && t.host.indexOf("@") > 0) && t.host.split("@")) && (t.auth = M.shift(), t.hostname = M.shift(), t.host = t.hostname)), t.search = r.search, t.query = r.query, t.pathname === null && t.search === null || (t.path = (t.pathname ? t.pathname : "") + (t.search ? t.search : "")), t.href = t.format(), t;
    if (!x.length) return t.pathname = null, t.search ? t.path = "/" + t.search : t.path = null, t.href = t.format(), t;
    for (var I = x.slice(-1)[0], C = (t.host || r.host || x.length > 1) && (I === "." || I === "..") || I === "", T = 0, w = x.length; w >= 0; w--)(I = x[w]) === "." ? x.splice(w, 1) : I === ".." ? (x.splice(w, 1), T++) : T && (x.splice(w, 1), T--);
    if (!g && !_)
        for (; T--; T) x.unshift("..");
    !g || x[0] === "" || x[0] && x[0].charAt(0) === "/" || x.unshift(""), C && x.join("/").substr(-1) !== "/" && x.push("");
    var M, ee = x[0] === "" || x[0] && x[0].charAt(0) === "/";
    return b && (t.hostname = ee ? "" : x.length ? x.shift() : "", t.host = t.hostname, (M = !!(t.host && t.host.indexOf("@") > 0) && t.host.split("@")) && (t.auth = M.shift(), t.hostname = M.shift(), t.host = t.hostname)), (g = g || t.host && x.length) && !ee && x.unshift(""), x.length > 0 ? t.pathname = x.join("/") : (t.pathname = null, t.path = null), t.pathname === null && t.search === null || (t.path = (t.pathname ? t.pathname : "") + (t.search ? t.search : "")), t.auth = r.auth || t.auth, t.slashes = t.slashes || r.slashes, t.href = t.format(), t
}, ge.prototype.parseHost = function() {
    var r = this.host,
        e = ph.exec(r);
    e && ((e = e[0]) !== ":" && (this.port = e.substr(1)), r = r.substr(0, r.length - e.length)), r && (this.hostname = r)
};
const _h = {
        parse: Tr,
        format: function(r) {
            return typeof r == "string" && (r = Tr(r)), r instanceof ge ? r.format() : ge.prototype.format.call(r)
        },
        resolve: function(r, e) {
            return Tr(r, !1, !0).resolve(e)
        }
    },
    un = {};

function k(r, e, t = 3) {
    if (un[e]) return;
    let i = new Error().stack;
    i === void 0 || (i = i.split(`
`).splice(t).join(`
`)), un[e] = !0
}
let ei;
var vh = {
    aliceblue: "#f0f8ff",
    antiquewhite: "#faebd7",
    aqua: "#00ffff",
    aquamarine: "#7fffd4",
    azure: "#f0ffff",
    beige: "#f5f5dc",
    bisque: "#ffe4c4",
    black: "#000000",
    blanchedalmond: "#ffebcd",
    blue: "#0000ff",
    blueviolet: "#8a2be2",
    brown: "#a52a2a",
    burlywood: "#deb887",
    cadetblue: "#5f9ea0",
    chartreuse: "#7fff00",
    chocolate: "#d2691e",
    coral: "#ff7f50",
    cornflowerblue: "#6495ed",
    cornsilk: "#fff8dc",
    crimson: "#dc143c",
    cyan: "#00ffff",
    darkblue: "#00008b",
    darkcyan: "#008b8b",
    darkgoldenrod: "#b8860b",
    darkgray: "#a9a9a9",
    darkgreen: "#006400",
    darkgrey: "#a9a9a9",
    darkkhaki: "#bdb76b",
    darkmagenta: "#8b008b",
    darkolivegreen: "#556b2f",
    darkorange: "#ff8c00",
    darkorchid: "#9932cc",
    darkred: "#8b0000",
    darksalmon: "#e9967a",
    darkseagreen: "#8fbc8f",
    darkslateblue: "#483d8b",
    darkslategray: "#2f4f4f",
    darkslategrey: "#2f4f4f",
    darkturquoise: "#00ced1",
    darkviolet: "#9400d3",
    deeppink: "#ff1493",
    deepskyblue: "#00bfff",
    dimgray: "#696969",
    dimgrey: "#696969",
    dodgerblue: "#1e90ff",
    firebrick: "#b22222",
    floralwhite: "#fffaf0",
    forestgreen: "#228b22",
    fuchsia: "#ff00ff",
    gainsboro: "#dcdcdc",
    ghostwhite: "#f8f8ff",
    goldenrod: "#daa520",
    gold: "#ffd700",
    gray: "#808080",
    green: "#008000",
    greenyellow: "#adff2f",
    grey: "#808080",
    honeydew: "#f0fff0",
    hotpink: "#ff69b4",
    indianred: "#cd5c5c",
    indigo: "#4b0082",
    ivory: "#fffff0",
    khaki: "#f0e68c",
    lavenderblush: "#fff0f5",
    lavender: "#e6e6fa",
    lawngreen: "#7cfc00",
    lemonchiffon: "#fffacd",
    lightblue: "#add8e6",
    lightcoral: "#f08080",
    lightcyan: "#e0ffff",
    lightgoldenrodyellow: "#fafad2",
    lightgray: "#d3d3d3",
    lightgreen: "#90ee90",
    lightgrey: "#d3d3d3",
    lightpink: "#ffb6c1",
    lightsalmon: "#ffa07a",
    lightseagreen: "#20b2aa",
    lightskyblue: "#87cefa",
    lightslategray: "#778899",
    lightslategrey: "#778899",
    lightsteelblue: "#b0c4de",
    lightyellow: "#ffffe0",
    lime: "#00ff00",
    limegreen: "#32cd32",
    linen: "#faf0e6",
    magenta: "#ff00ff",
    maroon: "#800000",
    mediumaquamarine: "#66cdaa",
    mediumblue: "#0000cd",
    mediumorchid: "#ba55d3",
    mediumpurple: "#9370db",
    mediumseagreen: "#3cb371",
    mediumslateblue: "#7b68ee",
    mediumspringgreen: "#00fa9a",
    mediumturquoise: "#48d1cc",
    mediumvioletred: "#c71585",
    midnightblue: "#191970",
    mintcream: "#f5fffa",
    mistyrose: "#ffe4e1",
    moccasin: "#ffe4b5",
    navajowhite: "#ffdead",
    navy: "#000080",
    oldlace: "#fdf5e6",
    olive: "#808000",
    olivedrab: "#6b8e23",
    orange: "#ffa500",
    orangered: "#ff4500",
    orchid: "#da70d6",
    palegoldenrod: "#eee8aa",
    palegreen: "#98fb98",
    paleturquoise: "#afeeee",
    palevioletred: "#db7093",
    papayawhip: "#ffefd5",
    peachpuff: "#ffdab9",
    peru: "#cd853f",
    pink: "#ffc0cb",
    plum: "#dda0dd",
    powderblue: "#b0e0e6",
    purple: "#800080",
    rebeccapurple: "#663399",
    red: "#ff0000",
    rosybrown: "#bc8f8f",
    royalblue: "#4169e1",
    saddlebrown: "#8b4513",
    salmon: "#fa8072",
    sandybrown: "#f4a460",
    seagreen: "#2e8b57",
    seashell: "#fff5ee",
    sienna: "#a0522d",
    silver: "#c0c0c0",
    skyblue: "#87ceeb",
    slateblue: "#6a5acd",
    slategray: "#708090",
    slategrey: "#708090",
    snow: "#fffafa",
    springgreen: "#00ff7f",
    steelblue: "#4682b4",
    tan: "#d2b48c",
    teal: "#008080",
    thistle: "#d8bfd8",
    tomato: "#ff6347",
    turquoise: "#40e0d0",
    violet: "#ee82ee",
    wheat: "#f5deb3",
    white: "#ffffff",
    whitesmoke: "#f5f5f5",
    yellow: "#ffff00",
    yellowgreen: "#9acd32"
};
const bh = function() {
    const r = [],
        e = [];
    for (let i = 0; i < 32; i++) r[i] = i, e[i] = i;
    r[A.NORMAL_NPM] = A.NORMAL, r[A.ADD_NPM] = A.ADD, r[A.SCREEN_NPM] = A.SCREEN, e[A.NORMAL] = A.NORMAL_NPM, e[A.ADD] = A.ADD_NPM, e[A.SCREEN] = A.SCREEN_NPM;
    const t = [];
    return t.push(e), t.push(r), t
}();

function cn(r) {
    if (r.BYTES_PER_ELEMENT === 4) return r instanceof Float32Array ? "Float32Array" : r instanceof Uint32Array ? "Uint32Array" : "Int32Array";
    if (r.BYTES_PER_ELEMENT === 2) {
        if (r instanceof Uint16Array) return "Uint16Array"
    } else if (r.BYTES_PER_ELEMENT === 1 && r instanceof Uint8Array) return "Uint8Array";
    return null
}

function Mr(r) {
    return r += r === 0 ? 1 : 0, --r, r |= r >>> 1, r |= r >>> 2, r |= r >>> 4, r |= r >>> 8, (r |= r >>> 16) + 1
}

function dn(r) {
    return !(r & r - 1 || !r)
}

function fn(r) {
    let e = (r > 65535 ? 1 : 0) << 4,
        t = ((r >>>= e) > 255 ? 1 : 0) << 3;
    return e |= t, t = ((r >>>= t) > 15 ? 1 : 0) << 2, e |= t, t = ((r >>>= t) > 3 ? 1 : 0) << 1, e |= t, e | (r >>>= t) >> 1
}

function wr(r, e, t) {
    const i = r.length;
    let s;
    if (e >= i || t === 0) return;
    const n = i - (t = e + t > i ? i - e : t);
    for (s = e; s < n; ++s) r[s] = r[s + t];
    r.length = n
}

function lr(r) {
    return r === 0 ? 0 : r < 0 ? -1 : 1
}
let Eh = 0;

function Xt() {
    return ++Eh
}
const pn = {},
    we = Object.create(null),
    Le = Object.create(null);
let ur;

function Th(r, e = globalThis.location) {
    if (r.startsWith("data:")) return "";
    e = e || globalThis.location, ur || (ur = document.createElement("a")), ur.href = r;
    const t = _h.parse(ur.href),
        i = !t.port && e.port === "" || t.port === e.port;
    return t.hostname === e.hostname && i && t.protocol === e.protocol ? "" : "anonymous"
}

function mn(r, e = 1) {
    var i;
    const t = (i = B.RETINA_PREFIX) == null ? void 0 : i.exec(r);
    return t ? parseFloat(t[1]) : e
}
var O = (r => (r.Renderer = "renderer", r.Application = "application", r.RendererSystem = "renderer-webgl-system", r.RendererPlugin = "renderer-webgl-plugin", r.CanvasRendererSystem = "renderer-canvas-system", r.CanvasRendererPlugin = "renderer-canvas-plugin", r.Asset = "asset", r.LoadParser = "load-parser", r.ResolveParser = "resolve-parser", r.CacheParser = "cache-parser", r.DetectionParser = "detection-parser", r))(O || {});
const Ti = r => {
        if (typeof r == "function" || typeof r == "object" && r.extension) {
            if (!r.extension) throw new Error("Extension class must have an extension object");
            r = gs(Kt({}, typeof r.extension != "object" ? {
                type: r.extension
            } : r.extension), {
                ref: r
            })
        }
        if (typeof r != "object") throw new Error("Invalid extension type");
        return typeof(r = Kt({}, r)).type == "string" && (r.type = [r.type]), r
    },
    gn = (r, e) => {
        var t;
        return (t = Ti(r).priority) != null ? t : e
    },
    G = {
        _addHandlers: {},
        _removeHandlers: {},
        _queue: {},
        remove(...r) {
            return r.map(Ti).forEach(e => {
                e.type.forEach(t => {
                    var i, s;
                    return (s = (i = this._removeHandlers)[t]) == null ? void 0 : s.call(i, e)
                })
            }), this
        },
        add(...r) {
            return r.map(Ti).forEach(e => {
                e.type.forEach(t => {
                    const i = this._addHandlers,
                        s = this._queue;
                    i[t] ? i[t](e) : (s[t] = s[t] || [], s[t].push(e))
                })
            }), this
        },
        handle(r, e, t) {
            const i = this._addHandlers,
                s = this._removeHandlers;
            if (i[r] || s[r]) throw new Error(`Extension type ${r} already has a handler`);
            i[r] = e, s[r] = t;
            const n = this._queue;
            return n[r] && (n[r].forEach(o => e(o)), delete n[r]), this
        },
        handleByMap(r, e) {
            return this.handle(r, t => {
                e[t.name] = t.ref
            }, t => {
                delete e[t.name]
            })
        },
        handleByList(r, e, t = -1) {
            return this.handle(r, i => {
                e.includes(i.ref) || (e.push(i.ref), e.sort((s, n) => gn(n, t) - gn(s, t)))
            }, i => {
                const s = e.indexOf(i.ref);
                s !== -1 && e.splice(s, 1)
            })
        }
    };
class wh {
    constructor(e) {
        typeof e == "number" ? this.rawBinaryData = new ArrayBuffer(e) : e instanceof Uint8Array ? this.rawBinaryData = e.buffer : this.rawBinaryData = e, this.uint32View = new Uint32Array(this.rawBinaryData), this.float32View = new Float32Array(this.rawBinaryData)
    }
    get int8View() {
        return this._int8View || (this._int8View = new Int8Array(this.rawBinaryData)), this._int8View
    }
    get uint8View() {
        return this._uint8View || (this._uint8View = new Uint8Array(this.rawBinaryData)), this._uint8View
    }
    get int16View() {
        return this._int16View || (this._int16View = new Int16Array(this.rawBinaryData)), this._int16View
    }
    get uint16View() {
        return this._uint16View || (this._uint16View = new Uint16Array(this.rawBinaryData)), this._uint16View
    }
    get int32View() {
        return this._int32View || (this._int32View = new Int32Array(this.rawBinaryData)), this._int32View
    }
    view(e) {
        return this[`${e}View`]
    }
    destroy() {
        this.rawBinaryData = null, this._int8View = null, this._uint8View = null, this._int16View = null, this._uint16View = null, this._int32View = null, this.uint32View = null, this.float32View = null
    }
    static sizeOf(e) {
        switch (e) {
            case "int8":
            case "uint8":
                return 1;
            case "int16":
            case "uint16":
                return 2;
            case "int32":
            case "uint32":
            case "float32":
                return 4;
            default:
                throw new Error(`${e} isn't a valid view type`)
        }
    }
}
const Sh = ["precision mediump float;", "void main(void){", "float test = 0.1;", "%forloop%", "gl_FragColor = vec4(0.0);", "}"].join(`
`);

function Ah(r) {
    let e = "";
    for (let t = 0; t < r; ++t) t > 0 && (e += `
else `), t < r - 1 && (e += `if(test == ${t}.0){}`);
    return e
}
class $t {
    constructor() {
        this.data = 0, this.blendMode = A.NORMAL, this.polygonOffset = 0, this.blend = !0, this.depthMask = !0
    }
    get blend() {
        return !!(1 & this.data)
    }
    set blend(e) {
        !!(1 & this.data) !== e && (this.data ^= 1)
    }
    get offsets() {
        return !!(2 & this.data)
    }
    set offsets(e) {
        !!(2 & this.data) !== e && (this.data ^= 2)
    }
    get culling() {
        return !!(4 & this.data)
    }
    set culling(e) {
        !!(4 & this.data) !== e && (this.data ^= 4)
    }
    get depthTest() {
        return !!(8 & this.data)
    }
    set depthTest(e) {
        !!(8 & this.data) !== e && (this.data ^= 8)
    }
    get depthMask() {
        return !!(32 & this.data)
    }
    set depthMask(e) {
        !!(32 & this.data) !== e && (this.data ^= 32)
    }
    get clockwiseFrontFace() {
        return !!(16 & this.data)
    }
    set clockwiseFrontFace(e) {
        !!(16 & this.data) !== e && (this.data ^= 16)
    }
    get blendMode() {
        return this._blendMode
    }
    set blendMode(e) {
        this.blend = e !== A.NONE, this._blendMode = e
    }
    get polygonOffset() {
        return this._polygonOffset
    }
    set polygonOffset(e) {
        this.offsets = !!e, this._polygonOffset = e
    }
    toString() {
        return `[@pixi/core:State blendMode=${this.blendMode} clockwiseFrontFace=${this.clockwiseFrontFace} culling=${this.culling} depthMask=${this.depthMask} polygonOffset=${this.polygonOffset}]`
    }
    static for2d() {
        const e = new $t;
        return e.depthTest = !1, e.blend = !0, e
    }
}
const wi = [];

function bo(r, e) {
    if (!r) return null;
    let t = "";
    if (typeof r == "string") {
        const i = /\.(\w{3,4})(?:$|\?|#)/i.exec(r);
        i && (t = i[1].toLowerCase())
    }
    for (let i = wi.length - 1; i >= 0; --i) {
        const s = wi[i];
        if (s.test && s.test(r, t)) return new s(r, e)
    }
    throw new Error("Unrecognized source type to auto-detect Resource")
}
class ve {
    constructor(e) {
        this.items = [], this._name = e, this._aliasCount = 0
    }
    emit(e, t, i, s, n, o, a, h) {
        if (arguments.length > 8) throw new Error("max arguments reached");
        const {
            name: l,
            items: u
        } = this;
        this._aliasCount++;
        for (let c = 0, d = u.length; c < d; c++) u[c][l](e, t, i, s, n, o, a, h);
        return u === this.items && this._aliasCount--, this
    }
    ensureNonAliasedItems() {
        this._aliasCount > 0 && this.items.length > 1 && (this._aliasCount = 0, this.items = this.items.slice(0))
    }
    add(e) {
        return e[this._name] && (this.ensureNonAliasedItems(), this.remove(e), this.items.push(e)), this
    }
    remove(e) {
        const t = this.items.indexOf(e);
        return t !== -1 && (this.ensureNonAliasedItems(), this.items.splice(t, 1)), this
    }
    contains(e) {
        return this.items.includes(e)
    }
    removeAll() {
        return this.ensureNonAliasedItems(), this.items.length = 0, this
    }
    destroy() {
        this.removeAll(), this.items = null, this._name = null
    }
    get empty() {
        return this.items.length === 0
    }
    get name() {
        return this._name
    }
}
Object.defineProperties(ve.prototype, {
    dispatch: {
        value: ve.prototype.emit
    },
    run: {
        value: ve.prototype.emit
    }
});
class Vt {
    constructor(e = 0, t = 0) {
        this._width = e, this._height = t, this.destroyed = !1, this.internal = !1, this.onResize = new ve("setRealSize"), this.onUpdate = new ve("update"), this.onError = new ve("onError")
    }
    bind(e) {
        this.onResize.add(e), this.onUpdate.add(e), this.onError.add(e), (this._width || this._height) && this.onResize.emit(this._width, this._height)
    }
    unbind(e) {
        this.onResize.remove(e), this.onUpdate.remove(e), this.onError.remove(e)
    }
    resize(e, t) {
        e === this._width && t === this._height || (this._width = e, this._height = t, this.onResize.emit(e, t))
    }
    get valid() {
        return !!this._width && !!this._height
    }
    update() {
        this.destroyed || this.onUpdate.emit()
    }
    load() {
        return Promise.resolve(this)
    }
    get width() {
        return this._width
    }
    get height() {
        return this._height
    }
    style(e, t, i) {
        return !1
    }
    dispose() {}
    destroy() {
        this.destroyed || (this.destroyed = !0, this.dispose(), this.onError.removeAll(), this.onError = null, this.onResize.removeAll(), this.onResize = null, this.onUpdate.removeAll(), this.onUpdate = null)
    }
    static test(e, t) {
        return !1
    }
}
class us extends Vt {
    constructor(e, t) {
        const {
            width: i,
            height: s
        } = t || {};
        if (!i || !s) throw new Error("BufferResource width or height invalid");
        super(i, s), this.data = e
    }
    upload(e, t, i) {
        const s = e.gl;
        s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL, t.alphaMode === He.UNPACK);
        const n = t.realWidth,
            o = t.realHeight;
        return i.width === n && i.height === o ? s.texSubImage2D(t.target, 0, 0, 0, n, o, t.format, i.type, this.data) : (i.width = n, i.height = o, s.texImage2D(t.target, 0, i.internalFormat, n, o, 0, t.format, i.type, this.data)), !0
    }
    dispose() {
        this.data = null
    }
    static test(e) {
        return e instanceof Float32Array || e instanceof Uint8Array || e instanceof Uint32Array
    }
}
const Rh = {
        scaleMode: Ne.NEAREST,
        format: E.RGBA,
        alphaMode: He.NPM
    },
    gt = class extends Fr {
        constructor(r = null, e = null) {
            super(), e = Object.assign({}, gt.defaultOptions, e);
            const {
                alphaMode: t,
                mipmap: i,
                anisotropicLevel: s,
                scaleMode: n,
                width: o,
                height: a,
                wrapMode: h,
                format: l,
                type: u,
                target: c,
                resolution: d,
                resourceOptions: p
            } = e;
            !r || r instanceof Vt || ((r = bo(r, p)).internal = !0), this.resolution = d || B.RESOLUTION, this.width = Math.round((o || 0) * this.resolution) / this.resolution, this.height = Math.round((a || 0) * this.resolution) / this.resolution, this._mipmap = i, this.anisotropicLevel = s, this._wrapMode = h, this._scaleMode = n, this.format = l, this.type = u, this.target = c, this.alphaMode = t, this.uid = Xt(), this.touched = 0, this.isPowerOfTwo = !1, this._refreshPOT(), this._glTextures = {}, this.dirtyId = 0, this.dirtyStyleId = 0, this.cacheId = null, this.valid = o > 0 && a > 0, this.textureCacheIds = [], this.destroyed = !1, this.resource = null, this._batchEnabled = 0, this._batchLocation = 0, this.parentTextureArray = null, this.setResource(r)
        }
        get realWidth() {
            return Math.round(this.width * this.resolution)
        }
        get realHeight() {
            return Math.round(this.height * this.resolution)
        }
        get mipmap() {
            return this._mipmap
        }
        set mipmap(r) {
            this._mipmap !== r && (this._mipmap = r, this.dirtyStyleId++)
        }
        get scaleMode() {
            return this._scaleMode
        }
        set scaleMode(r) {
            this._scaleMode !== r && (this._scaleMode = r, this.dirtyStyleId++)
        }
        get wrapMode() {
            return this._wrapMode
        }
        set wrapMode(r) {
            this._wrapMode !== r && (this._wrapMode = r, this.dirtyStyleId++)
        }
        setStyle(r, e) {
            let t;
            return r !== void 0 && r !== this.scaleMode && (this.scaleMode = r, t = !0), e !== void 0 && e !== this.mipmap && (this.mipmap = e, t = !0), t && this.dirtyStyleId++, this
        }
        setSize(r, e, t) {
            return t = t || this.resolution, this.setRealSize(r * t, e * t, t)
        }
        setRealSize(r, e, t) {
            return this.resolution = t || this.resolution, this.width = Math.round(r) / this.resolution, this.height = Math.round(e) / this.resolution, this._refreshPOT(), this.update(), this
        }
        _refreshPOT() {
            this.isPowerOfTwo = dn(this.realWidth) && dn(this.realHeight)
        }
        setResolution(r) {
            const e = this.resolution;
            return e === r || (this.resolution = r, this.valid && (this.width = Math.round(this.width * e) / r, this.height = Math.round(this.height * e) / r, this.emit("update", this)), this._refreshPOT()), this
        }
        setResource(r) {
            if (this.resource === r) return this;
            if (this.resource) throw new Error("Resource can be set only once");
            return r.bind(this), this.resource = r, this
        }
        update() {
            this.valid ? (this.dirtyId++, this.dirtyStyleId++, this.emit("update", this)) : this.width > 0 && this.height > 0 && (this.valid = !0, this.emit("loaded", this), this.emit("update", this))
        }
        onError(r) {
            this.emit("error", this, r)
        }
        destroy() {
            this.resource && (this.resource.unbind(this), this.resource.internal && this.resource.destroy(), this.resource = null), this.cacheId && (delete Le[this.cacheId], delete we[this.cacheId], this.cacheId = null), this.dispose(), gt.removeFromCache(this), this.textureCacheIds = null, this.destroyed = !0
        }
        dispose() {
            this.emit("dispose", this)
        }
        castToBaseTexture() {
            return this
        }
        static from(r, e, t = B.STRICT_TEXTURE_CACHE) {
            const i = typeof r == "string";
            let s = null;
            if (i) s = r;
            else {
                if (!r._pixiId) {
                    const o = (e == null ? void 0 : e.pixiIdPrefix) || "pixiid";
                    r._pixiId = `${o}_${Xt()}`
                }
                s = r._pixiId
            }
            let n = Le[s];
            if (i && t && !n) throw new Error(`The cacheId "${s}" does not exist in BaseTextureCache.`);
            return n || (n = new gt(r, e), n.cacheId = s, gt.addToCache(n, s)), n
        }
        static fromBuffer(r, e, t, i) {
            r = r || new Float32Array(e * t * 4);
            const s = new us(r, {
                    width: e,
                    height: t
                }),
                n = r instanceof Float32Array ? L.FLOAT : L.UNSIGNED_BYTE;
            return new gt(s, Object.assign({}, Rh, i || {
                width: e,
                height: t,
                type: n
            }))
        }
        static addToCache(r, e) {
            e && (r.textureCacheIds.includes(e) || r.textureCacheIds.push(e), Le[e] && Le[e], Le[e] = r)
        }
        static removeFromCache(r) {
            if (typeof r == "string") {
                const e = Le[r];
                if (e) {
                    const t = e.textureCacheIds.indexOf(r);
                    return t > -1 && e.textureCacheIds.splice(t, 1), delete Le[r], e
                }
            } else if (r != null && r.textureCacheIds) {
                for (let e = 0; e < r.textureCacheIds.length; ++e) delete Le[r.textureCacheIds[e]];
                return r.textureCacheIds.length = 0, r
            }
            return null
        }
    };
let U = gt;
U.defaultOptions = {
    mipmap: rt.POW2,
    anisotropicLevel: 0,
    scaleMode: Ne.LINEAR,
    wrapMode: rs.CLAMP,
    alphaMode: He.UNPACK,
    target: Et.TEXTURE_2D,
    format: E.RGBA,
    type: L.UNSIGNED_BYTE
}, U._globalBatch = 0;
class Ih {
    constructor() {
        this.texArray = null, this.blend = 0, this.type = Ir.TRIANGLES, this.start = 0, this.size = 0, this.data = null
    }
}
let Ch = 0;
class se {
    constructor(e, t = !0, i = !1) {
        this.data = e || new Float32Array(1), this._glBuffers = {}, this._updateID = 0, this.index = i, this.static = t, this.id = Ch++, this.disposeRunner = new ve("disposeBuffer")
    }
    update(e) {
        e instanceof Array && (e = new Float32Array(e)), this.data = e || this.data, this._updateID++
    }
    dispose() {
        this.disposeRunner.emit(this, !1)
    }
    destroy() {
        this.dispose(), this.data = null
    }
    set index(e) {
        this.type = e ? Ie.ELEMENT_ARRAY_BUFFER : Ie.ARRAY_BUFFER
    }
    get index() {
        return this.type === Ie.ELEMENT_ARRAY_BUFFER
    }
    static from(e) {
        return e instanceof Array && (e = new Float32Array(e)), new se(e)
    }
}
class Pr {
    constructor(e, t = 0, i = !1, s = L.FLOAT, n, o, a, h = 1) {
        this.buffer = e, this.size = t, this.normalized = i, this.type = s, this.stride = n, this.start = o, this.instance = a, this.divisor = h
    }
    destroy() {
        this.buffer = null
    }
    static from(e, t, i, s, n) {
        return new Pr(e, t, i, s, n)
    }
}
const Mh = {
        Float32Array,
        Uint32Array,
        Int32Array,
        Uint8Array
    },
    yn = {
        5126: 4,
        5123: 2,
        5121: 1
    };
let Ph = 0;
const Nh = {
    Float32Array,
    Uint32Array,
    Int32Array,
    Uint8Array,
    Uint16Array
};
class At {
    constructor(e = [], t = {}) {
        this.buffers = e, this.indexBuffer = null, this.attributes = t, this.glVertexArrayObjects = {}, this.id = Ph++, this.instanced = !1, this.instanceCount = 1, this.disposeRunner = new ve("disposeGeometry"), this.refCount = 0
    }
    addAttribute(e, t, i = 0, s = !1, n, o, a, h = !1) {
        if (!t) throw new Error("You must pass a buffer when creating an attribute");
        t instanceof se || (t instanceof Array && (t = new Float32Array(t)), t = new se(t));
        const l = e.split("|");
        if (l.length > 1) {
            for (let c = 0; c < l.length; c++) this.addAttribute(l[c], t, i, s, n);
            return this
        }
        let u = this.buffers.indexOf(t);
        return u === -1 && (this.buffers.push(t), u = this.buffers.length - 1), this.attributes[e] = new Pr(u, i, s, n, o, a, h), this.instanced = this.instanced || h, this
    }
    getAttribute(e) {
        return this.attributes[e]
    }
    getBuffer(e) {
        return this.buffers[this.getAttribute(e).buffer]
    }
    addIndex(e) {
        return e instanceof se || (e instanceof Array && (e = new Uint16Array(e)), e = new se(e)), e.type = Ie.ELEMENT_ARRAY_BUFFER, this.indexBuffer = e, this.buffers.includes(e) || this.buffers.push(e), this
    }
    getIndex() {
        return this.indexBuffer
    }
    interleave() {
        if (this.buffers.length === 1 || this.buffers.length === 2 && this.indexBuffer) return this;
        const e = [],
            t = [],
            i = new se;
        let s;
        for (s in this.attributes) {
            const n = this.attributes[s],
                o = this.buffers[n.buffer];
            e.push(o.data), t.push(n.size * yn[n.type] / 4), n.buffer = 0
        }
        for (i.data = function(n, o) {
                let a = 0,
                    h = 0;
                const l = {};
                for (let p = 0; p < n.length; p++) h += o[p], a += n[p].length;
                const u = new ArrayBuffer(4 * a);
                let c = null,
                    d = 0;
                for (let p = 0; p < n.length; p++) {
                    const f = o[p],
                        y = n[p],
                        m = cn(y);
                    l[m] || (l[m] = new Mh[m](u)), c = l[m];
                    for (let g = 0; g < y.length; g++) c[(g / f | 0) * h + d + g % f] = y[g];
                    d += f
                }
                return new Float32Array(u)
            }(e, t), s = 0; s < this.buffers.length; s++) this.buffers[s] !== this.indexBuffer && this.buffers[s].destroy();
        return this.buffers = [i], this.indexBuffer && this.buffers.push(this.indexBuffer), this
    }
    getSize() {
        for (const e in this.attributes) {
            const t = this.attributes[e];
            return this.buffers[t.buffer].data.length / (t.stride / 4 || t.size)
        }
        return 0
    }
    dispose() {
        this.disposeRunner.emit(this, !1)
    }
    destroy() {
        this.dispose(), this.buffers = null, this.indexBuffer = null, this.attributes = null
    }
    clone() {
        const e = new At;
        for (let t = 0; t < this.buffers.length; t++) e.buffers[t] = new se(this.buffers[t].data.slice(0));
        for (const t in this.attributes) {
            const i = this.attributes[t];
            e.attributes[t] = new Pr(i.buffer, i.size, i.normalized, i.type, i.stride, i.start, i.instance)
        }
        return this.indexBuffer && (e.indexBuffer = e.buffers[this.buffers.indexOf(this.indexBuffer)], e.indexBuffer.type = Ie.ELEMENT_ARRAY_BUFFER), e
    }
    static merge(e) {
        const t = new At,
            i = [],
            s = [],
            n = [];
        let o;
        for (let a = 0; a < e.length; a++) {
            o = e[a];
            for (let h = 0; h < o.buffers.length; h++) s[h] = s[h] || 0, s[h] += o.buffers[h].data.length, n[h] = 0
        }
        for (let a = 0; a < o.buffers.length; a++) i[a] = new Nh[cn(o.buffers[a].data)](s[a]), t.buffers[a] = new se(i[a]);
        for (let a = 0; a < e.length; a++) {
            o = e[a];
            for (let h = 0; h < o.buffers.length; h++) i[h].set(o.buffers[h].data, n[h]), n[h] += o.buffers[h].data.length
        }
        if (t.attributes = o.attributes, o.indexBuffer) {
            t.indexBuffer = t.buffers[o.buffers.indexOf(o.indexBuffer)], t.indexBuffer.type = Ie.ELEMENT_ARRAY_BUFFER;
            let a = 0,
                h = 0,
                l = 0,
                u = 0;
            for (let c = 0; c < o.buffers.length; c++)
                if (o.buffers[c] !== o.indexBuffer) {
                    u = c;
                    break
                }
            for (const c in o.attributes) {
                const d = o.attributes[c];
                (0 | d.buffer) === u && (h += d.size * yn[d.type] / 4)
            }
            for (let c = 0; c < e.length; c++) {
                const d = e[c].indexBuffer.data;
                for (let p = 0; p < d.length; p++) t.indexBuffer.data[p + l] += a;
                a += e[c].buffers[u].data.length / h, l += d.length
            }
        }
        return t
    }
}
class Oh extends At {
    constructor(e = !1) {
        super(), this._buffer = new se(null, e, !1), this._indexBuffer = new se(null, e, !0), this.addAttribute("aVertexPosition", this._buffer, 2, !1, L.FLOAT).addAttribute("aTextureCoord", this._buffer, 2, !1, L.FLOAT).addAttribute("aColor", this._buffer, 4, !0, L.UNSIGNED_BYTE).addAttribute("aTextureId", this._buffer, 1, !0, L.FLOAT).addIndex(this._indexBuffer)
    }
}
const Fh = 2 * Math.PI,
    Bh = 180 / Math.PI,
    Lh = Math.PI / 180;
var Eo = (r => (r[r.POLY = 0] = "POLY", r[r.RECT = 1] = "RECT", r[r.CIRC = 2] = "CIRC", r[r.ELIP = 3] = "ELIP", r[r.RREC = 4] = "RREC", r))(Eo || {});
class W {
    constructor(e = 0, t = 0) {
        this.x = 0, this.y = 0, this.x = e, this.y = t
    }
    clone() {
        return new W(this.x, this.y)
    }
    copyFrom(e) {
        return this.set(e.x, e.y), this
    }
    copyTo(e) {
        return e.set(this.x, this.y), e
    }
    equals(e) {
        return e.x === this.x && e.y === this.y
    }
    set(e = 0, t = e) {
        return this.x = e, this.y = t, this
    }
    toString() {
        return `[@pixi/math:Point x=${this.x} y=${this.y}]`
    }
}
const cr = [new W, new W, new W, new W];
let z = class Si {
    constructor(e = 0, t = 0, i = 0, s = 0) {
        this.x = Number(e), this.y = Number(t), this.width = Number(i), this.height = Number(s), this.type = Eo.RECT
    }
    get left() {
        return this.x
    }
    get right() {
        return this.x + this.width
    }
    get top() {
        return this.y
    }
    get bottom() {
        return this.y + this.height
    }
    static get EMPTY() {
        return new Si(0, 0, 0, 0)
    }
    clone() {
        return new Si(this.x, this.y, this.width, this.height)
    }
    copyFrom(e) {
        return this.x = e.x, this.y = e.y, this.width = e.width, this.height = e.height, this
    }
    copyTo(e) {
        return e.x = this.x, e.y = this.y, e.width = this.width, e.height = this.height, e
    }
    contains(e, t) {
        return !(this.width <= 0 || this.height <= 0) && e >= this.x && e < this.x + this.width && t >= this.y && t < this.y + this.height
    }
    intersects(e, t) {
        if (!t) {
            const w = this.x < e.x ? e.x : this.x;
            if ((this.right > e.right ? e.right : this.right) <= w) return !1;
            const M = this.y < e.y ? e.y : this.y;
            return (this.bottom > e.bottom ? e.bottom : this.bottom) > M
        }
        const i = this.left,
            s = this.right,
            n = this.top,
            o = this.bottom;
        if (s <= i || o <= n) return !1;
        const a = cr[0].set(e.left, e.top),
            h = cr[1].set(e.left, e.bottom),
            l = cr[2].set(e.right, e.top),
            u = cr[3].set(e.right, e.bottom);
        if (l.x <= a.x || h.y <= a.y) return !1;
        const c = Math.sign(t.a * t.d - t.b * t.c);
        if (c === 0 || (t.apply(a, a), t.apply(h, h), t.apply(l, l), t.apply(u, u), Math.max(a.x, h.x, l.x, u.x) <= i || Math.min(a.x, h.x, l.x, u.x) >= s || Math.max(a.y, h.y, l.y, u.y) <= n || Math.min(a.y, h.y, l.y, u.y) >= o)) return !1;
        const d = c * (h.y - a.y),
            p = c * (a.x - h.x),
            f = d * i + p * n,
            y = d * s + p * n,
            m = d * i + p * o,
            g = d * s + p * o;
        if (Math.max(f, y, m, g) <= d * a.x + p * a.y || Math.min(f, y, m, g) >= d * u.x + p * u.y) return !1;
        const _ = c * (a.y - l.y),
            x = c * (l.x - a.x),
            b = _ * i + x * n,
            I = _ * s + x * n,
            C = _ * i + x * o,
            T = _ * s + x * o;
        return !(Math.max(b, I, C, T) <= _ * a.x + x * a.y || Math.min(b, I, C, T) >= _ * u.x + x * u.y)
    }
    pad(e = 0, t = e) {
        return this.x -= e, this.y -= t, this.width += 2 * e, this.height += 2 * t, this
    }
    fit(e) {
        const t = Math.max(this.x, e.x),
            i = Math.min(this.x + this.width, e.x + e.width),
            s = Math.max(this.y, e.y),
            n = Math.min(this.y + this.height, e.y + e.height);
        return this.x = t, this.width = Math.max(i - t, 0), this.y = s, this.height = Math.max(n - s, 0), this
    }
    ceil(e = 1, t = .001) {
        const i = Math.ceil((this.x + this.width - t) * e) / e,
            s = Math.ceil((this.y + this.height - t) * e) / e;
        return this.x = Math.floor((this.x + t) * e) / e, this.y = Math.floor((this.y + t) * e) / e, this.width = i - this.x, this.height = s - this.y, this
    }
    enlarge(e) {
        const t = Math.min(this.x, e.x),
            i = Math.max(this.x + this.width, e.x + e.width),
            s = Math.min(this.y, e.y),
            n = Math.max(this.y + this.height, e.y + e.height);
        return this.x = t, this.width = i - t, this.y = s, this.height = n - s, this
    }
    toString() {
        return `[@pixi/math:Rectangle x=${this.x} y=${this.y} width=${this.width} height=${this.height}]`
    }
};
class J {
    constructor(e = 1, t = 0, i = 0, s = 1, n = 0, o = 0) {
        this.array = null, this.a = e, this.b = t, this.c = i, this.d = s, this.tx = n, this.ty = o
    }
    fromArray(e) {
        this.a = e[0], this.b = e[1], this.c = e[3], this.d = e[4], this.tx = e[2], this.ty = e[5]
    }
    set(e, t, i, s, n, o) {
        return this.a = e, this.b = t, this.c = i, this.d = s, this.tx = n, this.ty = o, this
    }
    toArray(e, t) {
        this.array || (this.array = new Float32Array(9));
        const i = t || this.array;
        return e ? (i[0] = this.a, i[1] = this.b, i[2] = 0, i[3] = this.c, i[4] = this.d, i[5] = 0, i[6] = this.tx, i[7] = this.ty, i[8] = 1) : (i[0] = this.a, i[1] = this.c, i[2] = this.tx, i[3] = this.b, i[4] = this.d, i[5] = this.ty, i[6] = 0, i[7] = 0, i[8] = 1), i
    }
    apply(e, t) {
        t = t || new W;
        const i = e.x,
            s = e.y;
        return t.x = this.a * i + this.c * s + this.tx, t.y = this.b * i + this.d * s + this.ty, t
    }
    applyInverse(e, t) {
        t = t || new W;
        const i = 1 / (this.a * this.d + this.c * -this.b),
            s = e.x,
            n = e.y;
        return t.x = this.d * i * s + -this.c * i * n + (this.ty * this.c - this.tx * this.d) * i, t.y = this.a * i * n + -this.b * i * s + (-this.ty * this.a + this.tx * this.b) * i, t
    }
    translate(e, t) {
        return this.tx += e, this.ty += t, this
    }
    scale(e, t) {
        return this.a *= e, this.d *= t, this.c *= e, this.b *= t, this.tx *= e, this.ty *= t, this
    }
    rotate(e) {
        const t = Math.cos(e),
            i = Math.sin(e),
            s = this.a,
            n = this.c,
            o = this.tx;
        return this.a = s * t - this.b * i, this.b = s * i + this.b * t, this.c = n * t - this.d * i, this.d = n * i + this.d * t, this.tx = o * t - this.ty * i, this.ty = o * i + this.ty * t, this
    }
    append(e) {
        const t = this.a,
            i = this.b,
            s = this.c,
            n = this.d;
        return this.a = e.a * t + e.b * s, this.b = e.a * i + e.b * n, this.c = e.c * t + e.d * s, this.d = e.c * i + e.d * n, this.tx = e.tx * t + e.ty * s + this.tx, this.ty = e.tx * i + e.ty * n + this.ty, this
    }
    setTransform(e, t, i, s, n, o, a, h, l) {
        return this.a = Math.cos(a + l) * n, this.b = Math.sin(a + l) * n, this.c = -Math.sin(a - h) * o, this.d = Math.cos(a - h) * o, this.tx = e - (i * this.a + s * this.c), this.ty = t - (i * this.b + s * this.d), this
    }
    prepend(e) {
        const t = this.tx;
        if (e.a !== 1 || e.b !== 0 || e.c !== 0 || e.d !== 1) {
            const i = this.a,
                s = this.c;
            this.a = i * e.a + this.b * e.c, this.b = i * e.b + this.b * e.d, this.c = s * e.a + this.d * e.c, this.d = s * e.b + this.d * e.d
        }
        return this.tx = t * e.a + this.ty * e.c + e.tx, this.ty = t * e.b + this.ty * e.d + e.ty, this
    }
    decompose(e) {
        const t = this.a,
            i = this.b,
            s = this.c,
            n = this.d,
            o = e.pivot,
            a = -Math.atan2(-s, n),
            h = Math.atan2(i, t),
            l = Math.abs(a + h);
        return l < 1e-5 || Math.abs(Fh - l) < 1e-5 ? (e.rotation = h, e.skew.x = e.skew.y = 0) : (e.rotation = 0, e.skew.x = a, e.skew.y = h), e.scale.x = Math.sqrt(t * t + i * i), e.scale.y = Math.sqrt(s * s + n * n), e.position.x = this.tx + (o.x * t + o.y * s), e.position.y = this.ty + (o.x * i + o.y * n), e
    }
    invert() {
        const e = this.a,
            t = this.b,
            i = this.c,
            s = this.d,
            n = this.tx,
            o = e * s - t * i;
        return this.a = s / o, this.b = -t / o, this.c = -i / o, this.d = e / o, this.tx = (i * this.ty - s * n) / o, this.ty = -(e * this.ty - t * n) / o, this
    }
    identity() {
        return this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.tx = 0, this.ty = 0, this
    }
    clone() {
        const e = new J;
        return e.a = this.a, e.b = this.b, e.c = this.c, e.d = this.d, e.tx = this.tx, e.ty = this.ty, e
    }
    copyTo(e) {
        return e.a = this.a, e.b = this.b, e.c = this.c, e.d = this.d, e.tx = this.tx, e.ty = this.ty, e
    }
    copyFrom(e) {
        return this.a = e.a, this.b = e.b, this.c = e.c, this.d = e.d, this.tx = e.tx, this.ty = e.ty, this
    }
    toString() {
        return `[@pixi/math:Matrix a=${this.a} b=${this.b} c=${this.c} d=${this.d} tx=${this.tx} ty=${this.ty}]`
    }
    static get IDENTITY() {
        return new J
    }
    static get TEMP_MATRIX() {
        return new J
    }
}
const qe = [1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1, 0, 1],
    Ze = [0, 1, 1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1],
    Ke = [0, -1, -1, -1, 0, 1, 1, 1, 0, 1, 1, 1, 0, -1, -1, -1],
    Qe = [1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, 1, 1, 1, 0, -1],
    Ai = [],
    To = [],
    dr = Math.sign;
(function() {
    for (let r = 0; r < 16; r++) {
        const e = [];
        Ai.push(e);
        for (let t = 0; t < 16; t++) {
            const i = dr(qe[r] * qe[t] + Ke[r] * Ze[t]),
                s = dr(Ze[r] * qe[t] + Qe[r] * Ze[t]),
                n = dr(qe[r] * Ke[t] + Ke[r] * Qe[t]),
                o = dr(Ze[r] * Ke[t] + Qe[r] * Qe[t]);
            for (let a = 0; a < 16; a++)
                if (qe[a] === i && Ze[a] === s && Ke[a] === n && Qe[a] === o) {
                    e.push(a);
                    break
                }
        }
    }
    for (let r = 0; r < 16; r++) {
        const e = new J;
        e.set(qe[r], Ze[r], Ke[r], Qe[r], 0, 0), To.push(e)
    }
})();
const V = {
    E: 0,
    SE: 1,
    S: 2,
    SW: 3,
    W: 4,
    NW: 5,
    N: 6,
    NE: 7,
    MIRROR_VERTICAL: 8,
    MAIN_DIAGONAL: 10,
    MIRROR_HORIZONTAL: 12,
    REVERSE_DIAGONAL: 14,
    uX: r => qe[r],
    uY: r => Ze[r],
    vX: r => Ke[r],
    vY: r => Qe[r],
    inv: r => 8 & r ? 15 & r : 7 & -r,
    add: (r, e) => Ai[r][e],
    sub: (r, e) => Ai[r][V.inv(e)],
    rotate180: r => 4 ^ r,
    isVertical: r => (3 & r) == 2,
    byDirection: (r, e) => 2 * Math.abs(r) <= Math.abs(e) ? e >= 0 ? V.S : V.N : 2 * Math.abs(e) <= Math.abs(r) ? r > 0 ? V.E : V.W : e > 0 ? r > 0 ? V.SE : V.SW : r > 0 ? V.NE : V.NW,
    matrixAppendRotationInv: (r, e, t = 0, i = 0) => {
        const s = To[V.inv(e)];
        s.tx = t, s.ty = i, r.append(s)
    }
};
class Je {
    constructor(e, t, i = 0, s = 0) {
        this._x = i, this._y = s, this.cb = e, this.scope = t
    }
    clone(e = this.cb, t = this.scope) {
        return new Je(e, t, this._x, this._y)
    }
    set(e = 0, t = e) {
        return this._x === e && this._y === t || (this._x = e, this._y = t, this.cb.call(this.scope)), this
    }
    copyFrom(e) {
        return this._x === e.x && this._y === e.y || (this._x = e.x, this._y = e.y, this.cb.call(this.scope)), this
    }
    copyTo(e) {
        return e.set(this._x, this._y), e
    }
    equals(e) {
        return e.x === this._x && e.y === this._y
    }
    toString() {
        return `[@pixi/math:ObservablePoint x=0 y=0 scope=${this.scope}]`
    }
    get x() {
        return this._x
    }
    set x(e) {
        this._x !== e && (this._x = e, this.cb.call(this.scope))
    }
    get y() {
        return this._y
    }
    set y(e) {
        this._y !== e && (this._y = e, this.cb.call(this.scope))
    }
}
const wo = class {
    constructor() {
        this.worldTransform = new J, this.localTransform = new J, this.position = new Je(this.onChange, this, 0, 0), this.scale = new Je(this.onChange, this, 1, 1), this.pivot = new Je(this.onChange, this, 0, 0), this.skew = new Je(this.updateSkew, this, 0, 0), this._rotation = 0, this._cx = 1, this._sx = 0, this._cy = 0, this._sy = 1, this._localID = 0, this._currentLocalID = 0, this._worldID = 0, this._parentID = 0
    }
    onChange() {
        this._localID++
    }
    updateSkew() {
        this._cx = Math.cos(this._rotation + this.skew.y), this._sx = Math.sin(this._rotation + this.skew.y), this._cy = -Math.sin(this._rotation - this.skew.x), this._sy = Math.cos(this._rotation - this.skew.x), this._localID++
    }
    toString() {
        return `[@pixi/math:Transform position=(${this.position.x}, ${this.position.y}) rotation=${this.rotation} scale=(${this.scale.x}, ${this.scale.y}) skew=(${this.skew.x}, ${this.skew.y}) ]`
    }
    updateLocalTransform() {
        const r = this.localTransform;
        this._localID !== this._currentLocalID && (r.a = this._cx * this.scale.x, r.b = this._sx * this.scale.x, r.c = this._cy * this.scale.y, r.d = this._sy * this.scale.y, r.tx = this.position.x - (this.pivot.x * r.a + this.pivot.y * r.c), r.ty = this.position.y - (this.pivot.x * r.b + this.pivot.y * r.d), this._currentLocalID = this._localID, this._parentID = -1)
    }
    updateTransform(r) {
        const e = this.localTransform;
        if (this._localID !== this._currentLocalID && (e.a = this._cx * this.scale.x, e.b = this._sx * this.scale.x, e.c = this._cy * this.scale.y, e.d = this._sy * this.scale.y, e.tx = this.position.x - (this.pivot.x * e.a + this.pivot.y * e.c), e.ty = this.position.y - (this.pivot.x * e.b + this.pivot.y * e.d), this._currentLocalID = this._localID, this._parentID = -1), this._parentID !== r._worldID) {
            const t = r.worldTransform,
                i = this.worldTransform;
            i.a = e.a * t.a + e.b * t.c, i.b = e.a * t.b + e.b * t.d, i.c = e.c * t.a + e.d * t.c, i.d = e.c * t.b + e.d * t.d, i.tx = e.tx * t.a + e.ty * t.c + t.tx, i.ty = e.tx * t.b + e.ty * t.d + t.ty, this._parentID = r._worldID, this._worldID++
        }
    }
    setFromMatrix(r) {
        r.decompose(this), this._localID++
    }
    get rotation() {
        return this._rotation
    }
    set rotation(r) {
        this._rotation !== r && (this._rotation = r, this.updateSkew())
    }
};
let cs = wo;
cs.IDENTITY = new wo;

function xn(r, e, t) {
    const i = r.createShader(e);
    return r.shaderSource(i, t), r.compileShader(i), i
}

function ti(r) {
    const e = new Array(r);
    for (let t = 0; t < e.length; t++) e[t] = !1;
    return e
}

function _n(r, e) {
    switch (r) {
        case "float":
        case "int":
        case "uint":
        case "sampler2D":
        case "sampler2DArray":
            return 0;
        case "vec2":
            return new Float32Array(2 * e);
        case "vec3":
            return new Float32Array(3 * e);
        case "vec4":
            return new Float32Array(4 * e);
        case "ivec2":
            return new Int32Array(2 * e);
        case "ivec3":
            return new Int32Array(3 * e);
        case "ivec4":
            return new Int32Array(4 * e);
        case "uvec2":
            return new Uint32Array(2 * e);
        case "uvec3":
            return new Uint32Array(3 * e);
        case "uvec4":
            return new Uint32Array(4 * e);
        case "bool":
            return !1;
        case "bvec2":
            return ti(2 * e);
        case "bvec3":
            return ti(3 * e);
        case "bvec4":
            return ti(4 * e);
        case "mat2":
            return new Float32Array([1, 0, 0, 1]);
        case "mat3":
            return new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]);
        case "mat4":
            return new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])
    }
    return null
}
const wt = [{
        test: r => r.type === "float" && r.size === 1 && !r.isArray,
        code: r => `
            if(uv["${r}"] !== ud["${r}"].value)
            {
                ud["${r}"].value = uv["${r}"]
                gl.uniform1f(ud["${r}"].location, uv["${r}"])
            }
            `
    }, {
        test: (r, e) => !(r.type !== "sampler2D" && r.type !== "samplerCube" && r.type !== "sampler2DArray" || r.size !== 1 || r.isArray || e != null && e.castToBaseTexture === void 0),
        code: r => `t = syncData.textureCount++;

            renderer.texture.bind(uv["${r}"], t);

            if(ud["${r}"].value !== t)
            {
                ud["${r}"].value = t;
                gl.uniform1i(ud["${r}"].location, t);
; // eslint-disable-line max-len
            }`
    }, {
        test: (r, e) => r.type === "mat3" && r.size === 1 && !r.isArray && e.a !== void 0,
        code: r => `
            gl.uniformMatrix3fv(ud["${r}"].location, false, uv["${r}"].toArray(true));
            `,
        codeUbo: r => `
                var ${r}_matrix = uv.${r}.toArray(true);

                data[offset] = ${r}_matrix[0];
                data[offset+1] = ${r}_matrix[1];
                data[offset+2] = ${r}_matrix[2];
        
                data[offset + 4] = ${r}_matrix[3];
                data[offset + 5] = ${r}_matrix[4];
                data[offset + 6] = ${r}_matrix[5];
        
                data[offset + 8] = ${r}_matrix[6];
                data[offset + 9] = ${r}_matrix[7];
                data[offset + 10] = ${r}_matrix[8];
            `
    }, {
        test: (r, e) => r.type === "vec2" && r.size === 1 && !r.isArray && e.x !== void 0,
        code: r => `
                cv = ud["${r}"].value;
                v = uv["${r}"];

                if(cv[0] !== v.x || cv[1] !== v.y)
                {
                    cv[0] = v.x;
                    cv[1] = v.y;
                    gl.uniform2f(ud["${r}"].location, v.x, v.y);
                }`,
        codeUbo: r => `
                v = uv.${r};

                data[offset] = v.x;
                data[offset+1] = v.y;
            `
    }, {
        test: r => r.type === "vec2" && r.size === 1 && !r.isArray,
        code: r => `
                cv = ud["${r}"].value;
                v = uv["${r}"];

                if(cv[0] !== v[0] || cv[1] !== v[1])
                {
                    cv[0] = v[0];
                    cv[1] = v[1];
                    gl.uniform2f(ud["${r}"].location, v[0], v[1]);
                }
            `
    }, {
        test: (r, e) => r.type === "vec4" && r.size === 1 && !r.isArray && e.width !== void 0,
        code: r => `
                cv = ud["${r}"].value;
                v = uv["${r}"];

                if(cv[0] !== v.x || cv[1] !== v.y || cv[2] !== v.width || cv[3] !== v.height)
                {
                    cv[0] = v.x;
                    cv[1] = v.y;
                    cv[2] = v.width;
                    cv[3] = v.height;
                    gl.uniform4f(ud["${r}"].location, v.x, v.y, v.width, v.height)
                }`,
        codeUbo: r => `
                    v = uv.${r};

                    data[offset] = v.x;
                    data[offset+1] = v.y;
                    data[offset+2] = v.width;
                    data[offset+3] = v.height;
                `
    }, {
        test: r => r.type === "vec4" && r.size === 1 && !r.isArray,
        code: r => `
                cv = ud["${r}"].value;
                v = uv["${r}"];

                if(cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
                {
                    cv[0] = v[0];
                    cv[1] = v[1];
                    cv[2] = v[2];
                    cv[3] = v[3];

                    gl.uniform4f(ud["${r}"].location, v[0], v[1], v[2], v[3])
                }`
    }],
    Dh = {
        float: `
    if (cv !== v)
    {
        cu.value = v;
        gl.uniform1f(location, v);
    }`,
        vec2: `
    if (cv[0] !== v[0] || cv[1] !== v[1])
    {
        cv[0] = v[0];
        cv[1] = v[1];

        gl.uniform2f(location, v[0], v[1])
    }`,
        vec3: `
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];

        gl.uniform3f(location, v[0], v[1], v[2])
    }`,
        vec4: `
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];
        cv[3] = v[3];

        gl.uniform4f(location, v[0], v[1], v[2], v[3]);
    }`,
        int: `
    if (cv !== v)
    {
        cu.value = v;

        gl.uniform1i(location, v);
    }`,
        ivec2: `
    if (cv[0] !== v[0] || cv[1] !== v[1])
    {
        cv[0] = v[0];
        cv[1] = v[1];

        gl.uniform2i(location, v[0], v[1]);
    }`,
        ivec3: `
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];

        gl.uniform3i(location, v[0], v[1], v[2]);
    }`,
        ivec4: `
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];
        cv[3] = v[3];

        gl.uniform4i(location, v[0], v[1], v[2], v[3]);
    }`,
        uint: `
    if (cv !== v)
    {
        cu.value = v;

        gl.uniform1ui(location, v);
    }`,
        uvec2: `
    if (cv[0] !== v[0] || cv[1] !== v[1])
    {
        cv[0] = v[0];
        cv[1] = v[1];

        gl.uniform2ui(location, v[0], v[1]);
    }`,
        uvec3: `
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];

        gl.uniform3ui(location, v[0], v[1], v[2]);
    }`,
        uvec4: `
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];
        cv[3] = v[3];

        gl.uniform4ui(location, v[0], v[1], v[2], v[3]);
    }`,
        bool: `
    if (cv !== v)
    {
        cu.value = v;
        gl.uniform1i(location, v);
    }`,
        bvec2: `
    if (cv[0] != v[0] || cv[1] != v[1])
    {
        cv[0] = v[0];
        cv[1] = v[1];

        gl.uniform2i(location, v[0], v[1]);
    }`,
        bvec3: `
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];

        gl.uniform3i(location, v[0], v[1], v[2]);
    }`,
        bvec4: `
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];
        cv[3] = v[3];

        gl.uniform4i(location, v[0], v[1], v[2], v[3]);
    }`,
        mat2: "gl.uniformMatrix2fv(location, false, v)",
        mat3: "gl.uniformMatrix3fv(location, false, v)",
        mat4: "gl.uniformMatrix4fv(location, false, v)",
        sampler2D: `
    if (cv !== v)
    {
        cu.value = v;

        gl.uniform1i(location, v);
    }`,
        samplerCube: `
    if (cv !== v)
    {
        cu.value = v;

        gl.uniform1i(location, v);
    }`,
        sampler2DArray: `
    if (cv !== v)
    {
        cu.value = v;

        gl.uniform1i(location, v);
    }`
    },
    Uh = {
        float: "gl.uniform1fv(location, v)",
        vec2: "gl.uniform2fv(location, v)",
        vec3: "gl.uniform3fv(location, v)",
        vec4: "gl.uniform4fv(location, v)",
        mat4: "gl.uniformMatrix4fv(location, false, v)",
        mat3: "gl.uniformMatrix3fv(location, false, v)",
        mat2: "gl.uniformMatrix2fv(location, false, v)",
        int: "gl.uniform1iv(location, v)",
        ivec2: "gl.uniform2iv(location, v)",
        ivec3: "gl.uniform3iv(location, v)",
        ivec4: "gl.uniform4iv(location, v)",
        uint: "gl.uniform1uiv(location, v)",
        uvec2: "gl.uniform2uiv(location, v)",
        uvec3: "gl.uniform3uiv(location, v)",
        uvec4: "gl.uniform4uiv(location, v)",
        bool: "gl.uniform1iv(location, v)",
        bvec2: "gl.uniform2iv(location, v)",
        bvec3: "gl.uniform3iv(location, v)",
        bvec4: "gl.uniform4iv(location, v)",
        sampler2D: "gl.uniform1iv(location, v)",
        samplerCube: "gl.uniform1iv(location, v)",
        sampler2DArray: "gl.uniform1iv(location, v)"
    },
    So = {};
let fr, ut = So;

function kh() {
    if (!fr) {
        fr = fe.MEDIUM;
        const r = function() {
            if (ut === So || ut != null && ut.isContextLost()) {
                const e = B.ADAPTER.createCanvas();
                let t;
                B.PREFER_ENV >= st.WEBGL2 && (t = e.getContext("webgl2", {})), t || (t = e.getContext("webgl", {}) || e.getContext("experimental-webgl", {}), t ? t.getExtension("WEBGL_draw_buffers") : t = null), ut = t
            }
            return ut
        }();
        r && r.getShaderPrecisionFormat && (fr = r.getShaderPrecisionFormat(r.FRAGMENT_SHADER, r.HIGH_FLOAT).precision ? fe.HIGH : fe.MEDIUM)
    }
    return fr
}

function vn(r, e) {
    const t = r.getShaderSource(e).split(`
`).map((h, l) => `${l}: ${h}`),
        i = r.getShaderInfoLog(e).split(`
`),
        s = {},
        n = i.map(h => parseFloat(h.replace(/^ERROR\: 0\:([\d]+)\:.*$/, "$1"))).filter(h => !(!h || s[h]) && (s[h] = !0, !0)),
        o = [""];
    n.forEach(h => {
        t[h - 1] = `%c${t[h-1]}%c`, o.push("background: #FF0000; color:#FFFFFF; font-size: 10px", "font-size: 10px")
    });
    const a = t.join(`
`);
    o[0] = a
}
const Gh = {
    float: 1,
    vec2: 2,
    vec3: 3,
    vec4: 4,
    int: 1,
    ivec2: 2,
    ivec3: 3,
    ivec4: 4,
    uint: 1,
    uvec2: 2,
    uvec3: 3,
    uvec4: 4,
    bool: 1,
    bvec2: 2,
    bvec3: 3,
    bvec4: 4,
    mat2: 4,
    mat3: 9,
    mat4: 16,
    sampler2D: 1
};

function Ao(r) {
    return Gh[r]
}
let pr = null;
const bn = {
    FLOAT: "float",
    FLOAT_VEC2: "vec2",
    FLOAT_VEC3: "vec3",
    FLOAT_VEC4: "vec4",
    INT: "int",
    INT_VEC2: "ivec2",
    INT_VEC3: "ivec3",
    INT_VEC4: "ivec4",
    UNSIGNED_INT: "uint",
    UNSIGNED_INT_VEC2: "uvec2",
    UNSIGNED_INT_VEC3: "uvec3",
    UNSIGNED_INT_VEC4: "uvec4",
    BOOL: "bool",
    BOOL_VEC2: "bvec2",
    BOOL_VEC3: "bvec3",
    BOOL_VEC4: "bvec4",
    FLOAT_MAT2: "mat2",
    FLOAT_MAT3: "mat3",
    FLOAT_MAT4: "mat4",
    SAMPLER_2D: "sampler2D",
    INT_SAMPLER_2D: "sampler2D",
    UNSIGNED_INT_SAMPLER_2D: "sampler2D",
    SAMPLER_CUBE: "samplerCube",
    INT_SAMPLER_CUBE: "samplerCube",
    UNSIGNED_INT_SAMPLER_CUBE: "samplerCube",
    SAMPLER_2D_ARRAY: "sampler2DArray",
    INT_SAMPLER_2D_ARRAY: "sampler2DArray",
    UNSIGNED_INT_SAMPLER_2D_ARRAY: "sampler2DArray"
};

function En(r, e) {
    if (!pr) {
        const t = Object.keys(bn);
        pr = {};
        for (let i = 0; i < t.length; ++i) {
            const s = t[i];
            pr[r[s]] = bn[s]
        }
    }
    return pr[e]
}

function Tn(r, e, t) {
    if (r.substring(0, 9) !== "precision") {
        let i = e;
        return e === fe.HIGH && t !== fe.HIGH && (i = fe.MEDIUM), `precision ${i} float;
${r}`
    }
    return t !== fe.HIGH && r.substring(0, 15) === "precision highp" ? r.replace("precision highp", "precision mediump") : r
}
let Ft, jh = 0;
const mr = {},
    yt = class {
        constructor(r, e, t = "pixi-shader", i = {}) {
            this.extra = {}, this.id = jh++, this.vertexSrc = r || yt.defaultVertexSrc, this.fragmentSrc = e || yt.defaultFragmentSrc, this.vertexSrc = this.vertexSrc.trim(), this.fragmentSrc = this.fragmentSrc.trim(), this.extra = i, this.vertexSrc.substring(0, 8) !== "#version" && (t = t.replace(/\s+/g, "-"), mr[t] ? (mr[t]++, t += `-${mr[t]}`) : mr[t] = 1, this.vertexSrc = `#define SHADER_NAME ${t}
${this.vertexSrc}`, this.fragmentSrc = `#define SHADER_NAME ${t}
${this.fragmentSrc}`, this.vertexSrc = Tn(this.vertexSrc, yt.defaultVertexPrecision, fe.HIGH), this.fragmentSrc = Tn(this.fragmentSrc, yt.defaultFragmentPrecision, kh())), this.glPrograms = {}, this.syncUniforms = null
        }
        static get defaultVertexSrc() {
            return `attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void){
   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
   vTextureCoord = aTextureCoord;
}
`
        }
        static get defaultFragmentSrc() {
            return `varying vec2 vTextureCoord;

uniform sampler2D uSampler;

void main(void){
   gl_FragColor *= texture2D(uSampler, vTextureCoord);
}`
        }
        static from(r, e, t) {
            const i = r + e;
            let s = pn[i];
            return s || (pn[i] = s = new yt(r, e, t)), s
        }
    };
let Oe = yt;
Oe.defaultVertexPrecision = fe.HIGH, Oe.defaultFragmentPrecision = ft.apple.device ? fe.HIGH : fe.MEDIUM;
let Hh = 0;
class Ce {
    constructor(e, t, i) {
        this.group = !0, this.syncUniforms = {}, this.dirtyId = 0, this.id = Hh++, this.static = !!t, this.ubo = !!i, e instanceof se ? (this.buffer = e, this.buffer.type = Ie.UNIFORM_BUFFER, this.autoManage = !1, this.ubo = !0) : (this.uniforms = e, this.ubo && (this.buffer = new se(new Float32Array(1)), this.buffer.type = Ie.UNIFORM_BUFFER, this.autoManage = !0))
    }
    update() {
        this.dirtyId++, !this.autoManage && this.buffer && this.buffer.update()
    }
    add(e, t, i) {
        if (this.ubo) throw new Error("[UniformGroup] uniform groups in ubo mode cannot be modified, or have uniform groups nested in them");
        this.uniforms[e] = new Ce(t, i)
    }
    static from(e, t, i) {
        return new Ce(e, t, i)
    }
    static uboFrom(e, t) {
        return new Ce(e, t != null ? t : !0, !0)
    }
}
class Lr {
    constructor(e, t) {
        this.uniformBindCount = 0, this.program = e, this.uniformGroup = t ? t instanceof Ce ? t : new Ce(t) : new Ce({}), this.disposeRunner = new ve("disposeShader")
    }
    checkUniformExists(e, t) {
        if (t.uniforms[e]) return !0;
        for (const i in t.uniforms) {
            const s = t.uniforms[i];
            if (s.group && this.checkUniformExists(e, s)) return !0
        }
        return !1
    }
    destroy() {
        this.uniformGroup = null, this.disposeRunner.emit(this), this.disposeRunner.destroy()
    }
    get uniforms() {
        return this.uniformGroup.uniforms
    }
    static from(e, t, i) {
        const s = Oe.from(e, t);
        return new Lr(s, i)
    }
}
class Xh {
    constructor(e, t) {
        if (this.vertexSrc = e, this.fragTemplate = t, this.programCache = {}, this.defaultGroupCache = {}, !t.includes("%count%")) throw new Error('Fragment template must contain "%count%".');
        if (!t.includes("%forloop%")) throw new Error('Fragment template must contain "%forloop%".')
    }
    generateShader(e) {
        if (!this.programCache[e]) {
            const i = new Int32Array(e);
            for (let n = 0; n < e; n++) i[n] = n;
            this.defaultGroupCache[e] = Ce.from({
                uSamplers: i
            }, !0);
            let s = this.fragTemplate;
            s = s.replace(/%count%/gi, `${e}`), s = s.replace(/%forloop%/gi, this.generateSampleSrc(e)), this.programCache[e] = new Oe(this.vertexSrc, s)
        }
        const t = {
            tint: new Float32Array([1, 1, 1, 1]),
            translationMatrix: new J,
            default: this.defaultGroupCache[e]
        };
        return new Lr(this.programCache[e], t)
    }
    generateSampleSrc(e) {
        let t = "";
        t += `
`, t += `
`;
        for (let i = 0; i < e; i++) i > 0 && (t += `
else `), i < e - 1 && (t += `if(vTextureId < ${i}.5)`), t += `
{`, t += `
	color = texture2D(uSamplers[${i}], vTextureCoord);`, t += `
}`;
        return t += `
`, t += `
`, t
    }
}
class Vh {
    constructor() {
        this.elements = [], this.ids = [], this.count = 0
    }
    clear() {
        for (let e = 0; e < this.count; e++) this.elements[e] = null;
        this.count = 0
    }
}
class Ro {
    constructor(e) {
        this.renderer = e
    }
    flush() {}
    destroy() {
        this.renderer = null
    }
    start() {}
    stop() {
        this.flush()
    }
    render(e) {}
}
const me = class extends Ro {
    constructor(r) {
        super(r), this.setShaderGenerator(), this.geometryClass = Oh, this.vertexSize = 6, this.state = $t.for2d(), this.size = 4 * me.defaultBatchSize, this._vertexCount = 0, this._indexCount = 0, this._bufferedElements = [], this._bufferedTextures = [], this._bufferSize = 0, this._shader = null, this._packedGeometries = [], this._packedGeometryPoolSize = 2, this._flushId = 0, this._aBuffers = {}, this._iBuffers = {}, this.maxTextures = 1, this.renderer.on("prerender", this.onPrerender, this), r.runners.contextChange.add(this), this._dcIndex = 0, this._aIndex = 0, this._iIndex = 0, this._attributeBuffer = null, this._indexBuffer = null, this._tempBoundTextures = []
    }
    static get defaultMaxTextures() {
        var r;
        return this._defaultMaxTextures = (r = this._defaultMaxTextures) != null ? r : function(e) {
            let t = !0;
            const i = B.ADAPTER.getNavigator();
            if (ft.tablet || ft.phone) {
                if (ft.apple.device) {
                    const s = i.userAgent.match(/OS (\d+)_(\d+)?/);
                    s && parseInt(s[1], 10) < 11 && (t = !1)
                }
                if (ft.android.device) {
                    const s = i.userAgent.match(/Android\s([0-9.]*)/);
                    s && parseInt(s[1], 10) < 7 && (t = !1)
                }
            }
            return t ? e : 4
        }(32), this._defaultMaxTextures
    }
    static set defaultMaxTextures(r) {
        this._defaultMaxTextures = r
    }
    static get canUploadSameBuffer() {
        var r;
        return this._canUploadSameBuffer = (r = this._canUploadSameBuffer) != null ? r : !ft.apple.device, this._canUploadSameBuffer
    }
    static set canUploadSameBuffer(r) {
        this._canUploadSameBuffer = r
    }
    get MAX_TEXTURES() {
        return k(0, "BatchRenderer#MAX_TEXTURES renamed to BatchRenderer#maxTextures"), this.maxTextures
    }
    static get defaultVertexSrc() {
        return `precision highp float;
attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;
attribute vec4 aColor;
attribute float aTextureId;

uniform mat3 projectionMatrix;
uniform mat3 translationMatrix;
uniform vec4 tint;

varying vec2 vTextureCoord;
varying vec4 vColor;
varying float vTextureId;

void main(void){
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = aTextureCoord;
    vTextureId = aTextureId;
    vColor = aColor * tint;
}
`
    }
    static get defaultFragmentTemplate() {
        return `varying vec2 vTextureCoord;
varying vec4 vColor;
varying float vTextureId;
uniform sampler2D uSamplers[%count%];

void main(void){
    vec4 color;
    %forloop%
    gl_FragColor = color * vColor;
}
`
    }
    setShaderGenerator({
        vertex: r = me.defaultVertexSrc,
        fragment: e = me.defaultFragmentTemplate
    } = {}) {
        this.shaderGenerator = new Xh(r, e)
    }
    contextChange() {
        const r = this.renderer.gl;
        B.PREFER_ENV === st.WEBGL_LEGACY ? this.maxTextures = 1 : (this.maxTextures = Math.min(r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS), me.defaultMaxTextures), this.maxTextures = function(e, t) {
            if (e === 0) throw new Error("Invalid value of `0` passed to `checkMaxIfStatementsInShader`");
            const i = t.createShader(t.FRAGMENT_SHADER);
            for (;;) {
                const s = Sh.replace(/%forloop%/gi, Ah(e));
                if (t.shaderSource(i, s), t.compileShader(i), t.getShaderParameter(i, t.COMPILE_STATUS)) break;
                e = e / 2 | 0
            }
            return e
        }(this.maxTextures, r)), this._shader = this.shaderGenerator.generateShader(this.maxTextures);
        for (let e = 0; e < this._packedGeometryPoolSize; e++) this._packedGeometries[e] = new this.geometryClass;
        this.initFlushBuffers()
    }
    initFlushBuffers() {
        const {
            _drawCallPool: r,
            _textureArrayPool: e
        } = me, t = this.size / 4, i = Math.floor(t / this.maxTextures) + 1;
        for (; r.length < t;) r.push(new Ih);
        for (; e.length < i;) e.push(new Vh);
        for (let s = 0; s < this.maxTextures; s++) this._tempBoundTextures[s] = null
    }
    onPrerender() {
        this._flushId = 0
    }
    render(r) {
        r._texture.valid && (this._vertexCount + r.vertexData.length / 2 > this.size && this.flush(), this._vertexCount += r.vertexData.length / 2, this._indexCount += r.indices.length, this._bufferedTextures[this._bufferSize] = r._texture.baseTexture, this._bufferedElements[this._bufferSize++] = r)
    }
    buildTexturesAndDrawCalls() {
        const {
            _bufferedTextures: r,
            maxTextures: e
        } = this, t = me._textureArrayPool, i = this.renderer.batch, s = this._tempBoundTextures, n = this.renderer.textureGC.count;
        let o = ++U._globalBatch,
            a = 0,
            h = t[0],
            l = 0;
        i.copyBoundTextures(s, e);
        for (let u = 0; u < this._bufferSize; ++u) {
            const c = r[u];
            r[u] = null, c._batchEnabled !== o && (h.count >= e && (i.boundArray(h, s, o, e), this.buildDrawCalls(h, l, u), l = u, h = t[++a], ++o), c._batchEnabled = o, c.touched = n, h.elements[h.count++] = c)
        }
        h.count > 0 && (i.boundArray(h, s, o, e), this.buildDrawCalls(h, l, this._bufferSize), ++a, ++o);
        for (let u = 0; u < s.length; u++) s[u] = null;
        U._globalBatch = o
    }
    buildDrawCalls(r, e, t) {
        const {
            _bufferedElements: i,
            _attributeBuffer: s,
            _indexBuffer: n,
            vertexSize: o
        } = this, a = me._drawCallPool;
        let h = this._dcIndex,
            l = this._aIndex,
            u = this._iIndex,
            c = a[h];
        c.start = this._iIndex, c.texArray = r;
        for (let d = e; d < t; ++d) {
            const p = i[d],
                f = p._texture.baseTexture,
                y = bh[f.alphaMode ? 1 : 0][p.blendMode];
            i[d] = null, e < d && c.blend !== y && (c.size = u - c.start, e = d, c = a[++h], c.texArray = r, c.start = u), this.packInterleavedGeometry(p, s, n, l, u), l += p.vertexData.length / 2 * o, u += p.indices.length, c.blend = y
        }
        e < t && (c.size = u - c.start, ++h), this._dcIndex = h, this._aIndex = l, this._iIndex = u
    }
    bindAndClearTexArray(r) {
        const e = this.renderer.texture;
        for (let t = 0; t < r.count; t++) e.bind(r.elements[t], r.ids[t]), r.elements[t] = null;
        r.count = 0
    }
    updateGeometry() {
        const {
            _packedGeometries: r,
            _attributeBuffer: e,
            _indexBuffer: t
        } = this;
        me.canUploadSameBuffer ? (r[this._flushId]._buffer.update(e.rawBinaryData), r[this._flushId]._indexBuffer.update(t), this.renderer.geometry.updateBuffers()) : (this._packedGeometryPoolSize <= this._flushId && (this._packedGeometryPoolSize++, r[this._flushId] = new this.geometryClass), r[this._flushId]._buffer.update(e.rawBinaryData), r[this._flushId]._indexBuffer.update(t), this.renderer.geometry.bind(r[this._flushId]), this.renderer.geometry.updateBuffers(), this._flushId++)
    }
    drawBatches() {
        const r = this._dcIndex,
            {
                gl: e,
                state: t
            } = this.renderer,
            i = me._drawCallPool;
        let s = null;
        for (let n = 0; n < r; n++) {
            const {
                texArray: o,
                type: a,
                size: h,
                start: l,
                blend: u
            } = i[n];
            s !== o && (s = o, this.bindAndClearTexArray(o)), this.state.blendMode = u, t.set(this.state), e.drawElements(a, h, e.UNSIGNED_SHORT, 2 * l)
        }
    }
    flush() {
        this._vertexCount !== 0 && (this._attributeBuffer = this.getAttributeBuffer(this._vertexCount), this._indexBuffer = this.getIndexBuffer(this._indexCount), this._aIndex = 0, this._iIndex = 0, this._dcIndex = 0, this.buildTexturesAndDrawCalls(), this.updateGeometry(), this.drawBatches(), this._bufferSize = 0, this._vertexCount = 0, this._indexCount = 0)
    }
    start() {
        this.renderer.state.set(this.state), this.renderer.texture.ensureSamplerType(this.maxTextures), this.renderer.shader.bind(this._shader), me.canUploadSameBuffer && this.renderer.geometry.bind(this._packedGeometries[this._flushId])
    }
    stop() {
        this.flush()
    }
    destroy() {
        for (let r = 0; r < this._packedGeometryPoolSize; r++) this._packedGeometries[r] && this._packedGeometries[r].destroy();
        this.renderer.off("prerender", this.onPrerender, this), this._aBuffers = null, this._iBuffers = null, this._packedGeometries = null, this._attributeBuffer = null, this._indexBuffer = null, this._shader && (this._shader.destroy(), this._shader = null), super.destroy()
    }
    getAttributeBuffer(r) {
        const e = Mr(Math.ceil(r / 8)),
            t = fn(e),
            i = 8 * e;
        this._aBuffers.length <= t && (this._iBuffers.length = t + 1);
        let s = this._aBuffers[i];
        return s || (this._aBuffers[i] = s = new wh(i * this.vertexSize * 4)), s
    }
    getIndexBuffer(r) {
        const e = Mr(Math.ceil(r / 12)),
            t = fn(e),
            i = 12 * e;
        this._iBuffers.length <= t && (this._iBuffers.length = t + 1);
        let s = this._iBuffers[t];
        return s || (this._iBuffers[t] = s = new Uint16Array(i)), s
    }
    packInterleavedGeometry(r, e, t, i, s) {
        const {
            uint32View: n,
            float32View: o
        } = e, a = i / this.vertexSize, h = r.uvs, l = r.indices, u = r.vertexData, c = r._texture.baseTexture._batchLocation, d = Math.min(r.worldAlpha, 1), p = d < 1 && r._texture.baseTexture.alphaMode ? function(f, y) {
            if (y === 1) return (255 * y << 24) + f;
            if (y === 0) return 0;
            let m = f >> 16 & 255,
                g = f >> 8 & 255,
                _ = 255 & f;
            return m = m * y + .5 | 0, g = g * y + .5 | 0, _ = _ * y + .5 | 0, (255 * y << 24) + (m << 16) + (g << 8) + _
        }(r._tintRGB, d) : r._tintRGB + (255 * d << 24);
        for (let f = 0; f < u.length; f += 2) o[i++] = u[f], o[i++] = u[f + 1], o[i++] = h[f], o[i++] = h[f + 1], n[i++] = p, o[i++] = c;
        for (let f = 0; f < l.length; f++) t[s++] = a + l[f]
    }
};
let xe = me;
xe.defaultBatchSize = 4096, xe.extension = {
    name: "batch",
    type: O.RendererPlugin
}, xe._drawCallPool = [], xe._textureArrayPool = [], G.add(xe);
const Dt = class extends Lr {
    constructor(r, e, t) {
        super(Oe.from(r || Dt.defaultVertexSrc, e || Dt.defaultFragmentSrc), t), this.padding = 0, this.resolution = Dt.defaultResolution, this.multisample = Dt.defaultMultisample, this.enabled = !0, this.autoFit = !0, this.state = new $t
    }
    apply(r, e, t, i, s) {
        r.applyFilter(this, e, t, i)
    }
    get blendMode() {
        return this.state.blendMode
    }
    set blendMode(r) {
        this.state.blendMode = r
    }
    get resolution() {
        return this._resolution
    }
    set resolution(r) {
        this._resolution = r
    }
    static get defaultVertexSrc() {
        return `attribute vec2 aVertexPosition;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

uniform vec4 inputSize;
uniform vec4 outputFrame;

vec4 filterVertexPosition( void )
{
    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aVertexPosition * (outputFrame.zw * inputSize.zw);
}

void main(void)
{
    gl_Position = filterVertexPosition();
    vTextureCoord = filterTextureCoord();
}
`
    }
    static get defaultFragmentSrc() {
        return `varying vec2 vTextureCoord;

uniform sampler2D uSampler;

void main(void){
   gl_FragColor = texture2D(uSampler, vTextureCoord);
}
`
    }
};
let Ge = Dt;
Ge.defaultResolution = 1, Ge.defaultMultisample = $.NONE;
class wn {
    constructor() {
        this.clearBeforeRender = !0, this._backgroundColor = 0, this._backgroundColorRgba = [0, 0, 0, 1], this._backgroundColorString = "#000000", this.color = this._backgroundColor, this.alpha = 1
    }
    init(e) {
        this.clearBeforeRender = e.clearBeforeRender, e.color && (this.color = typeof e.color == "string" ? function(t) {
            if (typeof t == "string" && ((t = vh[t.toLowerCase()] || t)[0] === "#" && (t = t.slice(1)), t.length === 3)) {
                const [i, s, n] = t;
                t = i + i + s + s + n + n
            }
            return parseInt(t, 16)
        }(e.color) : e.color), this.alpha = e.alpha
    }
    get color() {
        return this._backgroundColor
    }
    set color(e) {
        this._backgroundColor = e, this._backgroundColorString = function(t) {
                let i = t.toString(16);
                return i = "000000".substring(0, 6 - i.length) + i, `#${i}`
            }(e),
            function(t, i = []) {
                i[0] = (t >> 16 & 255) / 255, i[1] = (t >> 8 & 255) / 255, i[2] = (255 & t) / 255
            }(e, this._backgroundColorRgba)
    }
    get alpha() {
        return this._backgroundColorRgba[3]
    }
    set alpha(e) {
        this._backgroundColorRgba[3] = e
    }
    get colorRgba() {
        return this._backgroundColorRgba
    }
    get colorString() {
        return this._backgroundColorString
    }
    destroy() {}
}
wn.extension = {
    type: [O.RendererSystem, O.CanvasRendererSystem],
    name: "background"
}, G.add(wn);
class Sn {
    constructor(e) {
        this.renderer = e, this.emptyRenderer = new Ro(e), this.currentRenderer = this.emptyRenderer
    }
    setObjectRenderer(e) {
        this.currentRenderer !== e && (this.currentRenderer.stop(), this.currentRenderer = e, this.currentRenderer.start())
    }
    flush() {
        this.setObjectRenderer(this.emptyRenderer)
    }
    reset() {
        this.setObjectRenderer(this.emptyRenderer)
    }
    copyBoundTextures(e, t) {
        const {
            boundTextures: i
        } = this.renderer.texture;
        for (let s = t - 1; s >= 0; --s) e[s] = i[s] || null, e[s] && (e[s]._batchLocation = s)
    }
    boundArray(e, t, i, s) {
        const {
            elements: n,
            ids: o,
            count: a
        } = e;
        let h = 0;
        for (let l = 0; l < a; l++) {
            const u = n[l],
                c = u._batchLocation;
            if (c >= 0 && c < s && t[c] === u) o[l] = c;
            else
                for (; h < s;) {
                    const d = t[h];
                    if (!d || d._batchEnabled !== i || d._batchLocation !== h) {
                        o[l] = h, u._batchLocation = h, t[h] = u;
                        break
                    }
                    h++
                }
        }
    }
    destroy() {
        this.renderer = null
    }
}
Sn.extension = {
    type: O.RendererSystem,
    name: "batch"
}, G.add(Sn);
let An = 0;
class Rn {
    constructor(e) {
        this.renderer = e, this.webGLVersion = 1, this.extensions = {}, this.supports = {
            uint32Indices: !1
        }, this.handleContextLost = this.handleContextLost.bind(this), this.handleContextRestored = this.handleContextRestored.bind(this)
    }
    get isLost() {
        return !this.gl || this.gl.isContextLost()
    }
    contextChange(e) {
        this.gl = e, this.renderer.gl = e, this.renderer.CONTEXT_UID = An++
    }
    init(e) {
        if (e.context) this.initFromContext(e.context);
        else {
            const t = this.renderer.background.alpha < 1,
                i = e.premultipliedAlpha;
            this.preserveDrawingBuffer = e.preserveDrawingBuffer, this.useContextAlpha = e.useContextAlpha, this.powerPreference = e.powerPreference, this.initFromOptions({
                alpha: t,
                premultipliedAlpha: i,
                antialias: e.antialias,
                stencil: !0,
                preserveDrawingBuffer: e.preserveDrawingBuffer,
                powerPreference: e.powerPreference
            })
        }
    }
    initFromContext(e) {
        this.gl = e, this.validateContext(e), this.renderer.gl = e, this.renderer.CONTEXT_UID = An++, this.renderer.runners.contextChange.emit(e);
        const t = this.renderer.view;
        t.addEventListener !== void 0 && (t.addEventListener("webglcontextlost", this.handleContextLost, !1), t.addEventListener("webglcontextrestored", this.handleContextRestored, !1))
    }
    initFromOptions(e) {
        const t = this.createContext(this.renderer.view, e);
        this.initFromContext(t)
    }
    createContext(e, t) {
        let i;
        if (B.PREFER_ENV >= st.WEBGL2 && (i = e.getContext("webgl2", t)), i) this.webGLVersion = 2;
        else if (this.webGLVersion = 1, i = e.getContext("webgl", t) || e.getContext("experimental-webgl", t), !i) throw new Error("This browser does not support WebGL. Try using the canvas renderer");
        return this.gl = i, this.getExtensions(), this.gl
    }
    getExtensions() {
        const {
            gl: e
        } = this, t = {
            loseContext: e.getExtension("WEBGL_lose_context"),
            anisotropicFiltering: e.getExtension("EXT_texture_filter_anisotropic"),
            floatTextureLinear: e.getExtension("OES_texture_float_linear"),
            s3tc: e.getExtension("WEBGL_compressed_texture_s3tc"),
            s3tc_sRGB: e.getExtension("WEBGL_compressed_texture_s3tc_srgb"),
            etc: e.getExtension("WEBGL_compressed_texture_etc"),
            etc1: e.getExtension("WEBGL_compressed_texture_etc1"),
            pvrtc: e.getExtension("WEBGL_compressed_texture_pvrtc") || e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),
            atc: e.getExtension("WEBGL_compressed_texture_atc"),
            astc: e.getExtension("WEBGL_compressed_texture_astc")
        };
        this.webGLVersion === 1 ? Object.assign(this.extensions, t, {
            drawBuffers: e.getExtension("WEBGL_draw_buffers"),
            depthTexture: e.getExtension("WEBGL_depth_texture"),
            vertexArrayObject: e.getExtension("OES_vertex_array_object") || e.getExtension("MOZ_OES_vertex_array_object") || e.getExtension("WEBKIT_OES_vertex_array_object"),
            uint32ElementIndex: e.getExtension("OES_element_index_uint"),
            floatTexture: e.getExtension("OES_texture_float"),
            floatTextureLinear: e.getExtension("OES_texture_float_linear"),
            textureHalfFloat: e.getExtension("OES_texture_half_float"),
            textureHalfFloatLinear: e.getExtension("OES_texture_half_float_linear")
        }) : this.webGLVersion === 2 && Object.assign(this.extensions, t, {
            colorBufferFloat: e.getExtension("EXT_color_buffer_float")
        })
    }
    handleContextLost(e) {
        e.preventDefault(), setTimeout(() => {
            this.gl.isContextLost() && this.extensions.loseContext && this.extensions.loseContext.restoreContext()
        }, 0)
    }
    handleContextRestored() {
        this.renderer.runners.contextChange.emit(this.gl)
    }
    destroy() {
        const e = this.renderer.view;
        this.renderer = null, e.removeEventListener !== void 0 && (e.removeEventListener("webglcontextlost", this.handleContextLost), e.removeEventListener("webglcontextrestored", this.handleContextRestored)), this.gl.useProgram(null), this.extensions.loseContext && this.extensions.loseContext.loseContext()
    }
    postrender() {
        this.renderer.objectRenderer.renderingToScreen && this.gl.flush()
    }
    validateContext(e) {
        const t = e.getContextAttributes(),
            i = "WebGL2RenderingContext" in globalThis && e instanceof globalThis.WebGL2RenderingContext;
        i && (this.webGLVersion = 2), t && t.stencil;
        const s = i || !!e.getExtension("OES_element_index_uint");
        this.supports.uint32Indices = s
    }
}
Rn.extension = {
    type: O.RendererSystem,
    name: "context"
}, G.add(Rn);
class Yh extends us {
    upload(e, t, i) {
        const s = e.gl;
        s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL, t.alphaMode === He.UNPACK);
        const n = t.realWidth,
            o = t.realHeight;
        return i.width === n && i.height === o ? s.texSubImage2D(t.target, 0, 0, 0, n, o, t.format, i.type, this.data) : (i.width = n, i.height = o, s.texImage2D(t.target, 0, i.internalFormat, n, o, 0, t.format, i.type, this.data)), !0
    }
}
class Ri {
    constructor(e, t) {
        this.width = Math.round(e || 100), this.height = Math.round(t || 100), this.stencil = !1, this.depth = !1, this.dirtyId = 0, this.dirtyFormat = 0, this.dirtySize = 0, this.depthTexture = null, this.colorTextures = [], this.glFramebuffers = {}, this.disposeRunner = new ve("disposeFramebuffer"), this.multisample = $.NONE
    }
    get colorTexture() {
        return this.colorTextures[0]
    }
    addColorTexture(e = 0, t) {
        return this.colorTextures[e] = t || new U(null, {
            scaleMode: Ne.NEAREST,
            resolution: 1,
            mipmap: rt.OFF,
            width: this.width,
            height: this.height
        }), this.dirtyId++, this.dirtyFormat++, this
    }
    addDepthTexture(e) {
        return this.depthTexture = e || new U(new Yh(null, {
            width: this.width,
            height: this.height
        }), {
            scaleMode: Ne.NEAREST,
            resolution: 1,
            width: this.width,
            height: this.height,
            mipmap: rt.OFF,
            format: E.DEPTH_COMPONENT,
            type: L.UNSIGNED_SHORT
        }), this.dirtyId++, this.dirtyFormat++, this
    }
    enableDepth() {
        return this.depth = !0, this.dirtyId++, this.dirtyFormat++, this
    }
    enableStencil() {
        return this.stencil = !0, this.dirtyId++, this.dirtyFormat++, this
    }
    resize(e, t) {
        if (e = Math.round(e), t = Math.round(t), e !== this.width || t !== this.height) {
            this.width = e, this.height = t, this.dirtyId++, this.dirtySize++;
            for (let i = 0; i < this.colorTextures.length; i++) {
                const s = this.colorTextures[i],
                    n = s.resolution;
                s.setSize(e / n, t / n)
            }
            if (this.depthTexture) {
                const i = this.depthTexture.resolution;
                this.depthTexture.setSize(e / i, t / i)
            }
        }
    }
    dispose() {
        this.disposeRunner.emit(this, !1)
    }
    destroyDepthTexture() {
        this.depthTexture && (this.depthTexture.destroy(), this.depthTexture = null, ++this.dirtyId, ++this.dirtyFormat)
    }
}
class Io extends U {
    constructor(e = {}) {
        var t;
        typeof e == "number" && (e = {
            width: arguments[0],
            height: arguments[1],
            scaleMode: arguments[2],
            resolution: arguments[3]
        }), e.width = e.width || 100, e.height = e.height || 100, (t = e.multisample) != null || (e.multisample = $.NONE), super(null, e), this.mipmap = rt.OFF, this.valid = !0, this.clearColor = [0, 0, 0, 0], this.framebuffer = new Ri(this.realWidth, this.realHeight).addColorTexture(0, this), this.framebuffer.multisample = e.multisample, this.maskStack = [], this.filterStack = [{}]
    }
    resize(e, t) {
        this.framebuffer.resize(e * this.resolution, t * this.resolution), this.setRealSize(this.framebuffer.width, this.framebuffer.height)
    }
    dispose() {
        this.framebuffer.dispose(), super.dispose()
    }
    destroy() {
        super.destroy(), this.framebuffer.destroyDepthTexture(), this.framebuffer = null
    }
}
class je extends Vt {
    constructor(e) {
        const t = e;
        super(t.naturalWidth || t.videoWidth || t.width, t.naturalHeight || t.videoHeight || t.height), this.source = e, this.noSubImage = !1
    }
    static crossOrigin(e, t, i) {
        i !== void 0 || t.startsWith("data:") ? i !== !1 && (e.crossOrigin = typeof i == "string" ? i : "anonymous") : e.crossOrigin = Th(t)
    }
    upload(e, t, i, s) {
        const n = e.gl,
            o = t.realWidth,
            a = t.realHeight;
        if (s = s || this.source, typeof HTMLImageElement != "undefined" && s instanceof HTMLImageElement) {
            if (!s.complete || s.naturalWidth === 0) return !1
        } else if (typeof HTMLVideoElement != "undefined" && s instanceof HTMLVideoElement && s.readyState <= 1 && s.buffered.length === 0) return !1;
        return n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, t.alphaMode === He.UNPACK), this.noSubImage || t.target !== n.TEXTURE_2D || i.width !== o || i.height !== a ? (i.width = o, i.height = a, n.texImage2D(t.target, 0, i.internalFormat, t.format, i.type, s)) : n.texSubImage2D(n.TEXTURE_2D, 0, 0, 0, t.format, i.type, s), !0
    }
    update() {
        if (this.destroyed) return;
        const e = this.source,
            t = e.naturalWidth || e.videoWidth || e.width,
            i = e.naturalHeight || e.videoHeight || e.height;
        this.resize(t, i), super.update()
    }
    dispose() {
        this.source = null
    }
}
class Co extends je {
    constructor(e, t) {
        var i;
        if (t = t || {}, typeof e == "string") {
            const s = new Image;
            je.crossOrigin(s, e, t.crossorigin), s.src = e, e = s
        }
        super(e), !e.complete && this._width && this._height && (this._width = 0, this._height = 0), this.url = e.src, this._process = null, this.preserveBitmap = !1, this.createBitmap = ((i = t.createBitmap) != null ? i : B.CREATE_IMAGE_BITMAP) && !!globalThis.createImageBitmap, this.alphaMode = typeof t.alphaMode == "number" ? t.alphaMode : null, this.bitmap = null, this._load = null, t.autoLoad !== !1 && this.load()
    }
    load(e) {
        return this._load || (e !== void 0 && (this.createBitmap = e), this._load = new Promise((t, i) => {
            const s = this.source;
            this.url = s.src;
            const n = () => {
                this.destroyed || (s.onload = null, s.onerror = null, this.resize(s.width, s.height), this._load = null, this.createBitmap ? t(this.process()) : t(this))
            };
            s.complete && s.src ? n() : (s.onload = n, s.onerror = o => {
                i(o), this.onError.emit(o)
            })
        })), this._load
    }
    process() {
        const e = this.source;
        if (this._process !== null) return this._process;
        if (this.bitmap !== null || !globalThis.createImageBitmap) return Promise.resolve(this);
        const t = globalThis.createImageBitmap,
            i = !e.crossOrigin || e.crossOrigin === "anonymous";
        return this._process = fetch(e.src, {
            mode: i ? "cors" : "no-cors"
        }).then(s => s.blob()).then(s => t(s, 0, 0, e.width, e.height, {
            premultiplyAlpha: this.alphaMode === null || this.alphaMode === He.UNPACK ? "premultiply" : "none"
        })).then(s => this.destroyed ? Promise.reject() : (this.bitmap = s, this.update(), this._process = null, Promise.resolve(this))), this._process
    }
    upload(e, t, i) {
        if (typeof this.alphaMode == "number" && (t.alphaMode = this.alphaMode), !this.createBitmap) return super.upload(e, t, i);
        if (!this.bitmap && (this.process(), !this.bitmap)) return !1;
        if (super.upload(e, t, i, this.bitmap), !this.preserveBitmap) {
            let s = !0;
            const n = t._glTextures;
            for (const o in n) {
                const a = n[o];
                if (a !== i && a.dirtyId !== t.dirtyId) {
                    s = !1;
                    break
                }
            }
            s && (this.bitmap.close && this.bitmap.close(), this.bitmap = null)
        }
        return !0
    }
    dispose() {
        this.source.onload = null, this.source.onerror = null, super.dispose(), this.bitmap && (this.bitmap.close(), this.bitmap = null), this._process = null, this._load = null
    }
    static test(e) {
        return typeof HTMLImageElement != "undefined" && (typeof e == "string" || e instanceof HTMLImageElement)
    }
}
class Mo {
    constructor() {
        this.x0 = 0, this.y0 = 0, this.x1 = 1, this.y1 = 0, this.x2 = 1, this.y2 = 1, this.x3 = 0, this.y3 = 1, this.uvsFloat32 = new Float32Array(8)
    }
    set(e, t, i) {
        const s = t.width,
            n = t.height;
        if (i) {
            const o = e.width / 2 / s,
                a = e.height / 2 / n,
                h = e.x / s + o,
                l = e.y / n + a;
            i = V.add(i, V.NW), this.x0 = h + o * V.uX(i), this.y0 = l + a * V.uY(i), i = V.add(i, 2), this.x1 = h + o * V.uX(i), this.y1 = l + a * V.uY(i), i = V.add(i, 2), this.x2 = h + o * V.uX(i), this.y2 = l + a * V.uY(i), i = V.add(i, 2), this.x3 = h + o * V.uX(i), this.y3 = l + a * V.uY(i)
        } else this.x0 = e.x / s, this.y0 = e.y / n, this.x1 = (e.x + e.width) / s, this.y1 = e.y / n, this.x2 = (e.x + e.width) / s, this.y2 = (e.y + e.height) / n, this.x3 = e.x / s, this.y3 = (e.y + e.height) / n;
        this.uvsFloat32[0] = this.x0, this.uvsFloat32[1] = this.y0, this.uvsFloat32[2] = this.x1, this.uvsFloat32[3] = this.y1, this.uvsFloat32[4] = this.x2, this.uvsFloat32[5] = this.y2, this.uvsFloat32[6] = this.x3, this.uvsFloat32[7] = this.y3
    }
    toString() {
        return `[@pixi/core:TextureUvs x0=${this.x0} y0=${this.y0} x1=${this.x1} y1=${this.y1} x2=${this.x2} y2=${this.y2} x3=${this.x3} y3=${this.y3}]`
    }
}
const In = new Mo;

function gr(r) {
    r.destroy = function() {}, r.on = function() {}, r.once = function() {}, r.emit = function() {}
}
class N extends Fr {
    constructor(e, t, i, s, n, o) {
        if (super(), this.noFrame = !1, t || (this.noFrame = !0, t = new z(0, 0, 1, 1)), e instanceof N && (e = e.baseTexture), this.baseTexture = e, this._frame = t, this.trim = s, this.valid = !1, this._uvs = In, this.uvMatrix = null, this.orig = i || t, this._rotate = Number(n || 0), n === !0) this._rotate = 2;
        else if (this._rotate % 2 != 0) throw new Error("attempt to use diamond-shaped UVs. If you are sure, set rotation manually");
        this.defaultAnchor = o ? new W(o.x, o.y) : new W(0, 0), this._updateID = 0, this.textureCacheIds = [], e.valid ? this.noFrame ? e.valid && this.onBaseTextureUpdated(e) : this.frame = t : e.once("loaded", this.onBaseTextureUpdated, this), this.noFrame && e.on("update", this.onBaseTextureUpdated, this)
    }
    update() {
        this.baseTexture.resource && this.baseTexture.resource.update()
    }
    onBaseTextureUpdated(e) {
        if (this.noFrame) {
            if (!this.baseTexture.valid) return;
            this._frame.width = e.width, this._frame.height = e.height, this.valid = !0, this.updateUvs()
        } else this.frame = this._frame;
        this.emit("update", this)
    }
    destroy(e) {
        if (this.baseTexture) {
            if (e) {
                const {
                    resource: t
                } = this.baseTexture;
                t != null && t.url && we[t.url] && N.removeFromCache(t.url), this.baseTexture.destroy()
            }
            this.baseTexture.off("loaded", this.onBaseTextureUpdated, this), this.baseTexture.off("update", this.onBaseTextureUpdated, this), this.baseTexture = null
        }
        this._frame = null, this._uvs = null, this.trim = null, this.orig = null, this.valid = !1, N.removeFromCache(this), this.textureCacheIds = null
    }
    clone() {
        var s;
        const e = this._frame.clone(),
            t = this._frame === this.orig ? e : this.orig.clone(),
            i = new N(this.baseTexture, !this.noFrame && e, t, (s = this.trim) == null ? void 0 : s.clone(), this.rotate, this.defaultAnchor);
        return this.noFrame && (i._frame = e), i
    }
    updateUvs() {
        this._uvs === In && (this._uvs = new Mo), this._uvs.set(this._frame, this.baseTexture, this.rotate), this._updateID++
    }
    static from(e, t = {}, i = B.STRICT_TEXTURE_CACHE) {
        const s = typeof e == "string";
        let n = null;
        if (s) n = e;
        else if (e instanceof U) {
            if (!e.cacheId) {
                const a = (t == null ? void 0 : t.pixiIdPrefix) || "pixiid";
                e.cacheId = `${a}-${Xt()}`, U.addToCache(e, e.cacheId)
            }
            n = e.cacheId
        } else {
            if (!e._pixiId) {
                const a = (t == null ? void 0 : t.pixiIdPrefix) || "pixiid";
                e._pixiId = `${a}_${Xt()}`
            }
            n = e._pixiId
        }
        let o = we[n];
        if (s && i && !o) throw new Error(`The cacheId "${n}" does not exist in TextureCache.`);
        return o || e instanceof U ? !o && e instanceof U && (o = new N(e), N.addToCache(o, n)) : (t.resolution || (t.resolution = mn(e)), o = new N(new U(e, t)), o.baseTexture.cacheId = n, U.addToCache(o.baseTexture, n), N.addToCache(o, n)), o
    }
    static fromURL(e, t) {
        const i = Object.assign({
                autoLoad: !1
            }, t == null ? void 0 : t.resourceOptions),
            s = N.from(e, Object.assign({
                resourceOptions: i
            }, t), !1),
            n = s.baseTexture.resource;
        return s.baseTexture.valid ? Promise.resolve(s) : n.load().then(() => Promise.resolve(s))
    }
    static fromBuffer(e, t, i, s) {
        return new N(U.fromBuffer(e, t, i, s))
    }
    static fromLoader(e, t, i, s) {
        const n = new U(e, Object.assign({
                scaleMode: U.defaultOptions.scaleMode,
                resolution: mn(t)
            }, s)),
            {
                resource: o
            } = n;
        o instanceof Co && (o.url = t);
        const a = new N(n);
        return i || (i = t), U.addToCache(a.baseTexture, i), N.addToCache(a, i), i !== t && (U.addToCache(a.baseTexture, t), N.addToCache(a, t)), a.baseTexture.valid ? Promise.resolve(a) : new Promise(h => {
            a.baseTexture.once("loaded", () => h(a))
        })
    }
    static addToCache(e, t) {
        t && (e.textureCacheIds.includes(t) || e.textureCacheIds.push(t), we[t] && we[t], we[t] = e)
    }
    static removeFromCache(e) {
        if (typeof e == "string") {
            const t = we[e];
            if (t) {
                const i = t.textureCacheIds.indexOf(e);
                return i > -1 && t.textureCacheIds.splice(i, 1), delete we[e], t
            }
        } else if (e != null && e.textureCacheIds) {
            for (let t = 0; t < e.textureCacheIds.length; ++t) we[e.textureCacheIds[t]] === e && delete we[e.textureCacheIds[t]];
            return e.textureCacheIds.length = 0, e
        }
        return null
    }
    get resolution() {
        return this.baseTexture.resolution
    }
    get frame() {
        return this._frame
    }
    set frame(e) {
        this._frame = e, this.noFrame = !1;
        const {
            x: t,
            y: i,
            width: s,
            height: n
        } = e, o = t + s > this.baseTexture.width, a = i + n > this.baseTexture.height;
        if (o || a) {
            const h = o && a ? "and" : "or",
                l = `X: ${t} + ${s} = ${t+s} > ${this.baseTexture.width}`,
                u = `Y: ${i} + ${n} = ${i+n} > ${this.baseTexture.height}`;
            throw new Error(`Texture Error: frame does not fit inside the base Texture dimensions: ${l} ${h} ${u}`)
        }
        this.valid = s && n && this.baseTexture.valid, this.trim || this.rotate || (this.orig = e), this.valid && this.updateUvs()
    }
    get rotate() {
        return this._rotate
    }
    set rotate(e) {
        this._rotate = e, this.valid && this.updateUvs()
    }
    get width() {
        return this.orig.width
    }
    get height() {
        return this.orig.height
    }
    castToBaseTexture() {
        return this.baseTexture
    }
    static get EMPTY() {
        return N._EMPTY || (N._EMPTY = new N(new U), gr(N._EMPTY), gr(N._EMPTY.baseTexture)), N._EMPTY
    }
    static get WHITE() {
        if (!N._WHITE) {
            const e = B.ADAPTER.createCanvas(16, 16),
                t = e.getContext("2d");
            e.width = 16, e.height = 16, t.fillStyle = "white", t.fillRect(0, 0, 16, 16), N._WHITE = new N(U.from(e)), gr(N._WHITE), gr(N._WHITE.baseTexture)
        }
        return N._WHITE
    }
}
class Dr extends N {
    constructor(e, t) {
        super(e, t), this.valid = !0, this.filterFrame = null, this.filterPoolKey = null, this.updateUvs()
    }
    get framebuffer() {
        return this.baseTexture.framebuffer
    }
    get multisample() {
        return this.framebuffer.multisample
    }
    set multisample(e) {
        this.framebuffer.multisample = e
    }
    resize(e, t, i = !0) {
        const s = this.baseTexture.resolution,
            n = Math.round(e * s) / s,
            o = Math.round(t * s) / s;
        this.valid = n > 0 && o > 0, this._frame.width = this.orig.width = n, this._frame.height = this.orig.height = o, i && this.baseTexture.resize(n, o), this.updateUvs()
    }
    setResolution(e) {
        const {
            baseTexture: t
        } = this;
        t.resolution !== e && (t.setResolution(e), this.resize(t.width, t.height, !1))
    }
    static create(e) {
        return new Dr(new Io(e))
    }
}
class Po {
    constructor(e) {
        this.texturePool = {}, this.textureOptions = e || {}, this.enableFullScreen = !1, this._pixelsWidth = 0, this._pixelsHeight = 0
    }
    createTexture(e, t, i = $.NONE) {
        const s = new Io(Object.assign({
            width: e,
            height: t,
            resolution: 1,
            multisample: i
        }, this.textureOptions));
        return new Dr(s)
    }
    getOptimalTexture(e, t, i = 1, s = $.NONE) {
        let n;
        e = Math.ceil(e * i - 1e-6), t = Math.ceil(t * i - 1e-6), this.enableFullScreen && e === this._pixelsWidth && t === this._pixelsHeight ? n = s > 1 ? -s : -1 : (n = ((65535 & (e = Mr(e))) << 16 | 65535 & (t = Mr(t))) >>> 0, s > 1 && (n += 4294967296 * s)), this.texturePool[n] || (this.texturePool[n] = []);
        let o = this.texturePool[n].pop();
        return o || (o = this.createTexture(e, t, s)), o.filterPoolKey = n, o.setResolution(i), o
    }
    getFilterTexture(e, t, i) {
        const s = this.getOptimalTexture(e.width, e.height, t || e.resolution, i || $.NONE);
        return s.filterFrame = e.filterFrame, s
    }
    returnTexture(e) {
        const t = e.filterPoolKey;
        e.filterFrame = null, this.texturePool[t].push(e)
    }
    returnFilterTexture(e) {
        this.returnTexture(e)
    }
    clear(e) {
        if (e = e !== !1)
            for (const t in this.texturePool) {
                const i = this.texturePool[t];
                if (i)
                    for (let s = 0; s < i.length; s++) i[s].destroy(!0)
            }
        this.texturePool = {}
    }
    setScreenSize(e) {
        if (e.width !== this._pixelsWidth || e.height !== this._pixelsHeight) {
            this.enableFullScreen = e.width > 0 && e.height > 0;
            for (const t in this.texturePool) {
                if (!(Number(t) < 0)) continue;
                const i = this.texturePool[t];
                if (i)
                    for (let s = 0; s < i.length; s++) i[s].destroy(!0);
                this.texturePool[t] = []
            }
            this._pixelsWidth = e.width, this._pixelsHeight = e.height
        }
    }
}
Po.SCREEN_KEY = -1;
class Wh extends At {
    constructor() {
        super(), this.addAttribute("aVertexPosition", new Float32Array([0, 0, 1, 0, 1, 1, 0, 1])).addIndex([0, 1, 3, 2])
    }
}
class zh extends At {
    constructor() {
        super(), this.vertices = new Float32Array([-1, -1, 1, -1, 1, 1, -1, 1]), this.uvs = new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]), this.vertexBuffer = new se(this.vertices), this.uvBuffer = new se(this.uvs), this.addAttribute("aVertexPosition", this.vertexBuffer).addAttribute("aTextureCoord", this.uvBuffer).addIndex([0, 1, 2, 0, 2, 3])
    }
    map(e, t) {
        let i = 0,
            s = 0;
        return this.uvs[0] = i, this.uvs[1] = s, this.uvs[2] = i + t.width / e.width, this.uvs[3] = s, this.uvs[4] = i + t.width / e.width, this.uvs[5] = s + t.height / e.height, this.uvs[6] = i, this.uvs[7] = s + t.height / e.height, i = t.x, s = t.y, this.vertices[0] = i, this.vertices[1] = s, this.vertices[2] = i + t.width, this.vertices[3] = s, this.vertices[4] = i + t.width, this.vertices[5] = s + t.height, this.vertices[6] = i, this.vertices[7] = s + t.height, this.invalidate(), this
    }
    invalidate() {
        return this.vertexBuffer._updateID++, this.uvBuffer._updateID++, this
    }
}
class $h {
    constructor() {
        this.renderTexture = null, this.target = null, this.legacy = !1, this.resolution = 1, this.multisample = $.NONE, this.sourceFrame = new z, this.destinationFrame = new z, this.bindingSourceFrame = new z, this.bindingDestinationFrame = new z, this.filters = [], this.transform = null
    }
    clear() {
        this.target = null, this.filters = null, this.renderTexture = null
    }
}
const yr = [new W, new W, new W, new W],
    ri = new J;
class Cn {
    constructor(e) {
        this.renderer = e, this.defaultFilterStack = [{}], this.texturePool = new Po, this.statePool = [], this.quad = new Wh, this.quadUv = new zh, this.tempRect = new z, this.activeState = {}, this.globalUniforms = new Ce({
            outputFrame: new z,
            inputSize: new Float32Array(4),
            inputPixel: new Float32Array(4),
            inputClamp: new Float32Array(4),
            resolution: 1,
            filterArea: new Float32Array(4),
            filterClamp: new Float32Array(4)
        }, !0), this.forceClear = !1, this.useMaxPadding = !1
    }
    init() {
        this.texturePool.setScreenSize(this.renderer.view)
    }
    push(e, t) {
        var f, y;
        const i = this.renderer,
            s = this.defaultFilterStack,
            n = this.statePool.pop() || new $h,
            o = this.renderer.renderTexture;
        let a = t[0].resolution,
            h = t[0].multisample,
            l = t[0].padding,
            u = t[0].autoFit,
            c = (f = t[0].legacy) != null ? f : !0;
        for (let m = 1; m < t.length; m++) {
            const g = t[m];
            a = Math.min(a, g.resolution), h = Math.min(h, g.multisample), l = this.useMaxPadding ? Math.max(l, g.padding) : l + g.padding, u = u && g.autoFit, c = c || ((y = g.legacy) != null ? y : !0)
        }
        s.length === 1 && (this.defaultFilterStack[0].renderTexture = o.current), s.push(n), n.resolution = a, n.multisample = h, n.legacy = c, n.target = e, n.sourceFrame.copyFrom(e.filterArea || e.getBounds(!0)), n.sourceFrame.pad(l);
        const d = this.tempRect.copyFrom(o.sourceFrame);
        i.projection.transform && this.transformAABB(ri.copyFrom(i.projection.transform).invert(), d), u ? (n.sourceFrame.fit(d), (n.sourceFrame.width <= 0 || n.sourceFrame.height <= 0) && (n.sourceFrame.width = 0, n.sourceFrame.height = 0)) : n.sourceFrame.intersects(d) || (n.sourceFrame.width = 0, n.sourceFrame.height = 0), this.roundFrame(n.sourceFrame, o.current ? o.current.resolution : i.resolution, o.sourceFrame, o.destinationFrame, i.projection.transform), n.renderTexture = this.getOptimalFilterTexture(n.sourceFrame.width, n.sourceFrame.height, a, h), n.filters = t, n.destinationFrame.width = n.renderTexture.width, n.destinationFrame.height = n.renderTexture.height;
        const p = this.tempRect;
        p.x = 0, p.y = 0, p.width = n.sourceFrame.width, p.height = n.sourceFrame.height, n.renderTexture.filterFrame = n.sourceFrame, n.bindingSourceFrame.copyFrom(o.sourceFrame), n.bindingDestinationFrame.copyFrom(o.destinationFrame), n.transform = i.projection.transform, i.projection.transform = null, o.bind(n.renderTexture, n.sourceFrame, p), i.framebuffer.clear(0, 0, 0, 0)
    }
    pop() {
        const e = this.defaultFilterStack,
            t = e.pop(),
            i = t.filters;
        this.activeState = t;
        const s = this.globalUniforms.uniforms;
        s.outputFrame = t.sourceFrame, s.resolution = t.resolution;
        const n = s.inputSize,
            o = s.inputPixel,
            a = s.inputClamp;
        if (n[0] = t.destinationFrame.width, n[1] = t.destinationFrame.height, n[2] = 1 / n[0], n[3] = 1 / n[1], o[0] = Math.round(n[0] * t.resolution), o[1] = Math.round(n[1] * t.resolution), o[2] = 1 / o[0], o[3] = 1 / o[1], a[0] = .5 * o[2], a[1] = .5 * o[3], a[2] = t.sourceFrame.width * n[2] - .5 * o[2], a[3] = t.sourceFrame.height * n[3] - .5 * o[3], t.legacy) {
            const l = s.filterArea;
            l[0] = t.destinationFrame.width, l[1] = t.destinationFrame.height, l[2] = t.sourceFrame.x, l[3] = t.sourceFrame.y, s.filterClamp = s.inputClamp
        }
        this.globalUniforms.update();
        const h = e[e.length - 1];
        if (this.renderer.framebuffer.blit(), i.length === 1) i[0].apply(this, t.renderTexture, h.renderTexture, $e.BLEND, t), this.returnFilterTexture(t.renderTexture);
        else {
            let l = t.renderTexture,
                u = this.getOptimalFilterTexture(l.width, l.height, t.resolution);
            u.filterFrame = l.filterFrame;
            let c = 0;
            for (c = 0; c < i.length - 1; ++c) {
                c === 1 && t.multisample > 1 && (u = this.getOptimalFilterTexture(l.width, l.height, t.resolution), u.filterFrame = l.filterFrame), i[c].apply(this, l, u, $e.CLEAR, t);
                const d = l;
                l = u, u = d
            }
            i[c].apply(this, l, h.renderTexture, $e.BLEND, t), c > 1 && t.multisample > 1 && this.returnFilterTexture(t.renderTexture), this.returnFilterTexture(l), this.returnFilterTexture(u)
        }
        t.clear(), this.statePool.push(t)
    }
    bindAndClear(e, t = $e.CLEAR) {
        const {
            renderTexture: i,
            state: s
        } = this.renderer;
        if (e === this.defaultFilterStack[this.defaultFilterStack.length - 1].renderTexture ? this.renderer.projection.transform = this.activeState.transform : this.renderer.projection.transform = null, e == null ? void 0 : e.filterFrame) {
            const o = this.tempRect;
            o.x = 0, o.y = 0, o.width = e.filterFrame.width, o.height = e.filterFrame.height, i.bind(e, e.filterFrame, o)
        } else e !== this.defaultFilterStack[this.defaultFilterStack.length - 1].renderTexture ? i.bind(e) : this.renderer.renderTexture.bind(e, this.activeState.bindingSourceFrame, this.activeState.bindingDestinationFrame);
        const n = 1 & s.stateId || this.forceClear;
        (t === $e.CLEAR || t === $e.BLIT && n) && this.renderer.framebuffer.clear(0, 0, 0, 0)
    }
    applyFilter(e, t, i, s) {
        const n = this.renderer;
        n.state.set(e.state), this.bindAndClear(i, s), e.uniforms.uSampler = t, e.uniforms.filterGlobals = this.globalUniforms, n.shader.bind(e), e.legacy = !!e.program.attributeData.aTextureCoord, e.legacy ? (this.quadUv.map(t._frame, t.filterFrame), n.geometry.bind(this.quadUv), n.geometry.draw(Ir.TRIANGLES)) : (n.geometry.bind(this.quad), n.geometry.draw(Ir.TRIANGLE_STRIP))
    }
    calculateSpriteMatrix(e, t) {
        const {
            sourceFrame: i,
            destinationFrame: s
        } = this.activeState, {
            orig: n
        } = t._texture, o = e.set(s.width, 0, 0, s.height, i.x, i.y), a = t.worldTransform.copyTo(J.TEMP_MATRIX);
        return a.invert(), o.prepend(a), o.scale(1 / n.width, 1 / n.height), o.translate(t.anchor.x, t.anchor.y), o
    }
    destroy() {
        this.renderer = null, this.texturePool.clear(!1)
    }
    getOptimalFilterTexture(e, t, i = 1, s = $.NONE) {
        return this.texturePool.getOptimalTexture(e, t, i, s)
    }
    getFilterTexture(e, t, i) {
        if (typeof e == "number") {
            const n = e;
            e = t, t = n
        }
        e = e || this.activeState.renderTexture;
        const s = this.texturePool.getOptimalTexture(e.width, e.height, t || e.resolution, i || $.NONE);
        return s.filterFrame = e.filterFrame, s
    }
    returnFilterTexture(e) {
        this.texturePool.returnTexture(e)
    }
    emptyPool() {
        this.texturePool.clear(!0)
    }
    resize() {
        this.texturePool.setScreenSize(this.renderer.view)
    }
    transformAABB(e, t) {
        const i = yr[0],
            s = yr[1],
            n = yr[2],
            o = yr[3];
        i.set(t.left, t.top), s.set(t.left, t.bottom), n.set(t.right, t.top), o.set(t.right, t.bottom), e.apply(i, i), e.apply(s, s), e.apply(n, n), e.apply(o, o);
        const a = Math.min(i.x, s.x, n.x, o.x),
            h = Math.min(i.y, s.y, n.y, o.y),
            l = Math.max(i.x, s.x, n.x, o.x),
            u = Math.max(i.y, s.y, n.y, o.y);
        t.x = a, t.y = h, t.width = l - a, t.height = u - h
    }
    roundFrame(e, t, i, s, n) {
        if (!(e.width <= 0 || e.height <= 0 || i.width <= 0 || i.height <= 0)) {
            if (n) {
                const {
                    a: o,
                    b: a,
                    c: h,
                    d: l
                } = n;
                if ((Math.abs(a) > 1e-4 || Math.abs(h) > 1e-4) && (Math.abs(o) > 1e-4 || Math.abs(l) > 1e-4)) return
            }(n = n ? ri.copyFrom(n) : ri.identity()).translate(-i.x, -i.y).scale(s.width / i.width, s.height / i.height).translate(s.x, s.y), this.transformAABB(n, e), e.ceil(t), this.transformAABB(n.invert(), e)
        }
    }
}
Cn.extension = {
    type: O.RendererSystem,
    name: "filter"
}, G.add(Cn);
class qh {
    constructor(e) {
        this.framebuffer = e, this.stencil = null, this.dirtyId = -1, this.dirtyFormat = -1, this.dirtySize = -1, this.multisample = $.NONE, this.msaaBuffer = null, this.blitFramebuffer = null, this.mipLevel = 0
    }
}
const Zh = new z;
class Mn {
    constructor(e) {
        this.renderer = e, this.managedFramebuffers = [], this.unknownFramebuffer = new Ri(10, 10), this.msaaSamples = null
    }
    contextChange() {
        this.disposeAll(!0);
        const e = this.gl = this.renderer.gl;
        if (this.CONTEXT_UID = this.renderer.CONTEXT_UID, this.current = this.unknownFramebuffer, this.viewport = new z, this.hasMRT = !0, this.writeDepthTexture = !0, this.renderer.context.webGLVersion === 1) {
            let t = this.renderer.context.extensions.drawBuffers,
                i = this.renderer.context.extensions.depthTexture;
            B.PREFER_ENV === st.WEBGL_LEGACY && (t = null, i = null), t ? e.drawBuffers = s => t.drawBuffersWEBGL(s) : (this.hasMRT = !1, e.drawBuffers = () => {}), i || (this.writeDepthTexture = !1)
        } else this.msaaSamples = e.getInternalformatParameter(e.RENDERBUFFER, e.RGBA8, e.SAMPLES)
    }
    bind(e, t, i = 0) {
        const {
            gl: s
        } = this;
        if (e) {
            const n = e.glFramebuffers[this.CONTEXT_UID] || this.initFramebuffer(e);
            this.current !== e && (this.current = e, s.bindFramebuffer(s.FRAMEBUFFER, n.framebuffer)), n.mipLevel !== i && (e.dirtyId++, e.dirtyFormat++, n.mipLevel = i), n.dirtyId !== e.dirtyId && (n.dirtyId = e.dirtyId, n.dirtyFormat !== e.dirtyFormat ? (n.dirtyFormat = e.dirtyFormat, n.dirtySize = e.dirtySize, this.updateFramebuffer(e, i)) : n.dirtySize !== e.dirtySize && (n.dirtySize = e.dirtySize, this.resizeFramebuffer(e)));
            for (let o = 0; o < e.colorTextures.length; o++) {
                const a = e.colorTextures[o];
                this.renderer.texture.unbind(a.parentTextureArray || a)
            }
            if (e.depthTexture && this.renderer.texture.unbind(e.depthTexture), t) {
                const o = t.width >> i,
                    a = t.height >> i,
                    h = o / t.width;
                this.setViewport(t.x * h, t.y * h, o, a)
            } else {
                const o = e.width >> i,
                    a = e.height >> i;
                this.setViewport(0, 0, o, a)
            }
        } else this.current && (this.current = null, s.bindFramebuffer(s.FRAMEBUFFER, null)), t ? this.setViewport(t.x, t.y, t.width, t.height) : this.setViewport(0, 0, this.renderer.width, this.renderer.height)
    }
    setViewport(e, t, i, s) {
        const n = this.viewport;
        e = Math.round(e), t = Math.round(t), i = Math.round(i), s = Math.round(s), n.width === i && n.height === s && n.x === e && n.y === t || (n.x = e, n.y = t, n.width = i, n.height = s, this.gl.viewport(e, t, i, s))
    }
    get size() {
        return this.current ? {
            x: 0,
            y: 0,
            width: this.current.width,
            height: this.current.height
        } : {
            x: 0,
            y: 0,
            width: this.renderer.width,
            height: this.renderer.height
        }
    }
    clear(e, t, i, s, n = ui.COLOR | ui.DEPTH) {
        const {
            gl: o
        } = this;
        o.clearColor(e, t, i, s), o.clear(n)
    }
    initFramebuffer(e) {
        const {
            gl: t
        } = this, i = new qh(t.createFramebuffer());
        return i.multisample = this.detectSamples(e.multisample), e.glFramebuffers[this.CONTEXT_UID] = i, this.managedFramebuffers.push(e), e.disposeRunner.add(this), i
    }
    resizeFramebuffer(e) {
        const {
            gl: t
        } = this, i = e.glFramebuffers[this.CONTEXT_UID];
        i.stencil && (t.bindRenderbuffer(t.RENDERBUFFER, i.stencil), i.msaaBuffer ? t.renderbufferStorageMultisample(t.RENDERBUFFER, i.multisample, t.DEPTH24_STENCIL8, e.width, e.height) : t.renderbufferStorage(t.RENDERBUFFER, t.DEPTH_STENCIL, e.width, e.height));
        const s = e.colorTextures;
        let n = s.length;
        t.drawBuffers || (n = Math.min(n, 1));
        for (let o = 0; o < n; o++) {
            const a = s[o],
                h = a.parentTextureArray || a;
            this.renderer.texture.bind(h, 0), o === 0 && i.msaaBuffer && (t.bindRenderbuffer(t.RENDERBUFFER, i.msaaBuffer), t.renderbufferStorageMultisample(t.RENDERBUFFER, i.multisample, h._glTextures[this.CONTEXT_UID].internalFormat, e.width, e.height))
        }
        e.depthTexture && this.writeDepthTexture && this.renderer.texture.bind(e.depthTexture, 0)
    }
    updateFramebuffer(e, t) {
        const {
            gl: i
        } = this, s = e.glFramebuffers[this.CONTEXT_UID], n = e.colorTextures;
        let o = n.length;
        i.drawBuffers || (o = Math.min(o, 1)), s.multisample > 1 && this.canMultisampleFramebuffer(e) ? s.msaaBuffer = s.msaaBuffer || i.createRenderbuffer() : s.msaaBuffer && (i.deleteRenderbuffer(s.msaaBuffer), s.msaaBuffer = null, s.blitFramebuffer && (s.blitFramebuffer.dispose(), s.blitFramebuffer = null));
        const a = [];
        for (let h = 0; h < o; h++) {
            const l = n[h],
                u = l.parentTextureArray || l;
            this.renderer.texture.bind(u, 0), h === 0 && s.msaaBuffer ? (i.bindRenderbuffer(i.RENDERBUFFER, s.msaaBuffer), i.renderbufferStorageMultisample(i.RENDERBUFFER, s.multisample, u._glTextures[this.CONTEXT_UID].internalFormat, e.width, e.height), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.RENDERBUFFER, s.msaaBuffer)) : (i.framebufferTexture2D(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + h, l.target, u._glTextures[this.CONTEXT_UID].texture, t), a.push(i.COLOR_ATTACHMENT0 + h))
        }
        if (a.length > 1 && i.drawBuffers(a), e.depthTexture && this.writeDepthTexture) {
            const h = e.depthTexture;
            this.renderer.texture.bind(h, 0), i.framebufferTexture2D(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.TEXTURE_2D, h._glTextures[this.CONTEXT_UID].texture, t)
        }!e.stencil && !e.depth || e.depthTexture && this.writeDepthTexture ? s.stencil && (i.deleteRenderbuffer(s.stencil), s.stencil = null) : (s.stencil = s.stencil || i.createRenderbuffer(), i.bindRenderbuffer(i.RENDERBUFFER, s.stencil), s.msaaBuffer ? i.renderbufferStorageMultisample(i.RENDERBUFFER, s.multisample, i.DEPTH24_STENCIL8, e.width, e.height) : i.renderbufferStorage(i.RENDERBUFFER, i.DEPTH_STENCIL, e.width, e.height), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.RENDERBUFFER, s.stencil))
    }
    canMultisampleFramebuffer(e) {
        return this.renderer.context.webGLVersion !== 1 && e.colorTextures.length <= 1 && !e.depthTexture
    }
    detectSamples(e) {
        const {
            msaaSamples: t
        } = this;
        let i = $.NONE;
        if (e <= 1 || t === null) return i;
        for (let s = 0; s < t.length; s++)
            if (t[s] <= e) {
                i = t[s];
                break
            }
        return i === 1 && (i = $.NONE), i
    }
    blit(e, t, i) {
        const {
            current: s,
            renderer: n,
            gl: o,
            CONTEXT_UID: a
        } = this;
        if (n.context.webGLVersion !== 2 || !s) return;
        const h = s.glFramebuffers[a];
        if (!h) return;
        if (!e) {
            if (!h.msaaBuffer) return;
            const u = s.colorTextures[0];
            if (!u) return;
            h.blitFramebuffer || (h.blitFramebuffer = new Ri(s.width, s.height), h.blitFramebuffer.addColorTexture(0, u)), (e = h.blitFramebuffer).colorTextures[0] !== u && (e.colorTextures[0] = u, e.dirtyId++, e.dirtyFormat++), e.width === s.width && e.height === s.height || (e.width = s.width, e.height = s.height, e.dirtyId++, e.dirtySize++)
        }
        t || ((t = Zh).width = s.width, t.height = s.height), i || (i = t);
        const l = t.width === i.width && t.height === i.height;
        this.bind(e), o.bindFramebuffer(o.READ_FRAMEBUFFER, h.framebuffer), o.blitFramebuffer(t.left, t.top, t.right, t.bottom, i.left, i.top, i.right, i.bottom, o.COLOR_BUFFER_BIT, l ? o.NEAREST : o.LINEAR)
    }
    disposeFramebuffer(e, t) {
        const i = e.glFramebuffers[this.CONTEXT_UID],
            s = this.gl;
        if (!i) return;
        delete e.glFramebuffers[this.CONTEXT_UID];
        const n = this.managedFramebuffers.indexOf(e);
        n >= 0 && this.managedFramebuffers.splice(n, 1), e.disposeRunner.remove(this), t || (s.deleteFramebuffer(i.framebuffer), i.msaaBuffer && s.deleteRenderbuffer(i.msaaBuffer), i.stencil && s.deleteRenderbuffer(i.stencil)), i.blitFramebuffer && i.blitFramebuffer.dispose()
    }
    disposeAll(e) {
        const t = this.managedFramebuffers;
        this.managedFramebuffers = [];
        for (let i = 0; i < t.length; i++) this.disposeFramebuffer(t[i], e)
    }
    forceStencil() {
        const e = this.current;
        if (!e) return;
        const t = e.glFramebuffers[this.CONTEXT_UID];
        if (!t || t.stencil) return;
        e.stencil = !0;
        const i = e.width,
            s = e.height,
            n = this.gl,
            o = n.createRenderbuffer();
        n.bindRenderbuffer(n.RENDERBUFFER, o), t.msaaBuffer ? n.renderbufferStorageMultisample(n.RENDERBUFFER, t.multisample, n.DEPTH24_STENCIL8, i, s) : n.renderbufferStorage(n.RENDERBUFFER, n.DEPTH_STENCIL, i, s), t.stencil = o, n.framebufferRenderbuffer(n.FRAMEBUFFER, n.DEPTH_STENCIL_ATTACHMENT, n.RENDERBUFFER, o)
    }
    reset() {
        this.current = this.unknownFramebuffer, this.viewport = new z
    }
    destroy() {
        this.renderer = null
    }
}
Mn.extension = {
    type: O.RendererSystem,
    name: "framebuffer"
}, G.add(Mn);
const ii = {
    5126: 4,
    5123: 2,
    5121: 1
};
class Pn {
    constructor(e) {
        this.renderer = e, this._activeGeometry = null, this._activeVao = null, this.hasVao = !0, this.hasInstance = !0, this.canUseUInt32ElementIndex = !1, this.managedGeometries = {}
    }
    contextChange() {
        this.disposeAll(!0);
        const e = this.gl = this.renderer.gl,
            t = this.renderer.context;
        if (this.CONTEXT_UID = this.renderer.CONTEXT_UID, t.webGLVersion !== 2) {
            let i = this.renderer.context.extensions.vertexArrayObject;
            B.PREFER_ENV === st.WEBGL_LEGACY && (i = null), i ? (e.createVertexArray = () => i.createVertexArrayOES(), e.bindVertexArray = s => i.bindVertexArrayOES(s), e.deleteVertexArray = s => i.deleteVertexArrayOES(s)) : (this.hasVao = !1, e.createVertexArray = () => null, e.bindVertexArray = () => null, e.deleteVertexArray = () => null)
        }
        if (t.webGLVersion !== 2) {
            const i = e.getExtension("ANGLE_instanced_arrays");
            i ? (e.vertexAttribDivisor = (s, n) => i.vertexAttribDivisorANGLE(s, n), e.drawElementsInstanced = (s, n, o, a, h) => i.drawElementsInstancedANGLE(s, n, o, a, h), e.drawArraysInstanced = (s, n, o, a) => i.drawArraysInstancedANGLE(s, n, o, a)) : this.hasInstance = !1
        }
        this.canUseUInt32ElementIndex = t.webGLVersion === 2 || !!t.extensions.uint32ElementIndex
    }
    bind(e, t) {
        t = t || this.renderer.shader.shader;
        const {
            gl: i
        } = this;
        let s = e.glVertexArrayObjects[this.CONTEXT_UID],
            n = !1;
        s || (this.managedGeometries[e.id] = e, e.disposeRunner.add(this), e.glVertexArrayObjects[this.CONTEXT_UID] = s = {}, n = !0);
        const o = s[t.program.id] || this.initGeometryVao(e, t, n);
        this._activeGeometry = e, this._activeVao !== o && (this._activeVao = o, this.hasVao ? i.bindVertexArray(o) : this.activateVao(e, t.program)), this.updateBuffers()
    }
    reset() {
        this.unbind()
    }
    updateBuffers() {
        const e = this._activeGeometry,
            t = this.renderer.buffer;
        for (let i = 0; i < e.buffers.length; i++) {
            const s = e.buffers[i];
            t.update(s)
        }
    }
    checkCompatibility(e, t) {
        const i = e.attributes,
            s = t.attributeData;
        for (const n in s)
            if (!i[n]) throw new Error(`shader and geometry incompatible, geometry missing the "${n}" attribute`)
    }
    getSignature(e, t) {
        const i = e.attributes,
            s = t.attributeData,
            n = ["g", e.id];
        for (const o in i) s[o] && n.push(o, s[o].location);
        return n.join("-")
    }
    initGeometryVao(e, t, i = !0) {
        const s = this.gl,
            n = this.CONTEXT_UID,
            o = this.renderer.buffer,
            a = t.program;
        a.glPrograms[n] || this.renderer.shader.generateProgram(t), this.checkCompatibility(e, a);
        const h = this.getSignature(e, a),
            l = e.glVertexArrayObjects[this.CONTEXT_UID];
        let u = l[h];
        if (u) return l[a.id] = u, u;
        const c = e.buffers,
            d = e.attributes,
            p = {},
            f = {};
        for (const y in c) p[y] = 0, f[y] = 0;
        for (const y in d) !d[y].size && a.attributeData[y] ? d[y].size = a.attributeData[y].size : d[y].size, p[d[y].buffer] += d[y].size * ii[d[y].type];
        for (const y in d) {
            const m = d[y],
                g = m.size;
            m.stride === void 0 && (p[m.buffer] === g * ii[m.type] ? m.stride = 0 : m.stride = p[m.buffer]), m.start === void 0 && (m.start = f[m.buffer], f[m.buffer] += g * ii[m.type])
        }
        u = s.createVertexArray(), s.bindVertexArray(u);
        for (let y = 0; y < c.length; y++) {
            const m = c[y];
            o.bind(m), i && m._glBuffers[n].refCount++
        }
        return this.activateVao(e, a), l[a.id] = u, l[h] = u, s.bindVertexArray(null), o.unbind(Ie.ARRAY_BUFFER), u
    }
    disposeGeometry(e, t) {
        var a;
        if (!this.managedGeometries[e.id]) return;
        delete this.managedGeometries[e.id];
        const i = e.glVertexArrayObjects[this.CONTEXT_UID],
            s = this.gl,
            n = e.buffers,
            o = (a = this.renderer) == null ? void 0 : a.buffer;
        if (e.disposeRunner.remove(this), i) {
            if (o)
                for (let h = 0; h < n.length; h++) {
                    const l = n[h]._glBuffers[this.CONTEXT_UID];
                    l && (l.refCount--, l.refCount !== 0 || t || o.dispose(n[h], t))
                }
            if (!t) {
                for (const h in i)
                    if (h[0] === "g") {
                        const l = i[h];
                        this._activeVao === l && this.unbind(), s.deleteVertexArray(l)
                    }
            }
            delete e.glVertexArrayObjects[this.CONTEXT_UID]
        }
    }
    disposeAll(e) {
        const t = Object.keys(this.managedGeometries);
        for (let i = 0; i < t.length; i++) this.disposeGeometry(this.managedGeometries[t[i]], e)
    }
    activateVao(e, t) {
        const i = this.gl,
            s = this.CONTEXT_UID,
            n = this.renderer.buffer,
            o = e.buffers,
            a = e.attributes;
        e.indexBuffer && n.bind(e.indexBuffer);
        let h = null;
        for (const l in a) {
            const u = a[l],
                c = o[u.buffer],
                d = c._glBuffers[s];
            if (t.attributeData[l]) {
                h !== d && (n.bind(c), h = d);
                const p = t.attributeData[l].location;
                if (i.enableVertexAttribArray(p), i.vertexAttribPointer(p, u.size, u.type || i.FLOAT, u.normalized, u.stride, u.start), u.instance) {
                    if (!this.hasInstance) throw new Error("geometry error, GPU Instancing is not supported on this device");
                    i.vertexAttribDivisor(p, u.divisor)
                }
            }
        }
    }
    draw(e, t, i, s) {
        const {
            gl: n
        } = this, o = this._activeGeometry;
        if (o.indexBuffer) {
            const a = o.indexBuffer.data.BYTES_PER_ELEMENT,
                h = a === 2 ? n.UNSIGNED_SHORT : n.UNSIGNED_INT;
            (a === 2 || a === 4 && this.canUseUInt32ElementIndex) && (o.instanced ? n.drawElementsInstanced(e, t || o.indexBuffer.data.length, h, (i || 0) * a, s || 1) : n.drawElements(e, t || o.indexBuffer.data.length, h, (i || 0) * a))
        } else o.instanced ? n.drawArraysInstanced(e, i, t || o.getSize(), s || 1) : n.drawArrays(e, i, t || o.getSize());
        return this
    }
    unbind() {
        this.gl.bindVertexArray(null), this._activeVao = null, this._activeGeometry = null
    }
    destroy() {
        this.renderer = null
    }
}
Pn.extension = {
    type: O.RendererSystem,
    name: "geometry"
}, G.add(Pn);
const Nn = new J;
class Kh {
    constructor(e, t) {
        this._texture = e, this.mapCoord = new J, this.uClampFrame = new Float32Array(4), this.uClampOffset = new Float32Array(2), this._textureID = -1, this._updateID = 0, this.clampOffset = 0, this.clampMargin = t === void 0 ? .5 : t, this.isSimple = !1
    }
    get texture() {
        return this._texture
    }
    set texture(e) {
        this._texture = e, this._textureID = -1
    }
    multiplyUvs(e, t) {
        t === void 0 && (t = e);
        const i = this.mapCoord;
        for (let s = 0; s < e.length; s += 2) {
            const n = e[s],
                o = e[s + 1];
            t[s] = n * i.a + o * i.c + i.tx, t[s + 1] = n * i.b + o * i.d + i.ty
        }
        return t
    }
    update(e) {
        const t = this._texture;
        if (!t || !t.valid || !e && this._textureID === t._updateID) return !1;
        this._textureID = t._updateID, this._updateID++;
        const i = t._uvs;
        this.mapCoord.set(i.x1 - i.x0, i.y1 - i.y0, i.x3 - i.x0, i.y3 - i.y0, i.x0, i.y0);
        const s = t.orig,
            n = t.trim;
        n && (Nn.set(s.width / n.width, 0, 0, s.height / n.height, -n.x / n.width, -n.y / n.height), this.mapCoord.append(Nn));
        const o = t.baseTexture,
            a = this.uClampFrame,
            h = this.clampMargin / o.resolution,
            l = this.clampOffset;
        return a[0] = (t._frame.x + h + l) / o.width, a[1] = (t._frame.y + h + l) / o.height, a[2] = (t._frame.x + t._frame.width - h + l) / o.width, a[3] = (t._frame.y + t._frame.height - h + l) / o.height, this.uClampOffset[0] = l / o.realWidth, this.uClampOffset[1] = l / o.realHeight, this.isSimple = t._frame.width === o.width && t._frame.height === o.height && t.rotate === 0, !0
    }
}
class Qh extends Ge {
    constructor(e, t, i) {
        let s = null;
        typeof e != "string" && t === void 0 && i === void 0 && (s = e, e = void 0, t = void 0, i = void 0), super(e || `attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;
uniform mat3 otherMatrix;

varying vec2 vMaskCoord;
varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = aTextureCoord;
    vMaskCoord = ( otherMatrix * vec3( aTextureCoord, 1.0)  ).xy;
}
`, t || `varying vec2 vMaskCoord;
varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform sampler2D mask;
uniform float alpha;
uniform float npmAlpha;
uniform vec4 maskClamp;

void main(void)
{
    float clip = step(3.5,
        step(maskClamp.x, vMaskCoord.x) +
        step(maskClamp.y, vMaskCoord.y) +
        step(vMaskCoord.x, maskClamp.z) +
        step(vMaskCoord.y, maskClamp.w));

    vec4 original = texture2D(uSampler, vTextureCoord);
    vec4 masky = texture2D(mask, vMaskCoord);
    float alphaMul = 1.0 - npmAlpha * (1.0 - masky.a);

    original *= (alphaMul * masky.r * alpha * clip);

    gl_FragColor = original;
}
`, i), this.maskSprite = s, this.maskMatrix = new J
    }
    get maskSprite() {
        return this._maskSprite
    }
    set maskSprite(e) {
        this._maskSprite = e, this._maskSprite && (this._maskSprite.renderable = !1)
    }
    apply(e, t, i, s) {
        const n = this._maskSprite,
            o = n._texture;
        o.valid && (o.uvMatrix || (o.uvMatrix = new Kh(o, 0)), o.uvMatrix.update(), this.uniforms.npmAlpha = o.baseTexture.alphaMode ? 0 : 1, this.uniforms.mask = o, this.uniforms.otherMatrix = e.calculateSpriteMatrix(this.maskMatrix, n).prepend(o.uvMatrix.mapCoord), this.uniforms.alpha = n.worldAlpha, this.uniforms.maskClamp = o.uvMatrix.uClampFrame, e.applyFilter(this, t, i, s))
    }
}
class Jh {
    constructor(e = null) {
        this.type = q.NONE, this.autoDetect = !0, this.maskObject = e || null, this.pooled = !1, this.isMaskData = !0, this.resolution = null, this.multisample = Ge.defaultMultisample, this.enabled = !0, this.colorMask = 15, this._filters = null, this._stencilCounter = 0, this._scissorCounter = 0, this._scissorRect = null, this._scissorRectLocal = null, this._colorMask = 15, this._target = null
    }
    get filter() {
        return this._filters ? this._filters[0] : null
    }
    set filter(e) {
        e ? this._filters ? this._filters[0] = e : this._filters = [e] : this._filters = null
    }
    reset() {
        this.pooled && (this.maskObject = null, this.type = q.NONE, this.autoDetect = !0), this._target = null, this._scissorRectLocal = null
    }
    copyCountersOrReset(e) {
        e ? (this._stencilCounter = e._stencilCounter, this._scissorCounter = e._scissorCounter, this._scissorRect = e._scissorRect) : (this._stencilCounter = 0, this._scissorCounter = 0, this._scissorRect = null)
    }
}
class On {
    constructor(e) {
        this.renderer = e, this.enableScissor = !0, this.alphaMaskPool = [], this.maskDataPool = [], this.maskStack = [], this.alphaMaskIndex = 0
    }
    setMaskStack(e) {
        this.maskStack = e, this.renderer.scissor.setMaskStack(e), this.renderer.stencil.setMaskStack(e)
    }
    push(e, t) {
        let i = t;
        if (!i.isMaskData) {
            const n = this.maskDataPool.pop() || new Jh;
            n.pooled = !0, n.maskObject = t, i = n
        }
        const s = this.maskStack.length !== 0 ? this.maskStack[this.maskStack.length - 1] : null;
        if (i.copyCountersOrReset(s), i._colorMask = s ? s._colorMask : 15, i.autoDetect && this.detect(i), i._target = e, i.type !== q.SPRITE && this.maskStack.push(i), i.enabled) switch (i.type) {
            case q.SCISSOR:
                this.renderer.scissor.push(i);
                break;
            case q.STENCIL:
                this.renderer.stencil.push(i);
                break;
            case q.SPRITE:
                i.copyCountersOrReset(null), this.pushSpriteMask(i);
                break;
            case q.COLOR:
                this.pushColorMask(i)
        }
        i.type === q.SPRITE && this.maskStack.push(i)
    }
    pop(e) {
        const t = this.maskStack.pop();
        if (t && t._target === e) {
            if (t.enabled) switch (t.type) {
                case q.SCISSOR:
                    this.renderer.scissor.pop(t);
                    break;
                case q.STENCIL:
                    this.renderer.stencil.pop(t.maskObject);
                    break;
                case q.SPRITE:
                    this.popSpriteMask(t);
                    break;
                case q.COLOR:
                    this.popColorMask(t)
            }
            if (t.reset(), t.pooled && this.maskDataPool.push(t), this.maskStack.length !== 0) {
                const i = this.maskStack[this.maskStack.length - 1];
                i.type === q.SPRITE && i._filters && (i._filters[0].maskSprite = i.maskObject)
            }
        }
    }
    detect(e) {
        const t = e.maskObject;
        t ? t.isSprite ? e.type = q.SPRITE : this.enableScissor && this.renderer.scissor.testScissor(e) ? e.type = q.SCISSOR : e.type = q.STENCIL : e.type = q.COLOR
    }
    pushSpriteMask(e) {
        var u, c;
        const {
            maskObject: t
        } = e, i = e._target;
        let s = e._filters;
        s || (s = this.alphaMaskPool[this.alphaMaskIndex], s || (s = this.alphaMaskPool[this.alphaMaskIndex] = [new Qh]));
        const n = this.renderer,
            o = n.renderTexture;
        let a, h;
        if (o.current) {
            const d = o.current;
            a = e.resolution || d.resolution, h = (u = e.multisample) != null ? u : d.multisample
        } else a = e.resolution || n.resolution, h = (c = e.multisample) != null ? c : n.multisample;
        s[0].resolution = a, s[0].multisample = h, s[0].maskSprite = t;
        const l = i.filterArea;
        i.filterArea = t.getBounds(!0), n.filter.push(i, s), i.filterArea = l, e._filters || this.alphaMaskIndex++
    }
    popSpriteMask(e) {
        this.renderer.filter.pop(), e._filters ? e._filters[0].maskSprite = null : (this.alphaMaskIndex--, this.alphaMaskPool[this.alphaMaskIndex][0].maskSprite = null)
    }
    pushColorMask(e) {
        const t = e._colorMask,
            i = e._colorMask = t & e.colorMask;
        i !== t && this.renderer.gl.colorMask(!!(1 & i), !!(2 & i), !!(4 & i), !!(8 & i))
    }
    popColorMask(e) {
        const t = e._colorMask,
            i = this.maskStack.length > 0 ? this.maskStack[this.maskStack.length - 1]._colorMask : 15;
        i !== t && this.renderer.gl.colorMask(!!(1 & i), !!(2 & i), !!(4 & i), !!(8 & i))
    }
    destroy() {
        this.renderer = null
    }
}
On.extension = {
    type: O.RendererSystem,
    name: "mask"
}, G.add(On);
class No {
    constructor(e) {
        this.renderer = e, this.maskStack = [], this.glConst = 0
    }
    getStackLength() {
        return this.maskStack.length
    }
    setMaskStack(e) {
        const {
            gl: t
        } = this.renderer, i = this.getStackLength();
        this.maskStack = e;
        const s = this.getStackLength();
        s !== i && (s === 0 ? t.disable(this.glConst) : (t.enable(this.glConst), this._useCurrent()))
    }
    _useCurrent() {}
    destroy() {
        this.renderer = null, this.maskStack = null
    }
}
const Fn = new J,
    Bn = [],
    Sr = class extends No {
        constructor(r) {
            super(r), this.glConst = B.ADAPTER.getWebGLRenderingContext().SCISSOR_TEST
        }
        getStackLength() {
            const r = this.maskStack[this.maskStack.length - 1];
            return r ? r._scissorCounter : 0
        }
        calcScissorRect(r) {
            var o;
            if (r._scissorRectLocal) return;
            const e = r._scissorRect,
                {
                    maskObject: t
                } = r,
                {
                    renderer: i
                } = this,
                s = i.renderTexture,
                n = t.getBounds(!0, (o = Bn.pop()) != null ? o : new z);
            this.roundFrameToPixels(n, s.current ? s.current.resolution : i.resolution, s.sourceFrame, s.destinationFrame, i.projection.transform), e && n.fit(e), r._scissorRectLocal = n
        }
        static isMatrixRotated(r) {
            if (!r) return !1;
            const {
                a: e,
                b: t,
                c: i,
                d: s
            } = r;
            return (Math.abs(t) > 1e-4 || Math.abs(i) > 1e-4) && (Math.abs(e) > 1e-4 || Math.abs(s) > 1e-4)
        }
        testScissor(r) {
            const {
                maskObject: e
            } = r;
            if (!e.isFastRect || !e.isFastRect() || Sr.isMatrixRotated(e.worldTransform) || Sr.isMatrixRotated(this.renderer.projection.transform)) return !1;
            this.calcScissorRect(r);
            const t = r._scissorRectLocal;
            return t.width > 0 && t.height > 0
        }
        roundFrameToPixels(r, e, t, i, s) {
            Sr.isMatrixRotated(s) || ((s = s ? Fn.copyFrom(s) : Fn.identity()).translate(-t.x, -t.y).scale(i.width / t.width, i.height / t.height).translate(i.x, i.y), this.renderer.filter.transformAABB(s, r), r.fit(i), r.x = Math.round(r.x * e), r.y = Math.round(r.y * e), r.width = Math.round(r.width * e), r.height = Math.round(r.height * e))
        }
        push(r) {
            r._scissorRectLocal || this.calcScissorRect(r);
            const {
                gl: e
            } = this.renderer;
            r._scissorRect || e.enable(e.SCISSOR_TEST), r._scissorCounter++, r._scissorRect = r._scissorRectLocal, this._useCurrent()
        }
        pop(r) {
            const {
                gl: e
            } = this.renderer;
            r && Bn.push(r._scissorRectLocal), this.getStackLength() > 0 ? this._useCurrent() : e.disable(e.SCISSOR_TEST)
        }
        _useCurrent() {
            const r = this.maskStack[this.maskStack.length - 1]._scissorRect;
            let e;
            e = this.renderer.renderTexture.current ? r.y : this.renderer.height - r.height - r.y, this.renderer.gl.scissor(r.x, e, r.width, r.height)
        }
    };
let Ln = Sr;
Ln.extension = {
    type: O.RendererSystem,
    name: "scissor"
}, G.add(Ln);
class Dn extends No {
    constructor(e) {
        super(e), this.glConst = B.ADAPTER.getWebGLRenderingContext().STENCIL_TEST
    }
    getStackLength() {
        const e = this.maskStack[this.maskStack.length - 1];
        return e ? e._stencilCounter : 0
    }
    push(e) {
        const t = e.maskObject,
            {
                gl: i
            } = this.renderer,
            s = e._stencilCounter;
        s === 0 && (this.renderer.framebuffer.forceStencil(), i.clearStencil(0), i.clear(i.STENCIL_BUFFER_BIT), i.enable(i.STENCIL_TEST)), e._stencilCounter++;
        const n = e._colorMask;
        n !== 0 && (e._colorMask = 0, i.colorMask(!1, !1, !1, !1)), i.stencilFunc(i.EQUAL, s, 4294967295), i.stencilOp(i.KEEP, i.KEEP, i.INCR), t.renderable = !0, t.render(this.renderer), this.renderer.batch.flush(), t.renderable = !1, n !== 0 && (e._colorMask = n, i.colorMask(!!(1 & n), !!(2 & n), !!(4 & n), !!(8 & n))), this._useCurrent()
    }
    pop(e) {
        const t = this.renderer.gl;
        if (this.getStackLength() === 0) t.disable(t.STENCIL_TEST);
        else {
            const i = this.maskStack.length !== 0 ? this.maskStack[this.maskStack.length - 1] : null,
                s = i ? i._colorMask : 15;
            s !== 0 && (i._colorMask = 0, t.colorMask(!1, !1, !1, !1)), t.stencilOp(t.KEEP, t.KEEP, t.DECR), e.renderable = !0, e.render(this.renderer), this.renderer.batch.flush(), e.renderable = !1, s !== 0 && (i._colorMask = s, t.colorMask(!!(1 & s), !!(2 & s), !!(4 & s), !!(8 & s))), this._useCurrent()
        }
    }
    _useCurrent() {
        const e = this.renderer.gl;
        e.stencilFunc(e.EQUAL, this.getStackLength(), 4294967295), e.stencilOp(e.KEEP, e.KEEP, e.KEEP)
    }
}
Dn.extension = {
    type: O.RendererSystem,
    name: "stencil"
}, G.add(Dn);
class Un {
    constructor(e) {
        this.renderer = e, this.plugins = {}, Object.defineProperties(this.plugins, {
            extract: {
                enumerable: !1,
                get: () => (k(0, "renderer.plugins.extract has moved to renderer.extract"), e.extract)
            },
            prepare: {
                enumerable: !1,
                get: () => (k(0, "renderer.plugins.prepare has moved to renderer.prepare"), e.prepare)
            },
            interaction: {
                enumerable: !1,
                get: () => (k(0, "renderer.plugins.interaction has been deprecated, use renderer.events"), e.events)
            }
        })
    }
    init(e) {
        for (const t in e) this.plugins[t] = new e[t](this.renderer)
    }
    destroy() {
        for (const e in this.plugins) this.plugins[e].destroy(), this.plugins[e] = null
    }
}
Un.extension = {
    type: [O.RendererSystem, O.CanvasRendererSystem],
    name: "_plugin"
}, G.add(Un);
class kn {
    constructor(e) {
        this.renderer = e, this.destinationFrame = null, this.sourceFrame = null, this.defaultFrame = null, this.projectionMatrix = new J, this.transform = null
    }
    update(e, t, i, s) {
        this.destinationFrame = e || this.destinationFrame || this.defaultFrame, this.sourceFrame = t || this.sourceFrame || e, this.calculateProjection(this.destinationFrame, this.sourceFrame, i, s), this.transform && this.projectionMatrix.append(this.transform);
        const n = this.renderer;
        n.globalUniforms.uniforms.projectionMatrix = this.projectionMatrix, n.globalUniforms.update(), n.shader.shader && n.shader.syncUniformGroup(n.shader.shader.uniforms.globals)
    }
    calculateProjection(e, t, i, s) {
        const n = this.projectionMatrix,
            o = s ? -1 : 1;
        n.identity(), n.a = 1 / t.width * 2, n.d = o * (1 / t.height * 2), n.tx = -1 - t.x * n.a, n.ty = -o - t.y * n.d
    }
    setTransform(e) {}
    destroy() {
        this.renderer = null
    }
}
kn.extension = {
    type: O.RendererSystem,
    name: "projection"
}, G.add(kn);
const el = new cs;
class Gn {
    constructor(e) {
        this.renderer = e, this._tempMatrix = new J
    }
    generateTexture(e, t) {
        const h = t || {},
            {
                region: i
            } = h,
            s = ys(h, ["region"]),
            n = i || e.getLocalBounds(null, !0);
        n.width === 0 && (n.width = 1), n.height === 0 && (n.height = 1);
        const o = Dr.create(Kt({
            width: n.width,
            height: n.height
        }, s));
        this._tempMatrix.tx = -n.x, this._tempMatrix.ty = -n.y;
        const a = e.transform;
        return e.transform = el, this.renderer.render(e, {
            renderTexture: o,
            transform: this._tempMatrix,
            skipUpdateTransform: !!e.parent,
            blit: !0
        }), e.transform = a, o
    }
    destroy() {}
}
Gn.extension = {
    type: [O.RendererSystem, O.CanvasRendererSystem],
    name: "textureGenerator"
}, G.add(Gn);
const We = new z,
    Bt = new z;
class jn {
    constructor(e) {
        this.renderer = e, this.defaultMaskStack = [], this.current = null, this.sourceFrame = new z, this.destinationFrame = new z, this.viewportFrame = new z
    }
    bind(e = null, t, i) {
        const s = this.renderer;
        let n, o, a;
        this.current = e, e ? (n = e.baseTexture, a = n.resolution, t || (We.width = e.frame.width, We.height = e.frame.height, t = We), i || (Bt.x = e.frame.x, Bt.y = e.frame.y, Bt.width = t.width, Bt.height = t.height, i = Bt), o = n.framebuffer) : (a = s.resolution, t || (We.width = s._view.screen.width, We.height = s._view.screen.height, t = We), i || ((i = We).width = t.width, i.height = t.height));
        const h = this.viewportFrame;
        h.x = i.x * a, h.y = i.y * a, h.width = i.width * a, h.height = i.height * a, e || (h.y = s.view.height - (h.y + h.height)), h.ceil(), this.renderer.framebuffer.bind(o, h), this.renderer.projection.update(i, t, a, !o), e ? this.renderer.mask.setMaskStack(n.maskStack) : this.renderer.mask.setMaskStack(this.defaultMaskStack), this.sourceFrame.copyFrom(t), this.destinationFrame.copyFrom(i)
    }
    clear(e, t) {
        e = this.current ? e || this.current.baseTexture.clearColor : e || this.renderer.background.colorRgba;
        const i = this.destinationFrame,
            s = this.current ? this.current.baseTexture : this.renderer._view.screen,
            n = i.width !== s.width || i.height !== s.height;
        if (n) {
            let {
                x: o,
                y: a,
                width: h,
                height: l
            } = this.viewportFrame;
            o = Math.round(o), a = Math.round(a), h = Math.round(h), l = Math.round(l), this.renderer.gl.enable(this.renderer.gl.SCISSOR_TEST), this.renderer.gl.scissor(o, a, h, l)
        }
        this.renderer.framebuffer.clear(e[0], e[1], e[2], e[3], t), n && this.renderer.scissor.pop()
    }
    resize() {
        this.bind(null)
    }
    reset() {
        this.bind(null)
    }
    destroy() {
        this.renderer = null
    }
}
jn.extension = {
    type: O.RendererSystem,
    name: "renderTexture"
}, G.add(jn);
class tl {
    constructor(e, t) {
        this.program = e, this.uniformData = t, this.uniformGroups = {}, this.uniformDirtyGroups = {}, this.uniformBufferBindings = {}
    }
    destroy() {
        this.uniformData = null, this.uniformGroups = null, this.uniformDirtyGroups = null, this.uniformBufferBindings = null, this.program = null
    }
}

function rl(r, e) {
    var a;
    const t = xn(r, r.VERTEX_SHADER, e.vertexSrc),
        i = xn(r, r.FRAGMENT_SHADER, e.fragmentSrc),
        s = r.createProgram();
    r.attachShader(s, t), r.attachShader(s, i);
    const n = (a = e.extra) == null ? void 0 : a.transformFeedbackVaryings;
    if (n && (typeof r.transformFeedbackVaryings != "function" || r.transformFeedbackVaryings(s, n.names, n.bufferMode === "separate" ? r.SEPARATE_ATTRIBS : r.INTERLEAVED_ATTRIBS)), r.linkProgram(s), r.getProgramParameter(s, r.LINK_STATUS) || function(h, l, u, c) {
            h.getProgramParameter(l, h.LINK_STATUS) || (h.getShaderParameter(u, h.COMPILE_STATUS) || vn(h, u), h.getShaderParameter(c, h.COMPILE_STATUS) || vn(h, c), h.getProgramInfoLog(l))
        }(r, s, t, i), e.attributeData = function(h, l) {
            const u = {},
                c = l.getProgramParameter(h, l.ACTIVE_ATTRIBUTES);
            for (let d = 0; d < c; d++) {
                const p = l.getActiveAttrib(h, d);
                if (p.name.startsWith("gl_")) continue;
                const f = En(l, p.type),
                    y = {
                        type: f,
                        name: p.name,
                        size: Ao(f),
                        location: l.getAttribLocation(h, p.name)
                    };
                u[p.name] = y
            }
            return u
        }(s, r), e.uniformData = function(h, l) {
            const u = {},
                c = l.getProgramParameter(h, l.ACTIVE_UNIFORMS);
            for (let d = 0; d < c; d++) {
                const p = l.getActiveUniform(h, d),
                    f = p.name.replace(/\[.*?\]$/, ""),
                    y = !!p.name.match(/\[.*?\]$/),
                    m = En(l, p.type);
                u[f] = {
                    name: f,
                    index: d,
                    type: m,
                    size: p.size,
                    isArray: y,
                    value: _n(m, p.size)
                }
            }
            return u
        }(s, r), !/^[ \t]*#[ \t]*version[ \t]+300[ \t]+es[ \t]*$/m.test(e.vertexSrc)) {
        const h = Object.keys(e.attributeData);
        h.sort((l, u) => l > u ? 1 : -1);
        for (let l = 0; l < h.length; l++) e.attributeData[h[l]].location = l, r.bindAttribLocation(s, l, h[l]);
        r.linkProgram(s)
    }
    r.deleteShader(t), r.deleteShader(i);
    const o = {};
    for (const h in e.uniformData) {
        const l = e.uniformData[h];
        o[h] = {
            location: r.getUniformLocation(s, h),
            value: _n(l.type, l.size)
        }
    }
    return new tl(s, o)
}

function il(r, e, t, i, s) {
    t.buffer.update(s)
}
const sl = {
        float: `
        data[offset] = v;
    `,
        vec2: `
        data[offset] = v[0];
        data[offset+1] = v[1];
    `,
        vec3: `
        data[offset] = v[0];
        data[offset+1] = v[1];
        data[offset+2] = v[2];

    `,
        vec4: `
        data[offset] = v[0];
        data[offset+1] = v[1];
        data[offset+2] = v[2];
        data[offset+3] = v[3];
    `,
        mat2: `
        data[offset] = v[0];
        data[offset+1] = v[1];

        data[offset+4] = v[2];
        data[offset+5] = v[3];
    `,
        mat3: `
        data[offset] = v[0];
        data[offset+1] = v[1];
        data[offset+2] = v[2];

        data[offset + 4] = v[3];
        data[offset + 5] = v[4];
        data[offset + 6] = v[5];

        data[offset + 8] = v[6];
        data[offset + 9] = v[7];
        data[offset + 10] = v[8];
    `,
        mat4: `
        for(var i = 0; i < 16; i++)
        {
            data[offset + i] = v[i];
        }
    `
    },
    Hn = {
        float: 4,
        vec2: 8,
        vec3: 12,
        vec4: 16,
        int: 4,
        ivec2: 8,
        ivec3: 12,
        ivec4: 16,
        uint: 4,
        uvec2: 8,
        uvec3: 12,
        uvec4: 16,
        bool: 4,
        bvec2: 8,
        bvec3: 12,
        bvec4: 16,
        mat2: 32,
        mat3: 48,
        mat4: 64
    };

function nl(r, e) {
    if (!r.autoManage) return {
        size: 0,
        syncFunc: il
    };
    const t = function(o, a) {
            const h = [];
            for (const l in o) a[l] && h.push(a[l]);
            return h.sort((l, u) => l.index - u.index), h
        }(r.uniforms, e),
        {
            uboElements: i,
            size: s
        } = function(o) {
            const a = o.map(c => ({
                data: c,
                offset: 0,
                dataLen: 0,
                dirty: 0
            }));
            let h = 0,
                l = 0,
                u = 0;
            for (let c = 0; c < a.length; c++) {
                const d = a[c];
                if (h = Hn[d.data.type], d.data.size > 1 && (h = Math.max(h, 16) * d.data.size), d.dataLen = h, l % h != 0 && l < 16) {
                    const p = l % h % 16;
                    l += p, u += p
                }
                l + h > 16 ? (u = 16 * Math.ceil(u / 16), d.offset = u, u += h, l = h) : (d.offset = u, l += h, u += h)
            }
            return u = 16 * Math.ceil(u / 16), {
                uboElements: a,
                size: u
            }
        }(t),
        n = [`
    var v = null;
    var v2 = null;
    var cv = null;
    var t = 0;
    var gl = renderer.gl
    var index = 0;
    var data = buffer.data;
    `];
    for (let o = 0; o < i.length; o++) {
        const a = i[o],
            h = r.uniforms[a.data.name],
            l = a.data.name;
        let u = !1;
        for (let c = 0; c < wt.length; c++) {
            const d = wt[c];
            if (d.codeUbo && d.test(a.data, h)) {
                n.push(`offset = ${a.offset/4};`, wt[c].codeUbo(a.data.name, h)), u = !0;
                break
            }
        }
        if (!u)
            if (a.data.size > 1) {
                const c = Ao(a.data.type),
                    d = Math.max(Hn[a.data.type] / 16, 1),
                    p = c / d,
                    f = (4 - p % 4) % 4;
                n.push(`
                cv = ud.${l}.value;
                v = uv.${l};
                offset = ${a.offset/4};

                t = 0;

                for(var i=0; i < ${a.data.size*d}; i++)
                {
                    for(var j = 0; j < ${p}; j++)
                    {
                        data[offset++] = v[t++];
                    }
                    offset += ${f};
                }

                `)
            } else {
                const c = sl[a.data.type];
                n.push(`
                cv = ud.${l}.value;
                v = uv.${l};
                offset = ${a.offset/4};
                ${c};
                `)
            }
    }
    return n.push(`
       renderer.buffer.update(buffer);
    `), {
        size: s,
        syncFunc: new Function("ud", "uv", "renderer", "syncData", "buffer", n.join(`
`))
    }
}
let ol = 0;
const xr = {
    textureCount: 0,
    uboCount: 0
};
class Xn {
    constructor(e) {
        this.destroyed = !1, this.renderer = e, this.systemCheck(), this.gl = null, this.shader = null, this.program = null, this.cache = {}, this._uboCache = {}, this.id = ol++
    }
    systemCheck() {
        if (! function() {
                if (typeof Ft == "boolean") return Ft;
                try {
                    Ft = new Function("param1", "param2", "param3", "return param1[param2] === param3;")({
                        a: "b"
                    }, "a", "b") === !0
                } catch (e) {
                    Ft = !1
                }
                return Ft
            }()) throw new Error("Current environment does not allow unsafe-eval, please use @pixi/unsafe-eval module to enable support.")
    }
    contextChange(e) {
        this.gl = e, this.reset()
    }
    bind(e, t) {
        e.disposeRunner.add(this), e.uniforms.globals = this.renderer.globalUniforms;
        const i = e.program,
            s = i.glPrograms[this.renderer.CONTEXT_UID] || this.generateProgram(e);
        return this.shader = e, this.program !== i && (this.program = i, this.gl.useProgram(s.program)), t || (xr.textureCount = 0, xr.uboCount = 0, this.syncUniformGroup(e.uniformGroup, xr)), s
    }
    setUniforms(e) {
        const t = this.shader.program,
            i = t.glPrograms[this.renderer.CONTEXT_UID];
        t.syncUniforms(i.uniformData, e, this.renderer)
    }
    syncUniformGroup(e, t) {
        const i = this.getGlProgram();
        e.static && e.dirtyId === i.uniformDirtyGroups[e.id] || (i.uniformDirtyGroups[e.id] = e.dirtyId, this.syncUniforms(e, i, t))
    }
    syncUniforms(e, t, i) {
        (e.syncUniforms[this.shader.program.id] || this.createSyncGroups(e))(t.uniformData, e.uniforms, this.renderer, i)
    }
    createSyncGroups(e) {
        const t = this.getSignature(e, this.shader.program.uniformData, "u");
        return this.cache[t] || (this.cache[t] = function(i, s) {
            var o;
            const n = [`
        var v = null;
        var cv = null;
        var cu = null;
        var t = 0;
        var gl = renderer.gl;
    `];
            for (const a in i.uniforms) {
                const h = s[a];
                if (!h) {
                    (o = i.uniforms[a]) != null && o.group && (i.uniforms[a].ubo ? n.push(`
                        renderer.shader.syncUniformBufferGroup(uv.${a}, '${a}');
                    `) : n.push(`
                        renderer.shader.syncUniformGroup(uv.${a}, syncData);
                    `));
                    continue
                }
                const l = i.uniforms[a];
                let u = !1;
                for (let c = 0; c < wt.length; c++)
                    if (wt[c].test(h, l)) {
                        n.push(wt[c].code(a, l)), u = !0;
                        break
                    }
                if (!u) {
                    const c = (h.size !== 1 || h.isArray ? Uh : Dh)[h.type].replace("location", `ud["${a}"].location`);
                    n.push(`
            cu = ud["${a}"];
            cv = cu.value;
            v = uv["${a}"];
            ${c};`)
                }
            }
            return new Function("ud", "uv", "renderer", "syncData", n.join(`
`))
        }(e, this.shader.program.uniformData)), e.syncUniforms[this.shader.program.id] = this.cache[t], e.syncUniforms[this.shader.program.id]
    }
    syncUniformBufferGroup(e, t) {
        const i = this.getGlProgram();
        if (!e.static || e.dirtyId !== 0 || !i.uniformGroups[e.id]) {
            e.dirtyId = 0;
            const s = i.uniformGroups[e.id] || this.createSyncBufferGroup(e, i, t);
            e.buffer.update(), s(i.uniformData, e.uniforms, this.renderer, xr, e.buffer)
        }
        this.renderer.buffer.bindBufferBase(e.buffer, i.uniformBufferBindings[t])
    }
    createSyncBufferGroup(e, t, i) {
        const {
            gl: s
        } = this.renderer;
        this.renderer.buffer.bind(e.buffer);
        const n = this.gl.getUniformBlockIndex(t.program, i);
        t.uniformBufferBindings[i] = this.shader.uniformBindCount, s.uniformBlockBinding(t.program, n, this.shader.uniformBindCount), this.shader.uniformBindCount++;
        const o = this.getSignature(e, this.shader.program.uniformData, "ubo");
        let a = this._uboCache[o];
        if (a || (a = this._uboCache[o] = nl(e, this.shader.program.uniformData)), e.autoManage) {
            const h = new Float32Array(a.size / 4);
            e.buffer.update(h)
        }
        return t.uniformGroups[e.id] = a.syncFunc, t.uniformGroups[e.id]
    }
    getSignature(e, t, i) {
        const s = e.uniforms,
            n = [`${i}-`];
        for (const o in s) n.push(o), t[o] && n.push(t[o].type);
        return n.join("-")
    }
    getGlProgram() {
        return this.shader ? this.shader.program.glPrograms[this.renderer.CONTEXT_UID] : null
    }
    generateProgram(e) {
        const t = this.gl,
            i = e.program,
            s = rl(t, i);
        return i.glPrograms[this.renderer.CONTEXT_UID] = s, s
    }
    reset() {
        this.program = null, this.shader = null
    }
    disposeShader(e) {
        this.shader === e && (this.shader = null)
    }
    destroy() {
        this.renderer = null, this.destroyed = !0
    }
}
Xn.extension = {
    type: O.RendererSystem,
    name: "shader"
}, G.add(Xn);
class Vn {
    constructor(e) {
        this.renderer = e
    }
    run(e) {
        const t = this.renderer;
        t.emitWithCustomOptions(t.runners.init, e), e.hello, t.resize(this.renderer.screen.width, this.renderer.screen.height)
    }
    destroy() {}
}
Vn.extension = {
    type: [O.RendererSystem, O.CanvasRendererSystem],
    name: "startup"
}, G.add(Vn);
const Ii = class {
    constructor() {
        this.gl = null, this.stateId = 0, this.polygonOffset = 0, this.blendMode = A.NONE, this._blendEq = !1, this.map = [], this.map[0] = this.setBlend, this.map[1] = this.setOffset, this.map[2] = this.setCullFace, this.map[3] = this.setDepthTest, this.map[4] = this.setFrontFace, this.map[5] = this.setDepthMask, this.checks = [], this.defaultState = new $t, this.defaultState.blend = !0
    }
    contextChange(r) {
        this.gl = r, this.blendModes = function(e, t = []) {
            return t[A.NORMAL] = [e.ONE, e.ONE_MINUS_SRC_ALPHA], t[A.ADD] = [e.ONE, e.ONE], t[A.MULTIPLY] = [e.DST_COLOR, e.ONE_MINUS_SRC_ALPHA, e.ONE, e.ONE_MINUS_SRC_ALPHA], t[A.SCREEN] = [e.ONE, e.ONE_MINUS_SRC_COLOR, e.ONE, e.ONE_MINUS_SRC_ALPHA], t[A.OVERLAY] = [e.ONE, e.ONE_MINUS_SRC_ALPHA], t[A.DARKEN] = [e.ONE, e.ONE_MINUS_SRC_ALPHA], t[A.LIGHTEN] = [e.ONE, e.ONE_MINUS_SRC_ALPHA], t[A.COLOR_DODGE] = [e.ONE, e.ONE_MINUS_SRC_ALPHA], t[A.COLOR_BURN] = [e.ONE, e.ONE_MINUS_SRC_ALPHA], t[A.HARD_LIGHT] = [e.ONE, e.ONE_MINUS_SRC_ALPHA], t[A.SOFT_LIGHT] = [e.ONE, e.ONE_MINUS_SRC_ALPHA], t[A.DIFFERENCE] = [e.ONE, e.ONE_MINUS_SRC_ALPHA], t[A.EXCLUSION] = [e.ONE, e.ONE_MINUS_SRC_ALPHA], t[A.HUE] = [e.ONE, e.ONE_MINUS_SRC_ALPHA], t[A.SATURATION] = [e.ONE, e.ONE_MINUS_SRC_ALPHA], t[A.COLOR] = [e.ONE, e.ONE_MINUS_SRC_ALPHA], t[A.LUMINOSITY] = [e.ONE, e.ONE_MINUS_SRC_ALPHA], t[A.NONE] = [0, 0], t[A.NORMAL_NPM] = [e.SRC_ALPHA, e.ONE_MINUS_SRC_ALPHA, e.ONE, e.ONE_MINUS_SRC_ALPHA], t[A.ADD_NPM] = [e.SRC_ALPHA, e.ONE, e.ONE, e.ONE], t[A.SCREEN_NPM] = [e.SRC_ALPHA, e.ONE_MINUS_SRC_COLOR, e.ONE, e.ONE_MINUS_SRC_ALPHA], t[A.SRC_IN] = [e.DST_ALPHA, e.ZERO], t[A.SRC_OUT] = [e.ONE_MINUS_DST_ALPHA, e.ZERO], t[A.SRC_ATOP] = [e.DST_ALPHA, e.ONE_MINUS_SRC_ALPHA], t[A.DST_OVER] = [e.ONE_MINUS_DST_ALPHA, e.ONE], t[A.DST_IN] = [e.ZERO, e.SRC_ALPHA], t[A.DST_OUT] = [e.ZERO, e.ONE_MINUS_SRC_ALPHA], t[A.DST_ATOP] = [e.ONE_MINUS_DST_ALPHA, e.SRC_ALPHA], t[A.XOR] = [e.ONE_MINUS_DST_ALPHA, e.ONE_MINUS_SRC_ALPHA], t[A.SUBTRACT] = [e.ONE, e.ONE, e.ONE, e.ONE, e.FUNC_REVERSE_SUBTRACT, e.FUNC_ADD], t
        }(r), this.set(this.defaultState), this.reset()
    }
    set(r) {
        if (r = r || this.defaultState, this.stateId !== r.data) {
            let e = this.stateId ^ r.data,
                t = 0;
            for (; e;) 1 & e && this.map[t].call(this, !!(r.data & 1 << t)), e >>= 1, t++;
            this.stateId = r.data
        }
        for (let e = 0; e < this.checks.length; e++) this.checks[e](this, r)
    }
    forceState(r) {
        r = r || this.defaultState;
        for (let e = 0; e < this.map.length; e++) this.map[e].call(this, !!(r.data & 1 << e));
        for (let e = 0; e < this.checks.length; e++) this.checks[e](this, r);
        this.stateId = r.data
    }
    setBlend(r) {
        this.updateCheck(Ii.checkBlendMode, r), this.gl[r ? "enable" : "disable"](this.gl.BLEND)
    }
    setOffset(r) {
        this.updateCheck(Ii.checkPolygonOffset, r), this.gl[r ? "enable" : "disable"](this.gl.POLYGON_OFFSET_FILL)
    }
    setDepthTest(r) {
        this.gl[r ? "enable" : "disable"](this.gl.DEPTH_TEST)
    }
    setDepthMask(r) {
        this.gl.depthMask(r)
    }
    setCullFace(r) {
        this.gl[r ? "enable" : "disable"](this.gl.CULL_FACE)
    }
    setFrontFace(r) {
        this.gl.frontFace(this.gl[r ? "CW" : "CCW"])
    }
    setBlendMode(r) {
        if (r === this.blendMode) return;
        this.blendMode = r;
        const e = this.blendModes[r],
            t = this.gl;
        e.length === 2 ? t.blendFunc(e[0], e[1]) : t.blendFuncSeparate(e[0], e[1], e[2], e[3]), e.length === 6 ? (this._blendEq = !0, t.blendEquationSeparate(e[4], e[5])) : this._blendEq && (this._blendEq = !1, t.blendEquationSeparate(t.FUNC_ADD, t.FUNC_ADD))
    }
    setPolygonOffset(r, e) {
        this.gl.polygonOffset(r, e)
    }
    reset() {
        this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, !1), this.forceState(this.defaultState), this._blendEq = !0, this.blendMode = -1, this.setBlendMode(0)
    }
    updateCheck(r, e) {
        const t = this.checks.indexOf(r);
        e && t === -1 ? this.checks.push(r) : e || t === -1 || this.checks.splice(t, 1)
    }
    static checkBlendMode(r, e) {
        r.setBlendMode(e.blendMode)
    }
    static checkPolygonOffset(r, e) {
        r.setPolygonOffset(1, e.polygonOffset)
    }
    destroy() {
        this.gl = null
    }
};
let Yn = Ii;
Yn.extension = {
    type: O.RendererSystem,
    name: "state"
}, G.add(Yn);
class al extends Fr {
    constructor() {
        super(...arguments), this.runners = {}, this._systemsHash = {}
    }
    setup(e) {
        var s;
        this.addRunners(...e.runners);
        const t = ((s = e.priority) != null ? s : []).filter(n => e.systems[n]),
            i = [...t, ...Object.keys(e.systems).filter(n => !t.includes(n))];
        for (const n of i) this.addSystem(e.systems[n], n)
    }
    addRunners(...e) {
        e.forEach(t => {
            this.runners[t] = new ve(t)
        })
    }
    addSystem(e, t) {
        const i = new e(this);
        if (this[t]) throw new Error(`Whoops! The name "${t}" is already in use`);
        this[t] = i, this._systemsHash[t] = i;
        for (const s in this.runners) this.runners[s].add(i);
        return this
    }
    emitWithCustomOptions(e, t) {
        const i = Object.keys(this._systemsHash);
        e.items.forEach(s => {
            const n = i.find(o => this._systemsHash[o] === s);
            s[e.name](t[n])
        })
    }
    destroy() {
        Object.values(this.runners).forEach(e => {
            e.destroy()
        }), this._systemsHash = {}
    }
}
const Ar = class {
    constructor(r) {
        this.renderer = r, this.count = 0, this.checkCount = 0, this.maxIdle = Ar.defaultMaxIdle, this.checkCountMax = Ar.defaultCheckCountMax, this.mode = Ar.defaultMode
    }
    postrender() {
        this.renderer.objectRenderer.renderingToScreen && (this.count++, this.mode !== is.MANUAL && (this.checkCount++, this.checkCount > this.checkCountMax && (this.checkCount = 0, this.run())))
    }
    run() {
        const r = this.renderer.texture,
            e = r.managedTextures;
        let t = !1;
        for (let i = 0; i < e.length; i++) {
            const s = e[i];
            !s.framebuffer && this.count - s.touched > this.maxIdle && (r.destroyTexture(s, !0), e[i] = null, t = !0)
        }
        if (t) {
            let i = 0;
            for (let s = 0; s < e.length; s++) e[s] !== null && (e[i++] = e[s]);
            e.length = i
        }
    }
    unload(r) {
        const e = this.renderer.texture,
            t = r._texture;
        t && !t.framebuffer && e.destroyTexture(t);
        for (let i = r.children.length - 1; i >= 0; i--) this.unload(r.children[i])
    }
    destroy() {
        this.renderer = null
    }
};
let _e = Ar;
_e.defaultMode = is.AUTO, _e.defaultMaxIdle = 3600, _e.defaultCheckCountMax = 600, _e.extension = {
    type: O.RendererSystem,
    name: "textureGC"
}, G.add(_e);
class si {
    constructor(e) {
        this.texture = e, this.width = -1, this.height = -1, this.dirtyId = -1, this.dirtyStyleId = -1, this.mipmap = !1, this.wrapMode = 33071, this.type = L.UNSIGNED_BYTE, this.internalFormat = E.RGBA, this.samplerType = 0
    }
}
class Wn {
    constructor(e) {
        this.renderer = e, this.boundTextures = [], this.currentLocation = -1, this.managedTextures = [], this._unknownBoundTextures = !1, this.unknownTexture = new U, this.hasIntegerTextures = !1
    }
    contextChange() {
        const e = this.gl = this.renderer.gl;
        this.CONTEXT_UID = this.renderer.CONTEXT_UID, this.webGLVersion = this.renderer.context.webGLVersion, this.internalFormats = function(s) {
            let n;
            return n = "WebGL2RenderingContext" in globalThis && s instanceof globalThis.WebGL2RenderingContext ? {
                [L.UNSIGNED_BYTE]: {
                    [E.RGBA]: s.RGBA8,
                    [E.RGB]: s.RGB8,
                    [E.RG]: s.RG8,
                    [E.RED]: s.R8,
                    [E.RGBA_INTEGER]: s.RGBA8UI,
                    [E.RGB_INTEGER]: s.RGB8UI,
                    [E.RG_INTEGER]: s.RG8UI,
                    [E.RED_INTEGER]: s.R8UI,
                    [E.ALPHA]: s.ALPHA,
                    [E.LUMINANCE]: s.LUMINANCE,
                    [E.LUMINANCE_ALPHA]: s.LUMINANCE_ALPHA
                },
                [L.BYTE]: {
                    [E.RGBA]: s.RGBA8_SNORM,
                    [E.RGB]: s.RGB8_SNORM,
                    [E.RG]: s.RG8_SNORM,
                    [E.RED]: s.R8_SNORM,
                    [E.RGBA_INTEGER]: s.RGBA8I,
                    [E.RGB_INTEGER]: s.RGB8I,
                    [E.RG_INTEGER]: s.RG8I,
                    [E.RED_INTEGER]: s.R8I
                },
                [L.UNSIGNED_SHORT]: {
                    [E.RGBA_INTEGER]: s.RGBA16UI,
                    [E.RGB_INTEGER]: s.RGB16UI,
                    [E.RG_INTEGER]: s.RG16UI,
                    [E.RED_INTEGER]: s.R16UI,
                    [E.DEPTH_COMPONENT]: s.DEPTH_COMPONENT16
                },
                [L.SHORT]: {
                    [E.RGBA_INTEGER]: s.RGBA16I,
                    [E.RGB_INTEGER]: s.RGB16I,
                    [E.RG_INTEGER]: s.RG16I,
                    [E.RED_INTEGER]: s.R16I
                },
                [L.UNSIGNED_INT]: {
                    [E.RGBA_INTEGER]: s.RGBA32UI,
                    [E.RGB_INTEGER]: s.RGB32UI,
                    [E.RG_INTEGER]: s.RG32UI,
                    [E.RED_INTEGER]: s.R32UI,
                    [E.DEPTH_COMPONENT]: s.DEPTH_COMPONENT24
                },
                [L.INT]: {
                    [E.RGBA_INTEGER]: s.RGBA32I,
                    [E.RGB_INTEGER]: s.RGB32I,
                    [E.RG_INTEGER]: s.RG32I,
                    [E.RED_INTEGER]: s.R32I
                },
                [L.FLOAT]: {
                    [E.RGBA]: s.RGBA32F,
                    [E.RGB]: s.RGB32F,
                    [E.RG]: s.RG32F,
                    [E.RED]: s.R32F,
                    [E.DEPTH_COMPONENT]: s.DEPTH_COMPONENT32F
                },
                [L.HALF_FLOAT]: {
                    [E.RGBA]: s.RGBA16F,
                    [E.RGB]: s.RGB16F,
                    [E.RG]: s.RG16F,
                    [E.RED]: s.R16F
                },
                [L.UNSIGNED_SHORT_5_6_5]: {
                    [E.RGB]: s.RGB565
                },
                [L.UNSIGNED_SHORT_4_4_4_4]: {
                    [E.RGBA]: s.RGBA4
                },
                [L.UNSIGNED_SHORT_5_5_5_1]: {
                    [E.RGBA]: s.RGB5_A1
                },
                [L.UNSIGNED_INT_2_10_10_10_REV]: {
                    [E.RGBA]: s.RGB10_A2,
                    [E.RGBA_INTEGER]: s.RGB10_A2UI
                },
                [L.UNSIGNED_INT_10F_11F_11F_REV]: {
                    [E.RGB]: s.R11F_G11F_B10F
                },
                [L.UNSIGNED_INT_5_9_9_9_REV]: {
                    [E.RGB]: s.RGB9_E5
                },
                [L.UNSIGNED_INT_24_8]: {
                    [E.DEPTH_STENCIL]: s.DEPTH24_STENCIL8
                },
                [L.FLOAT_32_UNSIGNED_INT_24_8_REV]: {
                    [E.DEPTH_STENCIL]: s.DEPTH32F_STENCIL8
                }
            } : {
                [L.UNSIGNED_BYTE]: {
                    [E.RGBA]: s.RGBA,
                    [E.RGB]: s.RGB,
                    [E.ALPHA]: s.ALPHA,
                    [E.LUMINANCE]: s.LUMINANCE,
                    [E.LUMINANCE_ALPHA]: s.LUMINANCE_ALPHA
                },
                [L.UNSIGNED_SHORT_5_6_5]: {
                    [E.RGB]: s.RGB
                },
                [L.UNSIGNED_SHORT_4_4_4_4]: {
                    [E.RGBA]: s.RGBA
                },
                [L.UNSIGNED_SHORT_5_5_5_1]: {
                    [E.RGBA]: s.RGBA
                }
            }, n
        }(e);
        const t = e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS);
        this.boundTextures.length = t;
        for (let s = 0; s < t; s++) this.boundTextures[s] = null;
        this.emptyTextures = {};
        const i = new si(e.createTexture());
        e.bindTexture(e.TEXTURE_2D, i.texture), e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, 1, 1, 0, e.RGBA, e.UNSIGNED_BYTE, new Uint8Array(4)), this.emptyTextures[e.TEXTURE_2D] = i, this.emptyTextures[e.TEXTURE_CUBE_MAP] = new si(e.createTexture()), e.bindTexture(e.TEXTURE_CUBE_MAP, this.emptyTextures[e.TEXTURE_CUBE_MAP].texture);
        for (let s = 0; s < 6; s++) e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + s, 0, e.RGBA, 1, 1, 0, e.RGBA, e.UNSIGNED_BYTE, null);
        e.texParameteri(e.TEXTURE_CUBE_MAP, e.TEXTURE_MAG_FILTER, e.LINEAR), e.texParameteri(e.TEXTURE_CUBE_MAP, e.TEXTURE_MIN_FILTER, e.LINEAR);
        for (let s = 0; s < this.boundTextures.length; s++) this.bind(null, s)
    }
    bind(e, t = 0) {
        const {
            gl: i
        } = this;
        if (e = e == null ? void 0 : e.castToBaseTexture(), (e == null ? void 0 : e.valid) && !e.parentTextureArray) {
            e.touched = this.renderer.textureGC.count;
            const s = e._glTextures[this.CONTEXT_UID] || this.initTexture(e);
            this.boundTextures[t] !== e && (this.currentLocation !== t && (this.currentLocation = t, i.activeTexture(i.TEXTURE0 + t)), i.bindTexture(e.target, s.texture)), s.dirtyId !== e.dirtyId ? (this.currentLocation !== t && (this.currentLocation = t, i.activeTexture(i.TEXTURE0 + t)), this.updateTexture(e)) : s.dirtyStyleId !== e.dirtyStyleId && this.updateTextureStyle(e), this.boundTextures[t] = e
        } else this.currentLocation !== t && (this.currentLocation = t, i.activeTexture(i.TEXTURE0 + t)), i.bindTexture(i.TEXTURE_2D, this.emptyTextures[i.TEXTURE_2D].texture), this.boundTextures[t] = null
    }
    reset() {
        this._unknownBoundTextures = !0, this.hasIntegerTextures = !1, this.currentLocation = -1;
        for (let e = 0; e < this.boundTextures.length; e++) this.boundTextures[e] = this.unknownTexture
    }
    unbind(e) {
        const {
            gl: t,
            boundTextures: i
        } = this;
        if (this._unknownBoundTextures) {
            this._unknownBoundTextures = !1;
            for (let s = 0; s < i.length; s++) i[s] === this.unknownTexture && this.bind(null, s)
        }
        for (let s = 0; s < i.length; s++) i[s] === e && (this.currentLocation !== s && (t.activeTexture(t.TEXTURE0 + s), this.currentLocation = s), t.bindTexture(e.target, this.emptyTextures[e.target].texture), i[s] = null)
    }
    ensureSamplerType(e) {
        const {
            boundTextures: t,
            hasIntegerTextures: i,
            CONTEXT_UID: s
        } = this;
        if (i)
            for (let n = e - 1; n >= 0; --n) {
                const o = t[n];
                o && o._glTextures[s].samplerType !== ci.FLOAT && this.renderer.texture.unbind(o)
            }
    }
    initTexture(e) {
        const t = new si(this.gl.createTexture());
        return t.dirtyId = -1, e._glTextures[this.CONTEXT_UID] = t, this.managedTextures.push(e), e.on("dispose", this.destroyTexture, this), t
    }
    initTextureType(e, t) {
        var i, s;
        t.internalFormat = (s = (i = this.internalFormats[e.type]) == null ? void 0 : i[e.format]) != null ? s : e.format, this.webGLVersion === 2 && e.type === L.HALF_FLOAT ? t.type = this.gl.HALF_FLOAT : t.type = e.type
    }
    updateTexture(e) {
        var s;
        const t = e._glTextures[this.CONTEXT_UID];
        if (!t) return;
        const i = this.renderer;
        if (this.initTextureType(e, t), (s = e.resource) == null ? void 0 : s.upload(i, e, t)) t.samplerType !== ci.FLOAT && (this.hasIntegerTextures = !0);
        else {
            const n = e.realWidth,
                o = e.realHeight,
                a = i.gl;
            (t.width !== n || t.height !== o || t.dirtyId < 0) && (t.width = n, t.height = o, a.texImage2D(e.target, 0, t.internalFormat, n, o, 0, e.format, t.type, null))
        }
        e.dirtyStyleId !== t.dirtyStyleId && this.updateTextureStyle(e), t.dirtyId = e.dirtyId
    }
    destroyTexture(e, t) {
        const {
            gl: i
        } = this;
        if ((e = e.castToBaseTexture())._glTextures[this.CONTEXT_UID] && (this.unbind(e), i.deleteTexture(e._glTextures[this.CONTEXT_UID].texture), e.off("dispose", this.destroyTexture, this), delete e._glTextures[this.CONTEXT_UID], !t)) {
            const s = this.managedTextures.indexOf(e);
            s !== -1 && wr(this.managedTextures, s, 1)
        }
    }
    updateTextureStyle(e) {
        var i;
        const t = e._glTextures[this.CONTEXT_UID];
        t && (e.mipmap !== rt.POW2 && this.webGLVersion === 2 || e.isPowerOfTwo ? t.mipmap = e.mipmap >= 1 : t.mipmap = !1, this.webGLVersion === 2 || e.isPowerOfTwo ? t.wrapMode = e.wrapMode : t.wrapMode = rs.CLAMP, (i = e.resource) != null && i.style(this.renderer, e, t) || this.setStyle(e, t), t.dirtyStyleId = e.dirtyStyleId)
    }
    setStyle(e, t) {
        const i = this.gl;
        if (t.mipmap && e.mipmap !== rt.ON_MANUAL && i.generateMipmap(e.target), i.texParameteri(e.target, i.TEXTURE_WRAP_S, t.wrapMode), i.texParameteri(e.target, i.TEXTURE_WRAP_T, t.wrapMode), t.mipmap) {
            i.texParameteri(e.target, i.TEXTURE_MIN_FILTER, e.scaleMode === Ne.LINEAR ? i.LINEAR_MIPMAP_LINEAR : i.NEAREST_MIPMAP_NEAREST);
            const s = this.renderer.context.extensions.anisotropicFiltering;
            if (s && e.anisotropicLevel > 0 && e.scaleMode === Ne.LINEAR) {
                const n = Math.min(e.anisotropicLevel, i.getParameter(s.MAX_TEXTURE_MAX_ANISOTROPY_EXT));
                i.texParameterf(e.target, s.TEXTURE_MAX_ANISOTROPY_EXT, n)
            }
        } else i.texParameteri(e.target, i.TEXTURE_MIN_FILTER, e.scaleMode === Ne.LINEAR ? i.LINEAR : i.NEAREST);
        i.texParameteri(e.target, i.TEXTURE_MAG_FILTER, e.scaleMode === Ne.LINEAR ? i.LINEAR : i.NEAREST)
    }
    destroy() {
        this.renderer = null
    }
}
Wn.extension = {
    type: O.RendererSystem,
    name: "texture"
}, G.add(Wn);
class zn {
    constructor(e) {
        this.renderer = e
    }
    contextChange() {
        this.gl = this.renderer.gl, this.CONTEXT_UID = this.renderer.CONTEXT_UID
    }
    bind(e) {
        const {
            gl: t,
            CONTEXT_UID: i
        } = this, s = e._glTransformFeedbacks[i] || this.createGLTransformFeedback(e);
        t.bindTransformFeedback(t.TRANSFORM_FEEDBACK, s)
    }
    unbind() {
        const {
            gl: e
        } = this;
        e.bindTransformFeedback(e.TRANSFORM_FEEDBACK, null)
    }
    beginTransformFeedback(e, t) {
        const {
            gl: i,
            renderer: s
        } = this;
        t && s.shader.bind(t), i.beginTransformFeedback(e)
    }
    endTransformFeedback() {
        const {
            gl: e
        } = this;
        e.endTransformFeedback()
    }
    createGLTransformFeedback(e) {
        const {
            gl: t,
            renderer: i,
            CONTEXT_UID: s
        } = this, n = t.createTransformFeedback();
        e._glTransformFeedbacks[s] = n, t.bindTransformFeedback(t.TRANSFORM_FEEDBACK, n);
        for (let o = 0; o < e.buffers.length; o++) {
            const a = e.buffers[o];
            a && (i.buffer.update(a), a._glBuffers[s].refCount++, t.bindBufferBase(t.TRANSFORM_FEEDBACK_BUFFER, o, a._glBuffers[s].buffer || null))
        }
        return t.bindTransformFeedback(t.TRANSFORM_FEEDBACK, null), e.disposeRunner.add(this), n
    }
    disposeTransformFeedback(e, t) {
        const i = e._glTransformFeedbacks[this.CONTEXT_UID],
            s = this.gl;
        e.disposeRunner.remove(this);
        const n = this.renderer.buffer;
        if (n)
            for (let o = 0; o < e.buffers.length; o++) {
                const a = e.buffers[o];
                if (!a) continue;
                const h = a._glBuffers[this.CONTEXT_UID];
                h && (h.refCount--, h.refCount !== 0 || t || n.dispose(a, t))
            }
        i && (t || s.deleteTransformFeedback(i), delete e._glTransformFeedbacks[this.CONTEXT_UID])
    }
    destroy() {
        this.renderer = null
    }
}
zn.extension = {
    type: O.RendererSystem,
    name: "transformFeedback"
}, G.add(zn);
class $n {
    constructor(e) {
        this.renderer = e
    }
    init(e) {
        this.screen = new z(0, 0, e.width, e.height), this.element = e.view || B.ADAPTER.createCanvas(), this.resolution = e.resolution || B.RESOLUTION, this.autoDensity = !!e.autoDensity
    }
    resizeView(e, t) {
        this.element.width = Math.round(e * this.resolution), this.element.height = Math.round(t * this.resolution);
        const i = this.element.width / this.resolution,
            s = this.element.height / this.resolution;
        this.screen.width = i, this.screen.height = s, this.autoDensity && (this.element.style.width = `${i}px`, this.element.style.height = `${s}px`), this.renderer.emit("resize", i, s), this.renderer.runners.resize.emit(this.screen.width, this.screen.height)
    }
    destroy(e) {
        var t;
        e && ((t = this.element.parentNode) == null || t.removeChild(this.element)), this.renderer = null, this.element = null, this.screen = null
    }
}
$n.extension = {
    type: [O.RendererSystem, O.CanvasRendererSystem],
    name: "_view"
}, G.add($n), B.PREFER_ENV = st.WEBGL2, B.STRICT_TEXTURE_CACHE = !1, Object.defineProperties(B, {
    WRAP_MODE: {
        get: () => U.defaultOptions.wrapMode,
        set(r) {
            k(0, "settings.WRAP_MODE is deprecated, use BaseTexture.defaultOptions.wrapMode"), U.defaultOptions.wrapMode = r
        }
    },
    SCALE_MODE: {
        get: () => U.defaultOptions.scaleMode,
        set(r) {
            k(0, "settings.SCALE_MODE is deprecated, use BaseTexture.defaultOptions.scaleMode"), U.defaultOptions.scaleMode = r
        }
    },
    MIPMAP_TEXTURES: {
        get: () => U.defaultOptions.mipmap,
        set(r) {
            k(0, "settings.MIPMAP_TEXTURES is deprecated, use BaseTexture.defaultOptions.mipmap"), U.defaultOptions.mipmap = r
        }
    },
    ANISOTROPIC_LEVEL: {
        get: () => U.defaultOptions.anisotropicLevel,
        set(r) {
            k(0, "settings.ANISOTROPIC_LEVEL is deprecated, use BaseTexture.defaultOptions.anisotropicLevel"), U.defaultOptions.anisotropicLevel = r
        }
    },
    FILTER_RESOLUTION: {
        get: () => (k(0, "settings.FILTER_RESOLUTION is deprecated, use Filter.defaultResolution"), Ge.defaultResolution),
        set(r) {
            Ge.defaultResolution = r
        }
    },
    FILTER_MULTISAMPLE: {
        get: () => (k(0, "settings.FILTER_MULTISAMPLE is deprecated, use Filter.defaultMultisample"), Ge.defaultMultisample),
        set(r) {
            Ge.defaultMultisample = r
        }
    },
    SPRITE_MAX_TEXTURES: {
        get: () => xe.defaultMaxTextures,
        set(r) {
            k(0, "settings.SPRITE_MAX_TEXTURES is deprecated, use BatchRenderer.defaultMaxTextures"), xe.defaultMaxTextures = r
        }
    },
    SPRITE_BATCH_SIZE: {
        get: () => xe.defaultBatchSize,
        set(r) {
            k(0, "settings.SPRITE_BATCH_SIZE is deprecated, use BatchRenderer.defaultBatchSize"), xe.defaultBatchSize = r
        }
    },
    CAN_UPLOAD_SAME_BUFFER: {
        get: () => xe.canUploadSameBuffer,
        set(r) {
            k(0, "settings.CAN_UPLOAD_SAME_BUFFER is deprecated, use BatchRenderer.canUploadSameBuffer"), xe.canUploadSameBuffer = r
        }
    },
    GC_MODE: {
        get: () => _e.defaultMode,
        set(r) {
            k(0, "settings.GC_MODE is deprecated, use TextureGCSystem.defaultMode"), _e.defaultMode = r
        }
    },
    GC_MAX_IDLE: {
        get: () => _e.defaultMaxIdle,
        set(r) {
            k(0, "settings.GC_MAX_IDLE is deprecated, use TextureGCSystem.defaultMaxIdle"), _e.defaultMaxIdle = r
        }
    },
    GC_MAX_CHECK_COUNT: {
        get: () => _e.defaultCheckCountMax,
        set(r) {
            k(0, "settings.GC_MAX_CHECK_COUNT is deprecated, use TextureGCSystem.defaultCheckCountMax"), _e.defaultCheckCountMax = r
        }
    },
    PRECISION_VERTEX: {
        get: () => Oe.defaultVertexPrecision,
        set(r) {
            k(0, "settings.PRECISION_VERTEX is deprecated, use Program.defaultVertexPrecision"), Oe.defaultVertexPrecision = r
        }
    },
    PRECISION_FRAGMENT: {
        get: () => Oe.defaultFragmentPrecision,
        set(r) {
            k(0, "settings.PRECISION_FRAGMENT is deprecated, use Program.defaultFragmentPrecision"), Oe.defaultFragmentPrecision = r
        }
    }
});
var Nr = (r => (r[r.HIGH = 25] = "HIGH", r[r.NORMAL = 0] = "NORMAL", r[r.LOW = -25] = "LOW", r[r.UTILITY = -50] = "UTILITY", r))(Nr || {});
class ni {
    constructor(e, t = null, i = 0, s = !1) {
        this.next = null, this.previous = null, this._destroyed = !1, this.fn = e, this.context = t, this.priority = i, this.once = s
    }
    match(e, t = null) {
        return this.fn === e && this.context === t
    }
    emit(e) {
        this.fn && (this.context ? this.fn.call(this.context, e) : this.fn(e));
        const t = this.next;
        return this.once && this.destroy(!0), this._destroyed && (this.next = null), t
    }
    connect(e) {
        this.previous = e, e.next && (e.next.previous = this), this.next = e.next, e.next = this
    }
    destroy(e = !1) {
        this._destroyed = !0, this.fn = null, this.context = null, this.previous && (this.previous.next = this.next), this.next && (this.next.previous = this.previous);
        const t = this.next;
        return this.next = e ? null : t, this.previous = null, t
    }
}
const ae = class {
    constructor() {
        this.autoStart = !1, this.deltaTime = 1, this.lastTime = -1, this.speed = 1, this.started = !1, this._requestId = null, this._maxElapsedMS = 100, this._minElapsedMS = 0, this._protected = !1, this._lastFrame = -1, this._head = new ni(null, null, 1 / 0), this.deltaMS = 1 / ae.targetFPMS, this.elapsedMS = 1 / ae.targetFPMS, this._tick = r => {
            this._requestId = null, this.started && (this.update(r), this.started && this._requestId === null && this._head.next && (this._requestId = requestAnimationFrame(this._tick)))
        }
    }
    _requestIfNeeded() {
        this._requestId === null && this._head.next && (this.lastTime = performance.now(), this._lastFrame = this.lastTime, this._requestId = requestAnimationFrame(this._tick))
    }
    _cancelIfNeeded() {
        this._requestId !== null && (cancelAnimationFrame(this._requestId), this._requestId = null)
    }
    _startIfPossible() {
        this.started ? this._requestIfNeeded() : this.autoStart && this.start()
    }
    add(r, e, t = Nr.NORMAL) {
        return this._addListener(new ni(r, e, t))
    }
    addOnce(r, e, t = Nr.NORMAL) {
        return this._addListener(new ni(r, e, t, !0))
    }
    _addListener(r) {
        let e = this._head.next,
            t = this._head;
        if (e) {
            for (; e;) {
                if (r.priority > e.priority) {
                    r.connect(t);
                    break
                }
                t = e, e = e.next
            }
            r.previous || r.connect(t)
        } else r.connect(t);
        return this._startIfPossible(), this
    }
    remove(r, e) {
        let t = this._head.next;
        for (; t;) t = t.match(r, e) ? t.destroy() : t.next;
        return this._head.next || this._cancelIfNeeded(), this
    }
    get count() {
        if (!this._head) return 0;
        let r = 0,
            e = this._head;
        for (; e = e.next;) r++;
        return r
    }
    start() {
        this.started || (this.started = !0, this._requestIfNeeded())
    }
    stop() {
        this.started && (this.started = !1, this._cancelIfNeeded())
    }
    destroy() {
        if (!this._protected) {
            this.stop();
            let r = this._head.next;
            for (; r;) r = r.destroy(!0);
            this._head.destroy(), this._head = null
        }
    }
    update(r = performance.now()) {
        let e;
        if (r > this.lastTime) {
            if (e = this.elapsedMS = r - this.lastTime, e > this._maxElapsedMS && (e = this._maxElapsedMS), e *= this.speed, this._minElapsedMS) {
                const s = r - this._lastFrame | 0;
                if (s < this._minElapsedMS) return;
                this._lastFrame = r - s % this._minElapsedMS
            }
            this.deltaMS = e, this.deltaTime = this.deltaMS * ae.targetFPMS;
            const t = this._head;
            let i = t.next;
            for (; i;) i = i.emit(this.deltaTime);
            t.next || this._cancelIfNeeded()
        } else this.deltaTime = this.deltaMS = this.elapsedMS = 0;
        this.lastTime = r
    }
    get FPS() {
        return 1e3 / this.elapsedMS
    }
    get minFPS() {
        return 1e3 / this._maxElapsedMS
    }
    set minFPS(r) {
        const e = Math.min(this.maxFPS, r),
            t = Math.min(Math.max(0, e) / 1e3, ae.targetFPMS);
        this._maxElapsedMS = 1 / t
    }
    get maxFPS() {
        return this._minElapsedMS ? Math.round(1e3 / this._minElapsedMS) : 0
    }
    set maxFPS(r) {
        if (r === 0) this._minElapsedMS = 0;
        else {
            const e = Math.max(this.minFPS, r);
            this._minElapsedMS = 1 / (e / 1e3)
        }
    }
    static get shared() {
        if (!ae._shared) {
            const r = ae._shared = new ae;
            r.autoStart = !0, r._protected = !0
        }
        return ae._shared
    }
    static get system() {
        if (!ae._system) {
            const r = ae._system = new ae;
            r.autoStart = !0, r._protected = !0
        }
        return ae._system
    }
};
let de = ae;
de.targetFPMS = .06, Object.defineProperties(B, {
    TARGET_FPMS: {
        get: () => de.targetFPMS,
        set(r) {
            k(0, "settings.TARGET_FPMS is deprecated, use Ticker.targetFPMS"), de.targetFPMS = r
        }
    }
});
class qn {
    static init(e) {
        e = Object.assign({
            autoStart: !0,
            sharedTicker: !1
        }, e), Object.defineProperty(this, "ticker", {
            set(t) {
                this._ticker && this._ticker.remove(this.render, this), this._ticker = t, t && t.add(this.render, this, Nr.LOW)
            },
            get() {
                return this._ticker
            }
        }), this.stop = () => {
            this._ticker.stop()
        }, this.start = () => {
            this._ticker.start()
        }, this._ticker = null, this.ticker = e.sharedTicker ? de.shared : new de, e.autoStart && this.start()
    }
    static destroy() {
        if (this._ticker) {
            const e = this._ticker;
            this.ticker = null, e.destroy()
        }
    }
}
qn.extension = O.Application, G.add(qn);
G.handleByList(O.Renderer, []);
class Zn {
    constructor(e) {
        this.renderer = e
    }
    contextChange(e) {
        let t;
        if (this.renderer.context.webGLVersion === 1) {
            const i = e.getParameter(e.FRAMEBUFFER_BINDING);
            e.bindFramebuffer(e.FRAMEBUFFER, null), t = e.getParameter(e.SAMPLES), e.bindFramebuffer(e.FRAMEBUFFER, i)
        } else {
            const i = e.getParameter(e.DRAW_FRAMEBUFFER_BINDING);
            e.bindFramebuffer(e.DRAW_FRAMEBUFFER, null), t = e.getParameter(e.SAMPLES), e.bindFramebuffer(e.DRAW_FRAMEBUFFER, i)
        }
        t >= $.HIGH ? this.multisample = $.HIGH : t >= $.MEDIUM ? this.multisample = $.MEDIUM : t >= $.LOW ? this.multisample = $.LOW : this.multisample = $.NONE
    }
    destroy() {}
}
Zn.extension = {
    type: O.RendererSystem,
    name: "_multisample"
}, G.add(Zn);
class hl {
    constructor(e) {
        this.buffer = e || null, this.updateID = -1, this.byteLength = -1, this.refCount = 0
    }
}
class Kn {
    constructor(e) {
        this.renderer = e, this.managedBuffers = {}, this.boundBufferBases = {}
    }
    destroy() {
        this.renderer = null
    }
    contextChange() {
        this.disposeAll(!0), this.gl = this.renderer.gl, this.CONTEXT_UID = this.renderer.CONTEXT_UID
    }
    bind(e) {
        const {
            gl: t,
            CONTEXT_UID: i
        } = this, s = e._glBuffers[i] || this.createGLBuffer(e);
        t.bindBuffer(e.type, s.buffer)
    }
    unbind(e) {
        const {
            gl: t
        } = this;
        t.bindBuffer(e, null)
    }
    bindBufferBase(e, t) {
        const {
            gl: i,
            CONTEXT_UID: s
        } = this;
        if (this.boundBufferBases[t] !== e) {
            const n = e._glBuffers[s] || this.createGLBuffer(e);
            this.boundBufferBases[t] = e, i.bindBufferBase(i.UNIFORM_BUFFER, t, n.buffer)
        }
    }
    bindBufferRange(e, t, i) {
        const {
            gl: s,
            CONTEXT_UID: n
        } = this;
        i = i || 0;
        const o = e._glBuffers[n] || this.createGLBuffer(e);
        s.bindBufferRange(s.UNIFORM_BUFFER, t || 0, o.buffer, 256 * i, 256)
    }
    update(e) {
        const {
            gl: t,
            CONTEXT_UID: i
        } = this, s = e._glBuffers[i] || this.createGLBuffer(e);
        if (e._updateID !== s.updateID)
            if (s.updateID = e._updateID, t.bindBuffer(e.type, s.buffer), s.byteLength >= e.data.byteLength) t.bufferSubData(e.type, 0, e.data);
            else {
                const n = e.static ? t.STATIC_DRAW : t.DYNAMIC_DRAW;
                s.byteLength = e.data.byteLength, t.bufferData(e.type, e.data, n)
            }
    }
    dispose(e, t) {
        if (!this.managedBuffers[e.id]) return;
        delete this.managedBuffers[e.id];
        const i = e._glBuffers[this.CONTEXT_UID],
            s = this.gl;
        e.disposeRunner.remove(this), i && (t || s.deleteBuffer(i.buffer), delete e._glBuffers[this.CONTEXT_UID])
    }
    disposeAll(e) {
        const t = Object.keys(this.managedBuffers);
        for (let i = 0; i < t.length; i++) this.dispose(this.managedBuffers[t[i]], e)
    }
    createGLBuffer(e) {
        const {
            CONTEXT_UID: t,
            gl: i
        } = this;
        return e._glBuffers[t] = new hl(i.createBuffer()), this.managedBuffers[e.id] = e, e.disposeRunner.add(this), e._glBuffers[t]
    }
}
Kn.extension = {
    type: O.RendererSystem,
    name: "buffer"
}, G.add(Kn);
class Qn {
    constructor(e) {
        this.renderer = e
    }
    render(e, t) {
        const i = this.renderer;
        let s, n, o, a;
        if (t && (s = t.renderTexture, n = t.clear, o = t.transform, a = t.skipUpdateTransform), this.renderingToScreen = !s, i.runners.prerender.emit(), i.emit("prerender"), i.projection.transform = o, !i.context.isLost) {
            if (s || (this.lastObjectRendered = e), !a) {
                const h = e.enableTempParent();
                e.updateTransform(), e.disableTempParent(h)
            }
            i.renderTexture.bind(s), i.batch.currentRenderer.start(), (n != null ? n : i.background.clearBeforeRender) && i.renderTexture.clear(), e.render(i), i.batch.currentRenderer.flush(), s && (t.blit && i.framebuffer.blit(), s.baseTexture.update()), i.runners.postrender.emit(), i.projection.transform = null, i.emit("postrender")
        }
    }
    destroy() {
        this.renderer = null, this.lastObjectRendered = null
    }
}
Qn.extension = {
    type: O.RendererSystem,
    name: "objectRenderer"
}, G.add(Qn);
const Ci = class extends al {
    constructor(r) {
        var i;
        super(), this.type = Jn.WEBGL, r = Object.assign({}, B.RENDER_OPTIONS, r), this.gl = null, this.CONTEXT_UID = 0, this.globalUniforms = new Ce({
            projectionMatrix: new J
        }, !0);
        const e = {
            runners: ["init", "destroy", "contextChange", "resolutionChange", "reset", "update", "postrender", "prerender", "resize"],
            systems: Ci.__systems,
            priority: ["_view", "textureGenerator", "background", "_plugin", "startup", "context", "state", "texture", "buffer", "geometry", "framebuffer", "transformFeedback", "mask", "scissor", "stencil", "projection", "textureGC", "filter", "renderTexture", "batch", "objectRenderer", "_multisample"]
        };
        this.setup(e), "useContextAlpha" in r && (k(0, "options.useContextAlpha is deprecated, use options.premultipliedAlpha and options.backgroundAlpha instead"), r.premultipliedAlpha = r.useContextAlpha && r.useContextAlpha !== "notMultiplied", r.backgroundAlpha = r.useContextAlpha === !1 ? 1 : r.backgroundAlpha);
        const t = {
            hello: r.hello,
            _plugin: Ci.__plugins,
            background: {
                alpha: r.backgroundAlpha,
                color: (i = r.background) != null ? i : r.backgroundColor,
                clearBeforeRender: r.clearBeforeRender
            },
            _view: {
                height: r.height,
                width: r.width,
                autoDensity: r.autoDensity,
                resolution: r.resolution,
                view: r.view
            },
            context: {
                antialias: r.antialias,
                context: r.context,
                powerPreference: r.powerPreference,
                premultipliedAlpha: r.premultipliedAlpha,
                preserveDrawingBuffer: r.preserveDrawingBuffer
            }
        };
        this.options = r, this.startup.run(t)
    }
    static test(r) {
        return !(r != null && r.forceCanvas) && (ei === void 0 && (ei = function() {
            var t;
            const e = {
                stencil: !0,
                failIfMajorPerformanceCaveat: B.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT
            };
            try {
                if (!B.ADAPTER.getWebGLRenderingContext()) return !1;
                const i = B.ADAPTER.createCanvas();
                let s = i.getContext("webgl", e) || i.getContext("experimental-webgl", e);
                const n = !!((t = s == null ? void 0 : s.getContextAttributes()) != null && t.stencil);
                if (s) {
                    const o = s.getExtension("WEBGL_lose_context");
                    o && o.loseContext()
                }
                return s = null, n
            } catch (i) {
                return !1
            }
        }()), ei)
    }
    render(r, e) {
        this.objectRenderer.render(r, e)
    }
    resize(r, e) {
        this._view.resizeView(r, e)
    }
    reset() {
        return this.runners.reset.emit(), this
    }
    clear() {
        this.renderTexture.bind(), this.renderTexture.clear()
    }
    destroy(r = !1) {
        this.runners.destroy.items.reverse(), this.emitWithCustomOptions(this.runners.destroy, {
            _view: r
        }), super.destroy()
    }
    get plugins() {
        return this._plugin.plugins
    }
    get multisample() {
        return this._multisample.multisample
    }
    get width() {
        return this._view.element.width
    }
    get height() {
        return this._view.element.height
    }
    get resolution() {
        return this._view.resolution
    }
    set resolution(r) {
        this._view.resolution = r, this.runners.resolutionChange.emit(r)
    }
    get autoDensity() {
        return this._view.autoDensity
    }
    get view() {
        return this._view.element
    }
    get screen() {
        return this._view.screen
    }
    get lastObjectRendered() {
        return this.objectRenderer.lastObjectRendered
    }
    get renderingToScreen() {
        return this.objectRenderer.renderingToScreen
    }
    get rendererLogId() {
        return `WebGL ${this.context.webGLVersion}`
    }
    get clearBeforeRender() {
        return k(0, "renderer.clearBeforeRender has been deprecated, please use renderer.background.clearBeforeRender instead."), this.background.clearBeforeRender
    }
    get useContextAlpha() {
        return k(0, "renderer.useContextAlpha has been deprecated, please use renderer.context.premultipliedAlpha instead."), this.context.useContextAlpha
    }
    get preserveDrawingBuffer() {
        return k(0, "renderer.preserveDrawingBuffer has been deprecated, we cannot truly know this unless pixi created the context"), this.context.preserveDrawingBuffer
    }
    get backgroundColor() {
        return k(0, "renderer.backgroundColor has been deprecated, use renderer.background.color instead."), this.background.color
    }
    set backgroundColor(r) {
        k(0, "renderer.backgroundColor has been deprecated, use renderer.background.color instead."), this.background.color = r
    }
    get backgroundAlpha() {
        return k(0, "renderer.backgroundAlpha has been deprecated, use renderer.background.alpha instead."), this.background.color
    }
    set backgroundAlpha(r) {
        k(0, "renderer.backgroundAlpha has been deprecated, use renderer.background.alpha instead."), this.background.alpha = r
    }
    get powerPreference() {
        return k(0, "renderer.powerPreference has been deprecated, we can only know this if pixi creates the context"), this.context.powerPreference
    }
    generateTexture(r, e) {
        return this.textureGenerator.generateTexture(r, e)
    }
};
let ct = Ci;
ct.extension = {
    type: O.Renderer,
    priority: 1
}, ct.__plugins = {}, ct.__systems = {}, G.handleByMap(O.RendererPlugin, ct.__plugins), G.handleByMap(O.RendererSystem, ct.__systems), G.add(ct);
class Oo extends Vt {
    constructor(e, t) {
        const {
            width: i,
            height: s
        } = t || {};
        super(i, s), this.items = [], this.itemDirtyIds = [];
        for (let n = 0; n < e; n++) {
            const o = new U;
            this.items.push(o), this.itemDirtyIds.push(-2)
        }
        this.length = e, this._load = null, this.baseTexture = null
    }
    initFromArray(e, t) {
        for (let i = 0; i < this.length; i++) e[i] && (e[i].castToBaseTexture ? this.addBaseTextureAt(e[i].castToBaseTexture(), i) : e[i] instanceof Vt ? this.addResourceAt(e[i], i) : this.addResourceAt(bo(e[i], t), i))
    }
    dispose() {
        for (let e = 0, t = this.length; e < t; e++) this.items[e].destroy();
        this.items = null, this.itemDirtyIds = null, this._load = null
    }
    addResourceAt(e, t) {
        if (!this.items[t]) throw new Error(`Index ${t} is out of bounds`);
        return e.valid && !this.valid && this.resize(e.width, e.height), this.items[t].setResource(e), this
    }
    bind(e) {
        if (this.baseTexture !== null) throw new Error("Only one base texture per TextureArray is allowed");
        super.bind(e);
        for (let t = 0; t < this.length; t++) this.items[t].parentTextureArray = e, this.items[t].on("update", e.update, e)
    }
    unbind(e) {
        super.unbind(e);
        for (let t = 0; t < this.length; t++) this.items[t].parentTextureArray = null, this.items[t].off("update", e.update, e)
    }
    load() {
        if (this._load) return this._load;
        const e = this.items.map(t => t.resource).filter(t => t).map(t => t.load());
        return this._load = Promise.all(e).then(() => {
            const {
                realWidth: t,
                realHeight: i
            } = this.items[0];
            return this.resize(t, i), Promise.resolve(this)
        }), this._load
    }
}
const Ut = class extends Oo {
    constructor(r, e) {
        const {
            width: t,
            height: i,
            autoLoad: s,
            linkBaseTexture: n
        } = e || {};
        if (r && r.length !== Ut.SIDES) throw new Error(`Invalid length. Got ${r.length}, expected 6`);
        super(6, {
            width: t,
            height: i
        });
        for (let o = 0; o < Ut.SIDES; o++) this.items[o].target = Et.TEXTURE_CUBE_MAP_POSITIVE_X + o;
        this.linkBaseTexture = n !== !1, r && this.initFromArray(r, e), s !== !1 && this.load()
    }
    bind(r) {
        super.bind(r), r.target = Et.TEXTURE_CUBE_MAP
    }
    addBaseTextureAt(r, e, t) {
        if (t === void 0 && (t = this.linkBaseTexture), !this.items[e]) throw new Error(`Index ${e} is out of bounds`);
        if (!this.linkBaseTexture || r.parentTextureArray || Object.keys(r._glTextures).length > 0) {
            if (!r.resource) throw new Error("CubeResource does not support copying of renderTexture.");
            this.addResourceAt(r.resource, e)
        } else r.target = Et.TEXTURE_CUBE_MAP_POSITIVE_X + e, r.parentTextureArray = this.baseTexture, this.items[e] = r;
        return r.valid && !this.valid && this.resize(r.realWidth, r.realHeight), this.items[e] = r, this
    }
    upload(r, e, t) {
        const i = this.itemDirtyIds;
        for (let s = 0; s < Ut.SIDES; s++) {
            const n = this.items[s];
            (i[s] < n.dirtyId || t.dirtyId < e.dirtyId) && (n.valid && n.resource ? (n.resource.upload(r, n, t), i[s] = n.dirtyId) : i[s] < -1 && (r.gl.texImage2D(n.target, 0, t.internalFormat, e.realWidth, e.realHeight, 0, e.format, t.type, null), i[s] = -1))
        }
        return !0
    }
    static test(r) {
        return Array.isArray(r) && r.length === Ut.SIDES
    }
};
let Fo = Ut;
Fo.SIDES = 6;
class bt extends je {
    constructor(e, t) {
        var n;
        let i, s;
        t = t || {}, typeof e == "string" ? (i = bt.EMPTY, s = e) : (i = e, s = null), super(i), this.url = s, this.crossOrigin = (n = t.crossOrigin) != null ? n : !0, this.alphaMode = typeof t.alphaMode == "number" ? t.alphaMode : null, this._load = null, t.autoLoad !== !1 && this.load()
    }
    load() {
        return this._load || (this._load = new Promise(async (e, t) => {
            if (this.url !== null) try {
                const i = await B.ADAPTER.fetch(this.url, {
                    mode: this.crossOrigin ? "cors" : "no-cors"
                });
                if (this.destroyed) return;
                const s = await i.blob();
                if (this.destroyed) return;
                const n = await createImageBitmap(s, {
                    premultiplyAlpha: this.alphaMode === null || this.alphaMode === He.UNPACK ? "premultiply" : "none"
                });
                if (this.destroyed) return;
                this.source = n, this.update(), e(this)
            } catch (i) {
                if (this.destroyed) return;
                t(i), this.onError.emit(i)
            } else e(this)
        })), this._load
    }
    upload(e, t, i) {
        return this.source instanceof ImageBitmap ? (typeof this.alphaMode == "number" && (t.alphaMode = this.alphaMode), super.upload(e, t, i)) : (this.load(), !1)
    }
    dispose() {
        this.source instanceof ImageBitmap && this.source.close(), super.dispose(), this._load = null
    }
    static test(e) {
        return !!globalThis.createImageBitmap && typeof ImageBitmap != "undefined" && (typeof e == "string" || e instanceof ImageBitmap)
    }
    static get EMPTY() {
        var e;
        return bt._EMPTY = (e = bt._EMPTY) != null ? e : B.ADAPTER.createCanvas(0, 0), bt._EMPTY
    }
}
const Rr = class extends je {
    constructor(r, e) {
        e = e || {}, super(B.ADAPTER.createCanvas()), this._width = 0, this._height = 0, this.svg = r, this.scale = e.scale || 1, this._overrideWidth = e.width, this._overrideHeight = e.height, this._resolve = null, this._crossorigin = e.crossorigin, this._load = null, e.autoLoad !== !1 && this.load()
    }
    load() {
        return this._load || (this._load = new Promise(r => {
            if (this._resolve = () => {
                    this.resize(this.source.width, this.source.height), r(this)
                }, Rr.SVG_XML.test(this.svg.trim())) {
                if (!btoa) throw new Error("Your browser doesn't support base64 conversions.");
                this.svg = `data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(this.svg)))}`
            }
            this._loadSvg()
        })), this._load
    }
    _loadSvg() {
        const r = new Image;
        je.crossOrigin(r, this.svg, this._crossorigin), r.src = this.svg, r.onerror = e => {
            this._resolve && (r.onerror = null, this.onError.emit(e))
        }, r.onload = () => {
            if (!this._resolve) return;
            const e = r.width,
                t = r.height;
            if (!e || !t) throw new Error("The SVG image must have width and height defined (in pixels), canvas API needs them.");
            let i = e * this.scale,
                s = t * this.scale;
            (this._overrideWidth || this._overrideHeight) && (i = this._overrideWidth || this._overrideHeight / t * e, s = this._overrideHeight || this._overrideWidth / e * t), i = Math.round(i), s = Math.round(s);
            const n = this.source;
            n.width = i, n.height = s, n._pixiId = `canvas_${Xt()}`, n.getContext("2d").drawImage(r, 0, 0, e, t, 0, 0, i, s), this._resolve(), this._resolve = null
        }
    }
    static getSize(r) {
        const e = Rr.SVG_SIZE.exec(r),
            t = {};
        return e && (t[e[1]] = Math.round(parseFloat(e[3])), t[e[5]] = Math.round(parseFloat(e[7]))), t
    }
    dispose() {
        super.dispose(), this._resolve = null, this._crossorigin = null
    }
    static test(r, e) {
        return e === "svg" || typeof r == "string" && r.startsWith("data:image/svg+xml") || typeof r == "string" && Rr.SVG_XML.test(r)
    }
};
let Mi = Rr;
Mi.SVG_XML = /^(<\?xml[^?]+\?>)?\s*(<!--[^(-->)]*-->)?\s*\<svg/m, Mi.SVG_SIZE = /<svg[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*>/i;
const Pi = class extends je {
    constructor(r, e) {
        if (e = e || {}, !(r instanceof HTMLVideoElement)) {
            const t = document.createElement("video");
            t.setAttribute("preload", "auto"), t.setAttribute("webkit-playsinline", ""), t.setAttribute("playsinline", ""), typeof r == "string" && (r = [r]);
            const i = r[0].src || r[0];
            je.crossOrigin(t, i, e.crossorigin);
            for (let s = 0; s < r.length; ++s) {
                const n = document.createElement("source");
                let {
                    src: o,
                    mime: a
                } = r[s];
                o = o || r[s];
                const h = o.split("?").shift().toLowerCase(),
                    l = h.slice(h.lastIndexOf(".") + 1);
                a = a || Pi.MIME_TYPES[l] || `video/${l}`, n.src = o, n.type = a, t.appendChild(n)
            }
            r = t
        }
        super(r), this.noSubImage = !0, this._autoUpdate = !0, this._isConnectedToTicker = !1, this._updateFPS = e.updateFPS || 0, this._msToNextUpdate = 0, this.autoPlay = e.autoPlay !== !1, this._load = null, this._resolve = null, this._onCanPlay = this._onCanPlay.bind(this), this._onError = this._onError.bind(this), e.autoLoad !== !1 && this.load()
    }
    update(r = 0) {
        if (!this.destroyed) {
            const e = de.shared.elapsedMS * this.source.playbackRate;
            this._msToNextUpdate = Math.floor(this._msToNextUpdate - e), (!this._updateFPS || this._msToNextUpdate <= 0) && (super.update(), this._msToNextUpdate = this._updateFPS ? Math.floor(1e3 / this._updateFPS) : 0)
        }
    }
    load() {
        if (this._load) return this._load;
        const r = this.source;
        return (r.readyState === r.HAVE_ENOUGH_DATA || r.readyState === r.HAVE_FUTURE_DATA) && r.width && r.height && (r.complete = !0), r.addEventListener("play", this._onPlayStart.bind(this)), r.addEventListener("pause", this._onPlayStop.bind(this)), this._isSourceReady() ? this._onCanPlay() : (r.addEventListener("canplay", this._onCanPlay), r.addEventListener("canplaythrough", this._onCanPlay), r.addEventListener("error", this._onError, !0)), this._load = new Promise(e => {
            this.valid ? e(this) : (this._resolve = e, r.load())
        }), this._load
    }
    _onError(r) {
        this.source.removeEventListener("error", this._onError, !0), this.onError.emit(r)
    }
    _isSourcePlaying() {
        const r = this.source;
        return !r.paused && !r.ended && this._isSourceReady()
    }
    _isSourceReady() {
        return this.source.readyState > 2
    }
    _onPlayStart() {
        this.valid || this._onCanPlay(), this.autoUpdate && !this._isConnectedToTicker && (de.shared.add(this.update, this), this._isConnectedToTicker = !0)
    }
    _onPlayStop() {
        this._isConnectedToTicker && (de.shared.remove(this.update, this), this._isConnectedToTicker = !1)
    }
    _onCanPlay() {
        const r = this.source;
        r.removeEventListener("canplay", this._onCanPlay), r.removeEventListener("canplaythrough", this._onCanPlay);
        const e = this.valid;
        this.resize(r.videoWidth, r.videoHeight), !e && this._resolve && (this._resolve(this), this._resolve = null), this._isSourcePlaying() ? this._onPlayStart() : this.autoPlay && r.play()
    }
    dispose() {
        this._isConnectedToTicker && (de.shared.remove(this.update, this), this._isConnectedToTicker = !1);
        const r = this.source;
        r && (r.removeEventListener("error", this._onError, !0), r.pause(), r.src = "", r.load()), super.dispose()
    }
    get autoUpdate() {
        return this._autoUpdate
    }
    set autoUpdate(r) {
        r !== this._autoUpdate && (this._autoUpdate = r, !this._autoUpdate && this._isConnectedToTicker ? (de.shared.remove(this.update, this), this._isConnectedToTicker = !1) : this._autoUpdate && !this._isConnectedToTicker && this._isSourcePlaying() && (de.shared.add(this.update, this), this._isConnectedToTicker = !0))
    }
    get updateFPS() {
        return this._updateFPS
    }
    set updateFPS(r) {
        r !== this._updateFPS && (this._updateFPS = r)
    }
    static test(r, e) {
        return globalThis.HTMLVideoElement && r instanceof HTMLVideoElement || Pi.TYPES.includes(e)
    }
};
let oi = Pi;
oi.TYPES = ["mp4", "m4v", "webm", "ogg", "ogv", "h264", "avi", "mov"], oi.MIME_TYPES = {
    ogv: "video/ogg",
    mov: "video/quicktime",
    m4v: "video/mp4"
}, wi.push(bt, Co, class extends je {
    constructor(r) {
        super(r)
    }
    static test(r) {
        const {
            OffscreenCanvas: e
        } = globalThis;
        return !!(e && r instanceof e) || globalThis.HTMLCanvasElement && r instanceof HTMLCanvasElement
    }
}, oi, Mi, us, Fo, class extends Oo {
    constructor(r, e) {
        const {
            width: t,
            height: i
        } = e || {};
        let s, n;
        Array.isArray(r) ? (s = r, n = r.length) : n = r, super(n, {
            width: t,
            height: i
        }), s && this.initFromArray(s, e)
    }
    addBaseTextureAt(r, e) {
        if (!r.resource) throw new Error("ArrayResource does not support RenderTexture");
        return this.addResourceAt(r.resource, e), this
    }
    bind(r) {
        super.bind(r), r.target = Et.TEXTURE_2D_ARRAY
    }
    upload(r, e, t) {
        const {
            length: i,
            itemDirtyIds: s,
            items: n
        } = this, {
            gl: o
        } = r;
        t.dirtyId < 0 && o.texImage3D(o.TEXTURE_2D_ARRAY, 0, t.internalFormat, this._width, this._height, i, 0, e.format, t.type, null);
        for (let a = 0; a < i; a++) {
            const h = n[a];
            s[a] < h.dirtyId && (s[a] = h.dirtyId, h.valid && o.texSubImage3D(o.TEXTURE_2D_ARRAY, 0, 0, 0, a, h.resource.width, h.resource.height, 1, e.format, t.type, h.resource.source))
        }
        return !0
    }
});
class Ni {
    constructor() {
        this.minX = 1 / 0, this.minY = 1 / 0, this.maxX = -1 / 0, this.maxY = -1 / 0, this.rect = null, this.updateID = -1
    }
    isEmpty() {
        return this.minX > this.maxX || this.minY > this.maxY
    }
    clear() {
        this.minX = 1 / 0, this.minY = 1 / 0, this.maxX = -1 / 0, this.maxY = -1 / 0
    }
    getRectangle(e) {
        return this.minX > this.maxX || this.minY > this.maxY ? z.EMPTY : ((e = e || new z(0, 0, 1, 1)).x = this.minX, e.y = this.minY, e.width = this.maxX - this.minX, e.height = this.maxY - this.minY, e)
    }
    addPoint(e) {
        this.minX = Math.min(this.minX, e.x), this.maxX = Math.max(this.maxX, e.x), this.minY = Math.min(this.minY, e.y), this.maxY = Math.max(this.maxY, e.y)
    }
    addPointMatrix(e, t) {
        const {
            a: i,
            b: s,
            c: n,
            d: o,
            tx: a,
            ty: h
        } = e, l = i * t.x + n * t.y + a, u = s * t.x + o * t.y + h;
        this.minX = Math.min(this.minX, l), this.maxX = Math.max(this.maxX, l), this.minY = Math.min(this.minY, u), this.maxY = Math.max(this.maxY, u)
    }
    addQuad(e) {
        let t = this.minX,
            i = this.minY,
            s = this.maxX,
            n = this.maxY,
            o = e[0],
            a = e[1];
        t = o < t ? o : t, i = a < i ? a : i, s = o > s ? o : s, n = a > n ? a : n, o = e[2], a = e[3], t = o < t ? o : t, i = a < i ? a : i, s = o > s ? o : s, n = a > n ? a : n, o = e[4], a = e[5], t = o < t ? o : t, i = a < i ? a : i, s = o > s ? o : s, n = a > n ? a : n, o = e[6], a = e[7], t = o < t ? o : t, i = a < i ? a : i, s = o > s ? o : s, n = a > n ? a : n, this.minX = t, this.minY = i, this.maxX = s, this.maxY = n
    }
    addFrame(e, t, i, s, n) {
        this.addFrameMatrix(e.worldTransform, t, i, s, n)
    }
    addFrameMatrix(e, t, i, s, n) {
        const o = e.a,
            a = e.b,
            h = e.c,
            l = e.d,
            u = e.tx,
            c = e.ty;
        let d = this.minX,
            p = this.minY,
            f = this.maxX,
            y = this.maxY,
            m = o * t + h * i + u,
            g = a * t + l * i + c;
        d = m < d ? m : d, p = g < p ? g : p, f = m > f ? m : f, y = g > y ? g : y, m = o * s + h * i + u, g = a * s + l * i + c, d = m < d ? m : d, p = g < p ? g : p, f = m > f ? m : f, y = g > y ? g : y, m = o * t + h * n + u, g = a * t + l * n + c, d = m < d ? m : d, p = g < p ? g : p, f = m > f ? m : f, y = g > y ? g : y, m = o * s + h * n + u, g = a * s + l * n + c, d = m < d ? m : d, p = g < p ? g : p, f = m > f ? m : f, y = g > y ? g : y, this.minX = d, this.minY = p, this.maxX = f, this.maxY = y
    }
    addVertexData(e, t, i) {
        let s = this.minX,
            n = this.minY,
            o = this.maxX,
            a = this.maxY;
        for (let h = t; h < i; h += 2) {
            const l = e[h],
                u = e[h + 1];
            s = l < s ? l : s, n = u < n ? u : n, o = l > o ? l : o, a = u > a ? u : a
        }
        this.minX = s, this.minY = n, this.maxX = o, this.maxY = a
    }
    addVertices(e, t, i, s) {
        this.addVerticesMatrix(e.worldTransform, t, i, s)
    }
    addVerticesMatrix(e, t, i, s, n = 0, o = n) {
        const a = e.a,
            h = e.b,
            l = e.c,
            u = e.d,
            c = e.tx,
            d = e.ty;
        let p = this.minX,
            f = this.minY,
            y = this.maxX,
            m = this.maxY;
        for (let g = i; g < s; g += 2) {
            const _ = t[g],
                x = t[g + 1],
                b = a * _ + l * x + c,
                I = u * x + h * _ + d;
            p = Math.min(p, b - n), y = Math.max(y, b + n), f = Math.min(f, I - o), m = Math.max(m, I + o)
        }
        this.minX = p, this.minY = f, this.maxX = y, this.maxY = m
    }
    addBounds(e) {
        const t = this.minX,
            i = this.minY,
            s = this.maxX,
            n = this.maxY;
        this.minX = e.minX < t ? e.minX : t, this.minY = e.minY < i ? e.minY : i, this.maxX = e.maxX > s ? e.maxX : s, this.maxY = e.maxY > n ? e.maxY : n
    }
    addBoundsMask(e, t) {
        const i = e.minX > t.minX ? e.minX : t.minX,
            s = e.minY > t.minY ? e.minY : t.minY,
            n = e.maxX < t.maxX ? e.maxX : t.maxX,
            o = e.maxY < t.maxY ? e.maxY : t.maxY;
        if (i <= n && s <= o) {
            const a = this.minX,
                h = this.minY,
                l = this.maxX,
                u = this.maxY;
            this.minX = i < a ? i : a, this.minY = s < h ? s : h, this.maxX = n > l ? n : l, this.maxY = o > u ? o : u
        }
    }
    addBoundsMatrix(e, t) {
        this.addFrameMatrix(t, e.minX, e.minY, e.maxX, e.maxY)
    }
    addBoundsArea(e, t) {
        const i = e.minX > t.x ? e.minX : t.x,
            s = e.minY > t.y ? e.minY : t.y,
            n = e.maxX < t.x + t.width ? e.maxX : t.x + t.width,
            o = e.maxY < t.y + t.height ? e.maxY : t.y + t.height;
        if (i <= n && s <= o) {
            const a = this.minX,
                h = this.minY,
                l = this.maxX,
                u = this.maxY;
            this.minX = i < a ? i : a, this.minY = s < h ? s : h, this.maxX = n > l ? n : l, this.maxY = o > u ? o : u
        }
    }
    pad(e = 0, t = e) {
        this.isEmpty() || (this.minX -= e, this.maxX += e, this.minY -= t, this.maxY += t)
    }
    addFramePad(e, t, i, s, n, o) {
        e -= n, t -= o, i += n, s += o, this.minX = this.minX < e ? this.minX : e, this.maxX = this.maxX > i ? this.maxX : i, this.minY = this.minY < t ? this.minY : t, this.maxY = this.maxY > s ? this.maxY : s
    }
}
class Rt extends Fr {
    constructor() {
        super(), this.tempDisplayObjectParent = null, this.transform = new cs, this.alpha = 1, this.visible = !0, this.renderable = !0, this.cullable = !1, this.cullArea = null, this.parent = null, this.worldAlpha = 1, this._lastSortedIndex = 0, this._zIndex = 0, this.filterArea = null, this.filters = null, this._enabledFilters = null, this._bounds = new Ni, this._localBounds = null, this._boundsID = 0, this._boundsRect = null, this._localBoundsRect = null, this._mask = null, this._maskRefCount = 0, this._destroyed = !1, this.isSprite = !1, this.isMask = !1
    }
    static mixin(e) {
        const t = Object.keys(e);
        for (let i = 0; i < t.length; ++i) {
            const s = t[i];
            Object.defineProperty(Rt.prototype, s, Object.getOwnPropertyDescriptor(e, s))
        }
    }
    get destroyed() {
        return this._destroyed
    }
    _recursivePostUpdateTransform() {
        this.parent ? (this.parent._recursivePostUpdateTransform(), this.transform.updateTransform(this.parent.transform)) : this.transform.updateTransform(this._tempDisplayObjectParent.transform)
    }
    updateTransform() {
        this._boundsID++, this.transform.updateTransform(this.parent.transform), this.worldAlpha = this.alpha * this.parent.worldAlpha
    }
    getBounds(e, t) {
        return e || (this.parent ? (this._recursivePostUpdateTransform(), this.updateTransform()) : (this.parent = this._tempDisplayObjectParent, this.updateTransform(), this.parent = null)), this._bounds.updateID !== this._boundsID && (this.calculateBounds(), this._bounds.updateID = this._boundsID), t || (this._boundsRect || (this._boundsRect = new z), t = this._boundsRect), this._bounds.getRectangle(t)
    }
    getLocalBounds(e) {
        e || (this._localBoundsRect || (this._localBoundsRect = new z), e = this._localBoundsRect), this._localBounds || (this._localBounds = new Ni);
        const t = this.transform,
            i = this.parent;
        this.parent = null, this.transform = this._tempDisplayObjectParent.transform;
        const s = this._bounds,
            n = this._boundsID;
        this._bounds = this._localBounds;
        const o = this.getBounds(!1, e);
        return this.parent = i, this.transform = t, this._bounds = s, this._bounds.updateID += this._boundsID - n, o
    }
    toGlobal(e, t, i = !1) {
        return i || (this._recursivePostUpdateTransform(), this.parent ? this.displayObjectUpdateTransform() : (this.parent = this._tempDisplayObjectParent, this.displayObjectUpdateTransform(), this.parent = null)), this.worldTransform.apply(e, t)
    }
    toLocal(e, t, i, s) {
        return t && (e = t.toGlobal(e, i, s)), s || (this._recursivePostUpdateTransform(), this.parent ? this.displayObjectUpdateTransform() : (this.parent = this._tempDisplayObjectParent, this.displayObjectUpdateTransform(), this.parent = null)), this.worldTransform.applyInverse(e, i)
    }
    setParent(e) {
        if (!e || !e.addChild) throw new Error("setParent: Argument must be a Container");
        return e.addChild(this), e
    }
    removeFromParent() {
        var e;
        (e = this.parent) == null || e.removeChild(this)
    }
    setTransform(e = 0, t = 0, i = 1, s = 1, n = 0, o = 0, a = 0, h = 0, l = 0) {
        return this.position.x = e, this.position.y = t, this.scale.x = i || 1, this.scale.y = s || 1, this.rotation = n, this.skew.x = o, this.skew.y = a, this.pivot.x = h, this.pivot.y = l, this
    }
    destroy(e) {
        this.removeFromParent(), this._destroyed = !0, this.transform = null, this.parent = null, this._bounds = null, this.mask = null, this.cullArea = null, this.filters = null, this.filterArea = null, this.hitArea = null, this.interactive = !1, this.interactiveChildren = !1, this.emit("destroyed"), this.removeAllListeners()
    }
    get _tempDisplayObjectParent() {
        return this.tempDisplayObjectParent === null && (this.tempDisplayObjectParent = new ll), this.tempDisplayObjectParent
    }
    enableTempParent() {
        const e = this.parent;
        return this.parent = this._tempDisplayObjectParent, e
    }
    disableTempParent(e) {
        this.parent = e
    }
    get x() {
        return this.position.x
    }
    set x(e) {
        this.transform.position.x = e
    }
    get y() {
        return this.position.y
    }
    set y(e) {
        this.transform.position.y = e
    }
    get worldTransform() {
        return this.transform.worldTransform
    }
    get localTransform() {
        return this.transform.localTransform
    }
    get position() {
        return this.transform.position
    }
    set position(e) {
        this.transform.position.copyFrom(e)
    }
    get scale() {
        return this.transform.scale
    }
    set scale(e) {
        this.transform.scale.copyFrom(e)
    }
    get pivot() {
        return this.transform.pivot
    }
    set pivot(e) {
        this.transform.pivot.copyFrom(e)
    }
    get skew() {
        return this.transform.skew
    }
    set skew(e) {
        this.transform.skew.copyFrom(e)
    }
    get rotation() {
        return this.transform.rotation
    }
    set rotation(e) {
        this.transform.rotation = e
    }
    get angle() {
        return this.transform.rotation * Bh
    }
    set angle(e) {
        this.transform.rotation = e * Lh
    }
    get zIndex() {
        return this._zIndex
    }
    set zIndex(e) {
        this._zIndex = e, this.parent && (this.parent.sortDirty = !0)
    }
    get worldVisible() {
        let e = this;
        do {
            if (!e.visible) return !1;
            e = e.parent
        } while (e);
        return !0
    }
    get mask() {
        return this._mask
    }
    set mask(e) {
        if (this._mask !== e) {
            if (this._mask) {
                const t = this._mask.isMaskData ? this._mask.maskObject : this._mask;
                t && (t._maskRefCount--, t._maskRefCount === 0 && (t.renderable = !0, t.isMask = !1))
            }
            if (this._mask = e, this._mask) {
                const t = this._mask.isMaskData ? this._mask.maskObject : this._mask;
                t && (t._maskRefCount === 0 && (t.renderable = !1, t.isMask = !0), t._maskRefCount++)
            }
        }
    }
}
class ll extends Rt {
    constructor() {
        super(...arguments), this.sortDirty = null
    }
}
Rt.prototype.displayObjectUpdateTransform = Rt.prototype.updateTransform;
const ul = new J;

function cl(r, e) {
    return r.zIndex === e.zIndex ? r._lastSortedIndex - e._lastSortedIndex : r.zIndex - e.zIndex
}
const Oi = class extends Rt {
    constructor() {
        super(), this.children = [], this.sortableChildren = Oi.defaultSortableChildren, this.sortDirty = !1
    }
    onChildrenChange(r) {}
    addChild(...r) {
        if (r.length > 1)
            for (let e = 0; e < r.length; e++) this.addChild(r[e]);
        else {
            const e = r[0];
            e.parent && e.parent.removeChild(e), e.parent = this, this.sortDirty = !0, e.transform._parentID = -1, this.children.push(e), this._boundsID++, this.onChildrenChange(this.children.length - 1), this.emit("childAdded", e, this, this.children.length - 1), e.emit("added", this)
        }
        return r[0]
    }
    addChildAt(r, e) {
        if (e < 0 || e > this.children.length) throw new Error(`${r}addChildAt: The index ${e} supplied is out of bounds ${this.children.length}`);
        return r.parent && r.parent.removeChild(r), r.parent = this, this.sortDirty = !0, r.transform._parentID = -1, this.children.splice(e, 0, r), this._boundsID++, this.onChildrenChange(e), r.emit("added", this), this.emit("childAdded", r, this, e), r
    }
    swapChildren(r, e) {
        if (r === e) return;
        const t = this.getChildIndex(r),
            i = this.getChildIndex(e);
        this.children[t] = e, this.children[i] = r, this.onChildrenChange(t < i ? t : i)
    }
    getChildIndex(r) {
        const e = this.children.indexOf(r);
        if (e === -1) throw new Error("The supplied DisplayObject must be a child of the caller");
        return e
    }
    setChildIndex(r, e) {
        if (e < 0 || e >= this.children.length) throw new Error(`The index ${e} supplied is out of bounds ${this.children.length}`);
        const t = this.getChildIndex(r);
        wr(this.children, t, 1), this.children.splice(e, 0, r), this.onChildrenChange(e)
    }
    getChildAt(r) {
        if (r < 0 || r >= this.children.length) throw new Error(`getChildAt: Index (${r}) does not exist.`);
        return this.children[r]
    }
    removeChild(...r) {
        if (r.length > 1)
            for (let e = 0; e < r.length; e++) this.removeChild(r[e]);
        else {
            const e = r[0],
                t = this.children.indexOf(e);
            if (t === -1) return null;
            e.parent = null, e.transform._parentID = -1, wr(this.children, t, 1), this._boundsID++, this.onChildrenChange(t), e.emit("removed", this), this.emit("childRemoved", e, this, t)
        }
        return r[0]
    }
    removeChildAt(r) {
        const e = this.getChildAt(r);
        return e.parent = null, e.transform._parentID = -1, wr(this.children, r, 1), this._boundsID++, this.onChildrenChange(r), e.emit("removed", this), this.emit("childRemoved", e, this, r), e
    }
    removeChildren(r = 0, e = this.children.length) {
        const t = r,
            i = e - t;
        let s;
        if (i > 0 && i <= e) {
            s = this.children.splice(t, i);
            for (let n = 0; n < s.length; ++n) s[n].parent = null, s[n].transform && (s[n].transform._parentID = -1);
            this._boundsID++, this.onChildrenChange(r);
            for (let n = 0; n < s.length; ++n) s[n].emit("removed", this), this.emit("childRemoved", s[n], this, n);
            return s
        }
        if (i === 0 && this.children.length === 0) return [];
        throw new RangeError("removeChildren: numeric values are outside the acceptable range.")
    }
    sortChildren() {
        let r = !1;
        for (let e = 0, t = this.children.length; e < t; ++e) {
            const i = this.children[e];
            i._lastSortedIndex = e, r || i.zIndex === 0 || (r = !0)
        }
        r && this.children.length > 1 && this.children.sort(cl), this.sortDirty = !1
    }
    updateTransform() {
        this.sortableChildren && this.sortDirty && this.sortChildren(), this._boundsID++, this.transform.updateTransform(this.parent.transform), this.worldAlpha = this.alpha * this.parent.worldAlpha;
        for (let r = 0, e = this.children.length; r < e; ++r) {
            const t = this.children[r];
            t.visible && t.updateTransform()
        }
    }
    calculateBounds() {
        this._bounds.clear(), this._calculateBounds();
        for (let r = 0; r < this.children.length; r++) {
            const e = this.children[r];
            if (e.visible && e.renderable)
                if (e.calculateBounds(), e._mask) {
                    const t = e._mask.isMaskData ? e._mask.maskObject : e._mask;
                    t ? (t.calculateBounds(), this._bounds.addBoundsMask(e._bounds, t._bounds)) : this._bounds.addBounds(e._bounds)
                } else e.filterArea ? this._bounds.addBoundsArea(e._bounds, e.filterArea) : this._bounds.addBounds(e._bounds)
        }
        this._bounds.updateID = this._boundsID
    }
    getLocalBounds(r, e = !1) {
        const t = super.getLocalBounds(r);
        if (!e)
            for (let i = 0, s = this.children.length; i < s; ++i) {
                const n = this.children[i];
                n.visible && n.updateTransform()
            }
        return t
    }
    _calculateBounds() {}
    _renderWithCulling(r) {
        const e = r.renderTexture.sourceFrame;
        if (!(e.width > 0 && e.height > 0)) return;
        let t, i;
        this.cullArea ? (t = this.cullArea, i = this.worldTransform) : this._render !== Oi.prototype._render && (t = this.getBounds(!0));
        const s = r.projection.transform;
        if (s && (i ? (i = ul.copyFrom(i), i.prepend(s)) : i = s), t && e.intersects(t, i)) this._render(r);
        else if (this.cullArea) return;
        for (let n = 0, o = this.children.length; n < o; ++n) {
            const a = this.children[n],
                h = a.cullable;
            a.cullable = h || !this.cullArea, a.render(r), a.cullable = h
        }
    }
    render(r) {
        var e;
        if (this.visible && !(this.worldAlpha <= 0) && this.renderable)
            if (this._mask || (e = this.filters) != null && e.length) this.renderAdvanced(r);
            else if (this.cullable) this._renderWithCulling(r);
        else {
            this._render(r);
            for (let t = 0, i = this.children.length; t < i; ++t) this.children[t].render(r)
        }
    }
    renderAdvanced(r) {
        var s, n, o;
        const e = this.filters,
            t = this._mask;
        if (e) {
            this._enabledFilters || (this._enabledFilters = []), this._enabledFilters.length = 0;
            for (let a = 0; a < e.length; a++) e[a].enabled && this._enabledFilters.push(e[a])
        }
        const i = e && ((s = this._enabledFilters) == null ? void 0 : s.length) || t && (!t.isMaskData || t.enabled && (t.autoDetect || t.type !== q.NONE));
        if (i && r.batch.flush(), e && ((n = this._enabledFilters) != null && n.length) && r.filter.push(this, this._enabledFilters), t && r.mask.push(this, this._mask), this.cullable) this._renderWithCulling(r);
        else {
            this._render(r);
            for (let a = 0, h = this.children.length; a < h; ++a) this.children[a].render(r)
        }
        i && r.batch.flush(), t && r.mask.pop(this), e && ((o = this._enabledFilters) != null && o.length) && r.filter.pop()
    }
    _render(r) {}
    destroy(r) {
        super.destroy(), this.sortDirty = !1;
        const e = typeof r == "boolean" ? r : r == null ? void 0 : r.children,
            t = this.removeChildren(0, this.children.length);
        if (e)
            for (let i = 0; i < t.length; ++i) t[i].destroy(r)
    }
    get width() {
        return this.scale.x * this.getLocalBounds().width
    }
    set width(r) {
        const e = this.getLocalBounds().width;
        this.scale.x = e !== 0 ? r / e : 1, this._width = r
    }
    get height() {
        return this.scale.y * this.getLocalBounds().height
    }
    set height(r) {
        const e = this.getLocalBounds().height;
        this.scale.y = e !== 0 ? r / e : 1, this._height = r
    }
};
let xt = Oi;
xt.defaultSortableChildren = !1, xt.prototype.containerUpdateTransform = xt.prototype.updateTransform, Object.defineProperties(B, {
    SORTABLE_CHILDREN: {
        get: () => xt.defaultSortableChildren,
        set(r) {
            k(0, "settings.SORTABLE_CHILDREN is deprecated, use Container.defaultSortableChildren"), xt.defaultSortableChildren = r
        }
    }
});
const Lt = new W,
    dl = new Uint16Array([0, 1, 2, 0, 2, 3]);
class ds extends xt {
    constructor(e) {
        super(), this._anchor = new Je(this._onAnchorUpdate, this, e ? e.defaultAnchor.x : 0, e ? e.defaultAnchor.y : 0), this._texture = null, this._width = 0, this._height = 0, this._tint = null, this._tintRGB = null, this.tint = 16777215, this.blendMode = A.NORMAL, this._cachedTint = 16777215, this.uvs = null, this.texture = e || N.EMPTY, this.vertexData = new Float32Array(8), this.vertexTrimmedData = null, this._transformID = -1, this._textureID = -1, this._transformTrimmedID = -1, this._textureTrimmedID = -1, this.indices = dl, this.pluginName = "batch", this.isSprite = !0, this._roundPixels = B.ROUND_PIXELS
    }
    _onTextureUpdate() {
        this._textureID = -1, this._textureTrimmedID = -1, this._cachedTint = 16777215, this._width && (this.scale.x = lr(this.scale.x) * this._width / this._texture.orig.width), this._height && (this.scale.y = lr(this.scale.y) * this._height / this._texture.orig.height)
    }
    _onAnchorUpdate() {
        this._transformID = -1, this._transformTrimmedID = -1
    }
    calculateVertices() {
        const e = this._texture;
        if (this._transformID === this.transform._worldID && this._textureID === e._updateID) return;
        this._textureID !== e._updateID && (this.uvs = this._texture._uvs.uvsFloat32), this._transformID = this.transform._worldID, this._textureID = e._updateID;
        const t = this.transform.worldTransform,
            i = t.a,
            s = t.b,
            n = t.c,
            o = t.d,
            a = t.tx,
            h = t.ty,
            l = this.vertexData,
            u = e.trim,
            c = e.orig,
            d = this._anchor;
        let p = 0,
            f = 0,
            y = 0,
            m = 0;
        if (u ? (f = u.x - d._x * c.width, p = f + u.width, m = u.y - d._y * c.height, y = m + u.height) : (f = -d._x * c.width, p = f + c.width, m = -d._y * c.height, y = m + c.height), l[0] = i * f + n * m + a, l[1] = o * m + s * f + h, l[2] = i * p + n * m + a, l[3] = o * m + s * p + h, l[4] = i * p + n * y + a, l[5] = o * y + s * p + h, l[6] = i * f + n * y + a, l[7] = o * y + s * f + h, this._roundPixels) {
            const g = B.RESOLUTION;
            for (let _ = 0; _ < l.length; ++_) l[_] = Math.round(l[_] * g) / g
        }
    }
    calculateTrimmedVertices() {
        if (this.vertexTrimmedData) {
            if (this._transformTrimmedID === this.transform._worldID && this._textureTrimmedID === this._texture._updateID) return
        } else this.vertexTrimmedData = new Float32Array(8);
        this._transformTrimmedID = this.transform._worldID, this._textureTrimmedID = this._texture._updateID;
        const e = this._texture,
            t = this.vertexTrimmedData,
            i = e.orig,
            s = this._anchor,
            n = this.transform.worldTransform,
            o = n.a,
            a = n.b,
            h = n.c,
            l = n.d,
            u = n.tx,
            c = n.ty,
            d = -s._x * i.width,
            p = d + i.width,
            f = -s._y * i.height,
            y = f + i.height;
        t[0] = o * d + h * f + u, t[1] = l * f + a * d + c, t[2] = o * p + h * f + u, t[3] = l * f + a * p + c, t[4] = o * p + h * y + u, t[5] = l * y + a * p + c, t[6] = o * d + h * y + u, t[7] = l * y + a * d + c
    }
    _render(e) {
        this.calculateVertices(), e.batch.setObjectRenderer(e.plugins[this.pluginName]), e.plugins[this.pluginName].render(this)
    }
    _calculateBounds() {
        const e = this._texture.trim,
            t = this._texture.orig;
        !e || e.width === t.width && e.height === t.height ? (this.calculateVertices(), this._bounds.addQuad(this.vertexData)) : (this.calculateTrimmedVertices(), this._bounds.addQuad(this.vertexTrimmedData))
    }
    getLocalBounds(e) {
        return this.children.length === 0 ? (this._localBounds || (this._localBounds = new Ni), this._localBounds.minX = this._texture.orig.width * -this._anchor._x, this._localBounds.minY = this._texture.orig.height * -this._anchor._y, this._localBounds.maxX = this._texture.orig.width * (1 - this._anchor._x), this._localBounds.maxY = this._texture.orig.height * (1 - this._anchor._y), e || (this._localBoundsRect || (this._localBoundsRect = new z), e = this._localBoundsRect), this._localBounds.getRectangle(e)) : super.getLocalBounds.call(this, e)
    }
    containsPoint(e) {
        this.worldTransform.applyInverse(e, Lt);
        const t = this._texture.orig.width,
            i = this._texture.orig.height,
            s = -t * this.anchor.x;
        let n = 0;
        return Lt.x >= s && Lt.x < s + t && (n = -i * this.anchor.y, Lt.y >= n && Lt.y < n + i)
    }
    destroy(e) {
        if (super.destroy(e), this._texture.off("update", this._onTextureUpdate, this), this._anchor = null, typeof e == "boolean" ? e : e != null && e.texture) {
            const t = typeof e == "boolean" ? e : e == null ? void 0 : e.baseTexture;
            this._texture.destroy(!!t)
        }
        this._texture = null
    }
    static from(e, t) {
        const i = e instanceof N ? e : N.from(e, t);
        return new ds(i)
    }
    set roundPixels(e) {
        this._roundPixels !== e && (this._transformID = -1), this._roundPixels = e
    }
    get roundPixels() {
        return this._roundPixels
    }
    get width() {
        return Math.abs(this.scale.x) * this._texture.orig.width
    }
    set width(e) {
        const t = lr(this.scale.x) || 1;
        this.scale.x = t * e / this._texture.orig.width, this._width = e
    }
    get height() {
        return Math.abs(this.scale.y) * this._texture.orig.height
    }
    set height(e) {
        const t = lr(this.scale.y) || 1;
        this.scale.y = t * e / this._texture.orig.height, this._height = e
    }
    get anchor() {
        return this._anchor
    }
    set anchor(e) {
        this._anchor.copyFrom(e)
    }
    get tint() {
        return this._tint
    }
    set tint(e) {
        this._tint = e, this._tintRGB = (e >> 16) + (65280 & e) + ((255 & e) << 16)
    }
    get texture() {
        return this._texture
    }
    set texture(e) {
        this._texture !== e && (this._texture && this._texture.off("update", this._onTextureUpdate, this), this._texture = e || N.EMPTY, this._cachedTint = 16777215, this._textureID = -1, this._textureTrimmedID = -1, e && (e.baseTexture.valid ? this._onTextureUpdate() : e.once("update", this._onTextureUpdate, this)))
    }
}
/*!
 * @pixi/particle-emitter - v5.0.8
 * Compiled Mon, 28 Nov 2022 04:01:38 UTC
 *
 * @pixi/particle-emitter is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */
class Re {
    constructor(e, t, i) {
        this.value = e, this.time = t, this.next = null, this.isStepped = !1, this.ease = i ? typeof i == "function" ? i : Do(i) : null
    }
    static createList(e) {
        if ("list" in e) {
            const i = e.list;
            let s;
            const {
                value: n,
                time: o
            } = i[0], a = s = new Re(typeof n == "string" ? _r(n) : n, o, e.ease);
            if (i.length > 2 || i.length === 2 && i[1].value !== n)
                for (let h = 1; h < i.length; ++h) {
                    const {
                        value: l,
                        time: u
                    } = i[h];
                    s.next = new Re(typeof l == "string" ? _r(l) : l, u), s = s.next
                }
            return a.isStepped = !!e.isStepped, a
        }
        const t = new Re(typeof e.start == "string" ? _r(e.start) : e.start, 0);
        return e.end !== e.start && (t.next = new Re(typeof e.end == "string" ? _r(e.end) : e.end, 1)), t
    }
}
let Yt = N.from;
const Ae = Math.PI / 180;

function Fe(r, e) {
    if (!r) return;
    const t = Math.sin(r),
        i = Math.cos(r),
        s = e.x * i - e.y * t,
        n = e.x * t + e.y * i;
    e.x = s, e.y = n
}

function Ur(r, e, t) {
    return r << 16 | e << 8 | t
}

function Bo(r) {
    return Math.sqrt(r.x * r.x + r.y * r.y)
}

function Lo(r, e) {
    r.x *= e, r.y *= e
}

function _r(r, e) {
    let t;
    return e || (e = {}), r.charAt(0) === "#" ? r = r.substr(1) : r.indexOf("0x") === 0 && (r = r.substr(2)), r.length === 8 && (t = r.substr(0, 2), r = r.substr(2)), e.r = parseInt(r.substr(0, 2), 16), e.g = parseInt(r.substr(2, 2), 16), e.b = parseInt(r.substr(4, 2), 16), t && (e.a = parseInt(t, 16)), e
}

function Do(r) {
    const e = r.length,
        t = 1 / e;
    return function(i) {
        const s = e * i | 0,
            n = (i - s * t) * e,
            o = r[s] || r[e - 1];
        return o.s + n * (2 * (1 - n) * (o.cp - o.s) + n * (o.e - o.s))
    }
}
class ai extends ds {
    constructor(e) {
        super(), this.prevChild = this.nextChild = null, this.emitter = e, this.config = {}, this.anchor.x = this.anchor.y = .5, this.maxLife = 0, this.age = 0, this.agePercent = 0, this.oneOverLife = 0, this.next = null, this.prev = null, this.init = this.init, this.kill = this.kill
    }
    init(e) {
        this.maxLife = e, this.age = this.agePercent = 0, this.rotation = 0, this.position.x = this.position.y = 0, this.scale.x = this.scale.y = 1, this.tint = 16777215, this.alpha = 1, this.oneOverLife = 1 / this.maxLife, this.visible = !0
    }
    kill() {
        this.emitter.recycle(this)
    }
    destroy() {
        this.parent && this.parent.removeChild(this), this.emitter = this.next = this.prev = null, super.destroy()
    }
}
var H;
(function(r) {
    r[r.Spawn = 0] = "Spawn", r[r.Normal = 2] = "Normal", r[r.Late = 5] = "Late"
})(H || (H = {}));
const hi = de.shared,
    ze = Symbol("Position particle per emitter position");
class j {
    constructor(e, t) {
        this.initBehaviors = [], this.updateBehaviors = [], this.recycleBehaviors = [], this.minLifetime = 0, this.maxLifetime = 0, this.customEase = null, this._frequency = 1, this.spawnChance = 1, this.maxParticles = 1e3, this.emitterLifetime = -1, this.spawnPos = new W, this.particlesPerWave = 1, this.rotation = 0, this.ownerPos = new W, this._prevEmitterPos = new W, this._prevPosIsValid = !1, this._posChanged = !1, this._parent = null, this.addAtBack = !1, this.particleCount = 0, this._emit = !1, this._spawnTimer = 0, this._emitterLife = -1, this._activeParticlesFirst = null, this._activeParticlesLast = null, this._poolFirst = null, this._origConfig = null, this._autoUpdate = !1, this._destroyWhenComplete = !1, this._completeCallback = null, this.parent = e, t && this.init(t), this.recycle = this.recycle, this.update = this.update, this.rotate = this.rotate, this.updateSpawnPos = this.updateSpawnPos, this.updateOwnerPos = this.updateOwnerPos
    }
    static registerBehavior(e) {
        j.knownBehaviors[e.type] = e
    }
    get frequency() {
        return this._frequency
    }
    set frequency(e) {
        this._frequency = typeof e == "number" && e > 0 ? e : 1
    }
    get parent() {
        return this._parent
    }
    set parent(e) {
        this.cleanup(), this._parent = e
    }
    init(e) {
        if (!e) return;
        this.cleanup(), this._origConfig = e, this.minLifetime = e.lifetime.min, this.maxLifetime = e.lifetime.max, e.ease ? this.customEase = typeof e.ease == "function" ? e.ease : Do(e.ease) : this.customEase = null, this.particlesPerWave = 1, e.particlesPerWave && e.particlesPerWave > 1 && (this.particlesPerWave = e.particlesPerWave), this.frequency = e.frequency, this.spawnChance = typeof e.spawnChance == "number" && e.spawnChance > 0 ? e.spawnChance : 1, this.emitterLifetime = e.emitterLifetime || -1, this.maxParticles = e.maxParticles > 0 ? e.maxParticles : 1e3, this.addAtBack = !!e.addAtBack, this.rotation = 0, this.ownerPos.set(0), e.pos ? this.spawnPos.copyFrom(e.pos) : this.spawnPos.set(0), this._prevEmitterPos.copyFrom(this.spawnPos), this._prevPosIsValid = !1, this._spawnTimer = 0, this.emit = e.emit === void 0 || !!e.emit, this.autoUpdate = !!e.autoUpdate;
        const t = e.behaviors.map(i => {
            const s = j.knownBehaviors[i.type];
            return s ? new s(i.config) : null
        }).filter(i => !!i);
        t.push(ze), t.sort((i, s) => i === ze ? s.order === H.Spawn ? 1 : -1 : s === ze ? i.order === H.Spawn ? -1 : 1 : i.order - s.order), this.initBehaviors = t.slice(), this.updateBehaviors = t.filter(i => i !== ze && i.updateParticle), this.recycleBehaviors = t.filter(i => i !== ze && i.recycleParticle)
    }
    getBehavior(e) {
        return j.knownBehaviors[e] && this.initBehaviors.find(t => t instanceof j.knownBehaviors[e]) || null
    }
    fillPool(e) {
        for (; e > 0; --e) {
            const t = new ai(this);
            t.next = this._poolFirst, this._poolFirst = t
        }
    }
    recycle(e, t = !1) {
        for (let i = 0; i < this.recycleBehaviors.length; ++i) this.recycleBehaviors[i].recycleParticle(e, !t);
        e.next && (e.next.prev = e.prev), e.prev && (e.prev.next = e.next), e === this._activeParticlesLast && (this._activeParticlesLast = e.prev), e === this._activeParticlesFirst && (this._activeParticlesFirst = e.next), e.prev = null, e.next = this._poolFirst, this._poolFirst = e, e.parent && e.parent.removeChild(e), --this.particleCount
    }
    rotate(e) {
        if (this.rotation === e) return;
        const t = e - this.rotation;
        this.rotation = e, Fe(t, this.spawnPos), this._posChanged = !0
    }
    updateSpawnPos(e, t) {
        this._posChanged = !0, this.spawnPos.x = e, this.spawnPos.y = t
    }
    updateOwnerPos(e, t) {
        this._posChanged = !0, this.ownerPos.x = e, this.ownerPos.y = t
    }
    resetPositionTracking() {
        this._prevPosIsValid = !1
    }
    get emit() {
        return this._emit
    }
    set emit(e) {
        this._emit = !!e, this._emitterLife = this.emitterLifetime
    }
    get autoUpdate() {
        return this._autoUpdate
    }
    set autoUpdate(e) {
        this._autoUpdate && !e ? hi.remove(this.update, this) : !this._autoUpdate && e && hi.add(this.update, this), this._autoUpdate = !!e
    }
    playOnceAndDestroy(e) {
        this.autoUpdate = !0, this.emit = !0, this._destroyWhenComplete = !0, this._completeCallback = e
    }
    playOnce(e) {
        this.emit = !0, this._completeCallback = e
    }
    update(e) {
        if (this._autoUpdate && (e = .001 * hi.elapsedMS), !this._parent) return;
        for (let o, a = this._activeParticlesFirst; a; a = o)
            if (o = a.next, a.age += e, a.age > a.maxLife || a.age < 0) this.recycle(a);
            else {
                let h = a.age * a.oneOverLife;
                this.customEase && (h = this.customEase.length === 4 ? this.customEase(h, 0, 1, 1) : this.customEase(h)), a.agePercent = h;
                for (let l = 0; l < this.updateBehaviors.length; ++l)
                    if (this.updateBehaviors[l].updateParticle(a, e)) {
                        this.recycle(a);
                        break
                    }
            }
        let t, i;
        this._prevPosIsValid && (t = this._prevEmitterPos.x, i = this._prevEmitterPos.y);
        const s = this.ownerPos.x + this.spawnPos.x,
            n = this.ownerPos.y + this.spawnPos.y;
        if (this._emit)
            for (this._spawnTimer -= e < 0 ? 0 : e; this._spawnTimer <= 0;) {
                if (this._emitterLife >= 0 && (this._emitterLife -= this._frequency, this._emitterLife <= 0)) {
                    this._spawnTimer = 0, this._emitterLife = 0, this.emit = !1;
                    break
                }
                if (this.particleCount >= this.maxParticles) {
                    this._spawnTimer += this._frequency;
                    continue
                }
                let o, a;
                if (this._prevPosIsValid && this._posChanged) {
                    const u = 1 + this._spawnTimer / e;
                    o = (s - t) * u + t, a = (n - i) * u + i
                } else o = s, a = n;
                let h = null,
                    l = null;
                for (let u = Math.min(this.particlesPerWave, this.maxParticles - this.particleCount), c = 0; c < u; ++c) {
                    if (this.spawnChance < 1 && Math.random() >= this.spawnChance) continue;
                    let d, p;
                    d = this.minLifetime === this.maxLifetime ? this.minLifetime : Math.random() * (this.maxLifetime - this.minLifetime) + this.minLifetime, -this._spawnTimer >= d || (this._poolFirst ? (p = this._poolFirst, this._poolFirst = this._poolFirst.next, p.next = null) : p = new ai(this), p.init(d), this.addAtBack ? this._parent.addChildAt(p, 0) : this._parent.addChild(p), h ? (l.next = p, p.prev = l, l = p) : l = h = p, ++this.particleCount)
                }
                if (h) {
                    this._activeParticlesLast ? (this._activeParticlesLast.next = h, h.prev = this._activeParticlesLast, this._activeParticlesLast = l) : (this._activeParticlesFirst = h, this._activeParticlesLast = l);
                    for (let u = 0; u < this.initBehaviors.length; ++u) {
                        const c = this.initBehaviors[u];
                        if (c === ze)
                            for (let d, p = h; p; p = d) {
                                d = p.next, this.rotation !== 0 && (Fe(this.rotation, p.position), p.rotation += this.rotation), p.position.x += o, p.position.y += a, p.age += -this._spawnTimer;
                                let f = p.age * p.oneOverLife;
                                this.customEase && (f = this.customEase.length === 4 ? this.customEase(f, 0, 1, 1) : this.customEase(f)), p.agePercent = f
                            } else c.initParticles(h)
                    }
                    for (let u, c = h; c; c = u) {
                        u = c.next;
                        for (let d = 0; d < this.updateBehaviors.length; ++d)
                            if (this.updateBehaviors[d].updateParticle(c, -this._spawnTimer)) {
                                this.recycle(c);
                                break
                            }
                    }
                }
                this._spawnTimer += this._frequency
            }
        if (this._posChanged && (this._prevEmitterPos.x = s, this._prevEmitterPos.y = n, this._prevPosIsValid = !0, this._posChanged = !1), !this._emit && !this._activeParticlesFirst) {
            if (this._completeCallback) {
                const o = this._completeCallback;
                this._completeCallback = null, o()
            }
            this._destroyWhenComplete && this.destroy()
        }
    }
    emitNow() {
        const e = this.ownerPos.x + this.spawnPos.x,
            t = this.ownerPos.y + this.spawnPos.y;
        let i = null,
            s = null;
        for (let n = Math.min(this.particlesPerWave, this.maxParticles - this.particleCount), o = 0; o < n; ++o) {
            if (this.spawnChance < 1 && Math.random() >= this.spawnChance) continue;
            let a, h;
            this._poolFirst ? (a = this._poolFirst, this._poolFirst = this._poolFirst.next, a.next = null) : a = new ai(this), h = this.minLifetime === this.maxLifetime ? this.minLifetime : Math.random() * (this.maxLifetime - this.minLifetime) + this.minLifetime, a.init(h), this.addAtBack ? this._parent.addChildAt(a, 0) : this._parent.addChild(a), i ? (s.next = a, a.prev = s, s = a) : s = i = a, ++this.particleCount
        }
        if (i) {
            this._activeParticlesLast ? (this._activeParticlesLast.next = i, i.prev = this._activeParticlesLast, this._activeParticlesLast = s) : (this._activeParticlesFirst = i, this._activeParticlesLast = s);
            for (let n = 0; n < this.initBehaviors.length; ++n) {
                const o = this.initBehaviors[n];
                if (o === ze)
                    for (let a, h = i; h; h = a) a = h.next, this.rotation !== 0 && (Fe(this.rotation, h.position), h.rotation += this.rotation), h.position.x += e, h.position.y += t;
                else o.initParticles(i)
            }
        }
    }
    cleanup() {
        let e, t;
        for (e = this._activeParticlesFirst; e; e = t) t = e.next, this.recycle(e, !0);
        this._activeParticlesFirst = this._activeParticlesLast = null, this.particleCount = 0
    }
    get destroyed() {
        return !(this._parent && this.initBehaviors.length)
    }
    destroy() {
        let e;
        this.autoUpdate = !1, this.cleanup();
        for (let t = this._poolFirst; t; t = e) e = t.next, t.destroy();
        this._poolFirst = this._parent = this.spawnPos = this.ownerPos = this.customEase = this._completeCallback = null, this.initBehaviors.length = this.updateBehaviors.length = this.recycleBehaviors.length = 0
    }
}
j.knownBehaviors = {};
class Fi {
    constructor(e) {
        this.x = e.x, this.y = e.y, this.w = e.w, this.h = e.h
    }
    getRandPos(e) {
        e.x = Math.random() * this.w + this.x, e.y = Math.random() * this.h + this.y
    }
}
Fi.type = "rect", Fi.editorConfig = null;
class Or {
    constructor(e) {
        this.x = e.x || 0, this.y = e.y || 0, this.radius = e.radius, this.innerRadius = e.innerRadius || 0, this.rotation = !!e.affectRotation
    }
    getRandPos(e) {
        this.innerRadius !== this.radius ? e.x = Math.random() * (this.radius - this.innerRadius) + this.innerRadius : e.x = this.radius, e.y = 0;
        const t = Math.random() * Math.PI * 2;
        this.rotation && (e.rotation += t), Fe(t, e.position), e.position.x += this.x, e.position.y += this.y
    }
}
Or.type = "torus", Or.editorConfig = null;
class Bi {
    constructor(e) {
        this.segments = [], this.countingLengths = [], this.totalLength = 0, this.init(e)
    }
    init(e) {
        if (e && e.length)
            if (Array.isArray(e[0]))
                for (let t = 0; t < e.length; ++t) {
                    const i = e[t];
                    let s = i[0];
                    for (let n = 1; n < i.length; ++n) {
                        const o = i[n];
                        this.segments.push({
                            p1: s,
                            p2: o,
                            l: 0
                        }), s = o
                    }
                } else {
                    let t = e[0];
                    for (let i = 1; i < e.length; ++i) {
                        const s = e[i];
                        this.segments.push({
                            p1: t,
                            p2: s,
                            l: 0
                        }), t = s
                    }
                } else this.segments.push({
                    p1: {
                        x: 0,
                        y: 0
                    },
                    p2: {
                        x: 0,
                        y: 0
                    },
                    l: 0
                });
        for (let t = 0; t < this.segments.length; ++t) {
            const {
                p1: i,
                p2: s
            } = this.segments[t], n = Math.sqrt((s.x - i.x) * (s.x - i.x) + (s.y - i.y) * (s.y - i.y));
            this.segments[t].l = n, this.totalLength += n, this.countingLengths.push(this.totalLength)
        }
    }
    getRandPos(e) {
        const t = Math.random() * this.totalLength;
        let i, s;
        if (this.segments.length === 1) i = this.segments[0], s = t;
        else
            for (let a = 0; a < this.countingLengths.length; ++a)
                if (t < this.countingLengths[a]) {
                    i = this.segments[a], s = a === 0 ? t : t - this.countingLengths[a - 1];
                    break
                }
        s /= i.l || 1;
        const {
            p1: n,
            p2: o
        } = i;
        e.x = n.x + s * (o.x - n.x), e.y = n.y + s * (o.y - n.y)
    }
}
Bi.type = "polygonalChain", Bi.editorConfig = null;
class Li {
    constructor(e) {
        var t;
        this.order = H.Late, this.minStart = e.minStart, this.maxStart = e.maxStart, this.accel = e.accel, this.rotate = !!e.rotate, this.maxSpeed = (t = e.maxSpeed) !== null && t !== void 0 ? t : 0
    }
    initParticles(e) {
        let t = e;
        for (; t;) {
            const i = Math.random() * (this.maxStart - this.minStart) + this.minStart;
            t.config.velocity ? t.config.velocity.set(i, 0) : t.config.velocity = new W(i, 0), Fe(t.rotation, t.config.velocity), t = t.next
        }
    }
    updateParticle(e, t) {
        const i = e.config.velocity,
            s = i.x,
            n = i.y;
        if (i.x += this.accel.x * t, i.y += this.accel.y * t, this.maxSpeed) {
            const o = Bo(i);
            o > this.maxSpeed && Lo(i, this.maxSpeed / o)
        }
        e.x += (s + i.x) / 2 * t, e.y += (n + i.y) / 2 * t, this.rotate && (e.rotation = Math.atan2(i.y, i.x))
    }
}

function fl(r) {
    return this.ease && (r = this.ease(r)), (this.first.next.value - this.first.value) * r + this.first.value
}

function pl(r) {
    this.ease && (r = this.ease(r));
    const e = this.first.value,
        t = this.first.next.value;
    return Ur((t.r - e.r) * r + e.r, (t.g - e.g) * r + e.g, (t.b - e.b) * r + e.b)
}

function ml(r) {
    this.ease && (r = this.ease(r));
    let e = this.first,
        t = e.next;
    for (; r > t.time;) e = t, t = t.next;
    return r = (r - e.time) / (t.time - e.time), (t.value - e.value) * r + e.value
}

function gl(r) {
    this.ease && (r = this.ease(r));
    let e = this.first,
        t = e.next;
    for (; r > t.time;) e = t, t = t.next;
    r = (r - e.time) / (t.time - e.time);
    const i = e.value,
        s = t.value;
    return Ur((s.r - i.r) * r + i.r, (s.g - i.g) * r + i.g, (s.b - i.b) * r + i.b)
}

function yl(r) {
    this.ease && (r = this.ease(r));
    let e = this.first;
    for (; e.next && r > e.next.time;) e = e.next;
    return e.value
}

function xl(r) {
    this.ease && (r = this.ease(r));
    let e = this.first;
    for (; e.next && r > e.next.time;) e = e.next;
    const t = e.value;
    return Ur(t.r, t.g, t.b)
}
Li.type = "moveAcceleration", Li.editorConfig = null;
class qt {
    constructor(e = !1) {
        this.first = null, this.isColor = !!e, this.interpolate = null, this.ease = null
    }
    reset(e) {
        this.first = e, e.next && e.next.time >= 1 ? this.interpolate = this.isColor ? pl : fl : e.isStepped ? this.interpolate = this.isColor ? xl : yl : this.interpolate = this.isColor ? gl : ml, this.ease = this.first.ease
    }
}
class Di {
    constructor(e) {
        this.order = H.Normal, this.list = new qt(!1), this.list.reset(Re.createList(e.alpha))
    }
    initParticles(e) {
        let t = e;
        for (; t;) t.alpha = this.list.first.value, t = t.next
    }
    updateParticle(e) {
        e.alpha = this.list.interpolate(e.agePercent)
    }
}
Di.type = "alpha", Di.editorConfig = null;
class Ui {
    constructor(e) {
        this.order = H.Normal, this.value = e.alpha
    }
    initParticles(e) {
        let t = e;
        for (; t;) t.alpha = this.value, t = t.next
    }
}

function Uo(r) {
    const e = [];
    for (let t = 0; t < r.length; ++t) {
        let i = r[t];
        if (typeof i == "string") e.push(Yt(i));
        else if (i instanceof N) e.push(i);
        else {
            let s = i.count || 1;
            for (i = typeof i.texture == "string" ? Yt(i.texture) : i.texture; s > 0; --s) e.push(i)
        }
    }
    return e
}
Ui.type = "alphaStatic", Ui.editorConfig = null;
class ki {
    constructor(e) {
        this.order = H.Normal, this.anims = [];
        for (let t = 0; t < e.anims.length; ++t) {
            const i = e.anims[t],
                s = Uo(i.textures),
                n = i.framerate < 0 ? -1 : i.framerate > 0 ? i.framerate : 60,
                o = {
                    textures: s,
                    duration: n > 0 ? s.length / n : 0,
                    framerate: n,
                    loop: n > 0 && !!i.loop
                };
            this.anims.push(o)
        }
    }
    initParticles(e) {
        let t = e;
        for (; t;) {
            const i = Math.floor(Math.random() * this.anims.length),
                s = t.config.anim = this.anims[i];
            t.texture = s.textures[0], t.config.animElapsed = 0, s.framerate === -1 ? (t.config.animDuration = t.maxLife, t.config.animFramerate = s.textures.length / t.maxLife) : (t.config.animDuration = s.duration, t.config.animFramerate = s.framerate), t = t.next
        }
    }
    updateParticle(e, t) {
        const i = e.config,
            s = i.anim;
        i.animElapsed += t, i.animElapsed >= i.animDuration && (i.anim.loop ? i.animElapsed = i.animElapsed % i.animDuration : i.animElapsed = i.animDuration - 1e-6);
        const n = i.animElapsed * i.animFramerate + 1e-7 | 0;
        e.texture = s.textures[n] || s.textures[s.textures.length - 1] || N.EMPTY
    }
}
ki.type = "animatedRandom", ki.editorConfig = null;
class Gi {
    constructor(e) {
        this.order = H.Normal;
        const t = e.anim,
            i = Uo(t.textures),
            s = t.framerate < 0 ? -1 : t.framerate > 0 ? t.framerate : 60;
        this.anim = {
            textures: i,
            duration: s > 0 ? i.length / s : 0,
            framerate: s,
            loop: s > 0 && !!t.loop
        }
    }
    initParticles(e) {
        let t = e;
        const i = this.anim;
        for (; t;) t.texture = i.textures[0], t.config.animElapsed = 0, i.framerate === -1 ? (t.config.animDuration = t.maxLife, t.config.animFramerate = i.textures.length / t.maxLife) : (t.config.animDuration = i.duration, t.config.animFramerate = i.framerate), t = t.next
    }
    updateParticle(e, t) {
        const i = this.anim,
            s = e.config;
        s.animElapsed += t, s.animElapsed >= s.animDuration && (i.loop ? s.animElapsed = s.animElapsed % s.animDuration : s.animElapsed = s.animDuration - 1e-6);
        const n = s.animElapsed * s.animFramerate + 1e-7 | 0;
        e.texture = i.textures[n] || i.textures[i.textures.length - 1] || N.EMPTY
    }
}
Gi.type = "animatedSingle", Gi.editorConfig = null;
class ji {
    constructor(e) {
        this.order = H.Normal, this.value = e.blendMode
    }
    initParticles(e) {
        let t = e;
        for (; t;) t.blendMode = (i = this.value) ? (i = i.toUpperCase().replace(/ /g, "_"), A[i] || A.NORMAL) : A.NORMAL, t = t.next;
        var i
    }
}
ji.type = "blendMode", ji.editorConfig = null;
class Hi {
    constructor(e) {
        this.order = H.Spawn, this.spacing = e.spacing * Ae, this.start = e.start * Ae, this.distance = e.distance
    }
    initParticles(e) {
        let t = 0,
            i = e;
        for (; i;) {
            let s;
            s = this.spacing ? this.start + this.spacing * t : Math.random() * Math.PI * 2, i.rotation = s, this.distance && (i.position.x = this.distance, Fe(s, i.position)), i = i.next, ++t
        }
    }
}
Hi.type = "spawnBurst", Hi.editorConfig = null;
class Xi {
    constructor(e) {
        this.order = H.Normal, this.list = new qt(!0), this.list.reset(Re.createList(e.color))
    }
    initParticles(e) {
        let t = e;
        const i = this.list.first.value,
            s = Ur(i.r, i.g, i.b);
        for (; t;) t.tint = s, t = t.next
    }
    updateParticle(e) {
        e.tint = this.list.interpolate(e.agePercent)
    }
}
Xi.type = "color", Xi.editorConfig = null;
class Vi {
    constructor(e) {
        this.order = H.Normal;
        let t = e.color;
        t.charAt(0) === "#" ? t = t.substr(1) : t.indexOf("0x") === 0 && (t = t.substr(2)), this.value = parseInt(t, 16)
    }
    initParticles(e) {
        let t = e;
        for (; t;) t.tint = this.value, t = t.next
    }
}
Vi.type = "colorStatic", Vi.editorConfig = null;
class Yi {
    constructor(e) {
        this.order = H.Normal, this.index = 0, this.textures = e.textures.map(t => typeof t == "string" ? Yt(t) : t)
    }
    initParticles(e) {
        let t = e;
        for (; t;) t.texture = this.textures[this.index], ++this.index >= this.textures.length && (this.index = 0), t = t.next
    }
}
Yi.type = "textureOrdered", Yi.editorConfig = null;
const dt = new W,
    ko = ["E", "LN2", "LN10", "LOG2E", "LOG10E", "PI", "SQRT1_2", "SQRT2", "abs", "acos", "acosh", "asin", "asinh", "atan", "atanh", "atan2", "cbrt", "ceil", "cos", "cosh", "exp", "expm1", "floor", "fround", "hypot", "log", "log1p", "log10", "log2", "max", "min", "pow", "random", "round", "sign", "sin", "sinh", "sqrt", "tan", "tanh"],
    _l = new RegExp(["[01234567890\\.\\*\\-\\+\\/\\(\\)x ,]"].concat(ko).join("|"), "g");
class Wi {
    constructor(e) {
        var t;
        if (this.order = H.Late, e.path)
            if (typeof e.path == "function") this.path = e.path;
            else try {
                this.path = function(i) {
                    const s = i.match(_l);
                    for (let n = s.length - 1; n >= 0; --n) ko.indexOf(s[n]) >= 0 && (s[n] = `Math.${s[n]}`);
                    return i = s.join(""), new Function("x", `return ${i};`)
                }(e.path)
            } catch (i) {
                this.path = null
            } else this.path = i => i;
        this.list = new qt(!1), this.list.reset(Re.createList(e.speed)), this.minMult = (t = e.minMult) !== null && t !== void 0 ? t : 1
    }
    initParticles(e) {
        let t = e;
        for (; t;) {
            t.config.initRotation = t.rotation, t.config.initPosition ? t.config.initPosition.copyFrom(t.position) : t.config.initPosition = new W(t.x, t.y), t.config.movement = 0;
            const i = Math.random() * (1 - this.minMult) + this.minMult;
            t.config.speedMult = i, t = t.next
        }
    }
    updateParticle(e, t) {
        const i = this.list.interpolate(e.agePercent) * e.config.speedMult;
        e.config.movement += i * t, dt.x = e.config.movement, dt.y = this.path(dt.x), Fe(e.config.initRotation, dt), e.position.x = e.config.initPosition.x + dt.x, e.position.y = e.config.initPosition.y + dt.y
    }
}
Wi.type = "movePath", Wi.editorConfig = null;
class zi {
    constructor() {
        this.order = H.Spawn
    }
    initParticles(e) {}
}
zi.type = "spawnPoint", zi.editorConfig = null;
class $i {
    constructor(e) {
        this.order = H.Normal, this.textures = e.textures.map(t => typeof t == "string" ? Yt(t) : t)
    }
    initParticles(e) {
        let t = e;
        for (; t;) {
            const i = Math.floor(Math.random() * this.textures.length);
            t.texture = this.textures[i], t = t.next
        }
    }
}
$i.type = "textureRandom", $i.editorConfig = null;
class qi {
    constructor(e) {
        this.order = H.Normal, this.minStart = e.minStart * Ae, this.maxStart = e.maxStart * Ae, this.minSpeed = e.minSpeed * Ae, this.maxSpeed = e.maxSpeed * Ae, this.accel = e.accel * Ae
    }
    initParticles(e) {
        let t = e;
        for (; t;) this.minStart === this.maxStart ? t.rotation += this.maxStart : t.rotation += Math.random() * (this.maxStart - this.minStart) + this.minStart, t.config.rotSpeed = Math.random() * (this.maxSpeed - this.minSpeed) + this.minSpeed, t = t.next
    }
    updateParticle(e, t) {
        if (this.accel) {
            const i = e.config.rotSpeed;
            e.config.rotSpeed += this.accel * t, e.rotation += (e.config.rotSpeed + i) / 2 * t
        } else e.rotation += e.config.rotSpeed * t
    }
}
qi.type = "rotation", qi.editorConfig = null;
class Zi {
    constructor(e) {
        this.order = H.Normal, this.min = e.min * Ae, this.max = e.max * Ae
    }
    initParticles(e) {
        let t = e;
        for (; t;) this.min === this.max ? t.rotation += this.max : t.rotation += Math.random() * (this.max - this.min) + this.min, t = t.next
    }
}
Zi.type = "rotationStatic", Zi.editorConfig = null;
class Ki {
    constructor(e) {
        this.order = H.Late + 1, this.rotation = (e.rotation || 0) * Ae
    }
    initParticles(e) {
        let t = e;
        for (; t;) t.rotation = this.rotation, t = t.next
    }
}
Ki.type = "noRotation", Ki.editorConfig = null;
class Qi {
    constructor(e) {
        var t;
        this.order = H.Normal, this.list = new qt(!1), this.list.reset(Re.createList(e.scale)), this.minMult = (t = e.minMult) !== null && t !== void 0 ? t : 1
    }
    initParticles(e) {
        let t = e;
        for (; t;) {
            const i = Math.random() * (1 - this.minMult) + this.minMult;
            t.config.scaleMult = i, t.scale.x = t.scale.y = this.list.first.value * i, t = t.next
        }
    }
    updateParticle(e) {
        e.scale.x = e.scale.y = this.list.interpolate(e.agePercent) * e.config.scaleMult
    }
}
Qi.type = "scale", Qi.editorConfig = null;
class Ji {
    constructor(e) {
        this.order = H.Normal, this.min = e.min, this.max = e.max
    }
    initParticles(e) {
        let t = e;
        for (; t;) {
            const i = Math.random() * (this.max - this.min) + this.min;
            t.scale.x = t.scale.y = i, t = t.next
        }
    }
}
Ji.type = "scaleStatic", Ji.editorConfig = null;
class ye {
    constructor(e) {
        this.order = H.Spawn;
        const t = ye.shapes[e.type];
        if (!t) throw new Error(`No shape found with type '${e.type}'`);
        this.shape = new t(e.data)
    }
    static registerShape(e, t) {
        ye.shapes[t || e.type] = e
    }
    initParticles(e) {
        let t = e;
        for (; t;) this.shape.getRandPos(t), t = t.next
    }
}
ye.type = "spawnShape", ye.editorConfig = null, ye.shapes = {}, ye.registerShape(Bi), ye.registerShape(Fi), ye.registerShape(Or), ye.registerShape(Or, "circle");
class es {
    constructor(e) {
        this.order = H.Normal, this.texture = typeof e.texture == "string" ? Yt(e.texture) : e.texture
    }
    initParticles(e) {
        let t = e;
        for (; t;) t.texture = this.texture, t = t.next
    }
}
es.type = "textureSingle", es.editorConfig = null;
class ts {
    constructor(e) {
        var t;
        this.order = H.Late, this.list = new qt(!1), this.list.reset(Re.createList(e.speed)), this.minMult = (t = e.minMult) !== null && t !== void 0 ? t : 1
    }
    initParticles(e) {
        let t = e;
        for (; t;) {
            const i = Math.random() * (1 - this.minMult) + this.minMult;
            t.config.speedMult = i, t.config.velocity ? t.config.velocity.set(this.list.first.value * i, 0) : t.config.velocity = new W(this.list.first.value * i, 0), Fe(t.rotation, t.config.velocity), t = t.next
        }
    }
    updateParticle(e, t) {
        const i = this.list.interpolate(e.agePercent) * e.config.speedMult,
            s = e.config.velocity;
        (function(n) {
            const o = 1 / Bo(n);
            n.x *= o, n.y *= o
        })(s), Lo(s, i), e.x += s.x * t, e.y += s.y * t
    }
}
ts.type = "moveSpeed", ts.editorConfig = null;
class li {
    constructor(e) {
        this.order = H.Late, this.min = e.min, this.max = e.max
    }
    initParticles(e) {
        let t = e;
        for (; t;) {
            const i = Math.random() * (this.max - this.min) + this.min;
            t.config.velocity ? t.config.velocity.set(i, 0) : t.config.velocity = new W(i, 0), Fe(t.rotation, t.config.velocity), t = t.next
        }
    }
    updateParticle(e, t) {
        const i = e.config.velocity;
        e.x += i.x * t, e.y += i.y * t
    }
}

function Tl(r, e) {
    var t, i, s, n, o, a, h, l, u, c, d, p, f, y, m, g, _, x, b, I, C;
    if ("behaviors" in r) return r;
    const T = {
        lifetime: r.lifetime,
        ease: r.ease,
        particlesPerWave: r.particlesPerWave,
        frequency: r.frequency,
        spawnChance: r.spawnChance,
        emitterLifetime: r.emitterLifetime,
        maxParticles: r.maxParticles,
        addAtBack: r.addAtBack,
        pos: r.pos,
        emit: r.emit,
        autoUpdate: r.autoUpdate,
        behaviors: []
    };
    if (r.alpha)
        if ("start" in r.alpha)
            if (r.alpha.start === r.alpha.end) r.alpha.start !== 1 && T.behaviors.push({
                type: "alphaStatic",
                config: {
                    alpha: r.alpha.start
                }
            });
            else {
                const w = {
                    list: [{
                        time: 0,
                        value: r.alpha.start
                    }, {
                        time: 1,
                        value: r.alpha.end
                    }]
                };
                T.behaviors.push({
                    type: "alpha",
                    config: {
                        alpha: w
                    }
                })
            }
    else r.alpha.list.length === 1 ? r.alpha.list[0].value !== 1 && T.behaviors.push({
        type: "alphaStatic",
        config: {
            alpha: r.alpha.list[0].value
        }
    }) : T.behaviors.push({
        type: "alpha",
        config: {
            alpha: r.alpha
        }
    });
    if (r.acceleration && (r.acceleration.x || r.acceleration.y)) {
        let w, M;
        "start" in r.speed ? (w = r.speed.start * ((t = r.speed.minimumSpeedMultiplier) !== null && t !== void 0 ? t : 1), M = r.speed.start) : (w = r.speed.list[0].value * ((i = r.minimumSpeedMultiplier) !== null && i !== void 0 ? i : 1), M = r.speed.list[0].value), T.behaviors.push({
            type: "moveAcceleration",
            config: {
                accel: r.acceleration,
                minStart: w,
                maxStart: M,
                rotate: !r.noRotation,
                maxSpeed: r.maxSpeed
            }
        })
    } else if (!((s = r.extraData) === null || s === void 0) && s.path) {
        let w, M;
        "start" in r.speed ? (M = (n = r.speed.minimumSpeedMultiplier) !== null && n !== void 0 ? n : 1, w = r.speed.start === r.speed.end ? {
            list: [{
                time: 0,
                value: r.speed.start
            }]
        } : {
            list: [{
                time: 0,
                value: r.speed.start
            }, {
                time: 1,
                value: r.speed.end
            }]
        }) : (w = r.speed, M = (o = r.minimumSpeedMultiplier) !== null && o !== void 0 ? o : 1), T.behaviors.push({
            type: "movePath",
            config: {
                path: r.extraData.path,
                speed: w,
                minMult: M
            }
        })
    } else if (r.speed)
        if ("start" in r.speed)
            if (r.speed.start === r.speed.end) T.behaviors.push({
                type: "moveSpeedStatic",
                config: {
                    min: r.speed.start * ((a = r.speed.minimumSpeedMultiplier) !== null && a !== void 0 ? a : 1),
                    max: r.speed.start
                }
            });
            else {
                const w = {
                    list: [{
                        time: 0,
                        value: r.speed.start
                    }, {
                        time: 1,
                        value: r.speed.end
                    }]
                };
                T.behaviors.push({
                    type: "moveSpeed",
                    config: {
                        speed: w,
                        minMult: r.speed.minimumSpeedMultiplier
                    }
                })
            }
    else r.speed.list.length === 1 ? T.behaviors.push({
        type: "moveSpeedStatic",
        config: {
            min: r.speed.list[0].value * ((h = r.minimumSpeedMultiplier) !== null && h !== void 0 ? h : 1),
            max: r.speed.list[0].value
        }
    }) : T.behaviors.push({
        type: "moveSpeed",
        config: {
            speed: r.speed,
            minMult: (l = r.minimumSpeedMultiplier) !== null && l !== void 0 ? l : 1
        }
    });
    if (r.scale)
        if ("start" in r.scale) {
            const w = (u = r.scale.minimumScaleMultiplier) !== null && u !== void 0 ? u : 1;
            if (r.scale.start === r.scale.end) T.behaviors.push({
                type: "scaleStatic",
                config: {
                    min: r.scale.start * w,
                    max: r.scale.start
                }
            });
            else {
                const M = {
                    list: [{
                        time: 0,
                        value: r.scale.start
                    }, {
                        time: 1,
                        value: r.scale.end
                    }]
                };
                T.behaviors.push({
                    type: "scale",
                    config: {
                        scale: M,
                        minMult: w
                    }
                })
            }
        } else if (r.scale.list.length === 1) {
        const w = (c = r.minimumScaleMultiplier) !== null && c !== void 0 ? c : 1,
            M = r.scale.list[0].value;
        T.behaviors.push({
            type: "scaleStatic",
            config: {
                min: M * w,
                max: M
            }
        })
    } else T.behaviors.push({
        type: "scale",
        config: {
            scale: r.scale,
            minMult: (d = r.minimumScaleMultiplier) !== null && d !== void 0 ? d : 1
        }
    });
    if (r.color)
        if ("start" in r.color)
            if (r.color.start === r.color.end) r.color.start !== "ffffff" && T.behaviors.push({
                type: "colorStatic",
                config: {
                    color: r.color.start
                }
            });
            else {
                const w = {
                    list: [{
                        time: 0,
                        value: r.color.start
                    }, {
                        time: 1,
                        value: r.color.end
                    }]
                };
                T.behaviors.push({
                    type: "color",
                    config: {
                        color: w
                    }
                })
            }
    else r.color.list.length === 1 ? r.color.list[0].value !== "ffffff" && T.behaviors.push({
        type: "colorStatic",
        config: {
            color: r.color.list[0].value
        }
    }) : T.behaviors.push({
        type: "color",
        config: {
            color: r.color
        }
    });
    if (r.rotationAcceleration || !((p = r.rotationSpeed) === null || p === void 0) && p.min || !((f = r.rotationSpeed) === null || f === void 0) && f.max ? T.behaviors.push({
            type: "rotation",
            config: {
                accel: r.rotationAcceleration || 0,
                minSpeed: ((y = r.rotationSpeed) === null || y === void 0 ? void 0 : y.min) || 0,
                maxSpeed: ((m = r.rotationSpeed) === null || m === void 0 ? void 0 : m.max) || 0,
                minStart: ((g = r.startRotation) === null || g === void 0 ? void 0 : g.min) || 0,
                maxStart: ((_ = r.startRotation) === null || _ === void 0 ? void 0 : _.max) || 0
            }
        }) : (!((x = r.startRotation) === null || x === void 0) && x.min || !((b = r.startRotation) === null || b === void 0) && b.max) && T.behaviors.push({
            type: "rotationStatic",
            config: {
                min: ((I = r.startRotation) === null || I === void 0 ? void 0 : I.min) || 0,
                max: ((C = r.startRotation) === null || C === void 0 ? void 0 : C.max) || 0
            }
        }), r.noRotation && T.behaviors.push({
            type: "noRotation",
            config: {}
        }), r.blendMode && r.blendMode !== "normal" && T.behaviors.push({
            type: "blendMode",
            config: {
                blendMode: r.blendMode
            }
        }), Array.isArray(e) && typeof e[0] != "string" && "framerate" in e[0]) {
        for (let w = 0; w < e.length; ++w) e[w].framerate === "matchLife" && (e[w].framerate = -1);
        T.behaviors.push({
            type: "animatedRandom",
            config: {
                anims: e
            }
        })
    } else typeof e != "string" && "framerate" in e ? (e.framerate === "matchLife" && (e.framerate = -1), T.behaviors.push({
        type: "animatedSingle",
        config: {
            anim: e
        }
    })) : r.orderedArt && Array.isArray(e) ? T.behaviors.push({
        type: "textureOrdered",
        config: {
            textures: e
        }
    }) : Array.isArray(e) ? T.behaviors.push({
        type: "textureRandom",
        config: {
            textures: e
        }
    }) : T.behaviors.push({
        type: "textureSingle",
        config: {
            texture: e
        }
    });
    if (r.spawnType === "burst") T.behaviors.push({
        type: "spawnBurst",
        config: {
            start: r.angleStart || 0,
            spacing: r.particleSpacing,
            distance: 0
        }
    });
    else if (r.spawnType === "point") T.behaviors.push({
        type: "spawnPoint",
        config: {}
    });
    else {
        let w;
        r.spawnType === "ring" ? w = {
            type: "torus",
            data: {
                x: r.spawnCircle.x,
                y: r.spawnCircle.y,
                radius: r.spawnCircle.r,
                innerRadius: r.spawnCircle.minR,
                affectRotation: !0
            }
        } : r.spawnType === "circle" ? w = {
            type: "torus",
            data: {
                x: r.spawnCircle.x,
                y: r.spawnCircle.y,
                radius: r.spawnCircle.r,
                innerRadius: 0,
                affectRotation: !1
            }
        } : r.spawnType === "rect" ? w = {
            type: "rect",
            data: r.spawnRect
        } : r.spawnType === "polygonalChain" && (w = {
            type: "polygonalChain",
            data: r.spawnPolygon
        }), w && T.behaviors.push({
            type: "spawnShape",
            config: w
        })
    }
    return T
}
li.type = "moveSpeedStatic", li.editorConfig = null, j.registerBehavior(Li), j.registerBehavior(Di), j.registerBehavior(Ui), j.registerBehavior(ki), j.registerBehavior(Gi), j.registerBehavior(ji), j.registerBehavior(Hi), j.registerBehavior(Xi), j.registerBehavior(Vi), j.registerBehavior(Yi), j.registerBehavior(Wi), j.registerBehavior(zi), j.registerBehavior($i), j.registerBehavior(qi), j.registerBehavior(Zi), j.registerBehavior(Ki), j.registerBehavior(Qi), j.registerBehavior(Ji), j.registerBehavior(ye), j.registerBehavior(es), j.registerBehavior(ts), j.registerBehavior(li);
export {
    j as E, Tl as u
};