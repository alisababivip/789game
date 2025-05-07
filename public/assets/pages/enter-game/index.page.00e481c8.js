import {
    j as e
} from "../../chunk-a4af42e8.js";
import {
    R as d,
    r as t
} from "../../chunk-73e80d68.js";
import {
    c as g
} from "../../chunk-5bcb444f.js";
import {
    eg as p,
    ev as b,
    ed as f,
    en as N,
    cJ as h,
    cl as k,
    dL as v,
    dX as S,
    a as x
} from "../../chunk-64278058.js";
import {
    l as _
} from "../../chunk-bb0ace6b.js";
import {
    d as w
} from "../../chunk-4142ea66.js";
import "../../chunk-cf010ec4.js";
import "../../chunk-7a9ca7ff.js";
import "../../chunk-654ef298.js";
const y = d.memo(function({
        children: s
    }) {
        const {
            urlParsed: n
        } = p(), {
            t: a
        } = b(), o = f(), [l, i] = t.useState(!1), [c, r] = t.useState(!0), j = N(m => {
            window.innerWidth >= 480 ? (r(!1), i(!0)) : (r(!0), i(!1))
        }, 500), u = n.search.back || "";
        return t.useEffect(() => {
            window.innerWidth >= 480 && (r(!1), i(!0))
        }, []), e.jsxs("div", {
            className: C,
            ref: j,
            children: [e.jsxs("div", {
                className: g("layout-top-back-deposit", !c && "close"),
                children: [c && e.jsxs(e.Fragment, {
                    children: [e.jsx("button", {
                        className: "back",
                        onClick: () => {
                            u ? o(decodeURIComponent(u)) : history.back()
                        },
                        children: e.jsx(h, {
                            name: "Arrow"
                        })
                    }), e.jsx(k, {
                        className: "deposit",
                        type: "conic",
                        onClick: () => {
                            o("#/deposit")
                        },
                        children: a("Deposit")
                    }), e.jsx("button", {
                        className: "support",
                        onClick: () => {
                            var m;
                            (m = _) == null || m.openLiveSupport()
                        },
                        children: e.jsx(h, {
                            name: "Support"
                        })
                    })]
                }), l && e.jsx("button", {
                    className: "rec-btn",
                    onClick: () => {
                        r(!c)
                    },
                    children: e.jsx("div", {
                        className: "rec"
                    })
                })]
            }), e.jsx("div", {
                className: "game-enter",
                children: s
            })]
        })
    }),
    C = "l1tj9e7r";

function E() {
    const {
        urlParsed: s
    } = p(), n = f(), a = v(), o = s.search.src || "", l = s.search.extSW || "", i = s.search.bg || "", c = t.useRef(null);
    return S(c), t.useEffect(() => {
        const r = setTimeout(() => {
            x.emit("ignore_sign_up_queue", !0)
        }, 200);
        return () => {
            r && clearTimeout(r), x.emit("ignore_sign_up_queue", !1)
        }
    }, []), t.useEffect(() => {
        (!o || o === "") && n("/")
    }, []), t.useEffect(() => {
        a.login || n("/")
    }, [a.login]), e.jsx("div", {
        className: R,
        ref: c,
        children: e.jsx(w, {
            extSW: l,
            src: o,
            bg: i
        })
    })
}
const L = d.memo(function({
        children: s
    }) {
        return e.jsx(y, {
            children: s
        })
    }),
    R = "p6tu1ih";
export {
    L as Layout, E as Page
};