var J = Object.defineProperty,
    G = Object.defineProperties;
var F = Object.getOwnPropertyDescriptors;
var R = Object.getOwnPropertySymbols;
var W = Object.prototype.hasOwnProperty,
    K = Object.prototype.propertyIsEnumerable;
var T = (s, e, t) => e in s ? J(s, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : s[e] = t,
    g = (s, e) => {
        for (var t in e || (e = {})) W.call(e, t) && T(s, t, e[t]);
        if (R)
            for (var t of R(e)) K.call(e, t) && T(s, t, e[t]);
        return s
    },
    P = (s, e) => G(s, F(e));
var B = (s, e, t) => (T(s, typeof e != "symbol" ? e + "" : e, t), t);
import {
    _ as p
} from "./main-10603bdf.js";
var Na = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {};

function O(s) {
    return s && s.__esModule && Object.prototype.hasOwnProperty.call(s, "default") ? s.default : s
}

function za(s) {
    if (s.__esModule) return s;
    var e = s.default;
    if (typeof e == "function") {
        var t = function a() {
            return this instanceof a ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments)
        };
        t.prototype = e.prototype
    } else t = {};
    return Object.defineProperty(t, "__esModule", {
        value: !0
    }), Object.keys(s).forEach(function(a) {
        var n = Object.getOwnPropertyDescriptor(s, a);
        Object.defineProperty(t, a, n.get ? n : {
            enumerable: !0,
            get: function() {
                return s[a]
            }
        })
    }), t
}
var i = globalThis["react/jsx-runtime"],
    h = globalThis.react;
const Y = O(h);
var o = globalThis["@bc/ui"];

function H({
    children: s
}) {
    return i.jsx(o.I18nProvider, {
        namespace: "bonus",
        locales: Object.assign({
            "../locales/ar-SA/bonus.json": () => p(() =>
                import ("./bonus-372feea9.js"), []).then(e => e.default),
            "../locales/bn-BD/bonus.json": () => p(() =>
                import ("./bonus-a618d897.js"), []).then(e => e.default),
            "../locales/de-DE/bonus.json": () => p(() =>
                import ("./bonus-5a189364.js"), []).then(e => e.default),
            "../locales/en-IN/bonus.json": () => p(() =>
                import ("./bonus-bd3b66e2.js"), []).then(e => e.default),
            "../locales/en-US/bonus.json": () => p(() =>
                import ("./bonus-c92fbde4.js"), []).then(e => e.default),
            "../locales/es-ES/bonus.json": () => p(() =>
                import ("./bonus-2a07ce94.js"), []).then(e => e.default),
            "../locales/fa-IR/bonus.json": () => p(() =>
                import ("./bonus-2cad8bd4.js"), []).then(e => e.default),
            "../locales/fi-FI/bonus.json": () => p(() =>
                import ("./bonus-f6c426a6.js"), []).then(e => e.default),
            "../locales/fil-PH/bonus.json": () => p(() =>
                import ("./bonus-0dffd8a2.js"), []).then(e => e.default),
            "../locales/fr-FR/bonus.json": () => p(() =>
                import ("./bonus-20c5812c.js"), []).then(e => e.default),
            "../locales/hi-IN/bonus.json": () => p(() =>
                import ("./bonus-45038407.js"), []).then(e => e.default),
            "../locales/id-ID/bonus.json": () => p(() =>
                import ("./bonus-ad483616.js"), []).then(e => e.default),
            "../locales/it-IT/bonus.json": () => p(() =>
                import ("./bonus-e13b52aa.js"), []).then(e => e.default),
            "../locales/ja-JP/bonus.json": () => p(() =>
                import ("./bonus-54a48876.js"), []).then(e => e.default),
            "../locales/ko-KR/bonus.json": () => p(() =>
                import ("./bonus-b9942a72.js"), []).then(e => e.default),
            "../locales/mr-IN/bonus.json": () => p(() =>
                import ("./bonus-dc38e47e.js"), []).then(e => e.default),
            "../locales/ms-MY/bonus.json": () => p(() =>
                import ("./bonus-5eb74e70.js"), []).then(e => e.default),
            "../locales/my-MM/bonus.json": () => p(() =>
                import ("./bonus-7307388e.js"), []).then(e => e.default),
            "../locales/nl-NL/bonus.json": () => p(() =>
                import ("./bonus-2e86d7a4.js"), []).then(e => e.default),
            "../locales/pl-PL/bonus.json": () => p(() =>
                import ("./bonus-818abe10.js"), []).then(e => e.default),
            "../locales/pt-BR/bonus.json": () => p(() =>
                import ("./bonus-6d65e522.js"), []).then(e => e.default),
            "../locales/ru-RU/bonus.json": () => p(() =>
                import ("./bonus-c09e6e29.js"), []).then(e => e.default),
            "../locales/ta-IN/bonus.json": () => p(() =>
                import ("./bonus-42ebd67a.js"), []).then(e => e.default),
            "../locales/te-IN/bonus.json": () => p(() =>
                import ("./bonus-37900750.js"), []).then(e => e.default),
            "../locales/th-TH/bonus.json": () => p(() =>
                import ("./bonus-87395718.js"), []).then(e => e.default),
            "../locales/tr-TR/bonus.json": () => p(() =>
                import ("./bonus-ee443048.js"), []).then(e => e.default),
            "../locales/uk-UA/bonus.json": () => p(() =>
                import ("./bonus-f744cdd8.js"), []).then(e => e.default),
            "../locales/ur-PK/bonus.json": () => p(() =>
                import ("./bonus-dd8b4a08.js"), []).then(e => e.default),
            "../locales/vi-VN/bonus.json": () => p(() =>
                import ("./bonus-72fd9fc5.js"), []).then(e => e.default)
        }),
        children: s
    })
}

function X(s) {
    return e => i.jsx(H, {
        children: i.jsx(s, g({}, e))
    })
}
const Z = 22,
    Q = 50,
    _ = {
        first: {
            bonusLogs: [],
            expiredTime: 0,
            maxBonusRatio: [3, 1.8, 2.4, 3, 3.6],
            cashbackBonus: [],
            freeSpins: null,
            newbieTaskBonus: null,
            lotteryBonus: null,
            currencyName: ""
        },
        second: 0
    },
    $ = {
        depositBonus: 0,
        freeSpinBonus: 0,
        levelUpBonus: 0,
        luckySpinBonus: 0,
        monthlyBonus: 0,
        questsBonus: 0,
        rechargeBonus: 0,
        rollCompetitionBonus: 0,
        sportsWeeklyBonus: 0,
        weeklyBonus: 0
    },
    ee = {
        first: {
            totalClaimed: 0,
            totalGeneralBonus: 0,
            totalSpecialBonus: 0,
            totalVipBonus: 0
        },
        second: 0
    },
    te = {
        first: {
            currentWager: "0",
            expireTimeEpochSecond: 0,
            levelLimit: 22,
            startTimeEpochSecond: 0,
            targetWager: "0"
        },
        second: 0
    },
    N = {
        first: {
            currentWager: 0,
            expireTimeEpochSecond: 0,
            startTimeEpochSecond: 0,
            levelLimit: 22,
            targetWager: 0
        },
        second: 0
    },
    se = {
        first: {
            rewardCurrency: "",
            rewardsAmount: 0,
            newbieTaskExpireTime: 0,
            rewards: [],
            dailyTasks: [],
            weeklyTasks: []
        },
        second: 0
    },
    ne = {
        first: {
            leftTimes: 0,
            level: 0,
            fiat: !1,
            levelUpdated: !1,
            dailySpinTimes: 0,
            dailyWager: 0,
            levelWager: 200,
            vipSpinTimes: 0
        },
        second: 0
    },
    ae = {
        first: {
            endTime: 0,
            intervalTime: 60 * 6e4,
            lastBetUsd: "0",
            lastReceiveTime: 0,
            nextBetUsd: "0",
            nextReceiveTime: 0,
            receiveTimeMS: 0,
            receiveUsd: "0",
            rewards: [],
            sendBonus: !1,
            startTime: 0,
            status: 0,
            vipLevel: 0,
            viphostUserId: 0,
            tire: {
                currentTire: {
                    endWager: 49999,
                    index: 1,
                    startWager: 1e3,
                    tireName: "Basic",
                    vipRechargeRate: .18
                },
                tires: []
            }
        },
        second: 0
    },
    oe = {
        first: {
            currentTime: 0,
            rollTimes: 0
        },
        second: 0
    },
    ie = () => o.http.post("/activity/bonus-dashboard/get/?channel=2"),
    re = () => o.http.post("/activity/bonus-dashboard/statistics/"),
    Ae = () => o.http.post("/new-reward/special/uncollected/");

function ce(s) {
    return o.http.post(`/activity/reward/receive/${s}/`)
}

function Ma() {
    const s = o.useLocalCurrency(),
        e = o.useSetting(),
        t = 1e3;
    return (a, n = !0, r = 2) => {
        const c = e.enableLocaleCurrency ? o.systemStore.getCurrencySymbol(e.localeCurrencyName) : "$",
            l = s.amount2local(new o.Decimal(a || 0)),
            A = l.gt(t) ? 0 : r,
            d = l.todp(A, o.Decimal.ROUND_DOWN).toNumber();
        return n ? d === 0 ? `${c}0.00` : `${c}${o.utils.numberWithCommas(e.localeCurrencyName,d)}` : d === 0 ? "0.00" : `${o.utils.numberWithCommas(e.localeCurrencyName,d)}`
    }
}

function le(s, e, t) {
    const a = o.utils.serverTime().getTime();
    return t > 0 ? 2 : a >= e ? 3 : s > 0 ? 1 : 0
}

function z(s) {
    let e = 0,
        t = 0,
        a = 0;
    const n = [],
        r = [],
        c = [];
    if (s) {
        const l = s.first.freeSpins;
        l && l.length > 0 && l.map(m => {
            if (m.claimedTime === 0) {
                a++;
                const w = {
                    rewardId: m.rewardId,
                    rewardBonusId: m.rewardBonusId,
                    count: m.dailyNum
                };
                c.push(w)
            }
            return m
        });
        const A = s.first.cashbackBonus;
        A && A.length > 0 && A.map(m => (m.rewardId > 0 && le(m.rewardId, m.expireTime, m.claimedTime) === 1 && (e++, n.push({
            count: m.count || 0,
            week: m.week || 0
        })), m));
        const d = s.first.lotteryBonus;
        d && d.length > 0 && d.map(m => {
            const f = m.currentLottery;
            if (f && f.rewardId > 0 && !(m.source === "newbie")) {
                t++;
                const y = {
                    rewardId: f.rewardId,
                    bonusAmount: m.totalCount
                };
                r.push(y)
            }
            return m
        })
    }
    return {
        deposit: e,
        lottery: t,
        freespin: a,
        deposits: n,
        lotterys: r,
        freespins: c
    }
}

function ue(s) {
    let e = 0;
    const t = [];
    if (s && s.first) {
        const a = s.first;
        a && a.length > 0 && a.map(n => {
            n.claimedTime > 0 || (e++, t.push({
                rewardId: n.rewardId,
                rewardBonusId: n.rewardBonusId,
                currency: n.bonusCurrencyName,
                amount: n.bonusAmount
            }))
        })
    }
    return {
        lottery_winnings: e,
        lottery_winnings_list: t
    }
}

function de(s) {
    if (!s || !s.second || s.second <= 0) return 0;
    const t = (s.first && s.first.rewards ? s.first.rewards : []).filter(a => a.rewardId > 0);
    return t ? t.length : 0
}
class j extends o.Howl {
    constructor(e) {
        super(g({
            preload: !1
        }, e))
    }
    play(e) {
        return this.state() === "unloaded" && this.load(), super.play(e)
    }
}
const me = "/modules/bonus/claim-d7b4098e.mp3";

