/**
 * @license
 * @builder.io/qwik 0.12.1
 * Copyright Builder.io, Inc. All Rights Reserved.
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/BuilderIO/qwik/blob/main/LICENSE
 */ const E = globalThis.qDev === !0,
  ge = globalThis.qSerialize !== !1,
  ks = globalThis.qDynamicPlatform !== !1,
  kt = globalThis.qTest === !0,
  xt = globalThis.qRuntimeQrl === !0,
  W = (e) => {
    E && Object.seal(e);
  },
  de = (e) => e && typeof e.nodeType == "number",
  dn = (e) => e && e.nodeType === 9,
  se = (e) => e.nodeType === 1,
  le = (e) => de(e) && (e.nodeType === 1 || e.nodeType === 111),
  Y = (e) => e.nodeType === 111,
  pn = (e) => e.nodeType === 3,
  et = (e) => e.nodeType === 8;
function _t(e) {
  if (E && !le(e))
    throw (
      (console.error("Not a Qwik Element, got", e),
      new Error("Not a Qwik Element"))
    );
}
function tt(e) {
  if (E && !se(e))
    throw (console.error("Not a Element, got", e), new Error("Not an Element"));
}
const hn = E
    ? "background: #564CE0; color: white; padding: 2px 3px; border-radius: 2px; font-size: 0.8em;"
    : "",
  Ne = (e, ...t) => {
    const n = e instanceof Error ? e : new Error(e);
    return console.error("%cQWIK ERROR", hn, n.message, ...mn(t), n.stack), n;
  },
  Se = (e, ...t) => {
    const n = Ne(e, ...t);
    debugger;
    return n;
  },
  C = (e, ...t) => {
    E && console.warn("%cQWIK WARN", hn, e, ...mn(t));
  },
  xs = (e, ...t) => {
    E && console.debug("%cQWIK", hn, e, ...mn(t));
  },
  Hr = (e) => e._qc_,
  mn = (e) => (E ? e.map((t) => (de(t) && se(t) ? Fr(t) : t)) : e),
  Fr = (e) => {
    var s;
    const t = Hr(e),
      n = (() =>
        typeof process < "u" &&
        !!process.versions &&
        !!process.versions.node)();
    return {
      tagName: e.tagName,
      renderQRL:
        (s = t == null ? void 0 : t.$componentQrl$) == null
          ? void 0
          : s.getSymbol(),
      element: n ? void 0 : e,
      ctx: n ? void 0 : t,
    };
  },
  Ur = 0,
  _s = 3,
  Vr = 6,
  Br = 10,
  jr = 13,
  Kr = 14,
  Jr = 17,
  Xr = 20,
  Gr = 21,
  Yt = 25,
  Rs = 26,
  Yr = 27,
  Zr = 28,
  eo = 29,
  to = 30,
  Ts = 31,
  no = 32,
  M = (e, ...t) => {
    const n = Rt(e);
    return Se(n, ...t);
  },
  Rt = (e) => {
    var t;
    return E
      ? `Code(${e}): ${
          (t = [
            "Error while serializing class attribute",
            "Can not serialize a HTML Node that is not an Element",
            "Rruntime but no instance found on element.",
            "Only primitive and object literals can be serialized",
            "Crash while rendering",
            "You can render over a existing q:container. Skipping render().",
            "Set property",
            "Only function's and 'string's are supported.",
            "Only objects can be wrapped in 'QObject'",
            "Only objects literals can be wrapped in 'QObject'",
            "QRL is not a function",
            "Dynamic import not found",
            "Unknown type argument",
            "Actual value for useContext() can not be found, make sure some ancestor component has set a value using useContextProvider()",
            "Invoking 'use*()' method outside of invocation context.",
            "Cant access renderCtx for existing context",
            "Cant access document for existing context",
            "props are inmutable",
            "<div> component can only be used at the root of a Qwik component$()",
            "Props are immutable by default.",
            "use- method must be called only at the root level of a component$()",
            "Container is already paused. Skipping",
            'Components using useServerMount() can only be mounted in the server, if you need your component to be mounted in the client, use "useMount$()" instead',
            "When rendering directly on top of Document, the root node must be a <html>",
            "A <html> node must have 2 children. The first one <head> and the second one a <body>",
            "Invalid JSXNode type. It must be either a function or a string. Found:",
            "Tracking value changes can only be done to useStore() objects and component props",
            "Missing Object ID for captured object",
            "The provided Context reference is not a valid context created by createContext()",
            "<html> is the root container, it can not be rendered inside a component",
            "QRLs can not be resolved because it does not have an attached container. This means that the QRL does not know where it belongs inside the DOM, so it cant dynamically import() from a relative path.",
            "QRLs can not be dynamically resolved, because it does not have a chunk path",
            "The JSX ref attribute must be a Signal",
          ][e]) != null
            ? t
            : ""
        }`
      : `Code(${e})`;
  },
  nt = (e) => {
    const t = Object.getPrototypeOf(e);
    return t === Object.prototype || t === null;
  },
  z = (e) => e && typeof e == "object",
  I = (e) => Array.isArray(e),
  Oe = (e) => typeof e == "string",
  j = (e) => typeof e == "function",
  so = () => ({
    isServer: !1,
    importSymbol(e, t, n) {
      const s = oo(e.ownerDocument, e, t).toString(),
        r = new URL(s);
      return (
        (r.hash = ""), (r.search = ""), import(r.href).then((i) => ro(i, n))
      );
    },
    raf: (e) =>
      new Promise((t) => {
        requestAnimationFrame(() => {
          t(e());
        });
      }),
    nextTick: (e) =>
      new Promise((t) => {
        setTimeout(() => {
          t(e());
        });
      }),
    chunkForSymbol() {},
  }),
  ro = (e, t) => {
    if (t in e) return e[t];
    for (const n of Object.values(e)) if (z(n) && t in n) return n[t];
  },
  oo = (e, t, n) => {
    var o;
    const s = e.baseURI,
      r = new URL((o = t.getAttribute("q:base")) != null ? o : s, s);
    return new URL(n, r);
  };
let gn = so();
const wl = (e) => (gn = e),
  Tt = () => gn,
  H = () => (ks ? gn.isServer : !1);
function v(e, t, ...n) {
  if (E) {
    if (e != null) return;
    throw Se(t, ...n);
  }
}
function oe(e, t, n, ...s) {
  if (E) {
    if (e === t) return;
    throw Se(n, ...s);
  }
}
function T(e, t, ...n) {
  if (E) {
    if (e === !0) return;
    throw Se(t, ...n);
  }
}
function Kn(e, t, ...n) {
  if (E) {
    if (typeof e == "number") return;
    throw Se(t, ...n);
  }
}
const Q = (e) => e instanceof Promise,
  yn = (e, t, n) => {
    try {
      const s = e();
      return Q(s) ? s.then(t, n) : t(s);
    } catch (s) {
      return n(s);
    }
  },
  R = (e, t) => (Q(e) ? e.then(t) : t(e)),
  bn = (e) => (e.some(Q) ? Promise.all(e) : e),
  Is = (e) => (e.length > 0 ? Promise.all(e) : e),
  Zt = (e) => e != null,
  io = (e) =>
    new Promise((t) => {
      setTimeout(t, e);
    }),
  J = [],
  X = {};
E && (Object.freeze(J), Object.freeze(X), (Error.stackTraceLimit = 9999));
const pe = (e, t, n = J) => Ht(null, t, e, null, null, n, null),
  Sn = (e, t = {}) => {
    var u;
    T(ge, "In order to serialize a QRL, qSerialize must be true"), K(e);
    let n = e.$symbol$,
      s = e.$chunk$;
    const r = (u = e.$refSymbol$) != null ? u : n,
      o = Tt();
    if (o) {
      const a = o.chunkForSymbol(r);
      a && ((s = a[1]), e.$refSymbol$ || (n = a[0]));
    }
    if ((xt && !s && ((s = "/runtimeQRL"), (n = "_")), !s)) throw M(Ts, e);
    s.startsWith("./") && (s = s.slice(2));
    const i = [s, "#", n],
      c = e.$capture$,
      l = e.$captureRef$;
    if (l && l.length) {
      if (t.$getObjId$) {
        const a = l.map(t.$getObjId$);
        i.push(`[${a.join(" ")}]`);
      } else if (t.$addRefMap$) {
        const a = l.map(t.$addRefMap$);
        i.push(`[${a.join(" ")}]`);
      }
    } else c && c.length > 0 && i.push(`[${c.join(" ")}]`);
    return i.join("");
  },
  Ms = (e, t) => {
    tt(t.$element$);
    const n = { $element$: t.$element$, $addRefMap$: (s) => co(t.$refMap$, s) };
    return e.map((s) => Sn(s, n)).join(`
`);
  },
  It = (e, t) => {
    const n = e.length,
      s = Jn(e, 0, "#"),
      r = Jn(e, s, "["),
      o = Math.min(s, r),
      i = e.substring(0, o),
      c = s == n ? s : s + 1,
      l = r,
      u = c == l ? "default" : e.substring(c, l),
      a = r,
      $ = n,
      p = a === $ ? J : e.substring(a + 1, $ - 1).split(" "),
      h = Ht(i, u, null, null, p, null, null);
    return t && h.$setContainer$(t), h;
  },
  Jn = (e, t, n) => {
    const s = e.length,
      r = e.indexOf(n, t == s ? 0 : t);
    return r == -1 ? s : r;
  },
  co = (e, t) => {
    const n = e.indexOf(t);
    return n === -1 ? (e.push(t), e.length - 1) : n;
  },
  Cs = (e, t) => (
    v(
      e.$capture$,
      "invoke: qrl capture must be defined inside useLexicalScope()",
      e
    ),
    (e.$captureRef$ = e.$capture$.map((n) => {
      const s = parseInt(n, 10),
        r = t.$refMap$[s];
      return T(t.$refMap$.length > s, "out of bounds inflate access", n), r;
    }))
  ),
  Re = "q:renderFn",
  lo = "\u2B50\uFE0F",
  Z = "q:slot",
  wn = "q:sref",
  qe = "q:s",
  vn = "q:style",
  En = "q:sstyle",
  Te = "q:container",
  uo = "[q\\:container]",
  Mt = "qRender",
  Ee = "q:id",
  he = "#";
let Ue;
const ke = () => {
    if (!Ue) {
      const e = typeof document < "u" && document && document.__q_context__;
      return e ? (I(e) ? (document.__q_context__ = Ls(e)) : e) : void 0;
    }
    return Ue;
  },
  kn = () => {
    const e = ke();
    if (!e) throw M(Kr);
    return e;
  },
  xn = () => {
    const e = kn();
    if (e.$event$ !== Mt) throw M(Xr);
    return (
      v(e.$hostElement$, "invoke: $hostElement$ must be defined", e),
      v(e.$waitOn$, "invoke: $waitOn$ must be defined", e),
      v(e.$renderCtx$, "invoke: $renderCtx$ must be defined", e),
      v(e.$subscriber$, "invoke: $subscriber$ must be defined", e),
      e
    );
  },
  Xn = (e) => {
    if (e == null) return e;
    const t = kn();
    return (...n) => ee(t, e.bind(void 0, ...n));
  },
  ee = (e, t, ...n) => {
    const s = Ue;
    let r;
    try {
      (Ue = e), (r = t.apply(null, n));
    } finally {
      Ue = s;
    }
    return r;
  },
  ao = (e, t) => {
    const n = e.$waitOn$;
    if (n.length === 0) {
      const s = t();
      Q(s) && n.push(s);
    } else n.push(Promise.all(n).then(t));
  },
  Ls = (e) => {
    const t = e[0];
    return te(void 0, t, e[1], e[2]);
  },
  te = (e, t, n, s) => {
    const r = {
      $seq$: 0,
      $hostElement$: e,
      $element$: t,
      $event$: n,
      $url$: s,
      $qrl$: void 0,
      $props$: void 0,
      $renderCtx$: void 0,
      $subscriber$: void 0,
      $waitOn$: void 0,
    };
    return W(r), r;
  },
  Ns = (e) => e.closest(uo),
  Ct = "_qc_",
  xe = 1 << 0,
  Ie = 1 << 1,
  _n = 1 << 2,
  Os = 1 << 3,
  U = (e) => e[Ct],
  q = (e) => {
    let t = U(e);
    return (
      t ||
        (e[Ct] = t =
          {
            $flags$: 0,
            $id$: "",
            $element$: e,
            $refMap$: [],
            li: [],
            $watches$: null,
            $seq$: null,
            $slots$: null,
            $scopeIds$: null,
            $appendStyles$: null,
            $props$: null,
            $vdom$: null,
            $componentQrl$: null,
            $contexts$: null,
            $parent$: null,
          }),
      t
    );
  },
  $o = (e, t) => {
    var s;
    const n = e.$element$;
    (s = e.$watches$) == null ||
      s.forEach((r) => {
        t.$clearSub$(r), gr(r);
      }),
      e.$componentQrl$ && t.$clearSub$(n),
      (e.$componentQrl$ = null),
      (e.$seq$ = null),
      (e.$watches$ = null),
      (e.$flags$ = 0),
      (n[Ct] = void 0);
  },
  Rn = (e) => e.replace(/([A-Z])/g, "-$1").toLowerCase(),
  fo = (e) => e.replace(/-./g, (t) => t[1].toUpperCase()),
  po = /^(on|window:|document:)/,
  at = "preventdefault:",
  Tn = (e) => e.endsWith("$") && po.test(e),
  qs = (e) => {
    if (e.length === 0) return J;
    if (e.length === 1) {
      const n = e[0];
      return [[n[0], [n[1]]]];
    }
    const t = [];
    for (let n = 0; n < e.length; n++) {
      const s = e[n][0];
      t.includes(s) || t.push(s);
    }
    return t.map((n) => [n, e.filter((s) => s[0] === n).map((s) => s[1])]);
  },
  Ps = (e, t, n, s) => (
    T(t.endsWith("$"), "render: event property does not end with $", t),
    (t = en(t.slice(0, -1))),
    n &&
      (I(n) ? e.push(...n.map((r) => [t, Yn(r, s)])) : e.push([t, Yn(n, s)])),
    t
  ),
  Gn = ["on", "window:on", "document:on"],
  ho = ["on", "on-window", "on-document"],
  en = (e) => {
    let t = "on";
    for (let n = 0; n < Gn.length; n++) {
      const s = Gn[n];
      if (e.startsWith(s)) {
        (t = ho[n]), (e = e.slice(s.length));
        break;
      }
    }
    return (
      e.startsWith("-") ? (e = Rn(e.slice(1))) : (e = e.toLowerCase()),
      t + ":" + e
    );
  },
  Yn = (e, t) => {
    if (ge && !xt) return K(e), e.$setContainer$(t), e;
    const n = ct(e) ? e : zc(e);
    return n.$setContainer$(t), n;
  },
  mo = (e, t) => {
    const n = e.$element$.attributes,
      s = [];
    for (let r = 0; r < n.length; r++) {
      const { name: o, value: i } = n.item(r);
      if (
        o.startsWith("on:") ||
        o.startsWith("on-window:") ||
        o.startsWith("on-document:")
      ) {
        const c = i.split(`
`);
        for (const l of c) {
          const u = It(l, t);
          u.$capture$ && Cs(u, e), s.push([o, u]);
        }
      }
    }
    return s;
  },
  Pe = () => {
    const e = xn(),
      t = e.$seq$,
      n = e.$hostElement$,
      s = q(n),
      r = s.$seq$ ? s.$seq$ : (s.$seq$ = []);
    e.$seq$++;
    const o = (i) => (E && we(i), (r[t] = i));
    return { get: r[t], set: o, i: t, ctx: e };
  },
  go = (e, t) => As(`on-${e}`, t),
  Zn = (e, t) => As(`document:on-${e}`, t),
  As = (e, t) => {
    const n = xn(),
      s = q(n.$hostElement$);
    K(t),
      typeof e == "string"
        ? s.li.push([en(e), t])
        : s.li.push(...e.map((r) => [en(r), t])),
      (s.$flags$ |= Ie);
  },
  es = Symbol("ContainerState"),
  Lt = (e) => {
    let t = e[es];
    return t || (e[es] = t = Qs(e)), t;
  },
  Qs = (e) => {
    const t = {
      $containerEl$: e,
      $elementIndex$: 0,
      $proxyMap$: new WeakMap(),
      $opsNext$: new Set(),
      $watchNext$: new Set(),
      $watchStaging$: new Set(),
      $hostsNext$: new Set(),
      $hostsStaging$: new Set(),
      $styleIds$: new Set(),
      $events$: new Set(),
      $envData$: {},
      $renderPromise$: void 0,
      $hostsRendering$: void 0,
      $subsManager$: null,
    };
    return W(t), (t.$subsManager$ = Nc(t)), t;
  },
  In = (e, t) => {
    if (j(e)) return e(t);
    if (z(e)) {
      if ("current" in e) return (e.current = t);
      if ("value" in e) return (e.value = t);
    }
    throw M(no, e);
  },
  $t = (e, t) => {
    var n;
    const s = bo(e);
    if (!kt && !H())
      try {
        ((n = globalThis).qwikevents || (n.qwikevents = [])).push(s);
      } catch (r) {
        C(r);
      }
    ge && t.$events$.add(s);
  },
  Ds = 1,
  zs = 128,
  yo = 1,
  Ws = 2,
  tn = 3,
  ts = (e) => se(e) && e.hasAttribute(Te),
  Be = (e) => e.toString(36),
  _e = (e) => parseInt(e, 36),
  bo = (e) => {
    const t = e.indexOf(":");
    return e && fo(e.slice(t + 1));
  },
  B = (e, t, n) => e.setAttribute(t, n),
  ie = (e, t) => e.getAttribute(t),
  F = (e, t, n) => {
    if (E) {
      if (!Oe(e) && !j(e)) throw M(Yt, e);
      if (!xt && t) {
        for (const o of Object.keys(t))
          if (o.endsWith("$") && !ct(t[o])) throw M(Yt, e);
      }
    }
    const s = n == null ? null : String(n),
      r = new nn(e, t, s);
    return W(r), r;
  },
  ft = ":skipRender";
