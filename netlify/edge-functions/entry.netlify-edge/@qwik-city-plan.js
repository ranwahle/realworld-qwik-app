import {
  c as y,
  i as f,
  j as a,
  F as w,
  _ as p,
  a as g,
  S as er,
  u as b,
  b as L,
  d as F,
  R as k,
  e as Ce,
  f as tr,
  g as vt,
} from "./assets/index.qwik.34c4cf26.js";
function rr(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var gt = { exports: {} },
  Te = { exports: {} },
  bt = function (t, r) {
    return function () {
      for (var s = new Array(arguments.length), o = 0; o < s.length; o++)
        s[o] = arguments[o];
      return t.apply(r, s);
    };
  },
  nr = bt,
  Oe = Object.prototype.toString,
  $e = (function (e) {
    return function (t) {
      var r = Oe.call(t);
      return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
    };
  })(Object.create(null));
function D(e) {
  return (
    (e = e.toLowerCase()),
    function (r) {
      return $e(r) === e;
    }
  );
}
function xe(e) {
  return Array.isArray(e);
}
function X(e) {
  return typeof e > "u";
}
function ar(e) {
  return (
    e !== null &&
    !X(e) &&
    e.constructor !== null &&
    !X(e.constructor) &&
    typeof e.constructor.isBuffer == "function" &&
    e.constructor.isBuffer(e)
  );
}
var wt = D("ArrayBuffer");
function sr(e) {
  var t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && wt(e.buffer)),
    t
  );
}
function or(e) {
  return typeof e == "string";
}
function ir(e) {
  return typeof e == "number";
}
function yt(e) {
  return e !== null && typeof e == "object";
}
function Y(e) {
  if ($e(e) !== "object") return !1;
  var t = Object.getPrototypeOf(e);
  return t === null || t === Object.prototype;
}
var lr = D("Date"),
  cr = D("File"),
  ur = D("Blob"),
  dr = D("FileList");
function Ue(e) {
  return Oe.call(e) === "[object Function]";
}
function fr(e) {
  return yt(e) && Ue(e.pipe);
}
function hr(e) {
  var t = "[object FormData]";
  return (
    e &&
    ((typeof FormData == "function" && e instanceof FormData) ||
      Oe.call(e) === t ||
      (Ue(e.toString) && e.toString() === t))
  );
}
var mr = D("URLSearchParams");
function pr(e) {
  return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
}
function vr() {
  return typeof navigator < "u" &&
    (navigator.product === "ReactNative" ||
      navigator.product === "NativeScript" ||
      navigator.product === "NS")
    ? !1
    : typeof window < "u" && typeof document < "u";
}
function Pe(e, t) {
  if (!(e === null || typeof e > "u"))
    if ((typeof e != "object" && (e = [e]), xe(e)))
      for (var r = 0, n = e.length; r < n; r++) t.call(null, e[r], r, e);
    else
      for (var s in e)
        Object.prototype.hasOwnProperty.call(e, s) && t.call(null, e[s], s, e);
}
function _e() {
  var e = {};
  function t(s, o) {
    Y(e[o]) && Y(s)
      ? (e[o] = _e(e[o], s))
      : Y(s)
      ? (e[o] = _e({}, s))
      : xe(s)
      ? (e[o] = s.slice())
      : (e[o] = s);
  }
  for (var r = 0, n = arguments.length; r < n; r++) Pe(arguments[r], t);
  return e;
}
function gr(e, t, r) {
  return (
    Pe(t, function (s, o) {
      r && typeof s == "function" ? (e[o] = nr(s, r)) : (e[o] = s);
    }),
    e
  );
}
function br(e) {
  return e.charCodeAt(0) === 65279 && (e = e.slice(1)), e;
}
function wr(e, t, r, n) {
  (e.prototype = Object.create(t.prototype, n)),
    (e.prototype.constructor = e),
    r && Object.assign(e.prototype, r);
}
function yr(e, t, r) {
  var n,
    s,
    o,
    l = {};
  t = t || {};
  do {
    for (n = Object.getOwnPropertyNames(e), s = n.length; s-- > 0; )
      (o = n[s]), l[o] || ((t[o] = e[o]), (l[o] = !0));
    e = Object.getPrototypeOf(e);
  } while (e && (!r || r(e, t)) && e !== Object.prototype);
  return t;
}
function Er(e, t, r) {
  (e = String(e)),
    (r === void 0 || r > e.length) && (r = e.length),
    (r -= t.length);
  var n = e.indexOf(t, r);
  return n !== -1 && n === r;
}
function Rr(e) {
  if (!e) return null;
  var t = e.length;
  if (X(t)) return null;
  for (var r = new Array(t); t-- > 0; ) r[t] = e[t];
  return r;
}
var _r = (function (e) {
    return function (t) {
      return e && t instanceof e;
    };
  })(typeof Uint8Array < "u" && Object.getPrototypeOf(Uint8Array)),
  R = {
    isArray: xe,
    isArrayBuffer: wt,
    isBuffer: ar,
    isFormData: hr,
    isArrayBufferView: sr,
    isString: or,
    isNumber: ir,
    isObject: yt,
    isPlainObject: Y,
    isUndefined: X,
    isDate: lr,
    isFile: cr,
    isBlob: ur,
    isFunction: Ue,
    isStream: fr,
    isURLSearchParams: mr,
    isStandardBrowserEnv: vr,
    forEach: Pe,
    merge: _e,
    extend: gr,
    trim: pr,
    stripBOM: br,
    inherits: wr,
    toFlatObject: yr,
    kindOf: $e,
    kindOfTest: D,
    endsWith: Er,
    toArray: Rr,
    isTypedArray: _r,
    isFileList: dr,
  },
  I = R;
function Je(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
var Et = function (t, r, n) {
    if (!r) return t;
    var s;
    if (n) s = n(r);
    else if (I.isURLSearchParams(r)) s = r.toString();
    else {
      var o = [];
      I.forEach(r, function (i, u) {
        i === null ||
          typeof i > "u" ||
          (I.isArray(i) ? (u = u + "[]") : (i = [i]),
          I.forEach(i, function (v) {
            I.isDate(v)
              ? (v = v.toISOString())
              : I.isObject(v) && (v = JSON.stringify(v)),
              o.push(Je(u) + "=" + Je(v));
          }));
      }),
        (s = o.join("&"));
    }
    if (s) {
      var l = t.indexOf("#");
      l !== -1 && (t = t.slice(0, l)),
        (t += (t.indexOf("?") === -1 ? "?" : "&") + s);
    }
    return t;
  },
  Sr = R;
function ee() {
  this.handlers = [];
}
ee.prototype.use = function (t, r, n) {
  return (
    this.handlers.push({
      fulfilled: t,
      rejected: r,
      synchronous: n ? n.synchronous : !1,
      runWhen: n ? n.runWhen : null,
    }),
    this.handlers.length - 1
  );
};
ee.prototype.eject = function (t) {
  this.handlers[t] && (this.handlers[t] = null);
};
ee.prototype.forEach = function (t) {
  Sr.forEach(this.handlers, function (n) {
    n !== null && t(n);
  });
};
var Ar = ee,
  Cr = R,
  Tr = function (t, r) {
    Cr.forEach(t, function (s, o) {
      o !== r &&
        o.toUpperCase() === r.toUpperCase() &&
        ((t[r] = s), delete t[o]);
    });
  },
  Rt = R;
function H(e, t, r, n, s) {
  Error.call(this),
    (this.message = e),
    (this.name = "AxiosError"),
    t && (this.code = t),
    r && (this.config = r),
    n && (this.request = n),
    s && (this.response = s);
}
Rt.inherits(H, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: this.config,
      code: this.code,
      status:
        this.response && this.response.status ? this.response.status : null,
    };
  },
});
var _t = H.prototype,
  St = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
].forEach(function (e) {
  St[e] = { value: e };
});
Object.defineProperties(H, St);
Object.defineProperty(_t, "isAxiosError", { value: !0 });
H.from = function (e, t, r, n, s, o) {
  var l = Object.create(_t);
  return (
    Rt.toFlatObject(e, l, function (i) {
      return i !== Error.prototype;
    }),
    H.call(l, e.message, t, r, n, s),
    (l.name = e.name),
    o && Object.assign(l, o),
    l
  );
};
var J = H,
  At = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  U = R;