function pe() {
    const s = new j({
        src: me
    });
    if (o.settingStore.state.soundEffectEnable) try {
        s.play()
    } catch (e) {}
}
const {
    useProxy: ge,
    proxy: fe
} = o.valtio, he = 24 * 60 * 60 * 1e3;
class be extends o.State {
    constructor(t) {
        super(t);
        B(this, "initData");
        B(this, "timer", null);
        B(this, "rollTimeDown", t => {
            t > 0 && (this.timer && clearInterval(this.timer), this.setState({
                timeDown: t
            }), this.state.timeDown = t, this.timer = setInterval(() => {
                const a = this.state.timeDown - 6e4;
                a <= 0 ? (this.state.showNotify = !0, this.setState({
                    timeDown: 0
                }), clearInterval(this.timer)) : this.setState({
                    timeDown: a
                })
            }, 1e3 * 60))
        });
        this.initData = this.initFn(), o.app.on("rewardClaim", () => {
            this.initFn()
        }), o.accountStore.waitLogin().then(() => {
            setTimeout(() => {
                this.firstInit()
            }, 1e3)
        })
    }
    async initFn() {
        if (await o.accountStore.initData, !o.accountStore.state.login) return o.accountStore.waitLogin().then(() => this.initFn()), this.state;
        try {
            this.setState({
                firstFlag: !1
            });
            const t = await Promise.all([ie(), re(), Ae()]);
            if (t && t.length === 3) {
                let a = g({}, this.state);
                const n = t[0],
                    r = t[2] || [];
                let c = n.unclaimedCount || 0;
                if (n.totalBonusReceived && n.totalBonusReceived.first && (a.totalBonusReceived = n.totalBonusReceived), n.statistics && n.statistics.first && (a.statistics = n.statistics), n.depositBonus && n.depositBonus.first && (a.depositBonus = n.depositBonus), n.bonusUnlock && n.bonusUnlock.first && (a.bonusUnlock = n.bonusUnlock), n.quests && n.quests.first) {
                    a.quests = n.quests;
                    const A = n.quests.first.rewards;
                    if (A && A.length > 0) {
                        const d = A.filter(m => m.rewardId > 0);
                        d.length > 1 && (c = c + d.length - 1)
                    }
                    n.quests.second > 0 && o.accountStore.state.vipLevel >= Q && (c = Math.max(c - 1, 0))
                }
                n.spin && n.spin.first && (a.spin = n.spin, n.spin.second > 0 && o.accountStore.state.vipLevel >= Q && (c = Math.max(c - 1, 0))), n.rollCompetition && n.rollCompetition.first && (a.rollCompetition = n.rollCompetition, n.rollCompetition.second > 0 && (c = Math.max(c - 1, 0))), n.freeMoneyBonus && (a.freeMoneyBonus = n.freeMoneyBonus), n.lotteryWinningsBonus && (a.lotteryWinningsBonus = n.lotteryWinningsBonus), n.recharge && n.recharge.first && (a.recharge = n.recharge), n.monthlyBonus && n.monthlyBonus.first && (a.monthlyBonus = n.monthlyBonus), n.weeklyBonus && n.weeklyBonus.first && (a.weeklyBonus = n.weeklyBonus), n.sportsWeeklyBonus && n.sportsWeeklyBonus.first && (a.sportsWeeklyBonus = n.sportsWeeklyBonus);
                let l = [];
                n.specialBonus && n.specialBonus.first && (l = [...this.transOldRewardToNew(n.specialBonus)]), l = r.concat(l), a.specialBonus = this.sortRewardList(l), r && r.length > 0 && (c += r.length), a.unclaimedCount = c, a.refresh = !this.state.refresh, a.statisticsDetail = t[1], a.isLoading = !1, a.isError = !1;
                try {
                    this.setState(g({}, a))
                } catch (A) {}
            }
        } catch (t) {
            o.notify(t), this.setState({
                isError: !0
            })
        }
        return this.state
    }
    firstInit(t = !1) {
        (this.state.firstFlag || t) && this.initFn()
    }
    sortRewardList(t) {
        const a = [...t];
        a.sort((r, c) => {
            const l = r.status === "DONE" ? 1 : 0,
                A = c.status === "DONE" ? 1 : 0;
            return l - A
        });
        const n = a.reduce((r, c) => c.status !== "DONE" ? r + 1 : r, 0);
        return {
            first: [...a],
            second: n
        }
    }
    transReawardItems(t) {
        return t.map(a => ({
            amount: new o.Decimal(a.amount).toNumber(),
            amountRequireWagerTimes: 0,
            claimLogId: "",
            claimTime: "",
            currencyName: a.name,
            currencyPrice: 0,
            quantity: "",
            rewardItemId: "",
            rewardItemType: "",
            status: "",
            used: !1
        }))
    }
    transOldRewardToNew(t) {
        return [...t.first].map(n => ({
            createTime: n.createTime + "",
            description: n.content,
            icon: n.iconUrl || "",
            relatedId: n.rewardId + "",
            rewardId: n.rewardId + "",
            rewardType: n.rewardType,
            status: n.status === 0 ? "INIT" : "DONE",
            title: n.title,
            updateTime: n.createTime + "",
            userId: n.name,
            items: this.transReawardItems(n.rewards)
        }))
    }
    getGeneralBonusAmount() {
        const t = de(this.state.quests),
            a = this.state.spin.second,
            n = this.state.rollCompetition.second,
            r = this.state.bonusUnlock ? this.state.bonusUnlock.second : 0,
            {
                deposit: c,
                lottery: l
            } = z(this.state.depositBonus),
            {
                lottery_winnings: A
            } = ue(this.state.lotteryWinningsBonus);
        return t + a + n + r + c + l + A
    }
    getVipBonusAmount() {
        const t = this.state.recharge.second,
            a = this.state.weeklyBonus.second,
            n = this.state.monthlyBonus.second,
            r = this.state.sportsWeeklyBonus.second;
        return t + a + n + r
    }
    getFreeSpinBonusAmount() {
        const {
            freespin: t
        } = z(this.state.depositBonus);
        return t
    }
    async receiveReward(t) {
        if (!t) return;
        const a = [...this.state.specialBonus.first],
            n = a.findIndex(r => r.rewardId === t);
        if (n >= 0) {
            const r = g({}, a[n]);
            if (r && r.status !== "DONE") try {
                await ce(t), pe();
                const c = [...a];
                return c[n].status = "DONE", this.state.specialBonus = {
                    first: c,
                    second: this.subNumber(this.state.specialBonus.second)
                }, this.state.unclaimedCount = this.state.unclaimedCount - 1, !0
            } catch (c) {
                return o.notify(c), !1
            } else return !1
        } else return !1
    }
    subNumber(t) {
        return t <= 0 ? 0 : t - 1
    }
    setTimedownInfo(t) {
        let a = this.state.timeDown;
        if (t.spin && t.spin.second <= 0) {
            const n = this.state.nextSpinTime - Date.now();
            n <= a && (a = n, this.state.notifyType = "spin")
        }
        if (o.accountStore.state.vipLevel >= Z && t.recharge && t.recharge.second <= 0 && t.recharge.first.status >= 2) {
            const n = t.recharge.first.receiveTimeMS;
            n && n > 0 && n < a && (a = n, this.state.notifyType = "recharge")
        }
        a !== this.state.timeDown && this.rollTimeDown(a)
    }
    async updateLotteryFreeTicket(t) {
        this.state.isLotteryFreeTicketLoading || (this.state.isLotteryFreeTicketLoading = !0, o.http.get("/activity/recharge-bonus/lottery/").then(a => {
            let n = g({}, this.state.depositBonus);
            n.first.lotteryBonus = a, this.setState({
                isLotteryFreeTicketLoading: !1,
                depositBonus: n
            }), t && t(a)
        }).catch(a => {
            o.notify(a), this.setState({
                isLotteryFreeTicketLoading: !1
            })
        }))
    }
    async updateFreeSpin() {
        this.state.isFreeSpinLoading || (this.setState({
            isFreeSpinLoading: !0
        }), o.http.get("/activity/recharge-bonus/freeSpin/").then(t => {
            let a = g({}, this.state.depositBonus);
            a.first.freeSpins = t, this.setState({
                isFreeSpinLoading: !1,
                depositBonus: a
            })
        }).catch(t => {
            o.notify(t), this.setState({
                isFreeSpinLoading: !1
            })
        }))
    }
    async updateNewDeposit() {
        this.state.isNewDepositLoading || (this.setState({
            isNewDepositLoading: !0
        }), o.http.get("/activity/recharge-bonus/depositBonus/").then(t => {
            let a = g({}, this.state.depositBonus);
            a.first.cashbackBonus = t, this.setState({
                isNewDepositLoading: !1,
                depositBonus: a
            })
        }).catch(t => {
            o.notify(t), this.setState({
                isNewDepositLoading: !1
            })
        }))
    }
    async updateAll() {
        this.updateFreeSpin(), this.updateLotteryFreeTicket(), this.updateNewDeposit()
    }
    async updateFirstDeposit() {
        const t = this.state.depositBonus.first.cashbackBonus;
        t && (t == null ? void 0 : t.length) > 0 && this.updateAll()
    }
    async spinNextTime() {
        const t = o.utils.serverTime(),
            a = t.getUTCFullYear(),
            n = t.getUTCMonth(),
            r = t.getUTCDate() + 1;
        this.setState({
            nextSpinTime: Date.UTC(a, n, r, 0, 0, 0)
        })
    }
}
const v = new be(fe({
    refresh: !1,
    firstFlag: !0,
    unclaimedCount: 0,
    totalBonusReceived: {
        first: 0,
        second: 0
    },
    bonusUnlock: null,
    quests: g({}, se),
    spin: g({}, ne),
    depositBonus: g({}, _),
    nextSpinTime: Date.now(),
    recharge: g({}, ae),
    statistics: g({}, ee),
    statisticsDetail: g({}, $),
    rollCompetition: g({}, oe),
    weeklyBonus: g({}, N),
    monthlyBonus: g({}, N),
    sportsWeeklyBonus: g({}, te),
    freeMoneyBonus: null,
    lotteryWinningsBonus: {
        first: [],
        second: 0
    },
    specialBonus: {
        first: [],
        second: 0
    },
    timeDown: he,
    showNotify: !1,
    notifyType: "",
    isLoading: !0,
    isError: !1,
    isFreeSpinLoading: !1,
    isLotteryFreeTicketLoading: !1,
    isNewDepositLoading: !1
}));

function Ia() {
    return ge(v.state)
}

function D(...s) {
    return s.filter(Boolean).join(" ")
}
Be(s => De(s).toString(36));

function Be(s, e) {
    if (typeof s != "function" || e != null && typeof e != "function") throw new TypeError(FUNC_ERROR_TEXT);
    var t = function() {
        var a = arguments,
            n = e ? e.apply(this, a) : a[0],
            r = t.cache;
        if (r.has(n)) return r.get(n);
        var c = s.apply(this, a);
        return t.cache = r.set(n, c) || r, c
    };
    return t.cache = new Map, t
}

