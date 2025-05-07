try {
    self["workbox:core:6.6.0"] && _()
} catch {}
const E = (a, ...e) => {
        let t = a;
        return e.length > 0 && (t += ` :: ${JSON.stringify(e)}`), t
    },
    I = E;
class l extends Error {
    constructor(e, t) {
        const s = I(e, t);
        super(s), this.name = e, this.details = t
    }
}
const f = {
        googleAnalytics: "googleAnalytics",
        precache: "precache-v2",
        prefix: "workbox",
        runtime: "runtime",
        suffix: typeof registration < "u" ? registration.scope : ""
    },
    b = a => [f.prefix, a, f.suffix].filter(e => e && e.length > 0).join("-"),
    O = a => {
        for (const e of Object.keys(f)) a(e)
    },
    C = {
        updateDetails: a => {
            O(e => {
                typeof a[e] == "string" && (f[e] = a[e])
            })
        },
        getGoogleAnalyticsName: a => a || b(f.googleAnalytics),
        getPrecacheName: a => a || b(f.precache),
        getPrefix: () => f.prefix,
        getRuntimeName: a => a || b(f.runtime),
        getSuffix: () => f.suffix
    };

function P(a, e) {
    const t = e();
    return a.waitUntil(t), t
}
try {
    self["workbox:precaching:6.6.0"] && _()
} catch {}
const v = "__WB_REVISION__";

function M(a) {
    if (!a) throw new l("add-to-cache-list-unexpected-type", {
        entry: a
    });
    if (typeof a == "string") {
        const c = new URL(a, location.href);
        return {
            cacheKey: c.href,
            url: c.href
        }
    }
    const {
        revision: e,
        url: t
    } = a;
    if (!t) throw new l("add-to-cache-list-unexpected-type", {
        entry: a
    });
    if (!e) {
        const c = new URL(t, location.href);
        return {
            cacheKey: c.href,
            url: c.href
        }
    }
    const s = new URL(t, location.href),
        n = new URL(t, location.href);
    return s.searchParams.set(v, e), {
        cacheKey: s.href,
        url: n.href
    }
}
class W {
    constructor() {
        this.updatedURLs = [], this.notUpdatedURLs = [], this.handlerWillStart = async ({
            request: e,
            state: t
        }) => {
            t && (t.originalRequest = e)
        }, this.cachedResponseWillBeUsed = async ({
            event: e,
            state: t,
            cachedResponse: s
        }) => {
            if (e.type === "install" && t && t.originalRequest && t.originalRequest instanceof Request) {
                const n = t.originalRequest.url;
                s ? this.notUpdatedURLs.push(n) : this.updatedURLs.push(n)
            }
            return s
        }
    }
}
class S {
    constructor({
        precacheController: e
    }) {
        this.cacheKeyWillBeUsed = async ({
            request: t,
            params: s
        }) => {
            const n = s ? .cacheKey || this._precacheController.getCacheKeyForURL(t.url);
            return n ? new Request(n, {
                headers: t.headers
            }) : t
        }, this._precacheController = e
    }
}
let p;

function A() {
    if (p === void 0) {
        const a = new Response("");
        if ("body" in a) try {
            new Response(a.body), p = !0
        } catch {
            p = !1
        }
        p = !1
    }
    return p
}
async function D(a, e) {
    let t = null;
    if (a.url && (t = new URL(a.url).origin), t !== self.location.origin) throw new l("cross-origin-copy-response", {
        origin: t
    });
    const s = a.clone(),
        n = {
            headers: new Headers(s.headers),
            status: s.status,
            statusText: s.statusText
        },
        c = e ? e(n) : n,
        r = A() ? s.body : await s.blob();
    return new Response(r, c)
}
const q = a => new URL(String(a), location.href).href.replace(new RegExp(`^${location.origin}`), "");

function L(a, e) {
    const t = new URL(a);
    for (const s of e) t.searchParams.delete(s);
    return t.href
}
async function F(a, e, t, s) {
    const n = L(e.url, t);
    if (e.url === n) return a.match(e, s);
    const c = Object.assign(Object.assign({}, s), {
            ignoreSearch: !0
        }),
        r = await a.keys(e, c);
    for (const i of r) {
        const o = L(i.url, t);
        if (n === o) return a.match(i, s)
    }
}
class j {
    constructor() {
        this.promise = new Promise((e, t) => {
            this.resolve = e, this.reject = t
        })
    }
}
const H = new Set;
async function B() {
    for (const a of H) await a()
}

function $(a) {
    return new Promise(e => setTimeout(e, a))
}
try {
    self["workbox:strategies:6.6.0"] && _()
} catch {}

