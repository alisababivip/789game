var Ic = Object.defineProperty;
var Hn = Object.getOwnPropertySymbols;
var Oc = Object.prototype.hasOwnProperty,
    Ac = Object.prototype.propertyIsEnumerable;
var Wn = (t, e, r) => e in t ? Ic(t, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : t[e] = r,
    Ee = (t, e) => {
        for (var r in e || (e = {})) Oc.call(e, r) && Wn(t, r, e[r]);
        if (Hn)
            for (var r of Hn(e)) Ac.call(e, r) && Wn(t, r, e[r]);
        return t
    };
import {
    g as dn,
    a as gn,
    c as Tt
} from "./react_share-ba7e619d.js";
import {
    c as Cc,
    r as Tc
} from "./___vite-browser-external_commonjs-proxy-558ed773.js";
import {
    _ as Pc
} from "./main-03098ed6.js";
var pn = {
        exports: {}
    },
    hr = typeof Reflect == "object" ? Reflect : null,
    kn = hr && typeof hr.apply == "function" ? hr.apply : function(e, r, i) {
        return Function.prototype.apply.call(e, r, i)
    },
    ri;
hr && typeof hr.ownKeys == "function" ? ri = hr.ownKeys : Object.getOwnPropertySymbols ? ri = function(e) {
    return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
} : ri = function(e) {
    return Object.getOwnPropertyNames(e)
};

function Lc(t) {
    console && console.warn && console.warn(t)
}
var Do = Number.isNaN || function(e) {
    return e !== e
};

function Ie() {
    Ie.init.call(this)
}
pn.exports = Ie;
pn.exports.once = Uc;
Ie.EventEmitter = Ie;
Ie.prototype._events = void 0;
Ie.prototype._eventsCount = 0;
Ie.prototype._maxListeners = void 0;
var qn = 10;

function di(t) {
    if (typeof t != "function") throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t)
}
Object.defineProperty(Ie, "defaultMaxListeners", {
    enumerable: !0,
    get: function() {
        return qn
    },
    set: function(t) {
        if (typeof t != "number" || t < 0 || Do(t)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t + ".");
        qn = t
    }
});
Ie.init = function() {
    (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
};
Ie.prototype.setMaxListeners = function(e) {
    if (typeof e != "number" || e < 0 || Do(e)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
    return this._maxListeners = e, this
};

function So(t) {
    return t._maxListeners === void 0 ? Ie.defaultMaxListeners : t._maxListeners
}
Ie.prototype.getMaxListeners = function() {
    return So(this)
};
Ie.prototype.emit = function(e) {
    for (var r = [], i = 1; i < arguments.length; i++) r.push(arguments[i]);
    var n = e === "error",
        a = this._events;
    if (a !== void 0) n = n && a.error === void 0;
    else if (!n) return !1;
    if (n) {
        var h;
        if (r.length > 0 && (h = r[0]), h instanceof Error) throw h;
        var c = new Error("Unhandled error." + (h ? " (" + h.message + ")" : ""));
        throw c.context = h, c
    }
    var l = a[e];
    if (l === void 0) return !1;
    if (typeof l == "function") kn(l, this, r);
    else
        for (var u = l.length, f = Co(l, u), i = 0; i < u; ++i) kn(f[i], this, r);
    return !0
};

function xo(t, e, r, i) {
    var n, a, h;
    if (di(r), a = t._events, a === void 0 ? (a = t._events = Object.create(null), t._eventsCount = 0) : (a.newListener !== void 0 && (t.emit("newListener", e, r.listener ? r.listener : r), a = t._events), h = a[e]), h === void 0) h = a[e] = r, ++t._eventsCount;
    else if (typeof h == "function" ? h = a[e] = i ? [r, h] : [h, r] : i ? h.unshift(r) : h.push(r), n = So(t), n > 0 && h.length > n && !h.warned) {
        h.warned = !0;
        var c = new Error("Possible EventEmitter memory leak detected. " + h.length + " " + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit");
        c.name = "MaxListenersExceededWarning", c.emitter = t, c.type = e, c.count = h.length, Lc(c)
    }
    return t
}
Ie.prototype.addListener = function(e, r) {
    return xo(this, e, r, !1)
};
Ie.prototype.on = Ie.prototype.addListener;
Ie.prototype.prependListener = function(e, r) {
    return xo(this, e, r, !0)
};

function Nc() {
    if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
}

function Io(t, e, r) {
    var i = {
            fired: !1,
            wrapFn: void 0,
            target: t,
            type: e,
            listener: r
        },
        n = Nc.bind(i);
    return n.listener = r, i.wrapFn = n, n
}
Ie.prototype.once = function(e, r) {
    return di(r), this.on(e, Io(this, e, r)), this
};
Ie.prototype.prependOnceListener = function(e, r) {
    return di(r), this.prependListener(e, Io(this, e, r)), this
};
Ie.prototype.removeListener = function(e, r) {
    var i, n, a, h, c;
    if (di(r), n = this._events, n === void 0) return this;
    if (i = n[e], i === void 0) return this;
    if (i === r || i.listener === r) --this._eventsCount === 0 ? this._events = Object.create(null) : (delete n[e], n.removeListener && this.emit("removeListener", e, i.listener || r));
    else if (typeof i != "function") {
        for (a = -1, h = i.length - 1; h >= 0; h--)
            if (i[h] === r || i[h].listener === r) {
                c = i[h].listener, a = h;
                break
            }
        if (a < 0) return this;
        a === 0 ? i.shift() : Fc(i, a), i.length === 1 && (n[e] = i[0]), n.removeListener !== void 0 && this.emit("removeListener", e, c || r)
    }
    return this
};
Ie.prototype.off = Ie.prototype.removeListener;
Ie.prototype.removeAllListeners = function(e) {
    var r, i, n;
    if (i = this._events, i === void 0) return this;
    if (i.removeListener === void 0) return arguments.length === 0 ? (this._events = Object.create(null), this._eventsCount = 0) : i[e] !== void 0 && (--this._eventsCount === 0 ? this._events = Object.create(null) : delete i[e]), this;
    if (arguments.length === 0) {
        var a = Object.keys(i),
            h;
        for (n = 0; n < a.length; ++n) h = a[n], h !== "removeListener" && this.removeAllListeners(h);
        return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this
    }
    if (r = i[e], typeof r == "function") this.removeListener(e, r);
    else if (r !== void 0)
        for (n = r.length - 1; n >= 0; n--) this.removeListener(e, r[n]);
    return this
};

function Oo(t, e, r) {
    var i = t._events;
    if (i === void 0) return [];
    var n = i[e];
    return n === void 0 ? [] : typeof n == "function" ? r ? [n.listener || n] : [n] : r ? Rc(n) : Co(n, n.length)
}
Ie.prototype.listeners = function(e) {
    return Oo(this, e, !0)
};
Ie.prototype.rawListeners = function(e) {
    return Oo(this, e, !1)
};
Ie.listenerCount = function(t, e) {
    return typeof t.listenerCount == "function" ? t.listenerCount(e) : Ao.call(t, e)
};
Ie.prototype.listenerCount = Ao;

function Ao(t) {
    var e = this._events;
    if (e !== void 0) {
        var r = e[t];
        if (typeof r == "function") return 1;
        if (r !== void 0) return r.length
    }
    return 0
}
Ie.prototype.eventNames = function() {
    return this._eventsCount > 0 ? ri(this._events) : []
};

function Co(t, e) {
    for (var r = new Array(e), i = 0; i < e; ++i) r[i] = t[i];
    return r
}

function Fc(t, e) {
    for (; e + 1 < t.length; e++) t[e] = t[e + 1];
    t.pop()
}

function Rc(t) {
    for (var e = new Array(t.length), r = 0; r < e.length; ++r) e[r] = t[r].listener || t[r];
    return e
}

function Uc(t, e) {
    return new Promise(function(r, i) {
        function n(h) {
            t.removeListener(e, a), i(h)
        }

        function a() {
            typeof t.removeListener == "function" && t.removeListener("error", n), r([].slice.call(arguments))
        }
        To(t, e, a, {
            once: !0
        }), e !== "error" && Mc(t, n, {
            once: !0
        })
    })
}

function Mc(t, e, r) {
    typeof t.on == "function" && To(t, "error", e, r)
}

function To(t, e, r, i) {
    if (typeof t.on == "function") i.once ? t.once(e, r) : t.on(e, r);
    else if (typeof t.addEventListener == "function") t.addEventListener(e, function n(a) {
        i.once && t.removeEventListener(e, n), r(a)
    });
    else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof t)
}
var Lt = pn.exports;
const $c = dn(Lt),
    jc = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,
    Bc = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,
    zc = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;

function Kc(t, e) {
    if (t === "__proto__" || t === "constructor" && e && typeof e == "object" && "prototype" in e) {
        Hc(t);
        return
    }
    return e
}

function Hc(t) {
    console.warn(`[destr] Dropping "${t}" key to prevent prototype pollution.`)
}

function Jr(t, e = {}) {
    if (typeof t != "string") return t;
    const r = t.trim();
    if (t[0] === '"' && t.endsWith('"') && !t.includes("\\")) return r.slice(1, -1);
    if (r.length <= 9) {
        const i = r.toLowerCase();
        if (i === "true") return !0;
        if (i === "false") return !1;
        if (i === "undefined") return;
        if (i === "null") return null;
        if (i === "nan") return Number.NaN;
        if (i === "infinity") return Number.POSITIVE_INFINITY;
        if (i === "-infinity") return Number.NEGATIVE_INFINITY
    }
    if (!zc.test(t)) {
        if (e.strict) throw new SyntaxError("[destr] Invalid JSON");
        return t
    }
    try {
        if (jc.test(t) || Bc.test(t)) {
            if (e.strict) throw new Error("[destr] Possible prototype pollution");
            return JSON.parse(t, Kc)
        }
        return JSON.parse(t)
    } catch (i) {
        if (e.strict) throw i;
        return t
    }
}

function Wc(t) {
    return !t || typeof t.then != "function" ? Promise.resolve(t) : t
}

function Xe(t, ...e) {
    try {
        return Wc(t(...e))
    } catch (r) {
        return Promise.reject(r)
    }
}

function kc(t) {
    const e = typeof t;
    return t === null || e !== "object" && e !== "function"
}

function qc(t) {
    const e = Object.getPrototypeOf(t);
    return !e || e.isPrototypeOf(Object)
}

function ii(t) {
    if (kc(t)) return String(t);
    if (qc(t) || Array.isArray(t)) return JSON.stringify(t);
    if (typeof t.toJSON == "function") return ii(t.toJSON());
    throw new Error("[unstorage] Cannot stringify value!")
}

function Po() {
    if (typeof Buffer === void 0) throw new TypeError("[unstorage] Buffer is not supported!")
}
const Hi = "base64:";

function Vc(t) {
    if (typeof t == "string") return t;
    Po();
    const e = Buffer.from(t).toString("base64");
    return Hi + e
}

function Gc(t) {
    return typeof t != "string" || !t.startsWith(Hi) ? t : (Po(), Buffer.from(t.slice(Hi.length), "base64"))
}

function ct(t) {
    return t ? t.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "") : ""
}

function Yc(...t) {
    return ct(t.join(":"))
}

function Xr(t) {
    return t = ct(t), t ? t + ":" : ""
}
const Jc = "memory",
    Xc = () => {
        const t = new Map;
        return {
            name: Jc,
            options: {},
            hasItem(e) {
                return t.has(e)
            },
            getItem(e) {
                var r;
                return (r = t.get(e)) != null ? r : null
            },
            getItemRaw(e) {
                var r;
                return (r = t.get(e)) != null ? r : null
            },
            setItem(e, r) {
                t.set(e, r)
            },
            setItemRaw(e, r) {
                t.set(e, r)
            },
            removeItem(e) {
                t.delete(e)
            },
            getKeys() {
                return Array.from(t.keys())
            },
            clear() {
                t.clear()
            },
            dispose() {
                t.clear()
            }
        }
    };

function Qc(t = {}) {
    const e = {
            mounts: {
                "": t.driver || Xc()
            },
            mountpoints: [""],
            watching: !1,
            watchListeners: [],
            unwatch: {}
        },
        r = u => {
            for (const f of e.mountpoints)
                if (u.startsWith(f)) return {
                    base: f,
                    relativeKey: u.slice(f.length),
                    driver: e.mounts[f]
                };
            return {
                base: "",
                relativeKey: u,
                driver: e.mounts[""]
            }
        },
        i = (u, f) => e.mountpoints.filter(y => y.startsWith(u) || f && u.startsWith(y)).map(y => ({
            relativeBase: u.length > y.length ? u.slice(y.length) : void 0,
            mountpoint: y,
            driver: e.mounts[y]
        })),
        n = (u, f) => {
            if (e.watching) {
                f = ct(f);
                for (const y of e.watchListeners) y(u, f)
            }
        },
        a = async () => {
            if (!e.watching) {
                e.watching = !0;
                for (const u in e.mounts) e.unwatch[u] = await Vn(e.mounts[u], n, u)
            }
        },
        h = async () => {
            if (e.watching) {
                for (const u in e.unwatch) await e.unwatch[u]();
                e.unwatch = {}, e.watching = !1
            }
        },
        c = (u, f, y) => {
            const b = new Map,
                w = E => {
                    let T = b.get(E.base);
                    return T || (T = {
                        driver: E.driver,
                        base: E.base,
                        items: []
                    }, b.set(E.base, T)), T
                };
            for (const E of u) {
                const T = typeof E == "string",
                    F = ct(T ? E : E.key),
                    j = T ? void 0 : E.value,
                    D = T || !E.options ? f : Ee(Ee({}, f), E.options),
                    O = r(F);
                w(O).items.push({
                    key: F,
                    value: j,
                    relativeKey: O.relativeKey,
                    options: D
                })
            }
            return Promise.all([...b.values()].map(E => y(E))).then(E => E.flat())
        },
        l = {
            hasItem(u, f = {}) {
                u = ct(u);
                const {
                    relativeKey: y,
                    driver: b
                } = r(u);
                return Xe(b.hasItem, y, f)
            },
            getItem(u, f = {}) {
                u = ct(u);
                const {
                    relativeKey: y,
                    driver: b
                } = r(u);
                return Xe(b.getItem, y, f).then(w => Jr(w))
            },
            getItems(u, f) {
                return c(u, f, y => y.driver.getItems ? Xe(y.driver.getItems, y.items.map(b => ({
                    key: b.relativeKey,
                    options: b.options
                })), f).then(b => b.map(w => ({
                    key: Yc(y.base, w.key),
                    value: Jr(w.value)
                }))) : Promise.all(y.items.map(b => Xe(y.driver.getItem, b.relativeKey, b.options).then(w => ({
                    key: b.key,
                    value: Jr(w)
                })))))
            },
            getItemRaw(u, f = {}) {
                u = ct(u);
                const {
                    relativeKey: y,
                    driver: b
                } = r(u);
                return b.getItemRaw ? Xe(b.getItemRaw, y, f) : Xe(b.getItem, y, f).then(w => Gc(w))
            },
            async setItem(u, f, y = {}) {
                if (f === void 0) return l.removeItem(u);
                u = ct(u);
                const {
                    relativeKey: b,
                    driver: w
                } = r(u);
                w.setItem && (await Xe(w.setItem, b, ii(f), y), w.watch || n("update", u))
            },
            async setItems(u, f) {
                await c(u, f, async y => {
                    if (y.driver.setItems) return Xe(y.driver.setItems, y.items.map(b => ({
                        key: b.relativeKey,
                        value: ii(b.value),
                        options: b.options
                    })), f);
                    y.driver.setItem && await Promise.all(y.items.map(b => Xe(y.driver.setItem, b.relativeKey, ii(b.value), b.options)))
                })
            },
            async setItemRaw(u, f, y = {}) {
                if (f === void 0) return l.removeItem(u, y);
                u = ct(u);
                const {
                    relativeKey: b,
                    driver: w
                } = r(u);
                if (w.setItemRaw) await Xe(w.setItemRaw, b, f, y);
                else if (w.setItem) await Xe(w.setItem, b, Vc(f), y);
                else return;
                w.watch || n("update", u)
            },
            async removeItem(u, f = {}) {
                typeof f == "boolean" && (f = {
                    removeMeta: f
                }), u = ct(u);
                const {
                    relativeKey: y,
                    driver: b
                } = r(u);
                b.removeItem && (await Xe(b.removeItem, y, f), (f.removeMeta || f.removeMata) && await Xe(b.removeItem, y + "$", f), b.watch || n("remove", u))
            },
            async getMeta(u, f = {}) {
                typeof f == "boolean" && (f = {
                    nativeOnly: f
                }), u = ct(u);
                const {
                    relativeKey: y,
                    driver: b
                } = r(u), w = Object.create(null);
                if (b.getMeta && Object.assign(w, await Xe(b.getMeta, y, f)), !f.nativeOnly) {
                    const E = await Xe(b.getItem, y + "$", f).then(T => Jr(T));
                    E && typeof E == "object" && (typeof E.atime == "string" && (E.atime = new Date(E.atime)), typeof E.mtime == "string" && (E.mtime = new Date(E.mtime)), Object.assign(w, E))
                }
                return w
            },
            setMeta(u, f, y = {}) {
                return this.setItem(u + "$", f, y)
            },
            removeMeta(u, f = {}) {
                return this.removeItem(u + "$", f)
            },
            async getKeys(u, f = {}) {
                u = Xr(u);
                const y = i(u, !0);
                let b = [];
                const w = [];
                for (const E of y) {
                    const F = (await Xe(E.driver.getKeys, E.relativeBase, f)).map(j => E.mountpoint + ct(j)).filter(j => !b.some(D => j.startsWith(D)));
                    w.push(...F), b = [E.mountpoint, ...b.filter(j => !j.startsWith(E.mountpoint))]
                }
                return u ? w.filter(E => E.startsWith(u) && !E.endsWith("$")) : w.filter(E => !E.endsWith("$"))
            },
            async clear(u, f = {}) {
                u = Xr(u), await Promise.all(i(u, !1).map(async y => {
                    if (y.driver.clear) return Xe(y.driver.clear, y.relativeBase, f);
                    if (y.driver.removeItem) {
                        const b = await y.driver.getKeys(y.relativeBase || "", f);
                        return Promise.all(b.map(w => y.driver.removeItem(w, f)))
                    }
                }))
            },
            async dispose() {
                await Promise.all(Object.values(e.mounts).map(u => Gn(u)))
            },
            async watch(u) {
                return await a(), e.watchListeners.push(u), async () => {
                    e.watchListeners = e.watchListeners.filter(f => f !== u), e.watchListeners.length === 0 && await h()
                }
            },
            async unwatch() {
                e.watchListeners = [], await h()
            },
            mount(u, f) {
                if (u = Xr(u), u && e.mounts[u]) throw new Error(`already mounted at ${u}`);
                return u && (e.mountpoints.push(u), e.mountpoints.sort((y, b) => b.length - y.length)), e.mounts[u] = f, e.watching && Promise.resolve(Vn(f, n, u)).then(y => {
                    e.unwatch[u] = y
                }).catch(console.error), l
            },
            async unmount(u, f = !0) {
                u = Xr(u), !(!u || !e.mounts[u]) && (e.watching && u in e.unwatch && (e.unwatch[u](), delete e.unwatch[u]), f && await Gn(e.mounts[u]), e.mountpoints = e.mountpoints.filter(y => y !== u), delete e.mounts[u])
            },
            getMount(u = "") {
                u = ct(u) + ":";
                const f = r(u);
                return {
                    driver: f.driver,
                    base: f.base
                }
            },
            getMounts(u = "", f = {}) {
                return u = ct(u), i(u, f.parents).map(b => ({
                    driver: b.driver,
                    base: b.mountpoint
                }))
            }
        };
    return l
}

function Vn(t, e, r) {
    return t.watch ? t.watch((i, n) => e(i, r + n)) : () => {}
}
async function Gn(t) {
    typeof t.dispose == "function" && await Xe(t.dispose)
}

function ir(t) {
    return new Promise((e, r) => {
        t.oncomplete = t.onsuccess = () => e(t.result), t.onabort = t.onerror = () => r(t.error)
    })
}

function Lo(t, e) {
    const r = indexedDB.open(t);
    r.onupgradeneeded = () => r.result.createObjectStore(e);
    const i = ir(r);
    return (n, a) => i.then(h => a(h.transaction(e, n).objectStore(e)))
}
let Si;

function Fr() {
    return Si || (Si = Lo("keyval-store", "keyval")), Si
}

function Yn(t, e = Fr()) {
    return e("readonly", r => ir(r.get(t)))
}

function Zc(t, e, r = Fr()) {
    return r("readwrite", i => (i.put(e, t), ir(i.transaction)))
}

function eu(t, e = Fr()) {
    return e("readwrite", r => (r.delete(t), ir(r.transaction)))
}

function tu(t = Fr()) {
    return t("readwrite", e => (e.clear(), ir(e.transaction)))
}

function ru(t, e) {
    return t.openCursor().onsuccess = function() {
        this.result && (e(this.result), this.result.continue())
    }, ir(t.transaction)
}

function iu(t = Fr()) {
    return t("readonly", e => {
        if (e.getAllKeys) return ir(e.getAllKeys());
        const r = [];
        return ru(e, i => r.push(i.key)).then(() => r)
    })
}
const nu = t => JSON.stringify(t, (e, r) => typeof r == "bigint" ? r.toString() + "n" : r),
    su = t => {
        const e = /([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g,
            r = t.replace(e, '$1"$2n"$3');
        return JSON.parse(r, (i, n) => typeof n == "string" && n.match(/^\d+n$/) ? BigInt(n.substring(0, n.length - 1)) : n)
    };

function gi(t) {
    if (typeof t != "string") throw new Error(`Cannot safe json parse value of type ${typeof t}`);
    try {
        return su(t)
    } catch (e) {
        return t
    }
}

function Rr(t) {
    return typeof t == "string" ? t : nu(t) || ""
}
const ou = "idb-keyval";
var au = (t = {}) => {
    const e = t.base && t.base.length > 0 ? `${t.base}:` : "",
        r = n => e + n;
    let i;
    return t.dbName && t.storeName && (i = Lo(t.dbName, t.storeName)), {
        name: ou,
        options: t,
        async hasItem(n) {
            return !(typeof await Yn(r(n), i) > "u")
        },
        async getItem(n) {
            var a;
            return (a = await Yn(r(n), i)) != null ? a : null
        },
        setItem(n, a) {
            return Zc(r(n), a, i)
        },
        removeItem(n) {
            return eu(r(n), i)
        },
        getKeys() {
            return iu(i)
        },
        clear() {
            return tu(i)
        }
    }
};
const cu = "WALLET_CONNECT_V2_INDEXED_DB",
    uu = "keyvaluestorage";
let hu = class {
    constructor() {
        this.indexedDb = Qc({
            driver: au({
                dbName: cu,
                storeName: uu
            })
        })
    }
    async getKeys() {
        return this.indexedDb.getKeys()
    }
    async getEntries() {
        return (await this.indexedDb.getItems(await this.indexedDb.getKeys())).map(e => [e.key, e.value])
    }
    async getItem(e) {
        const r = await this.indexedDb.getItem(e);
        if (r !== null) return r
    }
    async setItem(e, r) {
        await this.indexedDb.setItem(e, Rr(r))
    }
    async removeItem(e) {
        await this.indexedDb.removeItem(e)
    }
};
var xi = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {},
    ni = {
        exports: {}
    };
(function() {
    let t;

    function e() {}
    t = e, t.prototype.getItem = function(r) {
        return this.hasOwnProperty(r) ? String(this[r]) : null
    }, t.prototype.setItem = function(r, i) {
        this[r] = String(i)
    }, t.prototype.removeItem = function(r) {
        delete this[r]
    }, t.prototype.clear = function() {
        const r = this;
        Object.keys(r).forEach(function(i) {
            r[i] = void 0, delete r[i]
        })
    }, t.prototype.key = function(r) {
        return r = r || 0, Object.keys(this)[r]
    }, t.prototype.__defineGetter__("length", function() {
        return Object.keys(this).length
    }), typeof xi < "u" && xi.localStorage ? ni.exports = xi.localStorage : typeof window < "u" && window.localStorage ? ni.exports = window.localStorage : ni.exports = new e
})();

function lu(t) {
    var e;
    return [t[0], gi((e = t[1]) != null ? e : "")]
}
let fu = class {
    constructor() {
        this.localStorage = ni.exports
    }
    async getKeys() {
        return Object.keys(this.localStorage)
    }
    async getEntries() {
        return Object.entries(this.localStorage).map(lu)
    }
    async getItem(e) {
        const r = this.localStorage.getItem(e);
        if (r !== null) return gi(r)
    }
    async setItem(e, r) {
        this.localStorage.setItem(e, Rr(r))
    }
    async removeItem(e) {
        this.localStorage.removeItem(e)
    }
};
const du = "wc_storage_version",
    Jn = 1,
    gu = async (t, e, r) => {
        const i = du,
            n = await e.getItem(i);
        if (n && n >= Jn) {
            r(e);
            return
        }
        const a = await t.getKeys();
        if (!a.length) {
            r(e);
            return
        }
        const h = [];
        for (; a.length;) {
            const c = a.shift();
            if (!c) continue;
            const l = c.toLowerCase();
            if (l.includes("wc@") || l.includes("walletconnect") || l.includes("wc_") || l.includes("wallet_connect")) {
                const u = await t.getItem(c);
                await e.setItem(c, u), h.push(c)
            }
        }
        await e.setItem(i, Jn), r(e), pu(t, h)
    },
    pu = async (t, e) => {
        e.length && e.forEach(async r => {
            await t.removeItem(r)
        })
    };
let yu = class {
    constructor() {
        this.initialized = !1, this.setInitialized = r => {
            this.storage = r, this.initialized = !0
        };
        const e = new fu;
        this.storage = e;
        try {
            const r = new hu;
            gu(e, r, this.setInitialized)
        } catch (r) {
            this.initialized = !0
        }
    }
    async getKeys() {
        return await this.initialize(), this.storage.getKeys()
    }
    async getEntries() {
        return await this.initialize(), this.storage.getEntries()
    }
    async getItem(e) {
        return await this.initialize(), this.storage.getItem(e)
    }
    async setItem(e, r) {
        return await this.initialize(), this.storage.setItem(e, r)
    }
    async removeItem(e) {
        return await this.initialize(), this.storage.removeItem(e)
    }
    async initialize() {
        this.initialized || await new Promise(e => {
            const r = setInterval(() => {
                this.initialized && (clearInterval(r), e())
            }, 20)
        })
    }
};
var fr = {};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var Wi = function(t, e) {
    return Wi = Object.setPrototypeOf || {
        __proto__: []
    }
    instanceof Array && function(r, i) {
        r.__proto__ = i
    } || function(r, i) {
        for (var n in i) i.hasOwnProperty(n) && (r[n] = i[n])
    }, Wi(t, e)
};

function bu(t, e) {
    Wi(t, e);

    function r() {
        this.constructor = t
    }
    t.prototype = e === null ? Object.create(e) : (r.prototype = e.prototype, new r)
}
var ki = function() {
    return ki = Object.assign || function(e) {
        for (var r, i = 1, n = arguments.length; i < n; i++) {
            r = arguments[i];
            for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a])
        }
        return e
    }, ki.apply(this, arguments)
};

function mu(t, e) {
    var r = {};
    for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && e.indexOf(i) < 0 && (r[i] = t[i]);
    if (t != null && typeof Object.getOwnPropertySymbols == "function")
        for (var n = 0, i = Object.getOwnPropertySymbols(t); n < i.length; n++) e.indexOf(i[n]) < 0 && Object.prototype.propertyIsEnumerable.call(t, i[n]) && (r[i[n]] = t[i[n]]);
    return r
}

function vu(t, e, r, i) {
    var n = arguments.length,
        a = n < 3 ? e : i === null ? i = Object.getOwnPropertyDescriptor(e, r) : i,
        h;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function") a = Reflect.decorate(t, e, r, i);
    else
        for (var c = t.length - 1; c >= 0; c--)(h = t[c]) && (a = (n < 3 ? h(a) : n > 3 ? h(e, r, a) : h(e, r)) || a);
    return n > 3 && a && Object.defineProperty(e, r, a), a
}

function wu(t, e) {
    return function(r, i) {
        e(r, i, t)
    }
}

function _u(t, e) {
    if (typeof Reflect == "object" && typeof Reflect.metadata == "function") return Reflect.metadata(t, e)
}

function Eu(t, e, r, i) {
    function n(a) {
        return a instanceof r ? a : new r(function(h) {
            h(a)
        })
    }
    return new(r || (r = Promise))(function(a, h) {
        function c(f) {
            try {
                u(i.next(f))
            } catch (y) {
                h(y)
            }
        }

        function l(f) {
            try {
                u(i.throw(f))
            } catch (y) {
                h(y)
            }
        }

        function u(f) {
            f.done ? a(f.value) : n(f.value).then(c, l)
        }
        u((i = i.apply(t, e || [])).next())
    })
}

function Du(t, e) {
    var r = {
            label: 0,
            sent: function() {
                if (a[0] & 1) throw a[1];
                return a[1]
            },
            trys: [],
            ops: []
        },
        i, n, a, h;
    return h = {
        next: c(0),
        throw: c(1),
        return: c(2)
    }, typeof Symbol == "function" && (h[Symbol.iterator] = function() {
        return this
    }), h;

    function c(u) {
        return function(f) {
            return l([u, f])
        }
    }

    function l(u) {
        if (i) throw new TypeError("Generator is already executing.");
        for (; r;) try {
            if (i = 1, n && (a = u[0] & 2 ? n.return : u[0] ? n.throw || ((a = n.return) && a.call(n), 0) : n.next) && !(a = a.call(n, u[1])).done) return a;
            switch (n = 0, a && (u = [u[0] & 2, a.value]), u[0]) {
                case 0:
                case 1:
                    a = u;
                    break;
                case 4:
                    return r.label++, {
                        value: u[1],
                        done: !1
                    };
                case 5:
                    r.label++, n = u[1], u = [0];
                    continue;
                case 7:
                    u = r.ops.pop(), r.trys.pop();
                    continue;
                default:
                    if (a = r.trys, !(a = a.length > 0 && a[a.length - 1]) && (u[0] === 6 || u[0] === 2)) {
                        r = 0;
                        continue
                    }
                    if (u[0] === 3 && (!a || u[1] > a[0] && u[1] < a[3])) {
                        r.label = u[1];
                        break
                    }
                    if (u[0] === 6 && r.label < a[1]) {
                        r.label = a[1], a = u;
                        break
                    }
                    if (a && r.label < a[2]) {
                        r.label = a[2], r.ops.push(u);
                        break
                    }
                    a[2] && r.ops.pop(), r.trys.pop();
                    continue
            }
            u = e.call(t, r)
        } catch (f) {
            u = [6, f], n = 0
        } finally {
            i = a = 0
        }
        if (u[0] & 5) throw u[1];
        return {
            value: u[0] ? u[1] : void 0,
            done: !0
        }
    }
}

function Su(t, e, r, i) {
    i === void 0 && (i = r), t[i] = e[r]
}

function xu(t, e) {
    for (var r in t) r !== "default" && !e.hasOwnProperty(r) && (e[r] = t[r])
}

function qi(t) {
    var e = typeof Symbol == "function" && Symbol.iterator,
        r = e && t[e],
        i = 0;
    if (r) return r.call(t);
    if (t && typeof t.length == "number") return {
        next: function() {
            return t && i >= t.length && (t = void 0), {
                value: t && t[i++],
                done: !t
            }
        }
    };
    throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
}

function No(t, e) {
    var r = typeof Symbol == "function" && t[Symbol.iterator];
    if (!r) return t;
    var i = r.call(t),
        n, a = [],
        h;
    try {
        for (;
            (e === void 0 || e-- > 0) && !(n = i.next()).done;) a.push(n.value)
    } catch (c) {
        h = {
            error: c
        }
    } finally {
        try {
            n && !n.done && (r = i.return) && r.call(i)
        } finally {
            if (h) throw h.error
        }
    }
    return a
}

function Iu() {
    for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(No(arguments[e]));
    return t
}

function Ou() {
    for (var t = 0, e = 0, r = arguments.length; e < r; e++) t += arguments[e].length;
    for (var i = Array(t), n = 0, e = 0; e < r; e++)
        for (var a = arguments[e], h = 0, c = a.length; h < c; h++, n++) i[n] = a[h];
    return i
}

function Tr(t) {
    return this instanceof Tr ? (this.v = t, this) : new Tr(t)
}

function Au(t, e, r) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var i = r.apply(t, e || []),
        n, a = [];
    return n = {}, h("next"), h("throw"), h("return"), n[Symbol.asyncIterator] = function() {
        return this
    }, n;

    function h(b) {
        i[b] && (n[b] = function(w) {
            return new Promise(function(E, T) {
                a.push([b, w, E, T]) > 1 || c(b, w)
            })
        })
    }

    function c(b, w) {
        try {
            l(i[b](w))
        } catch (E) {
            y(a[0][3], E)
        }
    }

    function l(b) {
        b.value instanceof Tr ? Promise.resolve(b.value.v).then(u, f) : y(a[0][2], b)
    }

    function u(b) {
        c("next", b)
    }

    function f(b) {
        c("throw", b)
    }

    function y(b, w) {
        b(w), a.shift(), a.length && c(a[0][0], a[0][1])
    }
}

function Cu(t) {
    var e, r;
    return e = {}, i("next"), i("throw", function(n) {
        throw n
    }), i("return"), e[Symbol.iterator] = function() {
        return this
    }, e;

    function i(n, a) {
        e[n] = t[n] ? function(h) {
            return (r = !r) ? {
                value: Tr(t[n](h)),
                done: n === "return"
            } : a ? a(h) : h
        } : a
    }
}

function Tu(t) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var e = t[Symbol.asyncIterator],
        r;
    return e ? e.call(t) : (t = typeof qi == "function" ? qi(t) : t[Symbol.iterator](), r = {}, i("next"), i("throw"), i("return"), r[Symbol.asyncIterator] = function() {
        return this
    }, r);

    function i(a) {
        r[a] = t[a] && function(h) {
            return new Promise(function(c, l) {
                h = t[a](h), n(c, l, h.done, h.value)
            })
        }
    }

    function n(a, h, c, l) {
        Promise.resolve(l).then(function(u) {
            a({
                value: u,
                done: c
            })
        }, h)
    }
}

function Pu(t, e) {
    return Object.defineProperty ? Object.defineProperty(t, "raw", {
        value: e
    }) : t.raw = e, t
}

function Lu(t) {
    if (t && t.__esModule) return t;
    var e = {};
    if (t != null)
        for (var r in t) Object.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    return e.default = t, e
}

function Nu(t) {
    return t && t.__esModule ? t : {
        default: t
    }
}

function Fu(t, e) {
    if (!e.has(t)) throw new TypeError("attempted to get private field on non-instance");
    return e.get(t)
}

function Ru(t, e, r) {
    if (!e.has(t)) throw new TypeError("attempted to set private field on non-instance");
    return e.set(t, r), r
}
const Uu = Object.freeze(Object.defineProperty({
        __proto__: null,
        get __assign() {
            return ki
        },
        __asyncDelegator: Cu,
        __asyncGenerator: Au,
        __asyncValues: Tu,
        __await: Tr,
        __awaiter: Eu,
        __classPrivateFieldGet: Fu,
        __classPrivateFieldSet: Ru,
        __createBinding: Su,
        __decorate: vu,
        __exportStar: xu,
        __extends: bu,
        __generator: Du,
        __importDefault: Nu,
        __importStar: Lu,
        __makeTemplateObject: Pu,
        __metadata: _u,
        __param: wu,
        __read: No,
        __rest: mu,
        __spread: Iu,
        __spreadArrays: Ou,
        __values: qi
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Nt = gn(Uu);
var _r = {},
    ee = {},
    Ii = {},
    Er = {},
    Xn;

function Mu() {
    if (Xn) return Er;
    Xn = 1, Object.defineProperty(Er, "__esModule", {
        value: !0
    }), Er.delay = void 0;

    function t(e) {
        return new Promise(r => {
            setTimeout(() => {
                r(!0)
            }, e)
        })
    }
    return Er.delay = t, Er
}
var Jt = {},
    Oi = {},
    Xt = {},
    Qn;

function $u() {
    return Qn || (Qn = 1, Object.defineProperty(Xt, "__esModule", {
        value: !0
    }), Xt.ONE_THOUSAND = Xt.ONE_HUNDRED = void 0, Xt.ONE_HUNDRED = 100, Xt.ONE_THOUSAND = 1e3), Xt
}
var Ai = {},
    Zn;

function ju() {
    return Zn || (Zn = 1, function(t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.ONE_YEAR = t.FOUR_WEEKS = t.THREE_WEEKS = t.TWO_WEEKS = t.ONE_WEEK = t.THIRTY_DAYS = t.SEVEN_DAYS = t.FIVE_DAYS = t.THREE_DAYS = t.ONE_DAY = t.TWENTY_FOUR_HOURS = t.TWELVE_HOURS = t.SIX_HOURS = t.THREE_HOURS = t.ONE_HOUR = t.SIXTY_MINUTES = t.THIRTY_MINUTES = t.TEN_MINUTES = t.FIVE_MINUTES = t.ONE_MINUTE = t.SIXTY_SECONDS = t.THIRTY_SECONDS = t.TEN_SECONDS = t.FIVE_SECONDS = t.ONE_SECOND = void 0, t.ONE_SECOND = 1, t.FIVE_SECONDS = 5, t.TEN_SECONDS = 10, t.THIRTY_SECONDS = 30, t.SIXTY_SECONDS = 60, t.ONE_MINUTE = t.SIXTY_SECONDS, t.FIVE_MINUTES = t.ONE_MINUTE * 5, t.TEN_MINUTES = t.ONE_MINUTE * 10, t.THIRTY_MINUTES = t.ONE_MINUTE * 30, t.SIXTY_MINUTES = t.ONE_MINUTE * 60, t.ONE_HOUR = t.SIXTY_MINUTES, t.THREE_HOURS = t.ONE_HOUR * 3, t.SIX_HOURS = t.ONE_HOUR * 6, t.TWELVE_HOURS = t.ONE_HOUR * 12, t.TWENTY_FOUR_HOURS = t.ONE_HOUR * 24, t.ONE_DAY = t.TWENTY_FOUR_HOURS, t.THREE_DAYS = t.ONE_DAY * 3, t.FIVE_DAYS = t.ONE_DAY * 5, t.SEVEN_DAYS = t.ONE_DAY * 7, t.THIRTY_DAYS = t.ONE_DAY * 30, t.ONE_WEEK = t.SEVEN_DAYS, t.TWO_WEEKS = t.ONE_WEEK * 2, t.THREE_WEEKS = t.ONE_WEEK * 3, t.FOUR_WEEKS = t.ONE_WEEK * 4, t.ONE_YEAR = t.ONE_DAY * 365
    }(Ai)), Ai
}
var es;

function Fo() {
    return es || (es = 1, function(t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        const e = Nt;
        e.__exportStar($u(), t), e.__exportStar(ju(), t)
    }(Oi)), Oi
}
var ts;

function Bu() {
    if (ts) return Jt;
    ts = 1, Object.defineProperty(Jt, "__esModule", {
        value: !0
    }), Jt.fromMiliseconds = Jt.toMiliseconds = void 0;
    const t = Fo();

    function e(i) {
        return i * t.ONE_THOUSAND
    }
    Jt.toMiliseconds = e;

    function r(i) {
        return Math.floor(i / t.ONE_THOUSAND)
    }
    return Jt.fromMiliseconds = r, Jt
}
var rs;

function zu() {
    return rs || (rs = 1, function(t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        const e = Nt;
        e.__exportStar(Mu(), t), e.__exportStar(Bu(), t)
    }(Ii)), Ii
}
var cr = {},
    is;

function Ku() {
    if (is) return cr;
    is = 1, Object.defineProperty(cr, "__esModule", {
        value: !0
    }), cr.Watch = void 0;
    class t {
        constructor() {
            this.timestamps = new Map
        }
        start(r) {
            if (this.timestamps.has(r)) throw new Error(`Watch already started for label: ${r}`);
            this.timestamps.set(r, {
                started: Date.now()
            })
        }
        stop(r) {
            const i = this.get(r);
            if (typeof i.elapsed != "undefined") throw new Error(`Watch already stopped for label: ${r}`);
            const n = Date.now() - i.started;
            this.timestamps.set(r, {
                started: i.started,
                elapsed: n
            })
        }
        get(r) {
            const i = this.timestamps.get(r);
            if (typeof i == "undefined") throw new Error(`No timestamp found for label: ${r}`);
            return i
        }
        elapsed(r) {
            const i = this.get(r);
            return i.elapsed || Date.now() - i.started
        }
    }
    return cr.Watch = t, cr.default = t, cr
}
var Ci = {},
    Dr = {},
    ns;

function Hu() {
    if (ns) return Dr;
    ns = 1, Object.defineProperty(Dr, "__esModule", {
        value: !0
    }), Dr.IWatch = void 0;
    class t {}
    return Dr.IWatch = t, Dr
}
var ss;

function Wu() {
    return ss || (ss = 1, function(t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), Nt.__exportStar(Hu(), t)
    }(Ci)), Ci
}(function(t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const e = Nt;
    e.__exportStar(zu(), t), e.__exportStar(Ku(), t), e.__exportStar(Wu(), t), e.__exportStar(Fo(), t)
})(ee);
var Ti = {},
    Sr = {};
let nr = class {};
const ku = Object.freeze(Object.defineProperty({
        __proto__: null,
        IEvents: nr
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    qu = gn(ku);
var os;

function Vu() {
    if (os) return Sr;
    os = 1, Object.defineProperty(Sr, "__esModule", {
        value: !0
    }), Sr.IHeartBeat = void 0;
    const t = qu;
    class e extends t.IEvents {
        constructor(i) {
            super()
        }
    }
    return Sr.IHeartBeat = e, Sr
}
var as;

function Ro() {
    return as || (as = 1, function(t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), Nt.__exportStar(Vu(), t)
    }(Ti)), Ti
}
var Pi = {},
    Qt = {},
    cs;

function Gu() {
    if (cs) return Qt;
    cs = 1, Object.defineProperty(Qt, "__esModule", {
        value: !0
    }), Qt.HEARTBEAT_EVENTS = Qt.HEARTBEAT_INTERVAL = void 0;
    const t = ee;
    return Qt.HEARTBEAT_INTERVAL = t.FIVE_SECONDS, Qt.HEARTBEAT_EVENTS = {
        pulse: "heartbeat_pulse"
    }, Qt
}
var us;

function Uo() {
    return us || (us = 1, function(t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), Nt.__exportStar(Gu(), t)
    }(Pi)), Pi
}
var hs;

function Yu() {
    if (hs) return _r;
    hs = 1, Object.defineProperty(_r, "__esModule", {
        value: !0
    }), _r.HeartBeat = void 0;
    const t = Nt,
        e = Lt,
        r = ee,
        i = Ro(),
        n = Uo();
    class a extends i.IHeartBeat {
        constructor(c) {
            super(c), this.events = new e.EventEmitter, this.interval = n.HEARTBEAT_INTERVAL, this.interval = (c == null ? void 0 : c.interval) || n.HEARTBEAT_INTERVAL
        }
        static init(c) {
            return t.__awaiter(this, void 0, void 0, function*() {
                const l = new a(c);
                return yield l.init(), l
            })
        }
        init() {
            return t.__awaiter(this, void 0, void 0, function*() {
                yield this.initialize()
            })
        }
        stop() {
            clearInterval(this.intervalRef)
        }
        on(c, l) {
            this.events.on(c, l)
        }
        once(c, l) {
            this.events.once(c, l)
        }
        off(c, l) {
            this.events.off(c, l)
        }
        removeListener(c, l) {
            this.events.removeListener(c, l)
        }
        initialize() {
            return t.__awaiter(this, void 0, void 0, function*() {
                this.intervalRef = setInterval(() => this.pulse(), r.toMiliseconds(this.interval))
            })
        }
        pulse() {
            this.events.emit(n.HEARTBEAT_EVENTS.pulse)
        }
    }
    return _r.HeartBeat = a, _r
}(function(t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const e = Nt;
    e.__exportStar(Yu(), t), e.__exportStar(Ro(), t), e.__exportStar(Uo(), t)
})(fr);
var xe = {},
    Li, ls;

function Ju() {
    if (ls) return Li;
    ls = 1;

    function t(r) {
        try {
            return JSON.stringify(r)
        } catch (i) {
            return '"[Circular]"'
        }
    }
    Li = e;

    function e(r, i, n) {
        var a = n && n.stringify || t,
            h = 1;
        if (typeof r == "object" && r !== null) {
            var c = i.length + h;
            if (c === 1) return r;
            var l = new Array(c);
            l[0] = a(r);
            for (var u = 1; u < c; u++) l[u] = a(i[u]);
            return l.join(" ")
        }
        if (typeof r != "string") return r;
        var f = i.length;
        if (f === 0) return r;
        for (var y = "", b = 1 - h, w = -1, E = r && r.length || 0, T = 0; T < E;) {
            if (r.charCodeAt(T) === 37 && T + 1 < E) {
                switch (w = w > -1 ? w : 0, r.charCodeAt(T + 1)) {
                    case 100:
                    case 102:
                        if (b >= f || i[b] == null) break;
                        w < T && (y += r.slice(w, T)), y += Number(i[b]), w = T + 2, T++;
                        break;
                    case 105:
                        if (b >= f || i[b] == null) break;
                        w < T && (y += r.slice(w, T)), y += Math.floor(Number(i[b])), w = T + 2, T++;
                        break;
                    case 79:
                    case 111:
                    case 106:
                        if (b >= f || i[b] === void 0) break;
                        w < T && (y += r.slice(w, T));
                        var F = typeof i[b];
                        if (F === "string") {
                            y += "'" + i[b] + "'", w = T + 2, T++;
                            break
                        }
                        if (F === "function") {
                            y += i[b].name || "<anonymous>", w = T + 2, T++;
                            break
                        }
                        y += a(i[b]), w = T + 2, T++;
                        break;
                    case 115:
                        if (b >= f) break;
                        w < T && (y += r.slice(w, T)), y += String(i[b]), w = T + 2, T++;
                        break;
                    case 37:
                        w < T && (y += r.slice(w, T)), y += "%", w = T + 2, T++, b--;
                        break
                }++b
            }++T
        }
        return w === -1 ? r : (w < E && (y += r.slice(w)), y)
    }
    return Li
}
var Ni, fs;

function Xu() {
    if (fs) return Ni;
    fs = 1;
    const t = Ju();
    Ni = n;
    const e = _().console || {},
        r = {
            mapHttpRequest: E,
            mapHttpResponse: E,
            wrapRequestSerializer: T,
            wrapResponseSerializer: T,
            wrapErrorSerializer: T,
            req: E,
            res: E,
            err: b
        };

    function i(g, s) {
        return Array.isArray(g) ? g.filter(function(N) {
            return N !== "!stdSerializers.err"
        }) : g === !0 ? Object.keys(s) : !1
    }

    function n(g) {
        g = g || {}, g.browser = g.browser || {};
        const s = g.browser.transmit;
        if (s && typeof s.send != "function") throw Error("pino: transmit option must have a send function");
        const d = g.browser.write || e;
        g.browser.write && (g.browser.asObject = !0);
        const N = g.serializers || {},
            L = i(g.browser.serialize, N);
        let R = g.browser.serialize;
        Array.isArray(g.browser.serialize) && g.browser.serialize.indexOf("!stdSerializers.err") > -1 && (R = !1);
        const W = ["error", "fatal", "warn", "info", "debug", "trace"];
        typeof d == "function" && (d.error = d.fatal = d.warn = d.info = d.debug = d.trace = d), g.enabled === !1 && (g.level = "silent");
        const V = g.level || "info",
            S = Object.create(d);
        S.log || (S.log = F), Object.defineProperty(S, "levelVal", {
            get: q
        }), Object.defineProperty(S, "level", {
            get: z,
            set: M
        });
        const P = {
            transmit: s,
            serialize: L,
            asObject: g.browser.asObject,
            levels: W,
            timestamp: w(g)
        };
        S.levels = n.levels, S.level = V, S.setMaxListeners = S.getMaxListeners = S.emit = S.addListener = S.on = S.prependListener = S.once = S.prependOnceListener = S.removeListener = S.removeAllListeners = S.listeners = S.listenerCount = S.eventNames = S.write = S.flush = F, S.serializers = N, S._serialize = L, S._stdErrSerialize = R, S.child = B, s && (S._logEvent = y());

        function q() {
            return this.level === "silent" ? 1 / 0 : this.levels.values[this.level]
        }

        function z() {
            return this._level
        }

        function M(U) {
            if (U !== "silent" && !this.levels.values[U]) throw Error("unknown level " + U);
            this._level = U, a(P, S, "error", "log"), a(P, S, "fatal", "error"), a(P, S, "warn", "error"), a(P, S, "info", "log"), a(P, S, "debug", "log"), a(P, S, "trace", "log")
        }

        function B(U, K) {
            if (!U) throw new Error("missing bindings for child Pino");
            K = K || {}, L && U.serializers && (K.serializers = U.serializers);
            const Z = K.serializers;
            if (L && Z) {
                var H = Object.assign({}, N, Z),
                    X = g.browser.serialize === !0 ? Object.keys(H) : L;
                delete U.serializers, l([U], X, H, this._stdErrSerialize)
            }

            function Y(Q) {
                this._childLevel = (Q._childLevel | 0) + 1, this.error = u(Q, U, "error"), this.fatal = u(Q, U, "fatal"), this.warn = u(Q, U, "warn"), this.info = u(Q, U, "info"), this.debug = u(Q, U, "debug"), this.trace = u(Q, U, "trace"), H && (this.serializers = H, this._serialize = X), s && (this._logEvent = y([].concat(Q._logEvent.bindings, U)))
            }
            return Y.prototype = this, new Y(this)
        }
        return S
    }
    n.levels = {
        values: {
            fatal: 60,
            error: 50,
            warn: 40,
            info: 30,
            debug: 20,
            trace: 10
        },
        labels: {
            10: "trace",
            20: "debug",
            30: "info",
            40: "warn",
            50: "error",
            60: "fatal"
        }
    }, n.stdSerializers = r, n.stdTimeFunctions = Object.assign({}, {
        nullTime: j,
        epochTime: D,
        unixTime: O,
        isoTime: m
    });

    function a(g, s, d, N) {
        const L = Object.getPrototypeOf(s);
        s[d] = s.levelVal > s.levels.values[d] ? F : L[d] ? L[d] : e[d] || e[N] || F, h(g, s, d)
    }

    function h(g, s, d) {
        !g.transmit && s[d] === F || (s[d] = function(N) {
            return function() {
                const R = g.timestamp(),
                    W = new Array(arguments.length),
                    V = Object.getPrototypeOf && Object.getPrototypeOf(this) === e ? e : this;
                for (var S = 0; S < W.length; S++) W[S] = arguments[S];
                if (g.serialize && !g.asObject && l(W, this._serialize, this.serializers, this._stdErrSerialize), g.asObject ? N.call(V, c(this, d, W, R)) : N.apply(V, W), g.transmit) {
                    const P = g.transmit.level || s.level,
                        q = n.levels.values[P],
                        z = n.levels.values[d];
                    if (z < q) return;
                    f(this, {
                        ts: R,
                        methodLevel: d,
                        methodValue: z,
                        transmitLevel: P,
                        transmitValue: n.levels.values[g.transmit.level || s.level],
                        send: g.transmit.send,
                        val: s.levelVal
                    }, W)
                }
            }
        }(s[d]))
    }

    function c(g, s, d, N) {
        g._serialize && l(d, g._serialize, g.serializers, g._stdErrSerialize);
        const L = d.slice();
        let R = L[0];
        const W = {};
        N && (W.time = N), W.level = n.levels.values[s];
        let V = (g._childLevel | 0) + 1;
        if (V < 1 && (V = 1), R !== null && typeof R == "object") {
            for (; V-- && typeof L[0] == "object";) Object.assign(W, L.shift());
            R = L.length ? t(L.shift(), L) : void 0
        } else typeof R == "string" && (R = t(L.shift(), L));
        return R !== void 0 && (W.msg = R), W
    }

    function l(g, s, d, N) {
        for (const L in g)
            if (N && g[L] instanceof Error) g[L] = n.stdSerializers.err(g[L]);
            else if (typeof g[L] == "object" && !Array.isArray(g[L]))
            for (const R in g[L]) s && s.indexOf(R) > -1 && R in d && (g[L][R] = d[R](g[L][R]))
    }

    function u(g, s, d) {
        return function() {
            const N = new Array(1 + arguments.length);
            N[0] = s;
            for (var L = 1; L < N.length; L++) N[L] = arguments[L - 1];
            return g[d].apply(this, N)
        }
    }

    function f(g, s, d) {
        const N = s.send,
            L = s.ts,
            R = s.methodLevel,
            W = s.methodValue,
            V = s.val,
            S = g._logEvent.bindings;
        l(d, g._serialize || Object.keys(g.serializers), g.serializers, g._stdErrSerialize === void 0 ? !0 : g._stdErrSerialize), g._logEvent.ts = L, g._logEvent.messages = d.filter(function(P) {
            return S.indexOf(P) === -1
        }), g._logEvent.level.label = R, g._logEvent.level.value = W, N(R, g._logEvent, V), g._logEvent = y(S)
    }

    function y(g) {
        return {
            ts: 0,
            messages: [],
            bindings: g || [],
            level: {
                label: "",
                value: 0
            }
        }
    }

    function b(g) {
        const s = {
            type: g.constructor.name,
            msg: g.message,
            stack: g.stack
        };
        for (const d in g) s[d] === void 0 && (s[d] = g[d]);
        return s
    }

    function w(g) {
        return typeof g.timestamp == "function" ? g.timestamp : g.timestamp === !1 ? j : D
    }

    function E() {
        return {}
    }

    function T(g) {
        return g
    }

    function F() {}

    function j() {
        return !1
    }

    function D() {
        return Date.now()
    }

    function O() {
        return Math.round(Date.now() / 1e3)
    }

    function m() {
        return new Date(Date.now()).toISOString()
    }

    function _() {
        function g(s) {
            return typeof s != "undefined" && s
        }
        try {
            return typeof globalThis != "undefined" || Object.defineProperty(Object.prototype, "globalThis", {
                get: function() {
                    return delete Object.prototype.globalThis, this.globalThis = this
                },
                configurable: !0
            }), globalThis
        } catch (s) {
            return g(self) || g(window) || g(this) || {}
        }
    }
    return Ni
}
var Zt = {},
    ds;

function Mo() {
    return ds || (ds = 1, Object.defineProperty(Zt, "__esModule", {
        value: !0
    }), Zt.PINO_CUSTOM_CONTEXT_KEY = Zt.PINO_LOGGER_DEFAULTS = void 0, Zt.PINO_LOGGER_DEFAULTS = {
        level: "info"
    }, Zt.PINO_CUSTOM_CONTEXT_KEY = "custom_context"), Zt
}
var st = {},
    gs;

function Qu() {
    if (gs) return st;
    gs = 1, Object.defineProperty(st, "__esModule", {
        value: !0
    }), st.generateChildLogger = st.formatChildLoggerContext = st.getLoggerContext = st.setBrowserLoggerContext = st.getBrowserLoggerContext = st.getDefaultLoggerOptions = void 0;
    const t = Mo();

    function e(c) {
        return Object.assign(Object.assign({}, c), {
            level: (c == null ? void 0 : c.level) || t.PINO_LOGGER_DEFAULTS.level
        })
    }
    st.getDefaultLoggerOptions = e;

    function r(c, l = t.PINO_CUSTOM_CONTEXT_KEY) {
        return c[l] || ""
    }
    st.getBrowserLoggerContext = r;

    function i(c, l, u = t.PINO_CUSTOM_CONTEXT_KEY) {
        return c[u] = l, c
    }
    st.setBrowserLoggerContext = i;

    function n(c, l = t.PINO_CUSTOM_CONTEXT_KEY) {
        let u = "";
        return typeof c.bindings == "undefined" ? u = r(c, l) : u = c.bindings().context || "", u
    }
    st.getLoggerContext = n;

    function a(c, l, u = t.PINO_CUSTOM_CONTEXT_KEY) {
        const f = n(c, u);
        return f.trim() ? `${f}/${l}` : l
    }
    st.formatChildLoggerContext = a;

    function h(c, l, u = t.PINO_CUSTOM_CONTEXT_KEY) {
        const f = a(c, l, u),
            y = c.child({
                context: f
            });
        return i(y, f, u)
    }
    return st.generateChildLogger = h, st
}(function(t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.pino = void 0;
    const e = Nt,
        r = e.__importDefault(Xu());
    Object.defineProperty(t, "pino", {
        enumerable: !0,
        get: function() {
            return r.default
        }
    }), e.__exportStar(Mo(), t), e.__exportStar(Qu(), t)
})(xe);
class Zu extends nr {
    constructor(e) {
        super(), this.opts = e, this.protocol = "wc", this.version = 2
    }
}
let eh = class extends nr {
        constructor(e, r) {
            super(), this.core = e, this.logger = r, this.records = new Map
        }
    },
    th = class {
        constructor(e, r) {
            this.logger = e, this.core = r
        }
    };
class rh extends nr {
    constructor(e, r) {
        super(), this.relayer = e, this.logger = r
    }
}
let ih = class extends nr {
        constructor(e) {
            super()
        }
    },
    nh = class {
        constructor(e, r, i, n) {
            this.core = e, this.logger = r, this.name = i
        }
    },
    sh = class extends nr {
        constructor(e, r) {
            super(), this.relayer = e, this.logger = r
        }
    },
    oh = class extends nr {
        constructor(e, r) {
            super(), this.core = e, this.logger = r
        }
    },
    ah = class {
        constructor(e, r) {
            this.projectId = e, this.logger = r
        }
    },
    ch = class {
        constructor(e, r) {
            this.projectId = e, this.logger = r
        }
    },
    L1 = class {
        constructor(e) {
            this.opts = e, this.protocol = "wc", this.version = 2
        }
    },
    F1 = class {
        constructor(e) {
            this.client = e
        }
    };
var yn = {},
    dr = {},
    pi = {},
    yi = {};
Object.defineProperty(yi, "__esModule", {
    value: !0
});
yi.BrowserRandomSource = void 0;
const ps = 65536;
class uh {
    constructor() {
        this.isAvailable = !1, this.isInstantiated = !1;
        const e = typeof self != "undefined" ? self.crypto || self.msCrypto : null;
        e && e.getRandomValues !== void 0 && (this._crypto = e, this.isAvailable = !0, this.isInstantiated = !0)
    }
    randomBytes(e) {
        if (!this.isAvailable || !this._crypto) throw new Error("Browser random byte generator is not available.");
        const r = new Uint8Array(e);
        for (let i = 0; i < r.length; i += ps) this._crypto.getRandomValues(r.subarray(i, i + Math.min(r.length - i, ps)));
        return r
    }
}
yi.BrowserRandomSource = uh;
var bi = {},
    dt = {};
Object.defineProperty(dt, "__esModule", {
    value: !0
});

function hh(t) {
    for (var e = 0; e < t.length; e++) t[e] = 0;
    return t
}
dt.wipe = hh;
Object.defineProperty(bi, "__esModule", {
    value: !0
});
bi.NodeRandomSource = void 0;
const lh = dt;
class fh {
    constructor() {
        if (this.isAvailable = !1, this.isInstantiated = !1, typeof Cc != "undefined") {
            const e = Tc;
            e && e.randomBytes && (this._crypto = e, this.isAvailable = !0, this.isInstantiated = !0)
        }
    }
    randomBytes(e) {
        if (!this.isAvailable || !this._crypto) throw new Error("Node.js random byte generator is not available.");
        let r = this._crypto.randomBytes(e);
        if (r.length !== e) throw new Error("NodeRandomSource: got fewer bytes than requested");
        const i = new Uint8Array(e);
        for (let n = 0; n < i.length; n++) i[n] = r[n];
        return (0, lh.wipe)(r), i
    }
}
bi.NodeRandomSource = fh;
Object.defineProperty(pi, "__esModule", {
    value: !0
});
pi.SystemRandomSource = void 0;
const dh = yi,
    gh = bi;
class ph {
    constructor() {
        if (this.isAvailable = !1, this.name = "", this._source = new dh.BrowserRandomSource, this._source.isAvailable) {
            this.isAvailable = !0, this.name = "Browser";
            return
        }
        if (this._source = new gh.NodeRandomSource, this._source.isAvailable) {
            this.isAvailable = !0, this.name = "Node";
            return
        }
    }
    randomBytes(e) {
        if (!this.isAvailable) throw new Error("System random byte generator is not available.");
        return this._source.randomBytes(e)
    }
}
pi.SystemRandomSource = ph;
var ie = {},
    $o = {};
(function(t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });

    function e(c, l) {
        var u = c >>> 16 & 65535,
            f = c & 65535,
            y = l >>> 16 & 65535,
            b = l & 65535;
        return f * b + (u * b + f * y << 16 >>> 0) | 0
    }
    t.mul = Math.imul || e;

    function r(c, l) {
        return c + l | 0
    }
    t.add = r;

    function i(c, l) {
        return c - l | 0
    }
    t.sub = i;

    function n(c, l) {
        return c << l | c >>> 32 - l
    }
    t.rotl = n;

    function a(c, l) {
        return c << 32 - l | c >>> l
    }
    t.rotr = a;

    function h(c) {
        return typeof c == "number" && isFinite(c) && Math.floor(c) === c
    }
    t.isInteger = Number.isInteger || h, t.MAX_SAFE_INTEGER = 9007199254740991, t.isSafeInteger = function(c) {
        return t.isInteger(c) && c >= -t.MAX_SAFE_INTEGER && c <= t.MAX_SAFE_INTEGER
    }
})($o);
Object.defineProperty(ie, "__esModule", {
    value: !0
});
var jo = $o;

function yh(t, e) {
    return e === void 0 && (e = 0), (t[e + 0] << 8 | t[e + 1]) << 16 >> 16
}
ie.readInt16BE = yh;

function bh(t, e) {
    return e === void 0 && (e = 0), (t[e + 0] << 8 | t[e + 1]) >>> 0
}
ie.readUint16BE = bh;

function mh(t, e) {
    return e === void 0 && (e = 0), (t[e + 1] << 8 | t[e]) << 16 >> 16
}
ie.readInt16LE = mh;

function vh(t, e) {
    return e === void 0 && (e = 0), (t[e + 1] << 8 | t[e]) >>> 0
}
ie.readUint16LE = vh;

function Bo(t, e, r) {
    return e === void 0 && (e = new Uint8Array(2)), r === void 0 && (r = 0), e[r + 0] = t >>> 8, e[r + 1] = t >>> 0, e
}
ie.writeUint16BE = Bo;
ie.writeInt16BE = Bo;

function zo(t, e, r) {
    return e === void 0 && (e = new Uint8Array(2)), r === void 0 && (r = 0), e[r + 0] = t >>> 0, e[r + 1] = t >>> 8, e
}
ie.writeUint16LE = zo;
ie.writeInt16LE = zo;

function Vi(t, e) {
    return e === void 0 && (e = 0), t[e] << 24 | t[e + 1] << 16 | t[e + 2] << 8 | t[e + 3]
}
ie.readInt32BE = Vi;

function Gi(t, e) {
    return e === void 0 && (e = 0), (t[e] << 24 | t[e + 1] << 16 | t[e + 2] << 8 | t[e + 3]) >>> 0
}
ie.readUint32BE = Gi;

function Yi(t, e) {
    return e === void 0 && (e = 0), t[e + 3] << 24 | t[e + 2] << 16 | t[e + 1] << 8 | t[e]
}
ie.readInt32LE = Yi;

function Ji(t, e) {
    return e === void 0 && (e = 0), (t[e + 3] << 24 | t[e + 2] << 16 | t[e + 1] << 8 | t[e]) >>> 0
}
ie.readUint32LE = Ji;

function ai(t, e, r) {
    return e === void 0 && (e = new Uint8Array(4)), r === void 0 && (r = 0), e[r + 0] = t >>> 24, e[r + 1] = t >>> 16, e[r + 2] = t >>> 8, e[r + 3] = t >>> 0, e
}
ie.writeUint32BE = ai;
ie.writeInt32BE = ai;

function ci(t, e, r) {
    return e === void 0 && (e = new Uint8Array(4)), r === void 0 && (r = 0), e[r + 0] = t >>> 0, e[r + 1] = t >>> 8, e[r + 2] = t >>> 16, e[r + 3] = t >>> 24, e
}
ie.writeUint32LE = ci;
ie.writeInt32LE = ci;

function wh(t, e) {
    e === void 0 && (e = 0);
    var r = Vi(t, e),
        i = Vi(t, e + 4);
    return r * 4294967296 + i - (i >> 31) * 4294967296
}
ie.readInt64BE = wh;

function _h(t, e) {
    e === void 0 && (e = 0);
    var r = Gi(t, e),
        i = Gi(t, e + 4);
    return r * 4294967296 + i
}
ie.readUint64BE = _h;

function Eh(t, e) {
    e === void 0 && (e = 0);
    var r = Yi(t, e),
        i = Yi(t, e + 4);
    return i * 4294967296 + r - (r >> 31) * 4294967296
}
ie.readInt64LE = Eh;

function Dh(t, e) {
    e === void 0 && (e = 0);
    var r = Ji(t, e),
        i = Ji(t, e + 4);
    return i * 4294967296 + r
}
ie.readUint64LE = Dh;

function Ko(t, e, r) {
    return e === void 0 && (e = new Uint8Array(8)), r === void 0 && (r = 0), ai(t / 4294967296 >>> 0, e, r), ai(t >>> 0, e, r + 4), e
}
ie.writeUint64BE = Ko;
ie.writeInt64BE = Ko;

function Ho(t, e, r) {
    return e === void 0 && (e = new Uint8Array(8)), r === void 0 && (r = 0), ci(t >>> 0, e, r), ci(t / 4294967296 >>> 0, e, r + 4), e
}
ie.writeUint64LE = Ho;
ie.writeInt64LE = Ho;

function Sh(t, e, r) {
    if (r === void 0 && (r = 0), t % 8 !== 0) throw new Error("readUintBE supports only bitLengths divisible by 8");
    if (t / 8 > e.length - r) throw new Error("readUintBE: array is too short for the given bitLength");
    for (var i = 0, n = 1, a = t / 8 + r - 1; a >= r; a--) i += e[a] * n, n *= 256;
    return i
}
ie.readUintBE = Sh;

function xh(t, e, r) {
    if (r === void 0 && (r = 0), t % 8 !== 0) throw new Error("readUintLE supports only bitLengths divisible by 8");
    if (t / 8 > e.length - r) throw new Error("readUintLE: array is too short for the given bitLength");
    for (var i = 0, n = 1, a = r; a < r + t / 8; a++) i += e[a] * n, n *= 256;
    return i
}
ie.readUintLE = xh;

function Ih(t, e, r, i) {
    if (r === void 0 && (r = new Uint8Array(t / 8)), i === void 0 && (i = 0), t % 8 !== 0) throw new Error("writeUintBE supports only bitLengths divisible by 8");
    if (!jo.isSafeInteger(e)) throw new Error("writeUintBE value must be an integer");
    for (var n = 1, a = t / 8 + i - 1; a >= i; a--) r[a] = e / n & 255, n *= 256;
    return r
}
ie.writeUintBE = Ih;

function Oh(t, e, r, i) {
    if (r === void 0 && (r = new Uint8Array(t / 8)), i === void 0 && (i = 0), t % 8 !== 0) throw new Error("writeUintLE supports only bitLengths divisible by 8");
    if (!jo.isSafeInteger(e)) throw new Error("writeUintLE value must be an integer");
    for (var n = 1, a = i; a < i + t / 8; a++) r[a] = e / n & 255, n *= 256;
    return r
}
ie.writeUintLE = Oh;

function Ah(t, e) {
    e === void 0 && (e = 0);
    var r = new DataView(t.buffer, t.byteOffset, t.byteLength);
    return r.getFloat32(e)
}
ie.readFloat32BE = Ah;

function Ch(t, e) {
    e === void 0 && (e = 0);
    var r = new DataView(t.buffer, t.byteOffset, t.byteLength);
    return r.getFloat32(e, !0)
}
ie.readFloat32LE = Ch;

function Th(t, e) {
    e === void 0 && (e = 0);
    var r = new DataView(t.buffer, t.byteOffset, t.byteLength);
    return r.getFloat64(e)
}
ie.readFloat64BE = Th;

function Ph(t, e) {
    e === void 0 && (e = 0);
    var r = new DataView(t.buffer, t.byteOffset, t.byteLength);
    return r.getFloat64(e, !0)
}
ie.readFloat64LE = Ph;

function Lh(t, e, r) {
    e === void 0 && (e = new Uint8Array(4)), r === void 0 && (r = 0);
    var i = new DataView(e.buffer, e.byteOffset, e.byteLength);
    return i.setFloat32(r, t), e
}
ie.writeFloat32BE = Lh;

function Nh(t, e, r) {
    e === void 0 && (e = new Uint8Array(4)), r === void 0 && (r = 0);
    var i = new DataView(e.buffer, e.byteOffset, e.byteLength);
    return i.setFloat32(r, t, !0), e
}
ie.writeFloat32LE = Nh;

function Fh(t, e, r) {
    e === void 0 && (e = new Uint8Array(8)), r === void 0 && (r = 0);
    var i = new DataView(e.buffer, e.byteOffset, e.byteLength);
    return i.setFloat64(r, t), e
}
ie.writeFloat64BE = Fh;

function Rh(t, e, r) {
    e === void 0 && (e = new Uint8Array(8)), r === void 0 && (r = 0);
    var i = new DataView(e.buffer, e.byteOffset, e.byteLength);
    return i.setFloat64(r, t, !0), e
}
ie.writeFloat64LE = Rh;
(function(t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.randomStringForEntropy = t.randomString = t.randomUint32 = t.randomBytes = t.defaultRandomSource = void 0;
    const e = pi,
        r = ie,
        i = dt;
    t.defaultRandomSource = new e.SystemRandomSource;

    function n(u, f = t.defaultRandomSource) {
        return f.randomBytes(u)
    }
    t.randomBytes = n;

    function a(u = t.defaultRandomSource) {
        const f = n(4, u),
            y = (0, r.readUint32LE)(f);
        return (0, i.wipe)(f), y
    }
    t.randomUint32 = a;
    const h = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    function c(u, f = h, y = t.defaultRandomSource) {
        if (f.length < 2) throw new Error("randomString charset is too short");
        if (f.length > 256) throw new Error("randomString charset is too long");
        let b = "";
        const w = f.length,
            E = 256 - 256 % w;
        for (; u > 0;) {
            const T = n(Math.ceil(u * 256 / E), y);
            for (let F = 0; F < T.length && u > 0; F++) {
                const j = T[F];
                j < E && (b += f.charAt(j % w), u--)
            }(0, i.wipe)(T)
        }
        return b
    }
    t.randomString = c;

    function l(u, f = h, y = t.defaultRandomSource) {
        const b = Math.ceil(u / (Math.log(f.length) / Math.LN2));
        return c(b, f, y)
    }
    t.randomStringForEntropy = l
})(dr);
var Wo = {};
(function(t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var e = ie,
        r = dt;
    t.DIGEST_LENGTH = 64, t.BLOCK_SIZE = 128;
    var i = function() {
        function c() {
            this.digestLength = t.DIGEST_LENGTH, this.blockSize = t.BLOCK_SIZE, this._stateHi = new Int32Array(8), this._stateLo = new Int32Array(8), this._tempHi = new Int32Array(16), this._tempLo = new Int32Array(16), this._buffer = new Uint8Array(256), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this.reset()
        }
        return c.prototype._initState = function() {
            this._stateHi[0] = 1779033703, this._stateHi[1] = 3144134277, this._stateHi[2] = 1013904242, this._stateHi[3] = 2773480762, this._stateHi[4] = 1359893119, this._stateHi[5] = 2600822924, this._stateHi[6] = 528734635, this._stateHi[7] = 1541459225, this._stateLo[0] = 4089235720, this._stateLo[1] = 2227873595, this._stateLo[2] = 4271175723, this._stateLo[3] = 1595750129, this._stateLo[4] = 2917565137, this._stateLo[5] = 725511199, this._stateLo[6] = 4215389547, this._stateLo[7] = 327033209
        }, c.prototype.reset = function() {
            return this._initState(), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this
        }, c.prototype.clean = function() {
            r.wipe(this._buffer), r.wipe(this._tempHi), r.wipe(this._tempLo), this.reset()
        }, c.prototype.update = function(l, u) {
            if (u === void 0 && (u = l.length), this._finished) throw new Error("SHA512: can't update because hash was finished.");
            var f = 0;
            if (this._bytesHashed += u, this._bufferLength > 0) {
                for (; this._bufferLength < t.BLOCK_SIZE && u > 0;) this._buffer[this._bufferLength++] = l[f++], u--;
                this._bufferLength === this.blockSize && (a(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, this.blockSize), this._bufferLength = 0)
            }
            for (u >= this.blockSize && (f = a(this._tempHi, this._tempLo, this._stateHi, this._stateLo, l, f, u), u %= this.blockSize); u > 0;) this._buffer[this._bufferLength++] = l[f++], u--;
            return this
        }, c.prototype.finish = function(l) {
            if (!this._finished) {
                var u = this._bytesHashed,
                    f = this._bufferLength,
                    y = u / 536870912 | 0,
                    b = u << 3,
                    w = u % 128 < 112 ? 128 : 256;
                this._buffer[f] = 128;
                for (var E = f + 1; E < w - 8; E++) this._buffer[E] = 0;
                e.writeUint32BE(y, this._buffer, w - 8), e.writeUint32BE(b, this._buffer, w - 4), a(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, w), this._finished = !0
            }
            for (var E = 0; E < this.digestLength / 8; E++) e.writeUint32BE(this._stateHi[E], l, E * 8), e.writeUint32BE(this._stateLo[E], l, E * 8 + 4);
            return this
        }, c.prototype.digest = function() {
            var l = new Uint8Array(this.digestLength);
            return this.finish(l), l
        }, c.prototype.saveState = function() {
            if (this._finished) throw new Error("SHA256: cannot save finished state");
            return {
                stateHi: new Int32Array(this._stateHi),
                stateLo: new Int32Array(this._stateLo),
                buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
                bufferLength: this._bufferLength,
                bytesHashed: this._bytesHashed
            }
        }, c.prototype.restoreState = function(l) {
            return this._stateHi.set(l.stateHi), this._stateLo.set(l.stateLo), this._bufferLength = l.bufferLength, l.buffer && this._buffer.set(l.buffer), this._bytesHashed = l.bytesHashed, this._finished = !1, this
        }, c.prototype.cleanSavedState = function(l) {
            r.wipe(l.stateHi), r.wipe(l.stateLo), l.buffer && r.wipe(l.buffer), l.bufferLength = 0, l.bytesHashed = 0
        }, c
    }();
    t.SHA512 = i;
    var n = new Int32Array([1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591]);

    function a(c, l, u, f, y, b, w) {
        for (var E = u[0], T = u[1], F = u[2], j = u[3], D = u[4], O = u[5], m = u[6], _ = u[7], g = f[0], s = f[1], d = f[2], N = f[3], L = f[4], R = f[5], W = f[6], V = f[7], S, P, q, z, M, B, U, K; w >= 128;) {
            for (var Z = 0; Z < 16; Z++) {
                var H = 8 * Z + b;
                c[Z] = e.readUint32BE(y, H), l[Z] = e.readUint32BE(y, H + 4)
            }
            for (var Z = 0; Z < 80; Z++) {
                var X = E,
                    Y = T,
                    Q = F,
                    C = j,
                    A = D,
                    x = O,
                    o = m,
                    v = _,
                    k = g,
                    G = s,
                    le = d,
                    be = N,
                    de = L,
                    we = R,
                    Re = W,
                    Pe = V;
                if (S = _, P = V, M = P & 65535, B = P >>> 16, U = S & 65535, K = S >>> 16, S = (D >>> 14 | L << 32 - 14) ^ (D >>> 18 | L << 32 - 18) ^ (L >>> 41 - 32 | D << 32 - (41 - 32)), P = (L >>> 14 | D << 32 - 14) ^ (L >>> 18 | D << 32 - 18) ^ (D >>> 41 - 32 | L << 32 - (41 - 32)), M += P & 65535, B += P >>> 16, U += S & 65535, K += S >>> 16, S = D & O ^ ~D & m, P = L & R ^ ~L & W, M += P & 65535, B += P >>> 16, U += S & 65535, K += S >>> 16, S = n[Z * 2], P = n[Z * 2 + 1], M += P & 65535, B += P >>> 16, U += S & 65535, K += S >>> 16, S = c[Z % 16], P = l[Z % 16], M += P & 65535, B += P >>> 16, U += S & 65535, K += S >>> 16, B += M >>> 16, U += B >>> 16, K += U >>> 16, q = U & 65535 | K << 16, z = M & 65535 | B << 16, S = q, P = z, M = P & 65535, B = P >>> 16, U = S & 65535, K = S >>> 16, S = (E >>> 28 | g << 32 - 28) ^ (g >>> 34 - 32 | E << 32 - (34 - 32)) ^ (g >>> 39 - 32 | E << 32 - (39 - 32)), P = (g >>> 28 | E << 32 - 28) ^ (E >>> 34 - 32 | g << 32 - (34 - 32)) ^ (E >>> 39 - 32 | g << 32 - (39 - 32)), M += P & 65535, B += P >>> 16, U += S & 65535, K += S >>> 16, S = E & T ^ E & F ^ T & F, P = g & s ^ g & d ^ s & d, M += P & 65535, B += P >>> 16, U += S & 65535, K += S >>> 16, B += M >>> 16, U += B >>> 16, K += U >>> 16, v = U & 65535 | K << 16, Pe = M & 65535 | B << 16, S = C, P = be, M = P & 65535, B = P >>> 16, U = S & 65535, K = S >>> 16, S = q, P = z, M += P & 65535, B += P >>> 16, U += S & 65535, K += S >>> 16, B += M >>> 16, U += B >>> 16, K += U >>> 16, C = U & 65535 | K << 16, be = M & 65535 | B << 16, T = X, F = Y, j = Q, D = C, O = A, m = x, _ = o, E = v, s = k, d = G, N = le, L = be, R = de, W = we, V = Re, g = Pe, Z % 16 === 15)
                    for (var H = 0; H < 16; H++) S = c[H], P = l[H], M = P & 65535, B = P >>> 16, U = S & 65535, K = S >>> 16, S = c[(H + 9) % 16], P = l[(H + 9) % 16], M += P & 65535, B += P >>> 16, U += S & 65535, K += S >>> 16, q = c[(H + 1) % 16], z = l[(H + 1) % 16], S = (q >>> 1 | z << 32 - 1) ^ (q >>> 8 | z << 32 - 8) ^ q >>> 7, P = (z >>> 1 | q << 32 - 1) ^ (z >>> 8 | q << 32 - 8) ^ (z >>> 7 | q << 32 - 7), M += P & 65535, B += P >>> 16, U += S & 65535, K += S >>> 16, q = c[(H + 14) % 16], z = l[(H + 14) % 16], S = (q >>> 19 | z << 32 - 19) ^ (z >>> 61 - 32 | q << 32 - (61 - 32)) ^ q >>> 6, P = (z >>> 19 | q << 32 - 19) ^ (q >>> 61 - 32 | z << 32 - (61 - 32)) ^ (z >>> 6 | q << 32 - 6), M += P & 65535, B += P >>> 16, U += S & 65535, K += S >>> 16, B += M >>> 16, U += B >>> 16, K += U >>> 16, c[H] = U & 65535 | K << 16, l[H] = M & 65535 | B << 16
            }
            S = E, P = g, M = P & 65535, B = P >>> 16, U = S & 65535, K = S >>> 16, S = u[0], P = f[0], M += P & 65535, B += P >>> 16, U += S & 65535, K += S >>> 16, B += M >>> 16, U += B >>> 16, K += U >>> 16, u[0] = E = U & 65535 | K << 16, f[0] = g = M & 65535 | B << 16, S = T, P = s, M = P & 65535, B = P >>> 16, U = S & 65535, K = S >>> 16, S = u[1], P = f[1], M += P & 65535, B += P >>> 16, U += S & 65535, K += S >>> 16, B += M >>> 16, U += B >>> 16, K += U >>> 16, u[1] = T = U & 65535 | K << 16, f[1] = s = M & 65535 | B << 16, S = F, P = d, M = P & 65535, B = P >>> 16, U = S & 65535, K = S >>> 16, S = u[2], P = f[2], M += P & 65535, B += P >>> 16, U += S & 65535, K += S >>> 16, B += M >>> 16, U += B >>> 16, K += U >>> 16, u[2] = F = U & 65535 | K << 16, f[2] = d = M & 65535 | B << 16, S = j, P = N, M = P & 65535, B = P >>> 16, U = S & 65535, K = S >>> 16, S = u[3], P = f[3], M += P & 65535, B += P >>> 16, U += S & 65535, K += S >>> 16, B += M >>> 16, U += B >>> 16, K += U >>> 16, u[3] = j = U & 65535 | K << 16, f[3] = N = M & 65535 | B << 16, S = D, P = L, M = P & 65535, B = P >>> 16, U = S & 65535, K = S >>> 16, S = u[4], P = f[4], M += P & 65535, B += P >>> 16, U += S & 65535, K += S >>> 16, B += M >>> 16, U += B >>> 16, K += U >>> 16, u[4] = D = U & 65535 | K << 16, f[4] = L = M & 65535 | B << 16, S = O, P = R, M = P & 65535, B = P >>> 16, U = S & 65535, K = S >>> 16, S = u[5], P = f[5], M += P & 65535, B += P >>> 16, U += S & 65535, K += S >>> 16, B += M >>> 16, U += B >>> 16, K += U >>> 16, u[5] = O = U & 65535 | K << 16, f[5] = R = M & 65535 | B << 16, S = m, P = W, M = P & 65535, B = P >>> 16, U = S & 65535, K = S >>> 16, S = u[6], P = f[6], M += P & 65535, B += P >>> 16, U += S & 65535, K += S >>> 16, B += M >>> 16, U += B >>> 16, K += U >>> 16, u[6] = m = U & 65535 | K << 16, f[6] = W = M & 65535 | B << 16, S = _, P = V, M = P & 65535, B = P >>> 16, U = S & 65535, K = S >>> 16, S = u[7], P = f[7], M += P & 65535, B += P >>> 16, U += S & 65535, K += S >>> 16, B += M >>> 16, U += B >>> 16, K += U >>> 16, u[7] = _ = U & 65535 | K << 16, f[7] = V = M & 65535 | B << 16, b += 128, w -= 128
        }
        return b
    }

    function h(c) {
        var l = new i;
        l.update(c);
        var u = l.digest();
        return l.clean(), u
    }
    t.hash = h
})(Wo);
(function(t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.convertSecretKeyToX25519 = t.convertPublicKeyToX25519 = t.verify = t.sign = t.extractPublicKeyFromSecretKey = t.generateKeyPair = t.generateKeyPairFromSeed = t.SEED_LENGTH = t.SECRET_KEY_LENGTH = t.PUBLIC_KEY_LENGTH = t.SIGNATURE_LENGTH = void 0;
    const e = dr,
        r = Wo,
        i = dt;
    t.SIGNATURE_LENGTH = 64, t.PUBLIC_KEY_LENGTH = 32, t.SECRET_KEY_LENGTH = 64, t.SEED_LENGTH = 32;

    function n(C) {
        const A = new Float64Array(16);
        if (C)
            for (let x = 0; x < C.length; x++) A[x] = C[x];
        return A
    }
    const a = new Uint8Array(32);
    a[0] = 9;
    const h = n(),
        c = n([1]),
        l = n([30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585, 16505, 36039, 65139, 11119, 27886, 20995]),
        u = n([61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171, 33010, 6542, 64743, 22239, 55772, 9222]),
        f = n([54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982, 57905, 49316, 21502, 52590, 14035, 8553]),
        y = n([26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214]),
        b = n([41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153, 11085, 57099, 20417, 9344, 11139]);

    function w(C, A) {
        for (let x = 0; x < 16; x++) C[x] = A[x] | 0
    }

    function E(C) {
        let A = 1;
        for (let x = 0; x < 16; x++) {
            let o = C[x] + A + 65535;
            A = Math.floor(o / 65536), C[x] = o - A * 65536
        }
        C[0] += A - 1 + 37 * (A - 1)
    }

    function T(C, A, x) {
        const o = ~(x - 1);
        for (let v = 0; v < 16; v++) {
            const k = o & (C[v] ^ A[v]);
            C[v] ^= k, A[v] ^= k
        }
    }

    function F(C, A) {
        const x = n(),
            o = n();
        for (let v = 0; v < 16; v++) o[v] = A[v];
        E(o), E(o), E(o);
        for (let v = 0; v < 2; v++) {
            x[0] = o[0] - 65517;
            for (let G = 1; G < 15; G++) x[G] = o[G] - 65535 - (x[G - 1] >> 16 & 1), x[G - 1] &= 65535;
            x[15] = o[15] - 32767 - (x[14] >> 16 & 1);
            const k = x[15] >> 16 & 1;
            x[14] &= 65535, T(o, x, 1 - k)
        }
        for (let v = 0; v < 16; v++) C[2 * v] = o[v] & 255, C[2 * v + 1] = o[v] >> 8
    }

    function j(C, A) {
        let x = 0;
        for (let o = 0; o < 32; o++) x |= C[o] ^ A[o];
        return (1 & x - 1 >>> 8) - 1
    }

    function D(C, A) {
        const x = new Uint8Array(32),
            o = new Uint8Array(32);
        return F(x, C), F(o, A), j(x, o)
    }

    function O(C) {
        const A = new Uint8Array(32);
        return F(A, C), A[0] & 1
    }

    function m(C, A) {
        for (let x = 0; x < 16; x++) C[x] = A[2 * x] + (A[2 * x + 1] << 8);
        C[15] &= 32767
    }

    function _(C, A, x) {
        for (let o = 0; o < 16; o++) C[o] = A[o] + x[o]
    }

    function g(C, A, x) {
        for (let o = 0; o < 16; o++) C[o] = A[o] - x[o]
    }

    function s(C, A, x) {
        let o, v, k = 0,
            G = 0,
            le = 0,
            be = 0,
            de = 0,
            we = 0,
            Re = 0,
            Pe = 0,
            ye = 0,
            ge = 0,
            fe = 0,
            ue = 0,
            ae = 0,
            oe = 0,
            se = 0,
            te = 0,
            he = 0,
            pe = 0,
            re = 0,
            me = 0,
            ve = 0,
            De = 0,
            Se = 0,
            _e = 0,
            mt = 0,
            St = 0,
            $t = 0,
            ht = 0,
            qt = 0,
            mr = 0,
            Hr = 0,
            Ue = x[0],
            Le = x[1],
            Me = x[2],
            $e = x[3],
            je = x[4],
            Ne = x[5],
            Ke = x[6],
            He = x[7],
            We = x[8],
            ke = x[9],
            qe = x[10],
            ze = x[11],
            Be = x[12],
            Ce = x[13],
            Ve = x[14],
            Ge = x[15];
        o = A[0], k += o * Ue, G += o * Le, le += o * Me, be += o * $e, de += o * je, we += o * Ne, Re += o * Ke, Pe += o * He, ye += o * We, ge += o * ke, fe += o * qe, ue += o * ze, ae += o * Be, oe += o * Ce, se += o * Ve, te += o * Ge, o = A[1], G += o * Ue, le += o * Le, be += o * Me, de += o * $e, we += o * je, Re += o * Ne, Pe += o * Ke, ye += o * He, ge += o * We, fe += o * ke, ue += o * qe, ae += o * ze, oe += o * Be, se += o * Ce, te += o * Ve, he += o * Ge, o = A[2], le += o * Ue, be += o * Le, de += o * Me, we += o * $e, Re += o * je, Pe += o * Ne, ye += o * Ke, ge += o * He, fe += o * We, ue += o * ke, ae += o * qe, oe += o * ze, se += o * Be, te += o * Ce, he += o * Ve, pe += o * Ge, o = A[3], be += o * Ue, de += o * Le, we += o * Me, Re += o * $e, Pe += o * je, ye += o * Ne, ge += o * Ke, fe += o * He, ue += o * We, ae += o * ke, oe += o * qe, se += o * ze, te += o * Be, he += o * Ce, pe += o * Ve, re += o * Ge, o = A[4], de += o * Ue, we += o * Le, Re += o * Me, Pe += o * $e, ye += o * je, ge += o * Ne, fe += o * Ke, ue += o * He, ae += o * We, oe += o * ke, se += o * qe, te += o * ze, he += o * Be, pe += o * Ce, re += o * Ve, me += o * Ge, o = A[5], we += o * Ue, Re += o * Le, Pe += o * Me, ye += o * $e, ge += o * je, fe += o * Ne, ue += o * Ke, ae += o * He, oe += o * We, se += o * ke, te += o * qe, he += o * ze, pe += o * Be, re += o * Ce, me += o * Ve, ve += o * Ge, o = A[6], Re += o * Ue, Pe += o * Le, ye += o * Me, ge += o * $e, fe += o * je, ue += o * Ne, ae += o * Ke, oe += o * He, se += o * We, te += o * ke, he += o * qe, pe += o * ze, re += o * Be, me += o * Ce, ve += o * Ve, De += o * Ge, o = A[7], Pe += o * Ue, ye += o * Le, ge += o * Me, fe += o * $e, ue += o * je, ae += o * Ne, oe += o * Ke, se += o * He, te += o * We, he += o * ke, pe += o * qe, re += o * ze, me += o * Be, ve += o * Ce, De += o * Ve, Se += o * Ge, o = A[8], ye += o * Ue, ge += o * Le, fe += o * Me, ue += o * $e, ae += o * je, oe += o * Ne, se += o * Ke, te += o * He, he += o * We, pe += o * ke, re += o * qe, me += o * ze, ve += o * Be, De += o * Ce, Se += o * Ve, _e += o * Ge, o = A[9], ge += o * Ue, fe += o * Le, ue += o * Me, ae += o * $e, oe += o * je, se += o * Ne, te += o * Ke, he += o * He, pe += o * We, re += o * ke, me += o * qe, ve += o * ze, De += o * Be, Se += o * Ce, _e += o * Ve, mt += o * Ge, o = A[10], fe += o * Ue, ue += o * Le, ae += o * Me, oe += o * $e, se += o * je, te += o * Ne, he += o * Ke, pe += o * He, re += o * We, me += o * ke, ve += o * qe, De += o * ze, Se += o * Be, _e += o * Ce, mt += o * Ve, St += o * Ge, o = A[11], ue += o * Ue, ae += o * Le, oe += o * Me, se += o * $e, te += o * je, he += o * Ne, pe += o * Ke, re += o * He, me += o * We, ve += o * ke, De += o * qe, Se += o * ze, _e += o * Be, mt += o * Ce, St += o * Ve, $t += o * Ge, o = A[12], ae += o * Ue, oe += o * Le, se += o * Me, te += o * $e, he += o * je, pe += o * Ne, re += o * Ke, me += o * He, ve += o * We, De += o * ke, Se += o * qe, _e += o * ze, mt += o * Be, St += o * Ce, $t += o * Ve, ht += o * Ge, o = A[13], oe += o * Ue, se += o * Le, te += o * Me, he += o * $e, pe += o * je, re += o * Ne, me += o * Ke, ve += o * He, De += o * We, Se += o * ke, _e += o * qe, mt += o * ze, St += o * Be, $t += o * Ce, ht += o * Ve, qt += o * Ge, o = A[14], se += o * Ue, te += o * Le, he += o * Me, pe += o * $e, re += o * je, me += o * Ne, ve += o * Ke, De += o * He, Se += o * We, _e += o * ke, mt += o * qe, St += o * ze, $t += o * Be, ht += o * Ce, qt += o * Ve, mr += o * Ge, o = A[15], te += o * Ue, he += o * Le, pe += o * Me, re += o * $e, me += o * je, ve += o * Ne, De += o * Ke, Se += o * He, _e += o * We, mt += o * ke, St += o * qe, $t += o * ze, ht += o * Be, qt += o * Ce, mr += o * Ve, Hr += o * Ge, k += 38 * he, G += 38 * pe, le += 38 * re, be += 38 * me, de += 38 * ve, we += 38 * De, Re += 38 * Se, Pe += 38 * _e, ye += 38 * mt, ge += 38 * St, fe += 38 * $t, ue += 38 * ht, ae += 38 * qt, oe += 38 * mr, se += 38 * Hr, v = 1, o = k + v + 65535, v = Math.floor(o / 65536), k = o - v * 65536, o = G + v + 65535, v = Math.floor(o / 65536), G = o - v * 65536, o = le + v + 65535, v = Math.floor(o / 65536), le = o - v * 65536, o = be + v + 65535, v = Math.floor(o / 65536), be = o - v * 65536, o = de + v + 65535, v = Math.floor(o / 65536), de = o - v * 65536, o = we + v + 65535, v = Math.floor(o / 65536), we = o - v * 65536, o = Re + v + 65535, v = Math.floor(o / 65536), Re = o - v * 65536, o = Pe + v + 65535, v = Math.floor(o / 65536), Pe = o - v * 65536, o = ye + v + 65535, v = Math.floor(o / 65536), ye = o - v * 65536, o = ge + v + 65535, v = Math.floor(o / 65536), ge = o - v * 65536, o = fe + v + 65535, v = Math.floor(o / 65536), fe = o - v * 65536, o = ue + v + 65535, v = Math.floor(o / 65536), ue = o - v * 65536, o = ae + v + 65535, v = Math.floor(o / 65536), ae = o - v * 65536, o = oe + v + 65535, v = Math.floor(o / 65536), oe = o - v * 65536, o = se + v + 65535, v = Math.floor(o / 65536), se = o - v * 65536, o = te + v + 65535, v = Math.floor(o / 65536), te = o - v * 65536, k += v - 1 + 37 * (v - 1), v = 1, o = k + v + 65535, v = Math.floor(o / 65536), k = o - v * 65536, o = G + v + 65535, v = Math.floor(o / 65536), G = o - v * 65536, o = le + v + 65535, v = Math.floor(o / 65536), le = o - v * 65536, o = be + v + 65535, v = Math.floor(o / 65536), be = o - v * 65536, o = de + v + 65535, v = Math.floor(o / 65536), de = o - v * 65536, o = we + v + 65535, v = Math.floor(o / 65536), we = o - v * 65536, o = Re + v + 65535, v = Math.floor(o / 65536), Re = o - v * 65536, o = Pe + v + 65535, v = Math.floor(o / 65536), Pe = o - v * 65536, o = ye + v + 65535, v = Math.floor(o / 65536), ye = o - v * 65536, o = ge + v + 65535, v = Math.floor(o / 65536), ge = o - v * 65536, o = fe + v + 65535, v = Math.floor(o / 65536), fe = o - v * 65536, o = ue + v + 65535, v = Math.floor(o / 65536), ue = o - v * 65536, o = ae + v + 65535, v = Math.floor(o / 65536), ae = o - v * 65536, o = oe + v + 65535, v = Math.floor(o / 65536), oe = o - v * 65536, o = se + v + 65535, v = Math.floor(o / 65536), se = o - v * 65536, o = te + v + 65535, v = Math.floor(o / 65536), te = o - v * 65536, k += v - 1 + 37 * (v - 1), C[0] = k, C[1] = G, C[2] = le, C[3] = be, C[4] = de, C[5] = we, C[6] = Re, C[7] = Pe, C[8] = ye, C[9] = ge, C[10] = fe, C[11] = ue, C[12] = ae, C[13] = oe, C[14] = se, C[15] = te
    }

    function d(C, A) {
        s(C, A, A)
    }

    function N(C, A) {
        const x = n();
        let o;
        for (o = 0; o < 16; o++) x[o] = A[o];
        for (o = 253; o >= 0; o--) d(x, x), o !== 2 && o !== 4 && s(x, x, A);
        for (o = 0; o < 16; o++) C[o] = x[o]
    }

    function L(C, A) {
        const x = n();
        let o;
        for (o = 0; o < 16; o++) x[o] = A[o];
        for (o = 250; o >= 0; o--) d(x, x), o !== 1 && s(x, x, A);
        for (o = 0; o < 16; o++) C[o] = x[o]
    }

    function R(C, A) {
        const x = n(),
            o = n(),
            v = n(),
            k = n(),
            G = n(),
            le = n(),
            be = n(),
            de = n(),
            we = n();
        g(x, C[1], C[0]), g(we, A[1], A[0]), s(x, x, we), _(o, C[0], C[1]), _(we, A[0], A[1]), s(o, o, we), s(v, C[3], A[3]), s(v, v, u), s(k, C[2], A[2]), _(k, k, k), g(G, o, x), g(le, k, v), _(be, k, v), _(de, o, x), s(C[0], G, le), s(C[1], de, be), s(C[2], be, le), s(C[3], G, de)
    }

    function W(C, A, x) {
        for (let o = 0; o < 4; o++) T(C[o], A[o], x)
    }

    function V(C, A) {
        const x = n(),
            o = n(),
            v = n();
        N(v, A[2]), s(x, A[0], v), s(o, A[1], v), F(C, o), C[31] ^= O(x) << 7
    }

    function S(C, A, x) {
        w(C[0], h), w(C[1], c), w(C[2], c), w(C[3], h);
        for (let o = 255; o >= 0; --o) {
            const v = x[o / 8 | 0] >> (o & 7) & 1;
            W(C, A, v), R(A, C), R(C, C), W(C, A, v)
        }
    }

    function P(C, A) {
        const x = [n(), n(), n(), n()];
        w(x[0], f), w(x[1], y), w(x[2], c), s(x[3], f, y), S(C, x, A)
    }

    function q(C) {
        if (C.length !== t.SEED_LENGTH) throw new Error(`ed25519: seed must be ${t.SEED_LENGTH} bytes`);
        const A = (0, r.hash)(C);
        A[0] &= 248, A[31] &= 127, A[31] |= 64;
        const x = new Uint8Array(32),
            o = [n(), n(), n(), n()];
        P(o, A), V(x, o);
        const v = new Uint8Array(64);
        return v.set(C), v.set(x, 32), {
            publicKey: x,
            secretKey: v
        }
    }
    t.generateKeyPairFromSeed = q;

    function z(C) {
        const A = (0, e.randomBytes)(32, C),
            x = q(A);
        return (0, i.wipe)(A), x
    }
    t.generateKeyPair = z;

    function M(C) {
        if (C.length !== t.SECRET_KEY_LENGTH) throw new Error(`ed25519: secret key must be ${t.SECRET_KEY_LENGTH} bytes`);
        return new Uint8Array(C.subarray(32))
    }
    t.extractPublicKeyFromSecretKey = M;
    const B = new Float64Array([237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16]);

    function U(C, A) {
        let x, o, v, k;
        for (o = 63; o >= 32; --o) {
            for (x = 0, v = o - 32, k = o - 12; v < k; ++v) A[v] += x - 16 * A[o] * B[v - (o - 32)], x = Math.floor((A[v] + 128) / 256), A[v] -= x * 256;
            A[v] += x, A[o] = 0
        }
        for (x = 0, v = 0; v < 32; v++) A[v] += x - (A[31] >> 4) * B[v], x = A[v] >> 8, A[v] &= 255;
        for (v = 0; v < 32; v++) A[v] -= x * B[v];
        for (o = 0; o < 32; o++) A[o + 1] += A[o] >> 8, C[o] = A[o] & 255
    }

    function K(C) {
        const A = new Float64Array(64);
        for (let x = 0; x < 64; x++) A[x] = C[x];
        for (let x = 0; x < 64; x++) C[x] = 0;
        U(C, A)
    }

    function Z(C, A) {
        const x = new Float64Array(64),
            o = [n(), n(), n(), n()],
            v = (0, r.hash)(C.subarray(0, 32));
        v[0] &= 248, v[31] &= 127, v[31] |= 64;
        const k = new Uint8Array(64);
        k.set(v.subarray(32), 32);
        const G = new r.SHA512;
        G.update(k.subarray(32)), G.update(A);
        const le = G.digest();
        G.clean(), K(le), P(o, le), V(k, o), G.reset(), G.update(k.subarray(0, 32)), G.update(C.subarray(32)), G.update(A);
        const be = G.digest();
        K(be);
        for (let de = 0; de < 32; de++) x[de] = le[de];
        for (let de = 0; de < 32; de++)
            for (let we = 0; we < 32; we++) x[de + we] += be[de] * v[we];
        return U(k.subarray(32), x), k
    }
    t.sign = Z;

    function H(C, A) {
        const x = n(),
            o = n(),
            v = n(),
            k = n(),
            G = n(),
            le = n(),
            be = n();
        return w(C[2], c), m(C[1], A), d(v, C[1]), s(k, v, l), g(v, v, C[2]), _(k, C[2], k), d(G, k), d(le, G), s(be, le, G), s(x, be, v), s(x, x, k), L(x, x), s(x, x, v), s(x, x, k), s(x, x, k), s(C[0], x, k), d(o, C[0]), s(o, o, k), D(o, v) && s(C[0], C[0], b), d(o, C[0]), s(o, o, k), D(o, v) ? -1 : (O(C[0]) === A[31] >> 7 && g(C[0], h, C[0]), s(C[3], C[0], C[1]), 0)
    }

    function X(C, A, x) {
        const o = new Uint8Array(32),
            v = [n(), n(), n(), n()],
            k = [n(), n(), n(), n()];
        if (x.length !== t.SIGNATURE_LENGTH) throw new Error(`ed25519: signature must be ${t.SIGNATURE_LENGTH} bytes`);
        if (H(k, C)) return !1;
        const G = new r.SHA512;
        G.update(x.subarray(0, 32)), G.update(C), G.update(A);
        const le = G.digest();
        return K(le), S(v, k, le), P(k, x.subarray(32)), R(v, k), V(o, v), !j(x, o)
    }
    t.verify = X;

    function Y(C) {
        let A = [n(), n(), n(), n()];
        if (H(A, C)) throw new Error("Ed25519: invalid public key");
        let x = n(),
            o = n(),
            v = A[1];
        _(x, c, v), g(o, c, v), N(o, o), s(x, x, o);
        let k = new Uint8Array(32);
        return F(k, x), k
    }
    t.convertPublicKeyToX25519 = Y;

    function Q(C) {
        const A = (0, r.hash)(C.subarray(0, 32));
        A[0] &= 248, A[31] &= 127, A[31] |= 64;
        const x = new Uint8Array(A.subarray(0, 32));
        return (0, i.wipe)(A), x
    }
    t.convertSecretKeyToX25519 = Q
})(yn);
const Uh = "EdDSA",
    Mh = "JWT",
    ko = ".",
    qo = "base64url",
    $h = "utf8",
    jh = "utf8",
    Bh = ":",
    zh = "did",
    Kh = "key",
    ys = "base58btc",
    Hh = "z",
    Wh = "K36",
    kh = 32;

function bn(t) {
    return globalThis.Buffer != null ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : t
}

function Vo(t = 0) {
    return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? bn(globalThis.Buffer.allocUnsafe(t)) : new Uint8Array(t)
}

function Xi(t, e) {
    e || (e = t.reduce((n, a) => n + a.length, 0));
    const r = Vo(e);
    let i = 0;
    for (const n of t) r.set(n, i), i += n.length;
    return bn(r)
}

function qh(t, e) {
    if (t.length >= 255) throw new TypeError("Alphabet too long");
    for (var r = new Uint8Array(256), i = 0; i < r.length; i++) r[i] = 255;
    for (var n = 0; n < t.length; n++) {
        var a = t.charAt(n),
            h = a.charCodeAt(0);
        if (r[h] !== 255) throw new TypeError(a + " is ambiguous");
        r[h] = n
    }
    var c = t.length,
        l = t.charAt(0),
        u = Math.log(c) / Math.log(256),
        f = Math.log(256) / Math.log(c);

    function y(E) {
        if (E instanceof Uint8Array || (ArrayBuffer.isView(E) ? E = new Uint8Array(E.buffer, E.byteOffset, E.byteLength) : Array.isArray(E) && (E = Uint8Array.from(E))), !(E instanceof Uint8Array)) throw new TypeError("Expected Uint8Array");
        if (E.length === 0) return "";
        for (var T = 0, F = 0, j = 0, D = E.length; j !== D && E[j] === 0;) j++, T++;
        for (var O = (D - j) * f + 1 >>> 0, m = new Uint8Array(O); j !== D;) {
            for (var _ = E[j], g = 0, s = O - 1;
                (_ !== 0 || g < F) && s !== -1; s--, g++) _ += 256 * m[s] >>> 0, m[s] = _ % c >>> 0, _ = _ / c >>> 0;
            if (_ !== 0) throw new Error("Non-zero carry");
            F = g, j++
        }
        for (var d = O - F; d !== O && m[d] === 0;) d++;
        for (var N = l.repeat(T); d < O; ++d) N += t.charAt(m[d]);
        return N
    }

    function b(E) {
        if (typeof E != "string") throw new TypeError("Expected String");
        if (E.length === 0) return new Uint8Array;
        var T = 0;
        if (E[T] !== " ") {
            for (var F = 0, j = 0; E[T] === l;) F++, T++;
            for (var D = (E.length - T) * u + 1 >>> 0, O = new Uint8Array(D); E[T];) {
                var m = r[E.charCodeAt(T)];
                if (m === 255) return;
                for (var _ = 0, g = D - 1;
                    (m !== 0 || _ < j) && g !== -1; g--, _++) m += c * O[g] >>> 0, O[g] = m % 256 >>> 0, m = m / 256 >>> 0;
                if (m !== 0) throw new Error("Non-zero carry");
                j = _, T++
            }
            if (E[T] !== " ") {
                for (var s = D - j; s !== D && O[s] === 0;) s++;
                for (var d = new Uint8Array(F + (D - s)), N = F; s !== D;) d[N++] = O[s++];
                return d
            }
        }
    }

    function w(E) {
        var T = b(E);
        if (T) return T;
        throw new Error(`Non-${e} character`)
    }
    return {
        encode: y,
        decodeUnsafe: b,
        decode: w
    }
}
var Vh = qh,
    Gh = Vh;
const Yh = t => {
        if (t instanceof Uint8Array && t.constructor.name === "Uint8Array") return t;
        if (t instanceof ArrayBuffer) return new Uint8Array(t);
        if (ArrayBuffer.isView(t)) return new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
        throw new Error("Unknown type, must be binary type")
    },
    Jh = t => new TextEncoder().encode(t),
    Xh = t => new TextDecoder().decode(t);
class Qh {
    constructor(e, r, i) {
        this.name = e, this.prefix = r, this.baseEncode = i
    }
    encode(e) {
        if (e instanceof Uint8Array) return `${this.prefix}${this.baseEncode(e)}`;
        throw Error("Unknown type, must be binary type")
    }
}
class Zh {
    constructor(e, r, i) {
        if (this.name = e, this.prefix = r, r.codePointAt(0) === void 0) throw new Error("Invalid prefix character");
        this.prefixCodePoint = r.codePointAt(0), this.baseDecode = i
    }
    decode(e) {
        if (typeof e == "string") {
            if (e.codePointAt(0) !== this.prefixCodePoint) throw Error(`Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
            return this.baseDecode(e.slice(this.prefix.length))
        } else throw Error("Can only multibase decode strings")
    }
    or(e) {
        return Go(this, e)
    }
}
class el {
    constructor(e) {
        this.decoders = e
    }
    or(e) {
        return Go(this, e)
    }
    decode(e) {
        const r = e[0],
            i = this.decoders[r];
        if (i) return i.decode(e);
        throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`)
    }
}
const Go = (t, e) => new el(Ee(Ee({}, t.decoders || {
    [t.prefix]: t
}), e.decoders || {
    [e.prefix]: e
}));
class tl {
    constructor(e, r, i, n) {
        this.name = e, this.prefix = r, this.baseEncode = i, this.baseDecode = n, this.encoder = new Qh(e, r, i), this.decoder = new Zh(e, r, n)
    }
    encode(e) {
        return this.encoder.encode(e)
    }
    decode(e) {
        return this.decoder.decode(e)
    }
}
const mi = ({
        name: t,
        prefix: e,
        encode: r,
        decode: i
    }) => new tl(t, e, r, i),
    Ur = ({
        prefix: t,
        name: e,
        alphabet: r
    }) => {
        const {
            encode: i,
            decode: n
        } = Gh(r, e);
        return mi({
            prefix: t,
            name: e,
            encode: i,
            decode: a => Yh(n(a))
        })
    },
    rl = (t, e, r, i) => {
        const n = {};
        for (let f = 0; f < e.length; ++f) n[e[f]] = f;
        let a = t.length;
        for (; t[a - 1] === "=";) --a;
        const h = new Uint8Array(a * r / 8 | 0);
        let c = 0,
            l = 0,
            u = 0;
        for (let f = 0; f < a; ++f) {
            const y = n[t[f]];
            if (y === void 0) throw new SyntaxError(`Non-${i} character`);
            l = l << r | y, c += r, c >= 8 && (c -= 8, h[u++] = 255 & l >> c)
        }
        if (c >= r || 255 & l << 8 - c) throw new SyntaxError("Unexpected end of data");
        return h
    },
    il = (t, e, r) => {
        const i = e[e.length - 1] === "=",
            n = (1 << r) - 1;
        let a = "",
            h = 0,
            c = 0;
        for (let l = 0; l < t.length; ++l)
            for (c = c << 8 | t[l], h += 8; h > r;) h -= r, a += e[n & c >> h];
        if (h && (a += e[n & c << r - h]), i)
            for (; a.length * r & 7;) a += "=";
        return a
    },
    Ze = ({
        name: t,
        prefix: e,
        bitsPerChar: r,
        alphabet: i
    }) => mi({
        prefix: e,
        name: t,
        encode(n) {
            return il(n, i, r)
        },
        decode(n) {
            return rl(n, i, r, t)
        }
    }),
    nl = mi({
        prefix: "\0",
        name: "identity",
        encode: t => Xh(t),
        decode: t => Jh(t)
    }),
    sl = Object.freeze(Object.defineProperty({
        __proto__: null,
        identity: nl
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    ol = Ze({
        prefix: "0",
        name: "base2",
        alphabet: "01",
        bitsPerChar: 1
    }),
    al = Object.freeze(Object.defineProperty({
        __proto__: null,
        base2: ol
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    cl = Ze({
        prefix: "7",
        name: "base8",
        alphabet: "01234567",
        bitsPerChar: 3
    }),
    ul = Object.freeze(Object.defineProperty({
        __proto__: null,
        base8: cl
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    hl = Ur({
        prefix: "9",
        name: "base10",
        alphabet: "0123456789"
    }),
    ll = Object.freeze(Object.defineProperty({
        __proto__: null,
        base10: hl
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    fl = Ze({
        prefix: "f",
        name: "base16",
        alphabet: "0123456789abcdef",
        bitsPerChar: 4
    }),
    dl = Ze({
        prefix: "F",
        name: "base16upper",
        alphabet: "0123456789ABCDEF",
        bitsPerChar: 4
    }),
    gl = Object.freeze(Object.defineProperty({
        __proto__: null,
        base16: fl,
        base16upper: dl
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    pl = Ze({
        prefix: "b",
        name: "base32",
        alphabet: "abcdefghijklmnopqrstuvwxyz234567",
        bitsPerChar: 5
    }),
    yl = Ze({
        prefix: "B",
        name: "base32upper",
        alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
        bitsPerChar: 5
    }),
    bl = Ze({
        prefix: "c",
        name: "base32pad",
        alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
        bitsPerChar: 5
    }),
    ml = Ze({
        prefix: "C",
        name: "base32padupper",
        alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
        bitsPerChar: 5
    }),
    vl = Ze({
        prefix: "v",
        name: "base32hex",
        alphabet: "0123456789abcdefghijklmnopqrstuv",
        bitsPerChar: 5
    }),
    wl = Ze({
        prefix: "V",
        name: "base32hexupper",
        alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
        bitsPerChar: 5
    }),
    _l = Ze({
        prefix: "t",
        name: "base32hexpad",
        alphabet: "0123456789abcdefghijklmnopqrstuv=",
        bitsPerChar: 5
    }),
    El = Ze({
        prefix: "T",
        name: "base32hexpadupper",
        alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
        bitsPerChar: 5
    }),
    Dl = Ze({
        prefix: "h",
        name: "base32z",
        alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
        bitsPerChar: 5
    }),
    Sl = Object.freeze(Object.defineProperty({
        __proto__: null,
        base32: pl,
        base32hex: vl,
        base32hexpad: _l,
        base32hexpadupper: El,
        base32hexupper: wl,
        base32pad: bl,
        base32padupper: ml,
        base32upper: yl,
        base32z: Dl
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    xl = Ur({
        prefix: "k",
        name: "base36",
        alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
    }),
    Il = Ur({
        prefix: "K",
        name: "base36upper",
        alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    }),
    Ol = Object.freeze(Object.defineProperty({
        __proto__: null,
        base36: xl,
        base36upper: Il
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Al = Ur({
        name: "base58btc",
        prefix: "z",
        alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
    }),
    Cl = Ur({
        name: "base58flickr",
        prefix: "Z",
        alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
    }),
    Tl = Object.freeze(Object.defineProperty({
        __proto__: null,
        base58btc: Al,
        base58flickr: Cl
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Pl = Ze({
        prefix: "m",
        name: "base64",
        alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        bitsPerChar: 6
    }),
    Ll = Ze({
        prefix: "M",
        name: "base64pad",
        alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        bitsPerChar: 6
    }),
    Nl = Ze({
        prefix: "u",
        name: "base64url",
        alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
        bitsPerChar: 6
    }),
    Fl = Ze({
        prefix: "U",
        name: "base64urlpad",
        alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
        bitsPerChar: 6
    }),
    Rl = Object.freeze(Object.defineProperty({
        __proto__: null,
        base64: Pl,
        base64pad: Ll,
        base64url: Nl,
        base64urlpad: Fl
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Yo = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"),
    Ul = Yo.reduce((t, e, r) => (t[r] = e, t), []),
    Ml = Yo.reduce((t, e, r) => (t[e.codePointAt(0)] = r, t), []);

function $l(t) {
    return t.reduce((e, r) => (e += Ul[r], e), "")
}

function jl(t) {
    const e = [];
    for (const r of t) {
        const i = Ml[r.codePointAt(0)];
        if (i === void 0) throw new Error(`Non-base256emoji character: ${r}`);
        e.push(i)
    }
    return new Uint8Array(e)
}
const Bl = mi({
        prefix: "🚀",
        name: "base256emoji",
        encode: $l,
        decode: jl
    }),
    zl = Object.freeze(Object.defineProperty({
        __proto__: null,
        base256emoji: Bl
    }, Symbol.toStringTag, {
        value: "Module"
    }));
new TextEncoder;
new TextDecoder;
const bs = Ee(Ee(Ee(Ee(Ee(Ee(Ee(Ee(Ee(Ee({}, sl), al), ul), ll), gl), Sl), Ol), Tl), Rl), zl);

function Jo(t, e, r, i) {
    return {
        name: t,
        prefix: e,
        encoder: {
            name: t,
            prefix: e,
            encode: r
        },
        decoder: {
            decode: i
        }
    }
}
const ms = Jo("utf8", "u", t => "u" + new TextDecoder("utf8").decode(t), t => new TextEncoder().encode(t.substring(1))),
    Fi = Jo("ascii", "a", t => {
        let e = "a";
        for (let r = 0; r < t.length; r++) e += String.fromCharCode(t[r]);
        return e
    }, t => {
        t = t.substring(1);
        const e = Vo(t.length);
        for (let r = 0; r < t.length; r++) e[r] = t.charCodeAt(r);
        return e
    }),
    Xo = Ee({
        utf8: ms,
        "utf-8": ms,
        hex: bs.base16,
        latin1: Fi,
        ascii: Fi,
        binary: Fi
    }, bs);

function at(t, e = "utf8") {
    const r = Xo[e];
    if (!r) throw new Error(`Unsupported encoding "${e}"`);
    return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? globalThis.Buffer.from(t.buffer, t.byteOffset, t.byteLength).toString("utf8") : r.encoder.encode(t).substring(1)
}

function ut(t, e = "utf8") {
    const r = Xo[e];
    if (!r) throw new Error(`Unsupported encoding "${e}"`);
    return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? bn(globalThis.Buffer.from(t, "utf-8")) : r.decoder.decode(`${r.prefix}${t}`)
}

function ui(t) {
    return at(ut(Rr(t), $h), qo)
}

function Qo(t) {
    const e = ut(Wh, ys),
        r = Hh + at(Xi([e, t]), ys);
    return [zh, Kh, r].join(Bh)
}

function Kl(t) {
    return at(t, qo)
}

function Hl(t) {
    return ut([ui(t.header), ui(t.payload)].join(ko), jh)
}

function Wl(t) {
    return [ui(t.header), ui(t.payload), Kl(t.signature)].join(ko)
}

function vs(t = dr.randomBytes(kh)) {
    return yn.generateKeyPairFromSeed(t)
}
async function kl(t, e, r, i, n = ee.fromMiliseconds(Date.now())) {
    const a = {
            alg: Uh,
            typ: Mh
        },
        h = Qo(i.publicKey),
        c = n + r,
        l = {
            iss: h,
            sub: t,
            aud: e,
            iat: n,
            exp: c
        },
        u = Hl({
            header: a,
            payload: l
        }),
        f = yn.sign(i.secretKey, u);
    return Wl({
        header: a,
        payload: l,
        signature: f
    })
}
var mn = {},
    vi = {};
Object.defineProperty(vi, "__esModule", {
    value: !0
});
var rt = ie,
    Qi = dt,
    ql = 20;

function Vl(t, e, r) {
    for (var i = 1634760805, n = 857760878, a = 2036477234, h = 1797285236, c = r[3] << 24 | r[2] << 16 | r[1] << 8 | r[0], l = r[7] << 24 | r[6] << 16 | r[5] << 8 | r[4], u = r[11] << 24 | r[10] << 16 | r[9] << 8 | r[8], f = r[15] << 24 | r[14] << 16 | r[13] << 8 | r[12], y = r[19] << 24 | r[18] << 16 | r[17] << 8 | r[16], b = r[23] << 24 | r[22] << 16 | r[21] << 8 | r[20], w = r[27] << 24 | r[26] << 16 | r[25] << 8 | r[24], E = r[31] << 24 | r[30] << 16 | r[29] << 8 | r[28], T = e[3] << 24 | e[2] << 16 | e[1] << 8 | e[0], F = e[7] << 24 | e[6] << 16 | e[5] << 8 | e[4], j = e[11] << 24 | e[10] << 16 | e[9] << 8 | e[8], D = e[15] << 24 | e[14] << 16 | e[13] << 8 | e[12], O = i, m = n, _ = a, g = h, s = c, d = l, N = u, L = f, R = y, W = b, V = w, S = E, P = T, q = F, z = j, M = D, B = 0; B < ql; B += 2) O = O + s | 0, P ^= O, P = P >>> 32 - 16 | P << 16, R = R + P | 0, s ^= R, s = s >>> 32 - 12 | s << 12, m = m + d | 0, q ^= m, q = q >>> 32 - 16 | q << 16, W = W + q | 0, d ^= W, d = d >>> 32 - 12 | d << 12, _ = _ + N | 0, z ^= _, z = z >>> 32 - 16 | z << 16, V = V + z | 0, N ^= V, N = N >>> 32 - 12 | N << 12, g = g + L | 0, M ^= g, M = M >>> 32 - 16 | M << 16, S = S + M | 0, L ^= S, L = L >>> 32 - 12 | L << 12, _ = _ + N | 0, z ^= _, z = z >>> 32 - 8 | z << 8, V = V + z | 0, N ^= V, N = N >>> 32 - 7 | N << 7, g = g + L | 0, M ^= g, M = M >>> 32 - 8 | M << 8, S = S + M | 0, L ^= S, L = L >>> 32 - 7 | L << 7, m = m + d | 0, q ^= m, q = q >>> 32 - 8 | q << 8, W = W + q | 0, d ^= W, d = d >>> 32 - 7 | d << 7, O = O + s | 0, P ^= O, P = P >>> 32 - 8 | P << 8, R = R + P | 0, s ^= R, s = s >>> 32 - 7 | s << 7, O = O + d | 0, M ^= O, M = M >>> 32 - 16 | M << 16, V = V + M | 0, d ^= V, d = d >>> 32 - 12 | d << 12, m = m + N | 0, P ^= m, P = P >>> 32 - 16 | P << 16, S = S + P | 0, N ^= S, N = N >>> 32 - 12 | N << 12, _ = _ + L | 0, q ^= _, q = q >>> 32 - 16 | q << 16, R = R + q | 0, L ^= R, L = L >>> 32 - 12 | L << 12, g = g + s | 0, z ^= g, z = z >>> 32 - 16 | z << 16, W = W + z | 0, s ^= W, s = s >>> 32 - 12 | s << 12, _ = _ + L | 0, q ^= _, q = q >>> 32 - 8 | q << 8, R = R + q | 0, L ^= R, L = L >>> 32 - 7 | L << 7, g = g + s | 0, z ^= g, z = z >>> 32 - 8 | z << 8, W = W + z | 0, s ^= W, s = s >>> 32 - 7 | s << 7, m = m + N | 0, P ^= m, P = P >>> 32 - 8 | P << 8, S = S + P | 0, N ^= S, N = N >>> 32 - 7 | N << 7, O = O + d | 0, M ^= O, M = M >>> 32 - 8 | M << 8, V = V + M | 0, d ^= V, d = d >>> 32 - 7 | d << 7;
    rt.writeUint32LE(O + i | 0, t, 0), rt.writeUint32LE(m + n | 0, t, 4), rt.writeUint32LE(_ + a | 0, t, 8), rt.writeUint32LE(g + h | 0, t, 12), rt.writeUint32LE(s + c | 0, t, 16), rt.writeUint32LE(d + l | 0, t, 20), rt.writeUint32LE(N + u | 0, t, 24), rt.writeUint32LE(L + f | 0, t, 28), rt.writeUint32LE(R + y | 0, t, 32), rt.writeUint32LE(W + b | 0, t, 36), rt.writeUint32LE(V + w | 0, t, 40), rt.writeUint32LE(S + E | 0, t, 44), rt.writeUint32LE(P + T | 0, t, 48), rt.writeUint32LE(q + F | 0, t, 52), rt.writeUint32LE(z + j | 0, t, 56), rt.writeUint32LE(M + D | 0, t, 60)
}

function Zo(t, e, r, i, n) {
    if (n === void 0 && (n = 0), t.length !== 32) throw new Error("ChaCha: key size must be 32 bytes");
    if (i.length < r.length) throw new Error("ChaCha: destination is shorter than source");
    var a, h;
    if (n === 0) {
        if (e.length !== 8 && e.length !== 12) throw new Error("ChaCha nonce must be 8 or 12 bytes");
        a = new Uint8Array(16), h = a.length - e.length, a.set(e, h)
    } else {
        if (e.length !== 16) throw new Error("ChaCha nonce with counter must be 16 bytes");
        a = e, h = n
    }
    for (var c = new Uint8Array(64), l = 0; l < r.length; l += 64) {
        Vl(c, a, t);
        for (var u = l; u < l + 64 && u < r.length; u++) i[u] = r[u] ^ c[u - l];
        Yl(a, 0, h)
    }
    return Qi.wipe(c), n === 0 && Qi.wipe(a), i
}
vi.streamXOR = Zo;

function Gl(t, e, r, i) {
    return i === void 0 && (i = 0), Qi.wipe(r), Zo(t, e, r, r, i)
}
vi.stream = Gl;

function Yl(t, e, r) {
    for (var i = 1; r--;) i = i + (t[e] & 255) | 0, t[e] = i & 255, i >>>= 8, e++;
    if (i > 0) throw new Error("ChaCha: counter overflow")
}
var ea = {},
    Wt = {};
Object.defineProperty(Wt, "__esModule", {
    value: !0
});

function Jl(t, e, r) {
    return ~(t - 1) & e | t - 1 & r
}
Wt.select = Jl;

function Xl(t, e) {
    return (t | 0) - (e | 0) - 1 >>> 31 & 1
}
Wt.lessOrEqual = Xl;

function ta(t, e) {
    if (t.length !== e.length) return 0;
    for (var r = 0, i = 0; i < t.length; i++) r |= t[i] ^ e[i];
    return 1 & r - 1 >>> 8
}
Wt.compare = ta;

function Ql(t, e) {
    return t.length === 0 || e.length === 0 ? !1 : ta(t, e) !== 0
}
Wt.equal = Ql;
(function(t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var e = Wt,
        r = dt;
    t.DIGEST_LENGTH = 16;
    var i = function() {
        function h(c) {
            this.digestLength = t.DIGEST_LENGTH, this._buffer = new Uint8Array(16), this._r = new Uint16Array(10), this._h = new Uint16Array(10), this._pad = new Uint16Array(8), this._leftover = 0, this._fin = 0, this._finished = !1;
            var l = c[0] | c[1] << 8;
            this._r[0] = l & 8191;
            var u = c[2] | c[3] << 8;
            this._r[1] = (l >>> 13 | u << 3) & 8191;
            var f = c[4] | c[5] << 8;
            this._r[2] = (u >>> 10 | f << 6) & 7939;
            var y = c[6] | c[7] << 8;
            this._r[3] = (f >>> 7 | y << 9) & 8191;
            var b = c[8] | c[9] << 8;
            this._r[4] = (y >>> 4 | b << 12) & 255, this._r[5] = b >>> 1 & 8190;
            var w = c[10] | c[11] << 8;
            this._r[6] = (b >>> 14 | w << 2) & 8191;
            var E = c[12] | c[13] << 8;
            this._r[7] = (w >>> 11 | E << 5) & 8065;
            var T = c[14] | c[15] << 8;
            this._r[8] = (E >>> 8 | T << 8) & 8191, this._r[9] = T >>> 5 & 127, this._pad[0] = c[16] | c[17] << 8, this._pad[1] = c[18] | c[19] << 8, this._pad[2] = c[20] | c[21] << 8, this._pad[3] = c[22] | c[23] << 8, this._pad[4] = c[24] | c[25] << 8, this._pad[5] = c[26] | c[27] << 8, this._pad[6] = c[28] | c[29] << 8, this._pad[7] = c[30] | c[31] << 8
        }
        return h.prototype._blocks = function(c, l, u) {
            for (var f = this._fin ? 0 : 2048, y = this._h[0], b = this._h[1], w = this._h[2], E = this._h[3], T = this._h[4], F = this._h[5], j = this._h[6], D = this._h[7], O = this._h[8], m = this._h[9], _ = this._r[0], g = this._r[1], s = this._r[2], d = this._r[3], N = this._r[4], L = this._r[5], R = this._r[6], W = this._r[7], V = this._r[8], S = this._r[9]; u >= 16;) {
                var P = c[l + 0] | c[l + 1] << 8;
                y += P & 8191;
                var q = c[l + 2] | c[l + 3] << 8;
                b += (P >>> 13 | q << 3) & 8191;
                var z = c[l + 4] | c[l + 5] << 8;
                w += (q >>> 10 | z << 6) & 8191;
                var M = c[l + 6] | c[l + 7] << 8;
                E += (z >>> 7 | M << 9) & 8191;
                var B = c[l + 8] | c[l + 9] << 8;
                T += (M >>> 4 | B << 12) & 8191, F += B >>> 1 & 8191;
                var U = c[l + 10] | c[l + 11] << 8;
                j += (B >>> 14 | U << 2) & 8191;
                var K = c[l + 12] | c[l + 13] << 8;
                D += (U >>> 11 | K << 5) & 8191;
                var Z = c[l + 14] | c[l + 15] << 8;
                O += (K >>> 8 | Z << 8) & 8191, m += Z >>> 5 | f;
                var H = 0,
                    X = H;
                X += y * _, X += b * (5 * S), X += w * (5 * V), X += E * (5 * W), X += T * (5 * R), H = X >>> 13, X &= 8191, X += F * (5 * L), X += j * (5 * N), X += D * (5 * d), X += O * (5 * s), X += m * (5 * g), H += X >>> 13, X &= 8191;
                var Y = H;
                Y += y * g, Y += b * _, Y += w * (5 * S), Y += E * (5 * V), Y += T * (5 * W), H = Y >>> 13, Y &= 8191, Y += F * (5 * R), Y += j * (5 * L), Y += D * (5 * N), Y += O * (5 * d), Y += m * (5 * s), H += Y >>> 13, Y &= 8191;
                var Q = H;
                Q += y * s, Q += b * g, Q += w * _, Q += E * (5 * S), Q += T * (5 * V), H = Q >>> 13, Q &= 8191, Q += F * (5 * W), Q += j * (5 * R), Q += D * (5 * L), Q += O * (5 * N), Q += m * (5 * d), H += Q >>> 13, Q &= 8191;
                var C = H;
                C += y * d, C += b * s, C += w * g, C += E * _, C += T * (5 * S), H = C >>> 13, C &= 8191, C += F * (5 * V), C += j * (5 * W), C += D * (5 * R), C += O * (5 * L), C += m * (5 * N), H += C >>> 13, C &= 8191;
                var A = H;
                A += y * N, A += b * d, A += w * s, A += E * g, A += T * _, H = A >>> 13, A &= 8191, A += F * (5 * S), A += j * (5 * V), A += D * (5 * W), A += O * (5 * R), A += m * (5 * L), H += A >>> 13, A &= 8191;
                var x = H;
                x += y * L, x += b * N, x += w * d, x += E * s, x += T * g, H = x >>> 13, x &= 8191, x += F * _, x += j * (5 * S), x += D * (5 * V), x += O * (5 * W), x += m * (5 * R), H += x >>> 13, x &= 8191;
                var o = H;
                o += y * R, o += b * L, o += w * N, o += E * d, o += T * s, H = o >>> 13, o &= 8191, o += F * g, o += j * _, o += D * (5 * S), o += O * (5 * V), o += m * (5 * W), H += o >>> 13, o &= 8191;
                var v = H;
                v += y * W, v += b * R, v += w * L, v += E * N, v += T * d, H = v >>> 13, v &= 8191, v += F * s, v += j * g, v += D * _, v += O * (5 * S), v += m * (5 * V), H += v >>> 13, v &= 8191;
                var k = H;
                k += y * V, k += b * W, k += w * R, k += E * L, k += T * N, H = k >>> 13, k &= 8191, k += F * d, k += j * s, k += D * g, k += O * _, k += m * (5 * S), H += k >>> 13, k &= 8191;
                var G = H;
                G += y * S, G += b * V, G += w * W, G += E * R, G += T * L, H = G >>> 13, G &= 8191, G += F * N, G += j * d, G += D * s, G += O * g, G += m * _, H += G >>> 13, G &= 8191, H = (H << 2) + H | 0, H = H + X | 0, X = H & 8191, H = H >>> 13, Y += H, y = X, b = Y, w = Q, E = C, T = A, F = x, j = o, D = v, O = k, m = G, l += 16, u -= 16
            }
            this._h[0] = y, this._h[1] = b, this._h[2] = w, this._h[3] = E, this._h[4] = T, this._h[5] = F, this._h[6] = j, this._h[7] = D, this._h[8] = O, this._h[9] = m
        }, h.prototype.finish = function(c, l) {
            l === void 0 && (l = 0);
            var u = new Uint16Array(10),
                f, y, b, w;
            if (this._leftover) {
                for (w = this._leftover, this._buffer[w++] = 1; w < 16; w++) this._buffer[w] = 0;
                this._fin = 1, this._blocks(this._buffer, 0, 16)
            }
            for (f = this._h[1] >>> 13, this._h[1] &= 8191, w = 2; w < 10; w++) this._h[w] += f, f = this._h[w] >>> 13, this._h[w] &= 8191;
            for (this._h[0] += f * 5, f = this._h[0] >>> 13, this._h[0] &= 8191, this._h[1] += f, f = this._h[1] >>> 13, this._h[1] &= 8191, this._h[2] += f, u[0] = this._h[0] + 5, f = u[0] >>> 13, u[0] &= 8191, w = 1; w < 10; w++) u[w] = this._h[w] + f, f = u[w] >>> 13, u[w] &= 8191;
            for (u[9] -= 8192, y = (f ^ 1) - 1, w = 0; w < 10; w++) u[w] &= y;
            for (y = ~y, w = 0; w < 10; w++) this._h[w] = this._h[w] & y | u[w];
            for (this._h[0] = (this._h[0] | this._h[1] << 13) & 65535, this._h[1] = (this._h[1] >>> 3 | this._h[2] << 10) & 65535, this._h[2] = (this._h[2] >>> 6 | this._h[3] << 7) & 65535, this._h[3] = (this._h[3] >>> 9 | this._h[4] << 4) & 65535, this._h[4] = (this._h[4] >>> 12 | this._h[5] << 1 | this._h[6] << 14) & 65535, this._h[5] = (this._h[6] >>> 2 | this._h[7] << 11) & 65535, this._h[6] = (this._h[7] >>> 5 | this._h[8] << 8) & 65535, this._h[7] = (this._h[8] >>> 8 | this._h[9] << 5) & 65535, b = this._h[0] + this._pad[0], this._h[0] = b & 65535, w = 1; w < 8; w++) b = (this._h[w] + this._pad[w] | 0) + (b >>> 16) | 0, this._h[w] = b & 65535;
            return c[l + 0] = this._h[0] >>> 0, c[l + 1] = this._h[0] >>> 8, c[l + 2] = this._h[1] >>> 0, c[l + 3] = this._h[1] >>> 8, c[l + 4] = this._h[2] >>> 0, c[l + 5] = this._h[2] >>> 8, c[l + 6] = this._h[3] >>> 0, c[l + 7] = this._h[3] >>> 8, c[l + 8] = this._h[4] >>> 0, c[l + 9] = this._h[4] >>> 8, c[l + 10] = this._h[5] >>> 0, c[l + 11] = this._h[5] >>> 8, c[l + 12] = this._h[6] >>> 0, c[l + 13] = this._h[6] >>> 8, c[l + 14] = this._h[7] >>> 0, c[l + 15] = this._h[7] >>> 8, this._finished = !0, this
        }, h.prototype.update = function(c) {
            var l = 0,
                u = c.length,
                f;
            if (this._leftover) {
                f = 16 - this._leftover, f > u && (f = u);
                for (var y = 0; y < f; y++) this._buffer[this._leftover + y] = c[l + y];
                if (u -= f, l += f, this._leftover += f, this._leftover < 16) return this;
                this._blocks(this._buffer, 0, 16), this._leftover = 0
            }
            if (u >= 16 && (f = u - u % 16, this._blocks(c, l, f), l += f, u -= f), u) {
                for (var y = 0; y < u; y++) this._buffer[this._leftover + y] = c[l + y];
                this._leftover += u
            }
            return this
        }, h.prototype.digest = function() {
            if (this._finished) throw new Error("Poly1305 was finished");
            var c = new Uint8Array(16);
            return this.finish(c), c
        }, h.prototype.clean = function() {
            return r.wipe(this._buffer), r.wipe(this._r), r.wipe(this._h), r.wipe(this._pad), this._leftover = 0, this._fin = 0, this._finished = !0, this
        }, h
    }();
    t.Poly1305 = i;

    function n(h, c) {
        var l = new i(h);
        l.update(c);
        var u = l.digest();
        return l.clean(), u
    }
    t.oneTimeAuth = n;

    function a(h, c) {
        return h.length !== t.DIGEST_LENGTH || c.length !== t.DIGEST_LENGTH ? !1 : e.equal(h, c)
    }
    t.equal = a
})(ea);
(function(t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var e = vi,
        r = ea,
        i = dt,
        n = ie,
        a = Wt;
    t.KEY_LENGTH = 32, t.NONCE_LENGTH = 12, t.TAG_LENGTH = 16;
    var h = new Uint8Array(16),
        c = function() {
            function l(u) {
                if (this.nonceLength = t.NONCE_LENGTH, this.tagLength = t.TAG_LENGTH, u.length !== t.KEY_LENGTH) throw new Error("ChaCha20Poly1305 needs 32-byte key");
                this._key = new Uint8Array(u)
            }
            return l.prototype.seal = function(u, f, y, b) {
                if (u.length > 16) throw new Error("ChaCha20Poly1305: incorrect nonce length");
                var w = new Uint8Array(16);
                w.set(u, w.length - u.length);
                var E = new Uint8Array(32);
                e.stream(this._key, w, E, 4);
                var T = f.length + this.tagLength,
                    F;
                if (b) {
                    if (b.length !== T) throw new Error("ChaCha20Poly1305: incorrect destination length");
                    F = b
                } else F = new Uint8Array(T);
                return e.streamXOR(this._key, w, f, F, 4), this._authenticate(F.subarray(F.length - this.tagLength, F.length), E, F.subarray(0, F.length - this.tagLength), y), i.wipe(w), F
            }, l.prototype.open = function(u, f, y, b) {
                if (u.length > 16) throw new Error("ChaCha20Poly1305: incorrect nonce length");
                if (f.length < this.tagLength) return null;
                var w = new Uint8Array(16);
                w.set(u, w.length - u.length);
                var E = new Uint8Array(32);
                e.stream(this._key, w, E, 4);
                var T = new Uint8Array(this.tagLength);
                if (this._authenticate(T, E, f.subarray(0, f.length - this.tagLength), y), !a.equal(T, f.subarray(f.length - this.tagLength, f.length))) return null;
                var F = f.length - this.tagLength,
                    j;
                if (b) {
                    if (b.length !== F) throw new Error("ChaCha20Poly1305: incorrect destination length");
                    j = b
                } else j = new Uint8Array(F);
                return e.streamXOR(this._key, w, f.subarray(0, f.length - this.tagLength), j, 4), i.wipe(w), j
            }, l.prototype.clean = function() {
                return i.wipe(this._key), this
            }, l.prototype._authenticate = function(u, f, y, b) {
                var w = new r.Poly1305(f);
                b && (w.update(b), b.length % 16 > 0 && w.update(h.subarray(b.length % 16))), w.update(y), y.length % 16 > 0 && w.update(h.subarray(y.length % 16));
                var E = new Uint8Array(8);
                b && n.writeUint64LE(b.length, E), w.update(E), n.writeUint64LE(y.length, E), w.update(E);
                for (var T = w.digest(), F = 0; F < T.length; F++) u[F] = T[F];
                w.clean(), i.wipe(T), i.wipe(E)
            }, l
        }();
    t.ChaCha20Poly1305 = c
})(mn);
var ra = {},
    Mr = {},
    vn = {};
Object.defineProperty(vn, "__esModule", {
    value: !0
});

function Zl(t) {
    return typeof t.saveState != "undefined" && typeof t.restoreState != "undefined" && typeof t.cleanSavedState != "undefined"
}
vn.isSerializableHash = Zl;
Object.defineProperty(Mr, "__esModule", {
    value: !0
});
var xt = vn,
    ef = Wt,
    tf = dt,
    ia = function() {
        function t(e, r) {
            this._finished = !1, this._inner = new e, this._outer = new e, this.blockSize = this._outer.blockSize, this.digestLength = this._outer.digestLength;
            var i = new Uint8Array(this.blockSize);
            r.length > this.blockSize ? this._inner.update(r).finish(i).clean() : i.set(r);
            for (var n = 0; n < i.length; n++) i[n] ^= 54;
            this._inner.update(i);
            for (var n = 0; n < i.length; n++) i[n] ^= 106;
            this._outer.update(i), xt.isSerializableHash(this._inner) && xt.isSerializableHash(this._outer) && (this._innerKeyedState = this._inner.saveState(), this._outerKeyedState = this._outer.saveState()), tf.wipe(i)
        }
        return t.prototype.reset = function() {
            if (!xt.isSerializableHash(this._inner) || !xt.isSerializableHash(this._outer)) throw new Error("hmac: can't reset() because hash doesn't implement restoreState()");
            return this._inner.restoreState(this._innerKeyedState), this._outer.restoreState(this._outerKeyedState), this._finished = !1, this
        }, t.prototype.clean = function() {
            xt.isSerializableHash(this._inner) && this._inner.cleanSavedState(this._innerKeyedState), xt.isSerializableHash(this._outer) && this._outer.cleanSavedState(this._outerKeyedState), this._inner.clean(), this._outer.clean()
        }, t.prototype.update = function(e) {
            return this._inner.update(e), this
        }, t.prototype.finish = function(e) {
            return this._finished ? (this._outer.finish(e), this) : (this._inner.finish(e), this._outer.update(e.subarray(0, this.digestLength)).finish(e), this._finished = !0, this)
        }, t.prototype.digest = function() {
            var e = new Uint8Array(this.digestLength);
            return this.finish(e), e
        }, t.prototype.saveState = function() {
            if (!xt.isSerializableHash(this._inner)) throw new Error("hmac: can't saveState() because hash doesn't implement it");
            return this._inner.saveState()
        }, t.prototype.restoreState = function(e) {
            if (!xt.isSerializableHash(this._inner) || !xt.isSerializableHash(this._outer)) throw new Error("hmac: can't restoreState() because hash doesn't implement it");
            return this._inner.restoreState(e), this._outer.restoreState(this._outerKeyedState), this._finished = !1, this
        }, t.prototype.cleanSavedState = function(e) {
            if (!xt.isSerializableHash(this._inner)) throw new Error("hmac: can't cleanSavedState() because hash doesn't implement it");
            this._inner.cleanSavedState(e)
        }, t
    }();
Mr.HMAC = ia;

function rf(t, e, r) {
    var i = new ia(t, e);
    i.update(r);
    var n = i.digest();
    return i.clean(), n
}
Mr.hmac = rf;
Mr.equal = ef.equal;
Object.defineProperty(ra, "__esModule", {
    value: !0
});
var ws = Mr,
    _s = dt,
    nf = function() {
        function t(e, r, i, n) {
            i === void 0 && (i = new Uint8Array(0)), this._counter = new Uint8Array(1), this._hash = e, this._info = n;
            var a = ws.hmac(this._hash, i, r);
            this._hmac = new ws.HMAC(e, a), this._buffer = new Uint8Array(this._hmac.digestLength), this._bufpos = this._buffer.length
        }
        return t.prototype._fillBuffer = function() {
            this._counter[0]++;
            var e = this._counter[0];
            if (e === 0) throw new Error("hkdf: cannot expand more");
            this._hmac.reset(), e > 1 && this._hmac.update(this._buffer), this._info && this._hmac.update(this._info), this._hmac.update(this._counter), this._hmac.finish(this._buffer), this._bufpos = 0
        }, t.prototype.expand = function(e) {
            for (var r = new Uint8Array(e), i = 0; i < r.length; i++) this._bufpos === this._buffer.length && this._fillBuffer(), r[i] = this._buffer[this._bufpos++];
            return r
        }, t.prototype.clean = function() {
            this._hmac.clean(), _s.wipe(this._buffer), _s.wipe(this._counter), this._bufpos = 0
        }, t
    }(),
    sf = ra.HKDF = nf,
    wi = {};
(function(t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var e = ie,
        r = dt;
    t.DIGEST_LENGTH = 32, t.BLOCK_SIZE = 64;
    var i = function() {
        function c() {
            this.digestLength = t.DIGEST_LENGTH, this.blockSize = t.BLOCK_SIZE, this._state = new Int32Array(8), this._temp = new Int32Array(64), this._buffer = new Uint8Array(128), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this.reset()
        }
        return c.prototype._initState = function() {
            this._state[0] = 1779033703, this._state[1] = 3144134277, this._state[2] = 1013904242, this._state[3] = 2773480762, this._state[4] = 1359893119, this._state[5] = 2600822924, this._state[6] = 528734635, this._state[7] = 1541459225
        }, c.prototype.reset = function() {
            return this._initState(), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this
        }, c.prototype.clean = function() {
            r.wipe(this._buffer), r.wipe(this._temp), this.reset()
        }, c.prototype.update = function(l, u) {
            if (u === void 0 && (u = l.length), this._finished) throw new Error("SHA256: can't update because hash was finished.");
            var f = 0;
            if (this._bytesHashed += u, this._bufferLength > 0) {
                for (; this._bufferLength < this.blockSize && u > 0;) this._buffer[this._bufferLength++] = l[f++], u--;
                this._bufferLength === this.blockSize && (a(this._temp, this._state, this._buffer, 0, this.blockSize), this._bufferLength = 0)
            }
            for (u >= this.blockSize && (f = a(this._temp, this._state, l, f, u), u %= this.blockSize); u > 0;) this._buffer[this._bufferLength++] = l[f++], u--;
            return this
        }, c.prototype.finish = function(l) {
            if (!this._finished) {
                var u = this._bytesHashed,
                    f = this._bufferLength,
                    y = u / 536870912 | 0,
                    b = u << 3,
                    w = u % 64 < 56 ? 64 : 128;
                this._buffer[f] = 128;
                for (var E = f + 1; E < w - 8; E++) this._buffer[E] = 0;
                e.writeUint32BE(y, this._buffer, w - 8), e.writeUint32BE(b, this._buffer, w - 4), a(this._temp, this._state, this._buffer, 0, w), this._finished = !0
            }
            for (var E = 0; E < this.digestLength / 4; E++) e.writeUint32BE(this._state[E], l, E * 4);
            return this
        }, c.prototype.digest = function() {
            var l = new Uint8Array(this.digestLength);
            return this.finish(l), l
        }, c.prototype.saveState = function() {
            if (this._finished) throw new Error("SHA256: cannot save finished state");
            return {
                state: new Int32Array(this._state),
                buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
                bufferLength: this._bufferLength,
                bytesHashed: this._bytesHashed
            }
        }, c.prototype.restoreState = function(l) {
            return this._state.set(l.state), this._bufferLength = l.bufferLength, l.buffer && this._buffer.set(l.buffer), this._bytesHashed = l.bytesHashed, this._finished = !1, this
        }, c.prototype.cleanSavedState = function(l) {
            r.wipe(l.state), l.buffer && r.wipe(l.buffer), l.bufferLength = 0, l.bytesHashed = 0
        }, c
    }();
    t.SHA256 = i;
    var n = new Int32Array([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]);

    function a(c, l, u, f, y) {
        for (; y >= 64;) {
            for (var b = l[0], w = l[1], E = l[2], T = l[3], F = l[4], j = l[5], D = l[6], O = l[7], m = 0; m < 16; m++) {
                var _ = f + m * 4;
                c[m] = e.readUint32BE(u, _)
            }
            for (var m = 16; m < 64; m++) {
                var g = c[m - 2],
                    s = (g >>> 17 | g << 32 - 17) ^ (g >>> 19 | g << 32 - 19) ^ g >>> 10;
                g = c[m - 15];
                var d = (g >>> 7 | g << 32 - 7) ^ (g >>> 18 | g << 32 - 18) ^ g >>> 3;
                c[m] = (s + c[m - 7] | 0) + (d + c[m - 16] | 0)
            }
            for (var m = 0; m < 64; m++) {
                var s = (((F >>> 6 | F << 26) ^ (F >>> 11 | F << 21) ^ (F >>> 25 | F << 7)) + (F & j ^ ~F & D) | 0) + (O + (n[m] + c[m] | 0) | 0) | 0,
                    d = ((b >>> 2 | b << 32 - 2) ^ (b >>> 13 | b << 32 - 13) ^ (b >>> 22 | b << 32 - 22)) + (b & w ^ b & E ^ w & E) | 0;
                O = D, D = j, j = F, F = T + s | 0, T = E, E = w, w = b, b = s + d | 0
            }
            l[0] += b, l[1] += w, l[2] += E, l[3] += T, l[4] += F, l[5] += j, l[6] += D, l[7] += O, f += 64, y -= 64
        }
        return f
    }

    function h(c) {
        var l = new i;
        l.update(c);
        var u = l.digest();
        return l.clean(), u
    }
    t.hash = h
})(wi);
var wn = {};
(function(t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.sharedKey = t.generateKeyPair = t.generateKeyPairFromSeed = t.scalarMultBase = t.scalarMult = t.SHARED_KEY_LENGTH = t.SECRET_KEY_LENGTH = t.PUBLIC_KEY_LENGTH = void 0;
    const e = dr,
        r = dt;
    t.PUBLIC_KEY_LENGTH = 32, t.SECRET_KEY_LENGTH = 32, t.SHARED_KEY_LENGTH = 32;

    function i(m) {
        const _ = new Float64Array(16);
        if (m)
            for (let g = 0; g < m.length; g++) _[g] = m[g];
        return _
    }
    const n = new Uint8Array(32);
    n[0] = 9;
    const a = i([56129, 1]);

    function h(m) {
        let _ = 1;
        for (let g = 0; g < 16; g++) {
            let s = m[g] + _ + 65535;
            _ = Math.floor(s / 65536), m[g] = s - _ * 65536
        }
        m[0] += _ - 1 + 37 * (_ - 1)
    }

    function c(m, _, g) {
        const s = ~(g - 1);
        for (let d = 0; d < 16; d++) {
            const N = s & (m[d] ^ _[d]);
            m[d] ^= N, _[d] ^= N
        }
    }

    function l(m, _) {
        const g = i(),
            s = i();
        for (let d = 0; d < 16; d++) s[d] = _[d];
        h(s), h(s), h(s);
        for (let d = 0; d < 2; d++) {
            g[0] = s[0] - 65517;
            for (let L = 1; L < 15; L++) g[L] = s[L] - 65535 - (g[L - 1] >> 16 & 1), g[L - 1] &= 65535;
            g[15] = s[15] - 32767 - (g[14] >> 16 & 1);
            const N = g[15] >> 16 & 1;
            g[14] &= 65535, c(s, g, 1 - N)
        }
        for (let d = 0; d < 16; d++) m[2 * d] = s[d] & 255, m[2 * d + 1] = s[d] >> 8
    }

    function u(m, _) {
        for (let g = 0; g < 16; g++) m[g] = _[2 * g] + (_[2 * g + 1] << 8);
        m[15] &= 32767
    }

    function f(m, _, g) {
        for (let s = 0; s < 16; s++) m[s] = _[s] + g[s]
    }

    function y(m, _, g) {
        for (let s = 0; s < 16; s++) m[s] = _[s] - g[s]
    }

    function b(m, _, g) {
        let s, d, N = 0,
            L = 0,
            R = 0,
            W = 0,
            V = 0,
            S = 0,
            P = 0,
            q = 0,
            z = 0,
            M = 0,
            B = 0,
            U = 0,
            K = 0,
            Z = 0,
            H = 0,
            X = 0,
            Y = 0,
            Q = 0,
            C = 0,
            A = 0,
            x = 0,
            o = 0,
            v = 0,
            k = 0,
            G = 0,
            le = 0,
            be = 0,
            de = 0,
            we = 0,
            Re = 0,
            Pe = 0,
            ye = g[0],
            ge = g[1],
            fe = g[2],
            ue = g[3],
            ae = g[4],
            oe = g[5],
            se = g[6],
            te = g[7],
            he = g[8],
            pe = g[9],
            re = g[10],
            me = g[11],
            ve = g[12],
            De = g[13],
            Se = g[14],
            _e = g[15];
        s = _[0], N += s * ye, L += s * ge, R += s * fe, W += s * ue, V += s * ae, S += s * oe, P += s * se, q += s * te, z += s * he, M += s * pe, B += s * re, U += s * me, K += s * ve, Z += s * De, H += s * Se, X += s * _e, s = _[1], L += s * ye, R += s * ge, W += s * fe, V += s * ue, S += s * ae, P += s * oe, q += s * se, z += s * te, M += s * he, B += s * pe, U += s * re, K += s * me, Z += s * ve, H += s * De, X += s * Se, Y += s * _e, s = _[2], R += s * ye, W += s * ge, V += s * fe, S += s * ue, P += s * ae, q += s * oe, z += s * se, M += s * te, B += s * he, U += s * pe, K += s * re, Z += s * me, H += s * ve, X += s * De, Y += s * Se, Q += s * _e, s = _[3], W += s * ye, V += s * ge, S += s * fe, P += s * ue, q += s * ae, z += s * oe, M += s * se, B += s * te, U += s * he, K += s * pe, Z += s * re, H += s * me, X += s * ve, Y += s * De, Q += s * Se, C += s * _e, s = _[4], V += s * ye, S += s * ge, P += s * fe, q += s * ue, z += s * ae, M += s * oe, B += s * se, U += s * te, K += s * he, Z += s * pe, H += s * re, X += s * me, Y += s * ve, Q += s * De, C += s * Se, A += s * _e, s = _[5], S += s * ye, P += s * ge, q += s * fe, z += s * ue, M += s * ae, B += s * oe, U += s * se, K += s * te, Z += s * he, H += s * pe, X += s * re, Y += s * me, Q += s * ve, C += s * De, A += s * Se, x += s * _e, s = _[6], P += s * ye, q += s * ge, z += s * fe, M += s * ue, B += s * ae, U += s * oe, K += s * se, Z += s * te, H += s * he, X += s * pe, Y += s * re, Q += s * me, C += s * ve, A += s * De, x += s * Se, o += s * _e, s = _[7], q += s * ye, z += s * ge, M += s * fe, B += s * ue, U += s * ae, K += s * oe, Z += s * se, H += s * te, X += s * he, Y += s * pe, Q += s * re, C += s * me, A += s * ve, x += s * De, o += s * Se, v += s * _e, s = _[8], z += s * ye, M += s * ge, B += s * fe, U += s * ue, K += s * ae, Z += s * oe, H += s * se, X += s * te, Y += s * he, Q += s * pe, C += s * re, A += s * me, x += s * ve, o += s * De, v += s * Se, k += s * _e, s = _[9], M += s * ye, B += s * ge, U += s * fe, K += s * ue, Z += s * ae, H += s * oe, X += s * se, Y += s * te, Q += s * he, C += s * pe, A += s * re, x += s * me, o += s * ve, v += s * De, k += s * Se, G += s * _e, s = _[10], B += s * ye, U += s * ge, K += s * fe, Z += s * ue, H += s * ae, X += s * oe, Y += s * se, Q += s * te, C += s * he, A += s * pe, x += s * re, o += s * me, v += s * ve, k += s * De, G += s * Se, le += s * _e, s = _[11], U += s * ye, K += s * ge, Z += s * fe, H += s * ue, X += s * ae, Y += s * oe, Q += s * se, C += s * te, A += s * he, x += s * pe, o += s * re, v += s * me, k += s * ve, G += s * De, le += s * Se, be += s * _e, s = _[12], K += s * ye, Z += s * ge, H += s * fe, X += s * ue, Y += s * ae, Q += s * oe, C += s * se, A += s * te, x += s * he, o += s * pe, v += s * re, k += s * me, G += s * ve, le += s * De, be += s * Se, de += s * _e, s = _[13], Z += s * ye, H += s * ge, X += s * fe, Y += s * ue, Q += s * ae, C += s * oe, A += s * se, x += s * te, o += s * he, v += s * pe, k += s * re, G += s * me, le += s * ve, be += s * De, de += s * Se, we += s * _e, s = _[14], H += s * ye, X += s * ge, Y += s * fe, Q += s * ue, C += s * ae, A += s * oe, x += s * se, o += s * te, v += s * he, k += s * pe, G += s * re, le += s * me, be += s * ve, de += s * De, we += s * Se, Re += s * _e, s = _[15], X += s * ye, Y += s * ge, Q += s * fe, C += s * ue, A += s * ae, x += s * oe, o += s * se, v += s * te, k += s * he, G += s * pe, le += s * re, be += s * me, de += s * ve, we += s * De, Re += s * Se, Pe += s * _e, N += 38 * Y, L += 38 * Q, R += 38 * C, W += 38 * A, V += 38 * x, S += 38 * o, P += 38 * v, q += 38 * k, z += 38 * G, M += 38 * le, B += 38 * be, U += 38 * de, K += 38 * we, Z += 38 * Re, H += 38 * Pe, d = 1, s = N + d + 65535, d = Math.floor(s / 65536), N = s - d * 65536, s = L + d + 65535, d = Math.floor(s / 65536), L = s - d * 65536, s = R + d + 65535, d = Math.floor(s / 65536), R = s - d * 65536, s = W + d + 65535, d = Math.floor(s / 65536), W = s - d * 65536, s = V + d + 65535, d = Math.floor(s / 65536), V = s - d * 65536, s = S + d + 65535, d = Math.floor(s / 65536), S = s - d * 65536, s = P + d + 65535, d = Math.floor(s / 65536), P = s - d * 65536, s = q + d + 65535, d = Math.floor(s / 65536), q = s - d * 65536, s = z + d + 65535, d = Math.floor(s / 65536), z = s - d * 65536, s = M + d + 65535, d = Math.floor(s / 65536), M = s - d * 65536, s = B + d + 65535, d = Math.floor(s / 65536), B = s - d * 65536, s = U + d + 65535, d = Math.floor(s / 65536), U = s - d * 65536, s = K + d + 65535, d = Math.floor(s / 65536), K = s - d * 65536, s = Z + d + 65535, d = Math.floor(s / 65536), Z = s - d * 65536, s = H + d + 65535, d = Math.floor(s / 65536), H = s - d * 65536, s = X + d + 65535, d = Math.floor(s / 65536), X = s - d * 65536, N += d - 1 + 37 * (d - 1), d = 1, s = N + d + 65535, d = Math.floor(s / 65536), N = s - d * 65536, s = L + d + 65535, d = Math.floor(s / 65536), L = s - d * 65536, s = R + d + 65535, d = Math.floor(s / 65536), R = s - d * 65536, s = W + d + 65535, d = Math.floor(s / 65536), W = s - d * 65536, s = V + d + 65535, d = Math.floor(s / 65536), V = s - d * 65536, s = S + d + 65535, d = Math.floor(s / 65536), S = s - d * 65536, s = P + d + 65535, d = Math.floor(s / 65536), P = s - d * 65536, s = q + d + 65535, d = Math.floor(s / 65536), q = s - d * 65536, s = z + d + 65535, d = Math.floor(s / 65536), z = s - d * 65536, s = M + d + 65535, d = Math.floor(s / 65536), M = s - d * 65536, s = B + d + 65535, d = Math.floor(s / 65536), B = s - d * 65536, s = U + d + 65535, d = Math.floor(s / 65536), U = s - d * 65536, s = K + d + 65535, d = Math.floor(s / 65536), K = s - d * 65536, s = Z + d + 65535, d = Math.floor(s / 65536), Z = s - d * 65536, s = H + d + 65535, d = Math.floor(s / 65536), H = s - d * 65536, s = X + d + 65535, d = Math.floor(s / 65536), X = s - d * 65536, N += d - 1 + 37 * (d - 1), m[0] = N, m[1] = L, m[2] = R, m[3] = W, m[4] = V, m[5] = S, m[6] = P, m[7] = q, m[8] = z, m[9] = M, m[10] = B, m[11] = U, m[12] = K, m[13] = Z, m[14] = H, m[15] = X
    }

    function w(m, _) {
        b(m, _, _)
    }

    function E(m, _) {
        const g = i();
        for (let s = 0; s < 16; s++) g[s] = _[s];
        for (let s = 253; s >= 0; s--) w(g, g), s !== 2 && s !== 4 && b(g, g, _);
        for (let s = 0; s < 16; s++) m[s] = g[s]
    }

    function T(m, _) {
        const g = new Uint8Array(32),
            s = new Float64Array(80),
            d = i(),
            N = i(),
            L = i(),
            R = i(),
            W = i(),
            V = i();
        for (let z = 0; z < 31; z++) g[z] = m[z];
        g[31] = m[31] & 127 | 64, g[0] &= 248, u(s, _);
        for (let z = 0; z < 16; z++) N[z] = s[z];
        d[0] = R[0] = 1;
        for (let z = 254; z >= 0; --z) {
            const M = g[z >>> 3] >>> (z & 7) & 1;
            c(d, N, M), c(L, R, M), f(W, d, L), y(d, d, L), f(L, N, R), y(N, N, R), w(R, W), w(V, d), b(d, L, d), b(L, N, W), f(W, d, L), y(d, d, L), w(N, d), y(L, R, V), b(d, L, a), f(d, d, R), b(L, L, d), b(d, R, V), b(R, N, s), w(N, W), c(d, N, M), c(L, R, M)
        }
        for (let z = 0; z < 16; z++) s[z + 16] = d[z], s[z + 32] = L[z], s[z + 48] = N[z], s[z + 64] = R[z];
        const S = s.subarray(32),
            P = s.subarray(16);
        E(S, S), b(P, P, S);
        const q = new Uint8Array(32);
        return l(q, P), q
    }
    t.scalarMult = T;

    function F(m) {
        return T(m, n)
    }
    t.scalarMultBase = F;

    function j(m) {
        if (m.length !== t.SECRET_KEY_LENGTH) throw new Error(`x25519: seed must be ${t.SECRET_KEY_LENGTH} bytes`);
        const _ = new Uint8Array(m);
        return {
            publicKey: F(_),
            secretKey: _
        }
    }
    t.generateKeyPairFromSeed = j;

    function D(m) {
        const _ = (0, e.randomBytes)(32, m),
            g = j(_);
        return (0, r.wipe)(_), g
    }
    t.generateKeyPair = D;

    function O(m, _, g = !1) {
        if (m.length !== t.PUBLIC_KEY_LENGTH) throw new Error("X25519: incorrect secret key length");
        if (_.length !== t.PUBLIC_KEY_LENGTH) throw new Error("X25519: incorrect public key length");
        const s = T(m, _);
        if (g) {
            let d = 0;
            for (let N = 0; N < s.length; N++) d |= s[N];
            if (d === 0) throw new Error("X25519: invalid shared key")
        }
        return s
    }
    t.sharedKey = O
})(wn);
var Es = globalThis && globalThis.__spreadArray || function(t, e, r) {
        if (r || arguments.length === 2)
            for (var i = 0, n = e.length, a; i < n; i++)(a || !(i in e)) && (a || (a = Array.prototype.slice.call(e, 0, i)), a[i] = e[i]);
        return t.concat(a || Array.prototype.slice.call(e))
    },
    of = function() {
        function t(e, r, i) {
            this.name = e, this.version = r, this.os = i, this.type = "browser"
        }
        return t
    }(),
    af = function() {
        function t(e) {
            this.version = e, this.type = "node", this.name = "node", this.os = process.platform
        }
        return t
    }(),
    cf = function() {
        function t(e, r, i, n) {
            this.name = e, this.version = r, this.os = i, this.bot = n, this.type = "bot-device"
        }
        return t
    }(),
    uf = function() {
        function t() {
            this.type = "bot", this.bot = !0, this.name = "bot", this.version = null, this.os = null
        }
        return t
    }(),
    hf = function() {
        function t() {
            this.type = "react-native", this.name = "react-native", this.version = null, this.os = null
        }
        return t
    }(),
    lf = /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/,
    ff = /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,
    Ds = 3,
    df = [
        ["aol", /AOLShield\/([0-9\._]+)/],
        ["edge", /Edge\/([0-9\._]+)/],
        ["edge-ios", /EdgiOS\/([0-9\._]+)/],
        ["yandexbrowser", /YaBrowser\/([0-9\._]+)/],
        ["kakaotalk", /KAKAOTALK\s([0-9\.]+)/],
        ["samsung", /SamsungBrowser\/([0-9\.]+)/],
        ["silk", /\bSilk\/([0-9._-]+)\b/],
        ["miui", /MiuiBrowser\/([0-9\.]+)$/],
        ["beaker", /BeakerBrowser\/([0-9\.]+)/],
        ["edge-chromium", /EdgA?\/([0-9\.]+)/],
        ["chromium-webview", /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
        ["chrome", /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
        ["phantomjs", /PhantomJS\/([0-9\.]+)(:?\s|$)/],
        ["crios", /CriOS\/([0-9\.]+)(:?\s|$)/],
        ["firefox", /Firefox\/([0-9\.]+)(?:\s|$)/],
        ["fxios", /FxiOS\/([0-9\.]+)/],
        ["opera-mini", /Opera Mini.*Version\/([0-9\.]+)/],
        ["opera", /Opera\/([0-9\.]+)(?:\s|$)/],
        ["opera", /OPR\/([0-9\.]+)(:?\s|$)/],
        ["pie", /^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/],
        ["pie", /^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/],
        ["netfront", /^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/],
        ["ie", /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
        ["ie", /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
        ["ie", /MSIE\s(7\.0)/],
        ["bb10", /BB10;\sTouch.*Version\/([0-9\.]+)/],
        ["android", /Android\s([0-9\.]+)/],
        ["ios", /Version\/([0-9\._]+).*Mobile.*Safari.*/],
        ["safari", /Version\/([0-9\._]+).*Safari/],
        ["facebook", /FB[AS]V\/([0-9\.]+)/],
        ["instagram", /Instagram\s([0-9\.]+)/],
        ["ios-webview", /AppleWebKit\/([0-9\.]+).*Mobile/],
        ["ios-webview", /AppleWebKit\/([0-9\.]+).*Gecko\)$/],
        ["curl", /^curl\/([0-9\.]+)$/],
        ["searchbot", lf]
    ],
    Ss = [
        ["iOS", /iP(hone|od|ad)/],
        ["Android OS", /Android/],
        ["BlackBerry OS", /BlackBerry|BB10/],
        ["Windows Mobile", /IEMobile/],
        ["Amazon OS", /Kindle/],
        ["Windows 3.11", /Win16/],
        ["Windows 95", /(Windows 95)|(Win95)|(Windows_95)/],
        ["Windows 98", /(Windows 98)|(Win98)/],
        ["Windows 2000", /(Windows NT 5.0)|(Windows 2000)/],
        ["Windows XP", /(Windows NT 5.1)|(Windows XP)/],
        ["Windows Server 2003", /(Windows NT 5.2)/],
        ["Windows Vista", /(Windows NT 6.0)/],
        ["Windows 7", /(Windows NT 6.1)/],
        ["Windows 8", /(Windows NT 6.2)/],
        ["Windows 8.1", /(Windows NT 6.3)/],
        ["Windows 10", /(Windows NT 10.0)/],
        ["Windows ME", /Windows ME/],
        ["Windows CE", /Windows CE|WinCE|Microsoft Pocket Internet Explorer/],
        ["Open BSD", /OpenBSD/],
        ["Sun OS", /SunOS/],
        ["Chrome OS", /CrOS/],
        ["Linux", /(Linux)|(X11)/],
        ["Mac OS", /(Mac_PowerPC)|(Macintosh)/],
        ["QNX", /QNX/],
        ["BeOS", /BeOS/],
        ["OS/2", /OS\/2/]
    ];

function gf(t) {
    return t ? xs(t) : typeof document == "undefined" && typeof navigator != "undefined" && navigator.product === "ReactNative" ? new hf : typeof navigator != "undefined" ? xs(navigator.userAgent) : bf()
}

function pf(t) {
    return t !== "" && df.reduce(function(e, r) {
        var i = r[0],
            n = r[1];
        if (e) return e;
        var a = n.exec(t);
        return !!a && [i, a]
    }, !1)
}

function xs(t) {
    var e = pf(t);
    if (!e) return null;
    var r = e[0],
        i = e[1];
    if (r === "searchbot") return new uf;
    var n = i[1] && i[1].split(".").join("_").split("_").slice(0, 3);
    n ? n.length < Ds && (n = Es(Es([], n, !0), mf(Ds - n.length), !0)) : n = [];
    var a = n.join("."),
        h = yf(t),
        c = ff.exec(t);
    return c && c[1] ? new cf(r, a, h, c[1]) : new of (r, a, h)
}

function yf(t) {
    for (var e = 0, r = Ss.length; e < r; e++) {
        var i = Ss[e],
            n = i[0],
            a = i[1],
            h = a.exec(t);
        if (h) return n
    }
    return null
}

function bf() {
    var t = typeof process != "undefined" && process.version;
    return t ? new af(process.version.slice(1)) : null
}

function mf(t) {
    for (var e = [], r = 0; r < t; r++) e.push("0");
    return e
}
var Oe = {};
Object.defineProperty(Oe, "__esModule", {
    value: !0
});
Oe.getLocalStorage = Oe.getLocalStorageOrThrow = Oe.getCrypto = Oe.getCryptoOrThrow = na = Oe.getLocation = Oe.getLocationOrThrow = En = Oe.getNavigator = Oe.getNavigatorOrThrow = _n = Oe.getDocument = Oe.getDocumentOrThrow = Oe.getFromWindowOrThrow = Oe.getFromWindow = void 0;

function sr(t) {
    let e;
    return typeof window != "undefined" && typeof window[t] != "undefined" && (e = window[t]), e
}
Oe.getFromWindow = sr;

function gr(t) {
    const e = sr(t);
    if (!e) throw new Error(`${t} is not defined in Window`);
    return e
}
Oe.getFromWindowOrThrow = gr;

function vf() {
    return gr("document")
}
Oe.getDocumentOrThrow = vf;

function wf() {
    return sr("document")
}
var _n = Oe.getDocument = wf;

function _f() {
    return gr("navigator")
}
Oe.getNavigatorOrThrow = _f;

function Ef() {
    return sr("navigator")
}
var En = Oe.getNavigator = Ef;

function Df() {
    return gr("location")
}
Oe.getLocationOrThrow = Df;

function Sf() {
    return sr("location")
}
var na = Oe.getLocation = Sf;

function xf() {
    return gr("crypto")
}
Oe.getCryptoOrThrow = xf;

function If() {
    return sr("crypto")
}
Oe.getCrypto = If;

function Of() {
    return gr("localStorage")
}
Oe.getLocalStorageOrThrow = Of;

function Af() {
    return sr("localStorage")
}
Oe.getLocalStorage = Af;
var Dn = {};
Object.defineProperty(Dn, "__esModule", {
    value: !0
});
var sa = Dn.getWindowMetadata = void 0;
const Is = Oe;

function Cf() {
    let t, e;
    try {
        t = Is.getDocumentOrThrow(), e = Is.getLocationOrThrow()
    } catch (y) {
        return null
    }

    function r() {
        const y = t.getElementsByTagName("link"),
            b = [];
        for (let w = 0; w < y.length; w++) {
            const E = y[w],
                T = E.getAttribute("rel");
            if (T && T.toLowerCase().indexOf("icon") > -1) {
                const F = E.getAttribute("href");
                if (F)
                    if (F.toLowerCase().indexOf("https:") === -1 && F.toLowerCase().indexOf("http:") === -1 && F.indexOf("//") !== 0) {
                        let j = e.protocol + "//" + e.host;
                        if (F.indexOf("/") === 0) j += F;
                        else {
                            const D = e.pathname.split("/");
                            D.pop();
                            const O = D.join("/");
                            j += O + "/" + F
                        }
                        b.push(j)
                    } else if (F.indexOf("//") === 0) {
                    const j = e.protocol + F;
                    b.push(j)
                } else b.push(F)
            }
        }
        return b
    }

    function i(...y) {
        const b = t.getElementsByTagName("meta");
        for (let w = 0; w < b.length; w++) {
            const E = b[w],
                T = ["itemprop", "property", "name"].map(F => E.getAttribute(F)).filter(F => F ? y.includes(F) : !1);
            if (T.length && T) {
                const F = E.getAttribute("content");
                if (F) return F
            }
        }
        return ""
    }

    function n() {
        let y = i("name", "og:site_name", "og:title", "twitter:title");
        return y || (y = t.title), y
    }

    function a() {
        return i("description", "og:description", "twitter:description", "keywords")
    }
    const h = n(),
        c = a(),
        l = e.origin,
        u = r();
    return {
        description: c,
        url: l,
        icons: u,
        name: h
    }
}
sa = Dn.getWindowMetadata = Cf;
var Pr = {},
    Tf = t => encodeURIComponent(t).replace(/[!'()*]/g, e => `%${e.charCodeAt(0).toString(16).toUpperCase()}`),
    oa = "%[a-f0-9]{2}",
    Os = new RegExp("(" + oa + ")|([^%]+?)", "gi"),
    As = new RegExp("(" + oa + ")+", "gi");

function Zi(t, e) {
    try {
        return [decodeURIComponent(t.join(""))]
    } catch (n) {}
    if (t.length === 1) return t;
    e = e || 1;
    var r = t.slice(0, e),
        i = t.slice(e);
    return Array.prototype.concat.call([], Zi(r), Zi(i))
}

function Pf(t) {
    try {
        return decodeURIComponent(t)
    } catch (i) {
        for (var e = t.match(Os) || [], r = 1; r < e.length; r++) t = Zi(e, r).join(""), e = t.match(Os) || [];
        return t
    }
}

function Lf(t) {
    for (var e = {
            "%FE%FF": "��",
            "%FF%FE": "��"
        }, r = As.exec(t); r;) {
        try {
            e[r[0]] = decodeURIComponent(r[0])
        } catch (c) {
            var i = Pf(r[0]);
            i !== r[0] && (e[r[0]] = i)
        }
        r = As.exec(t)
    }
    e["%C2"] = "�";
    for (var n = Object.keys(e), a = 0; a < n.length; a++) {
        var h = n[a];
        t = t.replace(new RegExp(h, "g"), e[h])
    }
    return t
}
var Nf = function(t) {
        if (typeof t != "string") throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof t + "`");
        try {
            return t = t.replace(/\+/g, " "), decodeURIComponent(t)
        } catch (e) {
            return Lf(t)
        }
    },
    Ff = (t, e) => {
        if (!(typeof t == "string" && typeof e == "string")) throw new TypeError("Expected the arguments to be of type `string`");
        if (e === "") return [t];
        const r = t.indexOf(e);
        return r === -1 ? [t] : [t.slice(0, r), t.slice(r + e.length)]
    },
    Rf = function(t, e) {
        for (var r = {}, i = Object.keys(t), n = Array.isArray(e), a = 0; a < i.length; a++) {
            var h = i[a],
                c = t[h];
            (n ? e.indexOf(h) !== -1 : e(h, c, t)) && (r[h] = c)
        }
        return r
    };
(function(t) {
    const e = Tf,
        r = Nf,
        i = Ff,
        n = Rf,
        a = D => D == null,
        h = Symbol("encodeFragmentIdentifier");

    function c(D) {
        switch (D.arrayFormat) {
            case "index":
                return O => (m, _) => {
                    const g = m.length;
                    return _ === void 0 || D.skipNull && _ === null || D.skipEmptyString && _ === "" ? m : _ === null ? [...m, [f(O, D), "[", g, "]"].join("")] : [...m, [f(O, D), "[", f(g, D), "]=", f(_, D)].join("")]
                };
            case "bracket":
                return O => (m, _) => _ === void 0 || D.skipNull && _ === null || D.skipEmptyString && _ === "" ? m : _ === null ? [...m, [f(O, D), "[]"].join("")] : [...m, [f(O, D), "[]=", f(_, D)].join("")];
            case "colon-list-separator":
                return O => (m, _) => _ === void 0 || D.skipNull && _ === null || D.skipEmptyString && _ === "" ? m : _ === null ? [...m, [f(O, D), ":list="].join("")] : [...m, [f(O, D), ":list=", f(_, D)].join("")];
            case "comma":
            case "separator":
            case "bracket-separator":
                {
                    const O = D.arrayFormat === "bracket-separator" ? "[]=" : "=";
                    return m => (_, g) => g === void 0 || D.skipNull && g === null || D.skipEmptyString && g === "" ? _ : (g = g === null ? "" : g, _.length === 0 ? [
                        [f(m, D), O, f(g, D)].join("")
                    ] : [
                        [_, f(g, D)].join(D.arrayFormatSeparator)
                    ])
                }
            default:
                return O => (m, _) => _ === void 0 || D.skipNull && _ === null || D.skipEmptyString && _ === "" ? m : _ === null ? [...m, f(O, D)] : [...m, [f(O, D), "=", f(_, D)].join("")]
        }
    }

    function l(D) {
        let O;
        switch (D.arrayFormat) {
            case "index":
                return (m, _, g) => {
                    if (O = /\[(\d*)\]$/.exec(m), m = m.replace(/\[\d*\]$/, ""), !O) {
                        g[m] = _;
                        return
                    }
                    g[m] === void 0 && (g[m] = {}), g[m][O[1]] = _
                };
            case "bracket":
                return (m, _, g) => {
                    if (O = /(\[\])$/.exec(m), m = m.replace(/\[\]$/, ""), !O) {
                        g[m] = _;
                        return
                    }
                    if (g[m] === void 0) {
                        g[m] = [_];
                        return
                    }
                    g[m] = [].concat(g[m], _)
                };
            case "colon-list-separator":
                return (m, _, g) => {
                    if (O = /(:list)$/.exec(m), m = m.replace(/:list$/, ""), !O) {
                        g[m] = _;
                        return
                    }
                    if (g[m] === void 0) {
                        g[m] = [_];
                        return
                    }
                    g[m] = [].concat(g[m], _)
                };
            case "comma":
            case "separator":
                return (m, _, g) => {
                    const s = typeof _ == "string" && _.includes(D.arrayFormatSeparator),
                        d = typeof _ == "string" && !s && y(_, D).includes(D.arrayFormatSeparator);
                    _ = d ? y(_, D) : _;
                    const N = s || d ? _.split(D.arrayFormatSeparator).map(L => y(L, D)) : _ === null ? _ : y(_, D);
                    g[m] = N
                };
            case "bracket-separator":
                return (m, _, g) => {
                    const s = /(\[\])$/.test(m);
                    if (m = m.replace(/\[\]$/, ""), !s) {
                        g[m] = _ && y(_, D);
                        return
                    }
                    const d = _ === null ? [] : _.split(D.arrayFormatSeparator).map(N => y(N, D));
                    if (g[m] === void 0) {
                        g[m] = d;
                        return
                    }
                    g[m] = [].concat(g[m], d)
                };
            default:
                return (m, _, g) => {
                    if (g[m] === void 0) {
                        g[m] = _;
                        return
                    }
                    g[m] = [].concat(g[m], _)
                }
        }
    }

    function u(D) {
        if (typeof D != "string" || D.length !== 1) throw new TypeError("arrayFormatSeparator must be single character string")
    }

    function f(D, O) {
        return O.encode ? O.strict ? e(D) : encodeURIComponent(D) : D
    }

    function y(D, O) {
        return O.decode ? r(D) : D
    }

    function b(D) {
        return Array.isArray(D) ? D.sort() : typeof D == "object" ? b(Object.keys(D)).sort((O, m) => Number(O) - Number(m)).map(O => D[O]) : D
    }

    function w(D) {
        const O = D.indexOf("#");
        return O !== -1 && (D = D.slice(0, O)), D
    }

    function E(D) {
        let O = "";
        const m = D.indexOf("#");
        return m !== -1 && (O = D.slice(m)), O
    }

    function T(D) {
        D = w(D);
        const O = D.indexOf("?");
        return O === -1 ? "" : D.slice(O + 1)
    }

    function F(D, O) {
        return O.parseNumbers && !Number.isNaN(Number(D)) && typeof D == "string" && D.trim() !== "" ? D = Number(D) : O.parseBooleans && D !== null && (D.toLowerCase() === "true" || D.toLowerCase() === "false") && (D = D.toLowerCase() === "true"), D
    }

    function j(D, O) {
        O = Object.assign({
            decode: !0,
            sort: !0,
            arrayFormat: "none",
            arrayFormatSeparator: ",",
            parseNumbers: !1,
            parseBooleans: !1
        }, O), u(O.arrayFormatSeparator);
        const m = l(O),
            _ = Object.create(null);
        if (typeof D != "string" || (D = D.trim().replace(/^[?#&]/, ""), !D)) return _;
        for (const g of D.split("&")) {
            if (g === "") continue;
            let [s, d] = i(O.decode ? g.replace(/\+/g, " ") : g, "=");
            d = d === void 0 ? null : ["comma", "separator", "bracket-separator"].includes(O.arrayFormat) ? d : y(d, O), m(y(s, O), d, _)
        }
        for (const g of Object.keys(_)) {
            const s = _[g];
            if (typeof s == "object" && s !== null)
                for (const d of Object.keys(s)) s[d] = F(s[d], O);
            else _[g] = F(s, O)
        }
        return O.sort === !1 ? _ : (O.sort === !0 ? Object.keys(_).sort() : Object.keys(_).sort(O.sort)).reduce((g, s) => {
            const d = _[s];
            return d && typeof d == "object" && !Array.isArray(d) ? g[s] = b(d) : g[s] = d, g
        }, Object.create(null))
    }
    t.extract = T, t.parse = j, t.stringify = (D, O) => {
        if (!D) return "";
        O = Object.assign({
            encode: !0,
            strict: !0,
            arrayFormat: "none",
            arrayFormatSeparator: ","
        }, O), u(O.arrayFormatSeparator);
        const m = d => O.skipNull && a(D[d]) || O.skipEmptyString && D[d] === "",
            _ = c(O),
            g = {};
        for (const d of Object.keys(D)) m(d) || (g[d] = D[d]);
        const s = Object.keys(g);
        return O.sort !== !1 && s.sort(O.sort), s.map(d => {
            const N = D[d];
            return N === void 0 ? "" : N === null ? f(d, O) : Array.isArray(N) ? N.length === 0 && O.arrayFormat === "bracket-separator" ? f(d, O) + "[]" : N.reduce(_(d), []).join("&") : f(d, O) + "=" + f(N, O)
        }).filter(d => d.length > 0).join("&")
    }, t.parseUrl = (D, O) => {
        O = Object.assign({
            decode: !0
        }, O);
        const [m, _] = i(D, "#");
        return Object.assign({
            url: m.split("?")[0] || "",
            query: j(T(D), O)
        }, O && O.parseFragmentIdentifier && _ ? {
            fragmentIdentifier: y(_, O)
        } : {})
    }, t.stringifyUrl = (D, O) => {
        O = Object.assign({
            encode: !0,
            strict: !0,
            [h]: !0
        }, O);
        const m = w(D.url).split("?")[0] || "",
            _ = t.extract(D.url),
            g = t.parse(_, {
                sort: !1
            }),
            s = Object.assign(g, D.query);
        let d = t.stringify(s, O);
        d && (d = `?${d}`);
        let N = E(D.url);
        return D.fragmentIdentifier && (N = `#${O[h]?f(D.fragmentIdentifier,O):D.fragmentIdentifier}`), `${m}${d}${N}`
    }, t.pick = (D, O, m) => {
        m = Object.assign({
            parseFragmentIdentifier: !0,
            [h]: !1
        }, m);
        const {
            url: _,
            query: g,
            fragmentIdentifier: s
        } = t.parseUrl(D, m);
        return t.stringifyUrl({
            url: _,
            query: n(g, O),
            fragmentIdentifier: s
        }, m)
    }, t.exclude = (D, O, m) => {
        const _ = Array.isArray(O) ? g => !O.includes(g) : (g, s) => !O(g, s);
        return t.pick(D, _, m)
    }
})(Pr);
const Uf = {
        waku: {
            publish: "waku_publish",
            batchPublish: "waku_batchPublish",
            subscribe: "waku_subscribe",
            batchSubscribe: "waku_batchSubscribe",
            subscription: "waku_subscription",
            unsubscribe: "waku_unsubscribe",
            batchUnsubscribe: "waku_batchUnsubscribe"
        },
        irn: {
            publish: "irn_publish",
            batchPublish: "irn_batchPublish",
            subscribe: "irn_subscribe",
            batchSubscribe: "irn_batchSubscribe",
            subscription: "irn_subscription",
            unsubscribe: "irn_unsubscribe",
            batchUnsubscribe: "irn_batchUnsubscribe"
        },
        iridium: {
            publish: "iridium_publish",
            batchPublish: "iridium_batchPublish",
            subscribe: "iridium_subscribe",
            batchSubscribe: "iridium_batchSubscribe",
            subscription: "iridium_subscription",
            unsubscribe: "iridium_unsubscribe",
            batchUnsubscribe: "iridium_batchUnsubscribe"
        }
    },
    Mf = ":";

function $f(t) {
    const [e, r, i] = t.split(Mf);
    return {
        namespace: e,
        reference: r,
        address: i
    }
}

function U1(t) {
    const {
        address: e
    } = $f(t);
    return e
}

function aa(t, e) {
    return t.includes(":") ? [t] : e.chains || []
}
const ca = "base10",
    ot = "base16",
    en = "base64pad",
    Sn = "utf8",
    ua = 0,
    pr = 1,
    jf = 0,
    Cs = 1,
    tn = 12,
    xn = 32;

function Bf() {
    const t = wn.generateKeyPair();
    return {
        privateKey: at(t.secretKey, ot),
        publicKey: at(t.publicKey, ot)
    }
}

function rn() {
    const t = dr.randomBytes(xn);
    return at(t, ot)
}

function zf(t, e) {
    const r = wn.sharedKey(ut(t, ot), ut(e, ot), !0),
        i = new sf(wi.SHA256, r).expand(xn);
    return at(i, ot)
}

function Kf(t) {
    const e = wi.hash(ut(t, ot));
    return at(e, ot)
}

function nn(t) {
    const e = wi.hash(ut(t, Sn));
    return at(e, ot)
}

function Hf(t) {
    return ut(`${t}`, ca)
}

function $r(t) {
    return Number(at(t, ca))
}

function Wf(t) {
    const e = Hf(typeof t.type < "u" ? t.type : ua);
    if ($r(e) === pr && typeof t.senderPublicKey > "u") throw new Error("Missing sender public key for type 1 envelope");
    const r = typeof t.senderPublicKey < "u" ? ut(t.senderPublicKey, ot) : void 0,
        i = typeof t.iv < "u" ? ut(t.iv, ot) : dr.randomBytes(tn),
        n = new mn.ChaCha20Poly1305(ut(t.symKey, ot)).seal(i, ut(t.message, Sn));
    return qf({
        type: e,
        sealed: n,
        iv: i,
        senderPublicKey: r
    })
}

function kf(t) {
    const e = new mn.ChaCha20Poly1305(ut(t.symKey, ot)),
        {
            sealed: r,
            iv: i
        } = hi(t.encoded),
        n = e.open(i, r);
    if (n === null) throw new Error("Failed to decrypt");
    return at(n, Sn)
}

function qf(t) {
    if ($r(t.type) === pr) {
        if (typeof t.senderPublicKey > "u") throw new Error("Missing sender public key for type 1 envelope");
        return at(Xi([t.type, t.senderPublicKey, t.iv, t.sealed]), en)
    }
    return at(Xi([t.type, t.iv, t.sealed]), en)
}

function hi(t) {
    const e = ut(t, en),
        r = e.slice(jf, Cs),
        i = Cs;
    if ($r(r) === pr) {
        const c = i + xn,
            l = c + tn,
            u = e.slice(i, c),
            f = e.slice(c, l),
            y = e.slice(l);
        return {
            type: r,
            sealed: y,
            iv: f,
            senderPublicKey: u
        }
    }
    const n = i + tn,
        a = e.slice(i, n),
        h = e.slice(n);
    return {
        type: r,
        sealed: h,
        iv: a
    }
}

function Vf(t, e) {
    const r = hi(t);
    return ha({
        type: $r(r.type),
        senderPublicKey: typeof r.senderPublicKey < "u" ? at(r.senderPublicKey, ot) : void 0,
        receiverPublicKey: e == null ? void 0 : e.receiverPublicKey
    })
}

function ha(t) {
    const e = (t == null ? void 0 : t.type) || ua;
    if (e === pr) {
        if (typeof(t == null ? void 0 : t.senderPublicKey) > "u") throw new Error("missing sender public key");
        if (typeof(t == null ? void 0 : t.receiverPublicKey) > "u") throw new Error("missing receiver public key")
    }
    return {
        type: e,
        senderPublicKey: t == null ? void 0 : t.senderPublicKey,
        receiverPublicKey: t == null ? void 0 : t.receiverPublicKey
    }
}

function Ts(t) {
    return t.type === pr && typeof t.senderPublicKey == "string" && typeof t.receiverPublicKey == "string"
}
var Gf = Object.defineProperty,
    Ps = Object.getOwnPropertySymbols,
    Yf = Object.prototype.hasOwnProperty,
    Jf = Object.prototype.propertyIsEnumerable,
    Ls = (t, e, r) => e in t ? Gf(t, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : t[e] = r,
    Ns = (t, e) => {
        for (var r in e || (e = {})) Yf.call(e, r) && Ls(t, r, e[r]);
        if (Ps)
            for (var r of Ps(e)) Jf.call(e, r) && Ls(t, r, e[r]);
        return t
    };
const Xf = "ReactNative",
    ft = {
        reactNative: "react-native",
        node: "node",
        browser: "browser",
        unknown: "unknown"
    },
    Qf = "js";

function Lr() {
    return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u"
}

function yr() {
    return !_n() && !!En() && navigator.product === Xf
}

function jr() {
    return !Lr() && !!En() && !!_n()
}

function Br() {
    return yr() ? ft.reactNative : Lr() ? ft.node : jr() ? ft.browser : ft.unknown
}

function Zf() {
    var t;
    try {
        return yr() && typeof global < "u" && typeof(global == null ? void 0 : global.Application) < "u" ? (t = global.Application) == null ? void 0 : t.applicationId : void 0
    } catch (e) {
        return
    }
}

function ed(t, e) {
    let r = Pr.parse(t);
    return r = Ns(Ns({}, r), e), t = Pr.stringify(r), t
}

function M1() {
    return sa() || {
        name: "",
        description: "",
        url: "",
        icons: [""]
    }
}

function td() {
    if (Br() === ft.reactNative && typeof global < "u" && typeof(global == null ? void 0 : global.Platform) < "u") {
        const {
            OS: r,
            Version: i
        } = global.Platform;
        return [r, i].join("-")
    }
    const t = gf();
    if (t === null) return "unknown";
    const e = t.os ? t.os.replace(" ", "").toLowerCase() : "unknown";
    return t.type === "browser" ? [e, t.name, t.version].join("-") : [e, t.version].join("-")
}

function rd() {
    var t;
    const e = Br();
    return e === ft.browser ? [e, ((t = na()) == null ? void 0 : t.host) || "unknown"].join(":") : e
}

function id(t, e, r) {
    const i = td(),
        n = rd();
    return [
        [t, e].join("-"), [Qf, r].join("-"), i, n
    ].join("/")
}

function nd({
    protocol: t,
    version: e,
    relayUrl: r,
    sdkVersion: i,
    auth: n,
    projectId: a,
    useOnCloseEvent: h,
    bundleId: c
}) {
    const l = r.split("?"),
        u = id(t, e, i),
        f = {
            auth: n,
            ua: u,
            projectId: a,
            useOnCloseEvent: h || void 0,
            origin: c || void 0
        },
        y = ed(l[1] || "", f);
    return l[0] + "?" + y
}

function rr(t, e) {
    return t.filter(r => e.includes(r)).length === t.length
}

function la(t) {
    return Object.fromEntries(t.entries())
}

function fa(t) {
    return new Map(Object.entries(t))
}

function sd(t = ee.FIVE_MINUTES, e) {
    const r = ee.toMiliseconds(t || ee.FIVE_MINUTES);
    let i, n, a;
    return {
        resolve: h => {
            a && i && (clearTimeout(a), i(h))
        },
        reject: h => {
            a && n && (clearTimeout(a), n(h))
        },
        done: () => new Promise((h, c) => {
            a = setTimeout(() => {
                c(new Error(e))
            }, r), i = h, n = c
        })
    }
}

function Nr(t, e, r) {
    return new Promise(async (i, n) => {
        const a = setTimeout(() => n(new Error(r)), e);
        try {
            const h = await t;
            i(h)
        } catch (h) {
            n(h)
        }
        clearTimeout(a)
    })
}

function da(t, e) {
    if (typeof e == "string" && e.startsWith(`${t}:`)) return e;
    if (t.toLowerCase() === "topic") {
        if (typeof e != "string") throw new Error('Value must be "string" for expirer target type: topic');
        return `topic:${e}`
    } else if (t.toLowerCase() === "id") {
        if (typeof e != "number") throw new Error('Value must be "number" for expirer target type: id');
        return `id:${e}`
    }
    throw new Error(`Unknown expirer target type: ${t}`)
}

function od(t) {
    return da("topic", t)
}

function ad(t) {
    return da("id", t)
}

function cd(t) {
    const [e, r] = t.split(":"), i = {
        id: void 0,
        topic: void 0
    };
    if (e === "topic" && typeof r == "string") i.topic = r;
    else if (e === "id" && Number.isInteger(Number(r))) i.id = Number(r);
    else throw new Error(`Invalid target, expected id:number or topic:string, got ${e}:${r}`);
    return i
}

function si(t, e) {
    return ee.fromMiliseconds((e || Date.now()) + ee.toMiliseconds(t))
}

function Fs(t) {
    return Date.now() >= ee.toMiliseconds(t)
}

function Ri(t, e) {
    return `${t}${e?`:${e}`:""}`
}
async function $1({
    id: t,
    topic: e,
    wcDeepLink: r
}) {
    try {
        if (!r) return;
        const i = typeof r == "string" ? JSON.parse(r) : r;
        let n = i == null ? void 0 : i.href;
        if (typeof n != "string") return;
        n.endsWith("/") && (n = n.slice(0, -1));
        const a = `${n}/wc?requestId=${t}&sessionTopic=${e}`,
            h = Br();
        h === ft.browser ? a.startsWith("https://") ? window.open(a, "_blank", "noreferrer noopener") : window.open(a, "_self", "noreferrer noopener") : h === ft.reactNative && typeof(global == null ? void 0 : global.Linking) < "u" && await global.Linking.openURL(a)
    } catch (i) {
        console.error(i)
    }
}
async function j1(t, e) {
    try {
        return await t.getItem(e) || (jr() ? localStorage.getItem(e) : void 0)
    } catch (r) {
        console.error(r)
    }
}
const ud = "irn";

function sn(t) {
    return (t == null ? void 0 : t.relay) || {
        protocol: ud
    }
}

function oi(t) {
    const e = Uf[t];
    if (typeof e > "u") throw new Error(`Relay Protocol not supported: ${t}`);
    return e
}
var hd = Object.defineProperty,
    ld = Object.defineProperties,
    fd = Object.getOwnPropertyDescriptors,
    Rs = Object.getOwnPropertySymbols,
    dd = Object.prototype.hasOwnProperty,
    gd = Object.prototype.propertyIsEnumerable,
    Us = (t, e, r) => e in t ? hd(t, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : t[e] = r,
    pd = (t, e) => {
        for (var r in e || (e = {})) dd.call(e, r) && Us(t, r, e[r]);
        if (Rs)
            for (var r of Rs(e)) gd.call(e, r) && Us(t, r, e[r]);
        return t
    },
    yd = (t, e) => ld(t, fd(e));

function bd(t, e = "-") {
    const r = {},
        i = "relay" + e;
    return Object.keys(t).forEach(n => {
        if (n.startsWith(i)) {
            const a = n.replace(i, ""),
                h = t[n];
            r[a] = h
        }
    }), r
}

function Ms(t) {
    t = t.includes("wc://") ? t.replace("wc://", "") : t, t = t.includes("wc:") ? t.replace("wc:", "") : t;
    const e = t.indexOf(":"),
        r = t.indexOf("?") !== -1 ? t.indexOf("?") : void 0,
        i = t.substring(0, e),
        n = t.substring(e + 1, r).split("@"),
        a = typeof r < "u" ? t.substring(r) : "",
        h = Pr.parse(a);
    return {
        protocol: i,
        topic: md(n[0]),
        version: parseInt(n[1], 10),
        symKey: h.symKey,
        relay: bd(h),
        expiryTimestamp: h.expiryTimestamp ? parseInt(h.expiryTimestamp, 10) : void 0
    }
}

function md(t) {
    return t.startsWith("//") ? t.substring(2) : t
}

function vd(t, e = "-") {
    const r = "relay",
        i = {};
    return Object.keys(t).forEach(n => {
        const a = r + e + n;
        t[n] && (i[a] = t[n])
    }), i
}

function wd(t) {
    return `${t.protocol}:${t.topic}@${t.version}?` + Pr.stringify(yd(pd({
        symKey: t.symKey
    }, vd(t.relay)), {
        expiryTimestamp: t.expiryTimestamp
    }))
}

function br(t) {
    const e = [];
    return t.forEach(r => {
        const [i, n] = r.split(":");
        e.push(`${i}:${n}`)
    }), e
}

function _d(t) {
    const e = [];
    return Object.values(t).forEach(r => {
        e.push(...br(r.accounts))
    }), e
}

function Ed(t, e) {
    const r = [];
    return Object.values(t).forEach(i => {
        br(i.accounts).includes(e) && r.push(...i.methods)
    }), r
}

function Dd(t, e) {
    const r = [];
    return Object.values(t).forEach(i => {
        br(i.accounts).includes(e) && r.push(...i.events)
    }), r
}
const Sd = {
        INVALID_METHOD: {
            message: "Invalid method.",
            code: 1001
        },
        INVALID_EVENT: {
            message: "Invalid event.",
            code: 1002
        },
        INVALID_UPDATE_REQUEST: {
            message: "Invalid update request.",
            code: 1003
        },
        INVALID_EXTEND_REQUEST: {
            message: "Invalid extend request.",
            code: 1004
        },
        INVALID_SESSION_SETTLE_REQUEST: {
            message: "Invalid session settle request.",
            code: 1005
        },
        UNAUTHORIZED_METHOD: {
            message: "Unauthorized method.",
            code: 3001
        },
        UNAUTHORIZED_EVENT: {
            message: "Unauthorized event.",
            code: 3002
        },
        UNAUTHORIZED_UPDATE_REQUEST: {
            message: "Unauthorized update request.",
            code: 3003
        },
        UNAUTHORIZED_EXTEND_REQUEST: {
            message: "Unauthorized extend request.",
            code: 3004
        },
        USER_REJECTED: {
            message: "User rejected.",
            code: 5e3
        },
        USER_REJECTED_CHAINS: {
            message: "User rejected chains.",
            code: 5001
        },
        USER_REJECTED_METHODS: {
            message: "User rejected methods.",
            code: 5002
        },
        USER_REJECTED_EVENTS: {
            message: "User rejected events.",
            code: 5003
        },
        UNSUPPORTED_CHAINS: {
            message: "Unsupported chains.",
            code: 5100
        },
        UNSUPPORTED_METHODS: {
            message: "Unsupported methods.",
            code: 5101
        },
        UNSUPPORTED_EVENTS: {
            message: "Unsupported events.",
            code: 5102
        },
        UNSUPPORTED_ACCOUNTS: {
            message: "Unsupported accounts.",
            code: 5103
        },
        UNSUPPORTED_NAMESPACE_KEY: {
            message: "Unsupported namespace key.",
            code: 5104
        },
        USER_DISCONNECTED: {
            message: "User disconnected.",
            code: 6e3
        },
        SESSION_SETTLEMENT_FAILED: {
            message: "Session settlement failed.",
            code: 7e3
        },
        WC_METHOD_UNSUPPORTED: {
            message: "Unsupported wc_ method.",
            code: 10001
        }
    },
    xd = {
        NOT_INITIALIZED: {
            message: "Not initialized.",
            code: 1
        },
        NO_MATCHING_KEY: {
            message: "No matching key.",
            code: 2
        },
        RESTORE_WILL_OVERRIDE: {
            message: "Restore will override.",
            code: 3
        },
        RESUBSCRIBED: {
            message: "Resubscribed.",
            code: 4
        },
        MISSING_OR_INVALID: {
            message: "Missing or invalid.",
            code: 5
        },
        EXPIRED: {
            message: "Expired.",
            code: 6
        },
        UNKNOWN_TYPE: {
            message: "Unknown type.",
            code: 7
        },
        MISMATCHED_TOPIC: {
            message: "Mismatched topic.",
            code: 8
        },
        NON_CONFORMING_NAMESPACES: {
            message: "Non conforming namespaces.",
            code: 9
        }
    };

function ce(t, e) {
    const {
        message: r,
        code: i
    } = xd[t];
    return {
        message: e ? `${r} ${e}` : r,
        code: i
    }
}

function Et(t, e) {
    const {
        message: r,
        code: i
    } = Sd[t];
    return {
        message: e ? `${r} ${e}` : r,
        code: i
    }
}

function zr(t, e) {
    return Array.isArray(t) ? typeof e < "u" && t.length ? t.every(e) : !0 : !1
}

function ga(t) {
    return Object.getPrototypeOf(t) === Object.prototype && Object.keys(t).length
}

function Pt(t) {
    return typeof t > "u"
}

function gt(t, e) {
    return e && Pt(t) ? !0 : typeof t == "string" && !!t.trim().length
}

function In(t, e) {
    return e && Pt(t) ? !0 : typeof t == "number" && !isNaN(t)
}

function B1(t, e) {
    const {
        requiredNamespaces: r
    } = e, i = Object.keys(t.namespaces), n = Object.keys(r);
    let a = !0;
    return rr(n, i) ? (i.forEach(h => {
        const {
            accounts: c,
            methods: l,
            events: u
        } = t.namespaces[h], f = br(c), y = r[h];
        (!rr(aa(h, y), f) || !rr(y.methods, l) || !rr(y.events, u)) && (a = !1)
    }), a) : !1
}

function li(t) {
    return gt(t, !1) && t.includes(":") ? t.split(":").length === 2 : !1
}

function Id(t) {
    if (gt(t, !1) && t.includes(":")) {
        const e = t.split(":");
        if (e.length === 3) {
            const r = e[0] + ":" + e[1];
            return !!e[2] && li(r)
        }
    }
    return !1
}

function Od(t) {
    if (gt(t, !1)) try {
        return typeof new URL(t) < "u"
    } catch (e) {
        return !1
    }
    return !1
}

function Ad(t) {
    var e;
    return (e = t == null ? void 0 : t.proposer) == null ? void 0 : e.publicKey
}

function Cd(t) {
    return t == null ? void 0 : t.topic
}

function z1(t, e) {
    let r = null;
    return gt(t == null ? void 0 : t.publicKey, !1) || (r = ce("MISSING_OR_INVALID", `${e} controller public key should be a string`)), r
}

function $s(t) {
    let e = !0;
    return zr(t) ? t.length && (e = t.every(r => gt(r, !1))) : e = !1, e
}

function Td(t, e, r) {
    let i = null;
    return zr(e) && e.length ? e.forEach(n => {
        i || li(n) || (i = Et("UNSUPPORTED_CHAINS", `${r}, chain ${n} should be a string and conform to "namespace:chainId" format`))
    }) : li(t) || (i = Et("UNSUPPORTED_CHAINS", `${r}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`)), i
}

function Pd(t, e, r) {
    let i = null;
    return Object.entries(t).forEach(([n, a]) => {
        if (i) return;
        const h = Td(n, aa(n, a), `${e} ${r}`);
        h && (i = h)
    }), i
}

function Ld(t, e) {
    let r = null;
    return zr(t) ? t.forEach(i => {
        r || Id(i) || (r = Et("UNSUPPORTED_ACCOUNTS", `${e}, account ${i} should be a string and conform to "namespace:chainId:address" format`))
    }) : r = Et("UNSUPPORTED_ACCOUNTS", `${e}, accounts should be an array of strings conforming to "namespace:chainId:address" format`), r
}

function Nd(t, e) {
    let r = null;
    return Object.values(t).forEach(i => {
        if (r) return;
        const n = Ld(i == null ? void 0 : i.accounts, `${e} namespace`);
        n && (r = n)
    }), r
}

function Fd(t, e) {
    let r = null;
    return $s(t == null ? void 0 : t.methods) ? $s(t == null ? void 0 : t.events) || (r = Et("UNSUPPORTED_EVENTS", `${e}, events should be an array of strings or empty array for no events`)) : r = Et("UNSUPPORTED_METHODS", `${e}, methods should be an array of strings or empty array for no methods`), r
}

function pa(t, e) {
    let r = null;
    return Object.values(t).forEach(i => {
        if (r) return;
        const n = Fd(i, `${e}, namespace`);
        n && (r = n)
    }), r
}

function K1(t, e, r) {
    let i = null;
    if (t && ga(t)) {
        const n = pa(t, e);
        n && (i = n);
        const a = Pd(t, e, r);
        a && (i = a)
    } else i = ce("MISSING_OR_INVALID", `${e}, ${r} should be an object with data`);
    return i
}

function H1(t, e) {
    let r = null;
    if (t && ga(t)) {
        const i = pa(t, e);
        i && (r = i);
        const n = Nd(t, e);
        n && (r = n)
    } else r = ce("MISSING_OR_INVALID", `${e}, namespaces should be an object with data`);
    return r
}

function Rd(t) {
    return gt(t.protocol, !0)
}

function W1(t, e) {
    let r = !1;
    return e && !t ? r = !0 : t && zr(t) && t.length && t.forEach(i => {
        r = Rd(i)
    }), r
}

function k1(t) {
    return typeof t == "number"
}

function Ui(t) {
    return typeof t < "u" && typeof t !== null
}

function q1(t) {
    return !(!t || typeof t != "object" || !t.code || !In(t.code, !1) || !t.message || !gt(t.message, !1))
}

function V1(t) {
    return !(Pt(t) || !gt(t.method, !1))
}

function G1(t) {
    return !(Pt(t) || Pt(t.result) && Pt(t.error) || !In(t.id, !1) || !gt(t.jsonrpc, !1))
}

function Y1(t) {
    return !(Pt(t) || !gt(t.name, !1))
}

function J1(t, e) {
    return !(!li(e) || !_d(t).includes(e))
}

function X1(t, e, r) {
    return gt(r, !1) ? Ed(t, e).includes(r) : !1
}

function Q1(t, e, r) {
    return gt(r, !1) ? Dd(t, e).includes(r) : !1
}

function Z1(t, e, r) {
    let i = null;
    const n = Ud(t),
        a = Md(e),
        h = Object.keys(n),
        c = Object.keys(a),
        l = js(Object.keys(t)),
        u = js(Object.keys(e)),
        f = l.filter(y => !u.includes(y));
    return f.length && (i = ce("NON_CONFORMING_NAMESPACES", `${r} namespaces keys don't satisfy requiredNamespaces.
      Required: ${f.toString()}
      Received: ${Object.keys(e).toString()}`)), rr(h, c) || (i = ce("NON_CONFORMING_NAMESPACES", `${r} namespaces chains don't satisfy required namespaces.
      Required: ${h.toString()}
      Approved: ${c.toString()}`)), Object.keys(e).forEach(y => {
        if (!y.includes(":") || i) return;
        const b = br(e[y].accounts);
        b.includes(y) || (i = ce("NON_CONFORMING_NAMESPACES", `${r} namespaces accounts don't satisfy namespace accounts for ${y}
        Required: ${y}
        Approved: ${b.toString()}`))
    }), h.forEach(y => {
        i || (rr(n[y].methods, a[y].methods) ? rr(n[y].events, a[y].events) || (i = ce("NON_CONFORMING_NAMESPACES", `${r} namespaces events don't satisfy namespace events for ${y}`)) : i = ce("NON_CONFORMING_NAMESPACES", `${r} namespaces methods don't satisfy namespace methods for ${y}`))
    }), i
}

function Ud(t) {
    const e = {};
    return Object.keys(t).forEach(r => {
        var i;
        r.includes(":") ? e[r] = t[r] : (i = t[r].chains) == null || i.forEach(n => {
            e[n] = {
                methods: t[r].methods,
                events: t[r].events
            }
        })
    }), e
}

function js(t) {
    return [...new Set(t.map(e => e.includes(":") ? e.split(":")[0] : e))]
}

function Md(t) {
    const e = {};
    return Object.keys(t).forEach(r => {
        if (r.includes(":")) e[r] = t[r];
        else {
            const i = br(t[r].accounts);
            i == null || i.forEach(n => {
                e[n] = {
                    accounts: t[r].accounts.filter(a => a.includes(`${n}:`)),
                    methods: t[r].methods,
                    events: t[r].events
                }
            })
        }
    }), e
}

function ey(t, e) {
    return In(t, !1) && t <= e.max && t >= e.min
}

function Bs() {
    const t = Br();
    return new Promise(e => {
        switch (t) {
            case ft.browser:
                e($d());
                break;
            case ft.reactNative:
                e(jd());
                break;
            case ft.node:
                e(Bd());
                break;
            default:
                e(!0)
        }
    })
}

function $d() {
    return jr() && (navigator == null ? void 0 : navigator.onLine)
}
async function jd() {
    if (yr() && typeof global < "u" && global != null && global.NetInfo) {
        const t = await (global == null ? void 0 : global.NetInfo.fetch());
        return t == null ? void 0 : t.isConnected
    }
    return !0
}

function Bd() {
    return !0
}

function zd(t) {
    switch (Br()) {
        case ft.browser:
            Kd(t);
            break;
        case ft.reactNative:
            Hd(t);
            break
    }
}

function Kd(t) {
    !yr() && jr() && (window.addEventListener("online", () => t(!0)), window.addEventListener("offline", () => t(!1)))
}

function Hd(t) {
    yr() && typeof global < "u" && global != null && global.NetInfo && (global == null || global.NetInfo.addEventListener(e => t(e == null ? void 0 : e.isConnected)))
}
const Mi = {};
let ty = class {
    static get(e) {
        return Mi[e]
    }
    static set(e, r) {
        Mi[e] = r
    }
    static delete(e) {
        delete Mi[e]
    }
};
const Wd = "PARSE_ERROR",
    kd = "INVALID_REQUEST",
    qd = "METHOD_NOT_FOUND",
    Vd = "INVALID_PARAMS",
    ya = "INTERNAL_ERROR",
    On = "SERVER_ERROR",
    Gd = [-32700, -32600, -32601, -32602, -32603],
    Cr = {
        [Wd]: {
            code: -32700,
            message: "Parse error"
        },
        [kd]: {
            code: -32600,
            message: "Invalid Request"
        },
        [qd]: {
            code: -32601,
            message: "Method not found"
        },
        [Vd]: {
            code: -32602,
            message: "Invalid params"
        },
        [ya]: {
            code: -32603,
            message: "Internal error"
        },
        [On]: {
            code: -32e3,
            message: "Server error"
        }
    },
    ba = On;

function Yd(t) {
    return Gd.includes(t)
}

function zs(t) {
    return Object.keys(Cr).includes(t) ? Cr[t] : Cr[ba]
}

function Jd(t) {
    const e = Object.values(Cr).find(r => r.code === t);
    return e || Cr[ba]
}

function Xd(t, e, r) {
    return t.message.includes("getaddrinfo ENOTFOUND") || t.message.includes("connect ECONNREFUSED") ? new Error(`Unavailable ${r} RPC url at ${e}`) : t
}
var ma = {},
    Ut = {},
    Ks;

function Qd() {
    if (Ks) return Ut;
    Ks = 1, Object.defineProperty(Ut, "__esModule", {
        value: !0
    }), Ut.isBrowserCryptoAvailable = Ut.getSubtleCrypto = Ut.getBrowerCrypto = void 0;

    function t() {
        return (Tt === null || Tt === void 0 ? void 0 : Tt.crypto) || (Tt === null || Tt === void 0 ? void 0 : Tt.msCrypto) || {}
    }
    Ut.getBrowerCrypto = t;

    function e() {
        const i = t();
        return i.subtle || i.webkitSubtle
    }
    Ut.getSubtleCrypto = e;

    function r() {
        return !!t() && !!e()
    }
    return Ut.isBrowserCryptoAvailable = r, Ut
}
var Mt = {},
    Hs;

function Zd() {
    if (Hs) return Mt;
    Hs = 1, Object.defineProperty(Mt, "__esModule", {
        value: !0
    }), Mt.isBrowser = Mt.isNode = Mt.isReactNative = void 0;

    function t() {
        return typeof document == "undefined" && typeof navigator != "undefined" && navigator.product === "ReactNative"
    }
    Mt.isReactNative = t;

    function e() {
        return typeof process != "undefined" && typeof process.versions != "undefined" && typeof process.versions.node != "undefined"
    }
    Mt.isNode = e;

    function r() {
        return !t() && !e()
    }
    return Mt.isBrowser = r, Mt
}(function(t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const e = Nt;
    e.__exportStar(Qd(), t), e.__exportStar(Zd(), t)
})(ma);

function va(t = 3) {
    const e = Date.now() * Math.pow(10, t),
        r = Math.floor(Math.random() * Math.pow(10, t));
    return e + r
}

function An(t = 6) {
    return BigInt(va(t))
}

function Cn(t, e, r) {
    return {
        id: r || va(),
        jsonrpc: "2.0",
        method: t,
        params: e
    }
}

function wa(t, e) {
    return {
        id: t,
        jsonrpc: "2.0",
        result: e
    }
}

function _a(t, e, r) {
    return {
        id: t,
        jsonrpc: "2.0",
        error: eg(e, r)
    }
}

function eg(t, e) {
    return typeof t == "undefined" ? zs(ya) : (typeof t == "string" && (t = Object.assign(Object.assign({}, zs(On)), {
        message: t
    })), typeof e != "undefined" && (t.data = e), Yd(t.code) && (t = Jd(t.code)), t)
}
class tg {}
class rg extends tg {
    constructor() {
        super()
    }
}
class ig extends rg {
    constructor(e) {
        super()
    }
}
const ng = "^wss?:";

function sg(t) {
    const e = t.match(new RegExp(/^\w+:/, "gi"));
    if (!(!e || !e.length)) return e[0]
}

function og(t, e) {
    const r = sg(t);
    return typeof r == "undefined" ? !1 : new RegExp(e).test(r)
}

function Ws(t) {
    return og(t, ng)
}

function ag(t) {
    return new RegExp("wss?://localhost(:d{2,5})?").test(t)
}

function Ea(t) {
    return typeof t == "object" && "id" in t && "jsonrpc" in t && t.jsonrpc === "2.0"
}

function Da(t) {
    return Ea(t) && "method" in t
}

function Tn(t) {
    return Ea(t) && (Sa(t) || _i(t))
}

function Sa(t) {
    return "result" in t
}

function _i(t) {
    return "error" in t
}
class cg extends ig {
    constructor(e) {
        super(e), this.events = new Lt.EventEmitter, this.hasRegisteredEventListeners = !1, this.connection = this.setConnection(e), this.connection.connected && this.registerEventListeners()
    }
    async connect(e = this.connection) {
        await this.open(e)
    }
    async disconnect() {
        await this.close()
    }
    on(e, r) {
        this.events.on(e, r)
    }
    once(e, r) {
        this.events.once(e, r)
    }
    off(e, r) {
        this.events.off(e, r)
    }
    removeListener(e, r) {
        this.events.removeListener(e, r)
    }
    async request(e, r) {
        return this.requestStrict(Cn(e.method, e.params || [], e.id || An().toString()), r)
    }
    async requestStrict(e, r) {
        return new Promise(async (i, n) => {
            if (!this.connection.connected) try {
                await this.open()
            } catch (a) {
                n(a)
            }
            this.events.on(`${e.id}`, a => {
                _i(a) ? n(a.error) : i(a.result)
            });
            try {
                await this.connection.send(e, r)
            } catch (a) {
                n(a)
            }
        })
    }
    setConnection(e = this.connection) {
        return e
    }
    onPayload(e) {
        this.events.emit("payload", e), Tn(e) ? this.events.emit(`${e.id}`, e) : this.events.emit("message", {
            type: e.method,
            data: e.params
        })
    }
    onClose(e) {
        e && e.code === 3e3 && this.events.emit("error", new Error(`WebSocket connection closed abnormally with code: ${e.code} ${e.reason?`(${e.reason})`:""}`)), this.events.emit("disconnect")
    }
    async open(e = this.connection) {
        this.connection === e && this.connection.connected || (this.connection.connected && this.close(), typeof e == "string" && (await this.connection.open(e), e = this.connection), this.connection = this.setConnection(e), await this.connection.open(), this.registerEventListeners(), this.events.emit("connect"))
    }
    async close() {
        await this.connection.close()
    }
    registerEventListeners() {
        this.hasRegisteredEventListeners || (this.connection.on("payload", e => this.onPayload(e)), this.connection.on("close", e => this.onClose(e)), this.connection.on("error", e => this.events.emit("error", e)), this.connection.on("register_error", e => this.onClose()), this.hasRegisteredEventListeners = !0)
    }
}
const ug = () => typeof WebSocket < "u" ? WebSocket : typeof global < "u" && typeof global.WebSocket < "u" ? global.WebSocket : typeof window < "u" && typeof window.WebSocket < "u" ? window.WebSocket : typeof self < "u" && typeof self.WebSocket < "u" ? self.WebSocket : require("ws"),
    hg = () => typeof WebSocket < "u" || typeof global < "u" && typeof global.WebSocket < "u" || typeof window < "u" && typeof window.WebSocket < "u" || typeof self < "u" && typeof self.WebSocket < "u",
    ks = t => t.split("?")[0],
    qs = 10,
    lg = ug();
let fg = class {
    constructor(e) {
        if (this.url = e, this.events = new Lt.EventEmitter, this.registering = !1, !Ws(e)) throw new Error(`Provided URL is not compatible with WebSocket connection: ${e}`);
        this.url = e
    }
    get connected() {
        return typeof this.socket < "u"
    }
    get connecting() {
        return this.registering
    }
    on(e, r) {
        this.events.on(e, r)
    }
    once(e, r) {
        this.events.once(e, r)
    }
    off(e, r) {
        this.events.off(e, r)
    }
    removeListener(e, r) {
        this.events.removeListener(e, r)
    }
    async open(e = this.url) {
        await this.register(e)
    }
    async close() {
        return new Promise((e, r) => {
            if (typeof this.socket > "u") {
                r(new Error("Connection already closed"));
                return
            }
            this.socket.onclose = i => {
                this.onClose(i), e()
            }, this.socket.close()
        })
    }
    async send(e) {
        typeof this.socket > "u" && (this.socket = await this.register());
        try {
            this.socket.send(Rr(e))
        } catch (r) {
            this.onError(e.id, r)
        }
    }
    register(e = this.url) {
        if (!Ws(e)) throw new Error(`Provided URL is not compatible with WebSocket connection: ${e}`);
        if (this.registering) {
            const r = this.events.getMaxListeners();
            return (this.events.listenerCount("register_error") >= r || this.events.listenerCount("open") >= r) && this.events.setMaxListeners(r + 1), new Promise((i, n) => {
                this.events.once("register_error", a => {
                    this.resetMaxListeners(), n(a)
                }), this.events.once("open", () => {
                    if (this.resetMaxListeners(), typeof this.socket > "u") return n(new Error("WebSocket connection is missing or invalid"));
                    i(this.socket)
                })
            })
        }
        return this.url = e, this.registering = !0, new Promise((r, i) => {
            const n = new URLSearchParams(e).get("origin"),
                a = ma.isReactNative() ? {
                    headers: {
                        origin: n
                    }
                } : {
                    rejectUnauthorized: !ag(e)
                },
                h = new lg(e, [], a);
            hg() ? h.onerror = c => {
                const l = c;
                i(this.emitError(l.error))
            } : h.on("error", c => {
                i(this.emitError(c))
            }), h.onopen = () => {
                this.onOpen(h), r(h)
            }
        })
    }
    onOpen(e) {
        e.onmessage = r => this.onPayload(r), e.onclose = r => this.onClose(r), this.socket = e, this.registering = !1, this.events.emit("open")
    }
    onClose(e) {
        this.socket = void 0, this.registering = !1, this.events.emit("close", e)
    }
    onPayload(e) {
        if (typeof e.data > "u") return;
        const r = typeof e.data == "string" ? gi(e.data) : e.data;
        this.events.emit("payload", r)
    }
    onError(e, r) {
        const i = this.parseError(r),
            n = i.message || i.toString(),
            a = _a(e, n);
        this.events.emit("payload", a)
    }
    parseError(e, r = this.url) {
        return Xd(e, ks(r), "WS")
    }
    resetMaxListeners() {
        this.events.getMaxListeners() > qs && this.events.setMaxListeners(qs)
    }
    emitError(e) {
        const r = this.parseError(new Error((e == null ? void 0 : e.message) || `WebSocket connection failed for host: ${ks(this.url)}`));
        return this.events.emit("register_error", r), r
    }
};
var fi = {
    exports: {}
};
fi.exports;
(function(t, e) {
    var r = 200,
        i = "__lodash_hash_undefined__",
        n = 1,
        a = 2,
        h = 9007199254740991,
        c = "[object Arguments]",
        l = "[object Array]",
        u = "[object AsyncFunction]",
        f = "[object Boolean]",
        y = "[object Date]",
        b = "[object Error]",
        w = "[object Function]",
        E = "[object GeneratorFunction]",
        T = "[object Map]",
        F = "[object Number]",
        j = "[object Null]",
        D = "[object Object]",
        O = "[object Promise]",
        m = "[object Proxy]",
        _ = "[object RegExp]",
        g = "[object Set]",
        s = "[object String]",
        d = "[object Symbol]",
        N = "[object Undefined]",
        L = "[object WeakMap]",
        R = "[object ArrayBuffer]",
        W = "[object DataView]",
        V = "[object Float32Array]",
        S = "[object Float64Array]",
        P = "[object Int8Array]",
        q = "[object Int16Array]",
        z = "[object Int32Array]",
        M = "[object Uint8Array]",
        B = "[object Uint8ClampedArray]",
        U = "[object Uint16Array]",
        K = "[object Uint32Array]",
        Z = /[\\^$.*+?()[\]{}|]/g,
        H = /^\[object .+?Constructor\]$/,
        X = /^(?:0|[1-9]\d*)$/,
        Y = {};
    Y[V] = Y[S] = Y[P] = Y[q] = Y[z] = Y[M] = Y[B] = Y[U] = Y[K] = !0, Y[c] = Y[l] = Y[R] = Y[f] = Y[W] = Y[y] = Y[b] = Y[w] = Y[T] = Y[F] = Y[D] = Y[_] = Y[g] = Y[s] = Y[L] = !1;
    var Q = typeof Tt == "object" && Tt && Tt.Object === Object && Tt,
        C = typeof self == "object" && self && self.Object === Object && self,
        A = Q || C || Function("return this")(),
        x = e && !e.nodeType && e,
        o = x && !0 && t && !t.nodeType && t,
        v = o && o.exports === x,
        k = v && Q.process,
        G = function() {
            try {
                return k && k.binding && k.binding("util")
            } catch (p) {}
        }(),
        le = G && G.isTypedArray;

    function be(p, I) {
        for (var $ = -1, J = p == null ? 0 : p.length, Ae = 0, ne = []; ++$ < J;) {
            var Fe = p[$];
            I(Fe, $, p) && (ne[Ae++] = Fe)
        }
        return ne
    }

    function de(p, I) {
        for (var $ = -1, J = I.length, Ae = p.length; ++$ < J;) p[Ae + $] = I[$];
        return p
    }

    function we(p, I) {
        for (var $ = -1, J = p == null ? 0 : p.length; ++$ < J;)
            if (I(p[$], $, p)) return !0;
        return !1
    }

    function Re(p, I) {
        for (var $ = -1, J = Array(p); ++$ < p;) J[$] = I($);
        return J
    }

    function Pe(p) {
        return function(I) {
            return p(I)
        }
    }

    function ye(p, I) {
        return p.has(I)
    }

    function ge(p, I) {
        return p == null ? void 0 : p[I]
    }

    function fe(p) {
        var I = -1,
            $ = Array(p.size);
        return p.forEach(function(J, Ae) {
            $[++I] = [Ae, J]
        }), $
    }

    function ue(p, I) {
        return function($) {
            return p(I($))
        }
    }

    function ae(p) {
        var I = -1,
            $ = Array(p.size);
        return p.forEach(function(J) {
            $[++I] = J
        }), $
    }
    var oe = Array.prototype,
        se = Function.prototype,
        te = Object.prototype,
        he = A["__core-js_shared__"],
        pe = se.toString,
        re = te.hasOwnProperty,
        me = function() {
            var p = /[^.]+$/.exec(he && he.keys && he.keys.IE_PROTO || "");
            return p ? "Symbol(src)_1." + p : ""
        }(),
        ve = te.toString,
        De = RegExp("^" + pe.call(re).replace(Z, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
        Se = v ? A.Buffer : void 0,
        _e = A.Symbol,
        mt = A.Uint8Array,
        St = te.propertyIsEnumerable,
        $t = oe.splice,
        ht = _e ? _e.toStringTag : void 0,
        qt = Object.getOwnPropertySymbols,
        mr = Se ? Se.isBuffer : void 0,
        Hr = ue(Object.keys, Object),
        Ue = ar(A, "DataView"),
        Le = ar(A, "Map"),
        Me = ar(A, "Promise"),
        $e = ar(A, "Set"),
        je = ar(A, "WeakMap"),
        Ne = ar(Object, "create"),
        Ke = Gt(Ue),
        He = Gt(Le),
        We = Gt(Me),
        ke = Gt($e),
        qe = Gt(je),
        ze = _e ? _e.prototype : void 0,
        Be = ze ? ze.valueOf : void 0;

    function Ce(p) {
        var I = -1,
            $ = p == null ? 0 : p.length;
        for (this.clear(); ++I < $;) {
            var J = p[I];
            this.set(J[0], J[1])
        }
    }

    function Ve() {
        this.__data__ = Ne ? Ne(null) : {}, this.size = 0
    }

    function Ge(p) {
        var I = this.has(p) && delete this.__data__[p];
        return this.size -= I ? 1 : 0, I
    }

    function ja(p) {
        var I = this.__data__;
        if (Ne) {
            var $ = I[p];
            return $ === i ? void 0 : $
        }
        return re.call(I, p) ? I[p] : void 0
    }

    function Ba(p) {
        var I = this.__data__;
        return Ne ? I[p] !== void 0 : re.call(I, p)
    }

    function za(p, I) {
        var $ = this.__data__;
        return this.size += this.has(p) ? 0 : 1, $[p] = Ne && I === void 0 ? i : I, this
    }
    Ce.prototype.clear = Ve, Ce.prototype.delete = Ge, Ce.prototype.get = ja, Ce.prototype.has = Ba, Ce.prototype.set = za;

    function Ft(p) {
        var I = -1,
            $ = p == null ? 0 : p.length;
        for (this.clear(); ++I < $;) {
            var J = p[I];
            this.set(J[0], J[1])
        }
    }

    function Ka() {
        this.__data__ = [], this.size = 0
    }

    function Ha(p) {
        var I = this.__data__,
            $ = kr(I, p);
        if ($ < 0) return !1;
        var J = I.length - 1;
        return $ == J ? I.pop() : $t.call(I, $, 1), --this.size, !0
    }

    function Wa(p) {
        var I = this.__data__,
            $ = kr(I, p);
        return $ < 0 ? void 0 : I[$][1]
    }

    function ka(p) {
        return kr(this.__data__, p) > -1
    }

    function qa(p, I) {
        var $ = this.__data__,
            J = kr($, p);
        return J < 0 ? (++this.size, $.push([p, I])) : $[J][1] = I, this
    }
    Ft.prototype.clear = Ka, Ft.prototype.delete = Ha, Ft.prototype.get = Wa, Ft.prototype.has = ka, Ft.prototype.set = qa;

    function Vt(p) {
        var I = -1,
            $ = p == null ? 0 : p.length;
        for (this.clear(); ++I < $;) {
            var J = p[I];
            this.set(J[0], J[1])
        }
    }

    function Va() {
        this.size = 0, this.__data__ = {
            hash: new Ce,
            map: new(Le || Ft),
            string: new Ce
        }
    }

    function Ga(p) {
        var I = qr(this, p).delete(p);
        return this.size -= I ? 1 : 0, I
    }

    function Ya(p) {
        return qr(this, p).get(p)
    }

    function Ja(p) {
        return qr(this, p).has(p)
    }

    function Xa(p, I) {
        var $ = qr(this, p),
            J = $.size;
        return $.set(p, I), this.size += $.size == J ? 0 : 1, this
    }
    Vt.prototype.clear = Va, Vt.prototype.delete = Ga, Vt.prototype.get = Ya, Vt.prototype.has = Ja, Vt.prototype.set = Xa;

    function Wr(p) {
        var I = -1,
            $ = p == null ? 0 : p.length;
        for (this.__data__ = new Vt; ++I < $;) this.add(p[I])
    }

    function Qa(p) {
        return this.__data__.set(p, i), this
    }

    function Za(p) {
        return this.__data__.has(p)
    }
    Wr.prototype.add = Wr.prototype.push = Qa, Wr.prototype.has = Za;

    function jt(p) {
        var I = this.__data__ = new Ft(p);
        this.size = I.size
    }

    function ec() {
        this.__data__ = new Ft, this.size = 0
    }

    function tc(p) {
        var I = this.__data__,
            $ = I.delete(p);
        return this.size = I.size, $
    }

    function rc(p) {
        return this.__data__.get(p)
    }

    function ic(p) {
        return this.__data__.has(p)
    }

    function nc(p, I) {
        var $ = this.__data__;
        if ($ instanceof Ft) {
            var J = $.__data__;
            if (!Le || J.length < r - 1) return J.push([p, I]), this.size = ++$.size, this;
            $ = this.__data__ = new Vt(J)
        }
        return $.set(p, I), this.size = $.size, this
    }
    jt.prototype.clear = ec, jt.prototype.delete = tc, jt.prototype.get = rc, jt.prototype.has = ic, jt.prototype.set = nc;

    function sc(p, I) {
        var $ = Vr(p),
            J = !$ && wc(p),
            Ae = !$ && !J && Di(p),
            ne = !$ && !J && !Ae && zn(p),
            Fe = $ || J || Ae || ne,
            Ye = Fe ? Re(p.length, String) : [],
            Qe = Ye.length;
        for (var Te in p)(I || re.call(p, Te)) && !(Fe && (Te == "length" || Ae && (Te == "offset" || Te == "parent") || ne && (Te == "buffer" || Te == "byteLength" || Te == "byteOffset") || pc(Te, Qe))) && Ye.push(Te);
        return Ye
    }

    function kr(p, I) {
        for (var $ = p.length; $--;)
            if (Mn(p[$][0], I)) return $;
        return -1
    }

    function oc(p, I, $) {
        var J = I(p);
        return Vr(p) ? J : de(J, $(p))
    }

    function vr(p) {
        return p == null ? p === void 0 ? N : j : ht && ht in Object(p) ? dc(p) : vc(p)
    }

    function Nn(p) {
        return wr(p) && vr(p) == c
    }

    function Fn(p, I, $, J, Ae) {
        return p === I ? !0 : p == null || I == null || !wr(p) && !wr(I) ? p !== p && I !== I : ac(p, I, $, J, Fn, Ae)
    }

    function ac(p, I, $, J, Ae, ne) {
        var Fe = Vr(p),
            Ye = Vr(I),
            Qe = Fe ? l : Bt(p),
            Te = Ye ? l : Bt(I);
        Qe = Qe == c ? D : Qe, Te = Te == c ? D : Te;
        var lt = Qe == D,
            vt = Te == D,
            tt = Qe == Te;
        if (tt && Di(p)) {
            if (!Di(I)) return !1;
            Fe = !0, lt = !1
        }
        if (tt && !lt) return ne || (ne = new jt), Fe || zn(p) ? Rn(p, I, $, J, Ae, ne) : lc(p, I, Qe, $, J, Ae, ne);
        if (!($ & n)) {
            var pt = lt && re.call(p, "__wrapped__"),
                yt = vt && re.call(I, "__wrapped__");
            if (pt || yt) {
                var zt = pt ? p.value() : p,
                    Rt = yt ? I.value() : I;
                return ne || (ne = new jt), Ae(zt, Rt, $, J, ne)
            }
        }
        return tt ? (ne || (ne = new jt), fc(p, I, $, J, Ae, ne)) : !1
    }

    function cc(p) {
        if (!Bn(p) || bc(p)) return !1;
        var I = $n(p) ? De : H;
        return I.test(Gt(p))
    }

    function uc(p) {
        return wr(p) && jn(p.length) && !!Y[vr(p)]
    }

    function hc(p) {
        if (!mc(p)) return Hr(p);
        var I = [];
        for (var $ in Object(p)) re.call(p, $) && $ != "constructor" && I.push($);
        return I
    }

    function Rn(p, I, $, J, Ae, ne) {
        var Fe = $ & n,
            Ye = p.length,
            Qe = I.length;
        if (Ye != Qe && !(Fe && Qe > Ye)) return !1;
        var Te = ne.get(p);
        if (Te && ne.get(I)) return Te == I;
        var lt = -1,
            vt = !0,
            tt = $ & a ? new Wr : void 0;
        for (ne.set(p, I), ne.set(I, p); ++lt < Ye;) {
            var pt = p[lt],
                yt = I[lt];
            if (J) var zt = Fe ? J(yt, pt, lt, I, p, ne) : J(pt, yt, lt, p, I, ne);
            if (zt !== void 0) {
                if (zt) continue;
                vt = !1;
                break
            }
            if (tt) {
                if (!we(I, function(Rt, Yt) {
                        if (!ye(tt, Yt) && (pt === Rt || Ae(pt, Rt, $, J, ne))) return tt.push(Yt)
                    })) {
                    vt = !1;
                    break
                }
            } else if (!(pt === yt || Ae(pt, yt, $, J, ne))) {
                vt = !1;
                break
            }
        }
        return ne.delete(p), ne.delete(I), vt
    }

    function lc(p, I, $, J, Ae, ne, Fe) {
        switch ($) {
            case W:
                if (p.byteLength != I.byteLength || p.byteOffset != I.byteOffset) return !1;
                p = p.buffer, I = I.buffer;
            case R:
                return !(p.byteLength != I.byteLength || !ne(new mt(p), new mt(I)));
            case f:
            case y:
            case F:
                return Mn(+p, +I);
            case b:
                return p.name == I.name && p.message == I.message;
            case _:
            case s:
                return p == I + "";
            case T:
                var Ye = fe;
            case g:
                var Qe = J & n;
                if (Ye || (Ye = ae), p.size != I.size && !Qe) return !1;
                var Te = Fe.get(p);
                if (Te) return Te == I;
                J |= a, Fe.set(p, I);
                var lt = Rn(Ye(p), Ye(I), J, Ae, ne, Fe);
                return Fe.delete(p), lt;
            case d:
                if (Be) return Be.call(p) == Be.call(I)
        }
        return !1
    }

    function fc(p, I, $, J, Ae, ne) {
        var Fe = $ & n,
            Ye = Un(p),
            Qe = Ye.length,
            Te = Un(I),
            lt = Te.length;
        if (Qe != lt && !Fe) return !1;
        for (var vt = Qe; vt--;) {
            var tt = Ye[vt];
            if (!(Fe ? tt in I : re.call(I, tt))) return !1
        }
        var pt = ne.get(p);
        if (pt && ne.get(I)) return pt == I;
        var yt = !0;
        ne.set(p, I), ne.set(I, p);
        for (var zt = Fe; ++vt < Qe;) {
            tt = Ye[vt];
            var Rt = p[tt],
                Yt = I[tt];
            if (J) var Kn = Fe ? J(Yt, Rt, tt, I, p, ne) : J(Rt, Yt, tt, p, I, ne);
            if (!(Kn === void 0 ? Rt === Yt || Ae(Rt, Yt, $, J, ne) : Kn)) {
                yt = !1;
                break
            }
            zt || (zt = tt == "constructor")
        }
        if (yt && !zt) {
            var Gr = p.constructor,
                Yr = I.constructor;
            Gr != Yr && "constructor" in p && "constructor" in I && !(typeof Gr == "function" && Gr instanceof Gr && typeof Yr == "function" && Yr instanceof Yr) && (yt = !1)
        }
        return ne.delete(p), ne.delete(I), yt
    }

    function Un(p) {
        return oc(p, Dc, gc)
    }

    function qr(p, I) {
        var $ = p.__data__;
        return yc(I) ? $[typeof I == "string" ? "string" : "hash"] : $.map
    }

    function ar(p, I) {
        var $ = ge(p, I);
        return cc($) ? $ : void 0
    }

    function dc(p) {
        var I = re.call(p, ht),
            $ = p[ht];
        try {
            p[ht] = void 0;
            var J = !0
        } catch (ne) {}
        var Ae = ve.call(p);
        return J && (I ? p[ht] = $ : delete p[ht]), Ae
    }
    var gc = qt ? function(p) {
            return p == null ? [] : (p = Object(p), be(qt(p), function(I) {
                return St.call(p, I)
            }))
        } : Sc,
        Bt = vr;
    (Ue && Bt(new Ue(new ArrayBuffer(1))) != W || Le && Bt(new Le) != T || Me && Bt(Me.resolve()) != O || $e && Bt(new $e) != g || je && Bt(new je) != L) && (Bt = function(p) {
        var I = vr(p),
            $ = I == D ? p.constructor : void 0,
            J = $ ? Gt($) : "";
        if (J) switch (J) {
            case Ke:
                return W;
            case He:
                return T;
            case We:
                return O;
            case ke:
                return g;
            case qe:
                return L
        }
        return I
    });

    function pc(p, I) {
        return I = I == null ? h : I, !!I && (typeof p == "number" || X.test(p)) && p > -1 && p % 1 == 0 && p < I
    }

    function yc(p) {
        var I = typeof p;
        return I == "string" || I == "number" || I == "symbol" || I == "boolean" ? p !== "__proto__" : p === null
    }

    function bc(p) {
        return !!me && me in p
    }

    function mc(p) {
        var I = p && p.constructor,
            $ = typeof I == "function" && I.prototype || te;
        return p === $
    }

    function vc(p) {
        return ve.call(p)
    }

    function Gt(p) {
        if (p != null) {
            try {
                return pe.call(p)
            } catch (I) {}
            try {
                return p + ""
            } catch (I) {}
        }
        return ""
    }

    function Mn(p, I) {
        return p === I || p !== p && I !== I
    }
    var wc = Nn(function() {
            return arguments
        }()) ? Nn : function(p) {
            return wr(p) && re.call(p, "callee") && !St.call(p, "callee")
        },
        Vr = Array.isArray;

    function _c(p) {
        return p != null && jn(p.length) && !$n(p)
    }
    var Di = mr || xc;

    function Ec(p, I) {
        return Fn(p, I)
    }

    function $n(p) {
        if (!Bn(p)) return !1;
        var I = vr(p);
        return I == w || I == E || I == u || I == m
    }

    function jn(p) {
        return typeof p == "number" && p > -1 && p % 1 == 0 && p <= h
    }

    function Bn(p) {
        var I = typeof p;
        return p != null && (I == "object" || I == "function")
    }

    function wr(p) {
        return p != null && typeof p == "object"
    }
    var zn = le ? Pe(le) : uc;

    function Dc(p) {
        return _c(p) ? sc(p) : hc(p)
    }

    function Sc() {
        return []
    }

    function xc() {
        return !1
    }
    t.exports = Ec
})(fi, fi.exports);
var dg = fi.exports;
const gg = dn(dg);

function pg(t, e) {
    return e = e || {}, new Promise(function(r, i) {
        var n = new XMLHttpRequest,
            a = [],
            h = [],
            c = {},
            l = function() {
                return {
                    ok: (n.status / 100 | 0) == 2,
                    statusText: n.statusText,
                    status: n.status,
                    url: n.responseURL,
                    text: function() {
                        return Promise.resolve(n.responseText)
                    },
                    json: function() {
                        return Promise.resolve(n.responseText).then(JSON.parse)
                    },
                    blob: function() {
                        return Promise.resolve(new Blob([n.response]))
                    },
                    clone: l,
                    headers: {
                        keys: function() {
                            return a
                        },
                        entries: function() {
                            return h
                        },
                        get: function(f) {
                            return c[f.toLowerCase()]
                        },
                        has: function(f) {
                            return f.toLowerCase() in c
                        }
                    }
                }
            };
        for (var u in n.open(e.method || "get", t, !0), n.onload = function() {
                n.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, function(f, y, b) {
                    a.push(y = y.toLowerCase()), h.push([y, b]), c[y] = c[y] ? c[y] + "," + b : b
                }), r(l())
            }, n.onerror = i, n.withCredentials = e.credentials == "include", e.headers) n.setRequestHeader(u, e.headers[u]);
        n.send(e.body || null)
    })
}
const yg = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: pg
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Vs = gn(yg);
var bg = self.fetch || (self.fetch = Vs.default || Vs);
const mg = dn(bg);

function vg(t, e) {
    if (t.length >= 255) throw new TypeError("Alphabet too long");
    for (var r = new Uint8Array(256), i = 0; i < r.length; i++) r[i] = 255;
    for (var n = 0; n < t.length; n++) {
        var a = t.charAt(n),
            h = a.charCodeAt(0);
        if (r[h] !== 255) throw new TypeError(a + " is ambiguous");
        r[h] = n
    }
    var c = t.length,
        l = t.charAt(0),
        u = Math.log(c) / Math.log(256),
        f = Math.log(256) / Math.log(c);

    function y(E) {
        if (E instanceof Uint8Array || (ArrayBuffer.isView(E) ? E = new Uint8Array(E.buffer, E.byteOffset, E.byteLength) : Array.isArray(E) && (E = Uint8Array.from(E))), !(E instanceof Uint8Array)) throw new TypeError("Expected Uint8Array");
        if (E.length === 0) return "";
        for (var T = 0, F = 0, j = 0, D = E.length; j !== D && E[j] === 0;) j++, T++;
        for (var O = (D - j) * f + 1 >>> 0, m = new Uint8Array(O); j !== D;) {
            for (var _ = E[j], g = 0, s = O - 1;
                (_ !== 0 || g < F) && s !== -1; s--, g++) _ += 256 * m[s] >>> 0, m[s] = _ % c >>> 0, _ = _ / c >>> 0;
            if (_ !== 0) throw new Error("Non-zero carry");
            F = g, j++
        }
        for (var d = O - F; d !== O && m[d] === 0;) d++;
        for (var N = l.repeat(T); d < O; ++d) N += t.charAt(m[d]);
        return N
    }

    function b(E) {
        if (typeof E != "string") throw new TypeError("Expected String");
        if (E.length === 0) return new Uint8Array;
        var T = 0;
        if (E[T] !== " ") {
            for (var F = 0, j = 0; E[T] === l;) F++, T++;
            for (var D = (E.length - T) * u + 1 >>> 0, O = new Uint8Array(D); E[T];) {
                var m = r[E.charCodeAt(T)];
                if (m === 255) return;
                for (var _ = 0, g = D - 1;
                    (m !== 0 || _ < j) && g !== -1; g--, _++) m += c * O[g] >>> 0, O[g] = m % 256 >>> 0, m = m / 256 >>> 0;
                if (m !== 0) throw new Error("Non-zero carry");
                j = _, T++
            }
            if (E[T] !== " ") {
                for (var s = D - j; s !== D && O[s] === 0;) s++;
                for (var d = new Uint8Array(F + (D - s)), N = F; s !== D;) d[N++] = O[s++];
                return d
            }
        }
    }

    function w(E) {
        var T = b(E);
        if (T) return T;
        throw new Error(`Non-${e} character`)
    }
    return {
        encode: y,
        decodeUnsafe: b,
        decode: w
    }
}
var wg = vg,
    _g = wg;
const xa = t => {
        if (t instanceof Uint8Array && t.constructor.name === "Uint8Array") return t;
        if (t instanceof ArrayBuffer) return new Uint8Array(t);
        if (ArrayBuffer.isView(t)) return new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
        throw new Error("Unknown type, must be binary type")
    },
    Eg = t => new TextEncoder().encode(t),
    Dg = t => new TextDecoder().decode(t);
class Sg {
    constructor(e, r, i) {
        this.name = e, this.prefix = r, this.baseEncode = i
    }
    encode(e) {
        if (e instanceof Uint8Array) return `${this.prefix}${this.baseEncode(e)}`;
        throw Error("Unknown type, must be binary type")
    }
}
class xg {
    constructor(e, r, i) {
        if (this.name = e, this.prefix = r, r.codePointAt(0) === void 0) throw new Error("Invalid prefix character");
        this.prefixCodePoint = r.codePointAt(0), this.baseDecode = i
    }
    decode(e) {
        if (typeof e == "string") {
            if (e.codePointAt(0) !== this.prefixCodePoint) throw Error(`Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
            return this.baseDecode(e.slice(this.prefix.length))
        } else throw Error("Can only multibase decode strings")
    }
    or(e) {
        return Ia(this, e)
    }
}
class Ig {
    constructor(e) {
        this.decoders = e
    }
    or(e) {
        return Ia(this, e)
    }
    decode(e) {
        const r = e[0],
            i = this.decoders[r];
        if (i) return i.decode(e);
        throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`)
    }
}
const Ia = (t, e) => new Ig(Ee(Ee({}, t.decoders || {
    [t.prefix]: t
}), e.decoders || {
    [e.prefix]: e
}));
class Og {
    constructor(e, r, i, n) {
        this.name = e, this.prefix = r, this.baseEncode = i, this.baseDecode = n, this.encoder = new Sg(e, r, i), this.decoder = new xg(e, r, n)
    }
    encode(e) {
        return this.encoder.encode(e)
    }
    decode(e) {
        return this.decoder.decode(e)
    }
}
const Ei = ({
        name: t,
        prefix: e,
        encode: r,
        decode: i
    }) => new Og(t, e, r, i),
    Kr = ({
        prefix: t,
        name: e,
        alphabet: r
    }) => {
        const {
            encode: i,
            decode: n
        } = _g(r, e);
        return Ei({
            prefix: t,
            name: e,
            encode: i,
            decode: a => xa(n(a))
        })
    },
    Ag = (t, e, r, i) => {
        const n = {};
        for (let f = 0; f < e.length; ++f) n[e[f]] = f;
        let a = t.length;
        for (; t[a - 1] === "=";) --a;
        const h = new Uint8Array(a * r / 8 | 0);
        let c = 0,
            l = 0,
            u = 0;
        for (let f = 0; f < a; ++f) {
            const y = n[t[f]];
            if (y === void 0) throw new SyntaxError(`Non-${i} character`);
            l = l << r | y, c += r, c >= 8 && (c -= 8, h[u++] = 255 & l >> c)
        }
        if (c >= r || 255 & l << 8 - c) throw new SyntaxError("Unexpected end of data");
        return h
    },
    Cg = (t, e, r) => {
        const i = e[e.length - 1] === "=",
            n = (1 << r) - 1;
        let a = "",
            h = 0,
            c = 0;
        for (let l = 0; l < t.length; ++l)
            for (c = c << 8 | t[l], h += 8; h > r;) h -= r, a += e[n & c >> h];
        if (h && (a += e[n & c << r - h]), i)
            for (; a.length * r & 7;) a += "=";
        return a
    },
    et = ({
        name: t,
        prefix: e,
        bitsPerChar: r,
        alphabet: i
    }) => Ei({
        prefix: e,
        name: t,
        encode(n) {
            return Cg(n, i, r)
        },
        decode(n) {
            return Ag(n, i, r, t)
        }
    }),
    Tg = Ei({
        prefix: "\0",
        name: "identity",
        encode: t => Dg(t),
        decode: t => Eg(t)
    });
var Pg = Object.freeze({
    __proto__: null,
    identity: Tg
});
const Lg = et({
    prefix: "0",
    name: "base2",
    alphabet: "01",
    bitsPerChar: 1
});
var Ng = Object.freeze({
    __proto__: null,
    base2: Lg
});
const Fg = et({
    prefix: "7",
    name: "base8",
    alphabet: "01234567",
    bitsPerChar: 3
});
var Rg = Object.freeze({
    __proto__: null,
    base8: Fg
});
const Ug = Kr({
    prefix: "9",
    name: "base10",
    alphabet: "0123456789"
});
var Mg = Object.freeze({
    __proto__: null,
    base10: Ug
});
const $g = et({
        prefix: "f",
        name: "base16",
        alphabet: "0123456789abcdef",
        bitsPerChar: 4
    }),
    jg = et({
        prefix: "F",
        name: "base16upper",
        alphabet: "0123456789ABCDEF",
        bitsPerChar: 4
    });
var Bg = Object.freeze({
    __proto__: null,
    base16: $g,
    base16upper: jg
});
const zg = et({
        prefix: "b",
        name: "base32",
        alphabet: "abcdefghijklmnopqrstuvwxyz234567",
        bitsPerChar: 5
    }),
    Kg = et({
        prefix: "B",
        name: "base32upper",
        alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
        bitsPerChar: 5
    }),
    Hg = et({
        prefix: "c",
        name: "base32pad",
        alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
        bitsPerChar: 5
    }),
    Wg = et({
        prefix: "C",
        name: "base32padupper",
        alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
        bitsPerChar: 5
    }),
    kg = et({
        prefix: "v",
        name: "base32hex",
        alphabet: "0123456789abcdefghijklmnopqrstuv",
        bitsPerChar: 5
    }),
    qg = et({
        prefix: "V",
        name: "base32hexupper",
        alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
        bitsPerChar: 5
    }),
    Vg = et({
        prefix: "t",
        name: "base32hexpad",
        alphabet: "0123456789abcdefghijklmnopqrstuv=",
        bitsPerChar: 5
    }),
    Gg = et({
        prefix: "T",
        name: "base32hexpadupper",
        alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
        bitsPerChar: 5
    }),
    Yg = et({
        prefix: "h",
        name: "base32z",
        alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
        bitsPerChar: 5
    });
var Jg = Object.freeze({
    __proto__: null,
    base32: zg,
    base32upper: Kg,
    base32pad: Hg,
    base32padupper: Wg,
    base32hex: kg,
    base32hexupper: qg,
    base32hexpad: Vg,
    base32hexpadupper: Gg,
    base32z: Yg
});
const Xg = Kr({
        prefix: "k",
        name: "base36",
        alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
    }),
    Qg = Kr({
        prefix: "K",
        name: "base36upper",
        alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    });
var Zg = Object.freeze({
    __proto__: null,
    base36: Xg,
    base36upper: Qg
});
const ep = Kr({
        name: "base58btc",
        prefix: "z",
        alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
    }),
    tp = Kr({
        name: "base58flickr",
        prefix: "Z",
        alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
    });
var rp = Object.freeze({
    __proto__: null,
    base58btc: ep,
    base58flickr: tp
});
const ip = et({
        prefix: "m",
        name: "base64",
        alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        bitsPerChar: 6
    }),
    np = et({
        prefix: "M",
        name: "base64pad",
        alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        bitsPerChar: 6
    }),
    sp = et({
        prefix: "u",
        name: "base64url",
        alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
        bitsPerChar: 6
    }),
    op = et({
        prefix: "U",
        name: "base64urlpad",
        alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
        bitsPerChar: 6
    });
var ap = Object.freeze({
    __proto__: null,
    base64: ip,
    base64pad: np,
    base64url: sp,
    base64urlpad: op
});
const Oa = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"),
    cp = Oa.reduce((t, e, r) => (t[r] = e, t), []),
    up = Oa.reduce((t, e, r) => (t[e.codePointAt(0)] = r, t), []);

function hp(t) {
    return t.reduce((e, r) => (e += cp[r], e), "")
}

function lp(t) {
    const e = [];
    for (const r of t) {
        const i = up[r.codePointAt(0)];
        if (i === void 0) throw new Error(`Non-base256emoji character: ${r}`);
        e.push(i)
    }
    return new Uint8Array(e)
}
const fp = Ei({
    prefix: "🚀",
    name: "base256emoji",
    encode: hp,
    decode: lp
});
var dp = Object.freeze({
        __proto__: null,
        base256emoji: fp
    }),
    gp = Aa,
    Gs = 128,
    pp = 127,
    yp = ~pp,
    bp = Math.pow(2, 31);

function Aa(t, e, r) {
    e = e || [], r = r || 0;
    for (var i = r; t >= bp;) e[r++] = t & 255 | Gs, t /= 128;
    for (; t & yp;) e[r++] = t & 255 | Gs, t >>>= 7;
    return e[r] = t | 0, Aa.bytes = r - i + 1, e
}
var mp = on,
    vp = 128,
    Ys = 127;

function on(t, i) {
    var r = 0,
        i = i || 0,
        n = 0,
        a = i,
        h, c = t.length;
    do {
        if (a >= c) throw on.bytes = 0, new RangeError("Could not decode varint");
        h = t[a++], r += n < 28 ? (h & Ys) << n : (h & Ys) * Math.pow(2, n), n += 7
    } while (h >= vp);
    return on.bytes = a - i, r
}
var wp = Math.pow(2, 7),
    _p = Math.pow(2, 14),
    Ep = Math.pow(2, 21),
    Dp = Math.pow(2, 28),
    Sp = Math.pow(2, 35),
    xp = Math.pow(2, 42),
    Ip = Math.pow(2, 49),
    Op = Math.pow(2, 56),
    Ap = Math.pow(2, 63),
    Cp = function(t) {
        return t < wp ? 1 : t < _p ? 2 : t < Ep ? 3 : t < Dp ? 4 : t < Sp ? 5 : t < xp ? 6 : t < Ip ? 7 : t < Op ? 8 : t < Ap ? 9 : 10
    },
    Tp = {
        encode: gp,
        decode: mp,
        encodingLength: Cp
    },
    Ca = Tp;
const Js = (t, e, r = 0) => (Ca.encode(t, e, r), e),
    Xs = t => Ca.encodingLength(t),
    an = (t, e) => {
        const r = e.byteLength,
            i = Xs(t),
            n = i + Xs(r),
            a = new Uint8Array(n + r);
        return Js(t, a, 0), Js(r, a, i), a.set(e, n), new Pp(t, r, e, a)
    };
class Pp {
    constructor(e, r, i, n) {
        this.code = e, this.size = r, this.digest = i, this.bytes = n
    }
}
const Ta = ({
    name: t,
    code: e,
    encode: r
}) => new Lp(t, e, r);
class Lp {
    constructor(e, r, i) {
        this.name = e, this.code = r, this.encode = i
    }
    digest(e) {
        if (e instanceof Uint8Array) {
            const r = this.encode(e);
            return r instanceof Uint8Array ? an(this.code, r) : r.then(i => an(this.code, i))
        } else throw Error("Unknown type, must be binary type")
    }
}
const Pa = t => async e => new Uint8Array(await crypto.subtle.digest(t, e)),
    Np = Ta({
        name: "sha2-256",
        code: 18,
        encode: Pa("SHA-256")
    }),
    Fp = Ta({
        name: "sha2-512",
        code: 19,
        encode: Pa("SHA-512")
    });
var Rp = Object.freeze({
    __proto__: null,
    sha256: Np,
    sha512: Fp
});
const La = 0,
    Up = "identity",
    Na = xa,
    Mp = t => an(La, Na(t)),
    $p = {
        code: La,
        name: Up,
        encode: Na,
        digest: Mp
    };
var jp = Object.freeze({
    __proto__: null,
    identity: $p
});
new TextEncoder, new TextDecoder;
const Qs = Ee(Ee(Ee(Ee(Ee(Ee(Ee(Ee(Ee(Ee({}, Pg), Ng), Rg), Mg), Bg), Jg), Zg), rp), ap), dp);
Ee(Ee({}, Rp), jp);

function Fa(t) {
    return globalThis.Buffer != null ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : t
}

function Bp(t = 0) {
    return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? Fa(globalThis.Buffer.allocUnsafe(t)) : new Uint8Array(t)
}

function Ra(t, e, r, i) {
    return {
        name: t,
        prefix: e,
        encoder: {
            name: t,
            prefix: e,
            encode: r
        },
        decoder: {
            decode: i
        }
    }
}
const Zs = Ra("utf8", "u", t => "u" + new TextDecoder("utf8").decode(t), t => new TextEncoder().encode(t.substring(1))),
    $i = Ra("ascii", "a", t => {
        let e = "a";
        for (let r = 0; r < t.length; r++) e += String.fromCharCode(t[r]);
        return e
    }, t => {
        t = t.substring(1);
        const e = Bp(t.length);
        for (let r = 0; r < t.length; r++) e[r] = t.charCodeAt(r);
        return e
    }),
    zp = Ee({
        utf8: Zs,
        "utf-8": Zs,
        hex: Qs.base16,
        latin1: $i,
        ascii: $i,
        binary: $i
    }, Qs);

function Kp(t, e = "utf8") {
    const r = zp[e];
    if (!r) throw new Error(`Unsupported encoding "${e}"`);
    return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? Fa(globalThis.Buffer.from(t, "utf-8")) : r.decoder.decode(`${r.prefix}${t}`)
}
const Ua = "wc",
    Hp = 2,
    Pn = "core",
    Ht = `${Ua}@2:${Pn}:`,
    Wp = {
        name: Pn,
        logger: "error"
    },
    kp = {
        database: ":memory:"
    },
    qp = "crypto",
    eo = "client_ed25519_seed",
    Vp = ee.ONE_DAY,
    Gp = "keychain",
    Yp = "0.3",
    Jp = "messages",
    Xp = "0.3",
    Qp = ee.SIX_HOURS,
    Zp = "publisher",
    e0 = "irn",
    t0 = "error",
    Ma = "wss://relay.walletconnect.com",
    to = "wss://relay.walletconnect.org",
    r0 = "relayer",
    _t = {
        message: "relayer_message",
        message_ack: "relayer_message_ack",
        connect: "relayer_connect",
        disconnect: "relayer_disconnect",
        error: "relayer_error",
        connection_stalled: "relayer_connection_stalled",
        transport_closed: "relayer_transport_closed",
        publish: "relayer_publish"
    },
    i0 = "_subscription",
    bt = {
        payload: "payload",
        connect: "connect",
        disconnect: "disconnect",
        error: "error"
    },
    n0 = ee.ONE_SECOND,
    s0 = "2.11.3",
    o0 = 1e4,
    a0 = "0.3",
    c0 = "WALLETCONNECT_CLIENT_ID",
    Ct = {
        created: "subscription_created",
        deleted: "subscription_deleted",
        expired: "subscription_expired",
        disabled: "subscription_disabled",
        sync: "subscription_sync",
        resubscribed: "subscription_resubscribed"
    },
    u0 = "subscription",
    h0 = "0.3",
    l0 = ee.FIVE_SECONDS * 1e3,
    f0 = "pairing",
    d0 = "0.3",
    xr = {
        wc_pairingDelete: {
            req: {
                ttl: ee.ONE_DAY,
                prompt: !1,
                tag: 1e3
            },
            res: {
                ttl: ee.ONE_DAY,
                prompt: !1,
                tag: 1001
            }
        },
        wc_pairingPing: {
            req: {
                ttl: ee.THIRTY_SECONDS,
                prompt: !1,
                tag: 1002
            },
            res: {
                ttl: ee.THIRTY_SECONDS,
                prompt: !1,
                tag: 1003
            }
        },
        unregistered_method: {
            req: {
                ttl: ee.ONE_DAY,
                prompt: !1,
                tag: 0
            },
            res: {
                ttl: ee.ONE_DAY,
                prompt: !1,
                tag: 0
            }
        }
    },
    Qr = {
        create: "pairing_create",
        expire: "pairing_expire",
        delete: "pairing_delete",
        ping: "pairing_ping"
    },
    It = {
        created: "history_created",
        updated: "history_updated",
        deleted: "history_deleted",
        sync: "history_sync"
    },
    g0 = "history",
    p0 = "0.3",
    y0 = "expirer",
    wt = {
        created: "expirer_created",
        deleted: "expirer_deleted",
        expired: "expirer_expired",
        sync: "expirer_sync"
    },
    b0 = "0.3",
    ji = "verify-api",
    Ar = "https://verify.walletconnect.com",
    cn = "https://verify.walletconnect.org",
    m0 = [Ar, cn],
    v0 = "echo",
    w0 = "https://echo.walletconnect.com";
class _0 {
    constructor(e, r) {
        this.core = e, this.logger = r, this.keychain = new Map, this.name = Gp, this.version = Yp, this.initialized = !1, this.storagePrefix = Ht, this.init = async () => {
            if (!this.initialized) {
                const i = await this.getKeyChain();
                typeof i < "u" && (this.keychain = i), this.initialized = !0
            }
        }, this.has = i => (this.isInitialized(), this.keychain.has(i)), this.set = async (i, n) => {
            this.isInitialized(), this.keychain.set(i, n), await this.persist()
        }, this.get = i => {
            this.isInitialized();
            const n = this.keychain.get(i);
            if (typeof n > "u") {
                const {
                    message: a
                } = ce("NO_MATCHING_KEY", `${this.name}: ${i}`);
                throw new Error(a)
            }
            return n
        }, this.del = async i => {
            this.isInitialized(), this.keychain.delete(i), await this.persist()
        }, this.core = e, this.logger = xe.generateChildLogger(r, this.name)
    }
    get context() {
        return xe.getLoggerContext(this.logger)
    }
    get storageKey() {
        return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
    }
    async setKeyChain(e) {
        await this.core.storage.setItem(this.storageKey, la(e))
    }
    async getKeyChain() {
        const e = await this.core.storage.getItem(this.storageKey);
        return typeof e < "u" ? fa(e) : void 0
    }
    async persist() {
        await this.setKeyChain(this.keychain)
    }
    isInitialized() {
        if (!this.initialized) {
            const {
                message: e
            } = ce("NOT_INITIALIZED", this.name);
            throw new Error(e)
        }
    }
}
class E0 {
    constructor(e, r, i) {
        this.core = e, this.logger = r, this.name = qp, this.initialized = !1, this.init = async () => {
            this.initialized || (await this.keychain.init(), this.initialized = !0)
        }, this.hasKeys = n => (this.isInitialized(), this.keychain.has(n)), this.getClientId = async () => {
            this.isInitialized();
            const n = await this.getClientSeed(),
                a = vs(n);
            return Qo(a.publicKey)
        }, this.generateKeyPair = () => {
            this.isInitialized();
            const n = Bf();
            return this.setPrivateKey(n.publicKey, n.privateKey)
        }, this.signJWT = async n => {
            this.isInitialized();
            const a = await this.getClientSeed(),
                h = vs(a),
                c = rn();
            return await kl(c, n, Vp, h)
        }, this.generateSharedKey = (n, a, h) => {
            this.isInitialized();
            const c = this.getPrivateKey(n),
                l = zf(c, a);
            return this.setSymKey(l, h)
        }, this.setSymKey = async (n, a) => {
            this.isInitialized();
            const h = a || Kf(n);
            return await this.keychain.set(h, n), h
        }, this.deleteKeyPair = async n => {
            this.isInitialized(), await this.keychain.del(n)
        }, this.deleteSymKey = async n => {
            this.isInitialized(), await this.keychain.del(n)
        }, this.encode = async (n, a, h) => {
            this.isInitialized();
            const c = ha(h),
                l = Rr(a);
            if (Ts(c)) {
                const b = c.senderPublicKey,
                    w = c.receiverPublicKey;
                n = await this.generateSharedKey(b, w)
            }
            const u = this.getSymKey(n),
                {
                    type: f,
                    senderPublicKey: y
                } = c;
            return Wf({
                type: f,
                symKey: u,
                message: l,
                senderPublicKey: y
            })
        }, this.decode = async (n, a, h) => {
            this.isInitialized();
            const c = Vf(a, h);
            if (Ts(c)) {
                const l = c.receiverPublicKey,
                    u = c.senderPublicKey;
                n = await this.generateSharedKey(l, u)
            }
            try {
                const l = this.getSymKey(n),
                    u = kf({
                        symKey: l,
                        encoded: a
                    });
                return gi(u)
            } catch (l) {
                this.logger.error(`Failed to decode message from topic: '${n}', clientId: '${await this.getClientId()}'`), this.logger.error(l)
            }
        }, this.getPayloadType = n => {
            const a = hi(n);
            return $r(a.type)
        }, this.getPayloadSenderPublicKey = n => {
            const a = hi(n);
            return a.senderPublicKey ? at(a.senderPublicKey, ot) : void 0
        }, this.core = e, this.logger = xe.generateChildLogger(r, this.name), this.keychain = i || new _0(this.core, this.logger)
    }
    get context() {
        return xe.getLoggerContext(this.logger)
    }
    async setPrivateKey(e, r) {
        return await this.keychain.set(e, r), e
    }
    getPrivateKey(e) {
        return this.keychain.get(e)
    }
    async getClientSeed() {
        let e = "";
        try {
            e = this.keychain.get(eo)
        } catch (r) {
            e = rn(), await this.keychain.set(eo, e)
        }
        return Kp(e, "base16")
    }
    getSymKey(e) {
        return this.keychain.get(e)
    }
    isInitialized() {
        if (!this.initialized) {
            const {
                message: e
            } = ce("NOT_INITIALIZED", this.name);
            throw new Error(e)
        }
    }
}
class D0 extends th {
    constructor(e, r) {
        super(e, r), this.logger = e, this.core = r, this.messages = new Map, this.name = Jp, this.version = Xp, this.initialized = !1, this.storagePrefix = Ht, this.init = async () => {
            if (!this.initialized) {
                this.logger.trace("Initialized");
                try {
                    const i = await this.getRelayerMessages();
                    typeof i < "u" && (this.messages = i), this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({
                        type: "method",
                        method: "restore",
                        size: this.messages.size
                    })
                } catch (i) {
                    this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(i)
                } finally {
                    this.initialized = !0
                }
            }
        }, this.set = async (i, n) => {
            this.isInitialized();
            const a = nn(n);
            let h = this.messages.get(i);
            return typeof h > "u" && (h = {}), typeof h[a] < "u" || (h[a] = n, this.messages.set(i, h), await this.persist()), a
        }, this.get = i => {
            this.isInitialized();
            let n = this.messages.get(i);
            return typeof n > "u" && (n = {}), n
        }, this.has = (i, n) => {
            this.isInitialized();
            const a = this.get(i),
                h = nn(n);
            return typeof a[h] < "u"
        }, this.del = async i => {
            this.isInitialized(), this.messages.delete(i), await this.persist()
        }, this.logger = xe.generateChildLogger(e, this.name), this.core = r
    }
    get context() {
        return xe.getLoggerContext(this.logger)
    }
    get storageKey() {
        return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
    }
    async setRelayerMessages(e) {
        await this.core.storage.setItem(this.storageKey, la(e))
    }
    async getRelayerMessages() {
        const e = await this.core.storage.getItem(this.storageKey);
        return typeof e < "u" ? fa(e) : void 0
    }
    async persist() {
        await this.setRelayerMessages(this.messages)
    }
    isInitialized() {
        if (!this.initialized) {
            const {
                message: e
            } = ce("NOT_INITIALIZED", this.name);
            throw new Error(e)
        }
    }
}
class S0 extends rh {
    constructor(e, r) {
        super(e, r), this.relayer = e, this.logger = r, this.events = new Lt.EventEmitter, this.name = Zp, this.queue = new Map, this.publishTimeout = ee.toMiliseconds(ee.ONE_MINUTE), this.failedPublishTimeout = ee.toMiliseconds(ee.ONE_SECOND), this.needsTransportRestart = !1, this.publish = async (i, n, a) => {
            var h;
            this.logger.debug("Publishing Payload"), this.logger.trace({
                type: "method",
                method: "publish",
                params: {
                    topic: i,
                    message: n,
                    opts: a
                }
            });
            const c = (a == null ? void 0 : a.ttl) || Qp,
                l = sn(a),
                u = (a == null ? void 0 : a.prompt) || !1,
                f = (a == null ? void 0 : a.tag) || 0,
                y = (a == null ? void 0 : a.id) || An().toString(),
                b = {
                    topic: i,
                    message: n,
                    opts: {
                        ttl: c,
                        relay: l,
                        prompt: u,
                        tag: f,
                        id: y
                    }
                },
                w = `Failed to publish payload, please try again. id:${y} tag:${f}`,
                E = Date.now();
            let T, F = 1;
            try {
                for (; T === void 0;) {
                    if (Date.now() - E > this.publishTimeout) throw new Error(w);
                    this.logger.trace({
                        id: y,
                        attempts: F
                    }, `publisher.publish - attempt ${F}`), T = await await Nr(this.rpcPublish(i, n, c, l, u, f, y).catch(j => this.logger.warn(j)), this.publishTimeout, w), F++, T || await new Promise(j => setTimeout(j, this.failedPublishTimeout))
                }
                this.relayer.events.emit(_t.publish, b), this.logger.debug("Successfully Published Payload"), this.logger.trace({
                    type: "method",
                    method: "publish",
                    params: {
                        id: y,
                        topic: i,
                        message: n,
                        opts: a
                    }
                })
            } catch (j) {
                if (this.logger.debug("Failed to Publish Payload"), this.logger.error(j), (h = a == null ? void 0 : a.internal) != null && h.throwOnFailedPublish) throw j;
                this.queue.set(y, b)
            }
        }, this.on = (i, n) => {
            this.events.on(i, n)
        }, this.once = (i, n) => {
            this.events.once(i, n)
        }, this.off = (i, n) => {
            this.events.off(i, n)
        }, this.removeListener = (i, n) => {
            this.events.removeListener(i, n)
        }, this.relayer = e, this.logger = xe.generateChildLogger(r, this.name), this.registerEventListeners()
    }
    get context() {
        return xe.getLoggerContext(this.logger)
    }
    rpcPublish(e, r, i, n, a, h, c) {
        var l, u, f, y;
        const b = {
            method: oi(n.protocol).publish,
            params: {
                topic: e,
                message: r,
                ttl: i,
                prompt: a,
                tag: h
            },
            id: c
        };
        return Pt((l = b.params) == null ? void 0 : l.prompt) && ((u = b.params) == null || delete u.prompt), Pt((f = b.params) == null ? void 0 : f.tag) && ((y = b.params) == null || delete y.tag), this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
            type: "message",
            direction: "outgoing",
            request: b
        }), this.relayer.request(b)
    }
    removeRequestFromQueue(e) {
        this.queue.delete(e)
    }
    checkQueue() {
        this.queue.forEach(async e => {
            const {
                topic: r,
                message: i,
                opts: n
            } = e;
            await this.publish(r, i, n)
        })
    }
    registerEventListeners() {
        this.relayer.core.heartbeat.on(fr.HEARTBEAT_EVENTS.pulse, () => {
            if (this.needsTransportRestart) {
                this.needsTransportRestart = !1, this.relayer.events.emit(_t.connection_stalled);
                return
            }
            this.checkQueue()
        }), this.relayer.on(_t.message_ack, e => {
            this.removeRequestFromQueue(e.id.toString())
        })
    }
}
class x0 {
    constructor() {
        this.map = new Map, this.set = (e, r) => {
            const i = this.get(e);
            this.exists(e, r) || this.map.set(e, [...i, r])
        }, this.get = e => this.map.get(e) || [], this.exists = (e, r) => this.get(e).includes(r), this.delete = (e, r) => {
            if (typeof r > "u") {
                this.map.delete(e);
                return
            }
            if (!this.map.has(e)) return;
            const i = this.get(e);
            if (!this.exists(e, r)) return;
            const n = i.filter(a => a !== r);
            if (!n.length) {
                this.map.delete(e);
                return
            }
            this.map.set(e, n)
        }, this.clear = () => {
            this.map.clear()
        }
    }
    get topics() {
        return Array.from(this.map.keys())
    }
}
var I0 = Object.defineProperty,
    O0 = Object.defineProperties,
    A0 = Object.getOwnPropertyDescriptors,
    ro = Object.getOwnPropertySymbols,
    C0 = Object.prototype.hasOwnProperty,
    T0 = Object.prototype.propertyIsEnumerable,
    io = (t, e, r) => e in t ? I0(t, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : t[e] = r,
    Ir = (t, e) => {
        for (var r in e || (e = {})) C0.call(e, r) && io(t, r, e[r]);
        if (ro)
            for (var r of ro(e)) T0.call(e, r) && io(t, r, e[r]);
        return t
    },
    Bi = (t, e) => O0(t, A0(e));
class P0 extends sh {
    constructor(e, r) {
        super(e, r), this.relayer = e, this.logger = r, this.subscriptions = new Map, this.topicMap = new x0, this.events = new Lt.EventEmitter, this.name = u0, this.version = h0, this.pending = new Map, this.cached = [], this.initialized = !1, this.pendingSubscriptionWatchLabel = "pending_sub_watch_label", this.pollingInterval = 20, this.storagePrefix = Ht, this.subscribeTimeout = ee.toMiliseconds(ee.ONE_MINUTE), this.restartInProgress = !1, this.batchSubscribeTopicsLimit = 500, this.init = async () => {
            this.initialized || (this.logger.trace("Initialized"), this.registerEventListeners(), this.clientId = await this.relayer.core.crypto.getClientId())
        }, this.subscribe = async (i, n) => {
            await this.restartToComplete(), this.isInitialized(), this.logger.debug("Subscribing Topic"), this.logger.trace({
                type: "method",
                method: "subscribe",
                params: {
                    topic: i,
                    opts: n
                }
            });
            try {
                const a = sn(n),
                    h = {
                        topic: i,
                        relay: a
                    };
                this.pending.set(i, h);
                const c = await this.rpcSubscribe(i, a);
                return typeof c == "string" && (this.onSubscribe(c, h), this.logger.debug("Successfully Subscribed Topic"), this.logger.trace({
                    type: "method",
                    method: "subscribe",
                    params: {
                        topic: i,
                        opts: n
                    }
                })), c
            } catch (a) {
                throw this.logger.debug("Failed to Subscribe Topic"), this.logger.error(a), a
            }
        }, this.unsubscribe = async (i, n) => {
            await this.restartToComplete(), this.isInitialized(), typeof(n == null ? void 0 : n.id) < "u" ? await this.unsubscribeById(i, n.id, n) : await this.unsubscribeByTopic(i, n)
        }, this.isSubscribed = async i => {
            if (this.topics.includes(i)) return !0;
            const n = `${this.pendingSubscriptionWatchLabel}_${i}`;
            return await new Promise((a, h) => {
                const c = new ee.Watch;
                c.start(n);
                const l = setInterval(() => {
                    !this.pending.has(i) && this.topics.includes(i) && (clearInterval(l), c.stop(n), a(!0)), c.elapsed(n) >= l0 && (clearInterval(l), c.stop(n), h(new Error("Subscription resolution timeout")))
                }, this.pollingInterval)
            }).catch(() => !1)
        }, this.on = (i, n) => {
            this.events.on(i, n)
        }, this.once = (i, n) => {
            this.events.once(i, n)
        }, this.off = (i, n) => {
            this.events.off(i, n)
        }, this.removeListener = (i, n) => {
            this.events.removeListener(i, n)
        }, this.start = async () => {
            await this.onConnect()
        }, this.stop = async () => {
            await this.onDisconnect()
        }, this.restart = async () => {
            this.restartInProgress = !0, await this.restore(), await this.reset(), this.restartInProgress = !1
        }, this.relayer = e, this.logger = xe.generateChildLogger(r, this.name), this.clientId = ""
    }
    get context() {
        return xe.getLoggerContext(this.logger)
    }
    get storageKey() {
        return this.storagePrefix + this.version + this.relayer.core.customStoragePrefix + "//" + this.name
    }
    get length() {
        return this.subscriptions.size
    }
    get ids() {
        return Array.from(this.subscriptions.keys())
    }
    get values() {
        return Array.from(this.subscriptions.values())
    }
    get topics() {
        return this.topicMap.topics
    }
    hasSubscription(e, r) {
        let i = !1;
        try {
            i = this.getSubscription(e).topic === r
        } catch (n) {}
        return i
    }
    onEnable() {
        this.cached = [], this.initialized = !0
    }
    onDisable() {
        this.cached = this.values, this.subscriptions.clear(), this.topicMap.clear()
    }
    async unsubscribeByTopic(e, r) {
        const i = this.topicMap.get(e);
        await Promise.all(i.map(async n => await this.unsubscribeById(e, n, r)))
    }
    async unsubscribeById(e, r, i) {
        this.logger.debug("Unsubscribing Topic"), this.logger.trace({
            type: "method",
            method: "unsubscribe",
            params: {
                topic: e,
                id: r,
                opts: i
            }
        });
        try {
            const n = sn(i);
            await this.rpcUnsubscribe(e, r, n);
            const a = Et("USER_DISCONNECTED", `${this.name}, ${e}`);
            await this.onUnsubscribe(e, r, a), this.logger.debug("Successfully Unsubscribed Topic"), this.logger.trace({
                type: "method",
                method: "unsubscribe",
                params: {
                    topic: e,
                    id: r,
                    opts: i
                }
            })
        } catch (n) {
            throw this.logger.debug("Failed to Unsubscribe Topic"), this.logger.error(n), n
        }
    }
    async rpcSubscribe(e, r) {
        const i = {
            method: oi(r.protocol).subscribe,
            params: {
                topic: e
            }
        };
        this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
            type: "payload",
            direction: "outgoing",
            request: i
        });
        try {
            return await await Nr(this.relayer.request(i).catch(n => this.logger.warn(n)), this.subscribeTimeout) ? nn(e + this.clientId) : null
        } catch (n) {
            this.logger.debug("Outgoing Relay Subscribe Payload stalled"), this.relayer.events.emit(_t.connection_stalled)
        }
        return null
    }
    async rpcBatchSubscribe(e) {
        if (!e.length) return;
        const r = e[0].relay,
            i = {
                method: oi(r.protocol).batchSubscribe,
                params: {
                    topics: e.map(n => n.topic)
                }
            };
        this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
            type: "payload",
            direction: "outgoing",
            request: i
        });
        try {
            return await await Nr(this.relayer.request(i).catch(n => this.logger.warn(n)), this.subscribeTimeout)
        } catch (n) {
            this.relayer.events.emit(_t.connection_stalled)
        }
    }
    rpcUnsubscribe(e, r, i) {
        const n = {
            method: oi(i.protocol).unsubscribe,
            params: {
                topic: e,
                id: r
            }
        };
        return this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
            type: "payload",
            direction: "outgoing",
            request: n
        }), this.relayer.request(n)
    }
    onSubscribe(e, r) {
        this.setSubscription(e, Bi(Ir({}, r), {
            id: e
        })), this.pending.delete(r.topic)
    }
    onBatchSubscribe(e) {
        e.length && e.forEach(r => {
            this.setSubscription(r.id, Ir({}, r)), this.pending.delete(r.topic)
        })
    }
    async onUnsubscribe(e, r, i) {
        this.events.removeAllListeners(r), this.hasSubscription(r, e) && this.deleteSubscription(r, i), await this.relayer.messages.del(e)
    }
    async setRelayerSubscriptions(e) {
        await this.relayer.core.storage.setItem(this.storageKey, e)
    }
    async getRelayerSubscriptions() {
        return await this.relayer.core.storage.getItem(this.storageKey)
    }
    setSubscription(e, r) {
        this.logger.debug("Setting subscription"), this.logger.trace({
            type: "method",
            method: "setSubscription",
            id: e,
            subscription: r
        }), this.addSubscription(e, r)
    }
    addSubscription(e, r) {
        this.subscriptions.set(e, Ir({}, r)), this.topicMap.set(r.topic, e), this.events.emit(Ct.created, r)
    }
    getSubscription(e) {
        this.logger.debug("Getting subscription"), this.logger.trace({
            type: "method",
            method: "getSubscription",
            id: e
        });
        const r = this.subscriptions.get(e);
        if (!r) {
            const {
                message: i
            } = ce("NO_MATCHING_KEY", `${this.name}: ${e}`);
            throw new Error(i)
        }
        return r
    }
    deleteSubscription(e, r) {
        this.logger.debug("Deleting subscription"), this.logger.trace({
            type: "method",
            method: "deleteSubscription",
            id: e,
            reason: r
        });
        const i = this.getSubscription(e);
        this.subscriptions.delete(e), this.topicMap.delete(i.topic, e), this.events.emit(Ct.deleted, Bi(Ir({}, i), {
            reason: r
        }))
    }
    async persist() {
        await this.setRelayerSubscriptions(this.values), this.events.emit(Ct.sync)
    }
    async reset() {
        if (this.cached.length) {
            const e = Math.ceil(this.cached.length / this.batchSubscribeTopicsLimit);
            for (let r = 0; r < e; r++) {
                const i = this.cached.splice(0, this.batchSubscribeTopicsLimit);
                await this.batchSubscribe(i)
            }
        }
        this.events.emit(Ct.resubscribed)
    }
    async restore() {
        try {
            const e = await this.getRelayerSubscriptions();
            if (typeof e > "u" || !e.length) return;
            if (this.subscriptions.size) {
                const {
                    message: r
                } = ce("RESTORE_WILL_OVERRIDE", this.name);
                throw this.logger.error(r), this.logger.error(`${this.name}: ${JSON.stringify(this.values)}`), new Error(r)
            }
            this.cached = e, this.logger.debug(`Successfully Restored subscriptions for ${this.name}`), this.logger.trace({
                type: "method",
                method: "restore",
                subscriptions: this.values
            })
        } catch (e) {
            this.logger.debug(`Failed to Restore subscriptions for ${this.name}`), this.logger.error(e)
        }
    }
    async batchSubscribe(e) {
        if (!e.length) return;
        const r = await this.rpcBatchSubscribe(e);
        zr(r) && this.onBatchSubscribe(r.map((i, n) => Bi(Ir({}, e[n]), {
            id: i
        })))
    }
    async onConnect() {
        await this.restart(), this.onEnable()
    }
    onDisconnect() {
        this.onDisable()
    }
    async checkPending() {
        if (!this.initialized || !this.relayer.connected) return;
        const e = [];
        this.pending.forEach(r => {
            e.push(r)
        }), await this.batchSubscribe(e)
    }
    registerEventListeners() {
        this.relayer.core.heartbeat.on(fr.HEARTBEAT_EVENTS.pulse, async () => {
            await this.checkPending()
        }), this.events.on(Ct.created, async e => {
            const r = Ct.created;
            this.logger.info(`Emitting ${r}`), this.logger.debug({
                type: "event",
                event: r,
                data: e
            }), await this.persist()
        }), this.events.on(Ct.deleted, async e => {
            const r = Ct.deleted;
            this.logger.info(`Emitting ${r}`), this.logger.debug({
                type: "event",
                event: r,
                data: e
            }), await this.persist()
        })
    }
    isInitialized() {
        if (!this.initialized) {
            const {
                message: e
            } = ce("NOT_INITIALIZED", this.name);
            throw new Error(e)
        }
    }
    async restartToComplete() {
        this.restartInProgress && await new Promise(e => {
            const r = setInterval(() => {
                this.restartInProgress || (clearInterval(r), e())
            }, this.pollingInterval)
        })
    }
}
var L0 = Object.defineProperty,
    no = Object.getOwnPropertySymbols,
    N0 = Object.prototype.hasOwnProperty,
    F0 = Object.prototype.propertyIsEnumerable,
    so = (t, e, r) => e in t ? L0(t, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : t[e] = r,
    R0 = (t, e) => {
        for (var r in e || (e = {})) N0.call(e, r) && so(t, r, e[r]);
        if (no)
            for (var r of no(e)) F0.call(e, r) && so(t, r, e[r]);
        return t
    };
class U0 extends ih {
    constructor(e) {
        super(e), this.protocol = "wc", this.version = 2, this.events = new Lt.EventEmitter, this.name = r0, this.transportExplicitlyClosed = !1, this.initialized = !1, this.connectionAttemptInProgress = !1, this.connectionStatusPollingInterval = 20, this.staleConnectionErrors = ["socket hang up", "socket stalled", "interrupted"], this.hasExperiencedNetworkDisruption = !1, this.requestsInFlight = new Map, this.heartBeatTimeout = ee.toMiliseconds(ee.THIRTY_SECONDS + ee.ONE_SECOND), this.request = async r => {
            var i, n;
            this.logger.debug("Publishing Request Payload");
            const a = r.id || An().toString();
            await this.toEstablishConnection();
            try {
                const h = this.provider.request(r);
                this.requestsInFlight.set(a, {
                    promise: h,
                    request: r
                }), this.logger.trace({
                    id: a,
                    method: r.method,
                    topic: (i = r.params) == null ? void 0 : i.topic
                }, "relayer.request - attempt to publish...");
                const c = await new Promise(async (l, u) => {
                    const f = () => {
                        u(new Error(`relayer.request - publish interrupted, id: ${a}`))
                    };
                    this.provider.on(bt.disconnect, f);
                    const y = await h;
                    this.provider.off(bt.disconnect, f), l(y)
                });
                return this.logger.trace({
                    id: a,
                    method: r.method,
                    topic: (n = r.params) == null ? void 0 : n.topic
                }, "relayer.request - published"), c
            } catch (h) {
                throw this.logger.debug(`Failed to Publish Request: ${a}`), h
            } finally {
                this.requestsInFlight.delete(a)
            }
        }, this.resetPingTimeout = () => {
            if (Lr()) try {
                clearTimeout(this.pingTimeout), this.pingTimeout = setTimeout(() => {
                    var r, i, n;
                    (n = (i = (r = this.provider) == null ? void 0 : r.connection) == null ? void 0 : i.socket) == null || n.terminate()
                }, this.heartBeatTimeout)
            } catch (r) {
                this.logger.warn(r)
            }
        }, this.onPayloadHandler = r => {
            this.onProviderPayload(r), this.resetPingTimeout()
        }, this.onConnectHandler = () => {
            this.startPingTimeout(), this.events.emit(_t.connect)
        }, this.onDisconnectHandler = () => {
            this.onProviderDisconnect()
        }, this.onProviderErrorHandler = r => {
            this.logger.error(r), this.events.emit(_t.error, r), this.logger.info("Fatal socket error received, closing transport"), this.transportClose()
        }, this.registerProviderListeners = () => {
            this.provider.on(bt.payload, this.onPayloadHandler), this.provider.on(bt.connect, this.onConnectHandler), this.provider.on(bt.disconnect, this.onDisconnectHandler), this.provider.on(bt.error, this.onProviderErrorHandler)
        }, this.core = e.core, this.logger = typeof e.logger < "u" && typeof e.logger != "string" ? xe.generateChildLogger(e.logger, this.name) : xe.pino(xe.getDefaultLoggerOptions({
            level: e.logger || t0
        })), this.messages = new D0(this.logger, e.core), this.subscriber = new P0(this, this.logger), this.publisher = new S0(this, this.logger), this.relayUrl = (e == null ? void 0 : e.relayUrl) || Ma, this.projectId = e.projectId, this.bundleId = Zf(), this.provider = {}
    }
    async init() {
        this.logger.trace("Initialized"), this.registerEventListeners(), await this.createProvider(), await Promise.all([this.messages.init(), this.subscriber.init()]);
        try {
            await this.transportOpen()
        } catch (e) {
            this.logger.warn(`Connection via ${this.relayUrl} failed, attempting to connect via failover domain ${to}...`), await this.restartTransport(to)
        }
        this.initialized = !0, setTimeout(async () => {
            this.subscriber.topics.length === 0 && this.subscriber.pending.size === 0 && (this.logger.info("No topics subscribed to after init, closing transport"), await this.transportClose(), this.transportExplicitlyClosed = !1)
        }, o0)
    }
    get context() {
        return xe.getLoggerContext(this.logger)
    }
    get connected() {
        var e, r, i;
        return ((i = (r = (e = this.provider) == null ? void 0 : e.connection) == null ? void 0 : r.socket) == null ? void 0 : i.readyState) === 1
    }
    get connecting() {
        var e, r, i;
        return ((i = (r = (e = this.provider) == null ? void 0 : e.connection) == null ? void 0 : r.socket) == null ? void 0 : i.readyState) === 0
    }
    async publish(e, r, i) {
        this.isInitialized(), await this.publisher.publish(e, r, i), await this.recordMessageEvent({
            topic: e,
            message: r,
            publishedAt: Date.now()
        })
    }
    async subscribe(e, r) {
        var i;
        this.isInitialized();
        let n = ((i = this.subscriber.topicMap.get(e)) == null ? void 0 : i[0]) || "",
            a;
        const h = c => {
            c.topic === e && (this.subscriber.off(Ct.created, h), a())
        };
        return await Promise.all([new Promise(c => {
            a = c, this.subscriber.on(Ct.created, h)
        }), new Promise(async c => {
            n = await this.subscriber.subscribe(e, r) || n, c()
        })]), n
    }
    async unsubscribe(e, r) {
        this.isInitialized(), await this.subscriber.unsubscribe(e, r)
    }
    on(e, r) {
        this.events.on(e, r)
    }
    once(e, r) {
        this.events.once(e, r)
    }
    off(e, r) {
        this.events.off(e, r)
    }
    removeListener(e, r) {
        this.events.removeListener(e, r)
    }
    async transportDisconnect() {
        if (!this.hasExperiencedNetworkDisruption && this.connected && this.requestsInFlight.size > 0) try {
            await Promise.all(Array.from(this.requestsInFlight.values()).map(e => e.promise))
        } catch (e) {
            this.logger.warn(e)
        }
        this.hasExperiencedNetworkDisruption || this.connected ? await Nr(this.provider.disconnect(), 2e3, "provider.disconnect()").catch(() => this.onProviderDisconnect()) : this.onProviderDisconnect()
    }
    async transportClose() {
        this.transportExplicitlyClosed = !0, await this.transportDisconnect()
    }
    async transportOpen(e) {
        await this.confirmOnlineStateOrThrow(), e && e !== this.relayUrl && (this.relayUrl = e, await this.transportDisconnect(), await this.createProvider()), this.connectionAttemptInProgress = !0, this.transportExplicitlyClosed = !1;
        try {
            await new Promise(async (r, i) => {
                const n = () => {
                    this.provider.off(bt.disconnect, n), i(new Error("Connection interrupted while trying to subscribe"))
                };
                this.provider.on(bt.disconnect, n), await Nr(this.provider.connect(), ee.toMiliseconds(ee.ONE_MINUTE), `Socket stalled when trying to connect to ${this.relayUrl}`).catch(a => {
                    i(a)
                }), await this.subscriber.start(), this.hasExperiencedNetworkDisruption = !1, r()
            })
        } catch (r) {
            this.logger.error(r);
            const i = r;
            if (!this.isConnectionStalled(i.message)) throw r
        } finally {
            this.connectionAttemptInProgress = !1
        }
    }
    async restartTransport(e) {
        this.connectionAttemptInProgress || (this.relayUrl = e || this.relayUrl, await this.confirmOnlineStateOrThrow(), await this.transportClose(), await this.createProvider(), await this.transportOpen())
    }
    async confirmOnlineStateOrThrow() {
        if (!await Bs()) throw new Error("No internet connection detected. Please restart your network and try again.")
    }
    startPingTimeout() {
        var e, r, i, n, a;
        if (Lr()) try {
            (r = (e = this.provider) == null ? void 0 : e.connection) != null && r.socket && ((a = (n = (i = this.provider) == null ? void 0 : i.connection) == null ? void 0 : n.socket) == null || a.once("ping", () => {
                this.resetPingTimeout()
            })), this.resetPingTimeout()
        } catch (h) {
            this.logger.warn(h)
        }
    }
    isConnectionStalled(e) {
        return this.staleConnectionErrors.some(r => e.includes(r))
    }
    async createProvider() {
        this.provider.connection && this.unregisterProviderListeners();
        const e = await this.core.crypto.signJWT(this.relayUrl);
        this.provider = new cg(new fg(nd({
            sdkVersion: s0,
            protocol: this.protocol,
            version: this.version,
            relayUrl: this.relayUrl,
            projectId: this.projectId,
            auth: e,
            useOnCloseEvent: !0,
            bundleId: this.bundleId
        }))), this.registerProviderListeners()
    }
    async recordMessageEvent(e) {
        const {
            topic: r,
            message: i
        } = e;
        await this.messages.set(r, i)
    }
    async shouldIgnoreMessageEvent(e) {
        const {
            topic: r,
            message: i
        } = e;
        if (!i || i.length === 0) return this.logger.debug(`Ignoring invalid/empty message: ${i}`), !0;
        if (!await this.subscriber.isSubscribed(r)) return this.logger.debug(`Ignoring message for non-subscribed topic ${r}`), !0;
        const n = this.messages.has(r, i);
        return n && this.logger.debug(`Ignoring duplicate message: ${i}`), n
    }
    async onProviderPayload(e) {
        if (this.logger.debug("Incoming Relay Payload"), this.logger.trace({
                type: "payload",
                direction: "incoming",
                payload: e
            }), Da(e)) {
            if (!e.method.endsWith(i0)) return;
            const r = e.params,
                {
                    topic: i,
                    message: n,
                    publishedAt: a
                } = r.data,
                h = {
                    topic: i,
                    message: n,
                    publishedAt: a
                };
            this.logger.debug("Emitting Relayer Payload"), this.logger.trace(R0({
                type: "event",
                event: r.id
            }, h)), this.events.emit(r.id, h), await this.acknowledgePayload(e), await this.onMessageEvent(h)
        } else Tn(e) && this.events.emit(_t.message_ack, e)
    }
    async onMessageEvent(e) {
        await this.shouldIgnoreMessageEvent(e) || (this.events.emit(_t.message, e), await this.recordMessageEvent(e))
    }
    async acknowledgePayload(e) {
        const r = wa(e.id, !0);
        await this.provider.connection.send(r)
    }
    unregisterProviderListeners() {
        this.provider.off(bt.payload, this.onPayloadHandler), this.provider.off(bt.connect, this.onConnectHandler), this.provider.off(bt.disconnect, this.onDisconnectHandler), this.provider.off(bt.error, this.onProviderErrorHandler)
    }
    async registerEventListeners() {
        let e = await Bs();
        zd(async r => {
            e !== r && (e = r, r ? await this.restartTransport().catch(i => this.logger.error(i)) : (this.hasExperiencedNetworkDisruption = !0, await this.transportDisconnect(), this.transportExplicitlyClosed = !1))
        })
    }
    async onProviderDisconnect() {
        await this.subscriber.stop(), this.events.emit(_t.disconnect), this.connectionAttemptInProgress = !1, !this.transportExplicitlyClosed && setTimeout(async () => {
            await this.transportOpen().catch(e => this.logger.error(e))
        }, ee.toMiliseconds(n0))
    }
    isInitialized() {
        if (!this.initialized) {
            const {
                message: e
            } = ce("NOT_INITIALIZED", this.name);
            throw new Error(e)
        }
    }
    async toEstablishConnection() {
        await this.confirmOnlineStateOrThrow(), !this.connected && (this.connectionAttemptInProgress && await new Promise(e => {
            const r = setInterval(() => {
                this.connected && (clearInterval(r), e())
            }, this.connectionStatusPollingInterval)
        }), await this.transportOpen())
    }
}
var M0 = Object.defineProperty,
    oo = Object.getOwnPropertySymbols,
    $0 = Object.prototype.hasOwnProperty,
    j0 = Object.prototype.propertyIsEnumerable,
    ao = (t, e, r) => e in t ? M0(t, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : t[e] = r,
    co = (t, e) => {
        for (var r in e || (e = {})) $0.call(e, r) && ao(t, r, e[r]);
        if (oo)
            for (var r of oo(e)) j0.call(e, r) && ao(t, r, e[r]);
        return t
    };
class B0 extends nh {
    constructor(e, r, i, n = Ht, a = void 0) {
        super(e, r, i, n), this.core = e, this.logger = r, this.name = i, this.map = new Map, this.version = a0, this.cached = [], this.initialized = !1, this.storagePrefix = Ht, this.recentlyDeleted = [], this.recentlyDeletedLimit = 200, this.init = async () => {
            this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach(h => {
                this.getKey && h !== null && !Pt(h) ? this.map.set(this.getKey(h), h) : Ad(h) ? this.map.set(h.id, h) : Cd(h) && this.map.set(h.topic, h)
            }), this.cached = [], this.initialized = !0)
        }, this.set = async (h, c) => {
            this.isInitialized(), this.map.has(h) ? await this.update(h, c) : (this.logger.debug("Setting value"), this.logger.trace({
                type: "method",
                method: "set",
                key: h,
                value: c
            }), this.map.set(h, c), await this.persist())
        }, this.get = h => (this.isInitialized(), this.logger.debug("Getting value"), this.logger.trace({
            type: "method",
            method: "get",
            key: h
        }), this.getData(h)), this.getAll = h => (this.isInitialized(), h ? this.values.filter(c => Object.keys(h).every(l => gg(c[l], h[l]))) : this.values), this.update = async (h, c) => {
            this.isInitialized(), this.logger.debug("Updating value"), this.logger.trace({
                type: "method",
                method: "update",
                key: h,
                update: c
            });
            const l = co(co({}, this.getData(h)), c);
            this.map.set(h, l), await this.persist()
        }, this.delete = async (h, c) => {
            this.isInitialized(), this.map.has(h) && (this.logger.debug("Deleting value"), this.logger.trace({
                type: "method",
                method: "delete",
                key: h,
                reason: c
            }), this.map.delete(h), this.addToRecentlyDeleted(h), await this.persist())
        }, this.logger = xe.generateChildLogger(r, this.name), this.storagePrefix = n, this.getKey = a
    }
    get context() {
        return xe.getLoggerContext(this.logger)
    }
    get storageKey() {
        return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
    }
    get length() {
        return this.map.size
    }
    get keys() {
        return Array.from(this.map.keys())
    }
    get values() {
        return Array.from(this.map.values())
    }
    addToRecentlyDeleted(e) {
        this.recentlyDeleted.push(e), this.recentlyDeleted.length >= this.recentlyDeletedLimit && this.recentlyDeleted.splice(0, this.recentlyDeletedLimit / 2)
    }
    async setDataStore(e) {
        await this.core.storage.setItem(this.storageKey, e)
    }
    async getDataStore() {
        return await this.core.storage.getItem(this.storageKey)
    }
    getData(e) {
        const r = this.map.get(e);
        if (!r) {
            if (this.recentlyDeleted.includes(e)) {
                const {
                    message: n
                } = ce("MISSING_OR_INVALID", `Record was recently deleted - ${this.name}: ${e}`);
                throw this.logger.error(n), new Error(n)
            }
            const {
                message: i
            } = ce("NO_MATCHING_KEY", `${this.name}: ${e}`);
            throw this.logger.error(i), new Error(i)
        }
        return r
    }
    async persist() {
        await this.setDataStore(this.values)
    }
    async restore() {
        try {
            const e = await this.getDataStore();
            if (typeof e > "u" || !e.length) return;
            if (this.map.size) {
                const {
                    message: r
                } = ce("RESTORE_WILL_OVERRIDE", this.name);
                throw this.logger.error(r), new Error(r)
            }
            this.cached = e, this.logger.debug(`Successfully Restored value for ${this.name}`), this.logger.trace({
                type: "method",
                method: "restore",
                value: this.values
            })
        } catch (e) {
            this.logger.debug(`Failed to Restore value for ${this.name}`), this.logger.error(e)
        }
    }
    isInitialized() {
        if (!this.initialized) {
            const {
                message: e
            } = ce("NOT_INITIALIZED", this.name);
            throw new Error(e)
        }
    }
}
class z0 {
    constructor(e, r) {
        this.core = e, this.logger = r, this.name = f0, this.version = d0, this.events = new $c, this.initialized = !1, this.storagePrefix = Ht, this.ignoredPayloadTypes = [pr], this.registeredMethods = [], this.init = async () => {
            this.initialized || (await this.pairings.init(), await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.initialized = !0, this.logger.trace("Initialized"))
        }, this.register = ({
            methods: i
        }) => {
            this.isInitialized(), this.registeredMethods = [...new Set([...this.registeredMethods, ...i])]
        }, this.create = async () => {
            this.isInitialized();
            const i = rn(),
                n = await this.core.crypto.setSymKey(i),
                a = si(ee.FIVE_MINUTES),
                h = {
                    protocol: e0
                },
                c = {
                    topic: n,
                    expiry: a,
                    relay: h,
                    active: !1
                },
                l = wd({
                    protocol: this.core.protocol,
                    version: this.core.version,
                    topic: n,
                    symKey: i,
                    relay: h,
                    expiryTimestamp: a
                });
            return await this.pairings.set(n, c), await this.core.relayer.subscribe(n), this.core.expirer.set(n, a), {
                topic: n,
                uri: l
            }
        }, this.pair = async i => {
            this.isInitialized(), this.isValidPair(i);
            const {
                topic: n,
                symKey: a,
                relay: h,
                expiryTimestamp: c
            } = Ms(i.uri);
            let l;
            if (this.pairings.keys.includes(n) && (l = this.pairings.get(n), l.active)) throw new Error(`Pairing already exists: ${n}. Please try again with a new connection URI.`);
            const u = c || si(ee.FIVE_MINUTES),
                f = {
                    topic: n,
                    relay: h,
                    expiry: u,
                    active: !1
                };
            return await this.pairings.set(n, f), this.core.expirer.set(n, u), i.activatePairing && await this.activate({
                topic: n
            }), this.events.emit(Qr.create, f), this.core.crypto.keychain.has(n) || await this.core.crypto.setSymKey(a, n), await this.core.relayer.subscribe(n, {
                relay: h
            }), f
        }, this.activate = async ({
            topic: i
        }) => {
            this.isInitialized();
            const n = si(ee.THIRTY_DAYS);
            await this.pairings.update(i, {
                active: !0,
                expiry: n
            }), this.core.expirer.set(i, n)
        }, this.ping = async i => {
            this.isInitialized(), await this.isValidPing(i);
            const {
                topic: n
            } = i;
            if (this.pairings.keys.includes(n)) {
                const a = await this.sendRequest(n, "wc_pairingPing", {}),
                    {
                        done: h,
                        resolve: c,
                        reject: l
                    } = sd();
                this.events.once(Ri("pairing_ping", a), ({
                    error: u
                }) => {
                    u ? l(u) : c()
                }), await h()
            }
        }, this.updateExpiry = async ({
            topic: i,
            expiry: n
        }) => {
            this.isInitialized(), await this.pairings.update(i, {
                expiry: n
            })
        }, this.updateMetadata = async ({
            topic: i,
            metadata: n
        }) => {
            this.isInitialized(), await this.pairings.update(i, {
                peerMetadata: n
            })
        }, this.getPairings = () => (this.isInitialized(), this.pairings.values), this.disconnect = async i => {
            this.isInitialized(), await this.isValidDisconnect(i);
            const {
                topic: n
            } = i;
            this.pairings.keys.includes(n) && (await this.sendRequest(n, "wc_pairingDelete", Et("USER_DISCONNECTED")), await this.deletePairing(n))
        }, this.sendRequest = async (i, n, a) => {
            const h = Cn(n, a),
                c = await this.core.crypto.encode(i, h),
                l = xr[n].req;
            return this.core.history.set(i, h), this.core.relayer.publish(i, c, l), h.id
        }, this.sendResult = async (i, n, a) => {
            const h = wa(i, a),
                c = await this.core.crypto.encode(n, h),
                l = await this.core.history.get(n, i),
                u = xr[l.request.method].res;
            await this.core.relayer.publish(n, c, u), await this.core.history.resolve(h)
        }, this.sendError = async (i, n, a) => {
            const h = _a(i, a),
                c = await this.core.crypto.encode(n, h),
                l = await this.core.history.get(n, i),
                u = xr[l.request.method] ? xr[l.request.method].res : xr.unregistered_method.res;
            await this.core.relayer.publish(n, c, u), await this.core.history.resolve(h)
        }, this.deletePairing = async (i, n) => {
            await this.core.relayer.unsubscribe(i), await Promise.all([this.pairings.delete(i, Et("USER_DISCONNECTED")), this.core.crypto.deleteSymKey(i), n ? Promise.resolve() : this.core.expirer.del(i)])
        }, this.cleanup = async () => {
            const i = this.pairings.getAll().filter(n => Fs(n.expiry));
            await Promise.all(i.map(n => this.deletePairing(n.topic)))
        }, this.onRelayEventRequest = i => {
            const {
                topic: n,
                payload: a
            } = i;
            switch (a.method) {
                case "wc_pairingPing":
                    return this.onPairingPingRequest(n, a);
                case "wc_pairingDelete":
                    return this.onPairingDeleteRequest(n, a);
                default:
                    return this.onUnknownRpcMethodRequest(n, a)
            }
        }, this.onRelayEventResponse = async i => {
            const {
                topic: n,
                payload: a
            } = i, h = (await this.core.history.get(n, a.id)).request.method;
            switch (h) {
                case "wc_pairingPing":
                    return this.onPairingPingResponse(n, a);
                default:
                    return this.onUnknownRpcMethodResponse(h)
            }
        }, this.onPairingPingRequest = async (i, n) => {
            const {
                id: a
            } = n;
            try {
                this.isValidPing({
                    topic: i
                }), await this.sendResult(a, i, !0), this.events.emit(Qr.ping, {
                    id: a,
                    topic: i
                })
            } catch (h) {
                await this.sendError(a, i, h), this.logger.error(h)
            }
        }, this.onPairingPingResponse = (i, n) => {
            const {
                id: a
            } = n;
            setTimeout(() => {
                Sa(n) ? this.events.emit(Ri("pairing_ping", a), {}) : _i(n) && this.events.emit(Ri("pairing_ping", a), {
                    error: n.error
                })
            }, 500)
        }, this.onPairingDeleteRequest = async (i, n) => {
            const {
                id: a
            } = n;
            try {
                this.isValidDisconnect({
                    topic: i
                }), await this.deletePairing(i), this.events.emit(Qr.delete, {
                    id: a,
                    topic: i
                })
            } catch (h) {
                await this.sendError(a, i, h), this.logger.error(h)
            }
        }, this.onUnknownRpcMethodRequest = async (i, n) => {
            const {
                id: a,
                method: h
            } = n;
            try {
                if (this.registeredMethods.includes(h)) return;
                const c = Et("WC_METHOD_UNSUPPORTED", h);
                await this.sendError(a, i, c), this.logger.error(c)
            } catch (c) {
                await this.sendError(a, i, c), this.logger.error(c)
            }
        }, this.onUnknownRpcMethodResponse = i => {
            this.registeredMethods.includes(i) || this.logger.error(Et("WC_METHOD_UNSUPPORTED", i))
        }, this.isValidPair = i => {
            var n;
            if (!Ui(i)) {
                const {
                    message: h
                } = ce("MISSING_OR_INVALID", `pair() params: ${i}`);
                throw new Error(h)
            }
            if (!Od(i.uri)) {
                const {
                    message: h
                } = ce("MISSING_OR_INVALID", `pair() uri: ${i.uri}`);
                throw new Error(h)
            }
            const a = Ms(i.uri);
            if (!((n = a == null ? void 0 : a.relay) != null && n.protocol)) {
                const {
                    message: h
                } = ce("MISSING_OR_INVALID", "pair() uri#relay-protocol");
                throw new Error(h)
            }
            if (!(a != null && a.symKey)) {
                const {
                    message: h
                } = ce("MISSING_OR_INVALID", "pair() uri#symKey");
                throw new Error(h)
            }
            if (a != null && a.expiryTimestamp && ee.toMiliseconds(a == null ? void 0 : a.expiryTimestamp) < Date.now()) {
                const {
                    message: h
                } = ce("EXPIRED", "pair() URI has expired. Please try again with a new connection URI.");
                throw new Error(h)
            }
        }, this.isValidPing = async i => {
            if (!Ui(i)) {
                const {
                    message: a
                } = ce("MISSING_OR_INVALID", `ping() params: ${i}`);
                throw new Error(a)
            }
            const {
                topic: n
            } = i;
            await this.isValidPairingTopic(n)
        }, this.isValidDisconnect = async i => {
            if (!Ui(i)) {
                const {
                    message: a
                } = ce("MISSING_OR_INVALID", `disconnect() params: ${i}`);
                throw new Error(a)
            }
            const {
                topic: n
            } = i;
            await this.isValidPairingTopic(n)
        }, this.isValidPairingTopic = async i => {
            if (!gt(i, !1)) {
                const {
                    message: n
                } = ce("MISSING_OR_INVALID", `pairing topic should be a string: ${i}`);
                throw new Error(n)
            }
            if (!this.pairings.keys.includes(i)) {
                const {
                    message: n
                } = ce("NO_MATCHING_KEY", `pairing topic doesn't exist: ${i}`);
                throw new Error(n)
            }
            if (Fs(this.pairings.get(i).expiry)) {
                await this.deletePairing(i);
                const {
                    message: n
                } = ce("EXPIRED", `pairing topic: ${i}`);
                throw new Error(n)
            }
        }, this.core = e, this.logger = xe.generateChildLogger(r, this.name), this.pairings = new B0(this.core, this.logger, this.name, this.storagePrefix)
    }
    get context() {
        return xe.getLoggerContext(this.logger)
    }
    isInitialized() {
        if (!this.initialized) {
            const {
                message: e
            } = ce("NOT_INITIALIZED", this.name);
            throw new Error(e)
        }
    }
    registerRelayerEvents() {
        this.core.relayer.on(_t.message, async e => {
            const {
                topic: r,
                message: i
            } = e;
            if (!this.pairings.keys.includes(r) || this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(i))) return;
            const n = await this.core.crypto.decode(r, i);
            try {
                Da(n) ? (this.core.history.set(r, n), this.onRelayEventRequest({
                    topic: r,
                    payload: n
                })) : Tn(n) && (await this.core.history.resolve(n), await this.onRelayEventResponse({
                    topic: r,
                    payload: n
                }), this.core.history.delete(r, n.id))
            } catch (a) {
                this.logger.error(a)
            }
        })
    }
    registerExpirerEvents() {
        this.core.expirer.on(wt.expired, async e => {
            const {
                topic: r
            } = cd(e.target);
            r && this.pairings.keys.includes(r) && (await this.deletePairing(r, !0), this.events.emit(Qr.expire, {
                topic: r
            }))
        })
    }
}
class K0 extends eh {
    constructor(e, r) {
        super(e, r), this.core = e, this.logger = r, this.records = new Map, this.events = new Lt.EventEmitter, this.name = g0, this.version = p0, this.cached = [], this.initialized = !1, this.storagePrefix = Ht, this.init = async () => {
            this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach(i => this.records.set(i.id, i)), this.cached = [], this.registerEventListeners(), this.initialized = !0)
        }, this.set = (i, n, a) => {
            if (this.isInitialized(), this.logger.debug("Setting JSON-RPC request history record"), this.logger.trace({
                    type: "method",
                    method: "set",
                    topic: i,
                    request: n,
                    chainId: a
                }), this.records.has(n.id)) return;
            const h = {
                id: n.id,
                topic: i,
                request: {
                    method: n.method,
                    params: n.params || null
                },
                chainId: a,
                expiry: si(ee.THIRTY_DAYS)
            };
            this.records.set(h.id, h), this.events.emit(It.created, h)
        }, this.resolve = async i => {
            if (this.isInitialized(), this.logger.debug("Updating JSON-RPC response history record"), this.logger.trace({
                    type: "method",
                    method: "update",
                    response: i
                }), !this.records.has(i.id)) return;
            const n = await this.getRecord(i.id);
            typeof n.response > "u" && (n.response = _i(i) ? {
                error: i.error
            } : {
                result: i.result
            }, this.records.set(n.id, n), this.events.emit(It.updated, n))
        }, this.get = async (i, n) => (this.isInitialized(), this.logger.debug("Getting record"), this.logger.trace({
            type: "method",
            method: "get",
            topic: i,
            id: n
        }), await this.getRecord(n)), this.delete = (i, n) => {
            this.isInitialized(), this.logger.debug("Deleting record"), this.logger.trace({
                type: "method",
                method: "delete",
                id: n
            }), this.values.forEach(a => {
                if (a.topic === i) {
                    if (typeof n < "u" && a.id !== n) return;
                    this.records.delete(a.id), this.events.emit(It.deleted, a)
                }
            })
        }, this.exists = async (i, n) => (this.isInitialized(), this.records.has(n) ? (await this.getRecord(n)).topic === i : !1), this.on = (i, n) => {
            this.events.on(i, n)
        }, this.once = (i, n) => {
            this.events.once(i, n)
        }, this.off = (i, n) => {
            this.events.off(i, n)
        }, this.removeListener = (i, n) => {
            this.events.removeListener(i, n)
        }, this.logger = xe.generateChildLogger(r, this.name)
    }
    get context() {
        return xe.getLoggerContext(this.logger)
    }
    get storageKey() {
        return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
    }
    get size() {
        return this.records.size
    }
    get keys() {
        return Array.from(this.records.keys())
    }
    get values() {
        return Array.from(this.records.values())
    }
    get pending() {
        const e = [];
        return this.values.forEach(r => {
            if (typeof r.response < "u") return;
            const i = {
                topic: r.topic,
                request: Cn(r.request.method, r.request.params, r.id),
                chainId: r.chainId
            };
            return e.push(i)
        }), e
    }
    async setJsonRpcRecords(e) {
        await this.core.storage.setItem(this.storageKey, e)
    }
    async getJsonRpcRecords() {
        return await this.core.storage.getItem(this.storageKey)
    }
    getRecord(e) {
        this.isInitialized();
        const r = this.records.get(e);
        if (!r) {
            const {
                message: i
            } = ce("NO_MATCHING_KEY", `${this.name}: ${e}`);
            throw new Error(i)
        }
        return r
    }
    async persist() {
        await this.setJsonRpcRecords(this.values), this.events.emit(It.sync)
    }
    async restore() {
        try {
            const e = await this.getJsonRpcRecords();
            if (typeof e > "u" || !e.length) return;
            if (this.records.size) {
                const {
                    message: r
                } = ce("RESTORE_WILL_OVERRIDE", this.name);
                throw this.logger.error(r), new Error(r)
            }
            this.cached = e, this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({
                type: "method",
                method: "restore",
                records: this.values
            })
        } catch (e) {
            this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(e)
        }
    }
    registerEventListeners() {
        this.events.on(It.created, e => {
            const r = It.created;
            this.logger.info(`Emitting ${r}`), this.logger.debug({
                type: "event",
                event: r,
                record: e
            }), this.persist()
        }), this.events.on(It.updated, e => {
            const r = It.updated;
            this.logger.info(`Emitting ${r}`), this.logger.debug({
                type: "event",
                event: r,
                record: e
            }), this.persist()
        }), this.events.on(It.deleted, e => {
            const r = It.deleted;
            this.logger.info(`Emitting ${r}`), this.logger.debug({
                type: "event",
                event: r,
                record: e
            }), this.persist()
        }), this.core.heartbeat.on(fr.HEARTBEAT_EVENTS.pulse, () => {
            this.cleanup()
        })
    }
    cleanup() {
        try {
            this.records.forEach(e => {
                ee.toMiliseconds(e.expiry || 0) - Date.now() <= 0 && (this.logger.info(`Deleting expired history log: ${e.id}`), this.delete(e.topic, e.id))
            })
        } catch (e) {
            this.logger.warn(e)
        }
    }
    isInitialized() {
        if (!this.initialized) {
            const {
                message: e
            } = ce("NOT_INITIALIZED", this.name);
            throw new Error(e)
        }
    }
}
class H0 extends oh {
    constructor(e, r) {
        super(e, r), this.core = e, this.logger = r, this.expirations = new Map, this.events = new Lt.EventEmitter, this.name = y0, this.version = b0, this.cached = [], this.initialized = !1, this.storagePrefix = Ht, this.init = async () => {
            this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach(i => this.expirations.set(i.target, i)), this.cached = [], this.registerEventListeners(), this.initialized = !0)
        }, this.has = i => {
            try {
                const n = this.formatTarget(i);
                return typeof this.getExpiration(n) < "u"
            } catch (n) {
                return !1
            }
        }, this.set = (i, n) => {
            this.isInitialized();
            const a = this.formatTarget(i),
                h = {
                    target: a,
                    expiry: n
                };
            this.expirations.set(a, h), this.checkExpiry(a, h), this.events.emit(wt.created, {
                target: a,
                expiration: h
            })
        }, this.get = i => {
            this.isInitialized();
            const n = this.formatTarget(i);
            return this.getExpiration(n)
        }, this.del = i => {
            if (this.isInitialized(), this.has(i)) {
                const n = this.formatTarget(i),
                    a = this.getExpiration(n);
                this.expirations.delete(n), this.events.emit(wt.deleted, {
                    target: n,
                    expiration: a
                })
            }
        }, this.on = (i, n) => {
            this.events.on(i, n)
        }, this.once = (i, n) => {
            this.events.once(i, n)
        }, this.off = (i, n) => {
            this.events.off(i, n)
        }, this.removeListener = (i, n) => {
            this.events.removeListener(i, n)
        }, this.logger = xe.generateChildLogger(r, this.name)
    }
    get context() {
        return xe.getLoggerContext(this.logger)
    }
    get storageKey() {
        return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
    }
    get length() {
        return this.expirations.size
    }
    get keys() {
        return Array.from(this.expirations.keys())
    }
    get values() {
        return Array.from(this.expirations.values())
    }
    formatTarget(e) {
        if (typeof e == "string") return od(e);
        if (typeof e == "number") return ad(e);
        const {
            message: r
        } = ce("UNKNOWN_TYPE", `Target type: ${typeof e}`);
        throw new Error(r)
    }
    async setExpirations(e) {
        await this.core.storage.setItem(this.storageKey, e)
    }
    async getExpirations() {
        return await this.core.storage.getItem(this.storageKey)
    }
    async persist() {
        await this.setExpirations(this.values), this.events.emit(wt.sync)
    }
    async restore() {
        try {
            const e = await this.getExpirations();
            if (typeof e > "u" || !e.length) return;
            if (this.expirations.size) {
                const {
                    message: r
                } = ce("RESTORE_WILL_OVERRIDE", this.name);
                throw this.logger.error(r), new Error(r)
            }
            this.cached = e, this.logger.debug(`Successfully Restored expirations for ${this.name}`), this.logger.trace({
                type: "method",
                method: "restore",
                expirations: this.values
            })
        } catch (e) {
            this.logger.debug(`Failed to Restore expirations for ${this.name}`), this.logger.error(e)
        }
    }
    getExpiration(e) {
        const r = this.expirations.get(e);
        if (!r) {
            const {
                message: i
            } = ce("NO_MATCHING_KEY", `${this.name}: ${e}`);
            throw this.logger.warn(i), new Error(i)
        }
        return r
    }
    checkExpiry(e, r) {
        const {
            expiry: i
        } = r;
        ee.toMiliseconds(i) - Date.now() <= 0 && this.expire(e, r)
    }
    expire(e, r) {
        this.expirations.delete(e), this.events.emit(wt.expired, {
            target: e,
            expiration: r
        })
    }
    checkExpirations() {
        this.core.relayer.connected && this.expirations.forEach((e, r) => this.checkExpiry(r, e))
    }
    registerEventListeners() {
        this.core.heartbeat.on(fr.HEARTBEAT_EVENTS.pulse, () => this.checkExpirations()), this.events.on(wt.created, e => {
            const r = wt.created;
            this.logger.info(`Emitting ${r}`), this.logger.debug({
                type: "event",
                event: r,
                data: e
            }), this.persist()
        }), this.events.on(wt.expired, e => {
            const r = wt.expired;
            this.logger.info(`Emitting ${r}`), this.logger.debug({
                type: "event",
                event: r,
                data: e
            }), this.persist()
        }), this.events.on(wt.deleted, e => {
            const r = wt.deleted;
            this.logger.info(`Emitting ${r}`), this.logger.debug({
                type: "event",
                event: r,
                data: e
            }), this.persist()
        })
    }
    isInitialized() {
        if (!this.initialized) {
            const {
                message: e
            } = ce("NOT_INITIALIZED", this.name);
            throw new Error(e)
        }
    }
}
class W0 extends ah {
    constructor(e, r) {
        super(e, r), this.projectId = e, this.logger = r, this.name = ji, this.initialized = !1, this.queue = [], this.verifyDisabled = !1, this.init = async i => {
            if (this.verifyDisabled || yr() || !jr()) return;
            const n = this.getVerifyUrl(i == null ? void 0 : i.verifyUrl);
            this.verifyUrl !== n && this.removeIframe(), this.verifyUrl = n;
            try {
                await this.createIframe()
            } catch (a) {
                this.logger.info(`Verify iframe failed to load: ${this.verifyUrl}`), this.logger.info(a)
            }
            if (!this.initialized) {
                this.removeIframe(), this.verifyUrl = cn;
                try {
                    await this.createIframe()
                } catch (a) {
                    this.logger.info(`Verify iframe failed to load: ${this.verifyUrl}`), this.logger.info(a), this.verifyDisabled = !0
                }
            }
        }, this.register = async i => {
            this.initialized ? this.sendPost(i.attestationId) : (this.addToQueue(i.attestationId), await this.init())
        }, this.resolve = async i => {
            if (this.isDevEnv) return "";
            const n = this.getVerifyUrl(i == null ? void 0 : i.verifyUrl);
            let a;
            try {
                a = await this.fetchAttestation(i.attestationId, n)
            } catch (h) {
                this.logger.info(`failed to resolve attestation: ${i.attestationId} from url: ${n}`), this.logger.info(h), a = await this.fetchAttestation(i.attestationId, cn)
            }
            return a
        }, this.fetchAttestation = async (i, n) => {
            this.logger.info(`resolving attestation: ${i} from url: ${n}`);
            const a = this.startAbortTimer(ee.ONE_SECOND * 2),
                h = await fetch(`${n}/attestation/${i}`, {
                    signal: this.abortController.signal
                });
            return clearTimeout(a), h.status === 200 ? await h.json() : void 0
        }, this.addToQueue = i => {
            this.queue.push(i)
        }, this.processQueue = () => {
            this.queue.length !== 0 && (this.queue.forEach(i => this.sendPost(i)), this.queue = [])
        }, this.sendPost = i => {
            var n;
            try {
                if (!this.iframe) return;
                (n = this.iframe.contentWindow) == null || n.postMessage(i, "*"), this.logger.info(`postMessage sent: ${i} ${this.verifyUrl}`)
            } catch (a) {}
        }, this.createIframe = async () => {
            let i;
            const n = a => {
                a.data === "verify_ready" && (this.onInit(), window.removeEventListener("message", n), i())
            };
            await Promise.race([new Promise(a => {
                const h = document.getElementById(ji);
                if (h) return this.iframe = h, this.onInit(), a();
                window.addEventListener("message", n);
                const c = document.createElement("iframe");
                c.id = ji, c.src = `${this.verifyUrl}/${this.projectId}`, c.style.display = "none", document.body.append(c), this.iframe = c, i = a
            }), new Promise((a, h) => setTimeout(() => {
                window.removeEventListener("message", n), h("verify iframe load timeout")
            }, ee.toMiliseconds(ee.FIVE_SECONDS)))])
        }, this.onInit = () => {
            this.initialized = !0, this.processQueue()
        }, this.removeIframe = () => {
            this.iframe && (this.iframe.remove(), this.iframe = void 0, this.initialized = !1)
        }, this.getVerifyUrl = i => {
            let n = i || Ar;
            return m0.includes(n) || (this.logger.info(`verify url: ${n}, not included in trusted list, assigning default: ${Ar}`), n = Ar), n
        }, this.logger = xe.generateChildLogger(r, this.name), this.verifyUrl = Ar, this.abortController = new AbortController, this.isDevEnv = Lr() && {}.IS_VITEST
    }
    get context() {
        return xe.getLoggerContext(this.logger)
    }
    startAbortTimer(e) {
        return this.abortController = new AbortController, setTimeout(() => this.abortController.abort(), ee.toMiliseconds(e))
    }
}
class k0 extends ch {
    constructor(e, r) {
        super(e, r), this.projectId = e, this.logger = r, this.context = v0, this.registerDeviceToken = async i => {
            const {
                clientId: n,
                token: a,
                notificationType: h,
                enableEncrypted: c = !1
            } = i, l = `${w0}/${this.projectId}/clients`;
            await mg(l, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    client_id: n,
                    type: h,
                    token: a,
                    always_raw: c
                })
            })
        }, this.logger = xe.generateChildLogger(r, this.context)
    }
}
var q0 = Object.defineProperty,
    uo = Object.getOwnPropertySymbols,
    V0 = Object.prototype.hasOwnProperty,
    G0 = Object.prototype.propertyIsEnumerable,
    ho = (t, e, r) => e in t ? q0(t, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : t[e] = r,
    lo = (t, e) => {
        for (var r in e || (e = {})) V0.call(e, r) && ho(t, r, e[r]);
        if (uo)
            for (var r of uo(e)) G0.call(e, r) && ho(t, r, e[r]);
        return t
    };
class Ln extends Zu {
    constructor(e) {
        super(e), this.protocol = Ua, this.version = Hp, this.name = Pn, this.events = new Lt.EventEmitter, this.initialized = !1, this.on = (i, n) => this.events.on(i, n), this.once = (i, n) => this.events.once(i, n), this.off = (i, n) => this.events.off(i, n), this.removeListener = (i, n) => this.events.removeListener(i, n), this.projectId = e == null ? void 0 : e.projectId, this.relayUrl = (e == null ? void 0 : e.relayUrl) || Ma, this.customStoragePrefix = e != null && e.customStoragePrefix ? `:${e.customStoragePrefix}` : "";
        const r = typeof(e == null ? void 0 : e.logger) < "u" && typeof(e == null ? void 0 : e.logger) != "string" ? e.logger : xe.pino(xe.getDefaultLoggerOptions({
            level: (e == null ? void 0 : e.logger) || Wp.logger
        }));
        this.logger = xe.generateChildLogger(r, this.name), this.heartbeat = new fr.HeartBeat, this.crypto = new E0(this, this.logger, e == null ? void 0 : e.keychain), this.history = new K0(this, this.logger), this.expirer = new H0(this, this.logger), this.storage = e != null && e.storage ? e.storage : new yu(lo(lo({}, kp), e == null ? void 0 : e.storageOptions)), this.relayer = new U0({
            core: this,
            logger: this.logger,
            relayUrl: this.relayUrl,
            projectId: this.projectId
        }), this.pairing = new z0(this, this.logger), this.verify = new W0(this.projectId || "", this.logger), this.echoClient = new k0(this.projectId || "", this.logger)
    }
    static async init(e) {
        const r = new Ln(e);
        await r.initialize();
        const i = await r.crypto.getClientId();
        return await r.storage.setItem(c0, i), r
    }
    get context() {
        return xe.getLoggerContext(this.logger)
    }
    async start() {
        this.initialized || await this.initialize()
    }
    async initialize() {
        this.logger.trace("Initialized");
        try {
            await this.crypto.init(), await this.history.init(), await this.expirer.init(), await this.relayer.init(), await this.heartbeat.init(), await this.pairing.init(), this.initialized = !0, this.logger.info("Core Initialization Success")
        } catch (e) {
            throw this.logger.warn(`Core Initialization Failure at epoch ${Date.now()}`, e), this.logger.error(e.message), e
        }
    }
}
const ny = Ln,
    Y0 = Symbol(),
    fo = Object.getPrototypeOf,
    un = new WeakMap,
    J0 = t => t && (un.has(t) ? un.get(t) : fo(t) === Object.prototype || fo(t) === Array.prototype),
    X0 = t => J0(t) && t[Y0] || null,
    go = (t, e = !0) => {
        un.set(t, e)
    },
    zi = t => typeof t == "object" && t !== null,
    Kt = new WeakMap,
    Zr = new WeakSet,
    Q0 = (t = Object.is, e = (u, f) => new Proxy(u, f), r = u => zi(u) && !Zr.has(u) && (Array.isArray(u) || !(Symbol.iterator in u)) && !(u instanceof WeakMap) && !(u instanceof WeakSet) && !(u instanceof Error) && !(u instanceof Number) && !(u instanceof Date) && !(u instanceof String) && !(u instanceof RegExp) && !(u instanceof ArrayBuffer), i = u => {
        switch (u.status) {
            case "fulfilled":
                return u.value;
            case "rejected":
                throw u.reason;
            default:
                throw u
        }
    }, n = new WeakMap, a = (u, f, y = i) => {
        const b = n.get(u);
        if ((b == null ? void 0 : b[0]) === f) return b[1];
        const w = Array.isArray(u) ? [] : Object.create(Object.getPrototypeOf(u));
        return go(w, !0), n.set(u, [f, w]), Reflect.ownKeys(u).forEach(E => {
            if (Object.getOwnPropertyDescriptor(w, E)) return;
            const T = Reflect.get(u, E),
                F = {
                    value: T,
                    enumerable: !0,
                    configurable: !0
                };
            if (Zr.has(T)) go(T, !1);
            else if (T instanceof Promise) delete F.value, F.get = () => y(T);
            else if (Kt.has(T)) {
                const [j, D] = Kt.get(T);
                F.value = a(j, D(), y)
            }
            Object.defineProperty(w, E, F)
        }), Object.preventExtensions(w)
    }, h = new WeakMap, c = [1, 1], l = u => {
        if (!zi(u)) throw new Error("object required");
        const f = h.get(u);
        if (f) return f;
        let y = c[0];
        const b = new Set,
            w = (N, L = ++c[0]) => {
                y !== L && (y = L, b.forEach(R => R(N, L)))
            };
        let E = c[1];
        const T = (N = ++c[1]) => (E !== N && !b.size && (E = N, j.forEach(([L]) => {
                const R = L[1](N);
                R > y && (y = R)
            })), y),
            F = N => (L, R) => {
                const W = [...L];
                W[1] = [N, ...W[1]], w(W, R)
            },
            j = new Map,
            D = (N, L) => {
                if (b.size) {
                    const R = L[3](F(N));
                    j.set(N, [L, R])
                } else j.set(N, [L])
            },
            O = N => {
                var L;
                const R = j.get(N);
                R && (j.delete(N), (L = R[1]) == null || L.call(R))
            },
            m = N => (b.add(N), b.size === 1 && j.forEach(([R, W], V) => {
                const S = R[3](F(V));
                j.set(V, [R, S])
            }), () => {
                b.delete(N), b.size === 0 && j.forEach(([R, W], V) => {
                    W && (W(), j.set(V, [R]))
                })
            }),
            _ = Array.isArray(u) ? [] : Object.create(Object.getPrototypeOf(u)),
            s = e(_, {
                deleteProperty(N, L) {
                    const R = Reflect.get(N, L);
                    O(L);
                    const W = Reflect.deleteProperty(N, L);
                    return W && w(["delete", [L], R]), W
                },
                set(N, L, R, W) {
                    const V = Reflect.has(N, L),
                        S = Reflect.get(N, L, W);
                    if (V && (t(S, R) || h.has(R) && t(S, h.get(R)))) return !0;
                    O(L), zi(R) && (R = X0(R) || R);
                    let P = R;
                    if (R instanceof Promise) R.then(q => {
                        R.status = "fulfilled", R.value = q, w(["resolve", [L], q])
                    }).catch(q => {
                        R.status = "rejected", R.reason = q, w(["reject", [L], q])
                    });
                    else {
                        !Kt.has(R) && r(R) && (P = l(R));
                        const q = !Zr.has(P) && Kt.get(P);
                        q && D(L, q)
                    }
                    return Reflect.set(N, L, P, W), w(["set", [L], R, S]), !0
                }
            });
        h.set(u, s);
        const d = [_, T, a, m];
        return Kt.set(s, d), Reflect.ownKeys(u).forEach(N => {
            const L = Object.getOwnPropertyDescriptor(u, N);
            "value" in L && (s[N] = u[N], delete L.value, delete L.writable), Object.defineProperty(_, N, L)
        }), s
    }) => [l, Kt, Zr, t, e, r, i, n, a, h, c],
    [Z0] = Q0();

function kt(t = {}) {
    return Z0(t)
}

function or(t, e, r) {
    const i = Kt.get(t);
    let n;
    const a = [],
        h = i[3];
    let c = !1;
    const u = h(f => {
        if (a.push(f), r) {
            e(a.splice(0));
            return
        }
        n || (n = Promise.resolve().then(() => {
            n = void 0, c && e(a.splice(0))
        }))
    });
    return c = !0, () => {
        c = !1, u()
    }
}

function e1(t, e) {
    const r = Kt.get(t),
        [i, n, a] = r;
    return a(i, n(), e)
}
const Je = kt({
        history: ["ConnectWallet"],
        view: "ConnectWallet",
        data: void 0
    }),
    $a = {
        state: Je,
        subscribe(t) {
            return or(Je, () => t(Je))
        },
        push(t, e) {
            t !== Je.view && (Je.view = t, e && (Je.data = e), Je.history.push(t))
        },
        reset(t) {
            Je.view = t, Je.history = [t]
        },
        replace(t) {
            Je.history.length > 1 && (Je.history[Je.history.length - 1] = t, Je.view = t)
        },
        goBack() {
            if (Je.history.length > 1) {
                Je.history.pop();
                const [t] = Je.history.slice(-1);
                Je.view = t
            }
        },
        setData(t) {
            Je.data = t
        }
    },
    nt = {
        WALLETCONNECT_DEEPLINK_CHOICE: "WALLETCONNECT_DEEPLINK_CHOICE",
        WCM_VERSION: "WCM_VERSION",
        RECOMMENDED_WALLET_AMOUNT: 9,
        isMobile() {
            return typeof window < "u" ? !!(window.matchMedia("(pointer:coarse)").matches || /Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)) : !1
        },
        isAndroid() {
            return nt.isMobile() && navigator.userAgent.toLowerCase().includes("android")
        },
        isIos() {
            const t = navigator.userAgent.toLowerCase();
            return nt.isMobile() && (t.includes("iphone") || t.includes("ipad"))
        },
        isHttpUrl(t) {
            return t.startsWith("http://") || t.startsWith("https://")
        },
        isArray(t) {
            return Array.isArray(t) && t.length > 0
        },
        formatNativeUrl(t, e, r) {
            if (nt.isHttpUrl(t)) return this.formatUniversalUrl(t, e, r);
            let i = t;
            i.includes("://") || (i = t.replaceAll("/", "").replaceAll(":", ""), i = `${i}://`), i.endsWith("/") || (i = `${i}/`), this.setWalletConnectDeepLink(i, r);
            const n = encodeURIComponent(e);
            return `${i}wc?uri=${n}`
        },
        formatUniversalUrl(t, e, r) {
            if (!nt.isHttpUrl(t)) return this.formatNativeUrl(t, e, r);
            let i = t;
            i.endsWith("/") || (i = `${i}/`), this.setWalletConnectDeepLink(i, r);
            const n = encodeURIComponent(e);
            return `${i}wc?uri=${n}`
        },
        async wait(t) {
            return new Promise(e => {
                setTimeout(e, t)
            })
        },
        openHref(t, e) {
            window.open(t, e, "noreferrer noopener")
        },
        setWalletConnectDeepLink(t, e) {
            try {
                localStorage.setItem(nt.WALLETCONNECT_DEEPLINK_CHOICE, JSON.stringify({
                    href: t,
                    name: e
                }))
            } catch (r) {
                console.info("Unable to set WalletConnect deep link")
            }
        },
        setWalletConnectAndroidDeepLink(t) {
            try {
                const [e] = t.split("?");
                localStorage.setItem(nt.WALLETCONNECT_DEEPLINK_CHOICE, JSON.stringify({
                    href: e,
                    name: "Android"
                }))
            } catch (e) {
                console.info("Unable to set WalletConnect android deep link")
            }
        },
        removeWalletConnectDeepLink() {
            try {
                localStorage.removeItem(nt.WALLETCONNECT_DEEPLINK_CHOICE)
            } catch (t) {
                console.info("Unable to remove WalletConnect deep link")
            }
        },
        setModalVersionInStorage() {
            try {
                typeof localStorage < "u" && localStorage.setItem(nt.WCM_VERSION, "2.6.2")
            } catch (t) {
                console.info("Unable to set Web3Modal version in storage")
            }
        },
        getWalletRouterData() {
            var t;
            const e = (t = $a.state.data) == null ? void 0 : t.Wallet;
            if (!e) throw new Error('Missing "Wallet" view data');
            return e
        }
    },
    t1 = typeof location < "u" && (location.hostname.includes("localhost") || location.protocol.includes("https")),
    it = kt({
        enabled: t1,
        userSessionId: "",
        events: [],
        connectedWalletId: void 0
    }),
    r1 = {
        state: it,
        subscribe(t) {
            return or(it.events, () => t(e1(it.events[it.events.length - 1])))
        },
        initialize() {
            it.enabled && typeof(crypto == null ? void 0 : crypto.randomUUID) < "u" && (it.userSessionId = crypto.randomUUID())
        },
        setConnectedWalletId(t) {
            it.connectedWalletId = t
        },
        click(t) {
            if (it.enabled) {
                const e = {
                    type: "CLICK",
                    name: t.name,
                    userSessionId: it.userSessionId,
                    timestamp: Date.now(),
                    data: t
                };
                it.events.push(e)
            }
        },
        track(t) {
            if (it.enabled) {
                const e = {
                    type: "TRACK",
                    name: t.name,
                    userSessionId: it.userSessionId,
                    timestamp: Date.now(),
                    data: t
                };
                it.events.push(e)
            }
        },
        view(t) {
            if (it.enabled) {
                const e = {
                    type: "VIEW",
                    name: t.name,
                    userSessionId: it.userSessionId,
                    timestamp: Date.now(),
                    data: t
                };
                it.events.push(e)
            }
        }
    },
    Ot = kt({
        chains: void 0,
        walletConnectUri: void 0,
        isAuth: !1,
        isCustomDesktop: !1,
        isCustomMobile: !1,
        isDataLoaded: !1,
        isUiLoaded: !1
    }),
    Dt = {
        state: Ot,
        subscribe(t) {
            return or(Ot, () => t(Ot))
        },
        setChains(t) {
            Ot.chains = t
        },
        setWalletConnectUri(t) {
            Ot.walletConnectUri = t
        },
        setIsCustomDesktop(t) {
            Ot.isCustomDesktop = t
        },
        setIsCustomMobile(t) {
            Ot.isCustomMobile = t
        },
        setIsDataLoaded(t) {
            Ot.isDataLoaded = t
        },
        setIsUiLoaded(t) {
            Ot.isUiLoaded = t
        },
        setIsAuth(t) {
            Ot.isAuth = t
        }
    },
    ei = kt({
        projectId: "",
        mobileWallets: void 0,
        desktopWallets: void 0,
        walletImages: void 0,
        chains: void 0,
        enableAuthMode: !1,
        enableExplorer: !0,
        explorerExcludedWalletIds: void 0,
        explorerRecommendedWalletIds: void 0,
        termsOfServiceUrl: void 0,
        privacyPolicyUrl: void 0
    }),
    lr = {
        state: ei,
        subscribe(t) {
            return or(ei, () => t(ei))
        },
        setConfig(t) {
            var e, r;
            r1.initialize(), Dt.setChains(t.chains), Dt.setIsAuth(!!t.enableAuthMode), Dt.setIsCustomMobile(!!((e = t.mobileWallets) != null && e.length)), Dt.setIsCustomDesktop(!!((r = t.desktopWallets) != null && r.length)), nt.setModalVersionInStorage(), Object.assign(ei, t)
        }
    };
var i1 = Object.defineProperty,
    po = Object.getOwnPropertySymbols,
    n1 = Object.prototype.hasOwnProperty,
    s1 = Object.prototype.propertyIsEnumerable,
    yo = (t, e, r) => e in t ? i1(t, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : t[e] = r,
    o1 = (t, e) => {
        for (var r in e || (e = {})) n1.call(e, r) && yo(t, r, e[r]);
        if (po)
            for (var r of po(e)) s1.call(e, r) && yo(t, r, e[r]);
        return t
    };
const hn = "https://explorer-api.walletconnect.com",
    ln = "wcm",
    fn = "js-2.6.2";
async function ti(t, e) {
    const r = o1({
            sdkType: ln,
            sdkVersion: fn
        }, e),
        i = new URL(t, hn);
    return i.searchParams.append("projectId", lr.state.projectId), Object.entries(r).forEach(([n, a]) => {
        a && i.searchParams.append(n, String(a))
    }), (await fetch(i)).json()
}
const er = {
    async getDesktopListings(t) {
        return ti("/w3m/v1/getDesktopListings", t)
    },
    async getMobileListings(t) {
        return ti("/w3m/v1/getMobileListings", t)
    },
    async getInjectedListings(t) {
        return ti("/w3m/v1/getInjectedListings", t)
    },
    async getAllListings(t) {
        return ti("/w3m/v1/getAllListings", t)
    },
    getWalletImageUrl(t) {
        return `${hn}/w3m/v1/getWalletImage/${t}?projectId=${lr.state.projectId}&sdkType=${ln}&sdkVersion=${fn}`
    },
    getAssetImageUrl(t) {
        return `${hn}/w3m/v1/getAssetImage/${t}?projectId=${lr.state.projectId}&sdkType=${ln}&sdkVersion=${fn}`
    }
};
var a1 = Object.defineProperty,
    bo = Object.getOwnPropertySymbols,
    c1 = Object.prototype.hasOwnProperty,
    u1 = Object.prototype.propertyIsEnumerable,
    mo = (t, e, r) => e in t ? a1(t, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : t[e] = r,
    h1 = (t, e) => {
        for (var r in e || (e = {})) c1.call(e, r) && mo(t, r, e[r]);
        if (bo)
            for (var r of bo(e)) u1.call(e, r) && mo(t, r, e[r]);
        return t
    };
const vo = nt.isMobile(),
    At = kt({
        wallets: {
            listings: [],
            total: 0,
            page: 1
        },
        search: {
            listings: [],
            total: 0,
            page: 1
        },
        recomendedWallets: []
    }),
    sy = {
        state: At,
        async getRecomendedWallets() {
            const {
                explorerRecommendedWalletIds: t,
                explorerExcludedWalletIds: e
            } = lr.state;
            if (t === "NONE" || e === "ALL" && !t) return At.recomendedWallets;
            if (nt.isArray(t)) {
                const r = {
                        recommendedIds: t.join(",")
                    },
                    {
                        listings: i
                    } = await er.getAllListings(r),
                    n = Object.values(i);
                n.sort((a, h) => {
                    const c = t.indexOf(a.id),
                        l = t.indexOf(h.id);
                    return c - l
                }), At.recomendedWallets = n
            } else {
                const {
                    chains: r,
                    isAuth: i
                } = Dt.state, n = r == null ? void 0 : r.join(","), a = nt.isArray(e), h = {
                    page: 1,
                    sdks: i ? "auth_v1" : void 0,
                    entries: nt.RECOMMENDED_WALLET_AMOUNT,
                    chains: n,
                    version: 2,
                    excludedIds: a ? e.join(",") : void 0
                }, {
                    listings: c
                } = vo ? await er.getMobileListings(h) : await er.getDesktopListings(h);
                At.recomendedWallets = Object.values(c)
            }
            return At.recomendedWallets
        },
        async getWallets(t) {
            const e = h1({}, t),
                {
                    explorerRecommendedWalletIds: r,
                    explorerExcludedWalletIds: i
                } = lr.state,
                {
                    recomendedWallets: n
                } = At;
            if (i === "ALL") return At.wallets;
            n.length ? e.excludedIds = n.map(y => y.id).join(",") : nt.isArray(r) && (e.excludedIds = r.join(",")), nt.isArray(i) && (e.excludedIds = [e.excludedIds, i].filter(Boolean).join(",")), Dt.state.isAuth && (e.sdks = "auth_v1");
            const {
                page: a,
                search: h
            } = t, {
                listings: c,
                total: l
            } = vo ? await er.getMobileListings(e) : await er.getDesktopListings(e), u = Object.values(c), f = h ? "search" : "wallets";
            return At[f] = {
                listings: [...At[f].listings, ...u],
                total: l,
                page: a != null ? a : 1
            }, {
                listings: u,
                total: l
            }
        },
        getWalletImageUrl(t) {
            return er.getWalletImageUrl(t)
        },
        getAssetImageUrl(t) {
            return er.getAssetImageUrl(t)
        },
        resetSearch() {
            At.search = {
                listings: [],
                total: 0,
                page: 1
            }
        }
    },
    ur = kt({
        open: !1
    }),
    Ki = {
        state: ur,
        subscribe(t) {
            return or(ur, () => t(ur))
        },
        async open(t) {
            return new Promise(e => {
                const {
                    isUiLoaded: r,
                    isDataLoaded: i
                } = Dt.state;
                if (nt.removeWalletConnectDeepLink(), Dt.setWalletConnectUri(t == null ? void 0 : t.uri), Dt.setChains(t == null ? void 0 : t.chains), $a.reset("ConnectWallet"), r && i) ur.open = !0, e();
                else {
                    const n = setInterval(() => {
                        const a = Dt.state;
                        a.isUiLoaded && a.isDataLoaded && (clearInterval(n), ur.open = !0, e())
                    }, 200)
                }
            })
        },
        close() {
            ur.open = !1
        }
    };
var l1 = Object.defineProperty,
    wo = Object.getOwnPropertySymbols,
    f1 = Object.prototype.hasOwnProperty,
    d1 = Object.prototype.propertyIsEnumerable,
    _o = (t, e, r) => e in t ? l1(t, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : t[e] = r,
    g1 = (t, e) => {
        for (var r in e || (e = {})) f1.call(e, r) && _o(t, r, e[r]);
        if (wo)
            for (var r of wo(e)) d1.call(e, r) && _o(t, r, e[r]);
        return t
    };

function p1() {
    return typeof matchMedia < "u" && matchMedia("(prefers-color-scheme: dark)").matches
}
const Or = kt({
        themeMode: p1() ? "dark" : "light"
    }),
    Eo = {
        state: Or,
        subscribe(t) {
            return or(Or, () => t(Or))
        },
        setThemeConfig(t) {
            const {
                themeMode: e,
                themeVariables: r
            } = t;
            e && (Or.themeMode = e), r && (Or.themeVariables = g1({}, r))
        }
    },
    tr = kt({
        open: !1,
        message: "",
        variant: "success"
    }),
    oy = {
        state: tr,
        subscribe(t) {
            return or(tr, () => t(tr))
        },
        openToast(t, e) {
            tr.open = !0, tr.message = t, tr.variant = e
        },
        closeToast() {
            tr.open = !1
        }
    };
class ay {
    constructor(e) {
        this.openModal = Ki.open, this.closeModal = Ki.close, this.subscribeModal = Ki.subscribe, this.setTheme = Eo.setThemeConfig, Eo.setThemeConfig(e), lr.setConfig(e), this.initUi()
    }
    async initUi() {
        if (typeof window < "u") {
            await Pc(() =>
                import ("./index-694d620d.js"), ["index-694d620d.js", "react_share-ba7e619d.js", "___vite-browser-external_commonjs-proxy-558ed773.js", "main-03098ed6.js"]);
            const e = document.createElement("wcm-modal");
            document.body.insertAdjacentElement("beforeend", e), Dt.setIsUiLoaded(!0)
        }
    }
}
export {
    G1 as $, $1 as A, nn as B, Fs as C, jr as D, ty as E, Pt as F, Ui as G, W1 as H, ga as I, K1 as J, Kf as K, mg as L, B1 as M, ce as N, H1 as O, Z1 as P, M1 as Q, gt as R, Rd as S, z1 as T, Et as U, J1 as V, q1 as W, V1 as X, $c as Y, X1 as Z, pr as _, _i as a, Y1 as a0, Q1 as a1, Ar as a2, wt as a3, cd as a4, Qr as a5, k1 as a6, va as a7, U1 as a8, Eo as a9, Ki as aa, $a as ab, sy as ac, nt as ad, oy as ae, r1 as af, Dt as ag, lr as ah, Da as b, xe as c, Tn as d, Lt as e, _a as f, ee as g, Od as h, Sa as i, Cn as j, ny as k, wa as l, ay as m, L1 as n, sd as o, si as p, B0 as q, dr as r, wi as s, ey as t, e0 as u, _t as v, F1 as w, An as x, Ri as y, j1 as z
};