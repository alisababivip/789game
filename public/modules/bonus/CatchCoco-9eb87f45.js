var R = Object.defineProperty;
var B = Object.getOwnPropertySymbols;
var g = Object.prototype.hasOwnProperty,
    k = Object.prototype.propertyIsEnumerable;
var m = (q, A, t) => A in q ? R(q, A, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : q[A] = t,
    v = (q, A) => {
        for (var t in A || (A = {})) g.call(A, t) && m(q, t, A[t]);
        if (B)
            for (var t of B(A)) k.call(A, t) && m(q, t, A[t]);
        return q
    };
import {
    n as h,
    _ as s,
    r as o,
    a as r,
    v as f
} from "./gift-b590e7c8.js";
import "./main-10603bdf.js";
const N = "/modules/bonus/topsplit-a-2d684169.png",
    V = "/modules/bonus/waterpipe-a-78a7d987.png",
    P = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARIAAALwCAMAAABsjQoFAAAA8FBMVEUAAABOkCRQkyZRkidNjyZTlClOkSVRlChOkCROkCROkCRNkCVQkiZOkCROkSVPkSVSkyZNkCZOkSZNkCZNkCVrwFlOkSZNjyNRkyRQkyhXmy9NkShMjiROkSVQkSVOkCFOjyFOkCFOkSVPkiZPkCJOkCNOkSVVlydYmS1NkihOkihOkShOkCRUmS1UmCxOkCVVmi5QkiVLjiZWmy5TmCxVmy5WnC9SlitOjyFHiSRKjCVMjydIiiVGhyNJiyVLjSdPkypNkShMkChLjSZRlStOkCNPkilSlyxOkCVTmS1PkiVUmi5QlCdVmy5OjyNFhiPB4htdAAAAOHRSTlMANTEn2BK/Hceqm3la05MsIe2hZ0wCsIBFPgrmuIwY+vPn3oZtUzoNBv358s11ULSbY/i+fefdbJNKhloAAARNSURBVHja7NiJVqJQAAZgRDYVBMR935e0zKbF0ETQMJfs/d9m/svEmak8npws9Rw+blxAlnt/IQHKcyixZjrdYFk2n+d5XlH8IMs0+Fz1et2dpEGWZT8oCtbP51m20Ug3YzHqxMQavJ9OJWuiVg1VwsFIoJsVOlK5pBYL/T1ZF4qlMiMJXDYeiARziVC1J0aTPllhm9QRiLEKnaz10PtInOswpWL/oApqWRKyAeRUFaN1OZ+mfkZaqUd7oVykK5R3TODxsf+4hkdwRk9keMLfR2TZGmMM69cByE76OyiUJC4QRkBJOr/3K66ppMRQOMAxW2Nw2kw8LRZP5mJhO8b2eAt8jLJlejMbFiaOsSCxAQl8ezydbrBSjdLsVy8NJanlAkJp3d8I392CWK3GxBTGU9SYItBy0zZNa0AYA8OY6CMYvrq/R8HIGT+4IxdZjpWwvj4yRvpEN8gusCPLskzTtElc7rFcmLNXq4UDGW1WZLLBkOhr7B6Gv5aIS4UNpwKJAKaz2XQ2RXHqMem+ZQ0MIH1G9956eXhBedjV9u2RIQlNNyZIiqSE9gDa4yATKyAB9T8occFqkqU+h02GheK7/wMkBxxkjoGMUJyTAN/+RB8OHzZCi1E+zrv132X72x4hIaKBRfJBS0l7XVPk8284hU6wmkpTn4RTJCA5WSAJ7Hm5nC/nBKrZFElMRsP74zdEOIhm/qb9pAcrKZCo+amd+S/OL3/dPC+Xz8tnFNTzsYnL4vTolj1bvvbj5tfl+YWf+oIGTYK5fYb5YASgj3SUrdObHXJ73b4lYdANak/wI3x9mWWu9BN0hZ+YhJhSqG/B0lEtEcxKqjExJiiGW7vezb9dDu5nP7G9KiEKjdyJ/IQm74tqzr2bOjgyKoM71pAW9fFN6jBieTlV03CHHxeYzBXuTKyBAxMoTu1y5zfWgOr/tr/KMEI8kgtptZScP7Jn5TQv16Oi9uc5EBG1W+Y3aLURARePhCshjTzf8WnqhDRZ523Bhdi7O7+u5Mj7gniX44SOxJTLmYyqtttnZ2etlu1otTDTbqtqJlNmGKkjcFyXvAII5yrX53c98SKZov08e1IJeDwej8fj8Xg8nt/swYEAAAAAAJD/ayOoqqqqqqqqCntwIAAAAAAA5P/aCKqqqqqqqqqqqqqqqqqqKuzBgQAAAAAAkP9rI6iqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqKuzBgQAAAAAAkP9rI6iqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqCntwIAAAAAAA5P/aCKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq0h4cCAAAAAAI8rceYIUKAAAAAAAAAAAAAAAAAAAAAAAAAAAAALgAprmC90/WErcAAAAASUVORK5CYII=",
    b = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAACoUExURUdwTPW0CPm9B/a2B//MBv7JBvm9CfOyBvvEDP/MBv/NB/CpBvCoB/CpBv/LBv/NBv/FT/CoB/i8Bu+oBvCsB++oB//OB//OB//NB/+9C//MM++oBv+qK/+zBv/MBv/////LBu+oBv7GBv+2B//ABv+5Bv/KBve7BvrCBv++K//kpv/Vdf/qu//otf+9Bv/FQP/13v/ah/+4F//flP/x0v/KU//DO//564N2FJwAAAAddFJOUwA7Ikbd7zP+FPeU6JWjwqUDYeb32L5sUIL4BXQGxzxp6QAAAcJJREFUOMt9VIlygyAQxXhEY0zNNEenrRyixkRjzrb//2dFFgwkTd8wjgOPt28XFoRu+HSThV/nOPK9ifuO/sIoGdcUV1iAUoz9l9EDJZyOa2wjmoQ2x4k3FD/AC0zO/HWD/0K0Njisxk8wsJybDs27kvOyywctFTGMx3qq4JkC1zQP3E+ZmqjKzECnMnmT9WFKqJIyfNuPHiWwol4qUUIUdHZkKwZoweaJOItXJVRAlD1pruQA/7DbQ8hlkFoF89sjETiCFIftwWAbhM4/5Nr+ELIzpd7QkskzxeCoIeQrOxDSZoarF7RgoJkp2+TStD0TEpRLMxQz01JLJPZnk+QhlVylcyO7k/hcM8O5dxfuIiOJDLdWuCWjhvFvodQIY+RsGU+sEvTp9bjYJZjbxRSu9kfSKEsQxEGhPt9Okw4t+Yb/Qi74KRqqCZcgO5z6YV4DccDD4eE8s8FhcyRba6kvXc5NTlkNN0Ug0K5w1d04hZrzVfN9sKERcnnLeVlUuhFc3S5Tq6Wo2aar20uRPGu8ldnCRkQD/tp+DNzFOL/nPL4r6Ty2aTMHpY8PVOpM402dC9vUn61C9BTpKHCCf9b/wS/bE3V5CjyCfQAAAABJRU5ErkJggg==",
    w = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF4AAABgCAMAAACjfDWBAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAA/UExURUdwTP/ZKf/VJf/YJ//fMv/QIP/XJv/NHv/cLv/hQP/TI//RIf/LHf/GGP/EF//KHP/IGf/EFv/IGv/EF//JGuK2ttcAAAAVdFJOUwAfNSYPTC1VFwc9RF2yuGOp1Ye/abODwkQAAASCSURBVGje7dnbkpwgEADQQRBBHa/z/98ampvcBae29iFLqpI8rMfeFltoXq+/8Td+dXDOf1Zv8Fsj4YQ0+LzxVxV6gw8/SBp8ziRPqnwOPPx4rU4Yk35d/FzphPF6Xfq8xre6uKRKRwiZG9z7Vq/0QZc8Yff5N3mXwTOEbn2CMbI3MPHziswwuArf+Axj5V/pIfe64cW1RZ9Rit0blOOPYheDkqKu/Cg/ideeG545vLieZfWuo+4NyvPHnTM2djE6ltWVH6Un5SczA3qX9tHYdfoGOBF/KXZmMwN6N7KUPo4mfC//RPlpPhF7JyAU6dM46hukEsTjzJsZmdDHCYX6NBmexvnhmZp9zXdfn3wf99Pk3kDFj4yfnvW5zIA+9cjV+97l1fOlOvxcJeH+fPf1/vJBD25AnfyQfOXOxC65AWt9GIyu+NF7vKRcXVOZAX8YlE8HGFH85gbkpnrnYh+UT2dPD+cPua3fudiHYZ4xncVIxi99dvd9YPnYBXwchu8HN36dH3b/dWOBPrn6tkl/Nr6ff1bzbWbhjHT1bfuAbh/A1F/xs7qVBSrpKv7B5v/yUe26CEV5ny9d58fm3zyAal1V22DOXHoy/y06+JnMuPHPTv6bdPHm+/p6bG/xRw7xn7fNj75Bow6+m/dtP9/A6nGeq5d/3L7fwCZ24R/vHXw9tn1fjtXJ/wMdfJt3Ye77rvVF6CI9q83/I13XRq0rX7DLW+rWf6xL3+rLIn34Z5H8pn36fL9H5YwEXME7/HUqXvtf6OAfaiYKfTl3GEIHXk7/9Tv99ZrlTFe89E/NyxscX+r0c0gd+PM8g+i3Y/xS/2hfB3/K/C8m+M/6jU/Xj/R19JAZ5Vt9Xbsv9FX5ipe68mXupT7P3fNZeflWl76clkqfh2c+hlfK+kZf1K9hY4f3tnuky1Kp/U3NGPEAlL/b2GG0T09kypnyD4WbsW9GV5+UVh9dnyntO7iXGVXxaasuq/3s+PLlUtXnWC9df85byibyP7OO785Ify2IW3S7Bplj38QOeb+WImOtj+wCauiD+KF4JmOHhVSdz5wF2hDEL8pPJnZYBdYsF1i8AJwd/3CmTLSGRTW6WmFOwRpQ+UM+dliA3/lMLr7H7lp8y/yb+LsXzsd+v30giQ2hMz+huGB/vofbH1be+eS2JrP9auO5uHdjhX1bekOr46dOOYpjNztDxMq7zozvrAlQOu+0uG0mhQ157xddlN3VAp9sT/Lshl9aNCx5UyZ2xFK+16+I4w9feBbtaIsNl6BTFMYflxMWZObqhyTaRVEXzfdTxYr5usm77fam+VSzCOVK3/VQ3diZbmUWu4CXj7Kl1Y291MjkBR8Vy1/UB0y3MZXP4mYaKpbXqAnIMk1knsx/d18C61q86fzfdSFI3AHP9L950KCGy+57HCTVXs9174mOX3d5azooJM4Mz58OuIcDVScz9mim4mjJmT+1urio/uCn9VTJFtvKYzH7fEnDopFXH7qZ8NuOPBuOJFvPIxsPVDl/cnDccNWzY+kfPcz+G//b+Ad5uXhdsVYHrQAAAABJRU5ErkJggg==",
    U = "data:image/png;base64,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";

function y() {
    return {
        img_leftspider: s.app.assets("/catch_coco/leftspider.png"),
        img_topsplit_a: N,
        img_topsplit_b: s.app.assets("/catch_coco/topsplit-b.png"),
        img_botcoomary: s.app.assets("/catch_coco/coomary.png"),
        img_botwaterpipe_b: P,
        img_botwaterpipe_a: V,
        img_activity_bitcoin: b,
        img_activity_coomary: s.app.assets("/catch_coco/activity_coomary.png"),
        img_activity_lighting: w,
        img_activity_waterpipe: U
    }
}
const p = h.memoize(async () => {
    const q = y();
    return await Promise.all(Object.values(q).map(A => s.utils.loadImage(A))), q
});

function I(q) {
    let A = !1;
    return async t => {
        if (!A) {
            A = !0;
            try {
                await q(t), A = !1
            } catch (e) {
                throw A = !1, e
            }
        }
    }
}

function l({
    onClose: q,
    currencyName: A,
    dataSign: t
}, e) {
    const n = s.useAccount(),
        i = s.useNavigate(),
        [c, u] = o.useState(!1),
        [a] = o.useState(() => f.timeline({
            onReverseComplete: q
        }));
    o.useEffect(e, []), o.useEffect(() => {
        a.play(), setTimeout(() => {
            a.reverse()
        }, 6e4)
    }, []), o.useEffect(() => {
        c && s.utils.delay(1300).then(() => u(!1))
    }, [c]);
    const C = I(async () => {
        if (!n.login) return i("#/login");
        try {
            const d = await s.http.post("/game/support/bonus/crocodile/", {
                currencyName: A,
                dataSign: t
            });
            a.reverse(), s.notify(d)
        } catch (d) {
            n.login && a.reverse(), s.notify(d)
        }
    });
    return {
        tl: a,
        active: c,
        onClick: () => {
            a.reversed() || (u(!0), s.utils.delay(1300).then(() => C()))
        }
    }
}
const T = q => {
        const A = o.useRef(null),
            t = o.useRef(null),
            e = o.useRef(null),
            {
                tl: n,
                active: i,
                onClick: c
            } = l(q, () => (n.to(e.current, {
                duration: .5,
                height: 246
            }), n.to([A.current, t.current], {
                duration: 1.5,
                top: 0,
                ease: "Power1.easeIn"
            }), n.pause(), () => f.killTweensOf(n)));
        return r.jsxs("div", {
            ref: e,
            className: `${K} ${i?"active":""}`,
            onClick: c,
            children: [r.jsx("img", {
                className: "img_line",
                ref: A,
                src: q.imgs.img_topsplit_a
            }), r.jsx("img", {
                className: "img_coomary",
                ref: t,
                src: q.imgs.img_topsplit_b
            })]
        })
    },
    S = q => {
        const A = o.useRef(null),
            t = o.useRef(null),
            e = o.useRef(null),
            n = o.useRef(null),
            {
                tl: i,
                active: c,
                onClick: u
            } = l(q, () => (i.set(A.current, {
                height: 270
            }), i.to([e.current, n.current], {
                duration: 1,
                bottom: 0
            }), i.to(t.current, {
                duration: 1,
                bottom: 178
            }), i.pause(), () => f.killTweensOf(i)));
        return r.jsxs("div", {
            ref: A,
            className: `${j} ${c?"active":""}`,
            onClick: u,
            children: [r.jsx("img", {
                className: "img_waterpipe",
                src: q.imgs.img_botwaterpipe_b,
                ref: e
            }), r.jsx("img", {
                className: "img_coomary",
                src: q.imgs.img_botcoomary,
                ref: t
            }), r.jsx("img", {
                className: "img_waterpipe",
                src: q.imgs.img_botwaterpipe_a,
                ref: n
            })]
        })
    },
    X = q => {
        const A = o.useRef(null),
            t = o.useRef(null),
            {
                tl: e,
                active: n,
                onClick: i
            } = l(q, () => (e.to(A.current, {
                duration: .2,
                height: 271
            }), e.to(t.current, {
                duration: 1.5,
                bottom: 143,
                ease: "easeOutBack"
            }), e.pause(), () => f.killTweensOf(e)));
        return r.jsx("div", {
            ref: A,
            className: `${Z} ${n?"active":""}`,
            onClick: i,
            children: r.jsx("img", {
                src: q.imgs.img_leftspider,
                ref: t
            })
        })
    },
    F = [T, S, X],
    O = [0, 1, 2],
    H = q => {
        o.useEffect(() => {
            s.utils.isSSR || p()
        }, []);
        const {
            data: A
        } = s.useAsync(p);
        if (!A) return null;
        const t = Math.floor(Math.random() * O.length),
            e = F[O[t]];
        return r.jsx(e, v({
            imgs: A
        }, q))
    },
    K = "ree2e3",
    j = "lun3ly5",
    Z = "rqqpwv0";
export {
    H as
    default
};