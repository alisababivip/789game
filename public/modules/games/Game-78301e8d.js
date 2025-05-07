var et = Object.defineProperty;
var H = Object.getOwnPropertySymbols;
var it = Object.prototype.hasOwnProperty,
    st = Object.prototype.propertyIsEnumerable;
var N = (s, e, t) => e in s ? et(s, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : s[e] = t,
    F = (s, e) => {
        for (var t in e || (e = {})) it.call(e, t) && N(s, t, e[t]);
        if (H)
            for (var t of H(e)) st.call(e, t) && N(s, t, e[t]);
        return s
    };
var n = (s, e, t) => (N(s, typeof e != "symbol" ? e + "" : e, t), t);
import {
    _ as c,
    r as b,
    a,
    R as G,
    l as nt
} from "./vendor-8c02be2a.js";
import {
    s as R,
    K as at,
    q as lt,
    r as ot,
    t as rt,
    u as ht,
    v as At,
    x as pt,
    d as ct,
    w as ut,
    P as dt,
    y as mt,
    o as gt,
    $ as C,
    z as wt
} from "./AllPlayers-fab6a982.js";
import {
    c as V
} from "./index-66d88a57.js";
import {
    c as B,
    b as M
} from "./context-07d48342.js";
import "./Coin-19c44f04.js";
import {
    G as xt
} from "./GameCard-2d619a3b.js";
import {
    B as yt
} from "./index-0013978f.js";
import {
    _ as u
} from "./_bc_pixi_share-cf6e3cdf.js";
import {
    E as ft,
    u as bt
} from "./particle-emitter.es-0e52ccc1.js";
import {
    G as I
} from "./index-f3bd3ea1.js";
import {
    A as vt
} from "./GameAutoTips-8fe2ab8a.js";
import {
    g as Bt
} from "./namespace-3892e441.js";
import "./CommonI18nProvider-b34bf9d5.js";
import "./main-057d7723.js";
import "./GameDetail-cc0ac7d8.js";
import "./react_router-dom_share-62544329.js";
import "./Share-8d7f396d.js";
const J = {
        1: {
            8: [5.6, 2.1, 1.1, 1, .5, 1, 1.1, 2.1, 5.6],
            9: [5.6, 2, 1.6, 1, .7, .7, 1, 1.6, 2, 5.6],
            10: [8.9, 3, 1.4, 1.1, 1, .5, 1, 1.1, 1.4, 3, 8.9],
            11: [8.4, 3, 1.9, 1.3, 1, .7, .7, 1, 1.3, 1.9, 3, 8.4],
            12: [10, 3, 1.6, 1.4, 1.1, 1, .5, 1, 1.1, 1.4, 1.6, 3, 10],
            13: [8.1, 4, 3, 1.9, 1.2, .9, .7, .7, .9, 1.2, 1.9, 3, 4, 8.1],
            14: [7.1, 4, 1.9, 1.4, 1.3, 1.1, 1, .5, 1, 1.1, 1.3, 1.4, 1.9, 4, 7.1],
            15: [15, 8, 3, 2, 1.5, 1.1, 1, .7, .7, 1, 1.1, 1.5, 2, 3, 8, 15],
            16: [16, 9, 2, 1.4, 1.4, 1.2, 1.1, 1, .5, 1, 1.1, 1.2, 1.4, 1.4, 2, 9, 16]
        },
        2: {
            8: [13, 3, 1.3, .7, .4, .7, 1.3, 3, 13],
            9: [18, 4, 1.7, .9, .5, .5, .9, 1.7, 4, 18],
            10: [22, 5, 2, 1.4, .6, .4, .6, 1.4, 2, 5, 22],
            11: [24, 6, 3, 1.8, .7, .5, .5, .7, 1.8, 3, 6, 24],
            12: [33, 11, 4, 2, 1.1, .6, .3, .6, 1.1, 2, 4, 11, 33],
            13: [43, 13, 6, 3, 1.3, .7, .4, .4, .7, 1.3, 3, 6, 13, 43],
            14: [58, 15, 7, 4, 1.9, 1, .5, .2, .5, 1, 1.9, 4, 7, 15, 58],
            15: [88, 18, 11, 5, 3, 1.3, .5, .3, .3, .5, 1.3, 3, 5, 11, 18, 88],
            16: [110, 41, 10, 5, 3, 1.5, 1, .5, .3, .5, 1, 1.5, 3, 5, 10, 41, 110]
        },
        3: {
            8: [29, 4, 1.5, .3, .2, .3, 1.5, 4, 29],
            9: [43, 7, 2, .6, .2, .2, .6, 2, 7, 43],
            10: [76, 10, 3, .9, .3, .2, .3, .9, 3, 10, 76],
            11: [120, 14, 5.2, 1.4, .4, .2, .2, .4, 1.4, 5.2, 14, 120],
            12: [170, 24, 8.1, 2, .7, .2, .2, .2, .7, 2, 8.1, 24, 170],
            13: [260, 37, 11, 4, 1, .2, .2, .2, .2, 1, 4, 11, 37, 260],
            14: [420, 56, 18, 5, 1.9, .3, .2, .2, .2, .3, 1.9, 5, 18, 56, 420],
            15: [620, 83, 27, 8, 3, .5, .2, .2, .2, .2, .5, 3, 8, 27, 83, 620],
            16: [1e3, 130, 26, 9, 4, 2, .2, .2, .2, .2, .2, 2, 4, 9, 26, 130, 1e3]
        }
    },
    kt = {
        ball: "data:image/png;base64,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",
        pin: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAIKADAAQAAAABAAAAIAAAAACshmLzAAAEMElEQVRYCb1WzW8bRRSfmf2IU9fBLgpCpApB0NIPgdQAFRfUA4IoUg+gEAkh5S9AuXBAKkLiAOXGgT+AA4pUEIFC2kMk4NIEQZuKBgkaFWLaOk1Mojb2Ov7arNe7vJ/NOJN214mTmJF25+37+L23b+bNPM62MbLZ4gmPua9xxl/yGethvv9YzYzzNGdsyWf+tGD6d4lEdHYbcJtUyD58WFb+jarnf8SY/3S4lirhf2qCvx+Px75Wuc3owAAsq/xE1aucI8cvNjMOl/HLmjDeisc7b4Xr1CUPBJDN5k9RSr/xff/hrYybyTnnq7RkQ4lE7FJTPVX4n/MfyLmh8ndKUxAVCuKVZkE0MoC0e37l6m7/PCDYjCbM58OWQ0gDrHkbnAP+QLGU/3Z0dLRD+lJnDR/Y7eT8HVWwl7Su6492d3evLS//80cymVxXsWsZqJeayt57+tDhI28bhnF4cHCwS0XX0mnrOV1n76nMdtCapsV1rWP6xo256sDAQGZmZqYKP8L17KF2OAzCPHr86MvE1xYWFp6UclEq26fkR7tnw4z0w4fnedHh4eEDoEUuVzgI4v8YxdL6I9KP4zg9oEW5VO621x3Jb9sMH47tJKQDykJkZGQkWquCleV7kt+2ueaD+3SZbgzbtuOCjspVK7fGSiV7Q7LHFLDhg/ksp0JTADHBNHYXzNRCmrlurTJUnV3TwAQ2hudXLRWQ7gpT6Lp2GUzaFKS4RL3Gpiyp+i3TwAImsDEcZ/13FUQIYQiDa19KZqFQYjdv3dmTTODPgQVMORZTt7+XtJzFyZPPTmlCW5QMGMwnU7vaE1hzYKjOCX/l4sXzv0k/mKkSKrUq2Bft/FAVIGXzydsslUqzVkoUurCBrUy7xM1m7n4maTnTEjmNfuDST79er7ruMSlU50hnhD3UFWP7o51MN3Rm0oPhVFzm0lMollluLc/scnAlecy/+eknZ99UMUFHIpF0HYk+Yvu6hteK1i9e1dt0W0ERwHhW8NHi4EIUZq/8fCbIjAKwGg1Jf/+huWg0NkKl4QYp75BXXVxMfTA19eMDzSlVgD02NlZsBAAHL/QfubA/1jXEBc/v0GHDDH++lL7z7ldffD7dYCqEaZpL+GzsAUXGrl2bP5bJ3bsguGhcm6p8KxprPnv1ypmgP4ct/X1xYmJirkYHgWE5Js6fO25Zq2dJ3srSr9Bu/xgbLsw54VV7e3v/ln4DMyCFaJ/QRp0+/fqJg4/3vWqaHc8IrsUpcfRg+BaOV5xwOGTur/O6zsab9pdfqVT+mpycpIuhPpoGABUEQU3lU0RqdZMdv6nK3aTqHEibNmEQNAz6+vquY92C5NvhwRYY9zuH7ZYZUB2gjaITrgfNhMoPo1Fq2O3j4+OZMJ2WApAg6GTQTOA+r12pdKtBhrMdxysdMHkcMqhzaRM2/ws+euQiV9UBPAAAAABJRU5ErkJggg==",
        pin_active: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABECAYAAAA4E5OyAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAARKADAAQAAAABAAAARAAAAADA2cO/AAADm0lEQVR4Ae2ci1bbMAyGaWEwBoy9/1Nyv3RA93+OnMR16Jw0TdPEOkfHrnEu+iIrMrW7OBlI1uv1mS51Lj2VUkcX0qWVKk7W0i8rP1Sin9LVYrGgvnfhhvYiAsC5f0ovTDF8FwHUu+mbAAGvd+kdiED80F3+kl5Kez+/EQDGq/RFYP5aWy9FbzcsEAyHaykeMaTgNU8Cs+rjojsDsdjwWzczNIhN+wHzsGus6QzEYgQegY5JnnQzeEynGNMJiHnFH12YeDFGIa7cdfGW1kAEg2B5K2197MDk8JB7QSH4JksrowSD4XGTfPZxdHwUFIZRkiQDEQwC51XSWcfX6VlQHlJuKwnIkcPwHJKg/Dd7tGFyrJ7hYVBemS31tqi+FYhOQAA9tpgRGVlruDGbak1h9VsgOpDJF2+Tqcmt2dZoVyMQHUBsIc9IijGNZx5vo7PNbIzushGIevF6HWvSFRnRoQHbGjPsCIi5U2PnDhce8yHXTUMnAiILyDfmIpGtARARYwp/6FnrkA/jwmwurxkAUeschkppvFUCm0sgIkWgmZN3eDB4SfkCKYHor/zbb65S2u6AiBDvZrLSucqlMXBfAQCB/45PMQlLfcDYDoMSyBxjxyYsx8DHkAzEXihLjR0mcR7MJrU5fXYsAEEylqUgcA4QvmvNUhA4BQhDJktB4CwDCV3BAZlz/hHiUC6Gh6BZCgJLYGQPqdzBeUj1MdfccOn0LflE2a0ZMixVylIQ+AJI9pDKHZyHDLK6r7rmqGsfeEgGUj0jB4R1oFkKAp94SC+r9yZCdLW0dVj5TaO3LSzwEIQljXMXxyADqdwgAPKm9jnnI9gOg2Kmq7FDQ6vlixw8IXk1BsHU/2VCBrY1pbTdx5ATEWL17xyD67vZ7iCWQAxp8gLXto9gxP0DmwMgIkWSNicvwTuCxDQAYk8xacXviJ94m1uLbI2AiBiTvcCN2lzhiPqyhSSa2EZAzCCA9Lp1a2SgsK3xoTcCETnykjvpFJM1Z5vZGD2nRiD0Mne6j444/gb20ERDxZv1LRA66ECy10ffeQIle2e2ZuRbgQBAJ2CsPU8ABttDGuNG3bbkL6m0jiRvIKqToy4orOk8tu0i+9li5uEISt6E6GH40pZh5W2qHgiloBB/GELB0mj+dmAhcA67kblusHkLAffQKxmZlB5uq3sdCnWByT+GsAnFwLCQPv9cxiYcizH5B1U2wfjPFmsYVqP+yZ1/ZMEFg095HGwAAAAASUVORK5CYII=",
        target: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGwAAABWCAYAAAAqh3MGAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAbKADAAQAAAABAAAAVgAAAAASSno5AAAD3ElEQVR4Ae2dMWgTcRjFkyMWahGsRHC01oCQQRA7q+ikk4vgahfRRfeCCB3dXJy6SREnJxdxELcUQaSKtFFUqB0iGAerJTa+L+RKKBRKee9y174/PO96Sb/3z+9n0mRKudRf3W63jtMZZAqZ7F/eyeEn7vQJ+Yx8QN4gC+Vy+RuO+3aB53E8+DP9nMJxAjmBHEZ2upq4YwOZBc/FzV/C8GnkD8JcTQx7hFxBDmyW7dETPMYx5Boyh3xFmCvcTPfQ4aSOsGVt3ewPXHiInNxrvvCYziNPkN+IcoWjegn/zCtbtsz+h5+fIeeKLA77j2fTTeQdkuWaD2HLWTYOdL3G+cUiicN+x5F7SLxiDGMtl6N1yNBeof8+/qi+HPI+tq0HomO48Q5yCzm07R0zuCEPwtKHGe8uHyBPIa+TXhzmEaJOo/8uch0ZGeZe0u48CUv39AUnc8hjiIu3tZkuSBpD4VXkBnIh0/IdlOVR2OC23+KH58gLpAGBvwZvZJxDUBlzakjIuYxcQg4iuVx5FzYILf7WfkTeI8v9fMex1U8bx/WBxP3j818kXs6OIFXkKDKBxEeM+EB7FhlHCrGKJKwQQNWbTNQFns8lYGFcnvJpFiZHzC2wMC5P+TQLkyPmFlgYl6d8moXJEXMLLIzLUz7NwuSIuQUWxuUpn2ZhcsTcAgvj8pRPszA5Ym6BhXF5yqdZmBwxt8DCuDzl0yxMjphbYGFcnvJpFiZHzC2wMC5P+TQLkyPmFlgYl6d8moXJEXMLLIzLUz7NwuSIuQUWxuUpn2ZhcsTcAgvj8pRPszA5Ym6BhXF5yqdZmBwxt8DCuDzl0yxMjphbYGFcnvJpFiZHzC2wMC5P+TQLkyPmFlgYl6d8moXJEXMLLIzLUz7NwuSIuQUWxuUpn2ZhcsTcAgvj8pRPszA5Ym6BhXF5yqdZmBwxt8DCuDzl0yxMjphbYGFcnvJpFiZHzC2wMC5P+TQLkyPmFlgYl6d8moXJEXMLLIzLUz7NwuSIuQUWxuUpn2ZhcsTcAgvj8pRPszA5Ym6BhXF5yqdZmBwxt8DCuDzl05L19fhSO68iEAhXydraWhH26j2CQLhKWq1WaWNjw0ByTiAchaveS+Lq6qql5VhYyApH8ZJYiX222+3e061arZZGR0dLIyO5+I7pHCPMZmshKF4G45mVvtfoCYv6uLCyspLNTtyyawLxtj7zbyPf9W79i80E3z7eMIdiEAhXSaVSmcXJ32Jsef/uMhyFq6RWqy3ih9uWlt//DOEmHPVcpdtcWlqqdzqdmW63O4Vrk+l1H4dKoAlRjXhmhazYyX8QRTeeNsTsQAAAAABJRU5ErkJggg==",
        tooltip: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAjAAAACQAgMAAABrHLk7AAAADFBMVEX29vv4+Pz19vr////es2V1AAAAAnRSTlPjSQzAlCMAAACzSURBVHja7dyxDQIxEADBr4dS6JIMfUIJ9EMRGJFa2gQnFpot4DSXn+64ntt0Oy7nNt2Pc6NgYGBgpmAqmAqmgqlgKpgKpoKpYCqYCqaCqWAqmAqmgqlgKpgKpoKpYCqYqFrHPMfvvb8DHmOhCTNWWt1mvGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBg1jEb3+ltEQwMDMwUTAVT/Tlmq0dtO72w+wDHWdlMn0XQBgAAAABJRU5ErkJggg==",
        arrow: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAeAgMAAAAN9pXcAAAADFBMVEUAAAD////29/v19voM4nzmAAAAA3RSTlMACr4sQLLfAAAAbklEQVQY023MoRGAMBQE0cNQAY5m0g6KVqgImkkTGECs2PwZzp3Yl/Ud1zOXf2S6hvu0ZB/+nRSgJ5lLHgBzAHMAcwDzAJgDmAOYA5gDmAOQC5ALkAuQC5ALkAuQC5ALkAuQC5ALnC1lW+qW/O8D/gHKSpbPJZcAAAAASUVORK5CYII=",
        star: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAFaADAAQAAAABAAAAFQAAAAAIGxIOAAAB9ElEQVQ4Ea2VT2vUUBTF733mdVRQCiZiM6MiFKq4KLRQN7rwC0jdiDtduhF3bhWX7twJfhiRrkQdcFdBXNhJEGeE0kXrZF5zvDc04XUyzGSkb3P/5HdO7ryXZIgaLpeEDxuizTDXix5kvRAamylmUMByK0uiH2qqUesZEjKzAJfuPSXgWsFJLOoZIp52Hb32BUfD7yBaLDkR7AbUWuZO8qfsjcepkx5y9sI3VLHW2h838uvapEjjsy53qzD5Lc7ptZhYX6C5iEYw9Jxz8zEwwVeO032f4SwN1wW7TTnWhV4TwXWATvnQtJyZDuXG2/ITumT4iyVscZaEn6Uhxie0mLvG0sJ9mfDniViKjyW7WewpknjF0WgLQPS/5szcD8je4Xb6rToopOGaA72X/Tw/r7Hs617AdJfjQVe11SNVNAzdY+K/85gWvOqODI+ZamGXBh/kNq/mMVW+0HmiatKqBz5d5U2SCXzNFIyrTbxKBoQrZV7GminndaiEJ0VGfYiaKYhrk8rp5vKYfNI4bjyJP2YKvDRM6JRCOdkhsXkXgG7YzmBDo9ZF/whSXnWlRmP1nGqB/uV4NDxIpLlLzG8DS2/4Yv+XXvMXfkeX3IieyXf2ibz3i7Z1ps3RTuozVa5fdfnLeIT+yrmqOSVRTvjHwM0FH/sHXD22t71XYMgAAAAASUVORK5CYII="
    },
    k = {},
    K = "game-plinko-resourceUrls";
yt(0, .9, 1, 1);
const $ = (E = 16760833, Q = 16000088, s => {
    let e = [E >> 16, E >> 8 & 255, 255 & E],
        t = [Q >> 16, Q >> 8 & 255, 255 & Q],
        i = [t[0] - e[0], t[1] - e[1], t[2] - e[2]];
    return E + (s * i[0] << 16) + (s * i[1] << 8) + i[2]
});
var E, Q;
class S extends u.Container {
    constructor(t, i, l) {
        super();
        n(this, "sprite", null);
        n(this, "activeSprite", null);
        n(this, "pinTime", 0);
        this.x = t, this.y = i, this.scale.x = this.scale.y = l, this.drawActive(), this.drawSprite()
    }
    drawSprite() {
        this.sprite = new u.Sprite(k.pin), this.sprite.anchor.x = this.sprite.anchor.y = .5, this.sprite.pivot.x = -1.5, this.sprite.pivot.y = -2, this.addChild(this.sprite)
    }
    drawActive() {
        this.activeSprite = new u.Sprite(k.pin_active), this.activeSprite.anchor.x = this.activeSprite.anchor.y = .5, this.activeSprite.visible = !1, this.activeSprite.pivot.y = -1, this.addChild(this.activeSprite)
    }
    update() {
        if (this.pinTime <= 0) return;
        let t = this.pinTime - .0166;
        if (t <= 0) t = 0, this.activeSprite.visible = !1;
        else {
            this.activeSprite.visible = !0;
            let i = 1 - t / .3;
            this.activeSprite.scale.x = this.activeSprite.scale.y = .8 + .5 * i, this.activeSprite.alpha = 1 - i
        }
        this.pinTime = t
    }
    pin() {
        this.pinTime = .3
    }
}
n(S, "size", 20);
const Ct = {
    alpha: {
        start: 1,
        end: .5
    },
    scale: {
        start: 1,
        end: .001,
        minimumScaleMultiplier: .5
    },
    color: {
        start: "#ffffff",
        end: "#ffffff"
    },
    speed: {
        start: 20,
        end: 0,
        minimumSpeedMultiplier: 4
    },
    acceleration: {
        x: 0,
        y: -100
    },
    maxSpeed: 0,
    startRotation: {
        min: 0,
        max: 360
    },
    noRotation: !1,
    rotationSpeed: {
        min: 40,
        max: 400
    },
    lifetime: {
        min: .5,
        max: .5
    },
    blendMode: "normal",
    frequency: .01,
    emitterLifetime: .5,
    maxParticles: 10,
    pos: {
        x: 0,
        y: 0
    },
    addAtBack: !1,
    spawnType: "ring",
    spawnCircle: {
        x: 0,
        y: 0,
        r: 10,
        minR: 10
    }
};
class Dt extends u.Container {
    constructor() {
        super();
        n(this, "particles");
        this.particles = new ft(this, bt(Ct, [k.star])), this.particles.emit = !1, this.particles.autoUpdate = !0
    }
    destroy() {
        this.particles.destroy()
    }
}
class z extends u.Container {
    constructor(t, i, l, o) {
        super();
        n(this, "container");
        n(this, "sprite", null);
        n(this, "text", null);
        n(this, "payout");
        n(this, "chance");
        n(this, "table");
        n(this, "zoom");
        n(this, "particles", null);
        n(this, "hitTime", 0);
        n(this, "textStyle");
        this.payout = t, this.chance = i, this.zoom = l, this.table = o, this.interactive = !0, this.textStyle = new u.TextStyle({
            fontSize: Math.min(110, 60 * o.app.rows / 8),
            fill: 16777215,
            fontWeight: "600",
            fontFamily: "BrutalType"
        }), this.container = new u.Container, this.addChild(this.container), this.drawSprite(), this.drawText(), this.drawParticles()
    }
    drawSprite() {
        this.sprite = new u.Sprite(k.target), this.sprite.anchor.x = this.sprite.anchor.y = .5, this.sprite.scale.x = this.sprite.scale.y = this.zoom, this.container.addChild(this.sprite)
    }
    drawText() {
        let t;
        t = this.payout < 10 ? this.payout.toFixed(1) + "×" : this.payout > 100 ? this.payout.toString() : this.payout + "×", this.text = new u.Text(t, this.textStyle), this.text.anchor.x = this.text.anchor.y = .5, this.text.scale.x = this.text.scale.y = .5 * this.zoom, this.container.addChild(this.text)
    }
    drawParticles() {
        this.particles = new Dt, this.addChild(this.particles)
    }
    update() {
        if (this.hitTime <= 0) return;
        this.hitTime -= .0166, this.hitTime < 0 && (this.hitTime = 0);
        let t = 1 - this.hitTime / .2;
        this.container.y = t < .65 ? 30 * t : 30 * (1 - t)
    }
    hit() {
        this.hitTime = .2, this.payout >= 1 ? this.table.playSound("sound_win_mp3") : this.table.playSound("sound_lose_mp3"), this.particles.particles.emit = !0
    }
}
n(z, "width", 109);
const y = class y extends u.Container {
    constructor() {
        super();
        n(this, "sprite", null);
        n(this, "path", []);
        n(this, "state", 0);
        n(this, "table", null);
        n(this, "appearing", 0);
        n(this, "collisionRadius", 0);
        n(this, "targetIndex", null);
        n(this, "velocity", {
            x: 0,
            y: 0
        });
        n(this, "pms", null);
        n(this, "pmsResolve", null);
        this.drawSprite(), this.on("removed", () => {
            this.pmsResolve && this.pmsResolve()
        })
    }
    init(t) {
        this.table = t, this.table.playSound("sound_start_mp3"), this.appearing = 0, this.x = this.y = 0, this.velocity.x = this.velocity.y = 0;
        let i = (t.pinsDistance - S.size * t.pinScale) / 1.3 / y.size;
        this.collisionRadius = S.size * t.pinScale * .5 + y.size * i * .5, this.sprite.scale.x = this.sprite.scale.y = i
    }
    drawSprite() {
        this.sprite = new u.Sprite(k.ball), this.sprite.anchor.x = this.sprite.anchor.y = .5, this.addChild(this.sprite)
    }
    run(t) {
        this.pms = new Promise(l => this.pmsResolve = l);
        let i = 1;
        return this.path = t.map((l, o) => {
            let r, p, h, A = this.table.lines[o];
            return l > 0 ? (p = i, h = i + 1) : (p = i - 1, h = i), r = {
                min: A.children[p].x + S.size / 5,
                max: A.children[h].x - S.size / 5
            }, i += l, r
        }), this.targetIndex = t.reduce((l, o) => l + o, 0), this.state = 1, this.pms
    }
    stop() {
        this.state = 2, this.pmsResolve && this.pmsResolve(), this.table.targets[this.targetIndex].hit(), this.remove()
    }
    remove() {
        this.table.removeBall(this)
    }
    update() {
        this.appearing < 1 ? (this.appearing += .25, this.appearing > 1 && (this.appearing = 1), this.alpha = this.appearing, this.scale.x = this.scale.y = .5 + .5 * this.appearing) : this.state === 1 && this.falling()
    }
    falling() {
        this.updatePosition(), this.correctPosition(), this.pinCollisions(), this.y > this.table.targets[0].y && this.stop()
    }
    updatePosition() {
        this.x += this.velocity.x, this.y += this.velocity.y
    }
    pinCollisions() {
        for (let t = 0; t < this.table.lines.length; t++) {
            let i = this.table.lines[t],
                l = i.y - this.y;
            if (Math.abs(l) < this.collisionRadius)
                for (let o = 0; o < i.children.length; o++) {
                    let r = i.children[o],
                        p = r.x - this.x;
                    if (Math.abs(p) < this.collisionRadius) {
                        let h = Math.sqrt(l * l + p * p);
                        if (!(h < this.collisionRadius)) return void(this.velocity.y += y.speed); {
                            let A = Math.atan2(l, p),
                                m = Math.atan2(this.velocity.y, this.velocity.x),
                                d = Math.sqrt(this.velocity.x * this.velocity.x + this.velocity.y * this.velocity.y);
                            d > 5 && r.pin(), d > 1 && this.table.playSound("sound_pin_mp3", .07 * d);
                            let w = this.collisionRadius - h;
                            w > 0 && (d -= Math.min(1, w));
                            let D = d * (1 - Math.max(0, Math.abs(Math.cos(A - m))) * y.consume),
                                j = Math.cos(A),
                                L = Math.sin(A);
                            if (this.velocity.x = -j * D, this.velocity.y = -L * D, this.x = r.x - j * this.collisionRadius, this.y = i.y - L * this.collisionRadius, i.y > this.y) return this.velocity.y += j * j, void(this.velocity.x -= L * j)
                        }
                    }
                }
        }
        this.velocity.y += y.speed * this.table.speedScale
    }
    correctPosition() {
        let t = null;
        for (let i = 0; i < this.table.lines.length; i++)
            if (this.table.lines[i].y > this.y) {
                t = this.path[i];
                break
            }
        t || (t = this.path[this.path.length - 1]), this.x < t.min ? (this.velocity.x = 0, this.x = t.min) : this.x > t.max && (this.velocity.x = 0, this.x = t.max)
    }
};
n(y, "size", 49), n(y, "speed", 1), n(y, "consume", .5);
let W = y;
class St {
    constructor(e) {
        n(this, "elems", []);
        n(this, "freeElems", []);
        n(this, "size", 0);
        for (let t = 0; t < e; t++) this.expand()
    }
    get() {
        this.freeElems.length == 0 && this.expand();
        let e = this.freeElems.pop();
        return this.elems[e]
    }
    put(e) {
        e.removeAllListeners();
        let t = this.elems.indexOf(e);
        t !== -1 && this.freeElems.push(t)
    }
    expand() {
        this.size++, this.freeElems.push(this.elems.push(new W) - 1)
    }
}
const g = class g extends u.Sprite {
    constructor() {
        super();
        n(this, "profit", null);
        n(this, "chance", null);
        n(this, "padding", 20);
        n(this, "arrow", null);
        n(this, "xArea", [-(T.width - g.width / 2) / 2 - 10, (T.width - g.width / 2) / 2 + 10]);
        n(this, "visibleNum", 0);
        this.width = g.width, this.height = g.height, this.texture = k.tooltip, this.visible = !1, this.pivot.x = this.width / 2, this.pivot.y = this.height / 2, this.drawArrow(), this.drawLabel(), this.drawProfit(), this.drawChance(), this.scale.x = this.scale.y = .5
    }
    drawArrow() {
        this.arrow = new u.Sprite(k.arrow), this.arrow.x = this.width / 2, this.arrow.anchor.x = .5, this.arrow.y = this.height, this.addChild(this.arrow)
    }
    drawLabel() {
        let t = new u.Text("Win Amount", g.toolLabelStyle);
        t.x = 2 * this.padding, t.y = .8 * this.padding;
        let i = new u.Text("Chance", g.toolLabelStyle);
        i.x = this.width / 2 + this.padding, i.y = .8 * this.padding, this.addChild(t), this.addChild(i)
    }
    drawProfit() {
        this.profit = new u.Text("2 ETH", g.toolTextStyle), this.profit.x = 2 * this.padding + 10, this.profit.y = 2.4 * this.padding + 28, this.addChild(this.profit)
    }
    drawChance() {
        this.chance = new u.Text("34.05%", g.toolTextStyle), this.chance.x = this.width / 2 + this.padding + 10, this.chance.y = 2.4 * this.padding + 28, this.addChild(this.chance)
    }
    show(t, i, l, o) {
        this.visibleNum++, this.visible = this.visibleNum > 0;
        let r = this.width / 2;
        t > this.xArea[1] ? (r += t - this.xArea[1], t = this.xArea[1]) : t < this.xArea[0] && (r += t + this.xArea[1], t = this.xArea[0]), this.x = t, this.arrow.x = 2 * r, this.y = i - this.height, this.profit.text = l, this.chance.text = (100 * o).toFixed(4) + "%"
    }
    hide() {
        setTimeout(() => {
            this.visibleNum--, this.visible = this.visibleNum > 0
        }, 200)
    }
};
n(g, "width", 560), n(g, "height", 144), n(g, "toolLabelStyle", new u.TextStyle({
    fontSize: 28,
    fill: 10199467,
    fontFamily: "BrutalType"
})), n(g, "toolTextStyle", new u.TextStyle({
    fontSize: 28,
    fill: 3159869,
    fontWeight: "700",
    fontFamily: "BrutalType"
}));
let U = g;
const f = class f extends u.Container {
    constructor(t) {
        super();
        n(this, "app");
        n(this, "ballsContainer", null);
        n(this, "pinsContainer", null);
        n(this, "lines", []);
        n(this, "targets", []);
        n(this, "tooltip", null);
        n(this, "balls", []);
        n(this, "running", !1);
        n(this, "pinsDistance", 1);
        n(this, "pinScale", 1);
        n(this, "ballPool", new St(10));
        n(this, "game");
        this.app = t, this.game = t.game, this.x = this.app.width / 2, this.scale.x = this.scale.y = this.app.width / f.height, this.drawBallsContainer(), this.drawPinsContainer(), this.drawToolTip()
    }
    get speedScale() {
        return this.app.isFast ? 2 : 1
    }
    update() {
        this.balls.forEach(t => t.update()), this.targets.forEach(t => t.update());
        for (let t = 0, i = this.lines.length; t < i; t++)
            for (let l = 0, o = this.lines[t].children.length; l < o; l++) this.lines[t].children[l].update()
    }
    drawPinsContainer() {
        this.pinsDistance = f.width / (this.app.rows + 1), this.pinScale = Math.max(.2, Math.min(1, .01 * this.pinsDistance));
        let t = (f.height - this.pinsDistance) / (this.app.rows + 1);
        this.pinsContainer = new u.Container, this.y = .5 * this.pinsDistance * this.scale.x, this.addChildAt(this.pinsContainer, 0);
        for (let o = 0; o < this.app.rows; o++) {
            let r = new u.Container;
            r.y = this.pinsDistance + o * t;
            let p = -Math.round((o + 2) * this.pinsDistance / 2);
            for (let h = 0, A = o + 3; h < A; h++) {
                let m = new S(p + this.pinsDistance * h, 0, this.pinScale);
                r.addChild(m)
            }
            this.lines.push(r), this.pinsContainer.addChild(r)
        }
        let i = Math.min(.95, .95 * this.pinsDistance / z.width),
            l = -(f.width - z.width * i) / 2;
        for (let o = 0, r = this.app.rows + 1; o < r; o++) {
            let p = this.app.payout[this.app.risk][this.app.rows][o],
                h = this.app.chance[this.app.rows][o],
                A = new z(p, h, i, this);
            A.x = l + o * this.pinsDistance, A.y = .8 * this.pinsDistance + this.app.rows * t;
            const m = () => {
                    const w = this.game.getState();
                    let D = w.amount.mul(p).toString().slice(0, 10);
                    this.tooltip.show(A.x, A.y, `${D} ${c.systemStore.getAlias(w.currencyName)}`, h)
                },
                d = () => {
                    this.tooltip.hide()
                };
            A.on("pointerover", m), A.on("pointerdown", m), A.on("pointerout", d), A.on("pointerup", d), A.on("pointercancel", d), A.on("pointerupoutside", d), this.pinsContainer.addChild(A), this.targets.push(A)
        }
        for (let o = 0, r = this.targets.length; o < r; o++) {
            let p = 2 * Math.abs(o - (this.targets.length - 1) / 2) / this.targets.length;
            this.targets[o].sprite.tint = $(p)
        }
    }
    drawBallsContainer() {
        this.ballsContainer = new u.Container, this.addChild(this.ballsContainer)
    }
    drawToolTip() {
        this.tooltip = new U, this.tooltip.y = 120, this.addChild(this.tooltip)
    }
    addBall() {
        let t = this.ballPool.get();
        return t.init(this), this.balls.push(t), this.ballsContainer.addChild(t), this.checkRuning(), t
    }
    removeBall(t) {
        let i = this.balls.indexOf(t);
        this.balls.splice(i, 1), this.ballsContainer.removeChild(t), this.ballPool.put(t), this.checkRuning()
    }
    reset() {
        this.removeChild(this.pinsContainer), this.lines.splice(0, this.lines.length), this.targets.splice(0, this.targets.length), this.drawPinsContainer()
    }
    checkRuning() {
        this.running = this.balls.length !== 0, this.emit("running", this.running)
    }
    playSound(t, i = 1) {
        this.game.sounds.playSound(t, {
            volume: i
        })
    }
};
n(f, "width", 520), n(f, "height", 580), n(f, "hueScale", ((t, i) => l => i[0] + (l - t[0]) * (i[0] - i[1]) / (t[0] - t[1]))([0, 1], [.33, 0]));
let T = f;
class jt extends c.EventEmitter {
    constructor(t, i, l, o, r = 8, p = 1) {
        super();
        n(this, "app");
        n(this, "width", 700);
        n(this, "height", 700);
        n(this, "payout");
        n(this, "chance", function(t, i) {
            let l = {},
                o = function(r) {
                    let p = [];
                    for (let h = 0; h < r; h++) {
                        p[h] = [];
                        for (let A = 0; A < h + 1; A++) {
                            let m;
                            m = A == 0 || A == h ? 1 : p[h - 1][A - 1] + p[h - 1][A], p[h][A] = m
                        }
                    }
                    return p
                }(++i);
            for (let r = t; r < i; r++) {
                let p = o[r].reduce((h, A) => h + A, 0);
                l[r] = [], o[r].forEach(h => l[r].push(h / p))
            }
            return l
        }(8, 16));
        n(this, "table", null);
        n(this, "rows");
        n(this, "risk", 1);
        n(this, "isFast");
        n(this, "running", !1);
        n(this, "game");
        this.rows = r, this.risk = p, this.width = o, this.height = o, this.payout = i, this.isFast = l, this.app = new u.PixiApp, this.game = t, this.app.renderer.resize(this.width, this.height), this.init()
    }
    update() {
        this.table.running && this.app.ticker.update()
    }
    destroy() {
        this.app.destroy()
    }
    async init() {
        await async function(t) {
            t.addBundle(K, kt);
            const i = await t.loadBundle(K);
            Object.assign(k, i)
        }(this.app.loader), this.table = new T(this), this.table.on("running", t => {
            this.running = t, this.emit("running", t)
        }), this.enableFast(this.isFast), this.app.stage.addChild(this.table), this.app.ticker.add(() => this.table.update())
    }
    addBall() {
        return this.table.addBall()
    }
    enableFast(t) {
        this.isFast = t
    }
    resetTable(t, i = 1) {
        this.rows == t && this.risk == i || this.running || (this.rows = t, this.risk = i, this.table.reset(), this.app.ticker.update())
    }
}
const Et = b.memo(() => {
        const s = B(),
            e = M(),
            t = b.useRef(null);
        return b.useEffect(() => {
            var i;
            return s.plinko = new jt(s, s.payouts, e.settings.fastEnable, function() {
                const l = window.innerHeight,
                    o = window.innerWidth;
                return o < 612 ? .8 * o : Math.min(500, l - 360)
            }(), e.rows, e.risk), (i = t.current) == null || i.appendChild(s.plinko.app.view), () => {
                s.plinko && (s.plinko.destroy(), s.plinko = null)
            }
        }, [e.gameConfig]), a.jsx("div", {
            className: Tt,
            ref: t
        })
    }),
    Tt = "w1d63dbh",
    Mt = b.memo(() => {
        const s = M(),
            e = R.useSingleDetailNew();
        return a.jsx(at, {
            list: s.myBets,
            keyof: "betId",
            onDetail: e
        })
    }),
    Qt = b.memo(() => a.jsxs(a.Fragment, {
        children: [a.jsx(Mt, {}), a.jsx(xt, {
            children: a.jsx(Et, {})
        })]
    })),
    _ = b.memo(function() {
        const {
            t: s
        } = c.useTranslation(), e = B(), t = M();
        return a.jsx(c.InputWrap, {
            label: s("Risk"),
            className: Pt,
            disabled: t.isBetting,
            children: a.jsx("div", {
                className: "input-control",
                children: e.riskOptions.map(i => {
                    const l = i.value === t.risk;
                    return a.jsx("button", {
                        className: V("risk-select-button-item", l && "is-active"),
                        onClick: () => {
                            t.isBetting || (t.risk = i.value)
                        },
                        children: i.label
                    }, i.label)
                })
            })
        })
    }),
    Pt = "r1ip8l9b",
    tt = b.memo(function() {
        const {
            t: s
        } = c.useTranslation(), e = B(), t = M();
        return a.jsx(I.SilderSelect, {
            label: s("Row"),
            disabled: t.isBetting,
            value: t.rows,
            onChange: i => {
                t.isBetting || (t.rows = i)
            },
            min: e.rowsOptions[0].value,
            max: e.rowsOptions[e.rowsOptions.length - 1].value
        })
    });

function X() {
    const {
        t: s
    } = c.useTranslation(), e = B();
    return a.jsx(c.Button, {
        className: "bet-button",
        type: "conic",
        onClick: () => {
            e.betThrottle()
        },
        children: s("Bet")
    })
}
const zt = "m4s3l19",
    Rt = b.memo(() => {
        const s = c.useIsMobile();
        return a.jsxs("div", {
            className: V(zt, "bet-control-manual"),
            children: [s && a.jsx(X, {}), a.jsx(I.CoinInput, {
                checkIncrease: !0
            }), a.jsx(_, {}), a.jsx(tt, {}), !s && a.jsx(X, {})]
        })
    });

function It() {
    const s = c.useIsMobile();
    return a.jsxs("div", {
        className: "bet-control-auto",
        children: [s && a.jsx(q, {}), a.jsx(I.CoinInput, {
            checkIncrease: !0
        }), a.jsx(I.TimesInput, {}), a.jsx(_, {}), a.jsx(tt, {}), a.jsx(vt, {}), !s && a.jsx(q, {})]
    })
}
const q = b.memo(() => {
        const {
            t: s
        } = c.useTranslation(), e = B(), t = M(), i = t.autoBet;
        return a.jsx(c.Button, {
            type: "conic",
            disabled: !i.isRunning && t.isBetting,
            className: "bet-button",
            onClick: e.toggleAutoBet,
            children: i.isRunning ? s("Stop Auto Bet") : s("Start Auto Bet")
        })
    }),
    Ot = G.memo(({
        gameInfo: s
    }) => {
        const {
            t: e
        } = c.useTranslation();
        return a.jsx(c.Dialog, {
            title: e("What Game Is This?"),
            children: a.jsxs(lt, {
                children: [a.jsxs("div", {
                    className: "item",
                    children: [a.jsx("h2", {
                        children: e("What Is {{gamename}}?", {
                            gamename: s.fullName
                        })
                    }), a.jsx("div", {
                        className: "help-content",
                        children: s.details.split(`
`).map((t, i) => a.jsx("p", {
                            children: t
                        }, i.toString()))
                    })]
                }), a.jsxs("div", {
                    className: "item",
                    children: [a.jsx("h2", {
                        children: e("How To Play {{gamename}}?", {
                            gamename: s.fullName
                        })
                    }), a.jsx("p", {
                        children: e("Just enter your bet, choose the Odds, and then choose the bonus line. The number on the bonus line means how much your bet will be multiplied when the ball falls into a hole.")
                    }), a.jsx("p", {
                        children: e("If your brain doesn't want to think, choose our AUTO BOT.")
                    })]
                }), s.slotsInfo && s.slotsInfo.rtpDes && a.jsxs(a.Fragment, {
                    children: [a.jsx("h2", {
                        children: e("What is the {{gamename}} return rate?", {
                            gamename: s.fullName
                        })
                    }), a.jsx("div", {
                        className: "help-content",
                        children: a.jsx("p", {
                            children: e("RTP (Return to Player) is {{rtp}}%.", {
                                rtp: s.slotsInfo.rtpDes
                            })
                        })
                    })]
                })]
            })
        })
    }),
    Gt = G.memo(() => {
        const {
            t: s
        } = c.useTranslation(), e = B(), t = c.usePageProps().gameInfo.read(), i = e.config.fairComponent, l = [{
            title: s("What Game Is This?"),
            node: a.jsx(Ot, {
                gameInfo: t
            })
        }, {
            title: s("Fairness"),
            node: a.jsx(c.Dialog, {
                title: s("Fairness"),
                children: a.jsx(i, {})
            })
        }, {
            title: s("Max Profits"),
            node: a.jsx(ot, {})
        }];
        return a.jsx(rt, {
            className: Lt,
            manualControl: a.jsx(Rt, {}),
            autoControl: a.jsx(It, {}),
            gameView: a.jsx(Qt, {}),
            tabs: [{
                label: s("All Bets"),
                value: R.AllBetNew
            }, {
                label: s("My bets"),
                value: R.MyBetNew
            }],
            actions: [a.jsx(ht, {}), a.jsx(At, {}), a.jsx(pt, {}), a.jsx(ct, {}), a.jsx(ut, {}), a.jsx(dt, {}), a.jsx(mt, {
                list: l
            })]
        })
    }),
    Lt = "pdyu941",
    Nt = (s, e) => {
        let t = 2 * Math.abs(s - e / 2) / (e + 1);
        return `#${$(t).toString(16)}`
    },
    Wt = G.memo(({
        bet: s,
        payout: e
    }) => {
        const t = e[s.risk][s.rows];
        return a.jsx("div", {
            className: V(Ut, "ten_res"),
            children: t.map((i, l) => a.jsxs("div", {
                className: "res_t " + (l === s.resIndex ? "active" : ""),
                children: [a.jsx("svg", {
                    fill: Nt(l, s.rows),
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 54 43",
                    children: a.jsxs("g", {
                        fillRule: "evenodd",
                        children: [a.jsx("rect", {
                            width: "54",
                            height: "29",
                            y: "14",
                            rx: "2"
                        }), a.jsx("path", {
                            d: "M2.592 0H8c8.745.873 8 5 19 5 10.066.077 10.255-4.127 19-5h5.408A2.592 2.592 0 0154 2.592v34.816A2.592 2.592 0 0151.408 40H2.592A2.592 2.592 0 010 37.408V2.592A2.592 2.592 0 012.592 0z"
                        })]
                    })
                }), a.jsxs("span", {
                    children: [i.toFixed(2), "x"]
                })]
            }, l))
        })
    }),
    Ut = "r17j85pi",
    Yt = R.withSingleDetailNew({
        onValidate: (s, e, t, i) => {
            window.open(`${Y.validateLink}?s=${s}&c=${e}&h=${i}&n=${t}`)
        },
        result: ({
            betLog: s
        }) => {
            const e = B(),
                {
                    risk: t,
                    row: i
                } = s.bv,
                {
                    path: l,
                    position: o
                } = s.gv,
                r = {
                    bet: {
                        risk: t,
                        rows: i,
                        resIndex: l.split("").reduce((p, h) => p + parseInt(h), 0)
                    },
                    payout: e.payouts
                };
            return a.jsx(Wt, F({}, r))
        },
        slot: ({
            betLog: s
        }) => {
            const {
                t: e
            } = c.useTranslation(), {
                risk: t,
                row: i
            } = s.bv;
            let l = B().riskOptions.find(o => o.value === t);
            return a.jsxs("div", {
                className: Vt,
                children: [a.jsx(c.Input, {
                    label: e("Risk"),
                    value: l == null ? void 0 : l.label,
                    readOnly: !0
                }), a.jsx(c.Input, {
                    label: e("Row"),
                    value: i,
                    readOnly: !0
                })]
            })
        }
    }),
    Vt = "s5z02s6",
    Ht = G.memo(function({
        bodyLock: s
    }) {
        return a.jsx(gt, {
            htmlName: "plinko",
            bodyLock: s
        })
    }),
    v = C.Reader,
    Z = C.Writer,
    P = C.util,
    x = C.roots.gamePlinko || (C.roots.gamePlinko = {});
x.BetValue = (() => {
    function s(e) {
        if (e)
            for (let t = Object.keys(e), i = 0; i < t.length; ++i) e[t[i]] != null && (this[t[i]] = e[t[i]])
    }
    return s.prototype.risk = 0, s.prototype.row = 0, s.create = function(e) {
        return new s(e)
    }, s.encode = function(e, t) {
        return t || (t = Z.create()), e.risk != null && Object.hasOwnProperty.call(e, "risk") && t.uint32(8).uint32(e.risk), e.row != null && Object.hasOwnProperty.call(e, "row") && t.uint32(16).uint32(e.row), t
    }, s.encodeDelimited = function(e, t) {
        return this.encode(e, t).ldelim()
    }, s.decode = function(e, t) {
        e instanceof v || (e = v.create(e));
        let i = t === void 0 ? e.len : e.pos + t,
            l = new x.BetValue;
        for (; e.pos < i;) {
            let o = e.uint32();
            switch (o >>> 3) {
                case 1:
                    l.risk = e.uint32();
                    break;
                case 2:
                    l.row = e.uint32();
                    break;
                default:
                    e.skipType(7 & o)
            }
        }
        return l
    }, s.decodeDelimited = function(e) {
        return e instanceof v || (e = new v(e)), this.decode(e, e.uint32())
    }, s.verify = function(e) {
        return typeof e != "object" || e === null ? "object expected" : e.risk != null && e.hasOwnProperty("risk") && !P.isInteger(e.risk) ? "risk: integer expected" : e.row != null && e.hasOwnProperty("row") && !P.isInteger(e.row) ? "row: integer expected" : null
    }, s.fromObject = function(e) {
        if (e instanceof x.BetValue) return e;
        let t = new x.BetValue;
        return e.risk != null && (t.risk = e.risk >>> 0), e.row != null && (t.row = e.row >>> 0), t
    }, s.toObject = function(e, t) {
        t || (t = {});
        let i = {};
        return t.defaults && (i.risk = 0, i.row = 0), e.risk != null && e.hasOwnProperty("risk") && (i.risk = e.risk), e.row != null && e.hasOwnProperty("row") && (i.row = e.row), i
    }, s.prototype.toJSON = function() {
        return this.constructor.toObject(this, C.util.toJSONOptions)
    }, s
})(), x.GameValue = (() => {
    function s(e) {
        if (e)
            for (let t = Object.keys(e), i = 0; i < t.length; ++i) e[t[i]] != null && (this[t[i]] = e[t[i]])
    }
    return s.prototype.path = "", s.prototype.position = 0, s.create = function(e) {
        return new s(e)
    }, s.encode = function(e, t) {
        return t || (t = Z.create()), e.path != null && Object.hasOwnProperty.call(e, "path") && t.uint32(10).string(e.path), e.position != null && Object.hasOwnProperty.call(e, "position") && t.uint32(16).uint32(e.position), t
    }, s.encodeDelimited = function(e, t) {
        return this.encode(e, t).ldelim()
    }, s.decode = function(e, t) {
        e instanceof v || (e = v.create(e));
        let i = t === void 0 ? e.len : e.pos + t,
            l = new x.GameValue;
        for (; e.pos < i;) {
            let o = e.uint32();
            switch (o >>> 3) {
                case 1:
                    l.path = e.string();
                    break;
                case 2:
                    l.position = e.uint32();
                    break;
                default:
                    e.skipType(7 & o)
            }
        }
        return l
    }, s.decodeDelimited = function(e) {
        return e instanceof v || (e = new v(e)), this.decode(e, e.uint32())
    }, s.verify = function(e) {
        return typeof e != "object" || e === null ? "object expected" : e.path != null && e.hasOwnProperty("path") && !P.isString(e.path) ? "path: string expected" : e.position != null && e.hasOwnProperty("position") && !P.isInteger(e.position) ? "position: integer expected" : null
    }, s.fromObject = function(e) {
        if (e instanceof x.GameValue) return e;
        let t = new x.GameValue;
        return e.path != null && (t.path = String(e.path)), e.position != null && (t.position = e.position >>> 0), t
    }, s.toObject = function(e, t) {
        t || (t = {});
        let i = {};
        return t.defaults && (i.path = "", i.position = 0), e.path != null && e.hasOwnProperty("path") && (i.path = e.path), e.position != null && e.hasOwnProperty("position") && (i.position = e.position), i
    }, s.prototype.toJSON = function() {
        return this.constructor.toObject(this, C.util.toJSONOptions)
    }, s
})();
const Ft = c.socket.encode(x.BetValue),
    O = class O extends wt {
        constructor(t, i) {
            super({
                name: "Plinko",
                namespace: (i == null ? void 0 : i.gameSocketNameSpace) || Bt("/g/p"),
                sounds: {
                    bg: {
                        src: "/modules/games/plinko-bgm-small-feef2f77.mp3",
                        loop: !0,
                        isBackground: !0
                    },
                    sound_start_mp3: "/modules/games/start-a4a768b9.mp3",
                    sound_pin_mp3: "/modules/games/pin-b71d97bc.mp3",
                    sound_win_mp3: "/modules/games/win-99963751.mp3",
                    sound_lose_mp3: "/modules/games/lose-36dd0b79.mp3"
                },
                fairComponent: Ht,
                detailComponent: Yt,
                validateLink: O.validateLink
            }, Gt, {
                risk: 1,
                rows: 10
            });
            n(this, "theme", {
                text: "#d9ebf6",
                main: "#6d6fcd",
                light: "#c2c4f5",
                dark: "#5759bb",
                dark2: "#4e51a5"
            });
            n(this, "payouts", J);
            n(this, "riskOptions", [{
                label: "Low",
                value: 1
            }, {
                label: "Medium",
                value: 2
            }, {
                label: "High",
                value: 3
            }]);
            n(this, "rowsOptions", []);
            n(this, "plinko", null);
            n(this, "onGetBetRequest", () => {});
            n(this, "betThrottle", nt.throttle(() => {
                this.handleBet().catch(c.notify)
            }, 500));
            n(this, "gameValueDecoder", c.socket.decode(x.GameValue));
            this.gameChannel = Number(i == null ? void 0 : i.gameChannel) || 1, this.toggleAutoBet = this.toggleAutoBet.bind(this), this.autoBet.interval = this.state.settings.fastEnable ? 350 : 1e3, this.plinko && this.plinko.enableFast(this.state.settings.fastEnable), c.valtio.subscribeKey(this.state.settings, "fastEnable", () => {
                this.autoBet.interval = this.state.settings.fastEnable ? 350 : 1e3, this.plinko && this.plinko.enableFast(this.state.settings.fastEnable)
            }), c.valtio.subscribeKey(this.state, "gameConfig", o => {
                const r = o.find(p => {
                    var h;
                    return (h = p.gameName) == null ? void 0 : h.includes("Plinko")
                });
                r && (this.payouts = function(p, h) {
                    if (A = p, Object.keys(A).length === 0) return h;
                    var A;
                    let m = {
                        1: {},
                        2: {},
                        3: {}
                    };
                    return Object.keys(p).forEach(d => {
                        const w = d.split("-");
                        m[w[1]][w[0]] = p[d]
                    }), Object.keys(m).forEach(d => {
                        Object.keys(m[d]).forEach(w => {
                            m[d][w] = m[d][w].map(D => Number(D))
                        })
                    }), m
                }(JSON.parse(r.payTable || "{}"), J))
            }), this.autoBet.bet = async (...o) => new Promise((r, p) => {
                this.onGetBetRequest = h => {
                    h.then(A => r(A.odds)), h.catch(p)
                }, this.handleBet(...o)
            }), this.rowsOptions = Object.keys(this.payouts[1]).map(o => ({
                label: o,
                value: Number(o)
            }));
            const l = this.hotkeyList.find(o => o.key == "space");
            l && (l.handler = () => (this.state.controlIdx === 1 ? this.toggleAutoBet() : this.betThrottle(), !1)), this.syncPlinkoSettings()
        }
        get maxProfit() {
            const t = Math.max(...this.payouts[this.state.risk][this.state.rows]);
            return this.state.amount.mul(t).sub(this.state.amount)
        }
        syncPlinkoSettings() {
            c.valtio.subscribe(this.state, () => {
                const {
                    rows: t,
                    risk: i
                } = this.state;
                this.plinko && this.plinko.resetTable(t, i)
            })
        }
        toggleAutoBet() {
            this.state.autoBet.isRunning ? this.autoBet.stop() : this.state.isBetting || this.autoBet.start().catch(c.notify)
        }
        setBetStatus(t) {
            this.plinko ? t || this.state.autoBet.isRunning || this.plinko.running ? this.state.isBetting = !0 : this.state.isBetting = !1 : this.state.isBetting = t
        }
        async onBetRequest(t) {
            if (this.onGetBetRequest(t), !this.plinko) return t; {
                const i = this.plinko.addBall();
                try {
                    let l = await t;
                    const o = l.gameValue.path.split("").map(r => Number(r));
                    try {
                        await i.run(o)
                    } catch (r) {}
                    return l
                } catch (l) {
                    throw i.remove(), l
                }
            }
        }
        betValue() {
            return Ft({
                risk: this.state.risk,
                row: this.state.rows
            })
        }
        active() {
            this.state.isBetting = !1, super.active()
        }
    };
n(O, "validateLink", `https://${c.env.GITHUB}.github.io/verify/plinko.html`);
let Y = O;
export {
    Y as
    default
};