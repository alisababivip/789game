var n = Object.defineProperty;
var s = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty,
    m = Object.prototype.propertyIsEnumerable;
var l = (t, e, o) => e in t ? n(t, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: o
    }) : t[e] = o,
    r = (t, e) => {
        for (var o in e || (e = {})) i.call(e, o) && l(t, o, e[o]);
        if (s)
            for (var o of s(e)) m.call(e, o) && l(t, o, e[o]);
        return t
    };
import {
    _
} from "./main-057d7723.js";
import {
    a,
    _ as u
} from "./vendor-8c02be2a.js";

function d({
    children: t
}) {
    return a.jsx(u.I18nProvider, {
        namespace: "games",
        locales: Object.assign({
            "../../locales/ar-SA/games.json": () => _(() =>
                import ("./games-46652e7e.js"), []).then(e => e.default),
            "../../locales/bn-BD/games.json": () => _(() =>
                import ("./games-1cd1fbc8.js"), []).then(e => e.default),
            "../../locales/de-DE/games.json": () => _(() =>
                import ("./games-9ab63689.js"), []).then(e => e.default),
            "../../locales/en-IN/games.json": () => _(() =>
                import ("./games-1d234d9d.js"), []).then(e => e.default),
            "../../locales/en-US/games.json": () => _(() =>
                import ("./games-d072a9ac.js"), []).then(e => e.default),
            "../../locales/es-ES/games.json": () => _(() =>
                import ("./games-1aa404ae.js"), []).then(e => e.default),
            "../../locales/fa-IR/games.json": () => _(() =>
                import ("./games-09c0c245.js"), []).then(e => e.default),
            "../../locales/fi-FI/games.json": () => _(() =>
                import ("./games-bee19e64.js"), []).then(e => e.default),
            "../../locales/fil-PH/games.json": () => _(() =>
                import ("./games-6414e3a3.js"), []).then(e => e.default),
            "../../locales/fr-FR/games.json": () => _(() =>
                import ("./games-b0545ca4.js"), []).then(e => e.default),
            "../../locales/hi-IN/games.json": () => _(() =>
                import ("./games-c56de95d.js"), []).then(e => e.default),
            "../../locales/id-ID/games.json": () => _(() =>
                import ("./games-dc3a9f52.js"), []).then(e => e.default),
            "../../locales/it-IT/games.json": () => _(() =>
                import ("./games-71709c79.js"), []).then(e => e.default),
            "../../locales/ja-JP/games.json": () => _(() =>
                import ("./games-9cb0d8b5.js"), []).then(e => e.default),
            "../../locales/ko-KR/games.json": () => _(() =>
                import ("./games-92e0a5f9.js"), []).then(e => e.default),
            "../../locales/mr-IN/games.json": () => _(() =>
                import ("./games-cec9da86.js"), []).then(e => e.default),
            "../../locales/ms-MY/games.json": () => _(() =>
                import ("./games-2ec36bcc.js"), []).then(e => e.default),
            "../../locales/my-MM/games.json": () => _(() =>
                import ("./games-6f55eb21.js"), []).then(e => e.default),
            "../../locales/nl-NL/games.json": () => _(() =>
                import ("./games-84d84ecc.js"), []).then(e => e.default),
            "../../locales/pl-PL/games.json": () => _(() =>
                import ("./games-f5003a24.js"), []).then(e => e.default),
            "../../locales/pt-BR/games.json": () => _(() =>
                import ("./games-4c0ff4a5.js"), []).then(e => e.default),
            "../../locales/ru-RU/games.json": () => _(() =>
                import ("./games-e404e220.js"), []).then(e => e.default),
            "../../locales/ta-IN/games.json": () => _(() =>
                import ("./games-d3018698.js"), []).then(e => e.default),
            "../../locales/te-IN/games.json": () => _(() =>
                import ("./games-454f1381.js"), []).then(e => e.default),
            "../../locales/th-TH/games.json": () => _(() =>
                import ("./games-496cf8aa.js"), []).then(e => e.default),
            "../../locales/tr-TR/games.json": () => _(() =>
                import ("./games-16469616.js"), []).then(e => e.default),
            "../../locales/uk-UA/games.json": () => _(() =>
                import ("./games-975cc45c.js"), []).then(e => e.default),
            "../../locales/ur-PK/games.json": () => _(() =>
                import ("./games-a59ba17a.js"), []).then(e => e.default),
            "../../locales/vi-VN/games.json": () => _(() =>
                import ("./games-d3b54980.js"), []).then(e => e.default)
        }),
        children: t
    })
}

function f(t) {
    return e => a.jsx(d, {
        children: a.jsx(t, r({}, e))
    })
}
export {
    f as w
};