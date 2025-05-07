function V(t, e) {
    for (var n = 0; n < e.length; n++) {
        const u = e[n];
        if (typeof u != "string" && !Array.isArray(u)) {
            for (const o in u)
                if (o !== "default" && !(o in t)) {
                    const a = Object.getOwnPropertyDescriptor(u, o);
                    a && Object.defineProperty(t, o, a.get ? a : {
                        enumerable: !0,
                        get: () => u[o]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, {
        value: "Module"
    }))
}
var M = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};

function E(t) {
    return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t
}
var R = {
        exports: {}
    },
    r = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var y = Symbol.for("react.element"),
    U = Symbol.for("react.portal"),
    q = Symbol.for("react.fragment"),
    F = Symbol.for("react.strict_mode"),
    L = Symbol.for("react.profiler"),
    N = Symbol.for("react.provider"),
    z = Symbol.for("react.context"),
    B = Symbol.for("react.forward_ref"),
    H = Symbol.for("react.suspense"),
    W = Symbol.for("react.memo"),
    Y = Symbol.for("react.lazy"),
    $ = Symbol.iterator;

function G(t) {
    return t === null || typeof t != "object" ? null : (t = $ && t[$] || t["@@iterator"], typeof t == "function" ? t : null)
}
var j = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    },
    k = Object.assign,
    O = {};

function p(t, e, n) {
    this.props = t, this.context = e, this.refs = O, this.updater = n || j
}
p.prototype.isReactComponent = {}, p.prototype.setState = function(t, e) {
    if (typeof t != "object" && typeof t != "function" && t != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, t, e, "setState")
}, p.prototype.forceUpdate = function(t) {
    this.updater.enqueueForceUpdate(this, t, "forceUpdate")
};

function C() {}
C.prototype = p.prototype;

function h(t, e, n) {
    this.props = t, this.context = e, this.refs = O, this.updater = n || j
}
var m = h.prototype = new C;
m.constructor = h, k(m, p.prototype), m.isPureReactComponent = !0;
var P = Array.isArray,
    x = Object.prototype.hasOwnProperty,
    v = {
        current: null
    },
    I = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function T(t, e, n) {
    var u, o = {},
        a = null,
        i = null;
    if (e != null)
        for (u in e.ref !== void 0 && (i = e.ref), e.key !== void 0 && (a = "" + e.key), e) x.call(e, u) && !I.hasOwnProperty(u) && (o[u] = e[u]);
    var s = arguments.length - 2;
    if (s === 1) o.children = n;
    else if (1 < s) {
        for (var c = Array(s), f = 0; f < s; f++) c[f] = arguments[f + 2];
        o.children = c
    }
    if (t && t.defaultProps)
        for (u in s = t.defaultProps, s) o[u] === void 0 && (o[u] = s[u]);
    return {
        $$typeof: y,
        type: t,
        key: a,
        ref: i,
        props: o,
        _owner: v.current
    }
}

function J(t, e) {
    return {
        $$typeof: y,
        type: t.type,
        key: e,
        ref: t.ref,
        props: t.props,
        _owner: t._owner
    }
}

function S(t) {
    return typeof t == "object" && t !== null && t.$$typeof === y
}

function K(t) {
    var e = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + t.replace(/[=:]/g, function(n) {
        return e[n]
    })
}
var A = /\/+/g;

function g(t, e) {
    return typeof t == "object" && t !== null && t.key != null ? K("" + t.key) : e.toString(36)
}

function d(t, e, n, u, o) {
    var a = typeof t;
    (a === "undefined" || a === "boolean") && (t = null);
    var i = !1;
    if (t === null) i = !0;
    else switch (a) {
        case "string":
        case "number":
            i = !0;
            break;
        case "object":
            switch (t.$$typeof) {
                case y:
                case U:
                    i = !0
            }
    }
    if (i) return i = t, o = o(i), t = u === "" ? "." + g(i, 0) : u, P(o) ? (n = "", t != null && (n = t.replace(A, "$&/") + "/"), d(o, e, n, "", function(f) {
        return f
    })) : o != null && (S(o) && (o = J(o, n + (!o.key || i && i.key === o.key ? "" : ("" + o.key).replace(A, "$&/") + "/") + t)), e.push(o)), 1;
    if (i = 0, u = u === "" ? "." : u + ":", P(t))
        for (var s = 0; s < t.length; s++) {
            a = t[s];
            var c = u + g(a, s);
            i += d(a, e, n, c, o)
        } else if (c = G(t), typeof c == "function")
            for (t = c.call(t), s = 0; !(a = t.next()).done;) a = a.value, c = u + g(a, s++), i += d(a, e, n, c, o);
        else if (a === "object") throw e = String(t), Error("Objects are not valid as a React child (found: " + (e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e) + "). If you meant to render a collection of children, use an array instead.");
    return i
}

function _(t, e, n) {
    if (t == null) return t;
    var u = [],
        o = 0;
    return d(t, u, "", "", function(a) {
        return e.call(n, a, o++)
    }), u
}

function Q(t) {
    if (t._status === -1) {
        var e = t._result;
        e = e(), e.then(function(n) {
            (t._status === 0 || t._status === -1) && (t._status = 1, t._result = n)
        }, function(n) {
            (t._status === 0 || t._status === -1) && (t._status = 2, t._result = n)
        }), t._status === -1 && (t._status = 0, t._result = e)
    }
    if (t._status === 1) return t._result.default;
    throw t._result
}
var l = {
        current: null
    },
    b = {
        transition: null
    },
    X = {
        ReactCurrentDispatcher: l,
        ReactCurrentBatchConfig: b,
        ReactCurrentOwner: v
    };
r.Children = {
    map: _,
    forEach: function(t, e, n) {
        _(t, function() {
            e.apply(this, arguments)
        }, n)
    },
    count: function(t) {
        var e = 0;
        return _(t, function() {
            e++
        }), e
    },
    toArray: function(t) {
        return _(t, function(e) {
            return e
        }) || []
    },
    only: function(t) {
        if (!S(t)) throw Error("React.Children.only expected to receive a single React element child.");
        return t
    }
}, r.Component = p, r.Fragment = q, r.Profiler = L, r.PureComponent = h, r.StrictMode = F, r.Suspense = H, r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = X, r.cloneElement = function(t, e, n) {
    if (t == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + t + ".");
    var u = k({}, t.props),
        o = t.key,
        a = t.ref,
        i = t._owner;
    if (e != null) {
        if (e.ref !== void 0 && (a = e.ref, i = v.current), e.key !== void 0 && (o = "" + e.key), t.type && t.type.defaultProps) var s = t.type.defaultProps;
        for (c in e) x.call(e, c) && !I.hasOwnProperty(c) && (u[c] = e[c] === void 0 && s !== void 0 ? s[c] : e[c])
    }
    var c = arguments.length - 2;
    if (c === 1) u.children = n;
    else if (1 < c) {
        s = Array(c);
        for (var f = 0; f < c; f++) s[f] = arguments[f + 2];
        u.children = s
    }
    return {
        $$typeof: y,
        type: t.type,
        key: o,
        ref: a,
        props: u,
        _owner: i
    }
}, r.createContext = function(t) {
    return t = {
        $$typeof: z,
        _currentValue: t,
        _currentValue2: t,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    }, t.Provider = {
        $$typeof: N,
        _context: t
    }, t.Consumer = t
}, r.createElement = T, r.createFactory = function(t) {
    var e = T.bind(null, t);
    return e.type = t, e
}, r.createRef = function() {
    return {
        current: null
    }
}, r.forwardRef = function(t) {
    return {
        $$typeof: B,
        render: t
    }
}, r.isValidElement = S, r.lazy = function(t) {
    return {
        $$typeof: Y,
        _payload: {
            _status: -1,
            _result: t
        },
        _init: Q
    }
}, r.memo = function(t, e) {
    return {
        $$typeof: W,
        type: t,
        compare: e === void 0 ? null : e
    }
}, r.startTransition = function(t) {
    var e = b.transition;
    b.transition = {};
    try {
        t()
    } finally {
        b.transition = e
    }
}, r.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.")
}, r.useCallback = function(t, e) {
    return l.current.useCallback(t, e)
}, r.useContext = function(t) {
    return l.current.useContext(t)
}, r.useDebugValue = function() {}, r.useDeferredValue = function(t) {
    return l.current.useDeferredValue(t)
}, r.useEffect = function(t, e) {
    return l.current.useEffect(t, e)
}, r.useId = function() {
    return l.current.useId()
}, r.useImperativeHandle = function(t, e, n) {
    return l.current.useImperativeHandle(t, e, n)
}, r.useInsertionEffect = function(t, e) {
    return l.current.useInsertionEffect(t, e)
}, r.useLayoutEffect = function(t, e) {
    return l.current.useLayoutEffect(t, e)
}, r.useMemo = function(t, e) {
    return l.current.useMemo(t, e)
}, r.useReducer = function(t, e, n) {
    return l.current.useReducer(t, e, n)
}, r.useRef = function(t) {
    return l.current.useRef(t)
}, r.useState = function(t) {
    return l.current.useState(t)
}, r.useSyncExternalStore = function(t, e, n) {
    return l.current.useSyncExternalStore(t, e, n)
}, r.useTransition = function() {
    return l.current.useTransition()
}, r.version = "18.2.0", R.exports = r;
var w = R.exports;
const D = E(w),
    Z = V({
        __proto__: null,
        default: D
    }, [w]);
export {
    D as R, Z as a, M as c, E as g, w as r
};