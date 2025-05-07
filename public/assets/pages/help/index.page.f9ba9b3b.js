import {
    j as o
} from "../../chunk-a4af42e8.js";
import {
    dx as r,
    dA as s,
    a as i
} from "../../chunk-64278058.js";
import "../../chunk-73e80d68.js";
import {
    g as p
} from "../../chunk-7459b96e.js";
import {
    l
} from "../../chunk-654ef298.js";
import {
    a as m,
    G as n
} from "../../chunk-87132790.js";
import "../../chunk-cf010ec4.js";
import "../../chunk-5bcb444f.js";
const t = () => l("modules/static").then(a => a.help()),
    c = r(t);

function g() {
    return o.jsx(c, {
        GroupPageTitleWrap: m,
        GroupPageLayout: n
    })
}
const u = ({
        ctx: a
    }) => {
        const {
            lang: e
        } = a;
        return {
            documentProps: p(e, "help")
        }
    },
    h = s(t, "BonusTCDialog"),
    f = s(t, "PrivacyDialog"),
    x = async () => {
        i.emit("inject_dialog", [{
            path: "#/help_privacy",
            element: o.jsx(f, {}),
            isDialog: !0
        }, {
            path: "#/help_bonus",
            element: o.jsx(h, {}),
            isDialog: !0
        }])
    };
export {
    g as Page, x as installHelp, u as onPageData
};