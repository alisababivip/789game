var N = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var a = Object.prototype.hasOwnProperty,
    m = Object.prototype.propertyIsEnumerable;
var r = (i, A, e) => A in i ? N(i, A, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: e
    }) : i[A] = e,
    t = (i, A) => {
        for (var e in A || (A = {})) a.call(A, e) && r(i, e, A[e]);
        if (l)
            for (var e of l(A)) m.call(A, e) && r(i, e, A[e]);
        return i
    };
import {
    _ as d,
    r as n
} from "./_bc_ui_share-16017657.js";
import {
    r as c
} from "./react_share-7ee6a1d9.js";
const s = "data:image/png;base64,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",
    E = "data:image/png;base64,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";

function g() {
    const {
        t: i
    } = d.useTranslation();
    return c.useEffect(() => {
        d.addUserReceiptEvent("lottery-reward-sending", A => {
            A.message = A.message ? A.message : i("bclottery-starts"), d.notify(n.jsx("div", {
                style: {
                    height: "60px"
                },
                children: n.jsx(B, t({}, A))
            }), {
                duration: 5e3
            })
        })
    }, []), null
}

function B({
    periodId: i,
    message: A
}) {
    const e = d.useIsDarken();
    return n.jsxs(d.Link, {
        className: q,
        href: "/lottery/detail/0",
        children: [n.jsx("img", {
            src: e ? s : E
        }), n.jsxs("div", {
            children: [n.jsxs("span", {
                children: ["No.", i]
            }), A]
        })]
    })
}
const q = "v15bei0c";
export {
    g as
    default
};