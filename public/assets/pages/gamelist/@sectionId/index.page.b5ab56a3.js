import {
    j as I
} from "../../../chunk-a4af42e8.js";
import {
    G as v
} from "../../../chunk-e322f4df.js";
import {
    g as a,
    l as g
} from "../../../chunk-cf8d333b.js";
import {
    G as s
} from "../../../chunk-405456f5.js";
import {
    g as P,
    a as u
} from "../../../chunk-7459b96e.js";
import "../../../chunk-73e80d68.js";
import "../../../chunk-64278058.js";
import "../../../chunk-cf010ec4.js";
import "../../../chunk-5bcb444f.js";
import "../../../chunk-55136115.js";
import "../../../chunk-7a9ca7ff.js";
import "../../../chunk-4b36b7ff.js";
import "../../../chunk-b45bd069.js";
import "../../../chunk-fb34d5f5.js";
import "../../../chunk-8d9c7a4a.js";
import "../../../chunk-07d6de63.js";

function f() {
    return I.jsx(v, {})
}
const y = ({
    ctx: p
}) => {
    const {
        routeParams: l,
        urlParsed: r,
        lang: c
    } = p, o = l.sectionId, t = parseInt(r.search.page || "1"), i = r.search.providerName || "";
    let e = r.search.sort || "";
    const m = r.search.gameUnique || "",
        d = r.search.showingBlocked || "",
        h = r.search.tag,
        n = r.search.fromCategory;
    return o === "slots" ? (e = e || "popular", {
        data: a({
            sectionId: s.sectionIdDecode(o, e),
            gameUnique: m,
            page: t,
            providerName: i,
            sortBy: e,
            showingBlocked: Number(d)
        }),
        providerList: g(1)
    }) : o === "live" ? (e = e || "youmaylike", {
        data: a({
            sectionId: s.sectionIdDecode(o, e),
            gameUnique: m,
            page: t,
            providerName: i,
            sortBy: e,
            showingBlocked: Number(d)
        }),
        providerList: g(4),
        documentProps: P(p.lang, "live")
    }) : n ? {
        data: a({
            sectionId: s.sectionIdDecode(o, e),
            page: t,
            tag: h,
            fromCategory: Number(n)
        }),
        documentProps: Promise.resolve(u(c, o))
    } : {
        data: a({
            sectionId: s.sectionIdDecode(o, e),
            gameUnique: m,
            page: t,
            providerName: i,
            sortBy: e
        }),
        documentProps: Promise.resolve(u(c, o))
    }
};
export {
    f as Page, y as onPageData
};