import M from "./@qwik-city-plan.js";
import W from "./entry.ssr.js";
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
      return this[g][S(t)] || null;
    }
    set(t, e) {
      const n = S(t);
      this[g][n] = typeof e != "string" ? String(e) : e;
    }
    append(t, e) {
      const n = S(t),
        o = this.has(n) ? `${this.get(n)}, ${e}` : e;
      this.set(t, o);
    }
    delete(t) {
      if (!this.has(t)) return;
      const e = S(t);
      delete this[g][e];
    }
    all() {
      return this[g];
    }
    has(t) {
      return this[g].hasOwnProperty(S(t));
    }
    forEach(t, e) {
      for (const n in this[g])
        this[g].hasOwnProperty(n) && t.call(e, this[g][n], n, this);
    }
  },
  z = /[^a-z0-9\-#$%&'*+.^_`|~]/i;
function S(t) {
  if ((typeof t != "string" && (t = String(t)), z.test(t) || t.trim() === ""))
    throw new TypeError("Invalid character in header field name");
  return t.toLowerCase();
}
function x() {
  return new (typeof Headers == "function" ? Headers : F)();
}
var H = class extends Error {
  constructor(t, e) {
    super(e), (this.status = t);
  }
};
function J(t) {
  return $(t, new H(404, "Not Found"));
}
function U(t, e) {
  const o = L(500, e),
    s = x();
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
function $(t, e) {
  const n = j(e.status, e.message, e.stack),
    o = x();
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
function L(t, e) {
  let n = "Server Error",
    o;
  return (
    e != null &&
      (typeof e == "object"
        ? (typeof e.message == "string" && (n = e.message),
          e.stack != null && (o = String(e.stack)))
        : (n = String(e))),
    j(t, n, o)
  );
}
function j(t, e, n) {
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
  B = new WeakMap(),
  V = async (t, e, n, o) => {
    if (Array.isArray(t))
      for (const s of t) {
        const r = s[0].exec(o);
        if (r) {
          const a = s[1],
            l = X(s[2], r),
            c = s[4],
            i = new Array(a.length),
            d = [],
            m = K(e, o);
          let f;
          return (
            a.forEach((p, h) => {
              O(p, d, (b) => (i[h] = b), n);
            }),
            O(m, d, (p) => (f = p == null ? void 0 : p.default), n),
            d.length > 0 && (await Promise.all(d)),
            [l, i, f, c]
          );
        }
      }
    return null;
  },
  O = (t, e, n, o) => {
    if (typeof t == "function") {
      const s = B.get(t);
      if (s) n(s);
      else {
        const r = t();
        typeof r.then == "function"
          ? e.push(
              r.then((a) => {
                o !== !1 && B.set(t, a), n(a);
              })
            )
          : r && n(r);
      }
    }
  },
  K = (t, e) => {
    if (t) {
      const n = t.find(
        (o) => o[0] === e || e.startsWith(o[0] + (e.endsWith("/") ? "" : "/"))
      );
      if (n) return n[1];
    }
  },
  X = (t, e) => {
    const n = {};
    if (t) for (let o = 0; o < t.length; o++) n[t[o]] = e ? e[o + 1] : "";
    return n;
  },
  T = class {
    constructor(t, e, n) {
      (this.url = t),
        (this.location = t),
        (this.status = q(e) ? e : 302),
        (this.headers = n || x()),
        this.headers.set("Location", this.location),
        this.headers.delete("Cache-Control");
    }
  };
function Y(t, e) {
  return t.response(e.status, e.headers, async () => {});
}
function q(t) {
  return typeof t == "number" && t >= 301 && t <= 308;
}
async function Z(t, e, n, o, s = "/") {
  if (n.length === 0) throw new H(404, "Not Found");
  const { request: r, url: a, platform: l } = t,
    { pathname: c } = a,
    i = tt(n),
    d = i && r.headers.get("Accept") === "application/json",
    m = d ? "pagedata" : i ? "pagehtml" : "endpoint",
    f = {
      type: m,
      url: a,
      params: e,
      status: 200,
      headers: x(),
      resolvedBody: void 0,
      pendingBody: void 0,
      aborted: !1,
    };
  let p = !1;
  if (i && c !== s) {
    if (o) {
      if (!c.endsWith("/")) throw new T(c + "/" + a.search, 302);
    } else if (c.endsWith("/"))
      throw new T(c.slice(0, c.length - 1) + a.search, 302);
  }
  let h = -1;
  const b = () => {
      h = N;
    },
    P = (y, u) => new T(y, u, f.headers),
    R = (y, u) => new H(y, u),
    C = async () => {
      for (h++; h < n.length; ) {
        const y = n[h];
        let u;
        switch (r.method) {
          case "GET": {
            u = y.onGet;
            break;
          }
          case "POST": {
            u = y.onPost;
            break;
          }
          case "PUT": {
            u = y.onPut;
            break;
          }
          case "PATCH": {
            u = y.onPatch;
            break;
          }
          case "OPTIONS": {
            u = y.onOptions;
            break;
          }
          case "HEAD": {
            u = y.onHead;
            break;
          }
          case "DELETE": {
            u = y.onDelete;
            break;
          }
        }
        if (((u = u || y.onRequest), typeof u == "function")) {
          p = !0;
          const v = {
              get status() {
                return f.status;
              },
              set status(k) {
                f.status = k;
              },
              get headers() {
                return f.headers;
              },
              redirect: P,
              error: R,
            },
            E = {
              request: r,
              url: new URL(a),
              params: { ...e },
              response: v,
              platform: l,
              next: C,
              abort: b,
            },
            w = u(E);
          if (typeof w == "function") f.pendingBody = D(w);
          else if (
            w !== null &&
            typeof w == "object" &&
            typeof w.then == "function"
          ) {
            const k = await w;
            typeof k == "function"
              ? (f.pendingBody = D(k))
              : (f.resolvedBody = k);
          } else f.resolvedBody = w;
        }
        h++;
      }
    };
  if (
    (await C(),
    (f.aborted = h >= N),
    !d && q(f.status) && f.headers.has("Location"))
  )
    throw new T(f.headers.get("Location"), f.status, f.headers);
  if (m === "endpoint" && !p) throw new H(405, "Method Not Allowed");
  return f;
}
function D(t) {
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
  if (n.endsWith(I)) {
    t.request.headers.set("Accept", "application/json");
    const o = n.length - nt + (e ? 1 : 0);
    (n = n.slice(0, o)), n === "" && (n = "/"), (t.url.pathname = n);
  }
}
var I = "/q-data.json",
  nt = I.length,
  N = 999999999;
function ot(t, e) {
  const { pendingBody: n, resolvedBody: o, status: s, headers: r } = e,
    { response: a } = t;
  if (n === void 0 && o === void 0) return a(s, r, st);
  r.has("Content-Type") ||
    r.set("Content-Type", "application/json; charset=utf-8");
  const l = r.get("Content-Type").includes("json");
  return a(s, r, async ({ write: c }) => {
    const i = n !== void 0 ? await n : o;
    if (i !== void 0)
      if (l) c(JSON.stringify(i));
      else {
        const d = typeof i;
        c(
          d === "string" ? i : d === "number" || d === "boolean" ? String(i) : i
        );
      }
  });
}
var st = async () => {};
function at(t, e, n, o, s) {
  const { status: r, headers: a } = e,
    { response: l } = t,
    c = e.type === "pagedata";
  return (
    c
      ? a.set("Content-Type", "application/json; charset=utf-8")
      : a.has("Content-Type") ||
        a.set("Content-Type", "text/html; charset=utf-8"),
    l(c ? 200 : r, a, async (i) => {
      try {
        const d = await n({ stream: c ? ct : i, envData: it(e), ...o });
        c
          ? i.write(JSON.stringify(await _(e, d, s)))
          : (typeof d).html === "string" && i.write(d.html),
          typeof i.clientData == "function" && i.clientData(await _(e, d, s));
      } catch (d) {
        const m = L(500, d);
        i.write(m);
      }
    })
  );
}
async function _(t, e, n) {
  var o;
  const s = rt(e, n),
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
function rt(t, e) {
  const n = [],
    o = (l) => {
      l && !n.includes(l) && n.push(l);
    },
    s = (l) => {
      if (Array.isArray(l))
        for (const c of l) {
          const i = c.url.split("/").pop();
          i && !n.includes(i) && (o(i), s(c.imports));
        }
    };
  s(t.prefetchResources);
  const r = t.manifest || t._manifest,
    a = t._symbols;
  if (r && a)
    for (const l of a) {
      const c = r.symbols[l];
      c && c.ctxName === "component$" && o(r.mapping[l]);
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
        cacheModules: a,
        trailingSlash: l,
        basePathname: c,
      } = o;
    et(t, l);
    const i = await V(s, r, a, t.url.pathname);
    if (i) {
      const [d, m, f, p] = i,
        h = await Z(t, d, m, l, c);
      return h.aborted
        ? null
        : h.type === "endpoint"
        ? await ot(t, h)
        : await at(t, h, n, e, p);
    }
  } catch (n) {
    return n instanceof T ? Y(t, n) : n instanceof H ? $(t, n) : U(t, n);
  }
  return null;
}
function dt(t) {
  async function e({ request: n, next: o, env: s, waitUntil: r }) {
    try {
      const a = new URL(n.url),
        l =
          a.hostname !== "127.0.0.1" &&
          a.hostname !== "localhost" &&
          a.port === "" &&
          n.method === "GET",
        c = new Request(a.href, n),
        i = l ? await caches.open("custom:qwikcity") : null;
      if (i) {
        const p = await i.match(c);
        if (p) return p;
      }
      const d = {
          url: a,
          request: n,
          response: (p, h, b) =>
            new Promise((P) => {
              let R = !1;
              const { readable: C, writable: y } = new TransformStream(),
                u = y.getWriter(),
                v = new Response(C, { status: p, headers: h });
              b({
                write: (E) => {
                  if ((R || ((R = !0), P(v)), typeof E == "string")) {
                    const w = new TextEncoder();
                    u.write(w.encode(E));
                  } else u.write(E);
                },
              }).finally(() => {
                R || ((R = !0), P(v)), u.close();
              }),
                v.ok &&
                  i &&
                  v.headers.has("Cache-Control") &&
                  r(i.put(c, v.clone()));
            }),
          platform: s,
        },
        m = await lt(d, t);
      return m || (await J(d));
    } catch (a) {
      return (
        console.error(a),
        new Response(String(a || "Error"), {
          status: 500,
          headers: { "Content-Type": "text/plain; charset=utf-8" },
        })
      );
    }
  }
  return e;
}
const ht = dt({ render: W, qwikCityPlan: M });
export { ht as onRequest };
