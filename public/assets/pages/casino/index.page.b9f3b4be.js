import {
    j as e
} from "../../chunk-a4af42e8.js";
import {
    ev as m,
    cS as N,
    cJ as g,
    eg as p,
    dO as f,
    cT as b,
    e5 as v,
    a as w,
    ds as d,
    ez as _,
    du as S
} from "../../chunk-64278058.js";
import {
    r as u,
    R as D
} from "../../chunk-73e80d68.js";
import {
    C as n,
    u as x,
    g as I
} from "../../chunk-29a4230f.js";
import {
    c as j
} from "../../chunk-5bcb444f.js";
import {
    G as r
} from "../../chunk-42f5abfc.js";
import {
    G as y
} from "../../chunk-55136115.js";
import {
    A as z
} from "../../chunk-4b36b7ff.js";
import {
    S as C,
    L as G
} from "../../chunk-132aa0a7.js";
import {
    T as P
} from "../../chunk-f2056aea.js";
import {
    P as T
} from "../../chunk-8ff98a5d.js";
import {
    S as L
} from "../../chunk-0e98d985.js";
import {
    b as R,
    g as h
} from "../../chunk-cf8d333b.js";
import {
    g as B
} from "../../chunk-7459b96e.js";
import {
    G as F
} from "../../chunk-405456f5.js";
import {
    g as M
} from "../../chunk-8d9c7a4a.js";
import "../../chunk-cf010ec4.js";
import "../../chunk-de5e47f6.js";
import "../../chunk-7a9ca7ff.js";
import "../../chunk-c300dd90.js";
import "../../chunk-f1a029f1.js";
import "../../chunk-9a1dea26.js";
import "../../chunk-f0f89bbe.js";
import "../../chunk-fb34d5f5.js";
import "../../chunk-07d6de63.js";

function q({
    tab: s
}) {
    const {
        t: a
    } = m(), o = u.useMemo(() => [{
        label: a("Lobby"),
        icon: "Lobby",
        tab: n.all
    }, {
        label: a("Top Picks"),
        icon: "ClassicDice",
        tab: n.pick
    }, {
        label: a("Slots"),
        icon: "Slots",
        tab: n.slots
    }, {
        label: a("Hot Games"),
        icon: "HotGame",
        tab: n.hot
    }, {
        label: a("Live Casino"),
        icon: "LiveCasino",
        tab: n.live
    }, {
        label: a("Table Games"),
        icon: "TableGame",
        tab: n.tablegame
    }, {
        label: a("New Releases"),
        icon: "NewReleases",
        tab: n.new
    }], []);
    return e.jsx("div", {
        className: H,
        children: o.map((c, l) => e.jsxs(N, {
            href: c.tab ? `/casino?tab=${c.tab}` : "/casino",
            className: j("nav-item", s === c.tab && "active"),
            children: [e.jsx(g, {
                name: c.icon
            }), c.label]
        }, l))
    })
}
const H = "s51vpkn";

function O(s, a) {
    return a === n.slots ? s.slotsData : a === n.pick ? s.recommendData : a === n.live ? s.liveData : a === n.new ? s.new_releases : a === n.hot ? s.hot_games : a === n.tablegame ? s.table_games : s.brandData
}

function E({
    tab: s
}) {
    const a = x();
    return e.jsxs(e.Fragment, {
        children: [e.jsx(y, {
            className: "casino-list",
            source: O(a, s)
        }), s === n.brand && e.jsx(z, {})]
    })
}

function J() {
    const {
        lang: s
    } = p(), {
        data: a,
        error: o
    } = f(() => I(s), [s]);
    return o ? null : a ? e.jsx("div", {
        className: A,
        children: e.jsx(u.Suspense, {
            fallback: e.jsx(b, {
                className: "banner-loading"
            }),
            children: e.jsx(C, {
                className: "page-max-width-wrap",
                data: a
            })
        })
    }) : e.jsx("div", {
        className: K,
        children: e.jsx(b, {})
    })
}
const A = "shqjiov",
    K = "siagqw7";

function $() {
    const s = v();
    return m(), s ? e.jsx(k, {
        onClick: () => w.emit("mb-search-open-tigger")
    }) : e.jsx(L, {
        children: e.jsx(k, {})
    })
}
const k = D.memo(function({
        onClick: s
    }) {
        const {
            t: a
        } = m();
        return e.jsxs("div", {
            className: j(Q, "page-search-btn"),
            onClick: s,
            children: [e.jsx("div", {
                className: "icon-wrap",
                children: e.jsx(g, {
                    name: "Search"
                })
            }), e.jsx("p", {
                className: "p",
                children: a("Game name | Provider")
            })]
        })
    }),
    Q = "s15bvjd7";

