import {
    j as t
} from "../../chunk-a4af42e8.js";
import {
    r
} from "../../chunk-73e80d68.js";
import {
    a as m,
    cT as a
} from "../../chunk-64278058.js";
import {
    e
} from "../../chunk-cf8d333b.js";
import {
    g as s
} from "../../chunk-7459b96e.js";
import {
    l as n
} from "../../chunk-654ef298.js";
import "../../chunk-cf010ec4.js";
import "../../chunk-8d9c7a4a.js";
import "../../chunk-7a9ca7ff.js";
import "../../chunk-07d6de63.js";
const i = () => n("modules/bonus").then(o => o.asyncComponents.Promotion()),
    p = r.lazy(i);

function c() {
    return r.useEffect(() => {
        m.emit("ad_track", "other_events", {
            e: "enterPromote"
        })
    }, []), t.jsx(r.Suspense, {
        fallback: t.jsx(a, {}),
        children: t.jsx(p, {})
    })
}
const f = ({
    ctx: o
}) => ({
    data: e(),
    documentProps: s(o.lang, "promotion")
});
export {
    c as Page, f as onPageData
};