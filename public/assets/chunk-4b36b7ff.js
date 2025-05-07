import {
    j as s
} from "./chunk-a4af42e8.js";
import {
    ev as o,
    ds as e,
    dd as n,
    cl as c
} from "./chunk-64278058.js";
import {
    r
} from "./chunk-73e80d68.js";

function l() {
    const {
        t: a
    } = o(), [i, t] = r.useState(!1);
    return s.jsxs("div", {
        className: h,
        children: [s.jsx("div", {
            className: "tit",
            children: a("About {{bc}} Originals", {
                bc: e.siteName
            })
        }), s.jsx(n, {
            visible: i,
            className: i ? "" : "shadow",
            minHeight: 120,
            children: s.jsx("div", {
                className: "cont-wrap",
                children: s.jsxs("div", {
                    className: "left-cont",
                    children: [s.jsx("div", {
                        className: "txt cont",
                        children: a("{{bc}} Originals is the foundation of {{host}} casino-- the original casino games that formed the backbone of the {{host1}} platform and provides a fantastic selection of games for players to bet on.", {
                            bc: e.siteName,
                            host: e.buildHost,
                            host1: e.buildHost
                        })
                    }), s.jsx("div", {
                        className: "cont txt",
                        children: a("The original {{host}} are exquisitely designed based on the experience of their players. These games are created by the {{bc}} Originals, which provides a wide selection of casino games that are secure and safe to play on the web. The {{bc1}} Originals casino platform allows players to play casino games using their choice of currency.", {
                            host: e.buildHost,
                            bc: e.siteName,
                            bc1: e.siteName
                        })
                    }), s.jsx("div", {
                        className: "cont txt",
                        children: a("Every {{bc}} Originals casino games is 'Provably fair,' helping ensure a safe, secure, and fair online gaming experience on the {{host}} Crypto gambling platform. They all take advantage of the {{bc1}} Originals casino platform for players to gamble on casino games online directly in their browser using Bitcoin or the available currency of their choice.", {
                            bc: e.siteName,
                            host: e.buildHost,
                            bc1: e.siteName
                        })
                    })]
                })
            })
        }), s.jsx(c, {
            className: "btn",
            onClick: () => t(!i),
            children: a(i ? "Show less" : "Show more")
        })]
    })
}
const h = "s1fyav6d";
export {
    l as A
};