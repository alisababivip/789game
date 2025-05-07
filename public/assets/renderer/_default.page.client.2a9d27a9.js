var kI = Object.defineProperty,
    PI = Object.defineProperties;
var TI = Object.getOwnPropertyDescriptors;
var ar = Object.getOwnPropertySymbols;
var Xd = Object.prototype.hasOwnProperty,
    Jd = Object.prototype.propertyIsEnumerable;
var qa = (L, G, H) => G in L ? kI(L, G, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: H
    }) : L[G] = H,
    S = (L, G) => {
        for (var H in G || (G = {})) Xd.call(G, H) && qa(L, H, G[H]);
        if (ar)
            for (var H of ar(G)) Jd.call(G, H) && qa(L, H, G[H]);
        return L
    },
    et = (L, G) => PI(L, TI(G));
var Ue = (L, G) => {
    var H = {};
    for (var ve in L) Xd.call(L, ve) && G.indexOf(ve) < 0 && (H[ve] = L[ve]);
    if (L != null && ar)
        for (var ve of ar(L)) G.indexOf(ve) < 0 && Jd.call(L, ve) && (H[ve] = L[ve]);
    return H
};
var Ya = (L, G, H) => (qa(L, typeof G != "symbol" ? G + "" : G, H), H);
import {
    i as Dt,
    b as _e,
    t as C,
    W as Qd,
    c as ce,
    d as J,
    r as tt,
    e as ee,
    n as T,
    g as DI,
    f as Lt,
    h as ze,
    j as ue,
    k as sr,
    l as xe,
    m as Q,
    o as LI,
    p as Za,
    q as OI,
    s as nt,
    u as Ot,
    v as Ae,
    w as F,
    x as ef,
    y as Xa,
    z as Bt,
    A as BI,
    U as tf,
    S as Mt,
    B as rt,
    C as Re,
    D as we,
    E as Wt,
    F as nf,
    G as MI,
    H as q,
    I as N,
    J as un,
    K as ln,
    L as at,
    M as Ja,
    N as ir,
    O as ke,
    P as rf,
    Q as WI,
    R as mt,
    T as FI,
    V as Ve,
    X as or,
    Y as Ft,
    Z as af,
    _ as sf,
    $ as of ,
    a0 as cf,
    a1 as UI,
    a2 as Qa,
    a3 as zI,
    a4 as VI,
    a5 as GI,
    a6 as es,
    a7 as uf,
    a8 as lf,
    a9 as ts,
    aa as df,
    ab as ff,
    ac as HI,
    ad as KI,
    ae as $I,
    af as ns,
    ag as pf,
    ah as mf,
    ai as hf,
    aj as gf,
    ak as vf,
    al as fe,
    am as Ut,
    an as yf,
    ao as bf,
    ap as rs,
    aq as _f,
    ar as qI,
    as as YI,
    at as ZI,
    au as zt,
    av as je,
    aw as xf,
    ax as XI,
    ay as as,
    az as ss,
    aA as wf,
    aB as JI,
    aC as cr,
    aD as is,
    aE as st,
    aF as ur,
    aG as dn,
    aH as Pe,
    aI as os,
    aJ as Vt,
    aK as QI,
    aL as jf,
    aM as eN,
    aN as tN,
    aO as nN,
    aP as Sf,
    aQ as lr,
    aR as rN,
    aS as If,
    aT as Nf,
    aU as aN,
    aV as sN,
    aW as Ef,
    aX as fn,
    aY as Cf,
    aZ as cs,
    a_ as iN,
    a$ as Af,
    b0 as oN,
    b1 as Rf,
    b2 as cN,
    b3 as uN,
    b4 as lN,
    b5 as kf,
    b6 as Pf,
    b7 as Tf,
    b8 as dN,
    b9 as Df,
    ba as dr,
    bb as us,
    bc as fN,
    bd as Lf,
    be as pN,
    bf as Of,
    bg as Bf,
    bh as Mf,
    bi as Wf,
    bj as mN,
    bk as Ff,
    bl as Uf,
    bm as hN,
    bn as gN,
    bo as vN,
    bp as yN,
    bq as zf,
    br as bN,
    bs as _N,
    bt as xN,
    bu as wN,
    bv as jN,
    bw as SN,
    bx as IN,
    by as NN,
    bz as EN,
    bA as CN,
    bB as AN,
    bC as RN,
    bD as kN,
    bE as PN,
    bF as TN,
    bG as DN,
    bH as LN,
    bI as ON,
    bJ as BN,
    bK as MN,
    bL as WN,
    bM as FN,
    bN as UN,
    bO as zN,
    bP as VN,
    bQ as GN,
    bR as HN,
    bS as KN,
    bT as $N,
    bU as qN,
    bV as YN,
    bW as ZN,
    bX as XN,
    bY as JN,
    bZ as QN,
    b_ as eE,
    b$ as tE,
    c0 as nE,
    c1 as rE,
    c2 as aE,
    c3 as sE,
    c4 as iE,
    c5 as oE,
    c6 as cE,
    c7 as uE,
    c8 as lE,
    c9 as dE,
    ca as fE,
    cb as pE,
    cc as mE,
    cd as hE,
    ce as gE,
    cf as vE,
    cg as yE,
    ch as Vf,
    ci as it,
    cj as Gf,
    ck as bE,
    cl as Se,
    cm as _E,
    cn as xE,
    co as wE,
    cp as fr,
    cq as jE,
    cr as SE,
    cs as IE,
    ct as NE,
    cu as pr,
    cv as EE,
    cw as ht,
    cx as CE,
    cy as AE,
    cz as RE,
    cA as Hf,
    cB as Kf,
    cC as kE,
    cD as PE,
    cE as TE,
    cF as DE,
    cG as LE,
    cH as $f,
    cI as qf,
    cJ as Ge,
    cK as OE,
    cL as BE,
    cM as ls,
    cN as ME,
    cO as WE,
    cP as FE,
    cQ as UE,
    cR as zE,
    cS as Gt,
    cT as Yf,
    cU as VE,
    cV as mr,
    cW as GE,
    cX as HE,
    cY as Zf,
    cZ as Ie,
    c_ as KE,
    c$ as $E,
    d0 as gt,
    d1 as qE,
    d2 as YE,
    d3 as ZE,
    d4 as Xf,
    d5 as XE,
    d6 as Jf,
    d7 as JE,
    d8 as QE,
    d9 as eC,
    da as Qf,
    db as tC,
    dc as nC,
    dd as rC,
    de as aC,
    df as sC,
    dg as ds,
    dh as iC,
    di as oC,
    dj as cC,
    dk as ep,
    dl as U,
    dm as fs,
    a as g,
    dn as pn,
    dp as uC,
    dq as tp,
    dr as np,
    ds as Y,
    dt as lC,
    du as z,
    dv as hr,
    dw as dC,
    dx as Ht,
    dy as Te,
    dz as rp,
    dA as fC,
    dB as pC,
    dC as He,
    dD as mC,
    dE as hC,
    dF as vt,
    dG as Kt,
    dH as gC,
    dI as yt,
    dJ as vC,
    dK as ps,
    dL as ot,
    dM as yC,
    dN as bC,
    dO as ap,
    dP as _C,
    dQ as xC,
    dR as wC,
    dS as jC,
    dT as ms,
    dU as SC,
    dV as IC,
    dW as sp,
    dX as NC,
    dY as EC,
    dZ as hs,
    d_ as CC,
    d$ as AC,
    e0 as RC,
    e1 as kC,
    e2 as PC,
    e3 as gs,
    e4 as TC,
    e5 as vs,
    e6 as mn,
    e7 as DC,
    e8 as LC,
    e9 as ys,
    ea as OC,
    eb as BC,
    ec as MC,
    ed as Ke,
    ee as WC,
    ef as FC,
    eg as ip,
    eh as UC,
    ei as hn,
    ej as zC,
    ek as VC,
    el as GC,
    em as HC,
    en as KC,
    eo as $C,
    ep as qC,
    eq as YC,
    er as bs,
    es as ZC,
    et as XC,
    eu as JC,
    ev as M,
    ew as op,
    ex as QC,
    ey as gr,
    ez as W,
    eA as cp,
    eB as eA,
    eC as _s,
    eD as tA,
    eE as vr,
    eF as nA,
    eG as rA,
    eH as aA,
    eI as sA,
    eJ as iA,
    __tla as oA
} from "../chunk-64278058.js";
import {
    r as p,
    R as X,
    a as cA
} from "../chunk-73e80d68.js";
import {
    i as gn,
    x as uA,
    U as lA,
    j as dA,
    r as fA,
    z as pA,
    V as mA,
    Y as hA,
    S as gA,
    K as vA,
    A as yA,
    c as bA,
    h as _A,
    O as xA,
    a as wA,
    E as jA,
    k as SA,
    b as IA,
    m as NA,
    R as EA,
    J as CA,
    d as AA,
    l as RA,
    o as kA,
    D as PA,
    B as TA,
    F as DA,
    e as LA,
    s as OA,
    f as BA,
    g as MA,
    I as WA,
    n as FA,
    Z as UA,
    X as zA,
    p as VA,
    q as GA,
    t as HA,
    u as KA,
    v as $A,
    w as qA,
    G as YA,
    y as ZA,
    C as XA,
    H as JA,
    L as QA,
    M as e2,
    N as t2,
    P as n2,
    Q as r2,
    T as a2,
    W as s2,
    _ as i2,
    $ as o2,
    a0 as c2,
    a1 as u2,
    a2 as l2,
    a3 as d2,
    a4 as f2,
    a5 as p2,
    a6 as m2,
    a7 as h2,
    a8 as g2,
    a9 as v2,
    aa as y2,
    ab as b2,
    ac as _2,
    ad as x2,
    ae as w2,
    af as j2,
    ag as S2,
    ah as I2,
    ai as N2,
    aj as E2,
    ak as C2,
    al as A2,
    am as R2,
    an as k2,
    ao as P2,
    ap as T2,
    aq as D2,
    ar as L2,
    as as O2,
    at as B2,
    au as M2,
    av as W2,
    aw as F2,
    ax as U2,
    ay as z2,
    az as V2,
    aA as G2,
    aB as H2,
    aC as K2,
    aD as $2,
    aE as q2,
    aF as Y2,
    aG as Z2,
    aH as X2,
    aI as J2,
    aJ as Q2,
    aK as eR,
    aL as tR,
    aM as nR,
    aN as rR,
    aO as aR,
    aP as sR,
    aQ as iR,
    aR as oR,
    aS as cR,
    aT as uR,
    aU as lR,
    aV as dR,
    aW as fR,
    aX as pR,
    aY as mR,
    aZ as hR,
    a_ as gR,
    a$ as vR,
    b0 as yR,
    b1 as bR,
    b2 as _R,
    b3 as xR,
    b4 as wR,
    b5 as jR,
    b6 as SR,
    b7 as IR,
    b8 as NR,
    b9 as ER,
    ba as CR,
    bb as AR,
    bc as RR,
    bd as kR,
    be as PR,
    bf as TR,
    bg as DR,
    bh as LR,
    bi as OR,
    bj as BR,
    bk as MR,
    bl as WR,
    bm as FR,
    bn as UR,
    bo as zR,
    bp as VR,
    bq as GR,
    br as HR,
    bs as KR,
    bt as $R,
    bu as qR,
    bv as YR,
    bw as ZR,
    bx as XR,
    by as JR,
    bz as QR,
    bA as ek,
    bB as tk,
    bC as nk,
    bD as rk,
    bE as ak,
    bF as sk,
    bG as ik,
    bH as ok,
    bI as ck,
    bJ as uk,
    bK as lk,
    bL as dk,
    bM as fk,
    bN as pk,
    bO as mk,
    bP as hk,
    bQ as gk,
    bR as vk,
    bS as yk,
    bT as bk,
    bU as _k,
    bV as xk,
    bW as wk,
    bX as jk,
    bY as Sk,
    bZ as Ik,
    b_ as Nk,
    b$ as Ek,
    c0 as Ck,
    c1 as Ak,
    c2 as Rk,
    c3 as kk,
    c4 as Pk,
    c5 as Tk,
    c6 as Dk,
    c7 as Lk,
    c8 as Ok,
    c9 as Bk,
    ca as Mk,
    cb as Wk,
    cc as Fk,
    cd as Uk,
    ce as zk,
    cf as Vk,
    cg as Gk,
    ch as Hk,
    ci as Kk,
    cj as $k,
    ck as qk,
    cl as Yk,
    cm as Zk,
    cn as Xk,
    co as Jk,
    cp as Qk,
    cq as eP,
    cr as tP,
    cs as nP,
    ct as rP,
    cu as aP,
    cv as sP,
    cw as iP,
    cx as oP,
    cy as cP,
    cz as uP,
    cA as lP,
    cB as dP,
    cC as fP,
    cD as pP,
    cE as mP,
    cF as hP,
    cG as gP,
    cH as vP,
    cI as yP,
    cJ as bP,
    cK as _P,
    cL as xP,
    cM as wP,
    cN as jP,
    cO as SP,
    cP as IP,
    cQ as NP,
    cR as EP,
    cS as CP,
    cT as AP,
    cU as RP,
    cV as kP,
    cW as PP,
    __tla as TP
} from "../chunk-07f95b47.js";
import {
    j as i,
    r as DP,
    a as LP
} from "../chunk-a4af42e8.js";
import {
    f as xs,
    b as ae,
    C as $e,
    c as ge,
    a as OP,
    L as BP,
    G as MP,
    P as WP,
    n as FP,
    d as UP,
    o as zP,
    e as VP,
    __tla as GP
} from "../chunk-2bddbe1b.js";
import {
    c as vn,
    a as HP,
    s as De,
    h as yr,
    b as bt,
    d as up,
    u as ws,
    e as lp,
    f as dp,
    g as fp,
    w as pp
} from "../chunk-f1a029f1.js";
import {
    c as mp
} from "../chunk-ebb6ff7f.js";
import {
    b as _t,
    a as hp,
    c as KP,
    d as $P,
    e as qe,
    f as qP,
    g as YP,
    h as ZP,
    o as gp
} from "../chunk-b45bd069.js";
import {
    _ as xt
} from "../chunk-cf010ec4.js";
import {
    l as js,
    a as XP,
    __tla as JP
} from "../chunk-07d6de63.js";
import {
    g as QP
} from "../chunk-cf8d333b.js";
import {
    l as te,
    __tla as eT
} from "../chunk-654ef298.js";
import {
    c as se
} from "../chunk-5bcb444f.js";
import {
    p as V,
    u as tT,
    a as nT
} from "../chunk-97fc744c.js";
import {
    l as vp,
    M as rT,
    P as aT,
    o as sT,
    a as iT,
    b as oT,
    S as cT,
    c as uT,
    V as lT
} from "../chunk-4142ea66.js";
import {
    r as dT
} from "../chunk-f0854543.js";
import {
    installHelp as fT
} from "../pages/help/index.page.f9ba9b3b.js";
import {
    C as pT,
    G as mT,
    a as hT,
    B as gT,
    b as vT,
    N as yT,
    A as bT,
    c as _T,
    d as xT,
    P as wT,
    M as jT,
    e as ST,
    f as IT,
    g as NT,
    h as ET,
    i as yp,
    j as CT,
    k as AT,
    S as RT,
    R as kT,
    l as PT,
    m as TT,
    n as DT,
    o as LT,
    T as bp,
    p as OT,
    V as BT,
    q as MT,
    r as WT
} from "../chunk-1371f12f.js";
import {
    u as FT
} from "../chunk-83c301d9.js";
import {
    i as UT
} from "../chunk-1e54fc0c.js";
import {
    t as ct,
    a as $t,
    __tla as zT
} from "../chunk-7a9ca7ff.js";
import {
    g as VT
} from "../chunk-8d9c7a4a.js";
import {
    p as GT
} from "../chunk-569cb855.js";
import {
    n as HT
} from "../chunk-5a2826fd.js";
import "../chunk-c5b9a686.js";
import "../chunk-f82403c7.js";
import "../chunk-4c2df952.js";
import "../chunk-bb0ace6b.js";
import "../chunk-b985edb9.js";
import "../chunk-9a1dea26.js";
import "../chunk-e20af49b.js";
import {
    __tla as KT
} from "../chunk-0e98d985.js";
import "../chunk-55136115.js";
import "../chunk-7459b96e.js";
import "../chunk-87132790.js";
let _p, br, yn, Le, _r, $T = Promise.all([(() => {
    try {
        return oA
    } catch (L) {}
})(), (() => {
    try {
        return TP
    } catch (L) {}
})(), (() => {
    try {
        return GP
    } catch (L) {}
})(), (() => {
    try {
        return JP
    } catch (L) {}
})(), (() => {
    try {
        return eT
    } catch (L) {}
})(), (() => {
    try {
        return zT
    } catch (L) {}
})(), (() => {
    try {
        return KT
    } catch (L) {}
})()]).then(async () => {
    var L = NaN;

    function G(e) {
        return typeof e == "number" ? e : Dt(e) ? L : +e
    }

    function H(e, t) {
        return function(n, r) {
            var a;
            if (n === void 0 && r === void 0) return t;
            if (n !== void 0 && (a = n), r !== void 0) {
                if (a === void 0) return r;
                typeof n == "string" || typeof r == "string" ? (n = _e(n), r = _e(r)) : (n = G(n), r = G(r)), a = e(n, r)
            }
            return a
        }
    }
    var ve = H(function(e, t) {
        return e + t
    }, 0);
    const Ss = ve;
    var xp = "Expected a function";

    function Is(e, t) {
        if (typeof t != "function") throw new TypeError(xp);
        return e = C(e),
            function() {
                if (--e < 1) return t.apply(this, arguments)
            }
    }
    var wp = Qd && new Qd;
    const bn = wp;
    var jp = bn ? function(e, t) {
        return bn.set(e, t), e
    } : ce;
    const Ns = jp;
    var Es = Object.create,
        Sp = function() {
            function e() {}
            return function(t) {
                if (!J(t)) return {};
                if (Es) return Es(t);
                e.prototype = t;
                var n = new e;
                return e.prototype = void 0, n
            }
        }();
    const wt = Sp;

    function qt(e) {
        return function() {
            var t = arguments;
            switch (t.length) {
                case 0:
                    return new e;
                case 1:
                    return new e(t[0]);
                case 2:
                    return new e(t[0], t[1]);
                case 3:
                    return new e(t[0], t[1], t[2]);
                case 4:
                    return new e(t[0], t[1], t[2], t[3]);
                case 5:
                    return new e(t[0], t[1], t[2], t[3], t[4]);
                case 6:
                    return new e(t[0], t[1], t[2], t[3], t[4], t[5]);
                case 7:
                    return new e(t[0], t[1], t[2], t[3], t[4], t[5], t[6])
            }
            var n = wt(e.prototype),
                r = e.apply(n, t);
            return J(r) ? r : n
        }
    }
    var Ip = 1;

    function Np(e, t, n) {
        var r = t & Ip,
            a = qt(e);

        function s() {
            var o = this && this !== tt && this instanceof s ? a : e;
            return o.apply(r ? n : this, arguments)
        }
        return s
    }

    function le(e, t, n) {
        switch (n.length) {
            case 0:
                return e.call(t);
            case 1:
                return e.call(t, n[0]);
            case 2:
                return e.call(t, n[0], n[1]);
            case 3:
                return e.call(t, n[0], n[1], n[2])
        }
        return e.apply(t, n)
    }
    var Ep = Math.max;

    function Cs(e, t, n, r) {
        for (var a = -1, s = e.length, o = n.length, u = -1, l = t.length, f = Ep(s - o, 0), d = Array(l + f), m = !r; ++u < l;) d[u] = t[u];
        for (; ++a < o;)(m || a < s) && (d[n[a]] = e[a]);
        for (; f--;) d[u++] = e[a++];
        return d
    }
    var Cp = Math.max;

    function As(e, t, n, r) {
        for (var a = -1, s = e.length, o = -1, u = n.length, l = -1, f = t.length, d = Cp(s - u, 0), m = Array(d + f), h = !r; ++a < d;) m[a] = e[a];
        for (var v = a; ++l < f;) m[v + l] = t[l];
        for (; ++o < u;)(h || a < s) && (m[v + n[o]] = e[a++]);
        return m
    }

    function Ap(e, t) {
        for (var n = e.length, r = 0; n--;) e[n] === t && ++r;
        return r
    }

    function _n() {}
    var Rp = 4294967295;

    function R(e) {
        this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = Rp, this.__views__ = []
    }
    R.prototype = wt(_n.prototype), R.prototype.constructor = R;

    function xn() {}
    var kp = bn ? function(e) {
        return bn.get(e)
    } : xn;
    const xr = kp;
    var Pp = {};
    const jt = Pp;
    var Tp = Object.prototype,
        Dp = Tp.hasOwnProperty;

    function wn(e) {
        for (var t = e.name + "", n = jt[t], r = Dp.call(jt, t) ? n.length : 0; r--;) {
            var a = n[r],
                s = a.func;
            if (s == null || s == e) return a.name
        }
        return t
    }

    function pe(e, t) {
        this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = void 0
    }
    pe.prototype = wt(_n.prototype), pe.prototype.constructor = pe;

    function ie(e, t) {
        var n = -1,
            r = e.length;
        for (t || (t = Array(r)); ++n < r;) t[n] = e[n];
        return t
    }

    function Rs(e) {
        if (e instanceof R) return e.clone();
        var t = new pe(e.__wrapped__, e.__chain__);
        return t.__actions__ = ie(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t
    }
    var Lp = Object.prototype,
        Op = Lp.hasOwnProperty;

    function c(e) {
        if (ee(e) && !T(e) && !(e instanceof R)) {
            if (e instanceof pe) return e;
            if (Op.call(e, "__wrapped__")) return Rs(e)
        }
        return new pe(e)
    }
    c.prototype = _n.prototype, c.prototype.constructor = c;

    function wr(e) {
        var t = wn(e),
            n = c[t];
        if (typeof n != "function" || !(t in R.prototype)) return !1;
        if (e === n) return !0;
        var r = xr(n);
        return !!r && e === r[0]
    }
    var Bp = 800,
        Mp = 16,
        Wp = Date.now;

    function ks(e) {
        var t = 0,
            n = 0;
        return function() {
            var r = Wp(),
                a = Mp - (r - n);
            if (n = r, a > 0) {
                if (++t >= Bp) return arguments[0]
            } else t = 0;
            return e.apply(void 0, arguments)
        }
    }
    var Fp = ks(Ns);
    const Ps = Fp;
    var Up = /\{\n\/\* \[wrapped with (.+)\] \*/,
        zp = /,? & /;

    function Vp(e) {
        var t = e.match(Up);
        return t ? t[1].split(zp) : []
    }
    var Gp = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/;

    function Hp(e, t) {
        var n = t.length;
        if (!n) return e;
        var r = n - 1;
        return t[r] = (n > 1 ? "& " : "") + t[r], t = t.join(n > 2 ? ", " : " "), e.replace(Gp, `{
/* [wrapped with ` + t + `] */
`)
    }

    function jn(e) {
        return function() {
            return e
        }
    }
    var Kp = function() {
        try {
            var e = DI(Object, "defineProperty");
            return e({}, "", {}), e
        } catch (t) {}
    }();
    const Sn = Kp;
    var $p = Sn ? function(e, t) {
            return Sn(e, "toString", {
                configurable: !0,
                enumerable: !1,
                value: jn(t),
                writable: !0
            })
        } : ce,
        qp = ks($p);
    const jr = qp;

    function me(e, t) {
        for (var n = -1, r = e == null ? 0 : e.length; ++n < r && t(e[n], n, e) !== !1;);
        return e
    }

    function In(e, t, n, r) {
        for (var a = e.length, s = n + (r ? 1 : -1); r ? s-- : ++s < a;)
            if (t(e[s], s, e)) return s;
        return -1
    }

    function Ts(e) {
        return e !== e
    }

    function Yp(e, t, n) {
        for (var r = n - 1, a = e.length; ++r < a;)
            if (e[r] === t) return r;
        return -1
    }

    function St(e, t, n) {
        return t === t ? Yp(e, t, n) : In(e, Ts, n)
    }

    function Nn(e, t) {
        var n = e == null ? 0 : e.length;
        return !!n && St(e, t, 0) > -1
    }
    var Zp = 1,
        Xp = 2,
        Jp = 8,
        Qp = 16,
        em = 32,
        tm = 64,
        nm = 128,
        rm = 256,
        am = 512,
        sm = [
            ["ary", nm],
            ["bind", Zp],
            ["bindKey", Xp],
            ["curry", Jp],
            ["curryRight", Qp],
            ["flip", am],
            ["partial", em],
            ["partialRight", tm],
            ["rearg", rm]
        ];

    function im(e, t) {
        return me(sm, function(n) {
            var r = "_." + n[0];
            t & n[1] && !Nn(e, r) && e.push(r)
        }), e.sort()
    }

    function Ds(e, t, n) {
        var r = t + "";
        return jr(e, Hp(r, im(Vp(r), n)))
    }
    var om = 1,
        cm = 2,
        um = 4,
        lm = 8,
        Ls = 32,
        Os = 64;

    function Bs(e, t, n, r, a, s, o, u, l, f) {
        var d = t & lm,
            m = d ? o : void 0,
            h = d ? void 0 : o,
            v = d ? s : void 0,
            _ = d ? void 0 : s;
        t |= d ? Ls : Os, t &= ~(d ? Os : Ls), t & um || (t &= ~(om | cm));
        var w = [e, t, a, v, m, _, h, u, l, f],
            I = n.apply(void 0, w);
        return wr(e) && Ps(I, w), I.placeholder = r, Ds(I, e, t)
    }

    function It(e) {
        var t = e;
        return t.placeholder
    }
    var dm = Math.min;

    function fm(e, t) {
        for (var n = e.length, r = dm(t.length, n), a = ie(e); r--;) {
            var s = t[r];
            e[r] = Lt(s, n) ? a[s] : void 0
        }
        return e
    }
    var Ms = "__lodash_placeholder__";

    function Ye(e, t) {
        for (var n = -1, r = e.length, a = 0, s = []; ++n < r;) {
            var o = e[n];
            (o === t || o === Ms) && (e[n] = Ms, s[a++] = n)
        }
        return s
    }
    var pm = 1,
        mm = 2,
        hm = 8,
        gm = 16,
        vm = 128,
        ym = 512;

    function En(e, t, n, r, a, s, o, u, l, f) {
        var d = t & vm,
            m = t & pm,
            h = t & mm,
            v = t & (hm | gm),
            _ = t & ym,
            w = h ? void 0 : qt(e);

        function I() {
            for (var E = arguments.length, k = Array(E), be = E; be--;) k[be] = arguments[be];
            if (v) var Qe = It(I),
                rr = Ap(k, Qe);
            if (r && (k = Cs(k, r, a, v)), s && (k = As(k, s, o, v)), E -= rr, v && E < f) {
                var RI = Ye(k, Qe);
                return Bs(e, t, En, I.placeholder, n, k, RI, u, l, f - E)
            }
            var Zd = m ? n : this,
                $a = h ? Zd[e] : e;
            return E = k.length, u ? k = fm(k, u) : _ && E > 1 && k.reverse(), d && l < E && (k.length = l), this && this !== tt && this instanceof I && ($a = w || qt($a)), $a.apply(Zd, k)
        }
        return I
    }

    function bm(e, t, n) {
        var r = qt(e);

        function a() {
            for (var s = arguments.length, o = Array(s), u = s, l = It(a); u--;) o[u] = arguments[u];
            var f = s < 3 && o[0] !== l && o[s - 1] !== l ? [] : Ye(o, l);
            if (s -= f.length, s < n) return Bs(e, t, En, a.placeholder, void 0, o, f, void 0, void 0, n - s);
            var d = this && this !== tt && this instanceof a ? r : e;
            return le(d, this, o)
        }
        return a
    }
    var _m = 1;

    function xm(e, t, n, r) {
        var a = t & _m,
            s = qt(e);

        function o() {
            for (var u = -1, l = arguments.length, f = -1, d = r.length, m = Array(d + l), h = this && this !== tt && this instanceof o ? s : e; ++f < d;) m[f] = r[f];
            for (; l--;) m[f++] = arguments[++u];
            return le(h, a ? n : this, m)
        }
        return o
    }
    var Ws = "__lodash_placeholder__",
        Sr = 1,
        wm = 2,
        jm = 4,
        Fs = 8,
        Yt = 128,
        Us = 256,
        Sm = Math.min;

    function Im(e, t) {
        var n = e[1],
            r = t[1],
            a = n | r,
            s = a < (Sr | wm | Yt),
            o = r == Yt && n == Fs || r == Yt && n == Us && e[7].length <= t[8] || r == (Yt | Us) && t[7].length <= t[8] && n == Fs;
        if (!(s || o)) return e;
        r & Sr && (e[2] = t[2], a |= n & Sr ? 0 : jm);
        var u = t[3];
        if (u) {
            var l = e[3];
            e[3] = l ? Cs(l, u, t[4]) : u, e[4] = l ? Ye(e[3], Ws) : t[4]
        }
        return u = t[5], u && (l = e[5], e[5] = l ? As(l, u, t[6]) : u, e[6] = l ? Ye(e[5], Ws) : t[6]), u = t[7], u && (e[7] = u), r & Yt && (e[8] = e[8] == null ? t[8] : Sm(e[8], t[8])), e[9] == null && (e[9] = t[9]), e[0] = t[0], e[1] = a, e
    }
    var Nm = "Expected a function",
        zs = 1,
        Em = 2,
        Ir = 8,
        Nr = 16,
        Er = 32,
        Vs = 64,
        Gs = Math.max;

    function Oe(e, t, n, r, a, s, o, u) {
        var l = t & Em;
        if (!l && typeof e != "function") throw new TypeError(Nm);
        var f = r ? r.length : 0;
        if (f || (t &= ~(Er | Vs), r = a = void 0), o = o === void 0 ? o : Gs(C(o), 0), u = u === void 0 ? u : C(u), f -= a ? a.length : 0, t & Vs) {
            var d = r,
                m = a;
            r = a = void 0
        }
        var h = l ? void 0 : xr(e),
            v = [e, t, n, r, a, d, m, s, o, u];
        if (h && Im(v, h), e = v[0], t = v[1], n = v[2], r = v[3], a = v[4], u = v[9] = v[9] === void 0 ? l ? 0 : e.length : Gs(v[9] - f, 0), !u && t & (Ir | Nr) && (t &= ~(Ir | Nr)), !t || t == zs) var _ = Np(e, t, n);
        else t == Ir || t == Nr ? _ = bm(e, t, u) : (t == Er || t == (zs | Er)) && !a.length ? _ = xm(e, t, n, r) : _ = En.apply(void 0, v);
        var w = h ? Ns : Ps;
        return Ds(w(_, v), e, t)
    }
    var Cm = 128;

    function Cr(e, t, n) {
        return t = n ? void 0 : t, t = e && t == null ? e.length : t, Oe(e, Cm, void 0, void 0, void 0, void 0, t)
    }

    function Be(e, t, n) {
        t == "__proto__" && Sn ? Sn(e, t, {
            configurable: !0,
            enumerable: !0,
            value: n,
            writable: !0
        }) : e[t] = n
    }
    var Am = Object.prototype,
        Rm = Am.hasOwnProperty;

    function Zt(e, t, n) {
        var r = e[t];
        (!(Rm.call(e, t) && ze(r, n)) || n === void 0 && !(t in e)) && Be(e, t, n)
    }

    function Ne(e, t, n, r) {
        var a = !n;
        n || (n = {});
        for (var s = -1, o = t.length; ++s < o;) {
            var u = t[s],
                l = r ? r(n[u], e[u], u, n, e) : void 0;
            l === void 0 && (l = e[u]), a ? Be(n, u, l) : Zt(n, u, l)
        }
        return n
    }
    var Hs = Math.max;

    function Ks(e, t, n) {
        return t = Hs(t === void 0 ? e.length - 1 : t, 0),
            function() {
                for (var r = arguments, a = -1, s = Hs(r.length - t, 0), o = Array(s); ++a < s;) o[a] = r[t + a];
                a = -1;
                for (var u = Array(t + 1); ++a < t;) u[a] = r[a];
                return u[t] = n(o), le(e, this, u)
            }
    }

    function A(e, t) {
        return jr(Ks(e, t, ce), e + "")
    }

    function Nt(e) {
        return A(function(t, n) {
            var r = -1,
                a = n.length,
                s = a > 1 ? n[a - 1] : void 0,
                o = a > 2 ? n[2] : void 0;
            for (s = e.length > 3 && typeof s == "function" ? (a--, s) : void 0, o && ue(n[0], n[1], o) && (s = a < 3 ? void 0 : s, a = 1), t = Object(t); ++r < a;) {
                var u = n[r];
                u && e(t, u, r, s)
            }
            return t
        })
    }
    var km = Object.prototype,
        Pm = km.hasOwnProperty,
        Tm = Nt(function(e, t) {
            if (sr(t) || xe(t)) {
                Ne(t, Q(t), e);
                return
            }
            for (var n in t) Pm.call(t, n) && Zt(e, n, t[n])
        });
    const $s = Tm;

    function Dm(e) {
        var t = [];
        if (e != null)
            for (var n in Object(e)) t.push(n);
        return t
    }
    var Lm = Object.prototype,
        Om = Lm.hasOwnProperty;

    function Bm(e) {
        if (!J(e)) return Dm(e);
        var t = sr(e),
            n = [];
        for (var r in e) r == "constructor" && (t || !Om.call(e, r)) || n.push(r);
        return n
    }

    function ne(e) {
        return xe(e) ? LI(e, !0) : Bm(e)
    }
    var Mm = Nt(function(e, t) {
        Ne(t, ne(t), e)
    });
    const Cn = Mm;
    var Wm = Nt(function(e, t, n, r) {
        Ne(t, ne(t), e, r)
    });
    const Et = Wm;
    var Fm = Nt(function(e, t, n, r) {
        Ne(t, Q(t), e, r)
    });
    const qs = Fm;

    function Ar(e, t) {
        for (var n = -1, r = t.length, a = Array(r), s = e == null; ++n < r;) a[n] = s ? void 0 : Za(e, t[n]);
        return a
    }

    function Me(e) {
        return jr(Ks(e, void 0, xs), e + "")
    }
    var Um = Me(Ar);
    const Ys = Um;
    var zm = OI(Object.getPrototypeOf, Object);
    const An = zm;
    var Vm = "[object Object]",
        Gm = Function.prototype,
        Hm = Object.prototype,
        Zs = Gm.toString,
        Km = Hm.hasOwnProperty,
        $m = Zs.call(Object);

    function Ct(e) {
        if (!ee(e) || nt(e) != Vm) return !1;
        var t = An(e);
        if (t === null) return !0;
        var n = Km.call(t, "constructor") && t.constructor;
        return typeof n == "function" && n instanceof n && Zs.call(n) == $m
    }
    var qm = "[object DOMException]",
        Ym = "[object Error]";

    function Rn(e) {
        if (!ee(e)) return !1;
        var t = nt(e);
        return t == Ym || t == qm || typeof e.message == "string" && typeof e.name == "string" && !Ct(e)
    }
    var Zm = A(function(e, t) {
        try {
            return le(e, void 0, t)
        } catch (n) {
            return Rn(n) ? n : new Error(n)
        }
    });
    const Rr = Zm;
    var Xm = 1,
        Jm = 32,
        kr = A(function(e, t, n) {
            var r = Xm;
            if (n.length) {
                var a = Ye(n, It(kr));
                r |= Jm
            }
            return Oe(e, r, t, n, a)
        });
    kr.placeholder = {};
    const Pr = kr;
    var Qm = Me(function(e, t) {
        return me(t, function(n) {
            n = Ot(n), Be(e, n, Pr(e[n], e))
        }), e
    });
    const Xs = Qm;
    var eh = 1,
        th = 2,
        nh = 32,
        Tr = A(function(e, t, n) {
            var r = eh | th;
            if (n.length) {
                var a = Ye(n, It(Tr));
                r |= nh
            }
            return Oe(t, r, e, n, a)
        });
    Tr.placeholder = {};
    const Js = Tr;

    function Qs() {
        if (!arguments.length) return [];
        var e = arguments[0];
        return T(e) ? e : [e]
    }
    var rh = tt.isFinite,
        ah = Math.min;

    function Dr(e) {
        var t = Math[e];
        return function(n, r) {
            if (n = Ae(n), r = r == null ? 0 : ah(C(r), 292), r && rh(n)) {
                var a = (F(n) + "e").split("e"),
                    s = t(a[0] + "e" + (+a[1] + r));
                return a = (F(s) + "e").split("e"), +(a[0] + "e" + (+a[1] - r))
            }
            return t(n)
        }
    }
    var sh = Dr("ceil");
    const ei = sh;

    function Lr(e) {
        var t = c(e);
        return t.__chain__ = !0, t
    }

    function ut(e, t, n) {
        return e === e && (n !== void 0 && (e = e <= n ? e : n), t !== void 0 && (e = e >= t ? e : t)), e
    }

    function ti(e, t, n) {
        return n === void 0 && (n = t, t = void 0), n !== void 0 && (n = Ae(n), n = n === n ? n : 0), t !== void 0 && (t = Ae(t), t = t === t ? t : 0), ut(Ae(e), t, n)
    }

    function ni(e, t) {
        return e && Ne(t, Q(t), e)
    }

    function ih(e, t) {
        return e && Ne(t, ne(t), e)
    }
    var ri = typeof exports == "object" && exports && !exports.nodeType && exports,
        ai = ri && typeof module == "object" && module && !module.nodeType && module,
        oh = ai && ai.exports === ri,
        si = oh ? tt.Buffer : void 0,
        ii = si ? si.allocUnsafe : void 0;

    function oi(e, t) {
        if (t) return e.slice();
        var n = e.length,
            r = ii ? ii(n) : new e.constructor(n);
        return e.copy(r), r
    }

    function ch(e, t) {
        return Ne(e, ef(e), t)
    }
    var uh = Object.getOwnPropertySymbols,
        lh = uh ? function(e) {
            for (var t = []; e;) Bt(t, ef(e)), e = An(e);
            return t
        } : Xa;
    const ci = lh;

    function dh(e, t) {
        return Ne(e, ci(e), t)
    }

    function Or(e) {
        return BI(e, ne, ci)
    }
    var fh = Object.prototype,
        ph = fh.hasOwnProperty;

    function mh(e) {
        var t = e.length,
            n = new e.constructor(t);
        return t && typeof e[0] == "string" && ph.call(e, "index") && (n.index = e.index, n.input = e.input), n
    }

    function Br(e) {
        var t = new e.constructor(e.byteLength);
        return new tf(t).set(new tf(e)), t
    }

    function hh(e, t) {
        var n = t ? Br(e.buffer) : e.buffer;
        return new e.constructor(n, e.byteOffset, e.byteLength)
    }
    var gh = /\w*$/;

    function vh(e) {
        var t = new e.constructor(e.source, gh.exec(e));
        return t.lastIndex = e.lastIndex, t
    }
    var ui = Mt ? Mt.prototype : void 0,
        li = ui ? ui.valueOf : void 0;

    function yh(e) {
        return li ? Object(li.call(e)) : {}
    }

    function di(e, t) {
        var n = t ? Br(e.buffer) : e.buffer;
        return new e.constructor(n, e.byteOffset, e.length)
    }
    var bh = "[object Boolean]",
        _h = "[object Date]",
        xh = "[object Map]",
        wh = "[object Number]",
        jh = "[object RegExp]",
        Sh = "[object Set]",
        Ih = "[object String]",
        Nh = "[object Symbol]",
        Eh = "[object ArrayBuffer]",
        Ch = "[object DataView]",
        Ah = "[object Float32Array]",
        Rh = "[object Float64Array]",
        kh = "[object Int8Array]",
        Ph = "[object Int16Array]",
        Th = "[object Int32Array]",
        Dh = "[object Uint8Array]",
        Lh = "[object Uint8ClampedArray]",
        Oh = "[object Uint16Array]",
        Bh = "[object Uint32Array]";

    function Mh(e, t, n) {
        var r = e.constructor;
        switch (t) {
            case Eh:
                return Br(e);
            case bh:
            case _h:
                return new r(+e);
            case Ch:
                return hh(e, n);
            case Ah:
            case Rh:
            case kh:
            case Ph:
            case Th:
            case Dh:
            case Lh:
            case Oh:
            case Bh:
                return di(e, n);
            case xh:
                return new r;
            case wh:
            case Ih:
                return new r(e);
            case jh:
                return vh(e);
            case Sh:
                return new r;
            case Nh:
                return yh(e)
        }
    }

    function fi(e) {
        return typeof e.constructor == "function" && !sr(e) ? wt(An(e)) : {}
    }
    var Wh = "[object Map]";

    function Fh(e) {
        return ee(e) && rt(e) == Wh
    }
    var pi = Re && Re.isMap,
        Uh = pi ? we(pi) : Fh;
    const Mr = Uh;
    var zh = "[object Set]";

    function Vh(e) {
        return ee(e) && rt(e) == zh
    }
    var mi = Re && Re.isSet,
        Gh = mi ? we(mi) : Vh;
    const Wr = Gh;
    var Hh = 1,
        Kh = 2,
        $h = 4,
        hi = "[object Arguments]",
        qh = "[object Array]",
        Yh = "[object Boolean]",
        Zh = "[object Date]",
        Xh = "[object Error]",
        gi = "[object Function]",
        Jh = "[object GeneratorFunction]",
        Qh = "[object Map]",
        eg = "[object Number]",
        vi = "[object Object]",
        tg = "[object RegExp]",
        ng = "[object Set]",
        rg = "[object String]",
        ag = "[object Symbol]",
        sg = "[object WeakMap]",
        ig = "[object ArrayBuffer]",
        og = "[object DataView]",
        cg = "[object Float32Array]",
        ug = "[object Float64Array]",
        lg = "[object Int8Array]",
        dg = "[object Int16Array]",
        fg = "[object Int32Array]",
        pg = "[object Uint8Array]",
        mg = "[object Uint8ClampedArray]",
        hg = "[object Uint16Array]",
        gg = "[object Uint32Array]",
        B = {};
    B[hi] = B[qh] = B[ig] = B[og] = B[Yh] = B[Zh] = B[cg] = B[ug] = B[lg] = B[dg] = B[fg] = B[Qh] = B[eg] = B[vi] = B[tg] = B[ng] = B[rg] = B[ag] = B[pg] = B[mg] = B[hg] = B[gg] = !0, B[Xh] = B[gi] = B[sg] = !1;

    function he(e, t, n, r, a, s) {
        var o, u = t & Hh,
            l = t & Kh,
            f = t & $h;
        if (n && (o = a ? n(e, r, a, s) : n(e)), o !== void 0) return o;
        if (!J(e)) return e;
        var d = T(e);
        if (d) {
            if (o = mh(e), !u) return ie(e, o)
        } else {
            var m = rt(e),
                h = m == gi || m == Jh;
            if (Wt(e)) return oi(e, u);
            if (m == vi || m == hi || h && !a) {
                if (o = l || h ? {} : fi(e), !u) return l ? dh(e, ih(o, e)) : ch(e, ni(o, e))
            } else {
                if (!B[m]) return a ? e : {};
                o = Mh(e, m, u)
            }
        }
        s || (s = new nf);
        var v = s.get(e);
        if (v) return v;
        s.set(e, o), Wr(e) ? e.forEach(function(I) {
            o.add(he(I, t, n, I, e, s))
        }) : Mr(e) && e.forEach(function(I, E) {
            o.set(E, he(I, t, n, E, e, s))
        });
        var _ = f ? l ? Or : MI : l ? ne : Q,
            w = d ? void 0 : _(e);
        return me(w || e, function(I, E) {
            w && (E = I, I = e[E]), Zt(o, E, he(I, t, n, E, e, s))
        }), o
    }
    var vg = 4;

    function yi(e) {
        return he(e, vg)
    }
    var yg = 1,
        bg = 4;
    br = function(e) {
        return he(e, yg | bg)
    };
    var _g = 1,
        xg = 4;

    function bi(e, t) {
        return t = typeof t == "function" ? t : void 0, he(e, _g | xg, t)
    }
    var wg = 4;

    function _i(e, t) {
        return t = typeof t == "function" ? t : void 0, he(e, wg, t)
    }

    function Fr() {
        return new pe(this.value(), this.__chain__)
    }

    function xi() {
        var e = arguments.length;
        if (!e) return [];
        for (var t = Array(e - 1), n = arguments[0], r = e; r--;) t[r - 1] = arguments[r];
        return Bt(T(n) ? ie(n) : [n], ae(t, 1))
    }
    var jg = "Expected a function";

    function wi(e) {
        var t = e == null ? 0 : e.length,
            n = N;
        return e = t ? q(e, function(r) {
            if (typeof r[1] != "function") throw new TypeError(jg);
            return [n(r[0]), r[1]]
        }) : [], A(function(r) {
            for (var a = -1; ++a < t;) {
                var s = e[a];
                if (le(s[0], this, r)) return le(s[1], this, r)
            }
        })
    }

    function ji(e, t, n) {
        var r = n.length;
        if (e == null) return !r;
        for (e = Object(e); r--;) {
            var a = n[r],
                s = t[a],
                o = e[a];
            if (o === void 0 && !(a in e) || !s(o)) return !1
        }
        return !0
    }

    function Sg(e) {
        var t = Q(e);
        return function(n) {
            return ji(n, e, t)
        }
    }
    var Ig = 1;

    function Si(e) {
        return Sg(he(e, Ig))
    }

    function Ii(e, t) {
        return t == null || ji(e, t, Q(t))
    }

    function Ng(e, t, n, r) {
        for (var a = -1, s = e == null ? 0 : e.length; ++a < s;) {
            var o = e[a];
            t(r, o, n(o), e)
        }
        return r
    }

    function Eg(e, t, n, r) {
        return _t(e, function(a, s, o) {
            t(r, a, n(a), o)
        }), r
    }

    function kn(e, t) {
        return function(n, r) {
            var a = T(n) ? Ng : Eg,
                s = t ? t() : {};
            return a(n, e, N(r), s)
        }
    }
    var Cg = Object.prototype,
        Ag = Cg.hasOwnProperty,
        Rg = kn(function(e, t, n) {
            Ag.call(e, n) ? ++e[n] : Be(e, n, 1)
        });
    const Ni = Rg;

    function Ei(e, t) {
        var n = wt(e);
        return t == null ? n : ni(n, t)
    }
    var kg = 8;

    function Pn(e, t, n) {
        t = n ? void 0 : t;
        var r = Oe(e, kg, void 0, void 0, void 0, void 0, void 0, t);
        return r.placeholder = Pn.placeholder, r
    }
    Pn.placeholder = {};
    var Pg = 16;

    function Tn(e, t, n) {
        t = n ? void 0 : t;
        var r = Oe(e, Pg, void 0, void 0, void 0, void 0, void 0, t);
        return r.placeholder = Tn.placeholder, r
    }
    Tn.placeholder = {};

    function Ci(e, t) {
        return e == null || e !== e ? t : e
    }
    var Ai = Object.prototype,
        Tg = Ai.hasOwnProperty,
        Dg = A(function(e, t) {
            e = Object(e);
            var n = -1,
                r = t.length,
                a = r > 2 ? t[2] : void 0;
            for (a && ue(t[0], t[1], a) && (r = 1); ++n < r;)
                for (var s = t[n], o = ne(s), u = -1, l = o.length; ++u < l;) {
                    var f = o[u],
                        d = e[f];
                    (d === void 0 || ze(d, Ai[f]) && !Tg.call(e, f)) && (e[f] = s[f])
                }
            return e
        });
    const Ri = Dg;

    function Ur(e, t, n) {
        (n !== void 0 && !ze(e[t], n) || n === void 0 && !(t in e)) && Be(e, t, n)
    }

    function K(e) {
        return ee(e) && xe(e)
    }

    function zr(e, t) {
        if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__") return e[t]
    }

    function Vr(e) {
        return Ne(e, ne(e))
    }

    function Lg(e, t, n, r, a, s, o) {
        var u = zr(e, n),
            l = zr(t, n),
            f = o.get(l);
        if (f) {
            Ur(e, n, f);
            return
        }
        var d = s ? s(u, l, n + "", e, t, o) : void 0,
            m = d === void 0;
        if (m) {
            var h = T(l),
                v = !h && Wt(l),
                _ = !h && !v && un(l);
            d = l, h || v || _ ? T(u) ? d = u : K(u) ? d = ie(u) : v ? (m = !1, d = oi(l, !0)) : _ ? (m = !1, d = di(l, !0)) : d = [] : Ct(l) || ln(l) ? (d = u, ln(u) ? d = Vr(u) : (!J(u) || at(u)) && (d = fi(l))) : m = !1
        }
        m && (o.set(l, d), a(d, l, r, s, o), o.delete(l)), Ur(e, n, d)
    }

    function Dn(e, t, n, r, a) {
        e !== t && hp(t, function(s, o) {
            if (a || (a = new nf), J(s)) Lg(e, t, o, n, Dn, r, a);
            else {
                var u = r ? r(zr(e, o), s, o + "", e, t, a) : void 0;
                u === void 0 && (u = s), Ur(e, o, u)
            }
        }, ne)
    }

    function ki(e, t, n, r, a, s) {
        return J(e) && J(t) && (s.set(t, e), Dn(e, t, void 0, ki, s), s.delete(t)), e
    }
    var Og = Nt(function(e, t, n, r) {
        Dn(e, t, n, r)
    });
    const Gr = Og;
    var Bg = A(function(e) {
        return e.push(void 0, ki), le(Gr, void 0, e)
    });
    const Pi = Bg;
    var Mg = "Expected a function";

    function Ti(e, t, n) {
        if (typeof e != "function") throw new TypeError(Mg);
        return setTimeout(function() {
            e.apply(void 0, n)
        }, t)
    }
    var Wg = A(function(e, t) {
        return Ti(e, 1, t)
    });
    const Di = Wg;
    var Fg = A(function(e, t, n) {
        return Ti(e, Ae(t) || 0, n)
    });
    const Li = Fg;

    function Hr(e, t, n) {
        for (var r = -1, a = e == null ? 0 : e.length; ++r < a;)
            if (n(t, e[r])) return !0;
        return !1
    }
    var Ug = 200;

    function Xt(e, t, n, r) {
        var a = -1,
            s = Nn,
            o = !0,
            u = e.length,
            l = [],
            f = t.length;
        if (!u) return l;
        n && (t = q(t, we(n))), r ? (s = Hr, o = !1) : t.length >= Ug && (s = ir, o = !1, t = new Ja(t));
        e: for (; ++a < u;) {
            var d = e[a],
                m = n == null ? d : n(d);
            if (d = r || d !== 0 ? d : 0, o && m === m) {
                for (var h = f; h--;)
                    if (t[h] === m) continue e;
                l.push(d)
            } else s(t, m, r) || l.push(d)
        }
        return l
    }
    var zg = A(function(e, t) {
        return K(e) ? Xt(e, ae(t, 1, K, !0)) : []
    });
    const Oi = zg;

    function oe(e) {
        var t = e == null ? 0 : e.length;
        return t ? e[t - 1] : void 0
    }
    var Vg = A(function(e, t) {
        var n = oe(t);
        return K(n) && (n = void 0), K(e) ? Xt(e, ae(t, 1, K, !0), N(n)) : []
    });
    const Bi = Vg;
    var Gg = A(function(e, t) {
        var n = oe(t);
        return K(n) && (n = void 0), K(e) ? Xt(e, ae(t, 1, K, !0), void 0, n) : []
    });
    const Mi = Gg;
    var Hg = H(function(e, t) {
        return e / t
    }, 1);
    const Wi = Hg;

    function Fi(e, t, n) {
        var r = e == null ? 0 : e.length;
        return r ? (t = n || t === void 0 ? 1 : C(t), ke(e, t < 0 ? 0 : t, r)) : []
    }

    function Ui(e, t, n) {
        var r = e == null ? 0 : e.length;
        return r ? (t = n || t === void 0 ? 1 : C(t), t = r - t, ke(e, 0, t < 0 ? 0 : t)) : []
    }

    function Ln(e, t, n, r) {
        for (var a = e.length, s = r ? a : -1;
            (r ? s-- : ++s < a) && t(e[s], s, e););
        return n ? ke(e, r ? 0 : s, r ? s + 1 : a) : ke(e, r ? s + 1 : 0, r ? a : s)
    }

    function zi(e, t) {
        return e && e.length ? Ln(e, N(t), !0, !0) : []
    }

    function Vi(e, t) {
        return e && e.length ? Ln(e, N(t), !0) : []
    }

    function Ee(e) {
        return typeof e == "function" ? e : ce
    }

    function On(e, t) {
        var n = T(e) ? me : _t;
        return n(e, Ee(t))
    }

    function Kg(e, t) {
        for (var n = e == null ? 0 : e.length; n-- && t(e[n], n, e) !== !1;);
        return e
    }
    var $g = KP(!0);
    const Gi = $g;

    function Kr(e, t) {
        return e && Gi(e, t, Q)
    }
    var qg = $P(Kr, !0);
    const Hi = qg;

    function Bn(e, t) {
        var n = T(e) ? Kg : Hi;
        return n(e, Ee(t))
    }

    function Ki(e, t, n) {
        e = F(e), t = _e(t);
        var r = e.length;
        n = n === void 0 ? r : ut(C(n), 0, r);
        var a = n;
        return n -= t.length, n >= 0 && e.slice(n, a) == t
    }

    function Yg(e, t) {
        return q(t, function(n) {
            return [n, e[n]]
        })
    }

    function Zg(e) {
        var t = -1,
            n = Array(e.size);
        return e.forEach(function(r) {
            n[++t] = [r, r]
        }), n
    }
    var Xg = "[object Map]",
        Jg = "[object Set]";

    function $i(e) {
        return function(t) {
            var n = rt(t);
            return n == Xg ? rf(t) : n == Jg ? Zg(t) : Yg(t, e(t))
        }
    }
    var Qg = $i(Q);
    const Mn = Qg;
    var ev = $i(ne);
    const Wn = ev;
    var tv = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        },
        nv = WI(tv);
    const rv = nv;
    var qi = /[&<>"']/g,
        av = RegExp(qi.source);

    function $r(e) {
        return e = F(e), e && av.test(e) ? e.replace(qi, rv) : e
    }
    var Yi = /[\\^$.*+?()[\]{}|]/g,
        sv = RegExp(Yi.source);

    function Zi(e) {
        return e = F(e), e && sv.test(e) ? e.replace(Yi, "\\$&") : e
    }

    function Xi(e, t) {
        for (var n = -1, r = e == null ? 0 : e.length; ++n < r;)
            if (!t(e[n], n, e)) return !1;
        return !0
    }

    function iv(e, t) {
        var n = !0;
        return _t(e, function(r, a, s) {
            return n = !!t(r, a, s), n
        }), n
    }

    function Ji(e, t, n) {
        var r = T(e) ? Xi : iv;
        return n && ue(e, t, n) && (t = void 0), r(e, N(t))
    }
    var ov = 4294967295;

    function qr(e) {
        return e ? ut(C(e), 0, ov) : 0
    }

    function cv(e, t, n, r) {
        var a = e.length;
        for (n = C(n), n < 0 && (n = -n > a ? 0 : a + n), r = r === void 0 || r > a ? a : C(r), r < 0 && (r += a), r = n > r ? 0 : qr(r); n < r;) e[n++] = t;
        return e
    }

    function Qi(e, t, n, r) {
        var a = e == null ? 0 : e.length;
        return a ? (n && typeof n != "number" && ue(e, t, n) && (n = 0, r = a), cv(e, t, n, r)) : []
    }

    function eo(e, t) {
        var n = [];
        return _t(e, function(r, a, s) {
            t(r, a, s) && n.push(r)
        }), n
    }

    function to(e, t) {
        var n = T(e) ? mt : eo;
        return n(e, N(t))
    }

    function no(e) {
        return function(t, n, r) {
            var a = Object(t);
            if (!xe(t)) {
                var s = N(n);
                t = Q(t), n = function(u) {
                    return s(a[u], u, a)
                }
            }
            var o = e(t, n, r);
            return o > -1 ? a[s ? t[o] : o] : void 0
        }
    }
    var uv = Math.max;

    function Yr(e, t, n) {
        var r = e == null ? 0 : e.length;
        if (!r) return -1;
        var a = n == null ? 0 : C(n);
        return a < 0 && (a = uv(r + a, 0)), In(e, N(t), a)
    }
    var lv = no(Yr);
    const ro = lv;

    function ao(e, t, n) {
        var r;
        return n(e, function(a, s, o) {
            if (t(a, s, o)) return r = s, !1
        }), r
    }

    function so(e, t) {
        return ao(e, N(t), qe)
    }
    var dv = Math.max,
        fv = Math.min;

    function Zr(e, t, n) {
        var r = e == null ? 0 : e.length;
        if (!r) return -1;
        var a = r - 1;
        return n !== void 0 && (a = C(n), a = n < 0 ? dv(r + a, 0) : fv(a, r - 1)), In(e, N(t), a, !0)
    }
    var pv = no(Zr);
    const io = pv;

    function oo(e, t) {
        return ao(e, N(t), Kr)
    }

    function Fn(e) {
        return e && e.length ? e[0] : void 0
    }

    function Jt(e, t) {
        var n = T(e) ? q : qP;
        return n(e, N(t))
    }

    function co(e, t) {
        return ae(Jt(e, t), 1)
    }
    var mv = 1 / 0;

    function uo(e, t) {
        return ae(Jt(e, t), mv)
    }

    function lo(e, t, n) {
        return n = n === void 0 ? 1 : C(n), ae(Jt(e, t), n)
    }
    var hv = 1 / 0;

    function fo(e) {
        var t = e == null ? 0 : e.length;
        return t ? ae(e, hv) : []
    }

    function po(e, t) {
        var n = e == null ? 0 : e.length;
        return n ? (t = t === void 0 ? 1 : C(t), ae(e, t)) : []
    }
    var gv = 512;

    function mo(e) {
        return Oe(e, gv)
    }
    var vv = Dr("floor");
    const ho = vv;
    var yv = "Expected a function",
        bv = 8,
        _v = 32,
        xv = 128,
        wv = 256;

    function go(e) {
        return Me(function(t) {
            var n = t.length,
                r = n,
                a = pe.prototype.thru;
            for (e && t.reverse(); r--;) {
                var s = t[r];
                if (typeof s != "function") throw new TypeError(yv);
                if (a && !o && wn(s) == "wrapper") var o = new pe([], !0)
            }
            for (r = o ? r : n; ++r < n;) {
                s = t[r];
                var u = wn(s),
                    l = u == "wrapper" ? xr(s) : void 0;
                l && wr(l[0]) && l[1] == (xv | bv | _v | wv) && !l[4].length && l[9] == 1 ? o = o[wn(l[0])].apply(o, l[3]) : o = s.length == 1 && wr(s) ? o[u]() : o.thru(s)
            }
            return function() {
                var f = arguments,
                    d = f[0];
                if (o && f.length == 1 && T(d)) return o.plant(d).value();
                for (var m = 0, h = n ? t[m].apply(this, f) : d; ++m < n;) h = t[m].call(this, h);
                return h
            }
        })
    }
    var jv = go();
    const vo = jv;
    var Sv = go(!0);
    const yo = Sv;

    function bo(e, t) {
        return e == null ? e : hp(e, Ee(t), ne)
    }

    function _o(e, t) {
        return e == null ? e : Gi(e, Ee(t), ne)
    }

    function xo(e, t) {
        return e && qe(e, Ee(t))
    }

    function wo(e, t) {
        return e && Kr(e, Ee(t))
    }

    function jo(e) {
        for (var t = -1, n = e == null ? 0 : e.length, r = {}; ++t < n;) {
            var a = e[t];
            r[a[0]] = a[1]
        }
        return r
    }

    function Un(e, t) {
        return mt(t, function(n) {
            return at(e[n])
        })
    }

    function So(e) {
        return e == null ? [] : Un(e, Q(e))
    }

    function Io(e) {
        return e == null ? [] : Un(e, ne(e))
    }
    var Iv = Object.prototype,
        Nv = Iv.hasOwnProperty,
        Ev = kn(function(e, t, n) {
            Nv.call(e, n) ? e[n].push(t) : Be(e, n, [t])
        });
    const No = Ev;

    function Xr(e, t) {
        return e > t
    }

    function zn(e) {
        return function(t, n) {
            return typeof t == "string" && typeof n == "string" || (t = Ae(t), n = Ae(n)), e(t, n)
        }
    }
    var Cv = zn(Xr);
    const Eo = Cv;
    var Av = zn(function(e, t) {
        return e >= t
    });
    const Co = Av;
    var Rv = Object.prototype,
        kv = Rv.hasOwnProperty;

    function Pv(e, t) {
        return e != null && kv.call(e, t)
    }

    function Ao(e, t) {
        return e != null && FI(e, t, Pv)
    }
    var Tv = Math.max,
        Dv = Math.min;

    function Lv(e, t, n) {
        return e >= Dv(t, n) && e < Tv(t, n)
    }

    function Ro(e, t, n) {
        return t = Ve(t), n === void 0 ? (n = t, t = 0) : n = Ve(n), e = Ae(e), Lv(e, t, n)
    }

    function Jr(e, t) {
        return q(t, function(n) {
            return e[n]
        })
    }

    function lt(e) {
        return e == null ? [] : Jr(e, Q(e))
    }
    var Ov = Math.max;

    function ko(e, t, n, r) {
        e = xe(e) ? e : lt(e), n = n && !r ? C(n) : 0;
        var a = e.length;
        return n < 0 && (n = Ov(a + n, 0)), gn(e) ? n <= a && e.indexOf(t, n) > -1 : !!a && St(e, t, n) > -1
    }
    var Bv = Math.max;

    function Po(e, t, n) {
        var r = e == null ? 0 : e.length;
        if (!r) return -1;
        var a = n == null ? 0 : C(n);
        return a < 0 && (a = Bv(r + a, 0)), St(e, t, a)
    }

    function To(e) {
        var t = e == null ? 0 : e.length;
        return t ? ke(e, 0, -1) : []
    }
    var Mv = Math.min;

    function Qr(e, t, n) {
        for (var r = n ? Hr : Nn, a = e[0].length, s = e.length, o = s, u = Array(s), l = 1 / 0, f = []; o--;) {
            var d = e[o];
            o && t && (d = q(d, we(t))), l = Mv(d.length, l), u[o] = !n && (t || a >= 120 && d.length >= 120) ? new Ja(o && d) : void 0
        }
        d = e[0];
        var m = -1,
            h = u[0];
        e: for (; ++m < a && f.length < l;) {
            var v = d[m],
                _ = t ? t(v) : v;
            if (v = n || v !== 0 ? v : 0, !(h ? ir(h, _) : r(f, _, n))) {
                for (o = s; --o;) {
                    var w = u[o];
                    if (!(w ? ir(w, _) : r(e[o], _, n))) continue e
                }
                h && h.push(_), f.push(v)
            }
        }
        return f
    }

    function ea(e) {
        return K(e) ? e : []
    }
    var Wv = A(function(e) {
        var t = q(e, ea);
        return t.length && t[0] === e[0] ? Qr(t) : []
    });
    const Do = Wv;
    var Fv = A(function(e) {
        var t = oe(e),
            n = q(e, ea);
        return t === oe(n) ? t = void 0 : n.pop(), n.length && n[0] === e[0] ? Qr(n, N(t)) : []
    });
    const Lo = Fv;
    var Uv = A(function(e) {
        var t = oe(e),
            n = q(e, ea);
        return t = typeof t == "function" ? t : void 0, t && n.pop(), n.length && n[0] === e[0] ? Qr(n, void 0, t) : []
    });
    const Oo = Uv;

    function zv(e, t, n, r) {
        return qe(e, function(a, s, o) {
            t(r, n(a), s, o)
        }), r
    }

    function Bo(e, t) {
        return function(n, r) {
            return zv(n, e, t(r), {})
        }
    }
    var Vv = Object.prototype,
        Gv = Vv.toString,
        Hv = Bo(function(e, t, n) {
            t != null && typeof t.toString != "function" && (t = Gv.call(t)), e[t] = n
        }, jn(ce));
    const Mo = Hv;
    var Wo = Object.prototype,
        Kv = Wo.hasOwnProperty,
        $v = Wo.toString,
        qv = Bo(function(e, t, n) {
            t != null && typeof t.toString != "function" && (t = $v.call(t)), Kv.call(e, t) ? e[t].push(n) : e[t] = [n]
        }, N);
    const Fo = qv;

    function Uo(e, t) {
        return t.length < 2 ? e : or(e, ke(t, 0, -1))
    }

    function Qt(e, t, n) {
        t = Ft(t, e), e = Uo(e, t);
        var r = e == null ? e : e[Ot(oe(t))];
        return r == null ? void 0 : le(r, e, n)
    }
    var Yv = A(Qt);
    const zo = Yv;
    var Zv = A(function(e, t, n) {
        var r = -1,
            a = typeof t == "function",
            s = xe(e) ? Array(e.length) : [];
        return _t(e, function(o) {
            s[++r] = a ? le(t, o, n) : Qt(o, t, n)
        }), s
    });
    const Vo = Zv;
    var Xv = "[object ArrayBuffer]";

    function Jv(e) {
        return ee(e) && nt(e) == Xv
    }
    var Go = Re && Re.isArrayBuffer,
        Qv = Go ? we(Go) : Jv;
    const Ho = Qv;
    var e0 = "[object Boolean]";

    function Ko(e) {
        return e === !0 || e === !1 || ee(e) && nt(e) == e0
    }
    var t0 = "[object Date]";

    function n0(e) {
        return ee(e) && nt(e) == t0
    }
    var $o = Re && Re.isDate,
        r0 = $o ? we($o) : n0;
    const qo = r0;

    function Yo(e) {
        return ee(e) && e.nodeType === 1 && !Ct(e)
    }
    var a0 = "[object Map]",
        s0 = "[object Set]",
        i0 = Object.prototype,
        o0 = i0.hasOwnProperty;

    function Zo(e) {
        if (e == null) return !0;
        if (xe(e) && (T(e) || typeof e == "string" || typeof e.splice == "function" || Wt(e) || un(e) || ln(e))) return !e.length;
        var t = rt(e);
        if (t == a0 || t == s0) return !e.size;
        if (sr(e)) return !af(e).length;
        for (var n in e)
            if (o0.call(e, n)) return !1;
        return !0
    }

    function Xo(e, t) {
        return sf(e, t)
    }

    function Jo(e, t, n) {
        n = typeof n == "function" ? n : void 0;
        var r = n ? n(e, t) : void 0;
        return r === void 0 ? sf(e, t, void 0, n) : !!r
    }
    var c0 = tt.isFinite;

    function Qo(e) {
        return typeof e == "number" && c0(e)
    }

    function ta(e) {
        return typeof e == "number" && e == C(e)
    }

    function ec(e, t) {
        return e === t || of (e, t, cf(t))
    }

    function tc(e, t, n) {
        return n = typeof n == "function" ? n : void 0, of (e, t, cf(t), n)
    }
    var u0 = "[object Number]";

    function na(e) {
        return typeof e == "number" || ee(e) && nt(e) == u0
    }

    function nc(e) {
        return na(e) && e != +e
    }
    var l0 = UI ? at : Qa;
    const d0 = l0;
    var f0 = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.";

    function rc(e) {
        if (d0(e)) throw new Error(f0);
        return zI(e)
    }

    function ac(e) {
        return e == null
    }

    function sc(e) {
        return e === null
    }
    var p0 = "[object RegExp]";

    function m0(e) {
        return ee(e) && nt(e) == p0
    }
    var ic = Re && Re.isRegExp,
        h0 = ic ? we(ic) : m0;
    const Vn = h0;
    var oc = 9007199254740991;

    function cc(e) {
        return ta(e) && e >= -oc && e <= oc
    }

    function uc(e) {
        return e === void 0
    }
    var g0 = "[object WeakMap]";

    function lc(e) {
        return ee(e) && rt(e) == g0
    }
    var v0 = "[object WeakSet]";

    function dc(e) {
        return ee(e) && nt(e) == v0
    }
    var y0 = 1;

    function fc(e) {
        return N(typeof e == "function" ? e : he(e, y0))
    }
    var b0 = Array.prototype,
        _0 = b0.join;

    function pc(e, t) {
        return e == null ? "" : _0.call(e, t)
    }
    var x0 = vn(function(e, t, n) {
        return e + (n ? "-" : "") + t.toLowerCase()
    });
    const mc = x0;
    var w0 = kn(function(e, t, n) {
        Be(e, n, t)
    });
    const hc = w0;

    function j0(e, t, n) {
        for (var r = n + 1; r--;)
            if (e[r] === t) return r;
        return r
    }
    var S0 = Math.max,
        I0 = Math.min;

    function gc(e, t, n) {
        var r = e == null ? 0 : e.length;
        if (!r) return -1;
        var a = r;
        return n !== void 0 && (a = C(n), a = a < 0 ? S0(r + a, 0) : I0(a, r - 1)), t === t ? j0(e, t, a) : In(e, Ts, a, !0)
    }
    var N0 = vn(function(e, t, n) {
        return e + (n ? " " : "") + t.toLowerCase()
    });
    const vc = N0;
    var E0 = HP("toLowerCase");
    const yc = E0;

    function ra(e, t) {
        return e < t
    }
    var C0 = zn(ra);
    const bc = C0;
    var A0 = zn(function(e, t) {
        return e <= t
    });
    const _c = A0;

    function xc(e, t) {
        var n = {};
        return t = N(t), qe(e, function(r, a, s) {
            Be(n, t(r, a, s), r)
        }), n
    }

    function wc(e, t) {
        var n = {};
        return t = N(t), qe(e, function(r, a, s) {
            Be(n, a, t(r, a, s))
        }), n
    }
    var R0 = 1;

    function jc(e) {
        return VI(he(e, R0))
    }
    var k0 = 1;

    function Sc(e, t) {
        return GI(e, he(t, k0))
    }

    function Gn(e, t, n) {
        for (var r = -1, a = e.length; ++r < a;) {
            var s = e[r],
                o = t(s);
            if (o != null && (u === void 0 ? o === o && !Dt(o) : n(o, u))) var u = o,
                l = s
        }
        return l
    }

    function Ic(e) {
        return e && e.length ? Gn(e, ce, Xr) : void 0
    }

    function Nc(e, t) {
        return e && e.length ? Gn(e, N(t), Xr) : void 0
    }

    function aa(e, t) {
        for (var n, r = -1, a = e.length; ++r < a;) {
            var s = t(e[r]);
            s !== void 0 && (n = n === void 0 ? s : n + s)
        }
        return n
    }
    var P0 = 0 / 0;

    function Ec(e, t) {
        var n = e == null ? 0 : e.length;
        return n ? aa(e, t) / n : P0
    }

    function Cc(e) {
        return Ec(e, ce)
    }

    function Ac(e, t) {
        return Ec(e, N(t))
    }
    var T0 = Nt(function(e, t, n) {
        Dn(e, t, n)
    });
    const Rc = T0;
    var D0 = A(function(e, t) {
        return function(n) {
            return Qt(n, e, t)
        }
    });
    const kc = D0;
    var L0 = A(function(e, t) {
        return function(n) {
            return Qt(e, n, t)
        }
    });
    const Pc = L0;

    function Tc(e) {
        return e && e.length ? Gn(e, ce, ra) : void 0
    }

    function Dc(e, t) {
        return e && e.length ? Gn(e, N(t), ra) : void 0
    }

    function sa(e, t, n) {
        var r = Q(t),
            a = Un(t, r),
            s = !(J(n) && "chain" in n) || !!n.chain,
            o = at(e);
        return me(a, function(u) {
            var l = t[u];
            e[u] = l, o && (e.prototype[u] = function() {
                var f = this.__chain__;
                if (s || f) {
                    var d = e(this.__wrapped__),
                        m = d.__actions__ = ie(this.__actions__);
                    return m.push({
                        func: l,
                        args: arguments,
                        thisArg: e
                    }), d.__chain__ = f, d
                }
                return l.apply(e, Bt([this.value()], arguments))
            })
        }), e
    }
    var O0 = H(function(e, t) {
        return e * t
    }, 1);
    const Lc = O0;
    var B0 = "Expected a function";

    function At(e) {
        if (typeof e != "function") throw new TypeError(B0);
        return function() {
            var t = arguments;
            switch (t.length) {
                case 0:
                    return !e.call(this);
                case 1:
                    return !e.call(this, t[0]);
                case 2:
                    return !e.call(this, t[0], t[1]);
                case 3:
                    return !e.call(this, t[0], t[1], t[2])
            }
            return !e.apply(this, t)
        }
    }

    function M0(e) {
        for (var t, n = []; !(t = e.next()).done;) n.push(t.value);
        return n
    }
    var W0 = "[object Map]",
        F0 = "[object Set]",
        ia = Mt ? Mt.iterator : void 0;

    function oa(e) {
        if (!e) return [];
        if (xe(e)) return gn(e) ? De(e) : ie(e);
        if (ia && e[ia]) return M0(e[ia]());
        var t = rt(e),
            n = t == W0 ? rf : t == F0 ? es : lt;
        return n(e)
    }

    function ca() {
        this.__values__ === void 0 && (this.__values__ = oa(this.value()));
        var e = this.__index__ >= this.__values__.length,
            t = e ? void 0 : this.__values__[this.__index__++];
        return {
            done: e,
            value: t
        }
    }

    function Oc(e, t) {
        var n = e.length;
        if (n) return t += t < 0 ? n : 0, Lt(t, n) ? e[t] : void 0
    }

    function Bc(e, t) {
        return e && e.length ? Oc(e, C(t)) : void 0
    }

    function Mc(e) {
        return e = C(e), A(function(t) {
            return Oc(t, e)
        })
    }

    function ua(e, t) {
        return t = Ft(t, e), e = Uo(e, t), e == null || delete e[Ot(oe(t))]
    }

    function U0(e) {
        return Ct(e) ? void 0 : e
    }
    var z0 = 1,
        V0 = 2,
        G0 = 4,
        H0 = Me(function(e, t) {
            var n = {};
            if (e == null) return n;
            var r = !1;
            t = q(t, function(s) {
                return s = Ft(s, e), r || (r = s.length > 1), s
            }), Ne(e, Or(e), n), r && (n = he(n, z0 | V0 | G0, U0));
            for (var a = t.length; a--;) ua(n, t[a]);
            return n
        });
    const Wc = H0;

    function en(e, t, n, r) {
        if (!J(e)) return e;
        t = Ft(t, e);
        for (var a = -1, s = t.length, o = s - 1, u = e; u != null && ++a < s;) {
            var l = Ot(t[a]),
                f = n;
            if (l === "__proto__" || l === "constructor" || l === "prototype") return e;
            if (a != o) {
                var d = u[l];
                f = r ? r(d, l, u) : void 0, f === void 0 && (f = J(d) ? d : Lt(t[a + 1]) ? [] : {})
            }
            Zt(u, l, f), u = u[l]
        }
        return e
    }

    function Fc(e, t, n) {
        for (var r = -1, a = t.length, s = {}; ++r < a;) {
            var o = t[r],
                u = or(e, o);
            n(u, o) && en(s, Ft(o, e), u)
        }
        return s
    }

    function la(e, t) {
        if (e == null) return {};
        var n = q(Or(e), function(r) {
            return [r]
        });
        return t = N(t), Fc(e, n, function(r, a) {
            return t(r, a[0])
        })
    }

    function Uc(e, t) {
        return la(e, At(N(t)))
    }

    function da(e) {
        return Me(function(t) {
            return t = q(t, we(N)), A(function(n) {
                var r = this;
                return e(t, function(a) {
                    return le(a, r, n)
                })
            })
        })
    }
    var K0 = da(q);
    const zc = K0;
    var $0 = A;
    const q0 = $0;
    var Y0 = Math.min,
        Z0 = q0(function(e, t) {
            t = t.length == 1 && T(t[0]) ? q(t[0], we(N)) : q(ae(t, 1), we(N));
            var n = t.length;
            return A(function(r) {
                for (var a = -1, s = Y0(r.length, n); ++a < s;) r[a] = t[a].call(this, r[a]);
                return le(e, this, r)
            })
        });
    const Vc = Z0;
    var X0 = da(Xi);
    const Gc = X0;
    var J0 = da(uf);
    const Hc = J0;
    var Q0 = 9007199254740991,
        ey = Math.floor;

    function fa(e, t) {
        var n = "";
        if (!e || t < 1 || t > Q0) return n;
        do t % 2 && (n += e), t = ey(t / 2), t && (e += e); while (t);
        return n
    }
    var ty = lf("length");
    const ny = ty;
    var Kc = "\uD800-\uDFFF",
        ry = "\\u0300-\\u036f",
        ay = "\\ufe20-\\ufe2f",
        sy = "\\u20d0-\\u20ff",
        iy = ry + ay + sy,
        oy = "\\ufe0e\\ufe0f",
        cy = "[" + Kc + "]",
        pa = "[" + iy + "]",
        ma = "\uD83C[\uDFFB-\uDFFF]",
        uy = "(?:" + pa + "|" + ma + ")",
        $c = "[^" + Kc + "]",
        qc = "(?:\uD83C[\uDDE6-\uDDFF]){2}",
        Yc = "[\uD800-\uDBFF][\uDC00-\uDFFF]",
        ly = "\\u200d",
        Zc = uy + "?",
        Xc = "[" + oy + "]?",
        dy = "(?:" + ly + "(?:" + [$c, qc, Yc].join("|") + ")" + Xc + Zc + ")*",
        fy = Xc + Zc + dy,
        py = "(?:" + [$c + pa + "?", pa, qc, Yc, cy].join("|") + ")",
        Jc = RegExp(ma + "(?=" + ma + ")|" + py + fy, "g");

    function my(e) {
        for (var t = Jc.lastIndex = 0; Jc.test(e);) ++t;
        return t
    }

    function Rt(e) {
        return yr(e) ? my(e) : ny(e)
    }
    var hy = Math.ceil;

    function Hn(e, t) {
        t = t === void 0 ? " " : _e(t);
        var n = t.length;
        if (n < 2) return n ? fa(t, e) : t;
        var r = fa(t, hy(e / Rt(t)));
        return yr(t) ? bt(De(r), 0, e).join("") : r.slice(0, e)
    }
    var gy = Math.ceil,
        vy = Math.floor;

    function Qc(e, t, n) {
        e = F(e), t = C(t);
        var r = t ? Rt(e) : 0;
        if (!t || r >= t) return e;
        var a = (t - r) / 2;
        return Hn(vy(a), n) + e + Hn(gy(a), n)
    }

    function eu(e, t, n) {
        e = F(e), t = C(t);
        var r = t ? Rt(e) : 0;
        return t && r < t ? e + Hn(t - r, n) : e
    }

    function tu(e, t, n) {
        e = F(e), t = C(t);
        var r = t ? Rt(e) : 0;
        return t && r < t ? Hn(t - r, n) + e : e
    }
    var yy = /^\s+/,
        by = tt.parseInt;

    function nu(e, t, n) {
        return n || t == null ? t = 0 : t && (t = +t), by(F(e).replace(yy, ""), t || 0)
    }
    var _y = 32,
        ha = A(function(e, t) {
            var n = Ye(t, It(ha));
            return Oe(e, _y, void 0, t, n)
        });
    ha.placeholder = {};
    const ga = ha;
    var xy = 64,
        va = A(function(e, t) {
            var n = Ye(t, It(va));
            return Oe(e, xy, void 0, t, n)
        });
    va.placeholder = {};
    const ru = va;
    var wy = kn(function(e, t, n) {
        e[n ? 0 : 1].push(t)
    }, function() {
        return [
            [],
            []
        ]
    });
    const au = wy;

    function jy(e, t) {
        return Fc(e, t, function(n, r) {
            return ts(e, r)
        })
    }
    var Sy = Me(function(e, t) {
        return e == null ? {} : jy(e, t)
    });
    const su = Sy;

    function ya(e) {
        for (var t, n = this; n instanceof _n;) {
            var r = Rs(n);
            r.__index__ = 0, r.__values__ = void 0, t ? a.__wrapped__ = r : t = r;
            var a = r;
            n = n.__wrapped__
        }
        return a.__wrapped__ = e, t
    }

    function iu(e) {
        return function(t) {
            return e == null ? void 0 : or(e, t)
        }
    }

    function Iy(e, t, n, r) {
        for (var a = n - 1, s = e.length; ++a < s;)
            if (r(e[a], t)) return a;
        return -1
    }
    var Ny = Array.prototype,
        ou = Ny.splice;

    function ba(e, t, n, r) {
        var a = r ? Iy : St,
            s = -1,
            o = t.length,
            u = e;
        for (e === t && (t = ie(t)), n && (u = q(e, we(n))); ++s < o;)
            for (var l = 0, f = t[s], d = n ? n(f) : f;
                (l = a(u, d, l, r)) > -1;) u !== e && ou.call(u, l, 1), ou.call(e, l, 1);
        return e
    }

    function _a(e, t) {
        return e && e.length && t && t.length ? ba(e, t) : e
    }
    var Ey = A(_a);
    const cu = Ey;

    function uu(e, t, n) {
        return e && e.length && t && t.length ? ba(e, t, N(n)) : e
    }

    function lu(e, t, n) {
        return e && e.length && t && t.length ? ba(e, t, void 0, n) : e
    }
    var Cy = Array.prototype,
        Ay = Cy.splice;

    function du(e, t) {
        for (var n = e ? t.length : 0, r = n - 1; n--;) {
            var a = t[n];
            if (n == r || a !== s) {
                var s = a;
                Lt(a) ? Ay.call(e, a, 1) : ua(e, a)
            }
        }
        return e
    }
    var Ry = Me(function(e, t) {
        var n = e == null ? 0 : e.length,
            r = Ar(e, t);
        return du(e, q(t, function(a) {
            return Lt(a, n) ? +a : a
        }).sort(YP)), r
    });
    const fu = Ry;
    var ky = Math.floor,
        Py = Math.random;

    function xa(e, t) {
        return e + ky(Py() * (t - e + 1))
    }
    var Ty = parseFloat,
        Dy = Math.min,
        Ly = Math.random;

    function pu(e, t, n) {
        if (n && typeof n != "boolean" && ue(e, t, n) && (t = n = void 0), n === void 0 && (typeof t == "boolean" ? (n = t, t = void 0) : typeof e == "boolean" && (n = e, e = void 0)), e === void 0 && t === void 0 ? (e = 0, t = 1) : (e = Ve(e), t === void 0 ? (t = e, e = 0) : t = Ve(t)), e > t) {
            var r = e;
            e = t, t = r
        }
        if (n || e % 1 || t % 1) {
            var a = Ly();
            return Dy(e + a * (t - e + Ty("1e-" + ((a + "").length - 1))), t)
        }
        return xa(e, t)
    }
    var Oy = Math.ceil,
        By = Math.max;

    function My(e, t, n, r) {
        for (var a = -1, s = By(Oy((t - e) / (n || 1)), 0), o = Array(s); s--;) o[r ? s : ++a] = e, e += n;
        return o
    }

    function mu(e) {
        return function(t, n, r) {
            return r && typeof r != "number" && ue(t, n, r) && (n = r = void 0), t = Ve(t), n === void 0 ? (n = t, t = 0) : n = Ve(n), r = r === void 0 ? t < n ? 1 : -1 : Ve(r), My(t, n, r, e)
        }
    }
    var Wy = mu();
    const hu = Wy;
    var Fy = mu(!0);
    const gu = Fy;
    var Uy = 256,
        zy = Me(function(e, t) {
            return Oe(e, Uy, void 0, void 0, void 0, t)
        });
    const vu = zy;

    function yu(e, t, n, r, a) {
        return a(e, function(s, o, u) {
            n = r ? (r = !1, s) : t(n, s, o, u)
        }), n
    }

    function bu(e, t, n) {
        var r = T(e) ? up : yu,
            a = arguments.length < 3;
        return r(e, N(t), n, a, _t)
    }

    function Vy(e, t, n, r) {
        var a = e == null ? 0 : e.length;
        for (r && a && (n = e[--a]); a--;) n = t(n, e[a], a, e);
        return n
    }

    function _u(e, t, n) {
        var r = T(e) ? Vy : yu,
            a = arguments.length < 3;
        return r(e, N(t), n, a, Hi)
    }

    function xu(e, t) {
        var n = T(e) ? mt : eo;
        return n(e, At(N(t)))
    }

    function wu(e, t) {
        var n = [];
        if (!(e && e.length)) return n;
        var r = -1,
            a = [],
            s = e.length;
        for (t = N(t); ++r < s;) {
            var o = e[r];
            t(o, r, e) && (n.push(o), a.push(r))
        }
        return du(e, a), n
    }

    function ju(e, t, n) {
        return (n ? ue(e, t, n) : t === void 0) ? t = 1 : t = C(t), fa(F(e), t)
    }

    function Su() {
        var e = arguments,
            t = F(e[0]);
        return e.length < 3 ? t : t.replace(e[1], e[2])
    }
    var Gy = "Expected a function";

    function Iu(e, t) {
        if (typeof e != "function") throw new TypeError(Gy);
        return t = t === void 0 ? t : C(t), A(e, t)
    }

    function Nu(e, t, n) {
        t = Ft(t, e);
        var r = -1,
            a = t.length;
        for (a || (a = 1, e = void 0); ++r < a;) {
            var s = e == null ? void 0 : e[Ot(t[r])];
            s === void 0 && (r = a, s = n), e = at(s) ? s.call(e) : s
        }
        return e
    }
    var Hy = Array.prototype,
        Ky = Hy.reverse;

    function Kn(e) {
        return e == null ? e : Ky.call(e)
    }
    var $y = Dr("round");
    const Eu = $y;

    function Cu(e) {
        var t = e.length;
        return t ? e[xa(0, t - 1)] : void 0
    }

    function qy(e) {
        return Cu(lt(e))
    }

    function Au(e) {
        var t = T(e) ? Cu : qy;
        return t(e)
    }

    function $n(e, t) {
        var n = -1,
            r = e.length,
            a = r - 1;
        for (t = t === void 0 ? r : t; ++n < t;) {
            var s = xa(n, a),
                o = e[s];
            e[s] = e[n], e[n] = o
        }
        return e.length = t, e
    }

    function Yy(e, t) {
        return $n(ie(e), ut(t, 0, e.length))
    }

    function Zy(e, t) {
        var n = lt(e);
        return $n(n, ut(t, 0, n.length))
    }

    function Ru(e, t, n) {
        (n ? ue(e, t, n) : t === void 0) ? t = 1: t = C(t);
        var r = T(e) ? Yy : Zy;
        return r(e, t)
    }

    function ku(e, t, n) {
        return e == null ? e : en(e, t, n)
    }

    function Pu(e, t, n, r) {
        return r = typeof r == "function" ? r : void 0, e == null ? e : en(e, t, n, r)
    }

    function Xy(e) {
        return $n(ie(e))
    }

    function Jy(e) {
        return $n(lt(e))
    }

    function Tu(e) {
        var t = T(e) ? Xy : Jy;
        return t(e)
    }
    var Qy = "[object Map]",
        eb = "[object Set]";

    function Du(e) {
        if (e == null) return 0;
        if (xe(e)) return gn(e) ? Rt(e) : e.length;
        var t = rt(e);
        return t == Qy || t == eb ? e.size : af(e).length
    }

    function Lu(e, t, n) {
        var r = e == null ? 0 : e.length;
        return r ? (n && typeof n != "number" && ue(e, t, n) ? (t = 0, n = r) : (t = t == null ? 0 : C(t), n = n === void 0 ? r : C(n)), ke(e, t, n)) : []
    }
    var tb = vn(function(e, t, n) {
        return e + (n ? "_" : "") + t.toLowerCase()
    });
    const Ou = tb;

    function nb(e, t) {
        var n;
        return _t(e, function(r, a, s) {
            return n = t(r, a, s), !n
        }), !!n
    }

    function Bu(e, t, n) {
        var r = T(e) ? uf : nb;
        return n && ue(e, t, n) && (t = void 0), r(e, N(t))
    }
    var rb = A(function(e, t) {
        if (e == null) return [];
        var n = t.length;
        return n > 1 && ue(e, t[0], t[1]) ? t = [] : n > 2 && ue(t[0], t[1], t[2]) && (t = [t[0]]), ZP(e, ae(t, 1), [])
    });
    const Mu = rb;
    var ab = 4294967295,
        sb = ab >>> 1;

    function qn(e, t, n) {
        var r = 0,
            a = e == null ? r : e.length;
        if (typeof t == "number" && t === t && a <= sb) {
            for (; r < a;) {
                var s = r + a >>> 1,
                    o = e[s];
                o !== null && !Dt(o) && (n ? o <= t : o < t) ? r = s + 1 : a = s
            }
            return a
        }
        return df(e, t, ce, n)
    }

    function Wu(e, t) {
        return qn(e, t)
    }

    function Fu(e, t) {
        var n = e == null ? 0 : e.length;
        if (n) {
            var r = qn(e, t);
            if (r < n && ze(e[r], t)) return r
        }
        return -1
    }

    function Uu(e, t) {
        return qn(e, t, !0)
    }

    function zu(e, t, n) {
        return df(e, t, N(n), !0)
    }

    function Vu(e, t) {
        var n = e == null ? 0 : e.length;
        if (n) {
            var r = qn(e, t, !0) - 1;
            if (ze(e[r], t)) return r
        }
        return -1
    }

    function Gu(e, t) {
        for (var n = -1, r = e.length, a = 0, s = []; ++n < r;) {
            var o = e[n],
                u = t ? t(o) : o;
            if (!n || !ze(u, l)) {
                var l = u;
                s[a++] = o === 0 ? 0 : o
            }
        }
        return s
    }

    function Hu(e) {
        return e && e.length ? Gu(e) : []
    }

    function Ku(e, t) {
        return e && e.length ? Gu(e, N(t)) : []
    }
    var ib = 4294967295;

    function $u(e, t, n) {
        return n && typeof n != "number" && ue(e, t, n) && (t = n = void 0), n = n === void 0 ? ib : n >>> 0, n ? (e = F(e), e && (typeof t == "string" || t != null && !Vn(t)) && (t = _e(t), !t && yr(e)) ? bt(De(e), 0, n) : e.split(t, n)) : []
    }
    var ob = "Expected a function",
        cb = Math.max;

    function qu(e, t) {
        if (typeof e != "function") throw new TypeError(ob);
        return t = t == null ? 0 : cb(C(t), 0), A(function(n) {
            var r = n[t],
                a = bt(n, 0, t);
            return r && Bt(a, r), le(e, this, a)
        })
    }
    var ub = vn(function(e, t, n) {
        return e + (n ? " " : "") + ws(t)
    });
    const Yu = ub;

    function Zu(e, t, n) {
        return e = F(e), n = n == null ? 0 : ut(C(n), 0, e.length), t = _e(t), e.slice(n, n + t.length) == t
    }

    function Xu() {
        return {}
    }

    function Ju() {
        return ""
    }

    function Qu() {
        return !0
    }
    var lb = H(function(e, t) {
        return e - t
    }, 0);
    const el = lb;

    function tl(e) {
        return e && e.length ? aa(e, ce) : 0
    }

    function nl(e, t) {
        return e && e.length ? aa(e, N(t)) : 0
    }

    function rl(e) {
        var t = e == null ? 0 : e.length;
        return t ? ke(e, 1, t) : []
    }

    function al(e, t, n) {
        return e && e.length ? (t = n || t === void 0 ? 1 : C(t), ke(e, 0, t < 0 ? 0 : t)) : []
    }

    function sl(e, t, n) {
        var r = e == null ? 0 : e.length;
        return r ? (t = n || t === void 0 ? 1 : C(t), t = r - t, ke(e, t < 0 ? 0 : t, r)) : []
    }

    function il(e, t) {
        return e && e.length ? Ln(e, N(t), !1, !0) : []
    }

    function ol(e, t) {
        return e && e.length ? Ln(e, N(t)) : []
    }

    function cl(e, t) {
        return t(e), e
    }
    var ul = Object.prototype,
        db = ul.hasOwnProperty;

    function ll(e, t, n, r) {
        return e === void 0 || ze(e, ul[n]) && !db.call(r, n) ? t : e
    }
    var fb = {
        "\\": "\\",
        "'": "'",
        "\n": "n",
        "\r": "r",
        "\u2028": "u2028",
        "\u2029": "u2029"
    };

    function pb(e) {
        return "\\" + fb[e]
    }
    var mb = /<%=([\s\S]+?)%>/g;
    const dl = mb;
    var hb = /<%-([\s\S]+?)%>/g;
    const gb = hb;
    var vb = /<%([\s\S]+?)%>/g,
        yb = {
            escape: gb,
            evaluate: vb,
            interpolate: dl,
            variable: "",
            imports: {
                _: {
                    escape: $r
                }
            }
        };
    const Yn = yb;
    var bb = "Invalid `variable` option passed into `_.template`",
        _b = /\b__p \+= '';/g,
        xb = /\b(__p \+=) '' \+/g,
        wb = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
        jb = /[()=,{}\[\]\/\s]/,
        Sb = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
        Zn = /($^)/,
        Ib = /['\n\r\u2028\u2029\\]/g,
        Nb = Object.prototype,
        fl = Nb.hasOwnProperty;

    function pl(e, t, n) {
        var r = Yn.imports._.templateSettings || Yn;
        n && ue(e, t, n) && (t = void 0), e = F(e), t = Et({}, t, r, ll);
        var a = Et({}, t.imports, r.imports, ll),
            s = Q(a),
            o = Jr(a, s),
            u, l, f = 0,
            d = t.interpolate || Zn,
            m = "__p += '",
            h = RegExp((t.escape || Zn).source + "|" + d.source + "|" + (d === dl ? Sb : Zn).source + "|" + (t.evaluate || Zn).source + "|$", "g"),
            v = fl.call(t, "sourceURL") ? "//# sourceURL=" + (t.sourceURL + "").replace(/\s/g, " ") + `
` : "";
        e.replace(h, function(I, E, k, be, Qe, rr) {
            return k || (k = be), m += e.slice(f, rr).replace(Ib, pb), E && (u = !0, m += `' +
__e(` + E + `) +
'`), Qe && (l = !0, m += `';
` + Qe + `;
__p += '`), k && (m += `' +
((__t = (` + k + `)) == null ? '' : __t) +
'`), f = rr + I.length, I
        }), m += `';
`;
        var _ = fl.call(t, "variable") && t.variable;
        if (!_) m = `with (obj) {
` + m + `
}
`;
        else if (jb.test(_)) throw new Error(bb);
        m = (l ? m.replace(_b, "") : m).replace(xb, "$1").replace(wb, "$1;"), m = "function(" + (_ || "obj") + `) {
` + (_ ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (u ? ", __e = _.escape" : "") + (l ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + m + `return __p
}`;
        var w = Rr(function() {
            return Function(s, v + "return " + m).apply(void 0, o)
        });
        if (w.source = m, Rn(w)) throw w;
        return w
    }

    function kt(e, t) {
        return t(e)
    }
    var Eb = 9007199254740991,
        wa = 4294967295,
        Cb = Math.min;

    function ml(e, t) {
        if (e = C(e), e < 1 || e > Eb) return [];
        var n = wa,
            r = Cb(e, wa);
        t = Ee(t), e -= wa;
        for (var a = ff(r, t); ++n < e;) t(n);
        return a
    }

    function ja() {
        return this
    }

    function hl(e, t) {
        var n = e;
        return n instanceof R && (n = n.value()), up(t, function(r, a) {
            return a.func.apply(a.thisArg, Bt([r], a.args))
        }, n)
    }

    function dt() {
        return hl(this.__wrapped__, this.__actions__)
    }

    function gl(e) {
        return F(e).toLowerCase()
    }

    function vl(e) {
        return T(e) ? q(e, Ot) : Dt(e) ? [e] : ie(HI(F(e)))
    }
    var yl = 9007199254740991;

    function bl(e) {
        return e ? ut(C(e), -yl, yl) : e === 0 ? e : 0
    }

    function _l(e) {
        return F(e).toUpperCase()
    }

    function xl(e, t, n) {
        var r = T(e),
            a = r || Wt(e) || un(e);
        if (t = N(t), n == null) {
            var s = e && e.constructor;
            a ? n = r ? new s : [] : J(e) ? n = at(s) ? wt(An(e)) : {} : n = {}
        }
        return (a ? me : qe)(e, function(o, u, l) {
            return t(n, o, u, l)
        }), n
    }

    function wl(e, t) {
        for (var n = e.length; n-- && St(t, e[n], 0) > -1;);
        return n
    }

    function jl(e, t) {
        for (var n = -1, r = e.length; ++n < r && St(t, e[n], 0) > -1;);
        return n
    }

    function Sl(e, t, n) {
        if (e = F(e), e && (n || t === void 0)) return KI(e);
        if (!e || !(t = _e(t))) return e;
        var r = De(e),
            a = De(t),
            s = jl(r, a),
            o = wl(r, a) + 1;
        return bt(r, s, o).join("")
    }

    function Il(e, t, n) {
        if (e = F(e), e && (n || t === void 0)) return e.slice(0, $I(e) + 1);
        if (!e || !(t = _e(t))) return e;
        var r = De(e),
            a = wl(r, De(t)) + 1;
        return bt(r, 0, a).join("")
    }
    var Ab = /^\s+/;

    function Nl(e, t, n) {
        if (e = F(e), e && (n || t === void 0)) return e.replace(Ab, "");
        if (!e || !(t = _e(t))) return e;
        var r = De(e),
            a = jl(r, De(t));
        return bt(r, a).join("")
    }
    var Rb = 30,
        kb = "...",
        Pb = /\w*$/;

    function El(e, t) {
        var n = Rb,
            r = kb;
        if (J(t)) {
            var a = "separator" in t ? t.separator : a;
            n = "length" in t ? C(t.length) : n, r = "omission" in t ? _e(t.omission) : r
        }
        e = F(e);
        var s = e.length;
        if (yr(e)) {
            var o = De(e);
            s = o.length
        }
        if (n >= s) return e;
        var u = n - Rt(r);
        if (u < 1) return r;
        var l = o ? bt(o, 0, u).join("") : e.slice(0, u);
        if (a === void 0) return l + r;
        if (o && (u += l.length - u), Vn(a)) {
            if (e.slice(u).search(a)) {
                var f, d = l;
                for (a.global || (a = RegExp(a.source, F(Pb.exec(a)) + "g")), a.lastIndex = 0; f = a.exec(d);) var m = f.index;
                l = l.slice(0, m === void 0 ? u : m)
            }
        } else if (e.indexOf(_e(a), u) != u) {
            var h = l.lastIndexOf(a);
            h > -1 && (l = l.slice(0, h))
        }
        return l + r
    }

    function Cl(e) {
        return Cr(e, 1)
    }
    var Tb = 1 / 0,
        Db = ns && 1 / es(new ns([, -0]))[1] == Tb ? function(e) {
            return new ns(e)
        } : xn;
    const Lb = Db;
    var Ob = 200;

    function Ze(e, t, n) {
        var r = -1,
            a = Nn,
            s = e.length,
            o = !0,
            u = [],
            l = u;
        if (n) o = !1, a = Hr;
        else if (s >= Ob) {
            var f = t ? null : Lb(e);
            if (f) return es(f);
            o = !1, a = ir, l = new Ja
        } else l = t ? [] : u;
        e: for (; ++r < s;) {
            var d = e[r],
                m = t ? t(d) : d;
            if (d = n || d !== 0 ? d : 0, o && m === m) {
                for (var h = l.length; h--;)
                    if (l[h] === m) continue e;
                t && l.push(m), u.push(d)
            } else a(l, m, n) || (l !== u && l.push(m), u.push(d))
        }
        return u
    }
    var Bb = A(function(e) {
        return Ze(ae(e, 1, K, !0))
    });
    const Al = Bb;
    var Mb = A(function(e) {
        var t = oe(e);
        return K(t) && (t = void 0), Ze(ae(e, 1, K, !0), N(t))
    });
    const Rl = Mb;
    var Wb = A(function(e) {
        var t = oe(e);
        return t = typeof t == "function" ? t : void 0, Ze(ae(e, 1, K, !0), void 0, t)
    });
    const kl = Wb;

    function Pl(e) {
        return e && e.length ? Ze(e) : []
    }

    function Tl(e, t) {
        return e && e.length ? Ze(e, N(t)) : []
    }

    function Dl(e, t) {
        return t = typeof t == "function" ? t : void 0, e && e.length ? Ze(e, void 0, t) : []
    }
    var Fb = 0;

    function Ll(e) {
        var t = ++Fb;
        return F(e) + t
    }

    function Ol(e, t) {
        return e == null ? !0 : ua(e, t)
    }
    var Ub = Math.max;

    function Xn(e) {
        if (!(e && e.length)) return [];
        var t = 0;
        return e = mt(e, function(n) {
            if (K(n)) return t = Ub(n.length, t), !0
        }), ff(t, function(n) {
            return q(e, lf(n))
        })
    }

    function Sa(e, t) {
        if (!(e && e.length)) return [];
        var n = Xn(e);
        return t == null ? n : q(n, function(r) {
            return le(t, void 0, r)
        })
    }

    function Bl(e, t, n, r) {
        return en(e, t, n(or(e, t)), r)
    }

    function Ml(e, t, n) {
        return e == null ? e : Bl(e, t, Ee(n))
    }

    function Wl(e, t, n, r) {
        return r = typeof r == "function" ? r : void 0, e == null ? e : Bl(e, t, Ee(n), r)
    }
    var zb = vn(function(e, t, n) {
        return e + (n ? " " : "") + t.toUpperCase()
    });
    const Fl = zb;

    function Ul(e) {
        return e == null ? [] : Jr(e, ne(e))
    }
    var Vb = A(function(e, t) {
        return K(e) ? Xt(e, t) : []
    });
    const zl = Vb;

    function Vl(e, t) {
        return ga(Ee(t), e)
    }
    var Gb = Me(function(e) {
        var t = e.length,
            n = t ? e[0] : 0,
            r = this.__wrapped__,
            a = function(s) {
                return Ar(s, e)
            };
        return t > 1 || this.__actions__.length || !(r instanceof R) || !Lt(n) ? this.thru(a) : (r = r.slice(n, +n + (t ? 1 : 0)), r.__actions__.push({
            func: kt,
            args: [a],
            thisArg: void 0
        }), new pe(r, this.__chain__).thru(function(s) {
            return t && !s.length && s.push(void 0), s
        }))
    });
    const Gl = Gb;

    function Hl() {
        return Lr(this)
    }

    function Kl() {
        var e = this.__wrapped__;
        if (e instanceof R) {
            var t = e;
            return this.__actions__.length && (t = new R(this)), t = t.reverse(), t.__actions__.push({
                func: kt,
                args: [Kn],
                thisArg: void 0
            }), new pe(t, this.__chain__)
        }
        return this.thru(Kn)
    }

    function Ia(e, t, n) {
        var r = e.length;
        if (r < 2) return r ? Ze(e[0]) : [];
        for (var a = -1, s = Array(r); ++a < r;)
            for (var o = e[a], u = -1; ++u < r;) u != a && (s[a] = Xt(s[a] || o, e[u], t, n));
        return Ze(ae(s, 1), t, n)
    }
    var Hb = A(function(e) {
        return Ia(mt(e, K))
    });
    const $l = Hb;
    var Kb = A(function(e) {
        var t = oe(e);
        return K(t) && (t = void 0), Ia(mt(e, K), N(t))
    });
    const ql = Kb;
    var $b = A(function(e) {
        var t = oe(e);
        return t = typeof t == "function" ? t : void 0, Ia(mt(e, K), void 0, t)
    });
    const Yl = $b;
    var qb = A(Xn);
    const Zl = qb;

    function Xl(e, t, n) {
        for (var r = -1, a = e.length, s = t.length, o = {}; ++r < a;) {
            var u = r < s ? t[r] : void 0;
            n(o, e[r], u)
        }
        return o
    }

    function Jl(e, t) {
        return Xl(e || [], t || [], Zt)
    }

    function Ql(e, t) {
        return Xl(e || [], t || [], en)
    }
    var Yb = A(function(e) {
        var t = e.length,
            n = t > 1 ? e[t - 1] : void 0;
        return n = typeof n == "function" ? (e.pop(), n) : void 0, Sa(e, n)
    });
    const ed = Yb,
        b = {
            chunk: pf,
            compact: mp,
            concat: xi,
            difference: Oi,
            differenceBy: Bi,
            differenceWith: Mi,
            drop: Fi,
            dropRight: Ui,
            dropRightWhile: zi,
            dropWhile: Vi,
            fill: Qi,
            findIndex: Yr,
            findLastIndex: Zr,
            first: Fn,
            flatten: xs,
            flattenDeep: fo,
            flattenDepth: po,
            fromPairs: jo,
            head: Fn,
            indexOf: Po,
            initial: To,
            intersection: Do,
            intersectionBy: Lo,
            intersectionWith: Oo,
            join: pc,
            last: oe,
            lastIndexOf: gc,
            nth: Bc,
            pull: cu,
            pullAll: _a,
            pullAllBy: uu,
            pullAllWith: lu,
            pullAt: fu,
            remove: wu,
            reverse: Kn,
            slice: Lu,
            sortedIndex: Wu,
            sortedIndexBy: mf,
            sortedIndexOf: Fu,
            sortedLastIndex: Uu,
            sortedLastIndexBy: zu,
            sortedLastIndexOf: Vu,
            sortedUniq: Hu,
            sortedUniqBy: Ku,
            tail: rl,
            take: al,
            takeRight: sl,
            takeRightWhile: il,
            takeWhile: ol,
            union: Al,
            unionBy: Rl,
            unionWith: kl,
            uniq: Pl,
            uniqBy: Tl,
            uniqWith: Dl,
            unzip: Xn,
            unzipWith: Sa,
            without: zl,
            xor: $l,
            xorBy: ql,
            xorWith: Yl,
            zip: Zl,
            zipObject: Jl,
            zipObjectDeep: Ql,
            zipWith: ed
        },
        O = {
            countBy: Ni,
            each: On,
            eachRight: Bn,
            every: Ji,
            filter: to,
            find: ro,
            findLast: io,
            flatMap: co,
            flatMapDeep: uo,
            flatMapDepth: lo,
            forEach: On,
            forEachRight: Bn,
            groupBy: No,
            includes: ko,
            invokeMap: Vo,
            keyBy: hc,
            map: Jt,
            orderBy: gp,
            partition: au,
            reduce: bu,
            reduceRight: _u,
            reject: xu,
            sample: Au,
            sampleSize: Ru,
            shuffle: Tu,
            size: Du,
            some: Bu,
            sortBy: Mu
        },
        Zb = {
            now: hf
        },
        $ = {
            after: Is,
            ary: Cr,
            before: gf,
            bind: Pr,
            bindKey: Js,
            curry: Pn,
            curryRight: Tn,
            debounce: vf,
            defer: Di,
            delay: Li,
            flip: mo,
            memoize: fe,
            negate: At,
            once: Ut,
            overArgs: Vc,
            partial: ga,
            partialRight: ru,
            rearg: vu,
            rest: Iu,
            spread: qu,
            throttle: yf,
            unary: Cl,
            wrap: Vl
        },
        x = {
            castArray: Qs,
            clone: yi,
            cloneDeep: br,
            cloneDeepWith: bi,
            cloneWith: _i,
            conformsTo: Ii,
            eq: ze,
            gt: Eo,
            gte: Co,
            isArguments: ln,
            isArray: T,
            isArrayBuffer: Ho,
            isArrayLike: xe,
            isArrayLikeObject: K,
            isBoolean: Ko,
            isBuffer: Wt,
            isDate: qo,
            isElement: Yo,
            isEmpty: Zo,
            isEqual: Xo,
            isEqualWith: Jo,
            isError: Rn,
            isFinite: Qo,
            isFunction: at,
            isInteger: ta,
            isLength: bf,
            isMap: Mr,
            isMatch: ec,
            isMatchWith: tc,
            isNaN: nc,
            isNative: rc,
            isNil: ac,
            isNull: sc,
            isNumber: na,
            isObject: J,
            isObjectLike: ee,
            isPlainObject: Ct,
            isRegExp: Vn,
            isSafeInteger: cc,
            isSet: Wr,
            isString: gn,
            isSymbol: Dt,
            isTypedArray: un,
            isUndefined: uc,
            isWeakMap: lc,
            isWeakSet: dc,
            lt: bc,
            lte: _c,
            toArray: oa,
            toFinite: Ve,
            toInteger: C,
            toLength: qr,
            toNumber: Ae,
            toPlainObject: Vr,
            toSafeInteger: bl,
            toString: F
        },
        re = {
            add: Ss,
            ceil: ei,
            divide: Wi,
            floor: ho,
            max: Ic,
            maxBy: Nc,
            mean: Cc,
            meanBy: Ac,
            min: Tc,
            minBy: Dc,
            multiply: Lc,
            round: Eu,
            subtract: el,
            sum: tl,
            sumBy: nl
        },
        Na = {
            clamp: ti,
            inRange: Ro,
            random: pu
        },
        j = {
            assign: $s,
            assignIn: Cn,
            assignInWith: Et,
            assignWith: qs,
            at: Ys,
            create: Ei,
            defaults: Ri,
            defaultsDeep: Pi,
            entries: Mn,
            entriesIn: Wn,
            extend: Cn,
            extendWith: Et,
            findKey: so,
            findLastKey: oo,
            forIn: bo,
            forInRight: _o,
            forOwn: xo,
            forOwnRight: wo,
            functions: So,
            functionsIn: Io,
            get: Za,
            has: Ao,
            hasIn: ts,
            invert: Mo,
            invertBy: Fo,
            invoke: zo,
            keys: Q,
            keysIn: ne,
            mapKeys: xc,
            mapValues: wc,
            merge: Rc,
            mergeWith: Gr,
            omit: Wc,
            omitBy: Uc,
            pick: su,
            pickBy: la,
            result: Nu,
            set: ku,
            setWith: Pu,
            toPairs: Mn,
            toPairsIn: Wn,
            transform: xl,
            unset: Ol,
            update: Ml,
            updateWith: Wl,
            values: lt,
            valuesIn: Ul
        },
        Ce = {
            at: Gl,
            chain: Lr,
            commit: Fr,
            lodash: c,
            next: ca,
            plant: ya,
            reverse: Kl,
            tap: cl,
            thru: kt,
            toIterator: ja,
            toJSON: dt,
            value: dt,
            valueOf: dt,
            wrapperChain: Hl
        },
        P = {
            camelCase: lp,
            capitalize: dp,
            deburr: fp,
            endsWith: Ki,
            escape: $r,
            escapeRegExp: Zi,
            kebabCase: mc,
            lowerCase: vc,
            lowerFirst: yc,
            pad: Qc,
            padEnd: eu,
            padStart: tu,
            parseInt: nu,
            repeat: ju,
            replace: Su,
            snakeCase: Ou,
            split: $u,
            startCase: Yu,
            startsWith: Zu,
            template: pl,
            templateSettings: Yn,
            toLower: gl,
            toUpper: _l,
            trim: Sl,
            trimEnd: Il,
            trimStart: Nl,
            truncate: El,
            unescape: rs,
            upperCase: Fl,
            upperFirst: ws,
            words: pp
        },
        D = {
            attempt: Rr,
            bindAll: Xs,
            cond: wi,
            conforms: Si,
            constant: jn,
            defaultTo: Ci,
            flow: vo,
            flowRight: yo,
            identity: ce,
            iteratee: fc,
            matches: jc,
            matchesProperty: Sc,
            method: kc,
            methodOf: Pc,
            mixin: sa,
            noop: xn,
            nthArg: Mc,
            over: zc,
            overEvery: Gc,
            overSome: Hc,
            property: _f,
            propertyOf: iu,
            range: hu,
            rangeRight: gu,
            stubArray: Xa,
            stubFalse: Qa,
            stubObject: Xu,
            stubString: Ju,
            stubTrue: Qu,
            times: ml,
            toPath: vl,
            uniqueId: Ll
        };

    function Xb() {
        var e = new R(this.__wrapped__);
        return e.__actions__ = ie(this.__actions__), e.__dir__ = this.__dir__, e.__filtered__ = this.__filtered__, e.__iteratees__ = ie(this.__iteratees__), e.__takeCount__ = this.__takeCount__, e.__views__ = ie(this.__views__), e
    }

    function Jb() {
        if (this.__filtered__) {
            var e = new R(this);
            e.__dir__ = -1, e.__filtered__ = !0
        } else e = this.clone(), e.__dir__ *= -1;
        return e
    }
    var Qb = Math.max,
        e_ = Math.min;

    function t_(e, t, n) {
        for (var r = -1, a = n.length; ++r < a;) {
            var s = n[r],
                o = s.size;
            switch (s.type) {
                case "drop":
                    e += o;
                    break;
                case "dropRight":
                    t -= o;
                    break;
                case "take":
                    t = e_(t, e + o);
                    break;
                case "takeRight":
                    e = Qb(e, t - o);
                    break
            }
        }
        return {
            start: e,
            end: t
        }
    }
    var n_ = 1,
        r_ = 2,
        a_ = Math.min;

    function s_() {
        var e = this.__wrapped__.value(),
            t = this.__dir__,
            n = T(e),
            r = t < 0,
            a = n ? e.length : 0,
            s = t_(0, a, this.__views__),
            o = s.start,
            u = s.end,
            l = u - o,
            f = r ? u : o - 1,
            d = this.__iteratees__,
            m = d.length,
            h = 0,
            v = a_(l, this.__takeCount__);
        if (!n || !r && a == l && v == l) return hl(e, this.__actions__);
        var _ = [];
        e: for (; l-- && h < v;) {
            f += t;
            for (var w = -1, I = e[f]; ++w < m;) {
                var E = d[w],
                    k = E.iteratee,
                    be = E.type,
                    Qe = k(I);
                if (be == r_) I = Qe;
                else if (!Qe) {
                    if (be == n_) continue e;
                    break e
                }
            }
            _[h++] = I
        }
        return _
    }
    var i_ = "4.17.21",
        o_ = 2,
        c_ = 1,
        u_ = 3,
        td = 4294967295,
        l_ = Array.prototype,
        d_ = Object.prototype,
        nd = d_.hasOwnProperty,
        rd = Mt ? Mt.iterator : void 0,
        f_ = Math.max,
        ad = Math.min,
        Ea = function(e) {
            return function(t, n, r) {
                if (r == null) {
                    var a = J(n),
                        s = a && Q(n),
                        o = s && s.length && Un(n, s);
                    (o ? o.length : a) || (r = n, n = t, t = this)
                }
                return e(t, n, r)
            }
        }(sa);
    c.after = $.after, c.ary = $.ary, c.assign = j.assign, c.assignIn = j.assignIn, c.assignInWith = j.assignInWith, c.assignWith = j.assignWith, c.at = j.at, c.before = $.before, c.bind = $.bind, c.bindAll = D.bindAll, c.bindKey = $.bindKey, c.castArray = x.castArray, c.chain = Ce.chain, c.chunk = b.chunk, c.compact = b.compact, c.concat = b.concat, c.cond = D.cond, c.conforms = D.conforms, c.constant = D.constant, c.countBy = O.countBy, c.create = j.create, c.curry = $.curry, c.curryRight = $.curryRight, c.debounce = $.debounce, c.defaults = j.defaults, c.defaultsDeep = j.defaultsDeep, c.defer = $.defer, c.delay = $.delay, c.difference = b.difference, c.differenceBy = b.differenceBy, c.differenceWith = b.differenceWith, c.drop = b.drop, c.dropRight = b.dropRight, c.dropRightWhile = b.dropRightWhile, c.dropWhile = b.dropWhile, c.fill = b.fill, c.filter = O.filter, c.flatMap = O.flatMap, c.flatMapDeep = O.flatMapDeep, c.flatMapDepth = O.flatMapDepth, c.flatten = b.flatten, c.flattenDeep = b.flattenDeep, c.flattenDepth = b.flattenDepth, c.flip = $.flip, c.flow = D.flow, c.flowRight = D.flowRight, c.fromPairs = b.fromPairs, c.functions = j.functions, c.functionsIn = j.functionsIn, c.groupBy = O.groupBy, c.initial = b.initial, c.intersection = b.intersection, c.intersectionBy = b.intersectionBy, c.intersectionWith = b.intersectionWith, c.invert = j.invert, c.invertBy = j.invertBy, c.invokeMap = O.invokeMap, c.iteratee = D.iteratee, c.keyBy = O.keyBy, c.keys = Q, c.keysIn = j.keysIn, c.map = O.map, c.mapKeys = j.mapKeys, c.mapValues = j.mapValues, c.matches = D.matches, c.matchesProperty = D.matchesProperty, c.memoize = $.memoize, c.merge = j.merge, c.mergeWith = j.mergeWith, c.method = D.method, c.methodOf = D.methodOf, c.mixin = Ea, c.negate = At, c.nthArg = D.nthArg, c.omit = j.omit, c.omitBy = j.omitBy, c.once = $.once, c.orderBy = O.orderBy, c.over = D.over, c.overArgs = $.overArgs, c.overEvery = D.overEvery, c.overSome = D.overSome, c.partial = $.partial, c.partialRight = $.partialRight, c.partition = O.partition, c.pick = j.pick, c.pickBy = j.pickBy, c.property = D.property, c.propertyOf = D.propertyOf, c.pull = b.pull, c.pullAll = b.pullAll, c.pullAllBy = b.pullAllBy, c.pullAllWith = b.pullAllWith, c.pullAt = b.pullAt, c.range = D.range, c.rangeRight = D.rangeRight, c.rearg = $.rearg, c.reject = O.reject, c.remove = b.remove, c.rest = $.rest, c.reverse = b.reverse, c.sampleSize = O.sampleSize, c.set = j.set, c.setWith = j.setWith, c.shuffle = O.shuffle, c.slice = b.slice, c.sortBy = O.sortBy, c.sortedUniq = b.sortedUniq, c.sortedUniqBy = b.sortedUniqBy, c.split = P.split, c.spread = $.spread, c.tail = b.tail, c.take = b.take, c.takeRight = b.takeRight, c.takeRightWhile = b.takeRightWhile, c.takeWhile = b.takeWhile, c.tap = Ce.tap, c.throttle = $.throttle, c.thru = kt, c.toArray = x.toArray, c.toPairs = j.toPairs, c.toPairsIn = j.toPairsIn, c.toPath = D.toPath, c.toPlainObject = x.toPlainObject, c.transform = j.transform, c.unary = $.unary, c.union = b.union, c.unionBy = b.unionBy, c.unionWith = b.unionWith, c.uniq = b.uniq, c.uniqBy = b.uniqBy, c.uniqWith = b.uniqWith, c.unset = j.unset, c.unzip = b.unzip, c.unzipWith = b.unzipWith, c.update = j.update, c.updateWith = j.updateWith, c.values = j.values, c.valuesIn = j.valuesIn, c.without = b.without, c.words = P.words, c.wrap = $.wrap, c.xor = b.xor, c.xorBy = b.xorBy, c.xorWith = b.xorWith, c.zip = b.zip, c.zipObject = b.zipObject, c.zipObjectDeep = b.zipObjectDeep, c.zipWith = b.zipWith, c.entries = j.toPairs, c.entriesIn = j.toPairsIn, c.extend = j.assignIn, c.extendWith = j.assignInWith, Ea(c, c), c.add = re.add, c.attempt = D.attempt, c.camelCase = P.camelCase, c.capitalize = P.capitalize, c.ceil = re.ceil, c.clamp = Na.clamp, c.clone = x.clone, c.cloneDeep = x.cloneDeep, c.cloneDeepWith = x.cloneDeepWith, c.cloneWith = x.cloneWith, c.conformsTo = x.conformsTo, c.deburr = P.deburr, c.defaultTo = D.defaultTo, c.divide = re.divide, c.endsWith = P.endsWith, c.eq = x.eq, c.escape = P.escape, c.escapeRegExp = P.escapeRegExp, c.every = O.every, c.find = O.find, c.findIndex = b.findIndex, c.findKey = j.findKey, c.findLast = O.findLast, c.findLastIndex = b.findLastIndex, c.findLastKey = j.findLastKey, c.floor = re.floor, c.forEach = O.forEach, c.forEachRight = O.forEachRight, c.forIn = j.forIn, c.forInRight = j.forInRight, c.forOwn = j.forOwn, c.forOwnRight = j.forOwnRight, c.get = j.get, c.gt = x.gt, c.gte = x.gte, c.has = j.has, c.hasIn = j.hasIn, c.head = b.head, c.identity = ce, c.includes = O.includes, c.indexOf = b.indexOf, c.inRange = Na.inRange, c.invoke = j.invoke, c.isArguments = x.isArguments, c.isArray = T, c.isArrayBuffer = x.isArrayBuffer, c.isArrayLike = x.isArrayLike, c.isArrayLikeObject = x.isArrayLikeObject, c.isBoolean = x.isBoolean, c.isBuffer = x.isBuffer, c.isDate = x.isDate, c.isElement = x.isElement, c.isEmpty = x.isEmpty, c.isEqual = x.isEqual, c.isEqualWith = x.isEqualWith, c.isError = x.isError, c.isFinite = x.isFinite, c.isFunction = x.isFunction, c.isInteger = x.isInteger, c.isLength = x.isLength, c.isMap = x.isMap, c.isMatch = x.isMatch, c.isMatchWith = x.isMatchWith, c.isNaN = x.isNaN, c.isNative = x.isNative, c.isNil = x.isNil, c.isNull = x.isNull, c.isNumber = x.isNumber, c.isObject = J, c.isObjectLike = x.isObjectLike, c.isPlainObject = x.isPlainObject, c.isRegExp = x.isRegExp, c.isSafeInteger = x.isSafeInteger, c.isSet = x.isSet, c.isString = x.isString, c.isSymbol = x.isSymbol, c.isTypedArray = x.isTypedArray, c.isUndefined = x.isUndefined, c.isWeakMap = x.isWeakMap, c.isWeakSet = x.isWeakSet, c.join = b.join, c.kebabCase = P.kebabCase, c.last = oe, c.lastIndexOf = b.lastIndexOf, c.lowerCase = P.lowerCase, c.lowerFirst = P.lowerFirst, c.lt = x.lt, c.lte = x.lte, c.max = re.max, c.maxBy = re.maxBy, c.mean = re.mean, c.meanBy = re.meanBy, c.min = re.min, c.minBy = re.minBy, c.stubArray = D.stubArray, c.stubFalse = D.stubFalse, c.stubObject = D.stubObject, c.stubString = D.stubString, c.stubTrue = D.stubTrue, c.multiply = re.multiply, c.nth = b.nth, c.noop = D.noop, c.now = Zb.now, c.pad = P.pad, c.padEnd = P.padEnd, c.padStart = P.padStart, c.parseInt = P.parseInt, c.random = Na.random, c.reduce = O.reduce, c.reduceRight = O.reduceRight, c.repeat = P.repeat, c.replace = P.replace, c.result = j.result, c.round = re.round, c.sample = O.sample, c.size = O.size, c.snakeCase = P.snakeCase, c.some = O.some, c.sortedIndex = b.sortedIndex, c.sortedIndexBy = b.sortedIndexBy, c.sortedIndexOf = b.sortedIndexOf, c.sortedLastIndex = b.sortedLastIndex, c.sortedLastIndexBy = b.sortedLastIndexBy, c.sortedLastIndexOf = b.sortedLastIndexOf, c.startCase = P.startCase, c.startsWith = P.startsWith, c.subtract = re.subtract, c.sum = re.sum, c.sumBy = re.sumBy, c.template = P.template, c.times = D.times, c.toFinite = x.toFinite, c.toInteger = C, c.toLength = x.toLength, c.toLower = P.toLower, c.toNumber = x.toNumber, c.toSafeInteger = x.toSafeInteger, c.toString = x.toString, c.toUpper = P.toUpper, c.trim = P.trim, c.trimEnd = P.trimEnd, c.trimStart = P.trimStart, c.truncate = P.truncate, c.unescape = P.unescape, c.uniqueId = D.uniqueId, c.upperCase = P.upperCase, c.upperFirst = P.upperFirst, c.each = O.forEach, c.eachRight = O.forEachRight, c.first = b.head, Ea(c, function() {
        var e = {};
        return qe(c, function(t, n) {
            nd.call(c.prototype, n) || (e[n] = t)
        }), e
    }(), {
        chain: !1
    }), c.VERSION = i_, (c.templateSettings = P.templateSettings).imports._ = c, me(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(e) {
        c[e].placeholder = c
    }), me(["drop", "take"], function(e, t) {
        R.prototype[e] = function(n) {
            n = n === void 0 ? 1 : f_(C(n), 0);
            var r = this.__filtered__ && !t ? new R(this) : this.clone();
            return r.__filtered__ ? r.__takeCount__ = ad(n, r.__takeCount__) : r.__views__.push({
                size: ad(n, td),
                type: e + (r.__dir__ < 0 ? "Right" : "")
            }), r
        }, R.prototype[e + "Right"] = function(n) {
            return this.reverse()[e](n).reverse()
        }
    }), me(["filter", "map", "takeWhile"], function(e, t) {
        var n = t + 1,
            r = n == c_ || n == u_;
        R.prototype[e] = function(a) {
            var s = this.clone();
            return s.__iteratees__.push({
                iteratee: N(a),
                type: n
            }), s.__filtered__ = s.__filtered__ || r, s
        }
    }), me(["head", "last"], function(e, t) {
        var n = "take" + (t ? "Right" : "");
        R.prototype[e] = function() {
            return this[n](1).value()[0]
        }
    }), me(["initial", "tail"], function(e, t) {
        var n = "drop" + (t ? "" : "Right");
        R.prototype[e] = function() {
            return this.__filtered__ ? new R(this) : this[n](1)
        }
    }), R.prototype.compact = function() {
        return this.filter(ce)
    }, R.prototype.find = function(e) {
        return this.filter(e).head()
    }, R.prototype.findLast = function(e) {
        return this.reverse().find(e)
    }, R.prototype.invokeMap = A(function(e, t) {
        return typeof e == "function" ? new R(this) : this.map(function(n) {
            return Qt(n, e, t)
        })
    }), R.prototype.reject = function(e) {
        return this.filter(At(N(e)))
    }, R.prototype.slice = function(e, t) {
        e = C(e);
        var n = this;
        return n.__filtered__ && (e > 0 || t < 0) ? new R(n) : (e < 0 ? n = n.takeRight(-e) : e && (n = n.drop(e)), t !== void 0 && (t = C(t), n = t < 0 ? n.dropRight(-t) : n.take(t - e)), n)
    }, R.prototype.takeRightWhile = function(e) {
        return this.reverse().takeWhile(e).reverse()
    }, R.prototype.toArray = function() {
        return this.take(td)
    }, qe(R.prototype, function(e, t) {
        var n = /^(?:filter|find|map|reject)|While$/.test(t),
            r = /^(?:head|last)$/.test(t),
            a = c[r ? "take" + (t == "last" ? "Right" : "") : t],
            s = r || /^find/.test(t);
        a && (c.prototype[t] = function() {
            var o = this.__wrapped__,
                u = r ? [1] : arguments,
                l = o instanceof R,
                f = u[0],
                d = l || T(o),
                m = function(E) {
                    var k = a.apply(c, Bt([E], u));
                    return r && h ? k[0] : k
                };
            d && n && typeof f == "function" && f.length != 1 && (l = d = !1);
            var h = this.__chain__,
                v = !!this.__actions__.length,
                _ = s && !h,
                w = l && !v;
            if (!s && d) {
                o = w ? o : new R(this);
                var I = e.apply(o, u);
                return I.__actions__.push({
                    func: kt,
                    args: [m],
                    thisArg: void 0
                }), new pe(I, h)
            }
            return _ && w ? e.apply(this, u) : (I = this.thru(m), _ ? r ? I.value()[0] : I.value() : I)
        })
    }), me(["pop", "push", "shift", "sort", "splice", "unshift"], function(e) {
        var t = l_[e],
            n = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru",
            r = /^(?:pop|shift)$/.test(e);
        c.prototype[e] = function() {
            var a = arguments;
            if (r && !this.__chain__) {
                var s = this.value();
                return t.apply(T(s) ? s : [], a)
            }
            return this[n](function(o) {
                return t.apply(T(o) ? o : [], a)
            })
        }
    }), qe(R.prototype, function(e, t) {
        var n = c[t];
        if (n) {
            var r = n.name + "";
            nd.call(jt, r) || (jt[r] = []), jt[r].push({
                name: t,
                func: n
            })
        }
    }), jt[En(void 0, o_).name] = [{
        name: "wrapper",
        func: void 0
    }], R.prototype.clone = Xb, R.prototype.reverse = Jb, R.prototype.value = s_, c.prototype.at = Ce.at, c.prototype.chain = Ce.wrapperChain, c.prototype.commit = Ce.commit, c.prototype.next = Ce.next, c.prototype.plant = Ce.plant, c.prototype.reverse = Ce.reverse, c.prototype.toJSON = c.prototype.valueOf = c.prototype.value = Ce.value, c.prototype.first = c.prototype.head, rd && (c.prototype[rd] = Ce.toIterator);
    const p_ = Object.freeze(Object.defineProperty({
            __proto__: null,
            add: Ss,
            after: Is,
            ary: Cr,
            assign: $s,
            assignIn: Cn,
            assignInWith: Et,
            assignWith: qs,
            at: Ys,
            attempt: Rr,
            before: gf,
            bind: Pr,
            bindAll: Xs,
            bindKey: Js,
            camelCase: lp,
            capitalize: dp,
            castArray: Qs,
            ceil: ei,
            chain: Lr,
            chunk: pf,
            clamp: ti,
            clone: yi,
            cloneDeep: br,
            cloneDeepWith: bi,
            cloneWith: _i,
            commit: Fr,
            compact: mp,
            concat: xi,
            cond: wi,
            conforms: Si,
            conformsTo: Ii,
            constant: jn,
            countBy: Ni,
            create: Ei,
            curry: Pn,
            curryRight: Tn,
            debounce: vf,
            deburr: fp,
            default: c,
            defaultTo: Ci,
            defaults: Ri,
            defaultsDeep: Pi,
            defer: Di,
            delay: Li,
            difference: Oi,
            differenceBy: Bi,
            differenceWith: Mi,
            divide: Wi,
            drop: Fi,
            dropRight: Ui,
            dropRightWhile: zi,
            dropWhile: Vi,
            each: On,
            eachRight: Bn,
            endsWith: Ki,
            entries: Mn,
            entriesIn: Wn,
            eq: ze,
            escape: $r,
            escapeRegExp: Zi,
            every: Ji,
            extend: Cn,
            extendWith: Et,
            fill: Qi,
            filter: to,
            find: ro,
            findIndex: Yr,
            findKey: so,
            findLast: io,
            findLastIndex: Zr,
            findLastKey: oo,
            first: Fn,
            flatMap: co,
            flatMapDeep: uo,
            flatMapDepth: lo,
            flatten: xs,
            flattenDeep: fo,
            flattenDepth: po,
            flip: mo,
            floor: ho,
            flow: vo,
            flowRight: yo,
            forEach: On,
            forEachRight: Bn,
            forIn: bo,
            forInRight: _o,
            forOwn: xo,
            forOwnRight: wo,
            fromPairs: jo,
            functions: So,
            functionsIn: Io,
            get: Za,
            groupBy: No,
            gt: Eo,
            gte: Co,
            has: Ao,
            hasIn: ts,
            head: Fn,
            identity: ce,
            inRange: Ro,
            includes: ko,
            indexOf: Po,
            initial: To,
            intersection: Do,
            intersectionBy: Lo,
            intersectionWith: Oo,
            invert: Mo,
            invertBy: Fo,
            invoke: zo,
            invokeMap: Vo,
            isArguments: ln,
            isArray: T,
            isArrayBuffer: Ho,
            isArrayLike: xe,
            isArrayLikeObject: K,
            isBoolean: Ko,
            isBuffer: Wt,
            isDate: qo,
            isElement: Yo,
            isEmpty: Zo,
            isEqual: Xo,
            isEqualWith: Jo,
            isError: Rn,
            isFinite: Qo,
            isFunction: at,
            isInteger: ta,
            isLength: bf,
            isMap: Mr,
            isMatch: ec,
            isMatchWith: tc,
            isNaN: nc,
            isNative: rc,
            isNil: ac,
            isNull: sc,
            isNumber: na,
            isObject: J,
            isObjectLike: ee,
            isPlainObject: Ct,
            isRegExp: Vn,
            isSafeInteger: cc,
            isSet: Wr,
            isString: gn,
            isSymbol: Dt,
            isTypedArray: un,
            isUndefined: uc,
            isWeakMap: lc,
            isWeakSet: dc,
            iteratee: fc,
            join: pc,
            kebabCase: mc,
            keyBy: hc,
            keys: Q,
            keysIn: ne,
            last: oe,
            lastIndexOf: gc,
            lodash: c,
            lowerCase: vc,
            lowerFirst: yc,
            lt: bc,
            lte: _c,
            map: Jt,
            mapKeys: xc,
            mapValues: wc,
            matches: jc,
            matchesProperty: Sc,
            max: Ic,
            maxBy: Nc,
            mean: Cc,
            meanBy: Ac,
            memoize: fe,
            merge: Rc,
            mergeWith: Gr,
            method: kc,
            methodOf: Pc,
            min: Tc,
            minBy: Dc,
            mixin: sa,
            multiply: Lc,
            negate: At,
            next: ca,
            noop: xn,
            now: hf,
            nth: Bc,
            nthArg: Mc,
            omit: Wc,
            omitBy: Uc,
            once: Ut,
            orderBy: gp,
            over: zc,
            overArgs: Vc,
            overEvery: Gc,
            overSome: Hc,
            pad: Qc,
            padEnd: eu,
            padStart: tu,
            parseInt: nu,
            partial: ga,
            partialRight: ru,
            partition: au,
            pick: su,
            pickBy: la,
            plant: ya,
            property: _f,
            propertyOf: iu,
            pull: cu,
            pullAll: _a,
            pullAllBy: uu,
            pullAllWith: lu,
            pullAt: fu,
            random: pu,
            range: hu,
            rangeRight: gu,
            rearg: vu,
            reduce: bu,
            reduceRight: _u,
            reject: xu,
            remove: wu,
            repeat: ju,
            replace: Su,
            rest: Iu,
            result: Nu,
            reverse: Kn,
            round: Eu,
            sample: Au,
            sampleSize: Ru,
            set: ku,
            setWith: Pu,
            shuffle: Tu,
            size: Du,
            slice: Lu,
            snakeCase: Ou,
            some: Bu,
            sortBy: Mu,
            sortedIndex: Wu,
            sortedIndexBy: mf,
            sortedIndexOf: Fu,
            sortedLastIndex: Uu,
            sortedLastIndexBy: zu,
            sortedLastIndexOf: Vu,
            sortedUniq: Hu,
            sortedUniqBy: Ku,
            split: $u,
            spread: qu,
            startCase: Yu,
            startsWith: Zu,
            stubArray: Xa,
            stubFalse: Qa,
            stubObject: Xu,
            stubString: Ju,
            stubTrue: Qu,
            subtract: el,
            sum: tl,
            sumBy: nl,
            tail: rl,
            take: al,
            takeRight: sl,
            takeRightWhile: il,
            takeWhile: ol,
            tap: cl,
            template: pl,
            templateSettings: Yn,
            throttle: yf,
            thru: kt,
            times: ml,
            toArray: oa,
            toFinite: Ve,
            toInteger: C,
            toIterator: ja,
            toJSON: dt,
            toLength: qr,
            toLower: gl,
            toNumber: Ae,
            toPairs: Mn,
            toPairsIn: Wn,
            toPath: vl,
            toPlainObject: Vr,
            toSafeInteger: bl,
            toString: F,
            toUpper: _l,
            transform: xl,
            trim: Sl,
            trimEnd: Il,
            trimStart: Nl,
            truncate: El,
            unary: Cl,
            unescape: rs,
            union: Al,
            unionBy: Rl,
            unionWith: kl,
            uniq: Pl,
            uniqBy: Tl,
            uniqWith: Dl,
            uniqueId: Ll,
            unset: Ol,
            unzip: Xn,
            unzipWith: Sa,
            update: Ml,
            updateWith: Wl,
            upperCase: Fl,
            upperFirst: ws,
            value: dt,
            valueOf: dt,
            values: lt,
            valuesIn: Ul,
            without: zl,
            words: pp,
            wrap: Vl,
            wrapperAt: Gl,
            wrapperChain: Hl,
            wrapperCommit: Fr,
            wrapperLodash: c,
            wrapperNext: ca,
            wrapperPlant: ya,
            wrapperReverse: Kl,
            wrapperToIterator: ja,
            wrapperValue: dt,
            xor: $l,
            xorBy: ql,
            xorWith: Yl,
            zip: Zl,
            zipObject: Jl,
            zipObjectDeep: Ql,
            zipWith: ed
        }, Symbol.toStringTag, {
            value: "Module"
        })),
        m_ = qI(YI);

    function h_(r) {
        var a = r,
            {
                children: e,
                isValidProp: t
            } = a,
            n = Ue(a, ["children", "isValidProp"]);
        t && ZI(t), n = S(S({}, p.useContext(zt)), n), n.isStatic = je(() => n.isStatic);
        const s = p.useMemo(() => n, [JSON.stringify(n.transition), n.transformPagePoint, n.reducedMotion]);
        return p.createElement(zt.Provider, {
            value: s
        }, e)
    }

    function g_({
        children: e,
        features: t,
        strict: n = !1
    }) {
        const [, r] = p.useState(!Ca(t)), a = p.useRef(void 0);
        if (!Ca(t)) {
            const s = t,
                {
                    renderer: o
                } = s,
                u = Ue(s, ["renderer"]);
            a.current = o, xf(u)
        }
        return p.useEffect(() => {
            Ca(t) && t().then(l => {
                var f = l,
                    {
                        renderer: o
                    } = f,
                    u = Ue(f, ["renderer"]);
                xf(u), a.current = o, r(!0)
            })
        }, []), p.createElement(XI.Provider, {
            value: {
                renderer: a.current,
                strict: n
            }
        }, e)
    }

    function Ca(e) {
        return typeof e == "function"
    }
    const sd = p.createContext(null),
        v_ = e => !e.isLayoutDirty && e.willUpdate(!1);

    function y_() {
        const e = new Set,
            t = new WeakMap,
            n = () => e.forEach(v_);
        return {
            add: r => {
                e.add(r), t.set(r, r.addEventListener("willUpdate", n))
            },
            remove: r => {
                e.delete(r);
                const a = t.get(r);
                a && (a(), t.delete(r)), n()
            },
            dirty: n
        }
    }
    const id = e => e === !0,
        b_ = e => id(e === !0) || e === "id",
        od = ({
            children: e,
            id: t,
            inherit: n = !0
        }) => {
            const r = p.useContext(as),
                a = p.useContext(sd),
                [s, o] = ss(),
                u = p.useRef(null),
                l = r.id || a;
            u.current === null && (b_(n) && l && (t = t ? l + "-" + t : l), u.current = {
                id: t,
                group: id(n) && r.group || y_()
            });
            const f = p.useMemo(() => et(S({}, u.current), {
                forceRender: s
            }), [o]);
            return p.createElement(as.Provider, {
                value: f
            }, e)
        },
        cd = p.createContext(null);

    function __(e, t, n, r) {
        if (!r) return e;
        const a = e.findIndex(d => d.value === t);
        if (a === -1) return e;
        const s = r > 0 ? 1 : -1,
            o = e[a + s];
        if (!o) return e;
        const u = e[a],
            l = o.layout,
            f = wf(l.min, l.max, .5);
        return s === 1 && u.layout.max + n > f || s === -1 && u.layout.min + n < f ? JI(e, a, a + s) : e
    }

    function x_(u, o) {
        var l = u,
            {
                children: e,
                as: t = "ul",
                axis: n = "y",
                onReorder: r,
                values: a
            } = l,
            s = Ue(l, ["children", "as", "axis", "onReorder", "values"]);
        const f = je(() => cr(t)),
            d = [],
            m = p.useRef(!1),
            h = {
                axis: n,
                registerItem: (v, _) => {
                    const w = d.findIndex(I => v === I.value);
                    w !== -1 ? d[w].layout = _[n] : d.push({
                        value: v,
                        layout: _[n]
                    }), d.sort(S_)
                },
                updateOrder: (v, _, w) => {
                    if (m.current) return;
                    const I = __(d, v, _, w);
                    d !== I && (m.current = !0, r(I.map(j_).filter(E => a.indexOf(E) !== -1)))
                }
            };
        return p.useEffect(() => {
            m.current = !1
        }), p.createElement(f, et(S({}, s), {
            ref: o,
            ignoreStrict: !0
        }), p.createElement(cd.Provider, {
            value: h
        }, e))
    }
    const w_ = p.forwardRef(x_);

    function j_(e) {
        return e.value
    }

    function S_(e, t) {
        return e.layout.min - t.layout.min
    }
    const I_ = e => e && typeof e == "object" && e.mix,
        N_ = e => I_(e) ? e.mix : void 0;

    function ud(...e) {
        const t = !Array.isArray(e[0]),
            n = t ? 0 : -1,
            r = e[0 + n],
            a = e[1 + n],
            s = e[2 + n],
            o = e[3 + n],
            u = is(a, s, S({
                mixer: N_(s[0])
            }, o));
        return t ? u(r) : u
    }

    function Aa(e, t) {
        const n = st(t()),
            r = () => n.set(t());
        return r(), ur(() => {
            const a = () => Pe.update(r, !1, !0),
                s = e.map(o => o.on("change", a));
            return () => {
                s.forEach(o => o()), dn(r)
            }
        }), n
    }

    function E_(e) {
        os.current = [], e();
        const t = Aa(os.current, e);
        return os.current = void 0, t
    }

    function Jn(e, t, n, r) {
        if (typeof e == "function") return E_(e);
        const a = typeof t == "function" ? t : ud(t, n, r);
        return Array.isArray(e) ? ld(e, a) : ld([e], ([s]) => a(s))
    }

    function ld(e, t) {
        const n = je(() => []);
        return Aa(e, () => {
            n.length = 0;
            const r = e.length;
            for (let a = 0; a < r; a++) n[a] = e[a].get();
            return t(n)
        })
    }

    function dd(e, t = 0) {
        return Vt(e) ? e : st(t)
    }

    function C_(l, u) {
        var f = l,
            {
                children: e,
                style: t = {},
                value: n,
                as: r = "li",
                onDrag: a,
                layout: s = !0
            } = f,
            o = Ue(f, ["children", "style", "value", "as", "onDrag", "layout"]);
        const d = je(() => cr(r)),
            m = p.useContext(cd),
            h = {
                x: dd(t.x),
                y: dd(t.y)
            },
            v = Jn([h.x, h.y], ([E, k]) => E || k ? 1 : "unset"),
            {
                axis: _,
                registerItem: w,
                updateOrder: I
            } = m;
        return p.createElement(d, et(S({
            drag: _
        }, o), {
            dragSnapToOrigin: !0,
            style: et(S({}, t), {
                x: h.x,
                y: h.y,
                zIndex: v
            }),
            layout: s,
            onDrag: (E, k) => {
                const {
                    velocity: be
                } = k;
                be[_] && I(n, h[_].get(), be[_]), a && a(E, k)
            },
            onLayoutMeasure: E => w(n, E),
            ref: u,
            ignoreStrict: !0
        }), e)
    }
    const A_ = p.forwardRef(C_),
        R_ = {
            Group: w_,
            Item: A_
        },
        fd = S(S({
            renderer: QI
        }, jf), eN),
        k_ = S(S(S({}, fd), tN), nN);

    function P_(e, ...t) {
        const n = e.length;

        function r() {
            let a = "";
            for (let s = 0; s < n; s++) {
                a += e[s];
                const o = t[s];
                o && (a += Vt(o) ? o.get() : o)
            }
            return a
        }
        return Aa(t.filter(Vt), r)
    }

    function T_(e, t = {}) {
        const {
            isStatic: n
        } = p.useContext(zt), r = p.useRef(null), a = st(Vt(e) ? e.get() : e), s = () => {
            r.current && r.current.stop()
        };
        return p.useInsertionEffect(() => a.attach((o, u) => {
            if (n) return u(o);
            if (s(), r.current = Sf(et(S({
                    keyframes: [a.get(), o],
                    velocity: a.getVelocity(),
                    type: "spring",
                    restDelta: .001,
                    restSpeed: .01
                }, t), {
                    onUpdate: u
                })), !lr.isProcessing) {
                const l = performance.now() - lr.timestamp;
                l < 30 && (r.current.time = rN(l))
            }
            return a.get()
        }, s), [JSON.stringify(t)]), ur(() => {
            if (Vt(e)) return e.on("change", o => a.set(parseFloat(o)))
        }, [a]), a
    }

    function pd(e, t, n) {
        p.useInsertionEffect(() => e.on(t, n), [e, t, n])
    }

    function D_(e) {
        const t = st(e.getVelocity());
        return pd(e, "velocityChange", n => {
            t.set(n)
        }), t
    }
    const Qn = new WeakMap;
    let Xe;

    function L_(e, t) {
        if (t) {
            const {
                inlineSize: n,
                blockSize: r
            } = t[0];
            return {
                width: n,
                height: r
            }
        } else return e instanceof SVGElement && "getBBox" in e ? e.getBBox() : {
            width: e.offsetWidth,
            height: e.offsetHeight
        }
    }

    function O_({
        target: e,
        contentRect: t,
        borderBoxSize: n
    }) {
        var r;
        (r = Qn.get(e)) === null || r === void 0 || r.forEach(a => {
            a({
                target: e,
                contentSize: t,
                get size() {
                    return L_(e, n)
                }
            })
        })
    }

    function B_(e) {
        e.forEach(O_)
    }

    function M_() {
        typeof ResizeObserver > "u" || (Xe = new ResizeObserver(B_))
    }

    function W_(e, t) {
        Xe || M_();
        const n = If(e);
        return n.forEach(r => {
            let a = Qn.get(r);
            a || (a = new Set, Qn.set(r, a)), a.add(t), Xe == null || Xe.observe(r)
        }), () => {
            n.forEach(r => {
                const a = Qn.get(r);
                a == null || a.delete(t), a != null && a.size || (Xe == null || Xe.unobserve(r))
            })
        }
    }
    const er = new Set;
    let tn;

    function F_() {
        tn = () => {
            const e = {
                    width: window.innerWidth,
                    height: window.innerHeight
                },
                t = {
                    target: window,
                    size: e,
                    contentSize: e
                };
            er.forEach(n => n(t))
        }, window.addEventListener("resize", tn)
    }

    function U_(e) {
        return er.add(e), tn || F_(), () => {
            er.delete(e), !er.size && tn && (tn = void 0)
        }
    }

    function z_(e, t) {
        return typeof e == "function" ? U_(e) : W_(e, t)
    }
    const V_ = 50,
        md = () => ({
            current: 0,
            offset: [],
            progress: 0,
            scrollLength: 0,
            targetOffset: 0,
            targetLength: 0,
            containerLength: 0,
            velocity: 0
        }),
        G_ = () => ({
            time: 0,
            x: md(),
            y: md()
        }),
        H_ = {
            x: {
                length: "Width",
                position: "Left"
            },
            y: {
                length: "Height",
                position: "Top"
            }
        };

    function hd(e, t, n, r) {
        const a = n[t],
            {
                length: s,
                position: o
            } = H_[t],
            u = a.current,
            l = n.time;
        a.current = e["scroll" + o], a.scrollLength = e["scroll" + s] - e["client" + s], a.offset.length = 0, a.offset[0] = 0, a.offset[1] = a.scrollLength, a.progress = Nf(0, a.scrollLength, a.current);
        const f = r - l;
        a.velocity = f > V_ ? 0 : aN(a.current - u, f)
    }

    function K_(e, t, n) {
        hd(e, "x", t, n), hd(e, "y", t, n), t.time = n
    }

    function $_(e, t) {
        const n = {
            x: 0,
            y: 0
        };
        let r = e;
        for (; r && r !== t;)
            if (r instanceof HTMLElement) n.x += r.offsetLeft, n.y += r.offsetTop, r = r.offsetParent;
            else if (r.tagName === "svg") {
            const a = r.getBoundingClientRect();
            r = r.parentElement;
            const s = r.getBoundingClientRect();
            n.x += a.left - s.left, n.y += a.top - s.top
        } else if (r instanceof SVGGraphicsElement) {
            const {
                x: a,
                y: s
            } = r.getBBox();
            n.x += a, n.y += s;
            let o = null,
                u = r.parentNode;
            for (; !o;) u.tagName === "svg" && (o = u), u = r.parentNode;
            r = o
        } else break;
        return n
    }
    const q_ = {
            Enter: [
                [0, 1],
                [1, 1]
            ],
            Exit: [
                [0, 0],
                [1, 0]
            ],
            Any: [
                [1, 0],
                [0, 1]
            ],
            All: [
                [0, 0],
                [1, 1]
            ]
        },
        Ra = {
            start: 0,
            center: .5,
            end: 1
        };

    function gd(e, t, n = 0) {
        let r = 0;
        if (Ra[e] !== void 0 && (e = Ra[e]), typeof e == "string") {
            const a = parseFloat(e);
            e.endsWith("px") ? r = a : e.endsWith("%") ? e = a / 100 : e.endsWith("vw") ? r = a / 100 * document.documentElement.clientWidth : e.endsWith("vh") ? r = a / 100 * document.documentElement.clientHeight : e = a
        }
        return typeof e == "number" && (r = t * e), n + r
    }
    const Y_ = [0, 0];

    function Z_(e, t, n, r) {
        let a = Array.isArray(e) ? e : Y_,
            s = 0,
            o = 0;
        return typeof e == "number" ? a = [e, e] : typeof e == "string" && (e = e.trim(), e.includes(" ") ? a = e.split(" ") : a = [e, Ra[e] ? e : "0"]), s = gd(a[0], n, r), o = gd(a[1], t), s - o
    }
    const X_ = {
        x: 0,
        y: 0
    };

    function J_(e) {
        return "getBBox" in e && e.tagName !== "svg" ? e.getBBox() : {
            width: e.clientWidth,
            height: e.clientHeight
        }
    }

    function Q_(e, t, n) {
        let {
            offset: r = q_.All
        } = n;
        const {
            target: a = e,
            axis: s = "y"
        } = n, o = s === "y" ? "height" : "width", u = a !== e ? $_(a, e) : X_, l = a === e ? {
            width: e.scrollWidth,
            height: e.scrollHeight
        } : J_(a), f = {
            width: e.clientWidth,
            height: e.clientHeight
        };
        t[s].offset.length = 0;
        let d = !t[s].interpolate;
        const m = r.length;
        for (let h = 0; h < m; h++) {
            const v = Z_(r[h], f[o], l[o], u[s]);
            !d && v !== t[s].interpolatorOffsets[h] && (d = !0), t[s].offset[h] = v
        }
        d && (t[s].interpolate = is(t[s].offset, sN(r)), t[s].interpolatorOffsets = [...t[s].offset]), t[s].progress = t[s].interpolate(t[s].current)
    }

    function ex(e, t = e, n) {
        if (n.x.targetOffset = 0, n.y.targetOffset = 0, t !== e) {
            let r = t;
            for (; r && r !== e;) n.x.targetOffset += r.offsetLeft, n.y.targetOffset += r.offsetTop, r = r.offsetParent
        }
        n.x.targetLength = t === e ? t.scrollWidth : t.clientWidth, n.y.targetLength = t === e ? t.scrollHeight : t.clientHeight, n.x.containerLength = e.clientWidth, n.y.containerLength = e.clientHeight
    }

    function tx(e, t, n, r = {}) {
        return {
            measure: () => ex(e, r.target, n),
            update: a => {
                K_(e, n, a), (r.offset || r.target) && Q_(e, n, r)
            },
            notify: () => t(n)
        }
    }
    const nn = new WeakMap,
        vd = new WeakMap,
        ka = new WeakMap,
        yd = e => e === document.documentElement ? window : e;

    function Pa(e, r = {}) {
        var a = r,
            {
                container: t = document.documentElement
            } = a,
            n = Ue(a, ["container"]);
        let s = ka.get(t);
        s || (s = new Set, ka.set(t, s));
        const o = G_(),
            u = tx(t, e, o, n);
        if (s.add(u), !nn.has(t)) {
            const f = () => {
                    for (const _ of s) _.measure()
                },
                d = () => {
                    for (const _ of s) _.update(lr.timestamp)
                },
                m = () => {
                    for (const _ of s) _.notify()
                },
                h = () => {
                    Pe.read(f, !1, !0), Pe.read(d, !1, !0), Pe.update(m, !1, !0)
                };
            nn.set(t, h);
            const v = yd(t);
            window.addEventListener("resize", h, {
                passive: !0
            }), t !== document.documentElement && vd.set(t, z_(t, h)), v.addEventListener("scroll", h, {
                passive: !0
            })
        }
        const l = nn.get(t);
        return Pe.read(l, !1, !0), () => {
            var f;
            dn(l);
            const d = ka.get(t);
            if (!d || (d.delete(u), d.size)) return;
            const m = nn.get(t);
            nn.delete(t), m && (yd(t).removeEventListener("scroll", m), (f = vd.get(t)) === null || f === void 0 || f(), window.removeEventListener("resize", m))
        }
    }

    function bd(e, t) {
        Ef(!!(!t || t.current))
    }
    const nx = () => ({
        scrollX: fn(0),
        scrollY: fn(0),
        scrollXProgress: fn(0),
        scrollYProgress: fn(0)
    });

    function Ta(a = {}) {
        var s = a,
            {
                container: e,
                target: t,
                layoutEffect: n = !0
            } = s,
            r = Ue(s, ["container", "target", "layoutEffect"]);
        const o = je(nx);
        return (n ? ur : p.useEffect)(() => (bd("target", t), bd("container", e), Pa(({
            x: u,
            y: l
        }) => {
            o.scrollX.set(u.current), o.scrollXProgress.set(u.progress), o.scrollY.set(l.current), o.scrollYProgress.set(l.progress)
        }, et(S({}, r), {
            container: (e == null ? void 0 : e.current) || void 0,
            target: (t == null ? void 0 : t.current) || void 0
        }))), [e, t, JSON.stringify(r.offset)]), o
    }

    function rx(e) {
        return Ta({
            container: e
        })
    }

    function ax() {
        return Ta()
    }

    function _d(e) {
        const t = p.useRef(0),
            {
                isStatic: n
            } = p.useContext(zt);
        p.useEffect(() => {
            if (n) return;
            const r = ({
                timestamp: a,
                delta: s
            }) => {
                t.current || (t.current = a), e(a - t.current, s)
            };
            return Pe.update(r, !0), () => dn(r)
        }, [e])
    }

    function sx() {
        const e = st(0);
        return _d(t => e.set(t)), e
    }
    class ix extends Cf {
        constructor() {
            super(...arguments), this.members = [], this.transforms = new Set
        }
        add(t) {
            let n;
            cs.has(t) ? (this.transforms.add(t), n = "transform") : !t.startsWith("origin") && !iN(t) && t !== "willChange" && (n = Af(t)), n && (oN(this.members, n), this.update())
        }
        remove(t) {
            cs.has(t) ? (this.transforms.delete(t), this.transforms.size || Rf(this.members, "transform")) : Rf(this.members, Af(t)), this.update()
        }
        update() {
            this.set(this.members.length ? this.members.join(", ") : "auto")
        }
    }

    function ox() {
        return je(() => new ix("auto"))
    }

    function xd() {
        !cN.current && uN();
        const [e] = p.useState(lN.current);
        return e
    }

    function cx() {
        const e = xd(),
            {
                reducedMotion: t
            } = p.useContext(zt);
        return t === "never" ? !1 : t === "always" ? !0 : e
    }

    function ux() {
        const e = je(() => ({
                current: null,
                animations: []
            })),
            t = je(() => Pf(e));
        return kf(() => {
            e.animations.forEach(n => n.stop())
        }), [e, t]
    }

    function lx(...e) {
        const t = p.useRef(0),
            [n, r] = p.useState(e[t.current]),
            a = p.useCallback(s => {
                t.current = typeof s != "number" ? Tf(0, e.length, t.current + 1) : s, r(e[t.current])
            }, [e.length, ...e]);
        return [n, a]
    }
    const dx = {
        some: 0,
        all: 1
    };

    function wd(e, t, {
        root: n,
        margin: r,
        amount: a = "some"
    } = {}) {
        const s = If(e),
            o = new WeakMap,
            u = f => {
                f.forEach(d => {
                    const m = o.get(d.target);
                    if (d.isIntersecting !== !!m)
                        if (d.isIntersecting) {
                            const h = t(d);
                            typeof h == "function" ? o.set(d.target, h) : l.unobserve(d.target)
                        } else m && (m(d), o.delete(d.target))
                })
            },
            l = new IntersectionObserver(u, {
                root: n,
                rootMargin: r,
                threshold: typeof a == "number" ? a : dx[a]
            });
        return s.forEach(f => l.observe(f)), () => l.disconnect()
    }

    function fx(e, {
        root: t,
        margin: n,
        amount: r,
        once: a = !1
    } = {}) {
        const [s, o] = p.useState(!1);
        return p.useEffect(() => {
            if (!e.current || a && s) return;
            const u = () => (o(!0), a ? void 0 : () => o(!1)),
                l = {
                    root: t && t.current || void 0,
                    margin: n,
                    amount: r
                };
            return wd(e.current, u, l)
        }, [t, e, n, a, r]), s
    }

    function px(e, t, n, r) {
        p.useEffect(() => {
            const a = e.current;
            if (n && a) return dN(a, t, n, r)
        }, [e, t, n, r])
    }

    function jd(e) {
        return e !== null && typeof e == "object" && Df in e
    }

    function mx(e) {
        if (jd(e)) return e[Df]
    }

    function Sd() {
        return hx
    }

    function hx(e) {
        dr.current && (dr.current.isUpdating = !1, dr.current.blockUpdate(), e && e())
    }

    function gx() {
        const [e, t] = ss(), n = Sd(), r = p.useRef();
        return p.useEffect(() => {
            Pe.postRender(() => Pe.postRender(() => {
                t === r.current && (us.current = !1)
            }))
        }, [t]), a => {
            n(() => {
                us.current = !0, e(), a(), r.current = t + 1
            })
        }
    }

    function vx() {
        us.current = !1
    }

    function yx() {
        return p.useCallback(() => {
            const e = dr.current;
            e && e.resetTree()
        }, [])
    }
    const Id = (e, t) => `${e}: ${t}`,
        tr = new Map;
    let Da;

    function bx(e, t, n, r) {
        const a = cs.has(t) ? "transform" : t,
            s = Id(e, a),
            o = tr.get(s);
        if (!o) return null;
        const {
            animation: u,
            startTime: l
        } = o, f = () => {
            tr.delete(s);
            try {
                u.cancel()
            } catch (d) {}
        };
        return l === null || window.HandoffComplete ? (f(), null) : (Da === void 0 && (Da = performance.now()), Da - l || 0)
    }
    let nr, Pt;

    function _x(e, t, n, r, a) {
        if (window.HandoffComplete) {
            window.HandoffAppearAnimations = void 0;
            return
        }
        const s = e.dataset[fN];
        if (!s) return;
        window.HandoffAppearAnimations = bx;
        const o = Id(s, t);
        Pt || (Pt = Lf(e, t, [n[0], n[0]], {
            duration: 1e4,
            ease: "linear"
        }), tr.set(o, {
            animation: Pt,
            startTime: null
        }));
        const u = () => {
            Pt.cancel();
            const l = Lf(e, t, n, r);
            nr === void 0 && (nr = performance.now()), l.startTime = nr, tr.set(o, {
                animation: l,
                startTime: nr
            }), a && a(l)
        };
        Pt.ready ? Pt.ready.then(u).catch(pN) : u()
    }
    const La = () => ({});
    class xx extends Mf {
        build() {}
        measureInstanceViewportBox() {
            return Wf()
        }
        resetTransform() {}
        restoreTransform() {}
        removeValueFromRenderState() {}
        renderInstance() {}
        scrapeMotionValuesFromProps() {
            return La()
        }
        getBaseTargetFromProps() {}
        readValueFromInstance(t, n, r) {
            return r.initialState[n] || 0
        }
        sortInstanceNodePosition() {
            return 0
        }
        makeTargetAnimatableFromInstance(a) {
            var s = a,
                {
                    transition: t,
                    transitionEnd: n
                } = s,
                r = Ue(s, ["transition", "transitionEnd"]);
            const o = mN(r, t || {}, this);
            return Ff(this, r, o), S({
                transition: t,
                transitionEnd: n
            }, r)
        }
    }
    const wx = Of({
        scrapeMotionValuesFromProps: La,
        createRenderState: La
    });

    function jx(e) {
        const [t, n] = p.useState(e), r = wx({}, !1), a = je(() => new xx({
            props: {},
            visualState: r,
            presenceContext: null
        }, {
            initialState: e
        }));
        p.useEffect(() => (a.mount({}), () => a.unmount()), [a]), p.useEffect(() => {
            a.update({
                onUpdate: o => {
                    n(S({}, o))
                }
            }, null)
        }, [n, a]);
        const s = je(() => o => Bf(a, o));
        return [t, s]
    }
    const Sx = 1e5,
        Nd = e => e > .001 ? 1 / e : Sx;

    function Ix(e) {
        let t = st(1),
            n = st(1);
        const {
            visualElement: r
        } = p.useContext(Uf);
        e ? (t = e.scaleX || t, n = e.scaleY || n) : r && (t = r.getValue("scaleX", 1), n = r.getValue("scaleY", 1));
        const a = Jn(t, Nd),
            s = Jn(n, Nd);
        return {
            scaleX: a,
            scaleY: s
        }
    }
    let Nx = 0;
    const Ex = ({
        children: e
    }) => (p.useEffect(() => {}, []), p.createElement(od, {
        id: je(() => `asl-${Nx++}`)
    }, e));

    function Cx({
        source: e,
        axis: t = "y"
    }) {
        const n = {
                value: 0
            },
            r = Pa(a => {
                n.value = a[t].progress * 100
            }, {
                container: e,
                axis: t
            });
        return {
            currentTime: n,
            cancel: r
        }
    }
    const Oa = new Map;

    function Ax({
        source: e = document.documentElement,
        axis: t = "y"
    } = {}) {
        Oa.has(e) || Oa.set(e, {});
        const n = Oa.get(e);
        return n[t] || (n[t] = gN() ? new ScrollTimeline({
            source: e,
            axis: t
        }) : Cx({
            source: e,
            axis: t
        })), n[t]
    }

    function Rx(e, t) {
        const n = Ax(t);
        return typeof e == "function" ? hN(e, n) : e.attachTimeline(n)
    }

    function kx(e, t) {
        if (e === "first") return 0; {
            const n = t - 1;
            return e === "last" ? n : n / 2
        }
    }

    function Px(e = .1, {
        startDelay: t = 0,
        from: n = 0,
        ease: r
    } = {}) {
        return (a, s) => {
            const o = typeof n == "number" ? n : kx(n, s),
                u = Math.abs(o - a);
            let l = e * u;
            if (r) {
                const f = s * e;
                l = vN(r)(l / f) * f
            }
            return t + l
        }
    }
    const Tx = Pe,
        Dx = yN.reduce((e, t) => (e[t] = n => dn(n), e), {}),
        Lx = Object.freeze(Object.defineProperty({
            __proto__: null,
            AnimatePresence: zf,
            AnimateSharedLayout: Ex,
            DeprecatedLayoutGroupContext: sd,
            DragControls: bN,
            FlatTree: _N,
            LayoutGroup: od,
            LayoutGroupContext: as,
            LazyMotion: g_,
            MotionConfig: h_,
            MotionConfigContext: zt,
            MotionContext: Uf,
            MotionGlobalConfig: xN,
            MotionValue: Cf,
            PresenceContext: wN,
            Reorder: R_,
            SwitchLayoutGroupContext: jN,
            VisualElement: Mf,
            addPointerEvent: SN,
            addPointerInfo: IN,
            addScaleCorrector: NN,
            animate: EN,
            animateValue: Sf,
            animateVisualElement: Bf,
            animationControls: CN,
            animations: jf,
            anticipate: AN,
            backIn: RN,
            backInOut: kN,
            backOut: PN,
            buildTransform: TN,
            calcLength: DN,
            cancelFrame: dn,
            cancelSync: Dx,
            checkTargetForNewValues: Ff,
            circIn: LN,
            circInOut: ON,
            circOut: BN,
            clamp: MN,
            color: WN,
            complex: FN,
            createBox: Wf,
            createDomMotionComponent: UN,
            createMotionComponent: zN,
            createScopedAnimate: Pf,
            cubicBezier: VN,
            delay: GN,
            disableInstantTransitions: vx,
            distance: HN,
            distance2D: KN,
            domAnimation: fd,
            domMax: k_,
            easeIn: $N,
            easeInOut: qN,
            easeOut: YN,
            filterProps: ZN,
            frame: Pe,
            frameData: lr,
            inView: wd,
            interpolate: is,
            invariant: XN,
            isBrowser: JN,
            isDragActive: QN,
            isMotionComponent: jd,
            isMotionValue: Vt,
            isValidMotionProp: eE,
            m: m_,
            makeUseVisualState: Of,
            mirrorEasing: tE,
            mix: wf,
            motion: cr,
            motionValue: fn,
            optimizedAppearDataAttribute: nE,
            pipe: rE,
            progress: Nf,
            px: aE,
            resolveMotionValue: sE,
            reverseEasing: iE,
            scroll: Rx,
            scrollInfo: Pa,
            spring: oE,
            stagger: Px,
            startOptimizedAppearAnimation: _x,
            steps: cE,
            sync: Tx,
            transform: ud,
            unwrapMotionComponent: mx,
            useAnimate: ux,
            useAnimation: uE,
            useAnimationControls: lE,
            useAnimationFrame: _d,
            useCycle: lx,
            useDeprecatedAnimatedState: jx,
            useDeprecatedInvertedScale: Ix,
            useDomEvent: px,
            useDragControls: dE,
            useElementScroll: rx,
            useForceUpdate: ss,
            useInView: fx,
            useInstantLayoutTransition: Sd,
            useInstantTransition: gx,
            useIsPresent: fE,
            useIsomorphicLayoutEffect: ur,
            useMotionTemplate: P_,
            useMotionValue: st,
            useMotionValueEvent: pd,
            usePresence: pE,
            useReducedMotion: xd,
            useReducedMotionConfig: cx,
            useResetProjection: yx,
            useScroll: Ta,
            useSpring: T_,
            useTime: sx,
            useTransform: Jn,
            useUnmountEffect: kf,
            useVelocity: D_,
            useViewportScroll: ax,
            useWillChange: ox,
            visualElementStore: mE,
            warning: Ef,
            wrap: Tf
        }, Symbol.toStringTag, {
            value: "Module"
        })),
        Ed = hE.Howl,
        Ox = Object.freeze(Object.defineProperty({
            __proto__: null,
            Active: gE,
            ActiveProvider: vE,
            AnimatedNumber: yE,
            AppProvider: Vf,
            BC: it,
            Badge: Gf,
            Breadcrumb: bE,
            Button: Se,
            ButtonGroup: _E,
            Carousel: xE,
            CircleCountdown: wE,
            CloseIcon: fr,
            CodeSegment: jE,
            Confirm: SE,
            Content: IE,
            Countdown: NE,
            Decimal: pr,
            DecimalUtils: EE,
            Dialog: ht,
            DialogHeader: CE,
            DialogTable: AE,
            DragDialog: RE,
            Empty: Hf,
            ErrorBoundary: Kf,
            ErrorCode: kE,
            ErrorWithTip: PE,
            EventEmitter: TE,
            FileSelect: DE,
            FlatList: LE,
            Howl: Ed,
            HttpResponseError: $f,
            I18nProvider: qf,
            Icon: Ge,
            Image: OE,
            Imgix: BE,
            Input: ls,
            InputNumber: ME,
            InputPassword: WE,
            InputWrap: FE,
            LayoutSizeProvider: UE,
            LazyImage: zE,
            Link: Gt,
            Loading: Yf,
            Long: VE,
            Lottie: mr,
            Overlayer: GE,
            Pagination: HE,
            Pop: Zf,
            Portal: Ie,
            Radio: KE,
            RadioBase: $E,
            ScrollView: gt,
            Select: qE,
            SelectBase: YE,
            Slider: ZE,
            State: Xf,
            SuspenseData: XE,
            SuspenseSource: Jf,
            Swiper: JE,
            Switch: QE,
            Table: eC,
            Tabs: Qf,
            Text: tC,
            Textarea: nC,
            ToggleView: rC,
            Tooltip: aC,
            TooltipBase: sC,
            Trans: ds,
            UpdateInView: iC,
            User: oC,
            VipLevelStatus: cC,
            WithOutSsr: ep,
            accountStore: U,
            addUserReceiptEvent: fs,
            app: g,
            asyncQueue: pn,
            bcdStore: uC,
            createI18nT: tp,
            dialog: np,
            env: Y,
            formateContent: lC,
            http: z,
            i18n: hr,
            langsLocaleToISO6391: dC,
            lazyLoad: Ht,
            notify: Te,
            parseI18Locales: rp,
            pickLazyComponent: fC,
            pickLazyFunction: pC,
            pop: He,
            protobuf: mC,
            requestRecaptcha: hC,
            settingStore: vt,
            socket: Kt,
            subscribePageContext: gC,
            supportSocket: yt,
            system: vC,
            systemStore: ps,
            useAccount: ot,
            useActiveMemo: yC,
            useAnimatedFrames: bC,
            useAsync: ap,
            useAsyncFn: _C,
            useAsyncNode: xC,
            useAutoRemove: wC,
            useBcd: jC,
            useChangeLang: ms,
            useCurrencyConfig: SC,
            useDelayHover: IC,
            useDialog: sp,
            useDisableBodyScroll: NC,
            useDisableParentScroll: EC,
            useForceUpdate: hs,
            useHover: CC,
            useInOverlayer: AC,
            useInView: RC,
            useIntersection: kC,
            useIsActive: PC,
            useIsDarken: gs,
            useIsFirstRender: TC,
            useIsMobile: vs,
            useIsomorphicEffect: mn,
            useLayoutSize: DC,
            useLinkIntercept: LC,
            useLocalCurrency: ys,
            useLocation: OC,
            useMergeRefs: BC,
            useMountedState: MC,
            useNavigate: Ke,
            useNotify: WC,
            useOnClickOutside: FC,
            usePageContext: ip,
            usePageProps: UC,
            usePop: hn,
            usePortalContext: zC,
            usePortalList: VC,
            usePrevious: GC,
            useQrcode: HC,
            useResize: KC,
            useRootClassName: $C,
            useSetSearch: qC,
            useSetState: YC,
            useSetting: bs,
            useSmoothList: ZC,
            useSystem: XC,
            useToggleDarken: JC,
            useTranslation: M,
            useWallet: op,
            useWindowSize: QC,
            userSocket: gr,
            utils: W,
            valtio: cp,
            wallet: eA,
            walletStore: _s,
            wrUtils: tA
        }, Symbol.toStringTag, {
            value: "Module"
        })),
        Bx = Object.freeze(Object.defineProperty({
            __proto__: null,
            ALPHA_MODES: uA,
            AbstractMultiResource: lA,
            AccessibilityManager: dA,
            AlphaFilter: fA,
            AnimatedSprite: pA,
            Application: mA,
            ArrayResource: hA,
            Assets: gA,
            AssetsClass: vA,
            Attribute: yA,
            BLEND_MODES: bA,
            BUFFER_BITS: _A,
            BUFFER_TYPE: xA,
            BackgroundSystem: wA,
            BaseImageResource: jA,
            BasePrepare: SA,
            BaseRenderTexture: IA,
            BaseTexture: NA,
            BatchDrawCall: EA,
            BatchGeometry: CA,
            BatchRenderer: AA,
            BatchShaderGenerator: RA,
            BatchSystem: kA,
            BatchTextureArray: PA,
            BitmapFont: TA,
            BitmapFontData: DA,
            BitmapText: LA,
            BlobResource: OA,
            BlurFilter: BA,
            BlurFilterPass: MA,
            Bounds: WA,
            BrowserAdapter: FA,
            Buffer: UA,
            BufferResource: zA,
            BufferSystem: VA,
            CLEAR_MODES: GA,
            COLOR_MASK_BITS: HA,
            Cache: KA,
            CanvasResource: $A,
            Circle: qA,
            ColorMatrixFilter: YA,
            CompressedTextureResource: ZA,
            Container: XA,
            ContextSystem: JA,
            CountLimiter: QA,
            CubeResource: e2,
            DEG_TO_RAD: t2,
            DRAW_MODES: n2,
            DisplacementFilter: r2,
            DisplayObject: a2,
            ENV: s2,
            Ellipse: i2,
            EventBoundary: o2,
            EventSystem: c2,
            ExtensionType: u2,
            Extract: l2,
            FORMATS: d2,
            FORMATS_TO_COMPONENTS: f2,
            FXAAFilter: p2,
            FederatedDisplayObject: m2,
            FederatedEvent: h2,
            FederatedMouseEvent: g2,
            FederatedPointerEvent: v2,
            FederatedWheelEvent: y2,
            FillStyle: b2,
            Filter: _2,
            FilterState: x2,
            FilterSystem: w2,
            Framebuffer: j2,
            FramebufferSystem: S2,
            GC_MODES: I2,
            GLFramebuffer: N2,
            GLProgram: E2,
            GLTexture: C2,
            GRAPHICS_CURVES: A2,
            GenerateTextureSystem: R2,
            Geometry: k2,
            GeometrySystem: P2,
            Graphics: T2,
            GraphicsData: D2,
            GraphicsGeometry: L2,
            IGLUniformData: O2,
            INSTALLED: B2,
            INTERNAL_FORMATS: M2,
            INTERNAL_FORMAT_TO_BYTES_PER_PIXEL: W2,
            ImageBitmapResource: F2,
            ImageResource: U2,
            LINE_CAP: z2,
            LINE_JOIN: V2,
            LineStyle: G2,
            LoaderParserPriority: H2,
            MASK_TYPES: K2,
            MIPMAP_MODES: $2,
            MSAA_QUALITY: q2,
            MaskContainer: Y2,
            MaskData: Z2,
            MaskSystem: X2,
            Matrix: J2,
            Mesh: Q2,
            MeshBatchUvs: eR,
            MeshGeometry: tR,
            MeshMaterial: nR,
            MultisampleSystem: rR,
            NineSlicePlane: aR,
            NoiseFilter: sR,
            ObjectRenderer: iR,
            ObjectRendererSystem: oR,
            ObservablePoint: cR,
            PI_2: uR,
            PRECISION: lR,
            ParticleContainer: dR,
            ParticleRenderer: fR,
            Particles: pR,
            PixiApp: mR,
            PixiApplication: hR,
            PixiReact: gR,
            PlaneGeometry: vR,
            PluginSystem: yR,
            Point: bR,
            Polygon: _R,
            Pool: xR,
            Prepare: wR,
            Program: jR,
            ProjectionSystem: SR,
            Quad: IR,
            QuadUv: NR,
            RAD_TO_DEG: ER,
            RENDERER_TYPE: CR,
            Rect: AR,
            Rectangle: RR,
            RenderTexture: kR,
            RenderTexturePool: PR,
            RenderTextureSystem: TR,
            Renderer: DR,
            ResizePlugin: LR,
            Resource: OR,
            RopeGeometry: BR,
            RoundedRectangle: MR,
            Runner: WR,
            SAMPLER_TYPES: FR,
            SCALE_MODES: UR,
            SHAPES: zR,
            SVGResource: VR,
            ScissorSystem: GR,
            Shader: HR,
            ShaderSystem: KR,
            SimpleMesh: $R,
            SimplePlane: qR,
            SimpleRope: YR,
            Spine: ZR,
            Sprite: XR,
            SpriteMaskFilter: JR,
            Spritesheet: QR,
            StartupSystem: ek,
            State: tk,
            StateSystem: nk,
            StencilSystem: rk,
            SystemManager: ak,
            TARGETS: sk,
            TEXT_GRADIENT: ik,
            TYPES: ok,
            TYPES_TO_BYTES_PER_COMPONENT: ck,
            TYPES_TO_BYTES_PER_PIXEL: uk,
            TemporaryDisplayObject: lk,
            Text: dk,
            TextFormat: fk,
            TextMetrics: pk,
            TextStyle: mk,
            Texture: hk,
            TextureGCSystem: gk,
            TextureMatrix: vk,
            TextureSystem: yk,
            TextureUvs: bk,
            Ticker: _k,
            TickerPlugin: xk,
            TilingSprite: wk,
            TilingSpriteRenderer: jk,
            TimeLimiter: Sk,
            Transform: Ik,
            TransformFeedback: Nk,
            TransformFeedbackSystem: Ek,
            UPDATE_PRIORITY: Ck,
            UniformGroup: Ak,
            VERSION: Rk,
            VideoResource: kk,
            ViewSystem: Pk,
            ViewableBuffer: Tk,
            WRAP_MODES: Dk,
            XMLFormat: Lk,
            XMLStringFormat: Ok,
            accessibleTarget: Bk,
            autoDetectFormat: Mk,
            autoDetectRenderer: Wk,
            autoDetectResource: Fk,
            cacheTextureArray: Uk,
            checkDataUrl: zk,
            checkExtension: Vk,
            checkMaxIfStatementsInShader: Gk,
            convertToList: Hk,
            copySearchParams: Kk,
            createStringVariations: $k,
            createTexture: qk,
            createUBOElements: Yk,
            curves: Zk,
            defaultFilterVertex: Xk,
            defaultVertex: Jk,
            detectAvif: Qk,
            detectCompressedTextures: eP,
            detectDefaults: tP,
            detectWebp: nP,
            extensions: rP,
            filters: aP,
            generateProgram: sP,
            generateUniformBufferSync: iP,
            getFontFamilyName: oP,
            getTestContext: cP,
            getUBOData: uP,
            graphicsUtils: lP,
            groupD8: dP,
            isMobile: fP,
            isSingleItem: pP,
            loadBitmapFont: mP,
            loadDDS: hP,
            loadImageBitmap: gP,
            loadJson: vP,
            loadKTX: yP,
            loadSVG: bP,
            loadTextures: _P,
            loadTxt: xP,
            loadWebFont: wP,
            parseDDS: jP,
            parseKTX: SP,
            resolveCompressedTextureUrl: IP,
            resolveTextureUrl: NP,
            settings: EP,
            spritesheetAsset: CP,
            uniformParsers: AP,
            unsafeEvalSupported: RP,
            usePixiApp: kP,
            utils: PP
        }, Symbol.toStringTag, {
            value: "Module"
        })),
        We = {};

    function Mx(e, t) {
        let n;
        return () => {
            clearTimeout(n), n = setTimeout(e, t)
        }
    }
    const Wx = Mx(We.performReactRefresh, 16);

    function Fx(e, t) {
        for (const n in t) {
            if (n === "__esModule") continue;
            const r = t[n];
            We.isLikelyComponentType(r) && We.register(r, e + " export " + n)
        }
    }

    function Ux(e, t) {
        if (!Ba(e, a => a in t)) return "Could not Fast Refresh (export removed)";
        if (!Ba(t, a => a in e)) return "Could not Fast Refresh (new export)";
        let n = !1;
        const r = Ba(t, (a, s) => (n = !0, We.isLikelyComponentType(s) ? !0 : e[a] === t[a]));
        if (n && r) Wx();
        else return "Could not Fast Refresh. Learn more at https://github.com/vitejs/vite-plugin-react/tree/main/packages/plugin-react#consistent-components-exports"
    }

    function Ba(e, t) {
        for (const n in e) {
            if (n === "__esModule") continue;
            const r = Object.getOwnPropertyDescriptor(e, n);
            if (r && r.get || !t(n, e[n])) return !1
        }
        return !0
    }

    function zx(e) {
        return xt(() =>
            import (e).then(async t => (await t.__tla, t)), [])
    }
    We.__hmr_import = zx, We.registerExportsForReactRefresh = Fx, We.validateRefreshBoundaryAndEnqueueUpdate = Ux;
    const Vx = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: We
    }, Symbol.toStringTag, {
        value: "Module"
    }));
    document.addEventListener("gesturestart", e => e.preventDefault()), hr.init({
        lng: localStorage.getItem("lang") || "en",
        fallbackLng: "en",
        defaultNS: "translation",
        returnEmptyString: !1,
        backend: {
            sources: {
                translation: rp(js)
            }
        }
    });
    const Gx = () => te("modules/account").then(e => e.account()),
        Hx = p.lazy(Gx),
        Kx = X.memo(function() {
            return i.jsx(Kf, {
                children: i.jsx(p.Suspense, {
                    children: i.jsx(Hx, {})
                })
            })
        }),
        $x = X.memo(function() {
            return p.useEffect(() => () => {
                g.emit("ad_track", "registration_abandoned")
            }, []), i.jsx(ht, {
                className: qx,
                children: i.jsx(gt, {
                    children: i.jsx(Kx, {})
                })
            })
        }),
        qx = "sh1kgj9",
        Yx = X.memo(function() {
            const e = sp(),
                t = ot(),
                n = () => {
                    e.back()
                };
            return p.useEffect(() => {
                const r = async () => {
                        await U.syncData(), g.emit("ad_track", "login_success", {
                            userId: String(t.userId)
                        }), n()
                    },
                    a = async () => {
                        await U.syncData();
                        const s = Y.localCurrencys.find(o => o.value === U.state.bonusCurrencyName) || Y.localCurrencys.find(o => o.area === U.state.areaCode);
                        s && vt.setState(S({
                            localeCurrencyName: s.value,
                            enableLocaleCurrency: !0,
                            lastFiatCurrency: vt.state.lastFiatCurrency || s.value
                        }, s.force && _s.state[s.value] && {
                            currencyName: s.value
                        })), g.emit("ad_track", "regist_success", {
                            userId: String(t.userId)
                        }), g.emit("track", "_profile_set_once"), n()
                    };
                return g.on("signin-success", r), g.on("regist-success", a), () => {
                    g.off("signin-success", r), g.off("regist-success", a)
                }
            }, []), null
        }),
        Zx = () => te("modules/account").then(e => e.walletConnectAuthModal()),
        Xx = Ht(Zx),
        Jx = X.memo(function() {
            const e = p.useRef(0),
                [t, n] = p.useState(!1);
            return p.useEffect(() => {
                const r = () => {
                    e.current && e.current === 0 && (n(!0), e.current = e.current + 1, document.documentElement.style.setProperty("--wcm-z-index", "10003"))
                };
                return g.on("open-wallet-connect-modal", r), () => {
                    g.off("open-wallet-connect-modal", r)
                }
            }, []), t ? i.jsx(Xx, {}) : null
        }),
        Qx = () => te("modules/account").then(e => e.thirdLogin()),
        e1 = Ht(Qx),
        t1 = X.memo(function() {
            return i.jsx(Ie.Source, {
                id: "page-third-login-enter",
                children: i.jsx(e1, {})
            })
        });

    function n1() {
        g.emit("inject_rootNode", i.jsx(Yx, {})), g.emit("inject_rootNode", i.jsx(t1, {})), g.emit("inject_rootNode", i.jsx(Jx, {})), g.emit("inject_dialog", [{
            path: "#/login/*",
            isDialog: !0,
            element: i.jsx($x, {})
        }])
    }
    const r1 = "/assets/promo_code.94c7daca.png",
        a1 = "/assets/promo_code_w.206ad2da.png";

    function s1() {
        const {
            t: e
        } = M(), [t, n] = p.useState(""), r = () => z.post("/account/invitation/bind/", {
            invitationCode: t
        }).then(() => {
            He.back()
        }).catch(Te);
        return i.jsx(ht, {
            className: c1,
            title: e("Referral/Promo Code"),
            children: i.jsxs("div", {
                children: [i.jsx(ls, {
                    value: t,
                    onChange: n,
                    after: i.jsx("div", {
                        className: "tip",
                        children: e("Only valid for first 24 hours after signing up.")
                    })
                }), i.jsx(Se, {
                    onClick: t ? r : void 0,
                    type: "conic2",
                    children: e("Apply")
                })]
            })
        })
    }
    async function i1() {
        if (await U.waitLogin(), W.serverTime().getTime() - U.state.createTime < 864e5) {
            const e = await z.get("/account/invitation/get/");
            return e ? e.invitationCode : ""
        } else return "init"
    }
    p.memo(({
        small: e = !1
    }) => {
        const {
            t
        } = M(), n = gs(), r = Ke(), [a, s] = p.useState("init");
        p.useEffect(() => {
            i1().then(u => s(u || ""))
        }, []);
        const o = () => r("#/promocode");
        return a ? null : e ? i.jsx("div", {
            className: se(u1, "fold-navlink-item"),
            children: i.jsx(Se, {
                className: "promo-b",
                onClick: o,
                children: i.jsx(o1, {})
            })
        }) : i.jsxs("div", {
            className: l1,
            children: [i.jsxs(Se, {
                className: "promo-btn",
                onClick: o,
                children: [i.jsx("img", {
                    src: n ? r1 : a1
                }), i.jsx("div", {
                    className: "name",
                    children: i.jsx("span", {
                        children: t("Referral/Promo Code")
                    })
                })]
            }), i.jsx("div", {
                className: "available",
                children: t("Available in first 24 hours")
            })]
        })
    });
    const o1 = X.memo(function() {
            return i.jsx("svg", {
                width: "22",
                height: "20",
                viewBox: "0 0 22 20",
                xmlns: "http://www.w3.org/2000/svg",
                children: i.jsxs("g", {
                    fill: "none",
                    fillRule: "evenodd",
                    children: [i.jsx("path", {
                        d: "M.347 4.426h21.306a.35.35 0 0 1 .347.35v4.168a.35.35 0 0 1-.347.35H.347A.35.35 0 0 1 0 8.943V4.776a.35.35 0 0 1 .347-.35Z",
                        fill: "#FFCB34",
                        fillRule: "nonzero"
                    }), i.jsx("path", {
                        d: "M2.765 9.293h16.47c.128 0 .232.105.232.233v10.241a.233.233 0 0 1-.231.233H2.765a.233.233 0 0 1-.232-.233V9.527c0-.129.104-.234.232-.234Z",
                        fill: "#FFCB34",
                        fillRule: "nonzero"
                    }), i.jsx("path", {
                        d: "M12.447 2.764v6.53h6.789c.127 0 .231.021.231.048v2.125c0 .027-.104.049-.231.049h-6.789V20H9.553l-.001-8.485H2.765c-.128 0-.232-.021-.232-.048V9.342c0-.027.104-.049.232-.049h6.787V2.764h2.895Z",
                        fill: "#FF9D34",
                        fillRule: "nonzero"
                    }), i.jsx("path", {
                        d: "M4.941.284s.611-.448 1.894-.218C8.57.377 9.718 2.98 9.718 2.98v1.522S7.969 2.51 6.57 2.159c-1.074-.268-1.98.352-1.98.352l.35-2.227Zm-2.95 2.189c.504.175 3.029.664 3.029.664l2.124.474 1.954.89c-4.058.606-7.824-.095-7.824-.095l1.61-.643-.892-1.29Zm17.23 1.29.895-1.29c-.504.175-3.028.664-3.028.664l-2.125.474-1.954.894c4.058.605 7.824-.1 7.824-.1l-1.612-.642ZM17.166.287l.347 2.224s-.909-.62-1.98-.35c-1.398.353-3.143 2.344-3.143 2.344V2.982S13.536.38 15.273.07c1.282-.23 1.893.218 1.893.218Z",
                        fill: "#DC4592"
                    }), i.jsx("path", {
                        d: "M14.587 2.496c1.262-.733 2.761-.486 2.926.015.183.55-.712 1.138-2.006 1.816-.848.449-3.12.175-3.12.175s.938-1.272 2.2-2.006Zm-9.993.018c.165-.5 1.664-.748 2.927-.015 1.262.73 2.2 2.006 2.2 2.006S7.45 4.779 6.6 4.33c-1.294-.68-2.188-1.266-2.006-1.816Z",
                        fill: "#9B34FF"
                    })]
                })
            })
        }),
        c1 = "poy960u",
        u1 = "f1csl0p5",
        l1 = "poo6c5d";

    function d1() {
        return z.get("/agent/invitation/code/custom/")
    }
    const f1 = fe(() => z.get("/agent/reward/config/"));

    function p1() {
        const e = `//mycasino.${Y.host}`;
        return {
            management: e + "/",
            createCode: e + "/mycasino/referral",
            rewardWithdraw: e + "/mycasino/rewards",
            commissionWithdraw: e + "/mycasino/commissions",
            rewardDetails: e + "/mycasino/rewards",
            commissionDetails: e + "/mycasino/commissions",
            friends: e + "/mycasino/friends",
            dashboard: e + "/mycasino/dashboard",
            bannerdownload: e + "/mycasino/bannerdownload",
            downloadBanner: "https://res.bc.game/material.zip?md5=69dc359c0de077f93b62da3bc3e5520d"
        }
    }
    const m1 = "/assets/refer.8563340a.png",
        h1 = p.memo(function() {
            const {
                t: e
            } = M(), t = Ke(), n = ys(!0), [r, a] = p.useState(""), {
                login: s
            } = ot();
            p.useEffect(() => {
                d1().then(l => {
                    l && a(l.invitationUrl || "")
                }).catch(Te)
            }, [s]);
            const o = i.jsx(Se, {
                    onClick: () => {
                        W.copyToClipboard(r), Te(e("Copied"))
                    },
                    children: e("Copy link")
                }),
                u = n.amount2localStr(new pr(1e3));
            return i.jsx(ht, {
                className: g1,
                title: e("Refer a friend"),
                children: i.jsxs(gt, {
                    className: "refer-friend-dialog",
                    children: [i.jsxs("div", {
                        className: "refer-top",
                        children: [i.jsx("div", {
                            className: "refer-bg"
                        }), i.jsx("img", {
                            alt: "referImg",
                            src: m1
                        }), i.jsxs("div", {
                            className: "refer-right",
                            children: [i.jsx("p", {
                                className: "t",
                                children: i.jsxs(ds, {
                                    number: u,
                                    i18nKey: "trans.mainpage.refer.desc",
                                    children: ["Refer a friend and get ", i.jsxs("span", {
                                        className: "s-y",
                                        children: [i.jsx("br", {}), {
                                            number: u
                                        }]
                                    }), " ", i.jsx("span", {
                                        children: "+"
                                    }), " ", i.jsxs("span", {
                                        className: "s-g",
                                        children: ["15%", i.jsx("br", {})]
                                    }), " commission"]
                                })
                            }), i.jsx("p", {
                                className: "g",
                                children: e("Invite friends, earn money.")
                            })]
                        })]
                    }), i.jsx("button", {
                        className: "learn-btn",
                        onClick: () => {
                            np.close(), t("/affiliate")
                        },
                        children: e("Learn more")
                    }), i.jsxs("div", {
                        className: "refer-bottom",
                        children: [i.jsx("p", {
                            className: "sub-t",
                            children: e("Share your referral link:")
                        }), i.jsx(ls, {
                            value: r,
                            readOnly: !0,
                            after: o
                        })]
                    })]
                })
            })
        }),
        g1 = "r5k7vbo";

    function v1(e) {
        return e > 9 ? e.toString() : "0" + e
    }
    const y1 = X.memo(function() {
            const {
                t: e
            } = M(), [t, n] = p.useState([]);
            return p.useEffect(() => {
                f1().then(r => {
                    r && r.length > 0 && n([...r])
                }).catch(console.log)
            }, []), i.jsx(ht, {
                className: b1,
                title: e("Referral Reward Rules"),
                children: i.jsxs(gt, {
                    className: "rule-dalog-wrap",
                    children: [i.jsxs("div", {
                        className: "getreward-wrap",
                        children: [i.jsx("p", {
                            className: "t",
                            children: e("How to Get your Referral Reward")
                        }), i.jsxs("div", {
                            className: "imgs-wrap",
                            children: [i.jsxs("div", {
                                className: "rule-left",
                                children: [i.jsx("p", {
                                    className: "ri-t",
                                    children: "1"
                                }), i.jsx("p", {
                                    className: "ri-st",
                                    dangerouslySetInnerHTML: {
                                        __html: e("<span>Share</span> to friends")
                                    }
                                }), i.jsx("p", {
                                    className: "ri-d",
                                    children: e("Share your referral link or code to your friends")
                                })]
                            }), i.jsxs("div", {
                                className: "rule-center",
                                children: [i.jsx("p", {
                                    className: "ri-t",
                                    children: "2"
                                }), i.jsxs("p", {
                                    className: "ri-st",
                                    children: ["Get ", i.jsx("span", {
                                        children: "$1000"
                                    })]
                                }), i.jsx("p", {
                                    className: "ri-d",
                                    children: e("Your awards will be locked for now")
                                })]
                            }), i.jsxs("div", {
                                className: "rule-right",
                                children: [i.jsx("p", {
                                    className: "ri-t",
                                    children: "3"
                                }), i.jsx("p", {
                                    className: "ri-st",
                                    dangerouslySetInnerHTML: {
                                        __html: e("Level Up & <span>Receive!</span>")
                                    }
                                }), i.jsx("p", {
                                    className: "ri-d",
                                    children: e("Your friend\u2019s VIP level will unlock your awards (see rules below)")
                                })]
                            })]
                        })]
                    }), i.jsxs("div", {
                        className: "unlock-rules-wrap",
                        children: [i.jsxs("div", {
                            className: "ur-title",
                            children: [i.jsx("div", {
                                className: "l"
                            }), i.jsx("p", {
                                children: e("Unlock Rules")
                            }), i.jsx("div", {
                                className: "r"
                            })]
                        }), i.jsx("div", {
                            className: "rule-table-wrap",
                            children: i.jsxs("div", {
                                className: "ri-table",
                                children: [i.jsxs("div", {
                                    className: "ri-thead",
                                    children: [i.jsx("p", {
                                        className: "ri-tr-l",
                                        children: e("Friend\u2019s Level")
                                    }), i.jsx("p", {
                                        className: "ri-tr-m",
                                        children: e("Total Wager")
                                    }), i.jsx("p", {
                                        className: "ri-tr-r",
                                        children: e("Unlock Amount")
                                    })]
                                }), t.length === 0 ? i.jsx(Yf, {}) : i.jsx("div", {
                                    className: "ri-tbody",
                                    children: t.map((r, a) => {
                                        const s = it.getLevelInfo(r.userLevel),
                                            o = a % 2 === 0;
                                        return i.jsxs("div", {
                                            className: se("ri-tr", o && "have-bg"),
                                            children: [i.jsx("div", {
                                                className: "ri-tr-l",
                                                children: i.jsxs("p", {
                                                    children: ["VIP ", v1(r.userLevel)]
                                                })
                                            }), i.jsx("div", {
                                                className: "ri-tr-m",
                                                children: i.jsx("p", {
                                                    children: s.xp
                                                })
                                            }), i.jsxs("div", {
                                                className: "ri-tr-r",
                                                children: [i.jsx("div", {
                                                    className: "coin-icon",
                                                    children: i.jsx("span", {
                                                        children: "$"
                                                    })
                                                }), i.jsxs("span", {
                                                    children: ["+", new pr(r.rewardAmount).toFixed(2)]
                                                })]
                                            })]
                                        }, `ri-tr-${a}`)
                                    })
                                })]
                            })
                        })]
                    })]
                })
            })
        }),
        b1 = "r15pu1rh",
        _1 = X.memo(function() {
            const {
                t: e
            } = M(), t = p1();
            return i.jsx(ht, {
                className: x1,
                title: e("Commission Reward Rules"),
                children: i.jsxs(gt, {
                    className: "rule-dialog-wrap",
                    children: [i.jsx("div", {
                        className: "cru-st",
                        children: e("Commission rate depends on different games:")
                    }), i.jsxs("div", {
                        className: "max-wrap",
                        children: [i.jsx("div", {
                            className: "wager-item item-1",
                            children: i.jsxs("div", {
                                className: "item-inner",
                                children: [i.jsxs("div", {
                                    className: "top",
                                    children: [i.jsx("p", {
                                        className: "m-t",
                                        children: "7%"
                                    }), i.jsx(Ma, {
                                        labelOne: e("Calculation example: wager 100"),
                                        labelTwo: `${e("Commission")}= 100 \u2715 1% \u2715 7% = 0.07`
                                    }), i.jsx("p", {
                                        className: "of",
                                        children: e("Of 1% wager")
                                    })]
                                }), i.jsxs("div", {
                                    className: "bot",
                                    children: [i.jsxs("p", {
                                        className: "l",
                                        children: [e("Game"), ":"]
                                    }), i.jsx("p", {
                                        className: "r",
                                        children: e("The Original Games")
                                    })]
                                })]
                            })
                        }), i.jsx("div", {
                            className: "wager-item item-2",
                            children: i.jsxs("div", {
                                className: "item-inner",
                                children: [i.jsxs("div", {
                                    className: "top",
                                    children: [i.jsx("p", {
                                        className: "m-t",
                                        children: "15%"
                                    }), i.jsx(Ma, {
                                        labelOne: e("Calculation example: wager 100"),
                                        labelTwo: `${e("Commission")}= 100 \u2715 1% \u2715 15% = 0.15`
                                    }), i.jsx("p", {
                                        className: "of",
                                        children: e("Of 1% wager")
                                    })]
                                }), i.jsxs("div", {
                                    className: "bot",
                                    children: [i.jsxs("p", {
                                        className: "l",
                                        children: [e("Game"), ":"]
                                    }), i.jsx("p", {
                                        className: "r",
                                        children: e("3rd Party Slots, Live Casino")
                                    })]
                                })]
                            })
                        }), i.jsx("div", {
                            className: "wager-item item-3",
                            children: i.jsxs("div", {
                                className: "item-inner",
                                children: [i.jsxs("div", {
                                    className: "top",
                                    children: [i.jsx("p", {
                                        className: "m-t",
                                        children: "25%"
                                    }), i.jsx(Ma, {
                                        labelOne: e("Calculation example: wager 100"),
                                        labelTwo: `${e("Commission")}= 100 \u2715 1% \u2715 25% = 0.25`
                                    }), i.jsx("p", {
                                        className: "of",
                                        children: e("Of 1% wager")
                                    })]
                                }), i.jsxs("div", {
                                    className: "bot",
                                    children: [i.jsxs("p", {
                                        className: "l",
                                        children: [e("Game"), ":"]
                                    }), i.jsx("p", {
                                        className: "r",
                                        children: e("Sports")
                                    })]
                                })]
                            })
                        }), i.jsxs("div", {
                            className: "wager-more",
                            children: [i.jsx("div", {
                                className: "info-flag",
                                children: "!"
                            }), i.jsxs("div", {
                                className: "info-text",
                                children: [i.jsx("p", {
                                    children: e("If you have customized your commission rate, please see your rate here:")
                                }), i.jsxs(Gt, {
                                    href: t.friends,
                                    target: "_blank",
                                    children: [e("View my commission rate"), " ", i.jsx(Ge, {
                                        className: "icon-blank",
                                        name: "NewWindow"
                                    })]
                                })]
                            })]
                        }), i.jsxs("ul", {
                            children: [i.jsx("li", {
                                children: e("In any public environment (for example, universities, schools, libraries, and office spaces), only one commission can be paid to each user, IP address, electronic device, home, phone number, billing method or email address, if the computer and IP address is shared with others.")
                            }), i.jsx("li", {
                                children: e("Our decision to draw a bet will be based entirely on our discretion after a deposit is made and a bet is successfully placed.")
                            }), i.jsx("li", {
                                children: e("Commissions can be withdrawn into our internal {{host}} wallet from the dashboard at anytime. (View your commission extraction in the dashboard and view the balance in the wallet).", {
                                    host: Y.buildHost
                                })
                            }), i.jsx("li", {
                                children: e("We support the majority of currencies on the market.")
                            }), i.jsx("li", {
                                children: e("The system calculates the commission every 24 hours.")
                            })]
                        }), i.jsx("div", {
                            className: "contact-wrap",
                            children: i.jsxs("p", {
                                children: [i.jsx("span", {
                                    children: e("If you have any questions regarding our rules, please")
                                }), i.jsxs("a", {
                                    href: "https://t.me/SamShady_BCGAME",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: [i.jsx("span", {
                                        children: e("Contact Us")
                                    }), i.jsx(Ge, {
                                        className: "icon-blank",
                                        name: "NewWindow"
                                    })]
                                })]
                            })
                        })]
                    })]
                })
            })
        }),
        Ma = X.memo(function({
            labelOne: e,
            labelTwo: t
        }) {
            const [n, r] = p.useState(!1), a = vs();
            return i.jsxs("div", {
                className: "tooltip-text-wrap",
                children: [i.jsx("div", {
                    className: "t-d",
                    onMouseEnter: () => {
                        a || r(!0)
                    },
                    onMouseLeave: () => {
                        a || r(!1)
                    },
                    onClick: () => {
                        a && r(!n)
                    },
                    children: "?"
                }), n && i.jsxs("div", {
                    className: "tool-tip-wrap",
                    children: [i.jsx("p", {
                        children: e
                    }), i.jsx("p", {
                        children: t
                    })]
                })]
            })
        }),
        x1 = "c1nhk0wh";

    function w1() {
        g.emit("inject_dialog", [{
            path: "#/promocode",
            element: i.jsx(s1, {}),
            isDialog: !0,
            isAuth: !0
        }, {
            path: "#/referfriend",
            element: i.jsx(h1, {}),
            isDialog: !0
        }, {
            path: "#/referralrule",
            element: i.jsx(y1, {}),
            isDialog: !0
        }, {
            path: "#/commissionrule",
            element: i.jsx(_1, {}),
            isDialog: !0
        }])
    }

    function j1(e) {
        return ({
            data: t
        }) => (S1(), i.jsx("div", {
            className: N1,
            children: i.jsx($e, {
                className: "full-message",
                children: i.jsx("div", {
                    className: "wrap",
                    children: i.jsx(p.Suspense, {
                        fallback: null,
                        children: i.jsx(e, {
                            data: t
                        })
                    })
                })
            })
        }))
    }

    function S1() {
        p.useEffect(() => {
            vp().then(e => {
                I1(V, e)
            })
        }, [V])
    }
    const I1 = Ut((e, t) => {
            function n(r) {
                z.post(`/game/support/share-v2/share/room/like-infos/${r}`).then(a => {
                    a.map(s => t.setItem(s.shareId, {
                        count: s.clickCount,
                        isLike: s.hasClickShare
                    }))
                })
            }
            e.on("room_change", () => {
                t.roomId = e.currentRoom.id, n(e.currentRoom.id)
            }), e.socket.on("share-like", Kt.decodeBind(r => {
                const a = t.getItem(r.shareId);
                t.setItem(r.shareId, {
                    count: r.clickCount,
                    isLike: a.isLike
                })
            }, "json"))
        }),
        N1 = "sed9dh0",
        E1 = () => te("modules/lottery").then(e => e.lotteryNotice()),
        C1 = () => te("modules/lottery").then(e => e.lotteryBetDetail()),
        A1 = () => te("modules/lottery").then(e => e.msgShareCard()),
        R1 = () => te("modules/lottery").then(e => e.sendGift()),
        k1 = () => te("modules/lottery").then(e => e.ticketGiftHistory()),
        P1 = () => te("modules/lottery").then(e => e.receiveGift()),
        T1 = () => te("modules/lottery").then(e => e.newUserGift()),
        D1 = () => te("modules/lottery").then(e => e.bcLotteryNotify()),
        Wa = () => te("modules/lottery").then(e => e.msgBcLottery()),
        L1 = () => te("modules/lottery").then(e => e.bcLotteryBillGift()),
        O1 = () => te("modules/lottery").then(e => e.bcLotteryGuide()),
        B1 = p.lazy(A1),
        M1 = p.lazy(E1),
        W1 = p.lazy(C1),
        F1 = p.lazy(R1),
        U1 = p.lazy(k1),
        z1 = p.lazy(P1),
        V1 = p.lazy(D1),
        G1 = p.lazy(L1),
        H1 = p.lazy(T1),
        K1 = p.lazy(O1),
        $1 = p.lazy(async () => ({
            default: (await Wa()).MsgType13
        })),
        q1 = p.lazy(async () => ({
            default: (await Wa()).MsgType14
        })),
        Y1 = p.lazy(async () => ({
            default: (await Wa()).MsgType15
        }));

    function Z1() {
        return p.useEffect(() => {
            V.addParser("13", ge($1)), V.addParser("14", ge(q1)), V.addParser("15", ge(Y1)), V.addParser("21", ge(j1(B1)))
        }, []), null
    }

    function X1() {
        g.emit("inject_rootNode", i.jsx(M1, {})), g.emit("inject_rootNode", i.jsx(V1, {})), g.emit("inject_rootNode", i.jsx(Z1, {})), g.emit("inject_dialog", [{
            path: "#/bet_detail/:betId",
            element: i.jsx(W1, {}),
            isDialog: !0
        }, {
            path: "#/send_ticket",
            element: i.jsx(F1, {}),
            isDialog: !0
        }, {
            path: "#/history_gift",
            element: i.jsx(U1, {}),
            isDialog: !0
        }, {
            path: "#/gift_ticket/:code",
            element: i.jsx(z1, {}),
            isHook: !0
        }, {
            path: "#/billbcl/:relateId",
            element: i.jsx(G1, {}),
            isDialog: !0,
            isAuth: !0
        }, {
            path: "#/welcome_bonuses/:balls",
            element: i.jsx(H1, {}),
            isAuth: !0,
            isDialog: !0
        }, {
            path: "#/lottery_guide",
            element: i.jsx(K1, {}),
            isDialog: !0,
            isAuth: !0
        }])
    }

    function J1({
        href: e
    }) {
        const t = Ke();
        return mn(() => {
            t(e, {
                replace: !0
            })
        }, [e]), null
    }

    function Q1() {
        const e = g.isMobile();
        g.emit("inject_dialog", [{
            path: "#/chat/:path",
            element: i.jsx(OP, {}),
            isDialog: !0
        }, {
            path: "#/chat",
            element: e ? i.jsx(BP, {}) : i.jsx(J1, {
                href: "#/chat/0"
            }),
            isDialog: e,
            isAuth: !0
        }, {
            path: "#/settings/group-message",
            element: i.jsx(MP, {}),
            isAuth: !0,
            isDialog: !0
        }])
    }
    const ew = Ht(async () => ({
        default: (await xt(() =>
            import ("../chunk-2bddbe1b.js").then(async e => (await e.__tla, e)).then(e => e.j), ["assets/chunk-2bddbe1b.js", "assets/chunk-a4af42e8.js", "assets/chunk-73e80d68.js", "assets/chunk-64278058.js", "assets/chunk-cf010ec4.js", "assets/chunk-5bcb444f.js", "assets/chunk-f82403c7.js", "assets/chunk-4c2df952.js", "assets/MatchIcon.8462f48e.css", "assets/chunk-97fc744c.js", "assets/chunk-07d6de63.js", "assets/chunk-b45bd069.js", "assets/chunk-7a9ca7ff.js", "assets/chunk-654ef298.js", "assets/chunk-5a2826fd.js", "assets/chunk-c5b9a686.js", "assets/chunk-bb0ace6b.js", "assets/chunk-b985edb9.js", "assets/chunk-8d9c7a4a.js", "assets/chunk-f1a029f1.js", "assets/chunk-9a1dea26.js", "assets/chunk-e20af49b.js", "assets/chunk-ebb6ff7f.js", "assets/Emoji.5e52f519.css", "assets/chunk-83c301d9.js", "assets/chunk-0e98d985.js", "assets/SearchWrap.82780ba6.css", "assets/chunk-55136115.js", "assets/GameList.5b340fa3.css", "assets/index.993e9190.css"])).ChatDialog
    }));

    function tw() {
        g.emit("inject_dialog", [{
            path: "#/public-chat",
            element: i.jsx(ew, {}),
            isDialog: !0
        }])
    }
    const Cd = () => te("modules/account");

    function de(e) {
        return p.lazy(async function() {
            const {
                asyncComponents: t
            } = await Cd();
            return t[e]()
        })
    }

    function nw(e) {
        return async (...t) => (await Cd())[e](...t)
    }
    const rw = nw("verifyAccount"),
        aw = de("PrivacyDialog"),
        Ad = de("TwoFactorDialog"),
        sw = de("ResetPasswordDialog"),
        iw = de("ResetPasswordInvalid"),
        Rd = de("EmailDialog"),
        ow = de("SendEmailDialog"),
        cw = de("VerifyPhoneDialog"),
        uw = de("SelfExclusionDialog"),
        kd = de("PhoneDialog"),
        lw = de("KYC"),
        Pd = de("NeedKycDialog"),
        dw = de("Payment"),
        fw = de("VerifyAccountSelectDialog"),
        pw = "basic-kyc-level";

    function mw() {
        const {
            t: e
        } = M();
        return i.jsxs("div", {
            className: gw,
            children: [i.jsx("h2", {
                children: e("Personal Identification Failed")
            }), i.jsx("p", {
                children: e("Basic KYC failed, Please view the details and resubmit when you are ready.")
            }), i.jsxs(Gt, {
                href: "/setting/kyc",
                children: [i.jsx("span", {
                    children: e("View Detail")
                }), i.jsx(Ge, {
                    name: "Arrow"
                })]
            })]
        })
    }

    function hw() {
        fs("kyc-rejected", () => {
            Te(i.jsx(mw, {}), {
                duration: 0
            })
        }), g.emit("inject_dialog", [{
            path: "#/settings/privacy",
            isAuth: !0,
            isDialog: !0,
            element: i.jsx(aw, {})
        }, {
            path: "#/settings/safe",
            isAuth: !0,
            isDialog: !0,
            element: i.jsx(Ad, {})
        }, {
            path: "#/settings/resetPassword",
            element: i.jsx(sw, {}),
            isDialog: !0
        }, {
            path: "#/settings/resetPasswordExpire",
            element: i.jsx(iw, {}),
            isDialog: !0
        }, {
            path: "#/quests/bind2fa",
            element: i.jsx(Ad, {}),
            isDialog: !0,
            isAuth: !0
        }, {
            path: "#/quests/bindemail",
            element: i.jsx(Rd, {}),
            isDialog: !0,
            isAuth: !0
        }, {
            path: "#/quests/bindemail/switch",
            element: i.jsx(Rd, {
                showSwitch: !0
            }),
            isDialog: !0,
            isAuth: !0
        }, {
            path: "#/quests/sendemail",
            element: i.jsx(ow, {}),
            isDialog: !0,
            isAuth: !0
        }, {
            path: "#/settings/verifyphone",
            element: i.jsx(cw, {}),
            isDialog: !0,
            isAuth: !0
        }, {
            path: "#/settings/self-exclusion",
            element: i.jsx(uw, {}),
            isDialog: !0,
            isAuth: !0
        }, {
            path: "#/settings/mobile",
            element: i.jsx(kd, {}),
            isDialog: !0,
            isAuth: !0
        }, {
            path: "#/settings/mobile/switch",
            element: i.jsx(kd, {
                showSwitch: !0
            }),
            isDialog: !0,
            isAuth: !0
        }, {
            path: "#/need-verify/:verifyId",
            element: i.jsx(lw, {}),
            isDialog: !0,
            isAuth: !0
        }, {
            path: "#/settings/verify",
            element: i.jsx(Pd, {
                kyc_level: pw
            }),
            isDialog: !0,
            isAuth: !0
        }, {
            path: "#/settings/verify/:kycLevelId",
            element: i.jsx(Pd, {}),
            isDialog: !0,
            isAuth: !0
        }, {
            path: "#/settings/payment",
            element: i.jsx(dw, {}),
            isDialog: !0,
            isAuth: !0
        }, {
            path: "#/settings/verify-select",
            element: i.jsx(fw, {}),
            isDialog: !0,
            isAuth: !0
        }])
    }
    const gw = "t1dw89a2",
        vw = ge(({
            data: e
        }) => {
            const {
                t
            } = M(), n = Ke();
            return i.jsxs("div", {
                className: se(yw, "raffle-msg"),
                children: [i.jsxs($e, {
                    className: "raffle-msg-content",
                    children: [i.jsx("div", {
                        className: "left-stars",
                        children: i.jsx("div", {
                            className: "stars-wrap",
                            children: i.jsx("img", {
                                alt: "stars",
                                src: dT.stars
                            })
                        })
                    }), i.jsxs("div", {
                        className: "right-text",
                        children: [i.jsx("p", {
                            className: "bt",
                            children: t("Weekly Raffle Is Live!")
                        }), i.jsx("p", {
                            className: "bd",
                            children: t("Check Your Ticket Now For The Extra Bonus!")
                        })]
                    })]
                }), i.jsx("div", {
                    className: "btn-wrap",
                    children: i.jsx(Se, {
                        type: "conic4",
                        onClick: () => n("/promotions/weekly-raffle"),
                        children: t("View ticket")
                    })
                })]
            })
        }),
        yw = "m1uafca8";

    function bw() {
        return p.useEffect(() => {
            V.addParser("19", vw)
        }, []), null
    }
    const _w = p.memo(function() {
            const {
                t: e
            } = M();
            return i.jsxs("div", {
                className: xw,
                children: [i.jsx("p", {
                    className: "n-t",
                    children: e("Weekly Raffle Ending Soon!")
                }), i.jsx("p", {
                    className: "n-d",
                    children: e("Wager More For The Next Ticket And Stand A Chance To Win $5,000!")
                })]
            })
        }),
        xw = "r8wia0b";

    function ww() {
        g.emit("inject_rootNode", i.jsx(bw, {})), fs("raffle-almost-over", () => {
            Te(i.jsx(_w, {}), {
                duration: 0,
                onClick: () => {
                    g.unsafeNavigate("/promotions/weekly-raffle")
                }
            })
        })
    }
    const jw = "/assets/coindrop-more.ff14c8e3.png",
        Sw = "/assets/parachute-fall.193a2437.png",
        Iw = ge(({
            data: e
        }) => i.jsx("div", {
            className: Cw,
            children: i.jsx(Nw, {
                data: e
            })
        }));

    function Nw({
        data: e
    }) {
        const {
            t
        } = M(), n = hn(), r = e.chat.message, a = tT(), s = hs(), o = p.useRef(e);
        o.current = e, p.useEffect(() => {
            const m = h => {
                h === o.current && s()
            };
            return a.on("updateChat", m), () => {
                a.off("updateChat", m)
            }
        }, []);
        const u = m => {
                switch (m) {
                    case 1:
                        return t("Claim ");
                    case 3:
                        return t("Expired");
                    default:
                        return t("Completed")
                }
            },
            l = async () => {
                await U.waitLogin();
                const m = {
                    info: r.message,
                    packageKey: r.packageKey,
                    username: e.name,
                    userId: e.userId,
                    level: e.level,
                    status: r.status,
                    onReceive: () => {
                        r.status = 2, s()
                    }
                };
                n.push(i.jsx(pT, S({}, m)))
            },
            f = r.status == 1,
            d = r.status !== 1;
        return i.jsxs("div", {
            className: Ew,
            onClick: l,
            children: [i.jsx("img", {
                alt: "coindrop-more",
                src: f ? jw : Sw,
                className: f ? "right-img" : "right-open-img"
            }), i.jsx("div", {
                className: `coindrop-status ${d?"finish":""}`,
                children: u(r.status)
            })]
        })
    }
    const Ew = "chh0qzr",
        Cw = "wdgv9vg",
        Aw = ({
            list: e,
            more: t,
            onToggle: n
        }) => {
            const r = t ? e : e.slice(0, 10),
                {
                    t: a
                } = M(),
                s = ot(),
                o = s.bonusCurrencyName !== "BCD",
                u = ys();
            return i.jsxs("div", {
                className: se(Rw, "chatmsg-user-list"),
                children: [r.map((l, f) => i.jsxs("div", {
                    className: "item",
                    children: [i.jsxs(Gt, {
                        className: "cl-primary winner-name ellipsis",
                        href: `#/user/profile/${l.userId}`,
                        children: ["@", l.userName]
                    }), l.currencyName ? o ? i.jsx(it.CoinFormat, {
                        name: s.bonusCurrencyName,
                        amount: u.local2amount(new pr(l.amount), s.bonusCurrencyName),
                        icon: !0
                    }) : i.jsx(it.CoinFormat, {
                        name: l.currencyName,
                        amount: parseFloat(l.amount),
                        icon: !0
                    }) : i.jsxs("div", {
                        className: "spin",
                        children: [i.jsx("img", {
                            src: WP.spin,
                            alt: ""
                        }), " 1 Spin"]
                    })]
                }, f)), e.length >= 10 && i.jsxs("div", {
                    className: `hide-list-btn ${t?"show_list":""}`,
                    onClick: () => n(!t),
                    children: [i.jsx("span", {
                        className: "show_txt",
                        children: a(t ? "Show less" : "Show more")
                    }), i.jsx(Ge, {
                        name: "Arrow"
                    })]
                })]
            })
        },
        Rw = "wt0m7",
        Je = ge(({
            data: e
        }) => {
            const {
                t
            } = M(), n = Ke(), r = nT(), a = e.chat.message;
            let s, o = a,
                u = !1,
                l = !1,
                f = {};
            switch (e.chat.subType) {
                case "2":
                    s = i.jsx("div", {
                        children: t("Who hit {{coco}}:", {
                            coco: Y.mascot
                        })
                    });
                    break;
                case "3":
                    s = i.jsx("span", {
                        children: t("Rained And Left a Message: ")
                    });
                    break;
                case "4":
                    s = i.jsx("div", {
                        children: t("The leaderboard bonus has been granted!")
                    });
                    break;
                case "5":
                    s = i.jsx("div", {
                        children: t("The roll bonus has been awarded:")
                    });
                    break;
                case "6":
                    s = i.jsx(kw, {
                        userId: a.userId,
                        userName: a.userName,
                        remark: a.remark
                    }), o = a.winnerInfo;
                    break;
                case "11":
                    s = i.jsxs("div", {
                        children: [i.jsxs("span", {
                            className: "cl-primary",
                            children: [Y.buildHost, " "]
                        }), i.jsx("span", {
                            children: t("Rained And Left a Message: ")
                        }), i.jsxs("span", {
                            className: "level-message",
                            children: ['" ', a.remark ? a.remark : t("Rainer Rainer, Chicken Dinner"), ' "']
                        })]
                    }), o = a.users;
                    break;
                case "16":
                    s = i.jsx(hT, {
                        gameUrl: a.info.gameUrl
                    }), o = a.winnerInfoList, u = !0, f = {
                        gameId: a.info.gameId,
                        gameUnique: a.info.gameUnique
                    };
                    break;
                case "17":
                    s = i.jsx(mT, {
                        userName: a.info.userName || "",
                        userId: a.info.userId || 0,
                        amount: a.info.profitAmountUsd || "",
                        fullName: a.info.fullName || "",
                        gameUrl: a.info.gameUrl || ""
                    }), o = a.winnerInfoList, l = !0, f = S({}, a.info);
                    break
            }
            const d = async h => {
                    h && await e.loadFull(), e.state = h ? 1 : 0, e.id = String(e.id).replace(/(_.*$)|$/, `_${Number(h)}`), r.chatList = r.chatList.concat()
                },
                m = l || u;
            return i.jsxs($e, {
                className: se(Pw, m && "rain-sp"),
                children: [i.jsx("div", {
                    className: "rain-message",
                    children: i.jsx(p.Suspense, {
                        children: s
                    })
                }), i.jsxs("div", {
                    className: se(Tw, "full-message"),
                    children: [i.jsx(Aw, {
                        list: o,
                        more: e.state === 1,
                        onToggle: d
                    }), u && i.jsxs("button", {
                        className: "gdbtn",
                        onClick: () => {
                            g.emit("openAllPlayers", {
                                gameUnique: f.gameUnique,
                                gameId: f.gameId
                            })
                        },
                        children: [t("Game ID"), ": ", i.jsx("p", {
                            className: "w",
                            children: f.gameId
                        }), i.jsx(Ge, {
                            name: "Arrow"
                        })]
                    }), l && i.jsxs("button", {
                        className: "gdbtn",
                        onClick: () => {
                            n(`#/sd/${f.shareId}`)
                        },
                        children: [t("Bet ID"), ": ", i.jsx("p", {
                            className: "w",
                            children: f.betId
                        }), i.jsx(Ge, {
                            name: "Arrow"
                        })]
                    }), !m && i.jsx("div", {
                        className: "congratulations",
                        children: t("Congratulations!")
                    })]
                })]
            })
        }),
        kw = ({
            userId: e,
            userName: t,
            remark: n
        }) => {
            const {
                t: r
            } = M();
            return i.jsxs(i.Fragment, {
                children: [i.jsx(it.UserInfo, {
                    userId: e,
                    name: t,
                    avatar: !1
                }), i.jsx("span", {
                    style: {
                        marginLeft: "2px"
                    },
                    children: r("Rained And Left a Message: ")
                }), i.jsxs("span", {
                    className: "level-message",
                    children: ['"', n || r("Rainer Rainer, Chicken Dinner"), '"']
                })]
            })
        },
        Pw = "rep99u4",
        Tw = "md8l7du",
        Dw = "/assets/super_share.c306605e.png",
        Lw = "/assets/mega_share.298a2740.png",
        Ow = "/assets/lucky_share.fcc7933a.png",
        Bw = ge(({
            data: e
        }) => {
            const t = e.chat.message,
                n = Ke(),
                {
                    t: r
                } = M(),
                a = p.useCallback(() => {
                    n("#/spin")
                }, []);
            let s = Ow,
                o = "lucky";
            return t.level >= 5 ? (s = Lw, o = "mega") : t.level >= 3 && (s = Dw, o = "super"), i.jsxs($e, {
                className: Mw,
                children: [i.jsxs("div", {
                    className: se("cont", o),
                    children: [i.jsx("img", {
                        className: "spin-img",
                        src: s,
                        alt: ""
                    }), i.jsx("div", {
                        className: "star-item item-1"
                    }), i.jsx("div", {
                        className: "star-item item-2"
                    }), i.jsx("div", {
                        className: "star-item item-3"
                    }), i.jsx("div", {
                        className: "spin-tit",
                        children: r("CHECK MY SPIN  BONUS!")
                    }), i.jsx("div", {
                        className: "amount-cont",
                        children: i.jsx(it.CoinFormat, {
                            icon: !0,
                            sign: !0,
                            name: t.currencyName,
                            amount: Number(t.amount)
                        })
                    })]
                }), i.jsxs(Se, {
                    onClick: a,
                    type: "conic4",
                    children: [r("Spin Now"), "!"]
                })]
            })
        }),
        Mw = "sj1towr";

    function Ww(e) {
        return !e.startsWith("/")
    }
    const Fw = ge(({
            data: e
        }) => {
            const t = e.chat.message,
                n = Ke(),
                r = t.link || "",
                a = Ww(r),
                s = rs(t.content);
            return i.jsxs($e, {
                className: Uw,
                children: [i.jsxs("div", {
                    className: "cont",
                    children: [i.jsx("div", {
                        className: "img-wraps",
                        children: i.jsx("img", {
                            alt: "img",
                            src: t.imgUrl
                        })
                    }), t.content && i.jsx("p", {
                        dangerouslySetInnerHTML: {
                            __html: s.replace(/\n/g, "<br />")
                        }
                    })]
                }), r && i.jsx("div", {
                    className: "btn-link",
                    children: i.jsx(Se, {
                        type: "conic4",
                        onClick: () => {
                            a ? window.open(r) : n(r)
                        },
                        children: t.linkText || ""
                    })
                })]
            })
        }),
        Uw = "s1ia3squ",
        zw = () => i.jsxs("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            className: "sc-jcVebW XXWmM icon",
            viewBox: "0 0 32 32",
            children: [i.jsx("path", {
                fill: "var(--color1, #455a64)",
                d: "M15.778 15.808H3.911a11.867 11.867 0 1023.735 0 11.868 11.868 0 10-23.735 0h11.867z",
                opacity: ".002"
            }), i.jsx("path", {
                fill: "var(--color2, #6300d8)",
                d: "M3.911 15.749a11.8 11.8 0 01.902-4.484l10.965 4.542-10.965 4.542a11.822 11.822 0 01-.902-4.542z"
            }), i.jsx("path", {
                fill: "var(--color3, #f8c32f)",
                d: "M7.429 7.371a11.911 11.911 0 013.81-2.537l4.539 10.973-10.965-4.542a11.915 11.915 0 012.575-3.854z"
            }), i.jsx("path", {
                fill: "var(--color4, #c201cc)",
                d: "M15.837 3.932c1.54.007 3.057.31 4.481.902l-4.539 10.973L11.24 4.834a11.79 11.79 0 014.539-.903z"
            }), i.jsx("path", {
                fill: "var(--color3, #f8c32f)",
                d: "M20.317 4.834c1.442.6 2.747 1.473 3.851 2.577l.04.041a11.902 11.902 0 012.535 3.813l-10.965 4.542z"
            }), i.jsx("path", {
                fill: "var(--color5, #ce2e41)",
                d: "M26.743 11.265c.599 1.443.902 2.981.902 4.542v.059a11.8 11.8 0 01-.902 4.484l-10.965-4.542z"
            }), i.jsx("path", {
                fill: "var(--color6, #3b4a53)",
                d: "M26.743 20.35a11.915 11.915 0 01-2.575 3.854l-.041.04a11.911 11.911 0 01-3.81 2.537l-4.539-10.973z"
            }), i.jsx("path", {
                fill: "var(--color7, #7ee452)",
                d: "M20.317 26.781a11.79 11.79 0 01-4.539.903h-.059a11.79 11.79 0 01-4.481-.902l4.539-10.973z"
            }), i.jsx("path", {
                fill: "var(--color8, #44bde8)",
                d: "M7.348 24.163a11.902 11.902 0 01-2.535-3.813l10.965-4.542-4.539 10.973a11.908 11.908 0 01-3.851-2.577z"
            }), i.jsx("path", {
                fill: "var(--color9, #fcd049)",
                d: "M15.973 2.01c7.731 0 13.999 6.263 13.999 13.99s-6.268 13.99-13.999 13.99C8.242 29.99 1.974 23.727 1.974 16S8.242 2.01 15.973 2.01zm0 2.423C9.58 4.433 4.398 9.612 4.398 16S9.58 27.567 15.973 27.567c6.393 0 11.575-5.179 11.575-11.567S22.366 4.433 15.973 4.433z"
            }), i.jsx("path", {
                fill: "var(--color9, #fcd049)",
                d: "M19.979 16.042a3.946 3.946 0 11-7.893 0 3.946 3.946 0 017.893 0z"
            })]
        }),
        Td = ge(({
            data: e
        }) => {
            const t = e.chat.message;
            return e.chat.subType === "10" ? i.jsx(Vw, {
                msg: t
            }) : i.jsx(Gw, {
                msg: t
            })
        }),
        Vw = ({
            msg: e
        }) => i.jsxs($e, {
            className: Hw,
            children: [i.jsx("span", {
                className: "cl-primary",
                children: Y.buildHost
            }), i.jsxs("span", {
                className: "tip-spin",
                children: ["\xA0sent ", i.jsx(zw, {}), " 1 Spin"]
            }), "\xA0to\xA0", i.jsxs(Gt, {
                href: `#/user/profile/${e.users[0].userId}`,
                className: "cl-primary",
                children: ["@", e.users[0].userName]
            })]
        }),
        Gw = ({
            msg: e
        }) => {
            const {
                t
            } = M(), n = p.useRef(null), r = hs();
            return p.useEffect(() => {
                const a = n.current;
                !e.isAne && a && (e.isAne = !0, r())
            }, [e]), i.jsxs($e, {
                ref: n,
                className: se(Kw, e.isAne && "ane"),
                children: [i.jsx("span", {
                    className: "tipped",
                    children: t("I tipped")
                }), i.jsxs(Gt, {
                    className: "cl-primary",
                    href: `#/user/profile/${e.toUserId}`,
                    children: ["@", e.toUserName]
                }), e.remark && i.jsx("span", {
                    className: "remark",
                    children: e.remark
                }), i.jsxs("div", {
                    className: "msg-cont",
                    children: [i.jsx(it.CoinIcon, {
                        name: e.currencyName
                    }), " ", e.tip, " ", ps.getAlias(e.currencyName)]
                })]
            })
        },
        Hw = "m73seex",
        Kw = "m9ka2ex",
        $w = ge(({
            data: e
        }) => {
            const {
                t
            } = M();
            return i.jsx($e, {
                className: qw,
                children: i.jsxs("div", {
                    children: [i.jsxs("div", {
                        className: "header",
                        children: [i.jsx(Ge, {
                            name: "Info"
                        }), i.jsx("span", {
                            children: t("Warning")
                        })]
                    }), i.jsxs(ds, {
                        i18nKey: "trans.warning",
                        children: ["please do not believe those who contact you from other webs/apps. If you encounter problems, please contact", i.jsxs("span", {
                            onClick: () => {
                                g.emit("live_support", !0)
                            },
                            className: "cl-primary",
                            children: [" ", "Live Support", " "]
                        }), "on BC website and be careful of scams."]
                    })]
                })
            })
        }),
        qw = "s1fda5en",
        Yw = X.memo(function() {
            return p.useEffect(() => {
                V.addParser("2", Je, 4), V.addParser("3", Je, 4), V.addParser("4", Je, 4), V.addParser("5", Je, 4), V.addParser("6", Je, 4), V.addParser("8", Iw, 6), V.addParser("10", Td), V.addParser("11", Je, 4), V.addParser("12", Td), V.addParser("16", Je), V.addParser("17", Je), V.addParser("18", Bw), V.addParser("20", Fw), V.addParser("22", $w)
            }, []), i.jsxs(i.Fragment, {
                children: [vr.createPortal(i.jsx(gT, {}), document.body), vr.createPortal(i.jsx(vT, {}), document.body), vr.createPortal(i.jsx(yT, {}), document.body), i.jsx(bT, {}), i.jsx(_T, {}), i.jsx(Ie.Source, {
                    id: "bonus-sidebar-list-enter",
                    children: i.jsx(xT, {})
                }), i.jsx(Ie.Source, {
                    id: "bonus-sidebar-link-enter",
                    children: i.jsx(wT, {})
                }), i.jsx(Ie.Source, {
                    id: "bonus-mobile-header-enter",
                    children: i.jsx(jT, {})
                }), i.jsx(Ie.Source, {
                    id: "bonus-mobile-unclaim-number-enter",
                    children: i.jsx(ST, {})
                })]
            })
        });

    function Zw() {
        g.emit("inject_rootNode", i.jsx(Yw, {})), g.emit("inject_rootNode", i.jsx(IT, {})), g.emit("inject_dialog", [{
            path: "#/bcd/rule",
            isDialog: !0,
            element: i.jsx(NT, {})
        }, {
            path: "#/bonus/dashboard",
            isDialog: !0,
            isAuth: !0,
            element: i.jsx(ET, {})
        }, {
            path: "#/shitlink/:code",
            element: i.jsx(yp, {}),
            isDialog: !0
        }, {
            path: "#/bonuslink/:code",
            element: i.jsx(yp, {}),
            isHook: !0
        }, {
            path: "#/user/coindrop_send",
            element: i.jsx(CT, {}),
            isAuth: !0,
            isDialog: !0
        }, {
            path: "#/newuser/gamelist/:currency/:rewardBonusId?",
            isDialog: !0,
            element: i.jsx(AT, {}),
            isAuth: !0
        }, {
            path: "#/newuser/setcurrency",
            element: i.jsx(RT, {}),
            isAuth: !0,
            isDialog: !0
        }, {
            path: "#/bonus/rain",
            element: i.jsx(kT, {}),
            isDialog: !0
        }, {
            path: "#/user/rain",
            element: i.jsx(PT, {}),
            isDialog: !0,
            isAuth: !0
        }, {
            path: "#/recharge",
            element: i.jsx(TT, {}),
            isDialog: !0
        }, {
            path: "#/bonus/roll",
            element: i.jsx(DT, {}),
            isAuth: !0,
            isDialog: !0
        }, {
            path: "#/spin",
            isDialog: !0,
            element: i.jsx(LT, {})
        }, {
            path: "#/task/*",
            element: i.jsx(bp, {}),
            isAuth: !0,
            isDialog: !0
        }, {
            path: "#/quests/*",
            element: i.jsx(bp, {}),
            isAuth: !0,
            isDialog: !0
        }, {
            path: "#/tip/:userid/:username",
            element: i.jsx(OT, {}),
            isAuth: !0,
            isDialog: !0
        }, {
            path: "#/vip",
            isDialog: !0,
            element: i.jsx(BT, {}),
            isAuth: !0
        }, {
            path: "#/vip-level",
            isDialog: !0,
            element: i.jsx(MT, {})
        }, {
            path: "#/vip-offer",
            isDialog: !0,
            element: i.jsx(WT, {})
        }])
    }
    const Xw = () => te("modules/account");

    function ye(e) {
        return p.lazy(async function() {
            try {
                const {
                    asyncComponents: t
                } = await Xw();
                return t[e]()
            } catch (t) {
                return {
                    default: () => {
                        throw t
                    }
                }
            }
        })
    }
    const Jw = ye("Achieve"),
        Qw = ye("UserAchieve"),
        ej = ye("EditAvatar"),
        tj = ye("UserProfile"),
        nj = ye("EditNickName"),
        rj = ye("Invite"),
        aj = ye("Statistics"),
        sj = ye("VerifyPop"),
        ij = ye("SharePop"),
        oj = ye("UserEnter"),
        cj = ye("VerifyStatusIcon");

    function uj() {
        g.emit("inject_rootNode", i.jsx(Ie.Source, {
            id: "pc-user-setting-enter",
            children: i.jsx(oj, {})
        })), g.emit("inject_rootNode", i.jsx(Ie.Source, {
            id: "settings-mobile-security-enter",
            children: i.jsx(cj, {})
        })), g.emit("inject_dialog", [{
            path: "#/achieve",
            element: i.jsx(Jw, {}),
            isAuth: !0,
            isDialog: !0
        }, {
            path: "#/user/achieve/:userId",
            element: i.jsx(Qw, {}),
            isDialog: !0
        }, {
            path: "#/user/edit_avatar",
            element: i.jsx(ej, {}),
            isDialog: !0
        }, {
            path: "#/user/edit_nickname",
            element: i.jsx(nj, {}),
            isDialog: !0
        }, {
            path: "#/user/profile/:userId",
            element: i.jsx(tj, {}),
            isDialog: !0
        }, {
            path: "#/user/invite",
            element: i.jsx(rj, {}),
            isDialog: !0
        }, {
            path: "#/user/statistics",
            element: i.jsx(aj, {}),
            isDialog: !0
        }, {
            path: "#/verify_representative",
            element: i.jsx(sj, {}),
            isDialog: !0
        }, {
            path: "#/social_share/:fullName",
            element: i.jsx(ij, {}),
            isDialog: !0
        }])
    }

    function lj(e) {
        try {
            return z.post("/home/system-notice/list/v2/", {
                size: 20,
                appNo: 1,
                userId: U.state.userId,
                showUnread: e
            })
        } catch (t) {
            return new Promise(n => {
                n({
                    noticeList: [],
                    unreadCount: 0
                })
            })
        }
    }

    function dj(e) {
        return z.get(`/home/system-notice/get-one/${e}/`, {
            cache: !0
        })
    }

    function fj() {
        return z.post("/home/system-notice/read-all/", {
            appNo: 1,
            userId: U.state.userId
        })
    }

    function pj() {
        return z.get("/activity/reward/list/")
    }

    function mj(e) {
        return z.post(`/activity/reward/receive/${e}/`)
    }

    function hj(e, t) {
        const n = e || 1;
        return z.post("/comment/reply/unread/list/", {
            page: n,
            pageSize: 20,
            showUnread: t
        })
    }

    function gj() {
        z.get("/comment/reply/read/all/")
    }

    function vj(e) {
        z.post("/home/system-notice/delete-notice/", {
            afficheId: e
        })
    }

    function yj(e) {
        z.post(`/comment/del/${e}/`, {})
    }

    function bj(e) {
        z.post(`/comment/reply/del/${e}/`, {})
    }
    let Dd, Ld;
    Le = {
        getSystemNotice: lj,
        getNoticeByAfficheId: dj,
        clearSystemNotice: fj,
        getRewardList: pj,
        receiveReward: mj,
        getCommentList: hj,
        commentReadAll: gj,
        deleteNotice: vj,
        deleteComment: yj,
        deleteReplyComment: bj
    }, {
        useProxy: Dd,
        proxy: Ld
    } = cp;
    class _j extends Xf {
        constructor(n) {
            super(n);
            Ya(this, "initData");
            this.initData = this.initFn(), U.waitLogin().then(() => {
                setTimeout(() => {
                    this.initFn()
                }, 1500)
            })
        }
        async initFn() {
            if (await U.initData, !U.state.login) return U.waitLogin().then(() => this.initFn()), this.state;
            this.setState({
                noticeUnreadStatus: localStorage.getItem("noticeUnreadStatus") === "on",
                commentUnreadStatus: localStorage.getItem("commentUnreadStatus") === "on"
            });
            try {
                const n = await Promise.all([Le.getSystemNotice(this.state.noticeUnreadStatus), Le.getCommentList(1, this.state.commentUnreadStatus)]);
                if (n && n.length === 2) try {
                    const r = S({}, this.state);
                    this.setState(et(S({}, r), {
                        systemData: n[0],
                        systemUnreadCount: n[0].unreadCount,
                        commentData: n[1],
                        commentUnreadCount: Number(n[1].extra || 0)
                    }))
                } catch (r) {}
            } catch (n) {}
            return this.state
        }
        clearSystemNotice(n = !1) {
            (this.state.currentType === 0 || n) && this.state.systemUnreadCount > 0 && Le.clearSystemNotice().then(() => {
                let r = S({}, this.state.systemData);
                r.unreadCount = 0, r.noticeList = this.state.systemData.noticeList.map(a => (a.isRead = 1, a)), this.setState({
                    systemData: r,
                    systemUnreadCount: 0
                })
            }).catch(Te)
        }
        openNotice(n = !0) {
            n && this.setState({
                isOpen: !0,
                currentType: 0
            }), this.initFn()
        }
        commentReadAll() {
            const n = S({}, this.state.commentData);
            n.list = n.list.map(r => (r.readStatus = 1, r)), this.setState({
                commentData: n,
                commentUnreadCount: 0
            }), Le.commentReadAll()
        }
        switchNoticeUnreadStatus() {
            this.setState({
                noticeUnreadStatus: !this.state.noticeUnreadStatus
            }), localStorage.setItem("noticeUnreadStatus", this.state.noticeUnreadStatus ? "on" : "off"), Le.getSystemNotice(this.state.noticeUnreadStatus).then(n => {
                this.setState({
                    systemData: n
                })
            })
        }
        switchCommentUnreadStatus() {
            this.setState({
                commentUnreadStatus: !this.state.commentUnreadStatus
            }), localStorage.setItem("commentUnreadStatus", this.state.commentUnreadStatus ? "on" : "off"), Le.getCommentList(1, this.state.commentUnreadStatus).then(n => {
                this.setState({
                    commentData: n
                })
            })
        }
        deleteNoticeItem(n) {
            const r = S({}, this.state.systemData);
            r.noticeList = r.noticeList.filter(a => a.afficheId !== n), this.setState({
                systemData: r
            }), Le.deleteNotice(n)
        }
        deleteCommentItem(n) {
            const r = S({}, this.state.commentData);
            r.list = r.list.filter(a => a.id !== n), this.setState({
                commentData: r
            }), Le.deleteReplyComment(n)
        }
    }
    yn = new _j(Ld({
        systemUnreadCount: 0,
        commentUnreadCount: 0,
        systemData: {
            noticeList: [],
            unreadCount: 0
        },
        commentData: {
            page: 1,
            pageSize: 20,
            total: 0,
            totalPage: 1,
            list: [],
            extra: 0
        },
        noticeUnreadStatus: !1,
        commentUnreadStatus: !1,
        isOpen: !1,
        currentType: 0,
        loadMoreLoading: !1
    })), _r = function() {
        return Dd(yn.state)
    };
    const Od = p.lazy(() => xt(() =>
            import ("../index.2efcb50e.js").then(async e => (await e.__tla, e)), ["assets/index.2efcb50e.js", "assets/chunk-a4af42e8.js", "assets/chunk-73e80d68.js", "assets/chunk-64278058.js", "assets/chunk-cf010ec4.js", "assets/chunk-5bcb444f.js", "assets/chunk-83c301d9.js", "assets/chunk-2bddbe1b.js", "assets/chunk-f82403c7.js", "assets/chunk-4c2df952.js", "assets/MatchIcon.8462f48e.css", "assets/chunk-97fc744c.js", "assets/chunk-07d6de63.js", "assets/chunk-b45bd069.js", "assets/chunk-7a9ca7ff.js", "assets/chunk-654ef298.js", "assets/chunk-5a2826fd.js", "assets/chunk-c5b9a686.js", "assets/chunk-bb0ace6b.js", "assets/chunk-b985edb9.js", "assets/chunk-8d9c7a4a.js", "assets/chunk-f1a029f1.js", "assets/chunk-9a1dea26.js", "assets/chunk-e20af49b.js", "assets/chunk-ebb6ff7f.js", "assets/Emoji.5e52f519.css", "assets/chunk-0e98d985.js", "assets/SearchWrap.82780ba6.css", "assets/chunk-55136115.js", "assets/GameList.5b340fa3.css", "assets/index.993e9190.css", "assets/chunk-07f95b47.js", "assets/chunk-cf8d333b.js", "assets/chunk-4142ea66.js", "assets/chunk-f0854543.js", "assets/pages/help/index.page.f9ba9b3b.js", "assets/chunk-7459b96e.js", "assets/chunk-87132790.js", "assets/GroupPageLayout.6f234913.css", "assets/chunk-1371f12f.js", "assets/chunk-1e54fc0c.js", "assets/chunk-569cb855.js", "assets/PostComment.9afc074a.css", "assets/index.3eb867c3.css"])),
        xj = function() {
            const e = ot(),
                t = _r(),
                {
                    systemUnreadCount: n,
                    commentUnreadCount: r
                } = t,
                a = FT(),
                s = a.chatOrNtice === "notice",
                o = () => {
                    a.chatOrNtice = s ? void 0 : "notice"
                };
            return e.login ? i.jsxs(i.Fragment, {
                children: [i.jsx(Ie.Source, {
                    id: "notice-enter-pc-header",
                    children: i.jsx("button", {
                        className: se(Ej, "notice-enter"),
                        onClick: () => {
                            g.emit("ad_track", "upperbar_click", {
                                button_name: "notification"
                            }), o()
                        },
                        children: i.jsxs("div", {
                            className: `notice-btn ${s?"active":""}`,
                            children: [i.jsx(Ge, {
                                name: "Notice"
                            }), i.jsx(Gf, {
                                num: n || r
                            })]
                        })
                    })
                }), i.jsx(Ie.Source, {
                    id: "notice-list-enter",
                    children: i.jsx(p.Suspense, {
                        fallback: null,
                        children: i.jsx(Od, {})
                    })
                })]
            }) : null
        },
        wj = function() {
            const e = _r(),
                {
                    systemUnreadCount: t,
                    commentUnreadCount: n
                } = e;
            return t > 0 || n > 0 ? i.jsx(Ie.Source, {
                id: "notice-mobile-dont-enter",
                children: i.jsx("div", {
                    className: "count-number",
                    children: t || n
                })
            }) : null
        };

    function jj() {
        const {
            t: e
        } = M();
        return i.jsx(ht, {
            title: e("Notification"),
            className: se("notice-dialog", Nj),
            children: i.jsx(Od, {})
        })
    }

    function Sj() {
        return i.jsxs(i.Fragment, {
            children: [i.jsx(xj, {}), i.jsx(wj, {})]
        })
    }

    function Ij() {
        function e(t) {
            return z.get(`/home/system-notice/get-one/${t}/`, {
                cache: !0
            })
        }
        yt.on("affiche-message", Kt.decodeBind(t => {
            t.systemFlag && e(t.afficheId).then(n => {
                const r = n.contentV2.filter(a => a.contentType === 1);
                r.length && (Te(i.jsx("div", {
                    className: Cj,
                    children: r[0].content
                }), {
                    title: n.title,
                    duration: 0,
                    onClick: () => {
                        U.state.login && yn.openNotice(!0)
                    }
                }), yn.initFn())
            })
        }, "json")), g.emit("inject_rootNode", i.jsx(Sj, {})), g.emit("inject_dialog", [{
            path: "#/notification",
            element: i.jsx(jj, {}),
            isDialog: !0,
            isAuth: !0
        }])
    }
    const Nj = "nxu9d47",
        Ej = "no6xwm8",
        Cj = "w1qqsebg",
        Aj = function({
            tab: e,
            closeFn: t
        }) {
            const {
                t: n
            } = M(), r = hn(), a = vs(), [s, o] = p.useState(e), {
                isKenyaHost: u,
                isNgHost: l,
                isIdHost: f
            } = W.getHostType(Y.host), d = [{
                label: n("Language"),
                value: () => i.jsx(Rj, {
                    closeFn: t
                })
            }];
            return !u && !l && !f && d.push({
                label: n("View in fiat"),
                value: () => i.jsx(kj, {
                    closeFn: t
                })
            }), i.jsxs("div", {
                className: Pj,
                children: [!a && i.jsx(fr, {
                    className: "close-icon",
                    onClick: r.close
                }), i.jsx(Qf, {
                    type: "line",
                    className: "lan-fiat-tabs",
                    value: s,
                    tabs: d,
                    onChange: o
                })]
            })
        },
        Rj = function({
            closeFn: e
        }) {
            const {
                lang: t
            } = ip(), n = p.useMemo(() => Object.entries(XP).map(([a, s]) => ({
                label: s[0],
                value: a
            })), []), r = ms();
            return i.jsx(gt, {
                className: "lang-list-wrap",
                children: n.map(a => {
                    const s = a.value == t;
                    return i.jsxs("button", {
                        className: se("lang-fiat-item", s && "select"),
                        onClick: () => {
                            r(a.value), e && e()
                        },
                        children: [i.jsx("div", {
                            className: "lf-inner",
                            children: i.jsx("span", {
                                children: a.label
                            })
                        }), i.jsx("div", {
                            className: "hover-bg"
                        })]
                    }, a.value)
                })
            })
        },
        kj = function({
            closeFn: e
        }) {
            const {
                t
            } = M(), n = bs(), r = op(), a = gs(), {
                isKenyaHost: s,
                isBrHost: o,
                isNgHost: u,
                isIdHost: l
            } = W.getHostType(Y.host), f = p.useMemo(() => Object.values(Y.localCurrencys).map(({
                label: h,
                value: v,
                alias: _
            }) => ({
                label: h,
                value: v,
                alias: _
            })), []), d = !n.enableLocaleCurrency, m = p.useCallback(function(h) {
                const v = r[h];
                v && !o && !s && !u && !l && (n.currencyName = h, v.displayStatus = 1)
            }, []);
            return i.jsxs(gt, {
                className: "fiat-list-wrap",
                children: [i.jsx("div", {
                    className: "none-sp",
                    children: i.jsxs("button", {
                        className: se("lang-fiat-item", d && "select"),
                        onClick: () => {
                            n.enableLocaleCurrency = !1, e && e()
                        },
                        children: [i.jsxs("div", {
                            className: "lf-inner",
                            children: [i.jsx("img", {
                                className: "coin-icon",
                                src: a ? FP : UP,
                                alt: "none"
                            }), i.jsx("span", {
                                children: t("None")
                            })]
                        }), i.jsx("div", {
                            className: "hover-bg"
                        })]
                    })
                }), i.jsx("div", {
                    className: "fiat-flex-list",
                    children: f.map(h => {
                        const v = h.value == n.localeCurrencyName && n.enableLocaleCurrency;
                        return i.jsxs("button", {
                            className: se("lang-fiat-item", v && "select"),
                            onClick: () => {
                                n.localeCurrencyName = h.value, n.enableLocaleCurrency = !0, m(h.value), e && e()
                            },
                            children: [i.jsxs("div", {
                                className: "lf-inner",
                                children: [i.jsx(it.CoinIcon, {
                                    name: h.label
                                }), i.jsx("span", {
                                    children: h.label
                                }), i.jsx("span", {
                                    className: "alias",
                                    children: h.alias || ""
                                })]
                            }), i.jsx("div", {
                                className: "hover-bg"
                            })]
                        }, h.value)
                    })
                })]
            })
        },
        Pj = "l1by5rnf";

    function Tj() {
        Ij(), g.on("open-language-fiat", e => {
            He.push(i.jsx(Aj, {
                tab: e || 0,
                closeFn: He.close
            }))
        })
    }
    const Dj = ge(({
        data: e
    }) => (Lj(), i.jsx("div", {
        className: Bj,
        children: i.jsxs($e, {
            className: "full-message",
            children: [i.jsx("div", {
                className: "share-message",
                children: e.chat.message.shareChatContent
            }), i.jsx("div", {
                className: "wrap",
                children: i.jsx(p.Suspense, {
                    fallback: null,
                    children: i.jsx(rT, {
                        data: e
                    })
                })
            })]
        })
    })));

    function Lj() {
        p.useEffect(() => {
            vp().then(e => {
                Oj(V, e)
            })
        }, [V])
    }
    const Oj = Ut((e, t) => {
            function n(r) {
                z.post(`/game/support/share-v2/share/room/like-infos/${r}`).then(a => {
                    a.map(s => t.setItem(s.shareId, {
                        count: s.clickCount,
                        isLike: s.hasClickShare
                    }))
                })
            }
            e.on("room_change", () => {
                t.roomId = e.currentRoom.id, n(e.currentRoom.id)
            }), e.socket.on("share-like", Kt.decodeBind(r => {
                const a = t.getItem(r.shareId);
                t.setItem(r.shareId, {
                    count: r.clickCount,
                    isLike: a.isLike
                })
            }, "json"))
        }),
        Bj = "s1q04a0m",
        Mj = async e => (await xt(() =>
            import ("../chunk-a4cceeaf.js").then(t => t.a), ["assets/chunk-a4cceeaf.js", "assets/chunk-a4af42e8.js", "assets/chunk-73e80d68.js", "assets/chunk-64278058.js", "assets/chunk-cf010ec4.js", "assets/chunk-569cb855.js", "assets/chunk-5bcb444f.js", "assets/chunk-ebb6ff7f.js", "assets/Emoji.5e52f519.css", "assets/PostComment.9afc074a.css", "assets/ReplyPop.78b08cc2.css"])).openCommentReply(e);

    function Wj() {
        return p.useEffect(() => {
            g.on("getPublicChatRoomId", e => {
                e(V.currentRoom.id)
            }), V.addParser("9", Dj, 20)
        }, []), null
    }

    function Fj() {
        window.app = g, g.emit("inject_rootNode", i.jsx(Wj, {})), g.emit("inject_rootNode", i.jsx(aT, {})), g.on("openGameDetailWithData", sT), g.on("openGameDetail", iT), g.on("openAllPlayers", oT), g.on("openCommentReply", Mj), g.emit("inject_dialog", [{
            path: "#/sd/:betId",
            element: i.jsx(cT, {}),
            isDialog: !0
        }, {
            path: "#/set_seed/:gameName",
            element: i.jsx(uT, {}),
            isDialog: !0
        }, {
            path: "#/validate/:gameUnique",
            element: i.jsx(lT, {}),
            isDialog: !0
        }])
    }
    const Uj = X.memo(function() {
            const {
                t: e
            } = M(), t = hn(), n = () => {
                t.close(), localStorage.setItem("isOlder18", "older")
            };
            return i.jsxs(Zf, {
                className: Gj,
                children: [i.jsx("div", {
                    className: "header-icon",
                    children: "18+"
                }), i.jsx("div", {
                    className: "title",
                    children: e("Are you 18 or older?")
                }), i.jsx("p", {
                    children: e("You need to be aged 18 or older to use our website. Please confirm your age by clicking below.")
                }), i.jsx(Se, {
                    type: "conic",
                    onClick: n,
                    children: e("I am 18 years or older")
                }), i.jsx("span", {
                    className: "under-btn",
                    onClick: () => {
                        t.push(i.jsx(zj, {}))
                    },
                    children: e("I am under 18")
                })]
            })
        }),
        zj = X.memo(function() {
            const {
                t: e
            } = M();
            return i.jsx("div", {
                className: Hj,
                children: i.jsx(Hf, {
                    type: "ban",
                    children: e("Sorry, we cannot provide services to users under the age of 18.")
                })
            })
        }),
        Vj = X.memo(function() {
            const e = hn(),
                t = ot(),
                {
                    isSkHost: n,
                    isNgHost: r,
                    isIdHost: a
                } = W.getHostType(Y.host);
            return p.useEffect(() => {
                if (t.areaAlert) {
                    pn.pause();
                    return
                }
                const s = localStorage.getItem("isOlder18") === "older",
                    o = n && (t.areaCode === "GB" || t.areaCode === "NG");
                !s && (r || a || o) && pn.add(() => e.push(i.jsx(Uj, {})))
            }, []), null
        }),
        Gj = "p14oequ",
        Hj = "uocisei";

    function Kj() {
        g.emit("inject_rootNode", i.jsx(Vj, {}))
    }
    const $j = X.memo(({
            value: e,
            onChange: t,
            autoFocus: n = !1,
            className: r
        }) => {
            const [a, s] = p.useState(n), o = p.useRef(null), u = l => [1, 2, 3, 4, 5, 6].map((f, d) => i.jsx("li", {
                className: l.length === d ? "active" : "",
                children: l.slice(d, d + 1)
            }, f));
            return mn(() => {
                n && o.current && setTimeout(() => {
                    var l;
                    return (l = o.current) == null ? void 0 : l.focus()
                }, 300)
            }, []), i.jsx("div", {
                className: se(qj, r),
                children: i.jsxs("div", {
                    className: "google-input",
                    children: [i.jsx("input", {
                        ref: o,
                        value: e,
                        onBlur: () => {
                            s(!1)
                        },
                        onFocus: () => s(!0),
                        onChange: l => {
                            l.target.value.length > 6 || t(l.target.value)
                        },
                        autoComplete: "off"
                    }), i.jsx("ul", {
                        className: a ? "focus-list" : "",
                        onClick: () => {
                            var l;
                            (l = o.current) == null || l.focus(), s(!0)
                        },
                        children: u(e)
                    })]
                })
            })
        }),
        qj = "g18oie15",
        Yj = X.memo(e => {
            const {
                t
            } = M(), [n, r] = p.useState("");
            p.useEffect(() => {
                n.length === 6 && e.onSubmit(n)
            }, [n]);
            const a = async () => {
                if (await He.confirm(t("2FA key will be sent to your email address"))) try {
                    await z.post("/account/google/2-step-auth/recovery/"), Te(t("Done!"))
                } catch (s) {
                    Te(s)
                }
                e.onCancel()
            };
            return i.jsxs("div", {
                className: Jj,
                children: [i.jsx(fr, {
                    onClick: e.onCancel
                }), i.jsxs("div", {
                    className: "confirm-top",
                    children: [i.jsx("img", {
                        alt: "",
                        src: g.assets("/common/judge.png")
                    }), i.jsxs("div", {
                        className: "summary",
                        children: [e.title ? e.title : t("For your account security"), ",", t("Please enter Google SECURITY-2FA key")]
                    })]
                }), i.jsxs("div", {
                    className: "google-form",
                    children: [i.jsx("div", {
                        className: "code-name",
                        children: t("GOOGLE SECURITY-2FA")
                    }), i.jsx($j, {
                        autoFocus: !0,
                        value: n,
                        onChange: r
                    }), i.jsx("div", {
                        className: "forget",
                        onClick: a,
                        children: t("Lost your Google SECURITY-2FA key?")
                    })]
                })]
            })
        });
    async function Zj() {
        return new Promise(e => {
            const t = () => {
                    e(null), He.back()
                },
                n = r => {
                    e(r), setTimeout(() => {
                        He.back()
                    }, 0)
                };
            He.push(i.jsx(Yj, {
                onSubmit: n,
                onCancel: t
            }), {
                closeable: !1
            })
        })
    }
    const Xj = (e = !0) => new Promise(async (t, n) => {
            if (U.state.google2StepAuth) {
                const r = await Zj(),
                    a = String(Date.now());
                t(r ? {
                    code: r,
                    timestamp: a,
                    verifyType: "google-2step-auth"
                } : null)
            } else e ? t({
                code: "",
                timestamp: String(Date.now()),
                verifyType: ""
            }) : (g.unsafeNavigate("#/settings/safe"), t(null))
        }),
        Jj = "t1de4n7w";

    function Bd() {
        const e = document.location.hostname;
        if (/^\d+\.\d+\.\d+\.\d+$/.test(e) || e === "localhost") return e;
        const t = e.split(".");
        return t.length <= 2 ? `.${e}` : `.${t.slice(-2).join(".")}`
    }

    function Fa(e, t, n, r) {
        let a = `${e}=${t}; expires=${r}; path=/`;
        n && (a += `; domain=${n}`), document.cookie = a
    }

    function rn(e) {
        const t = `${encodeURIComponent(e)}=`,
            n = document.cookie.split(";");
        for (let r = 0; r < n.length; r++) {
            const a = n[r].trim();
            if (a.startsWith(t)) return decodeURIComponent(a.substring(t.length))
        }
        return ""
    }

    function Ua(e) {
        return e && Object.keys(e).length > 0
    }

    function Qj() {
        const e = navigator.userAgent,
            t = e.indexOf("FB4A") !== -1 || e.indexOf("FB_IAB") !== -1;
        if (e.indexOf("FBIOS") !== -1 || e.indexOf("FBAN"), t) {
            const n = `intent://${window.location.href.replace(/^(https|http):\/\//,"")}#Intent;scheme=https;package=com.android.chrome;end`;
            window.location.href = n
        }
    }

    function Md(e, t, n) {
        const r = Bd();
        if (localStorage.getItem("InitiateCheckout") === "1" && r !== "localhost") return;
        const a = new URLSearchParams(window.location.href.split("?")[1]),
            s = rn("_fbp");
        let o = rn("invitation-code");
        n || (n = rn("_fbc")), o || (o = a.get("i") || ""), e || (e = a.get("ch") || ""), t || (t = a.get("pixel_id") || a.get("pixelid") || ""), z.post("/ad/fb/common/send/", {
            channel: e || "",
            eventType: 8,
            fbc: n || "",
            fbp: s || "",
            invitationCode: o || "",
            pixelId: t || "",
            ua: window.navigator.userAgent
        }), localStorage.setItem("InitiateCheckout", "1")
    }
    const eS = "/assets/uni.webview.1.5.2.a00a2184.js",
        tS = "/assets/kwai.6bacbd74.js",
        nS = "/assets/tiktok.13611f23.js",
        Wd = "data:application/javascript;base64,IWZ1bmN0aW9uKGYsYixlLHYsbix0LHMpCiAge2lmKGYuZmJxKXJldHVybjtuPWYuZmJxPWZ1bmN0aW9uKCl7bi5jYWxsTWV0aG9kPwogIG4uY2FsbE1ldGhvZC5hcHBseShuLGFyZ3VtZW50cyk6bi5xdWV1ZS5wdXNoKGFyZ3VtZW50cyl9OwogIGlmKCFmLl9mYnEpZi5fZmJxPW47bi5wdXNoPW47bi5sb2FkZWQ9ITA7bi52ZXJzaW9uPScyLjAnOwogIG4ucXVldWU9W107dD1iLmNyZWF0ZUVsZW1lbnQoZSk7dC5hc3luYz0hMDsKICB0LnNyYz12O3M9Yi5nZXRFbGVtZW50c0J5VGFnTmFtZShlKVswXTsKICBzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHQscyl9KHdpbmRvdywgZG9jdW1lbnQsJ3NjcmlwdCcsCiAgJ2h0dHBzOi8vY29ubmVjdC5mYWNlYm9vay5uZXQvZW5fVVMvZmJldmVudHMuanMnKTs=",
        rS = "data:application/javascript;base64,IWZ1bmN0aW9uKGUsdCxuLHMsdSxhKXtlLnR3cXx8KHM9ZS50d3E9ZnVuY3Rpb24oKXtzLmV4ZT9zLmV4ZS5hcHBseShzLGFyZ3VtZW50cyk6cy5xdWV1ZS5wdXNoKGFyZ3VtZW50cyk7Cn0scy52ZXJzaW9uPScxLjEnLHMucXVldWU9W10sdT10LmNyZWF0ZUVsZW1lbnQobiksdS5hc3luYz0hMCx1LnNyYz0naHR0cHM6Ly9zdGF0aWMuYWRzLXR3aXR0ZXIuY29tL3V3dC5qcycsCmE9dC5nZXRFbGVtZW50c0J5VGFnTmFtZShuKVswXSxhLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHUsYSkpfSh3aW5kb3csZG9jdW1lbnQsJ3NjcmlwdCcpOw==",
        aS = "data:application/javascript;base64,IShmdW5jdGlvbiAoZiwgZSwgdCwgdSwgbiwgcywgcCkgewogIGlmIChmLmVzaykge3JldHVybjt9CgogIG4gPSBmLmVzayA9IGZ1bmN0aW9uICgpIHsKICAgIG4uY2FsbE1ldGhvZCA/IG4uY2FsbE1ldGhvZC5hcHBseShuLCBhcmd1bWVudHMpIDogbi5xdWV1ZS5wdXNoKGFyZ3VtZW50cyk7CiAgfTsKCiAgaWYgKCFmLl9fX2Vzaykge2YuX19fZXNrID0gbjt9CgogIG4ucHVzaCA9IG47CiAgbi5sb2FkZWQgPSAhMDsKICBuLnF1ZXVlID0gW107CiAgcyA9IGUuY3JlYXRlRWxlbWVudCh0KTsKICBzLmFzeW5jID0gITA7CiAgcy5zcmMgPSB1OwogIHAgPSBlLmdldEVsZW1lbnRzQnlUYWdOYW1lKHQpWzBdOwogIHAucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUocywgcCk7Cn0pKHdpbmRvdywgZG9jdW1lbnQsICdzY3JpcHQnLCAnaHR0cHM6Ly9kc3AtbWVkaWEuZXNraW1pLmNvbS9hc3NldHMvanMvZS9ndHIubWluLmpzP189MC4wLjAuNCcpOwo=",
        sS = "/assets/pixelIntegration.dd86ee86.js",
        iS = "/assets/bluetag.a2be364e.js";

    function oS() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
            const t = Math.random() * 16 | 0;
            return (e === "x" ? t : t & 3 | 8).toString(16)
        })
    }

    function cS() {
        let e = localStorage.getItem("aimetric_userId");
        return e || (typeof crypto < "u" && typeof crypto.randomUUID == "function" ? e = crypto.randomUUID() : e = oS(), localStorage.setItem("aimetric_userId", e)), e
    }
    const Tt = function(e, t, n) {
            const r = new Date().getTime();
            let a = t;
            if (t) {
                if (n) {
                    const o = {
                            hostname: window.location.hostname,
                            pathname: window.location.pathname,
                            referrer: document.referrer,
                            userAgent: navigator.userAgent.replace(/[^a-zA-Z0-9_.-]/g, "_"),
                            language: navigator.language,
                            timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
                            userId: cS()
                        },
                        u = Object.keys(o).map(f => `${f}=${encodeURIComponent(o[f])}`).join("&"),
                        l = Math.round(r / 6e4) * 6e4;
                    a = `${t}?ts=${l}&${u}`
                }
                const s = document.querySelector(e);
                s && (s.src = a)
            }
        },
        Fd = e => {
            const t = document.createElement("img");
            e.startsWith("#") && (e = e.substring(1)), t.id = e, t.src = "", t.style.display = "none", t.alt = "", document.body.appendChild(t)
        },
        uS = function() {
            setTimeout(() => {
                Fd("#bcgamePixel"), Tt("#bcgamePixel", "https://metrics.aimetric.net/tracking/segment?key=c5r5bft", !1), Fd("#rtgBcgame"), Tt("#rtgBcgame", "https://tracking.aimetric.net/pixel/bcgame-default.jpg", !0)
            }, 1e3)
        },
        lS = function() {
            Tt("#bcgamePixel", "https://metrics.aimetric.net/tracking/segment?key=fief8qy", !1), Tt("#rtgBcgame", "https://tracking.aimetric.net/pixel/bcgame-deposit.jpg", !0)
        },
        dS = function() {
            Tt("#bcgamePixel", "https://metrics.aimetric.net/tracking/segment?key=uaseyz2", !1), Tt("#rtgBcgame", "https://tracking.aimetric.net/pixel/bcgame-reg.jpg", !0)
        };
    let an = "";
    an = window.location.href, window.parent && window.location !== window.parent.location && (an = window.parent.document.referrer);
    const fS = (e, t) => {
            const n = document.createElement("img");
            e.startsWith("#") && (e = e.substring(1)), n.id = e, n.src = t, n.style.display = "none", n.alt = "", document.body.appendChild(n)
        },
        za = (e, t) => {
            const n = document.querySelector(e);
            n ? n.src = t : fS(e, t)
        },
        pS = () => {
            za("rtmarkLandingspages", "https://my.rtmark.net/img.gif?f=sync&partner=213db3d715874e1fb1bd82bf799dd11e3400b00eebaf8c66399089f07278c397&ttl=&rurl=" + encodeURIComponent(an))
        },
        mS = () => {
            za("rtmarkRegistration", "https://my.rtmark.net/img.gif?f=sync&partner=e96f5135f586fd680a2487308a9186796af0e4fdbe7f4459b55d91df67259e54&ttl=&rurl=" + encodeURIComponent(an))
        },
        hS = () => {
            za("rtmarkFTD", "https://my.rtmark.net/img.gif?f=sync&partner=efc8392af7624578c4f2f3128d31af69687ffbad283d0192497a8360fe39ac41&ttl=&rurl=" + encodeURIComponent(an))
        },
        Z = "regist_success",
        sn = "ftd_success",
        on = "login_success",
        ft = "deposit_success";
    async function gS(e) {
        const t = await z.post("/account/open/login-callback/", e);
        return g.emit("signin-success"), t
    }
    class vS {
        constructor() {
            Ya(this, "initParams", {
                ch: "",
                pixel_id: ""
            });
            var t;
            this.addEvent("parseParams", n => {
                try {
                    const r = new URLSearchParams(n.split("?")[1]),
                        a = "pixel_info",
                        s = Y.initSearchParams,
                        o = {
                            ch: s.get("ch") || r.get("ch"),
                            pixel_id: s.get("pixel_id") || s.get("pixelid") || r.get("pixel_id") || r.get("pixelid")
                        };
                    (o.ch || o.pixel_id) && globalThis.localStorage.setItem(a, JSON.stringify(o));
                    const u = JSON.parse(globalThis.localStorage.getItem(a) || "{}");
                    Object.assign(this.initParams, u)
                } catch (r) {}
            }), globalThis.setTimeout(() => {
                g.emit("ad_track", "init")
            }, 4e3), g.emit("ad_track", "parseParams", ((t = globalThis.location) == null ? void 0 : t.href) || "")
        }
        addEvent(t, n) {
            g.on("ad_track", (r, a) => {
                t === r && n(a)
            })
        }
    }
    const y = new vS;

    function yS() {
        const e = async function() {
            return await W.loadScript("https://telegram.org/js/telegram-web-app.js", "Telegram")
        };
        async function t() {
            var a, s, o, u, l;
            const n = Y.initHashParams,
                r = n.startsWith("#") ? n.substring(1) : n;
            if (new URLSearchParams(r).has("tgWebAppData")) {
                window.location.hash = n;
                const f = await e();
                if (U.state.login) return;
                try {
                    const d = (a = f == null ? void 0 : f.WebApp) == null ? void 0 : a.initDataUnsafe,
                        m = ((s = d == null ? void 0 : d.user) == null ? void 0 : s.first_name) + ((o = d == null ? void 0 : d.user) == null ? void 0 : o.last_name),
                        h = (u = f.WebApp) == null ? void 0 : u.initData,
                        v = (l = d == null ? void 0 : d.user) == null ? void 0 : l.id;
                    g.emit("track", "third_register_click", {
                        account_type: "telegram"
                    }), await gS({
                        fullName: m,
                        idToken: h,
                        openUserId: v,
                        userType: "telegram",
                        invitationCode: "",
                        loginSource: "miniApp"
                    })
                } catch (d) {}
            }
        }
        y.addEvent("init", t)
    }
    yS();

    function bS() {
        function e(r, a) {
            function s(o, u) {
                globalThis.jsBridge && globalThis.jsBridge.postMessage && globalThis.jsBridge.postMessage(o, u), globalThis.jsbridge && globalThis.jsbridge.postMessage && globalThis.jsbridge.postMessage(o, u), globalThis.ANDROID_JS_BRIDGE && globalThis.ANDROID_JS_BRIDGE.gree_page && globalThis.ANDROID_JS_BRIDGE.gree_page(o, u), globalThis.android && globalThis.android.bcMessage && globalThis.android.bcMessage(o, u ? JSON.stringify(u) : "")
            }
            switch (r) {
                case "init":
                    s("af_content_view", a);
                    break;
                case on:
                    s("af_login", a);
                    break;
                case Z:
                    s("af_complete_registration", a);
                    break;
                case "ftd_success":
                    s("af_purchase", a);
                    break
            }
        }
        let t = 0;

        function n() {
            var u;
            if (!globalThis.jsBridge && !globalThis.jsbridge && !globalThis.ANDROID_JS_BRIDGE && !globalThis.android) return;
            const r = (u = [globalThis.jsBridge, globalThis.jsbridge, globalThis.ANDROID_JS_BRIDGE, globalThis.android].find(l => l && l.deviceinfo)) == null ? void 0 : u.deviceinfo,
                a = Bd(),
                s = new Date;
            s.setDate(s.getDate() + 30);
            const o = s.toUTCString();
            if (r && Ua(r) && r.advertising_id && Fa("advertising_id", r.advertising_id, a, o), r && Ua(r) && r.appsflyer_id && Fa("appsflyer_id", r.appsflyer_id, a, o), r && Ua(r) && r.fbclid) {
                const l = `fb.1.${new Date().getTime()}.${r.fbclid}`;
                Fa("_fbc", l, a, o), Md(y.initParams.ch, y.initParams.pixel_id, l), $t.trackEvent("get_deviceinfo_success", {
                    retry: t,
                    data: r
                })
            }(!r || !r.advertising_id || !r.appsflyer_id || !r.fbclid) && t < 10 && (t++, setTimeout(() => {
                n()
            }, 1500)), t >= 10 && Md(y.initParams.ch, y.initParams.pixel_id), t <= 1 && $t.trackEvent("get_deviceinfo", {
                retry: t,
                data: r
            })
        }
        y.addEvent("init", () => {
            e("init")
        }), y.addEvent(on, () => e(on)), y.addEvent(Z, () => e(Z)), y.addEvent("ftd_success", ({
            sales: r
        }) => e("ftd_success", {
            af_revenue: r
        })), setTimeout(() => {
            n()
        }, 2e3)
    }
    bS();

    function _S() {
        const e = fe(async () => new Promise(n => document.addEventListener("UniAppJSBridgeReady", n)));
        async function t(n, r = {}) {
            if (Y.host !== "bcga.me" || n === "") return;
            const a = await W.loadScript(eS, "uni");
            await e(), a.postMessage({
                data: {
                    type: "fb",
                    name: `fb_${n}`,
                    params: r
                }
            }), a.postMessage({
                data: {
                    type: "af",
                    name: `af_${n}`,
                    params: r
                }
            })
        }
        y.addEvent(Z, () => t("mobile_complete_registration")), y.addEvent(on, () => t("mobile_login")), y.addEvent(ft, n => t("mobile_purchase", {
            af_revenue: n.sales || "0"
        }))
    }
    _S();

    function xS(e) {
        var t = document.createElement("img");
        return t.width = 1, t.height = 1, t.src = e, t
    }

    function wS() {
        const e = fe(async function(n) {
            const r = await W.loadScript(tS, "kwaiq");
            return r.load(n), r
        });
        async function t(n) {
            const {
                ch: r,
                pixel_id: a
            } = y.initParams, s = a || "471740152093356087";
            if (!s || r !== "kwai") return;
            const o = await e(s);
            n(o.instance(s))
        }
        y.addEvent("init", () => t(n => n.track("contentView"))), y.addEvent(Z, () => t(n => n.track("completeRegistration"))), y.addEvent(ft, ({
            sales: n
        }) => t(r => {
            r.track("purchase", {
                contents: [{
                    content_type: "product",
                    content_name: "ftd",
                    price: n
                }]
            })
        }))
    }
    wS();

    function jS() {
        const e = fe(async function(n) {
            const r = await W.loadScript(nS, "ttq");
            return r.load(n), r
        });
        async function t(n) {
            const {
                ch: r,
                pixel_id: a
            } = y.initParams, s = a || "CH4DP23C77U3R61EG2P0";
            if (!s || r !== "tiktok") return;
            const o = await e(s);
            n(o)
        }
        y.addEvent(Z, () => t(n => n.track("CompleteRegistration"))), y.addEvent(ft, ({
            sales: n,
            userId: r
        }) => t(a => {
            a.track("CompletePayment", {
                contents: [{
                    content_id: r,
                    quantity: 1,
                    content_name: "deposit"
                }],
                content_type: "product",
                currency: "USD",
                value: n
            })
        }))
    }
    jS();

    function SS() {
        const e = fe(async function(n) {
            const r = await W.loadScript(Wd, "fbq");
            return r("init", n), r
        });
        async function t(n) {
            const {
                ch: r,
                pixel_id: a
            } = y.initParams, s = a;
            if (!s || r !== "meta") return;
            const o = await e(s);
            n(o)
        }
        y.addEvent("init", () => t(n => n("track", "PageView"))), y.addEvent(Z, ({
            userId: n
        }) => t(r => r("track", "CompleteRegistration", {
            eventId: n
        }))), y.addEvent("ftd_success", ({
            sales: n,
            orderid: r
        }) => t(a => {
            $t.trackEvent("deposit_recieved_fb"), a("track", "Purchase", {
                value: n,
                currency: "USD"
            }, {
                eventID: r
            })
        })), y.addEvent("other_events", (n, r) => t(a => {
            r ? a("track", n, r) : a("track", n)
        }))
    }
    SS();

    function IS() {
        const e = fe(async function(n) {
            const r = await W.loadScript(Wd, "fbq");
            return r("init", n), r
        });
        async function t(n) {
            const {
                ch: r,
                pixel_id: a
            } = y.initParams, s = a;
            if (!s || r !== "metaapi") return;
            const o = await e(s);
            n(o)
        }
        y.addEvent("init", () => t(n => n("track", "PageView")))
    }
    IS();

    function NS() {
        const e = fe(async function(n) {
            const r = await W.loadScript(aS, "esk");
            return r("init", n), r
        });
        async function t(n) {
            const {
                ch: r,
                pixel_id: a
            } = y.initParams, s = a;
            if (!s || r !== "eskimi") return;
            const o = await e(s || "31986");
            n(o)
        }
        y.addEvent("init", () => t(n => n("track", "PageView"))), y.addEvent(Z, ({
            userId: n
        }) => t(r => r("track", "CompleteRegistration", {
            eventId: n
        }))), y.addEvent("ftd_success", ({
            sales: n,
            orderid: r
        }) => t(a => {
            $t.trackEvent("deposit_recieved_fb"), a("track", "Purchase", {
                value: n,
                currency: "USD"
            }, {
                eventID: r
            })
        })), y.addEvent("other_events", (n, r) => t(a => {
            r ? a("track", n, r) : a("track", n)
        }))
    }
    NS();

    function ES() {
        y.addEvent(Z, () => ct("event", "RegistrationCompleted")), y.addEvent(ft, ({
            sales: e
        }) => ct("event", "DepositCompletion", {
            value: e
        })), y.addEvent("regist_page", () => ct("event", "RegistrationStarted")), y.addEvent("registration_abandoned", () => ct("event", "RegistrationAbandoned")), y.addEvent("deposit_initiation", () => ct("event", "DepositInitiation")), y.addEvent("rakeback_unlock", e => ct("event", "RakebackUnlock", {
            value: e
        })), y.addEvent("buy_crypto_amount", () => ct("event", "BuyCryptoAmount")), y.addEvent("assistance_requested", () => ct("event", "Assistance Requested"))
    }
    ES();

    function CS() {
        y.addEvent(Z, ({
            userId: e
        }) => {
            document.dispatchEvent(new CustomEvent("userRegistered", {
                detail: {
                    userId: e
                }
            }))
        }), y.addEvent("ftd_success", ({
            sales: e,
            orderid: t,
            userId: n
        }) => {
            document.dispatchEvent(new CustomEvent("userFirstDeposited", {
                detail: {
                    userId: n,
                    amount: e,
                    orderId: t
                }
            }))
        }), y.addEvent(ft, ({
            userId: e,
            sales: t,
            orderId: n
        }) => {
            document.dispatchEvent(new CustomEvent("userDeposited", {
                detail: {
                    userId: e,
                    amount: t,
                    orderId: n
                }
            }))
        })
    }
    CS();

    function AS() {
        const e = async function(n) {
            return await W.loadScript(`https://cdn.taboola.com/libtrc/unip/${n}/tfa.js`, "_tfa")
        };
        async function t(n) {
            const {
                ch: r,
                pixel_id: a
            } = y.initParams, s = a;
            if (!s || r !== "taboola") return;
            const o = await e(s);
            n(o)
        }
        y.addEvent(Z, () => t(n => n.push({
            notify: "event",
            name: "complete_registration"
        }))), y.addEvent(ft, ({
            sales: n
        }) => t(r => r.push({
            notify: "event",
            name: "purchase",
            value: n
        })))
    }
    AS();

    function RS() {
        const e = async function(n) {
            window.scSdkId = n, window.scLayer = [];
            const r = function(a, s, o = {}) {
                window.scLayer.push({
                    eventName: a,
                    eventType: s,
                    meta: o,
                    eventFireTs: Date.now()
                })
            };
            return window.scq = r, r("PAGE_VIEW", "AUTO", {
                pageUrl: window.location.href
            }), await W.loadScript("https://sc-events-sdk.sharechat.com/web-sdk.js"), (...a) => window.scq(...a)
        };
        async function t(n) {
            const {
                ch: r,
                pixel_id: a
            } = y.initParams, s = a || "CwYeOUsWHC";
            if (!s || r !== "sharechat") return;
            const o = await e(s);
            n(o)
        }
        y.addEvent(Z, () => t(n => n("Complete registration", "pre_defined"))), y.addEvent(ft, () => t(n => n("Purchase", "pre_defined")))
    }
    RS();

    function pt(e, t) {
        y.addEvent(e, () => g.emit("ad_track", "other_events", {
            e: t
        }))
    }
    pt("regist_page", "registerClick"), pt("login_success", "Login"), pt("regist_success", "Register"), pt("deposit_success", "Recharge"), pt("logout", "Logout"), pt("ftd_success", "firstrecharge"), pt("home_page", "View content");

    function kS() {
        const {
            ch: e,
            pixel_id: t
        } = y.initParams, n = t || "A0CFAC1E-B13F-B1FB-FE4BEDC860AA7E5B";
        async function r() {
            var s;
            try {
                await W.loadScript(iS, "blue");
                const o = new blue_obj,
                    u = new Date().getTime();
                window.blue_q = window.blue_q || [], (s = window.blue_q) == null || s.push({
                    event: "setCampaignId",
                    value: n
                }, {
                    event: "setPageType",
                    value: "visit"
                }), blue_obj[u] = o
            } catch (o) {}
        }
        r();
        async function a(...s) {
            window.blue_q && (window.blue_q.push(...s), executeFlow(instId))
        }
        y.addEvent(Z, () => a({
            event: "setCampaignId",
            value: n
        }, {
            event: "setProductId",
            value: "1"
        }, {
            event: "setPageType",
            value: "basket"
        })), y.addEvent(sn, ({
            userId: s,
            orderid: o
        }) => a({
            event: "setCampaignId",
            value: n
        }, {
            event: "setProductId",
            value: s
        }, {
            event: "setTransactionTotal",
            value: "1"
        }, {
            event: "setTransactionId",
            value: o
        }, {
            event: "setPageType",
            value: "conversion"
        }))
    }

    function PS() {
        const e = async function(o) {
                window.bgdataLayer = window.bgdataLayer || [], window.bge = function() {
                    window.bgdataLayer.push(arguments)
                }, bge("init", o), await W.loadScript(`https://api.imotech.video/ad/events.js?pixel_id=${o}`)
            },
            {
                ch: t,
                pixel_id: n
            } = y.initParams,
            r = n || "903988077524621568";
        if (t !== "bigo") return;
        e(r);
        const a = new URLSearchParams(window.location.href.split("?")[1]),
            s = function(o, u) {
                const l = rn("_bge_bbg") || a.get("bbg"),
                    f = rn("_bge_ci");
                l ? xS(`https://api.bytegle.site/bigoad/trackingevent?pixel_id=${u}&bbg=${l}&event_id=${o}&cookie_id=${f}&timestamp_ms=${Date.now()}`) : bge("event", o, {
                    configId: u
                })
            };
        y.addEvent("init", () => s("page_view", r)), y.addEvent(Z, () => s("ec_register", r)), y.addEvent("ftd_success", () => s("ec_purchase", r))
    }
    PS();

    function TS() {
        if (window.location.hostname !== "bcga.me" && window.location.hostname !== "bc.ai" && window.location.hostname !== "bc.me") return;
        const e = fe(async function() {
            return await W.loadScript(sS, "pixelTrack")
        });
        async function t(n) {
            const r = await e();
            n(r)
        }
        y.addEvent("init", () => t(n => {
            n.visit()
        })), y.addEvent(Z, ({
            userId: n
        }) => t(r => {
            r.regfinished({
                uid: n
            })
        })), y.addEvent(on, ({
            userId: n
        }) => {
            t(r => {
                r.login({
                    uid: n
                })
            })
        }), y.addEvent(sn, ({
            userId: n,
            orderid: r,
            sales: a
        }) => {
            t(s => {
                s.deposit({
                    uid: n,
                    tid: r,
                    cur: "USD",
                    amount: "1"
                })
            })
        })
    }

    function DS() {
        const e = fe(async function(n) {
            const r = await W.loadScript(rS, "twq");
            return r("config", n), r
        });
        async function t(n) {
            const {
                ch: r,
                pixel_id: a
            } = y.initParams, s = a;
            if (!s || r !== "twitter") return;
            const o = await e(s);
            n(o)
        }
        y.addEvent("init", () => t(n => n("event", "page view")))
    }
    DS();
    async function LS() {
        const e = async function(t) {
            window._adftrack = Array.isArray(window._adftrack) ? window._adftrack : window._adftrack ? [window._adftrack] : [], window._adftrack.push(t), await W.loadScript(`https://s2.adform.net/banners/scripts/st/trackpoint-async.js?pagename=${t.pagename}`)
        };
        y.addEvent("init", () => {
            e({
                HttpHost: "a1.adform.net",
                pm: 3336391,
                divider: encodeURIComponent("|"),
                pagename: encodeURIComponent("bcgame_all_pages")
            })
        }), y.addEvent(Z, () => {
            e({
                HttpHost: "a1.adform.net",
                pm: 3336391,
                divider: encodeURIComponent("|"),
                pagename: encodeURIComponent("bcgame_registration")
            })
        }), y.addEvent(sn, () => {
            e({
                HttpHost: "a1.adform.net",
                pm: 3336391,
                divider: encodeURIComponent("|"),
                pagename: encodeURIComponent("bcgame_deposit")
            })
        })
    }

    function OS() {
        y.addEvent("init", () => uS()), y.addEvent(Z, () => dS()), y.addEvent(sn, () => lS())
    }

    function BS() {
        y.addEvent("init", () => pS()), y.addEvent(Z, () => mS()), y.addEvent(sn, () => hS())
    }

    function MS() {
        W.loadScript("https://adssistem.com/tag/UGH-1700705300228226", "adssistem")
    }
    setTimeout(() => {
        kS(), LS(), MS()
    }, 5e3), TS(), Qj(), OS(), BS();
    const WS = "/assets/symbol-defs.ef6a79c4.svg";

    function FS(e = {}) {
        const {
            immediate: t = !1,
            onNeedRefresh: n,
            onOfflineReady: r,
            onRegistered: a,
            onRegisteredSW: s,
            onRegisterError: o
        } = e;
        let u, l, f, d;
        const m = async (v = !0) => {
            await f, v && (u == null || u.addEventListener("controlling", _ => {
                _.isUpdate && window.location.reload()
            })), await (d == null ? void 0 : d())
        };
        async function h() {
            if ("serviceWorker" in navigator) {
                const {
                    Workbox: v,
                    messageSW: _
                } = await xt(() =>
                    import ("../chunk-42ea5fe7.js"), []);
                d = async () => {
                    l && l.waiting && await _(l.waiting, {
                        type: "SKIP_WAITING"
                    })
                }, u = new v("/service-worker.js", {
                    scope: "/",
                    type: "classic"
                }), u.addEventListener("activated", w => {
                    w.isUpdate || (r == null || r())
                }); {
                    const w = () => {
                        n == null || n()
                    };
                    u.addEventListener("waiting", w), u.addEventListener("externalwaiting", w)
                }
                u.register({
                    immediate: t
                }).then(w => {
                    l = w, s ? s("/service-worker.js", w) : a == null || a(w)
                }).catch(w => {
                    o == null || o(w)
                })
            }
        }
        return f = h(), m
    }

    function US(e = {}) {
        const {
            immediate: t = !0,
            onNeedRefresh: n,
            onOfflineReady: r,
            onRegistered: a,
            onRegisteredSW: s,
            onRegisterError: o
        } = e, [u, l] = p.useState(!1), [f, d] = p.useState(!1), [m] = p.useState(() => FS({
            immediate: t,
            onOfflineReady() {
                d(!0), r == null || r()
            },
            onNeedRefresh() {
                l(!0), n == null || n()
            },
            onRegistered: a,
            onRegisteredSW: s,
            onRegisterError: o
        }));
        return {
            needRefresh: [u, l],
            offlineReady: [f, d],
            updateServiceWorker: m
        }
    }
    const zS = X.memo(() => {
            const e = {
                    Bad_Domain: "bad_domains"
                },
                t = {
                    GSTATIC: () => "https://www.gstatic.com/generate_204",
                    BING: () => "https://www.bing.com",
                    BC: () => "/game/support/system/conf/",
                    NEW: (l, f) => {
                        let d = localStorage.getItem(e.Bad_Domain),
                            m = d ? d.split(",") : [],
                            h = new Set(m);
                        return h.add(f), d = Array.from(h).join(","), localStorage.setItem(e.Bad_Domain, d), Y.isDev ? `https://distributedmessagedistribution.dogcrash.game/favicon.js?d=${d}&u=${l}` : `https://distributedmessagedistribution.com/favicon.js?d=${d}&u=${l}`
                    },
                    USER: () => "/api/account/get/",
                    STSTUS: {
                        IS_CORS: !0,
                        NO_CORS: !1
                    }
                };
            async function n(l, f = !0) {
                if (f) try {
                    return await fetch(l, {
                        mode: "no-cors",
                        cache: "no-cache"
                    }), !0
                } catch (d) {
                    return !1
                } else try {
                    const d = await z.get(l, {
                        cache: !1,
                        timeout: 6e3
                    });
                    return !0
                } catch (d) {
                    return !1
                }
            }
            async function r(l = 0, f, d = 1, m = "") {
                try {
                    const h = await W.loadScript(t.NEW(l || 0, f), "domain_available");
                    if (!(h != null && h.data)) return;
                    const v = window.location.protocol,
                        _ = `${v}//${m}${h.data}${t.BC()}`;
                    await n(_, t.STSTUS.IS_CORS) ? window.location.href = `${v}//${m}${h.data}` : d < 10 && await r(l, h.data, d + 1, m)
                } catch (h) {
                    d < 10 && await r(l, f, d + 1, m)
                }
            }

            function a() {
                return {
                    userId: 0
                }
            }
            async function s() {
                if (!navigator.onLine || await n(`/cache${t.BC()}`) || await n(t.BC(), t.STSTUS.NO_CORS) || !await n(t.GSTATIC()) || !await n(t.BING())) return;
                const {
                    userId: l
                } = a(), f = new URL(window.location.href).hostname.split("."), d = f.length > 2 ? f.slice(0, -2).join(".") + "." : "";
                r(l, window.location.hostname, 1, d)
            }
            const {
                needRefresh: [o],
                updateServiceWorker: u
            } = US({
                onRegistered(l) {
                    l && (setInterval(() => l.update(), 3600 * 1e3), W.isIos() && document.addEventListener("visibilitychange", () => {
                        l.update()
                    }), g.on("checkUpdate", () => l.update()))
                },
                async onRegisteredSW(l, f) {}
            });
            return p.useEffect(() => {
                o && u(!1)
            }, [o, u]), p.useEffect(() => {
                localStorage.removeItem(e.Bad_Domain), s()
            }, []), null
        }),
        VS = () => xt(() =>
            import ("../bcbrand.837ae599.js"), []),
        GS = {
            icon: WS
        };
    [Kj, Zw, n1, X1, w1, Q1, tw, hw, uj, Tj, ww, fT, Fj, UT].map(e => {
        try {
            e()
        } catch (t) {}
    }), gr.connect(), yt.connect(), g.emit("inject_rootNode", i.jsx(HS, {})), g.enableRem("440", "649"), U.waitLogin().then(() => {
        const e = U.state;
        g.emit("track", "_login_user", {
            userId: String(e.userId),
            level: String(e.vipLevel)
        }), g.emit("ad_track", "parseParams", e.invitationUrl)
    });

    function HS() {
        return i.jsxs(i.Fragment, {
            children: [i.jsx(KS, {}), i.jsx(zS, {})]
        })
    }

    function KS() {
        return mn(() => {
            const e = (o, u) => {
                    zP(o).then(u)
                },
                t = o => {
                    VT().then(o)
                },
                n = o => {
                    Xj().then(o)
                },
                r = o => {
                    rw(!0).then(o)
                },
                a = o => {
                    o ? pn.pause() : pn.start()
                },
                s = (o, u) => {
                    GT(o).then(u)
                };
            return g.on("select_currency", e), g.on("get_device_info", t), g.on("get_2fa", n), g.on("get_twostep", r), g.on("ignore_sign_up_queue", a), g.on("post_comment", s), () => {
                g.off("select_currency", e), g.off("get_device_info", t), g.off("get_2fa", n), g.off("get_twostep", r), g.off("ignore_sign_up_queue", a), g.off("post_comment", s)
            }
        }, []), null
    }
    async function $S(e) {
        try {
            return await QP({
                sectionId: "casino_bc",
                pageSize: 100,
                lang: e
            })
        } catch (t) {
            return (await VS()).data
        }
    }
    const qS = fe(function(e) {
            return {
                bcBrand: $S(e)
            }
        }),
        YS = {};
    var Ud, zd = nA;
    Ud = zd.createRoot, zd.hydrateRoot;
    const ZS = "/assets/degenpass.772ffd77.png",
        XS = "/assets/cookie.bebef43c.png",
        JS = "/assets/one.e1362f4b.mp3",
        Va = "/assets/rainbow.0b98f616.json";
    class Vd extends Ed {
        constructor(t) {
            super(S({
                preload: !1
            }, t))
        }
        play(t) {
            return this.state() === "unloaded" && this.load(), super.play(t)
        }
    }
    const QS = p.memo(() => {
        const [e, t] = p.useState(!1);
        return p.useEffect(() => {
            const n = () => t(!1),
                r = () => t(!0);
            return yt.on("connect", n), yt.on("reconnecting", r), () => {
                yt.off("connect", n), yt.off("reconnecting", r)
            }
        }, []), i.jsx(zf, {
            children: e && i.jsx(eI, {})
        })
    });

    function eI() {
        const {
            t: e
        } = M(), [t, n] = p.useState(0);
        p.useEffect(() => {
            const a = setInterval(() => {
                n(s => s + 1)
            }, 500);
            return () => clearInterval(a)
        }, []);
        const r = Array(t % 4).fill(".").join("");
        return i.jsx(cr.div, {
            className: aI,
            children: e("Connection lost. Trying to reconnect") + r
        })
    }
    const tI = new Vd({
            src: JS
        }),
        nI = p.memo(function() {
            const {
                t: e
            } = M(), [t, n] = p.useState(!1), [r, a] = p.useState({}), s = p.useRef(null), o = p.useRef(null), u = p.useRef(null), l = Ke(), f = bs(), d = () => {
                f.soundEffectEnable && tI.play()
            };
            if (p.useEffect(() => {
                    let h = null,
                        v = null;
                    const _ = w => {
                        var I;
                        if (w.rewardType === "wager-degenpass" || w.rewardType === "bigbangfianal") {
                            n(!0), a(w);
                            try {
                                (I = s.current) == null || I.play(1), h = setTimeout(() => {
                                    var E;
                                    (E = o.current) == null || E.play(1)
                                }, 1500), v = setTimeout(() => {
                                    var E;
                                    (E = u.current) == null || E.play(1)
                                }, 3e3), d()
                            } catch (E) {}
                        }
                    };
                    return gr.on("user-reward", _), () => {
                        clearTimeout(h), clearTimeout(v), gr.off("user-reward", _)
                    }
                }, []), !t) return null;
            const m = r.content || e("Congratulations! You\u2019ve been awarded a Degenpass NFT.");
            return i.jsx("div", {
                className: iI,
                children: i.jsxs("div", {
                    className: "degenpass-inner",
                    children: [i.jsxs("div", {
                        className: "lottie-wrap",
                        children: [i.jsx(mr, {
                            speed: .5,
                            ref: s,
                            className: "bg-rainbow",
                            path: Va,
                            loop: !0
                        }), i.jsx(mr, {
                            speed: .5,
                            ref: o,
                            className: "bg-rainbow",
                            path: Va,
                            loop: !0
                        }), i.jsx(mr, {
                            speed: .5,
                            ref: u,
                            className: "bg-rainbow",
                            path: Va,
                            loop: !0
                        })]
                    }), i.jsx(fr, {
                        onClick: () => {
                            n(!1)
                        }
                    }), i.jsx("div", {
                        className: "img-wrap",
                        children: i.jsx("img", {
                            alt: "degenpass",
                            src: ZS
                        })
                    }), i.jsxs("div", {
                        className: "right-wrap",
                        children: [i.jsxs("div", {
                            className: "left-text",
                            children: [i.jsx("p", {
                                className: "t",
                                children: e("Degen Pass Awarded!")
                            }), i.jsx("p", {
                                className: "d",
                                children: m
                            })]
                        }), i.jsx("div", {
                            className: "getpassbtn-wrap",
                            children: i.jsx(Se, {
                                type: "conic",
                                onClick: () => {
                                    n(!1), l("/wallet/mynft")
                                },
                                children: e("View my NFTs")
                            })
                        })]
                    })]
                })
            })
        }),
        Gd = "ignore_cookie_warn",
        rI = function() {
            const {
                t: e
            } = M(), t = (window == null ? void 0 : window.jsBridge) || (window == null ? void 0 : window.jsbridge) || (window == null ? void 0 : window.ANDROID_JS_BRIDGE) || (window == null ? void 0 : window.android), n = window == null ? void 0 : window.matchMedia("(display-mode: standalone)").matches, [r, a] = p.useState(!!localStorage.getItem(Gd));
            return window.opener || t || n || r ? null : i.jsxs("div", {
                className: se(sI, "page-cookie-wrap"),
                children: [i.jsxs("div", {
                    className: "cookie-wrap",
                    children: [i.jsx("img", {
                        alt: "cookie",
                        src: XS
                    }), i.jsx("p", {
                        className: "cookie-desc",
                        children: e("We use cookies to provide the best experience to you.")
                    })]
                }), i.jsx(Se, {
                    onClick: () => {
                        localStorage.setItem(Gd, "true"), a(!0)
                    },
                    type: "conic",
                    children: e("Accept")
                })]
            })
        },
        aI = "o12pu5ci",
        sI = "czufpyj",
        iI = "d1y92b2r",
        Fe = {
            TWOFA_ERROR: 4002,
            INSUFFICIENT_BALANCE: 5002,
            SAME_EMAIL: 5801,
            IS_MUTE: 6001,
            NEED_LOGIN: 6002,
            SESSION_ERROR: 6003,
            NEED_VERIFY: 6004,
            IS_BLOCKED: 6005,
            LOCKED_BY_KYC: 6008,
            NEED_EMAIL_AND_BASIC_KYC: 6101,
            NEED_EMAIL_AND_ADVANCED_KYC: 6102,
            NEED_PHONE_AND_BASIC_KYC: 6103,
            NEED_PHONE_AND_ADVANCED_KYC: 6104,
            NEED_EMAIL_OR_PHONE_AND_BASIC_KYC: 6105,
            NEED_EMAIL_OR_PHONE_AND_ADVANCED_KYC: 6106,
            NEED_EMAIL_AND_PHONE_AND_BASIC_KYC: 6107,
            NEED_EMAIL_AND_PHONE_AND_ADVANCED_KYC: 6108,
            NEED_BASIC_KYC: 6109,
            NEED_ADVANCED_KYC: 6110,
            FINAL_REJECT_KYC: 6111,
            IS_UPDATING: 1999
        },
        oI = "/assets/ring.b9ab8df7.mp3",
        cI = "/assets/click.504e71cc.mp3",
        uI = "/assets/notification.38202f9e.mp3",
        lI = "/assets/ring2.19ef5a98.mp3",
        dI = "/assets/win.1981b036.mp3",
        fI = "/assets/success.a3be93aa.mp3",
        pI = "/assets/claim.d7b4098e.mp3",
        mI = "/assets/rakeready.ea43dac5.mp3",
        hI = {
            ring: oI,
            ring2: lI,
            click: cI,
            notification: uI,
            success: fI,
            win: dI,
            claim: pI,
            rakeready: mI
        },
        gI = fe(e => {
            const t = hI[e];
            return t ? new Vd({
                src: t
            }) : null
        });

    function Hd(e) {
        var t;
        (t = gI(e)) == null || t.play()
    }
    const vI = "/assets/fp.min.2102a136.js",
        yI = Ut(() => new Promise(async (e, t) => {
            try {
                globalThis._smConf = {
                    organization: "d9YtHNKdmLm1CMuYZsw9",
                    appId: "default",
                    publicKey: "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC1H4eR+xoG7K9NIBf3K6PmfnRsGkaH3aGz9A/XkYhIQdrN6XKBWt6fnxEqDe1Xp27o/VOd02JPNG6JKkJ8pVyjjUXdukNkbKADzxEYmkLn/7O5hpgHMHWiZ6iKTNlDWAQ96viViXa4Bq1Ju1u3DWnH9m+6Sz1zEAQOLH6XnQSS8QIDAQAB",
                    apiHost: "collect.verify.lnearn.com"
                }, globalThis._smReadyFuncs = [function() {
                    n.then(e)
                }];
                const n = W.loadScript(vI, "SMSdk")
            } catch (n) {
                t(n)
            }
        }));
    async function bI() {
        return (await yI()).getDeviceId()
    }
    const cn = () => xt(() =>
            import ("../index.ae868195.js"), ["assets/index.ae868195.js", "assets/chunk-a4af42e8.js", "assets/chunk-73e80d68.js", "assets/chunk-64278058.js", "assets/chunk-cf010ec4.js", "assets/chunk-5bcb444f.js", "assets/chunk-bb0ace6b.js", "assets/chunk-7a9ca7ff.js", "assets/index.64308c9d.css"]),
        _I = Ht(async () => ({
            default: (await cn()).PokerUpdating
        })),
        xI = Ht(async () => ({
            default: (await cn()).BlockPage
        }));

    function wI() {
        const {
            t: e
        } = M(), t = ot(), n = ms(), r = async () => {
            await vt.initData, vt.state.lang && n(vt.state.lang)
        };
        return p.useEffect(() => (r(), z.interceptors.response.use(a => a, async a => (a instanceof $f && (a.code === Fe.NEED_LOGIN ? (t.login = !1, g.unsafeNavigate("#/login")) : a.code === Fe.IS_BLOCKED ? cn().then(s => s.showBlock(a.message)) : a.code === Fe.LOCKED_BY_KYC ? g.unsafeNavigate(`#/need-verify/${a.code}`) : a.code >= Fe.NEED_EMAIL_AND_BASIC_KYC && a.code <= Fe.FINAL_REJECT_KYC ? g.unsafeNavigate(`#/need-verify/${a.code}`) : a.response.code === Fe.IS_UPDATING && (await U.initData, window.location.reload())), Promise.reject(a))), bI().then(a => {
            z.defaults.headers.common.smid = a
        }), Kt.addAfterRequest(a => {
            a.code === Fe.SESSION_ERROR && He.confirm(e("Your session has timed out! Please log in again!"), {
                confirmText: "Refresh"
            }).then(s => s && window.location.reload())
        }), g.on("playsound", Hd), () => {
            g.off("playsound", Hd)
        }), []), null
    }
    Ut(() => {
        Y.isDevHost || $t.init()
    })();
    const jI = p.memo(function({
            children: e,
            pageContext: t
        }) {
            const n = II(),
                {
                    error: r
                } = ap(() => U.initData);
            if (r) {
                if (r.code === Fe.IS_UPDATING) e = i.jsx(_I, {});
                else if (r.code === Fe.SESSION_ERROR) return window.location.reload(), null
            } else n && (e = i.jsx(xI, {}));
            return i.jsx(qf, {
                locales: js,
                namespace: "translation",
                children: i.jsxs(Vf, {
                    pageContext: t,
                    children: [i.jsx(wI, {}), i.jsxs(p.Suspense, {
                        fallback: i.jsx("div", {
                            children: "Suspense Error!"
                        }),
                        children: [i.jsx(ep, {
                            children: i.jsx(SI, {})
                        }), e]
                    })]
                })
            })
        }),
        SI = X.memo(() => (p.useEffect(() => g.hashRouter.subscribe(e => {
            const t = e.location.pathname;
            t !== "/" && $t.trackPageView({
                url: t
            })
        }), []), i.jsxs(i.Fragment, {
            children: [i.jsx(QS, {}), i.jsx(rI, {}), i.jsx(nI, {})]
        })));

    function II() {
        const [e, t] = p.useState(!1), n = ot();
        return mn(() => {
            U.initData.then(() => {
                let r = !W.isSSR && !Y.isDev && !n.showable;
                n.areaAlert && n.areaCode === "GB" ? (r = !1, setTimeout(() => cn().then(a => a.showGBBlock()), 200)) : !r && n.areaAlert && setTimeout(() => cn().then(a => a.showBlock()), 200), t(r)
            })
        }, []), e
    }
    window["@bc/ui"] = S({}, Ox), window["@bc/pixi"] = S({}, Bx), window["react-dom"] = S(S({}, rA), vr), window.react = S(S({}, cA), X), window["framer-motion"] = S({}, Lx), window["lodash-es"] = S(S({}, p_), c), window["react/jsx-runtime"] = S(S({}, DP), LP), window.gsap = S(S({}, aA), sA), window["/@react-refresh"] = S(S({}, Vx), We), window["react-router-dom"] = S({}, iA), g.history_navigate = (e, {
        replace: t
    } = {}) => HT(e, {
        overwriteLastHistoryEntry: t,
        keepScrollPosition: !0
    }), window.app = g;
    const NI = globalThis.innerWidth < "649",
        Kd = document.getElementById("root");
    let Ga, Ha = "/";
    async function EI(e) {
        e.$$typeof = "", Object.assign(e, {
            assets: GS
        });
        const {
            Page: t,
            lang: n,
            exports: r,
            mobile: a,
            urlPathname: s,
            urlOriginal: o
        } = e;
        let {
            redirectTo: u = YS[s]
        } = e, l = !1;
        try {
            await Promise.all([U.initData, ps.initData, _s.initData, vt.initData])
        } catch (k) {}
        if (Kt.enableSocketConnect(), r.auth && (l = !U.state.login), u) {
            u.startsWith("#") ? g.unsafeNavigate(Ha.replace(/#.*$|$/, u), {
                replace: !0
            }) : g.unsafeNavigate(u, {
                replace: !0
            });
            return
        } else if (l) {
            g.unsafeNavigate(Ha.replace(/#.*$|$/, "#/login"), {
                replace: !0
            });
            return
        }
        const {
            isSpreadHost: f,
            isUsHost: d
        } = W.getHostType(Y.host);
        if (s !== "/" && f && !U.state.login) {
            g.unsafeNavigate("/", {
                replace: !0
            });
            return
        }
        d && (hr.t = tp(hr.t, AI)), Ha = o;
        const m = r.Layout || VP,
            h = r.onPageData,
            v = e.isHydration && a !== NI,
            _ = js[n];
        _ && await _();

        function w() {
            let k = n;
            k === "tl" && (k = "fil"), z.defaults.headers.common["Accept-Language"] = k
        }
        w();

        function I(k) {
            return i.jsx(jI, {
                pageContext: k,
                children: i.jsx(m, {
                    children: i.jsx(t, {})
                })
            })
        }
        const E = h ? h({
            ctx: e
        }) : {};
        e.pageProps = new Jf(S(S({}, E), qS(n))), CI(I(e), v)
    }

    function CI(e, t = !1) {
        t && (Kd.className = ""), Ga || (Ga = Ud(Kd)), Ga.render(e)
    }
    const Ka = [{
        old: "Insufficient balance",
        new: "Insufficient entries"
    }, {
        old: "number of bets",
        new: "number of rounds"
    }, {
        old: "bet id",
        new: "round id"
    }, {
        old: "all bets",
        new: "all rounds"
    }, {
        old: "Responsible Gambling",
        new: "Responsible Play"
    }, {
        old: "Live Dealers",
        new: "Game Hosts"
    }, {
        old: "Baccarat",
        new: "Insufficient"
    }, {
        old: "Insufficient",
        new: "Baccarat-style Game"
    }, {
        old: "Craps",
        new: "Dice Game"
    }, {
        old: "Poker",
        new: "Poker-style Game"
    }, {
        old: "Blackjack",
        new: "Card Game"
    }, {
        old: "Roulette",
        new: "Wheel Game"
    }, {
        old: "Withdraw",
        new: "Redeem"
    }, {
        old: "Payout",
        new: "Prize"
    }, {
        old: "Deposit",
        new: "Buy"
    }, {
        old: "deposit",
        new: "buy"
    }, {
        old: "Jackpot",
        new: "Grand Prize"
    }, {
        old: "jackpot",
        new: "grand prize"
    }, {
        old: "Slot Machine",
        new: "Slot-style Game"
    }, {
        old: "Wager",
        new: "Entry"
    }, {
        old: "Gambling",
        new: "Sweepstakes"
    }, {
        old: "Casino",
        new: "Games"
    }, {
        old: "casino",
        new: "games"
    }, {
        old: "Bet",
        new: "Play"
    }];

    function AI(e) {
        let t = e;
        for (let n = 0; n < Ka.length; n++) t = t.replaceAll(Ka[n].old, Ka[n].new);
        return t
    }
    let $d, qd, Yd;
    $d = !1, qd = !0, Yd = !0, _p = Object.freeze(Object.defineProperty({
        __proto__: null,
        clientRouting: qd,
        hydrationCanBeAborted: Yd,
        prefetchStaticAssets: $d,
        render: EI
    }, Symbol.toStringTag, {
        value: "Module"
    }))
});
export {
    _p as _, $T as __tla, br as c, yn as n, Le as t, _r as u
};