function U() {
    const {
        t: s
    } = m(), a = x(), {
        urlParsed: o
    } = p(), c = o.search.tab || "";
    return e.jsxs("div", {
        className: V,
        children: [e.jsx(J, {}), e.jsxs("div", {
            className: "page-max-width-wrap casino-container",
            children: [e.jsx($, {}), e.jsx(q, {
                tab: c
            }), c && e.jsx(E, {
                tab: c
            }, c), !c && e.jsxs(e.Fragment, {
                children: [e.jsx(r, {
                    source: a.brandData,
                    className: "casino-block",
                    loop: 0,
                    title: s("{{site}} Originals", {
                        site: d.siteName
                    })
                }), e.jsx(r, {
                    source: a.slotsData,
                    className: "casino-block",
                    loop: 0,
                    title: s("Slots")
                }), e.jsx(r, {
                    source: a.feature_buyin,
                    className: "casino-block",
                    loop: 0,
                    title: s("Feature Buy-in"),
                    link: "/tagname/feature-buy-in"
                }), e.jsx(r, {
                    source: a.liveData,
                    className: "casino-block",
                    loop: 0,
                    title: s("Live Casino")
                }), e.jsx(T, {}), e.jsx(r, {
                    source: a.new_releases,
                    className: "casino-block",
                    link: "/tagname/new-releases",
                    loop: 0,
                    title: s("New Releases")
                }), e.jsx(r, {
                    source: a.hot_games,
                    className: "casino-block",
                    loop: 0,
                    title: s("Hot Games"),
                    link: "/tagname/hot"
                }), e.jsx(r, {
                    source: a.blackjack,
                    className: "casino-block",
                    link: "/tagname/blackjack",
                    loop: 0,
                    title: s("Blackjack")
                }), e.jsx(P, {
                    list: a.themesData.read().tags
                }), e.jsx(r, {
                    source: a.bc_exclusives,
                    className: "casino-block",
                    link: "/tagname/exclusive",
                    loop: 0,
                    title: s("{{site}} Exclusive", {
                        site: d.siteName
                    })
                }), e.jsx(r, {
                    source: a.table_games,
                    className: "casino-block",
                    link: "/tagname/table-games",
                    loop: 0,
                    title: s("Table Games")
                }), e.jsx(r, {
                    source: a.megaways,
                    className: "casino-block",
                    link: "/tagname/megaways",
                    loop: 0,
                    title: s("Megaways")
                }), e.jsx(G, {})]
            })]
        })]
    })
}
const V = "s1tqti96";

function W() {
    return e.jsx(U, {})
}
const X = ({
    ctx: s
}) => {
    const {
        urlParsed: a
    } = s, o = parseInt(a.search.page || "1"), c = a.search.tab || "", l = Z(Y(c, o));
    return {
        documentProps: B(s.lang, "casino"),
        providerData: R(),
        themesData: h({
            sectionId: "tag_recommend",
            page: 1
        }),
        hot_games: l.then(i => {
            var t;
            return (t = i[0]) != null ? t : []
        }),
        slotsData: l.then(i => {
            var t;
            return (t = i[1]) != null ? t : []
        }),
        liveData: l.then(i => {
            var t;
            return (t = i[2]) != null ? t : []
        }),
        brandData: l.then(i => {
            var t;
            return (t = i[3]) != null ? t : []
        }),
        recommendData: l.then(i => {
            var t;
            return (t = i[4]) != null ? t : []
        }),
        feature_buyin: l.then(i => {
            var t;
            return (t = i[5]) != null ? t : []
        }),
        blackjack: l.then(i => {
            var t;
            return (t = i[6]) != null ? t : []
        }),
        megaways: l.then(i => {
            var t;
            return (t = i[7]) != null ? t : []
        }),
        bc_exclusives: l.then(i => {
            var t;
            return (t = i[8]) != null ? t : []
        }),
        table_games: l.then(i => {
            var t;
            return (t = i[9]) != null ? t : []
        }),
        new_releases: h({
            sectionId: F.getTagNameSectionId("New Releases"),
            tag: "New Releases",
            page: c === "new" ? o : 1
        })
    }
};

function Y(s, a) {
    const o = [{
        sectionId: "casino_hot",
        pageSize: 20,
        page: 1
    }, {
        sectionId: "casino_slots",
        pageSize: 20,
        page: 1
    }, {
        sectionId: "casino_live",
        pageSize: 20,
        page: 1
    }, {
        sectionId: "casino_bc",
        pageSize: 20,
        page: 1
    }, {
        sectionId: "top_picks",
        pageSize: 20,
        page: 1
    }, {
        sectionId: "casino_tag",
        tag: "Feature buy-in",
        pageSize: 20,
        page: 1
    }, {
        sectionId: "casino_tag",
        tag: "Blackjack",
        pageSize: 20,
        page: 1
    }, {
        sectionId: "casino_tag",
        tag: "Megaways",
        pageSize: 20,
        page: 1
    }, {
        sectionId: "casino_tag",
        tag: "BC Exclusive",
        pageSize: 20,
        page: 1
    }, {
        sectionId: "casino_tag",
        tag: "Table games",
        pageSize: 20,
        page: 1
    }];
    switch (s === "hot" ? o[0].page = a : s === "slots" && (o[1].page = a), s) {
        case "hot":
            o[0].page = a;
            break;
        case "slots":
            o[1].page = a;
            break;
        case "live":
            o[2].page = a;
            break;
        case "brand":
            o[3].page = a;
        case "picks":
            o[4].page = a;
            break;
        case "table-game":
            o[9].page = a
    }
    return o
}
const Z = _.timeMemoize(async s => {
    const {
        areaCode: a,
        distinctId: o
    } = await M();
    return S.post("home/rec/casino2/", {
        areaCode: a,
        distinctId: o,
        pagerList: s
    })
}, {
    timeout: 8e7,
    getKey: s => JSON.stringify(s)
});
export {
    W as Page, X as onPageData
};