class nn {
  constructor(t, n, s = null) {
    (this.type = t), (this.props = n), (this.key = s);
  }
}
const Nt = (e) =>
    E
      ? e instanceof nn
        ? !0
        : z(e) && "key" in e && "props" in e && "type" in e
        ? (C('Duplicate implementations of "JSXNode" found'), !0)
        : !1
      : e instanceof nn,
  So = (e) => e.children,
  wo = "qonce",
  Mn = Symbol("skip render"),
  Hs = () => null,
  st = (e) => e.children,
  Fs = () => null,
  Ot = (e) => {
    if (!ks || typeof document < "u") return document;
    if (e.nodeType === 9) return e;
    const t = e.ownerDocument;
    return v(t, "doc must be defined"), t;
  },
  Cn = (e, t, n, s) => {
    e
      ? e.$operations$.push({ $operation$: ns, $args$: [t, n, s] })
      : ns(t, n, s);
  },
  ns = (e, t, n) => {
    if (n == null || n === !1) e.removeAttribute(t);
    else {
      const s = n === !0 ? "" : String(n);
      B(e, t, s);
    }
  },
  ye = (e, t, n, s) => {
    e
      ? e.$operations$.push({ $operation$: ss, $args$: [t, n, s] })
      : ss(t, n, s);
  },
  ss = (e, t, n) => {
    try {
      (e[t] = n == null ? "" : n),
        n == null && de(e) && se(e) && e.removeAttribute(t);
    } catch (s) {
      Ne(Rt(Vr), { node: e, key: t, value: n }, s);
    }
  },
  Ln = (e, t, n) => (n ? e.createElementNS(An, t) : e.createElement(t)),
  ve = (e, t, n, s) => (
    e.$operations$.push({ $operation$: Qt, $args$: [t, n, s || null] }), n
  ),
  vo = (e, t, n) => (
    e.$operations$.push({ $operation$: Ze, $args$: [t, n] }), n
  ),
  Eo = (e, t) => {
    e.$containerState$.$styleIds$.add(t.styleId),
      e.$postOperations$.push({
        $operation$: xo,
        $args$: [e.$containerState$.$containerEl$, t],
      });
  },
  ko = (e, t, n, s) => {
    e
      ? e.$operations$.push({ $operation$: rs, $args$: [t, n, s] })
      : rs(t, n, s);
  },
  rs = (e, t, n) => {
    const s = e.classList;
    s.remove(...t), s.add(...n);
  },
  xo = (e, t) => {
    const n = Ot(e),
      s = n.documentElement === e,
      r = n.head,
      o = n.createElement("style");
    s && !r && C("document.head is undefined"),
      B(o, vn, t.styleId),
      (o.textContent = t.content),
      s && r ? Ze(r, o) : Qt(e, o, e.firstChild);
  },
  _o = (e, t, n) => {
    e.$operations$.push({ $operation$: Qt, $args$: [t, n, t.firstChild] });
  },
  Us = (e, t) => {
    e.$operations$.push({ $operation$: Ro, $args$: [t, e] });
  },
  Ro = (e, t) => {
    const n = e.parentElement;
    if (n) {
      if (e.nodeType === 1 || e.nodeType === 111) {
        const s = t.$containerState$.$subsManager$;
        Wn(e, t, s, !0);
      }
      mi(n, e);
    } else E && C("Trying to remove component already removed", e);
  },
  Vs = (e, t) => {
    const n = Ln(e, "q:template", !1);
    return B(n, Z, t), B(n, "hidden", ""), B(n, "aria-hidden", "true"), n;
  },
  To = (e) => {
    for (const t of e.$operations$) t.$operation$.apply(void 0, t.$args$);
    Io(e);
  },
  sn = (e) => ie(e, "q:key"),
  Ut = (e, t) => {
    t !== null && B(e, "q:key", t);
  },
  Io = (e) => {
    const t = e.$containerState$.$subsManager$;
    for (const n of e.$rmSlots$) {
      const s = sn(n);
      v(s, "slots must have a key");
      const r = Je(n, "root");
      if (r.length > 0) {
        const o = n.getAttribute(wn),
          i = e.$roots$.find((c) => c.$id$ === o);
        if (i) {
          const c = Vs(e.$doc$, s),
            l = i.$element$;
          for (const u of r) Ze(c, u);
          Qt(l, c, l.firstChild);
        } else Wn(n, e, t, !1);
      }
    }
    for (const [n, s] of e.$addSlots$) {
      const r = sn(n);
      v(r, "slots must have a key");
      const o = Array.from(s.childNodes).find(
        (i) => sr(i) && i.getAttribute(Z) === r
      );
      o &&
        (Je(o, "root").forEach((c) => {
          Ze(n, c);
        }),
        o.remove());
    }
  },
  Mo = (e, t) => e.createTextNode(t),
  os = (e) => {
    var t;
    if (E && typeof window < "u" && window.document != null) {
      const n = {};
      for (const o of e.$operations$)
        n[o.$operation$.name] =
          ((t = n[o.$operation$.name]) != null ? t : 0) + 1;
      const s = {
          byOp: n,
          roots: e.$roots$.map((o) => o.$element$),
          hostElements: Array.from(e.$hostElements$),
          operations: e.$operations$.map((o) => [
            o.$operation$.name,
            ...o.$args$,
          ]),
        },
        r = e.$operations$.length === 0;
      xs("Render stats.", r ? "No operations" : "", s);
    }
  },
  Bs = "__virtual",
  Co = (e) => {
    const t = e.createComment("qv "),
      n = e.createComment("/qv");
    return new Nn(t, n);
  },
  Lo = (e) => {
    if (!e) return new Map();
    const t = e.split(" ");
    return new Map(
      t.map((n) => {
        const s = n.indexOf("=");
        return s >= 0 ? [n.slice(0, s), Do(n.slice(s + 1))] : [n, ""];
      })
    );
  },
  No = (e) => {
    const t = [];
    return (
      e.forEach((n, s) => {
        n ? t.push(`${s}=${Qo(n)}`) : t.push(`${s}`);
      }),
      t.join(" ")
    );
  },
  Oo = 128,
  qo = 1,
  is = 2,
  Po = (e, t, n) =>
    e.ownerDocument.createTreeWalker(e, Oo, {
      acceptNode(s) {
        const r = qt(s);
        return r && ie(r, t) === n ? qo : is;
      },
    }),
  Ao = (e, t, n) => {
    const s = Po(e, t, n),
      r = [];
    let o = null;
    for (; (o = s.nextNode()); ) r.push(qt(o));
    return r;
  },
  Qo = (e) => e.replace(/ /g, "+"),
  Do = (e) => e.replace(/\+/g, " "),
  Me = ":virtual";
class Nn {
  constructor(t, n) {
    (this.open = t),
      (this.close = n),
      (this._qc_ = null),
      (this.nodeType = 111),
      (this.localName = Me),
      (this.nodeName = Me);
    const s = (this.ownerDocument = t.ownerDocument);
    (this.template = Ln(s, "template", !1)),
      (this.attributes = Lo(t.data.slice(3))),
      T(t.data.startsWith("qv "), "comment is not a qv"),
      (t[Bs] = this),
      W(this);
  }
  insertBefore(t, n) {
    const s = this.parentElement;
    if (s) {
      const r = n || this.close;
      s.insertBefore(t, r);
    } else this.template.insertBefore(t, n);
    return t;
  }
  remove() {
    const t = this.parentElement;
    if (t) {
      const n = Array.from(this.childNodes);
      oe(this.template.childElementCount, 0, "children should be empty"),
        t.removeChild(this.open),
        this.template.append(...n),
        t.removeChild(this.close);
    }
  }
  appendChild(t) {
    return this.insertBefore(t, null);
  }
  insertBeforeTo(t, n) {
    const s = Array.from(this.childNodes);
    t.insertBefore(this.open, n);
    for (const r of s) t.insertBefore(r, n);
    t.insertBefore(this.close, n),
      oe(this.template.childElementCount, 0, "children should be empty");
  }
  appendTo(t) {
    this.insertBeforeTo(t, null);
  }
  get namespaceURI() {
    var t, n;
    return (n = (t = this.parentElement) == null ? void 0 : t.namespaceURI) !=
      null
      ? n
      : "";
  }
  removeChild(t) {
    this.parentElement
      ? this.parentElement.removeChild(t)
      : this.template.removeChild(t);
  }
  getAttribute(t) {
    var n;
    return (n = this.attributes.get(t)) != null ? n : null;
  }
  hasAttribute(t) {
    return this.attributes.has(t);
  }
  setAttribute(t, n) {
    this.attributes.set(t, n), ge && (this.open.data = cs(this.attributes));
  }
  removeAttribute(t) {
    this.attributes.delete(t), ge && (this.open.data = cs(this.attributes));
  }
  matches(t) {
    return !1;
  }
  compareDocumentPosition(t) {
    return this.open.compareDocumentPosition(t);
  }
  closest(t) {
    const n = this.parentElement;
    return n ? n.closest(t) : null;
  }
  querySelectorAll(t) {
    const n = [];
    return (
      Je(this, "elements").forEach((r) => {
        le(r) &&
          (r.matches(t) && n.push(r),
          n.concat(Array.from(r.querySelectorAll(t))));
      }),
      n
    );
  }
  querySelector(t) {
    for (const n of this.childNodes)
      if (se(n)) {
        if (n.matches(t)) return n;
        const s = n.querySelector(t);
        if (s !== null) return s;
      }
    return null;
  }
  get firstChild() {
    if (this.parentElement) {
      const t = this.open.nextSibling;
      return t === this.close ? null : t;
    } else return this.template.firstChild;
  }
  get nextSibling() {
    return this.close.nextSibling;
  }
  get previousSibling() {
    return this.open.previousSibling;
  }
  get childNodes() {
    if (!this.parentElement) return this.template.childNodes;
    const t = [];
    let n = this.open;
    for (; (n = n.nextSibling) && n !== this.close; ) t.push(n);
    return t;
  }
  get isConnected() {
    return this.open.isConnected;
  }
  get parentElement() {
    return this.open.parentElement;
  }
}
const cs = (e) => `qv ${No(e)}`,
  js = (e) => {
    if (e == null) return null;
    if (et(e)) {
      const t = qt(e);
      if (t) return t;
    }
    return e;
  },
  qt = (e) => {
    const t = e[Bs];
    if (t) return t;
    if (e.data.startsWith("qv ")) {
      const n = Ks(e);
      return new Nn(e, n);
    }
    return null;
  },
  Ks = (e) => {
    let t = e.nextSibling,
      n = 1;
    for (; t; ) {
      if (et(t)) {
        if (t.data.startsWith("qv ")) n++;
        else if (t.data === "/qv" && (n--, n === 0)) return t;
      }
      t = t.nextSibling;
    }
    throw new Error("close not found");
  },
  dt = (e) => (e == null ? null : Y(e) ? e.open : e),
  Ae = (e) => (
    T(/^[\w/.-]+$/.test(e), "Context name must only contain A-Z,a-z,0-9, _", e),
    Object.freeze({ id: Rn(e) })
  ),
  ze = (e, t) => {
    const { get: n, set: s, ctx: r } = Pe();
    if (n !== void 0) return;
    E && Xs(e);
    const o = r.$hostElement$,
      i = q(o);
    let c = i.$contexts$;
    c || (i.$contexts$ = c = new Map()), E && we(t), c.set(e.id, t), s(!0);
  },
  Pt = (e, t) => {
    const { get: n, set: s, ctx: r } = Pe();
    if (n !== void 0) return n;
    E && Xs(e);
    const o = Js(e, r.$hostElement$, r.$renderCtx$);
    if (o !== void 0) return s(o);
    if (t !== void 0) return s(t);
    throw M(jr, e.id);
  },
  Js = (e, t, n) => {
    const s = e.id;
    if (n) {
      const r = n.$localStack$;
      for (let o = r.length - 1; o >= 0; o--) {
        const i = r[o];
        if (((t = i.$element$), i.$contexts$)) {
          const c = i.$contexts$.get(s);
          if (c) return c;
          if (i.$contexts$.get("_") === !0) break;
        }
      }
    }
    if (t.closest) {
      const r = zo(t, s);
      if (r !== void 0) return r;
    }
  },
  zo = (e, t) => {
    var s;
    let n = e;
    for (; n; ) {
      let r = n,
        o;
      for (; r && (o = Wo(r)); ) {
        const i = (s = U(o)) == null ? void 0 : s.$contexts$;
        if (i && i.has(t)) return i.get(t);
        r = o;
      }
      n = n.parentElement;
    }
  },
  Wo = (e) => {
    let t = e,
      n = 1;
    for (; (t = t.previousSibling); )
      if (et(t)) {
        if (t.data === "/qv") n++;
        else if (t.data.startsWith("qv ") && (n--, n === 0)) return qt(t);
      }
    return null;
  },
  Xs = (e) => {
    if (!z(e) || typeof e.id != "string" || e.id.length === 0) throw M(Zr, e);
  },
  Ho = Ae("qk-error"),
  Gs = (e, t, n) => {
    if (E) {
      if (!H() && Y(t)) {
        q(t).$vdom$ = null;
        const s = document.createElement("errored-host");
        e && e instanceof Error && (s.props = { error: e }),
          s.setAttribute("q:key", "_error_"),
          s.append(...t.childNodes),
          t.appendChild(s);
      }
      if (
        (e && e instanceof Error && ("hostElement" in e || (e.hostElement = t)),
        !Fo(e))
      )
        throw e;
    }
    if (H()) throw e;
    {
      const s = Js(Ho, t, n);
      if (s === void 0) throw e;
      s.error = e;
    }
  },
  Fo = (e) => !(e && e instanceof Error && "plugin" in e),
  pt = (e, t) => {
    (t.$flags$ &= ~xe), (t.$flags$ |= _n), (t.$slots$ = []), (t.li.length = 0);
    const n = t.$element$,
      s = t.$componentQrl$,
      r = t.$props$,
      o = On(e, t),
      i = te(n, void 0, Mt),
      c = (i.$waitOn$ = []);
    v(s, "render: host element to render must has a $renderQrl$:", t),
      v(r, "render: host element to render must has defined props", t),
      (o.$cmpCtx$ = t),
      (i.$subscriber$ = n),
      (i.$renderCtx$ = e),
      s.$setContainer$(e.$static$.$containerState$.$containerEl$);
    const l = s.getFn(i);
    return yn(
      () => l(r),
      (u) =>
        c.length > 0
          ? Promise.all(c).then(() =>
              t.$flags$ & xe ? pt(e, t) : { node: u, rCtx: o }
            )
          : t.$flags$ & xe
          ? pt(e, t)
          : { node: u, rCtx: o },
      (u) => (Gs(u, n, e), { node: Mn, rCtx: o })
    );
  },
  Ys = (e, t) => {
    const n = {
      $static$: {
        $doc$: e,
        $containerState$: t,
        $hostElements$: new Set(),
        $operations$: [],
        $postOperations$: [],
        $roots$: [],
        $addSlots$: [],
        $rmSlots$: [],
      },
      $cmpCtx$: void 0,
      $localStack$: [],
    };
    return W(n), W(n.$static$), n;
  },
  On = (e, t) => ({
    $static$: e.$static$,
    $cmpCtx$: e.$cmpCtx$,
    $localStack$: e.$localStack$.concat(t),
  }),
  Zs = (e) => {
    if (Oe(e)) return e;
    if (z(e)) {
      if (I(e)) return e.join(" ");
      {
        let t = "",
          n = !1;
        for (const s of Object.keys(e))
          e[s] && (n && (t += " "), (t += s), (n = !0));
        return t;
      }
    }
    return "";
  },
  Uo = /\s/,
  rn = (e) => (e ? e.split(Uo) : J),
  er = (e) => {
    if (e == null) return "";
    if (typeof e == "object") {
      if (I(e)) throw M(Ur, e, "style");
      {
        const t = [];
        for (const n in e)
          if (Object.prototype.hasOwnProperty.call(e, n)) {
            const s = e[n];
            s && t.push(Rn(n) + ":" + s);
          }
        return t.join(";");
      }
    }
    return String(e);
  },
  At = (e) => Be(e.$static$.$containerState$.$elementIndex$++),
  on = (e, t) => {
    const n = At(e);
    t.$id$ = n;
  },
  ht = (e) => (e == null || typeof e == "boolean" ? "" : String(e)),
  mt = 1 << 0,
  gt = 1 << 1,
  cn = Symbol("proxy target"),
  be = Symbol("proxy flags"),
  $e = Symbol("proxy manager"),
  ne = Symbol("IMMUTABLE"),
  ae = "$$";
