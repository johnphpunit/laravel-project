/*! Summernote v0.8.8 | (c) 2013- Alan Hong and other contributors | MIT license */

!function (a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof module && module.exports ? module.exports = a(require("jquery")) : a(window.jQuery)
}(function (a) {
    "use strict";
    var b, c = "function" == typeof define && define.amd, d = function (b) {
        var c = "Comic Sans MS" === b ? "Courier New" : "Comic Sans MS", d = a("<div>").css({
                position: "absolute",
                left: "-9999px",
                top: "-9999px",
                fontSize: "200px"
            }).text("mmmmmmmmmwwwwwww").appendTo(document.body), e = d.css("fontFamily", c).width(),
            f = d.css("fontFamily", b + "," + c).width();
        return d.remove(), e !== f
    }, e = navigator.userAgent, f = /MSIE|Trident/i.test(e);
    if (f) {
        var g = /MSIE (\d+[.]\d+)/.exec(e);
        g && (b = parseFloat(g[1])), g = /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(e), g && (b = parseFloat(g[1]))
    }
    var h = /Edge\/\d+/.test(e), i = !!window.CodeMirror;
    if (!i && c) if ("function" == typeof __webpack_require__) try {
        require.resolve("codemirror"), i = !0
    } catch (a) {
    } else if ("undefined" != typeof require) if (void 0 !== require.resolve) try {
        require.resolve("codemirror"), i = !0
    } catch (a) {
    } else void 0 !== require.specified && (i = require.specified("codemirror"));
    var j = "ontouchstart" in window || navigator.MaxTouchPoints > 0 || navigator.msMaxTouchPoints > 0, k = {
        isMac: navigator.appVersion.indexOf("Mac") > -1,
        isMSIE: f,
        isEdge: h,
        isFF: !h && /firefox/i.test(e),
        isPhantom: /PhantomJS/i.test(e),
        isWebkit: !h && /webkit/i.test(e),
        isChrome: !h && /chrome/i.test(e),
        isSafari: !h && /safari/i.test(e),
        browserVersion: b,
        jqueryVersion: parseFloat(a.fn.jquery),
        isSupportAmd: c,
        isSupportTouch: j,
        hasCodeMirror: i,
        isFontInstalled: d,
        isW3CRangeSupport: !!document.createRange
    }, l = function () {
        var b = function (a) {
            return function (b) {
                return a === b
            }
        }, c = function (a, b) {
            return a === b
        }, d = function (a) {
            return function (b, c) {
                return b[a] === c[a]
            }
        }, e = function () {
            return !0
        }, f = function () {
            return !1
        }, g = function (a) {
            return function () {
                return !a.apply(a, arguments)
            }
        }, h = function (a, b) {
            return function (c) {
                return a(c) && b(c)
            }
        }, i = 0;
        return {
            eq: b, eq2: c, peq2: d, ok: e, fail: f, self: function (a) {
                return a
            }, not: g, and: h, invoke: function (a, b) {
                return function () {
                    return a[b].apply(a, arguments)
                }
            }, uniqueId: function (a) {
                var b = ++i + "";
                return a ? a + b : b
            }, rect2bnd: function (b) {
                var c = a(document);
                return {
                    top: b.top + c.scrollTop(),
                    left: b.left + c.scrollLeft(),
                    width: b.right - b.left,
                    height: b.bottom - b.top
                }
            }, invertObject: function (a) {
                var b = {};
                for (var c in a) a.hasOwnProperty(c) && (b[a[c]] = c);
                return b
            }, namespaceToCamel: function (a, b) {
                return (b = b || "") + a.split(".").map(function (a) {
                    return a.substring(0, 1).toUpperCase() + a.substring(1)
                }).join("")
            }, debounce: function (a, b, c) {
                var d;
                return function () {
                    var e = this, f = arguments, g = function () {
                        d = null, c || a.apply(e, f)
                    }, h = c && !d;
                    clearTimeout(d), d = setTimeout(g, b), h && a.apply(e, f)
                }
            }
        }
    }(), m = function () {
        var b = function (a) {
            return a[0]
        }, c = function (a) {
            return a[a.length - 1]
        }, d = function (a) {
            return a.slice(0, a.length - 1)
        }, e = function (a) {
            return a.slice(1)
        }, f = function (a, b) {
            for (var c = 0, d = a.length; c < d; c++) {
                var e = a[c];
                if (b(e)) return e
            }
        }, g = function (a, b) {
            for (var c = 0, d = a.length; c < d; c++) if (!b(a[c])) return !1;
            return !0
        }, h = function (b, c) {
            return a.inArray(c, b)
        }, i = function (a, b) {
            return -1 !== h(a, b)
        }, j = function (a, b) {
            return b = b || l.self, a.reduce(function (a, c) {
                return a + b(c)
            }, 0)
        }, k = function (a) {
            for (var b = [], c = -1, d = a.length; ++c < d;) b[c] = a[c];
            return b
        }, m = function (a) {
            return !a || !a.length
        }, n = function (a, d) {
            return a.length ? e(a).reduce(function (a, b) {
                var e = c(a);
                return d(c(e), b) ? e[e.length] = b : a[a.length] = [b], a
            }, [[b(a)]]) : []
        }, o = function (a) {
            for (var b = [], c = 0, d = a.length; c < d; c++) a[c] && b.push(a[c]);
            return b
        }, p = function (a) {
            for (var b = [], c = 0, d = a.length; c < d; c++) i(b, a[c]) || b.push(a[c]);
            return b
        }, q = function (a, b) {
            var c = h(a, b);
            return -1 === c ? null : a[c + 1]
        };
        return {
            head: b, last: c, initial: d, tail: e, prev: function (a, b) {
                var c = h(a, b);
                return -1 === c ? null : a[c - 1]
            }, next: q, find: f, contains: i, all: g, sum: j, from: k, isEmpty: m, clusterBy: n, compact: o, unique: p
        }
    }(), n = String.fromCharCode(160), o = function () {
        var b = function (b) {
            return b && a(b).hasClass("note-editable")
        }, c = function (b) {
            return b && a(b).hasClass("note-control-sizing")
        }, d = function (a) {
            return a = a.toUpperCase(), function (b) {
                return b && b.nodeName.toUpperCase() === a
            }
        }, e = function (a) {
            return a && 3 === a.nodeType
        }, f = function (a) {
            return a && 1 === a.nodeType
        }, g = function (a) {
            return a && /^BR|^IMG|^HR|^IFRAME|^BUTTON|^INPUT/.test(a.nodeName.toUpperCase())
        }, h = function (a) {
            return !b(a) && (a && /^DIV|^P|^LI|^H[1-7]/.test(a.nodeName.toUpperCase()))
        }, i = function (a) {
            return a && /^H[1-7]/.test(a.nodeName.toUpperCase())
        }, j = d("PRE"), p = d("LI"), q = function (a) {
            return h(a) && !p(a)
        }, r = d("TABLE"), s = d("DATA"), t = function (a) {
            return !(y(a) || u(a) || v(a) || h(a) || r(a) || x(a) || s(a))
        }, u = function (a) {
            return a && /^UL|^OL/.test(a.nodeName.toUpperCase())
        }, v = d("HR"), w = function (a) {
            return a && /^TD|^TH/.test(a.nodeName.toUpperCase())
        }, x = d("BLOCKQUOTE"), y = function (a) {
            return w(a) || x(a) || b(a)
        }, z = d("A"), A = function (a) {
            return t(a) && !!J(a, h)
        }, B = function (a) {
            return t(a) && !J(a, h)
        }, C = d("BODY"), D = function (a, b) {
            return a.nextSibling === b || a.previousSibling === b
        }, E = function (a, b) {
            b = b || l.ok;
            var c = [];
            return a.previousSibling && b(a.previousSibling) && c.push(a.previousSibling), c.push(a), a.nextSibling && b(a.nextSibling) && c.push(a.nextSibling), c
        }, F = k.isMSIE && k.browserVersion < 11 ? "&nbsp;" : "<br>", G = function (a) {
            return e(a) ? a.nodeValue.length : a ? a.childNodes.length : 0
        }, H = function (a) {
            var b = G(a);
            return 0 === b || (!e(a) && 1 === b && a.innerHTML === F || !(!m.all(a.childNodes, e) || "" !== a.innerHTML))
        }, I = function (a) {
            g(a) || G(a) || (a.innerHTML = F)
        }, J = function (a, c) {
            for (; a;) {
                if (c(a)) return a;
                if (b(a)) break;
                a = a.parentNode
            }
            return null
        }, K = function (a, c) {
            for (a = a.parentNode; a && 1 === G(a);) {
                if (c(a)) return a;
                if (b(a)) break;
                a = a.parentNode
            }
            return null
        }, L = function (a, c) {
            c = c || l.fail;
            var d = [];
            return J(a, function (a) {
                return b(a) || d.push(a), c(a)
            }), d
        }, M = function (a, b) {
            var c = L(a);
            return m.last(c.filter(b))
        }, N = function (b, c) {
            for (var d = L(b), e = c; e; e = e.parentNode) if (a.inArray(e, d) > -1) return e;
            return null
        }, O = function (a, b) {
            b = b || l.fail;
            for (var c = []; a && !b(a);) c.push(a), a = a.previousSibling;
            return c
        }, P = function (a, b) {
            b = b || l.fail;
            for (var c = []; a && !b(a);) c.push(a), a = a.nextSibling;
            return c
        }, Q = function (a, b) {
            var c = [];
            return b = b || l.ok, function d(e) {
                a !== e && b(e) && c.push(e);
                for (var f = 0, g = e.childNodes.length; f < g; f++) d(e.childNodes[f])
            }(a), c
        }, R = function (b, c) {
            var d = b.parentNode, e = a("<" + c + ">")[0];
            return d.insertBefore(e, b), e.appendChild(b), e
        }, S = function (a, b) {
            var c = b.nextSibling, d = b.parentNode;
            return c ? d.insertBefore(a, c) : d.appendChild(a), a
        }, T = function (b, c) {
            return a.each(c, function (a, c) {
                b.appendChild(c)
            }), b
        }, U = function (a) {
            return 0 === a.offset
        }, V = function (a) {
            return a.offset === G(a.node)
        }, W = function (a) {
            return U(a) || V(a)
        }, X = function (a, b) {
            for (; a && a !== b;) {
                if (0 !== _(a)) return !1;
                a = a.parentNode
            }
            return !0
        }, Y = function (a, b) {
            if (!b) return !1;
            for (; a && a !== b;) {
                if (_(a) !== G(a.parentNode) - 1) return !1;
                a = a.parentNode
            }
            return !0
        }, Z = function (a, b) {
            return U(a) && X(a.node, b)
        }, $ = function (a, b) {
            return V(a) && Y(a.node, b)
        }, _ = function (a) {
            for (var b = 0; a = a.previousSibling;) b += 1;
            return b
        }, aa = function (a) {
            return !!(a && a.childNodes && a.childNodes.length)
        }, ba = function (a, c) {
            var d, e;
            if (0 === a.offset) {
                if (b(a.node)) return null;
                d = a.node.parentNode, e = _(a.node)
            } else aa(a.node) ? (d = a.node.childNodes[a.offset - 1], e = G(d)) : (d = a.node, e = c ? 0 : a.offset - 1);
            return {node: d, offset: e}
        }, ca = function (a, c) {
            var d, e;
            if (G(a.node) === a.offset) {
                if (b(a.node)) return null;
                d = a.node.parentNode, e = _(a.node) + 1
            } else aa(a.node) ? (d = a.node.childNodes[a.offset], e = 0) : (d = a.node, e = c ? G(a.node) : a.offset + 1);
            return {node: d, offset: e}
        }, da = function (a, b) {
            return a.node === b.node && a.offset === b.offset
        }, ea = function (a) {
            if (e(a.node) || !aa(a.node) || H(a.node)) return !0;
            var b = a.node.childNodes[a.offset - 1], c = a.node.childNodes[a.offset];
            return !(b && !g(b) || c && !g(c))
        }, fa = function (a, b) {
            for (; a;) {
                if (b(a)) return a;
                a = ba(a)
            }
            return null
        }, ga = function (a, b) {
            for (; a;) {
                if (b(a)) return a;
                a = ca(a)
            }
            return null
        }, ha = function (a) {
            if (!e(a.node)) return !1;
            var b = a.node.nodeValue.charAt(a.offset - 1);
            return b && " " !== b && b !== n
        }, ia = function (a, b, c, d) {
            for (var e = a; e && (c(e), !da(e, b));) {
                var f = d && a.node !== e.node && b.node !== e.node;
                e = ca(e, f)
            }
        }, ja = function (a, b) {
            return L(b, l.eq(a)).map(_).reverse()
        }, ka = function (a, b) {
            for (var c = a, d = 0, e = b.length; d < e; d++) c = c.childNodes.length <= b[d] ? c.childNodes[c.childNodes.length - 1] : c.childNodes[b[d]];
            return c
        }, la = function (a, b) {
            var c = b && b.isSkipPaddingBlankHTML, d = b && b.isNotSplitEdgePoint;
            if (W(a) && (e(a.node) || d)) {
                if (U(a)) return a.node;
                if (V(a)) return a.node.nextSibling
            }
            if (e(a.node)) return a.node.splitText(a.offset);
            var f = a.node.childNodes[a.offset], g = S(a.node.cloneNode(!1), a.node);
            return T(g, P(f)), c || (I(a.node), I(g)), g
        }, ma = function (a, b, c) {
            var d = L(b.node, l.eq(a));
            return d.length ? 1 === d.length ? la(b, c) : d.reduce(function (a, d) {
                return a === b.node && (a = la(b, c)), la({node: d, offset: a ? o.position(a) : G(d)}, c)
            }) : null
        }, na = function (a, b) {
            var c, d, e = b ? h : y, f = L(a.node, e), g = m.last(f) || a.node;
            e(g) ? (c = f[f.length - 2], d = g) : (c = g, d = c.parentNode);
            var i = c && ma(c, a, {isSkipPaddingBlankHTML: b, isNotSplitEdgePoint: b});
            return i || d !== a.node || (i = a.node.childNodes[a.offset]), {rightNode: i, container: d}
        }, oa = function (a) {
            return document.createElement(a)
        }, pa = function (a) {
            return document.createTextNode(a)
        }, qa = function (a, b) {
            if (a && a.parentNode) {
                if (a.removeNode) return a.removeNode(b);
                var c = a.parentNode;
                if (!b) {
                    var d, e, f = [];
                    for (d = 0, e = a.childNodes.length; d < e; d++) f.push(a.childNodes[d]);
                    for (d = 0, e = f.length; d < e; d++) c.insertBefore(f[d], a)
                }
                c.removeChild(a)
            }
        }, ra = function (a, c) {
            for (; a && !b(a) && c(a);) {
                var d = a.parentNode;
                qa(a), a = d
            }
        }, sa = function (a, b) {
            if (a.nodeName.toUpperCase() === b.toUpperCase()) return a;
            var c = oa(b);
            return a.style.cssText && (c.style.cssText = a.style.cssText), T(c, m.from(a.childNodes)), S(c, a), qa(a), c
        }, ta = d("TEXTAREA"), ua = function (a, b) {
            var c = ta(a[0]) ? a.val() : a.html();
            return b ? c.replace(/[\n\r]/g, "") : c
        }, va = function (b, c) {
            var d = ua(b);
            if (c) {
                var e = /<(\/?)(\b(?!!)[^>\s]*)(.*?)(\s*\/?>)/g;
                d = d.replace(e, function (a, b, c) {
                    c = c.toUpperCase();
                    var d = /^DIV|^TD|^TH|^P|^LI|^H[1-7]/.test(c) && !!b,
                        e = /^BLOCKQUOTE|^TABLE|^TBODY|^TR|^HR|^UL|^OL/.test(c);
                    return a + (d || e ? "\n" : "")
                }), d = a.trim(d)
            }
            return d
        }, wa = function (b) {
            var c = a(b), d = c.offset(), e = c.outerHeight(!0);
            return {left: d.left, top: d.top + e}
        }, xa = function (a, b) {
            Object.keys(b).forEach(function (c) {
                a.on(c, b[c])
            })
        }, ya = function (a, b) {
            Object.keys(b).forEach(function (c) {
                a.off(c, b[c])
            })
        }, za = function (a) {
            return a && !o.isText(a) && m.contains(a.classList, "note-styletag")
        };
        return {
            NBSP_CHAR: n,
            ZERO_WIDTH_NBSP_CHAR: "\ufeff",
            blank: F,
            emptyPara: "<p>" + F + "</p>",
            makePredByNodeName: d,
            isEditable: b,
            isControlSizing: c,
            isText: e,
            isElement: f,
            isVoid: g,
            isPara: h,
            isPurePara: q,
            isHeading: i,
            isInline: t,
            isBlock: l.not(t),
            isBodyInline: B,
            isBody: C,
            isParaInline: A,
            isPre: j,
            isList: u,
            isTable: r,
            isData: s,
            isCell: w,
            isBlockquote: x,
            isBodyContainer: y,
            isAnchor: z,
            isDiv: d("DIV"),
            isLi: p,
            isBR: d("BR"),
            isSpan: d("SPAN"),
            isB: d("B"),
            isU: d("U"),
            isS: d("S"),
            isI: d("I"),
            isImg: d("IMG"),
            isTextarea: ta,
            isEmpty: H,
            isEmptyAnchor: l.and(z, H),
            isClosestSibling: D,
            withClosestSiblings: E,
            nodeLength: G,
            isLeftEdgePoint: U,
            isRightEdgePoint: V,
            isEdgePoint: W,
            isLeftEdgeOf: X,
            isRightEdgeOf: Y,
            isLeftEdgePointOf: Z,
            isRightEdgePointOf: $,
            prevPoint: ba,
            nextPoint: ca,
            isSamePoint: da,
            isVisiblePoint: ea,
            prevPointUntil: fa,
            nextPointUntil: ga,
            isCharPoint: ha,
            walkPoint: ia,
            ancestor: J,
            singleChildAncestor: K,
            listAncestor: L,
            lastAncestor: M,
            listNext: P,
            listPrev: O,
            listDescendant: Q,
            commonAncestor: N,
            wrap: R,
            insertAfter: S,
            appendChildNodes: T,
            position: _,
            hasChildren: aa,
            makeOffsetPath: ja,
            fromOffsetPath: ka,
            splitTree: ma,
            splitPoint: na,
            create: oa,
            createText: pa,
            remove: qa,
            removeWhile: ra,
            replace: sa,
            html: va,
            value: ua,
            posFromPlaceholder: wa,
            attachEvents: xa,
            detachEvents: ya,
            isCustomStyleTag: za
        }
    }(), p = function (b, c) {
        var d = this, e = a.summernote.ui;
        return this.memos = {}, this.modules = {}, this.layoutInfo = {}, this.options = c, this.initialize = function () {
            return this.layoutInfo = e.createLayout(b, c), this._initialize(), b.hide(), this
        }, this.destroy = function () {
            this._destroy(), b.removeData("summernote"), e.removeLayout(b, this.layoutInfo)
        }, this.reset = function () {
            var a = d.isDisabled();
            this.code(o.emptyPara), this._destroy(), this._initialize(), a && d.disable()
        }, this._initialize = function () {
            var b = a.extend({}, this.options.buttons);
            Object.keys(b).forEach(function (a) {
                d.memo("button." + a, b[a])
            });
            var c = a.extend({}, this.options.modules, a.summernote.plugins || {});
            Object.keys(c).forEach(function (a) {
                d.module(a, c[a], !0)
            }), Object.keys(this.modules).forEach(function (a) {
                d.initializeModule(a)
            })
        }, this._destroy = function () {
            Object.keys(this.modules).reverse().forEach(function (a) {
                d.removeModule(a)
            }), Object.keys(this.memos).forEach(function (a) {
                d.removeMemo(a)
            }), this.triggerEvent("destroy", this)
        }, this.code = function (a) {
            var c = this.invoke("codeview.isActivated");
            if (void 0 === a) return this.invoke("codeview.sync"), c ? this.layoutInfo.codable.val() : this.layoutInfo.editable.html();
            c ? this.layoutInfo.codable.val(a) : this.layoutInfo.editable.html(a), b.val(a), this.triggerEvent("change", a)
        }, this.isDisabled = function () {
            return "false" === this.layoutInfo.editable.attr("contenteditable")
        }, this.enable = function () {
            this.layoutInfo.editable.attr("contenteditable", !0), this.invoke("toolbar.activate", !0), this.triggerEvent("disable", !1)
        }, this.disable = function () {
            this.invoke("codeview.isActivated") && this.invoke("codeview.deactivate"), this.layoutInfo.editable.attr("contenteditable", !1), this.invoke("toolbar.deactivate", !0), this.triggerEvent("disable", !0)
        }, this.triggerEvent = function () {
            var a = m.head(arguments), c = m.tail(m.from(arguments)),
                d = this.options.callbacks[l.namespaceToCamel(a, "on")];
            d && d.apply(b[0], c), b.trigger("summernote." + a, c)
        }, this.initializeModule = function (a) {
            var c = this.modules[a];
            c.shouldInitialize = c.shouldInitialize || l.ok, c.shouldInitialize() && (c.initialize && c.initialize(), c.events && o.attachEvents(b, c.events))
        }, this.module = function (a, b, c) {
            if (1 === arguments.length) return this.modules[a];
            this.modules[a] = new b(this), c || this.initializeModule(a)
        }, this.removeModule = function (a) {
            var c = this.modules[a];
            c.shouldInitialize() && (c.events && o.detachEvents(b, c.events), c.destroy && c.destroy()), delete this.modules[a]
        }, this.memo = function (a, b) {
            if (1 === arguments.length) return this.memos[a];
            this.memos[a] = b
        }, this.removeMemo = function (a) {
            this.memos[a] && this.memos[a].destroy && this.memos[a].destroy(), delete this.memos[a]
        }, this.createInvokeHandlerAndUpdateState = function (a, b) {
            return function (c) {
                d.createInvokeHandler(a, b)(c), d.invoke("buttons.updateCurrentStyle")
            }
        }, this.createInvokeHandler = function (b, c) {
            return function (e) {
                e.preventDefault();
                var f = a(e.target);
                d.invoke(b, c || f.closest("[data-value]").data("value"), f)
            }
        }, this.invoke = function () {
            var a = m.head(arguments), b = m.tail(m.from(arguments)), c = a.split("."), d = c.length > 1,
                e = d && m.head(c), f = d ? m.last(c) : m.head(c), g = this.modules[e || "editor"];
            return !e && this[f] ? this[f].apply(this, b) : g && g[f] && g.shouldInitialize() ? g[f].apply(g, b) : void 0
        }, this.initialize()
    };
    a.fn.extend({
        summernote: function () {
            var b = a.type(m.head(arguments)), c = "string" === b, d = "object" === b, e = d ? m.head(arguments) : {};
            e = a.extend({}, a.summernote.options, e), e.langInfo = a.extend(!0, {}, a.summernote.lang["en-US"], a.summernote.lang[e.lang]), e.icons = a.extend(!0, {}, a.summernote.options.icons, e.icons), e.tooltip = "auto" === e.tooltip ? !k.isSupportTouch : e.tooltip, this.each(function (b, c) {
                var d = a(c);
                if (!d.data("summernote")) {
                    var f = new p(d, e);
                    d.data("summernote", f), d.data("summernote").triggerEvent("init", f.layoutInfo)
                }
            });
            var f = this.first();
            if (f.length) {
                var g = f.data("summernote");
                if (c) return g.invoke.apply(g, m.from(arguments));
                e.focus && g.invoke("editor.focus")
            }
            return this
        }
    });
    var q = function (b, c, d, e) {
            this.render = function (f) {
                var g = a(b);
                if (d && d.contents && g.html(d.contents), d && d.className && g.addClass(d.className), d && d.data && a.each(d.data, function (a, b) {
                        g.attr("data-" + a, b)
                    }), d && d.click && g.on("click", d.click), c) {
                    var h = g.find(".note-children-container");
                    c.forEach(function (a) {
                        a.render(h.length ? h : g)
                    })
                }
                return e && e(g, d), d && d.callback && d.callback(g), f && f.append(g), g
            }
        }, r = {
            create: function (b, c) {
                return function () {
                    var d = a.isArray(arguments[0]) ? arguments[0] : [],
                        e = "object" == typeof arguments[1] ? arguments[1] : arguments[0];
                    return e && e.children && (d = e.children), new q(b, d, e, c)
                }
            }
        }, s = r.create('<div class="note-editor note-frame panel panel-default"/>'),
        t = r.create('<div class="note-toolbar panel-heading"/>'), u = r.create('<div class="note-editing-area"/>'),
        v = r.create('<textarea class="note-codable"/>'),
        w = r.create('<div class="note-editable panel-body" contentEditable="true"/>'),
        x = r.create(['<div class="note-statusbar">', '  <div class="note-resizebar">', '    <div class="note-icon-bar"/>', '    <div class="note-icon-bar"/>', '    <div class="note-icon-bar"/>', "  </div>", "</div>"].join("")),
        y = r.create('<div class="note-editor"/>'), z = r.create('<div class="note-editable" contentEditable="true"/>'),
        A = r.create('<div class="note-btn-group btn-group">'),
        B = r.create('<div class="dropdown-menu">', function (b, c) {
            var d = a.isArray(c.items) ? c.items.map(function (a) {
                var b = "string" == typeof a ? a : a.value || "", d = c.template ? c.template(a) : a,
                    e = "object" == typeof a ? a.option : void 0;
                return '<li><a href="#" data-value="' + b + '"' + (void 0 !== e ? ' data-option="' + e + '"' : "") + ">" + d + "</a></li>"
            }).join("") : c.items;
            b.html(d)
        }), C = function (a, b) {
            return a + " " + I(b.icons.caret, "span")
        }, D = r.create('<div class="dropdown-menu note-check">', function (b, c) {
            var d = a.isArray(c.items) ? c.items.map(function (a) {
                var b = "string" == typeof a ? a : a.value || "", d = c.template ? c.template(a) : a;
                return '<li><a href="#" data-value="' + b + '">' + I(c.checkClassName) + " " + d + "</a></li>"
            }).join("") : c.items;
            b.html(d)
        }), E = r.create('<div class="note-color-palette"/>', function (a, b) {
            for (var c = [], d = 0, e = b.colors.length; d < e; d++) {
                for (var f = b.eventName, g = b.colors[d], h = [], i = 0, j = g.length; i < j; i++) {
                    var k = g[i];
                    h.push(['<button type="button" class="note-color-btn"', 'style="background-color:', k, '" ', 'data-event="', f, '" ', 'data-value="', k, '" ', 'title="', k, '" ', 'data-toggle="button" tabindex="-1"></button>'].join(""))
                }
                c.push('<div class="note-color-row">' + h.join("") + "</div>")
            }
            a.html(c.join("")), b.tooltip && a.find(".note-color-btn").tooltip({
                container: "body",
                trigger: "hover",
                placement: "bottom"
            })
        }), F = r.create('<div class="modal" aria-hidden="false" tabindex="-1"/>', function (a, b) {
            b.fade && a.addClass("fade"), a.html(['<div class="modal-dialog">', '  <div class="modal-content">', b.title ? '    <div class="modal-header">      <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>      <h4 class="modal-title">' + b.title + "</h4>    </div>" : "", '    <div class="modal-body">' + b.body + "</div>", b.footer ? '    <div class="modal-footer">' + b.footer + "</div>" : "", "  </div>", "</div>"].join(""))
        }),
        G = r.create(['<div class="note-popover popover in">', '  <div class="arrow"/>', '  <div class="popover-content note-children-container"/>', "</div>"].join(""), function (a, b) {
            var c = void 0 !== b.direction ? b.direction : "bottom";
            a.addClass(c), b.hideArrow && a.find(".arrow").hide()
        }), H = r.create('<div class="checkbox"></div>', function (a, b) {
            a.html([" <label" + (b.id ? ' for="' + b.id + '"' : "") + ">", ' <input type="checkbox"' + (b.id ? ' id="' + b.id + '"' : ""), (b.checked ? " checked" : "") + "/>", b.text ? b.text : "", "</label>"].join(""))
        }), I = function (a, b) {
            return "<" + (b = b || "i") + ' class="' + a + '"/>'
        }, J = {
            editor: s,
            toolbar: t,
            editingArea: u,
            codable: v,
            editable: w,
            statusbar: x,
            airEditor: y,
            airEditable: z,
            buttonGroup: A,
            dropdown: B,
            dropdownButtonContents: C,
            dropdownCheck: D,
            palette: E,
            dialog: F,
            popover: G,
            checkbox: H,
            icon: I,
            options: {},
            button: function (a, b) {
                return r.create('<button type="button" class="note-btn btn btn-default btn-sm" tabindex="-1">', function (a, b) {
                    b && b.tooltip && self.options.tooltip && a.attr({title: b.tooltip}).tooltip({
                        container: "body",
                        trigger: "hover",
                        placement: "bottom"
                    })
                })(a, b)
            },
            toggleBtn: function (a, b) {
                a.toggleClass("disabled", !b), a.attr("disabled", !b)
            },
            toggleBtnActive: function (a, b) {
                a.toggleClass("active", b)
            },
            onDialogShown: function (a, b) {
                a.one("shown.bs.modal", b)
            },
            onDialogHidden: function (a, b) {
                a.one("hidden.bs.modal", b)
            },
            showDialog: function (a) {
                a.modal("show")
            },
            hideDialog: function (a) {
                a.modal("hide")
            },
            createLayout: function (a, b) {
                self.options = b;
                var c = (b.airMode ? J.airEditor([J.editingArea([J.airEditable()])]) : J.editor([J.toolbar(), J.editingArea([J.codable(), J.editable()]), J.statusbar()])).render();
                return c.insertAfter(a), {
                    note: a,
                    editor: c,
                    toolbar: c.find(".note-toolbar"),
                    editingArea: c.find(".note-editing-area"),
                    editable: c.find(".note-editable"),
                    codable: c.find(".note-codable"),
                    statusbar: c.find(".note-statusbar")
                }
            },
            removeLayout: function (a, b) {
                a.html(b.editable.html()), b.editor.remove(), a.show()
            }
        };
    a.summernote = a.summernote || {lang: {}}, a.extend(a.summernote.lang, {
        "en-US": {
            font: {
                bold: "Bold",
                italic: "Italic",
                underline: "Underline",
                clear: "Remove Font Style",
                height: "Line Height",
                name: "Font Family",
                strikethrough: "Strikethrough",
                subscript: "Subscript",
                superscript: "Superscript",
                size: "Font Size"
            },
            image: {
                image: "Picture",
                insert: "Insert Image",
                resizeFull: "Resize Full",
                resizeHalf: "Resize Half",
                resizeQuarter: "Resize Quarter",
                floatLeft: "Float Left",
                floatRight: "Float Right",
                floatNone: "Float None",
                shapeRounded: "Shape: Rounded",
                shapeCircle: "Shape: Circle",
                shapeThumbnail: "Shape: Thumbnail",
                shapeNone: "Shape: None",
                dragImageHere: "Drag image or text here",
                dropImage: "Drop image or Text",
                selectFromFiles: "Select from files",
                maximumFileSize: "Maximum file size",
                maximumFileSizeError: "Maximum file size exceeded.",
                url: "Image URL",
                remove: "Remove Image"
            },
            video: {
                video: "Video",
                videoLink: "Video Link",
                insert: "Insert Video",
                url: "Video URL?",
                providers: "(YouTube, Vimeo, Vine, Instagram, DailyMotion or Youku)"
            },
            link: {
                link: "Link",
                insert: "Insert Link",
                unlink: "Unlink",
                edit: "Edit",
                textToDisplay: "Text to display",
                url: "To what URL should this link go?",
                openInNewWindow: "Open in new window"
            },
            table: {
                table: "Table",
                addRowAbove: "Add row above",
                addRowBelow: "Add row below",
                addColLeft: "Add column left",
                addColRight: "Add column right",
                delRow: "Delete row",
                delCol: "Delete column",
                delTable: "Delete table"
            },
            hr: {insert: "Insert Horizontal Rule"},
            style: {
                style: "Style",
                p: "Normal",
                blockquote: "Quote",
                pre: "Code",
                h1: "Header 1",
                h2: "Header 2",
                h3: "Header 3",
                h4: "Header 4",
                h5: "Header 5",
                h6: "Header 6"
            },
            lists: {unordered: "Unordered list", ordered: "Ordered list"},
            options: {help: "Help", fullscreen: "Full Screen", codeview: "Code View"},
            paragraph: {
                paragraph: "Paragraph",
                outdent: "Outdent",
                indent: "Indent",
                left: "Align left",
                center: "Align center",
                right: "Align right",
                justify: "Justify full"
            },
            color: {
                recent: "Recent Color",
                more: "More Color",
                background: "Background Color",
                foreground: "Foreground Color",
                transparent: "Transparent",
                setTransparent: "Set transparent",
                reset: "Reset",
                resetToDefault: "Reset to default"
            },
            shortcut: {
                shortcuts: "Keyboard shortcuts",
                close: "Close",
                textFormatting: "Text formatting",
                action: "Action",
                paragraphFormatting: "Paragraph formatting",
                documentStyle: "Document Style",
                extraKeys: "Extra keys"
            },
            help: {
                insertParagraph: "Insert Paragraph",
                undo: "Undoes the last command",
                redo: "Redoes the last command",
                tab: "Tab",
                untab: "Untab",
                bold: "Set a bold style",
                italic: "Set a italic style",
                underline: "Set a underline style",
                strikethrough: "Set a strikethrough style",
                removeFormat: "Clean a style",
                justifyLeft: "Set left align",
                justifyCenter: "Set center align",
                justifyRight: "Set right align",
                justifyFull: "Set full align",
                insertUnorderedList: "Toggle unordered list",
                insertOrderedList: "Toggle ordered list",
                outdent: "Outdent on current paragraph",
                indent: "Indent on current paragraph",
                formatPara: "Change current block's format as a paragraph(P tag)",
                formatH1: "Change current block's format as H1",
                formatH2: "Change current block's format as H2",
                formatH3: "Change current block's format as H3",
                formatH4: "Change current block's format as H4",
                formatH5: "Change current block's format as H5",
                formatH6: "Change current block's format as H6",
                insertHorizontalRule: "Insert horizontal rule",
                "linkDialog.show": "Show Link Dialog"
            },
            history: {undo: "Undo", redo: "Redo"},
            specialChar: {specialChar: "SPECIAL CHARACTERS", select: "Select Special characters"}
        }
    });
    var K = function () {
        var a = {
            BACKSPACE: 8,
            TAB: 9,
            ENTER: 13,
            SPACE: 32,
            DELETE: 46,
            LEFT: 37,
            UP: 38,
            RIGHT: 39,
            DOWN: 40,
            NUM0: 48,
            NUM1: 49,
            NUM2: 50,
            NUM3: 51,
            NUM4: 52,
            NUM5: 53,
            NUM6: 54,
            NUM7: 55,
            NUM8: 56,
            B: 66,
            E: 69,
            I: 73,
            J: 74,
            K: 75,
            L: 76,
            R: 82,
            S: 83,
            U: 85,
            V: 86,
            Y: 89,
            Z: 90,
            SLASH: 191,
            LEFTBRACKET: 219,
            BACKSLASH: 220,
            RIGHTBRACKET: 221
        };
        return {
            isEdit: function (b) {
                return m.contains([a.BACKSPACE, a.TAB, a.ENTER, a.SPACE, a.DELETE], b)
            }, isMove: function (b) {
                return m.contains([a.LEFT, a.UP, a.RIGHT, a.DOWN], b)
            }, nameFromCode: l.invertObject(a), code: a
        }
    }(), L = function () {
        var b = function (a, b) {
            var c, d, e = a.parentElement(), f = document.body.createTextRange(), g = m.from(e.childNodes);
            for (c = 0; c < g.length; c++) if (!o.isText(g[c])) {
                if (f.moveToElementText(g[c]), f.compareEndPoints("StartToStart", a) >= 0) break;
                d = g[c]
            }
            if (0 !== c && o.isText(g[c - 1])) {
                var h = document.body.createTextRange(), i = null;
                h.moveToElementText(d || e), h.collapse(!d), i = d ? d.nextSibling : e.firstChild;
                var j = a.duplicate();
                j.setEndPoint("StartToStart", h);
                for (var k = j.text.replace(/[\r\n]/g, "").length; k > i.nodeValue.length && i.nextSibling;) k -= i.nodeValue.length, i = i.nextSibling;
                i.nodeValue;
                b && i.nextSibling && o.isText(i.nextSibling) && k === i.nodeValue.length && (k -= i.nodeValue.length, i = i.nextSibling), e = i, c = k
            }
            return {cont: e, offset: c}
        }, c = function (a) {
            var b = function (a, c) {
                var d, e;
                if (o.isText(a)) {
                    var f = o.listPrev(a, l.not(o.isText)), g = m.last(f).previousSibling;
                    d = g || a.parentNode, c += m.sum(m.tail(f), o.nodeLength), e = !g
                } else {
                    if (d = a.childNodes[c] || a, o.isText(d)) return b(d, 0);
                    c = 0, e = !1
                }
                return {node: d, collapseToStart: e, offset: c}
            }, c = document.body.createTextRange(), d = b(a.node, a.offset);
            return c.moveToElementText(d.node), c.collapse(d.collapseToStart), c.moveStart("character", d.offset), c
        }, d = function (b, e, f, g) {
            this.sc = b, this.so = e, this.ec = f, this.eo = g;
            var h = function () {
                if (k.isW3CRangeSupport) {
                    var a = document.createRange();
                    return a.setStart(b, e), a.setEnd(f, g), a
                }
                var d = c({node: b, offset: e});
                return d.setEndPoint("EndToEnd", c({node: f, offset: g})), d
            };
            this.getPoints = function () {
                return {sc: b, so: e, ec: f, eo: g}
            }, this.getStartPoint = function () {
                return {node: b, offset: e}
            }, this.getEndPoint = function () {
                return {node: f, offset: g}
            }, this.select = function () {
                var a = h();
                if (k.isW3CRangeSupport) {
                    var b = document.getSelection();
                    b.rangeCount > 0 && b.removeAllRanges(), b.addRange(a)
                } else a.select();
                return this
            }, this.scrollIntoView = function (b) {
                var c = a(b).height();
                return b.scrollTop + c < this.sc.offsetTop && (b.scrollTop += Math.abs(b.scrollTop + c - this.sc.offsetTop)), this
            }, this.normalize = function () {
                var a = function (a, b) {
                    if (o.isVisiblePoint(a) && !o.isEdgePoint(a) || o.isVisiblePoint(a) && o.isRightEdgePoint(a) && !b || o.isVisiblePoint(a) && o.isLeftEdgePoint(a) && b || o.isVisiblePoint(a) && o.isBlock(a.node) && o.isEmpty(a.node)) return a;
                    var c = o.ancestor(a.node, o.isBlock);
                    if ((o.isLeftEdgePointOf(a, c) || o.isVoid(o.prevPoint(a).node)) && !b || (o.isRightEdgePointOf(a, c) || o.isVoid(o.nextPoint(a).node)) && b) {
                        if (o.isVisiblePoint(a)) return a;
                        b = !b
                    }
                    return (b ? o.nextPointUntil(o.nextPoint(a), o.isVisiblePoint) : o.prevPointUntil(o.prevPoint(a), o.isVisiblePoint)) || a
                }, b = a(this.getEndPoint(), !1), c = this.isCollapsed() ? b : a(this.getStartPoint(), !0);
                return new d(c.node, c.offset, b.node, b.offset)
            }, this.nodes = function (a, b) {
                a = a || l.ok;
                var c = b && b.includeAncestor, d = b && b.fullyContains, e = this.getStartPoint(),
                    f = this.getEndPoint(), g = [], h = [];
                return o.walkPoint(e, f, function (b) {
                    if (!o.isEditable(b.node)) {
                        var e;
                        d ? (o.isLeftEdgePoint(b) && h.push(b.node), o.isRightEdgePoint(b) && m.contains(h, b.node) && (e = b.node)) : e = c ? o.ancestor(b.node, a) : b.node, e && a(e) && g.push(e)
                    }
                }, !0), m.unique(g)
            }, this.commonAncestor = function () {
                return o.commonAncestor(b, f)
            }, this.expand = function (a) {
                var c = o.ancestor(b, a), h = o.ancestor(f, a);
                if (!c && !h) return new d(b, e, f, g);
                var i = this.getPoints();
                return c && (i.sc = c, i.so = 0), h && (i.ec = h, i.eo = o.nodeLength(h)), new d(i.sc, i.so, i.ec, i.eo)
            }, this.collapse = function (a) {
                return a ? new d(b, e, b, e) : new d(f, g, f, g)
            }, this.splitText = function () {
                var a = b === f, c = this.getPoints();
                return o.isText(f) && !o.isEdgePoint(this.getEndPoint()) && f.splitText(g), o.isText(b) && !o.isEdgePoint(this.getStartPoint()) && (c.sc = b.splitText(e), c.so = 0, a && (c.ec = c.sc, c.eo = g - e)), new d(c.sc, c.so, c.ec, c.eo)
            }, this.deleteContents = function () {
                if (this.isCollapsed()) return this;
                var b = this.splitText(), c = b.nodes(null, {fullyContains: !0}),
                    e = o.prevPointUntil(b.getStartPoint(), function (a) {
                        return !m.contains(c, a.node)
                    }), f = [];
                return a.each(c, function (a, b) {
                    var c = b.parentNode;
                    e.node !== c && 1 === o.nodeLength(c) && f.push(c), o.remove(b, !1)
                }), a.each(f, function (a, b) {
                    o.remove(b, !1)
                }), new d(e.node, e.offset, e.node, e.offset).normalize()
            };
            var i = function (a) {
                return function () {
                    var c = o.ancestor(b, a);
                    return !!c && c === o.ancestor(f, a)
                }
            };
            this.isOnEditable = i(o.isEditable), this.isOnList = i(o.isList), this.isOnAnchor = i(o.isAnchor), this.isOnCell = i(o.isCell), this.isOnData = i(o.isData), this.isLeftEdgeOf = function (a) {
                if (!o.isLeftEdgePoint(this.getStartPoint())) return !1;
                var b = o.ancestor(this.sc, a);
                return b && o.isLeftEdgeOf(this.sc, b)
            }, this.isCollapsed = function () {
                return b === f && e === g
            }, this.wrapBodyInlineWithPara = function () {
                if (o.isBodyContainer(b) && o.isEmpty(b)) return b.innerHTML = o.emptyPara, new d(b.firstChild, 0, b.firstChild, 0);
                var a = this.normalize();
                if (o.isParaInline(b) || o.isPara(b)) return a;
                var c;
                if (o.isInline(a.sc)) {
                    var e = o.listAncestor(a.sc, l.not(o.isInline));
                    c = m.last(e), o.isInline(c) || (c = e[e.length - 2] || a.sc.childNodes[a.so])
                } else c = a.sc.childNodes[a.so > 0 ? a.so - 1 : 0];
                var f = o.listPrev(c, o.isParaInline).reverse();
                if (f = f.concat(o.listNext(c.nextSibling, o.isParaInline)), f.length) {
                    var g = o.wrap(m.head(f), "p");
                    o.appendChildNodes(g, m.tail(f))
                }
                return this.normalize()
            }, this.insertNode = function (a) {
                var b = this.wrapBodyInlineWithPara().deleteContents(),
                    c = o.splitPoint(b.getStartPoint(), o.isInline(a));
                return c.rightNode ? c.rightNode.parentNode.insertBefore(a, c.rightNode) : c.container.appendChild(a), a
            }, this.pasteHTML = function (b) {
                var c = a("<div></div>").html(b)[0], d = m.from(c.childNodes),
                    e = this.wrapBodyInlineWithPara().deleteContents();
                return d.reverse().map(function (a) {
                    return e.insertNode(a)
                }).reverse()
            }, this.toString = function () {
                var a = h();
                return k.isW3CRangeSupport ? a.toString() : a.text
            }, this.getWordRange = function (a) {
                var b = this.getEndPoint();
                if (!o.isCharPoint(b)) return this;
                var c = o.prevPointUntil(b, function (a) {
                    return !o.isCharPoint(a)
                });
                return a && (b = o.nextPointUntil(b, function (a) {
                    return !o.isCharPoint(a)
                })), new d(c.node, c.offset, b.node, b.offset)
            }, this.bookmark = function (a) {
                return {s: {path: o.makeOffsetPath(a, b), offset: e}, e: {path: o.makeOffsetPath(a, f), offset: g}}
            }, this.paraBookmark = function (a) {
                return {
                    s: {path: m.tail(o.makeOffsetPath(m.head(a), b)), offset: e},
                    e: {path: m.tail(o.makeOffsetPath(m.last(a), f)), offset: g}
                }
            }, this.getClientRects = function () {
                return h().getClientRects()
            }
        };
        return {
            create: function (a, b, c, e) {
                if (4 === arguments.length) return new d(a, b, c, e);
                if (2 === arguments.length) return c = a, e = b, new d(a, b, c, e);
                var f = this.createFromSelection();
                return f || 1 !== arguments.length ? f : (f = this.createFromNode(arguments[0]), f.collapse(o.emptyPara === arguments[0].innerHTML))
            }, createFromSelection: function () {
                var a, c, e, f;
                if (k.isW3CRangeSupport) {
                    var g = document.getSelection();
                    if (!g || 0 === g.rangeCount) return null;
                    if (o.isBody(g.anchorNode)) return null;
                    var h = g.getRangeAt(0);
                    a = h.startContainer, c = h.startOffset, e = h.endContainer, f = h.endOffset
                } else {
                    var i = document.selection.createRange(), j = i.duplicate();
                    j.collapse(!1);
                    var l = i;
                    l.collapse(!0);
                    var m = b(l, !0), n = b(j, !1);
                    o.isText(m.node) && o.isLeftEdgePoint(m) && o.isTextNode(n.node) && o.isRightEdgePoint(n) && n.node.nextSibling === m.node && (m = n), a = m.cont, c = m.offset, e = n.cont, f = n.offset
                }
                return new d(a, c, e, f)
            }, createFromNode: function (a) {
                var b = a, c = 0, d = a, e = o.nodeLength(d);
                return o.isVoid(b) && (c = o.listPrev(b).length - 1, b = b.parentNode), o.isBR(d) ? (e = o.listPrev(d).length - 1, d = d.parentNode) : o.isVoid(d) && (e = o.listPrev(d).length, d = d.parentNode), this.create(b, c, d, e)
            }, createFromNodeBefore: function (a) {
                return this.createFromNode(a).collapse(!0)
            }, createFromNodeAfter: function (a) {
                return this.createFromNode(a).collapse()
            }, createFromBookmark: function (a, b) {
                var c = o.fromOffsetPath(a, b.s.path), e = b.s.offset, f = o.fromOffsetPath(a, b.e.path),
                    g = b.e.offset;
                return new d(c, e, f, g)
            }, createFromParaBookmark: function (a, b) {
                var c = a.s.offset, e = a.e.offset, f = o.fromOffsetPath(m.head(b), a.s.path),
                    g = o.fromOffsetPath(m.last(b), a.e.path);
                return new d(f, c, g, e)
            }
        }
    }(), M = function () {
        return {
            readFileAsDataURL: function (b) {
                return a.Deferred(function (c) {
                    a.extend(new FileReader, {
                        onload: function (a) {
                            var b = a.target.result;
                            c.resolve(b)
                        }, onerror: function () {
                            c.reject(this)
                        }
                    }).readAsDataURL(b)
                }).promise()
            }, createImage: function (b) {
                return a.Deferred(function (c) {
                    var d = a("<img>");
                    d.one("load", function () {
                        d.off("error abort"), c.resolve(d)
                    }).one("error abort", function () {
                        d.off("load").detach(), c.reject(d)
                    }).css({display: "none"}).appendTo(document.body).attr("src", b)
                }).promise()
            }
        }
    }(), N = function (a) {
        var b = [], c = -1, d = a[0], e = function () {
            var b = L.create(d), c = {s: {path: [], offset: 0}, e: {path: [], offset: 0}};
            return {contents: a.html(), bookmark: b ? b.bookmark(d) : c}
        }, f = function (b) {
            null !== b.contents && a.html(b.contents), null !== b.bookmark && L.createFromBookmark(d, b.bookmark).select()
        };
        this.rewind = function () {
            a.html() !== b[c].contents && this.recordUndo(), c = 0, f(b[c])
        }, this.reset = function () {
            b = [], c = -1, a.html(""), this.recordUndo()
        }, this.undo = function () {
            a.html() !== b[c].contents && this.recordUndo(), 0 < c && (c--, f(b[c]))
        }, this.redo = function () {
            b.length - 1 > c && (c++, f(b[c]))
        }, this.recordUndo = function () {
            c++, b.length > c && (b = b.slice(0, c)), b.push(e())
        }
    }, O = function () {
        var b = function (b, c) {
            if (k.jqueryVersion < 1.9) {
                var d = {};
                return a.each(c, function (a, c) {
                    d[c] = b.css(c)
                }), d
            }
            return b.css.call(b, c)
        };
        this.fromNode = function (a) {
            var c = ["font-family", "font-size", "text-align", "list-style-type", "line-height"], d = b(a, c) || {};
            return d["font-size"] = parseInt(d["font-size"], 10), d
        }, this.stylePara = function (b, c) {
            a.each(b.nodes(o.isPara, {includeAncestor: !0}), function (b, d) {
                a(d).css(c)
            })
        }, this.styleNodes = function (b, c) {
            b = b.splitText();
            var d = c && c.nodeName || "SPAN", e = !(!c || !c.expandClosestSibling),
                f = !(!c || !c.onlyPartialContains);
            if (b.isCollapsed()) return [b.insertNode(o.create(d))];
            var g = o.makePredByNodeName(d), h = b.nodes(o.isText, {fullyContains: !0}).map(function (a) {
                return o.singleChildAncestor(a, g) || o.wrap(a, d)
            });
            if (e) {
                if (f) {
                    var i = b.nodes();
                    g = l.and(g, function (a) {
                        return m.contains(i, a)
                    })
                }
                return h.map(function (b) {
                    var c = o.withClosestSiblings(b, g), d = m.head(c), e = m.tail(c);
                    return a.each(e, function (a, b) {
                        o.appendChildNodes(d, b.childNodes), o.remove(b)
                    }), m.head(c)
                })
            }
            return h
        }, this.current = function (b) {
            var c = a(o.isElement(b.sc) ? b.sc : b.sc.parentNode), d = this.fromNode(c);
            try {
                d = a.extend(d, {
                    "font-bold": document.queryCommandState("bold") ? "bold" : "normal",
                    "font-italic": document.queryCommandState("italic") ? "italic" : "normal",
                    "font-underline": document.queryCommandState("underline") ? "underline" : "normal",
                    "font-subscript": document.queryCommandState("subscript") ? "subscript" : "normal",
                    "font-superscript": document.queryCommandState("superscript") ? "superscript" : "normal",
                    "font-strikethrough": document.queryCommandState("strikethrough") ? "strikethrough" : "normal",
                    "font-family": document.queryCommandValue("fontname") || d["font-family"]
                })
            } catch (a) {
            }
            if (b.isOnList()) {
                var e = ["circle", "disc", "disc-leading-zero", "square"], f = a.inArray(d["list-style-type"], e) > -1;
                d["list-style"] = f ? "unordered" : "ordered"
            } else d["list-style"] = "none";
            var g = o.ancestor(b.sc, o.isPara);
            if (g && g.style["line-height"]) d["line-height"] = g.style.lineHeight; else {
                var h = parseInt(d["line-height"], 10) / parseInt(d["font-size"], 10);
                d["line-height"] = h.toFixed(1)
            }
            return d.anchor = b.isOnAnchor() && o.ancestor(b.sc, o.isAnchor), d.ancestors = o.listAncestor(b.sc, o.isEditable), d.range = b, d
        }
    }, P = function () {
        var b = this;
        this.insertOrderedList = function (a) {
            this.toggleList("OL", a)
        }, this.insertUnorderedList = function (a) {
            this.toggleList("UL", a)
        }, this.indent = function (b) {
            var c = this, d = L.create(b).wrapBodyInlineWithPara(), e = d.nodes(o.isPara, {includeAncestor: !0}),
                f = m.clusterBy(e, l.peq2("parentNode"));
            a.each(f, function (b, d) {
                var e = m.head(d);
                o.isLi(e) ? c.wrapList(d, e.parentNode.nodeName) : a.each(d, function (b, c) {
                    a(c).css("marginLeft", function (a, b) {
                        return (parseInt(b, 10) || 0) + 25
                    })
                })
            }), d.select()
        }, this.outdent = function (b) {
            var c = this, d = L.create(b).wrapBodyInlineWithPara(), e = d.nodes(o.isPara, {includeAncestor: !0}),
                f = m.clusterBy(e, l.peq2("parentNode"));
            a.each(f, function (b, d) {
                var e = m.head(d);
                o.isLi(e) ? c.releaseList([d]) : a.each(d, function (b, c) {
                    a(c).css("marginLeft", function (a, b) {
                        return b = parseInt(b, 10) || 0, b > 25 ? b - 25 : ""
                    })
                })
            }), d.select()
        }, this.toggleList = function (c, d) {
            var e = L.create(d).wrapBodyInlineWithPara(), f = e.nodes(o.isPara, {includeAncestor: !0}),
                g = e.paraBookmark(f), h = m.clusterBy(f, l.peq2("parentNode"));
            if (m.find(f, o.isPurePara)) {
                var i = [];
                a.each(h, function (a, d) {
                    i = i.concat(b.wrapList(d, c))
                }), f = i
            } else {
                var j = e.nodes(o.isList, {includeAncestor: !0}).filter(function (b) {
                    return !a.nodeName(b, c)
                });
                j.length ? a.each(j, function (a, b) {
                    o.replace(b, c)
                }) : f = this.releaseList(h, !0)
            }
            L.createFromParaBookmark(g, f).select()
        }, this.wrapList = function (a, b) {
            var c = m.head(a), d = m.last(a), e = o.isList(c.previousSibling) && c.previousSibling,
                f = o.isList(d.nextSibling) && d.nextSibling, g = e || o.insertAfter(o.create(b || "UL"), d);
            return a = a.map(function (a) {
                return o.isPurePara(a) ? o.replace(a, "LI") : a
            }), o.appendChildNodes(g, a), f && (o.appendChildNodes(g, m.from(f.childNodes)), o.remove(f)), a
        }, this.releaseList = function (b, c) {
            var d = [];
            return a.each(b, function (b, e) {
                var f = m.head(e), g = m.last(e), h = c ? o.lastAncestor(f, o.isList) : f.parentNode,
                    i = h.childNodes.length > 1 ? o.splitTree(h, {
                        node: g.parentNode,
                        offset: o.position(g) + 1
                    }, {isSkipPaddingBlankHTML: !0}) : null,
                    j = o.splitTree(h, {node: f.parentNode, offset: o.position(f)}, {isSkipPaddingBlankHTML: !0});
                e = c ? o.listDescendant(j, o.isLi) : m.from(j.childNodes).filter(o.isLi), !c && o.isList(h.parentNode) || (e = e.map(function (a) {
                    return o.replace(a, "P")
                })), a.each(m.from(e).reverse(), function (a, b) {
                    o.insertAfter(b, h)
                });
                var k = m.compact([h, j, i]);
                a.each(k, function (b, c) {
                    var d = [c].concat(o.listDescendant(c, o.isList));
                    a.each(d.reverse(), function (a, b) {
                        o.nodeLength(b) || o.remove(b, !0)
                    })
                }), d = d.concat(e)
            }), d
        }
    }, Q = function () {
        var b = new P;
        this.insertTab = function (a, b) {
            var c = o.createText(new Array(b + 1).join(o.NBSP_CHAR));
            a = a.deleteContents(), a.insertNode(c, !0), a = L.create(c, b), a.select()
        }, this.insertParagraph = function (c) {
            var d = L.create(c);
            d = d.deleteContents(), d = d.wrapBodyInlineWithPara();
            var e, f = o.ancestor(d.sc, o.isPara);
            if (f) {
                if (o.isEmpty(f) && o.isLi(f)) return void b.toggleList(f.parentNode.nodeName);
                if (o.isEmpty(f) && o.isPara(f) && o.isBlockquote(f.parentNode)) o.insertAfter(f, f.parentNode), e = f; else {
                    e = o.splitTree(f, d.getStartPoint());
                    var g = o.listDescendant(f, o.isEmptyAnchor);
                    g = g.concat(o.listDescendant(e, o.isEmptyAnchor)), a.each(g, function (a, b) {
                        o.remove(b)
                    }), (o.isHeading(e) || o.isPre(e) || o.isCustomStyleTag(e)) && o.isEmpty(e) && (e = o.replace(e, "p"))
                }
            } else {
                var h = d.sc.childNodes[d.so];
                e = a(o.emptyPara)[0], h ? d.sc.insertBefore(e, h) : d.sc.appendChild(e)
            }
            L.create(e, 0).normalize().select().scrollIntoView(c)
        }
    }, R = function (a, b, c, d) {
        function e() {
            return !a || !a.tagName || "td" !== a.tagName.toLowerCase() && "th" !== a.tagName.toLowerCase() ? void console.error("Impossible to identify start Cell point.", a) : (n.colPos = a.cellIndex, a.parentElement && a.parentElement.tagName && "tr" === a.parentElement.tagName.toLowerCase() ? void(n.rowPos = a.parentElement.rowIndex) : void console.error("Impossible to identify start Row point.", a))
        }

        function f(a, b, c, d, e, f, g) {
            var h = {baseRow: c, baseCell: d, isRowSpan: e, isColSpan: f, isVirtual: g};
            o[a] || (o[a] = []), o[a][b] = h
        }

        function g(a, b, c, d) {
            return {baseCell: a.baseCell, action: b, virtualTable: {rowIndex: c, cellIndex: d}}
        }

        function h(a, b) {
            if (!o[a]) return b;
            if (!o[a][b]) return b;
            for (var c = b; o[a][c];) if (c++, !o[a][c]) return c
        }

        function i(a, b) {
            var c = h(a.rowIndex, b.cellIndex), d = b.colSpan > 1, e = b.rowSpan > 1,
                g = a.rowIndex === n.rowPos && b.cellIndex === n.colPos;
            f(a.rowIndex, c, a, b, e, d, !1);
            var i = b.attributes.rowSpan ? parseInt(b.attributes.rowSpan.value, 10) : 0;
            if (i > 1) for (var k = 1; k < i; k++) {
                var l = a.rowIndex + k;
                j(l, c, b, g), f(l, c, a, b, !0, d, !0)
            }
            var m = b.attributes.colSpan ? parseInt(b.attributes.colSpan.value, 10) : 0;
            if (m > 1) for (var o = 1; o < m; o++) {
                var p = h(a.rowIndex, c + o);
                j(a.rowIndex, p, b, g), f(a.rowIndex, p, a, b, e, !0, !0)
            }
        }

        function j(a, b, c, d) {
            a === n.rowPos && n.colPos >= c.cellIndex && c.cellIndex <= b && !d && n.colPos++
        }

        function k() {
            for (var a = d.rows, b = 0; b < a.length; b++) for (var c = a[b].cells, e = 0; e < c.length; e++) i(a[b], c[e])
        }

        function l(a) {
            switch (b) {
                case R.where.Column:
                    if (a.isColSpan) return R.resultAction.SubtractSpanCount;
                    break;
                case R.where.Row:
                    if (!a.isVirtual && a.isRowSpan) return R.resultAction.AddCell;
                    if (a.isRowSpan) return R.resultAction.SubtractSpanCount
            }
            return R.resultAction.RemoveCell
        }

        function m(a) {
            switch (b) {
                case R.where.Column:
                    if (a.isColSpan) return R.resultAction.SumSpanCount;
                    if (a.isRowSpan && a.isVirtual) return R.resultAction.Ignore;
                    break;
                case R.where.Row:
                    if (a.isRowSpan) return R.resultAction.SumSpanCount;
                    if (a.isColSpan && a.isVirtual) return R.resultAction.Ignore
            }
            return R.resultAction.AddCell
        }

        var n = {colPos: 0, rowPos: 0}, o = [], p = [];
        this.getActionList = function () {
            for (var a = b === R.where.Row ? n.rowPos : -1, d = b === R.where.Column ? n.colPos : -1, e = 0, f = !0; f;) {
                var h = a >= 0 ? a : e, i = d >= 0 ? d : e, j = o[h];
                if (!j) return f = !1, p;
                var k = j[i];
                if (!k) return f = !1, p;
                var q = R.resultAction.Ignore;
                switch (c) {
                    case R.requestAction.Add:
                        q = m(k);
                        break;
                    case R.requestAction.Delete:
                        q = l(k)
                }
                p.push(g(k, q, h, i)), e++
            }
            return p
        }, function () {
            e(), k()
        }()
    };
    R.where = {Row: 0, Column: 1}, R.requestAction = {Add: 0, Delete: 1}, R.resultAction = {
        Ignore: 0,
        SubtractSpanCount: 1,
        RemoveCell: 2,
        AddCell: 3,
        SumSpanCount: 4
    };
    var S, T = function () {
        this.tab = function (a, b) {
            var c = o.ancestor(a.commonAncestor(), o.isCell), d = o.ancestor(c, o.isTable),
                e = o.listDescendant(d, o.isCell), f = m[b ? "prev" : "next"](e, c);
            f && L.create(f, 0).select()
        }, this.addRow = function (b, c) {
            for (var d = o.ancestor(b.commonAncestor(), o.isCell), e = a(d).closest("tr"), f = this.recoverAttributes(e), g = a("<tr" + f + "></tr>"), h = new R(d, R.where.Row, R.requestAction.Add, a(e).closest("table")[0]), i = h.getActionList(), j = 0; j < i.length; j++) {
                var k = i[j], l = this.recoverAttributes(k.baseCell);
                switch (k.action) {
                    case R.resultAction.AddCell:
                        g.append("<td" + l + ">" + o.blank + "</td>");
                        break;
                    case R.resultAction.SumSpanCount:
                        if ("top" === c) {
                            if ((k.baseCell.parent ? k.baseCell.closest("tr").rowIndex : 0) <= e[0].rowIndex) {
                                var m = a("<div></div>").append(a("<td" + l + ">" + o.blank + "</td>").removeAttr("rowspan")).html();
                                g.append(m);
                                break
                            }
                        }
                        var n = parseInt(k.baseCell.rowSpan, 10);
                        n++, k.baseCell.setAttribute("rowSpan", n)
                }
            }
            if ("top" === c) e.before(g); else {
                if (d.rowSpan > 1) {
                    var p = e[0].rowIndex + (d.rowSpan - 2);
                    return void a(a(e).parent().find("tr")[p]).after(a(g))
                }
                e.after(g)
            }
        }, this.addCol = function (b, c) {
            var d = o.ancestor(b.commonAncestor(), o.isCell), e = a(d).closest("tr");
            a(e).siblings().push(e);
            for (var f = new R(d, R.where.Column, R.requestAction.Add, a(e).closest("table")[0]), g = f.getActionList(), h = 0; h < g.length; h++) {
                var i = g[h], j = this.recoverAttributes(i.baseCell);
                switch (i.action) {
                    case R.resultAction.AddCell:
                        "right" === c ? a(i.baseCell).after("<td" + j + ">" + o.blank + "</td>") : a(i.baseCell).before("<td" + j + ">" + o.blank + "</td>");
                        break;
                    case R.resultAction.SumSpanCount:
                        if ("right" === c) {
                            var k = parseInt(i.baseCell.colSpan, 10);
                            k++, i.baseCell.setAttribute("colSpan", k)
                        } else a(i.baseCell).before("<td" + j + ">" + o.blank + "</td>")
                }
            }
        }, this.recoverAttributes = function (a) {
            var b = "";
            if (!a) return b;
            for (var c = a.attributes || [], d = 0; d < c.length; d++) "id" !== c[d].name.toLowerCase() && c[d].specified && (b += " " + c[d].name + "='" + c[d].value + "'");
            return b
        }, this.deleteRow = function (b) {
            for (var c = o.ancestor(b.commonAncestor(), o.isCell), d = a(c).closest("tr"), e = d.children("td, th").index(a(c)), f = d[0].rowIndex, g = new R(c, R.where.Row, R.requestAction.Delete, a(d).closest("table")[0]), h = g.getActionList(), i = 0; i < h.length; i++) if (h[i]) {
                var j = h[i].baseCell, k = h[i].virtualTable, l = j.rowSpan && j.rowSpan > 1,
                    m = l ? parseInt(j.rowSpan, 10) : 0;
                switch (h[i].action) {
                    case R.resultAction.Ignore:
                        continue;
                    case R.resultAction.AddCell:
                        var n = d.next("tr")[0];
                        if (!n) continue;
                        var p = d[0].cells[e];
                        l && (m > 2 ? (m--, n.insertBefore(p, n.cells[e]), n.cells[e].setAttribute("rowSpan", m), n.cells[e].innerHTML = "") : 2 === m && (n.insertBefore(p, n.cells[e]), n.cells[e].removeAttribute("rowSpan"), n.cells[e].innerHTML = ""));
                        continue;
                    case R.resultAction.SubtractSpanCount:
                        l && (m > 2 ? (m--, j.setAttribute("rowSpan", m), k.rowIndex !== f && j.cellIndex === e && (j.innerHTML = "")) : 2 === m && (j.removeAttribute("rowSpan"), k.rowIndex !== f && j.cellIndex === e && (j.innerHTML = "")));
                        continue;
                    case R.resultAction.RemoveCell:
                        continue
                }
            }
            d.remove()
        }, this.deleteCol = function (b) {
            for (var c = o.ancestor(b.commonAncestor(), o.isCell), d = a(c).closest("tr"), e = d.children("td, th").index(a(c)), f = new R(c, R.where.Column, R.requestAction.Delete, a(d).closest("table")[0]), g = f.getActionList(), h = 0; h < g.length; h++) if (g[h]) switch (g[h].action) {
                case R.resultAction.Ignore:
                    continue;
                case R.resultAction.SubtractSpanCount:
                    var i = g[h].baseCell, j = i.colSpan && i.colSpan > 1;
                    if (j) {
                        var k = i.colSpan ? parseInt(i.colSpan, 10) : 0;
                        k > 2 ? (k--, i.setAttribute("colSpan", k), i.cellIndex === e && (i.innerHTML = "")) : 2 === k && (i.removeAttribute("colSpan"), i.cellIndex === e && (i.innerHTML = ""))
                    }
                    continue;
                case R.resultAction.RemoveCell:
                    o.remove(g[h].baseCell, !0);
                    continue
            }
        }, this.createTable = function (b, c, d) {
            for (var e, f = [], g = 0; g < b; g++) f.push("<td>" + o.blank + "</td>");
            e = f.join("");
            for (var h, i = [], j = 0; j < c; j++) i.push("<tr>" + e + "</tr>");
            h = i.join("");
            var k = a("<table>" + h + "</table>");
            return d && d.tableClassName && k.addClass(d.tableClassName), k[0]
        }, this.deleteTable = function (b) {
            var c = o.ancestor(b.commonAncestor(), o.isCell);
            a(c).closest("table").remove()
        }
    }, U = function (b) {
        var c = this, d = b.layoutInfo.note, e = b.layoutInfo.editor, f = b.layoutInfo.editable, g = b.options,
            h = g.langInfo, i = f[0], j = null, n = new O, p = new T, q = new Q, r = new P, s = new N(f);
        this.initialize = function () {
            f.on("keydown", function (a) {
                a.keyCode === K.code.ENTER && b.triggerEvent("enter", a), b.triggerEvent("keydown", a), a.isDefaultPrevented() || (g.shortcuts ? c.handleKeyMap(a) : c.preventDefaultEditableShortCuts(a))
            }).on("keyup", function (a) {
                b.triggerEvent("keyup", a)
            }).on("focus", function (a) {
                b.triggerEvent("focus", a)
            }).on("blur", function (a) {
                b.triggerEvent("blur", a)
            }).on("mousedown", function (a) {
                b.triggerEvent("mousedown", a)
            }).on("mouseup", function (a) {
                b.triggerEvent("mouseup", a)
            }).on("scroll", function (a) {
                b.triggerEvent("scroll", a)
            }).on("paste", function (a) {
                b.triggerEvent("paste", a)
            }), f.html(o.html(d) || o.emptyPara);
            var a = k.isMSIE ? "DOMCharacterDataModified DOMSubtreeModified DOMNodeInserted" : "input";
            f.on(a, l.debounce(function () {
                b.triggerEvent("change", f.html())
            }, 100)), e.on("focusin", function (a) {
                b.triggerEvent("focusin", a)
            }).on("focusout", function (a) {
                b.triggerEvent("focusout", a)
            }), g.airMode || (g.width && e.outerWidth(g.width), g.height && f.outerHeight(g.height), g.maxHeight && f.css("max-height", g.maxHeight), g.minHeight && f.css("min-height", g.minHeight)), s.recordUndo()
        }, this.destroy = function () {
            f.off()
        }, this.handleKeyMap = function (a) {
            var c = g.keyMap[k.isMac ? "mac" : "pc"], d = [];
            a.metaKey && d.push("CMD"), a.ctrlKey && !a.altKey && d.push("CTRL"), a.shiftKey && d.push("SHIFT");
            var e = K.nameFromCode[a.keyCode];
            e && d.push(e);
            var f = c[d.join("+")];
            f ? (a.preventDefault(), b.invoke(f)) : K.isEdit(a.keyCode) && this.afterCommand()
        }, this.preventDefaultEditableShortCuts = function (a) {
            (a.ctrlKey || a.metaKey) && m.contains([66, 73, 85], a.keyCode) && a.preventDefault()
        }, this.createRange = function () {
            return this.focus(), L.create(i)
        }, this.saveRange = function (a) {
            j = this.createRange(), a && j.collapse().select()
        }, this.restoreRange = function () {
            j && (j.select(), this.focus())
        }, this.saveTarget = function (a) {
            f.data("target", a)
        }, this.clearTarget = function () {
            f.removeData("target")
        }, this.restoreTarget = function () {
            return f.data("target")
        }, this.currentStyle = function () {
            var a = L.create();
            return a && (a = a.normalize()), a ? n.current(a) : n.fromNode(f)
        }, this.styleFromNode = function (a) {
            return n.fromNode(a)
        }, this.undo = function () {
            b.triggerEvent("before.command", f.html()), s.undo(), b.triggerEvent("change", f.html())
        }, b.memo("help.undo", h.help.undo), this.redo = function () {
            b.triggerEvent("before.command", f.html()), s.redo(), b.triggerEvent("change", f.html())
        }, b.memo("help.redo", h.help.redo);
        for (var t = this.beforeCommand = function () {
            b.triggerEvent("before.command", f.html()), c.focus()
        }, u = this.afterCommand = function (a) {
            s.recordUndo(), a || b.triggerEvent("change", f.html())
        }, v = ["bold", "italic", "underline", "strikethrough", "superscript", "subscript", "justifyLeft", "justifyCenter", "justifyRight", "justifyFull", "formatBlock", "removeFormat", "backColor", "fontName"], w = 0, x = v.length; w < x; w++) this[v[w]] = function (a) {
            return function (b) {
                t(), document.execCommand(a, !1, b), u(!0)
            }
        }(v[w]), b.memo("help." + v[w], h.help[v[w]]);
        this.tab = function () {
            var a = this.createRange();
            a.isCollapsed() && a.isOnCell() ? p.tab(a) : (t(), q.insertTab(a, g.tabSize), u())
        }, b.memo("help.tab", h.help.tab), this.untab = function () {
            var a = this.createRange();
            a.isCollapsed() && a.isOnCell() && p.tab(a, !0)
        }, b.memo("help.untab", h.help.untab), this.wrapCommand = function (a) {
            return function () {
                t(), a.apply(c, arguments), u()
            }
        }, this.insertParagraph = this.wrapCommand(function () {
            q.insertParagraph(i)
        }), b.memo("help.insertParagraph", h.help.insertParagraph), this.insertOrderedList = this.wrapCommand(function () {
            r.insertOrderedList(i)
        }), b.memo("help.insertOrderedList", h.help.insertOrderedList), this.insertUnorderedList = this.wrapCommand(function () {
            r.insertUnorderedList(i)
        }), b.memo("help.insertUnorderedList", h.help.insertUnorderedList), this.indent = this.wrapCommand(function () {
            r.indent(i)
        }), b.memo("help.indent", h.help.indent), this.outdent = this.wrapCommand(function () {
            r.outdent(i)
        }), b.memo("help.outdent", h.help.outdent), this.insertImage = function (a, c) {
            return M.createImage(a, c).then(function (a) {
                t(), "function" == typeof c ? c(a) : ("string" == typeof c && a.attr("data-filename", c), a.css("width", Math.min(f.width(), a.width()))), a.show(), L.create(i).insertNode(a[0]), L.createFromNodeAfter(a[0]).select(), u()
            }).fail(function (a) {
                b.triggerEvent("image.upload.error", a)
            })
        }, this.insertImages = function (d) {
            a.each(d, function (a, d) {
                var e = d.name;
                g.maximumImageFileSize && g.maximumImageFileSize < d.size ? b.triggerEvent("image.upload.error", h.image.maximumFileSizeError) : M.readFileAsDataURL(d).then(function (a) {
                    return c.insertImage(a, e)
                }).fail(function () {
                    b.triggerEvent("image.upload.error")
                })
            })
        }, this.insertImagesOrCallback = function (a) {
            g.callbacks.onImageUpload ? b.triggerEvent("image.upload", a) : this.insertImages(a)
        }, this.insertNode = this.wrapCommand(function (a) {
            this.createRange().insertNode(a), L.createFromNodeAfter(a).select()
        }), this.insertText = this.wrapCommand(function (a) {
            var b = this.createRange(), c = b.insertNode(o.createText(a));
            L.create(c, o.nodeLength(c)).select()
        }), this.getSelectedText = function () {
            var a = this.createRange();
            return a.isOnAnchor() && (a = L.createFromNode(o.ancestor(a.sc, o.isAnchor))), a.toString()
        }, this.pasteHTML = this.wrapCommand(function (a) {
            var b = this.createRange().pasteHTML(a);
            L.createFromNodeAfter(m.last(b)).select()
        }), this.formatBlock = this.wrapCommand(function (a, c) {
            var d = b.options.callbacks.onApplyCustomStyle;
            d ? d.call(this, c, b, this.onFormatBlock) : this.onFormatBlock(a)
        }), this.onFormatBlock = function (a) {
            a = k.isMSIE ? "<" + a + ">" : a, document.execCommand("FormatBlock", !1, a)
        }, this.formatPara = function () {
            this.formatBlock("P")
        }, b.memo("help.formatPara", h.help.formatPara);
        for (var w = 1; w <= 6; w++) this["formatH" + w] = function (a) {
            return function () {
                this.formatBlock("H" + a)
            }
        }(w), b.memo("help.formatH" + w, h.help["formatH" + w]);
        this.fontSize = function (b) {
            var c = this.createRange();
            if (c && c.isCollapsed()) {
                var d = n.styleNodes(c), e = m.head(d);
                a(d).css({"font-size": b + "px"}), e && !o.nodeLength(e) && (e.innerHTML = o.ZERO_WIDTH_NBSP_CHAR, L.createFromNodeAfter(e.firstChild).select(), f.data("bogus", e))
            } else t(), a(n.styleNodes(c)).css({"font-size": b + "px"}), u()
        }, this.insertHorizontalRule = this.wrapCommand(function () {
            var a = this.createRange().insertNode(o.create("HR"));
            a.nextSibling && L.create(a.nextSibling, 0).normalize().select()
        }), b.memo("help.insertHorizontalRule", h.help.insertHorizontalRule), this.removeBogus = function () {
            var a = f.data("bogus");
            if (a) {
                var b = m.find(m.from(a.childNodes), o.isText), c = b.nodeValue.indexOf(o.ZERO_WIDTH_NBSP_CHAR);
                -1 !== c && b.deleteData(c, 1), o.isEmpty(a) && o.remove(a), f.removeData("bogus")
            }
        }, this.lineHeight = this.wrapCommand(function (a) {
            n.stylePara(this.createRange(), {lineHeight: a})
        }), this.unlink = function () {
            var a = this.createRange();
            if (a.isOnAnchor()) {
                var b = o.ancestor(a.sc, o.isAnchor);
                a = L.createFromNode(b), a.select(), t(), document.execCommand("unlink"), u()
            }
        }, this.createLink = this.wrapCommand(function (b) {
            var c = b.url, d = b.text, e = b.isNewWindow, f = b.range || this.createRange(), h = f.toString() !== d;
            "string" == typeof c && (c = c.trim()), c = g.onCreateLink ? g.onCreateLink(c) : /^[A-Za-z][A-Za-z0-9+-.]*\:[\/\/]?/.test(c) ? c : "http://" + c;
            var i = [];
            if (h) {
                f = f.deleteContents();
                var j = f.insertNode(a("<A>" + d + "</A>")[0]);
                i.push(j)
            } else i = n.styleNodes(f, {nodeName: "A", expandClosestSibling: !0, onlyPartialContains: !0});
            a.each(i, function (b, d) {
                a(d).attr("href", c), e ? a(d).attr("target", "_blank") : a(d).removeAttr("target")
            });
            var k = L.createFromNodeBefore(m.head(i)), l = k.getStartPoint(), o = L.createFromNodeAfter(m.last(i)),
                p = o.getEndPoint();
            L.create(l.node, l.offset, p.node, p.offset).select()
        }), this.getLinkInfo = function () {
            var b = this.createRange().expand(o.isAnchor), c = a(m.head(b.nodes(o.isAnchor))),
                d = {range: b, text: b.toString(), url: c.length ? c.attr("href") : ""};
            return c.length && (d.isNewWindow = "_blank" === c.attr("target")), d
        }, this.color = this.wrapCommand(function (a) {
            var b = a.foreColor, c = a.backColor;
            b && document.execCommand("foreColor", !1, b), c && document.execCommand("backColor", !1, c)
        }), this.foreColor = this.wrapCommand(function (a) {
            document.execCommand("styleWithCSS", !1, !0), document.execCommand("foreColor", !1, a)
        }), this.insertTable = this.wrapCommand(function (a) {
            var b = a.split("x");
            this.createRange().deleteContents().insertNode(p.createTable(b[0], b[1], g))
        }), this.addRow = function (a) {
            var b = this.createRange(f);
            b.isCollapsed() && b.isOnCell() && (t(), p.addRow(b, a), u())
        }, this.addCol = function (a) {
            var b = this.createRange(f);
            b.isCollapsed() && b.isOnCell() && (t(), p.addCol(b, a), u())
        }, this.deleteRow = function () {
            var a = this.createRange(f);
            a.isCollapsed() && a.isOnCell() && (t(), p.deleteRow(a), u())
        }, this.deleteCol = function () {
            var a = this.createRange(f);
            a.isCollapsed() && a.isOnCell() && (t(), p.deleteCol(a), u())
        }, this.deleteTable = function () {
            var a = this.createRange(f);
            a.isCollapsed() && a.isOnCell() && (t(), p.deleteTable(a), u())
        }, this.floatMe = this.wrapCommand(function (b) {
            var c = a(this.restoreTarget());
            c.toggleClass("note-float-left", "left" === b), c.toggleClass("note-float-right", "right" === b), c.css("float", b)
        }), this.resize = this.wrapCommand(function (b) {
            a(this.restoreTarget()).css({width: 100 * b + "%", height: ""})
        }), this.resizeTo = function (a, b, c) {
            var d;
            if (c) {
                var e = a.y / a.x, f = b.data("ratio");
                d = {width: f > e ? a.x : a.y / f, height: f > e ? a.x * f : a.y}
            } else d = {width: a.x, height: a.y};
            b.css(d)
        }, this.removeMedia = this.wrapCommand(function () {
            var c = a(this.restoreTarget()).detach();
            b.triggerEvent("media.delete", c, f)
        }), this.hasFocus = function () {
            return f.is(":focus")
        }, this.focus = function () {
            this.hasFocus() || f.focus()
        }, this.isEmpty = function () {
            return o.isEmpty(f[0]) || o.emptyPara === f.html()
        }, this.empty = function () {
            b.invoke("code", o.emptyPara)
        }
    }, V = function (b) {
        var c = this, d = b.layoutInfo.editable;
        this.events = {
            "summernote.keydown": function (a, d) {
                c.needKeydownHook() && (d.ctrlKey || d.metaKey) && d.keyCode === K.code.V && (b.invoke("editor.saveRange"), c.$paste.focus(), setTimeout(function () {
                    c.pasteByHook()
                }, 0))
            }
        }, this.needKeydownHook = function () {
            return k.isMSIE && k.browserVersion > 10 || k.isFF
        }, this.initialize = function () {
            this.needKeydownHook() ? (this.$paste = a('<div tabindex="-1" />').attr("contenteditable", !0).css({
                position: "absolute",
                left: -1e5,
                opacity: 0
            }), d.before(this.$paste), this.$paste.on("paste", function (a) {
                b.triggerEvent("paste", a)
            })) : d.on("paste", this.pasteByEvent)
        }, this.destroy = function () {
            this.needKeydownHook() && (this.$paste.remove(), this.$paste = null)
        }, this.pasteByHook = function () {
            var c = this.$paste[0].firstChild, d = c && c.src;
            if (o.isImg(c) && 0 === d.indexOf("data:")) {
                for (var e = atob(c.src.split(",")[1]), f = new Uint8Array(e.length), g = 0; g < e.length; g++) f[g] = e.charCodeAt(g);
                var h = new Blob([f], {type: "image/png"});
                h.name = "clipboard.png", b.invoke("editor.restoreRange"), b.invoke("editor.focus"), b.invoke("editor.insertImagesOrCallback", [h])
            } else {
                var i = a("<div />").html(this.$paste.html()).html();
                b.invoke("editor.restoreRange"), b.invoke("editor.focus"), i && b.invoke("editor.pasteHTML", i)
            }
            this.$paste.empty()
        }, this.pasteByEvent = function (a) {
            var c = a.originalEvent.clipboardData;
            if (c && c.items && c.items.length) {
                var d = m.head(c.items);
                "file" === d.kind && -1 !== d.type.indexOf("image/") && b.invoke("editor.insertImagesOrCallback", [d.getAsFile()]), b.invoke("editor.afterCommand")
            }
        }
    }, W = function (b) {
        var c = a(document), d = b.layoutInfo.editor, e = b.layoutInfo.editable, f = b.options, g = f.langInfo, h = {},
            i = a(['<div class="note-dropzone">', '  <div class="note-dropzone-message"/>', "</div>"].join("")).prependTo(d),
            j = function () {
                Object.keys(h).forEach(function (a) {
                    c.off(a.substr(2).toLowerCase(), h[a])
                }), h = {}
            };
        this.initialize = function () {
            f.disableDragAndDrop ? (h.onDrop = function (a) {
                a.preventDefault()
            }, c.on("drop", h.onDrop)) : this.attachDragAndDropEvent()
        }, this.attachDragAndDropEvent = function () {
            var f = a(), j = i.find(".note-dropzone-message");
            h.onDragenter = function (a) {
                var c = b.invoke("codeview.isActivated"), e = d.width() > 0 && d.height() > 0;
                c || f.length || !e || (d.addClass("dragover"), i.width(d.width()), i.height(d.height()), j.text(g.image.dragImageHere)), f = f.add(a.target)
            }, h.onDragleave = function (a) {
                f = f.not(a.target), f.length || d.removeClass("dragover")
            }, h.onDrop = function () {
                f = a(), d.removeClass("dragover")
            }, c.on("dragenter", h.onDragenter).on("dragleave", h.onDragleave).on("drop", h.onDrop), i.on("dragenter", function () {
                i.addClass("hover"), j.text(g.image.dropImage)
            }).on("dragleave", function () {
                i.removeClass("hover"), j.text(g.image.dragImageHere)
            }), i.on("drop", function (c) {
                var d = c.originalEvent.dataTransfer;
                d && d.files && d.files.length ? (c.preventDefault(), e.focus(), b.invoke("editor.insertImagesOrCallback", d.files)) : a.each(d.types, function (c, e) {
                    var f = d.getData(e);
                    e.toLowerCase().indexOf("text") > -1 ? b.invoke("editor.pasteHTML", f) : a(f).each(function () {
                        b.invoke("editor.insertNode", this)
                    })
                })
            }).on("dragover", !1)
        }, this.destroy = function () {
            j()
        }
    };
    k.hasCodeMirror && (k.isSupportAmd ? require(["codemirror"], function (a) {
        S = a
    }) : S = window.CodeMirror);
    var X = function (a) {
        var b = a.layoutInfo.editor, c = a.layoutInfo.editable, d = a.layoutInfo.codable, e = a.options;
        this.sync = function () {
            this.isActivated() && k.hasCodeMirror && d.data("cmEditor").save()
        }, this.isActivated = function () {
            return b.hasClass("codeview")
        }, this.toggle = function () {
            this.isActivated() ? this.deactivate() : this.activate(), a.triggerEvent("codeview.toggled")
        }, this.activate = function () {
            if (d.val(o.html(c, e.prettifyHtml)), d.height(c.height()), a.invoke("toolbar.updateCodeview", !0), b.addClass("codeview"), d.focus(), k.hasCodeMirror) {
                var f = S.fromTextArea(d[0], e.codemirror);
                if (e.codemirror.tern) {
                    var g = new S.TernServer(e.codemirror.tern);
                    f.ternServer = g, f.on("cursorActivity", function (a) {
                        g.updateArgHints(a)
                    })
                }
                f.setSize(null, c.outerHeight()), d.data("cmEditor", f)
            }
        }, this.deactivate = function () {
            if (k.hasCodeMirror) {
                var f = d.data("cmEditor");
                d.val(f.getValue()), f.toTextArea()
            }
            var g = o.value(d, e.prettifyHtml) || o.emptyPara, h = c.html() !== g;
            c.html(g), c.height(e.height ? d.height() : "auto"), b.removeClass("codeview"), h && a.triggerEvent("change", c.html(), c), c.focus(), a.invoke("toolbar.updateCodeview", !1)
        }, this.destroy = function () {
            this.isActivated() && this.deactivate()
        }
    }, Y = function (b) {
        var c = a(document), d = b.layoutInfo.statusbar, e = b.layoutInfo.editable, f = b.options;
        this.initialize = function () {
            if (f.airMode || f.disableResizeEditor) return void this.destroy();
            d.on("mousedown", function (a) {
                a.preventDefault(), a.stopPropagation();
                var b = e.offset().top - c.scrollTop(), d = function (a) {
                    var c = a.clientY - (b + 24);
                    c = f.minheight > 0 ? Math.max(c, f.minheight) : c, c = f.maxHeight > 0 ? Math.min(c, f.maxHeight) : c, e.height(c)
                };
                c.on("mousemove", d).one("mouseup", function () {
                    c.off("mousemove", d)
                })
            })
        }, this.destroy = function () {
            d.off(), d.remove()
        }
    }, Z = function (b) {
        var c = this, d = b.layoutInfo.editor, e = b.layoutInfo.toolbar, f = b.layoutInfo.editable,
            g = b.layoutInfo.codable, h = a(window), i = a("html, body");
        this.resizeTo = function (a) {
            f.css("height", a.h), g.css("height", a.h), g.data("cmeditor") && g.data("cmeditor").setsize(null, a.h)
        }, this.onResize = function () {
            c.resizeTo({h: h.height() - e.outerHeight()})
        }, this.toggle = function () {
            d.toggleClass("fullscreen"), this.isFullscreen() ? (f.data("orgHeight", f.css("height")), h.on("resize", this.onResize).trigger("resize"), i.css("overflow", "hidden")) : (h.off("resize", this.onResize), this.resizeTo({h: f.data("orgHeight")}), i.css("overflow", "visible")), b.invoke("toolbar.updateFullscreen", this.isFullscreen())
        }, this.isFullscreen = function () {
            return d.hasClass("fullscreen")
        }
    }, $ = function (b) {
        var c = this, d = a(document), e = b.layoutInfo.editingArea, f = b.options;
        this.events = {
            "summernote.mousedown": function (a, b) {
                c.update(b.target) && b.preventDefault()
            }, "summernote.keyup summernote.scroll summernote.change summernote.dialog.shown": function () {
                c.update()
            }, "summernote.disable": function () {
                c.hide()
            }, "summernote.codeview.toggled": function () {
                c.update()
            }
        }, this.initialize = function () {
            this.$handle = a(['<div class="note-handle">', '<div class="note-control-selection">', '<div class="note-control-selection-bg"></div>', '<div class="note-control-holder note-control-nw"></div>', '<div class="note-control-holder note-control-ne"></div>', '<div class="note-control-holder note-control-sw"></div>', '<div class="', f.disableResizeImage ? "note-control-holder" : "note-control-sizing", ' note-control-se"></div>', f.disableResizeImage ? "" : '<div class="note-control-selection-info"></div>', "</div>", "</div>"].join("")).prependTo(e), this.$handle.on("mousedown", function (a) {
                if (o.isControlSizing(a.target)) {
                    a.preventDefault(), a.stopPropagation();
                    var e = c.$handle.find(".note-control-selection").data("target"), f = e.offset(), g = d.scrollTop(),
                        h = function (a) {
                            b.invoke("editor.resizeTo", {
                                x: a.clientX - f.left,
                                y: a.clientY - (f.top - g)
                            }, e, !a.shiftKey), c.update(e[0])
                        };
                    d.on("mousemove", h).one("mouseup", function (a) {
                        a.preventDefault(), d.off("mousemove", h), b.invoke("editor.afterCommand")
                    }), e.data("ratio") || e.data("ratio", e.height() / e.width())
                }
            }), this.$handle.on("wheel", function (a) {
                a.preventDefault(), c.update()
            })
        }, this.destroy = function () {
            this.$handle.remove()
        }, this.update = function (c) {
            if (b.isDisabled()) return !1;
            var d = o.isImg(c), e = this.$handle.find(".note-control-selection");
            if (b.invoke("imagePopover.update", c), d) {
                var f = a(c), g = f.position(), h = {
                    left: g.left + parseInt(f.css("marginLeft"), 10),
                    top: g.top + parseInt(f.css("marginTop"), 10)
                }, i = {w: f.outerWidth(!1), h: f.outerHeight(!1)};
                e.css({display: "block", left: h.left, top: h.top, width: i.w, height: i.h}).data("target", f);
                var j = i.w + "x" + i.h;
                e.find(".note-control-selection-info").text(j), b.invoke("editor.saveTarget", c)
            } else this.hide();
            return d
        }, this.hide = function () {
            b.invoke("editor.clearTarget"), this.$handle.children().hide()
        }
    }, _ = function (b) {
        var c = this, d = /^([A-Za-z][A-Za-z0-9+-.]*\:[\/\/]?|mailto:[A-Z0-9._%+-]+@)?(www\.)?(.+)$/i;
        this.events = {
            "summernote.keyup": function (a, b) {
                b.isDefaultPrevented() || c.handleKeyup(b)
            }, "summernote.keydown": function (a, b) {
                c.handleKeydown(b)
            }
        }, this.initialize = function () {
            this.lastWordRange = null
        }, this.destroy = function () {
            this.lastWordRange = null
        }, this.replace = function () {
            if (this.lastWordRange) {
                var c = this.lastWordRange.toString(), e = c.match(d);
                if (e && (e[1] || e[2])) {
                    var f = e[1] ? c : "http://" + c, g = a("<a />").html(c).attr("href", f)[0];
                    this.lastWordRange.insertNode(g), this.lastWordRange = null, b.invoke("editor.focus")
                }
            }
        }, this.handleKeydown = function (a) {
            if (m.contains([K.code.ENTER, K.code.SPACE], a.keyCode)) {
                var c = b.invoke("editor.createRange").getWordRange();
                this.lastWordRange = c
            }
        }, this.handleKeyup = function (a) {
            m.contains([K.code.ENTER, K.code.SPACE], a.keyCode) && this.replace()
        }
    }, aa = function (a) {
        var b = a.layoutInfo.note;
        this.events = {
            "summernote.change": function () {
                b.val(a.invoke("code"))
            }
        }, this.shouldInitialize = function () {
            return o.isTextarea(b[0])
        }
    }, ba = function (b) {
        var c = this, d = b.layoutInfo.editingArea, e = b.options;
        this.events = {
            "summernote.init summernote.change": function () {
                c.update()
            }, "summernote.codeview.toggled": function () {
                c.update()
            }
        }, this.shouldInitialize = function () {
            return !!e.placeholder
        }, this.initialize = function () {
            this.$placeholder = a('<div class="note-placeholder">'), this.$placeholder.on("click", function () {
                b.invoke("focus")
            }).text(e.placeholder).prependTo(d), this.update()
        }, this.destroy = function () {
            this.$placeholder.remove()
        }, this.update = function () {
            var a = !b.invoke("codeview.isActivated") && b.invoke("editor.isEmpty");
            this.$placeholder.toggle(a)
        }
    }, ca = function (b) {
        var c = this, d = a.summernote.ui, e = b.layoutInfo.toolbar, f = b.options, g = f.langInfo,
            h = l.invertObject(f.keyMap[k.isMac ? "mac" : "pc"]), i = this.representShortcut = function (a) {
                var b = h[a];
                return f.shortcuts && b ? (k.isMac && (b = b.replace("CMD", "⌘").replace("SHIFT", "⇧")), " (" + (b = b.replace("BACKSLASH", "\\").replace("SLASH", "/").replace("LEFTBRACKET", "[").replace("RIGHTBRACKET", "]")) + ")") : ""
            };
        this.initialize = function () {
            this.addToolbarButtons(), this.addImagePopoverButtons(), this.addLinkPopoverButtons(), this.addTablePopoverButtons(), this.fontInstalledMap = {}
        }, this.destroy = function () {
            delete this.fontInstalledMap
        }, this.isFontInstalled = function (a) {
            return c.fontInstalledMap.hasOwnProperty(a) || (c.fontInstalledMap[a] = k.isFontInstalled(a) || m.contains(f.fontNamesIgnoreCheck, a)), c.fontInstalledMap[a]
        }, this.addToolbarButtons = function () {
            b.memo("button.style", function () {
                return d.buttonGroup([d.button({
                    className: "dropdown-toggle",
                    contents: d.dropdownButtonContents(d.icon(f.icons.magic), f),
                    tooltip: g.style.style,
                    data: {toggle: "dropdown"}
                }), d.dropdown({
                    className: "dropdown-style", items: b.options.styleTags, template: function (a) {
                        "string" == typeof a && (a = {tag: a, title: g.style.hasOwnProperty(a) ? g.style[a] : a});
                        var b = a.tag, c = a.title;
                        return "<" + b + (a.style ? ' style="' + a.style + '" ' : "") + (a.className ? ' class="' + a.className + '"' : "") + ">" + c + "</" + b + ">"
                    }, click: b.createInvokeHandler("editor.formatBlock")
                })]).render()
            }), b.memo("button.bold", function () {
                return d.button({
                    className: "note-btn-bold",
                    contents: d.icon(f.icons.bold),
                    tooltip: g.font.bold + i("bold"),
                    click: b.createInvokeHandlerAndUpdateState("editor.bold")
                }).render()
            }), b.memo("button.italic", function () {
                return d.button({
                    className: "note-btn-italic",
                    contents: d.icon(f.icons.italic),
                    tooltip: g.font.italic + i("italic"),
                    click: b.createInvokeHandlerAndUpdateState("editor.italic")
                }).render()
            }), b.memo("button.underline", function () {
                return d.button({
                    className: "note-btn-underline",
                    contents: d.icon(f.icons.underline),
                    tooltip: g.font.underline + i("underline"),
                    click: b.createInvokeHandlerAndUpdateState("editor.underline")
                }).render()
            }), b.memo("button.clear", function () {
                return d.button({
                    contents: d.icon(f.icons.eraser),
                    tooltip: g.font.clear + i("removeFormat"),
                    click: b.createInvokeHandler("editor.removeFormat")
                }).render()
            }), b.memo("button.strikethrough", function () {
                return d.button({
                    className: "note-btn-strikethrough",
                    contents: d.icon(f.icons.strikethrough),
                    tooltip: g.font.strikethrough + i("strikethrough"),
                    click: b.createInvokeHandlerAndUpdateState("editor.strikethrough")
                }).render()
            }), b.memo("button.superscript", function () {
                return d.button({
                    className: "note-btn-superscript",
                    contents: d.icon(f.icons.superscript),
                    tooltip: g.font.superscript,
                    click: b.createInvokeHandlerAndUpdateState("editor.superscript")
                }).render()
            }), b.memo("button.subscript", function () {
                return d.button({
                    className: "note-btn-subscript",
                    contents: d.icon(f.icons.subscript),
                    tooltip: g.font.subscript,
                    click: b.createInvokeHandlerAndUpdateState("editor.subscript")
                }).render()
            }), b.memo("button.fontname", function () {
                return d.buttonGroup([d.button({
                    className: "dropdown-toggle",
                    contents: d.dropdownButtonContents('<span class="note-current-fontname"/>', f),
                    tooltip: g.font.name,
                    data: {toggle: "dropdown"}
                }), d.dropdownCheck({
                    className: "dropdown-fontname",
                    checkClassName: f.icons.menuCheck,
                    items: f.fontNames.filter(c.isFontInstalled),
                    template: function (a) {
                        return '<span style="font-family:' + a + '">' + a + "</span>"
                    },
                    click: b.createInvokeHandlerAndUpdateState("editor.fontName")
                })]).render()
            }), b.memo("button.fontsize", function () {
                return d.buttonGroup([d.button({
                    className: "dropdown-toggle",
                    contents: d.dropdownButtonContents('<span class="note-current-fontsize"/>', f),
                    tooltip: g.font.size,
                    data: {toggle: "dropdown"}
                }), d.dropdownCheck({
                    className: "dropdown-fontsize",
                    checkClassName: f.icons.menuCheck,
                    items: f.fontSizes,
                    click: b.createInvokeHandlerAndUpdateState("editor.fontSize")
                })]).render()
            }), b.memo("button.color", function () {
                return d.buttonGroup({
                    className: "note-color",
                    children: [d.button({
                        className: "note-current-color-button",
                        contents: d.icon(f.icons.font + " note-recent-color"),
                        tooltip: g.color.recent,
                        click: function (c) {
                            var d = a(c.currentTarget);
                            b.invoke("editor.color", {
                                backColor: d.attr("data-backColor"),
                                foreColor: d.attr("data-foreColor")
                            })
                        },
                        callback: function (a) {
                            a.find(".note-recent-color").css("background-color", "#FFFF00"), a.attr("data-backColor", "#FFFF00")
                        }
                    }), d.button({
                        className: "dropdown-toggle",
                        contents: d.dropdownButtonContents("", f),
                        tooltip: g.color.more,
                        data: {toggle: "dropdown"}
                    }), d.dropdown({
                        items: ['<div class="note-palette">', '  <div class="note-palette-title">' + g.color.background + "</div>", "  <div>", '    <button type="button" class="note-color-reset btn btn-light" data-event="backColor" data-value="inherit">', g.color.transparent, "    </button>", "  </div>", '  <div class="note-holder" data-event="backColor"/>', "</div>", '<div class="note-palette">', '  <div class="note-palette-title">' + g.color.foreground + "</div>", "  <div>", '    <button type="button" class="note-color-reset btn btn-light" data-event="removeFormat" data-value="foreColor">', g.color.resetToDefault, "    </button>", "  </div>", '  <div class="note-holder" data-event="foreColor"/>', "</div>"].join(""),
                        callback: function (b) {
                            b.find(".note-holder").each(function () {
                                var b = a(this);
                                b.append(d.palette({
                                    colors: f.colors,
                                    eventName: b.data("event"),
                                    tooltip: f.tooltip
                                }).render())
                            })
                        },
                        click: function (c) {
                            var d = a(c.target), e = d.data("event"), f = d.data("value");
                            if (e && f) {
                                var g = "backColor" === e ? "background-color" : "color",
                                    h = d.closest(".note-color").find(".note-recent-color"),
                                    i = d.closest(".note-color").find(".note-current-color-button");
                                h.css(g, f), i.attr("data-" + e, f), b.invoke("editor." + e, f)
                            }
                        }
                    })]
                }).render()
            }), b.memo("button.ul", function () {
                return d.button({
                    contents: d.icon(f.icons.unorderedlist),
                    tooltip: g.lists.unordered + i("insertUnorderedList"),
                    click: b.createInvokeHandler("editor.insertUnorderedList")
                }).render()
            }), b.memo("button.ol", function () {
                return d.button({
                    contents: d.icon(f.icons.orderedlist),
                    tooltip: g.lists.ordered + i("insertOrderedList"),
                    click: b.createInvokeHandler("editor.insertOrderedList")
                }).render()
            });
            var e = d.button({
                contents: d.icon(f.icons.alignLeft),
                tooltip: g.paragraph.left + i("justifyLeft"),
                click: b.createInvokeHandler("editor.justifyLeft")
            }), h = d.button({
                contents: d.icon(f.icons.alignCenter),
                tooltip: g.paragraph.center + i("justifyCenter"),
                click: b.createInvokeHandler("editor.justifyCenter")
            }), j = d.button({
                contents: d.icon(f.icons.alignRight),
                tooltip: g.paragraph.right + i("justifyRight"),
                click: b.createInvokeHandler("editor.justifyRight")
            }), k = d.button({
                contents: d.icon(f.icons.alignJustify),
                tooltip: g.paragraph.justify + i("justifyFull"),
                click: b.createInvokeHandler("editor.justifyFull")
            }), m = d.button({
                contents: d.icon(f.icons.outdent),
                tooltip: g.paragraph.outdent + i("outdent"),
                click: b.createInvokeHandler("editor.outdent")
            }), n = d.button({
                contents: d.icon(f.icons.indent),
                tooltip: g.paragraph.indent + i("indent"),
                click: b.createInvokeHandler("editor.indent")
            });
            b.memo("button.justifyLeft", l.invoke(e, "render")), b.memo("button.justifyCenter", l.invoke(h, "render")), b.memo("button.justifyRight", l.invoke(j, "render")), b.memo("button.justifyFull", l.invoke(k, "render")), b.memo("button.outdent", l.invoke(m, "render")), b.memo("button.indent", l.invoke(n, "render")), b.memo("button.paragraph", function () {
                return d.buttonGroup([d.button({
                    className: "dropdown-toggle",
                    contents: d.dropdownButtonContents(d.icon(f.icons.alignLeft), f),
                    tooltip: g.paragraph.paragraph,
                    data: {toggle: "dropdown"}
                }), d.dropdown([d.buttonGroup({
                    className: "note-align",
                    children: [e, h, j, k]
                }), d.buttonGroup({className: "note-list", children: [m, n]})])]).render()
            }), b.memo("button.height", function () {
                return d.buttonGroup([d.button({
                    className: "dropdown-toggle",
                    contents: d.dropdownButtonContents(d.icon(f.icons.textHeight), f),
                    tooltip: g.font.height,
                    data: {toggle: "dropdown"}
                }), d.dropdownCheck({
                    items: f.lineHeights,
                    checkClassName: f.icons.menuCheck,
                    className: "dropdown-line-height",
                    click: b.createInvokeHandler("editor.lineHeight")
                })]).render()
            }), b.memo("button.table", function () {
                return d.buttonGroup([d.button({
                    className: "dropdown-toggle",
                    contents: d.dropdownButtonContents(d.icon(f.icons.table), f),
                    tooltip: g.table.table,
                    data: {toggle: "dropdown"}
                }), d.dropdown({
                    className: "note-table",
                    items: ['<div class="note-dimension-picker">', '  <div class="note-dimension-picker-mousecatcher" data-event="insertTable" data-value="1x1"/>', '  <div class="note-dimension-picker-highlighted"/>', '  <div class="note-dimension-picker-unhighlighted"/>', "</div>", '<div class="note-dimension-display">1 x 1</div>'].join("")
                })], {
                    callback: function (a) {
                        a.find(".note-dimension-picker-mousecatcher").css({
                            width: f.insertTableMaxSize.col + "em",
                            height: f.insertTableMaxSize.row + "em"
                        }).mousedown(b.createInvokeHandler("editor.insertTable")).on("mousemove", c.tableMoveHandler)
                    }
                }).render()
            }), b.memo("button.link", function () {
                return d.button({
                    contents: d.icon(f.icons.link),
                    tooltip: g.link.link + i("linkDialog.show"),
                    click: b.createInvokeHandler("linkDialog.show")
                }).render()
            }), b.memo("button.picture", function () {
                return d.button({
                    contents: d.icon(f.icons.picture),
                    tooltip: g.image.image,
                    click: b.createInvokeHandler("imageDialog.show")
                }).render()
            }), b.memo("button.video", function () {
                return d.button({
                    contents: d.icon(f.icons.video),
                    tooltip: g.video.video,
                    click: b.createInvokeHandler("videoDialog.show")
                }).render()
            }), b.memo("button.hr", function () {
                return d.button({
                    contents: d.icon(f.icons.minus),
                    tooltip: g.hr.insert + i("insertHorizontalRule"),
                    click: b.createInvokeHandler("editor.insertHorizontalRule")
                }).render()
            }), b.memo("button.fullscreen", function () {
                return d.button({
                    className: "btn-fullscreen",
                    contents: d.icon(f.icons.arrowsAlt),
                    tooltip: g.options.fullscreen,
                    click: b.createInvokeHandler("fullscreen.toggle")
                }).render()
            }), b.memo("button.codeview", function () {
                return d.button({
                    className: "btn-codeview",
                    contents: d.icon(f.icons.code),
                    tooltip: g.options.codeview,
                    click: b.createInvokeHandler("codeview.toggle")
                }).render()
            }), b.memo("button.redo", function () {
                return d.button({
                    contents: d.icon(f.icons.redo),
                    tooltip: g.history.redo + i("redo"),
                    click: b.createInvokeHandler("editor.redo")
                }).render()
            }), b.memo("button.undo", function () {
                return d.button({
                    contents: d.icon(f.icons.undo),
                    tooltip: g.history.undo + i("undo"),
                    click: b.createInvokeHandler("editor.undo")
                }).render()
            }), b.memo("button.help", function () {
                return d.button({
                    contents: d.icon(f.icons.question),
                    tooltip: g.options.help,
                    click: b.createInvokeHandler("helpDialog.show")
                }).render()
            })
        }, this.addImagePopoverButtons = function () {
            b.memo("button.imageSize100", function () {
                return d.button({
                    contents: '<span class="note-fontsize-10">100%</span>',
                    tooltip: g.image.resizeFull,
                    click: b.createInvokeHandler("editor.resize", "1")
                }).render()
            }), b.memo("button.imageSize50", function () {
                return d.button({
                    contents: '<span class="note-fontsize-10">50%</span>',
                    tooltip: g.image.resizeHalf,
                    click: b.createInvokeHandler("editor.resize", "0.5")
                }).render()
            }), b.memo("button.imageSize25", function () {
                return d.button({
                    contents: '<span class="note-fontsize-10">25%</span>',
                    tooltip: g.image.resizeQuarter,
                    click: b.createInvokeHandler("editor.resize", "0.25")
                }).render()
            }), b.memo("button.floatLeft", function () {
                return d.button({
                    contents: d.icon(f.icons.alignLeft),
                    tooltip: g.image.floatLeft,
                    click: b.createInvokeHandler("editor.floatMe", "left")
                }).render()
            }), b.memo("button.floatRight", function () {
                return d.button({
                    contents: d.icon(f.icons.alignRight),
                    tooltip: g.image.floatRight,
                    click: b.createInvokeHandler("editor.floatMe", "right")
                }).render()
            }), b.memo("button.floatNone", function () {
                return d.button({
                    contents: d.icon(f.icons.alignJustify),
                    tooltip: g.image.floatNone,
                    click: b.createInvokeHandler("editor.floatMe", "none")
                }).render()
            }), b.memo("button.removeMedia", function () {
                return d.button({
                    contents: d.icon(f.icons.trash),
                    tooltip: g.image.remove,
                    click: b.createInvokeHandler("editor.removeMedia")
                }).render()
            })
        }, this.addLinkPopoverButtons = function () {
            b.memo("button.linkDialogShow", function () {
                return d.button({
                    contents: d.icon(f.icons.link),
                    tooltip: g.link.edit,
                    click: b.createInvokeHandler("linkDialog.show")
                }).render()
            }), b.memo("button.unlink", function () {
                return d.button({
                    contents: d.icon(f.icons.unlink),
                    tooltip: g.link.unlink,
                    click: b.createInvokeHandler("editor.unlink")
                }).render()
            })
        }, this.addTablePopoverButtons = function () {
            b.memo("button.addRowUp", function () {
                return d.button({
                    className: "btn-md",
                    contents: d.icon(f.icons.rowAbove),
                    tooltip: g.table.addRowAbove,
                    click: b.createInvokeHandler("editor.addRow", "top")
                }).render()
            }), b.memo("button.addRowDown", function () {
                return d.button({
                    className: "btn-md",
                    contents: d.icon(f.icons.rowBelow),
                    tooltip: g.table.addRowBelow,
                    click: b.createInvokeHandler("editor.addRow", "bottom")
                }).render()
            }), b.memo("button.addColLeft", function () {
                return d.button({
                    className: "btn-md",
                    contents: d.icon(f.icons.colBefore),
                    tooltip: g.table.addColLeft,
                    click: b.createInvokeHandler("editor.addCol", "left")
                }).render()
            }), b.memo("button.addColRight", function () {
                return d.button({
                    className: "btn-md",
                    contents: d.icon(f.icons.colAfter),
                    tooltip: g.table.addColRight,
                    click: b.createInvokeHandler("editor.addCol", "right")
                }).render()
            }), b.memo("button.deleteRow", function () {
                return d.button({
                    className: "btn-md",
                    contents: d.icon(f.icons.rowRemove),
                    tooltip: g.table.delRow,
                    click: b.createInvokeHandler("editor.deleteRow")
                }).render()
            }), b.memo("button.deleteCol", function () {
                return d.button({
                    className: "btn-md",
                    contents: d.icon(f.icons.colRemove),
                    tooltip: g.table.delCol,
                    click: b.createInvokeHandler("editor.deleteCol")
                }).render()
            }), b.memo("button.deleteTable", function () {
                return d.button({
                    className: "btn-md",
                    contents: d.icon(f.icons.trash),
                    tooltip: g.table.delTable,
                    click: b.createInvokeHandler("editor.deleteTable")
                }).render()
            })
        }, this.build = function (a, c) {
            for (var e = 0, f = c.length; e < f; e++) {
                for (var g = c[e], h = g[0], i = g[1], j = d.buttonGroup({className: "note-" + h}).render(), k = 0, l = i.length; k < l; k++) {
                    var m = b.memo("button." + i[k]);
                    m && j.append("function" == typeof m ? m(b) : m)
                }
                j.appendTo(a)
            }
        }, this.updateCurrentStyle = function (d) {
            var f = d || e, g = b.invoke("editor.currentStyle");
            if (this.updateBtnStates(f, {
                    ".note-btn-bold": function () {
                        return "bold" === g["font-bold"]
                    }, ".note-btn-italic": function () {
                        return "italic" === g["font-italic"]
                    }, ".note-btn-underline": function () {
                        return "underline" === g["font-underline"]
                    }, ".note-btn-subscript": function () {
                        return "subscript" === g["font-subscript"]
                    }, ".note-btn-superscript": function () {
                        return "superscript" === g["font-superscript"]
                    }, ".note-btn-strikethrough": function () {
                        return "strikethrough" === g["font-strikethrough"]
                    }
                }), g["font-family"]) {
                var h = g["font-family"].split(",").map(function (a) {
                    return a.replace(/[\'\"]/g, "").replace(/\s+$/, "").replace(/^\s+/, "")
                }), i = m.find(h, c.isFontInstalled);
                f.find(".dropdown-fontname a").each(function () {
                    var b = a(this), c = b.data("value") + "" == i + "";
                    b.toggleClass("checked", c)
                }), f.find(".note-current-fontname").text(i)
            }
            if (g["font-size"]) {
                var j = g["font-size"];
                f.find(".dropdown-fontsize a").each(function () {
                    var b = a(this), c = b.data("value") + "" == j + "";
                    b.toggleClass("checked", c)
                }), f.find(".note-current-fontsize").text(j)
            }
            if (g["line-height"]) {
                var k = g["line-height"];
                f.find(".dropdown-line-height li a").each(function () {
                    var b = a(this).data("value") + "" == k + "";
                    this.className = b ? "checked" : ""
                })
            }
        }, this.updateBtnStates = function (b, c) {
            a.each(c, function (a, c) {
                d.toggleBtnActive(b.find(a), c())
            })
        }, this.tableMoveHandler = function (b) {
            var c, d = a(b.target.parentNode), e = d.next(), g = d.find(".note-dimension-picker-mousecatcher"),
                h = d.find(".note-dimension-picker-highlighted"), i = d.find(".note-dimension-picker-unhighlighted");
            if (void 0 === b.offsetX) {
                var j = a(b.target).offset();
                c = {x: b.pageX - j.left, y: b.pageY - j.top}
            } else c = {x: b.offsetX, y: b.offsetY};
            var k = {c: Math.ceil(c.x / 18) || 1, r: Math.ceil(c.y / 18) || 1};
            h.css({
                width: k.c + "em",
                height: k.r + "em"
            }), g.data("value", k.c + "x" + k.r), 3 < k.c && k.c < f.insertTableMaxSize.col && i.css({width: k.c + 1 + "em"}), 3 < k.r && k.r < f.insertTableMaxSize.row && i.css({height: k.r + 1 + "em"}), e.html(k.c + " x " + k.r)
        }
    }, da = function (b) {
        var c = a.summernote.ui, d = b.layoutInfo.note, e = b.layoutInfo.editor, f = b.layoutInfo.toolbar,
            g = b.options;
        this.shouldInitialize = function () {
            return !g.airMode
        }, this.initialize = function () {
            g.toolbar = g.toolbar || [], g.toolbar.length ? b.invoke("buttons.build", f, g.toolbar) : f.hide(), g.toolbarContainer && f.appendTo(g.toolbarContainer), this.changeContainer(!1), d.on("summernote.keyup summernote.mouseup summernote.change", function () {
                b.invoke("buttons.updateCurrentStyle")
            }), b.invoke("buttons.updateCurrentStyle")
        }, this.destroy = function () {
            f.children().remove()
        }, this.changeContainer = function (a) {
            a ? f.prependTo(e) : g.toolbarContainer && f.appendTo(g.toolbarContainer)
        }, this.updateFullscreen = function (a) {
            c.toggleBtnActive(f.find(".btn-fullscreen"), a), this.changeContainer(a)
        }, this.updateCodeview = function (a) {
            c.toggleBtnActive(f.find(".btn-codeview"), a), a ? this.deactivate() : this.activate()
        }, this.activate = function (a) {
            var b = f.find("button");
            a || (b = b.not(".btn-codeview")), c.toggleBtn(b, !0)
        }, this.deactivate = function (a) {
            var b = f.find("button");
            a || (b = b.not(".btn-codeview")), c.toggleBtn(b, !1)
        }
    }, ea = function (b) {
        var c = this, d = a.summernote.ui, e = b.layoutInfo.editor, f = b.options, g = f.langInfo;
        this.initialize = function () {
            var b = f.dialogsInBody ? a(document.body) : e,
                c = '<div class="form-group note-form-group"><label class="note-form-label">' + g.link.textToDisplay + '</label><input class="note-link-text form-control  note-form-control  note-input" type="text" /></div><div class="form-group note-form-group"><label class="note-form-label">' + g.link.url + '</label><input class="note-link-url form-control note-form-control note-input" type="text" value="http://" /></div>' + (f.disableLinkTarget ? "" : a("<div/>").append(d.checkbox({
                    id: "sn-checkbox-open-in-new-window",
                    text: g.link.openInNewWindow,
                    checked: !0
                }).render()).html()),
                h = '<button href="#" class="btn btn-primary note-btn note-btn-primary note-link-btn disabled" disabled>' + g.link.insert + "</button>";
            this.$dialog = d.dialog({
                className: "link-dialog",
                title: g.link.insert,
                fade: f.dialogsFade,
                body: c,
                footer: h
            }).render().appendTo(b)
        }, this.destroy = function () {
            d.hideDialog(this.$dialog), this.$dialog.remove()
        }, this.bindEnterKey = function (a, b) {
            a.on("keypress", function (a) {
                a.keyCode === K.code.ENTER && b.trigger("click")
            })
        }, this.toggleLinkBtn = function (a, b, c) {
            d.toggleBtn(a, b.val() && c.val())
        }, this.showLinkDialog = function (e) {
            return a.Deferred(function (a) {
                var f = c.$dialog.find(".note-link-text"), g = c.$dialog.find(".note-link-url"),
                    h = c.$dialog.find(".note-link-btn"), i = c.$dialog.find("input[type=checkbox]");
                d.onDialogShown(c.$dialog, function () {
                    b.triggerEvent("dialog.shown"), e.url || (e.url = e.text), f.val(e.text);
                    var j = function () {
                        c.toggleLinkBtn(h, f, g), e.text = f.val()
                    };
                    f.on("input", j).on("paste", function () {
                        setTimeout(j, 0)
                    });
                    var k = function () {
                        c.toggleLinkBtn(h, f, g), e.text || f.val(g.val())
                    };
                    g.on("input", k).on("paste", function () {
                        setTimeout(k, 0)
                    }).val(e.url).trigger("focus"), c.toggleLinkBtn(h, f, g), c.bindEnterKey(g, h), c.bindEnterKey(f, h);
                    var l = void 0 !== e.isNewWindow ? e.isNewWindow : b.options.linkTargetBlank;
                    i.prop("checked", l), h.one("click", function (b) {
                        b.preventDefault(), a.resolve({
                            range: e.range,
                            url: g.val(),
                            text: f.val(),
                            isNewWindow: i.is(":checked")
                        }), d.hideDialog(c.$dialog)
                    })
                }), d.onDialogHidden(c.$dialog, function () {
                    f.off("input paste keypress"), g.off("input paste keypress"), h.off("click"), "pending" === a.state() && a.reject()
                }), d.showDialog(c.$dialog)
            }).promise()
        }, this.show = function () {
            var a = b.invoke("editor.getLinkInfo");
            b.invoke("editor.saveRange"), this.showLinkDialog(a).then(function (a) {
                b.invoke("editor.restoreRange"), b.invoke("editor.createLink", a)
            }).fail(function () {
                b.invoke("editor.restoreRange")
            })
        }, b.memo("help.linkDialog.show", f.langInfo.help["linkDialog.show"])
    }, fa = function (b) {
        var c = this, d = a.summernote.ui, e = b.options;
        this.events = {
            "summernote.keyup summernote.mouseup summernote.change summernote.scroll": function () {
                c.update()
            }, "summernote.disable summernote.dialog.shown": function () {
                c.hide()
            }
        }, this.shouldInitialize = function () {
            return !m.isEmpty(e.popover.link)
        }, this.initialize = function () {
            this.$popover = d.popover({
                className: "note-link-popover", callback: function (a) {
                    a.find(".popover-content,.note-popover-content").prepend('<span><a target="_blank"></a>&nbsp;</span>')
                }
            }).render().appendTo("body");
            var a = this.$popover.find(".popover-content,.note-popover-content");
            b.invoke("buttons.build", a, e.popover.link)
        }, this.destroy = function () {
            this.$popover.remove()
        }, this.update = function () {
            if (!b.invoke("editor.hasFocus")) return void this.hide();
            var c = b.invoke("editor.createRange");
            if (c.isCollapsed() && c.isOnAnchor()) {
                var d = o.ancestor(c.sc, o.isAnchor), e = a(d).attr("href");
                this.$popover.find("a").attr("href", e).html(e);
                var f = o.posFromPlaceholder(d);
                this.$popover.css({display: "block", left: f.left, top: f.top})
            } else this.hide()
        }, this.hide = function () {
            this.$popover.hide()
        }
    }, ga = function (b) {
        var c = this, d = a.summernote.ui, e = b.layoutInfo.editor, f = b.options, g = f.langInfo;
        this.initialize = function () {
            var b = f.dialogsInBody ? a(document.body) : e, c = "";
            if (f.maximumImageFileSize) {
                var h = Math.floor(Math.log(f.maximumImageFileSize) / Math.log(1024)),
                    i = 1 * (f.maximumImageFileSize / Math.pow(1024, h)).toFixed(2) + " " + " KMGTP"[h] + "B";
                c = "<small>" + g.image.maximumFileSize + " : " + i + "</small>"
            }
            var j = '<div class="form-group note-form-group note-group-select-from-files"><label class="note-form-label">' + g.image.selectFromFiles + '</label><input class="note-image-input form-control note-form-control note-input"  type="file" name="files" accept="image/*" multiple="multiple" />' + c + '</div><div class="form-group note-group-image-url" style="overflow:auto;"><label class="note-form-label">' + g.image.url + '</label><input class="note-image-url form-control note-form-control note-input  col-md-12" type="text" /></div>',
                k = '<button href="#" class="btn btn-primary note-btn note-btn-primary note-image-btn disabled" disabled>' + g.image.insert + "</button>";
            this.$dialog = d.dialog({
                title: g.image.insert,
                fade: f.dialogsFade,
                body: j,
                footer: k
            }).render().appendTo(b)
        }, this.destroy = function () {
            d.hideDialog(this.$dialog), this.$dialog.remove()
        }, this.bindEnterKey = function (a, b) {
            a.on("keypress", function (a) {
                a.keyCode === K.code.ENTER && b.trigger("click")
            })
        }, this.show = function () {
            b.invoke("editor.saveRange"), this.showImageDialog().then(function (a) {
                d.hideDialog(c.$dialog), b.invoke("editor.restoreRange"), "string" == typeof a ? b.invoke("editor.insertImage", a) : b.invoke("editor.insertImagesOrCallback", a)
            }).fail(function () {
                b.invoke("editor.restoreRange")
            })
        }, this.showImageDialog = function () {
            return a.Deferred(function (a) {
                var e = c.$dialog.find(".note-image-input"), f = c.$dialog.find(".note-image-url"),
                    g = c.$dialog.find(".note-image-btn");
                d.onDialogShown(c.$dialog, function () {
                    b.triggerEvent("dialog.shown"), e.replaceWith(e.clone().on("change", function () {
                        a.resolve(this.files || this.value)
                    }).val("")), g.click(function (b) {
                        b.preventDefault(), a.resolve(f.val())
                    }), f.on("keyup paste", function () {
                        var a = f.val();
                        d.toggleBtn(g, a)
                    }).val("").trigger("focus"), c.bindEnterKey(f, g)
                }), d.onDialogHidden(c.$dialog, function () {
                    e.off("change"), f.off("keyup paste keypress"), g.off("click"), "pending" === a.state() && a.reject()
                }), d.showDialog(c.$dialog)
            })
        }
    }, ha = function (b) {
        var c = this, d = a.summernote.ui, e = b.layoutInfo.editable, f = e[0], g = b.options;
        this.events = {
            "summernote.disable": function () {
                c.hide()
            }
        }, this.shouldInitialize = function () {
            return !m.isEmpty(g.popover.image)
        }, this.initialize = function () {
            this.$popover = d.popover({className: "note-image-popover"}).render().appendTo("body");
            var a = this.$popover.find(".popover-content,.note-popover-content");
            b.invoke("buttons.build", a, g.popover.image)
        }, this.destroy = function () {
            this.$popover.remove()
        }, this.update = function (a) {
            if (o.isImg(a)) {
                var b = o.posFromPlaceholder(a), c = o.posFromPlaceholder(f);
                this.$popover.css({display: "block", left: b.left, top: Math.min(b.top, c.top)})
            } else this.hide()
        }, this.hide = function () {
            this.$popover.hide()
        }
    }, ia = function (b) {
        var c = this, d = a.summernote.ui, e = b.options;
        this.events = {
            "summernote.mousedown": function (a, b) {
                c.update(b.target)
            }, "summernote.keyup summernote.scroll summernote.change": function () {
                c.update()
            }, "summernote.disable": function () {
                c.hide()
            }
        }, this.shouldInitialize = function () {
            return !m.isEmpty(e.popover.table)
        }, this.initialize = function () {
            this.$popover = d.popover({className: "note-table-popover"}).render().appendTo("body");
            var a = this.$popover.find(".popover-content,.note-popover-content");
            b.invoke("buttons.build", a, e.popover.table), k.isFF && document.execCommand("enableInlineTableEditing", !1, !1)
        }, this.destroy = function () {
            this.$popover.remove()
        }, this.update = function (a) {
            if (b.isDisabled()) return !1;
            var c = o.isCell(a);
            if (c) {
                var d = o.posFromPlaceholder(a);
                this.$popover.css({display: "block", left: d.left, top: d.top})
            } else this.hide();
            return c
        }, this.hide = function () {
            this.$popover.hide()
        }
    }, ja = function (b) {
        var c = this, d = a.summernote.ui, e = b.layoutInfo.editor, f = b.options, g = f.langInfo;
        this.initialize = function () {
            var b = f.dialogsInBody ? a(document.body) : e,
                c = '<div class="form-group note-form-group row-fluid"><label class="note-form-label">' + g.video.url + ' <small class="text-muted">' + g.video.providers + '</small></label><input class="note-video-url form-control  note-form-control note-input span12"  type="text" /></div>',
                h = '<button href="#" class="btn btn-primary note-btn note-btn-primary  note-video-btn disabled" disabled>' + g.video.insert + "</button>";
            this.$dialog = d.dialog({
                title: g.video.insert,
                fade: f.dialogsFade,
                body: c,
                footer: h
            }).render().appendTo(b)
        }, this.destroy = function () {
            d.hideDialog(this.$dialog), this.$dialog.remove()
        }, this.bindEnterKey = function (a, b) {
            a.on("keypress", function (a) {
                a.keyCode === K.code.ENTER && b.trigger("click")
            })
        }, this.createVideoNode = function (b) {
            var c,
                d = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/,
                e = b.match(d), f = /(?:www\.|\/\/)instagram\.com\/p\/(.[a-zA-Z0-9_-]*)/, g = b.match(f),
                h = /\/\/vine\.co\/v\/([a-zA-Z0-9]+)/, i = b.match(h),
                j = /\/\/(player\.)?vimeo\.com\/([a-z]*\/)*(\d+)[?]?.*/, k = b.match(j),
                l = /.+dailymotion.com\/(video|hub)\/([^_]+)[^#]*(#video=([^_&]+))?/, m = b.match(l),
                n = /\/\/v\.youku\.com\/v_show\/id_(\w+)=*\.html/, o = b.match(n), p = /\/\/v\.qq\.com.*?vid=(.+)/,
                q = b.match(p), r = /\/\/v\.qq\.com\/x?\/?(page|cover).*?\/([^\/]+)\.html\??.*/, s = b.match(r),
                t = /^.+.(mp4|m4v)$/, u = b.match(t), v = /^.+.(ogg|ogv)$/, w = b.match(v), x = /^.+.(webm)$/,
                y = b.match(x);
            if (e && 11 === e[1].length) {
                var z = e[1];
                c = a("<iframe>").attr("frameborder", 0).attr("src", "//www.youtube.com/embed/" + z).attr("width", "640").attr("height", "360")
            } else if (g && g[0].length) c = a("<iframe>").attr("frameborder", 0).attr("src", "https://instagram.com/p/" + g[1] + "/embed/").attr("width", "612").attr("height", "710").attr("scrolling", "no").attr("allowtransparency", "true"); else if (i && i[0].length) c = a("<iframe>").attr("frameborder", 0).attr("src", i[0] + "/embed/simple").attr("width", "600").attr("height", "600").attr("class", "vine-embed"); else if (k && k[3].length) c = a("<iframe webkitallowfullscreen mozallowfullscreen allowfullscreen>").attr("frameborder", 0).attr("src", "//player.vimeo.com/video/" + k[3]).attr("width", "640").attr("height", "360"); else if (m && m[2].length) c = a("<iframe>").attr("frameborder", 0).attr("src", "//www.dailymotion.com/embed/video/" + m[2]).attr("width", "640").attr("height", "360"); else if (o && o[1].length) c = a("<iframe webkitallowfullscreen mozallowfullscreen allowfullscreen>").attr("frameborder", 0).attr("height", "498").attr("width", "510").attr("src", "//player.youku.com/embed/" + o[1]); else if (q && q[1].length || s && s[2].length) {
                var A = q && q[1].length ? q[1] : s[2];
                c = a("<iframe webkitallowfullscreen mozallowfullscreen allowfullscreen>").attr("frameborder", 0).attr("height", "310").attr("width", "500").attr("src", "http://v.qq.com/iframe/player.html?vid=" + A + "&amp;auto=0")
            } else {
                if (!(u || w || y)) return !1;
                c = a("<video controls>").attr("src", b).attr("width", "640").attr("height", "360")
            }
            return c.addClass("note-video-clip"), c[0]
        }, this.show = function () {
            var a = b.invoke("editor.getSelectedText");
            b.invoke("editor.saveRange"), this.showVideoDialog(a).then(function (a) {
                d.hideDialog(c.$dialog), b.invoke("editor.restoreRange");
                var e = c.createVideoNode(a);
                e && b.invoke("editor.insertNode", e)
            }).fail(function () {
                b.invoke("editor.restoreRange")
            })
        }, this.showVideoDialog = function (e) {
            return a.Deferred(function (a) {
                var f = c.$dialog.find(".note-video-url"), g = c.$dialog.find(".note-video-btn");
                d.onDialogShown(c.$dialog, function () {
                    b.triggerEvent("dialog.shown"), f.val(e).on("input", function () {
                        d.toggleBtn(g, f.val())
                    }).trigger("focus"), g.click(function (b) {
                        b.preventDefault(), a.resolve(f.val())
                    }), c.bindEnterKey(f, g)
                }), d.onDialogHidden(c.$dialog, function () {
                    f.off("input"), g.off("click"), "pending" === a.state() && a.reject()
                }), d.showDialog(c.$dialog)
            })
        }
    }, ka = function (b) {
        var c = this, d = a.summernote.ui, e = b.layoutInfo.editor, f = b.options, g = f.langInfo;
        this.createShortCutList = function () {
            var c = f.keyMap[k.isMac ? "mac" : "pc"];
            return Object.keys(c).map(function (d) {
                var e = c[d], f = a('<div><div class="help-list-item"/></div>');
                return f.append(a("<label><kbd>" + d + "</kdb></label>").css({
                    width: 180,
                    "margin-right": 10
                })).append(a("<span/>").html(b.memo("help." + e) || e)), f.html()
            }).join("")
        }, this.initialize = function () {
            var b = f.dialogsInBody ? a(document.body) : e,
                c = ['<p class="text-center">', '<a href="http://summernote.org/" target="_blank">Summernote 0.8.8</a> · ', '<a href="https://github.com/summernote/summernote" target="_blank">Project</a> · ', '<a href="https://github.com/summernote/summernote/issues" target="_blank">Issues</a>', "</p>"].join("");
            this.$dialog = d.dialog({
                title: g.options.help,
                fade: f.dialogsFade,
                body: this.createShortCutList(),
                footer: c,
                callback: function (a) {
                    a.find(".modal-body,.note-modal-body").css({"max-height": 300, overflow: "scroll"})
                }
            }).render().appendTo(b)
        }, this.destroy = function () {
            d.hideDialog(this.$dialog), this.$dialog.remove()
        }, this.showHelpDialog = function () {
            return a.Deferred(function (a) {
                d.onDialogShown(c.$dialog, function () {
                    b.triggerEvent("dialog.shown"), a.resolve()
                }), d.showDialog(c.$dialog)
            }).promise()
        }, this.show = function () {
            b.invoke("editor.saveRange"), this.showHelpDialog().then(function () {
                b.invoke("editor.restoreRange")
            })
        }
    }, la = function (b) {
        var c = this, d = a.summernote.ui, e = b.options;
        this.events = {
            "summernote.keyup summernote.mouseup summernote.scroll": function () {
                c.update()
            }, "summernote.disable summernote.change summernote.dialog.shown": function () {
                c.hide()
            }, "summernote.focusout": function (a, b) {
                k.isFF || b.relatedTarget && o.ancestor(b.relatedTarget, l.eq(c.$popover[0])) || c.hide()
            }
        }, this.shouldInitialize = function () {
            return e.airMode && !m.isEmpty(e.popover.air)
        }, this.initialize = function () {
            this.$popover = d.popover({className: "note-air-popover"}).render().appendTo("body");
            var a = this.$popover.find(".popover-content");
            b.invoke("buttons.build", a, e.popover.air)
        }, this.destroy = function () {
            this.$popover.remove()
        }, this.update = function () {
            var a = b.invoke("editor.currentStyle");
            if (a.range && !a.range.isCollapsed()) {
                var c = m.last(a.range.getClientRects());
                if (c) {
                    var d = l.rect2bnd(c);
                    this.$popover.css({
                        display: "block",
                        left: Math.max(d.left + d.width / 2, 0) - 20,
                        top: d.top + d.height
                    }), b.invoke("buttons.updateCurrentStyle", this.$popover)
                }
            } else this.hide()
        }, this.hide = function () {
            this.$popover.hide()
        }
    }, ma = function (b) {
        var c = this, d = a.summernote.ui, e = b.options.hint || [], f = b.options.hintDirection || "bottom",
            g = a.isArray(e) ? e : [e];
        this.events = {
            "summernote.keyup": function (a, b) {
                b.isDefaultPrevented() || c.handleKeyup(b)
            }, "summernote.keydown": function (a, b) {
                c.handleKeydown(b)
            }, "summernote.disable summernote.dialog.shown": function () {
                c.hide()
            }
        }, this.shouldInitialize = function () {
            return g.length > 0
        }, this.initialize = function () {
            this.lastWordRange = null, this.$popover = d.popover({
                className: "note-hint-popover",
                hideArrow: !0,
                direction: ""
            }).render().appendTo("body"), this.$popover.hide(), this.$content = this.$popover.find(".popover-content,.note-popover-content"), this.$content.on("click", ".note-hint-item", function () {
                c.$content.find(".active").removeClass("active"), a(this).addClass("active"), c.replace()
            })
        }, this.destroy = function () {
            this.$popover.remove()
        }, this.selectItem = function (a) {
            this.$content.find(".active").removeClass("active"), a.addClass("active"), this.$content[0].scrollTop = a[0].offsetTop - this.$content.innerHeight() / 2
        }, this.moveDown = function () {
            var a = this.$content.find(".note-hint-item.active"), b = a.next();
            if (b.length) this.selectItem(b); else {
                var c = a.parent().next();
                c.length || (c = this.$content.find(".note-hint-group").first()), this.selectItem(c.find(".note-hint-item").first())
            }
        }, this.moveUp = function () {
            var a = this.$content.find(".note-hint-item.active"), b = a.prev();
            if (b.length) this.selectItem(b); else {
                var c = a.parent().prev();
                c.length || (c = this.$content.find(".note-hint-group").last()), this.selectItem(c.find(".note-hint-item").last())
            }
        }, this.replace = function () {
            var a = this.$content.find(".note-hint-item.active");
            if (a.length) {
                var c = this.nodeFromItem(a);
                this.lastWordRange.insertNode(c), L.createFromNode(c).collapse().select(), this.lastWordRange = null, this.hide(), b.triggerEvent("change", b.layoutInfo.editable.html(), b.layoutInfo.editable), b.invoke("editor.focus")
            }
        }, this.nodeFromItem = function (a) {
            var b = g[a.data("index")], c = a.data("item"), d = b.content ? b.content(c) : c;
            return "string" == typeof d && (d = o.createText(d)), d
        },
            this.createItemTemplates = function (b, c) {
                var d = g[b];
                return c.map(function (c, e) {
                    var f = a('<div class="note-hint-item"/>');
                    return f.append(d.template ? d.template(c) : c + ""), f.data({
                        index: b,
                        item: c
                    }), 0 === b && 0 === e && f.addClass("active"), f
                })
            }, this.handleKeydown = function (a) {
            this.$popover.is(":visible") && (a.keyCode === K.code.ENTER ? (a.preventDefault(), this.replace()) : a.keyCode === K.code.UP ? (a.preventDefault(), this.moveUp()) : a.keyCode === K.code.DOWN && (a.preventDefault(), this.moveDown()))
        }, this.searchKeyword = function (a, b, c) {
            var d = g[a];
            if (d && d.match.test(b) && d.search) {
                var e = d.match.exec(b);
                d.search(e[1], c)
            } else c()
        }, this.createGroup = function (b, d) {
            var e = a('<div class="note-hint-group note-hint-group-' + b + '"/>');
            return this.searchKeyword(b, d, function (a) {
                a = a || [], a.length && (e.html(c.createItemTemplates(b, a)), c.show())
            }), e
        }, this.handleKeyup = function (a) {
            if (m.contains([K.code.ENTER, K.code.UP, K.code.DOWN], a.keyCode)) {
                if (a.keyCode === K.code.ENTER && this.$popover.is(":visible")) return
            } else {
                var d = b.invoke("editor.createRange").getWordRange(), e = d.toString();
                if (g.length && e) {
                    this.$content.empty();
                    var h = l.rect2bnd(m.last(d.getClientRects()));
                    h && (this.$popover.hide(), this.lastWordRange = d, g.forEach(function (a, b) {
                        a.match.test(e) && c.createGroup(b, e).appendTo(c.$content)
                    }), "top" === f ? this.$popover.css({
                        left: h.left,
                        top: h.top - this.$popover.outerHeight() - 5
                    }) : this.$popover.css({left: h.left, top: h.top + h.height + 5}))
                } else this.hide()
            }
        }, this.show = function () {
            this.$popover.show()
        }, this.hide = function () {
            this.$popover.hide()
        }
    };
    a.summernote = a.extend(a.summernote, {
        version: "0.8.8",
        ui: J,
        dom: o,
        plugins: {},
        options: {
            modules: {
                editor: U,
                clipboard: V,
                dropzone: W,
                codeview: X,
                statusbar: Y,
                fullscreen: Z,
                handle: $,
                hintPopover: ma,
                autoLink: _,
                autoSync: aa,
                placeholder: ba,
                buttons: ca,
                toolbar: da,
                linkDialog: ea,
                linkPopover: fa,
                imageDialog: ga,
                imagePopover: ha,
                tablePopover: ia,
                videoDialog: ja,
                helpDialog: ka,
                airPopover: la
            },
            buttons: {},
            lang: "en-US",
            toolbar: [["style", ["style"]], ["font", ["bold", "underline", "clear"]], ["fontname", ["fontname"]], ["color", ["color"]], ["para", ["ul", "ol", "paragraph"]], ["table", ["table"]], ["insert", ["link", "picture", "video"]], ["view", ["fullscreen", "codeview", "help"]]],
            popover: {
                image: [["imagesize", ["imageSize100", "imageSize50", "imageSize25"]], ["float", ["floatLeft", "floatRight", "floatNone"]], ["remove", ["removeMedia"]]],
                link: [["link", ["linkDialogShow", "unlink"]]],
                table: [["add", ["addRowDown", "addRowUp", "addColLeft", "addColRight"]], ["delete", ["deleteRow", "deleteCol", "deleteTable"]]],
                air: [["color", ["color"]], ["font", ["bold", "underline", "clear"]], ["para", ["ul", "paragraph"]], ["table", ["table"]], ["insert", ["link", "picture"]]]
            },
            airMode: !1,
            width: null,
            height: null,
            linkTargetBlank: !0,
            focus: !1,
            tabSize: 4,
            styleWithSpan: !0,
            shortcuts: !0,
            textareaAutoSync: !0,
            direction: null,
            tooltip: "auto",
            styleTags: ["p", "blockquote", "pre", "h1", "h2", "h3", "h4", "h5", "h6"],
            fontNames: ["Arial", "Arial Black", "Comic Sans MS", "Courier New", "Helvetica Neue", "Helvetica", "Impact", "Lucida Grande", "Tahoma", "Times New Roman", "Verdana"],
            fontSizes: ["8", "9", "10", "11", "12", "14", "18", "24", "36"],
            colors: [["#000000", "#424242", "#636363", "#9C9C94", "#CEC6CE", "#EFEFEF", "#F7F7F7", "#FFFFFF"], ["#FF0000", "#FF9C00", "#FFFF00", "#00FF00", "#00FFFF", "#0000FF", "#9C00FF", "#FF00FF"], ["#F7C6CE", "#FFE7CE", "#FFEFC6", "#D6EFD6", "#CEDEE7", "#CEE7F7", "#D6D6E7", "#E7D6DE"], ["#E79C9C", "#FFC69C", "#FFE79C", "#B5D6A5", "#A5C6CE", "#9CC6EF", "#B5A5D6", "#D6A5BD"], ["#E76363", "#F7AD6B", "#FFD663", "#94BD7B", "#73A5AD", "#6BADDE", "#8C7BC6", "#C67BA5"], ["#CE0000", "#E79439", "#EFC631", "#6BA54A", "#4A7B8C", "#3984C6", "#634AA5", "#A54A7B"], ["#9C0000", "#B56308", "#BD9400", "#397B21", "#104A5A", "#085294", "#311873", "#731842"], ["#630000", "#7B3900", "#846300", "#295218", "#083139", "#003163", "#21104A", "#4A1031"]],
            lineHeights: ["1.0", "1.2", "1.4", "1.5", "1.6", "1.8", "2.0", "3.0"],
            tableClassName: "table table-bordered",
            insertTableMaxSize: {col: 10, row: 10},
            dialogsInBody: !1,
            dialogsFade: !1,
            maximumImageFileSize: null,
            callbacks: {
                onInit: null,
                onFocus: null,
                onBlur: null,
                onEnter: null,
                onKeyup: null,
                onKeydown: null,
                onImageUpload: null,
                onImageUploadError: null
            },
            codemirror: {mode: "text/html", htmlMode: !0, lineNumbers: !0},
            keyMap: {
                pc: {
                    ENTER: "insertParagraph",
                    "CTRL+Z": "undo",
                    "CTRL+Y": "redo",
                    TAB: "tab",
                    "SHIFT+TAB": "untab",
                    "CTRL+B": "bold",
                    "CTRL+I": "italic",
                    "CTRL+U": "underline",
                    "CTRL+SHIFT+S": "strikethrough",
                    "CTRL+BACKSLASH": "removeFormat",
                    "CTRL+SHIFT+L": "justifyLeft",
                    "CTRL+SHIFT+E": "justifyCenter",
                    "CTRL+SHIFT+R": "justifyRight",
                    "CTRL+SHIFT+J": "justifyFull",
                    "CTRL+SHIFT+NUM7": "insertUnorderedList",
                    "CTRL+SHIFT+NUM8": "insertOrderedList",
                    "CTRL+LEFTBRACKET": "outdent",
                    "CTRL+RIGHTBRACKET": "indent",
                    "CTRL+NUM0": "formatPara",
                    "CTRL+NUM1": "formatH1",
                    "CTRL+NUM2": "formatH2",
                    "CTRL+NUM3": "formatH3",
                    "CTRL+NUM4": "formatH4",
                    "CTRL+NUM5": "formatH5",
                    "CTRL+NUM6": "formatH6",
                    "CTRL+ENTER": "insertHorizontalRule",
                    "CTRL+K": "linkDialog.show"
                },
                mac: {
                    ENTER: "insertParagraph",
                    "CMD+Z": "undo",
                    "CMD+SHIFT+Z": "redo",
                    TAB: "tab",
                    "SHIFT+TAB": "untab",
                    "CMD+B": "bold",
                    "CMD+I": "italic",
                    "CMD+U": "underline",
                    "CMD+SHIFT+S": "strikethrough",
                    "CMD+BACKSLASH": "removeFormat",
                    "CMD+SHIFT+L": "justifyLeft",
                    "CMD+SHIFT+E": "justifyCenter",
                    "CMD+SHIFT+R": "justifyRight",
                    "CMD+SHIFT+J": "justifyFull",
                    "CMD+SHIFT+NUM7": "insertUnorderedList",
                    "CMD+SHIFT+NUM8": "insertOrderedList",
                    "CMD+LEFTBRACKET": "outdent",
                    "CMD+RIGHTBRACKET": "indent",
                    "CMD+NUM0": "formatPara",
                    "CMD+NUM1": "formatH1",
                    "CMD+NUM2": "formatH2",
                    "CMD+NUM3": "formatH3",
                    "CMD+NUM4": "formatH4",
                    "CMD+NUM5": "formatH5",
                    "CMD+NUM6": "formatH6",
                    "CMD+ENTER": "insertHorizontalRule",
                    "CMD+K": "linkDialog.show"
                }
            },
            icons: {
                align: "note-icon-align",
                alignCenter: "note-icon-align-center",
                alignJustify: "note-icon-align-justify",
                alignLeft: "note-icon-align-left",
                alignRight: "note-icon-align-right",
                rowBelow: "note-icon-row-below",
                colBefore: "note-icon-col-before",
                colAfter: "note-icon-col-after",
                rowAbove: "note-icon-row-above",
                rowRemove: "note-icon-row-remove",
                colRemove: "note-icon-col-remove",
                indent: "note-icon-align-indent",
                outdent: "note-icon-align-outdent",
                arrowsAlt: "note-icon-arrows-alt",
                bold: "note-icon-bold",
                caret: "note-icon-caret",
                circle: "note-icon-circle",
                close: "note-icon-close",
                code: "note-icon-code",
                eraser: "note-icon-eraser",
                font: "note-icon-font",
                frame: "note-icon-frame",
                italic: "note-icon-italic",
                link: "note-icon-link",
                unlink: "note-icon-chain-broken",
                magic: "note-icon-magic",
                menuCheck: "note-icon-menu-check",
                minus: "note-icon-minus",
                orderedlist: "note-icon-orderedlist",
                pencil: "note-icon-pencil",
                picture: "note-icon-picture",
                question: "note-icon-question",
                redo: "note-icon-redo",
                square: "note-icon-square",
                strikethrough: "note-icon-strikethrough",
                subscript: "note-icon-subscript",
                superscript: "note-icon-superscript",
                table: "note-icon-table",
                textHeight: "note-icon-text-height",
                trash: "note-icon-trash",
                underline: "note-icon-underline",
                undo: "note-icon-undo",
                unorderedlist: "note-icon-unorderedlist",
                video: "note-icon-video"
            }
        }
    })
});