function De(s, e) {
    var t, a, n, r, c, l, A, d;
    for (t = s.length & 3, a = s.length - t, n = e, c = 3432918353, l = 461845907, d = 0; d < a;) A = s.charCodeAt(d) & 255 | (s.charCodeAt(++d) & 255) << 8 | (s.charCodeAt(++d) & 255) << 16 | (s.charCodeAt(++d) & 255) << 24, ++d, A = (A & 65535) * c + (((A >>> 16) * c & 65535) << 16) & 4294967295, A = A << 15 | A >>> 17, A = (A & 65535) * l + (((A >>> 16) * l & 65535) << 16) & 4294967295, n ^= A, n = n << 13 | n >>> 19, r = (n & 65535) * 5 + (((n >>> 16) * 5 & 65535) << 16) & 4294967295, n = (r & 65535) + 27492 + (((r >>> 16) + 58964 & 65535) << 16);
    switch (A = 0, t) {
        case 3:
            A ^= (s.charCodeAt(d + 2) & 255) << 16;
        case 2:
            A ^= (s.charCodeAt(d + 1) & 255) << 8;
        case 1:
            A ^= s.charCodeAt(d) & 255, A = (A & 65535) * c + (((A >>> 16) * c & 65535) << 16) & 4294967295, A = A << 15 | A >>> 17, A = (A & 65535) * l + (((A >>> 16) * l & 65535) << 16) & 4294967295, n ^= A
    }
    return n ^= s.length, n ^= n >>> 16, n = (n & 65535) * 2246822507 + (((n >>> 16) * 2246822507 & 65535) << 16) & 4294967295, n ^= n >>> 13, n = (n & 65535) * 3266489909 + (((n >>> 16) * 3266489909 & 65535) << 16) & 4294967295, n ^= n >>> 16, n >>> 0
}
const we = "/modules/bonus/bonus-90a1735c.png",
    ye = "/modules/bonus/bonus_d-ed8d9039.png",
    Ce = "data:image/png;base64,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",
    Se = "/modules/bonus/bcdunlock-4c3e0f44.png",
    ve = "/modules/bonus/coin-968b6427.png",
    Te = "/modules/bonus/money-7fa4e398.png",
    Ve = "/modules/bonus/rakeback-dee50f49.png",
    ke = "/modules/bonus/spin-463f2a1f.png",
    xe = "/modules/bonus/spin_fiat-ca545efc.png",
    qe = "/modules/bonus/quests-7ae7831a.png",
    je = "/modules/bonus/egg-4a882516.png",
    Ee = "/modules/bonus/roll-02855245.png",
    Ue = "/modules/bonus/recharge-e80e2af9.png",
    Re = "/modules/bonus/weeklybonus-a15a7b47.png",
    Pe = "/modules/bonus/monthlybonus-41ba9cad.png",
    Qe = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAA8CAMAAAA0RZgbAAAC91BMVEUAAABYDARfCwRRAABLAABJAABIAABKAABKBQP/1JyIRA2HRAxJAACNUBf80JqJRA355n7905uIRRCIRA2HRQ2HRQ6JRxH//9v+05v5zJn4y5jcroCJRQ6HQw3/87+CQAuISBD/+beIRQ6HRQ6JRw+OSRa5LPH577R8x5750ZT/88/+76/xvpr2xpn45YHvupznqKXzx5P66bDxxZDtwY7KoFyvfDfgsoOWWR2IRQ6FQgz+8K3+7p51PSz/8pv/98+STBP/9ND97aT88srz7cL86pX76In/8L776qPqwILYV9PRc8r14ZbxtKXXgbTkoKThw37/88v24YvXtXPXtm397aLpvIr+8r/nzHDmuIj854SmcDf+8sGjaSqKSRp9OQv/8sb96Y/QoXT765L/88DLmHB+NwuIRg+IRg/86YefaU1nIwX/87NdFQdjKB/a5sDxzYin1bbMM/GdKevdOfG0MemkLufW5L7wd/TFOebaZez24X3WQ+Xq0XPN4rGvRtzkc+X033m1SdX/9M/97J3/89Dsis/hbsL97aru1oPcdb3Ne7vqoqzUhq7+76znzXD/8sj233rev2P765H754Tau3X/88/Tr2Lnzo7/8tHJoU7/883ozW755H+6jEK2h0Xr0HPCl0fXqHfly3CmbEKRURX/77L97JjQoHb/9NLEk2xzMQm5hmG3g2CqdFmFUDr/9NL977D/1Jz/8syzOvOgJO+aJO+mLvGvK+7YYvfhUO/KO+7WRu28M+0KmpEIoY7md/nARfUMmJjlzHD+8sgNlKAMlpz865cIoIf66IDzcf6+M+7+8cL977X97aYMnZX76YvsefrNUffdM/bETPX/88/87J776pAInYv66IXx23nmZ/vCSfXMMfP+8Lz97qoOkaTpb/rVWffVMPbeQ/LUQO/LO++tKu6Bxq2/26tVsKtIqqtsvapgt6qh0aMwoaIinp7jcvinL/HCLvGnJfDcSu+xKu+t1rTr6a7R36o6o6Y1s5M3sJB1vDZKAAAAsXRSTlMABgQKDhIbGB/8ZTsVDe5w/vNQQzUwGwT45t1+elo7KycKXkgiFv7+/fzv3dza2djRw7q5q6KRiIRrV081KiAVEvv7+vrz8fDr5t/a19LR0czCt6+kop6WlpWSj4mJh4aAe25kY15dVU1MOy8pJiX9/fr5+ff19PTy8e/v6+vq6ejl4+Hg2trV1dTT09PQzsvIx8LBwcC7ubeysK6uraubl5OSiXh4cGpmWlpUTEpCMC39GEEeAAADgklEQVRIx9WTVVQbQRSGs9lslEaA0CRAKNDiDsUp1N3d3d3d3d3dXZgqdUkb0iZpCi0Ub5HiUteHDix0Z8jpc0+/zcnZm/3OzL9zb1j/OY7R0Y5/e6Qe1nPHUo/GryCNPZbv7nf6Ul1MqNu56WUzPPZiziaNpunMyQUlpUXFxUWlJQVfJ2o0ms6YMkjfLP7evecPnzx+8/jJw7t3X8fHN9MMwhS1Xv8TV37p9Wo8TMtMN1xxy2yJ540JMCyAyvOK8h/lFVVKYWZAHUSoYy3sZnAtK/wWS+P6vczN1dDV3oH9RyHk9n1ja2Ew9LWsx2KoZ2nnGevZ80SEOnLcOHXEsH4BnrGtJFY2iGJjJdmVtQoNtyGrk1CEhREJGxqNjZgforOMDcPlLBR5eGiTJkOZOsJoDB1VH1Pqj7Jrl9SdqbsntQuzaoApDazCuia1Ys5qWdJ2J2sYBTsZp2CtNrKmbKTVHhzpwMJxGGnXXDu4pjqpbX7cGUbBwzhLuiRvram6JK8OE8EoeBj42qZkx+qmtkje6WRN1FIIa6f+JtNouog0mYItmShID3xS+tD3g1NaSJxtzBQbZ8m+FB/6flvKRqEoxkyJEQkP63RVPXCU6vbYy5koyECESnVVPRit0/VnBgEPs1m6n8Vms/pIFyODgA9EN+lcgiAJH+kWZBDwgQhOTT3Uq9fR1NQD9nJmJtGTGTFw/iOaAeEOhLlDkGNHDOw0yV0A3N1bDzg7nqQdzKDGHmsNBN7t2/uKgezIeIvaDpukuEMUsnWznlayQgUCJ0AHMwgOb7hAuSjt7QvI27Q0PxDIp0g2tojFRbF4Ttz7+zRx2X7Alssh0CQcbg/QNiEhrprshASVOAougyaZIPN9AEl/CUlPh3dtgS2PJNB9hoO1V3Bk/uhOBMkLAQuvo3y47qvkUwQeZeo1nI4KqLARpTeYcRXHT4YpJM8WLMm/gZD/yUvF52Bxz4H1X57duQM/8AteLtMFQVxUISi+Uuny7BbNO3i5dACn0JeGYeBOHT7m3a4hY7ZYhXcAnh3fW9AmI+9mFZ8zpngJzvA4BD4LFmPEijU5ibnQyM2Z5w1CYBJ27VaPUQGvldMSExPbdFQIbPkUnQR3onrLgECsVADgf55LMSOFOBQ3akhQoH9QyAW+BYcxUIfkUDwuhAcFZhfMgRLJgcDnyBLmViXwH/kP+A0MspdQULbX5QAAAABJRU5ErkJggg==",
    Ne = "data:image/png;base64,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",
    ze = "data:image/png;base64,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",
    Me = "data:image/png;base64,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",
    Ie = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAeCAMAAAAW0r4eAAAAkFBMVEUAAADe/++e/9G4/+i+/+DC/+HR/+a4/97d/+yU/8yZ/8/G/+LC/+Gi/9Sj/9Sy/9rW/+2m/9Xn//Pm//bG/+Pg//Kv/9ei/9Kj/9Oe/9DV/+rH/+O5/97L/+fk//Cd/9G//9/i//Sf/9Ge/9HS/+nw//+Q/8mV/86l/9bH/+W+/+Gf/82S/83a/+yz/9vb/+1N+oNCAAAAMHRSTlMAMG8GUU0KVjR5dEkOa19aODgrGxoTEWtlTTw7Oi4qKScjHhkRCGdZSkRDPTg3MiqnlhkgAAAAo0lEQVQoz7XPxxKCMBCA4YWYYAy9Si+Cvbz/24kopFw8OP6XzHyT7GTh53ZIlSvdK1ZTSg+SdPpmLBUk3upTl0WQbSW2l1qJVfNLx248TM/2vn3LKRSJDce5S0KwMdYIgs6rqZBTgTHOGcasn8Vkp4YAhDkrYbF5pLQ5KkNQ0rIskuXhuu7NFKVdv9IIl0B7Vy3jB99vIyBB5QcwF31e9AP8vycX5Qi0WzhjawAAAABJRU5ErkJggg==",
    Le = "/modules/bonus/contest-5e67a0ec.png",
    Oe = "/modules/bonus/vipbonus-111c33a4.png",
    Ye = "/modules/bonus/levelup-40314c2d.png",
    Je = "/modules/bonus/general-8f62a12e.png",
    Ge = "/modules/bonus/sportsbonus-2d8f394d.png",
    Fe = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAABFFBMVEUAAAD19fj6+v3x8/Xs7fLz9Pfu8PP09fft7vL19vny9Pf19fn////z9Pf29/ny8/br7PL19fj3+Pnq7PHy8/b09vj09fj09ffy8vb4+Pj////x8vb29vnp6/Dv8PPz8/bu8PP09fjp6vDr7fH09fjt7/T19/jz9Pbx8vb29vjt7/P29vv4+Prx9Pf////v8PTr7fL3+Pro6e/u7/Pr7PDw8fX39/nu7/Tq6/D4+Pr19fn19vj19fno6e/29vj3+vrx8fj29v/t7f/3+Pr5+fv6+/z39/nw8PTp6u/x8fXy8/b8/P3q6/Ho6e/t7vP09fjr7fHu7/Ts7fLz9Pfn6O79/f3+/v79/f709ff29vnm5+7///9Bc8E0AAAAQ3RSTlMAIBBAuJuRgXBSRioF+/Pw6uba0tG4o2g4Fwj59+/t69rDwbGoo5GFeW9dOjEtC/n59vTy4+Hg38q8s62djohdJRwOxjewsAAAA4lJREFUSMfFVed61DAQdHoC6aRA6JAeCL13rsjS2ZZk2Tnf8f7vwezKVnrygx/MXXz+/M1odnYlJ/ofeDa19ml5/tXy482dg+vZB9vvW90W0G11uy29NHHjSvrN1RbxatD9oHp8+1L6nYmB57XbbVy9jdZqc+SS2pdqeg3ckUY7tXBhXTP3UEyb6B3+AsFjbv08f2/QrVfvsKKDC+SQQCHF5Ln1BxQWjA74DNbhERROSTl9pj3z8Kb1md7r0YW0XBZapcTdsZP80WUqKPChKHH1Jm0s5ZyyD072attpz2eUvRIK2AQL7aTMnh7zR+aq0CGs3uuX/SBgC11JYfPjCa6pukVUTlmCf9Tv93u1hBulpDVPQmKlNUeoDY6Afr8sy16oySlhM9PMb0c2EdqcF/w/+CtPOFRKiSzZqgUr0nFJTYI+C+DQAdiBS8qS+7M+smwcuKcUgItiAR7y6JyAQ+xnMS2k5jkzHyVBAgMOzdMGNDKYJP3GggkrVR2ah4yu4oPUPLlmxwqRJ+k4C8atUlW3UVBq7lBtwKFpDpmJi1ssuGWFQ4haQKPwk6Z7b0CZKUJ6nwWLGUJoPpnHe6kT5kwJKLNJ4mG6QYKXEKiKdysJAsJuJQOZIUIR3yHBW2MbizZ51LJwHjgyV5QmPIiPeWZhEU5cfdr8CMiggiDPTVGki5zhaWIgUE6jqloS6HjCiS0MijT2XZqMk8wKtFazR6PBHQu033gxDBI/h/0iMVBI5zgHEMhdqp9mlrOB2fXnM42THJ3iHEECPqArxeubOC3Aeh4xnkBBHshRoVuDmkzVeD6tXxQm/xB5TA9JTQrpSDLQhAHTpWR+igAmm2zeqa+H7EFBlCIfh9niV0qBo2xofSIIVOQxlVIiMrFCQCGRBx900yKub5DJs62owe/FdEgmuYGGRLy0tVlmqJwh+CjgxUgUMB0nZBInSZ7nGYALs5M4LmgpuJ9+vY7zQkUBDYlMbkxC7BTVcDlCrByeelc+MpDABe0OSOlBQeGslQ9HzryN3xgDCtuwDncoBr0wxmKqc2PRGYw9QB1cRQ0arW+dkOLuTHQOPx/ZDBKUBjAXbAM6Or104T/G0VUcE2tyBn5AzgS12K38ii7G/jtpIQIsuBYfTNA93JuNLsPG7oKkNaWgrwLb3fs+Gl2Fw5m1Bb8vnFNu/ssP0K/D7Nj61MTn1a9T6zc2on/HX+xjtbNN0WZFAAAAAElFTkSuQmCC",
    We = "data:image/png;base64,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",
    Ke = "/modules/bonus/guide_header-f28d63d3.png",
    He = "data:image/png;base64,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",
    Xe = "/modules/bonus/jackpot_ball_banner_s-03f82800.png",
    Ze = "/modules/bonus/jackpot_ball_banner_s_white-62ba2d53.png",
    _e = "/modules/bonus/bonus_deposit-f4714a04.png",
    $e = "/modules/bonus/bonus_lottery-888e9bcf.png",
    et = "data:image/png;base64,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",
    S = {
        bonus_deposit: _e,
        bonus_lottery: $e,
        bonus_spin: et,
        bonus: we,
        bonus_d: ye,
        net: Ce,
        bcdunlock: Se,
        coin: ve,
        money: Te,
        rakeback: Ve,
        spin: ke,
        spin_fiat: xe,
        quests: qe,
        roll: Ee,
        egg: je,
        recharge: Ue,
        weeklybonus: Re,
        monthlybonus: Pe,
        spin_bg: ze,
        turntable: Ne,
        pointer: Qe,
        imgprogress: Ie,
        recharge_s: Me,
        vipbonus: Oe,
        levelup: Ye,
        contest: Le,
        general: Je,
        sportsbonus: Ge,
        ballWhite: Fe,
        ball: We,
        guideHeader: Ke,
        jackpotBall: He,
        jackpotBallBanner: Xe,
        jackpotBallBannerWhite: Ze
    };