function m(a) {
    return typeof a == "string" ? new Request(a) : a
}
class G {
    constructor(e, t) {
        this._cacheKeys = {}, Object.assign(this, t), this.event = t.event, this._strategy = e, this._handlerDeferred = new j, this._extendLifetimePromises = [], this._plugins = [...e.plugins], this._pluginStateMap = new Map;
        for (const s of this._plugins) this._pluginStateMap.set(s, {});
        this.event.waitUntil(this._handlerDeferred.promise)
    }
    async fetch(e) {
        const {
            event: t
        } = this;
        let s = m(e);
        if (s.mode === "navigate" && t instanceof FetchEvent && t.preloadResponse) {
            const r = await t.preloadResponse;
            if (r) return r
        }
        const n = this.hasCallback("fetchDidFail") ? s.clone() : null;
        try {
            for (const r of this.iterateCallbacks("requestWillFetch")) s = await r({
                request: s.clone(),
                event: t
            })
        } catch (r) {
            if (r instanceof Error) throw new l("plugin-error-request-will-fetch", {
                thrownErrorMessage: r.message
            })
        }
        const c = s.clone();
        try {
            let r;
            r = await fetch(s, s.mode === "navigate" ? void 0 : this._strategy.fetchOptions);
            for (const i of this.iterateCallbacks("fetchDidSucceed")) r = await i({
                event: t,
                request: c,
                response: r
            });
            return r
        } catch (r) {
            throw n && await this.runCallbacks("fetchDidFail", {
                error: r,
                event: t,
                originalRequest: n.clone(),
                request: c.clone()
            }), r
        }
    }
    async fetchAndCachePut(e) {
        const t = await this.fetch(e),
            s = t.clone();
        return this.waitUntil(this.cachePut(e, s)), t
    }
    async cacheMatch(e) {
        const t = m(e);
        let s;
        const {
            cacheName: n,
            matchOptions: c
        } = this._strategy, r = await this.getCacheKey(t, "read"), i = Object.assign(Object.assign({}, c), {
            cacheName: n
        });
        s = await caches.match(r, i);
        for (const o of this.iterateCallbacks("cachedResponseWillBeUsed")) s = await o({
            cacheName: n,
            matchOptions: c,
            cachedResponse: s,
            request: r,
            event: this.event
        }) || void 0;
        return s
    }
    async cachePut(e, t) {
        const s = m(e);
        await $(0);
        const n = await this.getCacheKey(s, "write");
        if (!t) throw new l("cache-put-with-no-response", {
            url: q(n.url)
        });
        const c = await this._ensureResponseSafeToCache(t);
        if (!c) return !1;
        const {
            cacheName: r,
            matchOptions: i
        } = this._strategy, o = await self.caches.open(r), h = this.hasCallback("cacheDidUpdate"), g = h ? await F(o, n.clone(), ["__WB_REVISION__"], i) : null;
        try {
            await o.put(n, h ? c.clone() : c)
        } catch (u) {
            if (u instanceof Error) throw u.name === "QuotaExceededError" && await B(), u
        }
        for (const u of this.iterateCallbacks("cacheDidUpdate")) await u({
            cacheName: r,
            oldResponse: g,
            newResponse: c.clone(),
            request: n,
            event: this.event
        });
        return !0
    }
    async getCacheKey(e, t) {
        const s = `${e.url} | ${t}`;
        if (!this._cacheKeys[s]) {
            let n = e;
            for (const c of this.iterateCallbacks("cacheKeyWillBeUsed")) n = m(await c({
                mode: t,
                request: n,
                event: this.event,
                params: this.params
            }));
            this._cacheKeys[s] = n
        }
        return this._cacheKeys[s]
    }
    hasCallback(e) {
        for (const t of this._strategy.plugins)
            if (e in t) return !0;
        return !1
    }
    async runCallbacks(e, t) {
        for (const s of this.iterateCallbacks(e)) await s(t)
    }* iterateCallbacks(e) {
        for (const t of this._strategy.plugins)
            if (typeof t[e] == "function") {
                const s = this._pluginStateMap.get(t);
                yield c => {
                    const r = Object.assign(Object.assign({}, c), {
                        state: s
                    });
                    return t[e](r)
                }
            }
    }
    waitUntil(e) {
        return this._extendLifetimePromises.push(e), e
    }
    async doneWaiting() {
        let e;
        for (; e = this._extendLifetimePromises.shift();) await e
    }
    destroy() {
        this._handlerDeferred.resolve(null)
    }
    async _ensureResponseSafeToCache(e) {
        let t = e,
            s = !1;
        for (const n of this.iterateCallbacks("cacheWillUpdate"))
            if (t = await n({
                    request: this.request,
                    response: t,
                    event: this.event
                }) || void 0, s = !0, !t) break;
        return s || t && t.status !== 200 && (t = void 0), t
    }
}
class T {
    constructor(e = {}) {
        this.cacheName = C.getRuntimeName(e.cacheName), this.plugins = e.plugins || [], this.fetchOptions = e.fetchOptions, this.matchOptions = e.matchOptions
    }
    handle(e) {
        const [t] = this.handleAll(e);
        return t
    }
    handleAll(e) {
        e instanceof FetchEvent && (e = {
            event: e,
            request: e.request
        });
        const t = e.event,
            s = typeof e.request == "string" ? new Request(e.request) : e.request,
            n = "params" in e ? e.params : void 0,
            c = new G(this, {
                event: t,
                request: s,
                params: n
            }),
            r = this._getResponse(c, s, t),
            i = this._awaitComplete(r, c, s, t);
        return [r, i]
    }
    async _getResponse(e, t, s) {
        await e.runCallbacks("handlerWillStart", {
            event: s,
            request: t
        });
        let n;
        try {
            if (n = await this._handle(t, e), !n || n.type === "error") throw new l("no-response", {
                url: t.url
            })
        } catch (c) {
            if (c instanceof Error) {
                for (const r of e.iterateCallbacks("handlerDidError"))
                    if (n = await r({
                            error: c,
                            event: s,
                            request: t
                        }), n) break
            }
            if (!n) throw c
        }
        for (const c of e.iterateCallbacks("handlerWillRespond")) n = await c({
            event: s,
            request: t,
            response: n
        });
        return n
    }
    async _awaitComplete(e, t, s, n) {
        let c, r;
        try {
            c = await e
        } catch {}
        try {
            await t.runCallbacks("handlerDidRespond", {
                event: n,
                request: s,
                response: c
            }), await t.doneWaiting()
        } catch (i) {
            i instanceof Error && (r = i)
        }
        if (await t.runCallbacks("handlerDidComplete", {
                event: n,
                request: s,
                response: c,
                error: r
            }), t.destroy(), r) throw r
    }
}
class d extends T {
    constructor(e = {}) {
        e.cacheName = C.getPrecacheName(e.cacheName), super(e), this._fallbackToNetwork = e.fallbackToNetwork !== !1, this.plugins.push(d.copyRedirectedCacheableResponsesPlugin)
    }
    async _handle(e, t) {
        const s = await t.cacheMatch(e);
        return s || (t.event && t.event.type === "install" ? await this._handleInstall(e, t) : await this._handleFetch(e, t))
    }
    async _handleFetch(e, t) {
        let s;
        const n = t.params || {};
        if (this._fallbackToNetwork) {
            const c = n.integrity,
                r = e.integrity,
                i = !r || r === c;
            s = await t.fetch(new Request(e, {
                integrity: e.mode !== "no-cors" ? r || c : void 0
            })), c && i && e.mode !== "no-cors" && (this._useDefaultCacheabilityPluginIfNeeded(), await t.cachePut(e, s.clone()))
        } else throw new l("missing-precache-entry", {
            cacheName: this.cacheName,
            url: e.url
        });
        return s
    }
    async _handleInstall(e, t) {
        this._useDefaultCacheabilityPluginIfNeeded();
        const s = await t.fetch(e);
        if (!await t.cachePut(e, s.clone())) throw new l("bad-precaching-response", {
            url: e.url,
            status: s.status
        });
        return s
    }
    _useDefaultCacheabilityPluginIfNeeded() {
        let e = null,
            t = 0;
        for (const [s, n] of this.plugins.entries()) n !== d.copyRedirectedCacheableResponsesPlugin && (n === d.defaultPrecacheCacheabilityPlugin && (e = s), n.cacheWillUpdate && t++);
        t === 0 ? this.plugins.push(d.defaultPrecacheCacheabilityPlugin) : t > 1 && e !== null && this.plugins.splice(e, 1)
    }
}
d.defaultPrecacheCacheabilityPlugin = {
    async cacheWillUpdate({
        response: a
    }) {
        return !a || a.status >= 400 ? null : a
    }
};
d.copyRedirectedCacheableResponsesPlugin = {
    async cacheWillUpdate({
        response: a
    }) {
        return a.redirected ? await D(a) : a
    }
};
class V {
    constructor({
        cacheName: e,
        plugins: t = [],
        fallbackToNetwork: s = !0
    } = {}) {
        this._urlsToCacheKeys = new Map, this._urlsToCacheModes = new Map, this._cacheKeysToIntegrities = new Map, this._strategy = new d({
            cacheName: C.getPrecacheName(e),
            plugins: [...t, new S({
                precacheController: this
            })],
            fallbackToNetwork: s
        }), this.install = this.install.bind(this), this.activate = this.activate.bind(this)
    }
    get strategy() {
        return this._strategy
    }
    precache(e) {
        this.addToCacheList(e), this._installAndActiveListenersAdded || (self.addEventListener("install", this.install), self.addEventListener("activate", this.activate), this._installAndActiveListenersAdded = !0)
    }
    addToCacheList(e) {
        const t = [];
        for (const s of e) {
            typeof s == "string" ? t.push(s) : s && s.revision === void 0 && t.push(s.url);
            const {
                cacheKey: n,
                url: c
            } = M(s), r = typeof s != "string" && s.revision ? "reload" : "default";
            if (this._urlsToCacheKeys.has(c) && this._urlsToCacheKeys.get(c) !== n) throw new l("add-to-cache-list-conflicting-entries", {
                firstEntry: this._urlsToCacheKeys.get(c),
                secondEntry: n
            });
            if (typeof s != "string" && s.integrity) {
                if (this._cacheKeysToIntegrities.has(n) && this._cacheKeysToIntegrities.get(n) !== s.integrity) throw new l("add-to-cache-list-conflicting-integrities", {
                    url: c
                });
                this._cacheKeysToIntegrities.set(n, s.integrity)
            }
            if (this._urlsToCacheKeys.set(c, n), this._urlsToCacheModes.set(c, r), t.length > 0) {
                const i = `Workbox is precaching URLs without revision info: ${t.join(", ")}
This is generally NOT safe. Learn more at https://bit.ly/wb-precache`
            }
        }
    }
    install(e) {
        return P(e, async () => {
            const t = new W;
            this.strategy.plugins.push(t);
            for (const [c, r] of this._urlsToCacheKeys) {
                const i = this._cacheKeysToIntegrities.get(r),
                    o = this._urlsToCacheModes.get(c),
                    h = new Request(c, {
                        integrity: i,
                        cache: o,
                        credentials: "same-origin"
                    });
                await Promise.all(this.strategy.handleAll({
                    params: {
                        cacheKey: r
                    },
                    request: h,
                    event: e
                }))
            }
            const {
                updatedURLs: s,
                notUpdatedURLs: n
            } = t;
            return {
                updatedURLs: s,
                notUpdatedURLs: n
            }
        })
    }
    activate(e) {
        return P(e, async () => {
            const t = await self.caches.open(this.strategy.cacheName),
                s = await t.keys(),
                n = new Set(this._urlsToCacheKeys.values()),
                c = [];
            for (const r of s) n.has(r.url) || (await t.delete(r), c.push(r.url));
            return {
                deletedURLs: c
            }
        })
    }
    getURLsToCacheKeys() {
        return this._urlsToCacheKeys
    }
    getCachedURLs() {
        return [...this._urlsToCacheKeys.keys()]
    }
    getCacheKeyForURL(e) {
        const t = new URL(e, location.href);
        return this._urlsToCacheKeys.get(t.href)
    }
    getIntegrityForCacheKey(e) {
        return this._cacheKeysToIntegrities.get(e)
    }
    async matchPrecache(e) {
        const t = e instanceof Request ? e.url : e,
            s = this.getCacheKeyForURL(t);
        if (s) return (await self.caches.open(this.strategy.cacheName)).match(s)
    }
    createHandlerBoundToURL(e) {
        const t = this.getCacheKeyForURL(e);
        if (!t) throw new l("non-precached-url", {
            url: e
        });
        return s => (s.request = new Request(e), s.params = Object.assign({
            cacheKey: t
        }, s.params), this.strategy.handle(s))
    }
}
let U;
const K = () => (U || (U = new V), U);
try {
    self["workbox:routing:6.6.0"] && _()
} catch {}
const N = "GET",
    R = a => a && typeof a == "object" ? a : {
        handle: a
    };