class je {
  constructor(t, n) {
    (this.untrackedValue = t), (this[$e] = n);
  }
  get value() {
    var n;
    const t = (n = ke()) == null ? void 0 : n.$subscriber$;
    return t && this[$e].$addSub$([0, t, void 0]), this.untrackedValue;
  }
  set value(t) {
    if (E) {
      we(t);
      const r = ke();
      r &&
        r.$event$ === Mt &&
        C(
          "State mutation inside render function. Move mutation to useWatch(), useClientEffect() or useServerMount()",
          r.$hostElement$
        );
    }
    const n = this[$e],
      s = this.untrackedValue;
    n && s !== t && ((this.untrackedValue = t), n.$notifySubs$());
  }
}
const D = (e) => e instanceof je || e instanceof Ce,
  Qe = (e, t, n, s, r) => {
    const o =
      n instanceof Ce
        ? [e, t, De(n.ref), s, r, n.prop === "value" ? void 0 : n.prop]
        : [e, t, n, s, r, void 0];
    ce(n).$addSub$(o);
  };
class Ce {
  constructor(t, n) {
    (this.ref = t), (this.prop = n);
  }
  get [$e]() {
    return ce(this.ref);
  }
  get value() {
    return this.ref[this.prop];
  }
  set value(t) {
    this.ref[this.prop] = t;
  }
}
const vl = (e, t) => {
    var r;
    if (!z(e)) return;
    if (e instanceof je || e instanceof Ce)
      return oe(t, "value", "Left side is a signal, prop must be value"), e;
    const n = De(e);
    if (n) {
      const o = n[ae + t];
      return o ? (T(D(o), `${ae} has to be a signal kind`), o) : new Ce(e, t);
    }
    const s = (r = e[ne]) == null ? void 0 : r[t];
    return D(s) ? s : e[t];
  },
  qn = (e, t, n) => {
    const s = !(t.$flags$ & _n),
      r = t.$element$,
      o = e.$static$.$containerState$;
    return (
      o.$hostsStaging$.delete(r),
      o.$subsManager$.$clearSub$(r),
      R(pt(e, t), (i) => {
        const c = e.$static$,
          l = i.rCtx,
          u = te(r);
        if (
          (c.$hostElements$.add(r),
          (u.$subscriber$ = r),
          (u.$renderCtx$ = l),
          s && t.$appendStyles$)
        )
          for (const $ of t.$appendStyles$) Eo(c, $);
        const a = Ke(i.node, u);
        return R(a, ($) => {
          const p = Bo(r, $),
            h = tr(t);
          return R(Xo(l, h, p, n), () => {
            t.$vdom$ = p;
          });
        });
      })
    );
  },
  tr = (e) => (e.$vdom$ || (e.$vdom$ = Xe(e.$element$)), e.$vdom$);
class re {
  constructor(t, n, s, r) {
    (this.$type$ = t),
      (this.$props$ = n),
      (this.$children$ = s),
      (this.$key$ = r),
      (this.$elm$ = null),
      (this.$text$ = ""),
      (this.$signal$ = null),
      W(this);
  }
}
const Vo = (e, t) => {
    const n = e.key != null ? String(e.key) : null,
      s = e.type,
      r = e.props,
      o = r.children;
    let i = "";
    if (Oe(s)) i = s;
    else if (s === st) i = Me;
    else if (j(s)) {
      const l = ee(t, s, r, e.key);
      return (
        E && Q(l) && C("JSX components can not return a promise.", e), Ke(l, t)
      );
    } else throw M(Yt, s);
    let c = J;
    return o != null
      ? R(
          Ke(o, t),
          (l) => (l !== void 0 && (c = I(l) ? l : [l]), new re(i, r, c, n))
        )
      : new re(i, r, c, n);
  },
  Bo = (e, t) => {
    const n = t === void 0 ? J : I(t) ? t : [t],
      s = new re(":virtual", {}, n, null);
    return (s.$elm$ = e), s;
  },
  Ke = (e, t) => {
    if (!(e == null || typeof e == "boolean"))
      if (jo(e)) {
        const n = new re("#text", X, J, null);
        return (n.$text$ = String(e)), n;
      } else {
        if (Nt(e)) return Vo(e, t);
        if (D(e)) {
          const n = e.value,
            s = new re("#text", X, J, null);
          return (s.$text$ = ht(n)), (s.$signal$ = e), s;
        } else if (I(e)) {
          const n = bn(e.flatMap((s) => Ke(s, t)));
          return R(n, (s) => s.flat(100).filter(Zt));
        } else {
          if (Q(e)) return e.then((n) => Ke(n, t));
          if (e === Mn) return new re(ft, X, J, null);
          C(
            "A unsupported value was passed to the JSX, skipping render. Value:",
            e
          );
          return;
        }
      }
  },
  jo = (e) => Oe(e) || typeof e == "number",
  Pn = (e, t, n = 0) => {
    const s = t.$proxyMap$.get(e);
    return s || (n !== 0 && (e[be] = n), rt(e, t, void 0));
  },
  rt = (e, t, n) => {
    oe(it(e), e, "Unexpected proxy at this location", e),
      T(!t.$proxyMap$.has(e), "Proxy was already created", e),
      T(z(e), "Target must be an object"),
      T(nt(e) || I(e), "Target must be a serializable object");
    const s = t.$subsManager$.$createManager$(n),
      r = new Proxy(e, new Ko(t, s));
    return t.$proxyMap$.set(e, r), r;
  };
