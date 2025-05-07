import {
    j as t
} from "./chunk-a4af42e8.js";
import {
    r as u
} from "./chunk-73e80d68.js";
import {
    ez as h,
    ds as d,
    a as p,
    ed as c,
    e6 as m
} from "./chunk-64278058.js";
import {
    l as j
} from "./chunk-654ef298.js";
const A = () => j("modules/wallet");

function e(s) {
    return u.lazy(async function() {
        return await (await A())[s]()
    })
}
const b = e("FiatTran"),
    g = e("ChannelWallet"),
    D = e("DepositDetail"),
    x = e("WithdrawDetail"),
    _ = e("Turnover"),
    f = e("Deposit"),
    k = e("BcdRelaease"),
    w = e("BonusRelaease"),
    H = e("BclAbout"),
    y = e("JbAbout"),
    B = e("BcdAbout"),
    W = e("AddCard"),
    z = e("AddBank");

function o({
    link: s
}) {
    const a = c();
    return m(() => {
        a(s, {
            replace: !0
        })
    }, [s]), null
}
const I = e("WalletPage");

function R() {
    const {
        isBrHost: s,
        isKenyaHost: a,
        isSpHost: l,
        isNgHost: n,
        isIdHost: r
    } = h.getHostType(d.host), i = s || a || l || n || r;
    p.emit("inject_dialog", [{
        path: "#/brwallet/*",
        element: i ? t.jsx(g, {}) : t.jsx(o, {
            link: "/wallet/*"
        }),
        isDialog: i,
        isAuth: !0
    }, {
        path: "#/deposit/*",
        element: i ? t.jsx(o, {
            link: "#/brwallet/deposit"
        }) : t.jsx(f, {}),
        isDialog: !i,
        isAuth: !0
    }, {
        path: "#/rollover",
        element: t.jsx(_, {
            isDialog: !0
        }),
        isDialog: !0,
        isAuth: !0
    }, {
        path: "#/user/buy-crypto/*",
        element: t.jsx(b, {}),
        isAuth: !0,
        isHook: !0
    }, {
        path: "#/about_bonuscoin",
        element: t.jsx(k, {}),
        isDialog: !0,
        isAuth: !0
    }, {
        path: "#/about_bonusfiat",
        element: t.jsx(w, {}),
        isDialog: !0,
        isAuth: !0
    }, {
        path: "#/about_ticketcoin",
        element: t.jsx(H, {}),
        isDialog: !0,
        isAuth: !0
    }, {
        path: "#/about_bcdcoin",
        element: t.jsx(B, {}),
        isDialog: !0,
        isAuth: !0
    }, {
        path: "#/about_jbcoin",
        element: t.jsx(y, {}),
        isDialog: !0,
        isAuth: !0
    }, {
        path: "#/deposit_detail/:orderId/",
        element: t.jsx(D, {}),
        isDialog: !0,
        isAuth: !0,
        isHook: !0
    }, {
        path: "#/withdraw_detail/:orderId/",
        element: t.jsx(x, {}),
        isDialog: !0,
        isAuth: !0,
        isHook: !0
    }, {
        path: "#/add_card",
        element: t.jsx(W, {}),
        isDialog: !0,
        isAuth: !0
    }, {
        path: "#/add_bank/:currency",
        element: t.jsx(z, {}),
        isDialog: !0,
        isAuth: !0
    }])
}
export {
    I as W, R as i
};