import {
    r as o
} from "./chunk-73e80d68.js";
import {
    l as n
} from "./chunk-654ef298.js";
const r = () => n("modules/games");

function a(t) {
    return o.lazy(async function() {
        const {
            asyncComponents: s
        } = await r();
        return s[t]()
    })
}

function e(t) {
    return async (...s) => (await (await r())[t]())(...s)
}
const i = e("openGameDetail"),
    l = e("openGameDetailNodata"),
    m = e("openAllPlayers"),
    c = e("loadShareLikeStore"),
    S = a("GameRouter"),
    u = a("MsgShareCard"),
    y = a("ShareDetail"),
    d = a("SetSeed"),
    p = a("ProvablyFair"),
    f = a("ValidateDialog"),
    C = a("CrashHistory"),
    G = a("StrategyCreator"),
    g = a("SlotsEnterGame");
export {
    C,
    S as G,
    u as M,
    p as P,
    y as S,
    f as V,
    l as a,
    m as b,
    d as c,
    g as d,
    G as e,
    c as l,
    i as o
};