class Ko {
  constructor(t, n) {
    (this.$containerState$ = t), (this.$manager$ = n);
  }
  get(t, n) {
    var u, a;
    if (typeof n == "symbol")
      return n === cn ? t : n === $e ? this.$manager$ : t[n];
    let s;
    const r = (u = t[be]) != null ? u : 0;
    Kn(r, "flags must be an number");
    const o = ke(),
      i = (r & mt) !== 0,
      c = (r & gt) !== 0;
    let l = t[n];
    if ((o && (s = o.$subscriber$), c)) {
      const $ = t[ae + n];
      (!(n in t) || !!$ || !!((a = t[ne]) != null && a[n])) && (s = null),
        $ && (T(D($), "$$ prop must be a signal"), (l = $.value));
    }
    if (s) {
      const $ = I(t);
      this.$manager$.$addSub$([0, s, $ ? void 0 : n]);
    }
    return i ? Jo(l, this.$containerState$) : l;
  }
  set(t, n, s) {
    var a;
    if (typeof n == "symbol") return (t[n] = s), !0;
    const r = (a = t[be]) != null ? a : 0;
    if ((Kn(r, "flags must be an number"), (r & gt) !== 0)) throw M(Jr);
    const c = (r & mt) !== 0 ? it(s) : s;
    if (E) {
      we(c);
      const $ = ke();
      $ &&
        $.$event$ === Mt &&
        C(
          "State mutation inside render function. Move mutation to useWatch(), useClientEffect() or useServerMount()",
          $.$hostElement$,
          n
        );
    }
    return I(t)
      ? ((t[n] = c), this.$manager$.$notifySubs$(), !0)
      : (t[n] !== c && ((t[n] = c), this.$manager$.$notifySubs$(n)), !0);
  }
  has(t, n) {
    if (n === cn) return !0;
    const s = Object.prototype.hasOwnProperty;
    return !!(s.call(t, n) || (typeof n == "string" && s.call(t, ae + n)));
  }
  ownKeys(t) {
    let n = null;
    const s = ke();
    return (
      s && (n = s.$subscriber$),
      n && this.$manager$.$addSub$([0, n, void 0]),
      I(t)
        ? Reflect.ownKeys(t)
        : Reflect.ownKeys(t).map((r) =>
            typeof r == "string" && r.startsWith(ae) ? r.slice(ae.length) : r
          )
    );
  }
  getOwnPropertyDescriptor(t, n) {
    return I(t)
      ? Object.getOwnPropertyDescriptor(t, n)
      : { enumerable: !0, configurable: !0 };
  }
}
const Jo = (e, t) => {
    if (ct(e)) return e;
    if (z(e)) {
      if (Object.isFrozen(e)) return e;
      const n = it(e);
      if (n !== e || de(n) || !Sr(n)) return e;
      E && we(e);
      const s = t.$proxyMap$.get(e);
      return s || Pn(e, t, mt);
    } else return e;
  },
  An = "http://www.w3.org/2000/svg",
  me = 1 << 0,
  Ve = 1 << 1,
  yt = [],
  Xo = (e, t, n, s) => Qn(e, t, n, "root", s),
  Qn = (e, t, n, s, r) => {
    _t(t.$elm$);
    const o = n.$children$;
    if (o.length === 1 && o[0].$type$ === ft) return;
    const i = t.$elm$;
    t.$children$ === yt && i.nodeName === "HEAD" && ((s = "head"), (r |= Ve));
    const l = Go(t, s);
    if (l.length > 0 && o.length > 0) return Yo(e, i, l, o, r);
    if (o.length > 0) return rr(e, i, null, o, 0, o.length - 1, r);
    if (l.length > 0) return Dn(e.$static$, l, 0, l.length - 1);
  },
  Go = (e, t) => {
    const n = e.$children$,
      s = e.$elm$;
    return n === yt ? (e.$children$ = nr(s, t)) : n;
  },
  Yo = (e, t, n, s, r) => {
    let o = 0,
      i = 0,
      c = n.length - 1,
      l = n[0],
      u = n[c],
      a = s.length - 1,
      $ = s[0],
      p = s[a],
      h,
      m,
      y;
    const g = [],
      k = e.$static$;
    for (; o <= c && i <= a; )
      if (l == null) l = n[++o];
      else if (u == null) u = n[--c];
      else if ($ == null) $ = s[++i];
      else if (p == null) p = s[--a];
      else if (lt(l, $)) g.push(We(e, l, $, r)), (l = n[++o]), ($ = s[++i]);
      else if (lt(u, p)) g.push(We(e, u, p, r)), (u = n[--c]), (p = s[--a]);
      else if (lt(l, p))
        v(l.$elm$, "oldStartVnode $elm$ must be defined"),
          v(u.$elm$, "oldEndVnode $elm$ must be defined"),
          g.push(We(e, l, p, r)),
          ve(k, t, l.$elm$, u.$elm$.nextSibling),
          (l = n[++o]),
          (p = s[--a]);
      else if (lt(u, $))
        v(l.$elm$, "oldStartVnode $elm$ must be defined"),
          v(u.$elm$, "oldEndVnode $elm$ must be defined"),
          g.push(We(e, u, $, r)),
          ve(k, t, u.$elm$, l.$elm$),
          (u = n[--c]),
          ($ = s[++i]);
      else {
        if (
          (h === void 0 && (h = gi(n, o, c)), (m = h[$.$key$]), m === void 0)
        ) {
          const d = Ge(e, $, r, g);
          ve(k, t, d, l == null ? void 0 : l.$elm$);
        } else if (((y = n[m]), yi(y, $.$type$)))
          g.push(We(e, y, $, r)),
            (n[m] = void 0),
            v(y.$elm$, "elmToMove $elm$ must be defined"),
            ve(k, t, y.$elm$, l.$elm$);
        else {
          const d = Ge(e, $, r, g);
          R(d, (w) => {
            ve(k, t, w, l == null ? void 0 : l.$elm$);
          });
        }
        $ = s[++i];
      }
    if (i <= a) {
      const d = s[a + 1] == null ? null : s[a + 1].$elm$;
      g.push(rr(e, t, d, s, i, a, r));
    }
    let f = bn(g);
    return (
      o <= c &&
        (f = R(f, () => {
          Dn(k, n, o, c);
        })),
      f
    );
  },
  Vt = (e, t) => {
    const n = Y(e) ? e.close : null,
      s = [];
    let r = e.firstChild;
    for (; (r = js(r)) && (t(r) && s.push(r), (r = r.nextSibling), r !== n); );
    return s;
  },
  Je = (e, t) => {
    switch (t) {
      case "root":
        return Vt(e, si);
      case "head":
        return Vt(e, ni);
      case "elements":
        return Vt(e, le);
    }
  },
  nr = (e, t) => Je(e, t).map(Zo),
  Zo = (e) => {
    var t, n;
    return se(e) && (n = (t = U(e)) == null ? void 0 : t.$vdom$) != null
      ? n
      : Xe(e);
  },
  Xe = (e) => {
    if (le(e)) {
      const t = Y(e) ? X : ei(e),
        n = new re(e.localName, t, yt, sn(e));
      return (n.$elm$ = e), n;
    } else if (pn(e)) {
      const t = new re(e.nodeName, {}, yt, null);
      return (t.$text$ = e.data), (t.$elm$ = e), t;
    }
    throw new Error("invalid node");
  },
  ei = (e) => {
    const t = {},
      n = e.attributes,
      s = n.length;
    for (let r = 0; r < s; r++) {
      const o = n.item(r);
      v(o, "attribute must be defined");
      const i = o.name;
      i.includes(":") ||
        (i === "class" ? (t[i] = ti(o.value)) : (t[i] = o.value));
    }
    return t;
  },
  ti = (e) =>
    rn(e)
      .filter((t) => !t.startsWith(lo))
      .join(" "),
  ni = (e) => {
    const t = e.nodeType;
    return t === 1 ? e.hasAttribute("q:head") : t === 111;
  },
  sr = (e) => e.nodeName === "Q:TEMPLATE",
  si = (e) => {
    const t = e.nodeType;
    if (t === 3 || t === 111) return !0;
    if (t !== 1) return !1;
    const n = e.nodeName;
    return n === "Q:TEMPLATE"
      ? !1
      : n === "HEAD"
      ? e.hasAttribute("q:head")
      : !0;
  },
  ri = (e) => {
    var n;
    const t = {};
    for (const s of e) {
      const r = ir(s);
      ((n = t[r]) != null
        ? n
        : (t[r] = new re(Me, { [qe]: "" }, [], r))
      ).$children$.push(s);
    }
    return t;
  },
  We = (e, t, n, s) => {
    oe(t.$type$, n.$type$, "old and new vnodes type must be the same");
    const r = t.$elm$,
      o = n.$type$,
      i = e.$static$,
      c = o === Me,
      l = e.$cmpCtx$;
    if (
      (v(r, "while patching element must be defined"),
      v(l, "while patching current component must be defined"),
      (n.$elm$ = r),
      o === "#text")
    ) {
      const y = n.$signal$;
      y && Qe(2, l.$element$, y, r, "data"),
        t.$text$ !== n.$text$ && ye(i, r, "data", n.$text$);
      return;
    }
    _t(r);
    let u = !!(s & me);
    !u && o === "svg" && ((s |= me), (u = !0));
    const a = n.$props$,
      $ = c && Re in a,
      p = q(r);
    if ((v(l, "slots can not be rendered outside a component", r), !$)) {
      const y = l.li,
        g = p.li;
      if (
        ((g.length = 0),
        (n.$props$ = fi(i, p, l.$element$, t.$props$, a, u)),
        y.length > 0 && (g.push(...y), (y.length = 0)),
        u && n.$type$ === "foreignObject" && ((s &= ~me), (u = !1)),
        c && qe in a)
      ) {
        v(l.$slots$, "current component slots must be a defined array"),
          l.$slots$.push(n);
        return;
      }
      if (a[Ye] !== void 0) {
        E &&
          n.$children$.length > 0 &&
          C("Node can not have children when innerHTML is set");
        return;
      }
      return c && wo in a ? void 0 : Qn(e, t, n, "root", s);
    }
    const h = a.props;
    let m = lr(p, e, h);
    return (
      !m &&
        !p.$componentQrl$ &&
        !p.$element$.hasAttribute(Ee) &&
        (on(e, p), (p.$componentQrl$ = h[Re]), K(p.$componentQrl$), (m = !0)),
      m ? R(qn(e, p, s), () => ls(e, p, n, s)) : ls(e, p, n, s)
    );
  },
  ls = (e, t, n, s) => {
    const r = n.$children$,
      o = e.$static$,
      i = ri(r),
      c = On(e, t),
      l = cr(t);
    for (const u of Object.keys(l.slots))
      if (!i[u]) {
        const a = l.slots[u],
          $ = nr(a, "root");
        if ($.length > 0) {
          const p = U(a);
          p && p.$vdom$ && (p.$vdom$.$children$ = []),
            Dn(o, $, 0, $.length - 1);
        }
      }
    for (const u of Object.keys(l.templates)) {
      const a = l.templates[u];
      a && (!i[u] || l.slots[u]) && (Us(o, a), (l.templates[u] = void 0));
    }
    return bn(
      Object.keys(i).map((u) => {
        const a = i[u],
          $ = or(o, l, t.$element$, u),
          p = q($),
          h = tr(p);
        return (p.$vdom$ = a), (a.$elm$ = $), Qn(c, h, a, "root", s);
      })
    );
  },
  rr = (e, t, n, s, r, o, i) => {
    const c = [];
    for (; r <= o; ++r) {
      const l = s[r];
      v(l, "render: node must be defined at index", r, s);
      const u = Ge(e, l, i, c);
      ve(e.$static$, t, u, n);
    }
    return Is(c);
  },
  Dn = (e, t, n, s) => {
    for (; n <= s; ++n) {
      const r = t[n];
      r && (v(r.$elm$, "vnode elm must be defined"), Us(e, r.$elm$));
    }
  },
  or = (e, t, n, s) => {
    const r = t.slots[s];
    if (r) return r;
    const o = t.templates[s];
    if (o) return o;
    const i = Vs(e.$doc$, s);
    return _o(e, n, i), (t.templates[s] = i), i;
  },
  ir = (e) => {
    var t;
    return (t = e.$props$[Z]) != null ? t : "";
  },
  Ge = (e, t, n, s) => {
    const r = t.$type$,
      o = e.$static$.$doc$,
      i = e.$cmpCtx$;
    if (r === "#text") {
      const S = t.$signal$,
        x = Mo(o, t.$text$);
      return S && i && Qe(2, i.$element$, S, x, "data"), (t.$elm$ = x);
    }
    let c,
      l = !!(n & Ve),
      u = !!(n & me);
    !u && r === "svg" && ((n |= me), (u = !0));
    const a = r === Me,
      $ = t.$props$,
      p = Re in $,
      h = e.$static$;
    a
      ? (c = Co(o))
      : r === "head"
      ? ((c = o.head), (n |= Ve), (l = !0))
      : ((c = Ln(o, r, u)), (n &= ~Ve)),
      (t.$elm$ = c),
      u && r === "foreignObject" && ((u = !1), (n &= ~me));
    const m = q(c);
    if (p) {
      Ut(c, t.$key$), T(a, "component must be a virtual element");
      const S = $[Re];
      K(S), lr(m, e, $.props), on(e, m), (m.$componentQrl$ = S);
      const x = R(qn(e, m, n), () => {
        let b = t.$children$;
        if (b.length === 0) return;
        b.length === 1 && b[0].$type$ === ft && (b = b[0].$children$);
        const _ = On(e, m),
          L = cr(m),
          N = [];
        for (const A of b) {
          const V = Ge(_, A, n, N);
          v(A.$elm$, "vnode elm must be defined"),
            oe(V, A.$elm$, "vnode elm must be defined"),
            vo(h, or(h, L, c, ir(A)), V);
        }
        return Is(N);
      });
      return Q(x) && s.push(x), c;
    }
    const y = a && qe in $,
      g = !a && "ref" in $,
      k = m.li;
    if (
      ((t.$props$ = pi(h, m, i == null ? void 0 : i.$element$, $, u)), i && !a)
    ) {
      const S = i.$scopeIds$;
      S &&
        S.forEach((x) => {
          c.classList.add(x);
        }),
        i.$flags$ & Ie && (k.push(...i.li), (i.$flags$ &= ~Ie));
    }
    if (
      (y &&
        (v(i, "slot can only be used inside component"),
        v(i.$slots$, "current component slots must be a defined array"),
        Ut(c, t.$key$),
        B(c, wn, i.$id$),
        i.$slots$.push(t),
        h.$addSlots$.push([c, i.$element$])),
      ge &&
        (Ut(c, t.$key$),
        l && !a && B(c, "q:head", ""),
        (k.length > 0 || g) && on(e, m)),
      $[Ye] !== void 0)
    )
      return (
        E &&
          t.$children$.length > 0 &&
          C("Node can not have children when innerHTML is set"),
        c
      );
    let d = t.$children$;
    if (d.length === 0) return c;
    d.length === 1 && d[0].$type$ === ft && (d = d[0].$children$);
    const w = d.map((S) => Ge(e, S, n, s));
    for (const S of w) Ze(c, S);
    return c;
  },
  oi = (e) => {
    const t = e.$slots$;
    if (!t) {
      const n = e.$element$.parentElement;
      return (
        v(n, "component should be already attached to the dom"),
        (e.$slots$ = ii(e))
      );
    }
    return t;
  },
  cr = (e) => {
    var o, i;
    const t = oi(e),
      n = {},
      s = {},
      r = Array.from(e.$element$.childNodes).filter(sr);
    for (const c of t)
      _t(c.$elm$), (n[(o = c.$key$) != null ? o : ""] = c.$elm$);
    for (const c of r) s[(i = ie(c, Z)) != null ? i : ""] = c;
    return { slots: n, templates: s };
  },
  ii = (e) => {
    const t = e.$element$.parentElement;
    return (
      v(t, "component should be already attached to the dom"),
      Ao(t, wn, e.$id$).map(Xe)
    );
  },
  ci = (e, t, n, s) => (ye(e, t.style, "cssText", er(s)), !0),
  li = (e, t, n, s, r) => {
    T(
      r == null || typeof r == "string",
      "class oldValue must be either nullish or string",
      r
    ),
      T(
        s == null || typeof s == "string",
        "class newValue must be either nullish or string",
        s
      );
    const o = rn(r),
      i = rn(s);
    return (
      ko(
        e,
        t,
        o.filter((c) => c && !i.includes(c)),
        i.filter((c) => c && !o.includes(c))
      ),
      !0
    );
  },
  us = (e, t, n, s) => (n in t && t[n] !== s && ye(e, t, n, s), !0),
  He = (e, t, n, s) => (Cn(e, t, n.toLowerCase(), s), !0),
  Ye = "dangerouslySetInnerHTML",
  ui = (e, t, n, s) => (
    Ye in t ? ye(e, t, Ye, s) : "innerHTML" in t && ye(e, t, "innerHTML", s), !0
  ),
  ai = () => !0,
  $i = {
    style: ci,
    class: li,
    value: us,
    checked: us,
    href: He,
    list: He,
    form: He,
    tabIndex: He,
    download: He,
    [Ye]: ui,
    innerHTML: ai,
  },
  fi = (e, t, n, s, r, o) => {
    var a;
    const i = di(s, r),
      c = {};
    if (i.length === 0) return c;
    const l = (a = r[ne]) != null ? a : X,
      u = t.$element$;
    for (let $ of i) {
      if ($ === "ref") {
        tt(u), In(r[$], u);
        continue;
      }
      let p = D(l[$]) ? l[$] : r[$];
      if (Tn($)) {
        ur(e, t, $, p);
        continue;
      }
      $ === "className" && ($ = "class"),
        D(p) && (Qe(1, n, p, u, $), (p = p.value)),
        $ === "class" && (r.class = p = Zs(p));
      const h = o ? $ : $.toLowerCase(),
        m = s[h];
      (c[h] = p), m !== p && zn(e, u, $, p, m, o);
    }
    return c;
  },
  zn = (e, t, n, s, r, o) => {
    const i = $i[n];
    if (!(i && i(e, t, n, s, r))) {
      if (!o && n in t) {
        ye(e, t, n, s);
        return;
      }
      n.startsWith(at) && $t(n.slice(at.length), e.$containerState$),
        Cn(e, t, n, s);
    }
  },
  di = (e, t) => {
    const n = Object.keys(t),
      s = n.map((o) => o.toLowerCase()),
      r = Object.keys(e);
    return (
      n.push(...r.filter((o) => !s.includes(o))),
      n.filter((o) => o !== "children")
    );
  },
  pi = (e, t, n, s, r) => {
    var u;
    const o = t.$element$,
      i = Object.keys(s),
      c = {};
    if (i.length === 0) return c;
    const l = (u = s[ne]) != null ? u : X;
    for (let a of i) {
      if (a === "children") continue;
      if (a === "ref") {
        tt(o), In(s[a], o);
        continue;
      }
      let $ = D(l[a]) ? l[a] : s[a];
      if (Tn(a)) {
        ur(e, t, a, $);
        continue;
      }
      a === "className" && (a = "class"),
        n && D($) && (Qe(1, n, $, o, a), ($ = $.value)),
        a === "class" && ($ = Zs($));
      const p = r ? a : a.toLowerCase();
      (c[p] = $), zn(e, o, a, $, void 0, r);
    }
    return c;
  },
  lr = (e, t, n) => {
    var l;
    const s = Object.keys(n);
    let r = e.$props$;
    if (
      (r || (e.$props$ = r = rt({ [be]: gt }, t.$static$.$containerState$)),
      s.length === 0)
    )
      return !1;
    const o = ce(r);
    v(o, "props have to be a proxy, but it is not", r);
    const i = De(r);
    v(i, "props have to be a proxy, but it is not", r);
    const c = (i[ne] = (l = n[ne]) != null ? l : X);
    for (const u of s)
      if (!(u === "children" || u === Z))
        if (D(c[u])) i[ae + u] = c[u];
        else {
          const a = n[u],
            $ = i[u];
          (i[u] = a), $ !== a && o.$notifySubs$(u);
        }
    return !!(e.$flags$ & xe);
  },
  Wn = (e, t, n, s) => {
    if (s && e.hasAttribute(qe)) {
      t.$rmSlots$.push(e);
      return;
    }
    const r = U(e);
    r && $o(r, n);
    const o = Je(e, "elements");
    for (const i of o) Wn(i, t, n, !0);
  },
  hi = ({ $static$: e }) => {
    To(e);
  },
  Ze = (e, t) => {
    Y(t) ? t.appendTo(e) : e.appendChild(t);
  },
  mi = (e, t) => {
    Y(t) ? t.remove() : e.removeChild(t);
  },
  Qt = (e, t, n) => {
    Y(t) ? t.insertBeforeTo(e, dt(n)) : e.insertBefore(t, dt(n));
  },
  gi = (e, t, n) => {
    const s = {};
    for (let r = t; r <= n; ++r) {
      const i = e[r].$key$;
      i != null && (s[i] = r);
    }
    return s;
  },
  ur = (e, t, n, s) => {
    const r = e.$containerState$,
      o = Ps(t.li, n, s, r.$containerEl$);
    n.startsWith("on") || Cn(e, t.$element$, o, ""), $t(o, r);
  },
  lt = (e, t) => (e.$type$ !== t.$type$ ? !1 : e.$key$ === t.$key$),
  yi = (e, t) => e.$type$ === t,
  bi = (e, t, n, s) => {
    e &&
      typeof CustomEvent == "function" &&
      e.dispatchEvent(
        new CustomEvent(t, { detail: n, bubbles: s, composed: s })
      );
  },
  ar = (e) => {
    const t = e.join(" ");
    if (t.length > 0) return t;
  },
  Si = async (e, t) => {
    const n = Ot(e),
      s = n.documentElement,
      r = dn(e) ? s : e;
    if (ie(r, Te) === "paused") throw M(Gr);
    const o = t != null ? t : r === n.documentElement ? n.body : r,
      i = Lt(r),
      c = vi(r, Ci);
    B(r, Te, "paused");
    for (const p of c) {
      const h = p.$element$,
        m = p.li;
      if (p.$scopeIds$) {
        const y = ar(p.$scopeIds$);
        y && h.setAttribute(En, y);
      }
      if ((p.$id$ && h.setAttribute(Ee, p.$id$), se(h) && m.length > 0)) {
        const y = qs(m);
        for (const g of y) h.setAttribute(g[0], Ms(g[1], p));
      }
    }
    const l = await wi(c, i, (p) => (de(p) && pn(p) ? Oi(p, i) : null)),
      u = n.createElement("script");
    B(u, "type", "qwik/json"),
      (u.textContent = Ri(JSON.stringify(l.state, void 0, E ? "  " : void 0))),
      o.appendChild(u);
    const a = Array.from(i.$events$, (p) => JSON.stringify(p)),
      $ = n.createElement("script");
    return (
      ($.textContent = `window.qwikevents||=[];window.qwikevents.push(${a.join(
        ", "
      )})`),
      o.appendChild($),
      l
    );
  },
  wi = async (e, t, n) => {
    const s = ki(t);
    let r = !1;
    for (const f of e)
      if (f.$watches$)
        for (const d of f.$watches$)
          E &&
            (d.$flags$ & fe &&
              C("Serializing dirty watch. Looks like an internal error."),
            wr(d) ||
              C(
                "Serializing disconneted watch. Looks like an internal error."
              )),
            Vn(d) && s.$resources$.push(d.$resource$),
            gr(d);
    for (const f of e) {
      const d = f.$element$,
        w = f.li;
      for (const S of w)
        if (se(d)) {
          const x = S[1],
            b = x.$captureRef$;
          if (b) for (const _ of b) O(_, s, !0);
          s.$qrls$.push(x), (r = !0);
        }
    }
    if (!r)
      return {
        state: { ctx: {}, objs: [], subs: [] },
        objs: [],
        qrls: [],
        resources: s.$resources$,
        mode: "static",
      };
    let o;
    for (; (o = s.$promises$).length > 0; )
      (s.$promises$ = []), await Promise.all(o);
    const i = s.$elements$.length > 0;
    if (i) {
      for (const f of s.$deferElements$) Hn(f, s, !1);
      for (const f of e) Ei(f, s);
    }
    for (; (o = s.$promises$).length > 0; )
      (s.$promises$ = []), await Promise.all(o);
    const c = new Map(),
      l = Array.from(s.$objSet$.keys()),
      u = new Map(),
      a = (f) => {
        let d = c.get(f);
        return (
          d === void 0 &&
            ((d = Ni(f)),
            d ? (d = he + d) : console.warn("Missing ID", f),
            c.set(f, d)),
          d
        );
      },
      $ = (f) => {
        let d = "";
        if (Q(f)) {
          const { value: S, resolved: x } = Ii(f);
          (f = S), x ? (d += "~") : (d += "_");
        }
        if (z(f)) {
          const S = De(f);
          if (S) (d += "!"), (f = S);
          else if (le(f)) {
            const x = a(f);
            return x ? x + d : null;
          }
        }
        const w = u.get(f);
        return w ? w + d : n ? n(f) : null;
      },
      p = (f) => {
        const d = $(f);
        if (d === null) throw M(Yr, f);
        return d;
      },
      h = new Map();
    l.forEach((f) => {
      var x, b;
      const d = (x = Li(f, t)) == null ? void 0 : x.$subs$;
      if (!d) return null;
      const w = (b = Mc(f)) != null ? b : 0,
        S = [];
      w > 0 && S.push(w);
      for (const _ of d) {
        const L = _[1];
        (_[0] === 0 && de(L) && Y(L) && !s.$elements$.includes(U(L))) ||
          S.push(_);
      }
      S.length > 0 && h.set(f, S);
    }),
      l.sort((f, d) => {
        const w = h.has(f) ? 0 : 1,
          S = h.has(d) ? 0 : 1;
        return w - S;
      });
    let m = 0;
    for (const f of l) u.set(f, Be(m)), m++;
    if (s.$noSerialize$.length > 0) {
      const f = u.get(void 0);
      v(f, "undefined ID must be defined");
      for (const d of s.$noSerialize$) u.set(d, f);
    }
    const y = [];
    for (const f of l) {
      const d = h.get(f);
      if (d == null) break;
      y.push(
        d.map((w) => (typeof w == "number" ? `_${w}` : Cc(w, $))).filter(Zt)
      );
    }
    oe(y.length, h.size, "missing subscriptions to serialize", y, h);
    const g = l.map((f) => {
        if (f === null) return null;
        const d = typeof f;
        switch (d) {
          case "undefined":
            return br;
          case "number":
            if (!Number.isFinite(f)) break;
            return f;
          case "string":
          case "boolean":
            return f;
        }
        const w = _c(f, p, t);
        if (w !== void 0) return w;
        if (d === "object") {
          if (I(f)) return f.map(p);
          if (nt(f)) {
            const S = {};
            for (const x of Object.keys(f)) S[x] = p(f[x]);
            return S;
          }
        }
        throw M(_s, f);
      }),
      k = {};
    return (
      e.forEach((f) => {
        v(f, "pause: missing context for dom node");
        const d = f.$element$,
          w = f.$refMap$,
          S = f.$props$,
          x = f.$contexts$,
          b = f.$watches$,
          _ = f.$componentQrl$,
          L = f.$seq$,
          N = {},
          A = Y(d) && s.$elements$.includes(f);
        let V = !1;
        if (w.length > 0) {
          const P = w.map(p).join(" ");
          P && ((N.r = P), (V = !0));
        }
        if (i) {
          if (
            (A && S && ((N.h = p(S) + " " + p(_)), (V = !0)), b && b.length > 0)
          ) {
            const P = b.map($).filter(Zt).join(" ");
            P && ((N.w = P), (V = !0));
          }
          if (A && L && L.length > 0) {
            const P = L.map(p).join(" ");
            (N.s = P), (V = !0);
          }
          if (x) {
            const P = [];
            x.forEach((zr, Wr) => {
              const jn = $(zr);
              jn && P.push(`${Wr}=${jn}`);
            });
            const ue = P.join(" ");
            ue && ((N.c = ue), (V = !0));
          }
        }
        if (V) {
          const P = a(d);
          v(P, "pause: can not generate ID for dom node", d), (k[P] = N);
        }
      }),
      E &&
        c.forEach((f, d) => {
          f ||
            C(
              "unconnected element",
              d.nodeName,
              `
`
            );
        }),
      {
        state: { ctx: k, objs: g, subs: y },
        objs: l,
        resources: s.$resources$,
        qrls: s.$qrls$,
        mode: i ? "render" : "listeners",
      }
    );
  },
  vi = (e, t) => {
    const n = [],
      s = t(e);
    s !== void 0 && n.push(s);
    const r = e.ownerDocument.createTreeWalker(e, Ds | zs, {
      acceptNode(o) {
        if (Mi(o)) return Ws;
        const i = t(o);
        return i !== void 0 && n.push(i), tn;
      },
    });
    for (; r.nextNode(); );
    return n;
  },
  Ei = (e, t) => {
    var s;
    const n = e.$parent$;
    if (n && e.$props$ && t.$elements$.includes(n)) {
      const r = (s = ce(e.$props$)) == null ? void 0 : s.$subs$,
        o = e.$element$;
      r && r.some((i) => i[0] === 0 && i[1] === o) && _i(o, t);
    }
  },
  ki = (e) => ({
    $containerState$: e,
    $seen$: new Set(),
    $objSet$: new Set(),
    $prefetch$: 0,
    $noSerialize$: [],
    $resources$: [],
    $elements$: [],
    $qrls$: [],
    $deferElements$: [],
    $promises$: [],
  }),
  xi = (e, t) => {
    const n = U(e);
    t.$elements$.includes(n) ||
      (t.$elements$.push(n),
      t.$prefetch$++,
      n.$flags$ & Os ? Hn(n, t, !0) : t.$deferElements$.push(n),
      t.$prefetch$--);
  },
  _i = (e, t) => {
    const n = U(e);
    if (n) {
      if (t.$elements$.includes(n)) return;
      t.$elements$.push(n), Hn(n, t, !1);
    }
  },
  Hn = (e, t, n) => {
    if (
      (e.$props$ && O(e.$props$, t, n),
      e.$componentQrl$ && O(e.$componentQrl$, t, n),
      e.$seq$)
    )
      for (const s of e.$seq$) O(s, t, n);
    if (e.$watches$) for (const s of e.$watches$) O(s, t, n);
    if (n) {
      let s = e;
      for (; s; ) {
        if (s.$contexts$) {
          for (const r of s.$contexts$.values()) O(r, t, n);
          if (s.$contexts$.get("_") === !0) break;
        }
        s = s.$parent$;
      }
    }
  },
  Ri = (e) => e.replace(/<(\/?script)/g, "\\x3C$1"),
  $r = (e, t) => {
    if (t.$seen$.has(e)) return;
    t.$seen$.add(e);
    const n = e.$subs$;
    v(n, "subs must be defined");
    for (const s of n) {
      const r = s[1];
      de(r) && Y(r) ? s[0] === 0 && xi(r, t) : O(r, t, !0);
    }
  },
  bt = Symbol(),
  Ti = (e) =>
    e.then(
      (t) => {
        const n = { resolved: !0, value: t };
        return (e[bt] = n), t;
      },
      (t) => {
        const n = { resolved: !1, value: t };
        return (e[bt] = n), t;
      }
    ),
  Ii = (e) => (
    T(bt in e, "pause: promise was not resolved previously", e), e[bt]
  ),
  O = (e, t, n) => {
    if (e !== null) {
      const s = typeof e;
      switch (s) {
        case "function":
        case "object": {
          const r = t.$seen$;
          if (r.has(e)) return;
          if ((r.add(e), !Ic(e))) {
            t.$objSet$.add(void 0), t.$noSerialize$.push(e);
            return;
          }
          const o = e,
            i = De(e);
          if (i) {
            if (((e = i), r.has(e))) return;
            r.add(e), n && $r(ce(o), t);
          }
          if (xc(e, t, n)) {
            t.$objSet$.add(e);
            return;
          }
          if (Q(e)) {
            t.$promises$.push(
              Ti(e).then((l) => {
                O(l, t, n);
              })
            );
            return;
          }
          if (s === "object") {
            if (de(e)) return;
            if (I(e)) for (let l = 0; l < e.length; l++) O(e[l], t, n);
            else if (nt(e)) for (const l of Object.keys(e)) O(e[l], t, n);
          }
          break;
        }
      }
    }
    t.$objSet$.add(e);
  },
  Mi = (e) => se(e) && e.hasAttribute(Te),
  Ci = (e) => {
    const t = js(e);
    if (le(t)) {
      const n = U(t);
      if (n && n.$id$) return n;
    }
  },
  Li = (e, t) => {
    if (!z(e)) return;
    if (e instanceof je) return ce(e);
    const n = t.$proxyMap$.get(e);
    if (n) return ce(n);
  },
  Ni = (e) => {
    const t = U(e);
    return t ? t.$id$ : null;
  },
  Oi = (e, t) => {
    const n = e.previousSibling;
    if (n && et(n) && n.data.startsWith("t=")) return he + n.data.slice(2);
    const s = e.ownerDocument,
      r = Be(t.$elementIndex$++),
      o = s.createComment(`t=${r}`),
      i = s.createComment(""),
      c = e.parentElement;
    return c.insertBefore(o, e), c.insertBefore(i, e.nextSibling), he + r;
  },
  fr = (e) => {
    ie(e, Te) === "paused" && (qi(e), ge && Ui(e));
  },
  qi = (e) => {
    if (!ts(e)) {
      C("Skipping hydration because parent element is not q:container");
      return;
    }
    let t = 0;
    const n = Ot(e),
      r = e === n.documentElement ? n.body : e,
      o = Hi(r);
    if (!o) {
      C("Skipping hydration qwik/json metadata was not found.");
      return;
    }
    o.remove();
    const i = Lt(e);
    zi(e, i);
    const c = JSON.parse(Wi(o.textContent || "{}")),
      l = new Map(),
      u = (h) => Di(h, l, c.objs, i),
      a = n.createTreeWalker(e, zs | Ds, {
        acceptNode(h) {
          if (et(h)) {
            const m = h.data;
            if (m.startsWith("qv ")) {
              const y = Ks(h),
                g = new Nn(h, y),
                k = ie(g, Ee);
              if (k) {
                const f = q(g);
                (f.$id$ = k), l.set(he + k, g), (t = Math.max(t, _e(k)));
              }
            } else if (m.startsWith("t=")) {
              const y = m.slice(2);
              l.set(he + m.slice(2), Fi(h)), (t = Math.max(t, _e(y)));
            }
            return tn;
          }
          return ts(h) ? Ws : h.hasAttribute(Ee) ? yo : tn;
        },
      });
    let $ = null;
    for (; ($ = a.nextNode()); ) {
      tt($);
      const h = ie($, Ee);
      v(h, "resume: element missed q:id", $);
      const m = q($);
      (m.$id$ = h),
        (m.$vdom$ = Xe($)),
        l.set(he + h, $),
        (t = Math.max(t, _e(h)));
    }
    i.$elementIndex$ = ++t;
    const p = Rc(u, i, n);
    Pi(c.objs, p), Ai(c.objs, c.subs, u, i, p);
    for (const h of c.objs) Qi(h, u, p);
    for (const h of Object.keys(c.ctx)) {
      T(h.startsWith("#"), "elementId must start with #");
      const m = c.ctx[h],
        y = l.get(h);
      v(y, "resume: cant find dom node for id", h), _t(y);
      const g = q(y),
        k = m.r,
        f = m.s,
        d = m.h,
        w = m.c,
        S = m.w;
      if (
        (k &&
          (T(se(y), "el must be an actual DOM element"),
          (g.$refMap$ = k.split(" ").map(u)),
          (g.li = mo(g, e))),
        f && (g.$seq$ = f.split(" ").map(u)),
        S && (g.$watches$ = S.split(" ").map(u)),
        w)
      ) {
        g.$contexts$ = new Map();
        for (const x of w.split(" ")) {
          const [b, _] = x.split("=");
          g.$contexts$.set(b, u(_));
        }
      }
      if (d) {
        const [x, b] = d.split(" "),
          _ = y.getAttribute(En);
        v(x, "resume: props missing in host metadata", d),
          v(b, "resume: renderQRL missing in host metadata", d),
          (g.$scopeIds$ = _ ? _.split(" ") : null),
          (g.$flags$ = _n),
          (g.$props$ = u(x)),
          (g.$componentQrl$ = u(b));
      }
    }
    B(e, Te, "resumed"), xs("Container resumed"), bi(e, "qresume", void 0, !0);
  },
  Pi = (e, t) => {
    for (let n = 0; n < e.length; n++) {
      const s = e[n];
      Oe(s) && (e[n] = s === br ? void 0 : t.prepare(s));
    }
  },
  Ai = (e, t, n, s, r) => {
    for (let o = 0; o < t.length; o++) {
      const i = e[o],
        c = t[o];
      if (c) {
        const l = [];
        let u = 0;
        for (const a of c)
          a.startsWith("_") ? (u = parseInt(a.slice(1), 10)) : l.push(Lc(a, n));
        u > 0 && (i[be] = u), r.subs(i, l) || rt(i, s, l);
      }
    }
  },
  Qi = (e, t, n) => {
    if (!n.fill(e) && e && typeof e == "object") {
      if (I(e)) for (let s = 0; s < e.length; s++) e[s] = t(e[s]);
      else if (nt(e)) for (const s of Object.keys(e)) e[s] = t(e[s]);
    }
  },
  Di = (e, t, n, s) => {
    if (
      (T(
        typeof e == "string" && e.length > 0,
        "resume: id must be an non-empty string, got:",
        e
      ),
      e.startsWith(he))
    )
      return T(t.has(e), "missing element for id:", e), t.get(e);
    const r = _e(e);
    T(n.length > r, "resume: index is out of bounds", e);
    let o = n[r];
    for (let i = e.length - 1; i >= 0; i--) {
      const c = e[i],
        l = Tc[c];
      if (!l) break;
      o = l(o, s);
    }
    return o;
  },
  zi = (e, t) => {
    const n = e.ownerDocument.head;
    e.querySelectorAll("style[q\\:style]").forEach((s) => {
      t.$styleIds$.add(ie(s, vn)), n.appendChild(s);
    });
  },
  Wi = (e) => e.replace(/\\x3C(\/?script)/g, "<$1"),
  Hi = (e) => {
    let t = e.lastElementChild;
    for (; t; ) {
      if (t.tagName === "SCRIPT" && ie(t, "type") === "qwik/json") return t;
      t = t.previousElementSibling;
    }
  },
  Fi = (e) => {
    const t = e.nextSibling;
    if (pn(t)) return t;
    {
      const n = e.ownerDocument.createTextNode("");
      return e.parentElement.insertBefore(n, e), n;
    }
  },
  Ui = (e) => {
    e.qwik = { pause: () => Si(e), state: Lt(e) };
  },
  Fn = () => {
    const e = kn();
    let t = e.$qrl$;
    if (t)
      K(t),
        v(
          t.$captureRef$,
          "invoke: qrl $captureRef$ must be defined inside useLexicalScope()",
          t
        );
    else {
      const n = e.$element$;
      v(n, "invoke: element must be defined inside useLexicalScope()", e);
      const s = Ns(n),
        r = q(n);
      v(s, "invoke: cant find parent q:container of", n),
        (t = It(decodeURIComponent(String(e.$url$)), s)),
        K(t),
        fr(s),
        Cs(t, r);
    }
    return t.$captureRef$;
  },
  Vi = (e, t) => {
    var r;
    const n = (r = t[5]) != null ? r : "value",
      s = t[2][n];
    switch (t[0]) {
      case 1: {
        const o = t[4],
          i = t[3],
          c = U(i),
          l = i.namespaceURI === An;
        let u;
        if (c && c.$vdom$) {
          const a = l ? o : o.toLowerCase();
          (u = c.$vdom$.$props$[a]), (c.$vdom$.$props$[a] = s);
        }
        return zn(e, i, o, s, u, l);
      }
      case 2:
        return ye(e, t[3], "data", ht(s));
    }
  },
  Bi = (e, t) => {
    if (e[0] === 0) {
      const n = e[1];
      le(n) ? ji(n, t) : Un(n, t);
    } else Ki(e, t);
  },
  ji = (e, t) => {
    const n = H();
    n || fr(t.$containerEl$);
    const s = q(e);
    if (
      (v(
        s.$componentQrl$,
        "render: notified host element must have a defined $renderQrl$",
        s
      ),
      s.$flags$ & xe)
    )
      return;
    if (((s.$flags$ |= xe), t.$hostsRendering$ !== void 0))
      v(
        t.$renderPromise$,
        "render: while rendering, $renderPromise$ must be defined",
        t
      ),
        t.$hostsStaging$.add(e);
    else {
      if (n) {
        C("Can not rerender in server platform");
        return;
      }
      t.$hostsNext$.add(e), Dt(t);
    }
  },
  Ki = (e, t) => {
    t.$hostsRendering$ !== void 0
      ? (v(
          t.$renderPromise$,
          "render: while rendering, $renderPromise$ must be defined",
          t
        ),
        t.$opsNext$.add(e))
      : (t.$opsNext$.add(e), Dt(t));
  },
  Un = (e, t) => {
    if (e.$flags$ & fe) return;
    (e.$flags$ |= fe),
      t.$hostsRendering$ !== void 0
        ? (v(
            t.$renderPromise$,
            "render: while rendering, $renderPromise$ must be defined",
            t
          ),
          t.$watchStaging$.add(e))
        : (t.$watchNext$.add(e), Dt(t));
  },
  Dt = (e) => (
    e.$renderPromise$ === void 0 &&
      (e.$renderPromise$ = Tt().nextTick(() => Xi(e))),
    e.$renderPromise$
  ),
  Ji = () => {
    const [e] = Fn();
    Un(e, Lt(Ns(e.$el$)));
  },
  Xi = async (e) => {
    const t = Ot(e.$containerEl$);
    try {
      const n = Ys(t, e),
        s = n.$static$,
        r = (e.$hostsRendering$ = new Set(e.$hostsNext$));
      e.$hostsNext$.clear(),
        await Yi(e),
        e.$hostsStaging$.forEach((i) => {
          r.add(i);
        }),
        e.$hostsStaging$.clear();
      const o = Array.from(r);
      ec(o);
      for (const i of o)
        if (!s.$hostElements$.has(i)) {
          const c = q(i);
          if (c.$componentQrl$) {
            T(i.isConnected, "element must be connected to the dom"),
              s.$roots$.push(c);
            try {
              await qn(n, c, Gi(i.parentElement));
            } catch (l) {
              if (E) throw l;
            }
          }
        }
      if (
        (e.$opsNext$.forEach((i) => Vi(s, i)),
        e.$opsNext$.clear(),
        s.$operations$.push(...s.$postOperations$),
        s.$operations$.length === 0)
      ) {
        os(s), await as(e, s);
        return;
      }
      await Tt().raf(() => (hi(n), os(s), as(e, s)));
    } catch (n) {
      Ne(n);
    }
  },
  Gi = (e) => {
    let t = 0;
    return (
      e &&
        (e.namespaceURI === An && (t |= me), e.tagName === "HEAD" && (t |= Ve)),
      t
    );
  },
  as = async (e, t) => {
    await Zi(e, (s, r) =>
      (s.$flags$ & dr) === 0 ? !1 : r ? t.$hostElements$.has(s.$el$) : !0
    ),
      e.$hostsStaging$.forEach((s) => {
        e.$hostsNext$.add(s);
      }),
      e.$hostsStaging$.clear(),
      (e.$hostsRendering$ = void 0),
      (e.$renderPromise$ = void 0),
      e.$hostsNext$.size + e.$watchNext$.size + e.$opsNext$.size > 0 && Dt(e);
  },
  Yi = async (e) => {
    const t = e.$containerEl$,
      n = [],
      s = [],
      r = (i) => (i.$flags$ & pr) !== 0,
      o = (i) => (i.$flags$ & hr) !== 0;
    e.$watchNext$.forEach((i) => {
      r(i) &&
        (s.push(R(i.$qrl$.$resolveLazy$(t), () => i)), e.$watchNext$.delete(i)),
        o(i) &&
          (n.push(R(i.$qrl$.$resolveLazy$(t), () => i)),
          e.$watchNext$.delete(i));
    });
    do
      if (
        (e.$watchStaging$.forEach((i) => {
          r(i)
            ? s.push(R(i.$qrl$.$resolveLazy$(t), () => i))
            : o(i)
            ? n.push(R(i.$qrl$.$resolveLazy$(t), () => i))
            : e.$watchNext$.add(i);
        }),
        e.$watchStaging$.clear(),
        s.length > 0)
      ) {
        const i = await Promise.all(s);
        ln(i), await Promise.all(i.map((c) => St(c, e))), (s.length = 0);
      }
    while (e.$watchStaging$.size > 0);
    if (n.length > 0) {
      const i = await Promise.all(n);
      ln(i), i.forEach((c) => St(c, e));
    }
  },
  Zi = async (e, t) => {
    const n = [],
      s = e.$containerEl$;
    e.$watchNext$.forEach((r) => {
      t(r, !1) &&
        (n.push(R(r.$qrl$.$resolveLazy$(s), () => r)), e.$watchNext$.delete(r));
    });
    do
      if (
        (e.$watchStaging$.forEach((r) => {
          t(r, !0)
            ? n.push(R(r.$qrl$.$resolveLazy$(s), () => r))
            : e.$watchNext$.add(r);
        }),
        e.$watchStaging$.clear(),
        n.length > 0)
      ) {
        const r = await Promise.all(n);
        ln(r), await Promise.all(r.map((o) => St(o, e))), (n.length = 0);
      }
    while (e.$watchStaging$.size > 0);
  },
  ec = (e) => {
    e.sort((t, n) => (t.compareDocumentPosition(dt(n)) & 2 ? 1 : -1));
  },
  ln = (e) => {
    e.sort((t, n) =>
      t.$el$ === n.$el$
        ? t.$index$ < n.$index$
          ? -1
          : 1
        : (t.$el$.compareDocumentPosition(dt(n.$el$)) & 2) !== 0
        ? 1
        : -1
    );
  },
  dr = 1 << 0,
  pr = 1 << 1,
  fe = 1 << 2,
  $s = 1 << 3,
  hr = 1 << 4,
  tc = (e, t) => {
    const { get: n, set: s, ctx: r, i: o } = Pe();
    if (n) return;
    K(e);
    const i = r.$hostElement$,
      c = r.$renderCtx$.$static$.$containerState$,
      l = new ot(fe | pr, o, i, e, void 0),
      u = q(i);
    s(!0),
      e.$resolveLazy$(c.$containerEl$),
      u.$watches$ || (u.$watches$ = []),
      u.$watches$.push(l),
      ao(r, () => St(l, c, r.$renderCtx$)),
      H() && un(l, t == null ? void 0 : t.eagerness);
  },
  El = (e, t) => {
    var $;
    const { get: n, set: s, i: r, ctx: o } = Pe(),
      i = ($ = t == null ? void 0 : t.eagerness) != null ? $ : "visible";
    if (n) {
      H() && un(n, i);
      return;
    }
    K(e);
    const c = o.$hostElement$,
      l = new ot(dr, r, c, e, void 0),
      u = q(c),
      a = o.$renderCtx$.$static$.$containerState$;
    u.$watches$ || (u.$watches$ = []),
      u.$watches$.push(l),
      s(l),
      un(l, i),
      H() || (e.$resolveLazy$(a.$containerEl$), Un(l, a));
  },
  Vn = (e) => !!e.$resource$,
  St = async (e, t, n) => (
    oe(!!(e.$flags$ & fe), !0, "Resource is not dirty", e),
    Vn(e) ? mr(e, t) : nc(e, t, n)
  ),
  mr = (e, t, n) => {
    (e.$flags$ &= ~fe), wt(e);
    const s = e.$el$,
      r = te(s, void 0, "WatchEvent"),
      { $subsManager$: o } = t;
    e.$qrl$.$captureRef$;
    const i = e.$qrl$.getFn(r, () => {
        o.$clearSub$(e);
      }),
      c = [],
      l = e.$resource$;
    v(
      l,
      'useResource: when running a resource, "watch.r" must be a defined.',
      e
    );
    const u = (f, d) => {
        if (j(f)) {
          const S = te();
          return (S.$subscriber$ = e), ee(S, f);
        }
        const w = ce(f);
        return (
          w ? w.$addSub$([0, e, d]) : Se(Rt(Rs), f),
          d ? f[d] : D(f) ? f.value : f
        );
      },
      a = it(l),
      $ = {
        track: u,
        cleanup(f) {
          c.push(f);
        },
        cache(f) {
          let d = 0;
          f === "immutable" ? (d = 1 / 0) : (d = f), (l._cache = d);
        },
        previous: a._resolved,
      };
    let p,
      h,
      m = !1;
    const y = (f, d) =>
      m
        ? !1
        : ((m = !0),
          f
            ? ((m = !0),
              (l.loading = !1),
              (l._state = "resolved"),
              (l._resolved = d),
              (l._error = void 0),
              p(d))
            : ((m = !0),
              (l.loading = !1),
              (l._state = "rejected"),
              (l._resolved = void 0),
              (l._error = d),
              h(d)),
          !0);
    ee(r, () => {
      (l._state = "pending"),
        (l.loading = !H()),
        (l._resolved = void 0),
        (l.promise = new Promise((f, d) => {
          (p = f), (h = d);
        }));
    }),
      (e.$destroy$ = Wt(() => {
        c.forEach((f) => f());
      }));
    const g = yn(
        () => R(n, () => i($)),
        (f) => {
          y(!0, f);
        },
        (f) => {
          y(!1, f);
        }
      ),
      k = a._timeout;
    return k > 0
      ? Promise.race([
          g,
          io(k).then(() => {
            y(!1, new Error("timeout")) && wt(e);
          }),
        ])
      : g;
  },
  nc = (e, t, n) => {
    (e.$flags$ &= ~fe), wt(e);
    const s = e.$el$,
      r = te(s, void 0, "WatchEvent"),
      { $subsManager$: o } = t,
      i = e.$qrl$.getFn(r, () => {
        o.$clearSub$(e);
      }),
      c = (a, $) => {
        if (j(a)) {
          const h = te();
          return (h.$subscriber$ = e), ee(h, a);
        }
        const p = ce(a);
        return p ? p.$addSub$([0, e, $]) : Se(Rt(Rs), a), $ ? a[$] : a;
      },
      l = [];
    e.$destroy$ = Wt(() => {
      l.forEach((a) => a());
    });
    const u = {
      track: c,
      cleanup(a) {
        l.push(a);
      },
    };
    return yn(
      () => i(u),
      (a) => {
        j(a) && l.push(a);
      },
      (a) => {
        Gs(a, s, n);
      }
    );
  },
  wt = (e) => {
    const t = e.$destroy$;
    if (t) {
      e.$destroy$ = void 0;
      try {
        t();
      } catch (n) {
        Ne(n);
      }
    }
  },
  gr = (e) => {
    if (e.$flags$ & $s) {
      e.$flags$ &= ~$s;
      const t = e.$qrl$;
      t();
    } else wt(e);
  },
  un = (e, t) => {
    t === "visible"
      ? go("qvisible", Bt(e))
      : t === "load"
      ? Zn("qinit", Bt(e))
      : t === "idle" && Zn("qidle", Bt(e));
  },
  Bt = (e) => {
    const t = e.$qrl$;
    return Ht(t.$chunk$, "_hW", Ji, null, null, [e], t.$symbol$);
  },
  sc = (e) => z(e) && e instanceof ot,
  rc = (e, t) => {
    let n = `${Be(e.$flags$)} ${Be(e.$index$)} ${t(e.$qrl$)} ${t(e.$el$)}`;
    return Vn(e) && (n += ` ${t(e.$resource$)}`), n;
  },
  oc = (e) => {
    const [t, n, s, r, o] = e.split(" ");
    return new ot(_e(t), _e(n), r, s, o);
  };
