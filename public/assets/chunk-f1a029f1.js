import {
    O as $,
    w as r,
    Q as F
} from "./chunk-64278058.js";

function g(e, u, a) {
    var s = e.length;
    return a = a === void 0 ? s : a, !u && a >= s ? e : $(e, u, a)
}
var V = "\\ud800-\\udfff",
    W = "\\u0300-\\u036f",
    _ = "\\ufe20-\\ufe2f",
    Q = "\\u20d0-\\u20ff",
    q = W + _ + Q,
    X = "\\ufe0e\\ufe0f",
    ee = "\\u200d",
    ue = RegExp("[" + ee + V + q + X + "]");

function f(e) {
    return ue.test(e)
}

function ae(e) {
    return e.split("")
}
var l = "\\ud800-\\udfff",
    se = "\\u0300-\\u036f",
    te = "\\ufe20-\\ufe2f",
    ne = "\\u20d0-\\u20ff",
    re = se + te + ne,
    fe = "\\ufe0e\\ufe0f",
    ce = "[" + l + "]",
    c = "[" + re + "]",
    i = "\\ud83c[\\udffb-\\udfff]",
    ie = "(?:" + c + "|" + i + ")",
    p = "[^" + l + "]",
    x = "(?:\\ud83c[\\udde6-\\uddff]){2}",
    b = "[\\ud800-\\udbff][\\udc00-\\udfff]",
    oe = "\\u200d",
    h = ie + "?",
    v = "[" + fe + "]?",
    de = "(?:" + oe + "(?:" + [p, x, b].join("|") + ")" + v + h + ")*",
    ge = v + h + de,
    le = "(?:" + [p + c + "?", c, x, b, ce].join("|") + ")",
    pe = RegExp(i + "(?=" + i + ")|" + le + ge, "g");

function xe(e) {
    return e.match(pe) || []
}

function A(e) {
    return f(e) ? xe(e) : ae(e)
}

function E(e) {
    return function(u) {
        u = r(u);
        var a = f(u) ? A(u) : void 0,
            s = a ? a[0] : u.charAt(0),
            t = a ? g(a, 1).join("") : u.slice(1);
        return s[e]() + t
    }
}
var be = E("toUpperCase");
const m = be;

function w(e) {
    return m(r(e).toLowerCase())
}

