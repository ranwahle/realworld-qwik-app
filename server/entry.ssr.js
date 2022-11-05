import {
  j as o,
  r as oe,
  g as ie,
  F as I,
  s as ae,
  c as B,
  i as x,
  h as le,
  a as ce,
  f as _,
  _ as Q,
  k as ue,
  R as de,
  l as me,
  Q as pe,
} from "./assets/index.qwik.d1422ab6.js";
/**
 * @license
 * @builder.io/qwik/server 0.12.1
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
var fe = ((e) =>
  typeof require < "u"
    ? require
    : typeof Proxy < "u"
    ? new Proxy(e, { get: (n, t) => (typeof require < "u" ? require : n)[t] })
    : e)(function (e) {
  if (typeof require < "u") return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + e + '" is not supported');
});
function k() {
  if (typeof performance > "u") return () => 0;
  const e = performance.now();
  return () => (performance.now() - e) / 1e6;
}
function Z(e) {
  let n = e.base;
  return typeof n == "string" ? (n.endsWith("/") || (n += "/"), n) : "/build/";
}
function ye(e, n) {
  const t = n == null ? void 0 : n.mapper,
    r = e.symbolMapper
      ? e.symbolMapper
      : (i) => {
          if (t) {
            const a = J(i),
              l = t[a];
            return l || console.error("Cannot resolve symbol", i, "in", t), l;
          }
        };
  return {
    isServer: !0,
    async importSymbol(i, a, l) {
      let u = String(a);
      u.endsWith(".js") || (u += ".js");
      const b = fe(u);
      if (!(l in b))
        throw new Error(`Q-ERROR: missing symbol '${l}' in module '${u}'.`);
      return b[l];
    },
    raf: () => (console.error("server can not rerender"), Promise.resolve()),
    nextTick: (i) =>
      new Promise((a) => {
        setTimeout(() => {
          a(i());
        });
      }),
    chunkForSymbol(i) {
      return r(i, t);
    },
  };
}
async function he(e, n) {
  const t = ye(e, n);
  ae(t);
}
var J = (e) => {
    const n = e.lastIndexOf("_");
    return n > -1 ? e.slice(n + 1) : e;
  },
  be =
    '((e,t)=>{const n="__q_context__",o=window,r=new Set,i=t=>e.querySelectorAll(t),s=(e,t,n=t.type)=>{i("[on"+e+"\\\\:"+n+"]").forEach((o=>l(o,e,t,n)))},a=(e,t)=>new CustomEvent(e,{detail:t}),c=(t,n)=>(t=t.closest("[q\\\\:container]"),new URL(n,new URL(t.getAttribute("q:base"),e.baseURI))),l=async(t,o,r,i=r.type)=>{const s="on"+o+":"+i;t.hasAttribute("preventdefault:"+i)&&r.preventDefault();const a=t._qc_,l=null==a?void 0:a.li.filter((e=>e[0]===s));if(l&&l.length>0){for(const e of l)await e[1].getFn([t,r],(()=>t.isConnected))(r,t);return}const d=t.getAttribute(s);if(d)for(const o of d.split("\\n")){const i=c(t,o),s=b(i),a=performance.now(),l=u(await import(i.href.split("#")[0]),s),d=e[n];if(t.isConnected)try{e[n]=[t,r,i],f("qsymbol",{symbol:s,element:t,reqTime:a}),await l(r,t)}finally{e[n]=d}}},f=(t,n)=>{e.dispatchEvent(a(t,n))},u=(e,t)=>{if(t in e)return e[t];for(const n of Object.values(e))if("object"==typeof n&&n&&t in n)return n[t]},b=e=>e.hash.replace(/^#?([^?[|]*).*$/,"$1")||"default",d=e=>e.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())),p=async e=>{let t=d(e.type),n=e.target;for(s("-document",e,t);n&&n.getAttribute;)await l(n,"",e,t),n=e.bubbles&&!0!==e.cancelBubble?n.parentElement:null},v=e=>{s("-window",e,d(e.type))},w=()=>{var n;const s=e.readyState;if(!t&&("interactive"==s||"complete"==s)&&(t=1,f("qinit"),(null!=(n=o.requestIdleCallback)?n:o.setTimeout).bind(o)((()=>f("qidle"))),r.has("qvisible"))){const e=i("[on\\\\:qvisible]"),t=new IntersectionObserver((e=>{for(const n of e)n.isIntersecting&&(t.unobserve(n.target),l(n.target,"",a("qvisible",n)))}));e.forEach((e=>t.observe(e)))}},q=(e,t,n,o=!1)=>e.addEventListener(t,n,{capture:o}),y=t=>{for(const n of t)r.has(n)||(q(e,n,p,!0),q(o,n,v),r.add(n))};if(!e.qR){const t=o.qwikevents;Array.isArray(t)&&y(t),o.qwikevents={push:(...e)=>y(e)},q(e,"readystatechange",w),w()}})(document);',
  ve = `(() => {
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
                    const handler = findSymbol(await import(url.href.split("#")[0]), symbolName);
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
        const findSymbol = (module, symbol) => {
            if (symbol in module) {
                return module[symbol];
            }
            for (const v of Object.values(module)) {
                if ("object" == typeof v && v && symbol in v) {
                    return v[symbol];
                }
            }
        };
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
  qe =
    '((e,t)=>{const n="__q_context__",o=window,r=new Set,i=t=>e.querySelectorAll(t),s=(e,t,n=t.type)=>{i("[on"+e+"\\\\:"+n+"]").forEach((o=>l(o,e,t,n)))},a=(e,t)=>new CustomEvent(e,{detail:t}),c=(t,n)=>(t=t.closest("[q\\\\:container]"),new URL(n,new URL(t.getAttribute("q:base"),e.baseURI))),l=async(t,o,r,i=r.type)=>{const s="on"+o+":"+i;t.hasAttribute("preventdefault:"+i)&&r.preventDefault();const a=t._qc_,l=null==a?void 0:a.li.filter((e=>e[0]===s));if(l&&l.length>0){for(const e of l)await e[1].getFn([t,r],(()=>t.isConnected))(r,t);return}const d=t.getAttribute(s);if(d)for(const o of d.split("\\n")){const i=c(t,o),s=b(i),a=performance.now(),l=u(await import(i.href.split("#")[0]),s),d=e[n];if(t.isConnected)try{e[n]=[t,r,i],f("qsymbol",{symbol:s,element:t,reqTime:a}),await l(r,t)}finally{e[n]=d}}},f=(t,n)=>{e.dispatchEvent(a(t,n))},u=(e,t)=>{if(t in e)return e[t];for(const n of Object.values(e))if("object"==typeof n&&n&&t in n)return n[t]},b=e=>e.hash.replace(/^#?([^?[|]*).*$/,"$1")||"default",d=e=>e.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())),p=async e=>{let t=d(e.type),n=e.target;for(s("-document",e,t);n&&n.getAttribute;)await l(n,"",e,t),n=e.bubbles&&!0!==e.cancelBubble?n.parentElement:null},v=e=>{s("-window",e,d(e.type))},w=()=>{var n;const s=e.readyState;if(!t&&("interactive"==s||"complete"==s)&&(t=1,f("qinit"),(null!=(n=o.requestIdleCallback)?n:o.setTimeout).bind(o)((()=>f("qidle"))),r.has("qvisible"))){const e=i("[on\\\\:qvisible]"),t=new IntersectionObserver((e=>{for(const n of e)n.isIntersecting&&(t.unobserve(n.target),l(n.target,"",a("qvisible",n)))}));e.forEach((e=>t.observe(e)))}},q=(e,t,n,o=!1)=>e.addEventListener(t,n,{capture:o}),y=t=>{for(const n of t)r.has(n)||(q(e,n,p,!0),q(o,n,v),r.add(n))};if(!e.qR){const t=o.qwikevents;Array.isArray(t)&&y(t),o.qwikevents={push:(...e)=>y(e)},q(e,"readystatechange",w),w()}})(document);',
  we = `(() => {
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
                    const handler = findSymbol(await import(url.href.split("#")[0]), symbolName);
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
        const findSymbol = (module, symbol) => {
            if (symbol in module) {
                return module[symbol];
            }
            for (const v of Object.values(module)) {
                if ("object" == typeof v && v && symbol in v) {
                    return v[symbol];
                }
            }
        };
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
function ge(e = {}) {
  return Array.isArray(e.events) && e.events.length > 0
    ? (e.debug ? we : qe).replace("window.qEvents", JSON.stringify(e.events))
    : e.debug
    ? ve
    : be;
}
function _e(e, n, t) {
  if (!t) return [];
  const r = n.prefetchStrategy,
    s = Z(n);
  if (r !== null) {
    if (!r || !r.symbolsToPrefetch || r.symbolsToPrefetch === "auto")
      return ke(e, t, s);
    if (typeof r.symbolsToPrefetch == "function")
      try {
        return r.symbolsToPrefetch({ manifest: t.manifest });
      } catch (i) {
        console.error("getPrefetchUrls, symbolsToPrefetch()", i);
      }
  }
  return [];
}
function ke(e, n, t) {
  const r = [],
    s = e == null ? void 0 : e.qrls,
    { mapper: i, manifest: a } = n,
    l = new Set();
  if (Array.isArray(s))
    for (const u of s) {
      const b = u.getHash(),
        f = i[b];
      f && G(a, l, r, t, f[1]);
    }
  return r;
}
function G(e, n, t, r, s) {
  const i = r + s;
  if (!n.has(i)) {
    n.add(i);
    const a = e.bundles[s];
    if (a) {
      const l = { url: i, imports: [] };
      if ((t.push(l), Array.isArray(a.imports)))
        for (const u of a.imports) G(e, n, l.imports, r, u);
    }
  }
}
var X = globalThis.qDev === !0,
  xe = [],
  ee = {};
X && (Object.freeze(xe), Object.freeze(ee), (Error.stackTraceLimit = 9999));
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
function je(e) {
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
function j() {
  let s = `const w=new Worker(URL.createObjectURL(new Blob(['onmessage=(e)=>{Promise.all(e.data.map(u=>fetch(u))).finally(()=>{setTimeout(postMessage({}),9999)})}'],{type:"text/javascript"})));`;
  return (
    (s += "w.postMessage(u.map(u=>new URL(u,origin)+''));"),
    (s += "w.onmessage=()=>{w.terminate()};"),
    s
  );
}
function Ie(e) {
  const n = { bundles: q(e).map((t) => t.split("/").pop()) };
  return `document.dispatchEvent(new CustomEvent("qprefetch",{detail:${JSON.stringify(
    n
  )}}))`;
}
function q(e) {
  const n = [],
    t = (r) => {
      if (Array.isArray(r))
        for (const s of r) n.includes(s.url) || (n.push(s.url), t(s.imports));
    };
  return t(e), n;
}
function Ee(e, n) {
  const t = Te(e == null ? void 0 : e.implementation),
    r = [];
  return (
    t.prefetchEvent === "always" && Ne(r, n),
    t.linkInsert === "html-append" && Se(r, n, t),
    t.linkInsert === "js-append"
      ? Ae(r, n, t)
      : t.workerFetchInsert === "always" && Le(r, n),
    r.length > 0 ? o(I, { children: r }) : null
  );
}
function Ne(e, n) {
  e.push(o("script", { type: "module", dangerouslySetInnerHTML: Ie(n) }));
}
function Se(e, n, t) {
  const r = q(n),
    s = t.linkRel || "prefetch";
  for (const i of r) {
    const a = {};
    (a.href = i),
      (a.rel = s),
      (s === "prefetch" || s === "preload") &&
        i.endsWith(".js") &&
        (a.as = "script"),
      e.push(o("link", a, void 0));
  }
}
function Ae(e, n, t) {
  const r = t.linkRel || "prefetch";
  let s = "";
  t.workerFetchInsert === "no-link-support" &&
    (s += "let supportsLinkRel = true;"),
    (s += `const u=${JSON.stringify(q(n))};`),
    (s += "u.map((u,i)=>{"),
    (s += "const l=document.createElement('link');"),
    (s += 'l.setAttribute("href",u);'),
    (s += `l.setAttribute("rel","${r}");`),
    t.workerFetchInsert === "no-link-support" &&
      ((s += "if(i===0){"),
      (s += "try{"),
      (s += `supportsLinkRel=l.relList.supports("${r}");`),
      (s += "}catch(e){}"),
      (s += "}")),
    (s += "document.body.appendChild(l);"),
    (s += "});"),
    t.workerFetchInsert === "no-link-support" &&
      ((s += "if(!supportsLinkRel){"), (s += j()), (s += "}")),
    t.workerFetchInsert === "always" && (s += j()),
    e.push(o("script", { type: "module", dangerouslySetInnerHTML: s }));
}
function Le(e, n) {
  let t = `const u=${JSON.stringify(q(n))};`;
  (t += j()),
    e.push(o("script", { type: "module", dangerouslySetInnerHTML: t }));
}
function Te(e) {
  if (typeof e == "string") {
    switch (e) {
      case "link-prefetch-html":
        return (
          h(e, "linkInsert"),
          {
            linkInsert: "html-append",
            linkRel: "prefetch",
            workerFetchInsert: null,
            prefetchEvent: null,
          }
        );
      case "link-prefetch":
        return (
          h(e, "linkInsert"),
          {
            linkInsert: "js-append",
            linkRel: "prefetch",
            workerFetchInsert: "no-link-support",
            prefetchEvent: null,
          }
        );
      case "link-preload-html":
        return (
          h(e, "linkInsert"),
          {
            linkInsert: "html-append",
            linkRel: "preload",
            workerFetchInsert: null,
            prefetchEvent: null,
          }
        );
      case "link-preload":
        return (
          h(e, "linkInsert"),
          {
            linkInsert: "js-append",
            linkRel: "preload",
            workerFetchInsert: "no-link-support",
            prefetchEvent: null,
          }
        );
      case "link-modulepreload-html":
        return (
          h(e, "linkInsert"),
          {
            linkInsert: "html-append",
            linkRel: "modulepreload",
            workerFetchInsert: null,
            prefetchEvent: null,
          }
        );
      case "link-modulepreload":
        return (
          h(e, "linkInsert"),
          {
            linkInsert: "js-append",
            linkRel: "modulepreload",
            workerFetchInsert: "no-link-support",
            prefetchEvent: null,
          }
        );
    }
    return (
      h(e, "workerFetchInsert"),
      {
        linkInsert: null,
        linkRel: null,
        workerFetchInsert: "always",
        prefetchEvent: null,
      }
    );
  }
  return e && typeof e == "object" ? e : ze;
}
var ze = {
  linkInsert: null,
  linkRel: null,
  workerFetchInsert: null,
  prefetchEvent: "always",
};
function h(e, n) {
  console.warn(
    `The Prefetch Strategy Implementation "${e}" has been deprecated and will be removed in an upcoming release. Please update to use the "prefetchStrategy.implementation.${n}" interface.`
  );
}
var Ce = "<!DOCTYPE html>";
async function Re(e, n) {
  var C, R, O, F, $, Y;
  let t = n.stream,
    r = 0,
    s = 0,
    i = 0,
    a = 0;
  const l =
      (R = (C = n.streaming) == null ? void 0 : C.inOrder) != null
        ? R
        : { strategy: "auto", maximunInitialChunk: 5e4, maximunChunk: 3e4 },
    u = (O = n.containerTagName) != null ? O : "html",
    b = (F = n.containerAttributes) != null ? F : {};
  let f = "";
  const E = t,
    ne = k();
  function N() {
    f && (E.write(f), (f = ""), (r = 0), i++, i === 1 && (a = ne()));
  }
  function S(c) {
    (r += c.length), (s += c.length), (f += c);
  }
  switch (l.strategy) {
    case "disabled":
      t = { write: S };
      break;
    case "direct":
      t = E;
      break;
    case "auto":
      let c = 0,
        d = !1;
      const w = ($ = l.maximunChunk) != null ? $ : 0,
        g = (Y = l.maximunInitialChunk) != null ? Y : 0;
      t = {
        write(p) {
          p === "<!--qkssr-f-->"
            ? d || (d = !0)
            : p === "<!--qkssr-pu-->"
            ? c++
            : p === "<!--qkssr-po-->"
            ? c--
            : S(p),
            c === 0 && (d || r >= (i === 0 ? g : w)) && ((d = !1), N());
        },
      };
      break;
  }
  u === "html"
    ? t.write(Ce)
    : n.qwikLoader
    ? (n.qwikLoader.include === void 0 && (n.qwikLoader.include = "never"),
      n.qwikLoader.position === void 0 && (n.qwikLoader.position = "bottom"))
    : (n.qwikLoader = { include: "never" }),
    n.manifest ||
      console.warn(
        "Missing client manifest, loading symbols in the client might 404"
      );
  const te = Z(n),
    y = Oe(n.manifest);
  await he(n, y);
  let v = null;
  const A = y == null ? void 0 : y.manifest.injections,
    se = A
      ? A.map((c) => {
          var d;
          return o(c.tag, (d = c.attributes) != null ? d : ee);
        })
      : void 0,
    re = k(),
    L = [];
  let T = 0,
    z = 0;
  return (
    await oe(e, {
      stream: t,
      containerTagName: u,
      containerAttributes: b,
      envData: n.envData,
      base: te,
      beforeContent: se,
      beforeClose: async (c, d) => {
        var V, H, W;
        T = re();
        const w = k();
        v = await ie(c, d);
        const g = JSON.stringify(v.state, void 0, X ? "  " : void 0),
          p = [
            o("script", { type: "qwik/json", dangerouslySetInnerHTML: Fe(g) }),
          ];
        if (n.prefetchStrategy !== null) {
          const m = _e(v, n, y);
          if (m.length > 0) {
            const M = Ee(n.prefetchStrategy, m);
            M && p.push(M);
          }
        }
        const P = !v || v.mode !== "static",
          D =
            (H = (V = n.qwikLoader) == null ? void 0 : V.include) != null
              ? H
              : "auto",
          K = D === "always" || (D === "auto" && P);
        if (K) {
          const m = ge({
            events: (W = n.qwikLoader) == null ? void 0 : W.events,
            debug: n.debug,
          });
          p.push(o("script", { id: "qwikloader", dangerouslySetInnerHTML: m }));
        }
        const U = Array.from(d.$events$, (m) => JSON.stringify(m));
        if (U.length > 0) {
          let m = `window.qwikevents.push(${U.join(", ")})`;
          K || (m = `window.qwikevents||=[];${m}`),
            p.push(o("script", { dangerouslySetInnerHTML: m }));
        }
        return $e(L, c), (z = w()), o(I, { children: p });
      },
    }),
    N(),
    {
      prefetchResources: void 0,
      snapshotResult: v,
      flushes: i,
      manifest: y == null ? void 0 : y.manifest,
      size: s,
      timing: { render: T, snapshot: z, firstFlush: a },
      _symbols: L,
    }
  );
}
function Oe(e) {
  if (!!e) {
    if ("mapper" in e) return e;
    if (((e = je(e)), e)) {
      const n = {};
      return (
        Object.entries(e.mapping).forEach(([t, r]) => {
          n[J(t)] = [t, r];
        }),
        { mapper: n, manifest: e }
      );
    }
  }
}
var Fe = (e) => e.replace(/<(\/?script)/g, "\\x3C$1");
function $e(e, n) {
  var t;
  for (const r of n) {
    const s = (t = r.$componentQrl$) == null ? void 0 : t.getSymbol();
    s && !e.includes(s) && e.push(s);
  }
}
const Ye = {
    symbols: {
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
      s_dznIGAlrcag: {
        origin: "routes/flower/index.tsx",
        displayName: "flower_component__Fragment_input_onInput",
        canonicalFilename: "s_dznigalrcag",
        hash: "dznIGAlrcag",
        ctxKind: "event",
        ctxName: "onInput$",
        captures: !0,
        parent: "s_OW4nu0I1yZ8",
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
      s_V0Y6u0VD1eY: {
        origin: "routes/flower/index.tsx",
        displayName: "flower_component_useClientEffect",
        canonicalFilename: "s_v0y6u0vd1ey",
        hash: "V0Y6u0VD1eY",
        ctxKind: "function",
        ctxName: "useClientEffect$",
        captures: !0,
        parent: "s_OW4nu0I1yZ8",
      },
      s_3sccYCDd1Z0: {
        origin: "root.tsx",
        displayName: "root_component",
        canonicalFilename: "s_3sccycdd1z0",
        hash: "3sccYCDd1Z0",
        ctxKind: "function",
        ctxName: "component$",
        captures: !1,
        parent: null,
      },
      s_OW4nu0I1yZ8: {
        origin: "routes/flower/index.tsx",
        displayName: "flower_component",
        canonicalFilename: "s_ow4nu0i1yz8",
        hash: "OW4nu0I1yZ8",
        ctxKind: "function",
        ctxName: "component$",
        captures: !1,
        parent: null,
      },
      s_VkLNXphUh5s: {
        origin: "routes/layout.tsx",
        displayName: "layout_component",
        canonicalFilename: "s_vklnxphuh5s",
        hash: "VkLNXphUh5s",
        ctxKind: "function",
        ctxName: "component$",
        captures: !1,
        parent: null,
      },
      s_ceU05TscGYE: {
        origin: "components/header/header.tsx",
        displayName: "header_component",
        canonicalFilename: "s_ceu05tscgye",
        hash: "ceU05TscGYE",
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
      s_xYL1qOwPyDI: {
        origin: "routes/index.tsx",
        displayName: "routes_component",
        canonicalFilename: "s_xyl1qowpydi",
        hash: "xYL1qOwPyDI",
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
      s_zrbrqoaqXSY: {
        origin: "components/router-head/router-head.tsx",
        displayName: "RouterHead_component",
        canonicalFilename: "s_zrbrqoaqxsy",
        hash: "zrbrqoaqXSY",
        ctxKind: "function",
        ctxName: "component$",
        captures: !1,
        parent: null,
      },
      s_hO3b5j0m2ZI: {
        origin: "root.tsx",
        displayName: "root_component_useStyles",
        canonicalFilename: "s_ho3b5j0m2zi",
        hash: "hO3b5j0m2ZI",
        ctxKind: "function",
        ctxName: "useStyles$",
        captures: !1,
        parent: "s_3sccYCDd1Z0",
      },
      s_N39ca0w8E8Y: {
        origin: "components/header/header.tsx",
        displayName: "header_component_useStylesScoped",
        canonicalFilename: "s_n39ca0w8e8y",
        hash: "N39ca0w8E8Y",
        ctxKind: "function",
        ctxName: "useStylesScoped$",
        captures: !1,
        parent: "s_ceU05TscGYE",
      },
      s_p4UiTwsJc7c: {
        origin: "routes/flower/index.tsx",
        displayName: "flower_component_useStylesScoped",
        canonicalFilename: "s_p4uitwsjc7c",
        hash: "p4UiTwsJc7c",
        ctxKind: "function",
        ctxName: "useStylesScoped$",
        captures: !1,
        parent: "s_OW4nu0I1yZ8",
      },
    },
    mapping: {
      s_hA9UPaY8sNQ: "q-5413fa6e.js",
      s_skxgNVWVOT8: "q-5413fa6e.js",
      s_dznIGAlrcag: "q-102f67e4.js",
      s_uVE5iM9H73c: "q-5413fa6e.js",
      s_AaAlzKH0KlQ: "q-c823fb9a.js",
      s_V0Y6u0VD1eY: "q-102f67e4.js",
      s_3sccYCDd1Z0: "q-059d489c.js",
      s_OW4nu0I1yZ8: "q-102f67e4.js",
      s_VkLNXphUh5s: "q-ae30742d.js",
      s_ceU05TscGYE: "q-a38701b4.js",
      s_mYsiJcA4IBc: "q-5413fa6e.js",
      s_nd8yk3KO22c: "q-a4c8e5b6.js",
      s_xYL1qOwPyDI: "q-4d4a3e73.js",
      s_z1nvHyEppoI: "q-c823fb9a.js",
      s_zrbrqoaqXSY: "q-38d3acf5.js",
      s_hO3b5j0m2ZI: "q-059d489c.js",
      s_N39ca0w8E8Y: "q-a38701b4.js",
      s_p4UiTwsJc7c: "q-102f67e4.js",
    },
    bundles: {
      "q-059d489c.js": {
        size: 5996,
        imports: ["q-5e8b9715.js"],
        dynamicImports: [
          "q-38d3acf5.js",
          "q-5413fa6e.js",
          "q-a4c8e5b6.js",
          "q-c823fb9a.js",
        ],
        origins: [
          "node_modules/@builder.io/qwik-city/index.qwik.mjs",
          "src/components/router-head/router-head.tsx",
          "src/entry_root.js",
          "src/global.css?used&inline",
          "src/s_3sccycdd1z0.js",
          "src/s_ho3b5j0m2zi.js",
        ],
        symbols: ["s_3sccYCDd1Z0", "s_hO3b5j0m2ZI"],
      },
      "q-102f67e4.js": {
        size: 2506,
        imports: ["q-059d489c.js", "q-5e8b9715.js"],
        origins: [
          "src/entry_flower.js",
          "src/routes/flower/flower.css?used&inline",
          "src/s_dznigalrcag.js",
          "src/s_ow4nu0i1yz8.js",
          "src/s_p4uitwsjc7c.js",
          "src/s_v0y6u0vd1ey.js",
        ],
        symbols: [
          "s_dznIGAlrcag",
          "s_OW4nu0I1yZ8",
          "s_p4UiTwsJc7c",
          "s_V0Y6u0VD1eY",
        ],
      },
      "q-1d4e3858.js": {
        size: 2536,
        origins: [
          "node_modules/@builder.io/qwik-city/service-worker.mjs",
          "src/routes/service-worker.ts",
        ],
      },
      "q-34b2d479.js": {
        size: 128,
        imports: ["q-5e8b9715.js"],
        dynamicImports: ["q-1d4e3858.js"],
        origins: ["@qwik-city-entries"],
      },
      "q-38d3acf5.js": {
        size: 632,
        imports: ["q-059d489c.js", "q-5e8b9715.js"],
        origins: ["src/entry_RouterHead.js", "src/s_zrbrqoaqxsy.js"],
        symbols: ["s_zrbrqoaqXSY"],
      },
      "q-4d4a3e73.js": {
        size: 2891,
        imports: ["q-059d489c.js", "q-5e8b9715.js"],
        origins: ["src/entry_routes.js", "src/s_xyl1qowpydi.js"],
        symbols: ["s_xYL1qOwPyDI"],
      },
      "q-5413fa6e.js": {
        size: 891,
        imports: ["q-059d489c.js", "q-5e8b9715.js"],
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
      "q-5c5484d9.js": { size: 58, imports: ["q-5e8b9715.js"] },
      "q-5e8b9715.js": {
        size: 63917,
        dynamicImports: ["q-059d489c.js"],
        origins: [
          "\0vite/preload-helper",
          "node_modules/@builder.io/qwik/core.mjs",
          "src/root.tsx",
        ],
      },
      "q-9ff3f0d4.js": {
        size: 196,
        imports: ["q-5e8b9715.js"],
        dynamicImports: ["q-4d4a3e73.js"],
        origins: ["src/routes/index.tsx"],
      },
      "q-a38701b4.js": {
        size: 4098,
        imports: ["q-5e8b9715.js"],
        origins: [
          "src/components/header/header.css?used&inline",
          "src/components/icons/qwik.tsx",
          "src/entry_header.js",
          "src/s_ceu05tscgye.js",
          "src/s_n39ca0w8e8y.js",
        ],
        symbols: ["s_ceU05TscGYE", "s_N39ca0w8E8Y"],
      },
      "q-a4c8e5b6.js": {
        size: 269,
        imports: ["q-059d489c.js", "q-5e8b9715.js"],
        origins: ["src/entry_RouterOutlet.js", "src/s_nd8yk3ko22c.js"],
        symbols: ["s_nd8yk3KO22c"],
      },
      "q-ae30742d.js": {
        size: 393,
        imports: ["q-5e8b9715.js"],
        dynamicImports: ["q-a38701b4.js"],
        origins: [
          "src/components/header/header.tsx",
          "src/entry_layout.js",
          "src/s_vklnxphuh5s.js",
        ],
        symbols: ["s_VkLNXphUh5s"],
      },
      "q-c823fb9a.js": {
        size: 1522,
        imports: ["q-059d489c.js", "q-5e8b9715.js"],
        dynamicImports: ["q-e170b39d.js"],
        origins: [
          "@builder.io/qwik/build",
          "src/entry_QwikCity.js",
          "src/s_aaalzkh0klq.js",
          "src/s_z1nvhyeppoi.js",
        ],
        symbols: ["s_AaAlzKH0KlQ", "s_z1nvHyEppoI"],
      },
      "q-e170b39d.js": {
        size: 504,
        imports: ["q-5e8b9715.js"],
        dynamicImports: [
          "q-34b2d479.js",
          "q-9ff3f0d4.js",
          "q-f05acd44.js",
          "q-f190e7a3.js",
        ],
        origins: ["@qwik-city-plan"],
      },
      "q-f05acd44.js": {
        size: 192,
        imports: ["q-5e8b9715.js"],
        dynamicImports: ["q-102f67e4.js"],
        origins: ["src/routes/flower/index.tsx"],
      },
      "q-f190e7a3.js": {
        size: 153,
        imports: ["q-5e8b9715.js"],
        dynamicImports: ["q-ae30742d.js"],
        origins: ["src/routes/layout.tsx"],
      },
    },
    injections: [],
    version: "1",
    options: {
      target: "client",
      buildMode: "production",
      forceFullBuild: !0,
      entryStrategy: { type: "smart" },
    },
    platform: {
      qwik: "0.12.1",
      vite: "",
      rollup: "2.79.1",
      env: "node",
      os: "darwin",
      node: "18.0.0",
    },
  },
  Pe = B(
    x(() => {
      const e = le(),
        n = ce();
      return o(I, {
        children: [
          o("title", { children: _(e, "title") }),
          o("link", {
            rel: "canonical",
            get href() {
              return n.href;
            },
            [Q]: { href: _(n, "href") },
          }),
          o("meta", {
            name: "viewport",
            content: "width=device-width, initial-scale=1.0",
          }),
          o("link", {
            rel: "icon",
            type: "image/svg+xml",
            href: "/favicon.svg",
          }),
          e.meta.map((t) => o("meta", { ...t })),
          e.links.map((t) => o("link", { ...t })),
          e.styles.map((t) =>
            o("style", {
              ...t.props,
              get dangerouslySetInnerHTML() {
                return t.style;
              },
              [Q]: { dangerouslySetInnerHTML: _(t, "style") },
            })
          ),
        ],
      });
    }, "s_zrbrqoaqXSY")
  ),
  De = `:root{--qwik-dark-blue: #006ce9;--qwik-light-blue: #18b6f6;--qwik-light-purple: #ac7ff4;--qwik-dark-purple: #713fc2}body{background-color:#fafafa;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,sans-serif;padding:20px 20px 40px}main{max-width:760px;margin:0 auto;background-color:#fff;border-radius:5px;box-shadow:0 0 130px -50px var(--qwik-light-purple);overflow:hidden}h1,h2{margin:0 0 5px}.lightning{filter:hue-rotate(180deg)}section{padding:20px;border-bottom:10px solid var(--qwik-dark-blue)}ul{list-style-type:square;margin:5px 0 30px;padding-left:25px}li{padding:5px 0}li::marker{color:var(--qwik-light-blue)}a,a:visited{color:var(--qwik-dark-blue)}a:hover{text-decoration:none}table.commands{margin:0 0 30px}.commands td{padding:5px}.commands td:first-child{white-space:nowrap;padding-right:20px}code{font-family:Menlo,Monaco,Courier New,monospace;font-size:.9em;background-color:#e0e0e0;padding:2px 4px;border-radius:3px;border-bottom:2px solid #bfbfbf}footer{padding:15px;text-align:center;font-size:.8em}footer a{text-decoration:none}footer a:hover{text-decoration:underline}a.mindblow{margin:0 auto;display:block;background:var(--qwik-light-purple);padding:10px 20px;border-radius:10px;border:0;color:#fff;text-decoration:none;font-size:20px;width:fit-content;border-bottom:4px solid black;cursor:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>\\1f92f</text></svg>") 16 0,auto}a.mindblow:hover{border-bottom-width:0px;margin-bottom:4px;transform:translateY(4px)}
`,
  Ke = B(
    x(
      () => (
        ue(x(De, "s_hO3b5j0m2ZI")),
        o(pe, {
          children: [
            o("head", {
              children: [
                o("meta", { charSet: "utf-8" }),
                o("link", { rel: "manifest", href: "/manifest.json" }),
                o(Pe, {}),
              ],
            }),
            o("body", { lang: "en", children: [o(de, {}), o(me, {})] }),
          ],
        })
      ),
      "s_3sccYCDd1Z0"
    )
  );
function He(e) {
  return Re(o(Ke, {}), {
    manifest: Ye,
    ...e,
    prefetchStrategy: {
      implementation: {
        linkInsert: null,
        workerFetchInsert: null,
        prefetchEvent: "always",
      },
    },
  });
}
export { He as default };