class ot {
  constructor(t, n, s, r, o) {
    (this.$flags$ = t),
      (this.$index$ = n),
      (this.$el$ = s),
      (this.$qrl$ = r),
      (this.$resource$ = o);
  }
}
const kl = (e, t) => {
    const { get: n, set: s, i: r, ctx: o } = Pe();
    if (n != null) return n;
    K(e);
    const i = o.$renderCtx$.$static$.$containerState$,
      c = ic(i, t),
      l = o.$hostElement$,
      u = new ot(fe | hr, r, l, e, c),
      a = Promise.all(o.$waitOn$.slice()),
      $ = q(l);
    return (
      mr(u, i, a),
      $.$watches$ || ($.$watches$ = []),
      $.$watches$.push(u),
      s(c),
      c
    );
  },
  xl = (e) => {
    const t = !H(),
      n = e.value;
    if (t) {
      if (e.onRejected && (n.promise.catch(() => {}), n._state === "rejected"))
        return e.onRejected(n._error);
      if (e.onPending) {
        const r = n._state;
        if (r === "pending") return e.onPending();
        if (r === "resolved") return e.onResolved(n._resolved);
        if (r === "rejected") throw n._error;
      }
    }
    const s = n.promise.then(Xn(e.onResolved), Xn(e.onRejected));
    return F(So, { children: s });
  },
  yr = (e) => {
    var n;
    return {
      __brand: "resource",
      promise: void 0,
      loading: !H(),
      _resolved: void 0,
      _error: void 0,
      _state: "pending",
      _timeout: (n = e == null ? void 0 : e.timeout) != null ? n : -1,
      _cache: 0,
    };
  },
  ic = (e, t, n) => {
    const s = yr(t);
    return (s.promise = n), rt(s, e, void 0);
  },
  cc = (e) => z(e) && e.__brand === "resource",
  lc = (e, t) => {
    const n = e._state;
    return n === "resolved"
      ? `0 ${t(e._resolved)}`
      : n === "pending"
      ? "1"
      : `2 ${t(e._error)}`;
  },
  uc = (e) => {
    const [t, n] = e.split(" "),
      s = yr(void 0);
    return (
      (s.promise = Promise.resolve()),
      t === "0"
        ? ((s._state = "resolved"), (s._resolved = n), (s.loading = !1))
        : t === "1"
        ? ((s._state = "pending"),
          (s.promise = new Promise(() => {})),
          (s.loading = !0))
        : t === "2" &&
          ((s._state = "rejected"), (s._error = n), (s.loading = !1)),
      s
    );
  },
  br = "",
  ac = {
    prefix: "",
    test: (e) => ct(e),
    collect: (e, t, n) => {
      if (e.$captureRef$) for (const s of e.$captureRef$) O(s, t, n);
      t.$prefetch$ === 0 && t.$qrls$.push(e);
    },
    serialize: (e, t) => Sn(e, { $getObjId$: t }),
    prepare: (e, t) => It(e, t.$containerEl$),
    fill: (e, t) => {
      e.$capture$ &&
        e.$capture$.length > 0 &&
        ((e.$captureRef$ = e.$capture$.map(t)), (e.$capture$ = null));
    },
  },
  $c = {
    prefix: "",
    test: (e) => sc(e),
    collect: (e, t, n) => {
      O(e.$qrl$, t, n), e.$resource$ && O(e.$resource$, t, n);
    },
    serialize: (e, t) => rc(e, t),
    prepare: (e) => oc(e),
    fill: (e, t) => {
      (e.$el$ = t(e.$el$)),
        (e.$qrl$ = t(e.$qrl$)),
        e.$resource$ && (e.$resource$ = t(e.$resource$));
    },
  },
  fc = {
    prefix: "",
    test: (e) => cc(e),
    collect: (e, t, n) => {
      O(e.promise, t, n), O(e._resolved, t, n);
    },
    serialize: (e, t) => lc(e, t),
    prepare: (e) => uc(e),
    fill: (e, t) => {
      if (e._state === "resolved")
        (e._resolved = t(e._resolved)),
          (e.promise = Promise.resolve(e._resolved));
      else if (e._state === "rejected") {
        const n = Promise.reject(e._error);
        n.catch(() => null), (e._error = t(e._error)), (e.promise = n);
      }
    },
  },
  dc = {
    prefix: "",
    test: (e) => e instanceof URL,
    serialize: (e) => e.href,
    prepare: (e) => new URL(e),
    fill: void 0,
  },
  pc = {
    prefix: "",
    test: (e) => e instanceof Date,
    serialize: (e) => e.toISOString(),
    prepare: (e) => new Date(e),
    fill: void 0,
  },
  hc = {
    prefix: "\x07",
    test: (e) => e instanceof RegExp,
    serialize: (e) => `${e.flags} ${e.source}`,
    prepare: (e) => {
      const t = e.indexOf(" "),
        n = e.slice(t + 1),
        s = e.slice(0, t);
      return new RegExp(n, s);
    },
    fill: void 0,
  },
  mc = {
    prefix: "",
    test: (e) => e instanceof Error,
    serialize: (e) => e.message,
    prepare: (e) => {
      const t = new Error(e);
      return (t.stack = void 0), t;
    },
    fill: void 0,
  },
  gc = {
    prefix: "",
    test: (e) => dn(e),
    serialize: void 0,
    prepare: (e, t, n) => n,
    fill: void 0,
  },
  vt = Symbol("serializable-data"),
  yc = {
    prefix: "",
    test: (e) => Wc(e),
    serialize: (e, t) => {
      const [n] = e[vt];
      return Sn(n, { $getObjId$: t });
    },
    prepare: (e, t) => {
      const n = e.indexOf("{"),
        s = n == -1 ? e : e.slice(0, n),
        r = It(s, t.$containerEl$);
      return Ft(r);
    },
    fill: (e, t) => {
      const [n] = e[vt];
      n.$capture$ &&
        n.$capture$.length > 0 &&
        ((n.$captureRef$ = n.$capture$.map(t)), (n.$capture$ = null));
    },
  },
  bc = {
    prefix: "",
    test: (e) => typeof e == "function" && e.__qwik_serializable__ !== void 0,
    serialize: (e) => e.toString(),
    prepare: (e) => {
      const t = new Function("return " + e)();
      return (t.__qwik_serializable__ = !0), t;
    },
    fill: void 0,
  },
  Sc = {
    prefix: "",
    test: (e) => e instanceof je,
    collect: (e, t, n) => (O(e.untrackedValue, t, n), n && $r(e[$e], t), e),
    serialize: (e, t) => t(e.untrackedValue),
    prepare: (e, t) => new je(e, t.$subsManager$.$createManager$()),
    subs: (e, t) => {
      e[$e].$addSubs$(t);
    },
    fill: (e, t) => {
      e.untrackedValue = t(e.untrackedValue);
    },
  },
  wc = {
    prefix: "",
    test: (e) => e instanceof Ce,
    collect(e, t, n) {
      return O(e.ref, t, n), e;
    },
    serialize: (e, t) => `${t(e.ref)} ${e.prop}`,
    prepare: (e) => {
      const [t, n] = e.split(" ");
      return new Ce(t, n);
    },
    fill: (e, t) => {
      e.ref = t(e.ref);
    },
  },
  vc = {
    prefix: "",
    test: (e) => typeof e == "number",
    serialize: (e) => String(e),
    prepare: (e) => Number(e),
    fill: void 0,
  },
  zt = [ac, Sc, wc, $c, fc, dc, pc, hc, mc, gc, yc, bc, vc],
  Ec = zt.filter((e) => e.collect),
  kc = (e) => {
    for (const t of zt) if (t.test(e)) return !0;
    return !1;
  },
  xc = (e, t, n) => {
    for (const s of Ec) if (s.test(e)) return s.collect(e, t, n), !0;
    return !1;
  },
  _c = (e, t, n) => {
    for (const s of zt)
      if (s.test(e)) {
        let r = s.prefix;
        return s.serialize && (r += s.serialize(e, t, n)), r;
      }
  },
  Rc = (e, t, n) => {
    const s = new Map(),
      r = new Map();
    return {
      prepare(o) {
        for (const i of zt) {
          const c = i.prefix;
          if (o.startsWith(c)) {
            const l = i.prepare(o.slice(c.length), t, n);
            return i.fill && s.set(l, i), i.subs && r.set(l, i), l;
          }
        }
        return o;
      },
      subs(o, i) {
        const c = r.get(o);
        return c ? (c.subs(o, i, t), !0) : !1;
      },
      fill(o) {
        const i = s.get(o);
        return i ? (i.fill(o, e, t), !0) : !1;
      },
    };
  },
  Tc = {
    "!": (e, t) => {
      var n;
      return (n = t.$proxyMap$.get(e)) != null ? n : Pn(e, t);
    },
    "~": (e) => Promise.resolve(e),
    _: (e) => Promise.reject(e),
  },
  we = (e) => an(e, new Set()),
  an = (e, t) => {
    const n = it(e);
    if (n == null) return e;
    if (Sr(n)) {
      if (t.has(n) || (t.add(n), kc(n))) return e;
      switch (typeof n) {
        case "object":
          if (Q(n) || le(n) || dn(n)) return e;
          if (I(n)) {
            for (const s of n) an(s, t);
            return e;
          }
          if (nt(n)) {
            for (const s of Object.values(n)) an(s, t);
            return e;
          }
          break;
        case "boolean":
        case "string":
        case "number":
          return e;
      }
      throw M(_s, n);
    }
    return e;
  },
  Bn = new WeakSet(),
  Sr = (e) => (z(e) || j(e) ? !Bn.has(e) : !0),
  Ic = (e) => !Bn.has(e),
  Wt = (e) => (e != null && Bn.add(e), e),
  wr = (e) => (le(e) ? !!U(e) || e.isConnected : wr(e.$el$)),
  it = (e) => {
    var t;
    return z(e) && (t = De(e)) != null ? t : e;
  },
  De = (e) => e[cn],
  ce = (e) => e[$e],
  Mc = (e) => e[be],
  Cc = (e, t) => {
    const n = e[0],
      s = t(e[1]);
    if (!s) return;
    let r = n + " " + s;
    if (e[0] === 0) e[2] && (r += " " + e[2]);
    else {
      const o = typeof e[3] == "string" ? e[3] : fs(t(e[3]));
      (r += ` ${fs(t(e[2]))} ${o} ${e[4]}`), e[5] && (r += ` ${e[5]}`);
    }
    return r;
  },
  Lc = (e, t) => {
    const n = e.split(" "),
      s = parseInt(n[0], 10);
    T(n.length >= 2, "At least 2 parts");
    const r = [s, t(n[1])];
    return (
      s === 0
        ? (T(n.length <= 3, "Max 3 parts"), r.push(n[2]))
        : (T(n.length === 5 || n.length === 6, "Max 5 parts"),
          r.push(t(n[2]), t(n[3]), n[4], n[5])),
      r
    );
  },
  Nc = (e) => {
    const t = new Map(),
      n = {
        $createManager$: (s) => new Oc(t, e, s),
        $clearSub$: (s) => {
          const r = t.get(s);
          if (r) {
            for (const o of r) o.$unsubGroup$(s);
            t.delete(s), (r.length = 0);
          }
        },
      };
    return W(n), n;
  };
