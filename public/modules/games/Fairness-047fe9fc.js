import {
    R as e,
    _ as s,
    a as o
} from "./vendor-8c02be2a.js";
import {
    F as n
} from "./AllPlayers-fab6a982.js";
import "./index-66d88a57.js";
import "./context-07d48342.js";
import "./Coin-19c44f04.js";
const l = e.memo(function({
        rtp: t
    }) {
        const {
            t: r
        } = s.useTranslation();
        return o.jsx(n, {
            icon: o.jsx(s.Icon, {
                name: "Fairness"
            }),
            title: r("Fairness"),
            onClick: () => {
                s.pop.push(o.jsxs("div", {
                    className: i,
                    children: [r("House Edge"), ": ", new s.Decimal(100).sub(t).toNumber(), "%"]
                }))
            }
        })
    }),
    i = "fgd28mj";
export {
    l as G
};