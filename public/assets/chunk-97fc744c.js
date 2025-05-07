var _ = Object.defineProperty;
var G = (o, e, t) => e in o ? _(o, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : o[e] = t;
var a = (o, e, t) => (G(o, typeof e != "symbol" ? e + "" : e, t), t);
import {
    R as v,
    r as P
} from "./chunk-73e80d68.js";
import {
    dD as g,
    eA as l,
    ak as q,
    ds as A,
    ap as J,
    du as p,
    cE as j,
    dG as m,
    dv as b,
    dl as y,
    di as U
} from "./chunk-64278058.js";
import {
    a as c
} from "./chunk-07d6de63.js";
const u = g.Reader,
    k = g.Writer,
    f = g.util,
    h = g.roots.chatHall || (g.roots.chatHall = {});
h.RoomIdParam = (() => {
    function o(e) {
        if (e)
            for (let t = Object.keys(e), s = 0; s < t.length; ++s) e[t[s]] != null && (this[t[s]] = e[t[s]])
    }
    return o.prototype.roomId = 0, o.encode = function(e, t) {
        return t || (t = k.create()), e.roomId != null && Object.hasOwnProperty.call(e, "roomId") && t.uint32(8).int32(e.roomId), t
    }, o.decode = function(e, t) {
        e instanceof u || (e = u.create(e));
        let s = t === void 0 ? e.len : e.pos + t,
            i = new h.RoomIdParam;
        for (; e.pos < s;) {
            let n = e.uint32();
            switch (n >>> 3) {
                case 1:
                    i.roomId = e.int32();
                    break;
                default:
                    e.skipType(n & 7);
                    break
            }
        }
        return i
    }, o
})(), h.ChatHistory = (() => {
    function o(e) {
        if (this.chats = [], e)
            for (let t = Object.keys(e), s = 0; s < t.length; ++s) e[t[s]] != null && (this[t[s]] = e[t[s]])
    }
    return o.prototype.chats = f.emptyArray, o.encode = function(e, t) {
        if (t || (t = k.create()), e.chats != null && e.chats.length)
            for (let s = 0; s < e.chats.length; ++s) h.Chat.encode(e.chats[s], t.uint32(10).fork()).ldelim();
        return t
    }, o.decode = function(e, t) {
        e instanceof u || (e = u.create(e));
        let s = t === void 0 ? e.len : e.pos + t,
            i = new h.ChatHistory;
        for (; e.pos < s;) {
            let n = e.uint32();
            switch (n >>> 3) {
                case 1:
                    i.chats && i.chats.length || (i.chats = []), i.chats.push(h.Chat.decode(e, e.uint32()));
                    break;
                default:
                    e.skipType(n & 7);
                    break
            }
        }
        return i
    }, o
})(), h.SendChatParam = (() => {
    function o(e) {
        if (e)
            for (let t = Object.keys(e), s = 0; s < t.length; ++s) e[t[s]] != null && (this[t[s]] = e[t[s]])
    }
    return o.prototype.roomId = 0, o.prototype.message = "", o.encode = function(e, t) {
        return t || (t = k.create()), e.roomId != null && Object.hasOwnProperty.call(e, "roomId") && t.uint32(8).int32(e.roomId), e.message != null && Object.hasOwnProperty.call(e, "message") && t.uint32(18).string(e.message), t
    }, o.decode = function(e, t) {
        e instanceof u || (e = u.create(e));
        let s = t === void 0 ? e.len : e.pos + t,
            i = new h.SendChatParam;
        for (; e.pos < s;) {
            let n = e.uint32();
            switch (n >>> 3) {
                case 1:
                    i.roomId = e.int32();
                    break;
                case 2:
                    i.message = e.string();
                    break;
                default:
                    e.skipType(n & 7);
                    break
            }
        }
        return i
    }, o
})(), h.Chat = (() => {
    function o(e) {
        if (this.titles = [], this.titleDesc = [], e)
            for (let t = Object.keys(e), s = 0; s < t.length; ++s) e[t[s]] != null && (this[t[s]] = e[t[s]])
    }
    return o.prototype.id = f.Long ? f.Long.fromBits(0, 0, !1) : 0, o.prototype.roomId = 0, o.prototype.userId = 0, o.prototype.name = "", o.prototype.type = 0, o.prototype.createTime = f.Long ? f.Long.fromBits(0, 0, !1) : 0, o.prototype.chat = "", o.prototype.level = 0, o.prototype.titles = f.emptyArray, o.prototype.titleDesc = f.emptyArray, o.encode = function(e, t) {
        if (t || (t = k.create()), e.id != null && Object.hasOwnProperty.call(e, "id") && t.uint32(8).int64(e.id), e.roomId != null && Object.hasOwnProperty.call(e, "roomId") && t.uint32(16).int32(e.roomId), e.userId != null && Object.hasOwnProperty.call(e, "userId") && t.uint32(24).int32(e.userId), e.name != null && Object.hasOwnProperty.call(e, "name") && t.uint32(34).string(e.name), e.type != null && Object.hasOwnProperty.call(e, "type") && t.uint32(48).int32(e.type), e.createTime != null && Object.hasOwnProperty.call(e, "createTime") && t.uint32(56).int64(e.createTime), e.chat != null && Object.hasOwnProperty.call(e, "chat") && t.uint32(66).string(e.chat), e.level != null && Object.hasOwnProperty.call(e, "level") && t.uint32(72).int32(e.level), e.titles != null && e.titles.length) {
            t.uint32(82).fork();
            for (let s = 0; s < e.titles.length; ++s) t.int32(e.titles[s]);
            t.ldelim()
        }
        if (e.titleDesc != null && e.titleDesc.length)
            for (let s = 0; s < e.titleDesc.length; ++s) t.uint32(90).string(e.titleDesc[s]);
        return t
    }, o.decode = function(e, t) {
        e instanceof u || (e = u.create(e));
        let s = t === void 0 ? e.len : e.pos + t,
            i = new h.Chat;
        for (; e.pos < s;) {
            let n = e.uint32();
            switch (n >>> 3) {
                case 1:
                    i.id = e.int64();
                    break;
                case 2:
                    i.roomId = e.int32();
                    break;
                case 3:
                    i.userId = e.int32();
                    break;
                case 4:
                    i.name = e.string();
                    break;
                case 6:
                    i.type = e.int32();
                    break;
                case 7:
                    i.createTime = e.int64();
                    break;
                case 8:
                    i.chat = e.string();
                    break;
                case 9:
                    i.level = e.int32();
                    break;
                case 10:
                    if (i.titles && i.titles.length || (i.titles = []), (n & 7) === 2) {
                        let d = e.uint32() + e.pos;
                        for (; e.pos < d;) i.titles.push(e.int32())
                    } else i.titles.push(e.int32());
                    break;
                case 11:
                    i.titleDesc && i.titleDesc.length || (i.titleDesc = []), i.titleDesc.push(e.string());
                    break;
                default:
                    e.skipType(n & 7);
                    break
            }
        }
        return i
    }, o
})();
class W {
    constructor(e, {
        key: t,
        store: s
    }) {
        a(this, "data");
        a(this, "store");
        s = s || X, this.store = new s(t), this.data = l.proxy(Object.assign({}, e));
        let i = null;
        const n = q(d => {
            this.store.save(d)
        }, 5e3, {
            leading: !0
        });
        l.subscribe(this.data, () => {
            const d = JSON.stringify(this.data);
            i !== d && (i = d, n(i))
        }), this.forceSync()
    }
    async forceSync() {
        let e = this.store.sync();
        if (e instanceof Promise && (e = await e), e) {
            const t = JSON.parse(e);
            for (let s in this.data) this.data[s] !== void 0 && (this.data[s] = t[s])
        }
    }
}
class X {
    constructor(e) {
        a(this, "key");
        a(this, "data", "");
        this.key = `ns_${e}`
    }
    sync() {
        return this.data = localStorage.getItem(this.key) || "", this.data
    }
    save(e) {
        e != this.data && (this.data = e, localStorage.setItem(this.key, e))
    }
}
const z = /(\[\w+=.+?\])/,
    K = /(\[(\w+=.+?)\])/,
    R = class R {
        constructor(e) {
            a(this, "id");
            a(this, "roomId");
            a(this, "userId");
            a(this, "name");
            a(this, "type");
            a(this, "createTime");
            a(this, "chat");
            a(this, "level");
            a(this, "titles");
            a(this, "titleDesc");
            a(this, "state", 0);
            a(this, "source", "");
            a(this, "fullData", null);
            a(this, "isFirst", !1);
            a(this, "isLast", !1);
            const {
                id: t,
                roomId: s,
                userId: i,
                name: n,
                type: d,
                createTime: N,
                chat: C,
                level: S,
                titles: H,
                titleDesc: x
            } = e;
            if (this.id = Number(t), this.roomId = s, this.userId = i, this.name = n, this.type = d, this.createTime = Number(N), this.chat = C, this.source = C, this.level = S, this.titles = H || [], this.titleDesc = x || [], this.id || (this.id = `vid${++R.cid}`), this.userId == 0 && (this.name = A.siteName, this.titles.push(-1), this.level = 0), this.type == 1) this.chat = JSON.parse(this.chat);
            else {
                let L = [];
                J(this.chat).split(z).forEach(D => {
                    if (D === "") return;
                    let O = D.match(K);
                    if (O) {
                        let [E, F] = O[2].split("="), M = F.split(","), $ = {
                            type: E,
                            args: M
                        };
                        L.push($)
                    } else L.push(D)
                }), this.chat = L
            }
        }
        async loadFull() {
            return this.fullData || (this.fullData = this._loadFull()), this.fullData
        }
        async _loadFull() {
            try {
                const e = await p.get(`/chat/detail/${this.id}/`);
                if (e) {
                    const {
                        chat: t
                    } = new R(e);
                    this.chat = t
                }
            } catch (e) {}
        }
    };
a(R, "cid", 0);
let T = R;
const Z = /https?:\/\/[\S]+/,
    Q = ["dogcrash.top", "87.com", "t1-tozpsiwmuyjayyiw.dogcrash.top", "stage.87.com"],
    w = class w extends j {
        constructor(t, s, i) {
            super();
            a(this, "state");
            a(this, "atDict", {});
            a(this, "id");
            a(this, "name");
            a(this, "offset", 0);
            a(this, "lastReadTime", 0);
            a(this, "onAppendMessage", () => {});
            a(this, "virtualRef", v.createRef());
            a(this, "store");
            this.state = l.proxy({
                lastAtTime: i.storage.lastAtTime,
                unReadNum: 0,
                isLoading: !0,
                atList: [],
                chatList: [],
                pinMsg: {
                    userName: "",
                    msgId: -1,
                    msgContent: ""
                },
                canPinAndUnpin: !1
            }), this.id = t, this.name = s, this.store = i, this.scrollToBottom = this.scrollToBottom.bind(this)
        }
        async join() {
            this.state.isLoading = !0;
            let t = await this.store.socketRequest("join", m.encode(h.RoomIdParam)({
                roomId: this.id
            })).then(m.decode(h.ChatHistory));
            this.state.isLoading = !1, this.state.chatList = l.ref([]), this.offset = 0, this.state.atList = l.ref([]), this.atDict = {}, t.chats.forEach(i => this.addChat(i)), this.state.unReadNum = 0;
            const s = this.state.chatList[this.state.chatList.length - 1];
            s && (this.lastReadTime = s.createTime), this.getPinnedMsg(), this.getPinnedPermission()
        }
        getPinnedMsg() {
            p.get(`/chat/room/${this.id}/pinned-msg/`).then(t => {
                if (t) {
                    const {
                        msgContent: s,
                        msgId: i,
                        userName: n
                    } = t;
                    this.state.pinMsg = {
                        msgContent: s || "",
                        msgId: i || 0,
                        userName: n || ""
                    }
                }
            }).catch(console.log)
        }
        getPinnedPermission() {
            y.state.login && p.get(`/account/chatroom-permissions/?roomId=${this.id}`).then(t => {
                if (t) {
                    const s = t.canPinAndUnpin || !1;
                    this.state.canPinAndUnpin = s
                }
            }).catch(console.log)
        }
        addChat(t) {
            const s = this.state.chatList[this.state.chatList.length - 1],
                i = s ? s.userId != t.userId : !0,
                n = new T(t);
            return n.isFirst = i, this.state.chatList = l.ref(this.state.chatList.concat(n)), this.lastReadTime < n.createTime && this.state.unReadNum++, this.addAt(n), this.state.chatList.length > w.MAX_CHAT_LENGTH && (this.state.chatList = l.ref(this.state.chatList.concat().splice(0, w.MAX_CHAT_LENGTH / 2)), this.rebuildFirstData()), this.state.chatList.length < 20 && this.setReadIndex(this.state.chatList.length - 1), n
        }
        updateChat(t) {
            const s = new T(t),
                i = this.state.chatList.find(n => n.id == s.id);
            i && (i.chat = s.chat)
        }
        rebuildFirstData() {
            this.state.chatList.forEach((t, s) => {
                s == 0 ? t.isFirst = !0 : t.isFirst = this.state.chatList[s - 1].userId != t.userId
            })
        }
        setReadIndex(t) {
            const s = this.state.chatList[t],
                i = this.state.chatList.length - 1 - t;
            s && i >= 0 && i < this.state.unReadNum && (this.state.unReadNum = i, this.lastReadTime = s.createTime)
        }
        deleteChatById(t) {
            const s = this.state.chatList.findIndex(i => i.id == t);
            s != -1 && (this.state.chatList.splice(s, 1), this.state.chatList = l.ref(this.state.chatList.concat()), this.rebuildFirstData(), this.emit("remove", s, 1))
        }
        async leave() {
            let t = m.encode(h.RoomIdParam)({
                roomId: this.id
            });
            await this.store.socketRequest("leave", t)
        }
        async sendMessage(t) {
            if (await y.waitLogin(), t == "") return;
            const s = t.startsWith("/pinmsg");
            return t = this.translateAt(t), t = t.replace(Z, i => `[link=${encodeURIComponent(i)}]`), t = t.replace("/pinmsg ", ""), p.post(`/chat/room/${this.id}/send/`, {
                name: y.state.name,
                chat: t,
                needPin: s
            })
        }
        translateAt(t) {
            return /\@(.+?)\:/.test(t) ? t : t.replace(/\@(.+?)\s/g, (s, i) => {
                const n = U.findByKey(i);
                return n && (i = n.name), `@${i}: `
            })
        }
        async delChat(t) {
            return p.post(`/chat/remove/${t}/`)
        }
        async banned(t, s, i) {
            return p.post(`/chat/block/${t}/`, {
                blockTime: s,
                chatId: i
            })
        }
        async addFriend(t) {
            await p.post(`/game/support/chat/private/${t}/apply/`)
        }
        scrollToBottom() {
            const t = this.virtualRef.current;
            t && t.scrollToIndex(this.state.chatList.length - 1)
        }
        addAt(t) {
            if (!(t.type == 1 || t.createTime <= this.state.lastAtTime || this.atDict[t.id] || t.chat.findIndex(s => s.type == "user" && s.args[0] == y.state.userId) == -1)) return this.state.atList = l.ref([...this.state.atList, t]), this.atDict[t.id] = t, t
        }
        jumpAt() {
            const [t, ...s] = this.state.atList, i = this.virtualRef.current;
            if (t && i) {
                let n = this.state.chatList.indexOf(t);
                i.scrollToIndex(n), this.state.atList = l.ref(s), delete this.atDict[t.id], this.state.lastAtTime = t.createTime, this.store.storage.lastAtTime = this.state.lastAtTime
            }
        }
    };
a(w, "MAX_CHAT_LENGTH", 2e4);
let r = w;
class V extends j {
    constructor() {
        super();
        a(this, "socket", m.socket("/chat/hall"));
        a(this, "socketRequest");
        a(this, "currentRoom");
        a(this, "roomRef", v.createRef());
        a(this, "firstJoin", !1);
        a(this, "isBottom", !1);
        a(this, "remScale", 16);
        a(this, "MAX_CHAT_LENGTH", 100);
        a(this, "parseDict", {});
        a(this, "rooms");
        a(this, "roomDict");
        a(this, "commands", []);
        a(this, "storage", new W({
            lastAtTime: 0,
            lastRoomid: -1
        }, {
            key: "chat"
        }).data);
        this.socketRequest = m.socketRequestBind(this.socket), this.remScale = (Math.min(globalThis.innerWidth / +A.DESIGN_WIDTH), 16);
        let t = [0, 14, 9, 8, 2, 19, 4, 11, 6, 3, 5, 13, 12, 7, 10, 15, 16, 17, 18, 20];
        globalThis.location && Q.includes(globalThis.location.host) && t.forEach((s, i, n) => {
            n[i] = s + 100
        }), this.rooms = [new r(t[0], "Global", this), new r(t[1], "Sports", this), new r(t[2], c.en[0], this), new r(t[3], c.pt[0], this), new r(t[4], c.id[0], this), new r(t[5], c.bn[0], this), new r(t[6], c.ru[0], this), new r(t[7], c.fa[0], this), new r(t[8], c.es[0], this), new r(t[9], c.vi[0], this), new r(t[10], c.tl[0], this), new r(t[11], c.de[0], this), new r(t[12], c.hi[0], this), new r(t[13], c.my[0], this), new r(t[14], c.fr[0], this), new r(t[15], c.ko[0], this), new r(t[16], c.th[0], this), new r(t[17], c.ur[0], this), new r(t[18], c.ja[0], this), new r(t[19], c.tr[0], this)], this.roomDict = this.rooms.reduce((s, i) => (s[i.id] = i, s), {}), this.currentRoom = this.storage.lastRoomid === -1 ? this.getRoomByI18n(b.language) : this.getRoomByid(this.storage.lastRoomid), this.onScroll = this.onScroll.bind(this), this.bindEvent(), this.socket.connect(); {
            const s = () => {
                const i = this.getRoomByI18n(b.language);
                this.joinRoom(i), b.off("languageChanged", s)
            };
            this.storage.lastRoomid === -1 && b.on("languageChanged", s)
        }
    }
    getRoomByI18n(t) {
        const s = c[t];
        return s ? this.rooms.find(i => i.name === s[0]) || this.getRoomByid(0) : this.getRoomByid(0)
    }
    getRoomByid(t) {
        return this.rooms.find(s => s.id === t) || this.currentRoom || this.rooms[0]
    }
    getRoomByName(t) {
        return this.rooms.find(s => s.name === t)
    }
    joinRoom(t) {
        t != this.currentRoom && (this.currentRoom && this.currentRoom.leave(), this.currentRoom = t, this.currentRoom.join(), this.storage.lastRoomid = this.currentRoom.id, this.emit("room_change"))
    }
    addParser(t, s, i = 2.6875) {
        this.parseDict[t] = {
            minSize: i * this.remScale,
            parser: s
        }
    }
    onScroll() {
        const t = this.roomRef.current;
        t && (t.scrollHeight - t.offsetHeight - t.scrollTop < 100 ? this.isBottom = !0 : this.isBottom = !1)
    }
    addCommand(t) {
        this.commands.push(t)
    }
    bindEvent() {
        this.socket.on("chat", m.decodeBind(t => {
            const s = this.roomDict[t.roomId];
            s && s.addChat(t).userId === y.state.userId && s.scrollToBottom()
        }, h.Chat)), this.socket.on("chat-delete", m.decodeBind(t => {
            const s = this.roomDict[t.roomId];
            s && s.deleteChatById(t.id.toNumber())
        }, h.Chat)), this.socket.on("chat-update", m.decodeBind(t => {
            const s = this.roomDict[t.roomId];
            s && s.updateChat(t)
        }, h.Chat)), this.socket.on("connect", () => {
            this.currentRoom && this.currentRoom.join()
        })
    }
}
const I = new V;

function B() {
    const [o, e] = P.useState(I.currentRoom);
    return P.useEffect(() => {
        function t() {
            e(I.currentRoom)
        }
        return I.on("room_change", t), () => {
            I.off("room_change", t)
        }
    }, []), o
}

function Y(o) {
    return l.useProxy(o.state)
}

function tt() {
    return Y(B())
}
export {
    tt as a, I as p, B as u
};