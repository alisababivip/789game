import {
    j as e
} from "../../chunk-a4af42e8.js";
import {
    c as h
} from "../../chunk-5bcb444f.js";
import {
    eh as p,
    a as o,
    e9 as j,
    cS as m,
    cL as L,
    ct as u,
    cu as r,
    cl as N,
    ev as f
} from "../../chunk-64278058.js";
import {
    r as w
} from "../../chunk-73e80d68.js";
import {
    G as i
} from "../../chunk-42f5abfc.js";
import {
    i as v
} from "../../chunk-f1a029f1.js";
import {
    G as b
} from "../../chunk-de5e47f6.js";
import {
    g as n,
    a as B
} from "../../chunk-cf8d333b.js";
import {
    G as l
} from "../../chunk-405456f5.js";
import "../../chunk-cf010ec4.js";
import "../../chunk-55136115.js";
import "../../chunk-7a9ca7ff.js";
import "../../chunk-8d9c7a4a.js";
import "../../chunk-07d6de63.js";
const k = p;

function d(a) {
    return a > 9 ? a : "0" + a
}

function y(a, s = 210, t = 12) {
    return o.isMobile() ? 2 : a === 0 ? 7 : (s = o.relativePx(s), t = o.relativePx(t), Math.floor((a + t) / (s + t)))
}
const D = function({
    data: a,
    idx: s
}) {
    const t = j(),
        c = `//img2.distributedresourcestorage.com${a.thumbnail}`,
        C = a.nextGameStart / 1e3 < 60;
    return e.jsx("section", {
        className: M,
        children: e.jsxs("div", {
            className: "game-item",
            children: [e.jsxs("div", {
                className: "game-item-pic-box",
                children: [e.jsx(m, {
                    href: `/game/${a==null?void 0:a.gameUnique}`,
                    className: "game-img-link",
                    children: e.jsx(L, {
                        className: "game-img",
                        src: c,
                        args: "w=200",
                        alt: ""
                    })
                }), e.jsx("div", {
                    className: "countdown-box",
                    children: e.jsx(u, {
                        endTime: a == null ? void 0 : a.nextGameStart,
                        children: ({
                            minutes: g,
                            seconds: x
                        }) => e.jsx("div", {
                            className: "text-time",
                            style: {
                                color: C ? "#FFED4E" : "#fff"
                            },
                            children: `${d(g)}:${d(x)}`
                        })
                    })
                })]
            }), e.jsxs("div", {
                className: "gradient-name-and-box",
                children: [e.jsx("h3", {
                    className: "game-name",
                    children: a == null ? void 0 : a.fullName
                }), e.jsxs("div", {
                    className: "gradient-box",
                    children: [e.jsxs("div", {
                        className: "game-item-amount-box",
                        style: {
                            visibility: Number(a == null ? void 0 : a.jackpots) > 0 ? "visible" : "hidden"
                        },
                        children: [e.jsx("img", {
                            src: v("coinflag"),
                            className: "game-icon-flag"
                        }), e.jsx("div", {
                            className: "currency-box",
                            children: e.jsx("span", {
                                className: "game-amount",
                                children: t.amount2localStr(new r(a.jackpots))
                            })
                        })]
                    }), e.jsx("p", {
                        className: "game-line"
                    }), e.jsxs("div", {
                        className: "game-item-desc-box",
                        children: [e.jsxs("div", {
                            className: "desc-detail",
                            children: [e.jsxs("div", {
                                className: "desc-detail-item",
                                children: [e.jsx("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "16",
                                    height: "16",
                                    viewBox: "0 0 16 16",
                                    fill: "none",
                                    children: e.jsx("path", {
                                        d: "M12.8055 11.197V11.1975C13.1172 12.9793 11.8755 14.2724 10.1449 14.5634C8.47374 14.8445 5.74964 14.8445 4.07845 14.5634C2.34793 14.2729 1.10619 12.9798 1.41792 11.1975V11.197C1.68256 9.68498 2.96386 8.7432 4.5291 8.8242C5.67242 8.88353 6.37499 9.03233 7.18821 9.03233C8.01086 9.03233 8.55898 8.88353 9.69382 8.8242C11.2586 8.74226 12.5408 9.68498 12.805 11.197H12.8055ZM12.2319 8.39427L12.2715 8.39851C13.072 8.54684 14.0354 8.97253 14.4216 10.1224C14.7785 11.1857 14.358 12.0192 13.8791 12.5706C13.7265 12.7462 13.4209 12.5937 13.4967 12.3785C13.6936 11.8219 13.7727 11.1108 13.4647 10.3235C13.1652 9.55737 12.611 9.07471 12.1081 8.77758C11.8981 8.65373 12.0285 8.35378 12.2715 8.39898L12.2319 8.39427ZM6.89909 2.01418C8.54297 2.01418 9.87606 3.3468 9.87606 4.99162C9.87606 6.63644 8.54297 7.96906 6.89909 7.96906C5.25474 7.96906 3.92165 6.63597 3.92165 4.99162C3.92165 3.34727 5.25474 2.01418 6.89909 2.01418ZM9.56386 2.06127C9.32464 1.89081 9.49699 1.5254 9.78612 1.59838C10.0908 1.67514 10.4044 1.79475 10.6968 1.97839C11.6617 2.58584 12.1387 3.66041 11.9687 4.85412C11.8896 5.41118 11.6424 5.8444 11.3641 6.17167C11.1809 6.38781 10.8192 6.20793 10.8946 5.93858C11.0716 5.30665 11.1239 4.49954 10.7835 3.61285C10.5028 2.8825 10.0225 2.38948 9.56339 2.06127H9.56386Z",
                                        fill: "#98A7B5"
                                    })
                                }), e.jsx("span", {
                                    children: a == null ? void 0 : a.playersInRoom
                                })]
                            }), e.jsxs("div", {
                                className: "desc-detail-item",
                                children: [e.jsx("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "17",
                                    height: "16",
                                    viewBox: "0 0 17 16",
                                    fill: "none",
                                    children: e.jsx("path", {
                                        d: "M8.50689 1.58899C12.1478 1.58899 15.0994 4.63047 15.0994 8.18145C15.0994 11.7324 12.0739 14.7739 8.50689 14.7739C4.9399 14.7739 1.91443 11.7324 1.91443 8.18145C1.91443 4.63047 4.86597 1.58899 8.50689 1.58899ZM8.50689 3.03133C5.69615 3.03133 3.35629 5.39284 3.35629 8.18193C3.35629 10.9428 5.74183 13.3325 8.50689 13.3325C11.272 13.3325 13.6575 10.9428 13.6575 8.18193C13.6575 5.39331 11.3176 3.03133 8.50689 3.03133ZM8.50689 3.64913C11.0101 3.64913 13.0392 5.6782 13.0392 8.18145C13.0392 10.6847 11.0101 12.7138 8.50689 12.7138C6.00364 12.7138 3.97457 10.6847 3.97457 8.18145C3.97457 5.6782 6.00364 3.64913 8.50689 3.64913ZM8.99238 5.29725H8.00163V5.80299C7.22089 5.98616 6.742 6.50085 6.742 7.23261C6.742 8.90615 9.14354 8.45222 9.14354 9.17032C9.14354 9.38693 8.95989 9.48865 8.67124 9.48865C8.19893 9.48865 7.43138 9.17692 6.95861 8.76347L6.44675 9.83428C6.86678 10.1733 7.42432 10.4172 8.00163 10.5255V11.0652H8.99238V10.566C9.87153 10.4714 10.5539 9.99674 10.5539 9.09592C10.5539 7.38188 8.15231 7.79485 8.15231 7.09699C8.15231 6.92088 8.30347 6.83942 8.53279 6.83942C8.91987 6.83942 9.589 7.08993 10.0613 7.36776L10.5666 6.28377C10.1531 6.00594 9.57582 5.80958 8.99191 5.75543V5.29678L8.99238 5.29725Z",
                                        fill: "#98A7B5"
                                    })
                                }), e.jsx("span", {
                                    className: "desc-detail-item-money",
                                    children: e.jsx("span", {
                                        children: t.amount2localStr(new r(a.cardCost))
                                    })
                                })]
                            }), e.jsxs("div", {
                                className: "desc-detail-item",
                                children: [e.jsxs("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "16",
                                    height: "16",
                                    viewBox: "0 0 16 16",
                                    fill: "none",
                                    children: [e.jsxs("g", {
                                        clipPath: "url(#clip0_93_4065)",
                                        children: [e.jsx("path", {
                                            d: "M10.6977 3.09251C10.6586 3.09722 10.6129 3.09958 10.5668 3.09958C10.2014 3.09958 9.87411 2.93524 9.65515 2.67672L9.65374 2.67483L8.9022 1.77685C8.68135 1.51691 8.35408 1.35352 7.98867 1.35352C7.61384 1.35352 7.27904 1.52586 7.0596 1.79568L7.05772 1.79804L6.3236 2.70968C6.10511 2.98185 5.77219 3.1542 5.39924 3.1542C5.35734 3.1542 5.31543 3.15185 5.27446 3.14761L5.27964 3.14808L4.12784 3.04731C4.09629 3.04448 4.06003 3.0426 4.0233 3.0426C3.36406 3.0426 2.8296 3.57706 2.8296 4.23631C2.8296 4.28198 2.83195 4.32719 2.83713 4.37145L2.83666 4.3658L2.96192 5.52796C2.96615 5.5661 2.96851 5.60989 2.96851 5.65463C2.96851 6.02145 2.80464 6.34966 2.54612 6.57051L1.64672 7.32346C1.38679 7.54431 1.22339 7.87158 1.22339 8.23699C1.22339 8.61182 1.39573 8.94662 1.66555 9.16606L1.66791 9.16794L2.57955 9.90206C2.85126 10.1224 3.0236 10.4568 3.0236 10.8311C3.0236 10.8716 3.02172 10.9116 3.01748 10.9512L3.01795 10.946L2.91718 12.1119C2.91436 12.1421 2.91294 12.1774 2.91294 12.2127C2.91294 12.872 3.4474 13.4064 4.10665 13.4064C4.15233 13.4064 4.19753 13.4041 4.2418 13.3989L4.23615 13.3994L5.3983 13.2637C5.43644 13.2595 5.48024 13.2572 5.52497 13.2572C5.89227 13.2572 6.22095 13.4224 6.44085 13.6833L6.44227 13.6852L7.19381 14.5761C7.41513 14.8417 7.74569 15.0098 8.11581 15.0098C8.48593 15.0098 8.81697 14.8417 9.0364 14.578L9.03781 14.5761L9.77193 13.6607C9.99231 13.389 10.3266 13.2167 10.701 13.2167C10.7415 13.2167 10.7815 13.2185 10.8211 13.2228L10.8159 13.2223L11.9818 13.3231C12.012 13.3259 12.0473 13.3273 12.0826 13.3273C12.7418 13.3273 13.2763 12.7929 13.2763 12.1336C13.2763 12.0879 13.2739 12.0427 13.2688 11.9985L13.2692 12.0041L13.144 10.842C13.1393 10.8024 13.1369 10.7572 13.1369 10.7106C13.1369 10.3442 13.3027 10.017 13.5635 9.79941L13.5654 9.79799L14.446 9.03232C14.7116 8.81101 14.8797 8.48044 14.8797 8.11032C14.8797 7.7402 14.7116 7.40917 14.4479 7.18973L14.446 7.18832L13.5306 6.4542C13.2584 6.23571 13.0861 5.90279 13.0861 5.52984C13.0861 5.48793 13.0884 5.44602 13.0927 5.40506L13.0922 5.41024L13.193 4.24431C13.1958 4.21276 13.1977 4.1765 13.1977 4.13977C13.1977 3.48053 12.6632 2.94607 12.004 2.94607C11.9583 2.94607 11.9131 2.94842 11.8688 2.9536L11.8745 2.95313L10.6977 3.09251ZM11.6861 9.6134C11.098 11.076 9.69094 12.0893 8.04753 12.0893C5.88756 12.0893 4.13632 10.3381 4.13632 8.17813C4.13632 6.01816 5.88756 4.26691 8.04753 4.26691C8.56457 4.26691 9.05806 4.36721 9.50965 4.54945L9.48328 4.54003C10.9459 5.12723 11.9597 6.53331 11.9597 8.17625C11.9597 8.69375 11.8589 9.18772 11.6762 9.63977L11.6856 9.6134H11.6861Z",
                                            fill: "#98A7B5"
                                        }), e.jsx("path", {
                                            d: "M8.38713 5.87596L8.93006 6.81539C8.98516 6.91192 9.07839 6.98114 9.18858 7.0028L9.19094 7.00327L10.2142 7.20528C10.3945 7.24201 10.5283 7.39929 10.5283 7.58765C10.5283 7.68371 10.4934 7.7713 10.4364 7.8391L10.4369 7.83863L9.72022 8.69094C9.66465 8.7564 9.63122 8.8421 9.63122 8.93534C9.63122 8.94993 9.63216 8.96406 9.63357 8.97819V8.9763L9.72775 10.0203C9.72775 10.025 9.72822 10.0302 9.72822 10.0358C9.72822 10.251 9.55352 10.4257 9.33832 10.4257C9.28794 10.4257 9.24038 10.4163 9.19612 10.3989L9.19894 10.3998L8.18276 10.0099C8.14038 9.99343 8.09141 9.98401 8.04008 9.98401C7.98875 9.98401 7.93978 9.99343 7.89457 10.0108L7.8974 10.0099L6.89864 10.3998C6.85673 10.4163 6.80823 10.4262 6.75785 10.4262C6.54265 10.4262 6.36795 10.2515 6.36795 10.0363C6.36795 10.0231 6.36842 10.0104 6.36983 9.99766V9.99908L6.46731 8.95511C6.46825 8.9457 6.46872 8.93439 6.46872 8.92356C6.46872 8.82656 6.43387 8.73803 6.37642 8.66928L6.3769 8.66975L5.6635 7.81744C5.60652 7.75011 5.57214 7.66252 5.57214 7.56646C5.57214 7.3781 5.70588 7.22082 5.88387 7.18457L5.88623 7.18409L6.90571 6.98208C7.01919 6.95901 7.1129 6.89026 7.1694 6.79608L7.17035 6.7942L7.71328 5.87549C7.78203 5.75824 7.90729 5.68054 8.05091 5.68054C8.19453 5.68054 8.31979 5.75824 8.3876 5.87361L8.38854 5.87549L8.38713 5.87596Z",
                                            fill: "#98A7B5"
                                        })]
                                    }), e.jsx("defs", {
                                        children: e.jsx("clipPath", {
                                            id: "clip0_93_4065",
                                            children: e.jsx("rect", {
                                                width: "15.0685",
                                                height: "15.0685",
                                                fill: "white",
                                                transform: "translate(0.51709 0.647217)"
                                            })
                                        })
                                    })]
                                }), e.jsx("span", {
                                    className: "desc-detail-item-money",
                                    children: e.jsx("span", {
                                        children: t.amount2localStr(new r(a.gamePrize))
                                    })
                                })]
                            })]
                        }), e.jsx("div", {
                            className: "desc-btn-box",
                            children: e.jsx("div", {
                                className: "desc-btn-box-btn",
                                children: e.jsx(m, {
                                    href: `/game/${a==null?void 0:a.gameUnique}`,
                                    className: "txt",
                                    children: e.jsx(N, {
                                        className: "desc-btn",
                                        children: "Play"
                                    })
                                })
                            })
                        })]
                    })]
                })]
            })]
        })
    }, a == null ? void 0 : a.gameUnique)
};