class w {
    constructor(e, t, s = N) {
        this.handler = R(t), this.match = e, this.method = s
    }
    setCatchHandler(e) {
        this.catchHandler = R(e)
    }
}
class Q extends w {
    constructor(e, t, s) {
        const n = ({
            url: c
        }) => {
            const r = e.exec(c.href);
            if (r && !(c.origin !== location.origin && r.index !== 0)) return r.slice(1)
        };
        super(n, t, s)
    }
}
class z {
    constructor() {
        this._routes = new Map, this._defaultHandlerMap = new Map
    }
    get routes() {
        return this._routes
    }
    addFetchListener() {
        self.addEventListener("fetch", e => {
            const {
                request: t
            } = e, s = this.handleRequest({
                request: t,
                event: e
            });
            s && e.respondWith(s)
        })
    }
    addCacheListener() {
        self.addEventListener("message", e => {
            if (e.data && e.data.type === "CACHE_URLS") {
                const {
                    payload: t
                } = e.data, s = Promise.all(t.urlsToCache.map(n => {
                    typeof n == "string" && (n = [n]);
                    const c = new Request(...n);
                    return this.handleRequest({
                        request: c,
                        event: e
                    })
                }));
                e.waitUntil(s), e.ports && e.ports[0] && s.then(() => e.ports[0].postMessage(!0))
            }
        })
    }
    handleRequest({
        request: e,
        event: t
    }) {
        const s = new URL(e.url, location.href);
        if (!s.protocol.startsWith("http")) return;
        const n = s.origin === location.origin,
            {
                params: c,
                route: r
            } = this.findMatchingRoute({
                event: t,
                request: e,
                sameOrigin: n,
                url: s
            });
        let i = r && r.handler;
        const o = e.method;
        if (!i && this._defaultHandlerMap.has(o) && (i = this._defaultHandlerMap.get(o)), !i) return;
        let h;
        try {
            h = i.handle({
                url: s,
                request: e,
                event: t,
                params: c
            })
        } catch (u) {
            h = Promise.reject(u)
        }
        const g = r && r.catchHandler;
        return h instanceof Promise && (this._catchHandler || g) && (h = h.catch(async u => {
            if (g) try {
                return await g.handle({
                    url: s,
                    request: e,
                    event: t,
                    params: c
                })
            } catch (k) {
                k instanceof Error && (u = k)
            }
            if (this._catchHandler) return this._catchHandler.handle({
                url: s,
                request: e,
                event: t
            });
            throw u
        })), h
    }
    findMatchingRoute({
        url: e,
        sameOrigin: t,
        request: s,
        event: n
    }) {
        const c = this._routes.get(s.method) || [];
        for (const r of c) {
            let i;
            const o = r.match({
                url: e,
                sameOrigin: t,
                request: s,
                event: n
            });
            if (o) return i = o, (Array.isArray(i) && i.length === 0 || o.constructor === Object && Object.keys(o).length === 0 || typeof o == "boolean") && (i = void 0), {
                route: r,
                params: i
            }
        }
        return {}
    }
    setDefaultHandler(e, t = N) {
        this._defaultHandlerMap.set(t, R(e))
    }
    setCatchHandler(e) {
        this._catchHandler = R(e)
    }
    registerRoute(e) {
        this._routes.has(e.method) || this._routes.set(e.method, []), this._routes.get(e.method).push(e)
    }
    unregisterRoute(e) {
        if (!this._routes.has(e.method)) throw new l("unregister-route-but-not-found-with-method", {
            method: e.method
        });
        const t = this._routes.get(e.method).indexOf(e);
        if (t > -1) this._routes.get(e.method).splice(t, 1);
        else throw new l("unregister-route-route-not-registered")
    }
}
let y;
const J = () => (y || (y = new z, y.addFetchListener(), y.addCacheListener()), y);

