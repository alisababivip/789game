import {
    ez as a,
    ds as s
} from "./chunk-64278058.js";
import "./chunk-73e80d68.js";
const o = "https://start9.sptpub.com/static/media",
    i = o,
    r = "https://files-immutable-4cbc033nbd3.sptpub.com/flags_by_code",
    c = "/competitors/images/normal/medium",
    m = "/additional_images/medium";

function n(t) {
    return new URLSearchParams(window.location.search).get(t)
}

function p() {
    const {
        isNg2Host: t,
        isKenyaHost: e
    } = a.getHostType(s.host);
    return e ? "2400325958683996160" : t ? "2278938435223949312" : s.isDevHost ? n("brandId") || (/game/.exec(s.host) ? "2121274848574574592" : "2088286533093298176") : "2103509236163162112"
}
export {
    c as a, r as c, m as e, p as g, i as s
};