function I(a, s) {
    return e.jsx(D, {
        data: a,
        idx: s
    }, a.gameId)
}
const S = w.memo(function({
        source: a,
        title: s,
        loop: t = 0
    }) {
        const c = a.read();
        return c.length === 0 ? null : e.jsx(b, {
            className: P,
            title: s,
            loop: t,
            calcSize: y,
            getData: () => c,
            renderItem: I,
            viewAllClassName: ""
        })
    }),
    M = "bzvmc7r",
    P = "slsp8m7";

function Z() {
    const {
        t: a
    } = f(), s = k();
    return e.jsxs("div", {
        className: h("page-max-width-wrap casino-container", G),
        children: [e.jsx("div", {
            className: "bingo-tit",
            children: a("Bingo")
        }), e.jsx(S, {
            source: s.bingoOnlinePlayData,
            title: a("Play Online Bingo"),
            loop: 0
        }), e.jsx(i, {
            source: s.buyExtraBallFeatureData,
            link: "/tagname/buy-extrabal-feature",
            loop: 0,
            title: a("Buy Extra Ball Feature")
        }), e.jsx(i, {
            source: s.jackpotData,
            link: "/tagname/jackpot",
            loop: 0,
            title: a("Jackpot")
        }), e.jsx(i, {
            source: s.allBingoGamesData,
            loop: 0,
            link: "/tagname/bingo",
            title: a("All Bingo Games")
        }), e.jsx(i, {
            source: s.newReleaseData,
            loop: 0,
            link: "/tagname/bingo-new-release",
            title: a("New Release")
        }), e.jsx(i, {
            source: s.kenoData,
            loop: 0,
            link: "/tagname/keno",
            title: a("Keno")
        }), e.jsx(i, {
            source: s.scratchCardsData,
            loop: 0,
            link: "/tagname/scratch-cards",
            title: a("Scratch Cards")
        })]
    })
}
const G = "sarqa0f";

function V() {
    return e.jsx(Z, {})
}
const T = ({
    ctx: a
}) => {
    const {
        urlParsed: s
    } = a, t = parseInt(s.search.page || "1");
    return {
        buyExtraBallFeatureData: n({
            sectionId: l.getTagNameSectionId("Buy extra ball feature"),
            tag: "Buy extra ball feature",
            page: t
        }),
        jackpotData: n({
            sectionId: l.getTagNameSectionId("Bingo jackpot"),
            tag: "Bingo jackpot",
            page: t
        }),
        allBingoGamesData: n({
            sectionId: l.getTagNameSectionId("Bingo"),
            tag: "Bingo",
            page: t
        }),
        newReleaseData: n({
            sectionId: l.getTagNameSectionId("Bingo New Release"),
            tag: "Bingo New Release",
            page: t
        }),
        kenoData: n({
            sectionId: l.getTagNameSectionId("Keno"),
            tag: "Keno",
            page: t
        }),
        scratchCardsData: n({
            sectionId: l.getTagNameSectionId("Scratch cards"),
            tag: "Scratch cards",
            page: t
        }),
        bingoOnlinePlayData: B()
    }
};
export {
    V as Page, T as onPageData
};