function x(a, e, t) {
    let s;
    if (typeof a == "string") {
        const c = new URL(a, location.href),
            r = ({
                url: i
            }) => i.href === c.href;
        s = new w(r, e, t)
    } else if (a instanceof RegExp) s = new Q(a, e, t);
    else if (typeof a == "function") s = new w(a, e, t);
    else if (a instanceof w) s = a;
    else throw new l("unsupported-route-type", {
        moduleName: "workbox-routing",
        funcName: "registerRoute",
        paramName: "capture"
    });
    return J().registerRoute(s), s
}

function X(a, e = []) {
    for (const t of [...a.searchParams.keys()]) e.some(s => s.test(t)) && a.searchParams.delete(t);
    return a
}

function* Y(a, {
    ignoreURLParametersMatching: e = [/^utm_/, /^fbclid$/],
    directoryIndex: t = "index.html",
    cleanURLs: s = !0,
    urlManipulation: n
} = {}) {
    const c = new URL(a, location.href);
    c.hash = "", yield c.href;
    const r = X(c, e);
    if (yield r.href, t && r.pathname.endsWith("/")) {
        const i = new URL(r.href);
        i.pathname += t, yield i.href
    }
    if (s) {
        const i = new URL(r.href);
        i.pathname += ".html", yield i.href
    }
    if (n) {
        const i = n({
            url: c
        });
        for (const o of i) yield o.href
    }
}
class Z extends w {
    constructor(e, t) {
        const s = ({
            request: n
        }) => {
            const c = e.getURLsToCacheKeys();
            for (const r of Y(n.url, t)) {
                const i = c.get(r);
                if (i) {
                    const o = e.getIntegrityForCacheKey(i);
                    return {
                        cacheKey: i,
                        integrity: o
                    }
                }
            }
        };
        super(s, e.strategy)
    }
}

function ee(a) {
    const e = K(),
        t = new Z(e, a);
    x(t)
}
const te = "-precache-",
    se = async (a, e = te) => {
        const s = (await self.caches.keys()).filter(n => n.includes(e) && n.includes(self.registration.scope) && n !== a);
        return await Promise.all(s.map(n => self.caches.delete(n))), s
    };

function ae() {
    self.addEventListener("activate", a => {
        const e = C.getPrecacheName();
        a.waitUntil(se(e).then(t => {}))
    })
}

