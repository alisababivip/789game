import {
    j as c
} from "../../../chunk-a4af42e8.js";
import {
    G as n
} from "../../../chunk-e322f4df.js";
import {
    g as d,
    o as u
} from "../../../chunk-cf8d333b.js";
import {
    g as N
} from "../../../chunk-7459b96e.js";
import {
    G as a
} from "../../../chunk-405456f5.js";
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

function P() {
    return c.jsx(n, {
        isTag: !0
    })
}
const f = ({
    ctx: o
}) => {
    const {
        routeParams: m
    } = o, {
        urlParsed: r
    } = o, i = parseInt(r.search.page || "1"), s = r.search.providerName || "", p = r.search.sort || "", g = r.search.showingBlocked || "", e = m.tagName, t = a.tagNameDecode(e);
    return {
        data: d({
            sectionId: a.getTagNameSectionId(e),
            tag: t,
            page: i,
            providerName: s,
            sortBy: p,
            showingBlocked: Number(g)
        }),
        providerList: u(a.getProviderTagName(t)),
        documentProps: N(o.lang, "tableGame")
    }
};
export {
    P as Page, f as onPageData
};