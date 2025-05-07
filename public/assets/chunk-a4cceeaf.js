var G = Object.defineProperty,
    Q = Object.defineProperties;
var W = Object.getOwnPropertyDescriptors;
var z = Object.getOwnPropertySymbols;
var X = Object.prototype.hasOwnProperty,
    Y = Object.prototype.propertyIsEnumerable;
var A = (e, i, n) => i in e ? G(e, i, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : e[i] = n,
    F = (e, i) => {
        for (var n in i || (i = {})) X.call(i, n) && A(e, n, i[n]);
        if (z)
            for (var n of z(i)) Y.call(i, n) && A(e, n, i[n]);
        return e
    },
    O = (e, i) => Q(e, W(i));
import {
    j as t
} from "./chunk-a4af42e8.js";
import {
    r as L,
    R as P
} from "./chunk-73e80d68.js";
import {
    ev as S,
    c_ as Z,
    dl as N,
    e5 as ee,
    ef as te,
    ed as ne,
    ez as se,
    dL as ie,
    ci as _,
    dk as oe,
    cJ as T,
    eq as $,
    cs as V,
    du as x,
    dy as j,
    dt as ce,
    dC as E,
    cw as re,
    d0 as ae,
    cT as B,
    dr as le
} from "./chunk-64278058.js";
import {
    p as R
} from "./chunk-569cb855.js";
import {
    c as M
} from "./chunk-5bcb444f.js";

function me({
    onChange: e
}) {
    const {
        t: i
    } = S(), [n] = L.useState(() => [i("Inappropriate content (spam, ad, ref links, etc.)"), i("Insults, provocations, cursing "), i("Begging "), i("Scam attempt ")].map(u => ({
        label: u,
        value: u
    }))), [y, h] = L.useState(n[0].value), a = u => {
        h(u)
    };
    return L.useEffect(() => {
        e(y)
    }, [y]), t.jsxs("div", {
        className: de,
        children: [t.jsx("div", {
            className: "title",
            children: i("Please choose the reporting reason:")
        }), t.jsx(Z, {
            value: y,
            onChange: a,
            options: n
        })]
    })
}
const de = "wdz28s8";

function pe(e, i) {
    const n = i.getTime() - e;
    return n <= 60 * 1e3 ? "now" : n < 60 * 60 * 1e3 ? Math.round(n / 6e4) + "m" : n < 24 * 60 * 60 * 1e3 ? Math.round(n / 36e5) + "h" : n < 365 * 24 * 60 * 60 * 1e3 ? Math.round(n / 864e5) + "d" : Math.round(n / 31536e6) + "y"
}

function ue(e) {
    const i = {
        content: e.content,
        createDate: e.createDate,
        createTime: e.createTime,
        gameId: e.gameId,
        id: e.commentId,
        isLike: e.isCommentLike,
        likeCount: e.likeCount,
        replyCount: e.replyCount,
        updateDate: e.updateDate,
        updateTime: e.updateTime,
        userId: e.userId,
        userName: e.userName,
        editTime: e.editTime,
        titles: e.titles,
        titleDesc: e.titleDesc,
        pinned: e.pinned
    };
    if (!e.replyId) return {
        comment: i,
        replyList: []
    };
    const n = {
        commentId: e.commentId,
        commentUserId: e.userId,
        content: e.replyContent || "",
        createDate: e.replyCreateDate || "",
        createTime: e.replyCreateTime || 0,
        gameId: i.gameId,
        id: e.replyId || 0,
        isLike: e.isReplyLike,
        likeCount: e.replyLikeCount || 0,
        replyCount: e.replyCount,
        replyId: e.toReplyId || 0,
        replyUserId: e.replyUserId || 0,
        replyUserName: e.replyUserName || "",
        status: 1,
        updateDate: e.replyUpdateDate || "",
        updateTime: e.replyUpdateTime || 0,
        userId: N.state.userId,
        userName: N.state.name,
        editTime: 0,
        titles: e.titles,
        titleDesc: e.titleDesc
    };
    return {
        comment: i,
        replyList: [n]
    }
}

function ye(e, i, n) {
    return {
        commentId: n.id,
        commentUserId: n.userId,
        titles: n.titles,
        titleDesc: n.titleDesc,
        content: i,
        createDate: Date.now().toLocaleString(),
        createTime: Date.now(),
        gameId: n.gameId,
        id: e,
        isLike: 0,
        likeCount: 0,
        replyCount: 0,
        replyId: 0,
        replyUserId: 0,
        replyUserName: "",
        status: 1,
        updateDate: Date.now().toLocaleString(),
        updateTime: Date.now(),
        userId: N.state.userId,
        userName: N.state.name,
        editTime: 0
    }
}

function he(e, i, n) {
    return {
        commentId: n.commentId,
        commentUserId: n.commentUserId,
        content: i,
        createDate: Date.now().toLocaleString(),
        createTime: Date.now(),
        gameId: n.gameId,
        titles: n.titles,
        titleDesc: n.titleDesc,
        id: e,
        isLike: 0,
        likeCount: 0,
        replyCount: 0,
        replyId: n.id,
        replyUserId: n.userId,
        replyUserName: n.userName,
        status: 1,
        updateDate: Date.now().toLocaleString(),
        updateTime: Date.now(),
        userId: N.state.userId,
        userName: N.state.name,
        editTime: 0
    }
}
const H = P.memo(function({
        children: e,
        iconElement: i
    }) {
        const n = ee(),
            [y, h] = L.useState(!1),
            a = te(() => h(!1));
        return t.jsxs("div", {
            className: M(Ie, "click-pop-btn"),
            ref: a,
            onMouseEnter: () => !n && h(!0),
            onMouseLeave: () => !n && h(!1),
            children: [t.jsx("button", {
                className: "click-btn",
                onClick: () => h(!y),
                children: i
            }), y && t.jsx("div", {
                className: "click-pop-wrap",
                onClick: () => h(!1),
                children: e
            })]
        })
    }),
    Ie = "c1wyuajk",
    {
        UserInfo: fe
    } = _,
    J = L.memo(function({
        userId: e,
        userName: i,
        createTime: n,
        likeCount: y,
        isLike: h,
        editTime: a,
        chatFn: u,
        titles: l,
        titleDesc: s,
        supportFn: d,
        editFn: f,
        deleteFn: D,
        reportFn: w,
        haveRight: v = !0,
        showEdit: U = !0
    }) {
        const {
            t: k
        } = S(), b = ne(), o = se.serverTime(), c = a > 0 ? a : n, p = pe(c, o), r = ie(), m = I => {
            r.login ? I() : b("#/login")
        }, g = r.chatRoomPermission.deleteable;
        return t.jsxs("div", {
            className: M(ge, "comment-reply-header"),
            children: [t.jsxs("div", {
                className: "c-h-left",
                children: [t.jsx("div", {
                    className: "user-info-wrap",
                    children: t.jsx(fe, {
                        userId: e,
                        name: i,
                        showName: !0
                    })
                }), t.jsx(_.UserTitle, {
                    className: "user-title",
                    code: l || [],
                    desc: s || []
                }), t.jsx(oe, {
                    children: t.jsx("p", {
                        className: "time",
                        children: p
                    })
                })]
            }), v && t.jsxs("div", {
                className: "c-h-right",
                children: [t.jsxs("button", {
                    onClick: () => m(d),
                    className: h > 0 ? "like" : "",
                    children: [t.jsx(T, {
                        name: "Kudos"
                    }), y > 0 && t.jsx("span", {
                        children: y
                    })]
                }), t.jsx("button", {
                    onClick: () => m(u),
                    children: t.jsx(T, {
                        name: "Reply"
                    })
                }), t.jsx(H, {
                    iconElement: t.jsx(T, {
                        name: "More"
                    }),
                    children: e === r.userId ? t.jsxs(t.Fragment, {
                        children: [U && t.jsx("button", {
                            className: "click-pop-item",
                            onClick: () => m(f),
                            children: k("Edit your comment")
                        }), t.jsx("button", {
                            className: "click-pop-item",
                            onClick: () => m(D),
                            children: k("Delete the comment")
                        })]
                    }) : t.jsxs(t.Fragment, {
                        children: [t.jsx("button", {
                            className: "click-pop-item",
                            onClick: () => m(w),
                            children: k("Report the comment")
                        }), g && t.jsx("button", {
                            className: "click-pop-item",
                            onClick: () => m(D),
                            children: k("Delete the comment")
                        })]
                    })
                })]
            })]
        })
    }),
    ge = "c1o1lcrh",
    je = "/assets/pinned.91ed0ae7.png",
    K = P.memo(function({
        gameUnique: e,
        commentInfo: i,
        replyInfoList: n,
        deleteComment: y,
        inPop: h,
        getAllReplies: a
    }) {
        const {
            t: u
        } = S(), l = L.useRef(-1), [s, d] = $({
            comment: i,
            replyList: n,
            moreOpen: !0
        });
        L.useEffect(() => {
            d({
                comment: i,
                replyList: n
            })
        }, [i, n]);
        const f = (o = -1) => {
                if (l.current < 0) {
                    l.current = 1;
                    const c = o >= 0;
                    let p, r = !1;
                    if (c) {
                        const m = s.replyList[o];
                        p = {
                            contentId: m.id,
                            contentType: 2
                        }, m.isLike && (r = !0)
                    } else p = {
                        contentId: s.comment.id,
                        contentType: 1
                    }, s.comment.isLike && (r = !0);
                    x.post(`/comment/like/${r?"undo":"do"}/`, p).then(m => {
                        let g = r ? -1 : 1;
                        if (c) {
                            const I = [...s.replyList];
                            I[o].isLike += g, I[o].likeCount += g, d({
                                replyList: I
                            })
                        } else {
                            const I = F({}, s.comment);
                            I.isLike += g, I.likeCount += g, d({
                                comment: I
                            })
                        }
                    }).catch(j).finally(() => l.current = -1)
                }
            },
            D = async (o = -1) => {
                if (l.current < 0) {
                    if (N.state.vipLevel < 4) {
                        j(u("Unlock at VIP 4"));
                        return
                    }
                    const c = o >= 0;
                    let p = null;
                    if (c) {
                        const m = s.replyList[o];
                        p = await R("", m.userName, m.userId)
                    } else p = await R("");
                    if (!p) return;
                    const r = p.content;
                    l.current = 1, x.post("/comment/reply/add/", {
                        commentId: s.comment.id,
                        content: r,
                        replyId: c ? s.replyList[o].id : 0,
                        replyUserId: p.haveAt ? s.replyList[o].userId : 0
                    }).then(m => {
                        const g = c ? he(m || 0, r, s.replyList[o]) : ye(m || 0, r, s.comment),
                            I = [...s.replyList];
                        I.unshift(g), d({
                            replyList: I
                        })
                    }).catch(j).finally(() => l.current = -1)
                }
            },
            w = async (o = -1) => {
                if (l.current < 0) {
                    const c = o >= 0;
                    if (!c && s.comment.replyCount > 0) return;
                    const p = c ? s.replyList[o].content : s.comment.content,
                        r = ce(p);
                    let m = null;
                    if (r.length > 1 ? (r[0].args[0], m = await R(r[1], r[0].args[1])) : m = await R(r[0]), !m) return;
                    const g = m.content;
                    l.current = 1, c ? x.post("/comment/reply/edit/", {
                        commentId: s.comment.id,
                        content: g,
                        id: s.replyList[o].id,
                        replyId: s.replyList[o].replyId,
                        replyUserId: s.replyList[o].replyUserId
                    }).then(I => {
                        const C = [...s.replyList];
                        C[o].content = g, C[o].editTime = Date.now(), d({
                            replyList: C
                        })
                    }).catch(j).finally(() => l.current = -1) : x.post("/comment/edit/", {
                        commentId: s.comment.id,
                        content: g,
                        gameUnique: e
                    }).then(I => {
                        const C = F({}, s.comment);
                        C.content = g, C.editTime = Date.now(), d({
                            comment: C
                        })
                    }).catch(j).finally(() => l.current = -1)
                }
            },
            v = async (o = -1) => {
                if (l.current < 0) {
                    const c = o >= 0;
                    if (!await E.confirm("Are you sure to delete this comment?")) return;
                    l.current = 1, c ? x.post(`/comment/reply/del/${s.replyList[o].id}/`, {}).then(p => {
                        const r = [...s.replyList];
                        r.splice(o, 1), d({
                            replyList: r
                        })
                    }).catch(j).finally(() => l.current = -1) : x.post(`/comment/del/${s.comment.id}/`, {}).then(p => {
                        y()
                    }).catch(j).finally(() => l.current = -1)
                }
            },
            U = async (o = -1) => {
                if (l.current < 0) {
                    const c = o >= 0,
                        p = await E.prompt(me);
                    if (!p) return;
                    l.current = 1, x.post("/comment/report/do/", {
                        contentId: c ? s.replyList[o].id : s.comment.id,
                        contentType: c ? 2 : 1,
                        reason: p
                    }).then(r => {
                        j("Success!")
                    }).catch(j).finally(() => l.current = -1)
                }
            },
            k = s.comment.replyCount - s.replyList.length,
            b = !h && k > 0 && s.moreOpen;
        return t.jsxs("div", {
            className: xe,
            children: [t.jsx(J, {
                userId: s.comment.userId,
                userName: s.comment.userName,
                createTime: s.comment.createTime,
                likeCount: s.comment.likeCount,
                isLike: s.comment.isLike,
                editTime: s.comment.editTime,
                titles: s.comment.titles,
                titleDesc: s.comment.titleDesc,
                chatFn: () => D(),
                supportFn: () => f(),
                editFn: () => w(),
                deleteFn: () => v(),
                reportFn: () => U(),
                showEdit: s.replyList.length <= 0
            }), t.jsx("div", {
                className: "comment-text",
                children: t.jsx(V, {
                    content: s.comment.content
                })
            }), s.replyList.length > 0 && t.jsx("div", {
                className: "sub-reply-wrap",
                children: s.replyList.map((o, c) => t.jsxs("div", {
                    className: "replay-item",
                    children: [t.jsx(J, {
                        userId: o.userId || 0,
                        userName: o.userName || "",
                        createTime: o.createTime || Date.now(),
                        likeCount: o.likeCount || 0,
                        isLike: o.isLike,
                        editTime: o.editTime,
                        titles: o.titles,
                        titleDesc: o.titleDesc,
                        chatFn: () => D(c),
                        supportFn: () => f(c),
                        editFn: () => w(c),
                        deleteFn: () => v(c),
                        reportFn: () => U(c)
                    }), t.jsx("div", {
                        className: "replay-message",
                        children: t.jsx(V, {
                            content: o.content
                        })
                    })]
                }, `sub-comment-item-${c}`))
            }), b && t.jsxs("button", {
                className: "more-replies-btn",
                onClick: () => {
                    a && a(o => {
                        o && d({
                            moreOpen: !1
                        })
                    })
                },
                children: [t.jsx("span", {
                    children: u("Show {{number}} Replies", {
                        number: k
                    })
                }), t.jsx(T, {
                    name: "Arrow"
                })]
            }), s.comment.pinned && !h && t.jsx("div", {
                className: M("pined-wrap", b && "have-more"),
                children: t.jsxs("div", {
                    className: "pined-info",
                    children: [t.jsx("img", {
                        alt: "pinned",
                        src: je
                    }), t.jsx("span", {
                        children: u("Pinned")
                    })]
                })
            })]
        })
    }),
    xe = "p19j6xag",
    Le = {
        page: 1,
        pageSize: 20,
        total: 1,
        totalPage: 1,
        list: []
    },
    q = P.memo(function({
        gameUnique: e,
        commentId: i,
        deleteFn: n,
        replyHttpInfo: y
    }) {
        const {
            t: h
        } = S(), [a, u] = $({
            loading: !0,
            moreLoading: !1,
            commentInfo: {},
            replyInfo: y || Le
        });
        L.useEffect(() => {
            let d = [x.post(`/comment/get/${i}/`)];
            y || d.push(x.post("/comment/reply/list/", {
                commentId: i,
                page: 1,
                pageSize: 20
            })), Promise.all(d).then(f => {
                f.length > 1 ? u({
                    loading: !1,
                    commentInfo: f[0],
                    replyInfo: f[1]
                }) : u({
                    loading: !1,
                    commentInfo: f[0]
                })
            }).catch(f => {
                j(f), u({
                    loading: !1
                })
            })
        }, []);
        const l = a.replyInfo.totalPage > a.replyInfo.page,
            s = () => {
                a.loading || a.moreLoading || (u({
                    moreLoading: !0
                }), x.post("/comment/reply/list/", {
                    commentId: i,
                    page: a.replyInfo.page + 1,
                    pageSize: 20
                }).then(d => {
                    if (d && d.list) {
                        const f = [...a.replyInfo.list].concat(d.list);
                        u({
                            moreLoading: !1,
                            replyInfo: O(F({}, d), {
                                list: f
                            })
                        })
                    }
                }).catch(d => {
                    j(d), u({
                        moreLoading: !1
                    })
                }))
            };
        return t.jsx(re, {
            className: Ce,
            children: t.jsx(ae, {
                id: "comment-replay",
                children: a.loading ? t.jsx(B, {}) : t.jsxs(t.Fragment, {
                    children: [t.jsx(K, {
                        gameUnique: e,
                        commentInfo: a.commentInfo,
                        deleteComment: () => {
                            E.close(), n()
                        },
                        replyInfoList: a.replyInfo.list,
                        inPop: !0
                    }, "reply-pop-" + a.commentInfo.id), l && t.jsx("div", {
                        className: "more-reply-btn",
                        children: a.moreLoading ? t.jsx(B, {}) : t.jsxs("button", {
                            onClick: () => s(),
                            children: [t.jsx("p", {
                                children: h("View More Comments")
                            }), t.jsx(T, {
                                name: "Arrow"
                            })]
                        })
                    })]
                })
            })
        })
    });

function ke({
    commentId: e,
    gameUnique: i
}) {
    le.push(t.jsx(q, {
        gameUnique: i,
        deleteFn: () => {},
        commentId: e
    }))
}
const Ce = "rol0hx2",
    Ne = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: q,
        openCommentReply: ke
    }, Symbol.toStringTag, {
        value: "Module"
    }));
export {
    H as C, K as P, q as R, Ne as a, ue as g
};