function tt(s) {
    const e = {
        expiredTime: 0,
        fromCurrencyAmount: String(s),
        fromCurrencyName: "BCL",
        lotteryList: [{
            numbers: [],
            jackpotBallNumber: 0,
            quantity: 1,
            pickType: 1
        }],
        toCurrencyName: "BCL"
    };
    return o.http.post("/lottery/five-plus-one/buy/", e)
}
const V = function({
    nums: e,
    jackpotNum: t,
    className: a
}) {
    const n = o.useIsDarken();
    return i.jsxs("div", {
        className: D(ot, a),
        children: [i.jsx("img", {
            className: "img-bg",
            src: n ? S.jackpotBallBanner : S.jackpotBallBannerWhite,
            alt: ""
        }), i.jsxs("div", {
            className: "jackpot-wrap",
            children: [i.jsx("div", {
                className: "nums",
                children: e.map(r => i.jsxs("div", {
                    className: "ball",
                    children: [i.jsx("img", {
                        src: n ? S.ball : S.ballWhite,
                        alt: ""
                    }), i.jsx("div", {
                        className: "num",
                        children: r
                    })]
                }, r))
            }), i.jsx("div", {
                className: "jackpotNum",
                children: i.jsxs("div", {
                    className: "ball",
                    children: [i.jsx("img", {
                        src: S.jackpotBall
                    }), i.jsx("div", {
                        className: "num",
                        children: t
                    })]
                })
            })]
        })]
    })
};

function k(s) {
    return s > 9 ? s : "0" + s
}

function st({
    number: s
}) {
    const {
        t: e
    } = o.useTranslation(), t = o.usePop(), a = o.useIsDarken(), n = o.useNavigate(), {
        data: r
    } = o.useAsync(() => tt(Number(s)));
    return r ? i.jsxs("div", {
        className: at,
        children: [i.jsxs("div", {
            className: "header",
            children: [i.jsx("img", {
                src: S.guideHeader,
                className: ""
            }), i.jsx("div", {
                className: "big-title",
                children: e("Lottery Jackpot")
            })]
        }), i.jsxs("div", {
            className: "scroll-wrapper",
            children: [i.jsx(o.CloseIcon, {
                onClick: () => t.close()
            }), i.jsxs("div", {
                className: "next-time",
                children: [i.jsx("div", {
                    className: "txt",
                    children: e("Next Draw Start in")
                }), i.jsx("div", {
                    className: D("time", a ? "dark" : ""),
                    children: i.jsx(o.Countdown, {
                        endTime: r.expireTimeInMs + Date.now(),
                        onEnd: () => {},
                        children: ({
                            hours: c,
                            minutes: l,
                            seconds: A
                        }) => i.jsxs(i.Fragment, {
                            children: [i.jsxs("span", {
                                children: [k(c), "h"]
                            }), ":", i.jsxs("span", {
                                children: [k(l), "m"]
                            }), ":", i.jsxs("span", {
                                children: [k(A), "s"]
                            })]
                        })
                    })
                })]
            }), i.jsx("div", {
                className: D("spectial-text", a ? "dark" : ""),
                dangerouslySetInnerHTML: {
                    __html: Number(s) > 1 ? `${e("YOU GOT")} <span class="green">${Number(s)} ${e("Ticket Numbers")}</span>` : e("YOUR <span class='green'>Ticket NUMBERS</span> ARE..")
                }
            }), i.jsx("div", {
                className: "jackpotball-wrapper",
                children: Number(s) > 1 ? i.jsxs(h.Fragment, {
                    children: [i.jsx(V, {
                        nums: r.numbers,
                        jackpotNum: r.jackpotBallNumber
                    }), i.jsx(V, {
                        nums: r.numbers,
                        jackpotNum: r.jackpotBallNumber,
                        className: "float-jackpot"
                    })]
                }) : i.jsx(V, {
                    nums: r.numbers,
                    jackpotNum: r.jackpotBallNumber
                })
            }), i.jsx("div", {
                className: "btn-wrapper",
                children: i.jsx(o.Button, {
                    type: "conic4",
                    className: "btn",
                    onClick: () => {
                        n("/lottery/myBets"), t.close()
                    },
                    children: e("Go to Lottery")
                })
            })]
        })]
    }) : i.jsx(o.Loading, {})
}
const nt = X(st),
    at = "v1ajtup7",
    ot = "jbter41";
var La = globalThis["framer-motion"];
const it = "/modules/bonus/glod_bg-ff13c349.png",
    rt = "/modules/bonus/bg1-36f9d669.png";

function At({
    time: s
}) {
    const [e, t] = o.useSetState({
        time: s
    });
    return h.useEffect(() => {
        const a = e.time - 1,
            n = setTimeout(() => {
                t({
                    time: a
                })
            }, 1e3);
        return () => clearTimeout(n)
    }, [e.time]), e.time <= 0 ? null : i.jsxs("div", {
        className: "time",
        children: [e.time, "s"]
    })
}

function ct({
    time: s,
    amount: e,
    currency: t
}) {
    const a = o.usePop(),
        [n, r] = o.useSetState({
            rotate: !1
        }),
        {
            t: c
        } = o.useTranslation();
    return h.useEffect(() => {
        const l = setTimeout(() => r({
                rotate: !0
            }), 1300),
            A = setTimeout(() => a.close(), s * 1e3);
        return () => {
            clearTimeout(l), clearTimeout(A)
        }
    }, []), i.jsxs("div", {
        className: lt,
        children: [i.jsx(At, {
            time: s
        }), i.jsx("img", {
            className: D("img-bg", n.rotate && "rotate"),
            src: rt,
            alt: ""
        }), i.jsx("img", {
            className: "img_glod",
            src: it,
            alt: ""
        }), i.jsxs("div", {
            className: "content",
            children: [i.jsx("div", {
                className: "txt tit ttu",
                children: c("Rewards Claimed")
            }), i.jsxs("div", {
                className: "amount",
                children: [e, " ", o.systemStore.getAlias(t)]
            }), i.jsx("div", {
                className: "txt ttu",
                children: c("Bonus")
            })]
        })]
    })
}
const lt = "s1czd39q",
    ut = "/modules/bonus/bg3-135f1264.png";

function dt({
    data: s,
    total: e
}) {
    const [t, a] = o.useSetState({
        rotate: !1,
        chooseIndex: 0
    }), n = o.useNavigate(), {
        t: r
    } = o.useTranslation(), c = o.usePop(), l = o.useDialog();
    h.useEffect(() => {
        const m = setTimeout(() => a({
            rotate: !0
        }), 1300);
        return () => {
            clearTimeout(m)
        }
    }, []);
    const A = () => {
            l.close(), c.close(), s.gameUnique.includes("detrade:trading") ? n("/trading") : n(`/game/${s.gameUnique}?fsId=${s.fsId}&fs=${s.fsRoundTotal-s.fsRoundUsed}`)
        },
        d = Math.ceil(e / s.dailyNum);
    return i.jsxs("div", {
        className: mt,
        children: [i.jsx(o.CloseIcon, {
            onClick: () => c.close()
        }), i.jsx("img", {
            className: D("img-bg", t.rotate && "rotate"),
            src: ut,
            alt: ""
        }), i.jsxs("div", {
            className: "content",
            children: [i.jsx("div", {
                className: "txt tit",
                children: r("{{dailyNum}} Free Spin Claimed", {
                    dailyNum: String(s.dailyNum)
                })
            }), i.jsx("div", {
                className: "txt sub-tit",
                children: r("You can claim {{dailyNum}} FS per day for {{days}} days in a row in total {{total}} free spins.", {
                    dailyNum: String(s.dailyNum),
                    days: d,
                    total: e
                })
            }), i.jsxs("div", {
                className: "games",
                children: [i.jsx("img", {
                    src: s.thumbnail,
                    alt: ""
                }), i.jsx("div", {
                    className: "provider",
                    children: s.providerName
                })]
            }), i.jsx(o.Button, {
                onClick: A,
                type: "conic",
                children: r("Play")
            })]
        })]
    })
}
const mt = "s82nv2u",
    pt = "/modules/bonus/ticket_bg-a8bf0d1c.png",
    gt = "/modules/bonus/bg2-2d386db4.png",
    ft = "/modules/bonus/ball-3117206e.png",
    ht = "/modules/bonus/ball_w-e380db03.png";

function bt({
    ball: s,
    jackpot: e
}) {
    const t = o.useIsDarken();
    return i.jsxs("div", {
        className: D("ball-wrap", wt),
        children: [i.jsx("img", {
            className: "ball-bg",
            src: t ? ft : ht,
            alt: ""
        }), i.jsxs("div", {
            className: "ball-list",
            children: [s.map((a, n) => i.jsx("div", {
                className: "ball",
                children: a
            }, n)), i.jsx("div", {
                className: "jackpot",
                children: e
            })]
        })]
    })
}

function Bt({
    time: s
}) {
    const [e, t] = o.useSetState({
        time: s
    });
    return h.useEffect(() => {
        const a = e.time - 1,
            n = setTimeout(() => {
                t({
                    time: a
                })
            }, 1e3);
        return () => clearTimeout(n)
    }, [e.time]), e.time <= 0 ? null : i.jsxs("div", {
        className: "time",
        children: [e.time, "s"]
    })
}

function Dt({
    time: s,
    data: e
}) {
    const [t, a] = o.useSetState({
        rotate: !1
    }), n = o.usePop(), {
        t: r
    } = o.useTranslation();
    h.useEffect(() => {
        const l = setTimeout(() => a({
                rotate: !0
            }), 1300),
            A = setTimeout(() => n.close(), s * 1e3);
        return () => {
            clearTimeout(l), clearTimeout(A)
        }
    }, []);
    const c = e && e.currentLottery;
    return c ? i.jsxs("div", {
        className: M,
        children: [i.jsx(Bt, {
            time: s
        }), i.jsx("img", {
            className: D("img-bg", t.rotate && "rotate"),
            src: gt,
            alt: ""
        }), i.jsx("img", {
            className: "img_glod",
            src: pt,
            alt: ""
        }), i.jsxs("div", {
            className: "content",
            children: [i.jsxs("div", {
                className: "txt tit ttu",
                children: [r("Rewards Claimed"), "!"]
            }), i.jsx(bt, {
                ball: c.lotteryResult.numbers,
                jackpot: c.lotteryResult.jackpotBallNumber
            }), i.jsx("div", {
                className: "txt ttu",
                children: r("Bonus")
            })]
        })]
    }) : i.jsx("div", {
        className: M,
        children: i.jsx(o.Empty, {})
    })
}
const M = "s1w0s9pt",
    wt = "b13nhtvt",
    x = "data:image/png;base64,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";