function C(e, u, a, s) {
    var t = -1,
        d = e == null ? 0 : e.length;
    for (s && d && (a = e[++t]); ++t < d;) a = u(a, e[t], t, e);
    return a
}
var he = {\
        u00C0: "A",
        \u00C1: "A",
        \u00C2: "A",
        \u00C3: "A",
        \u00C4: "A",
        \u00C5: "A",
        \u00E0: "a",
        \u00E1: "a",
        \u00E2: "a",
        \u00E3: "a",
        \u00E4: "a",
        \u00E5: "a",
        \u00C7: "C",
        \u00E7: "c",
        \u00D0: "D",
        \u00F0: "d",
        \u00C8: "E",
        \u00C9: "E",
        \u00CA: "E",
        \u00CB: "E",
        \u00E8: "e",
        \u00E9: "e",
        \u00EA: "e",
        \u00EB: "e",
        \u00CC: "I",
        \u00CD: "I",
        \u00CE: "I",
        \u00CF: "I",
        \u00EC: "i",
        \u00ED: "i",
        \u00EE: "i",
        \u00EF: "i",
        \u00D1: "N",
        \u00F1: "n",
        \u00D2: "O",
        \u00D3: "O",
        \u00D4: "O",
        \u00D5: "O",
        \u00D6: "O",
        \u00D8: "O",
        \u00F2: "o",
        \u00F3: "o",
        \u00F4: "o",
        \u00F5: "o",
        \u00F6: "o",
        \u00F8: "o",
        \u00D9: "U",
        \u00DA: "U",
        \u00DB: "U",
        \u00DC: "U",
        \u00F9: "u",
        \u00FA: "u",
        \u00FB: "u",
        \u00FC: "u",
        \u00DD: "Y",
        \u00FD: "y",
        \u00FF: "y",
        \u00C6: "Ae",
        \u00E6: "ae",
        \u00DE: "Th",
        \u00FE: "th",
        \u00DF: "ss",
        \u0100: "A",
        \u0102: "A",
        \u0104: "A",
        \u0101: "a",
        \u0103: "a",
        \u0105: "a",
        \u0106: "C",
        \u0108: "C",
        \u010A: "C",
        \u010C: "C",
        \u0107: "c",
        \u0109: "c",
        \u010B: "c",
        \u010D: "c",
        \u010E: "D",
        \u0110: "D",
        \u010F: "d",
        \u0111: "d",
        \u0112: "E",
        \u0114: "E",
        \u0116: "E",
        \u0118: "E",
        \u011A: "E",
        \u0113: "e",
        \u0115: "e",
        \u0117: "e",
        \u0119: "e",
        \u011B: "e",
        \u011C: "G",
        \u011E: "G",
        \u0120: "G",
        \u0122: "G",
        \u011D: "g",
        \u011F: "g",
        \u0121: "g",
        \u0123: "g",
        \u0124: "H",
        \u0126: "H",
        \u0125: "h",
        \u0127: "h",
        \u0128: "I",
        \u012A: "I",
        \u012C: "I",
        \u012E: "I",
        \u0130: "I",
        \u0129: "i",
        \u012B: "i",
        \u012D: "i",
        \u012F: "i",
        \u0131: "i",
        \u0134: "J",
        \u0135: "j",
        \u0136: "K",
        \u0137: "k",
        \u0138: "k",
        \u0139: "L",
        \u013B: "L",
        \u013D: "L",
        \u013F: "L",
        \u0141: "L",
        \u013A: "l",
        \u013C: "l",
        \u013E: "l",
        \u0140: "l",
        \u0142: "l",
        \u0143: "N",
        \u0145: "N",
        \u0147: "N",
        \u014A: "N",
        \u0144: "n",
        \u0146: "n",
        \u0148: "n",
        \u014B: "n",
        \u014C: "O",
        \u014E: "O",
        \u0150: "O",
        \u014D: "o",
        \u014F: "o",
        \u0151: "o",
        \u0154: "R",
        \u0156: "R",
        \u0158: "R",
        \u0155: "r",
        \u0157: "r",
        \u0159: "r",
        \u015A: "S",
        \u015C: "S",
        \u015E: "S",
        \u0160: "S",
        \u015B: "s",
        \u015D: "s",
        \u015F: "s",
        \u0161: "s",
        \u0162: "T",
        \u0164: "T",
        \u0166: "T",
        \u0163: "t",
        \u0165: "t",
        \u0167: "t",
        \u0168: "U",
        \u016A: "U",
        \u016C: "U",
        \u016E: "U",
        \u0170: "U",
        \u0172: "U",
        \u0169: "u",
        \u016B: "u",
        \u016D: "u",
        \u016F: "u",
        \u0171: "u",
        \u0173: "u",
        \u0174: "W",
        \u0175: "w",
        \u0176: "Y",
        \u0177: "y",
        \u0178: "Y",
        \u0179: "Z",
        \u017B: "Z",
        \u017D: "Z",
        \u017A: "z",
        \u017C: "z",
        \u017E: "z",
        \u0132: "IJ",
        \u0133: "ij",
        \u0152: "Oe",
        \u0153: "oe",
        \u0149: "'n",
        \u017F: "s"
    },
    ve = F(he);
const Ae = ve;
var Ee = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
    me = "\\u0300-\\u036f",
    we = "\\ufe20-\\ufe2f",
    Ce = "\\u20d0-\\u20ff",
    ke = me + we + Ce,
    Le = "[" + ke + "]",
    Oe = RegExp(Le, "g");

function k(e) {
    return e = r(e), e && e.replace(Ee, Ae).replace(Oe, "")
}
var Re = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;

function Ue(e) {
    return e.match(Re) || []
}
var je = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;

function ye(e) {
    return je.test(e)
}
var L = "\\ud800-\\udfff",
    Se = "\\u0300-\\u036f",
    De = "\\ufe20-\\ufe2f",
    ze = "\\u20d0-\\u20ff",
    Ie = Se + De + ze,
    O = "\\u2700-\\u27bf",
    R = "a-z\\xdf-\\xf6\\xf8-\\xff",
    Ze = "\\xac\\xb1\\xd7\\xf7",
    Te = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",
    Ne = "\\u2000-\\u206f",
    Be = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
    U = "A-Z\\xc0-\\xd6\\xd8-\\xde",
    He = "\\ufe0e\\ufe0f",
    j = Ze + Te + Ne + Be,
    y = "['\u2019]",
    S = "[" + j + "]",
    Ge = "[" + Ie + "]",
    D = "\\d+",
    Je = "[" + O + "]",
    z = "[" + R + "]",
    I = "[^" + L + j + D + O + R + U + "]",
    Ke = "\\ud83c[\\udffb-\\udfff]",
    Me = "(?:" + Ge + "|" + Ke + ")",
    Pe = "[^" + L + "]",
    Z = "(?:\\ud83c[\\udde6-\\uddff]){2}",
    T = "[\\ud800-\\udbff][\\udc00-\\udfff]",
    n = "[" + U + "]",
    Ye = "\\u200d",
    N = "(?:" + z + "|" + I + ")",
    $e = "(?:" + n + "|" + I + ")",
    B = "(?:" + y + "(?:d|ll|m|re|s|t|ve))?",
    H = "(?:" + y + "(?:D|LL|M|RE|S|T|VE))?",
    G = Me + "?",
    J = "[" + He + "]?",
    Fe = "(?:" + Ye + "(?:" + [Pe, Z, T].join("|") + ")" + J + G + ")*",
    Ve = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",
    We = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",
    _e = J + G + Fe,
    Qe = "(?:" + [Je, Z, T].join("|") + ")" + _e,
    qe = RegExp([n + "?" + z + "+" + B + "(?=" + [S, n, "$"].join("|") + ")", $e + "+" + H + "(?=" + [S, n + N, "$"].join("|") + ")", n + "?" + N + "+" + B, n + "+" + H, We, Ve, D, Qe].join("|"), "g");

