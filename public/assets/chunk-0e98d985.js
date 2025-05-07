var q = Object.defineProperty,
    C = Object.defineProperties;
var N = Object.getOwnPropertyDescriptors;
var l = Object.getOwnPropertySymbols;
var x = Object.prototype.hasOwnProperty,
    j = Object.prototype.propertyIsEnumerable;
var g = (a, e, r) => e in a ? q(a, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : a[e] = r,
    p = (a, e) => {
        for (var r in e || (e = {})) x.call(e, r) && g(a, r, e[r]);
        if (l)
            for (var r of l(e)) j.call(e, r) && g(a, r, e[r]);
        return a
    },
    m = (a, e) => C(a, N(e));
var y = (a, e) => {
    var r = {};
    for (var t in a) x.call(a, t) && e.indexOf(t) < 0 && (r[t] = a[t]);
    if (a != null && l)
        for (var t of l(a)) e.indexOf(t) < 0 && j.call(a, t) && (r[t] = a[t]);
    return r
};
import {
    _ as P
} from "./chunk-cf010ec4.js";
import {
    j as s
} from "./chunk-a4af42e8.js";
import {
    r as o,
    R as A
} from "./chunk-73e80d68.js";
import {
    ef as F,
    a as S,
    eE as O,
    bq as T,
    aC as z,
    cT as D,
    __tla as I
} from "./chunk-64278058.js";
import {
    c as L
} from "./chunk-5bcb444f.js";
let v, M = Promise.all([(() => {
    try {
        return I
    } catch (a) {}
})()]).then(async () => {
    let a, e, r, t, d;
    a = o.lazy(() => P(() =>
        import ("./index.e9b82262.js"), ["assets/index.e9b82262.js", "assets/chunk-a4af42e8.js", "assets/chunk-73e80d68.js", "assets/chunk-64278058.js", "assets/chunk-cf010ec4.js", "assets/chunk-5bcb444f.js", "assets/chunk-42f5abfc.js", "assets/chunk-55136115.js", "assets/chunk-7a9ca7ff.js", "assets/GameList.5b340fa3.css", "assets/chunk-405456f5.js", "assets/chunk-de5e47f6.js", "assets/GridScrollList.65d17988.css", "assets/GameRecommend.b27d187b.css", "assets/chunk-cf8d333b.js", "assets/chunk-8d9c7a4a.js", "assets/chunk-07d6de63.js", "assets/chunk-b985edb9.js", "assets/chunk-654ef298.js", "assets/index.329d4821.css"])), e = {
        type: "spring",
        stiffness: 640,
        damping: 60
    }, r = {
        transition: e,
        initial: {
            y: "-100%"
        },
        animate: {
            y: 0
        },
        exit: {
            y: "-100%"
        }
    }, t = document.querySelector("#root"), v = A.memo(function(V) {
        var u = V,
            {
                children: E,
                onClick: f
            } = u,
            R = y(u, ["children", "onClick"]);
        const [i, c] = o.useState(!1), h = o.useRef(String(Math.random())), _ = o.useRef(null), b = F(() => c(!1), [_]), w = () => {
            const n = t ? t.querySelector(".page-search-pop-wrap") : null;
            if (n) {
                const k = n.getAttribute("data-random-data");
                h.current === k && c(!i)
            } else c(!i)
        };
        return o.useEffect(() => {
            const n = () => {
                c(!i)
            };
            return S.on("page-search-pop-action", n), () => {
                S.off("page-search-pop-action", n)
            }
        }, []), s.jsxs(s.Fragment, {
            children: [s.jsx("div", m(p({}, R), {
                ref: _,
                onClick: n => {
                    w(), f && f(n)
                },
                children: E
            })), t && O.createPortal(s.jsx(T, {
                children: i && s.jsx("div", {
                    className: L(d, "page-search-pop-wrap"),
                    "data-random-data": h.current,
                    children: s.jsx(z.div, m(p({}, r), {
                        className: "motion-wrap",
                        ref: b,
                        children: s.jsx(o.Suspense, {
                            fallback: s.jsx(D, {
                                className: "search-main-loading"
                            }),
                            children: s.jsx(a, {
                                closeFn: () => c(!1)
                            })
                        })
                    }))
                })
            }), t)]
        })
    }), d = "s12phtuv"
});
export {
    v as S, M as __tla
};