function yt(s) {
    return v.state.depositBonus.first.cashbackBonus.find(a => a.count === s)
}

function Ct(s) {
    return o.http.post("/task/take-reward/", {
        rewardId: s
    })
}
const q = Y.memo(function({
    tit: e
}) {
    const [t] = h.useState(e);
    return i.jsx("div", {
        className: "bonus-tit",
        children: t
    })
});

function Oa({
    count: s
}) {
    const e = yt(s),
        t = 3,
        a = o.useSetting(),
        {
            t: n
        } = o.useTranslation(),
        r = o.useDialog(),
        c = o.usePop(),
        [l, A] = o.useSetState({
            claimAll: !1,
            loading: !1,
            claimCash: !1,
            claimSpin: !1,
            hasSpin: e.freeSpin > 0,
            claimLottery: !1,
            hasLottery: e.lottery > 0
        }),
        d = o.useNavigate(),
        m = h.useCallback(() => {
            c.push(i.jsx(ct, {
                time: t,
                amount: e.bonusAmount,
                currency: e.bonusCurrencyName
            }))
        }, []),
        f = h.useCallback(b => {
            c.push(i.jsx(Dt, {
                data: b,
                time: t
            }))
        }, []),
        w = h.useCallback(b => {
            c.push(i.jsx(dt, {
                data: b,
                total: e.freeSpin
            }), {
                closeable: !1
            })
        }, []);
    async function y() {
        if (l.claimAll) r.close(), d("/bonus");
        else {
            A({
                loading: !0
            });
            const b = await Ct(e.rewardId);
            m(), A({
                claimCash: !0
            }), (b.lottery || b.freeSpinBean) && await o.utils.delay((t + .5) * 1e3), b.lottery && (f(b.lottery), A({
                claimLottery: !0
            }), b.freeSpinBean && await o.utils.delay((t + .5) * 1e3)), l.hasSpin && b.freeSpinBean && (w(b.freeSpinBean), A({
                claimSpin: !0
            })), v.updateAll(), A({
                loading: !1,
                claimAll: !0
            })
        }
    }
    const C = a.enableLocaleCurrency;
    return e ? i.jsx(o.Dialog, {
        className: St,
        children: i.jsxs(o.ScrollView, {
            children: [i.jsx("div", {
                className: "title",
                children: n("Congratulations!")
            }), i.jsx("div", {
                className: "sub-tit",
                children: n("Claim your Deposit Bonus below!")
            }), i.jsxs("div", {
                className: D("bonus-item bg-0", (l.claimAll || l.claimCash) && "claimed"),
                children: [i.jsx(q, {
                    tit: `${o.utils.numberWithCommas(C&&a.localeCurrencyName,e.bonusAmount)} ${o.systemStore.getAlias(e.bonusCurrencyName)} ${n("Bonus")}`
                }), i.jsxs("div", {
                    className: "claim-desc",
                    children: [i.jsx("img", {
                        src: x
                    }), " ", n("Claimed")]
                }), i.jsx("div", {
                    className: "bonus-desc",
                    dangerouslySetInnerHTML: {
                        __html: n("Deposit more to get more bonuses.")
                    }
                })]
            }), l.hasLottery && i.jsxs("div", {
                className: D("bonus-item bg-1", (l.claimLottery || l.claimAll) && "claimed"),
                children: [i.jsx(q, {
                    tit: `${e.lottery} ${n("Lottery Tickets")}`
                }), i.jsxs("div", {
                    className: "claim-desc",
                    children: [i.jsx("img", {
                        src: x
                    }), " ", n("Claimed")]
                }), i.jsx("div", {
                    className: "bonus-desc",
                    dangerouslySetInnerHTML: {
                        __html: n("You can only redeem <b>1 ticket per day.</b>")
                    }
                })]
            }), l.hasSpin && i.jsxs("div", {
                className: D("bonus-item bg-2", (l.claimSpin || l.claimAll) && "claimed"),
                children: [i.jsx(q, {
                    tit: `${e.freeSpin} ${n("Free Spin")}`
                }), i.jsxs("div", {
                    className: "claim-desc",
                    children: [i.jsx("img", {
                        src: x
                    }), " ", n("Claimed")]
                }), i.jsx("div", {
                    className: "bonus-desc",
                    dangerouslySetInnerHTML: {
                        __html: n("You can only claim <b>20 free spin per day for 5 days.</b>")
                    }
                })]
            }), i.jsx(o.Button, {
                type: "conic",
                onClick: y,
                children: l.claimAll ? n("Check in My Bonus") : n("Claim All")
            })]
        })
    }) : i.jsx(o.Dialog, {
        children: i.jsx(o.Empty, {})
    })
}
const St = "s1em6k3k";

function Ya() {
    const {
        t: s
    } = o.useTranslation();
    return function(e) {
        return s(e === 1 ? "1st Deposit Bonus" : e === 2 ? "2nd Deposit Bonus" : e === 3 ? "3rd Deposit Bonus" : e === 4 ? "4th Deposit Bonus" : "Deposit Bonus")
    }
}

function Ja() {
    const {
        t: s
    } = o.useTranslation();
    return function(e) {
        return e === 1 ? s("Monday") : e === 2 ? s("Tuesday") : e === 3 ? s("Wednesday") : e === 4 ? s("Thursday") : e === 5 ? s("Friday") : e === 6 ? s("Saturday") : e === 7 ? s("Sunday") : ""
    }
}
const vt = "/modules/bonus/disabled-872efa0c.svg",
    Tt = "/modules/bonus/recharge-586261e1.json",
    Vt = "/modules/bonus/rechargew-white-fe1cd6d5.json",
    kt = "/modules/bonus/recharge_reward-6fe75678.json",
    xt = "/modules/bonus/recharge-0-86e44653.png",
    qt = "/modules/bonus/recharge-0-white-bba84859.png",
    jt = "/modules/bonus/recharge-25-00a320b4.png",
    Et = "/modules/bonus/recharge-25-white-95bcca03.png",
    Ut = "/modules/bonus/recharge-50-e17fcb0e.png",
    Rt = "/modules/bonus/recharge-50-white-707cf11a.png",
    Pt = "/modules/bonus/recharge-75-65f4c194.png",
    Qt = "/modules/bonus/recharge-75-white-f019d73c.png",
    Nt = "/modules/bonus/recharge-100-22090dcd.png",
    zt = "/modules/bonus/recharge-100-white-6da3ced4.png";

function Ga() {
    const s = o.useIsDarken();
    return e => e < 25 ? s ? xt : qt : e < 50 ? s ? jt : Et : e < 75 ? s ? Ut : Rt : e < 100 ? s ? Pt : Qt : s ? Nt : zt
}
const Mt = {
    disabled: vt,
    rechargeLottile: Tt,
    rechargeLottileWhite: Vt,
    rechargeReward: kt
};
var I = globalThis["@bc/pixi"];
const It = {
        list: [{
            value: 0,
            time: 0
        }, {
            value: 1,
            time: .5
        }, {
            value: 0,
            time: 1
        }],
        isStepped: !1
    },
    Lt = {
        list: [{
            value: .05,
            time: 0
        }, {
            value: .3,
            time: 1
        }],
        isStepped: !1,
        minimumScaleMultiplier: 2
    },
    Ot = {
        start: "#3c5653",
        end: "#6dcaa4"
    },
    Yt = {
        start: 10,
        end: 20,
        minimumSpeedMultiplier: 1.3
    },
    Jt = {
        x: 0,
        y: 0
    },
    Gt = 0,
    Ft = {
        min: 0,
        max: 260
    },
    Wt = !1,
    Kt = {
        min: 0,
        max: 0
    },
    Ht = {
        min: 8,
        max: 12
    },
    Xt = "normal",
    Zt = .5,
    _t = -1,
    $t = 500,
    es = {
        x: 0,
        y: 0
    },
    ts = !1,
    ss = "rect",
    ns = {
        x: 0,
        y: 0,
        w: 464,
        h: 300
    },
    as = !0,
    os = !0,
    is = {
        alpha: It,
        scale: Lt,
        color: Ot,
        speed: Yt,
        acceleration: Jt,
        maxSpeed: Gt,
        startRotation: Ft,
        noRotation: Wt,
        rotationSpeed: Kt,
        lifetime: Ht,
        blendMode: Xt,
        frequency: Zt,
        emitterLifetime: _t,
        maxParticles: $t,
        pos: es,
        addAtBack: ts,
        spawnType: ss,
        spawnRect: ns,
        emit: as,
        autoUpdate: os
    },
    rs = "data:image/png;base64,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";
const As = Y.memo(function({
    config: e = {}
}) {
    const t = Object.assign(JSON.parse(JSON.stringify(is)), e);
    return i.jsx("div", {
        className: `${ls} particle-layer`,
        children: i.jsx(I.PixiApplication, {
            width: t.spawnRect.w,
            height: t.spawnRect.h,
            fps: 30,
            children: i.jsx(I.Particles, {
                textures: rs,
                config: t
            })
        })
    })
});

function cs({
    config: s = {}
}) {
    return i.jsx(o.ErrorBoundary, {
        errorComponent: () => null,
        children: i.jsx(As, {
            config: s
        })
    })
}
const ls = "p18cf4a2";
const us = {
    scale: {
        list: [{
            value: 1,
            time: 0
        }, {
            value: 1.5,
            time: 1
        }]
    },
    color: {
        start: "#892aff",
        end: "#892aff"
    },
    maxParticles: 8,
    spawnRect: {
        w: 414,
        h: 580
    }
};

