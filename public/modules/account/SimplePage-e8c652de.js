import {
    r as s,
    _ as a
} from "./_bc_ui_share-16017657.js";
import {
    R as t
} from "./react_share-ba7e619d.js";
import {
    c
} from "./index-5bcb444f.js";
import {
    f as p
} from "./framer_motion_share-695feab3.js";
const o = {
        zoomInFrom: {
            scale: .98,
            opacity: 0
        },
        zoomEnter: {
            scale: 1,
            opacity: 1
        },
        springPower1: {
            type: "spring",
            damping: 80,
            stiffness: 900
        }
    },
    l = t.memo(function({
        title: e,
        onBack: r,
        children: i,
        id: n,
        className: m
    }) {
        return s.jsxs(p.motion.div, {
            animate: o.zoomEnter,
            initial: o.zoomInFrom,
            transition: o.springPower1,
            id: n,
            className: c("simple-page", m),
            children: [e && s.jsxs("p", {
                className: "sign-title",
                children: [r && s.jsx(a.Button, {
                    className: "back-icon",
                    onClick: r,
                    children: s.jsx(a.Icon, {
                        name: "Arrow"
                    })
                }), s.jsx("span", {
                    children: e
                })]
            }), i]
        })
    }),
    d = l;
export {
    d as S
};