function Or(e, t) {
  t = t || new FormData();
  var r = [];
  function n(o) {
    return o === null
      ? ""
      : U.isDate(o)
      ? o.toISOString()
      : U.isArrayBuffer(o) || U.isTypedArray(o)
      ? typeof Blob == "function"
        ? new Blob([o])
        : Buffer.from(o)
      : o;
  }
  function s(o, l) {
    if (U.isPlainObject(o) || U.isArray(o)) {
      if (r.indexOf(o) !== -1)
        throw Error("Circular reference detected in " + l);
      r.push(o),
        U.forEach(o, function (i, u) {
          if (!U.isUndefined(i)) {
            var h = l ? l + "." + u : u,
              v;
            if (i && !l && typeof i == "object") {
              if (U.endsWith(u, "{}")) i = JSON.stringify(i);
              else if (U.endsWith(u, "[]") && (v = U.toArray(i))) {
                v.forEach(function (d) {
                  !U.isUndefined(d) && t.append(h, n(d));
                });
                return;
              }
            }
            s(i, h);
          }
        }),
        r.pop();
    } else t.append(l, n(o));
  }
  return s(e), t;
}
var Ct = Or,
  le,
  Qe;
function $r() {
  if (Qe) return le;
  Qe = 1;
  var e = J;
  return (
    (le = function (r, n, s) {
      var o = s.config.validateStatus;
      !s.status || !o || o(s.status)
        ? r(s)
        : n(
            new e(
              "Request failed with status code " + s.status,
              [e.ERR_BAD_REQUEST, e.ERR_BAD_RESPONSE][
                Math.floor(s.status / 100) - 4
              ],
              s.config,
              s.request,
              s
            )
          );
    }),
    le
  );
}
var ce, Ve;
function xr() {
  if (Ve) return ce;
  Ve = 1;
  var e = R;
  return (
    (ce = e.isStandardBrowserEnv()
      ? (function () {
          return {
            write: function (n, s, o, l, c, i) {
              var u = [];
              u.push(n + "=" + encodeURIComponent(s)),
                e.isNumber(o) && u.push("expires=" + new Date(o).toGMTString()),
                e.isString(l) && u.push("path=" + l),
                e.isString(c) && u.push("domain=" + c),
                i === !0 && u.push("secure"),
                (document.cookie = u.join("; "));
            },
            read: function (n) {
              var s = document.cookie.match(
                new RegExp("(^|;\\s*)(" + n + ")=([^;]*)")
              );
              return s ? decodeURIComponent(s[3]) : null;
            },
            remove: function (n) {
              this.write(n, "", Date.now() - 864e5);
            },
          };
        })()
      : (function () {
          return {
            write: function () {},
            read: function () {
              return null;
            },
            remove: function () {},
          };
        })()),
    ce
  );
}
var Ur = function (t) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
  },
  Pr = function (t, r) {
    return r ? t.replace(/\/+$/, "") + "/" + r.replace(/^\/+/, "") : t;
  },
  Nr = Ur,
  qr = Pr,
  Tt = function (t, r) {
    return t && !Nr(r) ? qr(t, r) : r;
  },
  ue,
  Ge;
