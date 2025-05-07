var C = Object.defineProperty;
var j = Object.getOwnPropertySymbols;
var T = Object.prototype.hasOwnProperty,
    S = Object.prototype.propertyIsEnumerable;
var g = (n, c, s) => c in n ? C(n, c, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: s
    }) : n[c] = s,
    f = (n, c) => {
        for (var s in c || (c = {})) T.call(c, s) && g(n, s, c[s]);
        if (j)
            for (var s of j(c)) S.call(c, s) && g(n, s, c[s]);
        return n
    };
import {
    _ as i,
    a as e,
    r as h
} from "./vendor-8c02be2a.js";
import {
    w as y
} from "./CommonI18nProvider-b34bf9d5.js";
import {
    b as p,
    a as b,
    c as v
} from "./context-07d48342.js";
import {
    A as k
} from "./GameAutoTips-8fe2ab8a.js";
import {
    c as x
} from "./index-66d88a57.js";
import {
    q as w
} from "./AllPlayers-fab6a982.js";
const I = "sbxzzv8",
    A = y(() => {
        const {
            t: n
        } = i.useTranslation(), c = "config", s = "main", r = "text", l = "number", t = "radio", o = "options";
        return e.jsx(i.Dialog, {
            title: n("Help"),
            children: e.jsx(w, {
                children: e.jsxs("div", {
                    className: x(I, "item"),
                    children: [e.jsx("h2", {
                        children: n("Game Scripts")
                    }), e.jsxs("div", {
                        className: "help-content",
                        children: [e.jsx("p", {
                            children: e.jsxs(i.Trans, {
                                i18nKey: "game.script.intro.desc1",
                                config: c,
                                main: s,
                                children: ["Any script must have a", e.jsx("code", {
                                    children: {
                                        config: c
                                    }
                                }), "UI configuration and a", e.jsx("code", {
                                    children: {
                                        main: s
                                    }
                                }), "function to run."]
                            })
                        }), e.jsx(i.CodeSegment, {
                            children: `var config = {}
function main () {}`
                        })]
                    }), e.jsx("h2", {
                        children: n("The UI Configuration")
                    }), e.jsxs("div", {
                        className: "help-content",
                        children: [e.jsx("p", {
                            children: n("The key feature of the scripting system is that the script developer can customize the user input interface, allowing the script to read user-defined variables and make the script run according to different user configurations.")
                        }), e.jsx("p", {
                            children: n("At the top of each script, you must define the UI configuration")
                        }), e.jsx("p", {
                            children: e.jsxs(i.Trans, {
                                i18nKey: "game.script.intro.desc2",
                                text: r,
                                children: ["Defines a normal", e.jsx("code", {
                                    children: {
                                        text: r
                                    }
                                }), "input control that prints the user's input at run time"]
                            })
                        }), e.jsx(i.CodeSegment, {
                            children: `var config = {
  name: { value: 'jack', type: 'text', label: 'Name' }
}

function main () {
  log.info(config.name.value)
}`
                        }), e.jsx("p", {
                            children: e.jsxs(i.Trans, {
                                i18nKey: "game.script.intro.desc3",
                                number: l,
                                children: ["Define a", e.jsx("code", {
                                    children: {
                                        number: l
                                    }
                                }), "input control and print the user's input at run time"]
                            })
                        }), e.jsx(i.CodeSegment, {
                            children: `var config = {
  bet: { value: 'wager', type: 'number', label: 'Wager' }
}

function main () {
  log.info(config.bet.value)
}`
                        }), e.jsx("p", {
                            children: e.jsxs(i.Trans, {
                                i18nKey: "game.script.intro.desc4",
                                radio: t,
                                children: ["Defines a", e.jsx("code", {
                                    children: {
                                        radio: t
                                    }
                                }), "radio control to print user input while running"]
                            })
                        }), e.jsx(i.CodeSegment, {
                            children: `var config = {
  colors: {
    value: 'red', type: 'radio', label: 'Chose color',
    options: [
      { value: 'red', label: 'Red' },
      { value: 'blue', label: 'Blue' }
    ]
  }
}

function main () {
  log.info(config.colors.value)
}`
                        }), e.jsx("p", {
                            children: e.jsxs(i.Trans, {
                                i18nKey: "game.script.intro.desc5",
                                config: c,
                                children: ["The script system parses the", e.jsx("code", {
                                    children: {
                                        config: c
                                    }
                                }), "configuration into the corresponding form interface. Users can provide input, and your script can access these variables at run time."]
                            })
                        }), e.jsx("p", {
                            children: n("The UI Configuration")
                        }), e.jsxs("ul", {
                            children: [e.jsxs("li", {
                                children: [e.jsx("code", {
                                    children: "label"
                                }), ": ", n("The field name")]
                            }), e.jsxs("li", {
                                children: [e.jsx("code", {
                                    children: "value"
                                }), ": ", n("Default")]
                            }), e.jsxs("li", {
                                children: [e.jsx("code", {
                                    children: "type"
                                }), ": ", n("Type"), ", ", e.jsx("code", {
                                    children: "text"
                                }), ",", " ", e.jsx("code", {
                                    children: "number"
                                }), ", ", e.jsx("code", {
                                    children: "radio"
                                }), ", ", e.jsx("code", {
                                    children: "title"
                                })]
                            }), e.jsxs("li", {
                                children: [e.jsx("div", {
                                    children: e.jsxs(i.Trans, {
                                        i18nKey: "game.script.intro.desc9",
                                        options: o,
                                        radio: t,
                                        children: [e.jsx("code", {
                                            children: {
                                                options: o
                                            }
                                        }), ": Option value, only", e.jsx("code", {
                                            children: {
                                                radio: t
                                            }
                                        }), ": Type can be set"]
                                    })
                                }), e.jsxs("ul", {
                                    children: [e.jsxs("li", {
                                        children: [e.jsx("code", {
                                            children: "label"
                                        }), ": ", n("Option of")]
                                    }), e.jsxs("li", {
                                        children: [e.jsx("code", {
                                            children: "value"
                                        }), ": ", n("The option value")]
                                    })]
                                })]
                            })]
                        })]
                    }), e.jsx("h2", {
                        children: n("Interacting with games")
                    }), e.jsxs("div", {
                        className: "help-cont",
                        children: [e.jsx("p", {
                            children: e.jsxs(i.Trans, {
                                i18nKey: "game.script.intro.desc12",
                                main: s,
                                children: ["All of your program logic should be implemented inside the", e.jsx("code", {
                                    children: {
                                        main: s
                                    }
                                }), "function, which runs after the user clicks on Run Script, providing you with objects that you can use to interact with the game"]
                            })
                        }), e.jsx("h3", {
                            children: "API"
                        }), e.jsx(i.CodeSegment, {
                            children: `var config = {}

function main () {
  game.onBet = function () {
    log.info('a game is starting')
  }
}`
                        }), e.jsx("p", {
                            children: "Events:"
                        }), e.jsxs("ul", {
                            children: [e.jsxs("li", {
                                children: [e.jsx("code", {
                                    children: "GAME_STARTING"
                                }), " ", n("The game is ready to start, you can only guess at this time")]
                            }), e.jsxs("li", {
                                children: [e.jsx("code", {
                                    children: "GAME_ENDED"
                                }), " ", n("Game over")]
                            })]
                        }), e.jsx("p", {
                            children: n("Methods:")
                        }), e.jsxs("ul", {
                            children: [e.jsxs("li", {
                                children: [e.jsx("code", {
                                    children: "game.bet(wager: number, payout?: number): Promise<number>"
                                }), ": ", n("Return payout"), " "]
                            }), e.jsxs("li", {
                                children: [e.jsx("code", {
                                    children: "game.stop()"
                                }), ": ", n("Stop the script run")]
                            })]
                        }), e.jsx("h3", {
                            children: n("Logging API")
                        }), e.jsx(i.CodeSegment, {
                            children: "log.info('hello world!')"
                        }), e.jsx("p", {
                            children: n("Methods:")
                        }), e.jsxs("ul", {
                            children: [e.jsxs("li", {
                                children: [e.jsx("code", {
                                    children: "log.info()"
                                }), ": ", n("Keep a general journal")]
                            }), e.jsxs("li", {
                                children: [e.jsx("code", {
                                    children: "log.error()"
                                }), ": ", n("Error log")]
                            }), e.jsxs("li", {
                                children: [e.jsx("code", {
                                    children: "log.success()"
                                }), ": ", n("Record a success log")]
                            })]
                        }), e.jsx("h3", {
                            children: n("Currency information API")
                        }), e.jsx("p", {
                            children: n("The currency cannot be changed once the script starts running, and the script must be stopped for the change")
                        }), e.jsx(i.CodeSegment, {
                            children: "log.info('currency is '+currency.amount+currency.currencyName)"
                        }), e.jsx("p", {
                            children: n("Property:")
                        }), e.jsxs("ul", {
                            children: [e.jsxs("li", {
                                children: [e.jsx("code", {
                                    children: "currencyName"
                                }), ": ", n("Current currency name")]
                            }), e.jsxs("li", {
                                children: [e.jsx("code", {
                                    children: "amount"
                                }), ": ", n("Current currency balance")]
                            }), e.jsxs("li", {
                                children: [e.jsx("code", {
                                    children: "maxAmount"
                                }), ":", " ", n("Maximum betting limit for current currency")]
                            }), e.jsxs("li", {
                                children: [e.jsx("code", {
                                    children: "minAmount"
                                }), ":", " ", n("Minimum bet limit for current currency")]
                            })]
                        })]
                    })]
                })
            })
        })
    }),
    R = y(function({
        className: n,
        children: c
    }) {
        const s = p(),
            {
                t: r
            } = i.useTranslation(),
            l = b();
        return e.jsxs("div", {
            className: x(G, "game-script", n),
            children: [c, s.script.script ? e.jsx(B, {}) : e.jsx(E, {}), e.jsx(k, {
                children: e.jsxs("span", {
                    className: "tip-help",
                    onClick: () => l(e.jsx(A, {})),
                    children: [r("Help"), "?"]
                })
            })]
        })
    });

