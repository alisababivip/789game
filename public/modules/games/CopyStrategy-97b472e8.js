var Yu = Object.defineProperty,
    Vu = Object.defineProperties;
var Hu = Object.getOwnPropertyDescriptors;
var Is = Object.getOwnPropertySymbols;
var Uu = Object.prototype.hasOwnProperty,
    Gu = Object.prototype.propertyIsEnumerable;
var Ga = (n, i, o) => i in n ? Yu(n, i, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: o
    }) : n[i] = o,
    Xn = (n, i) => {
        for (var o in i || (i = {})) Uu.call(i, o) && Ga(n, o, i[o]);
        if (Is)
            for (var o of Is(i)) Gu.call(i, o) && Ga(n, o, i[o]);
        return n
    },
    mr = (n, i) => Vu(n, Hu(i));
var ct = (n, i, o) => (Ga(n, typeof i != "symbol" ? i + "" : i, o), o);
import {
    c as We,
    g as qu,
    _ as S,
    a as f,
    R as cn,
    b as $u,
    r as $,
    l as an
} from "./vendor-8c02be2a.js";
import {
    w as Po
} from "./CommonI18nProvider-b34bf9d5.js";
import {
    H as Ii,
    A as Gr,
    l as Xu,
    o as Zu,
    I as uo,
    J as Ju,
    K as Ku,
    $ as on,
    f as Qu,
    L as td,
    N as ed,
    q as ea,
    r as nd,
    w as rd,
    d as id,
    y as ad,
    t as od,
    m as sd,
    n as ld,
    O as cd,
    p as ud
} from "./AllPlayers-fab6a982.js";
import {
    o as Ci,
    c as sn,
    r as Pi
} from "./index-66d88a57.js";
import {
    b as Zt,
    a as To,
    c as Do,
    d as Oo,
    e as dd
} from "./context-07d48342.js";
import {
    g as hd
} from "./namespace-3892e441.js";
import {
    f as er
} from "./Coin-19c44f04.js";
import {
    G as fd
} from "./GameUserScript-68b25857.js";
import {
    G as vn
} from "./index-f3bd3ea1.js";
import {
    G as md
} from "./GameCard-2d619a3b.js";
import {
    u as gd
} from "./GameWin-a8900dd5.js";
import {
    b as Vt,
    T as Ao,
    L as Ce,
    a as Pe,
    g as bl,
    d as ho,
    c as pd
} from "./utils-494cfb1e.js";
import {
    r as yd
} from "./react_dom_share-6cd4a17b.js";
import {
    h as vd
} from "./enc-hex-e4b3088b.js";
var xl = {
    exports: {}
};
/*!
    localForage -- Offline Storage, Improved
    Version 1.10.0
    https://localforage.github.io/localForage
    (c) 2013-2017 Mozilla, Apache License 2.0
*/
xl.exports = function n(i, o, l) {
    function h(k, j) {
        if (!o[k]) {
            if (!i[k]) {
                var N = typeof Ii == "function" && Ii;
                if (!j && N) return N(k, !0);
                if (p) return p(k, !0);
                var C = new Error("Cannot find module '" + k + "'");
                throw C.code = "MODULE_NOT_FOUND", C
            }
            var B = o[k] = {
                exports: {}
            };
            i[k][0].call(B.exports, function(L) {
                var z = i[k][1][L];
                return h(z || L)
            }, B, B.exports, n, i, o, l)
        }
        return o[k].exports
    }
    for (var p = typeof Ii == "function" && Ii, v = 0; v < l.length; v++) h(l[v]);
    return h
}({
    1: [function(n, i, o) {
        (function(l) {
            var h, p, v = l.MutationObserver || l.WebKitMutationObserver;
            if (v) {
                var k = 0,
                    j = new v(L),
                    N = l.document.createTextNode("");
                j.observe(N, {
                    characterData: !0
                }), h = function() {
                    N.data = k = ++k % 2
                }
            } else if (l.setImmediate || l.MessageChannel === void 0) h = "document" in l && "onreadystatechange" in l.document.createElement("script") ? function() {
                var Y = l.document.createElement("script");
                Y.onreadystatechange = function() {
                    L(), Y.onreadystatechange = null, Y.parentNode.removeChild(Y), Y = null
                }, l.document.documentElement.appendChild(Y)
            } : function() {
                setTimeout(L, 0)
            };
            else {
                var C = new l.MessageChannel;
                C.port1.onmessage = L, h = function() {
                    C.port2.postMessage(0)
                }
            }
            var B = [];

            function L() {
                var Y, Z;
                p = !0;
                for (var rt = B.length; rt;) {
                    for (Z = B, B = [], Y = -1; ++Y < rt;) Z[Y]();
                    rt = B.length
                }
                p = !1
            }

            function z(Y) {
                B.push(Y) !== 1 || p || h()
            }
            i.exports = z
        }).call(this, We !== void 0 ? We : typeof self != "undefined" ? self : typeof window != "undefined" ? window : {})
    }, {}],
    2: [function(n, i, o) {
        var l = n(1);

        function h() {}
        var p = {},
            v = ["REJECTED"],
            k = ["FULFILLED"],
            j = ["PENDING"];

        function N(W) {
            if (typeof W != "function") throw new TypeError("resolver must be a function");
            this.state = j, this.queue = [], this.outcome = void 0, W !== h && z(this, W)
        }

        function C(W, at, J) {
            this.promise = W, typeof at == "function" && (this.onFulfilled = at, this.callFulfilled = this.otherCallFulfilled), typeof J == "function" && (this.onRejected = J, this.callRejected = this.otherCallRejected)
        }

        function B(W, at, J) {
            l(function() {
                var X;
                try {
                    X = at(J)
                } catch (nt) {
                    return p.reject(W, nt)
                }
                X === W ? p.reject(W, new TypeError("Cannot resolve promise with itself")) : p.resolve(W, X)
            })
        }

        function L(W) {
            var at = W && W.then;
            if (W && (typeof W == "object" || typeof W == "function") && typeof at == "function") return function() {
                at.apply(W, arguments)
            }
        }

        function z(W, at) {
            var J = !1;

            function X(gt) {
                J || (J = !0, p.reject(W, gt))
            }

            function nt(gt) {
                J || (J = !0, p.resolve(W, gt))
            }

            function st() {
                at(nt, X)
            }
            var _t = Y(st);
            _t.status === "error" && X(_t.value)
        }

        function Y(W, at) {
            var J = {};
            try {
                J.value = W(at), J.status = "success"
            } catch (X) {
                J.status = "error", J.value = X
            }
            return J
        }

        function Z(W) {
            return W instanceof this ? W : p.resolve(new this(h), W)
        }

        function rt(W) {
            var at = new this(h);
            return p.reject(at, W)
        }

        function wt(W) {
            var at = this;
            if (Object.prototype.toString.call(W) !== "[object Array]") return this.reject(new TypeError("must be an array"));
            var J = W.length,
                X = !1;
            if (!J) return this.resolve([]);
            for (var nt = new Array(J), st = 0, _t = -1, gt = new this(h); ++_t < J;) Nt(W[_t], _t);
            return gt;

            function Nt(jt, Wt) {
                function te(Gt) {
                    nt[Wt] = Gt, ++st !== J || X || (X = !0, p.resolve(gt, nt))
                }
                at.resolve(jt).then(te, function(Gt) {
                    X || (X = !0, p.reject(gt, Gt))
                })
            }
        }

        function vt(W) {
            var at = this;
            if (Object.prototype.toString.call(W) !== "[object Array]") return this.reject(new TypeError("must be an array"));
            var J = W.length,
                X = !1;
            if (!J) return this.resolve([]);
            for (var nt = -1, st = new this(h); ++nt < J;) _t(W[nt]);
            return st;

            function _t(gt) {
                at.resolve(gt).then(function(Nt) {
                    X || (X = !0, p.resolve(st, Nt))
                }, function(Nt) {
                    X || (X = !0, p.reject(st, Nt))
                })
            }
        }
        i.exports = N, N.prototype.catch = function(W) {
            return this.then(null, W)
        }, N.prototype.then = function(W, at) {
            if (typeof W != "function" && this.state === k || typeof at != "function" && this.state === v) return this;
            var J = new this.constructor(h);
            return this.state !== j ? B(J, this.state === k ? W : at, this.outcome) : this.queue.push(new C(J, W, at)), J
        }, C.prototype.callFulfilled = function(W) {
            p.resolve(this.promise, W)
        }, C.prototype.otherCallFulfilled = function(W) {
            B(this.promise, this.onFulfilled, W)
        }, C.prototype.callRejected = function(W) {
            p.reject(this.promise, W)
        }, C.prototype.otherCallRejected = function(W) {
            B(this.promise, this.onRejected, W)
        }, p.resolve = function(W, at) {
            var J = Y(L, at);
            if (J.status === "error") return p.reject(W, J.value);
            var X = J.value;
            if (X) z(W, X);
            else {
                W.state = k, W.outcome = at;
                for (var nt = -1, st = W.queue.length; ++nt < st;) W.queue[nt].callFulfilled(at)
            }
            return W
        }, p.reject = function(W, at) {
            W.state = v, W.outcome = at;
            for (var J = -1, X = W.queue.length; ++J < X;) W.queue[J].callRejected(at);
            return W
        }, N.resolve = Z, N.reject = rt, N.all = wt, N.race = vt
    }, {
        1: 1
    }],
    3: [function(n, i, o) {
        (function(l) {
            typeof l.Promise != "function" && (l.Promise = n(2))
        }).call(this, We !== void 0 ? We : typeof self != "undefined" ? self : typeof window != "undefined" ? window : {})
    }, {
        2: 2
    }],
    4: [function(n, i, o) {
        var l = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(w) {
            return typeof w
        } : function(w) {
            return w && typeof Symbol == "function" && w.constructor === Symbol && w !== Symbol.prototype ? "symbol" : typeof w
        };

        function h(w, M) {
            if (!(w instanceof M)) throw new TypeError("Cannot call a class as a function")
        }

        function p() {
            try {
                if (typeof indexedDB != "undefined") return indexedDB;
                if (typeof webkitIndexedDB != "undefined") return webkitIndexedDB;
                if (typeof mozIndexedDB != "undefined") return mozIndexedDB;
                if (typeof OIndexedDB != "undefined") return OIndexedDB;
                if (typeof msIndexedDB != "undefined") return msIndexedDB
            } catch (w) {
                return
            }
        }
        var v = p();

        function k() {
            try {
                if (!v || !v.open) return !1;
                var w = typeof openDatabase != "undefined" && /(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) && !/BlackBerry/.test(navigator.platform),
                    M = typeof fetch == "function" && fetch.toString().indexOf("[native code") !== -1;
                return (!w || M) && typeof indexedDB != "undefined" && typeof IDBKeyRange != "undefined"
            } catch (I) {
                return !1
            }
        }

        function j(w, M) {
            w = w || [], M = M || {};
            try {
                return new Blob(w, M)
            } catch (T) {
                if (T.name !== "TypeError") throw T;
                for (var I = new(typeof BlobBuilder != "undefined" ? BlobBuilder : typeof MSBlobBuilder != "undefined" ? MSBlobBuilder : typeof MozBlobBuilder != "undefined" ? MozBlobBuilder : WebKitBlobBuilder), O = 0; O < w.length; O += 1) I.append(w[O]);
                return I.getBlob(M.type)
            }
        }
        typeof Promise == "undefined" && n(3);
        var N = Promise;

        function C(w, M) {
            M && w.then(function(I) {
                M(null, I)
            }, function(I) {
                M(I)
            })
        }

        function B(w, M, I) {
            typeof M == "function" && w.then(M), typeof I == "function" && w.catch(I)
        }

        function L(w) {
            return typeof w != "string" && (w = String(w)), w
        }

        function z() {
            if (arguments.length && typeof arguments[arguments.length - 1] == "function") return arguments[arguments.length - 1]
        }
        var Y = "local-forage-detect-blob-support",
            Z = void 0,
            rt = {},
            wt = Object.prototype.toString,
            vt = "readonly",
            W = "readwrite";

        function at(w) {
            for (var M = w.length, I = new ArrayBuffer(M), O = new Uint8Array(I), T = 0; T < M; T++) O[T] = w.charCodeAt(T);
            return I
        }

        function J(w) {
            return new N(function(M) {
                var I = w.transaction(Y, W),
                    O = j([""]);
                I.objectStore(Y).put(O, "key"), I.onabort = function(T) {
                    T.preventDefault(), T.stopPropagation(), M(!1)
                }, I.oncomplete = function() {
                    var T = navigator.userAgent.match(/Chrome\/(\d+)/),
                        A = navigator.userAgent.match(/Edge\//);
                    M(A || !T || parseInt(T[1], 10) >= 43)
                }
            }).catch(function() {
                return !1
            })
        }

        function X(w) {
            return typeof Z == "boolean" ? N.resolve(Z) : J(w).then(function(M) {
                return Z = M
            })
        }

        function nt(w) {
            var M = rt[w.name],
                I = {};
            I.promise = new N(function(O, T) {
                I.resolve = O, I.reject = T
            }), M.deferredOperations.push(I), M.dbReady ? M.dbReady = M.dbReady.then(function() {
                return I.promise
            }) : M.dbReady = I.promise
        }

        function st(w) {
            var M = rt[w.name].deferredOperations.pop();
            if (M) return M.resolve(), M.promise
        }

        function _t(w, M) {
            var I = rt[w.name].deferredOperations.pop();
            if (I) return I.reject(M), I.promise
        }

        function gt(w, M) {
            return new N(function(I, O) {
                if (rt[w.name] = rt[w.name] || be(), w.db) {
                    if (!M) return I(w.db);
                    nt(w), w.db.close()
                }
                var T = [w.name];
                M && T.push(w.version);
                var A = v.open.apply(v, T);
                M && (A.onupgradeneeded = function(F) {
                    var V = A.result;
                    try {
                        V.createObjectStore(w.storeName), F.oldVersion <= 1 && V.createObjectStore(Y)
                    } catch (H) {
                        if (H.name !== "ConstraintError") throw H
                    }
                }), A.onerror = function(F) {
                    F.preventDefault(), O(A.error)
                }, A.onsuccess = function() {
                    var F = A.result;
                    F.onversionchange = function(V) {
                        V.target.close()
                    }, I(F), st(w)
                }
            })
        }

        function Nt(w) {
            return gt(w, !1)
        }

        function jt(w) {
            return gt(w, !0)
        }

        function Wt(w, M) {
            if (!w.db) return !0;
            var I = !w.db.objectStoreNames.contains(w.storeName),
                O = w.version < w.db.version,
                T = w.version > w.db.version;
            if (O && (w.version, w.version = w.db.version), T || I) {
                if (I) {
                    var A = w.db.version + 1;
                    A > w.version && (w.version = A)
                }
                return !0
            }
            return !1
        }

        function te(w) {
            return new N(function(M, I) {
                var O = new FileReader;
                O.onerror = I, O.onloadend = function(T) {
                    var A = btoa(T.target.result || "");
                    M({
                        __local_forage_encoded_blob: !0,
                        data: A,
                        type: w.type
                    })
                }, O.readAsBinaryString(w)
            })
        }

        function Gt(w) {
            return j([at(atob(w.data))], {
                type: w.type
            })
        }

        function Jt(w) {
            return w && w.__local_forage_encoded_blob
        }

        function un(w) {
            var M = this,
                I = M._initReady().then(function() {
                    var O = rt[M._dbInfo.name];
                    if (O && O.dbReady) return O.dbReady
                });
            return B(I, w, w), I
        }

        function Ze(w) {
            nt(w);
            for (var M = rt[w.name], I = M.forages, O = 0; O < I.length; O++) {
                var T = I[O];
                T._dbInfo.db && (T._dbInfo.db.close(), T._dbInfo.db = null)
            }
            return w.db = null, Nt(w).then(function(A) {
                return w.db = A, Wt(w) ? jt(w) : A
            }).then(function(A) {
                w.db = M.db = A;
                for (var F = 0; F < I.length; F++) I[F]._dbInfo.db = A
            }).catch(function(A) {
                throw _t(w, A), A
            })
        }

        function Ot(w, M, I, O) {
            O === void 0 && (O = 1);
            try {
                var T = w.db.transaction(w.storeName, M);
                I(null, T)
            } catch (A) {
                if (O > 0 && (!w.db || A.name === "InvalidStateError" || A.name === "NotFoundError")) return N.resolve().then(function() {
                    if (!w.db || A.name === "NotFoundError" && !w.db.objectStoreNames.contains(w.storeName) && w.version <= w.db.version) return w.db && (w.version = w.db.version + 1), jt(w)
                }).then(function() {
                    return Ze(w).then(function() {
                        Ot(w, M, I, O - 1)
                    })
                }).catch(I);
                I(A)
            }
        }

        function be() {
            return {
                forages: [],
                db: null,
                dbReady: null,
                deferredOperations: []
            }
        }

        function Je(w) {
            var M = this,
                I = {
                    db: null
                };
            if (w)
                for (var O in w) I[O] = w[O];
            var T = rt[I.name];
            T || (T = be(), rt[I.name] = T), T.forages.push(M), M._initReady || (M._initReady = M.ready, M.ready = un);
            var A = [];

            function F() {
                return N.resolve()
            }
            for (var V = 0; V < T.forages.length; V++) {
                var H = T.forages[V];
                H !== M && A.push(H._initReady().catch(F))
            }
            var G = T.forages.slice(0);
            return N.all(A).then(function() {
                return I.db = T.db, Nt(I)
            }).then(function(tt) {
                return I.db = tt, Wt(I, M._defaultConfig.version) ? jt(I) : tt
            }).then(function(tt) {
                I.db = T.db = tt, M._dbInfo = I;
                for (var ot = 0; ot < G.length; ot++) {
                    var bt = G[ot];
                    bt !== M && (bt._dbInfo.db = I.db, bt._dbInfo.version = I.version)
                }
            })
        }

        function xe(w, M) {
            var I = this;
            w = L(w);
            var O = new N(function(T, A) {
                I.ready().then(function() {
                    Ot(I._dbInfo, vt, function(F, V) {
                        if (F) return A(F);
                        try {
                            var H = V.objectStore(I._dbInfo.storeName).get(w);
                            H.onsuccess = function() {
                                var G = H.result;
                                G === void 0 && (G = null), Jt(G) && (G = Gt(G)), T(G)
                            }, H.onerror = function() {
                                A(H.error)
                            }
                        } catch (G) {
                            A(G)
                        }
                    })
                }).catch(A)
            });
            return C(O, M), O
        }

        function ht(w, M) {
            var I = this,
                O = new N(function(T, A) {
                    I.ready().then(function() {
                        Ot(I._dbInfo, vt, function(F, V) {
                            if (F) return A(F);
                            try {
                                var H = V.objectStore(I._dbInfo.storeName).openCursor(),
                                    G = 1;
                                H.onsuccess = function() {
                                    var tt = H.result;
                                    if (tt) {
                                        var ot = tt.value;
                                        Jt(ot) && (ot = Gt(ot));
                                        var bt = w(ot, tt.key, G++);
                                        bt !== void 0 ? T(bt) : tt.continue()
                                    } else T()
                                }, H.onerror = function() {
                                    A(H.error)
                                }
                            } catch (tt) {
                                A(tt)
                            }
                        })
                    }).catch(A)
                });
            return C(O, M), O
        }

        function ae(w, M, I) {
            var O = this;
            w = L(w);
            var T = new N(function(A, F) {
                var V;
                O.ready().then(function() {
                    return V = O._dbInfo, wt.call(M) === "[object Blob]" ? X(V.db).then(function(H) {
                        return H ? M : te(M)
                    }) : M
                }).then(function(H) {
                    Ot(O._dbInfo, W, function(G, tt) {
                        if (G) return F(G);
                        try {
                            var ot = tt.objectStore(O._dbInfo.storeName);
                            H === null && (H = void 0);
                            var bt = ot.put(H, w);
                            tt.oncomplete = function() {
                                H === void 0 && (H = null), A(H)
                            }, tt.onabort = tt.onerror = function() {
                                var Ct = bt.error ? bt.error : bt.transaction.error;
                                F(Ct)
                            }
                        } catch (Ct) {
                            F(Ct)
                        }
                    })
                }).catch(F)
            });
            return C(T, I), T
        }

        function ue(w, M) {
            var I = this;
            w = L(w);
            var O = new N(function(T, A) {
                I.ready().then(function() {
                    Ot(I._dbInfo, W, function(F, V) {
                        if (F) return A(F);
                        try {
                            var H = V.objectStore(I._dbInfo.storeName).delete(w);
                            V.oncomplete = function() {
                                T()
                            }, V.onerror = function() {
                                A(H.error)
                            }, V.onabort = function() {
                                var G = H.error ? H.error : H.transaction.error;
                                A(G)
                            }
                        } catch (G) {
                            A(G)
                        }
                    })
                }).catch(A)
            });
            return C(O, M), O
        }

        function Ke(w) {
            var M = this,
                I = new N(function(O, T) {
                    M.ready().then(function() {
                        Ot(M._dbInfo, W, function(A, F) {
                            if (A) return T(A);
                            try {
                                var V = F.objectStore(M._dbInfo.storeName).clear();
                                F.oncomplete = function() {
                                    O()
                                }, F.onabort = F.onerror = function() {
                                    var H = V.error ? V.error : V.transaction.error;
                                    T(H)
                                }
                            } catch (H) {
                                T(H)
                            }
                        })
                    }).catch(T)
                });
            return C(I, w), I
        }

        function Et(w) {
            var M = this,
                I = new N(function(O, T) {
                    M.ready().then(function() {
                        Ot(M._dbInfo, vt, function(A, F) {
                            if (A) return T(A);
                            try {
                                var V = F.objectStore(M._dbInfo.storeName).count();
                                V.onsuccess = function() {
                                    O(V.result)
                                }, V.onerror = function() {
                                    T(V.error)
                                }
                            } catch (H) {
                                T(H)
                            }
                        })
                    }).catch(T)
                });
            return C(I, w), I
        }

        function dn(w, M) {
            var I = this,
                O = new N(function(T, A) {
                    w < 0 ? T(null) : I.ready().then(function() {
                        Ot(I._dbInfo, vt, function(F, V) {
                            if (F) return A(F);
                            try {
                                var H = V.objectStore(I._dbInfo.storeName),
                                    G = !1,
                                    tt = H.openKeyCursor();
                                tt.onsuccess = function() {
                                    var ot = tt.result;
                                    ot ? w === 0 || G ? T(ot.key) : (G = !0, ot.advance(w)) : T(null)
                                }, tt.onerror = function() {
                                    A(tt.error)
                                }
                            } catch (ot) {
                                A(ot)
                            }
                        })
                    }).catch(A)
                });
            return C(O, M), O
        }

        function le(w) {
            var M = this,
                I = new N(function(O, T) {
                    M.ready().then(function() {
                        Ot(M._dbInfo, vt, function(A, F) {
                            if (A) return T(A);
                            try {
                                var V = F.objectStore(M._dbInfo.storeName).openKeyCursor(),
                                    H = [];
                                V.onsuccess = function() {
                                    var G = V.result;
                                    G ? (H.push(G.key), G.continue()) : O(H)
                                }, V.onerror = function() {
                                    T(V.error)
                                }
                            } catch (G) {
                                T(G)
                            }
                        })
                    }).catch(T)
                });
            return C(I, w), I
        }

        function ce(w, M) {
            M = z.apply(this, arguments);
            var I = this.config();
            (w = typeof w != "function" && w || {}).name || (w.name = w.name || I.name, w.storeName = w.storeName || I.storeName);
            var O, T = this;
            if (w.name) {
                var A = w.name === I.name && T._dbInfo.db ? N.resolve(T._dbInfo.db) : Nt(w).then(function(F) {
                    var V = rt[w.name],
                        H = V.forages;
                    V.db = F;
                    for (var G = 0; G < H.length; G++) H[G]._dbInfo.db = F;
                    return F
                });
                O = w.storeName ? A.then(function(F) {
                    if (F.objectStoreNames.contains(w.storeName)) {
                        var V = F.version + 1;
                        nt(w);
                        var H = rt[w.name],
                            G = H.forages;
                        F.close();
                        for (var tt = 0; tt < G.length; tt++) {
                            var ot = G[tt];
                            ot._dbInfo.db = null, ot._dbInfo.version = V
                        }
                        var bt = new N(function(Ct, Dt) {
                            var zt = v.open(w.name, V);
                            zt.onerror = function(Ve) {
                                zt.result.close(), Dt(Ve)
                            }, zt.onupgradeneeded = function() {
                                zt.result.deleteObjectStore(w.storeName)
                            }, zt.onsuccess = function() {
                                var Ve = zt.result;
                                Ve.close(), Ct(Ve)
                            }
                        });
                        return bt.then(function(Ct) {
                            H.db = Ct;
                            for (var Dt = 0; Dt < G.length; Dt++) {
                                var zt = G[Dt];
                                zt._dbInfo.db = Ct, st(zt._dbInfo)
                            }
                        }).catch(function(Ct) {
                            throw (_t(w, Ct) || N.resolve()).catch(function() {}), Ct
                        })
                    }
                }) : A.then(function(F) {
                    nt(w);
                    var V = rt[w.name],
                        H = V.forages;
                    F.close();
                    for (var G = 0; G < H.length; G++) H[G]._dbInfo.db = null;
                    var tt = new N(function(ot, bt) {
                        var Ct = v.deleteDatabase(w.name);
                        Ct.onerror = function() {
                            var Dt = Ct.result;
                            Dt && Dt.close(), bt(Ct.error)
                        }, Ct.onblocked = function() {}, Ct.onsuccess = function() {
                            var Dt = Ct.result;
                            Dt && Dt.close(), ot(Dt)
                        }
                    });
                    return tt.then(function(ot) {
                        V.db = ot;
                        for (var bt = 0; bt < H.length; bt++) st(H[bt]._dbInfo)
                    }).catch(function(ot) {
                        throw (_t(w, ot) || N.resolve()).catch(function() {}), ot
                    })
                })
            } else O = N.reject("Invalid arguments");
            return C(O, M), O
        }
        var De = {
            _driver: "asyncStorage",
            _initStorage: Je,
            _support: k(),
            iterate: ht,
            getItem: xe,
            setItem: ae,
            removeItem: ue,
            clear: Ke,
            length: Et,
            key: dn,
            keys: le,
            dropInstance: ce
        };

        function ze() {
            return typeof openDatabase == "function"
        }
        var Kt = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
            Qt = "~~local_forage_type~",
            de = /^~~local_forage_type~([^~]+)~/,
            K = "__lfsc__:",
            oe = K.length,
            Qe = "arbf",
            St = "blob",
            ee = "si08",
            Oe = "ui08",
            jn = "uic8",
            Ln = "si16",
            Mn = "si32",
            x = "ur16",
            ni = "ui32",
            ri = "fl32",
            ii = "fl64",
            ai = oe + Qe.length,
            oi = Object.prototype.toString;

        function si(w) {
            var M, I, O, T, A, F = .75 * w.length,
                V = w.length,
                H = 0;
            w[w.length - 1] === "=" && (F--, w[w.length - 2] === "=" && F--);
            var G = new ArrayBuffer(F),
                tt = new Uint8Array(G);
            for (M = 0; M < V; M += 4) I = Kt.indexOf(w[M]), O = Kt.indexOf(w[M + 1]), T = Kt.indexOf(w[M + 2]), A = Kt.indexOf(w[M + 3]), tt[H++] = I << 2 | O >> 4, tt[H++] = (15 & O) << 4 | T >> 2, tt[H++] = (3 & T) << 6 | 63 & A;
            return G
        }

        function Fn(w) {
            var M, I = new Uint8Array(w),
                O = "";
            for (M = 0; M < I.length; M += 3) O += Kt[I[M] >> 2], O += Kt[(3 & I[M]) << 4 | I[M + 1] >> 4], O += Kt[(15 & I[M + 1]) << 2 | I[M + 2] >> 6], O += Kt[63 & I[M + 2]];
            return I.length % 3 == 2 ? O = O.substring(0, O.length - 1) + "=" : I.length % 3 == 1 && (O = O.substring(0, O.length - 2) + "=="), O
        }

        function Ae(w, M) {
            var I = "";
            if (w && (I = oi.call(w)), w && (I === "[object ArrayBuffer]" || w.buffer && oi.call(w.buffer) === "[object ArrayBuffer]")) {
                var O, T = K;
                w instanceof ArrayBuffer ? (O = w, T += Qe) : (O = w.buffer, I === "[object Int8Array]" ? T += ee : I === "[object Uint8Array]" ? T += Oe : I === "[object Uint8ClampedArray]" ? T += jn : I === "[object Int16Array]" ? T += Ln : I === "[object Uint16Array]" ? T += x : I === "[object Int32Array]" ? T += Mn : I === "[object Uint32Array]" ? T += ni : I === "[object Float32Array]" ? T += ri : I === "[object Float64Array]" ? T += ii : M(new Error("Failed to get type for BinaryArray"))), M(T + Fn(O))
            } else if (I === "[object Blob]") {
                var A = new FileReader;
                A.onload = function() {
                    var F = Qt + w.type + "~" + Fn(this.result);
                    M(K + St + F)
                }, A.readAsArrayBuffer(w)
            } else try {
                M(JSON.stringify(w))
            } catch (F) {
                M(null, F)
            }
        }

        function Mr(w) {
            if (w.substring(0, oe) !== K) return JSON.parse(w);
            var M, I = w.substring(ai),
                O = w.substring(oe, ai);
            if (O === St && de.test(I)) {
                var T = I.match(de);
                M = T[1], I = I.substring(T[0].length)
            }
            var A = si(I);
            switch (O) {
                case Qe:
                    return A;
                case St:
                    return j([A], {
                        type: M
                    });
                case ee:
                    return new Int8Array(A);
                case Oe:
                    return new Uint8Array(A);
                case jn:
                    return new Uint8ClampedArray(A);
                case Ln:
                    return new Int16Array(A);
                case x:
                    return new Uint16Array(A);
                case Mn:
                    return new Int32Array(A);
                case ni:
                    return new Uint32Array(A);
                case ri:
                    return new Float32Array(A);
                case ii:
                    return new Float64Array(A);
                default:
                    throw new Error("Unkown type: " + O)
            }
        }
        var Wn = {
            serialize: Ae,
            deserialize: Mr,
            stringToBuffer: si,
            bufferToString: Fn
        };

        function rr(w, M, I, O) {
            w.executeSql("CREATE TABLE IF NOT EXISTS " + M.storeName + " (id INTEGER PRIMARY KEY, key unique, value)", [], I, O)
        }

        function In(w) {
            var M = this,
                I = {
                    db: null
                };
            if (w)
                for (var O in w) I[O] = typeof w[O] != "string" ? w[O].toString() : w[O];
            var T = new N(function(A, F) {
                try {
                    I.db = openDatabase(I.name, String(I.version), I.description, I.size)
                } catch (V) {
                    return F(V)
                }
                I.db.transaction(function(V) {
                    rr(V, I, function() {
                        M._dbInfo = I, A()
                    }, function(H, G) {
                        F(G)
                    })
                }, F)
            });
            return I.serializer = Wn, T
        }

        function Ye(w, M, I, O, T, A) {
            w.executeSql(I, O, T, function(F, V) {
                V.code === V.SYNTAX_ERR ? F.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?", [M.storeName], function(H, G) {
                    G.rows.length ? A(H, V) : rr(H, M, function() {
                        H.executeSql(I, O, T, A)
                    }, A)
                }, A) : A(F, V)
            }, A)
        }

        function oa(w, M) {
            var I = this;
            w = L(w);
            var O = new N(function(T, A) {
                I.ready().then(function() {
                    var F = I._dbInfo;
                    F.db.transaction(function(V) {
                        Ye(V, F, "SELECT * FROM " + F.storeName + " WHERE key = ? LIMIT 1", [w], function(H, G) {
                            var tt = G.rows.length ? G.rows.item(0).value : null;
                            tt && (tt = F.serializer.deserialize(tt)), T(tt)
                        }, function(H, G) {
                            A(G)
                        })
                    })
                }).catch(A)
            });
            return C(O, M), O
        }

        function li(w, M) {
            var I = this,
                O = new N(function(T, A) {
                    I.ready().then(function() {
                        var F = I._dbInfo;
                        F.db.transaction(function(V) {
                            Ye(V, F, "SELECT * FROM " + F.storeName, [], function(H, G) {
                                for (var tt = G.rows, ot = tt.length, bt = 0; bt < ot; bt++) {
                                    var Ct = tt.item(bt),
                                        Dt = Ct.value;
                                    if (Dt && (Dt = F.serializer.deserialize(Dt)), (Dt = w(Dt, Ct.key, bt + 1)) !== void 0) return void T(Dt)
                                }
                                T()
                            }, function(H, G) {
                                A(G)
                            })
                        })
                    }).catch(A)
                });
            return C(O, M), O
        }

        function ir(w, M, I, O) {
            var T = this;
            w = L(w);
            var A = new N(function(F, V) {
                T.ready().then(function() {
                    M === void 0 && (M = null);
                    var H = M,
                        G = T._dbInfo;
                    G.serializer.serialize(M, function(tt, ot) {
                        ot ? V(ot) : G.db.transaction(function(bt) {
                            Ye(bt, G, "INSERT OR REPLACE INTO " + G.storeName + " (key, value) VALUES (?, ?)", [w, tt], function() {
                                F(H)
                            }, function(Ct, Dt) {
                                V(Dt)
                            })
                        }, function(bt) {
                            if (bt.code === bt.QUOTA_ERR) {
                                if (O > 0) return void F(ir.apply(T, [w, H, I, O - 1]));
                                V(bt)
                            }
                        })
                    })
                }).catch(V)
            });
            return C(A, I), A
        }

        function we(w, M, I) {
            return ir.apply(this, [w, M, I, 1])
        }

        function Re(w, M) {
            var I = this;
            w = L(w);
            var O = new N(function(T, A) {
                I.ready().then(function() {
                    var F = I._dbInfo;
                    F.db.transaction(function(V) {
                        Ye(V, F, "DELETE FROM " + F.storeName + " WHERE key = ?", [w], function() {
                            T()
                        }, function(H, G) {
                            A(G)
                        })
                    })
                }).catch(A)
            });
            return C(O, M), O
        }

        function ci(w) {
            var M = this,
                I = new N(function(O, T) {
                    M.ready().then(function() {
                        var A = M._dbInfo;
                        A.db.transaction(function(F) {
                            Ye(F, A, "DELETE FROM " + A.storeName, [], function() {
                                O()
                            }, function(V, H) {
                                T(H)
                            })
                        })
                    }).catch(T)
                });
            return C(I, w), I
        }

        function sa(w) {
            var M = this,
                I = new N(function(O, T) {
                    M.ready().then(function() {
                        var A = M._dbInfo;
                        A.db.transaction(function(F) {
                            Ye(F, A, "SELECT COUNT(key) as c FROM " + A.storeName, [], function(V, H) {
                                var G = H.rows.item(0).c;
                                O(G)
                            }, function(V, H) {
                                T(H)
                            })
                        })
                    }).catch(T)
                });
            return C(I, w), I
        }

        function la(w, M) {
            var I = this,
                O = new N(function(T, A) {
                    I.ready().then(function() {
                        var F = I._dbInfo;
                        F.db.transaction(function(V) {
                            Ye(V, F, "SELECT key FROM " + F.storeName + " WHERE id = ? LIMIT 1", [w + 1], function(H, G) {
                                var tt = G.rows.length ? G.rows.item(0).key : null;
                                T(tt)
                            }, function(H, G) {
                                A(G)
                            })
                        })
                    }).catch(A)
                });
            return C(O, M), O
        }

        function ca(w) {
            var M = this,
                I = new N(function(O, T) {
                    M.ready().then(function() {
                        var A = M._dbInfo;
                        A.db.transaction(function(F) {
                            Ye(F, A, "SELECT key FROM " + A.storeName, [], function(V, H) {
                                for (var G = [], tt = 0; tt < H.rows.length; tt++) G.push(H.rows.item(tt).key);
                                O(G)
                            }, function(V, H) {
                                T(H)
                            })
                        })
                    }).catch(T)
                });
            return C(I, w), I
        }

        function ui(w) {
            return new N(function(M, I) {
                w.transaction(function(O) {
                    O.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'", [], function(T, A) {
                        for (var F = [], V = 0; V < A.rows.length; V++) F.push(A.rows.item(V).name);
                        M({
                            db: w,
                            storeNames: F
                        })
                    }, function(T, A) {
                        I(A)
                    })
                }, function(O) {
                    I(O)
                })
            })
        }

        function di(w, M) {
            M = z.apply(this, arguments);
            var I = this.config();
            (w = typeof w != "function" && w || {}).name || (w.name = w.name || I.name, w.storeName = w.storeName || I.storeName);
            var O, T = this;
            return O = w.name ? new N(function(A) {
                var F;
                F = w.name === I.name ? T._dbInfo.db : openDatabase(w.name, "", "", 0), w.storeName ? A({
                    db: F,
                    storeNames: [w.storeName]
                }) : A(ui(F))
            }).then(function(A) {
                return new N(function(F, V) {
                    A.db.transaction(function(H) {
                        function G(Ct) {
                            return new N(function(Dt, zt) {
                                H.executeSql("DROP TABLE IF EXISTS " + Ct, [], function() {
                                    Dt()
                                }, function(Ve, lr) {
                                    zt(lr)
                                })
                            })
                        }
                        for (var tt = [], ot = 0, bt = A.storeNames.length; ot < bt; ot++) tt.push(G(A.storeNames[ot]));
                        N.all(tt).then(function() {
                            F()
                        }).catch(function(Ct) {
                            V(Ct)
                        })
                    }, function(H) {
                        V(H)
                    })
                })
            }) : N.reject("Invalid arguments"), C(O, M), O
        }
        var ua = {
            _driver: "webSQLStorage",
            _initStorage: In,
            _support: ze(),
            iterate: li,
            getItem: oa,
            setItem: we,
            removeItem: Re,
            clear: ci,
            length: sa,
            key: la,
            keys: ca,
            dropInstance: di
        };

        function da() {
            try {
                return typeof localStorage != "undefined" && "setItem" in localStorage && !!localStorage.setItem
            } catch (w) {
                return !1
            }
        }

        function Ir(w, M) {
            var I = w.name + "/";
            return w.storeName !== M.storeName && (I += w.storeName + "/"), I
        }

        function hi() {
            var w = "_localforage_support_test";
            try {
                return localStorage.setItem(w, !0), localStorage.removeItem(w), !1
            } catch (M) {
                return !0
            }
        }

        function ha() {
            return !hi() || localStorage.length > 0
        }

        function fa(w) {
            var M = this,
                I = {};
            if (w)
                for (var O in w) I[O] = w[O];
            return I.keyPrefix = Ir(w, M._defaultConfig), ha() ? (M._dbInfo = I, I.serializer = Wn, N.resolve()) : N.reject()
        }

        function fi(w) {
            var M = this,
                I = M.ready().then(function() {
                    for (var O = M._dbInfo.keyPrefix, T = localStorage.length - 1; T >= 0; T--) {
                        var A = localStorage.key(T);
                        A.indexOf(O) === 0 && localStorage.removeItem(A)
                    }
                });
            return C(I, w), I
        }

        function ar(w, M) {
            var I = this;
            w = L(w);
            var O = I.ready().then(function() {
                var T = I._dbInfo,
                    A = localStorage.getItem(T.keyPrefix + w);
                return A && (A = T.serializer.deserialize(A)), A
            });
            return C(O, M), O
        }

        function mi(w, M) {
            var I = this,
                O = I.ready().then(function() {
                    for (var T = I._dbInfo, A = T.keyPrefix, F = A.length, V = localStorage.length, H = 1, G = 0; G < V; G++) {
                        var tt = localStorage.key(G);
                        if (tt.indexOf(A) === 0) {
                            var ot = localStorage.getItem(tt);
                            if (ot && (ot = T.serializer.deserialize(ot)), (ot = w(ot, tt.substring(F), H++)) !== void 0) return ot
                        }
                    }
                });
            return C(O, M), O
        }

        function gi(w, M) {
            var I = this,
                O = I.ready().then(function() {
                    var T, A = I._dbInfo;
                    try {
                        T = localStorage.key(w)
                    } catch (F) {
                        T = null
                    }
                    return T && (T = T.substring(A.keyPrefix.length)), T
                });
            return C(O, M), O
        }

        function ma(w) {
            var M = this,
                I = M.ready().then(function() {
                    for (var O = M._dbInfo, T = localStorage.length, A = [], F = 0; F < T; F++) {
                        var V = localStorage.key(F);
                        V.indexOf(O.keyPrefix) === 0 && A.push(V.substring(O.keyPrefix.length))
                    }
                    return A
                });
            return C(I, w), I
        }

        function ga(w) {
            var M = this.keys().then(function(I) {
                return I.length
            });
            return C(M, w), M
        }

        function pa(w, M) {
            var I = this;
            w = L(w);
            var O = I.ready().then(function() {
                var T = I._dbInfo;
                localStorage.removeItem(T.keyPrefix + w)
            });
            return C(O, M), O
        }

        function zn(w, M, I) {
            var O = this;
            w = L(w);
            var T = O.ready().then(function() {
                M === void 0 && (M = null);
                var A = M;
                return new N(function(F, V) {
                    var H = O._dbInfo;
                    H.serializer.serialize(M, function(G, tt) {
                        if (tt) V(tt);
                        else try {
                            localStorage.setItem(H.keyPrefix + w, G), F(A)
                        } catch (ot) {
                            ot.name !== "QuotaExceededError" && ot.name !== "NS_ERROR_DOM_QUOTA_REACHED" || V(ot), V(ot)
                        }
                    })
                })
            });
            return C(T, I), T
        }

        function ya(w, M) {
            if (M = z.apply(this, arguments), !(w = typeof w != "function" && w || {}).name) {
                var I = this.config();
                w.name = w.name || I.name, w.storeName = w.storeName || I.storeName
            }
            var O, T = this;
            return O = w.name ? new N(function(A) {
                w.storeName ? A(Ir(w, T._defaultConfig)) : A(w.name + "/")
            }).then(function(A) {
                for (var F = localStorage.length - 1; F >= 0; F--) {
                    var V = localStorage.key(F);
                    V.indexOf(A) === 0 && localStorage.removeItem(V)
                }
            }) : N.reject("Invalid arguments"), C(O, M), O
        }
        var he = {
                _driver: "localStorageWrapper",
                _initStorage: fa,
                _support: da(),
                iterate: mi,
                getItem: ar,
                setItem: zn,
                removeItem: pa,
                clear: fi,
                length: ga,
                key: gi,
                keys: ma,
                dropInstance: ya
            },
            va = function(w, M) {
                return w === M || typeof w == "number" && typeof M == "number" && isNaN(w) && isNaN(M)
            },
            ba = function(w, M) {
                for (var I = w.length, O = 0; O < I;) {
                    if (va(w[O], M)) return !0;
                    O++
                }
                return !1
            },
            pi = Array.isArray || function(w) {
                return Object.prototype.toString.call(w) === "[object Array]"
            },
            Yn = {},
            Cn = {},
            Me = {
                INDEXEDDB: De,
                WEBSQL: ua,
                LOCALSTORAGE: he
            },
            xa = [Me.INDEXEDDB._driver, Me.WEBSQL._driver, Me.LOCALSTORAGE._driver],
            or = ["dropInstance"],
            Cr = ["clear", "getItem", "iterate", "key", "keys", "length", "removeItem", "setItem"].concat(or),
            yi = {
                description: "",
                driver: xa.slice(),
                name: "localforage",
                size: 4980736,
                storeName: "keyvaluepairs",
                version: 1
            };

        function Pr(w, M) {
            w[M] = function() {
                var I = arguments;
                return w.ready().then(function() {
                    return w[M].apply(w, I)
                })
            }
        }

        function Tr() {
            for (var w = 1; w < arguments.length; w++) {
                var M = arguments[w];
                if (M)
                    for (var I in M) M.hasOwnProperty(I) && (pi(M[I]) ? arguments[0][I] = M[I].slice() : arguments[0][I] = M[I])
            }
            return arguments[0]
        }
        var wa = function() {
                function w(M) {
                    for (var I in h(this, w), Me)
                        if (Me.hasOwnProperty(I)) {
                            var O = Me[I],
                                T = O._driver;
                            this[I] = T, Yn[T] || this.defineDriver(O)
                        }
                    this._defaultConfig = Tr({}, yi), this._config = Tr({}, this._defaultConfig, M), this._driverSet = null, this._initDriver = null, this._ready = !1, this._dbInfo = null, this._wrapLibraryMethodsWithReady(), this.setDriver(this._config.driver).catch(function() {})
                }
                return w.prototype.config = function(M) {
                    if ((M === void 0 ? "undefined" : l(M)) === "object") {
                        if (this._ready) return new Error("Can't call config() after localforage has been used.");
                        for (var I in M) {
                            if (I === "storeName" && (M[I] = M[I].replace(/\W/g, "_")), I === "version" && typeof M[I] != "number") return new Error("Database version must be a number.");
                            this._config[I] = M[I]
                        }
                        return !("driver" in M) || !M.driver || this.setDriver(this._config.driver)
                    }
                    return typeof M == "string" ? this._config[M] : this._config
                }, w.prototype.defineDriver = function(M, I, O) {
                    var T = new N(function(A, F) {
                        try {
                            var V = M._driver,
                                H = new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");
                            if (!M._driver) return void F(H);
                            for (var G = Cr.concat("_initStorage"), tt = 0, ot = G.length; tt < ot; tt++) {
                                var bt = G[tt];
                                if ((!ba(or, bt) || M[bt]) && typeof M[bt] != "function") return void F(H)
                            }
                            var Ct = function() {
                                for (var zt = function(Vn) {
                                        return function() {
                                            var Dr = new Error("Method " + Vn + " is not implemented by the current driver"),
                                                cr = N.reject(Dr);
                                            return C(cr, arguments[arguments.length - 1]), cr
                                        }
                                    }, Ve = 0, lr = or.length; Ve < lr; Ve++) {
                                    var He = or[Ve];
                                    M[He] || (M[He] = zt(He))
                                }
                            };
                            Ct();
                            var Dt = function(zt) {
                                Yn[V], Yn[V] = M, Cn[V] = zt, A()
                            };
                            "_support" in M ? M._support && typeof M._support == "function" ? M._support().then(Dt, F) : Dt(!!M._support) : Dt(!0)
                        } catch (zt) {
                            F(zt)
                        }
                    });
                    return B(T, I, O), T
                }, w.prototype.driver = function() {
                    return this._driver || null
                }, w.prototype.getDriver = function(M, I, O) {
                    var T = Yn[M] ? N.resolve(Yn[M]) : N.reject(new Error("Driver not found."));
                    return B(T, I, O), T
                }, w.prototype.getSerializer = function(M) {
                    var I = N.resolve(Wn);
                    return B(I, M), I
                }, w.prototype.ready = function(M) {
                    var I = this,
                        O = I._driverSet.then(function() {
                            return I._ready === null && (I._ready = I._initDriver()), I._ready
                        });
                    return B(O, M, M), O
                }, w.prototype.setDriver = function(M, I, O) {
                    var T = this;
                    pi(M) || (M = [M]);
                    var A = this._getSupportedDrivers(M);

                    function F() {
                        T._config.driver = T.driver()
                    }

                    function V(tt) {
                        return T._extend(tt), F(), T._ready = T._initStorage(T._config), T._ready
                    }

                    function H(tt) {
                        return function() {
                            var ot = 0;

                            function bt() {
                                for (; ot < tt.length;) {
                                    var Ct = tt[ot];
                                    return ot++, T._dbInfo = null, T._ready = null, T.getDriver(Ct).then(V).catch(bt)
                                }
                                F();
                                var Dt = new Error("No available storage method found.");
                                return T._driverSet = N.reject(Dt), T._driverSet
                            }
                            return bt()
                        }
                    }
                    var G = this._driverSet !== null ? this._driverSet.catch(function() {
                        return N.resolve()
                    }) : N.resolve();
                    return this._driverSet = G.then(function() {
                        var tt = A[0];
                        return T._dbInfo = null, T._ready = null, T.getDriver(tt).then(function(ot) {
                            T._driver = ot._driver, F(), T._wrapLibraryMethodsWithReady(), T._initDriver = H(A)
                        })
                    }).catch(function() {
                        F();
                        var tt = new Error("No available storage method found.");
                        return T._driverSet = N.reject(tt), T._driverSet
                    }), B(this._driverSet, I, O), this._driverSet
                }, w.prototype.supports = function(M) {
                    return !!Cn[M]
                }, w.prototype._extend = function(M) {
                    Tr(this, M)
                }, w.prototype._getSupportedDrivers = function(M) {
                    for (var I = [], O = 0, T = M.length; O < T; O++) {
                        var A = M[O];
                        this.supports(A) && I.push(A)
                    }
                    return I
                }, w.prototype._wrapLibraryMethodsWithReady = function() {
                    for (var M = 0, I = Cr.length; M < I; M++) Pr(this, Cr[M])
                }, w.prototype.createInstance = function(M) {
                    return new w(M)
                }, w
            }(),
            sr = new wa;
        i.exports = sr
    }, {
        3: 3
    }]
}, {}, [4])(4);
const wl = qu(xl.exports),
    bd = Symbol(),
    Cs = Object.getPrototypeOf,
    fo = new WeakMap,
    xd = n => (i => i && (fo.has(i) ? fo.get(i) : Cs(i) === Object.prototype || Cs(i) === Array.prototype))(n) && n[bd] || null,
    Ps = (n, i = !0) => {
        fo.set(n, i)
    },
    qa = n => typeof n == "object" && n !== null,
    Jn = new WeakMap,
    Ti = new WeakSet,
    [wd] = ((n = Object.is, i = (N, C) => new Proxy(N, C), o = N => qa(N) && !Ti.has(N) && (Array.isArray(N) || !(Symbol.iterator in N)) && !(N instanceof WeakMap) && !(N instanceof WeakSet) && !(N instanceof Error) && !(N instanceof Number) && !(N instanceof Date) && !(N instanceof String) && !(N instanceof RegExp) && !(N instanceof ArrayBuffer), l = N => {
        switch (N.status) {
            case "fulfilled":
                return N.value;
            case "rejected":
                throw N.reason;
            default:
                throw N
        }
    }, h = new WeakMap, p = (N, C, B = l) => {
        const L = h.get(N);
        if ((L == null ? void 0 : L[0]) === C) return L[1];
        const z = Array.isArray(N) ? [] : Object.create(Object.getPrototypeOf(N));
        return Ps(z, !0), h.set(N, [C, z]), Reflect.ownKeys(N).forEach(Y => {
            if (Object.getOwnPropertyDescriptor(z, Y)) return;
            const Z = Reflect.get(N, Y),
                {
                    enumerable: rt
                } = Reflect.getOwnPropertyDescriptor(N, Y),
                wt = {
                    value: Z,
                    enumerable: rt,
                    configurable: !0
                };
            if (Ti.has(Z)) Ps(Z, !1);
            else if (Z instanceof Promise) delete wt.value, wt.get = () => B(Z);
            else if (Jn.has(Z)) {
                const [vt, W] = Jn.get(Z);
                wt.value = p(vt, W(), B)
            }
            Object.defineProperty(z, Y, wt)
        }), Object.preventExtensions(z)
    }, v = new WeakMap, k = [1, 1], j = N => {
        if (!qa(N)) throw new Error("object required");
        const C = v.get(N);
        if (C) return C;
        let B = k[0];
        const L = new Set,
            z = (J, X = ++k[0]) => {
                B !== X && (B = X, L.forEach(nt => nt(J, X)))
            };
        let Y = k[1];
        const Z = J => (X, nt) => {
                const st = [...X];
                st[1] = [J, ...st[1]], z(st, nt)
            },
            rt = new Map,
            wt = J => {
                var X;
                const nt = rt.get(J);
                nt && (rt.delete(J), (X = nt[1]) == null || X.call(nt))
            },
            vt = Array.isArray(N) ? [] : Object.create(Object.getPrototypeOf(N)),
            W = i(vt, {
                deleteProperty(J, X) {
                    const nt = Reflect.get(J, X);
                    wt(X);
                    const st = Reflect.deleteProperty(J, X);
                    return st && z(["delete", [X], nt]), st
                },
                set(J, X, nt, st) {
                    const _t = Reflect.has(J, X),
                        gt = Reflect.get(J, X, st);
                    if (_t && (n(gt, nt) || v.has(nt) && n(gt, v.get(nt)))) return !0;
                    wt(X), qa(nt) && (nt = xd(nt) || nt);
                    let Nt = nt;
                    if (nt instanceof Promise) nt.then(jt => {
                        nt.status = "fulfilled", nt.value = jt, z(["resolve", [X], jt])
                    }).catch(jt => {
                        nt.status = "rejected", nt.reason = jt, z(["reject", [X], jt])
                    });
                    else {
                        !Jn.has(nt) && o(nt) && (Nt = j(nt));
                        const jt = !Ti.has(Nt) && Jn.get(Nt);
                        jt && ((Wt, te) => {
                            if (L.size) {
                                const Gt = te[3](Z(Wt));
                                rt.set(Wt, [te, Gt])
                            } else rt.set(Wt, [te])
                        })(X, jt)
                    }
                    return Reflect.set(J, X, Nt, st), z(["set", [X], nt, gt]), !0
                }
            });
        v.set(N, W);
        const at = [vt, (J = ++k[1]) => (Y === J || L.size || (Y = J, rt.forEach(([X]) => {
            const nt = X[1](J);
            nt > B && (B = nt)
        })), B), p, J => (L.add(J), L.size === 1 && rt.forEach(([X, nt], st) => {
            const _t = X[3](Z(st));
            rt.set(st, [X, _t])
        }), () => {
            L.delete(J), L.size === 0 && rt.forEach(([X, nt], st) => {
                nt && (nt(), rt.set(st, [X]))
            })
        })];
        return Jn.set(W, at), Reflect.ownKeys(N).forEach(J => {
            const X = Object.getOwnPropertyDescriptor(N, J);
            "value" in X && (W[J] = N[J], delete X.value, delete X.writable), Object.defineProperty(vt, J, X)
        }), W
    }) => [j, Jn, Ti, n, i, o, l, h, p, v, k])();

function Ro(n, i, o) {
    const l = Jn.get(n);
    let h;
    const p = [],
        v = l[3];
    let k = !1;
    const j = v(N => {
        p.push(N), o ? i(p.splice(0)) : h || (h = Promise.resolve().then(() => {
            h = void 0, k && i(p.splice(0))
        }))
    });
    return k = !0, () => {
        k = !1, j()
    }
}
const _d = S.env.host,
    kd = {
        "-2": "Red",
        2: "Green",
        10: "Moon"
    },
    Sd = {
        "-2": "50.51%",
        2: "49.50%",
        10: "9.90%"
    };

function _l(n) {
    if (_d === "bc.game") {
        if (Number(n) <= 2561902) return "v1";
        if (Number(n) <= 5282959) return "v2"
    }
    return ""
}
const Nd = Gr.withMultipleDetailNew(n => {
        var N;
        const {
            t: i
        } = S.useTranslation(), o = Ut(), {
            gameUnique: l
        } = n, h = (N = n.betLog) == null ? void 0 : N.gv, p = n.betLog.gameId, v = h && h.maxRate ? (h.maxRate / 100).toFixed(2) + "x" : "", k = n.betLog.type === "normal" ? "Classic" : kd[n.betLog.bv], j = n.betLog.type === "normal" ? "-" : Sd[n.betLog.bv];
        return f.jsxs("div", {
            className: jd,
            children: [f.jsxs(Xu, {
                className: "rt_items",
                children: [f.jsxs("div", {
                    className: "item-wrap",
                    children: [f.jsxs("div", {
                        className: "item-num",
                        children: [f.jsx(S.Icon, {
                            className: "result",
                            name: "Result"
                        }), i("Result")]
                    }), f.jsx("div", {
                        className: "item-desc",
                        children: v
                    })]
                }), f.jsxs("div", {
                    className: "item-wrap",
                    children: [f.jsxs("div", {
                        className: "item-num",
                        children: [f.jsx(S.Icon, {
                            className: "bettype",
                            name: "Bet"
                        }), i("Bet")]
                    }), f.jsx("div", {
                        className: "item-desc",
                        children: f.jsx("span", {
                            className: "mthan",
                            children: k
                        })
                    })]
                }), f.jsxs("div", {
                    className: "item-wrap",
                    children: [f.jsxs("div", {
                        className: "item-num",
                        children: [f.jsx(S.Icon, {
                            className: "chance",
                            name: "Chance"
                        }), i("Chance")]
                    }), f.jsx("div", {
                        className: "item-desc",
                        children: j
                    })]
                })]
            }), f.jsx(S.Input, {
                label: i("Game ID"),
                value: p,
                readOnly: !0
            }), f.jsx(S.Input, {
                label: i("Hash"),
                value: h == null ? void 0 : h.hash,
                readOnly: !0
            }), f.jsxs("div", {
                className: "flex btns",
                children: [f.jsxs(S.Button, {
                    className: "all",
                    type: "gray",
                    onClick: () => Gr.openAllPlayersNew({
                        gameUnique: l,
                        gameId: p
                    }),
                    children: [f.jsx("span", {
                        children: i("All Players")
                    }), f.jsx(S.Icon, {
                        name: "Arrow"
                    })]
                }), f.jsx(S.Button, {
                    type: "conic",
                    onClick: () => {
                        window.open(`${ic.validateLink}?hash=${h==null?void 0:h.hash}&v=${_l(p)}&r=${o.crashState.houseEdge.toString(2)}`)
                    },
                    children: i("Verify")
                })]
            })]
        })
    }),
    jd = "c1mm6vqb",
    Md = cn.memo(function({
        bodyLock: n
    }) {
        return f.jsx(Zu, {
            htmlName: "crash",
            bodyLock: n
        })
    });
var kl, Sl, Nl = {
    exports: {}
}; //! moment.js
//! version : 2.30.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
function et() {
    return kl.apply(null, arguments)
}

function qe(n) {
    return n instanceof Array || Object.prototype.toString.call(n) === "[object Array]"
}

function tr(n) {
    return n != null && Object.prototype.toString.call(n) === "[object Object]"
}

function Tt(n, i) {
    return Object.prototype.hasOwnProperty.call(n, i)
}

function Bo(n) {
    if (Object.getOwnPropertyNames) return Object.getOwnPropertyNames(n).length === 0;
    var i;
    for (i in n)
        if (Tt(n, i)) return !1;
    return !0
}

function je(n) {
    return n === void 0
}

function kn(n) {
    return typeof n == "number" || Object.prototype.toString.call(n) === "[object Number]"
}

function qr(n) {
    return n instanceof Date || Object.prototype.toString.call(n) === "[object Date]"
}

function Ts(n, i) {
    var o, l = [],
        h = n.length;
    for (o = 0; o < h; ++o) l.push(i(n[o], o));
    return l
}

function Rn(n, i) {
    for (var o in i) Tt(i, o) && (n[o] = i[o]);
    return Tt(i, "toString") && (n.toString = i.toString), Tt(i, "valueOf") && (n.valueOf = i.valueOf), n
}

function ln(n, i, o, l) {
    return zl(n, i, o, l, !0).utc()
}

function yt(n) {
    return n._pf == null && (n._pf = {
        empty: !1,
        unusedTokens: [],
        unusedInput: [],
        overflow: -2,
        charsLeftOver: 0,
        nullInput: !1,
        invalidEra: null,
        invalidMonth: null,
        invalidFormat: !1,
        userInvalidated: !1,
        iso: !1,
        parsedDateParts: [],
        era: null,
        meridiem: null,
        rfc2822: !1,
        weekdayMismatch: !1
    }), n._pf
}

function mo(n) {
    var i = null,
        o = !1,
        l = n._d && !isNaN(n._d.getTime());
    return l && (i = yt(n), o = Sl.call(i.parsedDateParts, function(h) {
        return h != null
    }), l = i.overflow < 0 && !i.empty && !i.invalidEra && !i.invalidMonth && !i.invalidWeekday && !i.weekdayMismatch && !i.nullInput && !i.invalidFormat && !i.userInvalidated && (!i.meridiem || i.meridiem && o), n._strict && (l = l && i.charsLeftOver === 0 && i.unusedTokens.length === 0 && i.bigHour === void 0)), Object.isFrozen != null && Object.isFrozen(n) ? l : (n._isValid = l, n._isValid)
}

function na(n) {
    var i = ln(NaN);
    return n != null ? Rn(yt(i), n) : yt(i).userInvalidated = !0, i
}
Sl = Array.prototype.some ? Array.prototype.some : function(n) {
    var i, o = Object(this),
        l = o.length >>> 0;
    for (i = 0; i < l; i++)
        if (i in o && n.call(this, o[i], i, o)) return !0;
    return !1
};
var Ds = et.momentProperties = [],
    $a = !1;

function Eo(n, i) {
    var o, l, h, p = Ds.length;
    if (je(i._isAMomentObject) || (n._isAMomentObject = i._isAMomentObject), je(i._i) || (n._i = i._i), je(i._f) || (n._f = i._f), je(i._l) || (n._l = i._l), je(i._strict) || (n._strict = i._strict), je(i._tzm) || (n._tzm = i._tzm), je(i._isUTC) || (n._isUTC = i._isUTC), je(i._offset) || (n._offset = i._offset), je(i._pf) || (n._pf = yt(i)), je(i._locale) || (n._locale = i._locale), p > 0)
        for (o = 0; o < p; o++) je(h = i[l = Ds[o]]) || (n[l] = h);
    return n
}

function ti(n) {
    Eo(this, n), this._d = new Date(n._d != null ? n._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), $a === !1 && ($a = !0, et.updateOffset(this), $a = !1)
}

function Ge(n) {
    return n instanceof ti || n != null && n._isAMomentObject != null
}

function jl(n) {
    et.suppressDeprecationWarnings
}

function Fe(n, i) {
    var o = !0;
    return Rn(function() {
        if (et.deprecationHandler != null && et.deprecationHandler(null, n), o) {
            var l, h, p, v = [],
                k = arguments.length;
            for (h = 0; h < k; h++) {
                if (l = "", typeof arguments[h] == "object") {
                    for (p in l += `
[` + h + "] ", arguments[0]) Tt(arguments[0], p) && (l += p + ": " + arguments[0][p] + ", ");
                    l = l.slice(0, -2)
                } else l = arguments[h];
                v.push(l)
            }
            jl((Array.prototype.slice.call(v).join(""), new Error().stack)), o = !1
        }
        return i.apply(this, arguments)
    }, i)
}
var Ml, Os = {};

function Il(n, i) {
    et.deprecationHandler != null && et.deprecationHandler(n, i), Os[n] || (jl(), Os[n] = !0)
}

function rn(n) {
    return typeof Function != "undefined" && n instanceof Function || Object.prototype.toString.call(n) === "[object Function]"
}

function go(n, i) {
    var o, l = Rn({}, n);
    for (o in i) Tt(i, o) && (tr(n[o]) && tr(i[o]) ? (l[o] = {}, Rn(l[o], n[o]), Rn(l[o], i[o])) : i[o] != null ? l[o] = i[o] : delete l[o]);
    for (o in n) Tt(n, o) && !Tt(i, o) && tr(n[o]) && (l[o] = Rn({}, l[o]));
    return l
}

function Lo(n) {
    n != null && this.set(n)
}
et.suppressDeprecationWarnings = !1, et.deprecationHandler = null, Ml = Object.keys ? Object.keys : function(n) {
    var i, o = [];
    for (i in n) Tt(n, i) && o.push(i);
    return o
};

function en(n, i, o) {
    var l = "" + Math.abs(n),
        h = i - l.length;
    return (n >= 0 ? o ? "+" : "" : "-") + Math.pow(10, Math.max(0, h)).toString().substr(1) + l
}
var Fo = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
    Di = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
    Xa = {},
    kr = {};

function ut(n, i, o, l) {
    var h = l;
    typeof l == "string" && (h = function() {
        return this[l]()
    }), n && (kr[n] = h), i && (kr[i[0]] = function() {
        return en(h.apply(this, arguments), i[1], i[2])
    }), o && (kr[o] = function() {
        return this.localeData().ordinal(h.apply(this, arguments), n)
    })
}

function Oi(n, i) {
    return n.isValid() ? (i = Cl(i, n.localeData()), Xa[i] = Xa[i] || function(o) {
        var l, h, p, v = o.match(Fo);
        for (l = 0, h = v.length; l < h; l++) kr[v[l]] ? v[l] = kr[v[l]] : v[l] = (p = v[l]).match(/\[[\s\S]/) ? p.replace(/^\[|\]$/g, "") : p.replace(/\\/g, "");
        return function(k) {
            var j, N = "";
            for (j = 0; j < h; j++) N += rn(v[j]) ? v[j].call(k, o) : v[j];
            return N
        }
    }(i), Xa[i](n)) : n.localeData().invalidDate()
}

function Cl(n, i) {
    var o = 5;

    function l(h) {
        return i.longDateFormat(h) || h
    }
    for (Di.lastIndex = 0; o >= 0 && Di.test(n);) n = n.replace(Di, l), Di.lastIndex = 0, o -= 1;
    return n
}
var As = {
    D: "date",
    dates: "date",
    date: "date",
    d: "day",
    days: "day",
    day: "day",
    e: "weekday",
    weekdays: "weekday",
    weekday: "weekday",
    E: "isoWeekday",
    isoweekdays: "isoWeekday",
    isoweekday: "isoWeekday",
    DDD: "dayOfYear",
    dayofyears: "dayOfYear",
    dayofyear: "dayOfYear",
    h: "hour",
    hours: "hour",
    hour: "hour",
    ms: "millisecond",
    milliseconds: "millisecond",
    millisecond: "millisecond",
    m: "minute",
    minutes: "minute",
    minute: "minute",
    M: "month",
    months: "month",
    month: "month",
    Q: "quarter",
    quarters: "quarter",
    quarter: "quarter",
    s: "second",
    seconds: "second",
    second: "second",
    gg: "weekYear",
    weekyears: "weekYear",
    weekyear: "weekYear",
    GG: "isoWeekYear",
    isoweekyears: "isoWeekYear",
    isoweekyear: "isoWeekYear",
    w: "week",
    weeks: "week",
    week: "week",
    W: "isoWeek",
    isoweeks: "isoWeek",
    isoweek: "isoWeek",
    y: "year",
    years: "year",
    year: "year"
};

function Ee(n) {
    return typeof n == "string" ? As[n] || As[n.toLowerCase()] : void 0
}

function Wo(n) {
    var i, o, l = {};
    for (o in n) Tt(n, o) && (i = Ee(o)) && (l[i] = n[o]);
    return l
}
var Id = {
        date: 9,
        day: 11,
        weekday: 11,
        isoWeekday: 11,
        dayOfYear: 4,
        hour: 13,
        millisecond: 16,
        minute: 14,
        month: 8,
        quarter: 7,
        second: 15,
        weekYear: 1,
        isoWeekYear: 1,
        week: 5,
        isoWeek: 5,
        year: 1
    },
    Vi, Pl = /\d/,
    Te = /\d\d/,
    Tl = /\d{3}/,
    po = /\d{4}/,
    Hi = /[+-]?\d{6}/,
    Ht = /\d\d?/,
    Rs = /\d\d\d\d?/,
    Bs = /\d\d\d\d\d\d?/,
    Fi = /\d{1,3}/,
    yo = /\d{1,4}/,
    Ui = /[+-]?\d{1,6}/,
    xr = /\d+/,
    Gi = /[+-]?\d+/,
    Cd = /Z|[+-]\d\d:?\d\d/gi,
    Wi = /Z|[+-]\d\d(?::?\d\d)?/gi,
    ei = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
    Sr = /^[1-9]\d?/,
    zo = /^([1-9]\d|\d)/;

function it(n, i, o) {
    Vi[n] = rn(i) ? i : function(l, h) {
        return l && o ? o : i
    }
}

function Pd(n, i) {
    return Tt(Vi, n) ? Vi[n](i._strict, i._locale) : new RegExp(function(o) {
        return _n(o.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(l, h, p, v, k) {
            return h || p || v || k
        }))
    }(n))
}

function _n(n) {
    return n.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
}

function Le(n) {
    return n < 0 ? Math.ceil(n) || 0 : Math.floor(n)
}

function kt(n) {
    var i = +n,
        o = 0;
    return i !== 0 && isFinite(i) && (o = Le(i)), o
}
Vi = {};
var vo = {};

function Rt(n, i) {
    var o, l, h = i;
    for (typeof n == "string" && (n = [n]), kn(i) && (h = function(p, v) {
            v[i] = kt(p)
        }), l = n.length, o = 0; o < l; o++) vo[n[o]] = h
}

function $r(n, i) {
    Rt(n, function(o, l, h, p) {
        h._w = h._w || {}, i(o, h._w, h, p)
    })
}

function Td(n, i, o) {
    i != null && Tt(vo, n) && vo[n](i, o._a, o, n)
}

function ra(n) {
    return n % 4 == 0 && n % 100 != 0 || n % 400 == 0
}
var me = 0,
    bn = 1,
    nn = 2,
    se = 3,
    $e = 4,
    xn = 5,
    Qn = 6,
    Dd = 7,
    Od = 8;

function Hr(n) {
    return ra(n) ? 366 : 365
}
ut("Y", 0, 0, function() {
    var n = this.year();
    return n <= 9999 ? en(n, 4) : "+" + n
}), ut(0, ["YY", 2], 0, function() {
    return this.year() % 100
}), ut(0, ["YYYY", 4], 0, "year"), ut(0, ["YYYYY", 5], 0, "year"), ut(0, ["YYYYYY", 6, !0], 0, "year"), it("Y", Gi), it("YY", Ht, Te), it("YYYY", yo, po), it("YYYYY", Ui, Hi), it("YYYYYY", Ui, Hi), Rt(["YYYYY", "YYYYYY"], me), Rt("YYYY", function(n, i) {
    i[me] = n.length === 2 ? et.parseTwoDigitYear(n) : kt(n)
}), Rt("YY", function(n, i) {
    i[me] = et.parseTwoDigitYear(n)
}), Rt("Y", function(n, i) {
    i[me] = parseInt(n, 10)
}), et.parseTwoDigitYear = function(n) {
    return kt(n) + (kt(n) > 68 ? 1900 : 2e3)
};
var ie, Es = jr("FullYear", !0);

function jr(n, i) {
    return function(o) {
        return o != null ? (Dl(this, n, o), et.updateOffset(this, i), this) : Xr(this, n)
    }
}

function Xr(n, i) {
    if (!n.isValid()) return NaN;
    var o = n._d,
        l = n._isUTC;
    switch (i) {
        case "Milliseconds":
            return l ? o.getUTCMilliseconds() : o.getMilliseconds();
        case "Seconds":
            return l ? o.getUTCSeconds() : o.getSeconds();
        case "Minutes":
            return l ? o.getUTCMinutes() : o.getMinutes();
        case "Hours":
            return l ? o.getUTCHours() : o.getHours();
        case "Date":
            return l ? o.getUTCDate() : o.getDate();
        case "Day":
            return l ? o.getUTCDay() : o.getDay();
        case "Month":
            return l ? o.getUTCMonth() : o.getMonth();
        case "FullYear":
            return l ? o.getUTCFullYear() : o.getFullYear();
        default:
            return NaN
    }
}

function Dl(n, i, o) {
    var l, h, p, v, k;
    if (n.isValid() && !isNaN(o)) {
        switch (l = n._d, h = n._isUTC, i) {
            case "Milliseconds":
                return void(h ? l.setUTCMilliseconds(o) : l.setMilliseconds(o));
            case "Seconds":
                return void(h ? l.setUTCSeconds(o) : l.setSeconds(o));
            case "Minutes":
                return void(h ? l.setUTCMinutes(o) : l.setMinutes(o));
            case "Hours":
                return void(h ? l.setUTCHours(o) : l.setHours(o));
            case "Date":
                return void(h ? l.setUTCDate(o) : l.setDate(o));
            case "FullYear":
                break;
            default:
                return
        }
        p = o, v = n.month(), k = (k = n.date()) !== 29 || v !== 1 || ra(p) ? k : 28, h ? l.setUTCFullYear(p, v, k) : l.setFullYear(p, v, k)
    }
}

function Yo(n, i) {
    if (isNaN(n) || isNaN(i)) return NaN;
    var o, l = (i % (o = 12) + o) % o;
    return n += (i - l) / 12, l === 1 ? ra(n) ? 29 : 28 : 31 - l % 7 % 2
}
ie = Array.prototype.indexOf ? Array.prototype.indexOf : function(n) {
    var i;
    for (i = 0; i < this.length; ++i)
        if (this[i] === n) return i;
    return -1
}, ut("M", ["MM", 2], "Mo", function() {
    return this.month() + 1
}), ut("MMM", 0, 0, function(n) {
    return this.localeData().monthsShort(this, n)
}), ut("MMMM", 0, 0, function(n) {
    return this.localeData().months(this, n)
}), it("M", Ht, Sr), it("MM", Ht, Te), it("MMM", function(n, i) {
    return i.monthsShortRegex(n)
}), it("MMMM", function(n, i) {
    return i.monthsRegex(n)
}), Rt(["M", "MM"], function(n, i) {
    i[bn] = kt(n) - 1
}), Rt(["MMM", "MMMM"], function(n, i, o, l) {
    var h = o._locale.monthsParse(n, l, o._strict);
    h != null ? i[bn] = h : yt(o).invalidMonth = n
});
var Ad = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
    Ol = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
    Ls = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
    Rd = ei,
    Bd = ei;

function Ed(n, i, o) {
    var l, h, p, v = n.toLocaleLowerCase();
    if (!this._monthsParse)
        for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], l = 0; l < 12; ++l) p = ln([2e3, l]), this._shortMonthsParse[l] = this.monthsShort(p, "").toLocaleLowerCase(), this._longMonthsParse[l] = this.months(p, "").toLocaleLowerCase();
    return o ? i === "MMM" ? (h = ie.call(this._shortMonthsParse, v)) !== -1 ? h : null : (h = ie.call(this._longMonthsParse, v)) !== -1 ? h : null : i === "MMM" ? (h = ie.call(this._shortMonthsParse, v)) !== -1 || (h = ie.call(this._longMonthsParse, v)) !== -1 ? h : null : (h = ie.call(this._longMonthsParse, v)) !== -1 || (h = ie.call(this._shortMonthsParse, v)) !== -1 ? h : null
}

function Al(n, i) {
    if (!n.isValid()) return n;
    if (typeof i == "string") {
        if (/^\d+$/.test(i)) i = kt(i);
        else if (!kn(i = n.localeData().monthsParse(i))) return n
    }
    var o = i,
        l = n.date();
    return l = l < 29 ? l : Math.min(l, Yo(n.year(), o)), n._isUTC ? n._d.setUTCMonth(o, l) : n._d.setMonth(o, l), n
}

function Fs(n) {
    return n != null ? (Al(this, n), et.updateOffset(this, !0), this) : Xr(this, "Month")
}

function Ws() {
    function n(j, N) {
        return N.length - j.length
    }
    var i, o, l, h, p = [],
        v = [],
        k = [];
    for (i = 0; i < 12; i++) o = ln([2e3, i]), l = _n(this.monthsShort(o, "")), h = _n(this.months(o, "")), p.push(l), v.push(h), k.push(h), k.push(l);
    p.sort(n), v.sort(n), k.sort(n), this._monthsRegex = new RegExp("^(" + k.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + v.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + p.join("|") + ")", "i")
}

function Ld(n, i, o, l, h, p, v) {
    var k;
    return n < 100 && n >= 0 ? (k = new Date(n + 400, i, o, l, h, p, v), isFinite(k.getFullYear()) && k.setFullYear(n)) : k = new Date(n, i, o, l, h, p, v), k
}

function Zr(n) {
    var i, o;
    return n < 100 && n >= 0 ? ((o = Array.prototype.slice.call(arguments))[0] = n + 400, i = new Date(Date.UTC.apply(null, o)), isFinite(i.getUTCFullYear()) && i.setUTCFullYear(n)) : i = new Date(Date.UTC.apply(null, arguments)), i
}

function qi(n, i, o) {
    var l = 7 + i - o;
    return -((7 + Zr(n, 0, l).getUTCDay() - i) % 7) + l - 1
}

function Rl(n, i, o, l, h) {
    var p, v, k = 1 + 7 * (i - 1) + (7 + o - l) % 7 + qi(n, l, h);
    return k <= 0 ? v = Hr(p = n - 1) + k : k > Hr(n) ? (p = n + 1, v = k - Hr(n)) : (p = n, v = k), {
        year: p,
        dayOfYear: v
    }
}

function Jr(n, i, o) {
    var l, h, p = qi(n.year(), i, o),
        v = Math.floor((n.dayOfYear() - p - 1) / 7) + 1;
    return v < 1 ? l = v + wn(h = n.year() - 1, i, o) : v > wn(n.year(), i, o) ? (l = v - wn(n.year(), i, o), h = n.year() + 1) : (h = n.year(), l = v), {
        week: l,
        year: h
    }
}

function wn(n, i, o) {
    var l = qi(n, i, o),
        h = qi(n + 1, i, o);
    return (Hr(n) - l + h) / 7
}
ut("w", ["ww", 2], "wo", "week"), ut("W", ["WW", 2], "Wo", "isoWeek"), it("w", Ht, Sr), it("ww", Ht, Te), it("W", Ht, Sr), it("WW", Ht, Te), $r(["w", "ww", "W", "WW"], function(n, i, o, l) {
    i[l.substr(0, 1)] = kt(n)
});

function Za(n, i) {
    return n.slice(i, 7).concat(n.slice(0, i))
}
ut("d", 0, "do", "day"), ut("dd", 0, 0, function(n) {
    return this.localeData().weekdaysMin(this, n)
}), ut("ddd", 0, 0, function(n) {
    return this.localeData().weekdaysShort(this, n)
}), ut("dddd", 0, 0, function(n) {
    return this.localeData().weekdays(this, n)
}), ut("e", 0, 0, "weekday"), ut("E", 0, 0, "isoWeekday"), it("d", Ht), it("e", Ht), it("E", Ht), it("dd", function(n, i) {
    return i.weekdaysMinRegex(n)
}), it("ddd", function(n, i) {
    return i.weekdaysShortRegex(n)
}), it("dddd", function(n, i) {
    return i.weekdaysRegex(n)
}), $r(["dd", "ddd", "dddd"], function(n, i, o, l) {
    var h = o._locale.weekdaysParse(n, l, o._strict);
    h != null ? i.d = h : yt(o).invalidWeekday = n
}), $r(["d", "e", "E"], function(n, i, o, l) {
    i[l] = kt(n)
});
var Fd = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
    Bl = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
    Wd = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
    zd = ei,
    Yd = ei,
    Vd = ei;

function Hd(n, i, o) {
    var l, h, p, v = n.toLocaleLowerCase();
    if (!this._weekdaysParse)
        for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], l = 0; l < 7; ++l) p = ln([2e3, 1]).day(l), this._minWeekdaysParse[l] = this.weekdaysMin(p, "").toLocaleLowerCase(), this._shortWeekdaysParse[l] = this.weekdaysShort(p, "").toLocaleLowerCase(), this._weekdaysParse[l] = this.weekdays(p, "").toLocaleLowerCase();
    return o ? i === "dddd" ? (h = ie.call(this._weekdaysParse, v)) !== -1 ? h : null : i === "ddd" ? (h = ie.call(this._shortWeekdaysParse, v)) !== -1 ? h : null : (h = ie.call(this._minWeekdaysParse, v)) !== -1 ? h : null : i === "dddd" ? (h = ie.call(this._weekdaysParse, v)) !== -1 || (h = ie.call(this._shortWeekdaysParse, v)) !== -1 || (h = ie.call(this._minWeekdaysParse, v)) !== -1 ? h : null : i === "ddd" ? (h = ie.call(this._shortWeekdaysParse, v)) !== -1 || (h = ie.call(this._weekdaysParse, v)) !== -1 || (h = ie.call(this._minWeekdaysParse, v)) !== -1 ? h : null : (h = ie.call(this._minWeekdaysParse, v)) !== -1 || (h = ie.call(this._weekdaysParse, v)) !== -1 || (h = ie.call(this._shortWeekdaysParse, v)) !== -1 ? h : null
}

function Ja() {
    function n(C, B) {
        return B.length - C.length
    }
    var i, o, l, h, p, v = [],
        k = [],
        j = [],
        N = [];
    for (i = 0; i < 7; i++) o = ln([2e3, 1]).day(i), l = _n(this.weekdaysMin(o, "")), h = _n(this.weekdaysShort(o, "")), p = _n(this.weekdays(o, "")), v.push(l), k.push(h), j.push(p), N.push(l), N.push(h), N.push(p);
    v.sort(n), k.sort(n), j.sort(n), N.sort(n), this._weekdaysRegex = new RegExp("^(" + N.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + j.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + k.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + v.join("|") + ")", "i")
}

function Ka() {
    return this.hours() % 12 || 12
}

function zs(n, i) {
    ut(n, 0, 0, function() {
        return this.localeData().meridiem(this.hours(), this.minutes(), i)
    })
}

function Ys(n, i) {
    return i._meridiemParse
}
ut("H", ["HH", 2], 0, "hour"), ut("h", ["hh", 2], 0, Ka), ut("k", ["kk", 2], 0, function() {
    return this.hours() || 24
}), ut("hmm", 0, 0, function() {
    return "" + Ka.apply(this) + en(this.minutes(), 2)
}), ut("hmmss", 0, 0, function() {
    return "" + Ka.apply(this) + en(this.minutes(), 2) + en(this.seconds(), 2)
}), ut("Hmm", 0, 0, function() {
    return "" + this.hours() + en(this.minutes(), 2)
}), ut("Hmmss", 0, 0, function() {
    return "" + this.hours() + en(this.minutes(), 2) + en(this.seconds(), 2)
}), zs("a", !0), zs("A", !1), it("a", Ys), it("A", Ys), it("H", Ht, zo), it("h", Ht, Sr), it("k", Ht, Sr), it("HH", Ht, Te), it("hh", Ht, Te), it("kk", Ht, Te), it("hmm", Rs), it("hmmss", Bs), it("Hmm", Rs), it("Hmmss", Bs), Rt(["H", "HH"], se), Rt(["k", "kk"], function(n, i, o) {
    var l = kt(n);
    i[se] = l === 24 ? 0 : l
}), Rt(["a", "A"], function(n, i, o) {
    o._isPm = o._locale.isPM(n), o._meridiem = n
}), Rt(["h", "hh"], function(n, i, o) {
    i[se] = kt(n), yt(o).bigHour = !0
}), Rt("hmm", function(n, i, o) {
    var l = n.length - 2;
    i[se] = kt(n.substr(0, l)), i[$e] = kt(n.substr(l)), yt(o).bigHour = !0
}), Rt("hmmss", function(n, i, o) {
    var l = n.length - 4,
        h = n.length - 2;
    i[se] = kt(n.substr(0, l)), i[$e] = kt(n.substr(l, 2)), i[xn] = kt(n.substr(h)), yt(o).bigHour = !0
}), Rt("Hmm", function(n, i, o) {
    var l = n.length - 2;
    i[se] = kt(n.substr(0, l)), i[$e] = kt(n.substr(l))
}), Rt("Hmmss", function(n, i, o) {
    var l = n.length - 4,
        h = n.length - 2;
    i[se] = kt(n.substr(0, l)), i[$e] = kt(n.substr(l, 2)), i[xn] = kt(n.substr(h))
});
var Ud = jr("Hours", !0),
    Kr, El = {
        calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
        },
        longDateFormat: {
            LTS: "h:mm:ss A",
            LT: "h:mm A",
            L: "MM/DD/YYYY",
            LL: "MMMM D, YYYY",
            LLL: "MMMM D, YYYY h:mm A",
            LLLL: "dddd, MMMM D, YYYY h:mm A"
        },
        invalidDate: "Invalid date",
        ordinal: "%d",
        dayOfMonthOrdinalParse: /\d{1,2}/,
        relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            ss: "%d seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            w: "a week",
            ww: "%d weeks",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
        },
        months: Ad,
        monthsShort: Ol,
        week: {
            dow: 0,
            doy: 6
        },
        weekdays: Fd,
        weekdaysMin: Wd,
        weekdaysShort: Bl,
        meridiemParse: /[ap]\.?m?\.?/i
    },
    $t = {},
    Wr = {};

function Gd(n, i) {
    var o, l = Math.min(n.length, i.length);
    for (o = 0; o < l; o += 1)
        if (n[o] !== i[o]) return o;
    return l
}

function Vs(n) {
    return n && n.toLowerCase().replace("_", "-")
}

function $i(n) {
    var i = null;
    if ($t[n] === void 0 && typeof module != "undefined" && module && module.exports && function(o) {
            return !(!o || !o.match("^[^/\\\\]*$"))
        }(n)) try {
        i = Kr._abbr, require("./locale/" + n), Bn(i)
    } catch (o) {
        $t[n] = null
    }
    return $t[n]
}

function Bn(n, i) {
    var o;
    return n && ((o = je(i) ? Sn(n) : Vo(n, i)) && (Kr = o)), Kr._abbr
}

function Vo(n, i) {
    if (i !== null) {
        var o, l = El;
        if (i.abbr = n, $t[n] != null) Il("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), l = $t[n]._config;
        else if (i.parentLocale != null)
            if ($t[i.parentLocale] != null) l = $t[i.parentLocale]._config;
            else {
                if ((o = $i(i.parentLocale)) == null) return Wr[i.parentLocale] || (Wr[i.parentLocale] = []), Wr[i.parentLocale].push({
                    name: n,
                    config: i
                }), null;
                l = o._config
            }
        return $t[n] = new Lo(go(l, i)), Wr[n] && Wr[n].forEach(function(h) {
            Vo(h.name, h.config)
        }), Bn(n), $t[n]
    }
    return delete $t[n], null
}

function Sn(n) {
    var i;
    if (n && n._locale && n._locale._abbr && (n = n._locale._abbr), !n) return Kr;
    if (!qe(n)) {
        if (i = $i(n)) return i;
        n = [n]
    }
    return function(o) {
        for (var l, h, p, v, k = 0; k < o.length;) {
            for (l = (v = Vs(o[k]).split("-")).length, h = (h = Vs(o[k + 1])) ? h.split("-") : null; l > 0;) {
                if (p = $i(v.slice(0, l).join("-"))) return p;
                if (h && h.length >= l && Gd(v, h) >= l - 1) break;
                l--
            }
            k++
        }
        return Kr
    }(n)
}

function Ho(n) {
    var i, o = n._a;
    return o && yt(n).overflow === -2 && (i = o[bn] < 0 || o[bn] > 11 ? bn : o[nn] < 1 || o[nn] > Yo(o[me], o[bn]) ? nn : o[se] < 0 || o[se] > 24 || o[se] === 24 && (o[$e] !== 0 || o[xn] !== 0 || o[Qn] !== 0) ? se : o[$e] < 0 || o[$e] > 59 ? $e : o[xn] < 0 || o[xn] > 59 ? xn : o[Qn] < 0 || o[Qn] > 999 ? Qn : -1, yt(n)._overflowDayOfYear && (i < me || i > nn) && (i = nn), yt(n)._overflowWeeks && i === -1 && (i = Dd), yt(n)._overflowWeekday && i === -1 && (i = Od), yt(n).overflow = i), n
}
var qd = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
    $d = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
    Xd = /Z|[+-]\d\d(?::?\d\d)?/,
    Ai = [
        ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
        ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
        ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
        ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
        ["YYYY-DDD", /\d{4}-\d{3}/],
        ["YYYY-MM", /\d{4}-\d\d/, !1],
        ["YYYYYYMMDD", /[+-]\d{10}/],
        ["YYYYMMDD", /\d{8}/],
        ["GGGG[W]WWE", /\d{4}W\d{3}/],
        ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
        ["YYYYDDD", /\d{7}/],
        ["YYYYMM", /\d{6}/, !1],
        ["YYYY", /\d{4}/, !1]
    ],
    Qa = [
        ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
        ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
        ["HH:mm:ss", /\d\d:\d\d:\d\d/],
        ["HH:mm", /\d\d:\d\d/],
        ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
        ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
        ["HHmmss", /\d\d\d\d\d\d/],
        ["HHmm", /\d\d\d\d/],
        ["HH", /\d\d/]
    ],
    Zd = /^\/?Date\((-?\d+)/i,
    Jd = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
    Kd = {
        UT: 0,
        GMT: 0,
        EDT: -240,
        EST: -300,
        CDT: -300,
        CST: -360,
        MDT: -360,
        MST: -420,
        PDT: -420,
        PST: -480
    };

function Ll(n) {
    var i, o, l, h, p, v, k = n._i,
        j = qd.exec(k) || $d.exec(k),
        N = Ai.length,
        C = Qa.length;
    if (j) {
        for (yt(n).iso = !0, i = 0, o = N; i < o; i++)
            if (Ai[i][1].exec(j[1])) {
                h = Ai[i][0], l = Ai[i][2] !== !1;
                break
            }
        if (h == null) return void(n._isValid = !1);
        if (j[3]) {
            for (i = 0, o = C; i < o; i++)
                if (Qa[i][1].exec(j[3])) {
                    p = (j[2] || " ") + Qa[i][0];
                    break
                }
            if (p == null) return void(n._isValid = !1)
        }
        if (!l && p != null) return void(n._isValid = !1);
        if (j[4]) {
            if (!Xd.exec(j[4])) return void(n._isValid = !1);
            v = "Z"
        }
        n._f = h + (p || "") + (v || ""), xo(n)
    } else n._isValid = !1
}

function Qd(n) {
    var i = parseInt(n, 10);
    return i <= 49 ? 2e3 + i : i <= 999 ? 1900 + i : i
}

function Fl(n) {
    var i, o, l, h, p, v, k, j, N = Jd.exec(function(C) {
        return C.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "")
    }(n._i));
    if (N) {
        if (o = N[4], l = N[3], h = N[2], p = N[5], v = N[6], k = N[7], j = [Qd(o), Ol.indexOf(l), parseInt(h, 10), parseInt(p, 10), parseInt(v, 10)], k && j.push(parseInt(k, 10)), i = j, ! function(C, B, L) {
                return !C || Bl.indexOf(C) === new Date(B[0], B[1], B[2]).getDay() || (yt(L).weekdayMismatch = !0, L._isValid = !1, !1)
            }(N[1], i, n)) return;
        n._a = i, n._tzm = function(C, B, L) {
            if (C) return Kd[C];
            if (B) return 0;
            var z = parseInt(L, 10),
                Y = z % 100;
            return (z - Y) / 100 * 60 + Y
        }(N[8], N[9], N[10]), n._d = Zr.apply(null, n._a), n._d.setUTCMinutes(n._d.getUTCMinutes() - n._tzm), yt(n).rfc2822 = !0
    } else n._isValid = !1
}

function gr(n, i, o) {
    return n != null ? n : i != null ? i : o
}

function bo(n) {
    var i, o, l, h, p, v = [];
    if (!n._d) {
        for (l = function(k) {
                var j = new Date(et.now());
                return k._useUTC ? [j.getUTCFullYear(), j.getUTCMonth(), j.getUTCDate()] : [j.getFullYear(), j.getMonth(), j.getDate()]
            }(n), n._w && n._a[nn] == null && n._a[bn] == null && function(k) {
                var j, N, C, B, L, z, Y, Z, rt;
                j = k._w, j.GG != null || j.W != null || j.E != null ? (L = 1, z = 4, N = gr(j.GG, k._a[me], Jr(Yt(), 1, 4).year), C = gr(j.W, 1), ((B = gr(j.E, 1)) < 1 || B > 7) && (Z = !0)) : (L = k._locale._week.dow, z = k._locale._week.doy, rt = Jr(Yt(), L, z), N = gr(j.gg, k._a[me], rt.year), C = gr(j.w, rt.week), j.d != null ? ((B = j.d) < 0 || B > 6) && (Z = !0) : j.e != null ? (B = j.e + L, (j.e < 0 || j.e > 6) && (Z = !0)) : B = L), C < 1 || C > wn(N, L, z) ? yt(k)._overflowWeeks = !0 : Z != null ? yt(k)._overflowWeekday = !0 : (Y = Rl(N, C, B, L, z), k._a[me] = Y.year, k._dayOfYear = Y.dayOfYear)
            }(n), n._dayOfYear != null && (p = gr(n._a[me], l[me]), (n._dayOfYear > Hr(p) || n._dayOfYear === 0) && (yt(n)._overflowDayOfYear = !0), o = Zr(p, 0, n._dayOfYear), n._a[bn] = o.getUTCMonth(), n._a[nn] = o.getUTCDate()), i = 0; i < 3 && n._a[i] == null; ++i) n._a[i] = v[i] = l[i];
        for (; i < 7; i++) n._a[i] = v[i] = n._a[i] == null ? i === 2 ? 1 : 0 : n._a[i];
        n._a[se] === 24 && n._a[$e] === 0 && n._a[xn] === 0 && n._a[Qn] === 0 && (n._nextDay = !0, n._a[se] = 0), n._d = (n._useUTC ? Zr : Ld).apply(null, v), h = n._useUTC ? n._d.getUTCDay() : n._d.getDay(), n._tzm != null && n._d.setUTCMinutes(n._d.getUTCMinutes() - n._tzm), n._nextDay && (n._a[se] = 24), n._w && n._w.d !== void 0 && n._w.d !== h && (yt(n).weekdayMismatch = !0)
    }
}

function xo(n) {
    if (n._f !== et.ISO_8601)
        if (n._f !== et.RFC_2822) {
            n._a = [], yt(n).empty = !0;
            var i, o, l, h, p, v, k, j = "" + n._i,
                N = j.length,
                C = 0;
            for (k = (l = Cl(n._f, n._locale).match(Fo) || []).length, i = 0; i < k; i++) h = l[i], (o = (j.match(Pd(h, n)) || [])[0]) && ((p = j.substr(0, j.indexOf(o))).length > 0 && yt(n).unusedInput.push(p), j = j.slice(j.indexOf(o) + o.length), C += o.length), kr[h] ? (o ? yt(n).empty = !1 : yt(n).unusedTokens.push(h), Td(h, o, n)) : n._strict && !o && yt(n).unusedTokens.push(h);
            yt(n).charsLeftOver = N - C, j.length > 0 && yt(n).unusedInput.push(j), n._a[se] <= 12 && yt(n).bigHour === !0 && n._a[se] > 0 && (yt(n).bigHour = void 0), yt(n).parsedDateParts = n._a.slice(0), yt(n).meridiem = n._meridiem, n._a[se] = function(B, L, z) {
                var Y;
                return z == null ? L : B.meridiemHour != null ? B.meridiemHour(L, z) : (B.isPM != null && ((Y = B.isPM(z)) && L < 12 && (L += 12), Y || L !== 12 || (L = 0)), L)
            }(n._locale, n._a[se], n._meridiem), (v = yt(n).era) !== null && (n._a[me] = n._locale.erasConvertYear(v, n._a[me])), bo(n), Ho(n)
        } else Fl(n);
    else Ll(n)
}

function Wl(n) {
    var i = n._i,
        o = n._f;
    return n._locale = n._locale || Sn(n._l), i === null || o === void 0 && i === "" ? na({
        nullInput: !0
    }) : (typeof i == "string" && (n._i = i = n._locale.preparse(i)), Ge(i) ? new ti(Ho(i)) : (qr(i) ? n._d = i : qe(o) ? function(l) {
        var h, p, v, k, j, N, C = !1,
            B = l._f.length;
        if (B === 0) return yt(l).invalidFormat = !0, void(l._d = new Date(NaN));
        for (k = 0; k < B; k++) j = 0, N = !1, h = Eo({}, l), l._useUTC != null && (h._useUTC = l._useUTC), h._f = l._f[k], xo(h), mo(h) && (N = !0), j += yt(h).charsLeftOver, j += 10 * yt(h).unusedTokens.length, yt(h).score = j, C ? j < v && (v = j, p = h) : (v == null || j < v || N) && (v = j, p = h, N && (C = !0));
        Rn(l, p || h)
    }(n) : o ? xo(n) : function(l) {
        var h = l._i;
        je(h) ? l._d = new Date(et.now()) : qr(h) ? l._d = new Date(h.valueOf()) : typeof h == "string" ? function(p) {
            var v = Zd.exec(p._i);
            v === null ? (Ll(p), p._isValid === !1 && (delete p._isValid, Fl(p), p._isValid === !1 && (delete p._isValid, p._strict ? p._isValid = !1 : et.createFromInputFallback(p)))) : p._d = new Date(+v[1])
        }(l) : qe(h) ? (l._a = Ts(h.slice(0), function(p) {
            return parseInt(p, 10)
        }), bo(l)) : tr(h) ? function(p) {
            if (!p._d) {
                var v = Wo(p._i),
                    k = v.day === void 0 ? v.date : v.day;
                p._a = Ts([v.year, v.month, k, v.hour, v.minute, v.second, v.millisecond], function(j) {
                    return j && parseInt(j, 10)
                }), bo(p)
            }
        }(l) : kn(h) ? l._d = new Date(h) : et.createFromInputFallback(l)
    }(n), mo(n) || (n._d = null), n))
}

function zl(n, i, o, l, h) {
    var p, v = {};
    return i !== !0 && i !== !1 || (l = i, i = void 0), o !== !0 && o !== !1 || (l = o, o = void 0), (tr(n) && Bo(n) || qe(n) && n.length === 0) && (n = void 0), v._isAMomentObject = !0, v._useUTC = v._isUTC = h, v._l = o, v._i = n, v._f = i, v._strict = l, (p = new ti(Ho(Wl(v))))._nextDay && (p.add(1, "d"), p._nextDay = void 0), p
}

function Yt(n, i, o, l) {
    return zl(n, i, o, l, !1)
}
et.createFromInputFallback = Fe("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(n) {
    n._d = new Date(n._i + (n._useUTC ? " UTC" : ""))
}), et.ISO_8601 = function() {}, et.RFC_2822 = function() {};
var th = Fe("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
        var n = Yt.apply(null, arguments);
        return this.isValid() && n.isValid() ? n < this ? this : n : na()
    }),
    eh = Fe("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
        var n = Yt.apply(null, arguments);
        return this.isValid() && n.isValid() ? n > this ? this : n : na()
    });

function Hs(n, i) {
    var o, l;
    if (i.length === 1 && qe(i[0]) && (i = i[0]), !i.length) return Yt();
    for (o = i[0], l = 1; l < i.length; ++l) i[l].isValid() && !i[l][n](o) || (o = i[l]);
    return o
}
var zr = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];

function ia(n) {
    var i = Wo(n),
        o = i.year || 0,
        l = i.quarter || 0,
        h = i.month || 0,
        p = i.week || i.isoWeek || 0,
        v = i.day || 0,
        k = i.hour || 0,
        j = i.minute || 0,
        N = i.second || 0,
        C = i.millisecond || 0;
    this._isValid = function(B) {
        var L, z, Y = !1,
            Z = zr.length;
        for (L in B)
            if (Tt(B, L) && (ie.call(zr, L) === -1 || B[L] != null && isNaN(B[L]))) return !1;
        for (z = 0; z < Z; ++z)
            if (B[zr[z]]) {
                if (Y) return !1;
                parseFloat(B[zr[z]]) !== kt(B[zr[z]]) && (Y = !0)
            }
        return !0
    }(i), this._milliseconds = +C + 1e3 * N + 6e4 * j + 1e3 * k * 60 * 60, this._days = +v + 7 * p, this._months = +h + 3 * l + 12 * o, this._data = {}, this._locale = Sn(), this._bubble()
}

function zi(n) {
    return n instanceof ia
}

function wo(n) {
    return n < 0 ? -1 * Math.round(-1 * n) : Math.round(n)
}

function Us(n, i) {
    ut(n, 0, 0, function() {
        var o = this.utcOffset(),
            l = "+";
        return o < 0 && (o = -o, l = "-"), l + en(~~(o / 60), 2) + i + en(~~o % 60, 2)
    })
}
Us("Z", ":"), Us("ZZ", ""), it("Z", Wi), it("ZZ", Wi), Rt(["Z", "ZZ"], function(n, i, o) {
    o._useUTC = !0, o._tzm = _o(Wi, n)
});
var nh = /([\+\-]|\d\d)/gi;

function _o(n, i) {
    var o, l, h = (i || "").match(n);
    return h === null ? null : (l = 60 * (o = ((h[h.length - 1] || []) + "").match(nh) || ["-", 0, 0])[1] + kt(o[2])) === 0 ? 0 : o[0] === "+" ? l : -l
}

function ko(n, i) {
    var o, l;
    return i._isUTC ? (o = i.clone(), l = (Ge(n) || qr(n) ? n.valueOf() : Yt(n).valueOf()) - o.valueOf(), o._d.setTime(o._d.valueOf() + l), et.updateOffset(o, !1), o) : Yt(n).local()
}

function to(n) {
    return -Math.round(n._d.getTimezoneOffset())
}

function Gs() {
    return !!this.isValid() && this._isUTC && this._offset === 0
}
et.updateOffset = function() {};
var rh = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,
    ih = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

function Xe(n, i) {
    var o, l, h, p = n,
        v = null;
    return zi(n) ? p = {
        ms: n._milliseconds,
        d: n._days,
        M: n._months
    } : kn(n) || !isNaN(+n) ? (p = {}, i ? p[i] = +n : p.milliseconds = +n) : (v = rh.exec(n)) ? (o = v[1] === "-" ? -1 : 1, p = {
        y: 0,
        d: kt(v[nn]) * o,
        h: kt(v[se]) * o,
        m: kt(v[$e]) * o,
        s: kt(v[xn]) * o,
        ms: kt(wo(1e3 * v[Qn])) * o
    }) : (v = ih.exec(n)) ? (o = v[1] === "-" ? -1 : 1, p = {
        y: Zn(v[2], o),
        M: Zn(v[3], o),
        w: Zn(v[4], o),
        d: Zn(v[5], o),
        h: Zn(v[6], o),
        m: Zn(v[7], o),
        s: Zn(v[8], o)
    }) : p == null ? p = {} : typeof p == "object" && ("from" in p || "to" in p) && (h = function(k, j) {
        var N;
        return !k.isValid() || !j.isValid() ? {
            milliseconds: 0,
            months: 0
        } : (j = ko(j, k), k.isBefore(j) ? N = qs(k, j) : ((N = qs(j, k)).milliseconds = -N.milliseconds, N.months = -N.months), N)
    }(Yt(p.from), Yt(p.to)), (p = {}).ms = h.milliseconds, p.M = h.months), l = new ia(p), zi(n) && Tt(n, "_locale") && (l._locale = n._locale), zi(n) && Tt(n, "_isValid") && (l._isValid = n._isValid), l
}

function Zn(n, i) {
    var o = n && parseFloat(n.replace(",", "."));
    return (isNaN(o) ? 0 : o) * i
}

function qs(n, i) {
    var o = {};
    return o.months = i.month() - n.month() + 12 * (i.year() - n.year()), n.clone().add(o.months, "M").isAfter(i) && --o.months, o.milliseconds = +i - +n.clone().add(o.months, "M"), o
}

function Yl(n, i) {
    return function(o, l) {
        var h;
        return l === null || isNaN(+l) || (Il(i, "moment()." + i + "(period, number) is deprecated. Please use moment()." + i + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), h = o, o = l, l = h), Vl(this, Xe(o, l), n), this
    }
}

function Vl(n, i, o, l) {
    var h = i._milliseconds,
        p = wo(i._days),
        v = wo(i._months);
    n.isValid() && (l = l == null || l, v && Al(n, Xr(n, "Month") + v * o), p && Dl(n, "Date", Xr(n, "Date") + p * o), h && n._d.setTime(n._d.valueOf() + h * o), l && et.updateOffset(n, p || v))
}
Xe.fn = ia.prototype, Xe.invalid = function() {
    return Xe(NaN)
};
var ah = Yl(1, "add"),
    oh = Yl(-1, "subtract");

function $s(n) {
    return typeof n == "string" || n instanceof String
}

function sh(n) {
    return Ge(n) || qr(n) || $s(n) || kn(n) || function(i) {
        var o = qe(i),
            l = !1;
        return o && (l = i.filter(function(h) {
            return !kn(h) && $s(i)
        }).length === 0), o && l
    }(n) || function(i) {
        var o, l, h = tr(i) && !Bo(i),
            p = !1,
            v = ["years", "year", "y", "months", "month", "M", "days", "day", "d", "dates", "date", "D", "hours", "hour", "h", "minutes", "minute", "m", "seconds", "second", "s", "milliseconds", "millisecond", "ms"],
            k = v.length;
        for (o = 0; o < k; o += 1) l = v[o], p = p || Tt(i, l);
        return h && p
    }(n) || n == null
}

function Yi(n, i) {
    if (n.date() < i.date()) return -Yi(i, n);
    var o = 12 * (i.year() - n.year()) + (i.month() - n.month()),
        l = n.clone().add(o, "months");
    return -(o + (i - l < 0 ? (i - l) / (l - n.clone().add(o - 1, "months")) : (i - l) / (n.clone().add(o + 1, "months") - l))) || 0
}

function Hl(n) {
    var i;
    return n === void 0 ? this._locale._abbr : ((i = Sn(n)) != null && (this._locale = i), this)
}
et.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", et.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
var Ul = Fe("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(n) {
    return n === void 0 ? this.localeData() : this.locale(n)
});

function Gl() {
    return this._locale
}
var eo = 1e3,
    Yr = 6e4,
    no = 36e5,
    ql = 126227808e5;

function pr(n, i) {
    return (n % i + i) % i
}

function Xs(n, i, o) {
    return n < 100 && n >= 0 ? new Date(n + 400, i, o) - ql : new Date(n, i, o).valueOf()
}

function Zs(n, i, o) {
    return n < 100 && n >= 0 ? Date.UTC(n + 400, i, o) - ql : Date.UTC(n, i, o)
}

function ro(n, i) {
    return i.erasAbbrRegex(n)
}

function io() {
    var n, i, o, l, h, p = [],
        v = [],
        k = [],
        j = [],
        N = this.eras();
    for (n = 0, i = N.length; n < i; ++n) o = _n(N[n].name), l = _n(N[n].abbr), h = _n(N[n].narrow), v.push(o), p.push(l), k.push(h), j.push(o), j.push(l), j.push(h);
    this._erasRegex = new RegExp("^(" + j.join("|") + ")", "i"), this._erasNameRegex = new RegExp("^(" + v.join("|") + ")", "i"), this._erasAbbrRegex = new RegExp("^(" + p.join("|") + ")", "i"), this._erasNarrowRegex = new RegExp("^(" + k.join("|") + ")", "i")
}

function Ri(n, i) {
    ut(0, [n, n.length], 0, i)
}

function Js(n, i, o, l, h) {
    var p;
    return n == null ? Jr(this, l, h).year : (i > (p = wn(n, l, h)) && (i = p), lh.call(this, n, i, o, l, h))
}

function lh(n, i, o, l, h) {
    var p = Rl(n, i, o, l, h),
        v = Zr(p.year, 0, p.dayOfYear);
    return this.year(v.getUTCFullYear()), this.month(v.getUTCMonth()), this.date(v.getUTCDate()), this
}
ut("N", 0, 0, "eraAbbr"), ut("NN", 0, 0, "eraAbbr"), ut("NNN", 0, 0, "eraAbbr"), ut("NNNN", 0, 0, "eraName"), ut("NNNNN", 0, 0, "eraNarrow"), ut("y", ["y", 1], "yo", "eraYear"), ut("y", ["yy", 2], 0, "eraYear"), ut("y", ["yyy", 3], 0, "eraYear"), ut("y", ["yyyy", 4], 0, "eraYear"), it("N", ro), it("NN", ro), it("NNN", ro), it("NNNN", function(n, i) {
    return i.erasNameRegex(n)
}), it("NNNNN", function(n, i) {
    return i.erasNarrowRegex(n)
}), Rt(["N", "NN", "NNN", "NNNN", "NNNNN"], function(n, i, o, l) {
    var h = o._locale.erasParse(n, l, o._strict);
    h ? yt(o).era = h : yt(o).invalidEra = n
}), it("y", xr), it("yy", xr), it("yyy", xr), it("yyyy", xr), it("yo", function(n, i) {
    return i._eraYearOrdinalRegex || xr
}), Rt(["y", "yy", "yyy", "yyyy"], me), Rt(["yo"], function(n, i, o, l) {
    var h;
    o._locale._eraYearOrdinalRegex && (h = n.match(o._locale._eraYearOrdinalRegex)), o._locale.eraYearOrdinalParse ? i[me] = o._locale.eraYearOrdinalParse(n, h) : i[me] = parseInt(n, 10)
}), ut(0, ["gg", 2], 0, function() {
    return this.weekYear() % 100
}), ut(0, ["GG", 2], 0, function() {
    return this.isoWeekYear() % 100
}), Ri("gggg", "weekYear"), Ri("ggggg", "weekYear"), Ri("GGGG", "isoWeekYear"), Ri("GGGGG", "isoWeekYear"), it("G", Gi), it("g", Gi), it("GG", Ht, Te), it("gg", Ht, Te), it("GGGG", yo, po), it("gggg", yo, po), it("GGGGG", Ui, Hi), it("ggggg", Ui, Hi), $r(["gggg", "ggggg", "GGGG", "GGGGG"], function(n, i, o, l) {
    i[l.substr(0, 2)] = kt(n)
}), $r(["gg", "GG"], function(n, i, o, l) {
    i[l] = et.parseTwoDigitYear(n)
}), ut("Q", 0, "Qo", "quarter"), it("Q", Pl), Rt("Q", function(n, i) {
    i[bn] = 3 * (kt(n) - 1)
}), ut("D", ["DD", 2], "Do", "date"), it("D", Ht, Sr), it("DD", Ht, Te), it("Do", function(n, i) {
    return n ? i._dayOfMonthOrdinalParse || i._ordinalParse : i._dayOfMonthOrdinalParseLenient
}), Rt(["D", "DD"], nn), Rt("Do", function(n, i) {
    i[nn] = kt(n.match(Ht)[0])
});
var Ks = jr("Date", !0);
ut("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), it("DDD", Fi), it("DDDD", Tl), Rt(["DDD", "DDDD"], function(n, i, o) {
    o._dayOfYear = kt(n)
}), ut("m", ["mm", 2], 0, "minute"), it("m", Ht, zo), it("mm", Ht, Te), Rt(["m", "mm"], $e);
var ch = jr("Minutes", !1);
ut("s", ["ss", 2], 0, "second"), it("s", Ht, zo), it("ss", Ht, Te), Rt(["s", "ss"], xn);
var En, $l, uh = jr("Seconds", !1);
for (ut("S", 0, 0, function() {
        return ~~(this.millisecond() / 100)
    }), ut(0, ["SS", 2], 0, function() {
        return ~~(this.millisecond() / 10)
    }), ut(0, ["SSS", 3], 0, "millisecond"), ut(0, ["SSSS", 4], 0, function() {
        return 10 * this.millisecond()
    }), ut(0, ["SSSSS", 5], 0, function() {
        return 100 * this.millisecond()
    }), ut(0, ["SSSSSS", 6], 0, function() {
        return 1e3 * this.millisecond()
    }), ut(0, ["SSSSSSS", 7], 0, function() {
        return 1e4 * this.millisecond()
    }), ut(0, ["SSSSSSSS", 8], 0, function() {
        return 1e5 * this.millisecond()
    }), ut(0, ["SSSSSSSSS", 9], 0, function() {
        return 1e6 * this.millisecond()
    }), it("S", Fi, Pl), it("SS", Fi, Te), it("SSS", Fi, Tl), En = "SSSS"; En.length <= 9; En += "S") it(En, xr);

function dh(n, i) {
    i[Qn] = kt(1e3 * ("0." + n))
}
for (En = "S"; En.length <= 9; En += "S") Rt(En, dh);
$l = jr("Milliseconds", !1), ut("z", 0, 0, "zoneAbbr"), ut("zz", 0, 0, "zoneName");
var U = ti.prototype;

function Qs(n) {
    return n
}
U.add = ah, U.calendar = function(n, i) {
    arguments.length === 1 && (arguments[0] ? sh(arguments[0]) ? (n = arguments[0], i = void 0) : function(v) {
        var k, j = tr(v) && !Bo(v),
            N = !1,
            C = ["sameDay", "nextDay", "lastDay", "nextWeek", "lastWeek", "sameElse"];
        for (k = 0; k < C.length; k += 1) N = N || Tt(v, C[k]);
        return j && N
    }(arguments[0]) && (i = arguments[0], n = void 0) : (n = void 0, i = void 0));
    var o = n || Yt(),
        l = ko(o, this).startOf("day"),
        h = et.calendarFormat(this, l) || "sameElse",
        p = i && (rn(i[h]) ? i[h].call(this, o) : i[h]);
    return this.format(p || this.localeData().calendar(h, this, Yt(o)))
}, U.clone = function() {
    return new ti(this)
}, U.diff = function(n, i, o) {
    var l, h, p;
    if (!this.isValid()) return NaN;
    if (!(l = ko(n, this)).isValid()) return NaN;
    switch (h = 6e4 * (l.utcOffset() - this.utcOffset()), i = Ee(i)) {
        case "year":
            p = Yi(this, l) / 12;
            break;
        case "month":
            p = Yi(this, l);
            break;
        case "quarter":
            p = Yi(this, l) / 3;
            break;
        case "second":
            p = (this - l) / 1e3;
            break;
        case "minute":
            p = (this - l) / 6e4;
            break;
        case "hour":
            p = (this - l) / 36e5;
            break;
        case "day":
            p = (this - l - h) / 864e5;
            break;
        case "week":
            p = (this - l - h) / 6048e5;
            break;
        default:
            p = this - l
    }
    return o ? p : Le(p)
}, U.endOf = function(n) {
    var i, o;
    if ((n = Ee(n)) === void 0 || n === "millisecond" || !this.isValid()) return this;
    switch (o = this._isUTC ? Zs : Xs, n) {
        case "year":
            i = o(this.year() + 1, 0, 1) - 1;
            break;
        case "quarter":
            i = o(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
            break;
        case "month":
            i = o(this.year(), this.month() + 1, 1) - 1;
            break;
        case "week":
            i = o(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
            break;
        case "isoWeek":
            i = o(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
            break;
        case "day":
        case "date":
            i = o(this.year(), this.month(), this.date() + 1) - 1;
            break;
        case "hour":
            i = this._d.valueOf(), i += no - pr(i + (this._isUTC ? 0 : this.utcOffset() * Yr), no) - 1;
            break;
        case "minute":
            i = this._d.valueOf(), i += Yr - pr(i, Yr) - 1;
            break;
        case "second":
            i = this._d.valueOf(), i += eo - pr(i, eo) - 1
    }
    return this._d.setTime(i), et.updateOffset(this, !0), this
}, U.format = function(n) {
    n || (n = this.isUtc() ? et.defaultFormatUtc : et.defaultFormat);
    var i = Oi(this, n);
    return this.localeData().postformat(i)
}, U.from = function(n, i) {
    return this.isValid() && (Ge(n) && n.isValid() || Yt(n).isValid()) ? Xe({
        to: this,
        from: n
    }).locale(this.locale()).humanize(!i) : this.localeData().invalidDate()
}, U.fromNow = function(n) {
    return this.from(Yt(), n)
}, U.to = function(n, i) {
    return this.isValid() && (Ge(n) && n.isValid() || Yt(n).isValid()) ? Xe({
        from: this,
        to: n
    }).locale(this.locale()).humanize(!i) : this.localeData().invalidDate()
}, U.toNow = function(n) {
    return this.to(Yt(), n)
}, U.get = function(n) {
    return rn(this[n = Ee(n)]) ? this[n]() : this
}, U.invalidAt = function() {
    return yt(this).overflow
}, U.isAfter = function(n, i) {
    var o = Ge(n) ? n : Yt(n);
    return !(!this.isValid() || !o.isValid()) && ((i = Ee(i) || "millisecond") === "millisecond" ? this.valueOf() > o.valueOf() : o.valueOf() < this.clone().startOf(i).valueOf())
}, U.isBefore = function(n, i) {
    var o = Ge(n) ? n : Yt(n);
    return !(!this.isValid() || !o.isValid()) && ((i = Ee(i) || "millisecond") === "millisecond" ? this.valueOf() < o.valueOf() : this.clone().endOf(i).valueOf() < o.valueOf())
}, U.isBetween = function(n, i, o, l) {
    var h = Ge(n) ? n : Yt(n),
        p = Ge(i) ? i : Yt(i);
    return !!(this.isValid() && h.isValid() && p.isValid()) && ((l = l || "()")[0] === "(" ? this.isAfter(h, o) : !this.isBefore(h, o)) && (l[1] === ")" ? this.isBefore(p, o) : !this.isAfter(p, o))
}, U.isSame = function(n, i) {
    var o, l = Ge(n) ? n : Yt(n);
    return !(!this.isValid() || !l.isValid()) && ((i = Ee(i) || "millisecond") === "millisecond" ? this.valueOf() === l.valueOf() : (o = l.valueOf(), this.clone().startOf(i).valueOf() <= o && o <= this.clone().endOf(i).valueOf()))
}, U.isSameOrAfter = function(n, i) {
    return this.isSame(n, i) || this.isAfter(n, i)
}, U.isSameOrBefore = function(n, i) {
    return this.isSame(n, i) || this.isBefore(n, i)
}, U.isValid = function() {
    return mo(this)
}, U.lang = Ul, U.locale = Hl, U.localeData = Gl, U.max = eh, U.min = th, U.parsingFlags = function() {
    return Rn({}, yt(this))
}, U.set = function(n, i) {
    if (typeof n == "object") {
        var o, l = function(p) {
                var v, k = [];
                for (v in p) Tt(p, v) && k.push({
                    unit: v,
                    priority: Id[v]
                });
                return k.sort(function(j, N) {
                    return j.priority - N.priority
                }), k
            }(n = Wo(n)),
            h = l.length;
        for (o = 0; o < h; o++) this[l[o].unit](n[l[o].unit])
    } else if (rn(this[n = Ee(n)])) return this[n](i);
    return this
}, U.startOf = function(n) {
    var i, o;
    if ((n = Ee(n)) === void 0 || n === "millisecond" || !this.isValid()) return this;
    switch (o = this._isUTC ? Zs : Xs, n) {
        case "year":
            i = o(this.year(), 0, 1);
            break;
        case "quarter":
            i = o(this.year(), this.month() - this.month() % 3, 1);
            break;
        case "month":
            i = o(this.year(), this.month(), 1);
            break;
        case "week":
            i = o(this.year(), this.month(), this.date() - this.weekday());
            break;
        case "isoWeek":
            i = o(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
            break;
        case "day":
        case "date":
            i = o(this.year(), this.month(), this.date());
            break;
        case "hour":
            i = this._d.valueOf(), i -= pr(i + (this._isUTC ? 0 : this.utcOffset() * Yr), no);
            break;
        case "minute":
            i = this._d.valueOf(), i -= pr(i, Yr);
            break;
        case "second":
            i = this._d.valueOf(), i -= pr(i, eo)
    }
    return this._d.setTime(i), et.updateOffset(this, !0), this
}, U.subtract = oh, U.toArray = function() {
    var n = this;
    return [n.year(), n.month(), n.date(), n.hour(), n.minute(), n.second(), n.millisecond()]
}, U.toObject = function() {
    var n = this;
    return {
        years: n.year(),
        months: n.month(),
        date: n.date(),
        hours: n.hours(),
        minutes: n.minutes(),
        seconds: n.seconds(),
        milliseconds: n.milliseconds()
    }
}, U.toDate = function() {
    return new Date(this.valueOf())
}, U.toISOString = function(n) {
    if (!this.isValid()) return null;
    var i = n !== !0,
        o = i ? this.clone().utc() : this;
    return o.year() < 0 || o.year() > 9999 ? Oi(o, i ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : rn(Date.prototype.toISOString) ? i ? this.toDate().toISOString() : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3).toISOString().replace("Z", Oi(o, "Z")) : Oi(o, i ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ")
}, U.inspect = function() {
    if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
    var n, i, o, l = "moment",
        h = "";
    return this.isLocal() || (l = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone", h = "Z"), n = "[" + l + '("]', i = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", o = h + '[")]', this.format(n + i + "-MM-DD[T]HH:mm:ss.SSS" + o)
}, typeof Symbol != "undefined" && Symbol.for != null && (U[Symbol.for("nodejs.util.inspect.custom")] = function() {
    return "Moment<" + this.format() + ">"
}), U.toJSON = function() {
    return this.isValid() ? this.toISOString() : null
}, U.toString = function() {
    return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
}, U.unix = function() {
    return Math.floor(this.valueOf() / 1e3)
}, U.valueOf = function() {
    return this._d.valueOf() - 6e4 * (this._offset || 0)
}, U.creationData = function() {
    return {
        input: this._i,
        format: this._f,
        locale: this._locale,
        isUTC: this._isUTC,
        strict: this._strict
    }
}, U.eraName = function() {
    var n, i, o, l = this.localeData().eras();
    for (n = 0, i = l.length; n < i; ++n)
        if (o = this.clone().startOf("day").valueOf(), l[n].since <= o && o <= l[n].until || l[n].until <= o && o <= l[n].since) return l[n].name;
    return ""
}, U.eraNarrow = function() {
    var n, i, o, l = this.localeData().eras();
    for (n = 0, i = l.length; n < i; ++n)
        if (o = this.clone().startOf("day").valueOf(), l[n].since <= o && o <= l[n].until || l[n].until <= o && o <= l[n].since) return l[n].narrow;
    return ""
}, U.eraAbbr = function() {
    var n, i, o, l = this.localeData().eras();
    for (n = 0, i = l.length; n < i; ++n)
        if (o = this.clone().startOf("day").valueOf(), l[n].since <= o && o <= l[n].until || l[n].until <= o && o <= l[n].since) return l[n].abbr;
    return ""
}, U.eraYear = function() {
    var n, i, o, l, h = this.localeData().eras();
    for (n = 0, i = h.length; n < i; ++n)
        if (o = h[n].since <= h[n].until ? 1 : -1, l = this.clone().startOf("day").valueOf(), h[n].since <= l && l <= h[n].until || h[n].until <= l && l <= h[n].since) return (this.year() - et(h[n].since).year()) * o + h[n].offset;
    return this.year()
}, U.year = Es, U.isLeapYear = function() {
    return ra(this.year())
}, U.weekYear = function(n) {
    return Js.call(this, n, this.week(), this.weekday() + this.localeData()._week.dow, this.localeData()._week.dow, this.localeData()._week.doy)
}, U.isoWeekYear = function(n) {
    return Js.call(this, n, this.isoWeek(), this.isoWeekday(), 1, 4)
}, U.quarter = U.quarters = function(n) {
    return n == null ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (n - 1) + this.month() % 3)
}, U.month = Fs, U.daysInMonth = function() {
    return Yo(this.year(), this.month())
}, U.week = U.weeks = function(n) {
    var i = this.localeData().week(this);
    return n == null ? i : this.add(7 * (n - i), "d")
}, U.isoWeek = U.isoWeeks = function(n) {
    var i = Jr(this, 1, 4).week;
    return n == null ? i : this.add(7 * (n - i), "d")
}, U.weeksInYear = function() {
    var n = this.localeData()._week;
    return wn(this.year(), n.dow, n.doy)
}, U.weeksInWeekYear = function() {
    var n = this.localeData()._week;
    return wn(this.weekYear(), n.dow, n.doy)
}, U.isoWeeksInYear = function() {
    return wn(this.year(), 1, 4)
}, U.isoWeeksInISOWeekYear = function() {
    return wn(this.isoWeekYear(), 1, 4)
}, U.date = Ks, U.day = U.days = function(n) {
    if (!this.isValid()) return n != null ? this : NaN;
    var i = Xr(this, "Day");
    return n != null ? (n = function(o, l) {
        return typeof o != "string" ? o : isNaN(o) ? typeof(o = l.weekdaysParse(o)) == "number" ? o : null : parseInt(o, 10)
    }(n, this.localeData()), this.add(n - i, "d")) : i
}, U.weekday = function(n) {
    if (!this.isValid()) return n != null ? this : NaN;
    var i = (this.day() + 7 - this.localeData()._week.dow) % 7;
    return n == null ? i : this.add(n - i, "d")
}, U.isoWeekday = function(n) {
    if (!this.isValid()) return n != null ? this : NaN;
    if (n != null) {
        var i = function(o, l) {
            return typeof o == "string" ? l.weekdaysParse(o) % 7 || 7 : isNaN(o) ? null : o
        }(n, this.localeData());
        return this.day(this.day() % 7 ? i : i - 7)
    }
    return this.day() || 7
}, U.dayOfYear = function(n) {
    var i = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
    return n == null ? i : this.add(n - i, "d")
}, U.hour = U.hours = Ud, U.minute = U.minutes = ch, U.second = U.seconds = uh, U.millisecond = U.milliseconds = $l, U.utcOffset = function(n, i, o) {
    var l, h = this._offset || 0;
    if (!this.isValid()) return n != null ? this : NaN;
    if (n != null) {
        if (typeof n == "string") {
            if ((n = _o(Wi, n)) === null) return this
        } else Math.abs(n) < 16 && !o && (n *= 60);
        return !this._isUTC && i && (l = to(this)), this._offset = n, this._isUTC = !0, l != null && this.add(l, "m"), h !== n && (!i || this._changeInProgress ? Vl(this, Xe(n - h, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, et.updateOffset(this, !0), this._changeInProgress = null)), this
    }
    return this._isUTC ? h : to(this)
}, U.utc = function(n) {
    return this.utcOffset(0, n)
}, U.local = function(n) {
    return this._isUTC && (this.utcOffset(0, n), this._isUTC = !1, n && this.subtract(to(this), "m")), this
}, U.parseZone = function() {
    if (this._tzm != null) this.utcOffset(this._tzm, !1, !0);
    else if (typeof this._i == "string") {
        var n = _o(Cd, this._i);
        n != null ? this.utcOffset(n) : this.utcOffset(0, !0)
    }
    return this
}, U.hasAlignedHourOffset = function(n) {
    return !!this.isValid() && (n = n ? Yt(n).utcOffset() : 0, (this.utcOffset() - n) % 60 == 0)
}, U.isDST = function() {
    return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
}, U.isLocal = function() {
    return !!this.isValid() && !this._isUTC
}, U.isUtcOffset = function() {
    return !!this.isValid() && this._isUTC
}, U.isUtc = Gs, U.isUTC = Gs, U.zoneAbbr = function() {
    return this._isUTC ? "UTC" : ""
}, U.zoneName = function() {
    return this._isUTC ? "Coordinated Universal Time" : ""
}, U.dates = Fe("dates accessor is deprecated. Use date instead.", Ks), U.months = Fe("months accessor is deprecated. Use month instead", Fs), U.years = Fe("years accessor is deprecated. Use year instead", Es), U.zone = Fe("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", function(n, i) {
    return n != null ? (typeof n != "string" && (n = -n), this.utcOffset(n, i), this) : -this.utcOffset()
}), U.isDSTShifted = Fe("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", function() {
    if (!je(this._isDSTShifted)) return this._isDSTShifted;
    var n, i = {};
    return Eo(i, this), (i = Wl(i))._a ? (n = i._isUTC ? ln(i._a) : Yt(i._a), this._isDSTShifted = this.isValid() && function(o, l, h) {
        var p, v = Math.min(o.length, l.length),
            k = Math.abs(o.length - l.length),
            j = 0;
        for (p = 0; p < v; p++)(h && o[p] !== l[p] || !h && kt(o[p]) !== kt(l[p])) && j++;
        return j + k
    }(i._a, n.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted
});
var Pt = Lo.prototype;

function Xi(n, i, o, l) {
    var h = Sn(),
        p = ln().set(l, i);
    return h[o](p, n)
}

function tl(n, i, o) {
    if (kn(n) && (i = n, n = void 0), n = n || "", i != null) return Xi(n, i, o, "month");
    var l, h = [];
    for (l = 0; l < 12; l++) h[l] = Xi(n, l, o, "month");
    return h
}

function ao(n, i, o, l) {
    typeof n == "boolean" ? (kn(i) && (o = i, i = void 0), i = i || "") : (o = i = n, n = !1, kn(i) && (o = i, i = void 0), i = i || "");
    var h, p = Sn(),
        v = n ? p._week.dow : 0,
        k = [];
    if (o != null) return Xi(i, (o + v) % 7, l, "day");
    for (h = 0; h < 7; h++) k[h] = Xi(i, (h + v) % 7, l, "day");
    return k
}
Pt.calendar = function(n, i, o) {
    var l = this._calendar[n] || this._calendar.sameElse;
    return rn(l) ? l.call(i, o) : l
}, Pt.longDateFormat = function(n) {
    var i = this._longDateFormat[n],
        o = this._longDateFormat[n.toUpperCase()];
    return i || !o ? i : (this._longDateFormat[n] = o.match(Fo).map(function(l) {
        return l === "MMMM" || l === "MM" || l === "DD" || l === "dddd" ? l.slice(1) : l
    }).join(""), this._longDateFormat[n])
}, Pt.invalidDate = function() {
    return this._invalidDate
}, Pt.ordinal = function(n) {
    return this._ordinal.replace("%d", n)
}, Pt.preparse = Qs, Pt.postformat = Qs, Pt.relativeTime = function(n, i, o, l) {
    var h = this._relativeTime[o];
    return rn(h) ? h(n, i, o, l) : h.replace(/%d/i, n)
}, Pt.pastFuture = function(n, i) {
    var o = this._relativeTime[n > 0 ? "future" : "past"];
    return rn(o) ? o(i) : o.replace(/%s/i, i)
}, Pt.set = function(n) {
    var i, o;
    for (o in n) Tt(n, o) && (rn(i = n[o]) ? this[o] = i : this["_" + o] = i);
    this._config = n, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
}, Pt.eras = function(n, i) {
    var o, l, h, p = this._eras || Sn("en")._eras;
    for (o = 0, l = p.length; o < l; ++o) switch (typeof p[o].since == "string" && (h = et(p[o].since).startOf("day"), p[o].since = h.valueOf()), typeof p[o].until) {
        case "undefined":
            p[o].until = 1 / 0;
            break;
        case "string":
            h = et(p[o].until).startOf("day").valueOf(), p[o].until = h.valueOf()
    }
    return p
}, Pt.erasParse = function(n, i, o) {
    var l, h, p, v, k, j = this.eras();
    for (n = n.toUpperCase(), l = 0, h = j.length; l < h; ++l)
        if (p = j[l].name.toUpperCase(), v = j[l].abbr.toUpperCase(), k = j[l].narrow.toUpperCase(), o) switch (i) {
            case "N":
            case "NN":
            case "NNN":
                if (v === n) return j[l];
                break;
            case "NNNN":
                if (p === n) return j[l];
                break;
            case "NNNNN":
                if (k === n) return j[l]
        } else if ([p, v, k].indexOf(n) >= 0) return j[l]
}, Pt.erasConvertYear = function(n, i) {
    var o = n.since <= n.until ? 1 : -1;
    return i === void 0 ? et(n.since).year() : et(n.since).year() + (i - n.offset) * o
}, Pt.erasAbbrRegex = function(n) {
    return Tt(this, "_erasAbbrRegex") || io.call(this), n ? this._erasAbbrRegex : this._erasRegex
}, Pt.erasNameRegex = function(n) {
    return Tt(this, "_erasNameRegex") || io.call(this), n ? this._erasNameRegex : this._erasRegex
}, Pt.erasNarrowRegex = function(n) {
    return Tt(this, "_erasNarrowRegex") || io.call(this), n ? this._erasNarrowRegex : this._erasRegex
}, Pt.months = function(n, i) {
    return n ? qe(this._months) ? this._months[n.month()] : this._months[(this._months.isFormat || Ls).test(i) ? "format" : "standalone"][n.month()] : qe(this._months) ? this._months : this._months.standalone
}, Pt.monthsShort = function(n, i) {
    return n ? qe(this._monthsShort) ? this._monthsShort[n.month()] : this._monthsShort[Ls.test(i) ? "format" : "standalone"][n.month()] : qe(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
}, Pt.monthsParse = function(n, i, o) {
    var l, h, p;
    if (this._monthsParseExact) return Ed.call(this, n, i, o);
    for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), l = 0; l < 12; l++)
        if (h = ln([2e3, l]), o && !this._longMonthsParse[l] && (this._longMonthsParse[l] = new RegExp("^" + this.months(h, "").replace(".", "") + "$", "i"), this._shortMonthsParse[l] = new RegExp("^" + this.monthsShort(h, "").replace(".", "") + "$", "i")), o || this._monthsParse[l] || (p = "^" + this.months(h, "") + "|^" + this.monthsShort(h, ""), this._monthsParse[l] = new RegExp(p.replace(".", ""), "i")), o && i === "MMMM" && this._longMonthsParse[l].test(n) || o && i === "MMM" && this._shortMonthsParse[l].test(n) || !o && this._monthsParse[l].test(n)) return l
}, Pt.monthsRegex = function(n) {
    return this._monthsParseExact ? (Tt(this, "_monthsRegex") || Ws.call(this), n ? this._monthsStrictRegex : this._monthsRegex) : (Tt(this, "_monthsRegex") || (this._monthsRegex = Bd), this._monthsStrictRegex && n ? this._monthsStrictRegex : this._monthsRegex)
}, Pt.monthsShortRegex = function(n) {
    return this._monthsParseExact ? (Tt(this, "_monthsRegex") || Ws.call(this), n ? this._monthsShortStrictRegex : this._monthsShortRegex) : (Tt(this, "_monthsShortRegex") || (this._monthsShortRegex = Rd), this._monthsShortStrictRegex && n ? this._monthsShortStrictRegex : this._monthsShortRegex)
}, Pt.week = function(n) {
    return Jr(n, this._week.dow, this._week.doy).week
}, Pt.firstDayOfYear = function() {
    return this._week.doy
}, Pt.firstDayOfWeek = function() {
    return this._week.dow
}, Pt.weekdays = function(n, i) {
    var o = qe(this._weekdays) ? this._weekdays : this._weekdays[n && n !== !0 && this._weekdays.isFormat.test(i) ? "format" : "standalone"];
    return n === !0 ? Za(o, this._week.dow) : n ? o[n.day()] : o
}, Pt.weekdaysMin = function(n) {
    return n === !0 ? Za(this._weekdaysMin, this._week.dow) : n ? this._weekdaysMin[n.day()] : this._weekdaysMin
}, Pt.weekdaysShort = function(n) {
    return n === !0 ? Za(this._weekdaysShort, this._week.dow) : n ? this._weekdaysShort[n.day()] : this._weekdaysShort
}, Pt.weekdaysParse = function(n, i, o) {
    var l, h, p;
    if (this._weekdaysParseExact) return Hd.call(this, n, i, o);
    for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), l = 0; l < 7; l++)
        if (h = ln([2e3, 1]).day(l), o && !this._fullWeekdaysParse[l] && (this._fullWeekdaysParse[l] = new RegExp("^" + this.weekdays(h, "").replace(".", "\\.?") + "$", "i"), this._shortWeekdaysParse[l] = new RegExp("^" + this.weekdaysShort(h, "").replace(".", "\\.?") + "$", "i"), this._minWeekdaysParse[l] = new RegExp("^" + this.weekdaysMin(h, "").replace(".", "\\.?") + "$", "i")), this._weekdaysParse[l] || (p = "^" + this.weekdays(h, "") + "|^" + this.weekdaysShort(h, "") + "|^" + this.weekdaysMin(h, ""), this._weekdaysParse[l] = new RegExp(p.replace(".", ""), "i")), o && i === "dddd" && this._fullWeekdaysParse[l].test(n) || o && i === "ddd" && this._shortWeekdaysParse[l].test(n) || o && i === "dd" && this._minWeekdaysParse[l].test(n) || !o && this._weekdaysParse[l].test(n)) return l
}, Pt.weekdaysRegex = function(n) {
    return this._weekdaysParseExact ? (Tt(this, "_weekdaysRegex") || Ja.call(this), n ? this._weekdaysStrictRegex : this._weekdaysRegex) : (Tt(this, "_weekdaysRegex") || (this._weekdaysRegex = zd), this._weekdaysStrictRegex && n ? this._weekdaysStrictRegex : this._weekdaysRegex)
}, Pt.weekdaysShortRegex = function(n) {
    return this._weekdaysParseExact ? (Tt(this, "_weekdaysRegex") || Ja.call(this), n ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (Tt(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Yd), this._weekdaysShortStrictRegex && n ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
}, Pt.weekdaysMinRegex = function(n) {
    return this._weekdaysParseExact ? (Tt(this, "_weekdaysRegex") || Ja.call(this), n ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (Tt(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Vd), this._weekdaysMinStrictRegex && n ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
}, Pt.isPM = function(n) {
    return (n + "").toLowerCase().charAt(0) === "p"
}, Pt.meridiem = function(n, i, o) {
    return n > 11 ? o ? "pm" : "PM" : o ? "am" : "AM"
}, Bn("en", {
    eras: [{
        since: "0001-01-01",
        until: 1 / 0,
        offset: 1,
        name: "Anno Domini",
        narrow: "AD",
        abbr: "AD"
    }, {
        since: "0000-12-31",
        until: -1 / 0,
        offset: 1,
        name: "Before Christ",
        narrow: "BC",
        abbr: "BC"
    }],
    dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
    ordinal: function(n) {
        var i = n % 10;
        return n + (kt(n % 100 / 10) === 1 ? "th" : i === 1 ? "st" : i === 2 ? "nd" : i === 3 ? "rd" : "th")
    }
}), et.lang = Fe("moment.lang is deprecated. Use moment.locale instead.", Bn), et.langData = Fe("moment.langData is deprecated. Use moment.localeData instead.", Sn);
var gn = Math.abs;

function el(n, i, o, l) {
    var h = Xe(i, o);
    return n._milliseconds += l * h._milliseconds, n._days += l * h._days, n._months += l * h._months, n._bubble()
}

function nl(n) {
    return n < 0 ? Math.floor(n) : Math.ceil(n)
}

function rl(n) {
    return 4800 * n / 146097
}

function oo(n) {
    return 146097 * n / 4800
}

function Nn(n) {
    return function() {
        return this.as(n)
    }
}
var Xl = Nn("ms"),
    hh = Nn("s"),
    fh = Nn("m"),
    mh = Nn("h"),
    gh = Nn("d"),
    ph = Nn("w"),
    yh = Nn("M"),
    vh = Nn("Q"),
    bh = Nn("y"),
    xh = Xl;

function nr(n) {
    return function() {
        return this.isValid() ? this._data[n] : NaN
    }
}
var wh = nr("milliseconds"),
    _h = nr("seconds"),
    kh = nr("minutes"),
    Sh = nr("hours"),
    Nh = nr("days"),
    jh = nr("months"),
    Mh = nr("years"),
    pn = Math.round,
    yr = {
        ss: 44,
        s: 45,
        m: 45,
        h: 22,
        d: 26,
        w: null,
        M: 11
    };

function Ih(n, i, o, l, h) {
    return h.relativeTime(i || 1, !!o, n, l)
}
var so = Math.abs;

function vr(n) {
    return (n > 0) - (n < 0) || +n
}

function Bi() {
    if (!this.isValid()) return this.localeData().invalidDate();
    var n, i, o, l, h, p, v, k, j = so(this._milliseconds) / 1e3,
        N = so(this._days),
        C = so(this._months),
        B = this.asSeconds();
    return B ? (n = Le(j / 60), i = Le(n / 60), j %= 60, n %= 60, o = Le(C / 12), C %= 12, l = j ? j.toFixed(3).replace(/\.?0+$/, "") : "", h = B < 0 ? "-" : "", p = vr(this._months) !== vr(B) ? "-" : "", v = vr(this._days) !== vr(B) ? "-" : "", k = vr(this._milliseconds) !== vr(B) ? "-" : "", h + "P" + (o ? p + o + "Y" : "") + (C ? p + C + "M" : "") + (N ? v + N + "D" : "") + (i || n || j ? "T" : "") + (i ? k + i + "H" : "") + (n ? k + n + "M" : "") + (j ? k + l + "S" : "")) : "P0D"
}
var Mt = ia.prototype;
Mt.isValid = function() {
    return this._isValid
}, Mt.abs = function() {
    var n = this._data;
    return this._milliseconds = gn(this._milliseconds), this._days = gn(this._days), this._months = gn(this._months), n.milliseconds = gn(n.milliseconds), n.seconds = gn(n.seconds), n.minutes = gn(n.minutes), n.hours = gn(n.hours), n.months = gn(n.months), n.years = gn(n.years), this
}, Mt.add = function(n, i) {
    return el(this, n, i, 1)
}, Mt.subtract = function(n, i) {
    return el(this, n, i, -1)
}, Mt.as = function(n) {
    if (!this.isValid()) return NaN;
    var i, o, l = this._milliseconds;
    if ((n = Ee(n)) === "month" || n === "quarter" || n === "year") switch (i = this._days + l / 864e5, o = this._months + rl(i), n) {
        case "month":
            return o;
        case "quarter":
            return o / 3;
        case "year":
            return o / 12
    } else switch (i = this._days + Math.round(oo(this._months)), n) {
        case "week":
            return i / 7 + l / 6048e5;
        case "day":
            return i + l / 864e5;
        case "hour":
            return 24 * i + l / 36e5;
        case "minute":
            return 1440 * i + l / 6e4;
        case "second":
            return 86400 * i + l / 1e3;
        case "millisecond":
            return Math.floor(864e5 * i) + l;
        default:
            throw new Error("Unknown unit " + n)
    }
}, Mt.asMilliseconds = Xl, Mt.asSeconds = hh, Mt.asMinutes = fh, Mt.asHours = mh, Mt.asDays = gh, Mt.asWeeks = ph, Mt.asMonths = yh, Mt.asQuarters = vh, Mt.asYears = bh, Mt.valueOf = xh, Mt._bubble = function() {
    var n, i, o, l, h, p = this._milliseconds,
        v = this._days,
        k = this._months,
        j = this._data;
    return p >= 0 && v >= 0 && k >= 0 || p <= 0 && v <= 0 && k <= 0 || (p += 864e5 * nl(oo(k) + v), v = 0, k = 0), j.milliseconds = p % 1e3, n = Le(p / 1e3), j.seconds = n % 60, i = Le(n / 60), j.minutes = i % 60, o = Le(i / 60), j.hours = o % 24, v += Le(o / 24), k += h = Le(rl(v)), v -= nl(oo(h)), l = Le(k / 12), k %= 12, j.days = v, j.months = k, j.years = l, this
}, Mt.clone = function() {
    return Xe(this)
}, Mt.get = function(n) {
    return n = Ee(n), this.isValid() ? this[n + "s"]() : NaN
}, Mt.milliseconds = wh, Mt.seconds = _h, Mt.minutes = kh, Mt.hours = Sh, Mt.days = Nh, Mt.weeks = function() {
    return Le(this.days() / 7)
}, Mt.months = jh, Mt.years = Mh, Mt.humanize = function(n, i) {
    if (!this.isValid()) return this.localeData().invalidDate();
    var o, l, h = !1,
        p = yr;
    return typeof n == "object" && (i = n, n = !1), typeof n == "boolean" && (h = n), typeof i == "object" && (p = Object.assign({}, yr, i), i.s != null && i.ss == null && (p.ss = i.s - 1)), l = function(v, k, j, N) {
        var C = Xe(v).abs(),
            B = pn(C.as("s")),
            L = pn(C.as("m")),
            z = pn(C.as("h")),
            Y = pn(C.as("d")),
            Z = pn(C.as("M")),
            rt = pn(C.as("w")),
            wt = pn(C.as("y")),
            vt = B <= j.ss && ["s", B] || B < j.s && ["ss", B] || L <= 1 && ["m"] || L < j.m && ["mm", L] || z <= 1 && ["h"] || z < j.h && ["hh", z] || Y <= 1 && ["d"] || Y < j.d && ["dd", Y];
        return j.w != null && (vt = vt || rt <= 1 && ["w"] || rt < j.w && ["ww", rt]), (vt = vt || Z <= 1 && ["M"] || Z < j.M && ["MM", Z] || wt <= 1 && ["y"] || ["yy", wt])[2] = k, vt[3] = +v > 0, vt[4] = N, Ih.apply(null, vt)
    }(this, !h, p, o = this.localeData()), h && (l = o.pastFuture(+this, l)), o.postformat(l)
}, Mt.toISOString = Bi, Mt.toString = Bi, Mt.toJSON = Bi, Mt.locale = Hl, Mt.localeData = Gl, Mt.toIsoString = Fe("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Bi), Mt.lang = Ul, ut("X", 0, 0, "unix"), ut("x", 0, 0, "valueOf"), it("x", Gi), it("X", /[+-]?\d+(\.\d{1,3})?/), Rt("X", function(n, i, o) {
    o._d = new Date(1e3 * parseFloat(n))
}), Rt("x", function(n, i, o) {
    o._d = new Date(kt(n))
}), et.version = "2.30.1", kl = Yt, et.fn = U, et.min = function() {
    return Hs("isBefore", [].slice.call(arguments, 0))
}, et.max = function() {
    return Hs("isAfter", [].slice.call(arguments, 0))
}, et.now = function() {
    return Date.now ? Date.now() : +new Date
}, et.utc = ln, et.unix = function(n) {
    return Yt(1e3 * n)
}, et.months = function(n, i) {
    return tl(n, i, "months")
}, et.isDate = qr, et.locale = Bn, et.invalid = na, et.duration = Xe, et.isMoment = Ge, et.weekdays = function(n, i, o) {
    return ao(n, i, o, "weekdays")
}, et.parseZone = function() {
    return Yt.apply(null, arguments).parseZone()
}, et.localeData = Sn, et.isDuration = zi, et.monthsShort = function(n, i) {
    return tl(n, i, "monthsShort")
}, et.weekdaysMin = function(n, i, o) {
    return ao(n, i, o, "weekdaysMin")
}, et.defineLocale = Vo, et.updateLocale = function(n, i) {
    if (i != null) {
        var o, l, h = El;
        $t[n] != null && $t[n].parentLocale != null ? $t[n].set(go($t[n]._config, i)) : ((l = $i(n)) != null && (h = l._config), i = go(h, i), l == null && (i.abbr = n), (o = new Lo(i)).parentLocale = $t[n], $t[n] = o), Bn(n)
    } else $t[n] != null && ($t[n].parentLocale != null ? ($t[n] = $t[n].parentLocale, n === Bn() && Bn(n)) : $t[n] != null && delete $t[n]);
    return $t[n]
}, et.locales = function() {
    return Ml($t)
}, et.weekdaysShort = function(n, i, o) {
    return ao(n, i, o, "weekdaysShort")
}, et.normalizeUnits = Ee, et.relativeTimeRounding = function(n) {
    return n === void 0 ? pn : typeof n == "function" && (pn = n, !0)
}, et.relativeTimeThreshold = function(n, i) {
    return yr[n] !== void 0 && (i === void 0 ? yr[n] : (yr[n] = i, n === "s" && (yr.ss = i - 1), !0))
}, et.calendarFormat = function(n, i) {
    var o = n.diff(i, "days", !0);
    return o < -6 ? "sameElse" : o < -1 ? "lastWeek" : o < 0 ? "lastDay" : o < 1 ? "sameDay" : o < 2 ? "nextDay" : o < 7 ? "nextWeek" : "sameElse"
}, et.prototype = U, et.HTML5_FMT = {
    DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
    DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
    DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
    DATE: "YYYY-MM-DD",
    TIME: "HH:mm",
    TIME_SECONDS: "HH:mm:ss",
    TIME_MS: "HH:mm:ss.SSS",
    WEEK: "GGGG-[W]WW",
    MONTH: "YYYY-MM"
};
const Ch = $u(Object.freeze(Object.defineProperty({
    __proto__: null,
    default: et
}, Symbol.toStringTag, {
    value: "Module"
})));
Nl.exports = function(n) {
    function i(t, e) {
        return t(e = {
            exports: {}
        }, e.exports), e.exports
    }

    function o(t) {
        return t && t.default || t
    }
    n = n && n.hasOwnProperty("default") ? n.default : n;
    var l = {
            aliceblue: [240, 248, 255],
            antiquewhite: [250, 235, 215],
            aqua: [0, 255, 255],
            aquamarine: [127, 255, 212],
            azure: [240, 255, 255],
            beige: [245, 245, 220],
            bisque: [255, 228, 196],
            black: [0, 0, 0],
            blanchedalmond: [255, 235, 205],
            blue: [0, 0, 255],
            blueviolet: [138, 43, 226],
            brown: [165, 42, 42],
            burlywood: [222, 184, 135],
            cadetblue: [95, 158, 160],
            chartreuse: [127, 255, 0],
            chocolate: [210, 105, 30],
            coral: [255, 127, 80],
            cornflowerblue: [100, 149, 237],
            cornsilk: [255, 248, 220],
            crimson: [220, 20, 60],
            cyan: [0, 255, 255],
            darkblue: [0, 0, 139],
            darkcyan: [0, 139, 139],
            darkgoldenrod: [184, 134, 11],
            darkgray: [169, 169, 169],
            darkgreen: [0, 100, 0],
            darkgrey: [169, 169, 169],
            darkkhaki: [189, 183, 107],
            darkmagenta: [139, 0, 139],
            darkolivegreen: [85, 107, 47],
            darkorange: [255, 140, 0],
            darkorchid: [153, 50, 204],
            darkred: [139, 0, 0],
            darksalmon: [233, 150, 122],
            darkseagreen: [143, 188, 143],
            darkslateblue: [72, 61, 139],
            darkslategray: [47, 79, 79],
            darkslategrey: [47, 79, 79],
            darkturquoise: [0, 206, 209],
            darkviolet: [148, 0, 211],
            deeppink: [255, 20, 147],
            deepskyblue: [0, 191, 255],
            dimgray: [105, 105, 105],
            dimgrey: [105, 105, 105],
            dodgerblue: [30, 144, 255],
            firebrick: [178, 34, 34],
            floralwhite: [255, 250, 240],
            forestgreen: [34, 139, 34],
            fuchsia: [255, 0, 255],
            gainsboro: [220, 220, 220],
            ghostwhite: [248, 248, 255],
            gold: [255, 215, 0],
            goldenrod: [218, 165, 32],
            gray: [128, 128, 128],
            green: [0, 128, 0],
            greenyellow: [173, 255, 47],
            grey: [128, 128, 128],
            honeydew: [240, 255, 240],
            hotpink: [255, 105, 180],
            indianred: [205, 92, 92],
            indigo: [75, 0, 130],
            ivory: [255, 255, 240],
            khaki: [240, 230, 140],
            lavender: [230, 230, 250],
            lavenderblush: [255, 240, 245],
            lawngreen: [124, 252, 0],
            lemonchiffon: [255, 250, 205],
            lightblue: [173, 216, 230],
            lightcoral: [240, 128, 128],
            lightcyan: [224, 255, 255],
            lightgoldenrodyellow: [250, 250, 210],
            lightgray: [211, 211, 211],
            lightgreen: [144, 238, 144],
            lightgrey: [211, 211, 211],
            lightpink: [255, 182, 193],
            lightsalmon: [255, 160, 122],
            lightseagreen: [32, 178, 170],
            lightskyblue: [135, 206, 250],
            lightslategray: [119, 136, 153],
            lightslategrey: [119, 136, 153],
            lightsteelblue: [176, 196, 222],
            lightyellow: [255, 255, 224],
            lime: [0, 255, 0],
            limegreen: [50, 205, 50],
            linen: [250, 240, 230],
            magenta: [255, 0, 255],
            maroon: [128, 0, 0],
            mediumaquamarine: [102, 205, 170],
            mediumblue: [0, 0, 205],
            mediumorchid: [186, 85, 211],
            mediumpurple: [147, 112, 219],
            mediumseagreen: [60, 179, 113],
            mediumslateblue: [123, 104, 238],
            mediumspringgreen: [0, 250, 154],
            mediumturquoise: [72, 209, 204],
            mediumvioletred: [199, 21, 133],
            midnightblue: [25, 25, 112],
            mintcream: [245, 255, 250],
            mistyrose: [255, 228, 225],
            moccasin: [255, 228, 181],
            navajowhite: [255, 222, 173],
            navy: [0, 0, 128],
            oldlace: [253, 245, 230],
            olive: [128, 128, 0],
            olivedrab: [107, 142, 35],
            orange: [255, 165, 0],
            orangered: [255, 69, 0],
            orchid: [218, 112, 214],
            palegoldenrod: [238, 232, 170],
            palegreen: [152, 251, 152],
            paleturquoise: [175, 238, 238],
            palevioletred: [219, 112, 147],
            papayawhip: [255, 239, 213],
            peachpuff: [255, 218, 185],
            peru: [205, 133, 63],
            pink: [255, 192, 203],
            plum: [221, 160, 221],
            powderblue: [176, 224, 230],
            purple: [128, 0, 128],
            rebeccapurple: [102, 51, 153],
            red: [255, 0, 0],
            rosybrown: [188, 143, 143],
            royalblue: [65, 105, 225],
            saddlebrown: [139, 69, 19],
            salmon: [250, 128, 114],
            sandybrown: [244, 164, 96],
            seagreen: [46, 139, 87],
            seashell: [255, 245, 238],
            sienna: [160, 82, 45],
            silver: [192, 192, 192],
            skyblue: [135, 206, 235],
            slateblue: [106, 90, 205],
            slategray: [112, 128, 144],
            slategrey: [112, 128, 144],
            snow: [255, 250, 250],
            springgreen: [0, 255, 127],
            steelblue: [70, 130, 180],
            tan: [210, 180, 140],
            teal: [0, 128, 128],
            thistle: [216, 191, 216],
            tomato: [255, 99, 71],
            turquoise: [64, 224, 208],
            violet: [238, 130, 238],
            wheat: [245, 222, 179],
            white: [255, 255, 255],
            whitesmoke: [245, 245, 245],
            yellow: [255, 255, 0],
            yellowgreen: [154, 205, 50]
        },
        h = i(function(t) {
            var e = {};
            for (var r in l) l.hasOwnProperty(r) && (e[l[r]] = r);
            var a = t.exports = {
                rgb: {
                    channels: 3,
                    labels: "rgb"
                },
                hsl: {
                    channels: 3,
                    labels: "hsl"
                },
                hsv: {
                    channels: 3,
                    labels: "hsv"
                },
                hwb: {
                    channels: 3,
                    labels: "hwb"
                },
                cmyk: {
                    channels: 4,
                    labels: "cmyk"
                },
                xyz: {
                    channels: 3,
                    labels: "xyz"
                },
                lab: {
                    channels: 3,
                    labels: "lab"
                },
                lch: {
                    channels: 3,
                    labels: "lch"
                },
                hex: {
                    channels: 1,
                    labels: ["hex"]
                },
                keyword: {
                    channels: 1,
                    labels: ["keyword"]
                },
                ansi16: {
                    channels: 1,
                    labels: ["ansi16"]
                },
                ansi256: {
                    channels: 1,
                    labels: ["ansi256"]
                },
                hcg: {
                    channels: 3,
                    labels: ["h", "c", "g"]
                },
                apple: {
                    channels: 3,
                    labels: ["r16", "g16", "b16"]
                },
                gray: {
                    channels: 1,
                    labels: ["gray"]
                }
            };
            for (var s in a)
                if (a.hasOwnProperty(s)) {
                    if (!("channels" in a[s])) throw new Error("missing channels property: " + s);
                    if (!("labels" in a[s])) throw new Error("missing channel labels property: " + s);
                    if (a[s].labels.length !== a[s].channels) throw new Error("channel and label counts mismatch: " + s);
                    var c = a[s].channels,
                        u = a[s].labels;
                    delete a[s].channels, delete a[s].labels, Object.defineProperty(a[s], "channels", {
                        value: c
                    }), Object.defineProperty(a[s], "labels", {
                        value: u
                    })
                }
            function m(d, g) {
                return Math.pow(d[0] - g[0], 2) + Math.pow(d[1] - g[1], 2) + Math.pow(d[2] - g[2], 2)
            }
            a.rgb.hsl = function(d) {
                var g, y, b = d[0] / 255,
                    _ = d[1] / 255,
                    P = d[2] / 255,
                    D = Math.min(b, _, P),
                    R = Math.max(b, _, P),
                    E = R - D;
                return R === D ? g = 0 : b === R ? g = (_ - P) / E : _ === R ? g = 2 + (P - b) / E : P === R && (g = 4 + (b - _) / E), (g = Math.min(60 * g, 360)) < 0 && (g += 360), y = (D + R) / 2, [g, 100 * (R === D ? 0 : y <= .5 ? E / (R + D) : E / (2 - R - D)), 100 * y]
            }, a.rgb.hsv = function(d) {
                var g, y, b, _, P, D = d[0] / 255,
                    R = d[1] / 255,
                    E = d[2] / 255,
                    q = Math.max(D, R, E),
                    Q = q - Math.min(D, R, E),
                    lt = function(pt) {
                        return (q - pt) / 6 / Q + .5
                    };
                return Q === 0 ? _ = P = 0 : (P = Q / q, g = lt(D), y = lt(R), b = lt(E), D === q ? _ = b - y : R === q ? _ = 1 / 3 + g - b : E === q && (_ = 2 / 3 + y - g), _ < 0 ? _ += 1 : _ > 1 && (_ -= 1)), [360 * _, 100 * P, 100 * q]
            }, a.rgb.hwb = function(d) {
                var g = d[0],
                    y = d[1],
                    b = d[2];
                return [a.rgb.hsl(d)[0], 1 / 255 * Math.min(g, Math.min(y, b)) * 100, 100 * (b = 1 - 1 / 255 * Math.max(g, Math.max(y, b)))]
            }, a.rgb.cmyk = function(d) {
                var g, y = d[0] / 255,
                    b = d[1] / 255,
                    _ = d[2] / 255;
                return [100 * ((1 - y - (g = Math.min(1 - y, 1 - b, 1 - _))) / (1 - g) || 0), 100 * ((1 - b - g) / (1 - g) || 0), 100 * ((1 - _ - g) / (1 - g) || 0), 100 * g]
            }, a.rgb.keyword = function(d) {
                var g = e[d];
                if (g) return g;
                var y, b = 1 / 0;
                for (var _ in l)
                    if (l.hasOwnProperty(_)) {
                        var P = m(d, l[_]);
                        P < b && (b = P, y = _)
                    }
                return y
            }, a.keyword.rgb = function(d) {
                return l[d]
            }, a.rgb.xyz = function(d) {
                var g = d[0] / 255,
                    y = d[1] / 255,
                    b = d[2] / 255;
                return [100 * (.4124 * (g = g > .04045 ? Math.pow((g + .055) / 1.055, 2.4) : g / 12.92) + .3576 * (y = y > .04045 ? Math.pow((y + .055) / 1.055, 2.4) : y / 12.92) + .1805 * (b = b > .04045 ? Math.pow((b + .055) / 1.055, 2.4) : b / 12.92)), 100 * (.2126 * g + .7152 * y + .0722 * b), 100 * (.0193 * g + .1192 * y + .9505 * b)]
            }, a.rgb.lab = function(d) {
                var g = a.rgb.xyz(d),
                    y = g[0],
                    b = g[1],
                    _ = g[2];
                return b /= 100, _ /= 108.883, y = (y /= 95.047) > .008856 ? Math.pow(y, 1 / 3) : 7.787 * y + 16 / 116, [116 * (b = b > .008856 ? Math.pow(b, 1 / 3) : 7.787 * b + 16 / 116) - 16, 500 * (y - b), 200 * (b - (_ = _ > .008856 ? Math.pow(_, 1 / 3) : 7.787 * _ + 16 / 116))]
            }, a.hsl.rgb = function(d) {
                var g, y, b, _, P, D = d[0] / 360,
                    R = d[1] / 100,
                    E = d[2] / 100;
                if (R === 0) return [P = 255 * E, P, P];
                g = 2 * E - (y = E < .5 ? E * (1 + R) : E + R - E * R), _ = [0, 0, 0];
                for (var q = 0; q < 3; q++)(b = D + 1 / 3 * -(q - 1)) < 0 && b++, b > 1 && b--, P = 6 * b < 1 ? g + 6 * (y - g) * b : 2 * b < 1 ? y : 3 * b < 2 ? g + (y - g) * (2 / 3 - b) * 6 : g, _[q] = 255 * P;
                return _
            }, a.hsl.hsv = function(d) {
                var g = d[0],
                    y = d[1] / 100,
                    b = d[2] / 100,
                    _ = y,
                    P = Math.max(b, .01);
                return y *= (b *= 2) <= 1 ? b : 2 - b, _ *= P <= 1 ? P : 2 - P, [g, 100 * (b === 0 ? 2 * _ / (P + _) : 2 * y / (b + y)), (b + y) / 2 * 100]
            }, a.hsv.rgb = function(d) {
                var g = d[0] / 60,
                    y = d[1] / 100,
                    b = d[2] / 100,
                    _ = Math.floor(g) % 6,
                    P = g - Math.floor(g),
                    D = 255 * b * (1 - y),
                    R = 255 * b * (1 - y * P),
                    E = 255 * b * (1 - y * (1 - P));
                switch (b *= 255, _) {
                    case 0:
                        return [b, E, D];
                    case 1:
                        return [R, b, D];
                    case 2:
                        return [D, b, E];
                    case 3:
                        return [D, R, b];
                    case 4:
                        return [E, D, b];
                    case 5:
                        return [b, D, R]
                }
            }, a.hsv.hsl = function(d) {
                var g, y, b, _ = d[0],
                    P = d[1] / 100,
                    D = d[2] / 100,
                    R = Math.max(D, .01);
                return b = (2 - P) * D, y = P * R, [_, 100 * (y = (y /= (g = (2 - P) * R) <= 1 ? g : 2 - g) || 0), 100 * (b /= 2)]
            }, a.hwb.rgb = function(d) {
                var g, y, b, _, P, D, R, E = d[0] / 360,
                    q = d[1] / 100,
                    Q = d[2] / 100,
                    lt = q + Q;
                switch (lt > 1 && (q /= lt, Q /= lt), b = 6 * E - (g = Math.floor(6 * E)), 1 & g && (b = 1 - b), _ = q + b * ((y = 1 - Q) - q), g) {
                    default:
                        case 6:
                        case 0:
                        P = y,
                    D = _,
                    R = q;
                    break;
                    case 1:
                            P = _,
                        D = y,
                        R = q;
                        break;
                    case 2:
                            P = q,
                        D = y,
                        R = _;
                        break;
                    case 3:
                            P = q,
                        D = _,
                        R = y;
                        break;
                    case 4:
                            P = _,
                        D = q,
                        R = y;
                        break;
                    case 5:
                            P = y,
                        D = q,
                        R = _
                }
                return [255 * P, 255 * D, 255 * R]
            }, a.cmyk.rgb = function(d) {
                var g = d[0] / 100,
                    y = d[1] / 100,
                    b = d[2] / 100,
                    _ = d[3] / 100;
                return [255 * (1 - Math.min(1, g * (1 - _) + _)), 255 * (1 - Math.min(1, y * (1 - _) + _)), 255 * (1 - Math.min(1, b * (1 - _) + _))]
            }, a.xyz.rgb = function(d) {
                var g, y, b, _ = d[0] / 100,
                    P = d[1] / 100,
                    D = d[2] / 100;
                return y = -.9689 * _ + 1.8758 * P + .0415 * D, b = .0557 * _ + -.204 * P + 1.057 * D, g = (g = 3.2406 * _ + -1.5372 * P + -.4986 * D) > .0031308 ? 1.055 * Math.pow(g, 1 / 2.4) - .055 : 12.92 * g, y = y > .0031308 ? 1.055 * Math.pow(y, 1 / 2.4) - .055 : 12.92 * y, b = b > .0031308 ? 1.055 * Math.pow(b, 1 / 2.4) - .055 : 12.92 * b, [255 * (g = Math.min(Math.max(0, g), 1)), 255 * (y = Math.min(Math.max(0, y), 1)), 255 * (b = Math.min(Math.max(0, b), 1))]
            }, a.xyz.lab = function(d) {
                var g = d[0],
                    y = d[1],
                    b = d[2];
                return y /= 100, b /= 108.883, g = (g /= 95.047) > .008856 ? Math.pow(g, 1 / 3) : 7.787 * g + 16 / 116, [116 * (y = y > .008856 ? Math.pow(y, 1 / 3) : 7.787 * y + 16 / 116) - 16, 500 * (g - y), 200 * (y - (b = b > .008856 ? Math.pow(b, 1 / 3) : 7.787 * b + 16 / 116))]
            }, a.lab.xyz = function(d) {
                var g, y, b, _ = d[0];
                g = d[1] / 500 + (y = (_ + 16) / 116), b = y - d[2] / 200;
                var P = Math.pow(y, 3),
                    D = Math.pow(g, 3),
                    R = Math.pow(b, 3);
                return y = P > .008856 ? P : (y - 16 / 116) / 7.787, g = D > .008856 ? D : (g - 16 / 116) / 7.787, b = R > .008856 ? R : (b - 16 / 116) / 7.787, [g *= 95.047, y *= 100, b *= 108.883]
            }, a.lab.lch = function(d) {
                var g, y = d[0],
                    b = d[1],
                    _ = d[2];
                return (g = 360 * Math.atan2(_, b) / 2 / Math.PI) < 0 && (g += 360), [y, Math.sqrt(b * b + _ * _), g]
            }, a.lch.lab = function(d) {
                var g, y = d[0],
                    b = d[1];
                return g = d[2] / 360 * 2 * Math.PI, [y, b * Math.cos(g), b * Math.sin(g)]
            }, a.rgb.ansi16 = function(d) {
                var g = d[0],
                    y = d[1],
                    b = d[2],
                    _ = 1 in arguments ? arguments[1] : a.rgb.hsv(d)[2];
                if ((_ = Math.round(_ / 50)) === 0) return 30;
                var P = 30 + (Math.round(b / 255) << 2 | Math.round(y / 255) << 1 | Math.round(g / 255));
                return _ === 2 && (P += 60), P
            }, a.hsv.ansi16 = function(d) {
                return a.rgb.ansi16(a.hsv.rgb(d), d[2])
            }, a.rgb.ansi256 = function(d) {
                var g = d[0],
                    y = d[1],
                    b = d[2];
                return g === y && y === b ? g < 8 ? 16 : g > 248 ? 231 : Math.round((g - 8) / 247 * 24) + 232 : 16 + 36 * Math.round(g / 255 * 5) + 6 * Math.round(y / 255 * 5) + Math.round(b / 255 * 5)
            }, a.ansi16.rgb = function(d) {
                var g = d % 10;
                if (g === 0 || g === 7) return d > 50 && (g += 3.5), [g = g / 10.5 * 255, g, g];
                var y = .5 * (1 + ~~(d > 50));
                return [(1 & g) * y * 255, (g >> 1 & 1) * y * 255, (g >> 2 & 1) * y * 255]
            }, a.ansi256.rgb = function(d) {
                if (d >= 232) {
                    var g = 10 * (d - 232) + 8;
                    return [g, g, g]
                }
                var y;
                return d -= 16, [Math.floor(d / 36) / 5 * 255, Math.floor((y = d % 36) / 6) / 5 * 255, y % 6 / 5 * 255]
            }, a.rgb.hex = function(d) {
                var g = (((255 & Math.round(d[0])) << 16) + ((255 & Math.round(d[1])) << 8) + (255 & Math.round(d[2]))).toString(16).toUpperCase();
                return "000000".substring(g.length) + g
            }, a.hex.rgb = function(d) {
                var g = d.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
                if (!g) return [0, 0, 0];
                var y = g[0];
                g[0].length === 3 && (y = y.split("").map(function(_) {
                    return _ + _
                }).join(""));
                var b = parseInt(y, 16);
                return [b >> 16 & 255, b >> 8 & 255, 255 & b]
            }, a.rgb.hcg = function(d) {
                var g, y = d[0] / 255,
                    b = d[1] / 255,
                    _ = d[2] / 255,
                    P = Math.max(Math.max(y, b), _),
                    D = Math.min(Math.min(y, b), _),
                    R = P - D;
                return g = R <= 0 ? 0 : P === y ? (b - _) / R % 6 : P === b ? 2 + (_ - y) / R : 4 + (y - b) / R + 4, g /= 6, [360 * (g %= 1), 100 * R, 100 * (R < 1 ? D / (1 - R) : 0)]
            }, a.hsl.hcg = function(d) {
                var g = d[1] / 100,
                    y = d[2] / 100,
                    b = 1,
                    _ = 0;
                return (b = y < .5 ? 2 * g * y : 2 * g * (1 - y)) < 1 && (_ = (y - .5 * b) / (1 - b)), [d[0], 100 * b, 100 * _]
            }, a.hsv.hcg = function(d) {
                var g = d[1] / 100,
                    y = d[2] / 100,
                    b = g * y,
                    _ = 0;
                return b < 1 && (_ = (y - b) / (1 - b)), [d[0], 100 * b, 100 * _]
            }, a.hcg.rgb = function(d) {
                var g = d[0] / 360,
                    y = d[1] / 100,
                    b = d[2] / 100;
                if (y === 0) return [255 * b, 255 * b, 255 * b];
                var _ = [0, 0, 0],
                    P = g % 1 * 6,
                    D = P % 1,
                    R = 1 - D,
                    E = 0;
                switch (Math.floor(P)) {
                    case 0:
                        _[0] = 1, _[1] = D, _[2] = 0;
                        break;
                    case 1:
                        _[0] = R, _[1] = 1, _[2] = 0;
                        break;
                    case 2:
                        _[0] = 0, _[1] = 1, _[2] = D;
                        break;
                    case 3:
                        _[0] = 0, _[1] = R, _[2] = 1;
                        break;
                    case 4:
                        _[0] = D, _[1] = 0, _[2] = 1;
                        break;
                    default:
                        _[0] = 1, _[1] = 0, _[2] = R
                }
                return E = (1 - y) * b, [255 * (y * _[0] + E), 255 * (y * _[1] + E), 255 * (y * _[2] + E)]
            }, a.hcg.hsv = function(d) {
                var g = d[1] / 100,
                    y = g + d[2] / 100 * (1 - g),
                    b = 0;
                return y > 0 && (b = g / y), [d[0], 100 * b, 100 * y]
            }, a.hcg.hsl = function(d) {
                var g = d[1] / 100,
                    y = d[2] / 100 * (1 - g) + .5 * g,
                    b = 0;
                return y > 0 && y < .5 ? b = g / (2 * y) : y >= .5 && y < 1 && (b = g / (2 * (1 - y))), [d[0], 100 * b, 100 * y]
            }, a.hcg.hwb = function(d) {
                var g = d[1] / 100,
                    y = g + d[2] / 100 * (1 - g);
                return [d[0], 100 * (y - g), 100 * (1 - y)]
            }, a.hwb.hcg = function(d) {
                var g = d[1] / 100,
                    y = 1 - d[2] / 100,
                    b = y - g,
                    _ = 0;
                return b < 1 && (_ = (y - b) / (1 - b)), [d[0], 100 * b, 100 * _]
            }, a.apple.rgb = function(d) {
                return [d[0] / 65535 * 255, d[1] / 65535 * 255, d[2] / 65535 * 255]
            }, a.rgb.apple = function(d) {
                return [d[0] / 255 * 65535, d[1] / 255 * 65535, d[2] / 255 * 65535]
            }, a.gray.rgb = function(d) {
                return [d[0] / 100 * 255, d[0] / 100 * 255, d[0] / 100 * 255]
            }, a.gray.hsl = a.gray.hsv = function(d) {
                return [0, 0, d[0]]
            }, a.gray.hwb = function(d) {
                return [0, 100, d[0]]
            }, a.gray.cmyk = function(d) {
                return [0, 0, 0, d[0]]
            }, a.gray.lab = function(d) {
                return [d[0], 0, 0]
            }, a.gray.hex = function(d) {
                var g = 255 & Math.round(d[0] / 100 * 255),
                    y = ((g << 16) + (g << 8) + g).toString(16).toUpperCase();
                return "000000".substring(y.length) + y
            }, a.rgb.gray = function(d) {
                return [(d[0] + d[1] + d[2]) / 3 / 255 * 100]
            }
        });

    function p() {
        for (var t = {}, e = Object.keys(h), r = e.length, a = 0; a < r; a++) t[e[a]] = {
            distance: -1,
            parent: null
        };
        return t
    }

    function v(t) {
        var e = p(),
            r = [t];
        for (e[t].distance = 0; r.length;)
            for (var a = r.pop(), s = Object.keys(h[a]), c = s.length, u = 0; u < c; u++) {
                var m = s[u],
                    d = e[m];
                d.distance === -1 && (d.distance = e[a].distance + 1, d.parent = a, r.unshift(m))
            }
        return e
    }

    function k(t, e) {
        return function(r) {
            return e(t(r))
        }
    }

    function j(t, e) {
        for (var r = [e[t].parent, t], a = h[e[t].parent][t], s = e[t].parent; e[s].parent;) r.unshift(e[s].parent), a = k(h[e[s].parent][s], a), s = e[s].parent;
        return a.conversion = r, a
    }
    h.rgb, h.hsl, h.hsv, h.hwb, h.cmyk, h.xyz, h.lab, h.lch, h.hex, h.keyword, h.ansi16, h.ansi256, h.hcg, h.apple, h.gray;
    var N = function(t) {
            for (var e = v(t), r = {}, a = Object.keys(e), s = a.length, c = 0; c < s; c++) {
                var u = a[c];
                e[u].parent !== null && (r[u] = j(u, e))
            }
            return r
        },
        C = {};

    function B(t) {
        var e = function(r) {
            return r == null ? r : (arguments.length > 1 && (r = Array.prototype.slice.call(arguments)), t(r))
        };
        return "conversion" in t && (e.conversion = t.conversion), e
    }

    function L(t) {
        var e = function(r) {
            if (r == null) return r;
            arguments.length > 1 && (r = Array.prototype.slice.call(arguments));
            var a = t(r);
            if (typeof a == "object")
                for (var s = a.length, c = 0; c < s; c++) a[c] = Math.round(a[c]);
            return a
        };
        return "conversion" in t && (e.conversion = t.conversion), e
    }
    Object.keys(h).forEach(function(t) {
        C[t] = {}, Object.defineProperty(C[t], "channels", {
            value: h[t].channels
        }), Object.defineProperty(C[t], "labels", {
            value: h[t].labels
        });
        var e = N(t);
        Object.keys(e).forEach(function(r) {
            var a = e[r];
            C[t][r] = L(a), C[t][r].raw = B(a)
        })
    });
    var z = C,
        Y = {
            aliceblue: [240, 248, 255],
            antiquewhite: [250, 235, 215],
            aqua: [0, 255, 255],
            aquamarine: [127, 255, 212],
            azure: [240, 255, 255],
            beige: [245, 245, 220],
            bisque: [255, 228, 196],
            black: [0, 0, 0],
            blanchedalmond: [255, 235, 205],
            blue: [0, 0, 255],
            blueviolet: [138, 43, 226],
            brown: [165, 42, 42],
            burlywood: [222, 184, 135],
            cadetblue: [95, 158, 160],
            chartreuse: [127, 255, 0],
            chocolate: [210, 105, 30],
            coral: [255, 127, 80],
            cornflowerblue: [100, 149, 237],
            cornsilk: [255, 248, 220],
            crimson: [220, 20, 60],
            cyan: [0, 255, 255],
            darkblue: [0, 0, 139],
            darkcyan: [0, 139, 139],
            darkgoldenrod: [184, 134, 11],
            darkgray: [169, 169, 169],
            darkgreen: [0, 100, 0],
            darkgrey: [169, 169, 169],
            darkkhaki: [189, 183, 107],
            darkmagenta: [139, 0, 139],
            darkolivegreen: [85, 107, 47],
            darkorange: [255, 140, 0],
            darkorchid: [153, 50, 204],
            darkred: [139, 0, 0],
            darksalmon: [233, 150, 122],
            darkseagreen: [143, 188, 143],
            darkslateblue: [72, 61, 139],
            darkslategray: [47, 79, 79],
            darkslategrey: [47, 79, 79],
            darkturquoise: [0, 206, 209],
            darkviolet: [148, 0, 211],
            deeppink: [255, 20, 147],
            deepskyblue: [0, 191, 255],
            dimgray: [105, 105, 105],
            dimgrey: [105, 105, 105],
            dodgerblue: [30, 144, 255],
            firebrick: [178, 34, 34],
            floralwhite: [255, 250, 240],
            forestgreen: [34, 139, 34],
            fuchsia: [255, 0, 255],
            gainsboro: [220, 220, 220],
            ghostwhite: [248, 248, 255],
            gold: [255, 215, 0],
            goldenrod: [218, 165, 32],
            gray: [128, 128, 128],
            green: [0, 128, 0],
            greenyellow: [173, 255, 47],
            grey: [128, 128, 128],
            honeydew: [240, 255, 240],
            hotpink: [255, 105, 180],
            indianred: [205, 92, 92],
            indigo: [75, 0, 130],
            ivory: [255, 255, 240],
            khaki: [240, 230, 140],
            lavender: [230, 230, 250],
            lavenderblush: [255, 240, 245],
            lawngreen: [124, 252, 0],
            lemonchiffon: [255, 250, 205],
            lightblue: [173, 216, 230],
            lightcoral: [240, 128, 128],
            lightcyan: [224, 255, 255],
            lightgoldenrodyellow: [250, 250, 210],
            lightgray: [211, 211, 211],
            lightgreen: [144, 238, 144],
            lightgrey: [211, 211, 211],
            lightpink: [255, 182, 193],
            lightsalmon: [255, 160, 122],
            lightseagreen: [32, 178, 170],
            lightskyblue: [135, 206, 250],
            lightslategray: [119, 136, 153],
            lightslategrey: [119, 136, 153],
            lightsteelblue: [176, 196, 222],
            lightyellow: [255, 255, 224],
            lime: [0, 255, 0],
            limegreen: [50, 205, 50],
            linen: [250, 240, 230],
            magenta: [255, 0, 255],
            maroon: [128, 0, 0],
            mediumaquamarine: [102, 205, 170],
            mediumblue: [0, 0, 205],
            mediumorchid: [186, 85, 211],
            mediumpurple: [147, 112, 219],
            mediumseagreen: [60, 179, 113],
            mediumslateblue: [123, 104, 238],
            mediumspringgreen: [0, 250, 154],
            mediumturquoise: [72, 209, 204],
            mediumvioletred: [199, 21, 133],
            midnightblue: [25, 25, 112],
            mintcream: [245, 255, 250],
            mistyrose: [255, 228, 225],
            moccasin: [255, 228, 181],
            navajowhite: [255, 222, 173],
            navy: [0, 0, 128],
            oldlace: [253, 245, 230],
            olive: [128, 128, 0],
            olivedrab: [107, 142, 35],
            orange: [255, 165, 0],
            orangered: [255, 69, 0],
            orchid: [218, 112, 214],
            palegoldenrod: [238, 232, 170],
            palegreen: [152, 251, 152],
            paleturquoise: [175, 238, 238],
            palevioletred: [219, 112, 147],
            papayawhip: [255, 239, 213],
            peachpuff: [255, 218, 185],
            peru: [205, 133, 63],
            pink: [255, 192, 203],
            plum: [221, 160, 221],
            powderblue: [176, 224, 230],
            purple: [128, 0, 128],
            rebeccapurple: [102, 51, 153],
            red: [255, 0, 0],
            rosybrown: [188, 143, 143],
            royalblue: [65, 105, 225],
            saddlebrown: [139, 69, 19],
            salmon: [250, 128, 114],
            sandybrown: [244, 164, 96],
            seagreen: [46, 139, 87],
            seashell: [255, 245, 238],
            sienna: [160, 82, 45],
            silver: [192, 192, 192],
            skyblue: [135, 206, 235],
            slateblue: [106, 90, 205],
            slategray: [112, 128, 144],
            slategrey: [112, 128, 144],
            snow: [255, 250, 250],
            springgreen: [0, 255, 127],
            steelblue: [70, 130, 180],
            tan: [210, 180, 140],
            teal: [0, 128, 128],
            thistle: [216, 191, 216],
            tomato: [255, 99, 71],
            turquoise: [64, 224, 208],
            violet: [238, 130, 238],
            wheat: [245, 222, 179],
            white: [255, 255, 255],
            whitesmoke: [245, 245, 245],
            yellow: [255, 255, 0],
            yellowgreen: [154, 205, 50]
        },
        Z = {
            getRgba: rt,
            getHsla: wt,
            getRgb: W,
            getHsl: at,
            getHwb: vt,
            getAlpha: J,
            hexString: X,
            rgbString: nt,
            rgbaString: st,
            percentString: _t,
            percentaString: gt,
            hslString: Nt,
            hslaString: jt,
            hwbString: Wt,
            keyword: te
        };

    function rt(t) {
        if (t) {
            var e = /^#([a-fA-F0-9]{3,4})$/i,
                r = /^#([a-fA-F0-9]{6}([a-fA-F0-9]{2})?)$/i,
                a = /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i,
                s = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i,
                c = /(\w+)/,
                u = [0, 0, 0],
                m = 1,
                d = t.match(e),
                g = "";
            if (d) {
                g = (d = d[1])[3];
                for (var y = 0; y < u.length; y++) u[y] = parseInt(d[y] + d[y], 16);
                g && (m = Math.round(parseInt(g + g, 16) / 255 * 100) / 100)
            } else if (d = t.match(r)) {
                for (g = d[2], d = d[1], y = 0; y < u.length; y++) u[y] = parseInt(d.slice(2 * y, 2 * y + 2), 16);
                g && (m = Math.round(parseInt(g, 16) / 255 * 100) / 100)
            } else if (d = t.match(a)) {
                for (y = 0; y < u.length; y++) u[y] = parseInt(d[y + 1]);
                m = parseFloat(d[4])
            } else if (d = t.match(s)) {
                for (y = 0; y < u.length; y++) u[y] = Math.round(2.55 * parseFloat(d[y + 1]));
                m = parseFloat(d[4])
            } else if (d = t.match(c)) {
                if (d[1] == "transparent") return [0, 0, 0, 0];
                if (!(u = Y[d[1]])) return
            }
            for (y = 0; y < u.length; y++) u[y] = Gt(u[y], 0, 255);
            return m = m || m == 0 ? Gt(m, 0, 1) : 1, u[3] = m, u
        }
    }

    function wt(t) {
        if (t) {
            var e = /^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/,
                r = t.match(e);
            if (r) {
                var a = parseFloat(r[4]);
                return [Gt(parseInt(r[1]), 0, 360), Gt(parseFloat(r[2]), 0, 100), Gt(parseFloat(r[3]), 0, 100), Gt(isNaN(a) ? 1 : a, 0, 1)]
            }
        }
    }

    function vt(t) {
        if (t) {
            var e = /^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/,
                r = t.match(e);
            if (r) {
                var a = parseFloat(r[4]);
                return [Gt(parseInt(r[1]), 0, 360), Gt(parseFloat(r[2]), 0, 100), Gt(parseFloat(r[3]), 0, 100), Gt(isNaN(a) ? 1 : a, 0, 1)]
            }
        }
    }

    function W(t) {
        var e = rt(t);
        return e && e.slice(0, 3)
    }

    function at(t) {
        var e = wt(t);
        return e && e.slice(0, 3)
    }

    function J(t) {
        var e = rt(t);
        return e || (e = wt(t)) || (e = vt(t)) ? e[3] : void 0
    }

    function X(t, e) {
        return e = e !== void 0 && t.length === 3 ? e : t[3], "#" + Jt(t[0]) + Jt(t[1]) + Jt(t[2]) + (e >= 0 && e < 1 ? Jt(Math.round(255 * e)) : "")
    }

    function nt(t, e) {
        return e < 1 || t[3] && t[3] < 1 ? st(t, e) : "rgb(" + t[0] + ", " + t[1] + ", " + t[2] + ")"
    }

    function st(t, e) {
        return e === void 0 && (e = t[3] !== void 0 ? t[3] : 1), "rgba(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + e + ")"
    }

    function _t(t, e) {
        return e < 1 || t[3] && t[3] < 1 ? gt(t, e) : "rgb(" + Math.round(t[0] / 255 * 100) + "%, " + Math.round(t[1] / 255 * 100) + "%, " + Math.round(t[2] / 255 * 100) + "%)"
    }

    function gt(t, e) {
        return "rgba(" + Math.round(t[0] / 255 * 100) + "%, " + Math.round(t[1] / 255 * 100) + "%, " + Math.round(t[2] / 255 * 100) + "%, " + (e || t[3] || 1) + ")"
    }

    function Nt(t, e) {
        return e < 1 || t[3] && t[3] < 1 ? jt(t, e) : "hsl(" + t[0] + ", " + t[1] + "%, " + t[2] + "%)"
    }

    function jt(t, e) {
        return e === void 0 && (e = t[3] !== void 0 ? t[3] : 1), "hsla(" + t[0] + ", " + t[1] + "%, " + t[2] + "%, " + e + ")"
    }

    function Wt(t, e) {
        return e === void 0 && (e = t[3] !== void 0 ? t[3] : 1), "hwb(" + t[0] + ", " + t[1] + "%, " + t[2] + "%" + (e !== void 0 && e !== 1 ? ", " + e : "") + ")"
    }

    function te(t) {
        return un[t.slice(0, 3)]
    }

    function Gt(t, e, r) {
        return Math.min(Math.max(e, t), r)
    }

    function Jt(t) {
        var e = t.toString(16).toUpperCase();
        return e.length < 2 ? "0" + e : e
    }
    var un = {};
    for (var Ze in Y) un[Y[Ze]] = Ze;
    var Ot = function(t) {
        return t instanceof Ot ? t : this instanceof Ot ? (this.valid = !1, this.values = {
            rgb: [0, 0, 0],
            hsl: [0, 0, 0],
            hsv: [0, 0, 0],
            hwb: [0, 0, 0],
            cmyk: [0, 0, 0, 0],
            alpha: 1
        }, void(typeof t == "string" ? (e = Z.getRgba(t)) ? this.setValues("rgb", e) : (e = Z.getHsla(t)) ? this.setValues("hsl", e) : (e = Z.getHwb(t)) && this.setValues("hwb", e) : typeof t == "object" && ((e = t).r !== void 0 || e.red !== void 0 ? this.setValues("rgb", e) : e.l !== void 0 || e.lightness !== void 0 ? this.setValues("hsl", e) : e.v !== void 0 || e.value !== void 0 ? this.setValues("hsv", e) : e.w !== void 0 || e.whiteness !== void 0 ? this.setValues("hwb", e) : e.c === void 0 && e.cyan === void 0 || this.setValues("cmyk", e)))) : new Ot(t);
        var e
    };
    Ot.prototype = {
        isValid: function() {
            return this.valid
        },
        rgb: function() {
            return this.setSpace("rgb", arguments)
        },
        hsl: function() {
            return this.setSpace("hsl", arguments)
        },
        hsv: function() {
            return this.setSpace("hsv", arguments)
        },
        hwb: function() {
            return this.setSpace("hwb", arguments)
        },
        cmyk: function() {
            return this.setSpace("cmyk", arguments)
        },
        rgbArray: function() {
            return this.values.rgb
        },
        hslArray: function() {
            return this.values.hsl
        },
        hsvArray: function() {
            return this.values.hsv
        },
        hwbArray: function() {
            var t = this.values;
            return t.alpha !== 1 ? t.hwb.concat([t.alpha]) : t.hwb
        },
        cmykArray: function() {
            return this.values.cmyk
        },
        rgbaArray: function() {
            var t = this.values;
            return t.rgb.concat([t.alpha])
        },
        hslaArray: function() {
            var t = this.values;
            return t.hsl.concat([t.alpha])
        },
        alpha: function(t) {
            return t === void 0 ? this.values.alpha : (this.setValues("alpha", t), this)
        },
        red: function(t) {
            return this.setChannel("rgb", 0, t)
        },
        green: function(t) {
            return this.setChannel("rgb", 1, t)
        },
        blue: function(t) {
            return this.setChannel("rgb", 2, t)
        },
        hue: function(t) {
            return t && (t = (t %= 360) < 0 ? 360 + t : t), this.setChannel("hsl", 0, t)
        },
        saturation: function(t) {
            return this.setChannel("hsl", 1, t)
        },
        lightness: function(t) {
            return this.setChannel("hsl", 2, t)
        },
        saturationv: function(t) {
            return this.setChannel("hsv", 1, t)
        },
        whiteness: function(t) {
            return this.setChannel("hwb", 1, t)
        },
        blackness: function(t) {
            return this.setChannel("hwb", 2, t)
        },
        value: function(t) {
            return this.setChannel("hsv", 2, t)
        },
        cyan: function(t) {
            return this.setChannel("cmyk", 0, t)
        },
        magenta: function(t) {
            return this.setChannel("cmyk", 1, t)
        },
        yellow: function(t) {
            return this.setChannel("cmyk", 2, t)
        },
        black: function(t) {
            return this.setChannel("cmyk", 3, t)
        },
        hexString: function() {
            return Z.hexString(this.values.rgb)
        },
        rgbString: function() {
            return Z.rgbString(this.values.rgb, this.values.alpha)
        },
        rgbaString: function() {
            return Z.rgbaString(this.values.rgb, this.values.alpha)
        },
        percentString: function() {
            return Z.percentString(this.values.rgb, this.values.alpha)
        },
        hslString: function() {
            return Z.hslString(this.values.hsl, this.values.alpha)
        },
        hslaString: function() {
            return Z.hslaString(this.values.hsl, this.values.alpha)
        },
        hwbString: function() {
            return Z.hwbString(this.values.hwb, this.values.alpha)
        },
        keyword: function() {
            return Z.keyword(this.values.rgb, this.values.alpha)
        },
        rgbNumber: function() {
            var t = this.values.rgb;
            return t[0] << 16 | t[1] << 8 | t[2]
        },
        luminosity: function() {
            for (var t = this.values.rgb, e = [], r = 0; r < t.length; r++) {
                var a = t[r] / 255;
                e[r] = a <= .03928 ? a / 12.92 : Math.pow((a + .055) / 1.055, 2.4)
            }
            return .2126 * e[0] + .7152 * e[1] + .0722 * e[2]
        },
        contrast: function(t) {
            var e = this.luminosity(),
                r = t.luminosity();
            return e > r ? (e + .05) / (r + .05) : (r + .05) / (e + .05)
        },
        level: function(t) {
            var e = this.contrast(t);
            return e >= 7.1 ? "AAA" : e >= 4.5 ? "AA" : ""
        },
        dark: function() {
            var t = this.values.rgb;
            return (299 * t[0] + 587 * t[1] + 114 * t[2]) / 1e3 < 128
        },
        light: function() {
            return !this.dark()
        },
        negate: function() {
            for (var t = [], e = 0; e < 3; e++) t[e] = 255 - this.values.rgb[e];
            return this.setValues("rgb", t), this
        },
        lighten: function(t) {
            var e = this.values.hsl;
            return e[2] += e[2] * t, this.setValues("hsl", e), this
        },
        darken: function(t) {
            var e = this.values.hsl;
            return e[2] -= e[2] * t, this.setValues("hsl", e), this
        },
        saturate: function(t) {
            var e = this.values.hsl;
            return e[1] += e[1] * t, this.setValues("hsl", e), this
        },
        desaturate: function(t) {
            var e = this.values.hsl;
            return e[1] -= e[1] * t, this.setValues("hsl", e), this
        },
        whiten: function(t) {
            var e = this.values.hwb;
            return e[1] += e[1] * t, this.setValues("hwb", e), this
        },
        blacken: function(t) {
            var e = this.values.hwb;
            return e[2] += e[2] * t, this.setValues("hwb", e), this
        },
        greyscale: function() {
            var t = this.values.rgb,
                e = .3 * t[0] + .59 * t[1] + .11 * t[2];
            return this.setValues("rgb", [e, e, e]), this
        },
        clearer: function(t) {
            var e = this.values.alpha;
            return this.setValues("alpha", e - e * t), this
        },
        opaquer: function(t) {
            var e = this.values.alpha;
            return this.setValues("alpha", e + e * t), this
        },
        rotate: function(t) {
            var e = this.values.hsl,
                r = (e[0] + t) % 360;
            return e[0] = r < 0 ? 360 + r : r, this.setValues("hsl", e), this
        },
        mix: function(t, e) {
            var r = this,
                a = t,
                s = e === void 0 ? .5 : e,
                c = 2 * s - 1,
                u = r.alpha() - a.alpha(),
                m = ((c * u == -1 ? c : (c + u) / (1 + c * u)) + 1) / 2,
                d = 1 - m;
            return this.rgb(m * r.red() + d * a.red(), m * r.green() + d * a.green(), m * r.blue() + d * a.blue()).alpha(r.alpha() * s + a.alpha() * (1 - s))
        },
        toJSON: function() {
            return this.rgb()
        },
        clone: function() {
            var t, e, r = new Ot,
                a = this.values,
                s = r.values;
            for (var c in a) a.hasOwnProperty(c) && (t = a[c], (e = {}.toString.call(t)) === "[object Array]" ? s[c] = t.slice(0) : e === "[object Number]" && (s[c] = t));
            return r
        }
    }, Ot.prototype.spaces = {
        rgb: ["red", "green", "blue"],
        hsl: ["hue", "saturation", "lightness"],
        hsv: ["hue", "saturation", "value"],
        hwb: ["hue", "whiteness", "blackness"],
        cmyk: ["cyan", "magenta", "yellow", "black"]
    }, Ot.prototype.maxes = {
        rgb: [255, 255, 255],
        hsl: [360, 100, 100],
        hsv: [360, 100, 100],
        hwb: [360, 100, 100],
        cmyk: [100, 100, 100, 100]
    }, Ot.prototype.getValues = function(t) {
        for (var e = this.values, r = {}, a = 0; a < t.length; a++) r[t.charAt(a)] = e[t][a];
        return e.alpha !== 1 && (r.a = e.alpha), r
    }, Ot.prototype.setValues = function(t, e) {
        var r, a, s = this.values,
            c = this.spaces,
            u = this.maxes,
            m = 1;
        if (this.valid = !0, t === "alpha") m = e;
        else if (e.length) s[t] = e.slice(0, t.length), m = e[t.length];
        else if (e[t.charAt(0)] !== void 0) {
            for (r = 0; r < t.length; r++) s[t][r] = e[t.charAt(r)];
            m = e.a
        } else if (e[c[t][0]] !== void 0) {
            var d = c[t];
            for (r = 0; r < t.length; r++) s[t][r] = e[d[r]];
            m = e.alpha
        }
        if (s.alpha = Math.max(0, Math.min(1, m === void 0 ? s.alpha : m)), t === "alpha") return !1;
        for (r = 0; r < t.length; r++) a = Math.max(0, Math.min(u[t][r], s[t][r])), s[t][r] = Math.round(a);
        for (var g in c) g !== t && (s[g] = z[t][g](s[t]));
        return !0
    }, Ot.prototype.setSpace = function(t, e) {
        var r = e[0];
        return r === void 0 ? this.getValues(t) : (typeof r == "number" && (r = Array.prototype.slice.call(e)), this.setValues(t, r), this)
    }, Ot.prototype.setChannel = function(t, e, r) {
        var a = this.values[t];
        return r === void 0 ? a[e] : (r === a[e] || (a[e] = r, this.setValues(t, a)), this)
    }, typeof window != "undefined" && (window.Color = Ot);
    var be = Ot;

    function Je(t) {
        return ["__proto__", "prototype", "constructor"].indexOf(t) === -1
    }
    var xe, ht = {
            noop: function() {},
            uid: (xe = 0, function() {
                return xe++
            }),
            isNullOrUndef: function(t) {
                return t == null
            },
            isArray: function(t) {
                if (Array.isArray && Array.isArray(t)) return !0;
                var e = Object.prototype.toString.call(t);
                return e.substr(0, 7) === "[object" && e.substr(-6) === "Array]"
            },
            isObject: function(t) {
                return t !== null && Object.prototype.toString.call(t) === "[object Object]"
            },
            isFinite: function(t) {
                return (typeof t == "number" || t instanceof Number) && isFinite(t)
            },
            valueOrDefault: function(t, e) {
                return t === void 0 ? e : t
            },
            valueAtIndexOrDefault: function(t, e, r) {
                return ht.valueOrDefault(ht.isArray(t) ? t[e] : t, r)
            },
            callback: function(t, e, r) {
                if (t && typeof t.call == "function") return t.apply(r, e)
            },
            each: function(t, e, r, a) {
                var s, c, u;
                if (ht.isArray(t))
                    if (c = t.length, a)
                        for (s = c - 1; s >= 0; s--) e.call(r, t[s], s);
                    else
                        for (s = 0; s < c; s++) e.call(r, t[s], s);
                else if (ht.isObject(t))
                    for (c = (u = Object.keys(t)).length, s = 0; s < c; s++) e.call(r, t[u[s]], u[s])
            },
            arrayEquals: function(t, e) {
                var r, a, s, c;
                if (!t || !e || t.length !== e.length) return !1;
                for (r = 0, a = t.length; r < a; ++r)
                    if (s = t[r], c = e[r], s instanceof Array && c instanceof Array) {
                        if (!ht.arrayEquals(s, c)) return !1
                    } else if (s !== c) return !1;
                return !0
            },
            clone: function(t) {
                if (ht.isArray(t)) return t.map(ht.clone);
                if (ht.isObject(t)) {
                    for (var e = Object.create(t), r = Object.keys(t), a = r.length, s = 0; s < a; ++s) e[r[s]] = ht.clone(t[r[s]]);
                    return e
                }
                return t
            },
            _merger: function(t, e, r, a) {
                if (Je(t)) {
                    var s = e[t],
                        c = r[t];
                    ht.isObject(s) && ht.isObject(c) ? ht.merge(s, c, a) : e[t] = ht.clone(c)
                }
            },
            _mergerIf: function(t, e, r) {
                if (Je(t)) {
                    var a = e[t],
                        s = r[t];
                    ht.isObject(a) && ht.isObject(s) ? ht.mergeIf(a, s) : e.hasOwnProperty(t) || (e[t] = ht.clone(s))
                }
            },
            merge: function(t, e, r) {
                var a, s, c, u, m, d = ht.isArray(e) ? e : [e],
                    g = d.length;
                if (!ht.isObject(t)) return t;
                for (a = (r = r || {}).merger || ht._merger, s = 0; s < g; ++s)
                    if (e = d[s], ht.isObject(e))
                        for (m = 0, u = (c = Object.keys(e)).length; m < u; ++m) a(c[m], t, e, r);
                return t
            },
            mergeIf: function(t, e) {
                return ht.merge(t, e, {
                    merger: ht._mergerIf
                })
            },
            extend: Object.assign || function(t) {
                return ht.merge(t, [].slice.call(arguments, 1), {
                    merger: function(e, r, a) {
                        r[e] = a[e]
                    }
                })
            },
            inherits: function(t) {
                var e = this,
                    r = t && t.hasOwnProperty("constructor") ? t.constructor : function() {
                        return e.apply(this, arguments)
                    },
                    a = function() {
                        this.constructor = r
                    };
                return a.prototype = e.prototype, r.prototype = new a, r.extend = ht.inherits, t && ht.extend(r.prototype, t), r.__super__ = e.prototype, r
            },
            _deprecated: function(t, e, r, a) {}
        },
        ae = ht;
    ht.callCallback = ht.callback, ht.indexOf = function(t, e, r) {
        return Array.prototype.indexOf.call(t, e, r)
    }, ht.getValueOrDefault = ht.valueOrDefault, ht.getValueAtIndexOrDefault = ht.valueAtIndexOrDefault;
    var ue = {
            linear: function(t) {
                return t
            },
            easeInQuad: function(t) {
                return t * t
            },
            easeOutQuad: function(t) {
                return -t * (t - 2)
            },
            easeInOutQuad: function(t) {
                return (t /= .5) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1)
            },
            easeInCubic: function(t) {
                return t * t * t
            },
            easeOutCubic: function(t) {
                return (t -= 1) * t * t + 1
            },
            easeInOutCubic: function(t) {
                return (t /= .5) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
            },
            easeInQuart: function(t) {
                return t * t * t * t
            },
            easeOutQuart: function(t) {
                return -((t -= 1) * t * t * t - 1)
            },
            easeInOutQuart: function(t) {
                return (t /= .5) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2)
            },
            easeInQuint: function(t) {
                return t * t * t * t * t
            },
            easeOutQuint: function(t) {
                return (t -= 1) * t * t * t * t + 1
            },
            easeInOutQuint: function(t) {
                return (t /= .5) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
            },
            easeInSine: function(t) {
                return 1 - Math.cos(t * (Math.PI / 2))
            },
            easeOutSine: function(t) {
                return Math.sin(t * (Math.PI / 2))
            },
            easeInOutSine: function(t) {
                return -.5 * (Math.cos(Math.PI * t) - 1)
            },
            easeInExpo: function(t) {
                return t === 0 ? 0 : Math.pow(2, 10 * (t - 1))
            },
            easeOutExpo: function(t) {
                return t === 1 ? 1 : 1 - Math.pow(2, -10 * t)
            },
            easeInOutExpo: function(t) {
                return t === 0 ? 0 : t === 1 ? 1 : (t /= .5) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * --t))
            },
            easeInCirc: function(t) {
                return t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1)
            },
            easeOutCirc: function(t) {
                return Math.sqrt(1 - (t -= 1) * t)
            },
            easeInOutCirc: function(t) {
                return (t /= .5) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
            },
            easeInElastic: function(t) {
                var e = 1.70158,
                    r = 0,
                    a = 1;
                return t === 0 ? 0 : t === 1 ? 1 : (r || (r = .3), e = r / (2 * Math.PI) * Math.asin(1 / a), -a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / r))
            },
            easeOutElastic: function(t) {
                var e = 1.70158,
                    r = 0,
                    a = 1;
                return t === 0 ? 0 : t === 1 ? 1 : (r || (r = .3), e = r / (2 * Math.PI) * Math.asin(1 / a), a * Math.pow(2, -10 * t) * Math.sin((t - e) * (2 * Math.PI) / r) + 1)
            },
            easeInOutElastic: function(t) {
                var e = 1.70158,
                    r = 0,
                    a = 1;
                return t === 0 ? 0 : (t /= .5) == 2 ? 1 : (r || (r = .45), e = r / (2 * Math.PI) * Math.asin(1 / a), t < 1 ? a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / r) * -.5 : a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / r) * .5 + 1)
            },
            easeInBack: function(t) {
                var e = 1.70158;
                return t * t * ((e + 1) * t - e)
            },
            easeOutBack: function(t) {
                var e = 1.70158;
                return (t -= 1) * t * ((e + 1) * t + e) + 1
            },
            easeInOutBack: function(t) {
                var e = 1.70158;
                return (t /= .5) < 1 ? t * t * ((1 + (e *= 1.525)) * t - e) * .5 : .5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2)
            },
            easeInBounce: function(t) {
                return 1 - ue.easeOutBounce(1 - t)
            },
            easeOutBounce: function(t) {
                return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
            },
            easeInOutBounce: function(t) {
                return t < .5 ? .5 * ue.easeInBounce(2 * t) : .5 * ue.easeOutBounce(2 * t - 1) + .5
            }
        },
        Ke = {
            effects: ue
        };
    ae.easingEffects = ue;
    var Et = Math.PI,
        dn = Et / 180,
        le = 2 * Et,
        ce = Et / 2,
        De = Et / 4,
        ze = 2 * Et / 3,
        Kt = {
            clear: function(t) {
                t.ctx.clearRect(0, 0, t.width, t.height)
            },
            roundedRect: function(t, e, r, a, s, c) {
                if (c) {
                    var u = Math.min(c, s / 2, a / 2),
                        m = e + u,
                        d = r + u,
                        g = e + a - u,
                        y = r + s - u;
                    t.moveTo(e, d), m < g && d < y ? (t.arc(m, d, u, -Et, -ce), t.arc(g, d, u, -ce, 0), t.arc(g, y, u, 0, ce), t.arc(m, y, u, ce, Et)) : m < g ? (t.moveTo(m, r), t.arc(g, d, u, -ce, ce), t.arc(m, d, u, ce, Et + ce)) : d < y ? (t.arc(m, d, u, -Et, 0), t.arc(m, y, u, 0, Et)) : t.arc(m, d, u, -Et, Et), t.closePath(), t.moveTo(e, r)
                } else t.rect(e, r, a, s)
            },
            drawPoint: function(t, e, r, a, s, c) {
                var u, m, d, g, y, b = (c || 0) * dn;
                if (e && typeof e == "object" && ((u = e.toString()) === "[object HTMLImageElement]" || u === "[object HTMLCanvasElement]")) return t.save(), t.translate(a, s), t.rotate(b), t.drawImage(e, -e.width / 2, -e.height / 2, e.width, e.height), void t.restore();
                if (!(isNaN(r) || r <= 0)) {
                    switch (t.beginPath(), e) {
                        default: t.arc(a, s, r, 0, le),
                        t.closePath();
                        break;
                        case "triangle":
                                t.moveTo(a + Math.sin(b) * r, s - Math.cos(b) * r),
                            b += ze,
                            t.lineTo(a + Math.sin(b) * r, s - Math.cos(b) * r),
                            b += ze,
                            t.lineTo(a + Math.sin(b) * r, s - Math.cos(b) * r),
                            t.closePath();
                            break;
                        case "rectRounded":
                                g = r - (y = .516 * r),
                            m = Math.cos(b + De) * g,
                            d = Math.sin(b + De) * g,
                            t.arc(a - m, s - d, y, b - Et, b - ce),
                            t.arc(a + d, s - m, y, b - ce, b),
                            t.arc(a + m, s + d, y, b, b + ce),
                            t.arc(a - d, s + m, y, b + ce, b + Et),
                            t.closePath();
                            break;
                        case "rect":
                                if (!c) {
                                g = Math.SQRT1_2 * r, t.rect(a - g, s - g, 2 * g, 2 * g);
                                break
                            }b += De;
                        case "rectRot":
                                m = Math.cos(b) * r,
                            d = Math.sin(b) * r,
                            t.moveTo(a - m, s - d),
                            t.lineTo(a + d, s - m),
                            t.lineTo(a + m, s + d),
                            t.lineTo(a - d, s + m),
                            t.closePath();
                            break;
                        case "crossRot":
                                b += De;
                        case "cross":
                                m = Math.cos(b) * r,
                            d = Math.sin(b) * r,
                            t.moveTo(a - m, s - d),
                            t.lineTo(a + m, s + d),
                            t.moveTo(a + d, s - m),
                            t.lineTo(a - d, s + m);
                            break;
                        case "star":
                                m = Math.cos(b) * r,
                            d = Math.sin(b) * r,
                            t.moveTo(a - m, s - d),
                            t.lineTo(a + m, s + d),
                            t.moveTo(a + d, s - m),
                            t.lineTo(a - d, s + m),
                            b += De,
                            m = Math.cos(b) * r,
                            d = Math.sin(b) * r,
                            t.moveTo(a - m, s - d),
                            t.lineTo(a + m, s + d),
                            t.moveTo(a + d, s - m),
                            t.lineTo(a - d, s + m);
                            break;
                        case "line":
                                m = Math.cos(b) * r,
                            d = Math.sin(b) * r,
                            t.moveTo(a - m, s - d),
                            t.lineTo(a + m, s + d);
                            break;
                        case "dash":
                                t.moveTo(a, s),
                            t.lineTo(a + Math.cos(b) * r, s + Math.sin(b) * r)
                    }
                    t.fill(), t.stroke()
                }
            },
            _isPointInArea: function(t, e) {
                var r = 1e-6;
                return t.x > e.left - r && t.x < e.right + r && t.y > e.top - r && t.y < e.bottom + r
            },
            clipArea: function(t, e) {
                t.save(), t.beginPath(), t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top), t.clip()
            },
            unclipArea: function(t) {
                t.restore()
            },
            lineTo: function(t, e, r, a) {
                var s = r.steppedLine;
                if (s) {
                    if (s === "middle") {
                        var c = (e.x + r.x) / 2;
                        t.lineTo(c, a ? r.y : e.y), t.lineTo(c, a ? e.y : r.y)
                    } else s === "after" && !a || s !== "after" && a ? t.lineTo(e.x, r.y) : t.lineTo(r.x, e.y);
                    t.lineTo(r.x, r.y)
                } else r.tension ? t.bezierCurveTo(a ? e.controlPointPreviousX : e.controlPointNextX, a ? e.controlPointPreviousY : e.controlPointNextY, a ? r.controlPointNextX : r.controlPointPreviousX, a ? r.controlPointNextY : r.controlPointPreviousY, r.x, r.y) : t.lineTo(r.x, r.y)
            }
        },
        Qt = Kt;
    ae.clear = Kt.clear, ae.drawRoundedRectangle = function(t) {
        t.beginPath(), Kt.roundedRect.apply(Kt, arguments)
    };
    var de = {
        _set: function(t, e) {
            return ae.merge(this[t] || (this[t] = {}), e)
        }
    };
    de._set("global", {
        defaultColor: "rgba(0,0,0,0.1)",
        defaultFontColor: "#666",
        defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
        defaultFontSize: 12,
        defaultFontStyle: "normal",
        defaultLineHeight: 1.2,
        showLines: !0
    });
    var K = de,
        oe = ae.valueOrDefault;

    function Qe(t) {
        return !t || ae.isNullOrUndef(t.size) || ae.isNullOrUndef(t.family) ? null : (t.style ? t.style + " " : "") + (t.weight ? t.weight + " " : "") + t.size + "px " + t.family
    }
    var St = {
            toLineHeight: function(t, e) {
                var r = ("" + t).match(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/);
                if (!r || r[1] === "normal") return 1.2 * e;
                switch (t = +r[2], r[3]) {
                    case "px":
                        return t;
                    case "%":
                        t /= 100
                }
                return e * t
            },
            toPadding: function(t) {
                var e, r, a, s;
                return ae.isObject(t) ? (e = +t.top || 0, r = +t.right || 0, a = +t.bottom || 0, s = +t.left || 0) : e = r = a = s = +t || 0, {
                    top: e,
                    right: r,
                    bottom: a,
                    left: s,
                    height: e + a,
                    width: s + r
                }
            },
            _parseFont: function(t) {
                var e = K.global,
                    r = oe(t.fontSize, e.defaultFontSize),
                    a = {
                        family: oe(t.fontFamily, e.defaultFontFamily),
                        lineHeight: ae.options.toLineHeight(oe(t.lineHeight, e.defaultLineHeight), r),
                        size: r,
                        style: oe(t.fontStyle, e.defaultFontStyle),
                        weight: null,
                        string: ""
                    };
                return a.string = Qe(a), a
            },
            resolve: function(t, e, r, a) {
                var s, c, u, m = !0;
                for (s = 0, c = t.length; s < c; ++s)
                    if ((u = t[s]) !== void 0 && (e !== void 0 && typeof u == "function" && (u = u(e), m = !1), r !== void 0 && ae.isArray(u) && (u = u[r], m = !1), u !== void 0)) return a && !m && (a.cacheable = !1), u
            }
        },
        ee = {
            _factorize: function(t) {
                var e, r = [],
                    a = Math.sqrt(t);
                for (e = 1; e < a; e++) t % e == 0 && (r.push(e), r.push(t / e));
                return a === (0 | a) && r.push(a), r.sort(function(s, c) {
                    return s - c
                }).pop(), r
            },
            log10: Math.log10 || function(t) {
                var e = Math.log(t) * Math.LOG10E,
                    r = Math.round(e);
                return t === Math.pow(10, r) ? r : e
            }
        },
        Oe = ee;
    ae.log10 = ee.log10;
    var jn = function(t, e) {
            return {
                x: function(r) {
                    return t + t + e - r
                },
                setWidth: function(r) {
                    e = r
                },
                textAlign: function(r) {
                    return r === "center" ? r : r === "right" ? "left" : "right"
                },
                xPlus: function(r, a) {
                    return r - a
                },
                leftForLtr: function(r, a) {
                    return r - a
                }
            }
        },
        Ln = function() {
            return {
                x: function(t) {
                    return t
                },
                setWidth: function(t) {},
                textAlign: function(t) {
                    return t
                },
                xPlus: function(t, e) {
                    return t + e
                },
                leftForLtr: function(t, e) {
                    return t
                }
            }
        },
        Mn = function(t, e, r) {
            return t ? jn(e, r) : Ln()
        },
        x = ae,
        ni = Ke,
        ri = Qt,
        ii = St,
        ai = Oe,
        oi = {
            getRtlAdapter: Mn,
            overrideTextDirection: function(t, e) {
                var r, a;
                e !== "ltr" && e !== "rtl" || (a = [(r = t.canvas.style).getPropertyValue("direction"), r.getPropertyPriority("direction")], r.setProperty("direction", e, "important"), t.prevTextDirection = a)
            },
            restoreTextDirection: function(t) {
                var e = t.prevTextDirection;
                e !== void 0 && (delete t.prevTextDirection, t.canvas.style.setProperty("direction", e[0], e[1]))
            }
        };

    function si(t, e, r, a) {
        var s, c, u, m, d, g, y, b, _, P = Object.keys(r);
        for (s = 0, c = P.length; s < c; ++s)
            if (g = r[u = P[s]], e.hasOwnProperty(u) || (e[u] = g), (m = e[u]) !== g && u[0] !== "_") {
                if (t.hasOwnProperty(u) || (t[u] = m), (y = typeof g) == typeof(d = t[u])) {
                    if (y === "string") {
                        if ((b = be(d)).valid && (_ = be(g)).valid) {
                            e[u] = _.mix(b, a).rgbString();
                            continue
                        }
                    } else if (x.isFinite(d) && x.isFinite(g)) {
                        e[u] = d + (g - d) * a;
                        continue
                    }
                }
                e[u] = g
            }
    }
    x.easing = ni, x.canvas = ri, x.options = ii, x.math = ai, x.rtl = oi;
    var Fn = function(t) {
        x.extend(this, t), this.initialize.apply(this, arguments)
    };
    x.extend(Fn.prototype, {
        _type: void 0,
        initialize: function() {
            this.hidden = !1
        },
        pivot: function() {
            var t = this;
            return t._view || (t._view = x.extend({}, t._model)), t._start = {}, t
        },
        transition: function(t) {
            var e = this,
                r = e._model,
                a = e._start,
                s = e._view;
            return r && t !== 1 ? (s || (s = e._view = {}), a || (a = e._start = {}), si(a, s, r, t), e) : (e._view = x.extend({}, r), e._start = null, e)
        },
        tooltipPosition: function() {
            return {
                x: this._model.x,
                y: this._model.y
            }
        },
        hasValue: function() {
            return x.isNumber(this._model.x) && x.isNumber(this._model.y)
        }
    }), Fn.extend = x.inherits;
    var Ae = Fn,
        Mr = Ae.extend({
            chart: null,
            currentStep: 0,
            numSteps: 60,
            easing: "",
            render: null,
            onAnimationProgress: null,
            onAnimationComplete: null
        }),
        Wn = Mr;
    Object.defineProperty(Mr.prototype, "animationObject", {
        get: function() {
            return this
        }
    }), Object.defineProperty(Mr.prototype, "chartInstance", {
        get: function() {
            return this.chart
        },
        set: function(t) {
            this.chart = t
        }
    }), K._set("global", {
        animation: {
            duration: 1e3,
            easing: "easeOutQuart",
            onProgress: x.noop,
            onComplete: x.noop
        }
    });
    var rr = {
            animations: [],
            request: null,
            addAnimation: function(t, e, r, a) {
                var s, c, u = this.animations;
                for (e.chart = t, e.startTime = Date.now(), e.duration = r, a || (t.animating = !0), s = 0, c = u.length; s < c; ++s)
                    if (u[s].chart === t) return void(u[s] = e);
                u.push(e), u.length === 1 && this.requestAnimationFrame()
            },
            cancelAnimation: function(t) {
                var e = x.findIndex(this.animations, function(r) {
                    return r.chart === t
                });
                e !== -1 && (this.animations.splice(e, 1), t.animating = !1)
            },
            requestAnimationFrame: function() {
                var t = this;
                t.request === null && (t.request = x.requestAnimFrame.call(window, function() {
                    t.request = null, t.startDigest()
                }))
            },
            startDigest: function() {
                var t = this;
                t.advance(), t.animations.length > 0 && t.requestAnimationFrame()
            },
            advance: function() {
                for (var t, e, r, a, s = this.animations, c = 0; c < s.length;) e = (t = s[c]).chart, r = t.numSteps, a = Math.floor((Date.now() - t.startTime) / t.duration * r) + 1, t.currentStep = Math.min(a, r), x.callback(t.render, [e, t], e), x.callback(t.onAnimationProgress, [t], e), t.currentStep >= r ? (x.callback(t.onAnimationComplete, [t], e), e.animating = !1, s.splice(c, 1)) : ++c
            }
        },
        In = x.options.resolve,
        Ye = ["push", "pop", "shift", "splice", "unshift"];

    function oa(t, e) {
        t._chartjs ? t._chartjs.listeners.push(e) : (Object.defineProperty(t, "_chartjs", {
            configurable: !0,
            enumerable: !1,
            value: {
                listeners: [e]
            }
        }), Ye.forEach(function(r) {
            var a = "onData" + r.charAt(0).toUpperCase() + r.slice(1),
                s = t[r];
            Object.defineProperty(t, r, {
                configurable: !0,
                enumerable: !1,
                value: function() {
                    var c = Array.prototype.slice.call(arguments),
                        u = s.apply(this, c);
                    return x.each(t._chartjs.listeners, function(m) {
                        typeof m[a] == "function" && m[a].apply(m, c)
                    }), u
                }
            })
        }))
    }

    function li(t, e) {
        var r = t._chartjs;
        if (r) {
            var a = r.listeners,
                s = a.indexOf(e);
            s !== -1 && a.splice(s, 1), a.length > 0 || (Ye.forEach(function(c) {
                delete t[c]
            }), delete t._chartjs)
        }
    }
    var ir = function(t, e) {
        this.initialize(t, e)
    };
    x.extend(ir.prototype, {
        datasetElementType: null,
        dataElementType: null,
        _datasetElementOptions: ["backgroundColor", "borderCapStyle", "borderColor", "borderDash", "borderDashOffset", "borderJoinStyle", "borderWidth"],
        _dataElementOptions: ["backgroundColor", "borderColor", "borderWidth", "pointStyle"],
        initialize: function(t, e) {
            var r = this;
            r.chart = t, r.index = e, r.linkScales(), r.addElements(), r._type = r.getMeta().type
        },
        updateIndex: function(t) {
            this.index = t
        },
        linkScales: function() {
            var t = this,
                e = t.getMeta(),
                r = t.chart,
                a = r.scales,
                s = t.getDataset(),
                c = r.options.scales;
            e.xAxisID !== null && e.xAxisID in a && !s.xAxisID || (e.xAxisID = s.xAxisID || c.xAxes[0].id), e.yAxisID !== null && e.yAxisID in a && !s.yAxisID || (e.yAxisID = s.yAxisID || c.yAxes[0].id)
        },
        getDataset: function() {
            return this.chart.data.datasets[this.index]
        },
        getMeta: function() {
            return this.chart.getDatasetMeta(this.index)
        },
        getScaleForId: function(t) {
            return this.chart.scales[t]
        },
        _getValueScaleId: function() {
            return this.getMeta().yAxisID
        },
        _getIndexScaleId: function() {
            return this.getMeta().xAxisID
        },
        _getValueScale: function() {
            return this.getScaleForId(this._getValueScaleId())
        },
        _getIndexScale: function() {
            return this.getScaleForId(this._getIndexScaleId())
        },
        reset: function() {
            this._update(!0)
        },
        destroy: function() {
            this._data && li(this._data, this)
        },
        createMetaDataset: function() {
            var t = this,
                e = t.datasetElementType;
            return e && new e({
                _chart: t.chart,
                _datasetIndex: t.index
            })
        },
        createMetaData: function(t) {
            var e = this,
                r = e.dataElementType;
            return r && new r({
                _chart: e.chart,
                _datasetIndex: e.index,
                _index: t
            })
        },
        addElements: function() {
            var t, e, r = this,
                a = r.getMeta(),
                s = r.getDataset().data || [],
                c = a.data;
            for (t = 0, e = s.length; t < e; ++t) c[t] = c[t] || r.createMetaData(t);
            a.dataset = a.dataset || r.createMetaDataset()
        },
        addElementAndReset: function(t) {
            var e = this.createMetaData(t);
            this.getMeta().data.splice(t, 0, e), this.updateElement(e, t, !0)
        },
        buildOrUpdateElements: function() {
            var t = this,
                e = t.getDataset(),
                r = e.data || (e.data = []);
            t._data !== r && (t._data && li(t._data, t), r && Object.isExtensible(r) && oa(r, t), t._data = r), t.resyncElements()
        },
        _configure: function() {
            var t = this;
            t._config = x.merge(Object.create(null), [t.chart.options.datasets[t._type], t.getDataset()], {
                merger: function(e, r, a) {
                    e !== "_meta" && e !== "data" && x._merger(e, r, a)
                }
            })
        },
        _update: function(t) {
            var e = this;
            e._configure(), e._cachedDataOpts = null, e.update(t)
        },
        update: x.noop,
        transition: function(t) {
            for (var e = this.getMeta(), r = e.data || [], a = r.length, s = 0; s < a; ++s) r[s].transition(t);
            e.dataset && e.dataset.transition(t)
        },
        draw: function() {
            var t = this.getMeta(),
                e = t.data || [],
                r = e.length,
                a = 0;
            for (t.dataset && t.dataset.draw(); a < r; ++a) e[a].draw()
        },
        getStyle: function(t) {
            var e, r = this,
                a = r.getMeta(),
                s = a.dataset;
            return r._configure(), s && t === void 0 ? e = r._resolveDatasetElementOptions(s || {}) : (t = t || 0, e = r._resolveDataElementOptions(a.data[t] || {}, t)), e.fill !== !1 && e.fill !== null || (e.backgroundColor = e.borderColor), e
        },
        _resolveDatasetElementOptions: function(t, e) {
            var r, a, s, c, u = this,
                m = u.chart,
                d = u._config,
                g = t.custom || {},
                y = m.options.elements[u.datasetElementType.prototype._type] || {},
                b = u._datasetElementOptions,
                _ = {},
                P = {
                    chart: m,
                    dataset: u.getDataset(),
                    datasetIndex: u.index,
                    hover: e
                };
            for (r = 0, a = b.length; r < a; ++r) s = b[r], c = e ? "hover" + s.charAt(0).toUpperCase() + s.slice(1) : s, _[s] = In([g[c], d[c], y[c]], P);
            return _
        },
        _resolveDataElementOptions: function(t, e) {
            var r = this,
                a = t && t.custom,
                s = r._cachedDataOpts;
            if (s && !a) return s;
            var c, u, m, d, g = r.chart,
                y = r._config,
                b = g.options.elements[r.dataElementType.prototype._type] || {},
                _ = r._dataElementOptions,
                P = {},
                D = {
                    chart: g,
                    dataIndex: e,
                    dataset: r.getDataset(),
                    datasetIndex: r.index
                },
                R = {
                    cacheable: !a
                };
            if (a = a || {}, x.isArray(_))
                for (u = 0, m = _.length; u < m; ++u) P[d = _[u]] = In([a[d], y[d], b[d]], D, e, R);
            else
                for (u = 0, m = (c = Object.keys(_)).length; u < m; ++u) P[d = c[u]] = In([a[d], y[_[d]], y[d], b[d]], D, e, R);
            return R.cacheable && (r._cachedDataOpts = Object.freeze(P)), P
        },
        removeHoverStyle: function(t) {
            x.merge(t._model, t.$previousStyle || {}), delete t.$previousStyle
        },
        setHoverStyle: function(t) {
            var e = this.chart.data.datasets[t._datasetIndex],
                r = t._index,
                a = t.custom || {},
                s = t._model,
                c = x.getHoverColor;
            t.$previousStyle = {
                backgroundColor: s.backgroundColor,
                borderColor: s.borderColor,
                borderWidth: s.borderWidth
            }, s.backgroundColor = In([a.hoverBackgroundColor, e.hoverBackgroundColor, c(s.backgroundColor)], void 0, r), s.borderColor = In([a.hoverBorderColor, e.hoverBorderColor, c(s.borderColor)], void 0, r), s.borderWidth = In([a.hoverBorderWidth, e.hoverBorderWidth, s.borderWidth], void 0, r)
        },
        _removeDatasetHoverStyle: function() {
            var t = this.getMeta().dataset;
            t && this.removeHoverStyle(t)
        },
        _setDatasetHoverStyle: function() {
            var t, e, r, a, s, c, u = this.getMeta().dataset,
                m = {};
            if (u) {
                for (c = u._model, s = this._resolveDatasetElementOptions(u, !0), t = 0, e = (a = Object.keys(s)).length; t < e; ++t) m[r = a[t]] = c[r], c[r] = s[r];
                u.$previousStyle = m
            }
        },
        resyncElements: function() {
            var t = this,
                e = t.getMeta(),
                r = t.getDataset().data,
                a = e.data.length,
                s = r.length;
            s < a ? e.data.splice(s, a - s) : s > a && t.insertElements(a, s - a)
        },
        insertElements: function(t, e) {
            for (var r = 0; r < e; ++r) this.addElementAndReset(t + r)
        },
        onDataPush: function() {
            var t = arguments.length;
            this.insertElements(this.getDataset().data.length - t, t)
        },
        onDataPop: function() {
            this.getMeta().data.pop()
        },
        onDataShift: function() {
            this.getMeta().data.shift()
        },
        onDataSplice: function(t, e) {
            this.getMeta().data.splice(t, e), this.insertElements(t, arguments.length - 2)
        },
        onDataUnshift: function() {
            this.insertElements(0, arguments.length)
        }
    }), ir.extend = x.inherits;
    var we = ir,
        Re = 2 * Math.PI;

    function ci(t, e) {
        var r = e.startAngle,
            a = e.endAngle,
            s = e.pixelMargin,
            c = s / e.outerRadius,
            u = e.x,
            m = e.y;
        t.beginPath(), t.arc(u, m, e.outerRadius, r - c, a + c), e.innerRadius > s ? (c = s / e.innerRadius, t.arc(u, m, e.innerRadius - s, a + c, r - c, !0)) : t.arc(u, m, s, a + Math.PI / 2, r - Math.PI / 2), t.closePath(), t.clip()
    }

    function sa(t, e, r, a) {
        var s, c = r.endAngle;
        for (a && (r.endAngle = r.startAngle + Re, ci(t, r), r.endAngle = c, r.endAngle === r.startAngle && r.fullCircles && (r.endAngle += Re, r.fullCircles--)), t.beginPath(), t.arc(r.x, r.y, r.innerRadius, r.startAngle + Re, r.startAngle, !0), s = 0; s < r.fullCircles; ++s) t.stroke();
        for (t.beginPath(), t.arc(r.x, r.y, e.outerRadius, r.startAngle, r.startAngle + Re), s = 0; s < r.fullCircles; ++s) t.stroke()
    }

    function la(t, e, r) {
        var a = e.borderAlign === "inner";
        a ? (t.lineWidth = 2 * e.borderWidth, t.lineJoin = "round") : (t.lineWidth = e.borderWidth, t.lineJoin = "bevel"), r.fullCircles && sa(t, e, r, a), a && ci(t, r), t.beginPath(), t.arc(r.x, r.y, e.outerRadius, r.startAngle, r.endAngle), t.arc(r.x, r.y, r.innerRadius, r.endAngle, r.startAngle, !0), t.closePath(), t.stroke()
    }
    K._set("global", {
        elements: {
            arc: {
                backgroundColor: K.global.defaultColor,
                borderColor: "#fff",
                borderWidth: 2,
                borderAlign: "center"
            }
        }
    });
    var ca = Ae.extend({
            _type: "arc",
            inLabelRange: function(t) {
                var e = this._view;
                return !!e && Math.pow(t - e.x, 2) < Math.pow(e.radius + e.hoverRadius, 2)
            },
            inRange: function(t, e) {
                var r = this._view;
                if (r) {
                    for (var a = x.getAngleFromPoint(r, {
                            x: t,
                            y: e
                        }), s = a.angle, c = a.distance, u = r.startAngle, m = r.endAngle; m < u;) m += Re;
                    for (; s > m;) s -= Re;
                    for (; s < u;) s += Re;
                    var d = s >= u && s <= m,
                        g = c >= r.innerRadius && c <= r.outerRadius;
                    return d && g
                }
                return !1
            },
            getCenterPoint: function() {
                var t = this._view,
                    e = (t.startAngle + t.endAngle) / 2,
                    r = (t.innerRadius + t.outerRadius) / 2;
                return {
                    x: t.x + Math.cos(e) * r,
                    y: t.y + Math.sin(e) * r
                }
            },
            getArea: function() {
                var t = this._view;
                return Math.PI * ((t.endAngle - t.startAngle) / (2 * Math.PI)) * (Math.pow(t.outerRadius, 2) - Math.pow(t.innerRadius, 2))
            },
            tooltipPosition: function() {
                var t = this._view,
                    e = t.startAngle + (t.endAngle - t.startAngle) / 2,
                    r = (t.outerRadius - t.innerRadius) / 2 + t.innerRadius;
                return {
                    x: t.x + Math.cos(e) * r,
                    y: t.y + Math.sin(e) * r
                }
            },
            draw: function() {
                var t, e = this._chart.ctx,
                    r = this._view,
                    a = r.borderAlign === "inner" ? .33 : 0,
                    s = {
                        x: r.x,
                        y: r.y,
                        innerRadius: r.innerRadius,
                        outerRadius: Math.max(r.outerRadius - a, 0),
                        pixelMargin: a,
                        startAngle: r.startAngle,
                        endAngle: r.endAngle,
                        fullCircles: Math.floor(r.circumference / Re)
                    };
                if (e.save(), e.fillStyle = r.backgroundColor, e.strokeStyle = r.borderColor, s.fullCircles) {
                    for (s.endAngle = s.startAngle + Re, e.beginPath(), e.arc(s.x, s.y, s.outerRadius, s.startAngle, s.endAngle), e.arc(s.x, s.y, s.innerRadius, s.endAngle, s.startAngle, !0), e.closePath(), t = 0; t < s.fullCircles; ++t) e.fill();
                    s.endAngle = s.startAngle + r.circumference % Re
                }
                e.beginPath(), e.arc(s.x, s.y, s.outerRadius, s.startAngle, s.endAngle), e.arc(s.x, s.y, s.innerRadius, s.endAngle, s.startAngle, !0), e.closePath(), e.fill(), r.borderWidth && la(e, r, s), e.restore()
            }
        }),
        ui = x.valueOrDefault,
        di = K.global.defaultColor;
    K._set("global", {
        elements: {
            line: {
                tension: .4,
                backgroundColor: di,
                borderWidth: 3,
                borderColor: di,
                borderCapStyle: "butt",
                borderDash: [],
                borderDashOffset: 0,
                borderJoinStyle: "miter",
                capBezierPoints: !0,
                fill: !0
            }
        }
    });
    var ua = Ae.extend({
            _type: "line",
            draw: function() {
                var t, e, r, a = this,
                    s = a._view,
                    c = a._chart.ctx,
                    u = s.spanGaps,
                    m = a._children.slice(),
                    d = K.global,
                    g = d.elements.line,
                    y = -1,
                    b = a._loop;
                if (m.length) {
                    if (a._loop) {
                        for (t = 0; t < m.length; ++t)
                            if (e = x.previousItem(m, t), !m[t]._view.skip && e._view.skip) {
                                m = m.slice(t).concat(m.slice(0, t)), b = u;
                                break
                            }
                        b && m.push(m[0])
                    }
                    for (c.save(), c.lineCap = s.borderCapStyle || g.borderCapStyle, c.setLineDash && c.setLineDash(s.borderDash || g.borderDash), c.lineDashOffset = ui(s.borderDashOffset, g.borderDashOffset), c.lineJoin = s.borderJoinStyle || g.borderJoinStyle, c.lineWidth = ui(s.borderWidth, g.borderWidth), c.strokeStyle = s.borderColor || d.defaultColor, c.beginPath(), (r = m[0]._view).skip || (c.moveTo(r.x, r.y), y = 0), t = 1; t < m.length; ++t) r = m[t]._view, e = y === -1 ? x.previousItem(m, t) : m[y], r.skip || (y !== t - 1 && !u || y === -1 ? c.moveTo(r.x, r.y) : x.canvas.lineTo(c, e._view, r), y = t);
                    b && c.closePath(), c.stroke(), c.restore()
                }
            }
        }),
        da = x.valueOrDefault,
        Ir = K.global.defaultColor;

    function hi(t) {
        var e = this._view;
        return !!e && Math.abs(t - e.x) < e.radius + e.hitRadius
    }

    function ha(t) {
        var e = this._view;
        return !!e && Math.abs(t - e.y) < e.radius + e.hitRadius
    }
    K._set("global", {
        elements: {
            point: {
                radius: 3,
                pointStyle: "circle",
                backgroundColor: Ir,
                borderColor: Ir,
                borderWidth: 1,
                hitRadius: 1,
                hoverRadius: 4,
                hoverBorderWidth: 1
            }
        }
    });
    var fa = Ae.extend({
            _type: "point",
            inRange: function(t, e) {
                var r = this._view;
                return !!r && Math.pow(t - r.x, 2) + Math.pow(e - r.y, 2) < Math.pow(r.hitRadius + r.radius, 2)
            },
            inLabelRange: hi,
            inXRange: hi,
            inYRange: ha,
            getCenterPoint: function() {
                var t = this._view;
                return {
                    x: t.x,
                    y: t.y
                }
            },
            getArea: function() {
                return Math.PI * Math.pow(this._view.radius, 2)
            },
            tooltipPosition: function() {
                var t = this._view;
                return {
                    x: t.x,
                    y: t.y,
                    padding: t.radius + t.borderWidth
                }
            },
            draw: function(t) {
                var e = this._view,
                    r = this._chart.ctx,
                    a = e.pointStyle,
                    s = e.rotation,
                    c = e.radius,
                    u = e.x,
                    m = e.y,
                    d = K.global,
                    g = d.defaultColor;
                e.skip || (t === void 0 || x.canvas._isPointInArea(e, t)) && (r.strokeStyle = e.borderColor || g, r.lineWidth = da(e.borderWidth, d.elements.point.borderWidth), r.fillStyle = e.backgroundColor || g, x.canvas.drawPoint(r, a, c, u, m, s))
            }
        }),
        fi = K.global.defaultColor;

    function ar(t) {
        return t && t.width !== void 0
    }

    function mi(t) {
        var e, r, a, s, c;
        return ar(t) ? (c = t.width / 2, e = t.x - c, r = t.x + c, a = Math.min(t.y, t.base), s = Math.max(t.y, t.base)) : (c = t.height / 2, e = Math.min(t.x, t.base), r = Math.max(t.x, t.base), a = t.y - c, s = t.y + c), {
            left: e,
            top: a,
            right: r,
            bottom: s
        }
    }

    function gi(t, e, r) {
        return t === e ? r : t === r ? e : t
    }

    function ma(t) {
        var e = t.borderSkipped,
            r = {};
        return e && (t.horizontal ? t.base > t.x && (e = gi(e, "left", "right")) : t.base < t.y && (e = gi(e, "bottom", "top")), r[e] = !0), r
    }

    function ga(t, e, r) {
        var a, s, c, u, m = t.borderWidth,
            d = ma(t);
        return x.isObject(m) ? (a = +m.top || 0, s = +m.right || 0, c = +m.bottom || 0, u = +m.left || 0) : a = s = c = u = +m || 0, {
            t: d.top || a < 0 ? 0 : a > r ? r : a,
            r: d.right || s < 0 ? 0 : s > e ? e : s,
            b: d.bottom || c < 0 ? 0 : c > r ? r : c,
            l: d.left || u < 0 ? 0 : u > e ? e : u
        }
    }

    function pa(t) {
        var e = mi(t),
            r = e.right - e.left,
            a = e.bottom - e.top,
            s = ga(t, r / 2, a / 2);
        return {
            outer: {
                x: e.left,
                y: e.top,
                w: r,
                h: a
            },
            inner: {
                x: e.left + s.l,
                y: e.top + s.t,
                w: r - s.l - s.r,
                h: a - s.t - s.b
            }
        }
    }

    function zn(t, e, r) {
        var a = e === null,
            s = r === null,
            c = !(!t || a && s) && mi(t);
        return c && (a || e >= c.left && e <= c.right) && (s || r >= c.top && r <= c.bottom)
    }
    K._set("global", {
        elements: {
            rectangle: {
                backgroundColor: fi,
                borderColor: fi,
                borderSkipped: "bottom",
                borderWidth: 0
            }
        }
    });
    var ya = Ae.extend({
            _type: "rectangle",
            draw: function() {
                var t = this._chart.ctx,
                    e = this._view,
                    r = pa(e),
                    a = r.outer,
                    s = r.inner;
                t.fillStyle = e.backgroundColor, t.fillRect(a.x, a.y, a.w, a.h), a.w === s.w && a.h === s.h || (t.save(), t.beginPath(), t.rect(a.x, a.y, a.w, a.h), t.clip(), t.fillStyle = e.borderColor, t.rect(s.x, s.y, s.w, s.h), t.fill("evenodd"), t.restore())
            },
            height: function() {
                var t = this._view;
                return t.base - t.y
            },
            inRange: function(t, e) {
                return zn(this._view, t, e)
            },
            inLabelRange: function(t, e) {
                var r = this._view;
                return ar(r) ? zn(r, t, null) : zn(r, null, e)
            },
            inXRange: function(t) {
                return zn(this._view, t, null)
            },
            inYRange: function(t) {
                return zn(this._view, null, t)
            },
            getCenterPoint: function() {
                var t, e, r = this._view;
                return ar(r) ? (t = r.x, e = (r.y + r.base) / 2) : (t = (r.x + r.base) / 2, e = r.y), {
                    x: t,
                    y: e
                }
            },
            getArea: function() {
                var t = this._view;
                return ar(t) ? t.width * Math.abs(t.y - t.base) : t.height * Math.abs(t.x - t.base)
            },
            tooltipPosition: function() {
                var t = this._view;
                return {
                    x: t.x,
                    y: t.y
                }
            }
        }),
        he = {},
        va = ca,
        ba = ua,
        pi = fa,
        Yn = ya;
    he.Arc = va, he.Line = ba, he.Point = pi, he.Rectangle = Yn;
    var Cn = x._deprecated,
        Me = x.valueOrDefault;

    function xa(t, e) {
        var r, a, s, c, u = t._length;
        for (s = 1, c = e.length; s < c; ++s) u = Math.min(u, Math.abs(e[s] - e[s - 1]));
        for (s = 0, c = t.getTicks().length; s < c; ++s) a = t.getPixelForTick(s), u = s > 0 ? Math.min(u, Math.abs(a - r)) : u, r = a;
        return u
    }

    function or(t, e, r) {
        var a, s, c = r.barThickness,
            u = e.stackCount,
            m = e.pixels[t],
            d = x.isNullOrUndef(c) ? xa(e.scale, e.pixels) : -1;
        return x.isNullOrUndef(c) ? (a = d * r.categoryPercentage, s = r.barPercentage) : (a = c * u, s = 1), {
            chunk: a / u,
            ratio: s,
            start: m - a / 2
        }
    }

    function Cr(t, e, r) {
        var a, s = e.pixels,
            c = s[t],
            u = t > 0 ? s[t - 1] : null,
            m = t < s.length - 1 ? s[t + 1] : null,
            d = r.categoryPercentage;
        return u === null && (u = c - (m === null ? e.end - e.start : m - c)), m === null && (m = c + c - u), a = c - (c - Math.min(u, m)) / 2 * d, {
            chunk: Math.abs(m - u) / 2 * d / e.stackCount,
            ratio: r.barPercentage,
            start: a
        }
    }
    K._set("bar", {
        hover: {
            mode: "label"
        },
        scales: {
            xAxes: [{
                type: "category",
                offset: !0,
                gridLines: {
                    offsetGridLines: !0
                }
            }],
            yAxes: [{
                type: "linear"
            }]
        }
    }), K._set("global", {
        datasets: {
            bar: {
                categoryPercentage: .8,
                barPercentage: .9
            }
        }
    });
    var yi = we.extend({
            dataElementType: he.Rectangle,
            _dataElementOptions: ["backgroundColor", "borderColor", "borderSkipped", "borderWidth", "barPercentage", "barThickness", "categoryPercentage", "maxBarThickness", "minBarLength"],
            initialize: function() {
                var t, e, r = this;
                we.prototype.initialize.apply(r, arguments), (t = r.getMeta()).stack = r.getDataset().stack, t.bar = !0, e = r._getIndexScale().options, Cn("bar chart", e.barPercentage, "scales.[x/y]Axes.barPercentage", "dataset.barPercentage"), Cn("bar chart", e.barThickness, "scales.[x/y]Axes.barThickness", "dataset.barThickness"), Cn("bar chart", e.categoryPercentage, "scales.[x/y]Axes.categoryPercentage", "dataset.categoryPercentage"), Cn("bar chart", r._getValueScale().options.minBarLength, "scales.[x/y]Axes.minBarLength", "dataset.minBarLength"), Cn("bar chart", e.maxBarThickness, "scales.[x/y]Axes.maxBarThickness", "dataset.maxBarThickness")
            },
            update: function(t) {
                var e, r, a = this,
                    s = a.getMeta().data;
                for (a._ruler = a.getRuler(), e = 0, r = s.length; e < r; ++e) a.updateElement(s[e], e, t)
            },
            updateElement: function(t, e, r) {
                var a = this,
                    s = a.getMeta(),
                    c = a.getDataset(),
                    u = a._resolveDataElementOptions(t, e);
                t._xScale = a.getScaleForId(s.xAxisID), t._yScale = a.getScaleForId(s.yAxisID), t._datasetIndex = a.index, t._index = e, t._model = {
                    backgroundColor: u.backgroundColor,
                    borderColor: u.borderColor,
                    borderSkipped: u.borderSkipped,
                    borderWidth: u.borderWidth,
                    datasetLabel: c.label,
                    label: a.chart.data.labels[e]
                }, x.isArray(c.data[e]) && (t._model.borderSkipped = null), a._updateElementGeometry(t, e, r, u), t.pivot()
            },
            _updateElementGeometry: function(t, e, r, a) {
                var s = this,
                    c = t._model,
                    u = s._getValueScale(),
                    m = u.getBasePixel(),
                    d = u.isHorizontal(),
                    g = s._ruler || s.getRuler(),
                    y = s.calculateBarValuePixels(s.index, e, a),
                    b = s.calculateBarIndexPixels(s.index, e, g, a);
                c.horizontal = d, c.base = r ? m : y.base, c.x = d ? r ? m : y.head : b.center, c.y = d ? b.center : r ? m : y.head, c.height = d ? b.size : void 0, c.width = d ? void 0 : b.size
            },
            _getStacks: function(t) {
                var e, r, a = this,
                    s = a._getIndexScale(),
                    c = s._getMatchingVisibleMetas(a._type),
                    u = s.options.stacked,
                    m = c.length,
                    d = [];
                for (e = 0; e < m && (r = c[e], (u === !1 || d.indexOf(r.stack) === -1 || u === void 0 && r.stack === void 0) && d.push(r.stack), r.index !== t); ++e);
                return d
            },
            getStackCount: function() {
                return this._getStacks().length
            },
            getStackIndex: function(t, e) {
                var r = this._getStacks(t),
                    a = e !== void 0 ? r.indexOf(e) : -1;
                return a === -1 ? r.length - 1 : a
            },
            getRuler: function() {
                var t, e, r = this,
                    a = r._getIndexScale(),
                    s = [];
                for (t = 0, e = r.getMeta().data.length; t < e; ++t) s.push(a.getPixelForValue(null, t, r.index));
                return {
                    pixels: s,
                    start: a._startPixel,
                    end: a._endPixel,
                    stackCount: r.getStackCount(),
                    scale: a
                }
            },
            calculateBarValuePixels: function(t, e, r) {
                var a, s, c, u, m, d, g, y = this,
                    b = y.chart,
                    _ = y._getValueScale(),
                    P = _.isHorizontal(),
                    D = b.data.datasets,
                    R = _._getMatchingVisibleMetas(y._type),
                    E = _._parseValue(D[t].data[e]),
                    q = r.minBarLength,
                    Q = _.options.stacked,
                    lt = y.getMeta().stack,
                    pt = E.start === void 0 ? 0 : E.max >= 0 && E.min >= 0 ? E.min : E.max,
                    mt = E.start === void 0 ? E.end : E.max >= 0 && E.min >= 0 ? E.max - E.min : E.min - E.max,
                    At = R.length;
                if (Q || Q === void 0 && lt !== void 0)
                    for (a = 0; a < At && (s = R[a]).index !== t; ++a) s.stack === lt && (c = (g = _._parseValue(D[s.index].data[e])).start === void 0 ? g.end : g.min >= 0 && g.max >= 0 ? g.max : g.min, (E.min < 0 && c < 0 || E.max >= 0 && c > 0) && (pt += c));
                return u = _.getPixelForValue(pt), d = (m = _.getPixelForValue(pt + mt)) - u, q !== void 0 && Math.abs(d) < q && (d = q, m = mt >= 0 && !P || mt < 0 && P ? u - q : u + q), {
                    size: d,
                    base: u,
                    head: m,
                    center: m + d / 2
                }
            },
            calculateBarIndexPixels: function(t, e, r, a) {
                var s = this,
                    c = a.barThickness === "flex" ? Cr(e, r, a) : or(e, r, a),
                    u = s.getStackIndex(t, s.getMeta().stack),
                    m = c.start + c.chunk * u + c.chunk / 2,
                    d = Math.min(Me(a.maxBarThickness, 1 / 0), c.chunk * c.ratio);
                return {
                    base: m - d / 2,
                    head: m + d / 2,
                    center: m,
                    size: d
                }
            },
            draw: function() {
                var t = this,
                    e = t.chart,
                    r = t._getValueScale(),
                    a = t.getMeta().data,
                    s = t.getDataset(),
                    c = a.length,
                    u = 0;
                for (x.canvas.clipArea(e.ctx, e.chartArea); u < c; ++u) {
                    var m = r._parseValue(s.data[u]);
                    isNaN(m.min) || isNaN(m.max) || a[u].draw()
                }
                x.canvas.unclipArea(e.ctx)
            },
            _resolveDataElementOptions: function() {
                var t = this,
                    e = x.extend({}, we.prototype._resolveDataElementOptions.apply(t, arguments)),
                    r = t._getIndexScale().options,
                    a = t._getValueScale().options;
                return e.barPercentage = Me(r.barPercentage, e.barPercentage), e.barThickness = Me(r.barThickness, e.barThickness), e.categoryPercentage = Me(r.categoryPercentage, e.categoryPercentage), e.maxBarThickness = Me(r.maxBarThickness, e.maxBarThickness), e.minBarLength = Me(a.minBarLength, e.minBarLength), e
            }
        }),
        Pr = x.valueOrDefault,
        Tr = x.options.resolve;
    K._set("bubble", {
        hover: {
            mode: "single"
        },
        scales: {
            xAxes: [{
                type: "linear",
                position: "bottom",
                id: "x-axis-0"
            }],
            yAxes: [{
                type: "linear",
                position: "left",
                id: "y-axis-0"
            }]
        },
        tooltips: {
            callbacks: {
                title: function() {
                    return ""
                },
                label: function(t, e) {
                    var r = e.datasets[t.datasetIndex].label || "",
                        a = e.datasets[t.datasetIndex].data[t.index];
                    return r + ": (" + t.xLabel + ", " + t.yLabel + ", " + a.r + ")"
                }
            }
        }
    });
    var wa = we.extend({
            dataElementType: he.Point,
            _dataElementOptions: ["backgroundColor", "borderColor", "borderWidth", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth", "hoverRadius", "hitRadius", "pointStyle", "rotation"],
            update: function(t) {
                var e = this,
                    r = e.getMeta().data;
                x.each(r, function(a, s) {
                    e.updateElement(a, s, t)
                })
            },
            updateElement: function(t, e, r) {
                var a = this,
                    s = a.getMeta(),
                    c = t.custom || {},
                    u = a.getScaleForId(s.xAxisID),
                    m = a.getScaleForId(s.yAxisID),
                    d = a._resolveDataElementOptions(t, e),
                    g = a.getDataset().data[e],
                    y = a.index,
                    b = r ? u.getPixelForDecimal(.5) : u.getPixelForValue(typeof g == "object" ? g : NaN, e, y),
                    _ = r ? m.getBasePixel() : m.getPixelForValue(g, e, y);
                t._xScale = u, t._yScale = m, t._options = d, t._datasetIndex = y, t._index = e, t._model = {
                    backgroundColor: d.backgroundColor,
                    borderColor: d.borderColor,
                    borderWidth: d.borderWidth,
                    hitRadius: d.hitRadius,
                    pointStyle: d.pointStyle,
                    rotation: d.rotation,
                    radius: r ? 0 : d.radius,
                    skip: c.skip || isNaN(b) || isNaN(_),
                    x: b,
                    y: _
                }, t.pivot()
            },
            setHoverStyle: function(t) {
                var e = t._model,
                    r = t._options,
                    a = x.getHoverColor;
                t.$previousStyle = {
                    backgroundColor: e.backgroundColor,
                    borderColor: e.borderColor,
                    borderWidth: e.borderWidth,
                    radius: e.radius
                }, e.backgroundColor = Pr(r.hoverBackgroundColor, a(r.backgroundColor)), e.borderColor = Pr(r.hoverBorderColor, a(r.borderColor)), e.borderWidth = Pr(r.hoverBorderWidth, r.borderWidth), e.radius = r.radius + r.hoverRadius
            },
            _resolveDataElementOptions: function(t, e) {
                var r = this,
                    a = r.chart,
                    s = r.getDataset(),
                    c = t.custom || {},
                    u = s.data[e] || {},
                    m = we.prototype._resolveDataElementOptions.apply(r, arguments),
                    d = {
                        chart: a,
                        dataIndex: e,
                        dataset: s,
                        datasetIndex: r.index
                    };
                return r._cachedDataOpts === m && (m = x.extend({}, m)), m.radius = Tr([c.radius, u.r, r._config.radius, a.options.elements.point.radius], d, e), m
            }
        }),
        sr = x.valueOrDefault,
        w = Math.PI,
        M = 2 * w,
        I = w / 2;
    K._set("doughnut", {
        animation: {
            animateRotate: !0,
            animateScale: !1
        },
        hover: {
            mode: "single"
        },
        legendCallback: function(t) {
            var e, r, a, s = document.createElement("ul"),
                c = t.data,
                u = c.datasets,
                m = c.labels;
            if (s.setAttribute("class", t.id + "-legend"), u.length)
                for (e = 0, r = u[0].data.length; e < r; ++e)(a = s.appendChild(document.createElement("li"))).appendChild(document.createElement("span")).style.backgroundColor = u[0].backgroundColor[e], m[e] && a.appendChild(document.createTextNode(m[e]));
            return s.outerHTML
        },
        legend: {
            labels: {
                generateLabels: function(t) {
                    var e = t.data;
                    return e.labels.length && e.datasets.length ? e.labels.map(function(r, a) {
                        var s = t.getDatasetMeta(0),
                            c = s.controller.getStyle(a);
                        return {
                            text: r,
                            fillStyle: c.backgroundColor,
                            strokeStyle: c.borderColor,
                            lineWidth: c.borderWidth,
                            hidden: isNaN(e.datasets[0].data[a]) || s.data[a].hidden,
                            index: a
                        }
                    }) : []
                }
            },
            onClick: function(t, e) {
                var r, a, s, c = e.index,
                    u = this.chart;
                for (r = 0, a = (u.data.datasets || []).length; r < a; ++r)(s = u.getDatasetMeta(r)).data[c] && (s.data[c].hidden = !s.data[c].hidden);
                u.update()
            }
        },
        cutoutPercentage: 50,
        rotation: -I,
        circumference: M,
        tooltips: {
            callbacks: {
                title: function() {
                    return ""
                },
                label: function(t, e) {
                    var r = e.labels[t.index],
                        a = ": " + e.datasets[t.datasetIndex].data[t.index];
                    return x.isArray(r) ? (r = r.slice())[0] += a : r += a, r
                }
            }
        }
    });
    var O = we.extend({
        dataElementType: he.Arc,
        linkScales: x.noop,
        _dataElementOptions: ["backgroundColor", "borderColor", "borderWidth", "borderAlign", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth"],
        getRingIndex: function(t) {
            for (var e = 0, r = 0; r < t; ++r) this.chart.isDatasetVisible(r) && ++e;
            return e
        },
        update: function(t) {
            var e, r, a, s, c = this,
                u = c.chart,
                m = u.chartArea,
                d = u.options,
                g = 1,
                y = 1,
                b = 0,
                _ = 0,
                P = c.getMeta(),
                D = P.data,
                R = d.cutoutPercentage / 100 || 0,
                E = d.circumference,
                q = c._getRingWeight(c.index);
            if (E < M) {
                var Q = d.rotation % M,
                    lt = (Q += Q >= w ? -M : Q < -w ? M : 0) + E,
                    pt = Math.cos(Q),
                    mt = Math.sin(Q),
                    At = Math.cos(lt),
                    It = Math.sin(lt),
                    Lt = Q <= 0 && lt >= 0 || lt >= M,
                    qt = Q <= I && lt >= I || lt >= M + I,
                    pe = Q <= -I && lt >= -I || lt >= w + I,
                    ne = Q === -w || lt >= w ? -1 : Math.min(pt, pt * R, At, At * R),
                    re = pe ? -1 : Math.min(mt, mt * R, It, It * R),
                    ye = Lt ? 1 : Math.max(pt, pt * R, At, At * R),
                    Ue = qt ? 1 : Math.max(mt, mt * R, It, It * R);
                g = (ye - ne) / 2, y = (Ue - re) / 2, b = -(ye + ne) / 2, _ = -(Ue + re) / 2
            }
            for (a = 0, s = D.length; a < s; ++a) D[a]._options = c._resolveDataElementOptions(D[a], a);
            for (u.borderWidth = c.getMaxBorderWidth(), e = (m.right - m.left - u.borderWidth) / g, r = (m.bottom - m.top - u.borderWidth) / y, u.outerRadius = Math.max(Math.min(e, r) / 2, 0), u.innerRadius = Math.max(u.outerRadius * R, 0), u.radiusLength = (u.outerRadius - u.innerRadius) / (c._getVisibleDatasetWeightTotal() || 1), u.offsetX = b * u.outerRadius, u.offsetY = _ * u.outerRadius, P.total = c.calculateTotal(), c.outerRadius = u.outerRadius - u.radiusLength * c._getRingWeightOffset(c.index), c.innerRadius = Math.max(c.outerRadius - u.radiusLength * q, 0), a = 0, s = D.length; a < s; ++a) c.updateElement(D[a], a, t)
        },
        updateElement: function(t, e, r) {
            var a = this,
                s = a.chart,
                c = s.chartArea,
                u = s.options,
                m = u.animation,
                d = (c.left + c.right) / 2,
                g = (c.top + c.bottom) / 2,
                y = u.rotation,
                b = u.rotation,
                _ = a.getDataset(),
                P = r && m.animateRotate || t.hidden ? 0 : a.calculateCircumference(_.data[e]) * (u.circumference / M),
                D = r && m.animateScale ? 0 : a.innerRadius,
                R = r && m.animateScale ? 0 : a.outerRadius,
                E = t._options || {};
            x.extend(t, {
                _datasetIndex: a.index,
                _index: e,
                _model: {
                    backgroundColor: E.backgroundColor,
                    borderColor: E.borderColor,
                    borderWidth: E.borderWidth,
                    borderAlign: E.borderAlign,
                    x: d + s.offsetX,
                    y: g + s.offsetY,
                    startAngle: y,
                    endAngle: b,
                    circumference: P,
                    outerRadius: R,
                    innerRadius: D,
                    label: x.valueAtIndexOrDefault(_.label, e, s.data.labels[e])
                }
            });
            var q = t._model;
            r && m.animateRotate || (q.startAngle = e === 0 ? u.rotation : a.getMeta().data[e - 1]._model.endAngle, q.endAngle = q.startAngle + q.circumference), t.pivot()
        },
        calculateTotal: function() {
            var t, e = this.getDataset(),
                r = this.getMeta(),
                a = 0;
            return x.each(r.data, function(s, c) {
                t = e.data[c], isNaN(t) || s.hidden || (a += Math.abs(t))
            }), a
        },
        calculateCircumference: function(t) {
            var e = this.getMeta().total;
            return e > 0 && !isNaN(t) ? M * (Math.abs(t) / e) : 0
        },
        getMaxBorderWidth: function(t) {
            var e, r, a, s, c, u, m, d, g = this,
                y = 0,
                b = g.chart;
            if (!t) {
                for (e = 0, r = b.data.datasets.length; e < r; ++e)
                    if (b.isDatasetVisible(e)) {
                        t = (a = b.getDatasetMeta(e)).data, e !== g.index && (c = a.controller);
                        break
                    }
            }
            if (!t) return 0;
            for (e = 0, r = t.length; e < r; ++e) s = t[e], c ? (c._configure(), u = c._resolveDataElementOptions(s, e)) : u = s._options, u.borderAlign !== "inner" && (m = u.borderWidth, y = (d = u.hoverBorderWidth) > (y = m > y ? m : y) ? d : y);
            return y
        },
        setHoverStyle: function(t) {
            var e = t._model,
                r = t._options,
                a = x.getHoverColor;
            t.$previousStyle = {
                backgroundColor: e.backgroundColor,
                borderColor: e.borderColor,
                borderWidth: e.borderWidth
            }, e.backgroundColor = sr(r.hoverBackgroundColor, a(r.backgroundColor)), e.borderColor = sr(r.hoverBorderColor, a(r.borderColor)), e.borderWidth = sr(r.hoverBorderWidth, r.borderWidth)
        },
        _getRingWeightOffset: function(t) {
            for (var e = 0, r = 0; r < t; ++r) this.chart.isDatasetVisible(r) && (e += this._getRingWeight(r));
            return e
        },
        _getRingWeight: function(t) {
            return Math.max(sr(this.chart.data.datasets[t].weight, 1), 0)
        },
        _getVisibleDatasetWeightTotal: function() {
            return this._getRingWeightOffset(this.chart.data.datasets.length)
        }
    });
    K._set("horizontalBar", {
        hover: {
            mode: "index",
            axis: "y"
        },
        scales: {
            xAxes: [{
                type: "linear",
                position: "bottom"
            }],
            yAxes: [{
                type: "category",
                position: "left",
                offset: !0,
                gridLines: {
                    offsetGridLines: !0
                }
            }]
        },
        elements: {
            rectangle: {
                borderSkipped: "left"
            }
        },
        tooltips: {
            mode: "index",
            axis: "y"
        }
    }), K._set("global", {
        datasets: {
            horizontalBar: {
                categoryPercentage: .8,
                barPercentage: .9
            }
        }
    });
    var T = yi.extend({
            _getValueScaleId: function() {
                return this.getMeta().xAxisID
            },
            _getIndexScaleId: function() {
                return this.getMeta().yAxisID
            }
        }),
        A = x.valueOrDefault,
        F = x.options.resolve,
        V = x.canvas._isPointInArea;

    function H(t, e) {
        var r = t && t.options.ticks || {},
            a = r.reverse,
            s = r.min === void 0 ? e : 0,
            c = r.max === void 0 ? e : 0;
        return {
            start: a ? c : s,
            end: a ? s : c
        }
    }

    function G(t, e, r) {
        var a = r / 2,
            s = H(t, a),
            c = H(e, a);
        return {
            top: c.end,
            right: s.end,
            bottom: c.start,
            left: s.start
        }
    }

    function tt(t) {
        var e, r, a, s;
        return x.isObject(t) ? (e = t.top, r = t.right, a = t.bottom, s = t.left) : e = r = a = s = t, {
            top: e,
            right: r,
            bottom: a,
            left: s
        }
    }
    K._set("line", {
        showLines: !0,
        spanGaps: !1,
        hover: {
            mode: "label"
        },
        scales: {
            xAxes: [{
                type: "category",
                id: "x-axis-0"
            }],
            yAxes: [{
                type: "linear",
                id: "y-axis-0"
            }]
        }
    });
    var ot = we.extend({
            datasetElementType: he.Line,
            dataElementType: he.Point,
            _datasetElementOptions: ["backgroundColor", "borderCapStyle", "borderColor", "borderDash", "borderDashOffset", "borderJoinStyle", "borderWidth", "cubicInterpolationMode", "fill"],
            _dataElementOptions: {
                backgroundColor: "pointBackgroundColor",
                borderColor: "pointBorderColor",
                borderWidth: "pointBorderWidth",
                hitRadius: "pointHitRadius",
                hoverBackgroundColor: "pointHoverBackgroundColor",
                hoverBorderColor: "pointHoverBorderColor",
                hoverBorderWidth: "pointHoverBorderWidth",
                hoverRadius: "pointHoverRadius",
                pointStyle: "pointStyle",
                radius: "pointRadius",
                rotation: "pointRotation"
            },
            update: function(t) {
                var e, r, a = this,
                    s = a.getMeta(),
                    c = s.dataset,
                    u = s.data || [],
                    m = a.chart.options,
                    d = a._config,
                    g = a._showLine = A(d.showLine, m.showLines);
                for (a._xScale = a.getScaleForId(s.xAxisID), a._yScale = a.getScaleForId(s.yAxisID), g && (d.tension !== void 0 && d.lineTension === void 0 && (d.lineTension = d.tension), c._scale = a._yScale, c._datasetIndex = a.index, c._children = u, c._model = a._resolveDatasetElementOptions(c), c.pivot()), e = 0, r = u.length; e < r; ++e) a.updateElement(u[e], e, t);
                for (g && c._model.tension !== 0 && a.updateBezierControlPoints(), e = 0, r = u.length; e < r; ++e) u[e].pivot()
            },
            updateElement: function(t, e, r) {
                var a, s, c = this,
                    u = c.getMeta(),
                    m = t.custom || {},
                    d = c.getDataset(),
                    g = c.index,
                    y = d.data[e],
                    b = c._xScale,
                    _ = c._yScale,
                    P = u.dataset._model,
                    D = c._resolveDataElementOptions(t, e);
                a = b.getPixelForValue(typeof y == "object" ? y : NaN, e, g), s = r ? _.getBasePixel() : c.calculatePointY(y, e, g), t._xScale = b, t._yScale = _, t._options = D, t._datasetIndex = g, t._index = e, t._model = {
                    x: a,
                    y: s,
                    skip: m.skip || isNaN(a) || isNaN(s),
                    radius: D.radius,
                    pointStyle: D.pointStyle,
                    rotation: D.rotation,
                    backgroundColor: D.backgroundColor,
                    borderColor: D.borderColor,
                    borderWidth: D.borderWidth,
                    tension: A(m.tension, P ? P.tension : 0),
                    steppedLine: !!P && P.steppedLine,
                    hitRadius: D.hitRadius
                }
            },
            _resolveDatasetElementOptions: function(t) {
                var e = this,
                    r = e._config,
                    a = t.custom || {},
                    s = e.chart.options,
                    c = s.elements.line,
                    u = we.prototype._resolveDatasetElementOptions.apply(e, arguments);
                return u.spanGaps = A(r.spanGaps, s.spanGaps), u.tension = A(r.lineTension, c.tension), u.steppedLine = F([a.steppedLine, r.steppedLine, c.stepped]), u.clip = tt(A(r.clip, G(e._xScale, e._yScale, u.borderWidth))), u
            },
            calculatePointY: function(t, e, r) {
                var a, s, c, u, m, d, g, y = this,
                    b = y.chart,
                    _ = y._yScale,
                    P = 0,
                    D = 0;
                if (_.options.stacked) {
                    for (m = +_.getRightValue(t), g = (d = b._getSortedVisibleDatasetMetas()).length, a = 0; a < g && (c = d[a]).index !== r; ++a) s = b.data.datasets[c.index], c.type === "line" && c.yAxisID === _.id && ((u = +_.getRightValue(s.data[e])) < 0 ? D += u || 0 : P += u || 0);
                    return m < 0 ? _.getPixelForValue(D + m) : _.getPixelForValue(P + m)
                }
                return _.getPixelForValue(t)
            },
            updateBezierControlPoints: function() {
                var t, e, r, a, s = this,
                    c = s.chart,
                    u = s.getMeta(),
                    m = u.dataset._model,
                    d = c.chartArea,
                    g = u.data || [];

                function y(b, _, P) {
                    return Math.max(Math.min(b, P), _)
                }
                if (m.spanGaps && (g = g.filter(function(b) {
                        return !b._model.skip
                    })), m.cubicInterpolationMode === "monotone") x.splineCurveMonotone(g);
                else
                    for (t = 0, e = g.length; t < e; ++t) r = g[t]._model, a = x.splineCurve(x.previousItem(g, t)._model, r, x.nextItem(g, t)._model, m.tension), r.controlPointPreviousX = a.previous.x, r.controlPointPreviousY = a.previous.y, r.controlPointNextX = a.next.x, r.controlPointNextY = a.next.y;
                if (c.options.elements.line.capBezierPoints)
                    for (t = 0, e = g.length; t < e; ++t) r = g[t]._model, V(r, d) && (t > 0 && V(g[t - 1]._model, d) && (r.controlPointPreviousX = y(r.controlPointPreviousX, d.left, d.right), r.controlPointPreviousY = y(r.controlPointPreviousY, d.top, d.bottom)), t < g.length - 1 && V(g[t + 1]._model, d) && (r.controlPointNextX = y(r.controlPointNextX, d.left, d.right), r.controlPointNextY = y(r.controlPointNextY, d.top, d.bottom)))
            },
            draw: function() {
                var t, e = this,
                    r = e.chart,
                    a = e.getMeta(),
                    s = a.data || [],
                    c = r.chartArea,
                    u = r.canvas,
                    m = 0,
                    d = s.length;
                for (e._showLine && (t = a.dataset._model.clip, x.canvas.clipArea(r.ctx, {
                        left: t.left === !1 ? 0 : c.left - t.left,
                        right: t.right === !1 ? u.width : c.right + t.right,
                        top: t.top === !1 ? 0 : c.top - t.top,
                        bottom: t.bottom === !1 ? u.height : c.bottom + t.bottom
                    }), a.dataset.draw(), x.canvas.unclipArea(r.ctx)); m < d; ++m) s[m].draw(c)
            },
            setHoverStyle: function(t) {
                var e = t._model,
                    r = t._options,
                    a = x.getHoverColor;
                t.$previousStyle = {
                    backgroundColor: e.backgroundColor,
                    borderColor: e.borderColor,
                    borderWidth: e.borderWidth,
                    radius: e.radius
                }, e.backgroundColor = A(r.hoverBackgroundColor, a(r.backgroundColor)), e.borderColor = A(r.hoverBorderColor, a(r.borderColor)), e.borderWidth = A(r.hoverBorderWidth, r.borderWidth), e.radius = A(r.hoverRadius, r.radius)
            }
        }),
        bt = x.options.resolve;
    K._set("polarArea", {
        scale: {
            type: "radialLinear",
            angleLines: {
                display: !1
            },
            gridLines: {
                circular: !0
            },
            pointLabels: {
                display: !1
            },
            ticks: {
                beginAtZero: !0
            }
        },
        animation: {
            animateRotate: !0,
            animateScale: !0
        },
        startAngle: -.5 * Math.PI,
        legendCallback: function(t) {
            var e, r, a, s = document.createElement("ul"),
                c = t.data,
                u = c.datasets,
                m = c.labels;
            if (s.setAttribute("class", t.id + "-legend"), u.length)
                for (e = 0, r = u[0].data.length; e < r; ++e)(a = s.appendChild(document.createElement("li"))).appendChild(document.createElement("span")).style.backgroundColor = u[0].backgroundColor[e], m[e] && a.appendChild(document.createTextNode(m[e]));
            return s.outerHTML
        },
        legend: {
            labels: {
                generateLabels: function(t) {
                    var e = t.data;
                    return e.labels.length && e.datasets.length ? e.labels.map(function(r, a) {
                        var s = t.getDatasetMeta(0),
                            c = s.controller.getStyle(a);
                        return {
                            text: r,
                            fillStyle: c.backgroundColor,
                            strokeStyle: c.borderColor,
                            lineWidth: c.borderWidth,
                            hidden: isNaN(e.datasets[0].data[a]) || s.data[a].hidden,
                            index: a
                        }
                    }) : []
                }
            },
            onClick: function(t, e) {
                var r, a, s, c = e.index,
                    u = this.chart;
                for (r = 0, a = (u.data.datasets || []).length; r < a; ++r)(s = u.getDatasetMeta(r)).data[c].hidden = !s.data[c].hidden;
                u.update()
            }
        },
        tooltips: {
            callbacks: {
                title: function() {
                    return ""
                },
                label: function(t, e) {
                    return e.labels[t.index] + ": " + t.yLabel
                }
            }
        }
    });
    var Ct = we.extend({
        dataElementType: he.Arc,
        linkScales: x.noop,
        _dataElementOptions: ["backgroundColor", "borderColor", "borderWidth", "borderAlign", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth"],
        _getIndexScaleId: function() {
            return this.chart.scale.id
        },
        _getValueScaleId: function() {
            return this.chart.scale.id
        },
        update: function(t) {
            var e, r, a, s = this,
                c = s.getDataset(),
                u = s.getMeta(),
                m = s.chart.options.startAngle || 0,
                d = s._starts = [],
                g = s._angles = [],
                y = u.data;
            for (s._updateRadius(), u.count = s.countVisibleElements(), e = 0, r = c.data.length; e < r; e++) d[e] = m, a = s._computeAngle(e), g[e] = a, m += a;
            for (e = 0, r = y.length; e < r; ++e) y[e]._options = s._resolveDataElementOptions(y[e], e), s.updateElement(y[e], e, t)
        },
        _updateRadius: function() {
            var t = this,
                e = t.chart,
                r = e.chartArea,
                a = e.options,
                s = Math.min(r.right - r.left, r.bottom - r.top);
            e.outerRadius = Math.max(s / 2, 0), e.innerRadius = Math.max(a.cutoutPercentage ? e.outerRadius / 100 * a.cutoutPercentage : 1, 0), e.radiusLength = (e.outerRadius - e.innerRadius) / e.getVisibleDatasetCount(), t.outerRadius = e.outerRadius - e.radiusLength * t.index, t.innerRadius = t.outerRadius - e.radiusLength
        },
        updateElement: function(t, e, r) {
            var a = this,
                s = a.chart,
                c = a.getDataset(),
                u = s.options,
                m = u.animation,
                d = s.scale,
                g = s.data.labels,
                y = d.xCenter,
                b = d.yCenter,
                _ = u.startAngle,
                P = t.hidden ? 0 : d.getDistanceFromCenterForValue(c.data[e]),
                D = a._starts[e],
                R = D + (t.hidden ? 0 : a._angles[e]),
                E = m.animateScale ? 0 : d.getDistanceFromCenterForValue(c.data[e]),
                q = t._options || {};
            x.extend(t, {
                _datasetIndex: a.index,
                _index: e,
                _scale: d,
                _model: {
                    backgroundColor: q.backgroundColor,
                    borderColor: q.borderColor,
                    borderWidth: q.borderWidth,
                    borderAlign: q.borderAlign,
                    x: y,
                    y: b,
                    innerRadius: 0,
                    outerRadius: r ? E : P,
                    startAngle: r && m.animateRotate ? _ : D,
                    endAngle: r && m.animateRotate ? _ : R,
                    label: x.valueAtIndexOrDefault(g, e, g[e])
                }
            }), t.pivot()
        },
        countVisibleElements: function() {
            var t = this.getDataset(),
                e = this.getMeta(),
                r = 0;
            return x.each(e.data, function(a, s) {
                isNaN(t.data[s]) || a.hidden || r++
            }), r
        },
        setHoverStyle: function(t) {
            var e = t._model,
                r = t._options,
                a = x.getHoverColor,
                s = x.valueOrDefault;
            t.$previousStyle = {
                backgroundColor: e.backgroundColor,
                borderColor: e.borderColor,
                borderWidth: e.borderWidth
            }, e.backgroundColor = s(r.hoverBackgroundColor, a(r.backgroundColor)), e.borderColor = s(r.hoverBorderColor, a(r.borderColor)), e.borderWidth = s(r.hoverBorderWidth, r.borderWidth)
        },
        _computeAngle: function(t) {
            var e = this,
                r = this.getMeta().count,
                a = e.getDataset(),
                s = e.getMeta();
            if (isNaN(a.data[t]) || s.data[t].hidden) return 0;
            var c = {
                chart: e.chart,
                dataIndex: t,
                dataset: a,
                datasetIndex: e.index
            };
            return bt([e.chart.options.elements.arc.angle, 2 * Math.PI / r], c, t)
        }
    });
    K._set("pie", x.clone(K.doughnut)), K._set("pie", {
        cutoutPercentage: 0
    });
    var Dt = O,
        zt = x.valueOrDefault;
    K._set("radar", {
        spanGaps: !1,
        scale: {
            type: "radialLinear"
        },
        elements: {
            line: {
                fill: "start",
                tension: 0
            }
        }
    });
    var Ve = we.extend({
        datasetElementType: he.Line,
        dataElementType: he.Point,
        linkScales: x.noop,
        _datasetElementOptions: ["backgroundColor", "borderWidth", "borderColor", "borderCapStyle", "borderDash", "borderDashOffset", "borderJoinStyle", "fill"],
        _dataElementOptions: {
            backgroundColor: "pointBackgroundColor",
            borderColor: "pointBorderColor",
            borderWidth: "pointBorderWidth",
            hitRadius: "pointHitRadius",
            hoverBackgroundColor: "pointHoverBackgroundColor",
            hoverBorderColor: "pointHoverBorderColor",
            hoverBorderWidth: "pointHoverBorderWidth",
            hoverRadius: "pointHoverRadius",
            pointStyle: "pointStyle",
            radius: "pointRadius",
            rotation: "pointRotation"
        },
        _getIndexScaleId: function() {
            return this.chart.scale.id
        },
        _getValueScaleId: function() {
            return this.chart.scale.id
        },
        update: function(t) {
            var e, r, a = this,
                s = a.getMeta(),
                c = s.dataset,
                u = s.data || [],
                m = a.chart.scale,
                d = a._config;
            for (d.tension !== void 0 && d.lineTension === void 0 && (d.lineTension = d.tension), c._scale = m, c._datasetIndex = a.index, c._children = u, c._loop = !0, c._model = a._resolveDatasetElementOptions(c), c.pivot(), e = 0, r = u.length; e < r; ++e) a.updateElement(u[e], e, t);
            for (a.updateBezierControlPoints(), e = 0, r = u.length; e < r; ++e) u[e].pivot()
        },
        updateElement: function(t, e, r) {
            var a = this,
                s = t.custom || {},
                c = a.getDataset(),
                u = a.chart.scale,
                m = u.getPointPositionForValue(e, c.data[e]),
                d = a._resolveDataElementOptions(t, e),
                g = a.getMeta().dataset._model,
                y = r ? u.xCenter : m.x,
                b = r ? u.yCenter : m.y;
            t._scale = u, t._options = d, t._datasetIndex = a.index, t._index = e, t._model = {
                x: y,
                y: b,
                skip: s.skip || isNaN(y) || isNaN(b),
                radius: d.radius,
                pointStyle: d.pointStyle,
                rotation: d.rotation,
                backgroundColor: d.backgroundColor,
                borderColor: d.borderColor,
                borderWidth: d.borderWidth,
                tension: zt(s.tension, g ? g.tension : 0),
                hitRadius: d.hitRadius
            }
        },
        _resolveDatasetElementOptions: function() {
            var t = this,
                e = t._config,
                r = t.chart.options,
                a = we.prototype._resolveDatasetElementOptions.apply(t, arguments);
            return a.spanGaps = zt(e.spanGaps, r.spanGaps), a.tension = zt(e.lineTension, r.elements.line.tension), a
        },
        updateBezierControlPoints: function() {
            var t, e, r, a, s = this,
                c = s.getMeta(),
                u = s.chart.chartArea,
                m = c.data || [];

            function d(g, y, b) {
                return Math.max(Math.min(g, b), y)
            }
            for (c.dataset._model.spanGaps && (m = m.filter(function(g) {
                    return !g._model.skip
                })), t = 0, e = m.length; t < e; ++t) r = m[t]._model, a = x.splineCurve(x.previousItem(m, t, !0)._model, r, x.nextItem(m, t, !0)._model, r.tension), r.controlPointPreviousX = d(a.previous.x, u.left, u.right), r.controlPointPreviousY = d(a.previous.y, u.top, u.bottom), r.controlPointNextX = d(a.next.x, u.left, u.right), r.controlPointNextY = d(a.next.y, u.top, u.bottom)
        },
        setHoverStyle: function(t) {
            var e = t._model,
                r = t._options,
                a = x.getHoverColor;
            t.$previousStyle = {
                backgroundColor: e.backgroundColor,
                borderColor: e.borderColor,
                borderWidth: e.borderWidth,
                radius: e.radius
            }, e.backgroundColor = zt(r.hoverBackgroundColor, a(r.backgroundColor)), e.borderColor = zt(r.hoverBorderColor, a(r.borderColor)), e.borderWidth = zt(r.hoverBorderWidth, r.borderWidth), e.radius = zt(r.hoverRadius, r.radius)
        }
    });
    K._set("scatter", {
        hover: {
            mode: "single"
        },
        scales: {
            xAxes: [{
                id: "x-axis-1",
                type: "linear",
                position: "bottom"
            }],
            yAxes: [{
                id: "y-axis-1",
                type: "linear",
                position: "left"
            }]
        },
        tooltips: {
            callbacks: {
                title: function() {
                    return ""
                },
                label: function(t) {
                    return "(" + t.xLabel + ", " + t.yLabel + ")"
                }
            }
        }
    }), K._set("global", {
        datasets: {
            scatter: {
                showLine: !1
            }
        }
    });
    var lr = {
        bar: yi,
        bubble: wa,
        doughnut: O,
        horizontalBar: T,
        line: ot,
        polarArea: Ct,
        pie: Dt,
        radar: Ve,
        scatter: ot
    };

    function He(t, e) {
        return t.native ? {
            x: t.x,
            y: t.y
        } : x.getRelativePosition(t, e)
    }

    function Vn(t, e) {
        var r, a, s, c, u, m, d = t._getSortedVisibleDatasetMetas();
        for (a = 0, c = d.length; a < c; ++a)
            for (s = 0, u = (r = d[a].data).length; s < u; ++s)(m = r[s])._view.skip || e(m)
    }

    function Dr(t, e) {
        var r = [];
        return Vn(t, function(a) {
            a.inRange(e.x, e.y) && r.push(a)
        }), r
    }

    function cr(t, e, r, a) {
        var s = Number.POSITIVE_INFINITY,
            c = [];
        return Vn(t, function(u) {
            if (!r || u.inRange(e.x, e.y)) {
                var m = u.getCenterPoint(),
                    d = a(e, m);
                d < s ? (c = [u], s = d) : d === s && c.push(u)
            }
        }), c
    }

    function _a(t) {
        var e = t.indexOf("x") !== -1,
            r = t.indexOf("y") !== -1;
        return function(a, s) {
            var c = e ? Math.abs(a.x - s.x) : 0,
                u = r ? Math.abs(a.y - s.y) : 0;
            return Math.sqrt(Math.pow(c, 2) + Math.pow(u, 2))
        }
    }

    function ka(t, e, r) {
        var a = He(e, t);
        r.axis = r.axis || "x";
        var s = _a(r.axis),
            c = r.intersect ? Dr(t, a) : cr(t, a, !1, s),
            u = [];
        return c.length ? (t._getSortedVisibleDatasetMetas().forEach(function(m) {
            var d = m.data[c[0]._index];
            d && !d._view.skip && u.push(d)
        }), u) : []
    }
    var ur = {
            modes: {
                single: function(t, e) {
                    var r = He(e, t),
                        a = [];
                    return Vn(t, function(s) {
                        if (s.inRange(r.x, r.y)) return a.push(s), a
                    }), a.slice(0, 1)
                },
                label: ka,
                index: ka,
                dataset: function(t, e, r) {
                    var a = He(e, t);
                    r.axis = r.axis || "xy";
                    var s = _a(r.axis),
                        c = r.intersect ? Dr(t, a) : cr(t, a, !1, s);
                    return c.length > 0 && (c = t.getDatasetMeta(c[0]._datasetIndex).data), c
                },
                "x-axis": function(t, e) {
                    return ka(t, e, {
                        intersect: !1
                    })
                },
                point: function(t, e) {
                    return Dr(t, He(e, t))
                },
                nearest: function(t, e, r) {
                    var a = He(e, t);
                    r.axis = r.axis || "xy";
                    var s = _a(r.axis);
                    return cr(t, a, r.intersect, s)
                },
                x: function(t, e, r) {
                    var a = He(e, t),
                        s = [],
                        c = !1;
                    return Vn(t, function(u) {
                        u.inXRange(a.x) && s.push(u), u.inRange(a.x, a.y) && (c = !0)
                    }), r.intersect && !c && (s = []), s
                },
                y: function(t, e, r) {
                    var a = He(e, t),
                        s = [],
                        c = !1;
                    return Vn(t, function(u) {
                        u.inYRange(a.y) && s.push(u), u.inRange(a.x, a.y) && (c = !0)
                    }), r.intersect && !c && (s = []), s
                }
            }
        },
        Sa = x.extend;

    function Or(t, e) {
        return x.where(t, function(r) {
            return r.pos === e
        })
    }

    function vi(t, e) {
        return t.sort(function(r, a) {
            var s = e ? a : r,
                c = e ? r : a;
            return s.weight === c.weight ? s.index - c.index : s.weight - c.weight
        })
    }

    function oc(t) {
        var e, r, a, s = [];
        for (e = 0, r = (t || []).length; e < r; ++e) a = t[e], s.push({
            index: e,
            box: a,
            pos: a.position,
            horizontal: a.isHorizontal(),
            weight: a.weight
        });
        return s
    }

    function sc(t, e) {
        var r, a, s;
        for (r = 0, a = t.length; r < a; ++r)(s = t[r]).width = s.horizontal ? s.box.fullWidth && e.availableWidth : e.vBoxMaxWidth, s.height = s.horizontal && e.hBoxMaxHeight
    }

    function lc(t) {
        var e = oc(t),
            r = vi(Or(e, "left"), !0),
            a = vi(Or(e, "right")),
            s = vi(Or(e, "top"), !0),
            c = vi(Or(e, "bottom"));
        return {
            leftAndTop: r.concat(s),
            rightAndBottom: a.concat(c),
            chartArea: Or(e, "chartArea"),
            vertical: r.concat(a),
            horizontal: s.concat(c)
        }
    }

    function Uo(t, e, r, a) {
        return Math.max(t[r], e[r]) + Math.max(t[a], e[a])
    }

    function cc(t, e, r) {
        var a, s, c = r.box,
            u = t.maxPadding;
        if (r.size && (t[r.pos] -= r.size), r.size = r.horizontal ? c.height : c.width, t[r.pos] += r.size, c.getPadding) {
            var m = c.getPadding();
            u.top = Math.max(u.top, m.top), u.left = Math.max(u.left, m.left), u.bottom = Math.max(u.bottom, m.bottom), u.right = Math.max(u.right, m.right)
        }
        if (a = e.outerWidth - Uo(u, t, "left", "right"), s = e.outerHeight - Uo(u, t, "top", "bottom"), a !== t.w || s !== t.h) {
            t.w = a, t.h = s;
            var d = r.horizontal ? [a, t.w] : [s, t.h];
            return !(d[0] === d[1] || isNaN(d[0]) && isNaN(d[1]))
        }
    }

    function uc(t) {
        var e = t.maxPadding;

        function r(a) {
            var s = Math.max(e[a] - t[a], 0);
            return t[a] += s, s
        }
        t.y += r("top"), t.x += r("left"), r("right"), r("bottom")
    }

    function dc(t, e) {
        var r = e.maxPadding;

        function a(s) {
            var c = {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            };
            return s.forEach(function(u) {
                c[u] = Math.max(e[u], r[u])
            }), c
        }
        return a(t ? ["left", "right"] : ["top", "bottom"])
    }

    function bi(t, e, r) {
        var a, s, c, u, m, d, g = [];
        for (a = 0, s = t.length; a < s; ++a)(u = (c = t[a]).box).update(c.width || e.w, c.height || e.h, dc(c.horizontal, e)), cc(e, r, c) && (d = !0, g.length && (m = !0)), u.fullWidth || g.push(c);
        return m && bi(g, e, r) || d
    }

    function Go(t, e, r) {
        var a, s, c, u, m = r.padding,
            d = e.x,
            g = e.y;
        for (a = 0, s = t.length; a < s; ++a) u = (c = t[a]).box, c.horizontal ? (u.left = u.fullWidth ? m.left : e.left, u.right = u.fullWidth ? r.outerWidth - m.right : e.left + e.w, u.top = g, u.bottom = g + u.height, u.width = u.right - u.left, g = u.bottom) : (u.left = d, u.right = d + u.width, u.top = e.top, u.bottom = e.top + e.h, u.height = u.bottom - u.top, d = u.right);
        e.x = d, e.y = g
    }
    K._set("global", {
        layout: {
            padding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            }
        }
    });
    var Be = {
            defaults: {},
            addBox: function(t, e) {
                t.boxes || (t.boxes = []), e.fullWidth = e.fullWidth || !1, e.position = e.position || "top", e.weight = e.weight || 0, e._layers = e._layers || function() {
                    return [{
                        z: 0,
                        draw: function() {
                            e.draw.apply(e, arguments)
                        }
                    }]
                }, t.boxes.push(e)
            },
            removeBox: function(t, e) {
                var r = t.boxes ? t.boxes.indexOf(e) : -1;
                r !== -1 && t.boxes.splice(r, 1)
            },
            configure: function(t, e, r) {
                for (var a, s = ["fullWidth", "position", "weight"], c = s.length, u = 0; u < c; ++u) a = s[u], r.hasOwnProperty(a) && (e[a] = r[a])
            },
            update: function(t, e, r) {
                if (t) {
                    var a = t.options.layout || {},
                        s = x.options.toPadding(a.padding),
                        c = e - s.width,
                        u = r - s.height,
                        m = lc(t.boxes),
                        d = m.vertical,
                        g = m.horizontal,
                        y = Object.freeze({
                            outerWidth: e,
                            outerHeight: r,
                            padding: s,
                            availableWidth: c,
                            vBoxMaxWidth: c / 2 / d.length,
                            hBoxMaxHeight: u / 2
                        }),
                        b = Sa({
                            maxPadding: Sa({}, s),
                            w: c,
                            h: u,
                            x: s.left,
                            y: s.top
                        }, s);
                    sc(d.concat(g), y), bi(d, b, y), bi(g, b, y) && bi(d, b, y), uc(b), Go(m.leftAndTop, b, y), b.x += b.w, b.y += b.h, Go(m.rightAndBottom, b, y), t.chartArea = {
                        left: b.left,
                        top: b.top,
                        right: b.left + b.w,
                        bottom: b.top + b.h
                    }, x.each(m.chartArea, function(_) {
                        var P = _.box;
                        Sa(P, t.chartArea), P.update(b.w, b.h)
                    })
                }
            }
        },
        hc = {
            acquireContext: function(t) {
                return t && t.canvas && (t = t.canvas), t && t.getContext("2d") || null
            }
        },
        fc = `/*\r
 * DOM element rendering detection\r
 * https://davidwalsh.name/detect-node-insertion\r
 */\r
@keyframes chartjs-render-animation {\r
	from { opacity: 0.99; }\r
	to { opacity: 1; }\r
}\r
\r
.chartjs-render-monitor {\r
	animation: chartjs-render-animation 0.001s;\r
}\r
\r
/*\r
 * DOM element resizing detection\r
 * https://github.com/marcj/css-element-queries\r
 */\r
.chartjs-size-monitor,\r
.chartjs-size-monitor-expand,\r
.chartjs-size-monitor-shrink {\r
	position: absolute;\r
	direction: ltr;\r
	left: 0;\r
	top: 0;\r
	right: 0;\r
	bottom: 0;\r
	overflow: hidden;\r
	pointer-events: none;\r
	visibility: hidden;\r
	z-index: -1;\r
}\r
\r
.chartjs-size-monitor-expand > div {\r
	position: absolute;\r
	width: 1000000px;\r
	height: 1000000px;\r
	left: 0;\r
	top: 0;\r
}\r
\r
.chartjs-size-monitor-shrink > div {\r
	position: absolute;\r
	width: 200%;\r
	height: 200%;\r
	left: 0;\r
	top: 0;\r
}\r
`,
        mc = o(Object.freeze({
            __proto__: null,
            default: fc
        })),
        ge = "$chartjs",
        Na = "chartjs-",
        ja = Na + "size-monitor",
        qo = Na + "render-monitor",
        gc = Na + "render-animation",
        $o = ["animationstart", "webkitAnimationStart"],
        pc = {
            touchstart: "mousedown",
            touchmove: "mousemove",
            touchend: "mouseup",
            pointerenter: "mouseenter",
            pointerdown: "mousedown",
            pointermove: "mousemove",
            pointerup: "mouseup",
            pointerleave: "mouseout",
            pointerout: "mouseout"
        };

    function Xo(t, e) {
        var r = x.getStyle(t, e),
            a = r && r.match(/^(\d+)(\.\d+)?px$/);
        return a ? Number(a[1]) : void 0
    }

    function yc(t, e) {
        var r = t.style,
            a = t.getAttribute("height"),
            s = t.getAttribute("width");
        if (t[ge] = {
                initial: {
                    height: a,
                    width: s,
                    style: {
                        display: r.display,
                        height: r.height,
                        width: r.width
                    }
                }
            }, r.display = r.display || "block", s === null || s === "") {
            var c = Xo(t, "width");
            c !== void 0 && (t.width = c)
        }
        if (a === null || a === "")
            if (t.style.height === "") t.height = t.width / (e.options.aspectRatio || 2);
            else {
                var u = Xo(t, "height");
                c !== void 0 && (t.height = u)
            }
        return t
    }
    var Zo = !! function() {
        var t = !1;
        try {
            var e = Object.defineProperty({}, "passive", {
                get: function() {
                    t = !0
                }
            });
            window.addEventListener("e", null, e)
        } catch (r) {}
        return t
    }() && {
        passive: !0
    };

    function Ar(t, e, r) {
        t.addEventListener(e, r, Zo)
    }

    function Ma(t, e, r) {
        t.removeEventListener(e, r, Zo)
    }

    function Ia(t, e, r, a, s) {
        return {
            type: t,
            chart: e,
            native: s || null,
            x: r !== void 0 ? r : null,
            y: a !== void 0 ? a : null
        }
    }

    function vc(t, e) {
        var r = pc[t.type] || t.type,
            a = x.getRelativePosition(t, e);
        return Ia(r, e, a.x, a.y, t)
    }

    function bc(t, e) {
        var r = !1,
            a = [];
        return function() {
            a = Array.prototype.slice.call(arguments), e = e || this, r || (r = !0, x.requestAnimFrame.call(window, function() {
                r = !1, t.apply(e, a)
            }))
        }
    }

    function Rr(t) {
        var e = document.createElement("div");
        return e.className = t || "", e
    }

    function xc(t) {
        var e = 1e6,
            r = Rr(ja),
            a = Rr(ja + "-expand"),
            s = Rr(ja + "-shrink");
        a.appendChild(Rr()), s.appendChild(Rr()), r.appendChild(a), r.appendChild(s), r._reset = function() {
            a.scrollLeft = e, a.scrollTop = e, s.scrollLeft = e, s.scrollTop = e
        };
        var c = function() {
            r._reset(), t()
        };
        return Ar(a, "scroll", c.bind(a, "expand")), Ar(s, "scroll", c.bind(s, "shrink")), r
    }

    function wc(t, e) {
        var r = t[ge] || (t[ge] = {}),
            a = r.renderProxy = function(s) {
                s.animationName === gc && e()
            };
        x.each($o, function(s) {
            Ar(t, s, a)
        }), r.reflow = !!t.offsetParent, t.classList.add(qo)
    }

    function _c(t) {
        var e = t[ge] || {},
            r = e.renderProxy;
        r && (x.each($o, function(a) {
            Ma(t, a, r)
        }), delete e.renderProxy), t.classList.remove(qo)
    }

    function kc(t, e, r) {
        var a = t[ge] || (t[ge] = {}),
            s = a.resizer = xc(bc(function() {
                if (a.resizer) {
                    var c = r.options.maintainAspectRatio && t.parentNode,
                        u = c ? c.clientWidth : 0;
                    e(Ia("resize", r)), c && c.clientWidth < u && r.canvas && e(Ia("resize", r))
                }
            }));
        wc(t, function() {
            if (a.resizer) {
                var c = t.parentNode;
                c && c !== s.parentNode && c.insertBefore(s, c.firstChild), s._reset()
            }
        })
    }

    function Sc(t) {
        var e = t[ge] || {},
            r = e.resizer;
        delete e.resizer, _c(t), r && r.parentNode && r.parentNode.removeChild(r)
    }

    function Nc(t, e) {
        var r = t[ge] || (t[ge] = {});
        if (!r.containsStyles) {
            r.containsStyles = !0, e = `/* Chart.js */
` + e;
            var a = document.createElement("style");
            a.setAttribute("type", "text/css"), a.appendChild(document.createTextNode(e)), t.appendChild(a)
        }
    }
    var Jo = {
        disableCSSInjection: !1,
        _enabled: typeof window != "undefined" && typeof document != "undefined",
        _ensureLoaded: function(t) {
            if (!this.disableCSSInjection) {
                var e = t.getRootNode ? t.getRootNode() : document;
                Nc(e.host ? e : document.head, mc)
            }
        },
        acquireContext: function(t, e) {
            typeof t == "string" ? t = document.getElementById(t) : t.length && (t = t[0]), t && t.canvas && (t = t.canvas);
            var r = t && t.getContext && t.getContext("2d");
            return r && r.canvas === t ? (this._ensureLoaded(t), yc(t, e), r) : null
        },
        releaseContext: function(t) {
            var e = t.canvas;
            if (e[ge]) {
                var r = e[ge].initial;
                ["height", "width"].forEach(function(a) {
                    var s = r[a];
                    x.isNullOrUndef(s) ? e.removeAttribute(a) : e.setAttribute(a, s)
                }), x.each(r.style || {}, function(a, s) {
                    e.style[s] = a
                }), e.width = e.width, delete e[ge]
            }
        },
        addEventListener: function(t, e, r) {
            var a = t.canvas;
            if (e !== "resize") {
                var s = r[ge] || (r[ge] = {});
                Ar(a, e, (s.proxies || (s.proxies = {}))[t.id + "_" + e] = function(c) {
                    r(vc(c, t))
                })
            } else kc(a, r, t)
        },
        removeEventListener: function(t, e, r) {
            var a = t.canvas;
            if (e !== "resize") {
                var s = ((r[ge] || {}).proxies || {})[t.id + "_" + e];
                s && Ma(a, e, s)
            } else Sc(a)
        }
    };
    x.addEvent = Ar, x.removeEvent = Ma;
    var jc = Jo._enabled ? Jo : hc,
        dr = x.extend({
            initialize: function() {},
            acquireContext: function() {},
            releaseContext: function() {},
            addEventListener: function() {},
            removeEventListener: function() {}
        }, jc);
    K._set("global", {
        plugins: {}
    });
    var Bt = {
            _plugins: [],
            _cacheId: 0,
            register: function(t) {
                var e = this._plugins;
                [].concat(t).forEach(function(r) {
                    e.indexOf(r) === -1 && e.push(r)
                }), this._cacheId++
            },
            unregister: function(t) {
                var e = this._plugins;
                [].concat(t).forEach(function(r) {
                    var a = e.indexOf(r);
                    a !== -1 && e.splice(a, 1)
                }), this._cacheId++
            },
            clear: function() {
                this._plugins = [], this._cacheId++
            },
            count: function() {
                return this._plugins.length
            },
            getAll: function() {
                return this._plugins
            },
            notify: function(t, e, r) {
                var a, s, c, u, m, d = this.descriptors(t),
                    g = d.length;
                for (a = 0; a < g; ++a)
                    if (typeof(m = (c = (s = d[a]).plugin)[e]) == "function" && ((u = [t].concat(r || [])).push(s.options), m.apply(c, u) === !1)) return !1;
                return !0
            },
            descriptors: function(t) {
                var e = t.$plugins || (t.$plugins = {});
                if (e.id === this._cacheId) return e.descriptors;
                var r = [],
                    a = [],
                    s = t && t.config || {},
                    c = s.options && s.options.plugins || {};
                return this._plugins.concat(s.plugins || []).forEach(function(u) {
                    if (r.indexOf(u) === -1) {
                        var m = u.id,
                            d = c[m];
                        d !== !1 && (d === !0 && (d = x.clone(K.global.plugins[m])), r.push(u), a.push({
                            plugin: u,
                            options: d || {}
                        }))
                    }
                }), e.descriptors = a, e.id = this._cacheId, a
            },
            _invalidate: function(t) {
                delete t.$plugins
            }
        },
        Br = {
            constructors: {},
            defaults: {},
            registerScaleType: function(t, e, r) {
                this.constructors[t] = e, this.defaults[t] = x.clone(r)
            },
            getScaleConstructor: function(t) {
                return this.constructors.hasOwnProperty(t) ? this.constructors[t] : void 0
            },
            getScaleDefaults: function(t) {
                return this.defaults.hasOwnProperty(t) ? x.merge(Object.create(null), [K.scale, this.defaults[t]]) : {}
            },
            updateScaleDefaults: function(t, e) {
                var r = this;
                r.defaults.hasOwnProperty(t) && (r.defaults[t] = x.extend(r.defaults[t], e))
            },
            addScalesToLayout: function(t) {
                x.each(t.scales, function(e) {
                    e.fullWidth = e.options.fullWidth, e.position = e.options.position, e.weight = e.options.weight, Be.addBox(t, e)
                })
            }
        },
        hn = x.valueOrDefault,
        Ca = x.rtl.getRtlAdapter;
    K._set("global", {
        tooltips: {
            enabled: !0,
            custom: null,
            mode: "nearest",
            position: "average",
            intersect: !0,
            backgroundColor: "rgba(0,0,0,0.8)",
            titleFontStyle: "bold",
            titleSpacing: 2,
            titleMarginBottom: 6,
            titleFontColor: "#fff",
            titleAlign: "left",
            bodySpacing: 2,
            bodyFontColor: "#fff",
            bodyAlign: "left",
            footerFontStyle: "bold",
            footerSpacing: 2,
            footerMarginTop: 6,
            footerFontColor: "#fff",
            footerAlign: "left",
            yPadding: 6,
            xPadding: 6,
            caretPadding: 2,
            caretSize: 5,
            cornerRadius: 6,
            multiKeyBackground: "#fff",
            displayColors: !0,
            borderColor: "rgba(0,0,0,0)",
            borderWidth: 0,
            callbacks: {
                beforeTitle: x.noop,
                title: function(t, e) {
                    var r = "",
                        a = e.labels,
                        s = a ? a.length : 0;
                    if (t.length > 0) {
                        var c = t[0];
                        c.label ? r = c.label : c.xLabel ? r = c.xLabel : s > 0 && c.index < s && (r = a[c.index])
                    }
                    return r
                },
                afterTitle: x.noop,
                beforeBody: x.noop,
                beforeLabel: x.noop,
                label: function(t, e) {
                    var r = e.datasets[t.datasetIndex].label || "";
                    return r && (r += ": "), x.isNullOrUndef(t.value) ? r += t.yLabel : r += t.value, r
                },
                labelColor: function(t, e) {
                    var r = e.getDatasetMeta(t.datasetIndex).data[t.index]._view;
                    return {
                        borderColor: r.borderColor,
                        backgroundColor: r.backgroundColor
                    }
                },
                labelTextColor: function() {
                    return this._options.bodyFontColor
                },
                afterLabel: x.noop,
                afterBody: x.noop,
                beforeFooter: x.noop,
                footer: x.noop,
                afterFooter: x.noop
            }
        }
    });
    var Ko = {
        average: function(t) {
            if (!t.length) return !1;
            var e, r, a = 0,
                s = 0,
                c = 0;
            for (e = 0, r = t.length; e < r; ++e) {
                var u = t[e];
                if (u && u.hasValue()) {
                    var m = u.tooltipPosition();
                    a += m.x, s += m.y, ++c
                }
            }
            return {
                x: a / c,
                y: s / c
            }
        },
        nearest: function(t, e) {
            var r, a, s, c = e.x,
                u = e.y,
                m = Number.POSITIVE_INFINITY;
            for (r = 0, a = t.length; r < a; ++r) {
                var d = t[r];
                if (d && d.hasValue()) {
                    var g = d.getCenterPoint(),
                        y = x.distanceBetweenPoints(e, g);
                    y < m && (m = y, s = d)
                }
            }
            if (s) {
                var b = s.tooltipPosition();
                c = b.x, u = b.y
            }
            return {
                x: c,
                y: u
            }
        }
    };

    function tn(t, e) {
        return e && (x.isArray(e) ? Array.prototype.push.apply(t, e) : t.push(e)), t
    }

    function fn(t) {
        return (typeof t == "string" || t instanceof String) && t.indexOf(`
`) > -1 ? t.split(`
`) : t
    }

    function Mc(t) {
        var e = t._xScale,
            r = t._yScale || t._scale,
            a = t._index,
            s = t._datasetIndex,
            c = t._chart.getDatasetMeta(s).controller,
            u = c._getIndexScale(),
            m = c._getValueScale();
        return {
            xLabel: e ? e.getLabelForIndex(a, s) : "",
            yLabel: r ? r.getLabelForIndex(a, s) : "",
            label: u ? "" + u.getLabelForIndex(a, s) : "",
            value: m ? "" + m.getLabelForIndex(a, s) : "",
            index: a,
            datasetIndex: s,
            x: t._model.x,
            y: t._model.y
        }
    }

    function Qo(t) {
        var e = K.global;
        return {
            xPadding: t.xPadding,
            yPadding: t.yPadding,
            xAlign: t.xAlign,
            yAlign: t.yAlign,
            rtl: t.rtl,
            textDirection: t.textDirection,
            bodyFontColor: t.bodyFontColor,
            _bodyFontFamily: hn(t.bodyFontFamily, e.defaultFontFamily),
            _bodyFontStyle: hn(t.bodyFontStyle, e.defaultFontStyle),
            _bodyAlign: t.bodyAlign,
            bodyFontSize: hn(t.bodyFontSize, e.defaultFontSize),
            bodySpacing: t.bodySpacing,
            titleFontColor: t.titleFontColor,
            _titleFontFamily: hn(t.titleFontFamily, e.defaultFontFamily),
            _titleFontStyle: hn(t.titleFontStyle, e.defaultFontStyle),
            titleFontSize: hn(t.titleFontSize, e.defaultFontSize),
            _titleAlign: t.titleAlign,
            titleSpacing: t.titleSpacing,
            titleMarginBottom: t.titleMarginBottom,
            footerFontColor: t.footerFontColor,
            _footerFontFamily: hn(t.footerFontFamily, e.defaultFontFamily),
            _footerFontStyle: hn(t.footerFontStyle, e.defaultFontStyle),
            footerFontSize: hn(t.footerFontSize, e.defaultFontSize),
            _footerAlign: t.footerAlign,
            footerSpacing: t.footerSpacing,
            footerMarginTop: t.footerMarginTop,
            caretSize: t.caretSize,
            cornerRadius: t.cornerRadius,
            backgroundColor: t.backgroundColor,
            opacity: 0,
            legendColorBackground: t.multiKeyBackground,
            displayColors: t.displayColors,
            borderColor: t.borderColor,
            borderWidth: t.borderWidth
        }
    }

    function Ic(t, e) {
        var r = t._chart.ctx,
            a = 2 * e.yPadding,
            s = 0,
            c = e.body,
            u = c.reduce(function(D, R) {
                return D + R.before.length + R.lines.length + R.after.length
            }, 0);
        u += e.beforeBody.length + e.afterBody.length;
        var m = e.title.length,
            d = e.footer.length,
            g = e.titleFontSize,
            y = e.bodyFontSize,
            b = e.footerFontSize;
        a += m * g, a += m ? (m - 1) * e.titleSpacing : 0, a += m ? e.titleMarginBottom : 0, a += u * y, a += u ? (u - 1) * e.bodySpacing : 0, a += d ? e.footerMarginTop : 0, a += d * b, a += d ? (d - 1) * e.footerSpacing : 0;
        var _ = 0,
            P = function(D) {
                s = Math.max(s, r.measureText(D).width + _)
            };
        return r.font = x.fontString(g, e._titleFontStyle, e._titleFontFamily), x.each(e.title, P), r.font = x.fontString(y, e._bodyFontStyle, e._bodyFontFamily), x.each(e.beforeBody.concat(e.afterBody), P), _ = e.displayColors ? y + 2 : 0, x.each(c, function(D) {
            x.each(D.before, P), x.each(D.lines, P), x.each(D.after, P)
        }), _ = 0, r.font = x.fontString(b, e._footerFontStyle, e._footerFontFamily), x.each(e.footer, P), {
            width: s += 2 * e.xPadding,
            height: a
        }
    }

    function Cc(t, e) {
        var r, a, s, c, u, m = t._model,
            d = t._chart,
            g = t._chart.chartArea,
            y = "center",
            b = "center";
        m.y < e.height ? b = "top" : m.y > d.height - e.height && (b = "bottom");
        var _ = (g.left + g.right) / 2,
            P = (g.top + g.bottom) / 2;
        b === "center" ? (r = function(R) {
            return R <= _
        }, a = function(R) {
            return R > _
        }) : (r = function(R) {
            return R <= e.width / 2
        }, a = function(R) {
            return R >= d.width - e.width / 2
        }), s = function(R) {
            return R + e.width + m.caretSize + m.caretPadding > d.width
        }, c = function(R) {
            return R - e.width - m.caretSize - m.caretPadding < 0
        }, u = function(R) {
            return R <= P ? "top" : "bottom"
        }, r(m.x) ? (y = "left", s(m.x) && (y = "center", b = u(m.y))) : a(m.x) && (y = "right", c(m.x) && (y = "center", b = u(m.y)));
        var D = t._options;
        return {
            xAlign: D.xAlign ? D.xAlign : y,
            yAlign: D.yAlign ? D.yAlign : b
        }
    }

    function Pc(t, e, r, a) {
        var s = t.x,
            c = t.y,
            u = t.caretSize,
            m = t.caretPadding,
            d = t.cornerRadius,
            g = r.xAlign,
            y = r.yAlign,
            b = u + m,
            _ = d + m;
        return g === "right" ? s -= e.width : g === "center" && ((s -= e.width / 2) + e.width > a.width && (s = a.width - e.width), s < 0 && (s = 0)), y === "top" ? c += b : c -= y === "bottom" ? e.height + b : e.height / 2, y === "center" ? g === "left" ? s += b : g === "right" && (s -= b) : g === "left" ? s -= _ : g === "right" && (s += _), {
            x: s,
            y: c
        }
    }

    function xi(t, e) {
        return e === "center" ? t.x + t.width / 2 : e === "right" ? t.x + t.width - t.xPadding : t.x + t.xPadding
    }

    function ts(t) {
        return tn([], fn(t))
    }
    var Tc = Ae.extend({
            initialize: function() {
                this._model = Qo(this._options), this._lastActive = []
            },
            getTitle: function() {
                var t = this,
                    e = t._options.callbacks,
                    r = e.beforeTitle.apply(t, arguments),
                    a = e.title.apply(t, arguments),
                    s = e.afterTitle.apply(t, arguments),
                    c = [];
                return c = tn(c, fn(r)), c = tn(c, fn(a)), c = tn(c, fn(s))
            },
            getBeforeBody: function() {
                return ts(this._options.callbacks.beforeBody.apply(this, arguments))
            },
            getBody: function(t, e) {
                var r = this,
                    a = r._options.callbacks,
                    s = [];
                return x.each(t, function(c) {
                    var u = {
                        before: [],
                        lines: [],
                        after: []
                    };
                    tn(u.before, fn(a.beforeLabel.call(r, c, e))), tn(u.lines, a.label.call(r, c, e)), tn(u.after, fn(a.afterLabel.call(r, c, e))), s.push(u)
                }), s
            },
            getAfterBody: function() {
                return ts(this._options.callbacks.afterBody.apply(this, arguments))
            },
            getFooter: function() {
                var t = this,
                    e = t._options.callbacks,
                    r = e.beforeFooter.apply(t, arguments),
                    a = e.footer.apply(t, arguments),
                    s = e.afterFooter.apply(t, arguments),
                    c = [];
                return c = tn(c, fn(r)), c = tn(c, fn(a)), c = tn(c, fn(s))
            },
            update: function(t) {
                var e, r, a = this,
                    s = a._options,
                    c = a._model,
                    u = a._model = Qo(s),
                    m = a._active,
                    d = a._data,
                    g = {
                        xAlign: c.xAlign,
                        yAlign: c.yAlign
                    },
                    y = {
                        x: c.x,
                        y: c.y
                    },
                    b = {
                        width: c.width,
                        height: c.height
                    },
                    _ = {
                        x: c.caretX,
                        y: c.caretY
                    };
                if (m.length) {
                    u.opacity = 1;
                    var P = [],
                        D = [];
                    _ = Ko[s.position].call(a, m, a._eventPosition);
                    var R = [];
                    for (e = 0, r = m.length; e < r; ++e) R.push(Mc(m[e]));
                    s.filter && (R = R.filter(function(E) {
                        return s.filter(E, d)
                    })), s.itemSort && (R = R.sort(function(E, q) {
                        return s.itemSort(E, q, d)
                    })), x.each(R, function(E) {
                        P.push(s.callbacks.labelColor.call(a, E, a._chart)), D.push(s.callbacks.labelTextColor.call(a, E, a._chart))
                    }), u.title = a.getTitle(R, d), u.beforeBody = a.getBeforeBody(R, d), u.body = a.getBody(R, d), u.afterBody = a.getAfterBody(R, d), u.footer = a.getFooter(R, d), u.x = _.x, u.y = _.y, u.caretPadding = s.caretPadding, u.labelColors = P, u.labelTextColors = D, u.dataPoints = R, y = Pc(u, b = Ic(this, u), g = Cc(this, b), a._chart)
                } else u.opacity = 0;
                return u.xAlign = g.xAlign, u.yAlign = g.yAlign, u.x = y.x, u.y = y.y, u.width = b.width, u.height = b.height, u.caretX = _.x, u.caretY = _.y, a._model = u, t && s.custom && s.custom.call(a, u), a
            },
            drawCaret: function(t, e) {
                var r = this._chart.ctx,
                    a = this._view,
                    s = this.getCaretPosition(t, e, a);
                r.lineTo(s.x1, s.y1), r.lineTo(s.x2, s.y2), r.lineTo(s.x3, s.y3)
            },
            getCaretPosition: function(t, e, r) {
                var a, s, c, u, m, d, g = r.caretSize,
                    y = r.cornerRadius,
                    b = r.xAlign,
                    _ = r.yAlign,
                    P = t.x,
                    D = t.y,
                    R = e.width,
                    E = e.height;
                if (_ === "center") m = D + E / 2, b === "left" ? (s = (a = P) - g, c = a, u = m + g, d = m - g) : (s = (a = P + R) + g, c = a, u = m - g, d = m + g);
                else if (b === "left" ? (a = (s = P + y + g) - g, c = s + g) : b === "right" ? (a = (s = P + R - y - g) - g, c = s + g) : (a = (s = r.caretX) - g, c = s + g), _ === "top") m = (u = D) - g, d = u;
                else {
                    m = (u = D + E) + g, d = u;
                    var q = c;
                    c = a, a = q
                }
                return {
                    x1: a,
                    x2: s,
                    x3: c,
                    y1: u,
                    y2: m,
                    y3: d
                }
            },
            drawTitle: function(t, e, r) {
                var a, s, c, u = e.title,
                    m = u.length;
                if (m) {
                    var d = Ca(e.rtl, e.x, e.width);
                    for (t.x = xi(e, e._titleAlign), r.textAlign = d.textAlign(e._titleAlign), r.textBaseline = "middle", a = e.titleFontSize, s = e.titleSpacing, r.fillStyle = e.titleFontColor, r.font = x.fontString(a, e._titleFontStyle, e._titleFontFamily), c = 0; c < m; ++c) r.fillText(u[c], d.x(t.x), t.y + a / 2), t.y += a + s, c + 1 === m && (t.y += e.titleMarginBottom - s)
                }
            },
            drawBody: function(t, e, r) {
                var a, s, c, u, m, d, g, y, b = e.bodyFontSize,
                    _ = e.bodySpacing,
                    P = e._bodyAlign,
                    D = e.body,
                    R = e.displayColors,
                    E = 0,
                    q = R ? xi(e, "left") : 0,
                    Q = Ca(e.rtl, e.x, e.width),
                    lt = function(At) {
                        r.fillText(At, Q.x(t.x + E), t.y + b / 2), t.y += b + _
                    },
                    pt = Q.textAlign(P);
                for (r.textAlign = P, r.textBaseline = "middle", r.font = x.fontString(b, e._bodyFontStyle, e._bodyFontFamily), t.x = xi(e, pt), r.fillStyle = e.bodyFontColor, x.each(e.beforeBody, lt), E = R && pt !== "right" ? P === "center" ? b / 2 + 1 : b + 2 : 0, m = 0, g = D.length; m < g; ++m) {
                    for (a = D[m], s = e.labelTextColors[m], c = e.labelColors[m], r.fillStyle = s, x.each(a.before, lt), d = 0, y = (u = a.lines).length; d < y; ++d) {
                        if (R) {
                            var mt = Q.x(q);
                            r.fillStyle = e.legendColorBackground, r.fillRect(Q.leftForLtr(mt, b), t.y, b, b), r.lineWidth = 1, r.strokeStyle = c.borderColor, r.strokeRect(Q.leftForLtr(mt, b), t.y, b, b), r.fillStyle = c.backgroundColor, r.fillRect(Q.leftForLtr(Q.xPlus(mt, 1), b - 2), t.y + 1, b - 2, b - 2), r.fillStyle = s
                        }
                        lt(u[d])
                    }
                    x.each(a.after, lt)
                }
                E = 0, x.each(e.afterBody, lt), t.y -= _
            },
            drawFooter: function(t, e, r) {
                var a, s, c = e.footer,
                    u = c.length;
                if (u) {
                    var m = Ca(e.rtl, e.x, e.width);
                    for (t.x = xi(e, e._footerAlign), t.y += e.footerMarginTop, r.textAlign = m.textAlign(e._footerAlign), r.textBaseline = "middle", a = e.footerFontSize, r.fillStyle = e.footerFontColor, r.font = x.fontString(a, e._footerFontStyle, e._footerFontFamily), s = 0; s < u; ++s) r.fillText(c[s], m.x(t.x), t.y + a / 2), t.y += a + e.footerSpacing
                }
            },
            drawBackground: function(t, e, r, a) {
                r.fillStyle = e.backgroundColor, r.strokeStyle = e.borderColor, r.lineWidth = e.borderWidth;
                var s = e.xAlign,
                    c = e.yAlign,
                    u = t.x,
                    m = t.y,
                    d = a.width,
                    g = a.height,
                    y = e.cornerRadius;
                r.beginPath(), r.moveTo(u + y, m), c === "top" && this.drawCaret(t, a), r.lineTo(u + d - y, m), r.quadraticCurveTo(u + d, m, u + d, m + y), c === "center" && s === "right" && this.drawCaret(t, a), r.lineTo(u + d, m + g - y), r.quadraticCurveTo(u + d, m + g, u + d - y, m + g), c === "bottom" && this.drawCaret(t, a), r.lineTo(u + y, m + g), r.quadraticCurveTo(u, m + g, u, m + g - y), c === "center" && s === "left" && this.drawCaret(t, a), r.lineTo(u, m + y), r.quadraticCurveTo(u, m, u + y, m), r.closePath(), r.fill(), e.borderWidth > 0 && r.stroke()
            },
            draw: function() {
                var t = this._chart.ctx,
                    e = this._view;
                if (e.opacity !== 0) {
                    var r = {
                            width: e.width,
                            height: e.height
                        },
                        a = {
                            x: e.x,
                            y: e.y
                        },
                        s = Math.abs(e.opacity < .001) ? 0 : e.opacity,
                        c = e.title.length || e.beforeBody.length || e.body.length || e.afterBody.length || e.footer.length;
                    this._options.enabled && c && (t.save(), t.globalAlpha = s, this.drawBackground(a, e, t, r), a.y += e.yPadding, x.rtl.overrideTextDirection(t, e.textDirection), this.drawTitle(a, e, t), this.drawBody(a, e, t), this.drawFooter(a, e, t), x.rtl.restoreTextDirection(t, e.textDirection), t.restore())
                }
            },
            handleEvent: function(t) {
                var e = this,
                    r = e._options,
                    a = !1;
                return e._lastActive = e._lastActive || [], t.type === "mouseout" ? e._active = [] : (e._active = e._chart.getElementsAtEventForMode(t, r.mode, r), r.reverse && e._active.reverse()), (a = !x.arrayEquals(e._active, e._lastActive)) && (e._lastActive = e._active, (r.enabled || r.custom) && (e._eventPosition = {
                    x: t.x,
                    y: t.y
                }, e.update(!0), e.pivot())), a
            }
        }),
        Dc = Ko,
        Pa = Tc;
    Pa.positioners = Dc;
    var Ta = x.valueOrDefault;

    function es() {
        return x.merge(Object.create(null), [].slice.call(arguments), {
            merger: function(t, e, r, a) {
                if (t === "xAxes" || t === "yAxes") {
                    var s, c, u, m = r[t].length;
                    for (e[t] || (e[t] = []), s = 0; s < m; ++s) u = r[t][s], c = Ta(u.type, t === "xAxes" ? "category" : "linear"), s >= e[t].length && e[t].push({}), !e[t][s].type || u.type && u.type !== e[t][s].type ? x.merge(e[t][s], [Br.getScaleDefaults(c), u]) : x.merge(e[t][s], u)
                } else x._merger(t, e, r, a)
            }
        })
    }

    function Da() {
        return x.merge(Object.create(null), [].slice.call(arguments), {
            merger: function(t, e, r, a) {
                var s = e[t] || Object.create(null),
                    c = r[t];
                t === "scales" ? e[t] = es(s, c) : t === "scale" ? e[t] = x.merge(s, [Br.getScaleDefaults(c.type), c]) : x._merger(t, e, r, a)
            }
        })
    }

    function Oc(t) {
        var e = (t = t || Object.create(null)).data = t.data || {};
        return e.datasets = e.datasets || [], e.labels = e.labels || [], t.options = Da(K.global, K[t.type], t.options || {}), t
    }

    function Ac(t) {
        var e = t.options;
        x.each(t.scales, function(r) {
            Be.removeBox(t, r)
        }), e = Da(K.global, K[t.config.type], e), t.options = t.config.options = e, t.ensureScalesHaveIDs(), t.buildOrUpdateScales(), t.tooltip._options = e.tooltips, t.tooltip.initialize()
    }

    function ns(t, e, r) {
        var a, s = function(c) {
            return c.id === a
        };
        do a = e + r++; while (x.findIndex(t, s) >= 0);
        return a
    }

    function rs(t) {
        return t === "top" || t === "bottom"
    }

    function is(t, e) {
        return function(r, a) {
            return r[t] === a[t] ? r[e] - a[e] : r[t] - a[t]
        }
    }
    K._set("global", {
        elements: {},
        events: ["mousemove", "mouseout", "click", "touchstart", "touchmove"],
        hover: {
            onHover: null,
            mode: "nearest",
            intersect: !0,
            animationDuration: 400
        },
        onClick: null,
        maintainAspectRatio: !0,
        responsive: !0,
        responsiveAnimationDuration: 0
    });
    var Pn = function(t, e) {
        return this.construct(t, e), this
    };
    x.extend(Pn.prototype, {
        construct: function(t, e) {
            var r = this;
            e = Oc(e);
            var a = dr.acquireContext(t, e),
                s = a && a.canvas,
                c = s && s.height,
                u = s && s.width;
            r.id = x.uid(), r.ctx = a, r.canvas = s, r.config = e, r.width = u, r.height = c, r.aspectRatio = c ? u / c : null, r.options = e.options, r._bufferedRender = !1, r._layers = [], r.chart = r, r.controller = r, Pn.instances[r.id] = r, Object.defineProperty(r, "data", {
                get: function() {
                    return r.config.data
                },
                set: function(m) {
                    r.config.data = m
                }
            }), a && s && (r.initialize(), r.update())
        },
        initialize: function() {
            var t = this;
            return Bt.notify(t, "beforeInit"), x.retinaScale(t, t.options.devicePixelRatio), t.bindEvents(), t.options.responsive && t.resize(!0), t.initToolTip(), Bt.notify(t, "afterInit"), t
        },
        clear: function() {
            return x.canvas.clear(this), this
        },
        stop: function() {
            return rr.cancelAnimation(this), this
        },
        resize: function(t) {
            var e = this,
                r = e.options,
                a = e.canvas,
                s = r.maintainAspectRatio && e.aspectRatio || null,
                c = Math.max(0, Math.floor(x.getMaximumWidth(a))),
                u = Math.max(0, Math.floor(s ? c / s : x.getMaximumHeight(a)));
            if ((e.width !== c || e.height !== u) && (a.width = e.width = c, a.height = e.height = u, a.style.width = c + "px", a.style.height = u + "px", x.retinaScale(e, r.devicePixelRatio), !t)) {
                var m = {
                    width: c,
                    height: u
                };
                Bt.notify(e, "resize", [m]), r.onResize && r.onResize(e, m), e.stop(), e.update({
                    duration: r.responsiveAnimationDuration
                })
            }
        },
        ensureScalesHaveIDs: function() {
            var t = this.options,
                e = t.scales || {},
                r = t.scale;
            x.each(e.xAxes, function(a, s) {
                a.id || (a.id = ns(e.xAxes, "x-axis-", s))
            }), x.each(e.yAxes, function(a, s) {
                a.id || (a.id = ns(e.yAxes, "y-axis-", s))
            }), r && (r.id = r.id || "scale")
        },
        buildOrUpdateScales: function() {
            var t = this,
                e = t.options,
                r = t.scales || {},
                a = [],
                s = Object.keys(r).reduce(function(c, u) {
                    return c[u] = !1, c
                }, {});
            e.scales && (a = a.concat((e.scales.xAxes || []).map(function(c) {
                return {
                    options: c,
                    dtype: "category",
                    dposition: "bottom"
                }
            }), (e.scales.yAxes || []).map(function(c) {
                return {
                    options: c,
                    dtype: "linear",
                    dposition: "left"
                }
            }))), e.scale && a.push({
                options: e.scale,
                dtype: "radialLinear",
                isDefault: !0,
                dposition: "chartArea"
            }), x.each(a, function(c) {
                var u = c.options,
                    m = u.id,
                    d = Ta(u.type, c.dtype);
                rs(u.position) !== rs(c.dposition) && (u.position = c.dposition), s[m] = !0;
                var g = null;
                if (m in r && r[m].type === d)(g = r[m]).options = u, g.ctx = t.ctx, g.chart = t;
                else {
                    var y = Br.getScaleConstructor(d);
                    if (!y) return;
                    g = new y({
                        id: m,
                        type: d,
                        options: u,
                        ctx: t.ctx,
                        chart: t
                    }), r[g.id] = g
                }
                g.mergeTicksOptions(), c.isDefault && (t.scale = g)
            }), x.each(s, function(c, u) {
                c || delete r[u]
            }), t.scales = r, Br.addScalesToLayout(this)
        },
        buildOrUpdateControllers: function() {
            var t, e, r = this,
                a = [],
                s = r.data.datasets;
            for (t = 0, e = s.length; t < e; t++) {
                var c = s[t],
                    u = r.getDatasetMeta(t),
                    m = c.type || r.config.type;
                if (u.type && u.type !== m && (r.destroyDatasetMeta(t), u = r.getDatasetMeta(t)), u.type = m, u.order = c.order || 0, u.index = t, u.controller) u.controller.updateIndex(t), u.controller.linkScales();
                else {
                    var d = lr[u.type];
                    if (d === void 0) throw new Error('"' + u.type + '" is not a chart type.');
                    u.controller = new d(r, t), a.push(u.controller)
                }
            }
            return a
        },
        resetElements: function() {
            var t = this;
            x.each(t.data.datasets, function(e, r) {
                t.getDatasetMeta(r).controller.reset()
            }, t)
        },
        reset: function() {
            this.resetElements(), this.tooltip.initialize()
        },
        update: function(t) {
            var e, r, a = this;
            if (t && typeof t == "object" || (t = {
                    duration: t,
                    lazy: arguments[1]
                }), Ac(a), Bt._invalidate(a), Bt.notify(a, "beforeUpdate") !== !1) {
                a.tooltip._data = a.data;
                var s = a.buildOrUpdateControllers();
                for (e = 0, r = a.data.datasets.length; e < r; e++) a.getDatasetMeta(e).controller.buildOrUpdateElements();
                a.updateLayout(), a.options.animation && a.options.animation.duration && x.each(s, function(c) {
                    c.reset()
                }), a.updateDatasets(), a.tooltip.initialize(), a.lastActive = [], Bt.notify(a, "afterUpdate"), a._layers.sort(is("z", "_idx")), a._bufferedRender ? a._bufferedRequest = {
                    duration: t.duration,
                    easing: t.easing,
                    lazy: t.lazy
                } : a.render(t)
            }
        },
        updateLayout: function() {
            var t = this;
            Bt.notify(t, "beforeLayout") !== !1 && (Be.update(this, this.width, this.height), t._layers = [], x.each(t.boxes, function(e) {
                e._configure && e._configure(), t._layers.push.apply(t._layers, e._layers())
            }, t), t._layers.forEach(function(e, r) {
                e._idx = r
            }), Bt.notify(t, "afterScaleUpdate"), Bt.notify(t, "afterLayout"))
        },
        updateDatasets: function() {
            var t = this;
            if (Bt.notify(t, "beforeDatasetsUpdate") !== !1) {
                for (var e = 0, r = t.data.datasets.length; e < r; ++e) t.updateDataset(e);
                Bt.notify(t, "afterDatasetsUpdate")
            }
        },
        updateDataset: function(t) {
            var e = this,
                r = e.getDatasetMeta(t),
                a = {
                    meta: r,
                    index: t
                };
            Bt.notify(e, "beforeDatasetUpdate", [a]) !== !1 && (r.controller._update(), Bt.notify(e, "afterDatasetUpdate", [a]))
        },
        render: function(t) {
            var e = this;
            t && typeof t == "object" || (t = {
                duration: t,
                lazy: arguments[1]
            });
            var r = e.options.animation,
                a = Ta(t.duration, r && r.duration),
                s = t.lazy;
            if (Bt.notify(e, "beforeRender") !== !1) {
                var c = function(m) {
                    Bt.notify(e, "afterRender"), x.callback(r && r.onComplete, [m], e)
                };
                if (r && a) {
                    var u = new Wn({
                        numSteps: a / 16.66,
                        easing: t.easing || r.easing,
                        render: function(m, d) {
                            var g = x.easing.effects[d.easing],
                                y = d.currentStep,
                                b = y / d.numSteps;
                            m.draw(g(b), b, y)
                        },
                        onAnimationProgress: r.onProgress,
                        onAnimationComplete: c
                    });
                    rr.addAnimation(e, u, a, s)
                } else e.draw(), c(new Wn({
                    numSteps: 0,
                    chart: e
                }));
                return e
            }
        },
        draw: function(t) {
            var e, r, a = this;
            if (a.clear(), x.isNullOrUndef(t) && (t = 1), a.transition(t), !(a.width <= 0 || a.height <= 0) && Bt.notify(a, "beforeDraw", [t]) !== !1) {
                for (r = a._layers, e = 0; e < r.length && r[e].z <= 0; ++e) r[e].draw(a.chartArea);
                for (a.drawDatasets(t); e < r.length; ++e) r[e].draw(a.chartArea);
                a._drawTooltip(t), Bt.notify(a, "afterDraw", [t])
            }
        },
        transition: function(t) {
            for (var e = this, r = 0, a = (e.data.datasets || []).length; r < a; ++r) e.isDatasetVisible(r) && e.getDatasetMeta(r).controller.transition(t);
            e.tooltip.transition(t)
        },
        _getSortedDatasetMetas: function(t) {
            var e, r, a = this,
                s = [];
            for (e = 0, r = (a.data.datasets || []).length; e < r; ++e) t && !a.isDatasetVisible(e) || s.push(a.getDatasetMeta(e));
            return s.sort(is("order", "index")), s
        },
        _getSortedVisibleDatasetMetas: function() {
            return this._getSortedDatasetMetas(!0)
        },
        drawDatasets: function(t) {
            var e, r, a = this;
            if (Bt.notify(a, "beforeDatasetsDraw", [t]) !== !1) {
                for (r = (e = a._getSortedVisibleDatasetMetas()).length - 1; r >= 0; --r) a.drawDataset(e[r], t);
                Bt.notify(a, "afterDatasetsDraw", [t])
            }
        },
        drawDataset: function(t, e) {
            var r = this,
                a = {
                    meta: t,
                    index: t.index,
                    easingValue: e
                };
            Bt.notify(r, "beforeDatasetDraw", [a]) !== !1 && (t.controller.draw(e), Bt.notify(r, "afterDatasetDraw", [a]))
        },
        _drawTooltip: function(t) {
            var e = this,
                r = e.tooltip,
                a = {
                    tooltip: r,
                    easingValue: t
                };
            Bt.notify(e, "beforeTooltipDraw", [a]) !== !1 && (r.draw(), Bt.notify(e, "afterTooltipDraw", [a]))
        },
        getElementAtEvent: function(t) {
            return ur.modes.single(this, t)
        },
        getElementsAtEvent: function(t) {
            return ur.modes.label(this, t, {
                intersect: !0
            })
        },
        getElementsAtXAxis: function(t) {
            return ur.modes["x-axis"](this, t, {
                intersect: !0
            })
        },
        getElementsAtEventForMode: function(t, e, r) {
            var a = ur.modes[e];
            return typeof a == "function" ? a(this, t, r) : []
        },
        getDatasetAtEvent: function(t) {
            return ur.modes.dataset(this, t, {
                intersect: !0
            })
        },
        getDatasetMeta: function(t) {
            var e = this,
                r = e.data.datasets[t];
            r._meta || (r._meta = {});
            var a = r._meta[e.id];
            return a || (a = r._meta[e.id] = {
                type: null,
                data: [],
                dataset: null,
                controller: null,
                hidden: null,
                xAxisID: null,
                yAxisID: null,
                order: r.order || 0,
                index: t
            }), a
        },
        getVisibleDatasetCount: function() {
            for (var t = 0, e = 0, r = this.data.datasets.length; e < r; ++e) this.isDatasetVisible(e) && t++;
            return t
        },
        isDatasetVisible: function(t) {
            var e = this.getDatasetMeta(t);
            return typeof e.hidden == "boolean" ? !e.hidden : !this.data.datasets[t].hidden
        },
        generateLegend: function() {
            return this.options.legendCallback(this)
        },
        destroyDatasetMeta: function(t) {
            var e = this.id,
                r = this.data.datasets[t],
                a = r._meta && r._meta[e];
            a && (a.controller.destroy(), delete r._meta[e])
        },
        destroy: function() {
            var t, e, r = this,
                a = r.canvas;
            for (r.stop(), t = 0, e = r.data.datasets.length; t < e; ++t) r.destroyDatasetMeta(t);
            a && (r.unbindEvents(), x.canvas.clear(r), dr.releaseContext(r.ctx), r.canvas = null, r.ctx = null), Bt.notify(r, "destroy"), delete Pn.instances[r.id]
        },
        toBase64Image: function() {
            return this.canvas.toDataURL.apply(this.canvas, arguments)
        },
        initToolTip: function() {
            var t = this;
            t.tooltip = new Pa({
                _chart: t,
                _chartInstance: t,
                _data: t.data,
                _options: t.options.tooltips
            }, t)
        },
        bindEvents: function() {
            var t = this,
                e = t._listeners = {},
                r = function() {
                    t.eventHandler.apply(t, arguments)
                };
            x.each(t.options.events, function(a) {
                dr.addEventListener(t, a, r), e[a] = r
            }), t.options.responsive && (r = function() {
                t.resize()
            }, dr.addEventListener(t, "resize", r), e.resize = r)
        },
        unbindEvents: function() {
            var t = this,
                e = t._listeners;
            e && (delete t._listeners, x.each(e, function(r, a) {
                dr.removeEventListener(t, a, r)
            }))
        },
        updateHoverStyle: function(t, e, r) {
            var a, s, c, u = r ? "set" : "remove";
            for (s = 0, c = t.length; s < c; ++s)(a = t[s]) && this.getDatasetMeta(a._datasetIndex).controller[u + "HoverStyle"](a);
            e === "dataset" && this.getDatasetMeta(t[0]._datasetIndex).controller["_" + u + "DatasetHoverStyle"]()
        },
        eventHandler: function(t) {
            var e = this,
                r = e.tooltip;
            if (Bt.notify(e, "beforeEvent", [t]) !== !1) {
                e._bufferedRender = !0, e._bufferedRequest = null;
                var a = e.handleEvent(t);
                r && (a = r._start ? r.handleEvent(t) : a | r.handleEvent(t)), Bt.notify(e, "afterEvent", [t]);
                var s = e._bufferedRequest;
                return s ? e.render(s) : a && !e.animating && (e.stop(), e.render({
                    duration: e.options.hover.animationDuration,
                    lazy: !0
                })), e._bufferedRender = !1, e._bufferedRequest = null, e
            }
        },
        handleEvent: function(t) {
            var e = this,
                r = e.options || {},
                a = r.hover,
                s = !1;
            return e.lastActive = e.lastActive || [], t.type === "mouseout" ? e.active = [] : e.active = e.getElementsAtEventForMode(t, a.mode, a), x.callback(r.onHover || r.hover.onHover, [t.native, e.active], e), t.type !== "mouseup" && t.type !== "click" || r.onClick && r.onClick.call(e, t.native, e.active), e.lastActive.length && e.updateHoverStyle(e.lastActive, a.mode, !1), e.active.length && a.mode && e.updateHoverStyle(e.active, a.mode, !0), s = !x.arrayEquals(e.active, e.lastActive), e.lastActive = e.active, s
        }
    }), Pn.instances = {};
    var xt = Pn;
    Pn.Controller = Pn, Pn.types = {}, x.configMerge = Da, x.scaleMerge = es;
    var Rc = function() {
        function t(a, s, c) {
            var u;
            return typeof a == "string" ? (u = parseInt(a, 10), a.indexOf("%") !== -1 && (u = u / 100 * s.parentNode[c])) : u = a, u
        }

        function e(a) {
            return a != null && a !== "none"
        }

        function r(a, s, c) {
            var u = document.defaultView,
                m = x._getParentNode(a),
                d = u.getComputedStyle(a)[s],
                g = u.getComputedStyle(m)[s],
                y = e(d),
                b = e(g),
                _ = Number.POSITIVE_INFINITY;
            return y || b ? Math.min(y ? t(d, a, c) : _, b ? t(g, m, c) : _) : "none"
        }
        x.where = function(a, s) {
            if (x.isArray(a) && Array.prototype.filter) return a.filter(s);
            var c = [];
            return x.each(a, function(u) {
                s(u) && c.push(u)
            }), c
        }, x.findIndex = Array.prototype.findIndex ? function(a, s, c) {
            return a.findIndex(s, c)
        } : function(a, s, c) {
            c = c === void 0 ? a : c;
            for (var u = 0, m = a.length; u < m; ++u)
                if (s.call(c, a[u], u, a)) return u;
            return -1
        }, x.findNextWhere = function(a, s, c) {
            x.isNullOrUndef(c) && (c = -1);
            for (var u = c + 1; u < a.length; u++) {
                var m = a[u];
                if (s(m)) return m
            }
        }, x.findPreviousWhere = function(a, s, c) {
            x.isNullOrUndef(c) && (c = a.length);
            for (var u = c - 1; u >= 0; u--) {
                var m = a[u];
                if (s(m)) return m
            }
        }, x.isNumber = function(a) {
            return !isNaN(parseFloat(a)) && isFinite(a)
        }, x.almostEquals = function(a, s, c) {
            return Math.abs(a - s) < c
        }, x.almostWhole = function(a, s) {
            var c = Math.round(a);
            return c - s <= a && c + s >= a
        }, x.max = function(a) {
            return a.reduce(function(s, c) {
                return isNaN(c) ? s : Math.max(s, c)
            }, Number.NEGATIVE_INFINITY)
        }, x.min = function(a) {
            return a.reduce(function(s, c) {
                return isNaN(c) ? s : Math.min(s, c)
            }, Number.POSITIVE_INFINITY)
        }, x.sign = Math.sign ? function(a) {
            return Math.sign(a)
        } : function(a) {
            return (a = +a) == 0 || isNaN(a) ? a : a > 0 ? 1 : -1
        }, x.toRadians = function(a) {
            return a * (Math.PI / 180)
        }, x.toDegrees = function(a) {
            return a * (180 / Math.PI)
        }, x._decimalPlaces = function(a) {
            if (x.isFinite(a)) {
                for (var s = 1, c = 0; Math.round(a * s) / s !== a;) s *= 10, c++;
                return c
            }
        }, x.getAngleFromPoint = function(a, s) {
            var c = s.x - a.x,
                u = s.y - a.y,
                m = Math.sqrt(c * c + u * u),
                d = Math.atan2(u, c);
            return d < -.5 * Math.PI && (d += 2 * Math.PI), {
                angle: d,
                distance: m
            }
        }, x.distanceBetweenPoints = function(a, s) {
            return Math.sqrt(Math.pow(s.x - a.x, 2) + Math.pow(s.y - a.y, 2))
        }, x.aliasPixel = function(a) {
            return a % 2 == 0 ? 0 : .5
        }, x._alignPixel = function(a, s, c) {
            var u = a.currentDevicePixelRatio,
                m = c / 2;
            return Math.round((s - m) * u) / u + m
        }, x.splineCurve = function(a, s, c, u) {
            var m = a.skip ? s : a,
                d = s,
                g = c.skip ? s : c,
                y = Math.sqrt(Math.pow(d.x - m.x, 2) + Math.pow(d.y - m.y, 2)),
                b = Math.sqrt(Math.pow(g.x - d.x, 2) + Math.pow(g.y - d.y, 2)),
                _ = y / (y + b),
                P = b / (y + b),
                D = u * (_ = isNaN(_) ? 0 : _),
                R = u * (P = isNaN(P) ? 0 : P);
            return {
                previous: {
                    x: d.x - D * (g.x - m.x),
                    y: d.y - D * (g.y - m.y)
                },
                next: {
                    x: d.x + R * (g.x - m.x),
                    y: d.y + R * (g.y - m.y)
                }
            }
        }, x.EPSILON = Number.EPSILON || 1e-14, x.splineCurveMonotone = function(a) {
            var s, c, u, m, d, g, y, b, _, P = (a || []).map(function(E) {
                    return {
                        model: E._model,
                        deltaK: 0,
                        mK: 0
                    }
                }),
                D = P.length;
            for (s = 0; s < D; ++s)
                if (!(u = P[s]).model.skip) {
                    if (c = s > 0 ? P[s - 1] : null, (m = s < D - 1 ? P[s + 1] : null) && !m.model.skip) {
                        var R = m.model.x - u.model.x;
                        u.deltaK = R !== 0 ? (m.model.y - u.model.y) / R : 0
                    }!c || c.model.skip ? u.mK = u.deltaK : !m || m.model.skip ? u.mK = c.deltaK : this.sign(c.deltaK) !== this.sign(u.deltaK) ? u.mK = 0 : u.mK = (c.deltaK + u.deltaK) / 2
                }
            for (s = 0; s < D - 1; ++s) u = P[s], m = P[s + 1], u.model.skip || m.model.skip || (x.almostEquals(u.deltaK, 0, this.EPSILON) ? u.mK = m.mK = 0 : (d = u.mK / u.deltaK, g = m.mK / u.deltaK, (b = Math.pow(d, 2) + Math.pow(g, 2)) <= 9 || (y = 3 / Math.sqrt(b), u.mK = d * y * u.deltaK, m.mK = g * y * u.deltaK)));
            for (s = 0; s < D; ++s)(u = P[s]).model.skip || (c = s > 0 ? P[s - 1] : null, m = s < D - 1 ? P[s + 1] : null, c && !c.model.skip && (_ = (u.model.x - c.model.x) / 3, u.model.controlPointPreviousX = u.model.x - _, u.model.controlPointPreviousY = u.model.y - _ * u.mK), m && !m.model.skip && (_ = (m.model.x - u.model.x) / 3, u.model.controlPointNextX = u.model.x + _, u.model.controlPointNextY = u.model.y + _ * u.mK))
        }, x.nextItem = function(a, s, c) {
            return c ? s >= a.length - 1 ? a[0] : a[s + 1] : s >= a.length - 1 ? a[a.length - 1] : a[s + 1]
        }, x.previousItem = function(a, s, c) {
            return c ? s <= 0 ? a[a.length - 1] : a[s - 1] : s <= 0 ? a[0] : a[s - 1]
        }, x.niceNum = function(a, s) {
            var c = Math.floor(x.log10(a)),
                u = a / Math.pow(10, c);
            return (s ? u < 1.5 ? 1 : u < 3 ? 2 : u < 7 ? 5 : 10 : u <= 1 ? 1 : u <= 2 ? 2 : u <= 5 ? 5 : 10) * Math.pow(10, c)
        }, x.requestAnimFrame = typeof window == "undefined" ? function(a) {
            a()
        } : window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(a) {
            return window.setTimeout(a, 1e3 / 60)
        }, x.getRelativePosition = function(a, s) {
            var c, u, m = a.originalEvent || a,
                d = a.target || a.srcElement,
                g = d.getBoundingClientRect(),
                y = m.touches;
            y && y.length > 0 ? (c = y[0].clientX, u = y[0].clientY) : (c = m.clientX, u = m.clientY);
            var b = parseFloat(x.getStyle(d, "padding-left")),
                _ = parseFloat(x.getStyle(d, "padding-top")),
                P = parseFloat(x.getStyle(d, "padding-right")),
                D = parseFloat(x.getStyle(d, "padding-bottom")),
                R = g.right - g.left - b - P,
                E = g.bottom - g.top - _ - D;
            return {
                x: c = Math.round((c - g.left - b) / R * d.width / s.currentDevicePixelRatio),
                y: u = Math.round((u - g.top - _) / E * d.height / s.currentDevicePixelRatio)
            }
        }, x.getConstraintWidth = function(a) {
            return r(a, "max-width", "clientWidth")
        }, x.getConstraintHeight = function(a) {
            return r(a, "max-height", "clientHeight")
        }, x._calculatePadding = function(a, s, c) {
            return (s = x.getStyle(a, s)).indexOf("%") > -1 ? c * parseInt(s, 10) / 100 : parseInt(s, 10)
        }, x._getParentNode = function(a) {
            var s = a.parentNode;
            return s && s.toString() === "[object ShadowRoot]" && (s = s.host), s
        }, x.getMaximumWidth = function(a) {
            var s = x._getParentNode(a);
            if (!s) return a.clientWidth;
            var c = s.clientWidth,
                u = c - x._calculatePadding(s, "padding-left", c) - x._calculatePadding(s, "padding-right", c),
                m = x.getConstraintWidth(a);
            return isNaN(m) ? u : Math.min(u, m)
        }, x.getMaximumHeight = function(a) {
            var s = x._getParentNode(a);
            if (!s) return a.clientHeight;
            var c = s.clientHeight,
                u = c - x._calculatePadding(s, "padding-top", c) - x._calculatePadding(s, "padding-bottom", c),
                m = x.getConstraintHeight(a);
            return isNaN(m) ? u : Math.min(u, m)
        }, x.getStyle = function(a, s) {
            return a.currentStyle ? a.currentStyle[s] : document.defaultView.getComputedStyle(a, null).getPropertyValue(s)
        }, x.retinaScale = function(a, s) {
            var c = a.currentDevicePixelRatio = s || typeof window != "undefined" && window.devicePixelRatio || 1;
            if (c !== 1) {
                var u = a.canvas,
                    m = a.height,
                    d = a.width;
                u.height = m * c, u.width = d * c, a.ctx.scale(c, c), u.style.height || u.style.width || (u.style.height = m + "px", u.style.width = d + "px")
            }
        }, x.fontString = function(a, s, c) {
            return s + " " + a + "px " + c
        }, x.longestText = function(a, s, c, u) {
            var m = (u = u || {}).data = u.data || {},
                d = u.garbageCollect = u.garbageCollect || [];
            u.font !== s && (m = u.data = {}, d = u.garbageCollect = [], u.font = s), a.font = s;
            var g, y, b, _, P, D = 0,
                R = c.length;
            for (g = 0; g < R; g++)
                if ((_ = c[g]) != null && x.isArray(_) !== !0) D = x.measureText(a, m, d, D, _);
                else if (x.isArray(_))
                for (y = 0, b = _.length; y < b; y++)(P = _[y]) == null || x.isArray(P) || (D = x.measureText(a, m, d, D, P));
            var E = d.length / 2;
            if (E > c.length) {
                for (g = 0; g < E; g++) delete m[d[g]];
                d.splice(0, E)
            }
            return D
        }, x.measureText = function(a, s, c, u, m) {
            var d = s[m];
            return d || (d = s[m] = a.measureText(m).width, c.push(m)), d > u && (u = d), u
        }, x.numberOfLabelLines = function(a) {
            var s = 1;
            return x.each(a, function(c) {
                x.isArray(c) && c.length > s && (s = c.length)
            }), s
        }, x.color = be ? function(a) {
            return a instanceof CanvasGradient && (a = K.global.defaultColor), be(a)
        } : function(a) {
            return a
        }, x.getHoverColor = function(a) {
            return a instanceof CanvasPattern || a instanceof CanvasGradient ? a : x.color(a).saturate(.5).darken(.1).rgbString()
        }
    };

    function Hn() {
        throw new Error("This method is not implemented: either no adapter can be found or an incomplete integration was provided.")
    }

    function wi(t) {
        this.options = t || {}
    }
    x.extend(wi.prototype, {
        formats: Hn,
        parse: Hn,
        format: Hn,
        add: Hn,
        diff: Hn,
        startOf: Hn,
        endOf: Hn,
        _create: function(t) {
            return t
        }
    }), wi.override = function(t) {
        x.extend(wi.prototype, t)
    };
    var Oa = {
            _date: wi
        },
        Er = {
            formatters: {
                values: function(t) {
                    return x.isArray(t) ? t : "" + t
                },
                linear: function(t, e, r) {
                    var a = r.length > 3 ? r[2] - r[1] : r[1] - r[0];
                    Math.abs(a) > 1 && t !== Math.floor(t) && (a = t - Math.floor(t));
                    var s = x.log10(Math.abs(a)),
                        c = "";
                    if (t !== 0)
                        if (Math.max(Math.abs(r[0]), Math.abs(r[r.length - 1])) < 1e-4) {
                            var u = x.log10(Math.abs(t)),
                                m = Math.floor(u) - Math.floor(s);
                            m = Math.max(Math.min(m, 20), 0), c = t.toExponential(m)
                        } else {
                            var d = -1 * Math.floor(s);
                            d = Math.max(Math.min(d, 20), 0), c = t.toFixed(d)
                        }
                    else c = "0";
                    return c
                },
                logarithmic: function(t, e, r) {
                    var a = t / Math.pow(10, Math.floor(x.log10(t)));
                    return t === 0 ? "0" : a === 1 || a === 2 || a === 5 || e === 0 || e === r.length - 1 ? t.toExponential() : ""
                }
            }
        },
        Un = x.isArray,
        Lr = x.isNullOrUndef,
        Gn = x.valueOrDefault,
        hr = x.valueAtIndexOrDefault;

    function Bc(t, e) {
        for (var r = [], a = t.length / e, s = 0, c = t.length; s < c; s += a) r.push(t[Math.floor(s)]);
        return r
    }

    function Ec(t, e, r) {
        var a, s = t.getTicks().length,
            c = Math.min(e, s - 1),
            u = t.getPixelForTick(c),
            m = t._startPixel,
            d = t._endPixel,
            g = 1e-6;
        if (!(r && (a = s === 1 ? Math.max(u - m, d - u) : e === 0 ? (t.getPixelForTick(1) - u) / 2 : (u - t.getPixelForTick(c - 1)) / 2, (u += c < e ? a : -a) < m - g || u > d + g))) return u
    }

    function Lc(t, e) {
        x.each(t, function(r) {
            var a, s = r.gc,
                c = s.length / 2;
            if (c > e) {
                for (a = 0; a < c; ++a) delete r.data[s[a]];
                s.splice(0, c)
            }
        })
    }

    function Fc(t, e, r, a) {
        var s, c, u, m, d, g, y, b, _, P, D, R, E, q = r.length,
            Q = [],
            lt = [],
            pt = [],
            mt = 0,
            At = 0;
        for (s = 0; s < q; ++s) {
            if (m = r[s].label, d = r[s].major ? e.major : e.minor, t.font = g = d.string, y = a[g] = a[g] || {
                    data: {},
                    gc: []
                }, b = d.lineHeight, _ = P = 0, Lr(m) || Un(m)) {
                if (Un(m))
                    for (c = 0, u = m.length; c < u; ++c) D = m[c], Lr(D) || Un(D) || (_ = x.measureText(t, y.data, y.gc, _, D), P += b)
            } else _ = x.measureText(t, y.data, y.gc, _, m), P = b;
            Q.push(_), lt.push(P), pt.push(b / 2), mt = Math.max(_, mt), At = Math.max(P, At)
        }

        function It(Lt) {
            return {
                width: Q[Lt] || 0,
                height: lt[Lt] || 0,
                offset: pt[Lt] || 0
            }
        }
        return Lc(a, q), R = Q.indexOf(mt), E = lt.indexOf(At), {
            first: It(0),
            last: It(q - 1),
            widest: It(R),
            highest: It(E)
        }
    }

    function Fr(t) {
        return t.drawTicks ? t.tickMarkLength : 0
    }

    function Aa(t) {
        var e, r;
        return t.display ? (e = x.options._parseFont(t), r = x.options.toPadding(t.padding), e.lineHeight + r.height) : 0
    }

    function as(t, e) {
        return x.extend(x.options._parseFont({
            fontFamily: Gn(e.fontFamily, t.fontFamily),
            fontSize: Gn(e.fontSize, t.fontSize),
            fontStyle: Gn(e.fontStyle, t.fontStyle),
            lineHeight: Gn(e.lineHeight, t.lineHeight)
        }), {
            color: x.options.resolve([e.fontColor, t.fontColor, K.global.defaultFontColor])
        })
    }

    function Ra(t) {
        var e = as(t, t.minor);
        return {
            minor: e,
            major: t.major.enabled ? as(t, t.major) : e
        }
    }

    function Ba(t) {
        var e, r, a, s = [];
        for (r = 0, a = t.length; r < a; ++r)(e = t[r])._index !== void 0 && s.push(e);
        return s
    }

    function Wc(t) {
        var e, r, a = t.length;
        if (a < 2) return !1;
        for (r = t[0], e = 1; e < a; ++e)
            if (t[e] - t[e - 1] !== r) return !1;
        return r
    }

    function zc(t, e, r, a) {
        var s, c, u, m, d = Wc(t),
            g = (e.length - 1) / a;
        if (!d) return Math.max(g, 1);
        for (u = 0, m = (s = x.math._factorize(d)).length - 1; u < m; u++)
            if ((c = s[u]) > g) return c;
        return Math.max(g, 1)
    }

    function Yc(t) {
        var e, r, a = [];
        for (e = 0, r = t.length; e < r; e++) t[e].major && a.push(e);
        return a
    }

    function Vc(t, e, r) {
        var a, s, c = 0,
            u = e[0];
        for (r = Math.ceil(r), a = 0; a < t.length; a++) s = t[a], a === u ? (s._index = a, u = e[++c * r]) : delete s.label
    }

    function _i(t, e, r, a) {
        var s, c, u, m, d = Gn(r, 0),
            g = Math.min(Gn(a, t.length), t.length),
            y = 0;
        for (e = Math.ceil(e), a && (e = (s = a - r) / Math.floor(s / e)), m = d; m < 0;) y++, m = Math.round(d + y * e);
        for (c = Math.max(d, 0); c < g; c++) u = t[c], c === m ? (u._index = c, y++, m = Math.round(d + y * e)) : delete u.label
    }
    K._set("scale", {
        display: !0,
        position: "left",
        offset: !1,
        gridLines: {
            display: !0,
            color: "rgba(0,0,0,0.1)",
            lineWidth: 1,
            drawBorder: !0,
            drawOnChartArea: !0,
            drawTicks: !0,
            tickMarkLength: 10,
            zeroLineWidth: 1,
            zeroLineColor: "rgba(0,0,0,0.25)",
            zeroLineBorderDash: [],
            zeroLineBorderDashOffset: 0,
            offsetGridLines: !1,
            borderDash: [],
            borderDashOffset: 0
        },
        scaleLabel: {
            display: !1,
            labelString: "",
            padding: {
                top: 4,
                bottom: 4
            }
        },
        ticks: {
            beginAtZero: !1,
            minRotation: 0,
            maxRotation: 50,
            mirror: !1,
            padding: 0,
            reverse: !1,
            display: !0,
            autoSkip: !0,
            autoSkipPadding: 0,
            labelOffset: 0,
            callback: Er.formatters.values,
            minor: {},
            major: {}
        }
    });
    var Ea = Ae.extend({
        zeroLineIndex: 0,
        getPadding: function() {
            var t = this;
            return {
                left: t.paddingLeft || 0,
                top: t.paddingTop || 0,
                right: t.paddingRight || 0,
                bottom: t.paddingBottom || 0
            }
        },
        getTicks: function() {
            return this._ticks
        },
        _getLabels: function() {
            var t = this.chart.data;
            return this.options.labels || (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels || []
        },
        mergeTicksOptions: function() {},
        beforeUpdate: function() {
            x.callback(this.options.beforeUpdate, [this])
        },
        update: function(t, e, r) {
            var a, s, c, u, m, d = this,
                g = d.options.ticks,
                y = g.sampleSize;
            if (d.beforeUpdate(), d.maxWidth = t, d.maxHeight = e, d.margins = x.extend({
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0
                }, r), d._ticks = null, d.ticks = null, d._labelSizes = null, d._maxLabelLines = 0, d.longestLabelWidth = 0, d.longestTextCache = d.longestTextCache || {}, d._gridLineItems = null, d._labelItems = null, d.beforeSetDimensions(), d.setDimensions(), d.afterSetDimensions(), d.beforeDataLimits(), d.determineDataLimits(), d.afterDataLimits(), d.beforeBuildTicks(), u = d.buildTicks() || [], (!(u = d.afterBuildTicks(u) || u) || !u.length) && d.ticks)
                for (u = [], a = 0, s = d.ticks.length; a < s; ++a) u.push({
                    value: d.ticks[a],
                    major: !1
                });
            return d._ticks = u, m = y < u.length, c = d._convertTicksToLabels(m ? Bc(u, y) : u), d._configure(), d.beforeCalculateTickRotation(), d.calculateTickRotation(), d.afterCalculateTickRotation(), d.beforeFit(), d.fit(), d.afterFit(), d._ticksToDraw = g.display && (g.autoSkip || g.source === "auto") ? d._autoSkip(u) : u, m && (c = d._convertTicksToLabels(d._ticksToDraw)), d.ticks = c, d.afterUpdate(), d.minSize
        },
        _configure: function() {
            var t, e, r = this,
                a = r.options.ticks.reverse;
            r.isHorizontal() ? (t = r.left, e = r.right) : (t = r.top, e = r.bottom, a = !a), r._startPixel = t, r._endPixel = e, r._reversePixels = a, r._length = e - t
        },
        afterUpdate: function() {
            x.callback(this.options.afterUpdate, [this])
        },
        beforeSetDimensions: function() {
            x.callback(this.options.beforeSetDimensions, [this])
        },
        setDimensions: function() {
            var t = this;
            t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0
        },
        afterSetDimensions: function() {
            x.callback(this.options.afterSetDimensions, [this])
        },
        beforeDataLimits: function() {
            x.callback(this.options.beforeDataLimits, [this])
        },
        determineDataLimits: x.noop,
        afterDataLimits: function() {
            x.callback(this.options.afterDataLimits, [this])
        },
        beforeBuildTicks: function() {
            x.callback(this.options.beforeBuildTicks, [this])
        },
        buildTicks: x.noop,
        afterBuildTicks: function(t) {
            var e = this;
            return Un(t) && t.length ? x.callback(e.options.afterBuildTicks, [e, t]) : (e.ticks = x.callback(e.options.afterBuildTicks, [e, e.ticks]) || e.ticks, t)
        },
        beforeTickToLabelConversion: function() {
            x.callback(this.options.beforeTickToLabelConversion, [this])
        },
        convertTicksToLabels: function() {
            var t = this,
                e = t.options.ticks;
            t.ticks = t.ticks.map(e.userCallback || e.callback, this)
        },
        afterTickToLabelConversion: function() {
            x.callback(this.options.afterTickToLabelConversion, [this])
        },
        beforeCalculateTickRotation: function() {
            x.callback(this.options.beforeCalculateTickRotation, [this])
        },
        calculateTickRotation: function() {
            var t, e, r, a, s, c, u, m = this,
                d = m.options,
                g = d.ticks,
                y = m.getTicks().length,
                b = g.minRotation || 0,
                _ = g.maxRotation,
                P = b;
            !m._isVisible() || !g.display || b >= _ || y <= 1 || !m.isHorizontal() ? m.labelRotation = b : (e = (t = m._getLabelSizes()).widest.width, r = t.highest.height - t.highest.offset, a = Math.min(m.maxWidth, m.chart.width - e), e + 6 > (s = d.offset ? m.maxWidth / y : a / (y - 1)) && (s = a / (y - (d.offset ? .5 : 1)), c = m.maxHeight - Fr(d.gridLines) - g.padding - Aa(d.scaleLabel), u = Math.sqrt(e * e + r * r), P = x.toDegrees(Math.min(Math.asin(Math.min((t.highest.height + 6) / s, 1)), Math.asin(Math.min(c / u, 1)) - Math.asin(r / u))), P = Math.max(b, Math.min(_, P))), m.labelRotation = P)
        },
        afterCalculateTickRotation: function() {
            x.callback(this.options.afterCalculateTickRotation, [this])
        },
        beforeFit: function() {
            x.callback(this.options.beforeFit, [this])
        },
        fit: function() {
            var t = this,
                e = t.minSize = {
                    width: 0,
                    height: 0
                },
                r = t.chart,
                a = t.options,
                s = a.ticks,
                c = a.scaleLabel,
                u = a.gridLines,
                m = t._isVisible(),
                d = a.position === "bottom",
                g = t.isHorizontal();
            if (g ? e.width = t.maxWidth : m && (e.width = Fr(u) + Aa(c)), g ? m && (e.height = Fr(u) + Aa(c)) : e.height = t.maxHeight, s.display && m) {
                var y = Ra(s),
                    b = t._getLabelSizes(),
                    _ = b.first,
                    P = b.last,
                    D = b.widest,
                    R = b.highest,
                    E = .4 * y.minor.lineHeight,
                    q = s.padding;
                if (g) {
                    var Q = t.labelRotation !== 0,
                        lt = x.toRadians(t.labelRotation),
                        pt = Math.cos(lt),
                        mt = Math.sin(lt),
                        At = mt * D.width + pt * (R.height - (Q ? R.offset : 0)) + (Q ? 0 : E);
                    e.height = Math.min(t.maxHeight, e.height + At + q);
                    var It, Lt, qt = t.getPixelForTick(0) - t.left,
                        pe = t.right - t.getPixelForTick(t.getTicks().length - 1);
                    Q ? (It = d ? pt * _.width + mt * _.offset : mt * (_.height - _.offset), Lt = d ? mt * (P.height - P.offset) : pt * P.width + mt * P.offset) : (It = _.width / 2, Lt = P.width / 2), t.paddingLeft = Math.max((It - qt) * t.width / (t.width - qt), 0) + 3, t.paddingRight = Math.max((Lt - pe) * t.width / (t.width - pe), 0) + 3
                } else {
                    var ne = s.mirror ? 0 : D.width + q + E;
                    e.width = Math.min(t.maxWidth, e.width + ne), t.paddingTop = _.height / 2, t.paddingBottom = P.height / 2
                }
            }
            t.handleMargins(), g ? (t.width = t._length = r.width - t.margins.left - t.margins.right, t.height = e.height) : (t.width = e.width, t.height = t._length = r.height - t.margins.top - t.margins.bottom)
        },
        handleMargins: function() {
            var t = this;
            t.margins && (t.margins.left = Math.max(t.paddingLeft, t.margins.left), t.margins.top = Math.max(t.paddingTop, t.margins.top), t.margins.right = Math.max(t.paddingRight, t.margins.right), t.margins.bottom = Math.max(t.paddingBottom, t.margins.bottom))
        },
        afterFit: function() {
            x.callback(this.options.afterFit, [this])
        },
        isHorizontal: function() {
            var t = this.options.position;
            return t === "top" || t === "bottom"
        },
        isFullWidth: function() {
            return this.options.fullWidth
        },
        getRightValue: function(t) {
            if (Lr(t)) return NaN;
            if ((typeof t == "number" || t instanceof Number) && !isFinite(t)) return NaN;
            if (t) {
                if (this.isHorizontal()) {
                    if (t.x !== void 0) return this.getRightValue(t.x)
                } else if (t.y !== void 0) return this.getRightValue(t.y)
            }
            return t
        },
        _convertTicksToLabels: function(t) {
            var e, r, a, s = this;
            for (s.ticks = t.map(function(c) {
                    return c.value
                }), s.beforeTickToLabelConversion(), e = s.convertTicksToLabels(t) || s.ticks, s.afterTickToLabelConversion(), r = 0, a = t.length; r < a; ++r) t[r].label = e[r];
            return e
        },
        _getLabelSizes: function() {
            var t = this,
                e = t._labelSizes;
            return e || (t._labelSizes = e = Fc(t.ctx, Ra(t.options.ticks), t.getTicks(), t.longestTextCache), t.longestLabelWidth = e.widest.width), e
        },
        _parseValue: function(t) {
            var e, r, a, s;
            return Un(t) ? (e = +this.getRightValue(t[0]), r = +this.getRightValue(t[1]), a = Math.min(e, r), s = Math.max(e, r)) : (e = void 0, r = t = +this.getRightValue(t), a = t, s = t), {
                min: a,
                max: s,
                start: e,
                end: r
            }
        },
        _getScaleLabel: function(t) {
            var e = this._parseValue(t);
            return e.start !== void 0 ? "[" + e.start + ", " + e.end + "]" : +this.getRightValue(t)
        },
        getLabelForIndex: x.noop,
        getPixelForValue: x.noop,
        getValueForPixel: x.noop,
        getPixelForTick: function(t) {
            var e = this,
                r = e.options.offset,
                a = e._ticks.length,
                s = 1 / Math.max(a - (r ? 0 : 1), 1);
            return t < 0 || t > a - 1 ? null : e.getPixelForDecimal(t * s + (r ? s / 2 : 0))
        },
        getPixelForDecimal: function(t) {
            var e = this;
            return e._reversePixels && (t = 1 - t), e._startPixel + t * e._length
        },
        getDecimalForPixel: function(t) {
            var e = (t - this._startPixel) / this._length;
            return this._reversePixels ? 1 - e : e
        },
        getBasePixel: function() {
            return this.getPixelForValue(this.getBaseValue())
        },
        getBaseValue: function() {
            var t = this,
                e = t.min,
                r = t.max;
            return t.beginAtZero ? 0 : e < 0 && r < 0 ? r : e > 0 && r > 0 ? e : 0
        },
        _autoSkip: function(t) {
            var e, r, a, s, c = this,
                u = c.options.ticks,
                m = c._length,
                d = u.maxTicksLimit || m / c._tickSize() + 1,
                g = u.major.enabled ? Yc(t) : [],
                y = g.length,
                b = g[0],
                _ = g[y - 1];
            if (y > d) return Vc(t, g, y / d), Ba(t);
            if (a = zc(g, t, m, d), y > 0) {
                for (e = 0, r = y - 1; e < r; e++) _i(t, a, g[e], g[e + 1]);
                return s = y > 1 ? (_ - b) / (y - 1) : null, _i(t, a, x.isNullOrUndef(s) ? 0 : b - s, b), _i(t, a, _, x.isNullOrUndef(s) ? t.length : _ + s), Ba(t)
            }
            return _i(t, a), Ba(t)
        },
        _tickSize: function() {
            var t = this,
                e = t.options.ticks,
                r = x.toRadians(t.labelRotation),
                a = Math.abs(Math.cos(r)),
                s = Math.abs(Math.sin(r)),
                c = t._getLabelSizes(),
                u = e.autoSkipPadding || 0,
                m = c ? c.widest.width + u : 0,
                d = c ? c.highest.height + u : 0;
            return t.isHorizontal() ? d * a > m * s ? m / a : d / s : d * s < m * a ? d / a : m / s
        },
        _isVisible: function() {
            var t, e, r, a = this,
                s = a.chart,
                c = a.options.display;
            if (c !== "auto") return !!c;
            for (t = 0, e = s.data.datasets.length; t < e; ++t)
                if (s.isDatasetVisible(t) && ((r = s.getDatasetMeta(t)).xAxisID === a.id || r.yAxisID === a.id)) return !0;
            return !1
        },
        _computeGridLineItems: function(t) {
            var e, r, a, s, c, u, m, d, g, y, b, _, P, D, R, E, q, Q = this,
                lt = Q.chart,
                pt = Q.options,
                mt = pt.gridLines,
                At = pt.position,
                It = mt.offsetGridLines,
                Lt = Q.isHorizontal(),
                qt = Q._ticksToDraw,
                pe = qt.length + (It ? 1 : 0),
                ne = Fr(mt),
                re = [],
                ye = mt.drawBorder ? hr(mt.lineWidth, 0, 0) : 0,
                Ue = ye / 2,
                Ms = x._alignPixel,
                An = function(zu) {
                    return Ms(lt, zu, ye)
                };
            for (At === "top" ? (e = An(Q.bottom), m = Q.bottom - ne, g = e - Ue, b = An(t.top) + Ue, P = t.bottom) : At === "bottom" ? (e = An(Q.top), b = t.top, P = An(t.bottom) - Ue, m = e + Ue, g = Q.top + ne) : At === "left" ? (e = An(Q.right), u = Q.right - ne, d = e - Ue, y = An(t.left) + Ue, _ = t.right) : (e = An(Q.left), y = t.left, _ = An(t.right) - Ue, u = e + Ue, d = Q.left + ne), r = 0; r < pe; ++r) a = qt[r] || {}, Lr(a.label) && r < qt.length || (r === Q.zeroLineIndex && pt.offset === It ? (D = mt.zeroLineWidth, R = mt.zeroLineColor, E = mt.zeroLineBorderDash || [], q = mt.zeroLineBorderDashOffset || 0) : (D = hr(mt.lineWidth, r, 1), R = hr(mt.color, r, "rgba(0,0,0,0.1)"), E = mt.borderDash || [], q = mt.borderDashOffset || 0), (s = Ec(Q, a._index || r, It)) !== void 0 && (c = Ms(lt, s, D), Lt ? u = d = y = _ = c : m = g = b = P = c, re.push({
                tx1: u,
                ty1: m,
                tx2: d,
                ty2: g,
                x1: y,
                y1: b,
                x2: _,
                y2: P,
                width: D,
                color: R,
                borderDash: E,
                borderDashOffset: q
            })));
            return re.ticksLength = pe, re.borderValue = e, re
        },
        _computeLabelItems: function() {
            var t, e, r, a, s, c, u, m, d, g, y, b, _ = this,
                P = _.options,
                D = P.ticks,
                R = P.position,
                E = D.mirror,
                q = _.isHorizontal(),
                Q = _._ticksToDraw,
                lt = Ra(D),
                pt = D.padding,
                mt = Fr(P.gridLines),
                At = -x.toRadians(_.labelRotation),
                It = [];
            for (R === "top" ? (c = _.bottom - mt - pt, u = At ? "left" : "center") : R === "bottom" ? (c = _.top + mt + pt, u = At ? "right" : "center") : R === "left" ? (s = _.right - (E ? 0 : mt) - pt, u = E ? "left" : "right") : (s = _.left + (E ? 0 : mt) + pt, u = E ? "right" : "left"), t = 0, e = Q.length; t < e; ++t) a = (r = Q[t]).label, Lr(a) || (m = _.getPixelForTick(r._index || t) + D.labelOffset, g = (d = r.major ? lt.major : lt.minor).lineHeight, y = Un(a) ? a.length : 1, q ? (s = m, b = R === "top" ? ((At ? 1 : .5) - y) * g : (At ? 0 : .5) * g) : (c = m, b = (1 - y) * g / 2), It.push({
                x: s,
                y: c,
                rotation: At,
                label: a,
                font: d,
                textOffset: b,
                textAlign: u
            }));
            return It
        },
        _drawGrid: function(t) {
            var e = this,
                r = e.options.gridLines;
            if (r.display) {
                var a, s, c, u, m, d = e.ctx,
                    g = e.chart,
                    y = x._alignPixel,
                    b = r.drawBorder ? hr(r.lineWidth, 0, 0) : 0,
                    _ = e._gridLineItems || (e._gridLineItems = e._computeGridLineItems(t));
                for (c = 0, u = _.length; c < u; ++c) a = (m = _[c]).width, s = m.color, a && s && (d.save(), d.lineWidth = a, d.strokeStyle = s, d.setLineDash && (d.setLineDash(m.borderDash), d.lineDashOffset = m.borderDashOffset), d.beginPath(), r.drawTicks && (d.moveTo(m.tx1, m.ty1), d.lineTo(m.tx2, m.ty2)), r.drawOnChartArea && (d.moveTo(m.x1, m.y1), d.lineTo(m.x2, m.y2)), d.stroke(), d.restore());
                if (b) {
                    var P, D, R, E, q = b,
                        Q = hr(r.lineWidth, _.ticksLength - 1, 1),
                        lt = _.borderValue;
                    e.isHorizontal() ? (P = y(g, e.left, q) - q / 2, D = y(g, e.right, Q) + Q / 2, R = E = lt) : (R = y(g, e.top, q) - q / 2, E = y(g, e.bottom, Q) + Q / 2, P = D = lt), d.lineWidth = b, d.strokeStyle = hr(r.color, 0), d.beginPath(), d.moveTo(P, R), d.lineTo(D, E), d.stroke()
                }
            }
        },
        _drawLabels: function() {
            var t = this;
            if (t.options.ticks.display) {
                var e, r, a, s, c, u, m, d, g = t.ctx,
                    y = t._labelItems || (t._labelItems = t._computeLabelItems());
                for (e = 0, a = y.length; e < a; ++e) {
                    if (u = (c = y[e]).font, g.save(), g.translate(c.x, c.y), g.rotate(c.rotation), g.font = u.string, g.fillStyle = u.color, g.textBaseline = "middle", g.textAlign = c.textAlign, m = c.label, d = c.textOffset, Un(m))
                        for (r = 0, s = m.length; r < s; ++r) g.fillText("" + m[r], 0, d), d += u.lineHeight;
                    else g.fillText(m, 0, d);
                    g.restore()
                }
            }
        },
        _drawTitle: function() {
            var t = this,
                e = t.ctx,
                r = t.options,
                a = r.scaleLabel;
            if (a.display) {
                var s, c, u = Gn(a.fontColor, K.global.defaultFontColor),
                    m = x.options._parseFont(a),
                    d = x.options.toPadding(a.padding),
                    g = m.lineHeight / 2,
                    y = r.position,
                    b = 0;
                if (t.isHorizontal()) s = t.left + t.width / 2, c = y === "bottom" ? t.bottom - g - d.bottom : t.top + g + d.top;
                else {
                    var _ = y === "left";
                    s = _ ? t.left + g + d.top : t.right - g - d.top, c = t.top + t.height / 2, b = _ ? -.5 * Math.PI : .5 * Math.PI
                }
                e.save(), e.translate(s, c), e.rotate(b), e.textAlign = "center", e.textBaseline = "middle", e.fillStyle = u, e.font = m.string, e.fillText(a.labelString, 0, 0), e.restore()
            }
        },
        draw: function(t) {
            var e = this;
            e._isVisible() && (e._drawGrid(t), e._drawTitle(), e._drawLabels())
        },
        _layers: function() {
            var t = this,
                e = t.options,
                r = e.ticks && e.ticks.z || 0,
                a = e.gridLines && e.gridLines.z || 0;
            return t._isVisible() && r !== a && t.draw === t._draw ? [{
                z: a,
                draw: function() {
                    t._drawGrid.apply(t, arguments), t._drawTitle.apply(t, arguments)
                }
            }, {
                z: r,
                draw: function() {
                    t._drawLabels.apply(t, arguments)
                }
            }] : [{
                z: r,
                draw: function() {
                    t.draw.apply(t, arguments)
                }
            }]
        },
        _getMatchingVisibleMetas: function(t) {
            var e = this,
                r = e.isHorizontal();
            return e.chart._getSortedVisibleDatasetMetas().filter(function(a) {
                return (!t || a.type === t) && (r ? a.xAxisID === e.id : a.yAxisID === e.id)
            })
        }
    });
    Ea.prototype._draw = Ea.prototype.draw;
    var _e = Ea,
        La = x.isNullOrUndef,
        Hc = {
            position: "bottom"
        },
        os = _e.extend({
            determineDataLimits: function() {
                var t, e = this,
                    r = e._getLabels(),
                    a = e.options.ticks,
                    s = a.min,
                    c = a.max,
                    u = 0,
                    m = r.length - 1;
                s !== void 0 && (t = r.indexOf(s)) >= 0 && (u = t), c !== void 0 && (t = r.indexOf(c)) >= 0 && (m = t), e.minIndex = u, e.maxIndex = m, e.min = r[u], e.max = r[m]
            },
            buildTicks: function() {
                var t = this,
                    e = t._getLabels(),
                    r = t.minIndex,
                    a = t.maxIndex;
                t.ticks = r === 0 && a === e.length - 1 ? e : e.slice(r, a + 1)
            },
            getLabelForIndex: function(t, e) {
                var r = this,
                    a = r.chart;
                return a.getDatasetMeta(e).controller._getValueScaleId() === r.id ? r.getRightValue(a.data.datasets[e].data[t]) : r._getLabels()[t]
            },
            _configure: function() {
                var t = this,
                    e = t.options.offset,
                    r = t.ticks;
                _e.prototype._configure.call(t), t.isHorizontal() || (t._reversePixels = !t._reversePixels), r && (t._startValue = t.minIndex - (e ? .5 : 0), t._valueRange = Math.max(r.length - (e ? 0 : 1), 1))
            },
            getPixelForValue: function(t, e, r) {
                var a, s, c, u = this;
                return La(e) || La(r) || (t = u.chart.data.datasets[r].data[e]), La(t) || (a = u.isHorizontal() ? t.x : t.y), (a !== void 0 || t !== void 0 && isNaN(e)) && (s = u._getLabels(), t = x.valueOrDefault(a, t), e = (c = s.indexOf(t)) !== -1 ? c : e, isNaN(e) && (e = t)), u.getPixelForDecimal((e - u._startValue) / u._valueRange)
            },
            getPixelForTick: function(t) {
                var e = this.ticks;
                return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t], t + this.minIndex)
            },
            getValueForPixel: function(t) {
                var e = this,
                    r = Math.round(e._startValue + e.getDecimalForPixel(t) * e._valueRange);
                return Math.min(Math.max(r, 0), e.ticks.length - 1)
            },
            getBasePixel: function() {
                return this.bottom
            }
        }),
        Uc = Hc;
    os._defaults = Uc;
    var Gc = x.noop,
        qn = x.isNullOrUndef;

    function qc(t, e) {
        var r, a, s, c, u = [],
            m = 1e-14,
            d = t.stepSize,
            g = d || 1,
            y = t.maxTicks - 1,
            b = t.min,
            _ = t.max,
            P = t.precision,
            D = e.min,
            R = e.max,
            E = x.niceNum((R - D) / y / g) * g;
        if (E < m && qn(b) && qn(_)) return [D, R];
        (c = Math.ceil(R / E) - Math.floor(D / E)) > y && (E = x.niceNum(c * E / y / g) * g), d || qn(P) ? r = Math.pow(10, x._decimalPlaces(E)) : (r = Math.pow(10, P), E = Math.ceil(E * r) / r), a = Math.floor(D / E) * E, s = Math.ceil(R / E) * E, d && (!qn(b) && x.almostWhole(b / E, E / 1e3) && (a = b), !qn(_) && x.almostWhole(_ / E, E / 1e3) && (s = _)), c = (s - a) / E, c = x.almostEquals(c, Math.round(c), E / 1e3) ? Math.round(c) : Math.ceil(c), a = Math.round(a * r) / r, s = Math.round(s * r) / r, u.push(qn(b) ? a : b);
        for (var q = 1; q < c; ++q) u.push(Math.round((a + q * E) * r) / r);
        return u.push(qn(_) ? s : _), u
    }
    var ki = _e.extend({
            getRightValue: function(t) {
                return typeof t == "string" ? +t : _e.prototype.getRightValue.call(this, t)
            },
            handleTickRangeOptions: function() {
                var t = this,
                    e = t.options.ticks;
                if (e.beginAtZero) {
                    var r = x.sign(t.min),
                        a = x.sign(t.max);
                    r < 0 && a < 0 ? t.max = 0 : r > 0 && a > 0 && (t.min = 0)
                }
                var s = e.min !== void 0 || e.suggestedMin !== void 0,
                    c = e.max !== void 0 || e.suggestedMax !== void 0;
                e.min !== void 0 ? t.min = e.min : e.suggestedMin !== void 0 && (t.min === null ? t.min = e.suggestedMin : t.min = Math.min(t.min, e.suggestedMin)), e.max !== void 0 ? t.max = e.max : e.suggestedMax !== void 0 && (t.max === null ? t.max = e.suggestedMax : t.max = Math.max(t.max, e.suggestedMax)), s !== c && t.min >= t.max && (s ? t.max = t.min + 1 : t.min = t.max - 1), t.min === t.max && (t.max++, e.beginAtZero || t.min--)
            },
            getTickLimit: function() {
                var t, e = this,
                    r = e.options.ticks,
                    a = r.stepSize,
                    s = r.maxTicksLimit;
                return a ? t = Math.ceil(e.max / a) - Math.floor(e.min / a) + 1 : (t = e._computeTickLimit(), s = s || 11), s && (t = Math.min(s, t)), t
            },
            _computeTickLimit: function() {
                return Number.POSITIVE_INFINITY
            },
            handleDirectionalChanges: Gc,
            buildTicks: function() {
                var t = this,
                    e = t.options.ticks,
                    r = t.getTickLimit(),
                    a = {
                        maxTicks: r = Math.max(2, r),
                        min: e.min,
                        max: e.max,
                        precision: e.precision,
                        stepSize: x.valueOrDefault(e.fixedStepSize, e.stepSize)
                    },
                    s = t.ticks = qc(a, t);
                t.handleDirectionalChanges(), t.max = x.max(s), t.min = x.min(s), e.reverse ? (s.reverse(), t.start = t.max, t.end = t.min) : (t.start = t.min, t.end = t.max)
            },
            convertTicksToLabels: function() {
                var t = this;
                t.ticksAsNumbers = t.ticks.slice(), t.zeroLineIndex = t.ticks.indexOf(0), _e.prototype.convertTicksToLabels.call(t)
            },
            _configure: function() {
                var t, e = this,
                    r = e.getTicks(),
                    a = e.min,
                    s = e.max;
                _e.prototype._configure.call(e), e.options.offset && r.length && (a -= t = (s - a) / Math.max(r.length - 1, 1) / 2, s += t), e._startValue = a, e._endValue = s, e._valueRange = s - a
            }
        }),
        $c = {
            position: "left",
            ticks: {
                callback: Er.formatters.linear
            }
        },
        Xc = 0,
        Zc = 1;

    function Jc(t, e, r) {
        var a = [r.type, e === void 0 && r.stack === void 0 ? r.index : "", r.stack].join(".");
        return t[a] === void 0 && (t[a] = {
            pos: [],
            neg: []
        }), t[a]
    }

    function Kc(t, e, r, a) {
        var s, c, u = t.options,
            m = Jc(e, u.stacked, r),
            d = m.pos,
            g = m.neg,
            y = a.length;
        for (s = 0; s < y; ++s) c = t._parseValue(a[s]), isNaN(c.min) || isNaN(c.max) || r.data[s].hidden || (d[s] = d[s] || 0, g[s] = g[s] || 0, u.relativePoints ? d[s] = 100 : c.min < 0 || c.max < 0 ? g[s] += c.min : d[s] += c.max)
    }

    function Qc(t, e, r) {
        var a, s, c = r.length;
        for (a = 0; a < c; ++a) s = t._parseValue(r[a]), isNaN(s.min) || isNaN(s.max) || e.data[a].hidden || (t.min = Math.min(t.min, s.min), t.max = Math.max(t.max, s.max))
    }
    var ss = ki.extend({
            determineDataLimits: function() {
                var t, e, r, a, s = this,
                    c = s.options,
                    u = s.chart.data.datasets,
                    m = s._getMatchingVisibleMetas(),
                    d = c.stacked,
                    g = {},
                    y = m.length;
                if (s.min = Number.POSITIVE_INFINITY, s.max = Number.NEGATIVE_INFINITY, d === void 0)
                    for (t = 0; !d && t < y; ++t) d = (e = m[t]).stack !== void 0;
                for (t = 0; t < y; ++t) r = u[(e = m[t]).index].data, d ? Kc(s, g, e, r) : Qc(s, e, r);
                x.each(g, function(b) {
                    a = b.pos.concat(b.neg), s.min = Math.min(s.min, x.min(a)), s.max = Math.max(s.max, x.max(a))
                }), s.min = x.isFinite(s.min) && !isNaN(s.min) ? s.min : Xc, s.max = x.isFinite(s.max) && !isNaN(s.max) ? s.max : Zc, s.handleTickRangeOptions()
            },
            _computeTickLimit: function() {
                var t, e = this;
                return e.isHorizontal() ? Math.ceil(e.width / 40) : (t = x.options._parseFont(e.options.ticks), Math.ceil(e.height / t.lineHeight))
            },
            handleDirectionalChanges: function() {
                this.isHorizontal() || this.ticks.reverse()
            },
            getLabelForIndex: function(t, e) {
                return this._getScaleLabel(this.chart.data.datasets[e].data[t])
            },
            getPixelForValue: function(t) {
                var e = this;
                return e.getPixelForDecimal((+e.getRightValue(t) - e._startValue) / e._valueRange)
            },
            getValueForPixel: function(t) {
                return this._startValue + this.getDecimalForPixel(t) * this._valueRange
            },
            getPixelForTick: function(t) {
                var e = this.ticksAsNumbers;
                return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t])
            }
        }),
        tu = $c;
    ss._defaults = tu;
    var Fa = x.valueOrDefault,
        ke = x.math.log10;

    function eu(t, e) {
        var r, a, s = [],
            c = Fa(t.min, Math.pow(10, Math.floor(ke(e.min)))),
            u = Math.floor(ke(e.max)),
            m = Math.ceil(e.max / Math.pow(10, u));
        c === 0 ? (r = Math.floor(ke(e.minNotZero)), a = Math.floor(e.minNotZero / Math.pow(10, r)), s.push(c), c = a * Math.pow(10, r)) : (r = Math.floor(ke(c)), a = Math.floor(c / Math.pow(10, r)));
        var d = r < 0 ? Math.pow(10, Math.abs(r)) : 1;
        do s.push(c), ++a == 10 && (a = 1, d = ++r >= 0 ? 1 : d), c = Math.round(a * Math.pow(10, r) * d) / d; while (r < u || r === u && a < m);
        var g = Fa(t.max, c);
        return s.push(g), s
    }
    var nu = {
        position: "left",
        ticks: {
            callback: Er.formatters.logarithmic
        }
    };

    function Si(t, e) {
        return x.isFinite(t) && t >= 0 ? t : e
    }
    var ls = _e.extend({
            determineDataLimits: function() {
                var t, e, r, a, s, c, u = this,
                    m = u.options,
                    d = u.chart,
                    g = d.data.datasets,
                    y = u.isHorizontal();

                function b(E) {
                    return y ? E.xAxisID === u.id : E.yAxisID === u.id
                }
                u.min = Number.POSITIVE_INFINITY, u.max = Number.NEGATIVE_INFINITY, u.minNotZero = Number.POSITIVE_INFINITY;
                var _ = m.stacked;
                if (_ === void 0) {
                    for (t = 0; t < g.length; t++)
                        if (e = d.getDatasetMeta(t), d.isDatasetVisible(t) && b(e) && e.stack !== void 0) {
                            _ = !0;
                            break
                        }
                }
                if (m.stacked || _) {
                    var P = {};
                    for (t = 0; t < g.length; t++) {
                        var D = [(e = d.getDatasetMeta(t)).type, m.stacked === void 0 && e.stack === void 0 ? t : "", e.stack].join(".");
                        if (d.isDatasetVisible(t) && b(e))
                            for (P[D] === void 0 && (P[D] = []), s = 0, c = (a = g[t].data).length; s < c; s++) {
                                var R = P[D];
                                r = u._parseValue(a[s]), isNaN(r.min) || isNaN(r.max) || e.data[s].hidden || r.min < 0 || r.max < 0 || (R[s] = R[s] || 0, R[s] += r.max)
                            }
                    }
                    x.each(P, function(E) {
                        if (E.length > 0) {
                            var q = x.min(E),
                                Q = x.max(E);
                            u.min = Math.min(u.min, q), u.max = Math.max(u.max, Q)
                        }
                    })
                } else
                    for (t = 0; t < g.length; t++)
                        if (e = d.getDatasetMeta(t), d.isDatasetVisible(t) && b(e))
                            for (s = 0, c = (a = g[t].data).length; s < c; s++) r = u._parseValue(a[s]), isNaN(r.min) || isNaN(r.max) || e.data[s].hidden || r.min < 0 || r.max < 0 || (u.min = Math.min(r.min, u.min), u.max = Math.max(r.max, u.max), r.min !== 0 && (u.minNotZero = Math.min(r.min, u.minNotZero)));
                u.min = x.isFinite(u.min) ? u.min : null, u.max = x.isFinite(u.max) ? u.max : null, u.minNotZero = x.isFinite(u.minNotZero) ? u.minNotZero : null, this.handleTickRangeOptions()
            },
            handleTickRangeOptions: function() {
                var t = this,
                    e = t.options.ticks,
                    r = 1,
                    a = 10;
                t.min = Si(e.min, t.min), t.max = Si(e.max, t.max), t.min === t.max && (t.min !== 0 && t.min !== null ? (t.min = Math.pow(10, Math.floor(ke(t.min)) - 1), t.max = Math.pow(10, Math.floor(ke(t.max)) + 1)) : (t.min = r, t.max = a)), t.min === null && (t.min = Math.pow(10, Math.floor(ke(t.max)) - 1)), t.max === null && (t.max = t.min !== 0 ? Math.pow(10, Math.floor(ke(t.min)) + 1) : a), t.minNotZero === null && (t.min > 0 ? t.minNotZero = t.min : t.max < 1 ? t.minNotZero = Math.pow(10, Math.floor(ke(t.max))) : t.minNotZero = r)
            },
            buildTicks: function() {
                var t = this,
                    e = t.options.ticks,
                    r = !t.isHorizontal(),
                    a = {
                        min: Si(e.min),
                        max: Si(e.max)
                    },
                    s = t.ticks = eu(a, t);
                t.max = x.max(s), t.min = x.min(s), e.reverse ? (r = !r, t.start = t.max, t.end = t.min) : (t.start = t.min, t.end = t.max), r && s.reverse()
            },
            convertTicksToLabels: function() {
                this.tickValues = this.ticks.slice(), _e.prototype.convertTicksToLabels.call(this)
            },
            getLabelForIndex: function(t, e) {
                return this._getScaleLabel(this.chart.data.datasets[e].data[t])
            },
            getPixelForTick: function(t) {
                var e = this.tickValues;
                return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t])
            },
            _getFirstTickValue: function(t) {
                var e = Math.floor(ke(t));
                return Math.floor(t / Math.pow(10, e)) * Math.pow(10, e)
            },
            _configure: function() {
                var t = this,
                    e = t.min,
                    r = 0;
                _e.prototype._configure.call(t), e === 0 && (e = t._getFirstTickValue(t.minNotZero), r = Fa(t.options.ticks.fontSize, K.global.defaultFontSize) / t._length), t._startValue = ke(e), t._valueOffset = r, t._valueRange = (ke(t.max) - ke(e)) / (1 - r)
            },
            getPixelForValue: function(t) {
                var e = this,
                    r = 0;
                return (t = +e.getRightValue(t)) > e.min && t > 0 && (r = (ke(t) - e._startValue) / e._valueRange + e._valueOffset), e.getPixelForDecimal(r)
            },
            getValueForPixel: function(t) {
                var e = this,
                    r = e.getDecimalForPixel(t);
                return r === 0 && e.min === 0 ? 0 : Math.pow(10, e._startValue + (r - e._valueOffset) * e._valueRange)
            }
        }),
        ru = nu;
    ls._defaults = ru;
    var Ni = x.valueOrDefault,
        Wa = x.valueAtIndexOrDefault,
        cs = x.options.resolve,
        iu = {
            display: !0,
            animate: !0,
            position: "chartArea",
            angleLines: {
                display: !0,
                color: "rgba(0,0,0,0.1)",
                lineWidth: 1,
                borderDash: [],
                borderDashOffset: 0
            },
            gridLines: {
                circular: !1
            },
            ticks: {
                showLabelBackdrop: !0,
                backdropColor: "rgba(255,255,255,0.75)",
                backdropPaddingY: 2,
                backdropPaddingX: 2,
                callback: Er.formatters.linear
            },
            pointLabels: {
                display: !0,
                fontSize: 10,
                callback: function(t) {
                    return t
                }
            }
        };

    function za(t) {
        var e = t.ticks;
        return e.display && t.display ? Ni(e.fontSize, K.global.defaultFontSize) + 2 * e.backdropPaddingY : 0
    }

    function au(t, e, r) {
        return x.isArray(r) ? {
            w: x.longestText(t, t.font, r),
            h: r.length * e
        } : {
            w: t.measureText(r).width,
            h: e
        }
    }

    function us(t, e, r, a, s) {
        return t === a || t === s ? {
            start: e - r / 2,
            end: e + r / 2
        } : t < a || t > s ? {
            start: e - r,
            end: e
        } : {
            start: e,
            end: e + r
        }
    }

    function ou(t) {
        var e, r, a, s = x.options._parseFont(t.options.pointLabels),
            c = {
                l: 0,
                r: t.width,
                t: 0,
                b: t.height - t.paddingTop
            },
            u = {};
        t.ctx.font = s.string, t._pointLabelSizes = [];
        var m = t.chart.data.labels.length;
        for (e = 0; e < m; e++) {
            a = t.getPointPosition(e, t.drawingArea + 5), r = au(t.ctx, s.lineHeight, t.pointLabels[e]), t._pointLabelSizes[e] = r;
            var d = t.getIndexAngle(e),
                g = x.toDegrees(d) % 360,
                y = us(g, a.x, r.w, 0, 180),
                b = us(g, a.y, r.h, 90, 270);
            y.start < c.l && (c.l = y.start, u.l = d), y.end > c.r && (c.r = y.end, u.r = d), b.start < c.t && (c.t = b.start, u.t = d), b.end > c.b && (c.b = b.end, u.b = d)
        }
        t.setReductions(t.drawingArea, c, u)
    }

    function su(t) {
        return t === 0 || t === 180 ? "center" : t < 180 ? "left" : "right"
    }

    function lu(t, e, r, a) {
        var s, c, u = r.y + a / 2;
        if (x.isArray(e))
            for (s = 0, c = e.length; s < c; ++s) t.fillText(e[s], r.x, u), u += a;
        else t.fillText(e, r.x, u)
    }

    function cu(t, e, r) {
        t === 90 || t === 270 ? r.y -= e.h / 2 : (t > 270 || t < 90) && (r.y -= e.h)
    }

    function uu(t) {
        var e = t.ctx,
            r = t.options,
            a = r.pointLabels,
            s = za(r),
            c = t.getDistanceFromCenterForValue(r.ticks.reverse ? t.min : t.max),
            u = x.options._parseFont(a);
        e.save(), e.font = u.string, e.textBaseline = "middle";
        for (var m = t.chart.data.labels.length - 1; m >= 0; m--) {
            var d = m === 0 ? s / 2 : 0,
                g = t.getPointPosition(m, c + d + 5),
                y = Wa(a.fontColor, m, K.global.defaultFontColor);
            e.fillStyle = y;
            var b = t.getIndexAngle(m),
                _ = x.toDegrees(b);
            e.textAlign = su(_), cu(_, t._pointLabelSizes[m], g), lu(e, t.pointLabels[m], g, u.lineHeight)
        }
        e.restore()
    }

    function du(t, e, r, a) {
        var s, c = t.ctx,
            u = e.circular,
            m = t.chart.data.labels.length,
            d = Wa(e.color, a - 1),
            g = Wa(e.lineWidth, a - 1);
        if ((u || m) && d && g) {
            if (c.save(), c.strokeStyle = d, c.lineWidth = g, c.setLineDash && (c.setLineDash(e.borderDash || []), c.lineDashOffset = e.borderDashOffset || 0), c.beginPath(), u) c.arc(t.xCenter, t.yCenter, r, 0, 2 * Math.PI);
            else {
                s = t.getPointPosition(0, r), c.moveTo(s.x, s.y);
                for (var y = 1; y < m; y++) s = t.getPointPosition(y, r), c.lineTo(s.x, s.y)
            }
            c.closePath(), c.stroke(), c.restore()
        }
    }

    function ji(t) {
        return x.isNumber(t) ? t : 0
    }
    var ds = ki.extend({
            setDimensions: function() {
                var t = this;
                t.width = t.maxWidth, t.height = t.maxHeight, t.paddingTop = za(t.options) / 2, t.xCenter = Math.floor(t.width / 2), t.yCenter = Math.floor((t.height - t.paddingTop) / 2), t.drawingArea = Math.min(t.height - t.paddingTop, t.width) / 2
            },
            determineDataLimits: function() {
                var t = this,
                    e = t.chart,
                    r = Number.POSITIVE_INFINITY,
                    a = Number.NEGATIVE_INFINITY;
                x.each(e.data.datasets, function(s, c) {
                    if (e.isDatasetVisible(c)) {
                        var u = e.getDatasetMeta(c);
                        x.each(s.data, function(m, d) {
                            var g = +t.getRightValue(m);
                            isNaN(g) || u.data[d].hidden || (r = Math.min(g, r), a = Math.max(g, a))
                        })
                    }
                }), t.min = r === Number.POSITIVE_INFINITY ? 0 : r, t.max = a === Number.NEGATIVE_INFINITY ? 0 : a, t.handleTickRangeOptions()
            },
            _computeTickLimit: function() {
                return Math.ceil(this.drawingArea / za(this.options))
            },
            convertTicksToLabels: function() {
                var t = this;
                ki.prototype.convertTicksToLabels.call(t), t.pointLabels = t.chart.data.labels.map(function() {
                    var e = x.callback(t.options.pointLabels.callback, arguments, t);
                    return e || e === 0 ? e : ""
                })
            },
            getLabelForIndex: function(t, e) {
                return +this.getRightValue(this.chart.data.datasets[e].data[t])
            },
            fit: function() {
                var t = this,
                    e = t.options;
                e.display && e.pointLabels.display ? ou(t) : t.setCenterPoint(0, 0, 0, 0)
            },
            setReductions: function(t, e, r) {
                var a = this,
                    s = e.l / Math.sin(r.l),
                    c = Math.max(e.r - a.width, 0) / Math.sin(r.r),
                    u = -e.t / Math.cos(r.t),
                    m = -Math.max(e.b - (a.height - a.paddingTop), 0) / Math.cos(r.b);
                s = ji(s), c = ji(c), u = ji(u), m = ji(m), a.drawingArea = Math.min(Math.floor(t - (s + c) / 2), Math.floor(t - (u + m) / 2)), a.setCenterPoint(s, c, u, m)
            },
            setCenterPoint: function(t, e, r, a) {
                var s = this,
                    c = s.width - e - s.drawingArea,
                    u = t + s.drawingArea,
                    m = r + s.drawingArea,
                    d = s.height - s.paddingTop - a - s.drawingArea;
                s.xCenter = Math.floor((u + c) / 2 + s.left), s.yCenter = Math.floor((m + d) / 2 + s.top + s.paddingTop)
            },
            getIndexAngle: function(t) {
                var e = this.chart,
                    r = (t * (360 / e.data.labels.length) + ((e.options || {}).startAngle || 0)) % 360;
                return (r < 0 ? r + 360 : r) * Math.PI * 2 / 360
            },
            getDistanceFromCenterForValue: function(t) {
                var e = this;
                if (x.isNullOrUndef(t)) return NaN;
                var r = e.drawingArea / (e.max - e.min);
                return e.options.ticks.reverse ? (e.max - t) * r : (t - e.min) * r
            },
            getPointPosition: function(t, e) {
                var r = this,
                    a = r.getIndexAngle(t) - Math.PI / 2;
                return {
                    x: Math.cos(a) * e + r.xCenter,
                    y: Math.sin(a) * e + r.yCenter
                }
            },
            getPointPositionForValue: function(t, e) {
                return this.getPointPosition(t, this.getDistanceFromCenterForValue(e))
            },
            getBasePosition: function(t) {
                var e = this,
                    r = e.min,
                    a = e.max;
                return e.getPointPositionForValue(t || 0, e.beginAtZero ? 0 : r < 0 && a < 0 ? a : r > 0 && a > 0 ? r : 0)
            },
            _drawGrid: function() {
                var t, e, r, a = this,
                    s = a.ctx,
                    c = a.options,
                    u = c.gridLines,
                    m = c.angleLines,
                    d = Ni(m.lineWidth, u.lineWidth),
                    g = Ni(m.color, u.color);
                if (c.pointLabels.display && uu(a), u.display && x.each(a.ticks, function(y, b) {
                        b !== 0 && (e = a.getDistanceFromCenterForValue(a.ticksAsNumbers[b]), du(a, u, e, b))
                    }), m.display && d && g) {
                    for (s.save(), s.lineWidth = d, s.strokeStyle = g, s.setLineDash && (s.setLineDash(cs([m.borderDash, u.borderDash, []])), s.lineDashOffset = cs([m.borderDashOffset, u.borderDashOffset, 0])), t = a.chart.data.labels.length - 1; t >= 0; t--) e = a.getDistanceFromCenterForValue(c.ticks.reverse ? a.min : a.max), r = a.getPointPosition(t, e), s.beginPath(), s.moveTo(a.xCenter, a.yCenter), s.lineTo(r.x, r.y), s.stroke();
                    s.restore()
                }
            },
            _drawLabels: function() {
                var t = this,
                    e = t.ctx,
                    r = t.options.ticks;
                if (r.display) {
                    var a, s, c = t.getIndexAngle(0),
                        u = x.options._parseFont(r),
                        m = Ni(r.fontColor, K.global.defaultFontColor);
                    e.save(), e.font = u.string, e.translate(t.xCenter, t.yCenter), e.rotate(c), e.textAlign = "center", e.textBaseline = "middle", x.each(t.ticks, function(d, g) {
                        (g !== 0 || r.reverse) && (a = t.getDistanceFromCenterForValue(t.ticksAsNumbers[g]), r.showLabelBackdrop && (s = e.measureText(d).width, e.fillStyle = r.backdropColor, e.fillRect(-s / 2 - r.backdropPaddingX, -a - u.size / 2 - r.backdropPaddingY, s + 2 * r.backdropPaddingX, u.size + 2 * r.backdropPaddingY)), e.fillStyle = m, e.fillText(d, 0, -a))
                    }), e.restore()
                }
            },
            _drawTitle: x.noop
        }),
        hu = iu;
    ds._defaults = hu;
    var Ya = x._deprecated,
        hs = x.options.resolve,
        fu = x.valueOrDefault,
        fs = Number.MIN_SAFE_INTEGER || -9007199254740991,
        Va = Number.MAX_SAFE_INTEGER || 9007199254740991,
        Mi = {
            millisecond: {
                common: !0,
                size: 1,
                steps: 1e3
            },
            second: {
                common: !0,
                size: 1e3,
                steps: 60
            },
            minute: {
                common: !0,
                size: 6e4,
                steps: 60
            },
            hour: {
                common: !0,
                size: 36e5,
                steps: 24
            },
            day: {
                common: !0,
                size: 864e5,
                steps: 30
            },
            week: {
                common: !1,
                size: 6048e5,
                steps: 4
            },
            month: {
                common: !0,
                size: 2628e6,
                steps: 12
            },
            quarter: {
                common: !1,
                size: 7884e6,
                steps: 4
            },
            year: {
                common: !0,
                size: 3154e7
            }
        },
        Se = Object.keys(Mi);

    function ms(t, e) {
        return t - e
    }

    function mu(t) {
        var e, r, a, s = {},
            c = [];
        for (e = 0, r = t.length; e < r; ++e) s[a = t[e]] || (s[a] = !0, c.push(a));
        return c
    }

    function gs(t) {
        return x.valueOrDefault(t.time.min, t.ticks.min)
    }

    function ps(t) {
        return x.valueOrDefault(t.time.max, t.ticks.max)
    }

    function gu(t, e, r, a) {
        if (a === "linear" || !t.length) return [{
            time: e,
            pos: 0
        }, {
            time: r,
            pos: 1
        }];
        var s, c, u, m, d, g = [],
            y = [e];
        for (s = 0, c = t.length; s < c; ++s)(m = t[s]) > e && m < r && y.push(m);
        for (y.push(r), s = 0, c = y.length; s < c; ++s) d = y[s + 1], u = y[s - 1], m = y[s], u !== void 0 && d !== void 0 && Math.round((d + u) / 2) === m || g.push({
            time: m,
            pos: s / (c - 1)
        });
        return g
    }

    function pu(t, e, r) {
        for (var a, s, c, u = 0, m = t.length - 1; u >= 0 && u <= m;) {
            if (s = t[(a = u + m >> 1) - 1] || null, c = t[a], !s) return {
                lo: null,
                hi: c
            };
            if (c[e] < r) u = a + 1;
            else {
                if (!(s[e] > r)) return {
                    lo: s,
                    hi: c
                };
                m = a - 1
            }
        }
        return {
            lo: c,
            hi: null
        }
    }

    function fr(t, e, r, a) {
        var s = pu(t, e, r),
            c = s.lo ? s.hi ? s.lo : t[t.length - 2] : t[0],
            u = s.lo ? s.hi ? s.hi : t[t.length - 1] : t[1],
            m = u[e] - c[e],
            d = m ? (r - c[e]) / m : 0,
            g = (u[a] - c[a]) * d;
        return c[a] + g
    }

    function Ha(t, e) {
        var r = t._adapter,
            a = t.options.time,
            s = a.parser,
            c = s || a.format,
            u = e;
        return typeof s == "function" && (u = s(u)), x.isFinite(u) || (u = typeof c == "string" ? r.parse(u, c) : r.parse(u)), u !== null ? +u : (s || typeof c != "function" || (u = c(e), x.isFinite(u) || (u = r.parse(u))), u)
    }

    function $n(t, e) {
        if (x.isNullOrUndef(e)) return null;
        var r = t.options.time,
            a = Ha(t, t.getRightValue(e));
        return a === null || r.round && (a = +t._adapter.startOf(a, r.round)), a
    }

    function ys(t, e, r, a) {
        var s, c, u, m = Se.length;
        for (s = Se.indexOf(t); s < m - 1; ++s)
            if (u = (c = Mi[Se[s]]).steps ? c.steps : Va, c.common && Math.ceil((r - e) / (u * c.size)) <= a) return Se[s];
        return Se[m - 1]
    }

    function yu(t, e, r, a, s) {
        var c, u;
        for (c = Se.length - 1; c >= Se.indexOf(r); c--)
            if (u = Se[c], Mi[u].common && t._adapter.diff(s, a, u) >= e - 1) return u;
        return Se[r ? Se.indexOf(r) : 0]
    }

    function vu(t) {
        for (var e = Se.indexOf(t) + 1, r = Se.length; e < r; ++e)
            if (Mi[Se[e]].common) return Se[e]
    }

    function bu(t, e, r, a) {
        var s, c = t._adapter,
            u = t.options,
            m = u.time,
            d = m.unit || ys(m.minUnit, e, r, a),
            g = hs([m.stepSize, m.unitStepSize, 1]),
            y = d === "week" && m.isoWeekday,
            b = e,
            _ = [];
        if (y && (b = +c.startOf(b, "isoWeek", y)), b = +c.startOf(b, y ? "day" : d), c.diff(r, e, d) > 1e5 * g) throw e + " and " + r + " are too far apart with stepSize of " + g + " " + d;
        for (s = b; s < r; s = +c.add(s, g, d)) _.push(s);
        return s !== r && u.bounds !== "ticks" || _.push(s), _
    }

    function xu(t, e, r, a, s) {
        var c, u, m = 0,
            d = 0;
        return s.offset && e.length && (c = fr(t, "time", e[0], "pos"), m = e.length === 1 ? 1 - c : (fr(t, "time", e[1], "pos") - c) / 2, u = fr(t, "time", e[e.length - 1], "pos"), d = e.length === 1 ? u : (u - fr(t, "time", e[e.length - 2], "pos")) / 2), {
            start: m,
            end: d,
            factor: 1 / (m + 1 + d)
        }
    }

    function wu(t, e, r, a) {
        var s, c, u = t._adapter,
            m = +u.startOf(e[0].value, a),
            d = e[e.length - 1].value;
        for (s = m; s <= d; s = +u.add(s, 1, a))(c = r[s]) >= 0 && (e[c].major = !0);
        return e
    }

    function vs(t, e, r) {
        var a, s, c = [],
            u = {},
            m = e.length;
        for (a = 0; a < m; ++a) u[s = e[a]] = a, c.push({
            value: s,
            major: !1
        });
        return m !== 0 && r ? wu(t, c, u, r) : c
    }
    var _u = {
            position: "bottom",
            distribution: "linear",
            bounds: "data",
            adapters: {},
            time: {
                parser: !1,
                unit: !1,
                round: !1,
                displayFormat: !1,
                isoWeekday: !1,
                minUnit: "millisecond",
                displayFormats: {}
            },
            ticks: {
                autoSkip: !1,
                source: "auto",
                major: {
                    enabled: !1
                }
            }
        },
        bs = _e.extend({
            initialize: function() {
                this.mergeTicksOptions(), _e.prototype.initialize.call(this)
            },
            update: function() {
                var t = this,
                    e = t.options,
                    r = e.time || (e.time = {}),
                    a = t._adapter = new Oa._date(e.adapters.date);
                return Ya("time scale", r.format, "time.format", "time.parser"), Ya("time scale", r.min, "time.min", "ticks.min"), Ya("time scale", r.max, "time.max", "ticks.max"), x.mergeIf(r.displayFormats, a.formats()), _e.prototype.update.apply(t, arguments)
            },
            getRightValue: function(t) {
                return t && t.t !== void 0 && (t = t.t), _e.prototype.getRightValue.call(this, t)
            },
            determineDataLimits: function() {
                var t, e, r, a, s, c, u, m = this,
                    d = m.chart,
                    g = m._adapter,
                    y = m.options,
                    b = y.time.unit || "day",
                    _ = Va,
                    P = fs,
                    D = [],
                    R = [],
                    E = [],
                    q = m._getLabels();
                for (t = 0, r = q.length; t < r; ++t) E.push($n(m, q[t]));
                for (t = 0, r = (d.data.datasets || []).length; t < r; ++t)
                    if (d.isDatasetVisible(t))
                        if (s = d.data.datasets[t].data, x.isObject(s[0]))
                            for (R[t] = [], e = 0, a = s.length; e < a; ++e) c = $n(m, s[e]), D.push(c), R[t][e] = c;
                        else R[t] = E.slice(0), u || (D = D.concat(E), u = !0);
                else R[t] = [];
                E.length && (_ = Math.min(_, E[0]), P = Math.max(P, E[E.length - 1])), D.length && (D = r > 1 ? mu(D).sort(ms) : D.sort(ms), _ = Math.min(_, D[0]), P = Math.max(P, D[D.length - 1])), _ = $n(m, gs(y)) || _, P = $n(m, ps(y)) || P, _ = _ === Va ? +g.startOf(Date.now(), b) : _, P = P === fs ? +g.endOf(Date.now(), b) + 1 : P, m.min = Math.min(_, P), m.max = Math.max(_ + 1, P), m._table = [], m._timestamps = {
                    data: D,
                    datasets: R,
                    labels: E
                }
            },
            buildTicks: function() {
                var t, e, r, a = this,
                    s = a.min,
                    c = a.max,
                    u = a.options,
                    m = u.ticks,
                    d = u.time,
                    g = a._timestamps,
                    y = [],
                    b = a.getLabelCapacity(s),
                    _ = m.source,
                    P = u.distribution;
                for (g = _ === "data" || _ === "auto" && P === "series" ? g.data : _ === "labels" ? g.labels : bu(a, s, c, b), u.bounds === "ticks" && g.length && (s = g[0], c = g[g.length - 1]), s = $n(a, gs(u)) || s, c = $n(a, ps(u)) || c, t = 0, e = g.length; t < e; ++t)(r = g[t]) >= s && r <= c && y.push(r);
                return a.min = s, a.max = c, a._unit = d.unit || (m.autoSkip ? ys(d.minUnit, a.min, a.max, b) : yu(a, y.length, d.minUnit, a.min, a.max)), a._majorUnit = m.major.enabled && a._unit !== "year" ? vu(a._unit) : void 0, a._table = gu(a._timestamps.data, s, c, P), a._offsets = xu(a._table, y, s, c, u), m.reverse && y.reverse(), vs(a, y, a._majorUnit)
            },
            getLabelForIndex: function(t, e) {
                var r = this,
                    a = r._adapter,
                    s = r.chart.data,
                    c = r.options.time,
                    u = s.labels && t < s.labels.length ? s.labels[t] : "",
                    m = s.datasets[e].data[t];
                return x.isObject(m) && (u = r.getRightValue(m)), c.tooltipFormat ? a.format(Ha(r, u), c.tooltipFormat) : typeof u == "string" ? u : a.format(Ha(r, u), c.displayFormats.datetime)
            },
            tickFormatFunction: function(t, e, r, a) {
                var s = this,
                    c = s._adapter,
                    u = s.options,
                    m = u.time.displayFormats,
                    d = m[s._unit],
                    g = s._majorUnit,
                    y = m[g],
                    b = r[e],
                    _ = u.ticks,
                    P = g && y && b && b.major,
                    D = c.format(t, a || (P ? y : d)),
                    R = P ? _.major : _.minor,
                    E = hs([R.callback, R.userCallback, _.callback, _.userCallback]);
                return E ? E(D, e, r) : D
            },
            convertTicksToLabels: function(t) {
                var e, r, a = [];
                for (e = 0, r = t.length; e < r; ++e) a.push(this.tickFormatFunction(t[e].value, e, t));
                return a
            },
            getPixelForOffset: function(t) {
                var e = this,
                    r = e._offsets,
                    a = fr(e._table, "time", t, "pos");
                return e.getPixelForDecimal((r.start + a) * r.factor)
            },
            getPixelForValue: function(t, e, r) {
                var a = this,
                    s = null;
                if (e !== void 0 && r !== void 0 && (s = a._timestamps.datasets[r][e]), s === null && (s = $n(a, t)), s !== null) return a.getPixelForOffset(s)
            },
            getPixelForTick: function(t) {
                var e = this.getTicks();
                return t >= 0 && t < e.length ? this.getPixelForOffset(e[t].value) : null
            },
            getValueForPixel: function(t) {
                var e = this,
                    r = e._offsets,
                    a = e.getDecimalForPixel(t) / r.factor - r.end,
                    s = fr(e._table, "pos", a, "time");
                return e._adapter._create(s)
            },
            _getLabelSize: function(t) {
                var e = this,
                    r = e.options.ticks,
                    a = e.ctx.measureText(t).width,
                    s = x.toRadians(e.isHorizontal() ? r.maxRotation : r.minRotation),
                    c = Math.cos(s),
                    u = Math.sin(s),
                    m = fu(r.fontSize, K.global.defaultFontSize);
                return {
                    w: a * c + m * u,
                    h: a * u + m * c
                }
            },
            getLabelWidth: function(t) {
                return this._getLabelSize(t).w
            },
            getLabelCapacity: function(t) {
                var e = this,
                    r = e.options.time,
                    a = r.displayFormats,
                    s = a[r.unit] || a.millisecond,
                    c = e.tickFormatFunction(t, 0, vs(e, [t], e._majorUnit), s),
                    u = e._getLabelSize(c),
                    m = Math.floor(e.isHorizontal() ? e.width / u.w : e.height / u.h);
                return e.options.offset && m--, m > 0 ? m : 1
            }
        }),
        ku = _u;
    bs._defaults = ku;
    var Su = {
            category: os,
            linear: ss,
            logarithmic: ls,
            radialLinear: ds,
            time: bs
        },
        Nu = {
            datetime: "MMM D, YYYY, h:mm:ss a",
            millisecond: "h:mm:ss.SSS a",
            second: "h:mm:ss a",
            minute: "h:mm a",
            hour: "hA",
            day: "MMM D",
            week: "ll",
            month: "MMM YYYY",
            quarter: "[Q]Q - YYYY",
            year: "YYYY"
        };
    Oa._date.override(typeof n == "function" ? {
        _id: "moment",
        formats: function() {
            return Nu
        },
        parse: function(t, e) {
            return typeof t == "string" && typeof e == "string" ? t = n(t, e) : t instanceof n || (t = n(t)), t.isValid() ? t.valueOf() : null
        },
        format: function(t, e) {
            return n(t).format(e)
        },
        add: function(t, e, r) {
            return n(t).add(e, r).valueOf()
        },
        diff: function(t, e, r) {
            return n(t).diff(n(e), r)
        },
        startOf: function(t, e, r) {
            return t = n(t), e === "isoWeek" ? t.isoWeekday(r).valueOf() : t.startOf(e).valueOf()
        },
        endOf: function(t, e) {
            return n(t).endOf(e).valueOf()
        },
        _create: function(t) {
            return n(t)
        }
    } : {}), K._set("global", {
        plugins: {
            filler: {
                propagate: !0
            }
        }
    });
    var ju = {
        dataset: function(t) {
            var e = t.fill,
                r = t.chart,
                a = r.getDatasetMeta(e),
                s = a && r.isDatasetVisible(e) && a.dataset._children || [],
                c = s.length || 0;
            return c ? function(u, m) {
                return m < c && s[m]._view || null
            } : null
        },
        boundary: function(t) {
            var e = t.boundary,
                r = e ? e.x : null,
                a = e ? e.y : null;
            return x.isArray(e) ? function(s, c) {
                return e[c]
            } : function(s) {
                return {
                    x: r === null ? s.x : r,
                    y: a === null ? s.y : a
                }
            }
        }
    };

    function Mu(t, e, r) {
        var a, s = t._model || {},
            c = s.fill;
        if (c === void 0 && (c = !!s.backgroundColor), c === !1 || c === null) return !1;
        if (c === !0) return "origin";
        if (a = parseFloat(c, 10), isFinite(a) && Math.floor(a) === a) return c[0] !== "-" && c[0] !== "+" || (a = e + a), !(a === e || a < 0 || a >= r) && a;
        switch (c) {
            case "bottom":
                return "start";
            case "top":
                return "end";
            case "zero":
                return "origin";
            case "origin":
            case "start":
            case "end":
                return c;
            default:
                return !1
        }
    }

    function Iu(t) {
        var e, r = t.el._model || {},
            a = t.el._scale || {},
            s = t.fill,
            c = null;
        if (isFinite(s)) return null;
        if (s === "start" ? c = r.scaleBottom === void 0 ? a.bottom : r.scaleBottom : s === "end" ? c = r.scaleTop === void 0 ? a.top : r.scaleTop : r.scaleZero !== void 0 ? c = r.scaleZero : a.getBasePixel && (c = a.getBasePixel()), c != null) {
            if (c.x !== void 0 && c.y !== void 0) return c;
            if (x.isFinite(c)) return {
                x: (e = a.isHorizontal()) ? c : null,
                y: e ? null : c
            }
        }
        return null
    }

    function Cu(t) {
        var e, r, a, s, c, u = t.el._scale,
            m = u.options,
            d = u.chart.data.labels.length,
            g = t.fill,
            y = [];
        if (!d) return null;
        for (e = m.ticks.reverse ? u.max : u.min, r = m.ticks.reverse ? u.min : u.max, a = u.getPointPositionForValue(0, e), s = 0; s < d; ++s) c = g === "start" || g === "end" ? u.getPointPositionForValue(s, g === "start" ? e : r) : u.getBasePosition(s), m.gridLines.circular && (c.cx = a.x, c.cy = a.y, c.angle = u.getIndexAngle(s) - Math.PI / 2), y.push(c);
        return y
    }

    function Pu(t) {
        return (t.el._scale || {}).getPointPositionForValue ? Cu(t) : Iu(t)
    }

    function Tu(t, e, r) {
        var a, s = t[e].fill,
            c = [e];
        if (!r) return s;
        for (; s !== !1 && c.indexOf(s) === -1;) {
            if (!isFinite(s)) return s;
            if (!(a = t[s])) return !1;
            if (a.visible) return s;
            c.push(s), s = a.fill
        }
        return !1
    }

    function Du(t) {
        var e = t.fill,
            r = "dataset";
        return e === !1 ? null : (isFinite(e) || (r = "boundary"), ju[r](t))
    }

    function xs(t) {
        return t && !t.skip
    }

    function ws(t, e, r, a, s) {
        var c, u, m, d;
        if (a && s) {
            for (t.moveTo(e[0].x, e[0].y), c = 1; c < a; ++c) x.canvas.lineTo(t, e[c - 1], e[c]);
            if (r[0].angle === void 0)
                for (t.lineTo(r[s - 1].x, r[s - 1].y), c = s - 1; c > 0; --c) x.canvas.lineTo(t, r[c], r[c - 1], !0);
            else
                for (u = r[0].cx, m = r[0].cy, d = Math.sqrt(Math.pow(r[0].x - u, 2) + Math.pow(r[0].y - m, 2)), c = s - 1; c > 0; --c) t.arc(u, m, d, r[c].angle, r[c - 1].angle, !0)
        }
    }

    function Ou(t, e, r, a, s, c) {
        var u, m, d, g, y, b, _, P, D = e.length,
            R = a.spanGaps,
            E = [],
            q = [],
            Q = 0,
            lt = 0;
        for (t.beginPath(), u = 0, m = D; u < m; ++u) y = r(g = e[d = u % D]._view, d, a), b = xs(g), _ = xs(y), c && P === void 0 && b && (m = D + (P = u + 1)), b && _ ? (Q = E.push(g), lt = q.push(y)) : Q && lt && (R ? (b && E.push(g), _ && q.push(y)) : (ws(t, E, q, Q, lt), Q = lt = 0, E = [], q = []));
        ws(t, E, q, Q, lt), t.closePath(), t.fillStyle = s, t.fill()
    }
    var Au = {
            id: "filler",
            afterDatasetsUpdate: function(t, e) {
                var r, a, s, c, u = (t.data.datasets || []).length,
                    m = e.propagate,
                    d = [];
                for (a = 0; a < u; ++a) c = null, (s = (r = t.getDatasetMeta(a)).dataset) && s._model && s instanceof he.Line && (c = {
                    visible: t.isDatasetVisible(a),
                    fill: Mu(s, a, u),
                    chart: t,
                    el: s
                }), r.$filler = c, d.push(c);
                for (a = 0; a < u; ++a)(c = d[a]) && (c.fill = Tu(d, a, m), c.boundary = Pu(c), c.mapper = Du(c))
            },
            beforeDatasetsDraw: function(t) {
                var e, r, a, s, c, u, m, d = t._getSortedVisibleDatasetMetas(),
                    g = t.ctx;
                for (r = d.length - 1; r >= 0; --r)(e = d[r].$filler) && e.visible && (s = (a = e.el)._view, c = a._children || [], u = e.mapper, m = s.backgroundColor || K.global.defaultColor, u && m && c.length && (x.canvas.clipArea(g, t.chartArea), Ou(g, c, u, s, m, a._loop), x.canvas.unclipArea(g)))
            }
        },
        Ru = x.rtl.getRtlAdapter,
        Tn = x.noop,
        Dn = x.valueOrDefault;

    function Ua(t, e) {
        return t.usePointStyle && t.boxWidth > e ? e : t.boxWidth
    }
    K._set("global", {
        legend: {
            display: !0,
            position: "top",
            align: "center",
            fullWidth: !0,
            reverse: !1,
            weight: 1e3,
            onClick: function(t, e) {
                var r = e.datasetIndex,
                    a = this.chart,
                    s = a.getDatasetMeta(r);
                s.hidden = s.hidden === null ? !a.data.datasets[r].hidden : null, a.update()
            },
            onHover: null,
            onLeave: null,
            labels: {
                boxWidth: 40,
                padding: 10,
                generateLabels: function(t) {
                    var e = t.data.datasets,
                        r = t.options.legend || {},
                        a = r.labels && r.labels.usePointStyle;
                    return t._getSortedDatasetMetas().map(function(s) {
                        var c = s.controller.getStyle(a ? 0 : void 0);
                        return {
                            text: e[s.index].label,
                            fillStyle: c.backgroundColor,
                            hidden: !t.isDatasetVisible(s.index),
                            lineCap: c.borderCapStyle,
                            lineDash: c.borderDash,
                            lineDashOffset: c.borderDashOffset,
                            lineJoin: c.borderJoinStyle,
                            lineWidth: c.borderWidth,
                            strokeStyle: c.borderColor,
                            pointStyle: c.pointStyle,
                            rotation: c.rotation,
                            datasetIndex: s.index
                        }
                    }, this)
                }
            }
        },
        legendCallback: function(t) {
            var e, r, a, s = document.createElement("ul"),
                c = t.data.datasets;
            for (s.setAttribute("class", t.id + "-legend"), e = 0, r = c.length; e < r; e++)(a = s.appendChild(document.createElement("li"))).appendChild(document.createElement("span")).style.backgroundColor = c[e].backgroundColor, c[e].label && a.appendChild(document.createTextNode(c[e].label));
            return s.outerHTML
        }
    });
    var _s = Ae.extend({
        initialize: function(t) {
            var e = this;
            x.extend(e, t), e.legendHitBoxes = [], e._hoveredItem = null, e.doughnutMode = !1
        },
        beforeUpdate: Tn,
        update: function(t, e, r) {
            var a = this;
            return a.beforeUpdate(), a.maxWidth = t, a.maxHeight = e, a.margins = r, a.beforeSetDimensions(), a.setDimensions(), a.afterSetDimensions(), a.beforeBuildLabels(), a.buildLabels(), a.afterBuildLabels(), a.beforeFit(), a.fit(), a.afterFit(), a.afterUpdate(), a.minSize
        },
        afterUpdate: Tn,
        beforeSetDimensions: Tn,
        setDimensions: function() {
            var t = this;
            t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0, t.minSize = {
                width: 0,
                height: 0
            }
        },
        afterSetDimensions: Tn,
        beforeBuildLabels: Tn,
        buildLabels: function() {
            var t = this,
                e = t.options.labels || {},
                r = x.callback(e.generateLabels, [t.chart], t) || [];
            e.filter && (r = r.filter(function(a) {
                return e.filter(a, t.chart.data)
            })), t.options.reverse && r.reverse(), t.legendItems = r
        },
        afterBuildLabels: Tn,
        beforeFit: Tn,
        fit: function() {
            var t = this,
                e = t.options,
                r = e.labels,
                a = e.display,
                s = t.ctx,
                c = x.options._parseFont(r),
                u = c.size,
                m = t.legendHitBoxes = [],
                d = t.minSize,
                g = t.isHorizontal();
            if (g ? (d.width = t.maxWidth, d.height = a ? 10 : 0) : (d.width = a ? 10 : 0, d.height = t.maxHeight), a) {
                if (s.font = c.string, g) {
                    var y = t.lineWidths = [0],
                        b = 0;
                    s.textAlign = "left", s.textBaseline = "middle", x.each(t.legendItems, function(Q, lt) {
                        var pt = Ua(r, u) + u / 2 + s.measureText(Q.text).width;
                        (lt === 0 || y[y.length - 1] + pt + 2 * r.padding > d.width) && (b += u + r.padding, y[y.length - (lt > 0 ? 0 : 1)] = 0), m[lt] = {
                            left: 0,
                            top: 0,
                            width: pt,
                            height: u
                        }, y[y.length - 1] += pt + r.padding
                    }), d.height += b
                } else {
                    var _ = r.padding,
                        P = t.columnWidths = [],
                        D = t.columnHeights = [],
                        R = r.padding,
                        E = 0,
                        q = 0;
                    x.each(t.legendItems, function(Q, lt) {
                        var pt = Ua(r, u) + u / 2 + s.measureText(Q.text).width;
                        lt > 0 && q + u + 2 * _ > d.height && (R += E + r.padding, P.push(E), D.push(q), E = 0, q = 0), E = Math.max(E, pt), q += u + _, m[lt] = {
                            left: 0,
                            top: 0,
                            width: pt,
                            height: u
                        }
                    }), R += E, P.push(E), D.push(q), d.width += R
                }
                t.width = d.width, t.height = d.height
            } else t.width = d.width = t.height = d.height = 0
        },
        afterFit: Tn,
        isHorizontal: function() {
            return this.options.position === "top" || this.options.position === "bottom"
        },
        draw: function() {
            var t = this,
                e = t.options,
                r = e.labels,
                a = K.global,
                s = a.defaultColor,
                c = a.elements.line,
                u = t.height,
                m = t.columnHeights,
                d = t.width,
                g = t.lineWidths;
            if (e.display) {
                var y, b = Ru(e.rtl, t.left, t.minSize.width),
                    _ = t.ctx,
                    P = Dn(r.fontColor, a.defaultFontColor),
                    D = x.options._parseFont(r),
                    R = D.size;
                _.textAlign = b.textAlign("left"), _.textBaseline = "middle", _.lineWidth = .5, _.strokeStyle = P, _.fillStyle = P, _.font = D.string;
                var E = Ua(r, R),
                    q = t.legendHitBoxes,
                    Q = function(It, Lt, qt) {
                        if (!(isNaN(E) || E <= 0)) {
                            _.save();
                            var pe = Dn(qt.lineWidth, c.borderWidth);
                            if (_.fillStyle = Dn(qt.fillStyle, s), _.lineCap = Dn(qt.lineCap, c.borderCapStyle), _.lineDashOffset = Dn(qt.lineDashOffset, c.borderDashOffset), _.lineJoin = Dn(qt.lineJoin, c.borderJoinStyle), _.lineWidth = pe, _.strokeStyle = Dn(qt.strokeStyle, s), _.setLineDash && _.setLineDash(Dn(qt.lineDash, c.borderDash)), r && r.usePointStyle) {
                                var ne = E * Math.SQRT2 / 2,
                                    re = b.xPlus(It, E / 2),
                                    ye = Lt + R / 2;
                                x.canvas.drawPoint(_, qt.pointStyle, ne, re, ye, qt.rotation)
                            } else _.fillRect(b.leftForLtr(It, E), Lt, E, R), pe !== 0 && _.strokeRect(b.leftForLtr(It, E), Lt, E, R);
                            _.restore()
                        }
                    },
                    lt = function(It, Lt, qt, pe) {
                        var ne = R / 2,
                            re = b.xPlus(It, E + ne),
                            ye = Lt + ne;
                        _.fillText(qt.text, re, ye), qt.hidden && (_.beginPath(), _.lineWidth = 2, _.moveTo(re, ye), _.lineTo(b.xPlus(re, pe), ye), _.stroke())
                    },
                    pt = function(It, Lt) {
                        switch (e.align) {
                            case "start":
                                return r.padding;
                            case "end":
                                return It - Lt;
                            default:
                                return (It - Lt + r.padding) / 2
                        }
                    },
                    mt = t.isHorizontal();
                y = mt ? {
                    x: t.left + pt(d, g[0]),
                    y: t.top + r.padding,
                    line: 0
                } : {
                    x: t.left + r.padding,
                    y: t.top + pt(u, m[0]),
                    line: 0
                }, x.rtl.overrideTextDirection(t.ctx, e.textDirection);
                var At = R + r.padding;
                x.each(t.legendItems, function(It, Lt) {
                    var qt = _.measureText(It.text).width,
                        pe = E + R / 2 + qt,
                        ne = y.x,
                        re = y.y;
                    b.setWidth(t.minSize.width), mt ? Lt > 0 && ne + pe + r.padding > t.left + t.minSize.width && (re = y.y += At, y.line++, ne = y.x = t.left + pt(d, g[y.line])) : Lt > 0 && re + At > t.top + t.minSize.height && (ne = y.x = ne + t.columnWidths[y.line] + r.padding, y.line++, re = y.y = t.top + pt(u, m[y.line]));
                    var ye = b.x(ne);
                    Q(ye, re, It), q[Lt].left = b.leftForLtr(ye, q[Lt].width), q[Lt].top = re, lt(ye, re, It, qt), mt ? y.x += pe + r.padding : y.y += At
                }), x.rtl.restoreTextDirection(t.ctx, e.textDirection)
            }
        },
        _getLegendItemAt: function(t, e) {
            var r, a, s, c = this;
            if (t >= c.left && t <= c.right && e >= c.top && e <= c.bottom) {
                for (s = c.legendHitBoxes, r = 0; r < s.length; ++r)
                    if (t >= (a = s[r]).left && t <= a.left + a.width && e >= a.top && e <= a.top + a.height) return c.legendItems[r]
            }
            return null
        },
        handleEvent: function(t) {
            var e, r = this,
                a = r.options,
                s = t.type === "mouseup" ? "click" : t.type;
            if (s === "mousemove") {
                if (!a.onHover && !a.onLeave) return
            } else if (s !== "click" || !a.onClick) return;
            e = r._getLegendItemAt(t.x, t.y), s === "click" ? e && a.onClick && a.onClick.call(r, t.native, e) : (a.onLeave && e !== r._hoveredItem && (r._hoveredItem && a.onLeave.call(r, t.native, r._hoveredItem), r._hoveredItem = e), a.onHover && e && a.onHover.call(r, t.native, e))
        }
    });

    function ks(t, e) {
        var r = new _s({
            ctx: t.ctx,
            options: e,
            chart: t
        });
        Be.configure(t, r, e), Be.addBox(t, r), t.legend = r
    }
    var Bu = {
            id: "legend",
            _element: _s,
            beforeInit: function(t) {
                var e = t.options.legend;
                e && ks(t, e)
            },
            beforeUpdate: function(t) {
                var e = t.options.legend,
                    r = t.legend;
                e ? (x.mergeIf(e, K.global.legend), r ? (Be.configure(t, r, e), r.options = e) : ks(t, e)) : r && (Be.removeBox(t, r), delete t.legend)
            },
            afterEvent: function(t, e) {
                var r = t.legend;
                r && r.handleEvent(e)
            }
        },
        mn = x.noop;
    K._set("global", {
        title: {
            display: !1,
            fontStyle: "bold",
            fullWidth: !0,
            padding: 10,
            position: "top",
            text: "",
            weight: 2e3
        }
    });
    var Ss = Ae.extend({
        initialize: function(t) {
            var e = this;
            x.extend(e, t), e.legendHitBoxes = []
        },
        beforeUpdate: mn,
        update: function(t, e, r) {
            var a = this;
            return a.beforeUpdate(), a.maxWidth = t, a.maxHeight = e, a.margins = r, a.beforeSetDimensions(), a.setDimensions(), a.afterSetDimensions(), a.beforeBuildLabels(), a.buildLabels(), a.afterBuildLabels(), a.beforeFit(), a.fit(), a.afterFit(), a.afterUpdate(), a.minSize
        },
        afterUpdate: mn,
        beforeSetDimensions: mn,
        setDimensions: function() {
            var t = this;
            t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0, t.minSize = {
                width: 0,
                height: 0
            }
        },
        afterSetDimensions: mn,
        beforeBuildLabels: mn,
        buildLabels: mn,
        afterBuildLabels: mn,
        beforeFit: mn,
        fit: function() {
            var t, e = this,
                r = e.options,
                a = e.minSize = {},
                s = e.isHorizontal();
            r.display ? (t = (x.isArray(r.text) ? r.text.length : 1) * x.options._parseFont(r).lineHeight + 2 * r.padding, e.width = a.width = s ? e.maxWidth : t, e.height = a.height = s ? t : e.maxHeight) : e.width = a.width = e.height = a.height = 0
        },
        afterFit: mn,
        isHorizontal: function() {
            var t = this.options.position;
            return t === "top" || t === "bottom"
        },
        draw: function() {
            var t = this,
                e = t.ctx,
                r = t.options;
            if (r.display) {
                var a, s, c, u = x.options._parseFont(r),
                    m = u.lineHeight,
                    d = m / 2 + r.padding,
                    g = 0,
                    y = t.top,
                    b = t.left,
                    _ = t.bottom,
                    P = t.right;
                e.fillStyle = x.valueOrDefault(r.fontColor, K.global.defaultFontColor), e.font = u.string, t.isHorizontal() ? (s = b + (P - b) / 2, c = y + d, a = P - b) : (s = r.position === "left" ? b + d : P - d, c = y + (_ - y) / 2, a = _ - y, g = Math.PI * (r.position === "left" ? -.5 : .5)), e.save(), e.translate(s, c), e.rotate(g), e.textAlign = "center", e.textBaseline = "middle";
                var D = r.text;
                if (x.isArray(D))
                    for (var R = 0, E = 0; E < D.length; ++E) e.fillText(D[E], 0, R, a), R += m;
                else e.fillText(D, 0, 0, a);
                e.restore()
            }
        }
    });

    function Ns(t, e) {
        var r = new Ss({
            ctx: t.ctx,
            options: e,
            chart: t
        });
        Be.configure(t, r, e), Be.addBox(t, r), t.titleBlock = r
    }
    var On = {},
        Eu = Au,
        Lu = Bu,
        Fu = {
            id: "title",
            _element: Ss,
            beforeInit: function(t) {
                var e = t.options.title;
                e && Ns(t, e)
            },
            beforeUpdate: function(t) {
                var e = t.options.title,
                    r = t.titleBlock;
                e ? (x.mergeIf(e, K.global.title), r ? (Be.configure(t, r, e), r.options = e) : Ns(t, e)) : r && (Be.removeBox(t, r), delete t.titleBlock)
            }
        };
    for (var js in On.filler = Eu, On.legend = Lu, On.title = Fu, xt.helpers = x, Rc(), xt._adapters = Oa, xt.Animation = Wn, xt.animationService = rr, xt.controllers = lr, xt.DatasetController = we, xt.defaults = K, xt.Element = Ae, xt.elements = he, xt.Interaction = ur, xt.layouts = Be, xt.platform = dr, xt.plugins = Bt, xt.Scale = _e, xt.scaleService = Br, xt.Ticks = Er, xt.Tooltip = Pa, xt.helpers.each(Su, function(t, e) {
            xt.scaleService.registerScaleType(e, t, t._defaults)
        }), On) On.hasOwnProperty(js) && xt.plugins.register(On[js]);
    xt.platform.initialize();
    var Wu = xt;
    return typeof window != "undefined" && (window.Chart = xt), xt.Chart = xt, xt.Legend = On.legend._element, xt.Title = On.title._element, xt.pluginService = xt.plugins, xt.PluginBase = xt.Element.extend({}), xt.canvasHelpers = xt.helpers.canvas, xt.layoutService = xt.layouts, xt.LinearScaleBase = ki, xt.helpers.each(["Bar", "Bubble", "Doughnut", "Line", "PolarArea", "Radar", "Scatter"], function(t) {
        xt[t] = function(e, r) {
            return new xt(e, xt.helpers.merge(r || {}, {
                type: t.charAt(0).toLowerCase() + t.slice(1)
            }))
        }
    }), Wu
}(function() {
    try {
        return Ch
    } catch (n) {}
}());
var Ph = Nl.exports;
const Th = $.memo(function() {
    const n = $.useMemo(() => [{
            label: 1,
            value: {
                icon: f.jsx(S.Icon, {
                    name: "Statistics"
                }),
                component: Dh
            }
        }, {
            label: 2,
            value: {
                icon: f.jsx(S.Icon, {
                    name: "Data"
                }),
                component: Oh
            }
        }], []),
        [i, o] = $.useState(n[0].value);
    return f.jsxs("div", {
        className: Bh,
        children: [f.jsx(S.Radio, {
            className: "history-tab",
            value: i,
            onChange: o,
            options: n,
            children: ({
                option: l,
                active: h
            }) => f.jsx("button", {
                className: h ? "is-active" : "",
                children: l.value.icon
            })
        }), f.jsx(i.component, {})]
    })
});

function Zl(n) {
    Ut();
    const i = Zt(),
        o = i.history.length,
        l = Math.min(o, 20 * n),
        h = l - 20;
    return i.history.slice(o - l, o - h).reverse()
}
const Dh = $.memo(function() {
        const n = Ut(),
            i = Zt(),
            {
                t: o
            } = S.useTranslation(),
            [l, h] = $.useState(1),
            p = Zl(l).map(v => f.jsxs("tr", {
                children: [f.jsx("td", {
                    children: f.jsxs("div", {
                        className: "game-link",
                        onClick: () => Gr.openAllPlayersNew({
                            gameUnique: n.gameUnique,
                            gameId: v.gameId
                        }),
                        children: [f.jsx("div", {
                            className: "dot type-" + (v.odds >= 10 ? 3 : v.odds >= 2 ? 2 : 1)
                        }), v.gameId]
                    })
                }), f.jsxs("td", {
                    children: [v.odds, "x"]
                }), f.jsx("td", {
                    children: f.jsxs("div", {
                        className: "flex-center",
                        children: [f.jsx("input", {
                            type: "text",
                            value: v.hash,
                            readOnly: !0
                        }), f.jsx("a", {
                            target: "_blank",
                            href: `${n.config.validateLink}?hash=${v.hash}&v=${_l(v.gameId)}&r=${n.crashState.houseEdge.toString(2)}`,
                            rel: "noreferrer",
                            children: o("Verify")
                        })]
                    })
                })]
            }, v.gameId));
        return f.jsxs("div", {
            className: Lh,
            children: [f.jsxs(S.Table, {
                children: [f.jsx("thead", {
                    children: f.jsxs("tr", {
                        children: [f.jsx("th", {
                            style: {
                                width: "24%"
                            },
                            children: o("Game ID")
                        }), f.jsx("th", {
                            style: {
                                width: "20%"
                            },
                            children: o("Result")
                        }), f.jsx("th", {
                            children: o("Hash")
                        })]
                    })
                }), f.jsx("tbody", {
                    children: p
                })]
            }), f.jsx(S.Pagination, {
                page: l,
                onChange: h,
                total: i.history.length
            })]
        })
    }),
    Oh = $.memo(function() {
        const n = $.useRef(null),
            i = $.useRef(null),
            o = Zt(),
            [l, h] = S.useSetState({
                page: 1
            }),
            [p, v] = $.useState(2),
            k = S.useIsDarken(),
            j = $.useRef(p);
        j.current = p;
        const N = Zl(l.page);
        return $.useEffect(() => {
            if (n.current) {
                const C = n.current.getContext("2d");
                i.current = function(B, L, z) {
                    const Y = B.createLinearGradient(140, 50, 140, 210);
                    return Y.addColorStop(0, "#40e248"), Y.addColorStop(.5, "#c8963c"), Y.addColorStop(1, "#ee2b44"), new Ph.Chart(B, {
                        type: "line",
                        data: {
                            labels: [0],
                            datasets: [{
                                data: [0],
                                borderColor: Y,
                                fill: !1,
                                borderWidth: 3,
                                backgroundColor: Y,
                                pointBorderColor: Y,
                                pointBackgroundColor: Y,
                                pointBorderWidth: 1,
                                pointRadius: 1
                            }]
                        },
                        options: {
                            maintainAspectRatio: !1,
                            legend: {
                                display: !1
                            },
                            elements: {
                                line: {
                                    tension: 1e-6
                                }
                            },
                            animation: {
                                easing: "linear",
                                onComplete: Z => {
                                    const rt = Z.chart,
                                        wt = rt.ctx,
                                        vt = rt.getDatasetMeta(0).data,
                                        W = rt.config.data.datasets[0].data;
                                    wt.font = "12px Arial", wt.textAlign = "center", wt.textBaseline = "bottom", W.forEach((at, J) => {
                                        const X = vt[J]._model.x,
                                            nt = vt[J]._model.y;
                                        wt.fillStyle = at.value >= L() ? "#3BC117" : "#ed6300",
                                            function(st, _t, gt, Nt, jt, Wt) {
                                                Nt < 2 * Wt && (Wt = Nt / 2), jt < 2 * Wt && (Wt = jt / 2), st.beginPath(), st.moveTo(_t + Wt, gt), st.arcTo(_t + Nt, gt, _t + Nt, gt + jt, Wt), st.arcTo(_t + Nt, gt + jt, _t, gt + jt, Wt), st.arcTo(_t, gt + jt, _t, gt, Wt), st.arcTo(_t, gt, _t + Nt, gt, Wt), st.closePath()
                                            }(wt, X - 30, nt - 10, 60, 20, 10), wt.fill(), wt.fillStyle = "#fff", wt.fillText(`${at.value.toFixed(2)}x`, X, nt + 7)
                                    })
                                }
                            },
                            layout: {
                                padding: {
                                    top: 20
                                }
                            },
                            tooltips: {
                                enabled: !1
                            },
                            scales: {
                                xAxes: [{
                                    gridLines: {
                                        color: Ci(z ? "#31343c" : "#cccfd9", .6)
                                    },
                                    ticks: {
                                        fontColor: Ci(z ? "#99a4b0" : "#5f6975", .8)
                                    }
                                }],
                                yAxes: [{
                                    gridLines: {
                                        color: Ci(z ? "#31343c" : "#cccfd9", .6)
                                    },
                                    ticks: {
                                        fontColor: Ci(z ? "#99a4b0" : "#5f6975", .8)
                                    }
                                }]
                            }
                        }
                    })
                }(C, () => j.current, k)
            }
        }, []), $.useEffect(() => {
            const C = i.current;
            C && (C.data.labels = ["", `[1, ${p})`, `[${p}, ∞)`, ""], C.data.datasets = [{
                data: N.map(B => ({
                    x: B.odds >= p ? `[${p}, ∞)` : `[1, ${p})`,
                    y: B.gameId,
                    value: B.odds
                })),
                borderWidth: 2,
                borderColor: "#3BC117",
                pointBorderColor: "#3BC117",
                backgroundColor: "transparent",
                pointRadius: 2
            }], C.update())
        }, [N, p]), f.jsxs("div", {
            className: Eh,
            children: [f.jsx(Ah, {
                onChange: v
            }), f.jsx(Rh, {
                rate: p
            }), f.jsx("div", {
                className: "chart-wrap",
                children: f.jsx("canvas", {
                    ref: n
                })
            }), f.jsx(S.Pagination, {
                page: l.page,
                onChange: C => h({
                    page: C
                }),
                total: o.history.length
            })]
        })
    }),
    Ah = ({
        onChange: n
    }) => {
        const {
            t: i
        } = S.useTranslation(), [o, l] = $.useState(2);
        return f.jsxs("div", {
            className: "fix-layer",
            children: [f.jsx("div", {
                children: i("Last 2000 issue, payout <")
            }), f.jsx(S.InputNumber, {
                value: o,
                onChange: l
            }), f.jsx(S.Button, {
                onClick: () => n(o),
                type: "conic",
                children: i("Analysis")
            })]
        })
    },
    Rh = $.memo(({
        rate: n
    }) => {
        const i = Zt(),
            {
                t: o
            } = S.useTranslation(),
            l = [{
                label: `[1, ${n})`,
                continuityCounts: 0,
                continuityMax: 0,
                counts: 0
            }, {
                label: `[${n}, ∞)`,
                continuityCounts: 0,
                continuityMax: 0,
                counts: 0
            }];
        let h = -1;
        i.history.forEach(v => {
            const k = v.odds < n ? 0 : 1;
            l.forEach((j, N) => {
                const C = k === N;
                (function(B, L, z) {
                    L && B.counts++, z ? (B.continuityCounts++, B.continuityMax = Math.max(B.continuityCounts, B.continuityMax)) : B.continuityCounts = 0
                })(j, C, C && N === h)
            }), h = k
        });
        const p = l.map(v => f.jsxs("tr", {
            children: [f.jsx("td", {
                children: v.label
            }), f.jsxs("td", {
                children: [(100 * v.counts / i.history.length).toFixed(2), "%"]
            }), f.jsx("td", {
                children: v.counts
            }), f.jsx("td", {
                children: v.continuityMax
            })]
        }, v.label));
        return f.jsx(f.Fragment, {
            children: f.jsx("table", {
                children: f.jsxs("tbody", {
                    children: [f.jsxs("tr", {
                        children: [f.jsx("td", {
                            children: o("Multiple")
                        }), f.jsx("td", {
                            children: o("Chance")
                        }), f.jsx("td", {
                            children: o("Number of occurrences")
                        }), f.jsx("td", {
                            children: o("Longest Combo")
                        })]
                    }), p]
                })
            })
        })
    }),
    Bh = "sdg2naf",
    Eh = "a313t97",
    Lh = "h1cw04l8";

function Fh({
    scroll: n = !1
}) {
    const i = Ut(),
        o = S.useAccount(),
        l = S.useForceUpdate(),
        h = S.useMountedState(),
        {
            t: p
        } = S.useTranslation(),
        [v, k] = $.useState(10),
        j = S.useResize(({
            height: Z
        }) => {
            const rt = Z / S.app.relativePx(48);
            k(rt - Math.trunc(rt) > .3 ? Math.ceil(rt) : Math.floor(rt))
        }),
        [N] = $.useState(() => an.throttle(() => h() && l(), 200));
    $.useEffect(() => (i.on("player_change", N), () => {
        i.off("player_change", N)
    }), []);
    let C = i.players.slice(0, i.isShowMore ? 1 / 0 : n ? v : 10);
    const B = i.playersDict[o.userId];
    B && !i.isShowMore && C.indexOf(B) === -1 && (C.pop(), C.push(B)), C = an.orderBy(C, [Z => Z.rate === 0 ? -1 / 0 : -Z.rate, Z => -Z.usd]);
    const L = $.useCallback(() => {
            i.isShowMore = !i.isShowMore, l()
        }, []),
        z = n && i.isShowMore ? "has-scroll" : "",
        Y = C.length === 0 ? f.jsx(S.Empty, {}) : f.jsx(S.Table, {
            children: f.jsx("tbody", {
                children: C.map(Z => f.jsx(Yh, {
                    player: Z
                }, Z.userId.toNumber()))
            })
        });
    return f.jsx(S.UpdateInView, {
        children: f.jsxs("div", {
            className: sn(Vh, n && "need-scroll"),
            children: [f.jsx(zh, {}), f.jsx(Wh, {}), z ? f.jsx(S.ScrollView, {
                bodyLock: !1,
                ref: j,
                className: "scroll-wrap has-scroll",
                children: Y
            }) : f.jsx("div", {
                ref: j,
                className: "scroll-wrap",
                children: Y
            }), f.jsx("div", {
                className: "foot",
                children: f.jsxs("button", {
                    onClick: L,
                    className: "list-toggle " + (i.isShowMore ? "show-less" : "show-more"),
                    children: [f.jsx("div", {
                        children: i.isShowMore ? p("Show less") : p("Show more")
                    }), f.jsx(S.Icon, {
                        name: "Arrow"
                    })]
                })
            })]
        })
    })
}
const Wh = cn.memo(() => {
        const {
            t: n
        } = S.useTranslation();
        return f.jsx("table", {
            className: "head",
            children: f.jsx("tbody", {
                children: f.jsxs("tr", {
                    children: [f.jsx("td", {
                        className: "user",
                        children: n("Player")
                    }), f.jsx("td", {
                        className: "escape",
                        children: n("Cash Out")
                    }), f.jsx("td", {
                        className: "amount",
                        children: n("Amount")
                    }), f.jsx("td", {
                        children: n("Profit")
                    })]
                })
            })
        })
    }),
    zh = function() {
        const {
            t: n
        } = S.useTranslation(), i = Ut(), o = Zt(), l = S.useLocalCurrency(!0), h = S.valtio.useProxy(i.xbet.getState());
        let p = "progress",
            v = 0,
            k = null;

        function j() {
            return i.normalTotalBetAmount.add(h.xbetTotalBetAmount).toNumber()
        }
        if (o.status === fe.ENDED)
            if (o.rate > 1) {
                const N = an.maxBy(i.players, C => C.rate * C.usd);
                N && N.rate > 0 && (p = "win", k = f.jsx("div", {
                    className: "msg",
                    children: f.jsxs(S.Trans, {
                        i18nKey: "crash.congrates_msg",
                        children: [f.jsx("span", {
                            children: "🎉Congrats"
                        }), f.jsx(S.BC.UserInfo, {
                            className: "winner",
                            at: !0,
                            avatar: !1,
                            userId: N.userId.toNumber(),
                            name: N.name
                        }), f.jsx("span", {
                            children: " won the most!"
                        })]
                    })
                }), v = N.usd * (N.rate / 100 - 1))
            } else p = "lose", k = f.jsx("div", {
                className: "msg",
                children: n("{{mascot}} took it all! 🥺", {
                    mascot: S.env.mascot
                })
            }), v = j();
        else k = f.jsx("div", {
            className: "players",
            children: `${i.escapeCount}/${i.normalBetPlayersCount+h.xbetPlayersCount} ${n("Player")}`
        }), v = j();
        return f.jsxs("div", {
            className: sn("state", `is-${p}`),
            children: [k, f.jsx("div", {
                className: "amount",
                children: l.amount2localStr(new S.Decimal(v), "USD")
            })]
        })
    },
    Yh = ({
        player: n
    }) => {
        const i = Zt(),
            {
                t: o
            } = S.useTranslation();
        let l, h;
        return n.rate > 0 ? (l = f.jsx(S.BC.CoinFormat, {
            icon: !0,
            className: "is-win",
            name: n.currencyName,
            amount: n.bet.mul(n.rate / 100 - 1)
        }), h = (n.rate / 100).toFixed(2) + "x") : i.status === fe.ENDED ? (l = f.jsx(S.BC.CoinFormat, {
            className: "is-lose",
            icon: !0,
            name: n.currencyName,
            amount: n.bet.neg()
        }), h = "bang") : (l = f.jsx("span", {
            className: "ttl opacity",
            children: o("Betting")
        }), h = f.jsx("span", {
            className: "ttl opacity",
            children: o("Betting")
        })), f.jsxs("tr", {
            children: [f.jsx("td", {
                className: "user",
                children: f.jsx(S.BC.UserInfo, {
                    name: n.name,
                    userId: n.userId.toNumber()
                })
            }), f.jsx("td", {
                className: "escape",
                children: h
            }), f.jsx("td", {
                className: "bet",
                children: f.jsx(S.BC.CoinFormat, {
                    icon: !0,
                    name: n.currencyName,
                    amount: n.bet
                })
            }), f.jsx("td", {
                className: "profit",
                children: l
            })]
        })
    },
    Vh = "wvp088o";

function Jl() {
    const n = Ut(),
        {
            betInfo: i
        } = Zt(),
        o = S.useLocalCurrency(),
        l = er.useMotionValue(0),
        h = er.useTransform(() => i ? o.amount2localStr(i.bet.mul(l.get()), i.currencyName) : "");
    return $.useEffect(() => {
        function p(v) {
            l.set(v)
        }
        return n.graph.on("payoutChange", p), () => {
            n.graph.off("payoutChange", p)
        }
    }, []), h
}
const Hh = $.memo(function() {
        const n = Zt(),
            i = Jl(),
            o = S.useAccount(),
            {
                t: l
            } = S.useTranslation();
        return n.status !== fe.PROGRESS ? null : o.login && n.isLoginUserJoinGame ? n.isLoginuserEscapeGame ? null : n.betInfo ? f.jsx("div", {
            className: Uh,
            children: f.jsxs("div", {
                className: "payout-inner",
                children: [f.jsx("p", {
                    children: l("My win:")
                }), f.jsx(S.BC.CoinIcon, {
                    name: n.betInfo.currencyName
                }), f.jsx(er.motion.div, {
                    className: "amount",
                    children: i
                })]
            })
        }) : null : null
    }),
    Uh = "pcc4jqt",
    Gh = $.memo(function() {
        const n = Zt(),
            i = Ut(),
            [o, l] = $.useState(i.crashState.houseEdge);
        return Ro(i.crashState, () => {
            l(i.crashState.houseEdge)
        }), f.jsxs("div", {
            className: Kh,
            children: [f.jsx($h, {}), f.jsxs("div", {
                className: "forms",
                children: [f.jsx("div", {
                    className: "form-item",
                    children: f.jsx(vn.CoinInput, {})
                }), f.jsx(vn.PayoutInput, {
                    label: f.jsx(qh, {
                        chance: (100 - o) / n.maxRate
                    }),
                    value: n.maxRate,
                    className: "cashout-input",
                    min: 1.01,
                    max: 1e6,
                    onChange: h => n.maxRate = h,
                    precision: 2
                })]
            })]
        })
    }),
    qh = cn.memo(({
        chance: n
    }) => {
        const {
            t: i
        } = S.useTranslation();
        return f.jsxs("div", {
            className: "chance-title",
            children: [f.jsx("div", {
                className: "auto-title",
                title: i("Auto cash out"),
                children: i("Auto cash out")
            }), f.jsxs("div", {
                children: [i("Chance"), f.jsxs("span", {
                    className: "chance-num",
                    children: [n.toFixed(2), "%"]
                })]
            })]
        })
    }),
    $h = $.memo(() => {
        const n = Zt();
        return n.status === fe.STARTING ? f.jsx(Zh, {}) : n.status === fe.PROGRESS && n.betInfo && n.betInfo.rate === 0 ? f.jsx(Kl, {
            betInfo: n.betInfo
        }) : f.jsx(Jh, {})
    }),
    Xh = $.memo(() => {
        const {
            t: n
        } = S.useTranslation(), i = Ut(), o = Zt();
        return i.canEscape ? f.jsx(Kl, {
            betInfo: o.betInfo
        }) : f.jsx(S.Button, {
            className: Nr,
            type: "conic4",
            disabled: !0,
            children: f.jsx("div", {
                children: n("Cash Out")
            })
        })
    }),
    Zh = $.memo(() => {
        const {
            t: n
        } = S.useTranslation(), i = Ut(), o = Zt();
        return o.betInfo ? f.jsx(S.Button, {
            className: Nr,
            type: "conic",
            disabled: o.script.isRunning,
            children: f.jsx("div", {
                children: n("Loading...")
            })
        }) : f.jsx(S.Button, {
            className: Nr,
            type: "conic",
            disabled: o.script.isRunning,
            onClick: () => i.handleBetCrash().catch(S.notify),
            children: f.jsx("div", {
                children: n("Bet")
            })
        })
    }),
    Kl = $.memo(({
        betInfo: n
    }) => {
        const {
            t: i
        } = S.useTranslation(), o = Ut(), {
            gameId: l
        } = Zt(), h = Jl(), p = $.useCallback(async () => {
            const v = l;
            try {
                await o.handleEscape()
            } catch (k) {
                S.notify(new Error(`Escape(${v}): ${k.message}`))
            }
        }, [l]);
        return f.jsxs(S.Button, {
            className: Nr,
            type: "conic4",
            onClick: p,
            children: [f.jsx(er.motion.div, {
                className: "monospace",
                children: h
            }), f.jsx("div", {
                className: "sub-text",
                children: i("Cash Out")
            })]
        })
    }),
    Jh = $.memo(() => {
        const {
            t: n
        } = S.useTranslation(), i = Ut(), o = Zt();
        return o.nextBetInfo ? f.jsxs(S.Button, {
            type: "conic",
            className: Nr,
            disabled: o.script.isRunning,
            onClick: () => i.handleNext(!0),
            children: [f.jsx("div", {
                children: n("Loading...")
            }), f.jsx("div", {
                className: "sub-text",
                children: n("(Cancel)")
            })]
        }) : f.jsxs(S.Button, {
            type: "conic",
            className: Nr,
            disabled: o.script.isRunning,
            onClick: () => i.handleNext(),
            children: [f.jsx("div", {
                children: n("Bet")
            }), f.jsx("div", {
                className: "sub-text",
                children: n("(Next round)")
            })]
        })
    }),
    Kh = "w7x5n1",
    Nr = "bu60zgx",
    Qh = cn.memo(function() {
        return f.jsx(fd, {
            children: f.jsx("div", {
                children: f.jsx(Xh, {})
            })
        })
    }),
    tf = cn.memo(() => {
        const n = $.useRef(null),
            i = Zt(),
            [o, l] = $.useState(!1);
        return $.useEffect(() => {
            l(i.rate > 100 && i.status === fe.PROGRESS)
        }, [i]), $.useEffect(() => {
            if (o) {
                const h = {
                        fram: 0
                    },
                    p = uo.to(h, 1, {
                        fram: 5,
                        repeat: -1,
                        yoyo: !0,
                        ease: Ju.Linear.easeNone,
                        onUpdate: () => {
                            n.current && (n.current.style.backgroundPositionY = 186 * Math.round(-h.fram) + "px")
                        }
                    });
                return () => {
                    p.kill(), uo.killTweensOf(p)
                }
            }
        }, [o]), o ? f.jsx("div", {
            className: ef,
            ref: n
        }) : null
    }),
    ef = "cqim897",
    nf = cn.memo(function() {
        const n = Ut(),
            i = S.useLocalCurrency(),
            o = S.useResize(() => {
                n.graph.resize()
            }, 300),
            {
                t: l
            } = S.useTranslation(),
            [h, p] = gd(({
                profitAmount: v,
                currencyName: k
            }) => f.jsxs(er.motion.div, {
                initial: {
                    scale: 0
                },
                animate: {
                    scale: 1
                },
                className: af,
                children: [f.jsxs("div", {
                    className: "msg",
                    children: [f.jsx("span", {
                        children: l("You Won")
                    }), f.jsx("span", {
                        className: "amount",
                        children: i.amount2localStr(v, k)
                    })]
                }), f.jsx("img", {
                    src: Vt.win
                })]
            }));
        return $.useEffect(() => {
            const v = ({
                amount: k,
                odds: j,
                currencyName: N
            }) => {
                j > 1 && (p({
                    profitAmount: new S.Decimal(k).mul(j),
                    currencyName: N,
                    odds: j
                }), setTimeout(() => p(null), 3e3))
            };
            return n.on("escapeSuccess", v), () => {
                n.off("escapeSuccess", v)
            }
        }, []), f.jsxs("div", {
            className: rf,
            ref: o,
            children: [f.jsx(tf, {}), h, f.jsx("canvas", {
                className: h.props.children ? "is-win" : "",
                ref: v => n.graph.mountEffect(v)
            }), f.jsx(Hh, {})]
        })
    }),
    rf = "cu3dwcj",
    af = "wbcgem6",
    of = [2, 1, 2, 0, 0, 0, 2, 0, 3, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    sf = [2, 1, 2, 0, 0, 0, 3, 1, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0],
    lf = [5.64, 2.63, 4.15, 1.82, 2.31, 18.78],
    cf = [2.25, 18.12, 4.21, 3.24, 2.14, 3.31, 5.55, 1.32, 1.96, 4.46],
    uf = cn.memo(function() {
        const {
            t: n
        } = S.useTranslation(), i = To();
        return f.jsx(f.Fragment, {
            children: f.jsxs("button", {
                className: hf,
                onClick: () => i(f.jsx(df, {})),
                children: [f.jsx(S.Icon, {
                    className: "help-ico",
                    name: "Help"
                }), f.jsx("div", {
                    children: n("Understanding Trend Chart")
                })]
            })
        })
    });

function df() {
    const {
        t: n
    } = S.useTranslation();
    return f.jsx(S.Dialog, {
        title: n("Understanding Trend Chart"),
        children: f.jsxs("div", {
            className: ff,
            children: [f.jsxs("div", {
                className: "tip",
                children: [f.jsxs("div", {
                    className: "up",
                    children: [f.jsx(Ur, {
                        type: 2
                    }), "≥2×"]
                }), f.jsxs("div", {
                    className: "up",
                    children: [f.jsx(Ur, {
                        type: 1
                    }), "<2×"]
                }), f.jsxs("div", {
                    className: "up",
                    children: [f.jsx(Ur, {
                        type: 3
                    }), "≥10×"]
                })]
            }), f.jsxs("div", {
                className: "wrap",
                children: [f.jsx(il, {
                    target: of ,
                    source: lf
                }), f.jsx(il, {
                    target: sf,
                    source: cf
                })]
            })]
        })
    })
}
const il = ({
        target: n,
        source: i
    }) => {
        const {
            t: o
        } = S.useTranslation();
        return f.jsxs("div", {
            className: "demo",
            children: [f.jsx("div", {
                className: "chart",
                children: n.map((l, h) => f.jsx(Ur, {
                    type: l
                }, h))
            }), f.jsxs("div", {
                className: "summary",
                children: [f.jsxs("div", {
                    children: [o("As shown in the chart, the corresponding sequence is"), ":"]
                }), f.jsx("div", {
                    className: "res-list",
                    children: i.map((l, h) => f.jsxs("div", {
                        className: "item",
                        children: [f.jsx("div", {
                            className: "r-item " + (l < 2 ? "red" : l < 10 ? "green" : "moon"),
                            children: l
                        }), h < i.length - 1 && f.jsx(S.Icon, {
                            name: "Direction"
                        })]
                    }, h))
                })]
            })]
        })
    },
    hf = "bxzg46v",
    ff = "sp0qdg5";
class mf {
    constructor() {
        ct(this, "row", 0);
        ct(this, "col", 0)
    }
    computeSpaceMatrix(i) {
        const o = new Array(this.row * this.col).fill(null);
        for (let l = 0; l < i.length; l++) {
            const h = i[l];
            for (let p = 0; p < h.length; p++) {
                const v = h[p];
                let k = null,
                    j = null;
                if (p === 0) {
                    if (k = o[this.indexOfMatrix(l, p + 1)], k || l === this.col - 1) return this.computeSpaceMatrix(i.slice(1));
                    v.vector = [p, l], v.direction = 0
                } else {
                    const N = h[p - 1];
                    let [C, B] = N.vector.slice();
                    if (N.direction === 0 && C + 1 < this.row) {
                        const L = o[this.indexOfMatrix(B, C + 1)];
                        if (C + 2 < this.row && (k = o[this.indexOfMatrix(B, C + 2)]), B > 0 && (j = o[this.indexOfMatrix(B - 1, C + 1)]), k && k.value === v.value) {
                            if (C === 0) return this.computeSpaceMatrix(i.slice(1));
                            B++, v.direction = 1
                        } else j && j.value === v.value || L ? (B++, v.direction = 1) : (C++, v.direction = 0)
                    } else B++, v.direction = 1;
                    if (B === this.col - 1) return l === 0 ? i[0].shift() : i = i.slice(1), this.computeSpaceMatrix(i);
                    v.vector = [C, B]
                }
                o[this.indexOfMatrix(v.vector[1], v.vector[0])] = v
            }
        }
        return o.map(l => l ? l.value : 0)
    }
    indexOfMatrix(i, o) {
        return i + o * this.col
    }
    getDragons(i) {
        const o = [];
        for (let l = 0; l < i.length; l++) {
            const h = {
                vector: [-1, -1],
                value: i[l],
                direction: 0
            };
            this.isEqual(i[l], i[l - 1]) ? o[o.length - 1].push(h) : o.push([h])
        }
        return o
    }
    isEqual(i, o) {
        if (i < 2 && o < 2 || i >= 2 && o >= 2) return !0
    }
    render(i, o = this.row, l = this.col) {
        return this.row = o, this.col = l, this.computeSpaceMatrix(this.getDragons(i))
    }
}
const al = 430,
    gf = $.memo(function() {
        const n = S.useIsMobile(),
            [i, o] = S.useSetState({
                visible: !1,
                x: 0,
                y: 0
            }),
            {
                t: l
            } = S.useTranslation();
        return f.jsxs(f.Fragment, {
            children: [f.jsx("div", {
                className: sn(yf, "trends-button"),
                children: f.jsx(S.Button, {
                    onClick: () => {
                        const h = function() {
                            const p = document.getElementsByClassName("game-main")[0];
                            if (!p) return {
                                x: 0,
                                y: 0
                            };
                            const v = p.getBoundingClientRect();
                            let k = v.x + v.width + 16;
                            k + al > window.innerWidth && (k = window.innerWidth - al);
                            const j = Math.max(v.y + v.height, 100);
                            return {
                                x: k,
                                y: j
                            }
                        }();
                        o(mr(Xn({}, h), {
                            visible: !i.visible
                        }))
                    },
                    className: "flex-center " + (i.visible ? "is-active" : ""),
                    children: f.jsx(S.Icon, {
                        name: "Trends"
                    })
                })
            }), n ? i.visible && f.jsx(ol, {}) : f.jsx(S.DragDialog, {
                x: i.x,
                y: i.y - 6,
                title: l("Trends"),
                visible: i.visible,
                onClose: () => o({
                    visible: !1
                }),
                children: f.jsx(ol, {})
            })]
        })
    }),
    ol = $.memo(function() {
        const n = Zt(),
            [i] = $.useState(() => new mf),
            o = $.useRef(null),
            l = n.history.slice(-192).map(({
                odds: p
            }) => p < 2 ? 1 : p < 10 ? 2 : 3),
            h = i.render(l, 6, 32);
        return $.useEffect(() => {
            const p = o.current;
            if (p) {
                const {
                    scrollLeft: v,
                    scrollWidth: k
                } = p;
                (v === 0 || v > 350) && p.scrollTo(k, 0)
            }
        }), f.jsxs("div", {
            className: vf,
            children: [f.jsx("div", {
                className: "dots-wrap",
                ref: o,
                children: f.jsx(pf, {
                    dots: h
                })
            }), f.jsx(uf, {})]
        })
    }),
    pf = ({
        dots: n
    }) => f.jsx("div", {
        className: "dots",
        children: n.map((i, o) => f.jsx(Ur, {
            type: i
        }, o))
    });

function Ur({
    type: n
}) {
    return f.jsx("div", {
        className: `${bf} dot type-${n}`
    })
}
const yf = "t18jotl9",
    vf = "t29bbfc",
    bf = "d68k17c",
    xf = $.memo(({
        style: n,
        data: i,
        onClick: o
    }) => f.jsxs("div", {
        className: "game-item " + (i.odds >= 10 ? "is-moon" : i.odds >= 2 ? "is-doubble" : ""),
        style: n,
        onClick: () => o(i),
        children: [f.jsx("div", {
            className: "issus",
            children: i.gameId
        }), f.jsxs("div", {
            children: [(Math.round(100 * i.odds) / 100).toFixed(2), "x"]
        })]
    })),
    wf = $.memo(({
        children: n
    }) => {
        const i = Ut(),
            o = Zt(),
            l = $.useMemo(() => o.history.slice(-10).reverse(), [o.history]),
            h = $.useCallback(({
                gameId: p
            }) => {
                Gr.openAllPlayersNew({
                    gameUnique: i.gameUnique,
                    gameId: p
                })
            }, [i]);
        return f.jsxs(f.Fragment, {
            children: [n, f.jsx(Ku, {
                list: l,
                className: _f,
                keyof: "gameId",
                onDetail: h,
                item: xf,
                children: f.jsx(gf, {})
            }), f.jsx(md, {
                className: kf,
                children: f.jsx(nf, {})
            })]
        })
    }),
    _f = "cr6u028",
    kf = "gpjvx3v",
    Sf = $.memo(({
        type: n
    }) => {
        const {
            t: i
        } = S.useTranslation();
        S.useNavigate();
        const o = S.useSetSearch(),
            l = Ut(),
            [h] = $.useState(() => [{
                label: i("Classic"),
                path: "classic",
                value: null
            }, {
                label: i("Trenball"),
                path: "trenball",
                value: null
            }, {
                label: f.jsxs("div", {
                    className: "tab-wrapper",
                    children: [i("Betting Strategy"), " ", f.jsx("img", {
                        src: Vt.newIcon,
                        className: "icon"
                    })]
                }),
                path: "bettingStrategy",
                value: null
            }]),
            p = h.findIndex(v => v.path === n);
        return f.jsx(S.Tabs, {
            value: p,
            tabs: h,
            className: Nf,
            onChange: v => {
                o({
                    0: {
                        type: ""
                    },
                    1: {
                        type: "trenball"
                    },
                    2: {
                        type: "bettingStrategy"
                    }
                }[v]), l.crashState.gameMode = v === 0 ? "classic" : v === 1 ? "trenball" : "bettingStrategy", window.history.pushState({}, "", v === 0 ? "/game/crash" : v === 1 ? "/game/crash?type=trenball" : "/game/crash?type=bettingStrategy")
            }
        })
    }),
    Nf = "w137zsd9";
var So = {},
    Zi = {};
Object.defineProperty(Zi, "__esModule", {
    value: !0
}), Zi.PopoverPortal = void 0;
var jf = $,
    Mf = yd;
Zi.PopoverPortal = function(n) {
    var i = n.container,
        o = n.element,
        l = n.scoutElement,
        h = n.children;
    return (0, jf.useLayoutEffect)(function() {
        return i.appendChild(o), i.appendChild(l),
            function() {
                i.removeChild(o), i.removeChild(l)
            }
    }, [i, o, l]), (0, Mf.createPortal)(h, o)
};
var aa = {};
(function(n) {
    var i = We && We.__assign || function() {
        return i = Object.assign || function(o) {
            for (var l, h = 1, p = arguments.length; h < p; h++)
                for (var v in l = arguments[h]) Object.prototype.hasOwnProperty.call(l, v) && (o[v] = l[v]);
            return o
        }, i.apply(this, arguments)
    };
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), n.getNudgedPopoverRect = n.getNewPopoverRect = n.popoverRectForPosition = n.createContainer = n.rectsAreEqual = n.createRect = n.EMPTY_RECT = void 0, n.EMPTY_RECT = {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: 0,
        height: 0
    }, n.createRect = function(o) {
        var l = o.top,
            h = o.left,
            p = o.width,
            v = o.height;
        return {
            top: l,
            left: h,
            width: p,
            height: v,
            right: h + p,
            bottom: l + v
        }
    }, n.rectsAreEqual = function(o, l) {
        return o === l || (o == null ? void 0 : o.bottom) === (l == null ? void 0 : l.bottom) && (o == null ? void 0 : o.height) === (l == null ? void 0 : l.height) && (o == null ? void 0 : o.left) === (l == null ? void 0 : l.left) && (o == null ? void 0 : o.right) === (l == null ? void 0 : l.right) && (o == null ? void 0 : o.top) === (l == null ? void 0 : l.top) && (o == null ? void 0 : o.width) === (l == null ? void 0 : l.width)
    }, n.createContainer = function(o) {
        var l = o.containerStyle,
            h = o.containerClassName,
            p = o.id,
            v = window.document.createElement("div");
        return v.id = p, h && (v.className = h), Object.assign(v.style, l), v
    }, n.popoverRectForPosition = function(o, l, h, p, v) {
        var k, j, N = l.left + l.width / 2,
            C = l.top + l.height / 2,
            B = h.width,
            L = h.height;
        switch (o) {
            case "left":
                k = C - L / 2, j = l.left - p - B, v === "start" && (k = l.top), v === "end" && (k = l.bottom - L);
                break;
            case "bottom":
                k = l.bottom + p, j = N - B / 2, v === "start" && (j = l.left), v === "end" && (j = l.right - B);
                break;
            case "right":
                k = C - L / 2, j = l.right + p, v === "start" && (k = l.top), v === "end" && (k = l.bottom - L);
                break;
            default:
                k = l.top - L - p, j = N - B / 2, v === "start" && (j = l.left), v === "end" && (j = l.right - B)
        }
        return (0, n.createRect)({
            left: j,
            top: k,
            width: B,
            height: L
        })
    }, n.getNewPopoverRect = function(o, l) {
        var h = o.position,
            p = o.align,
            v = o.childRect,
            k = o.popoverRect,
            j = o.boundaryRect,
            N = o.padding,
            C = o.reposition,
            B = (0, n.popoverRectForPosition)(h, v, k, N, p);
        return {
            rect: B,
            boundaryViolation: C && (h === "top" && B.top < j.top + l || h === "left" && B.left < j.left + l || h === "right" && B.right > j.right - l || h === "bottom" && B.bottom > j.bottom - l)
        }
    }, n.getNudgedPopoverRect = function(o, l, h) {
        var p = l.top + h,
            v = l.left + h,
            k = l.right - h,
            j = l.bottom - h,
            N = o.top < p ? p : o.top;
        N = N + o.height > j ? j - o.height : N;
        var C = o.left < v ? v : o.left;
        return C = C + o.width > k ? k - o.width : C, (0, n.createRect)(i(i({}, o), {
            top: N,
            left: C
        }))
    }
})(aa);
var Ji = {},
    Ki = {};
Object.defineProperty(Ki, "__esModule", {
    value: !0
}), Ki.useElementRef = void 0;
var sl = $,
    If = aa;
Ki.useElementRef = function(n) {
    var i = n.containerClassName,
        o = n.containerStyle,
        l = n.id,
        h = (0, sl.useRef)(),
        p = (0, sl.useMemo)(function() {
            return (0, If.createContainer)({
                containerStyle: o,
                containerClassName: i,
                id: l
            })
        }, [i, o, l]);
    return h.current = p, h
}, Object.defineProperty(Ji, "__esModule", {
    value: !0
}), Ji.usePopover = void 0;
var Cf = $,
    br = aa,
    ll = Ki,
    Pf = {
        position: "fixed",
        overflow: "visible",
        top: "0px",
        left: "0px"
    },
    Tf = {
        position: "fixed",
        top: "0px",
        left: "0px",
        width: "0px",
        height: "0px",
        visibility: "hidden"
    };
Ji.usePopover = function(n) {
    var i = n.isOpen,
        o = n.childRef,
        l = n.positions,
        h = n.containerClassName,
        p = n.parentElement,
        v = n.transform,
        k = n.transformMode,
        j = n.align,
        N = n.padding,
        C = n.reposition,
        B = n.boundaryInset,
        L = n.boundaryElement,
        z = n.onPositionPopover,
        Y = (0, ll.useElementRef)({
            id: "react-tiny-popover-scout",
            containerStyle: Tf
        }),
        Z = (0, ll.useElementRef)({
            id: "react-tiny-popover-container",
            containerClassName: h,
            containerStyle: Pf
        }),
        rt = (0, Cf.useCallback)(function(wt) {
            var vt, W, at = wt === void 0 ? {} : wt,
                J = at.positionIndex,
                X = J === void 0 ? 0 : J,
                nt = at.parentRect,
                st = nt === void 0 ? p.getBoundingClientRect() : nt,
                _t = at.childRect,
                gt = _t === void 0 ? (vt = o == null ? void 0 : o.current) === null || vt === void 0 ? void 0 : vt.getBoundingClientRect() : _t,
                Nt = at.scoutRect,
                jt = Nt === void 0 ? (W = Y == null ? void 0 : Y.current) === null || W === void 0 ? void 0 : W.getBoundingClientRect() : Nt,
                Wt = at.popoverRect,
                te = Wt === void 0 ? Z.current.getBoundingClientRect() : Wt,
                Gt = at.boundaryRect,
                Jt = Gt === void 0 ? L === p ? st : L.getBoundingClientRect() : Gt;
            if (gt && st && i) {
                if (v && k === "absolute") {
                    var un = typeof v == "function" ? v({
                            childRect: gt,
                            popoverRect: te,
                            parentRect: st,
                            boundaryRect: Jt,
                            padding: N,
                            align: j,
                            nudgedTop: 0,
                            nudgedLeft: 0,
                            boundaryInset: B,
                            violations: br.EMPTY_RECT,
                            hasViolations: !1
                        }) : v,
                        Ze = un.top,
                        Ot = un.left,
                        be = Math.round(st.left + Ot - jt.left),
                        Je = Math.round(st.top + Ze - jt.top);
                    return Z.current.style.transform = "translate(".concat(be, "px, ").concat(Je, "px)"), void z({
                        childRect: gt,
                        popoverRect: (0, br.createRect)({
                            left: be,
                            top: Je,
                            width: te.width,
                            height: te.height
                        }),
                        parentRect: st,
                        boundaryRect: Jt,
                        padding: N,
                        align: j,
                        transform: {
                            top: Ze,
                            left: Ot
                        },
                        nudgedTop: 0,
                        nudgedLeft: 0,
                        boundaryInset: B,
                        violations: br.EMPTY_RECT,
                        hasViolations: !1
                    })
                }
                var xe = X === l.length,
                    ht = xe ? l[0] : l[X],
                    ae = (0, br.getNewPopoverRect)({
                        childRect: gt,
                        popoverRect: te,
                        boundaryRect: Jt,
                        position: ht,
                        align: j,
                        padding: N,
                        reposition: C
                    }, B),
                    ue = ae.rect;
                if (ae.boundaryViolation && C && !xe) rt({
                    positionIndex: X + 1,
                    childRect: gt,
                    popoverRect: te,
                    parentRect: st,
                    boundaryRect: Jt
                });
                else {
                    var Ke = ue.top,
                        Et = ue.left,
                        dn = ue.width,
                        le = ue.height,
                        ce = C && !xe,
                        De = (0, br.getNudgedPopoverRect)(ue, Jt, B),
                        ze = De.left,
                        Kt = De.top,
                        Qt = Ke,
                        de = Et;
                    ce && (Qt = Kt, de = ze), Qt = Math.round(Qt - jt.top), de = Math.round(de - jt.left), Z.current.style.transform = "translate(".concat(de, "px, ").concat(Qt, "px)");
                    var K = {
                            top: Jt.top + B - Qt,
                            left: Jt.left + B - de,
                            right: de + dn - Jt.right + B,
                            bottom: Qt + le - Jt.bottom + B
                        },
                        oe = {
                            childRect: gt,
                            popoverRect: (0, br.createRect)({
                                left: de,
                                top: Qt,
                                width: dn,
                                height: le
                            }),
                            parentRect: st,
                            boundaryRect: Jt,
                            position: ht,
                            align: j,
                            padding: N,
                            nudgedTop: Kt - Ke,
                            nudgedLeft: ze - Et,
                            boundaryInset: B,
                            violations: {
                                top: K.top <= 0 ? 0 : K.top,
                                left: K.left <= 0 ? 0 : K.left,
                                right: K.right <= 0 ? 0 : K.right,
                                bottom: K.bottom <= 0 ? 0 : K.bottom
                            },
                            hasViolations: K.top > 0 || K.left > 0 || K.right > 0 || K.bottom > 0
                        };
                    if (v) {
                        z(oe);
                        var Qe = typeof v == "function" ? v(oe) : v,
                            St = Qe.top,
                            ee = Qe.left;
                        Z.current.style.transform = "translate(".concat(Math.round(de + (ee != null ? ee : 0)), "px, ").concat(Math.round(Qt + (St != null ? St : 0)), "px)"), oe.nudgedLeft += ee != null ? ee : 0, oe.nudgedTop += St != null ? St : 0, oe.transform = {
                            top: St,
                            left: ee
                        }
                    }
                    z(oe)
                }
            }
        }, [p, o, Y, Z, L, i, v, k, l, j, N, C, B, z]);
    return {
        positionPopover: rt,
        popoverRef: Z,
        scoutRef: Y
    }
};
var Qi = {};
Object.defineProperty(Qi, "__esModule", {
    value: !0
}), Qi.useMemoizedArray = void 0;
var cl = $;
Qi.useMemoizedArray = function(n) {
    var i = (0, cl.useRef)(n);
    return (0, cl.useMemo)(function() {
        if (i.current === n) return i.current;
        if (i.current.length !== n.length) return i.current = n, n;
        for (var o = 0; o < n.length; o += 1)
            if (n[o] !== i.current[o]) return i.current = n, n;
        return i.current
    }, [n])
};
var Qr = {},
    No = We && We.__assign || function() {
        return No = Object.assign || function(n) {
            for (var i, o = 1, l = arguments.length; o < l; o++)
                for (var h in i = arguments[o]) Object.prototype.hasOwnProperty.call(i, h) && (n[h] = i[h]);
            return n
        }, No.apply(this, arguments)
    };
Object.defineProperty(Qr, "__esModule", {
    value: !0
}), Qr.useArrowContainer = void 0;
var ul = $;
Qr.useArrowContainer = function(n) {
    var i = n.childRect,
        o = n.popoverRect,
        l = n.position,
        h = n.arrowSize,
        p = n.arrowColor;
    return {
        arrowContainerStyle: (0, ul.useMemo)(function() {
            return {
                padding: h
            }
        }, [h]),
        arrowStyle: (0, ul.useMemo)(function() {
            return No({
                position: "absolute"
            }, function() {
                var v = 2 * h,
                    k = i.top - o.top + i.height / 2 - v / 2,
                    j = i.left - o.left + i.width / 2 - v / 2,
                    N = h,
                    C = o.width - h,
                    B = o.height - h;
                switch (j = (j = j < N ? N : j) + v > C ? C - v : j, k = (k = k < N ? N : k) + v > B ? B - v : k, k = Number.isNaN(k) ? 0 : k, j = Number.isNaN(j) ? 0 : j, l) {
                    case "right":
                        return {
                            borderTop: "".concat(h, "px solid transparent"),
                            borderBottom: "".concat(h, "px solid transparent"),
                            borderRight: "".concat(h, "px solid ").concat(p),
                            left: 0,
                            top: k
                        };
                    case "left":
                        return {
                            borderTop: "".concat(h, "px solid transparent"),
                            borderBottom: "".concat(h, "px solid transparent"),
                            borderLeft: "".concat(h, "px solid ").concat(p),
                            right: 0,
                            top: k
                        };
                    case "bottom":
                        return {
                            borderLeft: "".concat(h, "px solid transparent"),
                            borderRight: "".concat(h, "px solid transparent"),
                            borderBottom: "".concat(h, "px solid ").concat(p),
                            top: 0,
                            left: j
                        };
                    case "top":
                        return {
                            borderLeft: "".concat(h, "px solid transparent"),
                            borderRight: "".concat(h, "px solid transparent"),
                            borderTop: "".concat(h, "px solid ").concat(p),
                            bottom: 0,
                            left: j
                        };
                    default:
                        return {
                            display: "hidden"
                        }
                }
            }())
        }, [p, h, i.height, i.left, i.top, i.width, o.height, o.left, o.top, o.width, l])
    }
};
var ta = {},
    wr = We && We.__assign || function() {
        return wr = Object.assign || function(n) {
            for (var i, o = 1, l = arguments.length; o < l; o++)
                for (var h in i = arguments[o]) Object.prototype.hasOwnProperty.call(i, h) && (n[h] = i[h]);
            return n
        }, wr.apply(this, arguments)
    };
Object.defineProperty(ta, "__esModule", {
    value: !0
}), ta.ArrowContainer = void 0;
var dl = f,
    hl = $,
    Df = Qr;
ta.ArrowContainer = function(n) {
        var i = n.childRect,
            o = n.popoverRect,
            l = n.position,
            h = n.arrowColor,
            p = n.arrowSize,
            v = n.arrowClassName,
            k = n.arrowStyle,
            j = n.className,
            N = n.children,
            C = n.style,
            B = (0, Df.useArrowContainer)({
                childRect: i,
                popoverRect: o,
                position: l,
                arrowColor: h,
                arrowSize: p
            }),
            L = B.arrowContainerStyle,
            z = B.arrowStyle,
            Y = (0, hl.useMemo)(function() {
                return wr(wr({}, L), C)
            }, [L, C]),
            Z = (0, hl.useMemo)(function() {
                return wr(wr({}, z), k)
            }, [z, k]);
        return (0, dl.jsxs)("div", {
            className: j,
            style: Y,
            children: [(0, dl.jsx)("div", {
                style: Z,
                className: v
            }), N]
        })
    },
    function(n) {
        var i = We && We.__assign || function() {
            return i = Object.assign || function(L) {
                for (var z, Y = 1, Z = arguments.length; Y < Z; Y++)
                    for (var rt in z = arguments[Y]) Object.prototype.hasOwnProperty.call(z, rt) && (L[rt] = z[rt]);
                return L
            }, i.apply(this, arguments)
        };
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.Popover = n.usePopover = n.ArrowContainer = n.useArrowContainer = void 0;
        var o = f,
            l = $,
            h = Zi,
            p = aa,
            v = Ji;
        Object.defineProperty(n, "usePopover", {
            enumerable: !0,
            get: function() {
                return v.usePopover
            }
        });
        var k = Qi,
            j = Qr;
        Object.defineProperty(n, "useArrowContainer", {
            enumerable: !0,
            get: function() {
                return j.useArrowContainer
            }
        });
        var N = ta;
        Object.defineProperty(n, "ArrowContainer", {
            enumerable: !0,
            get: function() {
                return N.ArrowContainer
            }
        });
        var C = ["top", "left", "right", "bottom"],
            B = (0, l.forwardRef)(function(L, z) {
                var Y = L.isOpen,
                    Z = L.children,
                    rt = L.content,
                    wt = L.positions,
                    vt = wt === void 0 ? C : wt,
                    W = L.align,
                    at = W === void 0 ? "center" : W,
                    J = L.padding,
                    X = J === void 0 ? 0 : J,
                    nt = L.reposition,
                    st = nt === void 0 || nt,
                    _t = L.parentElement,
                    gt = _t === void 0 ? window.document.body : _t,
                    Nt = L.boundaryElement,
                    jt = Nt === void 0 ? gt : Nt,
                    Wt = L.containerClassName,
                    te = L.containerStyle,
                    Gt = L.transform,
                    Jt = L.transformMode,
                    un = Jt === void 0 ? "absolute" : Jt,
                    Ze = L.boundaryInset,
                    Ot = Ze === void 0 ? 0 : Ze,
                    be = L.onClickOutside,
                    Je = L.clickOutsideCapture,
                    xe = Je !== void 0 && Je,
                    ht = (0, k.useMemoizedArray)(Array.isArray(vt) ? vt : [vt]),
                    ae = (0, l.useRef)(!1),
                    ue = (0, l.useRef)(),
                    Ke = (0, l.useRef)(st),
                    Et = (0, l.useRef)(),
                    dn = (0, l.useState)({
                        align: at,
                        nudgedLeft: 0,
                        nudgedTop: 0,
                        position: ht[0],
                        padding: X,
                        childRect: p.EMPTY_RECT,
                        popoverRect: p.EMPTY_RECT,
                        parentRect: p.EMPTY_RECT,
                        boundaryRect: p.EMPTY_RECT,
                        boundaryInset: Ot,
                        violations: p.EMPTY_RECT,
                        hasViolations: !1
                    }),
                    le = dn[0],
                    ce = dn[1],
                    De = (0, l.useCallback)(function(St) {
                        return ce(St)
                    }, []),
                    ze = (0, v.usePopover)({
                        isOpen: Y,
                        childRef: Et,
                        containerClassName: Wt,
                        parentElement: gt,
                        boundaryElement: jt,
                        transform: Gt,
                        transformMode: un,
                        positions: ht,
                        align: at,
                        padding: X,
                        boundaryInset: Ot,
                        reposition: st,
                        onPositionPopover: De
                    }),
                    Kt = ze.positionPopover,
                    Qt = ze.popoverRef,
                    de = ze.scoutRef;
                (0, l.useLayoutEffect)(function() {
                    var St = !0,
                        ee = function() {
                            var Oe, jn;
                            if (Y && St) {
                                var Ln = (Oe = Et == null ? void 0 : Et.current) === null || Oe === void 0 ? void 0 : Oe.getBoundingClientRect(),
                                    Mn = (jn = Qt == null ? void 0 : Qt.current) === null || jn === void 0 ? void 0 : jn.getBoundingClientRect();
                                Ln == null || Mn == null || (0, p.rectsAreEqual)(Ln, le.childRect) && Mn.width === le.popoverRect.width && Mn.height === le.popoverRect.height && le.padding === X && le.align === at && ht === ue.current && st === Ke.current || Kt(), ht !== ue.current && (ue.current = ht), st !== Ke.current && (Ke.current = st), St && window.requestAnimationFrame(ee)
                            }
                            ae.current = Y
                        };
                    return window.requestAnimationFrame(ee),
                        function() {
                            St = !1
                        }
                }, [at, Y, X, Qt, le.align, le.childRect, le.padding, le.popoverRect.height, le.popoverRect.width, Kt, ht, st]), (0, l.useEffect)(function() {
                    var St = Qt.current;
                    return Object.assign(St.style, te),
                        function() {
                            Object.keys(te != null ? te : {}).forEach(function(ee) {
                                return delete St.style[ee]
                            })
                        }
                }, [te, Y, Qt]);
                var K = (0, l.useCallback)(function(St) {
                        var ee, Oe;
                        !Y || !((ee = Qt.current) === null || ee === void 0) && ee.contains(St.target) || !((Oe = Et.current) === null || Oe === void 0) && Oe.contains(St.target) || be == null || be(St)
                    }, [Y, be, Qt]),
                    oe = (0, l.useCallback)(function() {
                        Et.current && window.requestAnimationFrame(function() {
                            return Kt()
                        })
                    }, [Kt]);
                (0, l.useEffect)(function() {
                    var St = gt.ownerDocument.body;
                    return St.addEventListener("click", K, xe), St.addEventListener("contextmenu", K, xe), St.addEventListener("resize", oe),
                        function() {
                            St.removeEventListener("click", K, xe), St.removeEventListener("contextmenu", K, xe), St.removeEventListener("resize", oe)
                        }
                }, [xe, K, oe, gt]);
                var Qe = (0, l.useCallback)(function(St) {
                    Et.current = St, z != null && (typeof z == "object" ? z.current = St : typeof z == "function" && z(St))
                }, [z]);
                return (0, o.jsxs)(o.Fragment, {
                    children: [(0, l.cloneElement)(Z, {
                        ref: Qe
                    }), Y ? (0, o.jsx)(h.PopoverPortal, {
                        element: Qt.current,
                        scoutElement: de.current,
                        container: gt,
                        children: typeof rt == "function" ? rt(le) : rt
                    }) : null]
                })
            });
        n.Popover = (0, l.forwardRef)(function(L, z) {
            return typeof window == "undefined" ? L.children : (0, o.jsx)(B, i({}, L, {
                ref: z
            }))
        })
    }(So);
const {
    useProxy: Ql
} = S.valtio, Of = ({
    id: n
}) => S.http.post("/game/script/stop/", {
    id: n
});

function Af(n) {
    switch (n) {
        case "3X":
        default:
            return "style1";
        case "Green":
            return "style2";
        case "Red":
            return "style3"
    }
}

function Rf() {
    const n = Ut(),
        i = S.useNavigate(),
        o = S.useIsMobile(),
        {
            runningStrategyResults: l
        } = Ql(n.strategy.getState()),
        [h, p] = $.useState(!1),
        {
            t: v
        } = S.useTranslation(),
        k = () => {
            p(!1), localStorage.setItem("needHistoryGuide", "true")
        },
        j = () => {
            localStorage.getItem("needHistoryGuide") || p(!0)
        },
        N = o ? f.jsxs("div", {
            className: "mobile-empty",
            children: [f.jsx("img", {
                src: Vt.info_empty
            }), v("Please go copy strategy below first ")]
        }) : f.jsx(S.Empty, {}),
        C = l && l.length ? f.jsx("div", {
            className: "list-wrapper",
            children: l.map((L, z) => f.jsx(Bf, {
                data: L,
                callback: j
            }, z))
        }) : N,
        B = f.jsxs("div", {
            className: "history-entry",
            onClick: () => {
                i(`/game/crash-history?gameName=${n.gameName}`)
            },
            children: [v("History"), " ", f.jsx("span", {
                className: "icon",
                children: f.jsx("img", {
                    src: Vt.arrow_green
                })
            })]
        });
    return f.jsxs("div", {
        className: Ef,
        children: [f.jsxs("div", {
            className: "title",
            children: [f.jsx("div", {
                className: "title-font",
                children: v("Running Strategy")
            }), h ? f.jsx(So.Popover, {
                isOpen: h,
                positions: ["bottom"],
                padding: 10,
                onClickOutside: () => p(!1),
                content: ({
                    position: L,
                    childRect: z,
                    popoverRect: Y
                }) => f.jsx(So.ArrowContainer, {
                    position: L,
                    childRect: z,
                    popoverRect: Y,
                    arrowColor: "#484E57",
                    arrowSize: 10,
                    children: f.jsxs("div", {
                        className: Ff,
                        children: [f.jsx("img", {
                            src: Vt.info
                        }), f.jsx("div", {
                            children: v("View your strategy history here")
                        }), f.jsx("img", {
                            src: Vt.close,
                            className: "close",
                            onClick: k
                        })]
                    })
                }),
                children: B
            }) : B]
        }), C]
    })
}

function Bf({
    data: n,
    callback: i
}) {
    const {
        t: o
    } = S.useTranslation(), l = Ut(), h = S.usePop(), p = Ql(l.strategy.getState()), v = (n.scriptLabel || "Green,Martingale").split(",");
    return f.jsxs("div", {
        className: `${Lf} ${Af(v[0])}`,
        children: [f.jsxs("div", {
            className: "item-left",
            children: [f.jsxs("div", {
                className: "item-left-top",
                children: [f.jsx("div", {
                    className: "name",
                    children: n.scriptName || "Crash - Classic"
                }), v.map(k => f.jsx(Ao, {
                    type: k,
                    children: k
                }, k))]
            }), f.jsx("div", {
                className: "item-left-middle",
                children: f.jsxs("div", {
                    className: "profits",
                    children: [o("Profits"), ":", n.userBetCount !== 0 ? f.jsx(S.BC.CoinFormat, {
                        sign: !0,
                        icon: !0,
                        className: "profits-coin " + (Number(n.totalProfitAmount) > 0 ? "isWin" : "isLose"),
                        amount: Number(n.totalProfitAmount),
                        name: n.currencyName || "USDT"
                    }) : "--", n.userBetCount !== 0 && f.jsxs("div", {
                        className: "percent " + (Number(n.totalProfitAmount) > 0 ? "isWin" : "isLose"),
                        children: [(Number(n.totalProfitAmount) / (Number(n.investmentAmount) || 100) * 100).toFixed(2), " %"]
                    })]
                })
            }), f.jsxs("div", {
                className: "item-left-bottom",
                children: [f.jsxs("div", {
                    className: "amounts",
                    children: [o("Investment Amount"), n.userBetCount !== 0 ? f.jsx(S.BC.CoinFormat, {
                        sign: !0,
                        icon: !0,
                        className: "amounts-coin",
                        amount: Number(n.investmentAmount),
                        name: n.currencyName || "USDT"
                    }) : "--"]
                }), f.jsxs("div", {
                    className: "amounts",
                    children: [o("Total Wagered"), n.userBetCount !== 0 ? f.jsx(S.BC.CoinFormat, {
                        sign: !0,
                        icon: !0,
                        className: "amounts-coin",
                        amount: Number(n.totalBetAmount),
                        name: n.currencyName || "USDT"
                    }) : "--"]
                })]
            })]
        }), f.jsxs("div", {
            className: "item-right",
            children: [n.runStatus === 1 ? f.jsxs(S.Button, {
                type: "conic",
                className: "confirm-btn",
                onClick: async () => {
                    if (await h.confirm(o("This action will terminating the strategy immediately. After terminating, the remaining balance will be refunded to your account."))) {
                        await Of({
                            id: n.strategyExecuteId
                        });
                        const k = p.runningStrategyResults.find(C => C.strategyExecuteId === n.strategyExecuteId);
                        if (!k) return;
                        const j = p.runningStrategyResults.findIndex(C => C.strategyExecuteId === n.strategyExecuteId),
                            N = an.cloneDeep(p.runningStrategyResults);
                        N.splice(j, 1, mr(Xn({}, k), {
                            runStatus: -1
                        })), p.runningStrategyResults = N, i()
                    }
                },
                children: [f.jsx("span", {
                    className: "stop-icon",
                    children: f.jsx("img", {
                        src: Vt.stop
                    })
                }), o("Stop")]
            }) : f.jsxs("div", {
                className: "loading",
                children: [f.jsx("img", {
                    src: Vt.loading
                }), n.runStatus === 0 ? o("Waiting for join") : o("Waiting for stop")]
            }), f.jsxs("div", {
                className: "bet-info",
                children: [f.jsx("span", {
                    className: "round",
                    children: n.userBetCount
                }), " / 100 ", o("Bet")]
            })]
        })]
    })
}
const Ef = "w8qrbij",
    Lf = "ivifr3n",
    Ff = "pe0z0sl";

function Wf() {
    const {
        t: n
    } = S.useTranslation(), i = S.useDialog();
    return f.jsxs("div", {
        className: Vf,
        onClick: () => {
            i.push(f.jsx(tc, {}))
        },
        children: [f.jsx("img", {
            src: Vt.book,
            className: "icon"
        }), n("How it works"), "?"]
    })
}
const zf = [Vt.lightStep1, Vt.lightStep2, Vt.lightStep3],
    Yf = [Vt.darkStep1, Vt.darkStep2, Vt.darkStep3];

function tc() {
    const [n, i] = $.useState(0), o = S.useIsDarken() ? Yf : zf, {
        t: l
    } = S.useTranslation(), h = S.useDialog(), p = [l("Step1"), l("Step2"), l("Step3")], v = [l("Choose Strategy"), l("Copy Strategy"), l("Stop Strategy")], k = [l("Check the performance and parameters of each strategy in the Top Strategies, and choose the one that suits you to follow."), l("Enter the total investment amount you wish to bet. Click Confirm to start automatic betting."), l("Check the Profits and ROI in Running Strategies, and you can manually stop the strategy. More info at Help.")];
    return f.jsxs(S.Dialog, {
        className: Uf,
        children: [f.jsx("img", {
            src: o[n]
        }), f.jsxs("div", {
            className: Hf,
            children: [f.jsx("div", {
                className: "points",
                children: [0, 1, 2].map(j => f.jsx("div", {
                    className: "point " + (j === n ? "active" : "")
                }, j))
            }), f.jsx("div", {
                className: "step",
                children: p[n]
            }), f.jsx("div", {
                className: "title",
                children: v[n]
            }), f.jsx("div", {
                className: "content",
                children: k[n]
            }), f.jsx(S.Button, {
                className: "btn",
                type: "conic",
                onClick: () => {
                    n !== 2 ? i(n + 1) : h.close()
                },
                children: f.jsx("span", {
                    children: l(n !== 2 ? "Next" : "Start Playing")
                })
            })]
        })]
    })
}
const Vf = "b1f9w2ki",
    Hf = "w1w9ydh2",
    Uf = "d11qdo04",
    Gf = Po(function({
        item: n
    }) {
        const {
            t: i
        } = S.useTranslation(), o = (n.scriptLabel || "Green,Martingale").split(","), l = To(), h = Ut(), p = n.used;
        return f.jsx(S.Dialog, {
            title: i("Strategy Details"),
            children: f.jsxs(S.ScrollView, {
                className: qf,
                children: [f.jsxs("div", {
                    className: "detail-form",
                    children: [f.jsxs("div", {
                        className: "title",
                        children: [f.jsx("div", {
                            className: "name",
                            children: n.scriptName
                        }), f.jsxs("div", {
                            className: "followed",
                            children: [f.jsx("div", {
                                className: "icon",
                                children: f.jsx("img", {
                                    src: Vt.follow
                                })
                            }), n.strategyUseUniqueUserCount, " ", i("Copied")]
                        }), f.jsx("div", {
                            className: "label",
                            children: o.map(v => f.jsx(Ao, {
                                type: v,
                                children: v
                            }, v))
                        })]
                    }), f.jsx("div", {
                        className: "button",
                        children: f.jsx(S.Button, {
                            disabled: p,
                            type: p ? "gray" : "conic",
                            onClick: () => {
                                l(f.jsx(ac, {
                                    item: n,
                                    callback: () => h.strategy.update()
                                }))
                            },
                            children: i(p ? "Copid" : "Copy")
                        })
                    })]
                }), f.jsxs("div", {
                    className: "info",
                    children: [f.jsx("div", {
                        className: "info-title",
                        children: i("Performance")
                    }), f.jsxs("div", {
                        className: "info-card",
                        children: [f.jsxs("div", {
                            className: "top",
                            children: [f.jsxs("div", {
                                className: "top-left",
                                children: [f.jsx("div", {
                                    className: "label",
                                    children: i("Profit")
                                }), f.jsx("div", {
                                    className: "value " + (Number(n.strategyTotalProfitUsd) > 0 ? "isWin" : "isLose"),
                                    children: f.jsx(S.BC.CoinFormat, {
                                        className: "monospace",
                                        name: "USDT",
                                        amount: Number(n.strategyTotalProfitUsd),
                                        icon: !0
                                    })
                                })]
                            }), f.jsxs("div", {
                                className: "top-right",
                                children: [f.jsx("div", {
                                    className: "label",
                                    children: f.jsx(Ce, {
                                        type: Pe.aum,
                                        children: i("AUM")
                                    })
                                }), f.jsx("div", {
                                    className: "value",
                                    children: f.jsx(S.BC.CoinFormat, {
                                        className: "monospace",
                                        name: "USDT",
                                        amount: Number(n.strategyAum),
                                        icon: !0
                                    })
                                })]
                            })]
                        }), f.jsxs("div", {
                            className: "bottom",
                            children: [f.jsxs("div", {
                                className: "info-item",
                                children: [f.jsx("div", {
                                    className: "label",
                                    children: f.jsx(Ce, {
                                        type: Pe.roi,
                                        children: i("ROI")
                                    })
                                }), f.jsxs("div", {
                                    className: "value",
                                    children: [Number(n.strategyRoi).toFixed(2), " %"]
                                })]
                            }), f.jsxs("div", {
                                className: "info-item",
                                children: [f.jsx("div", {
                                    className: "label",
                                    children: i("Game ID")
                                }), f.jsxs("div", {
                                    className: "value",
                                    children: [n.bestRoundStartId, " - ", n.bestRoundEndId]
                                })]
                            }), f.jsxs("div", {
                                className: "info-item",
                                children: [f.jsx("div", {
                                    className: "label",
                                    children: i("History Bet Count")
                                }), f.jsx("div", {
                                    className: "value",
                                    children: n.bestRoundEndId - n.bestRoundStartId + 1
                                })]
                            })]
                        })]
                    })]
                }), f.jsxs("div", {
                    className: "info",
                    children: [f.jsx("div", {
                        className: "info-title",
                        children: i("Parameters")
                    }), f.jsxs("div", {
                        className: "info-card spec",
                        children: [f.jsxs("div", {
                            className: "info-item",
                            children: [f.jsx("div", {
                                className: "label",
                                children: i("Bet Count")
                            }), f.jsx("div", {
                                className: "value",
                                children: "100"
                            })]
                        }), f.jsxs("div", {
                            className: "info-item",
                            children: [f.jsx("div", {
                                className: "label",
                                children: f.jsx(Ce, {
                                    type: Pe.autoCashout,
                                    children: i("Auto Cashout")
                                })
                            }), f.jsx("div", {
                                className: "value",
                                children: bl(o)
                            })]
                        }), f.jsxs("div", {
                            className: "info-item",
                            children: [f.jsx("div", {
                                className: "label",
                                children: f.jsx(Ce, {
                                    type: Pe.baseBet,
                                    children: i("Base Bet")
                                })
                            }), f.jsxs("div", {
                                className: "value",
                                children: [i("Investment Amount"), " x 1%"]
                            })]
                        }), f.jsxs("div", {
                            className: "info-item",
                            children: [f.jsx("div", {
                                className: "label",
                                children: f.jsx(Ce, {
                                    type: Pe.wagerAfterAWin,
                                    children: i("Wager after a win")
                                })
                            }), f.jsx("div", {
                                className: "value",
                                children: i("Base Bet")
                            })]
                        }), f.jsxs("div", {
                            className: "info-item",
                            children: [f.jsx("div", {
                                className: "label",
                                children: f.jsx(Ce, {
                                    type: Pe.wagerAfterALoss,
                                    children: i("Wager after a loss")
                                })
                            }), f.jsxs("div", {
                                className: "value",
                                children: [i("Base Bet"), " x ", ho(o), f.jsx("sup", {
                                    children: "n"
                                })]
                            })]
                        })]
                    })]
                }), f.jsxs("div", {
                    className: "tips",
                    children: [f.jsx("div", {
                        className: "tip-title",
                        children: i("Auto Stop Rules")
                    }), f.jsxs("ol", {
                        children: [f.jsx("li", {
                            className: "tip-line",
                            children: i("The game ends if the remaining balance is insufficient to place any further bets.")
                        }), f.jsx("li", {
                            className: "tip-line",
                            children: i("The game ends if the next round bet amount exceeds the max limit.")
                        }), f.jsx("li", {
                            className: "tip-line",
                            children: i("The game automatically concludes after 100 bets, regardless of wins or losses.")
                        }), f.jsx("li", {
                            className: "tip-line",
                            children: i("Players have the option to stop the game at any time.")
                        })]
                    })]
                })]
            })
        })
    }),
    qf = "s1nt9pla",
    {
        useProxy: $f
    } = S.valtio;

function Xf() {
    const n = Ut(),
        {
            topStrategyResults: i,
            runningStrategyResults: o
        } = $f(n.strategy.getState()),
        {
            t: l
        } = S.useTranslation(),
        h = function(v) {
            switch (v) {
                case 0:
                    return Pi(688);
                case 1:
                    return Pi(560);
                case 2:
                    return Pi(656);
                default:
                    return Pi(800)
            }
        }(o.length),
        p = i && i.length ? f.jsxs("div", {
            className: "list-wrapper",
            style: {
                maxHeight: h
            },
            children: [i.map((v, k) => f.jsx(Zf, {
                data: v
            }, k)), f.jsxs("div", {
                className: "bottom-info",
                children: [f.jsxs("div", {
                    className: "url",
                    children: [l("Contact us"), " support@bcgame.com"]
                }), f.jsxs("div", {
                    children: [l("If you wish to become a creator"), "!"]
                })]
            })]
        }) : f.jsx(S.Empty, {});
    return f.jsxs("div", {
        className: Jf,
        children: [f.jsxs("div", {
            className: "title",
            children: [f.jsx("div", {
                className: "title-font",
                children: l("Top Strategies")
            }), f.jsx("div", {
                className: "qa",
                children: f.jsx(Wf, {})
            })]
        }), p]
    })
}

function Zf({
    data: n
}) {
    const i = To(),
        {
            t: o
        } = S.useTranslation(),
        l = S.useNavigate(),
        h = S.useAccount(),
        p = Ut(),
        v = N => {
            N.stopPropagation(), h.login ? l(`/game/crash-creator?creatorid=${n.creatorId}&name=${n.userName}&gameName=${p.gameName}`) : l("#/login")
        },
        k = (n.scriptLabel || "Green,Martingale").split(","),
        j = n.used;
    return f.jsxs("div", {
        className: `${Kf} ${j&&"isCopied"}`,
        onClick: () => {
            h.login ? i(f.jsx(Gf, {
                item: n
            })) : l("#/login")
        },
        children: [f.jsxs("div", {
            className: "item-top",
            children: [f.jsxs("div", {
                className: "item-wrap flex",
                children: [f.jsx("div", {
                    className: "item-avatar",
                    onClick: N => v(N),
                    children: f.jsx(S.BC.Avatar, {
                        userId: n.creatorId,
                        name: n.userName
                    })
                }), f.jsxs("div", {
                    className: "item-info",
                    children: [f.jsxs("div", {
                        className: "names",
                        children: [f.jsxs("div", {
                            className: "names-left",
                            children: [f.jsx("div", {
                                className: "username",
                                onClick: N => v(N),
                                children: n.userName || "Coco"
                            }), f.jsx("img", {
                                src: Vt.polygon,
                                className: "icon"
                            }), f.jsx("div", {
                                className: "scriptname",
                                children: n.scriptName
                            })]
                        }), f.jsx("img", {
                            src: Vt.arrow,
                            className: "names-right"
                        })]
                    }), f.jsxs("div", {
                        className: "followed",
                        children: [f.jsx("div", {
                            className: "icon",
                            children: f.jsx("img", {
                                src: Vt.follow,
                                className: "arrow"
                            })
                        }), f.jsx("div", {
                            children: n.strategyUseUniqueUserCount
                        }), f.jsx("div", {
                            children: o("Copied")
                        })]
                    })]
                })]
            }), f.jsx("div", {
                className: "item-tags flex",
                children: k.map(N => f.jsx(Ao, {
                    type: N,
                    children: N
                }, N))
            })]
        }), f.jsxs("div", {
            className: "item-bottom",
            children: [f.jsxs("div", {
                className: "item-rois flex",
                children: [f.jsxs("div", {
                    className: "item-rois-num",
                    children: [Number(n.strategyRoi).toFixed(2), "%"]
                }), f.jsx("div", {
                    className: "item-rois-label",
                    children: f.jsx(Ce, {
                        type: Pe.roi,
                        children: o("ROI")
                    })
                })]
            }), f.jsxs("div", {
                className: "item-profit flex space-between",
                children: [f.jsx("div", {
                    className: "item-profit-label",
                    children: o("Total Profit")
                }), f.jsx("div", {
                    className: "item-profit-value value",
                    children: f.jsx(S.BC.CoinFormat, {
                        sign: !0,
                        icon: !0,
                        amount: Number(n.strategyTotalProfitUsd),
                        name: "USDT"
                    })
                })]
            }), f.jsxs("div", {
                className: "item-aum flex space-between",
                children: [f.jsx("div", {
                    className: "item-aum-label",
                    children: f.jsx(Ce, {
                        type: Pe.aum,
                        children: o("AUM")
                    })
                }), f.jsx("div", {
                    className: "item-aum-value value",
                    children: f.jsx(S.BC.CoinFormat, {
                        sign: !0,
                        icon: !0,
                        amount: Number(n.strategyAum),
                        name: "USDT"
                    })
                })]
            }), f.jsx(S.Button, {
                disabled: j,
                className: "confirm-btn " + (j ? "disabled" : "normal"),
                onClick: N => (C => {
                    C.stopPropagation(), h.login ? i(f.jsx(ac, {
                        item: n,
                        callback: () => p.strategy.update()
                    })) : l("#/login")
                })(N),
                children: o(j ? "Copid" : "Copy")
            })]
        })]
    })
}
const Jf = "w1v6a2sm",
    Kf = "itlcryo",
    Ft = on.Reader,
    Ie = on.Writer,
    dt = on.util,
    ft = on.roots.gameCrash || (on.roots.gameCrash = {});
ft.CrashInfo = (() => {
    function n(i) {
        if (this.betLimits = [], this.normalBets = [], this.xBets = [], i)
            for (let o = Object.keys(i), l = 0; l < o.length; ++l) i[o[l]] != null && (this[o[l]] = i[o[l]])
    }
    return n.prototype.roundId = dt.Long ? dt.Long.fromBits(0, 0, !1) : 0, n.prototype.status = 0, n.prototype.prepareTime = dt.Long ? dt.Long.fromBits(0, 0, !1) : 0, n.prototype.startTime = dt.Long ? dt.Long.fromBits(0, 0, !1) : 0, n.prototype.hash = "", n.prototype.maxRate = 0, n.prototype.houseage = 0, n.prototype.betLimits = dt.emptyArray, n.prototype.normalBets = dt.emptyArray, n.prototype.xBets = dt.emptyArray, n.prototype.normalBetSize = 0, n.prototype.xBetSize = 0, n.prototype.normalBetAmount = "", n.prototype.xBetAmount = "", n.prototype.escapedSize = 0, n.encode = function(i, o) {
        if (o || (o = Ie.create()), i.roundId != null && Object.hasOwnProperty.call(i, "roundId") && o.uint32(8).int64(i.roundId), i.status != null && Object.hasOwnProperty.call(i, "status") && o.uint32(16).int32(i.status), i.prepareTime != null && Object.hasOwnProperty.call(i, "prepareTime") && o.uint32(24).int64(i.prepareTime), i.startTime != null && Object.hasOwnProperty.call(i, "startTime") && o.uint32(32).int64(i.startTime), i.hash != null && Object.hasOwnProperty.call(i, "hash") && o.uint32(50).string(i.hash), i.maxRate != null && Object.hasOwnProperty.call(i, "maxRate") && o.uint32(56).int32(i.maxRate), i.houseage != null && Object.hasOwnProperty.call(i, "houseage") && o.uint32(64).int32(i.houseage), i.betLimits != null && i.betLimits.length)
            for (let l = 0; l < i.betLimits.length; ++l) ft.BetLimit.encode(i.betLimits[l], o.uint32(106).fork()).ldelim();
        if (i.normalBets != null && i.normalBets.length)
            for (let l = 0; l < i.normalBets.length; ++l) ft.NormalBet.encode(i.normalBets[l], o.uint32(114).fork()).ldelim();
        if (i.xBets != null && i.xBets.length)
            for (let l = 0; l < i.xBets.length; ++l) ft.XBet.encode(i.xBets[l], o.uint32(122).fork()).ldelim();
        return i.normalBetSize != null && Object.hasOwnProperty.call(i, "normalBetSize") && o.uint32(128).int32(i.normalBetSize), i.xBetSize != null && Object.hasOwnProperty.call(i, "xBetSize") && o.uint32(136).int32(i.xBetSize), i.normalBetAmount != null && Object.hasOwnProperty.call(i, "normalBetAmount") && o.uint32(146).string(i.normalBetAmount), i.xBetAmount != null && Object.hasOwnProperty.call(i, "xBetAmount") && o.uint32(154).string(i.xBetAmount), i.escapedSize != null && Object.hasOwnProperty.call(i, "escapedSize") && o.uint32(160).int32(i.escapedSize), o
    }, n.decode = function(i, o) {
        i instanceof Ft || (i = Ft.create(i));
        let l = o === void 0 ? i.len : i.pos + o,
            h = new ft.CrashInfo;
        for (; i.pos < l;) {
            let p = i.uint32();
            switch (p >>> 3) {
                case 1:
                    h.roundId = i.int64();
                    break;
                case 2:
                    h.status = i.int32();
                    break;
                case 3:
                    h.prepareTime = i.int64();
                    break;
                case 4:
                    h.startTime = i.int64();
                    break;
                case 6:
                    h.hash = i.string();
                    break;
                case 7:
                    h.maxRate = i.int32();
                    break;
                case 8:
                    h.houseage = i.int32();
                    break;
                case 13:
                    h.betLimits && h.betLimits.length || (h.betLimits = []), h.betLimits.push(ft.BetLimit.decode(i, i.uint32()));
                    break;
                case 14:
                    h.normalBets && h.normalBets.length || (h.normalBets = []), h.normalBets.push(ft.NormalBet.decode(i, i.uint32()));
                    break;
                case 15:
                    h.xBets && h.xBets.length || (h.xBets = []), h.xBets.push(ft.XBet.decode(i, i.uint32()));
                    break;
                case 16:
                    h.normalBetSize = i.int32();
                    break;
                case 17:
                    h.xBetSize = i.int32();
                    break;
                case 18:
                    h.normalBetAmount = i.string();
                    break;
                case 19:
                    h.xBetAmount = i.string();
                    break;
                case 20:
                    h.escapedSize = i.int32();
                    break;
                default:
                    i.skipType(7 & p)
            }
        }
        return h
    }, n
})(), ft.BetLimit = (() => {
    function n(i) {
        if (i)
            for (let o = Object.keys(i), l = 0; l < o.length; ++l) i[o[l]] != null && (this[o[l]] = i[o[l]])
    }
    return n.prototype.currencyName = "", n.prototype.minBetAmount = "", n.prototype.maxBetAmount = "", n.prototype.maxProfit = "", n.encode = function(i, o) {
        return o || (o = Ie.create()), i.currencyName != null && Object.hasOwnProperty.call(i, "currencyName") && o.uint32(10).string(i.currencyName), i.minBetAmount != null && Object.hasOwnProperty.call(i, "minBetAmount") && o.uint32(18).string(i.minBetAmount), i.maxBetAmount != null && Object.hasOwnProperty.call(i, "maxBetAmount") && o.uint32(26).string(i.maxBetAmount), i.maxProfit != null && Object.hasOwnProperty.call(i, "maxProfit") && o.uint32(34).string(i.maxProfit), o
    }, n.decode = function(i, o) {
        i instanceof Ft || (i = Ft.create(i));
        let l = o === void 0 ? i.len : i.pos + o,
            h = new ft.BetLimit;
        for (; i.pos < l;) {
            let p = i.uint32();
            switch (p >>> 3) {
                case 1:
                    h.currencyName = i.string();
                    break;
                case 2:
                    h.minBetAmount = i.string();
                    break;
                case 3:
                    h.maxBetAmount = i.string();
                    break;
                case 4:
                    h.maxProfit = i.string();
                    break;
                default:
                    i.skipType(7 & p)
            }
        }
        return h
    }, n
})(), ft.Prepare = (() => {
    function n(i) {
        if (i)
            for (let o = Object.keys(i), l = 0; l < o.length; ++l) i[o[l]] != null && (this[o[l]] = i[o[l]])
    }
    return n.prototype.roundId = dt.Long ? dt.Long.fromBits(0, 0, !1) : 0, n.prototype.prepareTime = dt.Long ? dt.Long.fromBits(0, 0, !1) : 0, n.prototype.startTime = dt.Long ? dt.Long.fromBits(0, 0, !1) : 0, n.encode = function(i, o) {
        return o || (o = Ie.create()), i.roundId != null && Object.hasOwnProperty.call(i, "roundId") && o.uint32(8).int64(i.roundId), i.prepareTime != null && Object.hasOwnProperty.call(i, "prepareTime") && o.uint32(24).int64(i.prepareTime), i.startTime != null && Object.hasOwnProperty.call(i, "startTime") && o.uint32(32).int64(i.startTime), o
    }, n.decode = function(i, o) {
        i instanceof Ft || (i = Ft.create(i));
        let l = o === void 0 ? i.len : i.pos + o,
            h = new ft.Prepare;
        for (; i.pos < l;) {
            let p = i.uint32();
            switch (p >>> 3) {
                case 1:
                    h.roundId = i.int64();
                    break;
                case 3:
                    h.prepareTime = i.int64();
                    break;
                case 4:
                    h.startTime = i.int64();
                    break;
                default:
                    i.skipType(7 & p)
            }
        }
        return h
    }, n
})(), ft.NormalBetRequest = (() => {
    function n(i) {
        if (i)
            for (let o = Object.keys(i), l = 0; l < o.length; ++l) i[o[l]] != null && (this[o[l]] = i[o[l]])
    }
    return n.prototype.roundId = dt.Long ? dt.Long.fromBits(0, 0, !1) : 0, n.prototype.currencyName = "", n.prototype.betAmount = "", n.prototype.autoEscapeRate = 0, n.prototype.scriptId = 0, n.prototype.frontgroundId = 0, n.encode = function(i, o) {
        return o || (o = Ie.create()), i.roundId != null && Object.hasOwnProperty.call(i, "roundId") && o.uint32(8).int64(i.roundId), i.currencyName != null && Object.hasOwnProperty.call(i, "currencyName") && o.uint32(18).string(i.currencyName), i.betAmount != null && Object.hasOwnProperty.call(i, "betAmount") && o.uint32(26).string(i.betAmount), i.autoEscapeRate != null && Object.hasOwnProperty.call(i, "autoEscapeRate") && o.uint32(32).int32(i.autoEscapeRate), i.scriptId != null && Object.hasOwnProperty.call(i, "scriptId") && o.uint32(40).int32(i.scriptId), i.frontgroundId != null && Object.hasOwnProperty.call(i, "frontgroundId") && o.uint32(120).sint32(i.frontgroundId), o
    }, n.decode = function(i, o) {
        i instanceof Ft || (i = Ft.create(i));
        let l = o === void 0 ? i.len : i.pos + o,
            h = new ft.NormalBetRequest;
        for (; i.pos < l;) {
            let p = i.uint32();
            switch (p >>> 3) {
                case 1:
                    h.roundId = i.int64();
                    break;
                case 2:
                    h.currencyName = i.string();
                    break;
                case 3:
                    h.betAmount = i.string();
                    break;
                case 4:
                    h.autoEscapeRate = i.int32();
                    break;
                case 5:
                    h.scriptId = i.int32();
                    break;
                case 15:
                    h.frontgroundId = i.sint32();
                    break;
                default:
                    i.skipType(7 & p)
            }
        }
        return h
    }, n
})(), ft.NormalBet = (() => {
    function n(i) {
        if (i)
            for (let o = Object.keys(i), l = 0; l < o.length; ++l) i[o[l]] != null && (this[o[l]] = i[o[l]])
    }
    return n.prototype.roundId = dt.Long ? dt.Long.fromBits(0, 0, !1) : 0, n.prototype.currencyName = "", n.prototype.betAmount = "", n.prototype.userId = dt.Long ? dt.Long.fromBits(0, 0, !1) : 0, n.prototype.name = "", n.prototype.betId = dt.Long ? dt.Long.fromBits(0, 0, !1) : 0, n.prototype.odds = 0, n.encode = function(i, o) {
        return o || (o = Ie.create()), i.roundId != null && Object.hasOwnProperty.call(i, "roundId") && o.uint32(8).int64(i.roundId), i.currencyName != null && Object.hasOwnProperty.call(i, "currencyName") && o.uint32(18).string(i.currencyName), i.betAmount != null && Object.hasOwnProperty.call(i, "betAmount") && o.uint32(26).string(i.betAmount), i.userId != null && Object.hasOwnProperty.call(i, "userId") && o.uint32(32).int64(i.userId), i.name != null && Object.hasOwnProperty.call(i, "name") && o.uint32(42).string(i.name), i.betId != null && Object.hasOwnProperty.call(i, "betId") && o.uint32(48).int64(i.betId), i.odds != null && Object.hasOwnProperty.call(i, "odds") && o.uint32(56).int32(i.odds), o
    }, n.decode = function(i, o) {
        i instanceof Ft || (i = Ft.create(i));
        let l = o === void 0 ? i.len : i.pos + o,
            h = new ft.NormalBet;
        for (; i.pos < l;) {
            let p = i.uint32();
            switch (p >>> 3) {
                case 1:
                    h.roundId = i.int64();
                    break;
                case 2:
                    h.currencyName = i.string();
                    break;
                case 3:
                    h.betAmount = i.string();
                    break;
                case 4:
                    h.userId = i.int64();
                    break;
                case 5:
                    h.name = i.string();
                    break;
                case 6:
                    h.betId = i.int64();
                    break;
                case 7:
                    h.odds = i.int32();
                    break;
                default:
                    i.skipType(7 & p)
            }
        }
        return h
    }, n
})(), ft.XBetRequest = (() => {
    function n(i) {
        if (i)
            for (let o = Object.keys(i), l = 0; l < o.length; ++l) i[o[l]] != null && (this[o[l]] = i[o[l]])
    }
    return n.prototype.roundId = dt.Long ? dt.Long.fromBits(0, 0, !1) : 0, n.prototype.currencyName = "", n.prototype.betAmount = "", n.prototype.x = 0, n.prototype.scriptId = 0, n.prototype.frontgroundId = 0, n.encode = function(i, o) {
        return o || (o = Ie.create()), i.roundId != null && Object.hasOwnProperty.call(i, "roundId") && o.uint32(8).int64(i.roundId), i.currencyName != null && Object.hasOwnProperty.call(i, "currencyName") && o.uint32(18).string(i.currencyName), i.betAmount != null && Object.hasOwnProperty.call(i, "betAmount") && o.uint32(26).string(i.betAmount), i.x != null && Object.hasOwnProperty.call(i, "x") && o.uint32(32).int32(i.x), i.scriptId != null && Object.hasOwnProperty.call(i, "scriptId") && o.uint32(40).int32(i.scriptId), i.frontgroundId != null && Object.hasOwnProperty.call(i, "frontgroundId") && o.uint32(120).sint32(i.frontgroundId), o
    }, n.decode = function(i, o) {
        i instanceof Ft || (i = Ft.create(i));
        let l = o === void 0 ? i.len : i.pos + o,
            h = new ft.XBetRequest;
        for (; i.pos < l;) {
            let p = i.uint32();
            switch (p >>> 3) {
                case 1:
                    h.roundId = i.int64();
                    break;
                case 2:
                    h.currencyName = i.string();
                    break;
                case 3:
                    h.betAmount = i.string();
                    break;
                case 4:
                    h.x = i.int32();
                    break;
                case 5:
                    h.scriptId = i.int32();
                    break;
                case 15:
                    h.frontgroundId = i.sint32();
                    break;
                default:
                    i.skipType(7 & p)
            }
        }
        return h
    }, n
})(), ft.XBet = (() => {
    function n(i) {
        if (i)
            for (let o = Object.keys(i), l = 0; l < o.length; ++l) i[o[l]] != null && (this[o[l]] = i[o[l]])
    }
    return n.prototype.roundId = dt.Long ? dt.Long.fromBits(0, 0, !1) : 0, n.prototype.currencyName = "", n.prototype.betAmount = "", n.prototype.userId = dt.Long ? dt.Long.fromBits(0, 0, !1) : 0, n.prototype.name = "", n.prototype.betId = dt.Long ? dt.Long.fromBits(0, 0, !1) : 0, n.prototype.x = 0, n.encode = function(i, o) {
        return o || (o = Ie.create()), i.roundId != null && Object.hasOwnProperty.call(i, "roundId") && o.uint32(8).int64(i.roundId), i.currencyName != null && Object.hasOwnProperty.call(i, "currencyName") && o.uint32(18).string(i.currencyName), i.betAmount != null && Object.hasOwnProperty.call(i, "betAmount") && o.uint32(26).string(i.betAmount), i.userId != null && Object.hasOwnProperty.call(i, "userId") && o.uint32(32).int64(i.userId), i.name != null && Object.hasOwnProperty.call(i, "name") && o.uint32(42).string(i.name), i.betId != null && Object.hasOwnProperty.call(i, "betId") && o.uint32(48).int64(i.betId), i.x != null && Object.hasOwnProperty.call(i, "x") && o.uint32(56).int32(i.x), o
    }, n.decode = function(i, o) {
        i instanceof Ft || (i = Ft.create(i));
        let l = o === void 0 ? i.len : i.pos + o,
            h = new ft.XBet;
        for (; i.pos < l;) {
            let p = i.uint32();
            switch (p >>> 3) {
                case 1:
                    h.roundId = i.int64();
                    break;
                case 2:
                    h.currencyName = i.string();
                    break;
                case 3:
                    h.betAmount = i.string();
                    break;
                case 4:
                    h.userId = i.int64();
                    break;
                case 5:
                    h.name = i.string();
                    break;
                case 6:
                    h.betId = i.int64();
                    break;
                case 7:
                    h.x = i.int32();
                    break;
                default:
                    i.skipType(7 & p)
            }
        }
        return h
    }, n
})(), ft.Begin = (() => {
    function n(i) {
        if (this.normalBetUserIds = [], i)
            for (let o = Object.keys(i), l = 0; l < o.length; ++l) i[o[l]] != null && (this[o[l]] = i[o[l]])
    }
    return n.prototype.roundId = dt.Long ? dt.Long.fromBits(0, 0, !1) : 0, n.prototype.startTime = dt.Long ? dt.Long.fromBits(0, 0, !1) : 0, n.prototype.normalBetUserIds = dt.emptyArray, n.encode = function(i, o) {
        if (o || (o = Ie.create()), i.roundId != null && Object.hasOwnProperty.call(i, "roundId") && o.uint32(8).int64(i.roundId), i.startTime != null && Object.hasOwnProperty.call(i, "startTime") && o.uint32(32).int64(i.startTime), i.normalBetUserIds != null && i.normalBetUserIds.length) {
            o.uint32(42).fork();
            for (let l = 0; l < i.normalBetUserIds.length; ++l) o.int64(i.normalBetUserIds[l]);
            o.ldelim()
        }
        return o
    }, n.decode = function(i, o) {
        i instanceof Ft || (i = Ft.create(i));
        let l = o === void 0 ? i.len : i.pos + o,
            h = new ft.Begin;
        for (; i.pos < l;) {
            let p = i.uint32();
            switch (p >>> 3) {
                case 1:
                    h.roundId = i.int64();
                    break;
                case 4:
                    h.startTime = i.int64();
                    break;
                case 5:
                    if (h.normalBetUserIds && h.normalBetUserIds.length || (h.normalBetUserIds = []), (7 & p) == 2) {
                        let v = i.uint32() + i.pos;
                        for (; i.pos < v;) h.normalBetUserIds.push(i.int64())
                    } else h.normalBetUserIds.push(i.int64());
                    break;
                default:
                    i.skipType(7 & p)
            }
        }
        return h
    }, n
})(), ft.Progress = (() => {
    function n(i) {
        if (i)
            for (let o = Object.keys(i), l = 0; l < o.length; ++l) i[o[l]] != null && (this[o[l]] = i[o[l]])
    }
    return n.prototype.elapsed = dt.Long ? dt.Long.fromBits(0, 0, !1) : 0, n.prototype.roundId = dt.Long ? dt.Long.fromBits(0, 0, !1) : 0, n.encode = function(i, o) {
        return o || (o = Ie.create()), i.elapsed != null && Object.hasOwnProperty.call(i, "elapsed") && o.uint32(8).int64(i.elapsed), i.roundId != null && Object.hasOwnProperty.call(i, "roundId") && o.uint32(16).int64(i.roundId), o
    }, n.decode = function(i, o) {
        i instanceof Ft || (i = Ft.create(i));
        let l = o === void 0 ? i.len : i.pos + o,
            h = new ft.Progress;
        for (; i.pos < l;) {
            let p = i.uint32();
            switch (p >>> 3) {
                case 1:
                    h.elapsed = i.int64();
                    break;
                case 2:
                    h.roundId = i.int64();
                    break;
                default:
                    i.skipType(7 & p)
            }
        }
        return h
    }, n
})(), ft.EscapeRequest = (() => {
    function n(i) {
        if (i)
            for (let o = Object.keys(i), l = 0; l < o.length; ++l) i[o[l]] != null && (this[o[l]] = i[o[l]])
    }
    return n.prototype.roundId = dt.Long ? dt.Long.fromBits(0, 0, !1) : 0, n.encode = function(i, o) {
        return o || (o = Ie.create()), i.roundId != null && Object.hasOwnProperty.call(i, "roundId") && o.uint32(8).int64(i.roundId), o
    }, n.decode = function(i, o) {
        i instanceof Ft || (i = Ft.create(i));
        let l = o === void 0 ? i.len : i.pos + o,
            h = new ft.EscapeRequest;
        for (; i.pos < l;) {
            let p = i.uint32();
            p >>> 3 == 1 ? h.roundId = i.int64() : i.skipType(7 & p)
        }
        return h
    }, n
})(), ft.Escape = (() => {
    function n(i) {
        if (i)
            for (let o = Object.keys(i), l = 0; l < o.length; ++l) i[o[l]] != null && (this[o[l]] = i[o[l]])
    }
    return n.prototype.userId = dt.Long ? dt.Long.fromBits(0, 0, !1) : 0, n.prototype.betId = dt.Long ? dt.Long.fromBits(0, 0, !1) : 0, n.prototype.odds = 0, n.prototype.force = !1, n.encode = function(i, o) {
        return o || (o = Ie.create()), i.userId != null && Object.hasOwnProperty.call(i, "userId") && o.uint32(8).int64(i.userId), i.betId != null && Object.hasOwnProperty.call(i, "betId") && o.uint32(16).int64(i.betId), i.odds != null && Object.hasOwnProperty.call(i, "odds") && o.uint32(24).int32(i.odds), i.force != null && Object.hasOwnProperty.call(i, "force") && o.uint32(32).bool(i.force), o
    }, n.decode = function(i, o) {
        i instanceof Ft || (i = Ft.create(i));
        let l = o === void 0 ? i.len : i.pos + o,
            h = new ft.Escape;
        for (; i.pos < l;) {
            let p = i.uint32();
            switch (p >>> 3) {
                case 1:
                    h.userId = i.int64();
                    break;
                case 2:
                    h.betId = i.int64();
                    break;
                case 3:
                    h.odds = i.int32();
                    break;
                case 4:
                    h.force = i.bool();
                    break;
                default:
                    i.skipType(7 & p)
            }
        }
        return h
    }, n
})(), ft.End = (() => {
    function n(i) {
        if (i)
            for (let o = Object.keys(i), l = 0; l < o.length; ++l) i[o[l]] != null && (this[o[l]] = i[o[l]])
    }
    return n.prototype.roundId = dt.Long ? dt.Long.fromBits(0, 0, !1) : 0, n.prototype.maxRate = 0, n.prototype.hash = "", n.encode = function(i, o) {
        return o || (o = Ie.create()), i.roundId != null && Object.hasOwnProperty.call(i, "roundId") && o.uint32(8).int64(i.roundId), i.maxRate != null && Object.hasOwnProperty.call(i, "maxRate") && o.uint32(48).int32(i.maxRate), i.hash != null && Object.hasOwnProperty.call(i, "hash") && o.uint32(58).string(i.hash), o
    }, n.decode = function(i, o) {
        i instanceof Ft || (i = Ft.create(i));
        let l = o === void 0 ? i.len : i.pos + o,
            h = new ft.End;
        for (; i.pos < l;) {
            let p = i.uint32();
            switch (p >>> 3) {
                case 1:
                    h.roundId = i.int64();
                    break;
                case 6:
                    h.maxRate = i.int32();
                    break;
                case 7:
                    h.hash = i.string();
                    break;
                default:
                    i.skipType(7 & p)
            }
        }
        return h
    }, n
})(), ft.Settle = (() => {
    function n(i) {
        if (this.escapes = [], i)
            for (let o = Object.keys(i), l = 0; l < o.length; ++l) i[o[l]] != null && (this[o[l]] = i[o[l]])
    }
    return n.prototype.roundId = dt.Long ? dt.Long.fromBits(0, 0, !1) : 0, n.prototype.escapes = dt.emptyArray, n.prototype.maxRate = 0, n.prototype.hash = "", n.encode = function(i, o) {
        if (o || (o = Ie.create()), i.roundId != null && Object.hasOwnProperty.call(i, "roundId") && o.uint32(8).int64(i.roundId), i.escapes != null && i.escapes.length)
            for (let l = 0; l < i.escapes.length; ++l) ft.Escape.encode(i.escapes[l], o.uint32(18).fork()).ldelim();
        return i.maxRate != null && Object.hasOwnProperty.call(i, "maxRate") && o.uint32(48).int32(i.maxRate), i.hash != null && Object.hasOwnProperty.call(i, "hash") && o.uint32(58).string(i.hash), o
    }, n.decode = function(i, o) {
        i instanceof Ft || (i = Ft.create(i));
        let l = o === void 0 ? i.len : i.pos + o,
            h = new ft.Settle;
        for (; i.pos < l;) {
            let p = i.uint32();
            switch (p >>> 3) {
                case 1:
                    h.roundId = i.int64();
                    break;
                case 2:
                    h.escapes && h.escapes.length || (h.escapes = []), h.escapes.push(ft.Escape.decode(i, i.uint32()));
                    break;
                case 6:
                    h.maxRate = i.int32();
                    break;
                case 7:
                    h.hash = i.string();
                    break;
                default:
                    i.skipType(7 & p)
            }
        }
        return h
    }, n
})();
const Qf = S.socket.encode(ft.XBetRequest);
var ve = (n => (n[n.DEFAULT = 0] = "DEFAULT", n[n.RED = -200] = "RED", n[n.GREEN = 200] = "GREEN", n[n.MOON = 1e3] = "MOON", n))(ve || {}),
    ec = (n => (n[n.PENDING = 0] = "PENDING", n[n.WIN = 1] = "WIN", n[n.LOSE = 2] = "LOSE", n))(ec || {});
class tm extends Qu {
    constructor(o) {
        super({
            name: "crash_xbet",
            namespace: o.namespace
        }, () => null, {
            myBets: [null, null, null],
            autoBetType: null,
            nextBets: [null, null, null],
            redList: [],
            greenList: [],
            xbetPlayersCount: 0,
            xbetTotalBetAmount: new S.Decimal(0),
            result: 0,
            isShowMore: !1,
            autoBet: {
                isRunning: !1,
                times: 0,
                profit: S.valtio.ref(new S.Decimal(0)),
                stopOnWin: 0,
                stopOnLose: 0
            }
        });
        ct(this, "throwLimit", {});
        ct(this, "game");
        ct(this, "autoBet");
        ct(this, "betDict", {});
        ct(this, "disableAutoConnect", !0);
        ct(this, "typeInfo", {
            0: {
                payout: 1.96,
                index: 0,
                label: "Red"
            },
            [-200]: {
                payout: 1.96,
                index: 0,
                label: "Red"
            },
            200: {
                payout: 2,
                index: 1,
                label: "Green"
            },
            1e3: {
                payout: 10,
                index: 2,
                label: "Moon"
            }
        });
        ct(this, "prevRate", 1);
        this.game = o, Ro(o.crashState, () => {
            o.crashState.houseEdge === 4 && (this.typeInfo[-200].payout = 1.84, this.typeInfo[0].payout = 1.84)
        }), this.game.socket.on("xb", S.socket.decodeBind(p => this.addBets([this.formatBet(p)]), ft.XBet)), this.onPrepare = this.onPrepare.bind(this), this.onProgress = this.onProgress.bind(this), this.onEnd = this.onEnd.bind(this), this.game.on("game_prepare", () => this.onPrepare()), this.game.on("game_end", () => this.onEnd()), this.game.on("game_progress", () => this.onProgress()), this.state.settings.hotkeyEnable = !1, this.autoBet = new td(this, void 0, () => this.game.waitGameStart()), this.autoBet.on("start", () => this.setBetStatus(!0)), this.autoBet.on("stop", () => this.setBetStatus(!1));
        const l = () => {
            this.state.autoBetType ? this.autoBet.start() : (this.autoBet.stop(), this.setBetStatus(!1))
        };
        l(), S.valtio.subscribeKey(this.state, "autoBetType", l);
        const h = () => {
            this.state.autoBet.isRunning || (this.state.autoBetType = null)
        };
        h(), S.valtio.subscribeKey(this.state.autoBet, "isRunning", h), this.addBets = function(p, v = 0) {
            const k = [],
                j = an.throttle(() => p(k.splice(0, k.length)), v);
            return N => {
                k.push(...N), j()
            }
        }(this.addBets.bind(this), 200)
    }
    setBetStatus(o) {
        this.state.autoBet.isRunning || (this.state.isBetting = o)
    }
    xbetInit(o) {
        this.betDict = {}, this.state.redList = [], this.state.greenList = [];
        const l = o.map(h => this.formatBet(h));
        l.filter(h => h.userId === S.accountStore.state.userId).forEach(({
            bet: h,
            currencyName: p,
            type: v,
            gameId: k
        }) => {
            this.addMyBet({
                gameId: k,
                bet: h,
                currencyName: p,
                type: v,
                status: 0
            })
        }), this.game.getState().rate >= 2 && this.onEnd2(), this.game.getState().rate >= 10 && this.onEnd10(), this.addBets(l)
    }
    onPrepare() {
        this.state.myBets.fill(null), this.state.result = 0, this.betDict = {}, this.state.redList = [], this.state.greenList = [], this.state.xbetPlayersCount = 0, this.state.xbetTotalBetAmount = new S.Decimal(0), this.state.isShowMore = !1, this.state.nextBets.forEach(o => {
            o && (o.gameId = this.game.getState().gameId, this.handleBet(o))
        }), this.state.nextBets.fill(null)
    }
    onEnd() {
        this.onEnd2(), this.onEnd10()
    }
    onEnd2() {
        const o = this.game.getState().rate,
            l = this.getMyBetByType(-200),
            h = this.getMyBetByType(200),
            p = o < 2 ? 1 : 2,
            v = o >= 2 ? 1 : 2;
        this.state.result = o < 2 ? -200 : 200, l && l.status === 0 && (l.status = p, l.status === 1 && this.emit("win", l)), h && h.status === 0 && (h.status = v, h.status === 1 && this.emit("win", h)), this.state.redList.forEach(k => k.status = p), this.state.greenList.filter(k => k.type === 200).forEach(k => k.status = v)
    }
    onEnd10() {
        const o = this.game.getState().rate,
            l = this.getMyBetByType(1e3),
            h = o >= 10 ? 1 : 2;
        l && l.status === 0 && (l.status = h, l.status === 1 && this.emit("win", l)), this.state.greenList.filter(p => p.type === 1e3).forEach(p => p.status = h)
    }
    addBets(o) {
        let l = !1,
            h = !1;
        o.forEach(p => {
            this.betDict[p.betId] || (this.betDict[p.betId] = p, p.type === -200 ? (this.state.redList.push(p), l = !0) : (this.state.greenList.push(p), h = !0), this.state.xbetPlayersCount += 1, this.state.xbetTotalBetAmount = this.state.xbetTotalBetAmount.add(p.usd))
        }), l && (this.state.redList = an.orderBy(this.state.redList, ["type", "usd"], ["desc", "desc"])), h && (this.state.greenList = an.orderBy(this.state.greenList, ["type", "usd"], ["desc", "desc"]))
    }
    async handleBet(o, l = 0) {
        if (!o) {
            if (!this.state.autoBetType) throw new Error("");
            o = {
                gameId: this.game.getState().gameId,
                type: this.state.autoBetType,
                bet: this.state.amount,
                currencyName: this.state.currencyName,
                status: 0
            }
        }
        await this.beforeBetCheck(o.bet, o.currencyName), this.setBetStatus(!0);
        const h = S.walletStore.createDeduction(o.bet, o.currencyName);
        try {
            await this.game.socketRequest("throw-xbet", Qf({
                roundId: S.Long.fromNumber(o.gameId),
                betAmount: o.bet.toFixed(S.systemStore.getPrecision(o.currencyName)),
                currencyName: o.currencyName,
                x: o.type,
                scriptId: l,
                frontgroundId: h
            }));
            const p = this.addMyBet(o);
            await this.game.waitGameEnd();
            const v = p.status === 1 ? this.typeInfo[p.type].payout : 0;
            return S.walletStore.resolveDeduction(h), v
        } catch (p) {
            throw S.walletStore.resolveDeduction(h, !1), p
        } finally {
            this.setBetStatus(!1), this.syncCurrency()
        }
    }
    handleBetByType(o) {
        return this.handleBet({
            type: o,
            currencyName: this.state.currencyName,
            bet: this.state.amount,
            status: 0,
            gameId: this.game.getState().gameId
        })
    }
    async handleBetNext(o) {
        await this.beforeBetCheck(this.state.amount), this.state.nextBets[this.typeInfo[o].index] = {
            type: o,
            currencyName: this.state.currencyName,
            bet: this.state.amount,
            status: 0,
            gameId: this.game.getState().gameId
        }
    }
    handleCancelNext(o) {
        this.state.nextBets[this.typeInfo[o.type].index] = null
    }
    getMyBetByType(o) {
        return this.state.myBets[this.typeInfo[o].index]
    }
    addMyBet(o) {
        return this.state.myBets[this.typeInfo[o.type].index] = o, this.state.myBets[this.typeInfo[o.type].index]
    }
    getNextBetByType(o) {
        return this.state.nextBets[this.typeInfo[o].index]
    }
    onProgress() {
        const o = this.game.getState().rate;
        this.prevRate < 2 ? o >= 2 && this.onEnd2() : this.prevRate < 10 && o >= 10 && this.onEnd10(), this.prevRate = o
    }
    formatBet(o) {
        const {
            betAmount: l,
            currencyName: h,
            userId: p,
            name: v,
            betId: k,
            x: j,
            roundId: N
        } = o, C = S.systemStore.convertCurrency(new S.Decimal(l), h).toNumber();
        return {
            bet: new S.Decimal(l),
            usd: C,
            userId: p.toNumber(),
            name: v,
            betId: k.toNumber(),
            currencyName: h,
            type: j,
            gameId: N.toNumber(),
            status: 0
        }
    }
}
const nc = Do;

function em({
    isPC: n = !1
}) {
    const i = Ut();
    return f.jsx(Oo, {
        gameUnique: i.xbet,
        children: f.jsx(nm, {
            isPC: n
        })
    })
}
const nm = $.memo(function({
        isPC: n = !1
    }) {
        const {
            t: i
        } = S.useTranslation(), o = S.useIsDarken(), l = Zt(), h = l.result === 0 || l.result === ve.RED ? Vt.trenball_red : Vt.trenball_red_lose, p = l.result === 0 || l.result === ve.GREEN ? Vt.trenball_green : Vt.trenball_green_lose, v = l.redList.length + l.greenList.length === 0, [k, j] = $.useState(10), N = S.useMountedState(), C = $.useCallback(() => {
            l.isShowMore = !l.isShowMore
        }, []), B = n && l.isShowMore, L = n ? S.useResize(({
            height: Y
        }) => {
            const Z = Y / S.app.relativePx(48);
            N() && j(Z - Math.trunc(Z) > .2 ? Math.ceil(Z) : Math.floor(Z))
        }, 200) : null, z = l.isShowMore ? 1 / 0 : k;
        return f.jsxs("div", {
            className: sn(am, n && "need-scroll"),
            children: [f.jsxs("div", {
                className: "banner",
                children: [f.jsxs("div", {
                    className: "item red",
                    children: [f.jsx("img", {
                        className: "avatar",
                        src: h
                    }), f.jsx("div", {
                        className: "title",
                        children: i("Red Bear")
                    })]
                }), f.jsx("div", {
                    className: "item knife",
                    children: f.jsx("img", {
                        src: o ? Vt.knife : Vt.knife_w
                    })
                }), f.jsxs("div", {
                    className: "item green",
                    children: [f.jsx("img", {
                        className: "avatar reverse",
                        src: p
                    }), f.jsx("div", {
                        className: "title",
                        children: i("Green Bull")
                    })]
                })]
            }), f.jsx(rm, {}), f.jsxs("div", {
                className: "head-wrap",
                children: [f.jsx(S.Table, {
                    children: f.jsx("thead", {
                        children: f.jsxs("tr", {
                            children: [f.jsx("th", {
                                children: i("Player")
                            }), f.jsx("th", {
                                children: i("Bet")
                            })]
                        })
                    })
                }), f.jsx(S.Table, {
                    children: f.jsx("thead", {
                        children: f.jsxs("tr", {
                            children: [f.jsx("th", {
                                children: i("Player")
                            }), f.jsx("th", {
                                children: i("Bet")
                            })]
                        })
                    })
                })]
            }), v ? f.jsx(S.Empty, {}) : f.jsxs(f.Fragment, {
                children: [B ? f.jsx(S.ScrollView, {
                    bodyLock: !1,
                    children: f.jsxs("div", {
                        className: "bet-list",
                        children: [f.jsx(Ei, {
                            type: ve.RED,
                            limit: z
                        }), f.jsx(Ei, {
                            type: ve.GREEN,
                            limit: z
                        })]
                    })
                }) : f.jsx("div", {
                    className: "list-wrap",
                    ref: L,
                    children: f.jsxs("div", {
                        className: "bet-list",
                        children: [f.jsx(Ei, {
                            type: ve.RED,
                            limit: z
                        }), f.jsx(Ei, {
                            type: ve.GREEN,
                            limit: z
                        })]
                    })
                }), f.jsx("div", {
                    className: "foot",
                    children: f.jsxs("button", {
                        onClick: C,
                        className: "list-toggle " + (l.isShowMore ? "show-less" : "show-more"),
                        children: [f.jsx("div", {
                            children: l.isShowMore ? i("Show less") : i("Show more")
                        }), f.jsx(S.Icon, {
                            name: "Arrow"
                        })]
                    })
                })]
            })]
        })
    }),
    rm = $.memo(function() {
        const n = Zt(),
            i = S.useLocalCurrency(!0);
        return f.jsxs("div", {
            className: "info-wrap",
            children: [f.jsxs("div", {
                className: "info",
                children: [f.jsxs("div", {
                    className: "players",
                    children: ["Players ", f.jsx("span", {
                        className: "nums",
                        children: n.redList.length
                    })]
                }), f.jsx("div", {
                    className: "his",
                    children: f.jsx("span", {
                        className: "nums",
                        children: i.amount2localStr(new S.Decimal(n.redList.reduce((o, l) => o + l.usd, 0)), "USD")
                    })
                })]
            }), f.jsxs("div", {
                className: "info",
                children: [f.jsxs("div", {
                    className: "players",
                    children: ["Players ", f.jsx("span", {
                        className: "nums",
                        children: n.greenList.length
                    })]
                }), f.jsx("div", {
                    className: "his",
                    children: f.jsx("span", {
                        className: "nums",
                        children: i.amount2localStr(new S.Decimal(n.greenList.reduce((o, l) => o + l.usd, 0)), "USD")
                    })
                })]
            })]
        })
    }),
    Ei = $.memo(function({
        type: n,
        limit: i
    }) {
        const o = Zt(),
            l = n === ve.RED ? o.redList : o.greenList;
        return f.jsx(S.UpdateInView, {
            children: f.jsx(S.Table, {
                children: f.jsx("tbody", {
                    children: l.slice(0, i).map(h => f.jsx(im, {
                        item: h
                    }, h.betId))
                })
            })
        })
    }),
    im = $.memo(({
        item: n
    }) => {
        const i = S.useIsMobile();
        return f.jsxs("tr", {
            children: [f.jsxs("td", {
                children: [f.jsx(S.BC.UserInfo, {
                    userId: n.userId,
                    name: n.name,
                    avatar: !i
                }), n.type === ve.MOON && f.jsx("div", {
                    className: "moon"
                })]
            }), f.jsx("td", {
                children: f.jsx(S.BC.CoinFormat, {
                    className: `monospace bold status-${n.status}`,
                    icon: !0,
                    name: n.currencyName,
                    amount: n.bet
                })
            })]
        })
    }),
    am = "wtlztrx";

function om() {
    const n = Ut();
    return f.jsx(Oo, {
        gameUnique: n.xbet,
        children: f.jsxs("div", {
            className: sn(lm, "manual-control"),
            children: [f.jsx("div", {
                className: "ampunt-input-wrap",
                children: f.jsx(vn.CoinInput, {})
            }), f.jsx(lo, {
                type: ve.RED
            }), f.jsx(lo, {
                type: ve.GREEN
            }), f.jsx(lo, {
                type: ve.MOON
            })]
        })
    })
}

function rc({
    type: n,
    children: i
}) {
    const {
        t: o
    } = S.useTranslation(), l = nc().typeInfo[n], h = l.label, p = f.jsxs("div", {
        className: "trenball-ampount-label",
        children: [f.jsx("p", {
            className: "w",
            children: `${o("Bet")} ${h}`
        }), f.jsx("p", {
            children: o("Payout")
        }), f.jsxs("p", {
            className: "bet-payout",
            children: [l.payout, "x"]
        })]
    });
    return f.jsx(S.InputWrap, {
        className: sn(sm, "bet-item"),
        label: p,
        children: i
    })
}
const lo = $.memo(function({
        type: n
    }) {
        const {
            t: i
        } = S.useTranslation(), o = nc(), l = Zt(), h = S.valtio.useProxy(o.game.getState()), [p, v] = $.useState(!1), k = S.useLocalCurrency(), j = $.useMemo(() => o.getMyBetByType(n), [l.nextBets, l.myBets]);
        $.useEffect(() => {
            if (p) {
                const Y = setTimeout(() => v(!1), 3e3);
                return () => clearTimeout(Y)
            }
        }, [p]);
        const N = $.useCallback(Y => {
            Y === j && v(!0)
        }, [j]);
        $.useEffect(() => (o.on("win", N), () => {
            o.off("win", N)
        }), [N]);
        const C = ["bet-button", `type${n}`].join(" ");
        let B;
        const L = () => {
                o.handleBetByType(n).catch(S.notify)
            },
            z = k.amount2localStr(l.amount, l.currencyName);
        if (h.status === fe.STARTING) B = j ? f.jsx(S.Button, {
            type: "gray",
            className: `${C} is-active`,
            children: f.jsx("div", {
                children: i("Betting")
            })
        }) : f.jsx(S.Button, {
            type: "gray",
            className: C,
            onClick: L,
            children: f.jsx("div", {
                children: i("Bet for {{amount}}", {
                    amount: z
                })
            })
        });
        else if (j && j.status === ec.PENDING) B = f.jsx(S.Button, {
            type: "gray",
            className: `${C} is-active`,
            children: f.jsx("div", {
                children: i("Betting")
            })
        });
        else {
            const Y = o.getNextBetByType(n);
            B = Y ? f.jsxs(S.Button, {
                type: "gray",
                className: `${C} is-active`,
                onClick: () => o.handleCancelNext(Y),
                children: [f.jsx("div", {
                    children: i("Loading...")
                }), f.jsx("div", {
                    className: "sub-txt",
                    children: i("(Cancel)")
                })]
            }) : f.jsxs(S.Button, {
                type: "gray",
                className: C,
                onClick: () => o.handleBetNext(n),
                children: [f.jsx("div", {
                    children: i("Bet for {{amount}}", {
                        amount: z.toString()
                    })
                }), f.jsx("div", {
                    className: "sub-txt",
                    children: i("(Next round)")
                })]
            })
        }
        return f.jsxs(rc, {
            type: n,
            children: [B, p && f.jsx(ed, {
                className: "winner"
            })]
        })
    }),
    sm = "bee2tnv",
    lm = "slwvmr1";

function cm() {
    const n = Ut();
    return f.jsx(Oo, {
        gameUnique: n.xbet,
        children: f.jsxs("div", {
            className: sn(um, "auto-control"),
            children: [f.jsx(vn.CoinInput, {
                checkIncrease: !0
            }), f.jsx(vn.TimesInput, {}), f.jsx(vn.IncreaseInput, {}), f.jsx(vn.IncreaseInput, {
                isLose: !0
            }), f.jsx(vn.StopInput, {}), f.jsx(vn.StopInput, {
                isLose: !0
            }), f.jsxs("div", {
                className: "buttons",
                children: [f.jsx(co, {
                    type: ve.RED
                }), f.jsx(co, {
                    type: ve.GREEN
                }), f.jsx(co, {
                    type: ve.MOON
                })]
            })]
        })
    })
}
const co = $.memo(function({
        type: n
    }) {
        const {
            t: i
        } = S.useTranslation(), o = Do(), l = Zt(), h = o.typeInfo[n], p = () => {
            l.autoBetType = l.autoBetType ? null : n
        }, v = ["bet-button", `type${n}`].join(" ");
        let k;
        return k = l.autoBetType ? l.autoBetType === n ? f.jsx(S.Button, {
            type: "gray",
            className: `${v} is-active`,
            onClick: p,
            children: f.jsx("div", {
                children: i("Stop Auto Bet")
            })
        }) : f.jsx(S.Button, {
            type: "gray",
            className: v,
            onClick: p,
            disabled: !0,
            children: f.jsx("div", {
                children: `${i("Bet")} ${h.label}`
            })
        }) : f.jsx(S.Button, {
            type: "gray",
            className: v,
            onClick: p,
            children: f.jsx("div", {
                children: `Bet ${h.label}`
            })
        }), f.jsx(rc, {
            type: n,
            children: k
        })
    }),
    um = "wb9v3vu";

function dm() {
    const {
        t: n
    } = S.useTranslation();
    return f.jsx(S.Dialog, {
        title: n("Auto cash out"),
        children: f.jsx(ea, {
            children: f.jsxs("div", {
                className: "item",
                children: [f.jsx("h2", {
                    children: n("Why Is There Internet Lag?")
                }), f.jsxs("div", {
                    className: "help-content",
                    children: [f.jsx("p", {
                        children: n("Since CRASH is a real-time online game (a game in which customers interact with it via the Internet), there is a delay between the time you click on the “Cash Out” button and the time when the server receives your cash out instruction.")
                    }), f.jsx("p", {
                        children: n("The farther away you are from the server and the worse your Internet connection is, the longer it will take for your message to reach the game server.")
                    }), f.jsx("p", {
                        children: n("In a perfect environment, your message can travel to the server at the speed of light, but it still takes 134 milliseconds to travel around the world.")
                    })]
                }), f.jsx("h2", {
                    children: n("What's the Use of Automatic Cash Out?")
                }), f.jsxs("div", {
                    className: "help-content",
                    children: [f.jsx("p", {
                        children: n("The best way to avoid damages caused by Internet lag is to use the automatic cash out function. Since your automatic cash out is sent to the server at the same time when you place your bet, the server can execute your cash out instruction precisely and regardless of the lag.")
                    }), f.jsx("p", {
                        children: n("For example, if your connection is bad and you want to cash out at 2x, then we recommend that you set automatic cash out to 2x rather than cash out manually at 2x, because after you click on “Cash Out”, the curve may crash before your message reaches the server.")
                    })]
                }), f.jsx("h2", {
                    children: n("What Should You Do If the Game Is Accidentally Disconnected?")
                }), f.jsxs("div", {
                    className: "help-content",
                    children: [f.jsx("p", {
                        children: n(" When we notice that you are disconnected from an active game, we will try to cash out for you.")
                    }), f.jsx("p", {
                        children: n("However, we strongly recommend that you use the automatic cash out function to deal with this issue.")
                    }), f.jsx("p", {
                        children: n("Since your automatic cash out multiplier has been sent to the server, you can still cash out normally even if you are completely disconnected. This is the most reliable way to avoid damages caused by accidental disconnection.")
                    })]
                })]
            })
        })
    })
}
const hm = cn.memo(({
    gameInfo: n
}) => {
    const {
        t: i
    } = S.useTranslation();
    return f.jsx(S.Dialog, {
        title: i("What Game Is This?"),
        children: f.jsx(ea, {
            children: f.jsxs("div", {
                className: "item",
                children: [f.jsx("h2", {
                    children: i("What Is {{gamename}}?", {
                        gamename: n.fullName
                    })
                }), f.jsx("div", {
                    className: "help-content",
                    children: n.details.split(`
`).map((o, l) => f.jsx("p", {
                        children: `${o}`
                    }, l.toString()))
                }), f.jsx("h2", {
                    children: i("How To Play {{gamename}}?", {
                        gamename: n.fullName
                    })
                }), f.jsxs("div", {
                    className: "help-content",
                    children: [f.jsx("p", {
                        children: i("Before the game starts, you have 6 seconds to place your bet. After the game starts, the multiplier will get higher and higher starting from 1X.")
                    }), f.jsx("p", {
                        children: i('You can click on "Cash Out" at any time to lock in the current multiplier, and your payoff will be your bets times the current multiplier.')
                    }), f.jsx("p", {
                        children: i("The longer you stay in the game, the higher payoff you will get. Please be noted, however, that the curve may crash at any moment. If you fail to cash out before the crash, you will lose all your bets.")
                    }), f.jsx("p", {
                        children: i("Are you going to cash out at 1.01x, or are you going to stay until 100x、1000x、10000x...? It’s all your call – which has to be made in a split of a second! (This game is not for the weak-hearted).")
                    })]
                }), n.slotsInfo && n.slotsInfo.rtpDes && f.jsxs(f.Fragment, {
                    children: [f.jsx("h2", {
                        children: i("What is the {{gamename}} return rate?", {
                            gamename: n.fullName
                        })
                    }), f.jsx("div", {
                        className: "help-content",
                        children: f.jsx("p", {
                            children: i("RTP (Return to Player) is {{rtp}}%.", {
                                rtp: n.slotsInfo.rtpDes
                            })
                        })
                    })]
                })]
            })
        })
    })
});

function fm(n) {
    const {
        t: i
    } = S.useTranslation(), o = n.gameUnique, [l] = $.useState(o.includes("96") ? 4 : 1);
    return f.jsx(S.Dialog, {
        title: i("Trenball"),
        children: f.jsx(ea, {
            children: f.jsxs("div", {
                className: "item",
                children: [f.jsx("h2", {
                    children: i("What Is Trenball?")
                }), f.jsx("div", {
                    className: "help-content",
                    children: f.jsx("p", {
                        children: i("Trenball is a new version of the popular Crash Game. In Trenball you can place bets on RED, GREEN or MOON depending on what you think will be the outcome of the game!")
                    })
                }), f.jsx("h2", {
                    children: i("What is Red, Green & Moon?")
                }), f.jsxs("div", {
                    className: "help-content",
                    children: [f.jsx("p", {
                        children: i("It is simply where the crash will bang in a round. You win depending on which of these you place your bets on.")
                    }), f.jsxs("p", {
                        children: [i("RED"), " —> ", i("Crash is less than 2")]
                    }), f.jsxs("p", {
                        children: [i("GREEN"), " —> ", i("Crash is equal to or more than 2")]
                    }), f.jsxs("p", {
                        children: [i("MOON"), " —> ", i("Crash is equal to or more than 10")]
                    })]
                }), f.jsx("h2", {
                    children: i("The probability in Trenball is simple too!")
                }), f.jsxs("div", {
                    className: "help-content",
                    children: [f.jsx("p", {
                        children: i("Hitting a Red is 50.5%.")
                    }), f.jsx("p", {
                        children: i("Hitting a Green is 49.5%.")
                    }), f.jsx("p", {
                        children: i("Hitting a Moon is 9.9%.")
                    }), f.jsx("p", {
                        children: i("House Edge is 1%.")
                    })]
                }), f.jsx("h2", {
                    children: i("The Payout is exciting:")
                }), f.jsxs("div", {
                    className: "help-content",
                    children: [f.jsxs("p", {
                        children: [i("Red pays"), " —> x", "" + (l === 4 ? 1.84 : 1.96)]
                    }), f.jsxs("p", {
                        children: [i("Green pays"), " —> x2"]
                    }), f.jsxs("p", {
                        children: [i("Moon pays"), " —> x10"]
                    })]
                }), f.jsx("h2", {
                    children: i("How To Play Trenball?")
                }), f.jsxs("div", {
                    className: "help-content",
                    children: [f.jsx("p", {
                        children: i("Before each round in the game starts, you have 6 seconds to place your bet. Here you can choose to bet on Red, Green or Moon.Once the six seconds are up, CRASH will start running until it Bangs i.e. reaches the end of that round.")
                    }), f.jsx("p", {
                        children: i("Note:")
                    }), f.jsx("p", {
                        children: i("You can play both Crash and Trenball individually or at the same time! Happy Playing!")
                    })]
                }), f.jsxs(S.Table, {
                    stripe: !0,
                    children: [f.jsx("thead", {
                        children: f.jsxs("tr", {
                            children: [f.jsx("th", {}), f.jsx("th", {
                                children: i("RED")
                            }), f.jsx("th", {
                                children: i("GREEN")
                            }), f.jsx("th", {
                                children: i("MOON")
                            })]
                        })
                    }), f.jsxs("tbody", {
                        children: [f.jsxs("tr", {
                            children: [f.jsx("td", {
                                children: i("What is")
                            }), f.jsx("td", {
                                children: "< 2"
                            }), f.jsx("td", {
                                children: "≥ 2"
                            }), f.jsx("td", {
                                children: "≥ 10"
                            })]
                        }), f.jsxs("tr", {
                            children: [f.jsx("td", {
                                children: i("Payout")
                            }), f.jsx("td", {
                                children: "" + (l === 4 ? 1.84 : 1.96)
                            }), f.jsx("td", {
                                children: "2"
                            }), f.jsx("td", {
                                children: "10"
                            })]
                        }), f.jsxs("tr", {
                            children: [f.jsx("td", {
                                children: i("Chance")
                            }), f.jsx("td", {
                                children: "50.50%"
                            }), f.jsx("td", {
                                children: "49.50%"
                            }), f.jsx("td", {
                                children: "9.9%"
                            })]
                        })]
                    })]
                })]
            })
        })
    })
}

function mm() {
    const {
        t: n
    } = S.useTranslation();
    return f.jsx(S.Dialog, {
        title: n("Betting Strategy"),
        children: f.jsx(ea, {
            children: f.jsxs("div", {
                className: "item",
                children: [f.jsx("h2", {
                    children: n("What is betting strategy?")
                }), f.jsx("div", {
                    className: "help-content",
                    children: f.jsx("p", {
                        children: n("Betting Strategy allows users to automatically copy the operations of experienced players. This means that you can benefit from the knowledge and expertise of skilled players without having to do any research or analysis yourself.")
                    })
                }), f.jsx("h2", {
                    children: n("How does Betting Strategy work?")
                }), f.jsxs("div", {
                    className: "help-content",
                    children: [f.jsx("p", {
                        children: n("To use the Betting Strategy feature, you will need to:")
                    }), f.jsx("p", {
                        children: n("1. Select a game that supports Betting Strategy. Currently, only the Crash game offers this feature.")
                    }), f.jsx("p", {
                        children: n("2. Click on the Betting Strategy tab at the top of the game screen.")
                    }), f.jsx("p", {
                        children: n("3. Browse through the available strategies and select one that you want to follow.")
                    }), f.jsx("p", {
                        children: n("4. Enter the amount you want to bet and click Copy.")
                    }), f.jsx("p", {
                        children: n("Once you have confirmed your bet, the platform will automatically place bets on your behalf, copying the exact strategy of the experienced player you have chosen. You can view your current strategies in the Running Strategies list. You can also see your betting history in the History list.")
                    })]
                }), f.jsx("h2", {
                    children: n("How do I track my profits?")
                }), f.jsxs("div", {
                    className: "help-content",
                    children: [f.jsx("p", {
                        children: n("Your copying strategy will automatically stop in any of the following situations:")
                    }), f.jsx("h2", {
                        children: n("How do I stop the strategy?")
                    }), f.jsxs("div", {
                        className: "help-content",
                        children: [f.jsx("p", {
                            children: n("The remaining balance is insufficient to place any further bets.")
                        }), f.jsx("p", {
                            children: n("The next round bet amount exceeds the max limit.")
                        }), f.jsx("p", {
                            children: n("The game reaches 100 rounds.")
                        }), f.jsx("p", {
                            children: n("You manually stop the strategy.")
                        })]
                    }), f.jsx("h2", {
                        children: n("How do I learn more about a betting strategy?")
                    }), f.jsx("div", {
                        className: "help-content",
                        children: f.jsx("p", {
                            children: n("You can click on the strategy details to view more information about each strategy, including its performance history, risk level, and other relevant details.")
                        })
                    }), f.jsx("h2", {
                        children: n("How to calculate wager,XP, loss back and commission in a betting strategy?")
                    }), f.jsx("div", {
                        className: "help-content",
                        children: f.jsx("p", {
                            children: n("They will be calculated collectively after a strategy is stopped, rather than after each game.")
                        })
                    })]
                })]
            })
        })
    })
}
const {
    useProxy: fl
} = S.valtio;
S.utils.timeMemoize(async () => S.http.post("/game/script/home/", {
    gameName: "crash"
}), {
    timeout: 8e7
});
const gm = $.memo(function(n) {
        const {
            urlParsed: i
        } = S.usePageContext(), {
            t: o
        } = S.useTranslation(), l = Ut(), h = Zt(), p = S.useIsMobile(), v = S.usePageProps().gameInfo.read(), [k, j] = $.useState(() => p), N = S.useResize(({
            width: X
        }) => j(X < 900)), C = fl(l.xbet.getState()), B = dd(), L = fl(l.strategy.getState()), z = S.useDialog(), [Y, Z] = $.useState(l.crashState.gameMode);
        Ro(l.crashState, () => {
            Z(l.crashState.gameMode)
        }), l.gameUnique = B;
        const rt = $.useMemo(() => {
                const X = l.config.fairComponent,
                    nt = [{
                        title: o("What Game Is This?"),
                        node: f.jsx(hm, {
                            gameInfo: v
                        })
                    }, {
                        title: o("Fairness"),
                        node: f.jsx(S.Dialog, {
                            title: o("Fairness"),
                            children: f.jsx(X, {})
                        })
                    }, {
                        title: o("Auto cash out"),
                        node: f.jsx(dm, {})
                    }, {
                        title: o("Trenball"),
                        node: f.jsx(fm, {
                            gameUnique: B
                        })
                    }, {
                        title: o("Max Profits"),
                        node: f.jsx(nd, {})
                    }, {
                        title: o("Betting Strategy"),
                        node: f.jsx(mm, {})
                    }];
                return [f.jsx(rd, {}, "hotkey"), f.jsx(id, {}, "liveStats"), f.jsx(ad, {
                    list: nt
                }, "help")]
            }, []),
            wt = [{
                label: o("My bets"),
                value: Gr.MybetNew
            }, {
                label: o("History"),
                value: Th
            }],
            vt = Y === "classic",
            W = Y === "trenball",
            at = Y === "bettingStrategy",
            J = sn(pm, "is-" + (k ? "mob" : "pc"));
        return $.useEffect(() => {
            at && (l.strategy.active(), localStorage.getItem("strategyGuide") || (z.push(f.jsx(tc, {})), localStorage.setItem("strategyGuide", "true")))
        }, [at]), $.useEffect(() => {
            const X = i.search.type;
            X && (l.crashState.gameMode = X)
        }, [i.search.type]), f.jsx(od, {
            className: J,
            ref: N,
            type: 1,
            manualControl: W ? f.jsx(om, {}) : at ? void 0 : f.jsx(Gh, {}),
            autoControl: W ? f.jsx(cm, {}) : at ? void 0 : f.jsx(Qh, {}),
            controlIdx: W ? C.controlIdx : void 0,
            controlDisalbe: W ? C.autoBet.isRunning : at ? void 0 : h.script.isRunning,
            onControlChange: W ? X => C.controlIdx = X : void 0,
            gameView: f.jsx(wf, {
                children: f.jsx(Sf, {
                    type: Y
                })
            }),
            top: null,
            right: W ? f.jsx(ml, {
                isClassic: vt
            }) : at ? L.topStrategyResults ? f.jsx(Xf, {}) : null : f.jsx(ml, {
                isClassic: vt
            }),
            specialControlNode: at ? L.runningStrategyResults ? f.jsx(Rf, {}) : f.jsx(S.Empty, {
                children: o("No Running Strategies")
            }) : void 0,
            actions: rt,
            tabs: wt
        })
    }),
    ml = $.memo(function({
        isClassic: n
    }) {
        const [i, o] = $.useState(!n);
        return $.useEffect(() => {
            o(!n)
        }, [n]), f.jsx("div", {
            className: "all-bet",
            children: i ? f.jsx(em, {
                isPC: !0
            }) : f.jsx(Fh, {
                scroll: !0
            })
        })
    }),
    pm = "c1gw7re3";

function ym(n, i) {
    n = n.slice(0, 13);
    let o = parseInt(n, 16) / Math.pow(16, 13);
    o = parseFloat(o.toPrecision(9)), o = (100 - i) / (1 - o);
    const l = Math.floor(o);
    return Math.max(1, l / 100)
}

function vm(n, i) {
    return String(ld(vd.parse(n), i))
}

function gl(n) {
    return Math.log(n) / 6e-5
}

function Vr(n) {
    return Math.pow(Math.E, 6e-5 * n)
}
const Xt = class Xt extends S.EventEmitter {
    constructor(o) {
        super();
        ct(this, "currentTime", 0);
        ct(this, "currentGamePayout", 0);
        ct(this, "escapes", []);
        ct(this, "canvas", null);
        ct(this, "ctx", null);
        ct(this, "width", 0);
        ct(this, "height", 0);
        ct(this, "startPoint", [60, 40]);
        ct(this, "plotSize", [0, 0]);
        ct(this, "plotValue", [0, 0]);
        ct(this, "increment", [0, 0]);
        ct(this, "devicePixelRatio", 2);
        ct(this, "gradient", null);
        ct(this, "bggradient", null);
        ct(this, "endgradient", null);
        ct(this, "endbggradient", null);
        ct(this, "game");
        ct(this, "gameState");
        ct(this, "rendering", !1);
        ct(this, "renderTimes", 0);
        this.game = o, this.gameState = o.getState(), this.resize = an.throttle(this.resize.bind(this), 200), this.render = this.render.bind(this), this.mountEffect = this.mountEffect.bind(this), this.game.on("escape", this.escape.bind(this))
    }
    get colors() {
        return localStorage.getItem("isBrighten") ? ["#000000", "#FFFFFF", "#7322FF", "#DDDDDD", "#F16918", "#E9EAF1"] : ["#FFFFFF", "#FFFFFF", "#7322FF", "#3d444b", "#F16918", "#2D3035"]
    }
    mountEffect(o) {
        o ? this.startRendering(o) : this.stopRendering()
    }
    startRendering(o) {
        o.getContext && (this.rendering = !0, this.canvas = o, this.ctx = o.getContext("2d"), this.resize(), requestAnimationFrame(() => this.render()))
    }
    stopRendering() {
        this.rendering = !1, this.canvas = null, this.ctx = null
    }
    resize() {
        this.width !== this.canvas.clientWidth && (this.width = this.canvas.clientWidth * this.devicePixelRatio, this.height = this.canvas.clientHeight * this.devicePixelRatio, this.canvas.width = this.width, this.canvas.height = this.height, this.plotSize = [this.width - 2 * this.startPoint[0], this.height - this.startPoint[1]], this.bggradient = this.ctx.createLinearGradient(0, this.startPoint[1], 0, this.height - this.startPoint[1]), this.bggradient.addColorStop(0, "#5F2FB8"), this.bggradient.addColorStop(1, "rgba(134, 75, 245, 0.22)"), this.endbggradient = this.ctx.createLinearGradient(this.startPoint[0], 0, this.width - 2 * this.startPoint[0], 0), this.endbggradient.addColorStop(0, "rgba(255,255,255,0.4)"), this.endbggradient.addColorStop(1, "rgba(255, 255, 255, 0.1)"), this.gradient = this.ctx.createLinearGradient(this.width / 3, 0, 2 * this.width / 3, 0), this.gradient.addColorStop(0, this.colors[1]), this.gradient.addColorStop(1, this.colors[2]), this.endgradient = this.ctx.createLinearGradient(this.width / 3, 0, 2 * this.width / 3, 0), this.endgradient.addColorStop(0, "#b9babb"), this.endgradient.addColorStop(1, "#545658"))
    }
    render() {
        this.rendering && (this.renderTimes++, this.renderTimes % Xt.RenderInterval == 0 && (this.calCrashGameameData(), this.calculatePlotValues(), this.clean(), this.drawGraph(), this.drawAxes(), this.drawGameData(), this.drawEscapes()), requestAnimationFrame(this.render.bind(this)))
    }
    clean() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    }
    drawGraph() {
        const o = this.gameState.status === fe.ENDED;
        this.ctx.lineWidth = Xt.LineWidth, this.ctx.strokeStyle = o ? this.endgradient : this.gradient, this.ctx.beginPath(), this.ctx.font = Xt.fontFamily;
        let l = [0, 0];
        const h = Math.max(this.currentTime / 1e3, 100);
        for (let v = 0, k = 0; v <= this.currentTime; v += h, k++) {
            const j = Vr(v) - 1,
                N = this.plotSize[1] - j * this.increment[1];
            l = [v * this.increment[0] + this.startPoint[0], N - Xt.LineWidth / 2], this.ctx.lineTo(...l)
        }
        this.ctx.stroke(), this.ctx.closePath(), this.ctx.beginPath();
        let p = [0, 0];
        for (let v = 0, k = 0; v <= this.currentTime; v += h, k++) {
            const j = Vr(v) - 1,
                N = this.plotSize[1] - j * this.increment[1];
            p = [v * this.increment[0] + this.startPoint[0], N], this.ctx.lineTo(...p)
        }
        this.ctx.lineTo(p[0], this.plotSize[1]), this.ctx.lineTo(this.startPoint[0], this.plotSize[1]), this.ctx.fillStyle = o ? this.endbggradient : this.bggradient, this.ctx.fill(), this.ctx.closePath(), l[0] > this.startPoint[0] && (this.ctx.beginPath(), this.ctx.arc(l[0] - 2, l[1] + 1, 14, 0, 2 * Math.PI), this.ctx.fillStyle = o ? this.endgradient : this.gradient, this.ctx.fill(), this.ctx.closePath())
    }
    stepValues(o) {
        let l = .4,
            h = .1;
        for (; !(o < l || (l *= 5, h *= 2, o < l));) l *= 2, h *= 5;
        return h
    }
    drawAxes() {
        const [o, l] = this.startPoint, [h, p] = this.plotSize, v = p - this.startPoint[1], k = this.stepValues(this.currentGamePayout ? this.currentGamePayout : 1);
        this.ctx.lineWidth = 1;
        const j = this.colors[3];
        this.ctx.strokeStyle = j, this.ctx.font = `22px ${Xt.fontFamily}`, this.ctx.fillStyle = j, this.ctx.textAlign = "center";
        const N = v / this.plotValue[1];
        for (let L = k, z = 0; L < this.plotValue[1]; L += k, z++) {
            const Y = p - L * N;
            if (this.ctx.fillText(L + 1 + "x", 30, Y), this.ctx.beginPath(), this.ctx.moveTo(o, Y), this.ctx.lineTo(o + 10, Y), this.ctx.stroke(), z > 100) break
        }
        const C = this.stepValues(this.plotValue[0]),
            B = h / (this.plotValue[0] / C);
        for (let L = 0, z = 0, Y = 0; L < this.plotValue[0]; L += C, z++, Y++) {
            const Z = (L / 1e3).toString(),
                rt = this.ctx.measureText(Z).width,
                wt = z * B + o;
            if (this.ctx.fillText(Z, wt - rt / 2, p + 20), Y > 100) break
        }
        this.ctx.lineWidth = 1, this.ctx.beginPath(), this.ctx.moveTo(o, l), this.ctx.lineTo(o, this.height - l), this.ctx.lineTo(this.width - o, this.height - l), this.ctx.stroke()
    }
    drawGameData() {
        if (this.ctx.textAlign = "center", this.ctx.textBaseline = "middle", this.gameState.status === fe.PROGRESS && (this.ctx.fillStyle = this.colors[1], this.gameState.isLoginUserJoinGame && !this.gameState.isLoginuserEscapeGame ? (this.ctx.font = `900 ${this.fontSizePx(5)} ${Xt.fontFamily}`, this.ctx.fillText(this.currentGamePayout.toFixed(2) + "×", this.width / 2, .3 * this.height)) : (this.ctx.font = `900 ${this.fontSizePx(8)} ${Xt.fontFamily}`, this.ctx.fillText(this.currentGamePayout.toFixed(2) + "×", this.width / 2, .4 * this.height))), this.gameState.status === fe.ENDED) {
            this.ctx.font = `900 ${this.fontSizePx(6)} ${Xt.fontFamily}`, this.ctx.fillStyle = this.colors[4], this.ctx.fillText(this.gameState.rate.toFixed(2) + "×", this.width / 2, .2 * this.height);
            const o = this.widthPx(20),
                l = this.heightPx(10);
            this.ctx.fillStyle = this.colors[5], this.ctx.fillRect((this.width - o) / 2, .3 * this.height, o, l), this.ctx.fillStyle = this.colors[4], this.ctx.font = `900 ${this.fontSizePx(2)} ${Xt.fontFamily}`, this.ctx.fillText("Crashed", this.width / 2, .3 * this.height + this.heightPx(5))
        }
        if (this.gameState.status === fe.STARTING) {
            const o = (this.gameState.startTime - Date.now()) / 1e3;
            if (o < 0) return;
            const l = this.gameState.betTime > 0 ? this.gameState.betTime / 1e3 : 6,
                h = this.widthPx(35),
                p = this.heightPx(10),
                v = (this.width - h) / 2,
                k = .4 * this.height - p / 2,
                j = o / l * h;
            this.ctx.fillStyle = this.colors[5], this.ctx.fillRect(v, k, h, p);
            const N = this.ctx.createLinearGradient(v, k, j + v, k);
            N.addColorStop(0, "#4CC317"), N.addColorStop(1, this.colors[5]), this.ctx.fillStyle = N, this.ctx.fillRect(v, k, j, p), this.ctx.font = `700 ${this.fontSizePx(2)} ${Xt.fontFamily}`, this.ctx.fillStyle = this.colors[0], this.ctx.fillText(S.i18n.t("Starts in {{times}}s", {
                times: o.toFixed(1)
            }), this.width / 2, .4 * this.height)
        }
        this.gameState.status === fe.CONNECTION && (this.ctx.font = `900 ${this.fontSizePx(2.5)} ${Xt.fontFamily}`, this.ctx.fillStyle = this.colors[0], this.ctx.fillText(S.i18n.t("Reconnecting…"), this.width / 2, .4 * this.height))
    }
    calCrashGameameData() {
        if (this.gameState.status === fe.PROGRESS) {
            const o = Date.now() - this.gameState.startTime;
            this.gameState.paused || (this.currentTime = o > 0 ? o : 0)
        } else this.gameState.status === fe.ENDED || (this.currentTime = 0);
        this.currentGamePayout = Vr(this.currentTime), this.emit("payoutChange", this.currentGamePayout)
    }
    calculatePlotValues() {
        this.plotValue[1] = Xt.YAxisSizeMultiplier, this.plotValue[0] = Xt.XAxisPlotMinValue, this.currentTime > Xt.XAxisPlotMinValue && (this.plotValue[0] = this.currentTime), this.currentGamePayout > Xt.YAxisSizeMultiplier && (this.plotValue[1] = this.currentGamePayout), this.plotValue[1] -= 1, this.increment[0] = this.plotSize[0] / this.plotValue[0], this.increment[1] = (this.plotSize[1] - this.startPoint[1]) / this.plotValue[1]
    }
    fontSizePx(o) {
        return (this.width / (this.width < 1e3 ? 70 : 100) * o).toFixed(2) + "px"
    }
    widthPx(o) {
        return this.width / (this.width < 1e3 ? 70 : 100) * o
    }
    heightPx(o) {
        return this.height / (this.width < 1e3 ? 70 : 100) * o
    }
    drawEscapes() {
        this.ctx.font = this.fontSizePx(1.5) + ` ${Xt.fontFamily}`, this.escapes.forEach(o => {
            const [l, h, p] = S.utils.hexToRgb(this.colors[0]);
            this.ctx.fillStyle = `rgba(${l}, ${h}, ${p}, .5)`, this.ctx.globalAlpha = o.payoutTween / o.payout;
            const v = this.startPoint[0] + this.increment[0] * o.elapsed,
                k = this.plotSize[1] + this.startPoint[1] - o.payoutTween * this.increment[1],
                j = (.01 * o.rate).toFixed(2);
            this.ctx.fillText(`${o.name} @${j}`, v, k + 20), this.ctx.beginPath(), this.ctx.arc(v, k, 5, 0, 2 * Math.PI), this.ctx.closePath(), this.ctx.fill(), this.ctx.globalAlpha = 1
        })
    }
    escape(o) {
        if (o.usd < 1 && o.userId.toNumber() !== S.accountStore.state.userId || !this.rendering || window.document.hidden) return;
        o.name = S.User.getName(o.name);
        const l = Vr(this.currentTime) - 1,
            h = Object.assign({
                elapsed: this.currentTime,
                payout: l,
                payoutTween: l
            }, o);
        uo.to(h, {
            duration: 8,
            payoutTween: 0,
            onComplete: () => {
                const p = this.escapes.indexOf(h);
                p !== -1 && this.escapes.splice(p, 1)
            }
        }), this.escapes.push(h)
    }
};
ct(Xt, "LineWidth", 12), ct(Xt, "XAxisPlotMinValue", 1e4), ct(Xt, "YAxisSizeMultiplier", 2), ct(Xt, "fontFamily", "Inter"), ct(Xt, "RenderInterval", 3);
let jo = Xt;
const Li = on.Reader,
    pl = on.Writer,
    Ne = on.util,
    _r = on.roots.gameCrashStrategy || (on.roots.gameCrashStrategy = {});
_r.RoundLog = (() => {
    function n(i) {
        if (i)
            for (let o = Object.keys(i), l = 0; l < o.length; ++l) i[o[l]] != null && (this[o[l]] = i[o[l]])
    }
    return n.prototype.gameName = "", n.prototype.betType = "", n.prototype.scriptId = "", n.prototype.nonce = 0, n.prototype.roundId = Ne.Long ? Ne.Long.fromBits(0, 0, !1) : 0, n.prototype.betAmount = "", n.prototype.winAmount = "", n.prototype.currencyName = "", n.prototype.userId = Ne.Long ? Ne.Long.fromBits(0, 0, !1) : 0, n.prototype.roundStartId = Ne.Long ? Ne.Long.fromBits(0, 0, !1) : 0, n.prototype.roundEndId = Ne.Long ? Ne.Long.fromBits(0, 0, !1) : 0, n.encode = function(i, o) {
        return o || (o = pl.create()), i.gameName != null && Object.hasOwnProperty.call(i, "gameName") && o.uint32(10).string(i.gameName), i.betType != null && Object.hasOwnProperty.call(i, "betType") && o.uint32(18).string(i.betType), i.scriptId != null && Object.hasOwnProperty.call(i, "scriptId") && o.uint32(24).string(i.scriptId), i.nonce != null && Object.hasOwnProperty.call(i, "nonce") && o.uint32(32).int32(i.nonce), i.roundId != null && Object.hasOwnProperty.call(i, "roundId") && o.uint32(40).int64(i.roundId), i.betAmount != null && Object.hasOwnProperty.call(i, "betAmount") && o.uint32(50).string(i.betAmount), i.winAmount != null && Object.hasOwnProperty.call(i, "winAmount") && o.uint32(58).string(i.winAmount), i.currencyName != null && Object.hasOwnProperty.call(i, "currencyName") && o.uint32(66).string(i.currencyName), i.userId != null && Object.hasOwnProperty.call(i, "userId") && o.uint32(72).int64(i.userId), i.roundStartId != null && Object.hasOwnProperty.call(i, "roundStartId") && o.uint32(80).int64(i.roundStartId), i.roundEndId != null && Object.hasOwnProperty.call(i, "roundEndId") && o.uint32(88).int64(i.roundEndId), o
    }, n.decode = function(i, o) {
        i instanceof Li || (i = Li.create(i));
        let l = o === void 0 ? i.len : i.pos + o,
            h = new _r.RoundLog;
        for (; i.pos < l;) {
            let p = i.uint32();
            switch (p >>> 3) {
                case 1:
                    h.gameName = i.string();
                    break;
                case 2:
                    h.betType = i.string();
                    break;
                case 3:
                    h.scriptId = i.string();
                    break;
                case 4:
                    h.nonce = i.int32();
                    break;
                case 5:
                    h.roundId = i.int64();
                    break;
                case 6:
                    h.betAmount = i.string();
                    break;
                case 7:
                    h.winAmount = i.string();
                    break;
                case 8:
                    h.currencyName = i.string();
                    break;
                case 9:
                    h.userId = i.int64();
                    break;
                case 10:
                    h.roundStartId = i.int64();
                    break;
                case 11:
                    h.roundEndId = i.int64();
                    break;
                default:
                    i.skipType(7 & p)
            }
        }
        return h
    }, n.getTypeUrl = function(i) {
        return i === void 0 && (i = "type.googleapis.com"), i + "/RoundLog"
    }, n
})(), _r.Execute = (() => {
    function n(i) {
        if (i)
            for (let o = Object.keys(i), l = 0; l < o.length; ++l) i[o[l]] != null && (this[o[l]] = i[o[l]])
    }
    return n.prototype.userId = Ne.Long ? Ne.Long.fromBits(0, 0, !1) : 0, n.prototype.gameName = "", n.prototype.betType = "", n.prototype.status = 0, n.prototype.scriptId = "", n.prototype.nonce = 0, n.prototype.roundStartId = Ne.Long ? Ne.Long.fromBits(0, 0, !1) : 0, n.prototype.roundEndId = Ne.Long ? Ne.Long.fromBits(0, 0, !1) : 0, n.prototype.totalBetAmount = "", n.prototype.totalWinAmount = "", n.prototype.currencyName = "", n.prototype.type = "", n.encode = function(i, o) {
        return o || (o = pl.create()), i.userId != null && Object.hasOwnProperty.call(i, "userId") && o.uint32(8).int64(i.userId), i.gameName != null && Object.hasOwnProperty.call(i, "gameName") && o.uint32(18).string(i.gameName), i.betType != null && Object.hasOwnProperty.call(i, "betType") && o.uint32(26).string(i.betType), i.status != null && Object.hasOwnProperty.call(i, "status") && o.uint32(32).int32(i.status), i.scriptId != null && Object.hasOwnProperty.call(i, "scriptId") && o.uint32(40).string(i.scriptId), i.nonce != null && Object.hasOwnProperty.call(i, "nonce") && o.uint32(48).int32(i.nonce), i.roundStartId != null && Object.hasOwnProperty.call(i, "roundStartId") && o.uint32(56).int64(i.roundStartId), i.roundEndId != null && Object.hasOwnProperty.call(i, "roundEndId") && o.uint32(64).int64(i.roundEndId), i.totalBetAmount != null && Object.hasOwnProperty.call(i, "totalBetAmount") && o.uint32(74).string(i.totalBetAmount), i.totalWinAmount != null && Object.hasOwnProperty.call(i, "totalWinAmount") && o.uint32(82).string(i.totalWinAmount), i.currencyName != null && Object.hasOwnProperty.call(i, "currencyName") && o.uint32(90).string(i.currencyName), i.type != null && Object.hasOwnProperty.call(i, "type") && o.uint32(98).string(i.type), o
    }, n.decode = function(i, o) {
        i instanceof Li || (i = Li.create(i));
        let l = o === void 0 ? i.len : i.pos + o,
            h = new _r.Execute;
        for (; i.pos < l;) {
            let p = i.uint32();
            switch (p >>> 3) {
                case 1:
                    h.userId = i.int64();
                    break;
                case 2:
                    h.gameName = i.string();
                    break;
                case 3:
                    h.betType = i.string();
                    break;
                case 4:
                    h.status = i.int32();
                    break;
                case 5:
                    h.scriptId = i.string();
                    break;
                case 6:
                    h.nonce = i.int32();
                    break;
                case 7:
                    h.roundStartId = i.int64();
                    break;
                case 8:
                    h.roundEndId = i.int64();
                    break;
                case 9:
                    h.totalBetAmount = i.string();
                    break;
                case 10:
                    h.totalWinAmount = i.string();
                    break;
                case 11:
                    h.currencyName = i.string();
                    break;
                case 12:
                    h.type = i.string();
                    break;
                default:
                    i.skipType(7 & p)
            }
        }
        return h
    }, n.getTypeUrl = function(i) {
        return i === void 0 && (i = "type.googleapis.com"), i + "/Execute"
    }, n
})();
const {
    proxy: bm
} = S.valtio, yn = class yn extends S.EventEmitter {
    constructor(o) {
        super();
        ct(this, "game");
        ct(this, "state");
        this.game = o, this.state = bm({
            isActived: !1,
            topStrategyResults: [],
            runningStrategyResults: []
        }), this.onResult = S.socket.decodeBind(this.onResult.bind(this), _r.RoundLog), this.onEvent = S.socket.decodeBind(this.onEvent.bind(this), _r.Execute)
    }
    getState() {
        return this.state
    }
    active() {
        this.state.isActived || (this.update(), this.state.isActived = !0, yn.socket.connect(), yn.socket.on("rl", this.onResult), yn.socket.on("et", this.onEvent))
    }
    deactivate() {
        this.state.isActived = !1, yn.socket.disconnect(), yn.socket.off("rl", this.onResult), yn.socket.off("et", this.onEvent)
    }
    onResult(o) {
        const l = mr(Xn({}, o), {
                roundId: o.roundId.toNumber(),
                roundStartId: o.roundStartId.toNumber(),
                scriptId: o.scriptId.toString(),
                userId: o.userId.toNumber()
            }),
            h = this.state.runningStrategyResults.find(k => k.strategyExecuteId === l.scriptId);
        if (!h) return;
        const p = this.state.runningStrategyResults.findIndex(k => k.strategyExecuteId === l.scriptId),
            v = an.cloneDeep(this.state.runningStrategyResults);
        v.splice(p, 1, mr(Xn({}, h), {
            userBetCount: l.nonce,
            totalBetAmount: Number(h.totalBetAmount) + Number(l.betAmount) + "",
            totalProfitAmount: Number(h.totalProfitAmount) + Number(l.winAmount) - Number(l.betAmount) + ""
        })), this.state.runningStrategyResults = v
    }
    onEvent(o) {
        o.userId.toNumber(), o.scriptId.toString(), o.roundStartId.toNumber(), o.roundEndId.toNumber(), this.update()
    }
    async update() {
        const {
            topStrategyResults: o,
            runningStrategyResults: l
        } = await S.http.post("/game/script/home/", {
            gameName: this.game.gameName
        });
        this.state.topStrategyResults = o, this.state.runningStrategyResults = l
    }
};
ct(yn, "socket", S.socket.socket("/gs"));
let Mo = yn;
var fe = (n => (n[n.CONNECTION = 0] = "CONNECTION", n[n.STARTING = 1] = "STARTING", n[n.PROGRESS = 2] = "PROGRESS", n[n.ENDED = 3] = "ENDED", n))(fe || {});
const Ut = Do,
    Kn = class Kn extends cd {
        constructor(o, l) {
            super({
                name: "crash",
                namespace: (l == null ? void 0 : l.gameSocketNameSpace) || hd("/g/c"),
                validateLink: Kn.validateLink,
                detailComponent: Nd,
                fairComponent: Md
            }, gm, {
                gameId: 0,
                elapsed: 0,
                rate: 0,
                maxRate: 100,
                startTime: Date.now(),
                betTime: 0,
                hash: "",
                history: [],
                status: 0,
                betInfo: null,
                nextBetInfo: null,
                paused: !1,
                showXbetLimit: !0,
                isLoginUserJoinGame: !1,
                isLoginuserEscapeGame: !1
            });
            ct(this, "crashState", function(o = {}) {
                return wd(o)
            }({
                houseEdge: 1,
                gameMode: "classic"
            }));
            ct(this, "players", []);
            ct(this, "isShowMore", !1);
            ct(this, "throwLimit", {});
            ct(this, "playersDict", {});
            ct(this, "checkPauseTimer", 0);
            ct(this, "salt", "0000000000000000000301e2801a9a9598bfb114e574a91a887f2132f33047e6");
            ct(this, "xbet");
            ct(this, "strategy");
            ct(this, "graph", new jo(this));
            ct(this, "requesting", !1);
            ct(this, "normalBetPlayersCount", 0);
            ct(this, "escapeCount", 0);
            ct(this, "normalTotalBetAmount", new S.Decimal(0));
            ct(this, "gameUnique", "");
            ct(this, "gameOption");
            this.gameOption = l, this.waitGameEnd = this.waitGameEnd.bind(this), this.waitGameStart = this.waitGameStart.bind(this), this.xbet = new tm(this), this.strategy = new Mo(this), this.bindEvent(), this.init(), S.accountStore.state.userId || S.accountStore.waitLogin().then(() => {
                setTimeout(() => {
                    window.location.reload()
                }, 500)
            })
        }
        get gameName() {
            var o;
            return ((o = this.gameOption) == null ? void 0 : o.gameName) || "crash"
        }
        get canBet() {
            return this.state.status === 1 && !this.state.betInfo && !this.state.script.isRunning
        }
        get canEscape() {
            return this.state.status === 2 && this.state.betInfo && this.state.betInfo.rate === 0
        }
        updateHouseEdge(o) {
            this.crashState.houseEdge = o
        }
        bindEvent() {
            this.socket.on("connect", this.onConnect.bind(this)), this.socket.on("reconnecting", () => this.state.status = 0), this.socket.on("pr", S.socket.decodeBind(this.onPrepare.bind(this), ft.Prepare)), this.socket.on("b", S.socket.decodeBind(this.onBet.bind(this), ft.XBet)), this.socket.on("bg", S.socket.decodeBind(this.onBegin.bind(this), ft.Begin)), this.socket.on("e", S.socket.decodeBind(this.onEscape.bind(this), ft.Escape)), this.socket.on("ed", S.socket.decodeBind(this.onEnd.bind(this), ft.End)), this.socket.on("st", S.socket.decodeBind(this.onSettle.bind(this), ft.Settle)), this.socket.on("pg", S.socket.decodeBind(this.onProgress.bind(this), ft.Progress)), this.script.enableAutoStep(!1), this.on("game_prepare", () => this.script.step());
            const o = this.hotkeyList.find(l => l.key === "space");
            o && (o.handler = () => (this.requesting || (this.canBet ? this.handleBetCrash().catch(S.notify) : this.canEscape && this.handleEscape().catch(S.notify)), !1)), this.on("game_end", () => {
                this.state.betInfo || this.script.onGameEnd(this.state.history.slice(-20).reverse())
            })
        }
        onPrepare({
            roundId: o,
            startTime: l,
            prepareTime: h
        }) {
            this.state.gameId = o.toNumber(), this.state.status = 1, this.state.hash = "", this.state.betTime = l.toNumber() - h.toNumber(), this.state.startTime = Date.now() + l.toNumber() - h.toNumber(), this.state.rate = 0, this.state.elapsed = 0, this.players = [], this.playersDict = {}, this.state.betInfo = null, this.normalTotalBetAmount = new S.Decimal(0), this.escapeCount = 0, this.normalBetPlayersCount = 0, this.isShowMore = !1, this.state.nextBetInfo && (this.handleBetCrash(this.state.nextBetInfo).catch(S.notify), this.state.nextBetInfo = null), this.emit("player_change"), this.emit("game_prepare"), this.emit("game_progress")
        }
        onBegin({
            normalBetUserIds: o
        }) {
            var l;
            if (this.state.status = 2, this.state.startTime = Date.now(), this.state.betInfo && !this.playersDict[S.accountStore.state.userId] && o.map(h => h.toNumber()).indexOf(S.accountStore.state.userId) !== -1) {
                const h = this.state.betInfo.currencyName,
                    p = ((l = S.useSystem().currency[h]) == null ? void 0 : l.unitAmount) || 1;
                this.addPlayer([{
                    userId: new S.Long(S.accountStore.state.userId),
                    name: S.accountStore.state.name,
                    currencyName: h,
                    bet: this.state.betInfo.bet.mul(p),
                    rate: 0,
                    usd: 0
                }])
            }
        }
        onEnd(o) {
            this.state.paused = !1, window.clearTimeout(this.checkPauseTimer), this.state.status = 3, this.state.rate = new S.Decimal(o.maxRate).div(100).toNumber(), this.state.elapsed = gl(this.state.rate), this.state.hash = o.hash, this.state.isLoginUserJoinGame = !1, this.state.isLoginuserEscapeGame = !1
        }
        waitGameEnd() {
            const o = this.state.gameId;
            return new Promise((l, h) => {
                this.once("game_end", p => {
                    p.gameId !== o ? h(new Error("Network Error! -- Crash script end")) : l(p)
                })
            })
        }
        waitGameStart() {
            return new Promise(o => this.once("game_prepare", o))
        }
        addPlayer(o) {
            o.forEach(l => {
                if (!this.playersDict[l.userId.toNumber()]) {
                    const h = S.systemStore.convertCurrency(l.bet, l.currencyName).toNumber(),
                        p = mr(Xn({}, l), {
                            usd: h
                        });
                    this.playersDict[l.userId.toNumber()] = p;
                    const v = an.sortedIndexBy(this.players, p, k => -k.usd);
                    this.players.splice(v, 0, p), this.normalTotalBetAmount = new S.Decimal(this.normalTotalBetAmount).add(h), this.normalBetPlayersCount += 1
                }
                l.userId.toNumber() === S.accountStore.state.userId && (this.state.isLoginUserJoinGame = !0)
            }), this.emit("player_change")
        }
        async handleBetCrash(o, l) {
            o || (o = {
                bet: this.state.amount,
                autoRate: this.state.maxRate,
                rate: 0,
                currencyName: this.state.currencyName
            }), await this.beforeBetCheck(o.bet), this.state.betInfo = o, this.txId = S.walletStore.createStaticDeduction();
            const h = wm({
                roundId: S.Long.fromNumber(this.state.gameId),
                currencyName: o.currencyName,
                betAmount: o.bet.toFixed(S.systemStore.getPrecision(o.currencyName)),
                autoEscapeRate: new S.Decimal(o.autoRate).mul(100).toNumber(),
                scriptId: l || null,
                frontgroundId: this.txId
            });
            try {
                return await this.socketRequest("throw-bet", h)
            } catch (p) {
                throw this.state.betInfo = null, p
            }
        }
        async handleScriptBet(o, l) {
            var h, p;
            return await this.handleBetCrash({
                bet: new S.Decimal(o),
                autoRate: l.payout,
                rate: 0,
                currencyName: this.state.currencyName
            }, (h = this.state.script.script) == null ? void 0 : h.id), await this.waitGameEnd(), [(((p = this.state.betInfo) == null ? void 0 : p.rate) || 0) / 100, this.state.history.slice(-20).reverse()]
        }
        async handleEscape() {
            this.requesting = !0;
            try {
                await this.socketRequest("throw-escape", _m({
                    roundId: S.Long.fromNumber(this.state.gameId)
                }))
            } finally {
                this.requesting = !1
            }
        }
        async handleNext(o = !1) {
            try {
                await this.beforeBetCheck(this.state.amount), this.state.nextBetInfo = o ? null : {
                    bet: this.state.amount,
                    autoRate: this.state.maxRate,
                    rate: 0,
                    currencyName: this.state.currencyName
                }
            } catch (l) {}
        }
        resetHistory({
            gameId: o,
            hash: l,
            cashedAt: h,
            wager: p
        }) {
            const v = this.state.history[this.state.history.length - 1],
                k = v ? v.gameId : 0,
                j = new Array;
            for (let N = 0; N < Kn.MAX_HISTORY && !(o <= k); N++) {
                const C = ym(vm(l, this.salt), this.crashState.houseEdge),
                    B = {
                        gameId: o,
                        hash: l,
                        odds: C,
                        crash: 100 * C,
                        cashedAt: 0,
                        wager: 0
                    };
                N === 0 && (B.cashedAt = h, B.wager = p), j.push(S.valtio.ref(B)), o--, l = String(sd(l))
            }
            this.state.history = this.state.history.concat(j.reverse()).slice(-Kn.MAX_HISTORY)
        }
        active() {
            this.state.script.isRunning ? this.enableHotkey() : (this.xbet.active(), super.active())
        }
        deactivate() {
            this.state.script.isRunning ? this.enableHotkey(!1) : (this.xbet.deactivate(), this.strategy.deactivate(), super.deactivate())
        }
        onProgress({
            elapsed: o
        }) {
            this.state.status = 2, this.state.elapsed = o.toNumber(), this.state.rate = Vr(o.toNumber());
            const l = Date.now() - this.state.elapsed;
            this.state.startTime > l && (this.state.startTime = l), this.emit("game_progress"), this.checkPause()
        }
        onEscape({
            userId: o,
            odds: l,
            force: h
        }) {
            if (this.state.status !== 2) return;
            const p = this.playersDict[o.toNumber()];
            p && (p.userId.toNumber() === S.accountStore.state.userId && (this.state.isLoginuserEscapeGame = !0, this.state.betInfo && (this.state.betInfo.rate = l, this.emit("escapeSuccess", {
                amount: this.state.betInfo.bet,
                odds: this.state.betInfo.rate / 100,
                currencyName: this.state.betInfo.currencyName
            }))), p.rate = l, this.escapeCount += 1, this.emit("player_change"), this.emit("escape", Object.assign({}, p)))
        }
        onSettle({
            roundId: o,
            hash: l,
            maxRate: h,
            escapes: p
        }) {
            const v = this.playersDict[S.accountStore.state.userId],
                k = {
                    gameId: o.toNumber(),
                    hash: l,
                    odds: h / 100,
                    crash: h,
                    wager: 0,
                    cashedAt: 0
                };
            if (v) {
                const j = p.find(N => {
                    var C;
                    return ((C = N.userId) == null ? void 0 : C.toNumber()) === S.accountStore.state.userId
                });
                j && j.odds !== v.rate && this.state.betInfo && (this.state.betInfo.rate = j.odds, v.rate = this.state.betInfo.rate), k.wager = v.bet.toNumber(), k.cashedAt = v.rate
            }
            this.resetHistory(k), this.emit("game_end", k)
        }
        onBet(o) {
            this.state.status;
            const l = {
                currencyName: o.currencyName,
                bet: new S.Decimal(o.betAmount),
                userId: new S.Long(o.userId.toNumber()),
                name: o.name,
                rate: 0,
                usd: 0
            };
            o.userId.toNumber() === S.accountStore.state.userId && this.state.betInfo === null && (this.state.betInfo = {
                currencyName: l.currencyName,
                bet: new S.Decimal(l.bet),
                rate: 0,
                autoRate: 0
            }), this.addPlayer([l])
        }
        async onConnect() {
            const [o] = await Promise.all([this.socketRequest("join").then(xm), this.initPms]);
            this.loadGameHistory(), this.throwLimit = o.betLimits.reduce((v, k) => (v[k.currencyName] = {
                maxAmount: parseFloat(k.maxBetAmount),
                minAmount: parseFloat(k.minBetAmount),
                maxProfit: parseFloat(k.maxProfit)
            }, v), {});
            const l = o.betLimits.reduce((v, k) => (v[k.currencyName] = {
                currencyName: k.currencyName,
                jackpotAmount: 1 / 0,
                maxBetAmount: parseFloat(k.maxBetAmount),
                minBetAmount: parseFloat(k.minBetAmount),
                maxProfitAmount: parseFloat(k.maxProfit)
            }, v), {});
            this.state.jackpot = l, this.xbet.getState().jackpot = l, wl.setItem("crashJackpot", l), o.status === 1 ? this.state.status = 1 : o.status === 2 ? this.state.status = 2 : this.state.status = 3, this.xbet.xbetInit(o.xBets), this.state.gameId = o.roundId.toNumber(), this.state.rate = new S.Decimal(o.maxRate).div(100).toNumber(), this.state.elapsed = gl(this.state.rate), this.state.startTime = o.startTime.toNumber(), this.state.hash = o.hash, this.players = [], this.playersDict = {}, this.state.betInfo = null;
            const h = o.normalBets.map(v => {
                const {
                    userId: k,
                    name: j,
                    currencyName: N,
                    betAmount: C,
                    odds: B
                } = v;
                return {
                    userId: k,
                    name: j,
                    currencyName: N,
                    rate: B || 0,
                    bet: new S.Decimal(C),
                    usd: 0
                }
            }).filter(v => v.userId !== null && v.userId !== void 0);
            this.addPlayer(h);
            const p = this.playersDict[S.accountStore.state.userId];
            p && (this.state.betInfo = {
                bet: p.bet,
                autoRate: p.rate,
                rate: p.rate,
                currencyName: p.currencyName
            }, p.rate !== 0 && (this.state.isLoginuserEscapeGame = !0)), Object.keys(this.throwLimit).forEach(v => {
                const k = this.throwLimit[v];
                k && (this.state.jackpot[v] = {
                    currencyName: v,
                    jackpotAmount: 0,
                    maxBetAmount: k.maxAmount,
                    minBetAmount: k.minAmount,
                    maxProfitAmount: k.maxProfit
                })
            }), this.normalBetPlayersCount = o.normalBetSize, this.normalTotalBetAmount = new S.Decimal(o.normalBetAmount), this.xbet.getState().xbetPlayersCount = o.xBetSize, this.xbet.getState().xbetTotalBetAmount = new S.Decimal(o.xBetAmount), this.escapeCount = o.escapedSize, this.updateHouseEdge(o.houseage)
        }
        async loadGameHistory() {
            const o = await S.http.post("/game/bet/multi/history", {
                gameUnique: this.gameUnique,
                page: 1,
                pageSize: 20
            });
            this.resetHistory({
                gameId: o.list[0].gameId,
                hash: JSON.parse(o.list[0].gameDetail).hash,
                odds: 0,
                crash: 0,
                cashedAt: 0,
                wager: 0
            })
        }
        checkPause() {
            window.clearTimeout(this.checkPauseTimer), this.state.paused = !1, this.checkPauseTimer = window.setTimeout(() => this.state.paused = !0, 5e3)
        }
    };
ct(Kn, "validateLink", `https://${S.env.GITHUB}.github.io/verify/crash.html`), ct(Kn, "MAX_HISTORY", 2e3);
let Io = Kn;
const xm = S.socket.decode(ft.CrashInfo),
    wm = S.socket.encode(ft.NormalBetRequest),
    _m = S.socket.encode(ft.EscapeRequest),
    ic = Io,
    Zm = Object.freeze(Object.defineProperty({
        __proto__: null,
        CrashStatus: fe,
        default: ic,
        useCrashGame: Ut
    }, Symbol.toStringTag, {
        value: "Module"
    }));
var Co = (n => (n.baseBetValue = "baseBetValue", n.wagerAfterAWinValue = "wagerAfterAWinValue", n.wagerAfterALossValue = "wagerAfterALossValue", n))(Co || {});
const yl = Po(function({
        type: n,
        payout: i = 2,
        children: o
    }) {
        const {
            t: l
        } = S.useTranslation(), h = {
            baseBetValue: l("Investment Amount x 1%"),
            wagerAfterAWinValue: l("Base Bet"),
            wagerAfterALossValue: l("Base Bet x {{payout}}^n", {
                payout: i
            })
        };
        return f.jsx(S.Tooltip, {
            title: h[n],
            forceWrap: !0,
            children: f.jsx("div", {
                className: km,
                children: o
            })
        })
    }),
    km = "w1um8txc",
    Sm = new S.Decimal(0),
    Nm = new S.Decimal(1),
    jm = "c1ijmnxm",
    Mm = cn.memo(function({
        min: n,
        max: i,
        onChange: o,
        value: l
    }) {
        const [h, p] = $.useState(!1), v = S.useOnClickOutside(() => {
            p(!1)
        }), [k, j] = $.useState(() => l === n ? 2 : l === i ? 1 : -1);

        function N(C) {
            j(C ? 1 : 2), o(C ? i : n)
        }
        return f.jsxs(f.Fragment, {
            children: [f.jsx(er.AnimatePresence, {
                children: h && f.jsxs(er.motion.div, {
                    ref: v,
                    className: "fix-layer",
                    transition: S.utils.springConfigs.fast,
                    children: [f.jsx("button", {
                        className: k === 2 ? "active" : "",
                        onClick: () => N(!1),
                        children: "Min"
                    }), f.jsx(S.Slider, {
                        min: n,
                        noDebounce: !0,
                        max: i,
                        value: l,
                        step: .01,
                        onChange: function(C) {
                            let B = -1;
                            i === C && (B = 1), n === C && (B = 2), j(B), o(C)
                        }
                    }), f.jsx("button", {
                        className: k === 1 ? "active" : "",
                        onClick: () => N(!0),
                        children: "Max"
                    })]
                })
            }), f.jsxs("button", {
                className: Im,
                onClick: () => p(!h),
                children: [f.jsx(S.Icon, {
                    name: "Arrow"
                }), f.jsx(S.Icon, {
                    name: "Arrow"
                })]
            })]
        })
    }),
    Im = "t1lmx2fe",
    Cm = cn.memo(function(n) {
        return f.jsxs("div", {
            className: "game-area-group-buttons",
            children: [f.jsx("button", {
                onClick: () => n.onChange(n.value / 2, "/2"),
                children: "/2"
            }), f.jsx("button", {
                onClick: () => n.onChange(2 * n.value, "x2"),
                children: "x2"
            }), f.jsx(Mm, Xn({}, n))]
        })
    }),
    Pm = ({
        jackpot: n,
        onJackpotHelp: i
    }) => {
        const {
            t: o
        } = S.useTranslation();
        return f.jsxs("div", {
            className: `${Tm} label`,
            children: [f.jsx("div", {
                children: o("Amount")
            }), n && n.maxProfitAmount !== 1 / 0 && f.jsxs("div", {
                className: "max-profit",
                children: [f.jsx(S.Icon, {
                    onClick: i,
                    name: "Inform"
                }), f.jsxs("div", {
                    className: "tip",
                    children: [f.jsxs("span", {
                        className: "tit",
                        children: [o("Max profit"), ": "]
                    }), f.jsx(S.BC.CoinFormat, {
                        name: n.currencyName,
                        amount: n.maxProfitAmount
                    })]
                })]
            })]
        })
    },
    vl = $.memo(function(n) {
        S.useTranslation();
        const [i, o] = $.useState(!1), l = S.useLocalCurrency(), [h, p] = $.useState({}), v = S.useSetting();

        function k() {
            const W = h[v.currencyName],
                at = S.walletStore.state[v.currencyName];
            if (!W || !at) return new S.Decimal(0);
            let J = new S.Decimal(W.maxBetAmount);
            return at.amount.gt(W.minBetAmount) && (J = S.DecimalUtils.min(at.amount.div(100), J)), new S.Decimal(J)
        }

        function j() {
            const W = h[v.currencyName];
            return new S.Decimal(W ? W.minBetAmount : 0)
        }
        $.useEffect(() => {
            wl.getItem("crashJackpot").then(W => {
                p(W)
            })
        }, []), $.useEffect(() => {
            (function() {
                const W = h[v.currencyName];
                if (W) {
                    const at = new S.Decimal(W.minBetAmount);
                    z(at.toNumber())
                }
            })()
        }, [h]);
        const {
            className: N,
            currencyName: C = v.currencyName,
            disabled: B = !1,
            value: L,
            onChange: z,
            max: Y = k().toNumber(),
            min: Z = j().toNumber(),
            onJackpotHelp: rt
        } = n, {
            label: wt = f.jsx(Pm, {
                jackpot: h[v.currencyName],
                onJackpotHelp: rt
            })
        } = n, vt = $.useCallback((W, at) => {
            z(W)
        }, [z]);
        return $.useMemo(() => [1, 2, 3, 4].map((W, at) => {
            const J = function(nt, st) {
                    let _t = nt;
                    return st.includes("FIAT") || (_t = nt.mul(100)),
                        function(Nt) {
                            if (Nt.gt(1)) return new S.Decimal(10).pow(String(S.DecimalUtils.round(Nt)).length);
                            if (Nt.lte(0)) return Sm; {
                                const jt = Nt.toPrecision(1).toString().length - 2;
                                return jt <= 1 ? Nm : new S.Decimal(.1).pow(jt - 1)
                            }
                        }(_t)
                }(l.amount2local(new S.Decimal(Z), v.currencyName), v.currencyName).mul(10 ** W),
                X = J.todp().toString();
            return f.jsx(S.Button, {
                disabled: B,
                onClick: () => {
                    z(l.local2amount(new S.Decimal(X), v.currencyName).toNumber())
                },
                children: X
            }, "amount-btn-" + at)
        }), [v.currencyName, Z, z, l]), f.jsx("div", {
            className: sn(jm, "game-coin-amount-input"),
            children: f.jsx(ud, {
                label: wt,
                className: sn(Dm, "game-coininput", N),
                value: Number(L.toString()),
                currencyName: C,
                disabled: B,
                onFocus: () => o(!0),
                onBlur: () => o(!1),
                onChange: W => z(W),
                max: Y,
                min: Z,
                children: f.jsx(Cm, {
                    value: L,
                    max: Y,
                    min: Z,
                    onChange: vt
                })
            })
        })
    }),
    Tm = "l1hifst9",
    Dm = "c1z70vc";
async function Om(n, i, o) {
    if (!S.accountStore.state.login) throw S.app.unsafeNavigate("#/login"), new Error;
    if (n.gt(S.walletStore.state[i].amount)) {
        const l = S.useDialog(),
            h = function(p, v) {
                const k = S.systemStore.amount2usd(p, v);
                let j = !0;
                for (const N in S.walletStore.state) {
                    const C = S.systemStore.amount2usd(S.walletStore.state[N].amount, N);
                    if (k.lte(C)) {
                        j = !1;
                        break
                    }
                }
                return j
            }(n, i);
        throw S.app.emit("game-bet-amount-insufficient", h ? "common" : "switch"), l.close(), new Error(o("Insufficient balance."))
    }
}
const ac = Po(function({
        item: n,
        callback: i
    }) {
        const o = S.useDialog(),
            l = Ut(),
            h = S.useSetting(),
            {
                t: p
            } = S.useTranslation(),
            [v, k] = $.useState(!1),
            [j, N] = $.useState(new S.Decimal(0)),
            C = (n.scriptLabel || "Green,Martingale").split(",");
        return f.jsx(S.Dialog, {
            title: p("Copy Strategy"),
            children: v ? f.jsx(S.Loading, {}) : f.jsxs(S.ScrollView, {
                className: `${Am} dialog-box`,
                children: [f.jsx("div", {
                    className: "detailForm",
                    children: f.jsx(vl, {
                        onChange: B => N(new S.Decimal(B)),
                        value: j.toNumber(),
                        label: f.jsx("div", {
                            className: "title",
                            children: f.jsx(Ce, {
                                type: Pe.baseBet,
                                children: p("Base Bet")
                            })
                        })
                    })
                }), f.jsx("div", {
                    className: "detailForm",
                    children: f.jsx(vl, {
                        value: 100 * j.toNumber(),
                        onChange: () => {},
                        label: f.jsx("div", {
                            className: "title",
                            children: f.jsx(Ce, {
                                type: Pe.investmentAmount,
                                children: p("Investment Amount")
                            })
                        }),
                        disabled: !0
                    })
                }), f.jsxs("div", {
                    className: "data-form",
                    children: [f.jsx("div", {
                        className: "data-title",
                        children: p("Strategy Parameters")
                    }), f.jsxs("div", {
                        className: "data-wrapper",
                        children: [f.jsxs("div", {
                            className: "item-betcount flex space-between",
                            children: [f.jsx("div", {
                                className: "item-betcount-label",
                                children: p("Bet Count")
                            }), f.jsx("div", {
                                className: "item-betcount-num value",
                                children: "100"
                            })]
                        }), f.jsxs("div", {
                            className: "item-autocachout flex space-between",
                            children: [f.jsx("div", {
                                className: "item-autocachout-label",
                                children: f.jsx(Ce, {
                                    type: Pe.autoCashout,
                                    children: p("Auto Cashout")
                                })
                            }), f.jsx("div", {
                                className: "item-autocachout-value value",
                                children: bl(C)
                            })]
                        }), f.jsxs("div", {
                            className: "item-wager flex space-between",
                            children: [f.jsx("div", {
                                className: "item-wager-label",
                                children: f.jsx(Ce, {
                                    type: Pe.wagerAfterAWin,
                                    children: p("Wager after a win")
                                })
                            }), f.jsx("div", {
                                className: "item-wager-value bolder value",
                                children: f.jsx(yl, {
                                    type: Co.wagerAfterAWinValue,
                                    children: f.jsx(S.BC.CoinFormat, {
                                        sign: !0,
                                        icon: !0,
                                        amount: j.toNumber(),
                                        name: h.currencyName
                                    })
                                })
                            })]
                        }), f.jsxs("div", {
                            className: "item-wager flex space-between",
                            children: [f.jsx("div", {
                                className: "item-wager-label",
                                children: f.jsx(Ce, {
                                    type: Pe.wagerAfterALoss,
                                    children: p("Wager after a lose")
                                })
                            }), f.jsx("div", {
                                className: "item-wager-value bolder value",
                                children: f.jsx(yl, {
                                    type: Co.wagerAfterALossValue,
                                    payout: ho(C),
                                    children: f.jsx(S.BC.CoinFormat, {
                                        sign: !0,
                                        icon: !0,
                                        amount: j.toNumber() * ho(C),
                                        name: h.currencyName
                                    })
                                })
                            })]
                        })]
                    })]
                }), f.jsx("div", {
                    className: "submit",
                    children: f.jsx(S.Button, {
                        onClick: async () => {
                            await Om(j, h.currencyName, p);
                            const B = h.currencyName.includes("FIAT") ? 2 : S.systemStore.getPrecision(h.currencyName),
                                L = Number(j.todp(B).toFixed());
                            try {
                                await (z = {
                                    scriptId: n.scriptId,
                                    betAmount: L,
                                    currencyName: h.currencyName,
                                    gameName: l.gameName || pd()
                                }, S.http.post("/game/script/copy/", z)), o.close(), S.notify(p("You have successfully copied this strategy!")), i()
                            } catch (Y) {
                                S.notify(Y.message)
                            }
                            var z
                        },
                        type: "conic",
                        children: p("Confirm")
                    })
                })]
            })
        })
    }),
    Am = "chocvnq";
export {
    ac as C, Zm as G
};