const scriptRel = "modulepreload";
const assetsURL = function(dep) {
    return "/modules/static/" + dep;
};
const seen = {};
const __vitePreload = function preload(baseModule, deps, importerUrl) {
    if (!deps || deps.length === 0) {
        return baseModule();
    }
    const links = document.getElementsByTagName("link");
    return Promise.all(deps.map((dep) => {
        dep = assetsURL(dep);
        if (dep in seen)
            return;
        seen[dep] = true;
        const isCss = dep.endsWith(".css");
        const cssSelector = isCss ? '[rel="stylesheet"]' : "";
        const isBaseRelative = !!importerUrl;
        if (isBaseRelative) {
            for (let i = links.length - 1; i >= 0; i--) {
                const link2 = links[i];
                if (link2.href === dep && (!isCss || link2.rel === "stylesheet")) {
                    return;
                }
            }
        } else if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) {
            return;
        }
        const link = document.createElement("link");
        link.rel = isCss ? "stylesheet" : scriptRel;
        if (!isCss) {
            link.as = "script";
            link.crossOrigin = "";
        }
        link.href = dep;
        document.head.appendChild(link);
        if (isCss) {
            return new Promise((res, rej) => {
                link.addEventListener("load", res);
                link.addEventListener("error", () => rej(new Error(`Unable to preload CSS for ${dep}`)));
            });
        }
    })).then(() => baseModule()).catch((err) => {
        const e = new Event("vite:preloadError", {
            cancelable: true
        });
        e.payload = err;
        window.dispatchEvent(e);
        if (!e.defaultPrevented) {
            throw err;
        }
    });
};
const landing = () => __vitePreload(() =>
    import ("./index-3ac98143.js").then((n) => n.i), true ? ["index-3ac98143.js", "_bc_ui_share-e89cc239.js", "index-9a0a547e.js", "react_router-dom_share-259f33a9.js", "index-33dc51c1.css"] : void 0);
const help = () => __vitePreload(() =>
    import ("./index-ff0f5147.js").then((n) => n.i), true ? ["index-ff0f5147.js", "_bc_ui_share-e89cc239.js", "index-9a0a547e.js", "index-e1bbaea0.css"] : void 0);
const sponsorship = () => __vitePreload(() =>
    import ("./index-18430031.js"), true ? ["index-18430031.js", "_bc_ui_share-e89cc239.js", "react_router-dom_share-259f33a9.js"] : void 0);
export {
    __vitePreload as _,
    help as h,
    landing as l,
    sponsorship as s
};