class Oc {
  constructor(t, n, s) {
    (this.$groupToManagers$ = t),
      (this.$containerState$ = n),
      (this.$subs$ = []),
      s && this.$addSubs$(s),
      W(this);
  }
  $addSubs$(t) {
    this.$subs$.push(...t);
    for (const n of this.$subs$) this.$addToGroup$(n[1], this);
  }
  $addToGroup$(t, n) {
    let s = this.$groupToManagers$.get(t);
    s || this.$groupToManagers$.set(t, (s = [])), s.includes(n) || s.push(n);
  }
  $unsubGroup$(t) {
    const n = this.$subs$;
    for (let s = 0; s < n.length; s++) n[s][1] === t && (n.splice(s, 1), s--);
  }
  $addSub$(t) {
    const n = this.$subs$,
      s = t[1],
      r = t[t.length - 1];
    n.some(([o, i, c]) => o === 0 && i === s && c === r) ||
      (n.push(t), this.$addToGroup$(s, this));
  }
  $notifySubs$(t) {
    const n = this.$subs$;
    for (const s of n) {
      const r = s[s.length - 1];
      (t && r && r !== t) || Bi(s, this.$containerState$);
    }
  }
}
const fs = (e) => {
    if (e == null) throw Ne("must be non null", e);
    return e;
  },
  ct = (e) => typeof e == "function" && typeof e.getSymbol == "function",
  Ht = (e, t, n, s, r, o, i) => {
    E && we(o);
    let c;
    const l = (d) => {
        c || (c = d);
      },
      u = async (d) => {
        if ((d && l(d), n !== null)) return n;
        if (s !== null) return (n = s().then((w) => (n = w[t])));
        {
          if (!e) throw M(Ts, t);
          if (!c) throw M(to, e, t);
          const w = Tt().importSymbol(c, e, t);
          return (n = R(w, (S) => (n = S)));
        }
      },
      a = (d) => (n !== null ? n : u(d)),
      $ =
        (d, w) =>
        (...S) => {
          const x = Qc(),
            b = a();
          return R(b, (_) => {
            if (j(_)) {
              if (w && w() === !1) return;
              const N = { ...p(d), $qrl$: g };
              return Pc(t, N.$element$, x), ee(N, _, ...S);
            }
            throw M(Br);
          });
        },
      p = (d) => (d == null ? te() : I(d) ? Ls(d) : d),
      h = async function (...d) {
        return await $()(...d);
      },
      m = i != null ? i : t,
      y = qc(m),
      g = h,
      f = Object.assign(h, {
        getSymbol: () => m,
        getHash: () => y,
        resolve: u,
        $resolveLazy$: a,
        $setContainer$: l,
        $chunk$: e,
        $symbol$: t,
        $refSymbol$: i,
        $hash$: y,
        getFn: $,
        $capture$: r,
        $captureRef$: o,
        $dev$: null,
      });
    return W(f), f;
  },
  qc = (e) => {
    const t = e.lastIndexOf("_");
    return t > -1 ? e.slice(t + 1) : e;
  };
