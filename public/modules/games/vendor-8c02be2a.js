var l = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {};

function a(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}

function i(e) {
    if (e.__esModule) return e;
    var n = e.default;
    if (typeof n == "function") {
        var t = function r() {
            return this instanceof r ? Reflect.construct(n, arguments, this.constructor) : n.apply(this, arguments)
        };
        t.prototype = n.prototype
    } else t = {};
    return Object.defineProperty(t, "__esModule", {
        value: !0
    }), Object.keys(e).forEach(function(r) {
        var o = Object.getOwnPropertyDescriptor(e, r);
        Object.defineProperty(t, r, o.get ? o : {
            enumerable: !0,
            get: function() {
                return e[r]
            }
        })
    }), t
}
var u = globalThis["react/jsx-runtime"],
    s = globalThis.react;
const f = a(s);
var c = globalThis["@bc/ui"],
    d = globalThis["lodash-es"];
export {
    f as R, c as _, u as a, i as b, l as c, a as g, d as l, s as r
};