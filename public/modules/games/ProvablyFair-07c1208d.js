import {
    _ as t,
    r as o,
    a as e
} from "./vendor-8c02be2a.js";
import {
    r as d
} from "./react_router-dom_share-62544329.js";
import {
    d as u,
    c
} from "./context-07d48342.js";
import {
    w as m
} from "./CommonI18nProvider-b34bf9d5.js";
import "./main-057d7723.js";
const g = /^http.*/,
    k = m(function() {
        const {
            t: n
        } = t.useTranslation(), i = t.usePageProps().bcBrand.read().pageList.list, l = o.useMemo(() => i.filter(a => !a.gameUnique.includes("trenball")).map((a, x) => ({
            label: a.fullName,
            value: a.gameUnique
        })), [i]), [s, r] = o.useState(l[0].value);
        return e.jsxs(e.Fragment, {
            children: [e.jsx("p", {
                className: "title",
                children: n("Game")
            }), e.jsx(t.Select, {
                value: s,
                onChange: r,
                options: l
            }), e.jsx("p", {
                className: "title",
                children: n("Fairness")
            }), e.jsx(o.Suspense, {
                fallback: e.jsx(t.Loading, {}),
                children: e.jsx(u, {
                    gameUnique: s,
                    children: e.jsx(f, {})
                })
            })]
        })
    });

function f() {
    const n = c(),
        {
            t: i
        } = t.useTranslation(),
        l = t.useNavigate(),
        s = n.config.fairComponent;
    if (!s) return null;
    let r = "";
    return r = typeof n.config.validateLink == "string" ? n.config.validateLink : `#/validate/${n.gameUnique}`, e.jsxs(e.Fragment, {
        children: [e.jsx(s, {}), r && e.jsx(t.Button, {
            type: "conic2",
            onClick: () => {
                return a = r, void(g.test(a) ? window.open(a) : l(a));
                var a
            },
            children: i("Validate")
        })]
    })
}
const L = m(function() {
    const {
        t: n
    } = t.useTranslation(), {
        gameUnique: i
    } = d.useParams();
    return e.jsx(t.Dialog, {
        title: n("Fairness"),
        children: e.jsx(u, {
            gameUnique: i,
            children: e.jsx(p, {})
        })
    })
});

function p() {
    const n = c().config.validateLink;
    return typeof n == "string" ? null : e.jsx(n, {})
}
export {
    L as ValidateDialog, k as
    default
};