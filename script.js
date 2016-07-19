/*!
 * Modernizr v2.8.3
 * www.modernizr.com
 *
 * Copyright (c) Faruk Ates, Paul Irish, Alex Sexton
 * Available under the BSD and MIT licenses: www.modernizr.com/license/
 */
window.Modernizr = function (a, b, c) {
  function d(a) {
    t.cssText = a;
  }function e(a, b) {
    return d(x.join(a + ";") + (b || ""));
  }function f(a, b) {
    return typeof a === b;
  }function g(a, b) {
    return !!~("" + a).indexOf(b);
  }function h(a, b) {
    for (var d in a) {
      var e = a[d];if (!g(e, "-") && t[e] !== c) return "pfx" == b ? e : !0;
    }return !1;
  }function i(a, b, d) {
    for (var e in a) {
      var g = b[a[e]];if (g !== c) return d === !1 ? a[e] : f(g, "function") ? g.bind(d || b) : g;
    }return !1;
  }function j(a, b, c) {
    var d = a.charAt(0).toUpperCase() + a.slice(1),
        e = (a + " " + z.join(d + " ") + d).split(" ");return f(b, "string") || f(b, "undefined") ? h(e, b) : (e = (a + " " + A.join(d + " ") + d).split(" "), i(e, b, c));
  }function k() {
    o.input = function (c) {
      for (var d = 0, e = c.length; e > d; d++) E[c[d]] = !!(c[d] in u);return E.list && (E.list = !(!b.createElement("datalist") || !a.HTMLDataListElement)), E;
    }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")), o.inputtypes = function (a) {
      for (var d, e, f, g = 0, h = a.length; h > g; g++) u.setAttribute("type", e = a[g]), d = "text" !== u.type, d && (u.value = v, u.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(e) && u.style.WebkitAppearance !== c ? (q.appendChild(u), f = b.defaultView, d = f.getComputedStyle && "textfield" !== f.getComputedStyle(u, null).WebkitAppearance && 0 !== u.offsetHeight, q.removeChild(u)) : /^(search|tel)$/.test(e) || (d = /^(url|email)$/.test(e) ? u.checkValidity && u.checkValidity() === !1 : u.value != v)), D[a[g]] = !!d;return D;
    }("search tel url email datetime date month week time datetime-local number range color".split(" "));
  }var l,
      m,
      n = "2.8.3",
      o = {},
      p = !0,
      q = b.documentElement,
      r = "modernizr",
      s = b.createElement(r),
      t = s.style,
      u = b.createElement("input"),
      v = ":)",
      w = {}.toString,
      x = " -webkit- -moz- -o- -ms- ".split(" "),
      y = "Webkit Moz O ms",
      z = y.split(" "),
      A = y.toLowerCase().split(" "),
      B = { svg: "http://www.w3.org/2000/svg" },
      C = {},
      D = {},
      E = {},
      F = [],
      G = F.slice,
      H = function (a, c, d, e) {
    var f,
        g,
        h,
        i,
        j = b.createElement("div"),
        k = b.body,
        l = k || b.createElement("body");if (parseInt(d, 10)) for (; d--;) h = b.createElement("div"), h.id = e ? e[d] : r + (d + 1), j.appendChild(h);return f = ["&#173;", '<style id="s', r, '">', a, "</style>"].join(""), j.id = r, (k ? j : l).innerHTML += f, l.appendChild(j), k || (l.style.background = "", l.style.overflow = "hidden", i = q.style.overflow, q.style.overflow = "hidden", q.appendChild(l)), g = c(j, a), k ? j.parentNode.removeChild(j) : (l.parentNode.removeChild(l), q.style.overflow = i), !!g;
  },
      I = function (b) {
    var c = a.matchMedia || a.msMatchMedia;if (c) return c(b) && c(b).matches || !1;var d;return H("@media " + b + " { #" + r + " { position: absolute; } }", function (b) {
      d = "absolute" == (a.getComputedStyle ? getComputedStyle(b, null) : b.currentStyle).position;
    }), d;
  },
      J = function () {
    function a(a, e) {
      e = e || b.createElement(d[a] || "div"), a = "on" + a;var g = a in e;return g || (e.setAttribute || (e = b.createElement("div")), e.setAttribute && e.removeAttribute && (e.setAttribute(a, ""), g = f(e[a], "function"), f(e[a], "undefined") || (e[a] = c), e.removeAttribute(a))), e = null, g;
    }var d = { select: "input", change: "input", submit: "form", reset: "form", error: "img", load: "img", abort: "img" };return a;
  }(),
      K = {}.hasOwnProperty;m = f(K, "undefined") || f(K.call, "undefined") ? function (a, b) {
    return b in a && f(a.constructor.prototype[b], "undefined");
  } : function (a, b) {
    return K.call(a, b);
  }, Function.prototype.bind || (Function.prototype.bind = function (a) {
    var b = this;if ("function" != typeof b) throw new TypeError();var c = G.call(arguments, 1),
        d = function () {
      if (this instanceof d) {
        var e = function () {};e.prototype = b.prototype;var f = new e(),
            g = b.apply(f, c.concat(G.call(arguments)));return Object(g) === g ? g : f;
      }return b.apply(a, c.concat(G.call(arguments)));
    };return d;
  }), C.flexbox = function () {
    return j("flexWrap");
  }, C.flexboxlegacy = function () {
    return j("boxDirection");
  }, C.canvas = function () {
    var a = b.createElement("canvas");return !(!a.getContext || !a.getContext("2d"));
  }, C.canvastext = function () {
    return !(!o.canvas || !f(b.createElement("canvas").getContext("2d").fillText, "function"));
  }, C.webgl = function () {
    return !!a.WebGLRenderingContext;
  }, C.touch = function () {
    var c;return "ontouchstart" in a || a.DocumentTouch && b instanceof DocumentTouch ? c = !0 : H(["@media (", x.join("touch-enabled),("), r, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function (a) {
      c = 9 === a.offsetTop;
    }), c;
  }, C.geolocation = function () {
    return "geolocation" in navigator;
  }, C.postmessage = function () {
    return !!a.postMessage;
  }, C.websqldatabase = function () {
    return !!a.openDatabase;
  }, C.indexedDB = function () {
    return !!j("indexedDB", a);
  }, C.hashchange = function () {
    return J("hashchange", a) && (b.documentMode === c || b.documentMode > 7);
  }, C.history = function () {
    return !(!a.history || !history.pushState);
  }, C.draganddrop = function () {
    var a = b.createElement("div");return "draggable" in a || "ondragstart" in a && "ondrop" in a;
  }, C.websockets = function () {
    return "WebSocket" in a || "MozWebSocket" in a;
  }, C.rgba = function () {
    return d("background-color:rgba(150,255,150,.5)"), g(t.backgroundColor, "rgba");
  }, C.hsla = function () {
    return d("background-color:hsla(120,40%,100%,.5)"), g(t.backgroundColor, "rgba") || g(t.backgroundColor, "hsla");
  }, C.multiplebgs = function () {
    return d("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(t.background);
  }, C.backgroundsize = function () {
    return j("backgroundSize");
  }, C.borderimage = function () {
    return j("borderImage");
  }, C.borderradius = function () {
    return j("borderRadius");
  }, C.boxshadow = function () {
    return j("boxShadow");
  }, C.textshadow = function () {
    return "" === b.createElement("div").style.textShadow;
  }, C.opacity = function () {
    return e("opacity:.55"), /^0.55$/.test(t.opacity);
  }, C.cssanimations = function () {
    return j("animationName");
  }, C.csscolumns = function () {
    return j("columnCount");
  }, C.cssgradients = function () {
    var a = "background-image:",
        b = "gradient(linear,left top,right bottom,from(#9f9),to(white));",
        c = "linear-gradient(left top,#9f9, white);";return d((a + "-webkit- ".split(" ").join(b + a) + x.join(c + a)).slice(0, -a.length)), g(t.backgroundImage, "gradient");
  }, C.cssreflections = function () {
    return j("boxReflect");
  }, C.csstransforms = function () {
    return !!j("transform");
  }, C.csstransforms3d = function () {
    var a = !!j("perspective");return a && "webkitPerspective" in q.style && H("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function (b) {
      a = 9 === b.offsetLeft && 3 === b.offsetHeight;
    }), a;
  }, C.csstransitions = function () {
    return j("transition");
  }, C.fontface = function () {
    var a;return H('@font-face {font-family:"font";src:url("https://")}', function (c, d) {
      var e = b.getElementById("smodernizr"),
          f = e.sheet || e.styleSheet,
          g = f ? f.cssRules && f.cssRules[0] ? f.cssRules[0].cssText : f.cssText || "" : "";a = /src/i.test(g) && 0 === g.indexOf(d.split(" ")[0]);
    }), a;
  }, C.generatedcontent = function () {
    var a;return H(["#", r, "{font:0/0 a}#", r, ':after{content:"', v, '";visibility:hidden;font:3px/1 a}'].join(""), function (b) {
      a = b.offsetHeight >= 3;
    }), a;
  }, C.video = function () {
    var a = b.createElement("video"),
        c = !1;try {
      (c = !!a.canPlayType) && (c = new Boolean(c), c.ogg = a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), c.h264 = a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), c.webm = a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""));
    } catch (d) {}return c;
  }, C.audio = function () {
    var a = b.createElement("audio"),
        c = !1;try {
      (c = !!a.canPlayType) && (c = new Boolean(c), c.ogg = a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), c.mp3 = a.canPlayType("audio/mpeg;").replace(/^no$/, ""), c.wav = a.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), c.m4a = (a.canPlayType("audio/x-m4a;") || a.canPlayType("audio/aac;")).replace(/^no$/, ""));
    } catch (d) {}return c;
  }, C.localstorage = function () {
    try {
      return localStorage.setItem(r, r), localStorage.removeItem(r), !0;
    } catch (a) {
      return !1;
    }
  }, C.sessionstorage = function () {
    try {
      return sessionStorage.setItem(r, r), sessionStorage.removeItem(r), !0;
    } catch (a) {
      return !1;
    }
  }, C.webworkers = function () {
    return !!a.Worker;
  }, C.applicationcache = function () {
    return !!a.applicationCache;
  }, C.svg = function () {
    return !!b.createElementNS && !!b.createElementNS(B.svg, "svg").createSVGRect;
  }, C.inlinesvg = function () {
    var a = b.createElement("div");return a.innerHTML = "<svg/>", (a.firstChild && a.firstChild.namespaceURI) == B.svg;
  }, C.smil = function () {
    return !!b.createElementNS && /SVGAnimate/.test(w.call(b.createElementNS(B.svg, "animate")));
  }, C.svgclippaths = function () {
    return !!b.createElementNS && /SVGClipPath/.test(w.call(b.createElementNS(B.svg, "clipPath")));
  };for (var L in C) m(C, L) && (l = L.toLowerCase(), o[l] = C[L](), F.push((o[l] ? "" : "no-") + l));return o.input || k(), o.addTest = function (a, b) {
    if ("object" == typeof a) for (var d in a) m(a, d) && o.addTest(d, a[d]);else {
      if (a = a.toLowerCase(), o[a] !== c) return o;b = "function" == typeof b ? b() : b, "undefined" != typeof p && p && (q.className += " " + (b ? "" : "no-") + a), o[a] = b;
    }return o;
  }, d(""), s = u = null, function (a, b) {
    function c(a, b) {
      var c = a.createElement("p"),
          d = a.getElementsByTagName("head")[0] || a.documentElement;return c.innerHTML = "x<style>" + b + "</style>", d.insertBefore(c.lastChild, d.firstChild);
    }function d() {
      var a = s.elements;return "string" == typeof a ? a.split(" ") : a;
    }function e(a) {
      var b = r[a[p]];return b || (b = {}, q++, a[p] = q, r[q] = b), b;
    }function f(a, c, d) {
      if (c || (c = b), k) return c.createElement(a);d || (d = e(c));var f;return f = d.cache[a] ? d.cache[a].cloneNode() : o.test(a) ? (d.cache[a] = d.createElem(a)).cloneNode() : d.createElem(a), !f.canHaveChildren || n.test(a) || f.tagUrn ? f : d.frag.appendChild(f);
    }function g(a, c) {
      if (a || (a = b), k) return a.createDocumentFragment();c = c || e(a);for (var f = c.frag.cloneNode(), g = 0, h = d(), i = h.length; i > g; g++) f.createElement(h[g]);return f;
    }function h(a, b) {
      b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()), a.createElement = function (c) {
        return s.shivMethods ? f(c, a, b) : b.createElem(c);
      }, a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + d().join().replace(/[\w\-]+/g, function (a) {
        return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")';
      }) + ");return n}")(s, b.frag);
    }function i(a) {
      a || (a = b);var d = e(a);return !s.shivCSS || j || d.hasCSS || (d.hasCSS = !!c(a, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), k || h(a, d), a;
    }var j,
        k,
        l = "3.7.0",
        m = a.html5 || {},
        n = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
        o = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
        p = "_html5shiv",
        q = 0,
        r = {};!function () {
      try {
        var a = b.createElement("a");a.innerHTML = "<xyz></xyz>", j = "hidden" in a, k = 1 == a.childNodes.length || function () {
          b.createElement("a");var a = b.createDocumentFragment();return "undefined" == typeof a.cloneNode || "undefined" == typeof a.createDocumentFragment || "undefined" == typeof a.createElement;
        }();
      } catch (c) {
        j = !0, k = !0;
      }
    }();var s = { elements: m.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video", version: l, shivCSS: m.shivCSS !== !1, supportsUnknownElements: k, shivMethods: m.shivMethods !== !1, type: "default", shivDocument: i, createElement: f, createDocumentFragment: g };a.html5 = s, i(b);
  }(this, b), o._version = n, o._prefixes = x, o._domPrefixes = A, o._cssomPrefixes = z, o.mq = I, o.hasEvent = J, o.testProp = function (a) {
    return h([a]);
  }, o.testAllProps = j, o.testStyles = H, o.prefixed = function (a, b, c) {
    return b ? j(a, b, c) : j(a, "pfx");
  }, q.className = q.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (p ? " js " + F.join(" ") : ""), o;
}(this, this.document);
/**
 * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
 *
 * @version 1.0.3
 * @codingstandard ftlabs-jsv2
 * @copyright The Financial Times Limited [All Rights Reserved]
 * @license MIT License (see LICENSE.txt)
 */
