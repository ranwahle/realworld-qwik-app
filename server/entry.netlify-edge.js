import M from "./@qwik-city-plan.js";
import W from "./entry.ssr.js";
import "./assets/index.qwik.d1422ab6.js";
var g = Symbol("headers"),
  A,
  F = class {
    constructor() {
      this[A] = {};
    }
    [((A = g), Symbol.iterator)]() {
      return this.entries();
    }
    *keys() {
      for (const t of Object.keys(this[g])) yield t;
    }
    *values() {
      for (const t of Object.values(this[g])) yield t;
    }
    *entries() {
      for (const t of Object.keys(this[g])) yield [t, this.get(t)];
    }
    get(t) {
      return this[g][E(t)] || null;
    }
    set(t, e) {
      const n = E(t);
      this[g][n] = typeof e != "string" ? String(e) : e;
    }
    append(t, e) {
      const n = E(t),
        o = this.has(n) ? `${this.get(n)}, ${e}` : e;
      this.set(t, o);
    }
    delete(t) {
      if (!this.has(t)) return;
      const e = E(t);
      delete this[g][e];
    }
    all() {
      return this[g];
    }
    has(t) {
      return this[g].hasOwnProperty(E(t));
    }
    forEach(t, e) {
      for (const n in this[g])
        this[g].hasOwnProperty(n) && t.call(e, this[g][n], n, this);
    }
  },
  z = /[^a-z0-9\-#$%&'*+.^_`|~]/i;
function E(t) {
  if ((typeof t != "string" && (t = String(t)), z.test(t) || t.trim() === ""))
    throw new TypeError("Invalid character in header field name");
  return t.toLowerCase();
}
function k() {
  return new (typeof Headers == "function" ? Headers : F)();
}
var S = class extends Error {
  constructor(t, e) {
    super(e), (this.status = t);
  }
};
function J(t) {
  return N(t, new S(404, "Not Found"));
}
function U(t, e) {
  const o = _(500, e),
    s = k();
  return (
    s.set("Content-Type", "text/html; charset=utf-8"),
    t.response(
      500,
      s,
      async (r) => {
        r.write(o);
      },
      e
    )
  );
}
function N(t, e) {
  const n = $(e.status, e.message, e.stack),
    o = k();
  return (
    o.set("Content-Type", "text/html; charset=utf-8"),
    t.response(
      e.status,
      o,
      async (s) => {
        s.write(n);
      },
      e
    )
  );
}
function _(t, e) {
  let n = "Server Error",
    o;
  return (
    e != null &&
      (typeof e == "object"
        ? (typeof e.message == "string" && (n = e.message),
          e.stack != null && (o = String(e.stack)))
        : (n = String(e))),
    $(t, n, o)
  );
}
function $(t, e, n) {
  const o = typeof e == "string" ? "600px" : "300px",
    s = t >= 500 ? G : Q;
  return (
    t < 500 && (n = ""),
    `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="Status" content="${t}"/>
  <title>${t} ${e}</title>
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <style>
    body { color: ${s}; background-color: #fafafa; padding: 30px; font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Roboto, sans-serif; }
    p { max-width: ${o}; margin: 60px auto 30px auto; background: white; border-radius: 4px; box-shadow: 0px 0px 50px -20px ${s}; overflow: hidden; }
    strong { display: inline-block; padding: 15px; background: ${s}; color: white; }
    span { display: inline-block; padding: 15px; }
    pre { max-width: 580px; margin: 0 auto; }
  </style>
</head>
<body>
  <p>
    <strong>${t}</strong>
    <span>${e}</span>
  </p>
  ${n ? `<pre><code>${n}</code></pre>` : ""}
</body>
</html>
`
  );
}
var Q = "#006ce9",
  G = "#713fc2",
  x = new WeakMap(),
  V = async (t, e, n, o) => {
    if (Array.isArray(t))
      for (const s of t) {
        const r = s[0].exec(o);
        if (r) {
          const c = s[1],
            l = Y(s[2], r),
            i = s[4],
            a = new Array(c.length),
            d = [],
            p = X(e, o);
          let f;
          return (
            c.forEach((m, u) => {
              B(m, d, (w) => (a[u] = w), n);
            }),
            B(p, d, (m) => (f = m == null ? void 0 : m.default), n),
            d.length > 0 && (await Promise.all(d)),
            [l, a, f, i]
          );
        }
      }
    return null;
  },
  B = (t, e, n, o) => {
    if (typeof t == "function") {
      const s = x.get(t);
      if (s) n(s);
      else {
        const r = t();
        typeof r.then == "function"
          ? e.push(
              r.then((c) => {
                o !== !1 && x.set(t, c), n(c);
              })
            )
          : r && n(r);
      }
    }
  },
  X = (t, e) => {
    if (t) {
      const n = t.find(
        (o) => o[0] === e || e.startsWith(o[0] + (e.endsWith("/") ? "" : "/"))
      );
      if (n) return n[1];
    }
  },
  Y = (t, e) => {
    const n = {};
    if (t) for (let o = 0; o < t.length; o++) n[t[o]] = e ? e[o + 1] : "";
    return n;
  },
  R = class {
    constructor(t, e, n) {
      (this.url = t),
        (this.location = t),
        (this.status = L(e) ? e : 302),
        (this.headers = n || k()),
        this.headers.set("Location", this.location),
        this.headers.delete("Cache-Control");
    }
  };
function K(t, e) {
  return t.response(e.status, e.headers, async () => {});
}
function L(t) {
  return typeof t == "number" && t >= 301 && t <= 308;
}
async function Z(t, e, n, o, s = "/") {
  if (n.length === 0) throw new S(404, "Not Found");
  const { request: r, url: c, platform: l } = t,
    { pathname: i } = c,
    a = tt(n),
    d = a && r.headers.get("Accept") === "application/json",
    p = d ? "pagedata" : a ? "pagehtml" : "endpoint",
    f = {
      type: p,
      url: c,
      params: e,
      status: 200,
      headers: k(),
      resolvedBody: void 0,
      pendingBody: void 0,
      aborted: !1,
    };
  let m = !1;
  if (a && i !== s) {
    if (o) {
      if (!i.endsWith("/")) throw new R(i + "/" + c.search, 302);
    } else if (i.endsWith("/"))
      throw new R(i.slice(0, i.length - 1) + c.search, 302);
  }
  let u = -1;
  const w = () => {
      u = C;
    },
    b = (y, h) => new R(y, h, f.headers),
    H = (y, h) => new S(y, h),
    T = async () => {
      for (u++; u < n.length; ) {
        const y = n[u];
        let h;
        switch (r.method) {
          case "GET": {
            h = y.onGet;
            break;
          }
          case "POST": {
            h = y.onPost;
            break;
          }
          case "PUT": {
            h = y.onPut;
            break;
          }
          case "PATCH": {
            h = y.onPatch;
            break;
          }
          case "OPTIONS": {
            h = y.onOptions;
            break;
          }
          case "HEAD": {
            h = y.onHead;
            break;
          }
          case "DELETE": {
            h = y.onDelete;
            break;
          }
        }
        if (((h = h || y.onRequest), typeof h == "function")) {
          m = !0;
          const q = {
              get status() {
                return f.status;
              },
              set status(P) {
                f.status = P;
              },
              get headers() {
                return f.headers;
              },
              redirect: b,
              error: H,
            },
            I = {
              request: r,
              url: new URL(c),
              params: { ...e },
              response: q,
              platform: l,
              next: T,
              abort: w,
            },
            v = h(I);
          if (typeof v == "function") f.pendingBody = O(v);
          else if (
            v !== null &&
            typeof v == "object" &&
            typeof v.then == "function"
          ) {
            const P = await v;
            typeof P == "function"
              ? (f.pendingBody = O(P))
              : (f.resolvedBody = P);
          } else f.resolvedBody = v;
        }
        u++;
      }
    };
  if (
    (await T(),
    (f.aborted = u >= C),
    !d && L(f.status) && f.headers.has("Location"))
  )
    throw new R(f.headers.get("Location"), f.status, f.headers);
  if (p === "endpoint" && !m) throw new S(405, "Method Not Allowed");
  return f;
}
function O(t) {
  return new Promise((e, n) => {
    try {
      const o = t();
      o !== null && typeof o == "object" && typeof o.then == "function"
        ? o.then(e, n)
        : e(o);
    } catch (o) {
      n(o);
    }
  });
}
function tt(t) {
  const e = t[t.length - 1];
  return e && typeof e.default == "function";
}
function et(t, e) {
  let n = t.url.pathname;
  if (n.endsWith(j)) {
    t.request.headers.set("Accept", "application/json");
    const o = n.length - nt + (e ? 1 : 0);
    (n = n.slice(0, o)), n === "" && (n = "/"), (t.url.pathname = n);
  }
}
var j = "/q-data.json",
  nt = j.length,
  C = 999999999;
function ot(t, e) {
  const { pendingBody: n, resolvedBody: o, status: s, headers: r } = e,
    { response: c } = t;
  if (n === void 0 && o === void 0) return c(s, r, st);
  r.has("Content-Type") ||
    r.set("Content-Type", "application/json; charset=utf-8");
  const l = r.get("Content-Type").includes("json");
  return c(s, r, async ({ write: i }) => {
    const a = n !== void 0 ? await n : o;
    if (a !== void 0)
      if (l) i(JSON.stringify(a));
      else {
        const d = typeof a;
        i(
          d === "string" ? a : d === "number" || d === "boolean" ? String(a) : a
        );
      }
  });
}
var st = async () => {};
function rt(t, e, n, o, s) {
  const { status: r, headers: c } = e,
    { response: l } = t,
    i = e.type === "pagedata";
  return (
    i
      ? c.set("Content-Type", "application/json; charset=utf-8")
      : c.has("Content-Type") ||
        c.set("Content-Type", "text/html; charset=utf-8"),
    l(i ? 200 : r, c, async (a) => {
      try {
        const d = await n({ stream: i ? ct : a, envData: it(e), ...o });
        i
          ? a.write(JSON.stringify(await D(e, d, s)))
          : (typeof d).html === "string" && a.write(d.html),
          typeof a.clientData == "function" && a.clientData(await D(e, d, s));
      } catch (d) {
        const p = _(500, d);
        a.write(p);
      }
    })
  );
}
async function D(t, e, n) {
  var o;
  const s = at(e, n),
    r = !(
      (o = e.snapshotResult) != null &&
      o.resources.some((l) => l._cache !== 1 / 0)
    );
  return {
    body: t.pendingBody ? await t.pendingBody : t.resolvedBody,
    status: t.status !== 200 ? t.status : void 0,
    redirect:
      (t.status >= 301 && t.status <= 308 && t.headers.get("location")) ||
      void 0,
    isStatic: r,
    prefetch: s.length > 0 ? s : void 0,
  };
}
function at(t, e) {
  const n = [],
    o = (l) => {
      l && !n.includes(l) && n.push(l);
    },
    s = (l) => {
      if (Array.isArray(l))
        for (const i of l) {
          const a = i.url.split("/").pop();
          a && !n.includes(a) && (o(a), s(i.imports));
        }
    };
  s(t.prefetchResources);
  const r = t.manifest || t._manifest,
    c = t._symbols;
  if (r && c)
    for (const l of c) {
      const i = r.symbols[l];
      i && i.ctxName === "component$" && o(r.mapping[l]);
    }
  if (e) for (const l of e) o(l);
  return n;
}
function it(t) {
  const { url: e, params: n, pendingBody: o, resolvedBody: s, status: r } = t;
  return {
    url: e.href,
    qwikcity: { params: { ...n }, response: { body: o || s, status: r } },
  };
}
var ct = { write: () => {} };
async function lt(t, e) {
  try {
    const { render: n, qwikCityPlan: o } = e,
      {
        routes: s,
        menus: r,
        cacheModules: c,
        trailingSlash: l,
        basePathname: i,
      } = o;
    et(t, l);
    const a = await V(s, r, c, t.url.pathname);
    if (a) {
      const [d, p, f, m] = a,
        u = await Z(t, d, p, l, i);
      return u.aborted
        ? null
        : u.type === "endpoint"
        ? await ot(t, u)
        : await rt(t, u, n, e, m);
    }
  } catch (n) {
    return n instanceof R ? K(t, n) : n instanceof S ? N(t, n) : U(t, n);
  }
  return null;
}
function dt(t) {
  async function e(n, o) {
    try {
      const s = {
          url: new URL(n.url),
          request: n,
          response: (l, i, a) =>
            new Promise((d) => {
              let p = !1;
              const { readable: f, writable: m } = new TransformStream(),
                u = m.getWriter(),
                w = new Response(f, { status: l, headers: i });
              a({
                write: (b) => {
                  if ((p || ((p = !0), d(w)), typeof b == "string")) {
                    const H = new TextEncoder();
                    u.write(H.encode(b));
                  } else u.write(b);
                },
              }).finally(() => {
                p || ((p = !0), d(w)), u.close();
              });
            }),
          platform: o,
        },
        r = await lt(s, t);
      return r || (await J(s));
    } catch (s) {
      return (
        console.error(s),
        new Response(String(s || "Error"), {
          status: 500,
          headers: { "Content-Type": "text/plain; charset=utf-8" },
        })
      );
    }
  }
  return e;
}
const pt = dt({ render: W, qwikCityPlan: M });
export { pt as default };
