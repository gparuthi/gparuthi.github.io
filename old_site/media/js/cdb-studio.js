/*
 * jQuery JavaScript Library v1.3.2
 * http://jquery.com/
 *
 * Copyright (c) 2009 John Resig
 * Dual licensed under the MIT and GPL licenses.
 * http://docs.jquery.com/License
 *
 * Date: 2009-02-19 17:34:21 -0500 (Thu, 19 Feb 2009)
 * Revision: 6246
 */
(function() {
	var m = this, h, z = m.jQuery, q = m.$, p = m.jQuery = m.$ = function(F, G) {
		return new p.fn.init(F, G)
	}, E = /^[^<]*(<(.|\s)+>)[^>]*$|^#([\w-]+)$/, g = /^.[^:#\[\.,]*$/;
	p.fn = p.prototype = {
		init : function(F, I) {
			F = F || document;
			if (F.nodeType) {
				this[0] = F;
				this.length = 1;
				this.context = F;
				return this
			}
			if (typeof F === "string") {
				var H = E.exec(F);
				if (H && (H[1] || !I)) {
					if (H[1]) {
						F = p.clean( [ H[1] ], I)
					} else {
						var J = document.getElementById(H[3]);
						if (J && J.id != H[3]) {
							return p().find(F)
						}
						var G = p(J || []);
						G.context = document;
						G.selector = F;
						return G
					}
				} else {
					return p(I).find(F)
				}
			} else {
				if (p.isFunction(F)) {
					return p(document).ready(F)
				}
			}
			if (F.selector && F.context) {
				this.selector = F.selector;
				this.context = F.context
			}
			return this.setArray(p.isArray(F) ? F : p.makeArray(F))
		},
		selector : "",
		jquery : "1.3.2",
		size : function() {
			return this.length
		},
		get : function(F) {
			return F === h ? Array.prototype.slice.call(this) : this[F]
		},
		pushStack : function(G, I, F) {
			var H = p(G);
			H.prevObject = this;
			H.context = this.context;
			if (I === "find") {
				H.selector = this.selector + (this.selector ? " " : "") + F
			} else {
				if (I) {
					H.selector = this.selector + "." + I + "(" + F + ")"
				}
			}
			return H
		},
		setArray : function(F) {
			this.length = 0;
			Array.prototype.push.apply(this, F);
			return this
		},
		each : function(G, F) {
			return p.each(this, G, F)
		},
		index : function(F) {
			return p.inArray(F && F.jquery ? F[0] : F, this)
		},
		attr : function(G, I, H) {
			var F = G;
			if (typeof G === "string") {
				if (I === h) {
					return this[0] && p[H || "attr"](this[0], G)
				} else {
					F = {};
					F[G] = I
				}
			}
			return this.each(function(J) {
				for (G in F) {
					p.attr(H ? this.style : this, G, p
							.prop(this, F[G], H, J, G))
				}
			})
		},
		css : function(F, G) {
			if ((F == "width" || F == "height") && parseFloat(G) < 0) {
				G = h
			}
			return this.attr(F, G, "curCSS")
		},
		text : function(G) {
			if (typeof G !== "object" && G != null) {
				return this.empty().append(
						(this[0] && this[0].ownerDocument || document)
								.createTextNode(G))
			}
			var F = "";
			p.each(G || this, function() {
				p.each(this.childNodes, function() {
					if (this.nodeType != 8) {
						F += this.nodeType != 1 ? this.nodeValue : p.fn
								.text( [ this ])
					}
				})
			});
			return F
		},
		wrapAll : function(F) {
			if (this[0]) {
				var G = p(F, this[0].ownerDocument).clone();
				if (this[0].parentNode) {
					G.insertBefore(this[0])
				}
				G.map(function() {
					var H = this;
					while (H.firstChild) {
						H = H.firstChild
					}
					return H
				}).append(this)
			}
			return this
		},
		wrapInner : function(F) {
			return this.each(function() {
				p(this).contents().wrapAll(F)
			})
		},
		wrap : function(F) {
			return this.each(function() {
				p(this).wrapAll(F)
			})
		},
		append : function() {
			return this.domManip(arguments, true, function(F) {
				if (this.nodeType == 1) {
					this.appendChild(F)
				}
			})
		},
		prepend : function() {
			return this.domManip(arguments, true, function(F) {
				if (this.nodeType == 1) {
					this.insertBefore(F, this.firstChild)
				}
			})
		},
		before : function() {
			return this.domManip(arguments, false, function(F) {
				this.parentNode.insertBefore(F, this)
			})
		},
		after : function() {
			return this.domManip(arguments, false, function(F) {
				this.parentNode.insertBefore(F, this.nextSibling)
			})
		},
		end : function() {
			return this.prevObject || p( [])
		},
		push : [].push,
		sort : [].sort,
		splice : [].splice,
		find : function(F) {
			if (this.length === 1) {
				var G = this.pushStack( [], "find", F);
				G.length = 0;
				p.find(F, this[0], G);
				return G
			} else {
				return this.pushStack(p.unique(p.map(this, function(H) {
					return p.find(F, H)
				})), "find", F)
			}
		},
		clone : function(H) {
			var F = this.map(function() {
				if (!p.support.noCloneEvent && !p.isXMLDoc(this)) {
					var J = this.outerHTML;
					if (!J) {
						var K = this.ownerDocument.createElement("div");
						K.appendChild(this.cloneNode(true));
						J = K.innerHTML
					}
					return p.clean( [ J.replace(/ jQuery\d+="(?:\d+|null)"/g,
							"").replace(/^\s*/, "") ])[0]
				} else {
					return this.cloneNode(true)
				}
			});
			if (H === true) {
				var I = this.find("*").andSelf(), G = 0;
				F.find("*").andSelf().each(function() {
					if (this.nodeName !== I[G].nodeName) {
						return
					}
					var J = p.data(I[G], "events");
					for ( var L in J) {
						for ( var K in J[L]) {
							p.event.add(this, L, J[L][K], J[L][K].data)
						}
					}
					G++
				})
			}
			return F
		},
		filter : function(F) {
			return this.pushStack(p.isFunction(F)
					&& p.grep(this, function(H, G) {
						return F.call(H, G)
					}) || p.multiFilter(F, p.grep(this, function(G) {
						return G.nodeType === 1
					})), "filter", F)
		},
		closest : function(F) {
			var H = p.expr.match.POS.test(F) ? p(F) : null, G = 0;
			return this.map(function() {
				var I = this;
				while (I && I.ownerDocument) {
					if (H ? H.index(I) > -1 : p(I).is(F)) {
						p.data(I, "closest", G);
						return I
					}
					I = I.parentNode;
					G++
				}
			})
		},
		not : function(F) {
			if (typeof F === "string") {
				if (g.test(F)) {
					return this.pushStack(p.multiFilter(F, this, true), "not",
							F)
				} else {
					F = p.multiFilter(F, this)
				}
			}
			var G = F.length && F[F.length - 1] !== h && !F.nodeType;
			return this.filter(function() {
				return G ? p.inArray(this, F) < 0 : this != F
			})
		},
		add : function(F) {
			return this.pushStack(p.unique(p.merge(this.get(),
					typeof F === "string" ? p(F) : p.makeArray(F))))
		},
		is : function(F) {
			return !!F && p.multiFilter(F, this).length > 0
		},
		hasClass : function(F) {
			return !!F && this.is("." + F)
		},
		val : function(L) {
			if (L === h) {
				var F = this[0];
				if (F) {
					if (p.nodeName(F, "option")) {
						return (F.attributes.value || {}).specified ? F.value
								: F.text
					}
					if (p.nodeName(F, "select")) {
						var J = F.selectedIndex, M = [], N = F.options, I = F.type == "select-one";
						if (J < 0) {
							return null
						}
						for ( var G = I ? J : 0, K = I ? J + 1 : N.length; G < K; G++) {
							var H = N[G];
							if (H.selected) {
								L = p(H).val();
								if (I) {
									return L
								}
								M.push(L)
							}
						}
						return M
					}
					return (F.value || "").replace(/\r/g, "")
				}
				return h
			}
			if (typeof L === "number") {
				L += ""
			}
			return this
					.each(function() {
						if (this.nodeType != 1) {
							return
						}
						if (p.isArray(L) && /radio|checkbox/.test(this.type)) {
							this.checked = (p.inArray(this.value, L) >= 0 || p
									.inArray(this.name, L) >= 0)
						} else {
							if (p.nodeName(this, "select")) {
								var O = p.makeArray(L);
								p("option", this)
										.each(
												function() {
													this.selected = (p.inArray(
															this.value, O) >= 0 || p
															.inArray(this.text,
																	O) >= 0)
												});
								if (!O.length) {
									this.selectedIndex = -1
								}
							} else {
								this.value = L
							}
						}
					})
		},
		html : function(F) {
			return F === h ? (this[0] ? this[0].innerHTML.replace(
					/ jQuery\d+="(?:\d+|null)"/g, "") : null) : this.empty()
					.append(F)
		},
		replaceWith : function(F) {
			return this.after(F).remove()
		},
		eq : function(F) {
			return this.slice(F, +F + 1)
		},
		slice : function() {
			return this.pushStack(Array.prototype.slice.apply(this, arguments),
					"slice", Array.prototype.slice.call(arguments).join(","))
		},
		map : function(F) {
			return this.pushStack(p.map(this, function(H, G) {
				return F.call(H, G, H)
			}))
		},
		andSelf : function() {
			return this.add(this.prevObject)
		},
		domManip : function(K, N, M) {
			if (this[0]) {
				var J = (this[0].ownerDocument || this[0])
						.createDocumentFragment(), G = p.clean(K,
						(this[0].ownerDocument || this[0]), J), I = J.firstChild;
				if (I) {
					for ( var H = 0, F = this.length; H < F; H++) {
						M.call(L(this[H], I), this.length > 1 || H > 0 ? J
								.cloneNode(true) : J)
					}
				}
				if (G) {
					p.each(G, A)
				}
			}
			return this;
			function L(O, P) {
				return N && p.nodeName(O, "table") && p.nodeName(P, "tr") ? (O
						.getElementsByTagName("tbody")[0] || O
						.appendChild(O.ownerDocument.createElement("tbody")))
						: O
			}
		}
	};
	p.fn.init.prototype = p.fn;
	function A(F, G) {
		if (G.src) {
			p.ajax( {
				url : G.src,
				async : false,
				dataType : "script"
			})
		} else {
			p.globalEval(G.text || G.textContent || G.innerHTML || "")
		}
		if (G.parentNode) {
			G.parentNode.removeChild(G)
		}
	}
	function f() {
		return +new Date
	}
	p.extend = p.fn.extend = function() {
		var K = arguments[0] || {}, I = 1, J = arguments.length, F = false, H;
		if (typeof K === "boolean") {
			F = K;
			K = arguments[1] || {};
			I = 2
		}
		if (typeof K !== "object" && !p.isFunction(K)) {
			K = {}
		}
		if (J == I) {
			K = this;
			--I
		}
		for (; I < J; I++) {
			if ((H = arguments[I]) != null) {
				for ( var G in H) {
					var L = K[G], M = H[G];
					if (K === M) {
						continue
					}
					if (F && M && typeof M === "object" && !M.nodeType) {
						K[G] = p
								.extend(F, L || (M.length != null ? [] : {}), M)
					} else {
						if (M !== h) {
							K[G] = M
						}
					}
				}
			}
		}
		return K
	};
	var b = /z-?index|font-?weight|opacity|zoom|line-?height/i, r = document.defaultView
			|| {}, t = Object.prototype.toString;
	p
			.extend( {
				noConflict : function(F) {
					m.$ = q;
					if (F) {
						m.jQuery = z
					}
					return p
				},
				isFunction : function(F) {
					return t.call(F) === "[object Function]"
				},
				isArray : function(F) {
					return t.call(F) === "[object Array]"
				},
				isXMLDoc : function(F) {
					return F.nodeType === 9
							&& F.documentElement.nodeName !== "HTML"
							|| !!F.ownerDocument && p.isXMLDoc(F.ownerDocument)
				},
				globalEval : function(H) {
					if (H && /\S/.test(H)) {
						var G = document.getElementsByTagName("head")[0]
								|| document.documentElement, F = document
								.createElement("script");
						F.type = "text/javascript";
						if (p.support.scriptEval) {
							F.appendChild(document.createTextNode(H))
						} else {
							F.text = H
						}
						G.insertBefore(F, G.firstChild);
						G.removeChild(F)
					}
				},
				nodeName : function(G, F) {
					return G.nodeName
							&& G.nodeName.toUpperCase() == F.toUpperCase()
				},
				each : function(H, L, G) {
					var F, I = 0, J = H.length;
					if (G) {
						if (J === h) {
							for (F in H) {
								if (L.apply(H[F], G) === false) {
									break
								}
							}
						} else {
							for (; I < J;) {
								if (L.apply(H[I++], G) === false) {
									break
								}
							}
						}
					} else {
						if (J === h) {
							for (F in H) {
								if (L.call(H[F], F, H[F]) === false) {
									break
								}
							}
						} else {
							for ( var K = H[0]; I < J
									&& L.call(K, I, K) !== false; K = H[++I]) {
							}
						}
					}
					return H
				},
				prop : function(I, J, H, G, F) {
					if (p.isFunction(J)) {
						J = J.call(I, G)
					}
					return typeof J === "number" && H == "curCSS" && !b.test(F) ? J
							+ "px"
							: J
				},
				className : {
					add : function(F, G) {
						p.each((G || "").split(/\s+/), function(H, I) {
							if (F.nodeType == 1
									&& !p.className.has(F.className, I)) {
								F.className += (F.className ? " " : "") + I
							}
						})
					},
					remove : function(F, G) {
						if (F.nodeType == 1) {
							F.className = G !== h ? p.grep(
									F.className.split(/\s+/), function(H) {
										return !p.className.has(G, H)
									}).join(" ") : ""
						}
					},
					has : function(G, F) {
						return G
								&& p.inArray(F, (G.className || G).toString()
										.split(/\s+/)) > -1
					}
				},
				swap : function(I, H, J) {
					var F = {};
					for ( var G in H) {
						F[G] = I.style[G];
						I.style[G] = H[G]
					}
					J.call(I);
					for ( var G in H) {
						I.style[G] = F[G]
					}
				},
				css : function(I, G, K, F) {
					if (G == "width" || G == "height") {
						var M, H = {
							position : "absolute",
							visibility : "hidden",
							display : "block"
						}, L = G == "width" ? [ "Left", "Right" ] : [ "Top",
								"Bottom" ];
						function J() {
							M = G == "width" ? I.offsetWidth : I.offsetHeight;
							if (F === "border") {
								return
							}
							p.each(L, function() {
								if (!F) {
									M -= parseFloat(p.curCSS(I, "padding"
											+ this, true)) || 0
								}
								if (F === "margin") {
									M += parseFloat(p.curCSS(I,
											"margin" + this, true)) || 0
								} else {
									M -= parseFloat(p.curCSS(I, "border" + this
											+ "Width", true)) || 0
								}
							})
						}
						if (I.offsetWidth !== 0) {
							J()
						} else {
							p.swap(I, H, J)
						}
						return Math.max(0, Math.round(M))
					}
					return p.curCSS(I, G, K)
				},
				curCSS : function(J, G, H) {
					var M, F = J.style;
					if (G == "opacity" && !p.support.opacity) {
						M = p.attr(F, "opacity");
						return M == "" ? "1" : M
					}
					if (G.match(/float/i)) {
						G = x
					}
					if (!H && F && F[G]) {
						M = F[G]
					} else {
						if (r.getComputedStyle) {
							if (G.match(/float/i)) {
								G = "float"
							}
							G = G.replace(/([A-Z])/g, "-$1").toLowerCase();
							var N = r.getComputedStyle(J, null);
							if (N) {
								M = N.getPropertyValue(G)
							}
							if (G == "opacity" && M == "") {
								M = "1"
							}
						} else {
							if (J.currentStyle) {
								var K = G.replace(/\-(\w)/g, function(O, P) {
									return P.toUpperCase()
								});
								M = J.currentStyle[G] || J.currentStyle[K];
								if (!/^\d+(px)?$/i.test(M) && /^\d/.test(M)) {
									var I = F.left, L = J.runtimeStyle.left;
									J.runtimeStyle.left = J.currentStyle.left;
									F.left = M || 0;
									M = F.pixelLeft + "px";
									F.left = I;
									J.runtimeStyle.left = L
								}
							}
						}
					}
					return M
				},
				clean : function(G, L, J) {
					L = L || document;
					if (typeof L.createElement === "undefined") {
						L = L.ownerDocument || L[0] && L[0].ownerDocument
								|| document
					}
					if (!J && G.length === 1 && typeof G[0] === "string") {
						var I = /^<(\w+)\s*\/?>$/.exec(G[0]);
						if (I) {
							return [ L.createElement(I[1]) ]
						}
					}
					var H = [], F = [], M = L.createElement("div");
					p
							.each(
									G,
									function(Q, T) {
										if (typeof T === "number") {
											T += ""
										}
										if (!T) {
											return
										}
										if (typeof T === "string") {
											T = T
													.replace(
															/(<(\w+)[^>]*?)\/>/g,
															function(V, W, U) {
																return U
																		.match(/^(abbr|br|col|img|input|link|meta|param|hr|area|embed)$/i) ? V
																		: W
																				+ "></"
																				+ U
																				+ ">"
															});
											var P = T.replace(/^\s+/, "")
													.substring(0, 10)
													.toLowerCase();
											var R = !P.indexOf("<opt")
													&& [
															1,
															"<select multiple='multiple'>",
															"</select>" ]
													|| !P.indexOf("<leg")
													&& [ 1, "<fieldset>",
															"</fieldset>" ]
													|| P
															.match(/^<(thead|tbody|tfoot|colg|cap)/)
													&& [ 1, "<table>",
															"</table>" ]
													|| !P.indexOf("<tr")
													&& [ 2, "<table><tbody>",
															"</tbody></table>" ]
													|| (!P.indexOf("<td") || !P
															.indexOf("<th"))
													&& [
															3,
															"<table><tbody><tr>",
															"</tr></tbody></table>" ]
													|| !P.indexOf("<col")
													&& [
															2,
															"<table><tbody></tbody><colgroup>",
															"</colgroup></table>" ]
													|| !p.support.htmlSerialize
													&& [ 1, "div<div>",
															"</div>" ]
													|| [ 0, "", "" ];
											M.innerHTML = R[1] + T + R[2];
											while (R[0]--) {
												M = M.lastChild
											}
											if (!p.support.tbody) {
												var S = /<tbody/i.test(T), O = !P
														.indexOf("<table")
														&& !S ? M.firstChild
														&& M.firstChild.childNodes
														: R[1] == "<table>"
																&& !S ? M.childNodes
																: [];
												for ( var N = O.length - 1; N >= 0; --N) {
													if (p.nodeName(O[N],
															"tbody")
															&& !O[N].childNodes.length) {
														O[N].parentNode
																.removeChild(O[N])
													}
												}
											}
											if (!p.support.leadingWhitespace
													&& /^\s/.test(T)) {
												M
														.insertBefore(
																L
																		.createTextNode(T
																				.match(/^\s*/)[0]),
																M.firstChild)
											}
											T = p.makeArray(M.childNodes)
										}
										if (T.nodeType) {
											H.push(T)
										} else {
											H = p.merge(H, T)
										}
									});
					if (J) {
						for ( var K = 0; H[K]; K++) {
							if (p.nodeName(H[K], "script")
									&& (!H[K].type || H[K].type.toLowerCase() === "text/javascript")) {
								F.push(H[K].parentNode ? H[K].parentNode
										.removeChild(H[K]) : H[K])
							} else {
								if (H[K].nodeType === 1) {
									H.splice
											.apply(
													H,
													[ K + 1, 0 ]
															.concat(p
																	.makeArray(H[K]
																			.getElementsByTagName("script"))))
								}
								J.appendChild(H[K])
							}
						}
						return F
					}
					return H
				},
				attr : function(K, H, L) {
					if (!K || K.nodeType == 3 || K.nodeType == 8) {
						return h
					}
					var I = !p.isXMLDoc(K), M = L !== h;
					H = I && p.props[H] || H;
					if (K.tagName) {
						var G = /href|src|style/.test(H);
						if (H == "selected" && K.parentNode) {
							K.parentNode.selectedIndex
						}
						if (H in K && I && !G) {
							if (M) {
								if (H == "type" && p.nodeName(K, "input")
										&& K.parentNode) {
									throw "type property can't be changed"
								}
								K[H] = L
							}
							if (p.nodeName(K, "form") && K.getAttributeNode(H)) {
								return K.getAttributeNode(H).nodeValue
							}
							if (H == "tabIndex") {
								var J = K.getAttributeNode("tabIndex");
								return J && J.specified ? J.value
										: K.nodeName
												.match(/(button|input|object|select|textarea)/i) ? 0
												: K.nodeName
														.match(/^(a|area)$/i)
														&& K.href ? 0 : h
							}
							return K[H]
						}
						if (!p.support.style && I && H == "style") {
							return p.attr(K.style, "cssText", L)
						}
						if (M) {
							K.setAttribute(H, "" + L)
						}
						var F = !p.support.hrefNormalized && I && G ? K
								.getAttribute(H, 2) : K.getAttribute(H);
						return F === null ? h : F
					}
					if (!p.support.opacity && H == "opacity") {
						if (M) {
							K.zoom = 1;
							K.filter = (K.filter || "").replace(
									/alpha\([^)]*\)/, "")
									+ (parseInt(L) + "" == "NaN" ? ""
											: "alpha(opacity=" + L * 100 + ")")
						}
						return K.filter && K.filter.indexOf("opacity=") >= 0 ? (parseFloat(K.filter
								.match(/opacity=([^)]*)/)[1]) / 100)
								+ ""
								: ""
					}
					H = H.replace(/-([a-z])/ig, function(N, O) {
						return O.toUpperCase()
					});
					if (M) {
						K[H] = L
					}
					return K[H]
				},
				trim : function(F) {
					return (F || "").replace(/^\s+|\s+$/g, "")
				},
				makeArray : function(H) {
					var F = [];
					if (H != null) {
						var G = H.length;
						if (G == null || typeof H === "string"
								|| p.isFunction(H) || H.setInterval) {
							F[0] = H
						} else {
							while (G) {
								F[--G] = H[G]
							}
						}
					}
					return F
				},
				inArray : function(H, I) {
					for ( var F = 0, G = I.length; F < G; F++) {
						if (I[F] === H) {
							return F
						}
					}
					return -1
				},
				merge : function(I, F) {
					var G = 0, H, J = I.length;
					if (!p.support.getAll) {
						while ((H = F[G++]) != null) {
							if (H.nodeType != 8) {
								I[J++] = H
							}
						}
					} else {
						while ((H = F[G++]) != null) {
							I[J++] = H
						}
					}
					return I
				},
				unique : function(L) {
					var G = [], F = {};
					try {
						for ( var H = 0, I = L.length; H < I; H++) {
							var K = p.data(L[H]);
							if (!F[K]) {
								F[K] = true;
								G.push(L[H])
							}
						}
					} catch (J) {
						G = L
					}
					return G
				},
				grep : function(G, K, F) {
					var H = [];
					for ( var I = 0, J = G.length; I < J; I++) {
						if (!F != !K(G[I], I)) {
							H.push(G[I])
						}
					}
					return H
				},
				map : function(F, K) {
					var G = [];
					for ( var H = 0, I = F.length; H < I; H++) {
						var J = K(F[H], H);
						if (J != null) {
							G[G.length] = J
						}
					}
					return G.concat.apply( [], G)
				}
			});
	var D = navigator.userAgent.toLowerCase();
	p.browser = {
		version : (D.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/) || [ 0, "0" ])[1],
		safari : /webkit/.test(D),
		opera : /opera/.test(D),
		msie : /msie/.test(D) && !/opera/.test(D),
		mozilla : /mozilla/.test(D) && !/(compatible|webkit)/.test(D)
	};
	p.each( {
		parent : function(F) {
			return F.parentNode
		},
		parents : function(F) {
			return p.dir(F, "parentNode")
		},
		next : function(F) {
			return p.nth(F, 2, "nextSibling")
		},
		prev : function(F) {
			return p.nth(F, 2, "previousSibling")
		},
		nextAll : function(F) {
			return p.dir(F, "nextSibling")
		},
		prevAll : function(F) {
			return p.dir(F, "previousSibling")
		},
		siblings : function(F) {
			return p.sibling(F.parentNode.firstChild, F)
		},
		children : function(F) {
			return p.sibling(F.firstChild)
		},
		contents : function(F) {
			return p.nodeName(F, "iframe") ? F.contentDocument
					|| F.contentWindow.document : p.makeArray(F.childNodes)
		}
	}, function(F, G) {
		p.fn[F] = function(H) {
			var I = p.map(this, G);
			if (H && typeof H == "string") {
				I = p.multiFilter(H, I)
			}
			return this.pushStack(p.unique(I), F, H)
		}
	});
	p.each( {
		appendTo : "append",
		prependTo : "prepend",
		insertBefore : "before",
		insertAfter : "after",
		replaceAll : "replaceWith"
	}, function(F, G) {
		p.fn[F] = function(H) {
			var K = [], M = p(H);
			for ( var L = 0, I = M.length; L < I; L++) {
				var J = (L > 0 ? this.clone(true) : this).get();
				p.fn[G].apply(p(M[L]), J);
				K = K.concat(J)
			}
			return this.pushStack(K, F, H)
		}
	});
	p.each( {
		removeAttr : function(F) {
			p.attr(this, F, "");
			if (this.nodeType == 1) {
				this.removeAttribute(F)
			}
		},
		addClass : function(F) {
			p.className.add(this, F)
		},
		removeClass : function(F) {
			p.className.remove(this, F)
		},
		toggleClass : function(G, F) {
			if (typeof F !== "boolean") {
				F = !p.className.has(this, G)
			}
			p.className[F ? "add" : "remove"](this, G)
		},
		remove : function(F) {
			if (!F || p.filter(F, [ this ]).length) {
				p("*", this).add( [ this ]).each(function() {
					p.event.remove(this);
					p.removeData(this)
				});
				if (this.parentNode) {
					this.parentNode.removeChild(this)
				}
			}
		},
		empty : function() {
			p(this).children().remove();
			while (this.firstChild) {
				this.removeChild(this.firstChild)
			}
		}
	}, function(F, G) {
		p.fn[F] = function() {
			return this.each(G, arguments)
		}
	});
	function k(F, G) {
		return F[0] && parseInt(p.curCSS(F[0], G, true), 10) || 0
	}
	var i = "jQuery" + f(), w = 0, B = {};
	p.extend( {
		cache : {},
		data : function(G, F, H) {
			G = G == m ? B : G;
			var I = G[i];
			if (!I) {
				I = G[i] = ++w
			}
			if (F && !p.cache[I]) {
				p.cache[I] = {}
			}
			if (H !== h) {
				p.cache[I][F] = H
			}
			return F ? p.cache[I][F] : I
		},
		removeData : function(G, F) {
			G = G == m ? B : G;
			var I = G[i];
			if (F) {
				if (p.cache[I]) {
					delete p.cache[I][F];
					F = "";
					for (F in p.cache[I]) {
						break
					}
					if (!F) {
						p.removeData(G)
					}
				}
			} else {
				try {
					delete G[i]
				} catch (H) {
					if (G.removeAttribute) {
						G.removeAttribute(i)
					}
				}
				delete p.cache[I]
			}
		},
		queue : function(G, F, I) {
			if (G) {
				F = (F || "fx") + "queue";
				var H = p.data(G, F);
				if (!H || p.isArray(I)) {
					H = p.data(G, F, p.makeArray(I))
				} else {
					if (I) {
						H.push(I)
					}
				}
			}
			return H
		},
		dequeue : function(I, H) {
			var F = p.queue(I, H), G = F.shift();
			if (!H || H === "fx") {
				G = F[0]
			}
			if (G !== h) {
				G.call(I)
			}
		}
	});
	p.fn.extend( {
		data : function(F, H) {
			var I = F.split(".");
			I[1] = I[1] ? "." + I[1] : "";
			if (H === h) {
				var G = this.triggerHandler("getData" + I[1] + "!", [ I[0] ]);
				if (G === h && this.length) {
					G = p.data(this[0], F)
				}
				return G === h && I[1] ? this.data(I[0]) : G
			} else {
				return this.trigger("setData" + I[1] + "!", [ I[0], H ]).each(
						function() {
							p.data(this, F, H)
						})
			}
		},
		removeData : function(F) {
			return this.each(function() {
				p.removeData(this, F)
			})
		},
		queue : function(F, G) {
			if (typeof F !== "string") {
				G = F;
				F = "fx"
			}
			if (G === h) {
				return p.queue(this[0], F)
			}
			return this.each(function() {
				var H = p.queue(this, F, G);
				if (F == "fx" && H.length == 1) {
					H[0].call(this)
				}
			})
		},
		dequeue : function(F) {
			return this.each(function() {
				p.dequeue(this, F)
			})
		}
	});
	/*
	 * Sizzle CSS Selector Engine - v0.9.3 Copyright 2009, The Dojo Foundation
	 * Released under the MIT, BSD, and GPL Licenses. More information:
	 * http://sizzlejs.com/
	 */
	(function() {
		var S = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?/g, M = 0, I = Object.prototype.toString;
		var G = function(Z, V, ac, ad) {
			ac = ac || [];
			V = V || document;
			if (V.nodeType !== 1 && V.nodeType !== 9) {
				return []
			}
			if (!Z || typeof Z !== "string") {
				return ac
			}
			var aa = [], X, ag, aj, U, ae, W, Y = true;
			S.lastIndex = 0;
			while ((X = S.exec(Z)) !== null) {
				aa.push(X[1]);
				if (X[2]) {
					W = RegExp.rightContext;
					break
				}
			}
			if (aa.length > 1 && N.exec(Z)) {
				if (aa.length === 2 && J.relative[aa[0]]) {
					ag = K(aa[0] + aa[1], V)
				} else {
					ag = J.relative[aa[0]] ? [ V ] : G(aa.shift(), V);
					while (aa.length) {
						Z = aa.shift();
						if (J.relative[Z]) {
							Z += aa.shift()
						}
						ag = K(Z, ag)
					}
				}
			} else {
				var af = ad ? {
					expr : aa.pop(),
					set : F(ad)
				} : G.find(aa.pop(),
						aa.length === 1 && V.parentNode ? V.parentNode : V,
						R(V));
				ag = G.filter(af.expr, af.set);
				if (aa.length > 0) {
					aj = F(ag)
				} else {
					Y = false
				}
				while (aa.length) {
					var ai = aa.pop(), ah = ai;
					if (!J.relative[ai]) {
						ai = ""
					} else {
						ah = aa.pop()
					}
					if (ah == null) {
						ah = V
					}
					J.relative[ai](aj, ah, R(V))
				}
			}
			if (!aj) {
				aj = ag
			}
			if (!aj) {
				throw "Syntax error, unrecognized expression: " + (ai || Z)
			}
			if (I.call(aj) === "[object Array]") {
				if (!Y) {
					ac.push.apply(ac, aj)
				} else {
					if (V.nodeType === 1) {
						for ( var ab = 0; aj[ab] != null; ab++) {
							if (aj[ab]
									&& (aj[ab] === true || aj[ab].nodeType === 1
											&& L(V, aj[ab]))) {
								ac.push(ag[ab])
							}
						}
					} else {
						for ( var ab = 0; aj[ab] != null; ab++) {
							if (aj[ab] && aj[ab].nodeType === 1) {
								ac.push(ag[ab])
							}
						}
					}
				}
			} else {
				F(aj, ac)
			}
			if (W) {
				G(W, V, ac, ad);
				if (H) {
					hasDuplicate = false;
					ac.sort(H);
					if (hasDuplicate) {
						for ( var ab = 1; ab < ac.length; ab++) {
							if (ac[ab] === ac[ab - 1]) {
								ac.splice(ab--, 1)
							}
						}
					}
				}
			}
			return ac
		};
		G.matches = function(U, V) {
			return G(U, null, null, V)
		};
		G.find = function(ab, U, ac) {
			var aa, Y;
			if (!ab) {
				return []
			}
			for ( var X = 0, W = J.order.length; X < W; X++) {
				var Z = J.order[X], Y;
				if ((Y = J.match[Z].exec(ab))) {
					var V = RegExp.leftContext;
					if (V.substr(V.length - 1) !== "\\") {
						Y[1] = (Y[1] || "").replace(/\\/g, "");
						aa = J.find[Z](Y, U, ac);
						if (aa != null) {
							ab = ab.replace(J.match[Z], "");
							break
						}
					}
				}
			}
			if (!aa) {
				aa = U.getElementsByTagName("*")
			}
			return {
				set : aa,
				expr : ab
			}
		};
		G.filter = function(ae, ad, ah, X) {
			var W = ae, aj = [], ab = ad, Z, U, aa = ad && ad[0] && R(ad[0]);
			while (ae && ad.length) {
				for ( var ac in J.filter) {
					if ((Z = J.match[ac].exec(ae)) != null) {
						var V = J.filter[ac], ai, ag;
						U = false;
						if (ab == aj) {
							aj = []
						}
						if (J.preFilter[ac]) {
							Z = J.preFilter[ac](Z, ab, ah, aj, X, aa);
							if (!Z) {
								U = ai = true
							} else {
								if (Z === true) {
									continue
								}
							}
						}
						if (Z) {
							for ( var Y = 0; (ag = ab[Y]) != null; Y++) {
								if (ag) {
									ai = V(ag, Z, Y, ab);
									var af = X ^ !!ai;
									if (ah && ai != null) {
										if (af) {
											U = true
										} else {
											ab[Y] = false
										}
									} else {
										if (af) {
											aj.push(ag);
											U = true
										}
									}
								}
							}
						}
						if (ai !== h) {
							if (!ah) {
								ab = aj
							}
							ae = ae.replace(J.match[ac], "");
							if (!U) {
								return []
							}
							break
						}
					}
				}
				if (ae == W) {
					if (U == null) {
						throw "Syntax error, unrecognized expression: " + ae
					} else {
						break
					}
				}
				W = ae
			}
			return ab
		};
		var J = G.selectors = {
			order : [ "ID", "NAME", "TAG" ],
			match : {
				ID : /#((?:[\w\u00c0-\uFFFF_-]|\\.)+)/,
				CLASS : /\.((?:[\w\u00c0-\uFFFF_-]|\\.)+)/,
				NAME : /\[name=['"]*((?:[\w\u00c0-\uFFFF_-]|\\.)+)['"]*\]/,
				ATTR : /\[\s*((?:[\w\u00c0-\uFFFF_-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,
				TAG : /^((?:[\w\u00c0-\uFFFF\*_-]|\\.)+)/,
				CHILD : /:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/,
				POS : /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/,
				PSEUDO : /:((?:[\w\u00c0-\uFFFF_-]|\\.)+)(?:\((['"]*)((?:\([^\)]+\)|[^\2\(\)]*)+)\2\))?/
			},
			attrMap : {
				"class" : "className",
				"for" : "htmlFor"
			},
			attrHandle : {
				href : function(U) {
					return U.getAttribute("href")
				}
			},
			relative : {
				"+" : function(ab, U, aa) {
					var Y = typeof U === "string", ac = Y && !/\W/.test(U), Z = Y
							&& !ac;
					if (ac && !aa) {
						U = U.toUpperCase()
					}
					for ( var X = 0, W = ab.length, V; X < W; X++) {
						if ((V = ab[X])) {
							while ((V = V.previousSibling) && V.nodeType !== 1) {
							}
							ab[X] = Z || V && V.nodeName === U ? V || false
									: V === U
						}
					}
					if (Z) {
						G.filter(U, ab, true)
					}
				},
				">" : function(aa, V, ab) {
					var Y = typeof V === "string";
					if (Y && !/\W/.test(V)) {
						V = ab ? V : V.toUpperCase();
						for ( var W = 0, U = aa.length; W < U; W++) {
							var Z = aa[W];
							if (Z) {
								var X = Z.parentNode;
								aa[W] = X.nodeName === V ? X : false
							}
						}
					} else {
						for ( var W = 0, U = aa.length; W < U; W++) {
							var Z = aa[W];
							if (Z) {
								aa[W] = Y ? Z.parentNode : Z.parentNode === V
							}
						}
						if (Y) {
							G.filter(V, aa, true)
						}
					}
				},
				"" : function(X, V, Z) {
					var W = M++, U = T;
					if (!V.match(/\W/)) {
						var Y = V = Z ? V : V.toUpperCase();
						U = Q
					}
					U("parentNode", V, W, X, Y, Z)
				},
				"~" : function(X, V, Z) {
					var W = M++, U = T;
					if (typeof V === "string" && !V.match(/\W/)) {
						var Y = V = Z ? V : V.toUpperCase();
						U = Q
					}
					U("previousSibling", V, W, X, Y, Z)
				}
			},
			find : {
				ID : function(V, W, X) {
					if (typeof W.getElementById !== "undefined" && !X) {
						var U = W.getElementById(V[1]);
						return U ? [ U ] : []
					}
				},
				NAME : function(W, Z, aa) {
					if (typeof Z.getElementsByName !== "undefined") {
						var V = [], Y = Z.getElementsByName(W[1]);
						for ( var X = 0, U = Y.length; X < U; X++) {
							if (Y[X].getAttribute("name") === W[1]) {
								V.push(Y[X])
							}
						}
						return V.length === 0 ? null : V
					}
				},
				TAG : function(U, V) {
					return V.getElementsByTagName(U[1])
				}
			},
			preFilter : {
				CLASS : function(X, V, W, U, aa, ab) {
					X = " " + X[1].replace(/\\/g, "") + " ";
					if (ab) {
						return X
					}
					for ( var Y = 0, Z; (Z = V[Y]) != null; Y++) {
						if (Z) {
							if (aa
									^ (Z.className && (" " + Z.className + " ")
											.indexOf(X) >= 0)) {
								if (!W) {
									U.push(Z)
								}
							} else {
								if (W) {
									V[Y] = false
								}
							}
						}
					}
					return false
				},
				ID : function(U) {
					return U[1].replace(/\\/g, "")
				},
				TAG : function(V, U) {
					for ( var W = 0; U[W] === false; W++) {
					}
					return U[W] && R(U[W]) ? V[1] : V[1].toUpperCase()
				},
				CHILD : function(U) {
					if (U[1] == "nth") {
						var V = /(-?)(\d*)n((?:\+|-)?\d*)/.exec(U[2] == "even"
								&& "2n" || U[2] == "odd" && "2n+1"
								|| !/\D/.test(U[2]) && "0n+" + U[2] || U[2]);
						U[2] = (V[1] + (V[2] || 1)) - 0;
						U[3] = V[3] - 0
					}
					U[0] = M++;
					return U
				},
				ATTR : function(Y, V, W, U, Z, aa) {
					var X = Y[1].replace(/\\/g, "");
					if (!aa && J.attrMap[X]) {
						Y[1] = J.attrMap[X]
					}
					if (Y[2] === "~=") {
						Y[4] = " " + Y[4] + " "
					}
					return Y
				},
				PSEUDO : function(Y, V, W, U, Z) {
					if (Y[1] === "not") {
						if (Y[3].match(S).length > 1 || /^\w/.test(Y[3])) {
							Y[3] = G(Y[3], null, null, V)
						} else {
							var X = G.filter(Y[3], V, W, true ^ Z);
							if (!W) {
								U.push.apply(U, X)
							}
							return false
						}
					} else {
						if (J.match.POS.test(Y[0]) || J.match.CHILD.test(Y[0])) {
							return true
						}
					}
					return Y
				},
				POS : function(U) {
					U.unshift(true);
					return U
				}
			},
			filters : {
				enabled : function(U) {
					return U.disabled === false && U.type !== "hidden"
				},
				disabled : function(U) {
					return U.disabled === true
				},
				checked : function(U) {
					return U.checked === true
				},
				selected : function(U) {
					U.parentNode.selectedIndex;
					return U.selected === true
				},
				parent : function(U) {
					return !!U.firstChild
				},
				empty : function(U) {
					return !U.firstChild
				},
				has : function(W, V, U) {
					return !!G(U[3], W).length
				},
				header : function(U) {
					return /h\d/i.test(U.nodeName)
				},
				text : function(U) {
					return "text" === U.type
				},
				radio : function(U) {
					return "radio" === U.type
				},
				checkbox : function(U) {
					return "checkbox" === U.type
				},
				file : function(U) {
					return "file" === U.type
				},
				password : function(U) {
					return "password" === U.type
				},
				submit : function(U) {
					return "submit" === U.type
				},
				image : function(U) {
					return "image" === U.type
				},
				reset : function(U) {
					return "reset" === U.type
				},
				button : function(U) {
					return "button" === U.type
							|| U.nodeName.toUpperCase() === "BUTTON"
				},
				input : function(U) {
					return /input|select|textarea|button/i.test(U.nodeName)
				}
			},
			setFilters : {
				first : function(V, U) {
					return U === 0
				},
				last : function(W, V, U, X) {
					return V === X.length - 1
				},
				even : function(V, U) {
					return U % 2 === 0
				},
				odd : function(V, U) {
					return U % 2 === 1
				},
				lt : function(W, V, U) {
					return V < U[3] - 0
				},
				gt : function(W, V, U) {
					return V > U[3] - 0
				},
				nth : function(W, V, U) {
					return U[3] - 0 == V
				},
				eq : function(W, V, U) {
					return U[3] - 0 == V
				}
			},
			filter : {
				PSEUDO : function(aa, W, X, ab) {
					var V = W[1], Y = J.filters[V];
					if (Y) {
						return Y(aa, X, W, ab)
					} else {
						if (V === "contains") {
							return (aa.textContent || aa.innerText || "")
									.indexOf(W[3]) >= 0
						} else {
							if (V === "not") {
								var Z = W[3];
								for ( var X = 0, U = Z.length; X < U; X++) {
									if (Z[X] === aa) {
										return false
									}
								}
								return true
							}
						}
					}
				},
				CHILD : function(U, X) {
					var aa = X[1], V = U;
					switch (aa) {
					case "only":
					case "first":
						while (V = V.previousSibling) {
							if (V.nodeType === 1) {
								return false
							}
						}
						if (aa == "first") {
							return true
						}
						V = U;
					case "last":
						while (V = V.nextSibling) {
							if (V.nodeType === 1) {
								return false
							}
						}
						return true;
					case "nth":
						var W = X[2], ad = X[3];
						if (W == 1 && ad == 0) {
							return true
						}
						var Z = X[0], ac = U.parentNode;
						if (ac && (ac.sizcache !== Z || !U.nodeIndex)) {
							var Y = 0;
							for (V = ac.firstChild; V; V = V.nextSibling) {
								if (V.nodeType === 1) {
									V.nodeIndex = ++Y
								}
							}
							ac.sizcache = Z
						}
						var ab = U.nodeIndex - ad;
						if (W == 0) {
							return ab == 0
						} else {
							return (ab % W == 0 && ab / W >= 0)
						}
					}
				},
				ID : function(V, U) {
					return V.nodeType === 1 && V.getAttribute("id") === U
				},
				TAG : function(V, U) {
					return (U === "*" && V.nodeType === 1) || V.nodeName === U
				},
				CLASS : function(V, U) {
					return (" " + (V.className || V.getAttribute("class")) + " ")
							.indexOf(U) > -1
				},
				ATTR : function(Z, X) {
					var W = X[1], U = J.attrHandle[W] ? J.attrHandle[W](Z)
							: Z[W] != null ? Z[W] : Z.getAttribute(W), aa = U
							+ "", Y = X[2], V = X[4];
					return U == null ? Y === "!="
							: Y === "=" ? aa === V
									: Y === "*=" ? aa.indexOf(V) >= 0
											: Y === "~=" ? (" " + aa + " ")
													.indexOf(V) >= 0
													: !V ? aa && U !== false
															: Y === "!=" ? aa != V
																	: Y === "^=" ? aa
																			.indexOf(V) === 0
																			: Y === "$=" ? aa
																					.substr(aa.length
																							- V.length) === V
																					: Y === "|=" ? aa === V
																							|| aa
																									.substr(
																											0,
																											V.length + 1) === V
																									+ "-"
																							: false
				},
				POS : function(Y, V, W, Z) {
					var U = V[2], X = J.setFilters[U];
					if (X) {
						return X(Y, W, V, Z)
					}
				}
			}
		};
		var N = J.match.POS;
		for ( var P in J.match) {
			J.match[P] = RegExp(J.match[P].source
					+ /(?![^\[]*\])(?![^\(]*\))/.source)
		}
		var F = function(V, U) {
			V = Array.prototype.slice.call(V);
			if (U) {
				U.push.apply(U, V);
				return U
			}
			return V
		};
		try {
			Array.prototype.slice.call(document.documentElement.childNodes)
		} catch (O) {
			F = function(Y, X) {
				var V = X || [];
				if (I.call(Y) === "[object Array]") {
					Array.prototype.push.apply(V, Y)
				} else {
					if (typeof Y.length === "number") {
						for ( var W = 0, U = Y.length; W < U; W++) {
							V.push(Y[W])
						}
					} else {
						for ( var W = 0; Y[W]; W++) {
							V.push(Y[W])
						}
					}
				}
				return V
			}
		}
		var H;
		if (document.documentElement.compareDocumentPosition) {
			H = function(V, U) {
				var W = V.compareDocumentPosition(U) & 4 ? -1 : V === U ? 0 : 1;
				if (W === 0) {
					hasDuplicate = true
				}
				return W
			}
		} else {
			if ("sourceIndex" in document.documentElement) {
				H = function(V, U) {
					var W = V.sourceIndex - U.sourceIndex;
					if (W === 0) {
						hasDuplicate = true
					}
					return W
				}
			} else {
				if (document.createRange) {
					H = function(X, V) {
						var W = X.ownerDocument.createRange(), U = V.ownerDocument
								.createRange();
						W.selectNode(X);
						W.collapse(true);
						U.selectNode(V);
						U.collapse(true);
						var Y = W.compareBoundaryPoints(Range.START_TO_END, U);
						if (Y === 0) {
							hasDuplicate = true
						}
						return Y
					}
				}
			}
		}
		(function() {
			var V = document.createElement("form"), W = "script"
					+ (new Date).getTime();
			V.innerHTML = "<input name='" + W + "'/>";
			var U = document.documentElement;
			U.insertBefore(V, U.firstChild);
			if (!!document.getElementById(W)) {
				J.find.ID = function(Y, Z, aa) {
					if (typeof Z.getElementById !== "undefined" && !aa) {
						var X = Z.getElementById(Y[1]);
						return X ? X.id === Y[1]
								|| typeof X.getAttributeNode !== "undefined"
								&& X.getAttributeNode("id").nodeValue === Y[1] ? [ X ]
								: h
								: []
					}
				};
				J.filter.ID = function(Z, X) {
					var Y = typeof Z.getAttributeNode !== "undefined"
							&& Z.getAttributeNode("id");
					return Z.nodeType === 1 && Y && Y.nodeValue === X
				}
			}
			U.removeChild(V)
		})();
		(function() {
			var U = document.createElement("div");
			U.appendChild(document.createComment(""));
			if (U.getElementsByTagName("*").length > 0) {
				J.find.TAG = function(V, Z) {
					var Y = Z.getElementsByTagName(V[1]);
					if (V[1] === "*") {
						var X = [];
						for ( var W = 0; Y[W]; W++) {
							if (Y[W].nodeType === 1) {
								X.push(Y[W])
							}
						}
						Y = X
					}
					return Y
				}
			}
			U.innerHTML = "<a href='#'></a>";
			if (U.firstChild
					&& typeof U.firstChild.getAttribute !== "undefined"
					&& U.firstChild.getAttribute("href") !== "#") {
				J.attrHandle.href = function(V) {
					return V.getAttribute("href", 2)
				}
			}
		})();
		if (document.querySelectorAll) {
			(function() {
				var U = G, V = document.createElement("div");
				V.innerHTML = "<p class='TEST'></p>";
				if (V.querySelectorAll
						&& V.querySelectorAll(".TEST").length === 0) {
					return
				}
				G = function(Z, Y, W, X) {
					Y = Y || document;
					if (!X && Y.nodeType === 9 && !R(Y)) {
						try {
							return F(Y.querySelectorAll(Z), W)
						} catch (aa) {
						}
					}
					return U(Z, Y, W, X)
				};
				G.find = U.find;
				G.filter = U.filter;
				G.selectors = U.selectors;
				G.matches = U.matches
			})()
		}
		if (document.getElementsByClassName
				&& document.documentElement.getElementsByClassName) {
			(function() {
				var U = document.createElement("div");
				U.innerHTML = "<div class='test e'></div><div class='test'></div>";
				if (U.getElementsByClassName("e").length === 0) {
					return
				}
				U.lastChild.className = "e";
				if (U.getElementsByClassName("e").length === 1) {
					return
				}
				J.order.splice(1, 0, "CLASS");
				J.find.CLASS = function(V, W, X) {
					if (typeof W.getElementsByClassName !== "undefined" && !X) {
						return W.getElementsByClassName(V[1])
					}
				}
			})()
		}
		function Q(V, aa, Z, ae, ab, ad) {
			var ac = V == "previousSibling" && !ad;
			for ( var X = 0, W = ae.length; X < W; X++) {
				var U = ae[X];
				if (U) {
					if (ac && U.nodeType === 1) {
						U.sizcache = Z;
						U.sizset = X
					}
					U = U[V];
					var Y = false;
					while (U) {
						if (U.sizcache === Z) {
							Y = ae[U.sizset];
							break
						}
						if (U.nodeType === 1 && !ad) {
							U.sizcache = Z;
							U.sizset = X
						}
						if (U.nodeName === aa) {
							Y = U;
							break
						}
						U = U[V]
					}
					ae[X] = Y
				}
			}
		}
		function T(V, aa, Z, ae, ab, ad) {
			var ac = V == "previousSibling" && !ad;
			for ( var X = 0, W = ae.length; X < W; X++) {
				var U = ae[X];
				if (U) {
					if (ac && U.nodeType === 1) {
						U.sizcache = Z;
						U.sizset = X
					}
					U = U[V];
					var Y = false;
					while (U) {
						if (U.sizcache === Z) {
							Y = ae[U.sizset];
							break
						}
						if (U.nodeType === 1) {
							if (!ad) {
								U.sizcache = Z;
								U.sizset = X
							}
							if (typeof aa !== "string") {
								if (U === aa) {
									Y = true;
									break
								}
							} else {
								if (G.filter(aa, [ U ]).length > 0) {
									Y = U;
									break
								}
							}
						}
						U = U[V]
					}
					ae[X] = Y
				}
			}
		}
		var L = document.compareDocumentPosition ? function(V, U) {
			return V.compareDocumentPosition(U) & 16
		} : function(V, U) {
			return V !== U && (V.contains ? V.contains(U) : true)
		};
		var R = function(U) {
			return U.nodeType === 9 && U.documentElement.nodeName !== "HTML"
					|| !!U.ownerDocument && R(U.ownerDocument)
		};
		var K = function(U, ab) {
			var X = [], Y = "", Z, W = ab.nodeType ? [ ab ] : ab;
			while ((Z = J.match.PSEUDO.exec(U))) {
				Y += Z[0];
				U = U.replace(J.match.PSEUDO, "")
			}
			U = J.relative[U] ? U + "*" : U;
			for ( var aa = 0, V = W.length; aa < V; aa++) {
				G(U, W[aa], X)
			}
			return G.filter(Y, X)
		};
		p.find = G;
		p.filter = G.filter;
		p.expr = G.selectors;
		p.expr[":"] = p.expr.filters;
		G.selectors.filters.hidden = function(U) {
			return U.offsetWidth === 0 || U.offsetHeight === 0
		};
		G.selectors.filters.visible = function(U) {
			return U.offsetWidth > 0 || U.offsetHeight > 0
		};
		G.selectors.filters.animated = function(U) {
			return p.grep(p.timers, function(V) {
				return U === V.elem
			}).length
		};
		p.multiFilter = function(W, U, V) {
			if (V) {
				W = ":not(" + W + ")"
			}
			return G.matches(W, U)
		};
		p.dir = function(W, V) {
			var U = [], X = W[V];
			while (X && X != document) {
				if (X.nodeType == 1) {
					U.push(X)
				}
				X = X[V]
			}
			return U
		};
		p.nth = function(Y, U, W, X) {
			U = U || 1;
			var V = 0;
			for (; Y; Y = Y[W]) {
				if (Y.nodeType == 1 && ++V == U) {
					break
				}
			}
			return Y
		};
		p.sibling = function(W, V) {
			var U = [];
			for (; W; W = W.nextSibling) {
				if (W.nodeType == 1 && W != V) {
					U.push(W)
				}
			}
			return U
		};
		return;
		m.Sizzle = G
	})();
	p.event = {
		add : function(J, G, I, L) {
			if (J.nodeType == 3 || J.nodeType == 8) {
				return
			}
			if (J.setInterval && J != m) {
				J = m
			}
			if (!I.guid) {
				I.guid = this.guid++
			}
			if (L !== h) {
				var H = I;
				I = this.proxy(H);
				I.data = L
			}
			var F = p.data(J, "events") || p.data(J, "events", {}), K = p.data(
					J, "handle")
					|| p
							.data(
									J,
									"handle",
									function() {
										return typeof p !== "undefined"
												&& !p.event.triggered ? p.event.handle
												.apply(arguments.callee.elem,
														arguments)
												: h
									});
			K.elem = J;
			p
					.each(G.split(/\s+/),
							function(N, O) {
								var P = O.split(".");
								O = P.shift();
								I.type = P.slice().sort().join(".");
								var M = F[O];
								if (p.event.specialAll[O]) {
									p.event.specialAll[O].setup.call(J, L, P)
								}
								if (!M) {
									M = F[O] = {};
									if (!p.event.special[O]
											|| p.event.special[O].setup.call(J,
													L, P) === false) {
										if (J.addEventListener) {
											J.addEventListener(O, K, false)
										} else {
											if (J.attachEvent) {
												J.attachEvent("on" + O, K)
											}
										}
									}
								}
								M[I.guid] = I;
								p.event.global[O] = true
							});
			J = null
		},
		guid : 1,
		global : {},
		remove : function(L, I, K) {
			if (L.nodeType == 3 || L.nodeType == 8) {
				return
			}
			var H = p.data(L, "events"), G, F;
			if (H) {
				if (I === h || (typeof I === "string" && I.charAt(0) == ".")) {
					for ( var J in H) {
						this.remove(L, J + (I || ""))
					}
				} else {
					if (I.type) {
						K = I.handler;
						I = I.type
					}
					p.each(I.split(/\s+/), function(N, P) {
						var R = P.split(".");
						P = R.shift();
						var O = RegExp("(^|\\.)"
								+ R.slice().sort().join(".*\\.") + "(\\.|$)");
						if (H[P]) {
							if (K) {
								delete H[P][K.guid]
							} else {
								for ( var Q in H[P]) {
									if (O.test(H[P][Q].type)) {
										delete H[P][Q]
									}
								}
							}
							if (p.event.specialAll[P]) {
								p.event.specialAll[P].teardown.call(L, R)
							}
							for (G in H[P]) {
								break
							}
							if (!G) {
								if (!p.event.special[P]
										|| p.event.special[P].teardown.call(L,
												R) === false) {
									if (L.removeEventListener) {
										L.removeEventListener(P, p.data(L,
												"handle"), false)
									} else {
										if (L.detachEvent) {
											L.detachEvent("on" + P, p.data(L,
													"handle"))
										}
									}
								}
								G = null;
								delete H[P]
							}
						}
					})
				}
				for (G in H) {
					break
				}
				if (!G) {
					var M = p.data(L, "handle");
					if (M) {
						M.elem = null
					}
					p.removeData(L, "events");
					p.removeData(L, "handle")
				}
			}
		},
		trigger : function(J, L, I, F) {
			var H = J.type || J;
			if (!F) {
				J = typeof J === "object" ? J[i] ? J : p.extend(p.Event(H), J)
						: p.Event(H);
				if (H.indexOf("!") >= 0) {
					J.type = H = H.slice(0, -1);
					J.exclusive = true
				}
				if (!I) {
					J.stopPropagation();
					if (this.global[H]) {
						p.each(p.cache, function() {
							if (this.events && this.events[H]) {
								p.event.trigger(J, L, this.handle.elem)
							}
						})
					}
				}
				if (!I || I.nodeType == 3 || I.nodeType == 8) {
					return h
				}
				J.result = h;
				J.target = I;
				L = p.makeArray(L);
				L.unshift(J)
			}
			J.currentTarget = I;
			var K = p.data(I, "handle");
			if (K) {
				K.apply(I, L)
			}
			if ((!I[H] || (p.nodeName(I, "a") && H == "click")) && I["on" + H]
					&& I["on" + H].apply(I, L) === false) {
				J.result = false
			}
			if (!F && I[H] && !J.isDefaultPrevented()
					&& !(p.nodeName(I, "a") && H == "click")) {
				this.triggered = true;
				try {
					I[H]()
				} catch (M) {
				}
			}
			this.triggered = false;
			if (!J.isPropagationStopped()) {
				var G = I.parentNode || I.ownerDocument;
				if (G) {
					p.event.trigger(J, L, G, true)
				}
			}
		},
		handle : function(L) {
			var K, F;
			L = arguments[0] = p.event.fix(L || m.event);
			L.currentTarget = this;
			var M = L.type.split(".");
			L.type = M.shift();
			K = !M.length && !L.exclusive;
			var J = RegExp("(^|\\.)" + M.slice().sort().join(".*\\.")
					+ "(\\.|$)");
			F = (p.data(this, "events") || {})[L.type];
			for ( var H in F) {
				var I = F[H];
				if (K || J.test(I.type)) {
					L.handler = I;
					L.data = I.data;
					var G = I.apply(this, arguments);
					if (G !== h) {
						L.result = G;
						if (G === false) {
							L.preventDefault();
							L.stopPropagation()
						}
					}
					if (L.isImmediatePropagationStopped()) {
						break
					}
				}
			}
		},
		props : "altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode metaKey newValue originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which"
				.split(" "),
		fix : function(I) {
			if (I[i]) {
				return I
			}
			var G = I;
			I = p.Event(G);
			for ( var H = this.props.length, K; H;) {
				K = this.props[--H];
				I[K] = G[K]
			}
			if (!I.target) {
				I.target = I.srcElement || document
			}
			if (I.target.nodeType == 3) {
				I.target = I.target.parentNode
			}
			if (!I.relatedTarget && I.fromElement) {
				I.relatedTarget = I.fromElement == I.target ? I.toElement
						: I.fromElement
			}
			if (I.pageX == null && I.clientX != null) {
				var J = document.documentElement, F = document.body;
				I.pageX = I.clientX
						+ (J && J.scrollLeft || F && F.scrollLeft || 0)
						- (J.clientLeft || 0);
				I.pageY = I.clientY
						+ (J && J.scrollTop || F && F.scrollTop || 0)
						- (J.clientTop || 0)
			}
			if (!I.which
					&& ((I.charCode || I.charCode === 0) ? I.charCode
							: I.keyCode)) {
				I.which = I.charCode || I.keyCode
			}
			if (!I.metaKey && I.ctrlKey) {
				I.metaKey = I.ctrlKey
			}
			if (!I.which && I.button) {
				I.which = (I.button & 1 ? 1 : (I.button & 2 ? 3
						: (I.button & 4 ? 2 : 0)))
			}
			return I
		},
		proxy : function(G, F) {
			F = F || function() {
				return G.apply(this, arguments)
			};
			F.guid = G.guid = G.guid || F.guid || this.guid++;
			return F
		},
		special : {
			ready : {
				setup : C,
				teardown : function() {
				}
			}
		},
		specialAll : {
			live : {
				setup : function(F, G) {
					p.event.add(this, G[0], d)
				},
				teardown : function(H) {
					if (H.length) {
						var F = 0, G = RegExp("(^|\\.)" + H[0] + "(\\.|$)");
						p.each((p.data(this, "events").live || {}), function() {
							if (G.test(this.type)) {
								F++
							}
						});
						if (F < 1) {
							p.event.remove(this, H[0], d)
						}
					}
				}
			}
		}
	};
	p.Event = function(F) {
		if (!this.preventDefault) {
			return new p.Event(F)
		}
		if (F && F.type) {
			this.originalEvent = F;
			this.type = F.type
		} else {
			this.type = F
		}
		this.timeStamp = f();
		this[i] = true
	};
	function l() {
		return false
	}
	function v() {
		return true
	}
	p.Event.prototype = {
		preventDefault : function() {
			this.isDefaultPrevented = v;
			var F = this.originalEvent;
			if (!F) {
				return
			}
			if (F.preventDefault) {
				F.preventDefault()
			}
			F.returnValue = false
		},
		stopPropagation : function() {
			this.isPropagationStopped = v;
			var F = this.originalEvent;
			if (!F) {
				return
			}
			if (F.stopPropagation) {
				F.stopPropagation()
			}
			F.cancelBubble = true
		},
		stopImmediatePropagation : function() {
			this.isImmediatePropagationStopped = v;
			this.stopPropagation()
		},
		isDefaultPrevented : l,
		isPropagationStopped : l,
		isImmediatePropagationStopped : l
	};
	var a = function(G) {
		var F = G.relatedTarget;
		while (F && F != this) {
			try {
				F = F.parentNode
			} catch (H) {
				F = this
			}
		}
		if (F != this) {
			G.type = G.data;
			p.event.handle.apply(this, arguments)
		}
	};
	p.each( {
		mouseover : "mouseenter",
		mouseout : "mouseleave"
	}, function(G, F) {
		p.event.special[F] = {
			setup : function() {
				p.event.add(this, G, a, F)
			},
			teardown : function() {
				p.event.remove(this, G, a)
			}
		}
	});
	p.fn.extend( {
		bind : function(G, H, F) {
			return G == "unload" ? this.one(G, H, F) : this.each(function() {
				p.event.add(this, G, F || H, F && H)
			})
		},
		one : function(H, I, G) {
			var F = p.event.proxy(G || I, function(J) {
				p(this).unbind(J, F);
				return (G || I).apply(this, arguments)
			});
			return this.each(function() {
				p.event.add(this, H, F, G && I)
			})
		},
		unbind : function(G, F) {
			return this.each(function() {
				p.event.remove(this, G, F)
			})
		},
		trigger : function(F, G) {
			return this.each(function() {
				p.event.trigger(F, G, this)
			})
		},
		triggerHandler : function(F, H) {
			if (this[0]) {
				var G = p.Event(F);
				G.preventDefault();
				G.stopPropagation();
				p.event.trigger(G, H, this[0]);
				return G.result
			}
		},
		toggle : function(H) {
			var F = arguments, G = 1;
			while (G < F.length) {
				p.event.proxy(H, F[G++])
			}
			return this.click(p.event.proxy(H, function(I) {
				this.lastToggle = (this.lastToggle || 0) % G;
				I.preventDefault();
				return F[this.lastToggle++].apply(this, arguments) || false
			}))
		},
		hover : function(F, G) {
			return this.mouseenter(F).mouseleave(G)
		},
		ready : function(F) {
			C();
			if (p.isReady) {
				F.call(document, p)
			} else {
				p.readyList.push(F)
			}
			return this
		},
		live : function(H, G) {
			var F = p.event.proxy(G);
			F.guid += this.selector + H;
			p(document).bind(j(H, this.selector), this.selector, F);
			return this
		},
		die : function(G, F) {
			p(document).unbind(j(G, this.selector), F ? {
				guid : F.guid + this.selector + G
			} : null);
			return this
		}
	});
	function d(I) {
		var F = RegExp("(^|\\.)" + I.type + "(\\.|$)"), H = true, G = [];
		p.each(p.data(this, "events").live || [], function(J, K) {
			if (F.test(K.type)) {
				var L = p(I.target).closest(K.data)[0];
				if (L) {
					G.push( {
						elem : L,
						fn : K
					})
				}
			}
		});
		G.sort(function(K, J) {
			return p.data(K.elem, "closest") - p.data(J.elem, "closest")
		});
		p.each(G, function() {
			if (this.fn.call(this.elem, I, this.fn.data) === false) {
				return (H = false)
			}
		});
		return H
	}
	function j(G, F) {
		return [ "live", G, F.replace(/\./g, "`").replace(/ /g, "|") ]
				.join(".")
	}
	p.extend( {
		isReady : false,
		readyList : [],
		ready : function() {
			if (!p.isReady) {
				p.isReady = true;
				if (p.readyList) {
					p.each(p.readyList, function() {
						this.call(document, p)
					});
					p.readyList = null
				}
				p(document).triggerHandler("ready")
			}
		}
	});
	var y = false;
	function C() {
		if (y) {
			return
		}
		y = true;
		if (document.addEventListener) {
			document.addEventListener("DOMContentLoaded", function() {
				document.removeEventListener("DOMContentLoaded",
						arguments.callee, false);
				p.ready()
			}, false)
		} else {
			if (document.attachEvent) {
				document.attachEvent("onreadystatechange", function() {
					if (document.readyState === "complete") {
						document.detachEvent("onreadystatechange",
								arguments.callee);
						p.ready()
					}
				});
				if (document.documentElement.doScroll && m == m.top) {
					(function() {
						if (p.isReady) {
							return
						}
						try {
							document.documentElement.doScroll("left")
						} catch (F) {
							setTimeout(arguments.callee, 0);
							return
						}
						p.ready()
					})()
				}
			}
		}
		p.event.add(m, "load", p.ready)
	}
	p
			.each(
					("blur,focus,load,resize,scroll,unload,click,dblclick,mousedown,mouseup,mousemove,mouseover,mouseout,mouseenter,mouseleave,change,select,submit,keydown,keypress,keyup,error")
							.split(","), function(G, F) {
						p.fn[F] = function(H) {
							return H ? this.bind(F, H) : this.trigger(F)
						}
					});
	p(m).bind("unload", function() {
		for ( var F in p.cache) {
			if (F != 1 && p.cache[F].handle) {
				p.event.remove(p.cache[F].handle.elem)
			}
		}
	});
	(function() {
		p.support = {};
		var G = document.documentElement, H = document.createElement("script"), L = document
				.createElement("div"), K = "script" + (new Date).getTime();
		L.style.display = "none";
		L.innerHTML = '   <link/><table></table><a href="/a" style="color:red;float:left;opacity:.5;">a</a><select><option>text</option></select><object><param/></object>';
		var I = L.getElementsByTagName("*"), F = L.getElementsByTagName("a")[0];
		if (!I || !I.length || !F) {
			return
		}
		p.support = {
			leadingWhitespace : L.firstChild.nodeType == 3,
			tbody : !L.getElementsByTagName("tbody").length,
			objectAll : !!L.getElementsByTagName("object")[0]
					.getElementsByTagName("*").length,
			htmlSerialize : !!L.getElementsByTagName("link").length,
			style : /red/.test(F.getAttribute("style")),
			hrefNormalized : F.getAttribute("href") === "/a",
			opacity : F.style.opacity === "0.5",
			cssFloat : !!F.style.cssFloat,
			scriptEval : false,
			noCloneEvent : true,
			boxModel : null
		};
		H.type = "text/javascript";
		try {
			H.appendChild(document.createTextNode("window." + K + "=1;"))
		} catch (J) {
		}
		G.insertBefore(H, G.firstChild);
		if (m[K]) {
			p.support.scriptEval = true;
			delete m[K]
		}
		G.removeChild(H);
		if (L.attachEvent && L.fireEvent) {
			L.attachEvent("onclick", function() {
				p.support.noCloneEvent = false;
				L.detachEvent("onclick", arguments.callee)
			});
			L.cloneNode(true).fireEvent("onclick")
		}
		p(function() {
			var M = document.createElement("div");
			M.style.width = M.style.paddingLeft = "1px";
			document.body.appendChild(M);
			p.boxModel = p.support.boxModel = M.offsetWidth === 2;
			document.body.removeChild(M).style.display = "none"
		})
	})();
	var x = p.support.cssFloat ? "cssFloat" : "styleFloat";
	p.props = {
		"for" : "htmlFor",
		"class" : "className",
		"float" : x,
		cssFloat : x,
		styleFloat : x,
		readonly : "readOnly",
		maxlength : "maxLength",
		cellspacing : "cellSpacing",
		rowspan : "rowSpan",
		tabindex : "tabIndex"
	};
	p.fn
			.extend( {
				_load : p.fn.load,
				load : function(H, K, L) {
					if (typeof H !== "string") {
						return this._load(H)
					}
					var J = H.indexOf(" ");
					if (J >= 0) {
						var F = H.slice(J, H.length);
						H = H.slice(0, J)
					}
					var I = "GET";
					if (K) {
						if (p.isFunction(K)) {
							L = K;
							K = null
						} else {
							if (typeof K === "object") {
								K = p.param(K);
								I = "POST"
							}
						}
					}
					var G = this;
					p
							.ajax( {
								url : H,
								type : I,
								dataType : "html",
								data : K,
								complete : function(N, M) {
									if (M == "success" || M == "notmodified") {
										G
												.html(F ? p("<div/>")
														.append(
																N.responseText
																		.replace(
																				/<script(.|\s)*?\/script>/g,
																				""))
														.find(F)
														: N.responseText)
									}
									if (L) {
										G.each(L, [ N.responseText, M, N ])
									}
								}
							});
					return this
				},
				serialize : function() {
					return p.param(this.serializeArray())
				},
				serializeArray : function() {
					return this
							.map(
									function() {
										return this.elements ? p
												.makeArray(this.elements)
												: this
									})
							.filter(
									function() {
										return this.name
												&& !this.disabled
												&& (this.checked
														|| /select|textarea/i
																.test(this.nodeName) || /text|hidden|password|search/i
														.test(this.type))
									}).map(
									function(F, G) {
										var H = p(this).val();
										return H == null ? null
												: p.isArray(H) ? p.map(H,
														function(J, I) {
															return {
																name : G.name,
																value : J
															}
														}) : {
													name : G.name,
													value : H
												}
									}).get()
				}
			});
	p.each("ajaxStart,ajaxStop,ajaxComplete,ajaxError,ajaxSuccess,ajaxSend"
			.split(","), function(F, G) {
		p.fn[G] = function(H) {
			return this.bind(G, H)
		}
	});
	var s = f();
	p
			.extend( {
				get : function(F, H, I, G) {
					if (p.isFunction(H)) {
						I = H;
						H = null
					}
					return p.ajax( {
						type : "GET",
						url : F,
						data : H,
						success : I,
						dataType : G
					})
				},
				getScript : function(F, G) {
					return p.get(F, null, G, "script")
				},
				getJSON : function(F, G, H) {
					return p.get(F, G, H, "json")
				},
				post : function(F, H, I, G) {
					if (p.isFunction(H)) {
						I = H;
						H = {}
					}
					return p.ajax( {
						type : "POST",
						url : F,
						data : H,
						success : I,
						dataType : G
					})
				},
				ajaxSetup : function(F) {
					p.extend(p.ajaxSettings, F)
				},
				ajaxSettings : {
					url : location.href,
					global : true,
					type : "GET",
					contentType : "application/x-www-form-urlencoded",
					processData : true,
					async : true,
					xhr : function() {
						return m.ActiveXObject ? new ActiveXObject(
								"Microsoft.XMLHTTP") : new XMLHttpRequest()
					},
					accepts : {
						xml : "application/xml, text/xml",
						html : "text/html",
						script : "text/javascript, application/javascript",
						json : "application/json, text/javascript",
						text : "text/plain",
						_default : "*/*"
					}
				},
				lastModified : {},
				ajax : function(N) {
					N = p
							.extend(true, N, p.extend(true, {}, p.ajaxSettings,
									N));
					var X, G = /=\?(&|$)/g, S, W, H = N.type.toUpperCase();
					if (N.data && N.processData && typeof N.data !== "string") {
						N.data = p.param(N.data)
					}
					if (N.dataType == "jsonp") {
						if (H == "GET") {
							if (!N.url.match(G)) {
								N.url += (N.url.match(/\?/) ? "&" : "?")
										+ (N.jsonp || "callback") + "=?"
							}
						} else {
							if (!N.data || !N.data.match(G)) {
								N.data = (N.data ? N.data + "&" : "")
										+ (N.jsonp || "callback") + "=?"
							}
						}
						N.dataType = "json"
					}
					if (N.dataType == "json"
							&& (N.data && N.data.match(G) || N.url.match(G))) {
						X = "jsonp" + s++;
						if (N.data) {
							N.data = (N.data + "").replace(G, "=" + X + "$1")
						}
						N.url = N.url.replace(G, "=" + X + "$1");
						N.dataType = "script";
						m[X] = function(Y) {
							W = Y;
							J();
							M();
							m[X] = h;
							try {
								delete m[X]
							} catch (Z) {
							}
							if (I) {
								I.removeChild(U)
							}
						}
					}
					if (N.dataType == "script" && N.cache == null) {
						N.cache = false
					}
					if (N.cache === false && H == "GET") {
						var F = f();
						var V = N.url.replace(/(\?|&)_=.*?(&|$)/, "$1_=" + F
								+ "$2");
						N.url = V
								+ ((V == N.url) ? (N.url.match(/\?/) ? "&"
										: "?")
										+ "_=" + F : "")
					}
					if (N.data && H == "GET") {
						N.url += (N.url.match(/\?/) ? "&" : "?") + N.data;
						N.data = null
					}
					if (N.global && !p.active++) {
						p.event.trigger("ajaxStart")
					}
					var R = /^(\w+:)?\/\/([^\/?#]+)/.exec(N.url);
					if (N.dataType == "script"
							&& H == "GET"
							&& R
							&& (R[1] && R[1] != location.protocol || R[2] != location.host)) {
						var I = document.getElementsByTagName("head")[0];
						var U = document.createElement("script");
						U.src = N.url;
						if (N.scriptCharset) {
							U.charset = N.scriptCharset
						}
						if (!X) {
							var P = false;
							U.onload = U.onreadystatechange = function() {
								if (!P
										&& (!this.readyState
												|| this.readyState == "loaded" || this.readyState == "complete")) {
									P = true;
									J();
									M();
									U.onload = U.onreadystatechange = null;
									I.removeChild(U)
								}
							}
						}
						I.appendChild(U);
						return h
					}
					var L = false;
					var K = N.xhr();
					if (N.username) {
						K.open(H, N.url, N.async, N.username, N.password)
					} else {
						K.open(H, N.url, N.async)
					}
					try {
						if (N.data) {
							K.setRequestHeader("Content-Type", N.contentType)
						}
						if (N.ifModified) {
							K.setRequestHeader("If-Modified-Since",
									p.lastModified[N.url]
											|| "Thu, 01 Jan 1970 00:00:00 GMT")
						}
						K
								.setRequestHeader("X-Requested-With",
										"XMLHttpRequest");
						K
								.setRequestHeader(
										"Accept",
										N.dataType && N.accepts[N.dataType] ? N.accepts[N.dataType]
												+ ", */*"
												: N.accepts._default)
					} catch (T) {
					}
					if (N.beforeSend && N.beforeSend(K, N) === false) {
						if (N.global && !--p.active) {
							p.event.trigger("ajaxStop")
						}
						K.abort();
						return false
					}
					if (N.global) {
						p.event.trigger("ajaxSend", [ K, N ])
					}
					var O = function(Y) {
						if (K.readyState == 0) {
							if (Q) {
								clearInterval(Q);
								Q = null;
								if (N.global && !--p.active) {
									p.event.trigger("ajaxStop")
								}
							}
						} else {
							if (!L && K
									&& (K.readyState == 4 || Y == "timeout")) {
								L = true;
								if (Q) {
									clearInterval(Q);
									Q = null
								}
								S = Y == "timeout" ? "timeout"
										: !p.httpSuccess(K) ? "error"
												: N.ifModified
														&& p.httpNotModified(K,
																N.url) ? "notmodified"
														: "success";
								if (S == "success") {
									try {
										W = p.httpData(K, N.dataType, N)
									} catch (aa) {
										S = "parsererror"
									}
								}
								if (S == "success") {
									var Z;
									try {
										Z = K
												.getResponseHeader("Last-Modified")
									} catch (aa) {
									}
									if (N.ifModified && Z) {
										p.lastModified[N.url] = Z
									}
									if (!X) {
										J()
									}
								} else {
									p.handleError(N, K, S)
								}
								M();
								if (Y) {
									K.abort()
								}
								if (N.async) {
									K = null
								}
							}
						}
					};
					if (N.async) {
						var Q = setInterval(O, 13);
						if (N.timeout > 0) {
							setTimeout(function() {
								if (K && !L) {
									O("timeout")
								}
							}, N.timeout)
						}
					}
					try {
						K.send(N.data)
					} catch (T) {
						p.handleError(N, K, null, T)
					}
					if (!N.async) {
						O()
					}
					function J() {
						if (N.success) {
							N.success(W, S)
						}
						if (N.global) {
							p.event.trigger("ajaxSuccess", [ K, N ])
						}
					}
					function M() {
						if (N.complete) {
							N.complete(K, S)
						}
						if (N.global) {
							p.event.trigger("ajaxComplete", [ K, N ])
						}
						if (N.global && !--p.active) {
							p.event.trigger("ajaxStop")
						}
					}
					return K
				},
				handleError : function(G, I, F, H) {
					if (G.error) {
						G.error(I, F, H)
					}
					if (G.global) {
						p.event.trigger("ajaxError", [ I, G, H ])
					}
				},
				active : 0,
				httpSuccess : function(G) {
					try {
						return !G.status && location.protocol == "file:"
								|| (G.status >= 200 && G.status < 300)
								|| G.status == 304 || G.status == 1223
					} catch (F) {
					}
					return false
				},
				httpNotModified : function(H, F) {
					try {
						var I = H.getResponseHeader("Last-Modified");
						return H.status == 304 || I == p.lastModified[F]
					} catch (G) {
					}
					return false
				},
				httpData : function(K, I, H) {
					var G = K.getResponseHeader("content-type"), F = I == "xml"
							|| !I && G && G.indexOf("xml") >= 0, J = F ? K.responseXML
							: K.responseText;
					if (F && J.documentElement.tagName == "parsererror") {
						throw "parsererror"
					}
					if (H && H.dataFilter) {
						J = H.dataFilter(J, I)
					}
					if (typeof J === "string") {
						if (I == "script") {
							p.globalEval(J)
						}
						if (I == "json") {
							J = m["eval"]("(" + J + ")")
						}
					}
					return J
				},
				param : function(F) {
					var H = [];
					function I(J, K) {
						H[H.length] = encodeURIComponent(J) + "="
								+ encodeURIComponent(K)
					}
					if (p.isArray(F) || F.jquery) {
						p.each(F, function() {
							I(this.name, this.value)
						})
					} else {
						for ( var G in F) {
							if (p.isArray(F[G])) {
								p.each(F[G], function() {
									I(G, this)
								})
							} else {
								I(G, p.isFunction(F[G]) ? F[G]() : F[G])
							}
						}
					}
					return H.join("&").replace(/%20/g, "+")
				}
			});
	var n = {}, o, e = [
			[ "height", "marginTop", "marginBottom", "paddingTop",
					"paddingBottom" ],
			[ "width", "marginLeft", "marginRight", "paddingLeft",
					"paddingRight" ], [ "opacity" ] ];
	function u(G, F) {
		var H = {};
		p.each(e.concat.apply( [], e.slice(0, F)), function() {
			H[this] = G
		});
		return H
	}
	p.fn.extend( {
		show : function(K, M) {
			if (K) {
				return this.animate(u("show", 3), K, M)
			} else {
				for ( var I = 0, G = this.length; I < G; I++) {
					var F = p.data(this[I], "olddisplay");
					this[I].style.display = F || "";
					if (p.css(this[I], "display") === "none") {
						var H = this[I].tagName, L;
						if (n[H]) {
							L = n[H]
						} else {
							var J = p("<" + H + " />").appendTo("body");
							L = J.css("display");
							if (L === "none") {
								L = "block"
							}
							J.remove();
							n[H] = L
						}
						p.data(this[I], "olddisplay", L)
					}
				}
				for ( var I = 0, G = this.length; I < G; I++) {
					this[I].style.display = p.data(this[I], "olddisplay") || ""
				}
				return this
			}
		},
		hide : function(I, J) {
			if (I) {
				return this.animate(u("hide", 3), I, J)
			} else {
				for ( var H = 0, G = this.length; H < G; H++) {
					var F = p.data(this[H], "olddisplay");
					if (!F && F !== "none") {
						p
								.data(this[H], "olddisplay", p.css(this[H],
										"display"))
					}
				}
				for ( var H = 0, G = this.length; H < G; H++) {
					this[H].style.display = "none"
				}
				return this
			}
		},
		_toggle : p.fn.toggle,
		toggle : function(H, G) {
			var F = typeof H === "boolean";
			return p.isFunction(H) && p.isFunction(G) ? this._toggle.apply(
					this, arguments) : H == null || F ? this.each(function() {
				var I = F ? H : p(this).is(":hidden");
				p(this)[I ? "show" : "hide"]()
			}) : this.animate(u("toggle", 3), H, G)
		},
		fadeTo : function(F, H, G) {
			return this.animate( {
				opacity : H
			}, F, G)
		},
		animate : function(J, G, I, H) {
			var F = p.speed(G, I, H);
			return this[F.queue === false ? "each" : "queue"](function() {
				var L = p.extend( {}, F), N, M = this.nodeType == 1
						&& p(this).is(":hidden"), K = this;
				for (N in J) {
					if (J[N] == "hide" && M || J[N] == "show" && !M) {
						return L.complete.call(this)
					}
					if ((N == "height" || N == "width") && this.style) {
						L.display = p.css(this, "display");
						L.overflow = this.style.overflow
					}
				}
				if (L.overflow != null) {
					this.style.overflow = "hidden"
				}
				L.curAnim = p.extend( {}, J);
				p.each(J,
						function(P, T) {
							var S = new p.fx(K, L, P);
							if (/toggle|show|hide/.test(T)) {
								S[T == "toggle" ? M ? "show" : "hide" : T](J)
							} else {
								var R = T.toString().match(
										/^([+-]=)?([\d+-.]+)(.*)$/), U = S
										.cur(true) || 0;
								if (R) {
									var O = parseFloat(R[2]), Q = R[3] || "px";
									if (Q != "px") {
										K.style[P] = (O || 1) + Q;
										U = ((O || 1) / S.cur(true)) * U;
										K.style[P] = U + Q
									}
									if (R[1]) {
										O = ((R[1] == "-=" ? -1 : 1) * O) + U
									}
									S.custom(U, O, Q)
								} else {
									S.custom(U, T, "")
								}
							}
						});
				return true
			})
		},
		stop : function(G, F) {
			var H = p.timers;
			if (G) {
				this.queue( [])
			}
			this.each(function() {
				for ( var I = H.length - 1; I >= 0; I--) {
					if (H[I].elem == this) {
						if (F) {
							H[I](true)
						}
						H.splice(I, 1)
					}
				}
			});
			if (!F) {
				this.dequeue()
			}
			return this
		}
	});
	p.each( {
		slideDown : u("show", 1),
		slideUp : u("hide", 1),
		slideToggle : u("toggle", 1),
		fadeIn : {
			opacity : "show"
		},
		fadeOut : {
			opacity : "hide"
		}
	}, function(F, G) {
		p.fn[F] = function(H, I) {
			return this.animate(G, H, I)
		}
	});
	p.extend( {
		speed : function(H, I, G) {
			var F = typeof H === "object" ? H : {
				complete : G || !G && I || p.isFunction(H) && H,
				duration : H,
				easing : G && I || I && !p.isFunction(I) && I
			};
			F.duration = p.fx.off ? 0
					: typeof F.duration === "number" ? F.duration
							: p.fx.speeds[F.duration] || p.fx.speeds._default;
			F.old = F.complete;
			F.complete = function() {
				if (F.queue !== false) {
					p(this).dequeue()
				}
				if (p.isFunction(F.old)) {
					F.old.call(this)
				}
			};
			return F
		},
		easing : {
			linear : function(H, I, F, G) {
				return F + G * H
			},
			swing : function(H, I, F, G) {
				return ((-Math.cos(H * Math.PI) / 2) + 0.5) * G + F
			}
		},
		timers : [],
		fx : function(G, F, H) {
			this.options = F;
			this.elem = G;
			this.prop = H;
			if (!F.orig) {
				F.orig = {}
			}
		}
	});
	p.fx.prototype = {
		update : function() {
			if (this.options.step) {
				this.options.step.call(this.elem, this.now, this)
			}
			(p.fx.step[this.prop] || p.fx.step._default)(this);
			if ((this.prop == "height" || this.prop == "width")
					&& this.elem.style) {
				this.elem.style.display = "block"
			}
		},
		cur : function(G) {
			if (this.elem[this.prop] != null
					&& (!this.elem.style || this.elem.style[this.prop] == null)) {
				return this.elem[this.prop]
			}
			var F = parseFloat(p.css(this.elem, this.prop, G));
			return F && F > -10000 ? F : parseFloat(p.curCSS(this.elem,
					this.prop)) || 0
		},
		custom : function(J, I, H) {
			this.startTime = f();
			this.start = J;
			this.end = I;
			this.unit = H || this.unit || "px";
			this.now = this.start;
			this.pos = this.state = 0;
			var F = this;
			function G(K) {
				return F.step(K)
			}
			G.elem = this.elem;
			if (G() && p.timers.push(G) && !o) {
				o = setInterval(function() {
					var L = p.timers;
					for ( var K = 0; K < L.length; K++) {
						if (!L[K]()) {
							L.splice(K--, 1)
						}
					}
					if (!L.length) {
						clearInterval(o);
						o = h
					}
				}, 13)
			}
		},
		show : function() {
			this.options.orig[this.prop] = p.attr(this.elem.style, this.prop);
			this.options.show = true;
			this.custom(this.prop == "width" || this.prop == "height" ? 1 : 0,
					this.cur());
			p(this.elem).show()
		},
		hide : function() {
			this.options.orig[this.prop] = p.attr(this.elem.style, this.prop);
			this.options.hide = true;
			this.custom(this.cur(), 0)
		},
		step : function(I) {
			var H = f();
			if (I || H >= this.options.duration + this.startTime) {
				this.now = this.end;
				this.pos = this.state = 1;
				this.update();
				this.options.curAnim[this.prop] = true;
				var F = true;
				for ( var G in this.options.curAnim) {
					if (this.options.curAnim[G] !== true) {
						F = false
					}
				}
				if (F) {
					if (this.options.display != null) {
						this.elem.style.overflow = this.options.overflow;
						this.elem.style.display = this.options.display;
						if (p.css(this.elem, "display") == "none") {
							this.elem.style.display = "block"
						}
					}
					if (this.options.hide) {
						p(this.elem).hide()
					}
					if (this.options.hide || this.options.show) {
						for ( var J in this.options.curAnim) {
							p.attr(this.elem.style, J, this.options.orig[J])
						}
					}
					this.options.complete.call(this.elem)
				}
				return false
			} else {
				var K = H - this.startTime;
				this.state = K / this.options.duration;
				this.pos = p.easing[this.options.easing
						|| (p.easing.swing ? "swing" : "linear")](this.state,
						K, 0, 1, this.options.duration);
				this.now = this.start + ((this.end - this.start) * this.pos);
				this.update()
			}
			return true
		}
	};
	p.extend(p.fx, {
		speeds : {
			slow : 600,
			fast : 200,
			_default : 400
		},
		step : {
			opacity : function(F) {
				p.attr(F.elem.style, "opacity", F.now)
			},
			_default : function(F) {
				if (F.elem.style && F.elem.style[F.prop] != null) {
					F.elem.style[F.prop] = F.now + F.unit
				} else {
					F.elem[F.prop] = F.now
				}
			}
		}
	});
	if (document.documentElement.getBoundingClientRect) {
		p.fn.offset = function() {
			if (!this[0]) {
				return {
					top : 0,
					left : 0
				}
			}
			if (this[0] === this[0].ownerDocument.body) {
				return p.offset.bodyOffset(this[0])
			}
			var H = this[0].getBoundingClientRect(), K = this[0].ownerDocument, G = K.body, F = K.documentElement, M = F.clientTop
					|| G.clientTop || 0, L = F.clientLeft || G.clientLeft || 0, J = H.top
					+ (self.pageYOffset || p.boxModel && F.scrollTop || G.scrollTop)
					- M, I = H.left
					+ (self.pageXOffset || p.boxModel && F.scrollLeft || G.scrollLeft)
					- L;
			return {
				top : J,
				left : I
			}
		}
	} else {
		p.fn.offset = function() {
			if (!this[0]) {
				return {
					top : 0,
					left : 0
				}
			}
			if (this[0] === this[0].ownerDocument.body) {
				return p.offset.bodyOffset(this[0])
			}
			p.offset.initialized || p.offset.initialize();
			var K = this[0], H = K.offsetParent, G = K, P = K.ownerDocument, N, I = P.documentElement, L = P.body, M = P.defaultView, F = M
					.getComputedStyle(K, null), O = K.offsetTop, J = K.offsetLeft;
			while ((K = K.parentNode) && K !== L && K !== I) {
				N = M.getComputedStyle(K, null);
				O -= K.scrollTop, J -= K.scrollLeft;
				if (K === H) {
					O += K.offsetTop, J += K.offsetLeft;
					if (p.offset.doesNotAddBorder
							&& !(p.offset.doesAddBorderForTableAndCells && /^t(able|d|h)$/i
									.test(K.tagName))) {
						O += parseInt(N.borderTopWidth, 10) || 0,
								J += parseInt(N.borderLeftWidth, 10) || 0
					}
					G = H, H = K.offsetParent
				}
				if (p.offset.subtractsBorderForOverflowNotVisible
						&& N.overflow !== "visible") {
					O += parseInt(N.borderTopWidth, 10) || 0, J += parseInt(
							N.borderLeftWidth, 10) || 0
				}
				F = N
			}
			if (F.position === "relative" || F.position === "static") {
				O += L.offsetTop, J += L.offsetLeft
			}
			if (F.position === "fixed") {
				O += Math.max(I.scrollTop, L.scrollTop), J += Math.max(
						I.scrollLeft, L.scrollLeft)
			}
			return {
				top : O,
				left : J
			}
		}
	}
	p.offset = {
		initialize : function() {
			if (this.initialized) {
				return
			}
			var M = document.body, G = document.createElement("div"), I, H, O, J, N, F, K = M.style.marginTop, L = '<div style="position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;"><div></div></div><table style="position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;" cellpadding="0" cellspacing="0"><tr><td></td></tr></table>';
			N = {
				position : "absolute",
				top : 0,
				left : 0,
				margin : 0,
				border : 0,
				width : "1px",
				height : "1px",
				visibility : "hidden"
			};
			for (F in N) {
				G.style[F] = N[F]
			}
			G.innerHTML = L;
			M.insertBefore(G, M.firstChild);
			I = G.firstChild, H = I.firstChild,
					J = I.nextSibling.firstChild.firstChild;
			this.doesNotAddBorder = (H.offsetTop !== 5);
			this.doesAddBorderForTableAndCells = (J.offsetTop === 5);
			I.style.overflow = "hidden", I.style.position = "relative";
			this.subtractsBorderForOverflowNotVisible = (H.offsetTop === -5);
			M.style.marginTop = "1px";
			this.doesNotIncludeMarginInBodyOffset = (M.offsetTop === 0);
			M.style.marginTop = K;
			M.removeChild(G);
			this.initialized = true
		},
		bodyOffset : function(F) {
			p.offset.initialized || p.offset.initialize();
			var H = F.offsetTop, G = F.offsetLeft;
			if (p.offset.doesNotIncludeMarginInBodyOffset) {
				H += parseInt(p.curCSS(F, "marginTop", true), 10) || 0,
						G += parseInt(p.curCSS(F, "marginLeft", true), 10) || 0
			}
			return {
				top : H,
				left : G
			}
		}
	};
	p.fn
			.extend( {
				position : function() {
					var J = 0, I = 0, G;
					if (this[0]) {
						var H = this.offsetParent(), K = this.offset(), F = /^body|html$/i
								.test(H[0].tagName) ? {
							top : 0,
							left : 0
						} : H.offset();
						K.top -= k(this, "marginTop");
						K.left -= k(this, "marginLeft");
						F.top += k(H, "borderTopWidth");
						F.left += k(H, "borderLeftWidth");
						G = {
							top : K.top - F.top,
							left : K.left - F.left
						}
					}
					return G
				},
				offsetParent : function() {
					var F = this[0].offsetParent || document.body;
					while (F
							&& (!/^body|html$/i.test(F.tagName) && p.css(F,
									"position") == "static")) {
						F = F.offsetParent
					}
					return p(F)
				}
			});
	p.each( [ "Left", "Top" ], function(G, F) {
		var H = "scroll" + F;
		p.fn[H] = function(I) {
			if (!this[0]) {
				return null
			}
			return I !== h ? this.each(function() {
				this == m || this == document ? m.scrollTo(!G ? I : p(m)
						.scrollLeft(), G ? I : p(m).scrollTop()) : this[H] = I
			}) : this[0] == m || this[0] == document ? self[G ? "pageYOffset"
					: "pageXOffset"]
					|| p.boxModel
					&& document.documentElement[H]
					|| document.body[H] : this[0][H]
		}
	});
	p.each( [ "Height", "Width" ], function(J, H) {
		var F = J ? "Left" : "Top", I = J ? "Right" : "Bottom", G = H
				.toLowerCase();
		p.fn["inner" + H] = function() {
			return this[0] ? p.css(this[0], G, false, "padding") : null
		};
		p.fn["outer" + H] = function(L) {
			return this[0] ? p.css(this[0], G, false, L ? "margin" : "border")
					: null
		};
		var K = H.toLowerCase();
		p.fn[K] = function(L) {
			return this[0] == m ? document.compatMode == "CSS1Compat"
					&& document.documentElement["client" + H]
					|| document.body["client" + H] : this[0] == document ? Math
					.max(document.documentElement["client" + H],
							document.body["scroll" + H],
							document.documentElement["scroll" + H],
							document.body["offset" + H],
							document.documentElement["offset" + H])
					: L === h ? (this.length ? p.css(this[0], K) : null) : this
							.css(K, typeof L === "string" ? L : L + "px")
		}
	})
})();
function css_browser_selector(e) {
	var f = e.toLowerCase(), l = function(b) {
		return f.indexOf(b) > -1
	}, k = "gecko", d = "webkit", j = "safari", i = document
			.getElementsByTagName("html")[0], a = [
			(!(/opera|webtv/i.test(f)) && /msie\s(\d)/.test(f)) ? ("ie ie" + RegExp.$1)
					: l("firefox/2") ? k + " ff2"
							: l("firefox/3") ? k + " ff3"
									: l("gecko/") ? k
											: /opera(\s|\/)(\d+)/.test(f) ? "opera opera"
													+ RegExp.$2
													: l("konqueror") ? "konqueror"
															: l("chrome") ? d
																	+ " " + j
																	+ " chrome"
																	: l("applewebkit/") ? d
																			+ " "
																			+ j
																			+ (/version\/(\d+)/
																					.test(f) ? " "
																					+ j
																					+ RegExp.$1
																					: "")
																			: l("mozilla/") ? k
																					: "",
			l("j2me") ? "mobile"
					: l("iphone") ? "iphone"
							: l("ipod") ? "ipod"
									: l("mac") ? "mac"
											: l("darwin") ? "mac"
													: l("webtv") ? "webtv"
															: l("win") ? "win"
																	: l("freebsd") ? "freebsd"
																			: (l("x11") || l("linux")) ? "linux"
																					: "",
			"js" ];
	c = a.join(" ");
	i.className += " " + c;
	return c
}
css_browser_selector(navigator.userAgent);
var Cufon = (function() {
	var o = function() {
		return o.replace.apply(null, arguments)
	};
	var e = o.DOM = {
		ready : (function() {
			var B = false, z = {
				loaded : 1,
				complete : 1
			};
			var C = [], A = function() {
				if (B) {
					return
				}
				B = true;
				for ( var D; D = C.shift(); D()) {
				}
			};
			if (document.addEventListener) {
				document.addEventListener("DOMContentLoaded", A, false);
				window.addEventListener("pageshow", A, false)
			}
			if (!window.opera && document.readyState) {
				(function() {
					z[document.readyState] ? A() : setTimeout(arguments.callee,
							10)
				})()
			}
			if (document.readyState && document.createStyleSheet) {
				(function() {
					try {
						document.body.doScroll("left");
						A()
					} catch (D) {
						setTimeout(arguments.callee, 1)
					}
				})()
			}
			k(window, "load", A);
			return function(D) {
				if (!arguments.length) {
					A()
				} else {
					B ? D() : C.push(D)
				}
			}
		})()
	};
	var n = o.CSS = {
		Size : function(z, A) {
			this.value = parseFloat(z);
			this.unit = String(z).match(/[a-z%]*$/)[0] || "px";
			this.convert = function(B) {
				return B / A * this.value
			};
			this.convertFrom = function(B) {
				return B / this.value * A
			};
			this.toString = function() {
				return this.value + this.unit
			}
		},
		getStyle : function(z) {
			var A = document.defaultView;
			if (A && A.getComputedStyle) {
				return new y(A.getComputedStyle(z, null))
			}
			if (z.currentStyle) {
				return new y(z.currentStyle)
			}
			return new y(z.style)
		},
		ready : (function() {
			var A = false;
			var B = [], z = function() {
				A = true;
				for ( var E; E = B.shift(); E()) {
				}
			};
			var C = Object.prototype.propertyIsEnumerable ? t("style") : {
				length : 0
			};
			var D = t("link");
			e.ready(function() {
				var E = 0, F;
				for ( var G = 0, H = D.length; F = D[G], G < H; ++G) {
					if (!F.disabled && F.rel.toLowerCase() == "stylesheet") {
						++E
					}
				}
				if (document.styleSheets.length >= C.length + E) {
					z()
				} else {
					setTimeout(arguments.callee, 10)
				}
			});
			return function(E) {
				if (A) {
					E()
				} else {
					B.push(E)
				}
			}
		})(),
		supports : function(z, A) {
			var B = document.createElement("span").style;
			if (B[z] === undefined) {
				return false
			}
			B[z] = A;
			return B[z] === A
		},
		textAlign : function(z, A, C, B) {
			if (A.get("textAlign") == "right") {
				if (C > 0) {
					z = " " + z
				}
			} else {
				if (C < B - 1) {
					z += " "
				}
			}
			return z
		},
		textDecoration : function(D, E) {
			if (!E) {
				E = this.getStyle(D)
			}
			var B = {
				underline : null,
				overline : null,
				"line-through" : null
			};
			for ( var C = D; C.parentNode && C.parentNode.nodeType == 1;) {
				var z = true;
				for ( var A in B) {
					if (B[A]) {
						continue
					}
					if (E.get("textDecoration").indexOf(A) != -1) {
						B[A] = E.get("color")
					}
					z = false
				}
				if (z) {
					break
				}
				E = this.getStyle(C = C.parentNode)
			}
			return B
		},
		textShadow : q(function(E) {
			if (E == "none") {
				return null
			}
			var z = [], D = {}, C, B = 0;
			var A = /(#[a-f0-9]+|[a-z]+\(.*?\)|[a-z]+)|(-?[\d.]+[a-z%]*)|,/ig;
			while (C = A.exec(E)) {
				if (C[0] == ",") {
					z.push(D);
					D = {}, B = 0
				} else {
					if (C[1]) {
						D.color = C[1]
					} else {
						D[ [ "offX", "offY", "blur" ][B++]] = C[2]
					}
				}
			}
			z.push(D);
			return z
		}),
		color : q(function(z) {
			var A = {};
			A.color = z.replace(/^rgba\((.*?),\s*([\d.]+)\)/,
					function(B, C, D) {
						A.opacity = parseFloat(D);
						return "rgb(" + C + ")"
					});
			return A
		}),
		textTransform : function(z, A) {
			return z[ {
				uppercase : "toUpperCase",
				lowercase : "toLowerCase"
			}[A.get("textTransform")] || "toString"]()
		}
	};
	function i(z) {
		var A = this.face = z.face;
		this.glyphs = z.glyphs;
		this.w = z.w;
		this.baseSize = parseInt(A["units-per-em"], 10);
		this.family = A["font-family"].toLowerCase();
		this.weight = A["font-weight"];
		this.style = A["font-style"] || "normal";
		this.viewBox = (function() {
			var B = A.bbox.split(/\s+/);
			return {
				minX : parseInt(B[0], 10),
				minY : parseInt(B[1], 10),
				width : parseInt(B[2], 10) - parseInt(B[0], 10),
				height : parseInt(B[3], 10) - parseInt(B[1], 10),
				toString : function() {
					return [ this.minX, this.minY, this.width, this.height ]
							.join(" ")
				}
			}
		})();
		this.ascent = -parseInt(A.ascent, 10);
		this.descent = -parseInt(A.descent, 10);
		this.height = -this.ascent + this.descent
	}
	function u() {
		var z = {}, A = {
			oblique : "italic",
			italic : "oblique"
		};
		this.add = function(B) {
			(z[B.style] || (z[B.style] = {}))[B.weight] = B
		};
		this.get = function(G, F) {
			var H = z[G] || z[A[G]] || z.normal || z.italic || z.oblique;
			if (!H) {
				return null
			}
			F = {
				normal : 400,
				bold : 700
			}[F] || parseInt(F, 10);
			if (H[F]) {
				return H[F]
			}
			var B = {
				1 : 1,
				99 : 0
			}[F % 100], D = [], I, C;
			if (B === undefined) {
				B = F > 400
			}
			if (F == 500) {
				F = 400
			}
			for ( var E in H) {
				E = parseInt(E, 10);
				if (!I || E < I) {
					I = E
				}
				if (!C || E > C) {
					C = E
				}
				D.push(E)
			}
			if (F < I) {
				F = I
			}
			if (F > C) {
				F = C
			}
			D.sort(function(J, K) {
				return (B ? (J > F && K > F) ? J < K : J > K
						: (J < F && K < F) ? J > K : J < K) ? -1 : 1
			});
			return H[D[0]]
		}
	}
	function j() {
		function A(E, D) {
			if (E.contains) {
				return E.contains(D)
			}
			return E.compareDocumentPosition(D) & 16
		}
		function C(D) {
			var E = D.relatedTarget;
			if (!E || A(this, E)) {
				return
			}
			B(this)
		}
		function z(D) {
			B(this)
		}
		function B(D) {
			setTimeout(function() {
				o.replace(D, v.get(D).options, true)
			}, 10)
		}
		this.attach = function(D) {
			if (D.onmouseenter === undefined) {
				k(D, "mouseover", C);
				k(D, "mouseout", C)
			} else {
				k(D, "mouseenter", z);
				k(D, "mouseleave", z)
			}
		}
	}
	function a() {
		var z = {}, B = 0;
		function A(C) {
			return C.cufid || (C.cufid = ++B)
		}
		this.get = function(C) {
			var D = A(C);
			return z[D] || (z[D] = {})
		}
	}
	function y(B) {
		var z = {}, A = {};
		this.get = function(C) {
			return z[C] != undefined ? z[C] : B[C]
		};
		this.getSize = function(D, C) {
			return A[D] || (A[D] = new n.Size(this.get(D), C))
		};
		this.extend = function(C) {
			for ( var D in C) {
				z[D] = C[D]
			}
			return this
		}
	}
	function k(A, B, z) {
		if (A.addEventListener) {
			A.addEventListener(B, z, false)
		} else {
			if (A.attachEvent) {
				A.attachEvent("on" + B, function() {
					return z.call(A, window.event)
				})
			}
		}
	}
	function h(A, B) {
		var z = v.get(A);
		if (z.options) {
			return A
		}
		if (B.hover && B.hoverables[A.nodeName.toLowerCase()]) {
			x.attach(A)
		}
		z.options = B;
		return A
	}
	function q(A) {
		var z = {};
		return function(B) {
			if (!z.hasOwnProperty(B)) {
				z[B] = A.apply(null, arguments)
			}
			return z[B]
		}
	}
	function w(D, E) {
		if (!E) {
			E = n.getStyle(D)
		}
		var B = E.get("fontFamily").split(/\s*,\s*/), z;
		for ( var A = 0, C = B.length; A < C; ++A) {
			z = B[A].replace(/^(["'])(.*?)\1$/, "$2").toLowerCase();
			if (r[z]) {
				return r[z].get(E.get("fontStyle"), E.get("fontWeight"))
			}
		}
		return null
	}
	function t(z) {
		return document.getElementsByTagName(z)
	}
	function s() {
		var C = {}, z;
		for ( var A = 0, B = arguments.length; A < B; ++A) {
			for (z in arguments[A]) {
				C[z] = arguments[A][z]
			}
		}
		return C
	}
	function m(K, C, z, B, J, L) {
		var D = B.separate;
		if (D == "none") {
			return b[B.engine].apply(null, arguments)
		}
		var E = document.createDocumentFragment(), H;
		var G = C.split(l[D]), A = (D == "words");
		if (A && g) {
			if (/^\s/.test(C)) {
				G.unshift("")
			}
			if (/\s$/.test(C)) {
				G.push("")
			}
		}
		for ( var F = 0, I = G.length; F < I; ++F) {
			H = b[B.engine](K, A ? n.textAlign(G[F], z, F, I) : G[F], z, B, J,
					L, F < I - 1);
			if (H) {
				E.appendChild(H)
			}
		}
		return E
	}
	function p(z, B) {
		var H, A, E, C;
		for ( var G = h(z, B).firstChild; G; G = E) {
			E = G.nextSibling;
			C = false;
			if (G.nodeType == 1) {
				if (!G.firstChild) {
					continue
				}
				if (!/cufon/.test(G.className)) {
					arguments.callee(G, B);
					continue
				} else {
					C = true
				}
			}
			if (!A) {
				A = n.getStyle(z).extend(B)
			}
			if (!H) {
				H = w(z, A)
			}
			if (!H) {
				continue
			}
			if (C) {
				b[B.engine](H, null, A, B, G, z);
				continue
			}
			var D = G.data;
			if (D === "") {
				continue
			}
			var F = m(H, D, A, B, G, z);
			if (F) {
				G.parentNode.replaceChild(F, G)
			} else {
				G.parentNode.removeChild(G)
			}
		}
	}
	var g = " ".split(/\s+/).length == 0;
	var v = new a();
	var x = new j();
	var d = [];
	var b = {}, r = {}, f = {
		enableTextDecoration : false,
		engine : null,
		hover : false,
		hoverables : {
			a : true
		},
		printable : true,
		selector : (window.Sizzle || window.jQuery
				|| (window.dojo && dojo.query) || (window.$$ && function(z) {
					return $$(z)
				}) || (window.$ && function(z) {
					return $(z)
				}) || (document.querySelectorAll && function(z) {
					return document.querySelectorAll(z)
				}) || t),
		separate : "words",
		textShadow : "none"
	};
	var l = {
		words : /\s+/,
		characters : ""
	};
	o.now = function() {
		e.ready();
		return o
	};
	o.refresh = function() {
		var z = d.splice(0, d.length);
		for ( var A = 0, B = z.length; A < B; ++A) {
			o.replace.apply(null, z[A])
		}
		return o
	};
	o.registerEngine = function(z, A) {
		if (!A) {
			return o
		}
		b[z] = A;
		return o.set("engine", z)
	};
	o.registerFont = function(z) {
		var B = new i(z), A = B.family;
		if (!r[A]) {
			r[A] = new u()
		}
		r[A].add(B);
		return o.set("fontFamily", A)
	};
	o.replace = function(z, A, B) {
		A = s(f, A);
		if (!A.engine) {
			return o
		}
		if (typeof A.textShadow == "string") {
			A.textShadow = n.textShadow(A.textShadow)
		}
		if (!B) {
			d.push(arguments)
		}
		if (z.nodeType || typeof z == "string") {
			z = [ z ]
		}
		n.ready(function() {
			for ( var E = 0, C = z.length; E < C; ++E) {
				var D = z[E];
				if (typeof D == "string") {
					o.replace(A.selector(D), A, true)
				} else {
					p(D, A)
				}
			}
		});
		return o
	};
	o.set = function(A, z) {
		f[A] = z;
		return o
	};
	return o
})();
Cufon
		.registerEngine(
				"canvas",
				(function() {
					var g = document.createElement("canvas");
					if (!g || !g.getContext || !g.getContext.apply) {
						return null
					}
					g = null;
					var a = Cufon.CSS.supports("display", "inline-block");
					var d = !a
							&& (document.compatMode == "BackCompat" || /frameset|transitional/i
									.test(document.doctype.publicId));
					var b = document.createElement("style");
					b.type = "text/css";
					b
							.appendChild(document
									.createTextNode("@media screen,projection{.cufon-canvas{display:inline;display:inline-block;position:relative;vertical-align:middle"
											+ (d ? ""
													: ";font-size:1px;line-height:1px")
											+ "}.cufon-canvas .cufon-alt{display:none}"
											+ (a ? ".cufon-canvas canvas{position:relative}"
													: ".cufon-canvas canvas{position:absolute}")
											+ "}@media print{.cufon-canvas{padding:0 !important}.cufon-canvas canvas{display:none}.cufon-canvas .cufon-alt{display:inline}}"));
					document.getElementsByTagName("head")[0].appendChild(b);
					function e(h, o) {
						var j = 0, k = 0;
						var p = [], i = /([mrvxe])([^a-z]*)/g, m;
						generate: for ( var n = 0; m = i.exec(h); ++n) {
							var l = m[2].split(",");
							switch (m[1]) {
							case "v":
								p[n] = {
									m : "bezierCurveTo",
									a : [ j + ~~l[0], k + ~~l[1], j + ~~l[2],
											k + ~~l[3], j += ~~l[4],
											k += ~~l[5] ]
								};
								break;
							case "r":
								p[n] = {
									m : "lineTo",
									a : [ j += ~~l[0], k += ~~l[1] ]
								};
								break;
							case "m":
								p[n] = {
									m : "moveTo",
									a : [ j = ~~l[0], k = ~~l[1] ]
								};
								break;
							case "x":
								p[n] = {
									m : "closePath"
								};
								break;
							case "e":
								break generate
							}
							o[p[n].m].apply(o, p[n].a)
						}
						return p
					}
					function f(h, i) {
						for ( var j = 0, k = h.length; j < k; ++j) {
							var l = h[j];
							i[l.m].apply(i, l.a)
						}
					}
					return function(an, A, at, E, w, am) {
						var af = (A === null);
						var y = an.viewBox;
						var ae = at.getSize("fontSize", an.baseSize);
						var av = at.get("letterSpacing");
						av = (av == "normal") ? 0 : ae.convertFrom(parseInt(av,
								10));
						var x = 0, au = 0, aw = 0, C = 0;
						var z = E.textShadow, ay = [];
						if (z) {
							for ( var ao = 0, ar = z.length; ao < ar; ++ao) {
								var i = z[ao];
								var az = ae.convertFrom(parseFloat(i.offX));
								var aA = ae.convertFrom(parseFloat(i.offY));
								ay[ao] = [ az, aA ];
								if (aA < x) {
									x = aA
								}
								if (az > au) {
									au = az
								}
								if (aA > aw) {
									aw = aA
								}
								if (az < C) {
									C = az
								}
							}
						}
						var aj = Cufon.CSS.textTransform(af ? w.alt : A, at)
								.split("");
						var ah = 0, B = null;
						for ( var ao = 0, ar = aj.length; ao < ar; ++ao) {
							var D = an.glyphs[aj[ao]] || an.missingGlyph;
							if (!D) {
								continue
							}
							ah += B = Number(D.w || an.w) + av
						}
						if (B === null) {
							return null
						}
						au += (y.width - B);
						C += y.minX;
						var F, ad;
						if (af) {
							F = w;
							ad = w.firstChild
						} else {
							F = document.createElement("span");
							F.className = "cufon cufon-canvas";
							F.alt = A;
							ad = document.createElement("canvas");
							F.appendChild(ad);
							if (E.printable) {
								var aq = document.createElement("span");
								aq.className = "cufon-alt";
								aq.appendChild(document.createTextNode(A));
								F.appendChild(aq)
							}
						}
						var ai = F.style;
						var aB = ad.style;
						var ag = ae.convert(y.height - x + aw);
						var ak = Math.ceil(ag);
						var ax = ak / ag;
						ad.width = Math.ceil(ae.convert(ah + au - C) * ax);
						ad.height = ak;
						x += y.minY;
						aB.top = Math.round(ae.convert(x - an.ascent)) + "px";
						aB.left = Math.round(ae.convert(C)) + "px";
						var aa = Math.ceil(ae.convert(ah * ax)) + "px";
						if (a) {
							ai.width = aa;
							ai.height = ae.convert(an.height) + "px"
						} else {
							ai.paddingLeft = aa;
							ai.paddingBottom = (ae.convert(an.height) - 1)
									+ "px"
						}
						var al = ad.getContext("2d"), l = ak / y.height;
						al.scale(l, l);
						al.translate(-C, -x);
						al.lineWidth = an.face["underline-thickness"];
						al.save();
						function ac(h, j) {
							al.strokeStyle = j;
							al.beginPath();
							al.moveTo(0, h);
							al.lineTo(ah, h);
							al.stroke()
						}
						var ab = E.enableTextDecoration ? Cufon.CSS
								.textDecoration(am, at) : {};
						if (ab.underline) {
							ac(-an.face["underline-position"], ab.underline)
						}
						if (ab.overline) {
							ac(an.ascent, ab.overline)
						}
						al.fillStyle = at.get("color");
						function ap() {
							for ( var j = 0, k = aj.length; j < k; ++j) {
								var h = an.glyphs[aj[j]] || an.missingGlyph;
								if (!h) {
									continue
								}
								al.beginPath();
								if (h.d) {
									if (h.code) {
										f(h.code, al)
									} else {
										h.code = e("m" + h.d, al)
									}
								}
								al.fill();
								al.translate(Number(h.w || an.w) + av, 0)
							}
						}
						if (z) {
							for ( var ao = 0, ar = z.length; ao < ar; ++ao) {
								var i = z[ao];
								al.save();
								al.fillStyle = i.color;
								al.translate.apply(al, ay[ao]);
								ap();
								al.restore()
							}
						}
						ap();
						al.restore();
						if (ab["line-through"]) {
							ac(-an.descent, ab["line-through"])
						}
						return F
					}
				})());
Cufon
		.registerEngine(
				"vml",
				(function() {
					if (!document.namespaces) {
						return
					}
					document
							.write('<!--[if vml]><script type="text/javascript">Cufon.vmlEnabled=true;<\/script><![endif]-->');
					if (!Cufon.vmlEnabled) {
						return
					}
					if (document.namespaces.cvml == null) {
						document.namespaces.add("cvml",
								"urn:schemas-microsoft-com:vml");
						document
								.write('<style type="text/css">@media screen{cvml\\:shape,cvml\\:group,cvml\\:shapetype,cvml\\:fill{behavior:url(#default#VML);display:inline-block;antialias:true;position:absolute}.cufon-vml{display:inline-block;position:relative;vertical-align:middle}.cufon-vml .cufon-alt{display:none}a .cufon-vml{cursor:pointer}}@media print{.cufon-vml *{display:none}.cufon-vml .cufon-alt{display:inline}}</style>')
					}
					var d = 0;
					function e(g, f) {
						return a(g, /(?:em|ex|%)$/i.test(f) ? "1em" : f)
					}
					function a(g, f) {
						if (/px$/i.test(f)) {
							return parseFloat(f)
						}
						var h = g.style.left, i = g.runtimeStyle.left;
						g.runtimeStyle.left = g.currentStyle.left;
						g.style.left = f;
						var j = g.style.pixelLeft;
						g.style.left = h;
						g.runtimeStyle.left = i;
						return j
					}
					function b(h, f) {
						var i = document.createElement("cvml:shapetype");
						i.id = "cufon-glyph-" + d++;
						h.typeRef = "#" + i.id;
						i.stroked = "f";
						i.coordsize = f.width + "," + f.height;
						i.coordorigin = f.minX + "," + f.minY;
						var g = "m" + f.minX + "," + f.minY + " r" + f.width
								+ "," + f.height;
						i.path = (h.d ? "m" + h.d + "x" : "") + g;
						document.body.insertBefore(i, document.body.firstChild)
					}
					return function(ap, x, av, B, p, ao, ax) {
						var ag = (x === null);
						if (ag) {
							x = p.alt
						}
						var v = ap.viewBox;
						var af = av.computedFontSize
								|| (av.computedFontSize = new Cufon.CSS.Size(e(
										ao, av.get("fontSize"))
										+ "px", ap.baseSize));
						var ay = av.computedLSpacing;
						if (ay == undefined) {
							ay = av.get("letterSpacing");
							av.computedLSpacing = ay = (ay == "normal") ? 0
									: af.convertFrom(a(ao, ay))
						}
						var C, ae;
						if (ag) {
							C = p;
							ae = p.firstChild
						} else {
							C = document.createElement("span");
							C.className = "cufon cufon-vml";
							C.alt = x;
							ae = document.createElement("cvml:group");
							C.appendChild(ae);
							if (B.printable) {
								var ar = document.createElement("span");
								ar.className = "cufon-alt";
								ar.innerText = x;
								C.appendChild(ar)
							}
							if (!ax) {
								C.appendChild(document
										.createElement("cvml:group"))
							}
						}
						var aj = C.style;
						var k = ae.style;
						var ah = af.convert(v.height);
						k.height = Math.ceil(ah);
						k.top = Math.round(af.convert(v.minY - ap.ascent));
						k.left = Math.round(af.convert(v.minX));
						var az = parseInt(k.height, 10) / ah;
						aj.height = af.convert(-ap.ascent + ap.descent) + "px";
						var ac = B.enableTextDecoration ? Cufon.CSS
								.textDecoration(ao, av) : {};
						var y = av.get("color");
						var al = Cufon.CSS.textTransform(x, av).split("");
						var ai = 0, aA = 0, ab = null;
						var w = B.textShadow;
						for ( var aq = 0, at = -1, au = al.length; aq < au; ++aq) {
							var A = ap.glyphs[al[aq]] || ap.missingGlyph, aa;
							if (!A) {
								continue
							}
							if (!A.typeRef) {
								b(A, v)
							}
							if (ag) {
								aa = ae.childNodes[++at]
							} else {
								aa = document.createElement("cvml:shape");
								ae.appendChild(aa)
							}
							aa.type = A.typeRef;
							var an = aa.style;
							an.width = v.width;
							an.height = v.height;
							an.top = 0;
							an.left = aA;
							an.zIndex = 1;
							aa.fillcolor = y;
							if (w) {
								for ( var i = 0, aw = w.length; i < aw; ++i) {
									var l = w[i];
									var ak = Cufon.CSS.color(l.color);
									var ad = aa.cloneNode(false), z = ad.runtimeStyle;
									z.top = af.convertFrom(parseFloat(l.offY));
									z.left = aA
											+ af
													.convertFrom(parseFloat(l.offX));
									z.zIndex = 0;
									ad.fillcolor = ak.color;
									if (ak.opacity) {
										var am = document
												.createElement("cvml:fill");
										am.opacity = ak.opacity;
										ad.appendChild(am)
									}
									ae.appendChild(ad)
								}
								++at
							}
							ab = Number(A.w || ap.w) + ay;
							ai += ab;
							aA += ab
						}
						if (ab === null) {
							return null
						}
						var D = -v.minX + ai + (v.width - ab);
						ae.coordsize = D + "," + v.height;
						k.width = af.convert(D * az);
						aj.width = Math.max(Math.ceil(af.convert(ai * az)), 0);
						return C
					}
				})());
var studio = {
	in_progress : false,
	show_image : function(d) {
		if (studio.in_progress) {
			return false
		} else {
			studio.in_progress = true
		}
		var g = $("#image-" + d);
		$("#loading").fadeIn();
		$("#thumbs-view").hide();
		$("#image-view").show();
		var f = g.prev(".image");
		var h = g.next(".image");
		if (f.length > 0) {
			$(".prev-link").attr("id", f.attr("id").replace("image", "link"));
			$(".prev-link a").removeClass("disabled")
		} else {
			$(".prev-link a").addClass("disabled")
		}
		if (h.length > 0) {
			$(".next-link").attr("id", h.attr("id").replace("image", "link"));
			$(".next-link a").removeClass("disabled")
		} else {
			$(".next-link a").addClass("disabled")
		}
		$(".image-counter span").html(g.find(".count").text());
		var a = g.siblings();
		var j = g.siblings(".current");
		if (j.length === 0) {
			j = false
		}
		var k = 0;
		var b = 0;
		if (g.find(".holder img").length > 0) {
			if (!g.find(".holder img").hasClass("loaded")) {
				g.find(".holder img").attr("src", g.find(".href").text())
			}
			g.css("opacity", 0).addClass("ontop");
			g.show();
			var e = window.setInterval(function() {
				if (g.find(".holder img").hasClass("loaded") === true) {
					window.clearInterval(e);
					$("#large-image-caption").html(g.find(".caption").html());
					if (!j) {
						k = g.find(".holder img").height();
						$("#images").css("height", k);
						g.find(".background").css("height", k)
					} else {
						if (g.find(".holder img").height() > j.find(
								".holder img").height()) {
							$("#images").css("height",
									g.find(".holder img").height());
							g.find(".background").css("height",
									(g.find(".holder img").height()))
						} else {
							k = j.find(".holder img").height();
							$("#images").css("height", k);
							g.find(".background").css("height", k)
						}
					}
					g.hide(1, function() {
						g.css("opacity", 1);
						g.fadeIn("normal", function() {
							if (j.length > 0) {
								if (g.find(".holder img").height() < j.find(
										".holder img").height()) {
									$("#images").css("height",
											g.find(".holder img").height())
								}
								j.hide().removeClass("current").hide()
							}
							g.find(".background").css("height",
									(g.find(".holder img").height()));
							g.addClass("current").removeClass("ontop");
							$("#loading").fadeOut();
							studio.in_progress = false
						})
					})
				}
			}, 100)
		} else {
			if (j) {
				var i = j.find("embed");
				if (i.length > 0) {
					b = i.attr("height")
				} else {
					b = j.find(".holder").height()
				}
			}
			k = g.find("embed").attr("height");
			if (!j) {
				$("#images").css("height", k + "px");
				g.find(".background").css("height", k + "px")
			} else {
				if (k > b) {
					$("#images").css("height", k + "px");
					g.find(".background").css("height", k + "px")
				} else {
					$("#images").css("height", b + "px");
					g.find(".background").css("height", b + "px")
				}
			}
			g.hide(1, function() {
				g.css("opacity", 1);
				g.fadeIn("normal", function() {
					if (j.length > 0) {
						if (k < b) {
							g.find(".background").css("height", k + "px")
						}
						j.hide().removeClass("current").hide()
					}
					g.find(".background").css("height", k + "px");
					g.addClass("current").removeClass("ontop");
					$("#loading").fadeOut();
					studio.in_progress = false
				})
			});
			$("#large-image-caption").html(g.find(".caption").html())
		}
		if (h.find(".holder img") > 0) {
			h.find(".holder img").attr("src", h.find(".href").text())
		}
	},
	initialize : function() {
		$(".image").hide();
		$(".image .holder img").load(function() {
			$(this).addClass("loaded")
		});
		$(".thumblist a, .prev-link a, .next-link a").click(function() {
			if (!($(this).hasClass("disabled"))) {
				var a = $(this).parent().attr("id").split("-")[1];
				$(".thumbs-view").hide();
				studio.show_image(a)
			}
			return false
		});
		$(".holder a").click(
				function() {
					var a = $(this).parents(".image").next(".image");
					if (a.length > 0) {
						studio.show_image(a.attr("id").split("-")[1])
					} else {
						$(this).parents(".image").fadeOut(
								"normal",
								function() {
									var b = $("#portfolio-nav li.selected")
											.nextAll("li:first");
									if (b.length > 0) {
										window.location = b.find("a").attr(
												"href")
												+ "?open=1"
									} else {
										window.location = $(
												"#portfolio-nav li:first a")
												.attr("href")
												+ "?open=1"
									}
								})
					}
					return false
				});
		$(".image-counter a").click(function() {
			$(".image").hide();
			$("#image-view").hide();
			$("#thumbs-view").show();
			return false
		});
		$("#status .close-button").click(function() {
			$("#status").slideUp();
			return false
		});
		$("#loading").fadeOut()
	}
};