function FastClick(a, b) {
  "use strict";
  function c(a, b) {
    return function () {
      return a.apply(b, arguments);
    };
  }var d;if (b = b || {}, this.trackingClick = !1, this.trackingClickStart = 0, this.targetElement = null, this.touchStartX = 0, this.touchStartY = 0, this.lastTouchIdentifier = 0, this.touchBoundary = b.touchBoundary || 10, this.layer = a, this.tapDelay = b.tapDelay || 200, !FastClick.notNeeded(a)) {
    for (var e = ["onMouse", "onClick", "onTouchStart", "onTouchMove", "onTouchEnd", "onTouchCancel"], f = this, g = 0, h = e.length; h > g; g++) f[e[g]] = c(f[e[g]], f);deviceIsAndroid && (a.addEventListener("mouseover", this.onMouse, !0), a.addEventListener("mousedown", this.onMouse, !0), a.addEventListener("mouseup", this.onMouse, !0)), a.addEventListener("click", this.onClick, !0), a.addEventListener("touchstart", this.onTouchStart, !1), a.addEventListener("touchmove", this.onTouchMove, !1), a.addEventListener("touchend", this.onTouchEnd, !1), a.addEventListener("touchcancel", this.onTouchCancel, !1), Event.prototype.stopImmediatePropagation || (a.removeEventListener = function (b, c, d) {
      var e = Node.prototype.removeEventListener;"click" === b ? e.call(a, b, c.hijacked || c, d) : e.call(a, b, c, d);
    }, a.addEventListener = function (b, c, d) {
      var e = Node.prototype.addEventListener;"click" === b ? e.call(a, b, c.hijacked || (c.hijacked = function (a) {
        a.propagationStopped || c(a);
      }), d) : e.call(a, b, c, d);
    }), "function" == typeof a.onclick && (d = a.onclick, a.addEventListener("click", function (a) {
      d(a);
    }, !1), a.onclick = null);
  }
}var deviceIsAndroid = navigator.userAgent.indexOf("Android") > 0,
    deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent),
    deviceIsIOS4 = deviceIsIOS && /OS 4_\d(_\d)?/.test(navigator.userAgent),
    deviceIsIOSWithBadTarget = deviceIsIOS && /OS ([6-9]|\d{2})_\d/.test(navigator.userAgent),
    deviceIsBlackBerry10 = navigator.userAgent.indexOf("BB10") > 0;FastClick.prototype.needsClick = function (a) {
  "use strict";
  switch (a.nodeName.toLowerCase()) {case "button":case "select":case "textarea":
      if (a.disabled) return !0;break;case "input":
      if (deviceIsIOS && "file" === a.type || a.disabled) return !0;break;case "label":case "video":
      return !0;}return (/\bneedsclick\b/.test(a.className)
  );
}, FastClick.prototype.needsFocus = function (a) {
  "use strict";
  switch (a.nodeName.toLowerCase()) {case "textarea":
      return !0;case "select":
      return !deviceIsAndroid;case "input":
      switch (a.type) {case "button":case "checkbox":case "file":case "image":case "radio":case "submit":
          return !1;}return !a.disabled && !a.readOnly;default:
      return (/\bneedsfocus\b/.test(a.className)
      );}
}, FastClick.prototype.sendClick = function (a, b) {
  "use strict";
  var c, d;document.activeElement && document.activeElement !== a && document.activeElement.blur(), d = b.changedTouches[0], c = document.createEvent("MouseEvents"), c.initMouseEvent(this.determineEventType(a), !0, !0, window, 1, d.screenX, d.screenY, d.clientX, d.clientY, !1, !1, !1, !1, 0, null), c.forwardedTouchEvent = !0, a.dispatchEvent(c);
}, FastClick.prototype.determineEventType = function (a) {
  "use strict";
  return deviceIsAndroid && "select" === a.tagName.toLowerCase() ? "mousedown" : "click";
}, FastClick.prototype.focus = function (a) {
  "use strict";
  var b;deviceIsIOS && a.setSelectionRange && 0 !== a.type.indexOf("date") && "time" !== a.type ? (b = a.value.length, a.setSelectionRange(b, b)) : a.focus();
}, FastClick.prototype.updateScrollParent = function (a) {
  "use strict";
  var b, c;if (b = a.fastClickScrollParent, !b || !b.contains(a)) {
    c = a;do {
      if (c.scrollHeight > c.offsetHeight) {
        b = c, a.fastClickScrollParent = c;break;
      }c = c.parentElement;
    } while (c);
  }b && (b.fastClickLastScrollTop = b.scrollTop);
}, FastClick.prototype.getTargetElementFromEventTarget = function (a) {
  "use strict";
  return a.nodeType === Node.TEXT_NODE ? a.parentNode : a;
}, FastClick.prototype.onTouchStart = function (a) {
  "use strict";
  var b, c, d;if (a.targetTouches.length > 1) return !0;if (b = this.getTargetElementFromEventTarget(a.target), c = a.targetTouches[0], deviceIsIOS) {
    if (d = window.getSelection(), d.rangeCount && !d.isCollapsed) return !0;if (!deviceIsIOS4) {
      if (c.identifier && c.identifier === this.lastTouchIdentifier) return a.preventDefault(), !1;this.lastTouchIdentifier = c.identifier, this.updateScrollParent(b);
    }
  }return this.trackingClick = !0, this.trackingClickStart = a.timeStamp, this.targetElement = b, this.touchStartX = c.pageX, this.touchStartY = c.pageY, a.timeStamp - this.lastClickTime < this.tapDelay && a.preventDefault(), !0;
}, FastClick.prototype.touchHasMoved = function (a) {
  "use strict";
  var b = a.changedTouches[0],
      c = this.touchBoundary;return Math.abs(b.pageX - this.touchStartX) > c || Math.abs(b.pageY - this.touchStartY) > c ? !0 : !1;
}, FastClick.prototype.onTouchMove = function (a) {
  "use strict";
  return this.trackingClick ? ((this.targetElement !== this.getTargetElementFromEventTarget(a.target) || this.touchHasMoved(a)) && (this.trackingClick = !1, this.targetElement = null), !0) : !0;
}, FastClick.prototype.findControl = function (a) {
  "use strict";
  return void 0 !== a.control ? a.control : a.htmlFor ? document.getElementById(a.htmlFor) : a.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea");
}, FastClick.prototype.onTouchEnd = function (a) {
  "use strict";
  var b,
      c,
      d,
      e,
      f,
      g = this.targetElement;if (!this.trackingClick) return !0;if (a.timeStamp - this.lastClickTime < this.tapDelay) return this.cancelNextClick = !0, !0;if (this.cancelNextClick = !1, this.lastClickTime = a.timeStamp, c = this.trackingClickStart, this.trackingClick = !1, this.trackingClickStart = 0, deviceIsIOSWithBadTarget && (f = a.changedTouches[0], g = document.elementFromPoint(f.pageX - window.pageXOffset, f.pageY - window.pageYOffset) || g, g.fastClickScrollParent = this.targetElement.fastClickScrollParent), d = g.tagName.toLowerCase(), "label" === d) {
    if (b = this.findControl(g)) {
      if (this.focus(g), deviceIsAndroid) return !1;g = b;
    }
  } else if (this.needsFocus(g)) return a.timeStamp - c > 100 || deviceIsIOS && window.top !== window && "input" === d ? (this.targetElement = null, !1) : (this.focus(g), this.sendClick(g, a), deviceIsIOS && "select" === d || (this.targetElement = null, a.preventDefault()), !1);return deviceIsIOS && !deviceIsIOS4 && (e = g.fastClickScrollParent, e && e.fastClickLastScrollTop !== e.scrollTop) ? !0 : (this.needsClick(g) || (a.preventDefault(), this.sendClick(g, a)), !1);
}, FastClick.prototype.onTouchCancel = function () {
  "use strict";
  this.trackingClick = !1, this.targetElement = null;
}, FastClick.prototype.onMouse = function (a) {
  "use strict";
  return this.targetElement ? a.forwardedTouchEvent ? !0 : a.cancelable && (!this.needsClick(this.targetElement) || this.cancelNextClick) ? (a.stopImmediatePropagation ? a.stopImmediatePropagation() : a.propagationStopped = !0, a.stopPropagation(), a.preventDefault(), !1) : !0 : !0;
}, FastClick.prototype.onClick = function (a) {
  "use strict";
  var b;return this.trackingClick ? (this.targetElement = null, this.trackingClick = !1, !0) : "submit" === a.target.type && 0 === a.detail ? !0 : (b = this.onMouse(a), b || (this.targetElement = null), b);
}, FastClick.prototype.destroy = function () {
  "use strict";
  var a = this.layer;deviceIsAndroid && (a.removeEventListener("mouseover", this.onMouse, !0), a.removeEventListener("mousedown", this.onMouse, !0), a.removeEventListener("mouseup", this.onMouse, !0)), a.removeEventListener("click", this.onClick, !0), a.removeEventListener("touchstart", this.onTouchStart, !1), a.removeEventListener("touchmove", this.onTouchMove, !1), a.removeEventListener("touchend", this.onTouchEnd, !1), a.removeEventListener("touchcancel", this.onTouchCancel, !1);
}, FastClick.notNeeded = function (a) {
  "use strict";
  var b, c, d;if ("undefined" == typeof window.ontouchstart) return !0;if (c = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1]) {
    if (!deviceIsAndroid) return !0;if (b = document.querySelector("meta[name=viewport]")) {
      if (-1 !== b.content.indexOf("user-scalable=no")) return !0;if (c > 31 && document.documentElement.scrollWidth <= window.outerWidth) return !0;
    }
  }if (deviceIsBlackBerry10 && (d = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/), d[1] >= 10 && d[2] >= 3 && (b = document.querySelector("meta[name=viewport]")))) {
    if (-1 !== b.content.indexOf("user-scalable=no")) return !0;if (document.documentElement.scrollWidth <= window.outerWidth) return !0;
  }return "none" === a.style.msTouchAction ? !0 : !1;
}, FastClick.attach = function (a, b) {
  "use strict";
  return new FastClick(a, b);
}, "function" == typeof define && "object" == typeof define.amd && define.amd ? define(function () {
  "use strict";
  return FastClick;
}) : "undefined" != typeof module && module.exports ? (module.exports = FastClick.attach, module.exports.FastClick = FastClick) : window.FastClick = FastClick;
/*! http://mths.be/placeholder v2.0.8 by @mathias */
!function (a, b, c) {
  function d(a) {
    var b = {},
        d = /^jQuery\d+$/;return c.each(a.attributes, function (a, c) {
      c.specified && !d.test(c.name) && (b[c.name] = c.value);
    }), b;
  }function e(a, b) {
    var d = this,
        e = c(d);if (d.value == e.attr("placeholder") && e.hasClass("placeholder")) if (e.data("placeholder-password")) {
      if (e = e.hide().next().show().attr("id", e.removeAttr("id").data("placeholder-id")), a === !0) return e[0].value = b;e.focus();
    } else d.value = "", e.removeClass("placeholder"), d == g() && d.select();
  }function f() {
    var a,
        b = this,
        f = c(b),
        g = this.id;if ("" == b.value) {
      if ("password" == b.type) {
        if (!f.data("placeholder-textinput")) {
          try {
            a = f.clone().attr({ type: "text" });
          } catch (h) {
            a = c("<input>").attr(c.extend(d(this), { type: "text" }));
          }a.removeAttr("name").data({ "placeholder-password": f, "placeholder-id": g }).bind("focus.placeholder", e), f.data({ "placeholder-textinput": a, "placeholder-id": g }).before(a);
        }f = f.removeAttr("id").hide().prev().attr("id", g).show();
      }f.addClass("placeholder"), f[0].value = f.attr("placeholder");
    } else f.removeClass("placeholder");
  }function g() {
    try {
      return b.activeElement;
    } catch (a) {}
  }var h,
      i,
      j = "[object OperaMini]" == Object.prototype.toString.call(a.operamini),
      k = "placeholder" in b.createElement("input") && !j,
      l = "placeholder" in b.createElement("textarea") && !j,
      m = c.fn,
      n = c.valHooks,
      o = c.propHooks;k && l ? (i = m.placeholder = function () {
    return this;
  }, i.input = i.textarea = !0) : (i = m.placeholder = function () {
    var a = this;return a.filter((k ? "textarea" : ":input") + "[placeholder]").not(".placeholder").bind({ "focus.placeholder": e, "blur.placeholder": f }).data("placeholder-enabled", !0).trigger("blur.placeholder"), a;
  }, i.input = k, i.textarea = l, h = { get: function (a) {
      var b = c(a),
          d = b.data("placeholder-password");return d ? d[0].value : b.data("placeholder-enabled") && b.hasClass("placeholder") ? "" : a.value;
    }, set: function (a, b) {
      var d = c(a),
          h = d.data("placeholder-password");return h ? h[0].value = b : d.data("placeholder-enabled") ? ("" == b ? (a.value = b, a != g() && f.call(a)) : d.hasClass("placeholder") ? e.call(a, !0, b) || (a.value = b) : a.value = b, d) : a.value = b;
    } }, k || (n.input = h, o.value = h), l || (n.textarea = h, o.value = h), c(function () {
    c(b).delegate("form", "submit.placeholder", function () {
      var a = c(".placeholder", this).each(e);setTimeout(function () {
        a.each(f);
      }, 10);
    });
  }), c(a).bind("beforeunload.placeholder", function () {
    c(".placeholder").each(function () {
      this.value = "";
    });
  }));
}(this, document, jQuery);
/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
!function (a) {
  "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : jQuery);
}(function (a) {
  function b(a) {
    return h.raw ? a : encodeURIComponent(a);
  }function c(a) {
    return h.raw ? a : decodeURIComponent(a);
  }function d(a) {
    return b(h.json ? JSON.stringify(a) : String(a));
  }function e(a) {
    0 === a.indexOf('"') && (a = a.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));try {
      return a = decodeURIComponent(a.replace(g, " ")), h.json ? JSON.parse(a) : a;
    } catch (b) {}
  }function f(b, c) {
    var d = h.raw ? b : e(b);return a.isFunction(c) ? c(d) : d;
  }var g = /\+/g,
      h = a.cookie = function (e, g, i) {
    if (void 0 !== g && !a.isFunction(g)) {
      if (i = a.extend({}, h.defaults, i), "number" == typeof i.expires) {
        var j = i.expires,
            k = i.expires = new Date();k.setTime(+k + 864e5 * j);
      }return document.cookie = [b(e), "=", d(g), i.expires ? "; expires=" + i.expires.toUTCString() : "", i.path ? "; path=" + i.path : "", i.domain ? "; domain=" + i.domain : "", i.secure ? "; secure" : ""].join("");
    }for (var l = e ? void 0 : {}, m = document.cookie ? document.cookie.split("; ") : [], n = 0, o = m.length; o > n; n++) {
      var p = m[n].split("="),
          q = c(p.shift()),
          r = p.join("=");if (e && e === q) {
        l = f(r, g);break;
      }e || void 0 === (r = f(r)) || (l[q] = r);
    }return l;
  };h.defaults = {}, a.removeCookie = function (b, c) {
    return void 0 === a.cookie(b) ? !1 : (a.cookie(b, "", a.extend({}, c, { expires: -1 })), !a.cookie(b));
  };
});
// Snap.svg 0.2.0
// 
// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
// http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
// 
// build: 2013-12-23
!function (a) {
  var b,
      c,
      d = "0.4.2",
      e = "hasOwnProperty",
      f = /[\.\/]/,
      g = "*",
      h = function () {},
      i = function (a, b) {
    return a - b;
  },
      j = { n: {} },
      k = function (a, d) {
    a = String(a);var e,
        f = c,
        g = Array.prototype.slice.call(arguments, 2),
        h = k.listeners(a),
        j = 0,
        l = [],
        m = {},
        n = [],
        o = b;b = a, c = 0;for (var p = 0, q = h.length; q > p; p++) "zIndex" in h[p] && (l.push(h[p].zIndex), h[p].zIndex < 0 && (m[h[p].zIndex] = h[p]));for (l.sort(i); l[j] < 0;) if (e = m[l[j++]], n.push(e.apply(d, g)), c) return c = f, n;for (p = 0; q > p; p++) if (e = h[p], "zIndex" in e) {
      if (e.zIndex == l[j]) {
        if (n.push(e.apply(d, g)), c) break;do if (j++, e = m[l[j]], e && n.push(e.apply(d, g)), c) break; while (e);
      } else m[e.zIndex] = e;
    } else if (n.push(e.apply(d, g)), c) break;return c = f, b = o, n.length ? n : null;
  };k._events = j, k.listeners = function (a) {
    var b,
        c,
        d,
        e,
        h,
        i,
        k,
        l,
        m = a.split(f),
        n = j,
        o = [n],
        p = [];for (e = 0, h = m.length; h > e; e++) {
      for (l = [], i = 0, k = o.length; k > i; i++) for (n = o[i].n, c = [n[m[e]], n[g]], d = 2; d--;) b = c[d], b && (l.push(b), p = p.concat(b.f || []));o = l;
    }return p;
  }, k.on = function (a, b) {
    if (a = String(a), "function" != typeof b) return function () {};for (var c = a.split(f), d = j, e = 0, g = c.length; g > e; e++) d = d.n, d = d.hasOwnProperty(c[e]) && d[c[e]] || (d[c[e]] = { n: {} });for (d.f = d.f || [], e = 0, g = d.f.length; g > e; e++) if (d.f[e] == b) return h;return d.f.push(b), function (a) {
      +a == +a && (b.zIndex = +a);
    };
  }, k.f = function (a) {
    var b = [].slice.call(arguments, 1);return function () {
      k.apply(null, [a, null].concat(b).concat([].slice.call(arguments, 0)));
    };
  }, k.stop = function () {
    c = 1;
  }, k.nt = function (a) {
    return a ? new RegExp("(?:\\.|\\/|^)" + a + "(?:\\.|\\/|$)").test(b) : b;
  }, k.nts = function () {
    return b.split(f);
  }, k.off = k.unbind = function (a, b) {
    if (!a) return k._events = j = { n: {} }, void 0;var c,
        d,
        h,
        i,
        l,
        m,
        n,
        o = a.split(f),
        p = [j];for (i = 0, l = o.length; l > i; i++) for (m = 0; m < p.length; m += h.length - 2) {
      if (h = [m, 1], c = p[m].n, o[i] != g) c[o[i]] && h.push(c[o[i]]);else for (d in c) c[e](d) && h.push(c[d]);p.splice.apply(p, h);
    }for (i = 0, l = p.length; l > i; i++) for (c = p[i]; c.n;) {
      if (b) {
        if (c.f) {
          for (m = 0, n = c.f.length; n > m; m++) if (c.f[m] == b) {
            c.f.splice(m, 1);break;
          }!c.f.length && delete c.f;
        }for (d in c.n) if (c.n[e](d) && c.n[d].f) {
          var q = c.n[d].f;for (m = 0, n = q.length; n > m; m++) if (q[m] == b) {
            q.splice(m, 1);break;
          }!q.length && delete c.n[d].f;
        }
      } else {
        delete c.f;for (d in c.n) c.n[e](d) && c.n[d].f && delete c.n[d].f;
      }c = c.n;
    }
  }, k.once = function (a, b) {
    var c = function () {
      return k.unbind(a, c), b.apply(this, arguments);
    };return k.on(a, c);
  }, k.version = d, k.toString = function () {
    return "You are running Eve " + d;
  }, "undefined" != typeof module && module.exports ? module.exports = k : "undefined" != typeof define ? define("eve", [], function () {
    return k;
  }) : a.eve = k;
}(this), function (a, b) {
  "function" == typeof define && define.amd ? define(["eve"], function (c) {
    return b(a, c);
  }) : b(a, a.eve);
}(this, function (a, b) {
  var c = function (b) {
    var c = {},
        d = a.requestAnimationFrame || a.webkitRequestAnimationFrame || a.mozRequestAnimationFrame || a.oRequestAnimationFrame || a.msRequestAnimationFrame || function (a) {
      setTimeout(a, 16);
    },
        e = Array.isArray || function (a) {
      return a instanceof Array || "[object Array]" == Object.prototype.toString.call(a);
    },
        f = 0,
        g = "M" + (+new Date()).toString(36),
        h = function () {
      return g + (f++).toString(36);
    },
        i = Date.now || function () {
      return +new Date();
    },
        j = function (a) {
      var b = this;if (null == a) return b.s;var c = b.s - a;b.b += b.dur * c, b.B += b.dur * c, b.s = a;
    },
        k = function (a) {
      var b = this;return null == a ? b.spd : (b.spd = a, void 0);
    },
        l = function (a) {
      var b = this;return null == a ? b.dur : (b.s = b.s * a / b.dur, b.dur = a, void 0);
    },
        m = function () {
      var a = this;delete c[a.id], b("mina.stop." + a.id, a);
    },
        n = function () {
      var a = this;a.pdif || (delete c[a.id], a.pdif = a.get() - a.b);
    },
        o = function () {
      var a = this;a.pdif && (a.b = a.get() - a.pdif, delete a.pdif, c[a.id] = a);
    },
        p = function () {
      var a = 0;for (var f in c) if (c.hasOwnProperty(f)) {
        var g,
            h = c[f],
            i = h.get();if (a++, h.s = (i - h.b) / (h.dur / h.spd), h.s >= 1 && (delete c[f], h.s = 1, a--, function (a) {
          setTimeout(function () {
            b("mina.finish." + a.id, a);
          });
        }(h)), e(h.start)) {
          g = [];for (var j = 0, k = h.start.length; k > j; j++) g[j] = +h.start[j] + (h.end[j] - h.start[j]) * h.easing(h.s);
        } else g = +h.start + (h.end - h.start) * h.easing(h.s);h.set(g);
      }a && d(p);
    },
        q = function (a, b, e, f, g, i, r) {
      var s = { id: h(), start: a, end: b, b: e, s: 0, dur: f - e, spd: 1, get: g, set: i, easing: r || q.linear, status: j, speed: k, duration: l, stop: m, pause: n, resume: o };c[s.id] = s;var t,
          u = 0;for (t in c) if (c.hasOwnProperty(t) && (u++, 2 == u)) break;return 1 == u && d(p), s;
    };return q.time = i, q.getById = function (a) {
      return c[a] || null;
    }, q.linear = function (a) {
      return a;
    }, q.easeout = function (a) {
      return Math.pow(a, 1.7);
    }, q.easein = function (a) {
      return Math.pow(a, .48);
    }, q.easeinout = function (a) {
      if (1 == a) return 1;if (0 == a) return 0;var b = .48 - a / 1.04,
          c = Math.sqrt(.1734 + b * b),
          d = c - b,
          e = Math.pow(Math.abs(d), 1 / 3) * (0 > d ? -1 : 1),
          f = -c - b,
          g = Math.pow(Math.abs(f), 1 / 3) * (0 > f ? -1 : 1),
          h = e + g + .5;return 3 * (1 - h) * h * h + h * h * h;
    }, q.backin = function (a) {
      if (1 == a) return 1;var b = 1.70158;return a * a * ((b + 1) * a - b);
    }, q.backout = function (a) {
      if (0 == a) return 0;a -= 1;var b = 1.70158;return a * a * ((b + 1) * a + b) + 1;
    }, q.elastic = function (a) {
      return a == !!a ? a : Math.pow(2, -10 * a) * Math.sin((a - .075) * 2 * Math.PI / .3) + 1;
    }, q.bounce = function (a) {
      var b,
          c = 7.5625,
          d = 2.75;return 1 / d > a ? b = c * a * a : 2 / d > a ? (a -= 1.5 / d, b = c * a * a + .75) : 2.5 / d > a ? (a -= 2.25 / d, b = c * a * a + .9375) : (a -= 2.625 / d, b = c * a * a + .984375), b;
    }, a.mina = q, q;
  }("undefined" == typeof b ? function () {} : b),
      d = function () {
    function d(a, b) {
      if (a) {
        if (a.tagName) return z(a);if (a instanceof u) return a;if (null == b) return a = I.doc.querySelector(a), z(a);
      }return a = null == a ? "100%" : a, b = null == b ? "100%" : b, new y(a, b);
    }function e(a, b) {
      if (b) {
        if ("string" == typeof a && (a = e(a)), "string" == typeof b) return "xlink:" == b.substring(0, 6) ? a.getAttributeNS(fb, b.substring(6)) : "xml:" == b.substring(0, 4) ? a.getAttributeNS(gb, b.substring(4)) : a.getAttribute(b);for (var c in b) if (b[J](c)) {
          var d = K(b[c]);d ? "xlink:" == c.substring(0, 6) ? a.setAttributeNS(fb, c.substring(6), d) : "xml:" == c.substring(0, 4) ? a.setAttributeNS(gb, c.substring(4), d) : a.setAttribute(c, d) : a.removeAttribute(c);
        }
      } else a = I.doc.createElementNS(gb, a);return a;
    }function f(a, b) {
      return b = K.prototype.toLowerCase.call(b), "finite" == b ? isFinite(a) : "array" == b && (a instanceof Array || Array.isArray && Array.isArray(a)) ? !0 : "null" == b && null === a || b == typeof a && null !== a || "object" == b && a === Object(a) || U.call(a).slice(8, -1).toLowerCase() == b;
    }function h(a) {
      if ("function" == typeof a || Object(a) !== a) return a;var b = new a.constructor();for (var c in a) a[J](c) && (b[c] = h(a[c]));return b;
    }function i(a, b) {
      for (var c = 0, d = a.length; d > c; c++) if (a[c] === b) return a.push(a.splice(c, 1)[0]);
    }function j(a, b, c) {
      function d() {
        var e = Array.prototype.slice.call(arguments, 0),
            f = e.join("␀"),
            g = d.cache = d.cache || {},
            h = d.count = d.count || [];return g[J](f) ? (i(h, f), c ? c(g[f]) : g[f]) : (h.length >= 1e3 && delete g[h.shift()], h.push(f), g[f] = a.apply(b, e), c ? c(g[f]) : g[f]);
      }return d;
    }function k(a, b, c, d, e, f) {
      if (null == e) {
        var g = a - c,
            h = b - d;return g || h ? (180 + 180 * N.atan2(-h, -g) / R + 360) % 360 : 0;
      }return k(a, b, e, f) - k(c, d, e, f);
    }function l(a) {
      return a % 360 * R / 180;
    }function m(a) {
      return 180 * a / R % 360;
    }function n(a, b, c, d, e, f) {
      return null == b && "[object SVGMatrix]" == U.call(a) ? (this.a = a.a, this.b = a.b, this.c = a.c, this.d = a.d, this.e = a.e, this.f = a.f, void 0) : (null != a ? (this.a = +a, this.b = +b, this.c = +c, this.d = +d, this.e = +e, this.f = +f) : (this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.e = 0, this.f = 0), void 0);
    }function o(a) {
      var b = [];return a = a.replace(/(?:^|\s)(\w+)\(([^)]+)\)/g, function (a, c, d) {
        return d = d.split(/\s*,\s*|\s+/), "rotate" == c && 1 == d.length && d.push(0, 0), "scale" == c && (2 == d.length && d.push(0, 0), 1 == d.length && d.push(d[0], 0, 0)), "skewX" == c ? b.push(["m", 1, 0, N.tan(l(d[0])), 1, 0, 0]) : "skewY" == c ? b.push(["m", 1, N.tan(l(d[0])), 0, 1, 0, 0]) : b.push([c.charAt(0)].concat(d)), a;
      }), b;
    }function p(a, b) {
      var c = qb(a),
          d = new n();if (c) for (var e = 0, f = c.length; f > e; e++) {
        var g,
            h,
            i,
            j,
            k,
            l = c[e],
            m = l.length,
            o = K(l[0]).toLowerCase(),
            p = l[0] != o,
            q = p ? d.invert() : 0;"t" == o && 2 == m ? d.translate(l[1], 0) : "t" == o && 3 == m ? p ? (g = q.x(0, 0), h = q.y(0, 0), i = q.x(l[1], l[2]), j = q.y(l[1], l[2]), d.translate(i - g, j - h)) : d.translate(l[1], l[2]) : "r" == o ? 2 == m ? (k = k || b, d.rotate(l[1], k.x + k.width / 2, k.y + k.height / 2)) : 4 == m && (p ? (i = q.x(l[2], l[3]), j = q.y(l[2], l[3]), d.rotate(l[1], i, j)) : d.rotate(l[1], l[2], l[3])) : "s" == o ? 2 == m || 3 == m ? (k = k || b, d.scale(l[1], l[m - 1], k.x + k.width / 2, k.y + k.height / 2)) : 4 == m ? p ? (i = q.x(l[2], l[3]), j = q.y(l[2], l[3]), d.scale(l[1], l[1], i, j)) : d.scale(l[1], l[1], l[2], l[3]) : 5 == m && (p ? (i = q.x(l[3], l[4]), j = q.y(l[3], l[4]), d.scale(l[1], l[2], i, j)) : d.scale(l[1], l[2], l[3], l[4])) : "m" == o && 7 == m && d.add(l[1], l[2], l[3], l[4], l[5], l[6]);
      }return d;
    }function q(a, b) {
      if (null == b) {
        var c = !0;if (b = "linearGradient" == a.type || "radialGradient" == a.type ? a.node.getAttribute("gradientTransform") : "pattern" == a.type ? a.node.getAttribute("patternTransform") : a.node.getAttribute("transform"), !b) return new n();b = o(b);
      } else b = d._.rgTransform.test(b) ? K(b).replace(/\.{3}|\u2026/g, a._.transform || S) : o(b), f(b, "array") && (b = d.path ? d.path.toString.call(b) : K(b)), a._.transform = b;var e = p(b, a.getBBox(1));return c ? e : (a.matrix = e, void 0);
    }function r(a) {
      var b = d._.someDefs;if (b && rb(b.ownerDocument.documentElement, b)) return b;var c = a.node.ownerSVGElement && z(a.node.ownerSVGElement) || a.node.parentNode && z(a.node.parentNode) || d.select("svg") || d(0, 0),
          e = c.select("defs"),
          f = null == e ? !1 : e.node;return f || (f = x("defs", c.node).node), d._.someDefs = f, f;
    }function s(a, b, c) {
      function d(a) {
        return null == a ? S : a == +a ? a : (e(j, { width: a }), j.getBBox().width);
      }function f(a) {
        return null == a ? S : a == +a ? a : (e(j, { height: a }), j.getBBox().height);
      }function g(d, e) {
        null == b ? i[d] = e(a.attr(d)) : d == b && (i = e(null == c ? a.attr(d) : c));
      }var h = r(a),
          i = {},
          j = h.querySelector(".svg---mgr");switch (j || (j = e("rect"), e(j, { width: 10, height: 10, "class": "svg---mgr" }), h.appendChild(j)), a.type) {case "rect":
          g("rx", d), g("ry", f);case "image":
          g("width", d), g("height", f);case "text":
          g("x", d), g("y", f);break;case "circle":
          g("cx", d), g("cy", f), g("r", d);break;case "ellipse":
          g("cx", d), g("cy", f), g("rx", d), g("ry", f);break;case "line":
          g("x1", d), g("x2", d), g("y1", f), g("y2", f);break;case "marker":
          g("refX", d), g("markerWidth", d), g("refY", f), g("markerHeight", f);break;case "radialGradient":
          g("fx", d), g("fy", f);break;case "tspan":
          g("dx", d), g("dy", f);break;default:
          g(b, d);}return i;
    }function t(a) {
      f(a, "array") || (a = Array.prototype.slice.call(arguments, 0));for (var b = 0, c = 0, d = this.node; this[b];) delete this[b++];for (b = 0; b < a.length; b++) "set" == a[b].type ? a[b].forEach(function (a) {
        d.appendChild(a.node);
      }) : d.appendChild(a[b].node);var e = d.childNodes;for (b = 0; b < e.length; b++) this[c++] = z(e[b]);return this;
    }function u(a) {
      if (a.snap in hb) return hb[a.snap];var b,
          c = this.id = eb();try {
        b = a.ownerSVGElement;
      } catch (d) {}if (this.node = a, b && (this.paper = new y(b)), this.type = a.tagName, this.anims = {}, this._ = { transform: [] }, a.snap = c, hb[c] = this, "g" == this.type) {
        this.add = t;for (var e in y.prototype) y.prototype[J](e) && (this[e] = y.prototype[e]);
      }
    }function v(a) {
      for (var b, c = 0, d = a.length; d > c; c++) if (b = b || a[c]) return b;
    }function w(a) {
      this.node = a;
    }function x(a, b) {
      var c = e(a);b.appendChild(c);var d = z(c);return d.type = a, d;
    }function y(a, b) {
      var c,
          d,
          f,
          g = y.prototype;if (a && "svg" == a.tagName) {
        if (a.snap in hb) return hb[a.snap];c = new u(a), d = a.getElementsByTagName("desc")[0], f = a.getElementsByTagName("defs")[0], d || (d = e("desc"), d.appendChild(I.doc.createTextNode("Created with Snap")), c.node.appendChild(d)), f || (f = e("defs"), c.node.appendChild(f)), c.defs = f;for (var h in g) g[J](h) && (c[h] = g[h]);c.paper = c.root = c;
      } else c = x("svg", I.doc.body), e(c.node, { height: b, version: 1.1, width: a, xmlns: gb });return c;
    }function z(a) {
      return a ? a instanceof u || a instanceof w ? a : "svg" == a.tagName ? new y(a) : new u(a) : a;
    }function A() {
      return this.selectAll("stop");
    }function B(a, b) {
      var c = e("stop"),
          f = { offset: +b + "%" };return a = d.color(a), f["stop-color"] = a.hex, a.opacity < 1 && (f["stop-opacity"] = a.opacity), e(c, f), this.node.appendChild(c), this;
    }function C() {
      if ("linearGradient" == this.type) {
        var a = e(this.node, "x1") || 0,
            b = e(this.node, "x2") || 1,
            c = e(this.node, "y1") || 0,
            f = e(this.node, "y2") || 0;return d._.box(a, c, N.abs(b - a), N.abs(f - c));
      }var g = this.node.cx || .5,
          h = this.node.cy || .5,
          i = this.node.r || 0;return d._.box(g - i, h - i, 2 * i, 2 * i);
    }function D(a, c) {
      function d(a, b) {
        for (var c = (b - j) / (a - k), d = k; a > d; d++) h[d].offset = +(+j + c * (d - k)).toFixed(2);k = a, j = b;
      }var f,
          g = v(b("snap.util.grad.parse", null, c));if (!g) return null;g.params.unshift(a), f = "l" == g.type.toLowerCase() ? E.apply(0, g.params) : F.apply(0, g.params), g.type != g.type.toLowerCase() && e(f.node, { gradientUnits: "userSpaceOnUse" });var h = g.stops,
          i = h.length,
          j = 0,
          k = 0;i--;for (var l = 0; i > l; l++) "offset" in h[l] && d(l, h[l].offset);for (h[i].offset = h[i].offset || 100, d(i, h[i].offset), l = 0; i >= l; l++) {
        var m = h[l];f.addStop(m.color, m.offset);
      }return f;
    }function E(a, b, c, d, f) {
      var g = x("linearGradient", a);return g.stops = A, g.addStop = B, g.getBBox = C, null != b && e(g.node, { x1: b, y1: c, x2: d, y2: f }), g;
    }function F(a, b, c, d, f, g) {
      var h = x("radialGradient", a);return h.stops = A, h.addStop = B, h.getBBox = C, null != b && e(h.node, { cx: b, cy: c, r: d }), null != f && null != g && e(h.node, { fx: f, fy: g }), h;
    }function G(a) {
      return function (c) {
        if (b.stop(), c instanceof w && 1 == c.node.childNodes.length && ("radialGradient" == c.node.firstChild.tagName || "linearGradient" == c.node.firstChild.tagName || "pattern" == c.node.firstChild.tagName) && (c = c.node.firstChild, r(this).appendChild(c), c = z(c)), c instanceof u) {
          if ("radialGradient" == c.type || "linearGradient" == c.type || "pattern" == c.type) {
            c.node.id || e(c.node, { id: c.id });var f = ib(c.node.id);
          } else f = c.attr(a);
        } else if (f = d.color(c), f.error) {
          var g = D(r(this), c);g ? (g.node.id || e(g.node, { id: g.id }), f = ib(g.node.id)) : f = c;
        } else f = K(f);var h = {};h[a] = f, e(this.node, h), this.node.style[a] = S;
      };
    }function H(a) {
      for (var b = [], c = a.childNodes, d = 0, e = c.length; e > d; d++) {
        var f = c[d];3 == f.nodeType && b.push(f.nodeValue), "tspan" == f.tagName && (1 == f.childNodes.length && 3 == f.firstChild.nodeType ? b.push(f.firstChild.nodeValue) : b.push(H(f)));
      }return b;
    }d.version = "0.2.0", d.toString = function () {
      return "Snap v" + this.version;
    }, d._ = {};var I = { win: a, doc: a.document };d._.glob = I;var J = "hasOwnProperty",
        K = String,
        L = parseFloat,
        M = parseInt,
        N = Math,
        O = N.max,
        P = N.min,
        Q = N.abs,
        R = (N.pow, N.PI),
        S = (N.round, ""),
        T = " ",
        U = Object.prototype.toString,
        V = /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\))\s*$/i,
        W = /^url\(#?([^)]+)\)$/,
        X = "	\n\f\r   ᠎             　\u2028\u2029",
        Y = new RegExp("[," + X + "]+"),
        Z = (new RegExp("[" + X + "]", "g"), new RegExp("[" + X + "]*,[" + X + "]*")),
        $ = { hs: 1, rg: 1 },
        _ = new RegExp("([a-z])[" + X + ",]*((-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?[" + X + "]*,?[" + X + "]*)+)", "ig"),
        ab = new RegExp("([rstm])[" + X + ",]*((-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?[" + X + "]*,?[" + X + "]*)+)", "ig"),
        bb = new RegExp("(-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?)[" + X + "]*,?[" + X + "]*", "ig"),
        cb = 0,
        db = "S" + (+new Date()).toString(36),
        eb = function () {
      return db + (cb++).toString(36);
    },
        fb = "http://www.w3.org/1999/xlink",
        gb = "http://www.w3.org/2000/svg",
        hb = {},
        ib = d.url = function (a) {
      return "url('#" + a + "')";
    };d._.$ = e, d._.id = eb, d.format = function () {
      var a = /\{([^\}]+)\}/g,
          b = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g,
          c = function (a, c, d) {
        var e = d;return c.replace(b, function (a, b, c, d, f) {
          b = b || d, e && (b in e && (e = e[b]), "function" == typeof e && f && (e = e()));
        }), e = (null == e || e == d ? a : e) + "";
      };return function (b, d) {
        return K(b).replace(a, function (a, b) {
          return c(a, b, d);
        });
      };
    }();var jb = function () {
      function a() {
        this.parentNode.removeChild(this);
      }return function (b, c) {
        var d = I.doc.createElement("img"),
            e = I.doc.body;d.style.cssText = "position:absolute;left:-9999em;top:-9999em", d.onload = function () {
          c.call(d), d.onload = d.onerror = null, e.removeChild(d);
        }, d.onerror = a, e.appendChild(d), d.src = b;
      };
    }();d._.clone = h, d._.cacher = j, d.rad = l, d.deg = m, d.angle = k, d.is = f, d.snapTo = function (a, b, c) {
      if (c = f(c, "finite") ? c : 10, f(a, "array")) {
        for (var d = a.length; d--;) if (Q(a[d] - b) <= c) return a[d];
      } else {
        a = +a;var e = b % a;if (c > e) return b - e;if (e > a - c) return b - e + a;
      }return b;
    }, function (a) {
      function b(a) {
        return a[0] * a[0] + a[1] * a[1];
      }function c(a) {
        var c = N.sqrt(b(a));a[0] && (a[0] /= c), a[1] && (a[1] /= c);
      }a.add = function (a, b, c, d, e, f) {
        var g,
            h,
            i,
            j,
            k = [[], [], []],
            l = [[this.a, this.c, this.e], [this.b, this.d, this.f], [0, 0, 1]],
            m = [[a, c, e], [b, d, f], [0, 0, 1]];for (a && a instanceof n && (m = [[a.a, a.c, a.e], [a.b, a.d, a.f], [0, 0, 1]]), g = 0; 3 > g; g++) for (h = 0; 3 > h; h++) {
          for (j = 0, i = 0; 3 > i; i++) j += l[g][i] * m[i][h];k[g][h] = j;
        }return this.a = k[0][0], this.b = k[1][0], this.c = k[0][1], this.d = k[1][1], this.e = k[0][2], this.f = k[1][2], this;
      }, a.invert = function () {
        var a = this,
            b = a.a * a.d - a.b * a.c;return new n(a.d / b, -a.b / b, -a.c / b, a.a / b, (a.c * a.f - a.d * a.e) / b, (a.b * a.e - a.a * a.f) / b);
      }, a.clone = function () {
        return new n(this.a, this.b, this.c, this.d, this.e, this.f);
      }, a.translate = function (a, b) {
        return this.add(1, 0, 0, 1, a, b);
      }, a.scale = function (a, b, c, d) {
        return null == b && (b = a), (c || d) && this.add(1, 0, 0, 1, c, d), this.add(a, 0, 0, b, 0, 0), (c || d) && this.add(1, 0, 0, 1, -c, -d), this;
      }, a.rotate = function (a, b, c) {
        a = l(a), b = b || 0, c = c || 0;var d = +N.cos(a).toFixed(9),
            e = +N.sin(a).toFixed(9);return this.add(d, e, -e, d, b, c), this.add(1, 0, 0, 1, -b, -c);
      }, a.x = function (a, b) {
        return a * this.a + b * this.c + this.e;
      }, a.y = function (a, b) {
        return a * this.b + b * this.d + this.f;
      }, a.get = function (a) {
        return +this[K.fromCharCode(97 + a)].toFixed(4);
      }, a.toString = function () {
        return "matrix(" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)].join() + ")";
      }, a.offset = function () {
        return [this.e.toFixed(4), this.f.toFixed(4)];
      }, a.split = function () {
        var a = {};a.dx = this.e, a.dy = this.f;var d = [[this.a, this.c], [this.b, this.d]];a.scalex = N.sqrt(b(d[0])), c(d[0]), a.shear = d[0][0] * d[1][0] + d[0][1] * d[1][1], d[1] = [d[1][0] - d[0][0] * a.shear, d[1][1] - d[0][1] * a.shear], a.scaley = N.sqrt(b(d[1])), c(d[1]), a.shear /= a.scaley;var e = -d[0][1],
            f = d[1][1];return 0 > f ? (a.rotate = m(N.acos(f)), 0 > e && (a.rotate = 360 - a.rotate)) : a.rotate = m(N.asin(e)), a.isSimple = !(+a.shear.toFixed(9) || a.scalex.toFixed(9) != a.scaley.toFixed(9) && a.rotate), a.isSuperSimple = !+a.shear.toFixed(9) && a.scalex.toFixed(9) == a.scaley.toFixed(9) && !a.rotate, a.noRotation = !+a.shear.toFixed(9) && !a.rotate, a;
      }, a.toTransformString = function (a) {
        var b = a || this.split();return b.isSimple ? (b.scalex = +b.scalex.toFixed(4), b.scaley = +b.scaley.toFixed(4), b.rotate = +b.rotate.toFixed(4), (b.dx || b.dy ? "t" + [+b.dx.toFixed(4), +b.dy.toFixed(4)] : S) + (1 != b.scalex || 1 != b.scaley ? "s" + [b.scalex, b.scaley, 0, 0] : S) + (b.rotate ? "r" + [+b.rotate.toFixed(4), 0, 0] : S)) : "m" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)];
      };
    }(n.prototype), d.Matrix = n, d.getRGB = j(function (a) {
      if (!a || (a = K(a)).indexOf("-") + 1) return { r: -1, g: -1, b: -1, hex: "none", error: 1, toString: nb };if ("none" == a) return { r: -1, g: -1, b: -1, hex: "none", toString: nb };if (!($[J](a.toLowerCase().substring(0, 2)) || "#" == a.charAt()) && (a = kb(a)), !a) return { r: -1, g: -1, b: -1, hex: "none", error: 1, toString: nb };var b,
          c,
          e,
          g,
          h,
          i,
          j = a.match(V);return j ? (j[2] && (e = M(j[2].substring(5), 16), c = M(j[2].substring(3, 5), 16), b = M(j[2].substring(1, 3), 16)), j[3] && (e = M((h = j[3].charAt(3)) + h, 16), c = M((h = j[3].charAt(2)) + h, 16), b = M((h = j[3].charAt(1)) + h, 16)), j[4] && (i = j[4].split(Z), b = L(i[0]), "%" == i[0].slice(-1) && (b *= 2.55), c = L(i[1]), "%" == i[1].slice(-1) && (c *= 2.55), e = L(i[2]), "%" == i[2].slice(-1) && (e *= 2.55), "rgba" == j[1].toLowerCase().slice(0, 4) && (g = L(i[3])), i[3] && "%" == i[3].slice(-1) && (g /= 100)), j[5] ? (i = j[5].split(Z), b = L(i[0]), "%" == i[0].slice(-1) && (b /= 100), c = L(i[1]), "%" == i[1].slice(-1) && (c /= 100), e = L(i[2]), "%" == i[2].slice(-1) && (e /= 100), ("deg" == i[0].slice(-3) || "°" == i[0].slice(-1)) && (b /= 360), "hsba" == j[1].toLowerCase().slice(0, 4) && (g = L(i[3])), i[3] && "%" == i[3].slice(-1) && (g /= 100), d.hsb2rgb(b, c, e, g)) : j[6] ? (i = j[6].split(Z), b = L(i[0]), "%" == i[0].slice(-1) && (b /= 100), c = L(i[1]), "%" == i[1].slice(-1) && (c /= 100), e = L(i[2]), "%" == i[2].slice(-1) && (e /= 100), ("deg" == i[0].slice(-3) || "°" == i[0].slice(-1)) && (b /= 360), "hsla" == j[1].toLowerCase().slice(0, 4) && (g = L(i[3])), i[3] && "%" == i[3].slice(-1) && (g /= 100), d.hsl2rgb(b, c, e, g)) : (b = P(N.round(b), 255), c = P(N.round(c), 255), e = P(N.round(e), 255), g = P(O(g, 0), 1), j = { r: b, g: c, b: e, toString: nb }, j.hex = "#" + (16777216 | e | c << 8 | b << 16).toString(16).slice(1), j.opacity = f(g, "finite") ? g : 1, j)) : { r: -1, g: -1, b: -1, hex: "none", error: 1, toString: nb };
    }, d), d.hsb = j(function (a, b, c) {
      return d.hsb2rgb(a, b, c).hex;
    }), d.hsl = j(function (a, b, c) {
      return d.hsl2rgb(a, b, c).hex;
    }), d.rgb = j(function (a, b, c, d) {
      if (f(d, "finite")) {
        var e = N.round;return "rgba(" + [e(a), e(b), e(c), +d.toFixed(2)] + ")";
      }return "#" + (16777216 | c | b << 8 | a << 16).toString(16).slice(1);
    });var kb = function (a) {
      var b = I.doc.getElementsByTagName("head")[0],
          c = "rgb(255, 0, 0)";return kb = j(function (a) {
        if ("red" == a.toLowerCase()) return c;b.style.color = c, b.style.color = a;var d = I.doc.defaultView.getComputedStyle(b, S).getPropertyValue("color");return d == c ? null : d;
      }), kb(a);
    },
        lb = function () {
      return "hsb(" + [this.h, this.s, this.b] + ")";
    },
        mb = function () {
      return "hsl(" + [this.h, this.s, this.l] + ")";
    },
        nb = function () {
      return 1 == this.opacity || null == this.opacity ? this.hex : "rgba(" + [this.r, this.g, this.b, this.opacity] + ")";
    },
        ob = function (a, b, c) {
      if (null == b && f(a, "object") && "r" in a && "g" in a && "b" in a && (c = a.b, b = a.g, a = a.r), null == b && f(a, string)) {
        var e = d.getRGB(a);a = e.r, b = e.g, c = e.b;
      }return (a > 1 || b > 1 || c > 1) && (a /= 255, b /= 255, c /= 255), [a, b, c];
    },
        pb = function (a, b, c, e) {
      a = N.round(255 * a), b = N.round(255 * b), c = N.round(255 * c);var g = { r: a, g: b, b: c, opacity: f(e, "finite") ? e : 1, hex: d.rgb(a, b, c), toString: nb };return f(e, "finite") && (g.opacity = e), g;
    };d.color = function (a) {
      var b;return f(a, "object") && "h" in a && "s" in a && "b" in a ? (b = d.hsb2rgb(a), a.r = b.r, a.g = b.g, a.b = b.b, a.opacity = 1, a.hex = b.hex) : f(a, "object") && "h" in a && "s" in a && "l" in a ? (b = d.hsl2rgb(a), a.r = b.r, a.g = b.g, a.b = b.b, a.opacity = 1, a.hex = b.hex) : (f(a, "string") && (a = d.getRGB(a)), f(a, "object") && "r" in a && "g" in a && "b" in a && !("error" in a) ? (b = d.rgb2hsl(a), a.h = b.h, a.s = b.s, a.l = b.l, b = d.rgb2hsb(a), a.v = b.b) : (a = { hex: "none" }, a.r = a.g = a.b = a.h = a.s = a.v = a.l = -1, a.error = 1)), a.toString = nb, a;
    }, d.hsb2rgb = function (a, b, c, d) {
      f(a, "object") && "h" in a && "s" in a && "b" in a && (c = a.b, b = a.s, a = a.h, d = a.o), a *= 360;var e, g, h, i, j;return a = a % 360 / 60, j = c * b, i = j * (1 - Q(a % 2 - 1)), e = g = h = c - j, a = ~~a, e += [j, i, 0, 0, i, j][a], g += [i, j, j, i, 0, 0][a], h += [0, 0, i, j, j, i][a], pb(e, g, h, d);
    }, d.hsl2rgb = function (a, b, c, d) {
      f(a, "object") && "h" in a && "s" in a && "l" in a && (c = a.l, b = a.s, a = a.h), (a > 1 || b > 1 || c > 1) && (a /= 360, b /= 100, c /= 100), a *= 360;var e, g, h, i, j;return a = a % 360 / 60, j = 2 * b * (.5 > c ? c : 1 - c), i = j * (1 - Q(a % 2 - 1)), e = g = h = c - j / 2, a = ~~a, e += [j, i, 0, 0, i, j][a], g += [i, j, j, i, 0, 0][a], h += [0, 0, i, j, j, i][a], pb(e, g, h, d);
    }, d.rgb2hsb = function (a, b, c) {
      c = ob(a, b, c), a = c[0], b = c[1], c = c[2];var d, e, f, g;return f = O(a, b, c), g = f - P(a, b, c), d = 0 == g ? null : f == a ? (b - c) / g : f == b ? (c - a) / g + 2 : (a - b) / g + 4, d = 60 * ((d + 360) % 6) / 360, e = 0 == g ? 0 : g / f, { h: d, s: e, b: f, toString: lb };
    }, d.rgb2hsl = function (a, b, c) {
      c = ob(a, b, c), a = c[0], b = c[1], c = c[2];var d, e, f, g, h, i;return g = O(a, b, c), h = P(a, b, c), i = g - h, d = 0 == i ? null : g == a ? (b - c) / i : g == b ? (c - a) / i + 2 : (a - b) / i + 4, d = 60 * ((d + 360) % 6) / 360, f = (g + h) / 2, e = 0 == i ? 0 : .5 > f ? i / (2 * f) : i / (2 - 2 * f), { h: d, s: e, l: f, toString: mb };
    }, d.parsePathString = function (a) {
      if (!a) return null;var b = d.path(a);if (b.arr) return d.path.clone(b.arr);var c = { a: 7, c: 6, o: 2, h: 1, l: 2, m: 2, r: 4, q: 4, s: 4, t: 2, v: 1, u: 3, z: 0 },
          e = [];return f(a, "array") && f(a[0], "array") && (e = d.path.clone(a)), e.length || K(a).replace(_, function (a, b, d) {
        var f = [],
            g = b.toLowerCase();if (d.replace(bb, function (a, b) {
          b && f.push(+b);
        }), "m" == g && f.length > 2 && (e.push([b].concat(f.splice(0, 2))), g = "l", b = "m" == b ? "l" : "L"), "o" == g && 1 == f.length && e.push([b, f[0]]), "r" == g) e.push([b].concat(f));else for (; f.length >= c[g] && (e.push([b].concat(f.splice(0, c[g]))), c[g]););
      }), e.toString = d.path.toString, b.arr = d.path.clone(e), e;
    };var qb = d.parseTransformString = function (a) {
      if (!a) return null;var b = [];return f(a, "array") && f(a[0], "array") && (b = d.path.clone(a)), b.length || K(a).replace(ab, function (a, c, d) {
        var e = [];c.toLowerCase(), d.replace(bb, function (a, b) {
          b && e.push(+b);
        }), b.push([c].concat(e));
      }), b.toString = d.path.toString, b;
    };d._.svgTransform2string = o, d._.rgTransform = new RegExp("^[a-z][" + X + "]*-?\\.?\\d", "i"), d._.transform2matrix = p, d._unit2px = s;var rb = I.doc.contains || I.doc.compareDocumentPosition ? function (a, b) {
      var c = 9 == a.nodeType ? a.documentElement : a,
          d = b && b.parentNode;return a == d || !(!d || 1 != d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)));
    } : function (a, b) {
      if (b) for (; b;) if (b = b.parentNode, b == a) return !0;return !1;
    };d._.getSomeDefs = r, d.select = function (a) {
      return z(I.doc.querySelector(a));
    }, d.selectAll = function (a) {
      for (var b = I.doc.querySelectorAll(a), c = (d.set || Array)(), e = 0; e < b.length; e++) c.push(z(b[e]));return c;
    }, function (a) {
      function g(a) {
        function b(a, b) {
          var c = e(a.node, b);c = c && c.match(g), c = c && c[2], c && "#" == c.charAt() && (c = c.substring(1), c && (i[c] = (i[c] || []).concat(function (c) {
            var d = {};d[b] = ib(c), e(a.node, d);
          })));
        }function c(a) {
          var b = e(a.node, "xlink:href");b && "#" == b.charAt() && (b = b.substring(1), b && (i[b] = (i[b] || []).concat(function (b) {
            a.attr("xlink:href", "#" + b);
          })));
        }for (var d, f = a.selectAll("*"), g = /^\s*url\(("|'|)(.*)\1\)\s*$/, h = [], i = {}, j = 0, k = f.length; k > j; j++) {
          d = f[j], b(d, "fill"), b(d, "stroke"), b(d, "filter"), b(d, "mask"), b(d, "clip-path"), c(d);var l = e(d.node, "id");l && (e(d.node, { id: d.id }), h.push({ old: l, id: d.id }));
        }for (j = 0, k = h.length; k > j; j++) {
          var m = i[h[j].old];if (m) for (var n = 0, o = m.length; o > n; n++) m[n](h[j].id);
        }
      }function h(a, b, c) {
        return function (d) {
          var e = d.slice(a, b);return 1 == e.length && (e = e[0]), c ? c(e) : e;
        };
      }function i(a) {
        return function () {
          var b = a ? "<" + this.type : "",
              c = this.node.attributes,
              d = this.node.childNodes;if (a) for (var e = 0, f = c.length; f > e; e++) b += " " + c[e].name + '="' + c[e].value.replace(/"/g, '\\"') + '"';if (d.length) {
            for (a && (b += ">"), e = 0, f = d.length; f > e; e++) 3 == d[e].nodeType ? b += d[e].nodeValue : 1 == d[e].nodeType && (b += z(d[e]).toString());a && (b += "</" + this.type + ">");
          } else a && (b += "/>");return b;
        };
      }a.attr = function (a, c) {
        var d = this;if (d.node, !a) return d;if (f(a, "string")) {
          if (!(arguments.length > 1)) return v(b("snap.util.getattr." + a, d));var e = {};e[a] = c, a = e;
        }for (var g in a) a[J](g) && b("snap.util.attr." + g, d, a[g]);return d;
      }, a.getBBox = function (a) {
        var b = this;if ("use" == b.type && (b = b.original), b.removed) return {};var c = b._;return a ? (c.bboxwt = d.path.get[b.type] ? d.path.getBBox(b.realPath = d.path.get[b.type](b)) : d._.box(b.node.getBBox()), d._.box(c.bboxwt)) : (b.realPath = (d.path.get[b.type] || d.path.get.deflt)(b), c.bbox = d.path.getBBox(d.path.map(b.realPath, b.matrix)), d._.box(c.bbox));
      };var j = function () {
        return this.string;
      };a.transform = function (a) {
        var b = this._;if (null == a) {
          var c = new n(this.node.getCTM()),
              d = q(this),
              f = d.toTransformString(),
              g = K(d) == K(this.matrix) ? b.transform : f;return { string: g, globalMatrix: c, localMatrix: d, diffMatrix: c.clone().add(d.invert()), global: c.toTransformString(), local: f, toString: j };
        }return a instanceof n && (a = a.toTransformString()), q(this, a), this.node && ("linearGradient" == this.type || "radialGradient" == this.type ? e(this.node, { gradientTransform: this.matrix }) : "pattern" == this.type ? e(this.node, { patternTransform: this.matrix }) : e(this.node, { transform: this.matrix })), this;
      }, a.parent = function () {
        return z(this.node.parentNode);
      }, a.append = a.add = function (a) {
        if (a) {
          if ("set" == a.type) {
            var b = this;return a.forEach(function (a) {
              b.add(a);
            }), this;
          }a = z(a), this.node.appendChild(a.node), a.paper = this.paper;
        }return this;
      }, a.appendTo = function (a) {
        return a && (a = z(a), a.append(this)), this;
      }, a.prepend = function (a) {
        if (a) {
          a = z(a);var b = a.parent();this.node.insertBefore(a.node, this.node.firstChild), this.add && this.add(), a.paper = this.paper, this.parent() && this.parent().add(), b && b.add();
        }return this;
      }, a.prependTo = function (a) {
        return a = z(a), a.prepend(this), this;
      }, a.before = function (a) {
        if ("set" == a.type) {
          var b = this;return a.forEach(function (a) {
            var c = a.parent();b.node.parentNode.insertBefore(a.node, b.node), c && c.add();
          }), this.parent().add(), this;
        }a = z(a);var c = a.parent();return this.node.parentNode.insertBefore(a.node, this.node), this.parent() && this.parent().add(), c && c.add(), a.paper = this.paper, this;
      }, a.after = function (a) {
        a = z(a);var b = a.parent();return this.node.nextSibling ? this.node.parentNode.insertBefore(a.node, this.node.nextSibling) : this.node.parentNode.appendChild(a.node), this.parent() && this.parent().add(), b && b.add(), a.paper = this.paper, this;
      }, a.insertBefore = function (a) {
        a = z(a);var b = this.parent();return a.node.parentNode.insertBefore(this.node, a.node), this.paper = a.paper, b && b.add(), a.parent() && a.parent().add(), this;
      }, a.insertAfter = function (a) {
        a = z(a);var b = this.parent();return a.node.parentNode.insertBefore(this.node, a.node.nextSibling), this.paper = a.paper, b && b.add(), a.parent() && a.parent().add(), this;
      }, a.remove = function () {
        var a = this.parent();return this.node.parentNode && this.node.parentNode.removeChild(this.node), delete this.paper, this.removed = !0, a && a.add(), this;
      }, a.select = function (a) {
        return z(this.node.querySelector(a));
      }, a.selectAll = function (a) {
        for (var b = this.node.querySelectorAll(a), c = (d.set || Array)(), e = 0; e < b.length; e++) c.push(z(b[e]));return c;
      }, a.asPX = function (a, b) {
        return null == b && (b = this.attr(a)), +s(this, a, b);
      }, a.use = function () {
        var a,
            b = this.node.id;return b || (b = this.id, e(this.node, { id: b })), a = "linearGradient" == this.type || "radialGradient" == this.type || "pattern" == this.type ? x(this.type, this.node.parentNode) : x("use", this.node.parentNode), e(a.node, { "xlink:href": "#" + b }), a.original = this, a;
      }, a.clone = function () {
        var a = z(this.node.cloneNode(!0));return e(a.node, "id") && e(a.node, { id: a.id }), g(a), a.insertAfter(this), a;
      }, a.toDefs = function () {
        var a = r(this);return a.appendChild(this.node), this;
      }, a.pattern = function (a, b, c, d) {
        var g = x("pattern", r(this));return null == a && (a = this.getBBox()), f(a, "object") && "x" in a && (b = a.y, c = a.width, d = a.height, a = a.x), e(g.node, { x: a, y: b, width: c, height: d, patternUnits: "userSpaceOnUse", id: g.id, viewBox: [a, b, c, d].join(" ") }), g.node.appendChild(this.node), g;
      }, a.marker = function (a, b, c, d, g, h) {
        var i = x("marker", r(this));return null == a && (a = this.getBBox()), f(a, "object") && "x" in a && (b = a.y, c = a.width, d = a.height, g = a.refX || a.cx, h = a.refY || a.cy, a = a.x), e(i.node, { viewBox: [a, b, c, d].join(T), markerWidth: c, markerHeight: d, orient: "auto", refX: g || 0, refY: h || 0, id: i.id }), i.node.appendChild(this.node), i;
      };var k = function (a, b, d, e) {
        "function" != typeof d || d.length || (e = d, d = c.linear), this.attr = a, this.dur = b, d && (this.easing = d), e && (this.callback = e);
      };d.animation = function (a, b, c, d) {
        return new k(a, b, c, d);
      }, a.inAnim = function () {
        var a = this,
            b = [];for (var c in a.anims) a.anims[J](c) && !function (a) {
          b.push({ anim: new k(a._attrs, a.dur, a.easing, a._callback), curStatus: a.status(), status: function (b) {
              return a.status(b);
            }, stop: function () {
              a.stop();
            } });
        }(a.anims[c]);return b;
      }, d.animate = function (a, d, e, f, g, h) {
        "function" != typeof g || g.length || (h = g, g = c.linear);var i = c.time(),
            j = c(a, d, i, i + f, c.time, e, g);return h && b.once("mina.finish." + j.id, h), j;
      }, a.stop = function () {
        for (var a = this.inAnim(), b = 0, c = a.length; c > b; b++) a[b].stop();return this;
      }, a.animate = function (a, d, e, g) {
        "function" != typeof e || e.length || (g = e, e = c.linear), a instanceof k && (g = a.callback, e = a.easing, d = e.dur, a = a.attr);var i,
            j,
            l,
            m,
            n = [],
            o = [],
            p = {},
            q = this;for (var r in a) if (a[J](r)) {
          q.equal ? (m = q.equal(r, K(a[r])), i = m.from, j = m.to, l = m.f) : (i = +q.attr(r), j = +a[r]);var s = f(i, "array") ? i.length : 1;p[r] = h(n.length, n.length + s, l), n = n.concat(i), o = o.concat(j);
        }var t = c.time(),
            u = c(n, o, t, t + d, c.time, function (a) {
          var b = {};for (var c in p) p[J](c) && (b[c] = p[c](a));q.attr(b);
        }, e);return q.anims[u.id] = u, u._attrs = a, u._callback = g, b.once("mina.finish." + u.id, function () {
          delete q.anims[u.id], g && g.call(q);
        }), b.once("mina.stop." + u.id, function () {
          delete q.anims[u.id];
        }), q;
      };var l = {};a.data = function (a, c) {
        var e = l[this.id] = l[this.id] || {};if (0 == arguments.length) return b("snap.data.get." + this.id, this, e, null), e;if (1 == arguments.length) {
          if (d.is(a, "object")) {
            for (var f in a) a[J](f) && this.data(f, a[f]);return this;
          }return b("snap.data.get." + this.id, this, e[a], a), e[a];
        }return e[a] = c, b("snap.data.set." + this.id, this, c, a), this;
      }, a.removeData = function (a) {
        return null == a ? l[this.id] = {} : l[this.id] && delete l[this.id][a], this;
      }, a.outerSVG = a.toString = i(1), a.innerSVG = i();
    }(u.prototype), d.parse = function (a) {
      var b = I.doc.createDocumentFragment(),
          c = !0,
          d = I.doc.createElement("div");if (a = K(a), a.match(/^\s*<\s*svg(?:\s|>)/) || (a = "<svg>" + a + "</svg>", c = !1), d.innerHTML = a, a = d.getElementsByTagName("svg")[0]) if (c) b = a;else for (; a.firstChild;) b.appendChild(a.firstChild);return d.innerHTML = S, new w(b);
    }, w.prototype.select = u.prototype.select, w.prototype.selectAll = u.prototype.selectAll, d.fragment = function () {
      for (var a = Array.prototype.slice.call(arguments, 0), b = I.doc.createDocumentFragment(), c = 0, e = a.length; e > c; c++) {
        var f = a[c];f.node && f.node.nodeType && b.appendChild(f.node), f.nodeType && b.appendChild(f), "string" == typeof f && b.appendChild(d.parse(f).node);
      }return new w(b);
    }, function (a) {
      a.el = function (a, b) {
        return x(a, this.node).attr(b);
      }, a.rect = function (a, b, c, d, e, g) {
        var h;return null == g && (g = e), f(a, "object") && "x" in a ? h = a : null != a && (h = { x: a, y: b, width: c, height: d }, null != e && (h.rx = e, h.ry = g)), this.el("rect", h);
      }, a.circle = function (a, b, c) {
        var d;return f(a, "object") && "cx" in a ? d = a : null != a && (d = { cx: a, cy: b, r: c }), this.el("circle", d);
      }, a.image = function (a, b, c, d, g) {
        var h = x("image", this.node);if (f(a, "object") && "src" in a) h.attr(a);else if (null != a) {
          var i = { "xlink:href": a, preserveAspectRatio: "none" };null != b && null != c && (i.x = b, i.y = c), null != d && null != g ? (i.width = d, i.height = g) : jb(a, function () {
            e(h.node, { width: this.offsetWidth, height: this.offsetHeight });
          }), e(h.node, i);
        }return h;
      }, a.ellipse = function (a, b, c, d) {
        var e = x("ellipse", this.node);
        return f(a, "object") && "cx" in a ? e.attr(a) : null != a && e.attr({ cx: a, cy: b, rx: c, ry: d }), e;
      }, a.path = function (a) {
        var b = x("path", this.node);return f(a, "object") && !f(a, "array") ? b.attr(a) : a && b.attr({ d: a }), b;
      }, a.group = a.g = function (b) {
        var c = x("g", this.node);c.add = t;for (var d in a) a[J](d) && (c[d] = a[d]);return 1 == arguments.length && b && !b.type ? c.attr(b) : arguments.length && c.add(Array.prototype.slice.call(arguments, 0)), c;
      }, a.text = function (a, b, c) {
        var d = x("text", this.node);return f(a, "object") ? d.attr(a) : null != a && d.attr({ x: a, y: b, text: c || "" }), d;
      }, a.line = function (a, b, c, d) {
        var e = x("line", this.node);return f(a, "object") ? e.attr(a) : null != a && e.attr({ x1: a, x2: c, y1: b, y2: d }), e;
      }, a.polyline = function (a) {
        arguments.length > 1 && (a = Array.prototype.slice.call(arguments, 0));var b = x("polyline", this.node);return f(a, "object") && !f(a, "array") ? b.attr(a) : null != a && b.attr({ points: a }), b;
      }, a.polygon = function (a) {
        arguments.length > 1 && (a = Array.prototype.slice.call(arguments, 0));var b = x("polygon", this.node);return f(a, "object") && !f(a, "array") ? b.attr(a) : null != a && b.attr({ points: a }), b;
      }, function () {
        a.gradient = function (a) {
          return D(this.defs, a);
        }, a.gradientLinear = function (a, b, c, d) {
          return E(this.defs, a, b, c, d);
        }, a.gradientRadial = function (a, b, c, d, e) {
          return F(this.defs, a, b, c, d, e);
        }, a.toString = function () {
          var a,
              b = I.doc.createDocumentFragment(),
              c = I.doc.createElement("div"),
              d = this.node.cloneNode(!0);return b.appendChild(c), c.appendChild(d), e(d, { xmlns: gb }), a = c.innerHTML, b.removeChild(b.firstChild), a;
        }, a.clear = function () {
          for (var a, b = this.node.firstChild; b;) a = b.nextSibling, "defs" != b.tagName && b.parentNode.removeChild(b), b = a;
        };
      }();
    }(y.prototype), d.ajax = function (a, c, d, e) {
      var g = new XMLHttpRequest(),
          h = eb();if (g) {
        if (f(c, "function")) e = d, d = c, c = null;else if (f(c, "object")) {
          var i = [];for (var j in c) c.hasOwnProperty(j) && i.push(encodeURIComponent(j) + "=" + encodeURIComponent(c[j]));c = i.join("&");
        }return g.open(c ? "POST" : "GET", a, !0), g.setRequestHeader("X-Requested-With", "XMLHttpRequest"), c && g.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), d && (b.once("snap.ajax." + h + ".0", d), b.once("snap.ajax." + h + ".200", d), b.once("snap.ajax." + h + ".304", d)), g.onreadystatechange = function () {
          4 == g.readyState && b("snap.ajax." + h + "." + g.status, e, g);
        }, 4 == g.readyState ? g : (g.send(c), g);
      }
    }, d.load = function (a, b, c) {
      d.ajax(a, function (a) {
        var e = d.parse(a.responseText);c ? b.call(c, e) : b(e);
      });
    }, b.on("snap.util.attr.mask", function (a) {
      if (a instanceof u || a instanceof w) {
        if (b.stop(), a instanceof w && 1 == a.node.childNodes.length && (a = a.node.firstChild, r(this).appendChild(a), a = z(a)), "mask" == a.type) var c = a;else c = x("mask", r(this)), c.node.appendChild(a.node), !c.node.id && e(c.node, { id: c.id });e(this.node, { mask: ib(c.id) });
      }
    }), function (a) {
      b.on("snap.util.attr.clip", a), b.on("snap.util.attr.clip-path", a), b.on("snap.util.attr.clipPath", a);
    }(function (a) {
      if (a instanceof u || a instanceof w) {
        if (b.stop(), "clipPath" == a.type) var c = a;else c = x("clipPath", r(this)), c.node.appendChild(a.node), !c.node.id && e(c.node, { id: c.id });e(this.node, { "clip-path": ib(c.id) });
      }
    }), b.on("snap.util.attr.fill", G("fill")), b.on("snap.util.attr.stroke", G("stroke"));var sb = /^([lr])(?:\(([^)]*)\))?(.*)$/i;b.on("snap.util.grad.parse", function (a) {
      a = K(a);var b = a.match(sb);if (!b) return null;var c = b[1],
          d = b[2],
          e = b[3];return d = d.split(/\s*,\s*/).map(function (a) {
        return +a == a ? +a : a;
      }), 1 == d.length && 0 == d[0] && (d = []), e = e.split("-"), e = e.map(function (a) {
        a = a.split(":");var b = { color: a[0] };return a[1] && (b.offset = a[1]), b;
      }), { type: c, params: d, stops: e };
    }), b.on("snap.util.attr.d", function (a) {
      b.stop(), f(a, "array") && f(a[0], "array") && (a = d.path.toString.call(a)), a = K(a), a.match(/[ruo]/i) && (a = d.path.toAbsolute(a)), e(this.node, { d: a });
    })(-1), b.on("snap.util.attr.#text", function (a) {
      b.stop(), a = K(a);for (var c = I.doc.createTextNode(a); this.node.firstChild;) this.node.removeChild(this.node.firstChild);this.node.appendChild(c);
    })(-1), b.on("snap.util.attr.path", function (a) {
      b.stop(), this.attr({ d: a });
    })(-1), b.on("snap.util.attr.viewBox", function (a) {
      var c;c = f(a, "object") && "x" in a ? [a.x, a.y, a.width, a.height].join(" ") : f(a, "array") ? a.join(" ") : a, e(this.node, { viewBox: c }), b.stop();
    })(-1), b.on("snap.util.attr.transform", function (a) {
      this.transform(a), b.stop();
    })(-1), b.on("snap.util.attr.r", function (a) {
      "rect" == this.type && (b.stop(), e(this.node, { rx: a, ry: a }));
    })(-1), b.on("snap.util.attr.textpath", function (a) {
      if (b.stop(), "text" == this.type) {
        var c, d, g;if (!a && this.textPath) {
          for (d = this.textPath; d.node.firstChild;) this.node.appendChild(d.node.firstChild);return d.remove(), delete this.textPath, void 0;
        }if (f(a, "string")) {
          var h = r(this),
              i = z(h.parentNode).path(a);h.appendChild(i.node), c = i.id, i.attr({ id: c });
        } else a = z(a), a instanceof u && (c = a.attr("id"), c || (c = a.id, a.attr({ id: c })));if (c) if (d = this.textPath, g = this.node, d) d.attr({ "xlink:href": "#" + c });else {
          for (d = e("textPath", { "xlink:href": "#" + c }); g.firstChild;) d.appendChild(g.firstChild);g.appendChild(d), this.textPath = z(d);
        }
      }
    })(-1), b.on("snap.util.attr.text", function (a) {
      if ("text" == this.type) {
        for (var c = this.node, d = function (a) {
          var b = e("tspan");if (f(a, "array")) for (var c = 0; c < a.length; c++) b.appendChild(d(a[c]));else b.appendChild(I.doc.createTextNode(a));return b.normalize && b.normalize(), b;
        }; c.firstChild;) c.removeChild(c.firstChild);for (var g = d(a); g.firstChild;) c.appendChild(g.firstChild);
      }b.stop();
    })(-1);var tb = { "alignment-baseline": 0, "baseline-shift": 0, clip: 0, "clip-path": 0, "clip-rule": 0, color: 0, "color-interpolation": 0, "color-interpolation-filters": 0, "color-profile": 0, "color-rendering": 0, cursor: 0, direction: 0, display: 0, "dominant-baseline": 0, "enable-background": 0, fill: 0, "fill-opacity": 0, "fill-rule": 0, filter: 0, "flood-color": 0, "flood-opacity": 0, font: 0, "font-family": 0, "font-size": 0, "font-size-adjust": 0, "font-stretch": 0, "font-style": 0, "font-variant": 0, "font-weight": 0, "glyph-orientation-horizontal": 0, "glyph-orientation-vertical": 0, "image-rendering": 0, kerning: 0, "letter-spacing": 0, "lighting-color": 0, marker: 0, "marker-end": 0, "marker-mid": 0, "marker-start": 0, mask: 0, opacity: 0, overflow: 0, "pointer-events": 0, "shape-rendering": 0, "stop-color": 0, "stop-opacity": 0, stroke: 0, "stroke-dasharray": 0, "stroke-dashoffset": 0, "stroke-linecap": 0, "stroke-linejoin": 0, "stroke-miterlimit": 0, "stroke-opacity": 0, "stroke-width": 0, "text-anchor": 0, "text-decoration": 0, "text-rendering": 0, "unicode-bidi": 0, visibility: 0, "word-spacing": 0, "writing-mode": 0 };b.on("snap.util.attr", function (a) {
      var c = b.nt(),
          d = {};c = c.substring(c.lastIndexOf(".") + 1), d[c] = a;var f = c.replace(/-(\w)/gi, function (a, b) {
        return b.toUpperCase();
      }),
          g = c.replace(/[A-Z]/g, function (a) {
        return "-" + a.toLowerCase();
      });tb[J](g) ? this.node.style[f] = null == a ? S : a : e(this.node, d);
    }), b.on("snap.util.getattr.transform", function () {
      return b.stop(), this.transform();
    })(-1), b.on("snap.util.getattr.textpath", function () {
      return b.stop(), this.textPath;
    })(-1), function () {
      function a(a) {
        return function () {
          b.stop();var c = I.doc.defaultView.getComputedStyle(this.node, null).getPropertyValue("marker-" + a);return "none" == c ? c : d(I.doc.getElementById(c.match(W)[1]));
        };
      }function c(a) {
        return function (c) {
          b.stop();var d = "marker" + a.charAt(0).toUpperCase() + a.substring(1);if ("" == c || !c) return this.node.style[d] = "none", void 0;if ("marker" == c.type) {
            var f = c.node.id;return f || e(c.node, { id: c.id }), this.node.style[d] = ib(f), void 0;
          }
        };
      }b.on("snap.util.getattr.marker-end", a("end"))(-1), b.on("snap.util.getattr.markerEnd", a("end"))(-1), b.on("snap.util.getattr.marker-start", a("start"))(-1), b.on("snap.util.getattr.markerStart", a("start"))(-1), b.on("snap.util.getattr.marker-mid", a("mid"))(-1), b.on("snap.util.getattr.markerMid", a("mid"))(-1), b.on("snap.util.attr.marker-end", c("end"))(-1), b.on("snap.util.attr.markerEnd", c("end"))(-1), b.on("snap.util.attr.marker-start", c("start"))(-1), b.on("snap.util.attr.markerStart", c("start"))(-1), b.on("snap.util.attr.marker-mid", c("mid"))(-1), b.on("snap.util.attr.markerMid", c("mid"))(-1);
    }(), b.on("snap.util.getattr.r", function () {
      return "rect" == this.type && e(this.node, "rx") == e(this.node, "ry") ? (b.stop(), e(this.node, "rx")) : void 0;
    })(-1), b.on("snap.util.getattr.text", function () {
      if ("text" == this.type || "tspan" == this.type) {
        b.stop();var a = H(this.node);return 1 == a.length ? a[0] : a;
      }
    })(-1), b.on("snap.util.getattr.#text", function () {
      return this.node.textContent;
    })(-1), b.on("snap.util.getattr.viewBox", function () {
      b.stop();var a = e(this.node, "viewBox").split(Y);return d._.box(+a[0], +a[1], +a[2], +a[3]);
    })(-1), b.on("snap.util.getattr.points", function () {
      var a = e(this.node, "points");return b.stop(), a.split(Y);
    }), b.on("snap.util.getattr.path", function () {
      var a = e(this.node, "d");return b.stop(), a;
    }), b.on("snap.util.getattr", function () {
      var a = b.nt();a = a.substring(a.lastIndexOf(".") + 1);var c = a.replace(/[A-Z]/g, function (a) {
        return "-" + a.toLowerCase();
      });return tb[J](c) ? I.doc.defaultView.getComputedStyle(this.node, null).getPropertyValue(c) : e(this.node, a);
    });var ub = function (a) {
      var b = a.getBoundingClientRect(),
          c = a.ownerDocument,
          d = c.body,
          e = c.documentElement,
          f = e.clientTop || d.clientTop || 0,
          h = e.clientLeft || d.clientLeft || 0,
          i = b.top + (g.win.pageYOffset || e.scrollTop || d.scrollTop) - f,
          j = b.left + (g.win.pageXOffset || e.scrollLeft || d.scrollLeft) - h;return { y: i, x: j };
    };return d.getElementByPoint = function (a, b) {
      var c = this,
          d = (c.canvas, I.doc.elementFromPoint(a, b));if (I.win.opera && "svg" == d.tagName) {
        var e = ub(d),
            f = d.createSVGRect();f.x = a - e.x, f.y = b - e.y, f.width = f.height = 1;var g = d.getIntersectionList(f, null);g.length && (d = g[g.length - 1]);
      }return d ? z(d) : null;
    }, d.plugin = function (a) {
      a(d, u, y, I);
    }, I.win.Snap = d, d;
  }();return d.plugin(function (a, b) {
    function c(a) {
      var b = c.ps = c.ps || {};return b[a] ? b[a].sleep = 100 : b[a] = { sleep: 100 }, setTimeout(function () {
        for (var c in b) b[L](c) && c != a && (b[c].sleep--, !b[c].sleep && delete b[c]);
      }), b[a];
    }function d(a, b, c, d) {
      return null == a && (a = b = c = d = 0), null == b && (b = a.y, c = a.width, d = a.height, a = a.x), { x: a, y: b, width: c, w: c, height: d, h: d, x2: a + c, y2: b + d, cx: a + c / 2, cy: b + d / 2, r1: O.min(c, d) / 2, r2: O.max(c, d) / 2, r0: O.sqrt(c * c + d * d) / 2, path: w(a, b, c, d), vb: [a, b, c, d].join(" ") };
    }function e() {
      return this.join(",").replace(M, "$1");
    }function f(a) {
      var b = K(a);return b.toString = e, b;
    }function g(a, b, c, d, e, f, g, h, j) {
      return null == j ? n(a, b, c, d, e, f, g, h) : i(a, b, c, d, e, f, g, h, o(a, b, c, d, e, f, g, h, j));
    }function h(c, d) {
      function e(a) {
        return +(+a).toFixed(3);
      }return a._.cacher(function (a, f, h) {
        a instanceof b && (a = a.attr("d")), a = F(a);for (var j, k, l, m, n, o = "", p = {}, q = 0, r = 0, s = a.length; s > r; r++) {
          if (l = a[r], "M" == l[0]) j = +l[1], k = +l[2];else {
            if (m = g(j, k, l[1], l[2], l[3], l[4], l[5], l[6]), q + m > f) {
              if (d && !p.start) {
                if (n = g(j, k, l[1], l[2], l[3], l[4], l[5], l[6], f - q), o += ["C" + e(n.start.x), e(n.start.y), e(n.m.x), e(n.m.y), e(n.x), e(n.y)], h) return o;p.start = o, o = ["M" + e(n.x), e(n.y) + "C" + e(n.n.x), e(n.n.y), e(n.end.x), e(n.end.y), e(l[5]), e(l[6])].join(), q += m, j = +l[5], k = +l[6];continue;
              }if (!c && !d) return n = g(j, k, l[1], l[2], l[3], l[4], l[5], l[6], f - q);
            }q += m, j = +l[5], k = +l[6];
          }o += l.shift() + l;
        }return p.end = o, n = c ? q : d ? p : i(j, k, l[0], l[1], l[2], l[3], l[4], l[5], 1);
      }, null, a._.clone);
    }function i(a, b, c, d, e, f, g, h, i) {
      var j = 1 - i,
          k = S(j, 3),
          l = S(j, 2),
          m = i * i,
          n = m * i,
          o = k * a + 3 * l * i * c + 3 * j * i * i * e + n * g,
          p = k * b + 3 * l * i * d + 3 * j * i * i * f + n * h,
          q = a + 2 * i * (c - a) + m * (e - 2 * c + a),
          r = b + 2 * i * (d - b) + m * (f - 2 * d + b),
          s = c + 2 * i * (e - c) + m * (g - 2 * e + c),
          t = d + 2 * i * (f - d) + m * (h - 2 * f + d),
          u = j * a + i * c,
          v = j * b + i * d,
          w = j * e + i * g,
          x = j * f + i * h,
          y = 90 - 180 * O.atan2(q - s, r - t) / P;return { x: o, y: p, m: { x: q, y: r }, n: { x: s, y: t }, start: { x: u, y: v }, end: { x: w, y: x }, alpha: y };
    }function j(b, c, e, f, g, h, i, j) {
      a.is(b, "array") || (b = [b, c, e, f, g, h, i, j]);var k = E.apply(null, b);return d(k.min.x, k.min.y, k.max.x - k.min.x, k.max.y - k.min.y);
    }function k(a, b, c) {
      return b >= a.x && b <= a.x + a.width && c >= a.y && c <= a.y + a.height;
    }function l(a, b) {
      return a = d(a), b = d(b), k(b, a.x, a.y) || k(b, a.x2, a.y) || k(b, a.x, a.y2) || k(b, a.x2, a.y2) || k(a, b.x, b.y) || k(a, b.x2, b.y) || k(a, b.x, b.y2) || k(a, b.x2, b.y2) || (a.x < b.x2 && a.x > b.x || b.x < a.x2 && b.x > a.x) && (a.y < b.y2 && a.y > b.y || b.y < a.y2 && b.y > a.y);
    }function m(a, b, c, d, e) {
      var f = -3 * b + 9 * c - 9 * d + 3 * e,
          g = a * f + 6 * b - 12 * c + 6 * d;return a * g - 3 * b + 3 * c;
    }function n(a, b, c, d, e, f, g, h, i) {
      null == i && (i = 1), i = i > 1 ? 1 : 0 > i ? 0 : i;for (var j = i / 2, k = 12, l = [-.1252, .1252, -.3678, .3678, -.5873, .5873, -.7699, .7699, -.9041, .9041, -.9816, .9816], n = [.2491, .2491, .2335, .2335, .2032, .2032, .1601, .1601, .1069, .1069, .0472, .0472], o = 0, p = 0; k > p; p++) {
        var q = j * l[p] + j,
            r = m(q, a, c, e, g),
            s = m(q, b, d, f, h),
            t = r * r + s * s;o += n[p] * O.sqrt(t);
      }return j * o;
    }function o(a, b, c, d, e, f, g, h, i) {
      if (!(0 > i || n(a, b, c, d, e, f, g, h) < i)) {
        var j,
            k = 1,
            l = k / 2,
            m = k - l,
            o = .01;for (j = n(a, b, c, d, e, f, g, h, m); T(j - i) > o;) l /= 2, m += (i > j ? 1 : -1) * l, j = n(a, b, c, d, e, f, g, h, m);return m;
      }
    }function p(a, b, c, d, e, f, g, h) {
      if (!(R(a, c) < Q(e, g) || Q(a, c) > R(e, g) || R(b, d) < Q(f, h) || Q(b, d) > R(f, h))) {
        var i = (a * d - b * c) * (e - g) - (a - c) * (e * h - f * g),
            j = (a * d - b * c) * (f - h) - (b - d) * (e * h - f * g),
            k = (a - c) * (f - h) - (b - d) * (e - g);if (k) {
          var l = i / k,
              m = j / k,
              n = +l.toFixed(2),
              o = +m.toFixed(2);if (!(n < +Q(a, c).toFixed(2) || n > +R(a, c).toFixed(2) || n < +Q(e, g).toFixed(2) || n > +R(e, g).toFixed(2) || o < +Q(b, d).toFixed(2) || o > +R(b, d).toFixed(2) || o < +Q(f, h).toFixed(2) || o > +R(f, h).toFixed(2))) return { x: l, y: m };
        }
      }
    }function q(a, b, c) {
      var d = j(a),
          e = j(b);if (!l(d, e)) return c ? 0 : [];for (var f = n.apply(0, a), g = n.apply(0, b), h = ~~(f / 5), k = ~~(g / 5), m = [], o = [], q = {}, r = c ? 0 : [], s = 0; h + 1 > s; s++) {
        var t = i.apply(0, a.concat(s / h));m.push({ x: t.x, y: t.y, t: s / h });
      }for (s = 0; k + 1 > s; s++) t = i.apply(0, b.concat(s / k)), o.push({ x: t.x, y: t.y, t: s / k });for (s = 0; h > s; s++) for (var u = 0; k > u; u++) {
        var v = m[s],
            w = m[s + 1],
            x = o[u],
            y = o[u + 1],
            z = T(w.x - v.x) < .001 ? "y" : "x",
            A = T(y.x - x.x) < .001 ? "y" : "x",
            B = p(v.x, v.y, w.x, w.y, x.x, x.y, y.x, y.y);if (B) {
          if (q[B.x.toFixed(4)] == B.y.toFixed(4)) continue;q[B.x.toFixed(4)] = B.y.toFixed(4);var C = v.t + T((B[z] - v[z]) / (w[z] - v[z])) * (w.t - v.t),
              D = x.t + T((B[A] - x[A]) / (y[A] - x[A])) * (y.t - x.t);C >= 0 && 1 >= C && D >= 0 && 1 >= D && (c ? r++ : r.push({ x: B.x, y: B.y, t1: C, t2: D }));
        }
      }return r;
    }function r(a, b) {
      return t(a, b);
    }function s(a, b) {
      return t(a, b, 1);
    }function t(a, b, c) {
      a = F(a), b = F(b);for (var d, e, f, g, h, i, j, k, l, m, n = c ? 0 : [], o = 0, p = a.length; p > o; o++) {
        var r = a[o];if ("M" == r[0]) d = h = r[1], e = i = r[2];else {
          "C" == r[0] ? (l = [d, e].concat(r.slice(1)), d = l[6], e = l[7]) : (l = [d, e, d, e, h, i, h, i], d = h, e = i);for (var s = 0, t = b.length; t > s; s++) {
            var u = b[s];if ("M" == u[0]) f = j = u[1], g = k = u[2];else {
              "C" == u[0] ? (m = [f, g].concat(u.slice(1)), f = m[6], g = m[7]) : (m = [f, g, f, g, j, k, j, k], f = j, g = k);var v = q(l, m, c);if (c) n += v;else {
                for (var w = 0, x = v.length; x > w; w++) v[w].segment1 = o, v[w].segment2 = s, v[w].bez1 = l, v[w].bez2 = m;n = n.concat(v);
              }
            }
          }
        }
      }return n;
    }function u(a, b, c) {
      var d = v(a);return k(d, b, c) && 1 == t(a, [["M", b, c], ["H", d.x2 + 10]], 1) % 2;
    }function v(a) {
      var b = c(a);if (b.bbox) return K(b.bbox);if (!a) return d();a = F(a);for (var e, f = 0, g = 0, h = [], i = [], j = 0, k = a.length; k > j; j++) if (e = a[j], "M" == e[0]) f = e[1], g = e[2], h.push(f), i.push(g);else {
        var l = E(f, g, e[1], e[2], e[3], e[4], e[5], e[6]);h = h.concat(l.min.x, l.max.x), i = i.concat(l.min.y, l.max.y), f = e[5], g = e[6];
      }var m = Q.apply(0, h),
          n = Q.apply(0, i),
          o = R.apply(0, h),
          p = R.apply(0, i),
          q = d(m, n, o - m, p - n);return b.bbox = K(q), q;
    }function w(a, b, c, d, f) {
      if (f) return [["M", a + f, b], ["l", c - 2 * f, 0], ["a", f, f, 0, 0, 1, f, f], ["l", 0, d - 2 * f], ["a", f, f, 0, 0, 1, -f, f], ["l", 2 * f - c, 0], ["a", f, f, 0, 0, 1, -f, -f], ["l", 0, 2 * f - d], ["a", f, f, 0, 0, 1, f, -f], ["z"]];var g = [["M", a, b], ["l", c, 0], ["l", 0, d], ["l", -c, 0], ["z"]];return g.toString = e, g;
    }function x(a, b, c, d, f) {
      if (null == f && null == d && (d = c), null != f) var g = Math.PI / 180,
          h = a + c * Math.cos(-d * g),
          i = a + c * Math.cos(-f * g),
          j = b + c * Math.sin(-d * g),
          k = b + c * Math.sin(-f * g),
          l = [["M", h, j], ["A", c, c, 0, +(f - d > 180), 0, i, k]];else l = [["M", a, b], ["m", 0, -d], ["a", c, d, 0, 1, 1, 0, 2 * d], ["a", c, d, 0, 1, 1, 0, -2 * d], ["z"]];return l.toString = e, l;
    }function y(b) {
      var d = c(b),
          g = String.prototype.toLowerCase;if (d.rel) return f(d.rel);a.is(b, "array") && a.is(b && b[0], "array") || (b = a.parsePathString(b));var h = [],
          i = 0,
          j = 0,
          k = 0,
          l = 0,
          m = 0;"M" == b[0][0] && (i = b[0][1], j = b[0][2], k = i, l = j, m++, h.push(["M", i, j]));for (var n = m, o = b.length; o > n; n++) {
        var p = h[n] = [],
            q = b[n];if (q[0] != g.call(q[0])) switch (p[0] = g.call(q[0]), p[0]) {case "a":
            p[1] = q[1], p[2] = q[2], p[3] = q[3], p[4] = q[4], p[5] = q[5], p[6] = +(q[6] - i).toFixed(3), p[7] = +(q[7] - j).toFixed(3);break;case "v":
            p[1] = +(q[1] - j).toFixed(3);break;case "m":
            k = q[1], l = q[2];default:
            for (var r = 1, s = q.length; s > r; r++) p[r] = +(q[r] - (r % 2 ? i : j)).toFixed(3);} else {
          p = h[n] = [], "m" == q[0] && (k = q[1] + i, l = q[2] + j);for (var t = 0, u = q.length; u > t; t++) h[n][t] = q[t];
        }var v = h[n].length;switch (h[n][0]) {case "z":
            i = k, j = l;break;case "h":
            i += +h[n][v - 1];break;case "v":
            j += +h[n][v - 1];break;default:
            i += +h[n][v - 2], j += +h[n][v - 1];}
      }return h.toString = e, d.rel = f(h), h;
    }function z(b) {
      var d = c(b);if (d.abs) return f(d.abs);if (J(b, "array") && J(b && b[0], "array") || (b = a.parsePathString(b)), !b || !b.length) return [["M", 0, 0]];var g,
          h = [],
          i = 0,
          j = 0,
          k = 0,
          l = 0,
          m = 0;"M" == b[0][0] && (i = +b[0][1], j = +b[0][2], k = i, l = j, m++, h[0] = ["M", i, j]);for (var n, o, p = 3 == b.length && "M" == b[0][0] && "R" == b[1][0].toUpperCase() && "Z" == b[2][0].toUpperCase(), q = m, r = b.length; r > q; q++) {
        if (h.push(n = []), o = b[q], g = o[0], g != g.toUpperCase()) switch (n[0] = g.toUpperCase(), n[0]) {case "A":
            n[1] = o[1], n[2] = o[2], n[3] = o[3], n[4] = o[4], n[5] = o[5], n[6] = +(o[6] + i), n[7] = +(o[7] + j);break;case "V":
            n[1] = +o[1] + j;break;case "H":
            n[1] = +o[1] + i;break;case "R":
            for (var s = [i, j].concat(o.slice(1)), t = 2, u = s.length; u > t; t++) s[t] = +s[t] + i, s[++t] = +s[t] + j;h.pop(), h = h.concat(H(s, p));break;case "O":
            h.pop(), s = x(i, j, o[1], o[2]), s.push(s[0]), h = h.concat(s);break;case "U":
            h.pop(), h = h.concat(x(i, j, o[1], o[2], o[3])), n = ["U"].concat(h[h.length - 1].slice(-2));break;case "M":
            k = +o[1] + i, l = +o[2] + j;default:
            for (t = 1, u = o.length; u > t; t++) n[t] = +o[t] + (t % 2 ? i : j);} else if ("R" == g) s = [i, j].concat(o.slice(1)), h.pop(), h = h.concat(H(s, p)), n = ["R"].concat(o.slice(-2));else if ("O" == g) h.pop(), s = x(i, j, o[1], o[2]), s.push(s[0]), h = h.concat(s);else if ("U" == g) h.pop(), h = h.concat(x(i, j, o[1], o[2], o[3])), n = ["U"].concat(h[h.length - 1].slice(-2));else for (var v = 0, w = o.length; w > v; v++) n[v] = o[v];if (g = g.toUpperCase(), "O" != g) switch (n[0]) {case "Z":
            i = k, j = l;break;case "H":
            i = n[1];break;case "V":
            j = n[1];break;case "M":
            k = n[n.length - 2], l = n[n.length - 1];default:
            i = n[n.length - 2], j = n[n.length - 1];}
      }return h.toString = e, d.abs = f(h), h;
    }function A(a, b, c, d) {
      return [a, b, c, d, c, d];
    }function B(a, b, c, d, e, f) {
      var g = 1 / 3,
          h = 2 / 3;return [g * a + h * c, g * b + h * d, g * e + h * c, g * f + h * d, e, f];
    }function C(b, c, d, e, f, g, h, i, j, k) {
      var l,
          m = 120 * P / 180,
          n = P / 180 * (+f || 0),
          o = [],
          p = a._.cacher(function (a, b, c) {
        var d = a * O.cos(c) - b * O.sin(c),
            e = a * O.sin(c) + b * O.cos(c);return { x: d, y: e };
      });if (k) y = k[0], z = k[1], w = k[2], x = k[3];else {
        l = p(b, c, -n), b = l.x, c = l.y, l = p(i, j, -n), i = l.x, j = l.y;var q = (O.cos(P / 180 * f), O.sin(P / 180 * f), (b - i) / 2),
            r = (c - j) / 2,
            s = q * q / (d * d) + r * r / (e * e);s > 1 && (s = O.sqrt(s), d = s * d, e = s * e);var t = d * d,
            u = e * e,
            v = (g == h ? -1 : 1) * O.sqrt(T((t * u - t * r * r - u * q * q) / (t * r * r + u * q * q))),
            w = v * d * r / e + (b + i) / 2,
            x = v * -e * q / d + (c + j) / 2,
            y = O.asin(((c - x) / e).toFixed(9)),
            z = O.asin(((j - x) / e).toFixed(9));y = w > b ? P - y : y, z = w > i ? P - z : z, 0 > y && (y = 2 * P + y), 0 > z && (z = 2 * P + z), h && y > z && (y -= 2 * P), !h && z > y && (z -= 2 * P);
      }var A = z - y;if (T(A) > m) {
        var B = z,
            D = i,
            E = j;z = y + m * (h && z > y ? 1 : -1), i = w + d * O.cos(z), j = x + e * O.sin(z), o = C(i, j, d, e, f, 0, h, D, E, [z, B, w, x]);
      }A = z - y;var F = O.cos(y),
          G = O.sin(y),
          H = O.cos(z),
          I = O.sin(z),
          J = O.tan(A / 4),
          K = 4 / 3 * d * J,
          L = 4 / 3 * e * J,
          M = [b, c],
          N = [b + K * G, c - L * F],
          Q = [i + K * I, j - L * H],
          R = [i, j];if (N[0] = 2 * M[0] - N[0], N[1] = 2 * M[1] - N[1], k) return [N, Q, R].concat(o);o = [N, Q, R].concat(o).join().split(",");for (var S = [], U = 0, V = o.length; V > U; U++) S[U] = U % 2 ? p(o[U - 1], o[U], n).y : p(o[U], o[U + 1], n).x;return S;
    }function D(a, b, c, d, e, f, g, h, i) {
      var j = 1 - i;return { x: S(j, 3) * a + 3 * S(j, 2) * i * c + 3 * j * i * i * e + S(i, 3) * g, y: S(j, 3) * b + 3 * S(j, 2) * i * d + 3 * j * i * i * f + S(i, 3) * h };
    }function E(a, b, c, d, e, f, g, h) {
      var i,
          j = e - 2 * c + a - (g - 2 * e + c),
          k = 2 * (c - a) - 2 * (e - c),
          l = a - c,
          m = (-k + O.sqrt(k * k - 4 * j * l)) / 2 / j,
          n = (-k - O.sqrt(k * k - 4 * j * l)) / 2 / j,
          o = [b, h],
          p = [a, g];return T(m) > "1e12" && (m = .5), T(n) > "1e12" && (n = .5), m > 0 && 1 > m && (i = D(a, b, c, d, e, f, g, h, m), p.push(i.x), o.push(i.y)), n > 0 && 1 > n && (i = D(a, b, c, d, e, f, g, h, n), p.push(i.x), o.push(i.y)), j = f - 2 * d + b - (h - 2 * f + d), k = 2 * (d - b) - 2 * (f - d), l = b - d, m = (-k + O.sqrt(k * k - 4 * j * l)) / 2 / j, n = (-k - O.sqrt(k * k - 4 * j * l)) / 2 / j, T(m) > "1e12" && (m = .5), T(n) > "1e12" && (n = .5), m > 0 && 1 > m && (i = D(a, b, c, d, e, f, g, h, m), p.push(i.x), o.push(i.y)), n > 0 && 1 > n && (i = D(a, b, c, d, e, f, g, h, n), p.push(i.x), o.push(i.y)), { min: { x: Q.apply(0, p), y: Q.apply(0, o) }, max: { x: R.apply(0, p), y: R.apply(0, o) } };
    }function F(a, b) {
      var d = !b && c(a);if (!b && d.curve) return f(d.curve);for (var e = z(a), g = b && z(b), h = { x: 0, y: 0, bx: 0, by: 0, X: 0, Y: 0, qx: null, qy: null }, i = { x: 0, y: 0, bx: 0, by: 0, X: 0, Y: 0, qx: null, qy: null }, j = function (a, b) {
        var c, d;if (!a) return ["C", b.x, b.y, b.x, b.y, b.x, b.y];switch (!(a[0] in { T: 1, Q: 1 }) && (b.qx = b.qy = null), a[0]) {case "M":
            b.X = a[1], b.Y = a[2];break;case "A":
            a = ["C"].concat(C.apply(0, [b.x, b.y].concat(a.slice(1))));break;case "S":
            c = b.x + (b.x - (b.bx || b.x)), d = b.y + (b.y - (b.by || b.y)), a = ["C", c, d].concat(a.slice(1));break;case "T":
            b.qx = b.x + (b.x - (b.qx || b.x)), b.qy = b.y + (b.y - (b.qy || b.y)), a = ["C"].concat(B(b.x, b.y, b.qx, b.qy, a[1], a[2]));break;case "Q":
            b.qx = a[1], b.qy = a[2], a = ["C"].concat(B(b.x, b.y, a[1], a[2], a[3], a[4]));break;case "L":
            a = ["C"].concat(A(b.x, b.y, a[1], a[2]));break;case "H":
            a = ["C"].concat(A(b.x, b.y, a[1], b.y));break;case "V":
            a = ["C"].concat(A(b.x, b.y, b.x, a[1]));break;case "Z":
            a = ["C"].concat(A(b.x, b.y, b.X, b.Y));}return a;
      }, k = function (a, b) {
        if (a[b].length > 7) {
          a[b].shift();for (var c = a[b]; c.length;) a.splice(b++, 0, ["C"].concat(c.splice(0, 6)));a.splice(b, 1), n = R(e.length, g && g.length || 0);
        }
      }, l = function (a, b, c, d, f) {
        a && b && "M" == a[f][0] && "M" != b[f][0] && (b.splice(f, 0, ["M", d.x, d.y]), c.bx = 0, c.by = 0, c.x = a[f][1], c.y = a[f][2], n = R(e.length, g && g.length || 0));
      }, m = 0, n = R(e.length, g && g.length || 0); n > m; m++) {
        e[m] = j(e[m], h), k(e, m), g && (g[m] = j(g[m], i)), g && k(g, m), l(e, g, h, i, m), l(g, e, i, h, m);var o = e[m],
            p = g && g[m],
            q = o.length,
            r = g && p.length;h.x = o[q - 2], h.y = o[q - 1], h.bx = N(o[q - 4]) || h.x, h.by = N(o[q - 3]) || h.y, i.bx = g && (N(p[r - 4]) || i.x), i.by = g && (N(p[r - 3]) || i.y), i.x = g && p[r - 2], i.y = g && p[r - 1];
      }return g || (d.curve = f(e)), g ? [e, g] : e;
    }function G(a, b) {
      if (!b) return a;var c, d, e, f, g, h, i;for (a = F(a), e = 0, g = a.length; g > e; e++) for (i = a[e], f = 1, h = i.length; h > f; f += 2) c = b.x(i[f], i[f + 1]), d = b.y(i[f], i[f + 1]), i[f] = c, i[f + 1] = d;return a;
    }function H(a, b) {
      for (var c = [], d = 0, e = a.length; e - 2 * !b > d; d += 2) {
        var f = [{ x: +a[d - 2], y: +a[d - 1] }, { x: +a[d], y: +a[d + 1] }, { x: +a[d + 2], y: +a[d + 3] }, { x: +a[d + 4], y: +a[d + 5] }];b ? d ? e - 4 == d ? f[3] = { x: +a[0], y: +a[1] } : e - 2 == d && (f[2] = { x: +a[0], y: +a[1] }, f[3] = { x: +a[2], y: +a[3] }) : f[0] = { x: +a[e - 2], y: +a[e - 1] } : e - 4 == d ? f[3] = f[2] : d || (f[0] = { x: +a[d], y: +a[d + 1] }), c.push(["C", (-f[0].x + 6 * f[1].x + f[2].x) / 6, (-f[0].y + 6 * f[1].y + f[2].y) / 6, (f[1].x + 6 * f[2].x - f[3].x) / 6, (f[1].y + 6 * f[2].y - f[3].y) / 6, f[2].x, f[2].y]);
      }return c;
    }var I = b.prototype,
        J = a.is,
        K = a._.clone,
        L = "hasOwnProperty",
        M = /,?([a-z]),?/gi,
        N = parseFloat,
        O = Math,
        P = O.PI,
        Q = O.min,
        R = O.max,
        S = O.pow,
        T = O.abs,
        U = h(1),
        V = h(),
        W = h(0, 1),
        X = a._unit2px,
        Y = { path: function (a) {
        return a.attr("path");
      }, circle: function (a) {
        var b = X(a);return x(b.cx, b.cy, b.r);
      }, ellipse: function (a) {
        var b = X(a);return x(b.cx, b.cy, b.rx, b.ry);
      }, rect: function (a) {
        var b = X(a);return w(b.x, b.y, b.width, b.height, b.rx, b.ry);
      }, image: function (a) {
        var b = X(a);return w(b.x, b.y, b.width, b.height);
      }, text: function (a) {
        var b = a.node.getBBox();return w(b.x, b.y, b.width, b.height);
      }, g: function (a) {
        var b = a.node.getBBox();return w(b.x, b.y, b.width, b.height);
      }, symbol: function (a) {
        var b = a.getBBox();return w(b.x, b.y, b.width, b.height);
      }, line: function (a) {
        return "M" + [a.attr("x1"), a.attr("y1"), a.attr("x2"), a.attr("y2")];
      }, polyline: function (a) {
        return "M" + a.attr("points");
      }, polygon: function (a) {
        return "M" + a.attr("points") + "z";
      }, svg: function (a) {
        var b = a.node.getBBox();return w(b.x, b.y, b.width, b.height);
      }, deflt: function (a) {
        var b = a.node.getBBox();return w(b.x, b.y, b.width, b.height);
      } };a.path = c, a.path.getTotalLength = U, a.path.getPointAtLength = V, a.path.getSubpath = function (a, b, c) {
      if (this.getTotalLength(a) - c < 1e-6) return W(a, b).end;var d = W(a, c, 1);return b ? W(d, b).end : d;
    }, I.getTotalLength = function () {
      return this.node.getTotalLength ? this.node.getTotalLength() : void 0;
    }, I.getPointAtLength = function (a) {
      return V(this.attr("d"), a);
    }, I.getSubpath = function (b, c) {
      return a.path.getSubpath(this.attr("d"), b, c);
    }, a._.box = d, a.path.findDotsAtSegment = i, a.path.bezierBBox = j, a.path.isPointInsideBBox = k, a.path.isBBoxIntersect = l, a.path.intersection = r, a.path.intersectionNumber = s, a.path.isPointInside = u, a.path.getBBox = v, a.path.get = Y, a.path.toRelative = y, a.path.toAbsolute = z, a.path.toCubic = F, a.path.map = G, a.path.toString = e, a.path.clone = f;
  }), d.plugin(function (a) {
    var b = Math.max,
        c = Math.min,
        d = function (a) {
      if (this.items = [], this.length = 0, this.type = "set", a) for (var b = 0, c = a.length; c > b; b++) a[b] && (this[this.items.length] = this.items[this.items.length] = a[b], this.length++);
    },
        e = d.prototype;e.push = function () {
      for (var a, b, c = 0, d = arguments.length; d > c; c++) a = arguments[c], a && (b = this.items.length, this[b] = this.items[b] = a, this.length++);return this;
    }, e.pop = function () {
      return this.length && delete this[this.length--], this.items.pop();
    }, e.forEach = function (a, b) {
      for (var c = 0, d = this.items.length; d > c; c++) if (a.call(b, this.items[c], c) === !1) return this;return this;
    }, e.remove = function () {
      for (; this.length;) this.pop().remove();return this;
    }, e.attr = function (a) {
      for (var b = 0, c = this.items.length; c > b; b++) this.items[b].attr(a);return this;
    }, e.clear = function () {
      for (; this.length;) this.pop();
    }, e.splice = function (a, e) {
      a = 0 > a ? b(this.length + a, 0) : a, e = b(0, c(this.length - a, e));var f,
          g = [],
          h = [],
          i = [];for (f = 2; f < arguments.length; f++) i.push(arguments[f]);for (f = 0; e > f; f++) h.push(this[a + f]);for (; f < this.length - a; f++) g.push(this[a + f]);var j = i.length;for (f = 0; f < j + g.length; f++) this.items[a + f] = this[a + f] = j > f ? i[f] : g[f - j];for (f = this.items.length = this.length -= e - j; this[f];) delete this[f++];return new d(h);
    }, e.exclude = function (a) {
      for (var b = 0, c = this.length; c > b; b++) if (this[b] == a) return this.splice(b, 1), !0;return !1;
    }, e.insertAfter = function (a) {
      for (var b = this.items.length; b--;) this.items[b].insertAfter(a);return this;
    }, e.getBBox = function () {
      for (var a = [], d = [], e = [], f = [], g = this.items.length; g--;) if (!this.items[g].removed) {
        var h = this.items[g].getBBox();a.push(h.x), d.push(h.y), e.push(h.x + h.width), f.push(h.y + h.height);
      }return a = c.apply(0, a), d = c.apply(0, d), e = b.apply(0, e), f = b.apply(0, f), { x: a, y: d, x2: e, y2: f, width: e - a, height: f - d, cx: a + (e - a) / 2, cy: d + (f - d) / 2 };
    }, e.clone = function (a) {
      a = new d();for (var b = 0, c = this.items.length; c > b; b++) a.push(this.items[b].clone());return a;
    }, e.toString = function () {
      return "Snap‘s set";
    }, e.type = "set", a.set = function () {
      var a = new d();return arguments.length && a.push.apply(a, Array.prototype.slice.call(arguments, 0)), a;
    };
  }), d.plugin(function (a, b) {
    function c(a) {
      var b = a[0];switch (b.toLowerCase()) {case "t":
          return [b, 0, 0];case "m":
          return [b, 1, 0, 0, 1, 0, 0];case "r":
          return 4 == a.length ? [b, 0, a[2], a[3]] : [b, 0];case "s":
          return 5 == a.length ? [b, 1, 1, a[3], a[4]] : 3 == a.length ? [b, 1, 1] : [b, 1];}
    }function d(b, d, e) {
      d = l(d).replace(/\.{3}|\u2026/g, b), b = a.parseTransformString(b) || [], d = a.parseTransformString(d) || [];for (var f, g, j, k, m = Math.max(b.length, d.length), n = [], o = [], p = 0; m > p; p++) {
        if (j = b[p] || c(d[p]), k = d[p] || c(j), j[0] != k[0] || "r" == j[0].toLowerCase() && (j[2] != k[2] || j[3] != k[3]) || "s" == j[0].toLowerCase() && (j[3] != k[3] || j[4] != k[4])) {
          b = a._.transform2matrix(b, e()), d = a._.transform2matrix(d, e()), n = [["m", b.a, b.b, b.c, b.d, b.e, b.f]], o = [["m", d.a, d.b, d.c, d.d, d.e, d.f]];break;
        }for (n[p] = [], o[p] = [], f = 0, g = Math.max(j.length, k.length); g > f; f++) f in j && (n[p][f] = j[f]), f in k && (o[p][f] = k[f]);
      }return { from: i(n), to: i(o), f: h(n) };
    }function e(a) {
      return a;
    }function f(a) {
      return function (b) {
        return +b.toFixed(3) + a;
      };
    }function g(b) {
      return a.rgb(b[0], b[1], b[2]);
    }function h(a) {
      var b,
          c,
          d,
          e,
          f,
          g,
          h = 0,
          i = [];for (b = 0, c = a.length; c > b; b++) {
        for (f = "[", g = ['"' + a[b][0] + '"'], d = 1, e = a[b].length; e > d; d++) g[d] = "val[" + h++ + "]";f += g + "]", i[b] = f;
      }return Function("val", "return Snap.path.toString.call([" + i + "])");
    }function i(a) {
      for (var b = [], c = 0, d = a.length; d > c; c++) for (var e = 1, f = a[c].length; f > e; e++) b.push(a[c][e]);return b;
    }var j = {},
        k = /[a-z]+$/i,
        l = String;j.stroke = j.fill = "colour", b.prototype.equal = function (b, c) {
      var m,
          n,
          o = l(this.attr(b) || ""),
          p = this;if (o == +o && c == +c) return { from: +o, to: +c, f: e };if ("colour" == j[b]) return m = a.color(o), n = a.color(c), { from: [m.r, m.g, m.b, m.opacity], to: [n.r, n.g, n.b, n.opacity], f: g };if ("transform" == b || "gradientTransform" == b || "patternTransform" == b) return c instanceof a.Matrix && (c = c.toTransformString()), a._.rgTransform.test(c) || (c = a._.svgTransform2string(c)), d(o, c, function () {
        return p.getBBox(1);
      });if ("d" == b || "path" == b) return m = a.path.toCubic(o, c), { from: i(m[0]), to: i(m[1]), f: h(m[0]) };if ("points" == b) return m = l(o).split(","), n = l(c).split(","), { from: m, to: n, f: function (a) {
          return a;
        } };var q = o.match(k),
          r = l(c).match(k);return q && q == r ? { from: parseFloat(o), to: parseFloat(c), f: f(q) } : { from: this.asPX(b), to: this.asPX(b, c), f: e };
    };
  }), d.plugin(function (a, c, d, e) {
    for (var f = c.prototype, g = "hasOwnProperty", h = ("createTouch" in e.doc), i = ["click", "dblclick", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "touchstart", "touchmove", "touchend", "touchcancel"], j = { mousedown: "touchstart", mousemove: "touchmove", mouseup: "touchend" }, k = function (a) {
      var b = "y" == a ? "scrollTop" : "scrollLeft";return e.doc.documentElement[b] || e.doc.body[b];
    }, l = function () {
      this.returnValue = !1;
    }, m = function () {
      return this.originalEvent.preventDefault();
    }, n = function () {
      this.cancelBubble = !0;
    }, o = function () {
      return this.originalEvent.stopPropagation();
    }, p = function () {
      return e.doc.addEventListener ? function (a, b, c, d) {
        var e = h && j[b] ? j[b] : b,
            f = function (e) {
          var f = k("y"),
              i = k("x");if (h && j[g](b)) for (var l = 0, n = e.targetTouches && e.targetTouches.length; n > l; l++) if (e.targetTouches[l].target == a || a.contains(e.targetTouches[l].target)) {
            var p = e;e = e.targetTouches[l], e.originalEvent = p, e.preventDefault = m, e.stopPropagation = o;break;
          }var q = e.clientX + i,
              r = e.clientY + f;return c.call(d, e, q, r);
        };return b !== e && a.addEventListener(b, f, !1), a.addEventListener(e, f, !1), function () {
          return b !== e && a.removeEventListener(b, f, !1), a.removeEventListener(e, f, !1), !0;
        };
      } : e.doc.attachEvent ? function (a, b, c, d) {
        var f = function (a) {
          a = a || e.win.event;var b = k("y"),
              f = k("x"),
              g = a.clientX + f,
              h = a.clientY + b;return a.preventDefault = a.preventDefault || l, a.stopPropagation = a.stopPropagation || n, c.call(d, a, g, h);
        };a.attachEvent("on" + b, f);var g = function () {
          return a.detachEvent("on" + b, f), !0;
        };return g;
      } : void 0;
    }(), q = [], r = function (c) {
      for (var d, e = c.clientX, f = c.clientY, g = k("y"), i = k("x"), j = q.length; j--;) {
        if (d = q[j], h) {
          for (var l, m = c.touches && c.touches.length; m--;) if (l = c.touches[m], l.identifier == d.el._drag.id || d.el.node.contains(l.target)) {
            e = l.clientX, f = l.clientY, (c.originalEvent ? c.originalEvent : c).preventDefault();break;
          }
        } else c.preventDefault();var n = d.el.node;a._.glob, n.nextSibling, n.parentNode, n.style.display, e += i, f += g, b("snap.drag.move." + d.el.id, d.move_scope || d.el, e - d.el._drag.x, f - d.el._drag.y, e, f, c);
      }
    }, s = function (c) {
      a.unmousemove(r).unmouseup(s);for (var d, e = q.length; e--;) d = q[e], d.el._drag = {}, b("snap.drag.end." + d.el.id, d.end_scope || d.start_scope || d.move_scope || d.el, c);q = [];
    }, t = i.length; t--;) !function (b) {
      a[b] = f[b] = function (c, d) {
        return a.is(c, "function") && (this.events = this.events || [], this.events.push({ name: b, f: c, unbind: p(this.shape || this.node || e.doc, b, c, d || this) })), this;
      }, a["un" + b] = f["un" + b] = function (a) {
        for (var c = this.events || [], d = c.length; d--;) if (c[d].name == b && (c[d].f == a || !a)) return c[d].unbind(), c.splice(d, 1), !c.length && delete this.events, this;return this;
      };
    }(i[t]);f.hover = function (a, b, c, d) {
      return this.mouseover(a, c).mouseout(b, d || c);
    }, f.unhover = function (a, b) {
      return this.unmouseover(a).unmouseout(b);
    };var u = [];f.drag = function (c, d, e, f, g, h) {
      function i(i, j, k) {
        (i.originalEvent || i).preventDefault(), this._drag.x = j, this._drag.y = k, this._drag.id = i.identifier, !q.length && a.mousemove(r).mouseup(s), q.push({ el: this, move_scope: f, start_scope: g, end_scope: h }), d && b.on("snap.drag.start." + this.id, d), c && b.on("snap.drag.move." + this.id, c), e && b.on("snap.drag.end." + this.id, e), b("snap.drag.start." + this.id, g || f || this, j, k, i);
      }if (!arguments.length) {
        var j;return this.drag(function (a, b) {
          this.attr({ transform: j + (j ? "T" : "t") + [a, b] });
        }, function () {
          j = this.transform().local;
        });
      }return this._drag = {}, u.push({ el: this, start: i }), this.mousedown(i), this;
    }, f.undrag = function () {
      for (var c = u.length; c--;) u[c].el == this && (this.unmousedown(u[c].start), u.splice(c, 1), b.unbind("snap.drag.*." + this.id));return !u.length && a.unmousemove(r).unmouseup(s), this;
    };
  }), d.plugin(function (a, c, d) {
    var e = (c.prototype, d.prototype),
        f = /^\s*url\((.+)\)/,
        g = String,
        h = a._.$;a.filter = {}, e.filter = function (b) {
      var d = this;"svg" != d.type && (d = d.paper);var e = a.parse(g(b)),
          f = a._.id(),
          i = (d.node.offsetWidth, d.node.offsetHeight, h("filter"));return h(i, { id: f, filterUnits: "userSpaceOnUse" }), i.appendChild(e.node), d.defs.appendChild(i), new c(i);
    }, b.on("snap.util.getattr.filter", function () {
      b.stop();var c = h(this.node, "filter");if (c) {
        var d = g(c).match(f);return d && a.select(d[1]);
      }
    }), b.on("snap.util.attr.filter", function (d) {
      if (d instanceof c && "filter" == d.type) {
        b.stop();var e = d.node.id;e || (h(d.node, { id: d.id }), e = d.id), h(this.node, { filter: a.url(e) });
      }d && "none" != d || (b.stop(), this.node.removeAttribute("filter"));
    }), a.filter.blur = function (b, c) {
      null == b && (b = 2);var d = null == c ? b : [b, c];return a.format('<feGaussianBlur stdDeviation="{def}"/>', { def: d });
    }, a.filter.blur.toString = function () {
      return this();
    }, a.filter.shadow = function (b, c, d, e) {
      return e = e || "#000", null == d && (d = 4), "string" == typeof d && (e = d, d = 4), null == b && (b = 0, c = 2), null == c && (c = b), e = a.color(e), a.format('<feGaussianBlur in="SourceAlpha" stdDeviation="{blur}"/><feOffset dx="{dx}" dy="{dy}" result="offsetblur"/><feFlood flood-color="{color}"/><feComposite in2="offsetblur" operator="in"/><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>', { color: e, dx: b, dy: c, blur: d });
    }, a.filter.shadow.toString = function () {
      return this();
    }, a.filter.grayscale = function (b) {
      return null == b && (b = 1), a.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {b} {h} 0 0 0 0 0 1 0"/>', { a: .2126 + .7874 * (1 - b), b: .7152 - .7152 * (1 - b), c: .0722 - .0722 * (1 - b), d: .2126 - .2126 * (1 - b), e: .7152 + .2848 * (1 - b), f: .0722 - .0722 * (1 - b), g: .2126 - .2126 * (1 - b), h: .0722 + .9278 * (1 - b) });
    }, a.filter.grayscale.toString = function () {
      return this();
    }, a.filter.sepia = function (b) {
      return null == b && (b = 1), a.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {h} {i} 0 0 0 0 0 1 0"/>', { a: .393 + .607 * (1 - b), b: .769 - .769 * (1 - b), c: .189 - .189 * (1 - b), d: .349 - .349 * (1 - b), e: .686 + .314 * (1 - b), f: .168 - .168 * (1 - b), g: .272 - .272 * (1 - b), h: .534 - .534 * (1 - b), i: .131 + .869 * (1 - b) });
    }, a.filter.sepia.toString = function () {
      return this();
    }, a.filter.saturate = function (b) {
      return null == b && (b = 1), a.format('<feColorMatrix type="saturate" values="{amount}"/>', { amount: 1 - b });
    }, a.filter.saturate.toString = function () {
      return this();
    }, a.filter.hueRotate = function (b) {
      return b = b || 0, a.format('<feColorMatrix type="hueRotate" values="{angle}"/>', { angle: b });
    }, a.filter.hueRotate.toString = function () {
      return this();
    }, a.filter.invert = function (b) {
      return null == b && (b = 1), a.format('<feComponentTransfer><feFuncR type="table" tableValues="{amount} {amount2}"/><feFuncG type="table" tableValues="{amount} {amount2}"/><feFuncB type="table" tableValues="{amount} {amount2}"/></feComponentTransfer>', { amount: b, amount2: 1 - b });
    }, a.filter.invert.toString = function () {
      return this();
    }, a.filter.brightness = function (b) {
      return null == b && (b = 1), a.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}"/><feFuncG type="linear" slope="{amount}"/><feFuncB type="linear" slope="{amount}"/></feComponentTransfer>', { amount: b });
    }, a.filter.brightness.toString = function () {
      return this();
    }, a.filter.contrast = function (b) {
      return null == b && (b = 1), a.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}" intercept="{amount2}"/><feFuncG type="linear" slope="{amount}" intercept="{amount2}"/><feFuncB type="linear" slope="{amount}" intercept="{amount2}"/></feComponentTransfer>', { amount: b, amount2: .5 - b / 2 });
    }, a.filter.contrast.toString = function () {
      return this();
    };
  }), d;
});
!function ($) {

  "use strict";

  var FOUNDATION_VERSION = '6.2.2';

  // Global Foundation object
  // This is attached to the window, or used as a module for AMD/Browserify
  var Foundation = {
    version: FOUNDATION_VERSION,

    /**
     * Stores initialized plugins.
     */
    _plugins: {},

    /**
     * Stores generated unique ids for plugin instances
     */
    _uuids: [],

    /**
     * Returns a boolean for RTL support
     */
    rtl: function () {
      return $('html').attr('dir') === 'rtl';
    },
    /**
     * Defines a Foundation plugin, adding it to the `Foundation` namespace and the list of plugins to initialize when reflowing.
     * @param {Object} plugin - The constructor of the plugin.
     */
    plugin: function (plugin, name) {
      // Object key to use when adding to global Foundation object
      // Examples: Foundation.Reveal, Foundation.OffCanvas
      var className = name || functionName(plugin);
      // Object key to use when storing the plugin, also used to create the identifying data attribute for the plugin
      // Examples: data-reveal, data-off-canvas
      var attrName = hyphenate(className);

      // Add to the Foundation object and the plugins list (for reflowing)
      this._plugins[attrName] = this[className] = plugin;
    },
    /**
     * @function
     * Populates the _uuids array with pointers to each individual plugin instance.
     * Adds the `zfPlugin` data-attribute to programmatically created plugins to allow use of $(selector).foundation(method) calls.
     * Also fires the initialization event for each plugin, consolidating repetitive code.
     * @param {Object} plugin - an instance of a plugin, usually `this` in context.
     * @param {String} name - the name of the plugin, passed as a camelCased string.
     * @fires Plugin#init
     */
    registerPlugin: function (plugin, name) {
      var pluginName = name ? hyphenate(name) : functionName(plugin.constructor).toLowerCase();
      plugin.uuid = this.GetYoDigits(6, pluginName);

      if (!plugin.$element.attr(`data-${ pluginName }`)) {
        plugin.$element.attr(`data-${ pluginName }`, plugin.uuid);
      }
      if (!plugin.$element.data('zfPlugin')) {
        plugin.$element.data('zfPlugin', plugin);
      }
      /**
       * Fires when the plugin has initialized.
       * @event Plugin#init
       */
      plugin.$element.trigger(`init.zf.${ pluginName }`);

      this._uuids.push(plugin.uuid);

      return;
    },
    /**
     * @function
     * Removes the plugins uuid from the _uuids array.
     * Removes the zfPlugin data attribute, as well as the data-plugin-name attribute.
     * Also fires the destroyed event for the plugin, consolidating repetitive code.
     * @param {Object} plugin - an instance of a plugin, usually `this` in context.
     * @fires Plugin#destroyed
     */
    unregisterPlugin: function (plugin) {
      var pluginName = hyphenate(functionName(plugin.$element.data('zfPlugin').constructor));

      this._uuids.splice(this._uuids.indexOf(plugin.uuid), 1);
      plugin.$element.removeAttr(`data-${ pluginName }`).removeData('zfPlugin')
      /**
       * Fires when the plugin has been destroyed.
       * @event Plugin#destroyed
       */
      .trigger(`destroyed.zf.${ pluginName }`);
      for (var prop in plugin) {
        plugin[prop] = null; //clean up script to prep for garbage collection.
      }
      return;
    },

    /**
     * @function
     * Causes one or more active plugins to re-initialize, resetting event listeners, recalculating positions, etc.
     * @param {String} plugins - optional string of an individual plugin key, attained by calling `$(element).data('pluginName')`, or string of a plugin class i.e. `'dropdown'`
     * @default If no argument is passed, reflow all currently active plugins.
     */
    reInit: function (plugins) {
      var isJQ = plugins instanceof $;
      try {
        if (isJQ) {
          plugins.each(function () {
            $(this).data('zfPlugin')._init();
          });
        } else {
          var type = typeof plugins,
              _this = this,
              fns = {
            'object': function (plgs) {
              plgs.forEach(function (p) {
                p = hyphenate(p);
                $('[data-' + p + ']').foundation('_init');
              });
            },
            'string': function () {
              plugins = hyphenate(plugins);
              $('[data-' + plugins + ']').foundation('_init');
            },
            'undefined': function () {
              this['object'](Object.keys(_this._plugins));
            }
          };
          fns[type](plugins);
        }
      } catch (err) {
        console.error(err);
      } finally {
        return plugins;
      }
    },

    /**
     * returns a random base-36 uid with namespacing
     * @function
     * @param {Number} length - number of random base-36 digits desired. Increase for more random strings.
     * @param {String} namespace - name of plugin to be incorporated in uid, optional.
     * @default {String} '' - if no plugin name is provided, nothing is appended to the uid.
     * @returns {String} - unique id
     */
    GetYoDigits: function (length, namespace) {
      length = length || 6;
      return Math.round(Math.pow(36, length + 1) - Math.random() * Math.pow(36, length)).toString(36).slice(1) + (namespace ? `-${ namespace }` : '');
    },
    /**
     * Initialize plugins on any elements within `elem` (and `elem` itself) that aren't already initialized.
     * @param {Object} elem - jQuery object containing the element to check inside. Also checks the element itself, unless it's the `document` object.
     * @param {String|Array} plugins - A list of plugins to initialize. Leave this out to initialize everything.
     */
    reflow: function (elem, plugins) {

      // If plugins is undefined, just grab everything
      if (typeof plugins === 'undefined') {
        plugins = Object.keys(this._plugins);
      }
      // If plugins is a string, convert it to an array with one item
      else if (typeof plugins === 'string') {
          plugins = [plugins];
        }

      var _this = this;

      // Iterate through each plugin
      $.each(plugins, function (i, name) {
        // Get the current plugin
        var plugin = _this._plugins[name];

        // Localize the search to all elements inside elem, as well as elem itself, unless elem === document
        var $elem = $(elem).find('[data-' + name + ']').addBack('[data-' + name + ']');

        // For each plugin found, initialize it
        $elem.each(function () {
          var $el = $(this),
              opts = {};
          // Don't double-dip on plugins
          if ($el.data('zfPlugin')) {
            console.warn("Tried to initialize " + name + " on an element that already has a Foundation plugin.");
            return;
          }

          if ($el.attr('data-options')) {
            var thing = $el.attr('data-options').split(';').forEach(function (e, i) {
              var opt = e.split(':').map(function (el) {
                return el.trim();
              });
              if (opt[0]) opts[opt[0]] = parseValue(opt[1]);
            });
          }
          try {
            $el.data('zfPlugin', new plugin($(this), opts));
          } catch (er) {
            console.error(er);
          } finally {
            return;
          }
        });
      });
    },
    getFnName: functionName,
    transitionend: function ($elem) {
      var transitions = {
        'transition': 'transitionend',
        'WebkitTransition': 'webkitTransitionEnd',
        'MozTransition': 'transitionend',
        'OTransition': 'otransitionend'
      };
      var elem = document.createElement('div'),
          end;

      for (var t in transitions) {
        if (typeof elem.style[t] !== 'undefined') {
          end = transitions[t];
        }
      }
      if (end) {
        return end;
      } else {
        end = setTimeout(function () {
          $elem.triggerHandler('transitionend', [$elem]);
        }, 1);
        return 'transitionend';
      }
    }
  };

  Foundation.util = {
    /**
     * Function for applying a debounce effect to a function call.
     * @function
     * @param {Function} func - Function to be called at end of timeout.
     * @param {Number} delay - Time in ms to delay the call of `func`.
     * @returns function
     */
    throttle: function (func, delay) {
      var timer = null;

      return function () {
        var context = this,
            args = arguments;

        if (timer === null) {
          timer = setTimeout(function () {
            func.apply(context, args);
            timer = null;
          }, delay);
        }
      };
    }
  };

  // TODO: consider not making this a jQuery function
  // TODO: need way to reflow vs. re-initialize
  /**
   * The Foundation jQuery method.
   * @param {String|Array} method - An action to perform on the current jQuery object.
   */
  var foundation = function (method) {
    var type = typeof method,
        $meta = $('meta.foundation-mq'),
        $noJS = $('.no-js');

    if (!$meta.length) {
      $('<meta class="foundation-mq">').appendTo(document.head);
    }
    if ($noJS.length) {
      $noJS.removeClass('no-js');
    }

    if (type === 'undefined') {
      //needs to initialize the Foundation object, or an individual plugin.
      Foundation.MediaQuery._init();
      Foundation.reflow(this);
    } else if (type === 'string') {
      //an individual method to invoke on a plugin or group of plugins
      var args = Array.prototype.slice.call(arguments, 1); //collect all the arguments, if necessary
      var plugClass = this.data('zfPlugin'); //determine the class of plugin

      if (plugClass !== undefined && plugClass[method] !== undefined) {
        //make sure both the class and method exist
        if (this.length === 1) {
          //if there's only one, call it directly.
          plugClass[method].apply(plugClass, args);
        } else {
          this.each(function (i, el) {
            //otherwise loop through the jQuery collection and invoke the method on each
            plugClass[method].apply($(el).data('zfPlugin'), args);
          });
        }
      } else {
        //error for no class or no method
        throw new ReferenceError("We're sorry, '" + method + "' is not an available method for " + (plugClass ? functionName(plugClass) : 'this element') + '.');
      }
    } else {
      //error for invalid argument type
      throw new TypeError(`We're sorry, ${ type } is not a valid parameter. You must use a string representing the method you wish to invoke.`);
    }
    return this;
  };

  window.Foundation = Foundation;
  $.fn.foundation = foundation;

  // Polyfill for requestAnimationFrame
  (function () {
    if (!Date.now || !window.Date.now) window.Date.now = Date.now = function () {
      return new Date().getTime();
    };

    var vendors = ['webkit', 'moz'];
    for (var i = 0; i < vendors.length && !window.requestAnimationFrame; ++i) {
      var vp = vendors[i];
      window.requestAnimationFrame = window[vp + 'RequestAnimationFrame'];
      window.cancelAnimationFrame = window[vp + 'CancelAnimationFrame'] || window[vp + 'CancelRequestAnimationFrame'];
    }
    if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) || !window.requestAnimationFrame || !window.cancelAnimationFrame) {
      var lastTime = 0;
      window.requestAnimationFrame = function (callback) {
        var now = Date.now();
        var nextTime = Math.max(lastTime + 16, now);
        return setTimeout(function () {
          callback(lastTime = nextTime);
        }, nextTime - now);
      };
      window.cancelAnimationFrame = clearTimeout;
    }
    /**
     * Polyfill for performance.now, required by rAF
     */
    if (!window.performance || !window.performance.now) {
      window.performance = {
        start: Date.now(),
        now: function () {
          return Date.now() - this.start;
        }
      };
    }
  })();
  if (!Function.prototype.bind) {
    Function.prototype.bind = function (oThis) {
      if (typeof this !== 'function') {
        // closest thing possible to the ECMAScript 5
        // internal IsCallable function
        throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
      }

      var aArgs = Array.prototype.slice.call(arguments, 1),
          fToBind = this,
          fNOP = function () {},
          fBound = function () {
        return fToBind.apply(this instanceof fNOP ? this : oThis, aArgs.concat(Array.prototype.slice.call(arguments)));
      };

      if (this.prototype) {
        // native functions don't have a prototype
        fNOP.prototype = this.prototype;
      }
      fBound.prototype = new fNOP();

      return fBound;
    };
  }
  // Polyfill to get the name of a function in IE9
  function functionName(fn) {
    if (Function.prototype.name === undefined) {
      var funcNameRegex = /function\s([^(]{1,})\(/;
      var results = funcNameRegex.exec(fn.toString());
      return results && results.length > 1 ? results[1].trim() : "";
    } else if (fn.prototype === undefined) {
      return fn.constructor.name;
    } else {
      return fn.prototype.constructor.name;
    }
  }
  function parseValue(str) {
    if (/true/.test(str)) return true;else if (/false/.test(str)) return false;else if (!isNaN(str * 1)) return parseFloat(str);
    return str;
  }
  // Convert PascalCase to kebab-case
  // Thank you: http://stackoverflow.com/a/8955580
  function hyphenate(str) {
    return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
  }
}(jQuery);
/*******************************************
 *                                         *
 * This util was created by Marius Olbertz *
 * Please thank Marius on GitHub /owlbertz *
 * or the web http://www.mariusolbertz.de/ *
 *                                         *
 ******************************************/

'use strict';

!function ($) {

  const keyCodes = {
    9: 'TAB',
    13: 'ENTER',
    27: 'ESCAPE',
    32: 'SPACE',
    37: 'ARROW_LEFT',
    38: 'ARROW_UP',
    39: 'ARROW_RIGHT',
    40: 'ARROW_DOWN'
  };

  var commands = {};

  var Keyboard = {
    keys: getKeyCodes(keyCodes),

    /**
     * Parses the (keyboard) event and returns a String that represents its key
     * Can be used like Foundation.parseKey(event) === Foundation.keys.SPACE
     * @param {Event} event - the event generated by the event handler
     * @return String key - String that represents the key pressed
     */
    parseKey(event) {
      var key = keyCodes[event.which || event.keyCode] || String.fromCharCode(event.which).toUpperCase();
      if (event.shiftKey) key = `SHIFT_${ key }`;
      if (event.ctrlKey) key = `CTRL_${ key }`;
      if (event.altKey) key = `ALT_${ key }`;
      return key;
    },

    /**
     * Handles the given (keyboard) event
     * @param {Event} event - the event generated by the event handler
     * @param {String} component - Foundation component's name, e.g. Slider or Reveal
     * @param {Objects} functions - collection of functions that are to be executed
     */
    handleKey(event, component, functions) {
      var commandList = commands[component],
          keyCode = this.parseKey(event),
          cmds,
          command,
          fn;

      if (!commandList) return console.warn('Component not defined!');

      if (typeof commandList.ltr === 'undefined') {
        // this component does not differentiate between ltr and rtl
        cmds = commandList; // use plain list
      } else {
        // merge ltr and rtl: if document is rtl, rtl overwrites ltr and vice versa
        if (Foundation.rtl()) cmds = $.extend({}, commandList.ltr, commandList.rtl);else cmds = $.extend({}, commandList.rtl, commandList.ltr);
      }
      command = cmds[keyCode];

      fn = functions[command];
      if (fn && typeof fn === 'function') {
        // execute function  if exists
        var returnValue = fn.apply();
        if (functions.handled || typeof functions.handled === 'function') {
          // execute function when event was handled
          functions.handled(returnValue);
        }
      } else {
        if (functions.unhandled || typeof functions.unhandled === 'function') {
          // execute function when event was not handled
          functions.unhandled();
        }
      }
    },

    /**
     * Finds all focusable elements within the given `$element`
     * @param {jQuery} $element - jQuery object to search within
     * @return {jQuery} $focusable - all focusable elements within `$element`
     */
    findFocusable($element) {
      return $element.find('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]').filter(function () {
        if (!$(this).is(':visible') || $(this).attr('tabindex') < 0) {
          return false;
        } //only have visible elements and those that have a tabindex greater or equal 0
        return true;
      });
    },

    /**
     * Returns the component name name
     * @param {Object} component - Foundation component, e.g. Slider or Reveal
     * @return String componentName
     */

    register(componentName, cmds) {
      commands[componentName] = cmds;
    }
  };

  /*
   * Constants for easier comparing.
   * Can be used like Foundation.parseKey(event) === Foundation.keys.SPACE
   */
  function getKeyCodes(kcs) {
    var k = {};
    for (var kc in kcs) k[kcs[kc]] = kcs[kc];
    return k;
  }

  Foundation.Keyboard = Keyboard;
}(jQuery);
'use strict';

!function ($) {

  Foundation.Box = {
    ImNotTouchingYou: ImNotTouchingYou,
    GetDimensions: GetDimensions,
    GetOffsets: GetOffsets
  };

  /**
   * Compares the dimensions of an element to a container and determines collision events with container.
   * @function
   * @param {jQuery} element - jQuery object to test for collisions.
   * @param {jQuery} parent - jQuery object to use as bounding container.
   * @param {Boolean} lrOnly - set to true to check left and right values only.
   * @param {Boolean} tbOnly - set to true to check top and bottom values only.
   * @default if no parent object passed, detects collisions with `window`.
   * @returns {Boolean} - true if collision free, false if a collision in any direction.
   */
  function ImNotTouchingYou(element, parent, lrOnly, tbOnly) {
    var eleDims = GetDimensions(element),
        top,
        bottom,
        left,
        right;

    if (parent) {
      var parDims = GetDimensions(parent);

      bottom = eleDims.offset.top + eleDims.height <= parDims.height + parDims.offset.top;
      top = eleDims.offset.top >= parDims.offset.top;
      left = eleDims.offset.left >= parDims.offset.left;
      right = eleDims.offset.left + eleDims.width <= parDims.width + parDims.offset.left;
    } else {
      bottom = eleDims.offset.top + eleDims.height <= eleDims.windowDims.height + eleDims.windowDims.offset.top;
      top = eleDims.offset.top >= eleDims.windowDims.offset.top;
      left = eleDims.offset.left >= eleDims.windowDims.offset.left;
      right = eleDims.offset.left + eleDims.width <= eleDims.windowDims.width;
    }

    var allDirs = [bottom, top, left, right];

    if (lrOnly) {
      return left === right === true;
    }

    if (tbOnly) {
      return top === bottom === true;
    }

    return allDirs.indexOf(false) === -1;
  };

  /**
   * Uses native methods to return an object of dimension values.
   * @function
   * @param {jQuery || HTML} element - jQuery object or DOM element for which to get the dimensions. Can be any element other that document or window.
   * @returns {Object} - nested object of integer pixel values
   * TODO - if element is window, return only those values.
   */
  function GetDimensions(elem, test) {
    elem = elem.length ? elem[0] : elem;

    if (elem === window || elem === document) {
      throw new Error("I'm sorry, Dave. I'm afraid I can't do that.");
    }

    var rect = elem.getBoundingClientRect(),
        parRect = elem.parentNode.getBoundingClientRect(),
        winRect = document.body.getBoundingClientRect(),
        winY = window.pageYOffset,
        winX = window.pageXOffset;

    return {
      width: rect.width,
      height: rect.height,
      offset: {
        top: rect.top + winY,
        left: rect.left + winX
      },
      parentDims: {
        width: parRect.width,
        height: parRect.height,
        offset: {
          top: parRect.top + winY,
          left: parRect.left + winX
        }
      },
      windowDims: {
        width: winRect.width,
        height: winRect.height,
        offset: {
          top: winY,
          left: winX
        }
      }
    };
  }

  /**
   * Returns an object of top and left integer pixel values for dynamically rendered elements,
   * such as: Tooltip, Reveal, and Dropdown
   * @function
   * @param {jQuery} element - jQuery object for the element being positioned.
   * @param {jQuery} anchor - jQuery object for the element's anchor point.
   * @param {String} position - a string relating to the desired position of the element, relative to it's anchor
   * @param {Number} vOffset - integer pixel value of desired vertical separation between anchor and element.
   * @param {Number} hOffset - integer pixel value of desired horizontal separation between anchor and element.
   * @param {Boolean} isOverflow - if a collision event is detected, sets to true to default the element to full width - any desired offset.
   * TODO alter/rewrite to work with `em` values as well/instead of pixels
   */
  function GetOffsets(element, anchor, position, vOffset, hOffset, isOverflow) {
    var $eleDims = GetDimensions(element),
        $anchorDims = anchor ? GetDimensions(anchor) : null;

    switch (position) {
      case 'top':
        return {
          left: Foundation.rtl() ? $anchorDims.offset.left - $eleDims.width + $anchorDims.width : $anchorDims.offset.left,
          top: $anchorDims.offset.top - ($eleDims.height + vOffset)
        };
        break;
      case 'left':
        return {
          left: $anchorDims.offset.left - ($eleDims.width + hOffset),
          top: $anchorDims.offset.top
        };
        break;
      case 'right':
        return {
          left: $anchorDims.offset.left + $anchorDims.width + hOffset,
          top: $anchorDims.offset.top
        };
        break;
      case 'center top':
        return {
          left: $anchorDims.offset.left + $anchorDims.width / 2 - $eleDims.width / 2,
          top: $anchorDims.offset.top - ($eleDims.height + vOffset)
        };
        break;
      case 'center bottom':
        return {
          left: isOverflow ? hOffset : $anchorDims.offset.left + $anchorDims.width / 2 - $eleDims.width / 2,
          top: $anchorDims.offset.top + $anchorDims.height + vOffset
        };
        break;
      case 'center left':
        return {
          left: $anchorDims.offset.left - ($eleDims.width + hOffset),
          top: $anchorDims.offset.top + $anchorDims.height / 2 - $eleDims.height / 2
        };
        break;
      case 'center right':
        return {
          left: $anchorDims.offset.left + $anchorDims.width + hOffset + 1,
          top: $anchorDims.offset.top + $anchorDims.height / 2 - $eleDims.height / 2
        };
        break;
      case 'center':
        return {
          left: $eleDims.windowDims.offset.left + $eleDims.windowDims.width / 2 - $eleDims.width / 2,
          top: $eleDims.windowDims.offset.top + $eleDims.windowDims.height / 2 - $eleDims.height / 2
        };
        break;
      case 'reveal':
        return {
          left: ($eleDims.windowDims.width - $eleDims.width) / 2,
          top: $eleDims.windowDims.offset.top + vOffset
        };
      case 'reveal full':
        return {
          left: $eleDims.windowDims.offset.left,
          top: $eleDims.windowDims.offset.top
        };
        break;
      case 'left bottom':
        return {
          left: $anchorDims.offset.left - ($eleDims.width + hOffset),
          top: $anchorDims.offset.top + $anchorDims.height
        };
        break;
      case 'right bottom':
        return {
          left: $anchorDims.offset.left + $anchorDims.width + hOffset - $eleDims.width,
          top: $anchorDims.offset.top + $anchorDims.height
        };
        break;
      default:
        return {
          left: Foundation.rtl() ? $anchorDims.offset.left - $eleDims.width + $anchorDims.width : $anchorDims.offset.left,
          top: $anchorDims.offset.top + $anchorDims.height + vOffset
        };
    }
  }
}(jQuery);
'use strict';

!function ($) {

  const Nest = {
    Feather(menu, type = 'zf') {
      menu.attr('role', 'menubar');

      var items = menu.find('li').attr({ 'role': 'menuitem' }),
          subMenuClass = `is-${ type }-submenu`,
          subItemClass = `${ subMenuClass }-item`,
          hasSubClass = `is-${ type }-submenu-parent`;

      menu.find('a:first').attr('tabindex', 0);

      items.each(function () {
        var $item = $(this),
            $sub = $item.children('ul');

        if ($sub.length) {
          $item.addClass(hasSubClass).attr({
            'aria-haspopup': true,
            'aria-expanded': false,
            'aria-label': $item.children('a:first').text()
          });

          $sub.addClass(`submenu ${ subMenuClass }`).attr({
            'data-submenu': '',
            'aria-hidden': true,
            'role': 'menu'
          });
        }

        if ($item.parent('[data-submenu]').length) {
          $item.addClass(`is-submenu-item ${ subItemClass }`);
        }
      });

      return;
    },

    Burn(menu, type) {
      var items = menu.find('li').removeAttr('tabindex'),
          subMenuClass = `is-${ type }-submenu`,
          subItemClass = `${ subMenuClass }-item`,
          hasSubClass = `is-${ type }-submenu-parent`;

      menu.find('*').removeClass(`${ subMenuClass } ${ subItemClass } ${ hasSubClass } is-submenu-item submenu is-active`).removeAttr('data-submenu').css('display', '');

      // console.log(      menu.find('.' + subMenuClass + ', .' + subItemClass + ', .has-submenu, .is-submenu-item, .submenu, [data-submenu]')
      //           .removeClass(subMenuClass + ' ' + subItemClass + ' has-submenu is-submenu-item submenu')
      //           .removeAttr('data-submenu'));
      // items.each(function(){
      //   var $item = $(this),
      //       $sub = $item.children('ul');
      //   if($item.parent('[data-submenu]').length){
      //     $item.removeClass('is-submenu-item ' + subItemClass);
      //   }
      //   if($sub.length){
      //     $item.removeClass('has-submenu');
      //     $sub.removeClass('submenu ' + subMenuClass).removeAttr('data-submenu');
      //   }
      // });
    }
  };

  Foundation.Nest = Nest;
}(jQuery);
'use strict';

!function ($) {

  // Default set of media queries
  const defaultQueries = {
    'default': 'only screen',
    landscape: 'only screen and (orientation: landscape)',
    portrait: 'only screen and (orientation: portrait)',
    retina: 'only screen and (-webkit-min-device-pixel-ratio: 2),' + 'only screen and (min--moz-device-pixel-ratio: 2),' + 'only screen and (-o-min-device-pixel-ratio: 2/1),' + 'only screen and (min-device-pixel-ratio: 2),' + 'only screen and (min-resolution: 192dpi),' + 'only screen and (min-resolution: 2dppx)'
  };

  var MediaQuery = {
    queries: [],

    current: '',

    /**
     * Initializes the media query helper, by extracting the breakpoint list from the CSS and activating the breakpoint watcher.
     * @function
     * @private
     */
    _init() {
      var self = this;
      var extractedStyles = $('.foundation-mq').css('font-family');
      var namedQueries;

      namedQueries = parseStyleToObject(extractedStyles);

      for (var key in namedQueries) {
        if (namedQueries.hasOwnProperty(key)) {
          self.queries.push({
            name: key,
            value: `only screen and (min-width: ${ namedQueries[key] })`
          });
        }
      }

      this.current = this._getCurrentSize();

      this._watcher();
    },

    /**
     * Checks if the screen is at least as wide as a breakpoint.
     * @function
     * @param {String} size - Name of the breakpoint to check.
     * @returns {Boolean} `true` if the breakpoint matches, `false` if it's smaller.
     */
    atLeast(size) {
      var query = this.get(size);

      if (query) {
        return window.matchMedia(query).matches;
      }

      return false;
    },

    /**
     * Gets the media query of a breakpoint.
     * @function
     * @param {String} size - Name of the breakpoint to get.
     * @returns {String|null} - The media query of the breakpoint, or `null` if the breakpoint doesn't exist.
     */
    get(size) {
      for (var i in this.queries) {
        if (this.queries.hasOwnProperty(i)) {
          var query = this.queries[i];
          if (size === query.name) return query.value;
        }
      }

      return null;
    },

    /**
     * Gets the current breakpoint name by testing every breakpoint and returning the last one to match (the biggest one).
     * @function
     * @private
     * @returns {String} Name of the current breakpoint.
     */
    _getCurrentSize() {
      var matched;

      for (var i = 0; i < this.queries.length; i++) {
        var query = this.queries[i];

        if (window.matchMedia(query.value).matches) {
          matched = query;
        }
      }

      if (typeof matched === 'object') {
        return matched.name;
      } else {
        return matched;
      }
    },

    /**
     * Activates the breakpoint watcher, which fires an event on the window whenever the breakpoint changes.
     * @function
     * @private
     */
    _watcher() {
      $(window).on('resize.zf.mediaquery', () => {
        var newSize = this._getCurrentSize(),
            currentSize = this.current;

        if (newSize !== currentSize) {
          // Change the current media query
          this.current = newSize;

          // Broadcast the media query change on the window
          $(window).trigger('changed.zf.mediaquery', [newSize, currentSize]);
        }
      });
    }
  };

  Foundation.MediaQuery = MediaQuery;

  // matchMedia() polyfill - Test a CSS media type/query in JS.
  // Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas, David Knight. Dual MIT/BSD license
  window.matchMedia || (window.matchMedia = function () {
    'use strict';

    // For browsers that support matchMedium api such as IE 9 and webkit

    var styleMedia = window.styleMedia || window.media;

    // For those that don't support matchMedium
    if (!styleMedia) {
      var style = document.createElement('style'),
          script = document.getElementsByTagName('script')[0],
          info = null;

      style.type = 'text/css';
      style.id = 'matchmediajs-test';

      script.parentNode.insertBefore(style, script);

      // 'style.currentStyle' is used by IE <= 8 and 'window.getComputedStyle' for all other browsers
      info = 'getComputedStyle' in window && window.getComputedStyle(style, null) || style.currentStyle;

      styleMedia = {
        matchMedium(media) {
          var text = `@media ${ media }{ #matchmediajs-test { width: 1px; } }`;

          // 'style.styleSheet' is used by IE <= 8 and 'style.textContent' for all other browsers
          if (style.styleSheet) {
            style.styleSheet.cssText = text;
          } else {
            style.textContent = text;
          }

          // Test if media query is true or false
          return info.width === '1px';
        }
      };
    }

    return function (media) {
      return {
        matches: styleMedia.matchMedium(media || 'all'),
        media: media || 'all'
      };
    };
  }());

  // Thank you: https://github.com/sindresorhus/query-string
  function parseStyleToObject(str) {
    var styleObject = {};

    if (typeof str !== 'string') {
      return styleObject;
    }

    str = str.trim().slice(1, -1); // browsers re-quote string style values

    if (!str) {
      return styleObject;
    }

    styleObject = str.split('&').reduce(function (ret, param) {
      var parts = param.replace(/\+/g, ' ').split('=');
      var key = parts[0];
      var val = parts[1];
      key = decodeURIComponent(key);

      // missing `=` should be `null`:
      // http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
      val = val === undefined ? null : decodeURIComponent(val);

      if (!ret.hasOwnProperty(key)) {
        ret[key] = val;
      } else if (Array.isArray(ret[key])) {
        ret[key].push(val);
      } else {
        ret[key] = [ret[key], val];
      }
      return ret;
    }, {});

    return styleObject;
  }

  Foundation.MediaQuery = MediaQuery;
}(jQuery);
'use strict';

!function ($) {

  const MutationObserver = function () {
    var prefixes = ['WebKit', 'Moz', 'O', 'Ms', ''];
    for (var i = 0; i < prefixes.length; i++) {
      if (`${ prefixes[i] }MutationObserver` in window) {
        return window[`${ prefixes[i] }MutationObserver`];
      }
    }
    return false;
  }();

  const triggers = (el, type) => {
    el.data(type).split(' ').forEach(id => {
      $(`#${ id }`)[type === 'close' ? 'trigger' : 'triggerHandler'](`${ type }.zf.trigger`, [el]);
    });
  };
  // Elements with [data-open] will reveal a plugin that supports it when clicked.
  $(document).on('click.zf.trigger', '[data-open]', function () {
    triggers($(this), 'open');
  });

  // Elements with [data-close] will close a plugin that supports it when clicked.
  // If used without a value on [data-close], the event will bubble, allowing it to close a parent component.
  $(document).on('click.zf.trigger', '[data-close]', function () {
    let id = $(this).data('close');
    if (id) {
      triggers($(this), 'close');
    } else {
      $(this).trigger('close.zf.trigger');
    }
  });

  // Elements with [data-toggle] will toggle a plugin that supports it when clicked.
  $(document).on('click.zf.trigger', '[data-toggle]', function () {
    triggers($(this), 'toggle');
  });

  // Elements with [data-closable] will respond to close.zf.trigger events.
  $(document).on('close.zf.trigger', '[data-closable]', function (e) {
    e.stopPropagation();
    let animation = $(this).data('closable');

    if (animation !== '') {
      Foundation.Motion.animateOut($(this), animation, function () {
        $(this).trigger('closed.zf');
      });
    } else {
      $(this).fadeOut().trigger('closed.zf');
    }
  });

  $(document).on('focus.zf.trigger blur.zf.trigger', '[data-toggle-focus]', function () {
    let id = $(this).data('toggle-focus');
    $(`#${ id }`).triggerHandler('toggle.zf.trigger', [$(this)]);
  });

  /**
  * Fires once after all other scripts have loaded
  * @function
  * @private
  */
  $(window).load(() => {
    checkListeners();
  });

  function checkListeners() {
    eventsListener();
    resizeListener();
    scrollListener();
    closemeListener();
  }

  //******** only fires this function once on load, if there's something to watch ********
  function closemeListener(pluginName) {
    var yetiBoxes = $('[data-yeti-box]'),
        plugNames = ['dropdown', 'tooltip', 'reveal'];

    if (pluginName) {
      if (typeof pluginName === 'string') {
        plugNames.push(pluginName);
      } else if (typeof pluginName === 'object' && typeof pluginName[0] === 'string') {
        plugNames.concat(pluginName);
      } else {
        console.error('Plugin names must be strings');
      }
    }
    if (yetiBoxes.length) {
      let listeners = plugNames.map(name => {
        return `closeme.zf.${ name }`;
      }).join(' ');

      $(window).off(listeners).on(listeners, function (e, pluginId) {
        let plugin = e.namespace.split('.')[0];
        let plugins = $(`[data-${ plugin }]`).not(`[data-yeti-box="${ pluginId }"]`);

        plugins.each(function () {
          let _this = $(this);

          _this.triggerHandler('close.zf.trigger', [_this]);
        });
      });
    }
  }

  function resizeListener(debounce) {
    let timer,
        $nodes = $('[data-resize]');
    if ($nodes.length) {
      $(window).off('resize.zf.trigger').on('resize.zf.trigger', function (e) {
        if (timer) {
          clearTimeout(timer);
        }

        timer = setTimeout(function () {

          if (!MutationObserver) {
            //fallback for IE 9
            $nodes.each(function () {
              $(this).triggerHandler('resizeme.zf.trigger');
            });
          }
          //trigger all listening elements and signal a resize event
          $nodes.attr('data-events', "resize");
        }, debounce || 10); //default time to emit resize event
      });
    }
  }

  function scrollListener(debounce) {
    let timer,
        $nodes = $('[data-scroll]');
    if ($nodes.length) {
      $(window).off('scroll.zf.trigger').on('scroll.zf.trigger', function (e) {
        if (timer) {
          clearTimeout(timer);
        }

        timer = setTimeout(function () {

          if (!MutationObserver) {
            //fallback for IE 9
            $nodes.each(function () {
              $(this).triggerHandler('scrollme.zf.trigger');
            });
          }
          //trigger all listening elements and signal a scroll event
          $nodes.attr('data-events', "scroll");
        }, debounce || 10); //default time to emit scroll event
      });
    }
  }

  function eventsListener() {
    if (!MutationObserver) {
      return false;
    }
    let nodes = document.querySelectorAll('[data-resize], [data-scroll], [data-mutate]');

    //element callback
    var listeningElementsMutation = function (mutationRecordsList) {
      var $target = $(mutationRecordsList[0].target);
      //trigger the event handler for the element depending on type
      switch ($target.attr("data-events")) {

        case "resize":
          $target.triggerHandler('resizeme.zf.trigger', [$target]);
          break;

        case "scroll":
          $target.triggerHandler('scrollme.zf.trigger', [$target, window.pageYOffset]);
          break;

        // case "mutate" :
        // console.log('mutate', $target);
        // $target.triggerHandler('mutate.zf.trigger');
        //
        // //make sure we don't get stuck in an infinite loop from sloppy codeing
        // if ($target.index('[data-mutate]') == $("[data-mutate]").length-1) {
        //   domMutationObserver();
        // }
        // break;

        default:
          return false;
        //nothing
      }
    };

    if (nodes.length) {
      //for each element that needs to listen for resizing, scrolling, (or coming soon mutation) add a single observer
      for (var i = 0; i <= nodes.length - 1; i++) {
        let elementObserver = new MutationObserver(listeningElementsMutation);
        elementObserver.observe(nodes[i], { attributes: true, childList: false, characterData: false, subtree: false, attributeFilter: ["data-events"] });
      }
    }
  }

  // ------------------------------------

  // [PH]
  // Foundation.CheckWatchers = checkWatchers;
  Foundation.IHearYou = checkListeners;
  // Foundation.ISeeYou = scrollListener;
  // Foundation.IFeelYou = closemeListener;
}(jQuery);

// function domMutationObserver(debounce) {
//   // !!! This is coming soon and needs more work; not active  !!! //
//   var timer,
//   nodes = document.querySelectorAll('[data-mutate]');
//   //
//   if (nodes.length) {
//     // var MutationObserver = (function () {
//     //   var prefixes = ['WebKit', 'Moz', 'O', 'Ms', ''];
//     //   for (var i=0; i < prefixes.length; i++) {
//     //     if (prefixes[i] + 'MutationObserver' in window) {
//     //       return window[prefixes[i] + 'MutationObserver'];
//     //     }
//     //   }
//     //   return false;
//     // }());
//
//
//     //for the body, we need to listen for all changes effecting the style and class attributes
//     var bodyObserver = new MutationObserver(bodyMutation);
//     bodyObserver.observe(document.body, { attributes: true, childList: true, characterData: false, subtree:true, attributeFilter:["style", "class"]});
//
//
//     //body callback
//     function bodyMutation(mutate) {
//       //trigger all listening elements and signal a mutation event
//       if (timer) { clearTimeout(timer); }
//
//       timer = setTimeout(function() {
//         bodyObserver.disconnect();
//         $('[data-mutate]').attr('data-events',"mutate");
//       }, debounce || 150);
//     }
//   }
// }
'use strict';

!function ($) {

  /**
   * Motion module.
   * @module foundation.motion
   */

  const initClasses = ['mui-enter', 'mui-leave'];
  const activeClasses = ['mui-enter-active', 'mui-leave-active'];

  const Motion = {
    animateIn: function (element, animation, cb) {
      animate(true, element, animation, cb);
    },

    animateOut: function (element, animation, cb) {
      animate(false, element, animation, cb);
    }
  };

  function Move(duration, elem, fn) {
    var anim,
        prog,
        start = null;
    // console.log('called');

    function move(ts) {
      if (!start) start = window.performance.now();
      // console.log(start, ts);
      prog = ts - start;
      fn.apply(elem);

      if (prog < duration) {
        anim = window.requestAnimationFrame(move, elem);
      } else {
        window.cancelAnimationFrame(anim);
        elem.trigger('finished.zf.animate', [elem]).triggerHandler('finished.zf.animate', [elem]);
      }
    }
    anim = window.requestAnimationFrame(move);
  }

  /**
   * Animates an element in or out using a CSS transition class.
   * @function
   * @private
   * @param {Boolean} isIn - Defines if the animation is in or out.
   * @param {Object} element - jQuery or HTML object to animate.
   * @param {String} animation - CSS class to use.
   * @param {Function} cb - Callback to run when animation is finished.
   */
  function animate(isIn, element, animation, cb) {
    element = $(element).eq(0);

    if (!element.length) return;

    var initClass = isIn ? initClasses[0] : initClasses[1];
    var activeClass = isIn ? activeClasses[0] : activeClasses[1];

    // Set up the animation
    reset();

    element.addClass(animation).css('transition', 'none');

    requestAnimationFrame(() => {
      element.addClass(initClass);
      if (isIn) element.show();
    });

    // Start the animation
    requestAnimationFrame(() => {
      element[0].offsetWidth;
      element.css('transition', '').addClass(activeClass);
    });

    // Clean up the animation when it finishes
    element.one(Foundation.transitionend(element), finish);

    // Hides the element (for out animations), resets the element, and runs a callback
    function finish() {
      if (!isIn) element.hide();
      reset();
      if (cb) cb.apply(element);
    }

    // Resets transitions and removes motion-specific classes
    function reset() {
      element[0].style.transitionDuration = 0;
      element.removeClass(`${ initClass } ${ activeClass } ${ animation }`);
    }
  }

  Foundation.Move = Move;
  Foundation.Motion = Motion;
}(jQuery);
'use strict';

!function ($) {

  function Timer(elem, options, cb) {
    var _this = this,
        duration = options.duration,
        //options is an object for easily adding features later.
    nameSpace = Object.keys(elem.data())[0] || 'timer',
        remain = -1,
        start,
        timer;

    this.isPaused = false;

    this.restart = function () {
      remain = -1;
      clearTimeout(timer);
      this.start();
    };

    this.start = function () {
      this.isPaused = false;
      // if(!elem.data('paused')){ return false; }//maybe implement this sanity check if used for other things.
      clearTimeout(timer);
      remain = remain <= 0 ? duration : remain;
      elem.data('paused', false);
      start = Date.now();
      timer = setTimeout(function () {
        if (options.infinite) {
          _this.restart(); //rerun the timer.
        }
        cb();
      }, remain);
      elem.trigger(`timerstart.zf.${ nameSpace }`);
    };

    this.pause = function () {
      this.isPaused = true;
      //if(elem.data('paused')){ return false; }//maybe implement this sanity check if used for other things.
      clearTimeout(timer);
      elem.data('paused', true);
      var end = Date.now();
      remain = remain - (end - start);
      elem.trigger(`timerpaused.zf.${ nameSpace }`);
    };
  }

  /**
   * Runs a callback function when images are fully loaded.
   * @param {Object} images - Image(s) to check if loaded.
   * @param {Func} callback - Function to execute when image is fully loaded.
   */
  function onImagesLoaded(images, callback) {
    var self = this,
        unloaded = images.length;

    if (unloaded === 0) {
      callback();
    }

    images.each(function () {
      if (this.complete) {
        singleImageLoaded();
      } else if (typeof this.naturalWidth !== 'undefined' && this.naturalWidth > 0) {
        singleImageLoaded();
      } else {
        $(this).one('load', function () {
          singleImageLoaded();
        });
      }
    });

    function singleImageLoaded() {
      unloaded--;
      if (unloaded === 0) {
        callback();
      }
    }
  }

  Foundation.Timer = Timer;
  Foundation.onImagesLoaded = onImagesLoaded;
}(jQuery);
'use strict';

!function ($) {

  /**
   * DropdownMenu module.
   * @module foundation.dropdown-menu
   * @requires foundation.util.keyboard
   * @requires foundation.util.box
   * @requires foundation.util.nest
   */

  class DropdownMenu {
    /**
     * Creates a new instance of DropdownMenu.
     * @class
     * @fires DropdownMenu#init
     * @param {jQuery} element - jQuery object to make into a dropdown menu.
     * @param {Object} options - Overrides to the default plugin settings.
     */
    constructor(element, options) {
      this.$element = element;
      this.options = $.extend({}, DropdownMenu.defaults, this.$element.data(), options);

      Foundation.Nest.Feather(this.$element, 'dropdown');
      this._init();

      Foundation.registerPlugin(this, 'DropdownMenu');
      Foundation.Keyboard.register('DropdownMenu', {
        'ENTER': 'open',
        'SPACE': 'open',
        'ARROW_RIGHT': 'next',
        'ARROW_UP': 'up',
        'ARROW_DOWN': 'down',
        'ARROW_LEFT': 'previous',
        'ESCAPE': 'close'
      });
    }

    /**
     * Initializes the plugin, and calls _prepareMenu
     * @private
     * @function
     */
    _init() {
      var subs = this.$element.find('li.is-dropdown-submenu-parent');
      this.$element.children('.is-dropdown-submenu-parent').children('.is-dropdown-submenu').addClass('first-sub');

      this.$menuItems = this.$element.find('[role="menuitem"]');
      this.$tabs = this.$element.children('[role="menuitem"]');
      this.$tabs.find('ul.is-dropdown-submenu').addClass(this.options.verticalClass);

      if (this.$element.hasClass(this.options.rightClass) || this.options.alignment === 'right' || Foundation.rtl() || this.$element.parents('.top-bar-right').is('*')) {
        this.options.alignment = 'right';
        subs.addClass('opens-left');
      } else {
        subs.addClass('opens-right');
      }
      this.changed = false;
      this._events();
    }
    /**
     * Adds event listeners to elements within the menu
     * @private
     * @function
     */
    _events() {
      var _this = this,
          hasTouch = 'ontouchstart' in window || typeof window.ontouchstart !== 'undefined',
          parClass = 'is-dropdown-submenu-parent';

      // used for onClick and in the keyboard handlers
      var handleClickFn = function (e) {
        var $elem = $(e.target).parentsUntil('ul', `.${ parClass }`),
            hasSub = $elem.hasClass(parClass),
            hasClicked = $elem.attr('data-is-click') === 'true',
            $sub = $elem.children('.is-dropdown-submenu');

        if (hasSub) {
          if (hasClicked) {
            if (!_this.options.closeOnClick || !_this.options.clickOpen && !hasTouch || _this.options.forceFollow && hasTouch) {
              return;
            } else {
              e.stopImmediatePropagation();
              e.preventDefault();
              _this._hide($elem);
            }
          } else {
            e.preventDefault();
            e.stopImmediatePropagation();
            _this._show($elem.children('.is-dropdown-submenu'));
            $elem.add($elem.parentsUntil(_this.$element, `.${ parClass }`)).attr('data-is-click', true);
          }
        } else {
          return;
        }
      };

      if (this.options.clickOpen || hasTouch) {
        this.$menuItems.on('click.zf.dropdownmenu touchstart.zf.dropdownmenu', handleClickFn);
      }

      if (!this.options.disableHover) {
        this.$menuItems.on('mouseenter.zf.dropdownmenu', function (e) {
          var $elem = $(this),
              hasSub = $elem.hasClass(parClass);

          if (hasSub) {
            clearTimeout(_this.delay);
            _this.delay = setTimeout(function () {
              _this._show($elem.children('.is-dropdown-submenu'));
            }, _this.options.hoverDelay);
          }
        }).on('mouseleave.zf.dropdownmenu', function (e) {
          var $elem = $(this),
              hasSub = $elem.hasClass(parClass);
          if (hasSub && _this.options.autoclose) {
            if ($elem.attr('data-is-click') === 'true' && _this.options.clickOpen) {
              return false;
            }

            clearTimeout(_this.delay);
            _this.delay = setTimeout(function () {
              _this._hide($elem);
            }, _this.options.closingTime);
          }
        });
      }
      this.$menuItems.on('keydown.zf.dropdownmenu', function (e) {
        var $element = $(e.target).parentsUntil('ul', '[role="menuitem"]'),
            isTab = _this.$tabs.index($element) > -1,
            $elements = isTab ? _this.$tabs : $element.siblings('li').add($element),
            $prevElement,
            $nextElement;

        $elements.each(function (i) {
          if ($(this).is($element)) {
            $prevElement = $elements.eq(i - 1);
            $nextElement = $elements.eq(i + 1);
            return;
          }
        });

        var nextSibling = function () {
          if (!$element.is(':last-child')) {
            $nextElement.children('a:first').focus();
            e.preventDefault();
          }
        },
            prevSibling = function () {
          $prevElement.children('a:first').focus();
          e.preventDefault();
        },
            openSub = function () {
          var $sub = $element.children('ul.is-dropdown-submenu');
          if ($sub.length) {
            _this._show($sub);
            $element.find('li > a:first').focus();
            e.preventDefault();
          } else {
            return;
          }
        },
            closeSub = function () {
          //if ($element.is(':first-child')) {
          var close = $element.parent('ul').parent('li');
          close.children('a:first').focus();
          _this._hide(close);
          e.preventDefault();
          //}
        };
        var functions = {
          open: openSub,
          close: function () {
            _this._hide(_this.$element);
            _this.$menuItems.find('a:first').focus(); // focus to first element
            e.preventDefault();
          },
          handled: function () {
            e.stopImmediatePropagation();
          }
        };

        if (isTab) {
          if (_this.$element.hasClass(_this.options.verticalClass)) {
            // vertical menu
            if (_this.options.alignment === 'left') {
              // left aligned
              $.extend(functions, {
                down: nextSibling,
                up: prevSibling,
                next: openSub,
                previous: closeSub
              });
            } else {
              // right aligned
              $.extend(functions, {
                down: nextSibling,
                up: prevSibling,
                next: closeSub,
                previous: openSub
              });
            }
          } else {
            // horizontal menu
            $.extend(functions, {
              next: nextSibling,
              previous: prevSibling,
              down: openSub,
              up: closeSub
            });
          }
        } else {
          // not tabs -> one sub
          if (_this.options.alignment === 'left') {
            // left aligned
            $.extend(functions, {
              next: openSub,
              previous: closeSub,
              down: nextSibling,
              up: prevSibling
            });
          } else {
            // right aligned
            $.extend(functions, {
              next: closeSub,
              previous: openSub,
              down: nextSibling,
              up: prevSibling
            });
          }
        }
        Foundation.Keyboard.handleKey(e, 'DropdownMenu', functions);
      });
    }

    /**
     * Adds an event handler to the body to close any dropdowns on a click.
     * @function
     * @private
     */
    _addBodyHandler() {
      var $body = $(document.body),
          _this = this;
      $body.off('mouseup.zf.dropdownmenu touchend.zf.dropdownmenu').on('mouseup.zf.dropdownmenu touchend.zf.dropdownmenu', function (e) {
        var $link = _this.$element.find(e.target);
        if ($link.length) {
          return;
        }

        _this._hide();
        $body.off('mouseup.zf.dropdownmenu touchend.zf.dropdownmenu');
      });
    }

    /**
     * Opens a dropdown pane, and checks for collisions first.
     * @param {jQuery} $sub - ul element that is a submenu to show
     * @function
     * @private
     * @fires DropdownMenu#show
     */
    _show($sub) {
      var idx = this.$tabs.index(this.$tabs.filter(function (i, el) {
        return $(el).find($sub).length > 0;
      }));
      var $sibs = $sub.parent('li.is-dropdown-submenu-parent').siblings('li.is-dropdown-submenu-parent');
      this._hide($sibs, idx);
      $sub.css('visibility', 'hidden').addClass('js-dropdown-active').attr({ 'aria-hidden': false }).parent('li.is-dropdown-submenu-parent').addClass('is-active').attr({ 'aria-expanded': true });
      var clear = Foundation.Box.ImNotTouchingYou($sub, null, true);
      if (!clear) {
        var oldClass = this.options.alignment === 'left' ? '-right' : '-left',
            $parentLi = $sub.parent('.is-dropdown-submenu-parent');
        $parentLi.removeClass(`opens${ oldClass }`).addClass(`opens-${ this.options.alignment }`);
        clear = Foundation.Box.ImNotTouchingYou($sub, null, true);
        if (!clear) {
          $parentLi.removeClass(`opens-${ this.options.alignment }`).addClass('opens-inner');
        }
        this.changed = true;
      }
      $sub.css('visibility', '');
      if (this.options.closeOnClick) {
        this._addBodyHandler();
      }
      /**
       * Fires when the new dropdown pane is visible.
       * @event DropdownMenu#show
       */
      this.$element.trigger('show.zf.dropdownmenu', [$sub]);
    }

    /**
     * Hides a single, currently open dropdown pane, if passed a parameter, otherwise, hides everything.
     * @function
     * @param {jQuery} $elem - element with a submenu to hide
     * @param {Number} idx - index of the $tabs collection to hide
     * @private
     */
    _hide($elem, idx) {
      var $toClose;
      if ($elem && $elem.length) {
        $toClose = $elem;
      } else if (idx !== undefined) {
        $toClose = this.$tabs.not(function (i, el) {
          return i === idx;
        });
      } else {
        $toClose = this.$element;
      }
      var somethingToClose = $toClose.hasClass('is-active') || $toClose.find('.is-active').length > 0;

      if (somethingToClose) {
        $toClose.find('li.is-active').add($toClose).attr({
          'aria-expanded': false,
          'data-is-click': false
        }).removeClass('is-active');

        $toClose.find('ul.js-dropdown-active').attr({
          'aria-hidden': true
        }).removeClass('js-dropdown-active');

        if (this.changed || $toClose.find('opens-inner').length) {
          var oldClass = this.options.alignment === 'left' ? 'right' : 'left';
          $toClose.find('li.is-dropdown-submenu-parent').add($toClose).removeClass(`opens-inner opens-${ this.options.alignment }`).addClass(`opens-${ oldClass }`);
          this.changed = false;
        }
        /**
         * Fires when the open menus are closed.
         * @event DropdownMenu#hide
         */
        this.$element.trigger('hide.zf.dropdownmenu', [$toClose]);
      }
    }

    /**
     * Destroys the plugin.
     * @function
     */
    destroy() {
      this.$menuItems.off('.zf.dropdownmenu').removeAttr('data-is-click').removeClass('is-right-arrow is-left-arrow is-down-arrow opens-right opens-left opens-inner');
      $(document.body).off('.zf.dropdownmenu');
      Foundation.Nest.Burn(this.$element, 'dropdown');
      Foundation.unregisterPlugin(this);
    }
  }

  /**
   * Default settings for plugin
   */
  DropdownMenu.defaults = {
    /**
     * Disallows hover events from opening submenus
     * @option
     * @example false
     */
    disableHover: false,
    /**
     * Allow a submenu to automatically close on a mouseleave event, if not clicked open.
     * @option
     * @example true
     */
    autoclose: true,
    /**
     * Amount of time to delay opening a submenu on hover event.
     * @option
     * @example 50
     */
    hoverDelay: 50,
    /**
     * Allow a submenu to open/remain open on parent click event. Allows cursor to move away from menu.
     * @option
     * @example true
     */
    clickOpen: false,
    /**
     * Amount of time to delay closing a submenu on a mouseleave event.
     * @option
     * @example 500
     */

    closingTime: 500,
    /**
     * Position of the menu relative to what direction the submenus should open. Handled by JS.
     * @option
     * @example 'left'
     */
    alignment: 'left',
    /**
     * Allow clicks on the body to close any open submenus.
     * @option
     * @example true
     */
    closeOnClick: true,
    /**
     * Class applied to vertical oriented menus, Foundation default is `vertical`. Update this if using your own class.
     * @option
     * @example 'vertical'
     */
    verticalClass: 'vertical',
    /**
     * Class applied to right-side oriented menus, Foundation default is `align-right`. Update this if using your own class.
     * @option
     * @example 'align-right'
     */
    rightClass: 'align-right',
    /**
     * Boolean to force overide the clicking of links to perform default action, on second touch event for mobile.
     * @option
     * @example false
     */
    forceFollow: true
  };

  // Window exports
  Foundation.plugin(DropdownMenu, 'DropdownMenu');
}(jQuery);
'use strict';

!function ($) {

  /**
   * OffCanvas module.
   * @module foundation.offcanvas
   * @requires foundation.util.mediaQuery
   * @requires foundation.util.triggers
   * @requires foundation.util.motion
   */

  class OffCanvas {
    /**
     * Creates a new instance of an off-canvas wrapper.
     * @class
     * @fires OffCanvas#init
     * @param {Object} element - jQuery object to initialize.
     * @param {Object} options - Overrides to the default plugin settings.
     */
    constructor(element, options) {
      this.$element = element;
      this.options = $.extend({}, OffCanvas.defaults, this.$element.data(), options);
      this.$lastTrigger = $();
      this.$triggers = $();

      this._init();
      this._events();

      Foundation.registerPlugin(this, 'OffCanvas');
    }

    /**
     * Initializes the off-canvas wrapper by adding the exit overlay (if needed).
     * @function
     * @private
     */
    _init() {
      var id = this.$element.attr('id');

      this.$element.attr('aria-hidden', 'true');

      // Find triggers that affect this element and add aria-expanded to them
      this.$triggers = $(document).find('[data-open="' + id + '"], [data-close="' + id + '"], [data-toggle="' + id + '"]').attr('aria-expanded', 'false').attr('aria-controls', id);

      // Add a close trigger over the body if necessary
      if (this.options.closeOnClick) {
        if ($('.js-off-canvas-exit').length) {
          this.$exiter = $('.js-off-canvas-exit');
        } else {
          var exiter = document.createElement('div');
          exiter.setAttribute('class', 'js-off-canvas-exit');
          $('[data-off-canvas-content]').append(exiter);

          this.$exiter = $(exiter);
        }
      }

      this.options.isRevealed = this.options.isRevealed || new RegExp(this.options.revealClass, 'g').test(this.$element[0].className);

      if (this.options.isRevealed) {
        this.options.revealOn = this.options.revealOn || this.$element[0].className.match(/(reveal-for-medium|reveal-for-large)/g)[0].split('-')[2];
        this._setMQChecker();
      }
      if (!this.options.transitionTime) {
        this.options.transitionTime = parseFloat(window.getComputedStyle($('[data-off-canvas-wrapper]')[0]).transitionDuration) * 1000;
      }
    }

    /**
     * Adds event handlers to the off-canvas wrapper and the exit overlay.
     * @function
     * @private
     */
    _events() {
      this.$element.off('.zf.trigger .zf.offcanvas').on({
        'open.zf.trigger': this.open.bind(this),
        'close.zf.trigger': this.close.bind(this),
        'toggle.zf.trigger': this.toggle.bind(this),
        'keydown.zf.offcanvas': this._handleKeyboard.bind(this)
      });

      if (this.options.closeOnClick && this.$exiter.length) {
        this.$exiter.on({ 'click.zf.offcanvas': this.close.bind(this) });
      }
    }

    /**
     * Applies event listener for elements that will reveal at certain breakpoints.
     * @private
     */
    _setMQChecker() {
      var _this = this;

      $(window).on('changed.zf.mediaquery', function () {
        if (Foundation.MediaQuery.atLeast(_this.options.revealOn)) {
          _this.reveal(true);
        } else {
          _this.reveal(false);
        }
      }).one('load.zf.offcanvas', function () {
        if (Foundation.MediaQuery.atLeast(_this.options.revealOn)) {
          _this.reveal(true);
        }
      });
    }

    /**
     * Handles the revealing/hiding the off-canvas at breakpoints, not the same as open.
     * @param {Boolean} isRevealed - true if element should be revealed.
     * @function
     */
    reveal(isRevealed) {
      var $closer = this.$element.find('[data-close]');
      if (isRevealed) {
        this.close();
        this.isRevealed = true;
        // if (!this.options.forceTop) {
        //   var scrollPos = parseInt(window.pageYOffset);
        //   this.$element[0].style.transform = 'translate(0,' + scrollPos + 'px)';
        // }
        // if (this.options.isSticky) { this._stick(); }
        this.$element.off('open.zf.trigger toggle.zf.trigger');
        if ($closer.length) {
          $closer.hide();
        }
      } else {
        this.isRevealed = false;
        // if (this.options.isSticky || !this.options.forceTop) {
        //   this.$element[0].style.transform = '';
        //   $(window).off('scroll.zf.offcanvas');
        // }
        this.$element.on({
          'open.zf.trigger': this.open.bind(this),
          'toggle.zf.trigger': this.toggle.bind(this)
        });
        if ($closer.length) {
          $closer.show();
        }
      }
    }

    /**
     * Opens the off-canvas menu.
     * @function
     * @param {Object} event - Event object passed from listener.
     * @param {jQuery} trigger - element that triggered the off-canvas to open.
     * @fires OffCanvas#opened
     */
    open(event, trigger) {
      if (this.$element.hasClass('is-open') || this.isRevealed) {
        return;
      }
      var _this = this,
          $body = $(document.body);

      if (this.options.forceTop) {
        $('body').scrollTop(0);
      }
      // window.pageYOffset = 0;

      // if (!this.options.forceTop) {
      //   var scrollPos = parseInt(window.pageYOffset);
      //   this.$element[0].style.transform = 'translate(0,' + scrollPos + 'px)';
      //   if (this.$exiter.length) {
      //     this.$exiter[0].style.transform = 'translate(0,' + scrollPos + 'px)';
      //   }
      // }
      /**
       * Fires when the off-canvas menu opens.
       * @event OffCanvas#opened
       */
      Foundation.Move(this.options.transitionTime, this.$element, function () {
        $('[data-off-canvas-wrapper]').addClass('is-off-canvas-open is-open-' + _this.options.position);

        _this.$element.addClass('is-open');

        // if (_this.options.isSticky) {
        //   _this._stick();
        // }
      });

      this.$triggers.attr('aria-expanded', 'true');
      this.$element.attr('aria-hidden', 'false').trigger('opened.zf.offcanvas');

      if (this.options.closeOnClick) {
        this.$exiter.addClass('is-visible');
      }

      if (trigger) {
        this.$lastTrigger = trigger;
      }

      if (this.options.autoFocus) {
        this.$element.one(Foundation.transitionend(this.$element), function () {
          _this.$element.find('a, button').eq(0).focus();
        });
      }

      if (this.options.trapFocus) {
        $('[data-off-canvas-content]').attr('tabindex', '-1');
        this._trapFocus();
      }
    }

    /**
     * Traps focus within the offcanvas on open.
     * @private
     */
    _trapFocus() {
      var focusable = Foundation.Keyboard.findFocusable(this.$element),
          first = focusable.eq(0),
          last = focusable.eq(-1);

      focusable.off('.zf.offcanvas').on('keydown.zf.offcanvas', function (e) {
        if (e.which === 9 || e.keycode === 9) {
          if (e.target === last[0] && !e.shiftKey) {
            e.preventDefault();
            first.focus();
          }
          if (e.target === first[0] && e.shiftKey) {
            e.preventDefault();
            last.focus();
          }
        }
      });
    }

    /**
     * Allows the offcanvas to appear sticky utilizing translate properties.
     * @private
     */
    // OffCanvas.prototype._stick = function() {
    //   var elStyle = this.$element[0].style;
    //
    //   if (this.options.closeOnClick) {
    //     var exitStyle = this.$exiter[0].style;
    //   }
    //
    //   $(window).on('scroll.zf.offcanvas', function(e) {
    //     console.log(e);
    //     var pageY = window.pageYOffset;
    //     elStyle.transform = 'translate(0,' + pageY + 'px)';
    //     if (exitStyle !== undefined) { exitStyle.transform = 'translate(0,' + pageY + 'px)'; }
    //   });
    //   // this.$element.trigger('stuck.zf.offcanvas');
    // };
    /**
     * Closes the off-canvas menu.
     * @function
     * @param {Function} cb - optional cb to fire after closure.
     * @fires OffCanvas#closed
     */
    close(cb) {
      if (!this.$element.hasClass('is-open') || this.isRevealed) {
        return;
      }

      var _this = this;

      //  Foundation.Move(this.options.transitionTime, this.$element, function() {
      $('[data-off-canvas-wrapper]').removeClass(`is-off-canvas-open is-open-${ _this.options.position }`);
      _this.$element.removeClass('is-open');
      // Foundation._reflow();
      // });
      this.$element.attr('aria-hidden', 'true')
      /**
       * Fires when the off-canvas menu opens.
       * @event OffCanvas#closed
       */
      .trigger('closed.zf.offcanvas');
      // if (_this.options.isSticky || !_this.options.forceTop) {
      //   setTimeout(function() {
      //     _this.$element[0].style.transform = '';
      //     $(window).off('scroll.zf.offcanvas');
      //   }, this.options.transitionTime);
      // }
      if (this.options.closeOnClick) {
        this.$exiter.removeClass('is-visible');
      }

      this.$triggers.attr('aria-expanded', 'false');
      if (this.options.trapFocus) {
        $('[data-off-canvas-content]').removeAttr('tabindex');
      }
    }

    /**
     * Toggles the off-canvas menu open or closed.
     * @function
     * @param {Object} event - Event object passed from listener.
     * @param {jQuery} trigger - element that triggered the off-canvas to open.
     */
    toggle(event, trigger) {
      if (this.$element.hasClass('is-open')) {
        this.close(event, trigger);
      } else {
        this.open(event, trigger);
      }
    }

    /**
     * Handles keyboard input when detected. When the escape key is pressed, the off-canvas menu closes, and focus is restored to the element that opened the menu.
     * @function
     * @private
     */
    _handleKeyboard(event) {
      if (event.which !== 27) return;

      event.stopPropagation();
      event.preventDefault();
      this.close();
      this.$lastTrigger.focus();
    }

    /**
     * Destroys the offcanvas plugin.
     * @function
     */
    destroy() {
      this.close();
      this.$element.off('.zf.trigger .zf.offcanvas');
      this.$exiter.off('.zf.offcanvas');

      Foundation.unregisterPlugin(this);
    }
  }

  OffCanvas.defaults = {
    /**
     * Allow the user to click outside of the menu to close it.
     * @option
     * @example true
     */
    closeOnClick: true,

    /**
     * Amount of time in ms the open and close transition requires. If none selected, pulls from body style.
     * @option
     * @example 500
     */
    transitionTime: 0,

    /**
     * Direction the offcanvas opens from. Determines class applied to body.
     * @option
     * @example left
     */
    position: 'left',

    /**
     * Force the page to scroll to top on open.
     * @option
     * @example true
     */
    forceTop: true,

    /**
     * Allow the offcanvas to remain open for certain breakpoints.
     * @option
     * @example false
     */
    isRevealed: false,

    /**
     * Breakpoint at which to reveal. JS will use a RegExp to target standard classes, if changing classnames, pass your class with the `revealClass` option.
     * @option
     * @example reveal-for-large
     */
    revealOn: null,

    /**
     * Force focus to the offcanvas on open. If true, will focus the opening trigger on close.
     * @option
     * @example true
     */
    autoFocus: true,

    /**
     * Class used to force an offcanvas to remain open. Foundation defaults for this are `reveal-for-large` & `reveal-for-medium`.
     * @option
     * TODO improve the regex testing for this.
     * @example reveal-for-large
     */
    revealClass: 'reveal-for-',

    /**
     * Triggers optional focus trapping when opening an offcanvas. Sets tabindex of [data-off-canvas-content] to -1 for accessibility purposes.
     * @option
     * @example true
     */
    trapFocus: false
  };

  // Window exports
  Foundation.plugin(OffCanvas, 'OffCanvas');
}(jQuery);
'use strict';

!function ($) {

  /**
   * Reveal module.
   * @module foundation.reveal
   * @requires foundation.util.keyboard
   * @requires foundation.util.box
   * @requires foundation.util.triggers
   * @requires foundation.util.mediaQuery
   * @requires foundation.util.motion if using animations
   */

  class Reveal {
    /**
     * Creates a new instance of Reveal.
     * @class
     * @param {jQuery} element - jQuery object to use for the modal.
     * @param {Object} options - optional parameters.
     */
    constructor(element, options) {
      this.$element = element;
      this.options = $.extend({}, Reveal.defaults, this.$element.data(), options);
      this._init();

      Foundation.registerPlugin(this, 'Reveal');
      Foundation.Keyboard.register('Reveal', {
        'ENTER': 'open',
        'SPACE': 'open',
        'ESCAPE': 'close',
        'TAB': 'tab_forward',
        'SHIFT_TAB': 'tab_backward'
      });
    }

    /**
     * Initializes the modal by adding the overlay and close buttons, (if selected).
     * @private
     */
    _init() {
      this.id = this.$element.attr('id');
      this.isActive = false;
      this.cached = { mq: Foundation.MediaQuery.current };
      this.isMobile = mobileSniff();

      this.$anchor = $(`[data-open="${ this.id }"]`).length ? $(`[data-open="${ this.id }"]`) : $(`[data-toggle="${ this.id }"]`);
      this.$anchor.attr({
        'aria-controls': this.id,
        'aria-haspopup': true,
        'tabindex': 0
      });

      if (this.options.fullScreen || this.$element.hasClass('full')) {
        this.options.fullScreen = true;
        this.options.overlay = false;
      }
      if (this.options.overlay && !this.$overlay) {
        this.$overlay = this._makeOverlay(this.id);
      }

      this.$element.attr({
        'role': 'dialog',
        'aria-hidden': true,
        'data-yeti-box': this.id,
        'data-resize': this.id
      });

      if (this.$overlay) {
        this.$element.detach().appendTo(this.$overlay);
      } else {
        this.$element.detach().appendTo($('body'));
        this.$element.addClass('without-overlay');
      }
      this._events();
      if (this.options.deepLink && window.location.hash === `#${ this.id }`) {
        $(window).one('load.zf.reveal', this.open.bind(this));
      }
    }

    /**
     * Creates an overlay div to display behind the modal.
     * @private
     */
    _makeOverlay(id) {
      var $overlay = $('<div></div>').addClass('reveal-overlay').appendTo('body');
      return $overlay;
    }

    /**
     * Updates position of modal
     * TODO:  Figure out if we actually need to cache these values or if it doesn't matter
     * @private
     */
    _updatePosition() {
      var width = this.$element.outerWidth();
      var outerWidth = $(window).width();
      var height = this.$element.outerHeight();
      var outerHeight = $(window).height();
      var left, top;
      if (this.options.hOffset === 'auto') {
        left = parseInt((outerWidth - width) / 2, 10);
      } else {
        left = parseInt(this.options.hOffset, 10);
      }
      if (this.options.vOffset === 'auto') {
        if (height > outerHeight) {
          top = parseInt(Math.min(100, outerHeight / 10), 10);
        } else {
          top = parseInt((outerHeight - height) / 4, 10);
        }
      } else {
        top = parseInt(this.options.vOffset, 10);
      }
      this.$element.css({ top: top + 'px' });
      // only worry about left if we don't have an overlay or we havea  horizontal offset,
      // otherwise we're perfectly in the middle
      if (!this.$overlay || this.options.hOffset !== 'auto') {
        this.$element.css({ left: left + 'px' });
        this.$element.css({ margin: '0px' });
      }
    }

    /**
     * Adds event handlers for the modal.
     * @private
     */
    _events() {
      var _this = this;

      this.$element.on({
        'open.zf.trigger': this.open.bind(this),
        'close.zf.trigger': (event, $element) => {
          if (event.target === _this.$element[0] || $(event.target).parents('[data-closable]')[0] === $element) {
            // only close reveal when it's explicitly called
            return this.close.apply(this);
          }
        },
        'toggle.zf.trigger': this.toggle.bind(this),
        'resizeme.zf.trigger': function () {
          _this._updatePosition();
        }
      });

      if (this.$anchor.length) {
        this.$anchor.on('keydown.zf.reveal', function (e) {
          if (e.which === 13 || e.which === 32) {
            e.stopPropagation();
            e.preventDefault();
            _this.open();
          }
        });
      }

      if (this.options.closeOnClick && this.options.overlay) {
        this.$overlay.off('.zf.reveal').on('click.zf.reveal', function (e) {
          if (e.target === _this.$element[0] || $.contains(_this.$element[0], e.target)) {
            return;
          }
          _this.close();
        });
      }
      if (this.options.deepLink) {
        $(window).on(`popstate.zf.reveal:${ this.id }`, this._handleState.bind(this));
      }
    }

    /**
     * Handles modal methods on back/forward button clicks or any other event that triggers popstate.
     * @private
     */
    _handleState(e) {
      if (window.location.hash === '#' + this.id && !this.isActive) {
        this.open();
      } else {
        this.close();
      }
    }

    /**
     * Opens the modal controlled by `this.$anchor`, and closes all others by default.
     * @function
     * @fires Reveal#closeme
     * @fires Reveal#open
     */
    open() {
      if (this.options.deepLink) {
        var hash = `#${ this.id }`;

        if (window.history.pushState) {
          window.history.pushState(null, null, hash);
        } else {
          window.location.hash = hash;
        }
      }

      this.isActive = true;

      // Make elements invisible, but remove display: none so we can get size and positioning
      this.$element.css({ 'visibility': 'hidden' }).show().scrollTop(0);
      if (this.options.overlay) {
        this.$overlay.css({ 'visibility': 'hidden' }).show();
      }

      this._updatePosition();

      this.$element.hide().css({ 'visibility': '' });

      if (this.$overlay) {
        this.$overlay.css({ 'visibility': '' }).hide();
        if (this.$element.hasClass('fast')) {
          this.$overlay.addClass('fast');
        } else if (this.$element.hasClass('slow')) {
          this.$overlay.addClass('slow');
        }
      }

      if (!this.options.multipleOpened) {
        /**
         * Fires immediately before the modal opens.
         * Closes any other modals that are currently open
         * @event Reveal#closeme
         */
        this.$element.trigger('closeme.zf.reveal', this.id);
      }
      // Motion UI method of reveal
      if (this.options.animationIn) {
        var _this = this;
        function afterAnimationFocus() {
          _this.$element.attr({
            'aria-hidden': false,
            'tabindex': -1
          }).focus();
          console.log('focus');
        }
        if (this.options.overlay) {
          Foundation.Motion.animateIn(this.$overlay, 'fade-in');
        }
        Foundation.Motion.animateIn(this.$element, this.options.animationIn, () => {
          this.focusableElements = Foundation.Keyboard.findFocusable(this.$element);
          afterAnimationFocus();
        });
      }
      // jQuery method of reveal
      else {
          if (this.options.overlay) {
            this.$overlay.show(0);
          }
          this.$element.show(this.options.showDelay);
        }

      // handle accessibility
      this.$element.attr({
        'aria-hidden': false,
        'tabindex': -1
      }).focus();

      /**
       * Fires when the modal has successfully opened.
       * @event Reveal#open
       */
      this.$element.trigger('open.zf.reveal');

      if (this.isMobile) {
        this.originalScrollPos = window.pageYOffset;
        $('html, body').addClass('is-reveal-open');
      } else {
        $('body').addClass('is-reveal-open');
      }

      setTimeout(() => {
        this._extraHandlers();
      }, 0);
    }

    /**
     * Adds extra event handlers for the body and window if necessary.
     * @private
     */
    _extraHandlers() {
      var _this = this;
      this.focusableElements = Foundation.Keyboard.findFocusable(this.$element);

      if (!this.options.overlay && this.options.closeOnClick && !this.options.fullScreen) {
        $('body').on('click.zf.reveal', function (e) {
          if (e.target === _this.$element[0] || $.contains(_this.$element[0], e.target)) {
            return;
          }
          _this.close();
        });
      }

      if (this.options.closeOnEsc) {
        $(window).on('keydown.zf.reveal', function (e) {
          Foundation.Keyboard.handleKey(e, 'Reveal', {
            close: function () {
              if (_this.options.closeOnEsc) {
                _this.close();
                _this.$anchor.focus();
              }
            }
          });
        });
      }

      // lock focus within modal while tabbing
      this.$element.on('keydown.zf.reveal', function (e) {
        var $target = $(this);
        // handle keyboard event with keyboard util
        Foundation.Keyboard.handleKey(e, 'Reveal', {
          tab_forward: function () {
            if (_this.$element.find(':focus').is(_this.focusableElements.eq(-1))) {
              // left modal downwards, setting focus to first element
              _this.focusableElements.eq(0).focus();
              return true;
            }
            if (_this.focusableElements.length === 0) {
              // no focusable elements inside the modal at all, prevent tabbing in general
              return true;
            }
          },
          tab_backward: function () {
            if (_this.$element.find(':focus').is(_this.focusableElements.eq(0)) || _this.$element.is(':focus')) {
              // left modal upwards, setting focus to last element
              _this.focusableElements.eq(-1).focus();
              return true;
            }
            if (_this.focusableElements.length === 0) {
              // no focusable elements inside the modal at all, prevent tabbing in general
              return true;
            }
          },
          open: function () {
            if (_this.$element.find(':focus').is(_this.$element.find('[data-close]'))) {
              setTimeout(function () {
                // set focus back to anchor if close button has been activated
                _this.$anchor.focus();
              }, 1);
            } else if ($target.is(_this.focusableElements)) {
              // dont't trigger if acual element has focus (i.e. inputs, links, ...)
              _this.open();
            }
          },
          close: function () {
            if (_this.options.closeOnEsc) {
              _this.close();
              _this.$anchor.focus();
            }
          },
          handled: function (preventDefault) {
            if (preventDefault) {
              e.preventDefault();
            }
          }
        });
      });
    }

    /**
     * Closes the modal.
     * @function
     * @fires Reveal#closed
     */
    close() {
      if (!this.isActive || !this.$element.is(':visible')) {
        return false;
      }
      var _this = this;

      // Motion UI method of hiding
      if (this.options.animationOut) {
        if (this.options.overlay) {
          Foundation.Motion.animateOut(this.$overlay, 'fade-out', finishUp);
        } else {
          finishUp();
        }

        Foundation.Motion.animateOut(this.$element, this.options.animationOut);
      }
      // jQuery method of hiding
      else {
          if (this.options.overlay) {
            this.$overlay.hide(0, finishUp);
          } else {
            finishUp();
          }

          this.$element.hide(this.options.hideDelay);
        }

      // Conditionals to remove extra event listeners added on open
      if (this.options.closeOnEsc) {
        $(window).off('keydown.zf.reveal');
      }

      if (!this.options.overlay && this.options.closeOnClick) {
        $('body').off('click.zf.reveal');
      }

      this.$element.off('keydown.zf.reveal');

      function finishUp() {
        if (_this.isMobile) {
          $('html, body').removeClass('is-reveal-open');
          if (_this.originalScrollPos) {
            $('body').scrollTop(_this.originalScrollPos);
            _this.originalScrollPos = null;
          }
        } else {
          $('body').removeClass('is-reveal-open');
        }

        _this.$element.attr('aria-hidden', true);

        /**
        * Fires when the modal is done closing.
        * @event Reveal#closed
        */
        _this.$element.trigger('closed.zf.reveal');
      }

      /**
      * Resets the modal content
      * This prevents a running video to keep going in the background
      */
      if (this.options.resetOnClose) {
        this.$element.html(this.$element.html());
      }

      this.isActive = false;
      if (_this.options.deepLink) {
        if (window.history.replaceState) {
          window.history.replaceState("", document.title, window.location.pathname);
        } else {
          window.location.hash = '';
        }
      }
    }

    /**
     * Toggles the open/closed state of a modal.
     * @function
     */
    toggle() {
      if (this.isActive) {
        this.close();
      } else {
        this.open();
      }
    }

    /**
     * Destroys an instance of a modal.
     * @function
     */
    destroy() {
      if (this.options.overlay) {
        this.$element.appendTo($('body')); // move $element outside of $overlay to prevent error unregisterPlugin()
        this.$overlay.hide().off().remove();
      }
      this.$element.hide().off();
      this.$anchor.off('.zf');
      $(window).off(`.zf.reveal:${ this.id }`);

      Foundation.unregisterPlugin(this);
    }
  }

  Reveal.defaults = {
    /**
     * Motion-UI class to use for animated elements. If none used, defaults to simple show/hide.
     * @option
     * @example 'slide-in-left'
     */
    animationIn: '',
    /**
     * Motion-UI class to use for animated elements. If none used, defaults to simple show/hide.
     * @option
     * @example 'slide-out-right'
     */
    animationOut: '',
    /**
     * Time, in ms, to delay the opening of a modal after a click if no animation used.
     * @option
     * @example 10
     */
    showDelay: 0,
    /**
     * Time, in ms, to delay the closing of a modal after a click if no animation used.
     * @option
     * @example 10
     */
    hideDelay: 0,
    /**
     * Allows a click on the body/overlay to close the modal.
     * @option
     * @example true
     */
    closeOnClick: true,
    /**
     * Allows the modal to close if the user presses the `ESCAPE` key.
     * @option
     * @example true
     */
    closeOnEsc: true,
    /**
     * If true, allows multiple modals to be displayed at once.
     * @option
     * @example false
     */
    multipleOpened: false,
    /**
     * Distance, in pixels, the modal should push down from the top of the screen.
     * @option
     * @example auto
     */
    vOffset: 'auto',
    /**
     * Distance, in pixels, the modal should push in from the side of the screen.
     * @option
     * @example auto
     */
    hOffset: 'auto',
    /**
     * Allows the modal to be fullscreen, completely blocking out the rest of the view. JS checks for this as well.
     * @option
     * @example false
     */
    fullScreen: false,
    /**
     * Percentage of screen height the modal should push up from the bottom of the view.
     * @option
     * @example 10
     */
    btmOffsetPct: 10,
    /**
     * Allows the modal to generate an overlay div, which will cover the view when modal opens.
     * @option
     * @example true
     */
    overlay: true,
    /**
     * Allows the modal to remove and reinject markup on close. Should be true if using video elements w/o using provider's api, otherwise, videos will continue to play in the background.
     * @option
     * @example false
     */
    resetOnClose: false,
    /**
     * Allows the modal to alter the url on open/close, and allows the use of the `back` button to close modals. ALSO, allows a modal to auto-maniacally open on page load IF the hash === the modal's user-set id.
     * @option
     * @example false
     */
    deepLink: false
  };

  // Window exports
  Foundation.plugin(Reveal, 'Reveal');

  function iPhoneSniff() {
    return (/iP(ad|hone|od).*OS/.test(window.navigator.userAgent)
    );
  }

  function androidSniff() {
    return (/Android/.test(window.navigator.userAgent)
    );
  }

  function mobileSniff() {
    return iPhoneSniff() || androidSniff();
  }
}(jQuery);
'use strict';

!function ($) {

  /**
   * AccordionMenu module.
   * @module foundation.accordionMenu
   * @requires foundation.util.keyboard
   * @requires foundation.util.motion
   * @requires foundation.util.nest
   */

  class AccordionMenu {
    /**
     * Creates a new instance of an accordion menu.
     * @class
     * @fires AccordionMenu#init
     * @param {jQuery} element - jQuery object to make into an accordion menu.
     * @param {Object} options - Overrides to the default plugin settings.
     */
    constructor(element, options) {
      this.$element = element;
      this.options = $.extend({}, AccordionMenu.defaults, this.$element.data(), options);

      Foundation.Nest.Feather(this.$element, 'accordion');

      this._init();

      Foundation.registerPlugin(this, 'AccordionMenu');
      Foundation.Keyboard.register('AccordionMenu', {
        'ENTER': 'toggle',
        'SPACE': 'toggle',
        'ARROW_RIGHT': 'open',
        'ARROW_UP': 'up',
        'ARROW_DOWN': 'down',
        'ARROW_LEFT': 'close',
        'ESCAPE': 'closeAll',
        'TAB': 'down',
        'SHIFT_TAB': 'up'
      });
    }

    /**
     * Initializes the accordion menu by hiding all nested menus.
     * @private
     */
    _init() {
      this.$element.find('[data-submenu]').not('.is-active').slideUp(0); //.find('a').css('padding-left', '1rem');
      this.$element.attr({
        'role': 'tablist',
        'aria-multiselectable': this.options.multiOpen
      });

      this.$menuLinks = this.$element.find('.is-accordion-submenu-parent');
      this.$menuLinks.each(function () {
        var linkId = this.id || Foundation.GetYoDigits(6, 'acc-menu-link'),
            $elem = $(this),
            $sub = $elem.children('[data-submenu]'),
            subId = $sub[0].id || Foundation.GetYoDigits(6, 'acc-menu'),
            isActive = $sub.hasClass('is-active');
        $elem.attr({
          'aria-controls': subId,
          'aria-expanded': isActive,
          'role': 'tab',
          'id': linkId
        });
        $sub.attr({
          'aria-labelledby': linkId,
          'aria-hidden': !isActive,
          'role': 'tabpanel',
          'id': subId
        });
      });
      var initPanes = this.$element.find('.is-active');
      if (initPanes.length) {
        var _this = this;
        initPanes.each(function () {
          _this.down($(this));
        });
      }
      this._events();
    }

    /**
     * Adds event handlers for items within the menu.
     * @private
     */
    _events() {
      var _this = this;

      this.$element.find('li').each(function () {
        var $submenu = $(this).children('[data-submenu]');

        if ($submenu.length) {
          $(this).children('a').off('click.zf.accordionMenu').on('click.zf.accordionMenu', function (e) {
            e.preventDefault();

            _this.toggle($submenu);
          });
        }
      }).on('keydown.zf.accordionmenu', function (e) {
        var $element = $(this),
            $elements = $element.parent('ul').children('li'),
            $prevElement,
            $nextElement,
            $target = $element.children('[data-submenu]');

        $elements.each(function (i) {
          if ($(this).is($element)) {
            $prevElement = $elements.eq(Math.max(0, i - 1)).find('a').first();
            $nextElement = $elements.eq(Math.min(i + 1, $elements.length - 1)).find('a').first();

            if ($(this).children('[data-submenu]:visible').length) {
              // has open sub menu
              $nextElement = $element.find('li:first-child').find('a').first();
            }
            if ($(this).is(':first-child')) {
              // is first element of sub menu
              $prevElement = $element.parents('li').first().find('a').first();
            } else if ($prevElement.children('[data-submenu]:visible').length) {
              // if previous element has open sub menu
              $prevElement = $prevElement.find('li:last-child').find('a').first();
            }
            if ($(this).is(':last-child')) {
              // is last element of sub menu
              $nextElement = $element.parents('li').first().next('li').find('a').first();
            }

            return;
          }
        });
        Foundation.Keyboard.handleKey(e, 'AccordionMenu', {
          open: function () {
            if ($target.is(':hidden')) {
              _this.down($target);
              $target.find('li').first().find('a').first().focus();
            }
          },
          close: function () {
            if ($target.length && !$target.is(':hidden')) {
              // close active sub of this item
              _this.up($target);
            } else if ($element.parent('[data-submenu]').length) {
              // close currently open sub
              _this.up($element.parent('[data-submenu]'));
              $element.parents('li').first().find('a').first().focus();
            }
          },
          up: function () {
            $prevElement.attr('tabindex', -1).focus();
            return true;
          },
          down: function () {
            $nextElement.attr('tabindex', -1).focus();
            return true;
          },
          toggle: function () {
            if ($element.children('[data-submenu]').length) {
              _this.toggle($element.children('[data-submenu]'));
            }
          },
          closeAll: function () {
            _this.hideAll();
          },
          handled: function (preventDefault) {
            if (preventDefault) {
              e.preventDefault();
            }
            e.stopImmediatePropagation();
          }
        });
      }); //.attr('tabindex', 0);
    }

    /**
     * Closes all panes of the menu.
     * @function
     */
    hideAll() {
      this.$element.find('[data-submenu]').slideUp(this.options.slideSpeed);
    }

    /**
     * Toggles the open/close state of a submenu.
     * @function
     * @param {jQuery} $target - the submenu to toggle
     */
    toggle($target) {
      if (!$target.is(':animated')) {
        if (!$target.is(':hidden')) {
          this.up($target);
        } else {
          this.down($target);
        }
      }
    }

    /**
     * Opens the sub-menu defined by `$target`.
     * @param {jQuery} $target - Sub-menu to open.
     * @fires AccordionMenu#down
     */
    down($target) {
      var _this = this;

      if (!this.options.multiOpen) {
        this.up(this.$element.find('.is-active').not($target.parentsUntil(this.$element).add($target)));
      }

      $target.addClass('is-active').attr({ 'aria-hidden': false }).parent('.is-accordion-submenu-parent').attr({ 'aria-expanded': true });

      //Foundation.Move(this.options.slideSpeed, $target, function() {
      $target.slideDown(_this.options.slideSpeed, function () {
        /**
         * Fires when the menu is done opening.
         * @event AccordionMenu#down
         */
        _this.$element.trigger('down.zf.accordionMenu', [$target]);
      });
      //});
    }

    /**
     * Closes the sub-menu defined by `$target`. All sub-menus inside the target will be closed as well.
     * @param {jQuery} $target - Sub-menu to close.
     * @fires AccordionMenu#up
     */
    up($target) {
      var _this = this;
      //Foundation.Move(this.options.slideSpeed, $target, function(){
      $target.slideUp(_this.options.slideSpeed, function () {
        /**
         * Fires when the menu is done collapsing up.
         * @event AccordionMenu#up
         */
        _this.$element.trigger('up.zf.accordionMenu', [$target]);
      });
      //});

      var $menus = $target.find('[data-submenu]').slideUp(0).addBack().attr('aria-hidden', true);

      $menus.parent('.is-accordion-submenu-parent').attr('aria-expanded', false);
    }

    /**
     * Destroys an instance of accordion menu.
     * @fires AccordionMenu#destroyed
     */
    destroy() {
      this.$element.find('[data-submenu]').slideDown(0).css('display', '');
      this.$element.find('a').off('click.zf.accordionMenu');

      Foundation.Nest.Burn(this.$element, 'accordion');
      Foundation.unregisterPlugin(this);
    }
  }

  AccordionMenu.defaults = {
    /**
     * Amount of time to animate the opening of a submenu in ms.
     * @option
     * @example 250
     */
    slideSpeed: 250,
    /**
     * Allow the menu to have multiple open panes.
     * @option
     * @example true
     */
    multiOpen: true
  };

  // Window exports
  Foundation.plugin(AccordionMenu, 'AccordionMenu');
}(jQuery);
'use strict';

!function ($) {

  /**
   * Tooltip module.
   * @module foundation.tooltip
   * @requires foundation.util.box
   * @requires foundation.util.triggers
   */

  class Tooltip {
    /**
     * Creates a new instance of a Tooltip.
     * @class
     * @fires Tooltip#init
     * @param {jQuery} element - jQuery object to attach a tooltip to.
     * @param {Object} options - object to extend the default configuration.
     */
    constructor(element, options) {
      this.$element = element;
      this.options = $.extend({}, Tooltip.defaults, this.$element.data(), options);

      this.isActive = false;
      this.isClick = false;
      this._init();

      Foundation.registerPlugin(this, 'Tooltip');
    }

    /**
     * Initializes the tooltip by setting the creating the tip element, adding it's text, setting private variables and setting attributes on the anchor.
     * @private
     */
    _init() {
      var elemId = this.$element.attr('aria-describedby') || Foundation.GetYoDigits(6, 'tooltip');

      this.options.positionClass = this.options.positionClass || this._getPositionClass(this.$element);
      this.options.tipText = this.options.tipText || this.$element.attr('title');
      this.template = this.options.template ? $(this.options.template) : this._buildTemplate(elemId);

      this.template.appendTo(document.body).text(this.options.tipText).hide();

      this.$element.attr({
        'title': '',
        'aria-describedby': elemId,
        'data-yeti-box': elemId,
        'data-toggle': elemId,
        'data-resize': elemId
      }).addClass(this.triggerClass);

      //helper variables to track movement on collisions
      this.usedPositions = [];
      this.counter = 4;
      this.classChanged = false;

      this._events();
    }

    /**
     * Grabs the current positioning class, if present, and returns the value or an empty string.
     * @private
     */
    _getPositionClass(element) {
      if (!element) {
        return '';
      }
      // var position = element.attr('class').match(/top|left|right/g);
      var position = element[0].className.match(/\b(top|left|right)\b/g);
      position = position ? position[0] : '';
      return position;
    }
    /**
     * builds the tooltip element, adds attributes, and returns the template.
     * @private
     */
    _buildTemplate(id) {
      var templateClasses = `${ this.options.tooltipClass } ${ this.options.positionClass } ${ this.options.templateClasses }`.trim();
      var $template = $('<div></div>').addClass(templateClasses).attr({
        'role': 'tooltip',
        'aria-hidden': true,
        'data-is-active': false,
        'data-is-focus': false,
        'id': id
      });
      return $template;
    }

    /**
     * Function that gets called if a collision event is detected.
     * @param {String} position - positioning class to try
     * @private
     */
    _reposition(position) {
      this.usedPositions.push(position ? position : 'bottom');

      //default, try switching to opposite side
      if (!position && this.usedPositions.indexOf('top') < 0) {
        this.template.addClass('top');
      } else if (position === 'top' && this.usedPositions.indexOf('bottom') < 0) {
        this.template.removeClass(position);
      } else if (position === 'left' && this.usedPositions.indexOf('right') < 0) {
        this.template.removeClass(position).addClass('right');
      } else if (position === 'right' && this.usedPositions.indexOf('left') < 0) {
        this.template.removeClass(position).addClass('left');
      }

      //if default change didn't work, try bottom or left first
      else if (!position && this.usedPositions.indexOf('top') > -1 && this.usedPositions.indexOf('left') < 0) {
          this.template.addClass('left');
        } else if (position === 'top' && this.usedPositions.indexOf('bottom') > -1 && this.usedPositions.indexOf('left') < 0) {
          this.template.removeClass(position).addClass('left');
        } else if (position === 'left' && this.usedPositions.indexOf('right') > -1 && this.usedPositions.indexOf('bottom') < 0) {
          this.template.removeClass(position);
        } else if (position === 'right' && this.usedPositions.indexOf('left') > -1 && this.usedPositions.indexOf('bottom') < 0) {
          this.template.removeClass(position);
        }
        //if nothing cleared, set to bottom
        else {
            this.template.removeClass(position);
          }
      this.classChanged = true;
      this.counter--;
    }

    /**
     * sets the position class of an element and recursively calls itself until there are no more possible positions to attempt, or the tooltip element is no longer colliding.
     * if the tooltip is larger than the screen width, default to full width - any user selected margin
     * @private
     */
    _setPosition() {
      var position = this._getPositionClass(this.template),
          $tipDims = Foundation.Box.GetDimensions(this.template),
          $anchorDims = Foundation.Box.GetDimensions(this.$element),
          direction = position === 'left' ? 'left' : position === 'right' ? 'left' : 'top',
          param = direction === 'top' ? 'height' : 'width',
          offset = param === 'height' ? this.options.vOffset : this.options.hOffset,
          _this = this;

      if ($tipDims.width >= $tipDims.windowDims.width || !this.counter && !Foundation.Box.ImNotTouchingYou(this.template)) {
        this.template.offset(Foundation.Box.GetOffsets(this.template, this.$element, 'center bottom', this.options.vOffset, this.options.hOffset, true)).css({
          // this.$element.offset(Foundation.GetOffsets(this.template, this.$element, 'center bottom', this.options.vOffset, this.options.hOffset, true)).css({
          'width': $anchorDims.windowDims.width - this.options.hOffset * 2,
          'height': 'auto'
        });
        return false;
      }

      this.template.offset(Foundation.Box.GetOffsets(this.template, this.$element, 'center ' + (position || 'bottom'), this.options.vOffset, this.options.hOffset));

      while (!Foundation.Box.ImNotTouchingYou(this.template) && this.counter) {
        this._reposition(position);
        this._setPosition();
      }
    }

    /**
     * reveals the tooltip, and fires an event to close any other open tooltips on the page
     * @fires Tooltip#closeme
     * @fires Tooltip#show
     * @function
     */
    show() {
      if (this.options.showOn !== 'all' && !Foundation.MediaQuery.atLeast(this.options.showOn)) {
        // console.error('The screen is too small to display this tooltip');
        return false;
      }

      var _this = this;
      this.template.css('visibility', 'hidden').show();
      this._setPosition();

      /**
       * Fires to close all other open tooltips on the page
       * @event Closeme#tooltip
       */
      this.$element.trigger('closeme.zf.tooltip', this.template.attr('id'));

      this.template.attr({
        'data-is-active': true,
        'aria-hidden': false
      });
      _this.isActive = true;
      // console.log(this.template);
      this.template.stop().hide().css('visibility', '').fadeIn(this.options.fadeInDuration, function () {
        //maybe do stuff?
      });
      /**
       * Fires when the tooltip is shown
       * @event Tooltip#show
       */
      this.$element.trigger('show.zf.tooltip');
    }

    /**
     * Hides the current tooltip, and resets the positioning class if it was changed due to collision
     * @fires Tooltip#hide
     * @function
     */
    hide() {
      // console.log('hiding', this.$element.data('yeti-box'));
      var _this = this;
      this.template.stop().attr({
        'aria-hidden': true,
        'data-is-active': false
      }).fadeOut(this.options.fadeOutDuration, function () {
        _this.isActive = false;
        _this.isClick = false;
        if (_this.classChanged) {
          _this.template.removeClass(_this._getPositionClass(_this.template)).addClass(_this.options.positionClass);

          _this.usedPositions = [];
          _this.counter = 4;
          _this.classChanged = false;
        }
      });
      /**
       * fires when the tooltip is hidden
       * @event Tooltip#hide
       */
      this.$element.trigger('hide.zf.tooltip');
    }

    /**
     * adds event listeners for the tooltip and its anchor
     * TODO combine some of the listeners like focus and mouseenter, etc.
     * @private
     */
    _events() {
      var _this = this;
      var $template = this.template;
      var isFocus = false;

      if (!this.options.disableHover) {

        this.$element.on('mouseenter.zf.tooltip', function (e) {
          if (!_this.isActive) {
            _this.timeout = setTimeout(function () {
              _this.show();
            }, _this.options.hoverDelay);
          }
        }).on('mouseleave.zf.tooltip', function (e) {
          clearTimeout(_this.timeout);
          if (!isFocus || _this.isClick && !_this.options.clickOpen) {
            _this.hide();
          }
        });
      }

      if (this.options.clickOpen) {
        this.$element.on('mousedown.zf.tooltip', function (e) {
          e.stopImmediatePropagation();
          if (_this.isClick) {
            //_this.hide();
            // _this.isClick = false;
          } else {
            _this.isClick = true;
            if ((_this.options.disableHover || !_this.$element.attr('tabindex')) && !_this.isActive) {
              _this.show();
            }
          }
        });
      } else {
        this.$element.on('mousedown.zf.tooltip', function (e) {
          e.stopImmediatePropagation();
          _this.isClick = true;
        });
      }

      if (!this.options.disableForTouch) {
        this.$element.on('tap.zf.tooltip touchend.zf.tooltip', function (e) {
          _this.isActive ? _this.hide() : _this.show();
        });
      }

      this.$element.on({
        // 'toggle.zf.trigger': this.toggle.bind(this),
        // 'close.zf.trigger': this.hide.bind(this)
        'close.zf.trigger': this.hide.bind(this)
      });

      this.$element.on('focus.zf.tooltip', function (e) {
        isFocus = true;
        if (_this.isClick) {
          // If we're not showing open on clicks, we need to pretend a click-launched focus isn't
          // a real focus, otherwise on hover and come back we get bad behavior
          if (!_this.options.clickOpen) {
            isFocus = false;
          }
          return false;
        } else {
          _this.show();
        }
      }).on('focusout.zf.tooltip', function (e) {
        isFocus = false;
        _this.isClick = false;
        _this.hide();
      }).on('resizeme.zf.trigger', function () {
        if (_this.isActive) {
          _this._setPosition();
        }
      });
    }

    /**
     * adds a toggle method, in addition to the static show() & hide() functions
     * @function
     */
    toggle() {
      if (this.isActive) {
        this.hide();
      } else {
        this.show();
      }
    }

    /**
     * Destroys an instance of tooltip, removes template element from the view.
     * @function
     */
    destroy() {
      this.$element.attr('title', this.template.text()).off('.zf.trigger .zf.tootip')
      //  .removeClass('has-tip')
      .removeAttr('aria-describedby').removeAttr('data-yeti-box').removeAttr('data-toggle').removeAttr('data-resize');

      this.template.remove();

      Foundation.unregisterPlugin(this);
    }
  }

  Tooltip.defaults = {
    disableForTouch: false,
    /**
     * Time, in ms, before a tooltip should open on hover.
     * @option
     * @example 200
     */
    hoverDelay: 200,
    /**
     * Time, in ms, a tooltip should take to fade into view.
     * @option
     * @example 150
     */
    fadeInDuration: 150,
    /**
     * Time, in ms, a tooltip should take to fade out of view.
     * @option
     * @example 150
     */
    fadeOutDuration: 150,
    /**
     * Disables hover events from opening the tooltip if set to true
     * @option
     * @example false
     */
    disableHover: false,
    /**
     * Optional addtional classes to apply to the tooltip template on init.
     * @option
     * @example 'my-cool-tip-class'
     */
    templateClasses: '',
    /**
     * Non-optional class added to tooltip templates. Foundation default is 'tooltip'.
     * @option
     * @example 'tooltip'
     */
    tooltipClass: 'tooltip',
    /**
     * Class applied to the tooltip anchor element.
     * @option
     * @example 'has-tip'
     */
    triggerClass: 'has-tip',
    /**
     * Minimum breakpoint size at which to open the tooltip.
     * @option
     * @example 'small'
     */
    showOn: 'small',
    /**
     * Custom template to be used to generate markup for tooltip.
     * @option
     * @example '&lt;div class="tooltip"&gt;&lt;/div&gt;'
     */
    template: '',
    /**
     * Text displayed in the tooltip template on open.
     * @option
     * @example 'Some cool space fact here.'
     */
    tipText: '',
    touchCloseText: 'Tap to close.',
    /**
     * Allows the tooltip to remain open if triggered with a click or touch event.
     * @option
     * @example true
     */
    clickOpen: true,
    /**
     * Additional positioning classes, set by the JS
     * @option
     * @example 'top'
     */
    positionClass: '',
    /**
     * Distance, in pixels, the template should push away from the anchor on the Y axis.
     * @option
     * @example 10
     */
    vOffset: 10,
    /**
     * Distance, in pixels, the template should push away from the anchor on the X axis, if aligned to a side.
     * @option
     * @example 12
     */
    hOffset: 12
  };

  /**
   * TODO utilize resize event trigger
   */

  // Window exports
  Foundation.plugin(Tooltip, 'Tooltip');
}(jQuery);
'use strict';

!function ($) {

  /**
   * Equalizer module.
   * @module foundation.equalizer
   */

  class Equalizer {
    /**
     * Creates a new instance of Equalizer.
     * @class
     * @fires Equalizer#init
     * @param {Object} element - jQuery object to add the trigger to.
     * @param {Object} options - Overrides to the default plugin settings.
     */
    constructor(element, options) {
      this.$element = element;
      this.options = $.extend({}, Equalizer.defaults, this.$element.data(), options);

      this._init();

      Foundation.registerPlugin(this, 'Equalizer');
    }

    /**
     * Initializes the Equalizer plugin and calls functions to get equalizer functioning on load.
     * @private
     */
    _init() {
      var eqId = this.$element.attr('data-equalizer') || '';
      var $watched = this.$element.find(`[data-equalizer-watch="${ eqId }"]`);

      this.$watched = $watched.length ? $watched : this.$element.find('[data-equalizer-watch]');
      this.$element.attr('data-resize', eqId || Foundation.GetYoDigits(6, 'eq'));

      this.hasNested = this.$element.find('[data-equalizer]').length > 0;
      this.isNested = this.$element.parentsUntil(document.body, '[data-equalizer]').length > 0;
      this.isOn = false;
      this._bindHandler = {
        onResizeMeBound: this._onResizeMe.bind(this),
        onPostEqualizedBound: this._onPostEqualized.bind(this)
      };

      var imgs = this.$element.find('img');
      var tooSmall;
      if (this.options.equalizeOn) {
        tooSmall = this._checkMQ();
        $(window).on('changed.zf.mediaquery', this._checkMQ.bind(this));
      } else {
        this._events();
      }
      if (tooSmall !== undefined && tooSmall === false || tooSmall === undefined) {
        if (imgs.length) {
          Foundation.onImagesLoaded(imgs, this._reflow.bind(this));
        } else {
          this._reflow();
        }
      }
    }

    /**
     * Removes event listeners if the breakpoint is too small.
     * @private
     */
    _pauseEvents() {
      this.isOn = false;
      this.$element.off({
        '.zf.equalizer': this._bindHandler.onPostEqualizedBound,
        'resizeme.zf.trigger': this._bindHandler.onResizeMeBound
      });
    }

    /**
     * function to handle $elements resizeme.zf.trigger, with bound this on _bindHandler.onResizeMeBound
     * @private
     */
    _onResizeMe(e) {
      this._reflow();
    }

    /**
     * function to handle $elements postequalized.zf.equalizer, with bound this on _bindHandler.onPostEqualizedBound
     * @private
     */
    _onPostEqualized(e) {
      if (e.target !== this.$element[0]) {
        this._reflow();
      }
    }

    /**
     * Initializes events for Equalizer.
     * @private
     */
    _events() {
      var _this = this;
      this._pauseEvents();
      if (this.hasNested) {
        this.$element.on('postequalized.zf.equalizer', this._bindHandler.onPostEqualizedBound);
      } else {
        this.$element.on('resizeme.zf.trigger', this._bindHandler.onResizeMeBound);
      }
      this.isOn = true;
    }

    /**
     * Checks the current breakpoint to the minimum required size.
     * @private
     */
    _checkMQ() {
      var tooSmall = !Foundation.MediaQuery.atLeast(this.options.equalizeOn);
      if (tooSmall) {
        if (this.isOn) {
          this._pauseEvents();
          this.$watched.css('height', 'auto');
        }
      } else {
        if (!this.isOn) {
          this._events();
        }
      }
      return tooSmall;
    }

    /**
     * A noop version for the plugin
     * @private
     */
    _killswitch() {
      return;
    }

    /**
     * Calls necessary functions to update Equalizer upon DOM change
     * @private
     */
    _reflow() {
      if (!this.options.equalizeOnStack) {
        if (this._isStacked()) {
          this.$watched.css('height', 'auto');
          return false;
        }
      }
      if (this.options.equalizeByRow) {
        this.getHeightsByRow(this.applyHeightByRow.bind(this));
      } else {
        this.getHeights(this.applyHeight.bind(this));
      }
    }

    /**
     * Manually determines if the first 2 elements are *NOT* stacked.
     * @private
     */
    _isStacked() {
      return this.$watched[0].getBoundingClientRect().top !== this.$watched[1].getBoundingClientRect().top;
    }

    /**
     * Finds the outer heights of children contained within an Equalizer parent and returns them in an array
     * @param {Function} cb - A non-optional callback to return the heights array to.
     * @returns {Array} heights - An array of heights of children within Equalizer container
     */
    getHeights(cb) {
      var heights = [];
      for (var i = 0, len = this.$watched.length; i < len; i++) {
        this.$watched[i].style.height = 'auto';
        heights.push(this.$watched[i].offsetHeight);
      }
      cb(heights);
    }

    /**
     * Finds the outer heights of children contained within an Equalizer parent and returns them in an array
     * @param {Function} cb - A non-optional callback to return the heights array to.
     * @returns {Array} groups - An array of heights of children within Equalizer container grouped by row with element,height and max as last child
     */
    getHeightsByRow(cb) {
      var lastElTopOffset = this.$watched.length ? this.$watched.first().offset().top : 0,
          groups = [],
          group = 0;
      //group by Row
      groups[group] = [];
      for (var i = 0, len = this.$watched.length; i < len; i++) {
        this.$watched[i].style.height = 'auto';
        //maybe could use this.$watched[i].offsetTop
        var elOffsetTop = $(this.$watched[i]).offset().top;
        if (elOffsetTop != lastElTopOffset) {
          group++;
          groups[group] = [];
          lastElTopOffset = elOffsetTop;
        }
        groups[group].push([this.$watched[i], this.$watched[i].offsetHeight]);
      }

      for (var j = 0, ln = groups.length; j < ln; j++) {
        var heights = $(groups[j]).map(function () {
          return this[1];
        }).get();
        var max = Math.max.apply(null, heights);
        groups[j].push(max);
      }
      cb(groups);
    }

    /**
     * Changes the CSS height property of each child in an Equalizer parent to match the tallest
     * @param {array} heights - An array of heights of children within Equalizer container
     * @fires Equalizer#preequalized
     * @fires Equalizer#postequalized
     */
    applyHeight(heights) {
      var max = Math.max.apply(null, heights);
      /**
       * Fires before the heights are applied
       * @event Equalizer#preequalized
       */
      this.$element.trigger('preequalized.zf.equalizer');

      this.$watched.css('height', max);

      /**
       * Fires when the heights have been applied
       * @event Equalizer#postequalized
       */
      this.$element.trigger('postequalized.zf.equalizer');
    }

    /**
     * Changes the CSS height property of each child in an Equalizer parent to match the tallest by row
     * @param {array} groups - An array of heights of children within Equalizer container grouped by row with element,height and max as last child
     * @fires Equalizer#preequalized
     * @fires Equalizer#preequalizedRow
     * @fires Equalizer#postequalizedRow
     * @fires Equalizer#postequalized
     */
    applyHeightByRow(groups) {
      /**
       * Fires before the heights are applied
       */
      this.$element.trigger('preequalized.zf.equalizer');
      for (var i = 0, len = groups.length; i < len; i++) {
        var groupsILength = groups[i].length,
            max = groups[i][groupsILength - 1];
        if (groupsILength <= 2) {
          $(groups[i][0][0]).css({ 'height': 'auto' });
          continue;
        }
        /**
          * Fires before the heights per row are applied
          * @event Equalizer#preequalizedRow
          */
        this.$element.trigger('preequalizedrow.zf.equalizer');
        for (var j = 0, lenJ = groupsILength - 1; j < lenJ; j++) {
          $(groups[i][j][0]).css({ 'height': max });
        }
        /**
          * Fires when the heights per row have been applied
          * @event Equalizer#postequalizedRow
          */
        this.$element.trigger('postequalizedrow.zf.equalizer');
      }
      /**
       * Fires when the heights have been applied
       */
      this.$element.trigger('postequalized.zf.equalizer');
    }

    /**
     * Destroys an instance of Equalizer.
     * @function
     */
    destroy() {
      this._pauseEvents();
      this.$watched.css('height', 'auto');

      Foundation.unregisterPlugin(this);
    }
  }

  /**
   * Default settings for plugin
   */
  Equalizer.defaults = {
    /**
     * Enable height equalization when stacked on smaller screens.
     * @option
     * @example true
     */
    equalizeOnStack: true,
    /**
     * Enable height equalization row by row.
     * @option
     * @example false
     */
    equalizeByRow: false,
    /**
     * String representing the minimum breakpoint size the plugin should equalize heights on.
     * @option
     * @example 'medium'
     */
    equalizeOn: ''
  };

  // Window exports
  Foundation.plugin(Equalizer, 'Equalizer');
}(jQuery);
jQuery(function ($) {

    var transitionIn = [".slide-in-down", ".slide-in-left", ".slide-in-up", ".slide-in-right", ".fade-in", ".hinge-in-from-top", ".hinge-in-from-right", ".hinge-in-from-bottom", ".hinge-in-from-left", ".hinge-in-from-middle-x", ".hinge-in-from-middle-y", ".scale-in-up", ".scale-in-down", ".spin-in", ".spin-in-ccw"];
    var transitionInRegex = '\\b(' + transitionIn.join('|') + ')\\b';
    transitionInRegex = new RegExp(transitionInRegex, 'gi');

    var transitionOut = [".slide-out-down", ".slide-out-right", ".slide-out-up", ".slide-out-left", ".fade-out", ".hinge-out-from-top", ".hinge-out-from-right", ".hinge-out-from-bottom", ".hinge-out-from-left", ".hinge-out-from-middle-x", ".hinge-out-from-middle-y", ".scale-out-up", ".scale-out-down", ".spin-out", ".spin-out-ccw"];
    var transitionOutRegex = '\\b(' + transitionOut.join('|') + ')\\b';
    transitionOutRegex = new RegExp(transitionOutRegex, 'gi');

    function triggerAnimation(element) {

        if ($(element).data('inOrOut') == 'in') {
            Foundation.Motion.animateIn(element, $(element).data('animation'));
            $(element).find('.queued-animation').addClass('mui-enter-active');
        } else if ($(element).data('inOrOut') == 'out') {
            $(element).find('.queued-animation').addClass('mui-enter-active');
            Foundation.Motion.animateOut(element, $(element).data('animation'));
        }
    }

    function queueAnimations(queue) {

        if ($(queue).data('inOrOut') == 'in') {

            $(queue).css('visibility', 'visible');

            $(queue).find('.queued-item').each(function (index, element) {

                setTimeout(function () {

                    $(element).css('visibility', 'visible');
                    Foundation.Motion.animateIn(element, $(queue).data('animation'));
                }, index * 250);
            });
        } else if ($(queue).data('inOrOut') == 'out') {

            $(queue).find('.queued-item').each(function (index, element) {

                setTimeout(function () {

                    Foundation.Motion.animateOut(element, $(queue).data('animation'));
                    $(element).css('visibility', 'hidden');
                }, index * 250);
            });
        }
    }

    function checkAnimation(element, percentFromBottom) {

        if ($(element).offset().top < $(window).scrollTop() + $(window).height() * (1 - percentFromBottom * 0.01)) {
            return true;
        }

        return false;
    }

    $(document).ready(function () {

        // If it is on-screen at load, then animate
        var percent = 0;

        $('.animate-on-scroll').each(function (index, element) {

            // Generate Data attributes on page-load. This way we only need to run Regex at maximum twice per element.
            var classes = ' ' + $(element).attr('class').replace(/\s+/, ' ') + ' ';

            if (classes.match(transitionInRegex) !== null && classes.match(transitionInRegex).length > 0) {
                // If the animation should Transition In, then start invisible
                $(element).css('visibility', 'hidden');
                $(element).data('inOrOut', 'in');
                $(element).data('animation', classes.match(transitionInRegex)[0].trim());
            } else if (classes.match(transitionOutRegex) !== null && classes.match(transitionOutRegex).length > 0) {
                $(element).data('inOrOut', 'out');
                $(element).data('animation', classes.match(transitionOutRegex)[0].trim());
            }

            if (checkAnimation(element, percent)) {

                triggerAnimation(element);

                $(element).css('visibility', 'visible');
            }
        });

        $('.queue-on-scroll').each(function (index, queue) {

            // Generate Data attributes on page-load. This way we only need to run Regex at maximum twice per queue.
            var classes = ' ' + $(queue).attr('class').replace(/\s+/, ' ') + ' ';

            if (classes.match(transitionInRegex) !== null && classes.match(transitionInRegex).length > 0) {
                // If the animation should Transition In, then start invisible

                $(queue).css('visibility', 'hidden');
                $(queue).find('.queued-item').css('visibility', 'hidden');

                $(queue).data('inOrOut', 'in');
                $(queue).data('animation', classes.match(transitionInRegex)[0].trim());
            } else if (classes.match(transitionOutRegex) !== null && classes.match(transitionOutRegex).length > 0) {
                $(queue).data('inOrOut', 'out');
                $(queue).data('animation', classes.match(transitionOutRegex)[0].trim());
            }

            if (checkAnimation(queue, percent)) {

                queueAnimations(queue);
            } else {

                $(queue).data('offScreen', true);
            }
        });
    });

    // Scroll down effect
    $(window).scroll(function () {

        // Percentage FROM bottom of window to start animation
        var percent = 25;

        $('.animate-on-scroll').each(function (index, element) {

            if ($(element).css('visibility') == 'hidden' || $(element).data('inOrOut') == 'out') {

                if (checkAnimation(element, percent)) {

                    triggerAnimation(element);

                    $(element).css('visibility', 'visible');
                }
            }
        });

        $('.queue-on-scroll').each(function (index, queue) {

            if ($(queue).data('offScreen')) {

                if (checkAnimation(queue, percent)) {

                    queueAnimations(queue);

                    $(queue).data('offScreen', false);
                }
            }
        });
    });
});
jQuery(function ($) {

    $(document).foundation();

    $(document).ready(function () {

        $('a#trigger-search-overlay').on('click', function (event) {

            $('.off-canvas').foundation('close'); // Close Off-Canvas to Search
        });

        if ($('#employment-accordion').length > 0) {

            // We're only going one-level deep, so any interior <ul>s are within the Post Content
            $('#employment-accordion > li').each(function (index, item) {

                $(item).find('ul.nested > li > p + ul').css('display', 'block').attr('aria-hidden', 'false').removeClass('submenu is-accordion-submenu').removeAttr('data-submenu');

                $(item).find('ul.nested > li > a').unbind('click');
            });
        }
    });
});
jQuery(function ($) {

    // Snap SVG doesn't seem to like me defining anything within a function. So we're going to do things nasty.
    var searchOverlay = $('#search-overlay')[0],
        videoOverlay = $('#home-video-overlay')[0],
        transEndEventNames = {
        'WebkitTransition': 'webkitTransitionEnd',
        'MozTransition': 'transitionend',
        'OTransition': 'oTransitionEnd',
        'msTransition': 'MSTransitionEnd',
        'transition': 'transitionend'
    },
        transEndEventName = transEndEventNames[Modernizr.prefixed('transition')],
        support = { transitions: Modernizr.csstransitions },
        searchSVG = Snap(searchOverlay.querySelector('svg')),
        searchPath = searchSVG.select('path'),
        searchPathConfig = {
        from: searchPath.attr('d'),
        to: searchOverlay.getAttribute('data-path-to')
    };

    // Only exists on the Home Page
    if (videoOverlay !== undefined) {

        var videoSVG = Snap(videoOverlay.querySelector('svg')),
            videoPath = videoSVG.select('path'),
            videoPathConfig = {
            from: videoPath.attr('d'),
            to: videoOverlay.getAttribute('data-path-to')
        };
    }

    function toggleSearchOverlay() {

        if ($(searchOverlay).hasClass('open')) {
            $(searchOverlay).removeClass('open');
            $(searchOverlay).addClass('close');

            var onEndTransitionFn = function (event) {
                $(searchOverlay).hasClass('close');
            };

            searchPath.animate({ 'path': searchPathConfig.from }, 400, mina.linear, onEndTransitionFn);
        } else {
            $(searchOverlay).addClass('open');
            $(searchOverlay).removeClass('close');
            searchPath.animate({ 'path': searchPathConfig.to }, 400, mina.linear);

            $(searchOverlay).find('.search-field').focus();
        }
    }

    function toggleVideoOverlay() {

        if ($(videoOverlay).hasClass('open')) {
            $(videoOverlay).removeClass('open');
            $(videoOverlay).addClass('close');

            var onEndTransitionFn = function (event) {
                $(videoOverlay).hasClass('close');
            };

            Foundation.Motion.animateIn($('#mini-nav .row'), 'fade-in');
            $('#mini-nav').addClass('mui-enter-active');

            videoPath.animate({ 'path': videoPathConfig.from }, 400, mina.linear, onEndTransitionFn);
        } else {
            $(videoOverlay).addClass('open');
            $(videoOverlay).removeClass('close');

            $('#mini-nav').css('height', $('#mini-nav')[0].clientHeight + 'px');
            Foundation.Motion.animateOut($('#mini-nav .row'), 'fade-out');
            $('#mini-nav').addClass('mui-enter-active');

            videoPath.animate({ 'path': videoPathConfig.to }, 400, mina.linear);

            $(videoOverlay).find('.video-field').focus();
        }
    }

    $('a#trigger-search-overlay').on('click', function (event) {
        event.preventDefault();
        toggleSearchOverlay();
    });

    $('section#home-hero a.button').on('click', function (event) {
        event.preventDefault();
        toggleVideoOverlay();
    });

    $('div.overlay .overlay-close').on('click', function (event) {
        event.preventDefault();

        if ($(searchOverlay).hasClass('open')) {
            toggleSearchOverlay();
        }

        if ($(videoOverlay).hasClass('open')) {
            toggleVideoOverlay();
        }
    });

    $(document).on('keyup', function (event) {
        if (event.keyCode == 27) {

            if ($(searchOverlay).hasClass('open')) {
                toggleSearchOverlay();
            }

            if ($(videoOverlay).hasClass('open')) {
                toggleVideoOverlay();
            }
        }
    });
});
jQuery(function ($) {

    $(document).ready(function () {

        $('a[href*=\\#]:not([href=\\#])').click(function (event) {

            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {

                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

                if (target.length) {

                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);

                    return false;
                }
            }
        });
    });
});
(function ($) {

    if ($('.video-popover-container').length > 0 && $('.video-popover').length > 0) {

        $('.video-popover-container').on('click', function () {

            $('.video-popover').foundation('open');
        });
    }
})(jQuery);
//# sourceMappingURL=script.js.map
