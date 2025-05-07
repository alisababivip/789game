import {
    ez as s,
    du as r,
    eh as t
} from "./chunk-64278058.js";
import "./chunk-73e80d68.js";
import {
    g as n
} from "./chunk-8d9c7a4a.js";
var o = (a => (a.brand = "brand", a.live = "live", a.slots = "slots", a.hot = "hot", a.new = "new", a.pick = "picks", a.tablegame = "table-game", a.all = "", a))(o || {});
const i = t,
    m = s.timeMemoize(async function(a) {
        const {
            areaCode: e
        } = await n();
        return r.get(`/home/main/banner/?areaCode=${e}`)
    }, {
        timeout: 3e6,
        getKey: a => a
    }),
    l = t;
export {
    o as C, l as a, m as g, i as u
};