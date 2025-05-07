var qt = Object.defineProperty,
    Ht = Object.defineProperties;
var Kt = Object.getOwnPropertyDescriptors;
var V = Object.getOwnPropertySymbols;
var yt = Object.prototype.hasOwnProperty,
    gt = Object.prototype.propertyIsEnumerable;
var dt = (e, n, t) => n in e ? qt(e, n, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : e[n] = t,
    et = (e, n) => {
        for (var t in n || (n = {})) yt.call(n, t) && dt(e, t, n[t]);
        if (V)
            for (var t of V(n)) gt.call(n, t) && dt(e, t, n[t]);
        return e
    },
    nt = (e, n) => Ht(e, Kt(n));
var bt = (e, n) => {
    var t = {};
    for (var i in e) yt.call(e, i) && n.indexOf(i) < 0 && (t[i] = e[i]);
    if (e != null && V)
        for (var i of V(e)) n.indexOf(i) < 0 && gt.call(e, i) && (t[i] = e[i]);
    return t
};
import {
    $,
    B as mt,
    C as ot,
    v as q,
    e as J,
    c as g,
    y as Q,
    z as X,
    d as Wt,
    j as kt,
    t as G,
    s as Ot,
    a as It,
    m as ct,
    i as x,
    g as Y,
    f as k,
    x as Pt,
    E as zt,
    G as Jt,
    P as Qt,
    k as lt,
    I as Xt,
    o as Yt
} from "./vendor-DbY7dSWD.js";
var f = globalThis["@bc/ui"];
const H = Symbol("store-raw"),
    R = Symbol("store-node"),
    P = Symbol("store-has"),
    St = Symbol("store-self");

function Tt(e) {
    let n = e[$];
    if (!n && (Object.defineProperty(e, $, {
            value: n = new Proxy(e, ee)
        }), !Array.isArray(e))) {
        const t = Object.keys(e),
            i = Object.getOwnPropertyDescriptors(e);
        for (let r = 0, s = t.length; r < s; r++) {
            const c = t[r];
            i[c].get && Object.defineProperty(e, c, {
                enumerable: i[c].enumerable,
                get: i[c].get.bind(n)
            })
        }
    }
    return n
}

function j(e) {
    let n;
    return e != null && typeof e == "object" && (e[$] || !(n = Object.getPrototypeOf(e)) || n === Object.prototype || Array.isArray(e))
}

function _(e, n = new Set) {
    let t, i, r, s;
    if (t = e != null && e[H]) return t;
    if (!j(e) || n.has(e)) return e;
    if (Array.isArray(e)) {
        Object.isFrozen(e) ? e = e.slice(0) : n.add(e);
        for (let c = 0, u = e.length; c < u; c++) r = e[c], (i = _(r, n)) !== r && (e[c] = i)
    } else {
        Object.isFrozen(e) ? e = Object.assign({}, e) : n.add(e);
        const c = Object.keys(e),
            u = Object.getOwnPropertyDescriptors(e);
        for (let h = 0, m = c.length; h < m; h++) s = c[h], !u[s].get && (r = e[s], (i = _(r, n)) !== r && (e[s] = i))
    }
    return e
}

function K(e, n) {
    let t = e[n];
    return t || Object.defineProperty(e, n, {
        value: t = Object.create(null)
    }), t
}

function N(e, n, t) {
    if (e[n]) return e[n];
    const [i, r] = J(t, {
        equals: !1,
        internal: !0
    });
    return i.$ = r, e[n] = i
}

function Zt(e, n) {
    const t = Reflect.getOwnPropertyDescriptor(e, n);
    return !t || t.get || !t.configurable || n === $ || n === R || (delete t.value, delete t.writable, t.get = () => e[$][n]), t
}

function Ct(e) {
    ot() && N(K(e, R), St)()
}

function te(e) {
    return Ct(e), Reflect.ownKeys(e)
}
const ee = {
    get(e, n, t) {
        if (n === H) return e;
        if (n === $) return t;
        if (n === mt) return Ct(e), t;
        const i = K(e, R),
            r = i[n];
        let s = r ? r() : e[n];
        if (n === R || n === P || n === "__proto__") return s;
        if (!r) {
            const c = Object.getOwnPropertyDescriptor(e, n);
            ot() && (typeof s != "function" || e.hasOwnProperty(n)) && !(c && c.get) && (s = N(i, n, s)())
        }
        return j(s) ? Tt(s) : s
    },
    has(e, n) {
        return n === H || n === $ || n === mt || n === R || n === P || n === "__proto__" ? !0 : (ot() && N(K(e, P), n)(), n in e)
    },
    set() {
        return !0
    },
    deleteProperty() {
        return !0
    },
    ownKeys: te,
    getOwnPropertyDescriptor: Zt
};

function M(e, n, t, i = !1) {
    if (!i && e[n] === t) return;
    const r = e[n],
        s = e.length;
    t === void 0 ? (delete e[n], e[P] && e[P][n] && r !== void 0 && e[P][n].$()) : (e[n] = t, e[P] && e[P][n] && r === void 0 && e[P][n].$());
    let c = K(e, R),
        u;
    if ((u = N(c, n, r)) && u.$(() => t), Array.isArray(e) && e.length !== s) {
        for (let h = e.length; h < s; h++)(u = c[h]) && u.$();
        (u = N(c, "length", s)) && u.$(e.length)
    }(u = c[St]) && u.$()
}

function $t(e, n) {
    const t = Object.keys(n);
    for (let i = 0; i < t.length; i += 1) {
        const r = t[i];
        M(e, r, n[r])
    }
}

function ne(e, n) {
    if (typeof n == "function" && (n = n(e)), n = _(n), Array.isArray(n)) {
        if (e === n) return;
        let t = 0,
            i = n.length;
        for (; t < i; t++) {
            const r = n[t];
            e[t] !== r && M(e, t, r)
        }
        M(e, "length", i)
    } else $t(e, n)
}

function D(e, n, t = []) {
    let i, r = e;
    if (n.length > 1) {
        i = n.shift();
        const c = typeof i,
            u = Array.isArray(e);
        if (Array.isArray(i)) {
            for (let h = 0; h < i.length; h++) D(e, [i[h]].concat(n), t);
            return
        } else if (u && c === "function") {
            for (let h = 0; h < e.length; h++) i(e[h], h) && D(e, [h].concat(n), t);
            return
        } else if (u && c === "object") {
            const {
                from: h = 0,
                to: m = e.length - 1,
                by: y = 1
            } = i;
            for (let p = h; p <= m; p += y) D(e, [p].concat(n), t);
            return
        } else if (n.length > 1) {
            D(e[i], n, [i].concat(t));
            return
        }
        r = e[i], t = [i].concat(t)
    }
    let s = n[0];
    typeof s == "function" && (s = s(r, t), s === r) || i === void 0 && s == null || (s = _(s), i === void 0 || j(r) && j(s) && !Array.isArray(s) ? $t(r, s) : M(e, i, s))
}

function xt(...[e, n]) {
    const t = _(e || {}),
        i = Array.isArray(t),
        r = Tt(t);

    function s(...c) {
        q(() => {
            i && c.length === 1 ? ne(t, c[0]) : D(t, c)
        })
    }
    return [r, s]
}
const W = new WeakMap,
    Rt = {
        get(e, n) {
            if (n === H) return e;
            const t = e[n];
            let i;
            return j(t) ? W.get(t) || (W.set(t, i = new Proxy(t, Rt)), i) : t
        },
        set(e, n, t) {
            return M(e, n, _(t)), !0
        },
        deleteProperty(e, n) {
            return M(e, n, void 0, !0), !0
        }
    };

function it(e) {
    return n => {
        if (j(n)) {
            let t;
            (t = W.get(n)) || W.set(n, t = new Proxy(n, Rt)), e(t)
        }
        return n
    }
}
var A = globalThis["lodash-es"];
const ie = /https?:\/\/[\S]+/,
    oe = /(\[\w+=.+?\])/,
    se = /(\[(\w+=.+?)\])/;
async function re() {
    const {
        host: e
    } = await f.http.get("/game/support/user/info/extend/");
    return {
        host: e
    }
}
async function ce() {
    const {
        applyMsg: e,
        items: n
    } = await f.http.get("/chat-new/private-chat/list/");
    return {
        applyMsg: e,
        items: n.map(at)
    }
}
async function le(e) {
    const n = await f.http.post(`/chat-new/private-chat/${e}/history/`, {
        lastIndex: 0
    });
    return {
        history: n.historyMessages.map(we),
        cloudFrontQueryParams: n.cloudFrontQueryParams,
        imgDomain: n.imgDomain
    }
}
async function ae(e, n) {
    return f.http.post(`/chat-new/private-chat/${n}/send/`, {
        chat: e.replace(ie, t => `[link=${encodeURIComponent(t)}]`),
        subType: "text"
    })
}
async function ue(e) {
    let n = await f.http.post("/chat-new/private-chat/create/", {
        toUserId: e
    });
    return at(n)
}
const At = A.memoize(async e => {
        const n = await f.http.get(`/chat-new/private-chat/${e}/`);
        return At.cache.delete(e), at(n)
    }),
    fe = async (e, n) => await f.http.post(`/chat-new/private-chat/${e}/${n}`);
async function he(e) {
    return await f.http.post("/chat-new/message/private/query/", {
        message: e
    })
}
async function pe(e, n, t) {
    return await f.http.post("/chat-new/private-chat/switch/mute/", {
        groupId: e,
        muteUserId: n,
        mute: t
    })
}
async function de(e, n, t) {
    return await f.http.post("/chat-new/private-chat/archive/", {
        groupId: e,
        archiveUserId: n,
        isArchive: t
    })
}
async function ye(e, n) {
    return await f.http.post(`/chat-new/private-chat/${e}/${n}/`)
}
async function ge(e, n) {
    return await f.http.post(`/chat-new/private-chat/${e}/recall/`, {
        chatIndex: n
    })
}
const I = {
        getIsHost: re,
        getChatList: ce,
        getChatHistory: le,
        sendChat: ae,
        createRoomByUid: ue,
        createRoomByGid: At,
        setTopPosition: fe,
        searchChatMessage: he,
        muteRoom: pe,
        archiveRoom: de,
        setReadStatus: ye,
        recall: ge
    },
    be = 1,
    me = 4026531840,
    ve = 2;

function at(e) {
    return {
        inited: !1,
        userId: e.toChatId,
        name: String(e.chatShowName),
        level: Number(e.chatShowLevel),
        titles: e.chatShowTitles || [],
        titleDesc: e.chatShowTitlesDesc || [],
        groupId: e.groupId,
        isBlock: !!e.shield,
        isBlockMe: !!e.isBlock,
        isShow: !!e.isShow,
        isArchive: e.isArchive,
        readIndex: Number(e.readIndex || 0),
        lastIndex: Number(e.lastIndex || 0),
        lastMsg: A.unescape(e.lastShortMsg || ""),
        lastMsgType: 2,
        lastSpeakTime: Number(e.lastSpeakTime),
        isAdmin: (e.relationship & me) != 0,
        isFriend: (e.relationship & be) != 0,
        isVip: (e.relationship & ve) != 0,
        isStranger: e.relationship == 0,
        isOnline: !1,
        isRequest: !1,
        isBot: !1,
        isPinned: e.isPinned,
        language: e.language,
        isMyVip: e.isMyVip,
        isShield: !1,
        depositPercent: e.depositPercent,
        isWhale: e.isWhale,
        isMute: e.isMute,
        vipTag: e.vipTag,
        searchMessage: "",
        imgDomain: "",
        cloudFrontQueryParams: "",
        lastReadTimeToNow: e.lastReadTimeToNow,
        get unread() {
            return this.lastIndex || this.lastIndex >= 0 ? this.lastIndex - this.readIndex : 0
        },
        history: []
    }
}

function we(t) {
    var i = t,
        {
            chat: e
        } = i,
        n = bt(i, ["chat"]);
    if (typeof e == "object" && (e = JSON.stringify(e)), n.type === 1) typeof e == "string" && (e = JSON.parse(e));
    else {
        let r = [];
        A.unescape(e).split(oe).forEach(c => {
            if (c === "") return;
            let u = c.match(se);
            if (u) {
                let [h, m] = u[2].split("="), y = m.split(","), p = new ke(h, y);
                r.push(p)
            } else r.push(c)
        }), e = r
    }
    return nt(et({}, n), {
        chat: e
    })
}
class ke {
    constructor(n, t) {
        this.type = n, this.args = t
    }
    toString() {
        return this.type
    }
}
const B = f.protobuf,
    O = B.Reader,
    F = B.Writer,
    v = B.util,
    b = B.roots.privateChat || (B.roots.privateChat = {});
b.UserChatGroupEvent = (() => {
    function e(n) {
        if (this.titles = [], this.titleDesc = [], n)
            for (let t = Object.keys(n), i = 0; i < t.length; ++i) n[t[i]] != null && (this[t[i]] = n[t[i]])
    }
    return e.prototype.groupId = 0, e.prototype.groupName = "", e.prototype.groupType = 0, e.prototype.msgNum = 0, e.prototype.lastMsgType = 0, e.prototype.lastSpeakTime = v.Long ? v.Long.fromBits(0, 0, !1) : 0, e.prototype.lastMsg = "", e.prototype.level = 0, e.prototype.titles = v.emptyArray, e.prototype.block = 0, e.prototype.titleDesc = v.emptyArray, e.prototype.remoteUserId = 0, e.encode = function(t, i) {
        if (i || (i = F.create()), t.groupId != null && Object.hasOwnProperty.call(t, "groupId") && i.uint32(8).int32(t.groupId), t.groupName != null && Object.hasOwnProperty.call(t, "groupName") && i.uint32(18).string(t.groupName), t.groupType != null && Object.hasOwnProperty.call(t, "groupType") && i.uint32(24).int32(t.groupType), t.msgNum != null && Object.hasOwnProperty.call(t, "msgNum") && i.uint32(40).int32(t.msgNum), t.lastMsgType != null && Object.hasOwnProperty.call(t, "lastMsgType") && i.uint32(48).int32(t.lastMsgType), t.lastSpeakTime != null && Object.hasOwnProperty.call(t, "lastSpeakTime") && i.uint32(56).int64(t.lastSpeakTime), t.lastMsg != null && Object.hasOwnProperty.call(t, "lastMsg") && i.uint32(66).string(t.lastMsg), t.level != null && Object.hasOwnProperty.call(t, "level") && i.uint32(72).int32(t.level), t.titles != null && t.titles.length) {
            i.uint32(82).fork();
            for (let r = 0; r < t.titles.length; ++r) i.int32(t.titles[r]);
            i.ldelim()
        }
        if (t.block != null && Object.hasOwnProperty.call(t, "block") && i.uint32(88).int32(t.block), t.titleDesc != null && t.titleDesc.length)
            for (let r = 0; r < t.titleDesc.length; ++r) i.uint32(98).string(t.titleDesc[r]);
        return t.remoteUserId != null && Object.hasOwnProperty.call(t, "remoteUserId") && i.uint32(120).int32(t.remoteUserId), i
    }, e.decode = function(t, i) {
        t instanceof O || (t = O.create(t));
        let r = i === void 0 ? t.len : t.pos + i,
            s = new b.UserChatGroupEvent;
        for (; t.pos < r;) {
            let c = t.uint32();
            switch (c >>> 3) {
                case 1:
                    s.groupId = t.int32();
                    break;
                case 2:
                    s.groupName = t.string();
                    break;
                case 3:
                    s.groupType = t.int32();
                    break;
                case 5:
                    s.msgNum = t.int32();
                    break;
                case 6:
                    s.lastMsgType = t.int32();
                    break;
                case 7:
                    s.lastSpeakTime = t.int64();
                    break;
                case 8:
                    s.lastMsg = t.string();
                    break;
                case 9:
                    s.level = t.int32();
                    break;
                case 10:
                    if (s.titles && s.titles.length || (s.titles = []), (c & 7) === 2) {
                        let u = t.uint32() + t.pos;
                        for (; t.pos < u;) s.titles.push(t.int32())
                    } else s.titles.push(t.int32());
                    break;
                case 11:
                    s.block = t.int32();
                    break;
                case 12:
                    s.titleDesc && s.titleDesc.length || (s.titleDesc = []), s.titleDesc.push(t.string());
                    break;
                case 15:
                    s.remoteUserId = t.int32();
                    break;
                default:
                    t.skipType(c & 7);
                    break
            }
        }
        return s
    }, e
})();
b.GroupChatRequest = (() => {
    function e(n) {
        if (n)
            for (let t = Object.keys(n), i = 0; i < t.length; ++i) n[t[i]] != null && (this[t[i]] = n[t[i]])
    }
    return e.prototype.groupId = 0, e.encode = function(t, i) {
        return i || (i = F.create()), t.groupId != null && Object.hasOwnProperty.call(t, "groupId") && i.uint32(16).int32(t.groupId), i
    }, e.decode = function(t, i) {
        t instanceof O || (t = O.create(t));
        let r = i === void 0 ? t.len : t.pos + i,
            s = new b.GroupChatRequest;
        for (; t.pos < r;) {
            let c = t.uint32();
            switch (c >>> 3) {
                case 2:
                    s.groupId = t.int32();
                    break;
                default:
                    t.skipType(c & 7);
                    break
            }
        }
        return s
    }, e
})();
b.GroupChatHistory = (() => {
    function e(n) {
        if (this.chats = [], n)
            for (let t = Object.keys(n), i = 0; i < t.length; ++i) n[t[i]] != null && (this[t[i]] = n[t[i]])
    }
    return e.prototype.groupId = 0, e.prototype.chats = v.emptyArray, e.encode = function(t, i) {
        if (i || (i = F.create()), t.groupId != null && Object.hasOwnProperty.call(t, "groupId") && i.uint32(16).int32(t.groupId), t.chats != null && t.chats.length)
            for (let r = 0; r < t.chats.length; ++r) b.GroupChat.encode(t.chats[r], i.uint32(26).fork()).ldelim();
        return i
    }, e.decode = function(t, i) {
        t instanceof O || (t = O.create(t));
        let r = i === void 0 ? t.len : t.pos + i,
            s = new b.GroupChatHistory;
        for (; t.pos < r;) {
            let c = t.uint32();
            switch (c >>> 3) {
                case 2:
                    s.groupId = t.int32();
                    break;
                case 3:
                    s.chats && s.chats.length || (s.chats = []), s.chats.push(b.GroupChat.decode(t, t.uint32()));
                    break;
                default:
                    t.skipType(c & 7);
                    break
            }
        }
        return s
    }, e
})();
b.GroupChat = (() => {
    function e(n) {
        if (n)
            for (let t = Object.keys(n), i = 0; i < t.length; ++i) n[t[i]] != null && (this[t[i]] = n[t[i]])
    }
    return e.prototype.id = v.Long ? v.Long.fromBits(0, 0, !1) : 0, e.prototype.groupId = 0, e.prototype.userId = 0, e.prototype.type = 0, e.prototype.createTime = v.Long ? v.Long.fromBits(0, 0, !1) : 0, e.prototype.chat = "", e.prototype.subType = "", e.prototype.chatIndex = 0, e.encode = function(t, i) {
        return i || (i = F.create()), t.id != null && Object.hasOwnProperty.call(t, "id") && i.uint32(8).int64(t.id), t.groupId != null && Object.hasOwnProperty.call(t, "groupId") && i.uint32(16).int32(t.groupId), t.userId != null && Object.hasOwnProperty.call(t, "userId") && i.uint32(24).int32(t.userId), t.type != null && Object.hasOwnProperty.call(t, "type") && i.uint32(48).int32(t.type), t.createTime != null && Object.hasOwnProperty.call(t, "createTime") && i.uint32(56).int64(t.createTime), t.chat != null && Object.hasOwnProperty.call(t, "chat") && i.uint32(66).string(t.chat), t.subType != null && Object.hasOwnProperty.call(t, "subType") && i.uint32(90).string(t.subType), t.chatIndex != null && Object.hasOwnProperty.call(t, "chatIndex") && i.uint32(120).sint32(t.chatIndex), i
    }, e.decode = function(t, i) {
        t instanceof O || (t = O.create(t));
        let r = i === void 0 ? t.len : t.pos + i,
            s = new b.GroupChat;
        for (; t.pos < r;) {
            let c = t.uint32();
            switch (c >>> 3) {
                case 1:
                    s.id = t.int64();
                    break;
                case 2:
                    s.groupId = t.int32();
                    break;
                case 3:
                    s.userId = t.int32();
                    break;
                case 6:
                    s.type = t.int32();
                    break;
                case 7:
                    s.createTime = t.int64();
                    break;
                case 8:
                    s.chat = t.string();
                    break;
                case 11:
                    s.subType = t.string();
                    break;
                case 15:
                    s.chatIndex = t.sint32();
                    break;
                default:
                    t.skipType(c & 7);
                    break
            }
        }
        return s
    }, e
})();
b.Friend = (() => {
    function e(n) {
        if (this.titles = [], this.titleDesc = [], n)
            for (let t = Object.keys(n), i = 0; i < t.length; ++i) n[t[i]] != null && (this[t[i]] = n[t[i]])
    }
    return e.prototype.groupId = 0, e.prototype.userId = 0, e.prototype.name = "", e.prototype.createTime = v.Long ? v.Long.fromBits(0, 0, !1) : 0, e.prototype.level = 0, e.prototype.titles = v.emptyArray, e.prototype.titleDesc = v.emptyArray, e.encode = function(t, i) {
        if (i || (i = F.create()), t.groupId != null && Object.hasOwnProperty.call(t, "groupId") && i.uint32(16).int32(t.groupId), t.userId != null && Object.hasOwnProperty.call(t, "userId") && i.uint32(24).int32(t.userId), t.name != null && Object.hasOwnProperty.call(t, "name") && i.uint32(34).string(t.name), t.createTime != null && Object.hasOwnProperty.call(t, "createTime") && i.uint32(56).int64(t.createTime), t.level != null && Object.hasOwnProperty.call(t, "level") && i.uint32(72).int32(t.level), t.titles != null && t.titles.length) {
            i.uint32(82).fork();
            for (let r = 0; r < t.titles.length; ++r) i.int32(t.titles[r]);
            i.ldelim()
        }
        if (t.titleDesc != null && t.titleDesc.length)
            for (let r = 0; r < t.titleDesc.length; ++r) i.uint32(90).string(t.titleDesc[r]);
        return i
    }, e.decode = function(t, i) {
        t instanceof O || (t = O.create(t));
        let r = i === void 0 ? t.len : t.pos + i,
            s = new b.Friend;
        for (; t.pos < r;) {
            let c = t.uint32();
            switch (c >>> 3) {
                case 2:
                    s.groupId = t.int32();
                    break;
                case 3:
                    s.userId = t.int32();
                    break;
                case 4:
                    s.name = t.string();
                    break;
                case 7:
                    s.createTime = t.int64();
                    break;
                case 9:
                    s.level = t.int32();
                    break;
                case 10:
                    if (s.titles && s.titles.length || (s.titles = []), (c & 7) === 2) {
                        let u = t.uint32() + t.pos;
                        for (; t.pos < u;) s.titles.push(t.int32())
                    } else s.titles.push(t.int32());
                    break;
                case 11:
                    s.titleDesc && s.titleDesc.length || (s.titleDesc = []), s.titleDesc.push(t.string());
                    break;
                default:
                    t.skipType(c & 7);
                    break
            }
        }
        return s
    }, e
})();
const [Oe, He] = J(!0), jt = X(Oe);

function _t(e) {
    const n = Ie(),
        t = () => n() && e.value();
    return g(jt.Provider, {
        value: t,
        get children() {
            return e.children
        }
    })
}

function Ie() {
    return Q(jt)
}
var Pe = G('<div><svg viewBox="0 0 84 24"><circle cx=18 cy=12 r=6></circle><circle cx=18 cy=12 r=6></circle><circle cx=42 cy=12 r=6></circle><circle cx=66 cy=12 r=6>');

function Se({
    className: e,
    size: n = 0,
    stroke: t = "#3BC117"
}) {
    return (() => {
        var i = Pe(),
            r = i.firstChild;
        return Wt(i, `ui-loading ${e}`), kt(r, "fill", t), i
    })()
}
var Te = G('<button><div class="w-fill h-full center">');
const Ce = e => {
    const [n, t] = Ot(e, ["type", "loading", "disabled", "children", "class"]);
    return (() => {
        var i = Te(),
            r = i.firstChild;
        return It(i, ct({
            get class() {
                return `block h-11 select-none rounded font-bold cursor-pointer transition-transform duration-200 ease-out hover:brightness-110 active:scale-95 disabled:scale-100 disabled:opacity-50 disabled:cursor-default ${n.type==="conic"&&"bg-[conic-gradient(var(--tw-gradient-stops))] from-[#58af10] to-[#1d803a]  text-white"} ${n.class}`
            },
            get disabled() {
                return n.disabled
            },
            get onClick() {
                return t.onClick
            }
        }, t), !1, !0), x(r, g(Y, {
            get when() {
                return !e.loading
            },
            get fallback() {
                return g(Se, {
                    stroke: "#fff"
                })
            },
            get children() {
                return n.children
            }
        })), i
    })()
};
var vt = e => e instanceof Element;

function st(e, n) {
    if (n(e)) return e;
    if (typeof e == "function" && !e.length) return st(e(), n);
    if (Array.isArray(e))
        for (const t of e) {
            const i = st(t, n);
            if (i) return i
        }
    return null
}

function $e(e, n = vt, t = vt) {
    const i = k(e);
    return k(() => st(i(), n))
}
const z = f.i18n.createInstance();
z.init();
const Mt = X({
        namespace: ""
    }),
    xe = Object.entries(f.langsLocaleToISO6391).reduce((e, [n, t]) => (e[t] = n, e), {});

function Lt(e) {
    return xe[e] || e
}

function Re(e) {
    const n = ut(),
        [t] = Pt(() => {
            const {
                namespace: i,
                locales: r
            } = e;
            return {
                namespace: i,
                locales: r,
                lang: Lt(n.lang)
            }
        }, async ({
            namespace: i,
            locales: r,
            lang: s
        }) => {
            let c = {};
            const u = `../locales/${s}/${i}.json`,
                h = e.locales[u] || Object.values(r)[0],
                m = z.store.data[s];
            return m && m[e.namespace] || (s ? c = await h() : c = {}, z.addResourceBundle(s, e.namespace, c)), e
        });
    return g(Y, {
        get when() {
            return t()
        },
        children: i => g(Mt.Provider, {
            value: {
                get namespace() {
                    return i().namespace
                }
            },
            get children() {
                return e.children
            }
        })
    })
}

function Dt() {
    const e = Q(Mt),
        n = ut();
    return (t, i) => z.t(t, nt(et({}, i), {
        lng: Lt(n.lang),
        ns: e.namespace
    }))
}
var rt = G("<div>"),
    Ae = G("<div class=confirm-wrap><div></div><div class=center>");
const [je, wt] = J([]), S = {
    get list() {
        return je()
    },
    push(e) {
        wt(n => [...n, e])
    },
    confirm(e, n) {
        return new Promise(t => {
            const i = () => g(Me, ct(() => n == null ? void 0 : n(), {
                children: e,
                onConfirm: r => {
                    t(r), S.pop(i)
                }
            }));
            S.push(i)
        })
    },
    pop(e) {
        wt(n => {
            const t = [...n],
                i = e || t[t.length - 1];
            return t.filter(r => r !== i)
        })
    }
};

function Ke() {
    const e = zt(() => {
        const i = S.list;
        return i[i.length - 1]
    });
    let n;
    const t = Jt(() => (() => {
        var i = rt();
        return x(i, g(Xt, {
            get each() {
                return S.list
            },
            children: (r, s) => {
                const u = $e(() => g(_t, {
                    value: () => e(r()),
                    get children() {
                        return r()()
                    }
                }))();
                return lt(() => {
                    u && u.classList.toggle("pop-prev", S.list.length - 1 !== s)
                }), u
            }
        })), i
    })());
    return g(_e, {
        get visible() {
            return S.list.length > 0
        },
        ref(i) {
            var r = n;
            typeof r == "function" ? r(i) : n = i
        },
        onClick: i => i.target === n && S.pop(),
        get children() {
            return t()
        }
    })
}

function _e(e) {
    const [, n] = Ot(e, ["visible", "class"]);
    return g(Qt, {
        get children() {
            var t = rt();
            return x(t, g(Y, {
                get when() {
                    return e.visible
                },
                get children() {
                    var i = rt();
                    return It(i, ct(n, {
                        get class() {
                            return `overlayer ${e.class}`
                        }
                    }), !1, !1), i
                }
            })), t
        }
    })
}

function Me(e) {
    Yt(() => {
        e.onConfirm(!1)
    });
    const n = Dt();
    return (() => {
        var t = Ae(),
            i = t.firstChild,
            r = i.nextSibling;
        return x(i, () => e.children), x(r, g(Ce, {
            onClick: () => e.onConfirm(!0),
            type: "conic",
            class: "confirm-button",
            get children() {
                return e.confirm || n("OK")
            }
        })), t
    })()
}
const Le = "/modules/chat/warning-BucokX_O.png";
var De = G('<div class="flex flex-col items-center text-title text-center"><img class="w-36 h-auto"><h2 class="font-bold text-xl mb-4"></h2><p class=text-text>');

function Ne(e) {
    const n = Dt(),
        t = e.strList.map(i => `”${i}“`).join(", ");
    return (() => {
        var i = De(),
            r = i.firstChild,
            s = r.nextSibling,
            c = s.nextSibling;
        return kt(r, "src", Le), x(s, () => n("Contains sensitive words")), x(c, () => n("The text you sent contains sensitive words: {{strData}}.  Please modify it before sending it.", {
            strData: t
        })), i
    })()
}

function Be() {
    const [e] = Pt(async function() {
        await f.accountStore.waitLogin();
        const {
            items: o,
            applyMsg: l
        } = await I.getChatList(), a = await I.getIsHost();
        return p({
            rooms: o,
            unReadRequest: l,
            isHost: a.host
        }), o
    });
    let n, t, i, r, s, c, u, h;
    const m = f.socket.socket("/chat/group"),
        [y, p] = xt({
            userId: 0,
            isHost: !1,
            rooms: [],
            unReadRequest: 0,
            selectedVip: [],
            delayedCheck: !1,
            get roomDict() {
                return h()
            },
            get recentList() {
                return n()
            },
            get friendList() {
                return t()
            },
            get strangerList() {
                return i()
            },
            get adminList() {
                return r()
            },
            get vipList() {
                return c()
            },
            get recentVipList() {
                return u()
            },
            get archiveList() {
                return s()
            },
            get recentUnRead() {
                return (f.accountStore.state.chatRoomPermission.vipable ? this.recentList : this.adminList).reduce((l, a) => l += a.isMute ? 0 : a.unread, 0)
            }
        });
    lt(() => {
        ht(y.userId)
    }), h = k(() => y.rooms.reduce((o, l) => (o[l.groupId] = l, o), {})), n = k(() => A.sortBy(y.rooms.filter(o => !o.isArchive && o.isShow), [o => !o.isPinned, o => y.delayedCheck && -o.lastReadTimeToNow])), t = k(() => y.rooms.filter(o => o.isFriend)), i = k(() => y.rooms.filter(o => o.isStranger && o.isShow)), r = k(() => y.rooms.filter(o => o.isAdmin && o.isShow)), s = k(() => y.rooms.filter(o => o.isArchive)), c = k(() => A.sortBy(y.rooms.filter(o => o.isVip && !o.isArchive), [o => !o.isPinned, o => y.delayedCheck && -o.lastReadTimeToNow]));
    const ft = {
        state: y,
        socket: m,
        setState: p,
        async sendChat(o, l) {
            let a = 0;
            if (o instanceof Blob) {
                const d = new FormData,
                    E = {
                        headers: {
                            "Content-Type": "multipart/form-data"
                        }
                    };
                d.append("img", o), await f.http.post(`/chat-new/private-chat/${l}/send-img/`, d, E).catch(T => {
                    T.code === 6001 && pt(l)
                })
            } else return o ? (await I.sendChat(o, l).catch(d => {
                d.code === 6001 && pt(l), d.code === 6012 && S.confirm(k(() => g(Ne, {
                    get strList() {
                        return d.response.data
                    }
                }))), a = d.code
            }), a) : void 0
        },
        async addFriend(o) {
            await f.http.post(`/chat-new/private-chat/private/${o}/agree/`);
            const l = await ht(o);
            q(() => {
                l.isStranger = !1, l.isFriend = !0, Z(l)
            })
        },
        async rejectFriend(o) {
            await f.http.post(`/chat-new/private-chat/private/${o}/refuse/`)
        },
        async removeFriend(o) {
            await f.http.post(`/chat-new/private-chat/private/friend/${o}/remove/`), p("rooms", l => l.userId === o, "isFriend", !1)
        },
        async deleteRoom(o) {
            await f.http.post(`/chat-new/private-chat/${o}/remove/`);
            const l = y.roomDict[o];
            l && (l.isStranger ? p("rooms", a => a.filter(d => d.groupId !== o)) : p("rooms", a => a.groupId === o, "isShow", !1))
        },
        setSelectedVip(o) {
            p("selectedVip", o)
        },
        clearSelectedVip() {
            p("selectedVip", [])
        },
        async setReadIndex(o) {
            p("rooms", l => l.groupId === o, l => ({
                readIndex: l.lastIndex
            }))
        },
        setPin(o) {
            p("rooms", l => l.groupId === o, "isPinned", l => (I.setTopPosition(o, l ? "unpin" : "pin"), !l))
        },
        setMute(o, l) {
            p("rooms", a => a.groupId === o, "isMute", a => (I.muteRoom(o, l, !a), !a))
        },
        setArchive(o, l, a) {
            p("rooms", d => d.groupId === o, "isArchive", d => (I.archiveRoom(o, l, a), !d))
        },
        recallMsg(o, l) {
            q(() => {
                p("rooms", a => a.groupId === o, "history", a => a.chatIndex === l, "isRecall", !0), p("rooms", a => a.groupId === o, it(a => {
                    a.lastIndex === l && (a.lastMsg = "")
                }))
            })
        },
        markReadStatus(o, l) {
            p("rooms", a => a.groupId === o, it(a => {
                l === "unread" ? a.readIndex-- : a.readIndex = a.lastIndex
            })), I.setReadStatus(o, l)
        }
    };
    async function ht(o) {
        let l = y.rooms.find(a => a.userId === o);
        return !l && o !== 0 && (l = await I.createRoomByUid(o), Z(l)), l
    }
    async function Ft(o) {
        const l = y.roomDict[o];
        if (!l) {
            const a = await I.createRoomByGid(o);
            return Z(a), a
        }
        return l
    }

    function Et(o) {
        return o ? o instanceof Array ? String(o[0]) : typeof o == "string" ? o : o.subType : "no messages"
    }

    function Z(o) {
        p("rooms", l => [...l, o])
    }

    function pt(o) {
        p("rooms", l => l.groupId === o, "isShield", !0)
    }

    function Ut(o) {
        const l = /(\[\w+=.+?\])/,
            a = /(\[(\w+=.+?)\])/;
        if (typeof o.chat == "object" && (o.chat = JSON.stringify(o.chat)), o.type === 1) typeof o.chat == "string" && (o.chat = JSON.parse(o.chat));
        else {
            let d = [];
            A.unescape(o.chat).split(l).forEach(T => {
                if (T === "") return;
                let U = T.match(a);
                if (U) {
                    let [L, C] = U[2].split("="), tt = C.split(","), w = new Vt(L, tt);
                    d.push(w)
                } else d.push(T)
            }), o.chat = d
        }
        return Object.assign({}, o)
    }
    class Vt {
        constructor(l, a) {
            this.type = l, this.args = a
        }
        toString() {
            return this.type
        }
    }
    return m.on("chat", f.socket.decodeBind(async ({
        chat: o,
        createTime: l,
        groupId: a,
        id: d,
        subType: E,
        type: T,
        userId: U,
        chatIndex: L
    }) => {
        const C = {
                chat: o,
                groupId: a,
                subType: E,
                type: T,
                userId: U,
                chatIndex: L,
                id: Number(d),
                createTime: Number(l),
                isRecall: !1
            },
            tt = await Ft(a);
        q(() => {
            p("rooms", w => w.groupId === tt.groupId, it(w => {
                w.history = [...w.history, Ut(C)], w.lastMsg = Et(C.chat), w.lastMsgType = C.type, w.lastSpeakTime = C.createTime, w.lastIndex = L, w.isArchive = !1, f.accountStore.state.userId === C.userId && (w.readIndex = L)
            }))
        })
    }, b.GroupChat)), m.on("friend-apply", f.socket.decodeBind(() => {
        p("unReadRequest", o => o + 1)
    }, b.Friend)), m.on("chat-recall", f.socket.decodeBind(o => {
        ft.recallMsg(o.groupId, o.chatIndex)
    }, b.GroupChat)), m.on("friend-agree", f.socket.decodeBind(o => {
        o.userId
    }, b.Friend)), m.connect(), [e, ft]
}
const Nt = Be(),
    Bt = Nt[1],
    Ge = X(Bt);

function We() {
    return Q(Ge)
}

function Fe(e) {
    return g(Y, {
        get when() {
            return Nt[0]()
        },
        get children() {
            return e.children
        }
    })
}
const Gt = X({});

function Ee(e) {
    const [n, t] = xt(e.bridge.current);
    return e.bridge.current = n, e.bridge.update = t, g(Gt.Provider, {
        value: n,
        get children() {
            return g(_t, {
                value: () => n.active,
                get children() {
                    return g(Fe, {
                        get children() {
                            return g(Re, {
                                get locales() {
                                    return e.locales
                                },
                                get namespace() {
                                    return e.namespace
                                },
                                get children() {
                                    return e.children
                                }
                            })
                        }
                    })
                }
            })
        }
    })
}

function ut() {
    return Q(Gt)
}

function Ue(e) {
    const {
        state: n
    } = Bt, [t, i] = J(!1);
    f.accountStore.waitLogin().then(() => {
        i(f.accountStore.state.chatRoomPermission.vipable)
    });
    const r = () => t() || n.adminList.length > 0;
    lt(() => {
        e({
            unrade: n.recentUnRead,
            showEnter: r()
        })
    })
}
const ze = Object.freeze(Object.defineProperty({
    __proto__: null,
    AppProvider: Ee,
    onMessage: Ue,
    useAppCtx: ut
}, Symbol.toStringTag, {
    value: "Module"
}));
export {
    Ee as A, Ce as B, Se as L, Ke as P, f as _, ut as a, Dt as b, Ie as c, I as d, xt as e, ze as f, A as l, S as p, $e as r, We as u
};