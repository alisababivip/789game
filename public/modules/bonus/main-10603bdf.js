const m = "modulepreload",
    p = function(r) {
        return "/modules/bonus/" + r
    },
    d = {},
    f = function(c, l, y) {
        if (!l || l.length === 0) return c();
        const u = document.getElementsByTagName("link");
        return Promise.all(l.map(e => {
            if (e = p(e), e in d) return;
            d[e] = !0;
            const n = e.endsWith(".css"),
                w = n ? '[rel="stylesheet"]' : "";
            if (!!y)
                for (let s = u.length - 1; s >= 0; s--) {
                    const o = u[s];
                    if (o.href === e && (!n || o.rel === "stylesheet")) return
                } else if (document.querySelector(`link[href="${e}"]${w}`)) return;
            const i = document.createElement("link");
            if (i.rel = n ? "stylesheet" : m, n || (i.as = "script", i.crossOrigin = ""), i.href = e, document.head.appendChild(i), n) return new Promise((s, o) => {
                i.addEventListener("load", s), i.addEventListener("error", () => o(new Error(`Unable to preload CSS for ${e}`)))
            })
        })).then(() => c()).catch(e => {
            const n = new Event("vite:preloadError", {
                cancelable: !0
            });
            if (n.payload = e, window.dispatchEvent(n), !n.defaultPrevented) throw e
        })
    },
    a = () => f(() =>
        import ("./index-22842c25.js"), ["index-22842c25.js", "gift-b590e7c8.js", "gift-21e1a3d0.css", "index-16afc258.js", "tools-65472fba.js", "index-cf8f8fcd.js", "index-645e4e5d.css", "index-c24bb7a4.css"]),
    t = () => f(() =>
        import ("./enter-28f5e10d.js"), ["enter-28f5e10d.js", "gift-b590e7c8.js", "gift-21e1a3d0.css", "enter-38e436df.css"]),
    E = {
        BcdRule: async () => ({
            default: (await a()).BcdRule
        }),
        BonusRakeback: async () => ({
            default: (await a()).BonusRakeback
        }),
        BcdTipsEnter: async () => ({
            default: (await t()).BcdTipsEnter
        }),
        BindBonusEvents: async () => ({
            default: (await t()).BindBonusEvents
        }),
        BonusPage: async () => ({
            default: (await a()).BonusPage
        }),
        BonusEnter: async () => ({
            default: (await t()).BonusEnter
        }),
        BonusNotify: async () => ({
            default: (await t()).BonusNotify
        }),
        PCLinkEnter: async () => ({
            default: (await t()).PCLinkEnter
        }),
        MobileLinkEnter: async () => ({
            default: (await t()).MobileLinkEnter
        }),
        MobileNumberEnter: async () => ({
            default: (await t()).MobileNumberEnter
        }),
        CatchCoco: async () => ({
            default: (await t()).CatchCoco
        }),
        BonusLink: async () => ({
            default: (await a()).BonusLink
        }),
        CoindropReceive: async () => ({
            default: (await a()).CoindropReceive
        }),
        CoindropSend: async () => ({
            default: (await a()).CoindropSend
        }),
        BonusGameList: async () => ({
            default: (await a()).BonusGameList
        }),
        SetCurrency: async () => ({
            default: (await a()).SetCurrency
        }),
        Promotion: async () => ({
            default: (await a()).Promotion
        }),
        PromotionDetail: async () => ({
            default: (await a()).PromotionDetail
        }),
        RainPage: async () => ({
            default: (await a()).RainPage
        }),
        RainSend: async () => ({
            default: (await a()).RainSend
        }),
        CrashRain: async () => ({
            default: (await a()).CrashRain
        }),
        GameRain: async () => ({
            default: (await a()).GameRain
        }),
        Recharge: async () => ({
            default: (await a()).Recharge
        }),
        RollPage: async () => ({
            default: (await a()).RollPage
        }),
        Spin: async () => ({
            default: (await a()).Spin
        }),
        AutoNewSpin: async () => ({
            default: (await t()).AutoNewSpin
        }),
        Task: async () => ({
            default: (await a()).Task
        }),
        NewUserTask: async () => ({
            default: (await t()).NewUserTask
        }),
        Tip: async () => ({
            default: (await a()).Tip
        }),
        Vip: async () => ({
            default: (await a()).Vip
        }),
        VipPage: async () => ({
            default: (await a()).VipPage
        }),
        VipLevel: async () => ({
            default: (await a()).VipLevel
        }),
        VipOffer: async () => ({
            default: (await a()).VipOffer
        }),
        Affiliate: async () => ({
            default: (await a()).Affiliate
        })
    };
export {
    f as _, E as a
};