import {
    _ as i,
    a as s
} from "./vendor-8c02be2a.js";
import "./AllPlayers-fab6a982.js";
const r = ({
        children: a
    }) => {
        const {
            t: e
        } = i.useTranslation();
        return s.jsxs("div", {
            className: `${t} script-tips`,
            children: [s.jsx(i.Icon, {
                name: "Help"
            }), s.jsxs("div", {
                className: "tip-msg",
                children: [s.jsx("span", {
                    children: e("Use of script is optional and players must take full responsibility for any attendant risks. We will not be held liable in this regard.")
                }), a]
            })]
        })
    },
    t = "a1epm2fo";
export {
    r as A
};