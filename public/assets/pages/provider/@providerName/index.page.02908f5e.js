import {
    j as r
} from "../../../chunk-a4af42e8.js";
import {
    ev as i,
    dg as f,
    e5 as v,
    cS as u
} from "../../../chunk-64278058.js";
import {
    r as d
} from "../../../chunk-73e80d68.js";
import {
    c as x
} from "../../../chunk-5bcb444f.js";
import {
    a as g
} from "../../../chunk-7a9ca7ff.js";
import {
    l as h
} from "../../../chunk-bb0ace6b.js";
import {
    G as j
} from "../../../chunk-55136115.js";
import {
    G as N
} from "../../../chunk-fb34d5f5.js";
import {
    G as b
} from "../../../chunk-42f5abfc.js";
import {
    a as t
} from "../../../chunk-29a4230f.js";
import {
    g as c,
    n as I
} from "../../../chunk-cf8d333b.js";
import {
    b as y
} from "../../../chunk-7459b96e.js";
import "../../../chunk-cf010ec4.js";
import "../../../chunk-405456f5.js";
import "../../../chunk-de5e47f6.js";
import "../../../chunk-8d9c7a4a.js";
import "../../../chunk-07d6de63.js";

function L({
    name: e,
    disabled: s
}) {
    const o = () => {
        var a;
        (a = h) == null || a.openLiveSupport(), g.trackEvent("sidebar_click", {
            button_name: "live_support"
        })
    };
    return i(), s ? r.jsx("div", {
        onClick: o,
        className: P,
        children: r.jsxs(f, {
            name: e,
            i18nKey: "trans.mainpage.casino.desc",
            children: ["Sorry, ", {
                name: e
            }, " is temporarily disabled for some reason. Please ", r.jsx("span", {
                className: "cl-primary",
                children: "contact customer support"
            }), " for help, or try another game."]
        })
    }) : null
}
const P = "sfgio8q",
    k = function() {
        const {
            t: e
        } = i(), s = v(), o = t().providerInfo.read(), a = [{
            label: e("Casino"),
            path: "/casino"
        }, {
            label: o.providerName,
            path: ""
        }];
        return r.jsxs(r.Fragment, {
            children: [r.jsx(G, {}), r.jsxs("div", {
                className: x(w, "page-max-width-wrap"),
                children: [r.jsx(N, {
                    backStyle: s,
                    list: a
                }), r.jsx("div", {
                    className: "filter-wrap",
                    children: r.jsx(u, {
                        href: "/providers",
                        children: e("View All Providers")
                    })
                }), r.jsx(_, {}), r.jsx(S, {})]
            })]
        })
    };

function _() {
    const {
        gameList: e
    } = t(), s = t().providerInfo.read(), {
        t: o
    } = i();
    return r.jsxs(r.Fragment, {
        children: [r.jsxs("div", {
            className: "tit",
            children: [s.providerName, " ", o("Games")]
        }), r.jsx(j, {
            source: e,
            className: "provider-game-list"
        })]
    })
}

function S() {
    const {
        t: e
    } = i(), s = t(), [o, a] = d.useState("");
    return d.useEffect(() => {
        s.providerInfo.promise.then(n => a(`/gamelist/provider_recommend?providerName=${n.providerName}`))
    }, [s.providerInfo]), r.jsx(b, {
        source: s.relatedList,
        title: e("You May Also Like"),
        line: 1,
        link: o
    })
}

function G() {
    const e = t().providerInfo.read();
    return r.jsx(L, {
        disabled: e.disabled,
        name: e.providerName
    })
}
const w = "soflym9";

function A() {
    return r.jsx(k, {})
}
const C = ({
    ctx: e
}) => {
    const {
        routeParams: s,
        lang: o
    } = e, {
        urlParsed: a
    } = e, n = parseInt(a.search.page || "1"), m = s.providerName, p = c({
        sectionId: "provider_list",
        providerName: m,
        page: n
    });
    return {
        providerInfo: I(s.providerName),
        gameList: p,
        relatedList: c({
            sectionId: "provider_recommend"
        }),
        documentProps: p.then(l => y(o, m, l.pageList.total))
    }
};
export {
    A as Page, C as onPageData
};