function Fa({
    amount: s,
    currencyName: e
}) {
    const {
        t
    } = o.useTranslation(), a = o.usePop(), n = h.useRef(null);
    return h.useEffect(() => {
        setTimeout(() => {
            var r;
            (r = n.current) == null || r.play(0)
        }, 300)
    }, []), i.jsxs("div", {
        className: `result-pop ${ds}`,
        children: [i.jsx(o.Lottie, {
            className: "lottie-wrap",
            ref: n,
            path: Mt.rechargeReward
        }), i.jsx(cs, {
            config: us
        }), i.jsxs("div", {
            className: "front",
            children: [i.jsx("div", {
                className: "recharge",
                children: t("Recharge")
            }), i.jsx("div", {
                className: "text",
                children: t("Congrats! You got")
            }), i.jsxs("div", {
                className: "result-value flex-center",
                children: [i.jsx("div", {
                    className: "amount",
                    children: s
                }), i.jsx("div", {
                    className: "currency-name",
                    children: o.systemStore.getAlias(e)
                })]
            }), i.jsx(o.Button, {
                onClick: () => a.close(),
                type: "conic",
                children: t("Confirm")
            })]
        })]
    })
}
const ds = "r1rt371y";
var E = globalThis["lodash-es"];
const Wa = function({
    rewardItem: e,
    hideContent: t = !1
}) {
    const {
        t: a
    } = o.useTranslation(), n = o.useSystem(), r = o.usePop(), c = e.items || [], l = n.rewardTypes[e.rewardType] || {}, A = c.slice(0, 1), d = e.status === "DONE", m = e.icon || l.bgSmall || S.general, f = e.rewardType === "vip_give_bonus" ? S.levelup : m, w = async () => {
        if (!d && (await v.receiveReward(e.rewardId), e.rewardType === "depositbcl")) {
            let C = 0;
            e.items && e.items[0] && (C = e.items[0].amount), C && r.push(i.jsx(nt, {
                number: e.items[0].amount + ""
            }))
        }
    }, y = t ? l.name : e.title;
    return i.jsxs("div", {
        className: D("reward-item", d && "claimed-item"),
        children: [i.jsx("div", {
            className: "reward-img-wrap",
            children: i.jsx("img", {
                alt: "reward",
                src: f
            })
        }), i.jsxs("div", {
            className: "reward-text",
            children: [i.jsx("p", {
                className: "title",
                children: y || ""
            }), !t && i.jsx("p", {
                className: "desc",
                children: e.description || ""
            }), i.jsx("div", {
                className: "coin-list",
                children: A.map((C, b) => i.jsx(o.BC.CoinFormat, {
                    name: C.currencyName,
                    amount: Number(C.amount),
                    icon: !0,
                    sign: !0,
                    showName: !0
                }, C.currencyName + b))
            })]
        }), i.jsx(o.Button, {
            onClick: w,
            style: {
                opacity: d ? .5 : 1
            },
            type: d ? "gray" : "conic",
            disabled: d,
            children: a(d ? "Claimed" : "Claim")
        })]
    })
};
var ms = globalThis.gsap;
const ps = O(ms),
    gs = "/modules/bonus/banner_bronze-f02bfb81.png",
    fs = "/modules/bonus/banner_silver-b64ba422.png",
    hs = "/modules/bonus/banner_gold-55ef522f.png",
    bs = "/modules/bonus/banner_platinum-db3a977d.png",
    Bs = "/modules/bonus/banner_diamond-7d4938f7.png",
    Ds = "/modules/bonus/point_bronze-0d249168.png",
    ws = "/modules/bonus/point_silver-e07c5b71.png",
    ys = "/modules/bonus/point_gold-ef89e212.png",
    Cs = "/modules/bonus/point_diamond-3f948ba0.png",
    Ss = "/modules/bonus/point_platinum-1945da83.png",
    vs = "/modules/bonus/btn_luckspin-c9fdbf75.png",
    Ts = "/modules/bonus/btn_megaspin-13327da9.png",
    Vs = "/modules/bonus/btn_superspin-642fce40.png",
    ks = "/modules/bonus/tbtn_luckspin_1-15a52ea4.png",
    xs = "/modules/bonus/tbtn_luckspin_2-90fbcfc3.png",
    qs = "/modules/bonus/tbtn_megaspin_1-76eb5830.png",
    js = "/modules/bonus/tbtn_megaspin_2-1147ec4e.png",
    Es = "/modules/bonus/tbtn_superspin_1-0bcfa4f1.png",
    Us = "/modules/bonus/tbtn_superspin_2-6176f80f.png",
    Rs = "/modules/bonus/spin_bronze-4dd81880.png",
    Ps = "/modules/bonus/spin_silver-5f9d2617.png",
    Qs = "/modules/bonus/spin_gold-3002c02a.png",
    Ns = "/modules/bonus/spin_platinum-d3b74f52.png",
    zs = "/modules/bonus/spin_diamond-75e21109.png",
    Ms = "data:image/png;base64,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",
    Is = "/modules/bonus/lucky_lottery-d21ba9a9.png",
    Ls = "/modules/bonus/mega_lottery-62df5a22.png",
    Os = "/modules/bonus/super_lottery-89c9893f.png",
    Ys = "/modules/bonus/lottery-1f600a06.png",
    Js = "/modules/bonus/spin_center1-47d8700e.png",
    Gs = "/modules/bonus/spin_center2-ed096c8d.png",
    Fs = "/modules/bonus/spin_center3-deabf1f7.png",
    Ws = "/modules/bonus/spin_center4-bf82f1fd.png",
    Ks = "/modules/bonus/spin_center5-0f4ed38a.png",
    Hs = "/modules/bonus/banner1-576cb7b8.png",
    Xs = "/modules/bonus/banner2-3eec290e.png",
    Zs = "/modules/bonus/banner3-2e37b012.png",
    _s = "/modules/bonus/banner4-2a032d56.png",
    $s = "/modules/bonus/banner5-a1776e9e.png",
    en = "/modules/bonus/br_banner1-b991aa34.png",
    tn = "/modules/bonus/br_banner2-4ee711ee.png",
    sn = "/modules/bonus/br_banner3-27c5d5d8.png",
    nn = "/modules/bonus/br_banner4-89a06096.png",
    an = "/modules/bonus/br_banner5-79cde9fe.png",
    on = "/modules/bonus/bg1-a9f0f52e.png",
    rn = "/modules/bonus/bg2-97e66dc1.png",
    An = "/modules/bonus/bg3-90616c54.png",
    cn = "/modules/bonus/bg4-c2a7d8f6.png",
    ln = "/modules/bonus/gold-57a1d52f.png",
    un = "/modules/bonus/light-f1abdd91.png",
    dn = "/modules/bonus/tag1-569f449b.png",
    mn = "/modules/bonus/tag2-610935df.png",
    pn = "/modules/bonus/tag3-becb51f6.png",
    gn = "/modules/bonus/slots-69cd2ade.png",
    fn = "data:image/png;base64,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",
    hn = "data:image/png;base64,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",
    bn = "data:image/png;base64,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",
    Bn = "data:image/png;base64,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",
    Dn = "data:image/png;base64,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",
    wn = "data:image/png;base64,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",
    yn = "/modules/bonus/light1-fb8f40d9.png",
    Cn = "/modules/bonus/light2-377ecfaa.png",
    Sn = "/modules/bonus/light3-935bc13f.png",
    vn = "/modules/bonus/light4-7876cd02.png",
    Tn = "/modules/bonus/light5-76fd95a2.png",
    Vn = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASAAAAA6CAMAAAAnZ3T7AAAAq1BMVEUAAAD/vQv/wg7/yxn/sgn/tgr/wAz/swr/vQv/uQr/tgz/wQ7/tw3/uwr/vwz/uAv/sgv/wg3/rwv/wQz/1Av/zwr/xAj/yAn/swX/vwf/twX/vQf/0Qr/1gv/tQX/2Qz/ywn/wgf/uwb/uQf/ygn/xgj/vAf/zQn/oQf/pAf/qAj/rgn/mgb/swn/ngb/qgj/twr/nAb/sAn/rAj/pgf/wAv/tQn/kwX/lgU7CAeGAAAAFHRSTlMAoxYK9ObazLtrRDMl+O2PhXpcUl0hfywAAASZSURBVHja7Ztpc+IwDIYd2JardzkK4Q6khUC4Uuj//2Ur222UOHKy2/LBY/qMpz5AUN6xrESjsGJGFsMK+RXo5wxGo8FoEDMSc9kD0BWsm2x/HoEs5jwCNZuD5kDQxHEuzaSNyfbsHDTFB3+bgcn25xHIYn4F+rlAzjvg+v4WOK7X+31wOGyWy+Vi8fb2Foa71aqZpt/sQ1PGSHbdZPvVaheG8EMXC/jJm00Q7Pfr9Rqk8HzffQccVr6WAnlcHxAoCAIuULTgCoU7EKhvMSDQLgR9pECHQxBwgY6xQNdlxhqxQNtPgTZ8B0mBwosRKPraQfv1kQvkCYEaDHhUd9Am7WL9Vqvf6kPDXoJzAnzdZPvYxSIuEGygAF0M9HlkgqoUiCu0J1ysZTFcoNQOCpJnUJVJSneu7+EOOgiBIrmD7BdoJw/pKHEGbaWL3ZXYJ8+fLiaiGJ5BlyFQiIe0soOeWYyTOaQjPINekdZrCxrOcS3nPSbbY5hPuthRKOQwpHwtD2k8g5Z4BsHnjF/HMTCBlumBzFhisn28gyIh0AGvgzwe4ZHG7ZeLgT7KDhpbDO4gNYrdNliKWsLFDmmBZuOY2XgGbZwPvlcwNtmecjHpYTWmUOUuhod0FMUuNrMY4kpaKlRlKqUrvoP2wsXSZ1BHMuvMoGXHOMc+hcn2sUDREl0MrqSvSixDnboXC7lAFqO4WHwdVGcE98lDenkxAuG9mNBHCHTPKMoV9TpIuti8I5h35tA6BPia7JV1k+3jMJ+6kq6UGcnNHzIfNMcvR3CtEJPtyXzQnxumoUbmg9rIvD3nQJdag5YzNtmezAfVmBaHyge1LYbKBzlMT+kqmQ+6DIHUfBBGeIq66mKXIVAyH1RnuTxk80GTfNqTNrSJHpPts/mgB1ZAJXMGTSwmkw+qMEQX69V80KTbnXQn0LBHcE3p8TWT7dWbVYzwep7UfFDXYtR80BMr5imVD7oMgeJ8EAhU7GJqPsjtdt2umwEWOdDFc2hxj+8z2f4bLlbJ5INci1GvpIsP6YdsPsj1fdd3BT6OiXl6HYAOxibbq/mgwjBfJ/JB8EVTfwrNR3BNN0ZMtifyQXWWe6tB5IOmFpPNB+XfajhUPmiKeFMPmjoumJtsT+WDHKalRuaDvH9Ffjn8SWOyPZkPqukjPJkP6nlez+sJYACIObRUD+A49T6T7cl8kC7WlytkfRAKpAf/OWLdZHu6PkiTcr3X1Af1LEZTH3RPRnhdfdAQ6Q170EQPiDGQmkNL90OT7XX1QXUqwuvqg4YWo6sPImJ9VVsf9DIcvgxfoA3/F2lnsr22PqiaifD6+qAXi9HXBymxvnGrqQ+6DIEy9UFY/oIFVFgfdLE7iEcxuoDK8T19fdDq4+PjdGKWcTrBz1rp64OwBA+LODX1QSvQx2KB6PqgbbKIs3QnBCLrgyzeQSfQR1cfBDWcogwYC8lBH019EGD1DiLrg8DFsJD88etpH7U+yPIz6AQCaeqDAC6QfBRBPsziEddB1p9BKwBvNainfRo8wtPPi9kfxbhCRc+LQax33gueFwPsFIjrk/+8GOD8Bc1iYiwRGemEAAAAAElFTkSuQmCC",
    kn = "data:image/png;base64,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",
    xn = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAA8CAMAAADfciMYAAAAOVBMVEUAAABhoxNYnA5YnA5anxFXnA1XnA1XnA1YnA1YnA5anhBanQ9XnA1XnA1XnA1YnQ5YnQ5XnA5Xmw18sITgAAAAEnRSTlMAD1uOHvDN4qh8LTzYwLRNbJuWdev/AAAB2klEQVQ4y32VSaLjIAxEzTzYYKj7H7YFH0KwlX4bL6QIVSGRg0OoS/GBK/SvvgDPZoQR8AD4GpYihUqBuNkMQxFHh9AnHSwORGw1vOAz/CivKc5zgjh/yKyxfRVghJAhyGcVOeV55GJAGPk0gqhUy+BDeWdQjxWwdmRcz1OIdLZGRUXD671TdOyf61oGucWHiI65VU5VcnLtOHx8IpOS8Y1jDZ0iXjcbVfirea2EvZHSRJxdj9HKAU5pxk/61Q3k1tCK7G7hJMHhYNHDLdsuPhalysutNMwCYpf8nrCIifnlxo0HhTdr4VlDw2iB26XVjaNSfWB/ir6O/yI2CSwAWqJMBu7eGwi1hrOvpD6ifV8+RRopekDG4dnerR9+VqDOIeQdNdQqN0BExgP/Xmts1G7PuaV4LHILnQlG7IaGnHxx1IGYo4ubfwrtmsvCGW+6DP1nSvjxnjpxhCmZQVAnam6W7nMTmc24h6YmwLaak1Mlm1T6jLPuJddhOj/GXU6z82rgm6vbhoadF7wniPUuuakibWt1xc8upvWvNC9Wy/HgXs/d0MXn3B+bu5Wp42mL/Ga0oOkZlXX2LmGuqRVMXGHhuYTEvwH80PJNJu7J5NtwJxeevqSsvqb0H0eLMkgpefdsAAAAAElFTkSuQmCC",
    qn = "/modules/bonus/spinLight-2993efaa.png",
    jn = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAaCAYAAAC3g3x9AAAAAXNSR0IArs4c6QAAAWdJREFUSA2llT1LA0EURbNRtEilhSBGLEWwUAQhlShYBKtUVv4IsUopgtjYC3aWKSz9AzYpUohYWKpoq2AQJQjrGbMZdmdn8l6yA3fnzZt7z04+t1RSjDiO9xU2nQXYEnpFZU1CY2oAWkA7GqDo4WS3yIwr0SwZgGz/o/qXHtOylAnuE55ED32Wvd4EA9IGiEOLyRZ7Uja3T34TdbMcu3qmquZCoQbmDfRh4/7ikfZciGH7mNbQu5+R697RmbHhdMHGBDpCX2iU8YQ5+57SMKfqjELxeFv05s0hzS9lF62aRYFRI7tu89BXUNtzZ03rAlPFwgYFzTI60RASzzez/C+E6VgB/cSzNTiMOGM+GwL9Za8uQlwDoesA9NT1qtbAFpH7vXyjl/8AVERMhJsoPQ60Wa8P0hR6SYj3zJHXmGoOfQREUdTD20r8l6zjVHa8klPV0A+aHY/gpMzLROdOu9gS4HQxQoH0H0YJlvmIzoKSAAAAAElFTkSuQmCC",
    En = "data:image/png;base64,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",
    Un = {
        list: [{
            value: 0,
            time: 0
        }, {
            value: 1,
            time: .5
        }, {
            value: 0,
            time: 1
        }],
        isStepped: !1
    },
    Rn = {
        start: .1,
        end: .3,
        minimumScaleMultiplier: 2
    },
    Pn = {
        start: "#ffffff",
        end: "#ffffff"
    },
    Qn = {
        start: 15,
        end: 10,
        minimumSpeedMultiplier: 3
    },
    Nn = {
        x: 0,
        y: 0
    },
    zn = 0,
    Mn = {
        min: 0,
        max: 360
    },
    In = !1,
    Ln = {
        min: 0,
        max: 0
    },
    On = {
        min: 2,
        max: 5
    },
    Yn = "normal",
    Jn = .1,
    Gn = -1,
    Fn = 100,
    Wn = {
        x: 0,
        y: 0
    },
    Kn = !1,
    Hn = "circle",
    Xn = {
        x: 50,
        y: 50,
        r: 2
    },
    Zn = {
        alpha: Un,
        scale: Rn,
        color: Pn,
        speed: Qn,
        acceleration: Nn,
        maxSpeed: zn,
        startRotation: Mn,
        noRotation: In,
        rotationSpeed: Ln,
        lifetime: On,
        blendMode: Yn,
        frequency: Jn,
        emitterLifetime: Gn,
        maxParticles: Fn,
        pos: Wn,
        addAtBack: Kn,
        spawnType: Hn,
        spawnCircle: Xn
    },
    _n = "/modules/bonus/japan_background-2ec23eb2.png",
    $n = "/modules/bonus/japan_banner_bronze-eb299c23.png",
    ea = "/modules/bonus/japan_banner_silver-a189579a.png",
    ta = "/modules/bonus/japan_banner_gold-d8e32188.png",
    sa = "/modules/bonus/japan_banner_platinum-4ab0f25c.png",
    na = "/modules/bonus/japan_banner_diamond-c142751c.png",
    aa = "/modules/bonus/japan_spin-91cdf35b.png",
    oa = "/modules/bonus/japan_spin_center-e17caa98.png",
    ia = "/modules/bonus/japan_point-2414c1ef.png",
    ra = "/modules/bonus/japan_spin_light-bc2612b5.png",
    Aa = "/modules/bonus/japan_tbtn_luckspin_1-8cf7c422.png",
    ca = "/modules/bonus/japan_tbtn_megaspin_1-9a262ef0.png",
    la = "/modules/bonus/japan_tbtn_superspin_1-0486ea34.png",
    u = {
        banner_bronze: gs,
        banner_silver: fs,
        banner_gold: hs,
        banner_platinum: bs,
        banner_diamond: Bs,
        point_bronze: Ds,
        point_silver: ws,
        point_gold: ys,
        point_diamond: Cs,
        point_platinum: Ss,
        btn_luckspin: vs,
        btn_megaspin: Ts,
        btn_superspin: Vs,
        tbtn_luckspin_1: ks,
        tbtn_luckspin_2: xs,
        tbtn_megaspin_1: qs,
        tbtn_megaspin_2: js,
        tbtn_superspin_1: Es,
        tbtn_superspin_2: Us,
        spin_bronze: Rs,
        spin_silver: Ps,
        spin_gold: Qs,
        spin_platinum: Ns,
        spin_diamond: zs,
        tag: Vn,
        crown: kn,
        laurel: xn,
        bright: En,
        bright_emitter: Zn,
        bg_lottery: Ys,
        spin_center1: Js,
        spin_center2: Gs,
        spin_center3: Fs,
        spin_center4: Ws,
        spin_center5: Ks,
        spin_diamond_fuck: Ms,
        star: jn,
        spinLight3: qn,
        fiat_banner1: Hs,
        fiat_banner2: Xs,
        fiat_banner3: Zs,
        fiat_banner4: _s,
        fiat_banner5: $s,
        fiat_banner1_br: en,
        fiat_banner2_br: tn,
        fiat_banner3_br: sn,
        fiat_banner4_br: nn,
        fiat_banner5_br: an,
        fiat_gold: ln,
        fiat_light: un,
        fiat_tag1: dn,
        fiat_tag2: mn,
        fiat_tag3: pn,
        fiat_bg1: on,
        fiat_bg2: rn,
        fiat_bg3: An,
        fiat_bg4: cn,
        fiat_btn1: fn,
        fiat_btn2: hn,
        fiat_btn3: bn,
        fiat_btn1_active: Bn,
        fiat_btn2_active: Dn,
        fiat_btn3_active: wn,
        fiat_slot: gn,
        fiat_slotlight1: yn,
        fiat_slotlight2: Cn,
        fiat_slotlight3: Sn,
        fiat_slotlight4: vn,
        fiat_slotlight5: Tn,
        japanBackground: _n,
        japanBannerBronze: $n,
        japanBannerSliver: ea,
        japanBannerGold: ta,
        japanBannerPlatinum: sa,
        japanBannerDiamond: na,
        japanSpin: aa,
        japanSpinCenter: oa,
        japanPoint: ia,
        japanSpanLight: ra,
        japanTbtnLuckSpin1: Aa,
        japanTbtnMegaSpin1: ca,
        japanTbtnSuperSpin1: la
    };

