var p = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var e = Object.prototype.hasOwnProperty,
    n = Object.prototype.propertyIsEnumerable;
var a = (s, m, o) => m in s ? p(s, m, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: o
    }) : s[m] = o,
    t = (s, m) => {
        for (var o in m || (m = {})) e.call(m, o) && a(s, o, m[o]);
        if (r)
            for (var o of r(m)) n.call(m, o) && a(s, o, m[o]);
        return s
    };
import {
    j as c
} from "./chunk-a4af42e8.js";
import {
    r as i
} from "./chunk-73e80d68.js";
import {
    l
} from "./chunk-654ef298.js";
const y = i.lazy(() => l("modules/games?port=5007").then(s => s.asyncComponents.TradingApp())),
    f = s => c.jsx(y, t({
        className: d
    }, s)),
    d = "m7y80y1";
export {
    f as T
};