var t;
(a => {
    a.sectionIdDecode = l, a.sectionIdEncode = c, a.tagNameDecode = n, a.tagNameEncode = s, a.getTagNameSectionId = i, a.getProviderTagName = u
})(t || (t = {}));

function l(a, e) {
    return a === "brand" ? "casino_bc" : a === "slots" ? e === "popular" ? "slots_popular" : e === "youmaylike" ? "slots_you_may_like" : "casino_slots" : a === "live" ? e === "popular" ? "live_popular" : e === "youmaylike" ? "live_you_may_like" : "casino_live" : a === "hot" ? "casino_hot" : a === "picks-for-you" ? "casino_picks_for_you" : a.replace("-", "_")
}

function c(a) {
    return a === "casino_bc" ? "brand" : a === "casino_picks_for_you" ? "picks-for-you" : a.search("casino_") > -1 ? a.replace("casino_", "") : a.replace("_", "-")
}
const r = [{
    tagName: "Megaways",
    url: "megaways"
}, {
    tagName: "Hot Games",
    url: "hot"
}, {
    tagName: "New Releases",
    url: "new-releases"
}, {
    tagName: "BC Exclusive",
    url: "exclusive"
}, {
    tagName: "Feature buy-in",
    url: "feature-buy-in"
}, {
    tagName: "Table games",
    url: "table-games"
}, {
    tagName: "High volatility",
    url: "high-volatility"
}, {
    tagName: "Buy extra ball feature",
    url: "buy-extrabal-feature"
}, {
    tagName: "Bingo jackpot",
    url: "jackpot"
}, {
    tagName: "Bingo",
    url: "bingo"
}, {
    tagName: "Bingo New Release",
    url: "bingo-new-release"
}, {
    tagName: "Keno",
    url: "keno"
}, {
    tagName: "Scratch cards",
    url: "scratch-cards"
}, {
    tagName: "Baccarat",
    url: "baccarat"
}, {
    tagName: "Roulette",
    url: "roulette"
}, {
    tagName: "Blackjack",
    url: "blackjack"
}];

function s(a) {
    const e = r.find(o => o.tagName === a);
    return e ? e.url : a
}

function n(a) {
    const e = r.find(o => o.url === a);
    return e ? e.tagName : a
}

function i(a) {
    const e = n(a);
    return e === "Bingo New Release" || e === "New Releases" ? "casino_new" : e === "Hot Games" ? "casino_hot" : "casino_tag"
}

function u(a) {
    return a === "New Releases" ? "casino_new" : a === "Hot Games" ? "casino_hot" : a === "Bingo New Release" ? "Bingo" : a
}
export {
    t as G
};