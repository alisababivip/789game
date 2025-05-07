var l = Object.defineProperty;
var a = Object.getOwnPropertySymbols;
var r = Object.prototype.hasOwnProperty,
    i = Object.prototype.propertyIsEnumerable;
var u = (_, t, e) => t in _ ? l(_, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: e
    }) : _[t] = e,
    c = (_, t) => {
        for (var e in t || (t = {})) r.call(t, e) && u(_, e, t[e]);
        if (a)
            for (var e of a(t)) i.call(t, e) && u(_, e, t[e]);
        return _
    };
import {
    _ as o
} from "./main-03098ed6.js";
import {
    r as n,
    _ as s
} from "./_bc_ui_share-16017657.js";

function d({
    children: _
}) {
    return n.jsx(s.I18nProvider, {
        namespace: "account",
        locales: Object.assign({
            "../../locales/ar-SA/account.json": () => o(() =>
                import ("./account-9088078e.js"), []).then(t => t.default),
            "../../locales/bn-BD/account.json": () => o(() =>
                import ("./account-9d611d03.js"), []).then(t => t.default),
            "../../locales/de-DE/account.json": () => o(() =>
                import ("./account-3a2f2ee3.js"), []).then(t => t.default),
            "../../locales/en-IN/account.json": () => o(() =>
                import ("./account-730ddc23.js"), []).then(t => t.default),
            "../../locales/en-US/account.json": () => o(() =>
                import ("./account-d1102365.js"), []).then(t => t.default),
            "../../locales/es-ES/account.json": () => o(() =>
                import ("./account-9ecdeed5.js"), []).then(t => t.default),
            "../../locales/fa-IR/account.json": () => o(() =>
                import ("./account-44d1cdf8.js"), []).then(t => t.default),
            "../../locales/fi-FI/account.json": () => o(() =>
                import ("./account-289a196c.js"), []).then(t => t.default),
            "../../locales/fil-PH/account.json": () => o(() =>
                import ("./account-f8819d21.js"), []).then(t => t.default),
            "../../locales/fr-FR/account.json": () => o(() =>
                import ("./account-3e72ad6a.js"), []).then(t => t.default),
            "../../locales/hi-IN/account.json": () => o(() =>
                import ("./account-8d688b5f.js"), []).then(t => t.default),
            "../../locales/id-ID/account.json": () => o(() =>
                import ("./account-535c18d0.js"), []).then(t => t.default),
            "../../locales/it-IT/account.json": () => o(() =>
                import ("./account-076a3cb7.js"), []).then(t => t.default),
            "../../locales/ja-JP/account.json": () => o(() =>
                import ("./account-101de52f.js"), []).then(t => t.default),
            "../../locales/ko-KR/account.json": () => o(() =>
                import ("./account-3b8f7bcc.js"), []).then(t => t.default),
            "../../locales/mr-IN/account.json": () => o(() =>
                import ("./account-79eb9334.js"), []).then(t => t.default),
            "../../locales/ms-MY/account.json": () => o(() =>
                import ("./account-394f1e64.js"), []).then(t => t.default),
            "../../locales/my-MM/account.json": () => o(() =>
                import ("./account-a6675388.js"), []).then(t => t.default),
            "../../locales/nl-NL/account.json": () => o(() =>
                import ("./account-fdd2eccf.js"), []).then(t => t.default),
            "../../locales/pl-PL/account.json": () => o(() =>
                import ("./account-5f55b107.js"), []).then(t => t.default),
            "../../locales/pt-BR/account.json": () => o(() =>
                import ("./account-b1b117f1.js"), []).then(t => t.default),
            "../../locales/ru-RU/account.json": () => o(() =>
                import ("./account-93286128.js"), []).then(t => t.default),
            "../../locales/ta-IN/account.json": () => o(() =>
                import ("./account-90d48ebc.js"), []).then(t => t.default),
            "../../locales/te-IN/account.json": () => o(() =>
                import ("./account-84a127c5.js"), []).then(t => t.default),
            "../../locales/th-TH/account.json": () => o(() =>
                import ("./account-fe62070e.js"), []).then(t => t.default),
            "../../locales/tr-TR/account.json": () => o(() =>
                import ("./account-bd192c34.js"), []).then(t => t.default),
            "../../locales/uk-UA/account.json": () => o(() =>
                import ("./account-2d8c985f.js"), []).then(t => t.default),
            "../../locales/ur-PK/account.json": () => o(() =>
                import ("./account-b3671ec8.js"), []).then(t => t.default),
            "../../locales/vi-VN/account.json": () => o(() =>
                import ("./account-553cd62d.js"), []).then(t => t.default)
        }),
        children: _
    })
}

function f(_) {
    return t => n.jsx(d, {
        children: n.jsx(_, c({}, t))
    })
}
export {
    f as w
};