function Ka(s) {
    switch (s) {
        case 2:
            return u.fiat_banner2;
        case 3:
            return u.fiat_banner3;
        case 4:
            return u.fiat_banner4;
        case 5:
            return u.fiat_banner5;
        default:
            return u.fiat_banner1
    }
}

function Ha(s) {
    switch (s) {
        case 2:
            return u.fiat_banner2_br;
        case 3:
            return u.fiat_banner3_br;
        case 4:
            return u.fiat_banner4_br;
        case 5:
            return u.fiat_banner5_br;
        default:
            return u.fiat_banner1_br
    }
}

function Xa(s) {
    switch (s) {
        case 0:
            return Is;
        case 1:
            return Os;
        case 2:
            return Ls
    }
}

function ua(s) {
    switch (s) {
        case 2:
            return u.spin_silver;
        case 3:
            return u.spin_gold;
        case 4:
            return u.spin_platinum;
        case 5:
            return u.spin_diamond;
        default:
            return u.spin_bronze
    }
}

function Za(s) {
    switch (s) {
        default: return u.japanSpin
    }
}

function _a(s) {
    switch (s) {
        case 2:
            return u.spin_center2;
        case 3:
            return u.spin_center3;
        case 4:
            return u.spin_center4;
        case 5:
            return u.spin_center5;
        default:
            return u.spin_center1
    }
}

function $a(s) {
    switch (s) {
        default: return u.japanSpinCenter
    }
}

function eo(s) {
    switch (s) {
        case 2:
            return u.point_silver;
        case 3:
            return u.point_gold;
        case 4:
            return u.point_platinum;
        case 5:
            return u.point_diamond;
        default:
            return u.point_bronze
    }
}

function to(s) {
    switch (s) {
        default: return u.japanPoint
    }
}

function so(s) {
    switch (s) {
        case 1:
            return u.btn_superspin;
        case 2:
            return u.btn_megaspin;
        default:
            return u.btn_luckspin
    }
}

function no(s) {
    switch (s) {
        case 2:
            return u.banner_silver;
        case 3:
            return u.banner_gold;
        case 4:
            return u.banner_platinum;
        case 5:
            return u.banner_diamond;
        default:
            return u.banner_bronze
    }
}

function ao(s) {
    switch (s) {
        case 2:
            return u.japanBannerSliver;
        case 3:
            return u.japanBannerGold;
        case 4:
            return u.japanBannerPlatinum;
        case 5:
            return u.japanBannerDiamond;
        default:
            return u.japanBannerBronze
    }
}

function oo(s) {
    switch (s) {
        case 1:
            return "#ffac04";
        case 2:
            return "#fff8a1";
        default:
            return "#ff5ac4"
    }
}

function io(s) {
    switch (s) {
        case 2:
            return "#0e7a3d";
        case 3:
            return "#eb9106";
        case 4:
            return "#c16959";
        case 5:
            return "#690ee0";
        default:
            return "#653120"
    }
}

function ro(s) {
    switch (s) {
        case 2:
            return "#11AD3F";
        case 3:
            return "#FF7121";
        case 4:
            return "#C16959";
        case 5:
            return "#6A0FE0";
        default:
            return "#D8733A"
    }
}

function Ao(s) {
    switch (s) {
        case 2:
            return ["#0ba543", "#046c2a"];
        case 3:
            return ["#e0c211", "#d57210"];
        case 4:
            return ["#f6b39f", "#be6655"];
        case 5:
            return ["#b471ff", "#940dff"];
        default:
            return ["#ff9e6a", "#ac4c19"]
    }
}

function co(s) {
    const {
        t: e
    } = o.useTranslation();
    switch (s) {
        case 2:
            return e("Silver");
        case 3:
            return e("Gold");
        case 4:
            return e("Platinum");
        case 5:
            return e("Diamond");
        default:
            return e("Bronze")
    }
}

function lo(s) {
    switch (s) {
        case 1:
            return "SUPER SPIN";
        case 2:
            return "MEGA SPIN";
        default:
            return "LUCKY SPIN"
    }
}

function uo() {
    const s = o.useSetting();
    return (e, t) => {
        const a = Number(e || "0");
        return a >= 1e10 ? new o.Decimal(e).div(1e9).toFixed(0, o.Decimal.ROUND_DOWN) + "B" : a >= 1e7 ? new o.Decimal(e).div(1e6).toFixed(0, o.Decimal.ROUND_DOWN) + "M" : a >= (t ? 1e4 : 1e5) ? new o.Decimal(e).div(1e3).toFixed(0, o.Decimal.ROUND_DOWN) + "K" : o.utils.numberWithCommas(s.localeCurrencyName, a)
    }
}
const da = "/modules/bonus/win-1d4c0d41.mp3",
    ma = "/modules/bonus/bigwin-2f482a51.mp3",
    pa = "/modules/bonus/update-83b4f99b.mp3",
    ga = "/modules/bonus/oldsounds-b8fb8ba1.mp3",
    {
        useProxy: fa,
        proxy: ha
    } = o.valtio,
    L = {
        win: da,
        bigwin: ma,
        update: pa
    };
