import {
    j as e
} from "../../../chunk-a4af42e8.js";
import {
    r as s
} from "../../../chunk-73e80d68.js";
import {
    cT as a
} from "../../../chunk-64278058.js";
import {
    m as i
} from "../../../chunk-cf8d333b.js";
import {
    l as m
} from "../../../chunk-654ef298.js";
import "../../../chunk-cf010ec4.js";
import "../../../chunk-8d9c7a4a.js";
import "../../../chunk-7a9ca7ff.js";
import "../../../chunk-07d6de63.js";
const c = () => m("modules/bonus").then(o => o.asyncComponents.PromotionDetail()),
    u = s.lazy(c);

function p() {
    return e.jsx(s.Suspense, {
        fallback: e.jsx(a, {}),
        children: e.jsx(u, {})
    })
}
const l = ({
    ctx: o
}) => {
    const {
        routeParams: t,
        lang: n
    } = o, r = t.detailId;
    return {
        data: i(r, n),
        documentProps: Promise.resolve({
            title: "BC.GAME: Your quick guide to our exciting online casino promotions",
            keywords: "BC.GAME bonuses, BC.GAME bonuscode, BCgame, bonuses, casino bonuses",
            description: "Make the most out of your betting experience by earning BC.GAME bonuses that can make online casino games and sports betting feel more special! "
        })
    }
};
export {
    p as Page, l as onPageData
};