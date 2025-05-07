var f = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {};

function a(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}

function s(e) {
    if (e.__esModule) return e;
    var o = e.default;
    if (typeof o == "function") {
        var t = function r() {
            return this instanceof r ? Reflect.construct(o, arguments, this.constructor) : o.apply(this, arguments)
        };
        t.prototype = o.prototype
    } else t = {};
    return Object.defineProperty(t, "__esModule", {
        value: !0
    }), Object.keys(e).forEach(function(r) {
        var n = Object.getOwnPropertyDescriptor(e, r);
        Object.defineProperty(t, r, n.get ? n : {
            enumerable: !0,
            get: function() {
                return e[r]
            }
        })
    }), t
}
var u = globalThis.react;
const l = a(u);
export {
    l as R, s as a, f as c, a as g, u as r
};