function Xe(e) {
    return e.match(qe) || []
}

function K(e, u, a) {
    return e = r(e), u = a ? void 0 : u, u === void 0 ? ye(e) ? Xe(e) : Ue(e) : e.match(u) || []
}
var eu = "['\u2019]",
    uu = RegExp(eu, "g");

function M(e) {
    return function(u) {
        return C(K(k(u).replace(uu, "")), e, "")
    }
}
var au = M(function(e, u, a) {
    return u = u.toLowerCase(), e + (a ? w(u) : u)
});
const P = au,
    su = "/assets/Baccarat.47e9d8f2.png",
    tu = "/assets/Bingo.590dc80f.png",
    Y = "/assets/BlackJack.7f868444.png",
    nu = "/assets/Cave.89f3fbd0.png",
    ru = "/assets/ClassicDice.246bc06a.png",
    fu = "/assets/HashDice.445aff9f.png",
    cu = "/assets/Crash.ec1942f7.png",
    iu = "/assets/HiLo.86a19c7b.png",
    ou = "/assets/KenoSingle.6244c89e.png",
    du = "/assets/Keno.4596331e.png",
    gu = "/assets/Limbo.011b8b65.png",
    lu = "/assets/OrientalBeauties.2fbcd1a8.png",
    pu = "/assets/Plinko.408dd155.png",
    xu = "/assets/Roulette.6b277c23.png",
    bu = "/assets/Slots.45002560.png",
    hu = "/assets/Swords.1712c95b.png",
    vu = "/assets/VideoPoker.43ba50ae.png",
    Au = "/assets/Wheel.4ec42835.png",
    Eu = "/assets/EgyptianAdventure.ba1c70dd.png",
    mu = "/assets/UltimateDice.e3fb51c3.png",
    wu = "/assets/Mines.41c036c1.png",
    Cu = "/assets/RouletteSingle.48e1c85a.png",
    ku = "/assets/Coloring.9267a41c.png",
    Lu = "/assets/Tower.3d93671f.png",
    Ou = "/assets/CoinFlip.340b3677.png",
    Ru = "/assets/BaccaratSingle.857259c1.png",
    Uu = "/assets/Twist.aeed2ac6.png",
    ju = "/assets/Double.ecdb8a52.png",
    yu = "/assets/coinFlag.0edaee83.png",
    o = "/assets/Parity.f8c5ee6f.png";

function Su(e) {
    switch (P(e).toLowerCase()) {
        case "baccaratmultiplayer":
            return su;
        case "bingo":
            return tu;
        case "blackjack":
            return Y;
        case "cave":
            return nu;
        case "classicdice":
            return ru;
        case "crash":
            return cu;
        case "hilo":
            return iu;
        case "keno":
            return ou;
        case "kenomultiplayer":
            return du;
        case "orientalbeauties":
            return lu;
        case "plinko":
            return pu;
        case "roulettemultiplayer":
            return xu;
        case "slots":
            return bu;
        case "limbo":
            return gu;
        case "sword":
            return hu;
        case "videopoker":
            return vu;
        case "wheel":
            return Au;
        case "hashdice":
            return fu;
        case "egyptian":
            return Eu;
        case "ultimatedice":
            return mu;
        case "mines":
            return wu;
        case "roulette":
            return Cu;
        case "baccarat":
            return Ru;
        case "ringoffortune":
            return ku;
        case "towerlegend":
            return Lu;
        case "coinflip":
            return Ou;
        case "twist":
            return Uu;
        case "double":
            return ju;
        case "coinflag":
            return yu;
        case "fastparity":
            return o;
        case "parity":
            return o;
        default:
            return "Default"
    }
}
export {
    E as a, g as b, M as c, C as d, P as e, w as f, k as g, f as h, Su as i, Y as j, o as k, A as s, m as u, K as w
};