function K(e) {
  if (E && !ct(e)) throw new Error("Not a QRL");
}
const Pc = (e, t, n) => {
    Ac("qsymbol", { symbol: e, element: t, reqTime: n });
  },
  Ac = (e, t) => {
    !kt &&
      !H() &&
      typeof document == "object" &&
      document.dispatchEvent(new CustomEvent(e, { bubbles: !1, detail: t }));
  },
  Qc = () =>
    kt || H() ? 0 : typeof performance == "object" ? performance.now() : 0;
let Dc = 0;
const zc = (e) => {
    if (!xt)
      throw new Error(
        "Optimizer should replace all usages of $() with some special syntax. If you need to create a QRL manually, use inlinedQrl() instead."
      );
    return Ht(null, "s" + Dc++, e, null, null, null, null);
  },
  Ft = (e) => {
    function t(n, s) {
      K(e),
        E &&
          ee(te(), () => {
            for (const i of Object.keys(n)) i !== "children" && we(n[i]);
          });
      const o = (kt ? "sX" : e.$hash$) + ":" + (s || "");
      return F(st, { [Re]: e, [Z]: n[Z], children: n.children, props: n }, o);
    }
    return (t[vt] = [e]), t;
  },
  Wc = (e) => typeof e == "function" && e[vt] !== void 0,
  vr = (e) => {
    var n;
    const t = (n = e.name) != null ? n : "";
    return F(st, { [qe]: "" }, t);
  },
  Hc = "0.12.1",
  ut = "<!--qkssr-f-->",
  jt = 1 << 0,
  $n = 1 << 2,
  Er = 1 << 3,
  Fc = () => {
    const e = { nodeType: 9 };
    return W(e), e;
  },
  _l = async (e, t) => {
    var a;
    const n = t.containerTagName,
      s = fn(1).$element$,
      r = Qs(s),
      o = Fc(),
      i = Ys(o, r),
      c = (a = t.beforeContent) != null ? a : [],
      l = {
        rCtx: i,
        $contexts$: [],
        projectedChildren: void 0,
        projectedContext: void 0,
        hostCtx: null,
        invocationContext: void 0,
        headNodes: n === "html" ? c : [],
        $pendingListeners$: [],
      },
      u = {
        ...t.containerAttributes,
        "q:container": "paused",
        "q:version": Hc,
        "q:render": E ? "ssr-dev" : "ssr",
        "q:base": t.base,
        children: n === "html" ? [e] : [c, e],
      };
    (r.$envData$ = { url: t.url, ...t.envData }),
      (e = F(n, u)),
      (r.$hostsRendering$ = new Set()),
      (r.$renderPromise$ = Promise.resolve().then(() =>
        Uc(e, l, t.stream, r, t)
      )),
      await r.$renderPromise$;
  },
  Uc = async (e, t, n, s, r) => {
    const o = r.beforeClose;
    return (
      await _r(
        e,
        t,
        n,
        0,
        o
          ? (i) => {
              const c = o(t.$contexts$, s);
              return G(c, t, i, 0, void 0);
            }
          : void 0
      ),
      E &&
        t.headNodes.length > 0 &&
        Ne(
          "Missing <head>. Global styles could not be rendered. Please render a <head> element at the root of the app"
        ),
      t.rCtx.$static$
    );
  },
  Vc = async (e, t, n, s) => {
    n.write(ut);
    const r = e.props.children;
    let o;
    if (j(r)) {
      const i = r({
        write(c) {
          n.write(c), n.write(ut);
        },
      });
      if (Q(i)) return i;
      o = i;
    } else o = r;
    for await (const i of o) await G(i, t, n, s, void 0), n.write(ut);
  },
  kr = (e, t, n, s, r, o, i) => {
    var h;
    const c = e.props,
      l = c[Re];
    if (l) return (t.$componentQrl$ = l), Kc(s, r, t, e, o, i);
    let u = "<!--qv" + jc(c);
    const a = qe in c,
      $ = e.key != null ? String(e.key) : null;
    if (
      (a &&
        (v(
          (h = s.hostCtx) == null ? void 0 : h.$id$,
          "hostId must be defined for a slot"
        ),
        (u += " q:sref=" + s.hostCtx.$id$)),
      $ != null && (u += " q:key=" + $),
      (u += "-->"),
      r.write(u),
      n)
    )
      for (const m of n) xr(m.type, m.props, r);
    const p = Rr(c.children, s, r, o);
    return R(p, () => {
      var y;
      if (!a && !i) {
        r.write(ds);
        return;
      }
      let m;
      if (a) {
        v($, "key must be defined for a slot");
        const g = (y = s.projectedChildren) == null ? void 0 : y[$];
        g &&
          ((s.projectedChildren[$] = void 0),
          (m = G(g, s.projectedContext, r, o)));
      }
      return (
        i && (m = R(m, () => i(r))),
        R(m, () => {
          r.write(ds);
        })
      );
    });
  },
  ds = "<!--/qv-->",
  Bc = (e) => {
    let t = "";
    for (const n of Object.keys(e)) {
      if (n === "dangerouslySetInnerHTML") continue;
      const s = e[n];
      s != null && (t += " " + (s === "" ? n : n + '="' + s + '"'));
    }
    return t;
  },
  jc = (e) => {
    let t = "";
    for (const n of Object.keys(e)) {
      if (n === "children") continue;
      const s = e[n];
      s != null && (t += " " + (s === "" ? n : n + "=" + s));
    }
    return t;
  },
  xr = (e, t, n) => {
    if ((n.write("<" + e + Bc(t) + ">"), !!Mr[e])) return;
    const r = t.dangerouslySetInnerHTML;
    r != null && n.write(r), n.write(`</${e}>`);
  },
  Kc = (e, t, n, s, r, o) => {
    const i = s.props;
    return (
      Gc(e.rCtx, n, i.props),
      R(pt(e.rCtx, n), (c) => {
        const l = n.$element$,
          u = c.rCtx,
          a = te(l, void 0);
        (a.$subscriber$ = l), (a.$renderCtx$ = u);
        const $ = { ...e, rCtx: u },
          p = {
            ...e,
            projectedChildren: Jc(i.children, e),
            projectedContext: $,
            rCtx: u,
            invocationContext: a,
          },
          h = [];
        if (n.$appendStyles$) {
          const f = !!(r & $n) ? e.headNodes : h;
          for (const d of n.$appendStyles$)
            f.push(
              F("style", {
                [vn]: d.styleId,
                dangerouslySetInnerHTML: d.content,
              })
            );
        }
        const m = At(e.rCtx),
          y = n.$scopeIds$ ? ar(n.$scopeIds$) : void 0,
          g = F(s.type, { [En]: y, [Ee]: m, children: c.node }, s.key);
        return (
          (n.$id$ = m),
          e.$contexts$.push(n),
          (p.hostCtx = n),
          kr(
            g,
            n,
            h,
            p,
            t,
            r,
            (k) => (
              n.$flags$ & Ie &&
                C(
                  "Component registered some events, some component use useStyles$()"
                ),
              o ? R(ps(p, k), () => o(k)) : ps(p, k)
            )
          )
        );
      })
    );
  },
  ps = (e, t) => {
    const n = e.projectedChildren;
    if (n) {
      const s = Object.keys(n).map((r) => {
        const o = n[r];
        if (o)
          return F("q:template", {
            [Z]: r,
            hidden: "",
            "aria-hidden": "true",
            children: o,
          });
      });
      return G(s, e, t, 0, void 0);
    }
  },
  Jc = (e, t) => {
    var r;
    const n = Tr(e, t);
    if (n === null) return;
    const s = {};
    for (const o of n) {
      let i = "";
      Nt(o) && (i = (r = o.props[Z]) != null ? r : "");
      let c = s[i];
      c || (s[i] = c = []), c.push(o);
    }
    return s;
  },
  fn = (e) => {
    const t = { nodeType: e, [Ct]: null };
    return W(t), q(t);
  },
  _r = (e, t, n, s, r) => {
    var l, u;
    const o = e.type,
      i = t.hostCtx;
    if ((i && rl(e) && (i.$flags$ |= Os), typeof o == "string")) {
      const a = e.key,
        $ = e.props,
        p = (l = $[ne]) != null ? l : X,
        h = fn(1),
        m = h.$element$,
        y = o === "head";
      let g = "<" + o,
        k = !1;
      tt(m);
      for (const b of Object.keys($)) {
        if (
          b === "children" ||
          b === "key" ||
          b === "class" ||
          b === "className" ||
          b === "dangerouslySetInnerHTML"
        )
          continue;
        if (b === "ref") {
          In($[b], m);
          continue;
        }
        let _ = D(p[b]) ? p[b] : $[b];
        if (Tn(b)) {
          Ps(h.li, b, _, void 0);
          continue;
        }
        const L = Yc(b);
        if (D(_)) {
          if (i) {
            const A = i.$element$;
            Qe(1, A, _, m, L), (k = !0);
          }
          _ = _.value;
        }
        b.startsWith(at) &&
          $t(b.slice(at.length), t.rCtx.$static$.$containerState$);
        const N = Zc(L, _);
        N != null && (g += " " + (_ === "" ? L : L + '="' + sl(N) + '"'));
      }
      const f = h.li,
        d = (u = $.class) != null ? u : $.className;
      let w = Xc(d);
      if (i) {
        if (E && o === "html") throw M(eo);
        i.$scopeIds$ && (w = i.$scopeIds$.join(" ") + " " + w),
          i.$flags$ & Ie && (f.push(...i.li), (i.$flags$ &= ~Ie));
      }
      if (
        (y && (s |= jt),
        el[o] && (s |= Er),
        (w = w.trim()),
        w && (g += ' class="' + w + '"'),
        f.length > 0)
      ) {
        const b = qs(f);
        for (const _ of b)
          (g += " " + _[0] + '="' + Ms(_[1], h) + '"'),
            $t(_[0], t.rCtx.$static$.$containerState$);
      }
      if (
        (a != null && (g += ' q:key="' + a + '"'),
        "ref" in $ || f.length > 0 || k)
      ) {
        const b = At(t.rCtx);
        (g += ' q:id="' + b + '"'), (h.$id$ = b), t.$contexts$.push(h);
      }
      if ((s & jt && (g += " q:head"), (g += ">"), n.write(g), Mr[o])) return;
      const S = $.dangerouslySetInnerHTML;
      if (S != null) {
        n.write(String(S)), n.write(`</${o}>`);
        return;
      }
      y || (s &= ~jt), o === "html" ? (s |= $n) : (s &= ~$n);
      const x = G($.children, t, n, s);
      return R(x, () => {
        if (y) {
          for (const b of t.headNodes) xr(b.type, b.props, n);
          t.headNodes.length = 0;
        }
        if (!r) {
          n.write(`</${o}>`);
          return;
        }
        return R(r(n), () => {
          n.write(`</${o}>`);
        });
      });
    }
    if (o === st) {
      const a = fn(111);
      return (a.$parent$ = t.hostCtx), kr(e, a, void 0, t, n, s, r);
    }
    if (o === Hs) {
      n.write(e.props.data);
      return;
    }
    if (o === Fs) return Vc(e, t, n, s);
    const c = ee(t.invocationContext, o, e.props, e.key);
    return G(c, t, n, s, r);
  },
  G = (e, t, n, s, r) => {
    var o;
    if (!(e == null || typeof e == "boolean"))
      if (Oe(e) || typeof e == "number") n.write(Kt(String(e)));
      else {
        if (Nt(e)) return _r(e, t, n, s, r);
        if (I(e)) return Rr(e, t, n, s);
        if (D(e)) {
          const i = s & Er,
            c = (o = t.hostCtx) == null ? void 0 : o.$element$;
          let l;
          if (c)
            if (i) l = ee(t.invocationContext, () => e.value);
            else {
              l = e.value;
              const u = At(t.rCtx);
              Qe(2, c, e, "#" + u, "data"),
                n.write(`<!--t=${u}-->${Kt(ht(l))}<!---->`);
              return;
            }
          n.write(Kt(ht(l)));
          return;
        } else {
          if (Q(e)) return n.write(ut), e.then((i) => G(i, t, n, s, r));
          C(
            "A unsupported value was passed to the JSX, skipping render. Value:",
            e
          );
        }
      }
  };
