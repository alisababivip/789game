import {
    _ as n
} from "./main-117f1eb2.js";
import {
    _ as e,
    r as o
} from "./_bc_ui_share-16017657.js";
import {
    r
} from "./react_share-7ee6a1d9.js";
const a = r.lazy(() => n(() =>
        import ("./NoticeContent-fe5cc95e.js"), ["NoticeContent-fe5cc95e.js", "_bc_ui_share-16017657.js", "react_share-7ee6a1d9.js", "CommonI18nProvider-df47ed38.js", "main-117f1eb2.js", "index-7d58397d.js", "NoticeContent-14024d10.css"])),
    u = r.lazy(() => n(() =>
        import ("./GiftNotice-804f3f6d.js"), ["GiftNotice-804f3f6d.js", "_bc_ui_share-16017657.js", "CommonI18nProvider-df47ed38.js", "main-117f1eb2.js", "GiftNotice-b255a856.css"])),
    f = function() {
        const [s, c] = r.useState(0);
        return r.useEffect(() => {
            e.userSocket.on("platform-lottery-user-prize", e.socket.decodeBind(i => {
                const t = JSON.parse(i);
                c((t == null ? void 0 : t.quantity) || 0), (t == null ? void 0 : t.quantity) > 0 && e.notify(o.jsx(r.Suspense, {
                    children: o.jsx(a, {
                        quantity: t.quantity
                    })
                }), {
                    duration: 9e3
                })
            })), e.userSocket.on("platform-lottery-daily-free-lottery", e.socket.decodeBind(i => {
                const t = JSON.parse(i);
                (t == null ? void 0 : t.quantity) > 0 && e.notify(o.jsx(r.Suspense, {
                    children: o.jsx(u, {
                        quantity: t.quantity
                    })
                }), {
                    duration: 9e3
                })
            }))
        }, []), o.jsx(e.Portal.Source, {
            id: "lottery-notice-enter",
            children: s > 0 && o.jsx("span", {
                className: _
            })
        })
    },
    _ = "d1yw1hvi";
export {
    f as
    default
};