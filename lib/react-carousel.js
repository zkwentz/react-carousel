!(function (t, e) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = e(require("react"), require("react-dom")))
    : "function" == typeof define && define.amd
    ? define("react-carousel", ["react", "react-dom"], e)
    : "object" == typeof exports
    ? (exports["react-carousel"] = e(require("react"), require("react-dom")))
    : (t["react-carousel"] = e(t.React, t.ReactDOM));
})(this, function (t, e) {
  return (
    (o = {}),
    (n.m = r = [
      function (e, n) {
        e.exports = t;
      },
      function (t, e, n) {
        var r = n(18);
        t.exports = n(31)(r.isElement, !0);
      },
      function (t, e, n) {
        var r;
        /*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/ !(function () {
          "use strict";
          var n = {}.hasOwnProperty;
          function o() {
            for (var t = [], e = 0; e < arguments.length; e++) {
              var r = arguments[e];
              if (r) {
                var i = typeof r;
                if ("string" == i || "number" == i) t.push(r);
                else if (Array.isArray(r) && r.length) {
                  var a = o.apply(null, r);
                  a && t.push(a);
                } else if ("object" == i)
                  for (var u in r) n.call(r, u) && r[u] && t.push(u);
              }
            }
            return t.join(" ");
          }
          t.exports
            ? ((o.default = o), (t.exports = o))
            : void 0 ===
                (r = function () {
                  return o;
                }.apply(e, [])) || (t.exports = r);
        })();
      },
      function (t, e) {
        t.exports = function (t) {
          return null == t;
        };
      },
      function (t, e) {
        var n = Array.isArray;
        t.exports = n;
      },
      function (t, e) {
        t.exports = function (t) {
          var e = typeof t;
          return null != t && ("object" == e || "function" == e);
        };
      },
      function (t, e, n) {
        var r = n(37),
          o = "object" == typeof self && self && self.Object === Object && self,
          i = r || o || Function("return this")();
        t.exports = i;
      },
      function (t, e, n) {
        var r = n(14),
          o = n(15);
        t.exports = function (t) {
          return "symbol" == typeof t || (o(t) && "[object Symbol]" == r(t));
        };
      },
      function (t, e, n) {
        var r = n(6).Symbol;
        t.exports = r;
      },
      function (t, e, n) {
        var r = n(20)(Object, "create");
        t.exports = r;
      },
      function (t, e, n) {
        var r = n(64);
        t.exports = function (t, e) {
          for (var n = t.length; n--; ) if (r(t[n][0], e)) return n;
          return -1;
        };
      },
      function (t, e, n) {
        var r = n(70);
        t.exports = function (t, e) {
          var n = t.__data__;
          return r(e) ? n["string" == typeof e ? "string" : "hash"] : n.map;
        };
      },
      function (t, e, n) {
        "use strict";
        t.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
      },
      function (t, e) {
        var n = (function () {
          return this;
        })();
        try {
          n = n || new Function("return this")();
        } catch (t) {
          "object" == typeof window && (n = window);
        }
        t.exports = n;
      },
      function (t, e, n) {
        var r = n(8),
          o = n(38),
          i = n(39),
          a = r ? r.toStringTag : void 0;
        t.exports = function (t) {
          return null == t
            ? void 0 === t
              ? "[object Undefined]"
              : "[object Null]"
            : (a && a in Object(t) ? o : i)(t);
        };
      },
      function (t, e) {
        t.exports = function (t) {
          return null != t && "object" == typeof t;
        };
      },
      function (t, e, n) {
        var r = n(22),
          o = n(81),
          i = n(83),
          a = n(4);
        t.exports = function () {
          var t = arguments.length;
          if (!t) return [];
          for (var e = Array(t - 1), n = arguments[0], u = t; u--; )
            e[u - 1] = arguments[u];
          return r(a(n) ? i(n) : [n], o(e, 1));
        };
      },
      function (t, e, n) {
        var r = n(84),
          o = n(85),
          i = n(87),
          a = 4294967295,
          u = Math.min;
        t.exports = function (t, e) {
          if ((t = i(t)) < 1 || 9007199254740991 < t) return [];
          var n = a,
            c = u(t, a);
          (e = o(e)), (t -= a);
          for (var s = r(c, e); ++n < t; ) e(n);
          return s;
        };
      },
      function (t, e, n) {
        "use strict";
        t.exports = n(30);
      },
      function (t, e, n) {
        var r = n(5),
          o = n(7),
          i = /^\s+|\s+$/g,
          a = /^[-+]0x[0-9a-f]+$/i,
          u = /^0b[01]+$/i,
          c = /^0o[0-7]+$/i,
          s = parseInt;
        t.exports = function (t) {
          if ("number" == typeof t) return t;
          if (o(t)) return NaN;
          var e;
          if (
            (r(t) &&
              ((e = "function" == typeof t.valueOf ? t.valueOf() : t),
              (t = r(e) ? e + "" : e)),
            "string" != typeof t)
          )
            return 0 === t ? t : +t;
          t = t.replace(i, "");
          var n = u.test(t);
          return n || c.test(t)
            ? s(t.slice(2), n ? 2 : 8)
            : a.test(t)
            ? NaN
            : +t;
        };
      },
      function (t, e, n) {
        var r = n(51),
          o = n(56);
        t.exports = function (t, e) {
          var n = o(t, e);
          return r(n) ? n : void 0;
        };
      },
      function (t, e, n) {
        var r = n(77),
          o = n(15),
          i = Object.prototype,
          a = i.hasOwnProperty,
          u = i.propertyIsEnumerable,
          c = r(
            (function () {
              return arguments;
            })()
          )
            ? r
            : function (t) {
                return o(t) && a.call(t, "callee") && !u.call(t, "callee");
              };
        t.exports = c;
      },
      function (t, e) {
        t.exports = function (t, e) {
          for (var n = -1, r = e.length, o = t.length; ++n < r; )
            t[o + n] = e[n];
          return t;
        };
      },
      function (t, e, n) {
        var r = n(35),
          o = n(5);
        t.exports = function (t, e, n) {
          var i = !0,
            a = !0;
          if ("function" != typeof t)
            throw new TypeError("Expected a function");
          return (
            o(n) &&
              ((i = "leading" in n ? !!n.leading : i),
              (a = "trailing" in n ? !!n.trailing : a)),
            r(t, e, { leading: i, maxWait: e, trailing: a })
          );
        };
      },
      function (t, e, n) {
        var r = n(40),
          o = n(41);
        t.exports = function (t, e) {
          return null != t && o(t, e, r);
        };
      },
      function (t, n) {
        t.exports = e;
      },
      function (t, e, n) {
        "use strict";
        (function (t) {
          var n = (function () {
              if ("undefined" != typeof Map) return Map;
              function t(t, e) {
                var n = -1;
                return (
                  t.some(function (t, r) {
                    return t[0] === e && ((n = r), !0);
                  }),
                  n
                );
              }
              return (
                Object.defineProperty(e.prototype, "size", {
                  get: function () {
                    return this.__entries__.length;
                  },
                  enumerable: !0,
                  configurable: !0,
                }),
                (e.prototype.get = function (e) {
                  var n = t(this.__entries__, e),
                    r = this.__entries__[n];
                  return r && r[1];
                }),
                (e.prototype.set = function (e, n) {
                  var r = t(this.__entries__, e);
                  ~r
                    ? (this.__entries__[r][1] = n)
                    : this.__entries__.push([e, n]);
                }),
                (e.prototype.delete = function (e) {
                  var n = this.__entries__,
                    r = t(n, e);
                  ~r && n.splice(r, 1);
                }),
                (e.prototype.has = function (e) {
                  return !!~t(this.__entries__, e);
                }),
                (e.prototype.clear = function () {
                  this.__entries__.splice(0);
                }),
                (e.prototype.forEach = function (t, e) {
                  void 0 === e && (e = null);
                  for (var n = 0, r = this.__entries__; n < r.length; n++) {
                    var o = r[n];
                    t.call(e, o[1], o[0]);
                  }
                }),
                e
              );
              function e() {
                this.__entries__ = [];
              }
            })(),
            r =
              "undefined" != typeof window &&
              "undefined" != typeof document &&
              window.document === document,
            o =
              void 0 !== t && t.Math === Math
                ? t
                : "undefined" != typeof self && self.Math === Math
                ? self
                : "undefined" != typeof window && window.Math === Math
                ? window
                : Function("return this")(),
            i =
              "function" == typeof requestAnimationFrame
                ? requestAnimationFrame.bind(o)
                : function (t) {
                    return setTimeout(function () {
                      return t(Date.now());
                    }, 1e3 / 60);
                  },
            a = [
              "top",
              "right",
              "bottom",
              "left",
              "width",
              "height",
              "size",
              "weight",
            ],
            u = "undefined" != typeof MutationObserver,
            c =
              ((s.prototype.addObserver = function (t) {
                ~this.observers_.indexOf(t) || this.observers_.push(t),
                  this.connected_ || this.connect_();
              }),
              (s.prototype.removeObserver = function (t) {
                var e = this.observers_,
                  n = e.indexOf(t);
                ~n && e.splice(n, 1),
                  !e.length && this.connected_ && this.disconnect_();
              }),
              (s.prototype.refresh = function () {
                this.updateObservers_() && this.refresh();
              }),
              (s.prototype.updateObservers_ = function () {
                var t = this.observers_.filter(function (t) {
                  return t.gatherActive(), t.hasActive();
                });
                return (
                  t.forEach(function (t) {
                    return t.broadcastActive();
                  }),
                  0 < t.length
                );
              }),
              (s.prototype.connect_ = function () {
                r &&
                  !this.connected_ &&
                  (document.addEventListener(
                    "transitionend",
                    this.onTransitionEnd_
                  ),
                  window.addEventListener("resize", this.refresh),
                  u
                    ? ((this.mutationsObserver_ = new MutationObserver(
                        this.refresh
                      )),
                      this.mutationsObserver_.observe(document, {
                        attributes: !0,
                        childList: !0,
                        characterData: !0,
                        subtree: !0,
                      }))
                    : (document.addEventListener(
                        "DOMSubtreeModified",
                        this.refresh
                      ),
                      (this.mutationEventsAdded_ = !0)),
                  (this.connected_ = !0));
              }),
              (s.prototype.disconnect_ = function () {
                r &&
                  this.connected_ &&
                  (document.removeEventListener(
                    "transitionend",
                    this.onTransitionEnd_
                  ),
                  window.removeEventListener("resize", this.refresh),
                  this.mutationsObserver_ &&
                    this.mutationsObserver_.disconnect(),
                  this.mutationEventsAdded_ &&
                    document.removeEventListener(
                      "DOMSubtreeModified",
                      this.refresh
                    ),
                  (this.mutationsObserver_ = null),
                  (this.mutationEventsAdded_ = !1),
                  (this.connected_ = !1));
              }),
              (s.prototype.onTransitionEnd_ = function (t) {
                var e = t.propertyName,
                  n = void 0 === e ? "" : e;
                a.some(function (t) {
                  return !!~n.indexOf(t);
                }) && this.refresh();
              }),
              (s.getInstance = function () {
                return (
                  this.instance_ || (this.instance_ = new s()), this.instance_
                );
              }),
              (s.instance_ = null),
              s);
          function s() {
            function t() {
              a && ((a = !1), r()), u && n();
            }
            function e() {
              i(t);
            }
            function n() {
              var t = Date.now();
              if (a) {
                if (t - c < 2) return;
                u = !0;
              } else (u = !(a = !0)), setTimeout(e, o);
              c = t;
            }
            var r, o, a, u, c;
            (this.connected_ = !1),
              (this.mutationEventsAdded_ = !1),
              (this.mutationsObserver_ = null),
              (this.observers_ = []),
              (this.onTransitionEnd_ = this.onTransitionEnd_.bind(this)),
              (this.refresh =
                ((r = this.refresh.bind(this)),
                (u = a = !(o = 20)),
                (c = 0),
                n));
          }
          var f = function (t, e) {
              for (var n = 0, r = Object.keys(e); n < r.length; n++) {
                var o = r[n];
                Object.defineProperty(t, o, {
                  value: e[o],
                  enumerable: !1,
                  writable: !1,
                  configurable: !0,
                });
              }
              return t;
            },
            l = function (t) {
              return (t && t.ownerDocument && t.ownerDocument.defaultView) || o;
            },
            p = b(0, 0, 0, 0);
          function d(t) {
            return parseFloat(t) || 0;
          }
          function h(t) {
            for (var e = [], n = 1; n < arguments.length; n++)
              e[n - 1] = arguments[n];
            return e.reduce(function (e, n) {
              return e + d(t["border-" + n + "-width"]);
            }, 0);
          }
          var y =
            "undefined" != typeof SVGGraphicsElement
              ? function (t) {
                  return t instanceof l(t).SVGGraphicsElement;
                }
              : function (t) {
                  return (
                    t instanceof l(t).SVGElement &&
                    "function" == typeof t.getBBox
                  );
                };
          function v(t) {
            return r
              ? y(t)
                ? b(0, 0, (e = t.getBBox()).width, e.height)
                : (function (t) {
                    var e = t.clientWidth,
                      n = t.clientHeight;
                    if (!e && !n) return p;
                    var r,
                      o,
                      i,
                      a = l(t).getComputedStyle(t),
                      u = (function (t) {
                        for (
                          var e = {},
                            n = 0,
                            r = ["top", "right", "bottom", "left"];
                          n < r.length;
                          n++
                        ) {
                          var o = r[n],
                            i = t["padding-" + o];
                          e[o] = d(i);
                        }
                        return e;
                      })(a),
                      c = u.left + u.right,
                      s = u.top + u.bottom,
                      f = d(a.width),
                      y = d(a.height);
                    return (
                      "border-box" === a.boxSizing &&
                        (Math.round(f + c) !== e &&
                          (f -= h(a, "left", "right") + c),
                        Math.round(y + s) !== n &&
                          (y -= h(a, "top", "bottom") + s)),
                      (i = t) !== l(i).document.documentElement &&
                        ((r = Math.round(f + c) - e),
                        (o = Math.round(y + s) - n),
                        1 !== Math.abs(r) && (f -= r),
                        1 !== Math.abs(o) && (y -= o)),
                      b(u.left, u.top, f, y)
                    );
                  })(t)
              : p;
            var e;
          }
          function b(t, e, n, r) {
            return { x: t, y: e, width: n, height: r };
          }
          var g =
            ((m.prototype.isActive = function () {
              var t = v(this.target);
              return (
                (this.contentRect_ = t).width !== this.broadcastWidth ||
                t.height !== this.broadcastHeight
              );
            }),
            (m.prototype.broadcastRect = function () {
              var t = this.contentRect_;
              return (
                (this.broadcastWidth = t.width),
                (this.broadcastHeight = t.height),
                t
              );
            }),
            m);
          function m(t) {
            (this.broadcastWidth = 0),
              (this.broadcastHeight = 0),
              (this.contentRect_ = b(0, 0, 0, 0)),
              (this.target = t);
          }
          var _ = function (t, e) {
              var n,
                r,
                o,
                i,
                a,
                u,
                c,
                s =
                  ((r = (n = e).x),
                  (o = n.y),
                  (i = n.width),
                  (a = n.height),
                  (u =
                    "undefined" != typeof DOMRectReadOnly
                      ? DOMRectReadOnly
                      : Object),
                  (c = Object.create(u.prototype)),
                  f(c, {
                    x: r,
                    y: o,
                    width: i,
                    height: a,
                    top: o,
                    right: r + i,
                    bottom: a + o,
                    left: r,
                  }),
                  c);
              f(this, { target: t, contentRect: s });
            },
            w =
              ((O.prototype.observe = function (t) {
                if (!arguments.length)
                  throw new TypeError(
                    "1 argument required, but only 0 present."
                  );
                if (
                  "undefined" != typeof Element &&
                  Element instanceof Object
                ) {
                  if (!(t instanceof l(t).Element))
                    throw new TypeError(
                      'parameter 1 is not of type "Element".'
                    );
                  var e = this.observations_;
                  e.has(t) ||
                    (e.set(t, new g(t)),
                    this.controller_.addObserver(this),
                    this.controller_.refresh());
                }
              }),
              (O.prototype.unobserve = function (t) {
                if (!arguments.length)
                  throw new TypeError(
                    "1 argument required, but only 0 present."
                  );
                if (
                  "undefined" != typeof Element &&
                  Element instanceof Object
                ) {
                  if (!(t instanceof l(t).Element))
                    throw new TypeError(
                      'parameter 1 is not of type "Element".'
                    );
                  var e = this.observations_;
                  e.has(t) &&
                    (e.delete(t),
                    e.size || this.controller_.removeObserver(this));
                }
              }),
              (O.prototype.disconnect = function () {
                this.clearActive(),
                  this.observations_.clear(),
                  this.controller_.removeObserver(this);
              }),
              (O.prototype.gatherActive = function () {
                var t = this;
                this.clearActive(),
                  this.observations_.forEach(function (e) {
                    e.isActive() && t.activeObservations_.push(e);
                  });
              }),
              (O.prototype.broadcastActive = function () {
                var t, e;
                this.hasActive() &&
                  ((t = this.callbackCtx_),
                  (e = this.activeObservations_.map(function (t) {
                    return new _(t.target, t.broadcastRect());
                  })),
                  this.callback_.call(t, e, t),
                  this.clearActive());
              }),
              (O.prototype.clearActive = function () {
                this.activeObservations_.splice(0);
              }),
              (O.prototype.hasActive = function () {
                return 0 < this.activeObservations_.length;
              }),
              O);
          function O(t, e, r) {
            if (
              ((this.activeObservations_ = []),
              (this.observations_ = new n()),
              "function" != typeof t)
            )
              throw new TypeError(
                "The callback provided as parameter 1 is not a function."
              );
            (this.callback_ = t),
              (this.controller_ = e),
              (this.callbackCtx_ = r);
          }
          var S = new ("undefined" != typeof WeakMap ? WeakMap : n)(),
            x = function t(e) {
              if (!(this instanceof t))
                throw new TypeError("Cannot call a class as a function.");
              if (!arguments.length)
                throw new TypeError("1 argument required, but only 0 present.");
              var n = c.getInstance(),
                r = new w(e, n, this);
              S.set(this, r);
            };
          ["observe", "unobserve", "disconnect"].forEach(function (t) {
            x.prototype[t] = function () {
              var e;
              return (e = S.get(this))[t].apply(e, arguments);
            };
          });
          var E = void 0 !== o.ResizeObserver ? o.ResizeObserver : x;
          e.a = E;
        }.call(this, n(13)));
      },
      function (t, e, n) {
        "use strict";
        (function (t) {
          var n = "object" == typeof t && t && t.Object === Object && t;
          e.a = n;
        }.call(this, n(13)));
      },
      ,
      function (t, e, n) {
        "use strict";
        /** @license React v16.13.1
         * react-is.production.min.js
         *
         * Copyright (c) Facebook, Inc. and its affiliates.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */ var r = "function" == typeof Symbol && Symbol.for,
          o = r ? Symbol.for("react.element") : 60103,
          i = r ? Symbol.for("react.portal") : 60106,
          a = r ? Symbol.for("react.fragment") : 60107,
          u = r ? Symbol.for("react.strict_mode") : 60108,
          c = r ? Symbol.for("react.profiler") : 60114,
          s = r ? Symbol.for("react.provider") : 60109,
          f = r ? Symbol.for("react.context") : 60110,
          l = r ? Symbol.for("react.async_mode") : 60111,
          p = r ? Symbol.for("react.concurrent_mode") : 60111,
          d = r ? Symbol.for("react.forward_ref") : 60112,
          h = r ? Symbol.for("react.suspense") : 60113,
          y = r ? Symbol.for("react.suspense_list") : 60120,
          v = r ? Symbol.for("react.memo") : 60115,
          b = r ? Symbol.for("react.lazy") : 60116,
          g = r ? Symbol.for("react.block") : 60121,
          m = r ? Symbol.for("react.fundamental") : 60117,
          _ = r ? Symbol.for("react.responder") : 60118,
          w = r ? Symbol.for("react.scope") : 60119;
        function O(t) {
          if ("object" == typeof t && null !== t) {
            var e = t.$$typeof;
            switch (e) {
              case o:
                switch ((t = t.type)) {
                  case l:
                  case p:
                  case a:
                  case c:
                  case u:
                  case h:
                    return t;
                  default:
                    switch ((t = t && t.$$typeof)) {
                      case f:
                      case d:
                      case b:
                      case v:
                      case s:
                        return t;
                      default:
                        return e;
                    }
                }
              case i:
                return e;
            }
          }
        }
        function S(t) {
          return O(t) === p;
        }
        (e.AsyncMode = l),
          (e.ConcurrentMode = p),
          (e.ContextConsumer = f),
          (e.ContextProvider = s),
          (e.Element = o),
          (e.ForwardRef = d),
          (e.Fragment = a),
          (e.Lazy = b),
          (e.Memo = v),
          (e.Portal = i),
          (e.Profiler = c),
          (e.StrictMode = u),
          (e.Suspense = h),
          (e.isAsyncMode = function (t) {
            return S(t) || O(t) === l;
          }),
          (e.isConcurrentMode = S),
          (e.isContextConsumer = function (t) {
            return O(t) === f;
          }),
          (e.isContextProvider = function (t) {
            return O(t) === s;
          }),
          (e.isElement = function (t) {
            return "object" == typeof t && null !== t && t.$$typeof === o;
          }),
          (e.isForwardRef = function (t) {
            return O(t) === d;
          }),
          (e.isFragment = function (t) {
            return O(t) === a;
          }),
          (e.isLazy = function (t) {
            return O(t) === b;
          }),
          (e.isMemo = function (t) {
            return O(t) === v;
          }),
          (e.isPortal = function (t) {
            return O(t) === i;
          }),
          (e.isProfiler = function (t) {
            return O(t) === c;
          }),
          (e.isStrictMode = function (t) {
            return O(t) === u;
          }),
          (e.isSuspense = function (t) {
            return O(t) === h;
          }),
          (e.isValidElementType = function (t) {
            return (
              "string" == typeof t ||
              "function" == typeof t ||
              t === a ||
              t === p ||
              t === c ||
              t === u ||
              t === h ||
              t === y ||
              ("object" == typeof t &&
                null !== t &&
                (t.$$typeof === b ||
                  t.$$typeof === v ||
                  t.$$typeof === s ||
                  t.$$typeof === f ||
                  t.$$typeof === d ||
                  t.$$typeof === m ||
                  t.$$typeof === _ ||
                  t.$$typeof === w ||
                  t.$$typeof === g))
            );
          }),
          (e.typeOf = O);
      },
      function (t, e, n) {
        "use strict";
        /** @license React v16.13.1
         * react-is.development.js
         *
         * Copyright (c) Facebook, Inc. and its affiliates.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */ function r(t) {
          if ("object" == typeof t && null !== t) {
            var e = t.$$typeof;
            switch (e) {
              case a:
                var n = t.type;
                switch (n) {
                  case d:
                  case h:
                  case c:
                  case f:
                  case s:
                  case v:
                    return n;
                  default:
                    var r = n && n.$$typeof;
                    switch (r) {
                      case p:
                      case y:
                      case m:
                      case g:
                      case l:
                        return r;
                      default:
                        return e;
                    }
                }
              case u:
                return e;
            }
          }
        }
        function o(t) {
          return r(t) === h;
        }
        var i,
          a,
          u,
          c,
          s,
          f,
          l,
          p,
          d,
          h,
          y,
          v,
          b,
          g,
          m,
          _,
          w,
          O,
          S,
          x,
          E,
          j,
          P,
          C,
          T,
          R,
          k,
          A,
          M,
          $,
          I,
          D;
        (i = "function" == typeof Symbol && Symbol.for),
          (a = i ? Symbol.for("react.element") : 60103),
          (u = i ? Symbol.for("react.portal") : 60106),
          (c = i ? Symbol.for("react.fragment") : 60107),
          (s = i ? Symbol.for("react.strict_mode") : 60108),
          (f = i ? Symbol.for("react.profiler") : 60114),
          (l = i ? Symbol.for("react.provider") : 60109),
          (p = i ? Symbol.for("react.context") : 60110),
          (d = i ? Symbol.for("react.async_mode") : 60111),
          (h = i ? Symbol.for("react.concurrent_mode") : 60111),
          (y = i ? Symbol.for("react.forward_ref") : 60112),
          (v = i ? Symbol.for("react.suspense") : 60113),
          (b = i ? Symbol.for("react.suspense_list") : 60120),
          (g = i ? Symbol.for("react.memo") : 60115),
          (m = i ? Symbol.for("react.lazy") : 60116),
          (_ = i ? Symbol.for("react.block") : 60121),
          (w = i ? Symbol.for("react.fundamental") : 60117),
          (O = i ? Symbol.for("react.responder") : 60118),
          (S = i ? Symbol.for("react.scope") : 60119),
          (x = h),
          (E = p),
          (j = l),
          (P = a),
          (C = y),
          (T = c),
          (R = m),
          (k = g),
          (A = u),
          (M = f),
          ($ = s),
          (I = v),
          (D = !1),
          (e.AsyncMode = d),
          (e.ConcurrentMode = x),
          (e.ContextConsumer = E),
          (e.ContextProvider = j),
          (e.Element = P),
          (e.ForwardRef = C),
          (e.Fragment = T),
          (e.Lazy = R),
          (e.Memo = k),
          (e.Portal = A),
          (e.Profiler = M),
          (e.StrictMode = $),
          (e.Suspense = I),
          (e.isAsyncMode = function (t) {
            return (
              D ||
                ((D = !0),
                console.warn(
                  "The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API."
                )),
              o(t) || r(t) === d
            );
          }),
          (e.isConcurrentMode = o),
          (e.isContextConsumer = function (t) {
            return r(t) === p;
          }),
          (e.isContextProvider = function (t) {
            return r(t) === l;
          }),
          (e.isElement = function (t) {
            return "object" == typeof t && null !== t && t.$$typeof === a;
          }),
          (e.isForwardRef = function (t) {
            return r(t) === y;
          }),
          (e.isFragment = function (t) {
            return r(t) === c;
          }),
          (e.isLazy = function (t) {
            return r(t) === m;
          }),
          (e.isMemo = function (t) {
            return r(t) === g;
          }),
          (e.isPortal = function (t) {
            return r(t) === u;
          }),
          (e.isProfiler = function (t) {
            return r(t) === f;
          }),
          (e.isStrictMode = function (t) {
            return r(t) === s;
          }),
          (e.isSuspense = function (t) {
            return r(t) === v;
          }),
          (e.isValidElementType = function (t) {
            return (
              "string" == typeof t ||
              "function" == typeof t ||
              t === c ||
              t === h ||
              t === f ||
              t === s ||
              t === v ||
              t === b ||
              ("object" == typeof t &&
                null !== t &&
                (t.$$typeof === m ||
                  t.$$typeof === g ||
                  t.$$typeof === l ||
                  t.$$typeof === p ||
                  t.$$typeof === y ||
                  t.$$typeof === w ||
                  t.$$typeof === O ||
                  t.$$typeof === S ||
                  t.$$typeof === _))
            );
          }),
          (e.typeOf = r);
      },
      function (t, e, n) {
        "use strict";
        var r,
          o = n(18),
          i = n(32),
          a = n(12),
          u = n(33),
          c = Function.call.bind(Object.prototype.hasOwnProperty);
        function s() {
          return null;
        }
        (r = function (t) {
          var e = "Warning: " + t;
          "undefined" != typeof console && console.error(e);
          try {
            throw new Error(e);
          } catch (t) {}
        }),
          (t.exports = function (t, e) {
            var n = "function" == typeof Symbol && Symbol.iterator,
              f = "<<anonymous>>",
              l = {
                array: y("array"),
                bool: y("boolean"),
                func: y("function"),
                number: y("number"),
                object: y("object"),
                string: y("string"),
                symbol: y("symbol"),
                any: h(s),
                arrayOf: function (t) {
                  return h(function (e, n, r, o, i) {
                    if ("function" != typeof t)
                      return new d(
                        "Property `" +
                          i +
                          "` of component `" +
                          r +
                          "` has invalid PropType notation inside arrayOf."
                      );
                    var u = e[n];
                    if (!Array.isArray(u))
                      return new d(
                        "Invalid " +
                          o +
                          " `" +
                          i +
                          "` of type `" +
                          b(u) +
                          "` supplied to `" +
                          r +
                          "`, expected an array."
                      );
                    for (var c = 0; c < u.length; c++) {
                      var s = t(u, c, r, o, i + "[" + c + "]", a);
                      if (s instanceof Error) return s;
                    }
                    return null;
                  });
                },
                element: h(function (e, n, r, o, i) {
                  var a = e[n];
                  return t(a)
                    ? null
                    : new d(
                        "Invalid " +
                          o +
                          " `" +
                          i +
                          "` of type `" +
                          b(a) +
                          "` supplied to `" +
                          r +
                          "`, expected a single ReactElement."
                      );
                }),
                elementType: h(function (t, e, n, r, i) {
                  var a = t[e];
                  return o.isValidElementType(a)
                    ? null
                    : new d(
                        "Invalid " +
                          r +
                          " `" +
                          i +
                          "` of type `" +
                          b(a) +
                          "` supplied to `" +
                          n +
                          "`, expected a single ReactElement type."
                      );
                }),
                instanceOf: function (t) {
                  return h(function (e, n, r, o, i) {
                    if (e[n] instanceof t) return null;
                    var a,
                      u = t.name || f;
                    return new d(
                      "Invalid " +
                        o +
                        " `" +
                        i +
                        "` of type `" +
                        ((a = e[n]).constructor && a.constructor.name
                          ? a.constructor.name
                          : f) +
                        "` supplied to `" +
                        r +
                        "`, expected instance of `" +
                        u +
                        "`."
                    );
                  });
                },
                node: h(function (t, e, n, r, o) {
                  return v(t[e])
                    ? null
                    : new d(
                        "Invalid " +
                          r +
                          " `" +
                          o +
                          "` supplied to `" +
                          n +
                          "`, expected a ReactNode."
                      );
                }),
                objectOf: function (t) {
                  return h(function (e, n, r, o, i) {
                    if ("function" != typeof t)
                      return new d(
                        "Property `" +
                          i +
                          "` of component `" +
                          r +
                          "` has invalid PropType notation inside objectOf."
                      );
                    var u = e[n],
                      s = b(u);
                    if ("object" !== s)
                      return new d(
                        "Invalid " +
                          o +
                          " `" +
                          i +
                          "` of type `" +
                          s +
                          "` supplied to `" +
                          r +
                          "`, expected an object."
                      );
                    for (var f in u)
                      if (c(u, f)) {
                        var l = t(u, f, r, o, i + "." + f, a);
                        if (l instanceof Error) return l;
                      }
                    return null;
                  });
                },
                oneOf: function (t) {
                  return Array.isArray(t)
                    ? h(function (e, n, r, o, i) {
                        for (var a = e[n], u = 0; u < t.length; u++)
                          if (p(a, t[u])) return null;
                        var c = JSON.stringify(t, function (t, e) {
                          return "symbol" === g(e) ? String(e) : e;
                        });
                        return new d(
                          "Invalid " +
                            o +
                            " `" +
                            i +
                            "` of value `" +
                            String(a) +
                            "` supplied to `" +
                            r +
                            "`, expected one of " +
                            c +
                            "."
                        );
                      })
                    : (r(
                        1 < arguments.length
                          ? "Invalid arguments supplied to oneOf, expected an array, got " +
                              arguments.length +
                              " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
                          : "Invalid argument supplied to oneOf, expected an array."
                      ),
                      s);
                },
                oneOfType: function (t) {
                  if (!Array.isArray(t))
                    return (
                      r(
                        "Invalid argument supplied to oneOfType, expected an instance of array."
                      ),
                      s
                    );
                  for (var e = 0; e < t.length; e++) {
                    var n = t[e];
                    if ("function" != typeof n)
                      return (
                        r(
                          "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " +
                            m(n) +
                            " at index " +
                            e +
                            "."
                        ),
                        s
                      );
                  }
                  return h(function (e, n, r, o, i) {
                    for (var u = 0; u < t.length; u++)
                      if (null == (0, t[u])(e, n, r, o, i, a)) return null;
                    return new d(
                      "Invalid " + o + " `" + i + "` supplied to `" + r + "`."
                    );
                  });
                },
                shape: function (t) {
                  return h(function (e, n, r, o, i) {
                    var u = e[n],
                      c = b(u);
                    if ("object" !== c)
                      return new d(
                        "Invalid " +
                          o +
                          " `" +
                          i +
                          "` of type `" +
                          c +
                          "` supplied to `" +
                          r +
                          "`, expected `object`."
                      );
                    for (var s in t) {
                      var f = t[s];
                      if (f) {
                        var l = f(u, s, r, o, i + "." + s, a);
                        if (l) return l;
                      }
                    }
                    return null;
                  });
                },
                exact: function (t) {
                  return h(function (e, n, r, o, u) {
                    var c = e[n],
                      s = b(c);
                    if ("object" !== s)
                      return new d(
                        "Invalid " +
                          o +
                          " `" +
                          u +
                          "` of type `" +
                          s +
                          "` supplied to `" +
                          r +
                          "`, expected `object`."
                      );
                    var f = i({}, e[n], t);
                    for (var l in f) {
                      var p = t[l];
                      if (!p)
                        return new d(
                          "Invalid " +
                            o +
                            " `" +
                            u +
                            "` key `" +
                            l +
                            "` supplied to `" +
                            r +
                            "`.\nBad object: " +
                            JSON.stringify(e[n], null, "  ") +
                            "\nValid keys: " +
                            JSON.stringify(Object.keys(t), null, "  ")
                        );
                      var h = p(c, l, r, o, u + "." + l, a);
                      if (h) return h;
                    }
                    return null;
                  });
                },
              };
            function p(t, e) {
              return t === e ? 0 !== t || 1 / t == 1 / e : t != t && e != e;
            }
            function d(t) {
              (this.message = t), (this.stack = "");
            }
            function h(t) {
              var n = {},
                o = 0;
              function i(i, u, c, s, l, p, h) {
                if (((s = s || f), (p = p || c), h !== a)) {
                  if (e) {
                    var y = new Error(
                      "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
                    );
                    throw ((y.name = "Invariant Violation"), y);
                  }
                  var v;
                  "undefined" == typeof console ||
                    (!n[(v = s + ":" + c)] &&
                      o < 3 &&
                      (r(
                        "You are manually calling a React.PropTypes validation function for the `" +
                          p +
                          "` prop on `" +
                          s +
                          "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
                      ),
                      (n[v] = !0),
                      o++));
                }
                return null == u[c]
                  ? i
                    ? null === u[c]
                      ? new d(
                          "The " +
                            l +
                            " `" +
                            p +
                            "` is marked as required in `" +
                            s +
                            "`, but its value is `null`."
                        )
                      : new d(
                          "The " +
                            l +
                            " `" +
                            p +
                            "` is marked as required in `" +
                            s +
                            "`, but its value is `undefined`."
                        )
                    : null
                  : t(u, c, s, l, p);
              }
              var u = i.bind(null, !1);
              return (u.isRequired = i.bind(null, !0)), u;
            }
            function y(t) {
              return h(function (e, n, r, o, i, a) {
                var u = e[n];
                return b(u) === t
                  ? null
                  : new d(
                      "Invalid " +
                        o +
                        " `" +
                        i +
                        "` of type `" +
                        g(u) +
                        "` supplied to `" +
                        r +
                        "`, expected `" +
                        t +
                        "`."
                    );
              });
            }
            function v(e) {
              switch (typeof e) {
                case "number":
                case "string":
                case "undefined":
                  return !0;
                case "boolean":
                  return !e;
                case "object":
                  if (Array.isArray(e)) return e.every(v);
                  if (null === e || t(e)) return !0;
                  var r = (function (t) {
                    var e = t && ((n && t[n]) || t["@@iterator"]);
                    if ("function" == typeof e) return e;
                  })(e);
                  if (!r) return !1;
                  var o,
                    i = r.call(e);
                  if (r !== e.entries) {
                    for (; !(o = i.next()).done; ) if (!v(o.value)) return !1;
                  } else
                    for (; !(o = i.next()).done; ) {
                      var a = o.value;
                      if (a && !v(a[1])) return !1;
                    }
                  return !0;
                default:
                  return !1;
              }
            }
            function b(t) {
              var e,
                n = typeof t;
              return Array.isArray(t)
                ? "array"
                : t instanceof RegExp
                ? "object"
                : ((e = t),
                  "symbol" === n ||
                  (e &&
                    ("Symbol" === e["@@toStringTag"] ||
                      ("function" == typeof Symbol && e instanceof Symbol)))
                    ? "symbol"
                    : n);
            }
            function g(t) {
              if (null == t) return "" + t;
              var e = b(t);
              if ("object" === e) {
                if (t instanceof Date) return "date";
                if (t instanceof RegExp) return "regexp";
              }
              return e;
            }
            function m(t) {
              var e = g(t);
              switch (e) {
                case "array":
                case "object":
                  return "an " + e;
                case "boolean":
                case "date":
                case "regexp":
                  return "a " + e;
                default:
                  return e;
              }
            }
            return (
              (d.prototype = Error.prototype),
              (l.checkPropTypes = u),
              (l.resetWarningCache = u.resetWarningCache),
              (l.PropTypes = l)
            );
          });
      },
      function (t, e, n) {
        "use strict";
        /*
object-assign
(c) Sindre Sorhus
@license MIT
*/ var r =
            Object.getOwnPropertySymbols,
          o = Object.prototype.hasOwnProperty,
          i = Object.prototype.propertyIsEnumerable;
        t.exports = (function () {
          try {
            if (!Object.assign) return;
            var t = new String("abc");
            if (((t[5] = "de"), "5" === Object.getOwnPropertyNames(t)[0]))
              return;
            for (var e = {}, n = 0; n < 10; n++)
              e["_" + String.fromCharCode(n)] = n;
            if (
              "0123456789" !==
              Object.getOwnPropertyNames(e)
                .map(function (t) {
                  return e[t];
                })
                .join("")
            )
              return;
            var r = {};
            return (
              "abcdefghijklmnopqrst".split("").forEach(function (t) {
                r[t] = t;
              }),
              "abcdefghijklmnopqrst" !==
              Object.keys(Object.assign({}, r)).join("")
                ? void 0
                : 1
            );
          } catch (t) {
            return;
          }
        })()
          ? Object.assign
          : function (t, e) {
              for (
                var n,
                  a,
                  u = (function (t) {
                    if (null == t)
                      throw new TypeError(
                        "Object.assign cannot be called with null or undefined"
                      );
                    return Object(t);
                  })(t),
                  c = 1;
                c < arguments.length;
                c++
              ) {
                for (var s in (n = Object(arguments[c])))
                  o.call(n, s) && (u[s] = n[s]);
                if (r) {
                  a = r(n);
                  for (var f = 0; f < a.length; f++)
                    i.call(n, a[f]) && (u[a[f]] = n[a[f]]);
                }
              }
              return u;
            };
      },
      function (t, e, n) {
        "use strict";
        var r = n(12),
          o = {},
          i = Function.call.bind(Object.prototype.hasOwnProperty),
          a = function (t) {
            var e = "Warning: " + t;
            "undefined" != typeof console && console.error(e);
            try {
              throw new Error(e);
            } catch (t) {}
          };
        function u(t, e, n, u, c) {
          for (var s in t)
            if (i(t, s)) {
              var f, l;
              try {
                if ("function" != typeof t[s]) {
                  var p = Error(
                    (u || "React class") +
                      ": " +
                      n +
                      " type `" +
                      s +
                      "` is invalid; it must be a function, usually from the `prop-types` package, but received `" +
                      typeof t[s] +
                      "`."
                  );
                  throw ((p.name = "Invariant Violation"), p);
                }
                f = t[s](e, s, u, n, null, r);
              } catch (t) {
                f = t;
              }
              !f ||
                f instanceof Error ||
                a(
                  (u || "React class") +
                    ": type specification of " +
                    n +
                    " `" +
                    s +
                    "` is invalid; the type checker function must return `null` or an `Error` but returned a " +
                    typeof f +
                    ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
                ),
                f instanceof Error &&
                  !(f.message in o) &&
                  ((o[f.message] = !0),
                  (l = c ? c() : ""),
                  a(
                    "Failed " + n + " type: " + f.message + (null != l ? l : "")
                  ));
            }
        }
        (u.resetWarningCache = function () {
          o = {};
        }),
          (t.exports = u);
      },
      function (t, e, n) {
        "use strict";
        var r = n(12);
        function o() {}
        function i() {}
        (i.resetWarningCache = o),
          (t.exports = function () {
            function t(t, e, n, o, i, a) {
              if (a !== r) {
                var u = new Error(
                  "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
                );
                throw ((u.name = "Invariant Violation"), u);
              }
            }
            function e() {
              return t;
            }
            var n = {
              array: (t.isRequired = t),
              bool: t,
              func: t,
              number: t,
              object: t,
              string: t,
              symbol: t,
              any: t,
              arrayOf: e,
              element: t,
              elementType: t,
              instanceOf: e,
              node: t,
              objectOf: e,
              oneOf: e,
              oneOfType: e,
              shape: e,
              exact: e,
              checkPropTypes: i,
              resetWarningCache: o,
            };
            return (n.PropTypes = n);
          });
      },
      function (t, e, n) {
        var r = n(5),
          o = n(36),
          i = n(19),
          a = Math.max,
          u = Math.min;
        t.exports = function (t, e, n) {
          var c,
            s,
            f,
            l,
            p,
            d,
            h = 0,
            y = !1,
            v = !1,
            b = !0;
          if ("function" != typeof t)
            throw new TypeError("Expected a function");
          function g(e) {
            var n = c,
              r = s;
            return (c = s = void 0), (h = e), (l = t.apply(r, n));
          }
          function m(t) {
            var n = t - d;
            return void 0 === d || e <= n || n < 0 || (v && f <= t - h);
          }
          function _() {
            var t,
              n,
              r = o();
            if (m(r)) return w(r);
            p = setTimeout(
              _,
              ((n = e - ((t = r) - d)), v ? u(n, f - (t - h)) : n)
            );
          }
          function w(t) {
            return (p = void 0), b && c ? g(t) : ((c = s = void 0), l);
          }
          function O() {
            var t,
              n = o(),
              r = m(n);
            if (((c = arguments), (s = this), (d = n), r)) {
              if (void 0 === p)
                return (h = t = d), (p = setTimeout(_, e)), y ? g(t) : l;
              if (v) return clearTimeout(p), (p = setTimeout(_, e)), g(d);
            }
            return void 0 === p && (p = setTimeout(_, e)), l;
          }
          return (
            (e = i(e) || 0),
            r(n) &&
              ((y = !!n.leading),
              (f = (v = "maxWait" in n) ? a(i(n.maxWait) || 0, e) : f),
              (b = "trailing" in n ? !!n.trailing : b)),
            (O.cancel = function () {
              void 0 !== p && clearTimeout(p), (c = d = s = p = void (h = 0));
            }),
            (O.flush = function () {
              return void 0 === p ? l : w(o());
            }),
            O
          );
        };
      },
      function (t, e, n) {
        var r = n(6);
        t.exports = function () {
          return r.Date.now();
        };
      },
      function (t, e, n) {
        (function (e) {
          var n = "object" == typeof e && e && e.Object === Object && e;
          t.exports = n;
        }.call(this, n(13)));
      },
      function (t, e, n) {
        var r = n(8),
          o = Object.prototype,
          i = o.hasOwnProperty,
          a = o.toString,
          u = r ? r.toStringTag : void 0;
        t.exports = function (t) {
          var e = i.call(t, u),
            n = t[u];
          try {
            var r = !(t[u] = void 0);
          } catch (t) {}
          var o = a.call(t);
          return r && (e ? (t[u] = n) : delete t[u]), o;
        };
      },
      function (t, e) {
        var n = Object.prototype.toString;
        t.exports = function (t) {
          return n.call(t);
        };
      },
      function (t, e) {
        var n = Object.prototype.hasOwnProperty;
        t.exports = function (t, e) {
          return null != t && n.call(t, e);
        };
      },
      function (t, e, n) {
        var r = n(42),
          o = n(21),
          i = n(4),
          a = n(78),
          u = n(79),
          c = n(80);
        t.exports = function (t, e, n) {
          for (var s = -1, f = (e = r(e, t)).length, l = !1; ++s < f; ) {
            var p = c(e[s]);
            if (!(l = null != t && n(t, p))) break;
            t = t[p];
          }
          return l || ++s != f
            ? l
            : !!(f = null == t ? 0 : t.length) &&
                u(f) &&
                a(p, f) &&
                (i(t) || o(t));
        };
      },
      function (t, e, n) {
        var r = n(4),
          o = n(43),
          i = n(44),
          a = n(74);
        t.exports = function (t, e) {
          return r(t) ? t : o(t, e) ? [t] : i(a(t));
        };
      },
      function (t, e, n) {
        var r = n(4),
          o = n(7),
          i = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
          a = /^\w*$/;
        t.exports = function (t, e) {
          if (r(t)) return !1;
          var n = typeof t;
          return (
            !(
              "number" != n &&
              "symbol" != n &&
              "boolean" != n &&
              null != t &&
              !o(t)
            ) ||
            a.test(t) ||
            !i.test(t) ||
            (null != e && t in Object(e))
          );
        };
      },
      function (t, e, n) {
        var r = n(45),
          o = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
          i = /\\(\\)?/g,
          a = r(function (t) {
            var e = [];
            return (
              46 === t.charCodeAt(0) && e.push(""),
              t.replace(o, function (t, n, r, o) {
                e.push(r ? o.replace(i, "$1") : n || t);
              }),
              e
            );
          });
        t.exports = a;
      },
      function (t, e, n) {
        var r = n(46);
        t.exports = function (t) {
          var e = r(t, function (t) {
              return 500 === n.size && n.clear(), t;
            }),
            n = e.cache;
          return e;
        };
      },
      function (t, e, n) {
        var r = n(47);
        function o(t, e) {
          if ("function" != typeof t || (null != e && "function" != typeof e))
            throw new TypeError("Expected a function");
          var n = function () {
            var r = arguments,
              o = e ? e.apply(this, r) : r[0],
              i = n.cache;
            if (i.has(o)) return i.get(o);
            var a = t.apply(this, r);
            return (n.cache = i.set(o, a) || i), a;
          };
          return (n.cache = new (o.Cache || r)()), n;
        }
        (o.Cache = r), (t.exports = o);
      },
      function (t, e, n) {
        var r = n(48),
          o = n(69),
          i = n(71),
          a = n(72),
          u = n(73);
        function c(t) {
          var e = -1,
            n = null == t ? 0 : t.length;
          for (this.clear(); ++e < n; ) {
            var r = t[e];
            this.set(r[0], r[1]);
          }
        }
        (c.prototype.clear = r),
          (c.prototype.delete = o),
          (c.prototype.get = i),
          (c.prototype.has = a),
          (c.prototype.set = u),
          (t.exports = c);
      },
      function (t, e, n) {
        var r = n(49),
          o = n(61),
          i = n(68);
        t.exports = function () {
          (this.size = 0),
            (this.__data__ = {
              hash: new r(),
              map: new (i || o)(),
              string: new r(),
            });
        };
      },
      function (t, e, n) {
        var r = n(50),
          o = n(57),
          i = n(58),
          a = n(59),
          u = n(60);
        function c(t) {
          var e = -1,
            n = null == t ? 0 : t.length;
          for (this.clear(); ++e < n; ) {
            var r = t[e];
            this.set(r[0], r[1]);
          }
        }
        (c.prototype.clear = r),
          (c.prototype.delete = o),
          (c.prototype.get = i),
          (c.prototype.has = a),
          (c.prototype.set = u),
          (t.exports = c);
      },
      function (t, e, n) {
        var r = n(9);
        t.exports = function () {
          (this.__data__ = r ? r(null) : {}), (this.size = 0);
        };
      },
      function (t, e, n) {
        var r = n(52),
          o = n(53),
          i = n(5),
          a = n(55),
          u = /^\[object .+?Constructor\]$/,
          c = Function.prototype,
          s = Object.prototype,
          f = c.toString,
          l = s.hasOwnProperty,
          p = RegExp(
            "^" +
              f
                .call(l)
                .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
                .replace(
                  /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                  "$1.*?"
                ) +
              "$"
          );
        t.exports = function (t) {
          return !(!i(t) || o(t)) && (r(t) ? p : u).test(a(t));
        };
      },
      function (t, e, n) {
        var r = n(14),
          o = n(5);
        t.exports = function (t) {
          if (!o(t)) return !1;
          var e = r(t);
          return (
            "[object Function]" == e ||
            "[object GeneratorFunction]" == e ||
            "[object AsyncFunction]" == e ||
            "[object Proxy]" == e
          );
        };
      },
      function (t, e, n) {
        var r,
          o = n(54),
          i = (r = /[^.]+$/.exec((o && o.keys && o.keys.IE_PROTO) || ""))
            ? "Symbol(src)_1." + r
            : "";
        t.exports = function (t) {
          return !!i && i in t;
        };
      },
      function (t, e, n) {
        var r = n(6)["__core-js_shared__"];
        t.exports = r;
      },
      function (t, e) {
        var n = Function.prototype.toString;
        t.exports = function (t) {
          if (null != t) {
            try {
              return n.call(t);
            } catch (t) {}
            try {
              return t + "";
            } catch (t) {}
          }
          return "";
        };
      },
      function (t, e) {
        t.exports = function (t, e) {
          return null == t ? void 0 : t[e];
        };
      },
      function (t, e) {
        t.exports = function (t) {
          var e = this.has(t) && delete this.__data__[t];
          return (this.size -= e ? 1 : 0), e;
        };
      },
      function (t, e, n) {
        var r = n(9),
          o = Object.prototype.hasOwnProperty;
        t.exports = function (t) {
          var e = this.__data__;
          if (r) {
            var n = e[t];
            return "__lodash_hash_undefined__" === n ? void 0 : n;
          }
          return o.call(e, t) ? e[t] : void 0;
        };
      },
      function (t, e, n) {
        var r = n(9),
          o = Object.prototype.hasOwnProperty;
        t.exports = function (t) {
          var e = this.__data__;
          return r ? void 0 !== e[t] : o.call(e, t);
        };
      },
      function (t, e, n) {
        var r = n(9);
        t.exports = function (t, e) {
          var n = this.__data__;
          return (
            (this.size += this.has(t) ? 0 : 1),
            (n[t] = r && void 0 === e ? "__lodash_hash_undefined__" : e),
            this
          );
        };
      },
      function (t, e, n) {
        var r = n(62),
          o = n(63),
          i = n(65),
          a = n(66),
          u = n(67);
        function c(t) {
          var e = -1,
            n = null == t ? 0 : t.length;
          for (this.clear(); ++e < n; ) {
            var r = t[e];
            this.set(r[0], r[1]);
          }
        }
        (c.prototype.clear = r),
          (c.prototype.delete = o),
          (c.prototype.get = i),
          (c.prototype.has = a),
          (c.prototype.set = u),
          (t.exports = c);
      },
      function (t, e) {
        t.exports = function () {
          (this.__data__ = []), (this.size = 0);
        };
      },
      function (t, e, n) {
        var r = n(10),
          o = Array.prototype.splice;
        t.exports = function (t) {
          var e = this.__data__,
            n = r(e, t);
          return !(
            n < 0 ||
            (n == e.length - 1 ? e.pop() : o.call(e, n, 1), --this.size, 0)
          );
        };
      },
      function (t, e) {
        t.exports = function (t, e) {
          return t === e || (t != t && e != e);
        };
      },
      function (t, e, n) {
        var r = n(10);
        t.exports = function (t) {
          var e = this.__data__,
            n = r(e, t);
          return n < 0 ? void 0 : e[n][1];
        };
      },
      function (t, e, n) {
        var r = n(10);
        t.exports = function (t) {
          return -1 < r(this.__data__, t);
        };
      },
      function (t, e, n) {
        var r = n(10);
        t.exports = function (t, e) {
          var n = this.__data__,
            o = r(n, t);
          return o < 0 ? (++this.size, n.push([t, e])) : (n[o][1] = e), this;
        };
      },
      function (t, e, n) {
        var r = n(20)(n(6), "Map");
        t.exports = r;
      },
      function (t, e, n) {
        var r = n(11);
        t.exports = function (t) {
          var e = r(this, t).delete(t);
          return (this.size -= e ? 1 : 0), e;
        };
      },
      function (t, e) {
        t.exports = function (t) {
          var e = typeof t;
          return "string" == e ||
            "number" == e ||
            "symbol" == e ||
            "boolean" == e
            ? "__proto__" !== t
            : null === t;
        };
      },
      function (t, e, n) {
        var r = n(11);
        t.exports = function (t) {
          return r(this, t).get(t);
        };
      },
      function (t, e, n) {
        var r = n(11);
        t.exports = function (t) {
          return r(this, t).has(t);
        };
      },
      function (t, e, n) {
        var r = n(11);
        t.exports = function (t, e) {
          var n = r(this, t),
            o = n.size;
          return n.set(t, e), (this.size += n.size == o ? 0 : 1), this;
        };
      },
      function (t, e, n) {
        var r = n(75);
        t.exports = function (t) {
          return null == t ? "" : r(t);
        };
      },
      function (t, e, n) {
        var r = n(8),
          o = n(76),
          i = n(4),
          a = n(7),
          u = r ? r.prototype : void 0,
          c = u ? u.toString : void 0;
        t.exports = function t(e) {
          if ("string" == typeof e) return e;
          if (i(e)) return o(e, t) + "";
          if (a(e)) return c ? c.call(e) : "";
          var n = e + "";
          return "0" == n && 1 / e == -1 / 0 ? "-0" : n;
        };
      },
      function (t, e) {
        t.exports = function (t, e) {
          for (
            var n = -1, r = null == t ? 0 : t.length, o = Array(r);
            ++n < r;

          )
            o[n] = e(t[n], n, t);
          return o;
        };
      },
      function (t, e, n) {
        var r = n(14),
          o = n(15);
        t.exports = function (t) {
          return o(t) && "[object Arguments]" == r(t);
        };
      },
      function (t, e) {
        var n = /^(?:0|[1-9]\d*)$/;
        t.exports = function (t, e) {
          var r = typeof t;
          return (
            !!(e = null == e ? 9007199254740991 : e) &&
            ("number" == r || ("symbol" != r && n.test(t))) &&
            -1 < t &&
            t % 1 == 0 &&
            t < e
          );
        };
      },
      function (t, e) {
        t.exports = function (t) {
          return (
            "number" == typeof t &&
            -1 < t &&
            t % 1 == 0 &&
            t <= 9007199254740991
          );
        };
      },
      function (t, e, n) {
        var r = n(7);
        t.exports = function (t) {
          if ("string" == typeof t || r(t)) return t;
          var e = t + "";
          return "0" == e && 1 / t == -1 / 0 ? "-0" : e;
        };
      },
      function (t, e, n) {
        var r = n(22),
          o = n(82);
        t.exports = function t(e, n, i, a, u) {
          var c = -1,
            s = e.length;
          for (i = i || o, u = u || []; ++c < s; ) {
            var f = e[c];
            0 < n && i(f)
              ? 1 < n
                ? t(f, n - 1, i, a, u)
                : r(u, f)
              : a || (u[u.length] = f);
          }
          return u;
        };
      },
      function (t, e, n) {
        var r = n(8),
          o = n(21),
          i = n(4),
          a = r ? r.isConcatSpreadable : void 0;
        t.exports = function (t) {
          return i(t) || o(t) || !!(a && t && t[a]);
        };
      },
      function (t, e) {
        t.exports = function (t, e) {
          var n = -1,
            r = t.length;
          for (e = e || Array(r); ++n < r; ) e[n] = t[n];
          return e;
        };
      },
      function (t, e) {
        t.exports = function (t, e) {
          for (var n = -1, r = Array(t); ++n < t; ) r[n] = e(n);
          return r;
        };
      },
      function (t, e, n) {
        var r = n(86);
        t.exports = function (t) {
          return "function" == typeof t ? t : r;
        };
      },
      function (t, e) {
        t.exports = function (t) {
          return t;
        };
      },
      function (t, e, n) {
        var r = n(88);
        t.exports = function (t) {
          var e = r(t),
            n = e % 1;
          return e == e ? (n ? e - n : e) : 0;
        };
      },
      function (t, e, n) {
        var r = n(19);
        t.exports = function (t) {
          return t
            ? (t = r(t)) !== 1 / 0 && t !== -1 / 0
              ? t == t
                ? t
                : 0
              : 17976931348623157e292 * (t < 0 ? -1 : 1)
            : 0 === t
            ? t
            : 0;
        };
      },
      function (t, e, n) {
        "use strict";
        n.r(e),
          n.d(e, "Dots", function () {
            return zt;
          });
        var r = n(0),
          o = n.n(r),
          i = n(3),
          a = n.n(i),
          u = n(1),
          c = n(23),
          s = n.n(c),
          f = n(24),
          l = n.n(f),
          p = n(16),
          d = n.n(p),
          h = n(17),
          y = n.n(h),
          v = n(2),
          b = n.n(v),
          g = n(25),
          m = n(26),
          _ = function (t) {
            var e = typeof t;
            return null != t && ("object" == e || "function" == e);
          },
          w = n(27),
          O = "object" == typeof self && self && self.Object === Object && self,
          S = w.a || O || Function("return this")(),
          x = function () {
            return S.Date.now();
          },
          E = S.Symbol,
          j = Object.prototype,
          P = j.hasOwnProperty,
          C = j.toString,
          T = E ? E.toStringTag : void 0,
          R = function (t) {
            var e = P.call(t, T),
              n = t[T];
            try {
              var r = !(t[T] = void 0);
            } catch (t) {}
            var o = C.call(t);
            return r && (e ? (t[T] = n) : delete t[T]), o;
          },
          k = Object.prototype.toString,
          A = function (t) {
            return k.call(t);
          },
          M = E ? E.toStringTag : void 0,
          $ = function (t) {
            return null == t
              ? void 0 === t
                ? "[object Undefined]"
                : "[object Null]"
              : (M && M in Object(t) ? R : A)(t);
          },
          I = /^\s+|\s+$/g,
          D = /^[-+]0x[0-9a-f]+$/i,
          W = /^0b[01]+$/i,
          L = /^0o[0-7]+$/i,
          z = parseInt,
          N = function (t) {
            if ("number" == typeof t) return t;
            if (
              (function (t) {
                return (
                  "symbol" == typeof t ||
                  ((function (t) {
                    return null != t && "object" == typeof t;
                  })(t) &&
                    "[object Symbol]" == $(t))
                );
              })(t)
            )
              return NaN;
            var e;
            if (
              (_(t) &&
                ((e = "function" == typeof t.valueOf ? t.valueOf() : t),
                (t = _(e) ? e + "" : e)),
              "string" != typeof t)
            )
              return 0 === t ? t : +t;
            t = t.replace(I, "");
            var n = W.test(t);
            return n || L.test(t)
              ? z(t.slice(2), n ? 2 : 8)
              : D.test(t)
              ? NaN
              : +t;
          },
          F = Math.max,
          B = Math.min,
          V = function (t, e, n) {
            var r,
              o,
              i,
              a,
              u,
              c,
              s = 0,
              f = !1,
              l = !1,
              p = !0;
            if ("function" != typeof t)
              throw new TypeError("Expected a function");
            function d(e) {
              var n = r,
                i = o;
              return (r = o = void 0), (s = e), (a = t.apply(i, n));
            }
            function h(t) {
              var n = t - c;
              return void 0 === c || e <= n || n < 0 || (l && i <= t - s);
            }
            function y() {
              var t,
                n,
                r = x();
              if (h(r)) return v(r);
              u = setTimeout(
                y,
                ((n = e - ((t = r) - c)), l ? B(n, i - (t - s)) : n)
              );
            }
            function v(t) {
              return (u = void 0), p && r ? d(t) : ((r = o = void 0), a);
            }
            function b() {
              var t,
                n = x(),
                i = h(n);
              if (((r = arguments), (o = this), (c = n), i)) {
                if (void 0 === u)
                  return (s = t = c), (u = setTimeout(y, e)), f ? d(t) : a;
                if (l) return clearTimeout(u), (u = setTimeout(y, e)), d(c);
              }
              return void 0 === u && (u = setTimeout(y, e)), a;
            }
            return (
              (e = N(e) || 0),
              _(n) &&
                ((f = !!n.leading),
                (i = (l = "maxWait" in n) ? F(N(n.maxWait) || 0, e) : i),
                (p = "trailing" in n ? !!n.trailing : p)),
              (b.cancel = function () {
                void 0 !== u && clearTimeout(u), (r = c = o = u = void (s = 0));
              }),
              (b.flush = function () {
                return void 0 === u ? a : v(x());
              }),
              b
            );
          };
        function H(t) {
          return "function" == typeof t;
        }
        function q() {
          return "undefined" == typeof window;
        }
        var U = {
          debounce: V,
          throttle: function (t, e, n) {
            var r = !0,
              o = !0;
            if ("function" != typeof t)
              throw new TypeError("Expected a function");
            return (
              _(n) &&
                ((r = "leading" in n ? !!n.leading : r),
                (o = "trailing" in n ? !!n.trailing : o)),
              V(t, e, { leading: r, maxWait: e, trailing: o })
            );
          },
        };
        function X(t) {
          return (X =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        function Y(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, r.key, r);
          }
        }
        function G(t, e) {
          return (G =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            })(t, e);
        }
        function J(t) {
          return (J = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              })(t);
        }
        var K = (function () {
          !(function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              e && G(t, e);
          })(o, r.PureComponent);
          var t,
            e,
            n = (function (t) {
              return function () {
                var e,
                  n,
                  r,
                  o = J(t);
                return (
                  (n = this),
                  !(r = (function () {
                    if (
                      "undefined" != typeof Reflect &&
                      Reflect.construct &&
                      !Reflect.construct.sham
                    ) {
                      if ("function" == typeof Proxy) return 1;
                      try {
                        return (
                          Date.prototype.toString.call(
                            Reflect.construct(Date, [], function () {})
                          ),
                          1
                        );
                      } catch (t) {
                        return;
                      }
                    }
                  })()
                    ? ((e = J(this).constructor),
                      Reflect.construct(o, arguments, e))
                    : o.apply(this, arguments)) ||
                  ("object" !== X(r) && "function" != typeof r)
                    ? (function (t) {
                        if (void 0 !== t) return t;
                        throw new ReferenceError(
                          "this hasn't been initialised - super() hasn't been called"
                        );
                      })(n)
                    : r
                );
              };
            })(o);
          function o() {
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, o),
              n.apply(this, arguments)
            );
          }
          return (
            (t = o),
            (e = [
              {
                key: "render",
                value: function () {
                  return this.props.children;
                },
              },
            ]) && Y(t.prototype, e),
            o
          );
        })();
        function Q(t) {
          return (Q =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        function Z(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, r.key, r);
          }
        }
        function tt(t, e) {
          return (tt =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            })(t, e);
        }
        function et(t) {
          if (void 0 === t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return t;
        }
        function nt(t) {
          return (nt = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              })(t);
        }
        function rt(t, e, n) {
          return (
            e in t
              ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = n),
            t
          );
        }
        var ot = (function () {
          !(function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              e && tt(t, e);
          })(i, r.PureComponent);
          var t,
            e,
            n = (function (t) {
              return function () {
                var e,
                  n,
                  r,
                  o = nt(t);
                return (
                  (n = this),
                  !(r = (function () {
                    if (
                      "undefined" != typeof Reflect &&
                      Reflect.construct &&
                      !Reflect.construct.sham
                    ) {
                      if ("function" == typeof Proxy) return 1;
                      try {
                        return (
                          Date.prototype.toString.call(
                            Reflect.construct(Date, [], function () {})
                          ),
                          1
                        );
                      } catch (t) {
                        return;
                      }
                    }
                  })()
                    ? ((e = nt(this).constructor),
                      Reflect.construct(o, arguments, e))
                    : o.apply(this, arguments)) ||
                  ("object" !== Q(r) && "function" != typeof r)
                    ? et(n)
                    : r
                );
              };
            })(i);
          function i(t) {
            var e;
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, i),
              rt(et((e = n.call(this, t))), "cancelHandler", function () {
                e.resizeHandler &&
                  e.resizeHandler.cancel &&
                  (e.resizeHandler.cancel(), (e.resizeHandler = null));
              }),
              rt(et(e), "rafClean", function () {
                e.raf && e.raf.cancel && (e.raf.cancel(), (e.raf = null));
              }),
              rt(et(e), "toggleObserver", function (t) {
                var n = e.getElement();
                n && e.resizeObserver[t] && e.resizeObserver[t](n);
              }),
              rt(et(e), "getElement", function () {
                var t = e.props,
                  n = t.querySelector,
                  r = t.targetDomEl;
                if (!q()) {
                  if (n) return document.querySelector(n);
                  if (
                    r &&
                    ((o = r) instanceof Element || o instanceof HTMLDocument)
                  )
                    return r;
                  var o,
                    i = e.element && Object(g.findDOMNode)(e.element);
                  if (i) return i.parentElement;
                }
              }),
              rt(et(e), "createUpdater", function () {
                return (
                  e.rafClean(),
                  (e.raf = (function (t) {
                    function e() {
                      for (
                        var e = arguments.length, o = new Array(e), i = 0;
                        i < e;
                        i++
                      )
                        o[i] = arguments[i];
                      (n = o),
                        (r =
                          r ||
                          requestAnimationFrame(function () {
                            (r = null), t.apply(void 0, n);
                          }));
                    }
                    var n = [],
                      r = null;
                    return (
                      (e.cancel = function () {
                        r && (cancelAnimationFrame(r), (r = null));
                      }),
                      e
                    );
                  })(function (t) {
                    var n = t.width,
                      r = t.height,
                      o = e.props.onResize;
                    H(o) && o(n, r), e.setState({ width: n, height: r });
                  })),
                  e.raf
                );
              }),
              rt(et(e), "createResizeHandler", function (t) {
                var n,
                  r = e.state,
                  o = r.width,
                  i = r.height,
                  a = e.props,
                  u = a.handleWidth,
                  c = a.handleHeight;
                (u || c) &&
                  ((n = e.createUpdater()),
                  t.forEach(function (t) {
                    var r = (t && t.contentRect) || {},
                      a = r.width,
                      s = r.height,
                      f = (u && o !== a) || (c && i !== s);
                    e.skipOnMount || !f || q() || n({ width: a, height: s }),
                      (e.skipOnMount = !1);
                  }));
              }),
              rt(et(e), "onRef", function (t) {
                e.element = t;
              }),
              rt(et(e), "getRenderType", function () {
                var t = e.props,
                  n = t.render,
                  o = t.children;
                return H(n)
                  ? "renderProp"
                  : H(o)
                  ? "childFunction"
                  : Object(r.isValidElement)(o)
                  ? "child"
                  : Array.isArray(o)
                  ? "childArray"
                  : "parent";
              }),
              rt(et(e), "getTargetComponent", function () {
                var t = e.props,
                  n = t.render,
                  o = t.children,
                  i = t.nodeType,
                  a = e.state,
                  u = { width: a.width, height: a.height };
                switch (e.getRenderType()) {
                  case "renderProp":
                    return Object(r.cloneElement)(n(u), {
                      key: "resize-detector",
                    });
                  case "childFunction":
                    return Object(r.cloneElement)(o(u));
                  case "child":
                    return Object(r.cloneElement)(o, u);
                  case "childArray":
                    return o.map(function (t) {
                      return !!t && Object(r.cloneElement)(t, u);
                    });
                  default:
                    return Object(r.createElement)(i);
                }
              });
            var o = t.skipOnMount,
              a = t.refreshMode,
              u = t.refreshRate,
              c = t.refreshOptions;
            (e.state = { width: void 0, height: void 0 }),
              (e.skipOnMount = o),
              (e.raf = null),
              (e.element = null),
              (e.unmounted = !1);
            var s = U[a];
            return (
              (e.resizeHandler = s
                ? s(e.createResizeHandler, u, c)
                : e.createResizeHandler),
              (e.resizeObserver = new m.a(e.resizeHandler)),
              e
            );
          }
          return (
            (t = i),
            (e = [
              {
                key: "componentDidMount",
                value: function () {
                  this.toggleObserver("observe");
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  this.toggleObserver("unobserve"),
                    this.rafClean(),
                    this.cancelHandler(),
                    (this.unmounted = !0);
                },
              },
              {
                key: "render",
                value: function () {
                  return o.a.createElement(
                    K,
                    { ref: this.onRef },
                    this.getTargetComponent()
                  );
                },
              },
            ]) && Z(t.prototype, e),
            i
          );
        })();
        (ot.propTypes = {
          handleWidth: u.bool,
          handleHeight: u.bool,
          skipOnMount: u.bool,
          refreshRate: u.number,
          refreshMode: u.string,
          refreshOptions: Object(u.shape)({
            leading: u.bool,
            trailing: u.bool,
          }),
          querySelector: u.string,
          targetDomEl: u.any,
          onResize: u.func,
          render: u.func,
          children: u.any,
          nodeType: u.node,
        }),
          (ot.defaultProps = {
            handleWidth: !1,
            handleHeight: !1,
            skipOnMount: !1,
            refreshRate: 1e3,
            refreshMode: void 0,
            refreshOptions: void 0,
            querySelector: null,
            targetDomEl: null,
            onResize: null,
            render: void 0,
            children: null,
            nodeType: "div",
          });
        var it = ot;
        function at(t) {
          return (at =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        function ut(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, r.key, r);
          }
        }
        function ct(t, e) {
          return (ct =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            })(t, e);
        }
        function st(t) {
          if (void 0 === t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return t;
        }
        function ft(t) {
          return (ft = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              })(t);
        }
        function lt(t, e, n) {
          return (
            e in t
              ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = n),
            t
          );
        }
        n(90);
        var pt = (function () {
          !(function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              e && ct(t, e);
          })(i, r.PureComponent);
          var t,
            e,
            n = (function (t) {
              var e = (function () {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                  return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                  return (
                    Date.prototype.toString.call(
                      Reflect.construct(Date, [], function () {})
                    ),
                    !0
                  );
                } catch (t) {
                  return !1;
                }
              })();
              return function () {
                var n,
                  r,
                  o,
                  i = ft(t);
                return (
                  (r = this),
                  !(o = e
                    ? ((n = ft(this).constructor),
                      Reflect.construct(i, arguments, n))
                    : i.apply(this, arguments)) ||
                  ("object" !== at(o) && "function" != typeof o)
                    ? st(r)
                    : o
                );
              };
            })(i);
          function i() {
            var t;
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, i);
            for (var e = arguments.length, r = new Array(e), o = 0; o < e; o++)
              r[o] = arguments[o];
            return (
              lt(
                st((t = n.call.apply(n, [this].concat(r)))),
                "onMouseDown",
                function (e) {
                  t.props.onMouseDown(e, t.props.index);
                }
              ),
              lt(st(t), "onTouchStart", function (e) {
                t.props.onTouchStart(e, t.props.index);
              }),
              t
            );
          }
          return (
            (t = i),
            (e = [
              {
                key: "render",
                value: function () {
                  return o.a.createElement(
                    "li",
                    {
                      className: b()("BrainhubCarouselItem", {
                        "BrainhubCarouselItem--clickable": this.props.clickable,
                        "BrainhubCarouselItem--active":
                          this.props.index === this.props.currentSlideIndex,
                      }),
                      style: {
                        paddingRight: "".concat(this.props.offset / 2, "px"),
                        paddingLeft: "".concat(this.props.offset / 2, "px"),
                        width: "".concat(this.props.width, "px"),
                        maxWidth: "".concat(this.props.width, "px"),
                        minWidth: "".concat(this.props.width, "px"),
                        pointerEvents: this.props.isDragging ? "none" : null,
                      },
                      onMouseDown: this.props.isDraggingEnabled
                        ? this.onMouseDown
                        : null,
                      onTouchStart: this.props.isDraggingEnabled
                        ? this.onTouchStart
                        : null,
                    },
                    this.props.children
                  );
                },
              },
            ]) && ut(t.prototype, e),
            i
          );
        })();
        function dt(t) {
          return (dt =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        function ht(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, r.key, r);
          }
        }
        function yt(t, e) {
          return (yt =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            })(t, e);
        }
        function vt(t) {
          if (void 0 === t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return t;
        }
        function bt(t) {
          return (bt = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              })(t);
        }
        function gt(t, e, n) {
          return (
            e in t
              ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = n),
            t
          );
        }
        n(94);
        var mt = (function () {
          !(function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              e && yt(t, e);
          })(i, r.Component);
          var t,
            e,
            n = (function (t) {
              var e = (function () {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                  return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                  return (
                    Date.prototype.toString.call(
                      Reflect.construct(Date, [], function () {})
                    ),
                    !0
                  );
                } catch (t) {
                  return !1;
                }
              })();
              return function () {
                var n,
                  r,
                  o,
                  i = bt(t);
                return (
                  (r = this),
                  !(o = e
                    ? ((n = bt(this).constructor),
                      Reflect.construct(i, arguments, n))
                    : i.apply(this, arguments)) ||
                  ("object" !== dt(o) && "function" != typeof o)
                    ? vt(r)
                    : o
                );
              };
            })(i);
          function i() {
            var t;
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, i);
            for (var e = arguments.length, r = new Array(e), o = 0; o < e; o++)
              r[o] = arguments[o];
            return (
              gt(
                vt((t = n.call.apply(n, [this].concat(r)))),
                "onChange",
                function (e) {
                  return function () {
                    var n = t.props.number || t.props.thumbnails.length,
                      r = t.calculateButtonValue() % n;
                    return t.props.onChange(t.props.value - (r - e));
                  };
                }
              ),
              gt(vt(t), "calculateButtonValue", function () {
                var e = t.props.number || t.props.thumbnails.length;
                return 0 <= t.props.value
                  ? t.props.value
                  : t.props.value + e * Math.ceil(Math.abs(t.props.value / e));
              }),
              t
            );
          }
          return (
            (t = i),
            (e = [
              {
                key: "renderCarouselDots",
                value: function () {
                  var t = this;
                  if (this.props.thumbnails) {
                    var e = isNaN(this.props.number)
                      ? this.props.thumbnails.length
                      : this.props.number;
                    return this.props.thumbnails
                      .slice(0, e)
                      .map(function (n, r) {
                        return o.a.createElement(
                          "li",
                          { key: r },
                          o.a.createElement(
                            "button",
                            {
                              className: b()("BrainhubCarousel__thumbnail", {
                                "BrainhubCarousel__thumbnail--selected":
                                  r === t.calculateButtonValue() % e,
                              }),
                              type: "button",
                              onClick: t.onChange(r),
                            },
                            n
                          )
                        );
                      });
                  }
                  for (var n = [], r = 0; r < this.props.number; r++)
                    n.push(
                      o.a.createElement(
                        "li",
                        { key: r },
                        o.a.createElement(
                          "button",
                          {
                            className: b()("BrainhubCarousel__dot", {
                              "BrainhubCarousel__dot--selected":
                                r ===
                                this.calculateButtonValue() % this.props.number,
                            }),
                            type: "button",
                            onClick: this.onChange(r),
                          },
                          r + 1
                        )
                      )
                    );
                  return n;
                },
              },
              {
                key: "render",
                value: function () {
                  var t = this.props,
                    e = t.className,
                    n = t.rtl;
                  return o.a.createElement(
                    "ul",
                    {
                      className: b()(
                        "BrainhubCarousel__dots",
                        e,
                        n ? "BrainhubCarousel__dots--isRTL" : ""
                      ),
                    },
                    this.renderCarouselDots()
                  );
                },
              },
            ]) && ht(t.prototype, e),
            i
          );
        })();
        function _t(t) {
          return (_t =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        function wt(t) {
          return (
            (function (t) {
              if (Array.isArray(t)) return Ot(t);
            })(t) ||
            (function (t) {
              if ("undefined" != typeof Symbol && Symbol.iterator in Object(t))
                return Array.from(t);
            })(t) ||
            (function (t, e) {
              if (t) {
                if ("string" == typeof t) return Ot(t, e);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                return (
                  "Object" === n && t.constructor && (n = t.constructor.name),
                  "Map" === n || "Set" === n
                    ? Array.from(t)
                    : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? Ot(t, e)
                    : void 0
                );
              }
            })(t) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function Ot(t, e) {
          (null == e || e > t.length) && (e = t.length);
          for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
          return r;
        }
        function St(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, r.key, r);
          }
        }
        function xt(t, e) {
          return (xt =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            })(t, e);
        }
        function Et(t) {
          if (void 0 === t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return t;
        }
        function jt(t) {
          return (jt = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              })(t);
        }
        function Pt(t, e, n) {
          return (
            e in t
              ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = n),
            t
          );
        }
        n(96), n(98);
        var Ct = o.a.createElement("span", null, "prev"),
          Tt = o.a.createElement("span", null, "next"),
          Rt = (function () {
            !(function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                e && xt(t, e);
            })(i, r.Component);
            var t,
              e,
              n = (function (t) {
                var e = (function () {
                  if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                  if (Reflect.construct.sham) return !1;
                  if ("function" == typeof Proxy) return !0;
                  try {
                    return (
                      Date.prototype.toString.call(
                        Reflect.construct(Date, [], function () {})
                      ),
                      !0
                    );
                  } catch (t) {
                    return !1;
                  }
                })();
                return function () {
                  var n,
                    r,
                    o,
                    i = jt(t);
                  return (
                    (r = this),
                    !(o = e
                      ? ((n = jt(this).constructor),
                        Reflect.construct(i, arguments, n))
                      : i.apply(this, arguments)) ||
                    ("object" !== _t(o) && "function" != typeof o)
                      ? Et(r)
                      : o
                  );
                };
              })(i);
            function i(t) {
              var e;
              return (
                (function (t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
                })(this, i),
                Pt(Et((e = n.call(this, t))), "getCurrentValue", function () {
                  return e.props.infinite
                    ? e.props.value
                    : e.clamp(e.props.value);
                }),
                Pt(Et(e), "getNeededAdditionalClones", function () {
                  return Math.ceil(
                    (e.getCurrentValue() - e.state.infiniteTransitionFrom) /
                      e.getChildren().length
                  );
                }),
                Pt(Et(e), "getAdditionalClonesLeft", function () {
                  var t = e.getNeededAdditionalClones();
                  return t < 0 ? -t : 0;
                }),
                Pt(Et(e), "getAdditionalClonesRight", function () {
                  var t = e.getNeededAdditionalClones();
                  return 0 < t ? t : 0;
                }),
                Pt(Et(e), "getClonesLeft", function () {
                  return 3 + e.getAdditionalClonesLeft();
                }),
                Pt(Et(e), "getClonesRight", function () {
                  return 3 + e.getAdditionalClonesRight();
                }),
                Pt(Et(e), "getAdditionalClonesOffset", function () {
                  return (
                    -e.getChildren().length *
                    e.getCarouselElementWidth() *
                    e.getAdditionalClonesLeft()
                  );
                }),
                Pt(Et(e), "getProp", function (t) {
                  var n,
                    r =
                      (1 < arguments.length && void 0 !== arguments[1]
                        ? arguments[1]
                        : null) || e.props,
                    o = null;
                  return (
                    r.breakpoints &&
                      ((n = e.state.windowWidth),
                      Object.keys(r.breakpoints).forEach(function (t) {
                        var e = parseInt(t);
                        n <= e && (!o || e < o) && (o = e);
                      })),
                    o && l()(r.breakpoints[o], t) ? r.breakpoints[o][t] : r[t]
                  );
                }),
                Pt(Et(e), "checkIfValueChanged", function (t) {
                  return (
                    (e.getProp("infinite")
                      ? e.props.value
                      : e.clamp(e.props.value)) !==
                    (e.getProp("infinite") ? t.value : e.clamp(t.value))
                  );
                }),
                Pt(Et(e), "resetInterval", function () {
                  e.interval && clearInterval(e.interval);
                  var t = e.getProp("autoPlay");
                  a()(t) ||
                    (e.interval = setInterval(function () {
                      document.hidden ||
                        e.state.isAutoPlayStopped ||
                        e.nextSlide();
                    }, t));
                }),
                Pt(Et(e), "getChildren", function () {
                  return e.props.children
                    ? Array.isArray(e.props.children)
                      ? e.props.children
                      : [e.props.children]
                    : e.props.slides
                    ? e.props.slides
                    : [];
                }),
                Pt(Et(e), "getActiveSlideIndex", function () {
                  return e.getProp("infinite")
                    ? e.getCurrentSlideIndex() +
                        e.getClonesLeft() * e.getChildren().length
                    : e.getCurrentSlideIndex();
                }),
                Pt(Et(e), "getTargetMod", function () {
                  var t =
                      0 < arguments.length && void 0 !== arguments[0]
                        ? arguments[0]
                        : null,
                    n = a()(t) ? e.getCurrentValue() : t,
                    r = e.getChildren().length,
                    o = 0 <= n ? n % r : (r - Math.abs(n % r)) % r;
                  return o;
                }),
                Pt(Et(e), "getTargetSlide", function () {
                  return a()(e.state.infiniteTransitionFrom)
                    ? e.getTargetMod()
                    : e.getTargetMod(e.state.infiniteTransitionFrom) +
                        (e.getCurrentValue() - e.state.infiniteTransitionFrom);
                }),
                Pt(
                  Et(e),
                  "onResize",
                  s()(function () {
                    var t, n, r;
                    e.node &&
                      ((t = e.arrowLeftNode && e.arrowLeftNode.offsetWidth),
                      (n = e.arrowRightNode && e.arrowRightNode.offsetWidth),
                      (r = e.node.offsetWidth - (t || 0) - (n || 0)),
                      e.setState(function () {
                        return {
                          carouselWidth: r,
                          windowWidth: window.innerWidth,
                        };
                      }));
                  }, 300)
                ),
                Pt(Et(e), "onMouseDown", function (t, n) {
                  var r = t.pageX;
                  e.setState(function () {
                    return { clicked: n, dragStart: r };
                  });
                }),
                Pt(Et(e), "onMouseMove", function (t) {
                  var n = t.pageX;
                  null !== e.state.dragStart &&
                    e.setState(function (t) {
                      return {
                        dragOffset: e.getProp("rtl")
                          ? t.dragStart - n
                          : n - t.dragStart,
                      };
                    });
                }),
                Pt(Et(e), "onTouchStart", function (t, n) {
                  var r = t.changedTouches;
                  e.setState(function () {
                    return { clicked: n, dragStart: r[0].pageX };
                  });
                }),
                Pt(Et(e), "onMouseUpTouchEnd", function (t) {
                  null !== e.state.dragStart &&
                    (e.getProp("draggable") && Math.abs(e.state.dragOffset) > 10
                      ? e.changeSlide(e.getNearestSlideIndex())
                      : e.getProp("clickToChange") &&
                        e.changeSlide(
                          e.getProp("infinite")
                            ? e.getCurrentValue() +
                                e.state.clicked -
                                e.getActiveSlideIndex()
                            : e.state.clicked
                        ),
                    e.setState(function () {
                      return {
                        clicked: null,
                        dragOffset: 0,
                        dragStart: null,
                        transitionEnabled: !0,
                      };
                    }));
                }),
                Pt(Et(e), "onTransitionEnd", function () {
                  var t = e.getProp("infinite");
                  e.setState(function () {
                    return {
                      transitionEnabled: !t,
                      infiniteTransitionFrom: t ? e.getCurrentValue() : null,
                    };
                  });
                }),
                Pt(Et(e), "onMouseEnter", function () {
                  e.setState(function () {
                    return { isAutoPlayStopped: !0 };
                  });
                }),
                Pt(Et(e), "onMouseLeave", function () {
                  e.setState(function () {
                    return { isAutoPlayStopped: !1 };
                  }),
                    e.resetInterval();
                }),
                Pt(Et(e), "simulateEvent", function (t) {
                  var e = t.changedTouches[0],
                    n = e.screenX,
                    r = e.screenY,
                    o = e.clientX,
                    i = e.clientY,
                    a = new MouseEvent(
                      {
                        touchstart: "mousedown",
                        touchmove: "mousemove",
                        touchend: "mouseup",
                      }[t.type],
                      {
                        bubbles: !0,
                        cancelable: !0,
                        view: window,
                        detail: 1,
                        screenX: n,
                        screenY: r,
                        clientX: o,
                        clientY: i,
                      }
                    );
                  e.target.dispatchEvent(a);
                }),
                Pt(Et(e), "clamp", function (t) {
                  var n = e.getChildren().length - 1;
                  return n < t ? n : t < 0 ? 0 : t;
                }),
                Pt(Et(e), "changeSlide", function (t) {
                  return e.props.onChange(
                    e.getProp("infinite") ? t : e.clamp(t)
                  );
                }),
                Pt(Et(e), "nextSlide", function () {
                  return e.changeSlide(
                    e.getCurrentValue() + e.getProp("slidesPerScroll")
                  );
                }),
                Pt(Et(e), "prevSlide", function () {
                  return e.changeSlide(
                    e.getCurrentValue() - e.getProp("slidesPerScroll")
                  );
                }),
                Pt(Et(e), "getNearestSlideIndex", function () {
                  var t = e.getProp("keepDirectionWhenDragging")
                    ? 0 < e.state.dragOffset
                      ? -Math.ceil(
                          e.state.dragOffset / e.getCarouselElementWidth()
                        )
                      : -Math.floor(
                          e.state.dragOffset / e.getCarouselElementWidth()
                        )
                    : -Math.round(
                        e.state.dragOffset / e.getCarouselElementWidth()
                      );
                  return e.getCurrentValue() + t;
                }),
                Pt(Et(e), "getCurrentSlideIndex", function () {
                  return e.getProp("infinite")
                    ? e.getTargetSlide()
                    : e.clamp(e.getCurrentValue());
                }),
                Pt(Et(e), "getCarouselElementWidth", function () {
                  return (
                    e.getProp("itemWidth") ||
                    e.state.carouselWidth / e.getProp("slidesPerPage")
                  );
                }),
                Pt(Et(e), "getTransformOffset", function () {
                  var t = e.getCarouselElementWidth() + e.getProp("offset"),
                    n = e.getProp("centered")
                      ? e.state.carouselWidth / 2 - t / 2
                      : 0;
                  return (
                    (e.getProp("draggable") ? e.state.dragOffset : 0) -
                    e.getActiveSlideIndex() * t +
                    n -
                    e.getAdditionalClonesOffset()
                  );
                }),
                Pt(Et(e), "renderCarouselItems", function () {
                  var t = e.getProp("rtl"),
                    n = e.getTransformOffset(),
                    r = e.getChildren(),
                    i = e.getClonesLeft(),
                    a = e.getClonesRight(),
                    u = 1 + (e.getProp("infinite") ? i + a : 0),
                    c = e.state.carouselWidth * r.length * u,
                    s = e.getProp("animationSpeed"),
                    f = e.state.transitionEnabled,
                    l = e.getProp("draggable") && r && 1 < r.length,
                    p = {
                      width: "".concat(c, "px"),
                      transitionDuration: f
                        ? "".concat(s, "ms, ").concat(s, "ms")
                        : null,
                    };
                  t
                    ? ((p.marginRight = "".concat(
                        e.getAdditionalClonesOffset(),
                        "px"
                      )),
                      (p.transform = "translateX(".concat(-n, "px)")))
                    : ((p.marginLeft = "".concat(
                        e.getAdditionalClonesOffset(),
                        "px"
                      )),
                      (p.transform = "translateX(".concat(n, "px)")));
                  var h,
                    v,
                    g = r;
                  function m(t) {
                    return _ && w ? t : null;
                  }
                  e.getProp("infinite") &&
                    ((h = y()(i, function () {
                      return r;
                    })),
                    (v = y()(a, function () {
                      return r;
                    })),
                    (g = t
                      ? d.a.apply(void 0, wt(v).concat([r], wt(h)))
                      : d.a.apply(void 0, wt(h).concat([r], wt(v)))));
                  var _ = e.getProp("autoPlay"),
                    w = e.getProp("stopAutoPlayOnHover");
                  return o.a.createElement(
                    "div",
                    { className: "BrainhubCarousel__trackContainer" },
                    o.a.createElement(
                      "ul",
                      {
                        className: b()("BrainhubCarousel__track", {
                          "BrainhubCarousel__track--transition": f,
                          "BrainhubCarousel__track--draggable": l,
                        }),
                        style: p,
                        ref: function (t) {
                          return (e.trackRef = t);
                        },
                        onMouseEnter: m(e.onMouseEnter),
                        onMouseLeave: m(e.onMouseLeave),
                      },
                      g.map(function (t, n) {
                        return [null, void 0].includes(t)
                          ? null
                          : o.a.createElement(
                              pt,
                              {
                                key: n,
                                currentSlideIndex: e.getActiveSlideIndex(),
                                index: n,
                                width: e.getCarouselElementWidth(),
                                offset: n !== g.length ? e.props.offset : 0,
                                onMouseDown: e.onMouseDown,
                                onTouchStart: e.onTouchStart,
                                clickable: e.getProp("clickToChange"),
                                isDragging:
                                  Math.abs(e.state.dragOffset) >
                                  e.props.minDraggableOffset,
                                isDraggingEnabled:
                                  e.props.draggable || e.props.clickToChange,
                              },
                              t
                            );
                      })
                    )
                  );
                }),
                Pt(Et(e), "renderArrowWithAddedHandler", function (t, n, r) {
                  var i =
                    3 < arguments.length &&
                    void 0 !== arguments[3] &&
                    arguments[3];
                  return o.a.createElement(
                    "div",
                    {
                      className: b()(
                        "BrainhubCarousel__customArrows",
                        { "BrainhubCarousel__arrow--disable": i },
                        "BrainhubCarousel__custom-".concat(r)
                      ),
                      ref: function (t) {
                        return (e["".concat(r, "Node")] = t);
                      },
                      onClick: e.getProp("addArrowClickHandler") ? n : null,
                    },
                    t
                  );
                }),
                Pt(Et(e), "renderArrowLeft", function () {
                  var t = e.getCurrentValue() <= 0 && !e.getProp("infinite");
                  if (e.getProp("arrowLeft")) {
                    if (!t)
                      return e.renderArrowWithAddedHandler(
                        e.getProp("arrowLeft"),
                        e.prevSlide,
                        "arrowLeft"
                      );
                    var n = e.getProp("arrowLeftDisabled")
                      ? e.getProp("arrowLeftDisabled")
                      : e.getProp("arrowLeft");
                    return e.renderArrowWithAddedHandler(
                      n,
                      e.prevSlide,
                      "arrowLeft",
                      t
                    );
                  }
                  return e.getProp("arrows")
                    ? o.a.createElement(
                        "button",
                        {
                          className:
                            "BrainhubCarousel__arrows BrainhubCarousel__arrowLeft",
                          onClick: e.prevSlide,
                          ref: function (t) {
                            return (e.arrowLeftNode = t);
                          },
                          disabled: t,
                        },
                        Ct
                      )
                    : null;
                }),
                Pt(Et(e), "renderArrowRight", function () {
                  var t = e.getChildren(),
                    n =
                      e.getCurrentValue() === t.length - 1 &&
                      !e.getProp("infinite");
                  if (e.getProp("arrowRight")) {
                    if (!n)
                      return e.renderArrowWithAddedHandler(
                        e.getProp("arrowRight"),
                        e.nextSlide,
                        "arrowRight"
                      );
                    var r = e.getProp("arrowRightDisabled")
                      ? e.getProp("arrowRightDisabled")
                      : e.getProp("arrowRight");
                    return e.renderArrowWithAddedHandler(
                      r,
                      e.nextSlide,
                      "arrowRight",
                      n
                    );
                  }
                  return e.getProp("arrows")
                    ? o.a.createElement(
                        "button",
                        {
                          className:
                            "BrainhubCarousel__arrows BrainhubCarousel__arrowRight",
                          onClick: e.nextSlide,
                          ref: function (t) {
                            return (e.arrowRightNode = t);
                          },
                          disabled: n,
                        },
                        Tt
                      )
                    : null;
                }),
                (e.state = {
                  carouselWidth: 0,
                  windowWidth: 0,
                  clicked: null,
                  dragOffset: 0,
                  dragStart: null,
                  transitionEnabled: !1,
                  infiniteTransitionFrom: t.infinite ? t.value : null,
                  isAutoPlayStopped: !1,
                }),
                (e.interval = null),
                e
              );
            }
            return (
              (t = i),
              (e = [
                {
                  key: "componentDidMount",
                  value: function () {
                    this.trackRef &&
                      this.trackRef.addEventListener(
                        "transitionend",
                        this.onTransitionEnd
                      ),
                      this.node &&
                        (this.node.parentElement.addEventListener(
                          "mousemove",
                          this.onMouseMove,
                          !0
                        ),
                        document.addEventListener(
                          "mouseup",
                          this.onMouseUpTouchEnd,
                          !0
                        ),
                        this.node.parentElement.addEventListener(
                          "touchstart",
                          this.simulateEvent,
                          !0
                        ),
                        this.node.parentElement.addEventListener(
                          "touchmove",
                          this.simulateEvent,
                          { passive: !1 }
                        ),
                        this.node.parentElement.addEventListener(
                          "touchend",
                          this.simulateEvent,
                          !0
                        )),
                      this.onResize(),
                      this.resetInterval();
                  },
                },
                {
                  key: "componentDidUpdate",
                  value: function (t) {
                    var e = this.checkIfValueChanged(t);
                    (this.getProp("autoPlay") === this.getProp("autoPlay", t) &&
                      !e) ||
                      this.resetInterval(),
                      e && this.setState({ transitionEnabled: !0 });
                  },
                },
                {
                  key: "componentWillUnmount",
                  value: function () {
                    this.trackRef &&
                      this.trackRef.removeEventListener(
                        "transitionend",
                        this.onTransitionEnd
                      ),
                      this.node &&
                        (this.node.parentElement.removeEventListener(
                          "mousemove",
                          this.onMouseMove
                        ),
                        document.removeEventListener(
                          "mouseup",
                          this.onMouseUpTouchEnd
                        ),
                        this.node.parentElement.removeEventListener(
                          "touchstart",
                          this.simulateEvent
                        ),
                        this.node.parentElement.removeEventListener(
                          "touchmove",
                          this.simulateEvent
                        ),
                        this.node.parentElement.removeEventListener(
                          "touchend",
                          this.simulateEvent
                        )),
                      this.interval && clearInterval(this.interval);
                  },
                },
                {
                  key: "renderDots",
                  value: function () {
                    return this.getProp("dots")
                      ? o.a.createElement(mt, {
                          value: this.getCurrentValue(),
                          onChange: this.changeSlide,
                          number: this.getChildren().length,
                          rtl: this.getProp("rtl"),
                        })
                      : null;
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var t = this,
                      e = this.getProp("rtl");
                    return o.a.createElement(
                      "div",
                      { className: "BrainhubCarousel__container" },
                      o.a.createElement(
                        "div",
                        {
                          className: b()(
                            "BrainhubCarousel",
                            this.getProp("className"),
                            e ? "BrainhubCarousel--isRTL" : ""
                          ),
                          ref: function (e) {
                            return (t.node = e);
                          },
                        },
                        o.a.createElement(
                          it,
                          { handleWidth: !0, onResize: this.onResize },
                          o.a.createElement(this.renderArrowLeft, {
                            key: "arrow-left",
                          }),
                          o.a.createElement(this.renderCarouselItems, {
                            key: "carousel",
                          }),
                          o.a.createElement(this.renderArrowRight, {
                            key: "arrow-right",
                          })
                        )
                      ),
                      this.renderDots()
                    );
                  },
                },
              ]) && St(t.prototype, e),
              i
            );
          })();
        Pt(Rt, "defaultProps", {
          offset: 0,
          slidesPerPage: 1,
          slidesPerScroll: 1,
          animationSpeed: 500,
          draggable: !0,
          rtl: !1,
          minDraggableOffset: 10,
        });
        var kt = Rt;
        function At(t) {
          return (At =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        function Mt() {
          return (Mt =
            Object.assign ||
            function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
              }
              return t;
            }).apply(this, arguments);
        }
        function $t(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, r.key, r);
          }
        }
        function It(t, e) {
          return (It =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            })(t, e);
        }
        function Dt(t) {
          if (void 0 === t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return t;
        }
        function Wt(t) {
          return (Wt = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              })(t);
        }
        var Lt = (function () {
            !(function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                e && It(t, e);
            })(i, r.Component);
            var t,
              e,
              n = (function (t) {
                var e = (function () {
                  if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                  if (Reflect.construct.sham) return !1;
                  if ("function" == typeof Proxy) return !0;
                  try {
                    return (
                      Date.prototype.toString.call(
                        Reflect.construct(Date, [], function () {})
                      ),
                      !0
                    );
                  } catch (t) {
                    return !1;
                  }
                })();
                return function () {
                  var n,
                    r,
                    o,
                    i = Wt(t);
                  return (
                    (r = this),
                    !(o = e
                      ? ((n = Wt(this).constructor),
                        Reflect.construct(i, arguments, n))
                      : i.apply(this, arguments)) ||
                    ("object" !== At(o) && "function" != typeof o)
                      ? Dt(r)
                      : o
                  );
                };
              })(i);
            function i(t) {
              var e, r, o, u;
              return (
                (function (t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
                })(this, i),
                (u = function (t) {
                  return function (n) {
                    e.setState({ value: n }), a()(t) || t(n);
                  };
                }),
                (o = "onChange") in (r = Dt((e = n.call(this, t))))
                  ? Object.defineProperty(r, o, {
                      value: u,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (r[o] = u),
                (e.state = { value: 0 }),
                e
              );
            }
            return (
              (t = i),
              (e = [
                {
                  key: "render",
                  value: function () {
                    var t = this.props,
                      e = t.value,
                      n = t.onChange,
                      r = (function (t, e) {
                        if (null == t) return {};
                        var n,
                          r = (function (t, e) {
                            if (null == t) return {};
                            var n,
                              r,
                              o = {},
                              i = Object.keys(t);
                            for (r = 0; r < i.length; r++)
                              (n = i[r]), 0 <= e.indexOf(n) || (o[n] = t[n]);
                            return o;
                          })(t, e);
                        if (Object.getOwnPropertySymbols)
                          for (
                            var o = Object.getOwnPropertySymbols(t), i = 0;
                            i < o.length;
                            i++
                          )
                            (n = o[i]),
                              0 <= e.indexOf(n) ||
                                (Object.prototype.propertyIsEnumerable.call(
                                  t,
                                  n
                                ) &&
                                  (r[n] = t[n]));
                        return r;
                      })(t, ["value", "onChange"]),
                      i = !a()(e);
                    return o.a.createElement(
                      kt,
                      Mt(
                        {
                          value: i ? parseInt(e) : this.state.value,
                          onChange: i ? n : this.onChange(n),
                        },
                        r
                      )
                    );
                  },
                },
              ]) && $t(t.prototype, e),
              i
            );
          })(),
          zt = mt;
        e.default = Lt;
      },
      function (t, e) {},
      ,
      ,
      ,
      function (t, e) {},
      ,
      function (t, e) {},
      ,
      function (t, e) {},
    ]),
    (n.c = o),
    (n.d = function (t, e, r) {
      n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r });
    }),
    (n.r = function (t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (n.t = function (t, e) {
      if ((1 & e && (t = n(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var o in t)
          n.d(
            r,
            o,
            function (e) {
              return t[e];
            }.bind(null, o)
          );
      return r;
    }),
    (n.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return n.d(e, "a", e), e;
    }),
    (n.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (n.p = ""),
    n((n.s = 89))
  );
  function n(t) {
    if (o[t]) return o[t].exports;
    var e = (o[t] = { i: t, l: !1, exports: {} });
    return r[t].call(e.exports, e, e.exports, n), (e.l = !0), e.exports;
  }
  var r, o;
});
