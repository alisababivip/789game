import {
    ev as c
} from "./chunk-64278058.js";
import {
    r as l
} from "./chunk-73e80d68.js";
import {
    l as s
} from "./chunk-654ef298.js";
var n = (t => (t.CASINO = "CASINO", t.LOTTEYR = "LOTTERY", t))(n || {});

function i(t) {
    return t.includes("/lottery") ? "LOTTERY" : "CASINO"
}

function p(t) {
    return t === "LOTTERY" ? {
        searchUrl: "/platform-lottery/lottery-info/list-lotteries/",
        localStorgeName: "lottery-search-list"
    } : {
        searchUrl: "/home/search/game/",
        localStorgeName: "game-search-list"
    }
}

function u(t) {
    const {
        t: e
    } = c();
    return e(t === "LOTTERY" ? "Search Lottery Name" : "Game name | Provider")
}
const h = (t, e) => {
        const r = window.localStorage.getItem(e);
        if (!r) window.localStorage.setItem(e, t);
        else {
            const m = r.split("**"),
                o = [t];
            m.map(a => {
                a !== t && o.push(a)
            }), o.length > 20 && o.pop(), window.localStorage.setItem(e, o.join("**"))
        }
    },
    y = () => s("modules/lottery?port=5003").then(t => t.lotteryResult()),
    S = () => s("modules/lottery?port=5003").then(t => t.lotteryRecommend()),
    T = l.lazy(y),
    f = l.lazy(S);
export {
    T as L, n as S, p as a, f as b, i as g, h as s, u
};