function ne(a) {
    K().precache(a)
}

function re(a, e) {
    ne(a), ee(e)
}
const ce = {
    cacheWillUpdate: async ({
        response: a
    }) => a.status === 200 || a.status === 0 ? a : null
};
class ie extends T {
    constructor(e = {}) {
        super(e), this.plugins.some(t => "cacheWillUpdate" in t) || this.plugins.unshift(ce), this._networkTimeoutSeconds = e.networkTimeoutSeconds || 0
    }
    async _handle(e, t) {
        const s = [],
            n = [];
        let c;
        if (this._networkTimeoutSeconds) {
            const {
                id: o,
                promise: h
            } = this._getTimeoutPromise({
                request: e,
                logs: s,
                handler: t
            });
            c = o, n.push(h)
        }
        const r = this._getNetworkPromise({
            timeoutId: c,
            request: e,
            logs: s,
            handler: t
        });
        n.push(r);
        const i = await t.waitUntil((async () => await t.waitUntil(Promise.race(n)) || await r)());
        if (!i) throw new l("no-response", {
            url: e.url
        });
        return i
    }
    _getTimeoutPromise({
        request: e,
        logs: t,
        handler: s
    }) {
        let n;
        return {
            promise: new Promise(r => {
                n = setTimeout(async () => {
                    r(await s.cacheMatch(e))
                }, this._networkTimeoutSeconds * 1e3)
            }),
            id: n
        }
    }
    async _getNetworkPromise({
        timeoutId: e,
        request: t,
        logs: s,
        handler: n
    }) {
        let c, r;
        try {
            r = await n.fetchAndCachePut(t)
        } catch (i) {
            i instanceof Error && (c = i)
        }
        return e && clearTimeout(e), (c || !r) && (r = await n.cacheMatch(t)), r
    }
}
const oe = [{
    "revision": null,
    "url": "assets/_default.page.client.9d8ef828.css"
}, {
    "revision": null,
    "url": "assets/_error.page.4bdaa919.css"
}, {
    "revision": null,
    "url": "assets/bc_debug.page.d23af930.css"
}, {
    "revision": null,
    "url": "assets/bcbrand.837ae599.js"
}, {
    "revision": null,
    "url": "assets/bluetag.a2be364e.js"
}, {
    "revision": "669329e743badaca2d94bda771fb7aa5",
    "url": "assets/chunk-07d6de63.js"
}, {
    "revision": "6d89d3c04ad3a790e3cdc9161219ccab",
    "url": "assets/chunk-07f95b47.js"
}, {
    "revision": "62a0d331fb969c7e0117ca4164d40476",
    "url": "assets/chunk-0e98d985.js"
}, {
    "revision": "0bc6f2789d853bc6621719c3a856b6fe",
    "url": "assets/chunk-132aa0a7.js"
}, {
    "revision": "43477ec8dac0b119947d0439fc4b349f",
    "url": "assets/chunk-1371f12f.js"
}, {
    "revision": "a16c67511884fdffdb2993e94e78b3b0",
    "url": "assets/chunk-1e54fc0c.js"
}, {
    "revision": "5bb01e05915bd94645b31e286661b977",
    "url": "assets/chunk-21db0a97.js"
}, {
    "revision": "a44fcef6265d530c17ba7f5b3134768a",
    "url": "assets/chunk-29a4230f.js"
}, {
    "revision": "66c777347163589bf3b35a2f6448b2a2",
    "url": "assets/chunk-2bddbe1b.js"
}, {
    "revision": "dadaa98c2c3757b950faeb200c1becb8",
    "url": "assets/chunk-405456f5.js"
}, {
    "revision": "584662800946ba8244b8d6dbb868259d",
    "url": "assets/chunk-4142ea66.js"
}, {
    "revision": "fe7335a58fe81e228072e0dc26c4a9d5",
    "url": "assets/chunk-42ea5fe7.js"
}, {
    "revision": "f2307b145b4123824f360ec737b93285",
    "url": "assets/chunk-42f5abfc.js"
}, {
    "revision": "f9c7a0dcf28cca5d30bddbd437a81cb1",
    "url": "assets/chunk-4875aad6.js"
}, {
    "revision": "0533df5b035cc2f9720136afcbba4585",
    "url": "assets/chunk-4b36b7ff.js"
}, {
    "revision": "632b241e1ee978af047d288c29732fc7",
    "url": "assets/chunk-4c2df952.js"
}, {
    "revision": "7f2b55f21280815903c7af7f12a28eb6",
    "url": "assets/chunk-55136115.js"
}, {
    "revision": "46b273eecc83ad2c54c17ff3c6842abe",
    "url": "assets/chunk-569cb855.js"
}, {
    "revision": "45a73e815e5cfb447386a8e565496932",
    "url": "assets/chunk-5a2826fd.js"
}, {
    "revision": "9497acd936aaeca2765779a0507f5c37",
    "url": "assets/chunk-5bcb444f.js"
}, {
    "revision": "71e0613fc10e984bea54dbfcc661b039",
    "url": "assets/chunk-64278058.js"
}, {
    "revision": "626caeb3c2fe7019ae4cd35d9527d077",
    "url": "assets/chunk-654ef298.js"
}, {
    "revision": "33aa286d9cc1ccea37290a77232a5b71",
    "url": "assets/chunk-73e80d68.js"
}, {
    "revision": "e0ee4a65dfb75ea3414007cb273c1ee4",
    "url": "assets/chunk-7459b96e.js"
}, {
    "revision": "7e6c1da1731b8584a6822b9ce767495c",
    "url": "assets/chunk-7a9ca7ff.js"
}, {
    "revision": "0f061e0abd971750e9f712b5edcb5d29",
    "url": "assets/chunk-83c301d9.js"
}, {
    "revision": "d7cee46bafd4d9e29bb069e18eb3889f",
    "url": "assets/chunk-87132790.js"
}, {
    "revision": "00aa3b85989d48deb4dd2f4fc48eec48",
    "url": "assets/chunk-8d9c7a4a.js"
}, {
    "revision": "ca13fd235243611cc4d45dd961fadc2f",
    "url": "assets/chunk-8ff98a5d.js"
}, {
    "revision": "bb2c4de8e15f0f3ec6e214447f3fc1e8",
    "url": "assets/chunk-97fc744c.js"
}, {
    "revision": "7371eb43006c2be5f8e3b61ab6741b79",
    "url": "assets/chunk-9a1dea26.js"
}, {
    "revision": "20f39d230b155ec5881209447a6c535e",
    "url": "assets/chunk-a4af42e8.js"
}, {
    "revision": "ad5b70e1801466726eab8cf264c22250",
    "url": "assets/chunk-a4cceeaf.js"
}, {
    "revision": "8227bf59d094786a7486acab2c42c307",
    "url": "assets/chunk-ad4eb03c.js"
}, {
    "revision": "6f0cb392633721196ad06669a3324b45",
    "url": "assets/chunk-b3c3490f.js"
}, {
    "revision": "7e4be0b8fb667967377d2c0632cefcc2",
    "url": "assets/chunk-b45bd069.js"
}, {
    "revision": "559623bcaaf22c17c6a281a81264772f",
    "url": "assets/chunk-b985edb9.js"
}, {
    "revision": "7d48fee4e809298f024ea240f83655a5",
    "url": "assets/chunk-bb0ace6b.js"
}, {
    "revision": "5b2764d85b21c81df34f78352cd99f87",
    "url": "assets/chunk-c300dd90.js"
}, {
    "revision": "868bd9102b732a63ace9662045b3cee0",
    "url": "assets/chunk-c5b9a686.js"
}, {
    "revision": "0a9e262d689d90446d83bf3ccf361962",
    "url": "assets/chunk-cb552c6e.js"
}, {
    "revision": "2a4c917483de61f2834a72cf1a00a191",
    "url": "assets/chunk-cf010ec4.js"
}, {
    "revision": "0d21a661237cdb535070baf6a3839d2c",
    "url": "assets/chunk-cf8d333b.js"
}, {
    "revision": "6bc00336599a203d5cff5b9f88519ca2",
    "url": "assets/chunk-d1235b91.js"
}, {
    "revision": "8648c1c98d52c7351c1f64ffd8c32e2e",
    "url": "assets/chunk-de5e47f6.js"
}, {
    "revision": "c003b9f09baa908a6a96e3772e985a6b",
    "url": "assets/chunk-e20af49b.js"
}, {
    "revision": "ceb3b46347c209807952c4fc27038569",
    "url": "assets/chunk-e322f4df.js"
}, {
    "revision": "82a69ecfa829865424d8014e8fff19e9",
    "url": "assets/chunk-ebb6ff7f.js"
}, {
    "revision": "ae0963ebe9cb3f6c3a54fa82e6c7afc2",
    "url": "assets/chunk-f0854543.js"
}, {
    "revision": "63ab3d678cc95d17b12ad69fbff9d3ed",
    "url": "assets/chunk-f0f89bbe.js"
}, {
    "revision": "0e087f32707ec48998d04512c6ecc951",
    "url": "assets/chunk-f1a029f1.js"
}, {
    "revision": "084dfec501d6ae2034902e450734a38f",
    "url": "assets/chunk-f2056aea.js"
}, {
    "revision": "629c5b89049a1501b6f2b73e9aa13c2c",
    "url": "assets/chunk-f82403c7.js"
}, {
    "revision": "24eca51a298ae4e69900c5a2391cda13",
    "url": "assets/chunk-f9e44b2a.js"
}, {
    "revision": "e5f08fa1ae169fde387c2d7480b241aa",
    "url": "assets/chunk-fb34d5f5.js"
}, {
    "revision": null,
    "url": "assets/ContestMain.0e08d39c.css"
}, {
    "revision": null,
    "url": "assets/ContestMain.2180e11a.js"
}, {
    "revision": null,
    "url": "assets/cryptoonlinecasino.02a23ec9.js"
}, {
    "revision": null,
    "url": "assets/cryptoonlinecasino.14d5f14e.js"
}, {
    "revision": null,
    "url": "assets/cryptoonlinecasino.1efd8ac4.js"
}, {
    "revision": null,
    "url": "assets/cryptoonlinecasino.3b3b5a0b.js"
}, {
    "revision": null,
    "url": "assets/cryptoonlinecasino.3f53c823.js"
}, {
    "revision": null,
    "url": "assets/cryptoonlinecasino.480ec54a.js"
}, {
    "revision": null,
    "url": "assets/cryptoonlinecasino.5e653c61.js"
}, {
    "revision": null,
    "url": "assets/cryptoonlinecasino.6d89f1f9.js"
}, {
    "revision": null,
    "url": "assets/cryptoonlinecasino.73f2bbd1.js"
}, {
    "revision": null,
    "url": "assets/cryptoonlinecasino.a3c60d83.js"
}, {
    "revision": null,
    "url": "assets/cryptoonlinecasino.acb2b6a1.js"
}, {
    "revision": null,
    "url": "assets/cryptoonlinecasino.bdc09cda.js"
}, {
    "revision": null,
    "url": "assets/cryptoonlinecasino.bf360e9e.js"
}, {
    "revision": null,
    "url": "assets/cryptoonlinecasino.c15f57f6.js"
}, {
    "revision": null,
    "url": "assets/cryptoonlinecasino.c5deed39.js"
}, {
    "revision": null,
    "url": "assets/cryptoonlinecasino.cc3cab26.js"
}, {
    "revision": null,
    "url": "assets/cryptoonlinecasino.d4de941c.js"
}, {
    "revision": null,
    "url": "assets/cryptoonlinecasino.d65fa1de.js"
}, {
    "revision": null,
    "url": "assets/cryptoonlinecasino.d8e893e0.js"
}, {
    "revision": null,
    "url": "assets/cryptoonlinecasino.e8677e98.js"
}, {
    "revision": null,
    "url": "assets/cryptoonlinecasino.e9f4b826.js"
}, {
    "revision": null,
    "url": "assets/cryptoonlinecasino.ea53dabc.js"
}, {
    "revision": null,
    "url": "assets/cryptoonlinecasino.f257d166.js"
}, {
    "revision": null,
    "url": "assets/cryptoonlinecasino.f64c3c45.js"
}, {
    "revision": null,
    "url": "assets/Emoji.5e52f519.css"
}, {
    "revision": null,
    "url": "assets/entry-client-routing.ac5bab1d.js"
}, {
    "revision": null,
    "url": "assets/entry-server-routing.f1cf0b74.js"
}, {
    "revision": null,
    "url": "assets/fp.min.2102a136.js"
}, {
    "revision": null,
    "url": "assets/GameList.5b340fa3.css"
}, {
    "revision": null,
    "url": "assets/GameNavPath.e1cc4a4a.css"
}, {
    "revision": null,
    "url": "assets/GameRecommend.b27d187b.css"
}, {
    "revision": null,
    "url": "assets/GridScrollList.65d17988.css"
}, {
    "revision": null,
    "url": "assets/GroupPageLayout.6f234913.css"
}, {
    "revision": null,
    "url": "assets/HighRollers.c708b407.css"
}, {
    "revision": null,
    "url": "assets/index.2efcb50e.js"
}, {
    "revision": null,
    "url": "assets/index.329d4821.css"
}, {
    "revision": null,
    "url": "assets/index.3eb867c3.css"
}, {
    "revision": null,
    "url": "assets/index.405e4894.css"
}, {
    "revision": null,
    "url": "assets/index.5fdfe620.css"
}, {
    "revision": null,
    "url": "assets/index.619a963f.css"
}, {
    "revision": null,
    "url": "assets/index.64308c9d.css"
}, {
    "revision": null,
    "url": "assets/index.659f9969.css"
}, {
    "revision": null,
    "url": "assets/index.6705dbc2.js"
}, {
    "revision": null,
    "url": "assets/index.89116ee6.css"
}, {
    "revision": null,
    "url": "assets/index.993e9190.css"
}, {
    "revision": null,
    "url": "assets/index.ae868195.js"
}, {
    "revision": null,
    "url": "assets/index.b6401c0d.css"
}, {
    "revision": null,
    "url": "assets/index.e9b82262.js"
}, {
    "revision": null,
    "url": "assets/index.page.0ff2b3f0.css"
}, {
    "revision": null,
    "url": "assets/index.page.1e47e7dc.css"
}, {
    "revision": null,
    "url": "assets/index.page.3a331d1b.css"
}, {
    "revision": null,
    "url": "assets/index.page.434b03e9.css"
}, {
    "revision": null,
    "url": "assets/index.page.439c4357.css"
}, {
    "revision": null,
    "url": "assets/index.page.5f8d04eb.css"
}, {
    "revision": null,
    "url": "assets/index.page.6c077520.css"
}, {
    "revision": null,
    "url": "assets/index.page.7f150f41.css"
}, {
    "revision": null,
    "url": "assets/index.page.a9381018.css"
}, {
    "revision": null,
    "url": "assets/index.page.ac1583c1.css"
}, {
    "revision": null,
    "url": "assets/index.page.b63a7c5c.css"
}, {
    "revision": null,
    "url": "assets/index.page.bd276c74.css"
}, {
    "revision": null,
    "url": "assets/index.page.d0373635.css"
}, {
    "revision": null,
    "url": "assets/index.page.d3c80efb.css"
}, {
    "revision": null,
    "url": "assets/index.page.f41200a6.css"
}, {
    "revision": null,
    "url": "assets/kwai.6bacbd74.js"
}, {
    "revision": null,
    "url": "assets/LiveStatsContent.27d0be88.css"
}, {
    "revision": null,
    "url": "assets/LiveStatsContent.a785829e.js"
}, {
    "revision": null,
    "url": "assets/MatchIcon.8462f48e.css"
}, {
    "revision": null,
    "url": "assets/pages/affiliate/index.page.2d202fc4.js"
}, {
    "revision": null,
    "url": "assets/pages/app_download/index.page.e1c923a7.js"
}, {
    "revision": null,
    "url": "assets/pages/auth/index.page.3a39cd3b.js"
}, {
    "revision": null,
    "url": "assets/pages/bc_debug.page.7d43ee18.js"
}, {
    "revision": null,
    "url": "assets/pages/bingolist/index.page.5fa9b528.js"
}, {
    "revision": null,
    "url": "assets/pages/bonus/index.page.95f394ff.js"
}, {
    "revision": null,
    "url": "assets/pages/casino/index.page.b9f3b4be.js"
}, {
    "revision": null,
    "url": "assets/pages/chat/index.page.db06358d.js"
}, {
    "revision": null,
    "url": "assets/pages/enter-game/index.page.00e481c8.js"
}, {
    "revision": null,
    "url": "assets/pages/events/index.page.4ab49b63.js"
}, {
    "revision": null,
    "url": "assets/pages/favorite/index.page.efa0e8f5.js"
}, {
    "revision": null,
    "url": "assets/pages/forum_event/index.page.d8475248.js"
}, {
    "revision": null,
    "url": "assets/pages/game/@gameUnique/index.page.c1d2a6f2.js"
}, {
    "revision": null,
    "url": "assets/pages/gamelist/@sectionId/index.page.b5ab56a3.js"
}, {
    "revision": null,
    "url": "assets/pages/games-for-bonus/index.page.8f79b42c.js"
}, {
    "revision": null,
    "url": "assets/pages/help/index.page.f9ba9b3b.js"
}, {
    "revision": null,
    "url": "assets/pages/index/index.page.cafe0253.js"
}, {
    "revision": null,
    "url": "assets/pages/japarot/index.page.93ea630e.js"
}, {
    "revision": null,
    "url": "assets/pages/landing/index.page.c1a414da.js"
}, {
    "revision": null,
    "url": "assets/pages/lottery/index.page.049e44d5.js"
}, {
    "revision": null,
    "url": "assets/pages/promotion/@detailId/index.page.abfd7eb8.js"
}, {
    "revision": null,
    "url": "assets/pages/promotion/index.page.3c6c3a42.js"
}, {
    "revision": null,
    "url": "assets/pages/promotions/index.page.79981693.js"
}, {
    "revision": null,
    "url": "assets/pages/provider/@providerName/index.page.02908f5e.js"
}, {
    "revision": null,
    "url": "assets/pages/providers/index.page.8d7c0cb0.js"
}, {
    "revision": null,
    "url": "assets/pages/racing/index.page.4706f7c7.js"
}, {
    "revision": null,
    "url": "assets/pages/recent/index.page.a02ab2e0.js"
}, {
    "revision": null,
    "url": "assets/pages/setting/index.page.175952ad.js"
}, {
    "revision": null,
    "url": "assets/pages/sponsorship/index.page.acea6707.js"
}, {
    "revision": null,
    "url": "assets/pages/sports/index.page.d03cc5a6.js"
}, {
    "revision": null,
    "url": "assets/pages/tagname/@tagName/index.page.ce100c3b.js"
}, {
    "revision": null,
    "url": "assets/pages/telegram/index.page.848110b3.js"
}, {
    "revision": null,
    "url": "assets/pages/themes/index.page.cd230bf1.js"
}, {
    "revision": null,
    "url": "assets/pages/trading/contract/index.page.32ee8463.js"
}, {
    "revision": null,
    "url": "assets/pages/trading/index.page.af9b56fc.js"
}, {
    "revision": null,
    "url": "assets/pages/trading/up-down/index.page.3c21e261.js"
}, {
    "revision": null,
    "url": "assets/pages/vip/index.page.cd2dbb8f.js"
}, {
    "revision": null,
    "url": "assets/pages/wallet/index.page.ca388b7c.js"
}, {
    "revision": null,
    "url": "assets/pixelIntegration.dd86ee86.js"
}, {
    "revision": null,
    "url": "assets/PostComment.9afc074a.css"
}, {
    "revision": null,
    "url": "assets/remote.56f88e23.css"
}, {
    "revision": null,
    "url": "assets/renderer/_default.page.client.2a9d27a9.js"
}, {
    "revision": null,
    "url": "assets/renderer/_error.page.e84739e6.js"
}, {
    "revision": null,
    "url": "assets/ReplyPop.78b08cc2.css"
}, {
    "revision": null,
    "url": "assets/SearchWrap.82780ba6.css"
}, {
    "revision": null,
    "url": "assets/tiktok.13611f23.js"
}, {
    "revision": null,
    "url": "assets/uni.webview.1.5.2.a00a2184.js"
}, {
    "revision": null,
    "url": "assets/website.05e10454.js"
}, {
    "revision": null,
    "url": "assets/website.1e831ef1.js"
}, {
    "revision": null,
    "url": "assets/website.283790d0.js"
}, {
    "revision": null,
    "url": "assets/website.28cd6412.js"
}, {
    "revision": null,
    "url": "assets/website.3ded2d7f.js"
}, {
    "revision": null,
    "url": "assets/website.54de85b3.js"
}, {
    "revision": null,
    "url": "assets/website.572c172a.js"
}, {
    "revision": null,
    "url": "assets/website.5905ac93.js"
}, {
    "revision": null,
    "url": "assets/website.591f8d06.js"
}, {
    "revision": null,
    "url": "assets/website.5c9baa81.js"
}, {
    "revision": null,
    "url": "assets/website.6048dbce.js"
}, {
    "revision": null,
    "url": "assets/website.68355870.js"
}, {
    "revision": null,
    "url": "assets/website.6bb99093.js"
}, {
    "revision": null,
    "url": "assets/website.77a4514c.js"
}, {
    "revision": null,
    "url": "assets/website.9620b925.js"
}, {
    "revision": null,
    "url": "assets/website.98033b6b.js"
}, {
    "revision": null,
    "url": "assets/website.9afd070f.js"
}, {
    "revision": null,
    "url": "assets/website.a4ee382b.js"
}, {
    "revision": null,
    "url": "assets/website.b10a6a4f.js"
}, {
    "revision": null,
    "url": "assets/website.bd0bb6bd.js"
}, {
    "revision": null,
    "url": "assets/website.c0d609e8.js"
}, {
    "revision": null,
    "url": "assets/website.c0e08b82.js"
}, {
    "revision": null,
    "url": "assets/website.c63ddbb5.js"
}, {
    "revision": null,
    "url": "assets/website.c836fc59.js"
}, {
    "revision": null,
    "url": "assets/website.ddc5e2b2.js"
}, {
    "revision": null,
    "url": "assets/website.ddebd669.js"
}, {
    "revision": null,
    "url": "assets/website.e862e8db.js"
}, {
    "revision": null,
    "url": "assets/website.f7f78899.js"
}, {
    "revision": "8c83f7ce7095448542790568d0e614e6",
    "url": "forum_script.js"
}, {
    "revision": "3930cda5a1af0293e4f625632c18738d",
    "url": "metamask-sdk.js"
}, {
    "revision": "88f8513a7b1dd3bcf81c2d44ec8ffa0e",
    "url": "softswiss.html"
}, {
    "revision": "2c75525d29652090ca50495091a8b598",
    "url": "android-chrome-192x192.png"
}, {
    "revision": "4baa61d7e38689a1922193b04476bd91",
    "url": "android-chrome-512x512.png"
}, {
    "revision": "34f2d328564d8408bc8f538c39395b17",
    "url": "manifest.webmanifest"
}].filter(a => !a.url.endsWith(".html"));
ae();
re(oe);
x(({
    request: a
}) => a.mode === "navigate", new ie({
    cacheName: "pages-cache"
}));
self.addEventListener("message", a => {
    a.data && a.data.type === "SKIP_WAITING" && self.skipWaiting()
});