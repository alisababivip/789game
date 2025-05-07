import {
    _ as m
} from "./main-03098ed6.js";
import {
    _ as n,
    r as e
} from "./_bc_ui_share-16017657.js";
import {
    r as i
} from "./react_share-ba7e619d.js";
import {
    r as t
} from "./react_router-dom_share-62544329.js";
import {
    M as a
} from "./index-248f6d24.js";
import {
    w as p
} from "./BCI18nProvider-80c880fb.js";
import "./index-5bcb444f.js";
import "./framer_motion_share-695feab3.js";
import "./apis-36b6ebea.js";
import "./md5-ba4a6ffc.js";
import "./___vite-browser-external_commonjs-proxy-558ed773.js";
import "./lodash_es_share-b99bc9c1.js";
import "./hmac-sha256-3d10b1b1.js";
import "./Enter-ad67eca9.js";
import "./index-76559910.js";
const c = i.lazy(() => m(() =>
        import ("./forget-bb041290.js"), ["forget-bb041290.js", "_bc_ui_share-16017657.js", "react_share-ba7e619d.js", "apis-36b6ebea.js", "md5-ba4a6ffc.js", "___vite-browser-external_commonjs-proxy-558ed773.js", "lodash_es_share-b99bc9c1.js", "hmac-sha256-3d10b1b1.js", "index-248f6d24.js", "index-5bcb444f.js", "framer_motion_share-695feab3.js", "Enter-ad67eca9.js", "index-76559910.js", "main-03098ed6.js", "Enter-dc0ff6f2.css", "index-e19e74bf.css", "SimplePage-e8c652de.js", "forget-fa7b7632.css"])),
    _ = i.lazy(() => m(() =>
        import ("./regist-d08ae0a5.js"), ["regist-d08ae0a5.js", "_bc_ui_share-16017657.js", "react_share-ba7e619d.js", "index-5bcb444f.js", "index-248f6d24.js", "framer_motion_share-695feab3.js", "apis-36b6ebea.js", "md5-ba4a6ffc.js", "___vite-browser-external_commonjs-proxy-558ed773.js", "lodash_es_share-b99bc9c1.js", "hmac-sha256-3d10b1b1.js", "Enter-ad67eca9.js", "index-76559910.js", "main-03098ed6.js", "Enter-dc0ff6f2.css", "index-e19e74bf.css", "SimplePage-e8c652de.js", "regist-66bc0e53.css"])),
    s = i.lazy(() => m(() =>
        import ("./signin-2a0a5cab.js"), ["signin-2a0a5cab.js", "_bc_ui_share-16017657.js", "react_share-ba7e619d.js", "apis-36b6ebea.js", "md5-ba4a6ffc.js", "___vite-browser-external_commonjs-proxy-558ed773.js", "lodash_es_share-b99bc9c1.js", "hmac-sha256-3d10b1b1.js", "index-248f6d24.js", "index-5bcb444f.js", "framer_motion_share-695feab3.js", "Enter-ad67eca9.js", "index-76559910.js", "main-03098ed6.js", "Enter-dc0ff6f2.css", "index-e19e74bf.css", "SimplePage-e8c652de.js", "index-cbbca0a8.js", "VerifyCode-a1d67458.js", "VerifyCode-be349dd1.css", "signin-e551a7e4.css"])),
    b = p(function() {
        return i.useEffect(() => {
            const o = document.createElement("img");
            o.style.display = "none", o.src = "https://js.hcaptcha.com/1/api.js", document.body.appendChild(o);
            const r = document.createElement("img");
            return r.style.display = "none", r.src = `https://www.google.com/recaptcha/api.js?render=${n.env.RECAPTCHA_V3_ID}`, document.body.appendChild(r), () => {
                document.body.removeChild(o), document.body.removeChild(r)
            }
        }, []), e.jsx(a, {
            isAuth: !1,
            children: e.jsxs(t.Routes, {
                children: [e.jsx(t.Route, {
                    path: "/",
                    element: e.jsx(s, {})
                }), e.jsx(t.Route, {
                    path: "/signin",
                    element: e.jsx(s, {})
                }), e.jsx(t.Route, {
                    path: "/regist",
                    element: e.jsx(_, {})
                }), e.jsx(t.Route, {
                    path: "/forget",
                    element: e.jsx(c, {})
                })]
            })
        })
    });
export {
    b as
    default
};