function N() {
    return v().script
}
const m = ["Simple", "Martingale", "Payout Martingale"],
    E = function() {
        const n = p(),
            c = N(),
            {
                t: s
            } = i.useTranslation(),
            r = function() {
                const t = b();
                return h.useCallback(o => {
                    t(e.jsx(K, {
                        script: o
                    }))
                }, [])
            }();
        h.useEffect(() => {
            c.initScript()
        }, []);
        const l = n.script.scriptList.map(t => e.jsxs("div", {
            className: "script-item script-" + (m.includes(t.name) ? "system" : "user"),
            children: [e.jsx("div", {
                className: "script-name",
                children: t.name
            }), m.includes(t.name) ? e.jsx("button", {
                className: "script-view",
                onClick: () => r(t),
                children: e.jsx(i.Icon, {
                    name: "View"
                })
            }) : e.jsxs(e.Fragment, {
                children: [t.userId !== 0 && e.jsx("button", {
                    className: "script-del",
                    onClick: () => c.delScript(t),
                    children: e.jsx(i.Icon, {
                        name: "Delete"
                    })
                }), e.jsx("button", {
                    className: "script-edit",
                    onClick: () => r(t),
                    children: e.jsx(i.Icon, {
                        name: "Edit"
                    })
                })]
            }), e.jsx("button", {
                className: "script-run",
                onClick: () => c.regist(t),
                children: s("Run")
            })]
        }, t.id));
        return e.jsxs("div", {
            className: `${D} script-list`,
            children: [l, e.jsx(i.Button, {
                type: "conic2",
                className: "script-add",
                onClick: () => r(),
                children: s("Add a script")
            })]
        })
    },
    D = "sqzqjza",
    B = function() {
        const n = N(),
            {
                t: c
            } = i.useTranslation(),
            s = p(),
            r = i.usePop(),
            l = i.systemStore.getAlias(s.currencyName);
        let t = null;
        const o = s.script.config;
        return o && (t = Object.keys(o).map(a => {
            const d = o[a];
            if (d.type === "title") return e.jsx("div", {
                className: "line",
                children: d.label
            }, a);
            switch (d.type) {
                case "number":
                    return e.jsx(i.InputNumber, {
                        size: "small",
                        label: d.label,
                        value: d.value,
                        onChange: u => {
                            s.script.config[a].value = u
                        },
                        disabled: s.script.isRunning,
                        formatter: M
                    }, a);
                case "text":
                    return e.jsx(i.Input, {
                        size: "small",
                        label: d.label,
                        value: d.value,
                        onChange: u => {
                            s.script.config[a].value = u
                        },
                        disabled: s.script.isRunning
                    }, a);
                case "radio":
                    return e.jsx(i.InputWrap, {
                        size: "small",
                        label: d.label,
                        children: e.jsx("div", {
                            className: "input-control radio-control",
                            children: e.jsx(i.Radio, {
                                value: d.value,
                                options: d.options,
                                onChange: u => {
                                    s.script.config[a].value = u
                                },
                                disabled: s.script.isRunning
                            })
                        })
                    }, a);
                default:
                    return null
            }
        })), e.jsxs("div", {
            className: `${q} scripts-inputs`,
            children: [e.jsxs("div", {
                className: "currency",
                children: [e.jsx("span", {
                    children: "Currency"
                }), e.jsx("span", {
                    className: "currency-name",
                    children: l
                })]
            }), e.jsx(P, {}), t && e.jsx("div", {
                className: "forms",
                children: t
            }), e.jsxs("div", {
                className: "actions",
                children: [t && (s.script.isRunning ? e.jsx(i.Button, {
                    type: "conic2",
                    onClick: () => {
                        n.stop()
                    },
                    children: c("Stop")
                }) : e.jsx(i.Button, {
                    type: "conic2",
                    onClick: function() {
                        r.confirm(c("Please note that enabling computer sleep mode, shutdown and switching mobile phone to the background may affect normal functioning of the script.")).then(a => {
                            a && n.start()
                        })
                    },
                    children: c("Run Script")
                })), e.jsx(i.Button, {
                    type: "gray",
                    className: "action-close",
                    onClick: () => {
                        n.unRegist()
                    },
                    children: c("Close")
                })]
            })]
        })
    };

