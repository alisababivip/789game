var _e = Object.defineProperty,
    Re = Object.defineProperties;
var He = Object.getOwnPropertyDescriptors;
var we = Object.getOwnPropertySymbols;
var qe = Object.prototype.hasOwnProperty,
    Ke = Object.prototype.propertyIsEnumerable;
var me = (e, t, n) => t in e ? _e(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : e[t] = n,
    be = (e, t) => {
        for (var n in t || (t = {})) qe.call(t, n) && me(e, n, t[n]);
        if (we)
            for (var n of we(t)) Ke.call(t, n) && me(e, n, t[n]);
        return e
    },
    pe = (e, t) => Re(e, He(t));
const h = {
    context: void 0,
    registry: void 0
};

function K(e) {
    h.context = e
}
const ke = (e, t) => e === t,
    Q = Symbol("solid-proxy"),
    Te = Symbol("solid-track"),
    z = {
        equals: ke
    };
let Ne = Ie;
const $ = 1,
    X = 2,
    $e = {
        owned: null,
        cleanups: null,
        context: null,
        owner: null
    },
    ie = {};
var g = null;
let c = null,
    Xe = null,
    w = null,
    C = null,
    A = null,
    te = 0;

function D(e, t) {
    const n = w,
        s = g,
        r = e.length === 0,
        i = t === void 0 ? s : t,
        o = r ? $e : {
            owned: null,
            cleanups: null,
            context: i ? i.context : null,
            owner: i
        },
        l = r ? e : () => e(() => P(() => F(o)));
    g = o, w = null;
    try {
        return N(l, !0)
    } finally {
        w = n, g = s
    }
}

function M(e, t) {
    t = t ? Object.assign({}, z, t) : z;
    const n = {
            value: e,
            observers: null,
            observerSlots: null,
            comparator: t.equals || void 0
        },
        s = r => (typeof r == "function" && (c && c.running && c.sources.has(n) ? r = r(n.tValue) : r = r(n.value)), Ve(n, r));
    return [Me.bind(n), s]
}

function Se(e, t, n) {
    const s = W(e, t, !0, $);
    U(s)
}

function B(e, t, n) {
    const s = W(e, t, !1, $);
    U(s)
}

function Le(e, t, n) {
    Ne = tt;
    const s = W(e, t, !1, $),
        r = G && he(G);
    r && (s.suspense = r), (!n || !n.render) && (s.user = !0), A ? A.push(s) : U(s)
}

function O(e, t, n) {
    n = n ? Object.assign({}, z, n) : z;
    const s = W(e, t, !0, 0);
    return s.observers = null, s.observerSlots = null, s.comparator = n.equals || void 0, U(s), Me.bind(s)
}

function We(e) {
    return e && typeof e == "object" && "then" in e
}

function vt(e, t, n) {
    let s, r, i;
    arguments.length === 2 && typeof t == "object" || arguments.length === 1 ? (s = !0, r = e, i = t || {}) : (s = e, r = t, i = n || {});
    let o = null,
        l = ie,
        f = null,
        a = !1,
        u = !1,
        d = "initialValue" in i,
        y = typeof s == "function" && O(s);
    const m = new Set,
        [x, k] = (i.storage || M)(i.initialValue),
        [L, j] = M(void 0),
        [E, T] = M(void 0, {
            equals: !1
        }),
        [v, V] = M(d ? "ready" : "unresolved");
    if (h.context) {
        f = `${h.context.id}${h.context.count++}`;
        let b;
        i.ssrLoadFrom === "initial" ? l = i.initialValue : h.load && (b = h.load(f)) && (l = b)
    }

    function I(b, p, S, _) {
        return o === b && (o = null, _ !== void 0 && (d = !0), (b === l || p === l) && i.onHydrated && queueMicrotask(() => i.onHydrated(_, {
            value: p
        })), l = ie, c && b && a ? (c.promises.delete(b), a = !1, N(() => {
            c.running = !0, ye(p, S)
        }, !1)) : ye(p, S)), p
    }

    function ye(b, p) {
        N(() => {
            p === void 0 && k(() => b), V(p !== void 0 ? "errored" : d ? "ready" : "unresolved"), j(p);
            for (const S of m.keys()) S.decrement();
            m.clear()
        }, !1)
    }

    function ne() {
        const b = G && he(G),
            p = x(),
            S = L();
        if (S !== void 0 && !o) throw S;
        return w && !w.user && b && Se(() => {
            E(), o && (b.resolved && c && a ? c.promises.add(o) : m.has(b) || (b.increment(), m.add(b)))
        }), p
    }

    function se(b = !0) {
        if (b !== !1 && u) return;
        u = !1;
        const p = y ? y() : s;
        if (a = c && c.running, p == null || p === !1) {
            I(o, P(x));
            return
        }
        c && o && c.promises.delete(o);
        const S = l !== ie ? l : P(() => r(p, {
            value: x(),
            refetching: b
        }));
        return We(S) ? (o = S, "value" in S ? (S.status === "success" ? I(o, S.value, void 0, p) : I(o, void 0, void 0, p), S) : (u = !0, queueMicrotask(() => u = !1), N(() => {
            V(d ? "refreshing" : "pending"), T()
        }, !1), S.then(_ => I(S, _, void 0, p), _ => I(S, void 0, Be(_), p)))) : (I(o, S, void 0, p), S)
    }
    return Object.defineProperties(ne, {
        state: {
            get: () => v()
        },
        error: {
            get: () => L()
        },
        loading: {
            get() {
                const b = v();
                return b === "pending" || b === "refreshing"
            }
        },
        latest: {
            get() {
                if (!d) return ne();
                const b = L();
                if (b && !o) throw b;
                return x()
            }
        }
    }), y ? Se(() => se(!1)) : se(!1), [ne, {
        refetch: se,
        mutate: k
    }]
}

function Mt(e, t = ke, n) {
    const s = new Map,
        r = W(i => {
            const o = e();
            for (const [l, f] of s.entries())
                if (t(l, o) !== t(l, i))
                    for (const a of f.values()) a.state = $, a.pure ? C.push(a) : A.push(a);
            return o
        }, void 0, !0, $);
    return U(r), i => {
        const o = w;
        if (o) {
            let l;
            (l = s.get(i)) ? l.add(o): s.set(i, l = new Set([o])), H(() => {
                l.delete(o), !l.size && s.delete(i)
            })
        }
        return t(i, c && c.running && c.sources.has(r) ? r.tValue : r.value)
    }
}

function Vt(e) {
    return N(e, !1)
}

function P(e) {
    if (w === null) return e();
    const t = w;
    w = null;
    try {
        return e()
    } finally {
        w = t
    }
}

function It(e) {
    Le(() => P(e))
}

function H(e) {
    return g === null || (g.cleanups === null ? g.cleanups = [e] : g.cleanups.push(e)), e
}

function Dt() {
    return w
}

function le() {
    return g
}

function Ye(e, t) {
    const n = g,
        s = w;
    g = e, w = null;
    try {
        return N(t, !0)
    } catch (r) {
        ge(r)
    } finally {
        g = n, w = s
    }
}

function Qe(e) {
    if (c && c.running) return e(), c.done;
    const t = w,
        n = g;
    return Promise.resolve().then(() => {
        w = t, g = n;
        let s;
        return G && (s = c || (c = {
            sources: new Set,
            effects: [],
            promises: new Set,
            disposed: new Set,
            queue: new Set,
            running: !0
        }), s.done || (s.done = new Promise(r => s.resolve = r)), s.running = !0), N(e, !1), w = g = null, s ? s.done : void 0
    })
}
const [ze, xe] = M(!1);

function Ft() {
    return [ze, Qe]
}

function Je(e) {
    A.push.apply(A, e), e.length = 0
}

function je(e, t) {
    const n = Symbol("context");
    return {
        id: n,
        Provider: nt(n),
        defaultValue: e
    }
}

function he(e) {
    return g && g.context && g.context[e.id] !== void 0 ? g.context[e.id] : e.defaultValue
}

function ve(e) {
    const t = O(e),
        n = O(() => oe(t()));
    return n.toArray = () => {
        const s = n();
        return Array.isArray(s) ? s : s != null ? [s] : []
    }, n
}
let G;

function Ze() {
    return G || (G = je())
}

function Me() {
    const e = c && c.running;
    if (this.sources && (e ? this.tState : this.state))
        if ((e ? this.tState : this.state) === $) U(this);
        else {
            const t = C;
            C = null, N(() => Z(this), !1), C = t
        }
    if (w) {
        const t = this.observers ? this.observers.length : 0;
        w.sources ? (w.sources.push(this), w.sourceSlots.push(t)) : (w.sources = [this], w.sourceSlots = [t]), this.observers ? (this.observers.push(w), this.observerSlots.push(w.sources.length - 1)) : (this.observers = [w], this.observerSlots = [w.sources.length - 1])
    }
    return e && c.sources.has(this) ? this.tValue : this.value
}

function Ve(e, t, n) {
    let s = c && c.running && c.sources.has(e) ? e.tValue : e.value;
    if (!e.comparator || !e.comparator(s, t)) {
        if (c) {
            const r = c.running;
            (r || !n && c.sources.has(e)) && (c.sources.add(e), e.tValue = t), r || (e.value = t)
        } else e.value = t;
        e.observers && e.observers.length && N(() => {
            for (let r = 0; r < e.observers.length; r += 1) {
                const i = e.observers[r],
                    o = c && c.running;
                o && c.disposed.has(i) || ((o ? !i.tState : !i.state) && (i.pure ? C.push(i) : A.push(i), i.observers && De(i)), o ? i.tState = $ : i.state = $)
            }
            if (C.length > 1e6) throw C = [], new Error
        }, !1)
    }
    return t
}

function U(e) {
    if (!e.fn) return;
    F(e);
    const t = te;
    Ae(e, c && c.running && c.sources.has(e) ? e.tValue : e.value, t), c && !c.running && c.sources.has(e) && queueMicrotask(() => {
        N(() => {
            c && (c.running = !0), w = g = e, Ae(e, e.tValue, t), w = g = null
        }, !1)
    })
}

function Ae(e, t, n) {
    let s;
    const r = g,
        i = w;
    w = g = e;
    try {
        s = e.fn(t)
    } catch (o) {
        return e.pure && (c && c.running ? (e.tState = $, e.tOwned && e.tOwned.forEach(F), e.tOwned = void 0) : (e.state = $, e.owned && e.owned.forEach(F), e.owned = null)), e.updatedAt = n + 1, ge(o)
    } finally {
        w = i, g = r
    }(!e.updatedAt || e.updatedAt <= n) && (e.updatedAt != null && "observers" in e ? Ve(e, s, !0) : c && c.running && e.pure ? (c.sources.add(e), e.tValue = s) : e.value = s, e.updatedAt = n)
}

function W(e, t, n, s = $, r) {
    const i = {
        fn: e,
        state: s,
        updatedAt: null,
        owned: null,
        sources: null,
        sourceSlots: null,
        cleanups: null,
        value: t,
        owner: g,
        context: g ? g.context : null,
        pure: n
    };
    return c && c.running && (i.state = 0, i.tState = s), g === null || g !== $e && (c && c.running && g.pure ? g.tOwned ? g.tOwned.push(i) : g.tOwned = [i] : g.owned ? g.owned.push(i) : g.owned = [i]), i
}

function J(e) {
    const t = c && c.running;
    if ((t ? e.tState : e.state) === 0) return;
    if ((t ? e.tState : e.state) === X) return Z(e);
    if (e.suspense && P(e.suspense.inFallback)) return e.suspense.effects.push(e);
    const n = [e];
    for (;
        (e = e.owner) && (!e.updatedAt || e.updatedAt < te);) {
        if (t && c.disposed.has(e)) return;
        (t ? e.tState : e.state) && n.push(e)
    }
    for (let s = n.length - 1; s >= 0; s--) {
        if (e = n[s], t) {
            let r = e,
                i = n[s + 1];
            for (;
                (r = r.owner) && r !== i;)
                if (c.disposed.has(r)) return
        }
        if ((t ? e.tState : e.state) === $) U(e);
        else if ((t ? e.tState : e.state) === X) {
            const r = C;
            C = null, N(() => Z(e, n[0]), !1), C = r
        }
    }
}

function N(e, t) {
    if (C) return e();
    let n = !1;
    t || (C = []), A ? n = !0 : A = [], te++;
    try {
        const s = e();
        return et(n), s
    } catch (s) {
        n || (A = null), C = null, ge(s)
    }
}

function et(e) {
    if (C && (Ie(C), C = null), e) return;
    let t;
    if (c) {
        if (!c.promises.size && !c.queue.size) {
            const s = c.sources,
                r = c.disposed;
            A.push.apply(A, c.effects), t = c.resolve;
            for (const i of A) "tState" in i && (i.state = i.tState), delete i.tState;
            c = null, N(() => {
                for (const i of r) F(i);
                for (const i of s) {
                    if (i.value = i.tValue, i.owned)
                        for (let o = 0, l = i.owned.length; o < l; o++) F(i.owned[o]);
                    i.tOwned && (i.owned = i.tOwned), delete i.tValue, delete i.tOwned, i.tState = 0
                }
                xe(!1)
            }, !1)
        } else if (c.running) {
            c.running = !1, c.effects.push.apply(c.effects, A), A = null, xe(!0);
            return
        }
    }
    const n = A;
    A = null, n.length && N(() => Ne(n), !1), t && t()
}

function Ie(e) {
    for (let t = 0; t < e.length; t++) J(e[t])
}

function tt(e) {
    let t, n = 0;
    for (t = 0; t < e.length; t++) {
        const s = e[t];
        s.user ? e[n++] = s : J(s)
    }
    if (h.context) {
        if (h.count) {
            h.effects || (h.effects = []), h.effects.push(...e.slice(0, n));
            return
        } else h.effects && (e = [...h.effects, ...e], n += h.effects.length, delete h.effects);
        K()
    }
    for (t = 0; t < n; t++) J(e[t])
}

function Z(e, t) {
    const n = c && c.running;
    n ? e.tState = 0 : e.state = 0;
    for (let s = 0; s < e.sources.length; s += 1) {
        const r = e.sources[s];
        if (r.sources) {
            const i = n ? r.tState : r.state;
            i === $ ? r !== t && (!r.updatedAt || r.updatedAt < te) && J(r) : i === X && Z(r, t)
        }
    }
}

function De(e) {
    const t = c && c.running;
    for (let n = 0; n < e.observers.length; n += 1) {
        const s = e.observers[n];
        (t ? !s.tState : !s.state) && (t ? s.tState = X : s.state = X, s.pure ? C.push(s) : A.push(s), s.observers && De(s))
    }
}

function F(e) {
    let t;
    if (e.sources)
        for (; e.sources.length;) {
            const n = e.sources.pop(),
                s = e.sourceSlots.pop(),
                r = n.observers;
            if (r && r.length) {
                const i = r.pop(),
                    o = n.observerSlots.pop();
                s < r.length && (i.sourceSlots[o] = s, r[s] = i, n.observerSlots[s] = o)
            }
        }
    if (c && c.running && e.pure) {
        if (e.tOwned) {
            for (t = e.tOwned.length - 1; t >= 0; t--) F(e.tOwned[t]);
            delete e.tOwned
        }
        Fe(e, !0)
    } else if (e.owned) {
        for (t = e.owned.length - 1; t >= 0; t--) F(e.owned[t]);
        e.owned = null
    }
    if (e.cleanups) {
        for (t = e.cleanups.length - 1; t >= 0; t--) e.cleanups[t]();
        e.cleanups = null
    }
    c && c.running ? e.tState = 0 : e.state = 0
}

function Fe(e, t) {
    if (t || (e.tState = 0, c.disposed.add(e)), e.owned)
        for (let n = 0; n < e.owned.length; n++) Fe(e.owned[n])
}

function Be(e) {
    return e instanceof Error ? e : new Error(typeof e == "string" ? e : "Unknown error", {
        cause: e
    })
}

function ge(e, t = g) {
    throw Be(e)
}

function oe(e) {
    if (typeof e == "function" && !e.length) return oe(e());
    if (Array.isArray(e)) {
        const t = [];
        for (let n = 0; n < e.length; n++) {
            const s = oe(e[n]);
            Array.isArray(s) ? t.push.apply(t, s) : t.push(s)
        }
        return t
    }
    return e
}

function nt(e, t) {
    return function(s) {
        let r;
        return B(() => r = P(() => (g.context = pe(be({}, g.context), {
            [e]: s.value
        }), ve(() => s.children))), void 0), r
    }
}
const fe = Symbol("fallback");

function ee(e) {
    for (let t = 0; t < e.length; t++) e[t]()
}

function st(e, t, n = {}) {
    let s = [],
        r = [],
        i = [],
        o = 0,
        l = t.length > 1 ? [] : null;
    return H(() => ee(i)), () => {
        let f = e() || [],
            a, u;
        return f[Te], P(() => {
            let y = f.length,
                m, x, k, L, j, E, T, v, V;
            if (y === 0) o !== 0 && (ee(i), i = [], s = [], r = [], o = 0, l && (l = [])), n.fallback && (s = [fe], r[0] = D(I => (i[0] = I, n.fallback())), o = 1);
            else if (o === 0) {
                for (r = new Array(y), u = 0; u < y; u++) s[u] = f[u], r[u] = D(d);
                o = y
            } else {
                for (k = new Array(y), L = new Array(y), l && (j = new Array(y)), E = 0, T = Math.min(o, y); E < T && s[E] === f[E]; E++);
                for (T = o - 1, v = y - 1; T >= E && v >= E && s[T] === f[v]; T--, v--) k[v] = r[T], L[v] = i[T], l && (j[v] = l[T]);
                for (m = new Map, x = new Array(v + 1), u = v; u >= E; u--) V = f[u], a = m.get(V), x[u] = a === void 0 ? -1 : a, m.set(V, u);
                for (a = E; a <= T; a++) V = s[a], u = m.get(V), u !== void 0 && u !== -1 ? (k[u] = r[a], L[u] = i[a], l && (j[u] = l[a]), u = x[u], m.set(V, u)) : i[a]();
                for (u = E; u < y; u++) u in k ? (r[u] = k[u], i[u] = L[u], l && (l[u] = j[u], l[u](u))) : r[u] = D(d);
                r = r.slice(0, o = y), s = f.slice(0)
            }
            return r
        });

        function d(y) {
            if (i[u] = y, l) {
                const [m, x] = M(u);
                return l[u] = x, t(f[u], m)
            }
            return t(f[u])
        }
    }
}

function it(e, t, n = {}) {
    let s = [],
        r = [],
        i = [],
        o = [],
        l = 0,
        f;
    return H(() => ee(i)), () => {
        const a = e() || [];
        return a[Te], P(() => {
            if (a.length === 0) return l !== 0 && (ee(i), i = [], s = [], r = [], l = 0, o = []), n.fallback && (s = [fe], r[0] = D(d => (i[0] = d, n.fallback())), l = 1), r;
            for (s[0] === fe && (i[0](), i = [], s = [], r = [], l = 0), f = 0; f < a.length; f++) f < s.length && s[f] !== a[f] ? o[f](() => a[f]) : f >= s.length && (r[f] = D(u));
            for (; f < s.length; f++) i[f]();
            return l = o.length = i.length = a.length, s = a.slice(0), r = r.slice(0, l)
        });

        function u(d) {
            i[f] = d;
            const [y, m] = M(a[f]);
            return o[f] = m, t(y, f)
        }
    }
}

function rt(e, t) {
    return P(() => e(t || {}))
}

function Y() {
    return !0
}
const ue = {
    get(e, t, n) {
        return t === Q ? n : e.get(t)
    },
    has(e, t) {
        return t === Q ? !0 : e.has(t)
    },
    set: Y,
    deleteProperty: Y,
    getOwnPropertyDescriptor(e, t) {
        return {
            configurable: !0,
            enumerable: !0,
            get() {
                return e.get(t)
            },
            set: Y,
            deleteProperty: Y
        }
    },
    ownKeys(e) {
        return e.keys()
    }
};

function re(e) {
    return (e = typeof e == "function" ? e() : e) ? e : {}
}

function lt() {
    for (let e = 0, t = this.length; e < t; ++e) {
        const n = this[e]();
        if (n !== void 0) return n
    }
}

function Bt(...e) {
    let t = !1;
    for (let o = 0; o < e.length; o++) {
        const l = e[o];
        t = t || !!l && Q in l, e[o] = typeof l == "function" ? (t = !0, O(l)) : l
    }
    if (t) return new Proxy({
        get(o) {
            for (let l = e.length - 1; l >= 0; l--) {
                const f = re(e[l])[o];
                if (f !== void 0) return f
            }
        },
        has(o) {
            for (let l = e.length - 1; l >= 0; l--)
                if (o in re(e[l])) return !0;
            return !1
        },
        keys() {
            const o = [];
            for (let l = 0; l < e.length; l++) o.push(...Object.keys(re(e[l])));
            return [...new Set(o)]
        }
    }, ue);
    const n = {},
        s = Object.create(null);
    for (let o = e.length - 1; o >= 0; o--) {
        const l = e[o];
        if (!l) continue;
        const f = Object.getOwnPropertyNames(l);
        for (let a = f.length - 1; a >= 0; a--) {
            const u = f[a];
            if (u === "__proto__" || u === "constructor") continue;
            const d = Object.getOwnPropertyDescriptor(l, u);
            if (!s[u]) s[u] = d.get ? {
                enumerable: !0,
                configurable: !0,
                get: lt.bind(n[u] = [d.get.bind(l)])
            } : d.value !== void 0 ? d : void 0;
            else {
                const y = n[u];
                y && (d.get ? y.push(d.get.bind(l)) : d.value !== void 0 && y.push(() => d.value))
            }
        }
    }
    const r = {},
        i = Object.keys(s);
    for (let o = i.length - 1; o >= 0; o--) {
        const l = i[o],
            f = s[l];
        f && f.get ? Object.defineProperty(r, l, f) : r[l] = f ? f.value : void 0
    }
    return r
}

function ot(e, ...t) {
    if (Q in e) {
        const r = new Set(t.length > 1 ? t.flat() : t[0]),
            i = t.map(o => new Proxy({
                get(l) {
                    return o.includes(l) ? e[l] : void 0
                },
                has(l) {
                    return o.includes(l) && l in e
                },
                keys() {
                    return o.filter(l => l in e)
                }
            }, ue));
        return i.push(new Proxy({
            get(o) {
                return r.has(o) ? void 0 : e[o]
            },
            has(o) {
                return r.has(o) ? !1 : o in e
            },
            keys() {
                return Object.keys(e).filter(o => !r.has(o))
            }
        }, ue)), i
    }
    const n = {},
        s = t.map(() => ({}));
    for (const r of Object.getOwnPropertyNames(e)) {
        const i = Object.getOwnPropertyDescriptor(e, r),
            o = !i.get && !i.set && i.enumerable && i.writable && i.configurable;
        let l = !1,
            f = 0;
        for (const a of t) a.includes(r) && (l = !0, o ? s[f][r] = i.value : Object.defineProperty(s[f], r, i)), ++f;
        l || (o ? n[r] = i.value : Object.defineProperty(n, r, i))
    }
    return [...s, n]
}
const Ge = e => `Stale read from <${e}>.`;

function Gt(e) {
    const t = "fallback" in e && {
        fallback: () => e.fallback
    };
    return O(st(() => e.each, e.children, t || void 0))
}

function Ut(e) {
    const t = "fallback" in e && {
        fallback: () => e.fallback
    };
    return O(it(() => e.each, e.children, t || void 0))
}

function _t(e) {
    const t = e.keyed,
        n = O(() => e.when, void 0, {
            equals: (s, r) => t ? s === r : !s == !r
        });
    return O(() => {
        const s = n();
        if (s) {
            const r = e.children;
            return typeof r == "function" && r.length > 0 ? P(() => r(t ? s : () => {
                if (!P(n)) throw Ge("Show");
                return e.when
            })) : r
        }
        return e.fallback
    }, void 0, void 0)
}

function Rt(e) {
    let t = !1;
    const n = (i, o) => (t ? i[1] === o[1] : !i[1] == !o[1]) && i[2] === o[2],
        s = ve(() => e.children),
        r = O(() => {
            let i = s();
            Array.isArray(i) || (i = [i]);
            for (let o = 0; o < i.length; o++) {
                const l = i[o].when;
                if (l) return t = !!i[o].keyed, [o, l, i[o]]
            }
            return [-1]
        }, void 0, {
            equals: n
        });
    return O(() => {
        const [i, o, l] = r();
        if (i < 0) return e.fallback;
        const f = l.children;
        return typeof f == "function" && f.length > 0 ? P(() => f(t ? o : () => {
            if (P(r)[0] !== i) throw Ge("Match");
            return l.when
        })) : f
    }, void 0, void 0)
}

function Ht(e) {
    return e
}
const ft = je();

function qt(e) {
    let t = 0,
        n, s, r, i, o;
    const [l, f] = M(!1), a = Ze(), u = {
        increment: () => {
            ++t === 1 && f(!0)
        },
        decrement: () => {
            --t === 0 && f(!1)
        },
        inFallback: l,
        effects: [],
        resolved: !1
    }, d = le();
    if (h.context && h.load) {
        const x = h.context.id + h.context.count;
        let k = h.load(x);
        if (k && (typeof k != "object" || k.status !== "success" ? r = k : h.gather(x)), r && r !== "$$f") {
            const [L, j] = M(void 0, {
                equals: !1
            });
            i = L, r.then(() => {
                if (h.done) return j();
                h.gather(x), K(s), j(), K()
            }, E => {
                o = E, j()
            })
        }
    }
    const y = he(ft);
    y && (n = y.register(u.inFallback));
    let m;
    return H(() => m && m()), rt(a.Provider, {
        value: u,
        get children() {
            return O(() => {
                if (o) throw o;
                if (s = h.context, i) return i(), i = void 0;
                s && r === "$$f" && K();
                const x = O(() => e.children);
                return O(k => {
                    const L = u.inFallback(),
                        {
                            showContent: j = !0,
                            showFallback: E = !0
                        } = n ? n() : {};
                    if ((!L || r && r !== "$$f") && j) return u.resolved = !0, m && m(), m = s = r = void 0, Je(u.effects), x();
                    if (E) return m ? k : D(T => (m = T, s && (K({
                        id: s.id + "f",
                        count: 0
                    }), s = void 0), e.fallback), d)
                })
            })
        }
    })
}
const ut = ["allowfullscreen", "async", "autofocus", "autoplay", "checked", "controls", "default", "disabled", "formnovalidate", "hidden", "indeterminate", "inert", "ismap", "loop", "multiple", "muted", "nomodule", "novalidate", "open", "playsinline", "readonly", "required", "reversed", "seamless", "selected"],
    ct = new Set(["className", "value", "readOnly", "formNoValidate", "isMap", "noModule", "playsInline", ...ut]),
    at = new Set(["innerHTML", "textContent", "innerText", "children"]),
    dt = Object.assign(Object.create(null), {
        className: "class",
        htmlFor: "for"
    }),
    ht = Object.assign(Object.create(null), {
        class: "className",
        formnovalidate: {
            $: "formNoValidate",
            BUTTON: 1,
            INPUT: 1
        },
        ismap: {
            $: "isMap",
            IMG: 1
        },
        nomodule: {
            $: "noModule",
            SCRIPT: 1
        },
        playsinline: {
            $: "playsInline",
            VIDEO: 1
        },
        readonly: {
            $: "readOnly",
            INPUT: 1,
            TEXTAREA: 1
        }
    });

function gt(e, t) {
    const n = ht[e];
    return typeof n == "object" ? n[t] ? n.$ : void 0 : n
}
const yt = new Set(["beforeinput", "click", "dblclick", "contextmenu", "focusin", "focusout", "input", "keydown", "keyup", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "pointerdown", "pointermove", "pointerout", "pointerover", "pointerup", "touchend", "touchmove", "touchstart"]),
    wt = new Set(["altGlyph", "altGlyphDef", "altGlyphItem", "animate", "animateColor", "animateMotion", "animateTransform", "circle", "clipPath", "color-profile", "cursor", "defs", "desc", "ellipse", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "font", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignObject", "g", "glyph", "glyphRef", "hkern", "image", "line", "linearGradient", "marker", "mask", "metadata", "missing-glyph", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "set", "stop", "svg", "switch", "symbol", "text", "textPath", "tref", "tspan", "use", "view", "vkern"]),
    mt = {
        xlink: "http://www.w3.org/1999/xlink",
        xml: "http://www.w3.org/XML/1998/namespace"
    };

function bt(e, t, n) {
    let s = n.length,
        r = t.length,
        i = s,
        o = 0,
        l = 0,
        f = t[r - 1].nextSibling,
        a = null;
    for (; o < r || l < i;) {
        if (t[o] === n[l]) {
            o++, l++;
            continue
        }
        for (; t[r - 1] === n[i - 1];) r--, i--;
        if (r === o) {
            const u = i < s ? l ? n[l - 1].nextSibling : n[i - l] : f;
            for (; l < i;) e.insertBefore(n[l++], u)
        } else if (i === l)
            for (; o < r;)(!a || !a.has(t[o])) && t[o].remove(), o++;
        else if (t[o] === n[i - 1] && n[l] === t[r - 1]) {
            const u = t[--r].nextSibling;
            e.insertBefore(n[l++], t[o++].nextSibling), e.insertBefore(n[--i], u), t[r] = n[i]
        } else {
            if (!a) {
                a = new Map;
                let d = l;
                for (; d < i;) a.set(n[d], d++)
            }
            const u = a.get(t[o]);
            if (u != null)
                if (l < u && u < i) {
                    let d = o,
                        y = 1,
                        m;
                    for (; ++d < r && d < i && !((m = a.get(t[d])) == null || m !== u + y);) y++;
                    if (y > u - l) {
                        const x = t[o];
                        for (; l < u;) e.insertBefore(n[l++], x)
                    } else e.replaceChild(n[l++], t[o++])
                } else o++;
            else t[o++].remove()
        }
    }
}
const Ce = "_$DX_DELEGATE";

function Kt(e, t, n, s = {}) {
    let r;
    return D(i => {
        r = i, t === document ? e() : ae(t, e(), t.firstChild ? null : void 0, n)
    }, s.owner), () => {
        r(), t.textContent = ""
    }
}

function Xt(e, t, n) {
    let s;
    const r = () => {
            const o = document.createElement("template");
            return o.innerHTML = e, n ? o.content.firstChild.firstChild : o.content.firstChild
        },
        i = t ? () => P(() => document.importNode(s || (s = r()), !0)) : () => (s || (s = r())).cloneNode(!0);
    return i.cloneNode = i, i
}

function pt(e, t = window.document) {
    const n = t[Ce] || (t[Ce] = new Set);
    for (let s = 0, r = e.length; s < r; s++) {
        const i = e[s];
        n.has(i) || (n.add(i), t.addEventListener(i, Nt))
    }
}

function ce(e, t, n) {
    h.context || (n == null ? e.removeAttribute(t) : e.setAttribute(t, n))
}

function St(e, t, n, s) {
    h.context || (s == null ? e.removeAttributeNS(t, n) : e.setAttributeNS(t, n, s))
}

function xt(e, t) {
    h.context || (t == null ? e.removeAttribute("class") : e.className = t)
}

function At(e, t, n, s) {
    if (s) Array.isArray(n) ? (e[`$$${t}`] = n[0], e[`$$${t}Data`] = n[1]) : e[`$$${t}`] = n;
    else if (Array.isArray(n)) {
        const r = n[0];
        e.addEventListener(t, n[0] = i => r.call(e, n[1], i))
    } else e.addEventListener(t, n)
}

function Ct(e, t, n = {}) {
    const s = Object.keys(t || {}),
        r = Object.keys(n);
    let i, o;
    for (i = 0, o = r.length; i < o; i++) {
        const l = r[i];
        !l || l === "undefined" || t[l] || (Ee(e, l, !1), delete n[l])
    }
    for (i = 0, o = s.length; i < o; i++) {
        const l = s[i],
            f = !!t[l];
        !l || l === "undefined" || n[l] === f || !f || (Ee(e, l, !0), n[l] = f)
    }
    return n
}

function Et(e, t, n) {
    if (!t) return n ? ce(e, "style") : t;
    const s = e.style;
    if (typeof t == "string") return s.cssText = t;
    typeof n == "string" && (s.cssText = n = void 0), n || (n = {}), t || (t = {});
    let r, i;
    for (i in n) t[i] == null && s.removeProperty(i), delete n[i];
    for (i in t) r = t[i], r !== n[i] && (s.setProperty(i, r), n[i] = r);
    return n
}

function Ot(e, t = {}, n, s) {
    const r = {};
    return s || B(() => r.children = q(e, t.children, r.children)), B(() => t.ref && t.ref(e)), B(() => Pt(e, t, n, !0, r, !0)), r
}

function Wt(e, t, n) {
    return P(() => e(t, n))
}

function ae(e, t, n, s) {
    if (n !== void 0 && !s && (s = []), typeof t != "function") return q(e, t, s, n);
    B(r => q(e, t(), r, n), s)
}

function Pt(e, t, n, s, r = {}, i = !1) {
    t || (t = {});
    for (const o in r)
        if (!(o in t)) {
            if (o === "children") continue;
            r[o] = Oe(e, o, null, r[o], n, i)
        }
    for (const o in t) {
        if (o === "children") {
            s || q(e, t.children);
            continue
        }
        const l = t[o];
        r[o] = Oe(e, o, l, r[o], n, i)
    }
}

function kt(e) {
    let t, n;
    return !h.context || !(t = h.registry.get(n = $t())) ? e() : (h.completed && h.completed.add(t), h.registry.delete(n), t)
}

function Tt(e) {
    return e.toLowerCase().replace(/-([a-z])/g, (t, n) => n.toUpperCase())
}

function Ee(e, t, n) {
    const s = t.trim().split(/\s+/);
    for (let r = 0, i = s.length; r < i; r++) e.classList.toggle(s[r], n)
}

function Oe(e, t, n, s, r, i) {
    let o, l, f, a, u;
    if (t === "style") return Et(e, n, s);
    if (t === "classList") return Ct(e, n, s);
    if (n === s) return s;
    if (t === "ref") i || n(e);
    else if (t.slice(0, 3) === "on:") {
        const d = t.slice(3);
        s && e.removeEventListener(d, s), n && e.addEventListener(d, n)
    } else if (t.slice(0, 10) === "oncapture:") {
        const d = t.slice(10);
        s && e.removeEventListener(d, s, !0), n && e.addEventListener(d, n, !0)
    } else if (t.slice(0, 2) === "on") {
        const d = t.slice(2).toLowerCase(),
            y = yt.has(d);
        if (!y && s) {
            const m = Array.isArray(s) ? s[0] : s;
            e.removeEventListener(d, m)
        }(y || n) && (At(e, d, n, y), y && pt([d]))
    } else if (t.slice(0, 5) === "attr:") ce(e, t.slice(5), n);
    else if ((u = t.slice(0, 5) === "prop:") || (f = at.has(t)) || !r && ((a = gt(t, e.tagName)) || (l = ct.has(t))) || (o = e.nodeName.includes("-"))) {
        if (u) t = t.slice(5), l = !0;
        else if (h.context) return n;
        t === "class" || t === "className" ? xt(e, n) : o && !l && !f ? e[Tt(t)] = n : e[a || t] = n
    } else {
        const d = r && t.indexOf(":") > -1 && mt[t.split(":")[0]];
        d ? St(e, d, t, n) : ce(e, dt[t] || t, n)
    }
    return n
}

function Nt(e) {
    const t = `$$${e.type}`;
    let n = e.composedPath && e.composedPath()[0] || e.target;
    for (e.target !== n && Object.defineProperty(e, "target", {
            configurable: !0,
            value: n
        }), Object.defineProperty(e, "currentTarget", {
            configurable: !0,
            get() {
                return n || document
            }
        }), h.registry && !h.done && (h.done = _$HY.done = !0); n;) {
        const s = n[t];
        if (s && !n.disabled) {
            const r = n[`${t}Data`];
            if (r !== void 0 ? s.call(n, r, e) : s.call(n, e), e.cancelBubble) return
        }
        n = n._$host || n.parentNode || n.host
    }
}

function q(e, t, n, s, r) {
    if (h.context) {
        !n && (n = [...e.childNodes]);
        let l = [];
        for (let f = 0; f < n.length; f++) {
            const a = n[f];
            a.nodeType === 8 && a.data.slice(0, 2) === "!$" ? a.remove() : l.push(a)
        }
        n = l
    }
    for (; typeof n == "function";) n = n();
    if (t === n) return n;
    const i = typeof t,
        o = s !== void 0;
    if (e = o && n[0] && n[0].parentNode || e, i === "string" || i === "number") {
        if (h.context) return n;
        if (i === "number" && (t = t.toString()), o) {
            let l = n[0];
            l && l.nodeType === 3 ? l.data !== t && (l.data = t) : l = document.createTextNode(t), n = R(e, n, s, l)
        } else n !== "" && typeof n == "string" ? n = e.firstChild.data = t : n = e.textContent = t
    } else if (t == null || i === "boolean") {
        if (h.context) return n;
        n = R(e, n, s)
    } else {
        if (i === "function") return B(() => {
            let l = t();
            for (; typeof l == "function";) l = l();
            n = q(e, l, n, s)
        }), () => n;
        if (Array.isArray(t)) {
            const l = [],
                f = n && Array.isArray(n);
            if (de(l, t, n, r)) return B(() => n = q(e, l, n, s, !0)), () => n;
            if (h.context) {
                if (!l.length) return n;
                if (s === void 0) return [...e.childNodes];
                let a = l[0],
                    u = [a];
                for (;
                    (a = a.nextSibling) !== s;) u.push(a);
                return n = u
            }
            if (l.length === 0) {
                if (n = R(e, n, s), o) return n
            } else f ? n.length === 0 ? Pe(e, l, s) : bt(e, n, l) : (n && R(e), Pe(e, l));
            n = l
        } else if (t.nodeType) {
            if (h.context && t.parentNode) return n = o ? [t] : t;
            if (Array.isArray(n)) {
                if (o) return n = R(e, n, s, t);
                R(e, n, null, t)
            } else n == null || n === "" || !e.firstChild ? e.appendChild(t) : e.replaceChild(t, e.firstChild);
            n = t
        }
    }
    return n
}

function de(e, t, n, s) {
    let r = !1;
    for (let i = 0, o = t.length; i < o; i++) {
        let l = t[i],
            f = n && n[e.length],
            a;
        if (!(l == null || l === !0 || l === !1))
            if ((a = typeof l) == "object" && l.nodeType) e.push(l);
            else if (Array.isArray(l)) r = de(e, l, f) || r;
        else if (a === "function")
            if (s) {
                for (; typeof l == "function";) l = l();
                r = de(e, Array.isArray(l) ? l : [l], Array.isArray(f) ? f : [f]) || r
            } else e.push(l), r = !0;
        else {
            const u = String(l);
            f && f.nodeType === 3 && f.data === u ? e.push(f) : e.push(document.createTextNode(u))
        }
    }
    return r
}

function Pe(e, t, n = null) {
    for (let s = 0, r = t.length; s < r; s++) e.insertBefore(t[s], n)
}

function R(e, t, n, s) {
    if (n === void 0) return e.textContent = "";
    const r = s || document.createTextNode("");
    if (t.length) {
        let i = !1;
        for (let o = t.length - 1; o >= 0; o--) {
            const l = t[o];
            if (r !== l) {
                const f = l.parentNode === e;
                !i && !o ? f ? e.replaceChild(r, l) : e.insertBefore(r, n) : f && l.remove()
            } else i = !0
        }
    } else e.insertBefore(r, n);
    return [r]
}

function $t() {
    const e = h.context;
    return `${e.id}${e.count++}`
}
const Lt = "http://www.w3.org/2000/svg";

function Ue(e, t = !1) {
    return t ? document.createElementNS(Lt, e) : document.createElement(e)
}

function Yt(e) {
    const {
        useShadow: t
    } = e, n = document.createTextNode(""), s = () => e.mount || document.body, r = le();
    let i, o = !!h.context;
    return Le(() => {
        o && (le().user = o = !1), i || (i = Ye(r, () => O(() => e.children)));
        const l = s();
        if (l instanceof HTMLHeadElement) {
            const [f, a] = M(!1), u = () => a(!0);
            D(d => ae(l, () => f() ? d() : i(), null)), H(u)
        } else {
            const f = Ue(e.isSVG ? "g" : "div", e.isSVG),
                a = t && f.attachShadow ? f.attachShadow({
                    mode: "open"
                }) : f;
            Object.defineProperty(f, "_$host", {
                get() {
                    return n.parentNode
                },
                configurable: !0
            }), ae(a, i), l.appendChild(f), e.ref && e.ref(f), H(() => l.removeChild(f))
        }
    }, void 0, {
        render: !o
    }), n
}

function Qt(e) {
    const [t, n] = ot(e, ["component"]), s = O(() => t.component);
    return O(() => {
        const r = s();
        switch (typeof r) {
            case "function":
                return P(() => r(n));
            case "string":
                const i = wt.has(r),
                    o = h.context ? kt() : Ue(r, i);
                return Ot(o, n, i), o
        }
    })
}
export {
    Q as $, qt as A, Te as B, Dt as C, Qt as D, Mt as E, Gt as F, ve as G, Ut as I, Ht as M, Yt as P, Rt as S, Ot as a, B as b, rt as c, xt as d, M as e, O as f, _t as g, pt as h, ae as i, ce as j, Le as k, It as l, Bt as m, At as n, H as o, P as p, Se as q, Kt as r, ot as s, Xt as t, Wt as u, Vt as v, Ft as w, vt as x, he as y, je as z
};