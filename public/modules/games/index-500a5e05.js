import {
    a as e,
    _ as n,
    r as a
} from "./vendor-8c02be2a.js";
import {
    c as d
} from "./index-66d88a57.js";

function U(l) {
    return e.jsx("div", {
        className: q,
        children: e.jsx(n.Imgix, {
            src: l.image,
            alt: "",
            args: "blur=150"
        })
    })
}
const q = "c7v9li4",
    F = {
        "en-IN": "en-IN",
        en: "en",
        vi: "vi",
        id: "id",
        ja: "ja",
        ko: "ko",
        fr: "fr",
        es: "es-ES",
        tl: "fil",
        ar: "ar",
        hi: "hi",
        tr: "tr",
        fa: "fa",
        pt: "pt-PT",
        ru: "ru",
        de: "de",
        th: "th",
        fi: "fi",
        pl: "pl",
        it: "it",
        my: "my",
        nl: "nl",
        ur: "ur-PK",
        uk: "uk",
        ms: "ms",
        bn: "bn-IN",
        mr: "mr",
        ta: "ta",
        te: "te"
    };

function _(l) {
    var C;
    const {
        t: m
    } = n.useTranslation(), r = n.useSetting().currencyName, g = n.useAccount(), o = (C = n.useWallet(r)) == null ? void 0 : C.bonusAmount.toNumber(), [P, E] = a.useState(!1), [x, I] = a.useState(""), [v, M] = a.useState(""), {
        basename: f,
        bgImage: $,
        className: R = "",
        gameUnique: p
    } = l, [u, h] = a.useState(1), {
        lang: i
    } = n.usePageContext(), w = a.useRef(null), [b, N] = a.useMemo(() => {
        const [s, j] = x.split("?");
        return [s, new URLSearchParams(j).get("accessCode") || ""]
    }, [x]);
    a.useEffect(() => {
        p && g.login && o !== 0 || h(1)
    }, [p, g.login, o]);
    const S = a.useMemo(() => i && i !== "en" ? f === "/" ? `/${i}` : `/${i}${f}` : f, [f, i]),
        [t, T] = a.useState();
    a.useEffect(() => {
        b && c(b).then(s => {
            T(new s({
                entry: b
            }))
        })
    }, [b]), a.useEffect(() => () => {
        t == null || t.unmount()
    }, [t]);
    const k = a.useCallback(() => E(!0), []);
    if (a.useEffect(() => {
            t == null || t.render({
                container: w.current,
                accessCode: N,
                lang: F[i] || "en",
                basename: S,
                onLoad: k
            })
        }, [t, N, i, S, k]), a.useEffect(() => {
            r !== n.env.freeCoin && (async () => {
                try {
                    const {
                        url: s,
                        currency: j
                    } = await async function(L, A) {
                        const {
                            url: B
                        } = await n.http.post("/platform-trading/tradingLogin/tradingLogin", {
                            currency: L,
                            balanceType: A
                        });
                        return {
                            currency: L,
                            url: B
                        }
                    }(r, u);
                    j === r && I(s)
                } catch (s) {
                    M(s.code === 4001 ? n.i18n.t("Sorry, the game does not exist or is currently unavailable.") : s.message)
                }
            })()
        }, [g.login, r, u]), v) throw v;
    const y = r === n.env.freeCoin;
    return e.jsxs("div", {
        className: d(R, K, y && "currency-disabled"),
        children: [g.login && !!p && !y && e.jsx("div", {
            className: "switch-container",
            children: e.jsxs("div", {
                className: d("switch-wrapper", o === 0 && "no-bonus"),
                children: [e.jsx("span", {
                    className: d("label", u === 1 && "active", o === 0 && "disabled"),
                    onClick: () => h(1),
                    children: m("Real Money")
                }), e.jsx(n.Switch, {
                    className: d("switch", o === 0 && "disabled"),
                    value: u === 2,
                    onChange: s => h(s ? 2 : 1)
                }), e.jsx("span", {
                    className: d("label", u === 2 && "active", o === 0 && "disabled"),
                    onClick: () => h(2),
                    children: m("Bonus Money")
                }), e.jsx("div", {
                    className: "bonus-tip",
                    children: m("You don't have any bonus money")
                })]
            })
        }), e.jsx("div", {
            className: "trading-wrapper",
            ref: w
        }), y ? e.jsx(n.Empty, {
            children: m("{{jb}} cannot be used in this game. Please switch to other assets.", {
                jb: n.env.freeCoin
            })
        }) : !P && e.jsxs(e.Fragment, {
            children: [e.jsx(U, {
                image: $
            }), e.jsx(n.Loading, {
                className: "loading"
            })]
        })]
    })
}
async function c(l) {
    return window.Trading || (c.LoadingPromise || (c.LoadingPromise = n.utils.loadScript(`${l}/trading.js`, "Trading", "trading-sdk")), await c.LoadingPromise), window.Trading
}
c || (c = {});
const K = "c1oxk9ok";
export {
    _ as
    default
};