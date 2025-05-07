import {
    r as h,
    c as _
} from "./vendor-DbY7dSWD.js";
const v = "modulepreload",
    E = function(t) {
        return "/modules/chat/" + t
    },
    u = {},
    d = function(n, l, f) {
        let c = Promise.resolve();
        if (l && l.length > 0) {
            const s = document.getElementsByTagName("link");
            c = Promise.all(l.map(e => {
                if (e = E(e), e in u) return;
                u[e] = !0;
                const o = e.endsWith(".css"),
                    m = o ? '[rel="stylesheet"]' : "";
                if (!!f)
                    for (let i = s.length - 1; i >= 0; i--) {
                        const a = s[i];
                        if (a.href === e && (!o || a.rel === "stylesheet")) return
                    } else if (document.querySelector(`link[href="${e}"]${m}`)) return;
                const r = document.createElement("link");
                if (r.rel = o ? "stylesheet" : v, o || (r.as = "script", r.crossOrigin = ""), r.href = e, document.head.appendChild(r), o) return new Promise((i, a) => {
                    r.addEventListener("load", i), r.addEventListener("error", () => a(new Error(`Unable to preload CSS for ${e}`)))
                })
            }))
        }
        return c.then(() => n()).catch(s => {
            const e = new Event("vite:preloadError", {
                cancelable: !0
            });
            if (e.payload = s, window.dispatchEvent(e), !e.defaultPrevented) throw s
        })
    },
    y = async t => (await d(() =>
        import ("./PageContext-yXfy1ci0.js").then(n => n.f), __vite__mapDeps([0, 1, 2]))).onMessage(t),
    p = async t => {
        const n = (await d(() =>
            import ("./App-Cj3S0qm4.js"), __vite__mapDeps([3, 1, 0, 2, 4]))).default;
        return h(() => _(n, {
            get bridge() {
                return t.bridge
            }
        }), t.el)
    };
export {
    d as _, y as o, p as r
};

function __vite__mapDeps(indexes) {
    if (!__vite__mapDeps.viteFileDeps) {
        __vite__mapDeps.viteFileDeps = ["PageContext-yXfy1ci0.js", "vendor-DbY7dSWD.js", "PageContext-C7fcKU3j.css", "App-Cj3S0qm4.js", "App-BDLGuVQv.css"]
    }
    return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}