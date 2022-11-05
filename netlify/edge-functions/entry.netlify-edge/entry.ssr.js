import {
  j as o,
  r as te,
  h as ie,
  F as w,
  s as oe,
  c as re,
  i as ae,
  k as ce,
  g as le,
  _ as V,
  a as W,
  l as de,
  m as me,
  Q as ue,
} from "./assets/index.qwik.34c4cf26.js";
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
var pe = ((e) =>
  typeof require < "u"
    ? require
    : typeof Proxy < "u"
    ? new Proxy(e, { get: (s, n) => (typeof require < "u" ? require : s)[n] })
    : e)(function (e) {
  if (typeof require < "u") return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + e + '" is not supported');
});
function g() {
  if (typeof performance > "u") return () => 0;
  const e = performance.now();
  return () => (performance.now() - e) / 1e6;
}
function Y(e) {
  let s = e.base;
  return typeof s == "string" ? (s.endsWith("/") || (s += "/"), s) : "/build/";
}
function fe(e, s) {
  const n = s == null ? void 0 : s.mapper,
    i = e.symbolMapper
      ? e.symbolMapper
      : (r) => {
          if (n) {
            const a = J(r),
              c = n[a];
            return c || console.error("Cannot resolve symbol", r, "in", n), c;
          }
        };
  return {
    isServer: !0,
    async importSymbol(r, a, c) {
      let d = String(a);
      d.endsWith(".js") || (d += ".js");
      const q = pe(d);
      if (!(c in q))
        throw new Error(`Q-ERROR: missing symbol '${c}' in module '${d}'.`);
      return q[c];
    },
    raf: () => (console.error("server can not rerender"), Promise.resolve()),
    nextTick: (r) =>
      new Promise((a) => {
        setTimeout(() => {
          a(r());
        });
      }),
    chunkForSymbol(r) {
      return i(r, n);
    },
  };
}
async function _e(e, s) {
  const n = fe(e, s);
  oe(n);
}
var J = (e) => {
    const s = e.lastIndexOf("_");
    return s > -1 ? e.slice(s + 1) : e;
  },
  he =
    '((e,t)=>{const n="__q_context__",o=window,r=new Set,i=t=>e.querySelectorAll(t),s=(e,t,n=t.type)=>{i("[on"+e+"\\\\:"+n+"]").forEach((o=>l(o,e,t,n)))},a=(e,t)=>new CustomEvent(e,{detail:t}),c=(t,n)=>(t=t.closest("[q\\\\:container]"),new URL(n,new URL(t.getAttribute("q:base"),e.baseURI))),l=async(t,o,r,i=r.type)=>{const s="on"+o+":"+i;t.hasAttribute("preventdefault:"+i)&&r.preventDefault();const a=t._qc_,l=null==a?void 0:a.li.filter((e=>e[0]===s));if(l&&l.length>0){for(const e of l)await e[1].getFn([t,r],(()=>t.isConnected))(r,t);return}const d=t.getAttribute(s);if(d)for(const o of d.split("\\n")){const i=c(t,o),s=b(i),a=performance.now(),l=u(await import(i.href.split("#")[0]),s),d=e[n];if(t.isConnected)try{e[n]=[t,r,i],f("qsymbol",{symbol:s,element:t,reqTime:a}),await l(r,t)}finally{e[n]=d}}},f=(t,n)=>{e.dispatchEvent(a(t,n))},u=(e,t)=>{if(t in e)return e[t];for(const n of Object.values(e))if("object"==typeof n&&n&&t in n)return n[t]},b=e=>e.hash.replace(/^#?([^?[|]*).*$/,"$1")||"default",d=e=>e.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())),p=async e=>{let t=d(e.type),n=e.target;for(s("-document",e,t);n&&n.getAttribute;)await l(n,"",e,t),n=e.bubbles&&!0!==e.cancelBubble?n.parentElement:null},v=e=>{s("-window",e,d(e.type))},w=()=>{var n;const s=e.readyState;if(!t&&("interactive"==s||"complete"==s)&&(t=1,f("qinit"),(null!=(n=o.requestIdleCallback)?n:o.setTimeout).bind(o)((()=>f("qidle"))),r.has("qvisible"))){const e=i("[on\\\\:qvisible]"),t=new IntersectionObserver((e=>{for(const n of e)n.isIntersecting&&(t.unobserve(n.target),l(n.target,"",a("qvisible",n)))}));e.forEach((e=>t.observe(e)))}},q=(e,t,n,o=!1)=>e.addEventListener(t,n,{capture:o}),y=t=>{for(const n of t)r.has(n)||(q(e,n,p,!0),q(o,n,v),r.add(n))};if(!e.qR){const t=o.qwikevents;Array.isArray(t)&&y(t),o.qwikevents={push:(...e)=>y(e)},q(e,"readystatechange",w),w()}})(document);',
  qe = `(() => {
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
  be =
    '((e,t)=>{const n="__q_context__",o=window,r=new Set,i=t=>e.querySelectorAll(t),s=(e,t,n=t.type)=>{i("[on"+e+"\\\\:"+n+"]").forEach((o=>l(o,e,t,n)))},a=(e,t)=>new CustomEvent(e,{detail:t}),c=(t,n)=>(t=t.closest("[q\\\\:container]"),new URL(n,new URL(t.getAttribute("q:base"),e.baseURI))),l=async(t,o,r,i=r.type)=>{const s="on"+o+":"+i;t.hasAttribute("preventdefault:"+i)&&r.preventDefault();const a=t._qc_,l=null==a?void 0:a.li.filter((e=>e[0]===s));if(l&&l.length>0){for(const e of l)await e[1].getFn([t,r],(()=>t.isConnected))(r,t);return}const d=t.getAttribute(s);if(d)for(const o of d.split("\\n")){const i=c(t,o),s=b(i),a=performance.now(),l=u(await import(i.href.split("#")[0]),s),d=e[n];if(t.isConnected)try{e[n]=[t,r,i],f("qsymbol",{symbol:s,element:t,reqTime:a}),await l(r,t)}finally{e[n]=d}}},f=(t,n)=>{e.dispatchEvent(a(t,n))},u=(e,t)=>{if(t in e)return e[t];for(const n of Object.values(e))if("object"==typeof n&&n&&t in n)return n[t]},b=e=>e.hash.replace(/^#?([^?[|]*).*$/,"$1")||"default",d=e=>e.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())),p=async e=>{let t=d(e.type),n=e.target;for(s("-document",e,t);n&&n.getAttribute;)await l(n,"",e,t),n=e.bubbles&&!0!==e.cancelBubble?n.parentElement:null},v=e=>{s("-window",e,d(e.type))},w=()=>{var n;const s=e.readyState;if(!t&&("interactive"==s||"complete"==s)&&(t=1,f("qinit"),(null!=(n=o.requestIdleCallback)?n:o.setTimeout).bind(o)((()=>f("qidle"))),r.has("qvisible"))){const e=i("[on\\\\:qvisible]"),t=new IntersectionObserver((e=>{for(const n of e)n.isIntersecting&&(t.unobserve(n.target),l(n.target,"",a("qvisible",n)))}));e.forEach((e=>t.observe(e)))}},q=(e,t,n,o=!1)=>e.addEventListener(t,n,{capture:o}),y=t=>{for(const n of t)r.has(n)||(q(e,n,p,!0),q(o,n,v),r.add(n))};if(!e.qR){const t=o.qwikevents;Array.isArray(t)&&y(t),o.qwikevents={push:(...e)=>y(e)},q(e,"readystatechange",w),w()}})(document);',
  ye = `(() => {
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
function ve(e = {}) {
  return Array.isArray(e.events) && e.events.length > 0
    ? (e.debug ? ye : be).replace("window.qEvents", JSON.stringify(e.events))
    : e.debug
    ? qe
    : he;
}
function je(e, s, n) {
  if (!n) return [];
  const i = s.prefetchStrategy,
    t = Y(s);
  if (i !== null) {
    if (!i || !i.symbolsToPrefetch || i.symbolsToPrefetch === "auto")
      return ge(e, n, t);
    if (typeof i.symbolsToPrefetch == "function")
      try {
        return i.symbolsToPrefetch({ manifest: n.manifest });
      } catch (r) {
        console.error("getPrefetchUrls, symbolsToPrefetch()", r);
      }
  }
  return [];
}
function ge(e, s, n) {
  const i = [],
    t = e == null ? void 0 : e.qrls,
    { mapper: r, manifest: a } = s,
    c = new Set();
  if (Array.isArray(t))
    for (const d of t) {
      const q = d.getHash(),
        f = r[q];
      f && B(a, c, i, n, f[1]);
    }
  return i;
}
function B(e, s, n, i, t) {
  const r = i + t;
  if (!s.has(r)) {
    s.add(r);
    const a = e.bundles[t];
    if (a) {
      const c = { url: r, imports: [] };
      if ((n.push(c), Array.isArray(a.imports)))
        for (const d of a.imports) B(e, s, c.imports, i, d);
    }
  }
}
var G = globalThis.qDev === !0,
  xe = [],
  Z = {};
G && (Object.freeze(xe), Object.freeze(Z), (Error.stackTraceLimit = 9999));
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
function we(e) {
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
function x() {
  let t = `const w=new Worker(URL.createObjectURL(new Blob(['onmessage=(e)=>{Promise.all(e.data.map(u=>fetch(u))).finally(()=>{setTimeout(postMessage({}),9999)})}'],{type:"text/javascript"})));`;
  return (
    (t += "w.postMessage(u.map(u=>new URL(u,origin)+''));"),
    (t += "w.onmessage=()=>{w.terminate()};"),
    t
  );
}
function ke(e) {
  const s = { bundles: y(e).map((n) => n.split("/").pop()) };
  return `document.dispatchEvent(new CustomEvent("qprefetch",{detail:${JSON.stringify(
    s
  )}}))`;
}
function y(e) {
  const s = [],
    n = (i) => {
      if (Array.isArray(i))
        for (const t of i) s.includes(t.url) || (s.push(t.url), n(t.imports));
    };
  return n(e), s;
}
function Ne(e, s) {
  const n = Te(e == null ? void 0 : e.implementation),
    i = [];
  return (
    n.prefetchEvent === "always" && Ee(i, s),
    n.linkInsert === "html-append" && ze(i, s, n),
    n.linkInsert === "js-append"
      ? Fe(i, s, n)
      : n.workerFetchInsert === "always" && Ce(i, s),
    i.length > 0 ? o(w, { children: i }) : null
  );
}
function Ee(e, s) {
  e.push(o("script", { type: "module", dangerouslySetInnerHTML: ke(s) }));
}
function ze(e, s, n) {
  const i = y(s),
    t = n.linkRel || "prefetch";
  for (const r of i) {
    const a = {};
    (a.href = r),
      (a.rel = t),
      (t === "prefetch" || t === "preload") &&
        r.endsWith(".js") &&
        (a.as = "script"),
      e.push(o("link", a, void 0));
  }
}
function Fe(e, s, n) {
  const i = n.linkRel || "prefetch";
  let t = "";
  n.workerFetchInsert === "no-link-support" &&
    (t += "let supportsLinkRel = true;"),
    (t += `const u=${JSON.stringify(y(s))};`),
    (t += "u.map((u,i)=>{"),
    (t += "const l=document.createElement('link');"),
    (t += 'l.setAttribute("href",u);'),
    (t += `l.setAttribute("rel","${i}");`),
    n.workerFetchInsert === "no-link-support" &&
      ((t += "if(i===0){"),
      (t += "try{"),
      (t += `supportsLinkRel=l.relList.supports("${i}");`),
      (t += "}catch(e){}"),
      (t += "}")),
    (t += "document.body.appendChild(l);"),
    (t += "});"),
    n.workerFetchInsert === "no-link-support" &&
      ((t += "if(!supportsLinkRel){"), (t += x()), (t += "}")),
    n.workerFetchInsert === "always" && (t += x()),
    e.push(o("script", { type: "module", dangerouslySetInnerHTML: t }));
}
function Ce(e, s) {
  let n = `const u=${JSON.stringify(y(s))};`;
  (n += x()),
    e.push(o("script", { type: "module", dangerouslySetInnerHTML: n }));
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
  return e && typeof e == "object" ? e : Re;
}
var Re = {
  linkInsert: null,
  linkRel: null,
  workerFetchInsert: null,
  prefetchEvent: "always",
};
function h(e, s) {
  console.warn(
    `The Prefetch Strategy Implementation "${e}" has been deprecated and will be removed in an upcoming release. Please update to use the "prefetchStrategy.implementation.${s}" interface.`
  );
}
var Ae = "<!DOCTYPE html>";
async function Ke(e, s) {
  var R, A, K, I, S, L;
  let n = s.stream,
    i = 0,
    t = 0,
    r = 0,
    a = 0;
  const c =
      (A = (R = s.streaming) == null ? void 0 : R.inOrder) != null
        ? A
        : { strategy: "auto", maximunInitialChunk: 5e4, maximunChunk: 3e4 },
    d = (K = s.containerTagName) != null ? K : "html",
    q = (I = s.containerAttributes) != null ? I : {};
  let f = "";
  const k = n,
    X = g();
  function N() {
    f && (k.write(f), (f = ""), (i = 0), r++, r === 1 && (a = X()));
  }
  function E(l) {
    (i += l.length), (t += l.length), (f += l);
  }
  switch (c.strategy) {
    case "disabled":
      n = { write: E };
      break;
    case "direct":
      n = k;
      break;
    case "auto":
      let l = 0,
        m = !1;
      const v = (S = c.maximunChunk) != null ? S : 0,
        j = (L = c.maximunInitialChunk) != null ? L : 0;
      n = {
        write(p) {
          p === "<!--qkssr-f-->"
            ? m || (m = !0)
            : p === "<!--qkssr-pu-->"
            ? l++
            : p === "<!--qkssr-po-->"
            ? l--
            : E(p),
            l === 0 && (m || i >= (r === 0 ? j : v)) && ((m = !1), N());
        },
      };
      break;
  }
  d === "html"
    ? n.write(Ae)
    : s.qwikLoader
    ? (s.qwikLoader.include === void 0 && (s.qwikLoader.include = "never"),
      s.qwikLoader.position === void 0 && (s.qwikLoader.position = "bottom"))
    : (s.qwikLoader = { include: "never" }),
    s.manifest ||
      console.warn(
        "Missing client manifest, loading symbols in the client might 404"
      );
  const ee = Y(s),
    _ = Ie(s.manifest);
  await _e(s, _);
  let b = null;
  const z = _ == null ? void 0 : _.manifest.injections,
    se = z
      ? z.map((l) => {
          var m;
          return o(l.tag, (m = l.attributes) != null ? m : Z);
        })
      : void 0,
    ne = g(),
    F = [];
  let C = 0,
    T = 0;
  return (
    await te(e, {
      stream: n,
      containerTagName: d,
      containerAttributes: q,
      envData: s.envData,
      base: ee,
      beforeContent: se,
      beforeClose: async (l, m) => {
        var O, M, D;
        C = ne();
        const v = g();
        b = await ie(l, m);
        const j = JSON.stringify(b.state, void 0, G ? "  " : void 0),
          p = [
            o("script", { type: "qwik/json", dangerouslySetInnerHTML: Se(j) }),
          ];
        if (s.prefetchStrategy !== null) {
          const u = je(b, s, _);
          if (u.length > 0) {
            const Q = Ne(s.prefetchStrategy, u);
            Q && p.push(Q);
          }
        }
        const U = !b || b.mode !== "static",
          $ =
            (M = (O = s.qwikLoader) == null ? void 0 : O.include) != null
              ? M
              : "auto",
          H = $ === "always" || ($ === "auto" && U);
        if (H) {
          const u = ve({
            events: (D = s.qwikLoader) == null ? void 0 : D.events,
            debug: s.debug,
          });
          p.push(o("script", { id: "qwikloader", dangerouslySetInnerHTML: u }));
        }
        const P = Array.from(m.$events$, (u) => JSON.stringify(u));
        if (P.length > 0) {
          let u = `window.qwikevents.push(${P.join(", ")})`;
          H || (u = `window.qwikevents||=[];${u}`),
            p.push(o("script", { dangerouslySetInnerHTML: u }));
        }
        return Le(F, l), (T = v()), o(w, { children: p });
      },
    }),
    N(),
    {
      prefetchResources: void 0,
      snapshotResult: b,
      flushes: r,
      manifest: _ == null ? void 0 : _.manifest,
      size: t,
      timing: { render: C, snapshot: T, firstFlush: a },
      _symbols: F,
    }
  );
}
function Ie(e) {
  if (!!e) {
    if ("mapper" in e) return e;
    if (((e = we(e)), e)) {
      const s = {};
      return (
        Object.entries(e.mapping).forEach(([n, i]) => {
          s[J(n)] = [n, i];
        }),
        { mapper: s, manifest: e }
      );
    }
  }
}
var Se = (e) => e.replace(/<(\/?script)/g, "\\x3C$1");
function Le(e, s) {
  var n;
  for (const i of s) {
    const t = (n = i.$componentQrl$) == null ? void 0 : n.getSymbol();
    t && !e.includes(t) && e.push(t);
  }
}
const Ue = {
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
      s_UwTikFAPo0s: "q-14050470.js",
      s_AWJH06rg6N4: "q-dc8b35fd.js",
      s_FueC2WNvmfM: "q-676e150c.js",
      s_LUCN00zgmeM: "q-aae0586b.js",
      s_TMYX7PuYaHU: "q-ba89ccb9.js",
      s_VmL1hUkjcx8: "q-3597dd63.js",
      s_hA9UPaY8sNQ: "q-17dda71d.js",
      s_w8hpn36lq0M: "q-81c466c6.js",
      s_z7Nq5uFhz44: "q-3597dd63.js",
      s_skxgNVWVOT8: "q-17dda71d.js",
      s_3oHYt18CLtU: "q-54611d8f.js",
      s_wO0DUje1mMQ: "q-676e150c.js",
      s_80ZkdeKD3Yc: "q-c91db0c8.js",
      s_VKoV14GbX3E: "q-c91db0c8.js",
      s_aIH10didwZo: "q-21cd6eab.js",
      s_m9Naobhs100: "q-54611d8f.js",
      s_uVE5iM9H73c: "q-17dda71d.js",
      s_AaAlzKH0KlQ: "q-dae975cb.js",
      s_F0ypgMWg72Q: "q-54611d8f.js",
      s_hX7lMFYx0tY: "q-e872c358.js",
      s_s4xG6uSrEg4: "q-0cc8cf92.js",
      s_0TAq7Xle1TM: "q-67276179.js",
      s_0m8fTfCbNw0: "q-21cd6eab.js",
      s_0vOoberVPlU: "q-676e150c.js",
      s_1v06nvJV1DQ: "q-ba89ccb9.js",
      s_2ShPURnoq9c: "q-e872c358.js",
      s_42v99d5vQ0E: "q-f608cccd.js",
      s_5ysWeBz40eU: "q-54611d8f.js",
      s_70ZY5hLcK6E: "q-f34b722b.js",
      s_7yrRCx6kKcA: "q-aae0586b.js",
      s_GthzHEB0UDE: "q-26819c71.js",
      s_HpTGPGghm0M: "q-81c466c6.js",
      s_N0EkpR3Hs08: "q-f26e96bb.js",
      s_NhvqLaQNKg4: "q-0cc8cf92.js",
      s_OqTpRjcc6ZU: "q-3597dd63.js",
      s_Pud0ekR52iE: "q-3ff5d711.js",
      s_mYsiJcA4IBc: "q-17dda71d.js",
      s_nd8yk3KO22c: "q-92c1355f.js",
      s_qnC01OTHiLo: "q-e2fa6985.js",
      s_uxi74zpMnys: "q-fb86d04c.js",
      s_v0WP50GwSBA: "q-dc8b35fd.js",
      s_x0zYRXJwTCA: "q-7ce2ed40.js",
      s_z1nvHyEppoI: "q-dae975cb.js",
      s_z2jCgFrcwVE: "q-c91db0c8.js",
      s_KG72EULq5CU: "q-09a53073.js",
      s_W51ngDLuKDM: "q-160e906f.js",
      s_zaO67WT8WTI: "q-ba4d283d.js",
      s_10fvbveklNw: "q-21cd6eab.js",
      s_2h7KadHSQzE: "q-3597dd63.js",
      s_5GB43OhxwlQ: "q-c91db0c8.js",
      s_6Mw9RTC0v04: "q-81c466c6.js",
      s_8qL0FtJ799M: "q-c91db0c8.js",
      s_CO0xLhBmays: "q-21cd6eab.js",
      s_PDJwMEdiP0k: "q-21cd6eab.js",
      s_SiWhVz35RGQ: "q-21cd6eab.js",
      s_bJqynq84JNE: "q-c91db0c8.js",
      s_i3TsH9K5zHA: "q-3597dd63.js",
      s_qNQKMPyXq0Y: "q-3ff5d711.js",
      s_tYlbSh0ztf8: "q-3597dd63.js",
      s_xfr0dVJs0nA: "q-c91db0c8.js",
      s_xiOONLugCh0: "q-3ff5d711.js",
    },
    bundles: {
      "q-09a53073.js": {
        size: 222,
        imports: ["q-fdd30670.js"],
        origins: ["src/entry_onTagsKeyDown.js", "src/s_kg72eulq5cu.js"],
        symbols: ["s_KG72EULq5CU"],
      },
      "q-0cc8cf92.js": {
        size: 807,
        imports: ["q-4518e517.js", "q-fdd30670.js"],
        origins: [
          "src/entry_signin.js",
          "src/s_nhvqlaqnkg4.js",
          "src/s_s4xg6usreg4.js",
        ],
        symbols: ["s_NhvqLaQNKg4", "s_s4xG6uSrEg4"],
      },
      "q-14050470.js": {
        size: 116,
        imports: ["q-fdd30670.js"],
        origins: ["src/entry_FavoriteArtice.js", "src/s_uwtikfapo0s.js"],
        symbols: ["s_UwTikFAPo0s"],
      },
      "q-14dbc7af.js": {
        size: 731,
        imports: ["q-fdd30670.js"],
        dynamicImports: ["q-ba4d283d.js", "q-dc8b35fd.js", "q-e2fa6985.js"],
        origins: [
          "src/components/article/article.css",
          "src/components/article/article.tsx",
          "src/components/articles-list/articles-list.tsx",
          "src/components/feed-navigation/feed-navigation.css",
          "src/components/feed-navigation/feed-navigation.tsx",
        ],
      },
      "q-160e906f.js": {
        size: 263,
        imports: ["q-3b7c2bd4.js", "q-fdd30670.js"],
        origins: ["src/entry_postComment.js", "src/s_w51ngdlukdm.js"],
        symbols: ["s_W51ngDLuKDM"],
      },
      "q-17dda71d.js": {
        size: 862,
        imports: ["q-fdd30670.js"],
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
      "q-1d4e3858.js": {
        size: 2536,
        origins: [
          "node_modules/@builder.io/qwik-city/service-worker.mjs",
          "src/routes/service-worker.ts",
        ],
      },
      "q-21cd6eab.js": {
        size: 2710,
        imports: [
          "q-14dbc7af.js",
          "q-3b7c2bd4.js",
          "q-679a34b7.js",
          "q-d77478dc.js",
          "q-fdd30670.js",
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
      "q-26819c71.js": {
        size: 1097,
        imports: ["q-3b7c2bd4.js", "q-fdd30670.js"],
        dynamicImports: ["q-c91db0c8.js"],
        origins: [
          "src/entry_routes.js",
          "src/routes/home/home.css",
          "src/routes/home/home.tsx",
          "src/s_gthzheb0ude.js",
        ],
        symbols: ["s_GthzHEB0UDE"],
      },
      "q-3597dd63.js": {
        size: 1761,
        imports: ["q-3b7c2bd4.js", "q-fdd30670.js"],
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
      "q-3b7c2bd4.js": {
        size: 20595,
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
          "src/auth/auth.ts",
          "src/common/api.ts",
        ],
      },
      "q-3cdb0244.js": {
        size: 152,
        imports: ["q-fdd30670.js"],
        dynamicImports: ["q-aae0586b.js"],
        origins: [
          "src/components/article-tags-list/article-tags-list.css",
          "src/components/article-tags-list/article-tags-list.tsx",
        ],
      },
      "q-3ff5d711.js": {
        size: 2157,
        imports: [
          "q-3b7c2bd4.js",
          "q-3cdb0244.js",
          "q-4c827096.js",
          "q-f6bfc231.js",
          "q-fdd30670.js",
        ],
        dynamicImports: ["q-67276179.js", "q-e872c358.js", "q-f34b722b.js"],
        origins: [
          "src/entry__articleName_.js",
          "src/routes/article/[articleName]/article-header/article-header.css",
          "src/routes/article/[articleName]/article-header/article-header.tsx",
          "src/routes/article/[articleName]/comment/comment.css",
          "src/routes/article/[articleName]/comment/comment.tsx",
          "src/routes/article/[articleName]/commentForm/commentForm.css",
          "src/routes/article/[articleName]/commentForm/commentForm.tsx",
          "src/s_pud0ekr52ie.js",
          "src/s_qnqkmpyxq0y.js",
          "src/s_xioonlugch0.js",
        ],
        symbols: ["s_Pud0ekR52iE", "s_qNQKMPyXq0Y", "s_xiOONLugCh0"],
      },
      "q-4518e517.js": {
        size: 455,
        imports: ["q-fdd30670.js"],
        dynamicImports: ["q-0cc8cf92.js", "q-3b7c2bd4.js"],
        origins: ["src/routes/signin/index.tsx"],
      },
      "q-4c827096.js": {
        size: 360,
        imports: ["q-3b7c2bd4.js", "q-fdd30670.js"],
        dynamicImports: ["q-160e906f.js", "q-3ff5d711.js"],
        origins: [
          "src/routes/article/[articleName]/index.css",
          "src/routes/article/[articleName]/index.tsx",
        ],
      },
      "q-54611d8f.js": {
        size: 1581,
        imports: [
          "q-3b7c2bd4.js",
          "q-3cdb0244.js",
          "q-8346ad65.js",
          "q-fdd30670.js",
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
      "q-67276179.js": {
        size: 414,
        imports: ["q-d77478dc.js", "q-f6bfc231.js", "q-fdd30670.js"],
        origins: ["src/entry_Comment.js", "src/s_0taq7xle1tm.js"],
        symbols: ["s_0TAq7Xle1TM"],
      },
      "q-676e150c.js": {
        size: 1126,
        imports: ["q-3b7c2bd4.js", "q-794da136.js", "q-fdd30670.js"],
        origins: [
          "src/entry_register.js",
          "src/s_0voobervplu.js",
          "src/s_fuec2wnvmfm.js",
          "src/s_wo0duje1mmq.js",
        ],
        symbols: ["s_0vOoberVPlU", "s_FueC2WNvmfM", "s_wO0DUje1mMQ"],
      },
      "q-679a34b7.js": {
        size: 551,
        imports: ["q-3b7c2bd4.js", "q-fdd30670.js"],
        dynamicImports: ["q-21cd6eab.js"],
        origins: ["src/routes/profile/[profileName]/index.tsx"],
      },
      "q-794da136.js": {
        size: 615,
        imports: ["q-3b7c2bd4.js", "q-fdd30670.js"],
        dynamicImports: ["q-676e150c.js"],
        origins: [
          "src/routes/register/index.css",
          "src/routes/register/index.tsx",
        ],
      },
      "q-7b868b1a.js": {
        size: 719,
        imports: ["q-3b7c2bd4.js", "q-fdd30670.js"],
        dynamicImports: ["q-81c466c6.js"],
        origins: [
          "src/routes/settings/index.css",
          "src/routes/settings/index.tsx",
        ],
      },
      "q-7ce2ed40.js": {
        size: 934,
        imports: ["q-fdd30670.js"],
        origins: ["src/entry_SideMenu.js", "src/s_x0zyrxjwtca.js"],
        symbols: ["s_x0zYRXJwTCA"],
      },
      "q-81c466c6.js": {
        size: 1466,
        imports: ["q-3b7c2bd4.js", "q-7b868b1a.js", "q-fdd30670.js"],
        origins: [
          "src/entry_settings.js",
          "src/s_6mw9rtc0v04.js",
          "src/s_hptgpgghm0m.js",
          "src/s_w8hpn36lq0m.js",
        ],
        symbols: ["s_6Mw9RTC0v04", "s_HpTGPGghm0M", "s_w8hpn36lq0M"],
      },
      "q-8346ad65.js": {
        size: 961,
        imports: ["q-3b7c2bd4.js", "q-fdd30670.js"],
        dynamicImports: ["q-09a53073.js", "q-54611d8f.js"],
        origins: ["src/routes/editor/index.css", "src/routes/editor/index.tsx"],
      },
      "q-92c1355f.js": {
        size: 240,
        imports: ["q-fdd30670.js"],
        origins: ["src/entry_RouterOutlet.js", "src/s_nd8yk3ko22c.js"],
        symbols: ["s_nd8yk3KO22c"],
      },
      "q-aae0586b.js": {
        size: 580,
        imports: ["q-fdd30670.js"],
        origins: [
          "src/entry_ArticleTagsList.js",
          "src/s_7yrrcx6kkca.js",
          "src/s_lucn00zgmem.js",
        ],
        symbols: ["s_7yrRCx6kKcA", "s_LUCN00zgmeM"],
      },
      "q-ba4d283d.js": {
        size: 437,
        imports: ["q-3b7c2bd4.js", "q-fdd30670.js"],
        origins: ["src/entry_articles_list.js", "src/s_zao67wt8wti.js"],
        symbols: ["s_zaO67WT8WTI"],
      },
      "q-ba89ccb9.js": {
        size: 566,
        imports: ["q-fdd30670.js"],
        origins: [
          "src/entry_Tags.js",
          "src/s_1v06nvjv1dq.js",
          "src/s_tmyx7puyahu.js",
        ],
        symbols: ["s_1v06nvJV1DQ", "s_TMYX7PuYaHU"],
      },
      "q-c15a05fc.js": {
        size: 947,
        imports: ["q-fdd30670.js"],
        dynamicImports: [
          "q-4518e517.js",
          "q-4c827096.js",
          "q-679a34b7.js",
          "q-794da136.js",
          "q-7b868b1a.js",
          "q-8346ad65.js",
          "q-c97d96ac.js",
          "q-d268a782.js",
          "q-dcc7a818.js",
        ],
        origins: ["@qwik-city-plan"],
      },
      "q-c91db0c8.js": {
        size: 2830,
        imports: [
          "q-14dbc7af.js",
          "q-26819c71.js",
          "q-3b7c2bd4.js",
          "q-fdd30670.js",
        ],
        dynamicImports: ["q-ba89ccb9.js"],
        origins: [
          "src/components/tags/tags.css",
          "src/components/tags/tags.tsx",
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
      "q-c97d96ac.js": {
        size: 331,
        imports: ["q-3b7c2bd4.js", "q-fdd30670.js"],
        dynamicImports: ["q-f608cccd.js"],
        origins: ["src/routes/layout.tsx"],
      },
      "q-d268a782.js": {
        size: 166,
        imports: ["q-fdd30670.js"],
        dynamicImports: ["q-26819c71.js"],
        origins: ["src/routes/index.tsx"],
      },
      "q-d77478dc.js": {
        size: 147,
        imports: ["q-fdd30670.js"],
        dynamicImports: ["q-3597dd63.js"],
        origins: ["src/components/follow-user/follow-user.tsx"],
      },
      "q-dae975cb.js": {
        size: 1493,
        imports: ["q-fdd30670.js"],
        dynamicImports: ["q-c15a05fc.js"],
        origins: [
          "@builder.io/qwik/build",
          "src/entry_QwikCity.js",
          "src/s_aaalzkh0klq.js",
          "src/s_z1nvhyeppoi.js",
        ],
        symbols: ["s_AaAlzKH0KlQ", "s_z1nvHyEppoI"],
      },
      "q-dc8b35fd.js": {
        size: 730,
        imports: ["q-14dbc7af.js", "q-fdd30670.js"],
        origins: [
          "src/entry_FeedNavigation.js",
          "src/s_awjh06rg6n4.js",
          "src/s_v0wp50gwsba.js",
        ],
        symbols: ["s_AWJH06rg6N4", "s_v0WP50GwSBA"],
      },
      "q-dcc7a818.js": {
        size: 128,
        imports: ["q-fdd30670.js"],
        dynamicImports: ["q-1d4e3858.js"],
        origins: ["@qwik-city-entries"],
      },
      "q-e2fa6985.js": {
        size: 755,
        imports: [
          "q-3cdb0244.js",
          "q-d77478dc.js",
          "q-f6bfc231.js",
          "q-fdd30670.js",
        ],
        origins: ["src/entry_Article.js", "src/s_qnc01othilo.js"],
        symbols: ["s_qnC01OTHiLo"],
      },
      "q-e430c763.js": { size: 58, imports: ["q-fdd30670.js"] },
      "q-e872c358.js": {
        size: 1123,
        imports: [
          "q-3b7c2bd4.js",
          "q-3cdb0244.js",
          "q-3ff5d711.js",
          "q-4c827096.js",
          "q-d77478dc.js",
          "q-f6bfc231.js",
          "q-fdd30670.js",
        ],
        origins: [
          "src/entry_CommentForm.js",
          "src/s_2shpurnoq9c.js",
          "src/s_hx7lmfyx0ty.js",
        ],
        symbols: ["s_2ShPURnoq9c", "s_hX7lMFYx0tY"],
      },
      "q-f26e96bb.js": {
        size: 382,
        imports: ["q-fdd30670.js"],
        dynamicImports: ["q-7ce2ed40.js"],
        origins: [
          "src/components/side-menu/side-menu.css",
          "src/components/side-menu/side-menu.tsx",
          "src/entry_Header.js",
          "src/s_n0ekpr3hs08.js",
        ],
        symbols: ["s_N0EkpR3Hs08"],
      },
      "q-f34b722b.js": {
        size: 487,
        imports: ["q-d77478dc.js", "q-f6bfc231.js", "q-fdd30670.js"],
        origins: ["src/entry_ArticleHeader.js", "src/s_70zy5hlck6e.js"],
        symbols: ["s_70ZY5hLcK6E"],
      },
      "q-f608cccd.js": {
        size: 336,
        imports: ["q-3b7c2bd4.js", "q-c97d96ac.js", "q-fdd30670.js"],
        dynamicImports: ["q-f26e96bb.js"],
        origins: [
          "src/components/header/header.css",
          "src/components/header/header.tsx",
          "src/entry_Layout.js",
          "src/s_42v99d5vq0e.js",
        ],
        symbols: ["s_42v99d5vQ0E"],
      },
      "q-f6bfc231.js": {
        size: 1623,
        imports: ["q-d77478dc.js", "q-fdd30670.js"],
        dynamicImports: ["q-14050470.js"],
        origins: [
          "src/common/date-utils.ts",
          "src/components/favorite-article/favorite-article.css",
          "src/components/favorite-article/favorite-article.tsx",
          "src/routes/article/[articleName]/article-meta/article-meta.css",
          "src/routes/article/[articleName]/article-meta/article-meta.tsx",
        ],
      },
      "q-fb86d04c.js": {
        size: 1489,
        imports: ["q-fdd30670.js"],
        origins: ["src/entry_RouterHead.js", "src/s_uxi74zpmnys.js"],
        symbols: ["s_uxi74zpMnys"],
      },
      "q-fdd30670.js": {
        size: 65605,
        dynamicImports: [
          "q-17dda71d.js",
          "q-92c1355f.js",
          "q-dae975cb.js",
          "q-fb86d04c.js",
        ],
        origins: [
          "\0vite/preload-helper",
          "node_modules/@builder.io/qwik-city/index.qwik.mjs",
          "node_modules/@builder.io/qwik/core.mjs",
          "src/components/RouterHead/RouterHead.tsx",
          "src/global.css",
          "src/root.tsx",
        ],
      },
    },
    injections: [
      {
        tag: "link",
        location: "head",
        attributes: { rel: "stylesheet", href: "/build/q-c6b87acc.css" },
      },
      {
        tag: "link",
        location: "head",
        attributes: { rel: "stylesheet", href: "/build/q-35b0a60c.css" },
      },
      {
        tag: "link",
        location: "head",
        attributes: { rel: "stylesheet", href: "/build/q-28f7b572.css" },
      },
      {
        tag: "link",
        location: "head",
        attributes: { rel: "stylesheet", href: "/build/q-9f98e854.css" },
      },
      {
        tag: "link",
        location: "head",
        attributes: { rel: "stylesheet", href: "/build/q-0b08a423.css" },
      },
      {
        tag: "link",
        location: "head",
        attributes: { rel: "stylesheet", href: "/build/q-15a6ad84.css" },
      },
      {
        tag: "link",
        location: "head",
        attributes: { rel: "stylesheet", href: "/build/q-f372100c.css" },
      },
      {
        tag: "link",
        location: "head",
        attributes: { rel: "stylesheet", href: "/build/q-d20d8711.css" },
      },
      {
        tag: "link",
        location: "head",
        attributes: { rel: "stylesheet", href: "/build/q-20d67baa.css" },
      },
      {
        tag: "link",
        location: "head",
        attributes: { rel: "stylesheet", href: "/build/q-5bbd82c7.css" },
      },
      {
        tag: "link",
        location: "head",
        attributes: { rel: "stylesheet", href: "/build/q-24868486.css" },
      },
      {
        tag: "link",
        location: "head",
        attributes: { rel: "stylesheet", href: "/build/q-d7bae8f5.css" },
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
      qwik: "0.12.1",
      vite: "",
      rollup: "2.79.1",
      env: "node",
      os: "darwin",
      node: "18.0.0",
    },
  },
  $e = re(
    ae(() => {
      const e = ce(),
        s = le();
      return o(w, {
        children: [
          o("title", { children: "Qwik Realworld App" }),
          o("link", {
            href: "//code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css",
            rel: "stylesheet",
            type: "text/css",
          }),
          o("link", {
            href: "//fonts.googleapis.com/css?family=Titillium+Web:700|Source+Serif+Pro:400,700|Merriweather+Sans:400,700|Source+Sans+Pro:400,300,600,700,300italic,400italic,600italic,700italic",
            rel: "stylesheet",
            type: "text/css",
          }),
          o("link", {
            rel: "stylesheet",
            href: "//demo.productionready.io/main.css",
          }),
          o("meta", {
            name: "viewport",
            content: "width=device-width, initial-scale=1.0",
          }),
          o("link", {
            rel: "canonical",
            get href() {
              return s.href;
            },
            [V]: { href: W(s, "href") },
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
          o("link", {
            rel: "preconnect",
            href: "https://fonts.googleapis.com",
          }),
          o("link", {
            rel: "preconnect",
            href: "https://fonts.gstatic.com",
            crossOrigin: "",
          }),
          o("link", {
            href: "https://fonts.googleapis.com/css2?family=Poppins&display=swap",
            rel: "stylesheet",
          }),
          o("meta", { property: "og:site_name", content: "Qwik" }),
          o("meta", { name: "twitter:site", content: "@QwikDev" }),
          o("meta", { name: "twitter:title", content: "Qwik" }),
          e.meta.map((n) => o("meta", { ...n })),
          e.links.map((n) => o("link", { ...n })),
          e.styles.map((n) =>
            o("style", {
              ...n.props,
              get dangerouslySetInnerHTML() {
                return n.style;
              },
              [V]: { dangerouslySetInnerHTML: W(n, "style") },
            })
          ),
        ],
      });
    }, "s_uxi74zpMnys")
  ),
  He = () =>
    o(ue, {
      children: [
        o("head", { children: [o("meta", { charSet: "utf-8" }), o($e, {})] }),
        o("body", { children: [o(de, {}), o(me, {})] }),
      ],
    });
function Me(e) {
  return Ke(o(He, {}), {
    manifest: Ue,
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
export { Me as default };
