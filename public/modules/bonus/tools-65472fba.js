var l = function() {
        const n = Array.prototype.slice.call(arguments).filter(Boolean),
            s = {},
            i = [];
        n.forEach(r => {
            (r ? r.split(" ") : []).forEach(t => {
                if (t.startsWith("atm_")) {
                    const [, c] = t.split("_");
                    s[c] = t
                } else i.push(t)
            })
        });
        const o = [];
        for (const r in s) Object.prototype.hasOwnProperty.call(s, r) && o.push(s[r]);
        return o.push(...i), o.join(" ")
    },
    f = l,
    a = (e => (e[e.COMMON = 0] = "COMMON", e[e.CLAIMED = 1] = "CLAIMED", e[e.ERROR = 2] = "ERROR", e))(a || {});

function h(e) {
    return e === "LuckySpin" ? 1 : e === "Lottery" ? 0 : e === "DepositBonus" ? 2 : 3
}
export {
    a as B, f as c, h as g
};