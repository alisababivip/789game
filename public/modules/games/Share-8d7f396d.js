import {
    R as x,
    a as s,
    _ as a,
    r as b,
    l as w
} from "./vendor-8c02be2a.js";
import {
    c as p
} from "./index-66d88a57.js";
const E = x.memo(({
        show: e
    }) => s.jsx("div", {
        className: `${B} animation-win`,
        children: !!e && s.jsxs(s.Fragment, {
            children: [s.jsx("div", {
                className: "star-item item-1"
            }), s.jsx("div", {
                className: "star-item item-2"
            }), s.jsx("div", {
                className: "star-item item-3"
            }), s.jsx("div", {
                className: "star-item item-4"
            })]
        })
    })),
    B = "a1vwpwds",
    C = "/modules/games/star-781a1f19.png",
    k = "/modules/games/ribbon-ea676df2.gif",
    U = "/modules/games/ribbon-ea676df2.gif",
    g = {
        heart_left: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAwCAYAAAAGlsrkAAAAAXNSR0IArs4c6QAABKpJREFUWAm9WM1vW0UQn9nnZ7t2o4ikdhISCCQW4dhTxTFC4gDHCgM9oP4FnDiDAHEpn4dWVHCkUj/knkCiRxAHEGc+RExEJUKipE1SQhLHX+8t83v2Ws/2c+zEa0ay93l33/z2NzM7O2umAWTl0uPnqF5/kbR+SaYvaU3TxHqSiHeZaFP6isx0TyXVN7kbWw8GUEnyXm/549Xsouf578qkSwKmes9sjAi4L4u567L79kJhY+W4+ZHA+p3lWPHn365o9t8gTS4QU0mP0gmPzsR9ijmaHNbk+Ux1+ZSrig4qDpXk42uBZvJI8/VnVPZNLvxajVpAFzDMqmvVggAuY3A8XafJsRrFlGjsI1jIzr5L/5Ri4hWZzPxD3OWLC7cebHW+2gYc+LJW+1FrnXOF1exjFUoIw5NKpaZofTdBNY/hyzVH8fO5wsPVsJ6W32BeMAVo0vVp/lz5VKBQnsD7mTKlZNFC/AnP19+u5jO5SGD4FOZ1xaRzExVyhPEw4kDPZAt8DuD385lpozNgjOhFIMHusxZAjXIJMpoRfRDNNOXT2JEZi+HBq/vvSeMikE7jU6Msqj2SSIfIGr5fLPy5Z+YoBJSs7DVQR/TaloNyE1jzV2HdChkJyQH7dJAtE36577OEyWGlEb++Ul+H56tmGgySQ3jAxnOp6gRJRgz9y7OFrfthnVjOEjqQkWwLshlEXNlmZvQhH83gwbqZRedh07/KaTcz8ISxnsAD9p1NqdYVVeuSuZj2crc3f+rULcC8i07kWZuCQwRkJHDHV17O5jt1K4HDeRqcMp2Dw/xG5ss0t6dgXF3LzwWWNToRXEX8wNFmW5CQUnKUCu9sSVc+CetX4oN76DARGB608Tw9XiWYVQ6fy8V89gWjU6FcQT8Ocdt+Bogb062M6Pv6i83Xp9LoV6iRNPNdVA44xEchE2drhKNW+D3175H/PjACx8bZfUtM7qFywCE+CgE4RE7oyzqfdwKUoDCTGgnlCiqHUZh8T0hBFKlrXCh4LXoozFAjoVzZEPCgZgqmDv+FHXPYSJ/7iXjy08YCmnpRDaIwk0BbK8nEv3eS1sB3Dhqxw8xX52/+9agNGD9QDaIwE3+v2wIvS8wEZzLzQToVb+3llqmbxAnVoMO8bAvc7BTJoNfmvlzfMThdwBiwBY4d0mR7SHH3YwOKNhIYAzbAt01e0PqzpVsb29BrpCcwJgwD3mJLXIqlnI8MoGmPBR4GvOVb1tejbpB9gU8DbtjK9jlyXfWhYRluBwI+KTjYop6RnPB51IUN+gYGHhQcJQ8iWdiW40n9Ad6LkhMBQ0G/gEOqBVtpH83feBhUN1aA+4HjpogrrkDPrL4y9VwUKPpOzNgoOo75mNxKIJ72L5r5ne2pgaGoF/jZM/UAhzWPBrgXeNLVwf8kUuQtFPOZ88EqOr6GYmx0dTNPUDreMLdcjCNZWwGOYr7fvL5oivaz7HG7gv86PK2/k+00azS7MVpavLMd1O+mzxpjozBsdtMn/4V1mds6MMC6wH3dBWzd1IYl2rDZY278ydztjTUzPhLGRnmYue/V2liPFBgLMOByfblgFvS/tr/np57Gv4cG9D+1z1hiqSaykwAAAABJRU5ErkJggg==",
        heart_right: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAwCAYAAABwrHhvAAAAAXNSR0IArs4c6QAABX9JREFUWAm9WHtoW1UY/52b3KZd0jVNm3Qb9TmbCi0+UIYOcepExE2GtPEFIlTFxxgoCo4Js+BABMU/nEOKKMj+GLYwpxvsjyG1osJkIgjSpg7cw25t2m5r06Zpcu/x++7tvc1NlrZpbvpBcs655/H7fY9zznevQIky2BG5Qwi5E1I+TFObIbAREFVUvyyBSwpwWkI5Hg01D4ieM5nllhfLDbD6h2KRpyD1D6REm/VsyVJgElA+8ouqz27ovZgqNnZZAmefD7dk5+VhAt7Ci3g9EgGfhkC1BtUr4VUkyCLIagJZXWBmzoOZtAdzGbKFIeKSR1Fea+kd/X7hgaNYksBwZ+QxDfoRSNQzcGMggzp/1rFAscYskRifVpGaV8hLkEKI/dG+xIH88UUJDHeEu3Qhe0hzTy1pu7E+TZrmT89rq9WArxZIJuyOK0kVCSJC61Co4Ivb+8Zftzup4sltWHUDHPJLmqM01mbQFJxfHpwndx0Gnj0IBDcB5/4A5mdQU6Ubv+Scl0ncu6fdP3Hw79nTFpblKKuNoY7wi7oJLiLrM2ggAiuWoR8BXQO2dgFv9wMNNxtT11HMbAimjbrU5afDscj9RoP+CgiQ1vvoJ8IEXk8+L0l+7gEO3AWc/QUI3QjsPk5R6zOWqK3R0GCu59Wk/Nha10Hgn1j4NoqXqIciO+QvEdxacfIccGgXcOFPoPEWYNsbVo9hTd415Iut8c7GndzhIKADO/ihv5pqywUcDywmGdr2x94zex94xR7FQWy5VIfYwx0OAhQkBgHe52VLvB+YGiXEm4DwZnu59eQKJkJHx7axWDhgE7j8QpOf9vuDrLjfDQIM+dcJEzgQNkv6V8gFvDMkpG9SKtu9Vs/VFB4l5/i4kwe5Ikf3Ar99DZynLZkj1aqG2TTrLlttCwhI98xvgdE5kA/OXUYgUknW3mATkFIae9M17S0Sj7wJbH/LahmlZxG1wa4qivIh9/L5rdGl4ppwxEnaVTmiLXiYeiYdSHQKnqDgeILP/k0h8+TKmedadXxKxQTdEbQd9toW4NW9isoXxfQ0XalJ+lVKUgtXNd2QcQeBzb0j54Ui9jHw6LUq6G66YkEbXQqk6KqmCMyEautPOQjwmGjb7kNkml85wUiQqdyWqZSHzgBjBwyEvxqaLiAgurt1xeN9WUCkr816TbYuseCcYIKC3BChfM5lAQF+2HJkZFAK+S8znSdLuCWTFHhsWVrx99besaO8rn0S5oIMx5ooAUWrSmlYXc3KUrDc+derc67I2tOu1CjO3rHGFFiADiRBv/08IMTJiAsGSFNeOHKlyvA9Gf3d6LeJgaIE4s807aKz4E6V7oO6deVrz+AXJnzg6Kdt901r39gnFjiXBRagkbb25SpvgWsETuh90fa2l3LBCwgMP930JJn/bk7BV5p+5y9otfPBW9vbnhPd/QUmdVhA07X3eYEGSsfK0X6l4IxlE4jHGndQlNxTrvalgDsI0CFh+p61X6X6pYLbBAZj4ceJwBZOFIIrfPXiybmyGnCeb7hA6DB8HwpkV6X9asENAvwCSvv+PlP70t8FygE3COgLp179KrQvF9x0gZBBrlSrzrSJny0lboDz+god/d9xpZQMyC1wg4AKb0kE3AQ3CNzaN3KGtv3FDN3TafuzCncVitvgjKDQDcUfeY5xg5PRYlIJcMYyzwFFMd1A+dr1pFLgNoGWYPNP5Iar6awCdkWuVBLcJsAfFOnKNl5lk6nFLK3S4DYBrniEczuuBbiDQB1wklNx/q7HHxo5jbIymWLJBC9Qrtj5QKQ3kaQs5BSn4v+tETiTtwmYmkhjNzAJzuEqqbmJl0dAVZUfKBmh70drA26RcJTxzsirsvuhxa3g6HW/8T+/cXpOeVWDigAAAABJRU5ErkJggg==",
        block: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAOCAYAAAAWo42rAAAAAXNSR0IArs4c6QAAAWpJREFUKBVlkL9OAkEQxmeW5fgjChH/EAsjYuABLCi18gEkWJlopZXvYGdlYWJlqZGI8ASWNvbGRAOJ2hhz4WJEBURub5xdOYPyFZfdb3/zzcwhDKheTE2S5xVIUEIAXS2cNy4RkTSCPldbmyp4io4BKOp7gHiRiIjV1IndEtq8K06nSdGphkbDCpKxHsgABxGtvHbUvmYMCKTWCSgUj7owM96FibEezCY/TTsE3HjYnAsbkC95XRXjNF9BSRDgVCIKU7cdNyARZDVg6XZ9tbsBcBVHINppd8kRtLsseZi03ioY9AzWbEl4egn5NQdYqSh5f3szz440wzP33LTgrcO1LM47zFUbe/oslfppixz56ETgy+UD4odAsZ2t2CUNaUlCBnk0A7DBM11zejFTtmuG6H+Ev4i+c9aRFRvJZ8rOH0i/SU7TG79z661c1TkDcLQ/JMmt2tKCxUypUR96HTTqOwu//2HQ/3/+Bvh2fIyfHFHnAAAAAElFTkSuQmCC",
        block_two: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAOCAYAAAAbvf3sAAAAAXNSR0IArs4c6QAAAXBJREFUKBWFUr1KA0EQntnbhBMDEY0GBRshP7WCiK9gqShBC8FC8AEsrNLYWdn4BAmYnyew8wHExiL+gIqFJgFJxJiYuxtn53LhRCEDu/vt9813s7ezCKGo5eay0HfWCDzXIn2Rqr7ehGSBGBC1jeljIjoK9iwQAZxkq83DgDOrGG7XEzkPoKiYiI87orc6Gjx2KGVtp8tvRSF5MjngIe6bNTnxDTNxfyR5NUHk7gkYTGJAoqTZj0XdoRazfUyAy0OSgRiYlJ9rf+mhphSB5sElYo87idlAEIOy4JQJp/kRgXorCpwmEdE+6nd1ZkD5FdKlxqWFahcBe++fGp4bNt8uQlTzVXAQOulfBrNJVeoFpWmVTQ/dvoInY3LlAOZ+/xrEdN68UnZ8ERFLLiF0eiMMYirctzOVxhY34MAc0XDcrf8riDiYsuX6GSpY4ew7phb4FUiT/ZrhzBBOlxvXU/HJJa5Ufdmct0PSaEj5vHz8B/ZXd/2WUqBBAAAAAElFTkSuQmCC",
        star: C
    },
    I = x.memo(() => {
        const e = (2 * Math.random()).toFixed(1) + "s";
        return s.jsxs("div", {
            className: `${f} animation-lose`,
            children: [s.jsx("img", {
                className: "left",
                style: {
                    animationDelay: e
                },
                alt: "",
                src: g.heart_left
            }), s.jsx("img", {
                className: "block_one",
                style: {
                    animationDelay: e
                },
                alt: "",
                src: g.block_two
            }), s.jsx("img", {
                className: "block_two",
                style: {
                    animationDelay: e
                },
                alt: "",
                src: g.block
            }), s.jsx("img", {
                className: "right",
                style: {
                    animationDelay: e
                },
                alt: "",
                src: g.heart_right
            })]
        })
    }),
    f = "aelsxob",
    F = x.memo(({
        isWin: e,
        children: t,
        className: o,
        show: r,
        delay: n = !1
    }) => s.jsx("div", {
        className: p(D, "animation-card-wrap", o),
        children: s.jsx("div", {
            className: "animation-card " + (e ? "win" : "lose"),
            ref: null,
            children: e ? s.jsxs("div", {
                className: "win-ribbon",
                children: [s.jsx("img", {
                    alt: "",
                    src: n ? U : k,
                    className: n ? "delay" : ""
                }), t]
            }) : t
        })
    })),
    D = "a118k1b6",
    G = x.memo(function({
        betLog: e,
        gameUnique: t,
        fullName: o,
        gameType: r,
        open: n,
        name: v,
        chatroom: d = !1
    }) {
        const {
            t: m
        } = a.useTranslation(), N = a.useNavigate(), {
            currency: c
        } = a.useSystem(), l = e.odds >= 1e4, [j, h] = b.useState(!1), u = o || t;
        w.upperFirst(w.camelCase(t));
        const i = e.currencyName ? c[e.currencyName].aliasCurrencyName : "",
            A = new a.Decimal(e.winAmount).sub(e.betAmount).toNumber();
        return s.jsxs("div", {
            className: p(y, "game-share-base"),
            children: [s.jsxs("div", {
                className: "top-anim",
                children: [l ? s.jsx(E, {
                    show: !0
                }) : s.jsx(I, {}), s.jsxs("p", {
                    className: "win-lose-title",
                    children: [u, " ", m(l ? "Wow Moment" : "Damn Moment")]
                })]
            }), n ? s.jsxs("div", {
                className: "share-msg-info",
                onClick: () => {
                    if (j) return !1;
                    n && (h(!0), setTimeout(() => {
                        h(!1)
                    }, 2e3), N(`#/sd/${e.betId}`))
                },
                children: [s.jsxs(F, {
                    show: !d && l,
                    className: "",
                    isWin: l,
                    children: [s.jsx(a.BC.CoinFormat, {
                        sign: !0,
                        signStrs: ["+", "-"],
                        icon: !0,
                        className: p("number", "flex-center", A > 0 && "is-win"),
                        amount: A,
                        name: e.currencyName
                    }), s.jsx("span", {
                        className: "c-name",
                        children: i
                    }), s.jsx(a.Icon, {
                        name: "Arrow"
                    })]
                }), s.jsxs("div", {
                    className: "payout",
                    children: [s.jsx("p", {
                        className: "t",
                        children: m("Payout")
                    }), s.jsxs("p", {
                        className: "d",
                        children: [e.odds / 1e4, " x"]
                    })]
                })]
            }) : s.jsxs("div", {
                className: "share-info",
                children: [s.jsxs("div", {
                    className: "profits",
                    children: [s.jsx(a.BC.CoinFormat, {
                        sign: !0,
                        signStrs: ["+", "-"],
                        icon: !0,
                        className: p("number", "flex-center", A > 0 && "is-win"),
                        amount: A,
                        name: e.currencyName
                    }), s.jsx("span", {
                        className: "c-name",
                        children: i
                    })]
                }), s.jsxs("div", {
                    className: "payout",
                    children: [s.jsx("p", {
                        className: "t",
                        children: m("Payout")
                    }), s.jsxs("p", {
                        className: "d",
                        children: [e.odds / 1e4, " x"]
                    })]
                })]
            })]
        })
    }),
    y = "g12nbxwe",
    z = w.memoize(() => a.http.get("/agent/invitation/code/custom/")),
    Q = ({
        isWin: e,
        shareId: t,
        shortUrl: o,
        shareObj: r,
        onShare: n
    }) => {
        const v = e ? "Guess who just landed on a mega win 😆" : "I'm heartbroken and needs love 🥺",
            d = "https://www.facebook.com/sharer.php?u=",
            m = "https://twitter.com/share?url=";
        return a.useAsyncNode(async () => {
            const N = await z(),
                c = l => {
                    const j = `${location.protocol}//${a.env.host}/api/game/support/share-v3/info/${t}/`;
                    return o && o !== "" ? l + o : l + ((h, u) => {
                        const i = [],
                            A = `${location.protocol}//${a.env.host}/#/sd/${u}&bd=${r.betId}&gn=${r.gameUnique}&gd=${r.gameId}&ud=${r.userId}&un=${r.userName}&sg=${r.isSingle?"1":"0"}`;
                        return i.push(`title=${encodeURIComponent(a.env.host)}`), i.push(`description=${encodeURIComponent(v)}`), i.push(`image=${encodeURIComponent(h)}`), i.push(`url=${encodeURIComponent(A)}`), i.push(`site_name=${encodeURIComponent(a.env.host)}`), encodeURIComponent(`${location.protocol}//webapi.${a.env.host}/game/support/share/friend/?${i.join("&")}`)
                    })(j, N.invitationCode)
                };
            return s.jsxs("div", {
                className: R,
                children: [s.jsx("div", {
                    className: "share-item",
                    children: s.jsx("a", {
                        target: "_blank",
                        href: c(d),
                        rel: "noopener noreferrer",
                        onClick: () => {
                            n && n("facebook", c(d))
                        },
                        children: s.jsx("img", {
                            alt: "",
                            src: a.app.assets("/share/share_3.png")
                        })
                    })
                }), s.jsx("div", {
                    className: "share-item",
                    children: s.jsx("a", {
                        target: "_blank",
                        href: c(m),
                        rel: "noopener noreferrer",
                        onClick: () => {
                            n && n("twitter", c(m))
                        },
                        children: s.jsx("img", {
                            alt: "",
                            src: a.app.assets("/share/share_8.png")
                        })
                    })
                }), s.jsx("div", {
                    className: "share-item",
                    children: s.jsx("img", {
                        alt: "",
                        src: a.app.assets("/share/share_10.png")
                    })
                }), s.jsx("div", {
                    className: "share-item",
                    children: s.jsx("img", {
                        alt: "",
                        src: a.app.assets("/share/share_7.png")
                    })
                }), s.jsx("div", {
                    className: "share-item",
                    children: s.jsx("img", {
                        alt: "",
                        src: a.app.assets("/share/share_11.png")
                    })
                }), s.jsx("div", {
                    className: "share-item",
                    children: s.jsx("img", {
                        alt: "",
                        src: a.app.assets("/share/share_12.png")
                    })
                }), s.jsx("div", {
                    className: "share-item",
                    children: s.jsx("img", {
                        alt: "",
                        src: a.app.assets("/share/share_6.png")
                    })
                })]
            })
        }, [])
    },
    R = "s1n1gbgu";
export {
    E as A, G, Q as S, I as a
};