/*! jQuery v2.1.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function (a, b) {
	"object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function (a) {
		if (!a.document)throw new Error("jQuery requires a window with a document");
		return b(a)
	} : b(a)
}("undefined" != typeof window ? window : this, function (a, b) {
	var c = [], d = c.slice, e = c.concat, f = c.push, g = c.indexOf, h = {}, i = h.toString, j = h.hasOwnProperty, k = {}, l = a.document, m = "2.1.1", n = function (a, b) {
		return new n.fn.init(a, b)
	}, o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, p = /^-ms-/, q = /-([\da-z])/gi, r = function (a, b) {
		return b.toUpperCase()
	};
	n.fn = n.prototype = {jquery: m, constructor: n, selector: "", length: 0, toArray: function () {
		return d.call(this)
	}, get: function (a) {
		return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this)
	}, pushStack: function (a) {
		var b = n.merge(this.constructor(), a);
		return b.prevObject = this, b.context = this.context, b
	}, each: function (a, b) {
		return n.each(this, a, b)
	}, map: function (a) {
		return this.pushStack(n.map(this, function (b, c) {
			return a.call(b, c, b)
		}))
	}, slice: function () {
		return this.pushStack(d.apply(this, arguments))
	}, first: function () {
		return this.eq(0)
	}, last: function () {
		return this.eq(-1)
	}, eq: function (a) {
		var b = this.length, c = +a + (0 > a ? b : 0);
		return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
	}, end: function () {
		return this.prevObject || this.constructor(null)
	}, push: f, sort: c.sort, splice: c.splice}, n.extend = n.fn.extend = function () {
		var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1;
		for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)if (null != (a = arguments[h]))for (b in a)c = g[b], d = a[b], g !== d && (j && d && (n.isPlainObject(d) || (e = n.isArray(d))) ? (e ? (e = !1, f = c && n.isArray(c) ? c : []) : f = c && n.isPlainObject(c) ? c : {}, g[b] = n.extend(j, f, d)) : void 0 !== d && (g[b] = d));
		return g
	}, n.extend({expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (a) {
		throw new Error(a)
	}, noop: function () {
	}, isFunction: function (a) {
		return"function" === n.type(a)
	}, isArray: Array.isArray, isWindow: function (a) {
		return null != a && a === a.window
	}, isNumeric: function (a) {
		return!n.isArray(a) && a - parseFloat(a) >= 0
	}, isPlainObject: function (a) {
		return"object" !== n.type(a) || a.nodeType || n.isWindow(a) ? !1 : a.constructor && !j.call(a.constructor.prototype, "isPrototypeOf") ? !1 : !0
	}, isEmptyObject: function (a) {
		var b;
		for (b in a)return!1;
		return!0
	}, type: function (a) {
		return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a
	}, globalEval: function (a) {
		var b, c = eval;
		a = n.trim(a), a && (1 === a.indexOf("use strict") ? (b = l.createElement("script"), b.text = a, l.head.appendChild(b).parentNode.removeChild(b)) : c(a))
	}, camelCase: function (a) {
		return a.replace(p, "ms-").replace(q, r)
	}, nodeName: function (a, b) {
		return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
	}, each: function (a, b, c) {
		var d, e = 0, f = a.length, g = s(a);
		if (c) {
			if (g) {
				for (; f > e; e++)if (d = b.apply(a[e], c), d === !1)break
			} else for (e in a)if (d = b.apply(a[e], c), d === !1)break
		} else if (g) {
			for (; f > e; e++)if (d = b.call(a[e], e, a[e]), d === !1)break
		} else for (e in a)if (d = b.call(a[e], e, a[e]), d === !1)break;
		return a
	}, trim: function (a) {
		return null == a ? "" : (a + "").replace(o, "")
	}, makeArray: function (a, b) {
		var c = b || [];
		return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)), c
	}, inArray: function (a, b, c) {
		return null == b ? -1 : g.call(b, a, c)
	}, merge: function (a, b) {
		for (var c = +b.length, d = 0, e = a.length; c > d; d++)a[e++] = b[d];
		return a.length = e, a
	}, grep: function (a, b, c) {
		for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++)d = !b(a[f], f), d !== h && e.push(a[f]);
		return e
	}, map: function (a, b, c) {
		var d, f = 0, g = a.length, h = s(a), i = [];
		if (h)for (; g > f; f++)d = b(a[f], f, c), null != d && i.push(d); else for (f in a)d = b(a[f], f, c), null != d && i.push(d);
		return e.apply([], i)
	}, guid: 1, proxy: function (a, b) {
		var c, e, f;
		return"string" == typeof b && (c = a[b], b = a, a = c), n.isFunction(a) ? (e = d.call(arguments, 2), f = function () {
			return a.apply(b || this, e.concat(d.call(arguments)))
		}, f.guid = a.guid = a.guid || n.guid++, f) : void 0
	}, now: Date.now, support: k}), n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (a, b) {
		h["[object " + b + "]"] = b.toLowerCase()
	});
	function s(a) {
		var b = a.length, c = n.type(a);
		return"function" === c || n.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
	}

	var t = function (a) {
		var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + -new Date, v = a.document, w = 0, x = 0, y = gb(), z = gb(), A = gb(), B = function (a, b) {
			return a === b && (l = !0), 0
		}, C = "undefined", D = 1 << 31, E = {}.hasOwnProperty, F = [], G = F.pop, H = F.push, I = F.push, J = F.slice, K = F.indexOf || function (a) {
			for (var b = 0, c = this.length; c > b; b++)if (this[b] === a)return b;
			return-1
		}, L = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", M = "[\\x20\\t\\r\\n\\f]", N = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", O = N.replace("w", "w#"), P = "\\[" + M + "*(" + N + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + O + "))|)" + M + "*\\]", Q = ":(" + N + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + P + ")*)|.*)\\)|)", R = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"), S = new RegExp("^" + M + "*," + M + "*"), T = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"), U = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"), V = new RegExp(Q), W = new RegExp("^" + O + "$"), X = {ID: new RegExp("^#(" + N + ")"), CLASS: new RegExp("^\\.(" + N + ")"), TAG: new RegExp("^(" + N.replace("w", "w*") + ")"), ATTR: new RegExp("^" + P), PSEUDO: new RegExp("^" + Q), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"), bool: new RegExp("^(?:" + L + ")$", "i"), needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")}, Y = /^(?:input|select|textarea|button)$/i, Z = /^h\d$/i, $ = /^[^{]+\{\s*\[native \w/, _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ab = /[+~]/, bb = /'|\\/g, cb = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"), db = function (a, b, c) {
			var d = "0x" + b - 65536;
			return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
		};
		try {
			I.apply(F = J.call(v.childNodes), v.childNodes), F[v.childNodes.length].nodeType
		} catch (eb) {
			I = {apply: F.length ? function (a, b) {
				H.apply(a, J.call(b))
			} : function (a, b) {
				var c = a.length, d = 0;
				while (a[c++] = b[d++]);
				a.length = c - 1
			}}
		}
		function fb(a, b, d, e) {
			var f, h, j, k, l, o, r, s, w, x;
			if ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, d = d || [], !a || "string" != typeof a)return d;
			if (1 !== (k = b.nodeType) && 9 !== k)return[];
			if (p && !e) {
				if (f = _.exec(a))if (j = f[1]) {
					if (9 === k) {
						if (h = b.getElementById(j), !h || !h.parentNode)return d;
						if (h.id === j)return d.push(h), d
					} else if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j)return d.push(h), d
				} else {
					if (f[2])return I.apply(d, b.getElementsByTagName(a)), d;
					if ((j = f[3]) && c.getElementsByClassName && b.getElementsByClassName)return I.apply(d, b.getElementsByClassName(j)), d
				}
				if (c.qsa && (!q || !q.test(a))) {
					if (s = r = u, w = b, x = 9 === k && a, 1 === k && "object" !== b.nodeName.toLowerCase()) {
						o = g(a), (r = b.getAttribute("id")) ? s = r.replace(bb, "\\$&") : b.setAttribute("id", s), s = "[id='" + s + "'] ", l = o.length;
						while (l--)o[l] = s + qb(o[l]);
						w = ab.test(a) && ob(b.parentNode) || b, x = o.join(",")
					}
					if (x)try {
						return I.apply(d, w.querySelectorAll(x)), d
					} catch (y) {
					} finally {
						r || b.removeAttribute("id")
					}
				}
			}
			return i(a.replace(R, "$1"), b, d, e)
		}

		function gb() {
			var a = [];

			function b(c, e) {
				return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
			}

			return b
		}

		function hb(a) {
			return a[u] = !0, a
		}

		function ib(a) {
			var b = n.createElement("div");
			try {
				return!!a(b)
			} catch (c) {
				return!1
			} finally {
				b.parentNode && b.parentNode.removeChild(b), b = null
			}
		}

		function jb(a, b) {
			var c = a.split("|"), e = a.length;
			while (e--)d.attrHandle[c[e]] = b
		}

		function kb(a, b) {
			var c = b && a, d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || D) - (~a.sourceIndex || D);
			if (d)return d;
			if (c)while (c = c.nextSibling)if (c === b)return-1;
			return a ? 1 : -1
		}

		function lb(a) {
			return function (b) {
				var c = b.nodeName.toLowerCase();
				return"input" === c && b.type === a
			}
		}

		function mb(a) {
			return function (b) {
				var c = b.nodeName.toLowerCase();
				return("input" === c || "button" === c) && b.type === a
			}
		}

		function nb(a) {
			return hb(function (b) {
				return b = +b, hb(function (c, d) {
					var e, f = a([], c.length, b), g = f.length;
					while (g--)c[e = f[g]] && (c[e] = !(d[e] = c[e]))
				})
			})
		}

		function ob(a) {
			return a && typeof a.getElementsByTagName !== C && a
		}

		c = fb.support = {}, f = fb.isXML = function (a) {
			var b = a && (a.ownerDocument || a).documentElement;
			return b ? "HTML" !== b.nodeName : !1
		}, m = fb.setDocument = function (a) {
			var b, e = a ? a.ownerDocument || a : v, g = e.defaultView;
			return e !== n && 9 === e.nodeType && e.documentElement ? (n = e, o = e.documentElement, p = !f(e), g && g !== g.top && (g.addEventListener ? g.addEventListener("unload", function () {
				m()
			}, !1) : g.attachEvent && g.attachEvent("onunload", function () {
				m()
			})), c.attributes = ib(function (a) {
				return a.className = "i", !a.getAttribute("className")
			}), c.getElementsByTagName = ib(function (a) {
				return a.appendChild(e.createComment("")), !a.getElementsByTagName("*").length
			}), c.getElementsByClassName = $.test(e.getElementsByClassName) && ib(function (a) {
				return a.innerHTML = "<div class='a'></div><div class='a i'></div>", a.firstChild.className = "i", 2 === a.getElementsByClassName("i").length
			}), c.getById = ib(function (a) {
				return o.appendChild(a).id = u, !e.getElementsByName || !e.getElementsByName(u).length
			}), c.getById ? (d.find.ID = function (a, b) {
				if (typeof b.getElementById !== C && p) {
					var c = b.getElementById(a);
					return c && c.parentNode ? [c] : []
				}
			}, d.filter.ID = function (a) {
				var b = a.replace(cb, db);
				return function (a) {
					return a.getAttribute("id") === b
				}
			}) : (delete d.find.ID, d.filter.ID = function (a) {
				var b = a.replace(cb, db);
				return function (a) {
					var c = typeof a.getAttributeNode !== C && a.getAttributeNode("id");
					return c && c.value === b
				}
			}), d.find.TAG = c.getElementsByTagName ? function (a, b) {
				return typeof b.getElementsByTagName !== C ? b.getElementsByTagName(a) : void 0
			} : function (a, b) {
				var c, d = [], e = 0, f = b.getElementsByTagName(a);
				if ("*" === a) {
					while (c = f[e++])1 === c.nodeType && d.push(c);
					return d
				}
				return f
			}, d.find.CLASS = c.getElementsByClassName && function (a, b) {
				return typeof b.getElementsByClassName !== C && p ? b.getElementsByClassName(a) : void 0
			}, r = [], q = [], (c.qsa = $.test(e.querySelectorAll)) && (ib(function (a) {
				a.innerHTML = "<select msallowclip=''><option selected=''></option></select>", a.querySelectorAll("[msallowclip^='']").length && q.push("[*^$]=" + M + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + M + "*(?:value|" + L + ")"), a.querySelectorAll(":checked").length || q.push(":checked")
			}), ib(function (a) {
				var b = e.createElement("input");
				b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + M + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
			})), (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ib(function (a) {
				c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", Q)
			}), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = $.test(o.compareDocumentPosition), t = b || $.test(o.contains) ? function (a, b) {
				var c = 9 === a.nodeType ? a.documentElement : a, d = b && b.parentNode;
				return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
			} : function (a, b) {
				if (b)while (b = b.parentNode)if (b === a)return!0;
				return!1
			}, B = b ? function (a, b) {
				if (a === b)return l = !0, 0;
				var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
				return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === e || a.ownerDocument === v && t(v, a) ? -1 : b === e || b.ownerDocument === v && t(v, b) ? 1 : k ? K.call(k, a) - K.call(k, b) : 0 : 4 & d ? -1 : 1)
			} : function (a, b) {
				if (a === b)return l = !0, 0;
				var c, d = 0, f = a.parentNode, g = b.parentNode, h = [a], i = [b];
				if (!f || !g)return a === e ? -1 : b === e ? 1 : f ? -1 : g ? 1 : k ? K.call(k, a) - K.call(k, b) : 0;
				if (f === g)return kb(a, b);
				c = a;
				while (c = c.parentNode)h.unshift(c);
				c = b;
				while (c = c.parentNode)i.unshift(c);
				while (h[d] === i[d])d++;
				return d ? kb(h[d], i[d]) : h[d] === v ? -1 : i[d] === v ? 1 : 0
			}, e) : n
		}, fb.matches = function (a, b) {
			return fb(a, null, null, b)
		}, fb.matchesSelector = function (a, b) {
			if ((a.ownerDocument || a) !== n && m(a), b = b.replace(U, "='$1']"), !(!c.matchesSelector || !p || r && r.test(b) || q && q.test(b)))try {
				var d = s.call(a, b);
				if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType)return d
			} catch (e) {
			}
			return fb(b, n, null, [a]).length > 0
		}, fb.contains = function (a, b) {
			return(a.ownerDocument || a) !== n && m(a), t(a, b)
		}, fb.attr = function (a, b) {
			(a.ownerDocument || a) !== n && m(a);
			var e = d.attrHandle[b.toLowerCase()], f = e && E.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
			return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
		}, fb.error = function (a) {
			throw new Error("Syntax error, unrecognized expression: " + a)
		}, fb.uniqueSort = function (a) {
			var b, d = [], e = 0, f = 0;
			if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
				while (b = a[f++])b === a[f] && (e = d.push(f));
				while (e--)a.splice(d[e], 1)
			}
			return k = null, a
		}, e = fb.getText = function (a) {
			var b, c = "", d = 0, f = a.nodeType;
			if (f) {
				if (1 === f || 9 === f || 11 === f) {
					if ("string" == typeof a.textContent)return a.textContent;
					for (a = a.firstChild; a; a = a.nextSibling)c += e(a)
				} else if (3 === f || 4 === f)return a.nodeValue
			} else while (b = a[d++])c += e(b);
			return c
		}, d = fb.selectors = {cacheLength: 50, createPseudo: hb, match: X, attrHandle: {}, find: {}, relative: {">": {dir: "parentNode", first: !0}, " ": {dir: "parentNode"}, "+": {dir: "previousSibling", first: !0}, "~": {dir: "previousSibling"}}, preFilter: {ATTR: function (a) {
			return a[1] = a[1].replace(cb, db), a[3] = (a[3] || a[4] || a[5] || "").replace(cb, db), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
		}, CHILD: function (a) {
			return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || fb.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && fb.error(a[0]), a
		}, PSEUDO: function (a) {
			var b, c = !a[6] && a[2];
			return X.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
		}}, filter: {TAG: function (a) {
			var b = a.replace(cb, db).toLowerCase();
			return"*" === a ? function () {
				return!0
			} : function (a) {
				return a.nodeName && a.nodeName.toLowerCase() === b
			}
		}, CLASS: function (a) {
			var b = y[a + " "];
			return b || (b = new RegExp("(^|" + M + ")" + a + "(" + M + "|$)")) && y(a, function (a) {
				return b.test("string" == typeof a.className && a.className || typeof a.getAttribute !== C && a.getAttribute("class") || "")
			})
		}, ATTR: function (a, b, c) {
			return function (d) {
				var e = fb.attr(d, a);
				return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
			}
		}, CHILD: function (a, b, c, d, e) {
			var f = "nth" !== a.slice(0, 3), g = "last" !== a.slice(-4), h = "of-type" === b;
			return 1 === d && 0 === e ? function (a) {
				return!!a.parentNode
			} : function (b, c, i) {
				var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), s = !i && !h;
				if (q) {
					if (f) {
						while (p) {
							l = b;
							while (l = l[p])if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType)return!1;
							o = p = "only" === a && !o && "nextSibling"
						}
						return!0
					}
					if (o = [g ? q.firstChild : q.lastChild], g && s) {
						k = q[u] || (q[u] = {}), j = k[a] || [], n = j[0] === w && j[1], m = j[0] === w && j[2], l = n && q.childNodes[n];
						while (l = ++n && l && l[p] || (m = n = 0) || o.pop())if (1 === l.nodeType && ++m && l === b) {
							k[a] = [w, n, m];
							break
						}
					} else if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w)m = j[1]; else while (l = ++n && l && l[p] || (m = n = 0) || o.pop())if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (s && ((l[u] || (l[u] = {}))[a] = [w, m]), l === b))break;
					return m -= e, m === d || m % d === 0 && m / d >= 0
				}
			}
		}, PSEUDO: function (a, b) {
			var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fb.error("unsupported pseudo: " + a);
			return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? hb(function (a, c) {
				var d, f = e(a, b), g = f.length;
				while (g--)d = K.call(a, f[g]), a[d] = !(c[d] = f[g])
			}) : function (a) {
				return e(a, 0, c)
			}) : e
		}}, pseudos: {not: hb(function (a) {
			var b = [], c = [], d = h(a.replace(R, "$1"));
			return d[u] ? hb(function (a, b, c, e) {
				var f, g = d(a, null, e, []), h = a.length;
				while (h--)(f = g[h]) && (a[h] = !(b[h] = f))
			}) : function (a, e, f) {
				return b[0] = a, d(b, null, f, c), !c.pop()
			}
		}), has: hb(function (a) {
			return function (b) {
				return fb(a, b).length > 0
			}
		}), contains: hb(function (a) {
			return function (b) {
				return(b.textContent || b.innerText || e(b)).indexOf(a) > -1
			}
		}), lang: hb(function (a) {
			return W.test(a || "") || fb.error("unsupported lang: " + a), a = a.replace(cb, db).toLowerCase(), function (b) {
				var c;
				do if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang"))return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
				return!1
			}
		}), target: function (b) {
			var c = a.location && a.location.hash;
			return c && c.slice(1) === b.id
		}, root: function (a) {
			return a === o
		}, focus: function (a) {
			return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
		}, enabled: function (a) {
			return a.disabled === !1
		}, disabled: function (a) {
			return a.disabled === !0
		}, checked: function (a) {
			var b = a.nodeName.toLowerCase();
			return"input" === b && !!a.checked || "option" === b && !!a.selected
		}, selected: function (a) {
			return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
		}, empty: function (a) {
			for (a = a.firstChild; a; a = a.nextSibling)if (a.nodeType < 6)return!1;
			return!0
		}, parent: function (a) {
			return!d.pseudos.empty(a)
		}, header: function (a) {
			return Z.test(a.nodeName)
		}, input: function (a) {
			return Y.test(a.nodeName)
		}, button: function (a) {
			var b = a.nodeName.toLowerCase();
			return"input" === b && "button" === a.type || "button" === b
		}, text: function (a) {
			var b;
			return"input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
		}, first: nb(function () {
			return[0]
		}), last: nb(function (a, b) {
			return[b - 1]
		}), eq: nb(function (a, b, c) {
			return[0 > c ? c + b : c]
		}), even: nb(function (a, b) {
			for (var c = 0; b > c; c += 2)a.push(c);
			return a
		}), odd: nb(function (a, b) {
			for (var c = 1; b > c; c += 2)a.push(c);
			return a
		}), lt: nb(function (a, b, c) {
			for (var d = 0 > c ? c + b : c; --d >= 0;)a.push(d);
			return a
		}), gt: nb(function (a, b, c) {
			for (var d = 0 > c ? c + b : c; ++d < b;)a.push(d);
			return a
		})}}, d.pseudos.nth = d.pseudos.eq;
		for (b in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0})d.pseudos[b] = lb(b);
		for (b in{submit: !0, reset: !0})d.pseudos[b] = mb(b);
		function pb() {
		}

		pb.prototype = d.filters = d.pseudos, d.setFilters = new pb, g = fb.tokenize = function (a, b) {
			var c, e, f, g, h, i, j, k = z[a + " "];
			if (k)return b ? 0 : k.slice(0);
			h = a, i = [], j = d.preFilter;
			while (h) {
				(!c || (e = S.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = T.exec(h)) && (c = e.shift(), f.push({value: c, type: e[0].replace(R, " ")}), h = h.slice(c.length));
				for (g in d.filter)!(e = X[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({value: c, type: g, matches: e}), h = h.slice(c.length));
				if (!c)break
			}
			return b ? h.length : h ? fb.error(a) : z(a, i).slice(0)
		};
		function qb(a) {
			for (var b = 0, c = a.length, d = ""; c > b; b++)d += a[b].value;
			return d
		}

		function rb(a, b, c) {
			var d = b.dir, e = c && "parentNode" === d, f = x++;
			return b.first ? function (b, c, f) {
				while (b = b[d])if (1 === b.nodeType || e)return a(b, c, f)
			} : function (b, c, g) {
				var h, i, j = [w, f];
				if (g) {
					while (b = b[d])if ((1 === b.nodeType || e) && a(b, c, g))return!0
				} else while (b = b[d])if (1 === b.nodeType || e) {
					if (i = b[u] || (b[u] = {}), (h = i[d]) && h[0] === w && h[1] === f)return j[2] = h[2];
					if (i[d] = j, j[2] = a(b, c, g))return!0
				}
			}
		}

		function sb(a) {
			return a.length > 1 ? function (b, c, d) {
				var e = a.length;
				while (e--)if (!a[e](b, c, d))return!1;
				return!0
			} : a[0]
		}

		function tb(a, b, c) {
			for (var d = 0, e = b.length; e > d; d++)fb(a, b[d], c);
			return c
		}

		function ub(a, b, c, d, e) {
			for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
			return g
		}

		function vb(a, b, c, d, e, f) {
			return d && !d[u] && (d = vb(d)), e && !e[u] && (e = vb(e, f)), hb(function (f, g, h, i) {
				var j, k, l, m = [], n = [], o = g.length, p = f || tb(b || "*", h.nodeType ? [h] : h, []), q = !a || !f && b ? p : ub(p, m, a, h, i), r = c ? e || (f ? a : o || d) ? [] : g : q;
				if (c && c(q, r, h, i), d) {
					j = ub(r, n), d(j, [], h, i), k = j.length;
					while (k--)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
				}
				if (f) {
					if (e || a) {
						if (e) {
							j = [], k = r.length;
							while (k--)(l = r[k]) && j.push(q[k] = l);
							e(null, r = [], j, i)
						}
						k = r.length;
						while (k--)(l = r[k]) && (j = e ? K.call(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
					}
				} else r = ub(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : I.apply(g, r)
			})
		}

		function wb(a) {
			for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = rb(function (a) {
				return a === b
			}, h, !0), l = rb(function (a) {
				return K.call(b, a) > -1
			}, h, !0), m = [function (a, c, d) {
				return!g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d))
			}]; f > i; i++)if (c = d.relative[a[i].type])m = [rb(sb(m), c)]; else {
				if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
					for (e = ++i; f > e; e++)if (d.relative[a[e].type])break;
					return vb(i > 1 && sb(m), i > 1 && qb(a.slice(0, i - 1).concat({value: " " === a[i - 2].type ? "*" : ""})).replace(R, "$1"), c, e > i && wb(a.slice(i, e)), f > e && wb(a = a.slice(e)), f > e && qb(a))
				}
				m.push(c)
			}
			return sb(m)
		}

		function xb(a, b) {
			var c = b.length > 0, e = a.length > 0, f = function (f, g, h, i, k) {
				var l, m, o, p = 0, q = "0", r = f && [], s = [], t = j, u = f || e && d.find.TAG("*", k), v = w += null == t ? 1 : Math.random() || .1, x = u.length;
				for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
					if (e && l) {
						m = 0;
						while (o = a[m++])if (o(l, g, h)) {
							i.push(l);
							break
						}
						k && (w = v)
					}
					c && ((l = !o && l) && p--, f && r.push(l))
				}
				if (p += q, c && q !== p) {
					m = 0;
					while (o = b[m++])o(r, s, g, h);
					if (f) {
						if (p > 0)while (q--)r[q] || s[q] || (s[q] = G.call(i));
						s = ub(s)
					}
					I.apply(i, s), k && !f && s.length > 0 && p + b.length > 1 && fb.uniqueSort(i)
				}
				return k && (w = v, j = t), r
			};
			return c ? hb(f) : f
		}

		return h = fb.compile = function (a, b) {
			var c, d = [], e = [], f = A[a + " "];
			if (!f) {
				b || (b = g(a)), c = b.length;
				while (c--)f = wb(b[c]), f[u] ? d.push(f) : e.push(f);
				f = A(a, xb(e, d)), f.selector = a
			}
			return f
		}, i = fb.select = function (a, b, e, f) {
			var i, j, k, l, m, n = "function" == typeof a && a, o = !f && g(a = n.selector || a);
			if (e = e || [], 1 === o.length) {
				if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
					if (b = (d.find.ID(k.matches[0].replace(cb, db), b) || [])[0], !b)return e;
					n && (b = b.parentNode), a = a.slice(j.shift().value.length)
				}
				i = X.needsContext.test(a) ? 0 : j.length;
				while (i--) {
					if (k = j[i], d.relative[l = k.type])break;
					if ((m = d.find[l]) && (f = m(k.matches[0].replace(cb, db), ab.test(j[0].type) && ob(b.parentNode) || b))) {
						if (j.splice(i, 1), a = f.length && qb(j), !a)return I.apply(e, f), e;
						break
					}
				}
			}
			return(n || h(a, o))(f, b, !p, e, ab.test(a) && ob(b.parentNode) || b), e
		}, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ib(function (a) {
			return 1 & a.compareDocumentPosition(n.createElement("div"))
		}), ib(function (a) {
			return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
		}) || jb("type|href|height|width", function (a, b, c) {
			return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
		}), c.attributes && ib(function (a) {
			return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
		}) || jb("value", function (a, b, c) {
			return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
		}), ib(function (a) {
			return null == a.getAttribute("disabled")
		}) || jb(L, function (a, b, c) {
			var d;
			return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
		}), fb
	}(a);
	n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;
	var u = n.expr.match.needsContext, v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, w = /^.[^:#\[\.,]*$/;

	function x(a, b, c) {
		if (n.isFunction(b))return n.grep(a, function (a, d) {
			return!!b.call(a, d, a) !== c
		});
		if (b.nodeType)return n.grep(a, function (a) {
			return a === b !== c
		});
		if ("string" == typeof b) {
			if (w.test(b))return n.filter(b, a, c);
			b = n.filter(b, a)
		}
		return n.grep(a, function (a) {
			return g.call(b, a) >= 0 !== c
		})
	}

	n.filter = function (a, b, c) {
		var d = b[0];
		return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function (a) {
			return 1 === a.nodeType
		}))
	}, n.fn.extend({find: function (a) {
		var b, c = this.length, d = [], e = this;
		if ("string" != typeof a)return this.pushStack(n(a).filter(function () {
			for (b = 0; c > b; b++)if (n.contains(e[b], this))return!0
		}));
		for (b = 0; c > b; b++)n.find(a, e[b], d);
		return d = this.pushStack(c > 1 ? n.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, d
	}, filter: function (a) {
		return this.pushStack(x(this, a || [], !1))
	}, not: function (a) {
		return this.pushStack(x(this, a || [], !0))
	}, is: function (a) {
		return!!x(this, "string" == typeof a && u.test(a) ? n(a) : a || [], !1).length
	}});
	var y, z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, A = n.fn.init = function (a, b) {
		var c, d;
		if (!a)return this;
		if ("string" == typeof a) {
			if (c = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : z.exec(a), !c || !c[1] && b)return!b || b.jquery ? (b || y).find(a) : this.constructor(b).find(a);
			if (c[1]) {
				if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : l, !0)), v.test(c[1]) && n.isPlainObject(b))for (c in b)n.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
				return this
			}
			return d = l.getElementById(c[2]), d && d.parentNode && (this.length = 1, this[0] = d), this.context = l, this.selector = a, this
		}
		return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? "undefined" != typeof y.ready ? y.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this))
	};
	A.prototype = n.fn, y = n(l);
	var B = /^(?:parents|prev(?:Until|All))/, C = {children: !0, contents: !0, next: !0, prev: !0};
	n.extend({dir: function (a, b, c) {
		var d = [], e = void 0 !== c;
		while ((a = a[b]) && 9 !== a.nodeType)if (1 === a.nodeType) {
			if (e && n(a).is(c))break;
			d.push(a)
		}
		return d
	}, sibling: function (a, b) {
		for (var c = []; a; a = a.nextSibling)1 === a.nodeType && a !== b && c.push(a);
		return c
	}}), n.fn.extend({has: function (a) {
		var b = n(a, this), c = b.length;
		return this.filter(function () {
			for (var a = 0; c > a; a++)if (n.contains(this, b[a]))return!0
		})
	}, closest: function (a, b) {
		for (var c, d = 0, e = this.length, f = [], g = u.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++)for (c = this[d]; c && c !== b; c = c.parentNode)if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
			f.push(c);
			break
		}
		return this.pushStack(f.length > 1 ? n.unique(f) : f)
	}, index: function (a) {
		return a ? "string" == typeof a ? g.call(n(a), this[0]) : g.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
	}, add: function (a, b) {
		return this.pushStack(n.unique(n.merge(this.get(), n(a, b))))
	}, addBack: function (a) {
		return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
	}});
	function D(a, b) {
		while ((a = a[b]) && 1 !== a.nodeType);
		return a
	}

	n.each({parent: function (a) {
		var b = a.parentNode;
		return b && 11 !== b.nodeType ? b : null
	}, parents: function (a) {
		return n.dir(a, "parentNode")
	}, parentsUntil: function (a, b, c) {
		return n.dir(a, "parentNode", c)
	}, next: function (a) {
		return D(a, "nextSibling")
	}, prev: function (a) {
		return D(a, "previousSibling")
	}, nextAll: function (a) {
		return n.dir(a, "nextSibling")
	}, prevAll: function (a) {
		return n.dir(a, "previousSibling")
	}, nextUntil: function (a, b, c) {
		return n.dir(a, "nextSibling", c)
	}, prevUntil: function (a, b, c) {
		return n.dir(a, "previousSibling", c)
	}, siblings: function (a) {
		return n.sibling((a.parentNode || {}).firstChild, a)
	}, children: function (a) {
		return n.sibling(a.firstChild)
	}, contents: function (a) {
		return a.contentDocument || n.merge([], a.childNodes)
	}}, function (a, b) {
		n.fn[a] = function (c, d) {
			var e = n.map(this, b, c);
			return"Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (C[a] || n.unique(e), B.test(a) && e.reverse()), this.pushStack(e)
		}
	});
	var E = /\S+/g, F = {};

	function G(a) {
		var b = F[a] = {};
		return n.each(a.match(E) || [], function (a, c) {
			b[c] = !0
		}), b
	}

	n.Callbacks = function (a) {
		a = "string" == typeof a ? F[a] || G(a) : n.extend({}, a);
		var b, c, d, e, f, g, h = [], i = !a.once && [], j = function (l) {
			for (b = a.memory && l, c = !0, g = e || 0, e = 0, f = h.length, d = !0; h && f > g; g++)if (h[g].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
				b = !1;
				break
			}
			d = !1, h && (i ? i.length && j(i.shift()) : b ? h = [] : k.disable())
		}, k = {add: function () {
			if (h) {
				var c = h.length;
				!function g(b) {
					n.each(b, function (b, c) {
						var d = n.type(c);
						"function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && g(c)
					})
				}(arguments), d ? f = h.length : b && (e = c, j(b))
			}
			return this
		}, remove: function () {
			return h && n.each(arguments, function (a, b) {
				var c;
				while ((c = n.inArray(b, h, c)) > -1)h.splice(c, 1), d && (f >= c && f--, g >= c && g--)
			}), this
		}, has: function (a) {
			return a ? n.inArray(a, h) > -1 : !(!h || !h.length)
		}, empty: function () {
			return h = [], f = 0, this
		}, disable: function () {
			return h = i = b = void 0, this
		}, disabled: function () {
			return!h
		}, lock: function () {
			return i = void 0, b || k.disable(), this
		}, locked: function () {
			return!i
		}, fireWith: function (a, b) {
			return!h || c && !i || (b = b || [], b = [a, b.slice ? b.slice() : b], d ? i.push(b) : j(b)), this
		}, fire: function () {
			return k.fireWith(this, arguments), this
		}, fired: function () {
			return!!c
		}};
		return k
	}, n.extend({Deferred: function (a) {
		var b = [
			["resolve", "done", n.Callbacks("once memory"), "resolved"],
			["reject", "fail", n.Callbacks("once memory"), "rejected"],
			["notify", "progress", n.Callbacks("memory")]
		], c = "pending", d = {state: function () {
			return c
		}, always: function () {
			return e.done(arguments).fail(arguments), this
		}, then: function () {
			var a = arguments;
			return n.Deferred(function (c) {
				n.each(b, function (b, f) {
					var g = n.isFunction(a[b]) && a[b];
					e[f[1]](function () {
						var a = g && g.apply(this, arguments);
						a && n.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
					})
				}), a = null
			}).promise()
		}, promise: function (a) {
			return null != a ? n.extend(a, d) : d
		}}, e = {};
		return d.pipe = d.then, n.each(b, function (a, f) {
			var g = f[2], h = f[3];
			d[f[1]] = g.add, h && g.add(function () {
				c = h
			}, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () {
				return e[f[0] + "With"](this === e ? d : this, arguments), this
			}, e[f[0] + "With"] = g.fireWith
		}), d.promise(e), a && a.call(e, e), e
	}, when: function (a) {
		var b = 0, c = d.call(arguments), e = c.length, f = 1 !== e || a && n.isFunction(a.promise) ? e : 0, g = 1 === f ? a : n.Deferred(), h = function (a, b, c) {
			return function (e) {
				b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
			}
		}, i, j, k;
		if (e > 1)for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++)c[b] && n.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;
		return f || g.resolveWith(k, c), g.promise()
	}});
	var H;
	n.fn.ready = function (a) {
		return n.ready.promise().done(a), this
	}, n.extend({isReady: !1, readyWait: 1, holdReady: function (a) {
		a ? n.readyWait++ : n.ready(!0)
	}, ready: function (a) {
		(a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (H.resolveWith(l, [n]), n.fn.triggerHandler && (n(l).triggerHandler("ready"), n(l).off("ready"))))
	}});
	function I() {
		l.removeEventListener("DOMContentLoaded", I, !1), a.removeEventListener("load", I, !1), n.ready()
	}

	n.ready.promise = function (b) {
		return H || (H = n.Deferred(), "complete" === l.readyState ? setTimeout(n.ready) : (l.addEventListener("DOMContentLoaded", I, !1), a.addEventListener("load", I, !1))), H.promise(b)
	}, n.ready.promise();
	var J = n.access = function (a, b, c, d, e, f, g) {
		var h = 0, i = a.length, j = null == c;
		if ("object" === n.type(c)) {
			e = !0;
			for (h in c)n.access(a, b, h, c[h], !0, f, g)
		} else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function (a, b, c) {
			return j.call(n(a), c)
		})), b))for (; i > h; h++)b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
		return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
	};
	n.acceptData = function (a) {
		return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
	};
	function K() {
		Object.defineProperty(this.cache = {}, 0, {get: function () {
			return{}
		}}), this.expando = n.expando + Math.random()
	}

	K.uid = 1, K.accepts = n.acceptData, K.prototype = {key: function (a) {
		if (!K.accepts(a))return 0;
		var b = {}, c = a[this.expando];
		if (!c) {
			c = K.uid++;
			try {
				b[this.expando] = {value: c}, Object.defineProperties(a, b)
			} catch (d) {
				b[this.expando] = c, n.extend(a, b)
			}
		}
		return this.cache[c] || (this.cache[c] = {}), c
	}, set: function (a, b, c) {
		var d, e = this.key(a), f = this.cache[e];
		if ("string" == typeof b)f[b] = c; else if (n.isEmptyObject(f))n.extend(this.cache[e], b); else for (d in b)f[d] = b[d];
		return f
	}, get: function (a, b) {
		var c = this.cache[this.key(a)];
		return void 0 === b ? c : c[b]
	}, access: function (a, b, c) {
		var d;
		return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, n.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b)
	}, remove: function (a, b) {
		var c, d, e, f = this.key(a), g = this.cache[f];
		if (void 0 === b)this.cache[f] = {}; else {
			n.isArray(b) ? d = b.concat(b.map(n.camelCase)) : (e = n.camelCase(b), b in g ? d = [b, e] : (d = e, d = d in g ? [d] : d.match(E) || [])), c = d.length;
			while (c--)delete g[d[c]]
		}
	}, hasData: function (a) {
		return!n.isEmptyObject(this.cache[a[this.expando]] || {})
	}, discard: function (a) {
		a[this.expando] && delete this.cache[a[this.expando]]
	}};
	var L = new K, M = new K, N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, O = /([A-Z])/g;

	function P(a, b, c) {
		var d;
		if (void 0 === c && 1 === a.nodeType)if (d = "data-" + b.replace(O, "-$1").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
			try {
				c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : N.test(c) ? n.parseJSON(c) : c
			} catch (e) {
			}
			M.set(a, b, c)
		} else c = void 0;
		return c
	}

	n.extend({hasData: function (a) {
		return M.hasData(a) || L.hasData(a)
	}, data: function (a, b, c) {
		return M.access(a, b, c)
	}, removeData: function (a, b) {
		M.remove(a, b)
	}, _data: function (a, b, c) {
		return L.access(a, b, c)
	}, _removeData: function (a, b) {
		L.remove(a, b)
	}}), n.fn.extend({data: function (a, b) {
		var c, d, e, f = this[0], g = f && f.attributes;
		if (void 0 === a) {
			if (this.length && (e = M.get(f), 1 === f.nodeType && !L.get(f, "hasDataAttrs"))) {
				c = g.length;
				while (c--)g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), P(f, d, e[d])));
				L.set(f, "hasDataAttrs", !0)
			}
			return e
		}
		return"object" == typeof a ? this.each(function () {
			M.set(this, a)
		}) : J(this, function (b) {
			var c, d = n.camelCase(a);
			if (f && void 0 === b) {
				if (c = M.get(f, a), void 0 !== c)return c;
				if (c = M.get(f, d), void 0 !== c)return c;
				if (c = P(f, d, void 0), void 0 !== c)return c
			} else this.each(function () {
				var c = M.get(this, d);
				M.set(this, d, b), -1 !== a.indexOf("-") && void 0 !== c && M.set(this, a, b)
			})
		}, null, b, arguments.length > 1, null, !0)
	}, removeData: function (a) {
		return this.each(function () {
			M.remove(this, a)
		})
	}}), n.extend({queue: function (a, b, c) {
		var d;
		return a ? (b = (b || "fx") + "queue", d = L.get(a, b), c && (!d || n.isArray(c) ? d = L.access(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0
	}, dequeue: function (a, b) {
		b = b || "fx";
		var c = n.queue(a, b), d = c.length, e = c.shift(), f = n._queueHooks(a, b), g = function () {
			n.dequeue(a, b)
		};
		"inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
	}, _queueHooks: function (a, b) {
		var c = b + "queueHooks";
		return L.get(a, c) || L.access(a, c, {empty: n.Callbacks("once memory").add(function () {
			L.remove(a, [b + "queue", c])
		})})
	}}), n.fn.extend({queue: function (a, b) {
		var c = 2;
		return"string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function () {
			var c = n.queue(this, a, b);
			n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a)
		})
	}, dequeue: function (a) {
		return this.each(function () {
			n.dequeue(this, a)
		})
	}, clearQueue: function (a) {
		return this.queue(a || "fx", [])
	}, promise: function (a, b) {
		var c, d = 1, e = n.Deferred(), f = this, g = this.length, h = function () {
			--d || e.resolveWith(f, [f])
		};
		"string" != typeof a && (b = a, a = void 0), a = a || "fx";
		while (g--)c = L.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
		return h(), e.promise(b)
	}});
	var Q = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, R = ["Top", "Right", "Bottom", "Left"], S = function (a, b) {
		return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a)
	}, T = /^(?:checkbox|radio)$/i;
	!function () {
		var a = l.createDocumentFragment(), b = a.appendChild(l.createElement("div")), c = l.createElement("input");
		c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
	}();
	var U = "undefined";
	k.focusinBubbles = "onfocusin"in a;
	var V = /^key/, W = /^(?:mouse|pointer|contextmenu)|click/, X = /^(?:focusinfocus|focusoutblur)$/, Y = /^([^.]*)(?:\.(.+)|)$/;

	function Z() {
		return!0
	}

	function $() {
		return!1
	}

	function _() {
		try {
			return l.activeElement
		} catch (a) {
		}
	}

	n.event = {global: {}, add: function (a, b, c, d, e) {
		var f, g, h, i, j, k, l, m, o, p, q, r = L.get(a);
		if (r) {
			c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = n.guid++), (i = r.events) || (i = r.events = {}), (g = r.handle) || (g = r.handle = function (b) {
				return typeof n !== U && n.event.triggered !== b.type ? n.event.dispatch.apply(a, arguments) : void 0
			}), b = (b || "").match(E) || [""], j = b.length;
			while (j--)h = Y.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o && (l = n.event.special[o] || {}, o = (e ? l.delegateType : l.bindType) || o, l = n.event.special[o] || {}, k = n.extend({type: o, origType: q, data: d, handler: c, guid: c.guid, selector: e, needsContext: e && n.expr.match.needsContext.test(e), namespace: p.join(".")}, f), (m = i[o]) || (m = i[o] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, p, g) !== !1 || a.addEventListener && a.addEventListener(o, g, !1)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), n.event.global[o] = !0)
		}
	}, remove: function (a, b, c, d, e) {
		var f, g, h, i, j, k, l, m, o, p, q, r = L.hasData(a) && L.get(a);
		if (r && (i = r.events)) {
			b = (b || "").match(E) || [""], j = b.length;
			while (j--)if (h = Y.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
				l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = i[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;
				while (f--)k = m[f], !e && q !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
				g && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete i[o])
			} else for (o in i)n.event.remove(a, o + b[j], c, d, !0);
			n.isEmptyObject(i) && (delete r.handle, L.remove(a, "events"))
		}
	}, trigger: function (b, c, d, e) {
		var f, g, h, i, k, m, o, p = [d || l], q = j.call(b, "type") ? b.type : b, r = j.call(b, "namespace") ? b.namespace.split(".") : [];
		if (g = h = d = d || l, 3 !== d.nodeType && 8 !== d.nodeType && !X.test(q + n.event.triggered) && (q.indexOf(".") >= 0 && (r = q.split("."), q = r.shift(), r.sort()), k = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = r.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : n.makeArray(c, [b]), o = n.event.special[q] || {}, e || !o.trigger || o.trigger.apply(d, c) !== !1)) {
			if (!e && !o.noBubble && !n.isWindow(d)) {
				for (i = o.delegateType || q, X.test(i + q) || (g = g.parentNode); g; g = g.parentNode)p.push(g), h = g;
				h === (d.ownerDocument || l) && p.push(h.defaultView || h.parentWindow || a)
			}
			f = 0;
			while ((g = p[f++]) && !b.isPropagationStopped())b.type = f > 1 ? i : o.bindType || q, m = (L.get(g, "events") || {})[b.type] && L.get(g, "handle"), m && m.apply(g, c), m = k && g[k], m && m.apply && n.acceptData(g) && (b.result = m.apply(g, c), b.result === !1 && b.preventDefault());
			return b.type = q, e || b.isDefaultPrevented() || o._default && o._default.apply(p.pop(), c) !== !1 || !n.acceptData(d) || k && n.isFunction(d[q]) && !n.isWindow(d) && (h = d[k], h && (d[k] = null), n.event.triggered = q, d[q](), n.event.triggered = void 0, h && (d[k] = h)), b.result
		}
	}, dispatch: function (a) {
		a = n.event.fix(a);
		var b, c, e, f, g, h = [], i = d.call(arguments), j = (L.get(this, "events") || {})[a.type] || [], k = n.event.special[a.type] || {};
		if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
			h = n.event.handlers.call(this, a, j), b = 0;
			while ((f = h[b++]) && !a.isPropagationStopped()) {
				a.currentTarget = f.elem, c = 0;
				while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped())(!a.namespace_re || a.namespace_re.test(g.namespace)) && (a.handleObj = g, a.data = g.data, e = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== e && (a.result = e) === !1 && (a.preventDefault(), a.stopPropagation()))
			}
			return k.postDispatch && k.postDispatch.call(this, a), a.result
		}
	}, handlers: function (a, b) {
		var c, d, e, f, g = [], h = b.delegateCount, i = a.target;
		if (h && i.nodeType && (!a.button || "click" !== a.type))for (; i !== this; i = i.parentNode || this)if (i.disabled !== !0 || "click" !== a.type) {
			for (d = [], c = 0; h > c; c++)f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) >= 0 : n.find(e, this, null, [i]).length), d[e] && d.push(f);
			d.length && g.push({elem: i, handlers: d})
		}
		return h < b.length && g.push({elem: this, handlers: b.slice(h)}), g
	}, props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: {props: "char charCode key keyCode".split(" "), filter: function (a, b) {
		return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
	}}, mouseHooks: {props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function (a, b) {
		var c, d, e, f = b.button;
		return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || l, d = c.documentElement, e = c.body, a.pageX = b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0), a.pageY = b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0)), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
	}}, fix: function (a) {
		if (a[n.expando])return a;
		var b, c, d, e = a.type, f = a, g = this.fixHooks[e];
		g || (this.fixHooks[e] = g = W.test(e) ? this.mouseHooks : V.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new n.Event(f), b = d.length;
		while (b--)c = d[b], a[c] = f[c];
		return a.target || (a.target = l), 3 === a.target.nodeType && (a.target = a.target.parentNode), g.filter ? g.filter(a, f) : a
	}, special: {load: {noBubble: !0}, focus: {trigger: function () {
		return this !== _() && this.focus ? (this.focus(), !1) : void 0
	}, delegateType: "focusin"}, blur: {trigger: function () {
		return this === _() && this.blur ? (this.blur(), !1) : void 0
	}, delegateType: "focusout"}, click: {trigger: function () {
		return"checkbox" === this.type && this.click && n.nodeName(this, "input") ? (this.click(), !1) : void 0
	}, _default: function (a) {
		return n.nodeName(a.target, "a")
	}}, beforeunload: {postDispatch: function (a) {
		void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
	}}}, simulate: function (a, b, c, d) {
		var e = n.extend(new n.Event, c, {type: a, isSimulated: !0, originalEvent: {}});
		d ? n.event.trigger(e, null, b) : n.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
	}}, n.removeEvent = function (a, b, c) {
		a.removeEventListener && a.removeEventListener(b, c, !1)
	}, n.Event = function (a, b) {
		return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? Z : $) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void(this[n.expando] = !0)) : new n.Event(a, b)
	}, n.Event.prototype = {isDefaultPrevented: $, isPropagationStopped: $, isImmediatePropagationStopped: $, preventDefault: function () {
		var a = this.originalEvent;
		this.isDefaultPrevented = Z, a && a.preventDefault && a.preventDefault()
	}, stopPropagation: function () {
		var a = this.originalEvent;
		this.isPropagationStopped = Z, a && a.stopPropagation && a.stopPropagation()
	}, stopImmediatePropagation: function () {
		var a = this.originalEvent;
		this.isImmediatePropagationStopped = Z, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
	}}, n.each({mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout"}, function (a, b) {
		n.event.special[a] = {delegateType: b, bindType: b, handle: function (a) {
			var c, d = this, e = a.relatedTarget, f = a.handleObj;
			return(!e || e !== d && !n.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
		}}
	}), k.focusinBubbles || n.each({focus: "focusin", blur: "focusout"}, function (a, b) {
		var c = function (a) {
			n.event.simulate(b, a.target, n.event.fix(a), !0)
		};
		n.event.special[b] = {setup: function () {
			var d = this.ownerDocument || this, e = L.access(d, b);
			e || d.addEventListener(a, c, !0), L.access(d, b, (e || 0) + 1)
		}, teardown: function () {
			var d = this.ownerDocument || this, e = L.access(d, b) - 1;
			e ? L.access(d, b, e) : (d.removeEventListener(a, c, !0), L.remove(d, b))
		}}
	}), n.fn.extend({on: function (a, b, c, d, e) {
		var f, g;
		if ("object" == typeof a) {
			"string" != typeof b && (c = c || b, b = void 0);
			for (g in a)this.on(g, b, c, a[g], e);
			return this
		}
		if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1)d = $; else if (!d)return this;
		return 1 === e && (f = d, d = function (a) {
			return n().off(a), f.apply(this, arguments)
		}, d.guid = f.guid || (f.guid = n.guid++)), this.each(function () {
			n.event.add(this, a, d, c, b)
		})
	}, one: function (a, b, c, d) {
		return this.on(a, b, c, d, 1)
	}, off: function (a, b, c) {
		var d, e;
		if (a && a.preventDefault && a.handleObj)return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
		if ("object" == typeof a) {
			for (e in a)this.off(e, b, a[e]);
			return this
		}
		return(b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = $), this.each(function () {
			n.event.remove(this, a, c, b)
		})
	}, trigger: function (a, b) {
		return this.each(function () {
			n.event.trigger(a, b, this)
		})
	}, triggerHandler: function (a, b) {
		var c = this[0];
		return c ? n.event.trigger(a, b, c, !0) : void 0
	}});
	var ab = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, bb = /<([\w:]+)/, cb = /<|&#?\w+;/, db = /<(?:script|style|link)/i, eb = /checked\s*(?:[^=]|=\s*.checked.)/i, fb = /^$|\/(?:java|ecma)script/i, gb = /^true\/(.*)/, hb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, ib = {option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""]};
	ib.optgroup = ib.option, ib.tbody = ib.tfoot = ib.colgroup = ib.caption = ib.thead, ib.th = ib.td;
	function jb(a, b) {
		return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
	}

	function kb(a) {
		return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
	}

	function lb(a) {
		var b = gb.exec(a.type);
		return b ? a.type = b[1] : a.removeAttribute("type"), a
	}

	function mb(a, b) {
		for (var c = 0, d = a.length; d > c; c++)L.set(a[c], "globalEval", !b || L.get(b[c], "globalEval"))
	}

	function nb(a, b) {
		var c, d, e, f, g, h, i, j;
		if (1 === b.nodeType) {
			if (L.hasData(a) && (f = L.access(a), g = L.set(b, f), j = f.events)) {
				delete g.handle, g.events = {};
				for (e in j)for (c = 0, d = j[e].length; d > c; c++)n.event.add(b, e, j[e][c])
			}
			M.hasData(a) && (h = M.access(a), i = n.extend({}, h), M.set(b, i))
		}
	}

	function ob(a, b) {
		var c = a.getElementsByTagName ? a.getElementsByTagName(b || "*") : a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
		return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], c) : c
	}

	function pb(a, b) {
		var c = b.nodeName.toLowerCase();
		"input" === c && T.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
	}

	n.extend({clone: function (a, b, c) {
		var d, e, f, g, h = a.cloneNode(!0), i = n.contains(a.ownerDocument, a);
		if (!(k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a)))for (g = ob(h), f = ob(a), d = 0, e = f.length; e > d; d++)pb(f[d], g[d]);
		if (b)if (c)for (f = f || ob(a), g = g || ob(h), d = 0, e = f.length; e > d; d++)nb(f[d], g[d]); else nb(a, h);
		return g = ob(h, "script"), g.length > 0 && mb(g, !i && ob(a, "script")), h
	}, buildFragment: function (a, b, c, d) {
		for (var e, f, g, h, i, j, k = b.createDocumentFragment(), l = [], m = 0, o = a.length; o > m; m++)if (e = a[m], e || 0 === e)if ("object" === n.type(e))n.merge(l, e.nodeType ? [e] : e); else if (cb.test(e)) {
			f = f || k.appendChild(b.createElement("div")), g = (bb.exec(e) || ["", ""])[1].toLowerCase(), h = ib[g] || ib._default, f.innerHTML = h[1] + e.replace(ab, "<$1></$2>") + h[2], j = h[0];
			while (j--)f = f.lastChild;
			n.merge(l, f.childNodes), f = k.firstChild, f.textContent = ""
		} else l.push(b.createTextNode(e));
		k.textContent = "", m = 0;
		while (e = l[m++])if ((!d || -1 === n.inArray(e, d)) && (i = n.contains(e.ownerDocument, e), f = ob(k.appendChild(e), "script"), i && mb(f), c)) {
			j = 0;
			while (e = f[j++])fb.test(e.type || "") && c.push(e)
		}
		return k
	}, cleanData: function (a) {
		for (var b, c, d, e, f = n.event.special, g = 0; void 0 !== (c = a[g]); g++) {
			if (n.acceptData(c) && (e = c[L.expando], e && (b = L.cache[e]))) {
				if (b.events)for (d in b.events)f[d] ? n.event.remove(c, d) : n.removeEvent(c, d, b.handle);
				L.cache[e] && delete L.cache[e]
			}
			delete M.cache[c[M.expando]]
		}
	}}), n.fn.extend({text: function (a) {
		return J(this, function (a) {
			return void 0 === a ? n.text(this) : this.empty().each(function () {
				(1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a)
			})
		}, null, a, arguments.length)
	}, append: function () {
		return this.domManip(arguments, function (a) {
			if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
				var b = jb(this, a);
				b.appendChild(a)
			}
		})
	}, prepend: function () {
		return this.domManip(arguments, function (a) {
			if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
				var b = jb(this, a);
				b.insertBefore(a, b.firstChild)
			}
		})
	}, before: function () {
		return this.domManip(arguments, function (a) {
			this.parentNode && this.parentNode.insertBefore(a, this)
		})
	}, after: function () {
		return this.domManip(arguments, function (a) {
			this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
		})
	}, remove: function (a, b) {
		for (var c, d = a ? n.filter(a, this) : this, e = 0; null != (c = d[e]); e++)b || 1 !== c.nodeType || n.cleanData(ob(c)), c.parentNode && (b && n.contains(c.ownerDocument, c) && mb(ob(c, "script")), c.parentNode.removeChild(c));
		return this
	}, empty: function () {
		for (var a, b = 0; null != (a = this[b]); b++)1 === a.nodeType && (n.cleanData(ob(a, !1)), a.textContent = "");
		return this
	}, clone: function (a, b) {
		return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () {
			return n.clone(this, a, b)
		})
	}, html: function (a) {
		return J(this, function (a) {
			var b = this[0] || {}, c = 0, d = this.length;
			if (void 0 === a && 1 === b.nodeType)return b.innerHTML;
			if ("string" == typeof a && !db.test(a) && !ib[(bb.exec(a) || ["", ""])[1].toLowerCase()]) {
				a = a.replace(ab, "<$1></$2>");
				try {
					for (; d > c; c++)b = this[c] || {}, 1 === b.nodeType && (n.cleanData(ob(b, !1)), b.innerHTML = a);
					b = 0
				} catch (e) {
				}
			}
			b && this.empty().append(a)
		}, null, a, arguments.length)
	}, replaceWith: function () {
		var a = arguments[0];
		return this.domManip(arguments, function (b) {
			a = this.parentNode, n.cleanData(ob(this)), a && a.replaceChild(b, this)
		}), a && (a.length || a.nodeType) ? this : this.remove()
	}, detach: function (a) {
		return this.remove(a, !0)
	}, domManip: function (a, b) {
		a = e.apply([], a);
		var c, d, f, g, h, i, j = 0, l = this.length, m = this, o = l - 1, p = a[0], q = n.isFunction(p);
		if (q || l > 1 && "string" == typeof p && !k.checkClone && eb.test(p))return this.each(function (c) {
			var d = m.eq(c);
			q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b)
		});
		if (l && (c = n.buildFragment(a, this[0].ownerDocument, !1, this), d = c.firstChild, 1 === c.childNodes.length && (c = d), d)) {
			for (f = n.map(ob(c, "script"), kb), g = f.length; l > j; j++)h = c, j !== o && (h = n.clone(h, !0, !0), g && n.merge(f, ob(h, "script"))), b.call(this[j], h, j);
			if (g)for (i = f[f.length - 1].ownerDocument, n.map(f, lb), j = 0; g > j; j++)h = f[j], fb.test(h.type || "") && !L.access(h, "globalEval") && n.contains(i, h) && (h.src ? n._evalUrl && n._evalUrl(h.src) : n.globalEval(h.textContent.replace(hb, "")))
		}
		return this
	}}), n.each({appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith"}, function (a, b) {
		n.fn[a] = function (a) {
			for (var c, d = [], e = n(a), g = e.length - 1, h = 0; g >= h; h++)c = h === g ? this : this.clone(!0), n(e[h])[b](c), f.apply(d, c.get());
			return this.pushStack(d)
		}
	});
	var qb, rb = {};

	function sb(b, c) {
		var d, e = n(c.createElement(b)).appendTo(c.body), f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : n.css(e[0], "display");
		return e.detach(), f
	}

	function tb(a) {
		var b = l, c = rb[a];
		return c || (c = sb(a, b), "none" !== c && c || (qb = (qb || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = qb[0].contentDocument, b.write(), b.close(), c = sb(a, b), qb.detach()), rb[a] = c), c
	}

	var ub = /^margin/, vb = new RegExp("^(" + Q + ")(?!px)[a-z%]+$", "i"), wb = function (a) {
		return a.ownerDocument.defaultView.getComputedStyle(a, null)
	};

	function xb(a, b, c) {
		var d, e, f, g, h = a.style;
		return c = c || wb(a), c && (g = c.getPropertyValue(b) || c[b]), c && ("" !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), vb.test(g) && ub.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g
	}

	function yb(a, b) {
		return{get: function () {
			return a() ? void delete this.get : (this.get = b).apply(this, arguments)
		}}
	}

	!function () {
		var b, c, d = l.documentElement, e = l.createElement("div"), f = l.createElement("div");
		if (f.style) {
			f.style.backgroundClip = "content-box", f.cloneNode(!0).style.backgroundClip = "", k.clearCloneStyle = "content-box" === f.style.backgroundClip, e.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", e.appendChild(f);
			function g() {
				f.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", f.innerHTML = "", d.appendChild(e);
				var g = a.getComputedStyle(f, null);
				b = "1%" !== g.top, c = "4px" === g.width, d.removeChild(e)
			}

			a.getComputedStyle && n.extend(k, {pixelPosition: function () {
				return g(), b
			}, boxSizingReliable: function () {
				return null == c && g(), c
			}, reliableMarginRight: function () {
				var b, c = f.appendChild(l.createElement("div"));
				return c.style.cssText = f.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", c.style.marginRight = c.style.width = "0", f.style.width = "1px", d.appendChild(e), b = !parseFloat(a.getComputedStyle(c, null).marginRight), d.removeChild(e), b
			}})
		}
	}(), n.swap = function (a, b, c, d) {
		var e, f, g = {};
		for (f in b)g[f] = a.style[f], a.style[f] = b[f];
		e = c.apply(a, d || []);
		for (f in b)a.style[f] = g[f];
		return e
	};
	var zb = /^(none|table(?!-c[ea]).+)/, Ab = new RegExp("^(" + Q + ")(.*)$", "i"), Bb = new RegExp("^([+-])=(" + Q + ")", "i"), Cb = {position: "absolute", visibility: "hidden", display: "block"}, Db = {letterSpacing: "0", fontWeight: "400"}, Eb = ["Webkit", "O", "Moz", "ms"];

	function Fb(a, b) {
		if (b in a)return b;
		var c = b[0].toUpperCase() + b.slice(1), d = b, e = Eb.length;
		while (e--)if (b = Eb[e] + c, b in a)return b;
		return d
	}

	function Gb(a, b, c) {
		var d = Ab.exec(b);
		return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
	}

	function Hb(a, b, c, d, e) {
		for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2)"margin" === c && (g += n.css(a, c + R[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + R[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + R[f] + "Width", !0, e))) : (g += n.css(a, "padding" + R[f], !0, e), "padding" !== c && (g += n.css(a, "border" + R[f] + "Width", !0, e)));
		return g
	}

	function Ib(a, b, c) {
		var d = !0, e = "width" === b ? a.offsetWidth : a.offsetHeight, f = wb(a), g = "border-box" === n.css(a, "boxSizing", !1, f);
		if (0 >= e || null == e) {
			if (e = xb(a, b, f), (0 > e || null == e) && (e = a.style[b]), vb.test(e))return e;
			d = g && (k.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
		}
		return e + Hb(a, b, c || (g ? "border" : "content"), d, f) + "px"
	}

	function Jb(a, b) {
		for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++)d = a[g], d.style && (f[g] = L.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && S(d) && (f[g] = L.access(d, "olddisplay", tb(d.nodeName)))) : (e = S(d), "none" === c && e || L.set(d, "olddisplay", e ? c : n.css(d, "display"))));
		for (g = 0; h > g; g++)d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
		return a
	}

	n.extend({cssHooks: {opacity: {get: function (a, b) {
		if (b) {
			var c = xb(a, "opacity");
			return"" === c ? "1" : c
		}
	}}}, cssNumber: {columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0}, cssProps: {"float": "cssFloat"}, style: function (a, b, c, d) {
		if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
			var e, f, g, h = n.camelCase(b), i = a.style;
			return b = n.cssProps[h] || (n.cssProps[h] = Fb(i, h)), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c ? g && "get"in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = Bb.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(n.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || n.cssNumber[h] || (c += "px"), k.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set"in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0)
		}
	}, css: function (a, b, c, d) {
		var e, f, g, h = n.camelCase(b);
		return b = n.cssProps[h] || (n.cssProps[h] = Fb(a.style, h)), g = n.cssHooks[b] || n.cssHooks[h], g && "get"in g && (e = g.get(a, !0, c)), void 0 === e && (e = xb(a, b, d)), "normal" === e && b in Db && (e = Db[b]), "" === c || c ? (f = parseFloat(e), c === !0 || n.isNumeric(f) ? f || 0 : e) : e
	}}), n.each(["height", "width"], function (a, b) {
		n.cssHooks[b] = {get: function (a, c, d) {
			return c ? zb.test(n.css(a, "display")) && 0 === a.offsetWidth ? n.swap(a, Cb, function () {
				return Ib(a, b, d)
			}) : Ib(a, b, d) : void 0
		}, set: function (a, c, d) {
			var e = d && wb(a);
			return Gb(a, c, d ? Hb(a, b, d, "border-box" === n.css(a, "boxSizing", !1, e), e) : 0)
		}}
	}), n.cssHooks.marginRight = yb(k.reliableMarginRight, function (a, b) {
		return b ? n.swap(a, {display: "inline-block"}, xb, [a, "marginRight"]) : void 0
	}), n.each({margin: "", padding: "", border: "Width"}, function (a, b) {
		n.cssHooks[a + b] = {expand: function (c) {
			for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++)e[a + R[d] + b] = f[d] || f[d - 2] || f[0];
			return e
		}}, ub.test(a) || (n.cssHooks[a + b].set = Gb)
	}), n.fn.extend({css: function (a, b) {
		return J(this, function (a, b, c) {
			var d, e, f = {}, g = 0;
			if (n.isArray(b)) {
				for (d = wb(a), e = b.length; e > g; g++)f[b[g]] = n.css(a, b[g], !1, d);
				return f
			}
			return void 0 !== c ? n.style(a, b, c) : n.css(a, b)
		}, a, b, arguments.length > 1)
	}, show: function () {
		return Jb(this, !0)
	}, hide: function () {
		return Jb(this)
	}, toggle: function (a) {
		return"boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
			S(this) ? n(this).show() : n(this).hide()
		})
	}});
	function Kb(a, b, c, d, e) {
		return new Kb.prototype.init(a, b, c, d, e)
	}

	n.Tween = Kb, Kb.prototype = {constructor: Kb, init: function (a, b, c, d, e, f) {
		this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px")
	}, cur: function () {
		var a = Kb.propHooks[this.prop];
		return a && a.get ? a.get(this) : Kb.propHooks._default.get(this)
	}, run: function (a) {
		var b, c = Kb.propHooks[this.prop];
		return this.pos = b = this.options.duration ? n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Kb.propHooks._default.set(this), this
	}}, Kb.prototype.init.prototype = Kb.prototype, Kb.propHooks = {_default: {get: function (a) {
		var b;
		return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
	}, set: function (a) {
		n.fx.step[a.prop] ? n.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[n.cssProps[a.prop]] || n.cssHooks[a.prop]) ? n.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
	}}}, Kb.propHooks.scrollTop = Kb.propHooks.scrollLeft = {set: function (a) {
		a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
	}}, n.easing = {linear: function (a) {
		return a
	}, swing: function (a) {
		return.5 - Math.cos(a * Math.PI) / 2
	}}, n.fx = Kb.prototype.init, n.fx.step = {};
	var Lb, Mb, Nb = /^(?:toggle|show|hide)$/, Ob = new RegExp("^(?:([+-])=|)(" + Q + ")([a-z%]*)$", "i"), Pb = /queueHooks$/, Qb = [Vb], Rb = {"*": [function (a, b) {
		var c = this.createTween(a, b), d = c.cur(), e = Ob.exec(b), f = e && e[3] || (n.cssNumber[a] ? "" : "px"), g = (n.cssNumber[a] || "px" !== f && +d) && Ob.exec(n.css(c.elem, a)), h = 1, i = 20;
		if (g && g[3] !== f) {
			f = f || g[3], e = e || [], g = +d || 1;
			do h = h || ".5", g /= h, n.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i)
		}
		return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
	}]};

	function Sb() {
		return setTimeout(function () {
			Lb = void 0
		}), Lb = n.now()
	}

	function Tb(a, b) {
		var c, d = 0, e = {height: a};
		for (b = b ? 1 : 0; 4 > d; d += 2 - b)c = R[d], e["margin" + c] = e["padding" + c] = a;
		return b && (e.opacity = e.width = a), e
	}

	function Ub(a, b, c) {
		for (var d, e = (Rb[b] || []).concat(Rb["*"]), f = 0, g = e.length; g > f; f++)if (d = e[f].call(c, b, a))return d
	}

	function Vb(a, b, c) {
		var d, e, f, g, h, i, j, k, l = this, m = {}, o = a.style, p = a.nodeType && S(a), q = L.get(a, "fxshow");
		c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () {
			h.unqueued || i()
		}), h.unqueued++, l.always(function () {
			l.always(function () {
				h.unqueued--, n.queue(a, "fx").length || h.empty.fire()
			})
		})), 1 === a.nodeType && ("height"in b || "width"in b) && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = n.css(a, "display"), k = "none" === j ? L.get(a, "olddisplay") || tb(a.nodeName) : j, "inline" === k && "none" === n.css(a, "float") && (o.display = "inline-block")), c.overflow && (o.overflow = "hidden", l.always(function () {
			o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2]
		}));
		for (d in b)if (e = b[d], Nb.exec(e)) {
			if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
				if ("show" !== e || !q || void 0 === q[d])continue;
				p = !0
			}
			m[d] = q && q[d] || n.style(a, d)
		} else j = void 0;
		if (n.isEmptyObject(m))"inline" === ("none" === j ? tb(a.nodeName) : j) && (o.display = j); else {
			q ? "hidden"in q && (p = q.hidden) : q = L.access(a, "fxshow", {}), f && (q.hidden = !p), p ? n(a).show() : l.done(function () {
				n(a).hide()
			}), l.done(function () {
				var b;
				L.remove(a, "fxshow");
				for (b in m)n.style(a, b, m[b])
			});
			for (d in m)g = Ub(p ? q[d] : 0, d, l), d in q || (q[d] = g.start, p && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
		}
	}

	function Wb(a, b) {
		var c, d, e, f, g;
		for (c in a)if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand"in g) {
			f = g.expand(f), delete a[d];
			for (c in f)c in a || (a[c] = f[c], b[c] = e)
		} else b[d] = e
	}

	function Xb(a, b, c) {
		var d, e, f = 0, g = Qb.length, h = n.Deferred().always(function () {
			delete i.elem
		}), i = function () {
			if (e)return!1;
			for (var b = Lb || Sb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++)j.tweens[g].run(f);
			return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
		}, j = h.promise({elem: a, props: n.extend({}, b), opts: n.extend(!0, {specialEasing: {}}, c), originalProperties: b, originalOptions: c, startTime: Lb || Sb(), duration: c.duration, tweens: [], createTween: function (b, c) {
			var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
			return j.tweens.push(d), d
		}, stop: function (b) {
			var c = 0, d = b ? j.tweens.length : 0;
			if (e)return this;
			for (e = !0; d > c; c++)j.tweens[c].run(1);
			return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
		}}), k = j.props;
		for (Wb(k, j.opts.specialEasing); g > f; f++)if (d = Qb[f].call(j, a, k, j.opts))return d;
		return n.map(k, Ub, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, {elem: a, anim: j, queue: j.opts.queue})), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
	}

	n.Animation = n.extend(Xb, {tweener: function (a, b) {
		n.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
		for (var c, d = 0, e = a.length; e > d; d++)c = a[d], Rb[c] = Rb[c] || [], Rb[c].unshift(b)
	}, prefilter: function (a, b) {
		b ? Qb.unshift(a) : Qb.push(a)
	}}), n.speed = function (a, b, c) {
		var d = a && "object" == typeof a ? n.extend({}, a) : {complete: c || !c && b || n.isFunction(a) && a, duration: a, easing: c && b || b && !n.isFunction(b) && b};
		return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function () {
			n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue)
		}, d
	}, n.fn.extend({fadeTo: function (a, b, c, d) {
		return this.filter(S).css("opacity", 0).show().end().animate({opacity: b}, a, c, d)
	}, animate: function (a, b, c, d) {
		var e = n.isEmptyObject(a), f = n.speed(b, c, d), g = function () {
			var b = Xb(this, n.extend({}, a), f);
			(e || L.get(this, "finish")) && b.stop(!0)
		};
		return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
	}, stop: function (a, b, c) {
		var d = function (a) {
			var b = a.stop;
			delete a.stop, b(c)
		};
		return"string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
			var b = !0, e = null != a && a + "queueHooks", f = n.timers, g = L.get(this);
			if (e)g[e] && g[e].stop && d(g[e]); else for (e in g)g[e] && g[e].stop && Pb.test(e) && d(g[e]);
			for (e = f.length; e--;)f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
			(b || !c) && n.dequeue(this, a)
		})
	}, finish: function (a) {
		return a !== !1 && (a = a || "fx"), this.each(function () {
			var b, c = L.get(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = n.timers, g = d ? d.length : 0;
			for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;)f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
			for (b = 0; g > b; b++)d[b] && d[b].finish && d[b].finish.call(this);
			delete c.finish
		})
	}}), n.each(["toggle", "show", "hide"], function (a, b) {
		var c = n.fn[b];
		n.fn[b] = function (a, d, e) {
			return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(Tb(b, !0), a, d, e)
		}
	}), n.each({slideDown: Tb("show"), slideUp: Tb("hide"), slideToggle: Tb("toggle"), fadeIn: {opacity: "show"}, fadeOut: {opacity: "hide"}, fadeToggle: {opacity: "toggle"}}, function (a, b) {
		n.fn[a] = function (a, c, d) {
			return this.animate(b, a, c, d)
		}
	}), n.timers = [], n.fx.tick = function () {
		var a, b = 0, c = n.timers;
		for (Lb = n.now(); b < c.length; b++)a = c[b], a() || c[b] !== a || c.splice(b--, 1);
		c.length || n.fx.stop(), Lb = void 0
	}, n.fx.timer = function (a) {
		n.timers.push(a), a() ? n.fx.start() : n.timers.pop()
	}, n.fx.interval = 13, n.fx.start = function () {
		Mb || (Mb = setInterval(n.fx.tick, n.fx.interval))
	}, n.fx.stop = function () {
		clearInterval(Mb), Mb = null
	}, n.fx.speeds = {slow: 600, fast: 200, _default: 400}, n.fn.delay = function (a, b) {
		return a = n.fx ? n.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function (b, c) {
			var d = setTimeout(b, a);
			c.stop = function () {
				clearTimeout(d)
			}
		})
	}, function () {
		var a = l.createElement("input"), b = l.createElement("select"), c = b.appendChild(l.createElement("option"));
		a.type = "checkbox", k.checkOn = "" !== a.value, k.optSelected = c.selected, b.disabled = !0, k.optDisabled = !c.disabled, a = l.createElement("input"), a.value = "t", a.type = "radio", k.radioValue = "t" === a.value
	}();
	var Yb, Zb, $b = n.expr.attrHandle;
	n.fn.extend({attr: function (a, b) {
		return J(this, n.attr, a, b, arguments.length > 1)
	}, removeAttr: function (a) {
		return this.each(function () {
			n.removeAttr(this, a)
		})
	}}), n.extend({attr: function (a, b, c) {
		var d, e, f = a.nodeType;
		if (a && 3 !== f && 8 !== f && 2 !== f)return typeof a.getAttribute === U ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), d = n.attrHooks[b] || (n.expr.match.bool.test(b) ? Zb : Yb)), void 0 === c ? d && "get"in d && null !== (e = d.get(a, b)) ? e : (e = n.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set"in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void n.removeAttr(a, b))
	}, removeAttr: function (a, b) {
		var c, d, e = 0, f = b && b.match(E);
		if (f && 1 === a.nodeType)while (c = f[e++])d = n.propFix[c] || c, n.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c)
	}, attrHooks: {type: {set: function (a, b) {
		if (!k.radioValue && "radio" === b && n.nodeName(a, "input")) {
			var c = a.value;
			return a.setAttribute("type", b), c && (a.value = c), b
		}
	}}}}), Zb = {set: function (a, b, c) {
		return b === !1 ? n.removeAttr(a, c) : a.setAttribute(c, c), c
	}}, n.each(n.expr.match.bool.source.match(/\w+/g), function (a, b) {
		var c = $b[b] || n.find.attr;
		$b[b] = function (a, b, d) {
			var e, f;
			return d || (f = $b[b], $b[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, $b[b] = f), e
		}
	});
	var _b = /^(?:input|select|textarea|button)$/i;
	n.fn.extend({prop: function (a, b) {
		return J(this, n.prop, a, b, arguments.length > 1)
	}, removeProp: function (a) {
		return this.each(function () {
			delete this[n.propFix[a] || a]
		})
	}}), n.extend({propFix: {"for": "htmlFor", "class": "className"}, prop: function (a, b, c) {
		var d, e, f, g = a.nodeType;
		if (a && 3 !== g && 8 !== g && 2 !== g)return f = 1 !== g || !n.isXMLDoc(a), f && (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && "set"in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get"in e && null !== (d = e.get(a, b)) ? d : a[b]
	}, propHooks: {tabIndex: {get: function (a) {
		return a.hasAttribute("tabindex") || _b.test(a.nodeName) || a.href ? a.tabIndex : -1
	}}}}), k.optSelected || (n.propHooks.selected = {get: function (a) {
		var b = a.parentNode;
		return b && b.parentNode && b.parentNode.selectedIndex, null
	}}), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
		n.propFix[this.toLowerCase()] = this
	});
	var ac = /[\t\r\n\f]/g;
	n.fn.extend({addClass: function (a) {
		var b, c, d, e, f, g, h = "string" == typeof a && a, i = 0, j = this.length;
		if (n.isFunction(a))return this.each(function (b) {
			n(this).addClass(a.call(this, b, this.className))
		});
		if (h)for (b = (a || "").match(E) || []; j > i; i++)if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ac, " ") : " ")) {
			f = 0;
			while (e = b[f++])d.indexOf(" " + e + " ") < 0 && (d += e + " ");
			g = n.trim(d), c.className !== g && (c.className = g)
		}
		return this
	}, removeClass: function (a) {
		var b, c, d, e, f, g, h = 0 === arguments.length || "string" == typeof a && a, i = 0, j = this.length;
		if (n.isFunction(a))return this.each(function (b) {
			n(this).removeClass(a.call(this, b, this.className))
		});
		if (h)for (b = (a || "").match(E) || []; j > i; i++)if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ac, " ") : "")) {
			f = 0;
			while (e = b[f++])while (d.indexOf(" " + e + " ") >= 0)d = d.replace(" " + e + " ", " ");
			g = a ? n.trim(d) : "", c.className !== g && (c.className = g)
		}
		return this
	}, toggleClass: function (a, b) {
		var c = typeof a;
		return"boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(n.isFunction(a) ? function (c) {
			n(this).toggleClass(a.call(this, c, this.className, b), b)
		} : function () {
			if ("string" === c) {
				var b, d = 0, e = n(this), f = a.match(E) || [];
				while (b = f[d++])e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
			} else(c === U || "boolean" === c) && (this.className && L.set(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : L.get(this, "__className__") || "")
		})
	}, hasClass: function (a) {
		for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(ac, " ").indexOf(b) >= 0)return!0;
		return!1
	}});
	var bc = /\r/g;
	n.fn.extend({val: function (a) {
		var b, c, d, e = this[0];
		{
			if (arguments.length)return d = n.isFunction(a), this.each(function (c) {
				var e;
				1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function (a) {
					return null == a ? "" : a + ""
				})), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set"in b && void 0 !== b.set(this, e, "value") || (this.value = e))
			});
			if (e)return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get"in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(bc, "") : null == c ? "" : c)
		}
	}}), n.extend({valHooks: {option: {get: function (a) {
		var b = n.find.attr(a, "value");
		return null != b ? b : n.trim(n.text(a))
	}}, select: {get: function (a) {
		for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)if (c = d[i], !(!c.selected && i !== e || (k.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && n.nodeName(c.parentNode, "optgroup"))) {
			if (b = n(c).val(), f)return b;
			g.push(b)
		}
		return g
	}, set: function (a, b) {
		var c, d, e = a.options, f = n.makeArray(b), g = e.length;
		while (g--)d = e[g], (d.selected = n.inArray(d.value, f) >= 0) && (c = !0);
		return c || (a.selectedIndex = -1), f
	}}}}), n.each(["radio", "checkbox"], function () {
		n.valHooks[this] = {set: function (a, b) {
			return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) >= 0 : void 0
		}}, k.checkOn || (n.valHooks[this].get = function (a) {
			return null === a.getAttribute("value") ? "on" : a.value
		})
	}), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
		n.fn[b] = function (a, c) {
			return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
		}
	}), n.fn.extend({hover: function (a, b) {
		return this.mouseenter(a).mouseleave(b || a)
	}, bind: function (a, b, c) {
		return this.on(a, null, b, c)
	}, unbind: function (a, b) {
		return this.off(a, null, b)
	}, delegate: function (a, b, c, d) {
		return this.on(b, a, c, d)
	}, undelegate: function (a, b, c) {
		return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
	}});
	var cc = n.now(), dc = /\?/;
	n.parseJSON = function (a) {
		return JSON.parse(a + "")
	}, n.parseXML = function (a) {
		var b, c;
		if (!a || "string" != typeof a)return null;
		try {
			c = new DOMParser, b = c.parseFromString(a, "text/xml")
		} catch (d) {
			b = void 0
		}
		return(!b || b.getElementsByTagName("parsererror").length) && n.error("Invalid XML: " + a), b
	};
	var ec, fc, gc = /#.*$/, hc = /([?&])_=[^&]*/, ic = /^(.*?):[ \t]*([^\r\n]*)$/gm, jc = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, kc = /^(?:GET|HEAD)$/, lc = /^\/\//, mc = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, nc = {}, oc = {}, pc = "*/".concat("*");
	try {
		fc = location.href
	} catch (qc) {
		fc = l.createElement("a"), fc.href = "", fc = fc.href
	}
	ec = mc.exec(fc.toLowerCase()) || [];
	function rc(a) {
		return function (b, c) {
			"string" != typeof b && (c = b, b = "*");
			var d, e = 0, f = b.toLowerCase().match(E) || [];
			if (n.isFunction(c))while (d = f[e++])"+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
		}
	}

	function sc(a, b, c, d) {
		var e = {}, f = a === oc;

		function g(h) {
			var i;
			return e[h] = !0, n.each(a[h] || [], function (a, h) {
				var j = h(b, c, d);
				return"string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
			}), i
		}

		return g(b.dataTypes[0]) || !e["*"] && g("*")
	}

	function tc(a, b) {
		var c, d, e = n.ajaxSettings.flatOptions || {};
		for (c in b)void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
		return d && n.extend(!0, a, d), a
	}

	function uc(a, b, c) {
		var d, e, f, g, h = a.contents, i = a.dataTypes;
		while ("*" === i[0])i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
		if (d)for (e in h)if (h[e] && h[e].test(d)) {
			i.unshift(e);
			break
		}
		if (i[0]in c)f = i[0]; else {
			for (e in c) {
				if (!i[0] || a.converters[e + " " + i[0]]) {
					f = e;
					break
				}
				g || (g = e)
			}
			f = f || g
		}
		return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
	}

	function vc(a, b, c, d) {
		var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
		if (k[1])for (g in a.converters)j[g.toLowerCase()] = a.converters[g];
		f = k.shift();
		while (f)if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())if ("*" === f)f = i; else if ("*" !== i && i !== f) {
			if (g = j[i + " " + f] || j["* " + f], !g)for (e in j)if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
				g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
				break
			}
			if (g !== !0)if (g && a["throws"])b = g(b); else try {
				b = g(b)
			} catch (l) {
				return{state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f}
			}
		}
		return{state: "success", data: b}
	}

	n.extend({active: 0, lastModified: {}, etag: {}, ajaxSettings: {url: fc, type: "GET", isLocal: jc.test(ec[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: {"*": pc, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript"}, contents: {xml: /xml/, html: /html/, json: /json/}, responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"}, converters: {"* text": String, "text html": !0, "text json": n.parseJSON, "text xml": n.parseXML}, flatOptions: {url: !0, context: !0}}, ajaxSetup: function (a, b) {
		return b ? tc(tc(a, n.ajaxSettings), b) : tc(n.ajaxSettings, a)
	}, ajaxPrefilter: rc(nc), ajaxTransport: rc(oc), ajax: function (a, b) {
		"object" == typeof a && (b = a, a = void 0), b = b || {};
		var c, d, e, f, g, h, i, j, k = n.ajaxSetup({}, b), l = k.context || k, m = k.context && (l.nodeType || l.jquery) ? n(l) : n.event, o = n.Deferred(), p = n.Callbacks("once memory"), q = k.statusCode || {}, r = {}, s = {}, t = 0, u = "canceled", v = {readyState: 0, getResponseHeader: function (a) {
			var b;
			if (2 === t) {
				if (!f) {
					f = {};
					while (b = ic.exec(e))f[b[1].toLowerCase()] = b[2]
				}
				b = f[a.toLowerCase()]
			}
			return null == b ? null : b
		}, getAllResponseHeaders: function () {
			return 2 === t ? e : null
		}, setRequestHeader: function (a, b) {
			var c = a.toLowerCase();
			return t || (a = s[c] = s[c] || a, r[a] = b), this
		}, overrideMimeType: function (a) {
			return t || (k.mimeType = a), this
		}, statusCode: function (a) {
			var b;
			if (a)if (2 > t)for (b in a)q[b] = [q[b], a[b]]; else v.always(a[v.status]);
			return this
		}, abort: function (a) {
			var b = a || u;
			return c && c.abort(b), x(0, b), this
		}};
		if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || fc) + "").replace(gc, "").replace(lc, ec[1] + "//"), k.type = b.method || b.type || k.method || k.type, k.dataTypes = n.trim(k.dataType || "*").toLowerCase().match(E) || [""], null == k.crossDomain && (h = mc.exec(k.url.toLowerCase()), k.crossDomain = !(!h || h[1] === ec[1] && h[2] === ec[2] && (h[3] || ("http:" === h[1] ? "80" : "443")) === (ec[3] || ("http:" === ec[1] ? "80" : "443")))), k.data && k.processData && "string" != typeof k.data && (k.data = n.param(k.data, k.traditional)), sc(nc, k, b, v), 2 === t)return v;
		i = k.global, i && 0 === n.active++ && n.event.trigger("ajaxStart"), k.type = k.type.toUpperCase(), k.hasContent = !kc.test(k.type), d = k.url, k.hasContent || (k.data && (d = k.url += (dc.test(d) ? "&" : "?") + k.data, delete k.data), k.cache === !1 && (k.url = hc.test(d) ? d.replace(hc, "$1_=" + cc++) : d + (dc.test(d) ? "&" : "?") + "_=" + cc++)), k.ifModified && (n.lastModified[d] && v.setRequestHeader("If-Modified-Since", n.lastModified[d]), n.etag[d] && v.setRequestHeader("If-None-Match", n.etag[d])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType), v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + pc + "; q=0.01" : "") : k.accepts["*"]);
		for (j in k.headers)v.setRequestHeader(j, k.headers[j]);
		if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t))return v.abort();
		u = "abort";
		for (j in{success: 1, error: 1, complete: 1})v[j](k[j]);
		if (c = sc(oc, k, b, v)) {
			v.readyState = 1, i && m.trigger("ajaxSend", [v, k]), k.async && k.timeout > 0 && (g = setTimeout(function () {
				v.abort("timeout")
			}, k.timeout));
			try {
				t = 1, c.send(r, x)
			} catch (w) {
				if (!(2 > t))throw w;
				x(-1, w)
			}
		} else x(-1, "No Transport");
		function x(a, b, f, h) {
			var j, r, s, u, w, x = b;
			2 !== t && (t = 2, g && clearTimeout(g), c = void 0, e = h || "", v.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, f && (u = uc(k, v, f)), u = vc(k, u, v, j), j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"), w && (n.lastModified[d] = w), w = v.getResponseHeader("etag"), w && (n.etag[d] = w)), 204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state, r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || x) + "", j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]), v.statusCode(q), q = void 0, i && m.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]), p.fireWith(l, [v, x]), i && (m.trigger("ajaxComplete", [v, k]), --n.active || n.event.trigger("ajaxStop")))
		}

		return v
	}, getJSON: function (a, b, c) {
		return n.get(a, b, c, "json")
	}, getScript: function (a, b) {
		return n.get(a, void 0, b, "script")
	}}), n.each(["get", "post"], function (a, b) {
		n[b] = function (a, c, d, e) {
			return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax({url: a, type: b, dataType: e, data: c, success: d})
		}
	}), n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
		n.fn[b] = function (a) {
			return this.on(b, a)
		}
	}), n._evalUrl = function (a) {
		return n.ajax({url: a, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0})
	}, n.fn.extend({wrapAll: function (a) {
		var b;
		return n.isFunction(a) ? this.each(function (b) {
			n(this).wrapAll(a.call(this, b))
		}) : (this[0] && (b = n(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
			var a = this;
			while (a.firstElementChild)a = a.firstElementChild;
			return a
		}).append(this)), this)
	}, wrapInner: function (a) {
		return this.each(n.isFunction(a) ? function (b) {
			n(this).wrapInner(a.call(this, b))
		} : function () {
			var b = n(this), c = b.contents();
			c.length ? c.wrapAll(a) : b.append(a)
		})
	}, wrap: function (a) {
		var b = n.isFunction(a);
		return this.each(function (c) {
			n(this).wrapAll(b ? a.call(this, c) : a)
		})
	}, unwrap: function () {
		return this.parent().each(function () {
			n.nodeName(this, "body") || n(this).replaceWith(this.childNodes)
		}).end()
	}}), n.expr.filters.hidden = function (a) {
		return a.offsetWidth <= 0 && a.offsetHeight <= 0
	}, n.expr.filters.visible = function (a) {
		return!n.expr.filters.hidden(a)
	};
	var wc = /%20/g, xc = /\[\]$/, yc = /\r?\n/g, zc = /^(?:submit|button|image|reset|file)$/i, Ac = /^(?:input|select|textarea|keygen)/i;

	function Bc(a, b, c, d) {
		var e;
		if (n.isArray(b))n.each(b, function (b, e) {
			c || xc.test(a) ? d(a, e) : Bc(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
		}); else if (c || "object" !== n.type(b))d(a, b); else for (e in b)Bc(a + "[" + e + "]", b[e], c, d)
	}

	n.param = function (a, b) {
		var c, d = [], e = function (a, b) {
			b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
		};
		if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a))n.each(a, function () {
			e(this.name, this.value)
		}); else for (c in a)Bc(c, a[c], b, e);
		return d.join("&").replace(wc, "+")
	}, n.fn.extend({serialize: function () {
		return n.param(this.serializeArray())
	}, serializeArray: function () {
		return this.map(function () {
			var a = n.prop(this, "elements");
			return a ? n.makeArray(a) : this
		}).filter(function () {
			var a = this.type;
			return this.name && !n(this).is(":disabled") && Ac.test(this.nodeName) && !zc.test(a) && (this.checked || !T.test(a))
		}).map(function (a, b) {
			var c = n(this).val();
			return null == c ? null : n.isArray(c) ? n.map(c, function (a) {
				return{name: b.name, value: a.replace(yc, "\r\n")}
			}) : {name: b.name, value: c.replace(yc, "\r\n")}
		}).get()
	}}), n.ajaxSettings.xhr = function () {
		try {
			return new XMLHttpRequest
		} catch (a) {
		}
	};
	var Cc = 0, Dc = {}, Ec = {0: 200, 1223: 204}, Fc = n.ajaxSettings.xhr();
	a.ActiveXObject && n(a).on("unload", function () {
		for (var a in Dc)Dc[a]()
	}), k.cors = !!Fc && "withCredentials"in Fc, k.ajax = Fc = !!Fc, n.ajaxTransport(function (a) {
		var b;
		return k.cors || Fc && !a.crossDomain ? {send: function (c, d) {
			var e, f = a.xhr(), g = ++Cc;
			if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)for (e in a.xhrFields)f[e] = a.xhrFields[e];
			a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
			for (e in c)f.setRequestHeader(e, c[e]);
			b = function (a) {
				return function () {
					b && (delete Dc[g], b = f.onload = f.onerror = null, "abort" === a ? f.abort() : "error" === a ? d(f.status, f.statusText) : d(Ec[f.status] || f.status, f.statusText, "string" == typeof f.responseText ? {text: f.responseText} : void 0, f.getAllResponseHeaders()))
				}
			}, f.onload = b(), f.onerror = b("error"), b = Dc[g] = b("abort");
			try {
				f.send(a.hasContent && a.data || null)
			} catch (h) {
				if (b)throw h
			}
		}, abort: function () {
			b && b()
		}} : void 0
	}), n.ajaxSetup({accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"}, contents: {script: /(?:java|ecma)script/}, converters: {"text script": function (a) {
		return n.globalEval(a), a
	}}}), n.ajaxPrefilter("script", function (a) {
		void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET")
	}), n.ajaxTransport("script", function (a) {
		if (a.crossDomain) {
			var b, c;
			return{send: function (d, e) {
				b = n("<script>").prop({async: !0, charset: a.scriptCharset, src: a.url}).on("load error", c = function (a) {
					b.remove(), c = null, a && e("error" === a.type ? 404 : 200, a.type)
				}), l.head.appendChild(b[0])
			}, abort: function () {
				c && c()
			}}
		}
	});
	var Gc = [], Hc = /(=)\?(?=&|$)|\?\?/;
	n.ajaxSetup({jsonp: "callback", jsonpCallback: function () {
		var a = Gc.pop() || n.expando + "_" + cc++;
		return this[a] = !0, a
	}}), n.ajaxPrefilter("json jsonp", function (b, c, d) {
		var e, f, g, h = b.jsonp !== !1 && (Hc.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && Hc.test(b.data) && "data");
		return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Hc, "$1" + e) : b.jsonp !== !1 && (b.url += (dc.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
			return g || n.error(e + " was not called"), g[0]
		}, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
			g = arguments
		}, d.always(function () {
			a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Gc.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0
		}), "script") : void 0
	}), n.parseHTML = function (a, b, c) {
		if (!a || "string" != typeof a)return null;
		"boolean" == typeof b && (c = b, b = !1), b = b || l;
		var d = v.exec(a), e = !c && [];
		return d ? [b.createElement(d[1])] : (d = n.buildFragment([a], b, e), e && e.length && n(e).remove(), n.merge([], d.childNodes))
	};
	var Ic = n.fn.load;
	n.fn.load = function (a, b, c) {
		if ("string" != typeof a && Ic)return Ic.apply(this, arguments);
		var d, e, f, g = this, h = a.indexOf(" ");
		return h >= 0 && (d = n.trim(a.slice(h)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && n.ajax({url: a, type: e, dataType: "html", data: b}).done(function (a) {
			f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a)
		}).complete(c && function (a, b) {
			g.each(c, f || [a.responseText, b, a])
		}), this
	}, n.expr.filters.animated = function (a) {
		return n.grep(n.timers,function (b) {
			return a === b.elem
		}).length
	};
	var Jc = a.document.documentElement;

	function Kc(a) {
		return n.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
	}

	n.offset = {setOffset: function (a, b, c) {
		var d, e, f, g, h, i, j, k = n.css(a, "position"), l = n(a), m = {};
		"static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using"in b ? b.using.call(a, m) : l.css(m)
	}}, n.fn.extend({offset: function (a) {
		if (arguments.length)return void 0 === a ? this : this.each(function (b) {
			n.offset.setOffset(this, a, b)
		});
		var b, c, d = this[0], e = {top: 0, left: 0}, f = d && d.ownerDocument;
		if (f)return b = f.documentElement, n.contains(b, d) ? (typeof d.getBoundingClientRect !== U && (e = d.getBoundingClientRect()), c = Kc(f), {top: e.top + c.pageYOffset - b.clientTop, left: e.left + c.pageXOffset - b.clientLeft}) : e
	}, position: function () {
		if (this[0]) {
			var a, b, c = this[0], d = {top: 0, left: 0};
			return"fixed" === n.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (d = a.offset()), d.top += n.css(a[0], "borderTopWidth", !0), d.left += n.css(a[0], "borderLeftWidth", !0)), {top: b.top - d.top - n.css(c, "marginTop", !0), left: b.left - d.left - n.css(c, "marginLeft", !0)}
		}
	}, offsetParent: function () {
		return this.map(function () {
			var a = this.offsetParent || Jc;
			while (a && !n.nodeName(a, "html") && "static" === n.css(a, "position"))a = a.offsetParent;
			return a || Jc
		})
	}}), n.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (b, c) {
		var d = "pageYOffset" === c;
		n.fn[b] = function (e) {
			return J(this, function (b, e, f) {
				var g = Kc(b);
				return void 0 === f ? g ? g[c] : b[e] : void(g ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset) : b[e] = f)
			}, b, e, arguments.length, null)
		}
	}), n.each(["top", "left"], function (a, b) {
		n.cssHooks[b] = yb(k.pixelPosition, function (a, c) {
			return c ? (c = xb(a, b), vb.test(c) ? n(a).position()[b] + "px" : c) : void 0
		})
	}), n.each({Height: "height", Width: "width"}, function (a, b) {
		n.each({padding: "inner" + a, content: b, "": "outer" + a}, function (c, d) {
			n.fn[d] = function (d, e) {
				var f = arguments.length && (c || "boolean" != typeof d), g = c || (d === !0 || e === !0 ? "margin" : "border");
				return J(this, function (b, c, d) {
					var e;
					return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g)
				}, b, f ? d : void 0, f, null)
			}
		})
	}), n.fn.size = function () {
		return this.length
	}, n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
		return n
	});
	var Lc = a.jQuery, Mc = a.$;
	return n.noConflict = function (b) {
		return a.$ === n && (a.$ = Mc), b && a.jQuery === n && (a.jQuery = Lc), n
	}, typeof b === U && (a.jQuery = a.$ = n), n
});
//# sourceMappingURL=jquery.min.map
/**
 *  Ajax Autocomplete for jQuery, version 1.2.9
 *  (c) 2013 Tomas Kirda
 *
 *  Ajax Autocomplete for jQuery is freely distributable under the terms of an MIT-style license.
 *  For details, see the web site: https://github.com/devbridge/jQuery-Autocomplete
 *
 */
(function (d) {
	"function" === typeof define && define.amd ? define(["jquery"], d) : d(jQuery)
})(function (d) {
	function g(a, b) {
		var c = function () {
		}, c = {autoSelectFirst: !1, appendTo: "body", serviceUrl: null, lookup: null, onSelect: null, width: "auto", minChars: 1, maxHeight: 300, deferRequestBy: 0, params: {}, formatResult: g.formatResult, delimiter: null, zIndex: 9999, type: "GET", noCache: !1, onSearchStart: c, onSearchComplete: c, onSearchError: c, containerClass: "autocomplete-suggestions", tabDisabled: !1, dataType: "text", currentRequest: null, triggerSelectOnValidInput: !0,
			lookupFilter: function (a, b, c) {
				return-1 !== a.value.toLowerCase().indexOf(c)
			}, paramName: "query", transformResult: function (a) {
				return"string" === typeof a ? d.parseJSON(a) : a
			}};
		this.element = a;
		this.el = d(a);
		this.suggestions = [];
		this.badQueries = [];
		this.selectedIndex = -1;
		this.currentValue = this.element.value;
		this.intervalId = 0;
		this.cachedResponse = {};
		this.onChange = this.onChangeInterval = null;
		this.isLocal = !1;
		this.suggestionsContainer = null;
		this.options = d.extend({}, c, b);
		this.classes = {selected: "autocomplete-selected", suggestion: "autocomplete-suggestion"};
		this.hint = null;
		this.hintValue = "";
		this.selection = null;
		this.initialize();
		this.setOptions(b)
	}

	var k = function () {
		return{escapeRegExChars: function (a) {
			return a.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
		}, createNode: function (a) {
			var b = document.createElement("div");
			b.className = a;
			b.style.position = "absolute";
			b.style.display = "none";
			return b
		}}
	}();
	g.utils = k;
	d.Autocomplete = g;
	g.formatResult = function (a, b) {
		var c = "(" + k.escapeRegExChars(b) + ")";
		return a.value.replace(RegExp(c, "gi"), "<strong>$1</strong>")
	};
	g.prototype =
	{killerFn: null, initialize: function () {
		var a = this, b = "." + a.classes.suggestion, c = a.classes.selected, e = a.options, f;
		a.element.setAttribute("autocomplete", "off");
		a.killerFn = function (b) {
			0 === d(b.target).closest("." + a.options.containerClass).length && (a.killSuggestions(), a.disableKillerFn())
		};
		a.suggestionsContainer = g.utils.createNode(e.containerClass);
		f = d(a.suggestionsContainer);
		f.appendTo(e.appendTo);
		"auto" !== e.width && f.width(e.width);
		f.on("mouseover.autocomplete", b, function () {
			a.activate(d(this).data("index"))
		});
		f.on("mouseout.autocomplete", function () {
			a.selectedIndex = -1;
			f.children("." + c).removeClass(c)
		});
		f.on("click.autocomplete", b, function () {
			a.select(d(this).data("index"))
		});
		a.fixPosition();
		a.fixPositionCapture = function () {
			a.visible && a.fixPosition()
		};
		d(window).on("resize.autocomplete", a.fixPositionCapture);
		a.el.on("keydown.autocomplete", function (b) {
			a.onKeyPress(b)
		});
		a.el.on("keyup.autocomplete", function (b) {
			a.onKeyUp(b)
		});
		a.el.on("blur.autocomplete", function () {
			a.onBlur()
		});
		a.el.on("focus.autocomplete", function () {
			a.onFocus()
		});
		a.el.on("change.autocomplete", function (b) {
			a.onKeyUp(b)
		})
	}, onFocus: function () {
		this.fixPosition();
		if (this.options.minChars <= this.el.val().length)this.onValueChange()
	}, onBlur: function () {
		this.enableKillerFn()
	}, setOptions: function (a) {
		var b = this.options;
		d.extend(b, a);
		if (this.isLocal = d.isArray(b.lookup))b.lookup = this.verifySuggestionsFormat(b.lookup);
		d(this.suggestionsContainer).css({"max-height": b.maxHeight + "px", width: b.width + "px", "z-index": b.zIndex})
	}, clearCache: function () {
		this.cachedResponse = {};
		this.badQueries =
			[]
	}, clear: function () {
		this.clearCache();
		this.currentValue = "";
		this.suggestions = []
	}, disable: function () {
		this.disabled = !0;
		this.currentRequest && this.currentRequest.abort()
	}, enable: function () {
		this.disabled = !1
	}, fixPosition: function () {
		var a;
		"body" === this.options.appendTo && (a = this.el.offset(), a = {top: a.top + this.el.outerHeight() + "px", left: a.left + "px"}, "auto" === this.options.width && (a.width = this.el.outerWidth() - 2 + "px"), d(this.suggestionsContainer).css(a))
	}, enableKillerFn: function () {
		d(document).on("click.autocomplete",
			this.killerFn)
	}, disableKillerFn: function () {
		d(document).off("click.autocomplete", this.killerFn)
	}, killSuggestions: function () {
		var a = this;
		a.stopKillSuggestions();
		a.intervalId = window.setInterval(function () {
			a.hide();
			a.stopKillSuggestions()
		}, 50)
	}, stopKillSuggestions: function () {
		window.clearInterval(this.intervalId)
	}, isCursorAtEnd: function () {
		var a = this.el.val().length, b = this.element.selectionStart;
		return"number" === typeof b ? b === a : document.selection ? (b = document.selection.createRange(), b.moveStart("character",
			-a), a === b.text.length) : !0
	}, onKeyPress: function (a) {
		if (!this.disabled && !this.visible && 40 === a.which && this.currentValue)this.suggest(); else if (!this.disabled && this.visible) {
			switch (a.which) {
				case 27:
					this.el.val(this.currentValue);
					this.hide();
					break;
				case 39:
					if (this.hint && this.options.onHint && this.isCursorAtEnd()) {
						this.selectHint();
						break
					}
					return;
				case 9:
					if (this.hint && this.options.onHint) {
						this.selectHint();
						return
					}
				case 13:
					if (-1 === this.selectedIndex) {
						this.hide();
						return
					}
					this.select(this.selectedIndex);
					if (9 === a.which &&
						!1 === this.options.tabDisabled)return;
					break;
				case 38:
					this.moveUp();
					break;
				case 40:
					this.moveDown();
					break;
				default:
					return
			}
			a.stopImmediatePropagation();
			a.preventDefault()
		}
	}, onKeyUp: function (a) {
		var b = this;
		if (!b.disabled) {
			switch (a.which) {
				case 38:
				case 40:
					return
			}
			clearInterval(b.onChangeInterval);
			if (b.currentValue !== b.el.val())if (b.findBestHint(), 0 < b.options.deferRequestBy)b.onChangeInterval = setInterval(function () {
				b.onValueChange()
			}, b.options.deferRequestBy); else b.onValueChange()
		}
	}, onValueChange: function () {
		var a =
			this.options, b = this.el.val(), c = this.getQuery(b);
		this.selection && (this.selection = null, (a.onInvalidateSelection || d.noop).call(this.element));
		clearInterval(this.onChangeInterval);
		this.currentValue = b;
		this.selectedIndex = -1;
		if (a.triggerSelectOnValidInput && (b = this.findSuggestionIndex(c), -1 !== b)) {
			this.select(b);
			return
		}
		c.length < a.minChars ? this.hide() : this.getSuggestions(c)
	}, findSuggestionIndex: function (a) {
		var b = -1, c = a.toLowerCase();
		d.each(this.suggestions, function (a, d) {
			if (d.value.toLowerCase() === c)return b =
				a, !1
		});
		return b
	}, getQuery: function (a) {
		var b = this.options.delimiter;
		if (!b)return a;
		a = a.split(b);
		return d.trim(a[a.length - 1])
	}, getSuggestionsLocal: function (a) {
		var b = this.options, c = a.toLowerCase(), e = b.lookupFilter, f = parseInt(b.lookupLimit, 10), b = {suggestions: d.grep(b.lookup, function (b) {
			return e(b, a, c)
		})};
		f && b.suggestions.length > f && (b.suggestions = b.suggestions.slice(0, f));
		return b
	}, getSuggestions: function (a) {
		var b, c = this, e = c.options, f = e.serviceUrl, l, g;
		e.params[e.paramName] = a;
		l = e.ignoreParams ? null : e.params;
		c.isLocal ? b = c.getSuggestionsLocal(a) : (d.isFunction(f) && (f = f.call(c.element, a)), g = f + "?" + d.param(l || {}), b = c.cachedResponse[g]);
		b && d.isArray(b.suggestions) ? (c.suggestions = b.suggestions, c.suggest()) : c.isBadQuery(a) || !1 === e.onSearchStart.call(c.element, e.params) || (c.currentRequest && c.currentRequest.abort(), c.currentRequest = d.ajax({url: f, data: l, type: e.type, dataType: e.dataType}).done(function (b) {
			c.currentRequest = null;
			c.processResponse(b, a, g);
			e.onSearchComplete.call(c.element, a)
		}).fail(function (b, d, f) {
			e.onSearchError.call(c.element,
				a, b, d, f)
		}))
	}, isBadQuery: function (a) {
		for (var b = this.badQueries, c = b.length; c--;)if (0 === a.indexOf(b[c]))return!0;
		return!1
	}, hide: function () {
		this.visible = !1;
		this.selectedIndex = -1;
		d(this.suggestionsContainer).hide();
		this.signalHint(null)
	}, suggest: function () {
		if (0 === this.suggestions.length)this.hide(); else {
			var a = this.options, b = a.formatResult, c = this.getQuery(this.currentValue), e = this.classes.suggestion, f = this.classes.selected, g = d(this.suggestionsContainer), k = a.beforeRender, m = "", h;
			if (a.triggerSelectOnValidInput &&
				(h = this.findSuggestionIndex(c), -1 !== h)) {
				this.select(h);
				return
			}
			d.each(this.suggestions, function (a, d) {
				m += '<div class="' + e + '" data-index="' + a + '">' + b(d, c) + "</div>"
			});
			"auto" === a.width && (h = this.el.outerWidth() - 2, g.width(0 < h ? h : 300));
			g.html(m);
			a.autoSelectFirst && (this.selectedIndex = 0, g.children().first().addClass(f));
			d.isFunction(k) && k.call(this.element, g);
			g.show();
			this.visible = !0;
			this.findBestHint()
		}
	}, findBestHint: function () {
		var a = this.el.val().toLowerCase(), b = null;
		a && (d.each(this.suggestions, function (c, d) {
			var f = 0 === d.value.toLowerCase().indexOf(a);
			f && (b = d);
			return!f
		}), this.signalHint(b))
	}, signalHint: function (a) {
		var b = "";
		a && (b = this.currentValue + a.value.substr(this.currentValue.length));
		this.hintValue !== b && (this.hintValue = b, this.hint = a, (this.options.onHint || d.noop)(b))
	}, verifySuggestionsFormat: function (a) {
		return a.length && "string" === typeof a[0] ? d.map(a, function (a) {
			return{value: a, data: null}
		}) : a
	}, processResponse: function (a, b, c) {
		var d = this.options;
		a = d.transformResult(a, b);
		a.suggestions = this.verifySuggestionsFormat(a.suggestions);
		d.noCache || (this.cachedResponse[c] = a, 0 === a.suggestions.length && this.badQueries.push(c));
		b === this.getQuery(this.currentValue) && (this.suggestions = a.suggestions, this.suggest())
	}, activate: function (a) {
		var b = this.classes.selected, c = d(this.suggestionsContainer), e = c.children();
		c.children("." + b).removeClass(b);
		this.selectedIndex = a;
		return-1 !== this.selectedIndex && e.length > this.selectedIndex ? (a = e.get(this.selectedIndex), d(a).addClass(b), a) : null
	}, selectHint: function () {
		var a = d.inArray(this.hint, this.suggestions);
		this.select(a)
	}, select: function (a) {
		this.hide();
		this.onSelect(a)
	}, moveUp: function () {
		-1 !== this.selectedIndex && (0 === this.selectedIndex ? (d(this.suggestionsContainer).children().first().removeClass(this.classes.selected), this.selectedIndex = -1, this.el.val(this.currentValue), this.findBestHint()) : this.adjustScroll(this.selectedIndex - 1))
	}, moveDown: function () {
		this.selectedIndex !== this.suggestions.length - 1 && this.adjustScroll(this.selectedIndex + 1)
	}, adjustScroll: function (a) {
		var b = this.activate(a), c, e;
		b && (b = b.offsetTop,
			c = d(this.suggestionsContainer).scrollTop(), e = c + this.options.maxHeight - 25, b < c ? d(this.suggestionsContainer).scrollTop(b) : b > e && d(this.suggestionsContainer).scrollTop(b - this.options.maxHeight + 25), this.el.val(this.getValue(this.suggestions[a].value)), this.signalHint(null))
	}, onSelect: function (a) {
		var b = this.options.onSelect;
		a = this.suggestions[a];
		this.currentValue = this.getValue(a.value);
		this.el.val(this.currentValue);
		this.signalHint(null);
		this.suggestions = [];
		this.selection = a;
		d.isFunction(b) && b.call(this.element,
			a)
	}, getValue: function (a) {
		var b = this.options.delimiter, c;
		if (!b)return a;
		c = this.currentValue;
		b = c.split(b);
		return 1 === b.length ? a : c.substr(0, c.length - b[b.length - 1].length) + a
	}, dispose: function () {
		this.el.off(".autocomplete").removeData("autocomplete");
		this.disableKillerFn();
		d(window).off("resize.autocomplete", this.fixPositionCapture);
		d(this.suggestionsContainer).remove()
	}};
	d.fn.autocomplete = function (a, b) {
		return 0 === arguments.length ? this.first().data("autocomplete") : this.each(function () {
			var c = d(this), e =
				c.data("autocomplete");
			if ("string" === typeof a) {
				if (e && "function" === typeof e[a])e[a](b)
			} else e && e.dispose && e.dispose(), e = new g(this, a), c.data("autocomplete", e)
		})
	}
});
!function () {
	function n(n, t) {
		return t > n ? -1 : n > t ? 1 : n >= t ? 0 : 0 / 0
	}

	function t(n) {
		return null != n && !isNaN(n)
	}

	function e(n) {
		return{left: function (t, e, r, u) {
			for (arguments.length < 3 && (r = 0), arguments.length < 4 && (u = t.length); u > r;) {
				var i = r + u >>> 1;
				n(t[i], e) < 0 ? r = i + 1 : u = i
			}
			return r
		}, right: function (t, e, r, u) {
			for (arguments.length < 3 && (r = 0), arguments.length < 4 && (u = t.length); u > r;) {
				var i = r + u >>> 1;
				n(t[i], e) > 0 ? u = i : r = i + 1
			}
			return r
		}}
	}

	function r(n) {
		return n.length
	}

	function u(n) {
		for (var t = 1; n * t % 1;)t *= 10;
		return t
	}

	function i(n, t) {
		try {
			for (var e in t)Object.defineProperty(n.prototype, e, {value: t[e], enumerable: !1})
		} catch (r) {
			n.prototype = t
		}
	}

	function o() {
	}

	function a(n) {
		return ia + n in this
	}

	function c(n) {
		return n = ia + n, n in this && delete this[n]
	}

	function s() {
		var n = [];
		return this.forEach(function (t) {
			n.push(t)
		}), n
	}

	function l() {
		var n = 0;
		for (var t in this)t.charCodeAt(0) === oa && ++n;
		return n
	}

	function f() {
		for (var n in this)if (n.charCodeAt(0) === oa)return!1;
		return!0
	}

	function h() {
	}

	function g(n, t, e) {
		return function () {
			var r = e.apply(t, arguments);
			return r === t ? n : r
		}
	}

	function p(n, t) {
		if (t in n)return t;
		t = t.charAt(0).toUpperCase() + t.substring(1);
		for (var e = 0, r = aa.length; r > e; ++e) {
			var u = aa[e] + t;
			if (u in n)return u
		}
	}

	function v() {
	}

	function d() {
	}

	function m(n) {
		function t() {
			for (var t, r = e, u = -1, i = r.length; ++u < i;)(t = r[u].on) && t.apply(this, arguments);
			return n
		}

		var e = [], r = new o;
		return t.on = function (t, u) {
			var i, o = r.get(t);
			return arguments.length < 2 ? o && o.on : (o && (o.on = null, e = e.slice(0, i = e.indexOf(o)).concat(e.slice(i + 1)), r.remove(t)), u && e.push(r.set(t, {on: u})), n)
		}, t
	}

	function y() {
		Zo.event.preventDefault()
	}

	function x() {
		for (var n, t = Zo.event; n = t.sourceEvent;)t = n;
		return t
	}

	function M(n) {
		for (var t = new d, e = 0, r = arguments.length; ++e < r;)t[arguments[e]] = m(t);
		return t.of = function (e, r) {
			return function (u) {
				try {
					var i = u.sourceEvent = Zo.event;
					u.target = n, Zo.event = u, t[u.type].apply(e, r)
				} finally {
					Zo.event = i
				}
			}
		}, t
	}

	function _(n) {
		return sa(n, pa), n
	}

	function b(n) {
		return"function" == typeof n ? n : function () {
			return la(n, this)
		}
	}

	function w(n) {
		return"function" == typeof n ? n : function () {
			return fa(n, this)
		}
	}

	function S(n, t) {
		function e() {
			this.removeAttribute(n)
		}

		function r() {
			this.removeAttributeNS(n.space, n.local)
		}

		function u() {
			this.setAttribute(n, t)
		}

		function i() {
			this.setAttributeNS(n.space, n.local, t)
		}

		function o() {
			var e = t.apply(this, arguments);
			null == e ? this.removeAttribute(n) : this.setAttribute(n, e)
		}

		function a() {
			var e = t.apply(this, arguments);
			null == e ? this.removeAttributeNS(n.space, n.local) : this.setAttributeNS(n.space, n.local, e)
		}

		return n = Zo.ns.qualify(n), null == t ? n.local ? r : e : "function" == typeof t ? n.local ? a : o : n.local ? i : u
	}

	function k(n) {
		return n.trim().replace(/\s+/g, " ")
	}

	function E(n) {
		return new RegExp("(?:^|\\s+)" + Zo.requote(n) + "(?:\\s+|$)", "g")
	}

	function A(n) {
		return(n + "").trim().split(/^|\s+/)
	}

	function C(n, t) {
		function e() {
			for (var e = -1; ++e < u;)n[e](this, t)
		}

		function r() {
			for (var e = -1, r = t.apply(this, arguments); ++e < u;)n[e](this, r)
		}

		n = A(n).map(N);
		var u = n.length;
		return"function" == typeof t ? r : e
	}

	function N(n) {
		var t = E(n);
		return function (e, r) {
			if (u = e.classList)return r ? u.add(n) : u.remove(n);
			var u = e.getAttribute("class") || "";
			r ? (t.lastIndex = 0, t.test(u) || e.setAttribute("class", k(u + " " + n))) : e.setAttribute("class", k(u.replace(t, " ")))
		}
	}

	function z(n, t, e) {
		function r() {
			this.style.removeProperty(n)
		}

		function u() {
			this.style.setProperty(n, t, e)
		}

		function i() {
			var r = t.apply(this, arguments);
			null == r ? this.style.removeProperty(n) : this.style.setProperty(n, r, e)
		}

		return null == t ? r : "function" == typeof t ? i : u
	}

	function L(n, t) {
		function e() {
			delete this[n]
		}

		function r() {
			this[n] = t
		}

		function u() {
			var e = t.apply(this, arguments);
			null == e ? delete this[n] : this[n] = e
		}

		return null == t ? e : "function" == typeof t ? u : r
	}

	function T(n) {
		return"function" == typeof n ? n : (n = Zo.ns.qualify(n)).local ? function () {
			return this.ownerDocument.createElementNS(n.space, n.local)
		} : function () {
			return this.ownerDocument.createElementNS(this.namespaceURI, n)
		}
	}

	function q(n) {
		return{__data__: n}
	}

	function R(n) {
		return function () {
			return ga(this, n)
		}
	}

	function D(t) {
		return arguments.length || (t = n), function (n, e) {
			return n && e ? t(n.__data__, e.__data__) : !n - !e
		}
	}

	function P(n, t) {
		for (var e = 0, r = n.length; r > e; e++)for (var u, i = n[e], o = 0, a = i.length; a > o; o++)(u = i[o]) && t(u, o, e);
		return n
	}

	function U(n) {
		return sa(n, da), n
	}

	function j(n) {
		var t, e;
		return function (r, u, i) {
			var o, a = n[i].update, c = a.length;
			for (i != e && (e = i, t = 0), u >= t && (t = u + 1); !(o = a[t]) && ++t < c;);
			return o
		}
	}

	function H() {
		var n = this.__transition__;
		n && ++n.active
	}

	function F(n, t, e) {
		function r() {
			var t = this[o];
			t && (this.removeEventListener(n, t, t.$), delete this[o])
		}

		function u() {
			var u = c(t, Xo(arguments));
			r.call(this), this.addEventListener(n, this[o] = u, u.$ = e), u._ = t
		}

		function i() {
			var t, e = new RegExp("^__on([^.]+)" + Zo.requote(n) + "$");
			for (var r in this)if (t = r.match(e)) {
				var u = this[r];
				this.removeEventListener(t[1], u, u.$), delete this[r]
			}
		}

		var o = "__on" + n, a = n.indexOf("."), c = O;
		a > 0 && (n = n.substring(0, a));
		var s = ya.get(n);
		return s && (n = s, c = Y), a ? t ? u : r : t ? v : i
	}

	function O(n, t) {
		return function (e) {
			var r = Zo.event;
			Zo.event = e, t[0] = this.__data__;
			try {
				n.apply(this, t)
			} finally {
				Zo.event = r
			}
		}
	}

	function Y(n, t) {
		var e = O(n, t);
		return function (n) {
			var t = this, r = n.relatedTarget;
			r && (r === t || 8 & r.compareDocumentPosition(t)) || e.call(t, n)
		}
	}

	function I() {
		var n = ".dragsuppress-" + ++Ma, t = "click" + n, e = Zo.select(Wo).on("touchmove" + n, y).on("dragstart" + n, y).on("selectstart" + n, y);
		if (xa) {
			var r = Bo.style, u = r[xa];
			r[xa] = "none"
		}
		return function (i) {
			function o() {
				e.on(t, null)
			}

			e.on(n, null), xa && (r[xa] = u), i && (e.on(t, function () {
				y(), o()
			}, !0), setTimeout(o, 0))
		}
	}

	function Z(n, t) {
		t.changedTouches && (t = t.changedTouches[0]);
		var e = n.ownerSVGElement || n;
		if (e.createSVGPoint) {
			var r = e.createSVGPoint();
			if (0 > _a && (Wo.scrollX || Wo.scrollY)) {
				e = Zo.select("body").append("svg").style({position: "absolute", top: 0, left: 0, margin: 0, padding: 0, border: "none"}, "important");
				var u = e[0][0].getScreenCTM();
				_a = !(u.f || u.e), e.remove()
			}
			return _a ? (r.x = t.pageX, r.y = t.pageY) : (r.x = t.clientX, r.y = t.clientY), r = r.matrixTransform(n.getScreenCTM().inverse()), [r.x, r.y]
		}
		var i = n.getBoundingClientRect();
		return[t.clientX - i.left - n.clientLeft, t.clientY - i.top - n.clientTop]
	}

	function V() {
		return Zo.event.changedTouches[0].identifier
	}

	function X() {
		return Zo.event.target
	}

	function $() {
		return Wo
	}

	function B(n) {
		return n > 0 ? 1 : 0 > n ? -1 : 0
	}

	function W(n, t, e) {
		return(t[0] - n[0]) * (e[1] - n[1]) - (t[1] - n[1]) * (e[0] - n[0])
	}

	function J(n) {
		return n > 1 ? 0 : -1 > n ? ba : Math.acos(n)
	}

	function G(n) {
		return n > 1 ? Sa : -1 > n ? -Sa : Math.asin(n)
	}

	function K(n) {
		return((n = Math.exp(n)) - 1 / n) / 2
	}

	function Q(n) {
		return((n = Math.exp(n)) + 1 / n) / 2
	}

	function nt(n) {
		return((n = Math.exp(2 * n)) - 1) / (n + 1)
	}

	function tt(n) {
		return(n = Math.sin(n / 2)) * n
	}

	function et() {
	}

	function rt(n, t, e) {
		return this instanceof rt ? (this.h = +n, this.s = +t, void(this.l = +e)) : arguments.length < 2 ? n instanceof rt ? new rt(n.h, n.s, n.l) : mt("" + n, yt, rt) : new rt(n, t, e)
	}

	function ut(n, t, e) {
		function r(n) {
			return n > 360 ? n -= 360 : 0 > n && (n += 360), 60 > n ? i + (o - i) * n / 60 : 180 > n ? o : 240 > n ? i + (o - i) * (240 - n) / 60 : i
		}

		function u(n) {
			return Math.round(255 * r(n))
		}

		var i, o;
		return n = isNaN(n) ? 0 : (n %= 360) < 0 ? n + 360 : n, t = isNaN(t) ? 0 : 0 > t ? 0 : t > 1 ? 1 : t, e = 0 > e ? 0 : e > 1 ? 1 : e, o = .5 >= e ? e * (1 + t) : e + t - e * t, i = 2 * e - o, new gt(u(n + 120), u(n), u(n - 120))
	}

	function it(n, t, e) {
		return this instanceof it ? (this.h = +n, this.c = +t, void(this.l = +e)) : arguments.length < 2 ? n instanceof it ? new it(n.h, n.c, n.l) : n instanceof at ? st(n.l, n.a, n.b) : st((n = xt((n = Zo.rgb(n)).r, n.g, n.b)).l, n.a, n.b) : new it(n, t, e)
	}

	function ot(n, t, e) {
		return isNaN(n) && (n = 0), isNaN(t) && (t = 0), new at(e, Math.cos(n *= Aa) * t, Math.sin(n) * t)
	}

	function at(n, t, e) {
		return this instanceof at ? (this.l = +n, this.a = +t, void(this.b = +e)) : arguments.length < 2 ? n instanceof at ? new at(n.l, n.a, n.b) : n instanceof it ? ot(n.l, n.c, n.h) : xt((n = gt(n)).r, n.g, n.b) : new at(n, t, e)
	}

	function ct(n, t, e) {
		var r = (n + 16) / 116, u = r + t / 500, i = r - e / 200;
		return u = lt(u) * ja, r = lt(r) * Ha, i = lt(i) * Fa, new gt(ht(3.2404542 * u - 1.5371385 * r - .4985314 * i), ht(-.969266 * u + 1.8760108 * r + .041556 * i), ht(.0556434 * u - .2040259 * r + 1.0572252 * i))
	}

	function st(n, t, e) {
		return n > 0 ? new it(Math.atan2(e, t) * Ca, Math.sqrt(t * t + e * e), n) : new it(0 / 0, 0 / 0, n)
	}

	function lt(n) {
		return n > .206893034 ? n * n * n : (n - 4 / 29) / 7.787037
	}

	function ft(n) {
		return n > .008856 ? Math.pow(n, 1 / 3) : 7.787037 * n + 4 / 29
	}

	function ht(n) {
		return Math.round(255 * (.00304 >= n ? 12.92 * n : 1.055 * Math.pow(n, 1 / 2.4) - .055))
	}

	function gt(n, t, e) {
		return this instanceof gt ? (this.r = ~~n, this.g = ~~t, void(this.b = ~~e)) : arguments.length < 2 ? n instanceof gt ? new gt(n.r, n.g, n.b) : mt("" + n, gt, ut) : new gt(n, t, e)
	}

	function pt(n) {
		return new gt(n >> 16, 255 & n >> 8, 255 & n)
	}

	function vt(n) {
		return pt(n) + ""
	}

	function dt(n) {
		return 16 > n ? "0" + Math.max(0, n).toString(16) : Math.min(255, n).toString(16)
	}

	function mt(n, t, e) {
		var r, u, i, o = 0, a = 0, c = 0;
		if (r = /([a-z]+)\((.*)\)/i.exec(n))switch (u = r[2].split(","), r[1]) {
			case"hsl":
				return e(parseFloat(u[0]), parseFloat(u[1]) / 100, parseFloat(u[2]) / 100);
			case"rgb":
				return t(_t(u[0]), _t(u[1]), _t(u[2]))
		}
		return(i = Ia.get(n)) ? t(i.r, i.g, i.b) : (null == n || "#" !== n.charAt(0) || isNaN(i = parseInt(n.substring(1), 16)) || (4 === n.length ? (o = (3840 & i) >> 4, o = o >> 4 | o, a = 240 & i, a = a >> 4 | a, c = 15 & i, c = c << 4 | c) : 7 === n.length && (o = (16711680 & i) >> 16, a = (65280 & i) >> 8, c = 255 & i)), t(o, a, c))
	}

	function yt(n, t, e) {
		var r, u, i = Math.min(n /= 255, t /= 255, e /= 255), o = Math.max(n, t, e), a = o - i, c = (o + i) / 2;
		return a ? (u = .5 > c ? a / (o + i) : a / (2 - o - i), r = n == o ? (t - e) / a + (e > t ? 6 : 0) : t == o ? (e - n) / a + 2 : (n - t) / a + 4, r *= 60) : (r = 0 / 0, u = c > 0 && 1 > c ? 0 : r), new rt(r, u, c)
	}

	function xt(n, t, e) {
		n = Mt(n), t = Mt(t), e = Mt(e);
		var r = ft((.4124564 * n + .3575761 * t + .1804375 * e) / ja), u = ft((.2126729 * n + .7151522 * t + .072175 * e) / Ha), i = ft((.0193339 * n + .119192 * t + .9503041 * e) / Fa);
		return at(116 * u - 16, 500 * (r - u), 200 * (u - i))
	}

	function Mt(n) {
		return(n /= 255) <= .04045 ? n / 12.92 : Math.pow((n + .055) / 1.055, 2.4)
	}

	function _t(n) {
		var t = parseFloat(n);
		return"%" === n.charAt(n.length - 1) ? Math.round(2.55 * t) : t
	}

	function bt(n) {
		return"function" == typeof n ? n : function () {
			return n
		}
	}

	function wt(n) {
		return n
	}

	function St(n) {
		return function (t, e, r) {
			return 2 === arguments.length && "function" == typeof e && (r = e, e = null), kt(t, e, n, r)
		}
	}

	function kt(n, t, e, r) {
		function u() {
			var n, t = c.status;
			if (!t && c.responseText || t >= 200 && 300 > t || 304 === t) {
				try {
					n = e.call(i, c)
				} catch (r) {
					return o.error.call(i, r), void 0
				}
				o.load.call(i, n)
			} else o.error.call(i, c)
		}

		var i = {}, o = Zo.dispatch("beforesend", "progress", "load", "error"), a = {}, c = new XMLHttpRequest, s = null;
		return!Wo.XDomainRequest || "withCredentials"in c || !/^(http(s)?:)?\/\//.test(n) || (c = new XDomainRequest), "onload"in c ? c.onload = c.onerror = u : c.onreadystatechange = function () {
			c.readyState > 3 && u()
		}, c.onprogress = function (n) {
			var t = Zo.event;
			Zo.event = n;
			try {
				o.progress.call(i, c)
			} finally {
				Zo.event = t
			}
		}, i.header = function (n, t) {
			return n = (n + "").toLowerCase(), arguments.length < 2 ? a[n] : (null == t ? delete a[n] : a[n] = t + "", i)
		}, i.mimeType = function (n) {
			return arguments.length ? (t = null == n ? null : n + "", i) : t
		}, i.responseType = function (n) {
			return arguments.length ? (s = n, i) : s
		}, i.response = function (n) {
			return e = n, i
		}, ["get", "post"].forEach(function (n) {
			i[n] = function () {
				return i.send.apply(i, [n].concat(Xo(arguments)))
			}
		}), i.send = function (e, r, u) {
			if (2 === arguments.length && "function" == typeof r && (u = r, r = null), c.open(e, n, !0), null == t || "accept"in a || (a.accept = t + ",*/*"), c.setRequestHeader)for (var l in a)c.setRequestHeader(l, a[l]);
			return null != t && c.overrideMimeType && c.overrideMimeType(t), null != s && (c.responseType = s), null != u && i.on("error", u).on("load", function (n) {
				u(null, n)
			}), o.beforesend.call(i, c), c.send(null == r ? null : r), i
		}, i.abort = function () {
			return c.abort(), i
		}, Zo.rebind(i, o, "on"), null == r ? i : i.get(Et(r))
	}

	function Et(n) {
		return 1 === n.length ? function (t, e) {
			n(null == t ? e : null)
		} : n
	}

	function At() {
		var n = Ct(), t = Nt() - n;
		t > 24 ? (isFinite(t) && (clearTimeout($a), $a = setTimeout(At, t)), Xa = 0) : (Xa = 1, Wa(At))
	}

	function Ct() {
		var n = Date.now();
		for (Ba = Za; Ba;)n >= Ba.t && (Ba.f = Ba.c(n - Ba.t)), Ba = Ba.n;
		return n
	}

	function Nt() {
		for (var n, t = Za, e = 1 / 0; t;)t.f ? t = n ? n.n = t.n : Za = t.n : (t.t < e && (e = t.t), t = (n = t).n);
		return Va = n, e
	}

	function zt(n, t) {
		return t - (n ? Math.ceil(Math.log(n) / Math.LN10) : 1)
	}

	function Lt(n, t) {
		var e = Math.pow(10, 3 * ua(8 - t));
		return{scale: t > 8 ? function (n) {
			return n / e
		} : function (n) {
			return n * e
		}, symbol: n}
	}

	function Tt(n) {
		var t = n.decimal, e = n.thousands, r = n.grouping, u = n.currency, i = r ? function (n) {
			for (var t = n.length, u = [], i = 0, o = r[0]; t > 0 && o > 0;)u.push(n.substring(t -= o, t + o)), o = r[i = (i + 1) % r.length];
			return u.reverse().join(e)
		} : wt;
		return function (n) {
			var e = Ga.exec(n), r = e[1] || " ", o = e[2] || ">", a = e[3] || "", c = e[4] || "", s = e[5], l = +e[6], f = e[7], h = e[8], g = e[9], p = 1, v = "", d = "", m = !1;
			switch (h && (h = +h.substring(1)), (s || "0" === r && "=" === o) && (s = r = "0", o = "=", f && (l -= Math.floor((l - 1) / 4))), g) {
				case"n":
					f = !0, g = "g";
					break;
				case"%":
					p = 100, d = "%", g = "f";
					break;
				case"p":
					p = 100, d = "%", g = "r";
					break;
				case"b":
				case"o":
				case"x":
				case"X":
					"#" === c && (v = "0" + g.toLowerCase());
				case"c":
				case"d":
					m = !0, h = 0;
					break;
				case"s":
					p = -1, g = "r"
			}
			"$" === c && (v = u[0], d = u[1]), "r" != g || h || (g = "g"), null != h && ("g" == g ? h = Math.max(1, Math.min(21, h)) : ("e" == g || "f" == g) && (h = Math.max(0, Math.min(20, h)))), g = Ka.get(g) || qt;
			var y = s && f;
			return function (n) {
				var e = d;
				if (m && n % 1)return"";
				var u = 0 > n || 0 === n && 0 > 1 / n ? (n = -n, "-") : a;
				if (0 > p) {
					var c = Zo.formatPrefix(n, h);
					n = c.scale(n), e = c.symbol + d
				} else n *= p;
				n = g(n, h);
				var x = n.lastIndexOf("."), M = 0 > x ? n : n.substring(0, x), _ = 0 > x ? "" : t + n.substring(x + 1);
				!s && f && (M = i(M));
				var b = v.length + M.length + _.length + (y ? 0 : u.length), w = l > b ? new Array(b = l - b + 1).join(r) : "";
				return y && (M = i(w + M)), u += v, n = M + _, ("<" === o ? u + n + w : ">" === o ? w + u + n : "^" === o ? w.substring(0, b >>= 1) + u + n + w.substring(b) : u + (y ? n : w + n)) + e
			}
		}
	}

	function qt(n) {
		return n + ""
	}

	function Rt() {
		this._ = new Date(arguments.length > 1 ? Date.UTC.apply(this, arguments) : arguments[0])
	}

	function Dt(n, t, e) {
		function r(t) {
			var e = n(t), r = i(e, 1);
			return r - t > t - e ? e : r
		}

		function u(e) {
			return t(e = n(new nc(e - 1)), 1), e
		}

		function i(n, e) {
			return t(n = new nc(+n), e), n
		}

		function o(n, r, i) {
			var o = u(n), a = [];
			if (i > 1)for (; r > o;)e(o) % i || a.push(new Date(+o)), t(o, 1); else for (; r > o;)a.push(new Date(+o)), t(o, 1);
			return a
		}

		function a(n, t, e) {
			try {
				nc = Rt;
				var r = new Rt;
				return r._ = n, o(r, t, e)
			} finally {
				nc = Date
			}
		}

		n.floor = n, n.round = r, n.ceil = u, n.offset = i, n.range = o;
		var c = n.utc = Pt(n);
		return c.floor = c, c.round = Pt(r), c.ceil = Pt(u), c.offset = Pt(i), c.range = a, n
	}

	function Pt(n) {
		return function (t, e) {
			try {
				nc = Rt;
				var r = new Rt;
				return r._ = t, n(r, e)._
			} finally {
				nc = Date
			}
		}
	}

	function Ut(n) {
		function t(n) {
			function t(t) {
				for (var e, u, i, o = [], a = -1, c = 0; ++a < r;)37 === n.charCodeAt(a) && (o.push(n.substring(c, a)), null != (u = ec[e = n.charAt(++a)]) && (e = n.charAt(++a)), (i = C[e]) && (e = i(t, null == u ? "e" === e ? " " : "0" : u)), o.push(e), c = a + 1);
				return o.push(n.substring(c, a)), o.join("")
			}

			var r = n.length;
			return t.parse = function (t) {
				var r = {y: 1900, m: 0, d: 1, H: 0, M: 0, S: 0, L: 0, Z: null}, u = e(r, n, t, 0);
				if (u != t.length)return null;
				"p"in r && (r.H = r.H % 12 + 12 * r.p);
				var i = null != r.Z && nc !== Rt, o = new (i ? Rt : nc);
				return"j"in r ? o.setFullYear(r.y, 0, r.j) : "w"in r && ("W"in r || "U"in r) ? (o.setFullYear(r.y, 0, 1), o.setFullYear(r.y, 0, "W"in r ? (r.w + 6) % 7 + 7 * r.W - (o.getDay() + 5) % 7 : r.w + 7 * r.U - (o.getDay() + 6) % 7)) : o.setFullYear(r.y, r.m, r.d), o.setHours(r.H + Math.floor(r.Z / 100), r.M + r.Z % 100, r.S, r.L), i ? o._ : o
			}, t.toString = function () {
				return n
			}, t
		}

		function e(n, t, e, r) {
			for (var u, i, o, a = 0, c = t.length, s = e.length; c > a;) {
				if (r >= s)return-1;
				if (u = t.charCodeAt(a++), 37 === u) {
					if (o = t.charAt(a++), i = N[o in ec ? t.charAt(a++) : o], !i || (r = i(n, e, r)) < 0)return-1
				} else if (u != e.charCodeAt(r++))return-1
			}
			return r
		}

		function r(n, t, e) {
			b.lastIndex = 0;
			var r = b.exec(t.substring(e));
			return r ? (n.w = w.get(r[0].toLowerCase()), e + r[0].length) : -1
		}

		function u(n, t, e) {
			M.lastIndex = 0;
			var r = M.exec(t.substring(e));
			return r ? (n.w = _.get(r[0].toLowerCase()), e + r[0].length) : -1
		}

		function i(n, t, e) {
			E.lastIndex = 0;
			var r = E.exec(t.substring(e));
			return r ? (n.m = A.get(r[0].toLowerCase()), e + r[0].length) : -1
		}

		function o(n, t, e) {
			S.lastIndex = 0;
			var r = S.exec(t.substring(e));
			return r ? (n.m = k.get(r[0].toLowerCase()), e + r[0].length) : -1
		}

		function a(n, t, r) {
			return e(n, C.c.toString(), t, r)
		}

		function c(n, t, r) {
			return e(n, C.x.toString(), t, r)
		}

		function s(n, t, r) {
			return e(n, C.X.toString(), t, r)
		}

		function l(n, t, e) {
			var r = x.get(t.substring(e, e += 2).toLowerCase());
			return null == r ? -1 : (n.p = r, e)
		}

		var f = n.dateTime, h = n.date, g = n.time, p = n.periods, v = n.days, d = n.shortDays, m = n.months, y = n.shortMonths;
		t.utc = function (n) {
			function e(n) {
				try {
					nc = Rt;
					var t = new nc;
					return t._ = n, r(t)
				} finally {
					nc = Date
				}
			}

			var r = t(n);
			return e.parse = function (n) {
				try {
					nc = Rt;
					var t = r.parse(n);
					return t && t._
				} finally {
					nc = Date
				}
			}, e.toString = r.toString, e
		}, t.multi = t.utc.multi = re;
		var x = Zo.map(), M = Ht(v), _ = Ft(v), b = Ht(d), w = Ft(d), S = Ht(m), k = Ft(m), E = Ht(y), A = Ft(y);
		p.forEach(function (n, t) {
			x.set(n.toLowerCase(), t)
		});
		var C = {a: function (n) {
			return d[n.getDay()]
		}, A: function (n) {
			return v[n.getDay()]
		}, b: function (n) {
			return y[n.getMonth()]
		}, B: function (n) {
			return m[n.getMonth()]
		}, c: t(f), d: function (n, t) {
			return jt(n.getDate(), t, 2)
		}, e: function (n, t) {
			return jt(n.getDate(), t, 2)
		}, H: function (n, t) {
			return jt(n.getHours(), t, 2)
		}, I: function (n, t) {
			return jt(n.getHours() % 12 || 12, t, 2)
		}, j: function (n, t) {
			return jt(1 + Qa.dayOfYear(n), t, 3)
		}, L: function (n, t) {
			return jt(n.getMilliseconds(), t, 3)
		}, m: function (n, t) {
			return jt(n.getMonth() + 1, t, 2)
		}, M: function (n, t) {
			return jt(n.getMinutes(), t, 2)
		}, p: function (n) {
			return p[+(n.getHours() >= 12)]
		}, S: function (n, t) {
			return jt(n.getSeconds(), t, 2)
		}, U: function (n, t) {
			return jt(Qa.sundayOfYear(n), t, 2)
		}, w: function (n) {
			return n.getDay()
		}, W: function (n, t) {
			return jt(Qa.mondayOfYear(n), t, 2)
		}, x: t(h), X: t(g), y: function (n, t) {
			return jt(n.getFullYear() % 100, t, 2)
		}, Y: function (n, t) {
			return jt(n.getFullYear() % 1e4, t, 4)
		}, Z: te, "%": function () {
			return"%"
		}}, N = {a: r, A: u, b: i, B: o, c: a, d: Wt, e: Wt, H: Gt, I: Gt, j: Jt, L: ne, m: Bt, M: Kt, p: l, S: Qt, U: Yt, w: Ot, W: It, x: c, X: s, y: Vt, Y: Zt, Z: Xt, "%": ee};
		return t
	}

	function jt(n, t, e) {
		var r = 0 > n ? "-" : "", u = (r ? -n : n) + "", i = u.length;
		return r + (e > i ? new Array(e - i + 1).join(t) + u : u)
	}

	function Ht(n) {
		return new RegExp("^(?:" + n.map(Zo.requote).join("|") + ")", "i")
	}

	function Ft(n) {
		for (var t = new o, e = -1, r = n.length; ++e < r;)t.set(n[e].toLowerCase(), e);
		return t
	}

	function Ot(n, t, e) {
		rc.lastIndex = 0;
		var r = rc.exec(t.substring(e, e + 1));
		return r ? (n.w = +r[0], e + r[0].length) : -1
	}

	function Yt(n, t, e) {
		rc.lastIndex = 0;
		var r = rc.exec(t.substring(e));
		return r ? (n.U = +r[0], e + r[0].length) : -1
	}

	function It(n, t, e) {
		rc.lastIndex = 0;
		var r = rc.exec(t.substring(e));
		return r ? (n.W = +r[0], e + r[0].length) : -1
	}

	function Zt(n, t, e) {
		rc.lastIndex = 0;
		var r = rc.exec(t.substring(e, e + 4));
		return r ? (n.y = +r[0], e + r[0].length) : -1
	}

	function Vt(n, t, e) {
		rc.lastIndex = 0;
		var r = rc.exec(t.substring(e, e + 2));
		return r ? (n.y = $t(+r[0]), e + r[0].length) : -1
	}

	function Xt(n, t, e) {
		return/^[+-]\d{4}$/.test(t = t.substring(e, e + 5)) ? (n.Z = -t, e + 5) : -1
	}

	function $t(n) {
		return n + (n > 68 ? 1900 : 2e3)
	}

	function Bt(n, t, e) {
		rc.lastIndex = 0;
		var r = rc.exec(t.substring(e, e + 2));
		return r ? (n.m = r[0] - 1, e + r[0].length) : -1
	}

	function Wt(n, t, e) {
		rc.lastIndex = 0;
		var r = rc.exec(t.substring(e, e + 2));
		return r ? (n.d = +r[0], e + r[0].length) : -1
	}

	function Jt(n, t, e) {
		rc.lastIndex = 0;
		var r = rc.exec(t.substring(e, e + 3));
		return r ? (n.j = +r[0], e + r[0].length) : -1
	}

	function Gt(n, t, e) {
		rc.lastIndex = 0;
		var r = rc.exec(t.substring(e, e + 2));
		return r ? (n.H = +r[0], e + r[0].length) : -1
	}

	function Kt(n, t, e) {
		rc.lastIndex = 0;
		var r = rc.exec(t.substring(e, e + 2));
		return r ? (n.M = +r[0], e + r[0].length) : -1
	}

	function Qt(n, t, e) {
		rc.lastIndex = 0;
		var r = rc.exec(t.substring(e, e + 2));
		return r ? (n.S = +r[0], e + r[0].length) : -1
	}

	function ne(n, t, e) {
		rc.lastIndex = 0;
		var r = rc.exec(t.substring(e, e + 3));
		return r ? (n.L = +r[0], e + r[0].length) : -1
	}

	function te(n) {
		var t = n.getTimezoneOffset(), e = t > 0 ? "-" : "+", r = ~~(ua(t) / 60), u = ua(t) % 60;
		return e + jt(r, "0", 2) + jt(u, "0", 2)
	}

	function ee(n, t, e) {
		uc.lastIndex = 0;
		var r = uc.exec(t.substring(e, e + 1));
		return r ? e + r[0].length : -1
	}

	function re(n) {
		for (var t = n.length, e = -1; ++e < t;)n[e][0] = this(n[e][0]);
		return function (t) {
			for (var e = 0, r = n[e]; !r[1](t);)r = n[++e];
			return r[0](t)
		}
	}

	function ue() {
	}

	function ie(n, t, e) {
		var r = e.s = n + t, u = r - n, i = r - u;
		e.t = n - i + (t - u)
	}

	function oe(n, t) {
		n && cc.hasOwnProperty(n.type) && cc[n.type](n, t)
	}

	function ae(n, t, e) {
		var r, u = -1, i = n.length - e;
		for (t.lineStart(); ++u < i;)r = n[u], t.point(r[0], r[1], r[2]);
		t.lineEnd()
	}

	function ce(n, t) {
		var e = -1, r = n.length;
		for (t.polygonStart(); ++e < r;)ae(n[e], t, 1);
		t.polygonEnd()
	}

	function se() {
		function n(n, t) {
			n *= Aa, t = t * Aa / 2 + ba / 4;
			var e = n - r, o = e >= 0 ? 1 : -1, a = o * e, c = Math.cos(t), s = Math.sin(t), l = i * s, f = u * c + l * Math.cos(a), h = l * o * Math.sin(a);
			lc.add(Math.atan2(h, f)), r = n, u = c, i = s
		}

		var t, e, r, u, i;
		fc.point = function (o, a) {
			fc.point = n, r = (t = o) * Aa, u = Math.cos(a = (e = a) * Aa / 2 + ba / 4), i = Math.sin(a)
		}, fc.lineEnd = function () {
			n(t, e)
		}
	}

	function le(n) {
		var t = n[0], e = n[1], r = Math.cos(e);
		return[r * Math.cos(t), r * Math.sin(t), Math.sin(e)]
	}

	function fe(n, t) {
		return n[0] * t[0] + n[1] * t[1] + n[2] * t[2]
	}

	function he(n, t) {
		return[n[1] * t[2] - n[2] * t[1], n[2] * t[0] - n[0] * t[2], n[0] * t[1] - n[1] * t[0]]
	}

	function ge(n, t) {
		n[0] += t[0], n[1] += t[1], n[2] += t[2]
	}

	function pe(n, t) {
		return[n[0] * t, n[1] * t, n[2] * t]
	}

	function ve(n) {
		var t = Math.sqrt(n[0] * n[0] + n[1] * n[1] + n[2] * n[2]);
		n[0] /= t, n[1] /= t, n[2] /= t
	}

	function de(n) {
		return[Math.atan2(n[1], n[0]), G(n[2])]
	}

	function me(n, t) {
		return ua(n[0] - t[0]) < ka && ua(n[1] - t[1]) < ka
	}

	function ye(n, t) {
		n *= Aa;
		var e = Math.cos(t *= Aa);
		xe(e * Math.cos(n), e * Math.sin(n), Math.sin(t))
	}

	function xe(n, t, e) {
		++hc, pc += (n - pc) / hc, vc += (t - vc) / hc, dc += (e - dc) / hc
	}

	function Me() {
		function n(n, u) {
			n *= Aa;
			var i = Math.cos(u *= Aa), o = i * Math.cos(n), a = i * Math.sin(n), c = Math.sin(u), s = Math.atan2(Math.sqrt((s = e * c - r * a) * s + (s = r * o - t * c) * s + (s = t * a - e * o) * s), t * o + e * a + r * c);
			gc += s, mc += s * (t + (t = o)), yc += s * (e + (e = a)), xc += s * (r + (r = c)), xe(t, e, r)
		}

		var t, e, r;
		wc.point = function (u, i) {
			u *= Aa;
			var o = Math.cos(i *= Aa);
			t = o * Math.cos(u), e = o * Math.sin(u), r = Math.sin(i), wc.point = n, xe(t, e, r)
		}
	}

	function _e() {
		wc.point = ye
	}

	function be() {
		function n(n, t) {
			n *= Aa;
			var e = Math.cos(t *= Aa), o = e * Math.cos(n), a = e * Math.sin(n), c = Math.sin(t), s = u * c - i * a, l = i * o - r * c, f = r * a - u * o, h = Math.sqrt(s * s + l * l + f * f), g = r * o + u * a + i * c, p = h && -J(g) / h, v = Math.atan2(h, g);
			Mc += p * s, _c += p * l, bc += p * f, gc += v, mc += v * (r + (r = o)), yc += v * (u + (u = a)), xc += v * (i + (i = c)), xe(r, u, i)
		}

		var t, e, r, u, i;
		wc.point = function (o, a) {
			t = o, e = a, wc.point = n, o *= Aa;
			var c = Math.cos(a *= Aa);
			r = c * Math.cos(o), u = c * Math.sin(o), i = Math.sin(a), xe(r, u, i)
		}, wc.lineEnd = function () {
			n(t, e), wc.lineEnd = _e, wc.point = ye
		}
	}

	function we() {
		return!0
	}

	function Se(n, t, e, r, u) {
		var i = [], o = [];
		if (n.forEach(function (n) {
			if (!((t = n.length - 1) <= 0)) {
				var t, e = n[0], r = n[t];
				if (me(e, r)) {
					u.lineStart();
					for (var a = 0; t > a; ++a)u.point((e = n[a])[0], e[1]);
					return u.lineEnd(), void 0
				}
				var c = new Ee(e, n, null, !0), s = new Ee(e, null, c, !1);
				c.o = s, i.push(c), o.push(s), c = new Ee(r, n, null, !1), s = new Ee(r, null, c, !0), c.o = s, i.push(c), o.push(s)
			}
		}), o.sort(t), ke(i), ke(o), i.length) {
			for (var a = 0, c = e, s = o.length; s > a; ++a)o[a].e = c = !c;
			for (var l, f, h = i[0]; ;) {
				for (var g = h, p = !0; g.v;)if ((g = g.n) === h)return;
				l = g.z, u.lineStart();
				do {
					if (g.v = g.o.v = !0, g.e) {
						if (p)for (var a = 0, s = l.length; s > a; ++a)u.point((f = l[a])[0], f[1]); else r(g.x, g.n.x, 1, u);
						g = g.n
					} else {
						if (p) {
							l = g.p.z;
							for (var a = l.length - 1; a >= 0; --a)u.point((f = l[a])[0], f[1])
						} else r(g.x, g.p.x, -1, u);
						g = g.p
					}
					g = g.o, l = g.z, p = !p
				} while (!g.v);
				u.lineEnd()
			}
		}
	}

	function ke(n) {
		if (t = n.length) {
			for (var t, e, r = 0, u = n[0]; ++r < t;)u.n = e = n[r], e.p = u, u = e;
			u.n = e = n[0], e.p = u
		}
	}

	function Ee(n, t, e, r) {
		this.x = n, this.z = t, this.o = e, this.e = r, this.v = !1, this.n = this.p = null
	}

	function Ae(n, t, e, r) {
		return function (u, i) {
			function o(t, e) {
				var r = u(t, e);
				n(t = r[0], e = r[1]) && i.point(t, e)
			}

			function a(n, t) {
				var e = u(n, t);
				d.point(e[0], e[1])
			}

			function c() {
				y.point = a, d.lineStart()
			}

			function s() {
				y.point = o, d.lineEnd()
			}

			function l(n, t) {
				v.push([n, t]);
				var e = u(n, t);
				M.point(e[0], e[1])
			}

			function f() {
				M.lineStart(), v = []
			}

			function h() {
				l(v[0][0], v[0][1]), M.lineEnd();
				var n, t = M.clean(), e = x.buffer(), r = e.length;
				if (v.pop(), p.push(v), v = null, r)if (1 & t) {
					n = e[0];
					var u, r = n.length - 1, o = -1;
					if (r > 0) {
						for (_ || (i.polygonStart(), _ = !0), i.lineStart(); ++o < r;)i.point((u = n[o])[0], u[1]);
						i.lineEnd()
					}
				} else r > 1 && 2 & t && e.push(e.pop().concat(e.shift())), g.push(e.filter(Ce))
			}

			var g, p, v, d = t(i), m = u.invert(r[0], r[1]), y = {point: o, lineStart: c, lineEnd: s, polygonStart: function () {
				y.point = l, y.lineStart = f, y.lineEnd = h, g = [], p = []
			}, polygonEnd: function () {
				y.point = o, y.lineStart = c, y.lineEnd = s, g = Zo.merge(g);
				var n = Le(m, p);
				g.length ? (_ || (i.polygonStart(), _ = !0), Se(g, ze, n, e, i)) : n && (_ || (i.polygonStart(), _ = !0), i.lineStart(), e(null, null, 1, i), i.lineEnd()), _ && (i.polygonEnd(), _ = !1), g = p = null
			}, sphere: function () {
				i.polygonStart(), i.lineStart(), e(null, null, 1, i), i.lineEnd(), i.polygonEnd()
			}}, x = Ne(), M = t(x), _ = !1;
			return y
		}
	}

	function Ce(n) {
		return n.length > 1
	}

	function Ne() {
		var n, t = [];
		return{lineStart: function () {
			t.push(n = [])
		}, point: function (t, e) {
			n.push([t, e])
		}, lineEnd: v, buffer: function () {
			var e = t;
			return t = [], n = null, e
		}, rejoin: function () {
			t.length > 1 && t.push(t.pop().concat(t.shift()))
		}}
	}

	function ze(n, t) {
		return((n = n.x)[0] < 0 ? n[1] - Sa - ka : Sa - n[1]) - ((t = t.x)[0] < 0 ? t[1] - Sa - ka : Sa - t[1])
	}

	function Le(n, t) {
		var e = n[0], r = n[1], u = [Math.sin(e), -Math.cos(e), 0], i = 0, o = 0;
		lc.reset();
		for (var a = 0, c = t.length; c > a; ++a) {
			var s = t[a], l = s.length;
			if (l)for (var f = s[0], h = f[0], g = f[1] / 2 + ba / 4, p = Math.sin(g), v = Math.cos(g), d = 1; ;) {
				d === l && (d = 0), n = s[d];
				var m = n[0], y = n[1] / 2 + ba / 4, x = Math.sin(y), M = Math.cos(y), _ = m - h, b = _ >= 0 ? 1 : -1, w = b * _, S = w > ba, k = p * x;
				if (lc.add(Math.atan2(k * b * Math.sin(w), v * M + k * Math.cos(w))), i += S ? _ + b * wa : _, S ^ h >= e ^ m >= e) {
					var E = he(le(f), le(n));
					ve(E);
					var A = he(u, E);
					ve(A);
					var C = (S ^ _ >= 0 ? -1 : 1) * G(A[2]);
					(r > C || r === C && (E[0] || E[1])) && (o += S ^ _ >= 0 ? 1 : -1)
				}
				if (!d++)break;
				h = m, p = x, v = M, f = n
			}
		}
		return(-ka > i || ka > i && 0 > lc) ^ 1 & o
	}

	function Te(n) {
		var t, e = 0 / 0, r = 0 / 0, u = 0 / 0;
		return{lineStart: function () {
			n.lineStart(), t = 1
		}, point: function (i, o) {
			var a = i > 0 ? ba : -ba, c = ua(i - e);
			ua(c - ba) < ka ? (n.point(e, r = (r + o) / 2 > 0 ? Sa : -Sa), n.point(u, r), n.lineEnd(), n.lineStart(), n.point(a, r), n.point(i, r), t = 0) : u !== a && c >= ba && (ua(e - u) < ka && (e -= u * ka), ua(i - a) < ka && (i -= a * ka), r = qe(e, r, i, o), n.point(u, r), n.lineEnd(), n.lineStart(), n.point(a, r), t = 0), n.point(e = i, r = o), u = a
		}, lineEnd: function () {
			n.lineEnd(), e = r = 0 / 0
		}, clean: function () {
			return 2 - t
		}}
	}

	function qe(n, t, e, r) {
		var u, i, o = Math.sin(n - e);
		return ua(o) > ka ? Math.atan((Math.sin(t) * (i = Math.cos(r)) * Math.sin(e) - Math.sin(r) * (u = Math.cos(t)) * Math.sin(n)) / (u * i * o)) : (t + r) / 2
	}

	function Re(n, t, e, r) {
		var u;
		if (null == n)u = e * Sa, r.point(-ba, u), r.point(0, u), r.point(ba, u), r.point(ba, 0), r.point(ba, -u), r.point(0, -u), r.point(-ba, -u), r.point(-ba, 0), r.point(-ba, u); else if (ua(n[0] - t[0]) > ka) {
			var i = n[0] < t[0] ? ba : -ba;
			u = e * i / 2, r.point(-i, u), r.point(0, u), r.point(i, u)
		} else r.point(t[0], t[1])
	}

	function De(n) {
		function t(n, t) {
			return Math.cos(n) * Math.cos(t) > i
		}

		function e(n) {
			var e, i, c, s, l;
			return{lineStart: function () {
				s = c = !1, l = 1
			}, point: function (f, h) {
				var g, p = [f, h], v = t(f, h), d = o ? v ? 0 : u(f, h) : v ? u(f + (0 > f ? ba : -ba), h) : 0;
				if (!e && (s = c = v) && n.lineStart(), v !== c && (g = r(e, p), (me(e, g) || me(p, g)) && (p[0] += ka, p[1] += ka, v = t(p[0], p[1]))), v !== c)l = 0, v ? (n.lineStart(), g = r(p, e), n.point(g[0], g[1])) : (g = r(e, p), n.point(g[0], g[1]), n.lineEnd()), e = g; else if (a && e && o ^ v) {
					var m;
					d & i || !(m = r(p, e, !0)) || (l = 0, o ? (n.lineStart(), n.point(m[0][0], m[0][1]), n.point(m[1][0], m[1][1]), n.lineEnd()) : (n.point(m[1][0], m[1][1]), n.lineEnd(), n.lineStart(), n.point(m[0][0], m[0][1])))
				}
				!v || e && me(e, p) || n.point(p[0], p[1]), e = p, c = v, i = d
			}, lineEnd: function () {
				c && n.lineEnd(), e = null
			}, clean: function () {
				return l | (s && c) << 1
			}}
		}

		function r(n, t, e) {
			var r = le(n), u = le(t), o = [1, 0, 0], a = he(r, u), c = fe(a, a), s = a[0], l = c - s * s;
			if (!l)return!e && n;
			var f = i * c / l, h = -i * s / l, g = he(o, a), p = pe(o, f), v = pe(a, h);
			ge(p, v);
			var d = g, m = fe(p, d), y = fe(d, d), x = m * m - y * (fe(p, p) - 1);
			if (!(0 > x)) {
				var M = Math.sqrt(x), _ = pe(d, (-m - M) / y);
				if (ge(_, p), _ = de(_), !e)return _;
				var b, w = n[0], S = t[0], k = n[1], E = t[1];
				w > S && (b = w, w = S, S = b);
				var A = S - w, C = ua(A - ba) < ka, N = C || ka > A;
				if (!C && k > E && (b = k, k = E, E = b), N ? C ? k + E > 0 ^ _[1] < (ua(_[0] - w) < ka ? k : E) : k <= _[1] && _[1] <= E : A > ba ^ (w <= _[0] && _[0] <= S)) {
					var z = pe(d, (-m + M) / y);
					return ge(z, p), [_, de(z)]
				}
			}
		}

		function u(t, e) {
			var r = o ? n : ba - n, u = 0;
			return-r > t ? u |= 1 : t > r && (u |= 2), -r > e ? u |= 4 : e > r && (u |= 8), u
		}

		var i = Math.cos(n), o = i > 0, a = ua(i) > ka, c = sr(n, 6 * Aa);
		return Ae(t, e, c, o ? [0, -n] : [-ba, n - ba])
	}

	function Pe(n, t, e, r) {
		return function (u) {
			var i, o = u.a, a = u.b, c = o.x, s = o.y, l = a.x, f = a.y, h = 0, g = 1, p = l - c, v = f - s;
			if (i = n - c, p || !(i > 0)) {
				if (i /= p, 0 > p) {
					if (h > i)return;
					g > i && (g = i)
				} else if (p > 0) {
					if (i > g)return;
					i > h && (h = i)
				}
				if (i = e - c, p || !(0 > i)) {
					if (i /= p, 0 > p) {
						if (i > g)return;
						i > h && (h = i)
					} else if (p > 0) {
						if (h > i)return;
						g > i && (g = i)
					}
					if (i = t - s, v || !(i > 0)) {
						if (i /= v, 0 > v) {
							if (h > i)return;
							g > i && (g = i)
						} else if (v > 0) {
							if (i > g)return;
							i > h && (h = i)
						}
						if (i = r - s, v || !(0 > i)) {
							if (i /= v, 0 > v) {
								if (i > g)return;
								i > h && (h = i)
							} else if (v > 0) {
								if (h > i)return;
								g > i && (g = i)
							}
							return h > 0 && (u.a = {x: c + h * p, y: s + h * v}), 1 > g && (u.b = {x: c + g * p, y: s + g * v}), u
						}
					}
				}
			}
		}
	}

	function Ue(n, t, e, r) {
		function u(r, u) {
			return ua(r[0] - n) < ka ? u > 0 ? 0 : 3 : ua(r[0] - e) < ka ? u > 0 ? 2 : 1 : ua(r[1] - t) < ka ? u > 0 ? 1 : 0 : u > 0 ? 3 : 2
		}

		function i(n, t) {
			return o(n.x, t.x)
		}

		function o(n, t) {
			var e = u(n, 1), r = u(t, 1);
			return e !== r ? e - r : 0 === e ? t[1] - n[1] : 1 === e ? n[0] - t[0] : 2 === e ? n[1] - t[1] : t[0] - n[0]
		}

		return function (a) {
			function c(n) {
				for (var t = 0, e = d.length, r = n[1], u = 0; e > u; ++u)for (var i, o = 1, a = d[u], c = a.length, s = a[0]; c > o; ++o)i = a[o], s[1] <= r ? i[1] > r && W(s, i, n) > 0 && ++t : i[1] <= r && W(s, i, n) < 0 && --t, s = i;
				return 0 !== t
			}

			function s(i, a, c, s) {
				var l = 0, f = 0;
				if (null == i || (l = u(i, c)) !== (f = u(a, c)) || o(i, a) < 0 ^ c > 0) {
					do s.point(0 === l || 3 === l ? n : e, l > 1 ? r : t); while ((l = (l + c + 4) % 4) !== f)
				} else s.point(a[0], a[1])
			}

			function l(u, i) {
				return u >= n && e >= u && i >= t && r >= i
			}

			function f(n, t) {
				l(n, t) && a.point(n, t)
			}

			function h() {
				N.point = p, d && d.push(m = []), S = !0, w = !1, _ = b = 0 / 0
			}

			function g() {
				v && (p(y, x), M && w && A.rejoin(), v.push(A.buffer())), N.point = f, w && a.lineEnd()
			}

			function p(n, t) {
				n = Math.max(-kc, Math.min(kc, n)), t = Math.max(-kc, Math.min(kc, t));
				var e = l(n, t);
				if (d && m.push([n, t]), S)y = n, x = t, M = e, S = !1, e && (a.lineStart(), a.point(n, t)); else if (e && w)a.point(n, t); else {
					var r = {a: {x: _, y: b}, b: {x: n, y: t}};
					C(r) ? (w || (a.lineStart(), a.point(r.a.x, r.a.y)), a.point(r.b.x, r.b.y), e || a.lineEnd(), k = !1) : e && (a.lineStart(), a.point(n, t), k = !1)
				}
				_ = n, b = t, w = e
			}

			var v, d, m, y, x, M, _, b, w, S, k, E = a, A = Ne(), C = Pe(n, t, e, r), N = {point: f, lineStart: h, lineEnd: g, polygonStart: function () {
				a = A, v = [], d = [], k = !0
			}, polygonEnd: function () {
				a = E, v = Zo.merge(v);
				var t = c([n, r]), e = k && t, u = v.length;
				(e || u) && (a.polygonStart(), e && (a.lineStart(), s(null, null, 1, a), a.lineEnd()), u && Se(v, i, t, s, a), a.polygonEnd()), v = d = m = null
			}};
			return N
		}
	}

	function je(n, t) {
		function e(e, r) {
			return e = n(e, r), t(e[0], e[1])
		}

		return n.invert && t.invert && (e.invert = function (e, r) {
			return e = t.invert(e, r), e && n.invert(e[0], e[1])
		}), e
	}

	function He(n) {
		var t = 0, e = ba / 3, r = tr(n), u = r(t, e);
		return u.parallels = function (n) {
			return arguments.length ? r(t = n[0] * ba / 180, e = n[1] * ba / 180) : [180 * (t / ba), 180 * (e / ba)]
		}, u
	}

	function Fe(n, t) {
		function e(n, t) {
			var e = Math.sqrt(i - 2 * u * Math.sin(t)) / u;
			return[e * Math.sin(n *= u), o - e * Math.cos(n)]
		}

		var r = Math.sin(n), u = (r + Math.sin(t)) / 2, i = 1 + r * (2 * u - r), o = Math.sqrt(i) / u;
		return e.invert = function (n, t) {
			var e = o - t;
			return[Math.atan2(n, e) / u, G((i - (n * n + e * e) * u * u) / (2 * u))]
		}, e
	}

	function Oe() {
		function n(n, t) {
			Ac += u * n - r * t, r = n, u = t
		}

		var t, e, r, u;
		Tc.point = function (i, o) {
			Tc.point = n, t = r = i, e = u = o
		}, Tc.lineEnd = function () {
			n(t, e)
		}
	}

	function Ye(n, t) {
		Cc > n && (Cc = n), n > zc && (zc = n), Nc > t && (Nc = t), t > Lc && (Lc = t)
	}

	function Ie() {
		function n(n, t) {
			o.push("M", n, ",", t, i)
		}

		function t(n, t) {
			o.push("M", n, ",", t), a.point = e
		}

		function e(n, t) {
			o.push("L", n, ",", t)
		}

		function r() {
			a.point = n
		}

		function u() {
			o.push("Z")
		}

		var i = Ze(4.5), o = [], a = {point: n, lineStart: function () {
			a.point = t
		}, lineEnd: r, polygonStart: function () {
			a.lineEnd = u
		}, polygonEnd: function () {
			a.lineEnd = r, a.point = n
		}, pointRadius: function (n) {
			return i = Ze(n), a
		}, result: function () {
			if (o.length) {
				var n = o.join("");
				return o = [], n
			}
		}};
		return a
	}

	function Ze(n) {
		return"m0," + n + "a" + n + "," + n + " 0 1,1 0," + -2 * n + "a" + n + "," + n + " 0 1,1 0," + 2 * n + "z"
	}

	function Ve(n, t) {
		pc += n, vc += t, ++dc
	}

	function Xe() {
		function n(n, r) {
			var u = n - t, i = r - e, o = Math.sqrt(u * u + i * i);
			mc += o * (t + n) / 2, yc += o * (e + r) / 2, xc += o, Ve(t = n, e = r)
		}

		var t, e;
		Rc.point = function (r, u) {
			Rc.point = n, Ve(t = r, e = u)
		}
	}

	function $e() {
		Rc.point = Ve
	}

	function Be() {
		function n(n, t) {
			var e = n - r, i = t - u, o = Math.sqrt(e * e + i * i);
			mc += o * (r + n) / 2, yc += o * (u + t) / 2, xc += o, o = u * n - r * t, Mc += o * (r + n), _c += o * (u + t), bc += 3 * o, Ve(r = n, u = t)
		}

		var t, e, r, u;
		Rc.point = function (i, o) {
			Rc.point = n, Ve(t = r = i, e = u = o)
		}, Rc.lineEnd = function () {
			n(t, e)
		}
	}

	function We(n) {
		function t(t, e) {
			n.moveTo(t, e), n.arc(t, e, o, 0, wa)
		}

		function e(t, e) {
			n.moveTo(t, e), a.point = r
		}

		function r(t, e) {
			n.lineTo(t, e)
		}

		function u() {
			a.point = t
		}

		function i() {
			n.closePath()
		}

		var o = 4.5, a = {point: t, lineStart: function () {
			a.point = e
		}, lineEnd: u, polygonStart: function () {
			a.lineEnd = i
		}, polygonEnd: function () {
			a.lineEnd = u, a.point = t
		}, pointRadius: function (n) {
			return o = n, a
		}, result: v};
		return a
	}

	function Je(n) {
		function t(n) {
			return(a ? r : e)(n)
		}

		function e(t) {
			return Qe(t, function (e, r) {
				e = n(e, r), t.point(e[0], e[1])
			})
		}

		function r(t) {
			function e(e, r) {
				e = n(e, r), t.point(e[0], e[1])
			}

			function r() {
				x = 0 / 0, S.point = i, t.lineStart()
			}

			function i(e, r) {
				var i = le([e, r]), o = n(e, r);
				u(x, M, y, _, b, w, x = o[0], M = o[1], y = e, _ = i[0], b = i[1], w = i[2], a, t), t.point(x, M)
			}

			function o() {
				S.point = e, t.lineEnd()
			}

			function c() {
				r(), S.point = s, S.lineEnd = l
			}

			function s(n, t) {
				i(f = n, h = t), g = x, p = M, v = _, d = b, m = w, S.point = i
			}

			function l() {
				u(x, M, y, _, b, w, g, p, f, v, d, m, a, t), S.lineEnd = o, o()
			}

			var f, h, g, p, v, d, m, y, x, M, _, b, w, S = {point: e, lineStart: r, lineEnd: o, polygonStart: function () {
				t.polygonStart(), S.lineStart = c
			}, polygonEnd: function () {
				t.polygonEnd(), S.lineStart = r
			}};
			return S
		}

		function u(t, e, r, a, c, s, l, f, h, g, p, v, d, m) {
			var y = l - t, x = f - e, M = y * y + x * x;
			if (M > 4 * i && d--) {
				var _ = a + g, b = c + p, w = s + v, S = Math.sqrt(_ * _ + b * b + w * w), k = Math.asin(w /= S), E = ua(ua(w) - 1) < ka || ua(r - h) < ka ? (r + h) / 2 : Math.atan2(b, _), A = n(E, k), C = A[0], N = A[1], z = C - t, L = N - e, T = x * z - y * L;
				(T * T / M > i || ua((y * z + x * L) / M - .5) > .3 || o > a * g + c * p + s * v) && (u(t, e, r, a, c, s, C, N, E, _ /= S, b /= S, w, d, m), m.point(C, N), u(C, N, E, _, b, w, l, f, h, g, p, v, d, m))
			}
		}

		var i = .5, o = Math.cos(30 * Aa), a = 16;
		return t.precision = function (n) {
			return arguments.length ? (a = (i = n * n) > 0 && 16, t) : Math.sqrt(i)
		}, t
	}

	function Ge(n) {
		var t = Je(function (t, e) {
			return n([t * Ca, e * Ca])
		});
		return function (n) {
			return er(t(n))
		}
	}

	function Ke(n) {
		this.stream = n
	}

	function Qe(n, t) {
		return{point: t, sphere: function () {
			n.sphere()
		}, lineStart: function () {
			n.lineStart()
		}, lineEnd: function () {
			n.lineEnd()
		}, polygonStart: function () {
			n.polygonStart()
		}, polygonEnd: function () {
			n.polygonEnd()
		}}
	}

	function nr(n) {
		return tr(function () {
			return n
		})()
	}

	function tr(n) {
		function t(n) {
			return n = a(n[0] * Aa, n[1] * Aa), [n[0] * h + c, s - n[1] * h]
		}

		function e(n) {
			return n = a.invert((n[0] - c) / h, (s - n[1]) / h), n && [n[0] * Ca, n[1] * Ca]
		}

		function r() {
			a = je(o = ir(m, y, x), i);
			var n = i(v, d);
			return c = g - n[0] * h, s = p + n[1] * h, u()
		}

		function u() {
			return l && (l.valid = !1, l = null), t
		}

		var i, o, a, c, s, l, f = Je(function (n, t) {
			return n = i(n, t), [n[0] * h + c, s - n[1] * h]
		}), h = 150, g = 480, p = 250, v = 0, d = 0, m = 0, y = 0, x = 0, M = Sc, _ = wt, b = null, w = null;
		return t.stream = function (n) {
			return l && (l.valid = !1), l = er(M(o, f(_(n)))), l.valid = !0, l
		}, t.clipAngle = function (n) {
			return arguments.length ? (M = null == n ? (b = n, Sc) : De((b = +n) * Aa), u()) : b
		}, t.clipExtent = function (n) {
			return arguments.length ? (w = n, _ = n ? Ue(n[0][0], n[0][1], n[1][0], n[1][1]) : wt, u()) : w
		}, t.scale = function (n) {
			return arguments.length ? (h = +n, r()) : h
		}, t.translate = function (n) {
			return arguments.length ? (g = +n[0], p = +n[1], r()) : [g, p]
		}, t.center = function (n) {
			return arguments.length ? (v = n[0] % 360 * Aa, d = n[1] % 360 * Aa, r()) : [v * Ca, d * Ca]
		}, t.rotate = function (n) {
			return arguments.length ? (m = n[0] % 360 * Aa, y = n[1] % 360 * Aa, x = n.length > 2 ? n[2] % 360 * Aa : 0, r()) : [m * Ca, y * Ca, x * Ca]
		}, Zo.rebind(t, f, "precision"), function () {
			return i = n.apply(this, arguments), t.invert = i.invert && e, r()
		}
	}

	function er(n) {
		return Qe(n, function (t, e) {
			n.point(t * Aa, e * Aa)
		})
	}

	function rr(n, t) {
		return[n, t]
	}

	function ur(n, t) {
		return[n > ba ? n - wa : -ba > n ? n + wa : n, t]
	}

	function ir(n, t, e) {
		return n ? t || e ? je(ar(n), cr(t, e)) : ar(n) : t || e ? cr(t, e) : ur
	}

	function or(n) {
		return function (t, e) {
			return t += n, [t > ba ? t - wa : -ba > t ? t + wa : t, e]
		}
	}

	function ar(n) {
		var t = or(n);
		return t.invert = or(-n), t
	}

	function cr(n, t) {
		function e(n, t) {
			var e = Math.cos(t), a = Math.cos(n) * e, c = Math.sin(n) * e, s = Math.sin(t), l = s * r + a * u;
			return[Math.atan2(c * i - l * o, a * r - s * u), G(l * i + c * o)]
		}

		var r = Math.cos(n), u = Math.sin(n), i = Math.cos(t), o = Math.sin(t);
		return e.invert = function (n, t) {
			var e = Math.cos(t), a = Math.cos(n) * e, c = Math.sin(n) * e, s = Math.sin(t), l = s * i - c * o;
			return[Math.atan2(c * i + s * o, a * r + l * u), G(l * r - a * u)]
		}, e
	}

	function sr(n, t) {
		var e = Math.cos(n), r = Math.sin(n);
		return function (u, i, o, a) {
			var c = o * t;
			null != u ? (u = lr(e, u), i = lr(e, i), (o > 0 ? i > u : u > i) && (u += o * wa)) : (u = n + o * wa, i = n - .5 * c);
			for (var s, l = u; o > 0 ? l > i : i > l; l -= c)a.point((s = de([e, -r * Math.cos(l), -r * Math.sin(l)]))[0], s[1])
		}
	}

	function lr(n, t) {
		var e = le(t);
		e[0] -= n, ve(e);
		var r = J(-e[1]);
		return((-e[2] < 0 ? -r : r) + 2 * Math.PI - ka) % (2 * Math.PI)
	}

	function fr(n, t, e) {
		var r = Zo.range(n, t - ka, e).concat(t);
		return function (n) {
			return r.map(function (t) {
				return[n, t]
			})
		}
	}

	function hr(n, t, e) {
		var r = Zo.range(n, t - ka, e).concat(t);
		return function (n) {
			return r.map(function (t) {
				return[t, n]
			})
		}
	}

	function gr(n) {
		return n.source
	}

	function pr(n) {
		return n.target
	}

	function vr(n, t, e, r) {
		var u = Math.cos(t), i = Math.sin(t), o = Math.cos(r), a = Math.sin(r), c = u * Math.cos(n), s = u * Math.sin(n), l = o * Math.cos(e), f = o * Math.sin(e), h = 2 * Math.asin(Math.sqrt(tt(r - t) + u * o * tt(e - n))), g = 1 / Math.sin(h), p = h ? function (n) {
			var t = Math.sin(n *= h) * g, e = Math.sin(h - n) * g, r = e * c + t * l, u = e * s + t * f, o = e * i + t * a;
			return[Math.atan2(u, r) * Ca, Math.atan2(o, Math.sqrt(r * r + u * u)) * Ca]
		} : function () {
			return[n * Ca, t * Ca]
		};
		return p.distance = h, p
	}

	function dr() {
		function n(n, u) {
			var i = Math.sin(u *= Aa), o = Math.cos(u), a = ua((n *= Aa) - t), c = Math.cos(a);
			Dc += Math.atan2(Math.sqrt((a = o * Math.sin(a)) * a + (a = r * i - e * o * c) * a), e * i + r * o * c), t = n, e = i, r = o
		}

		var t, e, r;
		Pc.point = function (u, i) {
			t = u * Aa, e = Math.sin(i *= Aa), r = Math.cos(i), Pc.point = n
		}, Pc.lineEnd = function () {
			Pc.point = Pc.lineEnd = v
		}
	}

	function mr(n, t) {
		function e(t, e) {
			var r = Math.cos(t), u = Math.cos(e), i = n(r * u);
			return[i * u * Math.sin(t), i * Math.sin(e)]
		}

		return e.invert = function (n, e) {
			var r = Math.sqrt(n * n + e * e), u = t(r), i = Math.sin(u), o = Math.cos(u);
			return[Math.atan2(n * i, r * o), Math.asin(r && e * i / r)]
		}, e
	}

	function yr(n, t) {
		function e(n, t) {
			o > 0 ? -Sa + ka > t && (t = -Sa + ka) : t > Sa - ka && (t = Sa - ka);
			var e = o / Math.pow(u(t), i);
			return[e * Math.sin(i * n), o - e * Math.cos(i * n)]
		}

		var r = Math.cos(n), u = function (n) {
			return Math.tan(ba / 4 + n / 2)
		}, i = n === t ? Math.sin(n) : Math.log(r / Math.cos(t)) / Math.log(u(t) / u(n)), o = r * Math.pow(u(n), i) / i;
		return i ? (e.invert = function (n, t) {
			var e = o - t, r = B(i) * Math.sqrt(n * n + e * e);
			return[Math.atan2(n, e) / i, 2 * Math.atan(Math.pow(o / r, 1 / i)) - Sa]
		}, e) : Mr
	}

	function xr(n, t) {
		function e(n, t) {
			var e = i - t;
			return[e * Math.sin(u * n), i - e * Math.cos(u * n)]
		}

		var r = Math.cos(n), u = n === t ? Math.sin(n) : (r - Math.cos(t)) / (t - n), i = r / u + n;
		return ua(u) < ka ? rr : (e.invert = function (n, t) {
			var e = i - t;
			return[Math.atan2(n, e) / u, i - B(u) * Math.sqrt(n * n + e * e)]
		}, e)
	}

	function Mr(n, t) {
		return[n, Math.log(Math.tan(ba / 4 + t / 2))]
	}

	function _r(n) {
		var t, e = nr(n), r = e.scale, u = e.translate, i = e.clipExtent;
		return e.scale = function () {
			var n = r.apply(e, arguments);
			return n === e ? t ? e.clipExtent(null) : e : n
		}, e.translate = function () {
			var n = u.apply(e, arguments);
			return n === e ? t ? e.clipExtent(null) : e : n
		}, e.clipExtent = function (n) {
			var o = i.apply(e, arguments);
			if (o === e) {
				if (t = null == n) {
					var a = ba * r(), c = u();
					i([
						[c[0] - a, c[1] - a],
						[c[0] + a, c[1] + a]
					])
				}
			} else t && (o = null);
			return o
		}, e.clipExtent(null)
	}

	function br(n, t) {
		return[Math.log(Math.tan(ba / 4 + t / 2)), -n]
	}

	function wr(n) {
		return n[0]
	}

	function Sr(n) {
		return n[1]
	}

	function kr(n) {
		for (var t = n.length, e = [0, 1], r = 2, u = 2; t > u; u++) {
			for (; r > 1 && W(n[e[r - 2]], n[e[r - 1]], n[u]) <= 0;)--r;
			e[r++] = u
		}
		return e.slice(0, r)
	}

	function Er(n, t) {
		return n[0] - t[0] || n[1] - t[1]
	}

	function Ar(n, t, e) {
		return(e[0] - t[0]) * (n[1] - t[1]) < (e[1] - t[1]) * (n[0] - t[0])
	}

	function Cr(n, t, e, r) {
		var u = n[0], i = e[0], o = t[0] - u, a = r[0] - i, c = n[1], s = e[1], l = t[1] - c, f = r[1] - s, h = (a * (c - s) - f * (u - i)) / (f * o - a * l);
		return[u + h * o, c + h * l]
	}

	function Nr(n) {
		var t = n[0], e = n[n.length - 1];
		return!(t[0] - e[0] || t[1] - e[1])
	}

	function zr() {
		Gr(this), this.edge = this.site = this.circle = null
	}

	function Lr(n) {
		var t = Bc.pop() || new zr;
		return t.site = n, t
	}

	function Tr(n) {
		Yr(n), Vc.remove(n), Bc.push(n), Gr(n)
	}

	function qr(n) {
		var t = n.circle, e = t.x, r = t.cy, u = {x: e, y: r}, i = n.P, o = n.N, a = [n];
		Tr(n);
		for (var c = i; c.circle && ua(e - c.circle.x) < ka && ua(r - c.circle.cy) < ka;)i = c.P, a.unshift(c), Tr(c), c = i;
		a.unshift(c), Yr(c);
		for (var s = o; s.circle && ua(e - s.circle.x) < ka && ua(r - s.circle.cy) < ka;)o = s.N, a.push(s), Tr(s), s = o;
		a.push(s), Yr(s);
		var l, f = a.length;
		for (l = 1; f > l; ++l)s = a[l], c = a[l - 1], Br(s.edge, c.site, s.site, u);
		c = a[0], s = a[f - 1], s.edge = Xr(c.site, s.site, null, u), Or(c), Or(s)
	}

	function Rr(n) {
		for (var t, e, r, u, i = n.x, o = n.y, a = Vc._; a;)if (r = Dr(a, o) - i, r > ka)a = a.L; else {
			if (u = i - Pr(a, o), !(u > ka)) {
				r > -ka ? (t = a.P, e = a) : u > -ka ? (t = a, e = a.N) : t = e = a;
				break
			}
			if (!a.R) {
				t = a;
				break
			}
			a = a.R
		}
		var c = Lr(n);
		if (Vc.insert(t, c), t || e) {
			if (t === e)return Yr(t), e = Lr(t.site), Vc.insert(c, e), c.edge = e.edge = Xr(t.site, c.site), Or(t), Or(e), void 0;
			if (!e)return c.edge = Xr(t.site, c.site), void 0;
			Yr(t), Yr(e);
			var s = t.site, l = s.x, f = s.y, h = n.x - l, g = n.y - f, p = e.site, v = p.x - l, d = p.y - f, m = 2 * (h * d - g * v), y = h * h + g * g, x = v * v + d * d, M = {x: (d * y - g * x) / m + l, y: (h * x - v * y) / m + f};
			Br(e.edge, s, p, M), c.edge = Xr(s, n, null, M), e.edge = Xr(n, p, null, M), Or(t), Or(e)
		}
	}

	function Dr(n, t) {
		var e = n.site, r = e.x, u = e.y, i = u - t;
		if (!i)return r;
		var o = n.P;
		if (!o)return-1 / 0;
		e = o.site;
		var a = e.x, c = e.y, s = c - t;
		if (!s)return a;
		var l = a - r, f = 1 / i - 1 / s, h = l / s;
		return f ? (-h + Math.sqrt(h * h - 2 * f * (l * l / (-2 * s) - c + s / 2 + u - i / 2))) / f + r : (r + a) / 2
	}

	function Pr(n, t) {
		var e = n.N;
		if (e)return Dr(e, t);
		var r = n.site;
		return r.y === t ? r.x : 1 / 0
	}

	function Ur(n) {
		this.site = n, this.edges = []
	}

	function jr(n) {
		for (var t, e, r, u, i, o, a, c, s, l, f = n[0][0], h = n[1][0], g = n[0][1], p = n[1][1], v = Zc, d = v.length; d--;)if (i = v[d], i && i.prepare())for (a = i.edges, c = a.length, o = 0; c > o;)l = a[o].end(), r = l.x, u = l.y, s = a[++o % c].start(), t = s.x, e = s.y, (ua(r - t) > ka || ua(u - e) > ka) && (a.splice(o, 0, new Wr($r(i.site, l, ua(r - f) < ka && p - u > ka ? {x: f, y: ua(t - f) < ka ? e : p} : ua(u - p) < ka && h - r > ka ? {x: ua(e - p) < ka ? t : h, y: p} : ua(r - h) < ka && u - g > ka ? {x: h, y: ua(t - h) < ka ? e : g} : ua(u - g) < ka && r - f > ka ? {x: ua(e - g) < ka ? t : f, y: g} : null), i.site, null)), ++c)
	}

	function Hr(n, t) {
		return t.angle - n.angle
	}

	function Fr() {
		Gr(this), this.x = this.y = this.arc = this.site = this.cy = null
	}

	function Or(n) {
		var t = n.P, e = n.N;
		if (t && e) {
			var r = t.site, u = n.site, i = e.site;
			if (r !== i) {
				var o = u.x, a = u.y, c = r.x - o, s = r.y - a, l = i.x - o, f = i.y - a, h = 2 * (c * f - s * l);
				if (!(h >= -Ea)) {
					var g = c * c + s * s, p = l * l + f * f, v = (f * g - s * p) / h, d = (c * p - l * g) / h, f = d + a, m = Wc.pop() || new Fr;
					m.arc = n, m.site = u, m.x = v + o, m.y = f + Math.sqrt(v * v + d * d), m.cy = f, n.circle = m;
					for (var y = null, x = $c._; x;)if (m.y < x.y || m.y === x.y && m.x <= x.x) {
						if (!x.L) {
							y = x.P;
							break
						}
						x = x.L
					} else {
						if (!x.R) {
							y = x;
							break
						}
						x = x.R
					}
					$c.insert(y, m), y || (Xc = m)
				}
			}
		}
	}

	function Yr(n) {
		var t = n.circle;
		t && (t.P || (Xc = t.N), $c.remove(t), Wc.push(t), Gr(t), n.circle = null)
	}

	function Ir(n) {
		for (var t, e = Ic, r = Pe(n[0][0], n[0][1], n[1][0], n[1][1]), u = e.length; u--;)t = e[u], (!Zr(t, n) || !r(t) || ua(t.a.x - t.b.x) < ka && ua(t.a.y - t.b.y) < ka) && (t.a = t.b = null, e.splice(u, 1))
	}

	function Zr(n, t) {
		var e = n.b;
		if (e)return!0;
		var r, u, i = n.a, o = t[0][0], a = t[1][0], c = t[0][1], s = t[1][1], l = n.l, f = n.r, h = l.x, g = l.y, p = f.x, v = f.y, d = (h + p) / 2, m = (g + v) / 2;
		if (v === g) {
			if (o > d || d >= a)return;
			if (h > p) {
				if (i) {
					if (i.y >= s)return
				} else i = {x: d, y: c};
				e = {x: d, y: s}
			} else {
				if (i) {
					if (i.y < c)return
				} else i = {x: d, y: s};
				e = {x: d, y: c}
			}
		} else if (r = (h - p) / (v - g), u = m - r * d, -1 > r || r > 1)if (h > p) {
			if (i) {
				if (i.y >= s)return
			} else i = {x: (c - u) / r, y: c};
			e = {x: (s - u) / r, y: s}
		} else {
			if (i) {
				if (i.y < c)return
			} else i = {x: (s - u) / r, y: s};
			e = {x: (c - u) / r, y: c}
		} else if (v > g) {
			if (i) {
				if (i.x >= a)return
			} else i = {x: o, y: r * o + u};
			e = {x: a, y: r * a + u}
		} else {
			if (i) {
				if (i.x < o)return
			} else i = {x: a, y: r * a + u};
			e = {x: o, y: r * o + u}
		}
		return n.a = i, n.b = e, !0
	}

	function Vr(n, t) {
		this.l = n, this.r = t, this.a = this.b = null
	}

	function Xr(n, t, e, r) {
		var u = new Vr(n, t);
		return Ic.push(u), e && Br(u, n, t, e), r && Br(u, t, n, r), Zc[n.i].edges.push(new Wr(u, n, t)), Zc[t.i].edges.push(new Wr(u, t, n)), u
	}

	function $r(n, t, e) {
		var r = new Vr(n, null);
		return r.a = t, r.b = e, Ic.push(r), r
	}

	function Br(n, t, e, r) {
		n.a || n.b ? n.l === e ? n.b = r : n.a = r : (n.a = r, n.l = t, n.r = e)
	}

	function Wr(n, t, e) {
		var r = n.a, u = n.b;
		this.edge = n, this.site = t, this.angle = e ? Math.atan2(e.y - t.y, e.x - t.x) : n.l === t ? Math.atan2(u.x - r.x, r.y - u.y) : Math.atan2(r.x - u.x, u.y - r.y)
	}

	function Jr() {
		this._ = null
	}

	function Gr(n) {
		n.U = n.C = n.L = n.R = n.P = n.N = null
	}

	function Kr(n, t) {
		var e = t, r = t.R, u = e.U;
		u ? u.L === e ? u.L = r : u.R = r : n._ = r, r.U = u, e.U = r, e.R = r.L, e.R && (e.R.U = e), r.L = e
	}

	function Qr(n, t) {
		var e = t, r = t.L, u = e.U;
		u ? u.L === e ? u.L = r : u.R = r : n._ = r, r.U = u, e.U = r, e.L = r.R, e.L && (e.L.U = e), r.R = e
	}

	function nu(n) {
		for (; n.L;)n = n.L;
		return n
	}

	function tu(n, t) {
		var e, r, u, i = n.sort(eu).pop();
		for (Ic = [], Zc = new Array(n.length), Vc = new Jr, $c = new Jr; ;)if (u = Xc, i && (!u || i.y < u.y || i.y === u.y && i.x < u.x))(i.x !== e || i.y !== r) && (Zc[i.i] = new Ur(i), Rr(i), e = i.x, r = i.y), i = n.pop(); else {
			if (!u)break;
			qr(u.arc)
		}
		t && (Ir(t), jr(t));
		var o = {cells: Zc, edges: Ic};
		return Vc = $c = Ic = Zc = null, o
	}

	function eu(n, t) {
		return t.y - n.y || t.x - n.x
	}

	function ru(n, t, e) {
		return(n.x - e.x) * (t.y - n.y) - (n.x - t.x) * (e.y - n.y)
	}

	function uu(n) {
		return n.x
	}

	function iu(n) {
		return n.y
	}

	function ou() {
		return{leaf: !0, nodes: [], point: null, x: null, y: null}
	}

	function au(n, t, e, r, u, i) {
		if (!n(t, e, r, u, i)) {
			var o = .5 * (e + u), a = .5 * (r + i), c = t.nodes;
			c[0] && au(n, c[0], e, r, o, a), c[1] && au(n, c[1], o, r, u, a), c[2] && au(n, c[2], e, a, o, i), c[3] && au(n, c[3], o, a, u, i)
		}
	}

	function cu(n, t) {
		n = Zo.rgb(n), t = Zo.rgb(t);
		var e = n.r, r = n.g, u = n.b, i = t.r - e, o = t.g - r, a = t.b - u;
		return function (n) {
			return"#" + dt(Math.round(e + i * n)) + dt(Math.round(r + o * n)) + dt(Math.round(u + a * n))
		}
	}

	function su(n, t) {
		var e, r = {}, u = {};
		for (e in n)e in t ? r[e] = hu(n[e], t[e]) : u[e] = n[e];
		for (e in t)e in n || (u[e] = t[e]);
		return function (n) {
			for (e in r)u[e] = r[e](n);
			return u
		}
	}

	function lu(n, t) {
		return t -= n = +n, function (e) {
			return n + t * e
		}
	}

	function fu(n, t) {
		var e, r, u, i = Gc.lastIndex = Kc.lastIndex = 0, o = -1, a = [], c = [];
		for (n += "", t += ""; (e = Gc.exec(n)) && (r = Kc.exec(t));)(u = r.index) > i && (u = t.substring(i, u), a[o] ? a[o] += u : a[++o] = u), (e = e[0]) === (r = r[0]) ? a[o] ? a[o] += r : a[++o] = r : (a[++o] = null, c.push({i: o, x: lu(e, r)})), i = Kc.lastIndex;
		return i < t.length && (u = t.substring(i), a[o] ? a[o] += u : a[++o] = u), a.length < 2 ? c[0] ? (t = c[0].x, function (n) {
			return t(n) + ""
		}) : function () {
			return t
		} : (t = c.length, function (n) {
			for (var e, r = 0; t > r; ++r)a[(e = c[r]).i] = e.x(n);
			return a.join("")
		})
	}

	function hu(n, t) {
		for (var e, r = Zo.interpolators.length; --r >= 0 && !(e = Zo.interpolators[r](n, t)););
		return e
	}

	function gu(n, t) {
		var e, r = [], u = [], i = n.length, o = t.length, a = Math.min(n.length, t.length);
		for (e = 0; a > e; ++e)r.push(hu(n[e], t[e]));
		for (; i > e; ++e)u[e] = n[e];
		for (; o > e; ++e)u[e] = t[e];
		return function (n) {
			for (e = 0; a > e; ++e)u[e] = r[e](n);
			return u
		}
	}

	function pu(n) {
		return function (t) {
			return 0 >= t ? 0 : t >= 1 ? 1 : n(t)
		}
	}

	function vu(n) {
		return function (t) {
			return 1 - n(1 - t)
		}
	}

	function du(n) {
		return function (t) {
			return.5 * (.5 > t ? n(2 * t) : 2 - n(2 - 2 * t))
		}
	}

	function mu(n) {
		return n * n
	}

	function yu(n) {
		return n * n * n
	}

	function xu(n) {
		if (0 >= n)return 0;
		if (n >= 1)return 1;
		var t = n * n, e = t * n;
		return 4 * (.5 > n ? e : 3 * (n - t) + e - .75)
	}

	function Mu(n) {
		return function (t) {
			return Math.pow(t, n)
		}
	}

	function _u(n) {
		return 1 - Math.cos(n * Sa)
	}

	function bu(n) {
		return Math.pow(2, 10 * (n - 1))
	}

	function wu(n) {
		return 1 - Math.sqrt(1 - n * n)
	}

	function Su(n, t) {
		var e;
		return arguments.length < 2 && (t = .45), arguments.length ? e = t / wa * Math.asin(1 / n) : (n = 1, e = t / 4), function (r) {
			return 1 + n * Math.pow(2, -10 * r) * Math.sin((r - e) * wa / t)
		}
	}

	function ku(n) {
		return n || (n = 1.70158), function (t) {
			return t * t * ((n + 1) * t - n)
		}
	}

	function Eu(n) {
		return 1 / 2.75 > n ? 7.5625 * n * n : 2 / 2.75 > n ? 7.5625 * (n -= 1.5 / 2.75) * n + .75 : 2.5 / 2.75 > n ? 7.5625 * (n -= 2.25 / 2.75) * n + .9375 : 7.5625 * (n -= 2.625 / 2.75) * n + .984375
	}

	function Au(n, t) {
		n = Zo.hcl(n), t = Zo.hcl(t);
		var e = n.h, r = n.c, u = n.l, i = t.h - e, o = t.c - r, a = t.l - u;
		return isNaN(o) && (o = 0, r = isNaN(r) ? t.c : r), isNaN(i) ? (i = 0, e = isNaN(e) ? t.h : e) : i > 180 ? i -= 360 : -180 > i && (i += 360), function (n) {
			return ot(e + i * n, r + o * n, u + a * n) + ""
		}
	}

	function Cu(n, t) {
		n = Zo.hsl(n), t = Zo.hsl(t);
		var e = n.h, r = n.s, u = n.l, i = t.h - e, o = t.s - r, a = t.l - u;
		return isNaN(o) && (o = 0, r = isNaN(r) ? t.s : r), isNaN(i) ? (i = 0, e = isNaN(e) ? t.h : e) : i > 180 ? i -= 360 : -180 > i && (i += 360), function (n) {
			return ut(e + i * n, r + o * n, u + a * n) + ""
		}
	}

	function Nu(n, t) {
		n = Zo.lab(n), t = Zo.lab(t);
		var e = n.l, r = n.a, u = n.b, i = t.l - e, o = t.a - r, a = t.b - u;
		return function (n) {
			return ct(e + i * n, r + o * n, u + a * n) + ""
		}
	}

	function zu(n, t) {
		return t -= n, function (e) {
			return Math.round(n + t * e)
		}
	}

	function Lu(n) {
		var t = [n.a, n.b], e = [n.c, n.d], r = qu(t), u = Tu(t, e), i = qu(Ru(e, t, -u)) || 0;
		t[0] * e[1] < e[0] * t[1] && (t[0] *= -1, t[1] *= -1, r *= -1, u *= -1), this.rotate = (r ? Math.atan2(t[1], t[0]) : Math.atan2(-e[0], e[1])) * Ca, this.translate = [n.e, n.f], this.scale = [r, i], this.skew = i ? Math.atan2(u, i) * Ca : 0
	}

	function Tu(n, t) {
		return n[0] * t[0] + n[1] * t[1]
	}

	function qu(n) {
		var t = Math.sqrt(Tu(n, n));
		return t && (n[0] /= t, n[1] /= t), t
	}

	function Ru(n, t, e) {
		return n[0] += e * t[0], n[1] += e * t[1], n
	}

	function Du(n, t) {
		var e, r = [], u = [], i = Zo.transform(n), o = Zo.transform(t), a = i.translate, c = o.translate, s = i.rotate, l = o.rotate, f = i.skew, h = o.skew, g = i.scale, p = o.scale;
		return a[0] != c[0] || a[1] != c[1] ? (r.push("translate(", null, ",", null, ")"), u.push({i: 1, x: lu(a[0], c[0])}, {i: 3, x: lu(a[1], c[1])})) : c[0] || c[1] ? r.push("translate(" + c + ")") : r.push(""), s != l ? (s - l > 180 ? l += 360 : l - s > 180 && (s += 360), u.push({i: r.push(r.pop() + "rotate(", null, ")") - 2, x: lu(s, l)})) : l && r.push(r.pop() + "rotate(" + l + ")"), f != h ? u.push({i: r.push(r.pop() + "skewX(", null, ")") - 2, x: lu(f, h)}) : h && r.push(r.pop() + "skewX(" + h + ")"), g[0] != p[0] || g[1] != p[1] ? (e = r.push(r.pop() + "scale(", null, ",", null, ")"), u.push({i: e - 4, x: lu(g[0], p[0])}, {i: e - 2, x: lu(g[1], p[1])})) : (1 != p[0] || 1 != p[1]) && r.push(r.pop() + "scale(" + p + ")"), e = u.length, function (n) {
			for (var t, i = -1; ++i < e;)r[(t = u[i]).i] = t.x(n);
			return r.join("")
		}
	}

	function Pu(n, t) {
		return t = t - (n = +n) ? 1 / (t - n) : 0, function (e) {
			return(e - n) * t
		}
	}

	function Uu(n, t) {
		return t = t - (n = +n) ? 1 / (t - n) : 0, function (e) {
			return Math.max(0, Math.min(1, (e - n) * t))
		}
	}

	function ju(n) {
		for (var t = n.source, e = n.target, r = Fu(t, e), u = [t]; t !== r;)t = t.parent, u.push(t);
		for (var i = u.length; e !== r;)u.splice(i, 0, e), e = e.parent;
		return u
	}

	function Hu(n) {
		for (var t = [], e = n.parent; null != e;)t.push(n), n = e, e = e.parent;
		return t.push(n), t
	}

	function Fu(n, t) {
		if (n === t)return n;
		for (var e = Hu(n), r = Hu(t), u = e.pop(), i = r.pop(), o = null; u === i;)o = u, u = e.pop(), i = r.pop();
		return o
	}

	function Ou(n) {
		n.fixed |= 2
	}

	function Yu(n) {
		n.fixed &= -7
	}

	function Iu(n) {
		n.fixed |= 4, n.px = n.x, n.py = n.y
	}

	function Zu(n) {
		n.fixed &= -5
	}

	function Vu(n, t, e) {
		var r = 0, u = 0;
		if (n.charge = 0, !n.leaf)for (var i, o = n.nodes, a = o.length, c = -1; ++c < a;)i = o[c], null != i && (Vu(i, t, e), n.charge += i.charge, r += i.charge * i.cx, u += i.charge * i.cy);
		if (n.point) {
			n.leaf || (n.point.x += Math.random() - .5, n.point.y += Math.random() - .5);
			var s = t * e[n.point.index];
			n.charge += n.pointCharge = s, r += s * n.point.x, u += s * n.point.y
		}
		n.cx = r / n.charge, n.cy = u / n.charge
	}

	function Xu(n, t) {
		return Zo.rebind(n, t, "sort", "children", "value"), n.nodes = n, n.links = Ku, n
	}

	function $u(n, t) {
		for (var e = [n]; null != (n = e.pop());)if (t(n), (u = n.children) && (r = u.length))for (var r, u; --r >= 0;)e.push(u[r])
	}

	function Bu(n, t) {
		for (var e = [n], r = []; null != (n = e.pop());)if (r.push(n), (i = n.children) && (u = i.length))for (var u, i, o = -1; ++o < u;)e.push(i[o]);
		for (; null != (n = r.pop());)t(n)
	}

	function Wu(n) {
		return n.children
	}

	function Ju(n) {
		return n.value
	}

	function Gu(n, t) {
		return t.value - n.value
	}

	function Ku(n) {
		return Zo.merge(n.map(function (n) {
			return(n.children || []).map(function (t) {
				return{source: n, target: t}
			})
		}))
	}

	function Qu(n) {
		return n.x
	}

	function ni(n) {
		return n.y
	}

	function ti(n, t, e) {
		n.y0 = t, n.y = e
	}

	function ei(n) {
		return Zo.range(n.length)
	}

	function ri(n) {
		for (var t = -1, e = n[0].length, r = []; ++t < e;)r[t] = 0;
		return r
	}

	function ui(n) {
		for (var t, e = 1, r = 0, u = n[0][1], i = n.length; i > e; ++e)(t = n[e][1]) > u && (r = e, u = t);
		return r
	}

	function ii(n) {
		return n.reduce(oi, 0)
	}

	function oi(n, t) {
		return n + t[1]
	}

	function ai(n, t) {
		return ci(n, Math.ceil(Math.log(t.length) / Math.LN2 + 1))
	}

	function ci(n, t) {
		for (var e = -1, r = +n[0], u = (n[1] - r) / t, i = []; ++e <= t;)i[e] = u * e + r;
		return i
	}

	function si(n) {
		return[Zo.min(n), Zo.max(n)]
	}

	function li(n, t) {
		return n.value - t.value
	}

	function fi(n, t) {
		var e = n._pack_next;
		n._pack_next = t, t._pack_prev = n, t._pack_next = e, e._pack_prev = t
	}

	function hi(n, t) {
		n._pack_next = t, t._pack_prev = n
	}

	function gi(n, t) {
		var e = t.x - n.x, r = t.y - n.y, u = n.r + t.r;
		return.999 * u * u > e * e + r * r
	}

	function pi(n) {
		function t(n) {
			l = Math.min(n.x - n.r, l), f = Math.max(n.x + n.r, f), h = Math.min(n.y - n.r, h), g = Math.max(n.y + n.r, g)
		}

		if ((e = n.children) && (s = e.length)) {
			var e, r, u, i, o, a, c, s, l = 1 / 0, f = -1 / 0, h = 1 / 0, g = -1 / 0;
			if (e.forEach(vi), r = e[0], r.x = -r.r, r.y = 0, t(r), s > 1 && (u = e[1], u.x = u.r, u.y = 0, t(u), s > 2))for (i = e[2], yi(r, u, i), t(i), fi(r, i), r._pack_prev = i, fi(i, u), u = r._pack_next, o = 3; s > o; o++) {
				yi(r, u, i = e[o]);
				var p = 0, v = 1, d = 1;
				for (a = u._pack_next; a !== u; a = a._pack_next, v++)if (gi(a, i)) {
					p = 1;
					break
				}
				if (1 == p)for (c = r._pack_prev; c !== a._pack_prev && !gi(c, i); c = c._pack_prev, d++);
				p ? (d > v || v == d && u.r < r.r ? hi(r, u = a) : hi(r = c, u), o--) : (fi(r, i), u = i, t(i))
			}
			var m = (l + f) / 2, y = (h + g) / 2, x = 0;
			for (o = 0; s > o; o++)i = e[o], i.x -= m, i.y -= y, x = Math.max(x, i.r + Math.sqrt(i.x * i.x + i.y * i.y));
			n.r = x, e.forEach(di)
		}
	}

	function vi(n) {
		n._pack_next = n._pack_prev = n
	}

	function di(n) {
		delete n._pack_next, delete n._pack_prev
	}

	function mi(n, t, e, r) {
		var u = n.children;
		if (n.x = t += r * n.x, n.y = e += r * n.y, n.r *= r, u)for (var i = -1, o = u.length; ++i < o;)mi(u[i], t, e, r)
	}

	function yi(n, t, e) {
		var r = n.r + e.r, u = t.x - n.x, i = t.y - n.y;
		if (r && (u || i)) {
			var o = t.r + e.r, a = u * u + i * i;
			o *= o, r *= r;
			var c = .5 + (r - o) / (2 * a), s = Math.sqrt(Math.max(0, 2 * o * (r + a) - (r -= a) * r - o * o)) / (2 * a);
			e.x = n.x + c * u + s * i, e.y = n.y + c * i - s * u
		} else e.x = n.x + r, e.y = n.y
	}

	function xi(n, t) {
		return n.parent == t.parent ? 1 : 2
	}

	function Mi(n) {
		var t = n.children;
		return t.length ? t[0] : n.t
	}

	function _i(n) {
		var t, e = n.children;
		return(t = e.length) ? e[t - 1] : n.t
	}

	function bi(n, t, e) {
		var r = e / (t.i - n.i);
		t.c -= r, t.s += e, n.c += r, t.z += e, t.m += e
	}

	function wi(n) {
		for (var t, e = 0, r = 0, u = n.children, i = u.length; --i >= 0;)t = u[i], t.z += e, t.m += e, e += t.s + (r += t.c)
	}

	function Si(n, t, e) {
		return n.a.parent === t.parent ? n.a : e
	}

	function ki(n) {
		return 1 + Zo.max(n, function (n) {
			return n.y
		})
	}

	function Ei(n) {
		return n.reduce(function (n, t) {
			return n + t.x
		}, 0) / n.length
	}

	function Ai(n) {
		var t = n.children;
		return t && t.length ? Ai(t[0]) : n
	}

	function Ci(n) {
		var t, e = n.children;
		return e && (t = e.length) ? Ci(e[t - 1]) : n
	}

	function Ni(n) {
		return{x: n.x, y: n.y, dx: n.dx, dy: n.dy}
	}

	function zi(n, t) {
		var e = n.x + t[3], r = n.y + t[0], u = n.dx - t[1] - t[3], i = n.dy - t[0] - t[2];
		return 0 > u && (e += u / 2, u = 0), 0 > i && (r += i / 2, i = 0), {x: e, y: r, dx: u, dy: i}
	}

	function Li(n) {
		var t = n[0], e = n[n.length - 1];
		return e > t ? [t, e] : [e, t]
	}

	function Ti(n) {
		return n.rangeExtent ? n.rangeExtent() : Li(n.range())
	}

	function qi(n, t, e, r) {
		var u = e(n[0], n[1]), i = r(t[0], t[1]);
		return function (n) {
			return i(u(n))
		}
	}

	function Ri(n, t) {
		var e, r = 0, u = n.length - 1, i = n[r], o = n[u];
		return i > o && (e = r, r = u, u = e, e = i, i = o, o = e), n[r] = t.floor(i), n[u] = t.ceil(o), n
	}

	function Di(n) {
		return n ? {floor: function (t) {
			return Math.floor(t / n) * n
		}, ceil: function (t) {
			return Math.ceil(t / n) * n
		}} : ss
	}

	function Pi(n, t, e, r) {
		var u = [], i = [], o = 0, a = Math.min(n.length, t.length) - 1;
		for (n[a] < n[0] && (n = n.slice().reverse(), t = t.slice().reverse()); ++o <= a;)u.push(e(n[o - 1], n[o])), i.push(r(t[o - 1], t[o]));
		return function (t) {
			var e = Zo.bisect(n, t, 1, a) - 1;
			return i[e](u[e](t))
		}
	}

	function Ui(n, t, e, r) {
		function u() {
			var u = Math.min(n.length, t.length) > 2 ? Pi : qi, c = r ? Uu : Pu;
			return o = u(n, t, c, e), a = u(t, n, c, hu), i
		}

		function i(n) {
			return o(n)
		}

		var o, a;
		return i.invert = function (n) {
			return a(n)
		}, i.domain = function (t) {
			return arguments.length ? (n = t.map(Number), u()) : n
		}, i.range = function (n) {
			return arguments.length ? (t = n, u()) : t
		}, i.rangeRound = function (n) {
			return i.range(n).interpolate(zu)
		}, i.clamp = function (n) {
			return arguments.length ? (r = n, u()) : r
		}, i.interpolate = function (n) {
			return arguments.length ? (e = n, u()) : e
		}, i.ticks = function (t) {
			return Oi(n, t)
		}, i.tickFormat = function (t, e) {
			return Yi(n, t, e)
		}, i.nice = function (t) {
			return Hi(n, t), u()
		}, i.copy = function () {
			return Ui(n, t, e, r)
		}, u()
	}

	function ji(n, t) {
		return Zo.rebind(n, t, "range", "rangeRound", "interpolate", "clamp")
	}

	function Hi(n, t) {
		return Ri(n, Di(Fi(n, t)[2]))
	}

	function Fi(n, t) {
		null == t && (t = 10);
		var e = Li(n), r = e[1] - e[0], u = Math.pow(10, Math.floor(Math.log(r / t) / Math.LN10)), i = t / r * u;
		return.15 >= i ? u *= 10 : .35 >= i ? u *= 5 : .75 >= i && (u *= 2), e[0] = Math.ceil(e[0] / u) * u, e[1] = Math.floor(e[1] / u) * u + .5 * u, e[2] = u, e
	}

	function Oi(n, t) {
		return Zo.range.apply(Zo, Fi(n, t))
	}

	function Yi(n, t, e) {
		var r = Fi(n, t);
		if (e) {
			var u = Ga.exec(e);
			if (u.shift(), "s" === u[8]) {
				var i = Zo.formatPrefix(Math.max(ua(r[0]), ua(r[1])));
				return u[7] || (u[7] = "." + Ii(i.scale(r[2]))), u[8] = "f", e = Zo.format(u.join("")), function (n) {
					return e(i.scale(n)) + i.symbol
				}
			}
			u[7] || (u[7] = "." + Zi(u[8], r)), e = u.join("")
		} else e = ",." + Ii(r[2]) + "f";
		return Zo.format(e)
	}

	function Ii(n) {
		return-Math.floor(Math.log(n) / Math.LN10 + .01)
	}

	function Zi(n, t) {
		var e = Ii(t[2]);
		return n in ls ? Math.abs(e - Ii(Math.max(ua(t[0]), ua(t[1])))) + +("e" !== n) : e - 2 * ("%" === n)
	}

	function Vi(n, t, e, r) {
		function u(n) {
			return(e ? Math.log(0 > n ? 0 : n) : -Math.log(n > 0 ? 0 : -n)) / Math.log(t)
		}

		function i(n) {
			return e ? Math.pow(t, n) : -Math.pow(t, -n)
		}

		function o(t) {
			return n(u(t))
		}

		return o.invert = function (t) {
			return i(n.invert(t))
		}, o.domain = function (t) {
			return arguments.length ? (e = t[0] >= 0, n.domain((r = t.map(Number)).map(u)), o) : r
		}, o.base = function (e) {
			return arguments.length ? (t = +e, n.domain(r.map(u)), o) : t
		}, o.nice = function () {
			var t = Ri(r.map(u), e ? Math : hs);
			return n.domain(t), r = t.map(i), o
		}, o.ticks = function () {
			var n = Li(r), o = [], a = n[0], c = n[1], s = Math.floor(u(a)), l = Math.ceil(u(c)), f = t % 1 ? 2 : t;
			if (isFinite(l - s)) {
				if (e) {
					for (; l > s; s++)for (var h = 1; f > h; h++)o.push(i(s) * h);
					o.push(i(s))
				} else for (o.push(i(s)); s++ < l;)for (var h = f - 1; h > 0; h--)o.push(i(s) * h);
				for (s = 0; o[s] < a; s++);
				for (l = o.length; o[l - 1] > c; l--);
				o = o.slice(s, l)
			}
			return o
		}, o.tickFormat = function (n, t) {
			if (!arguments.length)return fs;
			arguments.length < 2 ? t = fs : "function" != typeof t && (t = Zo.format(t));
			var r, a = Math.max(.1, n / o.ticks().length), c = e ? (r = 1e-12, Math.ceil) : (r = -1e-12, Math.floor);
			return function (n) {
				return n / i(c(u(n) + r)) <= a ? t(n) : ""
			}
		}, o.copy = function () {
			return Vi(n.copy(), t, e, r)
		}, ji(o, n)
	}

	function Xi(n, t, e) {
		function r(t) {
			return n(u(t))
		}

		var u = $i(t), i = $i(1 / t);
		return r.invert = function (t) {
			return i(n.invert(t))
		}, r.domain = function (t) {
			return arguments.length ? (n.domain((e = t.map(Number)).map(u)), r) : e
		}, r.ticks = function (n) {
			return Oi(e, n)
		}, r.tickFormat = function (n, t) {
			return Yi(e, n, t)
		}, r.nice = function (n) {
			return r.domain(Hi(e, n))
		}, r.exponent = function (o) {
			return arguments.length ? (u = $i(t = o), i = $i(1 / t), n.domain(e.map(u)), r) : t
		}, r.copy = function () {
			return Xi(n.copy(), t, e)
		}, ji(r, n)
	}

	function $i(n) {
		return function (t) {
			return 0 > t ? -Math.pow(-t, n) : Math.pow(t, n)
		}
	}

	function Bi(n, t) {
		function e(e) {
			return i[((u.get(e) || ("range" === t.t ? u.set(e, n.push(e)) : 0 / 0)) - 1) % i.length]
		}

		function r(t, e) {
			return Zo.range(n.length).map(function (n) {
				return t + e * n
			})
		}

		var u, i, a;
		return e.domain = function (r) {
			if (!arguments.length)return n;
			n = [], u = new o;
			for (var i, a = -1, c = r.length; ++a < c;)u.has(i = r[a]) || u.set(i, n.push(i));
			return e[t.t].apply(e, t.a)
		}, e.range = function (n) {
			return arguments.length ? (i = n, a = 0, t = {t: "range", a: arguments}, e) : i
		}, e.rangePoints = function (u, o) {
			arguments.length < 2 && (o = 0);
			var c = u[0], s = u[1], l = (s - c) / (Math.max(1, n.length - 1) + o);
			return i = r(n.length < 2 ? (c + s) / 2 : c + l * o / 2, l), a = 0, t = {t: "rangePoints", a: arguments}, e
		}, e.rangeBands = function (u, o, c) {
			arguments.length < 2 && (o = 0), arguments.length < 3 && (c = o);
			var s = u[1] < u[0], l = u[s - 0], f = u[1 - s], h = (f - l) / (n.length - o + 2 * c);
			return i = r(l + h * c, h), s && i.reverse(), a = h * (1 - o), t = {t: "rangeBands", a: arguments}, e
		}, e.rangeRoundBands = function (u, o, c) {
			arguments.length < 2 && (o = 0), arguments.length < 3 && (c = o);
			var s = u[1] < u[0], l = u[s - 0], f = u[1 - s], h = Math.floor((f - l) / (n.length - o + 2 * c)), g = f - l - (n.length - o) * h;
			return i = r(l + Math.round(g / 2), h), s && i.reverse(), a = Math.round(h * (1 - o)), t = {t: "rangeRoundBands", a: arguments}, e
		}, e.rangeBand = function () {
			return a
		}, e.rangeExtent = function () {
			return Li(t.a[0])
		}, e.copy = function () {
			return Bi(n, t)
		}, e.domain(n)
	}

	function Wi(e, r) {
		function u() {
			var n = 0, t = r.length;
			for (o = []; ++n < t;)o[n - 1] = Zo.quantile(e, n / t);
			return i
		}

		function i(n) {
			return isNaN(n = +n) ? void 0 : r[Zo.bisect(o, n)]
		}

		var o;
		return i.domain = function (r) {
			return arguments.length ? (e = r.filter(t).sort(n), u()) : e
		}, i.range = function (n) {
			return arguments.length ? (r = n, u()) : r
		}, i.quantiles = function () {
			return o
		}, i.invertExtent = function (n) {
			return n = r.indexOf(n), 0 > n ? [0 / 0, 0 / 0] : [n > 0 ? o[n - 1] : e[0], n < o.length ? o[n] : e[e.length - 1]]
		}, i.copy = function () {
			return Wi(e, r)
		}, u()
	}

	function Ji(n, t, e) {
		function r(t) {
			return e[Math.max(0, Math.min(o, Math.floor(i * (t - n))))]
		}

		function u() {
			return i = e.length / (t - n), o = e.length - 1, r
		}

		var i, o;
		return r.domain = function (e) {
			return arguments.length ? (n = +e[0], t = +e[e.length - 1], u()) : [n, t]
		}, r.range = function (n) {
			return arguments.length ? (e = n, u()) : e
		}, r.invertExtent = function (t) {
			return t = e.indexOf(t), t = 0 > t ? 0 / 0 : t / i + n, [t, t + 1 / i]
		}, r.copy = function () {
			return Ji(n, t, e)
		}, u()
	}

	function Gi(n, t) {
		function e(e) {
			return e >= e ? t[Zo.bisect(n, e)] : void 0
		}

		return e.domain = function (t) {
			return arguments.length ? (n = t, e) : n
		}, e.range = function (n) {
			return arguments.length ? (t = n, e) : t
		}, e.invertExtent = function (e) {
			return e = t.indexOf(e), [n[e - 1], n[e]]
		}, e.copy = function () {
			return Gi(n, t)
		}, e
	}

	function Ki(n) {
		function t(n) {
			return+n
		}

		return t.invert = t, t.domain = t.range = function (e) {
			return arguments.length ? (n = e.map(t), t) : n
		}, t.ticks = function (t) {
			return Oi(n, t)
		}, t.tickFormat = function (t, e) {
			return Yi(n, t, e)
		}, t.copy = function () {
			return Ki(n)
		}, t
	}

	function Qi(n) {
		return n.innerRadius
	}

	function no(n) {
		return n.outerRadius
	}

	function to(n) {
		return n.startAngle
	}

	function eo(n) {
		return n.endAngle
	}

	function ro(n) {
		function t(t) {
			function o() {
				s.push("M", i(n(l), a))
			}

			for (var c, s = [], l = [], f = -1, h = t.length, g = bt(e), p = bt(r); ++f < h;)u.call(this, c = t[f], f) ? l.push([+g.call(this, c, f), +p.call(this, c, f)]) : l.length && (o(), l = []);
			return l.length && o(), s.length ? s.join("") : null
		}

		var e = wr, r = Sr, u = we, i = uo, o = i.key, a = .7;
		return t.x = function (n) {
			return arguments.length ? (e = n, t) : e
		}, t.y = function (n) {
			return arguments.length ? (r = n, t) : r
		}, t.defined = function (n) {
			return arguments.length ? (u = n, t) : u
		}, t.interpolate = function (n) {
			return arguments.length ? (o = "function" == typeof n ? i = n : (i = xs.get(n) || uo).key, t) : o
		}, t.tension = function (n) {
			return arguments.length ? (a = n, t) : a
		}, t
	}

	function uo(n) {
		return n.join("L")
	}

	function io(n) {
		return uo(n) + "Z"
	}

	function oo(n) {
		for (var t = 0, e = n.length, r = n[0], u = [r[0], ",", r[1]]; ++t < e;)u.push("H", (r[0] + (r = n[t])[0]) / 2, "V", r[1]);
		return e > 1 && u.push("H", r[0]), u.join("")
	}

	function ao(n) {
		for (var t = 0, e = n.length, r = n[0], u = [r[0], ",", r[1]]; ++t < e;)u.push("V", (r = n[t])[1], "H", r[0]);
		return u.join("")
	}

	function co(n) {
		for (var t = 0, e = n.length, r = n[0], u = [r[0], ",", r[1]]; ++t < e;)u.push("H", (r = n[t])[0], "V", r[1]);
		return u.join("")
	}

	function so(n, t) {
		return n.length < 4 ? uo(n) : n[1] + ho(n.slice(1, n.length - 1), go(n, t))
	}

	function lo(n, t) {
		return n.length < 3 ? uo(n) : n[0] + ho((n.push(n[0]), n), go([n[n.length - 2]].concat(n, [n[1]]), t))
	}

	function fo(n, t) {
		return n.length < 3 ? uo(n) : n[0] + ho(n, go(n, t))
	}

	function ho(n, t) {
		if (t.length < 1 || n.length != t.length && n.length != t.length + 2)return uo(n);
		var e = n.length != t.length, r = "", u = n[0], i = n[1], o = t[0], a = o, c = 1;
		if (e && (r += "Q" + (i[0] - 2 * o[0] / 3) + "," + (i[1] - 2 * o[1] / 3) + "," + i[0] + "," + i[1], u = n[1], c = 2), t.length > 1) {
			a = t[1], i = n[c], c++, r += "C" + (u[0] + o[0]) + "," + (u[1] + o[1]) + "," + (i[0] - a[0]) + "," + (i[1] - a[1]) + "," + i[0] + "," + i[1];
			for (var s = 2; s < t.length; s++, c++)i = n[c], a = t[s], r += "S" + (i[0] - a[0]) + "," + (i[1] - a[1]) + "," + i[0] + "," + i[1]
		}
		if (e) {
			var l = n[c];
			r += "Q" + (i[0] + 2 * a[0] / 3) + "," + (i[1] + 2 * a[1] / 3) + "," + l[0] + "," + l[1]
		}
		return r
	}

	function go(n, t) {
		for (var e, r = [], u = (1 - t) / 2, i = n[0], o = n[1], a = 1, c = n.length; ++a < c;)e = i, i = o, o = n[a], r.push([u * (o[0] - e[0]), u * (o[1] - e[1])]);
		return r
	}

	function po(n) {
		if (n.length < 3)return uo(n);
		var t = 1, e = n.length, r = n[0], u = r[0], i = r[1], o = [u, u, u, (r = n[1])[0]], a = [i, i, i, r[1]], c = [u, ",", i, "L", xo(bs, o), ",", xo(bs, a)];
		for (n.push(n[e - 1]); ++t <= e;)r = n[t], o.shift(), o.push(r[0]), a.shift(), a.push(r[1]), Mo(c, o, a);
		return n.pop(), c.push("L", r), c.join("")
	}

	function vo(n) {
		if (n.length < 4)return uo(n);
		for (var t, e = [], r = -1, u = n.length, i = [0], o = [0]; ++r < 3;)t = n[r], i.push(t[0]), o.push(t[1]);
		for (e.push(xo(bs, i) + "," + xo(bs, o)), --r; ++r < u;)t = n[r], i.shift(), i.push(t[0]), o.shift(), o.push(t[1]), Mo(e, i, o);
		return e.join("")
	}

	function mo(n) {
		for (var t, e, r = -1, u = n.length, i = u + 4, o = [], a = []; ++r < 4;)e = n[r % u], o.push(e[0]), a.push(e[1]);
		for (t = [xo(bs, o), ",", xo(bs, a)], --r; ++r < i;)e = n[r % u], o.shift(), o.push(e[0]), a.shift(), a.push(e[1]), Mo(t, o, a);
		return t.join("")
	}

	function yo(n, t) {
		var e = n.length - 1;
		if (e)for (var r, u, i = n[0][0], o = n[0][1], a = n[e][0] - i, c = n[e][1] - o, s = -1; ++s <= e;)r = n[s], u = s / e, r[0] = t * r[0] + (1 - t) * (i + u * a), r[1] = t * r[1] + (1 - t) * (o + u * c);
		return po(n)
	}

	function xo(n, t) {
		return n[0] * t[0] + n[1] * t[1] + n[2] * t[2] + n[3] * t[3]
	}

	function Mo(n, t, e) {
		n.push("C", xo(Ms, t), ",", xo(Ms, e), ",", xo(_s, t), ",", xo(_s, e), ",", xo(bs, t), ",", xo(bs, e))
	}

	function _o(n, t) {
		return(t[1] - n[1]) / (t[0] - n[0])
	}

	function bo(n) {
		for (var t = 0, e = n.length - 1, r = [], u = n[0], i = n[1], o = r[0] = _o(u, i); ++t < e;)r[t] = (o + (o = _o(u = i, i = n[t + 1]))) / 2;
		return r[t] = o, r
	}

	function wo(n) {
		for (var t, e, r, u, i = [], o = bo(n), a = -1, c = n.length - 1; ++a < c;)t = _o(n[a], n[a + 1]), ua(t) < ka ? o[a] = o[a + 1] = 0 : (e = o[a] / t, r = o[a + 1] / t, u = e * e + r * r, u > 9 && (u = 3 * t / Math.sqrt(u), o[a] = u * e, o[a + 1] = u * r));
		for (a = -1; ++a <= c;)u = (n[Math.min(c, a + 1)][0] - n[Math.max(0, a - 1)][0]) / (6 * (1 + o[a] * o[a])), i.push([u || 0, o[a] * u || 0]);
		return i
	}

	function So(n) {
		return n.length < 3 ? uo(n) : n[0] + ho(n, wo(n))
	}

	function ko(n) {
		for (var t, e, r, u = -1, i = n.length; ++u < i;)t = n[u], e = t[0], r = t[1] + ms, t[0] = e * Math.cos(r), t[1] = e * Math.sin(r);
		return n
	}

	function Eo(n) {
		function t(t) {
			function c() {
				v.push("M", a(n(m), f), l, s(n(d.reverse()), f), "Z")
			}

			for (var h, g, p, v = [], d = [], m = [], y = -1, x = t.length, M = bt(e), _ = bt(u), b = e === r ? function () {
				return g
			} : bt(r), w = u === i ? function () {
				return p
			} : bt(i); ++y < x;)o.call(this, h = t[y], y) ? (d.push([g = +M.call(this, h, y), p = +_.call(this, h, y)]), m.push([+b.call(this, h, y), +w.call(this, h, y)])) : d.length && (c(), d = [], m = []);
			return d.length && c(), v.length ? v.join("") : null
		}

		var e = wr, r = wr, u = 0, i = Sr, o = we, a = uo, c = a.key, s = a, l = "L", f = .7;
		return t.x = function (n) {
			return arguments.length ? (e = r = n, t) : r
		}, t.x0 = function (n) {
			return arguments.length ? (e = n, t) : e
		}, t.x1 = function (n) {
			return arguments.length ? (r = n, t) : r
		}, t.y = function (n) {
			return arguments.length ? (u = i = n, t) : i
		}, t.y0 = function (n) {
			return arguments.length ? (u = n, t) : u
		}, t.y1 = function (n) {
			return arguments.length ? (i = n, t) : i
		}, t.defined = function (n) {
			return arguments.length ? (o = n, t) : o
		}, t.interpolate = function (n) {
			return arguments.length ? (c = "function" == typeof n ? a = n : (a = xs.get(n) || uo).key, s = a.reverse || a, l = a.closed ? "M" : "L", t) : c
		}, t.tension = function (n) {
			return arguments.length ? (f = n, t) : f
		}, t
	}

	function Ao(n) {
		return n.radius
	}

	function Co(n) {
		return[n.x, n.y]
	}

	function No(n) {
		return function () {
			var t = n.apply(this, arguments), e = t[0], r = t[1] + ms;
			return[e * Math.cos(r), e * Math.sin(r)]
		}
	}

	function zo() {
		return 64
	}

	function Lo() {
		return"circle"
	}

	function To(n) {
		var t = Math.sqrt(n / ba);
		return"M0," + t + "A" + t + "," + t + " 0 1,1 0," + -t + "A" + t + "," + t + " 0 1,1 0," + t + "Z"
	}

	function qo(n, t) {
		return sa(n, Cs), n.id = t, n
	}

	function Ro(n, t, e, r) {
		var u = n.id;
		return P(n, "function" == typeof e ? function (n, i, o) {
			n.__transition__[u].tween.set(t, r(e.call(n, n.__data__, i, o)))
		} : (e = r(e), function (n) {
			n.__transition__[u].tween.set(t, e)
		}))
	}

	function Do(n) {
		return null == n && (n = ""), function () {
			this.textContent = n
		}
	}

	function Po(n, t, e, r) {
		var u = n.__transition__ || (n.__transition__ = {active: 0, count: 0}), i = u[e];
		if (!i) {
			var a = r.time;
			i = u[e] = {tween: new o, time: a, ease: r.ease, delay: r.delay, duration: r.duration}, ++u.count, Zo.timer(function (r) {
				function o(r) {
					return u.active > e ? s() : (u.active = e, i.event && i.event.start.call(n, l, t), i.tween.forEach(function (e, r) {
						(r = r.call(n, l, t)) && v.push(r)
					}), Zo.timer(function () {
						return p.c = c(r || 1) ? we : c, 1
					}, 0, a), void 0)
				}

				function c(r) {
					if (u.active !== e)return s();
					for (var o = r / g, a = f(o), c = v.length; c > 0;)v[--c].call(n, a);
					return o >= 1 ? (i.event && i.event.end.call(n, l, t), s()) : void 0
				}

				function s() {
					return--u.count ? delete u[e] : delete n.__transition__, 1
				}

				var l = n.__data__, f = i.ease, h = i.delay, g = i.duration, p = Ba, v = [];
				return p.t = h + a, r >= h ? o(r - h) : (p.c = o, void 0)
			}, 0, a)
		}
	}

	function Uo(n, t) {
		n.attr("transform", function (n) {
			return"translate(" + t(n) + ",0)"
		})
	}

	function jo(n, t) {
		n.attr("transform", function (n) {
			return"translate(0," + t(n) + ")"
		})
	}

	function Ho(n) {
		return n.toISOString()
	}

	function Fo(n, t, e) {
		function r(t) {
			return n(t)
		}

		function u(n, e) {
			var r = n[1] - n[0], u = r / e, i = Zo.bisect(Us, u);
			return i == Us.length ? [t.year, Fi(n.map(function (n) {
				return n / 31536e6
			}), e)[2]] : i ? t[u / Us[i - 1] < Us[i] / u ? i - 1 : i] : [Fs, Fi(n, e)[2]]
		}

		return r.invert = function (t) {
			return Oo(n.invert(t))
		}, r.domain = function (t) {
			return arguments.length ? (n.domain(t), r) : n.domain().map(Oo)
		}, r.nice = function (n, t) {
			function e(e) {
				return!isNaN(e) && !n.range(e, Oo(+e + 1), t).length
			}

			var i = r.domain(), o = Li(i), a = null == n ? u(o, 10) : "number" == typeof n && u(o, n);
			return a && (n = a[0], t = a[1]), r.domain(Ri(i, t > 1 ? {floor: function (t) {
				for (; e(t = n.floor(t));)t = Oo(t - 1);
				return t
			}, ceil: function (t) {
				for (; e(t = n.ceil(t));)t = Oo(+t + 1);
				return t
			}} : n))
		}, r.ticks = function (n, t) {
			var e = Li(r.domain()), i = null == n ? u(e, 10) : "number" == typeof n ? u(e, n) : !n.range && [
				{range: n},
				t
			];
			return i && (n = i[0], t = i[1]), n.range(e[0], Oo(+e[1] + 1), 1 > t ? 1 : t)
		}, r.tickFormat = function () {
			return e
		}, r.copy = function () {
			return Fo(n.copy(), t, e)
		}, ji(r, n)
	}

	function Oo(n) {
		return new Date(n)
	}

	function Yo(n) {
		return JSON.parse(n.responseText)
	}

	function Io(n) {
		var t = $o.createRange();
		return t.selectNode($o.body), t.createContextualFragment(n.responseText)
	}

	var Zo = {version: "3.4.11"};
	Date.now || (Date.now = function () {
		return+new Date
	});
	var Vo = [].slice, Xo = function (n) {
		return Vo.call(n)
	}, $o = document, Bo = $o.documentElement, Wo = window;
	try {
		Xo(Bo.childNodes)[0].nodeType
	} catch (Jo) {
		Xo = function (n) {
			for (var t = n.length, e = new Array(t); t--;)e[t] = n[t];
			return e
		}
	}
	try {
		$o.createElement("div").style.setProperty("opacity", 0, "")
	} catch (Go) {
		var Ko = Wo.Element.prototype, Qo = Ko.setAttribute, na = Ko.setAttributeNS, ta = Wo.CSSStyleDeclaration.prototype, ea = ta.setProperty;
		Ko.setAttribute = function (n, t) {
			Qo.call(this, n, t + "")
		}, Ko.setAttributeNS = function (n, t, e) {
			na.call(this, n, t, e + "")
		}, ta.setProperty = function (n, t, e) {
			ea.call(this, n, t + "", e)
		}
	}
	Zo.ascending = n, Zo.descending = function (n, t) {
		return n > t ? -1 : t > n ? 1 : t >= n ? 0 : 0 / 0
	}, Zo.min = function (n, t) {
		var e, r, u = -1, i = n.length;
		if (1 === arguments.length) {
			for (; ++u < i && !(null != (e = n[u]) && e >= e);)e = void 0;
			for (; ++u < i;)null != (r = n[u]) && e > r && (e = r)
		} else {
			for (; ++u < i && !(null != (e = t.call(n, n[u], u)) && e >= e);)e = void 0;
			for (; ++u < i;)null != (r = t.call(n, n[u], u)) && e > r && (e = r)
		}
		return e
	}, Zo.max = function (n, t) {
		var e, r, u = -1, i = n.length;
		if (1 === arguments.length) {
			for (; ++u < i && !(null != (e = n[u]) && e >= e);)e = void 0;
			for (; ++u < i;)null != (r = n[u]) && r > e && (e = r)
		} else {
			for (; ++u < i && !(null != (e = t.call(n, n[u], u)) && e >= e);)e = void 0;
			for (; ++u < i;)null != (r = t.call(n, n[u], u)) && r > e && (e = r)
		}
		return e
	}, Zo.extent = function (n, t) {
		var e, r, u, i = -1, o = n.length;
		if (1 === arguments.length) {
			for (; ++i < o && !(null != (e = u = n[i]) && e >= e);)e = u = void 0;
			for (; ++i < o;)null != (r = n[i]) && (e > r && (e = r), r > u && (u = r))
		} else {
			for (; ++i < o && !(null != (e = u = t.call(n, n[i], i)) && e >= e);)e = void 0;
			for (; ++i < o;)null != (r = t.call(n, n[i], i)) && (e > r && (e = r), r > u && (u = r))
		}
		return[e, u]
	}, Zo.sum = function (n, t) {
		var e, r = 0, u = n.length, i = -1;
		if (1 === arguments.length)for (; ++i < u;)isNaN(e = +n[i]) || (r += e); else for (; ++i < u;)isNaN(e = +t.call(n, n[i], i)) || (r += e);
		return r
	}, Zo.mean = function (n, e) {
		var r, u = 0, i = n.length, o = -1, a = i;
		if (1 === arguments.length)for (; ++o < i;)t(r = n[o]) ? u += r : --a; else for (; ++o < i;)t(r = e.call(n, n[o], o)) ? u += r : --a;
		return a ? u / a : void 0
	}, Zo.quantile = function (n, t) {
		var e = (n.length - 1) * t + 1, r = Math.floor(e), u = +n[r - 1], i = e - r;
		return i ? u + i * (n[r] - u) : u
	}, Zo.median = function (e, r) {
		return arguments.length > 1 && (e = e.map(r)), e = e.filter(t), e.length ? Zo.quantile(e.sort(n), .5) : void 0
	};
	var ra = e(n);
	Zo.bisectLeft = ra.left, Zo.bisect = Zo.bisectRight = ra.right, Zo.bisector = function (t) {
		return e(1 === t.length ? function (e, r) {
			return n(t(e), r)
		} : t)
	}, Zo.shuffle = function (n) {
		for (var t, e, r = n.length; r;)e = 0 | Math.random() * r--, t = n[r], n[r] = n[e], n[e] = t;
		return n
	}, Zo.permute = function (n, t) {
		for (var e = t.length, r = new Array(e); e--;)r[e] = n[t[e]];
		return r
	}, Zo.pairs = function (n) {
		for (var t, e = 0, r = n.length - 1, u = n[0], i = new Array(0 > r ? 0 : r); r > e;)i[e] = [t = u, u = n[++e]];
		return i
	}, Zo.zip = function () {
		if (!(u = arguments.length))return[];
		for (var n = -1, t = Zo.min(arguments, r), e = new Array(t); ++n < t;)for (var u, i = -1, o = e[n] = new Array(u); ++i < u;)o[i] = arguments[i][n];
		return e
	}, Zo.transpose = function (n) {
		return Zo.zip.apply(Zo, n)
	}, Zo.keys = function (n) {
		var t = [];
		for (var e in n)t.push(e);
		return t
	}, Zo.values = function (n) {
		var t = [];
		for (var e in n)t.push(n[e]);
		return t
	}, Zo.entries = function (n) {
		var t = [];
		for (var e in n)t.push({key: e, value: n[e]});
		return t
	}, Zo.merge = function (n) {
		for (var t, e, r, u = n.length, i = -1, o = 0; ++i < u;)o += n[i].length;
		for (e = new Array(o); --u >= 0;)for (r = n[u], t = r.length; --t >= 0;)e[--o] = r[t];
		return e
	};
	var ua = Math.abs;
	Zo.range = function (n, t, e) {
		if (arguments.length < 3 && (e = 1, arguments.length < 2 && (t = n, n = 0)), 1 / 0 === (t - n) / e)throw new Error("infinite range");
		var r, i = [], o = u(ua(e)), a = -1;
		if (n *= o, t *= o, e *= o, 0 > e)for (; (r = n + e * ++a) > t;)i.push(r / o); else for (; (r = n + e * ++a) < t;)i.push(r / o);
		return i
	}, Zo.map = function (n) {
		var t = new o;
		if (n instanceof o)n.forEach(function (n, e) {
			t.set(n, e)
		}); else for (var e in n)t.set(e, n[e]);
		return t
	}, i(o, {has: a, get: function (n) {
		return this[ia + n]
	}, set: function (n, t) {
		return this[ia + n] = t
	}, remove: c, keys: s, values: function () {
		var n = [];
		return this.forEach(function (t, e) {
			n.push(e)
		}), n
	}, entries: function () {
		var n = [];
		return this.forEach(function (t, e) {
			n.push({key: t, value: e})
		}), n
	}, size: l, empty: f, forEach: function (n) {
		for (var t in this)t.charCodeAt(0) === oa && n.call(this, t.substring(1), this[t])
	}});
	var ia = "\x00", oa = ia.charCodeAt(0);
	Zo.nest = function () {
		function n(t, a, c) {
			if (c >= i.length)return r ? r.call(u, a) : e ? a.sort(e) : a;
			for (var s, l, f, h, g = -1, p = a.length, v = i[c++], d = new o; ++g < p;)(h = d.get(s = v(l = a[g]))) ? h.push(l) : d.set(s, [l]);
			return t ? (l = t(), f = function (e, r) {
				l.set(e, n(t, r, c))
			}) : (l = {}, f = function (e, r) {
				l[e] = n(t, r, c)
			}), d.forEach(f), l
		}

		function t(n, e) {
			if (e >= i.length)return n;
			var r = [], u = a[e++];
			return n.forEach(function (n, u) {
				r.push({key: n, values: t(u, e)})
			}), u ? r.sort(function (n, t) {
				return u(n.key, t.key)
			}) : r
		}

		var e, r, u = {}, i = [], a = [];
		return u.map = function (t, e) {
			return n(e, t, 0)
		}, u.entries = function (e) {
			return t(n(Zo.map, e, 0), 0)
		}, u.key = function (n) {
			return i.push(n), u
		}, u.sortKeys = function (n) {
			return a[i.length - 1] = n, u
		}, u.sortValues = function (n) {
			return e = n, u
		}, u.rollup = function (n) {
			return r = n, u
		}, u
	}, Zo.set = function (n) {
		var t = new h;
		if (n)for (var e = 0, r = n.length; r > e; ++e)t.add(n[e]);
		return t
	}, i(h, {has: a, add: function (n) {
		return this[ia + n] = !0, n
	}, remove: function (n) {
		return n = ia + n, n in this && delete this[n]
	}, values: s, size: l, empty: f, forEach: function (n) {
		for (var t in this)t.charCodeAt(0) === oa && n.call(this, t.substring(1))
	}}), Zo.behavior = {}, Zo.rebind = function (n, t) {
		for (var e, r = 1, u = arguments.length; ++r < u;)n[e = arguments[r]] = g(n, t, t[e]);
		return n
	};
	var aa = ["webkit", "ms", "moz", "Moz", "o", "O"];
	Zo.dispatch = function () {
		for (var n = new d, t = -1, e = arguments.length; ++t < e;)n[arguments[t]] = m(n);
		return n
	}, d.prototype.on = function (n, t) {
		var e = n.indexOf("."), r = "";
		if (e >= 0 && (r = n.substring(e + 1), n = n.substring(0, e)), n)return arguments.length < 2 ? this[n].on(r) : this[n].on(r, t);
		if (2 === arguments.length) {
			if (null == t)for (n in this)this.hasOwnProperty(n) && this[n].on(r, null);
			return this
		}
	}, Zo.event = null, Zo.requote = function (n) {
		return n.replace(ca, "\\$&")
	};
	var ca = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g, sa = {}.__proto__ ? function (n, t) {
		n.__proto__ = t
	} : function (n, t) {
		for (var e in t)n[e] = t[e]
	}, la = function (n, t) {
		return t.querySelector(n)
	}, fa = function (n, t) {
		return t.querySelectorAll(n)
	}, ha = Bo.matches || Bo[p(Bo, "matchesSelector")], ga = function (n, t) {
		return ha.call(n, t)
	};
	"function" == typeof Sizzle && (la = function (n, t) {
		return Sizzle(n, t)[0] || null
	}, fa = Sizzle, ga = Sizzle.matchesSelector), Zo.selection = function () {
		return ma
	};
	var pa = Zo.selection.prototype = [];
	pa.select = function (n) {
		var t, e, r, u, i = [];
		n = b(n);
		for (var o = -1, a = this.length; ++o < a;) {
			i.push(t = []), t.parentNode = (r = this[o]).parentNode;
			for (var c = -1, s = r.length; ++c < s;)(u = r[c]) ? (t.push(e = n.call(u, u.__data__, c, o)), e && "__data__"in u && (e.__data__ = u.__data__)) : t.push(null)
		}
		return _(i)
	}, pa.selectAll = function (n) {
		var t, e, r = [];
		n = w(n);
		for (var u = -1, i = this.length; ++u < i;)for (var o = this[u], a = -1, c = o.length; ++a < c;)(e = o[a]) && (r.push(t = Xo(n.call(e, e.__data__, a, u))), t.parentNode = e);
		return _(r)
	};
	var va = {svg: "http://www.w3.org/2000/svg", xhtml: "http://www.w3.org/1999/xhtml", xlink: "http://www.w3.org/1999/xlink", xml: "http://www.w3.org/XML/1998/namespace", xmlns: "http://www.w3.org/2000/xmlns/"};
	Zo.ns = {prefix: va, qualify: function (n) {
		var t = n.indexOf(":"), e = n;
		return t >= 0 && (e = n.substring(0, t), n = n.substring(t + 1)), va.hasOwnProperty(e) ? {space: va[e], local: n} : n
	}}, pa.attr = function (n, t) {
		if (arguments.length < 2) {
			if ("string" == typeof n) {
				var e = this.node();
				return n = Zo.ns.qualify(n), n.local ? e.getAttributeNS(n.space, n.local) : e.getAttribute(n)
			}
			for (t in n)this.each(S(t, n[t]));
			return this
		}
		return this.each(S(n, t))
	}, pa.classed = function (n, t) {
		if (arguments.length < 2) {
			if ("string" == typeof n) {
				var e = this.node(), r = (n = A(n)).length, u = -1;
				if (t = e.classList) {
					for (; ++u < r;)if (!t.contains(n[u]))return!1
				} else for (t = e.getAttribute("class"); ++u < r;)if (!E(n[u]).test(t))return!1;
				return!0
			}
			for (t in n)this.each(C(t, n[t]));
			return this
		}
		return this.each(C(n, t))
	}, pa.style = function (n, t, e) {
		var r = arguments.length;
		if (3 > r) {
			if ("string" != typeof n) {
				2 > r && (t = "");
				for (e in n)this.each(z(e, n[e], t));
				return this
			}
			if (2 > r)return Wo.getComputedStyle(this.node(), null).getPropertyValue(n);
			e = ""
		}
		return this.each(z(n, t, e))
	}, pa.property = function (n, t) {
		if (arguments.length < 2) {
			if ("string" == typeof n)return this.node()[n];
			for (t in n)this.each(L(t, n[t]));
			return this
		}
		return this.each(L(n, t))
	}, pa.text = function (n) {
		return arguments.length ? this.each("function" == typeof n ? function () {
			var t = n.apply(this, arguments);
			this.textContent = null == t ? "" : t
		} : null == n ? function () {
			this.textContent = ""
		} : function () {
			this.textContent = n
		}) : this.node().textContent
	}, pa.html = function (n) {
		return arguments.length ? this.each("function" == typeof n ? function () {
			var t = n.apply(this, arguments);
			this.innerHTML = null == t ? "" : t
		} : null == n ? function () {
			this.innerHTML = ""
		} : function () {
			this.innerHTML = n
		}) : this.node().innerHTML
	}, pa.append = function (n) {
		return n = T(n), this.select(function () {
			return this.appendChild(n.apply(this, arguments))
		})
	}, pa.insert = function (n, t) {
		return n = T(n), t = b(t), this.select(function () {
			return this.insertBefore(n.apply(this, arguments), t.apply(this, arguments) || null)
		})
	}, pa.remove = function () {
		return this.each(function () {
			var n = this.parentNode;
			n && n.removeChild(this)
		})
	}, pa.data = function (n, t) {
		function e(n, e) {
			var r, u, i, a = n.length, f = e.length, h = Math.min(a, f), g = new Array(f), p = new Array(f), v = new Array(a);
			if (t) {
				var d, m = new o, y = new o, x = [];
				for (r = -1; ++r < a;)d = t.call(u = n[r], u.__data__, r), m.has(d) ? v[r] = u : m.set(d, u), x.push(d);
				for (r = -1; ++r < f;)d = t.call(e, i = e[r], r), (u = m.get(d)) ? (g[r] = u, u.__data__ = i) : y.has(d) || (p[r] = q(i)), y.set(d, i), m.remove(d);
				for (r = -1; ++r < a;)m.has(x[r]) && (v[r] = n[r])
			} else {
				for (r = -1; ++r < h;)u = n[r], i = e[r], u ? (u.__data__ = i, g[r] = u) : p[r] = q(i);
				for (; f > r; ++r)p[r] = q(e[r]);
				for (; a > r; ++r)v[r] = n[r]
			}
			p.update = g, p.parentNode = g.parentNode = v.parentNode = n.parentNode, c.push(p), s.push(g), l.push(v)
		}

		var r, u, i = -1, a = this.length;
		if (!arguments.length) {
			for (n = new Array(a = (r = this[0]).length); ++i < a;)(u = r[i]) && (n[i] = u.__data__);
			return n
		}
		var c = U([]), s = _([]), l = _([]);
		if ("function" == typeof n)for (; ++i < a;)e(r = this[i], n.call(r, r.parentNode.__data__, i)); else for (; ++i < a;)e(r = this[i], n);
		return s.enter = function () {
			return c
		}, s.exit = function () {
			return l
		}, s
	}, pa.datum = function (n) {
		return arguments.length ? this.property("__data__", n) : this.property("__data__")
	}, pa.filter = function (n) {
		var t, e, r, u = [];
		"function" != typeof n && (n = R(n));
		for (var i = 0, o = this.length; o > i; i++) {
			u.push(t = []), t.parentNode = (e = this[i]).parentNode;
			for (var a = 0, c = e.length; c > a; a++)(r = e[a]) && n.call(r, r.__data__, a, i) && t.push(r)
		}
		return _(u)
	}, pa.order = function () {
		for (var n = -1, t = this.length; ++n < t;)for (var e, r = this[n], u = r.length - 1, i = r[u]; --u >= 0;)(e = r[u]) && (i && i !== e.nextSibling && i.parentNode.insertBefore(e, i), i = e);
		return this
	}, pa.sort = function (n) {
		n = D.apply(this, arguments);
		for (var t = -1, e = this.length; ++t < e;)this[t].sort(n);
		return this.order()
	}, pa.each = function (n) {
		return P(this, function (t, e, r) {
			n.call(t, t.__data__, e, r)
		})
	}, pa.call = function (n) {
		var t = Xo(arguments);
		return n.apply(t[0] = this, t), this
	}, pa.empty = function () {
		return!this.node()
	}, pa.node = function () {
		for (var n = 0, t = this.length; t > n; n++)for (var e = this[n], r = 0, u = e.length; u > r; r++) {
			var i = e[r];
			if (i)return i
		}
		return null
	}, pa.size = function () {
		var n = 0;
		return this.each(function () {
			++n
		}), n
	};
	var da = [];
	Zo.selection.enter = U, Zo.selection.enter.prototype = da, da.append = pa.append, da.empty = pa.empty, da.node = pa.node, da.call = pa.call, da.size = pa.size, da.select = function (n) {
		for (var t, e, r, u, i, o = [], a = -1, c = this.length; ++a < c;) {
			r = (u = this[a]).update, o.push(t = []), t.parentNode = u.parentNode;
			for (var s = -1, l = u.length; ++s < l;)(i = u[s]) ? (t.push(r[s] = e = n.call(u.parentNode, i.__data__, s, a)), e.__data__ = i.__data__) : t.push(null)
		}
		return _(o)
	}, da.insert = function (n, t) {
		return arguments.length < 2 && (t = j(this)), pa.insert.call(this, n, t)
	}, pa.transition = function () {
		for (var n, t, e = Ss || ++Ns, r = [], u = ks || {time: Date.now(), ease: xu, delay: 0, duration: 250}, i = -1, o = this.length; ++i < o;) {
			r.push(n = []);
			for (var a = this[i], c = -1, s = a.length; ++c < s;)(t = a[c]) && Po(t, c, e, u), n.push(t)
		}
		return qo(r, e)
	}, pa.interrupt = function () {
		return this.each(H)
	}, Zo.select = function (n) {
		var t = ["string" == typeof n ? la(n, $o) : n];
		return t.parentNode = Bo, _([t])
	}, Zo.selectAll = function (n) {
		var t = Xo("string" == typeof n ? fa(n, $o) : n);
		return t.parentNode = Bo, _([t])
	};
	var ma = Zo.select(Bo);
	pa.on = function (n, t, e) {
		var r = arguments.length;
		if (3 > r) {
			if ("string" != typeof n) {
				2 > r && (t = !1);
				for (e in n)this.each(F(e, n[e], t));
				return this
			}
			if (2 > r)return(r = this.node()["__on" + n]) && r._;
			e = !1
		}
		return this.each(F(n, t, e))
	};
	var ya = Zo.map({mouseenter: "mouseover", mouseleave: "mouseout"});
	ya.forEach(function (n) {
		"on" + n in $o && ya.remove(n)
	});
	var xa = "onselectstart"in $o ? null : p(Bo.style, "userSelect"), Ma = 0;
	Zo.mouse = function (n) {
		return Z(n, x())
	};
	var _a = /WebKit/.test(Wo.navigator.userAgent) ? -1 : 0;
	Zo.touches = function (n, t) {
		return arguments.length < 2 && (t = x().touches), t ? Xo(t).map(function (t) {
			var e = Z(n, t);
			return e.identifier = t.identifier, e
		}) : []
	}, Zo.behavior.drag = function () {
		function n() {
			this.on("mousedown.drag", u).on("touchstart.drag", i)
		}

		function t(n, t, u, i, o) {
			return function () {
				function a() {
					var n, e, r = t(h, v);
					r && (n = r[0] - x[0], e = r[1] - x[1], p |= n | e, x = r, g({type: "drag", x: r[0] + s[0], y: r[1] + s[1], dx: n, dy: e}))
				}

				function c() {
					t(h, v) && (m.on(i + d, null).on(o + d, null), y(p && Zo.event.target === f), g({type: "dragend"}))
				}

				var s, l = this, f = Zo.event.target, h = l.parentNode, g = e.of(l, arguments), p = 0, v = n(), d = ".drag" + (null == v ? "" : "-" + v), m = Zo.select(u()).on(i + d, a).on(o + d, c), y = I(), x = t(h, v);
				r ? (s = r.apply(l, arguments), s = [s.x - x[0], s.y - x[1]]) : s = [0, 0], g({type: "dragstart"})
			}
		}

		var e = M(n, "drag", "dragstart", "dragend"), r = null, u = t(v, Zo.mouse, $, "mousemove", "mouseup"), i = t(V, Zo.touch, X, "touchmove", "touchend");
		return n.origin = function (t) {
			return arguments.length ? (r = t, n) : r
		}, Zo.rebind(n, e, "on")
	};
	var ba = Math.PI, wa = 2 * ba, Sa = ba / 2, ka = 1e-6, Ea = ka * ka, Aa = ba / 180, Ca = 180 / ba, Na = Math.SQRT2, za = 2, La = 4;
	Zo.interpolateZoom = function (n, t) {
		function e(n) {
			var t = n * y;
			if (m) {
				var e = Q(v), o = i / (za * h) * (e * nt(Na * t + v) - K(v));
				return[r + o * s, u + o * l, i * e / Q(Na * t + v)]
			}
			return[r + n * s, u + n * l, i * Math.exp(Na * t)]
		}

		var r = n[0], u = n[1], i = n[2], o = t[0], a = t[1], c = t[2], s = o - r, l = a - u, f = s * s + l * l, h = Math.sqrt(f), g = (c * c - i * i + La * f) / (2 * i * za * h), p = (c * c - i * i - La * f) / (2 * c * za * h), v = Math.log(Math.sqrt(g * g + 1) - g), d = Math.log(Math.sqrt(p * p + 1) - p), m = d - v, y = (m || Math.log(c / i)) / Na;
		return e.duration = 1e3 * y, e
	}, Zo.behavior.zoom = function () {
		function n(n) {
			n.on(A, s).on(Ra + ".zoom", f).on("dblclick.zoom", h).on(z, l)
		}

		function t(n) {
			return[(n[0] - S.x) / S.k, (n[1] - S.y) / S.k]
		}

		function e(n) {
			return[n[0] * S.k + S.x, n[1] * S.k + S.y]
		}

		function r(n) {
			S.k = Math.max(E[0], Math.min(E[1], n))
		}

		function u(n, t) {
			t = e(t), S.x += n[0] - t[0], S.y += n[1] - t[1]
		}

		function i() {
			_ && _.domain(x.range().map(function (n) {
				return(n - S.x) / S.k
			}).map(x.invert)), w && w.domain(b.range().map(function (n) {
				return(n - S.y) / S.k
			}).map(b.invert))
		}

		function o(n) {
			n({type: "zoomstart"})
		}

		function a(n) {
			i(), n({type: "zoom", scale: S.k, translate: [S.x, S.y]})
		}

		function c(n) {
			n({type: "zoomend"})
		}

		function s() {
			function n() {
				l = 1, u(Zo.mouse(r), h), a(s)
			}

			function e() {
				f.on(C, null).on(N, null), g(l && Zo.event.target === i), c(s)
			}

			var r = this, i = Zo.event.target, s = L.of(r, arguments), l = 0, f = Zo.select(Wo).on(C, n).on(N, e), h = t(Zo.mouse(r)), g = I();
			H.call(r), o(s)
		}

		function l() {
			function n() {
				var n = Zo.touches(g);
				return h = S.k, n.forEach(function (n) {
					n.identifier in v && (v[n.identifier] = t(n))
				}), n
			}

			function e() {
				var t = Zo.event.target;
				Zo.select(t).on(M, i).on(_, f), b.push(t);
				for (var e = Zo.event.changedTouches, o = 0, c = e.length; c > o; ++o)v[e[o].identifier] = null;
				var s = n(), l = Date.now();
				if (1 === s.length) {
					if (500 > l - m) {
						var h = s[0], g = v[h.identifier];
						r(2 * S.k), u(h, g), y(), a(p)
					}
					m = l
				} else if (s.length > 1) {
					var h = s[0], x = s[1], w = h[0] - x[0], k = h[1] - x[1];
					d = w * w + k * k
				}
			}

			function i() {
				for (var n, t, e, i, o = Zo.touches(g), c = 0, s = o.length; s > c; ++c, i = null)if (e = o[c], i = v[e.identifier]) {
					if (t)break;
					n = e, t = i
				}
				if (i) {
					var l = (l = e[0] - n[0]) * l + (l = e[1] - n[1]) * l, f = d && Math.sqrt(l / d);
					n = [(n[0] + e[0]) / 2, (n[1] + e[1]) / 2], t = [(t[0] + i[0]) / 2, (t[1] + i[1]) / 2], r(f * h)
				}
				m = null, u(n, t), a(p)
			}

			function f() {
				if (Zo.event.touches.length) {
					for (var t = Zo.event.changedTouches, e = 0, r = t.length; r > e; ++e)delete v[t[e].identifier];
					for (var u in v)return void n()
				}
				Zo.selectAll(b).on(x, null), w.on(A, s).on(z, l), k(), c(p)
			}

			var h, g = this, p = L.of(g, arguments), v = {}, d = 0, x = ".zoom-" + Zo.event.changedTouches[0].identifier, M = "touchmove" + x, _ = "touchend" + x, b = [], w = Zo.select(g).on(A, null).on(z, e), k = I();
			H.call(g), e(), o(p)
		}

		function f() {
			var n = L.of(this, arguments);
			d ? clearTimeout(d) : (g = t(p = v || Zo.mouse(this)), H.call(this), o(n)), d = setTimeout(function () {
				d = null, c(n)
			}, 50), y(), r(Math.pow(2, .002 * Ta()) * S.k), u(p, g), a(n)
		}

		function h() {
			var n = L.of(this, arguments), e = Zo.mouse(this), i = t(e), s = Math.log(S.k) / Math.LN2;
			o(n), r(Math.pow(2, Zo.event.shiftKey ? Math.ceil(s) - 1 : Math.floor(s) + 1)), u(e, i), a(n), c(n)
		}

		var g, p, v, d, m, x, _, b, w, S = {x: 0, y: 0, k: 1}, k = [960, 500], E = qa, A = "mousedown.zoom", C = "mousemove.zoom", N = "mouseup.zoom", z = "touchstart.zoom", L = M(n, "zoomstart", "zoom", "zoomend");
		return n.event = function (n) {
			n.each(function () {
				var n = L.of(this, arguments), t = S;
				Ss ? Zo.select(this).transition().each("start.zoom",function () {
					S = this.__chart__ || {x: 0, y: 0, k: 1}, o(n)
				}).tween("zoom:zoom",function () {
					var e = k[0], r = k[1], u = e / 2, i = r / 2, o = Zo.interpolateZoom([(u - S.x) / S.k, (i - S.y) / S.k, e / S.k], [(u - t.x) / t.k, (i - t.y) / t.k, e / t.k]);
					return function (t) {
						var r = o(t), c = e / r[2];
						this.__chart__ = S = {x: u - r[0] * c, y: i - r[1] * c, k: c}, a(n)
					}
				}).each("end.zoom", function () {
					c(n)
				}) : (this.__chart__ = S, o(n), a(n), c(n))
			})
		}, n.translate = function (t) {
			return arguments.length ? (S = {x: +t[0], y: +t[1], k: S.k}, i(), n) : [S.x, S.y]
		}, n.scale = function (t) {
			return arguments.length ? (S = {x: S.x, y: S.y, k: +t}, i(), n) : S.k
		}, n.scaleExtent = function (t) {
			return arguments.length ? (E = null == t ? qa : [+t[0], +t[1]], n) : E
		}, n.center = function (t) {
			return arguments.length ? (v = t && [+t[0], +t[1]], n) : v
		}, n.size = function (t) {
			return arguments.length ? (k = t && [+t[0], +t[1]], n) : k
		}, n.x = function (t) {
			return arguments.length ? (_ = t, x = t.copy(), S = {x: 0, y: 0, k: 1}, n) : _
		}, n.y = function (t) {
			return arguments.length ? (w = t, b = t.copy(), S = {x: 0, y: 0, k: 1}, n) : w
		}, Zo.rebind(n, L, "on")
	};
	var Ta, qa = [0, 1 / 0], Ra = "onwheel"in $o ? (Ta = function () {
		return-Zo.event.deltaY * (Zo.event.deltaMode ? 120 : 1)
	}, "wheel") : "onmousewheel"in $o ? (Ta = function () {
		return Zo.event.wheelDelta
	}, "mousewheel") : (Ta = function () {
		return-Zo.event.detail
	}, "MozMousePixelScroll");
	Zo.color = et, et.prototype.toString = function () {
		return this.rgb() + ""
	}, Zo.hsl = rt;
	var Da = rt.prototype = new et;
	Da.brighter = function (n) {
		return n = Math.pow(.7, arguments.length ? n : 1), new rt(this.h, this.s, this.l / n)
	}, Da.darker = function (n) {
		return n = Math.pow(.7, arguments.length ? n : 1), new rt(this.h, this.s, n * this.l)
	}, Da.rgb = function () {
		return ut(this.h, this.s, this.l)
	}, Zo.hcl = it;
	var Pa = it.prototype = new et;
	Pa.brighter = function (n) {
		return new it(this.h, this.c, Math.min(100, this.l + Ua * (arguments.length ? n : 1)))
	}, Pa.darker = function (n) {
		return new it(this.h, this.c, Math.max(0, this.l - Ua * (arguments.length ? n : 1)))
	}, Pa.rgb = function () {
		return ot(this.h, this.c, this.l).rgb()
	}, Zo.lab = at;
	var Ua = 18, ja = .95047, Ha = 1, Fa = 1.08883, Oa = at.prototype = new et;
	Oa.brighter = function (n) {
		return new at(Math.min(100, this.l + Ua * (arguments.length ? n : 1)), this.a, this.b)
	}, Oa.darker = function (n) {
		return new at(Math.max(0, this.l - Ua * (arguments.length ? n : 1)), this.a, this.b)
	}, Oa.rgb = function () {
		return ct(this.l, this.a, this.b)
	}, Zo.rgb = gt;
	var Ya = gt.prototype = new et;
	Ya.brighter = function (n) {
		n = Math.pow(.7, arguments.length ? n : 1);
		var t = this.r, e = this.g, r = this.b, u = 30;
		return t || e || r ? (t && u > t && (t = u), e && u > e && (e = u), r && u > r && (r = u), new gt(Math.min(255, t / n), Math.min(255, e / n), Math.min(255, r / n))) : new gt(u, u, u)
	}, Ya.darker = function (n) {
		return n = Math.pow(.7, arguments.length ? n : 1), new gt(n * this.r, n * this.g, n * this.b)
	}, Ya.hsl = function () {
		return yt(this.r, this.g, this.b)
	}, Ya.toString = function () {
		return"#" + dt(this.r) + dt(this.g) + dt(this.b)
	};
	var Ia = Zo.map({aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074});
	Ia.forEach(function (n, t) {
		Ia.set(n, pt(t))
	}), Zo.functor = bt, Zo.xhr = St(wt), Zo.dsv = function (n, t) {
		function e(n, e, i) {
			arguments.length < 3 && (i = e, e = null);
			var o = kt(n, t, null == e ? r : u(e), i);
			return o.row = function (n) {
				return arguments.length ? o.response(null == (e = n) ? r : u(n)) : e
			}, o
		}

		function r(n) {
			return e.parse(n.responseText)
		}

		function u(n) {
			return function (t) {
				return e.parse(t.responseText, n)
			}
		}

		function i(t) {
			return t.map(o).join(n)
		}

		function o(n) {
			return a.test(n) ? '"' + n.replace(/\"/g, '""') + '"' : n
		}

		var a = new RegExp('["' + n + "\n]"), c = n.charCodeAt(0);
		return e.parse = function (n, t) {
			var r;
			return e.parseRows(n, function (n, e) {
				if (r)return r(n, e - 1);
				var u = new Function("d", "return {" + n.map(function (n, t) {
					return JSON.stringify(n) + ": d[" + t + "]"
				}).join(",") + "}");
				r = t ? function (n, e) {
					return t(u(n), e)
				} : u
			})
		}, e.parseRows = function (n, t) {
			function e() {
				if (l >= s)return o;
				if (u)return u = !1, i;
				var t = l;
				if (34 === n.charCodeAt(t)) {
					for (var e = t; e++ < s;)if (34 === n.charCodeAt(e)) {
						if (34 !== n.charCodeAt(e + 1))break;
						++e
					}
					l = e + 2;
					var r = n.charCodeAt(e + 1);
					return 13 === r ? (u = !0, 10 === n.charCodeAt(e + 2) && ++l) : 10 === r && (u = !0), n.substring(t + 1, e).replace(/""/g, '"')
				}
				for (; s > l;) {
					var r = n.charCodeAt(l++), a = 1;
					if (10 === r)u = !0; else if (13 === r)u = !0, 10 === n.charCodeAt(l) && (++l, ++a); else if (r !== c)continue;
					return n.substring(t, l - a)
				}
				return n.substring(t)
			}

			for (var r, u, i = {}, o = {}, a = [], s = n.length, l = 0, f = 0; (r = e()) !== o;) {
				for (var h = []; r !== i && r !== o;)h.push(r), r = e();
				(!t || (h = t(h, f++))) && a.push(h)
			}
			return a
		}, e.format = function (t) {
			if (Array.isArray(t[0]))return e.formatRows(t);
			var r = new h, u = [];
			return t.forEach(function (n) {
				for (var t in n)r.has(t) || u.push(r.add(t))
			}), [u.map(o).join(n)].concat(t.map(function (t) {
				return u.map(function (n) {
					return o(t[n])
				}).join(n)
			})).join("\n")
		}, e.formatRows = function (n) {
			return n.map(i).join("\n")
		}, e
	}, Zo.csv = Zo.dsv(",", "text/csv"), Zo.tsv = Zo.dsv("	", "text/tab-separated-values"), Zo.touch = function (n, t, e) {
		if (arguments.length < 3 && (e = t, t = x().changedTouches), t)for (var r, u = 0, i = t.length; i > u; ++u)if ((r = t[u]).identifier === e)return Z(n, r)
	};
	var Za, Va, Xa, $a, Ba, Wa = Wo[p(Wo, "requestAnimationFrame")] || function (n) {
		setTimeout(n, 17)
	};
	Zo.timer = function (n, t, e) {
		var r = arguments.length;
		2 > r && (t = 0), 3 > r && (e = Date.now());
		var u = e + t, i = {c: n, t: u, f: !1, n: null};
		Va ? Va.n = i : Za = i, Va = i, Xa || ($a = clearTimeout($a), Xa = 1, Wa(At))
	}, Zo.timer.flush = function () {
		Ct(), Nt()
	}, Zo.round = function (n, t) {
		return t ? Math.round(n * (t = Math.pow(10, t))) / t : Math.round(n)
	};
	var Ja = ["y", "z", "a", "f", "p", "n", "\xb5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"].map(Lt);
	Zo.formatPrefix = function (n, t) {
		var e = 0;
		return n && (0 > n && (n *= -1), t && (n = Zo.round(n, zt(n, t))), e = 1 + Math.floor(1e-12 + Math.log(n) / Math.LN10), e = Math.max(-24, Math.min(24, 3 * Math.floor((e - 1) / 3)))), Ja[8 + e / 3]
	};
	var Ga = /(?:([^{])?([<>=^]))?([+\- ])?([$#])?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i, Ka = Zo.map({b: function (n) {
		return n.toString(2)
	}, c: function (n) {
		return String.fromCharCode(n)
	}, o: function (n) {
		return n.toString(8)
	}, x: function (n) {
		return n.toString(16)
	}, X: function (n) {
		return n.toString(16).toUpperCase()
	}, g: function (n, t) {
		return n.toPrecision(t)
	}, e: function (n, t) {
		return n.toExponential(t)
	}, f: function (n, t) {
		return n.toFixed(t)
	}, r: function (n, t) {
		return(n = Zo.round(n, zt(n, t))).toFixed(Math.max(0, Math.min(20, zt(n * (1 + 1e-15), t))))
	}}), Qa = Zo.time = {}, nc = Date;
	Rt.prototype = {getDate: function () {
		return this._.getUTCDate()
	}, getDay: function () {
		return this._.getUTCDay()
	}, getFullYear: function () {
		return this._.getUTCFullYear()
	}, getHours: function () {
		return this._.getUTCHours()
	}, getMilliseconds: function () {
		return this._.getUTCMilliseconds()
	}, getMinutes: function () {
		return this._.getUTCMinutes()
	}, getMonth: function () {
		return this._.getUTCMonth()
	}, getSeconds: function () {
		return this._.getUTCSeconds()
	}, getTime: function () {
		return this._.getTime()
	}, getTimezoneOffset: function () {
		return 0
	}, valueOf: function () {
		return this._.valueOf()
	}, setDate: function () {
		tc.setUTCDate.apply(this._, arguments)
	}, setDay: function () {
		tc.setUTCDay.apply(this._, arguments)
	}, setFullYear: function () {
		tc.setUTCFullYear.apply(this._, arguments)
	}, setHours: function () {
		tc.setUTCHours.apply(this._, arguments)
	}, setMilliseconds: function () {
		tc.setUTCMilliseconds.apply(this._, arguments)
	}, setMinutes: function () {
		tc.setUTCMinutes.apply(this._, arguments)
	}, setMonth: function () {
		tc.setUTCMonth.apply(this._, arguments)
	}, setSeconds: function () {
		tc.setUTCSeconds.apply(this._, arguments)
	}, setTime: function () {
		tc.setTime.apply(this._, arguments)
	}};
	var tc = Date.prototype;
	Qa.year = Dt(function (n) {
		return n = Qa.day(n), n.setMonth(0, 1), n
	}, function (n, t) {
		n.setFullYear(n.getFullYear() + t)
	}, function (n) {
		return n.getFullYear()
	}), Qa.years = Qa.year.range, Qa.years.utc = Qa.year.utc.range, Qa.day = Dt(function (n) {
		var t = new nc(2e3, 0);
		return t.setFullYear(n.getFullYear(), n.getMonth(), n.getDate()), t
	}, function (n, t) {
		n.setDate(n.getDate() + t)
	}, function (n) {
		return n.getDate() - 1
	}), Qa.days = Qa.day.range, Qa.days.utc = Qa.day.utc.range, Qa.dayOfYear = function (n) {
		var t = Qa.year(n);
		return Math.floor((n - t - 6e4 * (n.getTimezoneOffset() - t.getTimezoneOffset())) / 864e5)
	}, ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"].forEach(function (n, t) {
		t = 7 - t;
		var e = Qa[n] = Dt(function (n) {
			return(n = Qa.day(n)).setDate(n.getDate() - (n.getDay() + t) % 7), n
		}, function (n, t) {
			n.setDate(n.getDate() + 7 * Math.floor(t))
		}, function (n) {
			var e = Qa.year(n).getDay();
			return Math.floor((Qa.dayOfYear(n) + (e + t) % 7) / 7) - (e !== t)
		});
		Qa[n + "s"] = e.range, Qa[n + "s"].utc = e.utc.range, Qa[n + "OfYear"] = function (n) {
			var e = Qa.year(n).getDay();
			return Math.floor((Qa.dayOfYear(n) + (e + t) % 7) / 7)
		}
	}), Qa.week = Qa.sunday, Qa.weeks = Qa.sunday.range, Qa.weeks.utc = Qa.sunday.utc.range, Qa.weekOfYear = Qa.sundayOfYear;
	var ec = {"-": "", _: " ", 0: "0"}, rc = /^\s*\d+/, uc = /^%/;
	Zo.locale = function (n) {
		return{numberFormat: Tt(n), timeFormat: Ut(n)}
	};
	var ic = Zo.locale({decimal: ".", thousands: ",", grouping: [3], currency: ["$", ""], dateTime: "%a %b %e %X %Y", date: "%m/%d/%Y", time: "%H:%M:%S", periods: ["AM", "PM"], days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]});
	Zo.format = ic.numberFormat, Zo.geo = {}, ue.prototype = {s: 0, t: 0, add: function (n) {
		ie(n, this.t, oc), ie(oc.s, this.s, this), this.s ? this.t += oc.t : this.s = oc.t
	}, reset: function () {
		this.s = this.t = 0
	}, valueOf: function () {
		return this.s
	}};
	var oc = new ue;
	Zo.geo.stream = function (n, t) {
		n && ac.hasOwnProperty(n.type) ? ac[n.type](n, t) : oe(n, t)
	};
	var ac = {Feature: function (n, t) {
		oe(n.geometry, t)
	}, FeatureCollection: function (n, t) {
		for (var e = n.features, r = -1, u = e.length; ++r < u;)oe(e[r].geometry, t)
	}}, cc = {Sphere: function (n, t) {
		t.sphere()
	}, Point: function (n, t) {
		n = n.coordinates, t.point(n[0], n[1], n[2])
	}, MultiPoint: function (n, t) {
		for (var e = n.coordinates, r = -1, u = e.length; ++r < u;)n = e[r], t.point(n[0], n[1], n[2])
	}, LineString: function (n, t) {
		ae(n.coordinates, t, 0)
	}, MultiLineString: function (n, t) {
		for (var e = n.coordinates, r = -1, u = e.length; ++r < u;)ae(e[r], t, 0)
	}, Polygon: function (n, t) {
		ce(n.coordinates, t)
	}, MultiPolygon: function (n, t) {
		for (var e = n.coordinates, r = -1, u = e.length; ++r < u;)ce(e[r], t)
	}, GeometryCollection: function (n, t) {
		for (var e = n.geometries, r = -1, u = e.length; ++r < u;)oe(e[r], t)
	}};
	Zo.geo.area = function (n) {
		return sc = 0, Zo.geo.stream(n, fc), sc
	};
	var sc, lc = new ue, fc = {sphere: function () {
		sc += 4 * ba
	}, point: v, lineStart: v, lineEnd: v, polygonStart: function () {
		lc.reset(), fc.lineStart = se
	}, polygonEnd: function () {
		var n = 2 * lc;
		sc += 0 > n ? 4 * ba + n : n, fc.lineStart = fc.lineEnd = fc.point = v
	}};
	Zo.geo.bounds = function () {
		function n(n, t) {
			x.push(M = [l = n, h = n]), f > t && (f = t), t > g && (g = t)
		}

		function t(t, e) {
			var r = le([t * Aa, e * Aa]);
			if (m) {
				var u = he(m, r), i = [u[1], -u[0], 0], o = he(i, u);
				ve(o), o = de(o);
				var c = t - p, s = c > 0 ? 1 : -1, v = o[0] * Ca * s, d = ua(c) > 180;
				if (d ^ (v > s * p && s * t > v)) {
					var y = o[1] * Ca;
					y > g && (g = y)
				} else if (v = (v + 360) % 360 - 180, d ^ (v > s * p && s * t > v)) {
					var y = -o[1] * Ca;
					f > y && (f = y)
				} else f > e && (f = e), e > g && (g = e);
				d ? p > t ? a(l, t) > a(l, h) && (h = t) : a(t, h) > a(l, h) && (l = t) : h >= l ? (l > t && (l = t), t > h && (h = t)) : t > p ? a(l, t) > a(l, h) && (h = t) : a(t, h) > a(l, h) && (l = t)
			} else n(t, e);
			m = r, p = t
		}

		function e() {
			_.point = t
		}

		function r() {
			M[0] = l, M[1] = h, _.point = n, m = null
		}

		function u(n, e) {
			if (m) {
				var r = n - p;
				y += ua(r) > 180 ? r + (r > 0 ? 360 : -360) : r
			} else v = n, d = e;
			fc.point(n, e), t(n, e)
		}

		function i() {
			fc.lineStart()
		}

		function o() {
			u(v, d), fc.lineEnd(), ua(y) > ka && (l = -(h = 180)), M[0] = l, M[1] = h, m = null
		}

		function a(n, t) {
			return(t -= n) < 0 ? t + 360 : t
		}

		function c(n, t) {
			return n[0] - t[0]
		}

		function s(n, t) {
			return t[0] <= t[1] ? t[0] <= n && n <= t[1] : n < t[0] || t[1] < n
		}

		var l, f, h, g, p, v, d, m, y, x, M, _ = {point: n, lineStart: e, lineEnd: r, polygonStart: function () {
			_.point = u, _.lineStart = i, _.lineEnd = o, y = 0, fc.polygonStart()
		}, polygonEnd: function () {
			fc.polygonEnd(), _.point = n, _.lineStart = e, _.lineEnd = r, 0 > lc ? (l = -(h = 180), f = -(g = 90)) : y > ka ? g = 90 : -ka > y && (f = -90), M[0] = l, M[1] = h
		}};
		return function (n) {
			g = h = -(l = f = 1 / 0), x = [], Zo.geo.stream(n, _);
			var t = x.length;
			if (t) {
				x.sort(c);
				for (var e, r = 1, u = x[0], i = [u]; t > r; ++r)e = x[r], s(e[0], u) || s(e[1], u) ? (a(u[0], e[1]) > a(u[0], u[1]) && (u[1] = e[1]), a(e[0], u[1]) > a(u[0], u[1]) && (u[0] = e[0])) : i.push(u = e);
				for (var o, e, p = -1 / 0, t = i.length - 1, r = 0, u = i[t]; t >= r; u = e, ++r)e = i[r], (o = a(u[1], e[0])) > p && (p = o, l = e[0], h = u[1])
			}
			return x = M = null, 1 / 0 === l || 1 / 0 === f ? [
				[0 / 0, 0 / 0],
				[0 / 0, 0 / 0]
			] : [
				[l, f],
				[h, g]
			]
		}
	}(), Zo.geo.centroid = function (n) {
		hc = gc = pc = vc = dc = mc = yc = xc = Mc = _c = bc = 0, Zo.geo.stream(n, wc);
		var t = Mc, e = _c, r = bc, u = t * t + e * e + r * r;
		return Ea > u && (t = mc, e = yc, r = xc, ka > gc && (t = pc, e = vc, r = dc), u = t * t + e * e + r * r, Ea > u) ? [0 / 0, 0 / 0] : [Math.atan2(e, t) * Ca, G(r / Math.sqrt(u)) * Ca]
	};
	var hc, gc, pc, vc, dc, mc, yc, xc, Mc, _c, bc, wc = {sphere: v, point: ye, lineStart: Me, lineEnd: _e, polygonStart: function () {
		wc.lineStart = be
	}, polygonEnd: function () {
		wc.lineStart = Me
	}}, Sc = Ae(we, Te, Re, [-ba, -ba / 2]), kc = 1e9;
	Zo.geo.clipExtent = function () {
		var n, t, e, r, u, i, o = {stream: function (n) {
			return u && (u.valid = !1), u = i(n), u.valid = !0, u
		}, extent: function (a) {
			return arguments.length ? (i = Ue(n = +a[0][0], t = +a[0][1], e = +a[1][0], r = +a[1][1]), u && (u.valid = !1, u = null), o) : [
				[n, t],
				[e, r]
			]
		}};
		return o.extent([
			[0, 0],
			[960, 500]
		])
	}, (Zo.geo.conicEqualArea = function () {
		return He(Fe)
	}).raw = Fe, Zo.geo.albers = function () {
		return Zo.geo.conicEqualArea().rotate([96, 0]).center([-.6, 38.7]).parallels([29.5, 45.5]).scale(1070)
	}, Zo.geo.albersUsa = function () {
		function n(n) {
			var i = n[0], o = n[1];
			return t = null, e(i, o), t || (r(i, o), t) || u(i, o), t
		}

		var t, e, r, u, i = Zo.geo.albers(), o = Zo.geo.conicEqualArea().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]), a = Zo.geo.conicEqualArea().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]), c = {point: function (n, e) {
			t = [n, e]
		}};
		return n.invert = function (n) {
			var t = i.scale(), e = i.translate(), r = (n[0] - e[0]) / t, u = (n[1] - e[1]) / t;
			return(u >= .12 && .234 > u && r >= -.425 && -.214 > r ? o : u >= .166 && .234 > u && r >= -.214 && -.115 > r ? a : i).invert(n)
		}, n.stream = function (n) {
			var t = i.stream(n), e = o.stream(n), r = a.stream(n);
			return{point: function (n, u) {
				t.point(n, u), e.point(n, u), r.point(n, u)
			}, sphere: function () {
				t.sphere(), e.sphere(), r.sphere()
			}, lineStart: function () {
				t.lineStart(), e.lineStart(), r.lineStart()
			}, lineEnd: function () {
				t.lineEnd(), e.lineEnd(), r.lineEnd()
			}, polygonStart: function () {
				t.polygonStart(), e.polygonStart(), r.polygonStart()
			}, polygonEnd: function () {
				t.polygonEnd(), e.polygonEnd(), r.polygonEnd()
			}}
		}, n.precision = function (t) {
			return arguments.length ? (i.precision(t), o.precision(t), a.precision(t), n) : i.precision()
		}, n.scale = function (t) {
			return arguments.length ? (i.scale(t), o.scale(.35 * t), a.scale(t), n.translate(i.translate())) : i.scale()
		}, n.translate = function (t) {
			if (!arguments.length)return i.translate();
			var s = i.scale(), l = +t[0], f = +t[1];
			return e = i.translate(t).clipExtent([
				[l - .455 * s, f - .238 * s],
				[l + .455 * s, f + .238 * s]
			]).stream(c).point, r = o.translate([l - .307 * s, f + .201 * s]).clipExtent([
				[l - .425 * s + ka, f + .12 * s + ka],
				[l - .214 * s - ka, f + .234 * s - ka]
			]).stream(c).point, u = a.translate([l - .205 * s, f + .212 * s]).clipExtent([
				[l - .214 * s + ka, f + .166 * s + ka],
				[l - .115 * s - ka, f + .234 * s - ka]
			]).stream(c).point, n
		}, n.scale(1070)
	};
	var Ec, Ac, Cc, Nc, zc, Lc, Tc = {point: v, lineStart: v, lineEnd: v, polygonStart: function () {
		Ac = 0, Tc.lineStart = Oe
	}, polygonEnd: function () {
		Tc.lineStart = Tc.lineEnd = Tc.point = v, Ec += ua(Ac / 2)
	}}, qc = {point: Ye, lineStart: v, lineEnd: v, polygonStart: v, polygonEnd: v}, Rc = {point: Ve, lineStart: Xe, lineEnd: $e, polygonStart: function () {
		Rc.lineStart = Be
	}, polygonEnd: function () {
		Rc.point = Ve, Rc.lineStart = Xe, Rc.lineEnd = $e
	}};
	Zo.geo.path = function () {
		function n(n) {
			return n && ("function" == typeof a && i.pointRadius(+a.apply(this, arguments)), o && o.valid || (o = u(i)), Zo.geo.stream(n, o)), i.result()
		}

		function t() {
			return o = null, n
		}

		var e, r, u, i, o, a = 4.5;
		return n.area = function (n) {
			return Ec = 0, Zo.geo.stream(n, u(Tc)), Ec
		}, n.centroid = function (n) {
			return pc = vc = dc = mc = yc = xc = Mc = _c = bc = 0, Zo.geo.stream(n, u(Rc)), bc ? [Mc / bc, _c / bc] : xc ? [mc / xc, yc / xc] : dc ? [pc / dc, vc / dc] : [0 / 0, 0 / 0]
		}, n.bounds = function (n) {
			return zc = Lc = -(Cc = Nc = 1 / 0), Zo.geo.stream(n, u(qc)), [
				[Cc, Nc],
				[zc, Lc]
			]
		}, n.projection = function (n) {
			return arguments.length ? (u = (e = n) ? n.stream || Ge(n) : wt, t()) : e
		}, n.context = function (n) {
			return arguments.length ? (i = null == (r = n) ? new Ie : new We(n), "function" != typeof a && i.pointRadius(a), t()) : r
		}, n.pointRadius = function (t) {
			return arguments.length ? (a = "function" == typeof t ? t : (i.pointRadius(+t), +t), n) : a
		}, n.projection(Zo.geo.albersUsa()).context(null)
	}, Zo.geo.transform = function (n) {
		return{stream: function (t) {
			var e = new Ke(t);
			for (var r in n)e[r] = n[r];
			return e
		}}
	}, Ke.prototype = {point: function (n, t) {
		this.stream.point(n, t)
	}, sphere: function () {
		this.stream.sphere()
	}, lineStart: function () {
		this.stream.lineStart()
	}, lineEnd: function () {
		this.stream.lineEnd()
	}, polygonStart: function () {
		this.stream.polygonStart()
	}, polygonEnd: function () {
		this.stream.polygonEnd()
	}}, Zo.geo.projection = nr, Zo.geo.projectionMutator = tr, (Zo.geo.equirectangular = function () {
		return nr(rr)
	}).raw = rr.invert = rr, Zo.geo.rotation = function (n) {
		function t(t) {
			return t = n(t[0] * Aa, t[1] * Aa), t[0] *= Ca, t[1] *= Ca, t
		}

		return n = ir(n[0] % 360 * Aa, n[1] * Aa, n.length > 2 ? n[2] * Aa : 0), t.invert = function (t) {
			return t = n.invert(t[0] * Aa, t[1] * Aa), t[0] *= Ca, t[1] *= Ca, t
		}, t
	}, ur.invert = rr, Zo.geo.circle = function () {
		function n() {
			var n = "function" == typeof r ? r.apply(this, arguments) : r, t = ir(-n[0] * Aa, -n[1] * Aa, 0).invert, u = [];
			return e(null, null, 1, {point: function (n, e) {
				u.push(n = t(n, e)), n[0] *= Ca, n[1] *= Ca
			}}), {type: "Polygon", coordinates: [u]}
		}

		var t, e, r = [0, 0], u = 6;
		return n.origin = function (t) {
			return arguments.length ? (r = t, n) : r
		}, n.angle = function (r) {
			return arguments.length ? (e = sr((t = +r) * Aa, u * Aa), n) : t
		}, n.precision = function (r) {
			return arguments.length ? (e = sr(t * Aa, (u = +r) * Aa), n) : u
		}, n.angle(90)
	}, Zo.geo.distance = function (n, t) {
		var e, r = (t[0] - n[0]) * Aa, u = n[1] * Aa, i = t[1] * Aa, o = Math.sin(r), a = Math.cos(r), c = Math.sin(u), s = Math.cos(u), l = Math.sin(i), f = Math.cos(i);
		return Math.atan2(Math.sqrt((e = f * o) * e + (e = s * l - c * f * a) * e), c * l + s * f * a)
	}, Zo.geo.graticule = function () {
		function n() {
			return{type: "MultiLineString", coordinates: t()}
		}

		function t() {
			return Zo.range(Math.ceil(i / d) * d, u, d).map(h).concat(Zo.range(Math.ceil(s / m) * m, c, m).map(g)).concat(Zo.range(Math.ceil(r / p) * p, e, p).filter(function (n) {
				return ua(n % d) > ka
			}).map(l)).concat(Zo.range(Math.ceil(a / v) * v, o, v).filter(function (n) {
				return ua(n % m) > ka
			}).map(f))
		}

		var e, r, u, i, o, a, c, s, l, f, h, g, p = 10, v = p, d = 90, m = 360, y = 2.5;
		return n.lines = function () {
			return t().map(function (n) {
				return{type: "LineString", coordinates: n}
			})
		}, n.outline = function () {
			return{type: "Polygon", coordinates: [h(i).concat(g(c).slice(1), h(u).reverse().slice(1), g(s).reverse().slice(1))]}
		}, n.extent = function (t) {
			return arguments.length ? n.majorExtent(t).minorExtent(t) : n.minorExtent()
		}, n.majorExtent = function (t) {
			return arguments.length ? (i = +t[0][0], u = +t[1][0], s = +t[0][1], c = +t[1][1], i > u && (t = i, i = u, u = t), s > c && (t = s, s = c, c = t), n.precision(y)) : [
				[i, s],
				[u, c]
			]
		}, n.minorExtent = function (t) {
			return arguments.length ? (r = +t[0][0], e = +t[1][0], a = +t[0][1], o = +t[1][1], r > e && (t = r, r = e, e = t), a > o && (t = a, a = o, o = t), n.precision(y)) : [
				[r, a],
				[e, o]
			]
		}, n.step = function (t) {
			return arguments.length ? n.majorStep(t).minorStep(t) : n.minorStep()
		}, n.majorStep = function (t) {
			return arguments.length ? (d = +t[0], m = +t[1], n) : [d, m]
		}, n.minorStep = function (t) {
			return arguments.length ? (p = +t[0], v = +t[1], n) : [p, v]
		}, n.precision = function (t) {
			return arguments.length ? (y = +t, l = fr(a, o, 90), f = hr(r, e, y), h = fr(s, c, 90), g = hr(i, u, y), n) : y
		}, n.majorExtent([
			[-180, -90 + ka],
			[180, 90 - ka]
		]).minorExtent([
			[-180, -80 - ka],
			[180, 80 + ka]
		])
	}, Zo.geo.greatArc = function () {
		function n() {
			return{type: "LineString", coordinates: [t || r.apply(this, arguments), e || u.apply(this, arguments)]}
		}

		var t, e, r = gr, u = pr;
		return n.distance = function () {
			return Zo.geo.distance(t || r.apply(this, arguments), e || u.apply(this, arguments))
		}, n.source = function (e) {
			return arguments.length ? (r = e, t = "function" == typeof e ? null : e, n) : r
		}, n.target = function (t) {
			return arguments.length ? (u = t, e = "function" == typeof t ? null : t, n) : u
		}, n.precision = function () {
			return arguments.length ? n : 0
		}, n
	}, Zo.geo.interpolate = function (n, t) {
		return vr(n[0] * Aa, n[1] * Aa, t[0] * Aa, t[1] * Aa)
	}, Zo.geo.length = function (n) {
		return Dc = 0, Zo.geo.stream(n, Pc), Dc
	};
	var Dc, Pc = {sphere: v, point: v, lineStart: dr, lineEnd: v, polygonStart: v, polygonEnd: v}, Uc = mr(function (n) {
		return Math.sqrt(2 / (1 + n))
	}, function (n) {
		return 2 * Math.asin(n / 2)
	});
	(Zo.geo.azimuthalEqualArea = function () {
		return nr(Uc)
	}).raw = Uc;
	var jc = mr(function (n) {
		var t = Math.acos(n);
		return t && t / Math.sin(t)
	}, wt);
	(Zo.geo.azimuthalEquidistant = function () {
		return nr(jc)
	}).raw = jc, (Zo.geo.conicConformal = function () {
		return He(yr)
	}).raw = yr, (Zo.geo.conicEquidistant = function () {
		return He(xr)
	}).raw = xr;
	var Hc = mr(function (n) {
		return 1 / n
	}, Math.atan);
	(Zo.geo.gnomonic = function () {
		return nr(Hc)
	}).raw = Hc, Mr.invert = function (n, t) {
		return[n, 2 * Math.atan(Math.exp(t)) - Sa]
	}, (Zo.geo.mercator = function () {
		return _r(Mr)
	}).raw = Mr;
	var Fc = mr(function () {
		return 1
	}, Math.asin);
	(Zo.geo.orthographic = function () {
		return nr(Fc)
	}).raw = Fc;
	var Oc = mr(function (n) {
		return 1 / (1 + n)
	}, function (n) {
		return 2 * Math.atan(n)
	});
	(Zo.geo.stereographic = function () {
		return nr(Oc)
	}).raw = Oc, br.invert = function (n, t) {
		return[-t, 2 * Math.atan(Math.exp(n)) - Sa]
	}, (Zo.geo.transverseMercator = function () {
		var n = _r(br), t = n.center, e = n.rotate;
		return n.center = function (n) {
			return n ? t([-n[1], n[0]]) : (n = t(), [n[1], -n[0]])
		}, n.rotate = function (n) {
			return n ? e([n[0], n[1], n.length > 2 ? n[2] + 90 : 90]) : (n = e(), [n[0], n[1], n[2] - 90])
		}, e([0, 0, 90])
	}).raw = br, Zo.geom = {}, Zo.geom.hull = function (n) {
		function t(n) {
			if (n.length < 3)return[];
			var t, u = bt(e), i = bt(r), o = n.length, a = [], c = [];
			for (t = 0; o > t; t++)a.push([+u.call(this, n[t], t), +i.call(this, n[t], t), t]);
			for (a.sort(Er), t = 0; o > t; t++)c.push([a[t][0], -a[t][1]]);
			var s = kr(a), l = kr(c), f = l[0] === s[0], h = l[l.length - 1] === s[s.length - 1], g = [];
			for (t = s.length - 1; t >= 0; --t)g.push(n[a[s[t]][2]]);
			for (t = +f; t < l.length - h; ++t)g.push(n[a[l[t]][2]]);
			return g
		}

		var e = wr, r = Sr;
		return arguments.length ? t(n) : (t.x = function (n) {
			return arguments.length ? (e = n, t) : e
		}, t.y = function (n) {
			return arguments.length ? (r = n, t) : r
		}, t)
	}, Zo.geom.polygon = function (n) {
		return sa(n, Yc), n
	};
	var Yc = Zo.geom.polygon.prototype = [];
	Yc.area = function () {
		for (var n, t = -1, e = this.length, r = this[e - 1], u = 0; ++t < e;)n = r, r = this[t], u += n[1] * r[0] - n[0] * r[1];
		return.5 * u
	}, Yc.centroid = function (n) {
		var t, e, r = -1, u = this.length, i = 0, o = 0, a = this[u - 1];
		for (arguments.length || (n = -1 / (6 * this.area())); ++r < u;)t = a, a = this[r], e = t[0] * a[1] - a[0] * t[1], i += (t[0] + a[0]) * e, o += (t[1] + a[1]) * e;
		return[i * n, o * n]
	}, Yc.clip = function (n) {
		for (var t, e, r, u, i, o, a = Nr(n), c = -1, s = this.length - Nr(this), l = this[s - 1]; ++c < s;) {
			for (t = n.slice(), n.length = 0, u = this[c], i = t[(r = t.length - a) - 1], e = -1; ++e < r;)o = t[e], Ar(o, l, u) ? (Ar(i, l, u) || n.push(Cr(i, o, l, u)), n.push(o)) : Ar(i, l, u) && n.push(Cr(i, o, l, u)), i = o;
			a && n.push(n[0]), l = u
		}
		return n
	};
	var Ic, Zc, Vc, Xc, $c, Bc = [], Wc = [];
	Ur.prototype.prepare = function () {
		for (var n, t = this.edges, e = t.length; e--;)n = t[e].edge, n.b && n.a || t.splice(e, 1);
		return t.sort(Hr), t.length
	}, Wr.prototype = {start: function () {
		return this.edge.l === this.site ? this.edge.a : this.edge.b
	}, end: function () {
		return this.edge.l === this.site ? this.edge.b : this.edge.a
	}}, Jr.prototype = {insert: function (n, t) {
		var e, r, u;
		if (n) {
			if (t.P = n, t.N = n.N, n.N && (n.N.P = t), n.N = t, n.R) {
				for (n = n.R; n.L;)n = n.L;
				n.L = t
			} else n.R = t;
			e = n
		} else this._ ? (n = nu(this._), t.P = null, t.N = n, n.P = n.L = t, e = n) : (t.P = t.N = null, this._ = t, e = null);
		for (t.L = t.R = null, t.U = e, t.C = !0, n = t; e && e.C;)r = e.U, e === r.L ? (u = r.R, u && u.C ? (e.C = u.C = !1, r.C = !0, n = r) : (n === e.R && (Kr(this, e), n = e, e = n.U), e.C = !1, r.C = !0, Qr(this, r))) : (u = r.L, u && u.C ? (e.C = u.C = !1, r.C = !0, n = r) : (n === e.L && (Qr(this, e), n = e, e = n.U), e.C = !1, r.C = !0, Kr(this, r))), e = n.U;
		this._.C = !1
	}, remove: function (n) {
		n.N && (n.N.P = n.P), n.P && (n.P.N = n.N), n.N = n.P = null;
		var t, e, r, u = n.U, i = n.L, o = n.R;
		if (e = i ? o ? nu(o) : i : o, u ? u.L === n ? u.L = e : u.R = e : this._ = e, i && o ? (r = e.C, e.C = n.C, e.L = i, i.U = e, e !== o ? (u = e.U, e.U = n.U, n = e.R, u.L = n, e.R = o, o.U = e) : (e.U = u, u = e, n = e.R)) : (r = n.C, n = e), n && (n.U = u), !r) {
			if (n && n.C)return n.C = !1, void 0;
			do {
				if (n === this._)break;
				if (n === u.L) {
					if (t = u.R, t.C && (t.C = !1, u.C = !0, Kr(this, u), t = u.R), t.L && t.L.C || t.R && t.R.C) {
						t.R && t.R.C || (t.L.C = !1, t.C = !0, Qr(this, t), t = u.R), t.C = u.C, u.C = t.R.C = !1, Kr(this, u), n = this._;
						break
					}
				} else if (t = u.L, t.C && (t.C = !1, u.C = !0, Qr(this, u), t = u.L), t.L && t.L.C || t.R && t.R.C) {
					t.L && t.L.C || (t.R.C = !1, t.C = !0, Kr(this, t), t = u.L), t.C = u.C, u.C = t.L.C = !1, Qr(this, u), n = this._;
					break
				}
				t.C = !0, n = u, u = u.U
			} while (!n.C);
			n && (n.C = !1)
		}
	}}, Zo.geom.voronoi = function (n) {
		function t(n) {
			var t = new Array(n.length), r = a[0][0], u = a[0][1], i = a[1][0], o = a[1][1];
			return tu(e(n), a).cells.forEach(function (e, a) {
				var c = e.edges, s = e.site, l = t[a] = c.length ? c.map(function (n) {
					var t = n.start();
					return[t.x, t.y]
				}) : s.x >= r && s.x <= i && s.y >= u && s.y <= o ? [
					[r, o],
					[i, o],
					[i, u],
					[r, u]
				] : [];
				l.point = n[a]
			}), t
		}

		function e(n) {
			return n.map(function (n, t) {
				return{x: Math.round(i(n, t) / ka) * ka, y: Math.round(o(n, t) / ka) * ka, i: t}
			})
		}

		var r = wr, u = Sr, i = r, o = u, a = Jc;
		return n ? t(n) : (t.links = function (n) {
			return tu(e(n)).edges.filter(function (n) {
				return n.l && n.r
			}).map(function (t) {
				return{source: n[t.l.i], target: n[t.r.i]}
			})
		}, t.triangles = function (n) {
			var t = [];
			return tu(e(n)).cells.forEach(function (e, r) {
				for (var u, i, o = e.site, a = e.edges.sort(Hr), c = -1, s = a.length, l = a[s - 1].edge, f = l.l === o ? l.r : l.l; ++c < s;)u = l, i = f, l = a[c].edge, f = l.l === o ? l.r : l.l, r < i.i && r < f.i && ru(o, i, f) < 0 && t.push([n[r], n[i.i], n[f.i]])
			}), t
		}, t.x = function (n) {
			return arguments.length ? (i = bt(r = n), t) : r
		}, t.y = function (n) {
			return arguments.length ? (o = bt(u = n), t) : u
		}, t.clipExtent = function (n) {
			return arguments.length ? (a = null == n ? Jc : n, t) : a === Jc ? null : a
		}, t.size = function (n) {
			return arguments.length ? t.clipExtent(n && [
				[0, 0],
				n
			]) : a === Jc ? null : a && a[1]
		}, t)
	};
	var Jc = [
		[-1e6, -1e6],
		[1e6, 1e6]
	];
	Zo.geom.delaunay = function (n) {
		return Zo.geom.voronoi().triangles(n)
	}, Zo.geom.quadtree = function (n, t, e, r, u) {
		function i(n) {
			function i(n, t, e, r, u, i, o, a) {
				if (!isNaN(e) && !isNaN(r))if (n.leaf) {
					var c = n.x, l = n.y;
					if (null != c)if (ua(c - e) + ua(l - r) < .01)s(n, t, e, r, u, i, o, a); else {
						var f = n.point;
						n.x = n.y = n.point = null, s(n, f, c, l, u, i, o, a), s(n, t, e, r, u, i, o, a)
					} else n.x = e, n.y = r, n.point = t
				} else s(n, t, e, r, u, i, o, a)
			}

			function s(n, t, e, r, u, o, a, c) {
				var s = .5 * (u + a), l = .5 * (o + c), f = e >= s, h = r >= l, g = (h << 1) + f;
				n.leaf = !1, n = n.nodes[g] || (n.nodes[g] = ou()), f ? u = s : a = s, h ? o = l : c = l, i(n, t, e, r, u, o, a, c)
			}

			var l, f, h, g, p, v, d, m, y, x = bt(a), M = bt(c);
			if (null != t)v = t, d = e, m = r, y = u; else if (m = y = -(v = d = 1 / 0), f = [], h = [], p = n.length, o)for (g = 0; p > g; ++g)l = n[g], l.x < v && (v = l.x), l.y < d && (d = l.y), l.x > m && (m = l.x), l.y > y && (y = l.y), f.push(l.x), h.push(l.y); else for (g = 0; p > g; ++g) {
				var _ = +x(l = n[g], g), b = +M(l, g);
				v > _ && (v = _), d > b && (d = b), _ > m && (m = _), b > y && (y = b), f.push(_), h.push(b)
			}
			var w = m - v, S = y - d;
			w > S ? y = d + w : m = v + S;
			var k = ou();
			if (k.add = function (n) {
				i(k, n, +x(n, ++g), +M(n, g), v, d, m, y)
			}, k.visit = function (n) {
				au(n, k, v, d, m, y)
			}, g = -1, null == t) {
				for (; ++g < p;)i(k, n[g], f[g], h[g], v, d, m, y);
				--g
			} else n.forEach(k.add);
			return f = h = n = l = null, k
		}

		var o, a = wr, c = Sr;
		return(o = arguments.length) ? (a = uu, c = iu, 3 === o && (u = e, r = t, e = t = 0), i(n)) : (i.x = function (n) {
			return arguments.length ? (a = n, i) : a
		}, i.y = function (n) {
			return arguments.length ? (c = n, i) : c
		}, i.extent = function (n) {
			return arguments.length ? (null == n ? t = e = r = u = null : (t = +n[0][0], e = +n[0][1], r = +n[1][0], u = +n[1][1]), i) : null == t ? null : [
				[t, e],
				[r, u]
			]
		}, i.size = function (n) {
			return arguments.length ? (null == n ? t = e = r = u = null : (t = e = 0, r = +n[0], u = +n[1]), i) : null == t ? null : [r - t, u - e]
		}, i)
	}, Zo.interpolateRgb = cu, Zo.interpolateObject = su, Zo.interpolateNumber = lu, Zo.interpolateString = fu;
	var Gc = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Kc = new RegExp(Gc.source, "g");
	Zo.interpolate = hu, Zo.interpolators = [function (n, t) {
		var e = typeof t;
		return("string" === e ? Ia.has(t) || /^(#|rgb\(|hsl\()/.test(t) ? cu : fu : t instanceof et ? cu : Array.isArray(t) ? gu : "object" === e && isNaN(t) ? su : lu)(n, t)
	}], Zo.interpolateArray = gu;
	var Qc = function () {
		return wt
	}, ns = Zo.map({linear: Qc, poly: Mu, quad: function () {
		return mu
	}, cubic: function () {
		return yu
	}, sin: function () {
		return _u
	}, exp: function () {
		return bu
	}, circle: function () {
		return wu
	}, elastic: Su, back: ku, bounce: function () {
		return Eu
	}}), ts = Zo.map({"in": wt, out: vu, "in-out": du, "out-in": function (n) {
		return du(vu(n))
	}});
	Zo.ease = function (n) {
		var t = n.indexOf("-"), e = t >= 0 ? n.substring(0, t) : n, r = t >= 0 ? n.substring(t + 1) : "in";
		return e = ns.get(e) || Qc, r = ts.get(r) || wt, pu(r(e.apply(null, Vo.call(arguments, 1))))
	}, Zo.interpolateHcl = Au, Zo.interpolateHsl = Cu, Zo.interpolateLab = Nu, Zo.interpolateRound = zu, Zo.transform = function (n) {
		var t = $o.createElementNS(Zo.ns.prefix.svg, "g");
		return(Zo.transform = function (n) {
			if (null != n) {
				t.setAttribute("transform", n);
				var e = t.transform.baseVal.consolidate()
			}
			return new Lu(e ? e.matrix : es)
		})(n)
	}, Lu.prototype.toString = function () {
		return"translate(" + this.translate + ")rotate(" + this.rotate + ")skewX(" + this.skew + ")scale(" + this.scale + ")"
	};
	var es = {a: 1, b: 0, c: 0, d: 1, e: 0, f: 0};
	Zo.interpolateTransform = Du, Zo.layout = {}, Zo.layout.bundle = function () {
		return function (n) {
			for (var t = [], e = -1, r = n.length; ++e < r;)t.push(ju(n[e]));
			return t
		}
	}, Zo.layout.chord = function () {
		function n() {
			var n, s, f, h, g, p = {}, v = [], d = Zo.range(i), m = [];
			for (e = [], r = [], n = 0, h = -1; ++h < i;) {
				for (s = 0, g = -1; ++g < i;)s += u[h][g];
				v.push(s), m.push(Zo.range(i)), n += s
			}
			for (o && d.sort(function (n, t) {
				return o(v[n], v[t])
			}), a && m.forEach(function (n, t) {
				n.sort(function (n, e) {
					return a(u[t][n], u[t][e])
				})
			}), n = (wa - l * i) / n, s = 0, h = -1; ++h < i;) {
				for (f = s, g = -1; ++g < i;) {
					var y = d[h], x = m[y][g], M = u[y][x], _ = s, b = s += M * n;
					p[y + "-" + x] = {index: y, subindex: x, startAngle: _, endAngle: b, value: M}
				}
				r[y] = {index: y, startAngle: f, endAngle: s, value: (s - f) / n}, s += l
			}
			for (h = -1; ++h < i;)for (g = h - 1; ++g < i;) {
				var w = p[h + "-" + g], S = p[g + "-" + h];
				(w.value || S.value) && e.push(w.value < S.value ? {source: S, target: w} : {source: w, target: S})
			}
			c && t()
		}

		function t() {
			e.sort(function (n, t) {
				return c((n.source.value + n.target.value) / 2, (t.source.value + t.target.value) / 2)
			})
		}

		var e, r, u, i, o, a, c, s = {}, l = 0;
		return s.matrix = function (n) {
			return arguments.length ? (i = (u = n) && u.length, e = r = null, s) : u
		}, s.padding = function (n) {
			return arguments.length ? (l = n, e = r = null, s) : l
		}, s.sortGroups = function (n) {
			return arguments.length ? (o = n, e = r = null, s) : o
		}, s.sortSubgroups = function (n) {
			return arguments.length ? (a = n, e = null, s) : a
		}, s.sortChords = function (n) {
			return arguments.length ? (c = n, e && t(), s) : c
		}, s.chords = function () {
			return e || n(), e
		}, s.groups = function () {
			return r || n(), r
		}, s
	}, Zo.layout.force = function () {
		function n(n) {
			return function (t, e, r, u) {
				if (t.point !== n) {
					var i = t.cx - n.x, o = t.cy - n.y, a = u - e, c = i * i + o * o;
					if (c > a * a / d) {
						if (p > c) {
							var s = t.charge / c;
							n.px -= i * s, n.py -= o * s
						}
						return!0
					}
					if (t.point && c && p > c) {
						var s = t.pointCharge / c;
						n.px -= i * s, n.py -= o * s
					}
				}
				return!t.charge
			}
		}

		function t(n) {
			n.px = Zo.event.x, n.py = Zo.event.y, a.resume()
		}

		var e, r, u, i, o, a = {}, c = Zo.dispatch("start", "tick", "end"), s = [1, 1], l = .9, f = rs, h = us, g = -30, p = is, v = .1, d = .64, m = [], y = [];
		return a.tick = function () {
			if ((r *= .99) < .005)return c.end({type: "end", alpha: r = 0}), !0;
			var t, e, a, f, h, p, d, x, M, _ = m.length, b = y.length;
			for (e = 0; b > e; ++e)a = y[e], f = a.source, h = a.target, x = h.x - f.x, M = h.y - f.y, (p = x * x + M * M) && (p = r * i[e] * ((p = Math.sqrt(p)) - u[e]) / p, x *= p, M *= p, h.x -= x * (d = f.weight / (h.weight + f.weight)), h.y -= M * d, f.x += x * (d = 1 - d), f.y += M * d);
			if ((d = r * v) && (x = s[0] / 2, M = s[1] / 2, e = -1, d))for (; ++e < _;)a = m[e], a.x += (x - a.x) * d, a.y += (M - a.y) * d;
			if (g)for (Vu(t = Zo.geom.quadtree(m), r, o), e = -1; ++e < _;)(a = m[e]).fixed || t.visit(n(a));
			for (e = -1; ++e < _;)a = m[e], a.fixed ? (a.x = a.px, a.y = a.py) : (a.x -= (a.px - (a.px = a.x)) * l, a.y -= (a.py - (a.py = a.y)) * l);
			c.tick({type: "tick", alpha: r})
		}, a.nodes = function (n) {
			return arguments.length ? (m = n, a) : m
		}, a.links = function (n) {
			return arguments.length ? (y = n, a) : y
		}, a.size = function (n) {
			return arguments.length ? (s = n, a) : s
		}, a.linkDistance = function (n) {
			return arguments.length ? (f = "function" == typeof n ? n : +n, a) : f
		}, a.distance = a.linkDistance, a.linkStrength = function (n) {
			return arguments.length ? (h = "function" == typeof n ? n : +n, a) : h
		}, a.friction = function (n) {
			return arguments.length ? (l = +n, a) : l
		}, a.charge = function (n) {
			return arguments.length ? (g = "function" == typeof n ? n : +n, a) : g
		}, a.chargeDistance = function (n) {
			return arguments.length ? (p = n * n, a) : Math.sqrt(p)
		}, a.gravity = function (n) {
			return arguments.length ? (v = +n, a) : v
		}, a.theta = function (n) {
			return arguments.length ? (d = n * n, a) : Math.sqrt(d)
		}, a.alpha = function (n) {
			return arguments.length ? (n = +n, r ? r = n > 0 ? n : 0 : n > 0 && (c.start({type: "start", alpha: r = n}), Zo.timer(a.tick)), a) : r
		}, a.start = function () {
			function n(n, r) {
				if (!e) {
					for (e = new Array(c), a = 0; c > a; ++a)e[a] = [];
					for (a = 0; s > a; ++a) {
						var u = y[a];
						e[u.source.index].push(u.target), e[u.target.index].push(u.source)
					}
				}
				for (var i, o = e[t], a = -1, s = o.length; ++a < s;)if (!isNaN(i = o[a][n]))return i;
				return Math.random() * r
			}

			var t, e, r, c = m.length, l = y.length, p = s[0], v = s[1];
			for (t = 0; c > t; ++t)(r = m[t]).index = t, r.weight = 0;
			for (t = 0; l > t; ++t)r = y[t], "number" == typeof r.source && (r.source = m[r.source]), "number" == typeof r.target && (r.target = m[r.target]), ++r.source.weight, ++r.target.weight;
			for (t = 0; c > t; ++t)r = m[t], isNaN(r.x) && (r.x = n("x", p)), isNaN(r.y) && (r.y = n("y", v)), isNaN(r.px) && (r.px = r.x), isNaN(r.py) && (r.py = r.y);
			if (u = [], "function" == typeof f)for (t = 0; l > t; ++t)u[t] = +f.call(this, y[t], t); else for (t = 0; l > t; ++t)u[t] = f;
			if (i = [], "function" == typeof h)for (t = 0; l > t; ++t)i[t] = +h.call(this, y[t], t); else for (t = 0; l > t; ++t)i[t] = h;
			if (o = [], "function" == typeof g)for (t = 0; c > t; ++t)o[t] = +g.call(this, m[t], t); else for (t = 0; c > t; ++t)o[t] = g;
			return a.resume()
		}, a.resume = function () {
			return a.alpha(.1)
		}, a.stop = function () {
			return a.alpha(0)
		}, a.drag = function () {
			return e || (e = Zo.behavior.drag().origin(wt).on("dragstart.force", Ou).on("drag.force", t).on("dragend.force", Yu)), arguments.length ? (this.on("mouseover.force", Iu).on("mouseout.force", Zu).call(e), void 0) : e
		}, Zo.rebind(a, c, "on")
	};
	var rs = 20, us = 1, is = 1 / 0;
	Zo.layout.hierarchy = function () {
		function n(u) {
			var i, o = [u], a = [];
			for (u.depth = 0; null != (i = o.pop());)if (a.push(i), (s = e.call(n, i, i.depth)) && (c = s.length)) {
				for (var c, s, l; --c >= 0;)o.push(l = s[c]), l.parent = i, l.depth = i.depth + 1;
				r && (i.value = 0), i.children = s
			} else r && (i.value = +r.call(n, i, i.depth) || 0), delete i.children;
			return Bu(u, function (n) {
				var e, u;
				t && (e = n.children) && e.sort(t), r && (u = n.parent) && (u.value += n.value)
			}), a
		}

		var t = Gu, e = Wu, r = Ju;
		return n.sort = function (e) {
			return arguments.length ? (t = e, n) : t
		}, n.children = function (t) {
			return arguments.length ? (e = t, n) : e
		}, n.value = function (t) {
			return arguments.length ? (r = t, n) : r
		}, n.revalue = function (t) {
			return r && ($u(t, function (n) {
				n.children && (n.value = 0)
			}), Bu(t, function (t) {
				var e;
				t.children || (t.value = +r.call(n, t, t.depth) || 0), (e = t.parent) && (e.value += t.value)
			})), t
		}, n
	}, Zo.layout.partition = function () {
		function n(t, e, r, u) {
			var i = t.children;
			if (t.x = e, t.y = t.depth * u, t.dx = r, t.dy = u, i && (o = i.length)) {
				var o, a, c, s = -1;
				for (r = t.value ? r / t.value : 0; ++s < o;)n(a = i[s], e, c = a.value * r, u), e += c
			}
		}

		function t(n) {
			var e = n.children, r = 0;
			if (e && (u = e.length))for (var u, i = -1; ++i < u;)r = Math.max(r, t(e[i]));
			return 1 + r
		}

		function e(e, i) {
			var o = r.call(this, e, i);
			return n(o[0], 0, u[0], u[1] / t(o[0])), o
		}

		var r = Zo.layout.hierarchy(), u = [1, 1];
		return e.size = function (n) {
			return arguments.length ? (u = n, e) : u
		}, Xu(e, r)
	}, Zo.layout.pie = function () {
		function n(i) {
			var o = i.map(function (e, r) {
				return+t.call(n, e, r)
			}), a = +("function" == typeof r ? r.apply(this, arguments) : r), c = (("function" == typeof u ? u.apply(this, arguments) : u) - a) / Zo.sum(o), s = Zo.range(i.length);
			null != e && s.sort(e === os ? function (n, t) {
				return o[t] - o[n]
			} : function (n, t) {
				return e(i[n], i[t])
			});
			var l = [];
			return s.forEach(function (n) {
				var t;
				l[n] = {data: i[n], value: t = o[n], startAngle: a, endAngle: a += t * c}
			}), l
		}

		var t = Number, e = os, r = 0, u = wa;
		return n.value = function (e) {
			return arguments.length ? (t = e, n) : t
		}, n.sort = function (t) {
			return arguments.length ? (e = t, n) : e
		}, n.startAngle = function (t) {
			return arguments.length ? (r = t, n) : r
		}, n.endAngle = function (t) {
			return arguments.length ? (u = t, n) : u
		}, n
	};
	var os = {};
	Zo.layout.stack = function () {
		function n(a, c) {
			var s = a.map(function (e, r) {
				return t.call(n, e, r)
			}), l = s.map(function (t) {
				return t.map(function (t, e) {
					return[i.call(n, t, e), o.call(n, t, e)]
				})
			}), f = e.call(n, l, c);
			s = Zo.permute(s, f), l = Zo.permute(l, f);
			var h, g, p, v = r.call(n, l, c), d = s.length, m = s[0].length;
			for (g = 0; m > g; ++g)for (u.call(n, s[0][g], p = v[g], l[0][g][1]), h = 1; d > h; ++h)u.call(n, s[h][g], p += l[h - 1][g][1], l[h][g][1]);
			return a
		}

		var t = wt, e = ei, r = ri, u = ti, i = Qu, o = ni;
		return n.values = function (e) {
			return arguments.length ? (t = e, n) : t
		}, n.order = function (t) {
			return arguments.length ? (e = "function" == typeof t ? t : as.get(t) || ei, n) : e
		}, n.offset = function (t) {
			return arguments.length ? (r = "function" == typeof t ? t : cs.get(t) || ri, n) : r
		}, n.x = function (t) {
			return arguments.length ? (i = t, n) : i
		}, n.y = function (t) {
			return arguments.length ? (o = t, n) : o
		}, n.out = function (t) {
			return arguments.length ? (u = t, n) : u
		}, n
	};
	var as = Zo.map({"inside-out": function (n) {
		var t, e, r = n.length, u = n.map(ui), i = n.map(ii), o = Zo.range(r).sort(function (n, t) {
			return u[n] - u[t]
		}), a = 0, c = 0, s = [], l = [];
		for (t = 0; r > t; ++t)e = o[t], c > a ? (a += i[e], s.push(e)) : (c += i[e], l.push(e));
		return l.reverse().concat(s)
	}, reverse: function (n) {
		return Zo.range(n.length).reverse()
	}, "default": ei}), cs = Zo.map({silhouette: function (n) {
		var t, e, r, u = n.length, i = n[0].length, o = [], a = 0, c = [];
		for (e = 0; i > e; ++e) {
			for (t = 0, r = 0; u > t; t++)r += n[t][e][1];
			r > a && (a = r), o.push(r)
		}
		for (e = 0; i > e; ++e)c[e] = (a - o[e]) / 2;
		return c
	}, wiggle: function (n) {
		var t, e, r, u, i, o, a, c, s, l = n.length, f = n[0], h = f.length, g = [];
		for (g[0] = c = s = 0, e = 1; h > e; ++e) {
			for (t = 0, u = 0; l > t; ++t)u += n[t][e][1];
			for (t = 0, i = 0, a = f[e][0] - f[e - 1][0]; l > t; ++t) {
				for (r = 0, o = (n[t][e][1] - n[t][e - 1][1]) / (2 * a); t > r; ++r)o += (n[r][e][1] - n[r][e - 1][1]) / a;
				i += o * n[t][e][1]
			}
			g[e] = c -= u ? i / u * a : 0, s > c && (s = c)
		}
		for (e = 0; h > e; ++e)g[e] -= s;
		return g
	}, expand: function (n) {
		var t, e, r, u = n.length, i = n[0].length, o = 1 / u, a = [];
		for (e = 0; i > e; ++e) {
			for (t = 0, r = 0; u > t; t++)r += n[t][e][1];
			if (r)for (t = 0; u > t; t++)n[t][e][1] /= r; else for (t = 0; u > t; t++)n[t][e][1] = o
		}
		for (e = 0; i > e; ++e)a[e] = 0;
		return a
	}, zero: ri});
	Zo.layout.histogram = function () {
		function n(n, i) {
			for (var o, a, c = [], s = n.map(e, this), l = r.call(this, s, i), f = u.call(this, l, s, i), i = -1, h = s.length, g = f.length - 1, p = t ? 1 : 1 / h; ++i < g;)o = c[i] = [], o.dx = f[i + 1] - (o.x = f[i]), o.y = 0;
			if (g > 0)for (i = -1; ++i < h;)a = s[i], a >= l[0] && a <= l[1] && (o = c[Zo.bisect(f, a, 1, g) - 1], o.y += p, o.push(n[i]));
			return c
		}

		var t = !0, e = Number, r = si, u = ai;
		return n.value = function (t) {
			return arguments.length ? (e = t, n) : e
		}, n.range = function (t) {
			return arguments.length ? (r = bt(t), n) : r
		}, n.bins = function (t) {
			return arguments.length ? (u = "number" == typeof t ? function (n) {
				return ci(n, t)
			} : bt(t), n) : u
		}, n.frequency = function (e) {
			return arguments.length ? (t = !!e, n) : t
		}, n
	}, Zo.layout.pack = function () {
		function n(n, i) {
			var o = e.call(this, n, i), a = o[0], c = u[0], s = u[1], l = null == t ? Math.sqrt : "function" == typeof t ? t : function () {
				return t
			};
			if (a.x = a.y = 0, Bu(a, function (n) {
				n.r = +l(n.value)
			}), Bu(a, pi), r) {
				var f = r * (t ? 1 : Math.max(2 * a.r / c, 2 * a.r / s)) / 2;
				Bu(a, function (n) {
					n.r += f
				}), Bu(a, pi), Bu(a, function (n) {
					n.r -= f
				})
			}
			return mi(a, c / 2, s / 2, t ? 1 : 1 / Math.max(2 * a.r / c, 2 * a.r / s)), o
		}

		var t, e = Zo.layout.hierarchy().sort(li), r = 0, u = [1, 1];
		return n.size = function (t) {
			return arguments.length ? (u = t, n) : u
		}, n.radius = function (e) {
			return arguments.length ? (t = null == e || "function" == typeof e ? e : +e, n) : t
		}, n.padding = function (t) {
			return arguments.length ? (r = +t, n) : r
		}, Xu(n, e)
	}, Zo.layout.tree = function () {
		function n(n, u) {
			var l = o.call(this, n, u), f = l[0], h = t(f);
			if (Bu(h, e), h.parent.m = -h.z, $u(h, r), s)$u(f, i); else {
				var g = f, p = f, v = f;
				$u(f, function (n) {
					n.x < g.x && (g = n), n.x > p.x && (p = n), n.depth > v.depth && (v = n)
				});
				var d = a(g, p) / 2 - g.x, m = c[0] / (p.x + a(p, g) / 2 + d), y = c[1] / (v.depth || 1);
				$u(f, function (n) {
					n.x = (n.x + d) * m, n.y = n.depth * y
				})
			}
			return l
		}

		function t(n) {
			for (var t, e = {A: null, children: [n]}, r = [e]; null != (t = r.pop());)for (var u, i = t.children, o = 0, a = i.length; a > o; ++o)r.push((i[o] = u = {_: i[o], parent: t, children: (u = i[o].children) && u.slice() || [], A: null, a: null, z: 0, m: 0, c: 0, s: 0, t: null, i: o}).a = u);
			return e.children[0]
		}

		function e(n) {
			var t = n.children, e = n.parent.children, r = n.i ? e[n.i - 1] : null;
			if (t.length) {
				wi(n);
				var i = (t[0].z + t[t.length - 1].z) / 2;
				r ? (n.z = r.z + a(n._, r._), n.m = n.z - i) : n.z = i
			} else r && (n.z = r.z + a(n._, r._));
			n.parent.A = u(n, r, n.parent.A || e[0])
		}

		function r(n) {
			n._.x = n.z + n.parent.m, n.m += n.parent.m
		}

		function u(n, t, e) {
			if (t) {
				for (var r, u = n, i = n, o = t, c = u.parent.children[0], s = u.m, l = i.m, f = o.m, h = c.m; o = _i(o), u = Mi(u), o && u;)c = Mi(c), i = _i(i), i.a = n, r = o.z + f - u.z - s + a(o._, u._), r > 0 && (bi(Si(o, n, e), n, r), s += r, l += r), f += o.m, s += u.m, h += c.m, l += i.m;
				o && !_i(i) && (i.t = o, i.m += f - l), u && !Mi(c) && (c.t = u, c.m += s - h, e = n)
			}
			return e
		}

		function i(n) {
			n.x *= c[0], n.y = n.depth * c[1]
		}

		var o = Zo.layout.hierarchy().sort(null).value(null), a = xi, c = [1, 1], s = null;
		return n.separation = function (t) {
			return arguments.length ? (a = t, n) : a
		}, n.size = function (t) {
			return arguments.length ? (s = null == (c = t) ? i : null, n) : s ? null : c
		}, n.nodeSize = function (t) {
			return arguments.length ? (s = null == (c = t) ? null : i, n) : s ? c : null
		}, Xu(n, o)
	}, Zo.layout.cluster = function () {
		function n(n, i) {
			var o, a = t.call(this, n, i), c = a[0], s = 0;
			Bu(c, function (n) {
				var t = n.children;
				t && t.length ? (n.x = Ei(t), n.y = ki(t)) : (n.x = o ? s += e(n, o) : 0, n.y = 0, o = n)
			});
			var l = Ai(c), f = Ci(c), h = l.x - e(l, f) / 2, g = f.x + e(f, l) / 2;
			return Bu(c, u ? function (n) {
				n.x = (n.x - c.x) * r[0], n.y = (c.y - n.y) * r[1]
			} : function (n) {
				n.x = (n.x - h) / (g - h) * r[0], n.y = (1 - (c.y ? n.y / c.y : 1)) * r[1]
			}), a
		}

		var t = Zo.layout.hierarchy().sort(null).value(null), e = xi, r = [1, 1], u = !1;
		return n.separation = function (t) {
			return arguments.length ? (e = t, n) : e
		}, n.size = function (t) {
			return arguments.length ? (u = null == (r = t), n) : u ? null : r
		}, n.nodeSize = function (t) {
			return arguments.length ? (u = null != (r = t), n) : u ? r : null
		}, Xu(n, t)
	}, Zo.layout.treemap = function () {
		function n(n, t) {
			for (var e, r, u = -1, i = n.length; ++u < i;)r = (e = n[u]).value * (0 > t ? 0 : t), e.area = isNaN(r) || 0 >= r ? 0 : r
		}

		function t(e) {
			var i = e.children;
			if (i && i.length) {
				var o, a, c, s = f(e), l = [], h = i.slice(), p = 1 / 0, v = "slice" === g ? s.dx : "dice" === g ? s.dy : "slice-dice" === g ? 1 & e.depth ? s.dy : s.dx : Math.min(s.dx, s.dy);
				for (n(h, s.dx * s.dy / e.value), l.area = 0; (c = h.length) > 0;)l.push(o = h[c - 1]), l.area += o.area, "squarify" !== g || (a = r(l, v)) <= p ? (h.pop(), p = a) : (l.area -= l.pop().area, u(l, v, s, !1), v = Math.min(s.dx, s.dy), l.length = l.area = 0, p = 1 / 0);
				l.length && (u(l, v, s, !0), l.length = l.area = 0), i.forEach(t)
			}
		}

		function e(t) {
			var r = t.children;
			if (r && r.length) {
				var i, o = f(t), a = r.slice(), c = [];
				for (n(a, o.dx * o.dy / t.value), c.area = 0; i = a.pop();)c.push(i), c.area += i.area, null != i.z && (u(c, i.z ? o.dx : o.dy, o, !a.length), c.length = c.area = 0);
				r.forEach(e)
			}
		}

		function r(n, t) {
			for (var e, r = n.area, u = 0, i = 1 / 0, o = -1, a = n.length; ++o < a;)(e = n[o].area) && (i > e && (i = e), e > u && (u = e));
			return r *= r, t *= t, r ? Math.max(t * u * p / r, r / (t * i * p)) : 1 / 0
		}

		function u(n, t, e, r) {
			var u, i = -1, o = n.length, a = e.x, s = e.y, l = t ? c(n.area / t) : 0;
			if (t == e.dx) {
				for ((r || l > e.dy) && (l = e.dy); ++i < o;)u = n[i], u.x = a, u.y = s, u.dy = l, a += u.dx = Math.min(e.x + e.dx - a, l ? c(u.area / l) : 0);
				u.z = !0, u.dx += e.x + e.dx - a, e.y += l, e.dy -= l
			} else {
				for ((r || l > e.dx) && (l = e.dx); ++i < o;)u = n[i], u.x = a, u.y = s, u.dx = l, s += u.dy = Math.min(e.y + e.dy - s, l ? c(u.area / l) : 0);
				u.z = !1, u.dy += e.y + e.dy - s, e.x += l, e.dx -= l
			}
		}

		function i(r) {
			var u = o || a(r), i = u[0];
			return i.x = 0, i.y = 0, i.dx = s[0], i.dy = s[1], o && a.revalue(i), n([i], i.dx * i.dy / i.value), (o ? e : t)(i), h && (o = u), u
		}

		var o, a = Zo.layout.hierarchy(), c = Math.round, s = [1, 1], l = null, f = Ni, h = !1, g = "squarify", p = .5 * (1 + Math.sqrt(5));
		return i.size = function (n) {
			return arguments.length ? (s = n, i) : s
		}, i.padding = function (n) {
			function t(t) {
				var e = n.call(i, t, t.depth);
				return null == e ? Ni(t) : zi(t, "number" == typeof e ? [e, e, e, e] : e)
			}

			function e(t) {
				return zi(t, n)
			}

			if (!arguments.length)return l;
			var r;
			return f = null == (l = n) ? Ni : "function" == (r = typeof n) ? t : "number" === r ? (n = [n, n, n, n], e) : e, i
		}, i.round = function (n) {
			return arguments.length ? (c = n ? Math.round : Number, i) : c != Number
		}, i.sticky = function (n) {
			return arguments.length ? (h = n, o = null, i) : h
		}, i.ratio = function (n) {
			return arguments.length ? (p = n, i) : p
		}, i.mode = function (n) {
			return arguments.length ? (g = n + "", i) : g
		}, Xu(i, a)
	}, Zo.random = {normal: function (n, t) {
		var e = arguments.length;
		return 2 > e && (t = 1), 1 > e && (n = 0), function () {
			var e, r, u;
			do e = 2 * Math.random() - 1, r = 2 * Math.random() - 1, u = e * e + r * r; while (!u || u > 1);
			return n + t * e * Math.sqrt(-2 * Math.log(u) / u)
		}
	}, logNormal: function () {
		var n = Zo.random.normal.apply(Zo, arguments);
		return function () {
			return Math.exp(n())
		}
	}, bates: function (n) {
		var t = Zo.random.irwinHall(n);
		return function () {
			return t() / n
		}
	}, irwinHall: function (n) {
		return function () {
			for (var t = 0, e = 0; n > e; e++)t += Math.random();
			return t
		}
	}}, Zo.scale = {};
	var ss = {floor: wt, ceil: wt};
	Zo.scale.linear = function () {
		return Ui([0, 1], [0, 1], hu, !1)
	};
	var ls = {s: 1, g: 1, p: 1, r: 1, e: 1};
	Zo.scale.log = function () {
		return Vi(Zo.scale.linear().domain([0, 1]), 10, !0, [1, 10])
	};
	var fs = Zo.format(".0e"), hs = {floor: function (n) {
		return-Math.ceil(-n)
	}, ceil: function (n) {
		return-Math.floor(-n)
	}};
	Zo.scale.pow = function () {
		return Xi(Zo.scale.linear(), 1, [0, 1])
	}, Zo.scale.sqrt = function () {
		return Zo.scale.pow().exponent(.5)
	}, Zo.scale.ordinal = function () {
		return Bi([], {t: "range", a: [
			[]
		]})
	}, Zo.scale.category10 = function () {
		return Zo.scale.ordinal().range(gs)
	}, Zo.scale.category20 = function () {
		return Zo.scale.ordinal().range(ps)
	}, Zo.scale.category20b = function () {
		return Zo.scale.ordinal().range(vs)
	}, Zo.scale.category20c = function () {
		return Zo.scale.ordinal().range(ds)
	};
	var gs = [2062260, 16744206, 2924588, 14034728, 9725885, 9197131, 14907330, 8355711, 12369186, 1556175].map(vt), ps = [2062260, 11454440, 16744206, 16759672, 2924588, 10018698, 14034728, 16750742, 9725885, 12955861, 9197131, 12885140, 14907330, 16234194, 8355711, 13092807, 12369186, 14408589, 1556175, 10410725].map(vt), vs = [3750777, 5395619, 7040719, 10264286, 6519097, 9216594, 11915115, 13556636, 9202993, 12426809, 15186514, 15190932, 8666169, 11356490, 14049643, 15177372, 8077683, 10834324, 13528509, 14589654].map(vt), ds = [3244733, 7057110, 10406625, 13032431, 15095053, 16616764, 16625259, 16634018, 3253076, 7652470, 10607003, 13101504, 7695281, 10394312, 12369372, 14342891, 6513507, 9868950, 12434877, 14277081].map(vt);
	Zo.scale.quantile = function () {
		return Wi([], [])
	}, Zo.scale.quantize = function () {
		return Ji(0, 1, [0, 1])
	}, Zo.scale.threshold = function () {
		return Gi([.5], [0, 1])
	}, Zo.scale.identity = function () {
		return Ki([0, 1])
	}, Zo.svg = {}, Zo.svg.arc = function () {
		function n() {
			var n = t.apply(this, arguments), i = e.apply(this, arguments), o = r.apply(this, arguments) + ms, a = u.apply(this, arguments) + ms, c = (o > a && (c = o, o = a, a = c), a - o), s = ba > c ? "0" : "1", l = Math.cos(o), f = Math.sin(o), h = Math.cos(a), g = Math.sin(a);
			return c >= ys ? n ? "M0," + i + "A" + i + "," + i + " 0 1,1 0," + -i + "A" + i + "," + i + " 0 1,1 0," + i + "M0," + n + "A" + n + "," + n + " 0 1,0 0," + -n + "A" + n + "," + n + " 0 1,0 0," + n + "Z" : "M0," + i + "A" + i + "," + i + " 0 1,1 0," + -i + "A" + i + "," + i + " 0 1,1 0," + i + "Z" : n ? "M" + i * l + "," + i * f + "A" + i + "," + i + " 0 " + s + ",1 " + i * h + "," + i * g + "L" + n * h + "," + n * g + "A" + n + "," + n + " 0 " + s + ",0 " + n * l + "," + n * f + "Z" : "M" + i * l + "," + i * f + "A" + i + "," + i + " 0 " + s + ",1 " + i * h + "," + i * g + "L0,0" + "Z"
		}

		var t = Qi, e = no, r = to, u = eo;
		return n.innerRadius = function (e) {
			return arguments.length ? (t = bt(e), n) : t
		}, n.outerRadius = function (t) {
			return arguments.length ? (e = bt(t), n) : e
		}, n.startAngle = function (t) {
			return arguments.length ? (r = bt(t), n) : r
		}, n.endAngle = function (t) {
			return arguments.length ? (u = bt(t), n) : u
		}, n.centroid = function () {
			var n = (t.apply(this, arguments) + e.apply(this, arguments)) / 2, i = (r.apply(this, arguments) + u.apply(this, arguments)) / 2 + ms;
			return[Math.cos(i) * n, Math.sin(i) * n]
		}, n
	};
	var ms = -Sa, ys = wa - ka;
	Zo.svg.line = function () {
		return ro(wt)
	};
	var xs = Zo.map({linear: uo, "linear-closed": io, step: oo, "step-before": ao, "step-after": co, basis: po, "basis-open": vo, "basis-closed": mo, bundle: yo, cardinal: fo, "cardinal-open": so, "cardinal-closed": lo, monotone: So});
	xs.forEach(function (n, t) {
		t.key = n, t.closed = /-closed$/.test(n)
	});
	var Ms = [0, 2 / 3, 1 / 3, 0], _s = [0, 1 / 3, 2 / 3, 0], bs = [0, 1 / 6, 2 / 3, 1 / 6];
	Zo.svg.line.radial = function () {
		var n = ro(ko);
		return n.radius = n.x, delete n.x, n.angle = n.y, delete n.y, n
	}, ao.reverse = co, co.reverse = ao, Zo.svg.area = function () {
		return Eo(wt)
	}, Zo.svg.area.radial = function () {
		var n = Eo(ko);
		return n.radius = n.x, delete n.x, n.innerRadius = n.x0, delete n.x0, n.outerRadius = n.x1, delete n.x1, n.angle = n.y, delete n.y, n.startAngle = n.y0, delete n.y0, n.endAngle = n.y1, delete n.y1, n
	}, Zo.svg.chord = function () {
		function n(n, a) {
			var c = t(this, i, n, a), s = t(this, o, n, a);
			return"M" + c.p0 + r(c.r, c.p1, c.a1 - c.a0) + (e(c, s) ? u(c.r, c.p1, c.r, c.p0) : u(c.r, c.p1, s.r, s.p0) + r(s.r, s.p1, s.a1 - s.a0) + u(s.r, s.p1, c.r, c.p0)) + "Z"
		}

		function t(n, t, e, r) {
			var u = t.call(n, e, r), i = a.call(n, u, r), o = c.call(n, u, r) + ms, l = s.call(n, u, r) + ms;
			return{r: i, a0: o, a1: l, p0: [i * Math.cos(o), i * Math.sin(o)], p1: [i * Math.cos(l), i * Math.sin(l)]}
		}

		function e(n, t) {
			return n.a0 == t.a0 && n.a1 == t.a1
		}

		function r(n, t, e) {
			return"A" + n + "," + n + " 0 " + +(e > ba) + ",1 " + t
		}

		function u(n, t, e, r) {
			return"Q 0,0 " + r
		}

		var i = gr, o = pr, a = Ao, c = to, s = eo;
		return n.radius = function (t) {
			return arguments.length ? (a = bt(t), n) : a
		}, n.source = function (t) {
			return arguments.length ? (i = bt(t), n) : i
		}, n.target = function (t) {
			return arguments.length ? (o = bt(t), n) : o
		}, n.startAngle = function (t) {
			return arguments.length ? (c = bt(t), n) : c
		}, n.endAngle = function (t) {
			return arguments.length ? (s = bt(t), n) : s
		}, n
	}, Zo.svg.diagonal = function () {
		function n(n, u) {
			var i = t.call(this, n, u), o = e.call(this, n, u), a = (i.y + o.y) / 2, c = [i, {x: i.x, y: a}, {x: o.x, y: a}, o];
			return c = c.map(r), "M" + c[0] + "C" + c[1] + " " + c[2] + " " + c[3]
		}

		var t = gr, e = pr, r = Co;
		return n.source = function (e) {
			return arguments.length ? (t = bt(e), n) : t
		}, n.target = function (t) {
			return arguments.length ? (e = bt(t), n) : e
		}, n.projection = function (t) {
			return arguments.length ? (r = t, n) : r
		}, n
	}, Zo.svg.diagonal.radial = function () {
		var n = Zo.svg.diagonal(), t = Co, e = n.projection;
		return n.projection = function (n) {
			return arguments.length ? e(No(t = n)) : t
		}, n
	}, Zo.svg.symbol = function () {
		function n(n, r) {
			return(ws.get(t.call(this, n, r)) || To)(e.call(this, n, r))
		}

		var t = Lo, e = zo;
		return n.type = function (e) {
			return arguments.length ? (t = bt(e), n) : t
		}, n.size = function (t) {
			return arguments.length ? (e = bt(t), n) : e
		}, n
	};
	var ws = Zo.map({circle: To, cross: function (n) {
		var t = Math.sqrt(n / 5) / 2;
		return"M" + -3 * t + "," + -t + "H" + -t + "V" + -3 * t + "H" + t + "V" + -t + "H" + 3 * t + "V" + t + "H" + t + "V" + 3 * t + "H" + -t + "V" + t + "H" + -3 * t + "Z"
	}, diamond: function (n) {
		var t = Math.sqrt(n / (2 * As)), e = t * As;
		return"M0," + -t + "L" + e + ",0" + " 0," + t + " " + -e + ",0" + "Z"
	}, square: function (n) {
		var t = Math.sqrt(n) / 2;
		return"M" + -t + "," + -t + "L" + t + "," + -t + " " + t + "," + t + " " + -t + "," + t + "Z"
	}, "triangle-down": function (n) {
		var t = Math.sqrt(n / Es), e = t * Es / 2;
		return"M0," + e + "L" + t + "," + -e + " " + -t + "," + -e + "Z"
	}, "triangle-up": function (n) {
		var t = Math.sqrt(n / Es), e = t * Es / 2;
		return"M0," + -e + "L" + t + "," + e + " " + -t + "," + e + "Z"
	}});
	Zo.svg.symbolTypes = ws.keys();
	var Ss, ks, Es = Math.sqrt(3), As = Math.tan(30 * Aa), Cs = [], Ns = 0;
	Cs.call = pa.call, Cs.empty = pa.empty, Cs.node = pa.node, Cs.size = pa.size, Zo.transition = function (n) {
		return arguments.length ? Ss ? n.transition() : n : ma.transition()
	}, Zo.transition.prototype = Cs, Cs.select = function (n) {
		var t, e, r, u = this.id, i = [];
		n = b(n);
		for (var o = -1, a = this.length; ++o < a;) {
			i.push(t = []);
			for (var c = this[o], s = -1, l = c.length; ++s < l;)(r = c[s]) && (e = n.call(r, r.__data__, s, o)) ? ("__data__"in r && (e.__data__ = r.__data__), Po(e, s, u, r.__transition__[u]), t.push(e)) : t.push(null)
		}
		return qo(i, u)
	}, Cs.selectAll = function (n) {
		var t, e, r, u, i, o = this.id, a = [];
		n = w(n);
		for (var c = -1, s = this.length; ++c < s;)for (var l = this[c], f = -1, h = l.length; ++f < h;)if (r = l[f]) {
			i = r.__transition__[o], e = n.call(r, r.__data__, f, c), a.push(t = []);
			for (var g = -1, p = e.length; ++g < p;)(u = e[g]) && Po(u, g, o, i), t.push(u)
		}
		return qo(a, o)
	}, Cs.filter = function (n) {
		var t, e, r, u = [];
		"function" != typeof n && (n = R(n));
		for (var i = 0, o = this.length; o > i; i++) {
			u.push(t = []);
			for (var e = this[i], a = 0, c = e.length; c > a; a++)(r = e[a]) && n.call(r, r.__data__, a, i) && t.push(r)
		}
		return qo(u, this.id)
	}, Cs.tween = function (n, t) {
		var e = this.id;
		return arguments.length < 2 ? this.node().__transition__[e].tween.get(n) : P(this, null == t ? function (t) {
			t.__transition__[e].tween.remove(n)
		} : function (r) {
			r.__transition__[e].tween.set(n, t)
		})
	}, Cs.attr = function (n, t) {
		function e() {
			this.removeAttribute(a)
		}

		function r() {
			this.removeAttributeNS(a.space, a.local)
		}

		function u(n) {
			return null == n ? e : (n += "", function () {
				var t, e = this.getAttribute(a);
				return e !== n && (t = o(e, n), function (n) {
					this.setAttribute(a, t(n))
				})
			})
		}

		function i(n) {
			return null == n ? r : (n += "", function () {
				var t, e = this.getAttributeNS(a.space, a.local);
				return e !== n && (t = o(e, n), function (n) {
					this.setAttributeNS(a.space, a.local, t(n))
				})
			})
		}

		if (arguments.length < 2) {
			for (t in n)this.attr(t, n[t]);
			return this
		}
		var o = "transform" == n ? Du : hu, a = Zo.ns.qualify(n);
		return Ro(this, "attr." + n, t, a.local ? i : u)
	}, Cs.attrTween = function (n, t) {
		function e(n, e) {
			var r = t.call(this, n, e, this.getAttribute(u));
			return r && function (n) {
				this.setAttribute(u, r(n))
			}
		}

		function r(n, e) {
			var r = t.call(this, n, e, this.getAttributeNS(u.space, u.local));
			return r && function (n) {
				this.setAttributeNS(u.space, u.local, r(n))
			}
		}

		var u = Zo.ns.qualify(n);
		return this.tween("attr." + n, u.local ? r : e)
	}, Cs.style = function (n, t, e) {
		function r() {
			this.style.removeProperty(n)
		}

		function u(t) {
			return null == t ? r : (t += "", function () {
				var r, u = Wo.getComputedStyle(this, null).getPropertyValue(n);
				return u !== t && (r = hu(u, t), function (t) {
					this.style.setProperty(n, r(t), e)
				})
			})
		}

		var i = arguments.length;
		if (3 > i) {
			if ("string" != typeof n) {
				2 > i && (t = "");
				for (e in n)this.style(e, n[e], t);
				return this
			}
			e = ""
		}
		return Ro(this, "style." + n, t, u)
	}, Cs.styleTween = function (n, t, e) {
		function r(r, u) {
			var i = t.call(this, r, u, Wo.getComputedStyle(this, null).getPropertyValue(n));
			return i && function (t) {
				this.style.setProperty(n, i(t), e)
			}
		}

		return arguments.length < 3 && (e = ""), this.tween("style." + n, r)
	}, Cs.text = function (n) {
		return Ro(this, "text", n, Do)
	}, Cs.remove = function () {
		return this.each("end.transition", function () {
			var n;
			this.__transition__.count < 2 && (n = this.parentNode) && n.removeChild(this)
		})
	}, Cs.ease = function (n) {
		var t = this.id;
		return arguments.length < 1 ? this.node().__transition__[t].ease : ("function" != typeof n && (n = Zo.ease.apply(Zo, arguments)), P(this, function (e) {
			e.__transition__[t].ease = n
		}))
	}, Cs.delay = function (n) {
		var t = this.id;
		return arguments.length < 1 ? this.node().__transition__[t].delay : P(this, "function" == typeof n ? function (e, r, u) {
			e.__transition__[t].delay = +n.call(e, e.__data__, r, u)
		} : (n = +n, function (e) {
			e.__transition__[t].delay = n
		}))
	}, Cs.duration = function (n) {
		var t = this.id;
		return arguments.length < 1 ? this.node().__transition__[t].duration : P(this, "function" == typeof n ? function (e, r, u) {
			e.__transition__[t].duration = Math.max(1, n.call(e, e.__data__, r, u))
		} : (n = Math.max(1, n), function (e) {
			e.__transition__[t].duration = n
		}))
	}, Cs.each = function (n, t) {
		var e = this.id;
		if (arguments.length < 2) {
			var r = ks, u = Ss;
			Ss = e, P(this, function (t, r, u) {
				ks = t.__transition__[e], n.call(t, t.__data__, r, u)
			}), ks = r, Ss = u
		} else P(this, function (r) {
			var u = r.__transition__[e];
			(u.event || (u.event = Zo.dispatch("start", "end"))).on(n, t)
		});
		return this
	}, Cs.transition = function () {
		for (var n, t, e, r, u = this.id, i = ++Ns, o = [], a = 0, c = this.length; c > a; a++) {
			o.push(n = []);
			for (var t = this[a], s = 0, l = t.length; l > s; s++)(e = t[s]) && (r = Object.create(e.__transition__[u]), r.delay += r.duration, Po(e, s, i, r)), n.push(e)
		}
		return qo(o, i)
	}, Zo.svg.axis = function () {
		function n(n) {
			n.each(function () {
				var n, s = Zo.select(this), l = this.__chart__ || e, f = this.__chart__ = e.copy(), h = null == c ? f.ticks ? f.ticks.apply(f, a) : f.domain() : c, g = null == t ? f.tickFormat ? f.tickFormat.apply(f, a) : wt : t, p = s.selectAll(".tick").data(h, f), v = p.enter().insert("g", ".domain").attr("class", "tick").style("opacity", ka), d = Zo.transition(p.exit()).style("opacity", ka).remove(), m = Zo.transition(p.order()).style("opacity", 1), y = Ti(f), x = s.selectAll(".domain").data([0]), M = (x.enter().append("path").attr("class", "domain"), Zo.transition(x));
				v.append("line"), v.append("text");
				var _ = v.select("line"), b = m.select("line"), w = p.select("text").text(g), S = v.select("text"), k = m.select("text");
				switch (r) {
					case"bottom":
						n = Uo, _.attr("y2", u), S.attr("y", Math.max(u, 0) + o), b.attr("x2", 0).attr("y2", u), k.attr("x", 0).attr("y", Math.max(u, 0) + o), w.attr("dy", ".71em").style("text-anchor", "middle"), M.attr("d", "M" + y[0] + "," + i + "V0H" + y[1] + "V" + i);
						break;
					case"top":
						n = Uo, _.attr("y2", -u), S.attr("y", -(Math.max(u, 0) + o)), b.attr("x2", 0).attr("y2", -u), k.attr("x", 0).attr("y", -(Math.max(u, 0) + o)), w.attr("dy", "0em").style("text-anchor", "middle"), M.attr("d", "M" + y[0] + "," + -i + "V0H" + y[1] + "V" + -i);
						break;
					case"left":
						n = jo, _.attr("x2", -u), S.attr("x", -(Math.max(u, 0) + o)), b.attr("x2", -u).attr("y2", 0), k.attr("x", -(Math.max(u, 0) + o)).attr("y", 0), w.attr("dy", ".32em").style("text-anchor", "end"), M.attr("d", "M" + -i + "," + y[0] + "H0V" + y[1] + "H" + -i);
						break;
					case"right":
						n = jo, _.attr("x2", u), S.attr("x", Math.max(u, 0) + o), b.attr("x2", u).attr("y2", 0), k.attr("x", Math.max(u, 0) + o).attr("y", 0), w.attr("dy", ".32em").style("text-anchor", "start"), M.attr("d", "M" + i + "," + y[0] + "H0V" + y[1] + "H" + i)
				}
				if (f.rangeBand) {
					var E = f, A = E.rangeBand() / 2;
					l = f = function (n) {
						return E(n) + A
					}
				} else l.rangeBand ? l = f : d.call(n, f);
				v.call(n, l), m.call(n, f)
			})
		}

		var t, e = Zo.scale.linear(), r = zs, u = 6, i = 6, o = 3, a = [10], c = null;
		return n.scale = function (t) {
			return arguments.length ? (e = t, n) : e
		}, n.orient = function (t) {
			return arguments.length ? (r = t in Ls ? t + "" : zs, n) : r
		}, n.ticks = function () {
			return arguments.length ? (a = arguments, n) : a
		}, n.tickValues = function (t) {
			return arguments.length ? (c = t, n) : c
		}, n.tickFormat = function (e) {
			return arguments.length ? (t = e, n) : t
		}, n.tickSize = function (t) {
			var e = arguments.length;
			return e ? (u = +t, i = +arguments[e - 1], n) : u
		}, n.innerTickSize = function (t) {
			return arguments.length ? (u = +t, n) : u
		}, n.outerTickSize = function (t) {
			return arguments.length ? (i = +t, n) : i
		}, n.tickPadding = function (t) {
			return arguments.length ? (o = +t, n) : o
		}, n.tickSubdivide = function () {
			return arguments.length && n
		}, n
	};
	var zs = "bottom", Ls = {top: 1, right: 1, bottom: 1, left: 1};
	Zo.svg.brush = function () {
		function n(i) {
			i.each(function () {
				var i = Zo.select(this).style("pointer-events", "all").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)").on("mousedown.brush", u).on("touchstart.brush", u), o = i.selectAll(".background").data([0]);
				o.enter().append("rect").attr("class", "background").style("visibility", "hidden").style("cursor", "crosshair"), i.selectAll(".extent").data([0]).enter().append("rect").attr("class", "extent").style("cursor", "move");
				var a = i.selectAll(".resize").data(p, wt);
				a.exit().remove(), a.enter().append("g").attr("class",function (n) {
					return"resize " + n
				}).style("cursor",function (n) {
					return Ts[n]
				}).append("rect").attr("x",function (n) {
					return/[ew]$/.test(n) ? -3 : null
				}).attr("y",function (n) {
					return/^[ns]/.test(n) ? -3 : null
				}).attr("width", 6).attr("height", 6).style("visibility", "hidden"), a.style("display", n.empty() ? "none" : null);
				var l, f = Zo.transition(i), h = Zo.transition(o);
				c && (l = Ti(c), h.attr("x", l[0]).attr("width", l[1] - l[0]), e(f)), s && (l = Ti(s), h.attr("y", l[0]).attr("height", l[1] - l[0]), r(f)), t(f)
			})
		}

		function t(n) {
			n.selectAll(".resize").attr("transform", function (n) {
				return"translate(" + l[+/e$/.test(n)] + "," + f[+/^s/.test(n)] + ")"
			})
		}

		function e(n) {
			n.select(".extent").attr("x", l[0]), n.selectAll(".extent,.n>rect,.s>rect").attr("width", l[1] - l[0])
		}

		function r(n) {
			n.select(".extent").attr("y", f[0]), n.selectAll(".extent,.e>rect,.w>rect").attr("height", f[1] - f[0])
		}

		function u() {
			function u() {
				32 == Zo.event.keyCode && (C || (x = null, z[0] -= l[1], z[1] -= f[1], C = 2), y())
			}

			function p() {
				32 == Zo.event.keyCode && 2 == C && (z[0] += l[1], z[1] += f[1], C = 0, y())
			}

			function v() {
				var n = Zo.mouse(_), u = !1;
				M && (n[0] += M[0], n[1] += M[1]), C || (Zo.event.altKey ? (x || (x = [(l[0] + l[1]) / 2, (f[0] + f[1]) / 2]), z[0] = l[+(n[0] < x[0])], z[1] = f[+(n[1] < x[1])]) : x = null), E && d(n, c, 0) && (e(S), u = !0), A && d(n, s, 1) && (r(S), u = !0), u && (t(S), w({type: "brush", mode: C ? "move" : "resize"}))
			}

			function d(n, t, e) {
				var r, u, a = Ti(t), c = a[0], s = a[1], p = z[e], v = e ? f : l, d = v[1] - v[0];
				return C && (c -= p, s -= d + p), r = (e ? g : h) ? Math.max(c, Math.min(s, n[e])) : n[e], C ? u = (r += p) + d : (x && (p = Math.max(c, Math.min(s, 2 * x[e] - r))), r > p ? (u = r, r = p) : u = p), v[0] != r || v[1] != u ? (e ? o = null : i = null, v[0] = r, v[1] = u, !0) : void 0
			}

			function m() {
				v(), S.style("pointer-events", "all").selectAll(".resize").style("display", n.empty() ? "none" : null), Zo.select("body").style("cursor", null), L.on("mousemove.brush", null).on("mouseup.brush", null).on("touchmove.brush", null).on("touchend.brush", null).on("keydown.brush", null).on("keyup.brush", null), N(), w({type: "brushend"})
			}

			var x, M, _ = this, b = Zo.select(Zo.event.target), w = a.of(_, arguments), S = Zo.select(_), k = b.datum(), E = !/^(n|s)$/.test(k) && c, A = !/^(e|w)$/.test(k) && s, C = b.classed("extent"), N = I(), z = Zo.mouse(_), L = Zo.select(Wo).on("keydown.brush", u).on("keyup.brush", p);
			if (Zo.event.changedTouches ? L.on("touchmove.brush", v).on("touchend.brush", m) : L.on("mousemove.brush", v).on("mouseup.brush", m), S.interrupt().selectAll("*").interrupt(), C)z[0] = l[0] - z[0], z[1] = f[0] - z[1]; else if (k) {
				var T = +/w$/.test(k), q = +/^n/.test(k);
				M = [l[1 - T] - z[0], f[1 - q] - z[1]], z[0] = l[T], z[1] = f[q]
			} else Zo.event.altKey && (x = z.slice());
			S.style("pointer-events", "none").selectAll(".resize").style("display", null), Zo.select("body").style("cursor", b.style("cursor")), w({type: "brushstart"}), v()
		}

		var i, o, a = M(n, "brushstart", "brush", "brushend"), c = null, s = null, l = [0, 0], f = [0, 0], h = !0, g = !0, p = qs[0];
		return n.event = function (n) {
			n.each(function () {
				var n = a.of(this, arguments), t = {x: l, y: f, i: i, j: o}, e = this.__chart__ || t;
				this.__chart__ = t, Ss ? Zo.select(this).transition().each("start.brush",function () {
					i = e.i, o = e.j, l = e.x, f = e.y, n({type: "brushstart"})
				}).tween("brush:brush",function () {
					var e = gu(l, t.x), r = gu(f, t.y);
					return i = o = null, function (u) {
						l = t.x = e(u), f = t.y = r(u), n({type: "brush", mode: "resize"})
					}
				}).each("end.brush", function () {
					i = t.i, o = t.j, n({type: "brush", mode: "resize"}), n({type: "brushend"})
				}) : (n({type: "brushstart"}), n({type: "brush", mode: "resize"}), n({type: "brushend"}))
			})
		}, n.x = function (t) {
			return arguments.length ? (c = t, p = qs[!c << 1 | !s], n) : c
		}, n.y = function (t) {
			return arguments.length ? (s = t, p = qs[!c << 1 | !s], n) : s
		}, n.clamp = function (t) {
			return arguments.length ? (c && s ? (h = !!t[0], g = !!t[1]) : c ? h = !!t : s && (g = !!t), n) : c && s ? [h, g] : c ? h : s ? g : null
		}, n.extent = function (t) {
			var e, r, u, a, h;
			return arguments.length ? (c && (e = t[0], r = t[1], s && (e = e[0], r = r[0]), i = [e, r], c.invert && (e = c(e), r = c(r)), e > r && (h = e, e = r, r = h), (e != l[0] || r != l[1]) && (l = [e, r])), s && (u = t[0], a = t[1], c && (u = u[1], a = a[1]), o = [u, a], s.invert && (u = s(u), a = s(a)), u > a && (h = u, u = a, a = h), (u != f[0] || a != f[1]) && (f = [u, a])), n) : (c && (i ? (e = i[0], r = i[1]) : (e = l[0], r = l[1], c.invert && (e = c.invert(e), r = c.invert(r)), e > r && (h = e, e = r, r = h))), s && (o ? (u = o[0], a = o[1]) : (u = f[0], a = f[1], s.invert && (u = s.invert(u), a = s.invert(a)), u > a && (h = u, u = a, a = h))), c && s ? [
				[e, u],
				[r, a]
			] : c ? [e, r] : s && [u, a])
		}, n.clear = function () {
			return n.empty() || (l = [0, 0], f = [0, 0], i = o = null), n
		}, n.empty = function () {
			return!!c && l[0] == l[1] || !!s && f[0] == f[1]
		}, Zo.rebind(n, a, "on")
	};
	var Ts = {n: "ns-resize", e: "ew-resize", s: "ns-resize", w: "ew-resize", nw: "nwse-resize", ne: "nesw-resize", se: "nwse-resize", sw: "nesw-resize"}, qs = [
		["n", "e", "s", "w", "nw", "ne", "se", "sw"],
		["e", "w"],
		["n", "s"],
		[]
	], Rs = Qa.format = ic.timeFormat, Ds = Rs.utc, Ps = Ds("%Y-%m-%dT%H:%M:%S.%LZ");
	Rs.iso = Date.prototype.toISOString && +new Date("2000-01-01T00:00:00.000Z") ? Ho : Ps, Ho.parse = function (n) {
		var t = new Date(n);
		return isNaN(t) ? null : t
	}, Ho.toString = Ps.toString, Qa.second = Dt(function (n) {
		return new nc(1e3 * Math.floor(n / 1e3))
	}, function (n, t) {
		n.setTime(n.getTime() + 1e3 * Math.floor(t))
	}, function (n) {
		return n.getSeconds()
	}), Qa.seconds = Qa.second.range, Qa.seconds.utc = Qa.second.utc.range, Qa.minute = Dt(function (n) {
		return new nc(6e4 * Math.floor(n / 6e4))
	}, function (n, t) {
		n.setTime(n.getTime() + 6e4 * Math.floor(t))
	}, function (n) {
		return n.getMinutes()
	}), Qa.minutes = Qa.minute.range, Qa.minutes.utc = Qa.minute.utc.range, Qa.hour = Dt(function (n) {
		var t = n.getTimezoneOffset() / 60;
		return new nc(36e5 * (Math.floor(n / 36e5 - t) + t))
	}, function (n, t) {
		n.setTime(n.getTime() + 36e5 * Math.floor(t))
	}, function (n) {
		return n.getHours()
	}), Qa.hours = Qa.hour.range, Qa.hours.utc = Qa.hour.utc.range, Qa.month = Dt(function (n) {
		return n = Qa.day(n), n.setDate(1), n
	}, function (n, t) {
		n.setMonth(n.getMonth() + t)
	}, function (n) {
		return n.getMonth()
	}), Qa.months = Qa.month.range, Qa.months.utc = Qa.month.utc.range;
	var Us = [1e3, 5e3, 15e3, 3e4, 6e4, 3e5, 9e5, 18e5, 36e5, 108e5, 216e5, 432e5, 864e5, 1728e5, 6048e5, 2592e6, 7776e6, 31536e6], js = [
		[Qa.second, 1],
		[Qa.second, 5],
		[Qa.second, 15],
		[Qa.second, 30],
		[Qa.minute, 1],
		[Qa.minute, 5],
		[Qa.minute, 15],
		[Qa.minute, 30],
		[Qa.hour, 1],
		[Qa.hour, 3],
		[Qa.hour, 6],
		[Qa.hour, 12],
		[Qa.day, 1],
		[Qa.day, 2],
		[Qa.week, 1],
		[Qa.month, 1],
		[Qa.month, 3],
		[Qa.year, 1]
	], Hs = Rs.multi([
		[".%L", function (n) {
			return n.getMilliseconds()
		}],
		[":%S", function (n) {
			return n.getSeconds()
		}],
		["%I:%M", function (n) {
			return n.getMinutes()
		}],
		["%I %p", function (n) {
			return n.getHours()
		}],
		["%a %d", function (n) {
			return n.getDay() && 1 != n.getDate()
		}],
		["%b %d", function (n) {
			return 1 != n.getDate()
		}],
		["%B", function (n) {
			return n.getMonth()
		}],
		["%Y", we]
	]), Fs = {range: function (n, t, e) {
		return Zo.range(Math.ceil(n / e) * e, +t, e).map(Oo)
	}, floor: wt, ceil: wt};
	js.year = Qa.year, Qa.scale = function () {
		return Fo(Zo.scale.linear(), js, Hs)
	};
	var Os = js.map(function (n) {
		return[n[0].utc, n[1]]
	}), Ys = Ds.multi([
		[".%L", function (n) {
			return n.getUTCMilliseconds()
		}],
		[":%S", function (n) {
			return n.getUTCSeconds()
		}],
		["%I:%M", function (n) {
			return n.getUTCMinutes()
		}],
		["%I %p", function (n) {
			return n.getUTCHours()
		}],
		["%a %d", function (n) {
			return n.getUTCDay() && 1 != n.getUTCDate()
		}],
		["%b %d", function (n) {
			return 1 != n.getUTCDate()
		}],
		["%B", function (n) {
			return n.getUTCMonth()
		}],
		["%Y", we]
	]);
	Os.year = Qa.year.utc, Qa.scale.utc = function () {
		return Fo(Zo.scale.linear(), Os, Ys)
	}, Zo.text = St(function (n) {
		return n.responseText
	}), Zo.json = function (n, t) {
		return kt(n, "application/json", Yo, t)
	}, Zo.html = function (n, t) {
		return kt(n, "text/html", Io, t)
	}, Zo.xml = St(function (n) {
		return n.responseXML
	}), "function" == typeof define && define.amd ? define(Zo) : "object" == typeof module && module.exports && (module.exports = Zo), this.d3 = Zo
}();
/**
 * @license
 * Lo-Dash 2.4.1 (Custom Build) lodash.com/license | Underscore.js 1.5.2 underscorejs.org/LICENSE
 * Build: `lodash modern -o ./dist/lodash.js`
 */
;
(function () {
	function n(n, t, e) {
		e = (e || 0) - 1;
		for (var r = n ? n.length : 0; ++e < r;)if (n[e] === t)return e;
		return-1
	}

	function t(t, e) {
		var r = typeof e;
		if (t = t.l, "boolean" == r || null == e)return t[e] ? 0 : -1;
		"number" != r && "string" != r && (r = "object");
		var u = "number" == r ? e : m + e;
		return t = (t = t[r]) && t[u], "object" == r ? t && -1 < n(t, e) ? 0 : -1 : t ? 0 : -1
	}

	function e(n) {
		var t = this.l, e = typeof n;
		if ("boolean" == e || null == n)t[n] = true; else {
			"number" != e && "string" != e && (e = "object");
			var r = "number" == e ? n : m + n, t = t[e] || (t[e] = {});
			"object" == e ? (t[r] || (t[r] = [])).push(n) : t[r] = true
		}
	}

	function r(n) {
		return n.charCodeAt(0)
	}

	function u(n, t) {
		for (var e = n.m, r = t.m, u = -1, o = e.length; ++u < o;) {
			var i = e[u], a = r[u];
			if (i !== a) {
				if (i > a || typeof i == "undefined")return 1;
				if (i < a || typeof a == "undefined")return-1
			}
		}
		return n.n - t.n
	}

	function o(n) {
		var t = -1, r = n.length, u = n[0], o = n[r / 2 | 0], i = n[r - 1];
		if (u && typeof u == "object" && o && typeof o == "object" && i && typeof i == "object")return false;
		for (u = f(), u["false"] = u["null"] = u["true"] = u.undefined = false, o = f(), o.k = n, o.l = u, o.push = e; ++t < r;)o.push(n[t]);
		return o
	}

	function i(n) {
		return"\\" + U[n]
	}

	function a() {
		return h.pop() || []
	}

	function f() {
		return g.pop() || {k: null, l: null, m: null, "false": false, n: 0, "null": false, number: null, object: null, push: null, string: null, "true": false, undefined: false, o: null}
	}

	function l(n) {
		n.length = 0, h.length < _ && h.push(n)
	}

	function c(n) {
		var t = n.l;
		t && c(t), n.k = n.l = n.m = n.object = n.number = n.string = n.o = null, g.length < _ && g.push(n)
	}

	function p(n, t, e) {
		t || (t = 0), typeof e == "undefined" && (e = n ? n.length : 0);
		var r = -1;
		e = e - t || 0;
		for (var u = Array(0 > e ? 0 : e); ++r < e;)u[r] = n[t + r];
		return u
	}

	function s(e) {
		function h(n, t, e) {
			if (!n || !V[typeof n])return n;
			t = t && typeof e == "undefined" ? t : tt(t, e, 3);
			for (var r = -1, u = V[typeof n] && Fe(n), o = u ? u.length : 0; ++r < o && (e = u[r], false !== t(n[e], e, n)););
			return n
		}

		function g(n, t, e) {
			var r;
			if (!n || !V[typeof n])return n;
			t = t && typeof e == "undefined" ? t : tt(t, e, 3);
			for (r in n)if (false === t(n[r], r, n))break;
			return n
		}

		function _(n, t, e) {
			var r, u = n, o = u;
			if (!u)return o;
			for (var i = arguments, a = 0, f = typeof e == "number" ? 2 : i.length; ++a < f;)if ((u = i[a]) && V[typeof u])for (var l = -1, c = V[typeof u] && Fe(u), p = c ? c.length : 0; ++l < p;)r = c[l], "undefined" == typeof o[r] && (o[r] = u[r]);
			return o
		}

		function U(n, t, e) {
			var r, u = n, o = u;
			if (!u)return o;
			var i = arguments, a = 0, f = typeof e == "number" ? 2 : i.length;
			if (3 < f && "function" == typeof i[f - 2])var l = tt(i[--f - 1], i[f--], 2); else 2 < f && "function" == typeof i[f - 1] && (l = i[--f]);
			for (; ++a < f;)if ((u = i[a]) && V[typeof u])for (var c = -1, p = V[typeof u] && Fe(u), s = p ? p.length : 0; ++c < s;)r = p[c], o[r] = l ? l(o[r], u[r]) : u[r];
			return o
		}

		function H(n) {
			var t, e = [];
			if (!n || !V[typeof n])return e;
			for (t in n)me.call(n, t) && e.push(t);
			return e
		}

		function J(n) {
			return n && typeof n == "object" && !Te(n) && me.call(n, "__wrapped__") ? n : new Q(n)
		}

		function Q(n, t) {
			this.__chain__ = !!t, this.__wrapped__ = n
		}

		function X(n) {
			function t() {
				if (r) {
					var n = p(r);
					be.apply(n, arguments)
				}
				if (this instanceof t) {
					var o = nt(e.prototype), n = e.apply(o, n || arguments);
					return wt(n) ? n : o
				}
				return e.apply(u, n || arguments)
			}

			var e = n[0], r = n[2], u = n[4];
			return $e(t, n), t
		}

		function Z(n, t, e, r, u) {
			if (e) {
				var o = e(n);
				if (typeof o != "undefined")return o
			}
			if (!wt(n))return n;
			var i = ce.call(n);
			if (!K[i])return n;
			var f = Ae[i];
			switch (i) {
				case T:
				case F:
					return new f(+n);
				case W:
				case P:
					return new f(n);
				case z:
					return o = f(n.source, C.exec(n)), o.lastIndex = n.lastIndex, o
			}
			if (i = Te(n), t) {
				var c = !r;
				r || (r = a()), u || (u = a());
				for (var s = r.length; s--;)if (r[s] == n)return u[s];
				o = i ? f(n.length) : {}
			} else o = i ? p(n) : U({}, n);
			return i && (me.call(n, "index") && (o.index = n.index), me.call(n, "input") && (o.input = n.input)), t ? (r.push(n), u.push(o), (i ? St : h)(n, function (n, i) {
				o[i] = Z(n, t, e, r, u)
			}), c && (l(r), l(u)), o) : o
		}

		function nt(n) {
			return wt(n) ? ke(n) : {}
		}

		function tt(n, t, e) {
			if (typeof n != "function")return Ut;
			if (typeof t == "undefined" || !("prototype"in n))return n;
			var r = n.__bindData__;
			if (typeof r == "undefined" && (De.funcNames && (r = !n.name), r = r || !De.funcDecomp, !r)) {
				var u = ge.call(n);
				De.funcNames || (r = !O.test(u)), r || (r = E.test(u), $e(n, r))
			}
			if (false === r || true !== r && 1 & r[1])return n;
			switch (e) {
				case 1:
					return function (e) {
						return n.call(t, e)
					};
				case 2:
					return function (e, r) {
						return n.call(t, e, r)
					};
				case 3:
					return function (e, r, u) {
						return n.call(t, e, r, u)
					};
				case 4:
					return function (e, r, u, o) {
						return n.call(t, e, r, u, o)
					}
			}
			return Mt(n, t)
		}

		function et(n) {
			function t() {
				var n = f ? i : this;
				if (u) {
					var h = p(u);
					be.apply(h, arguments)
				}
				return(o || c) && (h || (h = p(arguments)), o && be.apply(h, o), c && h.length < a) ? (r |= 16, et([e, s ? r : -4 & r, h, null, i, a])) : (h || (h = arguments), l && (e = n[v]), this instanceof t ? (n = nt(e.prototype), h = e.apply(n, h), wt(h) ? h : n) : e.apply(n, h))
			}

			var e = n[0], r = n[1], u = n[2], o = n[3], i = n[4], a = n[5], f = 1 & r, l = 2 & r, c = 4 & r, s = 8 & r, v = e;
			return $e(t, n), t
		}

		function rt(e, r) {
			var u = -1, i = st(), a = e ? e.length : 0, f = a >= b && i === n, l = [];
			if (f) {
				var p = o(r);
				p ? (i = t, r = p) : f = false
			}
			for (; ++u < a;)p = e[u], 0 > i(r, p) && l.push(p);
			return f && c(r), l
		}

		function ut(n, t, e, r) {
			r = (r || 0) - 1;
			for (var u = n ? n.length : 0, o = []; ++r < u;) {
				var i = n[r];
				if (i && typeof i == "object" && typeof i.length == "number" && (Te(i) || yt(i))) {
					t || (i = ut(i, t, e));
					var a = -1, f = i.length, l = o.length;
					for (o.length += f; ++a < f;)o[l++] = i[a]
				} else e || o.push(i)
			}
			return o
		}

		function ot(n, t, e, r, u, o) {
			if (e) {
				var i = e(n, t);
				if (typeof i != "undefined")return!!i
			}
			if (n === t)return 0 !== n || 1 / n == 1 / t;
			if (n === n && !(n && V[typeof n] || t && V[typeof t]))return false;
			if (null == n || null == t)return n === t;
			var f = ce.call(n), c = ce.call(t);
			if (f == D && (f = q), c == D && (c = q), f != c)return false;
			switch (f) {
				case T:
				case F:
					return+n == +t;
				case W:
					return n != +n ? t != +t : 0 == n ? 1 / n == 1 / t : n == +t;
				case z:
				case P:
					return n == oe(t)
			}
			if (c = f == $, !c) {
				var p = me.call(n, "__wrapped__"), s = me.call(t, "__wrapped__");
				if (p || s)return ot(p ? n.__wrapped__ : n, s ? t.__wrapped__ : t, e, r, u, o);
				if (f != q)return false;
				if (f = n.constructor, p = t.constructor, f != p && !(dt(f) && f instanceof f && dt(p) && p instanceof p) && "constructor"in n && "constructor"in t)return false
			}
			for (f = !u, u || (u = a()), o || (o = a()), p = u.length; p--;)if (u[p] == n)return o[p] == t;
			var v = 0, i = true;
			if (u.push(n), o.push(t), c) {
				if (p = n.length, v = t.length, (i = v == p) || r)for (; v--;)if (c = p, s = t[v], r)for (; c-- && !(i = ot(n[c], s, e, r, u, o));); else if (!(i = ot(n[v], s, e, r, u, o)))break
			} else g(t, function (t, a, f) {
				return me.call(f, a) ? (v++, i = me.call(n, a) && ot(n[a], t, e, r, u, o)) : void 0
			}), i && !r && g(n, function (n, t, e) {
				return me.call(e, t) ? i = -1 < --v : void 0
			});
			return u.pop(), o.pop(), f && (l(u), l(o)), i
		}

		function it(n, t, e, r, u) {
			(Te(t) ? St : h)(t, function (t, o) {
				var i, a, f = t, l = n[o];
				if (t && ((a = Te(t)) || Pe(t))) {
					for (f = r.length; f--;)if (i = r[f] == t) {
						l = u[f];
						break
					}
					if (!i) {
						var c;
						e && (f = e(l, t), c = typeof f != "undefined") && (l = f), c || (l = a ? Te(l) ? l : [] : Pe(l) ? l : {}), r.push(t), u.push(l), c || it(l, t, e, r, u)
					}
				} else e && (f = e(l, t), typeof f == "undefined" && (f = t)), typeof f != "undefined" && (l = f);
				n[o] = l
			})
		}

		function at(n, t) {
			return n + he(Re() * (t - n + 1))
		}

		function ft(e, r, u) {
			var i = -1, f = st(), p = e ? e.length : 0, s = [], v = !r && p >= b && f === n, h = u || v ? a() : s;
			for (v && (h = o(h), f = t); ++i < p;) {
				var g = e[i], y = u ? u(g, i, e) : g;
				(r ? !i || h[h.length - 1] !== y : 0 > f(h, y)) && ((u || v) && h.push(y), s.push(g))
			}
			return v ? (l(h.k), c(h)) : u && l(h), s
		}

		function lt(n) {
			return function (t, e, r) {
				var u = {};
				e = J.createCallback(e, r, 3), r = -1;
				var o = t ? t.length : 0;
				if (typeof o == "number")for (; ++r < o;) {
					var i = t[r];
					n(u, i, e(i, r, t), t)
				} else h(t, function (t, r, o) {
					n(u, t, e(t, r, o), o)
				});
				return u
			}
		}

		function ct(n, t, e, r, u, o) {
			var i = 1 & t, a = 4 & t, f = 16 & t, l = 32 & t;
			if (!(2 & t || dt(n)))throw new ie;
			f && !e.length && (t &= -17, f = e = false), l && !r.length && (t &= -33, l = r = false);
			var c = n && n.__bindData__;
			return c && true !== c ? (c = p(c), c[2] && (c[2] = p(c[2])), c[3] && (c[3] = p(c[3])), !i || 1 & c[1] || (c[4] = u), !i && 1 & c[1] && (t |= 8), !a || 4 & c[1] || (c[5] = o), f && be.apply(c[2] || (c[2] = []), e), l && we.apply(c[3] || (c[3] = []), r), c[1] |= t, ct.apply(null, c)) : (1 == t || 17 === t ? X : et)([n, t, e, r, u, o])
		}

		function pt(n) {
			return Be[n]
		}

		function st() {
			var t = (t = J.indexOf) === Wt ? n : t;
			return t
		}

		function vt(n) {
			return typeof n == "function" && pe.test(n)
		}

		function ht(n) {
			var t, e;
			return n && ce.call(n) == q && (t = n.constructor, !dt(t) || t instanceof t) ? (g(n, function (n, t) {
				e = t
			}), typeof e == "undefined" || me.call(n, e)) : false
		}

		function gt(n) {
			return We[n]
		}

		function yt(n) {
			return n && typeof n == "object" && typeof n.length == "number" && ce.call(n) == D || false
		}

		function mt(n, t, e) {
			var r = Fe(n), u = r.length;
			for (t = tt(t, e, 3); u-- && (e = r[u], false !== t(n[e], e, n)););
			return n
		}

		function bt(n) {
			var t = [];
			return g(n, function (n, e) {
				dt(n) && t.push(e)
			}), t.sort()
		}

		function _t(n) {
			for (var t = -1, e = Fe(n), r = e.length, u = {}; ++t < r;) {
				var o = e[t];
				u[n[o]] = o
			}
			return u
		}

		function dt(n) {
			return typeof n == "function"
		}

		function wt(n) {
			return!(!n || !V[typeof n])
		}

		function jt(n) {
			return typeof n == "number" || n && typeof n == "object" && ce.call(n) == W || false
		}

		function kt(n) {
			return typeof n == "string" || n && typeof n == "object" && ce.call(n) == P || false
		}

		function xt(n) {
			for (var t = -1, e = Fe(n), r = e.length, u = Xt(r); ++t < r;)u[t] = n[e[t]];
			return u
		}

		function Ct(n, t, e) {
			var r = -1, u = st(), o = n ? n.length : 0, i = false;
			return e = (0 > e ? Ie(0, o + e) : e) || 0, Te(n) ? i = -1 < u(n, t, e) : typeof o == "number" ? i = -1 < (kt(n) ? n.indexOf(t, e) : u(n, t, e)) : h(n, function (n) {
				return++r < e ? void 0 : !(i = n === t)
			}), i
		}

		function Ot(n, t, e) {
			var r = true;
			t = J.createCallback(t, e, 3), e = -1;
			var u = n ? n.length : 0;
			if (typeof u == "number")for (; ++e < u && (r = !!t(n[e], e, n));); else h(n, function (n, e, u) {
				return r = !!t(n, e, u)
			});
			return r
		}

		function Nt(n, t, e) {
			var r = [];
			t = J.createCallback(t, e, 3), e = -1;
			var u = n ? n.length : 0;
			if (typeof u == "number")for (; ++e < u;) {
				var o = n[e];
				t(o, e, n) && r.push(o)
			} else h(n, function (n, e, u) {
				t(n, e, u) && r.push(n)
			});
			return r
		}

		function It(n, t, e) {
			t = J.createCallback(t, e, 3), e = -1;
			var r = n ? n.length : 0;
			if (typeof r != "number") {
				var u;
				return h(n, function (n, e, r) {
					return t(n, e, r) ? (u = n, false) : void 0
				}), u
			}
			for (; ++e < r;) {
				var o = n[e];
				if (t(o, e, n))return o
			}
		}

		function St(n, t, e) {
			var r = -1, u = n ? n.length : 0;
			if (t = t && typeof e == "undefined" ? t : tt(t, e, 3), typeof u == "number")for (; ++r < u && false !== t(n[r], r, n);); else h(n, t);
			return n
		}

		function Et(n, t, e) {
			var r = n ? n.length : 0;
			if (t = t && typeof e == "undefined" ? t : tt(t, e, 3), typeof r == "number")for (; r-- && false !== t(n[r], r, n);); else {
				var u = Fe(n), r = u.length;
				h(n, function (n, e, o) {
					return e = u ? u[--r] : --r, t(o[e], e, o)
				})
			}
			return n
		}

		function Rt(n, t, e) {
			var r = -1, u = n ? n.length : 0;
			if (t = J.createCallback(t, e, 3), typeof u == "number")for (var o = Xt(u); ++r < u;)o[r] = t(n[r], r, n);
			else o = [], h(n, function (n, e, u) {
				o[++r] = t(n, e, u)
			});
			return o
		}

		function At(n, t, e) {
			var u = -1 / 0, o = u;
			if (typeof t != "function" && e && e[t] === n && (t = null), null == t && Te(n)) {
				e = -1;
				for (var i = n.length; ++e < i;) {
					var a = n[e];
					a > o && (o = a)
				}
			} else t = null == t && kt(n) ? r : J.createCallback(t, e, 3), St(n, function (n, e, r) {
				e = t(n, e, r), e > u && (u = e, o = n)
			});
			return o
		}

		function Dt(n, t, e, r) {
			if (!n)return e;
			var u = 3 > arguments.length;
			t = J.createCallback(t, r, 4);
			var o = -1, i = n.length;
			if (typeof i == "number")for (u && (e = n[++o]); ++o < i;)e = t(e, n[o], o, n); else h(n, function (n, r, o) {
				e = u ? (u = false, n) : t(e, n, r, o)
			});
			return e
		}

		function $t(n, t, e, r) {
			var u = 3 > arguments.length;
			return t = J.createCallback(t, r, 4), Et(n, function (n, r, o) {
				e = u ? (u = false, n) : t(e, n, r, o)
			}), e
		}

		function Tt(n) {
			var t = -1, e = n ? n.length : 0, r = Xt(typeof e == "number" ? e : 0);
			return St(n, function (n) {
				var e = at(0, ++t);
				r[t] = r[e], r[e] = n
			}), r
		}

		function Ft(n, t, e) {
			var r;
			t = J.createCallback(t, e, 3), e = -1;
			var u = n ? n.length : 0;
			if (typeof u == "number")for (; ++e < u && !(r = t(n[e], e, n));); else h(n, function (n, e, u) {
				return!(r = t(n, e, u))
			});
			return!!r
		}

		function Bt(n, t, e) {
			var r = 0, u = n ? n.length : 0;
			if (typeof t != "number" && null != t) {
				var o = -1;
				for (t = J.createCallback(t, e, 3); ++o < u && t(n[o], o, n);)r++
			} else if (r = t, null == r || e)return n ? n[0] : v;
			return p(n, 0, Se(Ie(0, r), u))
		}

		function Wt(t, e, r) {
			if (typeof r == "number") {
				var u = t ? t.length : 0;
				r = 0 > r ? Ie(0, u + r) : r || 0
			} else if (r)return r = zt(t, e), t[r] === e ? r : -1;
			return n(t, e, r)
		}

		function qt(n, t, e) {
			if (typeof t != "number" && null != t) {
				var r = 0, u = -1, o = n ? n.length : 0;
				for (t = J.createCallback(t, e, 3); ++u < o && t(n[u], u, n);)r++
			} else r = null == t || e ? 1 : Ie(0, t);
			return p(n, r)
		}

		function zt(n, t, e, r) {
			var u = 0, o = n ? n.length : u;
			for (e = e ? J.createCallback(e, r, 1) : Ut, t = e(t); u < o;)r = u + o >>> 1, e(n[r]) < t ? u = r + 1 : o = r;
			return u
		}

		function Pt(n, t, e, r) {
			return typeof t != "boolean" && null != t && (r = e, e = typeof t != "function" && r && r[t] === n ? null : t, t = false), null != e && (e = J.createCallback(e, r, 3)), ft(n, t, e)
		}

		function Kt() {
			for (var n = 1 < arguments.length ? arguments : arguments[0], t = -1, e = n ? At(Ve(n, "length")) : 0, r = Xt(0 > e ? 0 : e); ++t < e;)r[t] = Ve(n, t);
			return r
		}

		function Lt(n, t) {
			var e = -1, r = n ? n.length : 0, u = {};
			for (t || !r || Te(n[0]) || (t = []); ++e < r;) {
				var o = n[e];
				t ? u[o] = t[e] : o && (u[o[0]] = o[1])
			}
			return u
		}

		function Mt(n, t) {
			return 2 < arguments.length ? ct(n, 17, p(arguments, 2), null, t) : ct(n, 1, null, null, t)
		}

		function Vt(n, t, e) {
			function r() {
				c && ve(c), i = c = p = v, (g || h !== t) && (s = Ue(), a = n.apply(l, o), c || i || (o = l = null))
			}

			function u() {
				var e = t - (Ue() - f);
				0 < e ? c = _e(u, e) : (i && ve(i), e = p, i = c = p = v, e && (s = Ue(), a = n.apply(l, o), c || i || (o = l = null)))
			}

			var o, i, a, f, l, c, p, s = 0, h = false, g = true;
			if (!dt(n))throw new ie;
			if (t = Ie(0, t) || 0, true === e)var y = true, g = false; else wt(e) && (y = e.leading, h = "maxWait"in e && (Ie(t, e.maxWait) || 0), g = "trailing"in e ? e.trailing : g);
			return function () {
				if (o = arguments, f = Ue(), l = this, p = g && (c || !y), false === h)var e = y && !c; else {
					i || y || (s = f);
					var v = h - (f - s), m = 0 >= v;
					m ? (i && (i = ve(i)), s = f, a = n.apply(l, o)) : i || (i = _e(r, v))
				}
				return m && c ? c = ve(c) : c || t === h || (c = _e(u, t)), e && (m = true, a = n.apply(l, o)), !m || c || i || (o = l = null), a
			}
		}

		function Ut(n) {
			return n
		}

		function Gt(n, t, e) {
			var r = true, u = t && bt(t);
			t && (e || u.length) || (null == e && (e = t), o = Q, t = n, n = J, u = bt(t)), false === e ? r = false : wt(e) && "chain"in e && (r = e.chain);
			var o = n, i = dt(o);
			St(u, function (e) {
				var u = n[e] = t[e];
				i && (o.prototype[e] = function () {
					var t = this.__chain__, e = this.__wrapped__, i = [e];
					if (be.apply(i, arguments), i = u.apply(n, i), r || t) {
						if (e === i && wt(i))return this;
						i = new o(i), i.__chain__ = t
					}
					return i
				})
			})
		}

		function Ht() {
		}

		function Jt(n) {
			return function (t) {
				return t[n]
			}
		}

		function Qt() {
			return this.__wrapped__
		}

		e = e ? Y.defaults(G.Object(), e, Y.pick(G, A)) : G;
		var Xt = e.Array, Yt = e.Boolean, Zt = e.Date, ne = e.Function, te = e.Math, ee = e.Number, re = e.Object, ue = e.RegExp, oe = e.String, ie = e.TypeError, ae = [], fe = re.prototype, le = e._, ce = fe.toString, pe = ue("^" + oe(ce).replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/toString| for [^\]]+/g, ".*?") + "$"), se = te.ceil, ve = e.clearTimeout, he = te.floor, ge = ne.prototype.toString, ye = vt(ye = re.getPrototypeOf) && ye, me = fe.hasOwnProperty, be = ae.push, _e = e.setTimeout, de = ae.splice, we = ae.unshift, je = function () {
			try {
				var n = {}, t = vt(t = re.defineProperty) && t, e = t(n, n, n) && t
			} catch (r) {
			}
			return e
		}(), ke = vt(ke = re.create) && ke, xe = vt(xe = Xt.isArray) && xe, Ce = e.isFinite, Oe = e.isNaN, Ne = vt(Ne = re.keys) && Ne, Ie = te.max, Se = te.min, Ee = e.parseInt, Re = te.random, Ae = {};
		Ae[$] = Xt, Ae[T] = Yt, Ae[F] = Zt, Ae[B] = ne, Ae[q] = re, Ae[W] = ee, Ae[z] = ue, Ae[P] = oe, Q.prototype = J.prototype;
		var De = J.support = {};
		De.funcDecomp = !vt(e.a) && E.test(s), De.funcNames = typeof ne.name == "string", J.templateSettings = {escape: /<%-([\s\S]+?)%>/g, evaluate: /<%([\s\S]+?)%>/g, interpolate: N, variable: "", imports: {_: J}}, ke || (nt = function () {
			function n() {
			}

			return function (t) {
				if (wt(t)) {
					n.prototype = t;
					var r = new n;
					n.prototype = null
				}
				return r || e.Object()
			}
		}());
		var $e = je ? function (n, t) {
			M.value = t, je(n, "__bindData__", M)
		} : Ht, Te = xe || function (n) {
			return n && typeof n == "object" && typeof n.length == "number" && ce.call(n) == $ || false
		}, Fe = Ne ? function (n) {
			return wt(n) ? Ne(n) : []
		} : H, Be = {"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"}, We = _t(Be), qe = ue("(" + Fe(We).join("|") + ")", "g"), ze = ue("[" + Fe(Be).join("") + "]", "g"), Pe = ye ? function (n) {
			if (!n || ce.call(n) != q)return false;
			var t = n.valueOf, e = vt(t) && (e = ye(t)) && ye(e);
			return e ? n == e || ye(n) == e : ht(n)
		} : ht, Ke = lt(function (n, t, e) {
			me.call(n, e) ? n[e]++ : n[e] = 1
		}), Le = lt(function (n, t, e) {
			(me.call(n, e) ? n[e] : n[e] = []).push(t)
		}), Me = lt(function (n, t, e) {
			n[e] = t
		}), Ve = Rt, Ue = vt(Ue = Zt.now) && Ue || function () {
			return(new Zt).getTime()
		}, Ge = 8 == Ee(d + "08") ? Ee : function (n, t) {
			return Ee(kt(n) ? n.replace(I, "") : n, t || 0)
		};
		return J.after = function (n, t) {
			if (!dt(t))throw new ie;
			return function () {
				return 1 > --n ? t.apply(this, arguments) : void 0
			}
		}, J.assign = U, J.at = function (n) {
			for (var t = arguments, e = -1, r = ut(t, true, false, 1), t = t[2] && t[2][t[1]] === n ? 1 : r.length, u = Xt(t); ++e < t;)u[e] = n[r[e]];
			return u
		}, J.bind = Mt, J.bindAll = function (n) {
			for (var t = 1 < arguments.length ? ut(arguments, true, false, 1) : bt(n), e = -1, r = t.length; ++e < r;) {
				var u = t[e];
				n[u] = ct(n[u], 1, null, null, n)
			}
			return n
		}, J.bindKey = function (n, t) {
			return 2 < arguments.length ? ct(t, 19, p(arguments, 2), null, n) : ct(t, 3, null, null, n)
		}, J.chain = function (n) {
			return n = new Q(n), n.__chain__ = true, n
		}, J.compact = function (n) {
			for (var t = -1, e = n ? n.length : 0, r = []; ++t < e;) {
				var u = n[t];
				u && r.push(u)
			}
			return r
		}, J.compose = function () {
			for (var n = arguments, t = n.length; t--;)if (!dt(n[t]))throw new ie;
			return function () {
				for (var t = arguments, e = n.length; e--;)t = [n[e].apply(this, t)];
				return t[0]
			}
		}, J.constant = function (n) {
			return function () {
				return n
			}
		}, J.countBy = Ke, J.create = function (n, t) {
			var e = nt(n);
			return t ? U(e, t) : e
		}, J.createCallback = function (n, t, e) {
			var r = typeof n;
			if (null == n || "function" == r)return tt(n, t, e);
			if ("object" != r)return Jt(n);
			var u = Fe(n), o = u[0], i = n[o];
			return 1 != u.length || i !== i || wt(i) ? function (t) {
				for (var e = u.length, r = false; e-- && (r = ot(t[u[e]], n[u[e]], null, true)););
				return r
			} : function (n) {
				return n = n[o], i === n && (0 !== i || 1 / i == 1 / n)
			}
		}, J.curry = function (n, t) {
			return t = typeof t == "number" ? t : +t || n.length, ct(n, 4, null, null, null, t)
		}, J.debounce = Vt, J.defaults = _, J.defer = function (n) {
			if (!dt(n))throw new ie;
			var t = p(arguments, 1);
			return _e(function () {
				n.apply(v, t)
			}, 1)
		}, J.delay = function (n, t) {
			if (!dt(n))throw new ie;
			var e = p(arguments, 2);
			return _e(function () {
				n.apply(v, e)
			}, t)
		}, J.difference = function (n) {
			return rt(n, ut(arguments, true, true, 1))
		}, J.filter = Nt, J.flatten = function (n, t, e, r) {
			return typeof t != "boolean" && null != t && (r = e, e = typeof t != "function" && r && r[t] === n ? null : t, t = false), null != e && (n = Rt(n, e, r)), ut(n, t)
		}, J.forEach = St, J.forEachRight = Et, J.forIn = g, J.forInRight = function (n, t, e) {
			var r = [];
			g(n, function (n, t) {
				r.push(t, n)
			});
			var u = r.length;
			for (t = tt(t, e, 3); u-- && false !== t(r[u--], r[u], n););
			return n
		}, J.forOwn = h, J.forOwnRight = mt, J.functions = bt, J.groupBy = Le, J.indexBy = Me, J.initial = function (n, t, e) {
			var r = 0, u = n ? n.length : 0;
			if (typeof t != "number" && null != t) {
				var o = u;
				for (t = J.createCallback(t, e, 3); o-- && t(n[o], o, n);)r++
			} else r = null == t || e ? 1 : t || r;
			return p(n, 0, Se(Ie(0, u - r), u))
		}, J.intersection = function () {
			for (var e = [], r = -1, u = arguments.length, i = a(), f = st(), p = f === n, s = a(); ++r < u;) {
				var v = arguments[r];
				(Te(v) || yt(v)) && (e.push(v), i.push(p && v.length >= b && o(r ? e[r] : s)))
			}
			var p = e[0], h = -1, g = p ? p.length : 0, y = [];
			n:for (; ++h < g;) {
				var m = i[0], v = p[h];
				if (0 > (m ? t(m, v) : f(s, v))) {
					for (r = u, (m || s).push(v); --r;)if (m = i[r], 0 > (m ? t(m, v) : f(e[r], v)))continue n;
					y.push(v)
				}
			}
			for (; u--;)(m = i[u]) && c(m);
			return l(i), l(s), y
		}, J.invert = _t, J.invoke = function (n, t) {
			var e = p(arguments, 2), r = -1, u = typeof t == "function", o = n ? n.length : 0, i = Xt(typeof o == "number" ? o : 0);
			return St(n, function (n) {
				i[++r] = (u ? t : n[t]).apply(n, e)
			}), i
		}, J.keys = Fe, J.map = Rt, J.mapValues = function (n, t, e) {
			var r = {};
			return t = J.createCallback(t, e, 3), h(n, function (n, e, u) {
				r[e] = t(n, e, u)
			}), r
		}, J.max = At, J.memoize = function (n, t) {
			function e() {
				var r = e.cache, u = t ? t.apply(this, arguments) : m + arguments[0];
				return me.call(r, u) ? r[u] : r[u] = n.apply(this, arguments)
			}

			if (!dt(n))throw new ie;
			return e.cache = {}, e
		}, J.merge = function (n) {
			var t = arguments, e = 2;
			if (!wt(n))return n;
			if ("number" != typeof t[2] && (e = t.length), 3 < e && "function" == typeof t[e - 2])var r = tt(t[--e - 1], t[e--], 2); else 2 < e && "function" == typeof t[e - 1] && (r = t[--e]);
			for (var t = p(arguments, 1, e), u = -1, o = a(), i = a(); ++u < e;)it(n, t[u], r, o, i);
			return l(o), l(i), n
		}, J.min = function (n, t, e) {
			var u = 1 / 0, o = u;
			if (typeof t != "function" && e && e[t] === n && (t = null), null == t && Te(n)) {
				e = -1;
				for (var i = n.length; ++e < i;) {
					var a = n[e];
					a < o && (o = a)
				}
			} else t = null == t && kt(n) ? r : J.createCallback(t, e, 3), St(n, function (n, e, r) {
				e = t(n, e, r), e < u && (u = e, o = n)
			});
			return o
		}, J.omit = function (n, t, e) {
			var r = {};
			if (typeof t != "function") {
				var u = [];
				g(n, function (n, t) {
					u.push(t)
				});
				for (var u = rt(u, ut(arguments, true, false, 1)), o = -1, i = u.length; ++o < i;) {
					var a = u[o];
					r[a] = n[a]
				}
			} else t = J.createCallback(t, e, 3), g(n, function (n, e, u) {
				t(n, e, u) || (r[e] = n)
			});
			return r
		}, J.once = function (n) {
			var t, e;
			if (!dt(n))throw new ie;
			return function () {
				return t ? e : (t = true, e = n.apply(this, arguments), n = null, e)
			}
		}, J.pairs = function (n) {
			for (var t = -1, e = Fe(n), r = e.length, u = Xt(r); ++t < r;) {
				var o = e[t];
				u[t] = [o, n[o]]
			}
			return u
		}, J.partial = function (n) {
			return ct(n, 16, p(arguments, 1))
		}, J.partialRight = function (n) {
			return ct(n, 32, null, p(arguments, 1))
		}, J.pick = function (n, t, e) {
			var r = {};
			if (typeof t != "function")for (var u = -1, o = ut(arguments, true, false, 1), i = wt(n) ? o.length : 0; ++u < i;) {
				var a = o[u];
				a in n && (r[a] = n[a])
			} else t = J.createCallback(t, e, 3), g(n, function (n, e, u) {
				t(n, e, u) && (r[e] = n)
			});
			return r
		}, J.pluck = Ve, J.property = Jt, J.pull = function (n) {
			for (var t = arguments, e = 0, r = t.length, u = n ? n.length : 0; ++e < r;)for (var o = -1, i = t[e]; ++o < u;)n[o] === i && (de.call(n, o--, 1), u--);
			return n
		}, J.range = function (n, t, e) {
			n = +n || 0, e = typeof e == "number" ? e : +e || 1, null == t && (t = n, n = 0);
			var r = -1;
			t = Ie(0, se((t - n) / (e || 1)));
			for (var u = Xt(t); ++r < t;)u[r] = n, n += e;
			return u
		}, J.reject = function (n, t, e) {
			return t = J.createCallback(t, e, 3), Nt(n, function (n, e, r) {
				return!t(n, e, r)
			})
		}, J.remove = function (n, t, e) {
			var r = -1, u = n ? n.length : 0, o = [];
			for (t = J.createCallback(t, e, 3); ++r < u;)e = n[r], t(e, r, n) && (o.push(e), de.call(n, r--, 1), u--);
			return o
		}, J.rest = qt, J.shuffle = Tt, J.sortBy = function (n, t, e) {
			var r = -1, o = Te(t), i = n ? n.length : 0, p = Xt(typeof i == "number" ? i : 0);
			for (o || (t = J.createCallback(t, e, 3)), St(n, function (n, e, u) {
				var i = p[++r] = f();
				o ? i.m = Rt(t, function (t) {
					return n[t]
				}) : (i.m = a())[0] = t(n, e, u), i.n = r, i.o = n
			}), i = p.length, p.sort(u); i--;)n = p[i], p[i] = n.o, o || l(n.m), c(n);
			return p
		}, J.tap = function (n, t) {
			return t(n), n
		}, J.throttle = function (n, t, e) {
			var r = true, u = true;
			if (!dt(n))throw new ie;
			return false === e ? r = false : wt(e) && (r = "leading"in e ? e.leading : r, u = "trailing"in e ? e.trailing : u), L.leading = r, L.maxWait = t, L.trailing = u, Vt(n, t, L)
		}, J.times = function (n, t, e) {
			n = -1 < (n = +n) ? n : 0;
			var r = -1, u = Xt(n);
			for (t = tt(t, e, 1); ++r < n;)u[r] = t(r);
			return u
		}, J.toArray = function (n) {
			return n && typeof n.length == "number" ? p(n) : xt(n)
		}, J.transform = function (n, t, e, r) {
			var u = Te(n);
			if (null == e)if (u)e = []; else {
				var o = n && n.constructor;
				e = nt(o && o.prototype)
			}
			return t && (t = J.createCallback(t, r, 4), (u ? St : h)(n, function (n, r, u) {
				return t(e, n, r, u)
			})), e
		}, J.union = function () {
			return ft(ut(arguments, true, true))
		}, J.uniq = Pt, J.values = xt, J.where = Nt, J.without = function (n) {
			return rt(n, p(arguments, 1))
		}, J.wrap = function (n, t) {
			return ct(t, 16, [n])
		}, J.xor = function () {
			for (var n = -1, t = arguments.length; ++n < t;) {
				var e = arguments[n];
				if (Te(e) || yt(e))var r = r ? ft(rt(r, e).concat(rt(e, r))) : e
			}
			return r || []
		}, J.zip = Kt, J.zipObject = Lt, J.collect = Rt, J.drop = qt, J.each = St, J.eachRight = Et, J.extend = U, J.methods = bt, J.object = Lt, J.select = Nt, J.tail = qt, J.unique = Pt, J.unzip = Kt, Gt(J), J.clone = function (n, t, e, r) {
			return typeof t != "boolean" && null != t && (r = e, e = t, t = false), Z(n, t, typeof e == "function" && tt(e, r, 1))
		}, J.cloneDeep = function (n, t, e) {
			return Z(n, true, typeof t == "function" && tt(t, e, 1))
		}, J.contains = Ct, J.escape = function (n) {
			return null == n ? "" : oe(n).replace(ze, pt)
		}, J.every = Ot, J.find = It, J.findIndex = function (n, t, e) {
			var r = -1, u = n ? n.length : 0;
			for (t = J.createCallback(t, e, 3); ++r < u;)if (t(n[r], r, n))return r;
			return-1
		}, J.findKey = function (n, t, e) {
			var r;
			return t = J.createCallback(t, e, 3), h(n, function (n, e, u) {
				return t(n, e, u) ? (r = e, false) : void 0
			}), r
		}, J.findLast = function (n, t, e) {
			var r;
			return t = J.createCallback(t, e, 3), Et(n, function (n, e, u) {
				return t(n, e, u) ? (r = n, false) : void 0
			}), r
		}, J.findLastIndex = function (n, t, e) {
			var r = n ? n.length : 0;
			for (t = J.createCallback(t, e, 3); r--;)if (t(n[r], r, n))return r;
			return-1
		}, J.findLastKey = function (n, t, e) {
			var r;
			return t = J.createCallback(t, e, 3), mt(n, function (n, e, u) {
				return t(n, e, u) ? (r = e, false) : void 0
			}), r
		}, J.has = function (n, t) {
			return n ? me.call(n, t) : false
		}, J.identity = Ut, J.indexOf = Wt, J.isArguments = yt, J.isArray = Te, J.isBoolean = function (n) {
			return true === n || false === n || n && typeof n == "object" && ce.call(n) == T || false
		}, J.isDate = function (n) {
			return n && typeof n == "object" && ce.call(n) == F || false
		}, J.isElement = function (n) {
			return n && 1 === n.nodeType || false
		}, J.isEmpty = function (n) {
			var t = true;
			if (!n)return t;
			var e = ce.call(n), r = n.length;
			return e == $ || e == P || e == D || e == q && typeof r == "number" && dt(n.splice) ? !r : (h(n, function () {
				return t = false
			}), t)
		}, J.isEqual = function (n, t, e, r) {
			return ot(n, t, typeof e == "function" && tt(e, r, 2))
		}, J.isFinite = function (n) {
			return Ce(n) && !Oe(parseFloat(n))
		}, J.isFunction = dt, J.isNaN = function (n) {
			return jt(n) && n != +n
		}, J.isNull = function (n) {
			return null === n
		}, J.isNumber = jt, J.isObject = wt, J.isPlainObject = Pe, J.isRegExp = function (n) {
			return n && typeof n == "object" && ce.call(n) == z || false
		}, J.isString = kt, J.isUndefined = function (n) {
			return typeof n == "undefined"
		}, J.lastIndexOf = function (n, t, e) {
			var r = n ? n.length : 0;
			for (typeof e == "number" && (r = (0 > e ? Ie(0, r + e) : Se(e, r - 1)) + 1); r--;)if (n[r] === t)return r;
			return-1
		}, J.mixin = Gt, J.noConflict = function () {
			return e._ = le, this
		}, J.noop = Ht, J.now = Ue, J.parseInt = Ge, J.random = function (n, t, e) {
			var r = null == n, u = null == t;
			return null == e && (typeof n == "boolean" && u ? (e = n, n = 1) : u || typeof t != "boolean" || (e = t, u = true)), r && u && (t = 1), n = +n || 0, u ? (t = n, n = 0) : t = +t || 0, e || n % 1 || t % 1 ? (e = Re(), Se(n + e * (t - n + parseFloat("1e-" + ((e + "").length - 1))), t)) : at(n, t)
		}, J.reduce = Dt, J.reduceRight = $t, J.result = function (n, t) {
			if (n) {
				var e = n[t];
				return dt(e) ? n[t]() : e
			}
		}, J.runInContext = s, J.size = function (n) {
			var t = n ? n.length : 0;
			return typeof t == "number" ? t : Fe(n).length
		}, J.some = Ft, J.sortedIndex = zt, J.template = function (n, t, e) {
			var r = J.templateSettings;
			n = oe(n || ""), e = _({}, e, r);
			var u, o = _({}, e.imports, r.imports), r = Fe(o), o = xt(o), a = 0, f = e.interpolate || S, l = "__p+='", f = ue((e.escape || S).source + "|" + f.source + "|" + (f === N ? x : S).source + "|" + (e.evaluate || S).source + "|$", "g");
			n.replace(f, function (t, e, r, o, f, c) {
				return r || (r = o), l += n.slice(a, c).replace(R, i), e && (l += "'+__e(" + e + ")+'"), f && (u = true, l += "';" + f + ";\n__p+='"), r && (l += "'+((__t=(" + r + "))==null?'':__t)+'"), a = c + t.length, t
			}), l += "';", f = e = e.variable, f || (e = "obj", l = "with(" + e + "){" + l + "}"), l = (u ? l.replace(w, "") : l).replace(j, "$1").replace(k, "$1;"), l = "function(" + e + "){" + (f ? "" : e + "||(" + e + "={});") + "var __t,__p='',__e=_.escape" + (u ? ",__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}" : ";") + l + "return __p}";
			try {
				var c = ne(r, "return " + l).apply(v, o)
			} catch (p) {
				throw p.source = l, p
			}
			return t ? c(t) : (c.source = l, c)
		}, J.unescape = function (n) {
			return null == n ? "" : oe(n).replace(qe, gt)
		}, J.uniqueId = function (n) {
			var t = ++y;
			return oe(null == n ? "" : n) + t
		}, J.all = Ot, J.any = Ft, J.detect = It, J.findWhere = It, J.foldl = Dt, J.foldr = $t, J.include = Ct, J.inject = Dt, Gt(function () {
			var n = {};
			return h(J, function (t, e) {
				J.prototype[e] || (n[e] = t)
			}), n
		}(), false), J.first = Bt, J.last = function (n, t, e) {
			var r = 0, u = n ? n.length : 0;
			if (typeof t != "number" && null != t) {
				var o = u;
				for (t = J.createCallback(t, e, 3); o-- && t(n[o], o, n);)r++
			} else if (r = t, null == r || e)return n ? n[u - 1] : v;
			return p(n, Ie(0, u - r))
		}, J.sample = function (n, t, e) {
			return n && typeof n.length != "number" && (n = xt(n)), null == t || e ? n ? n[at(0, n.length - 1)] : v : (n = Tt(n), n.length = Se(Ie(0, t), n.length), n)
		}, J.take = Bt, J.head = Bt, h(J, function (n, t) {
			var e = "sample" !== t;
			J.prototype[t] || (J.prototype[t] = function (t, r) {
				var u = this.__chain__, o = n(this.__wrapped__, t, r);
				return u || null != t && (!r || e && typeof t == "function") ? new Q(o, u) : o
			})
		}), J.VERSION = "2.4.1", J.prototype.chain = function () {
			return this.__chain__ = true, this
		}, J.prototype.toString = function () {
			return oe(this.__wrapped__)
		}, J.prototype.value = Qt, J.prototype.valueOf = Qt, St(["join", "pop", "shift"], function (n) {
			var t = ae[n];
			J.prototype[n] = function () {
				var n = this.__chain__, e = t.apply(this.__wrapped__, arguments);
				return n ? new Q(e, n) : e
			}
		}), St(["push", "reverse", "sort", "unshift"], function (n) {
			var t = ae[n];
			J.prototype[n] = function () {
				return t.apply(this.__wrapped__, arguments), this
			}
		}), St(["concat", "slice", "splice"], function (n) {
			var t = ae[n];
			J.prototype[n] = function () {
				return new Q(t.apply(this.__wrapped__, arguments), this.__chain__)
			}
		}), J
	}

	var v, h = [], g = [], y = 0, m = +new Date + "", b = 75, _ = 40, d = " \t\x0B\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000", w = /\b__p\+='';/g, j = /\b(__p\+=)''\+/g, k = /(__e\(.*?\)|\b__t\))\+'';/g, x = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, C = /\w*$/, O = /^\s*function[ \n\r\t]+\w/, N = /<%=([\s\S]+?)%>/g, I = RegExp("^[" + d + "]*0+(?=.$)"), S = /($^)/, E = /\bthis\b/, R = /['\n\r\t\u2028\u2029\\]/g, A = "Array Boolean Date Function Math Number Object RegExp String _ attachEvent clearTimeout isFinite isNaN parseInt setTimeout".split(" "), D = "[object Arguments]", $ = "[object Array]", T = "[object Boolean]", F = "[object Date]", B = "[object Function]", W = "[object Number]", q = "[object Object]", z = "[object RegExp]", P = "[object String]", K = {};
	K[B] = false, K[D] = K[$] = K[T] = K[F] = K[W] = K[q] = K[z] = K[P] = true;
	var L = {leading: false, maxWait: 0, trailing: false}, M = {configurable: false, enumerable: false, value: null, writable: false}, V = {"boolean": false, "function": true, object: true, number: false, string: false, undefined: false}, U = {"\\": "\\", "'": "'", "\n": "n", "\r": "r", "\t": "t", "\u2028": "u2028", "\u2029": "u2029"}, G = V[typeof window] && window || this, H = V[typeof exports] && exports && !exports.nodeType && exports, J = V[typeof module] && module && !module.nodeType && module, Q = J && J.exports === H && H, X = V[typeof global] && global;
	!X || X.global !== X && X.window !== X || (G = X);
	var Y = s();
	typeof define == "function" && typeof define.amd == "object" && define.amd ? (G._ = Y, define(function () {
		return Y
	})) : H && J ? Q ? (J.exports = Y)._ = Y : H._ = Y : G._ = Y
}).call(this);
// threejs.org/license
'use strict';
var THREE = {REVISION: "68"};
"object" === typeof module && (module.exports = THREE);
THREE.CullFaceNone = 0;
THREE.CullFaceBack = 1;
THREE.CullFaceFront = 2;
THREE.CullFaceFrontBack = 3;
THREE.FrontFaceDirectionCW = 0;
THREE.FrontFaceDirectionCCW = 1;
THREE.BasicShadowMap = 0;
THREE.PCFShadowMap = 1;
THREE.PCFSoftShadowMap = 2;
THREE.FrontSide = 0;
THREE.BackSide = 1;
THREE.DoubleSide = 2;
THREE.NoShading = 0;
THREE.FlatShading = 1;
THREE.SmoothShading = 2;
THREE.NoColors = 0;
THREE.FaceColors = 1;
THREE.VertexColors = 2;
THREE.NoBlending = 0;
THREE.NormalBlending = 1;
THREE.AdditiveBlending = 2;
THREE.SubtractiveBlending = 3;
THREE.MultiplyBlending = 4;
THREE.CustomBlending = 5;
THREE.AddEquation = 100;
THREE.SubtractEquation = 101;
THREE.ReverseSubtractEquation = 102;
THREE.ZeroFactor = 200;
THREE.OneFactor = 201;
THREE.SrcColorFactor = 202;
THREE.OneMinusSrcColorFactor = 203;
THREE.SrcAlphaFactor = 204;
THREE.OneMinusSrcAlphaFactor = 205;
THREE.DstAlphaFactor = 206;
THREE.OneMinusDstAlphaFactor = 207;
THREE.DstColorFactor = 208;
THREE.OneMinusDstColorFactor = 209;
THREE.SrcAlphaSaturateFactor = 210;
THREE.MultiplyOperation = 0;
THREE.MixOperation = 1;
THREE.AddOperation = 2;
THREE.UVMapping = function () {
};
THREE.CubeReflectionMapping = function () {
};
THREE.CubeRefractionMapping = function () {
};
THREE.SphericalReflectionMapping = function () {
};
THREE.SphericalRefractionMapping = function () {
};
THREE.RepeatWrapping = 1E3;
THREE.ClampToEdgeWrapping = 1001;
THREE.MirroredRepeatWrapping = 1002;
THREE.NearestFilter = 1003;
THREE.NearestMipMapNearestFilter = 1004;
THREE.NearestMipMapLinearFilter = 1005;
THREE.LinearFilter = 1006;
THREE.LinearMipMapNearestFilter = 1007;
THREE.LinearMipMapLinearFilter = 1008;
THREE.UnsignedByteType = 1009;
THREE.ByteType = 1010;
THREE.ShortType = 1011;
THREE.UnsignedShortType = 1012;
THREE.IntType = 1013;
THREE.UnsignedIntType = 1014;
THREE.FloatType = 1015;
THREE.UnsignedShort4444Type = 1016;
THREE.UnsignedShort5551Type = 1017;
THREE.UnsignedShort565Type = 1018;
THREE.AlphaFormat = 1019;
THREE.RGBFormat = 1020;
THREE.RGBAFormat = 1021;
THREE.LuminanceFormat = 1022;
THREE.LuminanceAlphaFormat = 1023;
THREE.RGB_S3TC_DXT1_Format = 2001;
THREE.RGBA_S3TC_DXT1_Format = 2002;
THREE.RGBA_S3TC_DXT3_Format = 2003;
THREE.RGBA_S3TC_DXT5_Format = 2004;
THREE.Color = function (a) {
	return 3 === arguments.length ? this.setRGB(arguments[0], arguments[1], arguments[2]) : this.set(a)
};
THREE.Color.prototype = {constructor: THREE.Color, r: 1, g: 1, b: 1, set: function (a) {
	a instanceof THREE.Color ? this.copy(a) : "number" === typeof a ? this.setHex(a) : "string" === typeof a && this.setStyle(a);
	return this
}, setHex: function (a) {
	a = Math.floor(a);
	this.r = (a >> 16 & 255) / 255;
	this.g = (a >> 8 & 255) / 255;
	this.b = (a & 255) / 255;
	return this
}, setRGB: function (a, b, c) {
	this.r = a;
	this.g = b;
	this.b = c;
	return this
}, setHSL: function (a, b, c) {
	if (0 === b)this.r = this.g = this.b = c; else {
		var d = function (a, b, c) {
			0 > c && (c += 1);
			1 < c && (c -= 1);
			return c < 1 / 6 ? a + 6 * (b - a) *
				c : 0.5 > c ? b : c < 2 / 3 ? a + 6 * (b - a) * (2 / 3 - c) : a
		};
		b = 0.5 >= c ? c * (1 + b) : c + b - c * b;
		c = 2 * c - b;
		this.r = d(c, b, a + 1 / 3);
		this.g = d(c, b, a);
		this.b = d(c, b, a - 1 / 3)
	}
	return this
}, setStyle: function (a) {
	if (/^rgb\((\d+), ?(\d+), ?(\d+)\)$/i.test(a))return a = /^rgb\((\d+), ?(\d+), ?(\d+)\)$/i.exec(a), this.r = Math.min(255, parseInt(a[1], 10)) / 255, this.g = Math.min(255, parseInt(a[2], 10)) / 255, this.b = Math.min(255, parseInt(a[3], 10)) / 255, this;
	if (/^rgb\((\d+)\%, ?(\d+)\%, ?(\d+)\%\)$/i.test(a))return a = /^rgb\((\d+)\%, ?(\d+)\%, ?(\d+)\%\)$/i.exec(a), this.r =
		Math.min(100, parseInt(a[1], 10)) / 100, this.g = Math.min(100, parseInt(a[2], 10)) / 100, this.b = Math.min(100, parseInt(a[3], 10)) / 100, this;
	if (/^\#([0-9a-f]{6})$/i.test(a))return a = /^\#([0-9a-f]{6})$/i.exec(a), this.setHex(parseInt(a[1], 16)), this;
	if (/^\#([0-9a-f])([0-9a-f])([0-9a-f])$/i.test(a))return a = /^\#([0-9a-f])([0-9a-f])([0-9a-f])$/i.exec(a), this.setHex(parseInt(a[1] + a[1] + a[2] + a[2] + a[3] + a[3], 16)), this;
	if (/^(\w+)$/i.test(a))return this.setHex(THREE.ColorKeywords[a]), this
}, copy: function (a) {
	this.r = a.r;
	this.g =
		a.g;
	this.b = a.b;
	return this
}, copyGammaToLinear: function (a) {
	this.r = a.r * a.r;
	this.g = a.g * a.g;
	this.b = a.b * a.b;
	return this
}, copyLinearToGamma: function (a) {
	this.r = Math.sqrt(a.r);
	this.g = Math.sqrt(a.g);
	this.b = Math.sqrt(a.b);
	return this
}, convertGammaToLinear: function () {
	var a = this.r, b = this.g, c = this.b;
	this.r = a * a;
	this.g = b * b;
	this.b = c * c;
	return this
}, convertLinearToGamma: function () {
	this.r = Math.sqrt(this.r);
	this.g = Math.sqrt(this.g);
	this.b = Math.sqrt(this.b);
	return this
}, getHex: function () {
	return 255 * this.r << 16 ^ 255 * this.g <<
		8 ^ 255 * this.b << 0
}, getHexString: function () {
	return("000000" + this.getHex().toString(16)).slice(-6)
}, getHSL: function (a) {
	a = a || {h: 0, s: 0, l: 0};
	var b = this.r, c = this.g, d = this.b, e = Math.max(b, c, d), f = Math.min(b, c, d), g, h = (f + e) / 2;
	if (f === e)f = g = 0; else {
		var k = e - f, f = 0.5 >= h ? k / (e + f) : k / (2 - e - f);
		switch (e) {
			case b:
				g = (c - d) / k + (c < d ? 6 : 0);
				break;
			case c:
				g = (d - b) / k + 2;
				break;
			case d:
				g = (b - c) / k + 4
		}
		g /= 6
	}
	a.h = g;
	a.s = f;
	a.l = h;
	return a
}, getStyle: function () {
	return"rgb(" + (255 * this.r | 0) + "," + (255 * this.g | 0) + "," + (255 * this.b | 0) + ")"
}, offsetHSL: function (a, b, c) {
	var d = this.getHSL();
	d.h += a;
	d.s += b;
	d.l += c;
	this.setHSL(d.h, d.s, d.l);
	return this
}, add: function (a) {
	this.r += a.r;
	this.g += a.g;
	this.b += a.b;
	return this
}, addColors: function (a, b) {
	this.r = a.r + b.r;
	this.g = a.g + b.g;
	this.b = a.b + b.b;
	return this
}, addScalar: function (a) {
	this.r += a;
	this.g += a;
	this.b += a;
	return this
}, multiply: function (a) {
	this.r *= a.r;
	this.g *= a.g;
	this.b *= a.b;
	return this
}, multiplyScalar: function (a) {
	this.r *= a;
	this.g *= a;
	this.b *= a;
	return this
}, lerp: function (a, b) {
	this.r += (a.r - this.r) * b;
	this.g += (a.g - this.g) * b;
	this.b += (a.b - this.b) * b;
	return this
}, equals: function (a) {
	return a.r === this.r && a.g === this.g && a.b === this.b
}, fromArray: function (a) {
	this.r = a[0];
	this.g = a[1];
	this.b = a[2];
	return this
}, toArray: function () {
	return[this.r, this.g, this.b]
}, clone: function () {
	return(new THREE.Color).setRGB(this.r, this.g, this.b)
}};
THREE.ColorKeywords = {aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643,
	darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055,
	grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184,
	lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130,
	palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888,
	tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074};
THREE.Quaternion = function (a, b, c, d) {
	this._x = a || 0;
	this._y = b || 0;
	this._z = c || 0;
	this._w = void 0 !== d ? d : 1
};
THREE.Quaternion.prototype = {constructor: THREE.Quaternion, _x: 0, _y: 0, _z: 0, _w: 0, get x() {
	return this._x
}, set x(a) {
	this._x = a;
	this.onChangeCallback()
}, get y() {
	return this._y
}, set y(a) {
	this._y = a;
	this.onChangeCallback()
}, get z() {
	return this._z
}, set z(a) {
	this._z = a;
	this.onChangeCallback()
}, get w() {
	return this._w
}, set w(a) {
	this._w = a;
	this.onChangeCallback()
}, set: function (a, b, c, d) {
	this._x = a;
	this._y = b;
	this._z = c;
	this._w = d;
	this.onChangeCallback();
	return this
}, copy: function (a) {
	this._x = a.x;
	this._y = a.y;
	this._z = a.z;
	this._w = a.w;
	this.onChangeCallback();
	return this
}, setFromEuler: function (a, b) {
	if (!1 === a instanceof THREE.Euler)throw Error("THREE.Quaternion: .setFromEuler() now expects a Euler rotation rather than a Vector3 and order.");
	var c = Math.cos(a._x / 2), d = Math.cos(a._y / 2), e = Math.cos(a._z / 2), f = Math.sin(a._x / 2), g = Math.sin(a._y / 2), h = Math.sin(a._z / 2);
	"XYZ" === a.order ? (this._x = f * d * e + c * g * h, this._y = c * g * e - f * d * h, this._z = c * d * h + f * g * e, this._w = c * d * e - f * g * h) : "YXZ" === a.order ? (this._x = f * d * e + c * g * h, this._y = c * g * e - f * d * h, this._z =
		c * d * h - f * g * e, this._w = c * d * e + f * g * h) : "ZXY" === a.order ? (this._x = f * d * e - c * g * h, this._y = c * g * e + f * d * h, this._z = c * d * h + f * g * e, this._w = c * d * e - f * g * h) : "ZYX" === a.order ? (this._x = f * d * e - c * g * h, this._y = c * g * e + f * d * h, this._z = c * d * h - f * g * e, this._w = c * d * e + f * g * h) : "YZX" === a.order ? (this._x = f * d * e + c * g * h, this._y = c * g * e + f * d * h, this._z = c * d * h - f * g * e, this._w = c * d * e - f * g * h) : "XZY" === a.order && (this._x = f * d * e - c * g * h, this._y = c * g * e - f * d * h, this._z = c * d * h + f * g * e, this._w = c * d * e + f * g * h);
	if (!1 !== b)this.onChangeCallback();
	return this
}, setFromAxisAngle: function (a, b) {
	var c = b / 2, d = Math.sin(c);
	this._x = a.x * d;
	this._y = a.y * d;
	this._z = a.z * d;
	this._w = Math.cos(c);
	this.onChangeCallback();
	return this
}, setFromRotationMatrix: function (a) {
	var b = a.elements, c = b[0];
	a = b[4];
	var d = b[8], e = b[1], f = b[5], g = b[9], h = b[2], k = b[6], b = b[10], l = c + f + b;
	0 < l ? (c = 0.5 / Math.sqrt(l + 1), this._w = 0.25 / c, this._x = (k - g) * c, this._y = (d - h) * c, this._z = (e - a) * c) : c > f && c > b ? (c = 2 * Math.sqrt(1 + c - f - b), this._w = (k - g) / c, this._x = 0.25 * c, this._y = (a + e) / c, this._z = (d + h) / c) : f > b ? (c = 2 * Math.sqrt(1 + f - c - b), this._w = (d - h) / c, this._x = (a + e) / c, this._y =
		0.25 * c, this._z = (g + k) / c) : (c = 2 * Math.sqrt(1 + b - c - f), this._w = (e - a) / c, this._x = (d + h) / c, this._y = (g + k) / c, this._z = 0.25 * c);
	this.onChangeCallback();
	return this
}, setFromUnitVectors: function () {
	var a, b;
	return function (c, d) {
		void 0 === a && (a = new THREE.Vector3);
		b = c.dot(d) + 1;
		1E-6 > b ? (b = 0, Math.abs(c.x) > Math.abs(c.z) ? a.set(-c.y, c.x, 0) : a.set(0, -c.z, c.y)) : a.crossVectors(c, d);
		this._x = a.x;
		this._y = a.y;
		this._z = a.z;
		this._w = b;
		this.normalize();
		return this
	}
}(), inverse: function () {
	this.conjugate().normalize();
	return this
}, conjugate: function () {
	this._x *= -1;
	this._y *= -1;
	this._z *= -1;
	this.onChangeCallback();
	return this
}, dot: function (a) {
	return this._x * a._x + this._y * a._y + this._z * a._z + this._w * a._w
}, lengthSq: function () {
	return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w
}, length: function () {
	return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w)
}, normalize: function () {
	var a = this.length();
	0 === a ? (this._z = this._y = this._x = 0, this._w = 1) : (a = 1 / a, this._x *= a, this._y *= a, this._z *= a, this._w *= a);
	this.onChangeCallback();
	return this
},
	multiply: function (a, b) {
		return void 0 !== b ? (console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."), this.multiplyQuaternions(a, b)) : this.multiplyQuaternions(this, a)
	}, multiplyQuaternions: function (a, b) {
		var c = a._x, d = a._y, e = a._z, f = a._w, g = b._x, h = b._y, k = b._z, l = b._w;
		this._x = c * l + f * g + d * k - e * h;
		this._y = d * l + f * h + e * g - c * k;
		this._z = e * l + f * k + c * h - d * g;
		this._w = f * l - c * g - d * h - e * k;
		this.onChangeCallback();
		return this
	}, multiplyVector3: function (a) {
		console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead.");
		return a.applyQuaternion(this)
	}, slerp: function (a, b) {
		var c = this._x, d = this._y, e = this._z, f = this._w, g = f * a._w + c * a._x + d * a._y + e * a._z;
		0 > g ? (this._w = -a._w, this._x = -a._x, this._y = -a._y, this._z = -a._z, g = -g) : this.copy(a);
		if (1 <= g)return this._w = f, this._x = c, this._y = d, this._z = e, this;
		var h = Math.acos(g), k = Math.sqrt(1 - g * g);
		if (0.001 > Math.abs(k))return this._w = 0.5 * (f + this._w), this._x = 0.5 * (c + this._x), this._y = 0.5 * (d + this._y), this._z = 0.5 * (e + this._z), this;
		g = Math.sin((1 - b) * h) / k;
		h = Math.sin(b * h) / k;
		this._w = f * g + this._w * h;
		this._x =
			c * g + this._x * h;
		this._y = d * g + this._y * h;
		this._z = e * g + this._z * h;
		this.onChangeCallback();
		return this
	}, equals: function (a) {
		return a._x === this._x && a._y === this._y && a._z === this._z && a._w === this._w
	}, fromArray: function (a) {
		this._x = a[0];
		this._y = a[1];
		this._z = a[2];
		this._w = a[3];
		this.onChangeCallback();
		return this
	}, toArray: function () {
		return[this._x, this._y, this._z, this._w]
	}, onChange: function (a) {
		this.onChangeCallback = a;
		return this
	}, onChangeCallback: function () {
	}, clone: function () {
		return new THREE.Quaternion(this._x, this._y,
			this._z, this._w)
	}};
THREE.Quaternion.slerp = function (a, b, c, d) {
	return c.copy(a).slerp(b, d)
};
THREE.Vector2 = function (a, b) {
	this.x = a || 0;
	this.y = b || 0
};
THREE.Vector2.prototype = {constructor: THREE.Vector2, set: function (a, b) {
	this.x = a;
	this.y = b;
	return this
}, setX: function (a) {
	this.x = a;
	return this
}, setY: function (a) {
	this.y = a;
	return this
}, setComponent: function (a, b) {
	switch (a) {
		case 0:
			this.x = b;
			break;
		case 1:
			this.y = b;
			break;
		default:
			throw Error("index is out of range: " + a);
	}
}, getComponent: function (a) {
	switch (a) {
		case 0:
			return this.x;
		case 1:
			return this.y;
		default:
			throw Error("index is out of range: " + a);
	}
}, copy: function (a) {
	this.x = a.x;
	this.y = a.y;
	return this
}, add: function (a, b) {
	if (void 0 !== b)return console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(a, b);
	this.x += a.x;
	this.y += a.y;
	return this
}, addVectors: function (a, b) {
	this.x = a.x + b.x;
	this.y = a.y + b.y;
	return this
}, addScalar: function (a) {
	this.x += a;
	this.y += a;
	return this
}, sub: function (a, b) {
	if (void 0 !== b)return console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(a, b);
	this.x -= a.x;
	this.y -= a.y;
	return this
},
	subVectors: function (a, b) {
		this.x = a.x - b.x;
		this.y = a.y - b.y;
		return this
	}, multiply: function (a) {
		this.x *= a.x;
		this.y *= a.y;
		return this
	}, multiplyScalar: function (a) {
		this.x *= a;
		this.y *= a;
		return this
	}, divide: function (a) {
		this.x /= a.x;
		this.y /= a.y;
		return this
	}, divideScalar: function (a) {
		0 !== a ? (a = 1 / a, this.x *= a, this.y *= a) : this.y = this.x = 0;
		return this
	}, min: function (a) {
		this.x > a.x && (this.x = a.x);
		this.y > a.y && (this.y = a.y);
		return this
	}, max: function (a) {
		this.x < a.x && (this.x = a.x);
		this.y < a.y && (this.y = a.y);
		return this
	}, clamp: function (a, b) {
		this.x < a.x ? this.x = a.x : this.x > b.x && (this.x = b.x);
		this.y < a.y ? this.y = a.y : this.y > b.y && (this.y = b.y);
		return this
	}, clampScalar: function () {
		var a, b;
		return function (c, d) {
			void 0 === a && (a = new THREE.Vector2, b = new THREE.Vector2);
			a.set(c, c);
			b.set(d, d);
			return this.clamp(a, b)
		}
	}(), floor: function () {
		this.x = Math.floor(this.x);
		this.y = Math.floor(this.y);
		return this
	}, ceil: function () {
		this.x = Math.ceil(this.x);
		this.y = Math.ceil(this.y);
		return this
	}, round: function () {
		this.x = Math.round(this.x);
		this.y = Math.round(this.y);
		return this
	},
	roundToZero: function () {
		this.x = 0 > this.x ? Math.ceil(this.x) : Math.floor(this.x);
		this.y = 0 > this.y ? Math.ceil(this.y) : Math.floor(this.y);
		return this
	}, negate: function () {
		this.x = -this.x;
		this.y = -this.y;
		return this
	}, dot: function (a) {
		return this.x * a.x + this.y * a.y
	}, lengthSq: function () {
		return this.x * this.x + this.y * this.y
	}, length: function () {
		return Math.sqrt(this.x * this.x + this.y * this.y)
	}, normalize: function () {
		return this.divideScalar(this.length())
	}, distanceTo: function (a) {
		return Math.sqrt(this.distanceToSquared(a))
	}, distanceToSquared: function (a) {
		var b =
			this.x - a.x;
		a = this.y - a.y;
		return b * b + a * a
	}, setLength: function (a) {
		var b = this.length();
		0 !== b && a !== b && this.multiplyScalar(a / b);
		return this
	}, lerp: function (a, b) {
		this.x += (a.x - this.x) * b;
		this.y += (a.y - this.y) * b;
		return this
	}, equals: function (a) {
		return a.x === this.x && a.y === this.y
	}, fromArray: function (a) {
		this.x = a[0];
		this.y = a[1];
		return this
	}, toArray: function () {
		return[this.x, this.y]
	}, clone: function () {
		return new THREE.Vector2(this.x, this.y)
	}};
THREE.Vector3 = function (a, b, c) {
	this.x = a || 0;
	this.y = b || 0;
	this.z = c || 0
};
THREE.Vector3.prototype = {constructor: THREE.Vector3, set: function (a, b, c) {
	this.x = a;
	this.y = b;
	this.z = c;
	return this
}, setX: function (a) {
	this.x = a;
	return this
}, setY: function (a) {
	this.y = a;
	return this
}, setZ: function (a) {
	this.z = a;
	return this
}, setComponent: function (a, b) {
	switch (a) {
		case 0:
			this.x = b;
			break;
		case 1:
			this.y = b;
			break;
		case 2:
			this.z = b;
			break;
		default:
			throw Error("index is out of range: " + a);
	}
}, getComponent: function (a) {
	switch (a) {
		case 0:
			return this.x;
		case 1:
			return this.y;
		case 2:
			return this.z;
		default:
			throw Error("index is out of range: " +
				a);
	}
}, copy: function (a) {
	this.x = a.x;
	this.y = a.y;
	this.z = a.z;
	return this
}, add: function (a, b) {
	if (void 0 !== b)return console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(a, b);
	this.x += a.x;
	this.y += a.y;
	this.z += a.z;
	return this
}, addScalar: function (a) {
	this.x += a;
	this.y += a;
	this.z += a;
	return this
}, addVectors: function (a, b) {
	this.x = a.x + b.x;
	this.y = a.y + b.y;
	this.z = a.z + b.z;
	return this
}, sub: function (a, b) {
	if (void 0 !== b)return console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),
		this.subVectors(a, b);
	this.x -= a.x;
	this.y -= a.y;
	this.z -= a.z;
	return this
}, subVectors: function (a, b) {
	this.x = a.x - b.x;
	this.y = a.y - b.y;
	this.z = a.z - b.z;
	return this
}, multiply: function (a, b) {
	if (void 0 !== b)return console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."), this.multiplyVectors(a, b);
	this.x *= a.x;
	this.y *= a.y;
	this.z *= a.z;
	return this
}, multiplyScalar: function (a) {
	this.x *= a;
	this.y *= a;
	this.z *= a;
	return this
}, multiplyVectors: function (a, b) {
	this.x = a.x * b.x;
	this.y =
		a.y * b.y;
	this.z = a.z * b.z;
	return this
}, applyEuler: function () {
	var a;
	return function (b) {
		!1 === b instanceof THREE.Euler && console.error("THREE.Vector3: .applyEuler() now expects a Euler rotation rather than a Vector3 and order.");
		void 0 === a && (a = new THREE.Quaternion);
		this.applyQuaternion(a.setFromEuler(b));
		return this
	}
}(), applyAxisAngle: function () {
	var a;
	return function (b, c) {
		void 0 === a && (a = new THREE.Quaternion);
		this.applyQuaternion(a.setFromAxisAngle(b, c));
		return this
	}
}(), applyMatrix3: function (a) {
	var b = this.x,
		c = this.y, d = this.z;
	a = a.elements;
	this.x = a[0] * b + a[3] * c + a[6] * d;
	this.y = a[1] * b + a[4] * c + a[7] * d;
	this.z = a[2] * b + a[5] * c + a[8] * d;
	return this
}, applyMatrix4: function (a) {
	var b = this.x, c = this.y, d = this.z;
	a = a.elements;
	this.x = a[0] * b + a[4] * c + a[8] * d + a[12];
	this.y = a[1] * b + a[5] * c + a[9] * d + a[13];
	this.z = a[2] * b + a[6] * c + a[10] * d + a[14];
	return this
}, applyProjection: function (a) {
	var b = this.x, c = this.y, d = this.z;
	a = a.elements;
	var e = 1 / (a[3] * b + a[7] * c + a[11] * d + a[15]);
	this.x = (a[0] * b + a[4] * c + a[8] * d + a[12]) * e;
	this.y = (a[1] * b + a[5] * c + a[9] * d + a[13]) * e;
	this.z =
		(a[2] * b + a[6] * c + a[10] * d + a[14]) * e;
	return this
}, applyQuaternion: function (a) {
	var b = this.x, c = this.y, d = this.z, e = a.x, f = a.y, g = a.z;
	a = a.w;
	var h = a * b + f * d - g * c, k = a * c + g * b - e * d, l = a * d + e * c - f * b, b = -e * b - f * c - g * d;
	this.x = h * a + b * -e + k * -g - l * -f;
	this.y = k * a + b * -f + l * -e - h * -g;
	this.z = l * a + b * -g + h * -f - k * -e;
	return this
}, transformDirection: function (a) {
	var b = this.x, c = this.y, d = this.z;
	a = a.elements;
	this.x = a[0] * b + a[4] * c + a[8] * d;
	this.y = a[1] * b + a[5] * c + a[9] * d;
	this.z = a[2] * b + a[6] * c + a[10] * d;
	this.normalize();
	return this
}, divide: function (a) {
	this.x /= a.x;
	this.y /= a.y;
	this.z /= a.z;
	return this
}, divideScalar: function (a) {
	0 !== a ? (a = 1 / a, this.x *= a, this.y *= a, this.z *= a) : this.z = this.y = this.x = 0;
	return this
}, min: function (a) {
	this.x > a.x && (this.x = a.x);
	this.y > a.y && (this.y = a.y);
	this.z > a.z && (this.z = a.z);
	return this
}, max: function (a) {
	this.x < a.x && (this.x = a.x);
	this.y < a.y && (this.y = a.y);
	this.z < a.z && (this.z = a.z);
	return this
}, clamp: function (a, b) {
	this.x < a.x ? this.x = a.x : this.x > b.x && (this.x = b.x);
	this.y < a.y ? this.y = a.y : this.y > b.y && (this.y = b.y);
	this.z < a.z ? this.z = a.z : this.z > b.z && (this.z =
		b.z);
	return this
}, clampScalar: function () {
	var a, b;
	return function (c, d) {
		void 0 === a && (a = new THREE.Vector3, b = new THREE.Vector3);
		a.set(c, c, c);
		b.set(d, d, d);
		return this.clamp(a, b)
	}
}(), floor: function () {
	this.x = Math.floor(this.x);
	this.y = Math.floor(this.y);
	this.z = Math.floor(this.z);
	return this
}, ceil: function () {
	this.x = Math.ceil(this.x);
	this.y = Math.ceil(this.y);
	this.z = Math.ceil(this.z);
	return this
}, round: function () {
	this.x = Math.round(this.x);
	this.y = Math.round(this.y);
	this.z = Math.round(this.z);
	return this
}, roundToZero: function () {
	this.x =
		0 > this.x ? Math.ceil(this.x) : Math.floor(this.x);
	this.y = 0 > this.y ? Math.ceil(this.y) : Math.floor(this.y);
	this.z = 0 > this.z ? Math.ceil(this.z) : Math.floor(this.z);
	return this
}, negate: function () {
	this.x = -this.x;
	this.y = -this.y;
	this.z = -this.z;
	return this
}, dot: function (a) {
	return this.x * a.x + this.y * a.y + this.z * a.z
}, lengthSq: function () {
	return this.x * this.x + this.y * this.y + this.z * this.z
}, length: function () {
	return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
}, lengthManhattan: function () {
	return Math.abs(this.x) + Math.abs(this.y) +
		Math.abs(this.z)
}, normalize: function () {
	return this.divideScalar(this.length())
}, setLength: function (a) {
	var b = this.length();
	0 !== b && a !== b && this.multiplyScalar(a / b);
	return this
}, lerp: function (a, b) {
	this.x += (a.x - this.x) * b;
	this.y += (a.y - this.y) * b;
	this.z += (a.z - this.z) * b;
	return this
}, cross: function (a, b) {
	if (void 0 !== b)return console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."), this.crossVectors(a, b);
	var c = this.x, d = this.y, e = this.z;
	this.x = d * a.z - e * a.y;
	this.y =
		e * a.x - c * a.z;
	this.z = c * a.y - d * a.x;
	return this
}, crossVectors: function (a, b) {
	var c = a.x, d = a.y, e = a.z, f = b.x, g = b.y, h = b.z;
	this.x = d * h - e * g;
	this.y = e * f - c * h;
	this.z = c * g - d * f;
	return this
}, projectOnVector: function () {
	var a, b;
	return function (c) {
		void 0 === a && (a = new THREE.Vector3);
		a.copy(c).normalize();
		b = this.dot(a);
		return this.copy(a).multiplyScalar(b)
	}
}(), projectOnPlane: function () {
	var a;
	return function (b) {
		void 0 === a && (a = new THREE.Vector3);
		a.copy(this).projectOnVector(b);
		return this.sub(a)
	}
}(), reflect: function () {
	var a;
	return function (b) {
		void 0 ===
			a && (a = new THREE.Vector3);
		return this.sub(a.copy(b).multiplyScalar(2 * this.dot(b)))
	}
}(), angleTo: function (a) {
	a = this.dot(a) / (this.length() * a.length());
	return Math.acos(THREE.Math.clamp(a, -1, 1))
}, distanceTo: function (a) {
	return Math.sqrt(this.distanceToSquared(a))
}, distanceToSquared: function (a) {
	var b = this.x - a.x, c = this.y - a.y;
	a = this.z - a.z;
	return b * b + c * c + a * a
}, setEulerFromRotationMatrix: function (a, b) {
	console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")
},
	setEulerFromQuaternion: function (a, b) {
		console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")
	}, getPositionFromMatrix: function (a) {
		console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition().");
		return this.setFromMatrixPosition(a)
	}, getScaleFromMatrix: function (a) {
		console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale().");
		return this.setFromMatrixScale(a)
	}, getColumnFromMatrix: function (a, b) {
		console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn().");
		return this.setFromMatrixColumn(a, b)
	}, setFromMatrixPosition: function (a) {
		this.x = a.elements[12];
		this.y = a.elements[13];
		this.z = a.elements[14];
		return this
	}, setFromMatrixScale: function (a) {
		var b = this.set(a.elements[0], a.elements[1], a.elements[2]).length(), c = this.set(a.elements[4], a.elements[5], a.elements[6]).length();
		a = this.set(a.elements[8], a.elements[9], a.elements[10]).length();
		this.x = b;
		this.y = c;
		this.z =
			a;
		return this
	}, setFromMatrixColumn: function (a, b) {
		var c = 4 * a, d = b.elements;
		this.x = d[c];
		this.y = d[c + 1];
		this.z = d[c + 2];
		return this
	}, equals: function (a) {
		return a.x === this.x && a.y === this.y && a.z === this.z
	}, fromArray: function (a) {
		this.x = a[0];
		this.y = a[1];
		this.z = a[2];
		return this
	}, toArray: function () {
		return[this.x, this.y, this.z]
	}, clone: function () {
		return new THREE.Vector3(this.x, this.y, this.z)
	}};
THREE.Vector4 = function (a, b, c, d) {
	this.x = a || 0;
	this.y = b || 0;
	this.z = c || 0;
	this.w = void 0 !== d ? d : 1
};
THREE.Vector4.prototype = {constructor: THREE.Vector4, set: function (a, b, c, d) {
	this.x = a;
	this.y = b;
	this.z = c;
	this.w = d;
	return this
}, setX: function (a) {
	this.x = a;
	return this
}, setY: function (a) {
	this.y = a;
	return this
}, setZ: function (a) {
	this.z = a;
	return this
}, setW: function (a) {
	this.w = a;
	return this
}, setComponent: function (a, b) {
	switch (a) {
		case 0:
			this.x = b;
			break;
		case 1:
			this.y = b;
			break;
		case 2:
			this.z = b;
			break;
		case 3:
			this.w = b;
			break;
		default:
			throw Error("index is out of range: " + a);
	}
}, getComponent: function (a) {
	switch (a) {
		case 0:
			return this.x;
		case 1:
			return this.y;
		case 2:
			return this.z;
		case 3:
			return this.w;
		default:
			throw Error("index is out of range: " + a);
	}
}, copy: function (a) {
	this.x = a.x;
	this.y = a.y;
	this.z = a.z;
	this.w = void 0 !== a.w ? a.w : 1;
	return this
}, add: function (a, b) {
	if (void 0 !== b)return console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(a, b);
	this.x += a.x;
	this.y += a.y;
	this.z += a.z;
	this.w += a.w;
	return this
}, addScalar: function (a) {
	this.x += a;
	this.y += a;
	this.z += a;
	this.w += a;
	return this
},
	addVectors: function (a, b) {
		this.x = a.x + b.x;
		this.y = a.y + b.y;
		this.z = a.z + b.z;
		this.w = a.w + b.w;
		return this
	}, sub: function (a, b) {
		if (void 0 !== b)return console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(a, b);
		this.x -= a.x;
		this.y -= a.y;
		this.z -= a.z;
		this.w -= a.w;
		return this
	}, subVectors: function (a, b) {
		this.x = a.x - b.x;
		this.y = a.y - b.y;
		this.z = a.z - b.z;
		this.w = a.w - b.w;
		return this
	}, multiplyScalar: function (a) {
		this.x *= a;
		this.y *= a;
		this.z *= a;
		this.w *= a;
		return this
	}, applyMatrix4: function (a) {
		var b =
			this.x, c = this.y, d = this.z, e = this.w;
		a = a.elements;
		this.x = a[0] * b + a[4] * c + a[8] * d + a[12] * e;
		this.y = a[1] * b + a[5] * c + a[9] * d + a[13] * e;
		this.z = a[2] * b + a[6] * c + a[10] * d + a[14] * e;
		this.w = a[3] * b + a[7] * c + a[11] * d + a[15] * e;
		return this
	}, divideScalar: function (a) {
		0 !== a ? (a = 1 / a, this.x *= a, this.y *= a, this.z *= a, this.w *= a) : (this.z = this.y = this.x = 0, this.w = 1);
		return this
	}, setAxisAngleFromQuaternion: function (a) {
		this.w = 2 * Math.acos(a.w);
		var b = Math.sqrt(1 - a.w * a.w);
		1E-4 > b ? (this.x = 1, this.z = this.y = 0) : (this.x = a.x / b, this.y = a.y / b, this.z = a.z / b);
		return this
	},
	setAxisAngleFromRotationMatrix: function (a) {
		var b, c, d;
		a = a.elements;
		var e = a[0];
		d = a[4];
		var f = a[8], g = a[1], h = a[5], k = a[9];
		c = a[2];
		b = a[6];
		var l = a[10];
		if (0.01 > Math.abs(d - g) && 0.01 > Math.abs(f - c) && 0.01 > Math.abs(k - b)) {
			if (0.1 > Math.abs(d + g) && 0.1 > Math.abs(f + c) && 0.1 > Math.abs(k + b) && 0.1 > Math.abs(e + h + l - 3))return this.set(1, 0, 0, 0), this;
			a = Math.PI;
			e = (e + 1) / 2;
			h = (h + 1) / 2;
			l = (l + 1) / 2;
			d = (d + g) / 4;
			f = (f + c) / 4;
			k = (k + b) / 4;
			e > h && e > l ? 0.01 > e ? (b = 0, d = c = 0.707106781) : (b = Math.sqrt(e), c = d / b, d = f / b) : h > l ? 0.01 > h ? (b = 0.707106781, c = 0, d = 0.707106781) : (c =
				Math.sqrt(h), b = d / c, d = k / c) : 0.01 > l ? (c = b = 0.707106781, d = 0) : (d = Math.sqrt(l), b = f / d, c = k / d);
			this.set(b, c, d, a);
			return this
		}
		a = Math.sqrt((b - k) * (b - k) + (f - c) * (f - c) + (g - d) * (g - d));
		0.001 > Math.abs(a) && (a = 1);
		this.x = (b - k) / a;
		this.y = (f - c) / a;
		this.z = (g - d) / a;
		this.w = Math.acos((e + h + l - 1) / 2);
		return this
	}, min: function (a) {
		this.x > a.x && (this.x = a.x);
		this.y > a.y && (this.y = a.y);
		this.z > a.z && (this.z = a.z);
		this.w > a.w && (this.w = a.w);
		return this
	}, max: function (a) {
		this.x < a.x && (this.x = a.x);
		this.y < a.y && (this.y = a.y);
		this.z < a.z && (this.z = a.z);
		this.w <
			a.w && (this.w = a.w);
		return this
	}, clamp: function (a, b) {
		this.x < a.x ? this.x = a.x : this.x > b.x && (this.x = b.x);
		this.y < a.y ? this.y = a.y : this.y > b.y && (this.y = b.y);
		this.z < a.z ? this.z = a.z : this.z > b.z && (this.z = b.z);
		this.w < a.w ? this.w = a.w : this.w > b.w && (this.w = b.w);
		return this
	}, clampScalar: function () {
		var a, b;
		return function (c, d) {
			void 0 === a && (a = new THREE.Vector4, b = new THREE.Vector4);
			a.set(c, c, c, c);
			b.set(d, d, d, d);
			return this.clamp(a, b)
		}
	}(), floor: function () {
		this.x = Math.floor(this.x);
		this.y = Math.floor(this.y);
		this.z = Math.floor(this.z);
		this.w = Math.floor(this.w);
		return this
	}, ceil: function () {
		this.x = Math.ceil(this.x);
		this.y = Math.ceil(this.y);
		this.z = Math.ceil(this.z);
		this.w = Math.ceil(this.w);
		return this
	}, round: function () {
		this.x = Math.round(this.x);
		this.y = Math.round(this.y);
		this.z = Math.round(this.z);
		this.w = Math.round(this.w);
		return this
	}, roundToZero: function () {
		this.x = 0 > this.x ? Math.ceil(this.x) : Math.floor(this.x);
		this.y = 0 > this.y ? Math.ceil(this.y) : Math.floor(this.y);
		this.z = 0 > this.z ? Math.ceil(this.z) : Math.floor(this.z);
		this.w = 0 > this.w ? Math.ceil(this.w) :
			Math.floor(this.w);
		return this
	}, negate: function () {
		this.x = -this.x;
		this.y = -this.y;
		this.z = -this.z;
		this.w = -this.w;
		return this
	}, dot: function (a) {
		return this.x * a.x + this.y * a.y + this.z * a.z + this.w * a.w
	}, lengthSq: function () {
		return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
	}, length: function () {
		return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
	}, lengthManhattan: function () {
		return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
	}, normalize: function () {
		return this.divideScalar(this.length())
	},
	setLength: function (a) {
		var b = this.length();
		0 !== b && a !== b && this.multiplyScalar(a / b);
		return this
	}, lerp: function (a, b) {
		this.x += (a.x - this.x) * b;
		this.y += (a.y - this.y) * b;
		this.z += (a.z - this.z) * b;
		this.w += (a.w - this.w) * b;
		return this
	}, equals: function (a) {
		return a.x === this.x && a.y === this.y && a.z === this.z && a.w === this.w
	}, fromArray: function (a) {
		this.x = a[0];
		this.y = a[1];
		this.z = a[2];
		this.w = a[3];
		return this
	}, toArray: function () {
		return[this.x, this.y, this.z, this.w]
	}, clone: function () {
		return new THREE.Vector4(this.x, this.y, this.z,
			this.w)
	}};
THREE.Euler = function (a, b, c, d) {
	this._x = a || 0;
	this._y = b || 0;
	this._z = c || 0;
	this._order = d || THREE.Euler.DefaultOrder
};
THREE.Euler.RotationOrders = "XYZ YZX ZXY XZY YXZ ZYX".split(" ");
THREE.Euler.DefaultOrder = "XYZ";
THREE.Euler.prototype = {constructor: THREE.Euler, _x: 0, _y: 0, _z: 0, _order: THREE.Euler.DefaultOrder, get x() {
	return this._x
}, set x(a) {
	this._x = a;
	this.onChangeCallback()
}, get y() {
	return this._y
}, set y(a) {
	this._y = a;
	this.onChangeCallback()
}, get z() {
	return this._z
}, set z(a) {
	this._z = a;
	this.onChangeCallback()
}, get order() {
	return this._order
}, set order(a) {
	this._order = a;
	this.onChangeCallback()
}, set: function (a, b, c, d) {
	this._x = a;
	this._y = b;
	this._z = c;
	this._order = d || this._order;
	this.onChangeCallback();
	return this
}, copy: function (a) {
	this._x =
		a._x;
	this._y = a._y;
	this._z = a._z;
	this._order = a._order;
	this.onChangeCallback();
	return this
}, setFromRotationMatrix: function (a, b) {
	var c = THREE.Math.clamp, d = a.elements, e = d[0], f = d[4], g = d[8], h = d[1], k = d[5], l = d[9], n = d[2], q = d[6], d = d[10];
	b = b || this._order;
	"XYZ" === b ? (this._y = Math.asin(c(g, -1, 1)), 0.99999 > Math.abs(g) ? (this._x = Math.atan2(-l, d), this._z = Math.atan2(-f, e)) : (this._x = Math.atan2(q, k), this._z = 0)) : "YXZ" === b ? (this._x = Math.asin(-c(l, -1, 1)), 0.99999 > Math.abs(l) ? (this._y = Math.atan2(g, d), this._z = Math.atan2(h, k)) :
		(this._y = Math.atan2(-n, e), this._z = 0)) : "ZXY" === b ? (this._x = Math.asin(c(q, -1, 1)), 0.99999 > Math.abs(q) ? (this._y = Math.atan2(-n, d), this._z = Math.atan2(-f, k)) : (this._y = 0, this._z = Math.atan2(h, e))) : "ZYX" === b ? (this._y = Math.asin(-c(n, -1, 1)), 0.99999 > Math.abs(n) ? (this._x = Math.atan2(q, d), this._z = Math.atan2(h, e)) : (this._x = 0, this._z = Math.atan2(-f, k))) : "YZX" === b ? (this._z = Math.asin(c(h, -1, 1)), 0.99999 > Math.abs(h) ? (this._x = Math.atan2(-l, k), this._y = Math.atan2(-n, e)) : (this._x = 0, this._y = Math.atan2(g, d))) : "XZY" === b ? (this._z =
		Math.asin(-c(f, -1, 1)), 0.99999 > Math.abs(f) ? (this._x = Math.atan2(q, k), this._y = Math.atan2(g, e)) : (this._x = Math.atan2(-l, d), this._y = 0)) : console.warn("THREE.Euler: .setFromRotationMatrix() given unsupported order: " + b);
	this._order = b;
	this.onChangeCallback();
	return this
}, setFromQuaternion: function (a, b, c) {
	var d = THREE.Math.clamp, e = a.x * a.x, f = a.y * a.y, g = a.z * a.z, h = a.w * a.w;
	b = b || this._order;
	"XYZ" === b ? (this._x = Math.atan2(2 * (a.x * a.w - a.y * a.z), h - e - f + g), this._y = Math.asin(d(2 * (a.x * a.z + a.y * a.w), -1, 1)), this._z = Math.atan2(2 *
		(a.z * a.w - a.x * a.y), h + e - f - g)) : "YXZ" === b ? (this._x = Math.asin(d(2 * (a.x * a.w - a.y * a.z), -1, 1)), this._y = Math.atan2(2 * (a.x * a.z + a.y * a.w), h - e - f + g), this._z = Math.atan2(2 * (a.x * a.y + a.z * a.w), h - e + f - g)) : "ZXY" === b ? (this._x = Math.asin(d(2 * (a.x * a.w + a.y * a.z), -1, 1)), this._y = Math.atan2(2 * (a.y * a.w - a.z * a.x), h - e - f + g), this._z = Math.atan2(2 * (a.z * a.w - a.x * a.y), h - e + f - g)) : "ZYX" === b ? (this._x = Math.atan2(2 * (a.x * a.w + a.z * a.y), h - e - f + g), this._y = Math.asin(d(2 * (a.y * a.w - a.x * a.z), -1, 1)), this._z = Math.atan2(2 * (a.x * a.y + a.z * a.w), h + e - f - g)) : "YZX" ===
		b ? (this._x = Math.atan2(2 * (a.x * a.w - a.z * a.y), h - e + f - g), this._y = Math.atan2(2 * (a.y * a.w - a.x * a.z), h + e - f - g), this._z = Math.asin(d(2 * (a.x * a.y + a.z * a.w), -1, 1))) : "XZY" === b ? (this._x = Math.atan2(2 * (a.x * a.w + a.y * a.z), h - e + f - g), this._y = Math.atan2(2 * (a.x * a.z + a.y * a.w), h + e - f - g), this._z = Math.asin(d(2 * (a.z * a.w - a.x * a.y), -1, 1))) : console.warn("THREE.Euler: .setFromQuaternion() given unsupported order: " + b);
	this._order = b;
	if (!1 !== c)this.onChangeCallback();
	return this
}, reorder: function () {
	var a = new THREE.Quaternion;
	return function (b) {
		a.setFromEuler(this);
		this.setFromQuaternion(a, b)
	}
}(), equals: function (a) {
	return a._x === this._x && a._y === this._y && a._z === this._z && a._order === this._order
}, fromArray: function (a) {
	this._x = a[0];
	this._y = a[1];
	this._z = a[2];
	void 0 !== a[3] && (this._order = a[3]);
	this.onChangeCallback();
	return this
}, toArray: function () {
	return[this._x, this._y, this._z, this._order]
}, onChange: function (a) {
	this.onChangeCallback = a;
	return this
}, onChangeCallback: function () {
}, clone: function () {
	return new THREE.Euler(this._x, this._y, this._z, this._order)
}};
THREE.Line3 = function (a, b) {
	this.start = void 0 !== a ? a : new THREE.Vector3;
	this.end = void 0 !== b ? b : new THREE.Vector3
};
THREE.Line3.prototype = {constructor: THREE.Line3, set: function (a, b) {
	this.start.copy(a);
	this.end.copy(b);
	return this
}, copy: function (a) {
	this.start.copy(a.start);
	this.end.copy(a.end);
	return this
}, center: function (a) {
	return(a || new THREE.Vector3).addVectors(this.start, this.end).multiplyScalar(0.5)
}, delta: function (a) {
	return(a || new THREE.Vector3).subVectors(this.end, this.start)
}, distanceSq: function () {
	return this.start.distanceToSquared(this.end)
}, distance: function () {
	return this.start.distanceTo(this.end)
}, at: function (a, b) {
	var c = b || new THREE.Vector3;
	return this.delta(c).multiplyScalar(a).add(this.start)
}, closestPointToPointParameter: function () {
	var a = new THREE.Vector3, b = new THREE.Vector3;
	return function (c, d) {
		a.subVectors(c, this.start);
		b.subVectors(this.end, this.start);
		var e = b.dot(b), e = b.dot(a) / e;
		d && (e = THREE.Math.clamp(e, 0, 1));
		return e
	}
}(), closestPointToPoint: function (a, b, c) {
	a = this.closestPointToPointParameter(a, b);
	c = c || new THREE.Vector3;
	return this.delta(c).multiplyScalar(a).add(this.start)
}, applyMatrix4: function (a) {
	this.start.applyMatrix4(a);
	this.end.applyMatrix4(a);
	return this
}, equals: function (a) {
	return a.start.equals(this.start) && a.end.equals(this.end)
}, clone: function () {
	return(new THREE.Line3).copy(this)
}};
THREE.Box2 = function (a, b) {
	this.min = void 0 !== a ? a : new THREE.Vector2(Infinity, Infinity);
	this.max = void 0 !== b ? b : new THREE.Vector2(-Infinity, -Infinity)
};
THREE.Box2.prototype = {constructor: THREE.Box2, set: function (a, b) {
	this.min.copy(a);
	this.max.copy(b);
	return this
}, setFromPoints: function (a) {
	this.makeEmpty();
	for (var b = 0, c = a.length; b < c; b++)this.expandByPoint(a[b]);
	return this
}, setFromCenterAndSize: function () {
	var a = new THREE.Vector2;
	return function (b, c) {
		var d = a.copy(c).multiplyScalar(0.5);
		this.min.copy(b).sub(d);
		this.max.copy(b).add(d);
		return this
	}
}(), copy: function (a) {
	this.min.copy(a.min);
	this.max.copy(a.max);
	return this
}, makeEmpty: function () {
	this.min.x =
		this.min.y = Infinity;
	this.max.x = this.max.y = -Infinity;
	return this
}, empty: function () {
	return this.max.x < this.min.x || this.max.y < this.min.y
}, center: function (a) {
	return(a || new THREE.Vector2).addVectors(this.min, this.max).multiplyScalar(0.5)
}, size: function (a) {
	return(a || new THREE.Vector2).subVectors(this.max, this.min)
}, expandByPoint: function (a) {
	this.min.min(a);
	this.max.max(a);
	return this
}, expandByVector: function (a) {
	this.min.sub(a);
	this.max.add(a);
	return this
}, expandByScalar: function (a) {
	this.min.addScalar(-a);
	this.max.addScalar(a);
	return this
}, containsPoint: function (a) {
	return a.x < this.min.x || a.x > this.max.x || a.y < this.min.y || a.y > this.max.y ? !1 : !0
}, containsBox: function (a) {
	return this.min.x <= a.min.x && a.max.x <= this.max.x && this.min.y <= a.min.y && a.max.y <= this.max.y ? !0 : !1
}, getParameter: function (a, b) {
	return(b || new THREE.Vector2).set((a.x - this.min.x) / (this.max.x - this.min.x), (a.y - this.min.y) / (this.max.y - this.min.y))
}, isIntersectionBox: function (a) {
	return a.max.x < this.min.x || a.min.x > this.max.x || a.max.y < this.min.y || a.min.y >
		this.max.y ? !1 : !0
}, clampPoint: function (a, b) {
	return(b || new THREE.Vector2).copy(a).clamp(this.min, this.max)
}, distanceToPoint: function () {
	var a = new THREE.Vector2;
	return function (b) {
		return a.copy(b).clamp(this.min, this.max).sub(b).length()
	}
}(), intersect: function (a) {
	this.min.max(a.min);
	this.max.min(a.max);
	return this
}, union: function (a) {
	this.min.min(a.min);
	this.max.max(a.max);
	return this
}, translate: function (a) {
	this.min.add(a);
	this.max.add(a);
	return this
}, equals: function (a) {
	return a.min.equals(this.min) &&
		a.max.equals(this.max)
}, clone: function () {
	return(new THREE.Box2).copy(this)
}};
THREE.Box3 = function (a, b) {
	this.min = void 0 !== a ? a : new THREE.Vector3(Infinity, Infinity, Infinity);
	this.max = void 0 !== b ? b : new THREE.Vector3(-Infinity, -Infinity, -Infinity)
};
THREE.Box3.prototype = {constructor: THREE.Box3, set: function (a, b) {
	this.min.copy(a);
	this.max.copy(b);
	return this
}, setFromPoints: function (a) {
	this.makeEmpty();
	for (var b = 0, c = a.length; b < c; b++)this.expandByPoint(a[b]);
	return this
}, setFromCenterAndSize: function () {
	var a = new THREE.Vector3;
	return function (b, c) {
		var d = a.copy(c).multiplyScalar(0.5);
		this.min.copy(b).sub(d);
		this.max.copy(b).add(d);
		return this
	}
}(), setFromObject: function () {
	var a = new THREE.Vector3;
	return function (b) {
		var c = this;
		b.updateMatrixWorld(!0);
		this.makeEmpty();
		b.traverse(function (b) {
			if (void 0 !== b.geometry && void 0 !== b.geometry.vertices)for (var e = b.geometry.vertices, f = 0, g = e.length; f < g; f++)a.copy(e[f]), a.applyMatrix4(b.matrixWorld), c.expandByPoint(a)
		});
		return this
	}
}(), copy: function (a) {
	this.min.copy(a.min);
	this.max.copy(a.max);
	return this
}, makeEmpty: function () {
	this.min.x = this.min.y = this.min.z = Infinity;
	this.max.x = this.max.y = this.max.z = -Infinity;
	return this
}, empty: function () {
	return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z
},
	center: function (a) {
		return(a || new THREE.Vector3).addVectors(this.min, this.max).multiplyScalar(0.5)
	}, size: function (a) {
		return(a || new THREE.Vector3).subVectors(this.max, this.min)
	}, expandByPoint: function (a) {
		this.min.min(a);
		this.max.max(a);
		return this
	}, expandByVector: function (a) {
		this.min.sub(a);
		this.max.add(a);
		return this
	}, expandByScalar: function (a) {
		this.min.addScalar(-a);
		this.max.addScalar(a);
		return this
	}, containsPoint: function (a) {
		return a.x < this.min.x || a.x > this.max.x || a.y < this.min.y || a.y > this.max.y ||
			a.z < this.min.z || a.z > this.max.z ? !1 : !0
	}, containsBox: function (a) {
		return this.min.x <= a.min.x && a.max.x <= this.max.x && this.min.y <= a.min.y && a.max.y <= this.max.y && this.min.z <= a.min.z && a.max.z <= this.max.z ? !0 : !1
	}, getParameter: function (a, b) {
		return(b || new THREE.Vector3).set((a.x - this.min.x) / (this.max.x - this.min.x), (a.y - this.min.y) / (this.max.y - this.min.y), (a.z - this.min.z) / (this.max.z - this.min.z))
	}, isIntersectionBox: function (a) {
		return a.max.x < this.min.x || a.min.x > this.max.x || a.max.y < this.min.y || a.min.y > this.max.y ||
			a.max.z < this.min.z || a.min.z > this.max.z ? !1 : !0
	}, clampPoint: function (a, b) {
		return(b || new THREE.Vector3).copy(a).clamp(this.min, this.max)
	}, distanceToPoint: function () {
		var a = new THREE.Vector3;
		return function (b) {
			return a.copy(b).clamp(this.min, this.max).sub(b).length()
		}
	}(), getBoundingSphere: function () {
		var a = new THREE.Vector3;
		return function (b) {
			b = b || new THREE.Sphere;
			b.center = this.center();
			b.radius = 0.5 * this.size(a).length();
			return b
		}
	}(), intersect: function (a) {
		this.min.max(a.min);
		this.max.min(a.max);
		return this
	},
	union: function (a) {
		this.min.min(a.min);
		this.max.max(a.max);
		return this
	}, applyMatrix4: function () {
		var a = [new THREE.Vector3, new THREE.Vector3, new THREE.Vector3, new THREE.Vector3, new THREE.Vector3, new THREE.Vector3, new THREE.Vector3, new THREE.Vector3];
		return function (b) {
			a[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(b);
			a[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(b);
			a[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(b);
			a[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(b);
			a[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(b);
			a[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(b);
			a[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(b);
			a[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(b);
			this.makeEmpty();
			this.setFromPoints(a);
			return this
		}
	}(), translate: function (a) {
		this.min.add(a);
		this.max.add(a);
		return this
	}, equals: function (a) {
		return a.min.equals(this.min) && a.max.equals(this.max)
	}, clone: function () {
		return(new THREE.Box3).copy(this)
	}};
THREE.Matrix3 = function (a, b, c, d, e, f, g, h, k) {
	var l = this.elements = new Float32Array(9);
	l[0] = void 0 !== a ? a : 1;
	l[3] = b || 0;
	l[6] = c || 0;
	l[1] = d || 0;
	l[4] = void 0 !== e ? e : 1;
	l[7] = f || 0;
	l[2] = g || 0;
	l[5] = h || 0;
	l[8] = void 0 !== k ? k : 1
};
THREE.Matrix3.prototype = {constructor: THREE.Matrix3, set: function (a, b, c, d, e, f, g, h, k) {
	var l = this.elements;
	l[0] = a;
	l[3] = b;
	l[6] = c;
	l[1] = d;
	l[4] = e;
	l[7] = f;
	l[2] = g;
	l[5] = h;
	l[8] = k;
	return this
}, identity: function () {
	this.set(1, 0, 0, 0, 1, 0, 0, 0, 1);
	return this
}, copy: function (a) {
	a = a.elements;
	this.set(a[0], a[3], a[6], a[1], a[4], a[7], a[2], a[5], a[8]);
	return this
}, multiplyVector3: function (a) {
	console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead.");
	return a.applyMatrix3(this)
},
	multiplyVector3Array: function (a) {
		console.warn("THREE.Matrix3: .multiplyVector3Array() has been renamed. Use matrix.applyToVector3Array( array ) instead.");
		return this.applyToVector3Array(a)
	}, applyToVector3Array: function () {
		var a = new THREE.Vector3;
		return function (b, c, d) {
			void 0 === c && (c = 0);
			void 0 === d && (d = b.length);
			for (var e = 0; e < d; e += 3, c += 3)a.x = b[c], a.y = b[c + 1], a.z = b[c + 2], a.applyMatrix3(this), b[c] = a.x, b[c + 1] = a.y, b[c + 2] = a.z;
			return b
		}
	}(), multiplyScalar: function (a) {
		var b = this.elements;
		b[0] *= a;
		b[3] *= a;
		b[6] *=
			a;
		b[1] *= a;
		b[4] *= a;
		b[7] *= a;
		b[2] *= a;
		b[5] *= a;
		b[8] *= a;
		return this
	}, determinant: function () {
		var a = this.elements, b = a[0], c = a[1], d = a[2], e = a[3], f = a[4], g = a[5], h = a[6], k = a[7], a = a[8];
		return b * f * a - b * g * k - c * e * a + c * g * h + d * e * k - d * f * h
	}, getInverse: function (a, b) {
		var c = a.elements, d = this.elements;
		d[0] = c[10] * c[5] - c[6] * c[9];
		d[1] = -c[10] * c[1] + c[2] * c[9];
		d[2] = c[6] * c[1] - c[2] * c[5];
		d[3] = -c[10] * c[4] + c[6] * c[8];
		d[4] = c[10] * c[0] - c[2] * c[8];
		d[5] = -c[6] * c[0] + c[2] * c[4];
		d[6] = c[9] * c[4] - c[5] * c[8];
		d[7] = -c[9] * c[0] + c[1] * c[8];
		d[8] = c[5] * c[0] - c[1] * c[4];
		c = c[0] * d[0] + c[1] * d[3] + c[2] * d[6];
		if (0 === c) {
			if (b)throw Error("Matrix3.getInverse(): can't invert matrix, determinant is 0");
			console.warn("Matrix3.getInverse(): can't invert matrix, determinant is 0");
			this.identity();
			return this
		}
		this.multiplyScalar(1 / c);
		return this
	}, transpose: function () {
		var a, b = this.elements;
		a = b[1];
		b[1] = b[3];
		b[3] = a;
		a = b[2];
		b[2] = b[6];
		b[6] = a;
		a = b[5];
		b[5] = b[7];
		b[7] = a;
		return this
	}, flattenToArrayOffset: function (a, b) {
		var c = this.elements;
		a[b] = c[0];
		a[b + 1] = c[1];
		a[b + 2] = c[2];
		a[b + 3] = c[3];
		a[b + 4] = c[4];
		a[b + 5] = c[5];
		a[b + 6] = c[6];
		a[b + 7] = c[7];
		a[b + 8] = c[8];
		return a
	}, getNormalMatrix: function (a) {
		this.getInverse(a).transpose();
		return this
	}, transposeIntoArray: function (a) {
		var b = this.elements;
		a[0] = b[0];
		a[1] = b[3];
		a[2] = b[6];
		a[3] = b[1];
		a[4] = b[4];
		a[5] = b[7];
		a[6] = b[2];
		a[7] = b[5];
		a[8] = b[8];
		return this
	}, fromArray: function (a) {
		this.elements.set(a);
		return this
	}, toArray: function () {
		var a = this.elements;
		return[a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8]]
	}, clone: function () {
		var a = this.elements;
		return new THREE.Matrix3(a[0], a[3],
			a[6], a[1], a[4], a[7], a[2], a[5], a[8])
	}};
THREE.Matrix4 = function (a, b, c, d, e, f, g, h, k, l, n, q, r, t, s, p) {
	var v = this.elements = new Float32Array(16);
	v[0] = void 0 !== a ? a : 1;
	v[4] = b || 0;
	v[8] = c || 0;
	v[12] = d || 0;
	v[1] = e || 0;
	v[5] = void 0 !== f ? f : 1;
	v[9] = g || 0;
	v[13] = h || 0;
	v[2] = k || 0;
	v[6] = l || 0;
	v[10] = void 0 !== n ? n : 1;
	v[14] = q || 0;
	v[3] = r || 0;
	v[7] = t || 0;
	v[11] = s || 0;
	v[15] = void 0 !== p ? p : 1
};
THREE.Matrix4.prototype = {constructor: THREE.Matrix4, set: function (a, b, c, d, e, f, g, h, k, l, n, q, r, t, s, p) {
	var v = this.elements;
	v[0] = a;
	v[4] = b;
	v[8] = c;
	v[12] = d;
	v[1] = e;
	v[5] = f;
	v[9] = g;
	v[13] = h;
	v[2] = k;
	v[6] = l;
	v[10] = n;
	v[14] = q;
	v[3] = r;
	v[7] = t;
	v[11] = s;
	v[15] = p;
	return this
}, identity: function () {
	this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
	return this
}, copy: function (a) {
	this.elements.set(a.elements);
	return this
}, extractPosition: function (a) {
	console.warn("THREEMatrix4: .extractPosition() has been renamed to .copyPosition().");
	return this.copyPosition(a)
},
	copyPosition: function (a) {
		var b = this.elements;
		a = a.elements;
		b[12] = a[12];
		b[13] = a[13];
		b[14] = a[14];
		return this
	}, extractRotation: function () {
		var a = new THREE.Vector3;
		return function (b) {
			var c = this.elements;
			b = b.elements;
			var d = 1 / a.set(b[0], b[1], b[2]).length(), e = 1 / a.set(b[4], b[5], b[6]).length(), f = 1 / a.set(b[8], b[9], b[10]).length();
			c[0] = b[0] * d;
			c[1] = b[1] * d;
			c[2] = b[2] * d;
			c[4] = b[4] * e;
			c[5] = b[5] * e;
			c[6] = b[6] * e;
			c[8] = b[8] * f;
			c[9] = b[9] * f;
			c[10] = b[10] * f;
			return this
		}
	}(), makeRotationFromEuler: function (a) {
		!1 === a instanceof THREE.Euler &&
		console.error("THREE.Matrix: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");
		var b = this.elements, c = a.x, d = a.y, e = a.z, f = Math.cos(c), c = Math.sin(c), g = Math.cos(d), d = Math.sin(d), h = Math.cos(e), e = Math.sin(e);
		if ("XYZ" === a.order) {
			a = f * h;
			var k = f * e, l = c * h, n = c * e;
			b[0] = g * h;
			b[4] = -g * e;
			b[8] = d;
			b[1] = k + l * d;
			b[5] = a - n * d;
			b[9] = -c * g;
			b[2] = n - a * d;
			b[6] = l + k * d;
			b[10] = f * g
		} else"YXZ" === a.order ? (a = g * h, k = g * e, l = d * h, n = d * e, b[0] = a + n * c, b[4] = l * c - k, b[8] = f * d, b[1] = f * e, b[5] = f * h, b[9] = -c, b[2] = k * c - l, b[6] = n + a * c,
			b[10] = f * g) : "ZXY" === a.order ? (a = g * h, k = g * e, l = d * h, n = d * e, b[0] = a - n * c, b[4] = -f * e, b[8] = l + k * c, b[1] = k + l * c, b[5] = f * h, b[9] = n - a * c, b[2] = -f * d, b[6] = c, b[10] = f * g) : "ZYX" === a.order ? (a = f * h, k = f * e, l = c * h, n = c * e, b[0] = g * h, b[4] = l * d - k, b[8] = a * d + n, b[1] = g * e, b[5] = n * d + a, b[9] = k * d - l, b[2] = -d, b[6] = c * g, b[10] = f * g) : "YZX" === a.order ? (a = f * g, k = f * d, l = c * g, n = c * d, b[0] = g * h, b[4] = n - a * e, b[8] = l * e + k, b[1] = e, b[5] = f * h, b[9] = -c * h, b[2] = -d * h, b[6] = k * e + l, b[10] = a - n * e) : "XZY" === a.order && (a = f * g, k = f * d, l = c * g, n = c * d, b[0] = g * h, b[4] = -e, b[8] = d * h, b[1] = a * e + n, b[5] = f * h, b[9] = k *
			e - l, b[2] = l * e - k, b[6] = c * h, b[10] = n * e + a);
		b[3] = 0;
		b[7] = 0;
		b[11] = 0;
		b[12] = 0;
		b[13] = 0;
		b[14] = 0;
		b[15] = 1;
		return this
	}, setRotationFromQuaternion: function (a) {
		console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion().");
		return this.makeRotationFromQuaternion(a)
	}, makeRotationFromQuaternion: function (a) {
		var b = this.elements, c = a.x, d = a.y, e = a.z, f = a.w, g = c + c, h = d + d, k = e + e;
		a = c * g;
		var l = c * h, c = c * k, n = d * h, d = d * k, e = e * k, g = f * g, h = f * h, f = f * k;
		b[0] = 1 - (n + e);
		b[4] = l - f;
		b[8] = c + h;
		b[1] = l + f;
		b[5] = 1 -
			(a + e);
		b[9] = d - g;
		b[2] = c - h;
		b[6] = d + g;
		b[10] = 1 - (a + n);
		b[3] = 0;
		b[7] = 0;
		b[11] = 0;
		b[12] = 0;
		b[13] = 0;
		b[14] = 0;
		b[15] = 1;
		return this
	}, lookAt: function () {
		var a = new THREE.Vector3, b = new THREE.Vector3, c = new THREE.Vector3;
		return function (d, e, f) {
			var g = this.elements;
			c.subVectors(d, e).normalize();
			0 === c.length() && (c.z = 1);
			a.crossVectors(f, c).normalize();
			0 === a.length() && (c.x += 1E-4, a.crossVectors(f, c).normalize());
			b.crossVectors(c, a);
			g[0] = a.x;
			g[4] = b.x;
			g[8] = c.x;
			g[1] = a.y;
			g[5] = b.y;
			g[9] = c.y;
			g[2] = a.z;
			g[6] = b.z;
			g[10] = c.z;
			return this
		}
	}(),
	multiply: function (a, b) {
		return void 0 !== b ? (console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."), this.multiplyMatrices(a, b)) : this.multiplyMatrices(this, a)
	}, multiplyMatrices: function (a, b) {
		var c = a.elements, d = b.elements, e = this.elements, f = c[0], g = c[4], h = c[8], k = c[12], l = c[1], n = c[5], q = c[9], r = c[13], t = c[2], s = c[6], p = c[10], v = c[14], w = c[3], u = c[7], D = c[11], c = c[15], A = d[0], x = d[4], C = d[8], I = d[12], z = d[1], y = d[5], K = d[9], N = d[13], ba = d[2], P = d[6], O = d[10], J = d[14], E = d[3],
			Q = d[7], L = d[11], d = d[15];
		e[0] = f * A + g * z + h * ba + k * E;
		e[4] = f * x + g * y + h * P + k * Q;
		e[8] = f * C + g * K + h * O + k * L;
		e[12] = f * I + g * N + h * J + k * d;
		e[1] = l * A + n * z + q * ba + r * E;
		e[5] = l * x + n * y + q * P + r * Q;
		e[9] = l * C + n * K + q * O + r * L;
		e[13] = l * I + n * N + q * J + r * d;
		e[2] = t * A + s * z + p * ba + v * E;
		e[6] = t * x + s * y + p * P + v * Q;
		e[10] = t * C + s * K + p * O + v * L;
		e[14] = t * I + s * N + p * J + v * d;
		e[3] = w * A + u * z + D * ba + c * E;
		e[7] = w * x + u * y + D * P + c * Q;
		e[11] = w * C + u * K + D * O + c * L;
		e[15] = w * I + u * N + D * J + c * d;
		return this
	}, multiplyToArray: function (a, b, c) {
		var d = this.elements;
		this.multiplyMatrices(a, b);
		c[0] = d[0];
		c[1] = d[1];
		c[2] = d[2];
		c[3] = d[3];
		c[4] = d[4];
		c[5] = d[5];
		c[6] = d[6];
		c[7] = d[7];
		c[8] = d[8];
		c[9] = d[9];
		c[10] = d[10];
		c[11] = d[11];
		c[12] = d[12];
		c[13] = d[13];
		c[14] = d[14];
		c[15] = d[15];
		return this
	}, multiplyScalar: function (a) {
		var b = this.elements;
		b[0] *= a;
		b[4] *= a;
		b[8] *= a;
		b[12] *= a;
		b[1] *= a;
		b[5] *= a;
		b[9] *= a;
		b[13] *= a;
		b[2] *= a;
		b[6] *= a;
		b[10] *= a;
		b[14] *= a;
		b[3] *= a;
		b[7] *= a;
		b[11] *= a;
		b[15] *= a;
		return this
	}, multiplyVector3: function (a) {
		console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) or vector.applyProjection( matrix ) instead.");
		return a.applyProjection(this)
	}, multiplyVector4: function (a) {
		console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead.");
		return a.applyMatrix4(this)
	}, multiplyVector3Array: function (a) {
		console.warn("THREE.Matrix4: .multiplyVector3Array() has been renamed. Use matrix.applyToVector3Array( array ) instead.");
		return this.applyToVector3Array(a)
	}, applyToVector3Array: function () {
		var a = new THREE.Vector3;
		return function (b, c, d) {
			void 0 === c && (c = 0);
			void 0 === d && (d =
				b.length);
			for (var e = 0; e < d; e += 3, c += 3)a.x = b[c], a.y = b[c + 1], a.z = b[c + 2], a.applyMatrix4(this), b[c] = a.x, b[c + 1] = a.y, b[c + 2] = a.z;
			return b
		}
	}(), rotateAxis: function (a) {
		console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead.");
		a.transformDirection(this)
	}, crossVector: function (a) {
		console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead.");
		return a.applyMatrix4(this)
	}, determinant: function () {
		var a = this.elements, b =
			a[0], c = a[4], d = a[8], e = a[12], f = a[1], g = a[5], h = a[9], k = a[13], l = a[2], n = a[6], q = a[10], r = a[14];
		return a[3] * (+e * h * n - d * k * n - e * g * q + c * k * q + d * g * r - c * h * r) + a[7] * (+b * h * r - b * k * q + e * f * q - d * f * r + d * k * l - e * h * l) + a[11] * (+b * k * n - b * g * r - e * f * n + c * f * r + e * g * l - c * k * l) + a[15] * (-d * g * l - b * h * n + b * g * q + d * f * n - c * f * q + c * h * l)
	}, transpose: function () {
		var a = this.elements, b;
		b = a[1];
		a[1] = a[4];
		a[4] = b;
		b = a[2];
		a[2] = a[8];
		a[8] = b;
		b = a[6];
		a[6] = a[9];
		a[9] = b;
		b = a[3];
		a[3] = a[12];
		a[12] = b;
		b = a[7];
		a[7] = a[13];
		a[13] = b;
		b = a[11];
		a[11] = a[14];
		a[14] = b;
		return this
	}, flattenToArrayOffset: function (a, b) {
		var c = this.elements;
		a[b] = c[0];
		a[b + 1] = c[1];
		a[b + 2] = c[2];
		a[b + 3] = c[3];
		a[b + 4] = c[4];
		a[b + 5] = c[5];
		a[b + 6] = c[6];
		a[b + 7] = c[7];
		a[b + 8] = c[8];
		a[b + 9] = c[9];
		a[b + 10] = c[10];
		a[b + 11] = c[11];
		a[b + 12] = c[12];
		a[b + 13] = c[13];
		a[b + 14] = c[14];
		a[b + 15] = c[15];
		return a
	}, getPosition: function () {
		var a = new THREE.Vector3;
		return function () {
			console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead.");
			var b = this.elements;
			return a.set(b[12], b[13], b[14])
		}
	}(), setPosition: function (a) {
		var b =
			this.elements;
		b[12] = a.x;
		b[13] = a.y;
		b[14] = a.z;
		return this
	}, getInverse: function (a, b) {
		var c = this.elements, d = a.elements, e = d[0], f = d[4], g = d[8], h = d[12], k = d[1], l = d[5], n = d[9], q = d[13], r = d[2], t = d[6], s = d[10], p = d[14], v = d[3], w = d[7], u = d[11], d = d[15];
		c[0] = n * p * w - q * s * w + q * t * u - l * p * u - n * t * d + l * s * d;
		c[4] = h * s * w - g * p * w - h * t * u + f * p * u + g * t * d - f * s * d;
		c[8] = g * q * w - h * n * w + h * l * u - f * q * u - g * l * d + f * n * d;
		c[12] = h * n * t - g * q * t - h * l * s + f * q * s + g * l * p - f * n * p;
		c[1] = q * s * v - n * p * v - q * r * u + k * p * u + n * r * d - k * s * d;
		c[5] = g * p * v - h * s * v + h * r * u - e * p * u - g * r * d + e * s * d;
		c[9] = h * n * v - g * q * v - h * k *
			u + e * q * u + g * k * d - e * n * d;
		c[13] = g * q * r - h * n * r + h * k * s - e * q * s - g * k * p + e * n * p;
		c[2] = l * p * v - q * t * v + q * r * w - k * p * w - l * r * d + k * t * d;
		c[6] = h * t * v - f * p * v - h * r * w + e * p * w + f * r * d - e * t * d;
		c[10] = f * q * v - h * l * v + h * k * w - e * q * w - f * k * d + e * l * d;
		c[14] = h * l * r - f * q * r - h * k * t + e * q * t + f * k * p - e * l * p;
		c[3] = n * t * v - l * s * v - n * r * w + k * s * w + l * r * u - k * t * u;
		c[7] = f * s * v - g * t * v + g * r * w - e * s * w - f * r * u + e * t * u;
		c[11] = g * l * v - f * n * v - g * k * w + e * n * w + f * k * u - e * l * u;
		c[15] = f * n * r - g * l * r + g * k * t - e * n * t - f * k * s + e * l * s;
		c = e * c[0] + k * c[4] + r * c[8] + v * c[12];
		if (0 == c) {
			if (b)throw Error("Matrix4.getInverse(): can't invert matrix, determinant is 0");
			console.warn("Matrix4.getInverse(): can't invert matrix, determinant is 0");
			this.identity();
			return this
		}
		this.multiplyScalar(1 / c);
		return this
	}, translate: function (a) {
		console.warn("THREE.Matrix4: .translate() has been removed.")
	}, rotateX: function (a) {
		console.warn("THREE.Matrix4: .rotateX() has been removed.")
	}, rotateY: function (a) {
		console.warn("THREE.Matrix4: .rotateY() has been removed.")
	}, rotateZ: function (a) {
		console.warn("THREE.Matrix4: .rotateZ() has been removed.")
	}, rotateByAxis: function (a, b) {
		console.warn("THREE.Matrix4: .rotateByAxis() has been removed.")
	},
	scale: function (a) {
		var b = this.elements, c = a.x, d = a.y;
		a = a.z;
		b[0] *= c;
		b[4] *= d;
		b[8] *= a;
		b[1] *= c;
		b[5] *= d;
		b[9] *= a;
		b[2] *= c;
		b[6] *= d;
		b[10] *= a;
		b[3] *= c;
		b[7] *= d;
		b[11] *= a;
		return this
	}, getMaxScaleOnAxis: function () {
		var a = this.elements;
		return Math.sqrt(Math.max(a[0] * a[0] + a[1] * a[1] + a[2] * a[2], Math.max(a[4] * a[4] + a[5] * a[5] + a[6] * a[6], a[8] * a[8] + a[9] * a[9] + a[10] * a[10])))
	}, makeTranslation: function (a, b, c) {
		this.set(1, 0, 0, a, 0, 1, 0, b, 0, 0, 1, c, 0, 0, 0, 1);
		return this
	}, makeRotationX: function (a) {
		var b = Math.cos(a);
		a = Math.sin(a);
		this.set(1,
			0, 0, 0, 0, b, -a, 0, 0, a, b, 0, 0, 0, 0, 1);
		return this
	}, makeRotationY: function (a) {
		var b = Math.cos(a);
		a = Math.sin(a);
		this.set(b, 0, a, 0, 0, 1, 0, 0, -a, 0, b, 0, 0, 0, 0, 1);
		return this
	}, makeRotationZ: function (a) {
		var b = Math.cos(a);
		a = Math.sin(a);
		this.set(b, -a, 0, 0, a, b, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
		return this
	}, makeRotationAxis: function (a, b) {
		var c = Math.cos(b), d = Math.sin(b), e = 1 - c, f = a.x, g = a.y, h = a.z, k = e * f, l = e * g;
		this.set(k * f + c, k * g - d * h, k * h + d * g, 0, k * g + d * h, l * g + c, l * h - d * f, 0, k * h - d * g, l * h + d * f, e * h * h + c, 0, 0, 0, 0, 1);
		return this
	}, makeScale: function (a, b, c) {
		this.set(a,
			0, 0, 0, 0, b, 0, 0, 0, 0, c, 0, 0, 0, 0, 1);
		return this
	}, compose: function (a, b, c) {
		this.makeRotationFromQuaternion(b);
		this.scale(c);
		this.setPosition(a);
		return this
	}, decompose: function () {
		var a = new THREE.Vector3, b = new THREE.Matrix4;
		return function (c, d, e) {
			var f = this.elements, g = a.set(f[0], f[1], f[2]).length(), h = a.set(f[4], f[5], f[6]).length(), k = a.set(f[8], f[9], f[10]).length();
			0 > this.determinant() && (g = -g);
			c.x = f[12];
			c.y = f[13];
			c.z = f[14];
			b.elements.set(this.elements);
			c = 1 / g;
			var f = 1 / h, l = 1 / k;
			b.elements[0] *= c;
			b.elements[1] *=
				c;
			b.elements[2] *= c;
			b.elements[4] *= f;
			b.elements[5] *= f;
			b.elements[6] *= f;
			b.elements[8] *= l;
			b.elements[9] *= l;
			b.elements[10] *= l;
			d.setFromRotationMatrix(b);
			e.x = g;
			e.y = h;
			e.z = k;
			return this
		}
	}(), makeFrustum: function (a, b, c, d, e, f) {
		var g = this.elements;
		g[0] = 2 * e / (b - a);
		g[4] = 0;
		g[8] = (b + a) / (b - a);
		g[12] = 0;
		g[1] = 0;
		g[5] = 2 * e / (d - c);
		g[9] = (d + c) / (d - c);
		g[13] = 0;
		g[2] = 0;
		g[6] = 0;
		g[10] = -(f + e) / (f - e);
		g[14] = -2 * f * e / (f - e);
		g[3] = 0;
		g[7] = 0;
		g[11] = -1;
		g[15] = 0;
		return this
	}, makePerspective: function (a, b, c, d) {
		a = c * Math.tan(THREE.Math.degToRad(0.5 * a));
		var e = -a;
		return this.makeFrustum(e * b, a * b, e, a, c, d)
	}, makeOrthographic: function (a, b, c, d, e, f) {
		var g = this.elements, h = b - a, k = c - d, l = f - e;
		g[0] = 2 / h;
		g[4] = 0;
		g[8] = 0;
		g[12] = -((b + a) / h);
		g[1] = 0;
		g[5] = 2 / k;
		g[9] = 0;
		g[13] = -((c + d) / k);
		g[2] = 0;
		g[6] = 0;
		g[10] = -2 / l;
		g[14] = -((f + e) / l);
		g[3] = 0;
		g[7] = 0;
		g[11] = 0;
		g[15] = 1;
		return this
	}, fromArray: function (a) {
		this.elements.set(a);
		return this
	}, toArray: function () {
		var a = this.elements;
		return[a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8], a[9], a[10], a[11], a[12], a[13], a[14], a[15]]
	}, clone: function () {
		var a =
			this.elements;
		return new THREE.Matrix4(a[0], a[4], a[8], a[12], a[1], a[5], a[9], a[13], a[2], a[6], a[10], a[14], a[3], a[7], a[11], a[15])
	}};
THREE.Ray = function (a, b) {
	this.origin = void 0 !== a ? a : new THREE.Vector3;
	this.direction = void 0 !== b ? b : new THREE.Vector3
};
THREE.Ray.prototype = {constructor: THREE.Ray, set: function (a, b) {
	this.origin.copy(a);
	this.direction.copy(b);
	return this
}, copy: function (a) {
	this.origin.copy(a.origin);
	this.direction.copy(a.direction);
	return this
}, at: function (a, b) {
	return(b || new THREE.Vector3).copy(this.direction).multiplyScalar(a).add(this.origin)
}, recast: function () {
	var a = new THREE.Vector3;
	return function (b) {
		this.origin.copy(this.at(b, a));
		return this
	}
}(), closestPointToPoint: function (a, b) {
	var c = b || new THREE.Vector3;
	c.subVectors(a, this.origin);
	var d = c.dot(this.direction);
	return 0 > d ? c.copy(this.origin) : c.copy(this.direction).multiplyScalar(d).add(this.origin)
}, distanceToPoint: function () {
	var a = new THREE.Vector3;
	return function (b) {
		var c = a.subVectors(b, this.origin).dot(this.direction);
		if (0 > c)return this.origin.distanceTo(b);
		a.copy(this.direction).multiplyScalar(c).add(this.origin);
		return a.distanceTo(b)
	}
}(), distanceSqToSegment: function (a, b, c, d) {
	var e = a.clone().add(b).multiplyScalar(0.5), f = b.clone().sub(a).normalize(), g = 0.5 * a.distanceTo(b),
		h = this.origin.clone().sub(e);
	a = -this.direction.dot(f);
	b = h.dot(this.direction);
	var k = -h.dot(f), l = h.lengthSq(), n = Math.abs(1 - a * a), q, r;
	0 <= n ? (h = a * k - b, q = a * b - k, r = g * n, 0 <= h ? q >= -r ? q <= r ? (g = 1 / n, h *= g, q *= g, a = h * (h + a * q + 2 * b) + q * (a * h + q + 2 * k) + l) : (q = g, h = Math.max(0, -(a * q + b)), a = -h * h + q * (q + 2 * k) + l) : (q = -g, h = Math.max(0, -(a * q + b)), a = -h * h + q * (q + 2 * k) + l) : q <= -r ? (h = Math.max(0, -(-a * g + b)), q = 0 < h ? -g : Math.min(Math.max(-g, -k), g), a = -h * h + q * (q + 2 * k) + l) : q <= r ? (h = 0, q = Math.min(Math.max(-g, -k), g), a = q * (q + 2 * k) + l) : (h = Math.max(0, -(a * g + b)), q = 0 < h ? g : Math.min(Math.max(-g,
		-k), g), a = -h * h + q * (q + 2 * k) + l)) : (q = 0 < a ? -g : g, h = Math.max(0, -(a * q + b)), a = -h * h + q * (q + 2 * k) + l);
	c && c.copy(this.direction.clone().multiplyScalar(h).add(this.origin));
	d && d.copy(f.clone().multiplyScalar(q).add(e));
	return a
}, isIntersectionSphere: function (a) {
	return this.distanceToPoint(a.center) <= a.radius
}, intersectSphere: function () {
	var a = new THREE.Vector3;
	return function (b, c) {
		a.subVectors(b.center, this.origin);
		var d = a.dot(this.direction), e = a.dot(a) - d * d, f = b.radius * b.radius;
		if (e > f)return null;
		f = Math.sqrt(f - e);
		e = d - f;
		d += f;
		return 0 > e && 0 > d ? null : 0 > e ? this.at(d, c) : this.at(e, c)
	}
}(), isIntersectionPlane: function (a) {
	var b = a.distanceToPoint(this.origin);
	return 0 === b || 0 > a.normal.dot(this.direction) * b ? !0 : !1
}, distanceToPlane: function (a) {
	var b = a.normal.dot(this.direction);
	if (0 == b)return 0 == a.distanceToPoint(this.origin) ? 0 : null;
	a = -(this.origin.dot(a.normal) + a.constant) / b;
	return 0 <= a ? a : null
}, intersectPlane: function (a, b) {
	var c = this.distanceToPlane(a);
	return null === c ? null : this.at(c, b)
}, isIntersectionBox: function () {
	var a = new THREE.Vector3;
	return function (b) {
		return null !== this.intersectBox(b, a)
	}
}(), intersectBox: function (a, b) {
	var c, d, e, f, g;
	d = 1 / this.direction.x;
	f = 1 / this.direction.y;
	g = 1 / this.direction.z;
	var h = this.origin;
	0 <= d ? (c = (a.min.x - h.x) * d, d *= a.max.x - h.x) : (c = (a.max.x - h.x) * d, d *= a.min.x - h.x);
	0 <= f ? (e = (a.min.y - h.y) * f, f *= a.max.y - h.y) : (e = (a.max.y - h.y) * f, f *= a.min.y - h.y);
	if (c > f || e > d)return null;
	if (e > c || c !== c)c = e;
	if (f < d || d !== d)d = f;
	0 <= g ? (e = (a.min.z - h.z) * g, g *= a.max.z - h.z) : (e = (a.max.z - h.z) * g, g *= a.min.z - h.z);
	if (c > g || e > d)return null;
	if (e > c || c !==
		c)c = e;
	if (g < d || d !== d)d = g;
	return 0 > d ? null : this.at(0 <= c ? c : d, b)
}, intersectTriangle: function () {
	var a = new THREE.Vector3, b = new THREE.Vector3, c = new THREE.Vector3, d = new THREE.Vector3;
	return function (e, f, g, h, k) {
		b.subVectors(f, e);
		c.subVectors(g, e);
		d.crossVectors(b, c);
		f = this.direction.dot(d);
		if (0 < f) {
			if (h)return null;
			h = 1
		} else if (0 > f)h = -1, f = -f; else return null;
		a.subVectors(this.origin, e);
		e = h * this.direction.dot(c.crossVectors(a, c));
		if (0 > e)return null;
		g = h * this.direction.dot(b.cross(a));
		if (0 > g || e + g > f)return null;
		e = -h * a.dot(d);
		return 0 > e ? null : this.at(e / f, k)
	}
}(), applyMatrix4: function (a) {
	this.direction.add(this.origin).applyMatrix4(a);
	this.origin.applyMatrix4(a);
	this.direction.sub(this.origin);
	this.direction.normalize();
	return this
}, equals: function (a) {
	return a.origin.equals(this.origin) && a.direction.equals(this.direction)
}, clone: function () {
	return(new THREE.Ray).copy(this)
}};
THREE.Sphere = function (a, b) {
	this.center = void 0 !== a ? a : new THREE.Vector3;
	this.radius = void 0 !== b ? b : 0
};
THREE.Sphere.prototype = {constructor: THREE.Sphere, set: function (a, b) {
	this.center.copy(a);
	this.radius = b;
	return this
}, setFromPoints: function () {
	var a = new THREE.Box3;
	return function (b, c) {
		var d = this.center;
		void 0 !== c ? d.copy(c) : a.setFromPoints(b).center(d);
		for (var e = 0, f = 0, g = b.length; f < g; f++)e = Math.max(e, d.distanceToSquared(b[f]));
		this.radius = Math.sqrt(e);
		return this
	}
}(), copy: function (a) {
	this.center.copy(a.center);
	this.radius = a.radius;
	return this
}, empty: function () {
	return 0 >= this.radius
}, containsPoint: function (a) {
	return a.distanceToSquared(this.center) <=
		this.radius * this.radius
}, distanceToPoint: function (a) {
	return a.distanceTo(this.center) - this.radius
}, intersectsSphere: function (a) {
	var b = this.radius + a.radius;
	return a.center.distanceToSquared(this.center) <= b * b
}, clampPoint: function (a, b) {
	var c = this.center.distanceToSquared(a), d = b || new THREE.Vector3;
	d.copy(a);
	c > this.radius * this.radius && (d.sub(this.center).normalize(), d.multiplyScalar(this.radius).add(this.center));
	return d
}, getBoundingBox: function (a) {
	a = a || new THREE.Box3;
	a.set(this.center, this.center);
	a.expandByScalar(this.radius);
	return a
}, applyMatrix4: function (a) {
	this.center.applyMatrix4(a);
	this.radius *= a.getMaxScaleOnAxis();
	return this
}, translate: function (a) {
	this.center.add(a);
	return this
}, equals: function (a) {
	return a.center.equals(this.center) && a.radius === this.radius
}, clone: function () {
	return(new THREE.Sphere).copy(this)
}};
THREE.Frustum = function (a, b, c, d, e, f) {
	this.planes = [void 0 !== a ? a : new THREE.Plane, void 0 !== b ? b : new THREE.Plane, void 0 !== c ? c : new THREE.Plane, void 0 !== d ? d : new THREE.Plane, void 0 !== e ? e : new THREE.Plane, void 0 !== f ? f : new THREE.Plane]
};
THREE.Frustum.prototype = {constructor: THREE.Frustum, set: function (a, b, c, d, e, f) {
	var g = this.planes;
	g[0].copy(a);
	g[1].copy(b);
	g[2].copy(c);
	g[3].copy(d);
	g[4].copy(e);
	g[5].copy(f);
	return this
}, copy: function (a) {
	for (var b = this.planes, c = 0; 6 > c; c++)b[c].copy(a.planes[c]);
	return this
}, setFromMatrix: function (a) {
	var b = this.planes, c = a.elements;
	a = c[0];
	var d = c[1], e = c[2], f = c[3], g = c[4], h = c[5], k = c[6], l = c[7], n = c[8], q = c[9], r = c[10], t = c[11], s = c[12], p = c[13], v = c[14], c = c[15];
	b[0].setComponents(f - a, l - g, t - n, c - s).normalize();
	b[1].setComponents(f +
		a, l + g, t + n, c + s).normalize();
	b[2].setComponents(f + d, l + h, t + q, c + p).normalize();
	b[3].setComponents(f - d, l - h, t - q, c - p).normalize();
	b[4].setComponents(f - e, l - k, t - r, c - v).normalize();
	b[5].setComponents(f + e, l + k, t + r, c + v).normalize();
	return this
}, intersectsObject: function () {
	var a = new THREE.Sphere;
	return function (b) {
		var c = b.geometry;
		null === c.boundingSphere && c.computeBoundingSphere();
		a.copy(c.boundingSphere);
		a.applyMatrix4(b.matrixWorld);
		return this.intersectsSphere(a)
	}
}(), intersectsSphere: function (a) {
	var b = this.planes,
		c = a.center;
	a = -a.radius;
	for (var d = 0; 6 > d; d++)if (b[d].distanceToPoint(c) < a)return!1;
	return!0
}, intersectsBox: function () {
	var a = new THREE.Vector3, b = new THREE.Vector3;
	return function (c) {
		for (var d = this.planes, e = 0; 6 > e; e++) {
			var f = d[e];
			a.x = 0 < f.normal.x ? c.min.x : c.max.x;
			b.x = 0 < f.normal.x ? c.max.x : c.min.x;
			a.y = 0 < f.normal.y ? c.min.y : c.max.y;
			b.y = 0 < f.normal.y ? c.max.y : c.min.y;
			a.z = 0 < f.normal.z ? c.min.z : c.max.z;
			b.z = 0 < f.normal.z ? c.max.z : c.min.z;
			var g = f.distanceToPoint(a), f = f.distanceToPoint(b);
			if (0 > g && 0 > f)return!1
		}
		return!0
	}
}(),
	containsPoint: function (a) {
		for (var b = this.planes, c = 0; 6 > c; c++)if (0 > b[c].distanceToPoint(a))return!1;
		return!0
	}, clone: function () {
		return(new THREE.Frustum).copy(this)
	}};
THREE.Plane = function (a, b) {
	this.normal = void 0 !== a ? a : new THREE.Vector3(1, 0, 0);
	this.constant = void 0 !== b ? b : 0
};
THREE.Plane.prototype = {constructor: THREE.Plane, set: function (a, b) {
	this.normal.copy(a);
	this.constant = b;
	return this
}, setComponents: function (a, b, c, d) {
	this.normal.set(a, b, c);
	this.constant = d;
	return this
}, setFromNormalAndCoplanarPoint: function (a, b) {
	this.normal.copy(a);
	this.constant = -b.dot(this.normal);
	return this
}, setFromCoplanarPoints: function () {
	var a = new THREE.Vector3, b = new THREE.Vector3;
	return function (c, d, e) {
		d = a.subVectors(e, d).cross(b.subVectors(c, d)).normalize();
		this.setFromNormalAndCoplanarPoint(d,
			c);
		return this
	}
}(), copy: function (a) {
	this.normal.copy(a.normal);
	this.constant = a.constant;
	return this
}, normalize: function () {
	var a = 1 / this.normal.length();
	this.normal.multiplyScalar(a);
	this.constant *= a;
	return this
}, negate: function () {
	this.constant *= -1;
	this.normal.negate();
	return this
}, distanceToPoint: function (a) {
	return this.normal.dot(a) + this.constant
}, distanceToSphere: function (a) {
	return this.distanceToPoint(a.center) - a.radius
}, projectPoint: function (a, b) {
	return this.orthoPoint(a, b).sub(a).negate()
}, orthoPoint: function (a, b) {
	var c = this.distanceToPoint(a);
	return(b || new THREE.Vector3).copy(this.normal).multiplyScalar(c)
}, isIntersectionLine: function (a) {
	var b = this.distanceToPoint(a.start);
	a = this.distanceToPoint(a.end);
	return 0 > b && 0 < a || 0 > a && 0 < b
}, intersectLine: function () {
	var a = new THREE.Vector3;
	return function (b, c) {
		var d = c || new THREE.Vector3, e = b.delta(a), f = this.normal.dot(e);
		if (0 == f) {
			if (0 == this.distanceToPoint(b.start))return d.copy(b.start)
		} else return f = -(b.start.dot(this.normal) + this.constant) / f, 0 > f || 1 < f ? void 0 : d.copy(e).multiplyScalar(f).add(b.start)
	}
}(),
	coplanarPoint: function (a) {
		return(a || new THREE.Vector3).copy(this.normal).multiplyScalar(-this.constant)
	}, applyMatrix4: function () {
		var a = new THREE.Vector3, b = new THREE.Vector3, c = new THREE.Matrix3;
		return function (d, e) {
			var f = e || c.getNormalMatrix(d), f = a.copy(this.normal).applyMatrix3(f), g = this.coplanarPoint(b);
			g.applyMatrix4(d);
			this.setFromNormalAndCoplanarPoint(f, g);
			return this
		}
	}(), translate: function (a) {
		this.constant -= a.dot(this.normal);
		return this
	}, equals: function (a) {
		return a.normal.equals(this.normal) &&
			a.constant == this.constant
	}, clone: function () {
		return(new THREE.Plane).copy(this)
	}};
THREE.Math = {generateUUID: function () {
	var a = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""), b = Array(36), c = 0, d;
	return function () {
		for (var e = 0; 36 > e; e++)8 == e || 13 == e || 18 == e || 23 == e ? b[e] = "-" : 14 == e ? b[e] = "4" : (2 >= c && (c = 33554432 + 16777216 * Math.random() | 0), d = c & 15, c >>= 4, b[e] = a[19 == e ? d & 3 | 8 : d]);
		return b.join("")
	}
}(), clamp: function (a, b, c) {
	return a < b ? b : a > c ? c : a
}, clampBottom: function (a, b) {
	return a < b ? b : a
}, mapLinear: function (a, b, c, d, e) {
	return d + (a - b) * (e - d) / (c - b)
}, smoothstep: function (a, b, c) {
	if (a <=
		b)return 0;
	if (a >= c)return 1;
	a = (a - b) / (c - b);
	return a * a * (3 - 2 * a)
}, smootherstep: function (a, b, c) {
	if (a <= b)return 0;
	if (a >= c)return 1;
	a = (a - b) / (c - b);
	return a * a * a * (a * (6 * a - 15) + 10)
}, random16: function () {
	return(65280 * Math.random() + 255 * Math.random()) / 65535
}, randInt: function (a, b) {
	return a + Math.floor(Math.random() * (b - a + 1))
}, randFloat: function (a, b) {
	return a + Math.random() * (b - a)
}, randFloatSpread: function (a) {
	return a * (0.5 - Math.random())
}, sign: function (a) {
	return 0 > a ? -1 : 0 < a ? 1 : 0
}, degToRad: function () {
	var a = Math.PI / 180;
	return function (b) {
		return b *
			a
	}
}(), radToDeg: function () {
	var a = 180 / Math.PI;
	return function (b) {
		return b * a
	}
}(), isPowerOfTwo: function (a) {
	return 0 === (a & a - 1) && 0 !== a
}};
THREE.Spline = function (a) {
	function b(a, b, c, d, e, f, g) {
		a = 0.5 * (c - a);
		d = 0.5 * (d - b);
		return(2 * (b - c) + a + d) * g + (-3 * (b - c) - 2 * a - d) * f + a * e + b
	}

	this.points = a;
	var c = [], d = {x: 0, y: 0, z: 0}, e, f, g, h, k, l, n, q, r;
	this.initFromArray = function (a) {
		this.points = [];
		for (var b = 0; b < a.length; b++)this.points[b] = {x: a[b][0], y: a[b][1], z: a[b][2]}
	};
	this.getPoint = function (a) {
		e = (this.points.length - 1) * a;
		f = Math.floor(e);
		g = e - f;
		c[0] = 0 === f ? f : f - 1;
		c[1] = f;
		c[2] = f > this.points.length - 2 ? this.points.length - 1 : f + 1;
		c[3] = f > this.points.length - 3 ? this.points.length - 1 :
			f + 2;
		l = this.points[c[0]];
		n = this.points[c[1]];
		q = this.points[c[2]];
		r = this.points[c[3]];
		h = g * g;
		k = g * h;
		d.x = b(l.x, n.x, q.x, r.x, g, h, k);
		d.y = b(l.y, n.y, q.y, r.y, g, h, k);
		d.z = b(l.z, n.z, q.z, r.z, g, h, k);
		return d
	};
	this.getControlPointsArray = function () {
		var a, b, c = this.points.length, d = [];
		for (a = 0; a < c; a++)b = this.points[a], d[a] = [b.x, b.y, b.z];
		return d
	};
	this.getLength = function (a) {
		var b, c, d, e = b = b = 0, f = new THREE.Vector3, g = new THREE.Vector3, h = [], k = 0;
		h[0] = 0;
		a || (a = 100);
		c = this.points.length * a;
		f.copy(this.points[0]);
		for (a = 1; a < c; a++)b =
			a / c, d = this.getPoint(b), g.copy(d), k += g.distanceTo(f), f.copy(d), b *= this.points.length - 1, b = Math.floor(b), b != e && (h[b] = k, e = b);
		h[h.length] = k;
		return{chunks: h, total: k}
	};
	this.reparametrizeByArcLength = function (a) {
		var b, c, d, e, f, g, h = [], k = new THREE.Vector3, l = this.getLength();
		h.push(k.copy(this.points[0]).clone());
		for (b = 1; b < this.points.length; b++) {
			c = l.chunks[b] - l.chunks[b - 1];
			g = Math.ceil(a * c / l.total);
			e = (b - 1) / (this.points.length - 1);
			f = b / (this.points.length - 1);
			for (c = 1; c < g - 1; c++)d = e + 1 / g * c * (f - e), d = this.getPoint(d), h.push(k.copy(d).clone());
			h.push(k.copy(this.points[b]).clone())
		}
		this.points = h
	}
};
THREE.Triangle = function (a, b, c) {
	this.a = void 0 !== a ? a : new THREE.Vector3;
	this.b = void 0 !== b ? b : new THREE.Vector3;
	this.c = void 0 !== c ? c : new THREE.Vector3
};
THREE.Triangle.normal = function () {
	var a = new THREE.Vector3;
	return function (b, c, d, e) {
		e = e || new THREE.Vector3;
		e.subVectors(d, c);
		a.subVectors(b, c);
		e.cross(a);
		b = e.lengthSq();
		return 0 < b ? e.multiplyScalar(1 / Math.sqrt(b)) : e.set(0, 0, 0)
	}
}();
THREE.Triangle.barycoordFromPoint = function () {
	var a = new THREE.Vector3, b = new THREE.Vector3, c = new THREE.Vector3;
	return function (d, e, f, g, h) {
		a.subVectors(g, e);
		b.subVectors(f, e);
		c.subVectors(d, e);
		d = a.dot(a);
		e = a.dot(b);
		f = a.dot(c);
		var k = b.dot(b);
		g = b.dot(c);
		var l = d * k - e * e;
		h = h || new THREE.Vector3;
		if (0 == l)return h.set(-2, -1, -1);
		l = 1 / l;
		k = (k * f - e * g) * l;
		d = (d * g - e * f) * l;
		return h.set(1 - k - d, d, k)
	}
}();
THREE.Triangle.containsPoint = function () {
	var a = new THREE.Vector3;
	return function (b, c, d, e) {
		b = THREE.Triangle.barycoordFromPoint(b, c, d, e, a);
		return 0 <= b.x && 0 <= b.y && 1 >= b.x + b.y
	}
}();
THREE.Triangle.prototype = {constructor: THREE.Triangle, set: function (a, b, c) {
	this.a.copy(a);
	this.b.copy(b);
	this.c.copy(c);
	return this
}, setFromPointsAndIndices: function (a, b, c, d) {
	this.a.copy(a[b]);
	this.b.copy(a[c]);
	this.c.copy(a[d]);
	return this
}, copy: function (a) {
	this.a.copy(a.a);
	this.b.copy(a.b);
	this.c.copy(a.c);
	return this
}, area: function () {
	var a = new THREE.Vector3, b = new THREE.Vector3;
	return function () {
		a.subVectors(this.c, this.b);
		b.subVectors(this.a, this.b);
		return 0.5 * a.cross(b).length()
	}
}(), midpoint: function (a) {
	return(a ||
		new THREE.Vector3).addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3)
}, normal: function (a) {
	return THREE.Triangle.normal(this.a, this.b, this.c, a)
}, plane: function (a) {
	return(a || new THREE.Plane).setFromCoplanarPoints(this.a, this.b, this.c)
}, barycoordFromPoint: function (a, b) {
	return THREE.Triangle.barycoordFromPoint(a, this.a, this.b, this.c, b)
}, containsPoint: function (a) {
	return THREE.Triangle.containsPoint(a, this.a, this.b, this.c)
}, equals: function (a) {
	return a.a.equals(this.a) && a.b.equals(this.b) && a.c.equals(this.c)
},
	clone: function () {
		return(new THREE.Triangle).copy(this)
	}};
THREE.Clock = function (a) {
	this.autoStart = void 0 !== a ? a : !0;
	this.elapsedTime = this.oldTime = this.startTime = 0;
	this.running = !1
};
THREE.Clock.prototype = {constructor: THREE.Clock, start: function () {
	this.oldTime = this.startTime = void 0 !== self.performance && void 0 !== self.performance.now ? self.performance.now() : Date.now();
	this.running = !0
}, stop: function () {
	this.getElapsedTime();
	this.running = !1
}, getElapsedTime: function () {
	this.getDelta();
	return this.elapsedTime
}, getDelta: function () {
	var a = 0;
	this.autoStart && !this.running && this.start();
	if (this.running) {
		var b = void 0 !== self.performance && void 0 !== self.performance.now ? self.performance.now() : Date.now(),
			a = 0.001 * (b - this.oldTime);
		this.oldTime = b;
		this.elapsedTime += a
	}
	return a
}};
THREE.EventDispatcher = function () {
};
THREE.EventDispatcher.prototype = {constructor: THREE.EventDispatcher, apply: function (a) {
	a.addEventListener = THREE.EventDispatcher.prototype.addEventListener;
	a.hasEventListener = THREE.EventDispatcher.prototype.hasEventListener;
	a.removeEventListener = THREE.EventDispatcher.prototype.removeEventListener;
	a.dispatchEvent = THREE.EventDispatcher.prototype.dispatchEvent
}, addEventListener: function (a, b) {
	void 0 === this._listeners && (this._listeners = {});
	var c = this._listeners;
	void 0 === c[a] && (c[a] = []);
	-1 === c[a].indexOf(b) &&
	c[a].push(b)
}, hasEventListener: function (a, b) {
	if (void 0 === this._listeners)return!1;
	var c = this._listeners;
	return void 0 !== c[a] && -1 !== c[a].indexOf(b) ? !0 : !1
}, removeEventListener: function (a, b) {
	if (void 0 !== this._listeners) {
		var c = this._listeners[a];
		if (void 0 !== c) {
			var d = c.indexOf(b);
			-1 !== d && c.splice(d, 1)
		}
	}
}, dispatchEvent: function (a) {
	if (void 0 !== this._listeners) {
		var b = this._listeners[a.type];
		if (void 0 !== b) {
			a.target = this;
			for (var c = [], d = b.length, e = 0; e < d; e++)c[e] = b[e];
			for (e = 0; e < d; e++)c[e].call(this, a)
		}
	}
}};
(function (a) {
	a.Raycaster = function (b, c, f, g) {
		this.ray = new a.Ray(b, c);
		this.near = f || 0;
		this.far = g || Infinity;
		this.params = {Sprite: {}, Mesh: {}, PointCloud: {threshold: 1}, LOD: {}, Line: {}}
	};
	var b = function (a, b) {
		return a.distance - b.distance
	}, c = function (a, b, f, g) {
		a.raycast(b, f);
		if (!0 === g) {
			a = a.children;
			g = 0;
			for (var h = a.length; g < h; g++)c(a[g], b, f, !0)
		}
	};
	a.Raycaster.prototype = {constructor: a.Raycaster, precision: 1E-4, linePrecision: 1, set: function (a, b) {
		this.ray.set(a, b)
	}, intersectObject: function (a, e) {
		var f = [];
		c(a, this, f, e);
		f.sort(b);
		return f
	}, intersectObjects: function (a, e) {
		for (var f = [], g = 0, h = a.length; g < h; g++)c(a[g], this, f, e);
		f.sort(b);
		return f
	}}
})(THREE);
THREE.Object3D = function () {
	this.id = THREE.Object3DIdCount++;
	this.uuid = THREE.Math.generateUUID();
	this.name = "";
	this.parent = void 0;
	this.children = [];
	this.up = THREE.Object3D.DefaultUp.clone();
	var a = new THREE.Vector3, b = new THREE.Euler, c = new THREE.Quaternion, d = new THREE.Vector3(1, 1, 1);
	b.onChange(function () {
		c.setFromEuler(b, !1)
	});
	c.onChange(function () {
		b.setFromQuaternion(c, void 0, !1)
	});
	Object.defineProperties(this, {position: {enumerable: !0, value: a}, rotation: {enumerable: !0, value: b}, quaternion: {enumerable: !0, value: c},
		scale: {enumerable: !0, value: d}});
	this.renderDepth = null;
	this.rotationAutoUpdate = !0;
	this.matrix = new THREE.Matrix4;
	this.matrixWorld = new THREE.Matrix4;
	this.matrixAutoUpdate = !0;
	this.matrixWorldNeedsUpdate = !1;
	this.visible = !0;
	this.receiveShadow = this.castShadow = !1;
	this.frustumCulled = !0;
	this.userData = {}
};
THREE.Object3D.DefaultUp = new THREE.Vector3(0, 1, 0);
THREE.Object3D.prototype = {constructor: THREE.Object3D, get eulerOrder() {
	console.warn("THREE.Object3D: .eulerOrder has been moved to .rotation.order.");
	return this.rotation.order
}, set eulerOrder(a) {
	console.warn("THREE.Object3D: .eulerOrder has been moved to .rotation.order.");
	this.rotation.order = a
}, get useQuaternion() {
	console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")
}, set useQuaternion(a) {
	console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")
},
	applyMatrix: function (a) {
		this.matrix.multiplyMatrices(a, this.matrix);
		this.matrix.decompose(this.position, this.quaternion, this.scale)
	}, setRotationFromAxisAngle: function (a, b) {
		this.quaternion.setFromAxisAngle(a, b)
	}, setRotationFromEuler: function (a) {
		this.quaternion.setFromEuler(a, !0)
	}, setRotationFromMatrix: function (a) {
		this.quaternion.setFromRotationMatrix(a)
	}, setRotationFromQuaternion: function (a) {
		this.quaternion.copy(a)
	}, rotateOnAxis: function () {
		var a = new THREE.Quaternion;
		return function (b, c) {
			a.setFromAxisAngle(b,
				c);
			this.quaternion.multiply(a);
			return this
		}
	}(), rotateX: function () {
		var a = new THREE.Vector3(1, 0, 0);
		return function (b) {
			return this.rotateOnAxis(a, b)
		}
	}(), rotateY: function () {
		var a = new THREE.Vector3(0, 1, 0);
		return function (b) {
			return this.rotateOnAxis(a, b)
		}
	}(), rotateZ: function () {
		var a = new THREE.Vector3(0, 0, 1);
		return function (b) {
			return this.rotateOnAxis(a, b)
		}
	}(), translateOnAxis: function () {
		var a = new THREE.Vector3;
		return function (b, c) {
			a.copy(b).applyQuaternion(this.quaternion);
			this.position.add(a.multiplyScalar(c));
			return this
		}
	}(), translate: function (a, b) {
		console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead.");
		return this.translateOnAxis(b, a)
	}, translateX: function () {
		var a = new THREE.Vector3(1, 0, 0);
		return function (b) {
			return this.translateOnAxis(a, b)
		}
	}(), translateY: function () {
		var a = new THREE.Vector3(0, 1, 0);
		return function (b) {
			return this.translateOnAxis(a, b)
		}
	}(), translateZ: function () {
		var a = new THREE.Vector3(0, 0, 1);
		return function (b) {
			return this.translateOnAxis(a,
				b)
		}
	}(), localToWorld: function (a) {
		return a.applyMatrix4(this.matrixWorld)
	}, worldToLocal: function () {
		var a = new THREE.Matrix4;
		return function (b) {
			return b.applyMatrix4(a.getInverse(this.matrixWorld))
		}
	}(), lookAt: function () {
		var a = new THREE.Matrix4;
		return function (b) {
			a.lookAt(b, this.position, this.up);
			this.quaternion.setFromRotationMatrix(a)
		}
	}(), add: function (a) {
		if (1 < arguments.length) {
			for (var b = 0; b < arguments.length; b++)this.add(arguments[b]);
			return this
		}
		if (a === this)return console.error("THREE.Object3D.add:",
			a, "can't be added as a child of itself."), this;
		if (a instanceof THREE.Object3D) {
			void 0 !== a.parent && a.parent.remove(a);
			a.parent = this;
			a.dispatchEvent({type: "added"});
			this.children.push(a);
			for (b = this; void 0 !== b.parent;)b = b.parent;
			void 0 !== b && b instanceof THREE.Scene && b.__addObject(a)
		} else console.error("THREE.Object3D.add:", a, "is not an instance of THREE.Object3D.");
		return this
	}, remove: function (a) {
		if (1 < arguments.length)for (var b = 0; b < arguments.length; b++)this.remove(arguments[b]);
		b = this.children.indexOf(a);
		if (-1 !== b) {
			a.parent = void 0;
			a.dispatchEvent({type: "removed"});
			this.children.splice(b, 1);
			for (b = this; void 0 !== b.parent;)b = b.parent;
			void 0 !== b && b instanceof THREE.Scene && b.__removeObject(a)
		}
	}, raycast: function () {
	}, traverse: function (a) {
		a(this);
		for (var b = 0, c = this.children.length; b < c; b++)this.children[b].traverse(a)
	}, traverseVisible: function (a) {
		if (!1 !== this.visible) {
			a(this);
			for (var b = 0, c = this.children.length; b < c; b++)this.children[b].traverseVisible(a)
		}
	}, getObjectById: function (a, b) {
		for (var c = 0, d = this.children.length; c <
			d; c++) {
			var e = this.children[c];
			if (e.id === a || !0 === b && (e = e.getObjectById(a, b), void 0 !== e))return e
		}
	}, getObjectByName: function (a, b) {
		for (var c = 0, d = this.children.length; c < d; c++) {
			var e = this.children[c];
			if (e.name === a || !0 === b && (e = e.getObjectByName(a, b), void 0 !== e))return e
		}
	}, getChildByName: function (a, b) {
		console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName().");
		return this.getObjectByName(a, b)
	}, updateMatrix: function () {
		this.matrix.compose(this.position, this.quaternion, this.scale);
		this.matrixWorldNeedsUpdate = !0
	}, updateMatrixWorld: function (a) {
		!0 === this.matrixAutoUpdate && this.updateMatrix();
		if (!0 === this.matrixWorldNeedsUpdate || !0 === a)void 0 === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, a = !0;
		for (var b = 0, c = this.children.length; b < c; b++)this.children[b].updateMatrixWorld(a)
	}, clone: function (a, b) {
		void 0 === a && (a = new THREE.Object3D);
		void 0 === b && (b = !0);
		a.name = this.name;
		a.up.copy(this.up);
		a.position.copy(this.position);
		a.quaternion.copy(this.quaternion);
		a.scale.copy(this.scale);
		a.renderDepth = this.renderDepth;
		a.rotationAutoUpdate = this.rotationAutoUpdate;
		a.matrix.copy(this.matrix);
		a.matrixWorld.copy(this.matrixWorld);
		a.matrixAutoUpdate = this.matrixAutoUpdate;
		a.matrixWorldNeedsUpdate = this.matrixWorldNeedsUpdate;
		a.visible = this.visible;
		a.castShadow = this.castShadow;
		a.receiveShadow = this.receiveShadow;
		a.frustumCulled = this.frustumCulled;
		a.userData = JSON.parse(JSON.stringify(this.userData));
		if (!0 ===
			b)for (var c = 0; c < this.children.length; c++)a.add(this.children[c].clone());
		return a
	}};
THREE.EventDispatcher.prototype.apply(THREE.Object3D.prototype);
THREE.Object3DIdCount = 0;
THREE.Projector = function () {
	function a() {
		if (q === t) {
			var a = new THREE.RenderableVertex;
			r.push(a);
			t++;
			q++;
			return a
		}
		return r[q++]
	}

	function b() {
		if (p === w) {
			var a = new THREE.RenderableFace;
			v.push(a);
			w++;
			p++;
			return a
		}
		return v[p++]
	}

	function c() {
		if (D === x) {
			var a = new THREE.RenderableLine;
			A.push(a);
			x++;
			D++;
			return a
		}
		return A[D++]
	}

	function d() {
		if (I === y) {
			var a = new THREE.RenderableSprite;
			z.push(a);
			y++;
			I++;
			return a
		}
		return z[I++]
	}

	function e(a, b) {
		return a.z !== b.z ? b.z - a.z : a.id !== b.id ? a.id - b.id : 0
	}

	function f(a, b) {
		var c = 0, d =
			1, e = a.z + a.w, f = b.z + b.w, g = -a.z + a.w, h = -b.z + b.w;
		if (0 <= e && 0 <= f && 0 <= g && 0 <= h)return!0;
		if (0 > e && 0 > f || 0 > g && 0 > h)return!1;
		0 > e ? c = Math.max(c, e / (e - f)) : 0 > f && (d = Math.min(d, e / (e - f)));
		0 > g ? c = Math.max(c, g / (g - h)) : 0 > h && (d = Math.min(d, g / (g - h)));
		if (d < c)return!1;
		a.lerp(b, c);
		b.lerp(a, 1 - d);
		return!0
	}

	var g, h, k = [], l = 0, n, q, r = [], t = 0, s, p, v = [], w = 0, u, D, A = [], x = 0, C, I, z = [], y = 0, K = {objects: [], lights: [], elements: []}, N = new THREE.Vector3, ba = new THREE.Vector3, P = new THREE.Vector3, O = new THREE.Vector3, J = new THREE.Vector4, E = new THREE.Box3(new THREE.Vector3(-1,
		-1, -1), new THREE.Vector3(1, 1, 1)), Q = new THREE.Box3, L = Array(3), R = new THREE.Matrix4, B = new THREE.Matrix4, S, V = new THREE.Matrix4, W = new THREE.Matrix3, H = new THREE.Frustum, oa = new THREE.Vector4, $ = new THREE.Vector4;
	this.projectVector = function (a, b) {
		b.matrixWorldInverse.getInverse(b.matrixWorld);
		B.multiplyMatrices(b.projectionMatrix, b.matrixWorldInverse);
		return a.applyProjection(B)
	};
	this.unprojectVector = function () {
		var a = new THREE.Matrix4;
		return function (b, c) {
			a.getInverse(c.projectionMatrix);
			B.multiplyMatrices(c.matrixWorld,
				a);
			return b.applyProjection(B)
		}
	}();
	this.pickingRay = function (a, b) {
		a.z = -1;
		var c = new THREE.Vector3(a.x, a.y, 1);
		this.unprojectVector(a, b);
		this.unprojectVector(c, b);
		c.sub(a).normalize();
		return new THREE.Raycaster(a, c)
	};
	var X = new function () {
		var d = [], e = [], f = null, g = null, h = new THREE.Matrix3, k = function (a) {
			var b = a.positionWorld, c = a.positionScreen;
			b.copy(a.position).applyMatrix4(S);
			c.copy(b).applyMatrix4(B);
			b = 1 / c.w;
			c.x *= b;
			c.y *= b;
			c.z *= b;
			a.visible = -1 <= c.x && 1 >= c.x && -1 <= c.y && 1 >= c.y && -1 <= c.z && 1 >= c.z
		}, l = function (a, b, c) {
			if (!0 === a.visible || !0 === b.visible || !0 === c.visible)return!0;
			L[0] = a.positionScreen;
			L[1] = b.positionScreen;
			L[2] = c.positionScreen;
			return E.isIntersectionBox(Q.setFromPoints(L))
		}, q = function (a, b, c) {
			return 0 > (c.positionScreen.x - a.positionScreen.x) * (b.positionScreen.y - a.positionScreen.y) - (c.positionScreen.y - a.positionScreen.y) * (b.positionScreen.x - a.positionScreen.x)
		};
		return{setObject: function (a) {
			f = a;
			g = f.material;
			h.getNormalMatrix(f.matrixWorld);
			d.length = 0;
			e.length = 0
		}, projectVertex: k, checkTriangleVisibility: l,
			checkBackfaceCulling: q, pushVertex: function (b, c, d) {
				n = a();
				n.position.set(b, c, d);
				k(n)
			}, pushNormal: function (a, b, c) {
				d.push(a, b, c)
			}, pushUv: function (a, b) {
				e.push(a, b)
			}, pushLine: function (a, b) {
				var d = r[a], e = r[b];
				u = c();
				u.id = f.id;
				u.v1.copy(d);
				u.v2.copy(e);
				u.z = (d.positionScreen.z + e.positionScreen.z) / 2;
				u.material = f.material;
				K.elements.push(u)
			}, pushTriangle: function (a, c, k) {
				var n = r[a], p = r[c], t = r[k];
				if (!1 !== l(n, p, t) && (g.side === THREE.DoubleSide || !0 === q(n, p, t))) {
					s = b();
					s.id = f.id;
					s.v1.copy(n);
					s.v2.copy(p);
					s.v3.copy(t);
					s.z = (n.positionScreen.z + p.positionScreen.z + t.positionScreen.z) / 3;
					for (n = 0; 3 > n; n++)p = 3 * arguments[n], t = s.vertexNormalsModel[n], t.set(d[p], d[p + 1], d[p + 2]), t.applyMatrix3(h).normalize(), p = 2 * arguments[n], s.uvs[n].set(e[p], e[p + 1]);
					s.vertexNormalsLength = 3;
					s.material = f.material;
					K.elements.push(s)
				}
			}}
	};
	this.projectScene = function (n, t, w, v) {
		I = D = p = 0;
		K.elements.length = 0;
		!0 === n.autoUpdate && n.updateMatrixWorld();
		void 0 === t.parent && t.updateMatrixWorld();
		R.copy(t.matrixWorldInverse.getInverse(t.matrixWorld));
		B.multiplyMatrices(t.projectionMatrix,
			R);
		H.setFromMatrix(B);
		h = 0;
		K.objects.length = 0;
		K.lights.length = 0;
		n.traverseVisible(function (a) {
			if (a instanceof THREE.Light)K.lights.push(a); else if (a instanceof THREE.Mesh || a instanceof THREE.Line || a instanceof THREE.Sprite)if (!1 === a.frustumCulled || !0 === H.intersectsObject(a)) {
				if (h === l) {
					var b = new THREE.RenderableObject;
					k.push(b);
					l++;
					h++;
					g = b
				} else g = k[h++];
				g.id = a.id;
				g.object = a;
				null !== a.renderDepth ? g.z = a.renderDepth : (O.setFromMatrixPosition(a.matrixWorld), O.applyProjection(B), g.z = O.z);
				K.objects.push(g)
			}
		});
		!0 === w && K.objects.sort(e);
		n = 0;
		for (w = K.objects.length; n < w; n++) {
			var A = K.objects[n].object, x = A.geometry;
			X.setObject(A);
			S = A.matrixWorld;
			q = 0;
			if (A instanceof THREE.Mesh)if (x instanceof THREE.BufferGeometry) {
				var z = x.attributes, A = x.offsets;
				if (void 0 !== z.position) {
					for (var G = z.position.array, x = 0, y = G.length; x < y; x += 3)X.pushVertex(G[x], G[x + 1], G[x + 2]);
					if (void 0 !== z.normal)for (var L = z.normal.array, x = 0, y = L.length; x < y; x += 3)X.pushNormal(L[x], L[x + 1], L[x + 2]);
					if (void 0 !== z.uv)for (L = z.uv.array, x = 0, y = L.length; x < y; x += 2)X.pushUv(L[x],
						L[x + 1]);
					if (void 0 !== z.index)if (z = z.index.array, 0 < A.length)for (n = 0; n < A.length; n++)for (y = A[n], G = y.index, x = y.start, y = y.start + y.count; x < y; x += 3)X.pushTriangle(z[x] + G, z[x + 1] + G, z[x + 2] + G); else for (x = 0, y = z.length; x < y; x += 3)X.pushTriangle(z[x], z[x + 1], z[x + 2]); else for (x = 0, y = G.length / 3; x < y; x += 3)X.pushTriangle(x, x + 1, x + 2)
				}
			} else {
				if (x instanceof THREE.Geometry) {
					var Q = x.vertices, y = x.faces, z = x.faceVertexUvs[0];
					W.getNormalMatrix(S);
					for (var G = A.material instanceof THREE.MeshFaceMaterial, L = !0 === G ? A.material : null, E = 0, ca =
						Q.length; E < ca; E++) {
						var la = Q[E];
						X.pushVertex(la.x, la.y, la.z)
					}
					Q = 0;
					for (E = y.length; Q < E; Q++) {
						var ca = y[Q], qa = !0 === G ? L.materials[ca.materialIndex] : A.material;
						if (void 0 !== qa) {
							var ua = qa.side, la = r[ca.a], ja = r[ca.b], Fa = r[ca.c];
							if (!0 === qa.morphTargets) {
								var va = x.morphTargets, Ka = A.morphTargetInfluences, aa = la.position, ra = ja.position, Da = Fa.position;
								N.set(0, 0, 0);
								ba.set(0, 0, 0);
								P.set(0, 0, 0);
								for (var Qa = 0, cb = va.length; Qa < cb; Qa++) {
									var Ga = Ka[Qa];
									if (0 !== Ga) {
										var xa = va[Qa].vertices;
										N.x += (xa[ca.a].x - aa.x) * Ga;
										N.y += (xa[ca.a].y -
											aa.y) * Ga;
										N.z += (xa[ca.a].z - aa.z) * Ga;
										ba.x += (xa[ca.b].x - ra.x) * Ga;
										ba.y += (xa[ca.b].y - ra.y) * Ga;
										ba.z += (xa[ca.b].z - ra.z) * Ga;
										P.x += (xa[ca.c].x - Da.x) * Ga;
										P.y += (xa[ca.c].y - Da.y) * Ga;
										P.z += (xa[ca.c].z - Da.z) * Ga
									}
								}
								la.position.add(N);
								ja.position.add(ba);
								Fa.position.add(P);
								X.projectVertex(la);
								X.projectVertex(ja);
								X.projectVertex(Fa)
							}
							if (!1 !== X.checkTriangleVisibility(la, ja, Fa)) {
								va = X.checkBackfaceCulling(la, ja, Fa);
								if (ua !== THREE.DoubleSide) {
									if (ua === THREE.FrontSide && !1 === va)continue;
									if (ua === THREE.BackSide && !0 === va)continue
								}
								s =
									b();
								s.id = A.id;
								s.v1.copy(la);
								s.v2.copy(ja);
								s.v3.copy(Fa);
								s.normalModel.copy(ca.normal);
								!1 !== va || ua !== THREE.BackSide && ua !== THREE.DoubleSide || s.normalModel.negate();
								s.normalModel.applyMatrix3(W).normalize();
								Ka = ca.vertexNormals;
								aa = 0;
								for (ra = Math.min(Ka.length, 3); aa < ra; aa++)Da = s.vertexNormalsModel[aa], Da.copy(Ka[aa]), !1 !== va || ua !== THREE.BackSide && ua !== THREE.DoubleSide || Da.negate(), Da.applyMatrix3(W).normalize();
								s.vertexNormalsLength = Ka.length;
								ua = z[Q];
								if (void 0 !== ua)for (va = 0; 3 > va; va++)s.uvs[va].copy(ua[va]);
								s.color = ca.color;
								s.material = qa;
								s.z = (la.positionScreen.z + ja.positionScreen.z + Fa.positionScreen.z) / 3;
								K.elements.push(s)
							}
						}
					}
				}
			} else if (A instanceof THREE.Line)if (x instanceof THREE.BufferGeometry) {
				if (z = x.attributes, void 0 !== z.position) {
					G = z.position.array;
					x = 0;
					for (y = G.length; x < y; x += 3)X.pushVertex(G[x], G[x + 1], G[x + 2]);
					if (void 0 !== z.index)for (z = z.index.array, x = 0, y = z.length; x < y; x += 2)X.pushLine(z[x], z[x + 1]); else for (z = A.type === THREE.LinePieces ? 2 : 1, x = 0, y = G.length / 3 - 1; x < y; x += z)X.pushLine(x, x + 1)
				}
			} else {
				if (x instanceof
					THREE.Geometry && (V.multiplyMatrices(B, S), Q = A.geometry.vertices, 0 !== Q.length))for (la = a(), la.positionScreen.copy(Q[0]).applyMatrix4(V), z = A.type === THREE.LinePieces ? 2 : 1, E = 1, ca = Q.length; E < ca; E++)la = a(), la.positionScreen.copy(Q[E]).applyMatrix4(V), 0 < (E + 1) % z || (ja = r[q - 2], oa.copy(la.positionScreen), $.copy(ja.positionScreen), !0 === f(oa, $) && (oa.multiplyScalar(1 / oa.w), $.multiplyScalar(1 / $.w), u = c(), u.id = A.id, u.v1.positionScreen.copy(oa), u.v2.positionScreen.copy($), u.z = Math.max(oa.z, $.z), u.material = A.material, A.material.vertexColors ===
					THREE.VertexColors && (u.vertexColors[0].copy(A.geometry.colors[E]), u.vertexColors[1].copy(A.geometry.colors[E - 1])), K.elements.push(u)))
			} else A instanceof THREE.Sprite && (J.set(S.elements[12], S.elements[13], S.elements[14], 1), J.applyMatrix4(B), x = 1 / J.w, J.z *= x, -1 <= J.z && 1 >= J.z && (C = d(), C.id = A.id, C.x = J.x * x, C.y = J.y * x, C.z = J.z, C.object = A, C.rotation = A.rotation, C.scale.x = A.scale.x * Math.abs(C.x - (J.x + t.projectionMatrix.elements[0]) / (J.w + t.projectionMatrix.elements[12])), C.scale.y = A.scale.y * Math.abs(C.y - (J.y + t.projectionMatrix.elements[5]) /
				(J.w + t.projectionMatrix.elements[13])), C.material = A.material, K.elements.push(C)))
		}
		!0 === v && K.elements.sort(e);
		return K
	}
};
THREE.Face3 = function (a, b, c, d, e, f) {
	this.a = a;
	this.b = b;
	this.c = c;
	this.normal = d instanceof THREE.Vector3 ? d : new THREE.Vector3;
	this.vertexNormals = d instanceof Array ? d : [];
	this.color = e instanceof THREE.Color ? e : new THREE.Color;
	this.vertexColors = e instanceof Array ? e : [];
	this.vertexTangents = [];
	this.materialIndex = void 0 !== f ? f : 0
};
THREE.Face3.prototype = {constructor: THREE.Face3, clone: function () {
	var a = new THREE.Face3(this.a, this.b, this.c);
	a.normal.copy(this.normal);
	a.color.copy(this.color);
	a.materialIndex = this.materialIndex;
	for (var b = 0, c = this.vertexNormals.length; b < c; b++)a.vertexNormals[b] = this.vertexNormals[b].clone();
	b = 0;
	for (c = this.vertexColors.length; b < c; b++)a.vertexColors[b] = this.vertexColors[b].clone();
	b = 0;
	for (c = this.vertexTangents.length; b < c; b++)a.vertexTangents[b] = this.vertexTangents[b].clone();
	return a
}};
THREE.Face4 = function (a, b, c, d, e, f, g) {
	console.warn("THREE.Face4 has been removed. A THREE.Face3 will be created instead.");
	return new THREE.Face3(a, b, c, e, f, g)
};
THREE.BufferAttribute = function (a, b) {
	this.array = a;
	this.itemSize = b
};
THREE.BufferAttribute.prototype = {constructor: THREE.BufferAttribute, get length() {
	return this.array.length
}, set: function (a) {
	this.array.set(a);
	return this
}, setX: function (a, b) {
	this.array[a * this.itemSize] = b;
	return this
}, setY: function (a, b) {
	this.array[a * this.itemSize + 1] = b;
	return this
}, setZ: function (a, b) {
	this.array[a * this.itemSize + 2] = b;
	return this
}, setXY: function (a, b, c) {
	a *= this.itemSize;
	this.array[a] = b;
	this.array[a + 1] = c;
	return this
}, setXYZ: function (a, b, c, d) {
	a *= this.itemSize;
	this.array[a] = b;
	this.array[a + 1] =
		c;
	this.array[a + 2] = d;
	return this
}, setXYZW: function (a, b, c, d, e) {
	a *= this.itemSize;
	this.array[a] = b;
	this.array[a + 1] = c;
	this.array[a + 2] = d;
	this.array[a + 3] = e;
	return this
}};
THREE.Int8Attribute = function (a, b) {
	console.warn("THREE.Int8Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead.");
	return new THREE.BufferAttribute(a, b)
};
THREE.Uint8Attribute = function (a, b) {
	console.warn("THREE.Uint8Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead.");
	return new THREE.BufferAttribute(a, b)
};
THREE.Uint8ClampedAttribute = function (a, b) {
	console.warn("THREE.Uint8ClampedAttribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead.");
	return new THREE.BufferAttribute(a, b)
};
THREE.Int16Attribute = function (a, b) {
	console.warn("THREE.Int16Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead.");
	return new THREE.BufferAttribute(a, b)
};
THREE.Uint16Attribute = function (a, b) {
	console.warn("THREE.Uint16Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead.");
	return new THREE.BufferAttribute(a, b)
};
THREE.Int32Attribute = function (a, b) {
	console.warn("THREE.Int32Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead.");
	return new THREE.BufferAttribute(a, b)
};
THREE.Uint32Attribute = function (a, b) {
	console.warn("THREE.Uint32Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead.");
	return new THREE.BufferAttribute(a, b)
};
THREE.Float32Attribute = function (a, b) {
	console.warn("THREE.Float32Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead.");
	return new THREE.BufferAttribute(a, b)
};
THREE.Float64Attribute = function (a, b) {
	console.warn("THREE.Float64Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead.");
	return new THREE.BufferAttribute(a, b)
};
THREE.BufferGeometry = function () {
	this.id = THREE.GeometryIdCount++;
	this.uuid = THREE.Math.generateUUID();
	this.name = "";
	this.attributes = {};
	this.offsets = this.drawcalls = [];
	this.boundingSphere = this.boundingBox = null
};
THREE.BufferGeometry.prototype = {constructor: THREE.BufferGeometry, addAttribute: function (a, b, c) {
	!1 === b instanceof THREE.BufferAttribute ? (console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."), this.attributes[a] = {array: b, itemSize: c}) : this.attributes[a] = b
}, getAttribute: function (a) {
	return this.attributes[a]
}, addDrawCall: function (a, b, c) {
	this.drawcalls.push({start: a, count: b, index: void 0 !== c ? c : 0})
}, applyMatrix: function (a) {
	var b = this.attributes.position;
	void 0 !== b && (a.applyToVector3Array(b.array),
		b.needsUpdate = !0);
	b = this.attributes.normal;
	void 0 !== b && ((new THREE.Matrix3).getNormalMatrix(a).applyToVector3Array(b.array), b.needsUpdate = !0)
}, fromGeometry: function (a, b) {
	b = b || {vertexColors: THREE.NoColors};
	var c = a.vertices, d = a.faces, e = a.faceVertexUvs, f = b.vertexColors, g = 0 < e[0].length, h = 3 == d[0].vertexNormals.length, k = new Float32Array(9 * d.length);
	this.addAttribute("position", new THREE.BufferAttribute(k, 3));
	var l = new Float32Array(9 * d.length);
	this.addAttribute("normal", new THREE.BufferAttribute(l, 3));
	if (f !==
		THREE.NoColors) {
		var n = new Float32Array(9 * d.length);
		this.addAttribute("color", new THREE.BufferAttribute(n, 3))
	}
	if (!0 === g) {
		var q = new Float32Array(6 * d.length);
		this.addAttribute("uvs", new THREE.BufferAttribute(q, 2))
	}
	for (var r = 0, t = 0, s = 0; r < d.length; r++, t += 6, s += 9) {
		var p = d[r], v = c[p.a], w = c[p.b], u = c[p.c];
		k[s] = v.x;
		k[s + 1] = v.y;
		k[s + 2] = v.z;
		k[s + 3] = w.x;
		k[s + 4] = w.y;
		k[s + 5] = w.z;
		k[s + 6] = u.x;
		k[s + 7] = u.y;
		k[s + 8] = u.z;
		!0 === h ? (v = p.vertexNormals[0], w = p.vertexNormals[1], u = p.vertexNormals[2], l[s] = v.x, l[s + 1] = v.y, l[s + 2] = v.z, l[s + 3] =
			w.x, l[s + 4] = w.y, l[s + 5] = w.z, l[s + 6] = u.x, l[s + 7] = u.y, l[s + 8] = u.z) : (v = p.normal, l[s] = v.x, l[s + 1] = v.y, l[s + 2] = v.z, l[s + 3] = v.x, l[s + 4] = v.y, l[s + 5] = v.z, l[s + 6] = v.x, l[s + 7] = v.y, l[s + 8] = v.z);
		f === THREE.FaceColors ? (p = p.color, n[s] = p.r, n[s + 1] = p.g, n[s + 2] = p.b, n[s + 3] = p.r, n[s + 4] = p.g, n[s + 5] = p.b, n[s + 6] = p.r, n[s + 7] = p.g, n[s + 8] = p.b) : f === THREE.VertexColors && (v = p.vertexColors[0], w = p.vertexColors[1], p = p.vertexColors[2], n[s] = v.r, n[s + 1] = v.g, n[s + 2] = v.b, n[s + 3] = w.r, n[s + 4] = w.g, n[s + 5] = w.b, n[s + 6] = p.r, n[s + 7] = p.g, n[s + 8] = p.b);
		!0 === g && (p = e[0][r][0],
			v = e[0][r][1], w = e[0][r][2], q[t] = p.x, q[t + 1] = p.y, q[t + 2] = v.x, q[t + 3] = v.y, q[t + 4] = w.x, q[t + 5] = w.y)
	}
	this.computeBoundingSphere();
	return this
}, computeBoundingBox: function () {
	null === this.boundingBox && (this.boundingBox = new THREE.Box3);
	var a = this.attributes.position.array;
	if (a) {
		var b = this.boundingBox;
		3 <= a.length && (b.min.x = b.max.x = a[0], b.min.y = b.max.y = a[1], b.min.z = b.max.z = a[2]);
		for (var c = 3, d = a.length; c < d; c += 3) {
			var e = a[c], f = a[c + 1], g = a[c + 2];
			e < b.min.x ? b.min.x = e : e > b.max.x && (b.max.x = e);
			f < b.min.y ? b.min.y = f : f > b.max.y &&
				(b.max.y = f);
			g < b.min.z ? b.min.z = g : g > b.max.z && (b.max.z = g)
		}
	}
	if (void 0 === a || 0 === a.length)this.boundingBox.min.set(0, 0, 0), this.boundingBox.max.set(0, 0, 0);
	(isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox: Computed min/max have NaN values. The "position" attribute is likely to have NaN values.')
}, computeBoundingSphere: function () {
	var a = new THREE.Box3, b = new THREE.Vector3;
	return function () {
		null === this.boundingSphere &&
		(this.boundingSphere = new THREE.Sphere);
		var c = this.attributes.position.array;
		if (c) {
			a.makeEmpty();
			for (var d = this.boundingSphere.center, e = 0, f = c.length; e < f; e += 3)b.set(c[e], c[e + 1], c[e + 2]), a.expandByPoint(b);
			a.center(d);
			for (var g = 0, e = 0, f = c.length; e < f; e += 3)b.set(c[e], c[e + 1], c[e + 2]), g = Math.max(g, d.distanceToSquared(b));
			this.boundingSphere.radius = Math.sqrt(g);
			isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.')
		}
	}
}(),
	computeFaceNormals: function () {
	}, computeVertexNormals: function () {
		if (this.attributes.position) {
			var a, b, c, d;
			a = this.attributes.position.array.length;
			if (void 0 === this.attributes.normal)this.attributes.normal = {itemSize: 3, array: new Float32Array(a)}; else for (a = 0, b = this.attributes.normal.array.length; a < b; a++)this.attributes.normal.array[a] = 0;
			var e = this.attributes.position.array, f = this.attributes.normal.array, g, h, k, l, n, q, r = new THREE.Vector3, t = new THREE.Vector3, s = new THREE.Vector3, p = new THREE.Vector3, v = new THREE.Vector3;
			if (this.attributes.index) {
				var w = this.attributes.index.array, u = 0 < this.offsets.length ? this.offsets : [
					{start: 0, count: w.length, index: 0}
				];
				c = 0;
				for (d = u.length; c < d; ++c) {
					b = u[c].start;
					g = u[c].count;
					var D = u[c].index;
					a = b;
					for (b += g; a < b; a += 3)g = D + w[a], h = D + w[a + 1], k = D + w[a + 2], l = e[3 * g], n = e[3 * g + 1], q = e[3 * g + 2], r.set(l, n, q), l = e[3 * h], n = e[3 * h + 1], q = e[3 * h + 2], t.set(l, n, q), l = e[3 * k], n = e[3 * k + 1], q = e[3 * k + 2], s.set(l, n, q), p.subVectors(s, t), v.subVectors(r, t), p.cross(v), f[3 * g] += p.x, f[3 * g + 1] += p.y, f[3 * g + 2] += p.z, f[3 * h] += p.x, f[3 * h + 1] += p.y,
						f[3 * h + 2] += p.z, f[3 * k] += p.x, f[3 * k + 1] += p.y, f[3 * k + 2] += p.z
				}
			} else for (a = 0, b = e.length; a < b; a += 9)l = e[a], n = e[a + 1], q = e[a + 2], r.set(l, n, q), l = e[a + 3], n = e[a + 4], q = e[a + 5], t.set(l, n, q), l = e[a + 6], n = e[a + 7], q = e[a + 8], s.set(l, n, q), p.subVectors(s, t), v.subVectors(r, t), p.cross(v), f[a] = p.x, f[a + 1] = p.y, f[a + 2] = p.z, f[a + 3] = p.x, f[a + 4] = p.y, f[a + 5] = p.z, f[a + 6] = p.x, f[a + 7] = p.y, f[a + 8] = p.z;
			this.normalizeNormals();
			this.normalsNeedUpdate = !0
		}
	}, computeTangents: function () {
		function a(a, b, c) {
			q = d[3 * a];
			r = d[3 * a + 1];
			t = d[3 * a + 2];
			s = d[3 * b];
			p = d[3 * b + 1];
			v = d[3 *
				b + 2];
			w = d[3 * c];
			u = d[3 * c + 1];
			D = d[3 * c + 2];
			A = f[2 * a];
			x = f[2 * a + 1];
			C = f[2 * b];
			I = f[2 * b + 1];
			z = f[2 * c];
			y = f[2 * c + 1];
			K = s - q;
			N = w - q;
			ba = p - r;
			P = u - r;
			O = v - t;
			J = D - t;
			E = C - A;
			Q = z - A;
			L = I - x;
			R = y - x;
			B = 1 / (E * R - Q * L);
			S.set((R * K - L * N) * B, (R * ba - L * P) * B, (R * O - L * J) * B);
			V.set((E * N - Q * K) * B, (E * P - Q * ba) * B, (E * J - Q * O) * B);
			k[a].add(S);
			k[b].add(S);
			k[c].add(S);
			l[a].add(V);
			l[b].add(V);
			l[c].add(V)
		}

		function b(a) {
			za.x = e[3 * a];
			za.y = e[3 * a + 1];
			za.z = e[3 * a + 2];
			Oa.copy(za);
			G = k[a];
			Ea.copy(G);
			Ea.sub(za.multiplyScalar(za.dot(G))).normalize();
			Aa.crossVectors(Oa, G);
			Ba = Aa.dot(l[a]);
			Pa = 0 > Ba ? -1 : 1;
			h[4 * a] = Ea.x;
			h[4 * a + 1] = Ea.y;
			h[4 * a + 2] = Ea.z;
			h[4 * a + 3] = Pa
		}

		if (void 0 === this.attributes.index || void 0 === this.attributes.position || void 0 === this.attributes.normal || void 0 === this.attributes.uv)console.warn("Missing required attributes (index, position, normal or uv) in BufferGeometry.computeTangents()"); else {
			var c = this.attributes.index.array, d = this.attributes.position.array, e = this.attributes.normal.array, f = this.attributes.uv.array, g = d.length / 3;
			void 0 === this.attributes.tangent && (this.attributes.tangent =
			{itemSize: 4, array: new Float32Array(4 * g)});
			for (var h = this.attributes.tangent.array, k = [], l = [], n = 0; n < g; n++)k[n] = new THREE.Vector3, l[n] = new THREE.Vector3;
			var q, r, t, s, p, v, w, u, D, A, x, C, I, z, y, K, N, ba, P, O, J, E, Q, L, R, B, S = new THREE.Vector3, V = new THREE.Vector3, W, H, oa, $, X, T = this.offsets, n = 0;
			for (H = T.length; n < H; ++n) {
				W = T[n].start;
				oa = T[n].count;
				var ya = T[n].index, g = W;
				for (W += oa; g < W; g += 3)oa = ya + c[g], $ = ya + c[g + 1], X = ya + c[g + 2], a(oa, $, X)
			}
			var Ea = new THREE.Vector3, Aa = new THREE.Vector3, za = new THREE.Vector3, Oa = new THREE.Vector3,
				Pa, G, Ba, n = 0;
			for (H = T.length; n < H; ++n)for (W = T[n].start, oa = T[n].count, ya = T[n].index, g = W, W += oa; g < W; g += 3)oa = ya + c[g], $ = ya + c[g + 1], X = ya + c[g + 2], b(oa), b($), b(X)
		}
	}, computeOffsets: function (a) {
		var b = a;
		void 0 === a && (b = 65535);
		Date.now();
		a = this.attributes.index.array;
		for (var c = this.attributes.position.array, d = a.length / 3, e = new Uint16Array(a.length), f = 0, g = 0, h = [
			{start: 0, count: 0, index: 0}
		], k = h[0], l = 0, n = 0, q = new Int32Array(6), r = new Int32Array(c.length), t = new Int32Array(c.length), s = 0; s < c.length; s++)r[s] = -1, t[s] = -1;
		for (c = 0; c <
			d; c++) {
			for (var p = n = 0; 3 > p; p++)s = a[3 * c + p], -1 == r[s] ? (q[2 * p] = s, q[2 * p + 1] = -1, n++) : r[s] < k.index ? (q[2 * p] = s, q[2 * p + 1] = -1, l++) : (q[2 * p] = s, q[2 * p + 1] = r[s]);
			if (g + n > k.index + b)for (k = {start: f, count: 0, index: g}, h.push(k), n = 0; 6 > n; n += 2)p = q[n + 1], -1 < p && p < k.index && (q[n + 1] = -1);
			for (n = 0; 6 > n; n += 2)s = q[n], p = q[n + 1], -1 === p && (p = g++), r[s] = p, t[p] = s, e[f++] = p - k.index, k.count++
		}
		this.reorderBuffers(e, t, g);
		return this.offsets = h
	}, merge: function () {
		console.log("BufferGeometry.merge(): TODO")
	}, normalizeNormals: function () {
		for (var a = this.attributes.normal.array,
				 b, c, d, e = 0, f = a.length; e < f; e += 3)b = a[e], c = a[e + 1], d = a[e + 2], b = 1 / Math.sqrt(b * b + c * c + d * d), a[e] *= b, a[e + 1] *= b, a[e + 2] *= b
	}, reorderBuffers: function (a, b, c) {
		var d = {}, e = [Int8Array, Uint8Array, Uint8ClampedArray, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array], f;
		for (f in this.attributes)if ("index" != f)for (var g = this.attributes[f].array, h = 0, k = e.length; h < k; h++) {
			var l = e[h];
			if (g instanceof l) {
				d[f] = new l(this.attributes[f].itemSize * c);
				break
			}
		}
		for (e = 0; e < c; e++)for (f in g = b[e], this.attributes)if ("index" !=
			f)for (var h = this.attributes[f].array, k = this.attributes[f].itemSize, l = d[f], n = 0; n < k; n++)l[e * k + n] = h[g * k + n];
		this.attributes.index.array = a;
		for (f in this.attributes)"index" != f && (this.attributes[f].array = d[f], this.attributes[f].numItems = this.attributes[f].itemSize * c)
	}, clone: function () {
		var a = new THREE.BufferGeometry, b = [Int8Array, Uint8Array, Uint8ClampedArray, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array], c;
		for (c in this.attributes) {
			for (var d = this.attributes[c], e = d.array, f = {itemSize: d.itemSize,
				array: null}, d = 0, g = b.length; d < g; d++) {
				var h = b[d];
				if (e instanceof h) {
					f.array = new h(e);
					break
				}
			}
			a.attributes[c] = f
		}
		d = 0;
		for (g = this.offsets.length; d < g; d++)b = this.offsets[d], a.offsets.push({start: b.start, index: b.index, count: b.count});
		return a
	}, dispose: function () {
		this.dispatchEvent({type: "dispose"})
	}};
THREE.EventDispatcher.prototype.apply(THREE.BufferGeometry.prototype);
THREE.Geometry = function () {
	this.id = THREE.GeometryIdCount++;
	this.uuid = THREE.Math.generateUUID();
	this.name = "";
	this.vertices = [];
	this.colors = [];
	this.faces = [];
	this.faceVertexUvs = [
		[]
	];
	this.morphTargets = [];
	this.morphColors = [];
	this.morphNormals = [];
	this.skinWeights = [];
	this.skinIndices = [];
	this.lineDistances = [];
	this.boundingSphere = this.boundingBox = null;
	this.hasTangents = !1;
	this.dynamic = !0;
	this.groupsNeedUpdate = this.buffersNeedUpdate = this.lineDistancesNeedUpdate = this.colorsNeedUpdate = this.tangentsNeedUpdate = this.normalsNeedUpdate =
		this.uvsNeedUpdate = this.elementsNeedUpdate = this.verticesNeedUpdate = !1
};
THREE.Geometry.prototype = {constructor: THREE.Geometry, applyMatrix: function (a) {
	for (var b = (new THREE.Matrix3).getNormalMatrix(a), c = 0, d = this.vertices.length; c < d; c++)this.vertices[c].applyMatrix4(a);
	c = 0;
	for (d = this.faces.length; c < d; c++) {
		a = this.faces[c];
		a.normal.applyMatrix3(b).normalize();
		for (var e = 0, f = a.vertexNormals.length; e < f; e++)a.vertexNormals[e].applyMatrix3(b).normalize()
	}
	this.boundingBox instanceof THREE.Box3 && this.computeBoundingBox();
	this.boundingSphere instanceof THREE.Sphere && this.computeBoundingSphere()
},
	center: function () {
		this.computeBoundingBox();
		var a = new THREE.Vector3;
		a.addVectors(this.boundingBox.min, this.boundingBox.max);
		a.multiplyScalar(-0.5);
		this.applyMatrix((new THREE.Matrix4).makeTranslation(a.x, a.y, a.z));
		this.computeBoundingBox();
		return a
	}, computeFaceNormals: function () {
		for (var a = new THREE.Vector3, b = new THREE.Vector3, c = 0, d = this.faces.length; c < d; c++) {
			var e = this.faces[c], f = this.vertices[e.a], g = this.vertices[e.b];
			a.subVectors(this.vertices[e.c], g);
			b.subVectors(f, g);
			a.cross(b);
			a.normalize();
			e.normal.copy(a)
		}
	}, computeVertexNormals: function (a) {
		var b, c, d;
		d = Array(this.vertices.length);
		b = 0;
		for (c = this.vertices.length; b < c; b++)d[b] = new THREE.Vector3;
		if (a) {
			var e, f, g, h = new THREE.Vector3, k = new THREE.Vector3;
			new THREE.Vector3;
			new THREE.Vector3;
			new THREE.Vector3;
			a = 0;
			for (b = this.faces.length; a < b; a++)c = this.faces[a], e = this.vertices[c.a], f = this.vertices[c.b], g = this.vertices[c.c], h.subVectors(g, f), k.subVectors(e, f), h.cross(k), d[c.a].add(h), d[c.b].add(h), d[c.c].add(h)
		} else for (a = 0, b = this.faces.length; a <
			b; a++)c = this.faces[a], d[c.a].add(c.normal), d[c.b].add(c.normal), d[c.c].add(c.normal);
		b = 0;
		for (c = this.vertices.length; b < c; b++)d[b].normalize();
		a = 0;
		for (b = this.faces.length; a < b; a++)c = this.faces[a], c.vertexNormals[0] = d[c.a].clone(), c.vertexNormals[1] = d[c.b].clone(), c.vertexNormals[2] = d[c.c].clone()
	}, computeMorphNormals: function () {
		var a, b, c, d, e;
		c = 0;
		for (d = this.faces.length; c < d; c++)for (e = this.faces[c], e.__originalFaceNormal ? e.__originalFaceNormal.copy(e.normal) : e.__originalFaceNormal = e.normal.clone(), e.__originalVertexNormals ||
			(e.__originalVertexNormals = []), a = 0, b = e.vertexNormals.length; a < b; a++)e.__originalVertexNormals[a] ? e.__originalVertexNormals[a].copy(e.vertexNormals[a]) : e.__originalVertexNormals[a] = e.vertexNormals[a].clone();
		var f = new THREE.Geometry;
		f.faces = this.faces;
		a = 0;
		for (b = this.morphTargets.length; a < b; a++) {
			if (!this.morphNormals[a]) {
				this.morphNormals[a] = {};
				this.morphNormals[a].faceNormals = [];
				this.morphNormals[a].vertexNormals = [];
				e = this.morphNormals[a].faceNormals;
				var g = this.morphNormals[a].vertexNormals, h, k;
				c =
					0;
				for (d = this.faces.length; c < d; c++)h = new THREE.Vector3, k = {a: new THREE.Vector3, b: new THREE.Vector3, c: new THREE.Vector3}, e.push(h), g.push(k)
			}
			g = this.morphNormals[a];
			f.vertices = this.morphTargets[a].vertices;
			f.computeFaceNormals();
			f.computeVertexNormals();
			c = 0;
			for (d = this.faces.length; c < d; c++)e = this.faces[c], h = g.faceNormals[c], k = g.vertexNormals[c], h.copy(e.normal), k.a.copy(e.vertexNormals[0]), k.b.copy(e.vertexNormals[1]), k.c.copy(e.vertexNormals[2])
		}
		c = 0;
		for (d = this.faces.length; c < d; c++)e = this.faces[c], e.normal =
			e.__originalFaceNormal, e.vertexNormals = e.__originalVertexNormals
	}, computeTangents: function () {
		var a, b, c, d, e, f, g, h, k, l, n, q, r, t, s, p, v, w = [], u = [];
		c = new THREE.Vector3;
		var D = new THREE.Vector3, A = new THREE.Vector3, x = new THREE.Vector3, C = new THREE.Vector3;
		a = 0;
		for (b = this.vertices.length; a < b; a++)w[a] = new THREE.Vector3, u[a] = new THREE.Vector3;
		a = 0;
		for (b = this.faces.length; a < b; a++)e = this.faces[a], f = this.faceVertexUvs[0][a], d = e.a, v = e.b, e = e.c, g = this.vertices[d], h = this.vertices[v], k = this.vertices[e], l = f[0], n = f[1], q = f[2],
			f = h.x - g.x, r = k.x - g.x, t = h.y - g.y, s = k.y - g.y, h = h.z - g.z, g = k.z - g.z, k = n.x - l.x, p = q.x - l.x, n = n.y - l.y, l = q.y - l.y, q = 1 / (k * l - p * n), c.set((l * f - n * r) * q, (l * t - n * s) * q, (l * h - n * g) * q), D.set((k * r - p * f) * q, (k * s - p * t) * q, (k * g - p * h) * q), w[d].add(c), w[v].add(c), w[e].add(c), u[d].add(D), u[v].add(D), u[e].add(D);
		D = ["a", "b", "c", "d"];
		a = 0;
		for (b = this.faces.length; a < b; a++)for (e = this.faces[a], c = 0; c < Math.min(e.vertexNormals.length, 3); c++)C.copy(e.vertexNormals[c]), d = e[D[c]], v = w[d], A.copy(v), A.sub(C.multiplyScalar(C.dot(v))).normalize(), x.crossVectors(e.vertexNormals[c],
			v), d = x.dot(u[d]), d = 0 > d ? -1 : 1, e.vertexTangents[c] = new THREE.Vector4(A.x, A.y, A.z, d);
		this.hasTangents = !0
	}, computeLineDistances: function () {
		for (var a = 0, b = this.vertices, c = 0, d = b.length; c < d; c++)0 < c && (a += b[c].distanceTo(b[c - 1])), this.lineDistances[c] = a
	}, computeBoundingBox: function () {
		null === this.boundingBox && (this.boundingBox = new THREE.Box3);
		this.boundingBox.setFromPoints(this.vertices)
	}, computeBoundingSphere: function () {
		null === this.boundingSphere && (this.boundingSphere = new THREE.Sphere);
		this.boundingSphere.setFromPoints(this.vertices)
	},
	merge: function (a, b, c) {
		if (!1 === a instanceof THREE.Geometry)console.error("THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.", a); else {
			var d, e = this.vertices.length, f = this.vertices, g = a.vertices, h = this.faces, k = a.faces, l = this.faceVertexUvs[0];
			a = a.faceVertexUvs[0];
			void 0 === c && (c = 0);
			void 0 !== b && (d = (new THREE.Matrix3).getNormalMatrix(b));
			for (var n = 0, q = g.length; n < q; n++) {
				var r = g[n].clone();
				void 0 !== b && r.applyMatrix4(b);
				f.push(r)
			}
			n = 0;
			for (q = k.length; n < q; n++) {
				var g = k[n], t, s = g.vertexNormals, p =
					g.vertexColors, r = new THREE.Face3(g.a + e, g.b + e, g.c + e);
				r.normal.copy(g.normal);
				void 0 !== d && r.normal.applyMatrix3(d).normalize();
				b = 0;
				for (f = s.length; b < f; b++)t = s[b].clone(), void 0 !== d && t.applyMatrix3(d).normalize(), r.vertexNormals.push(t);
				r.color.copy(g.color);
				b = 0;
				for (f = p.length; b < f; b++)t = p[b], r.vertexColors.push(t.clone());
				r.materialIndex = g.materialIndex + c;
				h.push(r)
			}
			n = 0;
			for (q = a.length; n < q; n++)if (c = a[n], d = [], void 0 !== c) {
				b = 0;
				for (f = c.length; b < f; b++)d.push(new THREE.Vector2(c[b].x, c[b].y));
				l.push(d)
			}
		}
	}, mergeVertices: function () {
		var a =
		{}, b = [], c = [], d, e = Math.pow(10, 4), f, g;
		f = 0;
		for (g = this.vertices.length; f < g; f++)d = this.vertices[f], d = Math.round(d.x * e) + "_" + Math.round(d.y * e) + "_" + Math.round(d.z * e), void 0 === a[d] ? (a[d] = f, b.push(this.vertices[f]), c[f] = b.length - 1) : c[f] = c[a[d]];
		a = [];
		f = 0;
		for (g = this.faces.length; f < g; f++)for (e = this.faces[f], e.a = c[e.a], e.b = c[e.b], e.c = c[e.c], e = [e.a, e.b, e.c], d = 0; 3 > d; d++)if (e[d] == e[(d + 1) % 3]) {
			a.push(f);
			break
		}
		for (f = a.length - 1; 0 <= f; f--)for (e = a[f], this.faces.splice(e, 1), c = 0, g = this.faceVertexUvs.length; c < g; c++)this.faceVertexUvs[c].splice(e,
			1);
		f = this.vertices.length - b.length;
		this.vertices = b;
		return f
	}, makeGroups: function () {
		var a = 0;
		return function (b, c) {
			var d, e, f, g, h = {}, k, l = this.morphTargets.length, n = this.morphNormals.length;
			this.geometryGroups = {};
			this.geometryGroupsList = [];
			d = 0;
			for (e = this.faces.length; d < e; d++)f = this.faces[d], f = b ? f.materialIndex : 0, f in h || (h[f] = {hash: f, counter: 0}), g = h[f].hash + "_" + h[f].counter, g in this.geometryGroups || (k = {id: a++, faces3: [], materialIndex: f, vertices: 0, numMorphTargets: l, numMorphNormals: n}, this.geometryGroups[g] =
				k, this.geometryGroupsList.push(k)), this.geometryGroups[g].vertices + 3 > c && (h[f].counter += 1, g = h[f].hash + "_" + h[f].counter, g in this.geometryGroups || (k = {id: a++, faces3: [], materialIndex: f, vertices: 0, numMorphTargets: l, numMorphNormals: n}, this.geometryGroups[g] = k, this.geometryGroupsList.push(k))), this.geometryGroups[g].faces3.push(d), this.geometryGroups[g].vertices += 3
		}
	}(), clone: function () {
		for (var a = new THREE.Geometry, b = this.vertices, c = 0, d = b.length; c < d; c++)a.vertices.push(b[c].clone());
		b = this.faces;
		c = 0;
		for (d =
				 b.length; c < d; c++)a.faces.push(b[c].clone());
		b = this.faceVertexUvs[0];
		c = 0;
		for (d = b.length; c < d; c++) {
			for (var e = b[c], f = [], g = 0, h = e.length; g < h; g++)f.push(new THREE.Vector2(e[g].x, e[g].y));
			a.faceVertexUvs[0].push(f)
		}
		return a
	}, dispose: function () {
		this.dispatchEvent({type: "dispose"})
	}};
THREE.EventDispatcher.prototype.apply(THREE.Geometry.prototype);
THREE.GeometryIdCount = 0;
THREE.Camera = function () {
	THREE.Object3D.call(this);
	this.matrixWorldInverse = new THREE.Matrix4;
	this.projectionMatrix = new THREE.Matrix4
};
THREE.Camera.prototype = Object.create(THREE.Object3D.prototype);
THREE.Camera.prototype.lookAt = function () {
	var a = new THREE.Matrix4;
	return function (b) {
		a.lookAt(this.position, b, this.up);
		this.quaternion.setFromRotationMatrix(a)
	}
}();
THREE.Camera.prototype.clone = function (a) {
	void 0 === a && (a = new THREE.Camera);
	THREE.Object3D.prototype.clone.call(this, a);
	a.matrixWorldInverse.copy(this.matrixWorldInverse);
	a.projectionMatrix.copy(this.projectionMatrix);
	return a
};
THREE.CubeCamera = function (a, b, c) {
	THREE.Object3D.call(this);
	var d = new THREE.PerspectiveCamera(90, 1, a, b);
	d.up.set(0, -1, 0);
	d.lookAt(new THREE.Vector3(1, 0, 0));
	this.add(d);
	var e = new THREE.PerspectiveCamera(90, 1, a, b);
	e.up.set(0, -1, 0);
	e.lookAt(new THREE.Vector3(-1, 0, 0));
	this.add(e);
	var f = new THREE.PerspectiveCamera(90, 1, a, b);
	f.up.set(0, 0, 1);
	f.lookAt(new THREE.Vector3(0, 1, 0));
	this.add(f);
	var g = new THREE.PerspectiveCamera(90, 1, a, b);
	g.up.set(0, 0, -1);
	g.lookAt(new THREE.Vector3(0, -1, 0));
	this.add(g);
	var h = new THREE.PerspectiveCamera(90,
		1, a, b);
	h.up.set(0, -1, 0);
	h.lookAt(new THREE.Vector3(0, 0, 1));
	this.add(h);
	var k = new THREE.PerspectiveCamera(90, 1, a, b);
	k.up.set(0, -1, 0);
	k.lookAt(new THREE.Vector3(0, 0, -1));
	this.add(k);
	this.renderTarget = new THREE.WebGLRenderTargetCube(c, c, {format: THREE.RGBFormat, magFilter: THREE.LinearFilter, minFilter: THREE.LinearFilter});
	this.updateCubeMap = function (a, b) {
		var c = this.renderTarget, r = c.generateMipmaps;
		c.generateMipmaps = !1;
		c.activeCubeFace = 0;
		a.render(b, d, c);
		c.activeCubeFace = 1;
		a.render(b, e, c);
		c.activeCubeFace =
			2;
		a.render(b, f, c);
		c.activeCubeFace = 3;
		a.render(b, g, c);
		c.activeCubeFace = 4;
		a.render(b, h, c);
		c.generateMipmaps = r;
		c.activeCubeFace = 5;
		a.render(b, k, c)
	}
};
THREE.CubeCamera.prototype = Object.create(THREE.Object3D.prototype);
THREE.OrthographicCamera = function (a, b, c, d, e, f) {
	THREE.Camera.call(this);
	this.left = a;
	this.right = b;
	this.top = c;
	this.bottom = d;
	this.near = void 0 !== e ? e : 0.1;
	this.far = void 0 !== f ? f : 2E3;
	this.updateProjectionMatrix()
};
THREE.OrthographicCamera.prototype = Object.create(THREE.Camera.prototype);
THREE.OrthographicCamera.prototype.updateProjectionMatrix = function () {
	this.projectionMatrix.makeOrthographic(this.left, this.right, this.top, this.bottom, this.near, this.far)
};
THREE.OrthographicCamera.prototype.clone = function () {
	var a = new THREE.OrthographicCamera;
	THREE.Camera.prototype.clone.call(this, a);
	a.left = this.left;
	a.right = this.right;
	a.top = this.top;
	a.bottom = this.bottom;
	a.near = this.near;
	a.far = this.far;
	return a
};
THREE.PerspectiveCamera = function (a, b, c, d) {
	THREE.Camera.call(this);
	this.fov = void 0 !== a ? a : 50;
	this.aspect = void 0 !== b ? b : 1;
	this.near = void 0 !== c ? c : 0.1;
	this.far = void 0 !== d ? d : 2E3;
	this.updateProjectionMatrix()
};
THREE.PerspectiveCamera.prototype = Object.create(THREE.Camera.prototype);
THREE.PerspectiveCamera.prototype.setLens = function (a, b) {
	void 0 === b && (b = 24);
	this.fov = 2 * THREE.Math.radToDeg(Math.atan(b / (2 * a)));
	this.updateProjectionMatrix()
};
THREE.PerspectiveCamera.prototype.setViewOffset = function (a, b, c, d, e, f) {
	this.fullWidth = a;
	this.fullHeight = b;
	this.x = c;
	this.y = d;
	this.width = e;
	this.height = f;
	this.updateProjectionMatrix()
};
THREE.PerspectiveCamera.prototype.updateProjectionMatrix = function () {
	if (this.fullWidth) {
		var a = this.fullWidth / this.fullHeight, b = Math.tan(THREE.Math.degToRad(0.5 * this.fov)) * this.near, c = -b, d = a * c, a = Math.abs(a * b - d), c = Math.abs(b - c);
		this.projectionMatrix.makeFrustum(d + this.x * a / this.fullWidth, d + (this.x + this.width) * a / this.fullWidth, b - (this.y + this.height) * c / this.fullHeight, b - this.y * c / this.fullHeight, this.near, this.far)
	} else this.projectionMatrix.makePerspective(this.fov, this.aspect, this.near, this.far)
};
THREE.PerspectiveCamera.prototype.clone = function () {
	var a = new THREE.PerspectiveCamera;
	THREE.Camera.prototype.clone.call(this, a);
	a.fov = this.fov;
	a.aspect = this.aspect;
	a.near = this.near;
	a.far = this.far;
	return a
};
THREE.Light = function (a) {
	THREE.Object3D.call(this);
	this.color = new THREE.Color(a)
};
THREE.Light.prototype = Object.create(THREE.Object3D.prototype);
THREE.Light.prototype.clone = function (a) {
	void 0 === a && (a = new THREE.Light);
	THREE.Object3D.prototype.clone.call(this, a);
	a.color.copy(this.color);
	return a
};
THREE.AmbientLight = function (a) {
	THREE.Light.call(this, a)
};
THREE.AmbientLight.prototype = Object.create(THREE.Light.prototype);
THREE.AmbientLight.prototype.clone = function () {
	var a = new THREE.AmbientLight;
	THREE.Light.prototype.clone.call(this, a);
	return a
};
THREE.AreaLight = function (a, b) {
	THREE.Light.call(this, a);
	this.normal = new THREE.Vector3(0, -1, 0);
	this.right = new THREE.Vector3(1, 0, 0);
	this.intensity = void 0 !== b ? b : 1;
	this.height = this.width = 1;
	this.constantAttenuation = 1.5;
	this.linearAttenuation = 0.5;
	this.quadraticAttenuation = 0.1
};
THREE.AreaLight.prototype = Object.create(THREE.Light.prototype);
THREE.DirectionalLight = function (a, b) {
	THREE.Light.call(this, a);
	this.position.set(0, 1, 0);
	this.target = new THREE.Object3D;
	this.intensity = void 0 !== b ? b : 1;
	this.onlyShadow = this.castShadow = !1;
	this.shadowCameraNear = 50;
	this.shadowCameraFar = 5E3;
	this.shadowCameraLeft = -500;
	this.shadowCameraTop = this.shadowCameraRight = 500;
	this.shadowCameraBottom = -500;
	this.shadowCameraVisible = !1;
	this.shadowBias = 0;
	this.shadowDarkness = 0.5;
	this.shadowMapHeight = this.shadowMapWidth = 512;
	this.shadowCascade = !1;
	this.shadowCascadeOffset = new THREE.Vector3(0,
		0, -1E3);
	this.shadowCascadeCount = 2;
	this.shadowCascadeBias = [0, 0, 0];
	this.shadowCascadeWidth = [512, 512, 512];
	this.shadowCascadeHeight = [512, 512, 512];
	this.shadowCascadeNearZ = [-1, 0.99, 0.998];
	this.shadowCascadeFarZ = [0.99, 0.998, 1];
	this.shadowCascadeArray = [];
	this.shadowMatrix = this.shadowCamera = this.shadowMapSize = this.shadowMap = null
};
THREE.DirectionalLight.prototype = Object.create(THREE.Light.prototype);
THREE.DirectionalLight.prototype.clone = function () {
	var a = new THREE.DirectionalLight;
	THREE.Light.prototype.clone.call(this, a);
	a.target = this.target.clone();
	a.intensity = this.intensity;
	a.castShadow = this.castShadow;
	a.onlyShadow = this.onlyShadow;
	a.shadowCameraNear = this.shadowCameraNear;
	a.shadowCameraFar = this.shadowCameraFar;
	a.shadowCameraLeft = this.shadowCameraLeft;
	a.shadowCameraRight = this.shadowCameraRight;
	a.shadowCameraTop = this.shadowCameraTop;
	a.shadowCameraBottom = this.shadowCameraBottom;
	a.shadowCameraVisible =
		this.shadowCameraVisible;
	a.shadowBias = this.shadowBias;
	a.shadowDarkness = this.shadowDarkness;
	a.shadowMapWidth = this.shadowMapWidth;
	a.shadowMapHeight = this.shadowMapHeight;
	a.shadowCascade = this.shadowCascade;
	a.shadowCascadeOffset.copy(this.shadowCascadeOffset);
	a.shadowCascadeCount = this.shadowCascadeCount;
	a.shadowCascadeBias = this.shadowCascadeBias.slice(0);
	a.shadowCascadeWidth = this.shadowCascadeWidth.slice(0);
	a.shadowCascadeHeight = this.shadowCascadeHeight.slice(0);
	a.shadowCascadeNearZ = this.shadowCascadeNearZ.slice(0);
	a.shadowCascadeFarZ = this.shadowCascadeFarZ.slice(0);
	return a
};
THREE.HemisphereLight = function (a, b, c) {
	THREE.Light.call(this, a);
	this.position.set(0, 100, 0);
	this.groundColor = new THREE.Color(b);
	this.intensity = void 0 !== c ? c : 1
};
THREE.HemisphereLight.prototype = Object.create(THREE.Light.prototype);
THREE.HemisphereLight.prototype.clone = function () {
	var a = new THREE.HemisphereLight;
	THREE.Light.prototype.clone.call(this, a);
	a.groundColor.copy(this.groundColor);
	a.intensity = this.intensity;
	return a
};
THREE.PointLight = function (a, b, c) {
	THREE.Light.call(this, a);
	this.intensity = void 0 !== b ? b : 1;
	this.distance = void 0 !== c ? c : 0
};
THREE.PointLight.prototype = Object.create(THREE.Light.prototype);
THREE.PointLight.prototype.clone = function () {
	var a = new THREE.PointLight;
	THREE.Light.prototype.clone.call(this, a);
	a.intensity = this.intensity;
	a.distance = this.distance;
	return a
};
THREE.SpotLight = function (a, b, c, d, e) {
	THREE.Light.call(this, a);
	this.position.set(0, 1, 0);
	this.target = new THREE.Object3D;
	this.intensity = void 0 !== b ? b : 1;
	this.distance = void 0 !== c ? c : 0;
	this.angle = void 0 !== d ? d : Math.PI / 3;
	this.exponent = void 0 !== e ? e : 10;
	this.onlyShadow = this.castShadow = !1;
	this.shadowCameraNear = 50;
	this.shadowCameraFar = 5E3;
	this.shadowCameraFov = 50;
	this.shadowCameraVisible = !1;
	this.shadowBias = 0;
	this.shadowDarkness = 0.5;
	this.shadowMapHeight = this.shadowMapWidth = 512;
	this.shadowMatrix = this.shadowCamera = this.shadowMapSize =
		this.shadowMap = null
};
THREE.SpotLight.prototype = Object.create(THREE.Light.prototype);
THREE.SpotLight.prototype.clone = function () {
	var a = new THREE.SpotLight;
	THREE.Light.prototype.clone.call(this, a);
	a.target = this.target.clone();
	a.intensity = this.intensity;
	a.distance = this.distance;
	a.angle = this.angle;
	a.exponent = this.exponent;
	a.castShadow = this.castShadow;
	a.onlyShadow = this.onlyShadow;
	a.shadowCameraNear = this.shadowCameraNear;
	a.shadowCameraFar = this.shadowCameraFar;
	a.shadowCameraFov = this.shadowCameraFov;
	a.shadowCameraVisible = this.shadowCameraVisible;
	a.shadowBias = this.shadowBias;
	a.shadowDarkness =
		this.shadowDarkness;
	a.shadowMapWidth = this.shadowMapWidth;
	a.shadowMapHeight = this.shadowMapHeight;
	return a
};
THREE.Cache = function () {
	this.files = {}
};
THREE.Cache.prototype = {constructor: THREE.Cache, add: function (a, b) {
	this.files[a] = b
}, get: function (a) {
	return this.files[a]
}, remove: function (a) {
	delete this.files[a]
}, clear: function () {
	this.files = {}
}};
THREE.Loader = function (a) {
	this.statusDomElement = (this.showStatus = a) ? THREE.Loader.prototype.addStatusElement() : null;
	this.imageLoader = new THREE.ImageLoader;
	this.onLoadStart = function () {
	};
	this.onLoadProgress = function () {
	};
	this.onLoadComplete = function () {
	}
};
THREE.Loader.prototype = {constructor: THREE.Loader, crossOrigin: void 0, addStatusElement: function () {
	var a = document.createElement("div");
	a.style.position = "absolute";
	a.style.right = "0px";
	a.style.top = "0px";
	a.style.fontSize = "0.8em";
	a.style.textAlign = "left";
	a.style.background = "rgba(0,0,0,0.25)";
	a.style.color = "#fff";
	a.style.width = "120px";
	a.style.padding = "0.5em 0.5em 0.5em 0.5em";
	a.style.zIndex = 1E3;
	a.innerHTML = "Loading ...";
	return a
}, updateProgress: function (a) {
	var b = "Loaded ", b = a.total ? b + ((100 * a.loaded / a.total).toFixed(0) +
		"%") : b + ((a.loaded / 1024).toFixed(2) + " KB");
	this.statusDomElement.innerHTML = b
}, extractUrlBase: function (a) {
	a = a.split("/");
	if (1 === a.length)return"./";
	a.pop();
	return a.join("/") + "/"
}, initMaterials: function (a, b) {
	for (var c = [], d = 0; d < a.length; ++d)c[d] = this.createMaterial(a[d], b);
	return c
}, needsTangents: function (a) {
	for (var b = 0, c = a.length; b < c; b++)if (a[b]instanceof THREE.ShaderMaterial)return!0;
	return!1
}, createMaterial: function (a, b) {
	function c(a) {
		a = Math.log(a) / Math.LN2;
		return Math.pow(2, Math.round(a))
	}

	function d(a, d, e, g, h, k, p) {
		var v = b + e, w, u = THREE.Loader.Handlers.get(v);
		null !== u ? w = u.load(v) : (w = new THREE.Texture, u = f.imageLoader, u.crossOrigin = f.crossOrigin, u.load(v, function (a) {
			if (!1 === THREE.Math.isPowerOfTwo(a.width) || !1 === THREE.Math.isPowerOfTwo(a.height)) {
				var b = c(a.width), d = c(a.height), e = document.createElement("canvas");
				e.width = b;
				e.height = d;
				e.getContext("2d").drawImage(a, 0, 0, b, d);
				w.image = e
			} else w.image = a;
			w.needsUpdate = !0
		}));
		w.sourceFile = e;
		g && (w.repeat.set(g[0], g[1]), 1 !== g[0] && (w.wrapS = THREE.RepeatWrapping),
			1 !== g[1] && (w.wrapT = THREE.RepeatWrapping));
		h && w.offset.set(h[0], h[1]);
		k && (e = {repeat: THREE.RepeatWrapping, mirror: THREE.MirroredRepeatWrapping}, void 0 !== e[k[0]] && (w.wrapS = e[k[0]]), void 0 !== e[k[1]] && (w.wrapT = e[k[1]]));
		p && (w.anisotropy = p);
		a[d] = w
	}

	function e(a) {
		return(255 * a[0] << 16) + (255 * a[1] << 8) + 255 * a[2]
	}

	var f = this, g = "MeshLambertMaterial", h = {color: 15658734, opacity: 1, map: null, lightMap: null, normalMap: null, bumpMap: null, wireframe: !1};
	if (a.shading) {
		var k = a.shading.toLowerCase();
		"phong" === k ? g = "MeshPhongMaterial" :
			"basic" === k && (g = "MeshBasicMaterial")
	}
	void 0 !== a.blending && void 0 !== THREE[a.blending] && (h.blending = THREE[a.blending]);
	if (void 0 !== a.transparent || 1 > a.opacity)h.transparent = a.transparent;
	void 0 !== a.depthTest && (h.depthTest = a.depthTest);
	void 0 !== a.depthWrite && (h.depthWrite = a.depthWrite);
	void 0 !== a.visible && (h.visible = a.visible);
	void 0 !== a.flipSided && (h.side = THREE.BackSide);
	void 0 !== a.doubleSided && (h.side = THREE.DoubleSide);
	void 0 !== a.wireframe && (h.wireframe = a.wireframe);
	void 0 !== a.vertexColors && ("face" ===
		a.vertexColors ? h.vertexColors = THREE.FaceColors : a.vertexColors && (h.vertexColors = THREE.VertexColors));
	a.colorDiffuse ? h.color = e(a.colorDiffuse) : a.DbgColor && (h.color = a.DbgColor);
	a.colorSpecular && (h.specular = e(a.colorSpecular));
	a.colorAmbient && (h.ambient = e(a.colorAmbient));
	a.colorEmissive && (h.emissive = e(a.colorEmissive));
	a.transparency && (h.opacity = a.transparency);
	a.specularCoef && (h.shininess = a.specularCoef);
	a.mapDiffuse && b && d(h, "map", a.mapDiffuse, a.mapDiffuseRepeat, a.mapDiffuseOffset, a.mapDiffuseWrap,
		a.mapDiffuseAnisotropy);
	a.mapLight && b && d(h, "lightMap", a.mapLight, a.mapLightRepeat, a.mapLightOffset, a.mapLightWrap, a.mapLightAnisotropy);
	a.mapBump && b && d(h, "bumpMap", a.mapBump, a.mapBumpRepeat, a.mapBumpOffset, a.mapBumpWrap, a.mapBumpAnisotropy);
	a.mapNormal && b && d(h, "normalMap", a.mapNormal, a.mapNormalRepeat, a.mapNormalOffset, a.mapNormalWrap, a.mapNormalAnisotropy);
	a.mapSpecular && b && d(h, "specularMap", a.mapSpecular, a.mapSpecularRepeat, a.mapSpecularOffset, a.mapSpecularWrap, a.mapSpecularAnisotropy);
	a.mapAlpha &&
		b && d(h, "alphaMap", a.mapAlpha, a.mapAlphaRepeat, a.mapAlphaOffset, a.mapAlphaWrap, a.mapAlphaAnisotropy);
	a.mapBumpScale && (h.bumpScale = a.mapBumpScale);
	a.mapNormal ? (g = THREE.ShaderLib.normalmap, k = THREE.UniformsUtils.clone(g.uniforms), k.tNormal.value = h.normalMap, a.mapNormalFactor && k.uNormalScale.value.set(a.mapNormalFactor, a.mapNormalFactor), h.map && (k.tDiffuse.value = h.map, k.enableDiffuse.value = !0), h.specularMap && (k.tSpecular.value = h.specularMap, k.enableSpecular.value = !0), h.lightMap && (k.tAO.value = h.lightMap,
		k.enableAO.value = !0), k.diffuse.value.setHex(h.color), k.specular.value.setHex(h.specular), k.ambient.value.setHex(h.ambient), k.shininess.value = h.shininess, void 0 !== h.opacity && (k.opacity.value = h.opacity), g = new THREE.ShaderMaterial({fragmentShader: g.fragmentShader, vertexShader: g.vertexShader, uniforms: k, lights: !0, fog: !0}), h.transparent && (g.transparent = !0)) : g = new THREE[g](h);
	void 0 !== a.DbgName && (g.name = a.DbgName);
	return g
}};
THREE.Loader.Handlers = {handlers: [], add: function (a, b) {
	this.handlers.push(a, b)
}, get: function (a) {
	for (var b = 0, c = this.handlers.length; b < c; b += 2) {
		var d = this.handlers[b + 1];
		if (this.handlers[b].test(a))return d
	}
	return null
}};
THREE.XHRLoader = function (a) {
	this.cache = new THREE.Cache;
	this.manager = void 0 !== a ? a : THREE.DefaultLoadingManager
};
THREE.XHRLoader.prototype = {constructor: THREE.XHRLoader, load: function (a, b, c, d) {
	var e = this, f = e.cache.get(a);
	void 0 !== f ? b && b(f) : (f = new XMLHttpRequest, f.open("GET", a, !0), f.addEventListener("load", function (c) {
		e.cache.add(a, this.response);
		b && b(this.response);
		e.manager.itemEnd(a)
	}, !1), void 0 !== c && f.addEventListener("progress", function (a) {
		c(a)
	}, !1), void 0 !== d && f.addEventListener("error", function (a) {
		d(a)
	}, !1), void 0 !== this.crossOrigin && (f.crossOrigin = this.crossOrigin), void 0 !== this.responseType && (f.responseType =
		this.responseType), f.send(null), e.manager.itemStart(a))
}, setResponseType: function (a) {
	this.responseType = a
}, setCrossOrigin: function (a) {
	this.crossOrigin = a
}};
THREE.ImageLoader = function (a) {
	this.cache = new THREE.Cache;
	this.manager = void 0 !== a ? a : THREE.DefaultLoadingManager
};
THREE.ImageLoader.prototype = {constructor: THREE.ImageLoader, load: function (a, b, c, d) {
	var e = this, f = e.cache.get(a);
	if (void 0 !== f)b(f); else return f = document.createElement("img"), void 0 !== b && f.addEventListener("load", function (c) {
		e.cache.add(a, this);
		b(this);
		e.manager.itemEnd(a)
	}, !1), void 0 !== c && f.addEventListener("progress", function (a) {
		c(a)
	}, !1), void 0 !== d && f.addEventListener("error", function (a) {
		d(a)
	}, !1), void 0 !== this.crossOrigin && (f.crossOrigin = this.crossOrigin), f.src = a, e.manager.itemStart(a), f
}, setCrossOrigin: function (a) {
	this.crossOrigin =
		a
}};
THREE.JSONLoader = function (a) {
	THREE.Loader.call(this, a);
	this.withCredentials = !1
};
THREE.JSONLoader.prototype = Object.create(THREE.Loader.prototype);
THREE.JSONLoader.prototype.load = function (a, b, c) {
	c = c && "string" === typeof c ? c : this.extractUrlBase(a);
	this.onLoadStart();
	this.loadAjaxJSON(this, a, b, c)
};
THREE.JSONLoader.prototype.loadAjaxJSON = function (a, b, c, d, e) {
	var f = new XMLHttpRequest, g = 0;
	f.onreadystatechange = function () {
		if (f.readyState === f.DONE)if (200 === f.status || 0 === f.status) {
			if (f.responseText) {
				var h = JSON.parse(f.responseText);
				if (void 0 !== h.metadata && "scene" === h.metadata.type) {
					console.error('THREE.JSONLoader: "' + b + '" seems to be a Scene. Use THREE.SceneLoader instead.');
					return
				}
				h = a.parse(h, d);
				c(h.geometry, h.materials)
			} else console.error('THREE.JSONLoader: "' + b + '" seems to be unreachable or the file is empty.');
			a.onLoadComplete()
		} else console.error("THREE.JSONLoader: Couldn't load \"" + b + '" (' + f.status + ")"); else f.readyState === f.LOADING ? e && (0 === g && (g = f.getResponseHeader("Content-Length")), e({total: g, loaded: f.responseText.length})) : f.readyState === f.HEADERS_RECEIVED && void 0 !== e && (g = f.getResponseHeader("Content-Length"))
	};
	f.open("GET", b, !0);
	f.withCredentials = this.withCredentials;
	f.send(null)
};
THREE.JSONLoader.prototype.parse = function (a, b) {
	var c = new THREE.Geometry, d = void 0 !== a.scale ? 1 / a.scale : 1;
	(function (b) {
		var d, g, h, k, l, n, q, r, t, s, p, v, w, u = a.faces;
		n = a.vertices;
		var D = a.normals, A = a.colors, x = 0;
		if (void 0 !== a.uvs) {
			for (d = 0; d < a.uvs.length; d++)a.uvs[d].length && x++;
			for (d = 0; d < x; d++)c.faceVertexUvs[d] = []
		}
		k = 0;
		for (l = n.length; k < l;)d = new THREE.Vector3, d.x = n[k++] * b, d.y = n[k++] * b, d.z = n[k++] * b, c.vertices.push(d);
		k = 0;
		for (l = u.length; k < l;)if (b = u[k++], t = b & 1, h = b & 2, d = b & 8, q = b & 16, s = b & 32, n = b & 64, b &= 128, t) {
			t = new THREE.Face3;
			t.a = u[k];
			t.b = u[k + 1];
			t.c = u[k + 3];
			p = new THREE.Face3;
			p.a = u[k + 1];
			p.b = u[k + 2];
			p.c = u[k + 3];
			k += 4;
			h && (h = u[k++], t.materialIndex = h, p.materialIndex = h);
			h = c.faces.length;
			if (d)for (d = 0; d < x; d++)for (v = a.uvs[d], c.faceVertexUvs[d][h] = [], c.faceVertexUvs[d][h + 1] = [], g = 0; 4 > g; g++)r = u[k++], w = v[2 * r], r = v[2 * r + 1], w = new THREE.Vector2(w, r), 2 !== g && c.faceVertexUvs[d][h].push(w), 0 !== g && c.faceVertexUvs[d][h + 1].push(w);
			q && (q = 3 * u[k++], t.normal.set(D[q++], D[q++], D[q]), p.normal.copy(t.normal));
			if (s)for (d = 0; 4 > d; d++)q = 3 * u[k++], s = new THREE.Vector3(D[q++],
				D[q++], D[q]), 2 !== d && t.vertexNormals.push(s), 0 !== d && p.vertexNormals.push(s);
			n && (n = u[k++], n = A[n], t.color.setHex(n), p.color.setHex(n));
			if (b)for (d = 0; 4 > d; d++)n = u[k++], n = A[n], 2 !== d && t.vertexColors.push(new THREE.Color(n)), 0 !== d && p.vertexColors.push(new THREE.Color(n));
			c.faces.push(t);
			c.faces.push(p)
		} else {
			t = new THREE.Face3;
			t.a = u[k++];
			t.b = u[k++];
			t.c = u[k++];
			h && (h = u[k++], t.materialIndex = h);
			h = c.faces.length;
			if (d)for (d = 0; d < x; d++)for (v = a.uvs[d], c.faceVertexUvs[d][h] = [], g = 0; 3 > g; g++)r = u[k++], w = v[2 * r], r = v[2 * r + 1],
				w = new THREE.Vector2(w, r), c.faceVertexUvs[d][h].push(w);
			q && (q = 3 * u[k++], t.normal.set(D[q++], D[q++], D[q]));
			if (s)for (d = 0; 3 > d; d++)q = 3 * u[k++], s = new THREE.Vector3(D[q++], D[q++], D[q]), t.vertexNormals.push(s);
			n && (n = u[k++], t.color.setHex(A[n]));
			if (b)for (d = 0; 3 > d; d++)n = u[k++], t.vertexColors.push(new THREE.Color(A[n]));
			c.faces.push(t)
		}
	})(d);
	(function () {
		var b = void 0 !== a.influencesPerVertex ? a.influencesPerVertex : 2;
		if (a.skinWeights)for (var d = 0, g = a.skinWeights.length; d < g; d += b)c.skinWeights.push(new THREE.Vector4(a.skinWeights[d],
			1 < b ? a.skinWeights[d + 1] : 0, 2 < b ? a.skinWeights[d + 2] : 0, 3 < b ? a.skinWeights[d + 3] : 0));
		if (a.skinIndices)for (d = 0, g = a.skinIndices.length; d < g; d += b)c.skinIndices.push(new THREE.Vector4(a.skinIndices[d], 1 < b ? a.skinIndices[d + 1] : 0, 2 < b ? a.skinIndices[d + 2] : 0, 3 < b ? a.skinIndices[d + 3] : 0));
		c.bones = a.bones;
		c.bones && 0 < c.bones.length && (c.skinWeights.length !== c.skinIndices.length || c.skinIndices.length !== c.vertices.length) && console.warn("When skinning, number of vertices (" + c.vertices.length + "), skinIndices (" + c.skinIndices.length +
			"), and skinWeights (" + c.skinWeights.length + ") should match.");
		c.animation = a.animation;
		c.animations = a.animations
	})();
	(function (b) {
		if (void 0 !== a.morphTargets) {
			var d, g, h, k, l, n;
			d = 0;
			for (g = a.morphTargets.length; d < g; d++)for (c.morphTargets[d] = {}, c.morphTargets[d].name = a.morphTargets[d].name, c.morphTargets[d].vertices = [], l = c.morphTargets[d].vertices, n = a.morphTargets[d].vertices, h = 0, k = n.length; h < k; h += 3) {
				var q = new THREE.Vector3;
				q.x = n[h] * b;
				q.y = n[h + 1] * b;
				q.z = n[h + 2] * b;
				l.push(q)
			}
		}
		if (void 0 !== a.morphColors)for (d =
											  0, g = a.morphColors.length; d < g; d++)for (c.morphColors[d] = {}, c.morphColors[d].name = a.morphColors[d].name, c.morphColors[d].colors = [], k = c.morphColors[d].colors, l = a.morphColors[d].colors, b = 0, h = l.length; b < h; b += 3)n = new THREE.Color(16755200), n.setRGB(l[b], l[b + 1], l[b + 2]), k.push(n)
	})(d);
	c.computeFaceNormals();
	c.computeBoundingSphere();
	if (void 0 === a.materials || 0 === a.materials.length)return{geometry: c};
	d = this.initMaterials(a.materials, b);
	this.needsTangents(d) && c.computeTangents();
	return{geometry: c, materials: d}
};
THREE.LoadingManager = function (a, b, c) {
	var d = this, e = 0, f = 0;
	this.onLoad = a;
	this.onProgress = b;
	this.onError = c;
	this.itemStart = function (a) {
		f++
	};
	this.itemEnd = function (a) {
		e++;
		if (void 0 !== d.onProgress)d.onProgress(a, e, f);
		if (e === f && void 0 !== d.onLoad)d.onLoad()
	}
};
THREE.DefaultLoadingManager = new THREE.LoadingManager;
THREE.BufferGeometryLoader = function (a) {
	this.manager = void 0 !== a ? a : THREE.DefaultLoadingManager
};
THREE.BufferGeometryLoader.prototype = {constructor: THREE.BufferGeometryLoader, load: function (a, b, c, d) {
	var e = this, f = new THREE.XHRLoader;
	f.setCrossOrigin(this.crossOrigin);
	f.load(a, function (a) {
		b(e.parse(JSON.parse(a)))
	}, c, d)
}, setCrossOrigin: function (a) {
	this.crossOrigin = a
}, parse: function (a) {
	var b = new THREE.BufferGeometry, c = a.attributes, d;
	for (d in c) {
		var e = c[d];
		b.attributes[d] = {itemSize: e.itemSize, array: new self[e.type](e.array)}
	}
	c = a.offsets;
	void 0 !== c && (b.offsets = JSON.parse(JSON.stringify(c)));
	a = a.boundingSphere;
	void 0 !== a && (b.boundingSphere = new THREE.Sphere((new THREE.Vector3).fromArray(void 0 !== a.center ? a.center : [0, 0, 0]), a.radius));
	return b
}};
THREE.MaterialLoader = function (a) {
	this.manager = void 0 !== a ? a : THREE.DefaultLoadingManager
};
THREE.MaterialLoader.prototype = {constructor: THREE.MaterialLoader, load: function (a, b, c, d) {
	var e = this, f = new THREE.XHRLoader;
	f.setCrossOrigin(this.crossOrigin);
	f.load(a, function (a) {
		b(e.parse(JSON.parse(a)))
	}, c, d)
}, setCrossOrigin: function (a) {
	this.crossOrigin = a
}, parse: function (a) {
	var b = new THREE[a.type];
	void 0 !== a.color && b.color.setHex(a.color);
	void 0 !== a.ambient && b.ambient.setHex(a.ambient);
	void 0 !== a.emissive && b.emissive.setHex(a.emissive);
	void 0 !== a.specular && b.specular.setHex(a.specular);
	void 0 !== a.shininess &&
	(b.shininess = a.shininess);
	void 0 !== a.uniforms && (b.uniforms = a.uniforms);
	void 0 !== a.vertexShader && (b.vertexShader = a.vertexShader);
	void 0 !== a.fragmentShader && (b.fragmentShader = a.fragmentShader);
	void 0 !== a.vertexColors && (b.vertexColors = a.vertexColors);
	void 0 !== a.blending && (b.blending = a.blending);
	void 0 !== a.side && (b.side = a.side);
	void 0 !== a.opacity && (b.opacity = a.opacity);
	void 0 !== a.transparent && (b.transparent = a.transparent);
	void 0 !== a.wireframe && (b.wireframe = a.wireframe);
	if (void 0 !== a.materials)for (var c =
		0, d = a.materials.length; c < d; c++)b.materials.push(this.parse(a.materials[c]));
	return b
}};
THREE.ObjectLoader = function (a) {
	this.manager = void 0 !== a ? a : THREE.DefaultLoadingManager
};
THREE.ObjectLoader.prototype = {constructor: THREE.ObjectLoader, load: function (a, b, c, d) {
	var e = this, f = new THREE.XHRLoader(e.manager);
	f.setCrossOrigin(this.crossOrigin);
	f.load(a, function (a) {
		b(e.parse(JSON.parse(a)))
	}, c, d)
}, setCrossOrigin: function (a) {
	this.crossOrigin = a
}, parse: function (a) {
	var b = this.parseGeometries(a.geometries), c = this.parseMaterials(a.materials);
	return this.parseObject(a.object, b, c)
}, parseGeometries: function (a) {
	var b = {};
	if (void 0 !== a)for (var c = new THREE.JSONLoader, d = new THREE.BufferGeometryLoader,
							  e = 0, f = a.length; e < f; e++) {
		var g, h = a[e];
		switch (h.type) {
			case "PlaneGeometry":
				g = new THREE.PlaneGeometry(h.width, h.height, h.widthSegments, h.heightSegments);
				break;
			case "BoxGeometry":
			case "CubeGeometry":
				g = new THREE.BoxGeometry(h.width, h.height, h.depth, h.widthSegments, h.heightSegments, h.depthSegments);
				break;
			case "CircleGeometry":
				g = new THREE.CircleGeometry(h.radius, h.segments);
				break;
			case "CylinderGeometry":
				g = new THREE.CylinderGeometry(h.radiusTop, h.radiusBottom, h.height, h.radialSegments, h.heightSegments, h.openEnded);
				break;
			case "SphereGeometry":
				g = new THREE.SphereGeometry(h.radius, h.widthSegments, h.heightSegments, h.phiStart, h.phiLength, h.thetaStart, h.thetaLength);
				break;
			case "IcosahedronGeometry":
				g = new THREE.IcosahedronGeometry(h.radius, h.detail);
				break;
			case "TorusGeometry":
				g = new THREE.TorusGeometry(h.radius, h.tube, h.radialSegments, h.tubularSegments, h.arc);
				break;
			case "TorusKnotGeometry":
				g = new THREE.TorusKnotGeometry(h.radius, h.tube, h.radialSegments, h.tubularSegments, h.p, h.q, h.heightScale);
				break;
			case "BufferGeometry":
				g =
					d.parse(h.data);
				break;
			case "Geometry":
				g = c.parse(h.data).geometry
		}
		g.uuid = h.uuid;
		void 0 !== h.name && (g.name = h.name);
		b[h.uuid] = g
	}
	return b
}, parseMaterials: function (a) {
	var b = {};
	if (void 0 !== a)for (var c = new THREE.MaterialLoader, d = 0, e = a.length; d < e; d++) {
		var f = a[d], g = c.parse(f);
		g.uuid = f.uuid;
		void 0 !== f.name && (g.name = f.name);
		b[f.uuid] = g
	}
	return b
}, parseObject: function () {
	var a = new THREE.Matrix4;
	return function (b, c, d) {
		var e;
		switch (b.type) {
			case "Scene":
				e = new THREE.Scene;
				break;
			case "PerspectiveCamera":
				e = new THREE.PerspectiveCamera(b.fov,
					b.aspect, b.near, b.far);
				break;
			case "OrthographicCamera":
				e = new THREE.OrthographicCamera(b.left, b.right, b.top, b.bottom, b.near, b.far);
				break;
			case "AmbientLight":
				e = new THREE.AmbientLight(b.color);
				break;
			case "DirectionalLight":
				e = new THREE.DirectionalLight(b.color, b.intensity);
				break;
			case "PointLight":
				e = new THREE.PointLight(b.color, b.intensity, b.distance);
				break;
			case "SpotLight":
				e = new THREE.SpotLight(b.color, b.intensity, b.distance, b.angle, b.exponent);
				break;
			case "HemisphereLight":
				e = new THREE.HemisphereLight(b.color,
					b.groundColor, b.intensity);
				break;
			case "Mesh":
				e = c[b.geometry];
				var f = d[b.material];
				void 0 === e && console.error("THREE.ObjectLoader: Undefined geometry " + b.geometry);
				void 0 === f && console.error("THREE.ObjectLoader: Undefined material " + b.material);
				e = new THREE.Mesh(e, f);
				break;
			case "Sprite":
				f = d[b.material];
				void 0 === f && console.error("THREE.ObjectLoader: Undefined material " + b.material);
				e = new THREE.Sprite(f);
				break;
			default:
				e = new THREE.Object3D
		}
		e.uuid = b.uuid;
		void 0 !== b.name && (e.name = b.name);
		void 0 !== b.matrix ?
			(a.fromArray(b.matrix), a.decompose(e.position, e.quaternion, e.scale)) : (void 0 !== b.position && e.position.fromArray(b.position), void 0 !== b.rotation && e.rotation.fromArray(b.rotation), void 0 !== b.scale && e.scale.fromArray(b.scale));
		void 0 !== b.visible && (e.visible = b.visible);
		void 0 !== b.userData && (e.userData = b.userData);
		if (void 0 !== b.children)for (var g in b.children)e.add(this.parseObject(b.children[g], c, d));
		return e
	}
}()};
THREE.TextureLoader = function (a) {
	this.manager = void 0 !== a ? a : THREE.DefaultLoadingManager
};
THREE.TextureLoader.prototype = {constructor: THREE.TextureLoader, load: function (a, b, c, d) {
	var e = new THREE.ImageLoader(this.manager);
	e.setCrossOrigin(this.crossOrigin);
	e.load(a, function (a) {
		a = new THREE.Texture(a);
		a.needsUpdate = !0;
		void 0 !== b && b(a)
	}, c, d)
}, setCrossOrigin: function (a) {
	this.crossOrigin = a
}};
THREE.Material = function () {
	this.id = THREE.MaterialIdCount++;
	this.uuid = THREE.Math.generateUUID();
	this.name = "";
	this.side = THREE.FrontSide;
	this.opacity = 1;
	this.transparent = !1;
	this.blending = THREE.NormalBlending;
	this.blendSrc = THREE.SrcAlphaFactor;
	this.blendDst = THREE.OneMinusSrcAlphaFactor;
	this.blendEquation = THREE.AddEquation;
	this.depthWrite = this.depthTest = !0;
	this.polygonOffset = !1;
	this.overdraw = this.alphaTest = this.polygonOffsetUnits = this.polygonOffsetFactor = 0;
	this.needsUpdate = this.visible = !0
};
THREE.Material.prototype = {constructor: THREE.Material, setValues: function (a) {
	if (void 0 !== a)for (var b in a) {
		var c = a[b];
		if (void 0 === c)console.warn("THREE.Material: '" + b + "' parameter is undefined."); else if (b in this) {
			var d = this[b];
			d instanceof THREE.Color ? d.set(c) : d instanceof THREE.Vector3 && c instanceof THREE.Vector3 ? d.copy(c) : this[b] = "overdraw" == b ? Number(c) : c
		}
	}
}, clone: function (a) {
	void 0 === a && (a = new THREE.Material);
	a.name = this.name;
	a.side = this.side;
	a.opacity = this.opacity;
	a.transparent = this.transparent;
	a.blending = this.blending;
	a.blendSrc = this.blendSrc;
	a.blendDst = this.blendDst;
	a.blendEquation = this.blendEquation;
	a.depthTest = this.depthTest;
	a.depthWrite = this.depthWrite;
	a.polygonOffset = this.polygonOffset;
	a.polygonOffsetFactor = this.polygonOffsetFactor;
	a.polygonOffsetUnits = this.polygonOffsetUnits;
	a.alphaTest = this.alphaTest;
	a.overdraw = this.overdraw;
	a.visible = this.visible;
	return a
}, dispose: function () {
	this.dispatchEvent({type: "dispose"})
}};
THREE.EventDispatcher.prototype.apply(THREE.Material.prototype);
THREE.MaterialIdCount = 0;
THREE.LineBasicMaterial = function (a) {
	THREE.Material.call(this);
	this.color = new THREE.Color(16777215);
	this.linewidth = 1;
	this.linejoin = this.linecap = "round";
	this.vertexColors = THREE.NoColors;
	this.fog = !0;
	this.setValues(a)
};
THREE.LineBasicMaterial.prototype = Object.create(THREE.Material.prototype);
THREE.LineBasicMaterial.prototype.clone = function () {
	var a = new THREE.LineBasicMaterial;
	THREE.Material.prototype.clone.call(this, a);
	a.color.copy(this.color);
	a.linewidth = this.linewidth;
	a.linecap = this.linecap;
	a.linejoin = this.linejoin;
	a.vertexColors = this.vertexColors;
	a.fog = this.fog;
	return a
};
THREE.LineDashedMaterial = function (a) {
	THREE.Material.call(this);
	this.color = new THREE.Color(16777215);
	this.scale = this.linewidth = 1;
	this.dashSize = 3;
	this.gapSize = 1;
	this.vertexColors = !1;
	this.fog = !0;
	this.setValues(a)
};
THREE.LineDashedMaterial.prototype = Object.create(THREE.Material.prototype);
THREE.LineDashedMaterial.prototype.clone = function () {
	var a = new THREE.LineDashedMaterial;
	THREE.Material.prototype.clone.call(this, a);
	a.color.copy(this.color);
	a.linewidth = this.linewidth;
	a.scale = this.scale;
	a.dashSize = this.dashSize;
	a.gapSize = this.gapSize;
	a.vertexColors = this.vertexColors;
	a.fog = this.fog;
	return a
};
THREE.MeshBasicMaterial = function (a) {
	THREE.Material.call(this);
	this.color = new THREE.Color(16777215);
	this.envMap = this.alphaMap = this.specularMap = this.lightMap = this.map = null;
	this.combine = THREE.MultiplyOperation;
	this.reflectivity = 1;
	this.refractionRatio = 0.98;
	this.fog = !0;
	this.shading = THREE.SmoothShading;
	this.wireframe = !1;
	this.wireframeLinewidth = 1;
	this.wireframeLinejoin = this.wireframeLinecap = "round";
	this.vertexColors = THREE.NoColors;
	this.morphTargets = this.skinning = !1;
	this.setValues(a)
};
THREE.MeshBasicMaterial.prototype = Object.create(THREE.Material.prototype);
THREE.MeshBasicMaterial.prototype.clone = function () {
	var a = new THREE.MeshBasicMaterial;
	THREE.Material.prototype.clone.call(this, a);
	a.color.copy(this.color);
	a.map = this.map;
	a.lightMap = this.lightMap;
	a.specularMap = this.specularMap;
	a.alphaMap = this.alphaMap;
	a.envMap = this.envMap;
	a.combine = this.combine;
	a.reflectivity = this.reflectivity;
	a.refractionRatio = this.refractionRatio;
	a.fog = this.fog;
	a.shading = this.shading;
	a.wireframe = this.wireframe;
	a.wireframeLinewidth = this.wireframeLinewidth;
	a.wireframeLinecap = this.wireframeLinecap;
	a.wireframeLinejoin = this.wireframeLinejoin;
	a.vertexColors = this.vertexColors;
	a.skinning = this.skinning;
	a.morphTargets = this.morphTargets;
	return a
};
THREE.MeshLambertMaterial = function (a) {
	THREE.Material.call(this);
	this.color = new THREE.Color(16777215);
	this.ambient = new THREE.Color(16777215);
	this.emissive = new THREE.Color(0);
	this.wrapAround = !1;
	this.wrapRGB = new THREE.Vector3(1, 1, 1);
	this.envMap = this.alphaMap = this.specularMap = this.lightMap = this.map = null;
	this.combine = THREE.MultiplyOperation;
	this.reflectivity = 1;
	this.refractionRatio = 0.98;
	this.fog = !0;
	this.shading = THREE.SmoothShading;
	this.wireframe = !1;
	this.wireframeLinewidth = 1;
	this.wireframeLinejoin = this.wireframeLinecap =
		"round";
	this.vertexColors = THREE.NoColors;
	this.morphNormals = this.morphTargets = this.skinning = !1;
	this.setValues(a)
};
THREE.MeshLambertMaterial.prototype = Object.create(THREE.Material.prototype);
THREE.MeshLambertMaterial.prototype.clone = function () {
	var a = new THREE.MeshLambertMaterial;
	THREE.Material.prototype.clone.call(this, a);
	a.color.copy(this.color);
	a.ambient.copy(this.ambient);
	a.emissive.copy(this.emissive);
	a.wrapAround = this.wrapAround;
	a.wrapRGB.copy(this.wrapRGB);
	a.map = this.map;
	a.lightMap = this.lightMap;
	a.specularMap = this.specularMap;
	a.alphaMap = this.alphaMap;
	a.envMap = this.envMap;
	a.combine = this.combine;
	a.reflectivity = this.reflectivity;
	a.refractionRatio = this.refractionRatio;
	a.fog = this.fog;
	a.shading = this.shading;
	a.wireframe = this.wireframe;
	a.wireframeLinewidth = this.wireframeLinewidth;
	a.wireframeLinecap = this.wireframeLinecap;
	a.wireframeLinejoin = this.wireframeLinejoin;
	a.vertexColors = this.vertexColors;
	a.skinning = this.skinning;
	a.morphTargets = this.morphTargets;
	a.morphNormals = this.morphNormals;
	return a
};
THREE.MeshPhongMaterial = function (a) {
	THREE.Material.call(this);
	this.color = new THREE.Color(16777215);
	this.ambient = new THREE.Color(16777215);
	this.emissive = new THREE.Color(0);
	this.specular = new THREE.Color(1118481);
	this.shininess = 30;
	this.wrapAround = this.metal = !1;
	this.wrapRGB = new THREE.Vector3(1, 1, 1);
	this.bumpMap = this.lightMap = this.map = null;
	this.bumpScale = 1;
	this.normalMap = null;
	this.normalScale = new THREE.Vector2(1, 1);
	this.envMap = this.alphaMap = this.specularMap = null;
	this.combine = THREE.MultiplyOperation;
	this.reflectivity =
		1;
	this.refractionRatio = 0.98;
	this.fog = !0;
	this.shading = THREE.SmoothShading;
	this.wireframe = !1;
	this.wireframeLinewidth = 1;
	this.wireframeLinejoin = this.wireframeLinecap = "round";
	this.vertexColors = THREE.NoColors;
	this.morphNormals = this.morphTargets = this.skinning = !1;
	this.setValues(a)
};
THREE.MeshPhongMaterial.prototype = Object.create(THREE.Material.prototype);
THREE.MeshPhongMaterial.prototype.clone = function () {
	var a = new THREE.MeshPhongMaterial;
	THREE.Material.prototype.clone.call(this, a);
	a.color.copy(this.color);
	a.ambient.copy(this.ambient);
	a.emissive.copy(this.emissive);
	a.specular.copy(this.specular);
	a.shininess = this.shininess;
	a.metal = this.metal;
	a.wrapAround = this.wrapAround;
	a.wrapRGB.copy(this.wrapRGB);
	a.map = this.map;
	a.lightMap = this.lightMap;
	a.bumpMap = this.bumpMap;
	a.bumpScale = this.bumpScale;
	a.normalMap = this.normalMap;
	a.normalScale.copy(this.normalScale);
	a.specularMap = this.specularMap;
	a.alphaMap = this.alphaMap;
	a.envMap = this.envMap;
	a.combine = this.combine;
	a.reflectivity = this.reflectivity;
	a.refractionRatio = this.refractionRatio;
	a.fog = this.fog;
	a.shading = this.shading;
	a.wireframe = this.wireframe;
	a.wireframeLinewidth = this.wireframeLinewidth;
	a.wireframeLinecap = this.wireframeLinecap;
	a.wireframeLinejoin = this.wireframeLinejoin;
	a.vertexColors = this.vertexColors;
	a.skinning = this.skinning;
	a.morphTargets = this.morphTargets;
	a.morphNormals = this.morphNormals;
	return a
};
THREE.MeshDepthMaterial = function (a) {
	THREE.Material.call(this);
	this.wireframe = this.morphTargets = !1;
	this.wireframeLinewidth = 1;
	this.setValues(a)
};
THREE.MeshDepthMaterial.prototype = Object.create(THREE.Material.prototype);
THREE.MeshDepthMaterial.prototype.clone = function () {
	var a = new THREE.MeshDepthMaterial;
	THREE.Material.prototype.clone.call(this, a);
	a.wireframe = this.wireframe;
	a.wireframeLinewidth = this.wireframeLinewidth;
	return a
};
THREE.MeshNormalMaterial = function (a) {
	THREE.Material.call(this, a);
	this.shading = THREE.FlatShading;
	this.wireframe = !1;
	this.wireframeLinewidth = 1;
	this.morphTargets = !1;
	this.setValues(a)
};
THREE.MeshNormalMaterial.prototype = Object.create(THREE.Material.prototype);
THREE.MeshNormalMaterial.prototype.clone = function () {
	var a = new THREE.MeshNormalMaterial;
	THREE.Material.prototype.clone.call(this, a);
	a.shading = this.shading;
	a.wireframe = this.wireframe;
	a.wireframeLinewidth = this.wireframeLinewidth;
	return a
};
THREE.MeshFaceMaterial = function (a) {
	this.materials = a instanceof Array ? a : []
};
THREE.MeshFaceMaterial.prototype.clone = function () {
	for (var a = new THREE.MeshFaceMaterial, b = 0; b < this.materials.length; b++)a.materials.push(this.materials[b].clone());
	return a
};
THREE.PointCloudMaterial = function (a) {
	THREE.Material.call(this);
	this.color = new THREE.Color(16777215);
	this.map = null;
	this.size = 1;
	this.sizeAttenuation = !0;
	this.vertexColors = THREE.NoColors;
	this.fog = !0;
	this.setValues(a)
};
THREE.PointCloudMaterial.prototype = Object.create(THREE.Material.prototype);
THREE.PointCloudMaterial.prototype.clone = function () {
	var a = new THREE.PointCloudMaterial;
	THREE.Material.prototype.clone.call(this, a);
	a.color.copy(this.color);
	a.map = this.map;
	a.size = this.size;
	a.sizeAttenuation = this.sizeAttenuation;
	a.vertexColors = this.vertexColors;
	a.fog = this.fog;
	return a
};
THREE.ParticleBasicMaterial = function (a) {
	console.warn("THREE.ParticleBasicMaterial has been renamed to THREE.PointCloudMaterial.");
	return new THREE.PointCloudMaterial(a)
};
THREE.ParticleSystemMaterial = function (a) {
	console.warn("THREE.ParticleSystemMaterial has been renamed to THREE.PointCloudMaterial.");
	return new THREE.PointCloudMaterial(a)
};
THREE.ShaderMaterial = function (a) {
	THREE.Material.call(this);
	this.defines = {};
	this.uniforms = {};
	this.attributes = null;
	this.vertexShader = "void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}";
	this.fragmentShader = "void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}";
	this.shading = THREE.SmoothShading;
	this.linewidth = 1;
	this.wireframe = !1;
	this.wireframeLinewidth = 1;
	this.lights = this.fog = !1;
	this.vertexColors = THREE.NoColors;
	this.morphNormals = this.morphTargets = this.skinning = !1;
	this.defaultAttributeValues = {color: [1, 1, 1], uv: [0, 0], uv2: [0, 0]};
	this.index0AttributeName = void 0;
	this.setValues(a)
};
THREE.ShaderMaterial.prototype = Object.create(THREE.Material.prototype);
THREE.ShaderMaterial.prototype.clone = function () {
	var a = new THREE.ShaderMaterial;
	THREE.Material.prototype.clone.call(this, a);
	a.fragmentShader = this.fragmentShader;
	a.vertexShader = this.vertexShader;
	a.uniforms = THREE.UniformsUtils.clone(this.uniforms);
	a.attributes = this.attributes;
	a.defines = this.defines;
	a.shading = this.shading;
	a.wireframe = this.wireframe;
	a.wireframeLinewidth = this.wireframeLinewidth;
	a.fog = this.fog;
	a.lights = this.lights;
	a.vertexColors = this.vertexColors;
	a.skinning = this.skinning;
	a.morphTargets =
		this.morphTargets;
	a.morphNormals = this.morphNormals;
	return a
};
THREE.RawShaderMaterial = function (a) {
	THREE.ShaderMaterial.call(this, a)
};
THREE.RawShaderMaterial.prototype = Object.create(THREE.ShaderMaterial.prototype);
THREE.RawShaderMaterial.prototype.clone = function () {
	var a = new THREE.RawShaderMaterial;
	THREE.ShaderMaterial.prototype.clone.call(this, a);
	return a
};
THREE.SpriteMaterial = function (a) {
	THREE.Material.call(this);
	this.color = new THREE.Color(16777215);
	this.map = null;
	this.rotation = 0;
	this.fog = !1;
	this.setValues(a)
};
THREE.SpriteMaterial.prototype = Object.create(THREE.Material.prototype);
THREE.SpriteMaterial.prototype.clone = function () {
	var a = new THREE.SpriteMaterial;
	THREE.Material.prototype.clone.call(this, a);
	a.color.copy(this.color);
	a.map = this.map;
	a.rotation = this.rotation;
	a.fog = this.fog;
	return a
};
THREE.SpriteCanvasMaterial = function (a) {
	THREE.Material.call(this);
	this.color = new THREE.Color(16777215);
	this.program = function (a, c) {
	};
	this.setValues(a)
};
THREE.SpriteCanvasMaterial.prototype = Object.create(THREE.Material.prototype);
THREE.SpriteCanvasMaterial.prototype.clone = function () {
	var a = new THREE.SpriteCanvasMaterial;
	THREE.Material.prototype.clone.call(this, a);
	a.color.copy(this.color);
	a.program = this.program;
	return a
};
THREE.ParticleCanvasMaterial = THREE.SpriteCanvasMaterial;
THREE.Texture = function (a, b, c, d, e, f, g, h, k) {
	this.id = THREE.TextureIdCount++;
	this.uuid = THREE.Math.generateUUID();
	this.name = "";
	this.image = void 0 !== a ? a : THREE.Texture.DEFAULT_IMAGE;
	this.mipmaps = [];
	this.mapping = void 0 !== b ? b : THREE.Texture.DEFAULT_MAPPING;
	this.wrapS = void 0 !== c ? c : THREE.ClampToEdgeWrapping;
	this.wrapT = void 0 !== d ? d : THREE.ClampToEdgeWrapping;
	this.magFilter = void 0 !== e ? e : THREE.LinearFilter;
	this.minFilter = void 0 !== f ? f : THREE.LinearMipMapLinearFilter;
	this.anisotropy = void 0 !== k ? k : 1;
	this.format = void 0 !==
		g ? g : THREE.RGBAFormat;
	this.type = void 0 !== h ? h : THREE.UnsignedByteType;
	this.offset = new THREE.Vector2(0, 0);
	this.repeat = new THREE.Vector2(1, 1);
	this.generateMipmaps = !0;
	this.premultiplyAlpha = !1;
	this.flipY = !0;
	this.unpackAlignment = 4;
	this._needsUpdate = !1;
	this.onUpdate = null
};
THREE.Texture.DEFAULT_IMAGE = void 0;
THREE.Texture.DEFAULT_MAPPING = new THREE.UVMapping;
THREE.Texture.prototype = {constructor: THREE.Texture, get needsUpdate() {
	return this._needsUpdate
}, set needsUpdate(a) {
	!0 === a && this.update();
	this._needsUpdate = a
}, clone: function (a) {
	void 0 === a && (a = new THREE.Texture);
	a.image = this.image;
	a.mipmaps = this.mipmaps.slice(0);
	a.mapping = this.mapping;
	a.wrapS = this.wrapS;
	a.wrapT = this.wrapT;
	a.magFilter = this.magFilter;
	a.minFilter = this.minFilter;
	a.anisotropy = this.anisotropy;
	a.format = this.format;
	a.type = this.type;
	a.offset.copy(this.offset);
	a.repeat.copy(this.repeat);
	a.generateMipmaps =
		this.generateMipmaps;
	a.premultiplyAlpha = this.premultiplyAlpha;
	a.flipY = this.flipY;
	a.unpackAlignment = this.unpackAlignment;
	return a
}, update: function () {
	this.dispatchEvent({type: "update"})
}, dispose: function () {
	this.dispatchEvent({type: "dispose"})
}};
THREE.EventDispatcher.prototype.apply(THREE.Texture.prototype);
THREE.TextureIdCount = 0;
THREE.CubeTexture = function (a, b, c, d, e, f, g, h, k) {
	THREE.Texture.call(this, a, b, c, d, e, f, g, h, k);
	this.images = a
};
THREE.CubeTexture.prototype = Object.create(THREE.Texture.prototype);
THREE.CubeTexture.clone = function (a) {
	void 0 === a && (a = new THREE.CubeTexture);
	THREE.Texture.prototype.clone.call(this, a);
	a.images = this.images;
	return a
};
THREE.CompressedTexture = function (a, b, c, d, e, f, g, h, k, l, n) {
	THREE.Texture.call(this, null, f, g, h, k, l, d, e, n);
	this.image = {width: b, height: c};
	this.mipmaps = a;
	this.generateMipmaps = !1
};
THREE.CompressedTexture.prototype = Object.create(THREE.Texture.prototype);
THREE.CompressedTexture.prototype.clone = function () {
	var a = new THREE.CompressedTexture;
	THREE.Texture.prototype.clone.call(this, a);
	return a
};
THREE.DataTexture = function (a, b, c, d, e, f, g, h, k, l, n) {
	THREE.Texture.call(this, null, f, g, h, k, l, d, e, n);
	this.image = {data: a, width: b, height: c}
};
THREE.DataTexture.prototype = Object.create(THREE.Texture.prototype);
THREE.DataTexture.prototype.clone = function () {
	var a = new THREE.DataTexture;
	THREE.Texture.prototype.clone.call(this, a);
	return a
};
THREE.PointCloud = function (a, b) {
	THREE.Object3D.call(this);
	this.geometry = void 0 !== a ? a : new THREE.Geometry;
	this.material = void 0 !== b ? b : new THREE.PointCloudMaterial({color: 16777215 * Math.random()});
	this.sortParticles = !1
};
THREE.PointCloud.prototype = Object.create(THREE.Object3D.prototype);
THREE.PointCloud.prototype.raycast = function () {
	var a = new THREE.Matrix4, b = new THREE.Ray;
	return function (c, d) {
		var e = this, f = e.geometry, g = c.params.PointCloud.threshold;
		a.getInverse(this.matrixWorld);
		b.copy(c.ray).applyMatrix4(a);
		if (null === f.boundingBox || !1 !== b.isIntersectionBox(f.boundingBox)) {
			var h = g / ((this.scale.x + this.scale.y + this.scale.z) / 3), k = new THREE.Vector3, g = function (a, f) {
				var g = b.distanceToPoint(a);
				if (g < h) {
					var k = b.closestPointToPoint(a);
					k.applyMatrix4(e.matrixWorld);
					var l = c.ray.origin.distanceTo(k);
					d.push({distance: l, distanceToRay: g, point: k.clone(), index: f, face: null, object: e})
				}
			};
			if (f instanceof THREE.BufferGeometry) {
				var l = f.attributes, n = l.position.array;
				if (void 0 !== l.index) {
					var l = l.index.array, q = f.offsets;
					0 === q.length && (q = [
						{start: 0, count: l.length, index: 0}
					]);
					for (var r = 0, t = q.length; r < t; ++r)for (var s = q[r].start, p = q[r].index, f = s, s = s + q[r].count; f < s; f++) {
						var v = p + l[f];
						k.set(n[3 * v], n[3 * v + 1], n[3 * v + 2]);
						g(k, v)
					}
				} else for (l = n.length / 3, f = 0; f < l; f++)k.set(n[3 * f], n[3 * f + 1], n[3 * f + 2]), g(k, f)
			} else for (k = this.geometry.vertices,
							f = 0; f < k.length; f++)g(k[f], f)
		}
	}
}();
THREE.PointCloud.prototype.clone = function (a) {
	void 0 === a && (a = new THREE.PointCloud(this.geometry, this.material));
	a.sortParticles = this.sortParticles;
	THREE.Object3D.prototype.clone.call(this, a);
	return a
};
THREE.ParticleSystem = function (a, b) {
	console.warn("THREE.ParticleSystem has been renamed to THREE.PointCloud.");
	return new THREE.PointCloud(a, b)
};
THREE.Line = function (a, b, c) {
	THREE.Object3D.call(this);
	this.geometry = void 0 !== a ? a : new THREE.Geometry;
	this.material = void 0 !== b ? b : new THREE.LineBasicMaterial({color: 16777215 * Math.random()});
	this.type = void 0 !== c ? c : THREE.LineStrip
};
THREE.LineStrip = 0;
THREE.LinePieces = 1;
THREE.Line.prototype = Object.create(THREE.Object3D.prototype);
THREE.Line.prototype.raycast = function () {
	var a = new THREE.Matrix4, b = new THREE.Ray, c = new THREE.Sphere;
	return function (d, e) {
		var f = d.linePrecision, f = f * f, g = this.geometry;
		null === g.boundingSphere && g.computeBoundingSphere();
		c.copy(g.boundingSphere);
		c.applyMatrix4(this.matrixWorld);
		if (!1 !== d.ray.isIntersectionSphere(c) && (a.getInverse(this.matrixWorld), b.copy(d.ray).applyMatrix4(a), g instanceof THREE.Geometry))for (var g = g.vertices, h = g.length, k = new THREE.Vector3, l = new THREE.Vector3, n = this.type === THREE.LineStrip ?
			1 : 2, q = 0; q < h - 1; q += n)if (!(b.distanceSqToSegment(g[q], g[q + 1], l, k) > f)) {
			var r = b.origin.distanceTo(l);
			r < d.near || r > d.far || e.push({distance: r, point: k.clone().applyMatrix4(this.matrixWorld), face: null, faceIndex: null, object: this})
		}
	}
}();
THREE.Line.prototype.clone = function (a) {
	void 0 === a && (a = new THREE.Line(this.geometry, this.material, this.type));
	THREE.Object3D.prototype.clone.call(this, a);
	return a
};
THREE.Mesh = function (a, b) {
	THREE.Object3D.call(this);
	this.geometry = void 0 !== a ? a : new THREE.Geometry;
	this.material = void 0 !== b ? b : new THREE.MeshBasicMaterial({color: 16777215 * Math.random()});
	this.updateMorphTargets()
};
THREE.Mesh.prototype = Object.create(THREE.Object3D.prototype);
THREE.Mesh.prototype.updateMorphTargets = function () {
	if (void 0 !== this.geometry.morphTargets && 0 < this.geometry.morphTargets.length) {
		this.morphTargetBase = -1;
		this.morphTargetForcedOrder = [];
		this.morphTargetInfluences = [];
		this.morphTargetDictionary = {};
		for (var a = 0, b = this.geometry.morphTargets.length; a < b; a++)this.morphTargetInfluences.push(0), this.morphTargetDictionary[this.geometry.morphTargets[a].name] = a
	}
};
THREE.Mesh.prototype.getMorphTargetIndexByName = function (a) {
	if (void 0 !== this.morphTargetDictionary[a])return this.morphTargetDictionary[a];
	console.log("THREE.Mesh.getMorphTargetIndexByName: morph target " + a + " does not exist. Returning 0.");
	return 0
};
THREE.Mesh.prototype.raycast = function () {
	var a = new THREE.Matrix4, b = new THREE.Ray, c = new THREE.Sphere, d = new THREE.Vector3, e = new THREE.Vector3, f = new THREE.Vector3;
	return function (g, h) {
		var k = this.geometry;
		null === k.boundingSphere && k.computeBoundingSphere();
		c.copy(k.boundingSphere);
		c.applyMatrix4(this.matrixWorld);
		if (!1 !== g.ray.isIntersectionSphere(c) && (a.getInverse(this.matrixWorld), b.copy(g.ray).applyMatrix4(a), null === k.boundingBox || !1 !== b.isIntersectionBox(k.boundingBox)))if (k instanceof THREE.BufferGeometry) {
			var l =
				this.material;
			if (void 0 !== l) {
				var n = k.attributes, q, r, t = g.precision;
				if (void 0 !== n.index) {
					var s = n.index.array, p = n.position.array, v = k.offsets;
					0 === v.length && (v = [
						{start: 0, count: s.length, index: 0}
					]);
					for (var w = 0, u = v.length; w < u; ++w)for (var n = v[w].start, D = v[w].index, k = n, A = n + v[w].count; k < A; k += 3) {
						n = D + s[k];
						q = D + s[k + 1];
						r = D + s[k + 2];
						d.set(p[3 * n], p[3 * n + 1], p[3 * n + 2]);
						e.set(p[3 * q], p[3 * q + 1], p[3 * q + 2]);
						f.set(p[3 * r], p[3 * r + 1], p[3 * r + 2]);
						var x = l.side === THREE.BackSide ? b.intersectTriangle(f, e, d, !0) : b.intersectTriangle(d, e, f, l.side !==
							THREE.DoubleSide);
						if (null !== x) {
							x.applyMatrix4(this.matrixWorld);
							var C = g.ray.origin.distanceTo(x);
							C < t || C < g.near || C > g.far || h.push({distance: C, point: x, indices: [n, q, r], face: null, faceIndex: null, object: this})
						}
					}
				} else for (p = n.position.array, s = k = 0, A = p.length; k < A; k += 3, s += 9)n = k, q = k + 1, r = k + 2, d.set(p[s], p[s + 1], p[s + 2]), e.set(p[s + 3], p[s + 4], p[s + 5]), f.set(p[s + 6], p[s + 7], p[s + 8]), x = l.side === THREE.BackSide ? b.intersectTriangle(f, e, d, !0) : b.intersectTriangle(d, e, f, l.side !== THREE.DoubleSide), null !== x && (x.applyMatrix4(this.matrixWorld),
					C = g.ray.origin.distanceTo(x), C < t || C < g.near || C > g.far || h.push({distance: C, point: x, indices: [n, q, r], face: null, faceIndex: null, object: this}))
			}
		} else if (k instanceof THREE.Geometry)for (s = this.material instanceof THREE.MeshFaceMaterial, p = !0 === s ? this.material.materials : null, t = g.precision, v = k.vertices, w = 0, u = k.faces.length; w < u; w++)if (D = k.faces[w], l = !0 === s ? p[D.materialIndex] : this.material, void 0 !== l) {
			n = v[D.a];
			q = v[D.b];
			r = v[D.c];
			if (!0 === l.morphTargets) {
				x = k.morphTargets;
				C = this.morphTargetInfluences;
				d.set(0, 0, 0);
				e.set(0, 0, 0);
				f.set(0, 0, 0);
				for (var A = 0, I = x.length; A < I; A++) {
					var z = C[A];
					if (0 !== z) {
						var y = x[A].vertices;
						d.x += (y[D.a].x - n.x) * z;
						d.y += (y[D.a].y - n.y) * z;
						d.z += (y[D.a].z - n.z) * z;
						e.x += (y[D.b].x - q.x) * z;
						e.y += (y[D.b].y - q.y) * z;
						e.z += (y[D.b].z - q.z) * z;
						f.x += (y[D.c].x - r.x) * z;
						f.y += (y[D.c].y - r.y) * z;
						f.z += (y[D.c].z - r.z) * z
					}
				}
				d.add(n);
				e.add(q);
				f.add(r);
				n = d;
				q = e;
				r = f
			}
			x = l.side === THREE.BackSide ? b.intersectTriangle(r, q, n, !0) : b.intersectTriangle(n, q, r, l.side !== THREE.DoubleSide);
			null !== x && (x.applyMatrix4(this.matrixWorld), C = g.ray.origin.distanceTo(x),
				C < t || C < g.near || C > g.far || h.push({distance: C, point: x, face: D, faceIndex: w, object: this}))
		}
	}
}();
THREE.Mesh.prototype.clone = function (a, b) {
	void 0 === a && (a = new THREE.Mesh(this.geometry, this.material));
	THREE.Object3D.prototype.clone.call(this, a, b);
	return a
};
THREE.Bone = function (a) {
	THREE.Object3D.call(this);
	this.skin = a;
	this.accumulatedSclWeight = this.accumulatedPosWeight = this.accumulatedRotWeight = 0
};
THREE.Bone.prototype = Object.create(THREE.Object3D.prototype);
THREE.Bone.prototype.updateMatrixWorld = function (a) {
	THREE.Object3D.prototype.updateMatrixWorld.call(this, a);
	this.accumulatedSclWeight = this.accumulatedPosWeight = this.accumulatedRotWeight = 0
};
THREE.Skeleton = function (a, b, c) {
	this.useVertexTexture = void 0 !== c ? c : !0;
	this.identityMatrix = new THREE.Matrix4;
	a = a || [];
	this.bones = a.slice(0);
	this.useVertexTexture ? (this.boneTextureHeight = this.boneTextureWidth = a = 256 < this.bones.length ? 64 : 64 < this.bones.length ? 32 : 16 < this.bones.length ? 16 : 8, this.boneMatrices = new Float32Array(this.boneTextureWidth * this.boneTextureHeight * 4), this.boneTexture = new THREE.DataTexture(this.boneMatrices, this.boneTextureWidth, this.boneTextureHeight, THREE.RGBAFormat, THREE.FloatType),
		this.boneTexture.minFilter = THREE.NearestFilter, this.boneTexture.magFilter = THREE.NearestFilter, this.boneTexture.generateMipmaps = !1, this.boneTexture.flipY = !1) : this.boneMatrices = new Float32Array(16 * this.bones.length);
	if (void 0 === b)this.calculateInverses(); else if (this.bones.length === b.length)this.boneInverses = b.slice(0); else for (console.warn("THREE.Skeleton bonInverses is the wrong length."), this.boneInverses = [], b = 0, a = this.bones.length; b < a; b++)this.boneInverses.push(new THREE.Matrix4)
};
THREE.Skeleton.prototype.calculateInverses = function () {
	this.boneInverses = [];
	for (var a = 0, b = this.bones.length; a < b; a++) {
		var c = new THREE.Matrix4;
		this.bones[a] && c.getInverse(this.bones[a].matrixWorld);
		this.boneInverses.push(c)
	}
};
THREE.Skeleton.prototype.pose = function () {
	for (var a, b = 0, c = this.bones.length; b < c; b++)(a = this.bones[b]) && a.matrixWorld.getInverse(this.boneInverses[b]);
	b = 0;
	for (c = this.bones.length; b < c; b++)if (a = this.bones[b])a.parent ? (a.matrix.getInverse(a.parent.matrixWorld), a.matrix.multiply(a.matrixWorld)) : a.matrix.copy(a.matrixWorld), a.matrix.decompose(a.position, a.quaternion, a.scale)
};
THREE.Skeleton.prototype.update = function () {
	for (var a = new THREE.Matrix4, b = 0, c = this.bones.length; b < c; b++)a.multiplyMatrices(this.bones[b] ? this.bones[b].matrixWorld : this.identityMatrix, this.boneInverses[b]), a.flattenToArrayOffset(this.boneMatrices, 16 * b);
	this.useVertexTexture && (this.boneTexture.needsUpdate = !0)
};
THREE.SkinnedMesh = function (a, b, c) {
	THREE.Mesh.call(this, a, b);
	this.bindMode = "attached";
	this.bindMatrix = new THREE.Matrix4;
	this.bindMatrixInverse = new THREE.Matrix4;
	a = [];
	if (this.geometry && void 0 !== this.geometry.bones) {
		for (var d, e, f, g, h = 0, k = this.geometry.bones.length; h < k; ++h)d = this.geometry.bones[h], e = d.pos, f = d.rotq, g = d.scl, b = new THREE.Bone(this), a.push(b), b.name = d.name, b.position.set(e[0], e[1], e[2]), b.quaternion.set(f[0], f[1], f[2], f[3]), void 0 !== g ? b.scale.set(g[0], g[1], g[2]) : b.scale.set(1, 1, 1);
		h = 0;
		for (k =
				 this.geometry.bones.length; h < k; ++h)d = this.geometry.bones[h], -1 !== d.parent ? a[d.parent].add(a[h]) : this.add(a[h])
	}
	this.normalizeSkinWeights();
	this.updateMatrixWorld(!0);
	this.bind(new THREE.Skeleton(a, void 0, c))
};
THREE.SkinnedMesh.prototype = Object.create(THREE.Mesh.prototype);
THREE.SkinnedMesh.prototype.bind = function (a, b) {
	this.skeleton = a;
	void 0 === b && (this.updateMatrixWorld(!0), b = this.matrixWorld);
	this.bindMatrix.copy(b);
	this.bindMatrixInverse.getInverse(b)
};
THREE.SkinnedMesh.prototype.pose = function () {
	this.skeleton.pose()
};
THREE.SkinnedMesh.prototype.normalizeSkinWeights = function () {
	if (this.geometry instanceof THREE.Geometry)for (var a = 0; a < this.geometry.skinIndices.length; a++) {
		var b = this.geometry.skinWeights[a], c = 1 / b.lengthManhattan();
		Infinity !== c ? b.multiplyScalar(c) : b.set(1)
	}
};
THREE.SkinnedMesh.prototype.updateMatrixWorld = function (a) {
	THREE.Mesh.prototype.updateMatrixWorld.call(this, !0);
	"attached" === this.bindMode ? this.bindMatrixInverse.getInverse(this.matrixWorld) : "detached" === this.bindMode ? this.bindMatrixInverse.getInverse(this.bindMatrix) : console.warn("THREE.SkinnedMesh unreckognized bindMode: " + this.bindMode)
};
THREE.SkinnedMesh.prototype.clone = function (a) {
	void 0 === a && (a = new THREE.SkinnedMesh(this.geometry, this.material, this.useVertexTexture));
	THREE.Mesh.prototype.clone.call(this, a);
	return a
};
THREE.MorphAnimMesh = function (a, b) {
	THREE.Mesh.call(this, a, b);
	this.duration = 1E3;
	this.mirroredLoop = !1;
	this.currentKeyframe = this.lastKeyframe = this.time = 0;
	this.direction = 1;
	this.directionBackwards = !1;
	this.setFrameRange(0, this.geometry.morphTargets.length - 1)
};
THREE.MorphAnimMesh.prototype = Object.create(THREE.Mesh.prototype);
THREE.MorphAnimMesh.prototype.setFrameRange = function (a, b) {
	this.startKeyframe = a;
	this.endKeyframe = b;
	this.length = this.endKeyframe - this.startKeyframe + 1
};
THREE.MorphAnimMesh.prototype.setDirectionForward = function () {
	this.direction = 1;
	this.directionBackwards = !1
};
THREE.MorphAnimMesh.prototype.setDirectionBackward = function () {
	this.direction = -1;
	this.directionBackwards = !0
};
THREE.MorphAnimMesh.prototype.parseAnimations = function () {
	var a = this.geometry;
	a.animations || (a.animations = {});
	for (var b, c = a.animations, d = /([a-z]+)_?(\d+)/, e = 0, f = a.morphTargets.length; e < f; e++) {
		var g = a.morphTargets[e].name.match(d);
		if (g && 1 < g.length) {
			g = g[1];
			c[g] || (c[g] = {start: Infinity, end: -Infinity});
			var h = c[g];
			e < h.start && (h.start = e);
			e > h.end && (h.end = e);
			b || (b = g)
		}
	}
	a.firstAnimation = b
};
THREE.MorphAnimMesh.prototype.setAnimationLabel = function (a, b, c) {
	this.geometry.animations || (this.geometry.animations = {});
	this.geometry.animations[a] = {start: b, end: c}
};
THREE.MorphAnimMesh.prototype.playAnimation = function (a, b) {
	var c = this.geometry.animations[a];
	c ? (this.setFrameRange(c.start, c.end), this.duration = (c.end - c.start) / b * 1E3, this.time = 0) : console.warn("animation[" + a + "] undefined")
};
THREE.MorphAnimMesh.prototype.updateAnimation = function (a) {
	var b = this.duration / this.length;
	this.time += this.direction * a;
	if (this.mirroredLoop) {
		if (this.time > this.duration || 0 > this.time)this.direction *= -1, this.time > this.duration && (this.time = this.duration, this.directionBackwards = !0), 0 > this.time && (this.time = 0, this.directionBackwards = !1)
	} else this.time %= this.duration, 0 > this.time && (this.time += this.duration);
	a = this.startKeyframe + THREE.Math.clamp(Math.floor(this.time / b), 0, this.length - 1);
	a !== this.currentKeyframe &&
	(this.morphTargetInfluences[this.lastKeyframe] = 0, this.morphTargetInfluences[this.currentKeyframe] = 1, this.morphTargetInfluences[a] = 0, this.lastKeyframe = this.currentKeyframe, this.currentKeyframe = a);
	b = this.time % b / b;
	this.directionBackwards && (b = 1 - b);
	this.morphTargetInfluences[this.currentKeyframe] = b;
	this.morphTargetInfluences[this.lastKeyframe] = 1 - b
};
THREE.MorphAnimMesh.prototype.interpolateTargets = function (a, b, c) {
	for (var d = this.morphTargetInfluences, e = 0, f = d.length; e < f; e++)d[e] = 0;
	-1 < a && (d[a] = 1 - c);
	-1 < b && (d[b] = c)
};
THREE.MorphAnimMesh.prototype.clone = function (a) {
	void 0 === a && (a = new THREE.MorphAnimMesh(this.geometry, this.material));
	a.duration = this.duration;
	a.mirroredLoop = this.mirroredLoop;
	a.time = this.time;
	a.lastKeyframe = this.lastKeyframe;
	a.currentKeyframe = this.currentKeyframe;
	a.direction = this.direction;
	a.directionBackwards = this.directionBackwards;
	THREE.Mesh.prototype.clone.call(this, a);
	return a
};
THREE.LOD = function () {
	THREE.Object3D.call(this);
	this.objects = []
};
THREE.LOD.prototype = Object.create(THREE.Object3D.prototype);
THREE.LOD.prototype.addLevel = function (a, b) {
	void 0 === b && (b = 0);
	b = Math.abs(b);
	for (var c = 0; c < this.objects.length && !(b < this.objects[c].distance); c++);
	this.objects.splice(c, 0, {distance: b, object: a});
	this.add(a)
};
THREE.LOD.prototype.getObjectForDistance = function (a) {
	for (var b = 1, c = this.objects.length; b < c && !(a < this.objects[b].distance); b++);
	return this.objects[b - 1].object
};
THREE.LOD.prototype.raycast = function () {
	var a = new THREE.Vector3;
	return function (b, c) {
		a.setFromMatrixPosition(this.matrixWorld);
		var d = b.ray.origin.distanceTo(a);
		this.getObjectForDistance(d).raycast(b, c)
	}
}();
THREE.LOD.prototype.update = function () {
	var a = new THREE.Vector3, b = new THREE.Vector3;
	return function (c) {
		if (1 < this.objects.length) {
			a.setFromMatrixPosition(c.matrixWorld);
			b.setFromMatrixPosition(this.matrixWorld);
			c = a.distanceTo(b);
			this.objects[0].object.visible = !0;
			for (var d = 1, e = this.objects.length; d < e; d++)if (c >= this.objects[d].distance)this.objects[d - 1].object.visible = !1, this.objects[d].object.visible = !0; else break;
			for (; d < e; d++)this.objects[d].object.visible = !1
		}
	}
}();
THREE.LOD.prototype.clone = function (a) {
	void 0 === a && (a = new THREE.LOD);
	THREE.Object3D.prototype.clone.call(this, a);
	for (var b = 0, c = this.objects.length; b < c; b++) {
		var d = this.objects[b].object.clone();
		d.visible = 0 === b;
		a.addLevel(d, this.objects[b].distance)
	}
	return a
};
THREE.Sprite = function () {
	var a = new Float32Array([-0.5, -0.5, 0, 0.5, -0.5, 0, 0.5, 0.5, 0]), b = new THREE.BufferGeometry;
	b.addAttribute("position", new THREE.BufferAttribute(a, 3));
	return function (a) {
		THREE.Object3D.call(this);
		this.geometry = b;
		this.material = void 0 !== a ? a : new THREE.SpriteMaterial
	}
}();
THREE.Sprite.prototype = Object.create(THREE.Object3D.prototype);
THREE.Sprite.prototype.raycast = function () {
	var a = new THREE.Vector3;
	return function (b, c) {
		a.setFromMatrixPosition(this.matrixWorld);
		var d = b.ray.distanceToPoint(a);
		d > this.scale.x || c.push({distance: d, point: this.position, face: null, object: this})
	}
}();
THREE.Sprite.prototype.updateMatrix = function () {
	this.matrix.compose(this.position, this.quaternion, this.scale);
	this.matrixWorldNeedsUpdate = !0
};
THREE.Sprite.prototype.clone = function (a) {
	void 0 === a && (a = new THREE.Sprite(this.material));
	THREE.Object3D.prototype.clone.call(this, a);
	return a
};
THREE.Particle = THREE.Sprite;
THREE.Scene = function () {
	THREE.Object3D.call(this);
	this.overrideMaterial = this.fog = null;
	this.autoUpdate = !0;
	this.matrixAutoUpdate = !1;
	this.__lights = [];
	this.__objectsAdded = [];
	this.__objectsRemoved = []
};
THREE.Scene.prototype = Object.create(THREE.Object3D.prototype);
THREE.Scene.prototype.__addObject = function (a) {
	if (a instanceof THREE.Light)-1 === this.__lights.indexOf(a) && this.__lights.push(a), a.target && void 0 === a.target.parent && this.add(a.target); else if (!(a instanceof THREE.Camera || a instanceof THREE.Bone)) {
		this.__objectsAdded.push(a);
		var b = this.__objectsRemoved.indexOf(a);
		-1 !== b && this.__objectsRemoved.splice(b, 1)
	}
	this.dispatchEvent({type: "objectAdded", object: a});
	a.dispatchEvent({type: "addedToScene", scene: this});
	for (b = 0; b < a.children.length; b++)this.__addObject(a.children[b])
};
THREE.Scene.prototype.__removeObject = function (a) {
	if (a instanceof THREE.Light) {
		var b = this.__lights.indexOf(a);
		-1 !== b && this.__lights.splice(b, 1);
		if (a.shadowCascadeArray)for (b = 0; b < a.shadowCascadeArray.length; b++)this.__removeObject(a.shadowCascadeArray[b])
	} else a instanceof THREE.Camera || (this.__objectsRemoved.push(a), b = this.__objectsAdded.indexOf(a), -1 !== b && this.__objectsAdded.splice(b, 1));
	this.dispatchEvent({type: "objectRemoved", object: a});
	a.dispatchEvent({type: "removedFromScene", scene: this});
	for (b =
			 0; b < a.children.length; b++)this.__removeObject(a.children[b])
};
THREE.Scene.prototype.clone = function (a) {
	void 0 === a && (a = new THREE.Scene);
	THREE.Object3D.prototype.clone.call(this, a);
	null !== this.fog && (a.fog = this.fog.clone());
	null !== this.overrideMaterial && (a.overrideMaterial = this.overrideMaterial.clone());
	a.autoUpdate = this.autoUpdate;
	a.matrixAutoUpdate = this.matrixAutoUpdate;
	return a
};
THREE.Fog = function (a, b, c) {
	this.name = "";
	this.color = new THREE.Color(a);
	this.near = void 0 !== b ? b : 1;
	this.far = void 0 !== c ? c : 1E3
};
THREE.Fog.prototype.clone = function () {
	return new THREE.Fog(this.color.getHex(), this.near, this.far)
};
THREE.FogExp2 = function (a, b) {
	this.name = "";
	this.color = new THREE.Color(a);
	this.density = void 0 !== b ? b : 2.5E-4
};
THREE.FogExp2.prototype.clone = function () {
	return new THREE.FogExp2(this.color.getHex(), this.density)
};
THREE.CanvasRenderer = function (a) {
	function b(a, b, c, d) {
		l(b);
		n(c);
		q(d);
		r(a.getStyle());
		O.stroke();
		ra.expandByScalar(2 * b)
	}

	function c(a) {
		t(a.getStyle());
		O.fill()
	}

	function d(a) {
		e(a.target)
	}

	function e(a) {
		if (!(a instanceof THREE.CompressedTexture)) {
			var b = a.wrapS === THREE.RepeatWrapping, c = a.wrapT === THREE.RepeatWrapping, d = a.image, e = document.createElement("canvas");
			e.width = d.width;
			e.height = d.height;
			var f = e.getContext("2d");
			f.setTransform(1, 0, 0, -1, 0, d.height);
			f.drawImage(d, 0, 0);
			Ca[a.id] = O.createPattern(e, !0 ===
				b && !0 === c ? "repeat" : !0 === b && !1 === c ? "repeat-x" : !1 === b && !0 === c ? "repeat-y" : "no-repeat")
		}
	}

	function f(a, b, c, f, g, h, k, l, n, r, q, s, p) {
		if (!(p instanceof THREE.DataTexture)) {
			!1 === p.hasEventListener("update", d) && (void 0 !== p.image && 0 < p.image.width && e(p), p.addEventListener("update", d));
			var m = Ca[p.id];
			if (void 0 !== m) {
				t(m);
				var m = p.offset.x / p.repeat.x, w = p.offset.y / p.repeat.y, u = p.image.width * p.repeat.x;
				p = p.image.height * p.repeat.y;
				k = (k + m) * u;
				l = (l + w) * p;
				c -= a;
				f -= b;
				g -= a;
				h -= b;
				n = (n + m) * u - k;
				r = (r + w) * p - l;
				q = (q + m) * u - k;
				s = (s + w) * p - l;
				p = n * s - q * r;
				0 !== p && (m = 1 / p, p = (s * c - r * g) * m, r = (s * f - r * h) * m, c = (n * g - q * c) * m, f = (n * h - q * f) * m, a = a - p * k - c * l, b = b - r * k - f * l, O.save(), O.transform(p, r, c, f, a, b), O.fill(), O.restore())
			} else t("rgba(0,0,0,1)"), O.fill()
		}
	}

	function g(a, b, c) {
		var d = b.x - a.x, e = b.y - a.y, f = d * d + e * e;
		0 !== f && (c /= Math.sqrt(f), d *= c, e *= c, b.x += d, b.y += e, a.x -= d, a.y -= e)
	}

	function h(a) {
		Q !== a && (Q = O.globalAlpha = a)
	}

	function k(a) {
		L !== a && (a === THREE.NormalBlending ? O.globalCompositeOperation = "source-over" : a === THREE.AdditiveBlending ? O.globalCompositeOperation = "lighter" :
			a === THREE.SubtractiveBlending && (O.globalCompositeOperation = "darker"), L = a)
	}

	function l(a) {
		S !== a && (S = O.lineWidth = a)
	}

	function n(a) {
		V !== a && (V = O.lineCap = a)
	}

	function q(a) {
		W !== a && (W = O.lineJoin = a)
	}

	function r(a) {
		R !== a && (R = O.strokeStyle = a)
	}

	function t(a) {
		B !== a && (B = O.fillStyle = a)
	}

	function s(a) {
		H.length !== a.length && (O.setLineDash(a), H = a)
	}

	console.log("THREE.CanvasRenderer", THREE.REVISION);
	var p = THREE.Math.smoothstep;
	a = a || {};
	var v = this, w, u, D, A = new THREE.Projector, x = void 0 !== a.canvas ? a.canvas : document.createElement("canvas"),
		C = x.width, I = x.height, z = Math.floor(C / 2), y = Math.floor(I / 2), K = 0, N = 0, ba = C, P = I, O = x.getContext("2d", {alpha: !0 === a.alpha}), J = new THREE.Color(0), E = 0, Q = 1, L = 0, R = null, B = null, S = null, V = null, W = null, H = [], oa, $, X, T;
	new THREE.RenderableVertex;
	new THREE.RenderableVertex;
	var ya, Ea, Aa, za, Oa, Pa, G = new THREE.Color;
	new THREE.Color;
	new THREE.Color;
	new THREE.Color;
	new THREE.Color;
	var Ba = new THREE.Color, Ya = new THREE.Color, Za = new THREE.Color, Ca = {}, ca, la, qa, ua, ja, Fa, va, Ka = new THREE.Box2, aa = new THREE.Box2, ra = new THREE.Box2, Da =
		new THREE.Color, Qa = new THREE.Color, cb = new THREE.Color, Ga = new THREE.Vector3, xa = new THREE.Vector3, ma = new THREE.Vector3, Ja = new THREE.Matrix3;
	void 0 === O.setLineDash && (O.setLineDash = function () {
	});
	this.domElement = x;
	this.devicePixelRatio = void 0 !== a.devicePixelRatio ? a.devicePixelRatio : void 0 !== self.devicePixelRatio ? self.devicePixelRatio : 1;
	this.sortElements = this.sortObjects = this.autoClear = !0;
	this.info = {render: {vertices: 0, faces: 0}};
	this.supportsVertexTextures = function () {
	};
	this.setFaceCulling = function () {
	};
	this.setSize =
		function (a, b, c) {
			C = a * this.devicePixelRatio;
			I = b * this.devicePixelRatio;
			x.width = C;
			x.height = I;
			z = Math.floor(C / 2);
			y = Math.floor(I / 2);
			!1 !== c && (x.style.width = a + "px", x.style.height = b + "px");
			Ka.min.set(-z, -y);
			Ka.max.set(z, y);
			aa.min.set(-z, -y);
			aa.max.set(z, y);
			Q = 1;
			L = 0;
			W = V = S = B = R = null;
			this.setViewport(0, 0, a, b)
		};
	this.setViewport = function (a, b, c, d) {
		K = a * this.devicePixelRatio;
		N = b * this.devicePixelRatio;
		ba = c * this.devicePixelRatio;
		P = d * this.devicePixelRatio
	};
	this.setScissor = function () {
	};
	this.enableScissorTest = function () {
	};
	this.setClearColor = function (a, b) {
		J.set(a);
		E = void 0 !== b ? b : 1;
		aa.min.set(-z, -y);
		aa.max.set(z, y)
	};
	this.setClearColorHex = function (a, b) {
		console.warn("THREE.CanvasRenderer: .setClearColorHex() is being removed. Use .setClearColor() instead.");
		this.setClearColor(a, b)
	};
	this.getClearColor = function () {
		return J
	};
	this.getClearAlpha = function () {
		return E
	};
	this.getMaxAnisotropy = function () {
		return 0
	};
	this.clear = function () {
		!1 === aa.empty() && (aa.intersect(Ka), aa.expandByScalar(2), aa.min.x += z, aa.min.y = -aa.min.y + y, aa.max.x +=
			z, aa.max.y = -aa.max.y + y, 1 > E && O.clearRect(aa.min.x | 0, aa.min.y | 0, aa.max.x - aa.min.x | 0, aa.max.y - aa.min.y | 0), 0 < E && (k(THREE.NormalBlending), h(1), t("rgba(" + Math.floor(255 * J.r) + "," + Math.floor(255 * J.g) + "," + Math.floor(255 * J.b) + "," + E + ")"), O.fillRect(aa.min.x | 0, aa.min.y | 0, aa.max.x - aa.min.x | 0, aa.max.y - aa.min.y | 0)), aa.makeEmpty())
	};
	this.clearColor = function () {
	};
	this.clearDepth = function () {
	};
	this.clearStencil = function () {
	};
	this.render = function (a, x) {
		if (!1 === x instanceof THREE.Camera)console.error("THREE.CanvasRenderer.render: camera is not an instance of THREE.Camera.");
		else {
			!0 === this.autoClear && this.clear();
			v.info.render.vertices = 0;
			v.info.render.faces = 0;
			O.setTransform(ba / C, 0, 0, -P / I, K, I - N);
			O.translate(z, y);
			w = A.projectScene(a, x, this.sortObjects, this.sortElements);
			u = w.elements;
			D = w.lights;
			oa = x;
			Ja.getNormalMatrix(x.matrixWorldInverse);
			Da.setRGB(0, 0, 0);
			Qa.setRGB(0, 0, 0);
			cb.setRGB(0, 0, 0);
			for (var L = 0, Q = D.length; L < Q; L++) {
				var E = D[L], H = E.color;
				E instanceof THREE.AmbientLight ? Da.add(H) : E instanceof THREE.DirectionalLight ? Qa.add(H) : E instanceof THREE.PointLight && cb.add(H)
			}
			L =
				0;
			for (Q = u.length; L < Q; L++) {
				var J = u[L], B = J.material;
				if (void 0 !== B && 0 !== B.opacity) {
					ra.makeEmpty();
					if (J instanceof THREE.RenderableSprite) {
						$ = J;
						$.x *= z;
						$.y *= y;
						var E = $, R = J, H = B;
						h(H.opacity);
						k(H.blending);
						var ea = R.scale.x * z, R = R.scale.y * y, J = 0.5 * Math.sqrt(ea * ea + R * R);
						ra.min.set(E.x - J, E.y - J);
						ra.max.set(E.x + J, E.y + J);
						if (H instanceof THREE.SpriteMaterial) {
							var da = H.map;
							if (null !== da && void 0 !== da.image) {
								!1 === da.hasEventListener("update", d) && (0 < da.image.width && e(da), da.addEventListener("update", d));
								J = Ca[da.id];
								void 0 !==
									J ? t(J) : t("rgba( 0, 0, 0, 1 )");
								var S = da.image, J = S.width * da.offset.x, B = S.height * da.offset.y, V = S.width * da.repeat.x, da = S.height * da.repeat.y, S = ea / V, m = R / da;
								O.save();
								O.translate(E.x, E.y);
								0 !== H.rotation && O.rotate(H.rotation);
								O.translate(-ea / 2, -R / 2);
								O.scale(S, m);
								O.translate(-J, -B);
								O.fillRect(J, B, V, da)
							} else t(H.color.getStyle()), O.save(), O.translate(E.x, E.y), 0 !== H.rotation && O.rotate(H.rotation), O.scale(ea, -R), O.fillRect(-0.5, -0.5, 1, 1);
							O.restore()
						} else H instanceof THREE.SpriteCanvasMaterial && (r(H.color.getStyle()),
							t(H.color.getStyle()), O.save(), O.translate(E.x, E.y), 0 !== H.rotation && O.rotate(H.rotation), O.scale(ea, R), H.program(O), O.restore())
					} else if (J instanceof THREE.RenderableLine) {
						if ($ = J.v1, X = J.v2, $.positionScreen.x *= z, $.positionScreen.y *= y, X.positionScreen.x *= z, X.positionScreen.y *= y, ra.setFromPoints([$.positionScreen, X.positionScreen]), !0 === Ka.isIntersectionBox(ra))if (E = $, H = X, ea = J, R = B, h(R.opacity), k(R.blending), O.beginPath(), O.moveTo(E.positionScreen.x, E.positionScreen.y), O.lineTo(H.positionScreen.x, H.positionScreen.y),
							R instanceof THREE.LineBasicMaterial) {
							l(R.linewidth);
							n(R.linecap);
							q(R.linejoin);
							if (R.vertexColors !== THREE.VertexColors)r(R.color.getStyle()); else if (J = ea.vertexColors[0].getStyle(), ea = ea.vertexColors[1].getStyle(), J === ea)r(J); else {
								try {
									var W = O.createLinearGradient(E.positionScreen.x, E.positionScreen.y, H.positionScreen.x, H.positionScreen.y);
									W.addColorStop(0, J);
									W.addColorStop(1, ea)
								} catch (xb) {
									W = J
								}
								r(W)
							}
							O.stroke();
							ra.expandByScalar(2 * R.linewidth)
						} else R instanceof THREE.LineDashedMaterial && (l(R.linewidth),
							n(R.linecap), q(R.linejoin), r(R.color.getStyle()), s([R.dashSize, R.gapSize]), O.stroke(), ra.expandByScalar(2 * R.linewidth), s([]))
					} else if (J instanceof THREE.RenderableFace) {
						$ = J.v1;
						X = J.v2;
						T = J.v3;
						if (-1 > $.positionScreen.z || 1 < $.positionScreen.z)continue;
						if (-1 > X.positionScreen.z || 1 < X.positionScreen.z)continue;
						if (-1 > T.positionScreen.z || 1 < T.positionScreen.z)continue;
						$.positionScreen.x *= z;
						$.positionScreen.y *= y;
						X.positionScreen.x *= z;
						X.positionScreen.y *= y;
						T.positionScreen.x *= z;
						T.positionScreen.y *= y;
						0 < B.overdraw &&
						(g($.positionScreen, X.positionScreen, B.overdraw), g(X.positionScreen, T.positionScreen, B.overdraw), g(T.positionScreen, $.positionScreen, B.overdraw));
						ra.setFromPoints([$.positionScreen, X.positionScreen, T.positionScreen]);
						if (!0 === Ka.isIntersectionBox(ra)) {
							H = $;
							ea = X;
							R = T;
							E = B;
							v.info.render.vertices += 3;
							v.info.render.faces++;
							h(E.opacity);
							k(E.blending);
							ya = H.positionScreen.x;
							Ea = H.positionScreen.y;
							Aa = ea.positionScreen.x;
							za = ea.positionScreen.y;
							Oa = R.positionScreen.x;
							Pa = R.positionScreen.y;
							var B = ya, V = Ea, da = Aa, S = za,
								m = Oa, Ta = Pa;
							O.beginPath();
							O.moveTo(B, V);
							O.lineTo(da, S);
							O.lineTo(m, Ta);
							O.closePath();
							if ((E instanceof THREE.MeshLambertMaterial || E instanceof THREE.MeshPhongMaterial) && null === E.map) {
								Ba.copy(E.color);
								Ya.copy(E.emissive);
								E.vertexColors === THREE.FaceColors && Ba.multiply(J.color);
								G.copy(Da);
								xa.copy(H.positionWorld).add(ea.positionWorld).add(R.positionWorld).divideScalar(3);
								H = xa;
								ea = J.normalModel;
								R = G;
								J = 0;
								for (B = D.length; J < B; J++)V = D[J], Za.copy(V.color), V instanceof THREE.DirectionalLight ? (da = Ga.setFromMatrixPosition(V.matrixWorld).normalize(),
									S = ea.dot(da), 0 >= S || (S *= V.intensity, R.add(Za.multiplyScalar(S)))) : V instanceof THREE.PointLight && (da = Ga.setFromMatrixPosition(V.matrixWorld), S = ea.dot(Ga.subVectors(da, H).normalize()), 0 >= S || (S *= 0 == V.distance ? 1 : 1 - Math.min(H.distanceTo(da) / V.distance, 1), 0 != S && (S *= V.intensity, R.add(Za.multiplyScalar(S)))));
								G.multiply(Ba).add(Ya);
								!0 === E.wireframe ? b(G, E.wireframeLinewidth, E.wireframeLinecap, E.wireframeLinejoin) : c(G)
							} else E instanceof THREE.MeshBasicMaterial || E instanceof THREE.MeshLambertMaterial || E instanceof
								THREE.MeshPhongMaterial ? null !== E.map ? E.map.mapping instanceof THREE.UVMapping && (ca = J.uvs, f(ya, Ea, Aa, za, Oa, Pa, ca[0].x, ca[0].y, ca[1].x, ca[1].y, ca[2].x, ca[2].y, E.map)) : null !== E.envMap ? E.envMap.mapping instanceof THREE.SphericalReflectionMapping ? (ma.copy(J.vertexNormalsModel[0]).applyMatrix3(Ja), la = 0.5 * ma.x + 0.5, qa = 0.5 * ma.y + 0.5, ma.copy(J.vertexNormalsModel[1]).applyMatrix3(Ja), ua = 0.5 * ma.x + 0.5, ja = 0.5 * ma.y + 0.5, ma.copy(J.vertexNormalsModel[2]).applyMatrix3(Ja), Fa = 0.5 * ma.x + 0.5, va = 0.5 * ma.y + 0.5, f(ya, Ea, Aa, za,
								Oa, Pa, la, qa, ua, ja, Fa, va, E.envMap)) : E.envMap.mapping instanceof THREE.SphericalRefractionMapping && (ma.copy(J.vertexNormalsModel[0]).applyMatrix3(Ja), la = -0.5 * ma.x + 0.5, qa = -0.5 * ma.y + 0.5, ma.copy(J.vertexNormalsModel[1]).applyMatrix3(Ja), ua = -0.5 * ma.x + 0.5, ja = -0.5 * ma.y + 0.5, ma.copy(J.vertexNormalsModel[2]).applyMatrix3(Ja), Fa = -0.5 * ma.x + 0.5, va = -0.5 * ma.y + 0.5, f(ya, Ea, Aa, za, Oa, Pa, la, qa, ua, ja, Fa, va, E.envMap)) : (G.copy(E.color), E.vertexColors === THREE.FaceColors && G.multiply(J.color), !0 === E.wireframe ? b(G, E.wireframeLinewidth,
								E.wireframeLinecap, E.wireframeLinejoin) : c(G)) : (E instanceof THREE.MeshDepthMaterial ? G.r = G.g = G.b = 1 - p(H.positionScreen.z * H.positionScreen.w, oa.near, oa.far) : E instanceof THREE.MeshNormalMaterial ? (ma.copy(J.normalModel).applyMatrix3(Ja), G.setRGB(ma.x, ma.y, ma.z).multiplyScalar(0.5).addScalar(0.5)) : G.setRGB(1, 1, 1), !0 === E.wireframe ? b(G, E.wireframeLinewidth, E.wireframeLinecap, E.wireframeLinejoin) : c(G))
						}
					}
					aa.union(ra)
				}
			}
			O.setTransform(1, 0, 0, 1, 0, 0)
		}
	}
};
THREE.ShaderChunk = {};
THREE.ShaderChunk.alphatest_fragment = "#ifdef ALPHATEST\n\n\tif ( gl_FragColor.a < ALPHATEST ) discard;\n\n#endif\n";
THREE.ShaderChunk.lights_lambert_vertex = "vLightFront = vec3( 0.0 );\n\n#ifdef DOUBLE_SIDED\n\n\tvLightBack = vec3( 0.0 );\n\n#endif\n\ntransformedNormal = normalize( transformedNormal );\n\n#if MAX_DIR_LIGHTS > 0\n\nfor( int i = 0; i < MAX_DIR_LIGHTS; i ++ ) {\n\n\tvec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );\n\tvec3 dirVector = normalize( lDirection.xyz );\n\n\tfloat dotProduct = dot( transformedNormal, dirVector );\n\tvec3 directionalLightWeighting = vec3( max( dotProduct, 0.0 ) );\n\n\t#ifdef DOUBLE_SIDED\n\n\t\tvec3 directionalLightWeightingBack = vec3( max( -dotProduct, 0.0 ) );\n\n\t\t#ifdef WRAP_AROUND\n\n\t\t\tvec3 directionalLightWeightingHalfBack = vec3( max( -0.5 * dotProduct + 0.5, 0.0 ) );\n\n\t\t#endif\n\n\t#endif\n\n\t#ifdef WRAP_AROUND\n\n\t\tvec3 directionalLightWeightingHalf = vec3( max( 0.5 * dotProduct + 0.5, 0.0 ) );\n\t\tdirectionalLightWeighting = mix( directionalLightWeighting, directionalLightWeightingHalf, wrapRGB );\n\n\t\t#ifdef DOUBLE_SIDED\n\n\t\t\tdirectionalLightWeightingBack = mix( directionalLightWeightingBack, directionalLightWeightingHalfBack, wrapRGB );\n\n\t\t#endif\n\n\t#endif\n\n\tvLightFront += directionalLightColor[ i ] * directionalLightWeighting;\n\n\t#ifdef DOUBLE_SIDED\n\n\t\tvLightBack += directionalLightColor[ i ] * directionalLightWeightingBack;\n\n\t#endif\n\n}\n\n#endif\n\n#if MAX_POINT_LIGHTS > 0\n\n\tfor( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\n\n\t\tvec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\n\t\tvec3 lVector = lPosition.xyz - mvPosition.xyz;\n\n\t\tfloat lDistance = 1.0;\n\t\tif ( pointLightDistance[ i ] > 0.0 )\n\t\t\tlDistance = 1.0 - min( ( length( lVector ) / pointLightDistance[ i ] ), 1.0 );\n\n\t\tlVector = normalize( lVector );\n\t\tfloat dotProduct = dot( transformedNormal, lVector );\n\n\t\tvec3 pointLightWeighting = vec3( max( dotProduct, 0.0 ) );\n\n\t\t#ifdef DOUBLE_SIDED\n\n\t\t\tvec3 pointLightWeightingBack = vec3( max( -dotProduct, 0.0 ) );\n\n\t\t\t#ifdef WRAP_AROUND\n\n\t\t\t\tvec3 pointLightWeightingHalfBack = vec3( max( -0.5 * dotProduct + 0.5, 0.0 ) );\n\n\t\t\t#endif\n\n\t\t#endif\n\n\t\t#ifdef WRAP_AROUND\n\n\t\t\tvec3 pointLightWeightingHalf = vec3( max( 0.5 * dotProduct + 0.5, 0.0 ) );\n\t\t\tpointLightWeighting = mix( pointLightWeighting, pointLightWeightingHalf, wrapRGB );\n\n\t\t\t#ifdef DOUBLE_SIDED\n\n\t\t\t\tpointLightWeightingBack = mix( pointLightWeightingBack, pointLightWeightingHalfBack, wrapRGB );\n\n\t\t\t#endif\n\n\t\t#endif\n\n\t\tvLightFront += pointLightColor[ i ] * pointLightWeighting * lDistance;\n\n\t\t#ifdef DOUBLE_SIDED\n\n\t\t\tvLightBack += pointLightColor[ i ] * pointLightWeightingBack * lDistance;\n\n\t\t#endif\n\n\t}\n\n#endif\n\n#if MAX_SPOT_LIGHTS > 0\n\n\tfor( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {\n\n\t\tvec4 lPosition = viewMatrix * vec4( spotLightPosition[ i ], 1.0 );\n\t\tvec3 lVector = lPosition.xyz - mvPosition.xyz;\n\n\t\tfloat spotEffect = dot( spotLightDirection[ i ], normalize( spotLightPosition[ i ] - worldPosition.xyz ) );\n\n\t\tif ( spotEffect > spotLightAngleCos[ i ] ) {\n\n\t\t\tspotEffect = max( pow( max( spotEffect, 0.0 ), spotLightExponent[ i ] ), 0.0 );\n\n\t\t\tfloat lDistance = 1.0;\n\t\t\tif ( spotLightDistance[ i ] > 0.0 )\n\t\t\t\tlDistance = 1.0 - min( ( length( lVector ) / spotLightDistance[ i ] ), 1.0 );\n\n\t\t\tlVector = normalize( lVector );\n\n\t\t\tfloat dotProduct = dot( transformedNormal, lVector );\n\t\t\tvec3 spotLightWeighting = vec3( max( dotProduct, 0.0 ) );\n\n\t\t\t#ifdef DOUBLE_SIDED\n\n\t\t\t\tvec3 spotLightWeightingBack = vec3( max( -dotProduct, 0.0 ) );\n\n\t\t\t\t#ifdef WRAP_AROUND\n\n\t\t\t\t\tvec3 spotLightWeightingHalfBack = vec3( max( -0.5 * dotProduct + 0.5, 0.0 ) );\n\n\t\t\t\t#endif\n\n\t\t\t#endif\n\n\t\t\t#ifdef WRAP_AROUND\n\n\t\t\t\tvec3 spotLightWeightingHalf = vec3( max( 0.5 * dotProduct + 0.5, 0.0 ) );\n\t\t\t\tspotLightWeighting = mix( spotLightWeighting, spotLightWeightingHalf, wrapRGB );\n\n\t\t\t\t#ifdef DOUBLE_SIDED\n\n\t\t\t\t\tspotLightWeightingBack = mix( spotLightWeightingBack, spotLightWeightingHalfBack, wrapRGB );\n\n\t\t\t\t#endif\n\n\t\t\t#endif\n\n\t\t\tvLightFront += spotLightColor[ i ] * spotLightWeighting * lDistance * spotEffect;\n\n\t\t\t#ifdef DOUBLE_SIDED\n\n\t\t\t\tvLightBack += spotLightColor[ i ] * spotLightWeightingBack * lDistance * spotEffect;\n\n\t\t\t#endif\n\n\t\t}\n\n\t}\n\n#endif\n\n#if MAX_HEMI_LIGHTS > 0\n\n\tfor( int i = 0; i < MAX_HEMI_LIGHTS; i ++ ) {\n\n\t\tvec4 lDirection = viewMatrix * vec4( hemisphereLightDirection[ i ], 0.0 );\n\t\tvec3 lVector = normalize( lDirection.xyz );\n\n\t\tfloat dotProduct = dot( transformedNormal, lVector );\n\n\t\tfloat hemiDiffuseWeight = 0.5 * dotProduct + 0.5;\n\t\tfloat hemiDiffuseWeightBack = -0.5 * dotProduct + 0.5;\n\n\t\tvLightFront += mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight );\n\n\t\t#ifdef DOUBLE_SIDED\n\n\t\t\tvLightBack += mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeightBack );\n\n\t\t#endif\n\n\t}\n\n#endif\n\nvLightFront = vLightFront * diffuse + ambient * ambientLightColor + emissive;\n\n#ifdef DOUBLE_SIDED\n\n\tvLightBack = vLightBack * diffuse + ambient * ambientLightColor + emissive;\n\n#endif";
THREE.ShaderChunk.map_particle_pars_fragment = "#ifdef USE_MAP\n\n\tuniform sampler2D map;\n\n#endif";
THREE.ShaderChunk.default_vertex = "vec4 mvPosition;\n\n#ifdef USE_SKINNING\n\n\tmvPosition = modelViewMatrix * skinned;\n\n#endif\n\n#if !defined( USE_SKINNING ) && defined( USE_MORPHTARGETS )\n\n\tmvPosition = modelViewMatrix * vec4( morphed, 1.0 );\n\n#endif\n\n#if !defined( USE_SKINNING ) && ! defined( USE_MORPHTARGETS )\n\n\tmvPosition = modelViewMatrix * vec4( position, 1.0 );\n\n#endif\n\ngl_Position = projectionMatrix * mvPosition;";
THREE.ShaderChunk.map_pars_fragment = "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP )\n\n\tvarying vec2 vUv;\n\n#endif\n\n#ifdef USE_MAP\n\n\tuniform sampler2D map;\n\n#endif";
THREE.ShaderChunk.skinnormal_vertex = "#ifdef USE_SKINNING\n\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix  = bindMatrixInverse * skinMatrix * bindMatrix;\n\n\t#ifdef USE_MORPHNORMALS\n\n\tvec4 skinnedNormal = skinMatrix * vec4( morphedNormal, 0.0 );\n\n\t#else\n\n\tvec4 skinnedNormal = skinMatrix * vec4( normal, 0.0 );\n\n\t#endif\n\n#endif\n";
THREE.ShaderChunk.logdepthbuf_pars_vertex = "#ifdef USE_LOGDEPTHBUF\n\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\n\t\tvarying float vFragDepth;\n\n\t#endif\n\n\tuniform float logDepthBufFC;\n\n#endif";
THREE.ShaderChunk.lightmap_pars_vertex = "#ifdef USE_LIGHTMAP\n\n\tvarying vec2 vUv2;\n\n#endif";
THREE.ShaderChunk.lights_phong_fragment = "vec3 normal = normalize( vNormal );\nvec3 viewPosition = normalize( vViewPosition );\n\n#ifdef DOUBLE_SIDED\n\n\tnormal = normal * ( -1.0 + 2.0 * float( gl_FrontFacing ) );\n\n#endif\n\n#ifdef USE_NORMALMAP\n\n\tnormal = perturbNormal2Arb( -vViewPosition, normal );\n\n#elif defined( USE_BUMPMAP )\n\n\tnormal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n\n#endif\n\n#if MAX_POINT_LIGHTS > 0\n\n\tvec3 pointDiffuse = vec3( 0.0 );\n\tvec3 pointSpecular = vec3( 0.0 );\n\n\tfor ( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\n\n\t\tvec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\n\t\tvec3 lVector = lPosition.xyz + vViewPosition.xyz;\n\n\t\tfloat lDistance = 1.0;\n\t\tif ( pointLightDistance[ i ] > 0.0 )\n\t\t\tlDistance = 1.0 - min( ( length( lVector ) / pointLightDistance[ i ] ), 1.0 );\n\n\t\tlVector = normalize( lVector );\n\n\t\t\t\t// diffuse\n\n\t\tfloat dotProduct = dot( normal, lVector );\n\n\t\t#ifdef WRAP_AROUND\n\n\t\t\tfloat pointDiffuseWeightFull = max( dotProduct, 0.0 );\n\t\t\tfloat pointDiffuseWeightHalf = max( 0.5 * dotProduct + 0.5, 0.0 );\n\n\t\t\tvec3 pointDiffuseWeight = mix( vec3( pointDiffuseWeightFull ), vec3( pointDiffuseWeightHalf ), wrapRGB );\n\n\t\t#else\n\n\t\t\tfloat pointDiffuseWeight = max( dotProduct, 0.0 );\n\n\t\t#endif\n\n\t\tpointDiffuse += diffuse * pointLightColor[ i ] * pointDiffuseWeight * lDistance;\n\n\t\t\t\t// specular\n\n\t\tvec3 pointHalfVector = normalize( lVector + viewPosition );\n\t\tfloat pointDotNormalHalf = max( dot( normal, pointHalfVector ), 0.0 );\n\t\tfloat pointSpecularWeight = specularStrength * max( pow( pointDotNormalHalf, shininess ), 0.0 );\n\n\t\tfloat specularNormalization = ( shininess + 2.0 ) / 8.0;\n\n\t\tvec3 schlick = specular + vec3( 1.0 - specular ) * pow( max( 1.0 - dot( lVector, pointHalfVector ), 0.0 ), 5.0 );\n\t\tpointSpecular += schlick * pointLightColor[ i ] * pointSpecularWeight * pointDiffuseWeight * lDistance * specularNormalization;\n\n\t}\n\n#endif\n\n#if MAX_SPOT_LIGHTS > 0\n\n\tvec3 spotDiffuse = vec3( 0.0 );\n\tvec3 spotSpecular = vec3( 0.0 );\n\n\tfor ( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {\n\n\t\tvec4 lPosition = viewMatrix * vec4( spotLightPosition[ i ], 1.0 );\n\t\tvec3 lVector = lPosition.xyz + vViewPosition.xyz;\n\n\t\tfloat lDistance = 1.0;\n\t\tif ( spotLightDistance[ i ] > 0.0 )\n\t\t\tlDistance = 1.0 - min( ( length( lVector ) / spotLightDistance[ i ] ), 1.0 );\n\n\t\tlVector = normalize( lVector );\n\n\t\tfloat spotEffect = dot( spotLightDirection[ i ], normalize( spotLightPosition[ i ] - vWorldPosition ) );\n\n\t\tif ( spotEffect > spotLightAngleCos[ i ] ) {\n\n\t\t\tspotEffect = max( pow( max( spotEffect, 0.0 ), spotLightExponent[ i ] ), 0.0 );\n\n\t\t\t\t\t// diffuse\n\n\t\t\tfloat dotProduct = dot( normal, lVector );\n\n\t\t\t#ifdef WRAP_AROUND\n\n\t\t\t\tfloat spotDiffuseWeightFull = max( dotProduct, 0.0 );\n\t\t\t\tfloat spotDiffuseWeightHalf = max( 0.5 * dotProduct + 0.5, 0.0 );\n\n\t\t\t\tvec3 spotDiffuseWeight = mix( vec3( spotDiffuseWeightFull ), vec3( spotDiffuseWeightHalf ), wrapRGB );\n\n\t\t\t#else\n\n\t\t\t\tfloat spotDiffuseWeight = max( dotProduct, 0.0 );\n\n\t\t\t#endif\n\n\t\t\tspotDiffuse += diffuse * spotLightColor[ i ] * spotDiffuseWeight * lDistance * spotEffect;\n\n\t\t\t\t\t// specular\n\n\t\t\tvec3 spotHalfVector = normalize( lVector + viewPosition );\n\t\t\tfloat spotDotNormalHalf = max( dot( normal, spotHalfVector ), 0.0 );\n\t\t\tfloat spotSpecularWeight = specularStrength * max( pow( spotDotNormalHalf, shininess ), 0.0 );\n\n\t\t\tfloat specularNormalization = ( shininess + 2.0 ) / 8.0;\n\n\t\t\tvec3 schlick = specular + vec3( 1.0 - specular ) * pow( max( 1.0 - dot( lVector, spotHalfVector ), 0.0 ), 5.0 );\n\t\t\tspotSpecular += schlick * spotLightColor[ i ] * spotSpecularWeight * spotDiffuseWeight * lDistance * specularNormalization * spotEffect;\n\n\t\t}\n\n\t}\n\n#endif\n\n#if MAX_DIR_LIGHTS > 0\n\n\tvec3 dirDiffuse = vec3( 0.0 );\n\tvec3 dirSpecular = vec3( 0.0 );\n\n\tfor( int i = 0; i < MAX_DIR_LIGHTS; i ++ ) {\n\n\t\tvec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );\n\t\tvec3 dirVector = normalize( lDirection.xyz );\n\n\t\t\t\t// diffuse\n\n\t\tfloat dotProduct = dot( normal, dirVector );\n\n\t\t#ifdef WRAP_AROUND\n\n\t\t\tfloat dirDiffuseWeightFull = max( dotProduct, 0.0 );\n\t\t\tfloat dirDiffuseWeightHalf = max( 0.5 * dotProduct + 0.5, 0.0 );\n\n\t\t\tvec3 dirDiffuseWeight = mix( vec3( dirDiffuseWeightFull ), vec3( dirDiffuseWeightHalf ), wrapRGB );\n\n\t\t#else\n\n\t\t\tfloat dirDiffuseWeight = max( dotProduct, 0.0 );\n\n\t\t#endif\n\n\t\tdirDiffuse += diffuse * directionalLightColor[ i ] * dirDiffuseWeight;\n\n\t\t// specular\n\n\t\tvec3 dirHalfVector = normalize( dirVector + viewPosition );\n\t\tfloat dirDotNormalHalf = max( dot( normal, dirHalfVector ), 0.0 );\n\t\tfloat dirSpecularWeight = specularStrength * max( pow( dirDotNormalHalf, shininess ), 0.0 );\n\n\t\t/*\n\t\t// fresnel term from skin shader\n\t\tconst float F0 = 0.128;\n\n\t\tfloat base = 1.0 - dot( viewPosition, dirHalfVector );\n\t\tfloat exponential = pow( base, 5.0 );\n\n\t\tfloat fresnel = exponential + F0 * ( 1.0 - exponential );\n\t\t*/\n\n\t\t/*\n\t\t// fresnel term from fresnel shader\n\t\tconst float mFresnelBias = 0.08;\n\t\tconst float mFresnelScale = 0.3;\n\t\tconst float mFresnelPower = 5.0;\n\n\t\tfloat fresnel = mFresnelBias + mFresnelScale * pow( 1.0 + dot( normalize( -viewPosition ), normal ), mFresnelPower );\n\t\t*/\n\n\t\tfloat specularNormalization = ( shininess + 2.0 ) / 8.0;\n\n\t\t// \t\tdirSpecular += specular * directionalLightColor[ i ] * dirSpecularWeight * dirDiffuseWeight * specularNormalization * fresnel;\n\n\t\tvec3 schlick = specular + vec3( 1.0 - specular ) * pow( max( 1.0 - dot( dirVector, dirHalfVector ), 0.0 ), 5.0 );\n\t\tdirSpecular += schlick * directionalLightColor[ i ] * dirSpecularWeight * dirDiffuseWeight * specularNormalization;\n\n\n\t}\n\n#endif\n\n#if MAX_HEMI_LIGHTS > 0\n\n\tvec3 hemiDiffuse = vec3( 0.0 );\n\tvec3 hemiSpecular = vec3( 0.0 );\n\n\tfor( int i = 0; i < MAX_HEMI_LIGHTS; i ++ ) {\n\n\t\tvec4 lDirection = viewMatrix * vec4( hemisphereLightDirection[ i ], 0.0 );\n\t\tvec3 lVector = normalize( lDirection.xyz );\n\n\t\t// diffuse\n\n\t\tfloat dotProduct = dot( normal, lVector );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotProduct + 0.5;\n\n\t\tvec3 hemiColor = mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight );\n\n\t\themiDiffuse += diffuse * hemiColor;\n\n\t\t// specular (sky light)\n\n\t\tvec3 hemiHalfVectorSky = normalize( lVector + viewPosition );\n\t\tfloat hemiDotNormalHalfSky = 0.5 * dot( normal, hemiHalfVectorSky ) + 0.5;\n\t\tfloat hemiSpecularWeightSky = specularStrength * max( pow( max( hemiDotNormalHalfSky, 0.0 ), shininess ), 0.0 );\n\n\t\t// specular (ground light)\n\n\t\tvec3 lVectorGround = -lVector;\n\n\t\tvec3 hemiHalfVectorGround = normalize( lVectorGround + viewPosition );\n\t\tfloat hemiDotNormalHalfGround = 0.5 * dot( normal, hemiHalfVectorGround ) + 0.5;\n\t\tfloat hemiSpecularWeightGround = specularStrength * max( pow( max( hemiDotNormalHalfGround, 0.0 ), shininess ), 0.0 );\n\n\t\tfloat dotProductGround = dot( normal, lVectorGround );\n\n\t\tfloat specularNormalization = ( shininess + 2.0 ) / 8.0;\n\n\t\tvec3 schlickSky = specular + vec3( 1.0 - specular ) * pow( max( 1.0 - dot( lVector, hemiHalfVectorSky ), 0.0 ), 5.0 );\n\t\tvec3 schlickGround = specular + vec3( 1.0 - specular ) * pow( max( 1.0 - dot( lVectorGround, hemiHalfVectorGround ), 0.0 ), 5.0 );\n\t\themiSpecular += hemiColor * specularNormalization * ( schlickSky * hemiSpecularWeightSky * max( dotProduct, 0.0 ) + schlickGround * hemiSpecularWeightGround * max( dotProductGround, 0.0 ) );\n\n\t}\n\n#endif\n\nvec3 totalDiffuse = vec3( 0.0 );\nvec3 totalSpecular = vec3( 0.0 );\n\n#if MAX_DIR_LIGHTS > 0\n\n\ttotalDiffuse += dirDiffuse;\n\ttotalSpecular += dirSpecular;\n\n#endif\n\n#if MAX_HEMI_LIGHTS > 0\n\n\ttotalDiffuse += hemiDiffuse;\n\ttotalSpecular += hemiSpecular;\n\n#endif\n\n#if MAX_POINT_LIGHTS > 0\n\n\ttotalDiffuse += pointDiffuse;\n\ttotalSpecular += pointSpecular;\n\n#endif\n\n#if MAX_SPOT_LIGHTS > 0\n\n\ttotalDiffuse += spotDiffuse;\n\ttotalSpecular += spotSpecular;\n\n#endif\n\n#ifdef METAL\n\n\tgl_FragColor.xyz = gl_FragColor.xyz * ( emissive + totalDiffuse + ambientLightColor * ambient + totalSpecular );\n\n#else\n\n\tgl_FragColor.xyz = gl_FragColor.xyz * ( emissive + totalDiffuse + ambientLightColor * ambient ) + totalSpecular;\n\n#endif";
THREE.ShaderChunk.fog_pars_fragment = "#ifdef USE_FOG\n\n\tuniform vec3 fogColor;\n\n\t#ifdef FOG_EXP2\n\n\t\tuniform float fogDensity;\n\n\t#else\n\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n\n#endif";
THREE.ShaderChunk.morphnormal_vertex = "#ifdef USE_MORPHNORMALS\n\n\tvec3 morphedNormal = vec3( 0.0 );\n\n\tmorphedNormal += ( morphNormal0 - normal ) * morphTargetInfluences[ 0 ];\n\tmorphedNormal += ( morphNormal1 - normal ) * morphTargetInfluences[ 1 ];\n\tmorphedNormal += ( morphNormal2 - normal ) * morphTargetInfluences[ 2 ];\n\tmorphedNormal += ( morphNormal3 - normal ) * morphTargetInfluences[ 3 ];\n\n\tmorphedNormal += normal;\n\n#endif";
THREE.ShaderChunk.envmap_pars_fragment = "#ifdef USE_ENVMAP\n\n\tuniform float reflectivity;\n\tuniform samplerCube envMap;\n\tuniform float flipEnvMap;\n\tuniform int combine;\n\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )\n\n\t\tuniform bool useRefract;\n\t\tuniform float refractionRatio;\n\n\t#else\n\n\t\tvarying vec3 vReflect;\n\n\t#endif\n\n#endif";
THREE.ShaderChunk.logdepthbuf_fragment = "#if defined(USE_LOGDEPTHBUF) && defined(USE_LOGDEPTHBUF_EXT)\n\n\tgl_FragDepthEXT = log2(vFragDepth) * logDepthBufFC * 0.5;\n\n#endif";
THREE.ShaderChunk.normalmap_pars_fragment = "#ifdef USE_NORMALMAP\n\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n\n\t\t\t// Per-Pixel Tangent Space Normal Mapping\n\t\t\t// http://hacksoflife.blogspot.ch/2009/11/per-pixel-tangent-space-normal-mapping.html\n\n\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm ) {\n\n\t\tvec3 q0 = dFdx( eye_pos.xyz );\n\t\tvec3 q1 = dFdy( eye_pos.xyz );\n\t\tvec2 st0 = dFdx( vUv.st );\n\t\tvec2 st1 = dFdy( vUv.st );\n\n\t\tvec3 S = normalize( q0 * st1.t - q1 * st0.t );\n\t\tvec3 T = normalize( -q0 * st1.s + q1 * st0.s );\n\t\tvec3 N = normalize( surf_norm );\n\n\t\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t\tmapN.xy = normalScale * mapN.xy;\n\t\tmat3 tsn = mat3( S, T, N );\n\t\treturn normalize( tsn * mapN );\n\n\t}\n\n#endif\n";
THREE.ShaderChunk.lights_phong_pars_vertex = "#if MAX_SPOT_LIGHTS > 0 || defined( USE_BUMPMAP ) || defined( USE_ENVMAP )\n\n\tvarying vec3 vWorldPosition;\n\n#endif\n";
THREE.ShaderChunk.lightmap_pars_fragment = "#ifdef USE_LIGHTMAP\n\n\tvarying vec2 vUv2;\n\tuniform sampler2D lightMap;\n\n#endif";
THREE.ShaderChunk.shadowmap_vertex = "#ifdef USE_SHADOWMAP\n\n\tfor( int i = 0; i < MAX_SHADOWS; i ++ ) {\n\n\t\tvShadowCoord[ i ] = shadowMatrix[ i ] * worldPosition;\n\n\t}\n\n#endif";
THREE.ShaderChunk.lights_phong_vertex = "#if MAX_SPOT_LIGHTS > 0 || defined( USE_BUMPMAP ) || defined( USE_ENVMAP )\n\n\tvWorldPosition = worldPosition.xyz;\n\n#endif";
THREE.ShaderChunk.map_fragment = "#ifdef USE_MAP\n\n\tvec4 texelColor = texture2D( map, vUv );\n\n\t#ifdef GAMMA_INPUT\n\n\t\ttexelColor.xyz *= texelColor.xyz;\n\n\t#endif\n\n\tgl_FragColor = gl_FragColor * texelColor;\n\n#endif";
THREE.ShaderChunk.lightmap_vertex = "#ifdef USE_LIGHTMAP\n\n\tvUv2 = uv2;\n\n#endif";
THREE.ShaderChunk.map_particle_fragment = "#ifdef USE_MAP\n\n\tgl_FragColor = gl_FragColor * texture2D( map, vec2( gl_PointCoord.x, 1.0 - gl_PointCoord.y ) );\n\n#endif";
THREE.ShaderChunk.color_pars_fragment = "#ifdef USE_COLOR\n\n\tvarying vec3 vColor;\n\n#endif\n";
THREE.ShaderChunk.color_vertex = "#ifdef USE_COLOR\n\n\t#ifdef GAMMA_INPUT\n\n\t\tvColor = color * color;\n\n\t#else\n\n\t\tvColor = color;\n\n\t#endif\n\n#endif";
THREE.ShaderChunk.skinning_vertex = "#ifdef USE_SKINNING\n\n\t#ifdef USE_MORPHTARGETS\n\n\tvec4 skinVertex = bindMatrix * vec4( morphed, 1.0 );\n\n\t#else\n\n\tvec4 skinVertex = bindMatrix * vec4( position, 1.0 );\n\n\t#endif\n\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\tskinned  = bindMatrixInverse * skinned;\n\n#endif\n";
THREE.ShaderChunk.envmap_pars_vertex = "#if defined( USE_ENVMAP ) && ! defined( USE_BUMPMAP ) && ! defined( USE_NORMALMAP )\n\n\tvarying vec3 vReflect;\n\n\tuniform float refractionRatio;\n\tuniform bool useRefract;\n\n#endif\n";
THREE.ShaderChunk.linear_to_gamma_fragment = "#ifdef GAMMA_OUTPUT\n\n\tgl_FragColor.xyz = sqrt( gl_FragColor.xyz );\n\n#endif";
THREE.ShaderChunk.color_pars_vertex = "#ifdef USE_COLOR\n\n\tvarying vec3 vColor;\n\n#endif";
THREE.ShaderChunk.lights_lambert_pars_vertex = "uniform vec3 ambient;\nuniform vec3 diffuse;\nuniform vec3 emissive;\n\nuniform vec3 ambientLightColor;\n\n#if MAX_DIR_LIGHTS > 0\n\n\tuniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\n\tuniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\n\n#endif\n\n#if MAX_HEMI_LIGHTS > 0\n\n\tuniform vec3 hemisphereLightSkyColor[ MAX_HEMI_LIGHTS ];\n\tuniform vec3 hemisphereLightGroundColor[ MAX_HEMI_LIGHTS ];\n\tuniform vec3 hemisphereLightDirection[ MAX_HEMI_LIGHTS ];\n\n#endif\n\n#if MAX_POINT_LIGHTS > 0\n\n\tuniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\n\tuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\n\tuniform float pointLightDistance[ MAX_POINT_LIGHTS ];\n\n#endif\n\n#if MAX_SPOT_LIGHTS > 0\n\n\tuniform vec3 spotLightColor[ MAX_SPOT_LIGHTS ];\n\tuniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];\n\tuniform vec3 spotLightDirection[ MAX_SPOT_LIGHTS ];\n\tuniform float spotLightDistance[ MAX_SPOT_LIGHTS ];\n\tuniform float spotLightAngleCos[ MAX_SPOT_LIGHTS ];\n\tuniform float spotLightExponent[ MAX_SPOT_LIGHTS ];\n\n#endif\n\n#ifdef WRAP_AROUND\n\n\tuniform vec3 wrapRGB;\n\n#endif\n";
THREE.ShaderChunk.map_pars_vertex = "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP )\n\n\tvarying vec2 vUv;\n\tuniform vec4 offsetRepeat;\n\n#endif\n";
THREE.ShaderChunk.envmap_fragment = "#ifdef USE_ENVMAP\n\n\tvec3 reflectVec;\n\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )\n\n\t\tvec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );\n\n\t\t// http://en.wikibooks.org/wiki/GLSL_Programming/Applying_Matrix_Transformations\n\t\t// Transforming Normal Vectors with the Inverse Transformation\n\n\t\tvec3 worldNormal = normalize( vec3( vec4( normal, 0.0 ) * viewMatrix ) );\n\n\t\tif ( useRefract ) {\n\n\t\t\treflectVec = refract( cameraToVertex, worldNormal, refractionRatio );\n\n\t\t} else { \n\n\t\t\treflectVec = reflect( cameraToVertex, worldNormal );\n\n\t\t}\n\n\t#else\n\n\t\treflectVec = vReflect;\n\n\t#endif\n\n\t#ifdef DOUBLE_SIDED\n\n\t\tfloat flipNormal = ( -1.0 + 2.0 * float( gl_FrontFacing ) );\n\t\tvec4 cubeColor = textureCube( envMap, flipNormal * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\n\t#else\n\n\t\tvec4 cubeColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\n\t#endif\n\n\t#ifdef GAMMA_INPUT\n\n\t\tcubeColor.xyz *= cubeColor.xyz;\n\n\t#endif\n\n\tif ( combine == 1 ) {\n\n\t\tgl_FragColor.xyz = mix( gl_FragColor.xyz, cubeColor.xyz, specularStrength * reflectivity );\n\n\t} else if ( combine == 2 ) {\n\n\t\tgl_FragColor.xyz += cubeColor.xyz * specularStrength * reflectivity;\n\n\t} else {\n\n\t\tgl_FragColor.xyz = mix( gl_FragColor.xyz, gl_FragColor.xyz * cubeColor.xyz, specularStrength * reflectivity );\n\n\t}\n\n#endif";
THREE.ShaderChunk.specularmap_pars_fragment = "#ifdef USE_SPECULARMAP\n\n\tuniform sampler2D specularMap;\n\n#endif";
THREE.ShaderChunk.logdepthbuf_vertex = "#ifdef USE_LOGDEPTHBUF\n\n\tgl_Position.z = log2(max(1e-6, gl_Position.w + 1.0)) * logDepthBufFC;\n\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\n#else\n\n\t\tgl_Position.z = (gl_Position.z - 1.0) * gl_Position.w;\n\n\t#endif\n\n#endif";
THREE.ShaderChunk.morphtarget_pars_vertex = "#ifdef USE_MORPHTARGETS\n\n\t#ifndef USE_MORPHNORMALS\n\n\tuniform float morphTargetInfluences[ 8 ];\n\n\t#else\n\n\tuniform float morphTargetInfluences[ 4 ];\n\n\t#endif\n\n#endif";
THREE.ShaderChunk.specularmap_fragment = "float specularStrength;\n\n#ifdef USE_SPECULARMAP\n\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n\n#else\n\n\tspecularStrength = 1.0;\n\n#endif";
THREE.ShaderChunk.fog_fragment = "#ifdef USE_FOG\n\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\n\t\tfloat depth = gl_FragDepthEXT / gl_FragCoord.w;\n\n\t#else\n\n\t\tfloat depth = gl_FragCoord.z / gl_FragCoord.w;\n\n\t#endif\n\n\t#ifdef FOG_EXP2\n\n\t\tconst float LOG2 = 1.442695;\n\t\tfloat fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );\n\t\tfogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );\n\n\t#else\n\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, depth );\n\n\t#endif\n\t\n\tgl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\n\n#endif";
THREE.ShaderChunk.bumpmap_pars_fragment = "#ifdef USE_BUMPMAP\n\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\n\t\t\t// Derivative maps - bump mapping unparametrized surfaces by Morten Mikkelsen\n\t\t\t//\thttp://mmikkelsen3d.blogspot.sk/2011/07/derivative-maps.html\n\n\t\t\t// Evaluate the derivative of the height w.r.t. screen-space using forward differencing (listing 2)\n\n\tvec2 dHdxy_fwd() {\n\n\t\tvec2 dSTdx = dFdx( vUv );\n\t\tvec2 dSTdy = dFdy( vUv );\n\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\n\t\treturn vec2( dBx, dBy );\n\n\t}\n\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\n\n\t\tvec3 vSigmaX = dFdx( surf_pos );\n\t\tvec3 vSigmaY = dFdy( surf_pos );\n\t\tvec3 vN = surf_norm;\t\t// normalized\n\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\n\t\tfloat fDet = dot( vSigmaX, R1 );\n\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\n\t}\n\n#endif";
THREE.ShaderChunk.defaultnormal_vertex = "vec3 objectNormal;\n\n#ifdef USE_SKINNING\n\n\tobjectNormal = skinnedNormal.xyz;\n\n#endif\n\n#if !defined( USE_SKINNING ) && defined( USE_MORPHNORMALS )\n\n\tobjectNormal = morphedNormal;\n\n#endif\n\n#if !defined( USE_SKINNING ) && ! defined( USE_MORPHNORMALS )\n\n\tobjectNormal = normal;\n\n#endif\n\n#ifdef FLIP_SIDED\n\n\tobjectNormal = -objectNormal;\n\n#endif\n\nvec3 transformedNormal = normalMatrix * objectNormal;";
THREE.ShaderChunk.lights_phong_pars_fragment = "uniform vec3 ambientLightColor;\n\n#if MAX_DIR_LIGHTS > 0\n\n\tuniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\n\tuniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\n\n#endif\n\n#if MAX_HEMI_LIGHTS > 0\n\n\tuniform vec3 hemisphereLightSkyColor[ MAX_HEMI_LIGHTS ];\n\tuniform vec3 hemisphereLightGroundColor[ MAX_HEMI_LIGHTS ];\n\tuniform vec3 hemisphereLightDirection[ MAX_HEMI_LIGHTS ];\n\n#endif\n\n#if MAX_POINT_LIGHTS > 0\n\n\tuniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\n\n\tuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\n\tuniform float pointLightDistance[ MAX_POINT_LIGHTS ];\n\n#endif\n\n#if MAX_SPOT_LIGHTS > 0\n\n\tuniform vec3 spotLightColor[ MAX_SPOT_LIGHTS ];\n\tuniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];\n\tuniform vec3 spotLightDirection[ MAX_SPOT_LIGHTS ];\n\tuniform float spotLightAngleCos[ MAX_SPOT_LIGHTS ];\n\tuniform float spotLightExponent[ MAX_SPOT_LIGHTS ];\n\n\tuniform float spotLightDistance[ MAX_SPOT_LIGHTS ];\n\n#endif\n\n#if MAX_SPOT_LIGHTS > 0 || defined( USE_BUMPMAP ) || defined( USE_ENVMAP )\n\n\tvarying vec3 vWorldPosition;\n\n#endif\n\n#ifdef WRAP_AROUND\n\n\tuniform vec3 wrapRGB;\n\n#endif\n\nvarying vec3 vViewPosition;\nvarying vec3 vNormal;";
THREE.ShaderChunk.skinbase_vertex = "#ifdef USE_SKINNING\n\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n\n#endif";
THREE.ShaderChunk.map_vertex = "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP )\n\n\tvUv = uv * offsetRepeat.zw + offsetRepeat.xy;\n\n#endif";
THREE.ShaderChunk.lightmap_fragment = "#ifdef USE_LIGHTMAP\n\n\tgl_FragColor = gl_FragColor * texture2D( lightMap, vUv2 );\n\n#endif";
THREE.ShaderChunk.shadowmap_pars_vertex = "#ifdef USE_SHADOWMAP\n\n\tvarying vec4 vShadowCoord[ MAX_SHADOWS ];\n\tuniform mat4 shadowMatrix[ MAX_SHADOWS ];\n\n#endif";
THREE.ShaderChunk.color_fragment = "#ifdef USE_COLOR\n\n\tgl_FragColor = gl_FragColor * vec4( vColor, 1.0 );\n\n#endif";
THREE.ShaderChunk.morphtarget_vertex = "#ifdef USE_MORPHTARGETS\n\n\tvec3 morphed = vec3( 0.0 );\n\tmorphed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];\n\tmorphed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];\n\tmorphed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];\n\tmorphed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];\n\n\t#ifndef USE_MORPHNORMALS\n\n\tmorphed += ( morphTarget4 - position ) * morphTargetInfluences[ 4 ];\n\tmorphed += ( morphTarget5 - position ) * morphTargetInfluences[ 5 ];\n\tmorphed += ( morphTarget6 - position ) * morphTargetInfluences[ 6 ];\n\tmorphed += ( morphTarget7 - position ) * morphTargetInfluences[ 7 ];\n\n\t#endif\n\n\tmorphed += position;\n\n#endif";
THREE.ShaderChunk.envmap_vertex = "#if defined( USE_ENVMAP ) && ! defined( USE_BUMPMAP ) && ! defined( USE_NORMALMAP )\n\n\tvec3 worldNormal = mat3( modelMatrix[ 0 ].xyz, modelMatrix[ 1 ].xyz, modelMatrix[ 2 ].xyz ) * objectNormal;\n\tworldNormal = normalize( worldNormal );\n\n\tvec3 cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\n\tif ( useRefract ) {\n\n\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\n\t} else {\n\n\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\n\t}\n\n#endif";
THREE.ShaderChunk.shadowmap_fragment = "#ifdef USE_SHADOWMAP\n\n\t#ifdef SHADOWMAP_DEBUG\n\n\t\tvec3 frustumColors[3];\n\t\tfrustumColors[0] = vec3( 1.0, 0.5, 0.0 );\n\t\tfrustumColors[1] = vec3( 0.0, 1.0, 0.8 );\n\t\tfrustumColors[2] = vec3( 0.0, 0.5, 1.0 );\n\n\t#endif\n\n\t#ifdef SHADOWMAP_CASCADE\n\n\t\tint inFrustumCount = 0;\n\n\t#endif\n\n\tfloat fDepth;\n\tvec3 shadowColor = vec3( 1.0 );\n\n\tfor( int i = 0; i < MAX_SHADOWS; i ++ ) {\n\n\t\tvec3 shadowCoord = vShadowCoord[ i ].xyz / vShadowCoord[ i ].w;\n\n\t\t\t\t// if ( something && something ) breaks ATI OpenGL shader compiler\n\t\t\t\t// if ( all( something, something ) ) using this instead\n\n\t\tbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n\t\tbool inFrustum = all( inFrustumVec );\n\n\t\t\t\t// don't shadow pixels outside of light frustum\n\t\t\t\t// use just first frustum (for cascades)\n\t\t\t\t// don't shadow pixels behind far plane of light frustum\n\n\t\t#ifdef SHADOWMAP_CASCADE\n\n\t\t\tinFrustumCount += int( inFrustum );\n\t\t\tbvec3 frustumTestVec = bvec3( inFrustum, inFrustumCount == 1, shadowCoord.z <= 1.0 );\n\n\t\t#else\n\n\t\t\tbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\n\t\t#endif\n\n\t\tbool frustumTest = all( frustumTestVec );\n\n\t\tif ( frustumTest ) {\n\n\t\t\tshadowCoord.z += shadowBias[ i ];\n\n\t\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\n\t\t\t\t\t\t// Percentage-close filtering\n\t\t\t\t\t\t// (9 pixel kernel)\n\t\t\t\t\t\t// http://fabiensanglard.net/shadowmappingPCF/\n\n\t\t\t\tfloat shadow = 0.0;\n\n\t\t/*\n\t\t\t\t\t\t// nested loops breaks shader compiler / validator on some ATI cards when using OpenGL\n\t\t\t\t\t\t// must enroll loop manually\n\n\t\t\t\tfor ( float y = -1.25; y <= 1.25; y += 1.25 )\n\t\t\t\t\tfor ( float x = -1.25; x <= 1.25; x += 1.25 ) {\n\n\t\t\t\t\t\tvec4 rgbaDepth = texture2D( shadowMap[ i ], vec2( x * xPixelOffset, y * yPixelOffset ) + shadowCoord.xy );\n\n\t\t\t\t\t\t\t\t// doesn't seem to produce any noticeable visual difference compared to simple texture2D lookup\n\t\t\t\t\t\t\t\t//vec4 rgbaDepth = texture2DProj( shadowMap[ i ], vec4( vShadowCoord[ i ].w * ( vec2( x * xPixelOffset, y * yPixelOffset ) + shadowCoord.xy ), 0.05, vShadowCoord[ i ].w ) );\n\n\t\t\t\t\t\tfloat fDepth = unpackDepth( rgbaDepth );\n\n\t\t\t\t\t\tif ( fDepth < shadowCoord.z )\n\t\t\t\t\t\t\tshadow += 1.0;\n\n\t\t\t\t}\n\n\t\t\t\tshadow /= 9.0;\n\n\t\t*/\n\n\t\t\t\tconst float shadowDelta = 1.0 / 9.0;\n\n\t\t\t\tfloat xPixelOffset = 1.0 / shadowMapSize[ i ].x;\n\t\t\t\tfloat yPixelOffset = 1.0 / shadowMapSize[ i ].y;\n\n\t\t\t\tfloat dx0 = -1.25 * xPixelOffset;\n\t\t\t\tfloat dy0 = -1.25 * yPixelOffset;\n\t\t\t\tfloat dx1 = 1.25 * xPixelOffset;\n\t\t\t\tfloat dy1 = 1.25 * yPixelOffset;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy0 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy0 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy0 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, 0.0 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, 0.0 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy1 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy1 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy1 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tshadowColor = shadowColor * vec3( ( 1.0 - shadowDarkness[ i ] * shadow ) );\n\n\t\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\n\t\t\t\t\t\t// Percentage-close filtering\n\t\t\t\t\t\t// (9 pixel kernel)\n\t\t\t\t\t\t// http://fabiensanglard.net/shadowmappingPCF/\n\n\t\t\t\tfloat shadow = 0.0;\n\n\t\t\t\tfloat xPixelOffset = 1.0 / shadowMapSize[ i ].x;\n\t\t\t\tfloat yPixelOffset = 1.0 / shadowMapSize[ i ].y;\n\n\t\t\t\tfloat dx0 = -1.0 * xPixelOffset;\n\t\t\t\tfloat dy0 = -1.0 * yPixelOffset;\n\t\t\t\tfloat dx1 = 1.0 * xPixelOffset;\n\t\t\t\tfloat dy1 = 1.0 * yPixelOffset;\n\n\t\t\t\tmat3 shadowKernel;\n\t\t\t\tmat3 depthKernel;\n\n\t\t\t\tdepthKernel[0][0] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy0 ) ) );\n\t\t\t\tdepthKernel[0][1] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, 0.0 ) ) );\n\t\t\t\tdepthKernel[0][2] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy1 ) ) );\n\t\t\t\tdepthKernel[1][0] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy0 ) ) );\n\t\t\t\tdepthKernel[1][1] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy ) );\n\t\t\t\tdepthKernel[1][2] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy1 ) ) );\n\t\t\t\tdepthKernel[2][0] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy0 ) ) );\n\t\t\t\tdepthKernel[2][1] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, 0.0 ) ) );\n\t\t\t\tdepthKernel[2][2] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy1 ) ) );\n\n\t\t\t\tvec3 shadowZ = vec3( shadowCoord.z );\n\t\t\t\tshadowKernel[0] = vec3(lessThan(depthKernel[0], shadowZ ));\n\t\t\t\tshadowKernel[0] *= vec3(0.25);\n\n\t\t\t\tshadowKernel[1] = vec3(lessThan(depthKernel[1], shadowZ ));\n\t\t\t\tshadowKernel[1] *= vec3(0.25);\n\n\t\t\t\tshadowKernel[2] = vec3(lessThan(depthKernel[2], shadowZ ));\n\t\t\t\tshadowKernel[2] *= vec3(0.25);\n\n\t\t\t\tvec2 fractionalCoord = 1.0 - fract( shadowCoord.xy * shadowMapSize[i].xy );\n\n\t\t\t\tshadowKernel[0] = mix( shadowKernel[1], shadowKernel[0], fractionalCoord.x );\n\t\t\t\tshadowKernel[1] = mix( shadowKernel[2], shadowKernel[1], fractionalCoord.x );\n\n\t\t\t\tvec4 shadowValues;\n\t\t\t\tshadowValues.x = mix( shadowKernel[0][1], shadowKernel[0][0], fractionalCoord.y );\n\t\t\t\tshadowValues.y = mix( shadowKernel[0][2], shadowKernel[0][1], fractionalCoord.y );\n\t\t\t\tshadowValues.z = mix( shadowKernel[1][1], shadowKernel[1][0], fractionalCoord.y );\n\t\t\t\tshadowValues.w = mix( shadowKernel[1][2], shadowKernel[1][1], fractionalCoord.y );\n\n\t\t\t\tshadow = dot( shadowValues, vec4( 1.0 ) );\n\n\t\t\t\tshadowColor = shadowColor * vec3( ( 1.0 - shadowDarkness[ i ] * shadow ) );\n\n\t\t\t#else\n\n\t\t\t\tvec4 rgbaDepth = texture2D( shadowMap[ i ], shadowCoord.xy );\n\t\t\t\tfloat fDepth = unpackDepth( rgbaDepth );\n\n\t\t\t\tif ( fDepth < shadowCoord.z )\n\n\t\t// spot with multiple shadows is darker\n\n\t\t\t\t\tshadowColor = shadowColor * vec3( 1.0 - shadowDarkness[ i ] );\n\n\t\t// spot with multiple shadows has the same color as single shadow spot\n\n\t\t// \t\t\t\t\tshadowColor = min( shadowColor, vec3( shadowDarkness[ i ] ) );\n\n\t\t\t#endif\n\n\t\t}\n\n\n\t\t#ifdef SHADOWMAP_DEBUG\n\n\t\t\t#ifdef SHADOWMAP_CASCADE\n\n\t\t\t\tif ( inFrustum && inFrustumCount == 1 ) gl_FragColor.xyz *= frustumColors[ i ];\n\n\t\t\t#else\n\n\t\t\t\tif ( inFrustum ) gl_FragColor.xyz *= frustumColors[ i ];\n\n\t\t\t#endif\n\n\t\t#endif\n\n\t}\n\n\t#ifdef GAMMA_OUTPUT\n\n\t\tshadowColor *= shadowColor;\n\n\t#endif\n\n\tgl_FragColor.xyz = gl_FragColor.xyz * shadowColor;\n\n#endif\n";
THREE.ShaderChunk.worldpos_vertex = "#if defined( USE_ENVMAP ) || defined( PHONG ) || defined( LAMBERT ) || defined ( USE_SHADOWMAP )\n\n\t#ifdef USE_SKINNING\n\n\t\tvec4 worldPosition = modelMatrix * skinned;\n\n\t#endif\n\n\t#if defined( USE_MORPHTARGETS ) && ! defined( USE_SKINNING )\n\n\t\tvec4 worldPosition = modelMatrix * vec4( morphed, 1.0 );\n\n\t#endif\n\n\t#if ! defined( USE_MORPHTARGETS ) && ! defined( USE_SKINNING )\n\n\t\tvec4 worldPosition = modelMatrix * vec4( position, 1.0 );\n\n\t#endif\n\n#endif";
THREE.ShaderChunk.shadowmap_pars_fragment = "#ifdef USE_SHADOWMAP\n\n\tuniform sampler2D shadowMap[ MAX_SHADOWS ];\n\tuniform vec2 shadowMapSize[ MAX_SHADOWS ];\n\n\tuniform float shadowDarkness[ MAX_SHADOWS ];\n\tuniform float shadowBias[ MAX_SHADOWS ];\n\n\tvarying vec4 vShadowCoord[ MAX_SHADOWS ];\n\n\tfloat unpackDepth( const in vec4 rgba_depth ) {\n\n\t\tconst vec4 bit_shift = vec4( 1.0 / ( 256.0 * 256.0 * 256.0 ), 1.0 / ( 256.0 * 256.0 ), 1.0 / 256.0, 1.0 );\n\t\tfloat depth = dot( rgba_depth, bit_shift );\n\t\treturn depth;\n\n\t}\n\n#endif";
THREE.ShaderChunk.skinning_pars_vertex = "#ifdef USE_SKINNING\n\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\n\t#ifdef BONE_TEXTURE\n\n\t\tuniform sampler2D boneTexture;\n\t\tuniform int boneTextureWidth;\n\t\tuniform int boneTextureHeight;\n\n\t\tmat4 getBoneMatrix( const in float i ) {\n\n\t\t\tfloat j = i * 4.0;\n\t\t\tfloat x = mod( j, float( boneTextureWidth ) );\n\t\t\tfloat y = floor( j / float( boneTextureWidth ) );\n\n\t\t\tfloat dx = 1.0 / float( boneTextureWidth );\n\t\t\tfloat dy = 1.0 / float( boneTextureHeight );\n\n\t\t\ty = dy * ( y + 0.5 );\n\n\t\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\n\t\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\n\t\t\treturn bone;\n\n\t\t}\n\n\t#else\n\n\t\tuniform mat4 boneGlobalMatrices[ MAX_BONES ];\n\n\t\tmat4 getBoneMatrix( const in float i ) {\n\n\t\t\tmat4 bone = boneGlobalMatrices[ int(i) ];\n\t\t\treturn bone;\n\n\t\t}\n\n\t#endif\n\n#endif\n";
THREE.ShaderChunk.logdepthbuf_pars_fragment = "#ifdef USE_LOGDEPTHBUF\n\n\tuniform float logDepthBufFC;\n\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\n\t\t#extension GL_EXT_frag_depth : enable\n\t\tvarying float vFragDepth;\n\n\t#endif\n\n#endif";
THREE.ShaderChunk.alphamap_fragment = "#ifdef USE_ALPHAMAP\n\n\tgl_FragColor.a *= texture2D( alphaMap, vUv ).g;\n\n#endif\n";
THREE.ShaderChunk.alphamap_pars_fragment = "#ifdef USE_ALPHAMAP\n\n\tuniform sampler2D alphaMap;\n\n#endif\n";
THREE.UniformsUtils = {merge: function (a) {
	var b, c, d, e = {};
	for (b = 0; b < a.length; b++)for (c in d = this.clone(a[b]), d)e[c] = d[c];
	return e
}, clone: function (a) {
	var b, c, d, e = {};
	for (b in a)for (c in e[b] = {}, a[b])d = a[b][c], e[b][c] = d instanceof THREE.Color || d instanceof THREE.Vector2 || d instanceof THREE.Vector3 || d instanceof THREE.Vector4 || d instanceof THREE.Matrix4 || d instanceof THREE.Texture ? d.clone() : d instanceof Array ? d.slice() : d;
	return e
}};
THREE.UniformsLib = {common: {diffuse: {type: "c", value: new THREE.Color(15658734)}, opacity: {type: "f", value: 1}, map: {type: "t", value: null}, offsetRepeat: {type: "v4", value: new THREE.Vector4(0, 0, 1, 1)}, lightMap: {type: "t", value: null}, specularMap: {type: "t", value: null}, alphaMap: {type: "t", value: null}, envMap: {type: "t", value: null}, flipEnvMap: {type: "f", value: -1}, useRefract: {type: "i", value: 0}, reflectivity: {type: "f", value: 1}, refractionRatio: {type: "f", value: 0.98}, combine: {type: "i", value: 0}, morphTargetInfluences: {type: "f",
	value: 0}}, bump: {bumpMap: {type: "t", value: null}, bumpScale: {type: "f", value: 1}}, normalmap: {normalMap: {type: "t", value: null}, normalScale: {type: "v2", value: new THREE.Vector2(1, 1)}}, fog: {fogDensity: {type: "f", value: 2.5E-4}, fogNear: {type: "f", value: 1}, fogFar: {type: "f", value: 2E3}, fogColor: {type: "c", value: new THREE.Color(16777215)}}, lights: {ambientLightColor: {type: "fv", value: []}, directionalLightDirection: {type: "fv", value: []}, directionalLightColor: {type: "fv", value: []}, hemisphereLightDirection: {type: "fv", value: []},
	hemisphereLightSkyColor: {type: "fv", value: []}, hemisphereLightGroundColor: {type: "fv", value: []}, pointLightColor: {type: "fv", value: []}, pointLightPosition: {type: "fv", value: []}, pointLightDistance: {type: "fv1", value: []}, spotLightColor: {type: "fv", value: []}, spotLightPosition: {type: "fv", value: []}, spotLightDirection: {type: "fv", value: []}, spotLightDistance: {type: "fv1", value: []}, spotLightAngleCos: {type: "fv1", value: []}, spotLightExponent: {type: "fv1", value: []}}, particle: {psColor: {type: "c", value: new THREE.Color(15658734)},
	opacity: {type: "f", value: 1}, size: {type: "f", value: 1}, scale: {type: "f", value: 1}, map: {type: "t", value: null}, fogDensity: {type: "f", value: 2.5E-4}, fogNear: {type: "f", value: 1}, fogFar: {type: "f", value: 2E3}, fogColor: {type: "c", value: new THREE.Color(16777215)}}, shadowmap: {shadowMap: {type: "tv", value: []}, shadowMapSize: {type: "v2v", value: []}, shadowBias: {type: "fv1", value: []}, shadowDarkness: {type: "fv1", value: []}, shadowMatrix: {type: "m4v", value: []}}};
THREE.ShaderLib = {basic: {uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.common, THREE.UniformsLib.fog, THREE.UniformsLib.shadowmap]), vertexShader: [THREE.ShaderChunk.map_pars_vertex, THREE.ShaderChunk.lightmap_pars_vertex, THREE.ShaderChunk.envmap_pars_vertex, THREE.ShaderChunk.color_pars_vertex, THREE.ShaderChunk.morphtarget_pars_vertex, THREE.ShaderChunk.skinning_pars_vertex, THREE.ShaderChunk.shadowmap_pars_vertex, THREE.ShaderChunk.logdepthbuf_pars_vertex, "void main() {", THREE.ShaderChunk.map_vertex,
	THREE.ShaderChunk.lightmap_vertex, THREE.ShaderChunk.color_vertex, THREE.ShaderChunk.skinbase_vertex, "\t#ifdef USE_ENVMAP", THREE.ShaderChunk.morphnormal_vertex, THREE.ShaderChunk.skinnormal_vertex, THREE.ShaderChunk.defaultnormal_vertex, "\t#endif", THREE.ShaderChunk.morphtarget_vertex, THREE.ShaderChunk.skinning_vertex, THREE.ShaderChunk.default_vertex, THREE.ShaderChunk.logdepthbuf_vertex, THREE.ShaderChunk.worldpos_vertex, THREE.ShaderChunk.envmap_vertex, THREE.ShaderChunk.shadowmap_vertex, "}"].join("\n"),
	fragmentShader: ["uniform vec3 diffuse;\nuniform float opacity;", THREE.ShaderChunk.color_pars_fragment, THREE.ShaderChunk.map_pars_fragment, THREE.ShaderChunk.alphamap_pars_fragment, THREE.ShaderChunk.lightmap_pars_fragment, THREE.ShaderChunk.envmap_pars_fragment, THREE.ShaderChunk.fog_pars_fragment, THREE.ShaderChunk.shadowmap_pars_fragment, THREE.ShaderChunk.specularmap_pars_fragment, THREE.ShaderChunk.logdepthbuf_pars_fragment, "void main() {\n\tgl_FragColor = vec4( diffuse, opacity );", THREE.ShaderChunk.logdepthbuf_fragment,
		THREE.ShaderChunk.map_fragment, THREE.ShaderChunk.alphamap_fragment, THREE.ShaderChunk.alphatest_fragment, THREE.ShaderChunk.specularmap_fragment, THREE.ShaderChunk.lightmap_fragment, THREE.ShaderChunk.color_fragment, THREE.ShaderChunk.envmap_fragment, THREE.ShaderChunk.shadowmap_fragment, THREE.ShaderChunk.linear_to_gamma_fragment, THREE.ShaderChunk.fog_fragment, "}"].join("\n")}, lambert: {uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.common, THREE.UniformsLib.fog, THREE.UniformsLib.lights, THREE.UniformsLib.shadowmap,
	{ambient: {type: "c", value: new THREE.Color(16777215)}, emissive: {type: "c", value: new THREE.Color(0)}, wrapRGB: {type: "v3", value: new THREE.Vector3(1, 1, 1)}}]), vertexShader: ["#define LAMBERT\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n#endif", THREE.ShaderChunk.map_pars_vertex, THREE.ShaderChunk.lightmap_pars_vertex, THREE.ShaderChunk.envmap_pars_vertex, THREE.ShaderChunk.lights_lambert_pars_vertex, THREE.ShaderChunk.color_pars_vertex, THREE.ShaderChunk.morphtarget_pars_vertex, THREE.ShaderChunk.skinning_pars_vertex,
	THREE.ShaderChunk.shadowmap_pars_vertex, THREE.ShaderChunk.logdepthbuf_pars_vertex, "void main() {", THREE.ShaderChunk.map_vertex, THREE.ShaderChunk.lightmap_vertex, THREE.ShaderChunk.color_vertex, THREE.ShaderChunk.morphnormal_vertex, THREE.ShaderChunk.skinbase_vertex, THREE.ShaderChunk.skinnormal_vertex, THREE.ShaderChunk.defaultnormal_vertex, THREE.ShaderChunk.morphtarget_vertex, THREE.ShaderChunk.skinning_vertex, THREE.ShaderChunk.default_vertex, THREE.ShaderChunk.logdepthbuf_vertex, THREE.ShaderChunk.worldpos_vertex,
	THREE.ShaderChunk.envmap_vertex, THREE.ShaderChunk.lights_lambert_vertex, THREE.ShaderChunk.shadowmap_vertex, "}"].join("\n"), fragmentShader: ["uniform float opacity;\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n#endif", THREE.ShaderChunk.color_pars_fragment, THREE.ShaderChunk.map_pars_fragment, THREE.ShaderChunk.alphamap_pars_fragment, THREE.ShaderChunk.lightmap_pars_fragment, THREE.ShaderChunk.envmap_pars_fragment, THREE.ShaderChunk.fog_pars_fragment, THREE.ShaderChunk.shadowmap_pars_fragment,
	THREE.ShaderChunk.specularmap_pars_fragment, THREE.ShaderChunk.logdepthbuf_pars_fragment, "void main() {\n\tgl_FragColor = vec4( vec3( 1.0 ), opacity );", THREE.ShaderChunk.logdepthbuf_fragment, THREE.ShaderChunk.map_fragment, THREE.ShaderChunk.alphamap_fragment, THREE.ShaderChunk.alphatest_fragment, THREE.ShaderChunk.specularmap_fragment, "\t#ifdef DOUBLE_SIDED\n\t\tif ( gl_FrontFacing )\n\t\t\tgl_FragColor.xyz *= vLightFront;\n\t\telse\n\t\t\tgl_FragColor.xyz *= vLightBack;\n\t#else\n\t\tgl_FragColor.xyz *= vLightFront;\n\t#endif",
	THREE.ShaderChunk.lightmap_fragment, THREE.ShaderChunk.color_fragment, THREE.ShaderChunk.envmap_fragment, THREE.ShaderChunk.shadowmap_fragment, THREE.ShaderChunk.linear_to_gamma_fragment, THREE.ShaderChunk.fog_fragment, "}"].join("\n")}, phong: {uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.common, THREE.UniformsLib.bump, THREE.UniformsLib.normalmap, THREE.UniformsLib.fog, THREE.UniformsLib.lights, THREE.UniformsLib.shadowmap, {ambient: {type: "c", value: new THREE.Color(16777215)}, emissive: {type: "c", value: new THREE.Color(0)},
	specular: {type: "c", value: new THREE.Color(1118481)}, shininess: {type: "f", value: 30}, wrapRGB: {type: "v3", value: new THREE.Vector3(1, 1, 1)}}]), vertexShader: ["#define PHONG\nvarying vec3 vViewPosition;\nvarying vec3 vNormal;", THREE.ShaderChunk.map_pars_vertex, THREE.ShaderChunk.lightmap_pars_vertex, THREE.ShaderChunk.envmap_pars_vertex, THREE.ShaderChunk.lights_phong_pars_vertex, THREE.ShaderChunk.color_pars_vertex, THREE.ShaderChunk.morphtarget_pars_vertex, THREE.ShaderChunk.skinning_pars_vertex, THREE.ShaderChunk.shadowmap_pars_vertex,
	THREE.ShaderChunk.logdepthbuf_pars_vertex, "void main() {", THREE.ShaderChunk.map_vertex, THREE.ShaderChunk.lightmap_vertex, THREE.ShaderChunk.color_vertex, THREE.ShaderChunk.morphnormal_vertex, THREE.ShaderChunk.skinbase_vertex, THREE.ShaderChunk.skinnormal_vertex, THREE.ShaderChunk.defaultnormal_vertex, "\tvNormal = normalize( transformedNormal );", THREE.ShaderChunk.morphtarget_vertex, THREE.ShaderChunk.skinning_vertex, THREE.ShaderChunk.default_vertex, THREE.ShaderChunk.logdepthbuf_vertex, "\tvViewPosition = -mvPosition.xyz;",
	THREE.ShaderChunk.worldpos_vertex, THREE.ShaderChunk.envmap_vertex, THREE.ShaderChunk.lights_phong_vertex, THREE.ShaderChunk.shadowmap_vertex, "}"].join("\n"), fragmentShader: ["uniform vec3 diffuse;\nuniform float opacity;\nuniform vec3 ambient;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;", THREE.ShaderChunk.color_pars_fragment, THREE.ShaderChunk.map_pars_fragment, THREE.ShaderChunk.alphamap_pars_fragment, THREE.ShaderChunk.lightmap_pars_fragment, THREE.ShaderChunk.envmap_pars_fragment,
	THREE.ShaderChunk.fog_pars_fragment, THREE.ShaderChunk.lights_phong_pars_fragment, THREE.ShaderChunk.shadowmap_pars_fragment, THREE.ShaderChunk.bumpmap_pars_fragment, THREE.ShaderChunk.normalmap_pars_fragment, THREE.ShaderChunk.specularmap_pars_fragment, THREE.ShaderChunk.logdepthbuf_pars_fragment, "void main() {\n\tgl_FragColor = vec4( vec3( 1.0 ), opacity );", THREE.ShaderChunk.logdepthbuf_fragment, THREE.ShaderChunk.map_fragment, THREE.ShaderChunk.alphamap_fragment, THREE.ShaderChunk.alphatest_fragment, THREE.ShaderChunk.specularmap_fragment,
	THREE.ShaderChunk.lights_phong_fragment, THREE.ShaderChunk.lightmap_fragment, THREE.ShaderChunk.color_fragment, THREE.ShaderChunk.envmap_fragment, THREE.ShaderChunk.shadowmap_fragment, THREE.ShaderChunk.linear_to_gamma_fragment, THREE.ShaderChunk.fog_fragment, "}"].join("\n")}, particle_basic: {uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.particle, THREE.UniformsLib.shadowmap]), vertexShader: ["uniform float size;\nuniform float scale;", THREE.ShaderChunk.color_pars_vertex, THREE.ShaderChunk.shadowmap_pars_vertex,
	THREE.ShaderChunk.logdepthbuf_pars_vertex, "void main() {", THREE.ShaderChunk.color_vertex, "\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\t#ifdef USE_SIZEATTENUATION\n\t\tgl_PointSize = size * ( scale / length( mvPosition.xyz ) );\n\t#else\n\t\tgl_PointSize = size;\n\t#endif\n\tgl_Position = projectionMatrix * mvPosition;", THREE.ShaderChunk.logdepthbuf_vertex, THREE.ShaderChunk.worldpos_vertex, THREE.ShaderChunk.shadowmap_vertex, "}"].join("\n"), fragmentShader: ["uniform vec3 psColor;\nuniform float opacity;",
	THREE.ShaderChunk.color_pars_fragment, THREE.ShaderChunk.map_particle_pars_fragment, THREE.ShaderChunk.fog_pars_fragment, THREE.ShaderChunk.shadowmap_pars_fragment, THREE.ShaderChunk.logdepthbuf_pars_fragment, "void main() {\n\tgl_FragColor = vec4( psColor, opacity );", THREE.ShaderChunk.logdepthbuf_fragment, THREE.ShaderChunk.map_particle_fragment, THREE.ShaderChunk.alphatest_fragment, THREE.ShaderChunk.color_fragment, THREE.ShaderChunk.shadowmap_fragment, THREE.ShaderChunk.fog_fragment, "}"].join("\n")}, dashed: {uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.common,
	THREE.UniformsLib.fog, {scale: {type: "f", value: 1}, dashSize: {type: "f", value: 1}, totalSize: {type: "f", value: 2}}]), vertexShader: ["uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;", THREE.ShaderChunk.color_pars_vertex, THREE.ShaderChunk.logdepthbuf_pars_vertex, "void main() {", THREE.ShaderChunk.color_vertex, "\tvLineDistance = scale * lineDistance;\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\tgl_Position = projectionMatrix * mvPosition;", THREE.ShaderChunk.logdepthbuf_vertex,
	"}"].join("\n"), fragmentShader: ["uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;", THREE.ShaderChunk.color_pars_fragment, THREE.ShaderChunk.fog_pars_fragment, THREE.ShaderChunk.logdepthbuf_pars_fragment, "void main() {\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tgl_FragColor = vec4( diffuse, opacity );", THREE.ShaderChunk.logdepthbuf_fragment, THREE.ShaderChunk.color_fragment, THREE.ShaderChunk.fog_fragment,
	"}"].join("\n")}, depth: {uniforms: {mNear: {type: "f", value: 1}, mFar: {type: "f", value: 2E3}, opacity: {type: "f", value: 1}}, vertexShader: [THREE.ShaderChunk.morphtarget_pars_vertex, THREE.ShaderChunk.logdepthbuf_pars_vertex, "void main() {", THREE.ShaderChunk.morphtarget_vertex, THREE.ShaderChunk.default_vertex, THREE.ShaderChunk.logdepthbuf_vertex, "}"].join("\n"), fragmentShader: ["uniform float mNear;\nuniform float mFar;\nuniform float opacity;", THREE.ShaderChunk.logdepthbuf_pars_fragment, "void main() {", THREE.ShaderChunk.logdepthbuf_fragment,
	"\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tfloat depth = gl_FragDepthEXT / gl_FragCoord.w;\n\t#else\n\t\tfloat depth = gl_FragCoord.z / gl_FragCoord.w;\n\t#endif\n\tfloat color = 1.0 - smoothstep( mNear, mFar, depth );\n\tgl_FragColor = vec4( vec3( color ), opacity );\n}"].join("\n")}, normal: {uniforms: {opacity: {type: "f", value: 1}}, vertexShader: ["varying vec3 vNormal;", THREE.ShaderChunk.morphtarget_pars_vertex, THREE.ShaderChunk.logdepthbuf_pars_vertex, "void main() {\n\tvNormal = normalize( normalMatrix * normal );",
	THREE.ShaderChunk.morphtarget_vertex, THREE.ShaderChunk.default_vertex, THREE.ShaderChunk.logdepthbuf_vertex, "}"].join("\n"), fragmentShader: ["uniform float opacity;\nvarying vec3 vNormal;", THREE.ShaderChunk.logdepthbuf_pars_fragment, "void main() {\n\tgl_FragColor = vec4( 0.5 * normalize( vNormal ) + 0.5, opacity );", THREE.ShaderChunk.logdepthbuf_fragment, "}"].join("\n")}, normalmap: {uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.fog, THREE.UniformsLib.lights, THREE.UniformsLib.shadowmap, {enableAO: {type: "i",
	value: 0}, enableDiffuse: {type: "i", value: 0}, enableSpecular: {type: "i", value: 0}, enableReflection: {type: "i", value: 0}, enableDisplacement: {type: "i", value: 0}, tDisplacement: {type: "t", value: null}, tDiffuse: {type: "t", value: null}, tCube: {type: "t", value: null}, tNormal: {type: "t", value: null}, tSpecular: {type: "t", value: null}, tAO: {type: "t", value: null}, uNormalScale: {type: "v2", value: new THREE.Vector2(1, 1)}, uDisplacementBias: {type: "f", value: 0}, uDisplacementScale: {type: "f", value: 1}, diffuse: {type: "c", value: new THREE.Color(16777215)},
	specular: {type: "c", value: new THREE.Color(1118481)}, ambient: {type: "c", value: new THREE.Color(16777215)}, shininess: {type: "f", value: 30}, opacity: {type: "f", value: 1}, useRefract: {type: "i", value: 0}, refractionRatio: {type: "f", value: 0.98}, reflectivity: {type: "f", value: 0.5}, uOffset: {type: "v2", value: new THREE.Vector2(0, 0)}, uRepeat: {type: "v2", value: new THREE.Vector2(1, 1)}, wrapRGB: {type: "v3", value: new THREE.Vector3(1, 1, 1)}}]), fragmentShader: ["uniform vec3 ambient;\nuniform vec3 diffuse;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\nuniform bool enableDiffuse;\nuniform bool enableSpecular;\nuniform bool enableAO;\nuniform bool enableReflection;\nuniform sampler2D tDiffuse;\nuniform sampler2D tNormal;\nuniform sampler2D tSpecular;\nuniform sampler2D tAO;\nuniform samplerCube tCube;\nuniform vec2 uNormalScale;\nuniform bool useRefract;\nuniform float refractionRatio;\nuniform float reflectivity;\nvarying vec3 vTangent;\nvarying vec3 vBinormal;\nvarying vec3 vNormal;\nvarying vec2 vUv;\nuniform vec3 ambientLightColor;\n#if MAX_DIR_LIGHTS > 0\n\tuniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\n\tuniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\n#endif\n#if MAX_HEMI_LIGHTS > 0\n\tuniform vec3 hemisphereLightSkyColor[ MAX_HEMI_LIGHTS ];\n\tuniform vec3 hemisphereLightGroundColor[ MAX_HEMI_LIGHTS ];\n\tuniform vec3 hemisphereLightDirection[ MAX_HEMI_LIGHTS ];\n#endif\n#if MAX_POINT_LIGHTS > 0\n\tuniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\n\tuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\n\tuniform float pointLightDistance[ MAX_POINT_LIGHTS ];\n#endif\n#if MAX_SPOT_LIGHTS > 0\n\tuniform vec3 spotLightColor[ MAX_SPOT_LIGHTS ];\n\tuniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];\n\tuniform vec3 spotLightDirection[ MAX_SPOT_LIGHTS ];\n\tuniform float spotLightAngleCos[ MAX_SPOT_LIGHTS ];\n\tuniform float spotLightExponent[ MAX_SPOT_LIGHTS ];\n\tuniform float spotLightDistance[ MAX_SPOT_LIGHTS ];\n#endif\n#ifdef WRAP_AROUND\n\tuniform vec3 wrapRGB;\n#endif\nvarying vec3 vWorldPosition;\nvarying vec3 vViewPosition;",
	THREE.ShaderChunk.shadowmap_pars_fragment, THREE.ShaderChunk.fog_pars_fragment, THREE.ShaderChunk.logdepthbuf_pars_fragment, "void main() {", THREE.ShaderChunk.logdepthbuf_fragment, "\tgl_FragColor = vec4( vec3( 1.0 ), opacity );\n\tvec3 specularTex = vec3( 1.0 );\n\tvec3 normalTex = texture2D( tNormal, vUv ).xyz * 2.0 - 1.0;\n\tnormalTex.xy *= uNormalScale;\n\tnormalTex = normalize( normalTex );\n\tif( enableDiffuse ) {\n\t\t#ifdef GAMMA_INPUT\n\t\t\tvec4 texelColor = texture2D( tDiffuse, vUv );\n\t\t\ttexelColor.xyz *= texelColor.xyz;\n\t\t\tgl_FragColor = gl_FragColor * texelColor;\n\t\t#else\n\t\t\tgl_FragColor = gl_FragColor * texture2D( tDiffuse, vUv );\n\t\t#endif\n\t}\n\tif( enableAO ) {\n\t\t#ifdef GAMMA_INPUT\n\t\t\tvec4 aoColor = texture2D( tAO, vUv );\n\t\t\taoColor.xyz *= aoColor.xyz;\n\t\t\tgl_FragColor.xyz = gl_FragColor.xyz * aoColor.xyz;\n\t\t#else\n\t\t\tgl_FragColor.xyz = gl_FragColor.xyz * texture2D( tAO, vUv ).xyz;\n\t\t#endif\n\t}",
	THREE.ShaderChunk.alphatest_fragment, "\tif( enableSpecular )\n\t\tspecularTex = texture2D( tSpecular, vUv ).xyz;\n\tmat3 tsb = mat3( normalize( vTangent ), normalize( vBinormal ), normalize( vNormal ) );\n\tvec3 finalNormal = tsb * normalTex;\n\t#ifdef FLIP_SIDED\n\t\tfinalNormal = -finalNormal;\n\t#endif\n\tvec3 normal = normalize( finalNormal );\n\tvec3 viewPosition = normalize( vViewPosition );\n\t#if MAX_POINT_LIGHTS > 0\n\t\tvec3 pointDiffuse = vec3( 0.0 );\n\t\tvec3 pointSpecular = vec3( 0.0 );\n\t\tfor ( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\n\t\t\tvec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\n\t\t\tvec3 pointVector = lPosition.xyz + vViewPosition.xyz;\n\t\t\tfloat pointDistance = 1.0;\n\t\t\tif ( pointLightDistance[ i ] > 0.0 )\n\t\t\t\tpointDistance = 1.0 - min( ( length( pointVector ) / pointLightDistance[ i ] ), 1.0 );\n\t\t\tpointVector = normalize( pointVector );\n\t\t\t#ifdef WRAP_AROUND\n\t\t\t\tfloat pointDiffuseWeightFull = max( dot( normal, pointVector ), 0.0 );\n\t\t\t\tfloat pointDiffuseWeightHalf = max( 0.5 * dot( normal, pointVector ) + 0.5, 0.0 );\n\t\t\t\tvec3 pointDiffuseWeight = mix( vec3( pointDiffuseWeightFull ), vec3( pointDiffuseWeightHalf ), wrapRGB );\n\t\t\t#else\n\t\t\t\tfloat pointDiffuseWeight = max( dot( normal, pointVector ), 0.0 );\n\t\t\t#endif\n\t\t\tpointDiffuse += pointDistance * pointLightColor[ i ] * diffuse * pointDiffuseWeight;\n\t\t\tvec3 pointHalfVector = normalize( pointVector + viewPosition );\n\t\t\tfloat pointDotNormalHalf = max( dot( normal, pointHalfVector ), 0.0 );\n\t\t\tfloat pointSpecularWeight = specularTex.r * max( pow( pointDotNormalHalf, shininess ), 0.0 );\n\t\t\tfloat specularNormalization = ( shininess + 2.0 ) / 8.0;\n\t\t\tvec3 schlick = specular + vec3( 1.0 - specular ) * pow( max( 1.0 - dot( pointVector, pointHalfVector ), 0.0 ), 5.0 );\n\t\t\tpointSpecular += schlick * pointLightColor[ i ] * pointSpecularWeight * pointDiffuseWeight * pointDistance * specularNormalization;\n\t\t}\n\t#endif\n\t#if MAX_SPOT_LIGHTS > 0\n\t\tvec3 spotDiffuse = vec3( 0.0 );\n\t\tvec3 spotSpecular = vec3( 0.0 );\n\t\tfor ( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {\n\t\t\tvec4 lPosition = viewMatrix * vec4( spotLightPosition[ i ], 1.0 );\n\t\t\tvec3 spotVector = lPosition.xyz + vViewPosition.xyz;\n\t\t\tfloat spotDistance = 1.0;\n\t\t\tif ( spotLightDistance[ i ] > 0.0 )\n\t\t\t\tspotDistance = 1.0 - min( ( length( spotVector ) / spotLightDistance[ i ] ), 1.0 );\n\t\t\tspotVector = normalize( spotVector );\n\t\t\tfloat spotEffect = dot( spotLightDirection[ i ], normalize( spotLightPosition[ i ] - vWorldPosition ) );\n\t\t\tif ( spotEffect > spotLightAngleCos[ i ] ) {\n\t\t\t\tspotEffect = max( pow( max( spotEffect, 0.0 ), spotLightExponent[ i ] ), 0.0 );\n\t\t\t\t#ifdef WRAP_AROUND\n\t\t\t\t\tfloat spotDiffuseWeightFull = max( dot( normal, spotVector ), 0.0 );\n\t\t\t\t\tfloat spotDiffuseWeightHalf = max( 0.5 * dot( normal, spotVector ) + 0.5, 0.0 );\n\t\t\t\t\tvec3 spotDiffuseWeight = mix( vec3( spotDiffuseWeightFull ), vec3( spotDiffuseWeightHalf ), wrapRGB );\n\t\t\t\t#else\n\t\t\t\t\tfloat spotDiffuseWeight = max( dot( normal, spotVector ), 0.0 );\n\t\t\t\t#endif\n\t\t\t\tspotDiffuse += spotDistance * spotLightColor[ i ] * diffuse * spotDiffuseWeight * spotEffect;\n\t\t\t\tvec3 spotHalfVector = normalize( spotVector + viewPosition );\n\t\t\t\tfloat spotDotNormalHalf = max( dot( normal, spotHalfVector ), 0.0 );\n\t\t\t\tfloat spotSpecularWeight = specularTex.r * max( pow( spotDotNormalHalf, shininess ), 0.0 );\n\t\t\t\tfloat specularNormalization = ( shininess + 2.0 ) / 8.0;\n\t\t\t\tvec3 schlick = specular + vec3( 1.0 - specular ) * pow( max( 1.0 - dot( spotVector, spotHalfVector ), 0.0 ), 5.0 );\n\t\t\t\tspotSpecular += schlick * spotLightColor[ i ] * spotSpecularWeight * spotDiffuseWeight * spotDistance * specularNormalization * spotEffect;\n\t\t\t}\n\t\t}\n\t#endif\n\t#if MAX_DIR_LIGHTS > 0\n\t\tvec3 dirDiffuse = vec3( 0.0 );\n\t\tvec3 dirSpecular = vec3( 0.0 );\n\t\tfor( int i = 0; i < MAX_DIR_LIGHTS; i++ ) {\n\t\t\tvec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );\n\t\t\tvec3 dirVector = normalize( lDirection.xyz );\n\t\t\t#ifdef WRAP_AROUND\n\t\t\t\tfloat directionalLightWeightingFull = max( dot( normal, dirVector ), 0.0 );\n\t\t\t\tfloat directionalLightWeightingHalf = max( 0.5 * dot( normal, dirVector ) + 0.5, 0.0 );\n\t\t\t\tvec3 dirDiffuseWeight = mix( vec3( directionalLightWeightingFull ), vec3( directionalLightWeightingHalf ), wrapRGB );\n\t\t\t#else\n\t\t\t\tfloat dirDiffuseWeight = max( dot( normal, dirVector ), 0.0 );\n\t\t\t#endif\n\t\t\tdirDiffuse += directionalLightColor[ i ] * diffuse * dirDiffuseWeight;\n\t\t\tvec3 dirHalfVector = normalize( dirVector + viewPosition );\n\t\t\tfloat dirDotNormalHalf = max( dot( normal, dirHalfVector ), 0.0 );\n\t\t\tfloat dirSpecularWeight = specularTex.r * max( pow( dirDotNormalHalf, shininess ), 0.0 );\n\t\t\tfloat specularNormalization = ( shininess + 2.0 ) / 8.0;\n\t\t\tvec3 schlick = specular + vec3( 1.0 - specular ) * pow( max( 1.0 - dot( dirVector, dirHalfVector ), 0.0 ), 5.0 );\n\t\t\tdirSpecular += schlick * directionalLightColor[ i ] * dirSpecularWeight * dirDiffuseWeight * specularNormalization;\n\t\t}\n\t#endif\n\t#if MAX_HEMI_LIGHTS > 0\n\t\tvec3 hemiDiffuse = vec3( 0.0 );\n\t\tvec3 hemiSpecular = vec3( 0.0 );\n\t\tfor( int i = 0; i < MAX_HEMI_LIGHTS; i ++ ) {\n\t\t\tvec4 lDirection = viewMatrix * vec4( hemisphereLightDirection[ i ], 0.0 );\n\t\t\tvec3 lVector = normalize( lDirection.xyz );\n\t\t\tfloat dotProduct = dot( normal, lVector );\n\t\t\tfloat hemiDiffuseWeight = 0.5 * dotProduct + 0.5;\n\t\t\tvec3 hemiColor = mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight );\n\t\t\themiDiffuse += diffuse * hemiColor;\n\t\t\tvec3 hemiHalfVectorSky = normalize( lVector + viewPosition );\n\t\t\tfloat hemiDotNormalHalfSky = 0.5 * dot( normal, hemiHalfVectorSky ) + 0.5;\n\t\t\tfloat hemiSpecularWeightSky = specularTex.r * max( pow( max( hemiDotNormalHalfSky, 0.0 ), shininess ), 0.0 );\n\t\t\tvec3 lVectorGround = -lVector;\n\t\t\tvec3 hemiHalfVectorGround = normalize( lVectorGround + viewPosition );\n\t\t\tfloat hemiDotNormalHalfGround = 0.5 * dot( normal, hemiHalfVectorGround ) + 0.5;\n\t\t\tfloat hemiSpecularWeightGround = specularTex.r * max( pow( max( hemiDotNormalHalfGround, 0.0 ), shininess ), 0.0 );\n\t\t\tfloat dotProductGround = dot( normal, lVectorGround );\n\t\t\tfloat specularNormalization = ( shininess + 2.0 ) / 8.0;\n\t\t\tvec3 schlickSky = specular + vec3( 1.0 - specular ) * pow( max( 1.0 - dot( lVector, hemiHalfVectorSky ), 0.0 ), 5.0 );\n\t\t\tvec3 schlickGround = specular + vec3( 1.0 - specular ) * pow( max( 1.0 - dot( lVectorGround, hemiHalfVectorGround ), 0.0 ), 5.0 );\n\t\t\themiSpecular += hemiColor * specularNormalization * ( schlickSky * hemiSpecularWeightSky * max( dotProduct, 0.0 ) + schlickGround * hemiSpecularWeightGround * max( dotProductGround, 0.0 ) );\n\t\t}\n\t#endif\n\tvec3 totalDiffuse = vec3( 0.0 );\n\tvec3 totalSpecular = vec3( 0.0 );\n\t#if MAX_DIR_LIGHTS > 0\n\t\ttotalDiffuse += dirDiffuse;\n\t\ttotalSpecular += dirSpecular;\n\t#endif\n\t#if MAX_HEMI_LIGHTS > 0\n\t\ttotalDiffuse += hemiDiffuse;\n\t\ttotalSpecular += hemiSpecular;\n\t#endif\n\t#if MAX_POINT_LIGHTS > 0\n\t\ttotalDiffuse += pointDiffuse;\n\t\ttotalSpecular += pointSpecular;\n\t#endif\n\t#if MAX_SPOT_LIGHTS > 0\n\t\ttotalDiffuse += spotDiffuse;\n\t\ttotalSpecular += spotSpecular;\n\t#endif\n\t#ifdef METAL\n\t\tgl_FragColor.xyz = gl_FragColor.xyz * ( totalDiffuse + ambientLightColor * ambient + totalSpecular );\n\t#else\n\t\tgl_FragColor.xyz = gl_FragColor.xyz * ( totalDiffuse + ambientLightColor * ambient ) + totalSpecular;\n\t#endif\n\tif ( enableReflection ) {\n\t\tvec3 vReflect;\n\t\tvec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );\n\t\tif ( useRefract ) {\n\t\t\tvReflect = refract( cameraToVertex, normal, refractionRatio );\n\t\t} else {\n\t\t\tvReflect = reflect( cameraToVertex, normal );\n\t\t}\n\t\tvec4 cubeColor = textureCube( tCube, vec3( -vReflect.x, vReflect.yz ) );\n\t\t#ifdef GAMMA_INPUT\n\t\t\tcubeColor.xyz *= cubeColor.xyz;\n\t\t#endif\n\t\tgl_FragColor.xyz = mix( gl_FragColor.xyz, cubeColor.xyz, specularTex.r * reflectivity );\n\t}",
	THREE.ShaderChunk.shadowmap_fragment, THREE.ShaderChunk.linear_to_gamma_fragment, THREE.ShaderChunk.fog_fragment, "}"].join("\n"), vertexShader: ["attribute vec4 tangent;\nuniform vec2 uOffset;\nuniform vec2 uRepeat;\nuniform bool enableDisplacement;\n#ifdef VERTEX_TEXTURES\n\tuniform sampler2D tDisplacement;\n\tuniform float uDisplacementScale;\n\tuniform float uDisplacementBias;\n#endif\nvarying vec3 vTangent;\nvarying vec3 vBinormal;\nvarying vec3 vNormal;\nvarying vec2 vUv;\nvarying vec3 vWorldPosition;\nvarying vec3 vViewPosition;",
	THREE.ShaderChunk.skinning_pars_vertex, THREE.ShaderChunk.shadowmap_pars_vertex, THREE.ShaderChunk.logdepthbuf_pars_vertex, "void main() {", THREE.ShaderChunk.skinbase_vertex, THREE.ShaderChunk.skinnormal_vertex, "\t#ifdef USE_SKINNING\n\t\tvNormal = normalize( normalMatrix * skinnedNormal.xyz );\n\t\tvec4 skinnedTangent = skinMatrix * vec4( tangent.xyz, 0.0 );\n\t\tvTangent = normalize( normalMatrix * skinnedTangent.xyz );\n\t#else\n\t\tvNormal = normalize( normalMatrix * normal );\n\t\tvTangent = normalize( normalMatrix * tangent.xyz );\n\t#endif\n\tvBinormal = normalize( cross( vNormal, vTangent ) * tangent.w );\n\tvUv = uv * uRepeat + uOffset;\n\tvec3 displacedPosition;\n\t#ifdef VERTEX_TEXTURES\n\t\tif ( enableDisplacement ) {\n\t\t\tvec3 dv = texture2D( tDisplacement, uv ).xyz;\n\t\t\tfloat df = uDisplacementScale * dv.x + uDisplacementBias;\n\t\t\tdisplacedPosition = position + normalize( normal ) * df;\n\t\t} else {\n\t\t\t#ifdef USE_SKINNING\n\t\t\t\tvec4 skinVertex = bindMatrix * vec4( position, 1.0 );\n\t\t\t\tvec4 skinned = vec4( 0.0 );\n\t\t\t\tskinned += boneMatX * skinVertex * skinWeight.x;\n\t\t\t\tskinned += boneMatY * skinVertex * skinWeight.y;\n\t\t\t\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\t\t\t\tskinned += boneMatW * skinVertex * skinWeight.w;\n\t\t\t\tskinned  = bindMatrixInverse * skinned;\n\t\t\t\tdisplacedPosition = skinned.xyz;\n\t\t\t#else\n\t\t\t\tdisplacedPosition = position;\n\t\t\t#endif\n\t\t}\n\t#else\n\t\t#ifdef USE_SKINNING\n\t\t\tvec4 skinVertex = bindMatrix * vec4( position, 1.0 );\n\t\t\tvec4 skinned = vec4( 0.0 );\n\t\t\tskinned += boneMatX * skinVertex * skinWeight.x;\n\t\t\tskinned += boneMatY * skinVertex * skinWeight.y;\n\t\t\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\t\t\tskinned += boneMatW * skinVertex * skinWeight.w;\n\t\t\tskinned  = bindMatrixInverse * skinned;\n\t\t\tdisplacedPosition = skinned.xyz;\n\t\t#else\n\t\t\tdisplacedPosition = position;\n\t\t#endif\n\t#endif\n\tvec4 mvPosition = modelViewMatrix * vec4( displacedPosition, 1.0 );\n\tvec4 worldPosition = modelMatrix * vec4( displacedPosition, 1.0 );\n\tgl_Position = projectionMatrix * mvPosition;",
	THREE.ShaderChunk.logdepthbuf_vertex, "\tvWorldPosition = worldPosition.xyz;\n\tvViewPosition = -mvPosition.xyz;\n\t#ifdef USE_SHADOWMAP\n\t\tfor( int i = 0; i < MAX_SHADOWS; i ++ ) {\n\t\t\tvShadowCoord[ i ] = shadowMatrix[ i ] * worldPosition;\n\t\t}\n\t#endif\n}"].join("\n")}, cube: {uniforms: {tCube: {type: "t", value: null}, tFlip: {type: "f", value: -1}}, vertexShader: ["varying vec3 vWorldPosition;", THREE.ShaderChunk.logdepthbuf_pars_vertex, "void main() {\n\tvec4 worldPosition = modelMatrix * vec4( position, 1.0 );\n\tvWorldPosition = worldPosition.xyz;\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",
	THREE.ShaderChunk.logdepthbuf_vertex, "}"].join("\n"), fragmentShader: ["uniform samplerCube tCube;\nuniform float tFlip;\nvarying vec3 vWorldPosition;", THREE.ShaderChunk.logdepthbuf_pars_fragment, "void main() {\n\tgl_FragColor = textureCube( tCube, vec3( tFlip * vWorldPosition.x, vWorldPosition.yz ) );", THREE.ShaderChunk.logdepthbuf_fragment, "}"].join("\n")}, depthRGBA: {uniforms: {}, vertexShader: [THREE.ShaderChunk.morphtarget_pars_vertex, THREE.ShaderChunk.skinning_pars_vertex, THREE.ShaderChunk.logdepthbuf_pars_vertex,
	"void main() {", THREE.ShaderChunk.skinbase_vertex, THREE.ShaderChunk.morphtarget_vertex, THREE.ShaderChunk.skinning_vertex, THREE.ShaderChunk.default_vertex, THREE.ShaderChunk.logdepthbuf_vertex, "}"].join("\n"), fragmentShader: [THREE.ShaderChunk.logdepthbuf_pars_fragment, "vec4 pack_depth( const in float depth ) {\n\tconst vec4 bit_shift = vec4( 256.0 * 256.0 * 256.0, 256.0 * 256.0, 256.0, 1.0 );\n\tconst vec4 bit_mask = vec4( 0.0, 1.0 / 256.0, 1.0 / 256.0, 1.0 / 256.0 );\n\tvec4 res = mod( depth * bit_shift * vec4( 255 ), vec4( 256 ) ) / vec4( 255 );\n\tres -= res.xxyz * bit_mask;\n\treturn res;\n}\nvoid main() {",
	THREE.ShaderChunk.logdepthbuf_fragment, "\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tgl_FragData[ 0 ] = pack_depth( gl_FragDepthEXT );\n\t#else\n\t\tgl_FragData[ 0 ] = pack_depth( gl_FragCoord.z );\n\t#endif\n}"].join("\n")}};
THREE.WebGLRenderer = function (a) {
	function b(a, b) {
		var c = a.vertices.length, d = b.material;
		if (d.attributes) {
			void 0 === a.__webglCustomAttributesList && (a.__webglCustomAttributesList = []);
			for (var e in d.attributes) {
				var f = d.attributes[e];
				if (!f.__webglInitialized || f.createUniqueBuffers) {
					f.__webglInitialized = !0;
					var g = 1;
					"v2" === f.type ? g = 2 : "v3" === f.type ? g = 3 : "v4" === f.type ? g = 4 : "c" === f.type && (g = 3);
					f.size = g;
					f.array = new Float32Array(c * g);
					f.buffer = m.createBuffer();
					f.buffer.belongsToAttribute = e;
					f.needsUpdate = !0
				}
				a.__webglCustomAttributesList.push(f)
			}
		}
	}

	function c(a, b) {
		var c = b.geometry, g = a.faces3, h = 3 * g.length, k = 1 * g.length, l = 3 * g.length, g = d(b, a), n = f(g), r = e(g), p = g.vertexColors ? g.vertexColors : !1;
		a.__vertexArray = new Float32Array(3 * h);
		r && (a.__normalArray = new Float32Array(3 * h));
		c.hasTangents && (a.__tangentArray = new Float32Array(4 * h));
		p && (a.__colorArray = new Float32Array(3 * h));
		n && (0 < c.faceVertexUvs.length && (a.__uvArray = new Float32Array(2 * h)), 1 < c.faceVertexUvs.length && (a.__uv2Array = new Float32Array(2 * h)));
		b.geometry.skinWeights.length && b.geometry.skinIndices.length &&
		(a.__skinIndexArray = new Float32Array(4 * h), a.__skinWeightArray = new Float32Array(4 * h));
		c = null !== Eb && 21845 < k ? Uint32Array : Uint16Array;
		a.__typeArray = c;
		a.__faceArray = new c(3 * k);
		a.__lineArray = new c(2 * l);
		if (a.numMorphTargets)for (a.__morphTargetsArrays = [], c = 0, n = a.numMorphTargets; c < n; c++)a.__morphTargetsArrays.push(new Float32Array(3 * h));
		if (a.numMorphNormals)for (a.__morphNormalsArrays = [], c = 0, n = a.numMorphNormals; c < n; c++)a.__morphNormalsArrays.push(new Float32Array(3 * h));
		a.__webglFaceCount = 3 * k;
		a.__webglLineCount =
			2 * l;
		if (g.attributes) {
			void 0 === a.__webglCustomAttributesList && (a.__webglCustomAttributesList = []);
			for (var q in g.attributes) {
				var k = g.attributes[q], l = {}, s;
				for (s in k)l[s] = k[s];
				if (!l.__webglInitialized || l.createUniqueBuffers)l.__webglInitialized = !0, c = 1, "v2" === l.type ? c = 2 : "v3" === l.type ? c = 3 : "v4" === l.type ? c = 4 : "c" === l.type && (c = 3), l.size = c, l.array = new Float32Array(h * c), l.buffer = m.createBuffer(), l.buffer.belongsToAttribute = q, k.needsUpdate = !0, l.__original = k;
				a.__webglCustomAttributesList.push(l)
			}
		}
		a.__inittedArrays = !0
	}

	function d(a, b) {
		return a.material instanceof THREE.MeshFaceMaterial ? a.material.materials[b.materialIndex] : a.material
	}

	function e(a) {
		return a instanceof THREE.MeshBasicMaterial && !a.envMap || a instanceof THREE.MeshDepthMaterial ? !1 : a && void 0 !== a.shading && a.shading === THREE.SmoothShading ? THREE.SmoothShading : THREE.FlatShading
	}

	function f(a) {
		return a.map || a.lightMap || a.bumpMap || a.normalMap || a.specularMap || a.alphaMap || a instanceof THREE.ShaderMaterial ? !0 : !1
	}

	function g(a) {
		for (var b in a.attributes) {
			var c =
				"index" === b ? m.ELEMENT_ARRAY_BUFFER : m.ARRAY_BUFFER, d = a.attributes[b];
			d.buffer = m.createBuffer();
			m.bindBuffer(c, d.buffer);
			m.bufferData(c, d.array, m.STATIC_DRAW)
		}
	}

	function h(a, b, c, d) {
		for (var e in b) {
			var f = b[e], g = c[e];
			if (0 <= f)if (g) {
				var h = g.itemSize;
				m.bindBuffer(m.ARRAY_BUFFER, g.buffer);
				l(f);
				m.vertexAttribPointer(f, h, m.FLOAT, !1, 0, d * h * 4)
			} else a.defaultAttributeValues && (2 === a.defaultAttributeValues[e].length ? m.vertexAttrib2fv(f, a.defaultAttributeValues[e]) : 3 === a.defaultAttributeValues[e].length && m.vertexAttrib3fv(f,
				a.defaultAttributeValues[e]))
		}
		n()
	}

	function k() {
		for (var a = 0, b = pb.length; a < b; a++)pb[a] = 0
	}

	function l(a) {
		pb[a] = 1;
		0 === tb[a] && (m.enableVertexAttribArray(a), tb[a] = 1)
	}

	function n() {
		for (var a = 0, b = tb.length; a < b; a++)tb[a] !== pb[a] && (m.disableVertexAttribArray(a), tb[a] = 0)
	}

	function q(a, b) {
		return a.z !== b.z ? b.z - a.z : a.id - b.id
	}

	function r(a, b) {
		return a.z !== b.z ? a.z - b.z : a.id - b.id
	}

	function t(a, b) {
		return b[0] - a[0]
	}

	function s(a, b, h) {
		if (!1 !== b.visible) {
			var k = a.__webglObjects[b.id];
			if (k && (!1 === b.frustumCulled || !0 === jc.intersectsObject(b))) {
				var l =
					b.geometry, n, r, p;
				if (l instanceof THREE.BufferGeometry) {
					var q = m.DYNAMIC_DRAW, w = l.attributes, u, v;
					for (u in w)v = w[u], v.needsUpdate && ("index" === u ? (m.bindBuffer(m.ELEMENT_ARRAY_BUFFER, v.buffer), m.bufferData(m.ELEMENT_ARRAY_BUFFER, v.array, q)) : (m.bindBuffer(m.ARRAY_BUFFER, v.buffer), m.bufferData(m.ARRAY_BUFFER, v.array, q)), v.needsUpdate = !1)
				} else if (b instanceof THREE.Mesh) {
					if (l.buffersNeedUpdate || l.groupsNeedUpdate)l instanceof THREE.BufferGeometry ? g(l) : b instanceof THREE.Mesh && D(a, b, l);
					for (var A = 0, z = l.geometryGroupsList.length; A <
						z; A++)if (n = l.geometryGroupsList[A], p = d(b, n), (l.buffersNeedUpdate || l.groupsNeedUpdate) && c(n, b), r = p.attributes && x(p), l.verticesNeedUpdate || l.morphTargetsNeedUpdate || l.elementsNeedUpdate || l.uvsNeedUpdate || l.normalsNeedUpdate || l.colorsNeedUpdate || l.tangentsNeedUpdate || r) {
						var y = n, E = b, I = m.DYNAMIC_DRAW, J = !l.dynamic, L = p;
						if (y.__inittedArrays) {
							var K = e(L), H = L.vertexColors ? L.vertexColors : !1, Q = f(L), O = K === THREE.SmoothShading, B = void 0, N = void 0, P = void 0, T = void 0, R = void 0, ba = void 0, S = void 0, $ = void 0, X = void 0, V = void 0,
								za = void 0, ga = void 0, ha = void 0, ia = void 0, Ea = void 0, aa = void 0, da = void 0, ya = void 0, U = void 0, ca = void 0, W = void 0, Ba = void 0, Aa = void 0, la = void 0, ma = void 0, oa = void 0, ra = void 0, ua = void 0, va = void 0, ja = void 0, Fa = void 0, Da = void 0, Ga = void 0, Ya = void 0, qa = void 0, Ka = void 0, xa = void 0, Ca = void 0, Ja = void 0, Qa = void 0, db = 0, eb = 0, Sa = 0, Za = 0, Ta = 0, gb = 0, Ua = 0, ub = 0, $a = 0, wa = 0, Ha = 0, M = 0, Ra = void 0, hb = y.__vertexArray, cb = y.__uvArray, fb = y.__uv2Array, yb = y.__normalArray, Va = y.__tangentArray, ib = y.__colorArray, Wa = y.__skinIndexArray, Xa = y.__skinWeightArray,
								tb = y.__morphTargetsArrays, wb = y.__morphNormalsArrays, sb = y.__webglCustomAttributesList, F = void 0, pb = y.__faceArray, zb = y.__lineArray, La = E.geometry, Db = La.elementsNeedUpdate, xb = La.uvsNeedUpdate, Eb = La.normalsNeedUpdate, Ob = La.tangentsNeedUpdate, Pb = La.colorsNeedUpdate, Sb = La.morphTargetsNeedUpdate, lc = La.vertices, ka = y.faces3, jb = La.faces, Hb = La.faceVertexUvs[0], Ib = La.faceVertexUvs[1], mc = La.skinIndices, Vb = La.skinWeights, Wb = La.morphTargets, Jb = La.morphNormals;
							if (La.verticesNeedUpdate) {
								B = 0;
								for (N = ka.length; B < N; B++)T =
									jb[ka[B]], ga = lc[T.a], ha = lc[T.b], ia = lc[T.c], hb[eb] = ga.x, hb[eb + 1] = ga.y, hb[eb + 2] = ga.z, hb[eb + 3] = ha.x, hb[eb + 4] = ha.y, hb[eb + 5] = ha.z, hb[eb + 6] = ia.x, hb[eb + 7] = ia.y, hb[eb + 8] = ia.z, eb += 9;
								m.bindBuffer(m.ARRAY_BUFFER, y.__webglVertexBuffer);
								m.bufferData(m.ARRAY_BUFFER, hb, I)
							}
							if (Sb)for (qa = 0, Ka = Wb.length; qa < Ka; qa++) {
								B = Ha = 0;
								for (N = ka.length; B < N; B++)Ja = ka[B], T = jb[Ja], ga = Wb[qa].vertices[T.a], ha = Wb[qa].vertices[T.b], ia = Wb[qa].vertices[T.c], xa = tb[qa], xa[Ha] = ga.x, xa[Ha + 1] = ga.y, xa[Ha + 2] = ga.z, xa[Ha + 3] = ha.x, xa[Ha + 4] = ha.y, xa[Ha +
									5] = ha.z, xa[Ha + 6] = ia.x, xa[Ha + 7] = ia.y, xa[Ha + 8] = ia.z, L.morphNormals && (O ? (Qa = Jb[qa].vertexNormals[Ja], ya = Qa.a, U = Qa.b, ca = Qa.c) : ca = U = ya = Jb[qa].faceNormals[Ja], Ca = wb[qa], Ca[Ha] = ya.x, Ca[Ha + 1] = ya.y, Ca[Ha + 2] = ya.z, Ca[Ha + 3] = U.x, Ca[Ha + 4] = U.y, Ca[Ha + 5] = U.z, Ca[Ha + 6] = ca.x, Ca[Ha + 7] = ca.y, Ca[Ha + 8] = ca.z), Ha += 9;
								m.bindBuffer(m.ARRAY_BUFFER, y.__webglMorphTargetsBuffers[qa]);
								m.bufferData(m.ARRAY_BUFFER, tb[qa], I);
								L.morphNormals && (m.bindBuffer(m.ARRAY_BUFFER, y.__webglMorphNormalsBuffers[qa]), m.bufferData(m.ARRAY_BUFFER, wb[qa],
									I))
							}
							if (Vb.length) {
								B = 0;
								for (N = ka.length; B < N; B++)T = jb[ka[B]], la = Vb[T.a], ma = Vb[T.b], oa = Vb[T.c], Xa[wa] = la.x, Xa[wa + 1] = la.y, Xa[wa + 2] = la.z, Xa[wa + 3] = la.w, Xa[wa + 4] = ma.x, Xa[wa + 5] = ma.y, Xa[wa + 6] = ma.z, Xa[wa + 7] = ma.w, Xa[wa + 8] = oa.x, Xa[wa + 9] = oa.y, Xa[wa + 10] = oa.z, Xa[wa + 11] = oa.w, ra = mc[T.a], ua = mc[T.b], va = mc[T.c], Wa[wa] = ra.x, Wa[wa + 1] = ra.y, Wa[wa + 2] = ra.z, Wa[wa + 3] = ra.w, Wa[wa + 4] = ua.x, Wa[wa + 5] = ua.y, Wa[wa + 6] = ua.z, Wa[wa + 7] = ua.w, Wa[wa + 8] = va.x, Wa[wa + 9] = va.y, Wa[wa + 10] = va.z, Wa[wa + 11] = va.w, wa += 12;
								0 < wa && (m.bindBuffer(m.ARRAY_BUFFER,
									y.__webglSkinIndicesBuffer), m.bufferData(m.ARRAY_BUFFER, Wa, I), m.bindBuffer(m.ARRAY_BUFFER, y.__webglSkinWeightsBuffer), m.bufferData(m.ARRAY_BUFFER, Xa, I))
							}
							if (Pb && H) {
								B = 0;
								for (N = ka.length; B < N; B++)T = jb[ka[B]], S = T.vertexColors, $ = T.color, 3 === S.length && H === THREE.VertexColors ? (W = S[0], Ba = S[1], Aa = S[2]) : Aa = Ba = W = $, ib[$a] = W.r, ib[$a + 1] = W.g, ib[$a + 2] = W.b, ib[$a + 3] = Ba.r, ib[$a + 4] = Ba.g, ib[$a + 5] = Ba.b, ib[$a + 6] = Aa.r, ib[$a + 7] = Aa.g, ib[$a + 8] = Aa.b, $a += 9;
								0 < $a && (m.bindBuffer(m.ARRAY_BUFFER, y.__webglColorBuffer), m.bufferData(m.ARRAY_BUFFER,
									ib, I))
							}
							if (Ob && La.hasTangents) {
								B = 0;
								for (N = ka.length; B < N; B++)T = jb[ka[B]], X = T.vertexTangents, Ea = X[0], aa = X[1], da = X[2], Va[Ua] = Ea.x, Va[Ua + 1] = Ea.y, Va[Ua + 2] = Ea.z, Va[Ua + 3] = Ea.w, Va[Ua + 4] = aa.x, Va[Ua + 5] = aa.y, Va[Ua + 6] = aa.z, Va[Ua + 7] = aa.w, Va[Ua + 8] = da.x, Va[Ua + 9] = da.y, Va[Ua + 10] = da.z, Va[Ua + 11] = da.w, Ua += 12;
								m.bindBuffer(m.ARRAY_BUFFER, y.__webglTangentBuffer);
								m.bufferData(m.ARRAY_BUFFER, Va, I)
							}
							if (Eb && K) {
								B = 0;
								for (N = ka.length; B < N; B++)if (T = jb[ka[B]], R = T.vertexNormals, ba = T.normal, 3 === R.length && O)for (ja = 0; 3 > ja; ja++)Da = R[ja],
									yb[gb] = Da.x, yb[gb + 1] = Da.y, yb[gb + 2] = Da.z, gb += 3; else for (ja = 0; 3 > ja; ja++)yb[gb] = ba.x, yb[gb + 1] = ba.y, yb[gb + 2] = ba.z, gb += 3;
								m.bindBuffer(m.ARRAY_BUFFER, y.__webglNormalBuffer);
								m.bufferData(m.ARRAY_BUFFER, yb, I)
							}
							if (xb && Hb && Q) {
								B = 0;
								for (N = ka.length; B < N; B++)if (P = ka[B], V = Hb[P], void 0 !== V)for (ja = 0; 3 > ja; ja++)Ga = V[ja], cb[Sa] = Ga.x, cb[Sa + 1] = Ga.y, Sa += 2;
								0 < Sa && (m.bindBuffer(m.ARRAY_BUFFER, y.__webglUVBuffer), m.bufferData(m.ARRAY_BUFFER, cb, I))
							}
							if (xb && Ib && Q) {
								B = 0;
								for (N = ka.length; B < N; B++)if (P = ka[B], za = Ib[P], void 0 !== za)for (ja =
																												 0; 3 > ja; ja++)Ya = za[ja], fb[Za] = Ya.x, fb[Za + 1] = Ya.y, Za += 2;
								0 < Za && (m.bindBuffer(m.ARRAY_BUFFER, y.__webglUV2Buffer), m.bufferData(m.ARRAY_BUFFER, fb, I))
							}
							if (Db) {
								B = 0;
								for (N = ka.length; B < N; B++)pb[Ta] = db, pb[Ta + 1] = db + 1, pb[Ta + 2] = db + 2, Ta += 3, zb[ub] = db, zb[ub + 1] = db + 1, zb[ub + 2] = db, zb[ub + 3] = db + 2, zb[ub + 4] = db + 1, zb[ub + 5] = db + 2, ub += 6, db += 3;
								m.bindBuffer(m.ELEMENT_ARRAY_BUFFER, y.__webglFaceBuffer);
								m.bufferData(m.ELEMENT_ARRAY_BUFFER, pb, I);
								m.bindBuffer(m.ELEMENT_ARRAY_BUFFER, y.__webglLineBuffer);
								m.bufferData(m.ELEMENT_ARRAY_BUFFER,
									zb, I)
							}
							if (sb)for (ja = 0, Fa = sb.length; ja < Fa; ja++)if (F = sb[ja], F.__original.needsUpdate) {
								M = 0;
								if (1 === F.size)if (void 0 === F.boundTo || "vertices" === F.boundTo)for (B = 0, N = ka.length; B < N; B++)T = jb[ka[B]], F.array[M] = F.value[T.a], F.array[M + 1] = F.value[T.b], F.array[M + 2] = F.value[T.c], M += 3; else {
									if ("faces" === F.boundTo)for (B = 0, N = ka.length; B < N; B++)Ra = F.value[ka[B]], F.array[M] = Ra, F.array[M + 1] = Ra, F.array[M + 2] = Ra, M += 3
								} else if (2 === F.size)if (void 0 === F.boundTo || "vertices" === F.boundTo)for (B = 0, N = ka.length; B < N; B++)T = jb[ka[B]], ga =
									F.value[T.a], ha = F.value[T.b], ia = F.value[T.c], F.array[M] = ga.x, F.array[M + 1] = ga.y, F.array[M + 2] = ha.x, F.array[M + 3] = ha.y, F.array[M + 4] = ia.x, F.array[M + 5] = ia.y, M += 6; else {
									if ("faces" === F.boundTo)for (B = 0, N = ka.length; B < N; B++)ia = ha = ga = Ra = F.value[ka[B]], F.array[M] = ga.x, F.array[M + 1] = ga.y, F.array[M + 2] = ha.x, F.array[M + 3] = ha.y, F.array[M + 4] = ia.x, F.array[M + 5] = ia.y, M += 6
								} else if (3 === F.size) {
									var ta;
									ta = "c" === F.type ? ["r", "g", "b"] : ["x", "y", "z"];
									if (void 0 === F.boundTo || "vertices" === F.boundTo)for (B = 0, N = ka.length; B < N; B++)T = jb[ka[B]],
										ga = F.value[T.a], ha = F.value[T.b], ia = F.value[T.c], F.array[M] = ga[ta[0]], F.array[M + 1] = ga[ta[1]], F.array[M + 2] = ga[ta[2]], F.array[M + 3] = ha[ta[0]], F.array[M + 4] = ha[ta[1]], F.array[M + 5] = ha[ta[2]], F.array[M + 6] = ia[ta[0]], F.array[M + 7] = ia[ta[1]], F.array[M + 8] = ia[ta[2]], M += 9; else if ("faces" === F.boundTo)for (B = 0, N = ka.length; B < N; B++)ia = ha = ga = Ra = F.value[ka[B]], F.array[M] = ga[ta[0]], F.array[M + 1] = ga[ta[1]], F.array[M + 2] = ga[ta[2]], F.array[M + 3] = ha[ta[0]], F.array[M + 4] = ha[ta[1]], F.array[M + 5] = ha[ta[2]], F.array[M + 6] = ia[ta[0]], F.array[M +
										7] = ia[ta[1]], F.array[M + 8] = ia[ta[2]], M += 9; else if ("faceVertices" === F.boundTo)for (B = 0, N = ka.length; B < N; B++)Ra = F.value[ka[B]], ga = Ra[0], ha = Ra[1], ia = Ra[2], F.array[M] = ga[ta[0]], F.array[M + 1] = ga[ta[1]], F.array[M + 2] = ga[ta[2]], F.array[M + 3] = ha[ta[0]], F.array[M + 4] = ha[ta[1]], F.array[M + 5] = ha[ta[2]], F.array[M + 6] = ia[ta[0]], F.array[M + 7] = ia[ta[1]], F.array[M + 8] = ia[ta[2]], M += 9
								} else if (4 === F.size)if (void 0 === F.boundTo || "vertices" === F.boundTo)for (B = 0, N = ka.length; B < N; B++)T = jb[ka[B]], ga = F.value[T.a], ha = F.value[T.b], ia = F.value[T.c],
									F.array[M] = ga.x, F.array[M + 1] = ga.y, F.array[M + 2] = ga.z, F.array[M + 3] = ga.w, F.array[M + 4] = ha.x, F.array[M + 5] = ha.y, F.array[M + 6] = ha.z, F.array[M + 7] = ha.w, F.array[M + 8] = ia.x, F.array[M + 9] = ia.y, F.array[M + 10] = ia.z, F.array[M + 11] = ia.w, M += 12; else if ("faces" === F.boundTo)for (B = 0, N = ka.length; B < N; B++)ia = ha = ga = Ra = F.value[ka[B]], F.array[M] = ga.x, F.array[M + 1] = ga.y, F.array[M + 2] = ga.z, F.array[M + 3] = ga.w, F.array[M + 4] = ha.x, F.array[M + 5] = ha.y, F.array[M + 6] = ha.z, F.array[M + 7] = ha.w, F.array[M + 8] = ia.x, F.array[M + 9] = ia.y, F.array[M + 10] = ia.z,
									F.array[M + 11] = ia.w, M += 12; else if ("faceVertices" === F.boundTo)for (B = 0, N = ka.length; B < N; B++)Ra = F.value[ka[B]], ga = Ra[0], ha = Ra[1], ia = Ra[2], F.array[M] = ga.x, F.array[M + 1] = ga.y, F.array[M + 2] = ga.z, F.array[M + 3] = ga.w, F.array[M + 4] = ha.x, F.array[M + 5] = ha.y, F.array[M + 6] = ha.z, F.array[M + 7] = ha.w, F.array[M + 8] = ia.x, F.array[M + 9] = ia.y, F.array[M + 10] = ia.z, F.array[M + 11] = ia.w, M += 12;
								m.bindBuffer(m.ARRAY_BUFFER, F.buffer);
								m.bufferData(m.ARRAY_BUFFER, F.array, I)
							}
							J && (delete y.__inittedArrays, delete y.__colorArray, delete y.__normalArray,
								delete y.__tangentArray, delete y.__uvArray, delete y.__uv2Array, delete y.__faceArray, delete y.__vertexArray, delete y.__lineArray, delete y.__skinIndexArray, delete y.__skinWeightArray)
						}
					}
					l.verticesNeedUpdate = !1;
					l.morphTargetsNeedUpdate = !1;
					l.elementsNeedUpdate = !1;
					l.uvsNeedUpdate = !1;
					l.normalsNeedUpdate = !1;
					l.colorsNeedUpdate = !1;
					l.tangentsNeedUpdate = !1;
					l.buffersNeedUpdate = !1;
					p.attributes && C(p)
				} else if (b instanceof THREE.Line) {
					p = d(b, l);
					r = p.attributes && x(p);
					if (l.verticesNeedUpdate || l.colorsNeedUpdate || l.lineDistancesNeedUpdate ||
						r) {
						var Xb = m.DYNAMIC_DRAW, Kb, Lb, Mb, Yb, sa, Zb, Nb = l.vertices, Qb = l.colors, Rb = l.lineDistances, ec = Nb.length, fc = Qb.length, gc = Rb.length, $b = l.__vertexArray, ac = l.__colorArray, Tb = l.__lineDistanceArray, hc = l.colorsNeedUpdate, ic = l.lineDistancesNeedUpdate, nc = l.__webglCustomAttributesList, bc, uc, Ia, Fb, Ma, pa;
						if (l.verticesNeedUpdate) {
							for (Kb = 0; Kb < ec; Kb++)Yb = Nb[Kb], sa = 3 * Kb, $b[sa] = Yb.x, $b[sa + 1] = Yb.y, $b[sa + 2] = Yb.z;
							m.bindBuffer(m.ARRAY_BUFFER, l.__webglVertexBuffer);
							m.bufferData(m.ARRAY_BUFFER, $b, Xb)
						}
						if (hc) {
							for (Lb = 0; Lb < fc; Lb++)Zb =
								Qb[Lb], sa = 3 * Lb, ac[sa] = Zb.r, ac[sa + 1] = Zb.g, ac[sa + 2] = Zb.b;
							m.bindBuffer(m.ARRAY_BUFFER, l.__webglColorBuffer);
							m.bufferData(m.ARRAY_BUFFER, ac, Xb)
						}
						if (ic) {
							for (Mb = 0; Mb < gc; Mb++)Tb[Mb] = Rb[Mb];
							m.bindBuffer(m.ARRAY_BUFFER, l.__webglLineDistanceBuffer);
							m.bufferData(m.ARRAY_BUFFER, Tb, Xb)
						}
						if (nc)for (bc = 0, uc = nc.length; bc < uc; bc++)if (pa = nc[bc], pa.needsUpdate && (void 0 === pa.boundTo || "vertices" === pa.boundTo)) {
							sa = 0;
							Fb = pa.value.length;
							if (1 === pa.size)for (Ia = 0; Ia < Fb; Ia++)pa.array[Ia] = pa.value[Ia]; else if (2 === pa.size)for (Ia =
																																	  0; Ia < Fb; Ia++)Ma = pa.value[Ia], pa.array[sa] = Ma.x, pa.array[sa + 1] = Ma.y, sa += 2; else if (3 === pa.size)if ("c" === pa.type)for (Ia = 0; Ia < Fb; Ia++)Ma = pa.value[Ia], pa.array[sa] = Ma.r, pa.array[sa + 1] = Ma.g, pa.array[sa + 2] = Ma.b, sa += 3; else for (Ia = 0; Ia < Fb; Ia++)Ma = pa.value[Ia], pa.array[sa] = Ma.x, pa.array[sa + 1] = Ma.y, pa.array[sa + 2] = Ma.z, sa += 3; else if (4 === pa.size)for (Ia = 0; Ia < Fb; Ia++)Ma = pa.value[Ia], pa.array[sa] = Ma.x, pa.array[sa + 1] = Ma.y, pa.array[sa + 2] = Ma.z, pa.array[sa + 3] = Ma.w, sa += 4;
							m.bindBuffer(m.ARRAY_BUFFER, pa.buffer);
							m.bufferData(m.ARRAY_BUFFER,
								pa.array, Xb)
						}
					}
					l.verticesNeedUpdate = !1;
					l.colorsNeedUpdate = !1;
					l.lineDistancesNeedUpdate = !1;
					p.attributes && C(p)
				} else if (b instanceof THREE.PointCloud) {
					p = d(b, l);
					r = p.attributes && x(p);
					if (l.verticesNeedUpdate || l.colorsNeedUpdate || b.sortParticles || r) {
						var oc = m.DYNAMIC_DRAW, Na, kb, lb, Z, mb, vb, cc = l.vertices, pc = cc.length, qc = l.colors, vc = qc.length, Ab = l.__vertexArray, Bb = l.__colorArray, qb = l.__sortArray, wc = l.verticesNeedUpdate, xc = l.colorsNeedUpdate, rb = l.__webglCustomAttributesList, ab, Gb, fa, bb, na, Y;
						if (b.sortParticles) {
							kc.copy(Ub);
							kc.multiply(b.matrixWorld);
							for (Na = 0; Na < pc; Na++)lb = cc[Na], ea.copy(lb), ea.applyProjection(kc), qb[Na] = [ea.z, Na];
							qb.sort(t);
							for (Na = 0; Na < pc; Na++)lb = cc[qb[Na][1]], Z = 3 * Na, Ab[Z] = lb.x, Ab[Z + 1] = lb.y, Ab[Z + 2] = lb.z;
							for (kb = 0; kb < vc; kb++)Z = 3 * kb, vb = qc[qb[kb][1]], Bb[Z] = vb.r, Bb[Z + 1] = vb.g, Bb[Z + 2] = vb.b;
							if (rb)for (ab = 0, Gb = rb.length; ab < Gb; ab++)if (Y = rb[ab], void 0 === Y.boundTo || "vertices" === Y.boundTo)if (Z = 0, bb = Y.value.length, 1 === Y.size)for (fa = 0; fa < bb; fa++)mb = qb[fa][1], Y.array[fa] = Y.value[mb]; else if (2 === Y.size)for (fa = 0; fa < bb; fa++)mb =
								qb[fa][1], na = Y.value[mb], Y.array[Z] = na.x, Y.array[Z + 1] = na.y, Z += 2; else if (3 === Y.size)if ("c" === Y.type)for (fa = 0; fa < bb; fa++)mb = qb[fa][1], na = Y.value[mb], Y.array[Z] = na.r, Y.array[Z + 1] = na.g, Y.array[Z + 2] = na.b, Z += 3; else for (fa = 0; fa < bb; fa++)mb = qb[fa][1], na = Y.value[mb], Y.array[Z] = na.x, Y.array[Z + 1] = na.y, Y.array[Z + 2] = na.z, Z += 3; else if (4 === Y.size)for (fa = 0; fa < bb; fa++)mb = qb[fa][1], na = Y.value[mb], Y.array[Z] = na.x, Y.array[Z + 1] = na.y, Y.array[Z + 2] = na.z, Y.array[Z + 3] = na.w, Z += 4
						} else {
							if (wc)for (Na = 0; Na < pc; Na++)lb = cc[Na], Z = 3 *
								Na, Ab[Z] = lb.x, Ab[Z + 1] = lb.y, Ab[Z + 2] = lb.z;
							if (xc)for (kb = 0; kb < vc; kb++)vb = qc[kb], Z = 3 * kb, Bb[Z] = vb.r, Bb[Z + 1] = vb.g, Bb[Z + 2] = vb.b;
							if (rb)for (ab = 0, Gb = rb.length; ab < Gb; ab++)if (Y = rb[ab], Y.needsUpdate && (void 0 === Y.boundTo || "vertices" === Y.boundTo))if (bb = Y.value.length, Z = 0, 1 === Y.size)for (fa = 0; fa < bb; fa++)Y.array[fa] = Y.value[fa]; else if (2 === Y.size)for (fa = 0; fa < bb; fa++)na = Y.value[fa], Y.array[Z] = na.x, Y.array[Z + 1] = na.y, Z += 2; else if (3 === Y.size)if ("c" === Y.type)for (fa = 0; fa < bb; fa++)na = Y.value[fa], Y.array[Z] = na.r, Y.array[Z + 1] =
								na.g, Y.array[Z + 2] = na.b, Z += 3; else for (fa = 0; fa < bb; fa++)na = Y.value[fa], Y.array[Z] = na.x, Y.array[Z + 1] = na.y, Y.array[Z + 2] = na.z, Z += 3; else if (4 === Y.size)for (fa = 0; fa < bb; fa++)na = Y.value[fa], Y.array[Z] = na.x, Y.array[Z + 1] = na.y, Y.array[Z + 2] = na.z, Y.array[Z + 3] = na.w, Z += 4
						}
						if (wc || b.sortParticles)m.bindBuffer(m.ARRAY_BUFFER, l.__webglVertexBuffer), m.bufferData(m.ARRAY_BUFFER, Ab, oc);
						if (xc || b.sortParticles)m.bindBuffer(m.ARRAY_BUFFER, l.__webglColorBuffer), m.bufferData(m.ARRAY_BUFFER, Bb, oc);
						if (rb)for (ab = 0, Gb = rb.length; ab <
							Gb; ab++)if (Y = rb[ab], Y.needsUpdate || b.sortParticles)m.bindBuffer(m.ARRAY_BUFFER, Y.buffer), m.bufferData(m.ARRAY_BUFFER, Y.array, oc)
					}
					l.verticesNeedUpdate = !1;
					l.colorsNeedUpdate = !1;
					p.attributes && C(p)
				}
				for (var Cb = 0, rc = k.length; Cb < rc; Cb++) {
					var dc = k[Cb], nb = dc, yc = nb.object, sc = nb.buffer, tc = yc.geometry, ob = yc.material;
					ob instanceof THREE.MeshFaceMaterial ? (ob = ob.materials[tc instanceof THREE.BufferGeometry ? 0 : sc.materialIndex], ob.transparent ? (nb.material = ob, Pa.push(nb)) : (nb.material = ob, Oa.push(nb))) : ob && (ob.transparent ?
						(nb.material = ob, Pa.push(nb)) : (nb.material = ob, Oa.push(nb)));
					dc.render = !0;
					!0 === G.sortObjects && (null !== b.renderDepth ? dc.z = b.renderDepth : (ea.setFromMatrixPosition(b.matrixWorld), ea.applyProjection(Ub), dc.z = ea.z))
				}
			}
			Cb = 0;
			for (rc = b.children.length; Cb < rc; Cb++)s(a, b.children[Cb], h)
		}
	}

	function p(a, b, c) {
		if (0 !== a.length)for (var d = 0, e = a.length; d < e; d++)la = Ya = null, Ca = ca = ja = ua = Da = ra = Fa = -1, fb = !0, a[d].render(b, c, Hb, Ib), la = Ya = null, Ca = ca = ja = ua = Da = ra = Fa = -1, fb = !0
	}

	function v(a, b, c, d, e, f) {
		for (var g, h, k, m = a.length - 1; -1 !== m; m--) {
			g =
				a[m];
			h = g.object;
			k = g.buffer;
			N(h, b);
			if (f)g = f; else {
				g = g.material;
				if (!g)continue;
				e && G.setBlending(g.blending, g.blendEquation, g.blendSrc, g.blendDst);
				G.setDepthTest(g.depthTest);
				G.setDepthWrite(g.depthWrite);
				J(g.polygonOffset, g.polygonOffsetFactor, g.polygonOffsetUnits)
			}
			G.setMaterialFaces(g);
			k instanceof THREE.BufferGeometry ? G.renderBufferDirect(b, c, d, g, k, h) : G.renderBuffer(b, c, d, g, k, h)
		}
	}

	function w(a, b, c, d, e, f, g) {
		for (var h, k, m = 0, l = a.length; m < l; m++)if (h = a[m], k = h.object, k.visible) {
			if (g)h = g; else {
				h = h[b];
				if (!h)continue;
				f && G.setBlending(h.blending, h.blendEquation, h.blendSrc, h.blendDst);
				G.setDepthTest(h.depthTest);
				G.setDepthWrite(h.depthWrite);
				J(h.polygonOffset, h.polygonOffsetFactor, h.polygonOffsetUnits)
			}
			G.renderImmediateObject(c, d, e, h, k)
		}
	}

	function u(a) {
		var b = a.object.material;
		b.transparent ? (a.transparent = b, a.opaque = null) : (a.opaque = b, a.transparent = null)
	}

	function D(a, b, d) {
		var e, f = !1;
		e = b.material;
		if (void 0 === d.geometryGroups || d.groupsNeedUpdate)delete a.__webglObjects[b.id], d.makeGroups(e instanceof THREE.MeshFaceMaterial,
			Eb ? 4294967296 : 65535), d.groupsNeedUpdate = !1;
		for (var g = 0, h = d.geometryGroupsList.length; g < h; g++) {
			e = d.geometryGroupsList[g];
			if (e.__webglVertexBuffer)f = !1; else {
				f = e;
				f.__webglVertexBuffer = m.createBuffer();
				f.__webglNormalBuffer = m.createBuffer();
				f.__webglTangentBuffer = m.createBuffer();
				f.__webglColorBuffer = m.createBuffer();
				f.__webglUVBuffer = m.createBuffer();
				f.__webglUV2Buffer = m.createBuffer();
				f.__webglSkinIndicesBuffer = m.createBuffer();
				f.__webglSkinWeightsBuffer = m.createBuffer();
				f.__webglFaceBuffer = m.createBuffer();
				f.__webglLineBuffer = m.createBuffer();
				var k = void 0, l = void 0;
				if (f.numMorphTargets)for (f.__webglMorphTargetsBuffers = [], k = 0, l = f.numMorphTargets; k < l; k++)f.__webglMorphTargetsBuffers.push(m.createBuffer());
				if (f.numMorphNormals)for (f.__webglMorphNormalsBuffers = [], k = 0, l = f.numMorphNormals; k < l; k++)f.__webglMorphNormalsBuffers.push(m.createBuffer());
				G.info.memory.geometries++;
				c(e, b);
				d.verticesNeedUpdate = !0;
				d.morphTargetsNeedUpdate = !0;
				d.elementsNeedUpdate = !0;
				d.uvsNeedUpdate = !0;
				d.normalsNeedUpdate = !0;
				d.tangentsNeedUpdate = !0;
				f = d.colorsNeedUpdate = !0
			}
			(f || void 0 === b.__webglActive) && A(a.__webglObjects, e, b)
		}
		b.__webglActive = !0
	}

	function A(a, b, c) {
		var d = c.id;
		a[d] = a[d] || [];
		a[d].push({id: d, buffer: b, object: c, material: null, z: 0})
	}

	function x(a) {
		for (var b in a.attributes)if (a.attributes[b].needsUpdate)return!0;
		return!1
	}

	function C(a) {
		for (var b in a.attributes)a.attributes[b].needsUpdate = !1
	}

	function I(a, b) {
		if (a instanceof THREE.Mesh || a instanceof THREE.PointCloud || a instanceof THREE.Line)delete b.__webglObjects[a.id]; else if (a instanceof
			THREE.ImmediateRenderObject || a.immediateRenderCallback)for (var c = b.__webglObjectsImmediate, d = c.length - 1; 0 <= d; d--)c[d].object === a && c.splice(d, 1);
		delete a.__webglActive
	}

	function z(a, b, c, d, e) {
		qa = 0;
		d.needsUpdate && (d.program && Nb(d), G.initMaterial(d, b, c, e), d.needsUpdate = !1);
		d.morphTargets && !e.__webglMorphTargetInfluences && (e.__webglMorphTargetInfluences = new Float32Array(G.maxMorphTargets));
		var f = !1, g = !1, h = !1, k = d.program, l = k.uniforms, n = d.__webglShader.uniforms;
		k.id !== Ya && (m.useProgram(k.program), Ya = k.id,
			h = g = f = !0);
		d.id !== Ca && (-1 === Ca && (h = !0), Ca = d.id, g = !0);
		if (f || a !== la)m.uniformMatrix4fv(l.projectionMatrix, !1, a.projectionMatrix.elements), Ea && m.uniform1f(l.logDepthBufFC, 2 / (Math.log(a.far + 1) / Math.LN2)), a !== la && (la = a), (d instanceof THREE.ShaderMaterial || d instanceof THREE.MeshPhongMaterial || d.envMap) && null !== l.cameraPosition && (ea.setFromMatrixPosition(a.matrixWorld), m.uniform3f(l.cameraPosition, ea.x, ea.y, ea.z)), (d instanceof THREE.MeshPhongMaterial || d instanceof THREE.MeshLambertMaterial || d instanceof
			THREE.ShaderMaterial || d.skinning) && null !== l.viewMatrix && m.uniformMatrix4fv(l.viewMatrix, !1, a.matrixWorldInverse.elements);
		d.skinning && (e.bindMatrix && null !== l.bindMatrix && m.uniformMatrix4fv(l.bindMatrix, !1, e.bindMatrix.elements), e.bindMatrixInverse && null !== l.bindMatrixInverse && m.uniformMatrix4fv(l.bindMatrixInverse, !1, e.bindMatrixInverse.elements), Ob && e.skeleton && e.skeleton.useVertexTexture ? (null !== l.boneTexture && (f = K(), m.uniform1i(l.boneTexture, f), G.setTexture(e.skeleton.boneTexture, f)), null !== l.boneTextureWidth &&
			m.uniform1i(l.boneTextureWidth, e.skeleton.boneTextureWidth), null !== l.boneTextureHeight && m.uniform1i(l.boneTextureHeight, e.skeleton.boneTextureHeight)) : e.skeleton && e.skeleton.boneMatrices && null !== l.boneGlobalMatrices && m.uniformMatrix4fv(l.boneGlobalMatrices, !1, e.skeleton.boneMatrices));
		if (g) {
			c && d.fog && (n.fogColor.value = c.color, c instanceof THREE.Fog ? (n.fogNear.value = c.near, n.fogFar.value = c.far) : c instanceof THREE.FogExp2 && (n.fogDensity.value = c.density));
			if (d instanceof THREE.MeshPhongMaterial || d instanceof
				THREE.MeshLambertMaterial || d.lights) {
				if (fb) {
					var h = !0, p, r = f = 0, q = 0, s, t, w, u = Jb, v = u.directional.colors, x = u.directional.positions, D = u.point.colors, A = u.point.positions, z = u.point.distances, C = u.spot.colors, I = u.spot.positions, L = u.spot.distances, N = u.spot.directions, J = u.spot.anglesCos, T = u.spot.exponents, H = u.hemi.skyColors, Q = u.hemi.groundColors, O = u.hemi.positions, R = 0, X = 0, V = 0, $ = 0, za = 0, aa = 0, ya = 0, ca = 0, W = p = 0;
					c = w = W = 0;
					for (g = b.length; c < g; c++)p = b[c], p.onlyShadow || (s = p.color, t = p.intensity, w = p.distance, p instanceof THREE.AmbientLight ?
						p.visible && (G.gammaInput ? (f += s.r * s.r, r += s.g * s.g, q += s.b * s.b) : (f += s.r, r += s.g, q += s.b)) : p instanceof THREE.DirectionalLight ? (za += 1, p.visible && (da.setFromMatrixPosition(p.matrixWorld), ea.setFromMatrixPosition(p.target.matrixWorld), da.sub(ea), da.normalize(), p = 3 * R, x[p] = da.x, x[p + 1] = da.y, x[p + 2] = da.z, G.gammaInput ? ba(v, p, s, t * t) : P(v, p, s, t), R += 1)) : p instanceof THREE.PointLight ? (aa += 1, p.visible && (W = 3 * X, G.gammaInput ? ba(D, W, s, t * t) : P(D, W, s, t), ea.setFromMatrixPosition(p.matrixWorld), A[W] = ea.x, A[W + 1] = ea.y, A[W + 2] = ea.z,
						z[X] = w, X += 1)) : p instanceof THREE.SpotLight ? (ya += 1, p.visible && (W = 3 * V, G.gammaInput ? ba(C, W, s, t * t) : P(C, W, s, t), ea.setFromMatrixPosition(p.matrixWorld), I[W] = ea.x, I[W + 1] = ea.y, I[W + 2] = ea.z, L[V] = w, da.copy(ea), ea.setFromMatrixPosition(p.target.matrixWorld), da.sub(ea), da.normalize(), N[W] = da.x, N[W + 1] = da.y, N[W + 2] = da.z, J[V] = Math.cos(p.angle), T[V] = p.exponent, V += 1)) : p instanceof THREE.HemisphereLight && (ca += 1, p.visible && (da.setFromMatrixPosition(p.matrixWorld), da.normalize(), w = 3 * $, O[w] = da.x, O[w + 1] = da.y, O[w + 2] = da.z,
						s = p.color, p = p.groundColor, G.gammaInput ? (t *= t, ba(H, w, s, t), ba(Q, w, p, t)) : (P(H, w, s, t), P(Q, w, p, t)), $ += 1)));
					c = 3 * R;
					for (g = Math.max(v.length, 3 * za); c < g; c++)v[c] = 0;
					c = 3 * X;
					for (g = Math.max(D.length, 3 * aa); c < g; c++)D[c] = 0;
					c = 3 * V;
					for (g = Math.max(C.length, 3 * ya); c < g; c++)C[c] = 0;
					c = 3 * $;
					for (g = Math.max(H.length, 3 * ca); c < g; c++)H[c] = 0;
					c = 3 * $;
					for (g = Math.max(Q.length, 3 * ca); c < g; c++)Q[c] = 0;
					u.directional.length = R;
					u.point.length = X;
					u.spot.length = V;
					u.hemi.length = $;
					u.ambient[0] = f;
					u.ambient[1] = r;
					u.ambient[2] = q;
					fb = !1
				}
				h ? (h = Jb, n.ambientLightColor.value =
					h.ambient, n.directionalLightColor.value = h.directional.colors, n.directionalLightDirection.value = h.directional.positions, n.pointLightColor.value = h.point.colors, n.pointLightPosition.value = h.point.positions, n.pointLightDistance.value = h.point.distances, n.spotLightColor.value = h.spot.colors, n.spotLightPosition.value = h.spot.positions, n.spotLightDistance.value = h.spot.distances, n.spotLightDirection.value = h.spot.directions, n.spotLightAngleCos.value = h.spot.anglesCos, n.spotLightExponent.value = h.spot.exponents,
					n.hemisphereLightSkyColor.value = h.hemi.skyColors, n.hemisphereLightGroundColor.value = h.hemi.groundColors, n.hemisphereLightDirection.value = h.hemi.positions, y(n, !0)) : y(n, !1)
			}
			if (d instanceof THREE.MeshBasicMaterial || d instanceof THREE.MeshLambertMaterial || d instanceof THREE.MeshPhongMaterial) {
				n.opacity.value = d.opacity;
				G.gammaInput ? n.diffuse.value.copyGammaToLinear(d.color) : n.diffuse.value = d.color;
				n.map.value = d.map;
				n.lightMap.value = d.lightMap;
				n.specularMap.value = d.specularMap;
				n.alphaMap.value = d.alphaMap;
				d.bumpMap && (n.bumpMap.value = d.bumpMap, n.bumpScale.value = d.bumpScale);
				d.normalMap && (n.normalMap.value = d.normalMap, n.normalScale.value.copy(d.normalScale));
				var U;
				d.map ? U = d.map : d.specularMap ? U = d.specularMap : d.normalMap ? U = d.normalMap : d.bumpMap ? U = d.bumpMap : d.alphaMap && (U = d.alphaMap);
				void 0 !== U && (h = U.offset, U = U.repeat, n.offsetRepeat.value.set(h.x, h.y, U.x, U.y));
				n.envMap.value = d.envMap;
				n.flipEnvMap.value = d.envMap instanceof THREE.WebGLRenderTargetCube ? 1 : -1;
				n.reflectivity.value = d.reflectivity;
				n.refractionRatio.value =
					d.refractionRatio;
				n.combine.value = d.combine;
				n.useRefract.value = d.envMap && d.envMap.mapping instanceof THREE.CubeRefractionMapping
			}
			d instanceof THREE.LineBasicMaterial ? (n.diffuse.value = d.color, n.opacity.value = d.opacity) : d instanceof THREE.LineDashedMaterial ? (n.diffuse.value = d.color, n.opacity.value = d.opacity, n.dashSize.value = d.dashSize, n.totalSize.value = d.dashSize + d.gapSize, n.scale.value = d.scale) : d instanceof THREE.PointCloudMaterial ? (n.psColor.value = d.color, n.opacity.value = d.opacity, n.size.value = d.size,
				n.scale.value = S.height / 2, n.map.value = d.map) : d instanceof THREE.MeshPhongMaterial ? (n.shininess.value = d.shininess, G.gammaInput ? (n.ambient.value.copyGammaToLinear(d.ambient), n.emissive.value.copyGammaToLinear(d.emissive), n.specular.value.copyGammaToLinear(d.specular)) : (n.ambient.value = d.ambient, n.emissive.value = d.emissive, n.specular.value = d.specular), d.wrapAround && n.wrapRGB.value.copy(d.wrapRGB)) : d instanceof THREE.MeshLambertMaterial ? (G.gammaInput ? (n.ambient.value.copyGammaToLinear(d.ambient), n.emissive.value.copyGammaToLinear(d.emissive)) :
				(n.ambient.value = d.ambient, n.emissive.value = d.emissive), d.wrapAround && n.wrapRGB.value.copy(d.wrapRGB)) : d instanceof THREE.MeshDepthMaterial ? (n.mNear.value = a.near, n.mFar.value = a.far, n.opacity.value = d.opacity) : d instanceof THREE.MeshNormalMaterial && (n.opacity.value = d.opacity);
			if (e.receiveShadow && !d._shadowPass && n.shadowMatrix)for (U = a = 0, h = b.length; U < h; U++)c = b[U], c.castShadow && (c instanceof THREE.SpotLight || c instanceof THREE.DirectionalLight && !c.shadowCascade) && (n.shadowMap.value[a] = c.shadowMap, n.shadowMapSize.value[a] =
				c.shadowMapSize, n.shadowMatrix.value[a] = c.shadowMatrix, n.shadowDarkness.value[a] = c.shadowDarkness, n.shadowBias.value[a] = c.shadowBias, a++);
			b = d.uniformsList;
			d = 0;
			for (n = b.length; d < n; d++)if (a = b[d][0], !1 !== a.needsUpdate)switch (c = a.type, h = a.value, U = b[d][1], c) {
				case "1i":
					m.uniform1i(U, h);
					break;
				case "1f":
					m.uniform1f(U, h);
					break;
				case "2f":
					m.uniform2f(U, h[0], h[1]);
					break;
				case "3f":
					m.uniform3f(U, h[0], h[1], h[2]);
					break;
				case "4f":
					m.uniform4f(U, h[0], h[1], h[2], h[3]);
					break;
				case "1iv":
					m.uniform1iv(U, h);
					break;
				case "3iv":
					m.uniform3iv(U,
						h);
					break;
				case "1fv":
					m.uniform1fv(U, h);
					break;
				case "2fv":
					m.uniform2fv(U, h);
					break;
				case "3fv":
					m.uniform3fv(U, h);
					break;
				case "4fv":
					m.uniform4fv(U, h);
					break;
				case "Matrix3fv":
					m.uniformMatrix3fv(U, !1, h);
					break;
				case "Matrix4fv":
					m.uniformMatrix4fv(U, !1, h);
					break;
				case "i":
					m.uniform1i(U, h);
					break;
				case "f":
					m.uniform1f(U, h);
					break;
				case "v2":
					m.uniform2f(U, h.x, h.y);
					break;
				case "v3":
					m.uniform3f(U, h.x, h.y, h.z);
					break;
				case "v4":
					m.uniform4f(U, h.x, h.y, h.z, h.w);
					break;
				case "c":
					m.uniform3f(U, h.r, h.g, h.b);
					break;
				case "iv1":
					m.uniform1iv(U,
						h);
					break;
				case "iv":
					m.uniform3iv(U, h);
					break;
				case "fv1":
					m.uniform1fv(U, h);
					break;
				case "fv":
					m.uniform3fv(U, h);
					break;
				case "v2v":
					void 0 === a._array && (a._array = new Float32Array(2 * h.length));
					c = 0;
					for (g = h.length; c < g; c++)f = 2 * c, a._array[f] = h[c].x, a._array[f + 1] = h[c].y;
					m.uniform2fv(U, a._array);
					break;
				case "v3v":
					void 0 === a._array && (a._array = new Float32Array(3 * h.length));
					c = 0;
					for (g = h.length; c < g; c++)f = 3 * c, a._array[f] = h[c].x, a._array[f + 1] = h[c].y, a._array[f + 2] = h[c].z;
					m.uniform3fv(U, a._array);
					break;
				case "v4v":
					void 0 ===
						a._array && (a._array = new Float32Array(4 * h.length));
					c = 0;
					for (g = h.length; c < g; c++)f = 4 * c, a._array[f] = h[c].x, a._array[f + 1] = h[c].y, a._array[f + 2] = h[c].z, a._array[f + 3] = h[c].w;
					m.uniform4fv(U, a._array);
					break;
				case "m3":
					m.uniformMatrix3fv(U, !1, h.elements);
					break;
				case "m3v":
					void 0 === a._array && (a._array = new Float32Array(9 * h.length));
					c = 0;
					for (g = h.length; c < g; c++)h[c].flattenToArrayOffset(a._array, 9 * c);
					m.uniformMatrix3fv(U, !1, a._array);
					break;
				case "m4":
					m.uniformMatrix4fv(U, !1, h.elements);
					break;
				case "m4v":
					void 0 === a._array &&
					(a._array = new Float32Array(16 * h.length));
					c = 0;
					for (g = h.length; c < g; c++)h[c].flattenToArrayOffset(a._array, 16 * c);
					m.uniformMatrix4fv(U, !1, a._array);
					break;
				case "t":
					f = h;
					h = K();
					m.uniform1i(U, h);
					if (!f)continue;
					if (f instanceof THREE.CubeTexture || f.image instanceof Array && 6 === f.image.length) {
						if (a = f, U = h, 6 === a.image.length)if (a.needsUpdate) {
							a.image.__webglTextureCube || (a.addEventListener("dispose", Pb), a.image.__webglTextureCube = m.createTexture(), G.info.memory.textures++);
							m.activeTexture(m.TEXTURE0 + U);
							m.bindTexture(m.TEXTURE_CUBE_MAP,
								a.image.__webglTextureCube);
							m.pixelStorei(m.UNPACK_FLIP_Y_WEBGL, a.flipY);
							U = a instanceof THREE.CompressedTexture;
							h = [];
							for (c = 0; 6 > c; c++)G.autoScaleCubemaps && !U ? (g = h, f = c, r = a.image[c], u = sc, r.width <= u && r.height <= u || (v = Math.max(r.width, r.height), q = Math.floor(r.width * u / v), u = Math.floor(r.height * u / v), v = document.createElement("canvas"), v.width = q, v.height = u, v.getContext("2d").drawImage(r, 0, 0, r.width, r.height, 0, 0, q, u), r = v), g[f] = r) : h[c] = a.image[c];
							c = h[0];
							g = THREE.Math.isPowerOfTwo(c.width) && THREE.Math.isPowerOfTwo(c.height);
							f = B(a.format);
							r = B(a.type);
							E(m.TEXTURE_CUBE_MAP, a, g);
							for (c = 0; 6 > c; c++)if (U)for (u = h[c].mipmaps, v = 0, x = u.length; v < x; v++)q = u[v], a.format !== THREE.RGBAFormat ? m.compressedTexImage2D(m.TEXTURE_CUBE_MAP_POSITIVE_X + c, v, f, q.width, q.height, 0, q.data) : m.texImage2D(m.TEXTURE_CUBE_MAP_POSITIVE_X + c, v, f, q.width, q.height, 0, f, r, q.data); else m.texImage2D(m.TEXTURE_CUBE_MAP_POSITIVE_X + c, 0, f, f, r, h[c]);
							a.generateMipmaps && g && m.generateMipmap(m.TEXTURE_CUBE_MAP);
							a.needsUpdate = !1;
							if (a.onUpdate)a.onUpdate()
						} else m.activeTexture(m.TEXTURE0 +
							U), m.bindTexture(m.TEXTURE_CUBE_MAP, a.image.__webglTextureCube)
					} else f instanceof THREE.WebGLRenderTargetCube ? (a = f, m.activeTexture(m.TEXTURE0 + h), m.bindTexture(m.TEXTURE_CUBE_MAP, a.__webglTexture)) : G.setTexture(f, h);
					break;
				case "tv":
					void 0 === a._array && (a._array = []);
					c = 0;
					for (g = a.value.length; c < g; c++)a._array[c] = K();
					m.uniform1iv(U, a._array);
					c = 0;
					for (g = a.value.length; c < g; c++)f = a.value[c], h = a._array[c], f && G.setTexture(f, h);
					break;
				default:
					console.warn("THREE.WebGLRenderer: Unknown uniform type: " + c)
			}
		}
		m.uniformMatrix4fv(l.modelViewMatrix,
			!1, e._modelViewMatrix.elements);
		l.normalMatrix && m.uniformMatrix3fv(l.normalMatrix, !1, e._normalMatrix.elements);
		null !== l.modelMatrix && m.uniformMatrix4fv(l.modelMatrix, !1, e.matrixWorld.elements);
		return k
	}

	function y(a, b) {
		a.ambientLightColor.needsUpdate = b;
		a.directionalLightColor.needsUpdate = b;
		a.directionalLightDirection.needsUpdate = b;
		a.pointLightColor.needsUpdate = b;
		a.pointLightPosition.needsUpdate = b;
		a.pointLightDistance.needsUpdate = b;
		a.spotLightColor.needsUpdate = b;
		a.spotLightPosition.needsUpdate = b;
		a.spotLightDistance.needsUpdate =
			b;
		a.spotLightDirection.needsUpdate = b;
		a.spotLightAngleCos.needsUpdate = b;
		a.spotLightExponent.needsUpdate = b;
		a.hemisphereLightSkyColor.needsUpdate = b;
		a.hemisphereLightGroundColor.needsUpdate = b;
		a.hemisphereLightDirection.needsUpdate = b
	}

	function K() {
		var a = qa;
		a >= Qb && console.warn("WebGLRenderer: trying to use " + a + " texture units while this GPU supports only " + Qb);
		qa += 1;
		return a
	}

	function N(a, b) {
		a._modelViewMatrix.multiplyMatrices(b.matrixWorldInverse, a.matrixWorld);
		a._normalMatrix.getNormalMatrix(a._modelViewMatrix)
	}

	function ba(a, b, c, d) {
		a[b] = c.r * c.r * d;
		a[b + 1] = c.g * c.g * d;
		a[b + 2] = c.b * c.b * d
	}

	function P(a, b, c, d) {
		a[b] = c.r * d;
		a[b + 1] = c.g * d;
		a[b + 2] = c.b * d
	}

	function O(a) {
		a !== xa && (m.lineWidth(a), xa = a)
	}

	function J(a, b, c) {
		Qa !== a && (a ? m.enable(m.POLYGON_OFFSET_FILL) : m.disable(m.POLYGON_OFFSET_FILL), Qa = a);
		!a || cb === b && Ga === c || (m.polygonOffset(b, c), cb = b, Ga = c)
	}

	function E(a, b, c) {
		c ? (m.texParameteri(a, m.TEXTURE_WRAP_S, B(b.wrapS)), m.texParameteri(a, m.TEXTURE_WRAP_T, B(b.wrapT)), m.texParameteri(a, m.TEXTURE_MAG_FILTER, B(b.magFilter)), m.texParameteri(a,
			m.TEXTURE_MIN_FILTER, B(b.minFilter))) : (m.texParameteri(a, m.TEXTURE_WRAP_S, m.CLAMP_TO_EDGE), m.texParameteri(a, m.TEXTURE_WRAP_T, m.CLAMP_TO_EDGE), m.texParameteri(a, m.TEXTURE_MAG_FILTER, R(b.magFilter)), m.texParameteri(a, m.TEXTURE_MIN_FILTER, R(b.minFilter)));
		Ta && b.type !== THREE.FloatType && (1 < b.anisotropy || b.__oldAnisotropy) && (m.texParameterf(a, Ta.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(b.anisotropy, Rb)), b.__oldAnisotropy = b.anisotropy)
	}

	function Q(a, b) {
		m.bindRenderbuffer(m.RENDERBUFFER, a);
		b.depthBuffer && !b.stencilBuffer ?
			(m.renderbufferStorage(m.RENDERBUFFER, m.DEPTH_COMPONENT16, b.width, b.height), m.framebufferRenderbuffer(m.FRAMEBUFFER, m.DEPTH_ATTACHMENT, m.RENDERBUFFER, a)) : b.depthBuffer && b.stencilBuffer ? (m.renderbufferStorage(m.RENDERBUFFER, m.DEPTH_STENCIL, b.width, b.height), m.framebufferRenderbuffer(m.FRAMEBUFFER, m.DEPTH_STENCIL_ATTACHMENT, m.RENDERBUFFER, a)) : m.renderbufferStorage(m.RENDERBUFFER, m.RGBA4, b.width, b.height)
	}

	function L(a) {
		a instanceof THREE.WebGLRenderTargetCube ? (m.bindTexture(m.TEXTURE_CUBE_MAP, a.__webglTexture),
			m.generateMipmap(m.TEXTURE_CUBE_MAP), m.bindTexture(m.TEXTURE_CUBE_MAP, null)) : (m.bindTexture(m.TEXTURE_2D, a.__webglTexture), m.generateMipmap(m.TEXTURE_2D), m.bindTexture(m.TEXTURE_2D, null))
	}

	function R(a) {
		return a === THREE.NearestFilter || a === THREE.NearestMipMapNearestFilter || a === THREE.NearestMipMapLinearFilter ? m.NEAREST : m.LINEAR
	}

	function B(a) {
		if (a === THREE.RepeatWrapping)return m.REPEAT;
		if (a === THREE.ClampToEdgeWrapping)return m.CLAMP_TO_EDGE;
		if (a === THREE.MirroredRepeatWrapping)return m.MIRRORED_REPEAT;
		if (a === THREE.NearestFilter)return m.NEAREST;
		if (a === THREE.NearestMipMapNearestFilter)return m.NEAREST_MIPMAP_NEAREST;
		if (a === THREE.NearestMipMapLinearFilter)return m.NEAREST_MIPMAP_LINEAR;
		if (a === THREE.LinearFilter)return m.LINEAR;
		if (a === THREE.LinearMipMapNearestFilter)return m.LINEAR_MIPMAP_NEAREST;
		if (a === THREE.LinearMipMapLinearFilter)return m.LINEAR_MIPMAP_LINEAR;
		if (a === THREE.UnsignedByteType)return m.UNSIGNED_BYTE;
		if (a === THREE.UnsignedShort4444Type)return m.UNSIGNED_SHORT_4_4_4_4;
		if (a === THREE.UnsignedShort5551Type)return m.UNSIGNED_SHORT_5_5_5_1;
		if (a === THREE.UnsignedShort565Type)return m.UNSIGNED_SHORT_5_6_5;
		if (a === THREE.ByteType)return m.BYTE;
		if (a === THREE.ShortType)return m.SHORT;
		if (a === THREE.UnsignedShortType)return m.UNSIGNED_SHORT;
		if (a === THREE.IntType)return m.INT;
		if (a === THREE.UnsignedIntType)return m.UNSIGNED_INT;
		if (a === THREE.FloatType)return m.FLOAT;
		if (a === THREE.AlphaFormat)return m.ALPHA;
		if (a === THREE.RGBFormat)return m.RGB;
		if (a === THREE.RGBAFormat)return m.RGBA;
		if (a === THREE.LuminanceFormat)return m.LUMINANCE;
		if (a === THREE.LuminanceAlphaFormat)return m.LUMINANCE_ALPHA;
		if (a === THREE.AddEquation)return m.FUNC_ADD;
		if (a === THREE.SubtractEquation)return m.FUNC_SUBTRACT;
		if (a === THREE.ReverseSubtractEquation)return m.FUNC_REVERSE_SUBTRACT;
		if (a === THREE.ZeroFactor)return m.ZERO;
		if (a === THREE.OneFactor)return m.ONE;
		if (a === THREE.SrcColorFactor)return m.SRC_COLOR;
		if (a === THREE.OneMinusSrcColorFactor)return m.ONE_MINUS_SRC_COLOR;
		if (a === THREE.SrcAlphaFactor)return m.SRC_ALPHA;
		if (a === THREE.OneMinusSrcAlphaFactor)return m.ONE_MINUS_SRC_ALPHA;
		if (a === THREE.DstAlphaFactor)return m.DST_ALPHA;
		if (a === THREE.OneMinusDstAlphaFactor)return m.ONE_MINUS_DST_ALPHA;
		if (a === THREE.DstColorFactor)return m.DST_COLOR;
		if (a === THREE.OneMinusDstColorFactor)return m.ONE_MINUS_DST_COLOR;
		if (a === THREE.SrcAlphaSaturateFactor)return m.SRC_ALPHA_SATURATE;
		if (void 0 !== Sa) {
			if (a === THREE.RGB_S3TC_DXT1_Format)return Sa.COMPRESSED_RGB_S3TC_DXT1_EXT;
			if (a === THREE.RGBA_S3TC_DXT1_Format)return Sa.COMPRESSED_RGBA_S3TC_DXT1_EXT;
			if (a === THREE.RGBA_S3TC_DXT3_Format)return Sa.COMPRESSED_RGBA_S3TC_DXT3_EXT;
			if (a === THREE.RGBA_S3TC_DXT5_Format)return Sa.COMPRESSED_RGBA_S3TC_DXT5_EXT
		}
		return 0
	}

	console.log("THREE.WebGLRenderer", THREE.REVISION);
	a = a || {};
	var S = void 0 !== a.canvas ? a.canvas : document.createElement("canvas"), V = void 0 !== a.context ? a.context : null, W = void 0 !== a.precision ? a.precision : "highp", H = void 0 !== a.alpha ? a.alpha : !1, oa = void 0 !== a.depth ? a.depth : !0, $ = void 0 !== a.stencil ? a.stencil : !0, X = void 0 !== a.antialias ? a.antialias : !1, T = void 0 !== a.premultipliedAlpha ? a.premultipliedAlpha : !0, ya = void 0 !== a.preserveDrawingBuffer ? a.preserveDrawingBuffer : !1, Ea = void 0 !== a.logarithmicDepthBuffer ? a.logarithmicDepthBuffer :
		!1, Aa = new THREE.Color(0), za = 0, Oa = [], Pa = [];
	this.domElement = S;
	this.context = null;
	this.devicePixelRatio = void 0 !== a.devicePixelRatio ? a.devicePixelRatio : void 0 !== self.devicePixelRatio ? self.devicePixelRatio : 1;
	this.sortObjects = this.autoClearStencil = this.autoClearDepth = this.autoClearColor = this.autoClear = !0;
	this.shadowMapEnabled = this.gammaOutput = this.gammaInput = !1;
	this.shadowMapAutoUpdate = !0;
	this.shadowMapType = THREE.PCFShadowMap;
	this.shadowMapCullFace = THREE.CullFaceFront;
	this.shadowMapCascade = this.shadowMapDebug = !1;
	this.maxMorphTargets = 8;
	this.maxMorphNormals = 4;
	this.autoScaleCubemaps = !0;
	this.renderPluginsPre = [];
	this.renderPluginsPost = [];
	this.info = {memory: {programs: 0, geometries: 0, textures: 0}, render: {calls: 0, vertices: 0, faces: 0, points: 0}};
	var G = this, Ba = [], Ya = null, Za = null, Ca = -1, ca = null, la = null, qa = 0, ua = -1, ja = -1, Fa = -1, va = -1, Ka = -1, aa = -1, ra = -1, Da = -1, Qa = null, cb = null, Ga = null, xa = null, ma = 0, Ja = 0, wb = S.width, sb = S.height, Hb = 0, Ib = 0, pb = new Uint8Array(16), tb = new Uint8Array(16), jc = new THREE.Frustum, Ub = new THREE.Matrix4, kc = new THREE.Matrix4,
		ea = new THREE.Vector3, da = new THREE.Vector3, fb = !0, Jb = {ambient: [0, 0, 0], directional: {length: 0, colors: [], positions: []}, point: {length: 0, colors: [], positions: [], distances: []}, spot: {length: 0, colors: [], positions: [], distances: [], directions: [], anglesCos: [], exponents: []}, hemi: {length: 0, skyColors: [], groundColors: [], positions: []}}, m, Db, xb, Ta, Sa, Eb;
	(function () {
		try {
			var a = {alpha: H, depth: oa, stencil: $, antialias: X, premultipliedAlpha: T, preserveDrawingBuffer: ya};
			m = V || S.getContext("webgl", a) || S.getContext("experimental-webgl",
				a);
			if (null === m)throw"Error creating WebGL context.";
		} catch (b) {
			console.error(b)
		}
		Db = m.getExtension("OES_texture_float");
		m.getExtension("OES_texture_float_linear");
		xb = m.getExtension("OES_standard_derivatives");
		Ta = m.getExtension("EXT_texture_filter_anisotropic") || m.getExtension("MOZ_EXT_texture_filter_anisotropic") || m.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
		Sa = m.getExtension("WEBGL_compressed_texture_s3tc") || m.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || m.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
		Eb = m.getExtension("OES_element_index_uint");
		null === Db && console.log("THREE.WebGLRenderer: Float textures not supported.");
		null === xb && console.log("THREE.WebGLRenderer: Standard derivatives not supported.");
		null === Ta && console.log("THREE.WebGLRenderer: Anisotropic texture filtering not supported.");
		null === Sa && console.log("THREE.WebGLRenderer: S3TC compressed textures not supported.");
		null === Eb && console.log("THREE.WebGLRenderer: elementindex as unsigned integer not supported.");
		void 0 === m.getShaderPrecisionFormat &&
		(m.getShaderPrecisionFormat = function () {
			return{rangeMin: 1, rangeMax: 1, precision: 1}
		});
		Ea && m.getExtension("EXT_frag_depth")
	})();
	m.clearColor(0, 0, 0, 1);
	m.clearDepth(1);
	m.clearStencil(0);
	m.enable(m.DEPTH_TEST);
	m.depthFunc(m.LEQUAL);
	m.frontFace(m.CCW);
	m.cullFace(m.BACK);
	m.enable(m.CULL_FACE);
	m.enable(m.BLEND);
	m.blendEquation(m.FUNC_ADD);
	m.blendFunc(m.SRC_ALPHA, m.ONE_MINUS_SRC_ALPHA);
	m.viewport(ma, Ja, wb, sb);
	m.clearColor(Aa.r, Aa.g, Aa.b, za);
	this.context = m;
	var Qb = m.getParameter(m.MAX_TEXTURE_IMAGE_UNITS), tc =
		m.getParameter(m.MAX_VERTEX_TEXTURE_IMAGE_UNITS);
	m.getParameter(m.MAX_TEXTURE_SIZE);
	var sc = m.getParameter(m.MAX_CUBE_MAP_TEXTURE_SIZE), Rb = Ta ? m.getParameter(Ta.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0, Sb = 0 < tc, Ob = Sb && Db;
	Sa && m.getParameter(m.COMPRESSED_TEXTURE_FORMATS);
	var zc = m.getShaderPrecisionFormat(m.VERTEX_SHADER, m.HIGH_FLOAT), Ac = m.getShaderPrecisionFormat(m.VERTEX_SHADER, m.MEDIUM_FLOAT);
	m.getShaderPrecisionFormat(m.VERTEX_SHADER, m.LOW_FLOAT);
	var Bc = m.getShaderPrecisionFormat(m.FRAGMENT_SHADER, m.HIGH_FLOAT),
		Cc = m.getShaderPrecisionFormat(m.FRAGMENT_SHADER, m.MEDIUM_FLOAT);
	m.getShaderPrecisionFormat(m.FRAGMENT_SHADER, m.LOW_FLOAT);
	var Dc = 0 < zc.precision && 0 < Bc.precision, ec = 0 < Ac.precision && 0 < Cc.precision;
	"highp" !== W || Dc || (ec ? (W = "mediump", console.warn("THREE.WebGLRenderer: highp not supported, using mediump.")) : (W = "lowp", console.warn("THREE.WebGLRenderer: highp and mediump not supported, using lowp.")));
	"mediump" !== W || ec || (W = "lowp", console.warn("THREE.WebGLRenderer: mediump not supported, using lowp."));
	this.getContext =
		function () {
			return m
		};
	this.supportsVertexTextures = function () {
		return Sb
	};
	this.supportsFloatTextures = function () {
		return Db
	};
	this.supportsStandardDerivatives = function () {
		return xb
	};
	this.supportsCompressedTextureS3TC = function () {
		return Sa
	};
	this.getMaxAnisotropy = function () {
		return Rb
	};
	this.getPrecision = function () {
		return W
	};
	this.setSize = function (a, b, c) {
		S.width = a * this.devicePixelRatio;
		S.height = b * this.devicePixelRatio;
		!1 !== c && (S.style.width = a + "px", S.style.height = b + "px");
		this.setViewport(0, 0, a, b)
	};
	this.setViewport =
		function (a, b, c, d) {
			ma = a * this.devicePixelRatio;
			Ja = b * this.devicePixelRatio;
			wb = c * this.devicePixelRatio;
			sb = d * this.devicePixelRatio;
			m.viewport(ma, Ja, wb, sb)
		};
	this.setScissor = function (a, b, c, d) {
		m.scissor(a * this.devicePixelRatio, b * this.devicePixelRatio, c * this.devicePixelRatio, d * this.devicePixelRatio)
	};
	this.enableScissorTest = function (a) {
		a ? m.enable(m.SCISSOR_TEST) : m.disable(m.SCISSOR_TEST)
	};
	this.setClearColor = function (a, b) {
		Aa.set(a);
		za = void 0 !== b ? b : 1;
		m.clearColor(Aa.r, Aa.g, Aa.b, za)
	};
	this.setClearColorHex = function (a, b) {
		console.warn("THREE.WebGLRenderer: .setClearColorHex() is being removed. Use .setClearColor() instead.");
		this.setClearColor(a, b)
	};
	this.getClearColor = function () {
		return Aa
	};
	this.getClearAlpha = function () {
		return za
	};
	this.clear = function (a, b, c) {
		var d = 0;
		if (void 0 === a || a)d |= m.COLOR_BUFFER_BIT;
		if (void 0 === b || b)d |= m.DEPTH_BUFFER_BIT;
		if (void 0 === c || c)d |= m.STENCIL_BUFFER_BIT;
		m.clear(d)
	};
	this.clearColor = function () {
		m.clear(m.COLOR_BUFFER_BIT)
	};
	this.clearDepth = function () {
		m.clear(m.DEPTH_BUFFER_BIT)
	};
	this.clearStencil =
		function () {
			m.clear(m.STENCIL_BUFFER_BIT)
		};
	this.clearTarget = function (a, b, c, d) {
		this.setRenderTarget(a);
		this.clear(b, c, d)
	};
	this.addPostPlugin = function (a) {
		a.init(this);
		this.renderPluginsPost.push(a)
	};
	this.addPrePlugin = function (a) {
		a.init(this);
		this.renderPluginsPre.push(a)
	};
	this.updateShadowMap = function (a, b) {
		Ya = null;
		Ca = ca = Da = ra = Fa = -1;
		fb = !0;
		ja = ua = -1;
		fc(a);
		this.shadowMapPlugin.update(a, b)
	};
	var gc = function (a) {
		a = a.target;
		a.removeEventListener("dispose", gc);
		a.__webglInit = void 0;
		if (a instanceof THREE.BufferGeometry) {
			a =
				a.attributes;
			for (var b in a)void 0 !== a[b].buffer && m.deleteBuffer(a[b].buffer);
			G.info.memory.geometries--
		} else if (void 0 !== a.geometryGroups) {
			b = 0;
			for (var c = a.geometryGroupsList.length; b < c; b++) {
				var d = a.geometryGroupsList[b];
				if (void 0 !== d.numMorphTargets)for (var e = 0, f = d.numMorphTargets; e < f; e++)m.deleteBuffer(d.__webglMorphTargetsBuffers[e]);
				if (void 0 !== d.numMorphNormals)for (e = 0, f = d.numMorphNormals; e < f; e++)m.deleteBuffer(d.__webglMorphNormalsBuffers[e]);
				Tb(d)
			}
		} else Tb(a)
	}, Pb = function (a) {
		a = a.target;
		a.removeEventListener("dispose",
			Pb);
		a.image && a.image.__webglTextureCube ? m.deleteTexture(a.image.__webglTextureCube) : a.__webglInit && (a.__webglInit = !1, m.deleteTexture(a.__webglTexture));
		G.info.memory.textures--
	}, hc = function (a) {
		a = a.target;
		a.removeEventListener("dispose", hc);
		if (a && a.__webglTexture)if (m.deleteTexture(a.__webglTexture), a instanceof THREE.WebGLRenderTargetCube)for (var b = 0; 6 > b; b++)m.deleteFramebuffer(a.__webglFramebuffer[b]), m.deleteRenderbuffer(a.__webglRenderbuffer[b]); else m.deleteFramebuffer(a.__webglFramebuffer), m.deleteRenderbuffer(a.__webglRenderbuffer);
		G.info.memory.textures--
	}, ic = function (a) {
		a = a.target;
		a.removeEventListener("dispose", ic);
		Nb(a)
	}, Tb = function (a) {
		void 0 !== a.__webglVertexBuffer && m.deleteBuffer(a.__webglVertexBuffer);
		void 0 !== a.__webglNormalBuffer && m.deleteBuffer(a.__webglNormalBuffer);
		void 0 !== a.__webglTangentBuffer && m.deleteBuffer(a.__webglTangentBuffer);
		void 0 !== a.__webglColorBuffer && m.deleteBuffer(a.__webglColorBuffer);
		void 0 !== a.__webglUVBuffer && m.deleteBuffer(a.__webglUVBuffer);
		void 0 !== a.__webglUV2Buffer && m.deleteBuffer(a.__webglUV2Buffer);
		void 0 !== a.__webglSkinIndicesBuffer && m.deleteBuffer(a.__webglSkinIndicesBuffer);
		void 0 !== a.__webglSkinWeightsBuffer && m.deleteBuffer(a.__webglSkinWeightsBuffer);
		void 0 !== a.__webglFaceBuffer && m.deleteBuffer(a.__webglFaceBuffer);
		void 0 !== a.__webglLineBuffer && m.deleteBuffer(a.__webglLineBuffer);
		void 0 !== a.__webglLineDistanceBuffer && m.deleteBuffer(a.__webglLineDistanceBuffer);
		if (void 0 !== a.__webglCustomAttributesList)for (var b in a.__webglCustomAttributesList)m.deleteBuffer(a.__webglCustomAttributesList[b].buffer);
		G.info.memory.geometries--
	}, Nb = function (a) {
		var b = a.program.program;
		if (void 0 !== b) {
			a.program = void 0;
			var c, d, e = !1;
			a = 0;
			for (c = Ba.length; a < c; a++)if (d = Ba[a], d.program === b) {
				d.usedTimes--;
				0 === d.usedTimes && (e = !0);
				break
			}
			if (!0 === e) {
				e = [];
				a = 0;
				for (c = Ba.length; a < c; a++)d = Ba[a], d.program !== b && e.push(d);
				Ba = e;
				m.deleteProgram(b);
				G.info.memory.programs--
			}
		}
	};
	this.renderBufferImmediate = function (a, b, c) {
		k();
		a.hasPositions && !a.__webglVertexBuffer && (a.__webglVertexBuffer = m.createBuffer());
		a.hasNormals && !a.__webglNormalBuffer &&
		(a.__webglNormalBuffer = m.createBuffer());
		a.hasUvs && !a.__webglUvBuffer && (a.__webglUvBuffer = m.createBuffer());
		a.hasColors && !a.__webglColorBuffer && (a.__webglColorBuffer = m.createBuffer());
		a.hasPositions && (m.bindBuffer(m.ARRAY_BUFFER, a.__webglVertexBuffer), m.bufferData(m.ARRAY_BUFFER, a.positionArray, m.DYNAMIC_DRAW), l(b.attributes.position), m.vertexAttribPointer(b.attributes.position, 3, m.FLOAT, !1, 0, 0));
		if (a.hasNormals) {
			m.bindBuffer(m.ARRAY_BUFFER, a.__webglNormalBuffer);
			if (c.shading === THREE.FlatShading) {
				var d,
					e, f, g, h, p, r, q, s, t, u, w = 3 * a.count;
				for (u = 0; u < w; u += 9)t = a.normalArray, d = t[u], e = t[u + 1], f = t[u + 2], g = t[u + 3], p = t[u + 4], q = t[u + 5], h = t[u + 6], r = t[u + 7], s = t[u + 8], d = (d + g + h) / 3, e = (e + p + r) / 3, f = (f + q + s) / 3, t[u] = d, t[u + 1] = e, t[u + 2] = f, t[u + 3] = d, t[u + 4] = e, t[u + 5] = f, t[u + 6] = d, t[u + 7] = e, t[u + 8] = f
			}
			m.bufferData(m.ARRAY_BUFFER, a.normalArray, m.DYNAMIC_DRAW);
			l(b.attributes.normal);
			m.vertexAttribPointer(b.attributes.normal, 3, m.FLOAT, !1, 0, 0)
		}
		a.hasUvs && c.map && (m.bindBuffer(m.ARRAY_BUFFER, a.__webglUvBuffer), m.bufferData(m.ARRAY_BUFFER, a.uvArray,
			m.DYNAMIC_DRAW), l(b.attributes.uv), m.vertexAttribPointer(b.attributes.uv, 2, m.FLOAT, !1, 0, 0));
		a.hasColors && c.vertexColors !== THREE.NoColors && (m.bindBuffer(m.ARRAY_BUFFER, a.__webglColorBuffer), m.bufferData(m.ARRAY_BUFFER, a.colorArray, m.DYNAMIC_DRAW), l(b.attributes.color), m.vertexAttribPointer(b.attributes.color, 3, m.FLOAT, !1, 0, 0));
		n();
		m.drawArrays(m.TRIANGLES, 0, a.count);
		a.count = 0
	};
	this.renderBufferDirect = function (a, b, c, d, e, f) {
		if (!1 !== d.visible) {
			var g = z(a, b, c, d, f);
			a = g.attributes;
			b = e.attributes;
			c = !1;
			g = 16777215 *
				e.id + 2 * g.id + (d.wireframe ? 1 : 0);
			g !== ca && (ca = g, c = !0);
			c && k();
			if (f instanceof THREE.Mesh)if (g = b.index) {
				var l, n;
				g.array instanceof Uint32Array ? (l = m.UNSIGNED_INT, n = 4) : (l = m.UNSIGNED_SHORT, n = 2);
				e = e.offsets;
				if (0 === e.length)c && (h(d, a, b, 0), m.bindBuffer(m.ELEMENT_ARRAY_BUFFER, g.buffer)), m.drawElements(m.TRIANGLES, g.array.length, l, 0), G.info.render.calls++, G.info.render.vertices += g.array.length, G.info.render.faces += g.array.length / 3; else {
					c = !0;
					for (var p = 0, r = e.length; p < r; p++) {
						var q = e[p].index;
						c && (h(d, a, b, q), m.bindBuffer(m.ELEMENT_ARRAY_BUFFER,
							g.buffer));
						m.drawElements(m.TRIANGLES, e[p].count, l, e[p].start * n);
						G.info.render.calls++;
						G.info.render.vertices += e[p].count;
						G.info.render.faces += e[p].count / 3
					}
				}
			} else c && h(d, a, b, 0), d = e.attributes.position, m.drawArrays(m.TRIANGLES, 0, d.array.length / 3), G.info.render.calls++, G.info.render.vertices += d.array.length / 3, G.info.render.faces += d.array.length / 9; else if (f instanceof THREE.PointCloud)c && h(d, a, b, 0), d = b.position, m.drawArrays(m.POINTS, 0, d.array.length / 3), G.info.render.calls++, G.info.render.points += d.array.length /
				3; else if (f instanceof THREE.Line)if (f = f.type === THREE.LineStrip ? m.LINE_STRIP : m.LINES, O(d.linewidth), g = b.index)if (g.array instanceof Uint32Array ? (l = m.UNSIGNED_INT, n = 4) : (l = m.UNSIGNED_SHORT, n = 2), e = e.offsets, 0 === e.length)c && (h(d, a, b, 0), m.bindBuffer(m.ELEMENT_ARRAY_BUFFER, g.buffer)), m.drawElements(f, g.array.length, l, 0), G.info.render.calls++, G.info.render.vertices += g.array.length; else for (1 < e.length && (c = !0), p = 0, r = e.length; p < r; p++)q = e[p].index, c && (h(d, a, b, q), m.bindBuffer(m.ELEMENT_ARRAY_BUFFER, g.buffer)),
				m.drawElements(f, e[p].count, l, e[p].start * n), G.info.render.calls++, G.info.render.vertices += e[p].count; else c && h(d, a, b, 0), d = b.position, m.drawArrays(f, 0, d.array.length / 3), G.info.render.calls++, G.info.render.points += d.array.length / 3
		}
	};
	this.renderBuffer = function (a, b, c, d, e, f) {
		if (!1 !== d.visible) {
			var g, h;
			c = z(a, b, c, d, f);
			b = c.attributes;
			a = !1;
			c = 16777215 * e.id + 2 * c.id + (d.wireframe ? 1 : 0);
			c !== ca && (ca = c, a = !0);
			a && k();
			if (!d.morphTargets && 0 <= b.position)a && (m.bindBuffer(m.ARRAY_BUFFER, e.__webglVertexBuffer), l(b.position),
				m.vertexAttribPointer(b.position, 3, m.FLOAT, !1, 0, 0)); else if (f.morphTargetBase) {
				c = d.program.attributes;
				-1 !== f.morphTargetBase && 0 <= c.position ? (m.bindBuffer(m.ARRAY_BUFFER, e.__webglMorphTargetsBuffers[f.morphTargetBase]), l(c.position), m.vertexAttribPointer(c.position, 3, m.FLOAT, !1, 0, 0)) : 0 <= c.position && (m.bindBuffer(m.ARRAY_BUFFER, e.__webglVertexBuffer), l(c.position), m.vertexAttribPointer(c.position, 3, m.FLOAT, !1, 0, 0));
				if (f.morphTargetForcedOrder.length) {
					var p = 0;
					h = f.morphTargetForcedOrder;
					for (g = f.morphTargetInfluences; p <
						d.numSupportedMorphTargets && p < h.length;)0 <= c["morphTarget" + p] && (m.bindBuffer(m.ARRAY_BUFFER, e.__webglMorphTargetsBuffers[h[p]]), l(c["morphTarget" + p]), m.vertexAttribPointer(c["morphTarget" + p], 3, m.FLOAT, !1, 0, 0)), 0 <= c["morphNormal" + p] && d.morphNormals && (m.bindBuffer(m.ARRAY_BUFFER, e.__webglMorphNormalsBuffers[h[p]]), l(c["morphNormal" + p]), m.vertexAttribPointer(c["morphNormal" + p], 3, m.FLOAT, !1, 0, 0)), f.__webglMorphTargetInfluences[p] = g[h[p]], p++
				} else {
					h = [];
					g = f.morphTargetInfluences;
					var r, q = g.length;
					for (r =
							 0; r < q; r++)p = g[r], 0 < p && h.push([p, r]);
					h.length > d.numSupportedMorphTargets ? (h.sort(t), h.length = d.numSupportedMorphTargets) : h.length > d.numSupportedMorphNormals ? h.sort(t) : 0 === h.length && h.push([0, 0]);
					for (p = 0; p < d.numSupportedMorphTargets;)h[p] ? (r = h[p][1], 0 <= c["morphTarget" + p] && (m.bindBuffer(m.ARRAY_BUFFER, e.__webglMorphTargetsBuffers[r]), l(c["morphTarget" + p]), m.vertexAttribPointer(c["morphTarget" + p], 3, m.FLOAT, !1, 0, 0)), 0 <= c["morphNormal" + p] && d.morphNormals && (m.bindBuffer(m.ARRAY_BUFFER, e.__webglMorphNormalsBuffers[r]),
						l(c["morphNormal" + p]), m.vertexAttribPointer(c["morphNormal" + p], 3, m.FLOAT, !1, 0, 0)), f.__webglMorphTargetInfluences[p] = g[r]) : f.__webglMorphTargetInfluences[p] = 0, p++
				}
				null !== d.program.uniforms.morphTargetInfluences && m.uniform1fv(d.program.uniforms.morphTargetInfluences, f.__webglMorphTargetInfluences)
			}
			if (a) {
				if (e.__webglCustomAttributesList)for (g = 0, h = e.__webglCustomAttributesList.length; g < h; g++)c = e.__webglCustomAttributesList[g], 0 <= b[c.buffer.belongsToAttribute] && (m.bindBuffer(m.ARRAY_BUFFER, c.buffer), l(b[c.buffer.belongsToAttribute]),
					m.vertexAttribPointer(b[c.buffer.belongsToAttribute], c.size, m.FLOAT, !1, 0, 0));
				0 <= b.color && (0 < f.geometry.colors.length || 0 < f.geometry.faces.length ? (m.bindBuffer(m.ARRAY_BUFFER, e.__webglColorBuffer), l(b.color), m.vertexAttribPointer(b.color, 3, m.FLOAT, !1, 0, 0)) : d.defaultAttributeValues && m.vertexAttrib3fv(b.color, d.defaultAttributeValues.color));
				0 <= b.normal && (m.bindBuffer(m.ARRAY_BUFFER, e.__webglNormalBuffer), l(b.normal), m.vertexAttribPointer(b.normal, 3, m.FLOAT, !1, 0, 0));
				0 <= b.tangent && (m.bindBuffer(m.ARRAY_BUFFER,
					e.__webglTangentBuffer), l(b.tangent), m.vertexAttribPointer(b.tangent, 4, m.FLOAT, !1, 0, 0));
				0 <= b.uv && (f.geometry.faceVertexUvs[0] ? (m.bindBuffer(m.ARRAY_BUFFER, e.__webglUVBuffer), l(b.uv), m.vertexAttribPointer(b.uv, 2, m.FLOAT, !1, 0, 0)) : d.defaultAttributeValues && m.vertexAttrib2fv(b.uv, d.defaultAttributeValues.uv));
				0 <= b.uv2 && (f.geometry.faceVertexUvs[1] ? (m.bindBuffer(m.ARRAY_BUFFER, e.__webglUV2Buffer), l(b.uv2), m.vertexAttribPointer(b.uv2, 2, m.FLOAT, !1, 0, 0)) : d.defaultAttributeValues && m.vertexAttrib2fv(b.uv2,
					d.defaultAttributeValues.uv2));
				d.skinning && 0 <= b.skinIndex && 0 <= b.skinWeight && (m.bindBuffer(m.ARRAY_BUFFER, e.__webglSkinIndicesBuffer), l(b.skinIndex), m.vertexAttribPointer(b.skinIndex, 4, m.FLOAT, !1, 0, 0), m.bindBuffer(m.ARRAY_BUFFER, e.__webglSkinWeightsBuffer), l(b.skinWeight), m.vertexAttribPointer(b.skinWeight, 4, m.FLOAT, !1, 0, 0));
				0 <= b.lineDistance && (m.bindBuffer(m.ARRAY_BUFFER, e.__webglLineDistanceBuffer), l(b.lineDistance), m.vertexAttribPointer(b.lineDistance, 1, m.FLOAT, !1, 0, 0))
			}
			n();
			f instanceof THREE.Mesh ?
				(f = e.__typeArray === Uint32Array ? m.UNSIGNED_INT : m.UNSIGNED_SHORT, d.wireframe ? (O(d.wireframeLinewidth), a && m.bindBuffer(m.ELEMENT_ARRAY_BUFFER, e.__webglLineBuffer), m.drawElements(m.LINES, e.__webglLineCount, f, 0)) : (a && m.bindBuffer(m.ELEMENT_ARRAY_BUFFER, e.__webglFaceBuffer), m.drawElements(m.TRIANGLES, e.__webglFaceCount, f, 0)), G.info.render.calls++, G.info.render.vertices += e.__webglFaceCount, G.info.render.faces += e.__webglFaceCount / 3) : f instanceof THREE.Line ? (f = f.type === THREE.LineStrip ? m.LINE_STRIP : m.LINES,
				O(d.linewidth), m.drawArrays(f, 0, e.__webglLineCount), G.info.render.calls++) : f instanceof THREE.PointCloud && (m.drawArrays(m.POINTS, 0, e.__webglParticleCount), G.info.render.calls++, G.info.render.points += e.__webglParticleCount)
		}
	};
	this.render = function (a, b, c, d) {
		function e(a) {
			a instanceof THREE.SkinnedMesh && a.skeleton.update();
			for (var b = 0, c = a.children.length; b < c; b++)e(a.children[b])
		}

		if (!1 === b instanceof THREE.Camera)console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera."); else {
			var f,
				g, h, k, m = a.__lights, l = a.fog;
			Ca = -1;
			la = null;
			fb = !0;
			!0 === a.autoUpdate && a.updateMatrixWorld();
			void 0 === b.parent && b.updateMatrixWorld();
			e(a);
			b.matrixWorldInverse.getInverse(b.matrixWorld);
			Ub.multiplyMatrices(b.projectionMatrix, b.matrixWorldInverse);
			jc.setFromMatrix(Ub);
			fc(a);
			Oa.length = 0;
			Pa.length = 0;
			s(a, a, b);
			!0 === G.sortObjects && (Oa.sort(q), Pa.sort(r));
			p(this.renderPluginsPre, a, b);
			G.info.render.calls = 0;
			G.info.render.vertices = 0;
			G.info.render.faces = 0;
			G.info.render.points = 0;
			this.setRenderTarget(c);
			(this.autoClear ||
				d) && this.clear(this.autoClearColor, this.autoClearDepth, this.autoClearStencil);
			k = a.__webglObjectsImmediate;
			d = 0;
			for (f = k.length; d < f; d++)g = k[d], h = g.object, h.visible && (N(h, b), u(g));
			a.overrideMaterial ? (d = a.overrideMaterial, this.setBlending(d.blending, d.blendEquation, d.blendSrc, d.blendDst), this.setDepthTest(d.depthTest), this.setDepthWrite(d.depthWrite), J(d.polygonOffset, d.polygonOffsetFactor, d.polygonOffsetUnits), v(Oa, b, m, l, !0, d), v(Pa, b, m, l, !0, d), w(a.__webglObjectsImmediate, "", b, m, l, !1, d)) : (d = null, this.setBlending(THREE.NoBlending),
				v(Oa, b, m, l, !1, d), w(a.__webglObjectsImmediate, "opaque", b, m, l, !1, d), v(Pa, b, m, l, !0, d), w(a.__webglObjectsImmediate, "transparent", b, m, l, !0, d));
			p(this.renderPluginsPost, a, b);
			c && c.generateMipmaps && c.minFilter !== THREE.NearestFilter && c.minFilter !== THREE.LinearFilter && L(c);
			this.setDepthTest(!0);
			this.setDepthWrite(!0)
		}
	};
	this.renderImmediateObject = function (a, b, c, d, e) {
		var f = z(a, b, c, d, e);
		ca = -1;
		G.setMaterialFaces(d);
		e.immediateRenderCallback ? e.immediateRenderCallback(f, m, jc) : e.render(function (a) {
			G.renderBufferImmediate(a,
				f, d)
		})
	};
	var fc = function (a) {
		a.__webglObjects || (a.__webglObjects = {}, a.__webglObjectsImmediate = []);
		for (; a.__objectsAdded.length;) {
			var c = a.__objectsAdded[0], d = a, e = void 0, f = void 0;
			void 0 === c.__webglInit && (c.__webglInit = !0, c._modelViewMatrix = new THREE.Matrix4, c._normalMatrix = new THREE.Matrix3);
			e = c.geometry;
			if (void 0 !== e && void 0 === e.__webglInit)if (e.__webglInit = !0, e.addEventListener("dispose", gc), e instanceof THREE.BufferGeometry)g(e); else if (c instanceof THREE.Mesh)void 0 !== c.__webglActive && I(c, d), D(d,
				c, e); else if (c instanceof THREE.Line) {
				if (!e.__webglVertexBuffer) {
					f = e;
					f.__webglVertexBuffer = m.createBuffer();
					f.__webglColorBuffer = m.createBuffer();
					f.__webglLineDistanceBuffer = m.createBuffer();
					G.info.memory.geometries++;
					var f = e, h = c, k = f.vertices.length;
					f.__vertexArray = new Float32Array(3 * k);
					f.__colorArray = new Float32Array(3 * k);
					f.__lineDistanceArray = new Float32Array(1 * k);
					f.__webglLineCount = k;
					b(f, h);
					e.verticesNeedUpdate = !0;
					e.colorsNeedUpdate = !0;
					e.lineDistancesNeedUpdate = !0
				}
			} else c instanceof THREE.PointCloud && !e.__webglVertexBuffer && (f = e, f.__webglVertexBuffer = m.createBuffer(), f.__webglColorBuffer = m.createBuffer(), G.info.memory.geometries++, f = e, h = c, k = f.vertices.length, f.__vertexArray = new Float32Array(3 * k), f.__colorArray = new Float32Array(3 * k), f.__sortArray = [], f.__webglParticleCount = k, b(f, h), e.verticesNeedUpdate = !0, e.colorsNeedUpdate = !0);
			if (void 0 === c.__webglActive) {
				if (c instanceof THREE.Mesh)if (e = c.geometry, e instanceof THREE.BufferGeometry)A(d.__webglObjects, e, c); else {
					if (e instanceof THREE.Geometry)for (h =
															 0, k = e.geometryGroupsList.length; h < k; h++)f = e.geometryGroupsList[h], A(d.__webglObjects, f, c)
				} else c instanceof THREE.Line || c instanceof THREE.PointCloud ? (e = c.geometry, A(d.__webglObjects, e, c)) : (c instanceof THREE.ImmediateRenderObject || c.immediateRenderCallback) && d.__webglObjectsImmediate.push({id: null, object: c, opaque: null, transparent: null, z: 0});
				c.__webglActive = !0
			}
			a.__objectsAdded.splice(0, 1)
		}
		for (; a.__objectsRemoved.length;)I(a.__objectsRemoved[0], a), a.__objectsRemoved.splice(0, 1)
	};
	this.initMaterial =
		function (a, b, c, d) {
			var e, f, g, h;
			a.addEventListener("dispose", ic);
			var k, l, n, p;
			a instanceof THREE.MeshDepthMaterial ? p = "depth" : a instanceof THREE.MeshNormalMaterial ? p = "normal" : a instanceof THREE.MeshBasicMaterial ? p = "basic" : a instanceof THREE.MeshLambertMaterial ? p = "lambert" : a instanceof THREE.MeshPhongMaterial ? p = "phong" : a instanceof THREE.LineBasicMaterial ? p = "basic" : a instanceof THREE.LineDashedMaterial ? p = "dashed" : a instanceof THREE.PointCloudMaterial && (p = "particle_basic");
			p ? (e = THREE.ShaderLib[p], a.__webglShader =
			{uniforms: THREE.UniformsUtils.clone(e.uniforms), vertexShader: e.vertexShader, fragmentShader: e.fragmentShader}) : a.__webglShader = {uniforms: a.uniforms, vertexShader: a.vertexShader, fragmentShader: a.fragmentShader};
			n = h = g = f = e = 0;
			for (var r = b.length; n < r; n++) {
				var q = b[n];
				q.onlyShadow || !1 === q.visible || (q instanceof THREE.DirectionalLight && e++, q instanceof THREE.PointLight && f++, q instanceof THREE.SpotLight && g++, q instanceof THREE.HemisphereLight && h++)
			}
			r = n = 0;
			for (q = b.length; r < q; r++) {
				var s = b[r];
				s.castShadow && (s instanceof
					THREE.SpotLight && n++, s instanceof THREE.DirectionalLight && !s.shadowCascade && n++)
			}
			b = n;
			Ob && d && d.skeleton && d.skeleton.useVertexTexture ? n = 1024 : (n = m.getParameter(m.MAX_VERTEX_UNIFORM_VECTORS), n = Math.floor((n - 20) / 4), void 0 !== d && d instanceof THREE.SkinnedMesh && (n = Math.min(d.skeleton.bones.length, n), n < d.skeleton.bones.length && console.warn("WebGLRenderer: too many bones - " + d.skeleton.bones.length + ", this GPU supports just " + n + " (try OpenGL instead of ANGLE)")));
			c = {precision: W, supportsVertexTextures: Sb, map: !!a.map,
				envMap: !!a.envMap, lightMap: !!a.lightMap, bumpMap: !!a.bumpMap, normalMap: !!a.normalMap, specularMap: !!a.specularMap, alphaMap: !!a.alphaMap, vertexColors: a.vertexColors, fog: c, useFog: a.fog, fogExp: c instanceof THREE.FogExp2, sizeAttenuation: a.sizeAttenuation, logarithmicDepthBuffer: Ea, skinning: a.skinning, maxBones: n, useVertexTexture: Ob && d && d.skeleton && d.skeleton.useVertexTexture, morphTargets: a.morphTargets, morphNormals: a.morphNormals, maxMorphTargets: this.maxMorphTargets, maxMorphNormals: this.maxMorphNormals, maxDirLights: e,
				maxPointLights: f, maxSpotLights: g, maxHemiLights: h, maxShadows: b, shadowMapEnabled: this.shadowMapEnabled && d.receiveShadow && 0 < b, shadowMapType: this.shadowMapType, shadowMapDebug: this.shadowMapDebug, shadowMapCascade: this.shadowMapCascade, alphaTest: a.alphaTest, metal: a.metal, wrapAround: a.wrapAround, doubleSided: a.side === THREE.DoubleSide, flipSided: a.side === THREE.BackSide};
			d = [];
			p ? d.push(p) : (d.push(a.fragmentShader), d.push(a.vertexShader));
			for (var t in a.defines)d.push(t), d.push(a.defines[t]);
			for (l in c)d.push(l),
				d.push(c[l]);
			p = d.join();
			var u;
			l = 0;
			for (t = Ba.length; l < t; l++)if (d = Ba[l], d.code === p) {
				u = d;
				u.usedTimes++;
				break
			}
			void 0 === u && (u = new THREE.WebGLProgram(this, p, a, c), Ba.push(u), G.info.memory.programs = Ba.length);
			a.program = u;
			u = a.program.attributes;
			if (a.morphTargets)for (a.numSupportedMorphTargets = 0, t = "morphTarget", l = 0; l < this.maxMorphTargets; l++)p = t + l, 0 <= u[p] && a.numSupportedMorphTargets++;
			if (a.morphNormals)for (a.numSupportedMorphNormals = 0, t = "morphNormal", l = 0; l < this.maxMorphNormals; l++)p = t + l, 0 <= u[p] && a.numSupportedMorphNormals++;
			a.uniformsList = [];
			for (k in a.__webglShader.uniforms)(l = a.program.uniforms[k]) && a.uniformsList.push([a.__webglShader.uniforms[k], l])
		};
	this.setFaceCulling = function (a, b) {
		a === THREE.CullFaceNone ? m.disable(m.CULL_FACE) : (b === THREE.FrontFaceDirectionCW ? m.frontFace(m.CW) : m.frontFace(m.CCW), a === THREE.CullFaceBack ? m.cullFace(m.BACK) : a === THREE.CullFaceFront ? m.cullFace(m.FRONT) : m.cullFace(m.FRONT_AND_BACK), m.enable(m.CULL_FACE))
	};
	this.setMaterialFaces = function (a) {
		var b = a.side === THREE.DoubleSide;
		a = a.side === THREE.BackSide;
		ua !== b && (b ? m.disable(m.CULL_FACE) : m.enable(m.CULL_FACE), ua = b);
		ja !== a && (a ? m.frontFace(m.CW) : m.frontFace(m.CCW), ja = a)
	};
	this.setDepthTest = function (a) {
		ra !== a && (a ? m.enable(m.DEPTH_TEST) : m.disable(m.DEPTH_TEST), ra = a)
	};
	this.setDepthWrite = function (a) {
		Da !== a && (m.depthMask(a), Da = a)
	};
	this.setBlending = function (a, b, c, d) {
		a !== Fa && (a === THREE.NoBlending ? m.disable(m.BLEND) : a === THREE.AdditiveBlending ? (m.enable(m.BLEND), m.blendEquation(m.FUNC_ADD), m.blendFunc(m.SRC_ALPHA, m.ONE)) : a === THREE.SubtractiveBlending ? (m.enable(m.BLEND),
			m.blendEquation(m.FUNC_ADD), m.blendFunc(m.ZERO, m.ONE_MINUS_SRC_COLOR)) : a === THREE.MultiplyBlending ? (m.enable(m.BLEND), m.blendEquation(m.FUNC_ADD), m.blendFunc(m.ZERO, m.SRC_COLOR)) : a === THREE.CustomBlending ? m.enable(m.BLEND) : (m.enable(m.BLEND), m.blendEquationSeparate(m.FUNC_ADD, m.FUNC_ADD), m.blendFuncSeparate(m.SRC_ALPHA, m.ONE_MINUS_SRC_ALPHA, m.ONE, m.ONE_MINUS_SRC_ALPHA)), Fa = a);
		if (a === THREE.CustomBlending) {
			if (b !== va && (m.blendEquation(B(b)), va = b), c !== Ka || d !== aa)m.blendFunc(B(c), B(d)), Ka = c, aa = d
		} else aa =
			Ka = va = null
	};
	this.setTexture = function (a, b) {
		if (a.needsUpdate) {
			a.__webglInit || (a.__webglInit = !0, a.addEventListener("dispose", Pb), a.__webglTexture = m.createTexture(), G.info.memory.textures++);
			m.activeTexture(m.TEXTURE0 + b);
			m.bindTexture(m.TEXTURE_2D, a.__webglTexture);
			m.pixelStorei(m.UNPACK_FLIP_Y_WEBGL, a.flipY);
			m.pixelStorei(m.UNPACK_PREMULTIPLY_ALPHA_WEBGL, a.premultiplyAlpha);
			m.pixelStorei(m.UNPACK_ALIGNMENT, a.unpackAlignment);
			var c = a.image, d = THREE.Math.isPowerOfTwo(c.width) && THREE.Math.isPowerOfTwo(c.height),
				e = B(a.format), f = B(a.type);
			E(m.TEXTURE_2D, a, d);
			var g = a.mipmaps;
			if (a instanceof THREE.DataTexture)if (0 < g.length && d) {
				for (var h = 0, k = g.length; h < k; h++)c = g[h], m.texImage2D(m.TEXTURE_2D, h, e, c.width, c.height, 0, e, f, c.data);
				a.generateMipmaps = !1
			} else m.texImage2D(m.TEXTURE_2D, 0, e, c.width, c.height, 0, e, f, c.data); else if (a instanceof THREE.CompressedTexture)for (h = 0, k = g.length; h < k; h++)c = g[h], a.format !== THREE.RGBAFormat ? m.compressedTexImage2D(m.TEXTURE_2D, h, e, c.width, c.height, 0, c.data) : m.texImage2D(m.TEXTURE_2D, h,
				e, c.width, c.height, 0, e, f, c.data); else if (0 < g.length && d) {
				h = 0;
				for (k = g.length; h < k; h++)c = g[h], m.texImage2D(m.TEXTURE_2D, h, e, e, f, c);
				a.generateMipmaps = !1
			} else m.texImage2D(m.TEXTURE_2D, 0, e, e, f, a.image);
			a.generateMipmaps && d && m.generateMipmap(m.TEXTURE_2D);
			a.needsUpdate = !1;
			if (a.onUpdate)a.onUpdate()
		} else m.activeTexture(m.TEXTURE0 + b), m.bindTexture(m.TEXTURE_2D, a.__webglTexture)
	};
	this.setRenderTarget = function (a) {
		var b = a instanceof THREE.WebGLRenderTargetCube;
		if (a && !a.__webglFramebuffer) {
			void 0 === a.depthBuffer &&
			(a.depthBuffer = !0);
			void 0 === a.stencilBuffer && (a.stencilBuffer = !0);
			a.addEventListener("dispose", hc);
			a.__webglTexture = m.createTexture();
			G.info.memory.textures++;
			var c = THREE.Math.isPowerOfTwo(a.width) && THREE.Math.isPowerOfTwo(a.height), d = B(a.format), e = B(a.type);
			if (b) {
				a.__webglFramebuffer = [];
				a.__webglRenderbuffer = [];
				m.bindTexture(m.TEXTURE_CUBE_MAP, a.__webglTexture);
				E(m.TEXTURE_CUBE_MAP, a, c);
				for (var f = 0; 6 > f; f++) {
					a.__webglFramebuffer[f] = m.createFramebuffer();
					a.__webglRenderbuffer[f] = m.createRenderbuffer();
					m.texImage2D(m.TEXTURE_CUBE_MAP_POSITIVE_X + f, 0, d, a.width, a.height, 0, d, e, null);
					var g = a, h = m.TEXTURE_CUBE_MAP_POSITIVE_X + f;
					m.bindFramebuffer(m.FRAMEBUFFER, a.__webglFramebuffer[f]);
					m.framebufferTexture2D(m.FRAMEBUFFER, m.COLOR_ATTACHMENT0, h, g.__webglTexture, 0);
					Q(a.__webglRenderbuffer[f], a)
				}
				c && m.generateMipmap(m.TEXTURE_CUBE_MAP)
			} else a.__webglFramebuffer = m.createFramebuffer(), a.__webglRenderbuffer = a.shareDepthFrom ? a.shareDepthFrom.__webglRenderbuffer : m.createRenderbuffer(), m.bindTexture(m.TEXTURE_2D, a.__webglTexture),
				E(m.TEXTURE_2D, a, c), m.texImage2D(m.TEXTURE_2D, 0, d, a.width, a.height, 0, d, e, null), d = m.TEXTURE_2D, m.bindFramebuffer(m.FRAMEBUFFER, a.__webglFramebuffer), m.framebufferTexture2D(m.FRAMEBUFFER, m.COLOR_ATTACHMENT0, d, a.__webglTexture, 0), a.shareDepthFrom ? a.depthBuffer && !a.stencilBuffer ? m.framebufferRenderbuffer(m.FRAMEBUFFER, m.DEPTH_ATTACHMENT, m.RENDERBUFFER, a.__webglRenderbuffer) : a.depthBuffer && a.stencilBuffer && m.framebufferRenderbuffer(m.FRAMEBUFFER, m.DEPTH_STENCIL_ATTACHMENT, m.RENDERBUFFER, a.__webglRenderbuffer) :
				Q(a.__webglRenderbuffer, a), c && m.generateMipmap(m.TEXTURE_2D);
			b ? m.bindTexture(m.TEXTURE_CUBE_MAP, null) : m.bindTexture(m.TEXTURE_2D, null);
			m.bindRenderbuffer(m.RENDERBUFFER, null);
			m.bindFramebuffer(m.FRAMEBUFFER, null)
		}
		a ? (b = b ? a.__webglFramebuffer[a.activeCubeFace] : a.__webglFramebuffer, c = a.width, a = a.height, e = d = 0) : (b = null, c = wb, a = sb, d = ma, e = Ja);
		b !== Za && (m.bindFramebuffer(m.FRAMEBUFFER, b), m.viewport(d, e, c, a), Za = b);
		Hb = c;
		Ib = a
	};
	this.shadowMapPlugin = new THREE.ShadowMapPlugin;
	this.addPrePlugin(this.shadowMapPlugin);
	this.addPostPlugin(new THREE.SpritePlugin);
	this.addPostPlugin(new THREE.LensFlarePlugin)
};
THREE.WebGLRenderTarget = function (a, b, c) {
	this.width = a;
	this.height = b;
	c = c || {};
	this.wrapS = void 0 !== c.wrapS ? c.wrapS : THREE.ClampToEdgeWrapping;
	this.wrapT = void 0 !== c.wrapT ? c.wrapT : THREE.ClampToEdgeWrapping;
	this.magFilter = void 0 !== c.magFilter ? c.magFilter : THREE.LinearFilter;
	this.minFilter = void 0 !== c.minFilter ? c.minFilter : THREE.LinearMipMapLinearFilter;
	this.anisotropy = void 0 !== c.anisotropy ? c.anisotropy : 1;
	this.offset = new THREE.Vector2(0, 0);
	this.repeat = new THREE.Vector2(1, 1);
	this.format = void 0 !== c.format ? c.format :
		THREE.RGBAFormat;
	this.type = void 0 !== c.type ? c.type : THREE.UnsignedByteType;
	this.depthBuffer = void 0 !== c.depthBuffer ? c.depthBuffer : !0;
	this.stencilBuffer = void 0 !== c.stencilBuffer ? c.stencilBuffer : !0;
	this.generateMipmaps = !0;
	this.shareDepthFrom = null
};
THREE.WebGLRenderTarget.prototype = {constructor: THREE.WebGLRenderTarget, setSize: function (a, b) {
	this.width = a;
	this.height = b
}, clone: function () {
	var a = new THREE.WebGLRenderTarget(this.width, this.height);
	a.wrapS = this.wrapS;
	a.wrapT = this.wrapT;
	a.magFilter = this.magFilter;
	a.minFilter = this.minFilter;
	a.anisotropy = this.anisotropy;
	a.offset.copy(this.offset);
	a.repeat.copy(this.repeat);
	a.format = this.format;
	a.type = this.type;
	a.depthBuffer = this.depthBuffer;
	a.stencilBuffer = this.stencilBuffer;
	a.generateMipmaps = this.generateMipmaps;
	a.shareDepthFrom = this.shareDepthFrom;
	return a
}, dispose: function () {
	this.dispatchEvent({type: "dispose"})
}};
THREE.EventDispatcher.prototype.apply(THREE.WebGLRenderTarget.prototype);
THREE.WebGLRenderTargetCube = function (a, b, c) {
	THREE.WebGLRenderTarget.call(this, a, b, c);
	this.activeCubeFace = 0
};
THREE.WebGLRenderTargetCube.prototype = Object.create(THREE.WebGLRenderTarget.prototype);
THREE.WebGLProgram = function () {
	var a = 0;
	return function (b, c, d, e) {
		var f = b.context, g = d.defines, h = d.__webglShader.uniforms, k = d.attributes, l = d.__webglShader.vertexShader, n = d.__webglShader.fragmentShader, q = d.index0AttributeName;
		void 0 === q && !0 === e.morphTargets && (q = "position");
		var r = "SHADOWMAP_TYPE_BASIC";
		e.shadowMapType === THREE.PCFShadowMap ? r = "SHADOWMAP_TYPE_PCF" : e.shadowMapType === THREE.PCFSoftShadowMap && (r = "SHADOWMAP_TYPE_PCF_SOFT");
		var t, s;
		t = [];
		for (var p in g)s = g[p], !1 !== s && (s = "#define " + p + " " + s, t.push(s));
		t = t.join("\n");
		g = f.createProgram();
		d instanceof THREE.RawShaderMaterial ? b = d = "" : (d = ["precision " + e.precision + " float;", "precision " + e.precision + " int;", t, e.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "", b.gammaInput ? "#define GAMMA_INPUT" : "", b.gammaOutput ? "#define GAMMA_OUTPUT" : "", "#define MAX_DIR_LIGHTS " + e.maxDirLights, "#define MAX_POINT_LIGHTS " + e.maxPointLights, "#define MAX_SPOT_LIGHTS " + e.maxSpotLights, "#define MAX_HEMI_LIGHTS " + e.maxHemiLights, "#define MAX_SHADOWS " + e.maxShadows, "#define MAX_BONES " +
			e.maxBones, e.map ? "#define USE_MAP" : "", e.envMap ? "#define USE_ENVMAP" : "", e.lightMap ? "#define USE_LIGHTMAP" : "", e.bumpMap ? "#define USE_BUMPMAP" : "", e.normalMap ? "#define USE_NORMALMAP" : "", e.specularMap ? "#define USE_SPECULARMAP" : "", e.alphaMap ? "#define USE_ALPHAMAP" : "", e.vertexColors ? "#define USE_COLOR" : "", e.skinning ? "#define USE_SKINNING" : "", e.useVertexTexture ? "#define BONE_TEXTURE" : "", e.morphTargets ? "#define USE_MORPHTARGETS" : "", e.morphNormals ? "#define USE_MORPHNORMALS" : "", e.wrapAround ? "#define WRAP_AROUND" :
			"", e.doubleSided ? "#define DOUBLE_SIDED" : "", e.flipSided ? "#define FLIP_SIDED" : "", e.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", e.shadowMapEnabled ? "#define " + r : "", e.shadowMapDebug ? "#define SHADOWMAP_DEBUG" : "", e.shadowMapCascade ? "#define SHADOWMAP_CASCADE" : "", e.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", e.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", "uniform mat4 modelMatrix;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 viewMatrix;\nuniform mat3 normalMatrix;\nuniform vec3 cameraPosition;\nattribute vec3 position;\nattribute vec3 normal;\nattribute vec2 uv;\nattribute vec2 uv2;\n#ifdef USE_COLOR\n\tattribute vec3 color;\n#endif\n#ifdef USE_MORPHTARGETS\n\tattribute vec3 morphTarget0;\n\tattribute vec3 morphTarget1;\n\tattribute vec3 morphTarget2;\n\tattribute vec3 morphTarget3;\n\t#ifdef USE_MORPHNORMALS\n\t\tattribute vec3 morphNormal0;\n\t\tattribute vec3 morphNormal1;\n\t\tattribute vec3 morphNormal2;\n\t\tattribute vec3 morphNormal3;\n\t#else\n\t\tattribute vec3 morphTarget4;\n\t\tattribute vec3 morphTarget5;\n\t\tattribute vec3 morphTarget6;\n\t\tattribute vec3 morphTarget7;\n\t#endif\n#endif\n#ifdef USE_SKINNING\n\tattribute vec4 skinIndex;\n\tattribute vec4 skinWeight;\n#endif\n"].join("\n"),
			b = ["precision " + e.precision + " float;", "precision " + e.precision + " int;", e.bumpMap || e.normalMap ? "#extension GL_OES_standard_derivatives : enable" : "", t, "#define MAX_DIR_LIGHTS " + e.maxDirLights, "#define MAX_POINT_LIGHTS " + e.maxPointLights, "#define MAX_SPOT_LIGHTS " + e.maxSpotLights, "#define MAX_HEMI_LIGHTS " + e.maxHemiLights, "#define MAX_SHADOWS " + e.maxShadows, e.alphaTest ? "#define ALPHATEST " + e.alphaTest : "", b.gammaInput ? "#define GAMMA_INPUT" : "", b.gammaOutput ? "#define GAMMA_OUTPUT" : "", e.useFog && e.fog ? "#define USE_FOG" :
				"", e.useFog && e.fogExp ? "#define FOG_EXP2" : "", e.map ? "#define USE_MAP" : "", e.envMap ? "#define USE_ENVMAP" : "", e.lightMap ? "#define USE_LIGHTMAP" : "", e.bumpMap ? "#define USE_BUMPMAP" : "", e.normalMap ? "#define USE_NORMALMAP" : "", e.specularMap ? "#define USE_SPECULARMAP" : "", e.alphaMap ? "#define USE_ALPHAMAP" : "", e.vertexColors ? "#define USE_COLOR" : "", e.metal ? "#define METAL" : "", e.wrapAround ? "#define WRAP_AROUND" : "", e.doubleSided ? "#define DOUBLE_SIDED" : "", e.flipSided ? "#define FLIP_SIDED" : "", e.shadowMapEnabled ? "#define USE_SHADOWMAP" :
				"", e.shadowMapEnabled ? "#define " + r : "", e.shadowMapDebug ? "#define SHADOWMAP_DEBUG" : "", e.shadowMapCascade ? "#define SHADOWMAP_CASCADE" : "", e.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", "uniform mat4 viewMatrix;\nuniform vec3 cameraPosition;\n"].join("\n"));
		l = new THREE.WebGLShader(f, f.VERTEX_SHADER, d + l);
		n = new THREE.WebGLShader(f, f.FRAGMENT_SHADER, b + n);
		f.attachShader(g, l);
		f.attachShader(g, n);
		void 0 !== q && f.bindAttribLocation(g, 0, q);
		f.linkProgram(g);
		!1 === f.getProgramParameter(g, f.LINK_STATUS) && (console.error("THREE.WebGLProgram: Could not initialise shader."),
			console.error("gl.VALIDATE_STATUS", f.getProgramParameter(g, f.VALIDATE_STATUS)), console.error("gl.getError()", f.getError()));
		"" !== f.getProgramInfoLog(g) && console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()", f.getProgramInfoLog(g));
		f.deleteShader(l);
		f.deleteShader(n);
		q = "viewMatrix modelViewMatrix projectionMatrix normalMatrix modelMatrix cameraPosition morphTargetInfluences bindMatrix bindMatrixInverse".split(" ");
		e.useVertexTexture ? (q.push("boneTexture"), q.push("boneTextureWidth"), q.push("boneTextureHeight")) :
			q.push("boneGlobalMatrices");
		e.logarithmicDepthBuffer && q.push("logDepthBufFC");
		for (var v in h)q.push(v);
		h = q;
		v = {};
		q = 0;
		for (b = h.length; q < b; q++)r = h[q], v[r] = f.getUniformLocation(g, r);
		this.uniforms = v;
		q = "position normal uv uv2 tangent color skinIndex skinWeight lineDistance".split(" ");
		for (h = 0; h < e.maxMorphTargets; h++)q.push("morphTarget" + h);
		for (h = 0; h < e.maxMorphNormals; h++)q.push("morphNormal" + h);
		for (var w in k)q.push(w);
		e = q;
		k = {};
		w = 0;
		for (h = e.length; w < h; w++)v = e[w], k[v] = f.getAttribLocation(g, v);
		this.attributes =
			k;
		this.id = a++;
		this.code = c;
		this.usedTimes = 1;
		this.program = g;
		this.vertexShader = l;
		this.fragmentShader = n;
		return this
	}
}();
THREE.WebGLShader = function () {
	var a = function (a) {
		a = a.split("\n");
		for (var c = 0; c < a.length; c++)a[c] = c + 1 + ": " + a[c];
		return a.join("\n")
	};
	return function (b, c, d) {
		c = b.createShader(c);
		b.shaderSource(c, d);
		b.compileShader(c);
		!1 === b.getShaderParameter(c, b.COMPILE_STATUS) && console.error("THREE.WebGLShader: Shader couldn't compile.");
		"" !== b.getShaderInfoLog(c) && (console.warn("THREE.WebGLShader: gl.getShaderInfoLog()", b.getShaderInfoLog(c)), console.warn(a(d)));
		return c
	}
}();
THREE.RenderableVertex = function () {
	this.position = new THREE.Vector3;
	this.positionWorld = new THREE.Vector3;
	this.positionScreen = new THREE.Vector4;
	this.visible = !0
};
THREE.RenderableVertex.prototype.copy = function (a) {
	this.positionWorld.copy(a.positionWorld);
	this.positionScreen.copy(a.positionScreen)
};
THREE.RenderableFace = function () {
	this.id = 0;
	this.v1 = new THREE.RenderableVertex;
	this.v2 = new THREE.RenderableVertex;
	this.v3 = new THREE.RenderableVertex;
	this.normalModel = new THREE.Vector3;
	this.vertexNormalsModel = [new THREE.Vector3, new THREE.Vector3, new THREE.Vector3];
	this.vertexNormalsLength = 0;
	this.color = new THREE.Color;
	this.material = null;
	this.uvs = [new THREE.Vector2, new THREE.Vector2, new THREE.Vector2];
	this.z = 0
};
THREE.RenderableObject = function () {
	this.id = 0;
	this.object = null;
	this.z = 0
};
THREE.RenderableSprite = function () {
	this.id = 0;
	this.object = null;
	this.rotation = this.z = this.y = this.x = 0;
	this.scale = new THREE.Vector2;
	this.material = null
};
THREE.RenderableLine = function () {
	this.id = 0;
	this.v1 = new THREE.RenderableVertex;
	this.v2 = new THREE.RenderableVertex;
	this.vertexColors = [new THREE.Color, new THREE.Color];
	this.material = null;
	this.z = 0
};
THREE.GeometryUtils = {merge: function (a, b, c) {
	console.warn("THREE.GeometryUtils: .merge() has been moved to Geometry. Use geometry.merge( geometry2, matrix, materialIndexOffset ) instead.");
	var d;
	b instanceof THREE.Mesh && (b.matrixAutoUpdate && b.updateMatrix(), d = b.matrix, b = b.geometry);
	a.merge(b, d, c)
}, center: function (a) {
	console.warn("THREE.GeometryUtils: .center() has been moved to Geometry. Use geometry.center() instead.");
	return a.center()
}};
THREE.ImageUtils = {crossOrigin: void 0, loadTexture: function (a, b, c, d) {
	var e = new THREE.ImageLoader;
	e.crossOrigin = this.crossOrigin;
	var f = new THREE.Texture(void 0, b);
	e.load(a, function (a) {
		f.image = a;
		f.needsUpdate = !0;
		c && c(f)
	}, void 0, function (a) {
		d && d(a)
	});
	f.sourceFile = a;
	return f
}, loadTextureCube: function (a, b, c, d) {
	var e = new THREE.ImageLoader;
	e.crossOrigin = this.crossOrigin;
	var f = new THREE.CubeTexture([], b);
	f.flipY = !1;
	var g = 0;
	b = function (b) {
		e.load(a[b], function (a) {
			f.images[b] = a;
			g += 1;
			6 === g && (f.needsUpdate = !0, c &&
				c(f))
		})
	};
	d = 0;
	for (var h = a.length; d < h; ++d)b(d);
	return f
}, loadCompressedTexture: function () {
	console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")
}, loadCompressedTextureCube: function () {
	console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")
}, getNormalMap: function (a, b) {
	var c = function (a) {
		var b = Math.sqrt(a[0] * a[0] + a[1] * a[1] + a[2] * a[2]);
		return[a[0] / b, a[1] / b, a[2] / b]
	};
	b |= 1;
	var d = a.width, e = a.height, f = document.createElement("canvas");
	f.width = d;
	f.height = e;
	var g = f.getContext("2d");
	g.drawImage(a, 0, 0);
	for (var h = g.getImageData(0, 0, d, e).data, k = g.createImageData(d, e), l = k.data, n = 0; n < d; n++)for (var q = 0; q < e; q++) {
		var r = 0 > q - 1 ? 0 : q - 1, t = q + 1 > e - 1 ? e - 1 : q + 1, s = 0 > n - 1 ? 0 : n - 1, p = n + 1 > d - 1 ? d - 1 : n + 1, v = [], w = [0, 0, h[4 * (q * d + n)] / 255 * b];
		v.push([-1, 0, h[4 * (q * d + s)] / 255 * b]);
		v.push([-1, -1, h[4 * (r * d + s)] / 255 * b]);
		v.push([0, -1, h[4 * (r * d + n)] / 255 * b]);
		v.push([1, -1, h[4 * (r * d + p)] / 255 * b]);
		v.push([1, 0, h[4 * (q * d + p)] / 255 * b]);
		v.push([1, 1, h[4 * (t * d + p)] / 255 * b]);
		v.push([0, 1, h[4 * (t * d + n)] / 255 *
			b]);
		v.push([-1, 1, h[4 * (t * d + s)] / 255 * b]);
		r = [];
		s = v.length;
		for (t = 0; t < s; t++) {
			var p = v[t], u = v[(t + 1) % s], p = [p[0] - w[0], p[1] - w[1], p[2] - w[2]], u = [u[0] - w[0], u[1] - w[1], u[2] - w[2]];
			r.push(c([p[1] * u[2] - p[2] * u[1], p[2] * u[0] - p[0] * u[2], p[0] * u[1] - p[1] * u[0]]))
		}
		v = [0, 0, 0];
		for (t = 0; t < r.length; t++)v[0] += r[t][0], v[1] += r[t][1], v[2] += r[t][2];
		v[0] /= r.length;
		v[1] /= r.length;
		v[2] /= r.length;
		w = 4 * (q * d + n);
		l[w] = (v[0] + 1) / 2 * 255 | 0;
		l[w + 1] = (v[1] + 1) / 2 * 255 | 0;
		l[w + 2] = 255 * v[2] | 0;
		l[w + 3] = 255
	}
	g.putImageData(k, 0, 0);
	return f
}, generateDataTexture: function (a, b, c) {
	var d = a * b, e = new Uint8Array(3 * d), f = Math.floor(255 * c.r), g = Math.floor(255 * c.g);
	c = Math.floor(255 * c.b);
	for (var h = 0; h < d; h++)e[3 * h] = f, e[3 * h + 1] = g, e[3 * h + 2] = c;
	a = new THREE.DataTexture(e, a, b, THREE.RGBFormat);
	a.needsUpdate = !0;
	return a
}};
THREE.SceneUtils = {createMultiMaterialObject: function (a, b) {
	for (var c = new THREE.Object3D, d = 0, e = b.length; d < e; d++)c.add(new THREE.Mesh(a, b[d]));
	return c
}, detach: function (a, b, c) {
	a.applyMatrix(b.matrixWorld);
	b.remove(a);
	c.add(a)
}, attach: function (a, b, c) {
	var d = new THREE.Matrix4;
	d.getInverse(c.matrixWorld);
	a.applyMatrix(d);
	b.remove(a);
	c.add(a)
}};
THREE.FontUtils = {faces: {}, face: "helvetiker", weight: "normal", style: "normal", size: 150, divisions: 10, getFace: function () {
	try {
		return this.faces[this.face][this.weight][this.style]
	} catch (a) {
		throw"The font " + this.face + " with " + this.weight + " weight and " + this.style + " style is missing.";
	}
}, loadFace: function (a) {
	var b = a.familyName.toLowerCase();
	this.faces[b] = this.faces[b] || {};
	this.faces[b][a.cssFontWeight] = this.faces[b][a.cssFontWeight] || {};
	this.faces[b][a.cssFontWeight][a.cssFontStyle] = a;
	return this.faces[b][a.cssFontWeight][a.cssFontStyle] =
		a
}, drawText: function (a) {
	var b = this.getFace(), c = this.size / b.resolution, d = 0, e = String(a).split(""), f = e.length, g = [];
	for (a = 0; a < f; a++) {
		var h = new THREE.Path, h = this.extractGlyphPoints(e[a], b, c, d, h), d = d + h.offset;
		g.push(h.path)
	}
	return{paths: g, offset: d / 2}
}, extractGlyphPoints: function (a, b, c, d, e) {
	var f = [], g, h, k, l, n, q, r, t, s, p, v, w = b.glyphs[a] || b.glyphs["?"];
	if (w) {
		if (w.o)for (b = w._cachedOutline || (w._cachedOutline = w.o.split(" ")), l = b.length, a = 0; a < l;)switch (k = b[a++], k) {
			case "m":
				k = b[a++] * c + d;
				n = b[a++] * c;
				e.moveTo(k, n);
				break;
			case "l":
				k = b[a++] * c + d;
				n = b[a++] * c;
				e.lineTo(k, n);
				break;
			case "q":
				k = b[a++] * c + d;
				n = b[a++] * c;
				t = b[a++] * c + d;
				s = b[a++] * c;
				e.quadraticCurveTo(t, s, k, n);
				if (g = f[f.length - 1])for (q = g.x, r = g.y, g = 1, h = this.divisions; g <= h; g++) {
					var u = g / h;
					THREE.Shape.Utils.b2(u, q, t, k);
					THREE.Shape.Utils.b2(u, r, s, n)
				}
				break;
			case "b":
				if (k = b[a++] * c + d, n = b[a++] * c, t = b[a++] * c + d, s = b[a++] * c, p = b[a++] * c + d, v = b[a++] * c, e.bezierCurveTo(t, s, p, v, k, n), g = f[f.length - 1])for (q = g.x, r = g.y, g = 1, h = this.divisions; g <= h; g++)u = g / h, THREE.Shape.Utils.b3(u, q, t, p, k), THREE.Shape.Utils.b3(u,
					r, s, v, n)
		}
		return{offset: w.ha * c, path: e}
	}
}};
THREE.FontUtils.generateShapes = function (a, b) {
	b = b || {};
	var c = void 0 !== b.curveSegments ? b.curveSegments : 4, d = void 0 !== b.font ? b.font : "helvetiker", e = void 0 !== b.weight ? b.weight : "normal", f = void 0 !== b.style ? b.style : "normal";
	THREE.FontUtils.size = void 0 !== b.size ? b.size : 100;
	THREE.FontUtils.divisions = c;
	THREE.FontUtils.face = d;
	THREE.FontUtils.weight = e;
	THREE.FontUtils.style = f;
	c = THREE.FontUtils.drawText(a).paths;
	d = [];
	e = 0;
	for (f = c.length; e < f; e++)Array.prototype.push.apply(d, c[e].toShapes());
	return d
};
(function (a) {
	var b = function (a) {
		for (var b = a.length, e = 0, f = b - 1, g = 0; g < b; f = g++)e += a[f].x * a[g].y - a[g].x * a[f].y;
		return 0.5 * e
	};
	a.Triangulate = function (a, d) {
		var e = a.length;
		if (3 > e)return null;
		var f = [], g = [], h = [], k, l, n;
		if (0 < b(a))for (l = 0; l < e; l++)g[l] = l; else for (l = 0; l < e; l++)g[l] = e - 1 - l;
		var q = 2 * e;
		for (l = e - 1; 2 < e;) {
			if (0 >= q--) {
				console.log("Warning, unable to triangulate polygon!");
				break
			}
			k = l;
			e <= k && (k = 0);
			l = k + 1;
			e <= l && (l = 0);
			n = l + 1;
			e <= n && (n = 0);
			var r;
			a:{
				var t = r = void 0, s = void 0, p = void 0, v = void 0, w = void 0, u = void 0, D = void 0, A =
					void 0, t = a[g[k]].x, s = a[g[k]].y, p = a[g[l]].x, v = a[g[l]].y, w = a[g[n]].x, u = a[g[n]].y;
				if (1E-10 > (p - t) * (u - s) - (v - s) * (w - t))r = !1; else {
					var x = void 0, C = void 0, I = void 0, z = void 0, y = void 0, K = void 0, N = void 0, ba = void 0, P = void 0, O = void 0, P = ba = N = A = D = void 0, x = w - p, C = u - v, I = t - w, z = s - u, y = p - t, K = v - s;
					for (r = 0; r < e; r++)if (D = a[g[r]].x, A = a[g[r]].y, !(D === t && A === s || D === p && A === v || D === w && A === u) && (N = D - t, ba = A - s, P = D - p, O = A - v, D -= w, A -= u, P = x * O - C * P, N = y * ba - K * N, ba = I * A - z * D, -1E-10 <= P && -1E-10 <= ba && -1E-10 <= N)) {
						r = !1;
						break a
					}
					r = !0
				}
			}
			if (r) {
				f.push([a[g[k]],
					a[g[l]], a[g[n]]]);
				h.push([g[k], g[l], g[n]]);
				k = l;
				for (n = l + 1; n < e; k++, n++)g[k] = g[n];
				e--;
				q = 2 * e
			}
		}
		return d ? h : f
	};
	a.Triangulate.area = b;
	return a
})(THREE.FontUtils);
self._typeface_js = {faces: THREE.FontUtils.faces, loadFace: THREE.FontUtils.loadFace};
THREE.typeface_js = self._typeface_js;
THREE.Curve = function () {
};
THREE.Curve.prototype.getPoint = function (a) {
	console.log("Warning, getPoint() not implemented!");
	return null
};
THREE.Curve.prototype.getPointAt = function (a) {
	a = this.getUtoTmapping(a);
	return this.getPoint(a)
};
THREE.Curve.prototype.getPoints = function (a) {
	a || (a = 5);
	var b, c = [];
	for (b = 0; b <= a; b++)c.push(this.getPoint(b / a));
	return c
};
THREE.Curve.prototype.getSpacedPoints = function (a) {
	a || (a = 5);
	var b, c = [];
	for (b = 0; b <= a; b++)c.push(this.getPointAt(b / a));
	return c
};
THREE.Curve.prototype.getLength = function () {
	var a = this.getLengths();
	return a[a.length - 1]
};
THREE.Curve.prototype.getLengths = function (a) {
	a || (a = this.__arcLengthDivisions ? this.__arcLengthDivisions : 200);
	if (this.cacheArcLengths && this.cacheArcLengths.length == a + 1 && !this.needsUpdate)return this.cacheArcLengths;
	this.needsUpdate = !1;
	var b = [], c, d = this.getPoint(0), e, f = 0;
	b.push(0);
	for (e = 1; e <= a; e++)c = this.getPoint(e / a), f += c.distanceTo(d), b.push(f), d = c;
	return this.cacheArcLengths = b
};
THREE.Curve.prototype.updateArcLengths = function () {
	this.needsUpdate = !0;
	this.getLengths()
};
THREE.Curve.prototype.getUtoTmapping = function (a, b) {
	var c = this.getLengths(), d = 0, e = c.length, f;
	f = b ? b : a * c[e - 1];
	for (var g = 0, h = e - 1, k; g <= h;)if (d = Math.floor(g + (h - g) / 2), k = c[d] - f, 0 > k)g = d + 1; else if (0 < k)h = d - 1; else {
		h = d;
		break
	}
	d = h;
	if (c[d] == f)return d / (e - 1);
	g = c[d];
	return c = (d + (f - g) / (c[d + 1] - g)) / (e - 1)
};
THREE.Curve.prototype.getTangent = function (a) {
	var b = a - 1E-4;
	a += 1E-4;
	0 > b && (b = 0);
	1 < a && (a = 1);
	b = this.getPoint(b);
	return this.getPoint(a).clone().sub(b).normalize()
};
THREE.Curve.prototype.getTangentAt = function (a) {
	a = this.getUtoTmapping(a);
	return this.getTangent(a)
};
THREE.Curve.Utils = {tangentQuadraticBezier: function (a, b, c, d) {
	return 2 * (1 - a) * (c - b) + 2 * a * (d - c)
}, tangentCubicBezier: function (a, b, c, d, e) {
	return-3 * b * (1 - a) * (1 - a) + 3 * c * (1 - a) * (1 - a) - 6 * a * c * (1 - a) + 6 * a * d * (1 - a) - 3 * a * a * d + 3 * a * a * e
}, tangentSpline: function (a, b, c, d, e) {
	return 6 * a * a - 6 * a + (3 * a * a - 4 * a + 1) + (-6 * a * a + 6 * a) + (3 * a * a - 2 * a)
}, interpolate: function (a, b, c, d, e) {
	a = 0.5 * (c - a);
	d = 0.5 * (d - b);
	var f = e * e;
	return(2 * b - 2 * c + a + d) * e * f + (-3 * b + 3 * c - 2 * a - d) * f + a * e + b
}};
THREE.Curve.create = function (a, b) {
	a.prototype = Object.create(THREE.Curve.prototype);
	a.prototype.getPoint = b;
	return a
};
THREE.CurvePath = function () {
	this.curves = [];
	this.bends = [];
	this.autoClose = !1
};
THREE.CurvePath.prototype = Object.create(THREE.Curve.prototype);
THREE.CurvePath.prototype.add = function (a) {
	this.curves.push(a)
};
THREE.CurvePath.prototype.checkConnection = function () {
};
THREE.CurvePath.prototype.closePath = function () {
	var a = this.curves[0].getPoint(0), b = this.curves[this.curves.length - 1].getPoint(1);
	a.equals(b) || this.curves.push(new THREE.LineCurve(b, a))
};
THREE.CurvePath.prototype.getPoint = function (a) {
	var b = a * this.getLength(), c = this.getCurveLengths();
	for (a = 0; a < c.length;) {
		if (c[a] >= b)return b = c[a] - b, a = this.curves[a], b = 1 - b / a.getLength(), a.getPointAt(b);
		a++
	}
	return null
};
THREE.CurvePath.prototype.getLength = function () {
	var a = this.getCurveLengths();
	return a[a.length - 1]
};
THREE.CurvePath.prototype.getCurveLengths = function () {
	if (this.cacheLengths && this.cacheLengths.length == this.curves.length)return this.cacheLengths;
	var a = [], b = 0, c, d = this.curves.length;
	for (c = 0; c < d; c++)b += this.curves[c].getLength(), a.push(b);
	return this.cacheLengths = a
};
THREE.CurvePath.prototype.getBoundingBox = function () {
	var a = this.getPoints(), b, c, d, e, f, g;
	b = c = Number.NEGATIVE_INFINITY;
	e = f = Number.POSITIVE_INFINITY;
	var h, k, l, n, q = a[0]instanceof THREE.Vector3;
	n = q ? new THREE.Vector3 : new THREE.Vector2;
	k = 0;
	for (l = a.length; k < l; k++)h = a[k], h.x > b ? b = h.x : h.x < e && (e = h.x), h.y > c ? c = h.y : h.y < f && (f = h.y), q && (h.z > d ? d = h.z : h.z < g && (g = h.z)), n.add(h);
	a = {minX: e, minY: f, maxX: b, maxY: c};
	q && (a.maxZ = d, a.minZ = g);
	return a
};
THREE.CurvePath.prototype.createPointsGeometry = function (a) {
	a = this.getPoints(a, !0);
	return this.createGeometry(a)
};
THREE.CurvePath.prototype.createSpacedPointsGeometry = function (a) {
	a = this.getSpacedPoints(a, !0);
	return this.createGeometry(a)
};
THREE.CurvePath.prototype.createGeometry = function (a) {
	for (var b = new THREE.Geometry, c = 0; c < a.length; c++)b.vertices.push(new THREE.Vector3(a[c].x, a[c].y, a[c].z || 0));
	return b
};
THREE.CurvePath.prototype.addWrapPath = function (a) {
	this.bends.push(a)
};
THREE.CurvePath.prototype.getTransformedPoints = function (a, b) {
	var c = this.getPoints(a), d, e;
	b || (b = this.bends);
	d = 0;
	for (e = b.length; d < e; d++)c = this.getWrapPoints(c, b[d]);
	return c
};
THREE.CurvePath.prototype.getTransformedSpacedPoints = function (a, b) {
	var c = this.getSpacedPoints(a), d, e;
	b || (b = this.bends);
	d = 0;
	for (e = b.length; d < e; d++)c = this.getWrapPoints(c, b[d]);
	return c
};
THREE.CurvePath.prototype.getWrapPoints = function (a, b) {
	var c = this.getBoundingBox(), d, e, f, g, h, k;
	d = 0;
	for (e = a.length; d < e; d++)f = a[d], g = f.x, h = f.y, k = g / c.maxX, k = b.getUtoTmapping(k, g), g = b.getPoint(k), k = b.getTangent(k), k.set(-k.y, k.x).multiplyScalar(h), f.x = g.x + k.x, f.y = g.y + k.y;
	return a
};
THREE.Gyroscope = function () {
	THREE.Object3D.call(this)
};
THREE.Gyroscope.prototype = Object.create(THREE.Object3D.prototype);
THREE.Gyroscope.prototype.updateMatrixWorld = function (a) {
	this.matrixAutoUpdate && this.updateMatrix();
	if (this.matrixWorldNeedsUpdate || a)this.parent ? (this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorld.decompose(this.translationWorld, this.quaternionWorld, this.scaleWorld), this.matrix.decompose(this.translationObject, this.quaternionObject, this.scaleObject), this.matrixWorld.compose(this.translationWorld, this.quaternionObject, this.scaleWorld)) : this.matrixWorld.copy(this.matrix),
		this.matrixWorldNeedsUpdate = !1, a = !0;
	for (var b = 0, c = this.children.length; b < c; b++)this.children[b].updateMatrixWorld(a)
};
THREE.Gyroscope.prototype.translationWorld = new THREE.Vector3;
THREE.Gyroscope.prototype.translationObject = new THREE.Vector3;
THREE.Gyroscope.prototype.quaternionWorld = new THREE.Quaternion;
THREE.Gyroscope.prototype.quaternionObject = new THREE.Quaternion;
THREE.Gyroscope.prototype.scaleWorld = new THREE.Vector3;
THREE.Gyroscope.prototype.scaleObject = new THREE.Vector3;
THREE.Path = function (a) {
	THREE.CurvePath.call(this);
	this.actions = [];
	a && this.fromPoints(a)
};
THREE.Path.prototype = Object.create(THREE.CurvePath.prototype);
THREE.PathActions = {MOVE_TO: "moveTo", LINE_TO: "lineTo", QUADRATIC_CURVE_TO: "quadraticCurveTo", BEZIER_CURVE_TO: "bezierCurveTo", CSPLINE_THRU: "splineThru", ARC: "arc", ELLIPSE: "ellipse"};
THREE.Path.prototype.fromPoints = function (a) {
	this.moveTo(a[0].x, a[0].y);
	for (var b = 1, c = a.length; b < c; b++)this.lineTo(a[b].x, a[b].y)
};
THREE.Path.prototype.moveTo = function (a, b) {
	var c = Array.prototype.slice.call(arguments);
	this.actions.push({action: THREE.PathActions.MOVE_TO, args: c})
};
THREE.Path.prototype.lineTo = function (a, b) {
	var c = Array.prototype.slice.call(arguments), d = this.actions[this.actions.length - 1].args, d = new THREE.LineCurve(new THREE.Vector2(d[d.length - 2], d[d.length - 1]), new THREE.Vector2(a, b));
	this.curves.push(d);
	this.actions.push({action: THREE.PathActions.LINE_TO, args: c})
};
THREE.Path.prototype.quadraticCurveTo = function (a, b, c, d) {
	var e = Array.prototype.slice.call(arguments), f = this.actions[this.actions.length - 1].args, f = new THREE.QuadraticBezierCurve(new THREE.Vector2(f[f.length - 2], f[f.length - 1]), new THREE.Vector2(a, b), new THREE.Vector2(c, d));
	this.curves.push(f);
	this.actions.push({action: THREE.PathActions.QUADRATIC_CURVE_TO, args: e})
};
THREE.Path.prototype.bezierCurveTo = function (a, b, c, d, e, f) {
	var g = Array.prototype.slice.call(arguments), h = this.actions[this.actions.length - 1].args, h = new THREE.CubicBezierCurve(new THREE.Vector2(h[h.length - 2], h[h.length - 1]), new THREE.Vector2(a, b), new THREE.Vector2(c, d), new THREE.Vector2(e, f));
	this.curves.push(h);
	this.actions.push({action: THREE.PathActions.BEZIER_CURVE_TO, args: g})
};
THREE.Path.prototype.splineThru = function (a) {
	var b = Array.prototype.slice.call(arguments), c = this.actions[this.actions.length - 1].args, c = [new THREE.Vector2(c[c.length - 2], c[c.length - 1])];
	Array.prototype.push.apply(c, a);
	c = new THREE.SplineCurve(c);
	this.curves.push(c);
	this.actions.push({action: THREE.PathActions.CSPLINE_THRU, args: b})
};
THREE.Path.prototype.arc = function (a, b, c, d, e, f) {
	var g = this.actions[this.actions.length - 1].args;
	this.absarc(a + g[g.length - 2], b + g[g.length - 1], c, d, e, f)
};
THREE.Path.prototype.absarc = function (a, b, c, d, e, f) {
	this.absellipse(a, b, c, c, d, e, f)
};
THREE.Path.prototype.ellipse = function (a, b, c, d, e, f, g) {
	var h = this.actions[this.actions.length - 1].args;
	this.absellipse(a + h[h.length - 2], b + h[h.length - 1], c, d, e, f, g)
};
THREE.Path.prototype.absellipse = function (a, b, c, d, e, f, g) {
	var h = Array.prototype.slice.call(arguments), k = new THREE.EllipseCurve(a, b, c, d, e, f, g);
	this.curves.push(k);
	k = k.getPoint(1);
	h.push(k.x);
	h.push(k.y);
	this.actions.push({action: THREE.PathActions.ELLIPSE, args: h})
};
THREE.Path.prototype.getSpacedPoints = function (a, b) {
	a || (a = 40);
	for (var c = [], d = 0; d < a; d++)c.push(this.getPoint(d / a));
	return c
};
THREE.Path.prototype.getPoints = function (a, b) {
	if (this.useSpacedPoints)return console.log("tata"), this.getSpacedPoints(a, b);
	a = a || 12;
	var c = [], d, e, f, g, h, k, l, n, q, r, t, s, p;
	d = 0;
	for (e = this.actions.length; d < e; d++)switch (f = this.actions[d], g = f.action, f = f.args, g) {
		case THREE.PathActions.MOVE_TO:
			c.push(new THREE.Vector2(f[0], f[1]));
			break;
		case THREE.PathActions.LINE_TO:
			c.push(new THREE.Vector2(f[0], f[1]));
			break;
		case THREE.PathActions.QUADRATIC_CURVE_TO:
			h = f[2];
			k = f[3];
			q = f[0];
			r = f[1];
			0 < c.length ? (g = c[c.length - 1], t = g.x,
				s = g.y) : (g = this.actions[d - 1].args, t = g[g.length - 2], s = g[g.length - 1]);
			for (f = 1; f <= a; f++)p = f / a, g = THREE.Shape.Utils.b2(p, t, q, h), p = THREE.Shape.Utils.b2(p, s, r, k), c.push(new THREE.Vector2(g, p));
			break;
		case THREE.PathActions.BEZIER_CURVE_TO:
			h = f[4];
			k = f[5];
			q = f[0];
			r = f[1];
			l = f[2];
			n = f[3];
			0 < c.length ? (g = c[c.length - 1], t = g.x, s = g.y) : (g = this.actions[d - 1].args, t = g[g.length - 2], s = g[g.length - 1]);
			for (f = 1; f <= a; f++)p = f / a, g = THREE.Shape.Utils.b3(p, t, q, l, h), p = THREE.Shape.Utils.b3(p, s, r, n, k), c.push(new THREE.Vector2(g, p));
			break;
		case THREE.PathActions.CSPLINE_THRU:
			g =
				this.actions[d - 1].args;
			p = [new THREE.Vector2(g[g.length - 2], g[g.length - 1])];
			g = a * f[0].length;
			p = p.concat(f[0]);
			p = new THREE.SplineCurve(p);
			for (f = 1; f <= g; f++)c.push(p.getPointAt(f / g));
			break;
		case THREE.PathActions.ARC:
			h = f[0];
			k = f[1];
			r = f[2];
			l = f[3];
			g = f[4];
			q = !!f[5];
			t = g - l;
			s = 2 * a;
			for (f = 1; f <= s; f++)p = f / s, q || (p = 1 - p), p = l + p * t, g = h + r * Math.cos(p), p = k + r * Math.sin(p), c.push(new THREE.Vector2(g, p));
			break;
		case THREE.PathActions.ELLIPSE:
			for (h = f[0], k = f[1], r = f[2], n = f[3], l = f[4], g = f[5], q = !!f[6], t = g - l, s = 2 * a, f = 1; f <= s; f++)p = f / s, q ||
				(p = 1 - p), p = l + p * t, g = h + r * Math.cos(p), p = k + n * Math.sin(p), c.push(new THREE.Vector2(g, p))
	}
	d = c[c.length - 1];
	1E-10 > Math.abs(d.x - c[0].x) && 1E-10 > Math.abs(d.y - c[0].y) && c.splice(c.length - 1, 1);
	b && c.push(c[0]);
	return c
};
THREE.Path.prototype.toShapes = function (a, b) {
	function c(a) {
		for (var b = [], c = 0, d = a.length; c < d; c++) {
			var e = a[c], f = new THREE.Shape;
			f.actions = e.actions;
			f.curves = e.curves;
			b.push(f)
		}
		return b
	}

	function d(a, b) {
		for (var c = b.length, d = !1, e = c - 1, f = 0; f < c; e = f++) {
			var g = b[e], h = b[f], k = h.x - g.x, l = h.y - g.y;
			if (1E-10 < Math.abs(l)) {
				if (0 > l && (g = b[f], k = -k, h = b[e], l = -l), !(a.y < g.y || a.y > h.y))if (a.y == g.y) {
					if (a.x == g.x)return!0
				} else {
					e = l * (a.x - g.x) - k * (a.y - g.y);
					if (0 == e)return!0;
					0 > e || (d = !d)
				}
			} else if (a.y == g.y && (h.x <= a.x && a.x <= g.x || g.x <= a.x && a.x <=
				h.x))return!0
		}
		return d
	}

	var e = function (a) {
		var b, c, d, e, f = [], g = new THREE.Path;
		b = 0;
		for (c = a.length; b < c; b++)d = a[b], e = d.args, d = d.action, d == THREE.PathActions.MOVE_TO && 0 != g.actions.length && (f.push(g), g = new THREE.Path), g[d].apply(g, e);
		0 != g.actions.length && f.push(g);
		return f
	}(this.actions);
	if (0 == e.length)return[];
	if (!0 === b)return c(e);
	var f, g, h, k = [];
	if (1 == e.length)return g = e[0], h = new THREE.Shape, h.actions = g.actions, h.curves = g.curves, k.push(h), k;
	var l = !THREE.Shape.Utils.isClockWise(e[0].getPoints()), l = a ? !l : l;
	h = [];
	var n = [], q = [], r = 0, t;
	n[r] = void 0;
	q[r] = [];
	var s, p;
	s = 0;
	for (p = e.length; s < p; s++)g = e[s], t = g.getPoints(), f = THREE.Shape.Utils.isClockWise(t), (f = a ? !f : f) ? (!l && n[r] && r++, n[r] = {s: new THREE.Shape, p: t}, n[r].s.actions = g.actions, n[r].s.curves = g.curves, l && r++, q[r] = []) : q[r].push({h: g, p: t[0]});
	if (!n[0])return c(e);
	if (1 < n.length) {
		s = !1;
		p = [];
		g = 0;
		for (e = n.length; g < e; g++)h[g] = [];
		g = 0;
		for (e = n.length; g < e; g++)for (f = q[g], l = 0; l < f.length; l++) {
			r = f[l];
			t = !0;
			for (var v = 0; v < n.length; v++)d(r.p, n[v].p) && (g != v && p.push({froms: g, tos: v,
				hole: l}), t ? (t = !1, h[v].push(r)) : s = !0);
			t && h[g].push(r)
		}
		0 < p.length && (s || (q = h))
	}
	s = 0;
	for (p = n.length; s < p; s++)for (h = n[s].s, k.push(h), g = q[s], e = 0, f = g.length; e < f; e++)h.holes.push(g[e].h);
	return k
};
THREE.Shape = function () {
	THREE.Path.apply(this, arguments);
	this.holes = []
};
THREE.Shape.prototype = Object.create(THREE.Path.prototype);
THREE.Shape.prototype.extrude = function (a) {
	return new THREE.ExtrudeGeometry(this, a)
};
THREE.Shape.prototype.makeGeometry = function (a) {
	return new THREE.ShapeGeometry(this, a)
};
THREE.Shape.prototype.getPointsHoles = function (a) {
	var b, c = this.holes.length, d = [];
	for (b = 0; b < c; b++)d[b] = this.holes[b].getTransformedPoints(a, this.bends);
	return d
};
THREE.Shape.prototype.getSpacedPointsHoles = function (a) {
	var b, c = this.holes.length, d = [];
	for (b = 0; b < c; b++)d[b] = this.holes[b].getTransformedSpacedPoints(a, this.bends);
	return d
};
THREE.Shape.prototype.extractAllPoints = function (a) {
	return{shape: this.getTransformedPoints(a), holes: this.getPointsHoles(a)}
};
THREE.Shape.prototype.extractPoints = function (a) {
	return this.useSpacedPoints ? this.extractAllSpacedPoints(a) : this.extractAllPoints(a)
};
THREE.Shape.prototype.extractAllSpacedPoints = function (a) {
	return{shape: this.getTransformedSpacedPoints(a), holes: this.getSpacedPointsHoles(a)}
};
THREE.Shape.Utils = {triangulateShape: function (a, b) {
	function c(a, b, c) {
		return a.x != b.x ? a.x < b.x ? a.x <= c.x && c.x <= b.x : b.x <= c.x && c.x <= a.x : a.y < b.y ? a.y <= c.y && c.y <= b.y : b.y <= c.y && c.y <= a.y
	}

	function d(a, b, d, e, f) {
		var g = b.x - a.x, h = b.y - a.y, k = e.x - d.x, l = e.y - d.y, n = a.x - d.x, q = a.y - d.y, I = h * k - g * l, z = h * n - g * q;
		if (1E-10 < Math.abs(I)) {
			if (0 < I) {
				if (0 > z || z > I)return[];
				k = l * n - k * q;
				if (0 > k || k > I)return[]
			} else {
				if (0 < z || z < I)return[];
				k = l * n - k * q;
				if (0 < k || k < I)return[]
			}
			if (0 == k)return!f || 0 != z && z != I ? [a] : [];
			if (k == I)return!f || 0 != z && z != I ? [b] : [];
			if (0 == z)return[d];
			if (z == I)return[e];
			f = k / I;
			return[
				{x: a.x + f * g, y: a.y + f * h}
			]
		}
		if (0 != z || l * n != k * q)return[];
		h = 0 == g && 0 == h;
		k = 0 == k && 0 == l;
		if (h && k)return a.x != d.x || a.y != d.y ? [] : [a];
		if (h)return c(d, e, a) ? [a] : [];
		if (k)return c(a, b, d) ? [d] : [];
		0 != g ? (a.x < b.x ? (g = a, k = a.x, h = b, a = b.x) : (g = b, k = b.x, h = a, a = a.x), d.x < e.x ? (b = d, I = d.x, l = e, d = e.x) : (b = e, I = e.x, l = d, d = d.x)) : (a.y < b.y ? (g = a, k = a.y, h = b, a = b.y) : (g = b, k = b.y, h = a, a = a.y), d.y < e.y ? (b = d, I = d.y, l = e, d = e.y) : (b = e, I = e.y, l = d, d = d.y));
		return k <= I ? a < I ? [] : a == I ? f ? [] : [b] : a <= d ? [b, h] : [b, l] : k > d ? [] : k == d ? f ? [] : [g] : a <= d ? [g, h] :
			[g, l]
	}

	function e(a, b, c, d) {
		var e = b.x - a.x, f = b.y - a.y;
		b = c.x - a.x;
		c = c.y - a.y;
		var g = d.x - a.x;
		d = d.y - a.y;
		a = e * c - f * b;
		e = e * d - f * g;
		return 1E-10 < Math.abs(a) ? (b = g * c - d * b, 0 < a ? 0 <= e && 0 <= b : 0 <= e || 0 <= b) : 0 < e
	}

	var f, g, h, k, l, n = {};
	h = a.concat();
	f = 0;
	for (g = b.length; f < g; f++)Array.prototype.push.apply(h, b[f]);
	f = 0;
	for (g = h.length; f < g; f++)l = h[f].x + ":" + h[f].y, void 0 !== n[l] && console.log("Duplicate point", l), n[l] = f;
	f = function (a, b) {
		function c(a, b) {
			var d = h.length - 1, f = a - 1;
			0 > f && (f = d);
			var g = a + 1;
			g > d && (g = 0);
			d = e(h[a], h[f], h[g], k[b]);
			if (!d)return!1;
			d = k.length - 1;
			f = b - 1;
			0 > f && (f = d);
			g = b + 1;
			g > d && (g = 0);
			return(d = e(k[b], k[f], k[g], h[a])) ? !0 : !1
		}

		function f(a, b) {
			var c, e;
			for (c = 0; c < h.length; c++)if (e = c + 1, e %= h.length, e = d(a, b, h[c], h[e], !0), 0 < e.length)return!0;
			return!1
		}

		function g(a, c) {
			var e, f, h, k;
			for (e = 0; e < l.length; e++)for (f = b[l[e]], h = 0; h < f.length; h++)if (k = h + 1, k %= f.length, k = d(a, c, f[h], f[k], !0), 0 < k.length)return!0;
			return!1
		}

		var h = a.concat(), k, l = [], n, q, C, I, z, y = [], K, N, ba, P = 0;
		for (n = b.length; P < n; P++)l.push(P);
		K = 0;
		for (var O = 2 * l.length; 0 < l.length;) {
			O--;
			if (0 > O) {
				console.log("Infinite Loop! Holes left:" +
					l.length + ", Probably Hole outside Shape!");
				break
			}
			for (q = K; q < h.length; q++) {
				C = h[q];
				n = -1;
				for (P = 0; P < l.length; P++)if (I = l[P], z = C.x + ":" + C.y + ":" + I, void 0 === y[z]) {
					k = b[I];
					for (N = 0; N < k.length; N++)if (I = k[N], c(q, N) && !f(C, I) && !g(C, I)) {
						n = N;
						l.splice(P, 1);
						K = h.slice(0, q + 1);
						I = h.slice(q);
						N = k.slice(n);
						ba = k.slice(0, n + 1);
						h = K.concat(N).concat(ba).concat(I);
						K = q;
						break
					}
					if (0 <= n)break;
					y[z] = !0
				}
				if (0 <= n)break
			}
		}
		return h
	}(a, b);
	var q = THREE.FontUtils.Triangulate(f, !1);
	f = 0;
	for (g = q.length; f < g; f++)for (k = q[f], h = 0; 3 > h; h++)l = k[h].x + ":" + k[h].y,
		l = n[l], void 0 !== l && (k[h] = l);
	return q.concat()
}, isClockWise: function (a) {
	return 0 > THREE.FontUtils.Triangulate.area(a)
}, b2p0: function (a, b) {
	var c = 1 - a;
	return c * c * b
}, b2p1: function (a, b) {
	return 2 * (1 - a) * a * b
}, b2p2: function (a, b) {
	return a * a * b
}, b2: function (a, b, c, d) {
	return this.b2p0(a, b) + this.b2p1(a, c) + this.b2p2(a, d)
}, b3p0: function (a, b) {
	var c = 1 - a;
	return c * c * c * b
}, b3p1: function (a, b) {
	var c = 1 - a;
	return 3 * c * c * a * b
}, b3p2: function (a, b) {
	return 3 * (1 - a) * a * a * b
}, b3p3: function (a, b) {
	return a * a * a * b
}, b3: function (a, b, c, d, e) {
	return this.b3p0(a,
		b) + this.b3p1(a, c) + this.b3p2(a, d) + this.b3p3(a, e)
}};
THREE.LineCurve = function (a, b) {
	this.v1 = a;
	this.v2 = b
};
THREE.LineCurve.prototype = Object.create(THREE.Curve.prototype);
THREE.LineCurve.prototype.getPoint = function (a) {
	var b = this.v2.clone().sub(this.v1);
	b.multiplyScalar(a).add(this.v1);
	return b
};
THREE.LineCurve.prototype.getPointAt = function (a) {
	return this.getPoint(a)
};
THREE.LineCurve.prototype.getTangent = function (a) {
	return this.v2.clone().sub(this.v1).normalize()
};
THREE.QuadraticBezierCurve = function (a, b, c) {
	this.v0 = a;
	this.v1 = b;
	this.v2 = c
};
THREE.QuadraticBezierCurve.prototype = Object.create(THREE.Curve.prototype);
THREE.QuadraticBezierCurve.prototype.getPoint = function (a) {
	var b;
	b = THREE.Shape.Utils.b2(a, this.v0.x, this.v1.x, this.v2.x);
	a = THREE.Shape.Utils.b2(a, this.v0.y, this.v1.y, this.v2.y);
	return new THREE.Vector2(b, a)
};
THREE.QuadraticBezierCurve.prototype.getTangent = function (a) {
	var b;
	b = THREE.Curve.Utils.tangentQuadraticBezier(a, this.v0.x, this.v1.x, this.v2.x);
	a = THREE.Curve.Utils.tangentQuadraticBezier(a, this.v0.y, this.v1.y, this.v2.y);
	b = new THREE.Vector2(b, a);
	b.normalize();
	return b
};
THREE.CubicBezierCurve = function (a, b, c, d) {
	this.v0 = a;
	this.v1 = b;
	this.v2 = c;
	this.v3 = d
};
THREE.CubicBezierCurve.prototype = Object.create(THREE.Curve.prototype);
THREE.CubicBezierCurve.prototype.getPoint = function (a) {
	var b;
	b = THREE.Shape.Utils.b3(a, this.v0.x, this.v1.x, this.v2.x, this.v3.x);
	a = THREE.Shape.Utils.b3(a, this.v0.y, this.v1.y, this.v2.y, this.v3.y);
	return new THREE.Vector2(b, a)
};
THREE.CubicBezierCurve.prototype.getTangent = function (a) {
	var b;
	b = THREE.Curve.Utils.tangentCubicBezier(a, this.v0.x, this.v1.x, this.v2.x, this.v3.x);
	a = THREE.Curve.Utils.tangentCubicBezier(a, this.v0.y, this.v1.y, this.v2.y, this.v3.y);
	b = new THREE.Vector2(b, a);
	b.normalize();
	return b
};
THREE.SplineCurve = function (a) {
	this.points = void 0 == a ? [] : a
};
THREE.SplineCurve.prototype = Object.create(THREE.Curve.prototype);
THREE.SplineCurve.prototype.getPoint = function (a) {
	var b = new THREE.Vector2, c = [], d = this.points, e;
	e = (d.length - 1) * a;
	a = Math.floor(e);
	e -= a;
	c[0] = 0 == a ? a : a - 1;
	c[1] = a;
	c[2] = a > d.length - 2 ? d.length - 1 : a + 1;
	c[3] = a > d.length - 3 ? d.length - 1 : a + 2;
	b.x = THREE.Curve.Utils.interpolate(d[c[0]].x, d[c[1]].x, d[c[2]].x, d[c[3]].x, e);
	b.y = THREE.Curve.Utils.interpolate(d[c[0]].y, d[c[1]].y, d[c[2]].y, d[c[3]].y, e);
	return b
};
THREE.EllipseCurve = function (a, b, c, d, e, f, g) {
	this.aX = a;
	this.aY = b;
	this.xRadius = c;
	this.yRadius = d;
	this.aStartAngle = e;
	this.aEndAngle = f;
	this.aClockwise = g
};
THREE.EllipseCurve.prototype = Object.create(THREE.Curve.prototype);
THREE.EllipseCurve.prototype.getPoint = function (a) {
	var b;
	b = this.aEndAngle - this.aStartAngle;
	0 > b && (b += 2 * Math.PI);
	b > 2 * Math.PI && (b -= 2 * Math.PI);
	b = !0 === this.aClockwise ? this.aEndAngle + (1 - a) * (2 * Math.PI - b) : this.aStartAngle + a * b;
	a = this.aX + this.xRadius * Math.cos(b);
	b = this.aY + this.yRadius * Math.sin(b);
	return new THREE.Vector2(a, b)
};
THREE.ArcCurve = function (a, b, c, d, e, f) {
	THREE.EllipseCurve.call(this, a, b, c, c, d, e, f)
};
THREE.ArcCurve.prototype = Object.create(THREE.EllipseCurve.prototype);
THREE.LineCurve3 = THREE.Curve.create(function (a, b) {
	this.v1 = a;
	this.v2 = b
}, function (a) {
	var b = new THREE.Vector3;
	b.subVectors(this.v2, this.v1);
	b.multiplyScalar(a);
	b.add(this.v1);
	return b
});
THREE.QuadraticBezierCurve3 = THREE.Curve.create(function (a, b, c) {
	this.v0 = a;
	this.v1 = b;
	this.v2 = c
}, function (a) {
	var b, c;
	b = THREE.Shape.Utils.b2(a, this.v0.x, this.v1.x, this.v2.x);
	c = THREE.Shape.Utils.b2(a, this.v0.y, this.v1.y, this.v2.y);
	a = THREE.Shape.Utils.b2(a, this.v0.z, this.v1.z, this.v2.z);
	return new THREE.Vector3(b, c, a)
});
THREE.CubicBezierCurve3 = THREE.Curve.create(function (a, b, c, d) {
	this.v0 = a;
	this.v1 = b;
	this.v2 = c;
	this.v3 = d
}, function (a) {
	var b, c;
	b = THREE.Shape.Utils.b3(a, this.v0.x, this.v1.x, this.v2.x, this.v3.x);
	c = THREE.Shape.Utils.b3(a, this.v0.y, this.v1.y, this.v2.y, this.v3.y);
	a = THREE.Shape.Utils.b3(a, this.v0.z, this.v1.z, this.v2.z, this.v3.z);
	return new THREE.Vector3(b, c, a)
});
THREE.SplineCurve3 = THREE.Curve.create(function (a) {
	this.points = void 0 == a ? [] : a
}, function (a) {
	var b = new THREE.Vector3, c = [], d = this.points, e;
	a *= d.length - 1;
	e = Math.floor(a);
	a -= e;
	c[0] = 0 == e ? e : e - 1;
	c[1] = e;
	c[2] = e > d.length - 2 ? d.length - 1 : e + 1;
	c[3] = e > d.length - 3 ? d.length - 1 : e + 2;
	e = d[c[0]];
	var f = d[c[1]], g = d[c[2]], c = d[c[3]];
	b.x = THREE.Curve.Utils.interpolate(e.x, f.x, g.x, c.x, a);
	b.y = THREE.Curve.Utils.interpolate(e.y, f.y, g.y, c.y, a);
	b.z = THREE.Curve.Utils.interpolate(e.z, f.z, g.z, c.z, a);
	return b
});
THREE.ClosedSplineCurve3 = THREE.Curve.create(function (a) {
	this.points = void 0 == a ? [] : a
}, function (a) {
	var b = new THREE.Vector3, c = [], d = this.points, e;
	e = (d.length - 0) * a;
	a = Math.floor(e);
	e -= a;
	a += 0 < a ? 0 : (Math.floor(Math.abs(a) / d.length) + 1) * d.length;
	c[0] = (a - 1) % d.length;
	c[1] = a % d.length;
	c[2] = (a + 1) % d.length;
	c[3] = (a + 2) % d.length;
	b.x = THREE.Curve.Utils.interpolate(d[c[0]].x, d[c[1]].x, d[c[2]].x, d[c[3]].x, e);
	b.y = THREE.Curve.Utils.interpolate(d[c[0]].y, d[c[1]].y, d[c[2]].y, d[c[3]].y, e);
	b.z = THREE.Curve.Utils.interpolate(d[c[0]].z,
		d[c[1]].z, d[c[2]].z, d[c[3]].z, e);
	return b
});
THREE.AnimationHandler = {LINEAR: 0, CATMULLROM: 1, CATMULLROM_FORWARD: 2, add: function () {
	console.warn("THREE.AnimationHandler.add() has been deprecated.")
}, get: function () {
	console.warn("THREE.AnimationHandler.get() has been deprecated.")
}, remove: function () {
	console.warn("THREE.AnimationHandler.remove() has been deprecated.")
}, animations: [], init: function (a) {
	if (!0 !== a.initialized) {
		for (var b = 0; b < a.hierarchy.length; b++) {
			for (var c = 0; c < a.hierarchy[b].keys.length; c++)if (0 > a.hierarchy[b].keys[c].time && (a.hierarchy[b].keys[c].time =
				0), void 0 !== a.hierarchy[b].keys[c].rot && !(a.hierarchy[b].keys[c].rot instanceof THREE.Quaternion)) {
				var d = a.hierarchy[b].keys[c].rot;
				a.hierarchy[b].keys[c].rot = (new THREE.Quaternion).fromArray(d)
			}
			if (a.hierarchy[b].keys.length && void 0 !== a.hierarchy[b].keys[0].morphTargets) {
				d = {};
				for (c = 0; c < a.hierarchy[b].keys.length; c++)for (var e = 0; e < a.hierarchy[b].keys[c].morphTargets.length; e++) {
					var f = a.hierarchy[b].keys[c].morphTargets[e];
					d[f] = -1
				}
				a.hierarchy[b].usedMorphTargets = d;
				for (c = 0; c < a.hierarchy[b].keys.length; c++) {
					var g =
					{};
					for (f in d) {
						for (e = 0; e < a.hierarchy[b].keys[c].morphTargets.length; e++)if (a.hierarchy[b].keys[c].morphTargets[e] === f) {
							g[f] = a.hierarchy[b].keys[c].morphTargetsInfluences[e];
							break
						}
						e === a.hierarchy[b].keys[c].morphTargets.length && (g[f] = 0)
					}
					a.hierarchy[b].keys[c].morphTargetsInfluences = g
				}
			}
			for (c = 1; c < a.hierarchy[b].keys.length; c++)a.hierarchy[b].keys[c].time === a.hierarchy[b].keys[c - 1].time && (a.hierarchy[b].keys.splice(c, 1), c--);
			for (c = 0; c < a.hierarchy[b].keys.length; c++)a.hierarchy[b].keys[c].index = c
		}
		a.initialized = !0;
		return a
	}
}, parse: function (a) {
	var b = function (a, c) {
		c.push(a);
		for (var d = 0; d < a.children.length; d++)b(a.children[d], c)
	}, c = [];
	if (a instanceof THREE.SkinnedMesh)for (var d = 0; d < a.skeleton.bones.length; d++)c.push(a.skeleton.bones[d]); else b(a, c);
	return c
}, play: function (a) {
	-1 === this.animations.indexOf(a) && this.animations.push(a)
}, stop: function (a) {
	a = this.animations.indexOf(a);
	-1 !== a && this.animations.splice(a, 1)
}, update: function (a) {
	for (var b = 0; b < this.animations.length; b++)this.animations[b].update(a)
}};
THREE.Animation = function (a, b) {
	this.root = a;
	this.data = THREE.AnimationHandler.init(b);
	this.hierarchy = THREE.AnimationHandler.parse(a);
	this.currentTime = 0;
	this.timeScale = 1;
	this.isPlaying = !1;
	this.loop = !0;
	this.weight = 0;
	this.interpolationType = THREE.AnimationHandler.LINEAR
};
THREE.Animation.prototype.keyTypes = ["pos", "rot", "scl"];
THREE.Animation.prototype.play = function (a, b) {
	this.currentTime = void 0 !== a ? a : 0;
	this.weight = void 0 !== b ? b : 1;
	this.isPlaying = !0;
	this.reset();
	THREE.AnimationHandler.play(this)
};
THREE.Animation.prototype.stop = function () {
	this.isPlaying = !1;
	THREE.AnimationHandler.stop(this)
};
THREE.Animation.prototype.reset = function () {
	for (var a = 0, b = this.hierarchy.length; a < b; a++) {
		var c = this.hierarchy[a];
		c.matrixAutoUpdate = !0;
		void 0 === c.animationCache && (c.animationCache = {});
		void 0 === c.animationCache[this.data.name] && (c.animationCache[this.data.name] = {}, c.animationCache[this.data.name].prevKey = {pos: 0, rot: 0, scl: 0}, c.animationCache[this.data.name].nextKey = {pos: 0, rot: 0, scl: 0}, c.animationCache[this.data.name].originalMatrix = c.matrix);
		for (var c = c.animationCache[this.data.name], d = 0; 3 > d; d++) {
			for (var e =
				this.keyTypes[d], f = this.data.hierarchy[a].keys[0], g = this.getNextKeyWith(e, a, 1); g.time < this.currentTime && g.index > f.index;)f = g, g = this.getNextKeyWith(e, a, g.index + 1);
			c.prevKey[e] = f;
			c.nextKey[e] = g
		}
	}
};
THREE.Animation.prototype.update = function () {
	var a = [], b = new THREE.Vector3, c = new THREE.Vector3, d = new THREE.Quaternion, e = function (a, b) {
		var c = [], d = [], e, q, r, t, s, p;
		e = (a.length - 1) * b;
		q = Math.floor(e);
		e -= q;
		c[0] = 0 === q ? q : q - 1;
		c[1] = q;
		c[2] = q > a.length - 2 ? q : q + 1;
		c[3] = q > a.length - 3 ? q : q + 2;
		q = a[c[0]];
		t = a[c[1]];
		s = a[c[2]];
		p = a[c[3]];
		c = e * e;
		r = e * c;
		d[0] = f(q[0], t[0], s[0], p[0], e, c, r);
		d[1] = f(q[1], t[1], s[1], p[1], e, c, r);
		d[2] = f(q[2], t[2], s[2], p[2], e, c, r);
		return d
	}, f = function (a, b, c, d, e, f, r) {
		a = 0.5 * (c - a);
		d = 0.5 * (d - b);
		return(2 * (b - c) + a + d) *
			r + (-3 * (b - c) - 2 * a - d) * f + a * e + b
	};
	return function (f) {
		if (!1 !== this.isPlaying && (this.currentTime += f * this.timeScale, 0 !== this.weight)) {
			f = this.data.length;
			if (!0 === this.loop && this.currentTime > f)this.currentTime %= f, this.reset(); else if (!1 === this.loop && this.currentTime > f) {
				this.stop();
				return
			}
			f = 0;
			for (var h = this.hierarchy.length; f < h; f++)for (var k = this.hierarchy[f], l = k.animationCache[this.data.name], n = 0; 3 > n; n++) {
				var q = this.keyTypes[n], r = l.prevKey[q], t = l.nextKey[q];
				if (t.time <= this.currentTime) {
					r = this.data.hierarchy[f].keys[0];
					for (t = this.getNextKeyWith(q, f, 1); t.time < this.currentTime && t.index > r.index;)r = t, t = this.getNextKeyWith(q, f, t.index + 1);
					l.prevKey[q] = r;
					l.nextKey[q] = t
				}
				k.matrixAutoUpdate = !0;
				k.matrixWorldNeedsUpdate = !0;
				var s = (this.currentTime - r.time) / (t.time - r.time), p = r[q], v = t[q];
				0 > s && (s = 0);
				1 < s && (s = 1);
				if ("pos" === q)if (this.interpolationType === THREE.AnimationHandler.LINEAR)c.x = p[0] + (v[0] - p[0]) * s, c.y = p[1] + (v[1] - p[1]) * s, c.z = p[2] + (v[2] - p[2]) * s, k instanceof THREE.Bone ? (r = this.weight / (this.weight + k.accumulatedPosWeight), k.position.lerp(c,
					r), k.accumulatedPosWeight += this.weight) : k.position.copy(c); else {
					if (this.interpolationType === THREE.AnimationHandler.CATMULLROM || this.interpolationType === THREE.AnimationHandler.CATMULLROM_FORWARD)a[0] = this.getPrevKeyWith("pos", f, r.index - 1).pos, a[1] = p, a[2] = v, a[3] = this.getNextKeyWith("pos", f, t.index + 1).pos, s = 0.33 * s + 0.33, t = e(a, s), r = 1, k instanceof THREE.Bone && (r = this.weight / (this.weight + k.accumulatedPosWeight), k.accumulatedPosWeight += this.weight), q = k.position, q.x += (t[0] - q.x) * r, q.y += (t[1] - q.y) * r, q.z += (t[2] -
						q.z) * r, this.interpolationType === THREE.AnimationHandler.CATMULLROM_FORWARD && (s = e(a, 1.01 * s), b.set(s[0], s[1], s[2]), b.sub(q), b.y = 0, b.normalize(), s = Math.atan2(b.x, b.z), k.rotation.set(0, s, 0))
				} else"rot" === q ? (THREE.Quaternion.slerp(p, v, d, s), k instanceof THREE.Bone ? 0 === k.accumulatedRotWeight ? (k.quaternion.copy(d), k.accumulatedRotWeight = this.weight) : (r = this.weight / (this.weight + k.accumulatedRotWeight), THREE.Quaternion.slerp(k.quaternion, d, k.quaternion, r), k.accumulatedRotWeight += this.weight) : k.quaternion.copy(d)) :
					"scl" === q && (c.x = p[0] + (v[0] - p[0]) * s, c.y = p[1] + (v[1] - p[1]) * s, c.z = p[2] + (v[2] - p[2]) * s, k instanceof THREE.Bone ? (r = this.weight / (this.weight + k.accumulatedSclWeight), k.scale.lerp(c, r), k.accumulatedSclWeight += this.weight) : k.scale.copy(c))
			}
			return!0
		}
	}
}();
THREE.Animation.prototype.getNextKeyWith = function (a, b, c) {
	var d = this.data.hierarchy[b].keys;
	for (c = this.interpolationType === THREE.AnimationHandler.CATMULLROM || this.interpolationType === THREE.AnimationHandler.CATMULLROM_FORWARD ? c < d.length - 1 ? c : d.length - 1 : c % d.length; c < d.length; c++)if (void 0 !== d[c][a])return d[c];
	return this.data.hierarchy[b].keys[0]
};
THREE.Animation.prototype.getPrevKeyWith = function (a, b, c) {
	var d = this.data.hierarchy[b].keys;
	for (c = this.interpolationType === THREE.AnimationHandler.CATMULLROM || this.interpolationType === THREE.AnimationHandler.CATMULLROM_FORWARD ? 0 < c ? c : 0 : 0 <= c ? c : c + d.length; 0 <= c; c--)if (void 0 !== d[c][a])return d[c];
	return this.data.hierarchy[b].keys[d.length - 1]
};
THREE.KeyFrameAnimation = function (a) {
	this.root = a.node;
	this.data = THREE.AnimationHandler.init(a);
	this.hierarchy = THREE.AnimationHandler.parse(this.root);
	this.currentTime = 0;
	this.timeScale = 0.001;
	this.isPlaying = !1;
	this.loop = this.isPaused = !0;
	a = 0;
	for (var b = this.hierarchy.length; a < b; a++) {
		var c = this.data.hierarchy[a].sids, d = this.hierarchy[a];
		if (this.data.hierarchy[a].keys.length && c) {
			for (var e = 0; e < c.length; e++) {
				var f = c[e], g = this.getNextKeyWith(f, a, 0);
				g && g.apply(f)
			}
			d.matrixAutoUpdate = !1;
			this.data.hierarchy[a].node.updateMatrix();
			d.matrixWorldNeedsUpdate = !0
		}
	}
};
THREE.KeyFrameAnimation.prototype.play = function (a) {
	this.currentTime = void 0 !== a ? a : 0;
	if (!1 === this.isPlaying) {
		this.isPlaying = !0;
		var b = this.hierarchy.length, c, d;
		for (a = 0; a < b; a++)c = this.hierarchy[a], d = this.data.hierarchy[a], void 0 === d.animationCache && (d.animationCache = {}, d.animationCache.prevKey = null, d.animationCache.nextKey = null, d.animationCache.originalMatrix = c.matrix), c = this.data.hierarchy[a].keys, c.length && (d.animationCache.prevKey = c[0], d.animationCache.nextKey = c[1], this.startTime = Math.min(c[0].time,
			this.startTime), this.endTime = Math.max(c[c.length - 1].time, this.endTime));
		this.update(0)
	}
	this.isPaused = !1;
	THREE.AnimationHandler.play(this)
};
THREE.KeyFrameAnimation.prototype.stop = function () {
	this.isPaused = this.isPlaying = !1;
	THREE.AnimationHandler.stop(this);
	for (var a = 0; a < this.data.hierarchy.length; a++) {
		var b = this.hierarchy[a], c = this.data.hierarchy[a];
		if (void 0 !== c.animationCache) {
			var d = c.animationCache.originalMatrix;
			d.copy(b.matrix);
			b.matrix = d;
			delete c.animationCache
		}
	}
};
THREE.KeyFrameAnimation.prototype.update = function (a) {
	if (!1 !== this.isPlaying) {
		this.currentTime += a * this.timeScale;
		a = this.data.length;
		!0 === this.loop && this.currentTime > a && (this.currentTime %= a);
		this.currentTime = Math.min(this.currentTime, a);
		a = 0;
		for (var b = this.hierarchy.length; a < b; a++) {
			var c = this.hierarchy[a], d = this.data.hierarchy[a], e = d.keys, d = d.animationCache;
			if (e.length) {
				var f = d.prevKey, g = d.nextKey;
				if (g.time <= this.currentTime) {
					for (; g.time < this.currentTime && g.index > f.index;)f = g, g = e[f.index + 1];
					d.prevKey =
						f;
					d.nextKey = g
				}
				g.time >= this.currentTime ? f.interpolate(g, this.currentTime) : f.interpolate(g, g.time);
				this.data.hierarchy[a].node.updateMatrix();
				c.matrixWorldNeedsUpdate = !0
			}
		}
	}
};
THREE.KeyFrameAnimation.prototype.getNextKeyWith = function (a, b, c) {
	b = this.data.hierarchy[b].keys;
	for (c %= b.length; c < b.length; c++)if (b[c].hasTarget(a))return b[c];
	return b[0]
};
THREE.KeyFrameAnimation.prototype.getPrevKeyWith = function (a, b, c) {
	b = this.data.hierarchy[b].keys;
	for (c = 0 <= c ? c : c + b.length; 0 <= c; c--)if (b[c].hasTarget(a))return b[c];
	return b[b.length - 1]
};
THREE.MorphAnimation = function (a) {
	this.mesh = a;
	this.frames = a.morphTargetInfluences.length;
	this.currentTime = 0;
	this.duration = 1E3;
	this.loop = !0;
	this.isPlaying = !1
};
THREE.MorphAnimation.prototype = {play: function () {
	this.isPlaying = !0
}, pause: function () {
	this.isPlaying = !1
}, update: function () {
	var a = 0, b = 0;
	return function (c) {
		if (!1 !== this.isPlaying) {
			this.currentTime += c;
			!0 === this.loop && this.currentTime > this.duration && (this.currentTime %= this.duration);
			this.currentTime = Math.min(this.currentTime, this.duration);
			c = this.duration / this.frames;
			var d = Math.floor(this.currentTime / c);
			d != b && (this.mesh.morphTargetInfluences[a] = 0, this.mesh.morphTargetInfluences[b] = 1, this.mesh.morphTargetInfluences[d] =
				0, a = b, b = d);
			this.mesh.morphTargetInfluences[d] = this.currentTime % c / c;
			this.mesh.morphTargetInfluences[a] = 1 - this.mesh.morphTargetInfluences[d]
		}
	}
}()};
THREE.BoxGeometry = function (a, b, c, d, e, f) {
	function g(a, b, c, d, e, f, g, p) {
		var v, w = h.widthSegments, u = h.heightSegments, D = e / 2, A = f / 2, x = h.vertices.length;
		if ("x" === a && "y" === b || "y" === a && "x" === b)v = "z"; else if ("x" === a && "z" === b || "z" === a && "x" === b)v = "y", u = h.depthSegments; else if ("z" === a && "y" === b || "y" === a && "z" === b)v = "x", w = h.depthSegments;
		var C = w + 1, I = u + 1, z = e / w, y = f / u, K = new THREE.Vector3;
		K[v] = 0 < g ? 1 : -1;
		for (e = 0; e < I; e++)for (f = 0; f < C; f++) {
			var N = new THREE.Vector3;
			N[a] = (f * z - D) * c;
			N[b] = (e * y - A) * d;
			N[v] = g;
			h.vertices.push(N)
		}
		for (e =
				 0; e < u; e++)for (f = 0; f < w; f++)A = f + C * e, a = f + C * (e + 1), b = f + 1 + C * (e + 1), c = f + 1 + C * e, d = new THREE.Vector2(f / w, 1 - e / u), g = new THREE.Vector2(f / w, 1 - (e + 1) / u), v = new THREE.Vector2((f + 1) / w, 1 - (e + 1) / u), D = new THREE.Vector2((f + 1) / w, 1 - e / u), A = new THREE.Face3(A + x, a + x, c + x), A.normal.copy(K), A.vertexNormals.push(K.clone(), K.clone(), K.clone()), A.materialIndex = p, h.faces.push(A), h.faceVertexUvs[0].push([d, g, D]), A = new THREE.Face3(a + x, b + x, c + x), A.normal.copy(K), A.vertexNormals.push(K.clone(), K.clone(), K.clone()), A.materialIndex = p, h.faces.push(A),
			h.faceVertexUvs[0].push([g.clone(), v, D.clone()])
	}

	THREE.Geometry.call(this);
	this.parameters = {width: a, height: b, depth: c, widthSegments: d, heightSegments: e, depthSegments: f};
	this.widthSegments = d || 1;
	this.heightSegments = e || 1;
	this.depthSegments = f || 1;
	var h = this;
	d = a / 2;
	e = b / 2;
	f = c / 2;
	g("z", "y", -1, -1, c, b, d, 0);
	g("z", "y", 1, -1, c, b, -d, 1);
	g("x", "z", 1, 1, a, c, e, 2);
	g("x", "z", 1, -1, a, c, -e, 3);
	g("x", "y", 1, -1, a, b, f, 4);
	g("x", "y", -1, -1, a, b, -f, 5);
	this.mergeVertices()
};
THREE.BoxGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.CircleGeometry = function (a, b, c, d) {
	THREE.Geometry.call(this);
	this.parameters = {radius: a, segments: b, thetaStart: c, thetaLength: d};
	a = a || 50;
	b = void 0 !== b ? Math.max(3, b) : 8;
	c = void 0 !== c ? c : 0;
	d = void 0 !== d ? d : 2 * Math.PI;
	var e, f = [];
	e = new THREE.Vector3;
	var g = new THREE.Vector2(0.5, 0.5);
	this.vertices.push(e);
	f.push(g);
	for (e = 0; e <= b; e++) {
		var h = new THREE.Vector3, k = c + e / b * d;
		h.x = a * Math.cos(k);
		h.y = a * Math.sin(k);
		this.vertices.push(h);
		f.push(new THREE.Vector2((h.x / a + 1) / 2, (h.y / a + 1) / 2))
	}
	c = new THREE.Vector3(0, 0, 1);
	for (e = 1; e <=
		b; e++)this.faces.push(new THREE.Face3(e, e + 1, 0, [c.clone(), c.clone(), c.clone()])), this.faceVertexUvs[0].push([f[e].clone(), f[e + 1].clone(), g.clone()]);
	this.computeFaceNormals();
	this.boundingSphere = new THREE.Sphere(new THREE.Vector3, a)
};
THREE.CircleGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.CubeGeometry = function (a, b, c, d, e, f) {
	console.warn("THEE.CubeGeometry has been renamed to THREE.BoxGeometry.");
	return new THREE.BoxGeometry(a, b, c, d, e, f)
};
THREE.CylinderGeometry = function (a, b, c, d, e, f) {
	THREE.Geometry.call(this);
	this.parameters = {radiusTop: a, radiusBottom: b, height: c, radialSegments: d, heightSegments: e, openEnded: f};
	a = void 0 !== a ? a : 20;
	b = void 0 !== b ? b : 20;
	c = void 0 !== c ? c : 100;
	d = d || 8;
	e = e || 1;
	f = void 0 !== f ? f : !1;
	var g = c / 2, h, k, l = [], n = [];
	for (k = 0; k <= e; k++) {
		var q = [], r = [], t = k / e, s = t * (b - a) + a;
		for (h = 0; h <= d; h++) {
			var p = h / d, v = new THREE.Vector3;
			v.x = s * Math.sin(p * Math.PI * 2);
			v.y = -t * c + g;
			v.z = s * Math.cos(p * Math.PI * 2);
			this.vertices.push(v);
			q.push(this.vertices.length - 1);
			r.push(new THREE.Vector2(p,
				1 - t))
		}
		l.push(q);
		n.push(r)
	}
	c = (b - a) / c;
	for (h = 0; h < d; h++)for (0 !== a ? (q = this.vertices[l[0][h]].clone(), r = this.vertices[l[0][h + 1]].clone()) : (q = this.vertices[l[1][h]].clone(), r = this.vertices[l[1][h + 1]].clone()), q.setY(Math.sqrt(q.x * q.x + q.z * q.z) * c).normalize(), r.setY(Math.sqrt(r.x * r.x + r.z * r.z) * c).normalize(), k = 0; k < e; k++) {
		var t = l[k][h], s = l[k + 1][h], p = l[k + 1][h + 1], v = l[k][h + 1], w = q.clone(), u = q.clone(), D = r.clone(), A = r.clone(), x = n[k][h].clone(), C = n[k + 1][h].clone(), I = n[k + 1][h + 1].clone(), z = n[k][h + 1].clone();
		this.faces.push(new THREE.Face3(t,
			s, v, [w, u, A]));
		this.faceVertexUvs[0].push([x, C, z]);
		this.faces.push(new THREE.Face3(s, p, v, [u.clone(), D, A.clone()]));
		this.faceVertexUvs[0].push([C.clone(), I, z.clone()])
	}
	if (!1 === f && 0 < a)for (this.vertices.push(new THREE.Vector3(0, g, 0)), h = 0; h < d; h++)t = l[0][h], s = l[0][h + 1], p = this.vertices.length - 1, w = new THREE.Vector3(0, 1, 0), u = new THREE.Vector3(0, 1, 0), D = new THREE.Vector3(0, 1, 0), x = n[0][h].clone(), C = n[0][h + 1].clone(), I = new THREE.Vector2(C.x, 0), this.faces.push(new THREE.Face3(t, s, p, [w, u, D])), this.faceVertexUvs[0].push([x,
		C, I]);
	if (!1 === f && 0 < b)for (this.vertices.push(new THREE.Vector3(0, -g, 0)), h = 0; h < d; h++)t = l[k][h + 1], s = l[k][h], p = this.vertices.length - 1, w = new THREE.Vector3(0, -1, 0), u = new THREE.Vector3(0, -1, 0), D = new THREE.Vector3(0, -1, 0), x = n[k][h + 1].clone(), C = n[k][h].clone(), I = new THREE.Vector2(C.x, 1), this.faces.push(new THREE.Face3(t, s, p, [w, u, D])), this.faceVertexUvs[0].push([x, C, I]);
	this.computeFaceNormals()
};
THREE.CylinderGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.ExtrudeGeometry = function (a, b) {
	"undefined" !== typeof a && (THREE.Geometry.call(this), a = a instanceof Array ? a : [a], this.addShapeList(a, b), this.computeFaceNormals())
};
THREE.ExtrudeGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.ExtrudeGeometry.prototype.addShapeList = function (a, b) {
	for (var c = a.length, d = 0; d < c; d++)this.addShape(a[d], b)
};
THREE.ExtrudeGeometry.prototype.addShape = function (a, b) {
	function c(a, b, c) {
		b || console.log("die");
		return b.clone().multiplyScalar(c).add(a)
	}

	function d(a, b, c) {
		var d = THREE.Math.sign, e = 1, e = a.x - b.x, f = a.y - b.y, g = c.x - a.x, h = c.y - a.y, k = e * e + f * f;
		if (1E-10 < Math.abs(e * h - f * g)) {
			var l = Math.sqrt(k), d = Math.sqrt(g * g + h * h), k = b.x - f / l;
			b = b.y + e / l;
			g = ((c.x - h / d - k) * h - (c.y + g / d - b) * g) / (e * h - f * g);
			c = k + e * g - a.x;
			a = b + f * g - a.y;
			e = c * c + a * a;
			if (2 >= e)return new THREE.Vector2(c, a);
			e = Math.sqrt(e / 2)
		} else a = !1, 1E-10 < e ? 1E-10 < g && (a = !0) : -1E-10 > e ? -1E-10 > g &&
			(a = !0) : d(f) == d(h) && (a = !0), a ? (c = -f, a = e, e = Math.sqrt(k)) : (c = e, a = f, e = Math.sqrt(k / 2));
		return new THREE.Vector2(c / e, a / e)
	}

	function e(c, d) {
		var e, f;
		for (H = c.length; 0 <= --H;) {
			e = H;
			f = H - 1;
			0 > f && (f = c.length - 1);
			for (var g = 0, h = t + 2 * n, g = 0; g < h; g++) {
				var k = S * g, l = S * (g + 1), p = d + e + k, k = d + f + k, q = d + f + l, l = d + e + l, r = c, s = g, v = h, w = e, x = f, p = p + ba, k = k + ba, q = q + ba, l = l + ba;
				N.faces.push(new THREE.Face3(p, k, l, null, null, u));
				N.faces.push(new THREE.Face3(k, q, l, null, null, u));
				p = D.generateSideWallUV(N, a, r, b, p, k, q, l, s, v, w, x);
				N.faceVertexUvs[0].push([p[0],
					p[1], p[3]]);
				N.faceVertexUvs[0].push([p[1], p[2], p[3]])
			}
		}
	}

	function f(a, b, c) {
		N.vertices.push(new THREE.Vector3(a, b, c))
	}

	function g(c, d, e, f) {
		c += ba;
		d += ba;
		e += ba;
		N.faces.push(new THREE.Face3(c, d, e, null, null, w));
		c = f ? D.generateBottomUV(N, a, b, c, d, e) : D.generateTopUV(N, a, b, c, d, e);
		N.faceVertexUvs[0].push(c)
	}

	var h = void 0 !== b.amount ? b.amount : 100, k = void 0 !== b.bevelThickness ? b.bevelThickness : 6, l = void 0 !== b.bevelSize ? b.bevelSize : k - 2, n = void 0 !== b.bevelSegments ? b.bevelSegments : 3, q = void 0 !== b.bevelEnabled ? b.bevelEnabled :
		!0, r = void 0 !== b.curveSegments ? b.curveSegments : 12, t = void 0 !== b.steps ? b.steps : 1, s = b.extrudePath, p, v = !1, w = b.material, u = b.extrudeMaterial, D = void 0 !== b.UVGenerator ? b.UVGenerator : THREE.ExtrudeGeometry.WorldUVGenerator, A, x, C, I;
	s && (p = s.getSpacedPoints(t), v = !0, q = !1, A = void 0 !== b.frames ? b.frames : new THREE.TubeGeometry.FrenetFrames(s, t, !1), x = new THREE.Vector3, C = new THREE.Vector3, I = new THREE.Vector3);
	q || (l = k = n = 0);
	var z, y, K, N = this, ba = this.vertices.length, s = a.extractPoints(r), r = s.shape, P = s.holes;
	if (s = !THREE.Shape.Utils.isClockWise(r)) {
		r =
			r.reverse();
		y = 0;
		for (K = P.length; y < K; y++)z = P[y], THREE.Shape.Utils.isClockWise(z) && (P[y] = z.reverse());
		s = !1
	}
	var O = THREE.Shape.Utils.triangulateShape(r, P), J = r;
	y = 0;
	for (K = P.length; y < K; y++)z = P[y], r = r.concat(z);
	var E, Q, L, R, B, S = r.length, V, W = O.length, s = [], H = 0;
	L = J.length;
	E = L - 1;
	for (Q = H + 1; H < L; H++, E++, Q++)E === L && (E = 0), Q === L && (Q = 0), s[H] = d(J[H], J[E], J[Q]);
	var oa = [], $, X = s.concat();
	y = 0;
	for (K = P.length; y < K; y++) {
		z = P[y];
		$ = [];
		H = 0;
		L = z.length;
		E = L - 1;
		for (Q = H + 1; H < L; H++, E++, Q++)E === L && (E = 0), Q === L && (Q = 0), $[H] = d(z[H], z[E], z[Q]);
		oa.push($);
		X = X.concat($)
	}
	for (E = 0; E < n; E++) {
		L = E / n;
		R = k * (1 - L);
		Q = l * Math.sin(L * Math.PI / 2);
		H = 0;
		for (L = J.length; H < L; H++)B = c(J[H], s[H], Q), f(B.x, B.y, -R);
		y = 0;
		for (K = P.length; y < K; y++)for (z = P[y], $ = oa[y], H = 0, L = z.length; H < L; H++)B = c(z[H], $[H], Q), f(B.x, B.y, -R)
	}
	Q = l;
	for (H = 0; H < S; H++)B = q ? c(r[H], X[H], Q) : r[H], v ? (C.copy(A.normals[0]).multiplyScalar(B.x), x.copy(A.binormals[0]).multiplyScalar(B.y), I.copy(p[0]).add(C).add(x), f(I.x, I.y, I.z)) : f(B.x, B.y, 0);
	for (L = 1; L <= t; L++)for (H = 0; H < S; H++)B = q ? c(r[H], X[H], Q) : r[H], v ? (C.copy(A.normals[L]).multiplyScalar(B.x),
		x.copy(A.binormals[L]).multiplyScalar(B.y), I.copy(p[L]).add(C).add(x), f(I.x, I.y, I.z)) : f(B.x, B.y, h / t * L);
	for (E = n - 1; 0 <= E; E--) {
		L = E / n;
		R = k * (1 - L);
		Q = l * Math.sin(L * Math.PI / 2);
		H = 0;
		for (L = J.length; H < L; H++)B = c(J[H], s[H], Q), f(B.x, B.y, h + R);
		y = 0;
		for (K = P.length; y < K; y++)for (z = P[y], $ = oa[y], H = 0, L = z.length; H < L; H++)B = c(z[H], $[H], Q), v ? f(B.x, B.y + p[t - 1].y, p[t - 1].x + R) : f(B.x, B.y, h + R)
	}
	(function () {
		if (q) {
			var a;
			a = 0 * S;
			for (H = 0; H < W; H++)V = O[H], g(V[2] + a, V[1] + a, V[0] + a, !0);
			a = t + 2 * n;
			a *= S;
			for (H = 0; H < W; H++)V = O[H], g(V[0] + a, V[1] + a, V[2] + a, !1)
		} else {
			for (H =
					 0; H < W; H++)V = O[H], g(V[2], V[1], V[0], !0);
			for (H = 0; H < W; H++)V = O[H], g(V[0] + S * t, V[1] + S * t, V[2] + S * t, !1)
		}
	})();
	(function () {
		var a = 0;
		e(J, a);
		a += J.length;
		y = 0;
		for (K = P.length; y < K; y++)z = P[y], e(z, a), a += z.length
	})()
};
THREE.ExtrudeGeometry.WorldUVGenerator = {generateTopUV: function (a, b, c, d, e, f) {
	b = a.vertices[e].x;
	e = a.vertices[e].y;
	c = a.vertices[f].x;
	f = a.vertices[f].y;
	return[new THREE.Vector2(a.vertices[d].x, a.vertices[d].y), new THREE.Vector2(b, e), new THREE.Vector2(c, f)]
}, generateBottomUV: function (a, b, c, d, e, f) {
	return this.generateTopUV(a, b, c, d, e, f)
}, generateSideWallUV: function (a, b, c, d, e, f, g, h, k, l, n, q) {
	b = a.vertices[e].x;
	c = a.vertices[e].y;
	e = a.vertices[e].z;
	d = a.vertices[f].x;
	k = a.vertices[f].y;
	f = a.vertices[f].z;
	l = a.vertices[g].x;
	n = a.vertices[g].y;
	g = a.vertices[g].z;
	q = a.vertices[h].x;
	var r = a.vertices[h].y;
	a = a.vertices[h].z;
	return 0.01 > Math.abs(c - k) ? [new THREE.Vector2(b, 1 - e), new THREE.Vector2(d, 1 - f), new THREE.Vector2(l, 1 - g), new THREE.Vector2(q, 1 - a)] : [new THREE.Vector2(c, 1 - e), new THREE.Vector2(k, 1 - f), new THREE.Vector2(n, 1 - g), new THREE.Vector2(r, 1 - a)]
}};
THREE.ExtrudeGeometry.__v1 = new THREE.Vector2;
THREE.ExtrudeGeometry.__v2 = new THREE.Vector2;
THREE.ExtrudeGeometry.__v3 = new THREE.Vector2;
THREE.ExtrudeGeometry.__v4 = new THREE.Vector2;
THREE.ExtrudeGeometry.__v5 = new THREE.Vector2;
THREE.ExtrudeGeometry.__v6 = new THREE.Vector2;
THREE.ShapeGeometry = function (a, b) {
	THREE.Geometry.call(this);
	!1 === a instanceof Array && (a = [a]);
	this.addShapeList(a, b);
	this.computeFaceNormals()
};
THREE.ShapeGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.ShapeGeometry.prototype.addShapeList = function (a, b) {
	for (var c = 0, d = a.length; c < d; c++)this.addShape(a[c], b);
	return this
};
THREE.ShapeGeometry.prototype.addShape = function (a, b) {
	void 0 === b && (b = {});
	var c = b.material, d = void 0 === b.UVGenerator ? THREE.ExtrudeGeometry.WorldUVGenerator : b.UVGenerator, e, f, g, h = this.vertices.length;
	e = a.extractPoints(void 0 !== b.curveSegments ? b.curveSegments : 12);
	var k = e.shape, l = e.holes;
	if (!THREE.Shape.Utils.isClockWise(k))for (k = k.reverse(), e = 0, f = l.length; e < f; e++)g = l[e], THREE.Shape.Utils.isClockWise(g) && (l[e] = g.reverse());
	var n = THREE.Shape.Utils.triangulateShape(k, l);
	e = 0;
	for (f = l.length; e < f; e++)g = l[e],
		k = k.concat(g);
	l = k.length;
	f = n.length;
	for (e = 0; e < l; e++)g = k[e], this.vertices.push(new THREE.Vector3(g.x, g.y, 0));
	for (e = 0; e < f; e++)l = n[e], k = l[0] + h, g = l[1] + h, l = l[2] + h, this.faces.push(new THREE.Face3(k, g, l, null, null, c)), this.faceVertexUvs[0].push(d.generateBottomUV(this, a, b, k, g, l))
};
THREE.LatheGeometry = function (a, b, c, d) {
	THREE.Geometry.call(this);
	b = b || 12;
	c = c || 0;
	d = d || 2 * Math.PI;
	for (var e = 1 / (a.length - 1), f = 1 / b, g = 0, h = b; g <= h; g++)for (var k = c + g * f * d, l = Math.cos(k), n = Math.sin(k), k = 0, q = a.length; k < q; k++) {
		var r = a[k], t = new THREE.Vector3;
		t.x = l * r.x - n * r.y;
		t.y = n * r.x + l * r.y;
		t.z = r.z;
		this.vertices.push(t)
	}
	c = a.length;
	g = 0;
	for (h = b; g < h; g++)for (k = 0, q = a.length - 1; k < q; k++) {
		b = n = k + c * g;
		d = n + c;
		var l = n + 1 + c, n = n + 1, r = g * f, t = k * e, s = r + f, p = t + e;
		this.faces.push(new THREE.Face3(b, d, n));
		this.faceVertexUvs[0].push([new THREE.Vector2(r,
			t), new THREE.Vector2(s, t), new THREE.Vector2(r, p)]);
		this.faces.push(new THREE.Face3(d, l, n));
		this.faceVertexUvs[0].push([new THREE.Vector2(s, t), new THREE.Vector2(s, p), new THREE.Vector2(r, p)])
	}
	this.mergeVertices();
	this.computeFaceNormals();
	this.computeVertexNormals()
};
THREE.LatheGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.PlaneGeometry = function (a, b, c, d) {
	THREE.Geometry.call(this);
	this.parameters = {width: a, height: b, widthSegments: c, heightSegments: d};
	var e = a / 2, f = b / 2;
	c = c || 1;
	d = d || 1;
	var g = c + 1, h = d + 1, k = a / c, l = b / d, n = new THREE.Vector3(0, 0, 1);
	for (a = 0; a < h; a++) {
		var q = a * l - f;
		for (b = 0; b < g; b++)this.vertices.push(new THREE.Vector3(b * k - e, -q, 0))
	}
	for (a = 0; a < d; a++)for (b = 0; b < c; b++) {
		var r = b + g * a, e = b + g * (a + 1), f = b + 1 + g * (a + 1), h = b + 1 + g * a, k = new THREE.Vector2(b / c, 1 - a / d), l = new THREE.Vector2(b / c, 1 - (a + 1) / d), q = new THREE.Vector2((b + 1) / c, 1 - (a + 1) / d), t = new THREE.Vector2((b +
			1) / c, 1 - a / d), r = new THREE.Face3(r, e, h);
		r.normal.copy(n);
		r.vertexNormals.push(n.clone(), n.clone(), n.clone());
		this.faces.push(r);
		this.faceVertexUvs[0].push([k, l, t]);
		r = new THREE.Face3(e, f, h);
		r.normal.copy(n);
		r.vertexNormals.push(n.clone(), n.clone(), n.clone());
		this.faces.push(r);
		this.faceVertexUvs[0].push([l.clone(), q, t.clone()])
	}
};
THREE.PlaneGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.RingGeometry = function (a, b, c, d, e, f) {
	THREE.Geometry.call(this);
	a = a || 0;
	b = b || 50;
	e = void 0 !== e ? e : 0;
	f = void 0 !== f ? f : 2 * Math.PI;
	c = void 0 !== c ? Math.max(3, c) : 8;
	d = void 0 !== d ? Math.max(1, d) : 8;
	var g, h = [], k = a, l = (b - a) / d;
	for (a = 0; a < d + 1; a++) {
		for (g = 0; g < c + 1; g++) {
			var n = new THREE.Vector3, q = e + g / c * f;
			n.x = k * Math.cos(q);
			n.y = k * Math.sin(q);
			this.vertices.push(n);
			h.push(new THREE.Vector2((n.x / b + 1) / 2, (n.y / b + 1) / 2))
		}
		k += l
	}
	b = new THREE.Vector3(0, 0, 1);
	for (a = 0; a < d; a++)for (e = a * (c + 1), g = 0; g < c; g++)f = q = g + e, l = q + c + 1, n = q + c + 2, this.faces.push(new THREE.Face3(f,
		l, n, [b.clone(), b.clone(), b.clone()])), this.faceVertexUvs[0].push([h[f].clone(), h[l].clone(), h[n].clone()]), f = q, l = q + c + 2, n = q + 1, this.faces.push(new THREE.Face3(f, l, n, [b.clone(), b.clone(), b.clone()])), this.faceVertexUvs[0].push([h[f].clone(), h[l].clone(), h[n].clone()]);
	this.computeFaceNormals();
	this.boundingSphere = new THREE.Sphere(new THREE.Vector3, k)
};
THREE.RingGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.SphereGeometry = function (a, b, c, d, e, f, g) {
	THREE.Geometry.call(this);
	this.parameters = {radius: a, widthSegments: b, heightSegments: c, phiStart: d, phiLength: e, thetaStart: f, thetaLength: g};
	a = a || 50;
	b = Math.max(3, Math.floor(b) || 8);
	c = Math.max(2, Math.floor(c) || 6);
	d = void 0 !== d ? d : 0;
	e = void 0 !== e ? e : 2 * Math.PI;
	f = void 0 !== f ? f : 0;
	g = void 0 !== g ? g : Math.PI;
	var h, k, l = [], n = [];
	for (k = 0; k <= c; k++) {
		var q = [], r = [];
		for (h = 0; h <= b; h++) {
			var t = h / b, s = k / c, p = new THREE.Vector3;
			p.x = -a * Math.cos(d + t * e) * Math.sin(f + s * g);
			p.y = a * Math.cos(f + s * g);
			p.z =
				a * Math.sin(d + t * e) * Math.sin(f + s * g);
			this.vertices.push(p);
			q.push(this.vertices.length - 1);
			r.push(new THREE.Vector2(t, 1 - s))
		}
		l.push(q);
		n.push(r)
	}
	for (k = 0; k < c; k++)for (h = 0; h < b; h++) {
		d = l[k][h + 1];
		e = l[k][h];
		f = l[k + 1][h];
		g = l[k + 1][h + 1];
		var q = this.vertices[d].clone().normalize(), r = this.vertices[e].clone().normalize(), t = this.vertices[f].clone().normalize(), s = this.vertices[g].clone().normalize(), p = n[k][h + 1].clone(), v = n[k][h].clone(), w = n[k + 1][h].clone(), u = n[k + 1][h + 1].clone();
		Math.abs(this.vertices[d].y) === a ? (p.x = (p.x +
			v.x) / 2, this.faces.push(new THREE.Face3(d, f, g, [q, t, s])), this.faceVertexUvs[0].push([p, w, u])) : Math.abs(this.vertices[f].y) === a ? (w.x = (w.x + u.x) / 2, this.faces.push(new THREE.Face3(d, e, f, [q, r, t])), this.faceVertexUvs[0].push([p, v, w])) : (this.faces.push(new THREE.Face3(d, e, g, [q, r, s])), this.faceVertexUvs[0].push([p, v, u]), this.faces.push(new THREE.Face3(e, f, g, [r.clone(), t, s.clone()])), this.faceVertexUvs[0].push([v.clone(), w, u.clone()]))
	}
	this.computeFaceNormals();
	this.boundingSphere = new THREE.Sphere(new THREE.Vector3,
		a)
};
THREE.SphereGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.TextGeometry = function (a, b) {
	b = b || {};
	var c = THREE.FontUtils.generateShapes(a, b);
	b.amount = void 0 !== b.height ? b.height : 50;
	void 0 === b.bevelThickness && (b.bevelThickness = 10);
	void 0 === b.bevelSize && (b.bevelSize = 8);
	void 0 === b.bevelEnabled && (b.bevelEnabled = !1);
	THREE.ExtrudeGeometry.call(this, c, b)
};
THREE.TextGeometry.prototype = Object.create(THREE.ExtrudeGeometry.prototype);
THREE.TorusGeometry = function (a, b, c, d, e) {
	THREE.Geometry.call(this);
	this.parameters = {radius: a, tube: b, radialSegments: c, tubularSegments: d, arc: e};
	a = a || 100;
	b = b || 40;
	c = c || 8;
	d = d || 6;
	e = e || 2 * Math.PI;
	for (var f = new THREE.Vector3, g = [], h = [], k = 0; k <= c; k++)for (var l = 0; l <= d; l++) {
		var n = l / d * e, q = k / c * Math.PI * 2;
		f.x = a * Math.cos(n);
		f.y = a * Math.sin(n);
		var r = new THREE.Vector3;
		r.x = (a + b * Math.cos(q)) * Math.cos(n);
		r.y = (a + b * Math.cos(q)) * Math.sin(n);
		r.z = b * Math.sin(q);
		this.vertices.push(r);
		g.push(new THREE.Vector2(l / d, k / c));
		h.push(r.clone().sub(f).normalize())
	}
	for (k =
			 1; k <= c; k++)for (l = 1; l <= d; l++)a = (d + 1) * k + l - 1, b = (d + 1) * (k - 1) + l - 1, e = (d + 1) * (k - 1) + l, f = (d + 1) * k + l, n = new THREE.Face3(a, b, f, [h[a].clone(), h[b].clone(), h[f].clone()]), this.faces.push(n), this.faceVertexUvs[0].push([g[a].clone(), g[b].clone(), g[f].clone()]), n = new THREE.Face3(b, e, f, [h[b].clone(), h[e].clone(), h[f].clone()]), this.faces.push(n), this.faceVertexUvs[0].push([g[b].clone(), g[e].clone(), g[f].clone()]);
	this.computeFaceNormals()
};
THREE.TorusGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.TorusKnotGeometry = function (a, b, c, d, e, f, g) {
	function h(a, b, c, d, e) {
		var f = Math.cos(a), g = Math.sin(a);
		a *= b / c;
		b = Math.cos(a);
		f *= d * (2 + b) * 0.5;
		g = d * (2 + b) * g * 0.5;
		d = e * d * Math.sin(a) * 0.5;
		return new THREE.Vector3(f, g, d)
	}

	THREE.Geometry.call(this);
	this.parameters = {radius: a, tube: b, radialSegments: c, tubularSegments: d, p: e, q: f, heightScale: g};
	a = a || 100;
	b = b || 40;
	c = c || 64;
	d = d || 8;
	e = e || 2;
	f = f || 3;
	g = g || 1;
	for (var k = Array(c), l = new THREE.Vector3, n = new THREE.Vector3, q = new THREE.Vector3, r = 0; r < c; ++r) {
		k[r] = Array(d);
		var t = r / c * 2 * e * Math.PI,
			s = h(t, f, e, a, g), t = h(t + 0.01, f, e, a, g);
		l.subVectors(t, s);
		n.addVectors(t, s);
		q.crossVectors(l, n);
		n.crossVectors(q, l);
		q.normalize();
		n.normalize();
		for (t = 0; t < d; ++t) {
			var p = t / d * 2 * Math.PI, v = -b * Math.cos(p), p = b * Math.sin(p), w = new THREE.Vector3;
			w.x = s.x + v * n.x + p * q.x;
			w.y = s.y + v * n.y + p * q.y;
			w.z = s.z + v * n.z + p * q.z;
			k[r][t] = this.vertices.push(w) - 1
		}
	}
	for (r = 0; r < c; ++r)for (t = 0; t < d; ++t)e = (r + 1) % c, f = (t + 1) % d, a = k[r][t], b = k[e][t], e = k[e][f], f = k[r][f], g = new THREE.Vector2(r / c, t / d), l = new THREE.Vector2((r + 1) / c, t / d), n = new THREE.Vector2((r + 1) /
		c, (t + 1) / d), q = new THREE.Vector2(r / c, (t + 1) / d), this.faces.push(new THREE.Face3(a, b, f)), this.faceVertexUvs[0].push([g, l, q]), this.faces.push(new THREE.Face3(b, e, f)), this.faceVertexUvs[0].push([l.clone(), n, q.clone()]);
	this.computeFaceNormals();
	this.computeVertexNormals()
};
THREE.TorusKnotGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.TubeGeometry = function (a, b, c, d, e) {
	THREE.Geometry.call(this);
	this.parameters = {path: a, segments: b, radius: c, radialSegments: d, closed: e};
	b = b || 64;
	c = c || 1;
	d = d || 8;
	e = e || !1;
	var f = [], g, h, k = b + 1, l, n, q, r, t = new THREE.Vector3, s, p, v;
	s = new THREE.TubeGeometry.FrenetFrames(a, b, e);
	p = s.normals;
	v = s.binormals;
	this.tangents = s.tangents;
	this.normals = p;
	this.binormals = v;
	for (s = 0; s < k; s++)for (f[s] = [], l = s / (k - 1), r = a.getPointAt(l), g = p[s], h = v[s], l = 0; l < d; l++)n = l / d * 2 * Math.PI, q = -c * Math.cos(n), n = c * Math.sin(n), t.copy(r), t.x += q * g.x + n *
		h.x, t.y += q * g.y + n * h.y, t.z += q * g.z + n * h.z, f[s][l] = this.vertices.push(new THREE.Vector3(t.x, t.y, t.z)) - 1;
	for (s = 0; s < b; s++)for (l = 0; l < d; l++)k = e ? (s + 1) % b : s + 1, t = (l + 1) % d, a = f[s][l], c = f[k][l], k = f[k][t], t = f[s][t], p = new THREE.Vector2(s / b, l / d), v = new THREE.Vector2((s + 1) / b, l / d), g = new THREE.Vector2((s + 1) / b, (l + 1) / d), h = new THREE.Vector2(s / b, (l + 1) / d), this.faces.push(new THREE.Face3(a, c, t)), this.faceVertexUvs[0].push([p, v, h]), this.faces.push(new THREE.Face3(c, k, t)), this.faceVertexUvs[0].push([v.clone(), g, h.clone()]);
	this.computeFaceNormals();
	this.computeVertexNormals()
};
THREE.TubeGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.TubeGeometry.FrenetFrames = function (a, b, c) {
	new THREE.Vector3;
	var d = new THREE.Vector3;
	new THREE.Vector3;
	var e = [], f = [], g = [], h = new THREE.Vector3, k = new THREE.Matrix4;
	b += 1;
	var l, n, q;
	this.tangents = e;
	this.normals = f;
	this.binormals = g;
	for (l = 0; l < b; l++)n = l / (b - 1), e[l] = a.getTangentAt(n), e[l].normalize();
	f[0] = new THREE.Vector3;
	g[0] = new THREE.Vector3;
	a = Number.MAX_VALUE;
	l = Math.abs(e[0].x);
	n = Math.abs(e[0].y);
	q = Math.abs(e[0].z);
	l <= a && (a = l, d.set(1, 0, 0));
	n <= a && (a = n, d.set(0, 1, 0));
	q <= a && d.set(0, 0, 1);
	h.crossVectors(e[0],
		d).normalize();
	f[0].crossVectors(e[0], h);
	g[0].crossVectors(e[0], f[0]);
	for (l = 1; l < b; l++)f[l] = f[l - 1].clone(), g[l] = g[l - 1].clone(), h.crossVectors(e[l - 1], e[l]), 1E-4 < h.length() && (h.normalize(), d = Math.acos(THREE.Math.clamp(e[l - 1].dot(e[l]), -1, 1)), f[l].applyMatrix4(k.makeRotationAxis(h, d))), g[l].crossVectors(e[l], f[l]);
	if (c)for (d = Math.acos(THREE.Math.clamp(f[0].dot(f[b - 1]), -1, 1)), d /= b - 1, 0 < e[0].dot(h.crossVectors(f[0], f[b - 1])) && (d = -d), l = 1; l < b; l++)f[l].applyMatrix4(k.makeRotationAxis(e[l], d * l)), g[l].crossVectors(e[l],
		f[l])
};
THREE.PolyhedronGeometry = function (a, b, c, d) {
	function e(a) {
		var b = a.normalize().clone();
		b.index = k.vertices.push(b) - 1;
		var c = Math.atan2(a.z, -a.x) / 2 / Math.PI + 0.5;
		a = Math.atan2(-a.y, Math.sqrt(a.x * a.x + a.z * a.z)) / Math.PI + 0.5;
		b.uv = new THREE.Vector2(c, 1 - a);
		return b
	}

	function f(a, b, c) {
		var d = new THREE.Face3(a.index, b.index, c.index, [a.clone(), b.clone(), c.clone()]);
		k.faces.push(d);
		v.copy(a).add(b).add(c).divideScalar(3);
		d = Math.atan2(v.z, -v.x);
		k.faceVertexUvs[0].push([h(a.uv, a, d), h(b.uv, b, d), h(c.uv, c, d)])
	}

	function g(a, b) {
		var c =
			Math.pow(2, b);
		Math.pow(4, b);
		for (var d = e(k.vertices[a.a]), g = e(k.vertices[a.b]), h = e(k.vertices[a.c]), l = [], n = 0; n <= c; n++) {
			l[n] = [];
			for (var p = e(d.clone().lerp(h, n / c)), q = e(g.clone().lerp(h, n / c)), r = c - n, s = 0; s <= r; s++)l[n][s] = 0 == s && n == c ? p : e(p.clone().lerp(q, s / r))
		}
		for (n = 0; n < c; n++)for (s = 0; s < 2 * (c - n) - 1; s++)d = Math.floor(s / 2), 0 == s % 2 ? f(l[n][d + 1], l[n + 1][d], l[n][d]) : f(l[n][d + 1], l[n + 1][d + 1], l[n + 1][d])
	}

	function h(a, b, c) {
		0 > c && 1 === a.x && (a = new THREE.Vector2(a.x - 1, a.y));
		0 === b.x && 0 === b.z && (a = new THREE.Vector2(c / 2 / Math.PI + 0.5,
			a.y));
		return a.clone()
	}

	THREE.Geometry.call(this);
	c = c || 1;
	d = d || 0;
	for (var k = this, l = 0, n = a.length; l < n; l += 3)e(new THREE.Vector3(a[l], a[l + 1], a[l + 2]));
	a = this.vertices;
	for (var q = [], r = l = 0, n = b.length; l < n; l += 3, r++) {
		var t = a[b[l]], s = a[b[l + 1]], p = a[b[l + 2]];
		q[r] = new THREE.Face3(t.index, s.index, p.index, [t.clone(), s.clone(), p.clone()])
	}
	for (var v = new THREE.Vector3, l = 0, n = q.length; l < n; l++)g(q[l], d);
	l = 0;
	for (n = this.faceVertexUvs[0].length; l < n; l++)b = this.faceVertexUvs[0][l], d = b[0].x, a = b[1].x, q = b[2].x, r = Math.max(d, Math.max(a,
		q)), t = Math.min(d, Math.min(a, q)), 0.9 < r && 0.1 > t && (0.2 > d && (b[0].x += 1), 0.2 > a && (b[1].x += 1), 0.2 > q && (b[2].x += 1));
	l = 0;
	for (n = this.vertices.length; l < n; l++)this.vertices[l].multiplyScalar(c);
	this.mergeVertices();
	this.computeFaceNormals();
	this.boundingSphere = new THREE.Sphere(new THREE.Vector3, c)
};
THREE.PolyhedronGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.IcosahedronGeometry = function (a, b) {
	this.parameters = {radius: a, detail: b};
	var c = (1 + Math.sqrt(5)) / 2;
	THREE.PolyhedronGeometry.call(this, [-1, c, 0, 1, c, 0, -1, -c, 0, 1, -c, 0, 0, -1, c, 0, 1, c, 0, -1, -c, 0, 1, -c, c, 0, -1, c, 0, 1, -c, 0, -1, -c, 0, 1], [0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11, 1, 5, 9, 5, 11, 4, 11, 10, 2, 10, 7, 6, 7, 1, 8, 3, 9, 4, 3, 4, 2, 3, 2, 6, 3, 6, 8, 3, 8, 9, 4, 9, 5, 2, 4, 11, 6, 2, 10, 8, 6, 7, 9, 8, 1], a, b)
};
THREE.IcosahedronGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.OctahedronGeometry = function (a, b) {
	this.parameters = {radius: a, detail: b};
	THREE.PolyhedronGeometry.call(this, [1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1], [0, 2, 4, 0, 4, 3, 0, 3, 5, 0, 5, 2, 1, 2, 5, 1, 5, 3, 1, 3, 4, 1, 4, 2], a, b)
};
THREE.OctahedronGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.TetrahedronGeometry = function (a, b) {
	THREE.PolyhedronGeometry.call(this, [1, 1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1], [2, 1, 0, 0, 3, 2, 1, 3, 0, 2, 3, 1], a, b)
};
THREE.TetrahedronGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.ParametricGeometry = function (a, b, c) {
	THREE.Geometry.call(this);
	var d = this.vertices, e = this.faces, f = this.faceVertexUvs[0], g, h, k, l, n = b + 1;
	for (g = 0; g <= c; g++)for (l = g / c, h = 0; h <= b; h++)k = h / b, k = a(k, l), d.push(k);
	var q, r, t, s;
	for (g = 0; g < c; g++)for (h = 0; h < b; h++)a = g * n + h, d = g * n + h + 1, l = (g + 1) * n + h + 1, k = (g + 1) * n + h, q = new THREE.Vector2(h / b, g / c), r = new THREE.Vector2((h + 1) / b, g / c), t = new THREE.Vector2((h + 1) / b, (g + 1) / c), s = new THREE.Vector2(h / b, (g + 1) / c), e.push(new THREE.Face3(a, d, k)), f.push([q, r, s]), e.push(new THREE.Face3(d, l, k)),
		f.push([r.clone(), t, s.clone()]);
	this.computeFaceNormals();
	this.computeVertexNormals()
};
THREE.ParametricGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.AxisHelper = function (a) {
	a = a || 1;
	var b = new Float32Array([0, 0, 0, a, 0, 0, 0, 0, 0, 0, a, 0, 0, 0, 0, 0, 0, a]), c = new Float32Array([1, 0, 0, 1, 0.6, 0, 0, 1, 0, 0.6, 1, 0, 0, 0, 1, 0, 0.6, 1]);
	a = new THREE.BufferGeometry;
	a.addAttribute("position", new THREE.BufferAttribute(b, 3));
	a.addAttribute("color", new THREE.BufferAttribute(c, 3));
	b = new THREE.LineBasicMaterial({vertexColors: THREE.VertexColors});
	THREE.Line.call(this, a, b, THREE.LinePieces)
};
THREE.AxisHelper.prototype = Object.create(THREE.Line.prototype);
THREE.ArrowHelper = function () {
	var a = new THREE.Geometry;
	a.vertices.push(new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 1, 0));
	var b = new THREE.CylinderGeometry(0, 0.5, 1, 5, 1);
	b.applyMatrix((new THREE.Matrix4).makeTranslation(0, -0.5, 0));
	return function (c, d, e, f, g, h) {
		THREE.Object3D.call(this);
		void 0 === f && (f = 16776960);
		void 0 === e && (e = 1);
		void 0 === g && (g = 0.2 * e);
		void 0 === h && (h = 0.2 * g);
		this.position.copy(d);
		this.line = new THREE.Line(a, new THREE.LineBasicMaterial({color: f}));
		this.line.matrixAutoUpdate = !1;
		this.add(this.line);
		this.cone = new THREE.Mesh(b, new THREE.MeshBasicMaterial({color: f}));
		this.cone.matrixAutoUpdate = !1;
		this.add(this.cone);
		this.setDirection(c);
		this.setLength(e, g, h)
	}
}();
THREE.ArrowHelper.prototype = Object.create(THREE.Object3D.prototype);
THREE.ArrowHelper.prototype.setDirection = function () {
	var a = new THREE.Vector3, b;
	return function (c) {
		0.99999 < c.y ? this.quaternion.set(0, 0, 0, 1) : -0.99999 > c.y ? this.quaternion.set(1, 0, 0, 0) : (a.set(c.z, 0, -c.x).normalize(), b = Math.acos(c.y), this.quaternion.setFromAxisAngle(a, b))
	}
}();
THREE.ArrowHelper.prototype.setLength = function (a, b, c) {
	void 0 === b && (b = 0.2 * a);
	void 0 === c && (c = 0.2 * b);
	this.line.scale.set(1, a, 1);
	this.line.updateMatrix();
	this.cone.scale.set(c, b, c);
	this.cone.position.y = a;
	this.cone.updateMatrix()
};
THREE.ArrowHelper.prototype.setColor = function (a) {
	this.line.material.color.set(a);
	this.cone.material.color.set(a)
};
THREE.BoxHelper = function (a) {
	var b = new THREE.BufferGeometry;
	b.addAttribute("position", new THREE.BufferAttribute(new Float32Array(72), 3));
	THREE.Line.call(this, b, new THREE.LineBasicMaterial({color: 16776960}), THREE.LinePieces);
	void 0 !== a && this.update(a)
};
THREE.BoxHelper.prototype = Object.create(THREE.Line.prototype);
THREE.BoxHelper.prototype.update = function (a) {
	var b = a.geometry;
	null === b.boundingBox && b.computeBoundingBox();
	var c = b.boundingBox.min, b = b.boundingBox.max, d = this.geometry.attributes.position.array;
	d[0] = b.x;
	d[1] = b.y;
	d[2] = b.z;
	d[3] = c.x;
	d[4] = b.y;
	d[5] = b.z;
	d[6] = c.x;
	d[7] = b.y;
	d[8] = b.z;
	d[9] = c.x;
	d[10] = c.y;
	d[11] = b.z;
	d[12] = c.x;
	d[13] = c.y;
	d[14] = b.z;
	d[15] = b.x;
	d[16] = c.y;
	d[17] = b.z;
	d[18] = b.x;
	d[19] = c.y;
	d[20] = b.z;
	d[21] = b.x;
	d[22] = b.y;
	d[23] = b.z;
	d[24] = b.x;
	d[25] = b.y;
	d[26] = c.z;
	d[27] = c.x;
	d[28] = b.y;
	d[29] = c.z;
	d[30] = c.x;
	d[31] = b.y;
	d[32] = c.z;
	d[33] = c.x;
	d[34] = c.y;
	d[35] = c.z;
	d[36] = c.x;
	d[37] = c.y;
	d[38] = c.z;
	d[39] = b.x;
	d[40] = c.y;
	d[41] = c.z;
	d[42] = b.x;
	d[43] = c.y;
	d[44] = c.z;
	d[45] = b.x;
	d[46] = b.y;
	d[47] = c.z;
	d[48] = b.x;
	d[49] = b.y;
	d[50] = b.z;
	d[51] = b.x;
	d[52] = b.y;
	d[53] = c.z;
	d[54] = c.x;
	d[55] = b.y;
	d[56] = b.z;
	d[57] = c.x;
	d[58] = b.y;
	d[59] = c.z;
	d[60] = c.x;
	d[61] = c.y;
	d[62] = b.z;
	d[63] = c.x;
	d[64] = c.y;
	d[65] = c.z;
	d[66] = b.x;
	d[67] = c.y;
	d[68] = b.z;
	d[69] = b.x;
	d[70] = c.y;
	d[71] = c.z;
	this.geometry.attributes.position.needsUpdate = !0;
	this.geometry.computeBoundingSphere();
	this.matrixAutoUpdate = !1;
	this.matrixWorld = a.matrixWorld
};
THREE.BoundingBoxHelper = function (a, b) {
	var c = void 0 !== b ? b : 8947848;
	this.object = a;
	this.box = new THREE.Box3;
	THREE.Mesh.call(this, new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({color: c, wireframe: !0}))
};
THREE.BoundingBoxHelper.prototype = Object.create(THREE.Mesh.prototype);
THREE.BoundingBoxHelper.prototype.update = function () {
	this.box.setFromObject(this.object);
	this.box.size(this.scale);
	this.box.center(this.position)
};
THREE.CameraHelper = function (a) {
	function b(a, b, d) {
		c(a, d);
		c(b, d)
	}

	function c(a, b) {
		d.vertices.push(new THREE.Vector3);
		d.colors.push(new THREE.Color(b));
		void 0 === f[a] && (f[a] = []);
		f[a].push(d.vertices.length - 1)
	}

	var d = new THREE.Geometry, e = new THREE.LineBasicMaterial({color: 16777215, vertexColors: THREE.FaceColors}), f = {};
	b("n1", "n2", 16755200);
	b("n2", "n4", 16755200);
	b("n4", "n3", 16755200);
	b("n3", "n1", 16755200);
	b("f1", "f2", 16755200);
	b("f2", "f4", 16755200);
	b("f4", "f3", 16755200);
	b("f3", "f1", 16755200);
	b("n1", "f1", 16755200);
	b("n2", "f2", 16755200);
	b("n3", "f3", 16755200);
	b("n4", "f4", 16755200);
	b("p", "n1", 16711680);
	b("p", "n2", 16711680);
	b("p", "n3", 16711680);
	b("p", "n4", 16711680);
	b("u1", "u2", 43775);
	b("u2", "u3", 43775);
	b("u3", "u1", 43775);
	b("c", "t", 16777215);
	b("p", "c", 3355443);
	b("cn1", "cn2", 3355443);
	b("cn3", "cn4", 3355443);
	b("cf1", "cf2", 3355443);
	b("cf3", "cf4", 3355443);
	THREE.Line.call(this, d, e, THREE.LinePieces);
	this.camera = a;
	this.matrixWorld = a.matrixWorld;
	this.matrixAutoUpdate = !1;
	this.pointMap = f;
	this.update()
};
THREE.CameraHelper.prototype = Object.create(THREE.Line.prototype);
THREE.CameraHelper.prototype.update = function () {
	var a = new THREE.Vector3, b = new THREE.Camera, c = new THREE.Projector;
	return function () {
		function d(d, g, h, k) {
			a.set(g, h, k);
			c.unprojectVector(a, b);
			d = e.pointMap[d];
			if (void 0 !== d)for (g = 0, h = d.length; g < h; g++)e.geometry.vertices[d[g]].copy(a)
		}

		var e = this;
		b.projectionMatrix.copy(this.camera.projectionMatrix);
		d("c", 0, 0, -1);
		d("t", 0, 0, 1);
		d("n1", -1, -1, -1);
		d("n2", 1, -1, -1);
		d("n3", -1, 1, -1);
		d("n4", 1, 1, -1);
		d("f1", -1, -1, 1);
		d("f2", 1, -1, 1);
		d("f3", -1, 1, 1);
		d("f4", 1, 1, 1);
		d("u1", 0.7,
			1.1, -1);
		d("u2", -0.7, 1.1, -1);
		d("u3", 0, 2, -1);
		d("cf1", -1, 0, 1);
		d("cf2", 1, 0, 1);
		d("cf3", 0, -1, 1);
		d("cf4", 0, 1, 1);
		d("cn1", -1, 0, -1);
		d("cn2", 1, 0, -1);
		d("cn3", 0, -1, -1);
		d("cn4", 0, 1, -1);
		this.geometry.verticesNeedUpdate = !0
	}
}();
THREE.DirectionalLightHelper = function (a, b) {
	THREE.Object3D.call(this);
	this.light = a;
	this.light.updateMatrixWorld();
	this.matrixWorld = a.matrixWorld;
	this.matrixAutoUpdate = !1;
	b = b || 1;
	var c = new THREE.Geometry;
	c.vertices.push(new THREE.Vector3(-b, b, 0), new THREE.Vector3(b, b, 0), new THREE.Vector3(b, -b, 0), new THREE.Vector3(-b, -b, 0), new THREE.Vector3(-b, b, 0));
	var d = new THREE.LineBasicMaterial({fog: !1});
	d.color.copy(this.light.color).multiplyScalar(this.light.intensity);
	this.lightPlane = new THREE.Line(c, d);
	this.add(this.lightPlane);
	c = new THREE.Geometry;
	c.vertices.push(new THREE.Vector3, new THREE.Vector3);
	d = new THREE.LineBasicMaterial({fog: !1});
	d.color.copy(this.light.color).multiplyScalar(this.light.intensity);
	this.targetLine = new THREE.Line(c, d);
	this.add(this.targetLine);
	this.update()
};
THREE.DirectionalLightHelper.prototype = Object.create(THREE.Object3D.prototype);
THREE.DirectionalLightHelper.prototype.dispose = function () {
	this.lightPlane.geometry.dispose();
	this.lightPlane.material.dispose();
	this.targetLine.geometry.dispose();
	this.targetLine.material.dispose()
};
THREE.DirectionalLightHelper.prototype.update = function () {
	var a = new THREE.Vector3, b = new THREE.Vector3, c = new THREE.Vector3;
	return function () {
		a.setFromMatrixPosition(this.light.matrixWorld);
		b.setFromMatrixPosition(this.light.target.matrixWorld);
		c.subVectors(b, a);
		this.lightPlane.lookAt(c);
		this.lightPlane.material.color.copy(this.light.color).multiplyScalar(this.light.intensity);
		this.targetLine.geometry.vertices[1].copy(c);
		this.targetLine.geometry.verticesNeedUpdate = !0;
		this.targetLine.material.color.copy(this.lightPlane.material.color)
	}
}();
THREE.EdgesHelper = function (a, b) {
	var c = void 0 !== b ? b : 16777215, d = [0, 0], e = {}, f = function (a, b) {
		return a - b
	}, g = ["a", "b", "c"], h = new THREE.BufferGeometry, k = a.geometry.clone();
	k.mergeVertices();
	k.computeFaceNormals();
	for (var l = k.vertices, k = k.faces, n = 0, q = 0, r = k.length; q < r; q++)for (var t = k[q], s = 0; 3 > s; s++) {
		d[0] = t[g[s]];
		d[1] = t[g[(s + 1) % 3]];
		d.sort(f);
		var p = d.toString();
		void 0 === e[p] ? (e[p] = {vert1: d[0], vert2: d[1], face1: q, face2: void 0}, n++) : e[p].face2 = q
	}
	h.addAttribute("position", new THREE.Float32Attribute(6 * n, 3));
	d = h.attributes.position.array;
	f = 0;
	for (p in e)if (g = e[p], void 0 === g.face2 || 0.9999 > k[g.face1].normal.dot(k[g.face2].normal))n = l[g.vert1], d[f++] = n.x, d[f++] = n.y, d[f++] = n.z, n = l[g.vert2], d[f++] = n.x, d[f++] = n.y, d[f++] = n.z;
	THREE.Line.call(this, h, new THREE.LineBasicMaterial({color: c}), THREE.LinePieces);
	this.matrixAutoUpdate = !1;
	this.matrixWorld = a.matrixWorld
};
THREE.EdgesHelper.prototype = Object.create(THREE.Line.prototype);
THREE.FaceNormalsHelper = function (a, b, c, d) {
	this.object = a;
	this.size = void 0 !== b ? b : 1;
	a = void 0 !== c ? c : 16776960;
	d = void 0 !== d ? d : 1;
	b = new THREE.Geometry;
	c = 0;
	for (var e = this.object.geometry.faces.length; c < e; c++)b.vertices.push(new THREE.Vector3, new THREE.Vector3);
	THREE.Line.call(this, b, new THREE.LineBasicMaterial({color: a, linewidth: d}), THREE.LinePieces);
	this.matrixAutoUpdate = !1;
	this.normalMatrix = new THREE.Matrix3;
	this.update()
};
THREE.FaceNormalsHelper.prototype = Object.create(THREE.Line.prototype);
THREE.FaceNormalsHelper.prototype.update = function () {
	var a = this.geometry.vertices, b = this.object, c = b.geometry.vertices, d = b.geometry.faces, e = b.matrixWorld;
	b.updateMatrixWorld(!0);
	this.normalMatrix.getNormalMatrix(e);
	for (var f = b = 0, g = d.length; b < g; b++, f += 2) {
		var h = d[b];
		a[f].copy(c[h.a]).add(c[h.b]).add(c[h.c]).divideScalar(3).applyMatrix4(e);
		a[f + 1].copy(h.normal).applyMatrix3(this.normalMatrix).normalize().multiplyScalar(this.size).add(a[f])
	}
	this.geometry.verticesNeedUpdate = !0;
	return this
};
THREE.GridHelper = function (a, b) {
	var c = new THREE.Geometry, d = new THREE.LineBasicMaterial({vertexColors: THREE.VertexColors});
	this.color1 = new THREE.Color(4473924);
	this.color2 = new THREE.Color(8947848);
	for (var e = -a; e <= a; e += b) {
		c.vertices.push(new THREE.Vector3(-a, 0, e), new THREE.Vector3(a, 0, e), new THREE.Vector3(e, 0, -a), new THREE.Vector3(e, 0, a));
		var f = 0 === e ? this.color1 : this.color2;
		c.colors.push(f, f, f, f)
	}
	THREE.Line.call(this, c, d, THREE.LinePieces)
};
THREE.GridHelper.prototype = Object.create(THREE.Line.prototype);
THREE.GridHelper.prototype.setColors = function (a, b) {
	this.color1.set(a);
	this.color2.set(b);
	this.geometry.colorsNeedUpdate = !0
};
THREE.HemisphereLightHelper = function (a, b, c, d) {
	THREE.Object3D.call(this);
	this.light = a;
	this.light.updateMatrixWorld();
	this.matrixWorld = a.matrixWorld;
	this.matrixAutoUpdate = !1;
	this.colors = [new THREE.Color, new THREE.Color];
	a = new THREE.SphereGeometry(b, 4, 2);
	a.applyMatrix((new THREE.Matrix4).makeRotationX(-Math.PI / 2));
	for (b = 0; 8 > b; b++)a.faces[b].color = this.colors[4 > b ? 0 : 1];
	b = new THREE.MeshBasicMaterial({vertexColors: THREE.FaceColors, wireframe: !0});
	this.lightSphere = new THREE.Mesh(a, b);
	this.add(this.lightSphere);
	this.update()
};
THREE.HemisphereLightHelper.prototype = Object.create(THREE.Object3D.prototype);
THREE.HemisphereLightHelper.prototype.dispose = function () {
	this.lightSphere.geometry.dispose();
	this.lightSphere.material.dispose()
};
THREE.HemisphereLightHelper.prototype.update = function () {
	var a = new THREE.Vector3;
	return function () {
		this.colors[0].copy(this.light.color).multiplyScalar(this.light.intensity);
		this.colors[1].copy(this.light.groundColor).multiplyScalar(this.light.intensity);
		this.lightSphere.lookAt(a.setFromMatrixPosition(this.light.matrixWorld).negate());
		this.lightSphere.geometry.colorsNeedUpdate = !0
	}
}();
THREE.PointLightHelper = function (a, b) {
	this.light = a;
	this.light.updateMatrixWorld();
	var c = new THREE.SphereGeometry(b, 4, 2), d = new THREE.MeshBasicMaterial({wireframe: !0, fog: !1});
	d.color.copy(this.light.color).multiplyScalar(this.light.intensity);
	THREE.Mesh.call(this, c, d);
	this.matrixWorld = this.light.matrixWorld;
	this.matrixAutoUpdate = !1
};
THREE.PointLightHelper.prototype = Object.create(THREE.Mesh.prototype);
THREE.PointLightHelper.prototype.dispose = function () {
	this.geometry.dispose();
	this.material.dispose()
};
THREE.PointLightHelper.prototype.update = function () {
	this.material.color.copy(this.light.color).multiplyScalar(this.light.intensity)
};
THREE.SkeletonHelper = function (a) {
	this.bones = this.getBoneList(a);
	for (var b = new THREE.Geometry, c = 0; c < this.bones.length; c++)this.bones[c].parent instanceof THREE.Bone && (b.vertices.push(new THREE.Vector3), b.vertices.push(new THREE.Vector3), b.colors.push(new THREE.Color(0, 0, 1)), b.colors.push(new THREE.Color(0, 1, 0)));
	c = new THREE.LineBasicMaterial({vertexColors: THREE.VertexColors, depthTest: !1, depthWrite: !1, transparent: !0});
	THREE.Line.call(this, b, c, THREE.LinePieces);
	this.root = a;
	this.matrixWorld = a.matrixWorld;
	this.matrixAutoUpdate = !1;
	this.update()
};
THREE.SkeletonHelper.prototype = Object.create(THREE.Line.prototype);
THREE.SkeletonHelper.prototype.getBoneList = function (a) {
	var b = [];
	a instanceof THREE.Bone && b.push(a);
	for (var c = 0; c < a.children.length; c++)b.push.apply(b, this.getBoneList(a.children[c]));
	return b
};
THREE.SkeletonHelper.prototype.update = function () {
	for (var a = this.geometry, b = (new THREE.Matrix4).getInverse(this.root.matrixWorld), c = new THREE.Matrix4, d = 0, e = 0; e < this.bones.length; e++) {
		var f = this.bones[e];
		f.parent instanceof THREE.Bone && (c.multiplyMatrices(b, f.matrixWorld), a.vertices[d].setFromMatrixPosition(c), c.multiplyMatrices(b, f.parent.matrixWorld), a.vertices[d + 1].setFromMatrixPosition(c), d += 2)
	}
	a.verticesNeedUpdate = !0;
	a.computeBoundingSphere()
};
THREE.SpotLightHelper = function (a) {
	THREE.Object3D.call(this);
	this.light = a;
	this.light.updateMatrixWorld();
	this.matrixWorld = a.matrixWorld;
	this.matrixAutoUpdate = !1;
	a = new THREE.CylinderGeometry(0, 1, 1, 8, 1, !0);
	a.applyMatrix((new THREE.Matrix4).makeTranslation(0, -0.5, 0));
	a.applyMatrix((new THREE.Matrix4).makeRotationX(-Math.PI / 2));
	var b = new THREE.MeshBasicMaterial({wireframe: !0, fog: !1});
	this.cone = new THREE.Mesh(a, b);
	this.add(this.cone);
	this.update()
};
THREE.SpotLightHelper.prototype = Object.create(THREE.Object3D.prototype);
THREE.SpotLightHelper.prototype.dispose = function () {
	this.cone.geometry.dispose();
	this.cone.material.dispose()
};
THREE.SpotLightHelper.prototype.update = function () {
	var a = new THREE.Vector3, b = new THREE.Vector3;
	return function () {
		var c = this.light.distance ? this.light.distance : 1E4, d = c * Math.tan(this.light.angle);
		this.cone.scale.set(d, d, c);
		a.setFromMatrixPosition(this.light.matrixWorld);
		b.setFromMatrixPosition(this.light.target.matrixWorld);
		this.cone.lookAt(b.sub(a));
		this.cone.material.color.copy(this.light.color).multiplyScalar(this.light.intensity)
	}
}();
THREE.VertexNormalsHelper = function (a, b, c, d) {
	this.object = a;
	this.size = void 0 !== b ? b : 1;
	b = void 0 !== c ? c : 16711680;
	d = void 0 !== d ? d : 1;
	c = new THREE.Geometry;
	a = a.geometry.faces;
	for (var e = 0, f = a.length; e < f; e++)for (var g = 0, h = a[e].vertexNormals.length; g < h; g++)c.vertices.push(new THREE.Vector3, new THREE.Vector3);
	THREE.Line.call(this, c, new THREE.LineBasicMaterial({color: b, linewidth: d}), THREE.LinePieces);
	this.matrixAutoUpdate = !1;
	this.normalMatrix = new THREE.Matrix3;
	this.update()
};
THREE.VertexNormalsHelper.prototype = Object.create(THREE.Line.prototype);
THREE.VertexNormalsHelper.prototype.update = function (a) {
	var b = new THREE.Vector3;
	return function (a) {
		a = ["a", "b", "c", "d"];
		this.object.updateMatrixWorld(!0);
		this.normalMatrix.getNormalMatrix(this.object.matrixWorld);
		for (var d = this.geometry.vertices, e = this.object.geometry.vertices, f = this.object.geometry.faces, g = this.object.matrixWorld, h = 0, k = 0, l = f.length; k < l; k++)for (var n = f[k], q = 0, r = n.vertexNormals.length; q < r; q++) {
			var t = n.vertexNormals[q];
			d[h].copy(e[n[a[q]]]).applyMatrix4(g);
			b.copy(t).applyMatrix3(this.normalMatrix).normalize().multiplyScalar(this.size);
			b.add(d[h]);
			h += 1;
			d[h].copy(b);
			h += 1
		}
		this.geometry.verticesNeedUpdate = !0;
		return this
	}
}();
THREE.VertexTangentsHelper = function (a, b, c, d) {
	this.object = a;
	this.size = void 0 !== b ? b : 1;
	b = void 0 !== c ? c : 255;
	d = void 0 !== d ? d : 1;
	c = new THREE.Geometry;
	a = a.geometry.faces;
	for (var e = 0, f = a.length; e < f; e++)for (var g = 0, h = a[e].vertexTangents.length; g < h; g++)c.vertices.push(new THREE.Vector3), c.vertices.push(new THREE.Vector3);
	THREE.Line.call(this, c, new THREE.LineBasicMaterial({color: b, linewidth: d}), THREE.LinePieces);
	this.matrixAutoUpdate = !1;
	this.update()
};
THREE.VertexTangentsHelper.prototype = Object.create(THREE.Line.prototype);
THREE.VertexTangentsHelper.prototype.update = function (a) {
	var b = new THREE.Vector3;
	return function (a) {
		a = ["a", "b", "c", "d"];
		this.object.updateMatrixWorld(!0);
		for (var d = this.geometry.vertices, e = this.object.geometry.vertices, f = this.object.geometry.faces, g = this.object.matrixWorld, h = 0, k = 0, l = f.length; k < l; k++)for (var n = f[k], q = 0, r = n.vertexTangents.length; q < r; q++) {
			var t = n.vertexTangents[q];
			d[h].copy(e[n[a[q]]]).applyMatrix4(g);
			b.copy(t).transformDirection(g).multiplyScalar(this.size);
			b.add(d[h]);
			h += 1;
			d[h].copy(b);
			h += 1
		}
		this.geometry.verticesNeedUpdate = !0;
		return this
	}
}();
THREE.WireframeHelper = function (a, b) {
	var c = void 0 !== b ? b : 16777215, d = [0, 0], e = {}, f = function (a, b) {
		return a - b
	}, g = ["a", "b", "c"], h = new THREE.BufferGeometry;
	if (a.geometry instanceof THREE.Geometry) {
		for (var k = a.geometry.vertices, l = a.geometry.faces, n = 0, q = new Uint32Array(6 * l.length), r = 0, t = l.length; r < t; r++)for (var s = l[r], p = 0; 3 > p; p++) {
			d[0] = s[g[p]];
			d[1] = s[g[(p + 1) % 3]];
			d.sort(f);
			var v = d.toString();
			void 0 === e[v] && (q[2 * n] = d[0], q[2 * n + 1] = d[1], e[v] = !0, n++)
		}
		d = new Float32Array(6 * n);
		r = 0;
		for (t = n; r < t; r++)for (p = 0; 2 > p; p++)n =
			k[q[2 * r + p]], g = 6 * r + 3 * p, d[g + 0] = n.x, d[g + 1] = n.y, d[g + 2] = n.z;
		h.addAttribute("position", new THREE.BufferAttribute(d, 3))
	} else if (a.geometry instanceof THREE.BufferGeometry) {
		if (void 0 !== a.geometry.attributes.index) {
			for (var k = a.geometry.attributes.position.array, t = a.geometry.attributes.index.array, l = a.geometry.offsets, n = 0, q = new Uint32Array(2 * t.length), s = 0, w = l.length; s < w; ++s)for (var p = l[s].start, v = l[s].count, g = l[s].index, r = p, u = p + v; r < u; r += 3)for (p = 0; 3 > p; p++)d[0] = g + t[r + p], d[1] = g + t[r + (p + 1) % 3], d.sort(f), v = d.toString(),
				void 0 === e[v] && (q[2 * n] = d[0], q[2 * n + 1] = d[1], e[v] = !0, n++);
			d = new Float32Array(6 * n);
			r = 0;
			for (t = n; r < t; r++)for (p = 0; 2 > p; p++)g = 6 * r + 3 * p, n = 3 * q[2 * r + p], d[g + 0] = k[n], d[g + 1] = k[n + 1], d[g + 2] = k[n + 2]
		} else for (k = a.geometry.attributes.position.array, n = k.length / 3, q = n / 3, d = new Float32Array(6 * n), r = 0, t = q; r < t; r++)for (p = 0; 3 > p; p++)g = 18 * r + 6 * p, q = 9 * r + 3 * p, d[g + 0] = k[q], d[g + 1] = k[q + 1], d[g + 2] = k[q + 2], n = 9 * r + (p + 1) % 3 * 3, d[g + 3] = k[n], d[g + 4] = k[n + 1], d[g + 5] = k[n + 2];
		h.addAttribute("position", new THREE.BufferAttribute(d, 3))
	}
	THREE.Line.call(this, h, new THREE.LineBasicMaterial({color: c}),
		THREE.LinePieces);
	this.matrixAutoUpdate = !1;
	this.matrixWorld = a.matrixWorld
};
THREE.WireframeHelper.prototype = Object.create(THREE.Line.prototype);
THREE.ImmediateRenderObject = function () {
	THREE.Object3D.call(this);
	this.render = function (a) {
	}
};
THREE.ImmediateRenderObject.prototype = Object.create(THREE.Object3D.prototype);
THREE.LensFlare = function (a, b, c, d, e) {
	THREE.Object3D.call(this);
	this.lensFlares = [];
	this.positionScreen = new THREE.Vector3;
	this.customUpdateCallback = void 0;
	void 0 !== a && this.add(a, b, c, d, e)
};
THREE.LensFlare.prototype = Object.create(THREE.Object3D.prototype);
THREE.LensFlare.prototype.add = function (a, b, c, d, e, f) {
	void 0 === b && (b = -1);
	void 0 === c && (c = 0);
	void 0 === f && (f = 1);
	void 0 === e && (e = new THREE.Color(16777215));
	void 0 === d && (d = THREE.NormalBlending);
	c = Math.min(c, Math.max(0, c));
	this.lensFlares.push({texture: a, size: b, distance: c, x: 0, y: 0, z: 0, scale: 1, rotation: 1, opacity: f, color: e, blending: d})
};
THREE.LensFlare.prototype.updateLensFlares = function () {
	var a, b = this.lensFlares.length, c, d = 2 * -this.positionScreen.x, e = 2 * -this.positionScreen.y;
	for (a = 0; a < b; a++)c = this.lensFlares[a], c.x = this.positionScreen.x + d * c.distance, c.y = this.positionScreen.y + e * c.distance, c.wantedRotation = c.x * Math.PI * 0.25, c.rotation += 0.25 * (c.wantedRotation - c.rotation)
};
THREE.MorphBlendMesh = function (a, b) {
	THREE.Mesh.call(this, a, b);
	this.animationsMap = {};
	this.animationsList = [];
	var c = this.geometry.morphTargets.length;
	this.createAnimation("__default", 0, c - 1, c / 1);
	this.setAnimationWeight("__default", 1)
};
THREE.MorphBlendMesh.prototype = Object.create(THREE.Mesh.prototype);
THREE.MorphBlendMesh.prototype.createAnimation = function (a, b, c, d) {
	b = {startFrame: b, endFrame: c, length: c - b + 1, fps: d, duration: (c - b) / d, lastFrame: 0, currentFrame: 0, active: !1, time: 0, direction: 1, weight: 1, directionBackwards: !1, mirroredLoop: !1};
	this.animationsMap[a] = b;
	this.animationsList.push(b)
};
THREE.MorphBlendMesh.prototype.autoCreateAnimations = function (a) {
	for (var b = /([a-z]+)_?(\d+)/, c, d = {}, e = this.geometry, f = 0, g = e.morphTargets.length; f < g; f++) {
		var h = e.morphTargets[f].name.match(b);
		if (h && 1 < h.length) {
			var k = h[1];
			d[k] || (d[k] = {start: Infinity, end: -Infinity});
			h = d[k];
			f < h.start && (h.start = f);
			f > h.end && (h.end = f);
			c || (c = k)
		}
	}
	for (k in d)h = d[k], this.createAnimation(k, h.start, h.end, a);
	this.firstAnimation = c
};
THREE.MorphBlendMesh.prototype.setAnimationDirectionForward = function (a) {
	if (a = this.animationsMap[a])a.direction = 1, a.directionBackwards = !1
};
THREE.MorphBlendMesh.prototype.setAnimationDirectionBackward = function (a) {
	if (a = this.animationsMap[a])a.direction = -1, a.directionBackwards = !0
};
THREE.MorphBlendMesh.prototype.setAnimationFPS = function (a, b) {
	var c = this.animationsMap[a];
	c && (c.fps = b, c.duration = (c.end - c.start) / c.fps)
};
THREE.MorphBlendMesh.prototype.setAnimationDuration = function (a, b) {
	var c = this.animationsMap[a];
	c && (c.duration = b, c.fps = (c.end - c.start) / c.duration)
};
THREE.MorphBlendMesh.prototype.setAnimationWeight = function (a, b) {
	var c = this.animationsMap[a];
	c && (c.weight = b)
};
THREE.MorphBlendMesh.prototype.setAnimationTime = function (a, b) {
	var c = this.animationsMap[a];
	c && (c.time = b)
};
THREE.MorphBlendMesh.prototype.getAnimationTime = function (a) {
	var b = 0;
	if (a = this.animationsMap[a])b = a.time;
	return b
};
THREE.MorphBlendMesh.prototype.getAnimationDuration = function (a) {
	var b = -1;
	if (a = this.animationsMap[a])b = a.duration;
	return b
};
THREE.MorphBlendMesh.prototype.playAnimation = function (a) {
	var b = this.animationsMap[a];
	b ? (b.time = 0, b.active = !0) : console.warn("animation[" + a + "] undefined")
};
THREE.MorphBlendMesh.prototype.stopAnimation = function (a) {
	if (a = this.animationsMap[a])a.active = !1
};
THREE.MorphBlendMesh.prototype.update = function (a) {
	for (var b = 0, c = this.animationsList.length; b < c; b++) {
		var d = this.animationsList[b];
		if (d.active) {
			var e = d.duration / d.length;
			d.time += d.direction * a;
			if (d.mirroredLoop) {
				if (d.time > d.duration || 0 > d.time)d.direction *= -1, d.time > d.duration && (d.time = d.duration, d.directionBackwards = !0), 0 > d.time && (d.time = 0, d.directionBackwards = !1)
			} else d.time %= d.duration, 0 > d.time && (d.time += d.duration);
			var f = d.startFrame + THREE.Math.clamp(Math.floor(d.time / e), 0, d.length - 1), g = d.weight;
			f !== d.currentFrame && (this.morphTargetInfluences[d.lastFrame] = 0, this.morphTargetInfluences[d.currentFrame] = 1 * g, this.morphTargetInfluences[f] = 0, d.lastFrame = d.currentFrame, d.currentFrame = f);
			e = d.time % e / e;
			d.directionBackwards && (e = 1 - e);
			this.morphTargetInfluences[d.currentFrame] = e * g;
			this.morphTargetInfluences[d.lastFrame] = (1 - e) * g
		}
	}
};
THREE.LensFlarePlugin = function () {
	function a(a, b) {
		var d = c.createProgram(), e = c.createShader(c.FRAGMENT_SHADER), f = c.createShader(c.VERTEX_SHADER), g = "precision " + b + " float;\n";
		c.shaderSource(e, g + a.fragmentShader);
		c.shaderSource(f, g + a.vertexShader);
		c.compileShader(e);
		c.compileShader(f);
		c.attachShader(d, e);
		c.attachShader(d, f);
		c.linkProgram(d);
		return d
	}

	var b = [], c, d, e, f, g, h, k, l, n, q, r, t, s;
	this.init = function (b) {
		c = b.context;
		d = b;
		e = b.getPrecision();
		f = new Float32Array(16);
		g = new Uint16Array(6);
		b = 0;
		f[b++] = -1;
		f[b++] = -1;
		f[b++] = 0;
		f[b++] = 0;
		f[b++] = 1;
		f[b++] = -1;
		f[b++] = 1;
		f[b++] = 0;
		f[b++] = 1;
		f[b++] = 1;
		f[b++] = 1;
		f[b++] = 1;
		f[b++] = -1;
		f[b++] = 1;
		f[b++] = 0;
		f[b++] = 1;
		b = 0;
		g[b++] = 0;
		g[b++] = 1;
		g[b++] = 2;
		g[b++] = 0;
		g[b++] = 2;
		g[b++] = 3;
		h = c.createBuffer();
		k = c.createBuffer();
		c.bindBuffer(c.ARRAY_BUFFER, h);
		c.bufferData(c.ARRAY_BUFFER, f, c.STATIC_DRAW);
		c.bindBuffer(c.ELEMENT_ARRAY_BUFFER, k);
		c.bufferData(c.ELEMENT_ARRAY_BUFFER, g, c.STATIC_DRAW);
		l = c.createTexture();
		n = c.createTexture();
		c.bindTexture(c.TEXTURE_2D, l);
		c.texImage2D(c.TEXTURE_2D, 0, c.RGB, 16,
			16, 0, c.RGB, c.UNSIGNED_BYTE, null);
		c.texParameteri(c.TEXTURE_2D, c.TEXTURE_WRAP_S, c.CLAMP_TO_EDGE);
		c.texParameteri(c.TEXTURE_2D, c.TEXTURE_WRAP_T, c.CLAMP_TO_EDGE);
		c.texParameteri(c.TEXTURE_2D, c.TEXTURE_MAG_FILTER, c.NEAREST);
		c.texParameteri(c.TEXTURE_2D, c.TEXTURE_MIN_FILTER, c.NEAREST);
		c.bindTexture(c.TEXTURE_2D, n);
		c.texImage2D(c.TEXTURE_2D, 0, c.RGBA, 16, 16, 0, c.RGBA, c.UNSIGNED_BYTE, null);
		c.texParameteri(c.TEXTURE_2D, c.TEXTURE_WRAP_S, c.CLAMP_TO_EDGE);
		c.texParameteri(c.TEXTURE_2D, c.TEXTURE_WRAP_T, c.CLAMP_TO_EDGE);
		c.texParameteri(c.TEXTURE_2D, c.TEXTURE_MAG_FILTER, c.NEAREST);
		c.texParameteri(c.TEXTURE_2D, c.TEXTURE_MIN_FILTER, c.NEAREST);
		0 >= c.getParameter(c.MAX_VERTEX_TEXTURE_IMAGE_UNITS) ? (q = !1, r = a(THREE.ShaderFlares.lensFlare, e)) : (q = !0, r = a(THREE.ShaderFlares.lensFlareVertexTexture, e));
		t = {};
		s = {};
		t.vertex = c.getAttribLocation(r, "position");
		t.uv = c.getAttribLocation(r, "uv");
		s.renderType = c.getUniformLocation(r, "renderType");
		s.map = c.getUniformLocation(r, "map");
		s.occlusionMap = c.getUniformLocation(r, "occlusionMap");
		s.opacity =
			c.getUniformLocation(r, "opacity");
		s.color = c.getUniformLocation(r, "color");
		s.scale = c.getUniformLocation(r, "scale");
		s.rotation = c.getUniformLocation(r, "rotation");
		s.screenPosition = c.getUniformLocation(r, "screenPosition")
	};
	this.render = function (a, e, f, g) {
		b.length = 0;
		a.traverseVisible(function (a) {
			a instanceof THREE.LensFlare && b.push(a)
		});
		if (0 !== b.length) {
			a = new THREE.Vector3;
			var D = g / f, A = 0.5 * f, x = 0.5 * g, C = 16 / g, I = new THREE.Vector2(C * D, C), z = new THREE.Vector3(1, 1, 0), y = new THREE.Vector2(1, 1), K = s, C = t;
			c.useProgram(r);
			c.enableVertexAttribArray(t.vertex);
			c.enableVertexAttribArray(t.uv);
			c.uniform1i(K.occlusionMap, 0);
			c.uniform1i(K.map, 1);
			c.bindBuffer(c.ARRAY_BUFFER, h);
			c.vertexAttribPointer(C.vertex, 2, c.FLOAT, !1, 16, 0);
			c.vertexAttribPointer(C.uv, 2, c.FLOAT, !1, 16, 8);
			c.bindBuffer(c.ELEMENT_ARRAY_BUFFER, k);
			c.disable(c.CULL_FACE);
			c.depthMask(!1);
			for (var N = 0, ba = b.length; N < ba; N++) {
				C = 16 / g;
				I.set(C * D, C);
				var P = b[N];
				a.set(P.matrixWorld.elements[12], P.matrixWorld.elements[13], P.matrixWorld.elements[14]);
				a.applyMatrix4(e.matrixWorldInverse);
				a.applyProjection(e.projectionMatrix);
				z.copy(a);
				y.x = z.x * A + A;
				y.y = z.y * x + x;
				if (q || 0 < y.x && y.x < f && 0 < y.y && y.y < g) {
					c.activeTexture(c.TEXTURE1);
					c.bindTexture(c.TEXTURE_2D, l);
					c.copyTexImage2D(c.TEXTURE_2D, 0, c.RGB, y.x - 8, y.y - 8, 16, 16, 0);
					c.uniform1i(K.renderType, 0);
					c.uniform2f(K.scale, I.x, I.y);
					c.uniform3f(K.screenPosition, z.x, z.y, z.z);
					c.disable(c.BLEND);
					c.enable(c.DEPTH_TEST);
					c.drawElements(c.TRIANGLES, 6, c.UNSIGNED_SHORT, 0);
					c.activeTexture(c.TEXTURE0);
					c.bindTexture(c.TEXTURE_2D, n);
					c.copyTexImage2D(c.TEXTURE_2D,
						0, c.RGBA, y.x - 8, y.y - 8, 16, 16, 0);
					c.uniform1i(K.renderType, 1);
					c.disable(c.DEPTH_TEST);
					c.activeTexture(c.TEXTURE1);
					c.bindTexture(c.TEXTURE_2D, l);
					c.drawElements(c.TRIANGLES, 6, c.UNSIGNED_SHORT, 0);
					P.positionScreen.copy(z);
					P.customUpdateCallback ? P.customUpdateCallback(P) : P.updateLensFlares();
					c.uniform1i(K.renderType, 2);
					c.enable(c.BLEND);
					for (var O = 0, J = P.lensFlares.length; O < J; O++) {
						var E = P.lensFlares[O];
						0.001 < E.opacity && 0.001 < E.scale && (z.x = E.x, z.y = E.y, z.z = E.z, C = E.size * E.scale / g, I.x = C * D, I.y = C, c.uniform3f(K.screenPosition,
							z.x, z.y, z.z), c.uniform2f(K.scale, I.x, I.y), c.uniform1f(K.rotation, E.rotation), c.uniform1f(K.opacity, E.opacity), c.uniform3f(K.color, E.color.r, E.color.g, E.color.b), d.setBlending(E.blending, E.blendEquation, E.blendSrc, E.blendDst), d.setTexture(E.texture, 1), c.drawElements(c.TRIANGLES, 6, c.UNSIGNED_SHORT, 0))
					}
				}
			}
			c.enable(c.CULL_FACE);
			c.enable(c.DEPTH_TEST);
			c.depthMask(!0)
		}
	}
};
THREE.ShadowMapPlugin = function () {
	function a(b, c, d) {
		if (c.visible) {
			var e = b.__webglObjects[c.id];
			if (e && c.castShadow && (!1 === c.frustumCulled || !0 === h.intersectsObject(c)))for (var f = 0, g = e.length; f < g; f++) {
				var k = e[f];
				c._modelViewMatrix.multiplyMatrices(d.matrixWorldInverse, c.matrixWorld);
				r.push(k)
			}
			f = 0;
			for (g = c.children.length; f < g; f++)a(b, c.children[f], d)
		}
	}

	var b, c, d, e, f, g, h = new THREE.Frustum, k = new THREE.Matrix4, l = new THREE.Vector3, n = new THREE.Vector3, q = new THREE.Vector3, r = [];
	this.init = function (a) {
		b = a.context;
		c = a;
		a = THREE.ShaderLib.depthRGBA;
		var h = THREE.UniformsUtils.clone(a.uniforms);
		d = new THREE.ShaderMaterial({fragmentShader: a.fragmentShader, vertexShader: a.vertexShader, uniforms: h});
		e = new THREE.ShaderMaterial({fragmentShader: a.fragmentShader, vertexShader: a.vertexShader, uniforms: h, morphTargets: !0});
		f = new THREE.ShaderMaterial({fragmentShader: a.fragmentShader, vertexShader: a.vertexShader, uniforms: h, skinning: !0});
		g = new THREE.ShaderMaterial({fragmentShader: a.fragmentShader, vertexShader: a.vertexShader, uniforms: h,
			morphTargets: !0, skinning: !0});
		d._shadowPass = !0;
		e._shadowPass = !0;
		f._shadowPass = !0;
		g._shadowPass = !0
	};
	this.render = function (a, b) {
		c.shadowMapEnabled && c.shadowMapAutoUpdate && this.update(a, b)
	};
	this.update = function (t, s) {
		var p, v, w, u, D, A, x, C, I = [];
		u = 0;
		b.clearColor(1, 1, 1, 1);
		b.disable(b.BLEND);
		b.enable(b.CULL_FACE);
		b.frontFace(b.CCW);
		c.shadowMapCullFace === THREE.CullFaceFront ? b.cullFace(b.FRONT) : b.cullFace(b.BACK);
		c.setDepthTest(!0);
		p = 0;
		for (v = t.__lights.length; p < v; p++)if (w = t.__lights[p], w.castShadow)if (w instanceof
			THREE.DirectionalLight && w.shadowCascade)for (D = 0; D < w.shadowCascadeCount; D++) {
			var z;
			if (w.shadowCascadeArray[D])z = w.shadowCascadeArray[D]; else {
				x = w;
				var y = D;
				z = new THREE.DirectionalLight;
				z.isVirtual = !0;
				z.onlyShadow = !0;
				z.castShadow = !0;
				z.shadowCameraNear = x.shadowCameraNear;
				z.shadowCameraFar = x.shadowCameraFar;
				z.shadowCameraLeft = x.shadowCameraLeft;
				z.shadowCameraRight = x.shadowCameraRight;
				z.shadowCameraBottom = x.shadowCameraBottom;
				z.shadowCameraTop = x.shadowCameraTop;
				z.shadowCameraVisible = x.shadowCameraVisible;
				z.shadowDarkness = x.shadowDarkness;
				z.shadowBias = x.shadowCascadeBias[y];
				z.shadowMapWidth = x.shadowCascadeWidth[y];
				z.shadowMapHeight = x.shadowCascadeHeight[y];
				z.pointsWorld = [];
				z.pointsFrustum = [];
				C = z.pointsWorld;
				A = z.pointsFrustum;
				for (var K = 0; 8 > K; K++)C[K] = new THREE.Vector3, A[K] = new THREE.Vector3;
				C = x.shadowCascadeNearZ[y];
				x = x.shadowCascadeFarZ[y];
				A[0].set(-1, -1, C);
				A[1].set(1, -1, C);
				A[2].set(-1, 1, C);
				A[3].set(1, 1, C);
				A[4].set(-1, -1, x);
				A[5].set(1, -1, x);
				A[6].set(-1, 1, x);
				A[7].set(1, 1, x);
				z.originalCamera = s;
				A = new THREE.Gyroscope;
				A.position.copy(w.shadowCascadeOffset);
				A.add(z);
				A.add(z.target);
				s.add(A);
				w.shadowCascadeArray[D] = z;
				console.log("Created virtualLight", z)
			}
			y = w;
			C = D;
			x = y.shadowCascadeArray[C];
			x.position.copy(y.position);
			x.target.position.copy(y.target.position);
			x.lookAt(x.target);
			x.shadowCameraVisible = y.shadowCameraVisible;
			x.shadowDarkness = y.shadowDarkness;
			x.shadowBias = y.shadowCascadeBias[C];
			A = y.shadowCascadeNearZ[C];
			y = y.shadowCascadeFarZ[C];
			x = x.pointsFrustum;
			x[0].z = A;
			x[1].z = A;
			x[2].z = A;
			x[3].z = A;
			x[4].z = y;
			x[5].z = y;
			x[6].z =
				y;
			x[7].z = y;
			I[u] = z;
			u++
		} else I[u] = w, u++;
		p = 0;
		for (v = I.length; p < v; p++) {
			w = I[p];
			w.shadowMap || (D = THREE.LinearFilter, c.shadowMapType === THREE.PCFSoftShadowMap && (D = THREE.NearestFilter), w.shadowMap = new THREE.WebGLRenderTarget(w.shadowMapWidth, w.shadowMapHeight, {minFilter: D, magFilter: D, format: THREE.RGBAFormat}), w.shadowMapSize = new THREE.Vector2(w.shadowMapWidth, w.shadowMapHeight), w.shadowMatrix = new THREE.Matrix4);
			if (!w.shadowCamera) {
				if (w instanceof THREE.SpotLight)w.shadowCamera = new THREE.PerspectiveCamera(w.shadowCameraFov,
					w.shadowMapWidth / w.shadowMapHeight, w.shadowCameraNear, w.shadowCameraFar); else if (w instanceof THREE.DirectionalLight)w.shadowCamera = new THREE.OrthographicCamera(w.shadowCameraLeft, w.shadowCameraRight, w.shadowCameraTop, w.shadowCameraBottom, w.shadowCameraNear, w.shadowCameraFar); else {
					console.error("Unsupported light type for shadow");
					continue
				}
				t.add(w.shadowCamera);
				!0 === t.autoUpdate && t.updateMatrixWorld()
			}
			w.shadowCameraVisible && !w.cameraHelper && (w.cameraHelper = new THREE.CameraHelper(w.shadowCamera), w.shadowCamera.add(w.cameraHelper));
			if (w.isVirtual && z.originalCamera == s) {
				D = s;
				u = w.shadowCamera;
				A = w.pointsFrustum;
				x = w.pointsWorld;
				l.set(Infinity, Infinity, Infinity);
				n.set(-Infinity, -Infinity, -Infinity);
				for (y = 0; 8 > y; y++)C = x[y], C.copy(A[y]), THREE.ShadowMapPlugin.__projector.unprojectVector(C, D), C.applyMatrix4(u.matrixWorldInverse), C.x < l.x && (l.x = C.x), C.x > n.x && (n.x = C.x), C.y < l.y && (l.y = C.y), C.y > n.y && (n.y = C.y), C.z < l.z && (l.z = C.z), C.z > n.z && (n.z = C.z);
				u.left = l.x;
				u.right = n.x;
				u.top = n.y;
				u.bottom = l.y;
				u.updateProjectionMatrix()
			}
			u = w.shadowMap;
			A = w.shadowMatrix;
			D = w.shadowCamera;
			D.position.setFromMatrixPosition(w.matrixWorld);
			q.setFromMatrixPosition(w.target.matrixWorld);
			D.lookAt(q);
			D.updateMatrixWorld();
			D.matrixWorldInverse.getInverse(D.matrixWorld);
			w.cameraHelper && (w.cameraHelper.visible = w.shadowCameraVisible);
			w.shadowCameraVisible && w.cameraHelper.update();
			A.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1);
			A.multiply(D.projectionMatrix);
			A.multiply(D.matrixWorldInverse);
			k.multiplyMatrices(D.projectionMatrix, D.matrixWorldInverse);
			h.setFromMatrix(k);
			c.setRenderTarget(u);
			c.clear();
			r.length = 0;
			a(t, t, D);
			w = 0;
			for (u = r.length; w < u; w++)x = r[w], A = x.object, x = x.buffer, y = A.material instanceof THREE.MeshFaceMaterial ? A.material.materials[0] : A.material, C = void 0 !== A.geometry.morphTargets && 0 < A.geometry.morphTargets.length && y.morphTargets, K = A instanceof THREE.SkinnedMesh && y.skinning, C = A.customDepthMaterial ? A.customDepthMaterial : K ? C ? g : f : C ? e : d, c.setMaterialFaces(y), x instanceof THREE.BufferGeometry ? c.renderBufferDirect(D, t.__lights, null, C, x, A) : c.renderBuffer(D, t.__lights, null, C, x, A);
			y =
				t.__webglObjectsImmediate;
			w = 0;
			for (u = y.length; w < u; w++)x = y[w], A = x.object, A.visible && A.castShadow && (A._modelViewMatrix.multiplyMatrices(D.matrixWorldInverse, A.matrixWorld), c.renderImmediateObject(D, t.__lights, null, d, A))
		}
		p = c.getClearColor();
		v = c.getClearAlpha();
		b.clearColor(p.r, p.g, p.b, v);
		b.enable(b.BLEND);
		c.shadowMapCullFace === THREE.CullFaceFront && b.cullFace(b.BACK)
	}
};
THREE.ShadowMapPlugin.__projector = new THREE.Projector;
THREE.SpritePlugin = function () {
	var a, b, c, d, e, f, g, h, k, l, n, q, r, t, s, p, v;

	function w(a, b) {
		return a.z !== b.z ? b.z - a.z : b.id - a.id
	}

	var u, D, A, x = [], C, I, z, y, K;
	this.init = function (w) {
		u = w.context;
		D = w;
		C = new Float32Array([-0.5, -0.5, 0, 0, 0.5, -0.5, 1, 0, 0.5, 0.5, 1, 1, -0.5, 0.5, 0, 1]);
		I = new Uint16Array([0, 1, 2, 0, 2, 3]);
		z = u.createBuffer();
		y = u.createBuffer();
		u.bindBuffer(u.ARRAY_BUFFER, z);
		u.bufferData(u.ARRAY_BUFFER, C, u.STATIC_DRAW);
		u.bindBuffer(u.ELEMENT_ARRAY_BUFFER, y);
		u.bufferData(u.ELEMENT_ARRAY_BUFFER, I, u.STATIC_DRAW);
		w = u.createProgram();
		var x = u.createShader(u.VERTEX_SHADER), P = u.createShader(u.FRAGMENT_SHADER);
		u.shaderSource(x, ["precision " + D.getPrecision() + " float;", "uniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform float rotation;\nuniform vec2 scale;\nuniform vec2 uvOffset;\nuniform vec2 uvScale;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvoid main() {\nvUV = uvOffset + uv * uvScale;\nvec2 alignedPosition = position * scale;\nvec2 rotatedPosition;\nrotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\nrotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\nvec4 finalPosition;\nfinalPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\nfinalPosition.xy += rotatedPosition;\nfinalPosition = projectionMatrix * finalPosition;\ngl_Position = finalPosition;\n}"].join("\n"));
		u.shaderSource(P, ["precision " + D.getPrecision() + " float;", "uniform vec3 color;\nuniform sampler2D map;\nuniform float opacity;\nuniform int fogType;\nuniform vec3 fogColor;\nuniform float fogDensity;\nuniform float fogNear;\nuniform float fogFar;\nuniform float alphaTest;\nvarying vec2 vUV;\nvoid main() {\nvec4 texture = texture2D( map, vUV );\nif ( texture.a < alphaTest ) discard;\ngl_FragColor = vec4( color * texture.xyz, texture.a * opacity );\nif ( fogType > 0 ) {\nfloat depth = gl_FragCoord.z / gl_FragCoord.w;\nfloat fogFactor = 0.0;\nif ( fogType == 1 ) {\nfogFactor = smoothstep( fogNear, fogFar, depth );\n} else {\nconst float LOG2 = 1.442695;\nfloat fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );\nfogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );\n}\ngl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\n}\n}"].join("\n"));
		u.compileShader(x);
		u.compileShader(P);
		u.attachShader(w, x);
		u.attachShader(w, P);
		u.linkProgram(w);
		K = w;
		p = u.getAttribLocation(K, "position");
		v = u.getAttribLocation(K, "uv");
		a = u.getUniformLocation(K, "uvOffset");
		b = u.getUniformLocation(K, "uvScale");
		c = u.getUniformLocation(K, "rotation");
		d = u.getUniformLocation(K, "scale");
		e = u.getUniformLocation(K, "color");
		f = u.getUniformLocation(K, "map");
		g = u.getUniformLocation(K, "opacity");
		h = u.getUniformLocation(K, "modelViewMatrix");
		k = u.getUniformLocation(K, "projectionMatrix");
		l =
			u.getUniformLocation(K, "fogType");
		n = u.getUniformLocation(K, "fogDensity");
		q = u.getUniformLocation(K, "fogNear");
		r = u.getUniformLocation(K, "fogFar");
		t = u.getUniformLocation(K, "fogColor");
		s = u.getUniformLocation(K, "alphaTest");
		w = document.createElement("canvas");
		w.width = 8;
		w.height = 8;
		x = w.getContext("2d");
		x.fillStyle = "white";
		x.fillRect(0, 0, 8, 8);
		A = new THREE.Texture(w);
		A.needsUpdate = !0
	};
	this.render = function (C, I, P, O) {
		x.length = 0;
		C.traverseVisible(function (a) {
			a instanceof THREE.Sprite && x.push(a)
		});
		if (0 !== x.length) {
			u.useProgram(K);
			u.enableVertexAttribArray(p);
			u.enableVertexAttribArray(v);
			u.disable(u.CULL_FACE);
			u.enable(u.BLEND);
			u.bindBuffer(u.ARRAY_BUFFER, z);
			u.vertexAttribPointer(p, 2, u.FLOAT, !1, 16, 0);
			u.vertexAttribPointer(v, 2, u.FLOAT, !1, 16, 8);
			u.bindBuffer(u.ELEMENT_ARRAY_BUFFER, y);
			u.uniformMatrix4fv(k, !1, I.projectionMatrix.elements);
			u.activeTexture(u.TEXTURE0);
			u.uniform1i(f, 0);
			O = P = 0;
			var J = C.fog;
			J ? (u.uniform3f(t, J.color.r, J.color.g, J.color.b), J instanceof THREE.Fog ? (u.uniform1f(q, J.near), u.uniform1f(r, J.far), u.uniform1i(l, 1),
				O = P = 1) : J instanceof THREE.FogExp2 && (u.uniform1f(n, J.density), u.uniform1i(l, 2), O = P = 2)) : (u.uniform1i(l, 0), O = P = 0);
			for (var J = 0, E = x.length; J < E; J++) {
				var Q = x[J], L = Q.material;
				Q._modelViewMatrix.multiplyMatrices(I.matrixWorldInverse, Q.matrixWorld);
				Q.z = -Q._modelViewMatrix.elements[14]
			}
			x.sort(w);
			I = [];
			J = 0;
			for (E = x.length; J < E; J++)Q = x[J], L = Q.material, u.uniform1f(s, L.alphaTest), u.uniformMatrix4fv(h, !1, Q._modelViewMatrix.elements), I[0] = Q.scale.x, I[1] = Q.scale.y, Q = 0, C.fog && L.fog && (Q = O), P !== Q && (u.uniform1i(l, Q), P = Q),
				null !== L.map ? (u.uniform2f(a, L.map.offset.x, L.map.offset.y), u.uniform2f(b, L.map.repeat.x, L.map.repeat.y)) : (u.uniform2f(a, 0, 0), u.uniform2f(b, 1, 1)), u.uniform1f(g, L.opacity), u.uniform3f(e, L.color.r, L.color.g, L.color.b), u.uniform1f(c, L.rotation), u.uniform2fv(d, I), D.setBlending(L.blending, L.blendEquation, L.blendSrc, L.blendDst), D.setDepthTest(L.depthTest), D.setDepthWrite(L.depthWrite), L.map && L.map.image && L.map.image.width ? D.setTexture(L.map, 0) : D.setTexture(A, 0), u.drawElements(u.TRIANGLES, 6, u.UNSIGNED_SHORT,
				0);
			u.enable(u.CULL_FACE)
		}
	}
};
THREE.DepthPassPlugin = function () {
	function a(b, c, d) {
		if (c.visible) {
			var e = b.__webglObjects[c.id];
			if (e && (!1 === c.frustumCulled || !0 === h.intersectsObject(c)))for (var f = 0, g = e.length; f < g; f++) {
				var k = e[f];
				c._modelViewMatrix.multiplyMatrices(d.matrixWorldInverse, c.matrixWorld);
				l.push(k)
			}
			f = 0;
			for (g = c.children.length; f < g; f++)a(b, c.children[f], d)
		}
	}

	this.enabled = !1;
	this.renderTarget = null;
	var b, c, d, e, f, g, h = new THREE.Frustum, k = new THREE.Matrix4, l = [];
	this.init = function (a) {
		b = a.context;
		c = a;
		a = THREE.ShaderLib.depthRGBA;
		var h =
			THREE.UniformsUtils.clone(a.uniforms);
		d = new THREE.ShaderMaterial({fragmentShader: a.fragmentShader, vertexShader: a.vertexShader, uniforms: h});
		e = new THREE.ShaderMaterial({fragmentShader: a.fragmentShader, vertexShader: a.vertexShader, uniforms: h, morphTargets: !0});
		f = new THREE.ShaderMaterial({fragmentShader: a.fragmentShader, vertexShader: a.vertexShader, uniforms: h, skinning: !0});
		g = new THREE.ShaderMaterial({fragmentShader: a.fragmentShader, vertexShader: a.vertexShader, uniforms: h, morphTargets: !0, skinning: !0});
		d._shadowPass = !0;
		e._shadowPass = !0;
		f._shadowPass = !0;
		g._shadowPass = !0
	};
	this.render = function (a, b) {
		this.enabled && this.update(a, b)
	};
	this.update = function (n, q) {
		var r, t, s, p, v;
		b.clearColor(1, 1, 1, 1);
		b.disable(b.BLEND);
		c.setDepthTest(!0);
		!0 === n.autoUpdate && n.updateMatrixWorld();
		q.matrixWorldInverse.getInverse(q.matrixWorld);
		k.multiplyMatrices(q.projectionMatrix, q.matrixWorldInverse);
		h.setFromMatrix(k);
		c.setRenderTarget(this.renderTarget);
		c.clear();
		l.length = 0;
		a(n, n, q);
		var w;
		r = 0;
		for (t = l.length; r < t; r++)s = l[r], v = s.object, s = s.buffer,
			v instanceof THREE.PointCloud && !v.customDepthMaterial || ((w = v.material instanceof THREE.MeshFaceMaterial ? v.material.materials[0] : v.material) && c.setMaterialFaces(v.material), p = void 0 !== v.geometry.morphTargets && 0 < v.geometry.morphTargets.length && w.morphTargets, w = v instanceof THREE.SkinnedMesh && w.skinning, p = v.customDepthMaterial ? v.customDepthMaterial : w ? p ? g : f : p ? e : d, s instanceof THREE.BufferGeometry ? c.renderBufferDirect(q, n.__lights, null, p, s, v) : c.renderBuffer(q, n.__lights, null, p, s, v));
		p = n.__webglObjectsImmediate;
		r = 0;
		for (t = p.length; r < t; r++)s = p[r], v = s.object, v.visible && (v._modelViewMatrix.multiplyMatrices(q.matrixWorldInverse, v.matrixWorld), c.renderImmediateObject(q, n.__lights, null, d, v));
		r = c.getClearColor();
		t = c.getClearAlpha();
		b.clearColor(r.r, r.g, r.b, t);
		b.enable(b.BLEND)
	}
};
THREE.ShaderFlares = {lensFlareVertexTexture: {vertexShader: "uniform lowp int renderType;\nuniform vec3 screenPosition;\nuniform vec2 scale;\nuniform float rotation;\nuniform sampler2D occlusionMap;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvarying float vVisibility;\nvoid main() {\nvUV = uv;\nvec2 pos = position;\nif( renderType == 2 ) {\nvec4 visibility = texture2D( occlusionMap, vec2( 0.1, 0.1 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.1 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.1 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.9 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.1, 0.9 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.5 ) );\nvVisibility =        visibility.r / 9.0;\nvVisibility *= 1.0 - visibility.g / 9.0;\nvVisibility *=       visibility.b / 9.0;\nvVisibility *= 1.0 - visibility.a / 9.0;\npos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;\npos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;\n}\ngl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );\n}", fragmentShader: "uniform lowp int renderType;\nuniform sampler2D map;\nuniform float opacity;\nuniform vec3 color;\nvarying vec2 vUV;\nvarying float vVisibility;\nvoid main() {\nif( renderType == 0 ) {\ngl_FragColor = vec4( 1.0, 0.0, 1.0, 0.0 );\n} else if( renderType == 1 ) {\ngl_FragColor = texture2D( map, vUV );\n} else {\nvec4 texture = texture2D( map, vUV );\ntexture.a *= opacity * vVisibility;\ngl_FragColor = texture;\ngl_FragColor.rgb *= color;\n}\n}"},
	lensFlare: {vertexShader: "uniform lowp int renderType;\nuniform vec3 screenPosition;\nuniform vec2 scale;\nuniform float rotation;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvoid main() {\nvUV = uv;\nvec2 pos = position;\nif( renderType == 2 ) {\npos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;\npos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;\n}\ngl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );\n}",
		fragmentShader: "precision mediump float;\nuniform lowp int renderType;\nuniform sampler2D map;\nuniform sampler2D occlusionMap;\nuniform float opacity;\nuniform vec3 color;\nvarying vec2 vUV;\nvoid main() {\nif( renderType == 0 ) {\ngl_FragColor = vec4( texture2D( map, vUV ).rgb, 0.0 );\n} else if( renderType == 1 ) {\ngl_FragColor = texture2D( map, vUV );\n} else {\nfloat visibility = texture2D( occlusionMap, vec2( 0.5, 0.1 ) ).a;\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) ).a;\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) ).a;\nvisibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) ).a;\nvisibility = ( 1.0 - visibility / 4.0 );\nvec4 texture = texture2D( map, vUV );\ntexture.a *= opacity * visibility;\ngl_FragColor = texture;\ngl_FragColor.rgb *= color;\n}\n}"}};

/**
 * @author alteredq / http://alteredqualia.com/
 * @author mr.doob / http://mrdoob.com/
 */

Detector = {

	canvas: !!window.CanvasRenderingContext2D,
	webgl: (function () {
		try {
			return !!window.WebGLRenderingContext && !!document.createElement('canvas').getContext('experimental-webgl');
		} catch (e) {
			return false;
		}
	})(),
	workers: !!window.Worker,
	fileapi: window.File && window.FileReader && window.FileList && window.Blob,

	getWebGLErrorMessage: function () {

		var element = document.createElement('div');
		element.id = 'webgl-error-message';
		element.style.fontFamily = 'monospace';
		element.style.fontSize = '13px';
		element.style.fontWeight = 'normal';
		element.style.textAlign = 'center';
		element.style.background = '#fff';
		element.style.color = '#000';
		element.style.padding = '1.5em';
		element.style.width = '400px';
		element.style.margin = '5em auto 0';

		if (!this.webgl) {

			element.innerHTML = window.WebGLRenderingContext ? [
				'Your graphics card does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">WebGL</a>.<br />',
				'Find out how to get it <a href="http://get.webgl.org/" style="color:#000">here</a>.'
			].join('\n') : [
				'Your browser does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">WebGL</a>.<br/>',
				'Find out how to get it <a href="http://get.webgl.org/" style="color:#000">here</a>.'
			].join('\n');

		}

		return element;

	},

	addGetWebGLMessage: function (parameters) {

		var parent, id, element;

		parameters = parameters || {};

		parent = parameters.parent !== undefined ? parameters.parent : document.body;
		id = parameters.id !== undefined ? parameters.id : 'oldie';

		element = Detector.getWebGLErrorMessage();
		element.id = id;

		parent.appendChild(element);

	}

};
// This THREEx helper makes it easy to handle the fullscreen API
// * it hides the prefix for each browser
// * it hides the little discrepencies of the various vendor API
// * at the time of this writing (nov 2011) it is available in 
//   [firefox nightly](http://blog.pearce.org.nz/2011/11/firefoxs-html-full-screen-api-enabled.html),
//   [webkit nightly](http://peter.sh/2011/01/javascript-full-screen-api-navigation-timing-and-repeating-css-gradients/) and
//   [chrome stable](http://updates.html5rocks.com/2011/10/Let-Your-Content-Do-the-Talking-Fullscreen-API).

// # Code

/** @namespace */
var THREEx = THREEx || {};
THREEx.FullScreen = THREEx.FullScreen || {};

/**
 * test if it is possible to have fullscreen
 *
 * @returns {Boolean} true if fullscreen API is available, false otherwise
 */
THREEx.FullScreen.available = function () {
	return this._hasWebkitFullScreen || this._hasMozFullScreen;
}

/**
 * test if fullscreen is currently activated
 *
 * @returns {Boolean} true if fullscreen is currently activated, false otherwise
 */
THREEx.FullScreen.activated = function () {
	if (this._hasWebkitFullScreen) {
		return document.webkitIsFullScreen;
	} else if (this._hasMozFullScreen) {
		return document.mozFullScreen;
	} else {
		console.assert(false);
	}
}

/**
 * Request fullscreen on a given element
 * @param {DomElement} element to make fullscreen. optional. default to document.body
 */
THREEx.FullScreen.request = function (element) {
	element = element || document.body;
	if (this._hasWebkitFullScreen) {
		element.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
	} else if (this._hasMozFullScreen) {
		element.mozRequestFullScreen();
	} else {
		console.assert(false);
	}
}

/**
 * Cancel fullscreen
 */
THREEx.FullScreen.cancel = function () {
	if (this._hasWebkitFullScreen) {
		document.webkitCancelFullScreen();
	} else if (this._hasMozFullScreen) {
		document.mozCancelFullScreen();
	} else {
		console.assert(false);
	}
}

// internal functions to know which fullscreen API implementation is available
THREEx.FullScreen._hasWebkitFullScreen = 'webkitCancelFullScreen' in document ? true : false;
THREEx.FullScreen._hasMozFullScreen = 'mozCancelFullScreen' in document ? true : false;

/**
 * Bind a key to renderer screenshot
 * usage: THREEx.FullScreen.bindKey({ charCode : 'a'.charCodeAt(0) });
 */
THREEx.FullScreen.bindKey = function (opts) {
	opts = opts || {};
	var charCode = opts.charCode || 'f'.charCodeAt(0);
	var dblclick = opts.dblclick !== undefined ? opts.dblclick : false;
	var element = opts.element

	var toggle = function () {
		if (THREEx.FullScreen.activated()) {
			THREEx.FullScreen.cancel();
		} else {
			THREEx.FullScreen.request(element);
		}
	}

	var onKeyPress = function (event) {
		if (event.which !== charCode)    return;
		toggle();
	}.bind(this);

	document.addEventListener('keypress', onKeyPress, false);

	dblclick && document.addEventListener('dblclick', toggle, false);

	return {
		unbind: function () {
			document.removeEventListener('keypress', onKeyPress, false);
			dblclick && document.removeEventListener('dblclick', toggle, false);
		}
	};
}
// This THREEx helper makes it easy to handle window resize.
// It will update renderer and camera when window is resized.
//
// # Usage
//
// **Step 1**: Start updating renderer and camera
//
// ```var windowResize = new THREEx.WindowResize(aRenderer, aCamera)```
//    
// **Step 2**: stop updating renderer and camera
//
// ```windowResize.destroy()```
// # Code

//

/** @namespace */
var THREEx = THREEx || {}

/**
 * Update renderer and camera when the window is resized
 *
 * @param {Object} renderer the renderer to update
 * @param {Object} Camera the camera to update
 * @param {Function} dimension callback for renderer size
 */
THREEx.WindowResize = function (renderer, camera, dimension) {
	dimension = dimension || function () {
		return { width: window.innerWidth, height: window.innerHeight }
	}
	var callback = function () {
		// fetch target renderer size
		var rendererSize = dimension();
		// notify the renderer of the size change
		renderer.setSize(rendererSize.width, rendererSize.height)
		// update the camera
		camera.aspect = rendererSize.width / rendererSize.height
		camera.updateProjectionMatrix()
	}
	// bind the resize event
	window.addEventListener('resize', callback, false)
	// return .stop() the function to stop watching window resize
	return {
		trigger: function () {
			callback()
		},
		/**
		 * Stop watching window resize
		 */
		destroy: function () {
			window.removeEventListener('resize', callback)
		}
	}
}

/**
 * @author qiao / https://github.com/qiao
 * @author mrdoob / http://mrdoob.com
 * @author alteredq / http://alteredqualia.com/
 * @author WestLangley / http://github.com/WestLangley
 */

THREE.OrbitControls = function (object, domElement) {

	this.object = object;
	this.domElement = ( domElement !== undefined ) ? domElement : document;

	// API

	this.enabled = true;

	this.center = new THREE.Vector3();

	this.userZoom = true;
	this.userZoomSpeed = 1.0;

	this.userRotate = true;
	this.userRotateSpeed = 1.0;

	this.userPan = true;
	this.userPanSpeed = 2.0;

	this.autoRotate = false;
	this.autoRotateSpeed = 2.0; // 30 seconds per round when fps is 60

	this.minPolarAngle = 0; // radians
	this.maxPolarAngle = Math.PI; // radians

	this.minDistance = 0;
	this.maxDistance = Infinity;

	// 65 /*A*/, 83 /*S*/, 68 /*D*/
	this.keys = { LEFT: 37, UP: 38, RIGHT: 39, BOTTOM: 40, ROTATE: 65, ZOOM: 83, PAN: 68 };

	// internals

	var scope = this;

	var EPS = 0.000001;
	var PIXELS_PER_ROUND = 1800;

	var rotateStart = new THREE.Vector2();
	var rotateEnd = new THREE.Vector2();
	var rotateDelta = new THREE.Vector2();

	var zoomStart = new THREE.Vector2();
	var zoomEnd = new THREE.Vector2();
	var zoomDelta = new THREE.Vector2();

	var phiDelta = 0;
	var thetaDelta = 0;
	var scale = 1;

	var lastPosition = new THREE.Vector3();

	var STATE = { NONE: -1, ROTATE: 0, ZOOM: 1, PAN: 2 };
	var state = STATE.NONE;

	// events

	var changeEvent = { type: 'change' };


	this.rotateLeft = function (angle) {

		if (angle === undefined) {

			angle = getAutoRotationAngle();

		}

		thetaDelta -= angle;

	};

	this.rotateRight = function (angle) {

		if (angle === undefined) {

			angle = getAutoRotationAngle();

		}

		thetaDelta += angle;

	};

	this.rotateUp = function (angle) {

		if (angle === undefined) {

			angle = getAutoRotationAngle();

		}

		phiDelta -= angle;

	};

	this.rotateDown = function (angle) {

		if (angle === undefined) {

			angle = getAutoRotationAngle();

		}

		phiDelta += angle;

	};

	this.zoomIn = function (zoomScale) {

		if (zoomScale === undefined) {

			zoomScale = getZoomScale();

		}

		scale /= zoomScale;

	};

	this.zoomOut = function (zoomScale) {

		if (zoomScale === undefined) {

			zoomScale = getZoomScale();

		}

		scale *= zoomScale;

	};

	this.pan = function (distance) {

		distance.transformDirection(this.object.matrix);
		distance.multiplyScalar(scope.userPanSpeed);

		this.object.position.add(distance);
		this.center.add(distance);

	};

	this.update = function () {

		var position = this.object.position;
		var offset = position.clone().sub(this.center);

		// angle from z-axis around y-axis

		var theta = Math.atan2(offset.x, offset.z);

		// angle from y-axis

		var phi = Math.atan2(Math.sqrt(offset.x * offset.x + offset.z * offset.z), offset.y);

		if (this.autoRotate) {

			this.rotateLeft(getAutoRotationAngle());

		}

		theta += thetaDelta;
		phi += phiDelta;

		// restrict phi to be between desired limits
		phi = Math.max(this.minPolarAngle, Math.min(this.maxPolarAngle, phi));

		// restrict phi to be betwee EPS and PI-EPS
		phi = Math.max(EPS, Math.min(Math.PI - EPS, phi));

		var radius = offset.length() * scale;

		// restrict radius to be between desired limits
		radius = Math.max(this.minDistance, Math.min(this.maxDistance, radius));

		offset.x = radius * Math.sin(phi) * Math.sin(theta);
		offset.y = radius * Math.cos(phi);
		offset.z = radius * Math.sin(phi) * Math.cos(theta);

		position.copy(this.center).add(offset);

		this.object.lookAt(this.center);

		thetaDelta = 0;
		phiDelta = 0;
		scale = 1;

		if (lastPosition.distanceTo(this.object.position) > 0) {

			this.dispatchEvent(changeEvent);

			lastPosition.copy(this.object.position);

		}

	};


	function getAutoRotationAngle() {

		return 2 * Math.PI / 60 / 60 * scope.autoRotateSpeed;

	}

	function getZoomScale() {

		return Math.pow(0.95, scope.userZoomSpeed);

	}

	function onMouseDown(event) {

		if (scope.enabled === false) return;
		if (scope.userRotate === false) return;

		event.preventDefault();

		if (state === STATE.NONE) {
			if (event.button === 0)
				state = STATE.ROTATE;
			if (event.button === 1)
				state = STATE.ZOOM;
			if (event.button === 2)
				state = STATE.PAN;
		}


		if (state === STATE.ROTATE) {

			//state = STATE.ROTATE;

			rotateStart.set(event.clientX, event.clientY);

		} else if (state === STATE.ZOOM) {

			//state = STATE.ZOOM;

			zoomStart.set(event.clientX, event.clientY);

		} else if (state === STATE.PAN) {

			//state = STATE.PAN;

		}

		document.addEventListener('mousemove', onMouseMove, false);
		document.addEventListener('mouseup', onMouseUp, false);

	}

	function onMouseMove(event) {

		if (scope.enabled === false) return;

		event.preventDefault();


		if (state === STATE.ROTATE) {

			rotateEnd.set(event.clientX, event.clientY);
			rotateDelta.subVectors(rotateEnd, rotateStart);

			scope.rotateLeft(2 * Math.PI * rotateDelta.x / PIXELS_PER_ROUND * scope.userRotateSpeed);
			scope.rotateUp(2 * Math.PI * rotateDelta.y / PIXELS_PER_ROUND * scope.userRotateSpeed);

			rotateStart.copy(rotateEnd);

		} else if (state === STATE.ZOOM) {

			zoomEnd.set(event.clientX, event.clientY);
			zoomDelta.subVectors(zoomEnd, zoomStart);

			if (zoomDelta.y > 0) {

				scope.zoomIn();

			} else {

				scope.zoomOut();

			}

			zoomStart.copy(zoomEnd);

		} else if (state === STATE.PAN) {

			var movementX = event.movementX || event.mozMovementX || event.webkitMovementX || 0;
			var movementY = event.movementY || event.mozMovementY || event.webkitMovementY || 0;

			scope.pan(new THREE.Vector3(-movementX, movementY, 0));

		}

	}

	function onMouseUp(event) {

		if (scope.enabled === false) return;
		if (scope.userRotate === false) return;

		document.removeEventListener('mousemove', onMouseMove, false);
		document.removeEventListener('mouseup', onMouseUp, false);

		state = STATE.NONE;

	}

	function onMouseWheel(event) {

		if (scope.enabled === false) return;
		if (scope.userZoom === false) return;

		var delta = 0;

		if (event.wheelDelta) { // WebKit / Opera / Explorer 9

			delta = event.wheelDelta;

		} else if (event.detail) { // Firefox

			delta = -event.detail;

		}

		if (delta > 0) {

			scope.zoomOut();

		} else {

			scope.zoomIn();

		}

	}

	function onKeyDown(event) {

		if (scope.enabled === false) return;
		if (scope.userPan === false) return;

		switch (event.keyCode) {

			/*case scope.keys.UP:
			 scope.pan( new THREE.Vector3( 0, 1, 0 ) );
			 break;
			 case scope.keys.BOTTOM:
			 scope.pan( new THREE.Vector3( 0, - 1, 0 ) );
			 break;
			 case scope.keys.LEFT:
			 scope.pan( new THREE.Vector3( - 1, 0, 0 ) );
			 break;
			 case scope.keys.RIGHT:
			 scope.pan( new THREE.Vector3( 1, 0, 0 ) );
			 break;
			 */
			case scope.keys.ROTATE:
				state = STATE.ROTATE;
				break;
			case scope.keys.ZOOM:
				state = STATE.ZOOM;
				break;
			case scope.keys.PAN:
				state = STATE.PAN;
				break;

		}

	}

	function onKeyUp(event) {

		switch (event.keyCode) {

			case scope.keys.ROTATE:
			case scope.keys.ZOOM:
			case scope.keys.PAN:
				state = STATE.NONE;
				break;
		}

	}

	this.domElement.addEventListener('contextmenu', function (event) {
		event.preventDefault();
	}, false);
	this.domElement.addEventListener('mousedown', onMouseDown, false);
	this.domElement.addEventListener('mousewheel', onMouseWheel, false);
	this.domElement.addEventListener('DOMMouseScroll', onMouseWheel, false); // firefox
	window.addEventListener('keydown', onKeyDown, false);
	window.addEventListener('keyup', onKeyUp, false);

};

THREE.OrbitControls.prototype = Object.create(THREE.EventDispatcher.prototype);
var dat = dat || {};
dat.gui = dat.gui || {};
dat.utils = dat.utils || {};
dat.controllers = dat.controllers || {};
dat.dom = dat.dom || {};
dat.color = dat.color || {};
dat.utils.css = function () {
	return{load: function (e, a) {
		a = a || document;
		var b = a.createElement("link");
		b.type = "text/css";
		b.rel = "stylesheet";
		b.href = e;
		a.getElementsByTagName("head")[0].appendChild(b)
	}, inject: function (e, a) {
		a = a || document;
		var b = document.createElement("style");
		b.type = "text/css";
		b.innerHTML = e;
		a.getElementsByTagName("head")[0].appendChild(b)
	}}
}();
dat.utils.common = function () {
	var e = Array.prototype.forEach, a = Array.prototype.slice;
	return{BREAK: {}, extend: function (b) {
		this.each(a.call(arguments, 1), function (a) {
			for (var f in a)this.isUndefined(a[f]) || (b[f] = a[f])
		}, this);
		return b
	}, defaults: function (b) {
		this.each(a.call(arguments, 1), function (a) {
			for (var f in a)this.isUndefined(b[f]) && (b[f] = a[f])
		}, this);
		return b
	}, compose: function () {
		var b = a.call(arguments);
		return function () {
			for (var d = a.call(arguments), f = b.length - 1; 0 <= f; f--)d = [b[f].apply(this, d)];
			return d[0]
		}
	},
		each: function (a, d, f) {
			if (e && a.forEach === e)a.forEach(d, f); else if (a.length === a.length + 0)for (var c = 0, p = a.length; c < p && !(c in a && d.call(f, a[c], c) === this.BREAK); c++); else for (c in a)if (d.call(f, a[c], c) === this.BREAK)break
		}, defer: function (a) {
			setTimeout(a, 0)
		}, toArray: function (b) {
			return b.toArray ? b.toArray() : a.call(b)
		}, isUndefined: function (a) {
			return void 0 === a
		}, isNull: function (a) {
			return null === a
		}, isNaN: function (a) {
			return a !== a
		}, isArray: Array.isArray || function (a) {
			return a.constructor === Array
		}, isObject: function (a) {
			return a ===
				Object(a)
		}, isNumber: function (a) {
			return a === a + 0
		}, isString: function (a) {
			return a === a + ""
		}, isBoolean: function (a) {
			return!1 === a || !0 === a
		}, isFunction: function (a) {
			return"[object Function]" === Object.prototype.toString.call(a)
		}}
}();
dat.controllers.Controller = function (e) {
	var a = function (a, d) {
		this.initialValue = a[d];
		this.domElement = document.createElement("div");
		this.object = a;
		this.property = d;
		this.__onFinishChange = this.__onChange = void 0
	};
	e.extend(a.prototype, {onChange: function (a) {
		this.__onChange = a;
		return this
	}, onFinishChange: function (a) {
		this.__onFinishChange = a;
		return this
	}, setValue: function (a) {
		this.object[this.property] = a;
		this.__onChange && this.__onChange.call(this, a);
		this.updateDisplay();
		return this
	}, getValue: function () {
		return this.object[this.property]
	},
		updateDisplay: function () {
			return this
		}, isModified: function () {
			return this.initialValue !== this.getValue()
		}});
	return a
}(dat.utils.common);
dat.dom.dom = function (e) {
	function a(c) {
		if ("0" === c || e.isUndefined(c))return 0;
		c = c.match(d);
		return e.isNull(c) ? 0 : parseFloat(c[1])
	}

	var b = {};
	e.each({HTMLEvents: ["change"], MouseEvents: ["click", "mousemove", "mousedown", "mouseup", "mouseover"], KeyboardEvents: ["keydown"]}, function (c, a) {
		e.each(c, function (c) {
			b[c] = a
		})
	});
	var d = /(\d+(\.\d+)?)px/, f = {makeSelectable: function (c, a) {
		void 0 !== c && void 0 !== c.style && (c.onselectstart = a ? function () {
			return!1
		} : function () {
		}, c.style.MozUserSelect = a ? "auto" : "none", c.style.KhtmlUserSelect =
			a ? "auto" : "none", c.unselectable = a ? "on" : "off")
	}, makeFullscreen: function (c, a, d) {
		e.isUndefined(a) && (a = !0);
		e.isUndefined(d) && (d = !0);
		c.style.position = "absolute";
		a && (c.style.left = 0, c.style.right = 0);
		d && (c.style.top = 0, c.style.bottom = 0)
	}, fakeEvent: function (c, a, d, f) {
		d = d || {};
		var q = b[a];
		if (!q)throw Error("Event type " + a + " not supported.");
		var n = document.createEvent(q);
		switch (q) {
			case "MouseEvents":
				n.initMouseEvent(a, d.bubbles || !1, d.cancelable || !0, window, d.clickCount || 1, 0, 0, d.x || d.clientX || 0, d.y || d.clientY || 0, !1,
					!1, !1, !1, 0, null);
				break;
			case "KeyboardEvents":
				q = n.initKeyboardEvent || n.initKeyEvent;
				e.defaults(d, {cancelable: !0, ctrlKey: !1, altKey: !1, shiftKey: !1, metaKey: !1, keyCode: void 0, charCode: void 0});
				q(a, d.bubbles || !1, d.cancelable, window, d.ctrlKey, d.altKey, d.shiftKey, d.metaKey, d.keyCode, d.charCode);
				break;
			default:
				n.initEvent(a, d.bubbles || !1, d.cancelable || !0)
		}
		e.defaults(n, f);
		c.dispatchEvent(n)
	}, bind: function (c, a, d, b) {
		c.addEventListener ? c.addEventListener(a, d, b || !1) : c.attachEvent && c.attachEvent("on" + a, d);
		return f
	},
		unbind: function (c, a, d, b) {
			c.removeEventListener ? c.removeEventListener(a, d, b || !1) : c.detachEvent && c.detachEvent("on" + a, d);
			return f
		}, addClass: function (a, d) {
			if (void 0 === a.className)a.className = d; else if (a.className !== d) {
				var b = a.className.split(/ +/);
				-1 == b.indexOf(d) && (b.push(d), a.className = b.join(" ").replace(/^\s+/, "").replace(/\s+$/, ""))
			}
			return f
		}, removeClass: function (a, d) {
			if (d) {
				if (void 0 !== a.className)if (a.className === d)a.removeAttribute("class"); else {
					var b = a.className.split(/ +/), e = b.indexOf(d);
					-1 !=
						e && (b.splice(e, 1), a.className = b.join(" "))
				}
			} else a.className = void 0;
			return f
		}, hasClass: function (a, d) {
			return RegExp("(?:^|\\s+)" + d + "(?:\\s+|$)").test(a.className) || !1
		}, getWidth: function (c) {
			c = getComputedStyle(c);
			return a(c["border-left-width"]) + a(c["border-right-width"]) + a(c["padding-left"]) + a(c["padding-right"]) + a(c.width)
		}, getHeight: function (c) {
			c = getComputedStyle(c);
			return a(c["border-top-width"]) + a(c["border-bottom-width"]) + a(c["padding-top"]) + a(c["padding-bottom"]) + a(c.height)
		}, getOffset: function (a) {
			var d =
			{left: 0, top: 0};
			if (a.offsetParent) {
				do d.left += a.offsetLeft, d.top += a.offsetTop; while (a = a.offsetParent)
			}
			return d
		}, isActive: function (a) {
			return a === document.activeElement && (a.type || a.href)
		}};
	return f
}(dat.utils.common);
dat.controllers.OptionController = function (e, a, b) {
	var d = function (f, c, e) {
		d.superclass.call(this, f, c);
		var k = this;
		this.__select = document.createElement("select");
		if (b.isArray(e)) {
			var l = {};
			b.each(e, function (a) {
				l[a] = a
			});
			e = l
		}
		b.each(e, function (a, c) {
			var d = document.createElement("option");
			d.innerHTML = c;
			d.setAttribute("value", a);
			k.__select.appendChild(d)
		});
		this.updateDisplay();
		a.bind(this.__select, "change", function () {
			k.setValue(this.options[this.selectedIndex].value)
		});
		this.domElement.appendChild(this.__select)
	};
	d.superclass = e;
	b.extend(d.prototype, e.prototype, {setValue: function (a) {
		a = d.superclass.prototype.setValue.call(this, a);
		this.__onFinishChange && this.__onFinishChange.call(this, this.getValue());
		return a
	}, updateDisplay: function () {
		this.__select.value = this.getValue();
		return d.superclass.prototype.updateDisplay.call(this)
	}});
	return d
}(dat.controllers.Controller, dat.dom.dom, dat.utils.common);
dat.controllers.NumberController = function (e, a) {
	var b = function (d, f, c) {
		b.superclass.call(this, d, f);
		c = c || {};
		this.__min = c.min;
		this.__max = c.max;
		this.__step = c.step;
		a.isUndefined(this.__step) ? this.__impliedStep = 0 == this.initialValue ? 1 : Math.pow(10, Math.floor(Math.log(this.initialValue) / Math.LN10)) / 10 : this.__impliedStep = this.__step;
		d = this.__impliedStep;
		d = d.toString();
		d = -1 < d.indexOf(".") ? d.length - d.indexOf(".") - 1 : 0;
		this.__precision = d
	};
	b.superclass = e;
	a.extend(b.prototype, e.prototype, {setValue: function (a) {
		void 0 !==
			this.__min && a < this.__min ? a = this.__min : void 0 !== this.__max && a > this.__max && (a = this.__max);
		void 0 !== this.__step && 0 != a % this.__step && (a = Math.round(a / this.__step) * this.__step);
		return b.superclass.prototype.setValue.call(this, a)
	}, min: function (a) {
		this.__min = a;
		return this
	}, max: function (a) {
		this.__max = a;
		return this
	}, step: function (a) {
		this.__step = a;
		return this
	}});
	return b
}(dat.controllers.Controller, dat.utils.common);
dat.controllers.NumberControllerBox = function (e, a, b) {
	var d = function (f, c, e) {
		function k() {
			var a = parseFloat(n.__input.value);
			b.isNaN(a) || n.setValue(a)
		}

		function l(a) {
			var c = r - a.clientY;
			n.setValue(n.getValue() + c * n.__impliedStep);
			r = a.clientY
		}

		function q() {
			a.unbind(window, "mousemove", l);
			a.unbind(window, "mouseup", q)
		}

		this.__truncationSuspended = !1;
		d.superclass.call(this, f, c, e);
		var n = this, r;
		this.__input = document.createElement("input");
		this.__input.setAttribute("type", "text");
		a.bind(this.__input, "change", k);
		a.bind(this.__input,
			"blur", function () {
				k();
				n.__onFinishChange && n.__onFinishChange.call(n, n.getValue())
			});
		a.bind(this.__input, "mousedown", function (c) {
			a.bind(window, "mousemove", l);
			a.bind(window, "mouseup", q);
			r = c.clientY
		});
		a.bind(this.__input, "keydown", function (a) {
			13 === a.keyCode && (n.__truncationSuspended = !0, this.blur(), n.__truncationSuspended = !1)
		});
		this.updateDisplay();
		this.domElement.appendChild(this.__input)
	};
	d.superclass = e;
	b.extend(d.prototype, e.prototype, {updateDisplay: function () {
		var a = this.__input, c;
		if (this.__truncationSuspended)c =
			this.getValue(); else {
			c = this.getValue();
			var b = Math.pow(10, this.__precision);
			c = Math.round(c * b) / b
		}
		a.value = c;
		return d.superclass.prototype.updateDisplay.call(this)
	}});
	return d
}(dat.controllers.NumberController, dat.dom.dom, dat.utils.common);
dat.controllers.NumberControllerSlider = function (e, a, b, d, f) {
	function c(a, c, d, b, f) {
		return b + (a - c) / (d - c) * (f - b)
	}

	var p = function (d, b, f, e, r) {
		function y(d) {
			d.preventDefault();
			var b = a.getOffset(h.__background), f = a.getWidth(h.__background);
			h.setValue(c(d.clientX, b.left, b.left + f, h.__min, h.__max));
			return!1
		}

		function g() {
			a.unbind(window, "mousemove", y);
			a.unbind(window, "mouseup", g);
			h.__onFinishChange && h.__onFinishChange.call(h, h.getValue())
		}

		p.superclass.call(this, d, b, {min: f, max: e, step: r});
		var h = this;
		this.__background =
			document.createElement("div");
		this.__foreground = document.createElement("div");
		a.bind(this.__background, "mousedown", function (c) {
			a.bind(window, "mousemove", y);
			a.bind(window, "mouseup", g);
			y(c)
		});
		a.addClass(this.__background, "slider");
		a.addClass(this.__foreground, "slider-fg");
		this.updateDisplay();
		this.__background.appendChild(this.__foreground);
		this.domElement.appendChild(this.__background)
	};
	p.superclass = e;
	p.useDefaultStyles = function () {
		b.inject(f)
	};
	d.extend(p.prototype, e.prototype, {updateDisplay: function () {
		var a =
			(this.getValue() - this.__min) / (this.__max - this.__min);
		this.__foreground.style.width = 100 * a + "%";
		return p.superclass.prototype.updateDisplay.call(this)
	}});
	return p
}(dat.controllers.NumberController, dat.dom.dom, dat.utils.css, dat.utils.common, "/**\n * dat-gui JavaScript Controller Library\n * http://code.google.com/p/dat-gui\n *\n * Copyright 2011 Data Arts Team, Google Creative Lab\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n */\n\n.slider {\n  box-shadow: inset 0 2px 4px rgba(0,0,0,0.15);\n  height: 1em;\n  border-radius: 1em;\n  background-color: #eee;\n  padding: 0 0.5em;\n  overflow: hidden;\n}\n\n.slider-fg {\n  padding: 1px 0 2px 0;\n  background-color: #aaa;\n  height: 1em;\n  margin-left: -0.5em;\n  padding-right: 0.5em;\n  border-radius: 1em 0 0 1em;\n}\n\n.slider-fg:after {\n  display: inline-block;\n  border-radius: 1em;\n  background-color: #fff;\n  border:  1px solid #aaa;\n  content: '';\n  float: right;\n  margin-right: -1em;\n  margin-top: -1px;\n  height: 0.9em;\n  width: 0.9em;\n}");
dat.controllers.FunctionController = function (e, a, b) {
	var d = function (b, c, e) {
		d.superclass.call(this, b, c);
		var k = this;
		this.__button = document.createElement("div");
		this.__button.innerHTML = void 0 === e ? "Fire" : e;
		a.bind(this.__button, "click", function (a) {
			a.preventDefault();
			k.fire();
			return!1
		});
		a.addClass(this.__button, "button");
		this.domElement.appendChild(this.__button)
	};
	d.superclass = e;
	b.extend(d.prototype, e.prototype, {fire: function () {
		this.__onChange && this.__onChange.call(this);
		this.__onFinishChange && this.__onFinishChange.call(this,
			this.getValue());
		this.getValue().call(this.object)
	}});
	return d
}(dat.controllers.Controller, dat.dom.dom, dat.utils.common);
dat.controllers.BooleanController = function (e, a, b) {
	var d = function (b, c) {
		d.superclass.call(this, b, c);
		var e = this;
		this.__prev = this.getValue();
		this.__checkbox = document.createElement("input");
		this.__checkbox.setAttribute("type", "checkbox");
		a.bind(this.__checkbox, "change", function () {
			e.setValue(!e.__prev)
		}, !1);
		this.domElement.appendChild(this.__checkbox);
		this.updateDisplay()
	};
	d.superclass = e;
	b.extend(d.prototype, e.prototype, {setValue: function (a) {
		a = d.superclass.prototype.setValue.call(this, a);
		this.__onFinishChange &&
		this.__onFinishChange.call(this, this.getValue());
		this.__prev = this.getValue();
		return a
	}, updateDisplay: function () {
		!0 === this.getValue() ? (this.__checkbox.setAttribute("checked", "checked"), this.__checkbox.checked = !0) : this.__checkbox.checked = !1;
		return d.superclass.prototype.updateDisplay.call(this)
	}});
	return d
}(dat.controllers.Controller, dat.dom.dom, dat.utils.common);
dat.color.toString = function (e) {
	return function (a) {
		if (1 == a.a || e.isUndefined(a.a)) {
			for (a = a.hex.toString(16); 6 > a.length;)a = "0" + a;
			return"#" + a
		}
		return"rgba(" + Math.round(a.r) + "," + Math.round(a.g) + "," + Math.round(a.b) + "," + a.a + ")"
	}
}(dat.utils.common);
dat.color.interpret = function (e, a) {
	var b, d, f = [
		{litmus: a.isString, conversions: {THREE_CHAR_HEX: {read: function (a) {
			a = a.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);
			return null === a ? !1 : {space: "HEX", hex: parseInt("0x" + a[1].toString() + a[1].toString() + a[2].toString() + a[2].toString() + a[3].toString() + a[3].toString())}
		}, write: e}, SIX_CHAR_HEX: {read: function (a) {
			a = a.match(/^#([A-F0-9]{6})$/i);
			return null === a ? !1 : {space: "HEX", hex: parseInt("0x" + a[1].toString())}
		}, write: e}, CSS_RGB: {read: function (a) {
			a = a.match(/^rgb\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);
			return null === a ? !1 : {space: "RGB", r: parseFloat(a[1]), g: parseFloat(a[2]), b: parseFloat(a[3])}
		}, write: e}, CSS_RGBA: {read: function (a) {
			a = a.match(/^rgba\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\,\s*(.+)\s*\)/);
			return null === a ? !1 : {space: "RGB", r: parseFloat(a[1]), g: parseFloat(a[2]), b: parseFloat(a[3]), a: parseFloat(a[4])}
		}, write: e}}},
		{litmus: a.isNumber, conversions: {HEX: {read: function (a) {
			return{space: "HEX", hex: a, conversionName: "HEX"}
		}, write: function (a) {
			return a.hex
		}}}},
		{litmus: a.isArray, conversions: {RGB_ARRAY: {read: function (a) {
			return 3 !=
				a.length ? !1 : {space: "RGB", r: a[0], g: a[1], b: a[2]}
		}, write: function (a) {
			return[a.r, a.g, a.b]
		}}, RGBA_ARRAY: {read: function (a) {
			return 4 != a.length ? !1 : {space: "RGB", r: a[0], g: a[1], b: a[2], a: a[3]}
		}, write: function (a) {
			return[a.r, a.g, a.b, a.a]
		}}}},
		{litmus: a.isObject, conversions: {RGBA_OBJ: {read: function (c) {
			return a.isNumber(c.r) && a.isNumber(c.g) && a.isNumber(c.b) && a.isNumber(c.a) ? {space: "RGB", r: c.r, g: c.g, b: c.b, a: c.a} : !1
		}, write: function (a) {
			return{r: a.r, g: a.g, b: a.b, a: a.a}
		}}, RGB_OBJ: {read: function (c) {
			return a.isNumber(c.r) &&
				a.isNumber(c.g) && a.isNumber(c.b) ? {space: "RGB", r: c.r, g: c.g, b: c.b} : !1
		}, write: function (a) {
			return{r: a.r, g: a.g, b: a.b}
		}}, HSVA_OBJ: {read: function (c) {
			return a.isNumber(c.h) && a.isNumber(c.s) && a.isNumber(c.v) && a.isNumber(c.a) ? {space: "HSV", h: c.h, s: c.s, v: c.v, a: c.a} : !1
		}, write: function (a) {
			return{h: a.h, s: a.s, v: a.v, a: a.a}
		}}, HSV_OBJ: {read: function (d) {
			return a.isNumber(d.h) && a.isNumber(d.s) && a.isNumber(d.v) ? {space: "HSV", h: d.h, s: d.s, v: d.v} : !1
		}, write: function (a) {
			return{h: a.h, s: a.s, v: a.v}
		}}}}
	];
	return function () {
		d = !1;
		var c = 1 < arguments.length ? a.toArray(arguments) : arguments[0];
		a.each(f, function (e) {
			if (e.litmus(c))return a.each(e.conversions, function (e, f) {
				b = e.read(c);
				if (!1 === d && !1 !== b)return d = b, b.conversionName = f, b.conversion = e, a.BREAK
			}), a.BREAK
		});
		return d
	}
}(dat.color.toString, dat.utils.common);
dat.GUI = dat.gui.GUI = function (e, a, b, d, f, c, p, k, l, q, n, r, y, g, h) {
	function t(a, c, b, e) {
		if (void 0 === c[b])throw Error("Object " + c + ' has no property "' + b + '"');
		e.color ? c = new n(c, b) : (c = [c, b].concat(e.factoryArgs), c = d.apply(a, c));
		e.before instanceof f && (e.before = e.before.__li);
		v(a, c);
		g.addClass(c.domElement, "c");
		b = document.createElement("span");
		g.addClass(b, "property-name");
		b.innerHTML = c.property;
		var q = document.createElement("div");
		q.appendChild(b);
		q.appendChild(c.domElement);
		e = u(a, q, e.before);
		g.addClass(e, m.CLASS_CONTROLLER_ROW);
		g.addClass(e, typeof c.getValue());
		s(a, e, c);
		a.__controllers.push(c);
		return c
	}

	function u(a, d, c) {
		var b = document.createElement("li");
		d && b.appendChild(d);
		c ? a.__ul.insertBefore(b, params.before) : a.__ul.appendChild(b);
		a.onResize();
		return b
	}

	function s(a, d, b) {
		b.__li = d;
		b.__gui = a;
		h.extend(b, {options: function (d) {
			if (1 < arguments.length)return b.remove(), t(a, b.object, b.property, {before: b.__li.nextElementSibling, factoryArgs: [h.toArray(arguments)]});
			if (h.isArray(d) || h.isObject(d))return b.remove(), t(a, b.object, b.property,
				{before: b.__li.nextElementSibling, factoryArgs: [d]})
		}, name: function (a) {
			b.__li.firstElementChild.firstElementChild.innerHTML = a;
			return b
		}, listen: function () {
			b.__gui.listen(b);
			return b
		}, remove: function () {
			b.__gui.remove(b);
			return b
		}});
		if (b instanceof l) {
			var e = new k(b.object, b.property, {min: b.__min, max: b.__max, step: b.__step});
			h.each(["updateDisplay", "onChange", "onFinishChange"], function (a) {
				var d = b[a], J = e[a];
				b[a] = e[a] = function () {
					var a = Array.prototype.slice.call(arguments);
					d.apply(b, a);
					return J.apply(e, a)
				}
			});
			g.addClass(d, "has-slider");
			b.domElement.insertBefore(e.domElement, b.domElement.firstElementChild)
		} else if (b instanceof k) {
			var f = function (d) {
				return h.isNumber(b.__min) && h.isNumber(b.__max) ? (b.remove(), t(a, b.object, b.property, {before: b.__li.nextElementSibling, factoryArgs: [b.__min, b.__max, b.__step]})) : d
			};
			b.min = h.compose(f, b.min);
			b.max = h.compose(f, b.max)
		} else b instanceof c ? (g.bind(d, "click", function () {
			g.fakeEvent(b.__checkbox, "click")
		}), g.bind(b.__checkbox, "click", function (a) {
			a.stopPropagation()
		})) :
			b instanceof p ? (g.bind(d, "click", function () {
				g.fakeEvent(b.__button, "click")
			}), g.bind(d, "mouseover", function () {
				g.addClass(b.__button, "hover")
			}), g.bind(d, "mouseout", function () {
				g.removeClass(b.__button, "hover")
			})) : b instanceof n && (g.addClass(d, "color"), b.updateDisplay = h.compose(function (a) {
				d.style.borderLeftColor = b.__color.toString();
				return a
			}, b.updateDisplay), b.updateDisplay());
		b.setValue = h.compose(function (d) {
			a.getRoot().__preset_select && b.isModified() && D(a.getRoot(), !0);
			return d
		}, b.setValue)
	}

	function v(a, d) {
		var b = a.getRoot(), c = b.__rememberedObjects.indexOf(d.object);
		if (-1 != c) {
			var e = b.__rememberedObjectIndecesToControllers[c];
			void 0 === e && (e = {}, b.__rememberedObjectIndecesToControllers[c] = e);
			e[d.property] = d;
			if (b.load && b.load.remembered) {
				b = b.load.remembered;
				if (b[a.preset])b = b[a.preset]; else if (b[z])b = b[z]; else return;
				b[c] && void 0 !== b[c][d.property] && (c = b[c][d.property], d.initialValue = c, d.setValue(c))
			}
		}
	}

	function K(a) {
		var b = a.__save_row = document.createElement("li");
		g.addClass(a.domElement, "has-save");
		a.__ul.insertBefore(b,
			a.__ul.firstChild);
		g.addClass(b, "save-row");
		var d = document.createElement("span");
		d.innerHTML = "&nbsp;";
		g.addClass(d, "button gears");
		var c = document.createElement("span");
		c.innerHTML = "Save";
		g.addClass(c, "button");
		g.addClass(c, "save");
		var e = document.createElement("span");
		e.innerHTML = "New";
		g.addClass(e, "button");
		g.addClass(e, "save-as");
		var f = document.createElement("span");
		f.innerHTML = "Revert";
		g.addClass(f, "button");
		g.addClass(f, "revert");
		var q = a.__preset_select = document.createElement("select");
		a.load &&
			a.load.remembered ? h.each(a.load.remembered, function (b, d) {
			E(a, d, d == a.preset)
		}) : E(a, z, !1);
		g.bind(q, "change", function () {
			for (var b = 0; b < a.__preset_select.length; b++)a.__preset_select[b].innerHTML = a.__preset_select[b].value;
			a.preset = this.value
		});
		b.appendChild(q);
		b.appendChild(d);
		b.appendChild(c);
		b.appendChild(e);
		b.appendChild(f);
		if (w) {
			var b = document.getElementById("dg-save-locally"), n = document.getElementById("dg-local-explain");
			b.style.display = "block";
			b = document.getElementById("dg-local-storage");
			"true" ===
				localStorage.getItem(document.location.href + ".isLocal") && b.setAttribute("checked", "checked");
			var k = function () {
				n.style.display = a.useLocalStorage ? "block" : "none"
			};
			k();
			g.bind(b, "change", function () {
				a.useLocalStorage = !a.useLocalStorage;
				k()
			})
		}
		var r = document.getElementById("dg-new-constructor");
		g.bind(r, "keydown", function (a) {
			!a.metaKey || 67 !== a.which && 67 != a.keyCode || A.hide()
		});
		g.bind(d, "click", function () {
			r.innerHTML = JSON.stringify(a.getSaveObject(), void 0, 2);
			A.show();
			r.focus();
			r.select()
		});
		g.bind(c, "click",
			function () {
				a.save()
			});
		g.bind(e, "click", function () {
			var b = prompt("Enter a new preset name.");
			b && a.saveAs(b)
		});
		g.bind(f, "click", function () {
			a.revert()
		})
	}

	function L(a) {
		function b(f) {
			f.preventDefault();
			e = f.clientX;
			g.addClass(a.__closeButton, m.CLASS_DRAG);
			g.bind(window, "mousemove", d);
			g.bind(window, "mouseup", c);
			return!1
		}

		function d(b) {
			b.preventDefault();
			a.width += e - b.clientX;
			a.onResize();
			e = b.clientX;
			return!1
		}

		function c() {
			g.removeClass(a.__closeButton, m.CLASS_DRAG);
			g.unbind(window, "mousemove", d);
			g.unbind(window,
				"mouseup", c)
		}

		a.__resize_handle = document.createElement("div");
		h.extend(a.__resize_handle.style, {width: "6px", marginLeft: "-3px", height: "200px", cursor: "ew-resize", position: "absolute"});
		var e;
		g.bind(a.__resize_handle, "mousedown", b);
		g.bind(a.__closeButton, "mousedown", b);
		a.domElement.insertBefore(a.__resize_handle, a.domElement.firstElementChild)
	}

	function F(a, b) {
		a.domElement.style.width = b + "px";
		a.__save_row && a.autoPlace && (a.__save_row.style.width = b + "px");
		a.__closeButton && (a.__closeButton.style.width = b + "px")
	}

	function B(a, b) {
		var d = {};
		h.each(a.__rememberedObjects, function (c, e) {
			var f = {};
			h.each(a.__rememberedObjectIndecesToControllers[e], function (a, d) {
				f[d] = b ? a.initialValue : a.getValue()
			});
			d[e] = f
		});
		return d
	}

	function E(a, b, d) {
		var c = document.createElement("option");
		c.innerHTML = b;
		c.value = b;
		a.__preset_select.appendChild(c);
		d && (a.__preset_select.selectedIndex = a.__preset_select.length - 1)
	}

	function D(a, b) {
		var d = a.__preset_select[a.__preset_select.selectedIndex];
		d.innerHTML = b ? d.value + "*" : d.value
	}

	function G(a) {
		0 != a.length &&
		r(function () {
			G(a)
		});
		h.each(a, function (a) {
			a.updateDisplay()
		})
	}

	e.inject(b);
	var z = "Default", w;
	try {
		w = "localStorage"in window && null !== window.localStorage
	} catch (M) {
		w = !1
	}
	var A, H = !0, x, C = !1, I = [], m = function (a) {
		function b() {
			localStorage.setItem(document.location.href + ".gui", JSON.stringify(c.getSaveObject()))
		}

		function d() {
			var a = c.getRoot();
			a.width += 1;
			h.defer(function () {
				a.width -= 1
			})
		}

		var c = this;
		this.domElement = document.createElement("div");
		this.__ul = document.createElement("ul");
		this.domElement.appendChild(this.__ul);
		g.addClass(this.domElement, "dg");
		this.__folders = {};
		this.__controllers = [];
		this.__rememberedObjects = [];
		this.__rememberedObjectIndecesToControllers = [];
		this.__listening = [];
		a = a || {};
		a = h.defaults(a, {autoPlace: !0, width: m.DEFAULT_WIDTH});
		a = h.defaults(a, {resizable: a.autoPlace, hideable: a.autoPlace});
		h.isUndefined(a.load) ? a.load = {preset: z} : a.preset && (a.load.preset = a.preset);
		h.isUndefined(a.parent) && a.hideable && I.push(this);
		a.resizable = h.isUndefined(a.parent) && a.resizable;
		a.autoPlace && h.isUndefined(a.scrollable) &&
		(a.scrollable = !0);
		var e = w && "true" === localStorage.getItem(document.location.href + ".isLocal");
		Object.defineProperties(this, {parent: {get: function () {
			return a.parent
		}}, scrollable: {get: function () {
			return a.scrollable
		}}, autoPlace: {get: function () {
			return a.autoPlace
		}}, preset: {get: function () {
			return c.parent ? c.getRoot().preset : a.load.preset
		}, set: function (b) {
			c.parent ? c.getRoot().preset = b : a.load.preset = b;
			for (b = 0; b < this.__preset_select.length; b++)this.__preset_select[b].value == this.preset && (this.__preset_select.selectedIndex =
				b);
			c.revert()
		}}, width: {get: function () {
			return a.width
		}, set: function (b) {
			a.width = b;
			F(c, b)
		}}, name: {get: function () {
			return a.name
		}, set: function (b) {
			a.name = b;
			q && (q.innerHTML = a.name)
		}}, closed: {get: function () {
			return a.closed
		}, set: function (b) {
			a.closed = b;
			a.closed ? g.addClass(c.__ul, m.CLASS_CLOSED) : g.removeClass(c.__ul, m.CLASS_CLOSED);
			this.onResize();
			c.__closeButton && (c.__closeButton.innerHTML = b ? m.TEXT_OPEN : m.TEXT_CLOSED)
		}}, load: {get: function () {
			return a.load
		}}, useLocalStorage: {get: function () {
			return e
		}, set: function (a) {
			w &&
			((e = a) ? g.bind(window, "unload", b) : g.unbind(window, "unload", b), localStorage.setItem(document.location.href + ".isLocal", a))
		}}});
		if (h.isUndefined(a.parent)) {
			a.closed = !1;
			g.addClass(this.domElement, m.CLASS_MAIN);
			g.makeSelectable(this.domElement, !1);
			if (w && e) {
				c.useLocalStorage = !0;
				var f = localStorage.getItem(document.location.href + ".gui");
				f && (a.load = JSON.parse(f))
			}
			this.__closeButton = document.createElement("div");
			this.__closeButton.innerHTML = m.TEXT_CLOSED;
			g.addClass(this.__closeButton, m.CLASS_CLOSE_BUTTON);
			this.domElement.appendChild(this.__closeButton);
			g.bind(this.__closeButton, "click", function () {
				c.closed = !c.closed
			})
		} else {
			void 0 === a.closed && (a.closed = !0);
			var q = document.createTextNode(a.name);
			g.addClass(q, "controller-name");
			f = u(c, q);
			g.addClass(this.__ul, m.CLASS_CLOSED);
			g.addClass(f, "title");
			g.bind(f, "click", function (a) {
				a.preventDefault();
				c.closed = !c.closed;
				return!1
			});
			a.closed || (this.closed = !1)
		}
		a.autoPlace && (h.isUndefined(a.parent) && (H && (x = document.createElement("div"), g.addClass(x, "dg"), g.addClass(x, m.CLASS_AUTO_PLACE_CONTAINER), document.body.appendChild(x),
			H = !1), x.appendChild(this.domElement), g.addClass(this.domElement, m.CLASS_AUTO_PLACE)), this.parent || F(c, a.width));
		g.bind(window, "resize", function () {
			c.onResize()
		});
		g.bind(this.__ul, "webkitTransitionEnd", function () {
			c.onResize()
		});
		g.bind(this.__ul, "transitionend", function () {
			c.onResize()
		});
		g.bind(this.__ul, "oTransitionEnd", function () {
			c.onResize()
		});
		this.onResize();
		a.resizable && L(this);
		c.getRoot();
		a.parent || d()
	};
	m.toggleHide = function () {
		C = !C;
		h.each(I, function (a) {
			a.domElement.style.zIndex = C ? -999 : 999;
			a.domElement.style.opacity =
				C ? 0 : 1
		})
	};
	m.CLASS_AUTO_PLACE = "a";
	m.CLASS_AUTO_PLACE_CONTAINER = "ac";
	m.CLASS_MAIN = "main";
	m.CLASS_CONTROLLER_ROW = "cr";
	m.CLASS_TOO_TALL = "taller-than-window";
	m.CLASS_CLOSED = "closed";
	m.CLASS_CLOSE_BUTTON = "close-button";
	m.CLASS_DRAG = "drag";
	m.DEFAULT_WIDTH = 245;
	m.TEXT_CLOSED = "Close Controls";
	m.TEXT_OPEN = "Open Controls";
	g.bind(window, "keydown", function (a) {
		"text" === document.activeElement.type || 72 !== a.which && 72 != a.keyCode || m.toggleHide()
	}, !1);
	h.extend(m.prototype, {add: function (a, b) {
		return t(this, a, b, {factoryArgs: Array.prototype.slice.call(arguments,
			2)})
	}, addColor: function (a, b) {
		return t(this, a, b, {color: !0})
	}, remove: function (a) {
		this.__ul.removeChild(a.__li);
		this.__controllers.slice(this.__controllers.indexOf(a), 1);
		var b = this;
		h.defer(function () {
			b.onResize()
		})
	}, destroy: function () {
		this.autoPlace && x.removeChild(this.domElement)
	}, addFolder: function (a) {
		if (void 0 !== this.__folders[a])throw Error('You already have a folder in this GUI by the name "' + a + '"');
		var b = {name: a, parent: this};
		b.autoPlace = this.autoPlace;
		this.load && this.load.folders && this.load.folders[a] &&
		(b.closed = this.load.folders[a].closed, b.load = this.load.folders[a]);
		b = new m(b);
		this.__folders[a] = b;
		a = u(this, b.domElement);
		g.addClass(a, "folder");
		return b
	}, open: function () {
		this.closed = !1
	}, close: function () {
		this.closed = !0
	}, onResize: function () {
		var a = this.getRoot();
		if (a.scrollable) {
			var b = g.getOffset(a.__ul).top, d = 0;
			h.each(a.__ul.childNodes, function (b) {
				a.autoPlace && b === a.__save_row || (d += g.getHeight(b))
			});
			window.innerHeight - b - 20 < d ? (g.addClass(a.domElement, m.CLASS_TOO_TALL), a.__ul.style.height = window.innerHeight -
				b - 20 + "px") : (g.removeClass(a.domElement, m.CLASS_TOO_TALL), a.__ul.style.height = "auto")
		}
		a.__resize_handle && h.defer(function () {
			a.__resize_handle.style.height = a.__ul.offsetHeight + "px"
		});
		a.__closeButton && (a.__closeButton.style.width = a.width + "px")
	}, remember: function () {
		h.isUndefined(A) && (A = new y, A.domElement.innerHTML = a);
		if (this.parent)throw Error("You can only call remember on a top level GUI.");
		var b = this;
		h.each(Array.prototype.slice.call(arguments), function (a) {
			0 == b.__rememberedObjects.length && K(b);
			-1 ==
				b.__rememberedObjects.indexOf(a) && b.__rememberedObjects.push(a)
		});
		this.autoPlace && F(this, this.width)
	}, getRoot: function () {
		for (var a = this; a.parent;)a = a.parent;
		return a
	}, getSaveObject: function () {
		var a = this.load;
		a.closed = this.closed;
		0 < this.__rememberedObjects.length && (a.preset = this.preset, a.remembered || (a.remembered = {}), a.remembered[this.preset] = B(this));
		a.folders = {};
		h.each(this.__folders, function (b, d) {
			a.folders[d] = b.getSaveObject()
		});
		return a
	}, save: function () {
		this.load.remembered || (this.load.remembered =
		{});
		this.load.remembered[this.preset] = B(this);
		D(this, !1)
	}, saveAs: function (a) {
		this.load.remembered || (this.load.remembered = {}, this.load.remembered[z] = B(this, !0));
		this.load.remembered[a] = B(this);
		this.preset = a;
		E(this, a, !0)
	}, revert: function (a) {
		h.each(this.__controllers, function (b) {
			this.getRoot().load.remembered ? v(a || this.getRoot(), b) : b.setValue(b.initialValue)
		}, this);
		h.each(this.__folders, function (a) {
			a.revert(a)
		});
		a || D(this.getRoot(), !1)
	}, listen: function (a) {
		var b = 0 == this.__listening.length;
		this.__listening.push(a);
		b && G(this.__listening)
	}});
	return m
}(dat.utils.css, '<div id="dg-save" class="dg dialogue">\n\n  Here\'s the new load parameter for your <code>GUI</code>\'s constructor:\n\n  <textarea id="dg-new-constructor"></textarea>\n\n  <div id="dg-save-locally">\n\n    <input id="dg-local-storage" type="checkbox"/> Automatically save\n    values to <code>localStorage</code> on exit.\n\n    <div id="dg-local-explain">The values saved to <code>localStorage</code> will\n      override those passed to <code>dat.GUI</code>\'s constructor. This makes it\n      easier to work incrementally, but <code>localStorage</code> is fragile,\n      and your friends may not see the same values you do.\n      \n    </div>\n    \n  </div>\n\n</div>',
		".dg {\n  /** Clear list styles */\n  /* Auto-place container */\n  /* Auto-placed GUI's */\n  /* Line items that don't contain folders. */\n  /** Folder names */\n  /** Hides closed items */\n  /** Controller row */\n  /** Name-half (left) */\n  /** Controller-half (right) */\n  /** Controller placement */\n  /** Shorter number boxes when slider is present. */\n  /** Ensure the entire boolean and function row shows a hand */ }\n  .dg ul {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n    width: 100%;\n    clear: both; }\n  .dg.ac {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    height: 0;\n    z-index: 0; }\n  .dg:not(.ac) .main {\n    /** Exclude mains in ac so that we don't hide close button */\n    overflow: hidden; }\n  .dg.main {\n    -webkit-transition: opacity 0.1s linear;\n    -o-transition: opacity 0.1s linear;\n    -moz-transition: opacity 0.1s linear;\n    transition: opacity 0.1s linear; }\n    .dg.main.taller-than-window {\n      overflow-y: auto; }\n      .dg.main.taller-than-window .close-button {\n        opacity: 1;\n        /* TODO, these are style notes */\n        margin-top: -1px;\n        border-top: 1px solid #2c2c2c; }\n    .dg.main ul.closed .close-button {\n      opacity: 1 !important; }\n    .dg.main:hover .close-button,\n    .dg.main .close-button.drag {\n      opacity: 1; }\n    .dg.main .close-button {\n      /*opacity: 0;*/\n      -webkit-transition: opacity 0.1s linear;\n      -o-transition: opacity 0.1s linear;\n      -moz-transition: opacity 0.1s linear;\n      transition: opacity 0.1s linear;\n      border: 0;\n      position: absolute;\n      line-height: 19px;\n      height: 20px;\n      /* TODO, these are style notes */\n      cursor: pointer;\n      text-align: center;\n      background-color: #000; }\n      .dg.main .close-button:hover {\n        background-color: #111; }\n  .dg.a {\n    float: right;\n    margin-right: 15px;\n    overflow-x: hidden; }\n    .dg.a.has-save > ul {\n      margin-top: 27px; }\n      .dg.a.has-save > ul.closed {\n        margin-top: 0; }\n    .dg.a .save-row {\n      position: fixed;\n      top: 0;\n      z-index: 1002; }\n  .dg li {\n    -webkit-transition: height 0.1s ease-out;\n    -o-transition: height 0.1s ease-out;\n    -moz-transition: height 0.1s ease-out;\n    transition: height 0.1s ease-out; }\n  .dg li:not(.folder) {\n    cursor: auto;\n    height: 27px;\n    line-height: 27px;\n    overflow: hidden;\n    padding: 0 4px 0 5px; }\n  .dg li.folder {\n    padding: 0;\n    border-left: 4px solid rgba(0, 0, 0, 0); }\n  .dg li.title {\n    cursor: pointer;\n    margin-left: -4px; }\n  .dg .closed li:not(.title),\n  .dg .closed ul li,\n  .dg .closed ul li > * {\n    height: 0;\n    overflow: hidden;\n    border: 0; }\n  .dg .cr {\n    clear: both;\n    padding-left: 3px;\n    height: 27px; }\n  .dg .property-name {\n    cursor: default;\n    float: left;\n    clear: left;\n    width: 40%;\n    overflow: hidden;\n    text-overflow: ellipsis; }\n  .dg .c {\n    float: left;\n    width: 60%; }\n  .dg .c input[type=text] {\n    border: 0;\n    margin-top: 4px;\n    padding: 3px;\n    width: 100%;\n    float: right; }\n  .dg .has-slider input[type=text] {\n    width: 30%;\n    /*display: none;*/\n    margin-left: 0; }\n  .dg .slider {\n    float: left;\n    width: 66%;\n    margin-left: -5px;\n    margin-right: 0;\n    height: 19px;\n    margin-top: 4px; }\n  .dg .slider-fg {\n    height: 100%; }\n  .dg .c input[type=checkbox] {\n    margin-top: 9px; }\n  .dg .c select {\n    margin-top: 5px; }\n  .dg .cr.function,\n  .dg .cr.function .property-name,\n  .dg .cr.function *,\n  .dg .cr.boolean,\n  .dg .cr.boolean * {\n    cursor: pointer; }\n  .dg .selector {\n    display: none;\n    position: absolute;\n    margin-left: -9px;\n    margin-top: 23px;\n    z-index: 10; }\n  .dg .c:hover .selector,\n  .dg .selector.drag {\n    display: block; }\n  .dg li.save-row {\n    padding: 0; }\n    .dg li.save-row .button {\n      display: inline-block;\n      padding: 0px 6px; }\n  .dg.dialogue {\n    background-color: #222;\n    width: 460px;\n    padding: 15px;\n    font-size: 13px;\n    line-height: 15px; }\n\n/* TODO Separate style and structure */\n#dg-new-constructor {\n  padding: 10px;\n  color: #222;\n  font-family: Monaco, monospace;\n  font-size: 10px;\n  border: 0;\n  resize: none;\n  box-shadow: inset 1px 1px 1px #888;\n  word-wrap: break-word;\n  margin: 12px 0;\n  display: block;\n  width: 440px;\n  overflow-y: scroll;\n  height: 100px;\n  position: relative; }\n\n#dg-local-explain {\n  display: none;\n  font-size: 11px;\n  line-height: 17px;\n  border-radius: 3px;\n  background-color: #333;\n  padding: 8px;\n  margin-top: 10px; }\n  #dg-local-explain code {\n    font-size: 10px; }\n\n#dat-gui-save-locally {\n  display: none; }\n\n/** Main type */\n.dg {\n  color: #eee;\n  font: 11px 'Lucida Grande', sans-serif;\n  text-shadow: 0 -1px 0 #111;\n  /** Auto place */\n  /* Controller row, <li> */\n  /** Controllers */ }\n  .dg.main {\n    /** Scrollbar */ }\n    .dg.main::-webkit-scrollbar {\n      width: 5px;\n      background: #1a1a1a; }\n    .dg.main::-webkit-scrollbar-corner {\n      height: 0;\n      display: none; }\n    .dg.main::-webkit-scrollbar-thumb {\n      border-radius: 5px;\n      background: #676767; }\n  .dg li:not(.folder) {\n    background: #1a1a1a;\n    border-bottom: 1px solid #2c2c2c; }\n  .dg li.save-row {\n    line-height: 25px;\n    background: #dad5cb;\n    border: 0; }\n    .dg li.save-row select {\n      margin-left: 5px;\n      width: 108px; }\n    .dg li.save-row .button {\n      margin-left: 5px;\n      margin-top: 1px;\n      border-radius: 2px;\n      font-size: 9px;\n      line-height: 7px;\n      padding: 4px 4px 5px 4px;\n      background: #c5bdad;\n      color: #fff;\n      text-shadow: 0 1px 0 #b0a58f;\n      box-shadow: 0 -1px 0 #b0a58f;\n      cursor: pointer; }\n      .dg li.save-row .button.gears {\n        background: #c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;\n        height: 7px;\n        width: 8px; }\n      .dg li.save-row .button:hover {\n        background-color: #bab19e;\n        box-shadow: 0 -1px 0 #b0a58f; }\n  .dg li.folder {\n    border-bottom: 0; }\n  .dg li.title {\n    padding-left: 16px;\n    background: black url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;\n    cursor: pointer;\n    border-bottom: 1px solid rgba(255, 255, 255, 0.2); }\n  .dg .closed li.title {\n    background-image: url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==); }\n  .dg .cr.boolean {\n    border-left: 3px solid #806787; }\n  .dg .cr.function {\n    border-left: 3px solid #e61d5f; }\n  .dg .cr.number {\n    border-left: 3px solid #2fa1d6; }\n    .dg .cr.number input[type=text] {\n      color: #2fa1d6; }\n  .dg .cr.string {\n    border-left: 3px solid #1ed36f; }\n    .dg .cr.string input[type=text] {\n      color: #1ed36f; }\n  .dg .cr.function:hover, .dg .cr.boolean:hover {\n    background: #111; }\n  .dg .c input[type=text] {\n    background: #303030;\n    outline: none; }\n    .dg .c input[type=text]:hover {\n      background: #3c3c3c; }\n    .dg .c input[type=text]:focus {\n      background: #494949;\n      color: #fff; }\n  .dg .c .slider {\n    background: #303030;\n    cursor: ew-resize; }\n  .dg .c .slider-fg {\n    background: #2fa1d6; }\n  .dg .c .slider:hover {\n    background: #3c3c3c; }\n    .dg .c .slider:hover .slider-fg {\n      background: #44abda; }\n",
		dat.controllers.factory = function (e, a, b, d, f, c, p) {
			return function (k, l, q, n) {
				var r = k[l];
				if (p.isArray(q) || p.isObject(q))return new e(k, l, q);
				if (p.isNumber(r))return p.isNumber(q) && p.isNumber(n) ? new b(k, l, q, n) : new a(k, l, {min: q, max: n});
				if (p.isString(r))return new d(k, l);
				if (p.isFunction(r))return new f(k, l, "");
				if (p.isBoolean(r))return new c(k, l)
			}
		}(dat.controllers.OptionController, dat.controllers.NumberControllerBox, dat.controllers.NumberControllerSlider, dat.controllers.StringController = function (e, a, b) {
			var d =
				function (b, c) {
					function e() {
						k.setValue(k.__input.value)
					}

					d.superclass.call(this, b, c);
					var k = this;
					this.__input = document.createElement("input");
					this.__input.setAttribute("type", "text");
					a.bind(this.__input, "keyup", e);
					a.bind(this.__input, "change", e);
					a.bind(this.__input, "blur", function () {
						k.__onFinishChange && k.__onFinishChange.call(k, k.getValue())
					});
					a.bind(this.__input, "keydown", function (a) {
						13 === a.keyCode && this.blur()
					});
					this.updateDisplay();
					this.domElement.appendChild(this.__input)
				};
			d.superclass = e;
			b.extend(d.prototype,
				e.prototype, {updateDisplay: function () {
					a.isActive(this.__input) || (this.__input.value = this.getValue());
					return d.superclass.prototype.updateDisplay.call(this)
				}});
			return d
		}(dat.controllers.Controller, dat.dom.dom, dat.utils.common), dat.controllers.FunctionController, dat.controllers.BooleanController, dat.utils.common), dat.controllers.Controller, dat.controllers.BooleanController, dat.controllers.FunctionController, dat.controllers.NumberControllerBox, dat.controllers.NumberControllerSlider, dat.controllers.OptionController,
		dat.controllers.ColorController = function (e, a, b, d, f) {
			function c(a, b, d, c) {
				a.style.background = "";
				f.each(l, function (e) {
					a.style.cssText += "background: " + e + "linear-gradient(" + b + ", " + d + " 0%, " + c + " 100%); "
				})
			}

			function p(a) {
				a.style.background = "";
				a.style.cssText += "background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);";
				a.style.cssText += "background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);";
				a.style.cssText += "background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);";
				a.style.cssText += "background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);";
				a.style.cssText += "background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"
			}

			var k = function (e, n) {
				function r(b) {
					t(b);
					a.bind(window, "mousemove", t);
					a.bind(window,
						"mouseup", l)
				}

				function l() {
					a.unbind(window, "mousemove", t);
					a.unbind(window, "mouseup", l)
				}

				function g() {
					var a = d(this.value);
					!1 !== a ? (s.__color.__state = a, s.setValue(s.__color.toOriginal())) : this.value = s.__color.toString()
				}

				function h() {
					a.unbind(window, "mousemove", u);
					a.unbind(window, "mouseup", h)
				}

				function t(b) {
					b.preventDefault();
					var d = a.getWidth(s.__saturation_field), c = a.getOffset(s.__saturation_field), e = (b.clientX - c.left + document.body.scrollLeft) / d;
					b = 1 - (b.clientY - c.top + document.body.scrollTop) / d;
					1 < b ? b = 1 : 0 >
						b && (b = 0);
					1 < e ? e = 1 : 0 > e && (e = 0);
					s.__color.v = b;
					s.__color.s = e;
					s.setValue(s.__color.toOriginal());
					return!1
				}

				function u(b) {
					b.preventDefault();
					var d = a.getHeight(s.__hue_field), c = a.getOffset(s.__hue_field);
					b = 1 - (b.clientY - c.top + document.body.scrollTop) / d;
					1 < b ? b = 1 : 0 > b && (b = 0);
					s.__color.h = 360 * b;
					s.setValue(s.__color.toOriginal());
					return!1
				}

				k.superclass.call(this, e, n);
				this.__color = new b(this.getValue());
				this.__temp = new b(0);
				var s = this;
				this.domElement = document.createElement("div");
				a.makeSelectable(this.domElement, !1);
				this.__selector = document.createElement("div");
				this.__selector.className = "selector";
				this.__saturation_field = document.createElement("div");
				this.__saturation_field.className = "saturation-field";
				this.__field_knob = document.createElement("div");
				this.__field_knob.className = "field-knob";
				this.__field_knob_border = "2px solid ";
				this.__hue_knob = document.createElement("div");
				this.__hue_knob.className = "hue-knob";
				this.__hue_field = document.createElement("div");
				this.__hue_field.className = "hue-field";
				this.__input = document.createElement("input");
				this.__input.type = "text";
				this.__input_textShadow = "0 1px 1px ";
				a.bind(this.__input, "keydown", function (a) {
					13 === a.keyCode && g.call(this)
				});
				a.bind(this.__input, "blur", g);
				a.bind(this.__selector, "mousedown", function (b) {
					a.addClass(this, "drag").bind(window, "mouseup", function (b) {
						a.removeClass(s.__selector, "drag")
					})
				});
				var v = document.createElement("div");
				f.extend(this.__selector.style, {width: "122px", height: "102px", padding: "3px", backgroundColor: "#222", boxShadow: "0px 1px 3px rgba(0,0,0,0.3)"});
				f.extend(this.__field_knob.style,
					{position: "absolute", width: "12px", height: "12px", border: this.__field_knob_border + (0.5 > this.__color.v ? "#fff" : "#000"), boxShadow: "0px 1px 3px rgba(0,0,0,0.5)", borderRadius: "12px", zIndex: 1});
				f.extend(this.__hue_knob.style, {position: "absolute", width: "15px", height: "2px", borderRight: "4px solid #fff", zIndex: 1});
				f.extend(this.__saturation_field.style, {width: "100px", height: "100px", border: "1px solid #555", marginRight: "3px", display: "inline-block", cursor: "pointer"});
				f.extend(v.style, {width: "100%", height: "100%",
					background: "none"});
				c(v, "top", "rgba(0,0,0,0)", "#000");
				f.extend(this.__hue_field.style, {width: "15px", height: "100px", display: "inline-block", border: "1px solid #555", cursor: "ns-resize"});
				p(this.__hue_field);
				f.extend(this.__input.style, {outline: "none", textAlign: "center", color: "#fff", border: 0, fontWeight: "bold", textShadow: this.__input_textShadow + "rgba(0,0,0,0.7)"});
				a.bind(this.__saturation_field, "mousedown", r);
				a.bind(this.__field_knob, "mousedown", r);
				a.bind(this.__hue_field, "mousedown", function (b) {
					u(b);
					a.bind(window,
						"mousemove", u);
					a.bind(window, "mouseup", h)
				});
				this.__saturation_field.appendChild(v);
				this.__selector.appendChild(this.__field_knob);
				this.__selector.appendChild(this.__saturation_field);
				this.__selector.appendChild(this.__hue_field);
				this.__hue_field.appendChild(this.__hue_knob);
				this.domElement.appendChild(this.__input);
				this.domElement.appendChild(this.__selector);
				this.updateDisplay()
			};
			k.superclass = e;
			f.extend(k.prototype, e.prototype, {updateDisplay: function () {
				var a = d(this.getValue());
				if (!1 !== a) {
					var e = !1;
					f.each(b.COMPONENTS, function (b) {
						if (!f.isUndefined(a[b]) && !f.isUndefined(this.__color.__state[b]) && a[b] !== this.__color.__state[b])return e = !0, {}
					}, this);
					e && f.extend(this.__color.__state, a)
				}
				f.extend(this.__temp.__state, this.__color.__state);
				this.__temp.a = 1;
				var k = 0.5 > this.__color.v || 0.5 < this.__color.s ? 255 : 0, l = 255 - k;
				f.extend(this.__field_knob.style, {marginLeft: 100 * this.__color.s - 7 + "px", marginTop: 100 * (1 - this.__color.v) - 7 + "px", backgroundColor: this.__temp.toString(), border: this.__field_knob_border + "rgb(" +
					k + "," + k + "," + k + ")"});
				this.__hue_knob.style.marginTop = 100 * (1 - this.__color.h / 360) + "px";
				this.__temp.s = 1;
				this.__temp.v = 1;
				c(this.__saturation_field, "left", "#fff", this.__temp.toString());
				f.extend(this.__input.style, {backgroundColor: this.__input.value = this.__color.toString(), color: "rgb(" + k + "," + k + "," + k + ")", textShadow: this.__input_textShadow + "rgba(" + l + "," + l + "," + l + ",.7)"})
			}});
			var l = ["-moz-", "-o-", "-webkit-", "-ms-", ""];
			return k
		}(dat.controllers.Controller, dat.dom.dom, dat.color.Color = function (e, a, b, d) {
				function f(a, b, d) {
					Object.defineProperty(a, b, {get: function () {
						if ("RGB" === this.__state.space)return this.__state[b];
						p(this, b, d);
						return this.__state[b]
					}, set: function (a) {
						"RGB" !== this.__state.space && (p(this, b, d), this.__state.space = "RGB");
						this.__state[b] = a
					}})
				}

				function c(a, b) {
					Object.defineProperty(a, b, {get: function () {
						if ("HSV" === this.__state.space)return this.__state[b];
						k(this);
						return this.__state[b]
					}, set: function (a) {
						"HSV" !== this.__state.space && (k(this), this.__state.space = "HSV");
						this.__state[b] = a
					}})
				}

				function p(b, c, e) {
					if ("HEX" ===
						b.__state.space)b.__state[c] = a.component_from_hex(b.__state.hex, e); else if ("HSV" === b.__state.space)d.extend(b.__state, a.hsv_to_rgb(b.__state.h, b.__state.s, b.__state.v)); else throw"Corrupted color state";
				}

				function k(b) {
					var c = a.rgb_to_hsv(b.r, b.g, b.b);
					d.extend(b.__state, {s: c.s, v: c.v});
					d.isNaN(c.h) ? d.isUndefined(b.__state.h) && (b.__state.h = 0) : b.__state.h = c.h
				}

				var l = function () {
					this.__state = e.apply(this, arguments);
					if (!1 === this.__state)throw"Failed to interpret color arguments";
					this.__state.a = this.__state.a ||
						1
				};
				l.COMPONENTS = "r g b h s v hex a".split(" ");
				d.extend(l.prototype, {toString: function () {
					return b(this)
				}, toOriginal: function () {
					return this.__state.conversion.write(this)
				}});
				f(l.prototype, "r", 2);
				f(l.prototype, "g", 1);
				f(l.prototype, "b", 0);
				c(l.prototype, "h");
				c(l.prototype, "s");
				c(l.prototype, "v");
				Object.defineProperty(l.prototype, "a", {get: function () {
					return this.__state.a
				}, set: function (a) {
					this.__state.a = a
				}});
				Object.defineProperty(l.prototype, "hex", {get: function () {
					"HEX" !== !this.__state.space && (this.__state.hex =
						a.rgb_to_hex(this.r, this.g, this.b));
					return this.__state.hex
				}, set: function (a) {
					this.__state.space = "HEX";
					this.__state.hex = a
				}});
				return l
			}(dat.color.interpret, dat.color.math = function () {
					var e;
					return{hsv_to_rgb: function (a, b, d) {
						var e = a / 60 - Math.floor(a / 60), c = d * (1 - b), p = d * (1 - e * b);
						b = d * (1 - (1 - e) * b);
						a = [
							[d, b, c],
							[p, d, c],
							[c, d, b],
							[c, p, d],
							[b, c, d],
							[d, c, p]
						][Math.floor(a / 60) % 6];
						return{r: 255 * a[0], g: 255 * a[1], b: 255 * a[2]}
					}, rgb_to_hsv: function (a, b, d) {
						var e = Math.min(a, b, d), c = Math.max(a, b, d), e = c - e;
						if (0 == c)return{h: NaN, s: 0, v: 0};
						a = (a == c ? (b - d) / e : b == c ? 2 + (d - a) / e : 4 + (a - b) / e) / 6;
						0 > a && (a += 1);
						return{h: 360 * a, s: e / c, v: c / 255}
					}, rgb_to_hex: function (a, b, d) {
						a = this.hex_with_component(0, 2, a);
						a = this.hex_with_component(a, 1, b);
						return a = this.hex_with_component(a, 0, d)
					}, component_from_hex: function (a, b) {
						return a >> 8 * b & 255
					}, hex_with_component: function (a, b, d) {
						return d << (e = 8 * b) | a & ~(255 << e)
					}}
				}(), dat.color.toString, dat.utils.common), dat.color.interpret, dat.utils.common), dat.utils.requestAnimationFrame = function () {
			return window.webkitRequestAnimationFrame ||
				window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (e, a) {
				window.setTimeout(e, 1E3 / 60)
			}
		}(), dat.dom.CenteredDiv = function (e, a) {
			var b = function () {
				this.backgroundElement = document.createElement("div");
				a.extend(this.backgroundElement.style, {backgroundColor: "rgba(0,0,0,0.8)", top: 0, left: 0, display: "none", zIndex: "1000", opacity: 0, WebkitTransition: "opacity 0.2s linear"});
				e.makeFullscreen(this.backgroundElement);
				this.backgroundElement.style.position = "fixed";
				this.domElement =
					document.createElement("div");
				a.extend(this.domElement.style, {position: "fixed", display: "none", zIndex: "1001", opacity: 0, WebkitTransition: "-webkit-transform 0.2s ease-out, opacity 0.2s linear"});
				document.body.appendChild(this.backgroundElement);
				document.body.appendChild(this.domElement);
				var b = this;
				e.bind(this.backgroundElement, "click", function () {
					b.hide()
				})
			};
			b.prototype.show = function () {
				var b = this;
				this.backgroundElement.style.display = "block";
				this.domElement.style.display = "block";
				this.domElement.style.opacity =
					0;
				this.domElement.style.webkitTransform = "scale(1.1)";
				this.layout();
				a.defer(function () {
					b.backgroundElement.style.opacity = 1;
					b.domElement.style.opacity = 1;
					b.domElement.style.webkitTransform = "scale(1)"
				})
			};
			b.prototype.hide = function () {
				var a = this, b = function () {
					a.domElement.style.display = "none";
					a.backgroundElement.style.display = "none";
					e.unbind(a.domElement, "webkitTransitionEnd", b);
					e.unbind(a.domElement, "transitionend", b);
					e.unbind(a.domElement, "oTransitionEnd", b)
				};
				e.bind(this.domElement, "webkitTransitionEnd",
					b);
				e.bind(this.domElement, "transitionend", b);
				e.bind(this.domElement, "oTransitionEnd", b);
				this.backgroundElement.style.opacity = 0;
				this.domElement.style.opacity = 0;
				this.domElement.style.webkitTransform = "scale(1.1)"
			};
			b.prototype.layout = function () {
				this.domElement.style.left = window.innerWidth / 2 - e.getWidth(this.domElement) / 2 + "px";
				this.domElement.style.top = window.innerHeight / 2 - e.getHeight(this.domElement) / 2 + "px"
			};
			return b
		}(dat.dom.dom, dat.utils.common), dat.dom.dom, dat.utils.common);
/**
 * Created by nmondon on 18/07/2014.
 */

!function ($, d3, th, thx, _, win, sortAttribute) {

	// global vars : threejs
	var container, scene, camera, renderer, controls, mouse, projector, gui;
	// global vars : ray intersect
	var targetList = new Array();
	// remove list
	var removeList = new Array();
	// outline
	var outlineMaterial, outlineMesh;
	// global vars : data
	var dataDeputes, deputes, scaleYSortAttribute, parties;
	// hemicycle
	var iCol, iLine, maxCol, maxLine, minRadius, maxRadius, scaleRadius, minAngle, maxAngle, scaleAngle, sizeBox;
	// party mean
	var scaleZParty;
	// animation
	var currentTimeAnimation = 0;
	var maxTimeAnimation = 10;
	// scale for animation
	var scaleAnimation;
	// colors
	var colors = {
		ECOLO: 0x90EE90, GDR: 0xFF0033, NI: 0x999999, RRDP: 0xFF8C00, SRC: 0xFF69B4, UDI: 0xB0E0E6, UMP: 0x4169E1
	};
	// positions for sort
	var positions = {
		ECOLO: 1, GDR: 0, NI: 6, RRDP: 3, SRC: 2, UDI: 4, UMP: 5 };
	// message box
	var $messageBox, $messageBoxName, $messageBoxParty, $messageBoxValue, $messageBoxImg;
	// select box
	var $autocomplete;

	// dom ready callback
	function onDomReady() {
		$messageBox = $('.message-box');
		$messageBoxName = $messageBox.find('#message-box-name');
		$messageBoxParty = $messageBox.find('#message-box-party');
		$messageBoxValue = $messageBox.find('#message-box-value');
		$messageBoxImg = $messageBox.find('img');
		$autocomplete = $('.search-box input');
	};

	// setup scene
	function setup(rawData) {

		// width
		var w = win.innerWidth;
		// height
		var h = win.innerHeight;
		var viewAngle = 40;
		var aspect = w / h;
		var near = 0.1;
		var far = 20000;
		var axes;
		var skyBoxGeometry;
		var skyBoxMaterial;
		var skyBox;
		var ControlObject = {
			criterion: sortAttribute
		};
		var criterionController;
		// control instance
		var controlInstance = Object.create(ControlObject);
		var controlData = [
			'nb_mandats',
			'semaines_presence',
			'commission_presences',
			'commission_interventions',
			'hemicycle_interventions',
			'hemicycle_interventions_courtes',
			'amendements_signes',
			'amendements_adoptes',
			'rapports',
			'propositions_ecrites',
			'propositions_signees',
			'questions_ecrites',
			'questions_orales'
		];
		// set outline material
		outlineMaterial = new th.MeshBasicMaterial({ color: 0x00ff00, side: th.BackSide });

		// set up dom ready callback
		$(onDomReady);

		// set hemicycle vars
		setupHemicycle();

		// set data
		dataDeputes = rawData;

		// set up animation
		scaleAnimation = d3.scale.linear()
			.domain([0, maxTimeAnimation])
			.range([0, 1]);

		// scene
		scene = new th.Scene();

		// camera
		camera = new th.PerspectiveCamera(viewAngle, aspect, near, far);
		// add the camera to the scene at the default position (0,0,0)
		scene.add(camera);
		// so pull it back
		camera.position.set(-400, 400, -400);
		// and set the angle towards the scene origin
		camera.lookAt(scene.position);

		// renderer
		if (Detector.webgl) {
			renderer = new th.WebGLRenderer({
				antialias: true
			});
		} else {
			renderer = new th.CanvasRenderer();
		}
		renderer.setSize(w, h);

		// container
		container = document.getElementById('container');
		// attach renderer to the container
		container.appendChild(renderer.domElement);

		// events
		// automatically resize renderer
		thx.WindowResize(renderer, camera);

		// controls
		controls = new th.OrbitControls(camera, renderer.domElement);

		// lights
		setupLight();

		// axes
		axes = new th.AxisHelper(100);
		// scene.add(axes);

		// sky
		// ! make sure the camera's far is big enough to render the sky
		skyBoxGeometry = new th.BoxGeometry(10000, 10000, 10000);
		skyBoxMaterial = new th.MeshBasicMaterial({
			color: 0xffffff,
			side: th.BackSide
		});
		skyBox = new th.Mesh(skyBoxGeometry, skyBoxMaterial);
		scene.add(skyBox);

		// projector
		projector = new th.Projector();

		// gui
		gui = new dat.GUI();
		criterionController = gui.add(controlInstance, 'criterion', controlData);
		gui.open();
		criterionController.onFinishChange(function (value) {
			// unselect selected depute
			unselectSelectedDepute();
			// set sort attribute
			sortAttribute = value;
			// compute datas
			setupData();
		});

		win.addEventListener('click', onMouseClick, false);

		setupData();

		// needs to be after data setup
		setupAutocomplete();

		animate();
	};

	function resetAnimation() {
		currentTimeAnimation = 0;
		removeShapes();
		addDeputes();
		addParties();
	};

	function setupAutocomplete() {
		$autocomplete.autocomplete({
			lookup: deputes.map(function (d) {
				return {
					value: d.nom,
					data: d
				};
			}),
			onSelect: function (suggestion) {
				selectDepute(suggestion.data);
			}
		});
	};

	// process datas
	function setupData() {
		var tempHashParties;
		// data
		deputes = dataDeputes.deputes.map(function (d) {
			return d.depute;
		});
		// scale for y length
		scaleYSortAttribute = d3.scale.linear()
			.domain([0, d3.max(deputes, function (d) {
				return parseInt(d[sortAttribute]);
			})])
			.rangeRound([0, 100]);
		// we sort deputes
		deputes.sort(function (a, b) {
			if (a.groupe_sigle !== b.groupe_sigle) {
				return positions[a.groupe_sigle] - positions[b.groupe_sigle];
			}
			return a[sortAttribute] - b[sortAttribute];
		});

		// let's deal with parties - the crappy way
		parties = new Array();
		// first, we group deputes by party
		tempHashParties = _.groupBy(deputes, function (d) {
			return d.groupe_sigle;
		});
		// then, we compute mean for each party
		for (var partyKey in tempHashParties) {
			parties.push({
				party: partyKey,
				value: d3.round(d3.mean(tempHashParties[partyKey], function (p) {
					return parseInt(p[sortAttribute]);
				}), 2)
			});
		}
		;

		// compute the scale
		scaleZParty = d3.scale.linear()
			.domain([0, parties.length - 1])
			.rangeRound([-minRadius / 2, minRadius / 2]);
		// reset animation
		resetAnimation();
	};

	function setupHemicycle() {
		// indexes for assembly loop
		iCol = 0;
		iLine = 0;
		// maxs for assembly loop : 58 * 10
		maxCol = 10;
		maxLine = 58;
		// radius
		minRadius = 150;
		maxRadius = 300;
		// scale radius
		scaleRadius = d3.scale.linear()
			.domain([0, maxCol])
			.rangeRound([minRadius, maxRadius]);
		// angle
		minAngle = -Math.PI / 2;
		maxAngle = Math.PI / 2;
		// scale angle
		scaleAngle = d3.scale.linear()
			.domain([0, maxLine])
			.range([minAngle, maxAngle]);
		// size box
		sizeBox = 7;
	};

	// from http://stackoverflow.com/questions/15478093/realistic-lighting-sunlight-with-th-js
	function setupLight() {
		// lights
		var hemiLight = new th.HemisphereLight(0xffffff, 0xffffff, 0.6);
		hemiLight.position.set(0, 500, 0);

		var dirLight = new th.DirectionalLight(0xffffff, 0.6);
		dirLight.position.set(-1, 0.75, 1);
		dirLight.position.multiplyScalar(50);
		dirLight.name = 'dirlight';
		// dirLight.shadowCameraVisible = true;

		dirLight.castShadow = true;
		dirLight.shadowMapWidth = dirLight.shadowMapHeight = 1024 * 2;

		var d = 300;

		dirLight.shadowCameraLeft = -d;
		dirLight.shadowCameraRight = d;
		dirLight.shadowCameraTop = d;
		dirLight.shadowCameraBottom = -d;

		dirLight.shadowCameraFar = 3500;
		dirLight.shadowBias = -0.0001;
		dirLight.shadowDarkness = 0.35;

		scene.add(hemiLight);
		scene.add(dirLight);
	};

	function draw() {
		if (currentTimeAnimation <= maxTimeAnimation) {
			var currentTime = scaleAnimation(currentTimeAnimation);
			// update elements
			updateElements(currentTime);
			// increase current time for animation
			currentTimeAnimation += 1;
		}
	};

	function removeShapes() {
		removeList.forEach(function (d) {
			scene.remove(d);
		});
		targetList = new Array();
		removeList = new Array();
	};

	function addDeputes() {
		// loop var
		var currentIndice;
		var currentDepute;
		var currentY;
		var currentLine;
		var currentCol;
		var currentPoint;
		var currentGeometry;
		var currentMaterial;
		var currentShape;

		for (iLine = 0; iLine < maxLine; iLine += 1) {
			for (iCol = 0; iCol < maxCol; iCol += 1) {
				currentIndice = iLine * maxCol + iCol;
				if (currentIndice < deputes.length) {
					currentDepute = deputes[currentIndice];
					currentY = scaleYSortAttribute(currentDepute[sortAttribute]);
					currentCol = scaleRadius(iCol);
					currentLine = scaleAngle(iLine);
					currentPoint = [
						Math.cos(currentLine) * currentCol,
						Math.sin(currentLine) * currentCol
					];
					// radiusAtTop, radiusAtBottom, height, segmentsAroundRadius, segmentsAlongHeight,
					currentGeometry = new th.CylinderGeometry(3, 3, currentY, 20, 4);
					currentMaterial = new th.MeshLambertMaterial({ color: colors[currentDepute.groupe_sigle] });
					currentShape = new th.Mesh(currentGeometry, currentMaterial);
					currentShape.position.set(currentPoint[0], currentY / 2, currentPoint[1]);
					currentShape.scale.setY(0);
					currentShape.userData.depute = currentDepute;
					scene.add(currentShape);
					// for intersection purpose
					targetList.push(currentShape);
					// for update
					removeList.push(currentShape);
				}
			}
		}
	};

	function addParties() {
		var currentY = 0;
		var currentGeometry;
		var currentMaterial;
		var currentShape;
		var currentZ;

		parties.forEach(function (currentParty, ind) {
			currentY = scaleYSortAttribute(currentParty.value);
			currentZ = scaleZParty(ind);
			currentGeometry = new th.CylinderGeometry(6, 6, currentY, 20, 4);
			currentMaterial = new th.MeshLambertMaterial({ color: colors[currentParty.party] });
			currentShape = new th.Mesh(currentGeometry, currentMaterial);
			currentShape.position.set(0, currentY / 2, currentZ);
			currentShape.scale.setY(0);
			scene.add(currentShape);
			// for update
			removeList.push(currentShape);
		});
	};

	function updateElements(t) {
		removeList.forEach(function (shape) {
			shape.scale.setY(t);
		});
	};

	function animate() {
		requestAnimationFrame(animate);
		draw();
		render();
		update();
	};

	function update() {
		controls.update();
	};

	function render() {
		renderer.render(scene, camera);
	};

	function onMouseClick(event) {
		var vector, ray, intersects;

		// retrive mouse position
		mouse = {
			x: ( event.clientX / window.innerWidth ) * 2 - 1,
			y: -( event.clientY / window.innerHeight ) * 2 + 1
		};

		// create a ray with origin at the mouse position
		// and direction into the scene (camera direction)
		vector = new th.Vector3(mouse.x, mouse.y, 1);
		projector.unprojectVector(vector, camera);
		ray = new th.Raycaster(camera.position, vector.sub(camera.position).normalize());

		// create an array containing all abjects in the scene with wich the ray intersects
		intersects = ray.intersectObjects(targetList);

		// if there is one or more intersections
		if (intersects.length > 0) {
			selectDepute(intersects[0].object.userData.depute, intersects[0].object);
		} else {
			unselectSelectedDepute();
		}

	};

	function selectDepute(depute, object) {
		displaySelectedDepute(depute);
		if (object) {
			outlineSelectedShape(object);
		} else {
			outlineSelectedShape(_.find(targetList, function (obj) {
				return obj.userData.depute.id === depute.id;
			}));
		}
		$autocomplete.val('');
	};

	function displaySelectedDepute(depute) {
		$messageBoxImg.attr('src', 'http://www.nosdeputes.fr/depute/photo/' + depute.slug + '/245');
		$messageBoxName.html(depute.nom);
		$messageBoxParty.html(depute.parti_ratt_financier);
		$messageBoxValue.html(depute[sortAttribute]);
		$messageBox.css({
			'opacity': 1
		});
	};

	function unselectSelectedDepute() {
		$messageBox.css({
			'opacity': 0
		});
		scene.remove(outlineMesh);
	};

	function outlineSelectedShape(object) {
		scene.remove(outlineMesh);
		var increment = 2;
		var outlineGeometry = new th.CylinderGeometry(
			object.geometry.parameters.radiusTop + increment,
			object.geometry.parameters.radiusBottom + increment,
			object.geometry.parameters.height + increment,
			20,
			4);
		outlineMesh = new th.Mesh(outlineGeometry, outlineMaterial);
		outlineMesh.position.set(object.position.x, object.position.y, object.position.z);
		scene.add(outlineMesh);
	};

	// retrieve datas
	d3.json('api/synthese', setup);


}(jQuery, d3, THREE, THREEx, _, window, 'commission_presences');