function Fr() {
  if (Ge) return ue;
  Ge = 1;
  var e = R,
    t = [
      "age",
      "authorization",
      "content-length",
      "content-type",
      "etag",
      "expires",
      "from",
      "host",
      "if-modified-since",
      "if-unmodified-since",
      "last-modified",
      "location",
      "max-forwards",
      "proxy-authorization",
      "referer",
      "retry-after",
      "user-agent",
    ];
  return (
    (ue = function (n) {
      var s = {},
        o,
        l,
        c;
      return (
        n &&
          e.forEach(
            n.split(`
`),
            function (u) {
              if (
                ((c = u.indexOf(":")),
                (o = e.trim(u.substr(0, c)).toLowerCase()),
                (l = e.trim(u.substr(c + 1))),
                o)
              ) {
                if (s[o] && t.indexOf(o) >= 0) return;
                o === "set-cookie"
                  ? (s[o] = (s[o] ? s[o] : []).concat([l]))
                  : (s[o] = s[o] ? s[o] + ", " + l : l);
              }
            }
          ),
        s
      );
    }),
    ue
  );
}
var de, Ye;
function kr() {
  if (Ye) return de;
  Ye = 1;
  var e = R;
  return (
    (de = e.isStandardBrowserEnv()
      ? (function () {
          var r = /(msie|trident)/i.test(navigator.userAgent),
            n = document.createElement("a"),
            s;
          function o(l) {
            var c = l;
            return (
              r && (n.setAttribute("href", c), (c = n.href)),
              n.setAttribute("href", c),
              {
                href: n.href,
                protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
                host: n.host,
                search: n.search ? n.search.replace(/^\?/, "") : "",
                hash: n.hash ? n.hash.replace(/^#/, "") : "",
                hostname: n.hostname,
                port: n.port,
                pathname:
                  n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname,
              }
            );
          }
          return (
            (s = o(window.location.href)),
            function (c) {
              var i = e.isString(c) ? o(c) : c;
              return i.protocol === s.protocol && i.host === s.host;
            }
          );
        })()
      : (function () {
          return function () {
            return !0;
          };
        })()),
    de
  );
}
var fe, Ke;
function te() {
  if (Ke) return fe;
  Ke = 1;
  var e = J,
    t = R;
  function r(n) {
    e.call(this, n == null ? "canceled" : n, e.ERR_CANCELED),
      (this.name = "CanceledError");
  }
  return t.inherits(r, e, { __CANCEL__: !0 }), (fe = r), fe;
}
var he, Xe;
function Lr() {
  return (
    Xe ||
      ((Xe = 1),
      (he = function (t) {
        var r = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
        return (r && r[1]) || "";
      })),
    he
  );
}
var me, Ze;
function et() {
  if (Ze) return me;
  Ze = 1;
  var e = R,
    t = $r(),
    r = xr(),
    n = Et,
    s = Tt,
    o = Fr(),
    l = kr(),
    c = At,
    i = J,
    u = te(),
    h = Lr();
  return (
    (me = function (d) {
      return new Promise(function (Yt, j) {
        var Q = d.data,
          V = d.headers,
          G = d.responseType,
          B;
        function ze() {
          d.cancelToken && d.cancelToken.unsubscribe(B),
            d.signal && d.signal.removeEventListener("abort", B);
        }
        e.isFormData(Q) && e.isStandardBrowserEnv() && delete V["Content-Type"];
        var m = new XMLHttpRequest();
        if (d.auth) {
          var Kt = d.auth.username || "",
            Xt = d.auth.password
              ? unescape(encodeURIComponent(d.auth.password))
              : "";
          V.Authorization = "Basic " + btoa(Kt + ":" + Xt);
        }
        var se = s(d.baseURL, d.url);
        m.open(d.method.toUpperCase(), n(se, d.params, d.paramsSerializer), !0),
          (m.timeout = d.timeout);
        function He() {
          if (!!m) {
            var x =
                "getAllResponseHeaders" in m
                  ? o(m.getAllResponseHeaders())
                  : null,
              M =
                !G || G === "text" || G === "json"
                  ? m.responseText
                  : m.response,
              N = {
                data: M,
                status: m.status,
                statusText: m.statusText,
                headers: x,
                config: d,
                request: m,
              };
            t(
              function (ie) {
                Yt(ie), ze();
              },
              function (ie) {
                j(ie), ze();
              },
              N
            ),
              (m = null);
          }
        }
        if (
          ("onloadend" in m
            ? (m.onloadend = He)
            : (m.onreadystatechange = function () {
                !m ||
                  m.readyState !== 4 ||
                  (m.status === 0 &&
                    !(m.responseURL && m.responseURL.indexOf("file:") === 0)) ||
                  setTimeout(He);
              }),
          (m.onabort = function () {
            !m ||
              (j(new i("Request aborted", i.ECONNABORTED, d, m)), (m = null));
          }),
          (m.onerror = function () {
            j(new i("Network Error", i.ERR_NETWORK, d, m, m)), (m = null);
          }),
          (m.ontimeout = function () {
            var M = d.timeout
                ? "timeout of " + d.timeout + "ms exceeded"
                : "timeout exceeded",
              N = d.transitional || c;
            d.timeoutErrorMessage && (M = d.timeoutErrorMessage),
              j(
                new i(
                  M,
                  N.clarifyTimeoutError ? i.ETIMEDOUT : i.ECONNABORTED,
                  d,
                  m
                )
              ),
              (m = null);
          }),
          e.isStandardBrowserEnv())
        ) {
          var We =
            (d.withCredentials || l(se)) && d.xsrfCookieName
              ? r.read(d.xsrfCookieName)
              : void 0;
          We && (V[d.xsrfHeaderName] = We);
        }
        "setRequestHeader" in m &&
          e.forEach(V, function (M, N) {
            typeof Q > "u" && N.toLowerCase() === "content-type"
              ? delete V[N]
              : m.setRequestHeader(N, M);
          }),
          e.isUndefined(d.withCredentials) ||
            (m.withCredentials = !!d.withCredentials),
          G && G !== "json" && (m.responseType = d.responseType),
          typeof d.onDownloadProgress == "function" &&
            m.addEventListener("progress", d.onDownloadProgress),
          typeof d.onUploadProgress == "function" &&
            m.upload &&
            m.upload.addEventListener("progress", d.onUploadProgress),
          (d.cancelToken || d.signal) &&
            ((B = function (x) {
              !m ||
                (j(!x || (x && x.type) ? new u() : x), m.abort(), (m = null));
            }),
            d.cancelToken && d.cancelToken.subscribe(B),
            d.signal &&
              (d.signal.aborted ? B() : d.signal.addEventListener("abort", B))),
          Q || (Q = null);
        var oe = h(se);
        if (oe && ["http", "https", "file"].indexOf(oe) === -1) {
          j(new i("Unsupported protocol " + oe + ":", i.ERR_BAD_REQUEST, d));
          return;
        }
        m.send(Q);
      });
    }),
    me
  );
}
var pe, tt;
function Dr() {
  return tt || ((tt = 1), (pe = null)), pe;
}
var E = R,
  rt = Tr,
  nt = J,
  jr = At,
  Br = Ct,
  Mr = { "Content-Type": "application/x-www-form-urlencoded" };
function at(e, t) {
  !E.isUndefined(e) &&
    E.isUndefined(e["Content-Type"]) &&
    (e["Content-Type"] = t);
}
function Ir() {
  var e;
  return (
    (typeof XMLHttpRequest < "u" ||
      (typeof process < "u" &&
        Object.prototype.toString.call(process) === "[object process]")) &&
      (e = et()),
    e
  );
}
function zr(e, t, r) {
  if (E.isString(e))
    try {
      return (t || JSON.parse)(e), E.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError") throw n;
    }
  return (r || JSON.stringify)(e);
}
var re = {
  transitional: jr,
  adapter: Ir(),
  transformRequest: [
    function (t, r) {
      if (
        (rt(r, "Accept"),
        rt(r, "Content-Type"),
        E.isFormData(t) ||
          E.isArrayBuffer(t) ||
          E.isBuffer(t) ||
          E.isStream(t) ||
          E.isFile(t) ||
          E.isBlob(t))
      )
        return t;
      if (E.isArrayBufferView(t)) return t.buffer;
      if (E.isURLSearchParams(t))
        return (
          at(r, "application/x-www-form-urlencoded;charset=utf-8"), t.toString()
        );
      var n = E.isObject(t),
        s = r && r["Content-Type"],
        o;
      if ((o = E.isFileList(t)) || (n && s === "multipart/form-data")) {
        var l = this.env && this.env.FormData;
        return Br(o ? { "files[]": t } : t, l && new l());
      } else if (n || s === "application/json")
        return at(r, "application/json"), zr(t);
      return t;
    },
  ],
  transformResponse: [
    function (t) {
      var r = this.transitional || re.transitional,
        n = r && r.silentJSONParsing,
        s = r && r.forcedJSONParsing,
        o = !n && this.responseType === "json";
      if (o || (s && E.isString(t) && t.length))
        try {
          return JSON.parse(t);
        } catch (l) {
          if (o)
            throw l.name === "SyntaxError"
              ? nt.from(l, nt.ERR_BAD_RESPONSE, this, null, this.response)
              : l;
        }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: Dr() },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: { common: { Accept: "application/json, text/plain, */*" } },
};
E.forEach(["delete", "get", "head"], function (t) {
  re.headers[t] = {};
});
E.forEach(["post", "put", "patch"], function (t) {
  re.headers[t] = E.merge(Mr);
});
var Ne = re,
  Hr = R,
  Wr = Ne,
  Jr = function (t, r, n) {
    var s = this || Wr;
    return (
      Hr.forEach(n, function (l) {
        t = l.call(s, t, r);
      }),
      t
    );
  },
  ve,
  st;
function Ot() {
  return (
    st ||
      ((st = 1),
      (ve = function (t) {
        return !!(t && t.__CANCEL__);
      })),
    ve
  );
}
var ot = R,
  ge = Jr,
  Qr = Ot(),
  Vr = Ne,
  Gr = te();
function be(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new Gr();
}
var Yr = function (t) {
    be(t),
      (t.headers = t.headers || {}),
      (t.data = ge.call(t, t.data, t.headers, t.transformRequest)),
      (t.headers = ot.merge(
        t.headers.common || {},
        t.headers[t.method] || {},
        t.headers
      )),
      ot.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        function (s) {
          delete t.headers[s];
        }
      );
    var r = t.adapter || Vr.adapter;
    return r(t).then(
      function (s) {
        return (
          be(t),
          (s.data = ge.call(t, s.data, s.headers, t.transformResponse)),
          s
        );
      },
      function (s) {
        return (
          Qr(s) ||
            (be(t),
            s &&
              s.response &&
              (s.response.data = ge.call(
                t,
                s.response.data,
                s.response.headers,
                t.transformResponse
              ))),
          Promise.reject(s)
        );
      }
    );
  },
  $ = R,
  $t = function (t, r) {
    r = r || {};
    var n = {};
    function s(h, v) {
      return $.isPlainObject(h) && $.isPlainObject(v)
        ? $.merge(h, v)
        : $.isPlainObject(v)
        ? $.merge({}, v)
        : $.isArray(v)
        ? v.slice()
        : v;
    }
    function o(h) {
      if ($.isUndefined(r[h])) {
        if (!$.isUndefined(t[h])) return s(void 0, t[h]);
      } else return s(t[h], r[h]);
    }
    function l(h) {
      if (!$.isUndefined(r[h])) return s(void 0, r[h]);
    }
    function c(h) {
      if ($.isUndefined(r[h])) {
        if (!$.isUndefined(t[h])) return s(void 0, t[h]);
      } else return s(void 0, r[h]);
    }
    function i(h) {
      if (h in r) return s(t[h], r[h]);
      if (h in t) return s(void 0, t[h]);
    }
    var u = {
      url: l,
      method: l,
      data: l,
      baseURL: c,
      transformRequest: c,
      transformResponse: c,
      paramsSerializer: c,
      timeout: c,
      timeoutMessage: c,
      withCredentials: c,
      adapter: c,
      responseType: c,
      xsrfCookieName: c,
      xsrfHeaderName: c,
      onUploadProgress: c,
      onDownloadProgress: c,
      decompress: c,
      maxContentLength: c,
      maxBodyLength: c,
      beforeRedirect: c,
      transport: c,
      httpAgent: c,
      httpsAgent: c,
      cancelToken: c,
      socketPath: c,
      responseEncoding: c,
      validateStatus: i,
    };
    return (
      $.forEach(Object.keys(t).concat(Object.keys(r)), function (v) {
        var d = u[v] || o,
          C = d(v);
        ($.isUndefined(C) && d !== i) || (n[v] = C);
      }),
      n
    );
  },
  we,
  it;
function xt() {
  return it || ((it = 1), (we = { version: "0.27.2" })), we;
}
var Kr = xt().version,
  P = J,
  qe = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  function (e, t) {
    qe[e] = function (n) {
      return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  }
);
var lt = {};
qe.transitional = function (t, r, n) {
  function s(o, l) {
    return (
      "[Axios v" +
      Kr +
      "] Transitional option '" +
      o +
      "'" +
      l +
      (n ? ". " + n : "")
    );
  }
  return function (o, l, c) {
    if (t === !1)
      throw new P(
        s(l, " has been removed" + (r ? " in " + r : "")),
        P.ERR_DEPRECATED
      );
    return (
      r &&
        !lt[l] &&
        ((lt[l] = !0),
        console.warn(
          s(
            l,
            " has been deprecated since v" +
              r +
              " and will be removed in the near future"
          )
        )),
      t ? t(o, l, c) : !0
    );
  };
};
function Xr(e, t, r) {
  if (typeof e != "object")
    throw new P("options must be an object", P.ERR_BAD_OPTION_VALUE);
  for (var n = Object.keys(e), s = n.length; s-- > 0; ) {
    var o = n[s],
      l = t[o];
    if (l) {
      var c = e[o],
        i = c === void 0 || l(c, o, e);
      if (i !== !0)
        throw new P("option " + o + " must be " + i, P.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0) throw new P("Unknown option " + o, P.ERR_BAD_OPTION);
  }
}
var Zr = { assertOptions: Xr, validators: qe },
  Ut = R,
  en = Et,
  ct = Ar,
  ut = Yr,
  ne = $t,
  tn = Tt,
  Pt = Zr,
  z = Pt.validators;
function W(e) {
  (this.defaults = e),
    (this.interceptors = { request: new ct(), response: new ct() });
}
W.prototype.request = function (t, r) {
  typeof t == "string" ? ((r = r || {}), (r.url = t)) : (r = t || {}),
    (r = ne(this.defaults, r)),
    r.method
      ? (r.method = r.method.toLowerCase())
      : this.defaults.method
      ? (r.method = this.defaults.method.toLowerCase())
      : (r.method = "get");
  var n = r.transitional;
  n !== void 0 &&
    Pt.assertOptions(
      n,
      {
        silentJSONParsing: z.transitional(z.boolean),
        forcedJSONParsing: z.transitional(z.boolean),
        clarifyTimeoutError: z.transitional(z.boolean),
      },
      !1
    );
  var s = [],
    o = !0;
  this.interceptors.request.forEach(function (C) {
    (typeof C.runWhen == "function" && C.runWhen(r) === !1) ||
      ((o = o && C.synchronous), s.unshift(C.fulfilled, C.rejected));
  });
  var l = [];
  this.interceptors.response.forEach(function (C) {
    l.push(C.fulfilled, C.rejected);
  });
  var c;
  if (!o) {
    var i = [ut, void 0];
    for (
      Array.prototype.unshift.apply(i, s),
        i = i.concat(l),
        c = Promise.resolve(r);
      i.length;

    )
      c = c.then(i.shift(), i.shift());
    return c;
  }
  for (var u = r; s.length; ) {
    var h = s.shift(),
      v = s.shift();
    try {
      u = h(u);
    } catch (d) {
      v(d);
      break;
    }
  }
  try {
    c = ut(u);
  } catch (d) {
    return Promise.reject(d);
  }
  for (; l.length; ) c = c.then(l.shift(), l.shift());
  return c;
};
W.prototype.getUri = function (t) {
  t = ne(this.defaults, t);
  var r = tn(t.baseURL, t.url);
  return en(r, t.params, t.paramsSerializer);
};
Ut.forEach(["delete", "get", "head", "options"], function (t) {
  W.prototype[t] = function (r, n) {
    return this.request(
      ne(n || {}, { method: t, url: r, data: (n || {}).data })
    );
  };
});
Ut.forEach(["post", "put", "patch"], function (t) {
  function r(n) {
    return function (o, l, c) {
      return this.request(
        ne(c || {}, {
          method: t,
          headers: n ? { "Content-Type": "multipart/form-data" } : {},
          url: o,
          data: l,
        })
      );
    };
  }
  (W.prototype[t] = r()), (W.prototype[t + "Form"] = r(!0));
});
var rn = W,
  ye,
  dt;
function nn() {
  if (dt) return ye;
  dt = 1;
  var e = te();
  function t(r) {
    if (typeof r != "function")
      throw new TypeError("executor must be a function.");
    var n;
    this.promise = new Promise(function (l) {
      n = l;
    });
    var s = this;
    this.promise.then(function (o) {
      if (!!s._listeners) {
        var l,
          c = s._listeners.length;
        for (l = 0; l < c; l++) s._listeners[l](o);
        s._listeners = null;
      }
    }),
      (this.promise.then = function (o) {
        var l,
          c = new Promise(function (i) {
            s.subscribe(i), (l = i);
          }).then(o);
        return (
          (c.cancel = function () {
            s.unsubscribe(l);
          }),
          c
        );
      }),
      r(function (l) {
        s.reason || ((s.reason = new e(l)), n(s.reason));
      });
  }
  return (
    (t.prototype.throwIfRequested = function () {
      if (this.reason) throw this.reason;
    }),
    (t.prototype.subscribe = function (n) {
      if (this.reason) {
        n(this.reason);
        return;
      }
      this._listeners ? this._listeners.push(n) : (this._listeners = [n]);
    }),
    (t.prototype.unsubscribe = function (n) {
      if (!!this._listeners) {
        var s = this._listeners.indexOf(n);
        s !== -1 && this._listeners.splice(s, 1);
      }
    }),
    (t.source = function () {
      var n,
        s = new t(function (l) {
          n = l;
        });
      return { token: s, cancel: n };
    }),
    (ye = t),
    ye
  );
}
var Ee, ft;
function an() {
  return (
    ft ||
      ((ft = 1),
      (Ee = function (t) {
        return function (n) {
          return t.apply(null, n);
        };
      })),
    Ee
  );
}
var Re, ht;
function sn() {
  if (ht) return Re;
  ht = 1;
  var e = R;
  return (
    (Re = function (r) {
      return e.isObject(r) && r.isAxiosError === !0;
    }),
    Re
  );
}
var mt = R,
  on = bt,
  K = rn,
  ln = $t,
  cn = Ne;
function Nt(e) {
  var t = new K(e),
    r = on(K.prototype.request, t);
  return (
    mt.extend(r, K.prototype, t),
    mt.extend(r, t),
    (r.create = function (s) {
      return Nt(ln(e, s));
    }),
    r
  );
}
var O = Nt(cn);
O.Axios = K;
O.CanceledError = te();
O.CancelToken = nn();
O.isCancel = Ot();
O.VERSION = xt().version;
O.toFormData = Ct;
O.AxiosError = J;
O.Cancel = O.CanceledError;
O.all = function (t) {
  return Promise.all(t);
};
O.spread = an();
O.isAxiosError = sn();
Te.exports = O;
Te.exports.default = O;
(function (e) {
  e.exports = Te.exports;
})(gt);
const _ = rr(gt.exports),
  S = "https://api.realworld.io/api/";
let qt = "";
const Fe = (e) => {
    localStorage.setItem("token", e), Le("token", e);
  },
  Ft = (e) => (
    delete e.username,
    _.put(`${S}user`, { user: e }, { headers: { authorization: A() } })
  ),
  un = async (e) => {
    try {
      const t = await _.post(`${S}users/login`, { user: e }),
        { token: r } = t.data.user;
      Fe(r);
    } catch (t) {
      console.error("error logging in", t);
    }
  },
  kt = () => {
    De(""), localStorage.removeItem("token");
  },
  ae = async () => {
    try {
      return (await _.get(`${S}user`, { headers: { authorization: A() } })).data
        .user;
    } catch {
      return null;
    }
  },
  ke = (e) => (
    e === void 0 && (e = document.cookie),
    ((e == null ? void 0 : e.split(";")) || []).reduce((n, s) => {
      const [o, l] = s.split("=");
      return (n[o.trim()] = l), n;
    }, {})
  ),
  dn = (e) => ke()[e],
  Le = (e, t) => {
    try {
      document.cookie = `${e}=${t}`;
    } catch {}
  },
  A = () => {
    try {
      const e = qt || localStorage.getItem("token");
      return e ? `Token ${e}` : null;
    } catch {
      return null;
    }
  },
  De = (e) => {
    (qt = e), Le("token", e);
  },
  fn = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        storeToken: Fe,
        updateUser: Ft,
        login: un,
        logOut: kt,
        getUser: ae,
        getCookies: ke,
        getCookie: dn,
        setCookie: Le,
        getAuthToken: A,
        saveTempCookie: De,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
const hn = y(
  f((e) => {
    const { user: t } = e;
    return a("div", {
      className: "menu",
      children: [
        a("div", {
          className: "menu-item",
          children: a("a", { href: "/", children: "Home" }),
        }),
        t != null && t.username
          ? a(w, {
              children: [
                a("div", {
                  class: "menu-item",
                  children: a("a", {
                    href: "/settings",
                    class: "settings",
                    children: [a("i", { class: "ion-gear-a" }), "Settings"],
                  }),
                }),
                a("div", {
                  className: "menu-item",
                  children: a("a", {
                    href: "/editor",
                    class: "authenticated",
                    children: [
                      a("i", { class: "ion-compose" }),
                      " New Article",
                    ],
                  }),
                }),
                a("div", {
                  class: "menu-item",
                  children: a("a", {
                    href: `/profile/${t.username}`,
                    children: [
                      a("img", {
                        get src() {
                          return t.image;
                        },
                        [p]: { src: g(t, "image") },
                      }),
                      t == null ? void 0 : t.username,
                    ],
                  }),
                }),
              ],
            })
          : a(w, {
              children: [
                " ",
                a("div", {
                  className: "menu-item",
                  children: a("a", { href: "/register", children: "Sign up" }),
                }),
                a("div", {
                  className: "menu-item",
                  children: a("a", { href: "/signin", children: "Sign in" }),
                }),
              ],
            }),
      ],
      [p]: { children: !1 },
    });
  }, "s_x0zYRXJwTCA")
);
const mn = y(
  f((e) => {
    const { user: t } = e;
    return a("div", {
      className: "header-container",
      children: a("div", {
        class: "row",
        children: [
          a("div", { className: "application-name-header", children: "Qwik" }),
          a(hn, { user: t, [p]: { user: !0 } }),
        ],
      }),
    });
  }, "s_N0EkpR3Hs08")
);
let je;
const pn = async (e) => {
    const { request: t } = e,
      n = ke(t.headers.get("cookie")).token;
    De(n), (je = await ae());
  },
  pt = y(
    f(
      () =>
        a(w, {
          children: [
            a(mn, { user: je, [p]: { user: !0 } }),
            a("main", { children: a(er, {}) }),
          ],
        }),
      "s_42v99d5vQ0E"
    )
  ),
  vn = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        get user() {
          return je;
        },
        onGet: pn,
        Layout: pt,
        default: pt,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
const gn = y(
  f(
    (e) =>
      a("div", {
        className: "tags-container",
        children: [
          a("p", { children: "Popular tags" }),
          a("div", {
            children: e.tags.map((t) =>
              a("a", {
                href: "javascript:void(0)",
                onClick$: f(
                  () => {
                    const [r, n] = b();
                    return r.tagSelected$(n);
                  },
                  "s_TMYX7PuYaHU",
                  [e, t]
                ),
                className: "tag-chip",
                children: t,
              })
            ),
          }),
        ],
      }),
    "s_1v06nvJV1DQ"
  )
);
const bn = (e, t, r) => {
    (e.activeTab = t), r(t);
  },
  Lt = y(
    f((e) => {
      var r;
      const t = L(
        {
          activeTab:
            ((r = e.activeTab) == null ? void 0 : r.label) || e.tabs[0],
        },
        { recursive: !0 }
      );
      return a("ul", {
        class: "nav-list",
        children: e.tabs.map((n) => {
          var s;
          return a("li", {
            class:
              n !== ((s = e.activeTab) == null ? void 0 : s.label)
                ? "nav-item"
                : "nav-item active",
            children: a("a", {
              onClick$: f(
                () => {
                  const [o, l, c] = b();
                  return bn(l, c, o.navigationChange$);
                },
                "s_AWJH06rg6N4",
                [e, t, n]
              ),
              children: [" ", n],
            }),
          });
        }),
      });
    }, "s_v0WP50GwSBA")
  ),
  Dt = (e) =>
    new Date(e).toLocaleDateString("default", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
const jt = y(
  f((e) => {
    const { user: t, followingChanged: r, following: n } = e,
      s = L({ following: n }, { recursive: !0, reactive: !0 }),
      o = f(
        async (i, u) => {
          const [h, v] = b(),
            d = A();
          if (!d) {
            console.error("cant change follow state");
            return;
          }
          const C = await _.request({
            url: `${S}profiles/${i.username}/follow`,
            method: u ? "post" : "delete",
            headers: { authorization: d },
          });
          return (i.following = u), (v.following = u), h && h(u), C.status;
        },
        "s_2h7KadHSQzE",
        [r, s]
      ),
      l = f(
        async (i) => {
          const [u] = b();
          return u(i, !0);
        },
        "s_i3TsH9K5zHA",
        [o]
      ),
      c = f(
        async (i) => {
          const [u] = b();
          return u(i, !1);
        },
        "s_tYlbSh0ztf8",
        [o]
      );
    return s.following
      ? a("button", {
          class: "btn btn-sm action-btn btn-outline-secondary",
          onClick$: f(
            () => {
              const [i, u] = b();
              return i(u);
            },
            "s_z7Nq5uFhz44",
            [c, t]
          ),
          children: [
            a("i", { class: "ion-minus-round" }),
            " \xA0 Unfollow ",
            g(t, "username"),
          ],
        })
      : a("button", {
          class: "btn btn-sm action-btn btn-outline-secondary",
          onClick$: f(
            () => {
              const [i, u] = b();
              return i(u);
            },
            "s_VmL1hUkjcx8",
            [l, t]
          ),
          children: [
            a("i", { class: "ion-plus-round" }),
            " \xA0 Follow ",
            g(t, "username"),
          ],
        });
  }, "s_OqTpRjcc6ZU")
);
const wn = (e) =>
    a(w, {
      children: [e.favorited ? "Unfavorite Article" : "Favorite Article", " "],
      [p]: { children: !1 },
    }),
  yn = (e, t) => (t ? `(${e})` : e),
  En = (e) => {
    const { article: t, showText: r, markAsFavorite: n } = e;
    return a(w, {
      children: n
        ? a("button", {
            class: "btn btn-sm btn-outline-primary",
            onClick$: f(
              async () => {
                const [s, o] = b();
                return await o(s);
              },
              "s_UwTikFAPo0s",
              [t, n]
            ),
            children: [
              a("i", { class: "ion-heart" }),
              r ? a(w, { children: wn(t) }) : a(w, {}),
              a("span", {
                class: "counter",
                children: yn(t.favoritesCount, !!r),
              }),
            ],
            [p]: { children: !1 },
          })
        : a(w, {}),
      [p]: { children: !1 },
    });
  },
  Be = (e) => {
    const { article: t, showFavoriteText: r } = e,
      { author: n } = t;
    return a("div", {
      class: "article-meta",
      children: [
        a("a", {
          href: `/profile/${n.username}`,
          children: a("img", {
            get src() {
              return n.image;
            },
            get alt() {
              return n.username;
            },
            [p]: { src: g(n, "image"), alt: g(n, "username") },
          }),
        }),
        a("div", {
          children: [
            a("div", {
              children: a("a", {
                class: "author",
                href: `/profile/${t.author.username}`,
                children: [" ", g(t.author, "username")],
              }),
            }),
            a("div", {
              children: a("span", { class: "date", children: Dt(t.createdAt) }),
            }),
          ],
        }),
        e.authenticated
          ? a(w, {
              children: [
                e.showFollowUser
                  ? a(jt, {
                      get user() {
                        return t.author;
                      },
                      get following() {
                        return t.author.following;
                      },
                      [p]: {
                        user: g(t, "author"),
                        following: g(t.author, "following"),
                      },
                    })
                  : a(w, {}),
                e.markAsFavorite
                  ? a(En, {
                      article: t,
                      showText: r,
                      get markAsFavorite() {
                        return e.markAsFavorite;
                      },
                      [p]: {
                        article: !0,
                        showText: !0,
                        markAsFavorite: g(e, "markAsFavorite"),
                      },
                    })
                  : a(w, {}),
              ],
              [p]: { children: !1 },
            })
          : a(w, {}),
      ],
      [p]: { children: !1 },
    });
  };
const Me = y(
  f((e) => {
    const { onDelete$: t } = e;
    return a("ul", {
      class: "tag-list",
      children: e.tagsList.map((r) =>
        a("li", {
          class: "tag-list-item",
          children: [
            t
              ? a("i", {
                  class: "ion-close-round tag-delete-icon",
                  onClick$: f(
                    () => {
                      const [n, s] = b();
                      return n(s);
                    },
                    "s_LUCN00zgmeM",
                    [t, r]
                  ),
                })
              : null,
            r,
          ],
          [p]: { children: !1 },
        })
      ),
    });
  }, "s_7yrRCx6kKcA")
);
const Rn = y(
    f((e) => {
      const {
        article: t,
        authenticated: r,
        showFollowUser: n,
        markAsFavorite: s,
      } = e;
      return a("div", {
        children: a("div", {
          class: "article-container",
          children: [
            a(Be, {
              markAsFavorite: s,
              showFollowUser: n,
              article: t,
              authenticated: r,
              [p]: {
                markAsFavorite: !0,
                showFollowUser: !0,
                article: !0,
                authenticated: !0,
              },
            }),
            a("div", {
              class: "article-title",
              children: a("a", {
                href: `/article/${t.slug}`,
                children: [" ", g(t, "title")],
              }),
            }),
            a("div", { class: "description", children: g(t, "description") }),
            a("div", { class: "read-more", children: "Read mode..." }),
            a(Me, {
              get tagsList() {
                return t.tagList;
              },
              [p]: { tagsList: g(t, "tagList") },
            }),
          ],
        }),
      });
    }, "s_qnC01OTHiLo")
  ),
  Z = (e) => {
    const t = f(
      async (r) => {
        const [n] = b(),
          s = `${S}/articles/${r.slug}/favorite`,
          o = { headers: { authorization: A() } },
          l = r.favorited ? await _.delete(s, o) : await _.post(s, {}, o),
          { favoritesCount: c } = l.data.article;
        (r.favoritesCount = c),
          (r.favorited = !r.favorited),
          n.articlesStateChanged && n.articlesStateChanged();
      },
      "s_zaO67WT8WTI",
      [e]
    );
    return a("div", {
      class: "articles-list",
      children: e.articles.length
        ? e.articles.map((r) =>
            a(Rn, {
              article: r,
              markAsFavorite: t,
              get showFollowUser() {
                return e.showFollowUser;
              },
              get authenticated() {
                return e.authenticated;
              },
              [p]: {
                showFollowUser: g(e, "showFollowUser"),
                authenticated: g(e, "authenticated"),
              },
            })
          )
        : "No articles here... yet",
      [p]: { children: !1 },
    });
  };
const _n = async () => {
    try {
      return (await _.get(`${S}/tags`)).data.tags;
    } catch {
      return console.error("Error getting tags"), [];
    }
  },
  Bt = async () => {
    const e = `${S}articles/feed`;
    try {
      return (
        await _.get(e, { headers: { authorization: A() } })
      ).data.articles.map((r) => ({
        ...r,
        author: { ...r.author, imageUrl: r.author.image },
      }));
    } catch {
      return [];
    }
  },
  Sn = async (e = "") => {
    const t = `${S}/articles?limit=10&offset=0`;
    return (
      await _.get(e ? `${t}&tag=${e}` : t, { headers: { authorization: A() } })
    ).data.articles.map((n) => ({
      ...n,
      author: { ...n.author, imageUrl: n.author.image },
    }));
  },
  An = (e, t) => {
    const r = e.startsWith("#") ? e.substring(1) : "";
    (t.activeTab = t.tabs.find((n) => n.label === e)),
      Bt().then((n) => {
        t.personalFeed = n;
      }),
      (t.selectedTag = r);
  },
  Cn = async (e, t) => {
    (t.selectedTag = e), (t.tabs[2].label = `#${e}`), (t.activeTab = t.tabs[2]);
  },
  Tn = y(
    f(() => {
      var c;
      const e = [
          { label: "Your Feed" },
          { label: "Global Feed" },
          { label: "" },
        ],
        t = !!A(),
        r = L(
          {
            count: 0,
            tags: [],
            articles: [],
            personalFeed: [],
            selectedTag: "",
            tabs: e,
            activeTab: e[1],
          },
          { recursive: !0 }
        ),
        n = f(
          () => {
            const [i] = b();
            i.count++;
          },
          "s_bJqynq84JNE",
          [r]
        ),
        s = F(
          f(({ cleanup: i }) => {
            const u = new AbortController();
            return i(() => u.abort()), _n();
          }, "s_8qL0FtJ799M")
        ),
        o = F(
          f(
            ({ cleanup: i, track: u }) => {
              const [h] = b(),
                v = new AbortController();
              return (
                u(() => ({ count: h.count, selectedTag: h.selectedTag })),
                i(() => v.abort()),
                Bt()
              );
            },
            "s_xfr0dVJs0nA",
            [r]
          )
        ),
        l = F(
          f(
            ({ track: i, cleanup: u }) => {
              const [h] = b(),
                v = new AbortController();
              return (
                i(() => ({ count: h.count, selectedTag: h.selectedTag })),
                u(() => v.abort()),
                Sn(h.selectedTag)
              );
            },
            "s_5GB43OhxwlQ",
            [r]
          )
        );
      return a("div", {
        class: "my-app p-20",
        children: [
          a("div", {
            class: "banner",
            children: [
              a("h1", { children: "Qwik" }),
              a("p", {
                children: "A place to share your knowledge about Qwik",
              }),
            ],
          }),
          a("div", {
            class: "content-container",
            children: [
              a("div", {
                class: "feed",
                children: [
                  a("div", {
                    children: a(Lt, {
                      tabs: r.tabs.map((i) => i.label),
                      navigationChange$: f(
                        (i) => {
                          const [u] = b();
                          return An(i, u);
                        },
                        "s_80ZkdeKD3Yc",
                        [r]
                      ),
                      get activeTab() {
                        return r.activeTab;
                      },
                      [p]: {
                        navigationChange$: !0,
                        activeTab: g(r, "activeTab"),
                      },
                    }),
                  }),
                  ((c = r.activeTab) == null ? void 0 : c.label) !== "Your Feed"
                    ? a(k, {
                        value: l,
                        onResolved: (i) =>
                          a(Z, {
                            articles: i,
                            authenticated: t,
                            articlesStateChanged: n,
                          }),
                        [p]: { value: !0, onResolved: !0 },
                      })
                    : a(k, {
                        value: o,
                        onResolved: (i) =>
                          a(Z, {
                            articles: i,
                            authenticated: t,
                            articlesStateChanged: n,
                          }),
                        [p]: { value: !0, onResolved: !0 },
                      }),
                ],
                [p]: { children: !1 },
              }),
              a(k, {
                value: s,
                onRejected: (i) =>
                  a(w, {
                    children: [
                      "Error: ",
                      g(i, "message"),
                      " ",
                      g(i, "stackTrace"),
                    ],
                  }),
                onResolved: (i) =>
                  a(gn, {
                    tags: i,
                    tagSelected$: f(
                      (u) => {
                        const [h] = b();
                        return Cn(u, h);
                      },
                      "s_VKoV14GbX3E",
                      [r]
                    ),
                    [p]: { tagSelected$: !0 },
                  }),
                [p]: { value: !0, onRejected: !0, onResolved: !0 },
              }),
            ],
          }),
        ],
      });
    }, "s_z2jCgFrcwVE")
  ),
  On = y(f(() => a(Tn, {}), "s_GthzHEB0UDE")),
  $n = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: On },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
const Mt = f((e, t) => {
    if (e.key !== "Enter") return;
    const n = e.target,
      { value: s } = n;
    !s ||
      t.tags.includes(s) ||
      ((t.tags = [...t.tags, s]), (n.value = ""), e.preventDefault());
  }, "s_KG72EULq5CU"),
  It = (e, t) => {
    t.tags = [...t.tags.filter((r) => r !== e)];
  },
  zt = (e, t) => {
    const r = e.target;
    (t.errors = {}), e.preventDefault();
    const n = {
      title: r.querySelector('[name="title"]').value,
      description: r.querySelector('[name="description').value,
      body: r.querySelector('[name="body"]').value,
      tagList: t.tags,
    };
    if (
      (n.title || (t.errors.title = "cannot be blank"),
      n.description || (t.errors.description = "cannot be blank"),
      n.body || (t.errors.body = "cannot be blank"),
      !Object.keys(t.errors).length)
    )
      return (
        _.post(
          `${S}articles`,
          { article: n },
          { headers: { authorization: A() } }
        )
          .then(() => {
            window.location.href = "/";
          })
          .catch((s) => {
            const { errors: o } = s.response.data;
            t.errors = o;
          }),
        !1
      );
  },
  xn = y(
    f(() => {
      const e = L({ tags: [], errors: {} });
      return (
        Ce(
          f(
            () => {
              var r;
              const [t] = b();
              (r = document.querySelector("form")) == null ||
                r.addEventListener("submit", (n) => zt(n, t));
            },
            "s_F0ypgMWg72Q",
            [e]
          )
        ),
        a("div", {
          class: "container",
          children: [
            a("div", {
              class: "errors",
              children: Object.entries(e.errors).map((t) =>
                a("div", { children: [t[0], " ", t[1]] })
              ),
            }),
            a("form", {
              children: [
                a("input", { placeholder: "Article title", name: "title" }),
                a("input", {
                  placeholder: "What is this article about?",
                  name: "description",
                }),
                a("textarea", {
                  rows: 8,
                  name: "body",
                  placeholder: "Write your article (in markdown)",
                }),
                a("input", {
                  name: "tagsList",
                  placeholder: "enter tags",
                  onKeyDown$: f(
                    (t) => {
                      const [r] = b();
                      return Mt(t, r);
                    },
                    "s_3oHYt18CLtU",
                    [e]
                  ),
                }),
                a("button", { children: "Publish Article" }),
              ],
            }),
            a(Me, {
              get tagsList() {
                return e.tags;
              },
              onDelete$: f(
                (t) => {
                  const [r] = b();
                  return It(t, r);
                },
                "s_m9Naobhs100",
                [e]
              ),
              [p]: { tagsList: g(e, "tags"), onDelete$: !0 },
            }),
          ],
        })
      );
    }, "s_5ysWeBz40eU")
  ),
  Un = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        onTagsKeyDown: Mt,
        deleteTag: It,
        submitArticleData: zt,
        default: xn,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
const Se = () => {
    var o, l, c;
    const e =
        (o = document.querySelector('input[name="username"]')) == null
          ? void 0
          : o.value,
      t =
        (l = document.querySelector('input[name="password"]')) == null
          ? void 0
          : l.value,
      r =
        (c = document.querySelector('input[name="email"]')) == null
          ? void 0
          : c.value,
      n = { username: e, email: r, password: t };
    return (
      _.post(`${S}/users`, { user: n }).then((i) => {
        const u = i.data.user.token;
        Fe(u), u && (window.location.href = "/");
      }),
      !1
    );
  },
  Pn = y(
    f(() => {
      const e = L({ username: "", passowrd: "", email: "" });
      return a("form", {
        onSubmit$: f(() => Se(), "s_wO0DUje1mMQ"),
        children: a("div", {
          class: "container",
          children: [
            a("h1", { children: "Sign Up" }),
            a("fieldset", {
              class: "form-group",
              children: [
                a("input", {
                  name: "username",
                  placeholder: "username",
                  get value() {
                    return e.username;
                  },
                  [p]: { value: g(e, "username") },
                }),
                a("input", {
                  placeholder: "email",
                  name: "email",
                  type: "email",
                  get value() {
                    return e.email;
                  },
                  [p]: { value: g(e, "email") },
                }),
                a("input", {
                  placeholder: "password",
                  name: "password",
                  type: "password",
                  get value() {
                    return e.passowrd;
                  },
                  [p]: { value: g(e, "passowrd") },
                }),
              ],
            }),
            a("button", {
              onClick$: f(() => Se(), "s_FueC2WNvmfM"),
              children: "Sign Up",
            }),
          ],
        }),
      });
    }, "s_0vOoberVPlU")
  ),
  Nn = Object.freeze(
    Object.defineProperty(
      { __proto__: null, signUp: Se, default: Pn },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
let T;
const qn = async () => {
    T = await ae();
  },
  Ht = () => {
    kt(), (window.location.href = "/");
  },
  Wt = async (e) => {
    const t = e.target,
      r = {
        image: t.querySelector('[name="image"]').value,
        email: t.querySelector('[name="email"]').value,
        username: t.querySelector('[name="username"]').value,
        bio: t.querySelector('[name="bio"]').value,
        password: t.querySelector('[name="newPassword"]').value,
      };
    try {
      (await Ft(r)).status === 200 && (window.location.href = "/");
    } catch (n) {
      console.error(n);
    }
    return e.preventDefault(), !1;
  },
  Fn = y(
    f(
      () => (
        tr(
          "load",
          f(() => {
            document.querySelector("form").addEventListener("submit", Wt);
          }, "s_6Mw9RTC0v04")
        ),
        a(w, {
          children: [
            a("div", {
              className: "contianer",
              children: [
                a("h1", { children: "Your Settings" }),
                a("form", {
                  method: "post",
                  children: a("fieldset", {
                    children: [
                      a("input", {
                        name: "image",
                        placeholder: "Image URL",
                        value: T == null ? void 0 : T.image,
                      }),
                      a("input", {
                        name: "username",
                        placeholder: "username",
                        value: T == null ? void 0 : T.username,
                      }),
                      a("input", {
                        name: "email",
                        type: "email",
                        placeholder: "email",
                        value: T == null ? void 0 : T.email,
                      }),
                      a("textarea", {
                        name: "bio",
                        placeholder: "Short BIO about you",
                        rows: 8,
                        children: T == null ? void 0 : T.bio,
                      }),
                      a("input", {
                        name: "newPassword",
                        placeholder: "New password",
                        type: "password",
                      }),
                      a("button", { children: "Update settings" }),
                    ],
                  }),
                }),
              ],
            }),
            a("hr", {}),
            a("div", {
              children: a("button", {
                class: "btn btn-outline-danger",
                onClick$: f(() => Ht(), "s_w8hpn36lq0M"),
                children: "Or click here to log out",
              }),
            }),
          ],
        })
      ),
      "s_HpTGPGghm0M"
    )
  ),
  kn = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        get user() {
          return T;
        },
        onGet: qn,
        doLogOut: Ht,
        submitUserData: Wt,
        default: Fn,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Jt = (e) => {
    const t = e.target,
      r = {
        email: t.querySelector("[name='email']").value,
        password: t.querySelector("[name='password']").value,
      };
    return (
      Promise.resolve()
        .then(() => fn)
        .then((n) => n.login(r))
        .then(() => {
          window.location.href = "/";
        }),
      e.preventDefault(),
      !1
    );
  },
  Ln = y(
    f(
      () => (
        Ce(
          f(() => {
            setTimeout(() => {
              document.querySelector("form").addEventListener("submit", Jt);
            });
          }, "s_s4xG6uSrEg4")
        ),
        a(w, {
          children: a("div", {
            class: "container",
            children: [
              a("h1", { children: "Sign in" }),
              a("form", {
                children: [
                  a("fieldset", {
                    children: [
                      a("input", { placeholder: "email", name: "email" }),
                      a("input", {
                        placeholder: "password",
                        type: "password",
                        name: "password",
                      }),
                    ],
                  }),
                  a("button", { children: "Sign in" }),
                ],
              }),
            ],
          }),
        })
      ),
      "s_NhvqLaQNKg4"
    )
  ),
  Dn = Object.freeze(
    Object.defineProperty(
      { __proto__: null, submitUserData: Jt, default: Ln },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
const jn = y(
  f(
    (e) =>
      a("div", {
        class: "card",
        children: [
          a("p", { children: [" ", g(e, "body")] }),
          a("div", {
            class: "card-footer",
            children: [
              a("img", {
                get src() {
                  return e.author.image;
                },
                [p]: { src: g(e.author, "image") },
              }),
              a("div", { children: g(e.author, "username") }),
              a("div", { children: Dt(e.updatedAt) }),
            ],
          }),
        ],
      }),
    "s_0TAq7Xle1TM"
  )
);
const Bn = y(
  f(
    (e) =>
      a("div", {
        class: "banner",
        children: a("div", {
          class: "container",
          children: [
            a("h1", { children: g(e.article, "title") }),
            a(Be, {
              get article() {
                return e.article;
              },
              showFavoriteText: !0,
              showFollowUser: !0,
              get authenticated() {
                return e.authenticated;
              },
              [p]: {
                article: g(e, "article"),
                showFavoriteText: !0,
                showFollowUser: !0,
                authenticated: g(e, "authenticated"),
              },
            }),
          ],
        }),
      }),
    "s_70ZY5hLcK6E"
  )
);
const Mn = (e, t) => {
    const r = e.target;
    e.preventDefault();
    const n = r.querySelector('[name="comment"]').value;
    return t(n), !1;
  },
  In = y(
    f((e) => {
      const { user: t, postComment: r } = e;
      return (
        Ce(
          f(
            () => {
              var s;
              const [n] = b();
              (s = document.querySelector("form")) == null ||
                s.addEventListener("submit", (o) => Mn(o, n));
            },
            "s_hX7lMFYx0tY",
            [r]
          )
        ),
        a("div", {
          class: "card comment-form",
          children: a("form", {
            children: [
              a("div", {
                children: a("textarea", {
                  name: "comment",
                  placeholder: "Your comment",
                }),
              }),
              a("div", {
                class: "card-footer",
                children: [
                  a("div", {
                    class: "author",
                    children: [
                      a("div", {
                        children: a("img", {
                          get src() {
                            return t.image;
                          },
                          [p]: { src: g(t, "image") },
                        }),
                      }),
                      a("div", {
                        children: a("span", { children: g(t, "username") }),
                      }),
                    ],
                  }),
                  a("button", { type: "submit", children: "Post comment" }),
                ],
              }),
            ],
          }),
        })
      );
    }, "s_2ShPURnoq9c")
  );
let Ie;
const zn = async () => {
    Ie = await ae();
  },
  Qt = f((e, t) => {
    _.post(
      `${S}articles/${e.name}/comments`,
      { comment: { body: t } },
      { headers: { authorization: A() } }
    ).then(() => {
      e.commentChanged = !0;
    });
  }, "s_W51ngDLuKDM"),
  Hn = y(
    f(() => {
      const e = vt(),
        t = L({ name: e.params.articleName, commentChanged: !1 }),
        r = !!A(),
        n = F(
          f(
            async ({ track: s, cleanup: o }) => {
              const [l] = b();
              s(() => l.name), s(() => l.commentChanged);
              const c = new AbortController();
              o(() => c.abort());
              const u = await (
                await _.get(`${S}/articles/${l.name}`)
              ).data.article;
              u.author.imageUrl = u.author.image;
              const h = await _.get(`${S}articles/${l.name}/comments`, {
                headers: { authorization: A() },
              });
              return (
                (u.comments = h.data.comments.map((v) => ({
                  ...v,
                  author: { ...v.author, imageUrl: v.author.image },
                }))),
                u
              );
            },
            "s_qNQKMPyXq0Y",
            [t]
          )
        );
      return a(w, {
        children: a(k, {
          value: n,
          onResolved: (s) =>
            a("div", {
              children: [
                a(Bn, { article: s, authenticated: r }),
                a("div", {
                  class: "container",
                  children: [
                    a(Me, {
                      get tagsList() {
                        return s.tagList;
                      },
                      [p]: { tagsList: g(s, "tagList") },
                    }),
                    a("div", {
                      class: "meta-container",
                      children: a(Be, {
                        article: s,
                        showFavoriteText: !0,
                        authenticated: r,
                        [p]: { showFavoriteText: !0 },
                      }),
                    }),
                    r
                      ? a(In, {
                          user: Ie,
                          postComment: f(
                            (o) => {
                              const [l] = b();
                              return Qt(l, o);
                            },
                            "s_xiOONLugCh0",
                            [t]
                          ),
                          [p]: { user: !0 },
                        })
                      : a(w, {
                          children: [
                            a("a", { href: "/signin", children: "Sign in" }),
                            " or",
                            " ",
                            a("a", { href: "/register", children: "Sign up" }),
                            " to add comments on this article.",
                          ],
                        }),
                    s.comments.map((o) => a(jn, { ...o })),
                  ],
                  [p]: { children: !1 },
                }),
              ],
            }),
          [p]: { value: !0, onResolved: !0 },
        }),
      });
    }, "s_Pud0ekR52iE")
  ),
  Wn = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        get currentUser() {
          return Ie;
        },
        onGet: zn,
        postComment: Qt,
        default: Hn,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Ae = async (e, t) => {
    const n = `${S}articles?${e === "Authored" ? "author" : "favorited"}=${t}`;
    return (await _.get(n, { headers: { authorization: A() } })).data.articles;
  },
  Vt = (e, t) => {
    t.activeTab = e;
  },
  Gt = async (e) => {
    const t = `${S}profiles/${e}`;
    return (await _.get(t, { headers: { authorization: A() } })).data.profile;
  },
  Jn = y(
    f(() => {
      const e = vt(),
        t = [
          { label: "Your Posts", type: "Authored" },
          { label: "Favorited posts", type: "Favorited" },
        ],
        r = L({
          count: 0,
          tags: [],
          articles: [],
          personalFeed: [],
          selectedTag: "",
          tabs: t,
          activeTab: t[0],
          followingMainUser: !1,
          profileName: e.params.profileName,
        }),
        n = F(
          f(
            ({ cleanup: i }) => {
              const [u] = b(),
                h = new AbortController();
              return i(() => h.abort()), Ae("Authored", u.profileName);
            },
            "s_10fvbveklNw",
            [r]
          )
        ),
        s = F(
          f(
            ({ cleanup: i }) => {
              const [u] = b(),
                h = new AbortController();
              return i(() => h.abort()), Ae("Favorited", u.profileName);
            },
            "s_CO0xLhBmays",
            [r]
          )
        ),
        o = F(
          f(
            () => {
              const [i] = b();
              return Gt(i.profileName);
            },
            "s_SiWhVz35RGQ",
            [r]
          )
        ),
        l = !!A(),
        c = f(
          (i) => {
            const [u] = b();
            u.followingMainUser = i;
          },
          "s_PDJwMEdiP0k",
          [r]
        );
      return a("div", {
        class: "my-app p-20",
        children: [
          a("div", {
            class: "banner",
            children: a(k, {
              value: o,
              onPending: () => a(w, { children: "Wait..." }),
              onResolved: (i) =>
                a(w, {
                  children: [
                    a("h1", {
                      children: a("img", {
                        get src() {
                          return i.image;
                        },
                        [p]: { src: g(i, "image") },
                      }),
                    }),
                    a("p", { children: g(i, "username") }),
                    a(jt, {
                      user: i,
                      followingChanged: c,
                      get following() {
                        return i.following;
                      },
                      [p]: { following: g(i, "following") },
                    }),
                  ],
                }),
              [p]: { value: !0, onPending: !0, onResolved: !0 },
            }),
          }),
          a("div", {
            class: "container",
            children: [
              a("div", {
                children: a(Lt, {
                  tabs: r.tabs.map((i) => i.label),
                  navigationChange$: f(
                    (i) => {
                      const [u, h] = b();
                      return Vt(
                        h.find((v) => v.label === i),
                        u
                      );
                    },
                    "s_aIH10didwZo",
                    [r, t]
                  ),
                  get activeTab() {
                    return r.activeTab;
                  },
                  [p]: { navigationChange$: !0, activeTab: g(r, "activeTab") },
                }),
              }),
              a(k, {
                value: s,
                onResolved: (i) =>
                  a("div", {
                    style: {
                      display:
                        r.activeTab.type === "Favorited" ? "block" : "none",
                    },
                    children: a(Z, { articles: i, authenticated: l }),
                  }),
                [p]: { value: !0, onResolved: !0 },
              }),
              a(k, {
                value: n,
                onResolved: (i) =>
                  a("div", {
                    style: {
                      display:
                        r.activeTab.type === "Authored" ? "block" : "none",
                    },
                    children: a(Z, { articles: i, authenticated: l }),
                  }),
                [p]: { value: !0, onResolved: !0 },
              }),
            ],
          }),
        ],
      });
    }, "s_0m8fTfCbNw0")
  ),
  Qn = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        getArticles: Ae,
        onFeedNavigationChange: Vt,
        getProfile: Gt,
        default: Jn,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  q = () => vn,
  Vn = [
    [/^\/$/, [q, () => $n], void 0, "/", ["q-c97d96ac.js", "q-d268a782.js"]],
    [
      /^\/editor\/?$/,
      [q, () => Un],
      void 0,
      "/editor",
      ["q-c97d96ac.js", "q-8346ad65.js"],
    ],
    [
      /^\/register\/?$/,
      [q, () => Nn],
      void 0,
      "/register",
      ["q-c97d96ac.js", "q-794da136.js"],
    ],
    [
      /^\/settings\/?$/,
      [q, () => kn],
      void 0,
      "/settings",
      ["q-c97d96ac.js", "q-7b868b1a.js"],
    ],
    [
      /^\/signin\/?$/,
      [q, () => Dn],
      void 0,
      "/signin",
      ["q-c97d96ac.js", "q-4518e517.js"],
    ],
    [
      /^\/article\/([^/]+?)\/?$/,
      [q, () => Wn],
      ["articleName"],
      "/article/[articleName]",
      ["q-c97d96ac.js", "q-4c827096.js"],
    ],
    [
      /^\/profile\/([^/]+?)\/?$/,
      [q, () => Qn],
      ["profileName"],
      "/profile/[profileName]",
      ["q-c97d96ac.js", "q-679a34b7.js"],
    ],
  ],
  Gn = [],
  Yn = !1,
  Kn = "/",
  Xn = !0,
  ea = {
    routes: Vn,
    menus: Gn,
    trailingSlash: Yn,
    basePathname: Kn,
    cacheModules: Xn,
  };
export {
  Kn as basePathname,
  Xn as cacheModules,
  ea as default,
  Gn as menus,
  Vn as routes,
  Yn as trailingSlash,
};