class ba extends o.State {
    constructor(t) {
        super(t);
        B(this, "initData");
        B(this, "animateResolve", () => {});
        B(this, "soundSprites");
        B(this, "sounds");
        this.initData = this.initFn(), o.app.on("get-spin-rain-or-tip", n => {
            console.log(n), n !== this.state.freeTimes && this.getUserInfo()
        });
        let a = {};
        Object.keys(L).map(n => (a[n] = new j({
            src: L[n]
        }), n)), this.sounds = g({}, a), this.soundSprites = new j({
            src: ga,
            sprite: {
                SpinOpen: [0, 1979],
                SpinAndBonus: [1979, 8268],
                Click: [10247, 306],
                Collect: [10553, 601]
            }
        })
    }
    getSettings() {
        return o.http.get("/activity/lucky/spin/settings/")
    }
    async initFn() {
        const t = new Date().getTime(),
            a = await this.getSettings();
        this.setState({
            updateTime: t,
            tabs: this.getTabs(0),
            spinOptions: a.sections,
            version: a.version,
            fiat: a.fiat
        }), await o.accountStore.initData, o.accountStore.state.login ? await this.getUserInfo() : o.accountStore.waitLogin().then(() => {
            this.getUserInfo(), this.getSettings().then(n => {
                this.setState({
                    fiat: n.fiat,
                    version: n.version
                })
            }).catch(o.notify)
        });
        try {
            await o.utils.loadImage(ua(this.state.spinLevel))
        } catch (n) {
            console.log(n)
        }
        return this.state
    }
    async spinAnimateEnd() {
        return new Promise(t => {
            this.animateResolve = t
        })
    }
    setSpinAnimateEnd() {
        this.animateResolve()
    }
    async getUserInfo() {
        try {
            if (this.state.fetching) return;
            this.setState({
                fetching: !0
            });
            const t = await o.http.get("/activity/lucky/spin/info/");
            this.setState({
                spinLevel: t.level,
                tabs: this.getTabs(t.level),
                freeTimes: t.leftTimes,
                fetching: !1
            })
        } catch (t) {
            o.notify(t)
        }
    }
    reset() {
        this.setState({
            spinLoading: !1
        })
    }
    getTabs(t) {
        return t <= 2 ? [t, 3, 5] : t <= 4 ? [2, t, 5] : [2, 4, t]
    }
    getTab(t) {
        return this.state.tabs.findIndex(a => a === t)
    }
    playSound(t) {
        if (o.settingStore.state.soundEffectEnable) try {
            this.sounds[t].play()
        } catch (a) {}
    }
    async setNextTime() {
        const t = o.utils.serverTime(),
            a = t.getUTCFullYear(),
            n = t.getUTCMonth(),
            r = t.getUTCDate() + 1;
        this.setState({
            nextTime: Date.UTC(a, n, r, 0, 0, 0)
        })
    }
    async handleSpin() {
        try {
            return await o.http.post("/activity/lucky/spin/lottery/", {
                level: this.state.spinLevel,
                fiat: this.state.fiat,
                version: this.state.version
            })
        } catch (t) {
            if (t.code === 6003 || t.code === 4e3) {
                const a = await this.getSettings();
                return this.setState({
                    version: a.version,
                    spinOptions: a.sections,
                    fiat: a.fiat
                }), await o.http.post("/activity/lucky/spin/lottery/", {
                    level: this.state.spinLevel,
                    fiat: this.state.fiat,
                    version: a.version
                })
            } else throw t
        }
    }
    async getDeviceRegist() {
        if (this.state.deviceRegist != null) return new Promise(a => a(this.state.deviceRegist));
        try {
            return o.http.get("/account/device/isRegistered").then(a => {
                let n = a;
                if (a === !1) {
                    const {
                        isIdHost: r,
                        isNgHost: c
                    } = o.utils.getHostType(o.env.host);
                    let l = r || c ? "B" : Date.now() % 2 > 0 ? "A" : "B";
                    const A = window.localStorage.getItem("before-user-login-type");
                    A ? l = A : window.localStorage.setItem("before-user-login-type", l), l === "B" && (n = !0), o.app.emit("track", "PlanPopupDisplay", {
                        sf_plan_id: "bc_free_bonus_ab_test",
                        sf_plan_strategy_id: n ? -1 : 0
                    })
                }
                return this.setState({
                    deviceRegist: n
                }), n
            })
        } catch (a) {
            console.log(a)
        }
    }
}
const Ba = new ba(ha({
    nextTime: 0,
    freeTimes: 0,
    spinOptions: [],
    spinLevel: 5,
    tabs: [],
    fiat: o.accountStore.state.bonusCurrencyName !== "BCD",
    totalBonus: 0,
    spinLoading: !1,
    version: 0,
    updateTime: 0,
    updateFinished: !1,
    fetching: !1,
    deviceRegist: null
}));

function mo() {
    return fa(Ba.state)
}
const Da = ({
        startValue: s = 0,
        targetValue: e,
        className: t,
        decimalPlaces: a = 2,
        duration: n = 1.5,
        currency: r
    }) => {
        const c = h.useRef(null),
            l = o.env.localCurrencys.find(f => f.value === r),
            A = s.toFixed(a),
            d = o.systemStore.getAlias(r),
            m = l ? l.cs + " " + A : A + " " + d;
        return h.useEffect(() => {
            if (c.current) {
                const f = {
                        num: s
                    },
                    w = ps.to(f, {
                        num: e,
                        duration: 2,
                        delay: .5,
                        ease: "Linear.easeNone",
                        roundProps: `value,${a}`,
                        onUpdate: () => {
                            if (c.current) {
                                const y = f.num.toFixed(a);
                                c.current.textContent = l ? l.cs + " " + y : y + " " + d
                            }
                        }
                    });
                return () => {
                    w.kill()
                }
            }
        }, [s, e, a, n]), i.jsx("div", {
            className: D("scoll-num", t, wa),
            ref: c,
            children: m
        })
    },
    wa = "sxm7p3g",
    {
        useProxy: ya,
        proxy: Ca
    } = o.valtio;
class Sa extends o.State {
    constructor(t) {
        super(t);
        B(this, "rewardsCurrency", "USDFIAT");
        B(this, "rewardsList", [1, 2, 5, 6, 8, 10, 16, 20, 26, 30, 60, 100, 200, 300, 400, 500]);
        B(this, "rewardsUsd", 5);
        B(this, "target", 2);
        B(this, "currencys", ["BCD", "USDT", "USDC", "TRX", "SOL", "DOGE", "BNB", "LTC", "XML", "MATIC", "DOT"]);
        this.initFn()
    }
    initFn() {
        this.setState({
            claimed: !!localStorage.getItem("newuser_spin"),
            randomCurrencys: E.shuffle(this.currencys)
        })
    }
}
const va = new Sa(Ca({
    claimed: !1,
    randomCurrencys: []
}));

function po() {
    return ya(va.state)
}

function go(s, e = 2) {
    const t = Math.floor(Math.log10(Math.abs(s)) + 1),
        a = e - t;
    return Math.round(s * Math.pow(10, a)) / Math.pow(10, a)
}

function fo(s, e) {
    let t = "";
    if (e.toLocaleLowerCase() === "crypto") return "Crypto";
    const a = o.walletStore.state[e];
    return e && a ? t = e : t = s, o.walletStore.state[t] && o.system.getCurrency(t).currencyType === "FIAT" ? t : "Crypto"
}

function Ta() {
    const s = o.usePop(),
        {
            t: e
        } = o.useTranslation();
    return i.jsxs(o.Pop, {
        className: Va,
        children: [i.jsx("div", {
            className: "tit",
            children: e("Oh no! It appears somebody has already opened an account on your device/IP")
        }), i.jsx("div", {
            className: "txt",
            children: e("Unfortunately, you are not eligible to receive the welcome reward, but don’t worry there are more rewards to come!")
        }), i.jsx(o.Button, {
            type: "conic",
            onClick: s.close,
            children: e("OK")
        })]
    })
}
const Va = "ss7hjz6";
async function ka(s, e) {
    return o.http.post("/activity/reward/freeMoneyReward/", {
        currencyName: s,
        bonusAmount: e
    })
}

function xa({
    amount: s,
    currencyName: e,
    rewardId: t
}) {
    const [a, n] = o.useSetState({
        init: !0,
        error: ""
    }), {
        t: r
    } = o.useTranslation(), c = o.useSetting(), l = o.useWallet(), A = o.usePop(), d = o.useNavigate();
    if (h.useEffect(() => {
            o.http.post(`/activity/reward/receive/${t}/`).then(() => {
                n({
                    init: !0
                }), l[e] && (c.currencyName = e)
            }).catch(f => {
                n({
                    error: f.message
                })
            })
        }, []), a.error) return i.jsx(o.Pop, {
        closeable: !0,
        children: i.jsx(o.Empty, {
            children: a.error
        })
    });
    if (!a.init) return i.jsx(o.Pop, {
        className: U,
        closeable: !0,
        children: i.jsx(o.Loading, {})
    });
    const m = function(w) {
        d(w), o.app.emit("track", "free_play_click"), A.close()
    };
    return i.jsxs(o.Pop, {
        className: U,
        closeable: !0,
        children: [i.jsx(Da, {
            className: "amount",
            duration: 3e3,
            targetValue: Number(s),
            currency: e
        }), i.jsxs("div", {
            className: "tit ttu",
            children: [r("Rewards Claimed"), "!"]
        }), i.jsx("div", {
            className: "desc",
            children: r("Use this bonus money to play games now!")
        }), i.jsx(o.Button, {
            type: "conic",
            onClick: () => m(`#/newuser/gamelist/${e}`),
            children: r("Play")
        })]
    })
}

function ho({
    amount: s,
    currency: e
}) {
    const {
        data: t,
        error: a
    } = o.useAsync(() => ka(e, s));
    return a ? i.jsx(o.Pop, {
        children: i.jsx(o.Empty, {
            children: a.message
        })
    }) : t ? t.state != 0 || !t.rewardId ? i.jsx(Ta, {}) : i.jsx(xa, {
        amount: t.amount,
        currencyName: t.currencyName,
        rewardId: t.rewardId
    }) : i.jsx(o.Pop, {
        className: U,
        closeable: !0,
        children: i.jsx(o.Loading, {})
    })
}
const U = "svozrz2",
    {
        useProxy: qa,
        proxy: ja
    } = o.valtio,
    Ea = o.utils.timeMemoize(function() {
        return o.http.post("/task/tasks/")
    }, {
        timeout: 1e3
    });
class Ua extends o.State {
    constructor(e) {
        super(e), this.initFn()
    }
    async initFn() {
        await o.accountStore.waitLogin();
        try {
            this.setState({
                loading: !0
            }), this.setState({});
            const e = await Ea();
            let t = P(g({}, e), {
                newbieTasks: e.dailyTasks.filter(n => n.newbieTask),
                unClaimedRewardMap: e.unClaimedRewardMap || {}
            });
            const a = e.weekTaskExpireTimeInMs > 0 ? e.weekTaskExpireTimeInMs + Date.now() : 0;
            t.weekTaskExpireTimeInMs = a, t.dailyTaskExpireTimeInMs = e.dailyTaskExpireTimeInMs > 0 ? e.dailyTaskExpireTimeInMs + Date.now() : 0, this.setState({
                data: g({}, t),
                cutTime: a,
                isBrlBonus: this.brlReward(e),
                loading: !1
            })
        } catch (e) {
            o.notify(e), this.setState({
                loading: !1
            })
        }
    }
    brlReward(e) {
        const t = e.dailyTasks;
        let a = !1;
        return t.map(n => {
            (n.taskId === "tid061" || n.taskId === "tid062") && (a = !0)
        }), a
    }
    updateClaimed(e) {
        if (e) {
            const t = E.cloneDeep(this.state.data),
                a = this.state.data.rewards;
            if (a.length > 0) {
                const n = a.find(r => r.rewardId === e);
                n && (n.rewardId = "0", t.rewards = [...a], this.setState({
                    data: g({}, t)
                }), o.app.emit("rewardClaim"))
            }
        }
    }
    changeUnClaimedNum(e) {
        const t = E.cloneDeep(this.state.data),
            a = g({}, this.state.data.unClaimedRewardMap),
            n = a[e];
        n && (a[e] = Math.max(n - 1, 0)), t.unClaimedRewardMap = g({}, a), this.setState({
            data: g({}, t)
        })
    }
    havePrevious(e) {
        if (e) {
            if (JSON.stringify(e) === "{}") return 0;
            let t = 0;
            for (let a in e) !(a === this.state.data.taskDate) && e[a] && e[a] > 0 && (t += e[a]);
            return t
        } else return 0
    }
}
const Ra = new Ua(ja({
    cutTime: 0,
    loading: !0,
    isBrlBonus: !1,
    data: {
        rewards: [],
        rewardsAmount: 0,
        newbieTaskExpireTime: 0,
        unClaimedRewardMap: {},
        taskDate: "",
        lastTaskWeek: "",
        taskWeek: "",
        rewardCurrency: "",
        dayOfWeek: "",
        taskDates: [],
        newbieTasks: [],
        dailyTasks: [],
        weeklyTasks: [],
        dailyTaskExpireTimeInMs: 0,
        weekTaskExpireTimeInMs: 0
    }
}));

function bo() {
    return qa(Ra.state)
}
const Bo = "/modules/bonus/gift-3dbd827b.png";
export {
    bo as $, co as A, io as B, u as C, ro as D, ms as E, Ba as F, Xa as G, to as H, eo as I, Za as J, ua as K, nt as L, $a as M, Oa as N, _a as O, cs as P, so as Q, Y as R, ao as S, no as T, uo as U, Ha as V, Ka as W, Ao as X, po as Y, va as Z, o as _, i as a, Ra as a0, Bo as a1, Q as a2, z as a3, ue as a4, fo as a5, go as a6, ho as a7, I as a8, j as a9, lo as aa, oo as ab, Da as ac, S as b, D as c, v as d, Ma as e, La as f, Z as g, ce as h, Ja as i, Ya as j, le as k, de as l, Fa as m, E as n, Wa as o, pe as p, za as q, h as r, Na as s, O as t, Ia as u, ps as v, X as w, Ga as x, Mt as y, mo as z
};