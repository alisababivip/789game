import {
    j as e
} from "./chunk-a4af42e8.js";
import {
    R as A,
    r as n
} from "./chunk-73e80d68.js";
import {
    ev as R,
    e4 as B,
    e5 as I,
    dL as P,
    e6 as E,
    cY as L,
    cl as w,
    cp as T,
    ci as $,
    dC as x
} from "./chunk-64278058.js";
import {
    c as D
} from "./chunk-5bcb444f.js";
import {
    E as F
} from "./chunk-ebb6ff7f.js";
async function z({
    defaultComment: u,
    name: t,
    id: d
}) {
    return new Promise(o => {
        const l = () => {
                o(null), x.back()
            },
            c = p => {
                o(p), x.back()
            };
        x.push(e.jsx(G, {
            onSubmit: c,
            onCancel: l,
            defaultComment: u,
            name: t,
            id: d
        }), {
            closeable: !1
        })
    })
}
const G = A.memo(function({
        id: u,
        name: t,
        defaultComment: d,
        onSubmit: o,
        onCancel: l
    }) {
        const {
            t: c
        } = R(), p = B(), j = I(), i = n.useRef(null), f = n.useRef(null), [r, C] = n.useState(t), [g, b] = n.useState(!1), [a, v] = n.useState(d), [y, h] = n.useState(t ? 64 : 0), N = P();
        E(() => {
            if (C(t), t && f.current) {
                const s = f.current.getBoundingClientRect();
                h(p ? s.width * 2 + 8 : s.width + 8)
            } else h(0)
        }, [t]);
        const S = g || a !== "",
            k = n.useCallback(s => {
                if (r && r !== "") {
                    const m = `[user=${u}, ${t}] ` + s;
                    o({
                        content: m,
                        haveAt: !0
                    })
                } else o({
                    content: s,
                    haveAt: !1
                })
            }, [r]);
        return n.useEffect(() => {
            const s = setTimeout(() => {
                i.current && i.current.focus()
            }, 200);
            return () => {
                clearTimeout(s)
            }
        }, []), e.jsxs(L, {
            className: K,
            children: [j && e.jsxs("div", {
                className: "mobile-btns",
                children: [e.jsx("button", {
                    className: "cancel-btn",
                    onClick: () => l(),
                    children: c("Cancel")
                }), e.jsx(w, {
                    type: "conic",
                    onClick: () => a && k(a),
                    children: c("Post")
                })]
            }), !j && e.jsx(T, {
                onClick: () => l()
            }), e.jsxs("div", {
                className: D("post-comment-pop-header-input", S && "focus"),
                children: [e.jsx("div", {
                    className: "avatar-wrap",
                    children: e.jsx($.Avatar, {
                        name: N.name,
                        userId: N.userId
                    })
                }), e.jsxs("div", {
                    className: "input-wrap",
                    children: [e.jsx("textarea", {
                        ref: i,
                        onFocus: () => b(!0),
                        onBlur: () => b(!1),
                        onKeyDown: s => {
                            s.key === "Backspace" && a === "" && (C(""), h(0))
                        },
                        value: a,
                        onChange: s => v(s.target.value),
                        maxLength: 500,
                        style: {
                            textIndent: y
                        },
                        placeholder: c("Add a comment\u2026")
                    }), r && e.jsxs("span", {
                        ref: f,
                        className: "at-user-name",
                        children: ["@ ", r]
                    })]
                })]
            }), e.jsxs("div", {
                className: "post-comment-pop-btns",
                children: [e.jsx("div", {
                    className: "left-btn",
                    children: e.jsx(F, {
                        className: "empji-wrap",
                        onChange: s => {
                            var m;
                            v(a + " " + s + " "), (m = i.current) == null || m.focus()
                        }
                    })
                }), e.jsx(w, {
                    type: "conic",
                    disabled: !a,
                    onClick: () => a && k(a),
                    children: c("Post")
                })]
            })]
        })
    }),
    K = "p1a9nam4";
export {
    z as p
};