/**
 * @license
 * @builder.io/qwik 0.10.0
 * Copyright Builder.io, Inc. All Rights Reserved.
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/BuilderIO/qwik/blob/main/LICENSE
 */ const it = (e) => e && typeof e.nodeType == "number",
  Jr = (e) => e && e.nodeType === 9,
  at = (e) => e.nodeType === 1,
  Fe = (e) => it(e) && (e.nodeType === 1 || e.nodeType === 111),
  pe = (e) => e.nodeType === 111,
  Yr = (e) => e.nodeType === 3,
  Tt = (e) => e.nodeType === 8,
  ct = (e, ...t) => {
    const n = e instanceof Error ? e : new Error(e);
    return (
      typeof globalThis._handleError == "function" && e instanceof Error
        ? globalThis._handleError(e, t)
        : console.error("%cQWIK ERROR", "", n.message, ...Ki(t), n.stack),
      n
    );
  },
  Un = (e, ...t) => ct(e, ...t),
  Ki = (e) => e,
  V = (e, ...t) => {
    const n = Ct(e);
    return Un(n, ...t);
  },
  Ct = (e) => `Code(${e})`,
  Dn = (e) => {
    const t = Object.getPrototypeOf(e);
    return t === Object.prototype || t === null;
  },
  le = (e) => e && typeof e == "object",
  M = (e) => Array.isArray(e),
  lt = (e) => typeof e == "string",
  ie = (e) => typeof e == "function",
  Ee = "q:slot",
  te = (e) => e instanceof Promise,
  Hn = (e, t, n) => {
    try {
      const s = e();
      return te(s) ? s.then(t, n) : t(s);
    } catch (s) {
      return n(s);
    }
  },
  T = (e, t) => (te(e) ? e.then(t) : t(e)),
  et = (e) => (e.some(te) ? Promise.all(e) : e),
  jn = (e) => e != null,
  Wi = (e) =>
    new Promise((t) => {
      setTimeout(t, e);
    });
let Ge;
const $t = () => {
    if (!Ge) {
      const e = typeof document < "u" && document && document.__q_context__;
      return e ? (M(e) ? (document.__q_context__ = Gr(e)) : e) : void 0;
    }
    return Ge;
  },
  Kn = () => {
    const e = $t();
    if (!e) throw V(14);
    return e;
  },
  Wn = () => {
    const e = Kn();
    if (e.$event$ !== "qRender") throw V(20);
    return e.$hostElement$, e.$waitOn$, e.$renderCtx$, e.$subscriber$, e;
  },
  Ds = (e) => {
    if (e == null) return e;
    const t = Kn();
    return (...n) => he(t, e.bind(void 0, ...n));
  },
  he = (e, t, ...n) => {
    const s = Ge;
    let r;
    try {
      (Ge = e), (r = t.apply(null, n));
    } finally {
      Ge = s;
    }
    return r;
  },
  Bi = (e, t) => {
    const n = e.$waitOn$;
    if (n.length === 0) {
      const s = t();
      te(s) && n.push(s);
    } else n.push(Promise.all(n).then(t));
  },
  Gr = (e) => {
    const t = e[0];
    return $e(void 0, t, e[1], e[2]);
  },
  $e = (e, t, n, s) => ({
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
  }),
  Xr = (e) => e.closest("[q\\:container]"),
  At = (e) =>
    typeof document < "u" ? document : e.nodeType === 9 ? e : e.ownerDocument,
  Qi = (e) => le(e) && e[Symbol.toStringTag] === "Module";
let Bn = (() => {
  const e = new Map();
  return {
    isServer: !1,
    importSymbol(t, n, s) {
      const r = ((a, l, u) => {
          var h;
          const m = a.baseURI,
            f = new URL((h = l.getAttribute("q:base")) != null ? h : m, m);
          return new URL(u, f);
        })(t.ownerDocument, t, n).toString(),
        o = new URL(r);
      (o.hash = ""), (o.search = "");
      const i = o.href,
        c = e.get(i);
      return c
        ? c[s]
        : import(i).then((a) => {
            return (
              (l = a), (a = Object.values(l).find(Qi) || l), e.set(i, a), a[s]
            );
            var l;
          });
    },
    raf: (t) =>
      new Promise((n) => {
        requestAnimationFrame(() => {
          n(t());
        });
      }),
    nextTick: (t) =>
      new Promise((n) => {
        setTimeout(() => {
          n(t());
        });
      }),
    chunkForSymbol() {},
  };
})();
const Vi = (e) => (Bn = e),
  Ot = () => Bn,
  ze = () => Bn.isServer,
  me = [],
  ye = {},
  x = (e, t, n = me) => hs(null, t, e, null, null, n, null),
  Qn = (e, t = {}) => {
    var l;
    let n = e.$symbol$,
      s = e.$chunk$;
    const r = (l = e.$refSymbol$) != null ? l : n,
      o = Ot();
    if (o) {
      const u = o.chunkForSymbol(r);
      u && ((s = u[1]), e.$refSymbol$ || (n = u[0]));
    }
    if (!s) throw V(31, e);
    s.startsWith("./") && (s = s.slice(2));
    const i = [s, "#", n],
      c = e.$capture$,
      a = e.$captureRef$;
    if (a && a.length) {
      if (t.$getObjId$) {
        const u = a.map(t.$getObjId$);
        i.push(`[${u.join(" ")}]`);
      } else if (t.$addRefMap$) {
        const u = a.map(t.$addRefMap$);
        i.push(`[${u.join(" ")}]`);
      }
    } else c && c.length > 0 && i.push(`[${c.join(" ")}]`);
    return i.join("");
  },
  Vn = (e, t) => {
    t.$element$;
    const n = { $element$: t.$element$, $addRefMap$: (s) => Ji(t.$refMap$, s) };
    return e.map((s) => Qn(s, n)).join(`
`);
  },
  Pt = (e, t) => {
    const n = e.length,
      s = Hs(e, 0, "#"),
      r = Hs(e, s, "["),
      o = Math.min(s, r),
      i = e.substring(0, o),
      c = s == n ? s : s + 1,
      a = r,
      l = c == a ? "default" : e.substring(c, a),
      u = r,
      m = n,
      f = u === m ? me : e.substring(u + 1, m - 1).split(" "),
      h = hs(i, l, null, null, f, null, null);
    return t && h.$setContainer$(t), h;
  },
  Hs = (e, t, n) => {
    const s = e.length,
      r = e.indexOf(n, t == s ? 0 : t);
    return r == -1 ? s : r;
  },
  Ji = (e, t) => {
    const n = e.indexOf(t);
    return n === -1 ? (e.push(t), e.length - 1) : n;
  },
  se = (e, t, n) => e.setAttribute(t, n),
  de = (e, t) => e.getAttribute(t),
  Yi = /^(on|window:|document:)/,
  Jn = (e) => e.endsWith("$") && Yi.test(e),
  ut = (e, t) => {
    for (const n of t) {
      const s = n[0],
        r = n[1].$hash$;
      let o = !1;
      for (let i = 0; i < e.length; i++) {
        const c = e[i];
        if (c[0] === s && c[1].$hash$ === r) {
          e.splice(i, 1, n), (o = !0);
          break;
        }
      }
      o || e.push(n);
    }
  },
  Yn = (e) => {
    if (e.length === 0) return me;
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
  Gn = (e, t, n, s) => {
    t.endsWith("$"), (t = Lo(t.slice(0, -1)));
    const r = M(n) ? n.map((o) => [t, Ks(o, s)]) : [[t, Ks(n, s)]];
    return ut(e, r), t;
  },
  Ks = (e, t) => (e.$setContainer$(t), e),
  Gi = (e, t) => {
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
        for (const a of c) {
          const l = Pt(a, t);
          l.$capture$ && Io(l, e), s.push([o, l]);
        }
      }
    }
    return s;
  },
  Me = () => {
    const e = Wn(),
      t = e.$seq$,
      n = e.$hostElement$,
      s = D(n),
      r = s.$seq$ ? s.$seq$ : (s.$seq$ = []);
    return e.$seq$++, { get: r[t], set: (o) => (r[t] = o), i: t, ctx: e };
  },
  Xi = (e, t) => Zr(`on-${e}`, t),
  kn = (e, t) => Zr(`document:on-${e}`, t),
  Zr = (e, t) => {
    const n = Wn(),
      s = D(n.$hostElement$);
    ut(s.li, [[Lo(e), t]]), (s.$needAttachListeners$ = !0);
  },
  d = (e, t, n) => {
    const s = n == null ? null : String(n);
    return new eo(e, t, s);
  };
class eo {
  constructor(t, n, s = null) {
    (this.type = t), (this.props = n), (this.key = s);
  }
}
const Lt = (e) => e instanceof eo,
  A = (e) => e.children,
  Xn = Symbol("skip render"),
  to = () => null,
  dt = (e) => e.children,
  no = () => null,
  Zn = (e) => e.replace(/([A-Z])/g, "-$1").toLowerCase(),
  It = (e, t, n, s) => {
    e
      ? e.$operations$.push({ $operation$: Ws, $args$: [t, n, s] })
      : Ws(t, n, s);
  },
  Ws = (e, t, n) => {
    if (n == null || n === !1) e.removeAttribute(t);
    else {
      const s = n === !0 ? "" : String(n);
      se(e, t, s);
    }
  },
  qe = (e, t, n, s) => {
    e
      ? e.$operations$.push({ $operation$: Bs, $args$: [t, n, s] })
      : Bs(t, n, s);
  },
  Bs = (e, t, n) => {
    try {
      e[t] = n;
    } catch (s) {
      ct(Ct(6), { node: e, key: t, value: n }, s);
    }
  },
  es = (e, t, n) => (n ? e.createElementNS(ho, t) : e.createElement(t)),
  Ce = (e, t, n, s) => (
    e.$operations$.push({ $operation$: Mt, $args$: [t, n, s || null] }), n
  ),
  Qs = (e, t, n) => (
    e.$operations$.push({ $operation$: wt, $args$: [t, n] }), n
  ),
  Vs = (e, t, n) => {
    const s = e.classList;
    s.remove(...t), s.add(...n);
  },
  Zi = (e, t) => {
    const n = At(e),
      s = n.documentElement === e,
      r = n.head,
      o = n.createElement("style");
    se(o, "q:style", t.styleId),
      (o.textContent = t.content),
      s && r ? wt(r, o) : Mt(e, o, e.firstChild);
  },
  so = (e, t) => {
    e.$operations$.push({ $operation$: ea, $args$: [t, e] });
  },
  ea = (e, t) => {
    const n = e.parentElement;
    if (n) {
      if (e.nodeType === 1 || e.nodeType === 111) {
        const s = t.$containerState$.$subsManager$;
        ls(e, t, s, !0);
      }
      Na(n, e);
    }
  },
  ro = (e, t) => {
    const n = es(e, "q:template", !1);
    return se(n, Ee, t), se(n, "hidden", ""), se(n, "aria-hidden", "true"), n;
  },
  ta = (e) => {
    for (const t of e.$operations$) t.$operation$.apply(void 0, t.$args$);
    na(e);
  },
  En = (e) => de(e, "q:key"),
  en = (e, t) => {
    t !== null && se(e, "q:key", t);
  },
  na = (e) => {
    const t = e.$containerState$.$subsManager$;
    e.$rmSlots$.forEach((n) => {
      const s = En(n),
        r = tt(n, "root");
      if (r.length > 0) {
        const o = n.getAttribute("q:sref"),
          i = e.$roots$.find((c) => c.$id$ === o);
        if (i) {
          const c = ro(e.$doc$, s),
            a = i.$element$;
          for (const l of r) wt(c, l);
          Mt(a, c, a.firstChild);
        } else ls(n, e, t, !1);
      }
    }),
      e.$addSlots$.forEach(([n, s]) => {
        const r = En(n),
          o = Array.from(s.childNodes).find(
            (i) => go(i) && i.getAttribute(Ee) === r
          );
        o &&
          (tt(o, "root").forEach((i) => {
            wt(n, i);
          }),
          o.remove());
      });
  };
