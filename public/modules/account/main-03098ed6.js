const d = "modulepreload",
    v = function(_) {
        return "/modules/account/" + _
    },
    a = {},
    t = function(n, c, l) {
        if (!c || c.length === 0) return n();
        const E = document.getElementsByTagName("link");
        return Promise.all(c.map(o => {
            if (o = v(o), o in a) return;
            a[o] = !0;
            const e = o.endsWith(".css"),
                u = e ? '[rel="stylesheet"]' : "";
            if (!!l)
                for (let r = E.length - 1; r >= 0; r--) {
                    const s = E[r];
                    if (s.href === o && (!e || s.rel === "stylesheet")) return
                } else if (document.querySelector(`link[href="${o}"]${u}`)) return;
            const i = document.createElement("link");
            if (i.rel = e ? "stylesheet" : d, e || (i.as = "script", i.crossOrigin = ""), i.href = o, document.head.appendChild(i), e) return new Promise((r, s) => {
                i.addEventListener("load", r), i.addEventListener("error", () => s(new Error(`Unable to preload CSS for ${o}`)))
            })
        })).then(() => n()).catch(o => {
            const e = new Event("vite:preloadError", {
                cancelable: !0
            });
            if (e.payload = o, window.dispatchEvent(e), !e.defaultPrevented) throw o
        })
    },
    K = async (..._) => (await t(() =>
        import ("./index-73dfdcc2.js").then(n => n.i), ["index-73dfdcc2.js", "_bc_ui_share-16017657.js", "index-cbbca0a8.js", "Tool-dfc3e4cc.js", "react_share-ba7e619d.js", "index-5bcb444f.js", "Tool-ad19d4d8.css", "apis-36b6ebea.js", "md5-ba4a6ffc.js", "___vite-browser-external_commonjs-proxy-558ed773.js", "lodash_es_share-b99bc9c1.js", "hmac-sha256-3d10b1b1.js", "VerifyCode-a1d67458.js", "VerifyCode-be349dd1.css", "SwitchBar-b8c8118e.js", "SwitchBar-58ca4737.css", "Svg-6f248cbf.js", "index-534b752b.js", "BCI18nProvider-80c880fb.js", "index-9ce28bc6.css", "index-2d2a68d7.js", "index-7a553c64.css", "TwoFactorDialog-cd2f32e7.js", "TwoFactorDialog-43a0dd57.css", "index-516f3a23.css"])).verifyAccount(..._),
    q = () => t(() =>
        import ("./index-6ac4ad72.js"), ["index-6ac4ad72.js", "_bc_ui_share-16017657.js", "react_share-ba7e619d.js", "react_router-dom_share-62544329.js", "index-248f6d24.js", "index-5bcb444f.js", "framer_motion_share-695feab3.js", "apis-36b6ebea.js", "md5-ba4a6ffc.js", "___vite-browser-external_commonjs-proxy-558ed773.js", "lodash_es_share-b99bc9c1.js", "hmac-sha256-3d10b1b1.js", "Enter-ad67eca9.js", "index-76559910.js", "Enter-dc0ff6f2.css", "index-e19e74bf.css", "BCI18nProvider-80c880fb.js"]),
    F = () => t(() =>
        import ("./auth-35bca539.js"), ["auth-35bca539.js", "_bc_ui_share-16017657.js", "react_share-ba7e619d.js", "react_router-dom_share-62544329.js", "index-248f6d24.js", "index-5bcb444f.js", "framer_motion_share-695feab3.js", "apis-36b6ebea.js", "md5-ba4a6ffc.js", "___vite-browser-external_commonjs-proxy-558ed773.js", "lodash_es_share-b99bc9c1.js", "hmac-sha256-3d10b1b1.js", "Enter-ad67eca9.js", "index-76559910.js", "Enter-dc0ff6f2.css", "index-e19e74bf.css", "BCI18nProvider-80c880fb.js"]),
    W = () => t(() =>
        import ("./WalletConnectAuthModal-f57e740f.js"), ["WalletConnectAuthModal-f57e740f.js", "_bc_ui_share-16017657.js", "react_share-ba7e619d.js", "index-76559910.js", "___vite-browser-external_commonjs-proxy-558ed773.js"]),
    Y = () => t(() =>
        import ("./Enter-ad67eca9.js").then(_ => _.E), ["Enter-ad67eca9.js", "_bc_ui_share-16017657.js", "react_share-ba7e619d.js", "lodash_es_share-b99bc9c1.js", "index-76559910.js", "___vite-browser-external_commonjs-proxy-558ed773.js", "Enter-dc0ff6f2.css"]),
    j = () => t(() =>
        import ("./Setting-f409b89f.js"), ["Setting-f409b89f.js", "_bc_ui_share-16017657.js", "react_share-ba7e619d.js", "react_router-dom_share-62544329.js", "framer_motion_share-695feab3.js", "index-5bcb444f.js", "lodash_es_share-b99bc9c1.js", "index-2d2a68d7.js", "index-cbbca0a8.js", "BCI18nProvider-80c880fb.js", "SwitchBar-b8c8118e.js", "SwitchBar-58ca4737.css", "index-7a553c64.css", "md5-ba4a6ffc.js", "___vite-browser-external_commonjs-proxy-558ed773.js", "hmac-sha256-3d10b1b1.js", "handleLogout-17a01079.js", "index-73dfdcc2.js", "Tool-dfc3e4cc.js", "Tool-ad19d4d8.css", "apis-36b6ebea.js", "VerifyCode-a1d67458.js", "VerifyCode-be349dd1.css", "Svg-6f248cbf.js", "index-534b752b.js", "index-9ce28bc6.css", "TwoFactorDialog-cd2f32e7.js", "TwoFactorDialog-43a0dd57.css", "index-516f3a23.css", "getVerifyStatus-c257b4d2.js", "getVerifyStatus-73fc1e6d.css", "Privacy-f12494e2.js", "Privacy-409da80e.css", "Cockpit-53513747.js", "Cockpit-72980fb8.css", "Payment-6ac1de53.js", "Payment-39ce348a.css", "Setting-fab1cd40.css"]),
    m = () => t(() =>
        import ("./PrivacyDialog-eaa2c80d.js"), ["PrivacyDialog-eaa2c80d.js", "_bc_ui_share-16017657.js", "BCI18nProvider-80c880fb.js", "Privacy-f12494e2.js", "react_share-ba7e619d.js", "index-5bcb444f.js", "Privacy-409da80e.css"]),
    P = () => t(() =>
        import ("./TwoFactorDialog-cd2f32e7.js"), ["TwoFactorDialog-cd2f32e7.js", "_bc_ui_share-16017657.js", "BCI18nProvider-80c880fb.js", "react_share-ba7e619d.js", "hmac-sha256-3d10b1b1.js", "md5-ba4a6ffc.js", "___vite-browser-external_commonjs-proxy-558ed773.js", "index-5bcb444f.js", "TwoFactorDialog-43a0dd57.css"]),
    D = () => t(() =>
        import ("./ResetDialog-77362a14.js"), ["ResetDialog-77362a14.js", "_bc_ui_share-16017657.js", "react_share-ba7e619d.js", "react_router-dom_share-62544329.js", "md5-ba4a6ffc.js", "___vite-browser-external_commonjs-proxy-558ed773.js", "index-5bcb444f.js", "BCI18nProvider-80c880fb.js", "ResetDialog-795a0f18.css"]),
    A = () => t(() =>
        import ("./InvalidDialog-ef97f306.js"), ["InvalidDialog-ef97f306.js", "_bc_ui_share-16017657.js", "BCI18nProvider-80c880fb.js", "InvalidDialog-c9b7364d.css"]),
    R = () => t(() =>
        import ("./index-2d2a68d7.js"), ["index-2d2a68d7.js", "_bc_ui_share-16017657.js", "index-5bcb444f.js", "index-cbbca0a8.js", "BCI18nProvider-80c880fb.js", "SwitchBar-b8c8118e.js", "SwitchBar-58ca4737.css", "index-7a553c64.css"]),
    p = () => t(() =>
        import ("./SendEmail-40e7fdd9.js"), ["SendEmail-40e7fdd9.js", "_bc_ui_share-16017657.js", "index-5bcb444f.js", "index-cbbca0a8.js", "react_share-ba7e619d.js", "md5-ba4a6ffc.js", "___vite-browser-external_commonjs-proxy-558ed773.js", "hmac-sha256-3d10b1b1.js", "BCI18nProvider-80c880fb.js", "ExclusionConfirmation-619b402e.js", "handleLogout-17a01079.js", "ExclusionConfirmation-59b6ff54.css", "SendEmail-9af39781.css"]),
    L = () => t(() =>
        import ("./VerifyPhone-152e7eb6.js"), ["VerifyPhone-152e7eb6.js", "_bc_ui_share-16017657.js", "index-5bcb444f.js", "index-cbbca0a8.js", "Tool-dfc3e4cc.js", "react_share-ba7e619d.js", "Tool-ad19d4d8.css", "ExclusionConfirmation-619b402e.js", "handleLogout-17a01079.js", "ExclusionConfirmation-59b6ff54.css", "VerifyPhone-7cc47a92.css"]),
    V = () => t(() =>
        import ("./ExclusionConfirmation-619b402e.js"), ["ExclusionConfirmation-619b402e.js", "_bc_ui_share-16017657.js", "handleLogout-17a01079.js", "ExclusionConfirmation-59b6ff54.css"]),
    I = () => t(() =>
        import ("./index-534b752b.js"), ["index-534b752b.js", "_bc_ui_share-16017657.js", "react_share-ba7e619d.js", "index-5bcb444f.js", "index-cbbca0a8.js", "Tool-dfc3e4cc.js", "Tool-ad19d4d8.css", "SwitchBar-b8c8118e.js", "SwitchBar-58ca4737.css", "BCI18nProvider-80c880fb.js", "index-9ce28bc6.css"]),
    T = () => t(() =>
        import ("./index-3b10585e.js"), ["index-3b10585e.js", "_bc_ui_share-16017657.js", "react_share-ba7e619d.js", "react_router-dom_share-62544329.js", "index-5bcb444f.js", "Svg-6f248cbf.js", "BCI18nProvider-80c880fb.js", "index-38b07bdc.css"]),
    O = () => t(() =>
        import ("./NeedKyc-07b6243d.js"), ["NeedKyc-07b6243d.js", "_bc_ui_share-16017657.js", "react_share-ba7e619d.js", "react_router-dom_share-62544329.js", "Cockpit-53513747.js", "index-5bcb444f.js", "Cockpit-72980fb8.css", "BCI18nProvider-80c880fb.js"]),
    h = () => t(() =>
        import ("./Payment-6ac1de53.js"), ["Payment-6ac1de53.js", "_bc_ui_share-16017657.js", "index-5bcb444f.js", "react_share-ba7e619d.js", "BCI18nProvider-80c880fb.js", "lodash_es_share-b99bc9c1.js", "framer_motion_share-695feab3.js", "Payment-39ce348a.css"]),
    f = () => t(() =>
        import ("./index-73dfdcc2.js").then(_ => _.i), ["index-73dfdcc2.js", "_bc_ui_share-16017657.js", "index-cbbca0a8.js", "Tool-dfc3e4cc.js", "react_share-ba7e619d.js", "index-5bcb444f.js", "Tool-ad19d4d8.css", "apis-36b6ebea.js", "md5-ba4a6ffc.js", "___vite-browser-external_commonjs-proxy-558ed773.js", "lodash_es_share-b99bc9c1.js", "hmac-sha256-3d10b1b1.js", "VerifyCode-a1d67458.js", "VerifyCode-be349dd1.css", "SwitchBar-b8c8118e.js", "SwitchBar-58ca4737.css", "Svg-6f248cbf.js", "index-534b752b.js", "BCI18nProvider-80c880fb.js", "index-9ce28bc6.css", "index-2d2a68d7.js", "index-7a553c64.css", "TwoFactorDialog-cd2f32e7.js", "TwoFactorDialog-43a0dd57.css", "index-516f3a23.css"]),
    g = () => t(() =>
        import ("./Achieve-824475bc.js"), ["Achieve-824475bc.js", "_bc_ui_share-16017657.js", "react_share-ba7e619d.js", "react_router-dom_share-62544329.js", "AchieveDetail-ae555276.js", "Achieve-ef27a7ed.js", "AchieveDetail-1f6eb0e5.css", "BCI18nProvider-80c880fb.js", "Achieve-efd74c02.css"]),
    y = () => t(() =>
        import ("./index-c27fb641.js"), ["index-c27fb641.js", "_bc_ui_share-16017657.js", "react_share-ba7e619d.js", "react_router-dom_share-62544329.js", "common-3d6f23e3.js", "index-5bcb444f.js", "common-5e86fa92.css", "Achieve-ef27a7ed.js", "BCI18nProvider-80c880fb.js", "index-5cc5e690.css"]),
    w = () => t(() =>
        import ("./EditNickName-ed89a110.js"), ["EditNickName-ed89a110.js", "_bc_ui_share-16017657.js", "react_share-ba7e619d.js", "BCI18nProvider-80c880fb.js", "EditNickName-d6b50310.css"]),
    S = () => t(() =>
        import ("./EditAvatar-64133002.js"), ["EditAvatar-64133002.js", "_bc_ui_share-16017657.js", "react_share-ba7e619d.js", "index-5bcb444f.js", "framer_motion_share-695feab3.js", "BCI18nProvider-80c880fb.js", "EditAvatar-e8d92b83.css"]),
    k = () => t(() =>
        import ("./SharePop-76b4577f.js"), ["SharePop-76b4577f.js", "_bc_ui_share-16017657.js", "index-5bcb444f.js", "react_router-dom_share-62544329.js", "BCI18nProvider-80c880fb.js", "SharePop-b8d1687b.css"]),
    C = () => t(() =>
        import ("./VerifyPop-89bfd081.js"), ["VerifyPop-89bfd081.js", "_bc_ui_share-16017657.js", "index-5bcb444f.js", "BCI18nProvider-80c880fb.js", "VerifyPop-7fbeacbb.css"]),
    U = () => t(() =>
        import ("./Invite-8eafdf4e.js"), ["Invite-8eafdf4e.js", "_bc_ui_share-16017657.js", "react_share-ba7e619d.js", "BCI18nProvider-80c880fb.js", "Invite-01b3b8e1.css"]),
    N = () => t(() =>
        import ("./StatisticsDetail-1a9bc870.js"), ["StatisticsDetail-1a9bc870.js", "_bc_ui_share-16017657.js", "react_share-ba7e619d.js", "common-3d6f23e3.js", "index-5bcb444f.js", "common-5e86fa92.css", "BCI18nProvider-80c880fb.js", "react_router-dom_share-62544329.js", "StatisticsDetail-55e1da52.css"]),
    B = () => t(() =>
        import ("./index-62ed0e31.js"), ["index-62ed0e31.js", "_bc_ui_share-16017657.js", "react_share-ba7e619d.js", "AchieveDetail-ae555276.js", "Achieve-ef27a7ed.js", "AchieveDetail-1f6eb0e5.css", "BCI18nProvider-80c880fb.js", "index-c6af41ed.css"]),
    $ = () => t(() =>
        import ("./Enter-64c94c16.js"), ["Enter-64c94c16.js", "_bc_ui_share-16017657.js", "react_share-ba7e619d.js", "index-5bcb444f.js", "framer_motion_share-695feab3.js", "handleLogout-17a01079.js", "getVerifyStatus-c257b4d2.js", "getVerifyStatus-73fc1e6d.css", "BCI18nProvider-80c880fb.js", "Enter-6c110063.css"]),
    b = () => t(() =>
        import ("./getVerifyStatus-c257b4d2.js").then(_ => _.g), ["getVerifyStatus-c257b4d2.js", "_bc_ui_share-16017657.js", "getVerifyStatus-73fc1e6d.css"]),
    z = {
        PrivacyDialog: m,
        TwoFactorDialog: P,
        ResetPasswordDialog: D,
        ResetPasswordInvalid: A,
        EmailDialog: R,
        PhoneDialog: I,
        KYC: T,
        NeedKycDialog: O,
        UserAchieve: g,
        UserProfile: y,
        EditNickName: w,
        EditAvatar: S,
        SharePop: k,
        VerifyPop: C,
        Invite: U,
        Statistics: N,
        Achieve: B,
        UserEnter: $,
        SendEmailDialog: p,
        VerifyPhoneDialog: L,
        SelfExclusionDialog: V,
        VerifyStatusIcon: b,
        Payment: h,
        VerifyAccountSelectDialog: f
    };
export {
    t as _, q as a, F as b, z as c, j as s, Y as t, K as v, W as w
};