function Rr(e, t, n, s) {
  if (e == null) return;
  if (!I(e)) return G(e, t, n, s);
  if (e.length === 1) return G(e[0], t, n, s);
  if (e.length === 0) return;
  let r = 0;
  const o = [];
  return e.reduce((i, c, l) => {
    const u = [];
    o.push(u);
    const $ = G(
        c,
        t,
        i
          ? {
              write(h) {
                r === l ? n.write(h) : u.push(h);
              },
            }
          : n,
        s
      ),
      p = () => {
        r++, o.length > r && o[r].forEach((h) => n.write(h));
      };
    if (Q($) && i) return Promise.all([$, i]).then(p);
    if (Q($)) return $.then(p);
    if (i) return i.then(p);
    r++;
  }, void 0);
}
const Tr = (e, t) => {
    if (e == null) return null;
    const n = Ir(e, t),
      s = I(n) ? n : [n];
    return s.length === 0 ? null : s;
  },
  Xc = (e) => {
    if (!e) return "";
    if (typeof e == "string") return e;
    if (Array.isArray(e)) return e.join(" ");
    const t = [];
    for (const n in e)
      Object.prototype.hasOwnProperty.call(e, n) && e[n] && t.push(n);
    return t.join(" ");
  },
  Ir = (e, t) => {
    if (e == null) return null;
    if (I(e)) return e.flatMap((n) => Ir(n, t));
    if (Nt(e) && j(e.type) && e.type !== Hs && e.type !== Fs && e.type !== st) {
      const n = ee(t.invocationContext, e.type, e.props, e.key);
      return Tr(n, t);
    }
    return e;
  },
  Gc = (e, t, n) => {
    var i;
    const s = Object.keys(n),
      r = { [be]: gt };
    if (((t.$props$ = rt(r, e.$static$.$containerState$)), s.length === 0))
      return;
    const o = (r[ne] = (i = n[ne]) != null ? i : X);
    for (const c of s)
      c === "children" ||
        c === Z ||
        (D(o[c]) ? (r[ae + c] = o[c]) : (r[c] = n[c]));
  };
function Yc(e) {
  return e === "htmlFor" ? "for" : e;
}
function Zc(e, t) {
  return e === "style"
    ? er(t)
    : t === !1 || t == null
    ? null
    : t === !0
    ? ""
    : String(t);
}
const el = { title: !0, style: !0, script: !0, noframes: !0, noscript: !0 },
  Mr = {
    area: !0,
    base: !0,
    basefont: !0,
    bgsound: !0,
    br: !0,
    col: !0,
    embed: !0,
    frame: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
  tl = /[&<>]/g,
  nl = /[&"]/g,
  Kt = (e) =>
    e.replace(tl, (t) => {
      switch (t) {
        case "&":
          return "&amp;";
        case "<":
          return "&lt;";
        case ">":
          return "&gt;";
        default:
          return "";
      }
    }),
  sl = (e) =>
    e.replace(nl, (t) => {
      switch (t) {
        case "&":
          return "&amp;";
        case '"':
          return "&quot;";
        default:
          return "";
      }
    }),
  rl = (e) => {
    var t;
    return ((t = e.props[ne]) == null ? void 0 : t.children) === !1;
  },
  Fe = (e, t) => {
    var i;
    const { get: n, set: s, ctx: r } = Pe();
    if (n != null) return n;
    const o = j(e) ? e() : e;
    if ((t == null ? void 0 : t.reactive) === !1) return s(o), o;
    {
      const c = r.$renderCtx$.$static$.$containerState$,
        u = ((i = t == null ? void 0 : t.recursive) != null ? i : !1) ? mt : 0,
        a = Pn(o, c, u);
      return s(a), a;
    }
  };
function Cr(e, t) {
  var s;
  return (s = xn().$renderCtx$.$static$.$containerState$.$envData$[e]) != null
    ? s
    : t;
}
const ol = !0,
  il = !1,
  cl = Ae("qc-c"),
  Lr = Ae("qc-ic"),
  Nr = Ae("qc-h"),
  Or = Ae("qc-l"),
  qr = Ae("qc-n"),
  Rl = Ft(
    pe(() => {
      const { contents: e } = Pt(Lr);
      if (e && e.length > 0) {
        const t = e.length;
        let n = null;
        for (let s = t - 1; s >= 0; s--) n = F(e[s].default, { children: n });
        return n;
      }
      return Mn;
    }, "RouterOutlet_component_nd8yk3KO22c")
  ),
  hs = new WeakMap(),
  ll = async (e, t, n, s) => {
    if (Array.isArray(e))
      for (const r of e) {
        const o = r[0].exec(s);
        if (o) {
          const i = r[1],
            c = al(r[2], o),
            l = r[4],
            u = new Array(i.length),
            a = [],
            $ = ul(t, s);
          let p;
          return (
            i.forEach((h, m) => {
              ms(h, a, (y) => (u[m] = y), n);
            }),
            ms($, a, (h) => (p = h == null ? void 0 : h.default), n),
            a.length > 0 && (await Promise.all(a)),
            [c, u, p, l]
          );
        }
      }
    return null;
  },
  ms = (e, t, n, s) => {
    if (typeof e == "function") {
      const r = hs.get(e);
      if (r) n(r);
      else {
        const o = e();
        typeof o.then == "function"
          ? t.push(
              o.then((i) => {
                s !== !1 && hs.set(e, i), n(i);
              })
            )
          : o && n(o);
      }
    }
  },
  ul = (e, t) => {
    if (e) {
      const n = e.find(
        (s) => s[0] === t || t.startsWith(s[0] + (t.endsWith("/") ? "" : "/"))
      );
      if (n) return n[1];
    }
  },
  al = (e, t) => {
    const n = {};
    if (e) for (let s = 0; s < e.length; s++) n[e[s]] = t ? t[s + 1] : "";
    return n;
  },
  $l = (e, t, n) => {
    const s = Pr(),
      r = { data: e ? e.body : null, head: s, ...t };
    for (let o = n.length - 1; o >= 0; o--) {
      const i = n[o] && n[o].head;
      i &&
        (typeof i == "function"
          ? gs(s, i(r))
          : typeof i == "object" && gs(s, i));
    }
    return r.head;
  },
  gs = (e, t) => {
    typeof t.title == "string" && (e.title = t.title),
      Jt(e.meta, t.meta),
      Jt(e.links, t.links),
      Jt(e.styles, t.styles),
      Object.assign(e.frontmatter, t.frontmatter);
  },
  Jt = (e, t) => {
    if (Array.isArray(t))
      for (const n of t) {
        if (typeof n.key == "string") {
          const s = e.findIndex((r) => r.key === n.key);
          if (s > -1) {
            e[s] = n;
            continue;
          }
        }
        e.push(n);
      }
  },
  Pr = () => ({ title: "", meta: [], links: [], styles: [], frontmatter: {} }),
  Tl = () => Pt(Nr),
  fl = () => Pt(Or),
  dl = () => Pt(qr),
  pl = () => Wt(Cr("qwikcity")),
  Et = (e) => e.pathname + e.search + e.hash,
  Le = (e, t) => new URL(e, t.href),
  Ar = (e, t) => e.origin === t.origin,
  Qr = (e, t) => e.pathname + e.search === t.pathname + t.search,
  hl = (e, t) => e.pathname === t.pathname,
  ys = (e, t) => Ar(e, t) && !Qr(e, t),
  ml = (e) => e + (e.endsWith("/") ? "" : "/") + "q-data.json",
  gl = (e, t) => {
    const n = e.href;
    if (typeof n == "string" && n.trim() !== "" && typeof e.target != "string")
      try {
        const s = Le(n, t),
          r = Le("", t);
        if (Ar(s, r)) return Et(s);
      } catch (s) {
        console.error(s);
      }
    return null;
  },
  yl = (e, t, n) => {
    if (e.prefetch && t) {
      const s = Le(t, n);
      if (!hl(s, Le("", n))) return s + "";
    }
    return null;
  },
  bl = (e, t) => {
    const n = e.location,
      s = Le(t.path, n);
    ys(n, s) && (bs(e, n, s), e.history.pushState("", "", Et(s))),
      e[vs] ||
        ((e[vs] = 1),
        e.addEventListener("popstate", () => {
          const r = e.location,
            o = Le(t.path, r);
          ys(r, o) && (bs(e, o, r), (t.path = Et(r)));
        }));
  },
  bs = async (e, t, n) => {
    const s = e.document,
      r = n.hash;
    if (Qr(t, n)) t.hash !== r && (await Xt(), r ? Ss(s, r) : e.scrollTo(0, 0));
    else if (r) for (let o = 0; o < 24 && (await Xt(), !Ss(s, r)); o++);
    else await Xt(), e.scrollTo(0, 0);
  },
  Xt = () => new Promise((e) => setTimeout(e, 12)),
  Ss = (e, t) => {
    const n = t.slice(1),
      s = e.getElementById(n);
    return s && s.scrollIntoView(), s;
  },
  ws = (e) => {
    typeof document < "u" &&
      document.dispatchEvent(new CustomEvent("qprefetch", { detail: e }));
  },
  vs = Symbol(),
  Dr = async (e) => {
    const t = new URL(e).pathname,
      n = ml(t);
    ws({ links: [t] });
    const s = await fetch(n),
      r = s.headers.get("content-type") || "";
    if (s.ok && r.includes("json")) {
      const o = await s.json();
      return ws({ bundles: o.prefetch, links: [t] }), o;
    }
  },
  Il = Ft(
    pe(() => {
      const e = pl();
      if (!(e != null && e.params))
        throw new Error("Missing Qwik City Env Data");
      const t = Cr("url");
      if (!t) throw new Error("Missing Qwik URL Env Data");
      const n = new URL(t),
        s = Fe({
          href: n.href,
          pathname: n.pathname,
          query: Object.fromEntries(n.searchParams.entries()),
          params: e.params,
        }),
        r = Fe({ path: Et(n) }),
        o = Fe(Pr),
        i = Fe({ headings: void 0, menu: void 0 }),
        c = Fe({ contents: void 0 });
      return (
        ze(cl, i),
        ze(Lr, c),
        ze(Nr, o),
        ze(Or, s),
        ze(qr, r),
        tc(
          pe(
            async ({ track: l }) => {
              const [u, a, $, p, h, m] = Fn(),
                {
                  routes: y,
                  menus: g,
                  cacheModules: k,
                } = await import("../@qwik-city-plan.js"),
                f = l(m, "path"),
                d = new URL(f, h.href),
                w = d.pathname,
                S = ll(y, g, k, w),
                x = ol ? p.response : Dr(d.href),
                b = await S;
              if (b) {
                const [_, L, N] = b,
                  A = L,
                  V = A[A.length - 1];
                (h.href = d.href),
                  (h.pathname = w),
                  (h.params = { ..._ }),
                  (h.query = Object.fromEntries(d.searchParams.entries())),
                  (u.headings = V.headings),
                  (u.menu = N),
                  (a.contents = Wt(A));
                const P = await x,
                  ue = $l(P, h, A);
                ($.links = ue.links),
                  ($.meta = ue.meta),
                  ($.styles = ue.styles),
                  ($.title = ue.title),
                  ($.frontmatter = ue.frontmatter),
                  il && bl(window, m);
              }
            },
            "QwikCity_component_useWatch_AaAlzKH0KlQ",
            [i, c, o, e, s, r]
          )
        ),
        F(vr, {})
      );
    }, "QwikCity_component_z1nvHyEppoI")
  );
pe((e) => {
  const t = dl(),
    n = fl(),
    s = e.href,
    r = { ...e },
    o = gl(r, n),
    i = yl(e, o, n);
  return (
    (r["preventdefault:click"] = !!o),
    (r.href = o || s),
    F("a", {
      ...r,
      onClick$: pe(
        () => {
          const [c, l, u] = Fn();
          c && (u.path = l.href);
        },
        "Link_component_a_onClick_hA9UPaY8sNQ",
        [o, r, t]
      ),
      "data-prefetch": i,
      onMouseOver$: pe(
        (c, l) => Es(l),
        "Link_component_a_onMouseOver_skxgNVWVOT8"
      ),
      onQVisible$: pe(
        (c, l) => Es(l, !0),
        "Link_component_a_onQVisible_uVE5iM9H73c"
      ),
      children: F(vr, {}),
    })
  );
}, "Link_component_mYsiJcA4IBc");
const Es = (e, t) => {
  var s;
  const n = (s = e == null ? void 0 : e.dataset) == null ? void 0 : s.prefetch;
  n && (Gt || (Gt = window.innerWidth), (!t || (t && Gt < 520)) && Dr(n));
};
let Gt = 0;
const Sl =
    '((s,a,i,r)=>{i=(e,t)=>{t=document.querySelector("[q\\\\:base]"),t&&a.active&&a.active.postMessage({type:"qprefetch",base:t.getAttribute("q:base"),...e})},document.addEventListener("qprefetch",e=>{const t=e.detail;a?i(t):t.bundles&&s.push(...t.bundles)}),navigator.serviceWorker.register("/service-worker.js").then(e=>{r=()=>{a=e,i({bundles:s})},e.installing?e.installing.addEventListener("statechange",t=>{t.target.state=="activated"&&r()}):e.active&&r()}).catch(e=>console.error(e))})([])',
  Ml = () => F("script", { dangerouslySetInnerHTML: Sl });
export {
  So as F,
  Il as Q,
  xl as R,
  vr as S,
  ne as _,
  vl as a,
  Fe as b,
  Ft as c,
  kl as d,
  El as e,
  Zn as f,
  fl as g,
  wi as h,
  pe as i,
  F as j,
  Tl as k,
  Rl as l,
  Ml as m,
  _l as r,
  wl as s,
  Fn as u,
};
