var Xt = Object.defineProperty,
    Qt = Object.defineProperties;
var Zt = Object.getOwnPropertyDescriptors;
var Z = Object.getOwnPropertySymbols;
var te = Object.prototype.hasOwnProperty,
    ee = Object.prototype.propertyIsEnumerable;
var tt = (t, e, n) => e in t ? Xt(t, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : t[e] = n,
    x = (t, e) => {
        for (var n in e || (e = {})) te.call(e, n) && tt(t, n, e[n]);
        if (Z)
            for (var n of Z(e)) ee.call(e, n) && tt(t, n, e[n]);
        return t
    },
    L = (t, e) => Qt(t, Zt(e));
import {
    p as A,
    e as ne,
    g as et,
    a as $,
    b as u,
    i as re,
    c as nt,
    h as W,
    d as a,
    s as C,
    f as oe,
    j as d,
    k as S,
    m as O,
    l as ie,
    n as D,
    o as p,
    q as se,
    r as rt,
    t as ot,
    u as it,
    v as ae,
    w as st,
    x as _,
    y as le,
    z as ue,
    A as k,
    B as at,
    C as ce,
    D as de,
    E as V,
    F as ge,
    G as lt
} from "./chunk-c5b9a686.js";

function ut(t) {
    return !t.startsWith("/") && !t.startsWith(".") && !t.startsWith("?") && t !== ""
}

function pe(t, e) {
    let n = !1;
    return () => {
        n || (n = !0, setTimeout(() => {
            n = !1, t()
        }, e))
    }
}

function fe(t) {
    return A(t, "/").pathname
}

function j(t) {
    window.location.href = t
}

function P(t) {
    return typeof t != "object" || t === null ? !1 : Object.getPrototypeOf(t) === null ? !0 : t.constructor.name === "Object"
}

function he() {
    var t, e, n, r;
    const o = !!(!((e = (t = window.__REACT_DEVTOOLS_GLOBAL_HOOK__) === null || t === void 0 ? void 0 : t.renderers) === null || e === void 0) && e.size),
        i = !!(!((r = (n = window.__REACT_DEVTOOLS_GLOBAL_HOOK__) === null || n === void 0 ? void 0 : n.rendererInterfaces) === null || r === void 0) && r.size),
        s = !!window.__vite_plugin_react_preamble_installed__;
    return o || i || s
}

function me(t, e) {
    return (t == null ? void 0 : t.message) === (e == null ? void 0 : e.message)
}

function ye(t) {
    return new Promise(e => setTimeout(e, t))
}

function ct(t) {
    const e = t / 1e3;
    if (e < 120) {
        const n = dt(e);
        return `${n} second${gt(n)}`
    } {
        const n = e / 60,
            r = dt(n);
        return `${r} minute${gt(r)}`
    }
}

function dt(t) {
    let e = t.toFixed(1);
    return e.endsWith(".0") && (e = e.slice(0, -2)), e
}

function gt(t) {
    return t === "1" ? "" : "s"
}

function M(t, e, n) {
    const {
        timeoutErr: r,
        timeoutWarn: o
    } = we(e);
    let i, s;
    const l = new Promise((f, v) => {
            i = y => {
                c(), f(y)
            }, s = y => {
                c(), v(y)
            }
        }),
        c = () => {
            clearTimeout(h), clearTimeout(m)
        },
        h = setTimeout(() => {
            const f = `${ne}[Warning] The ${e}() hook of ${n} is taking more than ${ct(o)}`
        }, o),
        m = setTimeout(() => {
            const f = et(`Hook timeout: the ${e}() hook of ${n} didn't finish after ${ct(r)}`);
            s(f)
        }, r);
    return (async () => {
        try {
            const f = await t();
            i(f)
        } catch (f) {
            s(f)
        }
    })(), l
}

function we(t) {
    let e = 4e4,
        n = 4 * 1e3;
    return t === "onBeforeRoute" && (e = 5 * 1e3, n = 1 * 1e3), t === "onBeforePrerender" && (e = 10 * 60 * 1e3, n = 30 * 1e3), {
        timeoutErr: e,
        timeoutWarn: n
    }
}
const U = $("navigate.ts", {});
async function ve(t, {
    keepScrollPosition: e = !1,
    overwriteLastHistoryEntry: n = !1
} = {}) {
    u(re(), "[`navigate(url)`] The `navigate(url)` function is only callable in the browser but you are calling it in Node.js."), u(U.navigate, "navigate() is only available when using Client Routing, see https://vite-plugin-ssr.com/navigate"), u(t, "[navigate(url)] Missing argument `url`."), u(typeof t == "string", '[navigate(url)] Argument `url` should be a string (but we got `typeof url === "' + typeof t + '"`.'), u(typeof e == "boolean", '[navigate(url, { keepScrollPosition })] Argument `keepScrollPosition` should be a boolean (but we got `typeof keepScrollPosition === "' + typeof e + '"`.'), u(typeof n == "boolean", '[navigate(url, { overwriteLastHistoryEntry })] Argument `overwriteLastHistoryEntry` should be a boolean (but we got `typeof keepScrollPosition === "' + typeof n + '"`.'), u(t.startsWith("/"), "[navigate(url)] Argument `url` should start with a leading `/`."), await U.navigate(t, {
        keepScrollPosition: e,
        overwriteLastHistoryEntry: n
    })
}

function be(t) {
    U.navigate = t
}

function pt(t) {
    return "[" + t.map(e => "'" + e + "'").join(", ") + "]"
}

function Y(t, e) {
    const n = Object.getOwnPropertyDescriptor(t, e);
    return !!n && !("value" in n) && !!n.get
}

function ft(t) {
    return typeof t == "object" && t !== null && "then" in t && nt(t.then)
}

function Se(t, e) {
    if (!P(t)) return !1;
    for (const n of Object.keys(t))
        if (!e.includes(n)) return !1;
    return !0
}

function Pe(t) {
    return typeof t == "object" && t !== null && Object.values(t).every(e => typeof e == "string")
}

function Re(t, e) {
    const n = e.filter(({
        filesystemRoot: o
    }) => t.startsWith(o)).sort(W(({
        filesystemRoot: o
    }) => o.length))[0];
    let r;
    if (n) {
        const {
            filesystemRoot: o,
            routeRoot: i
        } = n, s = {
            pageId: t,
            filesystemRoot: o,
            routeRoot: i
        };
        a(i.startsWith("/") && t.startsWith("/") && o.startsWith("/"), s), a(t.startsWith(o), s), o !== "/" ? (a(!o.endsWith("/"), s), r = C(t, o.length, 0)) : r = t, a(r.startsWith("/"), s), r = i + (i.endsWith("/") ? "" : "/") + C(r, 1, 0)
    } else r = t;
    return a(r.startsWith("/")), r = r.split("/").filter(o => o !== "pages" && o !== "src" && o !== "index").join("/"), a(!r.includes(".page.")), a(!r.endsWith(".")), r.endsWith("/index") && (r = C(r, 0, -6)), r === "" && (r = "/"), a(r.startsWith("/")), a(!r.endsWith("/") || r === "/"), r
}
async function xe(t, e) {
    await Promise.all(t.filter(o => o.fileType === ".page.route").map(o => {
        var i;
        return (i = o.loadFile) === null || i === void 0 ? void 0 : i.call(o)
    }));
    const {
        onBeforeRouteHook: n,
        filesystemRoots: r
    } = Te(t);
    return {
        pageRoutes: Oe(r, t, e),
        onBeforeRouteHook: n
    }
}

function Oe(t, e, n) {
    const r = [];
    return n.filter(o => !oe(o)).forEach(o => {
        const i = Ce(o, e);
        if (i) {
            const {
                filePath: s,
                fileExports: l
            } = i;
            if (a(l), u("default" in l, `${s} should have a default export.`), d(l, "default", "string")) {
                const c = l.default;
                u(c.startsWith("/"), `A Route String should start with a leading \`/\` but \`${s}\` has \`export default '${c}'\`. Make sure to \`export default '/${c}'\` instead.`), r.push({
                    pageId: o,
                    routeString: c,
                    pageRouteFilePath: s,
                    routeType: "STRING"
                });
                return
            }
            if (d(l, "default", "function")) {
                const c = l.default;
                let h = !1;
                const m = "iKnowThePerformanceRisksOfAsyncRouteFunctions";
                m in l && (u(d(l, m, "boolean"), `The export \`${m}\` of ${s} should be a boolean.`), h = l[m]), r.push({
                    pageId: o,
                    routeFunction: c,
                    pageRouteFilePath: s,
                    allowAsync: h,
                    routeType: "FUNCTION"
                });
                return
            }
            u(!1, `The default export of ${s} should be a string or a function.`)
        } else {
            const s = Re(o, t);
            a(s.startsWith("/")), a(!s.endsWith("/") || s === "/"), r.push({
                pageId: o,
                routeString: s,
                pageRouteFilePath: null,
                routeType: "FILESYSTEM"
            })
        }
    }), r
}

function Te(t) {
    let e = null;
    const n = [];
    return t.filter(r => r.fileType === ".page.route" && r.isDefaultPageFile).forEach(({
        filePath: r,
        fileExports: o
    }) => {
        if (a(o), "onBeforeRoute" in o) {
            u(d(o, "onBeforeRoute", "function"), `\`export { onBeforeRoute }\` of ${r} should be a function.`);
            const {
                onBeforeRoute: i
            } = o;
            e = {
                filePath: r,
                onBeforeRoute: i
            }
        }
        "filesystemRoutingRoot" in o && (u(d(o, "filesystemRoutingRoot", "string"), `\`export { filesystemRoutingRoot }\` of ${r} should be a string.`), u(d(o, "filesystemRoutingRoot", "string"), `\`export { filesystemRoutingRoot }\` of ${r} is \`'${o.filesystemRoutingRoot}'\` but it should start with a leading slash \`/\`.`), n.push({
            filesystemRoot: _e(r),
            routeRoot: o.filesystemRoutingRoot
        }))
    }), {
        onBeforeRouteHook: e,
        filesystemRoots: n
    }
}

function Ce(t, e) {
    return e.find(n => n.pageId === t && n.fileType === ".page.route")
}

function _e(t) {
    a(t.startsWith("/")), a(!t.endsWith("/"));
    const e = t.split("/"),
        n = C(e, 0, -1).join("/") || "/";
    return a(n.startsWith("/")), a(!n.endsWith("/") || n === "/"), n
}

function ht(t) {
    a(t.urlOriginal), "urlPathname" in t ? a(Y(t, "urlPathname")) : Object.defineProperty(t, "urlPathname", {
        get: yt,
        enumerable: !0,
        configurable: !0
    }), "url" in t ? a(Y(t, "url")) : Object.defineProperty(t, "url", {
        get: ke,
        enumerable: !1,
        configurable: !0
    }), "urlParsed" in t ? a(Y(t, "urlParsed")) : Object.defineProperty(t, "urlParsed", {
        get: Ee,
        enumerable: !0,
        configurable: !0
    })
}

function mt(t) {
    let e = t._urlHandler;
    e || (e = o => o);
    const n = e(t.urlOriginal),
        r = t._baseServer;
    return a(r.startsWith("/")), A(n, r)
}

function yt() {
    const {
        pathname: t
    } = mt(this), e = t;
    return a(e.startsWith("/")), e
}

function ke() {
    return S(!1, "`pageContext.url` is outdated. Use `pageContext.urlPathname`, `pageContext.urlParsed`, or `pageContext.urlOriginal` instead. (See https://vite-plugin-ssr.com/migration/0.4.23 for more information.)", {
        onlyOnce: !0,
        showStackTrace: !0
    }), yt.call(this)
}

function Ee() {
    const t = mt(this),
        {
            origin: e,
            pathname: n,
            pathnameOriginal: r,
            search: o,
            searchAll: i,
            searchOriginal: s,
            hash: l,
            hashOriginal: c
        } = t,
        h = {
            origin: e,
            pathname: n,
            pathnameOriginal: r,
            search: o,
            searchAll: i,
            searchOriginal: s,
            hash: l,
            hashOriginal: c,
            get hashString() {
                return S(!1, "`pageContext.urlParsed.hashString` has been renamed to `pageContext.urlParsed.hashOriginal`", {
                    onlyOnce: !0,
                    showStackTrace: !0
                }), c
            },
            get searchString() {
                return S(!1, "`pageContext.urlParsed.searchString` has been renamed to `pageContext.urlParsed.searchOriginal`", {
                    onlyOnce: !0,
                    showStackTrace: !0
                }), s
            }
        };
    return wt(h, "hashString"), wt(h, "searchString"), h
}

function wt(t, e) {
    const n = Object.getOwnPropertyDescriptor(t, e);
    Object.defineProperty(t, e, L(x({}, n), {
        enumerable: !1
    }))
}

function Ie(t) {
    a(typeof t.urlOriginal == "string"), a(typeof t.urlPathname == "string"), a(P(t.urlParsed)), a(t.urlPathname === t.urlParsed.pathname)
}
const vt = "@",
    G = ":";

function K(t, e) {
    u(t === "*" || t.startsWith("/"), `Invalid route string \`${t}\`${t===""?" (empty string)":""}: route strings should start with a leading slash \`/\` (or be \`*\`).`), a(e.startsWith("/"));
    const n = t.split("/"),
        r = e.split("/"),
        o = {};
    Fe(t), t === "*" && (t = "/*");
    for (let i = 0; i < Math.max(n.length, r.length); i++) {
        const s = n[i],
            l = r[i];
        if (s === "*") return o["*"] = r.slice(Math.max(1, i)).join("/"), {
            routeParams: o
        };
        if (s && N(s)) {
            if (S(!s.startsWith(G), `Outdated route string \`${t}\`, use \`${t.split(G).join(vt)}\` instead.`, {
                    showStackTrace: !1,
                    onlyOnce: !0
                }), !l) return null;
            o[s.slice(1)] = l
        } else if ((s || "") !== (l || "")) return null
    }
    return {
        routeParams: o
    }
}

function Fe(t) {
    const e = t.split("*").length - 1;
    u(e <= 1, `Invalid route string \`${t}\`: route strings are not allowed to contain more than one glob character \`*\`.`), u(e === 0 || e === 1 && t.endsWith("*"), `Invalid route string \`${t}\`: make sure your route string ends with the glob character \`*\`.`)
}

function E(t) {
    const e = t.split("/").filter(s => s !== "" && s !== "*");
    let n = 0;
    for (const s of e) {
        if (N(s)) break;
        n++
    }
    const r = e.filter(s => !N(s)).length,
        o = e.filter(s => N(s)).length,
        i = t.endsWith("*");
    return {
        numberOfParameterSegments: o,
        numberOfStaticSegmentsBeginning: n,
        numberOfStaticSegements: r,
        isCatchAll: i
    }
}

function N(t) {
    return t.startsWith(vt) || t.startsWith(G)
}

function bt(t) {
    const e = K(t, t);
    return a(e), Object.keys(e.routeParams).length === 0
}

function Ae(t) {
    t.sort($e).sort(O(e => e.routeType === "FUNCTION" && !!e.precedence && e.precedence < 0)).sort(O(e => e.routeType === "STRING" && bt(e.routeString) === !1)).sort(O(e => e.routeType === "FUNCTION" && !e.precedence)).sort(O(e => e.routeType === "STRING" && bt(e.routeString) === !0)).sort(O(e => e.routeType === "FILESYSTEM")).sort(O(e => e.routeType === "FUNCTION" && !!e.precedence && e.precedence > 0))
}

function $e(t, e) {
    var n, r; {
        const o = (n = t.precedence) !== null && n !== void 0 ? n : 0,
            i = (r = e.precedence) !== null && r !== void 0 ? r : 0;
        if (o !== i) return o > i ? -1 : 1
    }
    if (!e.routeString || !t.routeString) return 0; {
        const o = W(i => E(i).numberOfStaticSegmentsBeginning)(t.routeString, e.routeString);
        if (o !== 0) return o
    } {
        const o = W(i => E(i).numberOfStaticSegements)(t.routeString, e.routeString);
        if (o !== 0) return o
    } {
        const o = W(i => E(i).numberOfParameterSegments)(t.routeString, e.routeString);
        if (o !== 0) return o
    } {
        if (E(e.routeString).isCatchAll) return -1;
        if (E(t.routeString).isCatchAll) return 1
    }
    return 0
}
async function We(t, e, n, r) {
    Ie(n);
    let o = t(n);
    if (u(!ft(o) || e, `The Route Function ${r} returned a promise; async route functions are opt-in, see https://vite-plugin-ssr.com/route-function#async`), o = await o, o === !1) return null;
    if (o === !0 && (o = {}), u(P(o), `The Route Function ${r} should return a boolean or a plain JavaScript object, instead it returns \`${d(o,"constructor")?o.constructor:o}\`.`), "match" in o) {
        const {
            match: l
        } = o;
        if (u(typeof l == "boolean", `The \`match\` value returned by the Route Function ${r} should be a boolean.`), !l) return null
    }
    let i = null;
    "precedence" in o && (i = o.precedence, u(typeof i == "number", `The \`precedence\` value returned by the Route Function ${r} should be a number.`)), St(o, `The \`routeParams\` object returned by the Route Function ${r} should`);
    const s = o.routeParams || {};
    return u(!("pageContext" in o), "Providing `pageContext` in Route Functions is forbidden, see https://vite-plugin-ssr.com/route-function#async"), a(P(s)), Object.keys(o).forEach(l => {
        u(l === "match" || l === "routeParams" || l === "precedence", `The Route Function ${r} returned an object with an unknown key \`{ ${l} }\`. Allowed keys: ['match', 'routeParams', 'precedence'].`)
    }), {
        precedence: i,
        routeParams: s
    }
}

function St(t, e) {
    a(e.endsWith(" should")), d(t, "routeParams") && (a(e.endsWith(" should")), u(P(t.routeParams), `${e} be a plain JavaScript object.`), u(Pe(t.routeParams), `${e} only hold string values.`))
}

function Pt(t, {
    hook: e,
    errorMessagePrefix: n,
    canBePromise: r
}) {
    if (!n) {
        a(e);
        const {
            hookName: o,
            hookFilePath: i
        } = e;
        a(i.startsWith("/") || ie(i)), a(!o.endsWith(")")), n = `The \`pageContext\` provided by the ${o}() hook of ${i}`
    }
    if (r && !D(t)) {
        u(nt(t) || ft(t), `${n} should be an object, or an async function https://vite-plugin-ssr.com/stream#initial-data-after-stream-end`);
        return
    }
    u(D(t), `${n} should be an object.`), u(!("_objectCreatedByVitePluginSsr" in t), `${n} should not be the whole \`pageContext\` object, see https://vite-plugin-ssr.com/pageContext-manipulation#do-not-return-entire-pagecontext`), S(!("_pageId" in t), "You are using `onBeforeRoute()` to override vite-plugin-ssr routing. This is experimental: make sure to contact a vite-plugin-ssr maintainer before using this.", {
        showStackTrace: !1,
        onlyOnce: !0
    })
}
async function je(t, e) {
    const n = await t.onBeforeRoute(e),
        r = `The \`onBeforeRoute()\` hook exported by ${t.filePath}`;
    if (u(n == null || Se(n, ["pageContext"]) && d(n, "pageContext"), `${r} should return \`null\`, \`undefined\`, or a plain JavaScript object \`{ pageContext: { /* ... */ } }\`.`), n == null) return null;
    if (u(d(n, "pageContext", "object"), `${r} returned \`{ pageContext }\` but \`pageContext\` should be a plain JavaScript object.`), d(n.pageContext, "_pageId") && !d(n.pageContext, "_pageId", "null")) {
        const i = `${r} returned \`{ pageContext: { _pageId } }\` but \`_pageId\` should be`;
        u(d(n.pageContext, "_pageId", "string"), `${i} a string or \`null\``), u(e._allPageIds.includes(n.pageContext._pageId), `${i} one of following values: \`[${e._allPageIds.map(s=>`'${s}'`).join(", ")}]\`.`)
    }
    d(n.pageContext, "routeParams") && St(n.pageContext, `${r} returned \`{ pageContext: { routeParams } }\` but \`routeParams\` should`);
    const o = {};
    return d(n.pageContext, "url") && (S(!1, `${r} returned \`{ pageContext: { url } }\` but \`pageContext.url\` has been renamed to \`pageContext.urlOriginal\`. Return \`{ pageContext: { urlOriginal } }\` instead. (See https://vite-plugin-ssr.com/migration/0.4.23 for more information.)`, {
        showStackTrace: !1,
        onlyOnce: !0
    }), n.pageContext.urlOriginal = n.pageContext.url, delete n.pageContext.url), d(n.pageContext, "urlOriginal") && (u(d(n.pageContext, "urlOriginal", "string"), `${r} returned \`{ pageContext: { urlOriginal } }\` but \`urlOriginal\` should be a string`), p(o, {
        _urlPristine: e.urlOriginal
    })), Pt(n.pageContext, {
        hook: {
            hookFilePath: t.filePath,
            hookName: "onBeforeRoute"
        }
    }), p(o, n.pageContext), o
}
var B;

function Rt(...t) {
    var e, n;
    B || (B = (n = (e = globalThis).__brillout_debug_createDebugger) === null || n === void 0 ? void 0 : n.call(e, "vps:routing")), B && B(...t)
}
async function xt(t) {
    ht(t);
    const {
        pageRoutes: e,
        onBeforeRouteHook: n
    } = await xe(t._pageFilesAll, t._allPageIds);
    Rt("Pages routes:", e);
    const r = {};
    if (n) {
        const c = await je(n, t);
        if (c) {
            if (p(r, c), d(r, "_pageId", "string") || d(r, "_pageId", "null")) return d(r, "routeParams") ? a(d(r, "routeParams", "object")) : p(r, {
                routeParams: {}
            }), p(r, {
                _routingProvidedByOnBeforeRouteHook: !0,
                _routeMatches: "CUSTOM_ROUTE"
            }), {
                pageContextAddendum: r
            };
            p(t, r)
        }
    }
    p(r, {
        _routingProvidedByOnBeforeRouteHook: !1
    });
    const o = t._allPageIds;
    a(o.length >= 0), u(t._pageFilesAll.length > 0, "No *.page.js file found. You must create at least one *.page.js file."), u(o.length > 0, "You must create at least one *.page.js file that isn't _default.page.*");
    const {
        urlPathname: i
    } = t;
    a(i.startsWith("/"));
    const s = [];
    await Promise.all(e.map(async c => {
        const {
            pageId: h,
            routeType: m
        } = c;
        if (c.routeType === "FILESYSTEM") {
            const {
                routeString: f
            } = c, v = K(f, i);
            if (v) {
                const {
                    routeParams: y
                } = v;
                s.push({
                    pageId: h,
                    routeParams: y,
                    routeString: f,
                    routeType: m
                })
            }
            return
        }
        if (c.routeType === "STRING") {
            const {
                routeString: f
            } = c, v = K(f, i);
            if (v) {
                const {
                    routeParams: y
                } = v;
                a(m === "STRING"), s.push({
                    pageId: h,
                    routeString: f,
                    routeParams: y,
                    routeType: m
                })
            }
            return
        }
        if (c.routeType === "FUNCTION") {
            const {
                routeFunction: f,
                allowAsync: v,
                pageRouteFilePath: y
            } = c, g = await We(f, v, t, y);
            if (g) {
                const {
                    routeParams: F,
                    precedence: T
                } = g;
                s.push({
                    pageId: h,
                    precedence: T,
                    routeParams: F,
                    routeType: m
                })
            }
            return
        }
        a(!1)
    })), Ae(s);
    const l = s[0];
    if (Rt(`Route matches for URL \`${i}\` (in precedence order):`, s), p(r, {
            _routeMatches: s
        }), !l) return p(r, {
        _pageId: null,
        routeParams: {}
    }), {
        pageContextAddendum: r
    }; {
        const {
            routeParams: c
        } = l;
        a(P(c)), p(r, {
            _pageId: l.pageId,
            routeParams: l.routeParams
        })
    }
    return {
        pageContextAddendum: r
    }
}

function Ot() {
    const t = "/";
    return a(Ne(t)), t
}

function Ne(t) {
    return t.startsWith("/")
}
const J = $("createPageContext.ts", {});
async function Tt(t) {
    J.pageFilesData || (J.pageFilesData = await se(!0));
    const {
        pageFilesAll: e,
        allPageIds: n
    } = J.pageFilesData, r = Ot();
    a(rt(r));
    const o = {
        _objectCreatedByVitePluginSsr: !0,
        _urlHandler: null,
        _baseServer: r,
        _isProduction: !0,
        _pageFilesAll: e,
        _allPageIds: n
    };
    return p(o, t), ht(o), o
}
async function Ct(t) {
    const e = await Tt({
            urlOriginal: t
        }),
        n = await xt(e),
        r = e._pageFilesAll;
    if (!("pageContextAddendum" in n)) return {
        pageId: null,
        pageFilesAll: r
    };
    const o = n.pageContextAddendum._pageId;
    return o ? {
        pageId: o,
        pageFilesAll: r
    } : {
        pageId: null,
        pageFilesAll: r
    }
}

function I(t) {
    return t.fileType === ".css" ? [] : t.exportNames ? t.exportNames : (a(t.fileExports, t.filePath), Object.keys(t.fileExports))
}

function Be({
    pageFilesClientSide: t,
    pageFilesServerSide: e,
    pageId: n
}) {
    return {
        isHtmlOnly: r(),
        isClientRouting: i()
    };

    function r() {
        return e.some(s => s.pageId === n && s.fileType === ".page") ? (o(), !1) : !(!e.some(s => s.pageId === n && s.fileType === ".page.server") || t.some(s => s.pageId === n && s.fileType === ".page.client" && I(s).includes("render")))
    }

    function o() {
        const s = t.some(l => I(l).includes("render"));
        u(s, ["No client-side `render()` hook found.", "See https://vite-plugin-ssr.com/render-modes for more information.", ["Loaded client-side page files (none of them `export { render }`):", ...t.map((l, c) => ` (${c+1}): ${l.filePath}`)].join(`
`)].join(" "))
    }

    function i() {
        return t.some(s => I(s).includes("clientRouting"))
    }
}

function He({
    pageFilesClientSide: t,
    pageFilesServerSide: e,
    isHtmlOnly: n,
    isClientRouting: r
}) {
    let o = [];
    const i = e.filter(l => !t.includes(l)),
        s = [];
    if (s.push(...t.map(l => ({
            id: l.filePath,
            onlyAssets: !1
        }))), s.push(...i.map(l => ({
            id: l.filePath,
            onlyAssets: !0
        }))), n) o = t.map(l => l.filePath);
    else {
        const l = r ? "@@vite-plugin-ssr/dist/esm/client/router/entry.js" : "@@vite-plugin-ssr/dist/esm/client/entry.js";
        s.push({
            id: l,
            onlyAssets: !1
        }), o = [l]
    }
    return {
        clientEntries: o,
        clientDependencies: s
    }
}

function Le(t, e) {
    let n = ot(t, e);
    const r = it(t, e),
        {
            isHtmlOnly: o,
            isClientRouting: i
        } = Be({
            pageFilesClientSide: n,
            pageFilesServerSide: r,
            pageId: e
        });
    o && (n = n.filter(c => c.isEnv("CLIENT_ONLY") && !I(c).includes("render")), n = Ve(n));
    const {
        clientEntries: s,
        clientDependencies: l
    } = He({
        pageFilesClientSide: n,
        pageFilesServerSide: r,
        isHtmlOnly: o,
        isClientRouting: i
    });
    return {
        isHtmlOnly: o,
        isClientRouting: i,
        clientEntries: s,
        clientDependencies: l,
        pageFilesClientSide: n,
        pageFilesServerSide: r
    }
}
async function De(t, e, {
    sharedPageFilesAlreadyLoaded: n
}) {
    const r = ot(t, e);
    await Promise.all(r.map(async o => {
        var i;
        a(o.isEnv("CLIENT_ONLY") || o.isEnv("CLIENT_AND_SERVER")), !(n && o.isEnv("CLIENT_AND_SERVER")) && await ((i = o.loadExportNames) === null || i === void 0 ? void 0 : i.call(o))
    }))
}

function Ve(t) {
    const e = [];
    for (const n of t)
        if (e.push(n), I(n).includes("overrideDefaultPages")) break;
    return e
}
async function _t(t) {
    const {
        pageId: e,
        pageFilesAll: n
    } = await Ct(t);
    if (!e) return !1;
    await De(n, e, {
        sharedPageFilesAlreadyLoaded: !1
    });
    const {
        isHtmlOnly: r,
        isClientRouting: o
    } = Le(n, e);
    return !r && o
}

function kt(t) {
    const e = t.getAttribute("href");
    return !!(e === null || e === "" || ut(e) || Me(t) || Ue(e) || !Ye(e) || !ae(e))
}

function Me(t) {
    const e = t.getAttribute("target"),
        n = t.getAttribute("rel");
    return e === "_blank" || e === "_external" || n === "external" || t.hasAttribute("download")
}

function Ue(t) {
    if (t.startsWith("#")) return !0;
    const e = n => n.split("#")[0];
    return !!(t.includes("#") && e(t) === e(window.location.href))
}

function Ye(t) {
    const e = Ot();
    a(rt(e));
    const {
        hasBaseServer: n
    } = A(t, e);
    return n
}

function Ge(t, e) {
    return {
        prefetchPageContext: !1,
        prefetchStaticAssets: Ke(t, e)
    }
}

function Ke(t, e) {
    let n = Je(e),
        r = (() => {
            if (n !== null) return n === !0 ? {
                when: "VIEWPORT"
            } : {
                when: "HOVER"
            };
            if ("prefetchLinks" in t.exports && u(n === null, "`export { prefetchLinks }` is deprecated, use `export { prefetchStaticAssets }` instead."), "prefetchStaticAssets" in t.exports) {
                const {
                    prefetchStaticAssets: o
                } = t.exports;
                if (o === !1) return !1;
                const i = "`prefetchStaticAssets` should be either `false`, `{ when: 'VIEWPORT' }`, or `{ when: 'HOVER' }`";
                u(P(o), i);
                const s = Object.keys(o);
                u(s.length === 1 && s[0] === "when", i);
                const {
                    when: l
                } = o;
                if (l === "HOVER" || l === "VIEWPORT") return {
                    when: l
                };
                u(!1, i)
            }
            return {
                when: "HOVER"
            }
        })();
    return r && r.when === "VIEWPORT" && !t._isProduction && (st(!1, "Viewport prefetching is disabled in development", {
        onlyOnce: !0
    }), r = {
        when: "HOVER"
    }), r
}

function Je(t) {
    let e = t.getAttribute("data-prefetch");
    if (S(e === null, "The `data-prefetch` attribute is outdated.", {
            showStackTrace: !1,
            onlyOnce: !0
        }), e === null) return null;
    if (a(typeof e == "string"), e === "true") return !0;
    if (e === "false") return !1;
    u(!1, `Wrong data-prefetch value: \`"${e}"\`; it should be \`"true"\` or \`"false"\`.`)
}
const Et = new Map;

function It(t) {
    const e = At(t);
    return Et.has(e)
}

function Ft(t) {
    const e = At(t);
    Et.set(e, !0)
}

function At(t) {
    return fe(t)
}
const $t = $("navigationState.ts", {}),
    ze = _(),
    Wt = {
        markNavigationChange() {
            $t.navigationChanged = !0
        },
        get noNavigationChangeYet() {
            return !$t.navigationChanged && this.isFirstUrl(_())
        },
        isFirstUrl(t) {
            return t === ze
        }
    };
async function qe(t, e) {
    const n = it(t, e).filter(r => r.fileType === ".page.server");
    return await Promise.all(n.map(async r => {
        r.exportNames || (a(r.loadExportNames, e), await r.loadExportNames())
    })), {
        hasOnBeforeRenderServerSideOnlyHook: n.some(({
            exportNames: r
        }) => (a(r), r.includes("onBeforeRender")))
    }
}

function Xe(t, e, n, r, o = !1) {
    a(!e.endsWith(")"));
    const i = `The ${e}() hook of ${r}`;
    u(t == null || P(t), `${i} should return \`null\`, \`undefined\`, or a plain JavaScript object.`), t != null && (Qe(t, n, i), "pageContext" in t && Pt(t.pageContext, {
        hook: {
            hookName: e,
            hookFilePath: r
        },
        canBePromise: o
    }))
}

function Qe(t, e, n) {
    const r = [],
        o = Object.keys(t);
    for (const i of o) e.includes(i) || r.push(i);
    u(r.length === 0, [n, "returned an object with unknown keys", pt(r) + ".", "Only following keys are allowed:", pt(e) + "."].join(" "))
}

function jt(t) {
    return a([!0, !1].includes(t.isHydration)), a([!0, !1, null].includes(t.isBackwardNavigation)), le(t)
}
const Nt = ["urlPathname", "urlParsed"],
    Ze = ["Page", "pageExports", "exports"];

function Bt(t) {
    [...Ze, ...Nt].forEach(e => {
        e in t && (Nt.includes(e) ? (a(e.startsWith("url")), S(!1, `\`pageContext.${e}\` is already available in the browser when using Client Routing; including \`${e}\` in \`passToClient\` has no effect.`, {
            showStackTrace: !1,
            onlyOnce: !0
        })) : S(!1, `\`pageContext.${e}\` is a built-in that cannot be overriden; including \`${e}\` in \`passToClient\` has no effect.`, {
            showStackTrace: !1,
            onlyOnce: !0
        }), delete t[e])
    })
}
const tn = "/";

function en(t, e, n) {
    const {
        pathnameOriginal: r,
        searchOriginal: o,
        hashOriginal: i
    } = A(t, tn);
    t.startsWith("/") && a(t === `${r}${o||""}${i||""}`, {
        url: t
    });
    const s = r.endsWith("/");
    let l;
    return n && r !== "/" ? (s ? l = C(r, 0, -1) : l = r, a(!l.endsWith("/"), {
        url: t
    }), a(l !== "")) : l = r + (s ? "" : "/") + "index", a(l), l = l + e, `${l}${o||""}${i||""}`
}
const nn = ".pageContext.json",
    rn = !1;

function on(t) {
    return en(t, nn, rn)
}
async function sn(t) {
    return t._isFirstRenderAttempt && Wt.isFirstUrl(t.urlOriginal) ? (a(d(t, "_isFirstRenderAttempt", "true")), an(t)) : (a(d(t, "_isFirstRenderAttempt", "false")), un(t))
}
async function an(t) {
    const e = ue();
    return Bt(e), p(e, {
        isHydration: !0,
        _comesDirectlyFromServer: !0
    }), p(e, await k(t._pageFilesAll, e._pageId)), e
}
async function ln(t) {
    const e = at(t._allPageIds);
    if (!e) throw new Error("No error page");
    const n = {
        isHydration: !1,
        _pageId: e,
        _pageContextRetrievedFromServer: null,
        _comesDirectlyFromServer: !1
    };
    return p(n, await k(t._pageFilesAll, n._pageId)), n
}
async function un(t) {
    let e = {};
    p(e, {
        isHydration: !1
    }), p(e, await dn(t)), p(e, await k(t._pageFilesAll, e._pageId));
    const n = await cn(x(x({}, t), e));
    if (a([!0, !1].includes(n._comesDirectlyFromServer)), n._isError) {
        e = {}, a(n._comesDirectlyFromServer === !0), a(d(n, "is404", "boolean")), a(d(n, "pageProps", "object")), a(d(n.pageProps, "is404", "boolean")), a(!("serverSideError" in n));
        const r = at(t._allPageIds);
        return a(r), p(e, {
            isHydration: !1,
            _pageId: r
        }), p(e, n), p(e, await k(t._pageFilesAll, e._pageId)), e
    } else return p(e, n), e
}
async function cn(t) {
    const e = ce(t, "onBeforeRender");
    if (e) {
        const n = e.hook,
            r = {
                _comesDirectlyFromServer: !1,
                _pageContextRetrievedFromServer: null
            },
            o = jt(x(x({}, t), r)),
            i = await M(() => n(o), "onBeforeRender", e.filePath);
        Xe(i, "onBeforeRender", ["pageContext"], e.filePath);
        const s = i == null ? void 0 : i.pageContext;
        return p(r, s), r
    } else if ((await qe(t._pageFilesAll, t._pageId)).hasOnBeforeRenderServerSideOnlyHook) {
        const n = await gn(t),
            r = {};
        return Object.assign(r, n), p(r, {
            _comesDirectlyFromServer: !0,
            _pageContextRetrievedFromServer: n
        }), r
    }
    return {
        _comesDirectlyFromServer: !1,
        _pageContextRetrievedFromServer: null
    }
}
async function dn(t) {
    const e = (await xt(t)).pageContextAddendum;
    if (!e._pageId) throw new Error("No routing match");
    return a(d(e, "_pageId", "string")), e
}
async function gn(t) {
    var e;
    const n = on((e = t._urlPristine) !== null && e !== void 0 ? e : t.urlOriginal),
        r = await fetch(n); {
        const l = r.headers.get("content-type"),
            c = l && l.includes("application/json");
        if (!c && r.status === 404) {
            j(t.urlOriginal);
            const h = new Error("Page doesn't exist");
            throw Object.assign(h, {
                _abortRendering: !0
            }), h
        }
        u(c, `Wrong HTTP Response Header \`content-type\` value for URL ${n} (it should be \`application/json\` but we got \`${l}\`). Make sure to use \`pageContext.httpResponse.contentType\`, see https://github.com/brillout/vite-plugin-ssr/issues/191`)
    }
    const o = await r.text(),
        i = de(o);
    if ("serverSideError" in i) throw et("`pageContext` could not be fetched from the server as an error occurred on the server; check your server logs.");
    a(d(i, "pageContext"));
    const s = i.pageContext;
    return a(P(s)), a(d(s, "_pageId", "string")), Bt(s), s
}

function Ht() {
    let t = window.history.state;
    t || (t = {});
    let e = !1;
    "timestamp" in t || (e = !0, t.timestamp = Dt()), "scrollPosition" in t || (e = !0, t.scrollPosition = Lt()), Mt(t), e && q(t)
}

function z() {
    const t = window.history.state || {};
    return Mt(t), t
}

function Lt() {
    return {
        x: window.scrollX,
        y: window.scrollY
    }
}

function Dt() {
    return new Date().getTime()
}

function Vt() {
    const t = Lt(),
        e = z();
    q(L(x({}, e), {
        scrollPosition: t
    }))
}

function pn(t, e) {
    if (e) q(z(), t);
    else {
        const n = Dt();
        fn({
            timestamp: n,
            scrollPosition: null
        }, t)
    }
}

function Mt(t) {
    if (a(D(t)), "timestamp" in t) {
        const {
            timestamp: e
        } = t;
        a(typeof e == "number")
    }
    if ("scrollPosition" in t) {
        const {
            scrollPosition: e
        } = t;
        e !== null && a(d(e, "x", "number") && d(e, "y", "number"))
    }
}

function q(t, e) {
    window.history.replaceState(t, "", e != null ? e : null)
}

function fn(t, e) {
    window.history.pushState(t, "", e)
}
const w = $("useClientRouter.ts", {
    previousState: H()
});
Pn(), Ht();

function Ut() {
    w.clientRoutingIsDisabled = !0, st(!1, "New deployed frontend detected. The next page navigation will use Server Routing instead of Client Routing.", {
        onlyOnce: !0
    })
}

function hn() {
    bn(), mn((o, {
        keepScrollPosition: i
    }) => {
        r({
            scrollTarget: i ? "preserve-scroll" : "scroll-to-top-or-hash",
            url: o,
            isBackwardNavigation: !1,
            checkClientSideRenderable: !0
        })
    }), yn((o, i) => {
        r({
            scrollTarget: o,
            isBackwardNavigation: i
        })
    }), be(async (o, {
        keepScrollPosition: i = !1,
        overwriteLastHistoryEntry: s = !1
    } = {}) => {
        await r({
            scrollTarget: i ? "preserve-scroll" : "scroll-to-top-or-hash",
            url: o,
            overwriteLastHistoryEntry: s,
            isBackwardNavigation: !1,
            checkClientSideRenderable: !0
        })
    });
    let t = 0,
        e, n = !1;
    r({
        scrollTarget: "preserve-scroll",
        isBackwardNavigation: null
    });
    return;
    async function r({
        scrollTarget: o,
        url: i = _(),
        overwriteLastHistoryEntry: s = !1,
        isBackwardNavigation: l,
        checkClientSideRenderable: c
    }) {
        var h;
        if (w.clientRoutingIsDisabled) {
            j(i);
            return
        }
        if (c && !await _t(i)) {
            j(i);
            return
        }
        const m = {
                urlOriginal: i,
                isBackwardNavigation: l
            },
            f = ++t;
        a(f >= 1), f > 1 && n === !1 && ((h = w.onPageTransitionStart) === null || h === void 0 || h.call(w, m), n = !0);
        let v = !1;
        const y = () => f === 1 && v === !1 ? !1 : f !== t,
            g = await Tt(m);
        if (y()) return;
        const F = f === 1;
        p(g, {
            _isFirstRenderAttempt: F
        });
        let T;
        try {
            T = await sn(g)
        } catch (R) {
            if (Jt(R, g)) return;
            try {
                T = await ln(g)
            } catch (b) {
                if (Jt(b, g) || (F || setTimeout(() => {
                        window.location.pathname = i
                    }, 0), me(R, b))) return;
                throw b
            }
        }
        if (p(g, T), V(g, "onPageTransitionStart"), w.onPageTransitionStart = g.exports.onPageTransitionStart, g.exports.hydrationCanBeAborted ? v = !0 : S(!he(), "You seem to be using React; we recommend setting `hydrationCanBeAborted` to `true`, see https://vite-plugin-ssr.com/clientRouting", {
                showStackTrace: !1,
                onlyOnce: !0
            }), !y() && (e && await e, !y())) {
            if (wn(i, s), Wt.markNavigationChange(), a(e === void 0), e = (async () => {
                    const R = jt(g);
                    ge(g);
                    const b = g.exportsAll.render[0].filePath;
                    a(b);
                    const qt = await M(() => g.exports.render(R), "render", b);
                    u(qt === void 0, `The render() hook of ${b} isn't allowed to return a value`), On(g)
                })(), await e, e = void 0, g._isFirstRenderAttempt) {
                V(g, "onHydrationEnd");
                const {
                    onHydrationEnd: R
                } = g.exports;
                if (R) {
                    const b = g.exportsAll.onHydrationEnd[0].filePath;
                    a(b), await M(() => R(g), "onHydrationEnd", b)
                }
            } else f === t && (g.exports.onPageTransitionEnd && (V(g, "onPageTransitionEnd"), g.exports.onPageTransitionEnd(g)), n = !1);
            Yt(o), X(), w.initialRenderIsDone = !0
        }
    }
}

function mn(t) {
    document.addEventListener("click", e);
    return;
    async function e(o) {
        if (!n(o)) return;
        const i = r(o.target);
        if (!i) return;
        const s = i.getAttribute("href");
        if (kt(i)) return;
        a(s), o.preventDefault();
        const l = ![null, "false"].includes(i.getAttribute("keep-scroll-position"));
        t(s, {
            keepScrollPosition: l
        })
    }

    function n(o) {
        return o.button === 0 && !o.ctrlKey && !o.shiftKey && !o.altKey && !o.metaKey
    }

    function r(o) {
        for (; o.tagName !== "A";) {
            const {
                parentNode: i
            } = o;
            if (!i) return null;
            o = i
        }
        return o
    }
}

function yn(t) {
    window.addEventListener("popstate", () => {
        const e = H(),
            n = e.historyState.scrollPosition || "scroll-to-top-or-hash",
            r = e.urlWithoutHash === w.previousState.urlWithoutHash,
            o = !e.historyState.timestamp || !w.previousState.historyState.timestamp ? null : e.historyState.timestamp < w.previousState.historyState.timestamp;
        w.previousState = e, r ? window.history.state === null ? (Ht(), w.previousState = H()) : Yt(n) : t(n, o)
    })
}

function wn(t, e) {
    _() !== t && (X(), pn(t, e), w.previousState = H())
}

function H() {
    return {
        urlWithoutHash: _({
            withoutHash: !0
        }),
        historyState: z()
    }
}

function Yt(t) {
    if (t === "preserve-scroll") return;
    let e;
    if (t === "scroll-to-top-or-hash") {
        const n = Sn();
        if (n && n !== "top") {
            const r = document.getElementById(n) || document.getElementsByName(n)[0];
            if (r) {
                r.scrollIntoView();
                return
            }
        }
        e = {
            x: 0,
            y: 0
        }
    } else a("x" in t && "y" in t), e = t;
    vn(e)
}

function vn(t) {
    const e = () => window.scrollTo(t.x, t.y),
        n = () => window.scrollX === t.x && window.scrollY === t.y;
    n() || (e(), !n() && requestAnimationFrame(() => {
        e(), !n() && setTimeout(async () => {
            if (e(), n()) return;
            const r = new Date().getTime();
            for (;;)
                if (await ye(10), e(), n() || new Date().getTime() - r > 100) return
        }, 0)
    }))
}

function bn() {
    window.addEventListener("scroll", pe(Vt, Math.ceil(1e3 / 3)), {
        passive: !0
    }), Kt(Vt)
}

function Sn() {
    let {
        hash: t
    } = window.location;
    return t === "" ? null : (a(t.startsWith("#")), t = t.slice(1), t)
}

function Pn() {
    Gt(), Kt(Gt), Rn(() => w.initialRenderIsDone && X())
}

function X() {
    "scrollRestoration" in window.history && (window.history.scrollRestoration = "manual")
}

function Gt() {
    "scrollRestoration" in window.history && (window.history.scrollRestoration = "auto")
}

function Kt(t) {
    window.addEventListener("visibilitychange", () => {
        document.visibilityState === "hidden" && t()
    })
}

function Rn(t) {
    window.addEventListener("visibilitychange", () => {
        document.visibilityState === "visible" && t()
    })
}

function Jt(t, e) {
    return !!(t != null && t._abortRendering || xn(t, e))
}

function xn(t, e) {
    if (!lt(t)) return !1;
    if (Ut(), e._isFirstRenderAttempt) throw t;
    return j(e.urlOriginal), !0
}
const zt = new Map;
async function Q(t) {
    if (u(!ut(t), `You are trying to prefetch ${t} which is an external URL. This doesn't make sense since vite-plugin-ssr cannot prefetch external links.`), It(t)) return;
    Ft(t);
    const {
        pageId: e,
        pageFilesAll: n
    } = await Ct(t);
    if (e) try {
        await k(n, e)
    } catch (r) {
        if (lt(r)) Ut();
        else throw r
    }
}

function On(t) {
    Ft(t.urlOriginal), [...document.getElementsByTagName("A")].forEach(async e => {
        if (zt.has(e)) return;
        zt.set(e, !0);
        const n = e.getAttribute("href");
        if (kt(e) || (a(n), !await _t(n)) || It(n)) return;
        const r = Ge(t, e);
        if (r.prefetchStaticAssets) {
            if (r.prefetchStaticAssets.when === "HOVER") e.addEventListener("mouseover", () => Q(n)), e.addEventListener("touchstart", () => Q(n), {
                passive: !0
            });
            else if (r.prefetchStaticAssets.when === "VIEWPORT") {
                const o = new IntersectionObserver(i => {
                    i.forEach(s => {
                        s.isIntersecting && (Q(n), o.disconnect())
                    })
                });
                o.observe(e)
            }
        } else return
    })
}
export {
    ve as n, hn as u
};