function M(n) {
    return n && n <= 1e-6 ? n.toFixed(8) : n.toString()
}
const P = function() {
        const {
            script: n
        } = p(), c = h.useRef(null), s = n.logs.map(r => e.jsx("div", {
            className: `type-${r.type}`,
            children: r.message
        }, r.id));
        return h.useEffect(() => {
            const r = c.current;
            if (r) {
                const {
                    clientHeight: l,
                    scrollTop: t,
                    scrollHeight: o
                } = r, a = o - l;
                a > 0 && a >= t && Math.abs(a - t) < 40 && r.scrollTo(0, o)
            }
        }), e.jsx("div", {
            className: "logs",
            ref: c,
            children: s
        })
    },
    z = {
        id: 0,
        name: "Script name",
        content: `
  var config = {
    bet: { label: 'bet', value: currency.minAmount * 1.2, type: 'number' },
    payout: { label: 'payout', value: 2, type: 'number' }
  }
  
  function main () {
    game.onBet = function () {
      game.bet(config.bet.value, config.payout.value).then(function(payout) {
        if (payout > 1) {
          log.success("We won, payout " + payout + "X!");
        } else {
          log.error("We lost, payout " + payout + "X!");
        }
      });
    }
  }
  `
    },
    K = n => {
        const {
            script: c = z
        } = n, {
            t: s
        } = i.useTranslation(), r = v(), [l, t] = i.useSetState(c), o = i.useDialog(), a = m.includes(c.name);
        return e.jsx(i.Dialog, {
            title: s("Preview the script"),
            children: e.jsxs(i.ScrollView, {
                className: x(U, a && "bc"),
                children: [e.jsx(i.Input, {
                    label: s("Script Name"),
                    value: l.name,
                    onChange: d => t({
                        name: d
                    })
                }), e.jsx(i.Textarea, {
                    className: "script-input",
                    label: s("Script Content"),
                    value: l.content,
                    onChange: d => t({
                        content: d
                    })
                }), !a && e.jsxs("div", {
                    className: "edit-btns",
                    children: [e.jsx(i.Button, {
                        type: "conic",
                        className: "edit-confirm",
                        onClick: () => r.script.updateScript(l).then(() => o.back()),
                        children: s("Save")
                    }), e.jsx(i.Button, {
                        type: "gray",
                        className: "edit-cancel",
                        onClick: () => o.back(),
                        children: s("Cancel")
                    })]
                })]
            })
        })
    },
    V = function(n, c = !1) {
        return function(s) {
            const r = i.useNavigate(),
                {
                    login: l
                } = i.useAccount();
            return h.useEffect(() => {
                c && !l && r("#/login")
            }, []), l ? e.jsx(n, f({}, s)) : e.jsx(i.Empty, {})
        }
    }(R, !0),
    G = "g1e2v7fs",
    U = "ehhfsck",
    q = "sqshipa";
export {
    V as G
};