class ts {
  constructor(t, n) {
    (this.open = t),
      (this.close = n),
      (this._qc_ = null),
      (this.nodeType = 111),
      (this.localName = ":virtual"),
      (this.nodeName = ":virtual");
    const s = (this.ownerDocument = t.ownerDocument);
    (this.template = es(s, "template", !1)),
      (this.attributes = ((r) => {
        if (!r) return new Map();
        const o = r.split(" ");
        return new Map(
          o.map((i) => {
            const c = i.indexOf("=");
            return c >= 0
              ? [i.slice(0, c), ((a = i.slice(c + 1)), a.replace(/\+/g, " "))]
              : [i, ""];
            var a;
          })
        );
      })(t.data.slice(3))),
      t.data.startsWith("qv "),
      (t.__virtual = this);
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
      this.template.childElementCount,
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
    t.insertBefore(this.close, n), this.template.childElementCount;
  }
  appendTo(t) {
    this.insertBeforeTo(t, null);
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
    this.attributes.set(t, n), (this.open.data = Js(this.attributes));
  }
  removeAttribute(t) {
    this.attributes.delete(t), (this.open.data = Js(this.attributes));
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
      tt(this, "elements").forEach((s) => {
        Fe(s) &&
          (s.matches(t) && n.push(s),
          n.concat(Array.from(s.querySelectorAll(t))));
      }),
      n
    );
  }
  querySelector(t) {
    for (const n of this.childNodes)
      if (at(n)) {
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
    }
    return this.template.firstChild;
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
const Js = (e) =>
    `qv ${((t) => {
      const n = [];
      return (
        t.forEach((s, r) => {
          var o;
          s
            ? n.push(`${r}=${((o = s), o.replace(/ /g, "+"))}`)
            : n.push(`${r}`);
        }),
        n.join(" ")
      );
    })(e)}`,
  ns = (e) => {
    if (e == null) return null;
    if (Tt(e)) {
      const t = gt(e);
      if (t) return t;
    }
    return e;
  },
  gt = (e) => {
    const t = e.__virtual;
    if (t) return t;
    if (e.data.startsWith("qv ")) {
      const n = oo(e);
      return new ts(e, n);
    }
    return null;
  },
  oo = (e) => {
    let t = e.nextSibling,
      n = 1;
    for (; t; ) {
      if (Tt(t)) {
        if (t.data.startsWith("qv ")) n++;
        else if (t.data === "/qv" && (n--, n === 0)) return t;
      }
      t = t.nextSibling;
    }
    throw new Error("close not found");
  },
  vt = (e) => (e == null ? null : pe(e) ? e.open : e),
  Ue = (e) => (/^[\w/.-]+$/.test(e), Object.freeze({ id: Zn(e) })),
  We = (e, t) => {
    const { get: n, set: s, ctx: r } = Me();
    if (n !== void 0) return;
    const o = r.$hostElement$,
      i = D(o);
    let c = i.$contexts$;
    c || (i.$contexts$ = c = new Map()), c.set(e.id, t), s(!0);
  },
  Ft = (e, t) => {
    const { get: n, set: s, ctx: r } = Me();
    if (n !== void 0) return n;
    const o = io(e, r.$hostElement$, r.$renderCtx$);
    if (o !== void 0) return s(o);
    if (t !== void 0) return s(t);
    throw V(13, e.id);
  },
  io = (e, t, n) => {
    const s = e.id;
    if (n) {
      const r = n.$localStack$;
      for (let o = r.length - 1; o >= 0; o--) {
        const i = r[o];
        if (((t = i.$element$), i.$contexts$)) {
          const c = i.$contexts$.get(s);
          if (c) return c;
        }
      }
    }
    if (t.closest) {
      const r = sa(t, s);
      if (r !== void 0) return r;
    }
  },
  sa = (e, t) => {
    var s;
    let n = e;
    for (; n; ) {
      let r = n,
        o;
      for (; r && (o = ra(r)); ) {
        const i = (s = ae(o)) == null ? void 0 : s.$contexts$;
        if (i && i.has(t)) return i.get(t);
        r = o;
      }
      n = n.parentElement;
    }
  },
  ra = (e) => {
    let t = e,
      n = 1;
    for (; (t = t.previousSibling); )
      if (Tt(t)) {
        if (t.data === "/qv") n++;
        else if (t.data.startsWith("qv ") && (n--, n === 0)) return gt(t);
      }
    return null;
  },
  oa = Ue("qk-error"),
  ao = (e, t, n) => {
    if (ze()) throw e;
    {
      const s = io(oa, t, n);
      if (s === void 0) throw e;
      s.error = e;
    }
  },
  yt = (e, t) => {
    (t.$dirty$ = !1), (t.$mounted$ = !0), (t.$slots$ = []);
    const n = t.$element$,
      s = t.$componentQrl$,
      r = t.$props$,
      o = ss(e, t),
      i = $e(n, void 0, "qRender"),
      c = (i.$waitOn$ = []);
    (o.$cmpCtx$ = t),
      (i.$subscriber$ = n),
      (i.$renderCtx$ = e),
      s.$setContainer$(e.$static$.$containerState$.$containerEl$);
    const a = s.getFn(i);
    return Hn(
      () => a(r),
      (l) =>
        c.length > 0
          ? Promise.all(c).then(() =>
              t.$dirty$ ? yt(e, t) : { node: l, rCtx: o }
            )
          : t.$dirty$
          ? yt(e, t)
          : { node: l, rCtx: o },
      (l) => (ao(l, n, e), { node: Xn, rCtx: o })
    );
  },
  co = (e, t) => ({
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
  }),
  ss = (e, t) => ({
    $static$: e.$static$,
    $cmpCtx$: e.$cmpCtx$,
    $localStack$: e.$localStack$.concat(t),
  }),
  lo = (e) => {
    if (lt(e)) return e;
    if (le(e)) {
      if (M(e)) return e.join(" ");
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
  ia = /\s/,
  Sn = (e) => (e ? e.split(ia) : me),
  uo = (e) => {
    if (e == null) return "";
    if (typeof e == "object") {
      if (M(e)) throw V(0, e, "style");
      {
        const t = [];
        for (const n in e)
          if (Object.prototype.hasOwnProperty.call(e, n)) {
            const s = e[n];
            s && t.push(Zn(n) + ":" + s);
          }
        return t.join(";");
      }
    }
    return String(e);
  },
  zt = (e) => kt(e.$static$.$containerState$.$elementIndex$++),
  Nn = (e, t) => {
    const n = zt(e);
    (t.$id$ = n), t.$element$.setAttribute("q:id", n);
  },
  aa = [Ee, "children"],
  fo = (e) => {
    const t = e.join(" ");
    if (t.length > 0) return t;
  },
  rs = (e, t, n) => {
    const s = !t.$mounted$,
      r = t.$element$,
      o = e.$static$.$containerState$;
    return (
      o.$hostsStaging$.delete(r),
      o.$subsManager$.$clearSub$(r),
      T(yt(e, t), (i) => {
        const c = e.$static$,
          a = i.rCtx,
          l = $e(r);
        if (
          (c.$hostElements$.add(r),
          (l.$subscriber$ = r),
          (l.$renderCtx$ = a),
          s)
        ) {
          if (t.$appendStyles$)
            for (const h of t.$appendStyles$)
              (m = h),
                (u = c).$containerState$.$styleIds$.add(m.styleId),
                u.$postOperations$.push({
                  $operation$: Zi,
                  $args$: [u.$containerState$.$containerEl$, m],
                });
          if (t.$scopeIds$) {
            const h = fo(t.$scopeIds$);
            h && r.setAttribute("q:sstyle", h);
          }
        }
        var u, m;
        const f = Je(i.node, l);
        return T(f, (h) => {
          const b = ca(r, h),
            g = mo(t);
          return T(pa(a, g, b, n), () => {
            t.$vdom$ = b;
          });
        });
      })
    );
  },
  mo = (e) => (e.$vdom$ || (e.$vdom$ = nt(e.$element$)), e.$vdom$);
class fe {
  constructor(t, n, s, r) {
    (this.$type$ = t),
      (this.$props$ = n),
      (this.$children$ = s),
      (this.$key$ = r),
      (this.$elm$ = null),
      (this.$text$ = ""),
      (this.$signal$ = null);
  }
}
const ca = (e, t) => {
    const n = t === void 0 ? me : M(t) ? t : [t],
      s = new fe(":virtual", {}, n, null);
    return (s.$elm$ = e), s;
  },
  Je = (e, t) => {
    if (e != null && typeof e != "boolean") {
      if (la(e)) {
        const n = new fe("#text", ye, me, null);
        return (n.$text$ = String(e)), n;
      }
      if (Lt(e))
        return ((n, s) => {
          const r = n.key != null ? String(n.key) : null,
            o = n.type,
            i = n.props,
            c = i.children;
          let a = "";
          if (lt(o)) a = o;
          else {
            if (o !== dt) {
              if (ie(o)) {
                const u = he(s, o, i, n.key);
                return Je(u, s);
              }
              throw V(25, o);
            }
            a = ":virtual";
          }
          let l = me;
          return c != null
            ? T(
                Je(c, s),
                (u) => (
                  u !== void 0 && (l = M(u) ? u : [u]), new fe(a, i, l, r)
                )
              )
            : new fe(a, i, l, r);
        })(e, t);
      if (ce(e)) {
        const n = e.value,
          s = new fe("#text", ye, me, null);
        return (s.$text$ = String(n)), (s.$signal$ = e), s;
      }
      if (M(e)) {
        const n = et(e.flatMap((s) => Je(s, t)));
        return T(n, (s) => s.flat(100).filter(jn));
      }
      return te(e)
        ? e.then((n) => Je(n, t))
        : e === Xn
        ? new fe(":skipRender", ye, me, null)
        : void 0;
    }
  },
  la = (e) => lt(e) || typeof e == "number",
  Ys = Symbol("ContainerState"),
  bt = (e) => {
    let t = e[Ys];
    return t || (e[Ys] = t = po(e)), t;
  },
  po = (e) => {
    const t = {
      $containerEl$: e,
      $proxyMap$: new WeakMap(),
      $subsManager$: null,
      $opsNext$: new Set(),
      $watchNext$: new Set(),
      $watchStaging$: new Set(),
      $hostsNext$: new Set(),
      $hostsStaging$: new Set(),
      $renderPromise$: void 0,
      $hostsRendering$: void 0,
      $envData$: {},
      $elementIndex$: 0,
      $styleIds$: new Set(),
    };
    return (t.$subsManager$ = fa(t)), t;
  },
  ua = (e, t) => {
    const n = e[0],
      s = t(e[1]);
    if (!s) return;
    let r = n + " " + s;
    if (e[0] === 0) e[2] && (r += " " + e[2]);
    else {
      const o = typeof e[3] == "string" ? e[3] : Gs(t(e[3]));
      (r += ` ${Gs(t(e[2]))} ${o} ${e[4]}`), e[5] && (r += ` ${e[5]}`);
    }
    return r;
  },
  da = (e, t) => {
    const n = e.split(" "),
      s = parseInt(n[0], 10);
    n.length;
    const r = [s, t(n[1])];
    return (
      s === 0
        ? (n.length, r.push(n[2]))
        : (n.length === 5 || n.length, r.push(t(n[2]), t(n[3]), n[4], n[5])),
      r
    );
  },
  fa = (e) => {
    const t = new Map();
    return {
      $createManager$: (n) => new ma(t, e, n),
      $clearSub$: (n) => {
        const s = t.get(n);
        if (s) {
          for (const r of s) r.$unsubGroup$(n);
          t.delete(n), (s.length = 0);
        }
      },
    };
  };
class ma {
  constructor(t, n, s) {
    (this.$groupToManagers$ = t),
      (this.$containerState$ = n),
      (this.$subs$ = s || []);
    for (const r of this.$subs$) this.$addToGroup$(r[1], this);
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
      [s, r] = t,
      o = t[t.length - 1];
    (s === 0 && n.some(([i, c, a]) => i === s && c === r && a === o)) ||
      (n.push(t), this.$addToGroup$(r, this));
  }
  $notifySubs$(t) {
    const n = this.$subs$;
    for (const s of n) {
      const r = s[s.length - 1];
      (t && r && r !== t) || Ca(s, this.$containerState$);
    }
  }
}
const os = (e, t) => {
    if (ie(e)) return e(t);
    if (le(e)) {
      if ("current" in e) return (e.current = t);
      if ("value" in e) return (e.value = t);
    }
    throw V(32, e);
  },
  Gs = (e) => {
    if (e == null) throw ct("must be non null", e);
    return e;
  },
  ho = "http://www.w3.org/2000/svg",
  _t = [],
  pa = (e, t, n, s) => is(e, t, n, "root", s),
  is = (e, t, n, s, r) => {
    t.$elm$;
    const o = n.$children$;
    if (o.length === 1 && o[0].$type$ === ":skipRender") return;
    const i = t.$elm$;
    t.$children$ === _t && i.nodeName === "HEAD" && ((s = "head"), (r |= 2));
    const c = ha(t, s);
    return c.length > 0 && o.length > 0
      ? $a(e, i, c, o, r)
      : o.length > 0
      ? vo(e, i, null, o, 0, o.length - 1, r)
      : c.length > 0
      ? as(e.$static$, c, 0, c.length - 1)
      : void 0;
  },
  ha = (e, t) => {
    const n = e.$children$,
      s = e.$elm$;
    return n === _t ? (e.$children$ = $o(s, t)) : n;
  },
  $a = (e, t, n, s, r) => {
    let o = 0,
      i = 0,
      c = n.length - 1,
      a = n[0],
      l = n[c],
      u = s.length - 1,
      m = s[0],
      f = s[u],
      h,
      b,
      g;
    const w = [],
      p = e.$static$;
    for (; o <= c && i <= u; )
      if (a == null) a = n[++o];
      else if (l == null) l = n[--c];
      else if (m == null) m = s[++i];
      else if (f == null) f = s[--u];
      else if (mt(a, m)) w.push(Be(e, a, m, r)), (a = n[++o]), (m = s[++i]);
      else if (mt(l, f)) w.push(Be(e, l, f, r)), (l = n[--c]), (f = s[--u]);
      else if (mt(a, f))
        a.$elm$,
          l.$elm$,
          w.push(Be(e, a, f, r)),
          Ce(p, t, a.$elm$, l.$elm$.nextSibling),
          (a = n[++o]),
          (f = s[--u]);
      else if (mt(l, m))
        a.$elm$,
          l.$elm$,
          w.push(Be(e, l, m, r)),
          Ce(p, t, l.$elm$, a.$elm$),
          (l = n[--c]),
          (m = s[++i]);
      else {
        if (
          (h === void 0 && (h = Ra(n, o, c)), (b = h[m.$key$]), b === void 0)
        ) {
          const v = st(e, m, r);
          w.push(
            T(v, (y) => {
              Ce(p, t, y, a == null ? void 0 : a.$elm$);
            })
          );
        } else if (((g = n[b]), Ta(g, m.$type$)))
          w.push(Be(e, g, m, r)),
            (n[b] = void 0),
            g.$elm$,
            Ce(p, t, g.$elm$, a.$elm$);
        else {
          const v = st(e, m, r);
          w.push(
            T(v, (y) => {
              Ce(p, t, y, a == null ? void 0 : a.$elm$);
            })
          );
        }
        m = s[++i];
      }
    if (i <= u) {
      const v = s[u + 1] == null ? null : s[u + 1].$elm$;
      w.push(vo(e, t, v, s, i, u, r));
    }
    let $ = et(w);
    return (
      o <= c &&
        ($ = T($, () => {
          as(p, n, o, c);
        })),
      $
    );
  },
  tn = (e, t) => {
    const n = pe(e) ? e.close : null,
      s = [];
    let r = e.firstChild;
    for (; (r = ns(r)) && (t(r) && s.push(r), (r = r.nextSibling), r !== n); );
    return s;
  },
  tt = (e, t) => {
    switch (t) {
      case "root":
        return tn(e, _a);
      case "head":
        return tn(e, ba);
      case "elements":
        return tn(e, Fe);
    }
  },
  $o = (e, t) => tt(e, t).map(ga),
  ga = (e) => {
    var t, n;
    return at(e) && (n = (t = ae(e)) == null ? void 0 : t.$vdom$) != null
      ? n
      : nt(e);
  },
  nt = (e) => {
    if (Fe(e)) {
      const t = pe(e) ? ye : va(e),
        n = new fe(e.localName, t, _t, En(e));
      return (n.$elm$ = e), n;
    }
    if (Yr(e)) {
      const t = new fe(e.nodeName, {}, _t, null);
      return (t.$text$ = e.data), (t.$elm$ = e), t;
    }
    throw new Error("invalid node");
  },
  va = (e) => {
    const t = {},
      n = e.attributes,
      s = n.length;
    for (let r = 0; r < s; r++) {
      const o = n.item(r),
        i = o.name.toLowerCase();
      i.includes(":") || (t[i] = i === "class" ? ya(o.value) : o.value);
    }
    return t;
  },
  ya = (e) =>
    Sn(e)
      .filter((t) => !t.startsWith("\u2B50\uFE0F"))
      .join(" "),
  ba = (e) => {
    const t = e.nodeType;
    return t === 1 ? e.hasAttribute("q:head") : t === 111;
  },
  go = (e) => e.nodeName === "Q:TEMPLATE",
  _a = (e) => {
    const t = e.nodeType;
    if (t === 3 || t === 111) return !0;
    if (t !== 1) return !1;
    const n = e.nodeName;
    return n !== "Q:TEMPLATE" && (n !== "HEAD" || e.hasAttribute("q:head"));
  },
  Be = (e, t, n, s) => {
    t.$type$, n.$type$;
    const r = t.$elm$,
      o = n.$type$,
      i = e.$static$,
      c = o === ":virtual",
      a = e.$cmpCtx$;
    if (((n.$elm$ = r), o === "#text")) {
      const g = n.$signal$;
      return (
        g && De(2, a.$element$, g, r, "data"),
        void (t.$text$ !== n.$text$ && qe(i, r, "data", n.$text$))
      );
    }
    let l = !!(1 & s);
    l || o !== "svg" || ((s |= 1), (l = !0));
    const u = n.$props$,
      m = c && "q:renderFn" in u,
      f = D(r);
    if ((i.$containerState$.$containerEl$, !m)) {
      const g = a.li,
        w = f.li;
      if (
        ((w.length = 0),
        (n.$props$ = xa(i, f, a.$element$, t.$props$, u)),
        g.length > 0 && (ut(w, g), (g.length = 0)),
        w.length > 0)
      ) {
        const p = Yn(w);
        for (const $ of p) It(i, r, $[0], Vn($[1], f));
      }
      return (
        l && n.$type$ === "foreignObject" && ((s &= -2), (l = !1)),
        c && "q:s" in u
          ? (a.$slots$, void a.$slots$.push(n))
          : u[Xe] !== void 0 || (c && "qonce" in u)
          ? void 0
          : is(e, t, n, "root", s)
      );
    }
    const h = u.props;
    let b = wo(f, e, h);
    return (
      b ||
        f.$componentQrl$ ||
        f.$element$.hasAttribute("q:id") ||
        (Nn(e, f),
        (f.$componentQrl$ = h["q:renderFn"]),
        f.$componentQrl$,
        (b = !0)),
      b ? T(rs(e, f, s), () => Xs(e, f, n, s)) : Xs(e, f, n, s)
    );
  },
  Xs = (e, t, n, s) => {
    const r = n.$children$,
      o = e.$static$,
      i = ((l) => {
        var m;
        const u = {};
        for (const f of l) {
          const h = bo(f);
          ((m = u[h]) != null
            ? m
            : (u[h] = new fe(":virtual", { "q:s": "" }, [], h))
          ).$children$.push(f);
        }
        return u;
      })(r),
      c = ss(e, t),
      a = _o(t);
    for (const l of Object.keys(a.slots))
      if (!i[l]) {
        const u = a.slots[l],
          m = $o(u, "root");
        if (m.length > 0) {
          const f = ae(u);
          f && f.$vdom$ && (f.$vdom$.$children$ = []),
            as(o, m, 0, m.length - 1);
        }
      }
    for (const l of Object.keys(a.templates)) {
      const u = a.templates[l];
      u && ((i[l] && !a.slots[l]) || (so(o, u), (a.templates[l] = void 0)));
    }
    return et(
      Object.keys(i).map((l) => {
        const u = i[l],
          m = yo(o, a, t.$element$, l),
          f = D(m),
          h = mo(f);
        return (f.$vdom$ = u), (u.$elm$ = m), is(c, h, u, "root", s);
      })
    );
  },
  vo = (e, t, n, s, r, o, i) => {
    const c = [];
    let a = !1;
    for (; r <= o; ++r) {
      const l = s[r],
        u = st(e, l, i);
      c.push(u), te(u) && (a = !0);
    }
    if (a) return Promise.all(c).then((l) => Zs(e.$static$, t, l, n));
    Zs(e.$static$, t, c, n);
  },
  Zs = (e, t, n, s) => {
    for (const r of n) Ce(e, t, r, s);
  },
  as = (e, t, n, s) => {
    for (; n <= s; ++n) {
      const r = t[n];
      r && (r.$elm$, so(e, r.$elm$));
    }
  },
  yo = (e, t, n, s) => {
    const r = t.slots[s];
    if (r) return r;
    const o = t.templates[s];
    if (o) return o;
    const i = ro(e.$doc$, s);
    return (
      ((c, a, l) => {
        c.$operations$.push({ $operation$: Mt, $args$: [a, l, a.firstChild] });
      })(e, n, i),
      (t.templates[s] = i),
      i
    );
  },
  bo = (e) => {
    var t;
    return (t = e.$props$[Ee]) != null ? t : "";
  },
  st = (e, t, n) => {
    const s = t.$type$,
      r = e.$static$.$doc$,
      o = e.$cmpCtx$;
    if (s === "#text") {
      const v = t.$signal$,
        y = ((_, E) => _.createTextNode(E))(r, t.$text$);
      return v && o && De(2, o.$element$, v, y, "data"), (t.$elm$ = y);
    }
    let i,
      c = !!(2 & n),
      a = !!(1 & n);
    a || s !== "svg" || ((n |= 1), (a = !0));
    const l = s === ":virtual",
      u = t.$props$,
      m = "q:renderFn" in u,
      f = e.$static$;
    l
      ? (i = ((v) => {
          const y = v.createComment("qv "),
            _ = v.createComment("/qv");
          return new ts(y, _);
        })(r))
      : s === "head"
      ? ((i = r.head), (n |= 2), (c = !0))
      : ((i = es(r, s, a)), (n &= -3)),
      (t.$elm$ = i),
      a && s === "foreignObject" && ((a = !1), (n &= -2));
    const h = D(i);
    if (m) {
      en(i, t.$key$);
      const v = u["q:renderFn"];
      return (
        wo(h, e, u.props),
        Nn(e, h),
        (h.$componentQrl$ = v),
        T(rs(e, h, n), () => {
          let y = t.$children$;
          if (y.length === 0) return i;
          y.length === 1 &&
            y[0].$type$ === ":skipRender" &&
            (y = y[0].$children$);
          const _ = ss(e, h),
            E = _o(h),
            q = y.map((j) => st(_, j, n));
          return T(et(q), () => {
            for (const j of y) j.$elm$, Qs(f, yo(f, E, i, bo(j)), j.$elm$);
            return i;
          });
        })
      );
    }
    const b = l && "q:s" in u,
      g = !l && "ref" in u,
      w = h.li;
    if (
      ((t.$props$ = Ea(f, h, o == null ? void 0 : o.$element$, u)), o && !l)
    ) {
      const v = o.$scopeIds$;
      v &&
        v.forEach((y) => {
          i.classList.add(y);
        }),
        o.$needAttachListeners$ &&
          (ut(w, o.li), (o.$needAttachListeners$ = !1));
    }
    b
      ? (o.$slots$,
        en(i, t.$key$),
        se(i, "q:sref", o.$id$),
        o.$slots$.push(t),
        f.$addSlots$.push([i, o.$element$]))
      : en(i, t.$key$);
    {
      c && !l && se(i, "q:head", ""), (w.length > 0 || g) && Nn(e, h);
      const v = Yn(w);
      for (const y of v) It(f, i, y[0], Vn(y[1], h));
    }
    if (u[Xe] !== void 0) return i;
    let p = t.$children$;
    if (p.length === 0) return i;
    p.length === 1 && p[0].$type$ === ":skipRender" && (p = p[0].$children$);
    const $ = p.map((v) => st(e, v, n));
    return T(et($), () => {
      for (const v of p) v.$elm$, Qs(e.$static$, i, v.$elm$);
      return i;
    });
  },
  _o = (e) => {
    var o, i;
    const t = ((c) =>
        c.$slots$ || (c.$element$.parentElement, (c.$slots$ = wa(c))))(e),
      n = {},
      s = {},
      r = Array.from(e.$element$.childNodes).filter(go);
    for (const c of t) c.$elm$, (n[(o = c.$key$) != null ? o : ""] = c.$elm$);
    for (const c of r) s[(i = de(c, Ee)) != null ? i : ""] = c;
    return { slots: n, templates: s };
  },
  wa = (e) =>
    ((t, n, s) => {
      const r = ((c, a, l) =>
          c.ownerDocument.createTreeWalker(c, 128, {
            acceptNode(u) {
              const m = gt(u);
              return m && de(m, "q:sref") === l ? 1 : 2;
            },
          }))(t, 0, s),
        o = [];
      let i = null;
      for (; (i = r.nextNode()); ) o.push(gt(i));
      return o;
    })(e.$element$.parentElement, 0, e.$id$).map(nt),
  er = (e, t, n, s) => (n in t && t[n] !== s && qe(e, t, n, s), !0),
  Qe = (e, t, n, s) => (It(e, t, n.toLowerCase(), s), !0),
  Xe = "dangerouslySetInnerHTML",
  qa = {
    style: (e, t, n, s) => (qe(e, t.style, "cssText", uo(s)), !0),
    class: (e, t, n, s, r) => {
      const o = Sn(r),
        i = Sn(s);
      return (
        ((c, a, l, u) => {
          c
            ? c.$operations$.push({ $operation$: Vs, $args$: [a, l, u] })
            : Vs(a, l, u);
        })(
          e,
          t,
          o.filter((c) => c && !i.includes(c)),
          i.filter((c) => c && !o.includes(c))
        ),
        !0
      );
    },
    value: er,
    checked: er,
    href: Qe,
    list: Qe,
    form: Qe,
    tabIndex: Qe,
    download: Qe,
    [Xe]: (e, t, n, s) => (
      Xe in t ? qe(e, t, Xe, s) : "innerHTML" in t && qe(e, t, "innerHTML", s),
      !0
    ),
    innerHTML: () => !0,
  },
  xa = (e, t, n, s, r) => {
    var l;
    const o = ja(s, r),
      i = {};
    if (o.length === 0) return i;
    const c = (l = r[k]) != null ? l : ye,
      a = t.$element$;
    for (let u of o) {
      if (u === "ref") {
        os(r[u], a);
        continue;
      }
      let m = ce(c[u]) ? c[u] : r[u];
      if (Jn(u)) {
        Gn(t.li, u, m, e.$containerState$.$containerEl$);
        continue;
      }
      u === "className" && (u = "class"),
        ce(m) && (De(1, n, m, a, u), (m = m.value)),
        u === "class" && (r.class = m = lo(m));
      const f = u.toLowerCase(),
        h = s[f];
      (i[f] = m), h !== m && cs(e, a, u, m, h);
    }
    return i;
  },
  cs = (e, t, n, s, r) => {
    const o = qa[n];
    (o && o(e, t, n, s, r)) || (n in t ? qe(e, t, n, s) : It(e, t, n, s));
  },
  ja = (e, t) => {
    const n = Object.keys(t),
      s = n.map((o) => o.toLowerCase()),
      r = Object.keys(e);
    return (
      n.push(...r.filter((o) => !s.includes(o))),
      n.filter((o) => o !== "children")
    );
  },
  ka = (e, t, n) => {
    try {
      window.qwikevents && window.qwikevents.push(Oo(n));
    } catch {}
  },
  Ea = (e, t, n, s) => {
    var a;
    const r = t.$element$,
      o = Object.keys(s),
      i = {};
    if (o.length === 0) return i;
    const c = (a = s[k]) != null ? a : ye;
    for (let l of o) {
      if (l === "children") continue;
      if (l === "ref") {
        os(s[l], r);
        continue;
      }
      let u = ce(c[l]) ? c[l] : s[l];
      Jn(l)
        ? ka(0, 0, Gn(t.li, l, u, e.$containerState$.$containerEl$))
        : (l === "className" && (l = "class"),
          n && ce(u) && (De(1, n, u, r, l), (u = u.value)),
          l === "class" && (u = lo(u)),
          (i[l.toLowerCase()] = u),
          cs(e, r, l, u, void 0));
    }
    return i;
  },
  wo = (e, t, n) => {
    const s = Object.keys(n);
    let r = e.$props$;
    r || (e.$props$ = r = ft({ [ke]: Et }, t.$static$.$containerState$));
    const o = fc(r);
    if (s.length === 0) return !1;
    for (const i of s) aa.includes(i) || o.set(i, n[i]);
    return e.$dirty$;
  },
  ls = (e, t, n, s) => {
    if (s && e.hasAttribute("q:s")) return void t.$rmSlots$.push(e);
    Sa(e, n);
    const r = tt(e, "elements");
    for (const o of r) ls(o, t, n, s);
  },
  Sa = (e, t) => {
    const n = ae(e);
    n && uc(n, t);
  },
  wt = (e, t) => {
    pe(t) ? t.appendTo(e) : e.appendChild(t);
  },
  Na = (e, t) => {
    pe(t) ? t.remove() : e.removeChild(t);
  },
  Mt = (e, t, n) => {
    pe(t) ? t.insertBeforeTo(e, vt(n)) : e.insertBefore(t, vt(n));
  },
  Ra = (e, t, n) => {
    const s = {};
    for (let r = t; r <= n; ++r) {
      const o = e[r].$key$;
      o != null && (s[o] = r);
    }
    return s;
  },
  mt = (e, t) => e.$type$ === t.$type$ && e.$key$ === t.$key$,
  Ta = (e, t) => e.$type$ === t,
  R = () => {
    const e = Kn();
    let t = e.$qrl$;
    if (t) t.$captureRef$;
    else {
      const n = e.$element$,
        s = Xr(n),
        r = D(n);
      (t = Pt(decodeURIComponent(String(e.$url$)), s)), Po(s), Io(t, r);
    }
    return t.$captureRef$;
  },
  Ca = (e, t) => {
    if (e[0] === 0) {
      const n = e[1];
      Fe(n) ? Aa(n, t) : us(n, t);
    } else Oa(e, t);
  },
  Aa = (e, t) => {
    const n = ze();
    n || Po(t.$containerEl$);
    const s = D(e);
    if ((s.$componentQrl$, !s.$dirty$))
      if (((s.$dirty$ = !0), t.$hostsRendering$ !== void 0))
        t.$renderPromise$, t.$hostsStaging$.add(e);
      else {
        if (n) return;
        t.$hostsNext$.add(e), Ut(t);
      }
  },
  Oa = (e, t) => {
    t.$hostsRendering$ !== void 0
      ? (t.$renderPromise$, t.$opsNext$.add(e))
      : (t.$opsNext$.add(e), Ut(t));
  },
  us = (e, t) => {
    e.$flags$ & Oe ||
      ((e.$flags$ |= Oe),
      t.$hostsRendering$ !== void 0
        ? (t.$renderPromise$, t.$watchStaging$.add(e))
        : (t.$watchNext$.add(e), Ut(t)));
  },
  Ut = (e) => (
    e.$renderPromise$ === void 0 &&
      (e.$renderPromise$ = Ot().nextTick(() => La(e))),
    e.$renderPromise$
  ),
  Pa = () => {
    const [e] = R();
    us(e, bt(Xr(e.$el$)));
  },
  La = async (e) => {
    const t = At(e.$containerEl$);
    try {
      const n = co(t, e),
        s = n.$static$,
        r = (e.$hostsRendering$ = new Set(e.$hostsNext$));
      e.$hostsNext$.clear(),
        await Fa(e),
        e.$hostsStaging$.forEach((i) => {
          r.add(i);
        }),
        e.$hostsStaging$.clear();
      const o = Array.from(r);
      Ma(o);
      for (const i of o)
        if (!s.$hostElements$.has(i)) {
          const c = D(i);
          if (c.$componentQrl$) {
            i.isConnected, s.$roots$.push(c);
            try {
              await rs(n, c, Ia(i.parentElement));
            } catch {}
          }
        }
      if (
        (e.$opsNext$.forEach((i) =>
          ((c, a) => {
            var m;
            const l = (m = a[5]) != null ? m : "value",
              u = a[2][l];
            switch (a[0]) {
              case 1: {
                const f = a[4],
                  h = a[3],
                  b = ae(h);
                let g;
                if (b && b.$vdom$) {
                  const w = f.toLowerCase();
                  (g = b.$vdom$.$props$[w]), (b.$vdom$.$props$[w] = u);
                }
                return cs(c, h, f, u, g);
              }
              case 2:
                return qe(c, a[3], "data", u);
            }
          })(s, i)
        ),
        e.$opsNext$.clear(),
        s.$operations$.push(...s.$postOperations$),
        s.$operations$.length === 0)
      )
        return void (await tr(e, s));
      await Ot().raf(
        () => (
          (({ $static$: i }) => {
            ta(i);
          })(n),
          tr(e, s)
        )
      );
    } catch (n) {
      ct(n);
    }
  },
  Ia = (e) => {
    let t = 0;
    return (
      e &&
        (e.namespaceURI === ho && (t |= 1), e.tagName === "HEAD" && (t |= 2)),
      t
    );
  },
  tr = async (e, t) => {
    await za(
      e,
      (n, s) => (n.$flags$ & qo) != 0 && (!s || t.$hostElements$.has(n.$el$))
    ),
      e.$hostsStaging$.forEach((n) => {
        e.$hostsNext$.add(n);
      }),
      e.$hostsStaging$.clear(),
      (e.$hostsRendering$ = void 0),
      (e.$renderPromise$ = void 0),
      e.$hostsNext$.size + e.$watchNext$.size + e.$opsNext$.size > 0 && Ut(e);
  },
  Fa = async (e) => {
    const t = e.$containerEl$,
      n = [],
      s = [],
      r = (i) => (i.$flags$ & xo) != 0,
      o = (i) => (i.$flags$ & jo) != 0;
    e.$watchNext$.forEach((i) => {
      r(i) &&
        (s.push(T(i.$qrl$.$resolveLazy$(t), () => i)), e.$watchNext$.delete(i)),
        o(i) &&
          (n.push(T(i.$qrl$.$resolveLazy$(t), () => i)),
          e.$watchNext$.delete(i));
    });
    do
      if (
        (e.$watchStaging$.forEach((i) => {
          r(i)
            ? s.push(T(i.$qrl$.$resolveLazy$(t), () => i))
            : o(i)
            ? n.push(T(i.$qrl$.$resolveLazy$(t), () => i))
            : e.$watchNext$.add(i);
        }),
        e.$watchStaging$.clear(),
        s.length > 0)
      ) {
        const i = await Promise.all(s);
        Rn(i), await Promise.all(i.map((c) => qt(c, e))), (s.length = 0);
      }
    while (e.$watchStaging$.size > 0);
    if (n.length > 0) {
      const i = await Promise.all(n);
      Rn(i), i.forEach((c) => qt(c, e));
    }
  },
  za = async (e, t) => {
    const n = [],
      s = e.$containerEl$;
    e.$watchNext$.forEach((r) => {
      t(r, !1) &&
        (n.push(T(r.$qrl$.$resolveLazy$(s), () => r)), e.$watchNext$.delete(r));
    });
    do
      if (
        (e.$watchStaging$.forEach((r) => {
          t(r, !0)
            ? n.push(T(r.$qrl$.$resolveLazy$(s), () => r))
            : e.$watchNext$.add(r);
        }),
        e.$watchStaging$.clear(),
        n.length > 0)
      ) {
        const r = await Promise.all(n);
        Rn(r), await Promise.all(r.map((o) => qt(o, e))), (n.length = 0);
      }
    while (e.$watchStaging$.size > 0);
  },
  Ma = (e) => {
    e.sort((t, n) => (2 & t.compareDocumentPosition(vt(n)) ? 1 : -1));
  },
  Rn = (e) => {
    e.sort((t, n) =>
      t.$el$ === n.$el$
        ? t.$index$ < n.$index$
          ? -1
          : 1
        : (2 & t.$el$.compareDocumentPosition(vt(n.$el$))) != 0
        ? 1
        : -1
    );
  },
  qo = 1,
  xo = 2,
  Oe = 4,
  nr = 8,
  jo = 16,
  Ua = (e, t) => {
    const { get: n, set: s, ctx: r, i: o } = Me();
    if (n) return;
    const i = r.$hostElement$,
      c = r.$renderCtx$.$static$.$containerState$,
      a = new rt(Oe | xo, o, i, e, void 0),
      l = D(i);
    s(!0),
      e.$resolveLazy$(c.$containerEl$),
      l.$watches$ || (l.$watches$ = []),
      l.$watches$.push(a),
      Bi(r, () => qt(a, c, r.$renderCtx$)),
      ze() && No(a, t == null ? void 0 : t.eagerness);
  },
  ds = (e, t) => {
    var m;
    const { get: n, set: s, i: r, ctx: o } = Me();
    if (n) return;
    const i = o.$hostElement$,
      c = new rt(qo, r, i, e, void 0),
      a = (m = t == null ? void 0 : t.eagerness) != null ? m : "visible",
      l = D(i),
      u = o.$renderCtx$.$static$.$containerState$;
    s(!0),
      l.$watches$ || (l.$watches$ = []),
      l.$watches$.push(c),
      No(c, a),
      ze() || (e.$resolveLazy$(u.$containerEl$), us(c, u));
  },
  ko = (e) => !!e.$resource$,
  qt = async (e, t, n) => (e.$flags$, ko(e) ? Eo(e, t) : Da(e, t, n)),
  Eo = (e, t, n) => {
    (e.$flags$ &= ~Oe), xt(e);
    const s = e.$el$,
      r = $e(s, void 0, "WatchEvent"),
      { $subsManager$: o } = t;
    e.$qrl$.$captureRef$;
    const i = e.$qrl$.getFn(r, () => {
        o.$clearSub$(e);
      }),
      c = [],
      a = e.$resource$,
      l = Ht(a),
      u = {
        track: (p, $) => {
          if (ie(p)) {
            const y = $e();
            return (y.$subscriber$ = e), he(y, p);
          }
          const v = ge(p);
          return (
            v ? v.$addSub$([0, e, $]) : Un(Ct(26), p),
            $ ? p[$] : ce(p) ? p.value : p
          );
        },
        cleanup(p) {
          c.push(p);
        },
        previous: l.resolved,
      };
    let m,
      f,
      h = !1;
    const b = (p, $) =>
      !h &&
      ((h = !0),
      p
        ? ((h = !0),
          (a.state = "resolved"),
          (a.resolved = $),
          (a.error = void 0),
          m($))
        : ((h = !0),
          (a.state = "rejected"),
          (a.resolved = void 0),
          (a.error = $),
          f($)),
      !0);
    he(r, () => {
      (a.state = "pending"),
        (a.resolved = void 0),
        (a.promise = new Promise((p, $) => {
          (m = p), (f = $);
        }));
    }),
      (e.$destroy$ = Dt(() => {
        c.forEach((p) => p());
      }));
    const g = Hn(
        () => T(n, () => i(u)),
        (p) => {
          b(!0, p);
        },
        (p) => {
          b(!1, p);
        }
      ),
      w = l.timeout;
    return w
      ? Promise.race([
          g,
          Wi(w).then(() => {
            b(!1, "timeout") && xt(e);
          }),
        ])
      : g;
  },
  Da = (e, t, n) => {
    (e.$flags$ &= ~Oe), xt(e);
    const s = e.$el$,
      r = $e(s, void 0, "WatchEvent"),
      { $subsManager$: o } = t,
      i = e.$qrl$.getFn(r, () => {
        o.$clearSub$(e);
      }),
      c = [];
    e.$destroy$ = Dt(() => {
      c.forEach((l) => l());
    });
    const a = {
      track: (l, u) => {
        if (ie(l)) {
          const f = $e();
          return (f.$subscriber$ = e), he(f, l);
        }
        const m = ge(l);
        return m ? m.$addSub$([0, e, u]) : Un(Ct(26), l), u ? l[u] : l;
      },
      cleanup(l) {
        c.push(l);
      },
    };
    return Hn(
      () => i(a),
      (l) => {
        ie(l) && c.push(l);
      },
      (l) => {
        ao(l, s, n);
      }
    );
  },
  xt = (e) => {
    const t = e.$destroy$;
    if (t) {
      e.$destroy$ = void 0;
      try {
        t();
      } catch (n) {
        ct(n);
      }
    }
  },
  So = (e) => {
    e.$flags$ & nr ? ((e.$flags$ &= ~nr), (0, e.$qrl$)()) : xt(e);
  },
  No = (e, t) => {
    t === "visible"
      ? Xi("qvisible", nn(e))
      : t === "load"
      ? kn("qinit", nn(e))
      : t === "idle" && kn("qidle", nn(e));
  },
  nn = (e) => {
    const t = e.$qrl$;
    return hs(t.$chunk$, "_hW", Pa, null, null, [e], t.$symbol$);
  };
class rt {
  constructor(t, n, s, r, o) {
    (this.$flags$ = t),
      (this.$index$ = n),
      (this.$el$ = s),
      (this.$qrl$ = r),
      (this.$resource$ = o);
  }
}
const xe = (e, t) => {
    const { get: n, set: s, i: r, ctx: o } = Me();
    if (n != null) return n;
    const i = o.$renderCtx$.$static$.$containerState$,
      c = Ha(i, t),
      a = o.$hostElement$,
      l = new rt(Oe | jo, r, a, e, c),
      u = Promise.all(o.$waitOn$.slice()),
      m = D(a);
    return (
      Eo(l, i, u),
      m.$watches$ || (m.$watches$ = []),
      m.$watches$.push(l),
      s(c),
      c
    );
  },
  je = (e) => {
    if (
      e.onRejected &&
      (e.value.promise.catch(() => {}), e.value.state === "rejected")
    )
      return e.onRejected(e.value.error);
    if (e.onPending) {
      const n = e.value.state;
      if (n === "pending") return e.onPending();
      if (n === "resolved") return e.onResolved(e.value.resolved);
      if (n === "rejected") throw e.value.error;
    }
    const t = e.value.promise.then(Ds(e.onResolved), Ds(e.onRejected));
    return d(A, { children: t });
  },
  Ro = (e) => ({
    __brand: "resource",
    promise: void 0,
    resolved: void 0,
    error: void 0,
    state: "pending",
    timeout: e == null ? void 0 : e.timeout,
  }),
  Ha = (e, t, n) => {
    const s = Ro(t);
    return (s.promise = n), ft(s, e, void 0);
  },
  Ka = {
    prefix: "",
    test: (e) => Fo(e),
    collect: (e, t, n) => {
      if (e.$captureRef$) for (const s of e.$captureRef$) I(s, t, n);
    },
    serialize: (e, t) => Qn(e, { $getObjId$: t }),
    prepare: (e, t) => Pt(e, t.$containerEl$),
    fill: (e, t) => {
      e.$capture$ &&
        e.$capture$.length > 0 &&
        ((e.$captureRef$ = e.$capture$.map(t)), (e.$capture$ = null));
    },
  },
  Wa = {
    prefix: "",
    test: (e) => {
      return le((t = e)) && t instanceof rt;
      var t;
    },
    collect: (e, t, n) => {
      I(e.$qrl$, t, n), e.$resource$ && I(e.$resource$, t, n);
    },
    serialize: (e, t) =>
      ((n, s) => {
        let r = `${kt(n.$flags$)} ${kt(n.$index$)} ${s(n.$qrl$)} ${s(n.$el$)}`;
        return ko(n) && (r += ` ${s(n.$resource$)}`), r;
      })(e, t),
    prepare: (e) =>
      ((t) => {
        const [n, s, r, o, i] = t.split(" ");
        return new rt(Ae(n), Ae(s), o, r, i);
      })(e),
    fill: (e, t) => {
      (e.$el$ = t(e.$el$)),
        (e.$qrl$ = t(e.$qrl$)),
        e.$resource$ && (e.$resource$ = t(e.$resource$));
    },
  },
  Ba = {
    prefix: "",
    test: (e) => {
      return le((t = e)) && t.__brand === "resource";
      var t;
    },
    collect: (e, t, n) => {
      I(e.promise, t, n), I(e.resolved, t, n);
    },
    serialize: (e, t) =>
      ((n, s) => {
        const r = n.state;
        return r === "resolved"
          ? `0 ${s(n.resolved)}`
          : r === "pending"
          ? "1"
          : `2 ${s(n.error)}`;
      })(e, t),
    prepare: (e) =>
      ((t) => {
        const [n, s] = t.split(" "),
          r = Ro(void 0);
        return (
          (r.promise = Promise.resolve()),
          n === "0"
            ? ((r.state = "resolved"), (r.resolved = s))
            : n === "1"
            ? ((r.state = "pending"), (r.promise = new Promise(() => {})))
            : n === "2" && ((r.state = "rejected"), (r.error = s)),
          r
        );
      })(e),
    fill: (e, t) => {
      if (e.state === "resolved")
        (e.resolved = t(e.resolved)), (e.promise = Promise.resolve(e.resolved));
      else if (e.state === "rejected") {
        const n = Promise.reject(e.error);
        n.catch(() => null), (e.error = t(e.error)), (e.promise = n);
      }
    },
  },
  Qa = {
    prefix: "",
    test: (e) => e instanceof URL,
    serialize: (e) => e.href,
    prepare: (e) => new URL(e),
    fill: void 0,
  },
  Va = {
    prefix: "",
    test: (e) => e instanceof Date,
    serialize: (e) => e.toISOString(),
    prepare: (e) => new Date(e),
    fill: void 0,
  },
  Ja = {
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
  Ya = {
    prefix: "",
    test: (e) => e instanceof Error,
    serialize: (e) => e.message,
    prepare: (e) => {
      const t = new Error(e);
      return (t.stack = void 0), t;
    },
    fill: void 0,
  },
  Ga = {
    prefix: "",
    test: (e) => Jr(e),
    serialize: void 0,
    prepare: (e, t, n) => n,
    fill: void 0,
  },
  jt = Symbol("serializable-data"),
  Xa = {
    prefix: "",
    test: (e) => wc(e),
    serialize: (e, t) => {
      const [n] = e[jt];
      return Qn(n, { $getObjId$: t });
    },
    prepare: (e, t) => {
      const n = e.indexOf("{"),
        s = n == -1 ? e : e.slice(0, n),
        r = Pt(s, t.$containerEl$);
      return C(r);
    },
    fill: (e, t) => {
      const [n] = e[jt];
      n.$capture$ &&
        n.$capture$.length > 0 &&
        ((n.$captureRef$ = n.$capture$.map(t)), (n.$capture$ = null));
    },
  },
  fs = [
    Ka,
    {
      prefix: "",
      test: (e) => e instanceof ot,
      collect: (e, t, n) => (I(e.untrackedValue, t, n), n && Ao(e[be], t), e),
      serialize: (e, t) => t(e.untrackedValue),
      prepare: (e) => new ot(e, null),
      subs: (e, t, n) => {
        e[be] = n.$subsManager$.$createManager$(t);
      },
      fill: (e, t) => {
        e.untrackedValue = t(e.untrackedValue);
      },
    },
    {
      prefix: "",
      test: (e) => e instanceof Pe,
      collect: (e, t, n) => (I(e.ref, t, n), e),
      serialize: (e, t) => `${t(e.ref)} ${e.prop}`,
      prepare: (e) => {
        const [t, n] = e.split(" ");
        return new Pe(t, n);
      },
      fill: (e, t) => {
        e.ref = t(e.ref);
      },
    },
    Wa,
    Ba,
    Qa,
    Va,
    Ja,
    Ya,
    Ga,
    Xa,
    {
      prefix: "",
      test: (e) => typeof e == "function" && e.__qwik_serializable__ !== void 0,
      serialize: (e) => e.toString(),
      prepare: (e) => {
        const t = new Function("return " + e)();
        return (t.__qwik_serializable__ = !0), t;
      },
      fill: void 0,
    },
  ],
  Za = fs.filter((e) => e.collect),
  To = async (e, t) => {
    const n = rc(t),
      s = [];
    for (const p of e) if (p.$watches$) for (const $ of p.$watches$) So($);
    for (const p of e) {
      const $ = p.$element$,
        v = p.li;
      for (const y of v) {
        const _ = y[0],
          E = y[1],
          q = E.$captureRef$;
        if (q) for (const j of q) I(j, n, !0);
        at($) && s.push({ key: _, qrl: E, el: $, eventName: Oo(_) });
      }
    }
    if (s.length === 0)
      return {
        state: { ctx: {}, objs: [], subs: [] },
        objs: [],
        listeners: [],
        mode: "static",
      };
    let r;
    for (; (r = n.$promises$).length > 0; )
      (n.$promises$ = []), await Promise.allSettled(r);
    const o = n.$elements$.length > 0;
    if (o) {
      for (const p of n.$elements$) Co(ae(p), n);
      for (const p of e)
        if ((p.$props$ && sc(p, n), p.$contexts$))
          for (const $ of p.$contexts$.values()) I($, n, !1);
    }
    for (; (r = n.$promises$).length > 0; )
      (n.$promises$ = []), await Promise.all(r);
    const i = new Map(),
      c = Array.from(n.$objSet$.keys()),
      a = new Map(),
      l = (p) => {
        let $ = i.get(p);
        return (
          $ === void 0 &&
            (($ = ((v) => {
              const y = ae(v);
              return y ? y.$id$ : null;
            })(p)),
            $ ? ($ = "#" + $) : console.warn("Missing ID", p),
            i.set(p, $)),
          $
        );
      },
      u = (p) => {
        let $ = "";
        if (te(p)) {
          const { value: y, resolved: _ } = ac(p);
          (p = y), ($ += _ ? "~" : "_");
        }
        if (le(p)) {
          const y = He(p);
          if (y) ($ += "!"), (p = y);
          else if (Fe(p)) {
            const _ = l(p);
            return _ ? _ + $ : null;
          }
        }
        const v = a.get(p);
        return v ? v + $ : null;
      },
      m = (p) => {
        const $ = u(p);
        if ($ === null) throw V(27, p);
        return $;
      },
      f = new Map();
    c.forEach((p) => {
      var _, E;
      const $ = (_ = ec(p, t)) == null ? void 0 : _.$subs$;
      if (!$) return null;
      const v = (E = gc(p)) != null ? E : 0,
        y = [];
      v > 0 && y.push(v);
      for (const q of $) {
        const j = q[1];
        (q[0] === 0 && it(j) && pe(j) && !n.$elements$.includes(j)) ||
          y.push(q);
      }
      y.length > 0 && f.set(p, y);
    }),
      c.sort((p, $) => (f.has(p) ? 0 : 1) - (f.has($) ? 0 : 1));
    let h = 0;
    for (const p of c) a.set(p, kt(h)), h++;
    if (n.$noSerialize$.length > 0) {
      const p = a.get(void 0);
      for (const $ of n.$noSerialize$) a.set($, p);
    }
    const b = [];
    for (const p of c) {
      const $ = f.get(p);
      if ($ == null) break;
      b.push(
        $.map((v) => (typeof v == "number" ? `_${v}` : ua(v, u))).filter(jn)
      );
    }
    b.length, f.size;
    const g = c.map((p) => {
        if (p === null) return null;
        const $ = typeof p;
        switch ($) {
          case "undefined":
            return "";
          case "string":
          case "number":
          case "boolean":
            return p;
          default:
            const v = ((y, _, E) => {
              for (const q of fs)
                if (q.test(y)) {
                  let j = q.prefix;
                  return q.serialize && (j += q.serialize(y, _, E)), j;
                }
            })(p, m, t);
            if (v !== void 0) return v;
            if ($ === "object") {
              if (M(p)) return p.map(m);
              if (Dn(p)) {
                const y = {};
                for (const _ of Object.keys(p)) y[_] = m(p[_]);
                return y;
              }
            }
        }
        throw V(3, p);
      }),
      w = {};
    return (
      e.forEach((p) => {
        const $ = p.$element$,
          v = p.$refMap$,
          y = p.$props$,
          _ = p.$contexts$,
          E = p.$watches$,
          q = p.$componentQrl$,
          j = p.$seq$,
          P = {},
          Y = pe($) && n.$elements$.includes($);
        let O = !1;
        if (v.length > 0) {
          const N = v.map(m).join(" ");
          N && ((P.r = N), (O = !0));
        }
        if (o) {
          if (
            (Y && y && ((P.h = m(y) + " " + m(q)), (O = !0)), E && E.length > 0)
          ) {
            const N = E.map(u).filter(jn).join(" ");
            N && ((P.w = N), (O = !0));
          }
          if (Y && j && j.length > 0) {
            const N = j.map(m).join(" ");
            (P.s = N), (O = !0);
          }
          if (_) {
            const N = [];
            _.forEach((F, z) => {
              N.push(`${z}=${m(F)}`);
            });
            const B = N.join(" ");
            B && ((P.c = B), (O = !0));
          }
        }
        if (O) {
          const N = l($);
          w[N] = P;
        }
      }),
      {
        state: { ctx: w, objs: g, subs: b },
        objs: c,
        listeners: s,
        mode: o ? "render" : "listeners",
      }
    );
  },
  ec = (e, t) => {
    if (!le(e)) return;
    if (e instanceof ot) return ge(e);
    const n = t.$proxyMap$.get(e);
    return n ? ge(n) : void 0;
  },
  tc = (e, t, n) => {
    if (!n.fill(e) && e && typeof e == "object") {
      if (M(e)) for (let s = 0; s < e.length; s++) e[s] = t(e[s]);
      else if (Dn(e)) for (const s of Object.keys(e)) e[s] = t(e[s]);
    }
  },
  nc = {
    "!": (e, t) => {
      var n;
      return (n = t.$proxyMap$.get(e)) != null ? n : ms(e, t);
    },
    "~": (e) => Promise.resolve(e),
    _: (e) => Promise.reject(e),
  },
  sc = (e, t) => {
    var s;
    const n = e.$parent$;
    if (n && e.$props$ && t.$elements$.includes(n.$element$)) {
      const r = (s = ge(e.$props$)) == null ? void 0 : s.$subs$,
        o = e.$element$;
      r && r.some((i) => i[0] === 0 && i[1] === o) && ic(o, t);
    }
  },
  rc = (e) => ({
    $containerState$: e,
    $seen$: new Set(),
    $objSet$: new Set(),
    $noSerialize$: [],
    $elements$: [],
    $promises$: [],
  }),
  oc = (e, t) => {
    t.$elements$.includes(e) || t.$elements$.push(e);
  },
  ic = (e, t) => {
    if (t.$elements$.includes(e)) return;
    const n = ae(e);
    n && (t.$elements$.push(e), Co(n, t));
  },
  Co = (e, t) => {
    if (
      (e.$props$ && I(e.$props$, t, !1),
      e.$componentQrl$ && I(e.$componentQrl$, t, !1),
      e.$seq$)
    )
      for (const n of e.$seq$) I(n, t, !1);
    if (e.$watches$) for (const n of e.$watches$) I(n, t, !1);
    if (e.$contexts$) for (const n of e.$contexts$.values()) I(n, t, !1);
  },
  Ao = (e, t) => {
    if (t.$seen$.has(e)) return;
    t.$seen$.add(e);
    const n = e.$subs$;
    for (const s of n) {
      const r = s[1];
      it(r) && pe(r) ? s[0] === 0 && oc(r, t) : I(r, t, !0);
    }
  },
  Tn = Symbol(),
  ac = (e) => e[Tn],
  I = (e, t, n) => {
    if (e !== null) {
      const r = typeof e;
      switch (r) {
        case "function":
        case "object": {
          const o = t.$seen$;
          if (o.has(e)) return;
          if ((o.add(e), !$c(e)))
            return t.$objSet$.add(void 0), void t.$noSerialize$.push(e);
          const i = e,
            c = He(e);
          if (c) {
            if (((e = c), o.has(e))) return;
            o.add(e), n && Ao(ge(i), t);
          }
          if (
            ((l, u, m) => {
              for (const f of Za) if (f.test(l)) return f.collect(l, u, m), !0;
              return !1;
            })(e, t, n)
          )
            return void t.$objSet$.add(e);
          if (te(e))
            return void t.$promises$.push(
              ((s = e),
              s.then(
                (l) => {
                  const u = { resolved: !0, value: l };
                  return (s[Tn] = u), l;
                },
                (l) => {
                  const u = { resolved: !1, value: l };
                  return (s[Tn] = u), l;
                }
              )).then((l) => {
                I(l, t, n);
              })
            );
          if (r === "object") {
            if (it(e)) return;
            if (M(e)) for (let l = 0; l < e.length; l++) I(e[l], t, n);
            else if (Dn(e)) for (const l of Object.keys(e)) I(e[l], t, n);
          }
          break;
        }
      }
    }
    var s;
    t.$objSet$.add(e);
  },
  Cn = (e) => at(e) && e.hasAttribute("q:container"),
  cc = (e) => {
    const t = ns(e);
    return !!Fe(t) && t.hasAttribute("q:id");
  },
  kt = (e) => e.toString(36),
  Ae = (e) => parseInt(e, 36),
  Oo = (e) => {
    const t = e.indexOf(":");
    return e.slice(t + 1).replace(/-./g, (n) => n[1].toUpperCase());
  },
  Po = (e) => {
    de(e, "q:container") === "paused" &&
      (((t) => {
        if (!Cn(t)) return;
        let n = 0;
        const s = At(t),
          r = ((f) => {
            let h = f.lastElementChild;
            for (; h; ) {
              if (h.tagName === "SCRIPT" && de(h, "type") === "qwik/json")
                return h;
              h = h.previousElementSibling;
            }
          })(t === s.documentElement ? s.body : t);
        if (!r) return;
        r.remove();
        const o = bt(t);
        ((f, h) => {
          const b = f.ownerDocument.head;
          f.querySelectorAll("style[q\\:style]").forEach((g) => {
            h.$styleIds$.add(de(g, "q:style")), b.appendChild(g);
          });
        })(t, o);
        const i = JSON.parse(
            (r.textContent || "{}").replace(/\\x3C(\/?script)/g, "<$1")
          ),
          c = new Map(),
          a = (f) =>
            ((h, b, g, w) => {
              if ((typeof h == "string" && h.length, h.startsWith("#")))
                return b.has(h), b.get(h);
              const p = Ae(h);
              g.length;
              let $ = g[p];
              for (let v = h.length - 1; v >= 0; v--) {
                const y = h[v],
                  _ = nc[y];
                if (!_) break;
                $ = _($, w);
              }
              return $;
            })(f, c, i.objs, o),
          l = s.createTreeWalker(t, 129, {
            acceptNode(f) {
              if (Tt(f)) {
                const h = f.data;
                if (h.startsWith("qv ")) {
                  const b = oo(f),
                    g = new ts(f, b),
                    w = de(g, "q:id");
                  w &&
                    ((D(g).$id$ = w),
                    c.set("#" + w, g),
                    (n = Math.max(n, Ae(w))));
                } else if (h.startsWith("t=")) {
                  const b = h.slice(2);
                  c.set(
                    "#" + h.slice(2),
                    ((g) => {
                      const w = g.nextSibling;
                      if (Yr(w)) return w;
                      {
                        const p = g.ownerDocument.createTextNode("");
                        return g.parentElement.insertBefore(p, g), p;
                      }
                    })(f)
                  ),
                    (n = Math.max(n, Ae(b)));
                }
                return 3;
              }
              return Cn(f) ? 2 : f.hasAttribute("q:id") ? 1 : 3;
            },
          });
        let u = null;
        for (; (u = l.nextNode()); ) {
          const f = de(u, "q:id"),
            h = D(u);
          (h.$id$ = f),
            (h.$vdom$ = nt(u)),
            c.set("#" + f, u),
            (n = Math.max(n, Ae(f)));
        }
        o.$elementIndex$ = ++n;
        const m = ((f, h, b) => {
          const g = new Map(),
            w = new Map();
          return {
            prepare(p) {
              for (const $ of fs) {
                const v = $.prefix;
                if (p.startsWith(v)) {
                  const y = $.prepare(p.slice(v.length), h, b);
                  return $.fill && g.set(y, $), $.subs && w.set(y, $), y;
                }
              }
              return p;
            },
            subs(p, $) {
              const v = w.get(p);
              return !!v && (v.subs(p, $, h), !0);
            },
            fill(p) {
              const $ = g.get(p);
              return !!$ && ($.fill(p, f, h), !0);
            },
          };
        })(a, o, s);
        ((f, h) => {
          for (let b = 0; b < f.length; b++) {
            const g = f[b];
            lt(g) && (f[b] = g === "" ? void 0 : h.prepare(g));
          }
        })(i.objs, m),
          ((f, h, b, g, w) => {
            for (let p = 0; p < h.length; p++) {
              const $ = f[p],
                v = h[p];
              if (v) {
                const y = [];
                let _ = 0;
                for (const E of v)
                  E.startsWith("_")
                    ? (_ = parseInt(E.slice(1), 10))
                    : y.push(da(E, b));
                _ > 0 && ($[ke] = _), w.subs($, y) || ft($, g, y);
              }
            }
          })(i.objs, i.subs, a, o, m);
        for (const f of i.objs) tc(f, a, m);
        for (const f of Object.keys(i.ctx)) {
          f.startsWith("#");
          const h = i.ctx[f],
            b = c.get(f),
            g = D(b),
            w = h.r,
            p = h.s,
            $ = h.h,
            v = h.c,
            y = h.w;
          if (
            (w &&
              (at(b), (g.$refMap$ = w.split(" ").map(a)), (g.li = Gi(g, t))),
            p && (g.$seq$ = p.split(" ").map(a)),
            y && (g.$watches$ = y.split(" ").map(a)),
            v)
          ) {
            g.$contexts$ = new Map();
            for (const _ of v.split(" ")) {
              const [E, q] = _.split("=");
              g.$contexts$.set(E, a(q));
            }
          }
          if ($) {
            const [_, E] = $.split(" "),
              q = b.getAttribute("q:sstyle");
            (g.$scopeIds$ = q ? q.split(" ") : null),
              (g.$mounted$ = !0),
              (g.$props$ = a(_)),
              (g.$componentQrl$ = a(E));
          }
        }
        se(t, "q:container", "resumed"),
          ((f, h, b, g) => {
            f &&
              typeof CustomEvent == "function" &&
              f.dispatchEvent(
                new CustomEvent("qresume", {
                  detail: void 0,
                  bubbles: !0,
                  composed: !0,
                })
              );
          })(t);
      })(e),
      lc(e));
  },
  lc = (e) => {
    e.qwik = {
      pause: () =>
        (async (t, n) => {
          const s = At(t),
            r = s.documentElement,
            o = Jr(t) ? r : t;
          if (de(o, "q:container") === "paused") throw V(21);
          const i = o === s.documentElement ? s.body : o,
            c = await (async (l) => {
              const u = bt(l),
                m = ((f, h) => {
                  h(f);
                  const b = f.ownerDocument.createTreeWalker(f, 129, {
                      acceptNode: (p) => (Cn(p) ? 2 : h(p) ? 1 : 3),
                    }),
                    g = [];
                  let w = null;
                  for (; (w = b.nextNode()); ) g.push(ns(w));
                  return g;
                })(l, cc).map(ae);
              return To(m, u);
            })(o),
            a = s.createElement("script");
          return (
            se(a, "type", "qwik/json"),
            (a.textContent = JSON.stringify(c.state, void 0, void 0).replace(
              /<(\/?script)/g,
              "\\x3C$1"
            )),
            i.appendChild(a),
            se(o, "q:container", "paused"),
            c
          );
        })(e),
      state: bt(e),
    };
  },
  ae = (e) => e._qc_,
  D = (e) => {
    let t = ae(e);
    return (
      t ||
        (e._qc_ = t =
          {
            $dirty$: !1,
            $mounted$: !1,
            $needAttachListeners$: !1,
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
  uc = (e, t) => {
    var s;
    const n = e.$element$;
    (s = e.$watches$) == null ||
      s.forEach((r) => {
        t.$clearSub$(r), So(r);
      }),
      e.$componentQrl$ && t.$clearSub$(n),
      (e.$componentQrl$ = null),
      (e.$seq$ = null),
      (e.$watches$ = null),
      (e.$dirty$ = !1),
      (n._qc_ = void 0);
  },
  sr = ["on", "window:on", "document:on"],
  dc = ["on", "on-window", "on-document"],
  Lo = (e) => {
    let t = "on";
    for (let n = 0; n < sr.length; n++) {
      const s = sr[n];
      if (e.startsWith(s)) {
        (t = dc[n]), (e = e.slice(s.length));
        break;
      }
    }
    return t + ":" + (e.startsWith("-") ? Zn(e.slice(1)) : e.toLowerCase());
  },
  fc = (e) => {
    const t = ge(e),
      n = He(e);
    return {
      set(s, r) {
        const o = n[s];
        (n[s] = r), o !== r && t.$notifySubs$(s);
      },
    };
  },
  Io = (e, t) => (
    e.$capture$,
    (e.$captureRef$ = e.$capture$.map((n) => {
      const s = parseInt(n, 10),
        r = t.$refMap$[s];
      return t.$refMap$.length, r;
    }))
  ),
  Et = 2,
  An = Symbol("proxy target"),
  ke = Symbol("proxy flags"),
  be = Symbol("proxy manager"),
  k = Symbol("IMMUTABLE"),
  ms = (e, t, n = 0) =>
    t.$proxyMap$.get(e) || (n !== 0 && (e[ke] = n), ft(e, t, void 0));
class ot {
  constructor(t, n) {
    (this.untrackedValue = t), (this[be] = n);
  }
  get value() {
    var n;
    const t = (n = $t()) == null ? void 0 : n.$subscriber$;
    return t && this[be].$addSub$([0, t, void 0]), this.untrackedValue;
  }
  set value(t) {
    const n = this[be],
      s = this.untrackedValue;
    n && s !== t && ((this.untrackedValue = t), n.$notifySubs$());
  }
}
const ce = (e) => e instanceof ot || e instanceof Pe,
  De = (e, t, n, s, r) => {
    const o =
      n instanceof Pe
        ? [e, t, He(n.ref), s, r, n.prop === "value" ? void 0 : n.prop]
        : [e, t, n, s, r, void 0];
    ge(n).$addSub$(o);
  },
  ft = (e, t, n) => {
    Ht(e), t.$proxyMap$.has(e);
    const s = t.$subsManager$.$createManager$(n),
      r = new Proxy(e, new mc(t, s));
    return t.$proxyMap$.set(e, r), r;
  };
class mc {
  constructor(t, n) {
    (this.$containerState$ = t), (this.$manager$ = n);
  }
  get(t, n) {
    var l, u;
    if (typeof n == "symbol")
      return n === An ? t : n === be ? this.$manager$ : t[n];
    let s;
    const r = (l = t[ke]) != null ? l : 0,
      o = $t(),
      i = (1 & r) != 0,
      c = (r & Et) != 0;
    let a = t[n];
    if ((o && (s = o.$subscriber$), c)) {
      const m = t["$$" + n];
      (n in t && !m && !((u = t[k]) != null && u[n])) || (s = null),
        m && (a = m.value);
    }
    if (s) {
      const m = M(t);
      this.$manager$.$addSub$([0, s, m ? void 0 : n]);
    }
    return i ? pc(a, this.$containerState$) : a;
  }
  set(t, n, s) {
    var i;
    if (typeof n == "symbol") return (t[n] = s), !0;
    const r = (i = t[ke]) != null ? i : 0;
    if ((r & Et) != 0) throw V(17);
    const o = (1 & r) != 0 ? Ht(s) : s;
    return M(t)
      ? ((t[n] = o), this.$manager$.$notifySubs$(), !0)
      : (t[n] !== o && ((t[n] = o), this.$manager$.$notifySubs$(n)), !0);
  }
  has(t, n) {
    if (n === An) return !0;
    const s = Object.prototype.hasOwnProperty;
    return !!s.call(t, n) || !(typeof n != "string" || !s.call(t, "$$" + n));
  }
  ownKeys(t) {
    let n = null;
    const s = $t();
    return (
      s && (n = s.$subscriber$),
      n && this.$manager$.$addSub$([0, n, void 0]),
      Object.getOwnPropertyNames(t).map((r) =>
        r.startsWith("$$") ? r.slice(2) : r
      )
    );
  }
}
const pc = (e, t) => {
    if (Fo(e)) return e;
    if (le(e)) {
      if (Object.isFrozen(e)) return e;
      const n = Ht(e);
      return n !== e || it(n)
        ? e
        : hc(n)
        ? t.$proxyMap$.get(e) || ms(e, t, 1)
        : e;
    }
    return e;
  },
  ps = new WeakSet(),
  hc = (e) => (!le(e) && !ie(e)) || !ps.has(e),
  $c = (e) => !ps.has(e),
  Dt = (e) => (e != null && ps.add(e), e),
  Ht = (e) => {
    var t;
    return le(e) && (t = He(e)) != null ? t : e;
  },
  He = (e) => e[An],
  ge = (e) => e[be],
  gc = (e) => e[ke];
class Pe {
  constructor(t, n) {
    (this.ref = t), (this.prop = n);
  }
  get [be]() {
    return ge(this.ref);
  }
  get value() {
    return this.ref[this.prop];
  }
  set value(t) {
    this.ref[this.prop] = t;
  }
}
const S = (e, t) => {
    if (e instanceof ot || e instanceof Pe) return e;
    const n = He(e);
    if (n) {
      const s = n["$$" + t];
      return s || new Pe(e, t);
    }
    return e[t];
  },
  Fo = (e) => typeof e == "function" && typeof e.getSymbol == "function",
  hs = (e, t, n, s, r, o, i) => {
    let c;
    const a = ($) => {
        c || (c = $);
      },
      l = async ($) => {
        if (($ && a($), n !== null)) return n;
        if (s !== null) return (n = s().then((v) => (n = v[t])));
        {
          if (!e) throw V(31, t);
          if (!c) throw V(30, e, t);
          const v = Ot().importSymbol(c, e, t);
          return (n = T(v, (y) => (n = y)));
        }
      },
      u = ($) => (n !== null ? n : l($)),
      m =
        ($, v) =>
        (...y) => {
          const _ = _c(),
            E = u();
          return T(E, (q) => {
            if (ie(q)) {
              if (v && v() === !1) return;
              const j = { ...f($), $qrl$: w };
              return yc(t, j.$element$, _), he(j, q, ...y);
            }
            throw V(10);
          });
        },
      f = ($) => ($ == null ? $e() : M($) ? Gr($) : $),
      h = async function (...$) {
        return await m()(...$);
      },
      b = i != null ? i : t,
      g = vc(b),
      w = h;
    return Object.assign(h, {
      getSymbol: () => b,
      getHash: () => g,
      resolve: l,
      $resolveLazy$: u,
      $setContainer$: a,
      $chunk$: e,
      $symbol$: t,
      $refSymbol$: i,
      $hash$: g,
      getFn: m,
      $capture$: r,
      $captureRef$: o,
      $dev$: null,
    });
  },
  vc = (e) => {
    const t = e.lastIndexOf("_");
    return t > -1 ? e.slice(t + 1) : e;
  },
  yc = (e, t, n) => {
    bc("qsymbol", { detail: { symbol: e, element: t, reqTime: n } });
  },
  bc = (e, t) => {
    ze() ||
      typeof document != "object" ||
      document.dispatchEvent(new CustomEvent(e, { bubbles: !1, detail: t }));
  },
  _c = () =>
    ze() ? 0 : typeof performance == "object" ? performance.now() : 0,
  C = (e) => {
    function t(n, s) {
      const r = e.$hash$ + ":" + (s || "");
      return d(dt, { "q:renderFn": e, children: n.children, props: n }, r);
    }
    return (t[jt] = [e]), t;
  },
  wc = (e) => typeof e == "function" && e[jt] !== void 0,
  $s = (e) => {
    var n;
    const t = (n = e.name) != null ? n : "";
    return d(dt, { "q:s": "" }, t);
  },
  qc = async (e, t) => {
    var l;
    const n = t.containerTagName,
      s = On(1).$element$,
      r = po(s),
      o = co({ nodeType: 9 }, r),
      i = (l = t.beforeContent) != null ? l : [],
      c = {
        rCtx: o,
        $contexts$: [],
        projectedChildren: void 0,
        projectedContext: void 0,
        hostCtx: null,
        invocationContext: void 0,
        headNodes: n === "html" ? i : [],
        $pendingListeners$: [],
      },
      a = {
        ...t.containerAttributes,
        "q:container": "paused",
        "q:version": "0.10.0",
        "q:render": "ssr",
        "q:base": t.base,
        children: n === "html" ? [e] : [i, e],
      };
    (r.$envData$ = { url: t.url, ...t.envData }),
      (e = d(n, a)),
      (r.$hostsRendering$ = new Set()),
      (r.$renderPromise$ = Promise.resolve().then(() =>
        xc(e, c, t.stream, r, t)
      )),
      await r.$renderPromise$;
  },
  xc = async (e, t, n, s, r) => {
    const o = r.beforeClose;
    return (
      await Uo(
        e,
        t,
        n,
        0,
        o
          ? (i) => {
              const c = o(t.$contexts$, s);
              return oe(c, t, i, 0, void 0);
            }
          : void 0
      ),
      t.rCtx.$static$
    );
  },
  zo = (e, t, n, s, r, o, i) => {
    var h;
    const c = e.props,
      a = c["q:renderFn"];
    if (a) return (t.$componentQrl$ = a), kc(s, r, t, e, o, i);
    let l = "<!--qv" + jc(c);
    const u = "q:s" in c,
      m = e.key != null ? String(e.key) : null;
    if (
      (u &&
        ((h = s.hostCtx) == null || h.$id$, (l += " q:sref=" + s.hostCtx.$id$)),
      m != null && (l += " q:key=" + m),
      (l += "-->"),
      r.write(l),
      n)
    )
      for (const b of n) Mo(b.type, b.props, r);
    const f = Do(c.children, s, r, o);
    return T(f, () => {
      var g;
      if (!u && !i) return void r.write(rr);
      let b;
      if (u) {
        const w = (g = s.projectedChildren) == null ? void 0 : g[m];
        w &&
          ((s.projectedChildren[m] = void 0),
          (b = oe(w, s.projectedContext, r, o)));
      }
      return (
        i && (b = T(b, () => i(r))),
        T(b, () => {
          r.write(rr);
        })
      );
    });
  },
  rr = "<!--/qv-->",
  jc = (e) => {
    let t = "";
    for (const n of Object.keys(e)) {
      if (n === "children") continue;
      const s = e[n];
      s != null && (t += " " + (s === "" ? n : n + "=" + s));
    }
    return t;
  },
  Mo = (e, t, n) => {
    if (
      (n.write(
        "<" +
          e +
          ((r) => {
            let o = "";
            for (const i of Object.keys(r)) {
              if (i === "dangerouslySetInnerHTML") continue;
              const c = r[i];
              c != null && (o += " " + (c === "" ? i : i + '="' + c + '"'));
            }
            return o;
          })(t) +
          ">"
      ),
      !!Wo[e])
    )
      return;
    const s = t.dangerouslySetInnerHTML;
    s != null && n.write(s), n.write(`</${e}>`);
  },
  kc = (e, t, n, s, r, o) => {
    const i = s.props;
    return (
      Nc(e.rCtx, n, i.props),
      T(yt(e.rCtx, n), (c) => {
        const a = n.$element$,
          l = c.rCtx,
          u = $e(a, void 0);
        (u.$subscriber$ = a), (u.$renderCtx$ = l);
        const m = { ...e, rCtx: l },
          f = {
            ...e,
            projectedChildren: Ec(i.children, e),
            projectedContext: m,
            rCtx: l,
            invocationContext: u,
          },
          h = [];
        if (n.$appendStyles$) {
          const p = 4 & r ? e.headNodes : h;
          for (const $ of n.$appendStyles$)
            p.push(
              d("style", {
                "q:style": $.styleId,
                dangerouslySetInnerHTML: $.content,
              })
            );
        }
        const b = zt(e.rCtx),
          g = n.$scopeIds$ ? fo(n.$scopeIds$) : void 0,
          w = d(s.type, { "q:sstyle": g, "q:id": b, children: c.node }, s.key);
        return (
          (n.$id$ = b),
          e.$contexts$.push(n),
          (f.hostCtx = n),
          zo(
            w,
            n,
            h,
            f,
            t,
            r,
            (p) => (
              n.$needAttachListeners$, o ? T(or(f, p), () => o(p)) : or(f, p)
            )
          )
        );
      })
    );
  },
  or = (e, t) => {
    const n = e.projectedChildren;
    if (n) {
      const s = Object.keys(n).map((r) => {
        const o = n[r];
        if (o)
          return d("q:template", {
            [Ee]: r,
            hidden: "",
            "aria-hidden": "true",
            children: o,
          });
      });
      return oe(s, e, t, 0, void 0);
    }
  },
  Ec = (e, t) => {
    var r;
    const n = Ho(e, t);
    if (n === null) return;
    const s = {};
    for (const o of n) {
      let i = "";
      Lt(o) && (i = (r = o.props[Ee]) != null ? r : "");
      let c = s[i];
      c || (s[i] = c = []), c.push(o);
    }
    return s;
  },
  On = (e) => D({ nodeType: e, _qc_: null }),
  Uo = (e, t, n, s, r) => {
    var c, a;
    const o = e.type;
    if (typeof o == "string") {
      const l = e.key,
        u = e.props,
        m = (c = u[k]) != null ? c : ye,
        f = On(1),
        h = f.$element$,
        b = o === "head",
        g = t.hostCtx;
      let w = "<" + o,
        p = !1;
      for (const q of Object.keys(u)) {
        if (
          q === "children" ||
          q === "key" ||
          q === "class" ||
          q === "className" ||
          q === "dangerouslySetInnerHTML"
        )
          continue;
        if (q === "ref") {
          os(u[q], h);
          continue;
        }
        let j = ce(m[q]) ? m[q] : u[q];
        if (Jn(q)) {
          Gn(f.li, q, j, void 0);
          continue;
        }
        const P = Rc(q);
        if (ce(j)) {
          if (g) {
            const O = g.$element$;
            De(1, O, j, h, P), (p = !0);
          }
          j = j.value;
        }
        const Y = Tc(P, j);
        Y != null && (w += " " + (j === "" ? P : P + '="' + Pc(Y) + '"'));
      }
      const $ = f.li,
        v = (a = u.class) != null ? a : u.className;
      let y = Sc(v);
      if (
        (g &&
          (g.$scopeIds$ && (y = g.$scopeIds$.join(" ") + " " + y),
          g.$needAttachListeners$ &&
            (ut($, g.li), (g.$needAttachListeners$ = !1))),
        b && (s |= 1),
        Cc[o] && (s |= 8),
        (y = y.trim()),
        y && (w += ' class="' + y + '"'),
        $.length > 0)
      ) {
        const q = Yn($);
        for (const j of q) w += " " + j[0] + '="' + Vn(j[1], f) + '"';
      }
      if (
        (l != null && (w += ' q:key="' + l + '"'),
        "ref" in u || $.length > 0 || p)
      ) {
        const q = zt(t.rCtx);
        (w += ' q:id="' + q + '"'), (f.$id$ = q), t.$contexts$.push(f);
      }
      if ((1 & s && (w += " q:head"), (w += ">"), n.write(w), Wo[o])) return;
      const _ = u.dangerouslySetInnerHTML;
      if (_ != null) return n.write(String(_)), void n.write(`</${o}>`);
      b || (s &= -2), o === "html" ? (s |= 4) : (s &= -5);
      const E = oe(u.children, t, n, s);
      return T(E, () => {
        if (b) {
          for (const q of t.headNodes) Mo(q.type, q.props, n);
          t.headNodes.length = 0;
        }
        if (r)
          return T(r(n), () => {
            n.write(`</${o}>`);
          });
        n.write(`</${o}>`);
      });
    }
    if (o === dt) {
      const l = On(111);
      return (l.$parent$ = t.hostCtx), zo(e, l, void 0, t, n, s, r);
    }
    if (o === to) return void n.write("<!--" + e.props.data + "-->");
    if (o === no)
      return (async (l, u, m, f) => {
        m.write("<!--qkssr-f-->");
        const h = l.props.children;
        let b;
        if (ie(h)) {
          const g = h({
            write(w) {
              m.write(w), m.write("<!--qkssr-f-->");
            },
          });
          if (te(g)) return g;
          b = g;
        } else b = h;
        for await (const g of b)
          await oe(g, u, m, f, void 0), m.write("<!--qkssr-f-->");
      })(e, t, n, s);
    const i = he(t.invocationContext, o, e.props, e.key);
    return oe(i, t, n, s, r);
  },
  oe = (e, t, n, s, r) => {
    var o;
    if (e != null && typeof e != "boolean")
      if (lt(e) || typeof e == "number") n.write(sn(String(e)));
      else {
        if (Lt(e)) return Uo(e, t, n, s, r);
        if (M(e)) return Do(e, t, n, s);
        if (ce(e)) {
          const i = 8 & s,
            c = (o = t.hostCtx) == null ? void 0 : o.$element$;
          let a;
          if (c) {
            if (!i) {
              a = e.value;
              const l = zt(t.rCtx);
              return (
                De(2, c, e, "#" + l, "data"),
                void n.write(`<!--t=${l}-->${sn(String(a))}<!---->`)
              );
            }
            a = he(t.invocationContext, () => e.value);
          }
          return void n.write(sn(String(a)));
        }
        if (te(e))
          return n.write("<!--qkssr-f-->"), e.then((i) => oe(i, t, n, s, r));
      }
  };
function Do(e, t, n, s) {
  if (e == null) return;
  if (!M(e)) return oe(e, t, n, s);
  if (e.length === 1) return oe(e[0], t, n, s);
  if (e.length === 0) return;
  let r = 0;
  const o = [];
  return e.reduce((i, c, a) => {
    const l = [];
    o.push(l);
    const u = oe(
        c,
        t,
        i
          ? {
              write(f) {
                r === a ? n.write(f) : l.push(f);
              },
            }
          : n,
        s
      ),
      m = () => {
        r++, o.length > r && o[r].forEach((f) => n.write(f));
      };
    return te(u) && i
      ? Promise.all([u, i]).then(m)
      : te(u)
      ? u.then(m)
      : i
      ? i.then(m)
      : void r++;
  }, void 0);
}
const Ho = (e, t) => {
    if (e == null) return null;
    const n = Ko(e, t),
      s = M(n) ? n : [n];
    return s.length === 0 ? null : s;
  },
  Sc = (e) => {
    if (!e) return "";
    if (typeof e == "string") return e;
    if (Array.isArray(e)) return e.join(" ");
    const t = [];
    for (const n in e)
      Object.prototype.hasOwnProperty.call(e, n) && e[n] && t.push(n);
    return t.join(" ");
  },
  Ko = (e, t) => {
    if (e == null) return null;
    if (M(e)) return e.flatMap((n) => Ko(n, t));
    if (
      Lt(e) &&
      ie(e.type) &&
      e.type !== to &&
      e.type !== no &&
      e.type !== dt
    ) {
      const n = he(t.invocationContext, e.type, e.props, e.key);
      return Ho(n, t);
    }
    return e;
  },
  Nc = (e, t, n) => {
    var i;
    const s = Object.keys(n),
      r = { [ke]: Et };
    if (((t.$props$ = ft(r, e.$static$.$containerState$)), s.length === 0))
      return;
    const o = (r[k] = (i = n[k]) != null ? i : ye);
    for (const c of s)
      c !== "children" && (ce(o[c]) ? (r["$$" + c] = o[c]) : (r[c] = n[c]));
  };
function Rc(e) {
  return e === "htmlFor" ? "for" : e;
}
function Tc(e, t) {
  return e === "style"
    ? uo(t)
    : t === !1 || t == null
    ? null
    : t === !0
    ? ""
    : String(t);
}
const Cc = { title: !0, style: !0, script: !0, noframes: !0, noscript: !0 },
  Wo = {
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
  Ac = /[&<>]/g,
  Oc = /[&"]/g,
  sn = (e) =>
    e.replace(Ac, (t) => {
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
  Pc = (e) =>
    e.replace(Oc, (t) => {
      switch (t) {
        case "&":
          return "&amp;";
        case '"':
          return "&quot;";
        default:
          return "";
      }
    }),
  ee = (e, t) => {
    var i;
    const { get: n, set: s, ctx: r } = Me();
    if (n != null) return n;
    const o = ie(e) ? e() : e;
    if ((t == null ? void 0 : t.reactive) === !1) return s(o), o;
    {
      const c = r.$renderCtx$.$static$.$containerState$,
        a = ms(
          o,
          c,
          (i = t == null ? void 0 : t.recursive) != null && i ? 1 : 0
        );
      return s(a), a;
    }
  };
function Bo(e, t) {
  var n;
  return (n = Wn().$renderCtx$.$static$.$containerState$.$envData$[e]) != null
    ? n
    : t;
}
function Lc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Qo = { exports: {} },
  gs = { exports: {} },
  Vo = function (t, n) {
    return function () {
      for (var r = new Array(arguments.length), o = 0; o < r.length; o++)
        r[o] = arguments[o];
      return t.apply(n, r);
    };
  },
  Ic = Vo,
  vs = Object.prototype.toString,
  ys = (function (e) {
    return function (t) {
      var n = vs.call(t);
      return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
    };
  })(Object.create(null));
function Se(e) {
  return (
    (e = e.toLowerCase()),
    function (n) {
      return ys(n) === e;
    }
  );
}
function bs(e) {
  return Array.isArray(e);
}
function St(e) {
  return typeof e > "u";
}
function Fc(e) {
  return (
    e !== null &&
    !St(e) &&
    e.constructor !== null &&
    !St(e.constructor) &&
    typeof e.constructor.isBuffer == "function" &&
    e.constructor.isBuffer(e)
  );
}
var Jo = Se("ArrayBuffer");
function zc(e) {
  var t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && Jo(e.buffer)),
    t
  );
}
function Mc(e) {
  return typeof e == "string";
}
function Uc(e) {
  return typeof e == "number";
}
function Yo(e) {
  return e !== null && typeof e == "object";
}
function pt(e) {
  if (ys(e) !== "object") return !1;
  var t = Object.getPrototypeOf(e);
  return t === null || t === Object.prototype;
}
var Dc = Se("Date"),
  Hc = Se("File"),
  Kc = Se("Blob"),
  Wc = Se("FileList");
function _s(e) {
  return vs.call(e) === "[object Function]";
}
function Bc(e) {
  return Yo(e) && _s(e.pipe);
}
function Qc(e) {
  var t = "[object FormData]";
  return (
    e &&
    ((typeof FormData == "function" && e instanceof FormData) ||
      vs.call(e) === t ||
      (_s(e.toString) && e.toString() === t))
  );
}
var Vc = Se("URLSearchParams");
function Jc(e) {
  return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
}
function Yc() {
  return typeof navigator < "u" &&
    (navigator.product === "ReactNative" ||
      navigator.product === "NativeScript" ||
      navigator.product === "NS")
    ? !1
    : typeof window < "u" && typeof document < "u";
}
function ws(e, t) {
  if (!(e === null || typeof e > "u"))
    if ((typeof e != "object" && (e = [e]), bs(e)))
      for (var n = 0, s = e.length; n < s; n++) t.call(null, e[n], n, e);
    else
      for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) && t.call(null, e[r], r, e);
}
function Pn() {
  var e = {};
  function t(r, o) {
    pt(e[o]) && pt(r)
      ? (e[o] = Pn(e[o], r))
      : pt(r)
      ? (e[o] = Pn({}, r))
      : bs(r)
      ? (e[o] = r.slice())
      : (e[o] = r);
  }
  for (var n = 0, s = arguments.length; n < s; n++) ws(arguments[n], t);
  return e;
}
function Gc(e, t, n) {
  return (
    ws(t, function (r, o) {
      n && typeof r == "function" ? (e[o] = Ic(r, n)) : (e[o] = r);
    }),
    e
  );
}
function Xc(e) {
  return e.charCodeAt(0) === 65279 && (e = e.slice(1)), e;
}
function Zc(e, t, n, s) {
  (e.prototype = Object.create(t.prototype, s)),
    (e.prototype.constructor = e),
    n && Object.assign(e.prototype, n);
}
function el(e, t, n) {
  var s,
    r,
    o,
    i = {};
  t = t || {};
  do {
    for (s = Object.getOwnPropertyNames(e), r = s.length; r-- > 0; )
      (o = s[r]), i[o] || ((t[o] = e[o]), (i[o] = !0));
    e = Object.getPrototypeOf(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}
function tl(e, t, n) {
  (e = String(e)),
    (n === void 0 || n > e.length) && (n = e.length),
    (n -= t.length);
  var s = e.indexOf(t, n);
  return s !== -1 && s === n;
}
function nl(e) {
  if (!e) return null;
  var t = e.length;
  if (St(t)) return null;
  for (var n = new Array(t); t-- > 0; ) n[t] = e[t];
  return n;
}
var sl = (function (e) {
    return function (t) {
      return e && t instanceof e;
    };
  })(typeof Uint8Array < "u" && Object.getPrototypeOf(Uint8Array)),
  U = {
    isArray: bs,
    isArrayBuffer: Jo,
    isBuffer: Fc,
    isFormData: Qc,
    isArrayBufferView: zc,
    isString: Mc,
    isNumber: Uc,
    isObject: Yo,
    isPlainObject: pt,
    isUndefined: St,
    isDate: Dc,
    isFile: Hc,
    isBlob: Kc,
    isFunction: _s,
    isStream: Bc,
    isURLSearchParams: Vc,
    isStandardBrowserEnv: Yc,
    forEach: ws,
    merge: Pn,
    extend: Gc,
    trim: Jc,
    stripBOM: Xc,
    inherits: Zc,
    toFlatObject: el,
    kindOf: ys,
    kindOfTest: Se,
    endsWith: tl,
    toArray: nl,
    isTypedArray: sl,
    isFileList: Wc,
  },
  Ne = U;
function ir(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
var Go = function (t, n, s) {
    if (!n) return t;
    var r;
    if (s) r = s(n);
    else if (Ne.isURLSearchParams(n)) r = n.toString();
    else {
      var o = [];
      Ne.forEach(n, function (a, l) {
        a === null ||
          typeof a > "u" ||
          (Ne.isArray(a) ? (l = l + "[]") : (a = [a]),
          Ne.forEach(a, function (m) {
            Ne.isDate(m)
              ? (m = m.toISOString())
              : Ne.isObject(m) && (m = JSON.stringify(m)),
              o.push(ir(l) + "=" + ir(m));
          }));
      }),
        (r = o.join("&"));
    }
    if (r) {
      var i = t.indexOf("#");
      i !== -1 && (t = t.slice(0, i)),
        (t += (t.indexOf("?") === -1 ? "?" : "&") + r);
    }
    return t;
  },
  rl = U;
function Kt() {
  this.handlers = [];
}
Kt.prototype.use = function (t, n, s) {
  return (
    this.handlers.push({
      fulfilled: t,
      rejected: n,
      synchronous: s ? s.synchronous : !1,
      runWhen: s ? s.runWhen : null,
    }),
    this.handlers.length - 1
  );
};
Kt.prototype.eject = function (t) {
  this.handlers[t] && (this.handlers[t] = null);
};
Kt.prototype.forEach = function (t) {
  rl.forEach(this.handlers, function (s) {
    s !== null && t(s);
  });
};
var ol = Kt,
  il = U,
  al = function (t, n) {
    il.forEach(t, function (r, o) {
      o !== n &&
        o.toUpperCase() === n.toUpperCase() &&
        ((t[n] = r), delete t[o]);
    });
  },
  rn,
  ar;
function Ke() {
  if (ar) return rn;
  ar = 1;
  var e = U;
  function t(r, o, i, c, a) {
    Error.call(this),
      (this.message = r),
      (this.name = "AxiosError"),
      o && (this.code = o),
      i && (this.config = i),
      c && (this.request = c),
      a && (this.response = a);
  }
  e.inherits(t, Error, {
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
  var n = t.prototype,
    s = {};
  return (
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
    ].forEach(function (r) {
      s[r] = { value: r };
    }),
    Object.defineProperties(t, s),
    Object.defineProperty(n, "isAxiosError", { value: !0 }),
    (t.from = function (r, o, i, c, a, l) {
      var u = Object.create(n);
      return (
        e.toFlatObject(r, u, function (f) {
          return f !== Error.prototype;
        }),
        t.call(u, r.message, o, i, c, a),
        (u.name = r.name),
        l && Object.assign(u, l),
        u
      );
    }),
    (rn = t),
    rn
  );
}
var Xo = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  ne = U;
function cl(e, t) {
  t = t || new FormData();
  var n = [];
  function s(o) {
    return o === null
      ? ""
      : ne.isDate(o)
      ? o.toISOString()
      : ne.isArrayBuffer(o) || ne.isTypedArray(o)
      ? typeof Blob == "function"
        ? new Blob([o])
        : Buffer.from(o)
      : o;
  }
  function r(o, i) {
    if (ne.isPlainObject(o) || ne.isArray(o)) {
      if (n.indexOf(o) !== -1)
        throw Error("Circular reference detected in " + i);
      n.push(o),
        ne.forEach(o, function (a, l) {
          if (!ne.isUndefined(a)) {
            var u = i ? i + "." + l : l,
              m;
            if (a && !i && typeof a == "object") {
              if (ne.endsWith(l, "{}")) a = JSON.stringify(a);
              else if (ne.endsWith(l, "[]") && (m = ne.toArray(a))) {
                m.forEach(function (f) {
                  !ne.isUndefined(f) && t.append(u, s(f));
                });
                return;
              }
            }
            r(a, u);
          }
        }),
        n.pop();
    } else t.append(i, s(o));
  }
  return r(e), t;
}
var Zo = cl,
  on,
  cr;
function ll() {
  if (cr) return on;
  cr = 1;
  var e = Ke();
  return (
    (on = function (n, s, r) {
      var o = r.config.validateStatus;
      !r.status || !o || o(r.status)
        ? n(r)
        : s(
            new e(
              "Request failed with status code " + r.status,
              [e.ERR_BAD_REQUEST, e.ERR_BAD_RESPONSE][
                Math.floor(r.status / 100) - 4
              ],
              r.config,
              r.request,
              r
            )
          );
    }),
    on
  );
}
var an, lr;
function ul() {
  if (lr) return an;
  lr = 1;
  var e = U;
  return (
    (an = e.isStandardBrowserEnv()
      ? (function () {
          return {
            write: function (s, r, o, i, c, a) {
              var l = [];
              l.push(s + "=" + encodeURIComponent(r)),
                e.isNumber(o) && l.push("expires=" + new Date(o).toGMTString()),
                e.isString(i) && l.push("path=" + i),
                e.isString(c) && l.push("domain=" + c),
                a === !0 && l.push("secure"),
                (document.cookie = l.join("; "));
            },
            read: function (s) {
              var r = document.cookie.match(
                new RegExp("(^|;\\s*)(" + s + ")=([^;]*)")
              );
              return r ? decodeURIComponent(r[3]) : null;
            },
            remove: function (s) {
              this.write(s, "", Date.now() - 864e5);
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
    an
  );
}
var dl = function (t) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
  },
  fl = function (t, n) {
    return n ? t.replace(/\/+$/, "") + "/" + n.replace(/^\/+/, "") : t;
  },
  ml = dl,
  pl = fl,
  ei = function (t, n) {
    return t && !ml(n) ? pl(t, n) : n;
  },
  cn,
  ur;
function hl() {
  if (ur) return cn;
  ur = 1;
  var e = U,
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
    (cn = function (s) {
      var r = {},
        o,
        i,
        c;
      return (
        s &&
          e.forEach(
            s.split(`
`),
            function (l) {
              if (
                ((c = l.indexOf(":")),
                (o = e.trim(l.substr(0, c)).toLowerCase()),
                (i = e.trim(l.substr(c + 1))),
                o)
              ) {
                if (r[o] && t.indexOf(o) >= 0) return;
                o === "set-cookie"
                  ? (r[o] = (r[o] ? r[o] : []).concat([i]))
                  : (r[o] = r[o] ? r[o] + ", " + i : i);
              }
            }
          ),
        r
      );
    }),
    cn
  );
}
var ln, dr;
function $l() {
  if (dr) return ln;
  dr = 1;
  var e = U;
  return (
    (ln = e.isStandardBrowserEnv()
      ? (function () {
          var n = /(msie|trident)/i.test(navigator.userAgent),
            s = document.createElement("a"),
            r;
          function o(i) {
            var c = i;
            return (
              n && (s.setAttribute("href", c), (c = s.href)),
              s.setAttribute("href", c),
              {
                href: s.href,
                protocol: s.protocol ? s.protocol.replace(/:$/, "") : "",
                host: s.host,
                search: s.search ? s.search.replace(/^\?/, "") : "",
                hash: s.hash ? s.hash.replace(/^#/, "") : "",
                hostname: s.hostname,
                port: s.port,
                pathname:
                  s.pathname.charAt(0) === "/" ? s.pathname : "/" + s.pathname,
              }
            );
          }
          return (
            (r = o(window.location.href)),
            function (c) {
              var a = e.isString(c) ? o(c) : c;
              return a.protocol === r.protocol && a.host === r.host;
            }
          );
        })()
      : (function () {
          return function () {
            return !0;
          };
        })()),
    ln
  );
}
var un, fr;
function Wt() {
  if (fr) return un;
  fr = 1;
  var e = Ke(),
    t = U;
  function n(s) {
    e.call(this, s == null ? "canceled" : s, e.ERR_CANCELED),
      (this.name = "CanceledError");
  }
  return t.inherits(n, e, { __CANCEL__: !0 }), (un = n), un;
}
var dn, mr;
function gl() {
  return (
    mr ||
      ((mr = 1),
      (dn = function (t) {
        var n = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
        return (n && n[1]) || "";
      })),
    dn
  );
}
var fn, pr;
function hr() {
  if (pr) return fn;
  pr = 1;
  var e = U,
    t = ll(),
    n = ul(),
    s = Go,
    r = ei,
    o = hl(),
    i = $l(),
    c = Xo,
    a = Ke(),
    l = Wt(),
    u = gl();
  return (
    (fn = function (f) {
      return new Promise(function (b, g) {
        var w = f.data,
          p = f.headers,
          $ = f.responseType,
          v;
        function y() {
          f.cancelToken && f.cancelToken.unsubscribe(v),
            f.signal && f.signal.removeEventListener("abort", v);
        }
        e.isFormData(w) && e.isStandardBrowserEnv() && delete p["Content-Type"];
        var _ = new XMLHttpRequest();
        if (f.auth) {
          var E = f.auth.username || "",
            q = f.auth.password
              ? unescape(encodeURIComponent(f.auth.password))
              : "";
          p.Authorization = "Basic " + btoa(E + ":" + q);
        }
        var j = r(f.baseURL, f.url);
        _.open(f.method.toUpperCase(), s(j, f.params, f.paramsSerializer), !0),
          (_.timeout = f.timeout);
        function P() {
          if (!!_) {
            var N =
                "getAllResponseHeaders" in _
                  ? o(_.getAllResponseHeaders())
                  : null,
              B =
                !$ || $ === "text" || $ === "json"
                  ? _.responseText
                  : _.response,
              F = {
                data: B,
                status: _.status,
                statusText: _.statusText,
                headers: N,
                config: f,
                request: _,
              };
            t(
              function (G) {
                b(G), y();
              },
              function (G) {
                g(G), y();
              },
              F
            ),
              (_ = null);
          }
        }
        if (
          ("onloadend" in _
            ? (_.onloadend = P)
            : (_.onreadystatechange = function () {
                !_ ||
                  _.readyState !== 4 ||
                  (_.status === 0 &&
                    !(_.responseURL && _.responseURL.indexOf("file:") === 0)) ||
                  setTimeout(P);
              }),
          (_.onabort = function () {
            !_ ||
              (g(new a("Request aborted", a.ECONNABORTED, f, _)), (_ = null));
          }),
          (_.onerror = function () {
            g(new a("Network Error", a.ERR_NETWORK, f, _, _)), (_ = null);
          }),
          (_.ontimeout = function () {
            var B = f.timeout
                ? "timeout of " + f.timeout + "ms exceeded"
                : "timeout exceeded",
              F = f.transitional || c;
            f.timeoutErrorMessage && (B = f.timeoutErrorMessage),
              g(
                new a(
                  B,
                  F.clarifyTimeoutError ? a.ETIMEDOUT : a.ECONNABORTED,
                  f,
                  _
                )
              ),
              (_ = null);
          }),
          e.isStandardBrowserEnv())
        ) {
          var Y =
            (f.withCredentials || i(j)) && f.xsrfCookieName
              ? n.read(f.xsrfCookieName)
              : void 0;
          Y && (p[f.xsrfHeaderName] = Y);
        }
        "setRequestHeader" in _ &&
          e.forEach(p, function (B, F) {
            typeof w > "u" && F.toLowerCase() === "content-type"
              ? delete p[F]
              : _.setRequestHeader(F, B);
          }),
          e.isUndefined(f.withCredentials) ||
            (_.withCredentials = !!f.withCredentials),
          $ && $ !== "json" && (_.responseType = f.responseType),
          typeof f.onDownloadProgress == "function" &&
            _.addEventListener("progress", f.onDownloadProgress),
          typeof f.onUploadProgress == "function" &&
            _.upload &&
            _.upload.addEventListener("progress", f.onUploadProgress),
          (f.cancelToken || f.signal) &&
            ((v = function (N) {
              !_ ||
                (g(!N || (N && N.type) ? new l() : N), _.abort(), (_ = null));
            }),
            f.cancelToken && f.cancelToken.subscribe(v),
            f.signal &&
              (f.signal.aborted ? v() : f.signal.addEventListener("abort", v))),
          w || (w = null);
        var O = u(j);
        if (O && ["http", "https", "file"].indexOf(O) === -1) {
          g(new a("Unsupported protocol " + O + ":", a.ERR_BAD_REQUEST, f));
          return;
        }
        _.send(w);
      });
    }),
    fn
  );
}
var mn, $r;
function vl() {
  return $r || (($r = 1), (mn = null)), mn;
}
var L = U,
  gr = al,
  vr = Ke(),
  yl = Xo,
  bl = Zo,
  _l = { "Content-Type": "application/x-www-form-urlencoded" };
function yr(e, t) {
  !L.isUndefined(e) &&
    L.isUndefined(e["Content-Type"]) &&
    (e["Content-Type"] = t);
}
function wl() {
  var e;
  return (
    (typeof XMLHttpRequest < "u" ||
      (typeof process < "u" &&
        Object.prototype.toString.call(process) === "[object process]")) &&
      (e = hr()),
    e
  );
}
function ql(e, t, n) {
  if (L.isString(e))
    try {
      return (t || JSON.parse)(e), L.trim(e);
    } catch (s) {
      if (s.name !== "SyntaxError") throw s;
    }
  return (n || JSON.stringify)(e);
}
var Bt = {
  transitional: yl,
  adapter: wl(),
  transformRequest: [
    function (t, n) {
      if (
        (gr(n, "Accept"),
        gr(n, "Content-Type"),
        L.isFormData(t) ||
          L.isArrayBuffer(t) ||
          L.isBuffer(t) ||
          L.isStream(t) ||
          L.isFile(t) ||
          L.isBlob(t))
      )
        return t;
      if (L.isArrayBufferView(t)) return t.buffer;
      if (L.isURLSearchParams(t))
        return (
          yr(n, "application/x-www-form-urlencoded;charset=utf-8"), t.toString()
        );
      var s = L.isObject(t),
        r = n && n["Content-Type"],
        o;
      if ((o = L.isFileList(t)) || (s && r === "multipart/form-data")) {
        var i = this.env && this.env.FormData;
        return bl(o ? { "files[]": t } : t, i && new i());
      } else if (s || r === "application/json")
        return yr(n, "application/json"), ql(t);
      return t;
    },
  ],
  transformResponse: [
    function (t) {
      var n = this.transitional || Bt.transitional,
        s = n && n.silentJSONParsing,
        r = n && n.forcedJSONParsing,
        o = !s && this.responseType === "json";
      if (o || (r && L.isString(t) && t.length))
        try {
          return JSON.parse(t);
        } catch (i) {
          if (o)
            throw i.name === "SyntaxError"
              ? vr.from(i, vr.ERR_BAD_RESPONSE, this, null, this.response)
              : i;
        }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: vl() },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: { common: { Accept: "application/json, text/plain, */*" } },
};
L.forEach(["delete", "get", "head"], function (t) {
  Bt.headers[t] = {};
});
L.forEach(["post", "put", "patch"], function (t) {
  Bt.headers[t] = L.merge(_l);
});
var qs = Bt,
  xl = U,
  jl = qs,
  kl = function (t, n, s) {
    var r = this || jl;
    return (
      xl.forEach(s, function (i) {
        t = i.call(r, t, n);
      }),
      t
    );
  },
  pn,
  br;
function ti() {
  return (
    br ||
      ((br = 1),
      (pn = function (t) {
        return !!(t && t.__CANCEL__);
      })),
    pn
  );
}
var _r = U,
  hn = kl,
  El = ti(),
  Sl = qs,
  Nl = Wt();
function $n(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new Nl();
}
var Rl = function (t) {
    $n(t),
      (t.headers = t.headers || {}),
      (t.data = hn.call(t, t.data, t.headers, t.transformRequest)),
      (t.headers = _r.merge(
        t.headers.common || {},
        t.headers[t.method] || {},
        t.headers
      )),
      _r.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        function (r) {
          delete t.headers[r];
        }
      );
    var n = t.adapter || Sl.adapter;
    return n(t).then(
      function (r) {
        return (
          $n(t),
          (r.data = hn.call(t, r.data, r.headers, t.transformResponse)),
          r
        );
      },
      function (r) {
        return (
          El(r) ||
            ($n(t),
            r &&
              r.response &&
              (r.response.data = hn.call(
                t,
                r.response.data,
                r.response.headers,
                t.transformResponse
              ))),
          Promise.reject(r)
        );
      }
    );
  },
  X = U,
  ni = function (t, n) {
    n = n || {};
    var s = {};
    function r(u, m) {
      return X.isPlainObject(u) && X.isPlainObject(m)
        ? X.merge(u, m)
        : X.isPlainObject(m)
        ? X.merge({}, m)
        : X.isArray(m)
        ? m.slice()
        : m;
    }
    function o(u) {
      if (X.isUndefined(n[u])) {
        if (!X.isUndefined(t[u])) return r(void 0, t[u]);
      } else return r(t[u], n[u]);
    }
    function i(u) {
      if (!X.isUndefined(n[u])) return r(void 0, n[u]);
    }
    function c(u) {
      if (X.isUndefined(n[u])) {
        if (!X.isUndefined(t[u])) return r(void 0, t[u]);
      } else return r(void 0, n[u]);
    }
    function a(u) {
      if (u in n) return r(t[u], n[u]);
      if (u in t) return r(void 0, t[u]);
    }
    var l = {
      url: i,
      method: i,
      data: i,
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
      validateStatus: a,
    };
    return (
      X.forEach(Object.keys(t).concat(Object.keys(n)), function (m) {
        var f = l[m] || o,
          h = f(m);
        (X.isUndefined(h) && f !== a) || (s[m] = h);
      }),
      s
    );
  },
  gn,
  wr;
function si() {
  return wr || ((wr = 1), (gn = { version: "0.27.2" })), gn;
}
var Tl = si().version,
  ve = Ke(),
  xs = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  function (e, t) {
    xs[e] = function (s) {
      return typeof s === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  }
);
var qr = {};
xs.transitional = function (t, n, s) {
  function r(o, i) {
    return (
      "[Axios v" +
      Tl +
      "] Transitional option '" +
      o +
      "'" +
      i +
      (s ? ". " + s : "")
    );
  }
  return function (o, i, c) {
    if (t === !1)
      throw new ve(
        r(i, " has been removed" + (n ? " in " + n : "")),
        ve.ERR_DEPRECATED
      );
    return (
      n &&
        !qr[i] &&
        ((qr[i] = !0),
        console.warn(
          r(
            i,
            " has been deprecated since v" +
              n +
              " and will be removed in the near future"
          )
        )),
      t ? t(o, i, c) : !0
    );
  };
};
function Cl(e, t, n) {
  if (typeof e != "object")
    throw new ve("options must be an object", ve.ERR_BAD_OPTION_VALUE);
  for (var s = Object.keys(e), r = s.length; r-- > 0; ) {
    var o = s[r],
      i = t[o];
    if (i) {
      var c = e[o],
        a = c === void 0 || i(c, o, e);
      if (a !== !0)
        throw new ve("option " + o + " must be " + a, ve.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new ve("Unknown option " + o, ve.ERR_BAD_OPTION);
  }
}
var Al = { assertOptions: Cl, validators: xs },
  ri = U,
  Ol = Go,
  xr = ol,
  jr = Rl,
  Qt = ni,
  Pl = ei,
  oi = Al,
  Re = oi.validators;
function Le(e) {
  (this.defaults = e),
    (this.interceptors = { request: new xr(), response: new xr() });
}
Le.prototype.request = function (t, n) {
  typeof t == "string" ? ((n = n || {}), (n.url = t)) : (n = t || {}),
    (n = Qt(this.defaults, n)),
    n.method
      ? (n.method = n.method.toLowerCase())
      : this.defaults.method
      ? (n.method = this.defaults.method.toLowerCase())
      : (n.method = "get");
  var s = n.transitional;
  s !== void 0 &&
    oi.assertOptions(
      s,
      {
        silentJSONParsing: Re.transitional(Re.boolean),
        forcedJSONParsing: Re.transitional(Re.boolean),
        clarifyTimeoutError: Re.transitional(Re.boolean),
      },
      !1
    );
  var r = [],
    o = !0;
  this.interceptors.request.forEach(function (h) {
    (typeof h.runWhen == "function" && h.runWhen(n) === !1) ||
      ((o = o && h.synchronous), r.unshift(h.fulfilled, h.rejected));
  });
  var i = [];
  this.interceptors.response.forEach(function (h) {
    i.push(h.fulfilled, h.rejected);
  });
  var c;
  if (!o) {
    var a = [jr, void 0];
    for (
      Array.prototype.unshift.apply(a, r),
        a = a.concat(i),
        c = Promise.resolve(n);
      a.length;

    )
      c = c.then(a.shift(), a.shift());
    return c;
  }
  for (var l = n; r.length; ) {
    var u = r.shift(),
      m = r.shift();
    try {
      l = u(l);
    } catch (f) {
      m(f);
      break;
    }
  }
  try {
    c = jr(l);
  } catch (f) {
    return Promise.reject(f);
  }
  for (; i.length; ) c = c.then(i.shift(), i.shift());
  return c;
};
Le.prototype.getUri = function (t) {
  t = Qt(this.defaults, t);
  var n = Pl(t.baseURL, t.url);
  return Ol(n, t.params, t.paramsSerializer);
};
ri.forEach(["delete", "get", "head", "options"], function (t) {
  Le.prototype[t] = function (n, s) {
    return this.request(
      Qt(s || {}, { method: t, url: n, data: (s || {}).data })
    );
  };
});
ri.forEach(["post", "put", "patch"], function (t) {
  function n(s) {
    return function (o, i, c) {
      return this.request(
        Qt(c || {}, {
          method: t,
          headers: s ? { "Content-Type": "multipart/form-data" } : {},
          url: o,
          data: i,
        })
      );
    };
  }
  (Le.prototype[t] = n()), (Le.prototype[t + "Form"] = n(!0));
});
var Ll = Le,
  vn,
  kr;
function Il() {
  if (kr) return vn;
  kr = 1;
  var e = Wt();
  function t(n) {
    if (typeof n != "function")
      throw new TypeError("executor must be a function.");
    var s;
    this.promise = new Promise(function (i) {
      s = i;
    });
    var r = this;
    this.promise.then(function (o) {
      if (!!r._listeners) {
        var i,
          c = r._listeners.length;
        for (i = 0; i < c; i++) r._listeners[i](o);
        r._listeners = null;
      }
    }),
      (this.promise.then = function (o) {
        var i,
          c = new Promise(function (a) {
            r.subscribe(a), (i = a);
          }).then(o);
        return (
          (c.cancel = function () {
            r.unsubscribe(i);
          }),
          c
        );
      }),
      n(function (i) {
        r.reason || ((r.reason = new e(i)), s(r.reason));
      });
  }
  return (
    (t.prototype.throwIfRequested = function () {
      if (this.reason) throw this.reason;
    }),
    (t.prototype.subscribe = function (s) {
      if (this.reason) {
        s(this.reason);
        return;
      }
      this._listeners ? this._listeners.push(s) : (this._listeners = [s]);
    }),
    (t.prototype.unsubscribe = function (s) {
      if (!!this._listeners) {
        var r = this._listeners.indexOf(s);
        r !== -1 && this._listeners.splice(r, 1);
      }
    }),
    (t.source = function () {
      var s,
        r = new t(function (i) {
          s = i;
        });
      return { token: r, cancel: s };
    }),
    (vn = t),
    vn
  );
}
var yn, Er;
function Fl() {
  return (
    Er ||
      ((Er = 1),
      (yn = function (t) {
        return function (s) {
          return t.apply(null, s);
        };
      })),
    yn
  );
}
var bn, Sr;
function zl() {
  if (Sr) return bn;
  Sr = 1;
  var e = U;
  return (
    (bn = function (n) {
      return e.isObject(n) && n.isAxiosError === !0;
    }),
    bn
  );
}
var Nr = U,
  Ml = Vo,
  ht = Ll,
  Ul = ni,
  Dl = qs;
function ii(e) {
  var t = new ht(e),
    n = Ml(ht.prototype.request, t);
  return (
    Nr.extend(n, ht.prototype, t),
    Nr.extend(n, t),
    (n.create = function (r) {
      return ii(Ul(e, r));
    }),
    n
  );
}
var J = ii(Dl);
J.Axios = ht;
J.CanceledError = Wt();
J.CancelToken = Il();
J.isCancel = ti();
J.VERSION = si().version;
J.toFormData = Zo;
J.AxiosError = Ke();
J.Cancel = J.CanceledError;
J.all = function (t) {
  return Promise.all(t);
};
J.spread = Fl();
J.isAxiosError = zl();
gs.exports = J;
gs.exports.default = J;
(function (e) {
  e.exports = gs.exports;
})(Qo);
const H = Lc(Qo.exports),
  K = "https://api.realworld.io/api/";
let ai = "";
const js = (e) => {
    localStorage.setItem("token", e), Es("token", e);
  },
  ci = (e) => (
    delete e.username,
    H.put(`${K}user`, { user: e }, { headers: { authorization: W() } })
  ),
  Hl = async (e) => {
    try {
      const t = await H.post(`${K}users/login`, { user: e }),
        { token: n } = t.data.user;
      js(n);
    } catch (t) {
      console.error("error logging in", t);
    }
  },
  li = () => {
    Ss(""), localStorage.removeItem("token");
  },
  Vt = async () => {
    try {
      return (await H.get(`${K}user`, { headers: { authorization: W() } })).data
        .user;
    } catch {
      return null;
    }
  },
  ks = (e) => (
    e === void 0 && (e = document.cookie),
    ((e == null ? void 0 : e.split(";")) || []).reduce((s, r) => {
      const [o, i] = r.split("=");
      return (s[o.trim()] = i), s;
    }, {})
  ),
  Kl = (e) => ks()[e],
  Es = (e, t) => {
    try {
      document.cookie = `${e}=${t}`;
    } catch {}
  },
  W = () => {
    try {
      const e = ai || localStorage.getItem("token");
      return e ? `Token ${e}` : null;
    } catch {
      return null;
    }
  },
  Ss = (e) => {
    (ai = e), Es("token", e);
  },
  Wl = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        storeToken: js,
        updateUser: ci,
        login: Hl,
        logOut: li,
        getUser: Vt,
        getCookies: ks,
        getCookie: Kl,
        setCookie: Es,
        getAuthToken: W,
        saveTempCookie: Ss,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
const Bl = C(
  x((e) => {
    const { user: t } = e;
    return d("div", {
      className: "menu",
      children: [
        d("div", {
          className: "menu-item",
          children: d("a", { href: "/", children: "Home" }),
        }),
        t != null && t.username
          ? d(A, {
              children: [
                d("div", {
                  class: "menu-item",
                  children: d("a", {
                    href: "/settings",
                    class: "settings",
                    children: [d("i", { class: "ion-gear-a" }), "Settings"],
                  }),
                }),
                d("div", {
                  className: "menu-item",
                  children: d("a", {
                    href: "/editor",
                    class: "authenticated",
                    children: [
                      d("i", { class: "ion-compose" }),
                      " New Article",
                    ],
                  }),
                }),
                d("div", {
                  class: "menu-item",
                  children: d("a", {
                    href: `/profile/${t.username}`,
                    children: [
                      d("img", {
                        get src() {
                          return t.image;
                        },
                        [k]: { src: S(t, "image") },
                      }),
                      t == null ? void 0 : t.username,
                    ],
                  }),
                }),
              ],
            })
          : d(A, {
              children: [
                " ",
                d("div", {
                  className: "menu-item",
                  children: d("a", { href: "/register", children: "Sign up" }),
                }),
                d("div", {
                  className: "menu-item",
                  children: d("a", { href: "/signin", children: "Sign in" }),
                }),
              ],
            }),
      ],
    });
  }, "s_x0zYRXJwTCA")
);
const Ql = C(
  x((e) => {
    const { user: t } = e;
    return d("div", {
      className: "header-container",
      children: d("div", {
        class: "row",
        children: [
          d("div", { className: "application-name-header", children: "Qwik" }),
          d(Bl, { user: t, [k]: { user: !0 } }),
        ],
      }),
    });
  }, "s_N0EkpR3Hs08")
);
let Ns;
const Vl = async (e) => {
    const { request: t } = e,
      s = ks(t.headers.get("cookie")).token;
    Ss(s), (Ns = await Vt());
  },
  Rr = C(
    x(
      () =>
        d(A, {
          children: [
            d(Ql, { user: Ns, [k]: { user: !0 } }),
            d("main", { children: d($s, {}) }),
          ],
        }),
      "s_42v99d5vQ0E"
    )
  ),
  Jl = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        get user() {
          return Ns;
        },
        onGet: Vl,
        Layout: Rr,
        default: Rr,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
const Yl = C(
  x(
    (e) =>
      d("div", {
        className: "tags-container",
        children: [
          d("p", { children: "Popular tags" }),
          d("div", {
            children: e.tags.map((t) =>
              d("a", {
                href: "javascript:void(0)",
                onClick$: x(
                  () => {
                    const [n, s] = R();
                    return n.tagSelected$(s);
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
const Gl = (e, t, n) => {
    (e.activeTab = t), n(t);
  },
  ui = C(
    x((e) => {
      var n;
      const t = ee(
        {
          activeTab:
            ((n = e.activeTab) == null ? void 0 : n.label) || e.tabs[0],
        },
        { recursive: !0 }
      );
      return d("ul", {
        class: "nav-list",
        children: e.tabs.map((s) => {
          var r;
          return d("li", {
            class:
              s !== ((r = e.activeTab) == null ? void 0 : r.label)
                ? "nav-item"
                : "nav-item active",
            children: d("a", {
              onClick$: x(
                () => {
                  const [o, i, c] = R();
                  return Gl(i, c, o.navigationChange$);
                },
                "s_AWJH06rg6N4",
                [e, t, s]
              ),
              children: [" ", s],
            }),
          });
        }),
      });
    }, "s_v0WP50GwSBA")
  ),
  di = (e) =>
    new Date(e).toLocaleDateString("default", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
const fi = C(
  x((e) => {
    const { user: t, followingChanged: n, following: s } = e,
      r = ee({ following: s }, { recursive: !0, reactive: !0 }),
      o = x(
        async (a, l) => {
          const [u, m] = R(),
            f = W();
          if (!f) {
            console.error("cant change follow state");
            return;
          }
          const h = await H.request({
            url: `${K}profiles/${a.username}/follow`,
            method: l ? "post" : "delete",
            headers: { authorization: f },
          });
          return (a.following = l), (m.following = l), u && u(l), h.status;
        },
        "s_2h7KadHSQzE",
        [n, r]
      ),
      i = x(
        async (a) => {
          const [l] = R();
          return l(a, !0);
        },
        "s_i3TsH9K5zHA",
        [o]
      ),
      c = x(
        async (a) => {
          const [l] = R();
          return l(a, !1);
        },
        "s_tYlbSh0ztf8",
        [o]
      );
    return r.following
      ? d("button", {
          class: "btn btn-sm action-btn btn-outline-secondary",
          onClick$: x(
            () => {
              const [a, l] = R();
              return a(l);
            },
            "s_z7Nq5uFhz44",
            [c, t]
          ),
          children: [
            d("i", { class: "ion-minus-round" }),
            " \xA0 Unfollow ",
            S(t, "username"),
          ],
        })
      : d("button", {
          class: "btn btn-sm action-btn btn-outline-secondary",
          onClick$: x(
            () => {
              const [a, l] = R();
              return a(l);
            },
            "s_VmL1hUkjcx8",
            [i, t]
          ),
          children: [
            d("i", { class: "ion-plus-round" }),
            " \xA0 Follow ",
            S(t, "username"),
          ],
        });
  }, "s_OqTpRjcc6ZU")
);
const Xl = (e) =>
    d(A, {
      children: [e.favorited ? "Unfavorite Article" : "Favorite Article", " "],
    }),
  Zl = (e, t) => (t ? `(${e})` : e),
  eu = (e) => {
    const { article: t, showText: n, markAsFavorite: s } = e;
    return d(A, {
      children: s
        ? d("button", {
            class: "btn btn-sm btn-outline-primary",
            onClick$: x(
              async () => {
                const [r, o] = R();
                return await o(r);
              },
              "s_UwTikFAPo0s",
              [t, s]
            ),
            children: [
              d("i", { class: "ion-heart" }),
              n ? d(A, { children: Xl(t) }) : d(A, {}),
              d("span", {
                class: "counter",
                children: Zl(t.favoritesCount, !!n),
              }),
            ],
          })
        : d(A, {}),
    });
  },
  Rs = (e) => {
    const { article: t, showFavoriteText: n } = e,
      { author: s } = t;
    return d("div", {
      class: "article-meta",
      children: [
        d("a", {
          href: `/profile/${s.username}`,
          children: d("img", {
            get src() {
              return s.image;
            },
            get alt() {
              return s.username;
            },
            [k]: { src: S(s, "image"), alt: S(s, "username") },
          }),
        }),
        d("div", {
          children: [
            d("div", {
              children: d("a", {
                class: "author",
                href: `/profile/${t.author.username}`,
                children: [" ", S(t.author, "username")],
              }),
            }),
            d("div", {
              children: d("span", { class: "date", children: di(t.createdAt) }),
            }),
          ],
        }),
        e.authenticated
          ? d(A, {
              children: [
                e.showFollowUser
                  ? d(fi, {
                      get user() {
                        return t.author;
                      },
                      get following() {
                        return t.author.following;
                      },
                      [k]: {
                        user: S(t, "author"),
                        following: S(t.author, "following"),
                      },
                    })
                  : d(A, {}),
                e.markAsFavorite
                  ? d(eu, {
                      article: t,
                      showText: n,
                      get markAsFavorite() {
                        return e.markAsFavorite;
                      },
                      [k]: {
                        article: !0,
                        showText: !0,
                        markAsFavorite: S(e, "markAsFavorite"),
                      },
                    })
                  : d(A, {}),
              ],
            })
          : d(A, {}),
      ],
    });
  };
const Ts = C(
  x((e) => {
    const { onDelete$: t } = e;
    return d("ul", {
      class: "tag-list",
      children: e.tagsList.map((n) =>
        d("li", {
          class: "tag-list-item",
          children: [
            t
              ? d("i", {
                  class: "ion-close-round tag-delete-icon",
                  onClick$: x(
                    () => {
                      const [s, r] = R();
                      return s(r);
                    },
                    "s_LUCN00zgmeM",
                    [t, n]
                  ),
                })
              : null,
            n,
          ],
        })
      ),
    });
  }, "s_7yrRCx6kKcA")
);
const tu = C(
    x((e) => {
      const {
        article: t,
        authenticated: n,
        showFollowUser: s,
        markAsFavorite: r,
      } = e;
      return d("div", {
        children: d("div", {
          class: "article-container",
          children: [
            d(Rs, {
              markAsFavorite: r,
              showFollowUser: s,
              article: t,
              authenticated: n,
              [k]: {
                markAsFavorite: !0,
                showFollowUser: !0,
                article: !0,
                authenticated: !0,
              },
            }),
            d("div", {
              class: "article-title",
              children: d("a", {
                href: `/article/${t.slug}`,
                children: [" ", S(t, "title")],
              }),
            }),
            d("div", { class: "description", children: S(t, "description") }),
            d("div", { class: "read-more", children: "Read mode..." }),
            d(Ts, {
              get tagsList() {
                return t.tagList;
              },
              [k]: { tagsList: S(t, "tagList") },
            }),
          ],
        }),
      });
    }, "s_qnC01OTHiLo")
  ),
  Nt = (e) => {
    const t = x(
      async (n) => {
        const [s] = R(),
          r = `${K}/articles/${n.slug}/favorite`,
          o = { headers: { authorization: W() } },
          i = n.favorited ? await H.delete(r, o) : await H.post(r, {}, o),
          { favoritesCount: c } = i.data.article;
        (n.favoritesCount = c),
          (n.favorited = !n.favorited),
          s.articlesStateChanged && s.articlesStateChanged();
      },
      "s_zaO67WT8WTI",
      [e]
    );
    return d("div", {
      class: "articles-list",
      children: e.articles.length
        ? e.articles.map((n) =>
            d(tu, {
              article: n,
              markAsFavorite: t,
              get showFollowUser() {
                return e.showFollowUser;
              },
              get authenticated() {
                return e.authenticated;
              },
              [k]: {
                showFollowUser: S(e, "showFollowUser"),
                authenticated: S(e, "authenticated"),
              },
            })
          )
        : "No articles here... yet",
    });
  };
const nu = async () => {
    try {
      return (await H.get(`${K}/tags`)).data.tags;
    } catch {
      return console.error("Error getting tags"), [];
    }
  },
  mi = async () => {
    const e = `${K}articles/feed`;
    try {
      return (
        await H.get(e, { headers: { authorization: W() } })
      ).data.articles.map((n) => ({
        ...n,
        author: { ...n.author, imageUrl: n.author.image },
      }));
    } catch {
      return [];
    }
  },
  su = async (e = "") => {
    const t = `${K}/articles?limit=10&offset=0`;
    return (
      await H.get(e ? `${t}&tag=${e}` : t, { headers: { authorization: W() } })
    ).data.articles.map((s) => ({
      ...s,
      author: { ...s.author, imageUrl: s.author.image },
    }));
  },
  ru = (e, t) => {
    const n = e.startsWith("#") ? e.substring(1) : "";
    (t.activeTab = t.tabs.find((s) => s.label === e)),
      mi().then((s) => {
        t.personalFeed = s;
      }),
      (t.selectedTag = n);
  },
  ou = async (e, t) => {
    (t.selectedTag = e), (t.tabs[2].label = `#${e}`), (t.activeTab = t.tabs[2]);
  },
  iu = C(
    x(() => {
      var c;
      const e = [
          { label: "Your Feed" },
          { label: "Global Feed" },
          { label: "" },
        ],
        t = !!W(),
        n = ee(
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
        s = x(
          () => {
            const [a] = R();
            a.count++;
          },
          "s_bJqynq84JNE",
          [n]
        ),
        r = xe(
          x(({ cleanup: a }) => {
            const l = new AbortController();
            return a(() => l.abort()), nu();
          }, "s_8qL0FtJ799M")
        ),
        o = xe(
          x(
            ({ cleanup: a, track: l }) => {
              const [u] = R(),
                m = new AbortController();
              return (
                l(() => ({ count: u.count, selectedTag: u.selectedTag })),
                a(() => m.abort()),
                mi()
              );
            },
            "s_xfr0dVJs0nA",
            [n]
          )
        ),
        i = xe(
          x(
            ({ track: a, cleanup: l }) => {
              const [u] = R(),
                m = new AbortController();
              return (
                a(() => ({ count: u.count, selectedTag: u.selectedTag })),
                l(() => m.abort()),
                su(u.selectedTag)
              );
            },
            "s_5GB43OhxwlQ",
            [n]
          )
        );
      return d("div", {
        class: "my-app p-20",
        children: [
          d("div", {
            class: "banner",
            children: [
              d("h1", { children: "Qwik" }),
              d("p", {
                children: "A place to share your knowledge about Qwik",
              }),
            ],
          }),
          d("div", {
            class: "content-container",
            children: [
              d("div", {
                class: "feed",
                children: [
                  d("div", {
                    children: d(ui, {
                      tabs: n.tabs.map((a) => a.label),
                      navigationChange$: x(
                        (a) => {
                          const [l] = R();
                          return ru(a, l);
                        },
                        "s_80ZkdeKD3Yc",
                        [n]
                      ),
                      get activeTab() {
                        return n.activeTab;
                      },
                      [k]: {
                        navigationChange$: !0,
                        activeTab: S(n, "activeTab"),
                      },
                    }),
                  }),
                  ((c = n.activeTab) == null ? void 0 : c.label) !== "Your Feed"
                    ? d(je, {
                        value: i,
                        onResolved: (a) =>
                          d(Nt, {
                            articles: a,
                            authenticated: t,
                            articlesStateChanged: s,
                          }),
                        [k]: { value: !0, onResolved: !0 },
                      })
                    : d(je, {
                        value: o,
                        onResolved: (a) =>
                          d(Nt, {
                            articles: a,
                            authenticated: t,
                            articlesStateChanged: s,
                          }),
                        [k]: { value: !0, onResolved: !0 },
                      }),
                ],
              }),
              d(je, {
                value: r,
                onRejected: (a) =>
                  d(A, {
                    children: [
                      "Error: ",
                      S(a, "message"),
                      " ",
                      S(a, "stackTrace"),
                    ],
                  }),
                onResolved: (a) =>
                  d(Yl, {
                    tags: a,
                    tagSelected$: x(
                      (l) => {
                        const [u] = R();
                        return ou(l, u);
                      },
                      "s_VKoV14GbX3E",
                      [n]
                    ),
                    [k]: { tagSelected$: !0 },
                  }),
                [k]: { value: !0, onRejected: !0, onResolved: !0 },
              }),
            ],
          }),
        ],
      });
    }, "s_z2jCgFrcwVE")
  ),
  au = C(x(() => d(iu, {}), "s_GthzHEB0UDE")),
  cu = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: au },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
const pi = x((e, t) => {
    if (e.key !== "Enter") return;
    const n = e.target,
      { value: s } = n;
    !s ||
      t.tags.includes(s) ||
      ((t.tags = [...t.tags, s]), (n.value = ""), e.preventDefault());
  }, "s_KG72EULq5CU"),
  hi = (e, t) => {
    t.tags = [...t.tags.filter((n) => n !== e)];
  },
  $i = (e, t) => {
    const n = e.target;
    (t.errors = {}), e.preventDefault();
    const s = {
      title: n.querySelector('[name="title"]').value,
      description: n.querySelector('[name="description').value,
      body: n.querySelector('[name="body"]').value,
      tagList: t.tags,
    };
    if (
      (s.title || (t.errors.title = "cannot be blank"),
      s.description || (t.errors.description = "cannot be blank"),
      s.body || (t.errors.body = "cannot be blank"),
      !Object.keys(t.errors).length)
    )
      return (
        H.post(
          `${K}articles`,
          { article: s },
          { headers: { authorization: W() } }
        )
          .then(() => {
            window.location.href = "/";
          })
          .catch((r) => {
            const { errors: o } = r.response.data;
            t.errors = o;
          }),
        !1
      );
  },
  lu = C(
    x(() => {
      const e = ee({ tags: [], errors: {} });
      return (
        ds(
          x(
            () => {
              var n;
              const [t] = R();
              (n = document.querySelector("form")) == null ||
                n.addEventListener("submit", (s) => $i(s, t));
            },
            "s_F0ypgMWg72Q",
            [e]
          )
        ),
        d("div", {
          class: "container",
          children: [
            d("div", {
              class: "errors",
              children: Object.entries(e.errors).map((t) =>
                d("div", { children: [t[0], " ", t[1]] })
              ),
            }),
            d("form", {
              children: [
                d("input", { placeholder: "Article title", name: "title" }),
                d("input", {
                  placeholder: "What is this article about?",
                  name: "description",
                }),
                d("textarea", {
                  rows: 8,
                  name: "body",
                  placeholder: "Write your article (in markdown)",
                }),
                d("input", {
                  name: "tagsList",
                  placeholder: "enter tags",
                  onKeyDown$: x(
                    (t) => {
                      const [n] = R();
                      return pi(t, n);
                    },
                    "s_3oHYt18CLtU",
                    [e]
                  ),
                }),
                d("button", { children: "Publish Article" }),
              ],
            }),
            d(Ts, {
              get tagsList() {
                return e.tags;
              },
              onDelete$: x(
                (t) => {
                  const [n] = R();
                  return hi(t, n);
                },
                "s_m9Naobhs100",
                [e]
              ),
              [k]: { tagsList: S(e, "tags"), onDelete$: !0 },
            }),
          ],
        })
      );
    }, "s_5ysWeBz40eU")
  ),
  uu = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        onTagsKeyDown: pi,
        deleteTag: hi,
        submitArticleData: $i,
        default: lu,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
const Ln = () => {
    var o, i, c;
    const e =
        (o = document.querySelector('input[name="username"]')) == null
          ? void 0
          : o.value,
      t =
        (i = document.querySelector('input[name="password"]')) == null
          ? void 0
          : i.value,
      n =
        (c = document.querySelector('input[name="email"]')) == null
          ? void 0
          : c.value,
      s = { username: e, email: n, password: t };
    return (
      H.post(`${K}/users`, { user: s }).then((a) => {
        const l = a.data.user.token;
        js(l), l && (window.location.href = "/");
      }),
      !1
    );
  },
  du = C(
    x(() => {
      const e = ee({ username: "", passowrd: "", email: "" });
      return d("form", {
        onSubmit$: x(() => Ln(), "s_wO0DUje1mMQ"),
        children: d("div", {
          class: "container",
          children: [
            d("h1", { children: "Sign Up" }),
            d("fieldset", {
              class: "form-group",
              children: [
                d("input", {
                  name: "username",
                  placeholder: "username",
                  get value() {
                    return e.username;
                  },
                  [k]: { value: S(e, "username") },
                }),
                d("input", {
                  placeholder: "email",
                  name: "email",
                  type: "email",
                  get value() {
                    return e.email;
                  },
                  [k]: { value: S(e, "email") },
                }),
                d("input", {
                  placeholder: "password",
                  name: "password",
                  type: "password",
                  get value() {
                    return e.passowrd;
                  },
                  [k]: { value: S(e, "passowrd") },
                }),
              ],
            }),
            d("button", {
              onClick$: x(() => Ln(), "s_FueC2WNvmfM"),
              children: "Sign Up",
            }),
          ],
        }),
      });
    }, "s_0vOoberVPlU")
  ),
  fu = Object.freeze(
    Object.defineProperty(
      { __proto__: null, signUp: Ln, default: du },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
let Q;
const mu = async () => {
    Q = await Vt();
  },
  gi = () => {
    li(), (window.location.href = "/");
  },
  vi = async (e) => {
    const t = e.target,
      n = {
        image: t.querySelector('[name="image"]').value,
        email: t.querySelector('[name="email"]').value,
        username: t.querySelector('[name="username"]').value,
        bio: t.querySelector('[name="bio"]').value,
        password: t.querySelector('[name="newPassword"]').value,
      };
    try {
      (await ci(n)).status === 200 && (window.location.href = "/");
    } catch (s) {
      console.error(s);
    }
    return e.preventDefault(), !1;
  },
  pu = C(
    x(
      () => (
        kn(
          "load",
          x(() => {
            document.querySelector("form").addEventListener("submit", vi);
          }, "s_6Mw9RTC0v04")
        ),
        d(A, {
          children: [
            d("div", {
              className: "contianer",
              children: [
                d("h1", { children: "Your Settings" }),
                d("form", {
                  method: "post",
                  children: d("fieldset", {
                    children: [
                      d("input", {
                        name: "image",
                        placeholder: "Image URL",
                        value: Q == null ? void 0 : Q.image,
                      }),
                      d("input", {
                        name: "username",
                        placeholder: "username",
                        value: Q == null ? void 0 : Q.username,
                      }),
                      d("input", {
                        name: "email",
                        type: "email",
                        placeholder: "email",
                        value: Q == null ? void 0 : Q.email,
                      }),
                      d("textarea", {
                        name: "bio",
                        placeholder: "Short BIO about you",
                        rows: 8,
                        children: Q == null ? void 0 : Q.bio,
                      }),
                      d("input", {
                        name: "newPassword",
                        placeholder: "New password",
                        type: "password",
                      }),
                      d("button", { children: "Update settings" }),
                    ],
                  }),
                }),
              ],
            }),
            d("hr", {}),
            d("div", {
              children: d("button", {
                class: "btn btn-outline-danger",
                onClick$: x(() => gi(), "s_w8hpn36lq0M"),
                children: "Or click here to log out",
              }),
            }),
          ],
        })
      ),
      "s_HpTGPGghm0M"
    )
  ),
  hu = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        get user() {
          return Q;
        },
        onGet: mu,
        doLogOut: gi,
        submitUserData: vi,
        default: pu,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  yi = (e) => {
    const t = e.target,
      n = {
        email: t.querySelector("[name='email']").value,
        password: t.querySelector("[name='password']").value,
      };
    return (
      Promise.resolve()
        .then(() => Wl)
        .then((s) => s.login(n))
        .then(() => {
          window.location.href = "/";
        }),
      e.preventDefault(),
      !1
    );
  },
  $u = C(
    x(
      () => (
        ds(
          x(() => {
            setTimeout(() => {
              document.querySelector("form").addEventListener("submit", yi);
            });
          }, "s_s4xG6uSrEg4")
        ),
        d(A, {
          children: d("div", {
            class: "container",
            children: [
              d("h1", { children: "Sign in" }),
              d("form", {
                children: [
                  d("fieldset", {
                    children: [
                      d("input", { placeholder: "email", name: "email" }),
                      d("input", {
                        placeholder: "password",
                        type: "password",
                        name: "password",
                      }),
                    ],
                  }),
                  d("button", { children: "Sign in" }),
                ],
              }),
            ],
          }),
        })
      ),
      "s_NhvqLaQNKg4"
    )
  ),
  gu = Object.freeze(
    Object.defineProperty(
      { __proto__: null, submitUserData: yi, default: $u },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  vu = !0,
  yu = !1,
  bu = Ue("qc-c"),
  bi = Ue("qc-ic"),
  _i = Ue("qc-h"),
  wi = Ue("qc-l"),
  qi = Ue("qc-n"),
  _u = C(
    x(() => {
      const { contents: e } = Ft(bi);
      if (e && e.length > 0) {
        const t = e.length;
        let n = null;
        for (let s = t - 1; s >= 0; s--) n = d(e[s].default, { children: n });
        return n;
      }
      return Xn;
    }, "RouterOutlet_component_nd8yk3KO22c")
  ),
  Tr = new WeakMap(),
  wu = async (e, t, n, s) => {
    if (Array.isArray(e))
      for (const r of e) {
        const o = r[0].exec(s);
        if (o) {
          const i = r[1],
            c = xu(r[2], o),
            a = r[4],
            l = new Array(i.length),
            u = [],
            m = qu(t, s);
          let f;
          return (
            i.forEach((h, b) => {
              Cr(h, u, (g) => (l[b] = g), n);
            }),
            Cr(m, u, (h) => (f = h == null ? void 0 : h.default), n),
            u.length > 0 && (await Promise.all(u)),
            [c, l, f, a]
          );
        }
      }
    return null;
  },
  Cr = (e, t, n, s) => {
    if (typeof e == "function") {
      const r = Tr.get(e);
      if (r) n(r);
      else {
        const o = e();
        typeof o.then == "function"
          ? t.push(
              o.then((i) => {
                s !== !1 && Tr.set(e, i), n(i);
              })
            )
          : o && n(o);
      }
    }
  },
  qu = (e, t) => {
    if (e) {
      const n = e.find(
        (s) => s[0] === t || t.startsWith(s[0] + (t.endsWith("/") ? "" : "/"))
      );
      if (n) return n[1];
    }
  },
  xu = (e, t) => {
    const n = {};
    if (e) for (let s = 0; s < e.length; s++) n[e[s]] = t ? t[s + 1] : "";
    return n;
  },
  ju = (e, t, n) => {
    const s = xi(),
      r = { data: e ? e.body : null, head: s, ...t };
    for (let o = n.length - 1; o >= 0; o--) {
      const i = n[o] && n[o].head;
      i &&
        (typeof i == "function"
          ? Ar(s, i(r))
          : typeof i == "object" && Ar(s, i));
    }
    return r.head;
  },
  Ar = (e, t) => {
    typeof t.title == "string" && (e.title = t.title),
      _n(e.meta, t.meta),
      _n(e.links, t.links),
      _n(e.styles, t.styles);
  },
  _n = (e, t) => {
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
  xi = () => ({ title: "", meta: [], links: [], styles: [] }),
  ku = () => Ft(_i),
  Jt = () => Ft(wi),
  Eu = () => Ft(qi),
  Su = () => Dt(Bo("qwikcity")),
  Rt = (e) => e.pathname + e.search + e.hash,
  Ie = (e, t) => new URL(e, t.href),
  ji = (e, t) => e.origin === t.origin,
  ki = (e, t) => e.pathname + e.search === t.pathname + t.search,
  Nu = (e, t) => e.pathname === t.pathname,
  Or = (e, t) => ji(e, t) && !ki(e, t),
  Ru = (e) => e + (e.endsWith("/") ? "" : "/") + "q-data.json",
  Tu = (e, t) => {
    const n = e.href;
    if (typeof n == "string" && n.trim() !== "" && typeof e.target != "string")
      try {
        const s = Ie(n, t),
          r = Ie("", t);
        if (ji(s, r)) return Rt(s);
      } catch (s) {
        console.error(s);
      }
    return null;
  },
  Cu = (e, t, n) => {
    if (e.prefetch && t) {
      const s = Ie(t, n);
      if (!Nu(s, Ie("", n))) return s + "";
    }
    return null;
  },
  Au = (e, t) => {
    const n = e.location,
      s = Ie(t.path, n);
    Or(n, s) && (Pr(e, n, s), e.history.pushState("", "", Rt(s))),
      e[Fr] ||
        ((e[Fr] = 1),
        e.addEventListener("popstate", () => {
          const r = e.location,
            o = Ie(t.path, r);
          Or(r, o) && (Pr(e, o, r), (t.path = Rt(r)));
        }));
  },
  Pr = async (e, t, n) => {
    const s = e.document,
      r = n.hash;
    if (ki(t, n)) t.hash !== r && (await wn(), r ? Lr(s, r) : e.scrollTo(0, 0));
    else if (r) for (let o = 0; o < 24 && (await wn(), !Lr(s, r)); o++);
    else await wn(), e.scrollTo(0, 0);
  },
  wn = () => new Promise((e) => setTimeout(e, 12)),
  Lr = (e, t) => {
    const n = t.slice(1),
      s = e.getElementById(n);
    return s && s.scrollIntoView(), s;
  },
  Ir = (e) => dispatchEvent(new CustomEvent("qprefetch", { detail: e })),
  Fr = Symbol(),
  Ei = async (e) => {
    const { cacheModules: t } = await Promise.resolve().then(() => Pi),
      n = new URL(e).pathname,
      s = Ru(n),
      r = Date.now(),
      o = t ? 6e5 : 15e3,
      i = Te.findIndex((a) => a.u === s);
    let c = Te[i];
    if ((Ir({ links: [n] }), !c || c.t + o < r)) {
      c = {
        u: s,
        t: r,
        c: new Promise((a) => {
          fetch(s).then(
            (l) => {
              const u = l.headers.get("content-type") || "";
              l.ok && u.includes("json")
                ? l.json().then(
                    (m) => {
                      Ir({ bundles: m.prefetch, links: [n] }), a(m);
                    },
                    () => a(null)
                  )
                : a(null);
            },
            () => a(null)
          );
        }),
      };
      for (let a = Te.length - 1; a >= 0; a--)
        Te[a].t + o < r && Te.splice(a, 1);
      Te.push(c);
    }
    return c.c.catch((a) => console.error(a)), c.c;
  },
  Te = [],
  Ou = C(
    x(() => {
      const e = Su();
      if (!(e != null && e.params))
        throw new Error("Missing Qwik City Env Data");
      const t = Bo("url");
      if (!t) throw new Error("Missing Qwik URL Env Data");
      const n = new URL(t),
        s = ee({
          href: n.href,
          pathname: n.pathname,
          query: Object.fromEntries(n.searchParams.entries()),
          params: e.params,
        }),
        r = ee({ path: Rt(n) }),
        o = ee(xi),
        i = ee({ headings: void 0, menu: void 0 }),
        c = ee({ contents: void 0 });
      return (
        We(bu, i),
        We(bi, c),
        We(_i, o),
        We(wi, s),
        We(qi, r),
        Ua(
          x(
            async ({ track: a }) => {
              const [l, u, m, f, h, b] = R(),
                {
                  routes: g,
                  menus: w,
                  cacheModules: p,
                } = await Promise.resolve().then(() => Pi),
                $ = a(b, "path"),
                v = new URL($, h.href),
                y = v.pathname,
                _ = wu(g, w, p, y),
                E = vu ? f.response : Ei(v.href),
                q = await _;
              if (q) {
                const [j, P, Y] = q,
                  O = P,
                  N = O[O.length - 1];
                (h.href = v.href),
                  (h.pathname = y),
                  (h.params = { ...j }),
                  (h.query = Object.fromEntries(v.searchParams.entries())),
                  (l.headings = N.headings),
                  (l.menu = Y),
                  (u.contents = Dt(O));
                const B = await E,
                  F = ju(B, h, O);
                (m.links = F.links),
                  (m.meta = F.meta),
                  (m.styles = F.styles),
                  (m.title = F.title),
                  yu && Au(window, b);
              }
            },
            "QwikCity_component_useWatch_AaAlzKH0KlQ",
            [i, c, o, e, s, r]
          )
        ),
        d($s, {})
      );
    }, "QwikCity_component_z1nvHyEppoI")
  );
x((e) => {
  const t = Eu(),
    n = Jt(),
    s = e.href,
    r = { ...e },
    o = Tu(r, n),
    i = Cu(e, o, n);
  return (
    (r["preventdefault:click"] = !!o),
    (r.href = o || s),
    d("a", {
      ...r,
      onClick$: x(
        () => {
          const [c, a, l] = R();
          c && (l.path = a.href);
        },
        "Link_component_a_onClick_hA9UPaY8sNQ",
        [o, r, t]
      ),
      "data-prefetch": i,
      onMouseOver$: x(
        (c, a) => zr(a),
        "Link_component_a_onMouseOver_skxgNVWVOT8"
      ),
      onQVisible$: x(
        (c, a) => zr(a, !0),
        "Link_component_a_onQVisible_uVE5iM9H73c"
      ),
      children: d($s, {}),
    })
  );
}, "Link_component_mYsiJcA4IBc");
const zr = (e, t) => {
  var s;
  const n = (s = e == null ? void 0 : e.dataset) == null ? void 0 : s.prefetch;
  n && (qn || (qn = window.innerWidth), (!t || (t && qn < 520)) && Ei(n));
};
let qn = 0;
const Pu =
    '((s,a,r,i)=>{r=(e,t)=>{t=document.querySelector("[q\\\\:base]"),t&&a.active&&a.active.postMessage({type:"qprefetch",base:t.getAttribute("q:base"),...e})},addEventListener("qprefetch",e=>{const t=e.detail;a?r(t):t.bundles&&s.push(...t.bundles)}),navigator.serviceWorker.register("/service-worker.js").then(e=>{i=()=>{a=e,r({bundles:s})},e.installing?e.installing.addEventListener("statechange",t=>{t.target.state=="activated"&&i()}):e.active&&i()}).catch(e=>console.error(e))})([])',
  Lu = () => d("script", { dangerouslySetInnerHTML: Pu });
const Iu = C(
  x(
    (e) =>
      d("div", {
        class: "card",
        children: [
          d("p", { children: [" ", S(e, "body")] }),
          d("div", {
            class: "card-footer",
            children: [
              d("img", {
                get src() {
                  return e.author.image;
                },
                [k]: { src: S(e.author, "image") },
              }),
              d("div", { children: S(e.author, "username") }),
              d("div", { children: di(e.updatedAt) }),
            ],
          }),
        ],
      }),
    "s_0TAq7Xle1TM"
  )
);
const Fu = C(
  x(
    (e) =>
      d("div", {
        class: "banner",
        children: d("div", {
          class: "container",
          children: [
            d("h1", { children: S(e.article, "title") }),
            d(Rs, {
              get article() {
                return e.article;
              },
              showFavoriteText: !0,
              showFollowUser: !0,
              get authenticated() {
                return e.authenticated;
              },
              [k]: {
                article: S(e, "article"),
                showFavoriteText: !0,
                showFollowUser: !0,
                authenticated: S(e, "authenticated"),
              },
            }),
          ],
        }),
      }),
    "s_70ZY5hLcK6E"
  )
);
const zu = (e, t) => {
    const n = e.target;
    e.preventDefault();
    const s = n.querySelector('[name="comment"]').value;
    return t(s), !1;
  },
  Mu = C(
    x((e) => {
      const { user: t, postComment: n } = e;
      return (
        ds(
          x(
            () => {
              var r;
              const [s] = R();
              (r = document.querySelector("form")) == null ||
                r.addEventListener("submit", (o) => zu(o, s));
            },
            "s_hX7lMFYx0tY",
            [n]
          )
        ),
        d("div", {
          class: "card comment-form",
          children: d("form", {
            children: [
              d("div", {
                children: d("textarea", {
                  name: "comment",
                  placeholder: "Your comment",
                }),
              }),
              d("div", {
                class: "card-footer",
                children: [
                  d("div", {
                    class: "author",
                    children: [
                      d("div", {
                        children: d("img", {
                          get src() {
                            return t.image;
                          },
                          [k]: { src: S(t, "image") },
                        }),
                      }),
                      d("div", {
                        children: d("span", { children: S(t, "username") }),
                      }),
                    ],
                  }),
                  d("button", { type: "submit", children: "Post comment" }),
                ],
              }),
            ],
          }),
        })
      );
    }, "s_2ShPURnoq9c")
  );
let Cs;
const Uu = async () => {
    Cs = await Vt();
  },
  Si = x((e, t) => {
    H.post(
      `${K}articles/${e.name}/comments`,
      { comment: { body: t } },
      { headers: { authorization: W() } }
    ).then(() => {
      e.commentChanged = !0;
    });
  }, "s_W51ngDLuKDM"),
  Du = C(
    x(() => {
      const e = Jt(),
        t = ee({ name: e.params.articleName, commentChanged: !1 }),
        n = !!W(),
        s = xe(
          x(
            async ({ track: r, cleanup: o }) => {
              const [i] = R();
              r(() => i.name), r(() => i.commentChanged);
              const c = new AbortController();
              o(() => c.abort());
              const l = await (
                await H.get(`${K}/articles/${i.name}`)
              ).data.article;
              l.author.imageUrl = l.author.image;
              const u = await H.get(`${K}articles/${i.name}/comments`, {
                headers: { authorization: W() },
              });
              return (
                (l.comments = u.data.comments.map((m) => ({
                  ...m,
                  author: { ...m.author, imageUrl: m.author.image },
                }))),
                l
              );
            },
            "s_qNQKMPyXq0Y",
            [t]
          )
        );
      return d(A, {
        children: d(je, {
          value: s,
          onResolved: (r) =>
            d("div", {
              children: [
                d(Fu, { article: r, authenticated: n }),
                d("div", {
                  class: "container",
                  children: [
                    d(Ts, {
                      get tagsList() {
                        return r.tagList;
                      },
                      [k]: { tagsList: S(r, "tagList") },
                    }),
                    d("div", {
                      class: "meta-container",
                      children: d(Rs, {
                        article: r,
                        showFavoriteText: !0,
                        authenticated: n,
                        [k]: { showFavoriteText: !0 },
                      }),
                    }),
                    n
                      ? d(Mu, {
                          user: Cs,
                          postComment: x(
                            (o) => {
                              const [i] = R();
                              return Si(i, o);
                            },
                            "s_xiOONLugCh0",
                            [t]
                          ),
                          [k]: { user: !0 },
                        })
                      : d(A, {
                          children: [
                            d("a", { href: "/signin", children: "Sign in" }),
                            " or",
                            " ",
                            d("a", { href: "/register", children: "Sign up" }),
                            " to add comments on this article.",
                          ],
                        }),
                    r.comments.map((o) => d(Iu, { ...o })),
                  ],
                }),
              ],
            }),
          [k]: { value: !0, onResolved: !0 },
        }),
      });
    }, "s_Pud0ekR52iE")
  ),
  Hu = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        get currentUser() {
          return Cs;
        },
        onGet: Uu,
        postComment: Si,
        default: Du,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  In = async (e, t) => {
    const s = `${K}articles?${e === "Authored" ? "author" : "favorited"}=${t}`;
    return (await H.get(s, { headers: { authorization: W() } })).data.articles;
  },
  Ni = (e, t) => {
    t.activeTab = e;
  },
  Ri = async (e) => {
    const t = `${K}profiles/${e}`;
    return (await H.get(t, { headers: { authorization: W() } })).data.profile;
  },
  Ku = C(
    x(() => {
      const e = Jt(),
        t = [
          { label: "Your Posts", type: "Authored" },
          { label: "Favorited posts", type: "Favorited" },
        ],
        n = ee({
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
        s = xe(
          x(
            ({ cleanup: a }) => {
              const [l] = R(),
                u = new AbortController();
              return a(() => u.abort()), In("Authored", l.profileName);
            },
            "s_10fvbveklNw",
            [n]
          )
        ),
        r = xe(
          x(
            ({ cleanup: a }) => {
              const [l] = R(),
                u = new AbortController();
              return a(() => u.abort()), In("Favorited", l.profileName);
            },
            "s_CO0xLhBmays",
            [n]
          )
        ),
        o = xe(
          x(
            () => {
              const [a] = R();
              return Ri(a.profileName);
            },
            "s_SiWhVz35RGQ",
            [n]
          )
        ),
        i = !!W(),
        c = x(
          (a) => {
            const [l] = R();
            l.followingMainUser = a;
          },
          "s_PDJwMEdiP0k",
          [n]
        );
      return d("div", {
        class: "my-app p-20",
        children: [
          d("div", {
            class: "banner",
            children: d(je, {
              value: o,
              onPending: () => d(A, { children: "Wait..." }),
              onResolved: (a) =>
                d(A, {
                  children: [
                    d("h1", {
                      children: d("img", {
                        get src() {
                          return a.image;
                        },
                        [k]: { src: S(a, "image") },
                      }),
                    }),
                    d("p", { children: S(a, "username") }),
                    d(fi, {
                      user: a,
                      followingChanged: c,
                      get following() {
                        return a.following;
                      },
                      [k]: { following: S(a, "following") },
                    }),
                  ],
                }),
              [k]: { value: !0, onPending: !0, onResolved: !0 },
            }),
          }),
          d("div", {
            class: "container",
            children: [
              d("div", {
                children: d(ui, {
                  tabs: n.tabs.map((a) => a.label),
                  navigationChange$: x(
                    (a) => {
                      const [l, u] = R();
                      return Ni(
                        u.find((m) => m.label === a),
                        l
                      );
                    },
                    "s_aIH10didwZo",
                    [n, t]
                  ),
                  get activeTab() {
                    return n.activeTab;
                  },
                  [k]: { navigationChange$: !0, activeTab: S(n, "activeTab") },
                }),
              }),
              d(je, {
                value: r,
                onResolved: (a) =>
                  d("div", {
                    style: {
                      display:
                        n.activeTab.type === "Favorited" ? "block" : "none",
                    },
                    children: d(Nt, { articles: a, authenticated: i }),
                  }),
                [k]: { value: !0, onResolved: !0 },
              }),
              d(je, {
                value: s,
                onResolved: (a) =>
                  d("div", {
                    style: {
                      display:
                        n.activeTab.type === "Authored" ? "block" : "none",
                    },
                    children: d(Nt, { articles: a, authenticated: i }),
                  }),
                [k]: { value: !0, onResolved: !0 },
              }),
            ],
          }),
        ],
      });
    }, "s_0m8fTfCbNw0")
  ),
  Wu = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        getArticles: In,
        onFeedNavigationChange: Ni,
        getProfile: Ri,
        default: Ku,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  _e = () => Jl,
  Ti = [
    [/^\/$/, [_e, () => cu], void 0, "/", ["q-b4e4d7d0.js", "q-cc5351c0.js"]],
    [
      /^\/editor\/?$/,
      [_e, () => uu],
      void 0,
      "/editor",
      ["q-b4e4d7d0.js", "q-a9cd0d6e.js"],
    ],
    [
      /^\/register\/?$/,
      [_e, () => fu],
      void 0,
      "/register",
      ["q-b4e4d7d0.js", "q-8aed06a8.js"],
    ],
    [
      /^\/settings\/?$/,
      [_e, () => hu],
      void 0,
      "/settings",
      ["q-b4e4d7d0.js", "q-6ae84146.js"],
    ],
    [
      /^\/signin\/?$/,
      [_e, () => gu],
      void 0,
      "/signin",
      ["q-b4e4d7d0.js", "q-ca39ad18.js"],
    ],
    [
      /^\/article\/([^/]+?)\/?$/,
      [_e, () => Hu],
      ["articleName"],
      "/article/[articleName]",
      ["q-b4e4d7d0.js", "q-97fe834c.js"],
    ],
    [
      /^\/profile\/([^/]+?)\/?$/,
      [_e, () => Wu],
      ["profileName"],
      "/profile/[profileName]",
      ["q-b4e4d7d0.js", "q-28ce4bce.js"],
    ],
  ],
  Ci = [],
  Fn = !1,
  Ai = "/",
  Oi = !0,
  Pi = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        routes: Ti,
        menus: Ci,
        trailingSlash: Fn,
        basePathname: Ai,
        cacheModules: Oi,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
var Z = Symbol("headers"),
  Mr,
  Bu = class {
    constructor() {
      this[Mr] = {};
    }
    [((Mr = Z), Symbol.iterator)]() {
      return this.entries();
    }
    *keys() {
      for (const e of Object.keys(this[Z])) yield e;
    }
    *values() {
      for (const e of Object.values(this[Z])) yield e;
    }
    *entries() {
      for (const e of Object.keys(this[Z])) yield [e, this.get(e)];
    }
    get(e) {
      return this[Z][Ve(e)] || null;
    }
    set(e, t) {
      const n = Ve(e);
      this[Z][n] = typeof t != "string" ? String(t) : t;
    }
    append(e, t) {
      const n = Ve(e),
        s = this.has(n) ? `${this.get(n)}, ${t}` : t;
      this.set(e, s);
    }
    delete(e) {
      if (!this.has(e)) return;
      const t = Ve(e);
      delete this[Z][t];
    }
    all() {
      return this[Z];
    }
    has(e) {
      return this[Z].hasOwnProperty(Ve(e));
    }
    forEach(e, t) {
      for (const n in this[Z])
        this[Z].hasOwnProperty(n) && e.call(t, this[Z][n], n, this);
    }
  },
  Qu = /[^a-z0-9\-#$%&'*+.^_`|~]/i;
function Ve(e) {
  if ((typeof e != "string" && (e = String(e)), Qu.test(e) || e.trim() === ""))
    throw new TypeError("Invalid character in header field name");
  return e.toLowerCase();
}
function Yt() {
  return new (typeof Headers == "function" ? Headers : Bu)();
}
var Ze = class extends Error {
  constructor(e, t) {
    super(t), (this.status = e);
  }
};
function Vu(e) {
  return Li(e, new Ze(404, "Not Found"));
}
function Ju(e, t) {
  let s = "Server Error",
    r;
  t != null &&
    (typeof t == "object"
      ? (typeof t.message == "string" && (s = t.message),
        t.stack != null && (r = String(t.stack)))
      : (s = String(t)));
  const o = Ii(500, s, r),
    i = Yt();
  return (
    i.set("Content-Type", "text/html; charset=utf-8"),
    e.response(
      500,
      i,
      async (c) => {
        c.write(o);
      },
      t
    )
  );
}
function Li(e, t) {
  const n = Ii(t.status, t.message, t.stack),
    s = Yt();
  return (
    s.set("Content-Type", "text/html; charset=utf-8"),
    e.response(
      t.status,
      s,
      async (r) => {
        r.write(n);
      },
      t
    )
  );
}
function Ii(e, t, n) {
  const s = typeof t == "string" ? "600px" : "300px",
    r = e >= 500 ? Gu : Yu;
  return (
    e < 500 && (n = ""),
    `<!DOCTYPE html>
<html data-qwik-city-status="${e}">
<head>
  <meta charset="utf-8">
  <title>${e} ${t}</title>
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <style>
    body { color: ${r}; background-color: #fafafa; padding: 30px; font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Roboto, sans-serif; }
    p { max-width: ${s}; margin: 60px auto 30px auto; background: white; border-radius: 4px; box-shadow: 0px 0px 50px -20px ${r}; overflow: hidden; }
    strong { display: inline-block; padding: 15px; background: ${r}; color: white; }
    span { display: inline-block; padding: 15px; }
    pre { max-width: 580px; margin: 0 auto; }
  </style>
</head>
<body>
  <p>
    <strong>${e}</strong>
    <span>${t}</span>
  </p>
  ${n ? `<pre><code>${n}</code></pre>` : ""}
</body>
</html>
`
  );
}
var Yu = "#006ce9",
  Gu = "#713fc2",
  Ur = new WeakMap(),
  Xu = async (e, t, n, s) => {
    if (Array.isArray(e))
      for (const r of e) {
        const o = r[0].exec(s);
        if (o) {
          const i = r[1],
            c = ed(r[2], o),
            a = r[4],
            l = new Array(i.length),
            u = [],
            m = Zu(t, s);
          let f;
          return (
            i.forEach((h, b) => {
              Dr(h, u, (g) => (l[b] = g), n);
            }),
            Dr(m, u, (h) => (f = h == null ? void 0 : h.default), n),
            u.length > 0 && (await Promise.all(u)),
            [c, l, f, a]
          );
        }
      }
    return null;
  },
  Dr = (e, t, n, s) => {
    if (typeof e == "function") {
      const r = Ur.get(e);
      if (r) n(r);
      else {
        const o = e();
        typeof o.then == "function"
          ? t.push(
              o.then((i) => {
                s !== !1 && Ur.set(e, i), n(i);
              })
            )
          : o && n(o);
      }
    }
  },
  Zu = (e, t) => {
    if (e) {
      const n = e.find(
        (s) => s[0] === t || t.startsWith(s[0] + (t.endsWith("/") ? "" : "/"))
      );
      if (n) return n[1];
    }
  },
  ed = (e, t) => {
    const n = {};
    if (e) for (let s = 0; s < e.length; s++) n[e[s]] = t ? t[s + 1] : "";
    return n;
  },
  Ye = class {
    constructor(e, t, n) {
      (this.url = e),
        (this.location = e),
        (this.status = Fi(t) ? t : 307),
        (this.headers = n || Yt()),
        this.headers.set("Location", this.location),
        this.headers.delete("Cache-Control");
    }
  };
function td(e, t) {
  return e.response(t.status, t.headers, async () => {});
}
function Fi(e) {
  return typeof e == "number" && e >= 301 && e <= 308;
}
async function nd(e, t, n, s, r, o = "/") {
  if (n.length === 0) throw new Ze(404, "Not Found");
  const { request: i, url: c } = e,
    { pathname: a } = c,
    l = sd(n),
    u = l && i.headers.get("Accept") === "application/json",
    m = u ? "pagedata" : l ? "pagehtml" : "endpoint",
    f = {
      type: m,
      url: c,
      params: t,
      status: 200,
      headers: Yt(),
      resolvedBody: void 0,
      pendingBody: void 0,
      aborted: !1,
    };
  let h = !1;
  if (l && a !== o) {
    if (r) {
      if (!a.endsWith("/")) throw new Ye(a + "/" + c.search, 307);
    } else if (a.endsWith("/"))
      throw new Ye(a.slice(0, a.length - 1) + c.search, 307);
  }
  let b = -1;
  const g = () => {
      b = Kr;
    },
    w = (v, y) => new Ye(v, y, f.headers),
    p = (v, y) => new Ze(v, y),
    $ = async () => {
      for (b++; b < n.length; ) {
        const v = n[b];
        let y;
        switch (i.method) {
          case "GET": {
            y = v.onGet;
            break;
          }
          case "POST": {
            y = v.onPost;
            break;
          }
          case "PUT": {
            y = v.onPut;
            break;
          }
          case "PATCH": {
            y = v.onPatch;
            break;
          }
          case "OPTIONS": {
            y = v.onOptions;
            break;
          }
          case "HEAD": {
            y = v.onHead;
            break;
          }
          case "DELETE": {
            y = v.onDelete;
            break;
          }
        }
        if (((y = y || v.onRequest), typeof y == "function")) {
          h = !0;
          const _ = {
              get status() {
                return f.status;
              },
              set status(j) {
                f.status = j;
              },
              get headers() {
                return f.headers;
              },
              redirect: w,
              error: p,
            },
            E = {
              request: i,
              url: new URL(c),
              params: { ...t },
              response: _,
              platform: s,
              next: $,
              abort: g,
            },
            q = y(E);
          if (typeof q == "function") f.pendingBody = Hr(q);
          else if (
            q !== null &&
            typeof q == "object" &&
            typeof q.then == "function"
          ) {
            const j = await q;
            typeof j == "function"
              ? (f.pendingBody = Hr(j))
              : (f.resolvedBody = j);
          } else f.resolvedBody = q;
        }
        b++;
      }
    };
  if (
    (await $(),
    (f.aborted = b >= Kr),
    !u && Fi(f.status) && f.headers.has("Location"))
  )
    throw new Ye(f.headers.get("Location"), f.status, f.headers);
  if (m === "endpoint" && !h) throw new Ze(405, "Method Not Allowed");
  return f;
}
function Hr(e) {
  return new Promise((t, n) => {
    try {
      const s = e();
      s !== null && typeof s == "object" && typeof s.then == "function"
        ? s.then(t, n)
        : t(s);
    } catch (s) {
      n(s);
    }
  });
}
function sd(e) {
  const t = e[e.length - 1];
  return t && typeof t.default == "function";
}
function rd(e, t) {
  let n = e.url.pathname;
  if (n.endsWith(zi)) {
    e.request.headers.set("Accept", "application/json");
    const s = n.length - od + (t ? 1 : 0);
    (n = n.slice(0, s)), n === "" && (n = "/"), (e.url.pathname = n);
  }
}
var zi = "/q-data.json",
  od = zi.length,
  Kr = 999999999;
function id(e, t) {
  const { pendingBody: n, resolvedBody: s, status: r, headers: o } = t,
    { response: i } = e;
  if (n === void 0 && s === void 0) return i(r, o, ad);
  o.has("Content-Type") ||
    o.set("Content-Type", "application/json; charset=utf-8");
  const c = o.get("Content-Type").includes("json");
  return i(r, o, async ({ write: a }) => {
    const l = n !== void 0 ? await n : s;
    if (l !== void 0)
      if (c) a(JSON.stringify(l));
      else {
        const u = typeof l;
        a(
          u === "string" ? l : u === "number" || u === "boolean" ? String(l) : l
        );
      }
  });
}
var ad = async () => {};
function cd(e, t, n, s, r) {
  const { status: o, headers: i } = t,
    { response: c } = e,
    a = t.type === "pagedata";
  return (
    a
      ? i.set("Content-Type", "application/json; charset=utf-8")
      : i.has("Content-Type") ||
        i.set("Content-Type", "text/html; charset=utf-8"),
    c(a ? 200 : o, i, async (l) => {
      const u = await n({ stream: a ? dd : l, envData: ud(t), ...s });
      a
        ? l.write(JSON.stringify(await Wr(t, u, r)))
        : (typeof u).html === "string" && l.write(u.html),
        typeof l.clientData == "function" && l.clientData(await Wr(t, u, r));
    })
  );
}
async function Wr(e, t, n) {
  const s = ld(t, n);
  return {
    body: e.pendingBody ? await e.pendingBody : e.resolvedBody,
    status: e.status !== 200 ? e.status : void 0,
    redirect:
      (e.status >= 301 && e.status <= 308 && e.headers.get("location")) ||
      void 0,
    prefetch: s.length > 0 ? s : void 0,
  };
}
function ld(e, t) {
  const n = [],
    s = (c) => {
      c && !n.includes(c) && n.push(c);
    },
    r = (c) => {
      if (Array.isArray(c))
        for (const a of c) {
          const l = a.url.split("/").pop();
          l && !n.includes(l) && (s(l), r(a.imports));
        }
    };
  r(e.prefetchResources);
  const o = e.manifest || e._manifest,
    i = e._symbols;
  if (o && i)
    for (const c of i) {
      const a = o.symbols[c];
      a && a.ctxName === "component$" && s(o.mapping[c]);
    }
  if (t) for (const c of t) s(c);
  return n;
}
function ud(e) {
  const { url: t, params: n, pendingBody: s, resolvedBody: r, status: o } = e;
  return {
    url: t.href,
    qwikcity: { params: { ...n }, response: { body: s || r, status: o } },
  };
}
var dd = { write: () => {} };
async function Br(e, t, n, s) {
  try {
    rd(e, Fn);
    const r = await Xu(Ti, Ci, Oi, e.url.pathname);
    if (r) {
      const [o, i, c, a] = r,
        l = await nd(e, o, i, n, Fn, Ai);
      return l.aborted
        ? null
        : l.type === "endpoint"
        ? id(e, l)
        : cd(e, l, t, s, a);
    }
  } catch (r) {
    return r instanceof Ye ? td(e, r) : r instanceof Ze ? Li(e, r) : Ju(e, r);
  }
  return null;
}
function fd(e, t) {
  async function n(s, { next: r }) {
    try {
      const o = {
          url: new URL(s.url),
          request: s,
          response: (a, l, u) =>
            new Promise((m) => {
              let f = !1;
              const { readable: h, writable: b } = new TransformStream(),
                g = b.getWriter(),
                w = new Response(h, { status: a, headers: l });
              u({
                write: (p) => {
                  if ((f || ((f = !0), m(w)), typeof p == "string")) {
                    const $ = new TextEncoder();
                    g.write($.encode(p));
                  } else g.write(p);
                },
              }).finally(() => {
                f || ((f = !0), m(w)), g.close();
              });
            }),
        },
        i = await Br(o, e, {}, t);
      if (i) return i;
      const c = await r();
      if (c.status === 404) {
        const a = await Br(o, e, {}, t);
        return a || (await Vu(o));
      }
      return c;
    } catch (o) {
      return new Response(String(o || "Error"), {
        status: 500,
        headers: { "Content-Type": "text/plain; charset=utf-8" },
      });
    }
  }
  return n;
}
/**
 * @license
 * @builder.io/qwik/server 0.10.0
 * Copyright Builder.io, Inc. All Rights Reserved.
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/BuilderIO/qwik/blob/main/LICENSE
 */ if (typeof global > "u") {
  const e =
    typeof globalThis < "u"
      ? globalThis
      : typeof window < "u"
      ? window
      : typeof self < "u"
      ? self
      : {};
  e.global = e;
}
var md = ((e) =>
  typeof require < "u"
    ? require
    : typeof Proxy < "u"
    ? new Proxy(e, { get: (t, n) => (typeof require < "u" ? require : t)[n] })
    : e)(function (e) {
  if (typeof require < "u") return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + e + '" is not supported');
});
function xn() {
  if (typeof performance > "u") return () => 0;
  const e = performance.now();
  return () => (performance.now() - e) / 1e6;
}
function Mi(e) {
  let t = e.base;
  return typeof t == "string" ? (t.endsWith("/") || (t += "/"), t) : "/build/";
}
function pd(e, t) {
  const n = t == null ? void 0 : t.mapper,
    s = e.symbolMapper
      ? e.symbolMapper
      : (o) => {
          if (n) {
            const i = Ui(o),
              c = n[i];
            return c || console.error("Cannot resolve symbol", o, "in", n), c;
          }
        };
  return {
    isServer: !0,
    async importSymbol(o, i, c) {
      let a = String(i);
      a.endsWith(".js") || (a += ".js");
      const l = md(a);
      if (!(c in l))
        throw new Error(`Q-ERROR: missing symbol '${c}' in module '${a}'.`);
      return l[c];
    },
    raf: () => (console.error("server can not rerender"), Promise.resolve()),
    nextTick: (o) =>
      new Promise((i) => {
        setTimeout(() => {
          i(o());
        });
      }),
    chunkForSymbol(o) {
      return s(o, n);
    },
  };
}
async function hd(e, t) {
  const n = pd(e, t);
  Vi(n);
}
var Ui = (e) => {
    const t = e.lastIndexOf("_");
    return t > -1 ? e.slice(t + 1) : e;
  },
  $d =
    '((e,t)=>{const n="__q_context__",o=window,a=new Set,i=t=>e.querySelectorAll(t),r=(e,t,n=t.type)=>{i("[on"+e+"\\\\:"+n+"]").forEach((o=>c(o,e,t,n)))},s=(e,t)=>new CustomEvent(e,{detail:t}),l=(t,n)=>(t=t.closest("[q\\\\:container]"),new URL(n,new URL(t.getAttribute("q:base"),e.baseURI))),c=async(t,o,a,i=a.type)=>{const r="on"+o+":"+i;t.hasAttribute("preventdefault:"+i)&&a.preventDefault();const s=t._qc_,c=null==s?void 0:s.li.filter((e=>e[0]===r));if(c&&c.length>0){for(const e of c)await e[1].getFn([t,a],(()=>t.isConnected))(a,t);return}const u=t.getAttribute(r);if(u)for(const o of u.split("\\n")){const i=l(t,o),r=d(i),s=performance.now(),c=b(await import(i.href.split("#")[0]))[r],u=e[n];if(t.isConnected)try{e[n]=[t,a,i],f("qsymbol",{symbol:r,element:t,reqTime:s}),await c(a,t)}finally{e[n]=u}}},f=(t,n)=>{e.dispatchEvent(s(t,n))},b=e=>Object.values(e).find(u)||e,u=e=>"object"==typeof e&&e&&"Module"===e[Symbol.toStringTag],d=e=>e.hash.replace(/^#?([^?[|]*).*$/,"$1")||"default",p=e=>e.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())),v=async e=>{let t=p(e.type),n=e.target;for(r("-document",e,t);n&&n.getAttribute;)await c(n,"",e,t),n=e.bubbles&&!0!==e.cancelBubble?n.parentElement:null},w=e=>{r("-window",e,p(e.type))},y=()=>{var n;const r=e.readyState;if(!t&&("interactive"==r||"complete"==r)&&(t=1,f("qinit"),(null!=(n=o.requestIdleCallback)?n:o.setTimeout).bind(o)((()=>f("qidle"))),a.has("qvisible"))){const e=i("[on\\\\:qvisible]"),t=new IntersectionObserver((e=>{for(const n of e)n.isIntersecting&&(t.unobserve(n.target),c(n.target,"",s("qvisible",n)))}));e.forEach((e=>t.observe(e)))}},q=(e,t,n,o=!1)=>e.addEventListener(t,n,{capture:o}),g=t=>{for(const n of t)a.has(n)||(q(e,n,v,!0),q(o,n,w),a.add(n))};if(!e.qR){const t=o.qwikevents;Array.isArray(t)&&g(t),o.qwikevents={push:(...e)=>g(e)},q(e,"readystatechange",y),y()}})(document);',
  gd = `(() => {
    ((doc, hasInitialized) => {
        const win = window;
        const events =  new Set;
        const querySelectorAll = query => doc.querySelectorAll(query);
        const broadcast = (infix, ev, type = ev.type) => {
            querySelectorAll("[on" + infix + "\\\\:" + type + "]").forEach((target => dispatch(target, infix, ev, type)));
        };
        const createEvent = (eventName, detail) => new CustomEvent(eventName, {
            detail: detail
        });
        const qrlResolver = (element, qrl) => {
            element = element.closest("[q\\\\:container]");
            return new URL(qrl, new URL(element.getAttribute("q:base"), doc.baseURI));
        };
        const dispatch = async (element, onPrefix, ev, eventName = ev.type) => {
            const attrName = "on" + onPrefix + ":" + eventName;
            element.hasAttribute("preventdefault:" + eventName) && ev.preventDefault();
            const ctx = element._qc_;
            const qrls = null == ctx ? void 0 : ctx.li.filter((li => li[0] === attrName));
            if (qrls && qrls.length > 0) {
                for (const q of qrls) {
                    await q[1].getFn([ element, ev ], (() => element.isConnected))(ev, element);
                }
                return;
            }
            const attrValue = element.getAttribute(attrName);
            if (attrValue) {
                for (const qrl of attrValue.split("\\n")) {
                    const url = qrlResolver(element, qrl);
                    const symbolName = getSymbolName(url);
                    const reqTime = performance.now();
                    const handler = findModule(await import(url.href.split("#")[0]))[symbolName];
                    const previousCtx = doc.__q_context__;
                    if (element.isConnected) {
                        try {
                            doc.__q_context__ = [ element, ev, url ];
                            emitEvent("qsymbol", {
                                symbol: symbolName,
                                element: element,
                                reqTime: reqTime
                            });
                            await handler(ev, element);
                        } finally {
                            doc.__q_context__ = previousCtx;
                        }
                    }
                }
            }
        };
        const emitEvent = (eventName, detail) => {
            doc.dispatchEvent(createEvent(eventName, detail));
        };
        const findModule = module => Object.values(module).find(isModule) || module;
        const isModule = module => "object" == typeof module && module && "Module" === module[Symbol.toStringTag];
        const getSymbolName = url => url.hash.replace(/^#?([^?[|]*).*$/, "$1") || "default";
        const camelToKebab = str => str.replace(/([A-Z])/g, (a => "-" + a.toLowerCase()));
        const processDocumentEvent = async ev => {
            let type = camelToKebab(ev.type);
            let element = ev.target;
            broadcast("-document", ev, type);
            while (element && element.getAttribute) {
                await dispatch(element, "", ev, type);
                element = ev.bubbles && !0 !== ev.cancelBubble ? element.parentElement : null;
            }
        };
        const processWindowEvent = ev => {
            broadcast("-window", ev, camelToKebab(ev.type));
        };
        const processReadyStateChange = () => {
            var _a;
            const readyState = doc.readyState;
            if (!hasInitialized && ("interactive" == readyState || "complete" == readyState)) {
                hasInitialized = 1;
                emitEvent("qinit");
                (null != (_a = win.requestIdleCallback) ? _a : win.setTimeout).bind(win)((() => emitEvent("qidle")));
                if (events.has("qvisible")) {
                    const results = querySelectorAll("[on\\\\:qvisible]");
                    const observer = new IntersectionObserver((entries => {
                        for (const entry of entries) {
                            if (entry.isIntersecting) {
                                observer.unobserve(entry.target);
                                dispatch(entry.target, "", createEvent("qvisible", entry));
                            }
                        }
                    }));
                    results.forEach((el => observer.observe(el)));
                }
            }
        };
        const addEventListener = (el, eventName, handler, capture = !1) => el.addEventListener(eventName, handler, {
            capture: capture
        });
        const push = eventNames => {
            for (const eventName of eventNames) {
                if (!events.has(eventName)) {
                    addEventListener(doc, eventName, processDocumentEvent, !0);
                    addEventListener(win, eventName, processWindowEvent);
                    events.add(eventName);
                }
            }
        };
        if (!doc.qR) {
            const qwikevents = win.qwikevents;
            Array.isArray(qwikevents) && push(qwikevents);
            win.qwikevents = {
                push: (...e) => push(e)
            };
            addEventListener(doc, "readystatechange", processReadyStateChange);
            processReadyStateChange();
        }
    })(document);
})();`,
  vd =
    '((e,t)=>{const n="__q_context__",o=window,a=new Set,i=t=>e.querySelectorAll(t),r=(e,t,n=t.type)=>{i("[on"+e+"\\\\:"+n+"]").forEach((o=>c(o,e,t,n)))},s=(e,t)=>new CustomEvent(e,{detail:t}),l=(t,n)=>(t=t.closest("[q\\\\:container]"),new URL(n,new URL(t.getAttribute("q:base"),e.baseURI))),c=async(t,o,a,i=a.type)=>{const r="on"+o+":"+i;t.hasAttribute("preventdefault:"+i)&&a.preventDefault();const s=t._qc_,c=null==s?void 0:s.li.filter((e=>e[0]===r));if(c&&c.length>0){for(const e of c)await e[1].getFn([t,a],(()=>t.isConnected))(a,t);return}const u=t.getAttribute(r);if(u)for(const o of u.split("\\n")){const i=l(t,o),r=d(i),s=performance.now(),c=b(await import(i.href.split("#")[0]))[r],u=e[n];if(t.isConnected)try{e[n]=[t,a,i],f("qsymbol",{symbol:r,element:t,reqTime:s}),await c(a,t)}finally{e[n]=u}}},f=(t,n)=>{e.dispatchEvent(s(t,n))},b=e=>Object.values(e).find(u)||e,u=e=>"object"==typeof e&&e&&"Module"===e[Symbol.toStringTag],d=e=>e.hash.replace(/^#?([^?[|]*).*$/,"$1")||"default",p=e=>e.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())),v=async e=>{let t=p(e.type),n=e.target;for(r("-document",e,t);n&&n.getAttribute;)await c(n,"",e,t),n=e.bubbles&&!0!==e.cancelBubble?n.parentElement:null},w=e=>{r("-window",e,p(e.type))},y=()=>{var n;const r=e.readyState;if(!t&&("interactive"==r||"complete"==r)&&(t=1,f("qinit"),(null!=(n=o.requestIdleCallback)?n:o.setTimeout).bind(o)((()=>f("qidle"))),a.has("qvisible"))){const e=i("[on\\\\:qvisible]"),t=new IntersectionObserver((e=>{for(const n of e)n.isIntersecting&&(t.unobserve(n.target),c(n.target,"",s("qvisible",n)))}));e.forEach((e=>t.observe(e)))}},q=(e,t,n,o=!1)=>e.addEventListener(t,n,{capture:o}),g=t=>{for(const n of t)a.has(n)||(q(e,n,v,!0),q(o,n,w),a.add(n))};if(!e.qR){const t=o.qwikevents;Array.isArray(t)&&g(t),o.qwikevents={push:(...e)=>g(e)},q(e,"readystatechange",y),y()}})(document);',
  yd = `(() => {
    ((doc, hasInitialized) => {
        const win = window;
        const events = new Set;
        const querySelectorAll = query => doc.querySelectorAll(query);
        const broadcast = (infix, ev, type = ev.type) => {
            querySelectorAll("[on" + infix + "\\\\:" + type + "]").forEach((target => dispatch(target, infix, ev, type)));
        };
        const createEvent = (eventName, detail) => new CustomEvent(eventName, {
            detail: detail
        });
        const qrlResolver = (element, qrl) => {
            element = element.closest("[q\\\\:container]");
            return new URL(qrl, new URL(element.getAttribute("q:base"), doc.baseURI));
        };
        const dispatch = async (element, onPrefix, ev, eventName = ev.type) => {
            const attrName = "on" + onPrefix + ":" + eventName;
            element.hasAttribute("preventdefault:" + eventName) && ev.preventDefault();
            const ctx = element._qc_;
            const qrls = null == ctx ? void 0 : ctx.li.filter((li => li[0] === attrName));
            if (qrls && qrls.length > 0) {
                for (const q of qrls) {
                    await q[1].getFn([ element, ev ], (() => element.isConnected))(ev, element);
                }
                return;
            }
            const attrValue = element.getAttribute(attrName);
            if (attrValue) {
                for (const qrl of attrValue.split("\\n")) {
                    const url = qrlResolver(element, qrl);
                    const symbolName = getSymbolName(url);
                    const reqTime = performance.now();
                    const handler = findModule(await import(url.href.split("#")[0]))[symbolName];
                    const previousCtx = doc.__q_context__;
                    if (element.isConnected) {
                        try {
                            doc.__q_context__ = [ element, ev, url ];
                            emitEvent("qsymbol", {
                                symbol: symbolName,
                                element: element,
                                reqTime: reqTime
                            });
                            await handler(ev, element);
                        } finally {
                            doc.__q_context__ = previousCtx;
                        }
                    }
                }
            }
        };
        const emitEvent = (eventName, detail) => {
            doc.dispatchEvent(createEvent(eventName, detail));
        };
        const findModule = module => Object.values(module).find(isModule) || module;
        const isModule = module => "object" == typeof module && module && "Module" === module[Symbol.toStringTag];
        const getSymbolName = url => url.hash.replace(/^#?([^?[|]*).*$/, "$1") || "default";
        const camelToKebab = str => str.replace(/([A-Z])/g, (a => "-" + a.toLowerCase()));
        const processDocumentEvent = async ev => {
            let type = camelToKebab(ev.type);
            let element = ev.target;
            broadcast("-document", ev, type);
            while (element && element.getAttribute) {
                await dispatch(element, "", ev, type);
                element = ev.bubbles && !0 !== ev.cancelBubble ? element.parentElement : null;
            }
        };
        const processWindowEvent = ev => {
            broadcast("-window", ev, camelToKebab(ev.type));
        };
        const processReadyStateChange = () => {
            var _a;
            const readyState = doc.readyState;
            if (!hasInitialized && ("interactive" == readyState || "complete" == readyState)) {
                hasInitialized = 1;
                emitEvent("qinit");
                (null != (_a = win.requestIdleCallback) ? _a : win.setTimeout).bind(win)((() => emitEvent("qidle")));
                if (events.has("qvisible")) {
                    const results = querySelectorAll("[on\\\\:qvisible]");
                    const observer = new IntersectionObserver((entries => {
                        for (const entry of entries) {
                            if (entry.isIntersecting) {
                                observer.unobserve(entry.target);
                                dispatch(entry.target, "", createEvent("qvisible", entry));
                            }
                        }
                    }));
                    results.forEach((el => observer.observe(el)));
                }
            }
        };
        const addEventListener = (el, eventName, handler, capture = !1) => el.addEventListener(eventName, handler, {
            capture: capture
        });
        const push = eventNames => {
            for (const eventName of eventNames) {
                if (!events.has(eventName)) {
                    addEventListener(doc, eventName, processDocumentEvent, !0);
                    addEventListener(win, eventName, processWindowEvent);
                    events.add(eventName);
                }
            }
        };
        if (!doc.qR) {
            const qwikevents = win.qwikevents;
            Array.isArray(qwikevents) && push(qwikevents);
            win.qwikevents = {
                push: (...e) => push(e)
            };
            addEventListener(doc, "readystatechange", processReadyStateChange);
            processReadyStateChange();
        }
    })(document);
})();`;
function bd(e = {}) {
  return Array.isArray(e.events) && e.events.length > 0
    ? (e.debug ? yd : vd).replace("window.qEvents", JSON.stringify(e.events))
    : e.debug
    ? gd
    : $d;
}
function _d(e, t, n) {
  if (!n) return [];
  const s = t.prefetchStrategy,
    r = Mi(t);
  if (s !== null) {
    if (!s || !s.symbolsToPrefetch || s.symbolsToPrefetch === "auto")
      return wd(e, n, r);
    if (typeof s.symbolsToPrefetch == "function")
      try {
        return s.symbolsToPrefetch({ manifest: n.manifest });
      } catch (o) {
        console.error("getPrefetchUrls, symbolsToPrefetch()", o);
      }
  }
  return [];
}
function wd(e, t, n) {
  const s = [],
    r = e == null ? void 0 : e.listeners,
    o = e == null ? void 0 : e.objs,
    { mapper: i, manifest: c } = t,
    a = new Set();
  if (Array.isArray(r))
    for (const l in i)
      r.some((m) => m.qrl.getHash() === l) && zn(c, a, s, n, i[l][1]);
  if (Array.isArray(o)) {
    for (const l of o)
      if (qd(l)) {
        const u = l.getHash(),
          m = i[u];
        m && zn(c, a, s, n, m[0]);
      }
  }
  return s;
}
function zn(e, t, n, s, r) {
  const o = s + r;
  if (!t.has(o)) {
    t.add(o);
    const i = e.bundles[r];
    if (i) {
      const c = { url: o, imports: [] };
      if ((n.push(c), Array.isArray(i.imports)))
        for (const a of i.imports) zn(e, t, c.imports, s, a);
    }
  }
}
var qd = (e) => typeof e == "function" && typeof e.getSymbol == "function",
  Di = globalThis.qDev === !0,
  xd = [],
  Hi = {};
Di && (Object.freeze(xd), Object.freeze(Hi), (Error.stackTraceLimit = 9999));
[
  "click",
  "dblclick",
  "contextmenu",
  "auxclick",
  "pointerdown",
  "pointerup",
  "pointermove",
  "pointerover",
  "pointerenter",
  "pointerleave",
  "pointerout",
  "pointercancel",
  "gotpointercapture",
  "lostpointercapture",
  "touchstart",
  "touchend",
  "touchmove",
  "touchcancel",
  "mousedown",
  "mouseup",
  "mousemove",
  "mouseenter",
  "mouseleave",
  "mouseover",
  "mouseout",
  "wheel",
  "gesturestart",
  "gesturechange",
  "gestureend",
  "keydown",
  "keyup",
  "keypress",
  "input",
  "change",
  "search",
  "invalid",
  "beforeinput",
  "select",
  "focusin",
  "focusout",
  "focus",
  "blur",
  "submit",
  "reset",
  "scroll",
].map((e) => `on${e.toLowerCase()}$`);
[
  "useWatch$",
  "useClientEffect$",
  "useEffect$",
  "component$",
  "useStyles$",
  "useStylesScoped$",
].map((e) => e.toLowerCase());
function jd(e) {
  if (
    e != null &&
    e.mapping != null &&
    typeof e.mapping == "object" &&
    e.symbols != null &&
    typeof e.symbols == "object" &&
    e.bundles != null &&
    typeof e.bundles == "object"
  )
    return e;
}
function Mn() {
  let r = `const w=new Worker(URL.createObjectURL(new Blob(['onmessage=(e)=>{Promise.all(e.data.map(u=>fetch(u))).finally(()=>{setTimeout(postMessage({}),9999)})}'],{type:"text/javascript"})));`;
  return (
    (r += "w.postMessage(u.map(u=>new URL(u,origin)+''));"),
    (r += "w.onmessage=()=>{w.terminate()};"),
    r
  );
}
function kd(e) {
  const t = { bundles: Gt(e).map((n) => n.split("/").pop()) };
  return `document.dispatchEvent(new CustomEvent("qprefetch",{detail:${JSON.stringify(
    t
  )}}))`;
}
function Gt(e) {
  const t = [],
    n = (s) => {
      if (Array.isArray(s))
        for (const r of s) t.includes(r.url) || (t.push(r.url), n(r.imports));
    };
  return n(e), t;
}
function Ed(e, t) {
  const n = Cd(e == null ? void 0 : e.implementation),
    s = [];
  return (
    n.prefetchEvent === "always" && Sd(s, t),
    n.linkInsert === "html-append" && Nd(s, t, n),
    n.linkInsert === "js-append"
      ? Rd(s, t, n)
      : n.workerFetchInsert === "always" && Td(s, t),
    s.length > 0 ? d(A, { children: s }) : null
  );
}
function Sd(e, t) {
  e.push(d("script", { type: "module", dangerouslySetInnerHTML: kd(t) }));
}
function Nd(e, t, n) {
  const s = Gt(t),
    r = n.linkRel || "prefetch";
  for (const o of s) {
    const i = {};
    (i.href = o),
      (i.rel = r),
      (r === "prefetch" || r === "preload") &&
        o.endsWith(".js") &&
        (i.as = "script"),
      e.push(d("link", i, void 0));
  }
}
function Rd(e, t, n) {
  const s = n.linkRel || "prefetch";
  let r = "";
  n.workerFetchInsert === "no-link-support" &&
    (r += "let supportsLinkRel = true;"),
    (r += `const u=${JSON.stringify(Gt(t))};`),
    (r += "u.map((u,i)=>{"),
    (r += "const l=document.createElement('link');"),
    (r += 'l.setAttribute("href",u);'),
    (r += `l.setAttribute("rel","${s}");`),
    n.workerFetchInsert === "no-link-support" &&
      ((r += "if(i===0){"),
      (r += "try{"),
      (r += `supportsLinkRel=l.relList.supports("${s}");`),
      (r += "}catch(e){}"),
      (r += "}")),
    (r += "document.body.appendChild(l);"),
    (r += "});"),
    n.workerFetchInsert === "no-link-support" &&
      ((r += "if(!supportsLinkRel){"), (r += Mn()), (r += "}")),
    n.workerFetchInsert === "always" && (r += Mn()),
    e.push(d("script", { type: "module", dangerouslySetInnerHTML: r }));
}
function Td(e, t) {
  let n = `const u=${JSON.stringify(Gt(t))};`;
  (n += Mn()),
    e.push(d("script", { type: "module", dangerouslySetInnerHTML: n }));
}
function Cd(e) {
  if (typeof e == "string") {
    switch (e) {
      case "link-prefetch-html":
        return (
          we(e, "linkInsert"),
          {
            linkInsert: "html-append",
            linkRel: "prefetch",
            workerFetchInsert: null,
            prefetchEvent: null,
          }
        );
      case "link-prefetch":
        return (
          we(e, "linkInsert"),
          {
            linkInsert: "js-append",
            linkRel: "prefetch",
            workerFetchInsert: "no-link-support",
            prefetchEvent: null,
          }
        );
      case "link-preload-html":
        return (
          we(e, "linkInsert"),
          {
            linkInsert: "html-append",
            linkRel: "preload",
            workerFetchInsert: null,
            prefetchEvent: null,
          }
        );
      case "link-preload":
        return (
          we(e, "linkInsert"),
          {
            linkInsert: "js-append",
            linkRel: "preload",
            workerFetchInsert: "no-link-support",
            prefetchEvent: null,
          }
        );
      case "link-modulepreload-html":
        return (
          we(e, "linkInsert"),
          {
            linkInsert: "html-append",
            linkRel: "modulepreload",
            workerFetchInsert: null,
            prefetchEvent: null,
          }
        );
      case "link-modulepreload":
        return (
          we(e, "linkInsert"),
          {
            linkInsert: "js-append",
            linkRel: "modulepreload",
            workerFetchInsert: "no-link-support",
            prefetchEvent: null,
          }
        );
    }
    return (
      we(e, "workerFetchInsert"),
      {
        linkInsert: null,
        linkRel: null,
        workerFetchInsert: "always",
        prefetchEvent: null,
      }
    );
  }
  return e && typeof e == "object" ? e : Ad;
}
var Ad = {
  linkInsert: null,
  linkRel: null,
  workerFetchInsert: null,
  prefetchEvent: "always",
};
function we(e, t) {
  console.warn(
    `The Prefetch Strategy Implementation "${e}" has been deprecated and will be removed in an upcoming release. Please update to use the "prefetchStrategy.implementation.${t}" interface.`
  );
}
var Od = "<!DOCTYPE html>";
async function Pd(e, t) {
  var P, Y, O, N, B, F;
  let n = t.stream,
    s = 0,
    r = 0,
    o = 0,
    i = 0;
  const c =
      (Y = (P = t.streaming) == null ? void 0 : P.inOrder) != null
        ? Y
        : { strategy: "auto", maximunInitialChunk: 5e4, maximunChunk: 3e4 },
    a = (O = t.containerTagName) != null ? O : "html",
    l = (N = t.containerAttributes) != null ? N : {};
  let u = "";
  const m = n,
    f = xn();
  function h() {
    u && (m.write(u), (u = ""), (s = 0), o++, o === 1 && (i = f()));
  }
  function b(z) {
    (s += z.length), (r += z.length), (u += z);
  }
  switch (c.strategy) {
    case "disabled":
      n = { write: b };
      break;
    case "direct":
      n = m;
      break;
    case "auto":
      let z = 0,
        G = !1;
      const Xt = (B = c.maximunChunk) != null ? B : 0,
        Zt = (F = c.maximunInitialChunk) != null ? F : 0;
      n = {
        write(ue) {
          ue === "<!--qkssr-f-->"
            ? G || (G = !0)
            : ue === "<!--qkssr-pu-->"
            ? z++
            : ue === "<!--qkssr-po-->"
            ? z--
            : b(ue),
            z === 0 && (G || s >= (o === 0 ? Zt : Xt)) && ((G = !1), h());
        },
      };
      break;
  }
  a === "html"
    ? n.write(Od)
    : t.qwikLoader
    ? (t.qwikLoader.include === void 0 && (t.qwikLoader.include = "never"),
      t.qwikLoader.position === void 0 && (t.qwikLoader.position = "bottom"))
    : (t.qwikLoader = { include: "never" }),
    t.manifest ||
      console.warn(
        "Missing client manifest, loading symbols in the client might 404"
      );
  const g = Mi(t),
    w = Ld(t.manifest);
  await hd(t, w);
  let p = null;
  const $ = w == null ? void 0 : w.manifest.injections,
    v = $
      ? $.map((z) => {
          var G;
          return d(z.tag, (G = z.attributes) != null ? G : Hi);
        })
      : void 0,
    y = xn(),
    _ = [];
  let E = 0,
    q = 0;
  return (
    await qc(e, {
      stream: n,
      containerTagName: a,
      containerAttributes: l,
      envData: t.envData,
      base: g,
      beforeContent: v,
      beforeClose: async (z, G) => {
        var Fs, zs, Ms;
        E = y();
        const Xt = xn();
        p = await To(z, G);
        const Zt = JSON.stringify(p.state, void 0, Di ? "  " : void 0),
          ue = [
            d("script", { type: "qwik/json", dangerouslySetInnerHTML: Id(Zt) }),
          ];
        if (t.prefetchStrategy !== null) {
          const re = _d(p, t, w);
          if (re.length > 0) {
            const Us = Ed(t.prefetchStrategy, re);
            Us && ue.push(Us);
          }
        }
        const As = !p || p.mode !== "static",
          Os =
            (zs = (Fs = t.qwikLoader) == null ? void 0 : Fs.include) != null
              ? zs
              : "auto",
          Ps = Os === "always" || (Os === "auto" && As);
        if (Ps) {
          const re = bd({
            events: (Ms = t.qwikLoader) == null ? void 0 : Ms.events,
            debug: t.debug,
          });
          ue.push(
            d("script", { id: "qwikloader", dangerouslySetInnerHTML: re })
          );
        }
        const Ls = new Set();
        p.listeners.forEach((re) => {
          Ls.add(JSON.stringify(re.eventName));
        });
        const Is = Array.from(Ls);
        if (Is.length > 0) {
          let re = `window.qwikevents.push(${Is.join(", ")})`;
          Ps || (re = `window.qwikevents||=[];${re}`),
            ue.push(d("script", { dangerouslySetInnerHTML: re }));
        }
        return Fd(_, z), (q = Xt()), d(A, { children: ue });
      },
    }),
    h(),
    {
      prefetchResources: void 0,
      snapshotResult: p,
      flushes: o,
      manifest: w == null ? void 0 : w.manifest,
      size: r,
      timing: { render: E, snapshot: q, firstFlush: i },
      _symbols: _,
    }
  );
}
function Ld(e) {
  if (!!e) {
    if ("mapper" in e) return e;
    if (((e = jd(e)), e)) {
      const t = {};
      return (
        Object.entries(e.mapping).forEach(([n, s]) => {
          t[Ui(n)] = [n, s];
        }),
        { mapper: t, manifest: e }
      );
    }
  }
}
var Id = (e) => e.replace(/<(\/?script)/g, "\\x3C$1");
function Fd(e, t) {
  var n;
  for (const s of t) {
    const r = (n = s.$componentQrl$) == null ? void 0 : n.getSymbol();
    r && !e.includes(r) && e.push(r);
  }
}
const zd = {
    symbols: {
      s_UwTikFAPo0s: {
        origin: "components/favorite-article/favorite-article.tsx",
        displayName: "FavoriteArtice__Fragment_button_onClick",
        canonicalFilename: "s_uwtikfapo0s",
        hash: "UwTikFAPo0s",
        ctxKind: "event",
        ctxName: "onClick$",
        captures: !0,
        parent: null,
      },
      s_AWJH06rg6N4: {
        origin: "components/feed-navigation/feed-navigation.tsx",
        displayName: "FeedNavigation_component_ul_li_a_onClick",
        canonicalFilename: "s_awjh06rg6n4",
        hash: "AWJH06rg6N4",
        ctxKind: "event",
        ctxName: "onClick$",
        captures: !0,
        parent: "s_v0WP50GwSBA",
      },
      s_FueC2WNvmfM: {
        origin: "routes/register/index.tsx",
        displayName: "register_component_form_div_button_onClick",
        canonicalFilename: "s_fuec2wnvmfm",
        hash: "FueC2WNvmfM",
        ctxKind: "event",
        ctxName: "onClick$",
        captures: !1,
        parent: "s_0vOoberVPlU",
      },
      s_LUCN00zgmeM: {
        origin: "components/article-tags-list/article-tags-list.tsx",
        displayName: "ArticleTagsList_component_ul_li_i_onClick",
        canonicalFilename: "s_lucn00zgmem",
        hash: "LUCN00zgmeM",
        ctxKind: "event",
        ctxName: "onClick$",
        captures: !0,
        parent: "s_7yrRCx6kKcA",
      },
      s_TMYX7PuYaHU: {
        origin: "components/tags/tags.tsx",
        displayName: "Tags_component_div_div_a_onClick",
        canonicalFilename: "s_tmyx7puyahu",
        hash: "TMYX7PuYaHU",
        ctxKind: "event",
        ctxName: "onClick$",
        captures: !0,
        parent: "s_1v06nvJV1DQ",
      },
      s_VmL1hUkjcx8: {
        origin: "components/follow-user/follow-user.tsx",
        displayName: "FollowUser_component_button_onClick_1",
        canonicalFilename: "s_vml1hukjcx8",
        hash: "VmL1hUkjcx8",
        ctxKind: "event",
        ctxName: "onClick$",
        captures: !0,
        parent: "s_OqTpRjcc6ZU",
      },
      s_hA9UPaY8sNQ: {
        origin: "../node_modules/@builder.io/qwik-city/index.qwik.mjs",
        displayName: "Link_component_a_onClick",
        canonicalFilename: "s_ha9upay8snq",
        hash: "hA9UPaY8sNQ",
        ctxKind: "event",
        ctxName: "onClick$",
        captures: !0,
        parent: "s_mYsiJcA4IBc",
      },
      s_w8hpn36lq0M: {
        origin: "routes/settings/index.tsx",
        displayName: "settings_component__Fragment_div_button_onClick",
        canonicalFilename: "s_w8hpn36lq0m",
        hash: "w8hpn36lq0M",
        ctxKind: "event",
        ctxName: "onClick$",
        captures: !1,
        parent: "s_HpTGPGghm0M",
      },
      s_z7Nq5uFhz44: {
        origin: "components/follow-user/follow-user.tsx",
        displayName: "FollowUser_component_button_onClick",
        canonicalFilename: "s_z7nq5ufhz44",
        hash: "z7Nq5uFhz44",
        ctxKind: "event",
        ctxName: "onClick$",
        captures: !0,
        parent: "s_OqTpRjcc6ZU",
      },
      s_skxgNVWVOT8: {
        origin: "../node_modules/@builder.io/qwik-city/index.qwik.mjs",
        displayName: "Link_component_a_onMouseOver",
        canonicalFilename: "s_skxgnvwvot8",
        hash: "skxgNVWVOT8",
        ctxKind: "event",
        ctxName: "onMouseOver$",
        captures: !1,
        parent: "s_mYsiJcA4IBc",
      },
      s_3oHYt18CLtU: {
        origin: "routes/editor/index.tsx",
        displayName: "editor_component_div_form_input_onKeyDown",
        canonicalFilename: "s_3ohyt18cltu",
        hash: "3oHYt18CLtU",
        ctxKind: "event",
        ctxName: "onKeyDown$",
        captures: !0,
        parent: "s_5ysWeBz40eU",
      },
      s_wO0DUje1mMQ: {
        origin: "routes/register/index.tsx",
        displayName: "register_component_form_onSubmit",
        canonicalFilename: "s_wo0duje1mmq",
        hash: "wO0DUje1mMQ",
        ctxKind: "event",
        ctxName: "onSubmit$",
        captures: !1,
        parent: "s_0vOoberVPlU",
      },
      s_80ZkdeKD3Yc: {
        origin: "routes/home/home.tsx",
        displayName:
          "Home_component_div_div_div_div_FeedNavigation_navigationChange",
        canonicalFilename: "s_80zkdekd3yc",
        hash: "80ZkdeKD3Yc",
        ctxKind: "event",
        ctxName: "navigationChange$",
        captures: !0,
        parent: "s_z2jCgFrcwVE",
      },
      s_VKoV14GbX3E: {
        origin: "routes/home/home.tsx",
        displayName:
          "Home_component_div_div_Resource_onResolved_Tags_tagSelected",
        canonicalFilename: "s_vkov14gbx3e",
        hash: "VKoV14GbX3E",
        ctxKind: "event",
        ctxName: "tagSelected$",
        captures: !0,
        parent: "s_z2jCgFrcwVE",
      },
      s_aIH10didwZo: {
        origin: "routes/profile/[profileName]/index.tsx",
        displayName:
          "_profileName__component_div_div_div_FeedNavigation_navigationChange",
        canonicalFilename: "s_aih10didwzo",
        hash: "aIH10didwZo",
        ctxKind: "event",
        ctxName: "navigationChange$",
        captures: !0,
        parent: "s_0m8fTfCbNw0",
      },
      s_m9Naobhs100: {
        origin: "routes/editor/index.tsx",
        displayName: "editor_component_div_ArticleTagsList_onDelete",
        canonicalFilename: "s_m9naobhs100",
        hash: "m9Naobhs100",
        ctxKind: "event",
        ctxName: "onDelete$",
        captures: !0,
        parent: "s_5ysWeBz40eU",
      },
      s_uVE5iM9H73c: {
        origin: "../node_modules/@builder.io/qwik-city/index.qwik.mjs",
        displayName: "Link_component_a_onQVisible",
        canonicalFilename: "s_uve5im9h73c",
        hash: "uVE5iM9H73c",
        ctxKind: "event",
        ctxName: "onQVisible$",
        captures: !1,
        parent: "s_mYsiJcA4IBc",
      },
      s_AaAlzKH0KlQ: {
        origin: "../node_modules/@builder.io/qwik-city/index.qwik.mjs",
        displayName: "QwikCity_component_useWatch",
        canonicalFilename: "s_aaalzkh0klq",
        hash: "AaAlzKH0KlQ",
        ctxKind: "function",
        ctxName: "useWatch$",
        captures: !0,
        parent: "s_z1nvHyEppoI",
      },
      s_F0ypgMWg72Q: {
        origin: "routes/editor/index.tsx",
        displayName: "editor_component_useClientEffect",
        canonicalFilename: "s_f0ypgmwg72q",
        hash: "F0ypgMWg72Q",
        ctxKind: "function",
        ctxName: "useClientEffect$",
        captures: !0,
        parent: "s_5ysWeBz40eU",
      },
      s_hX7lMFYx0tY: {
        origin: "routes/article/[articleName]/commentForm/commentForm.tsx",
        displayName: "CommentForm_component_useClientEffect",
        canonicalFilename: "s_hx7lmfyx0ty",
        hash: "hX7lMFYx0tY",
        ctxKind: "function",
        ctxName: "useClientEffect$",
        captures: !0,
        parent: "s_2ShPURnoq9c",
      },
      s_s4xG6uSrEg4: {
        origin: "routes/signin/index.tsx",
        displayName: "signin_component_useClientEffect",
        canonicalFilename: "s_s4xg6usreg4",
        hash: "s4xG6uSrEg4",
        ctxKind: "function",
        ctxName: "useClientEffect$",
        captures: !1,
        parent: "s_NhvqLaQNKg4",
      },
      s_0TAq7Xle1TM: {
        origin: "routes/article/[articleName]/comment/comment.tsx",
        displayName: "Comment_component",
        canonicalFilename: "s_0taq7xle1tm",
        hash: "0TAq7Xle1TM",
        ctxKind: "function",
        ctxName: "component$",
        captures: !1,
        parent: null,
      },
      s_0m8fTfCbNw0: {
        origin: "routes/profile/[profileName]/index.tsx",
        displayName: "_profileName__component",
        canonicalFilename: "s_0m8ftfcbnw0",
        hash: "0m8fTfCbNw0",
        ctxKind: "function",
        ctxName: "component$",
        captures: !1,
        parent: null,
      },
      s_0vOoberVPlU: {
        origin: "routes/register/index.tsx",
        displayName: "register_component",
        canonicalFilename: "s_0voobervplu",
        hash: "0vOoberVPlU",
        ctxKind: "function",
        ctxName: "component$",
        captures: !1,
        parent: null,
      },
      s_1v06nvJV1DQ: {
        origin: "components/tags/tags.tsx",
        displayName: "Tags_component",
        canonicalFilename: "s_1v06nvjv1dq",
        hash: "1v06nvJV1DQ",
        ctxKind: "function",
        ctxName: "component$",
        captures: !1,
        parent: null,
      },
      s_2ShPURnoq9c: {
        origin: "routes/article/[articleName]/commentForm/commentForm.tsx",
        displayName: "CommentForm_component",
        canonicalFilename: "s_2shpurnoq9c",
        hash: "2ShPURnoq9c",
        ctxKind: "function",
        ctxName: "component$",
        captures: !1,
        parent: null,
      },
      s_42v99d5vQ0E: {
        origin: "routes/layout.tsx",
        displayName: "Layout_component",
        canonicalFilename: "s_42v99d5vq0e",
        hash: "42v99d5vQ0E",
        ctxKind: "function",
        ctxName: "component$",
        captures: !1,
        parent: null,
      },
      s_5ysWeBz40eU: {
        origin: "routes/editor/index.tsx",
        displayName: "editor_component",
        canonicalFilename: "s_5yswebz40eu",
        hash: "5ysWeBz40eU",
        ctxKind: "function",
        ctxName: "component$",
        captures: !1,
        parent: null,
      },
      s_70ZY5hLcK6E: {
        origin:
          "routes/article/[articleName]/article-header/article-header.tsx",
        displayName: "ArticleHeader_component",
        canonicalFilename: "s_70zy5hlck6e",
        hash: "70ZY5hLcK6E",
        ctxKind: "function",
        ctxName: "component$",
        captures: !1,
        parent: null,
      },
      s_7yrRCx6kKcA: {
        origin: "components/article-tags-list/article-tags-list.tsx",
        displayName: "ArticleTagsList_component",
        canonicalFilename: "s_7yrrcx6kkca",
        hash: "7yrRCx6kKcA",
        ctxKind: "function",
        ctxName: "component$",
        captures: !1,
        parent: null,
      },
      s_GthzHEB0UDE: {
        origin: "routes/index.tsx",
        displayName: "routes_component",
        canonicalFilename: "s_gthzheb0ude",
        hash: "GthzHEB0UDE",
        ctxKind: "function",
        ctxName: "component$",
        captures: !1,
        parent: null,
      },
      s_HpTGPGghm0M: {
        origin: "routes/settings/index.tsx",
        displayName: "settings_component",
        canonicalFilename: "s_hptgpgghm0m",
        hash: "HpTGPGghm0M",
        ctxKind: "function",
        ctxName: "component$",
        captures: !1,
        parent: null,
      },
      s_N0EkpR3Hs08: {
        origin: "components/header/header.tsx",
        displayName: "Header_component",
        canonicalFilename: "s_n0ekpr3hs08",
        hash: "N0EkpR3Hs08",
        ctxKind: "function",
        ctxName: "component$",
        captures: !1,
        parent: null,
      },
      s_NhvqLaQNKg4: {
        origin: "routes/signin/index.tsx",
        displayName: "signin_component",
        canonicalFilename: "s_nhvqlaqnkg4",
        hash: "NhvqLaQNKg4",
        ctxKind: "function",
        ctxName: "component$",
        captures: !1,
        parent: null,
      },
      s_OqTpRjcc6ZU: {
        origin: "components/follow-user/follow-user.tsx",
        displayName: "FollowUser_component",
        canonicalFilename: "s_oqtprjcc6zu",
        hash: "OqTpRjcc6ZU",
        ctxKind: "function",
        ctxName: "component$",
        captures: !1,
        parent: null,
      },
      s_Pud0ekR52iE: {
        origin: "routes/article/[articleName]/index.tsx",
        displayName: "_articleName__component",
        canonicalFilename: "s_pud0ekr52ie",
        hash: "Pud0ekR52iE",
        ctxKind: "function",
        ctxName: "component$",
        captures: !1,
        parent: null,
      },
      s_mYsiJcA4IBc: {
        origin: "../node_modules/@builder.io/qwik-city/index.qwik.mjs",
        displayName: "Link_component",
        canonicalFilename: "s_mysijca4ibc",
        hash: "mYsiJcA4IBc",
        ctxKind: "function",
        ctxName: "component$",
        captures: !1,
        parent: null,
      },
      s_nd8yk3KO22c: {
        origin: "../node_modules/@builder.io/qwik-city/index.qwik.mjs",
        displayName: "RouterOutlet_component",
        canonicalFilename: "s_nd8yk3ko22c",
        hash: "nd8yk3KO22c",
        ctxKind: "function",
        ctxName: "component$",
        captures: !1,
        parent: null,
      },
      s_qnC01OTHiLo: {
        origin: "components/article/article.tsx",
        displayName: "Article_component",
        canonicalFilename: "s_qnc01othilo",
        hash: "qnC01OTHiLo",
        ctxKind: "function",
        ctxName: "component$",
        captures: !1,
        parent: null,
      },
      s_uxi74zpMnys: {
        origin: "components/RouterHead/RouterHead.tsx",
        displayName: "RouterHead_component",
        canonicalFilename: "s_uxi74zpmnys",
        hash: "uxi74zpMnys",
        ctxKind: "function",
        ctxName: "component$",
        captures: !1,
        parent: null,
      },
      s_v0WP50GwSBA: {
        origin: "components/feed-navigation/feed-navigation.tsx",
        displayName: "FeedNavigation_component",
        canonicalFilename: "s_v0wp50gwsba",
        hash: "v0WP50GwSBA",
        ctxKind: "function",
        ctxName: "component$",
        captures: !1,
        parent: null,
      },
      s_x0zYRXJwTCA: {
        origin: "components/side-menu/side-menu.tsx",
        displayName: "SideMenu_component",
        canonicalFilename: "s_x0zyrxjwtca",
        hash: "x0zYRXJwTCA",
        ctxKind: "function",
        ctxName: "component$",
        captures: !1,
        parent: null,
      },
      s_z1nvHyEppoI: {
        origin: "../node_modules/@builder.io/qwik-city/index.qwik.mjs",
        displayName: "QwikCity_component",
        canonicalFilename: "s_z1nvhyeppoi",
        hash: "z1nvHyEppoI",
        ctxKind: "function",
        ctxName: "component$",
        captures: !1,
        parent: null,
      },
      s_z2jCgFrcwVE: {
        origin: "routes/home/home.tsx",
        displayName: "Home_component",
        canonicalFilename: "s_z2jcgfrcwve",
        hash: "z2jCgFrcwVE",
        ctxKind: "function",
        ctxName: "component$",
        captures: !1,
        parent: null,
      },
      s_KG72EULq5CU: {
        origin: "routes/editor/index.tsx",
        displayName: "onTagsKeyDown",
        canonicalFilename: "s_kg72eulq5cu",
        hash: "KG72EULq5CU",
        ctxKind: "function",
        ctxName: "$",
        captures: !1,
        parent: null,
      },
      s_W51ngDLuKDM: {
        origin: "routes/article/[articleName]/index.tsx",
        displayName: "postComment",
        canonicalFilename: "s_w51ngdlukdm",
        hash: "W51ngDLuKDM",
        ctxKind: "function",
        ctxName: "$",
        captures: !1,
        parent: null,
      },
      s_zaO67WT8WTI: {
        origin: "components/articles-list/articles-list.tsx",
        displayName: "articles_list_markAsFavorite",
        canonicalFilename: "s_zao67wt8wti",
        hash: "zaO67WT8WTI",
        ctxKind: "function",
        ctxName: "$",
        captures: !0,
        parent: null,
      },
      s_10fvbveklNw: {
        origin: "routes/profile/[profileName]/index.tsx",
        displayName:
          "_profileName__component_authoredArticleResource_useResource",
        canonicalFilename: "s_10fvbveklnw",
        hash: "10fvbveklNw",
        ctxKind: "function",
        ctxName: "useResource$",
        captures: !0,
        parent: "s_0m8fTfCbNw0",
      },
      s_2h7KadHSQzE: {
        origin: "components/follow-user/follow-user.tsx",
        displayName: "FollowUser_component_changeFollowingState",
        canonicalFilename: "s_2h7kadhsqze",
        hash: "2h7KadHSQzE",
        ctxKind: "function",
        ctxName: "$",
        captures: !0,
        parent: "s_OqTpRjcc6ZU",
      },
      s_5GB43OhxwlQ: {
        origin: "routes/home/home.tsx",
        displayName: "Home_component_articlesResource_useResource",
        canonicalFilename: "s_5gb43ohxwlq",
        hash: "5GB43OhxwlQ",
        ctxKind: "function",
        ctxName: "useResource$",
        captures: !0,
        parent: "s_z2jCgFrcwVE",
      },
      s_6Mw9RTC0v04: {
        origin: "routes/settings/index.tsx",
        displayName: "settings_component_useOnDocument",
        canonicalFilename: "s_6mw9rtc0v04",
        hash: "6Mw9RTC0v04",
        ctxKind: "function",
        ctxName: "$",
        captures: !1,
        parent: "s_HpTGPGghm0M",
      },
      s_8qL0FtJ799M: {
        origin: "routes/home/home.tsx",
        displayName: "Home_component_tagsResource_useResource",
        canonicalFilename: "s_8ql0ftj799m",
        hash: "8qL0FtJ799M",
        ctxKind: "function",
        ctxName: "useResource$",
        captures: !1,
        parent: "s_z2jCgFrcwVE",
      },
      s_CO0xLhBmays: {
        origin: "routes/profile/[profileName]/index.tsx",
        displayName:
          "_profileName__component_favoritedArticlesResource_useResource",
        canonicalFilename: "s_co0xlhbmays",
        hash: "CO0xLhBmays",
        ctxKind: "function",
        ctxName: "useResource$",
        captures: !0,
        parent: "s_0m8fTfCbNw0",
      },
      s_PDJwMEdiP0k: {
        origin: "routes/profile/[profileName]/index.tsx",
        displayName: "_profileName__component_followingChanged",
        canonicalFilename: "s_pdjwmedip0k",
        hash: "PDJwMEdiP0k",
        ctxKind: "function",
        ctxName: "$",
        captures: !0,
        parent: "s_0m8fTfCbNw0",
      },
      s_SiWhVz35RGQ: {
        origin: "routes/profile/[profileName]/index.tsx",
        displayName: "_profileName__component_profileResource_useResource",
        canonicalFilename: "s_siwhvz35rgq",
        hash: "SiWhVz35RGQ",
        ctxKind: "function",
        ctxName: "useResource$",
        captures: !0,
        parent: "s_0m8fTfCbNw0",
      },
      s_bJqynq84JNE: {
        origin: "routes/home/home.tsx",
        displayName: "Home_component_articlesStateChanged",
        canonicalFilename: "s_bjqynq84jne",
        hash: "bJqynq84JNE",
        ctxKind: "function",
        ctxName: "$",
        captures: !0,
        parent: "s_z2jCgFrcwVE",
      },
      s_i3TsH9K5zHA: {
        origin: "components/follow-user/follow-user.tsx",
        displayName: "FollowUser_component_followUser",
        canonicalFilename: "s_i3tsh9k5zha",
        hash: "i3TsH9K5zHA",
        ctxKind: "function",
        ctxName: "$",
        captures: !0,
        parent: "s_OqTpRjcc6ZU",
      },
      s_qNQKMPyXq0Y: {
        origin: "routes/article/[articleName]/index.tsx",
        displayName: "_articleName__component_articleResource_useResource",
        canonicalFilename: "s_qnqkmpyxq0y",
        hash: "qNQKMPyXq0Y",
        ctxKind: "function",
        ctxName: "useResource$",
        captures: !0,
        parent: "s_Pud0ekR52iE",
      },
      s_tYlbSh0ztf8: {
        origin: "components/follow-user/follow-user.tsx",
        displayName: "FollowUser_component_unfollowUser",
        canonicalFilename: "s_tylbsh0ztf8",
        hash: "tYlbSh0ztf8",
        ctxKind: "function",
        ctxName: "$",
        captures: !0,
        parent: "s_OqTpRjcc6ZU",
      },
      s_xfr0dVJs0nA: {
        origin: "routes/home/home.tsx",
        displayName: "Home_component_personalFeedResource_useResource",
        canonicalFilename: "s_xfr0dvjs0na",
        hash: "xfr0dVJs0nA",
        ctxKind: "function",
        ctxName: "useResource$",
        captures: !0,
        parent: "s_z2jCgFrcwVE",
      },
      s_xiOONLugCh0: {
        origin: "routes/article/[articleName]/index.tsx",
        displayName:
          "_articleName__component__Fragment_Resource_onResolved_div_div_CommentForm_postComment",
        canonicalFilename: "s_xioonlugch0",
        hash: "xiOONLugCh0",
        ctxKind: "function",
        ctxName: "$",
        captures: !0,
        parent: "s_Pud0ekR52iE",
      },
    },
    mapping: {
      s_UwTikFAPo0s: "q-90504430.js",
      s_AWJH06rg6N4: "q-dddb69f9.js",
      s_FueC2WNvmfM: "q-37199b4d.js",
      s_LUCN00zgmeM: "q-ceb8566c.js",
      s_TMYX7PuYaHU: "q-a63d347f.js",
      s_VmL1hUkjcx8: "q-1c50002f.js",
      s_hA9UPaY8sNQ: "q-b2e47d5c.js",
      s_w8hpn36lq0M: "q-ad9dd6a9.js",
      s_z7Nq5uFhz44: "q-1c50002f.js",
      s_skxgNVWVOT8: "q-b2e47d5c.js",
      s_3oHYt18CLtU: "q-01cc18f9.js",
      s_wO0DUje1mMQ: "q-37199b4d.js",
      s_80ZkdeKD3Yc: "q-5e6757bd.js",
      s_VKoV14GbX3E: "q-5e6757bd.js",
      s_aIH10didwZo: "q-e5234fbe.js",
      s_m9Naobhs100: "q-01cc18f9.js",
      s_uVE5iM9H73c: "q-b2e47d5c.js",
      s_AaAlzKH0KlQ: "q-818ab859.js",
      s_F0ypgMWg72Q: "q-01cc18f9.js",
      s_hX7lMFYx0tY: "q-bc3d8e16.js",
      s_s4xG6uSrEg4: "q-2d218d28.js",
      s_0TAq7Xle1TM: "q-d0836b4f.js",
      s_0m8fTfCbNw0: "q-e5234fbe.js",
      s_0vOoberVPlU: "q-37199b4d.js",
      s_1v06nvJV1DQ: "q-a63d347f.js",
      s_2ShPURnoq9c: "q-bc3d8e16.js",
      s_42v99d5vQ0E: "q-41647278.js",
      s_5ysWeBz40eU: "q-01cc18f9.js",
      s_70ZY5hLcK6E: "q-39cef026.js",
      s_7yrRCx6kKcA: "q-ceb8566c.js",
      s_GthzHEB0UDE: "q-a22401e9.js",
      s_HpTGPGghm0M: "q-ad9dd6a9.js",
      s_N0EkpR3Hs08: "q-91664b83.js",
      s_NhvqLaQNKg4: "q-2d218d28.js",
      s_OqTpRjcc6ZU: "q-1c50002f.js",
      s_Pud0ekR52iE: "q-cdbfd2ef.js",
      s_mYsiJcA4IBc: "q-b2e47d5c.js",
      s_nd8yk3KO22c: "q-6a85b890.js",
      s_qnC01OTHiLo: "q-894afc6e.js",
      s_uxi74zpMnys: "q-4bba26b6.js",
      s_v0WP50GwSBA: "q-dddb69f9.js",
      s_x0zYRXJwTCA: "q-6032a431.js",
      s_z1nvHyEppoI: "q-818ab859.js",
      s_z2jCgFrcwVE: "q-5e6757bd.js",
      s_KG72EULq5CU: "q-e77d3a4f.js",
      s_W51ngDLuKDM: "q-e0dcd79f.js",
      s_zaO67WT8WTI: "q-7133febb.js",
      s_10fvbveklNw: "q-e5234fbe.js",
      s_2h7KadHSQzE: "q-1c50002f.js",
      s_5GB43OhxwlQ: "q-5e6757bd.js",
      s_6Mw9RTC0v04: "q-ad9dd6a9.js",
      s_8qL0FtJ799M: "q-5e6757bd.js",
      s_CO0xLhBmays: "q-e5234fbe.js",
      s_PDJwMEdiP0k: "q-e5234fbe.js",
      s_SiWhVz35RGQ: "q-e5234fbe.js",
      s_bJqynq84JNE: "q-5e6757bd.js",
      s_i3TsH9K5zHA: "q-1c50002f.js",
      s_qNQKMPyXq0Y: "q-cdbfd2ef.js",
      s_tYlbSh0ztf8: "q-1c50002f.js",
      s_xfr0dVJs0nA: "q-5e6757bd.js",
      s_xiOONLugCh0: "q-cdbfd2ef.js",
    },
    bundles: {
      "q-01cc18f9.js": {
        size: 1581,
        imports: [
          "q-0af5c25f.js",
          "q-275314fe.js",
          "q-8194f5f9.js",
          "q-a9cd0d6e.js",
        ],
        origins: [
          "src/entry_editor.js",
          "src/s_3ohyt18cltu.js",
          "src/s_5yswebz40eu.js",
          "src/s_f0ypgmwg72q.js",
          "src/s_m9naobhs100.js",
        ],
        symbols: [
          "s_3oHYt18CLtU",
          "s_5ysWeBz40eU",
          "s_F0ypgMWg72Q",
          "s_m9Naobhs100",
        ],
      },
      "q-0af5c25f.js": {
        size: 152,
        imports: ["q-275314fe.js"],
        dynamicImports: ["q-ceb8566c.js"],
        origins: [
          "src/components/article-tags-list/article-tags-list.css",
          "src/components/article-tags-list/article-tags-list.js",
        ],
      },
      "q-10fa4114.js": {
        size: 2180,
        origins: [
          "node_modules/@builder.io/qwik-city/service-worker.mjs",
          "src/routes/service-worker.js",
        ],
      },
      "q-1c50002f.js": {
        size: 1756,
        imports: ["q-275314fe.js", "q-8194f5f9.js"],
        origins: [
          "src/entry_FollowUser.js",
          "src/s_2h7kadhsqze.js",
          "src/s_i3tsh9k5zha.js",
          "src/s_oqtprjcc6zu.js",
          "src/s_tylbsh0ztf8.js",
          "src/s_vml1hukjcx8.js",
          "src/s_z7nq5ufhz44.js",
        ],
        symbols: [
          "s_2h7KadHSQzE",
          "s_i3TsH9K5zHA",
          "s_OqTpRjcc6ZU",
          "s_tYlbSh0ztf8",
          "s_VmL1hUkjcx8",
          "s_z7Nq5uFhz44",
        ],
      },
      "q-275314fe.js": {
        size: 41839,
        dynamicImports: [
          "q-4bba26b6.js",
          "q-6a85b890.js",
          "q-818ab859.js",
          "q-ab229920.js",
          "q-b2e47d5c.js",
        ],
        origins: [
          "\0vite/preload-helper",
          "node_modules/@builder.io/qwik-city/index.qwik.mjs",
          "node_modules/@builder.io/qwik/core.min.mjs",
          "src/components/RouterHead/RouterHead.js",
          "src/global.css",
          "src/root.js",
        ],
      },
      "q-28ce4bce.js": {
        size: 546,
        imports: ["q-275314fe.js", "q-8194f5f9.js"],
        dynamicImports: ["q-e5234fbe.js"],
        origins: ["src/routes/profile/[profileName]/index.js"],
      },
      "q-2d218d28.js": {
        size: 807,
        imports: ["q-275314fe.js", "q-ca39ad18.js"],
        origins: [
          "src/entry_signin.js",
          "src/s_nhvqlaqnkg4.js",
          "src/s_s4xg6usreg4.js",
        ],
        symbols: ["s_NhvqLaQNKg4", "s_s4xG6uSrEg4"],
      },
      "q-302c39cc.js": {
        size: 1533,
        imports: ["q-275314fe.js", "q-a2dbe35f.js"],
        dynamicImports: ["q-90504430.js"],
        origins: [
          "src/common/date-utils.js",
          "src/components/favorite-article/favorite-article.css",
          "src/components/favorite-article/favorite-article.js",
          "src/routes/article/[articleName]/article-meta/article-meta.css",
          "src/routes/article/[articleName]/article-meta/article-meta.js",
        ],
      },
      "q-37199b4d.js": {
        size: 1126,
        imports: ["q-275314fe.js", "q-8194f5f9.js", "q-8aed06a8.js"],
        origins: [
          "src/entry_register.js",
          "src/s_0voobervplu.js",
          "src/s_fuec2wnvmfm.js",
          "src/s_wo0duje1mmq.js",
        ],
        symbols: ["s_0vOoberVPlU", "s_FueC2WNvmfM", "s_wO0DUje1mMQ"],
      },
      "q-39cef026.js": {
        size: 487,
        imports: ["q-275314fe.js", "q-302c39cc.js", "q-a2dbe35f.js"],
        origins: ["src/entry_ArticleHeader.js", "src/s_70zy5hlck6e.js"],
        symbols: ["s_70ZY5hLcK6E"],
      },
      "q-3ff614ca.js": {
        size: 128,
        imports: ["q-275314fe.js"],
        dynamicImports: ["q-10fa4114.js"],
        origins: ["@qwik-city-entries"],
      },
      "q-41647278.js": {
        size: 312,
        imports: ["q-275314fe.js", "q-b4e4d7d0.js"],
        dynamicImports: ["q-91664b83.js"],
        origins: [
          "src/components/header/header.css",
          "src/components/header/header.js",
          "src/entry_Layout.js",
          "src/s_42v99d5vq0e.js",
        ],
        symbols: ["s_42v99d5vQ0E"],
      },
      "q-49801920.js": { size: 58, imports: ["q-275314fe.js"] },
      "q-4bba26b6.js": {
        size: 1489,
        imports: ["q-275314fe.js"],
        origins: ["src/entry_RouterHead.js", "src/s_uxi74zpmnys.js"],
        symbols: ["s_uxi74zpMnys"],
      },
      "q-5e6757bd.js": {
        size: 2812,
        imports: [
          "q-275314fe.js",
          "q-71b43be9.js",
          "q-8194f5f9.js",
          "q-a22401e9.js",
        ],
        dynamicImports: ["q-a63d347f.js"],
        origins: [
          "src/components/tags/tags.css",
          "src/components/tags/tags.js",
          "src/entry_Home.js",
          "src/s_5gb43ohxwlq.js",
          "src/s_80zkdekd3yc.js",
          "src/s_8ql0ftj799m.js",
          "src/s_bjqynq84jne.js",
          "src/s_vkov14gbx3e.js",
          "src/s_xfr0dvjs0na.js",
          "src/s_z2jcgfrcwve.js",
        ],
        symbols: [
          "s_5GB43OhxwlQ",
          "s_80ZkdeKD3Yc",
          "s_8qL0FtJ799M",
          "s_bJqynq84JNE",
          "s_VKoV14GbX3E",
          "s_xfr0dVJs0nA",
          "s_z2jCgFrcwVE",
        ],
      },
      "q-6032a431.js": {
        size: 916,
        imports: ["q-275314fe.js"],
        origins: ["src/entry_SideMenu.js", "src/s_x0zyrxjwtca.js"],
        symbols: ["s_x0zYRXJwTCA"],
      },
      "q-6a85b890.js": {
        size: 240,
        imports: ["q-275314fe.js"],
        origins: ["src/entry_RouterOutlet.js", "src/s_nd8yk3ko22c.js"],
        symbols: ["s_nd8yk3KO22c"],
      },
      "q-6ae84146.js": {
        size: 694,
        imports: ["q-275314fe.js", "q-8194f5f9.js"],
        dynamicImports: ["q-ad9dd6a9.js"],
        origins: [
          "src/routes/settings/index.css",
          "src/routes/settings/index.js",
        ],
      },
      "q-7133febb.js": {
        size: 442,
        imports: ["q-275314fe.js", "q-8194f5f9.js"],
        origins: ["src/entry_articles_list.js", "src/s_zao67wt8wti.js"],
        symbols: ["s_zaO67WT8WTI"],
      },
      "q-71b43be9.js": {
        size: 713,
        imports: ["q-275314fe.js"],
        dynamicImports: ["q-7133febb.js", "q-894afc6e.js", "q-dddb69f9.js"],
        origins: [
          "src/components/article/article.css",
          "src/components/article/article.js",
          "src/components/articles-list/articles-list.js",
          "src/components/feed-navigation/feed-navigation.css",
          "src/components/feed-navigation/feed-navigation.js",
        ],
      },
      "q-818ab859.js": {
        size: 1460,
        imports: ["q-275314fe.js"],
        dynamicImports: ["q-ab229920.js"],
        origins: [
          "@builder.io/qwik/build",
          "src/entry_QwikCity.js",
          "src/s_aaalzkh0klq.js",
          "src/s_z1nvhyeppoi.js",
        ],
        symbols: ["s_AaAlzKH0KlQ", "s_z1nvHyEppoI"],
      },
      "q-8194f5f9.js": {
        size: 20571,
        origins: [
          "\0/Users/ranwahle/dev/realworld-qwik-app/node_modules/axios/index.js?commonjs-module",
          "\0/Users/ranwahle/dev/realworld-qwik-app/node_modules/axios/lib/axios.js?commonjs-module",
          "\0commonjsHelpers.js",
          "node_modules/axios/index.js",
          "node_modules/axios/lib/adapters/xhr.js",
          "node_modules/axios/lib/axios.js",
          "node_modules/axios/lib/cancel/CancelToken.js",
          "node_modules/axios/lib/cancel/CanceledError.js",
          "node_modules/axios/lib/cancel/isCancel.js",
          "node_modules/axios/lib/core/Axios.js",
          "node_modules/axios/lib/core/AxiosError.js",
          "node_modules/axios/lib/core/InterceptorManager.js",
          "node_modules/axios/lib/core/buildFullPath.js",
          "node_modules/axios/lib/core/dispatchRequest.js",
          "node_modules/axios/lib/core/mergeConfig.js",
          "node_modules/axios/lib/core/settle.js",
          "node_modules/axios/lib/core/transformData.js",
          "node_modules/axios/lib/defaults/index.js",
          "node_modules/axios/lib/defaults/transitional.js",
          "node_modules/axios/lib/env/data.js",
          "node_modules/axios/lib/helpers/bind.js",
          "node_modules/axios/lib/helpers/buildURL.js",
          "node_modules/axios/lib/helpers/combineURLs.js",
          "node_modules/axios/lib/helpers/cookies.js",
          "node_modules/axios/lib/helpers/isAbsoluteURL.js",
          "node_modules/axios/lib/helpers/isAxiosError.js",
          "node_modules/axios/lib/helpers/isURLSameOrigin.js",
          "node_modules/axios/lib/helpers/normalizeHeaderName.js",
          "node_modules/axios/lib/helpers/null.js",
          "node_modules/axios/lib/helpers/parseHeaders.js",
          "node_modules/axios/lib/helpers/parseProtocol.js",
          "node_modules/axios/lib/helpers/spread.js",
          "node_modules/axios/lib/helpers/toFormData.js",
          "node_modules/axios/lib/helpers/validator.js",
          "node_modules/axios/lib/utils.js",
          "src/auth/auth.js",
          "src/common/api.js",
        ],
      },
      "q-894afc6e.js": {
        size: 755,
        imports: [
          "q-0af5c25f.js",
          "q-275314fe.js",
          "q-302c39cc.js",
          "q-a2dbe35f.js",
        ],
        origins: ["src/entry_Article.js", "src/s_qnc01othilo.js"],
        symbols: ["s_qnC01OTHiLo"],
      },
      "q-8aed06a8.js": {
        size: 615,
        imports: ["q-275314fe.js", "q-8194f5f9.js"],
        dynamicImports: ["q-37199b4d.js"],
        origins: [
          "src/routes/register/index.css",
          "src/routes/register/index.js",
        ],
      },
      "q-90504430.js": {
        size: 116,
        imports: ["q-275314fe.js"],
        origins: ["src/entry_FavoriteArtice.js", "src/s_uwtikfapo0s.js"],
        symbols: ["s_UwTikFAPo0s"],
      },
      "q-91664b83.js": {
        size: 382,
        imports: ["q-275314fe.js"],
        dynamicImports: ["q-6032a431.js"],
        origins: [
          "src/components/side-menu/side-menu.css",
          "src/components/side-menu/side-menu.js",
          "src/entry_Header.js",
          "src/s_n0ekpr3hs08.js",
        ],
        symbols: ["s_N0EkpR3Hs08"],
      },
      "q-97fe834c.js": {
        size: 306,
        imports: ["q-275314fe.js"],
        dynamicImports: ["q-cdbfd2ef.js", "q-e0dcd79f.js"],
        origins: [
          "src/routes/article/[articleName]/index.css",
          "src/routes/article/[articleName]/index.js",
        ],
      },
      "q-a22401e9.js": {
        size: 1111,
        imports: ["q-275314fe.js", "q-8194f5f9.js"],
        dynamicImports: ["q-5e6757bd.js"],
        origins: [
          "src/entry_routes.js",
          "src/routes/home/home.css",
          "src/routes/home/home.js",
          "src/s_gthzheb0ude.js",
        ],
        symbols: ["s_GthzHEB0UDE"],
      },
      "q-a2dbe35f.js": {
        size: 152,
        imports: ["q-275314fe.js"],
        dynamicImports: ["q-1c50002f.js"],
        origins: ["src/components/follow-user/follow-user.js"],
      },
      "q-a63d347f.js": {
        size: 586,
        imports: ["q-275314fe.js"],
        origins: [
          "src/entry_Tags.js",
          "src/s_1v06nvjv1dq.js",
          "src/s_tmyx7puyahu.js",
        ],
        symbols: ["s_1v06nvJV1DQ", "s_TMYX7PuYaHU"],
      },
      "q-a9cd0d6e.js": {
        size: 961,
        imports: ["q-275314fe.js", "q-8194f5f9.js"],
        dynamicImports: ["q-01cc18f9.js", "q-e77d3a4f.js"],
        origins: ["src/routes/editor/index.css", "src/routes/editor/index.js"],
      },
      "q-ab229920.js": {
        size: 867,
        imports: ["q-275314fe.js"],
        dynamicImports: [
          "q-28ce4bce.js",
          "q-3ff614ca.js",
          "q-6ae84146.js",
          "q-8aed06a8.js",
          "q-97fe834c.js",
          "q-a9cd0d6e.js",
          "q-b4e4d7d0.js",
          "q-ca39ad18.js",
          "q-cc5351c0.js",
        ],
        origins: ["@qwik-city-plan"],
      },
      "q-ad9dd6a9.js": {
        size: 1466,
        imports: ["q-275314fe.js", "q-6ae84146.js", "q-8194f5f9.js"],
        origins: [
          "src/entry_settings.js",
          "src/s_6mw9rtc0v04.js",
          "src/s_hptgpgghm0m.js",
          "src/s_w8hpn36lq0m.js",
        ],
        symbols: ["s_6Mw9RTC0v04", "s_HpTGPGghm0M", "s_w8hpn36lq0M"],
      },
      "q-b2e47d5c.js": {
        size: 857,
        imports: ["q-275314fe.js"],
        origins: [
          "src/entry_Link.js",
          "src/s_ha9upay8snq.js",
          "src/s_mysijca4ibc.js",
          "src/s_skxgnvwvot8.js",
          "src/s_uve5im9h73c.js",
        ],
        symbols: [
          "s_hA9UPaY8sNQ",
          "s_mYsiJcA4IBc",
          "s_skxgNVWVOT8",
          "s_uVE5iM9H73c",
        ],
      },
      "q-b4e4d7d0.js": {
        size: 199,
        imports: ["q-275314fe.js"],
        dynamicImports: ["q-41647278.js"],
        origins: ["src/routes/layout.js"],
      },
      "q-bc3d8e16.js": {
        size: 1123,
        imports: [
          "q-0af5c25f.js",
          "q-275314fe.js",
          "q-302c39cc.js",
          "q-8194f5f9.js",
          "q-97fe834c.js",
          "q-a2dbe35f.js",
          "q-cdbfd2ef.js",
        ],
        origins: [
          "src/entry_CommentForm.js",
          "src/s_2shpurnoq9c.js",
          "src/s_hx7lmfyx0ty.js",
        ],
        symbols: ["s_2ShPURnoq9c", "s_hX7lMFYx0tY"],
      },
      "q-ca39ad18.js": {
        size: 455,
        imports: ["q-275314fe.js"],
        dynamicImports: ["q-2d218d28.js", "q-8194f5f9.js"],
        origins: ["src/routes/signin/index.js"],
      },
      "q-cc5351c0.js": {
        size: 171,
        imports: ["q-275314fe.js"],
        dynamicImports: ["q-a22401e9.js"],
        origins: ["src/routes/index.js"],
      },
      "q-cdbfd2ef.js": {
        size: 2139,
        imports: [
          "q-0af5c25f.js",
          "q-275314fe.js",
          "q-302c39cc.js",
          "q-8194f5f9.js",
          "q-97fe834c.js",
        ],
        dynamicImports: ["q-39cef026.js", "q-bc3d8e16.js", "q-d0836b4f.js"],
        origins: [
          "src/entry__articleName_.js",
          "src/routes/article/[articleName]/article-header/article-header.css",
          "src/routes/article/[articleName]/article-header/article-header.js",
          "src/routes/article/[articleName]/comment/comment.css",
          "src/routes/article/[articleName]/comment/comment.js",
          "src/routes/article/[articleName]/commentForm/commentForm.css",
          "src/routes/article/[articleName]/commentForm/commentForm.js",
          "src/s_pud0ekr52ie.js",
          "src/s_qnqkmpyxq0y.js",
          "src/s_xioonlugch0.js",
        ],
        symbols: ["s_Pud0ekR52iE", "s_qNQKMPyXq0Y", "s_xiOONLugCh0"],
      },
      "q-ceb8566c.js": {
        size: 555,
        imports: ["q-275314fe.js"],
        origins: [
          "src/entry_ArticleTagsList.js",
          "src/s_7yrrcx6kkca.js",
          "src/s_lucn00zgmem.js",
        ],
        symbols: ["s_7yrRCx6kKcA", "s_LUCN00zgmeM"],
      },
      "q-d0836b4f.js": {
        size: 414,
        imports: ["q-275314fe.js", "q-302c39cc.js", "q-a2dbe35f.js"],
        origins: ["src/entry_Comment.js", "src/s_0taq7xle1tm.js"],
        symbols: ["s_0TAq7Xle1TM"],
      },
      "q-dddb69f9.js": {
        size: 730,
        imports: ["q-275314fe.js", "q-71b43be9.js"],
        origins: [
          "src/entry_FeedNavigation.js",
          "src/s_awjh06rg6n4.js",
          "src/s_v0wp50gwsba.js",
        ],
        symbols: ["s_AWJH06rg6N4", "s_v0WP50GwSBA"],
      },
      "q-e0dcd79f.js": {
        size: 263,
        imports: ["q-275314fe.js", "q-8194f5f9.js"],
        origins: ["src/entry_postComment.js", "src/s_w51ngdlukdm.js"],
        symbols: ["s_W51ngDLuKDM"],
      },
      "q-e5234fbe.js": {
        size: 2710,
        imports: [
          "q-275314fe.js",
          "q-28ce4bce.js",
          "q-71b43be9.js",
          "q-8194f5f9.js",
          "q-a2dbe35f.js",
        ],
        origins: [
          "src/entry__profileName_.js",
          "src/s_0m8ftfcbnw0.js",
          "src/s_10fvbveklnw.js",
          "src/s_aih10didwzo.js",
          "src/s_co0xlhbmays.js",
          "src/s_pdjwmedip0k.js",
          "src/s_siwhvz35rgq.js",
        ],
        symbols: [
          "s_0m8fTfCbNw0",
          "s_10fvbveklNw",
          "s_aIH10didwZo",
          "s_CO0xLhBmays",
          "s_PDJwMEdiP0k",
          "s_SiWhVz35RGQ",
        ],
      },
      "q-e77d3a4f.js": {
        size: 222,
        imports: ["q-275314fe.js"],
        origins: ["src/entry_onTagsKeyDown.js", "src/s_kg72eulq5cu.js"],
        symbols: ["s_KG72EULq5CU"],
      },
    },
    injections: [
      {
        tag: "link",
        location: "head",
        attributes: { rel: "stylesheet", href: "/build/q-20d67baa.css" },
      },
      {
        tag: "link",
        location: "head",
        attributes: { rel: "stylesheet", href: "/build/q-35b0a60c.css" },
      },
      {
        tag: "link",
        location: "head",
        attributes: { rel: "stylesheet", href: "/build/q-5bbd82c7.css" },
      },
      {
        tag: "link",
        location: "head",
        attributes: { rel: "stylesheet", href: "/build/q-c6b87acc.css" },
      },
      {
        tag: "link",
        location: "head",
        attributes: { rel: "stylesheet", href: "/build/q-15a6ad84.css" },
      },
      {
        tag: "link",
        location: "head",
        attributes: { rel: "stylesheet", href: "/build/q-0b08a423.css" },
      },
      {
        tag: "link",
        location: "head",
        attributes: { rel: "stylesheet", href: "/build/q-d20d8711.css" },
      },
      {
        tag: "link",
        location: "head",
        attributes: { rel: "stylesheet", href: "/build/q-f372100c.css" },
      },
      {
        tag: "link",
        location: "head",
        attributes: { rel: "stylesheet", href: "/build/q-d7bae8f5.css" },
      },
      {
        tag: "link",
        location: "head",
        attributes: { rel: "stylesheet", href: "/build/q-24868486.css" },
      },
      {
        tag: "link",
        location: "head",
        attributes: { rel: "stylesheet", href: "/build/q-9f98e854.css" },
      },
      {
        tag: "link",
        location: "head",
        attributes: { rel: "stylesheet", href: "/build/q-28f7b572.css" },
      },
      {
        tag: "link",
        location: "head",
        attributes: { rel: "stylesheet", href: "/build/q-e3efc445.css" },
      },
    ],
    version: "1",
    options: {
      target: "client",
      buildMode: "production",
      forceFullBuild: !0,
      entryStrategy: { type: "smart" },
    },
    platform: {
      qwik: "0.10.0",
      vite: "",
      rollup: "2.78.1",
      env: "node",
      os: "darwin",
      node: "18.0.0",
    },
  },
  Md = C(
    x(() => {
      const e = ku(),
        t = Jt();
      return d(A, {
        children: [
          d("title", { children: "Qwik Realworld App" }),
          d("link", {
            href: "//code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css",
            rel: "stylesheet",
            type: "text/css",
          }),
          d("link", {
            href: "//fonts.googleapis.com/css?family=Titillium+Web:700|Source+Serif+Pro:400,700|Merriweather+Sans:400,700|Source+Sans+Pro:400,300,600,700,300italic,400italic,600italic,700italic",
            rel: "stylesheet",
            type: "text/css",
          }),
          d("link", {
            rel: "stylesheet",
            href: "//demo.productionready.io/main.css",
          }),
          d("meta", {
            name: "viewport",
            content: "width=device-width, initial-scale=1.0",
          }),
          d("link", {
            rel: "canonical",
            get href() {
              return t.href;
            },
            [k]: { href: S(t, "href") },
          }),
          d("meta", {
            name: "viewport",
            content: "width=device-width, initial-scale=1.0",
          }),
          d("link", {
            rel: "icon",
            type: "image/svg+xml",
            href: "/favicon.svg",
          }),
          d("link", {
            rel: "preconnect",
            href: "https://fonts.googleapis.com",
          }),
          d("link", {
            rel: "preconnect",
            href: "https://fonts.gstatic.com",
            crossOrigin: "",
          }),
          d("link", {
            href: "https://fonts.googleapis.com/css2?family=Poppins&display=swap",
            rel: "stylesheet",
          }),
          d("meta", { property: "og:site_name", content: "Qwik" }),
          d("meta", { name: "twitter:site", content: "@QwikDev" }),
          d("meta", { name: "twitter:title", content: "Qwik" }),
          e.meta.map((n) => d("meta", { ...n })),
          e.links.map((n) => d("link", { ...n })),
          e.styles.map((n) =>
            d("style", {
              ...n.props,
              get dangerouslySetInnerHTML() {
                return n.style;
              },
              [k]: { dangerouslySetInnerHTML: S(n, "style") },
            })
          ),
        ],
      });
    }, "s_uxi74zpMnys")
  ),
  Ud = () =>
    d(Ou, {
      children: [
        d("head", { children: [d("meta", { charSet: "utf-8" }), d(Md, {})] }),
        d("body", { children: [d(_u, {}), d(Lu, {})] }),
      ],
    });
var Dd = Object.defineProperty,
  Hd = Object.defineProperties,
  Kd = Object.getOwnPropertyDescriptors,
  Qr = Object.getOwnPropertySymbols,
  Wd = Object.prototype.hasOwnProperty,
  Bd = Object.prototype.propertyIsEnumerable,
  Vr = (e, t, n) =>
    t in e
      ? Dd(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  Qd = (e, t) => {
    for (var n in t || (t = {})) Wd.call(t, n) && Vr(e, n, t[n]);
    if (Qr) for (var n of Qr(t)) Bd.call(t, n) && Vr(e, n, t[n]);
    return e;
  },
  Vd = (e, t) => Hd(e, Kd(t));
function Jd(e) {
  return Pd(
    d(Ud, {}),
    Vd(Qd({ manifest: zd }, e), {
      prefetchStrategy: {
        implementation: {
          linkInsert: null,
          workerFetchInsert: null,
          prefetchEvent: "always",
        },
      },
    })
  );
}
const Yd = fd(Jd);
export { Yd as default };
