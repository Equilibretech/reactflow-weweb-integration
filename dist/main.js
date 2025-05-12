var wr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function yc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Er = { exports: {} }, Yt = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rf;
function R_() {
  if (rf) return Yt;
  rf = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function r(n, i, a) {
    var o = null;
    if (a !== void 0 && (o = "" + a), i.key !== void 0 && (o = "" + i.key), "key" in i) {
      a = {};
      for (var s in i)
        s !== "key" && (a[s] = i[s]);
    } else a = i;
    return i = a.ref, {
      $$typeof: e,
      type: n,
      key: o,
      ref: i !== void 0 ? i : null,
      props: a
    };
  }
  return Yt.Fragment = t, Yt.jsx = r, Yt.jsxs = r, Yt;
}
var Kt = {}, Sr = { exports: {} }, oe = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nf;
function T_() {
  if (nf) return oe;
  nf = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.consumer"), o = Symbol.for("react.context"), s = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), u = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), l = Symbol.iterator;
  function d(g) {
    return g === null || typeof g != "object" ? null : (g = l && g[l] || g["@@iterator"], typeof g == "function" ? g : null);
  }
  var h = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, m = Object.assign, p = {};
  function v(g, C, L) {
    this.props = g, this.context = C, this.refs = p, this.updater = L || h;
  }
  v.prototype.isReactComponent = {}, v.prototype.setState = function(g, C) {
    if (typeof g != "object" && typeof g != "function" && g != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, g, C, "setState");
  }, v.prototype.forceUpdate = function(g) {
    this.updater.enqueueForceUpdate(this, g, "forceUpdate");
  };
  function y() {
  }
  y.prototype = v.prototype;
  function b(g, C, L) {
    this.props = g, this.context = C, this.refs = p, this.updater = L || h;
  }
  var E = b.prototype = new y();
  E.constructor = b, m(E, v.prototype), E.isPureReactComponent = !0;
  var w = Array.isArray, x = { H: null, A: null, T: null, S: null, V: null }, R = Object.prototype.hasOwnProperty;
  function T(g, C, L, H, A, I) {
    return L = I.ref, {
      $$typeof: e,
      type: g,
      key: C,
      ref: L !== void 0 ? L : null,
      props: I
    };
  }
  function N(g, C) {
    return T(
      g.type,
      C,
      void 0,
      void 0,
      void 0,
      g.props
    );
  }
  function O(g) {
    return typeof g == "object" && g !== null && g.$$typeof === e;
  }
  function k(g) {
    var C = { "=": "=0", ":": "=2" };
    return "$" + g.replace(/[=:]/g, function(L) {
      return C[L];
    });
  }
  var q = /\/+/g;
  function j(g, C) {
    return typeof g == "object" && g !== null && g.key != null ? k("" + g.key) : C.toString(36);
  }
  function B() {
  }
  function S(g) {
    switch (g.status) {
      case "fulfilled":
        return g.value;
      case "rejected":
        throw g.reason;
      default:
        switch (typeof g.status == "string" ? g.then(B, B) : (g.status = "pending", g.then(
          function(C) {
            g.status === "pending" && (g.status = "fulfilled", g.value = C);
          },
          function(C) {
            g.status === "pending" && (g.status = "rejected", g.reason = C);
          }
        )), g.status) {
          case "fulfilled":
            return g.value;
          case "rejected":
            throw g.reason;
        }
    }
    throw g;
  }
  function P(g, C, L, H, A) {
    var I = typeof g;
    (I === "undefined" || I === "boolean") && (g = null);
    var $ = !1;
    if (g === null) $ = !0;
    else
      switch (I) {
        case "bigint":
        case "string":
        case "number":
          $ = !0;
          break;
        case "object":
          switch (g.$$typeof) {
            case e:
            case t:
              $ = !0;
              break;
            case f:
              return $ = g._init, P(
                $(g._payload),
                C,
                L,
                H,
                A
              );
          }
      }
    if ($)
      return A = A(g), $ = H === "" ? "." + j(g, 0) : H, w(A) ? (L = "", $ != null && (L = $.replace(q, "$&/") + "/"), P(A, C, L, "", function(J) {
        return J;
      })) : A != null && (O(A) && (A = N(
        A,
        L + (A.key == null || g && g.key === A.key ? "" : ("" + A.key).replace(
          q,
          "$&/"
        ) + "/") + $
      )), C.push(A)), 1;
    $ = 0;
    var U = H === "" ? "." : H + ":";
    if (w(g))
      for (var Y = 0; Y < g.length; Y++)
        H = g[Y], I = U + j(H, Y), $ += P(
          H,
          C,
          L,
          I,
          A
        );
    else if (Y = d(g), typeof Y == "function")
      for (g = Y.call(g), Y = 0; !(H = g.next()).done; )
        H = H.value, I = U + j(H, Y++), $ += P(
          H,
          C,
          L,
          I,
          A
        );
    else if (I === "object") {
      if (typeof g.then == "function")
        return P(
          S(g),
          C,
          L,
          H,
          A
        );
      throw C = String(g), Error(
        "Objects are not valid as a React child (found: " + (C === "[object Object]" ? "object with keys {" + Object.keys(g).join(", ") + "}" : C) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return $;
  }
  function M(g, C, L) {
    if (g == null) return g;
    var H = [], A = 0;
    return P(g, H, "", "", function(I) {
      return C.call(L, I, A++);
    }), H;
  }
  function G(g) {
    if (g._status === -1) {
      var C = g._result;
      C = C(), C.then(
        function(L) {
          (g._status === 0 || g._status === -1) && (g._status = 1, g._result = L);
        },
        function(L) {
          (g._status === 0 || g._status === -1) && (g._status = 2, g._result = L);
        }
      ), g._status === -1 && (g._status = 0, g._result = C);
    }
    if (g._status === 1) return g._result.default;
    throw g._result;
  }
  var V = typeof reportError == "function" ? reportError : function(g) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var C = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof g == "object" && g !== null && typeof g.message == "string" ? String(g.message) : String(g),
        error: g
      });
      if (!window.dispatchEvent(C)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", g);
      return;
    }
    console.error(g);
  };
  function F() {
  }
  return oe.Children = {
    map: M,
    forEach: function(g, C, L) {
      M(
        g,
        function() {
          C.apply(this, arguments);
        },
        L
      );
    },
    count: function(g) {
      var C = 0;
      return M(g, function() {
        C++;
      }), C;
    },
    toArray: function(g) {
      return M(g, function(C) {
        return C;
      }) || [];
    },
    only: function(g) {
      if (!O(g))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return g;
    }
  }, oe.Component = v, oe.Fragment = r, oe.Profiler = i, oe.PureComponent = b, oe.StrictMode = n, oe.Suspense = c, oe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = x, oe.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(g) {
      return x.H.useMemoCache(g);
    }
  }, oe.cache = function(g) {
    return function() {
      return g.apply(null, arguments);
    };
  }, oe.cloneElement = function(g, C, L) {
    if (g == null)
      throw Error(
        "The argument must be a React element, but you passed " + g + "."
      );
    var H = m({}, g.props), A = g.key, I = void 0;
    if (C != null)
      for ($ in C.ref !== void 0 && (I = void 0), C.key !== void 0 && (A = "" + C.key), C)
        !R.call(C, $) || $ === "key" || $ === "__self" || $ === "__source" || $ === "ref" && C.ref === void 0 || (H[$] = C[$]);
    var $ = arguments.length - 2;
    if ($ === 1) H.children = L;
    else if (1 < $) {
      for (var U = Array($), Y = 0; Y < $; Y++)
        U[Y] = arguments[Y + 2];
      H.children = U;
    }
    return T(g.type, A, void 0, void 0, I, H);
  }, oe.createContext = function(g) {
    return g = {
      $$typeof: o,
      _currentValue: g,
      _currentValue2: g,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, g.Provider = g, g.Consumer = {
      $$typeof: a,
      _context: g
    }, g;
  }, oe.createElement = function(g, C, L) {
    var H, A = {}, I = null;
    if (C != null)
      for (H in C.key !== void 0 && (I = "" + C.key), C)
        R.call(C, H) && H !== "key" && H !== "__self" && H !== "__source" && (A[H] = C[H]);
    var $ = arguments.length - 2;
    if ($ === 1) A.children = L;
    else if (1 < $) {
      for (var U = Array($), Y = 0; Y < $; Y++)
        U[Y] = arguments[Y + 2];
      A.children = U;
    }
    if (g && g.defaultProps)
      for (H in $ = g.defaultProps, $)
        A[H] === void 0 && (A[H] = $[H]);
    return T(g, I, void 0, void 0, null, A);
  }, oe.createRef = function() {
    return { current: null };
  }, oe.forwardRef = function(g) {
    return { $$typeof: s, render: g };
  }, oe.isValidElement = O, oe.lazy = function(g) {
    return {
      $$typeof: f,
      _payload: { _status: -1, _result: g },
      _init: G
    };
  }, oe.memo = function(g, C) {
    return {
      $$typeof: u,
      type: g,
      compare: C === void 0 ? null : C
    };
  }, oe.startTransition = function(g) {
    var C = x.T, L = {};
    x.T = L;
    try {
      var H = g(), A = x.S;
      A !== null && A(L, H), typeof H == "object" && H !== null && typeof H.then == "function" && H.then(F, V);
    } catch (I) {
      V(I);
    } finally {
      x.T = C;
    }
  }, oe.unstable_useCacheRefresh = function() {
    return x.H.useCacheRefresh();
  }, oe.use = function(g) {
    return x.H.use(g);
  }, oe.useActionState = function(g, C, L) {
    return x.H.useActionState(g, C, L);
  }, oe.useCallback = function(g, C) {
    return x.H.useCallback(g, C);
  }, oe.useContext = function(g) {
    return x.H.useContext(g);
  }, oe.useDebugValue = function() {
  }, oe.useDeferredValue = function(g, C) {
    return x.H.useDeferredValue(g, C);
  }, oe.useEffect = function(g, C, L) {
    var H = x.H;
    if (typeof L == "function")
      throw Error(
        "useEffect CRUD overload is not enabled in this build of React."
      );
    return H.useEffect(g, C);
  }, oe.useId = function() {
    return x.H.useId();
  }, oe.useImperativeHandle = function(g, C, L) {
    return x.H.useImperativeHandle(g, C, L);
  }, oe.useInsertionEffect = function(g, C) {
    return x.H.useInsertionEffect(g, C);
  }, oe.useLayoutEffect = function(g, C) {
    return x.H.useLayoutEffect(g, C);
  }, oe.useMemo = function(g, C) {
    return x.H.useMemo(g, C);
  }, oe.useOptimistic = function(g, C) {
    return x.H.useOptimistic(g, C);
  }, oe.useReducer = function(g, C, L) {
    return x.H.useReducer(g, C, L);
  }, oe.useRef = function(g) {
    return x.H.useRef(g);
  }, oe.useState = function(g) {
    return x.H.useState(g);
  }, oe.useSyncExternalStore = function(g, C, L) {
    return x.H.useSyncExternalStore(
      g,
      C,
      L
    );
  }, oe.useTransition = function() {
    return x.H.useTransition();
  }, oe.version = "19.1.0", oe;
}
var er = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
er.exports;
var af;
function A_() {
  return af || (af = 1, function(e, t) {
    process.env.NODE_ENV !== "production" && function() {
      function r(_, D) {
        Object.defineProperty(a.prototype, _, {
          get: function() {
            console.warn(
              "%s(...) is deprecated in plain JavaScript React classes. %s",
              D[0],
              D[1]
            );
          }
        });
      }
      function n(_) {
        return _ === null || typeof _ != "object" ? null : (_ = le && _[le] || _["@@iterator"], typeof _ == "function" ? _ : null);
      }
      function i(_, D) {
        _ = (_ = _.constructor) && (_.displayName || _.name) || "ReactClass";
        var W = _ + "." + D;
        Ee[W] || (console.error(
          "Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",
          D,
          _
        ), Ee[W] = !0);
      }
      function a(_, D, W) {
        this.props = _, this.context = D, this.refs = te, this.updater = W || pe;
      }
      function o() {
      }
      function s(_, D, W) {
        this.props = _, this.context = D, this.refs = te, this.updater = W || pe;
      }
      function c(_) {
        return "" + _;
      }
      function u(_) {
        try {
          c(_);
          var D = !1;
        } catch {
          D = !0;
        }
        if (D) {
          D = console;
          var W = D.error, X = typeof Symbol == "function" && Symbol.toStringTag && _[Symbol.toStringTag] || _.constructor.name || "Object";
          return W.call(
            D,
            "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
            X
          ), c(_);
        }
      }
      function f(_) {
        if (_ == null) return null;
        if (typeof _ == "function")
          return _.$$typeof === ye ? null : _.displayName || _.name || null;
        if (typeof _ == "string") return _;
        switch (_) {
          case g:
            return "Fragment";
          case L:
            return "Profiler";
          case C:
            return "StrictMode";
          case $:
            return "Suspense";
          case U:
            return "SuspenseList";
          case ne:
            return "Activity";
        }
        if (typeof _ == "object")
          switch (typeof _.tag == "number" && console.error(
            "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
          ), _.$$typeof) {
            case F:
              return "Portal";
            case A:
              return (_.displayName || "Context") + ".Provider";
            case H:
              return (_._context.displayName || "Context") + ".Consumer";
            case I:
              var D = _.render;
              return _ = _.displayName, _ || (_ = D.displayName || D.name || "", _ = _ !== "" ? "ForwardRef(" + _ + ")" : "ForwardRef"), _;
            case Y:
              return D = _.displayName || null, D !== null ? D : f(_.type) || "Memo";
            case J:
              D = _._payload, _ = _._init;
              try {
                return f(_(D));
              } catch {
              }
          }
        return null;
      }
      function l(_) {
        if (_ === g) return "<>";
        if (typeof _ == "object" && _ !== null && _.$$typeof === J)
          return "<...>";
        try {
          var D = f(_);
          return D ? "<" + D + ">" : "<...>";
        } catch {
          return "<...>";
        }
      }
      function d() {
        var _ = ae.A;
        return _ === null ? null : _.getOwner();
      }
      function h() {
        return Error("react-stack-top-frame");
      }
      function m(_) {
        if (Ie.call(_, "key")) {
          var D = Object.getOwnPropertyDescriptor(_, "key").get;
          if (D && D.isReactWarning) return !1;
        }
        return _.key !== void 0;
      }
      function p(_, D) {
        function W() {
          ge || (ge = !0, console.error(
            "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
            D
          ));
        }
        W.isReactWarning = !0, Object.defineProperty(_, "key", {
          get: W,
          configurable: !0
        });
      }
      function v() {
        var _ = f(this.type);
        return Pe[_] || (Pe[_] = !0, console.error(
          "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
        )), _ = this.props.ref, _ !== void 0 ? _ : null;
      }
      function y(_, D, W, X, ee, se, ie, he) {
        return W = se.ref, _ = {
          $$typeof: V,
          type: _,
          key: D,
          props: se,
          _owner: ee
        }, (W !== void 0 ? W : null) !== null ? Object.defineProperty(_, "ref", {
          enumerable: !1,
          get: v
        }) : Object.defineProperty(_, "ref", { enumerable: !1, value: null }), _._store = {}, Object.defineProperty(_._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: 0
        }), Object.defineProperty(_, "_debugInfo", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: null
        }), Object.defineProperty(_, "_debugStack", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: ie
        }), Object.defineProperty(_, "_debugTask", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: he
        }), Object.freeze && (Object.freeze(_.props), Object.freeze(_)), _;
      }
      function b(_, D) {
        return D = y(
          _.type,
          D,
          void 0,
          void 0,
          _._owner,
          _.props,
          _._debugStack,
          _._debugTask
        ), _._store && (D._store.validated = _._store.validated), D;
      }
      function E(_) {
        return typeof _ == "object" && _ !== null && _.$$typeof === V;
      }
      function w(_) {
        var D = { "=": "=0", ":": "=2" };
        return "$" + _.replace(/[=:]/g, function(W) {
          return D[W];
        });
      }
      function x(_, D) {
        return typeof _ == "object" && _ !== null && _.key != null ? (u(_.key), w("" + _.key)) : D.toString(36);
      }
      function R() {
      }
      function T(_) {
        switch (_.status) {
          case "fulfilled":
            return _.value;
          case "rejected":
            throw _.reason;
          default:
            switch (typeof _.status == "string" ? _.then(R, R) : (_.status = "pending", _.then(
              function(D) {
                _.status === "pending" && (_.status = "fulfilled", _.value = D);
              },
              function(D) {
                _.status === "pending" && (_.status = "rejected", _.reason = D);
              }
            )), _.status) {
              case "fulfilled":
                return _.value;
              case "rejected":
                throw _.reason;
            }
        }
        throw _;
      }
      function N(_, D, W, X, ee) {
        var se = typeof _;
        (se === "undefined" || se === "boolean") && (_ = null);
        var ie = !1;
        if (_ === null) ie = !0;
        else
          switch (se) {
            case "bigint":
            case "string":
            case "number":
              ie = !0;
              break;
            case "object":
              switch (_.$$typeof) {
                case V:
                case F:
                  ie = !0;
                  break;
                case J:
                  return ie = _._init, N(
                    ie(_._payload),
                    D,
                    W,
                    X,
                    ee
                  );
              }
          }
        if (ie) {
          ie = _, ee = ee(ie);
          var he = X === "" ? "." + x(ie, 0) : X;
          return Q(ee) ? (W = "", he != null && (W = he.replace(Fe, "$&/") + "/"), N(ee, D, W, "", function(et) {
            return et;
          })) : ee != null && (E(ee) && (ee.key != null && (ie && ie.key === ee.key || u(ee.key)), W = b(
            ee,
            W + (ee.key == null || ie && ie.key === ee.key ? "" : ("" + ee.key).replace(
              Fe,
              "$&/"
            ) + "/") + he
          ), X !== "" && ie != null && E(ie) && ie.key == null && ie._store && !ie._store.validated && (W._store.validated = 2), ee = W), D.push(ee)), 1;
        }
        if (ie = 0, he = X === "" ? "." : X + ":", Q(_))
          for (var ue = 0; ue < _.length; ue++)
            X = _[ue], se = he + x(X, ue), ie += N(
              X,
              D,
              W,
              se,
              ee
            );
        else if (ue = n(_), typeof ue == "function")
          for (ue === _.entries && (Oe || console.warn(
            "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
          ), Oe = !0), _ = ue.call(_), ue = 0; !(X = _.next()).done; )
            X = X.value, se = he + x(X, ue++), ie += N(
              X,
              D,
              W,
              se,
              ee
            );
        else if (se === "object") {
          if (typeof _.then == "function")
            return N(
              T(_),
              D,
              W,
              X,
              ee
            );
          throw D = String(_), Error(
            "Objects are not valid as a React child (found: " + (D === "[object Object]" ? "object with keys {" + Object.keys(_).join(", ") + "}" : D) + "). If you meant to render a collection of children, use an array instead."
          );
        }
        return ie;
      }
      function O(_, D, W) {
        if (_ == null) return _;
        var X = [], ee = 0;
        return N(_, X, "", "", function(se) {
          return D.call(W, se, ee++);
        }), X;
      }
      function k(_) {
        if (_._status === -1) {
          var D = _._result;
          D = D(), D.then(
            function(W) {
              (_._status === 0 || _._status === -1) && (_._status = 1, _._result = W);
            },
            function(W) {
              (_._status === 0 || _._status === -1) && (_._status = 2, _._result = W);
            }
          ), _._status === -1 && (_._status = 0, _._result = D);
        }
        if (_._status === 1)
          return D = _._result, D === void 0 && console.error(
            `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`,
            D
          ), "default" in D || console.error(
            `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`,
            D
          ), D.default;
        throw _._result;
      }
      function q() {
        var _ = ae.H;
        return _ === null && console.error(
          `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
        ), _;
      }
      function j() {
      }
      function B(_) {
        if (Re === null)
          try {
            var D = ("require" + Math.random()).slice(0, 7);
            Re = (e && e[D]).call(
              e,
              "timers"
            ).setImmediate;
          } catch {
            Re = function(X) {
              _e === !1 && (_e = !0, typeof MessageChannel > "u" && console.error(
                "This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."
              ));
              var ee = new MessageChannel();
              ee.port1.onmessage = X, ee.port2.postMessage(void 0);
            };
          }
        return Re(_);
      }
      function S(_) {
        return 1 < _.length && typeof AggregateError == "function" ? new AggregateError(_) : _[0];
      }
      function P(_, D) {
        D !== be - 1 && console.error(
          "You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "
        ), be = D;
      }
      function M(_, D, W) {
        var X = ae.actQueue;
        if (X !== null)
          if (X.length !== 0)
            try {
              G(X), B(function() {
                return M(_, D, W);
              });
              return;
            } catch (ee) {
              ae.thrownErrors.push(ee);
            }
          else ae.actQueue = null;
        0 < ae.thrownErrors.length ? (X = S(ae.thrownErrors), ae.thrownErrors.length = 0, W(X)) : D(_);
      }
      function G(_) {
        if (!Ye) {
          Ye = !0;
          var D = 0;
          try {
            for (; D < _.length; D++) {
              var W = _[D];
              do {
                ae.didUsePromise = !1;
                var X = W(!1);
                if (X !== null) {
                  if (ae.didUsePromise) {
                    _[D] = W, _.splice(0, D);
                    return;
                  }
                  W = X;
                } else break;
              } while (!0);
            }
            _.length = 0;
          } catch (ee) {
            _.splice(0, D + 1), ae.thrownErrors.push(ee);
          } finally {
            Ye = !1;
          }
        }
      }
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
      var V = Symbol.for("react.transitional.element"), F = Symbol.for("react.portal"), g = Symbol.for("react.fragment"), C = Symbol.for("react.strict_mode"), L = Symbol.for("react.profiler"), H = Symbol.for("react.consumer"), A = Symbol.for("react.context"), I = Symbol.for("react.forward_ref"), $ = Symbol.for("react.suspense"), U = Symbol.for("react.suspense_list"), Y = Symbol.for("react.memo"), J = Symbol.for("react.lazy"), ne = Symbol.for("react.activity"), le = Symbol.iterator, Ee = {}, pe = {
        isMounted: function() {
          return !1;
        },
        enqueueForceUpdate: function(_) {
          i(_, "forceUpdate");
        },
        enqueueReplaceState: function(_) {
          i(_, "replaceState");
        },
        enqueueSetState: function(_) {
          i(_, "setState");
        }
      }, fe = Object.assign, te = {};
      Object.freeze(te), a.prototype.isReactComponent = {}, a.prototype.setState = function(_, D) {
        if (typeof _ != "object" && typeof _ != "function" && _ != null)
          throw Error(
            "takes an object of state variables to update or a function which returns an object of state variables."
          );
        this.updater.enqueueSetState(this, _, D, "setState");
      }, a.prototype.forceUpdate = function(_) {
        this.updater.enqueueForceUpdate(this, _, "forceUpdate");
      };
      var de = {
        isMounted: [
          "isMounted",
          "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."
        ],
        replaceState: [
          "replaceState",
          "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."
        ]
      }, Z;
      for (Z in de)
        de.hasOwnProperty(Z) && r(Z, de[Z]);
      o.prototype = a.prototype, de = s.prototype = new o(), de.constructor = s, fe(de, a.prototype), de.isPureReactComponent = !0;
      var Q = Array.isArray, ye = Symbol.for("react.client.reference"), ae = {
        H: null,
        A: null,
        T: null,
        S: null,
        V: null,
        actQueue: null,
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1,
        didUsePromise: !1,
        thrownErrors: [],
        getCurrentStack: null,
        recentlyCreatedOwnerStacks: 0
      }, Ie = Object.prototype.hasOwnProperty, Te = console.createTask ? console.createTask : function() {
        return null;
      };
      de = {
        "react-stack-bottom-frame": function(_) {
          return _();
        }
      };
      var ge, Ae, Pe = {}, Ue = de["react-stack-bottom-frame"].bind(de, h)(), $e = Te(l(h)), Oe = !1, Fe = /\/+/g, Ve = typeof reportError == "function" ? reportError : function(_) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
          var D = new window.ErrorEvent("error", {
            bubbles: !0,
            cancelable: !0,
            message: typeof _ == "object" && _ !== null && typeof _.message == "string" ? String(_.message) : String(_),
            error: _
          });
          if (!window.dispatchEvent(D)) return;
        } else if (typeof process == "object" && typeof process.emit == "function") {
          process.emit("uncaughtException", _);
          return;
        }
        console.error(_);
      }, _e = !1, Re = null, be = 0, Se = !1, Ye = !1, Be = typeof queueMicrotask == "function" ? function(_) {
        queueMicrotask(function() {
          return queueMicrotask(_);
        });
      } : B;
      de = Object.freeze({
        __proto__: null,
        c: function(_) {
          return q().useMemoCache(_);
        }
      }), t.Children = {
        map: O,
        forEach: function(_, D, W) {
          O(
            _,
            function() {
              D.apply(this, arguments);
            },
            W
          );
        },
        count: function(_) {
          var D = 0;
          return O(_, function() {
            D++;
          }), D;
        },
        toArray: function(_) {
          return O(_, function(D) {
            return D;
          }) || [];
        },
        only: function(_) {
          if (!E(_))
            throw Error(
              "React.Children.only expected to receive a single React element child."
            );
          return _;
        }
      }, t.Component = a, t.Fragment = g, t.Profiler = L, t.PureComponent = s, t.StrictMode = C, t.Suspense = $, t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ae, t.__COMPILER_RUNTIME = de, t.act = function(_) {
        var D = ae.actQueue, W = be;
        be++;
        var X = ae.actQueue = D !== null ? D : [], ee = !1;
        try {
          var se = _();
        } catch (ue) {
          ae.thrownErrors.push(ue);
        }
        if (0 < ae.thrownErrors.length)
          throw P(D, W), _ = S(ae.thrownErrors), ae.thrownErrors.length = 0, _;
        if (se !== null && typeof se == "object" && typeof se.then == "function") {
          var ie = se;
          return Be(function() {
            ee || Se || (Se = !0, console.error(
              "You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"
            ));
          }), {
            then: function(ue, et) {
              ee = !0, ie.then(
                function(ft) {
                  if (P(D, W), W === 0) {
                    try {
                      G(X), B(function() {
                        return M(
                          ft,
                          ue,
                          et
                        );
                      });
                    } catch (En) {
                      ae.thrownErrors.push(En);
                    }
                    if (0 < ae.thrownErrors.length) {
                      var wn = S(
                        ae.thrownErrors
                      );
                      ae.thrownErrors.length = 0, et(wn);
                    }
                  } else ue(ft);
                },
                function(ft) {
                  P(D, W), 0 < ae.thrownErrors.length && (ft = S(
                    ae.thrownErrors
                  ), ae.thrownErrors.length = 0), et(ft);
                }
              );
            }
          };
        }
        var he = se;
        if (P(D, W), W === 0 && (G(X), X.length !== 0 && Be(function() {
          ee || Se || (Se = !0, console.error(
            "A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"
          ));
        }), ae.actQueue = null), 0 < ae.thrownErrors.length)
          throw _ = S(ae.thrownErrors), ae.thrownErrors.length = 0, _;
        return {
          then: function(ue, et) {
            ee = !0, W === 0 ? (ae.actQueue = X, B(function() {
              return M(
                he,
                ue,
                et
              );
            })) : ue(he);
          }
        };
      }, t.cache = function(_) {
        return function() {
          return _.apply(null, arguments);
        };
      }, t.captureOwnerStack = function() {
        var _ = ae.getCurrentStack;
        return _ === null ? null : _();
      }, t.cloneElement = function(_, D, W) {
        if (_ == null)
          throw Error(
            "The argument must be a React element, but you passed " + _ + "."
          );
        var X = fe({}, _.props), ee = _.key, se = _._owner;
        if (D != null) {
          var ie;
          e: {
            if (Ie.call(D, "ref") && (ie = Object.getOwnPropertyDescriptor(
              D,
              "ref"
            ).get) && ie.isReactWarning) {
              ie = !1;
              break e;
            }
            ie = D.ref !== void 0;
          }
          ie && (se = d()), m(D) && (u(D.key), ee = "" + D.key);
          for (he in D)
            !Ie.call(D, he) || he === "key" || he === "__self" || he === "__source" || he === "ref" && D.ref === void 0 || (X[he] = D[he]);
        }
        var he = arguments.length - 2;
        if (he === 1) X.children = W;
        else if (1 < he) {
          ie = Array(he);
          for (var ue = 0; ue < he; ue++)
            ie[ue] = arguments[ue + 2];
          X.children = ie;
        }
        for (X = y(
          _.type,
          ee,
          void 0,
          void 0,
          se,
          X,
          _._debugStack,
          _._debugTask
        ), ee = 2; ee < arguments.length; ee++)
          se = arguments[ee], E(se) && se._store && (se._store.validated = 1);
        return X;
      }, t.createContext = function(_) {
        return _ = {
          $$typeof: A,
          _currentValue: _,
          _currentValue2: _,
          _threadCount: 0,
          Provider: null,
          Consumer: null
        }, _.Provider = _, _.Consumer = {
          $$typeof: H,
          _context: _
        }, _._currentRenderer = null, _._currentRenderer2 = null, _;
      }, t.createElement = function(_, D, W) {
        for (var X = 2; X < arguments.length; X++) {
          var ee = arguments[X];
          E(ee) && ee._store && (ee._store.validated = 1);
        }
        if (X = {}, ee = null, D != null)
          for (ue in Ae || !("__self" in D) || "key" in D || (Ae = !0, console.warn(
            "Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform"
          )), m(D) && (u(D.key), ee = "" + D.key), D)
            Ie.call(D, ue) && ue !== "key" && ue !== "__self" && ue !== "__source" && (X[ue] = D[ue]);
        var se = arguments.length - 2;
        if (se === 1) X.children = W;
        else if (1 < se) {
          for (var ie = Array(se), he = 0; he < se; he++)
            ie[he] = arguments[he + 2];
          Object.freeze && Object.freeze(ie), X.children = ie;
        }
        if (_ && _.defaultProps)
          for (ue in se = _.defaultProps, se)
            X[ue] === void 0 && (X[ue] = se[ue]);
        ee && p(
          X,
          typeof _ == "function" ? _.displayName || _.name || "Unknown" : _
        );
        var ue = 1e4 > ae.recentlyCreatedOwnerStacks++;
        return y(
          _,
          ee,
          void 0,
          void 0,
          d(),
          X,
          ue ? Error("react-stack-top-frame") : Ue,
          ue ? Te(l(_)) : $e
        );
      }, t.createRef = function() {
        var _ = { current: null };
        return Object.seal(_), _;
      }, t.forwardRef = function(_) {
        _ != null && _.$$typeof === Y ? console.error(
          "forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."
        ) : typeof _ != "function" ? console.error(
          "forwardRef requires a render function but was given %s.",
          _ === null ? "null" : typeof _
        ) : _.length !== 0 && _.length !== 2 && console.error(
          "forwardRef render functions accept exactly two parameters: props and ref. %s",
          _.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."
        ), _ != null && _.defaultProps != null && console.error(
          "forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?"
        );
        var D = { $$typeof: I, render: _ }, W;
        return Object.defineProperty(D, "displayName", {
          enumerable: !1,
          configurable: !0,
          get: function() {
            return W;
          },
          set: function(X) {
            W = X, _.name || _.displayName || (Object.defineProperty(_, "name", { value: X }), _.displayName = X);
          }
        }), D;
      }, t.isValidElement = E, t.lazy = function(_) {
        return {
          $$typeof: J,
          _payload: { _status: -1, _result: _ },
          _init: k
        };
      }, t.memo = function(_, D) {
        _ == null && console.error(
          "memo: The first argument must be a component. Instead received: %s",
          _ === null ? "null" : typeof _
        ), D = {
          $$typeof: Y,
          type: _,
          compare: D === void 0 ? null : D
        };
        var W;
        return Object.defineProperty(D, "displayName", {
          enumerable: !1,
          configurable: !0,
          get: function() {
            return W;
          },
          set: function(X) {
            W = X, _.name || _.displayName || (Object.defineProperty(_, "name", { value: X }), _.displayName = X);
          }
        }), D;
      }, t.startTransition = function(_) {
        var D = ae.T, W = {};
        ae.T = W, W._updatedFibers = /* @__PURE__ */ new Set();
        try {
          var X = _(), ee = ae.S;
          ee !== null && ee(W, X), typeof X == "object" && X !== null && typeof X.then == "function" && X.then(j, Ve);
        } catch (se) {
          Ve(se);
        } finally {
          D === null && W._updatedFibers && (_ = W._updatedFibers.size, W._updatedFibers.clear(), 10 < _ && console.warn(
            "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
          )), ae.T = D;
        }
      }, t.unstable_useCacheRefresh = function() {
        return q().useCacheRefresh();
      }, t.use = function(_) {
        return q().use(_);
      }, t.useActionState = function(_, D, W) {
        return q().useActionState(
          _,
          D,
          W
        );
      }, t.useCallback = function(_, D) {
        return q().useCallback(_, D);
      }, t.useContext = function(_) {
        var D = q();
        return _.$$typeof === H && console.error(
          "Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?"
        ), D.useContext(_);
      }, t.useDebugValue = function(_, D) {
        return q().useDebugValue(_, D);
      }, t.useDeferredValue = function(_, D) {
        return q().useDeferredValue(_, D);
      }, t.useEffect = function(_, D, W) {
        _ == null && console.warn(
          "React Hook useEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        );
        var X = q();
        if (typeof W == "function")
          throw Error(
            "useEffect CRUD overload is not enabled in this build of React."
          );
        return X.useEffect(_, D);
      }, t.useId = function() {
        return q().useId();
      }, t.useImperativeHandle = function(_, D, W) {
        return q().useImperativeHandle(_, D, W);
      }, t.useInsertionEffect = function(_, D) {
        return _ == null && console.warn(
          "React Hook useInsertionEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        ), q().useInsertionEffect(_, D);
      }, t.useLayoutEffect = function(_, D) {
        return _ == null && console.warn(
          "React Hook useLayoutEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        ), q().useLayoutEffect(_, D);
      }, t.useMemo = function(_, D) {
        return q().useMemo(_, D);
      }, t.useOptimistic = function(_, D) {
        return q().useOptimistic(_, D);
      }, t.useReducer = function(_, D, W) {
        return q().useReducer(_, D, W);
      }, t.useRef = function(_) {
        return q().useRef(_);
      }, t.useState = function(_) {
        return q().useState(_);
      }, t.useSyncExternalStore = function(_, D, W) {
        return q().useSyncExternalStore(
          _,
          D,
          W
        );
      }, t.useTransition = function() {
        return q().useTransition();
      }, t.version = "19.1.0", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    }();
  }(er, er.exports)), er.exports;
}
var of;
function yt() {
  return of || (of = 1, process.env.NODE_ENV === "production" ? Sr.exports = T_() : Sr.exports = A_()), Sr.exports;
}
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sf;
function C_() {
  return sf || (sf = 1, process.env.NODE_ENV !== "production" && function() {
    function e(g) {
      if (g == null) return null;
      if (typeof g == "function")
        return g.$$typeof === k ? null : g.displayName || g.name || null;
      if (typeof g == "string") return g;
      switch (g) {
        case p:
          return "Fragment";
        case y:
          return "Profiler";
        case v:
          return "StrictMode";
        case x:
          return "Suspense";
        case R:
          return "SuspenseList";
        case O:
          return "Activity";
      }
      if (typeof g == "object")
        switch (typeof g.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), g.$$typeof) {
          case m:
            return "Portal";
          case E:
            return (g.displayName || "Context") + ".Provider";
          case b:
            return (g._context.displayName || "Context") + ".Consumer";
          case w:
            var C = g.render;
            return g = g.displayName, g || (g = C.displayName || C.name || "", g = g !== "" ? "ForwardRef(" + g + ")" : "ForwardRef"), g;
          case T:
            return C = g.displayName || null, C !== null ? C : e(g.type) || "Memo";
          case N:
            C = g._payload, g = g._init;
            try {
              return e(g(C));
            } catch {
            }
        }
      return null;
    }
    function t(g) {
      return "" + g;
    }
    function r(g) {
      try {
        t(g);
        var C = !1;
      } catch {
        C = !0;
      }
      if (C) {
        C = console;
        var L = C.error, H = typeof Symbol == "function" && Symbol.toStringTag && g[Symbol.toStringTag] || g.constructor.name || "Object";
        return L.call(
          C,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          H
        ), t(g);
      }
    }
    function n(g) {
      if (g === p) return "<>";
      if (typeof g == "object" && g !== null && g.$$typeof === N)
        return "<...>";
      try {
        var C = e(g);
        return C ? "<" + C + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function i() {
      var g = q.A;
      return g === null ? null : g.getOwner();
    }
    function a() {
      return Error("react-stack-top-frame");
    }
    function o(g) {
      if (j.call(g, "key")) {
        var C = Object.getOwnPropertyDescriptor(g, "key").get;
        if (C && C.isReactWarning) return !1;
      }
      return g.key !== void 0;
    }
    function s(g, C) {
      function L() {
        P || (P = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          C
        ));
      }
      L.isReactWarning = !0, Object.defineProperty(g, "key", {
        get: L,
        configurable: !0
      });
    }
    function c() {
      var g = e(this.type);
      return M[g] || (M[g] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), g = this.props.ref, g !== void 0 ? g : null;
    }
    function u(g, C, L, H, A, I, $, U) {
      return L = I.ref, g = {
        $$typeof: h,
        type: g,
        key: C,
        props: I,
        _owner: A
      }, (L !== void 0 ? L : null) !== null ? Object.defineProperty(g, "ref", {
        enumerable: !1,
        get: c
      }) : Object.defineProperty(g, "ref", { enumerable: !1, value: null }), g._store = {}, Object.defineProperty(g._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(g, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(g, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: $
      }), Object.defineProperty(g, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: U
      }), Object.freeze && (Object.freeze(g.props), Object.freeze(g)), g;
    }
    function f(g, C, L, H, A, I, $, U) {
      var Y = C.children;
      if (Y !== void 0)
        if (H)
          if (B(Y)) {
            for (H = 0; H < Y.length; H++)
              l(Y[H]);
            Object.freeze && Object.freeze(Y);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else l(Y);
      if (j.call(C, "key")) {
        Y = e(g);
        var J = Object.keys(C).filter(function(le) {
          return le !== "key";
        });
        H = 0 < J.length ? "{key: someKey, " + J.join(": ..., ") + ": ...}" : "{key: someKey}", F[Y + H] || (J = 0 < J.length ? "{" + J.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          H,
          Y,
          J,
          Y
        ), F[Y + H] = !0);
      }
      if (Y = null, L !== void 0 && (r(L), Y = "" + L), o(C) && (r(C.key), Y = "" + C.key), "key" in C) {
        L = {};
        for (var ne in C)
          ne !== "key" && (L[ne] = C[ne]);
      } else L = C;
      return Y && s(
        L,
        typeof g == "function" ? g.displayName || g.name || "Unknown" : g
      ), u(
        g,
        Y,
        I,
        A,
        i(),
        L,
        $,
        U
      );
    }
    function l(g) {
      typeof g == "object" && g !== null && g.$$typeof === h && g._store && (g._store.validated = 1);
    }
    var d = yt(), h = Symbol.for("react.transitional.element"), m = Symbol.for("react.portal"), p = Symbol.for("react.fragment"), v = Symbol.for("react.strict_mode"), y = Symbol.for("react.profiler"), b = Symbol.for("react.consumer"), E = Symbol.for("react.context"), w = Symbol.for("react.forward_ref"), x = Symbol.for("react.suspense"), R = Symbol.for("react.suspense_list"), T = Symbol.for("react.memo"), N = Symbol.for("react.lazy"), O = Symbol.for("react.activity"), k = Symbol.for("react.client.reference"), q = d.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, j = Object.prototype.hasOwnProperty, B = Array.isArray, S = console.createTask ? console.createTask : function() {
      return null;
    };
    d = {
      "react-stack-bottom-frame": function(g) {
        return g();
      }
    };
    var P, M = {}, G = d["react-stack-bottom-frame"].bind(
      d,
      a
    )(), V = S(n(a)), F = {};
    Kt.Fragment = p, Kt.jsx = function(g, C, L, H, A) {
      var I = 1e4 > q.recentlyCreatedOwnerStacks++;
      return f(
        g,
        C,
        L,
        !1,
        H,
        A,
        I ? Error("react-stack-top-frame") : G,
        I ? S(n(g)) : V
      );
    }, Kt.jsxs = function(g, C, L, H, A) {
      var I = 1e4 > q.recentlyCreatedOwnerStacks++;
      return f(
        g,
        C,
        L,
        !0,
        H,
        A,
        I ? Error("react-stack-top-frame") : G,
        I ? S(n(g)) : V
      );
    };
  }()), Kt;
}
var uf;
function O_() {
  return uf || (uf = 1, process.env.NODE_ENV === "production" ? Er.exports = R_() : Er.exports = C_()), Er.exports;
}
var cf = O_(), z = yt();
const K = /* @__PURE__ */ yc(z);
function He(e) {
  if (typeof e == "string" || typeof e == "number") return "" + e;
  let t = "";
  if (Array.isArray(e))
    for (let r = 0, n; r < e.length; r++)
      (n = He(e[r])) !== "" && (t += (t && " ") + n);
  else
    for (let r in e)
      e[r] && (t += (t && " ") + r);
  return t;
}
var xr = { exports: {} }, xn = {}, Rr = { exports: {} }, Rn = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ff;
function q_() {
  if (ff) return Rn;
  ff = 1;
  var e = yt();
  function t(l, d) {
    return l === d && (l !== 0 || 1 / l === 1 / d) || l !== l && d !== d;
  }
  var r = typeof Object.is == "function" ? Object.is : t, n = e.useState, i = e.useEffect, a = e.useLayoutEffect, o = e.useDebugValue;
  function s(l, d) {
    var h = d(), m = n({ inst: { value: h, getSnapshot: d } }), p = m[0].inst, v = m[1];
    return a(
      function() {
        p.value = h, p.getSnapshot = d, c(p) && v({ inst: p });
      },
      [l, h, d]
    ), i(
      function() {
        return c(p) && v({ inst: p }), l(function() {
          c(p) && v({ inst: p });
        });
      },
      [l]
    ), o(h), h;
  }
  function c(l) {
    var d = l.getSnapshot;
    l = l.value;
    try {
      var h = d();
      return !r(l, h);
    } catch {
      return !0;
    }
  }
  function u(l, d) {
    return d();
  }
  var f = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? u : s;
  return Rn.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : f, Rn;
}
var Tn = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lf;
function N_() {
  return lf || (lf = 1, process.env.NODE_ENV !== "production" && function() {
    function e(h, m) {
      return h === m && (h !== 0 || 1 / h === 1 / m) || h !== h && m !== m;
    }
    function t(h, m) {
      f || i.startTransition === void 0 || (f = !0, console.error(
        "You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."
      ));
      var p = m();
      if (!l) {
        var v = m();
        a(p, v) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), l = !0);
      }
      v = o({
        inst: { value: p, getSnapshot: m }
      });
      var y = v[0].inst, b = v[1];
      return c(
        function() {
          y.value = p, y.getSnapshot = m, r(y) && b({ inst: y });
        },
        [h, p, m]
      ), s(
        function() {
          return r(y) && b({ inst: y }), h(function() {
            r(y) && b({ inst: y });
          });
        },
        [h]
      ), u(p), p;
    }
    function r(h) {
      var m = h.getSnapshot;
      h = h.value;
      try {
        var p = m();
        return !a(h, p);
      } catch {
        return !0;
      }
    }
    function n(h, m) {
      return m();
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var i = yt(), a = typeof Object.is == "function" ? Object.is : e, o = i.useState, s = i.useEffect, c = i.useLayoutEffect, u = i.useDebugValue, f = !1, l = !1, d = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? n : t;
    Tn.useSyncExternalStore = i.useSyncExternalStore !== void 0 ? i.useSyncExternalStore : d, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), Tn;
}
var df;
function qv() {
  return df || (df = 1, process.env.NODE_ENV === "production" ? Rr.exports = q_() : Rr.exports = N_()), Rr.exports;
}
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hf;
function I_() {
  if (hf) return xn;
  hf = 1;
  var e = yt(), t = qv();
  function r(u, f) {
    return u === f && (u !== 0 || 1 / u === 1 / f) || u !== u && f !== f;
  }
  var n = typeof Object.is == "function" ? Object.is : r, i = t.useSyncExternalStore, a = e.useRef, o = e.useEffect, s = e.useMemo, c = e.useDebugValue;
  return xn.useSyncExternalStoreWithSelector = function(u, f, l, d, h) {
    var m = a(null);
    if (m.current === null) {
      var p = { hasValue: !1, value: null };
      m.current = p;
    } else p = m.current;
    m = s(
      function() {
        function y(R) {
          if (!b) {
            if (b = !0, E = R, R = d(R), h !== void 0 && p.hasValue) {
              var T = p.value;
              if (h(T, R))
                return w = T;
            }
            return w = R;
          }
          if (T = w, n(E, R)) return T;
          var N = d(R);
          return h !== void 0 && h(T, N) ? (E = R, T) : (E = R, w = N);
        }
        var b = !1, E, w, x = l === void 0 ? null : l;
        return [
          function() {
            return y(f());
          },
          x === null ? void 0 : function() {
            return y(x());
          }
        ];
      },
      [f, l, d, h]
    );
    var v = i(u, m[0], m[1]);
    return o(
      function() {
        p.hasValue = !0, p.value = v;
      },
      [v]
    ), c(v), v;
  }, xn;
}
var An = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pf;
function M_() {
  return pf || (pf = 1, process.env.NODE_ENV !== "production" && function() {
    function e(u, f) {
      return u === f && (u !== 0 || 1 / u === 1 / f) || u !== u && f !== f;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var t = yt(), r = qv(), n = typeof Object.is == "function" ? Object.is : e, i = r.useSyncExternalStore, a = t.useRef, o = t.useEffect, s = t.useMemo, c = t.useDebugValue;
    An.useSyncExternalStoreWithSelector = function(u, f, l, d, h) {
      var m = a(null);
      if (m.current === null) {
        var p = { hasValue: !1, value: null };
        m.current = p;
      } else p = m.current;
      m = s(
        function() {
          function y(R) {
            if (!b) {
              if (b = !0, E = R, R = d(R), h !== void 0 && p.hasValue) {
                var T = p.value;
                if (h(T, R))
                  return w = T;
              }
              return w = R;
            }
            if (T = w, n(E, R))
              return T;
            var N = d(R);
            return h !== void 0 && h(T, N) ? (E = R, T) : (E = R, w = N);
          }
          var b = !1, E, w, x = l === void 0 ? null : l;
          return [
            function() {
              return y(f());
            },
            x === null ? void 0 : function() {
              return y(x());
            }
          ];
        },
        [f, l, d, h]
      );
      var v = i(u, m[0], m[1]);
      return o(
        function() {
          p.hasValue = !0, p.value = v;
        },
        [v]
      ), c(v), v;
    }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), An;
}
var gf;
function P_() {
  return gf || (gf = 1, process.env.NODE_ENV === "production" ? xr.exports = I_() : xr.exports = M_()), xr.exports;
}
var k_ = P_();
const D_ = /* @__PURE__ */ yc(k_), L_ = {}, vf = (e) => {
  let t;
  const r = /* @__PURE__ */ new Set(), n = (f, l) => {
    const d = typeof f == "function" ? f(t) : f;
    if (!Object.is(d, t)) {
      const h = t;
      t = l ?? (typeof d != "object" || d === null) ? d : Object.assign({}, t, d), r.forEach((m) => m(t, h));
    }
  }, i = () => t, c = { setState: n, getState: i, getInitialState: () => u, subscribe: (f) => (r.add(f), () => r.delete(f)), destroy: () => {
    (L_ ? "production" : void 0) !== "production" && console.warn(
      "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
    ), r.clear();
  } }, u = t = e(n, i, c);
  return c;
}, $_ = (e) => e ? vf(e) : vf, { useDebugValue: F_ } = K, { useSyncExternalStoreWithSelector: B_ } = D_, j_ = (e) => e;
function Nv(e, t = j_, r) {
  const n = B_(
    e.subscribe,
    e.getState,
    e.getServerState || e.getInitialState,
    t,
    r
  );
  return F_(n), n;
}
const yf = (e, t) => {
  const r = $_(e), n = (i, a = t) => Nv(r, i, a);
  return Object.assign(n, r), n;
}, H_ = (e, t) => e ? yf(e, t) : yf;
function Me(e, t) {
  if (Object.is(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  if (e instanceof Map && t instanceof Map) {
    if (e.size !== t.size) return !1;
    for (const [n, i] of e)
      if (!Object.is(i, t.get(n)))
        return !1;
    return !0;
  }
  if (e instanceof Set && t instanceof Set) {
    if (e.size !== t.size) return !1;
    for (const n of e)
      if (!t.has(n))
        return !1;
    return !0;
  }
  const r = Object.keys(e);
  if (r.length !== Object.keys(t).length)
    return !1;
  for (const n of r)
    if (!Object.prototype.hasOwnProperty.call(t, n) || !Object.is(e[n], t[n]))
      return !1;
  return !0;
}
var z_ = { value: () => {
} };
function Zr() {
  for (var e = 0, t = arguments.length, r = {}, n; e < t; ++e) {
    if (!(n = arguments[e] + "") || n in r || /[\s.]/.test(n)) throw new Error("illegal type: " + n);
    r[n] = [];
  }
  return new Dr(r);
}
function Dr(e) {
  this._ = e;
}
function G_(e, t) {
  return e.trim().split(/^|\s+/).map(function(r) {
    var n = "", i = r.indexOf(".");
    if (i >= 0 && (n = r.slice(i + 1), r = r.slice(0, i)), r && !t.hasOwnProperty(r)) throw new Error("unknown type: " + r);
    return { type: r, name: n };
  });
}
Dr.prototype = Zr.prototype = {
  constructor: Dr,
  on: function(e, t) {
    var r = this._, n = G_(e + "", r), i, a = -1, o = n.length;
    if (arguments.length < 2) {
      for (; ++a < o; ) if ((i = (e = n[a]).type) && (i = U_(r[i], e.name))) return i;
      return;
    }
    if (t != null && typeof t != "function") throw new Error("invalid callback: " + t);
    for (; ++a < o; )
      if (i = (e = n[a]).type) r[i] = mf(r[i], e.name, t);
      else if (t == null) for (i in r) r[i] = mf(r[i], e.name, null);
    return this;
  },
  copy: function() {
    var e = {}, t = this._;
    for (var r in t) e[r] = t[r].slice();
    return new Dr(e);
  },
  call: function(e, t) {
    if ((i = arguments.length - 2) > 0) for (var r = new Array(i), n = 0, i, a; n < i; ++n) r[n] = arguments[n + 2];
    if (!this._.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    for (a = this._[e], n = 0, i = a.length; n < i; ++n) a[n].value.apply(t, r);
  },
  apply: function(e, t, r) {
    if (!this._.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    for (var n = this._[e], i = 0, a = n.length; i < a; ++i) n[i].value.apply(t, r);
  }
};
function U_(e, t) {
  for (var r = 0, n = e.length, i; r < n; ++r)
    if ((i = e[r]).name === t)
      return i.value;
}
function mf(e, t, r) {
  for (var n = 0, i = e.length; n < i; ++n)
    if (e[n].name === t) {
      e[n] = z_, e = e.slice(0, n).concat(e.slice(n + 1));
      break;
    }
  return r != null && e.push({ name: t, value: r }), e;
}
var tc = "http://www.w3.org/1999/xhtml";
const _f = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: tc,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Qr(e) {
  var t = e += "", r = t.indexOf(":");
  return r >= 0 && (t = e.slice(0, r)) !== "xmlns" && (e = e.slice(r + 1)), _f.hasOwnProperty(t) ? { space: _f[t], local: e } : e;
}
function V_(e) {
  return function() {
    var t = this.ownerDocument, r = this.namespaceURI;
    return r === tc && t.documentElement.namespaceURI === tc ? t.createElement(e) : t.createElementNS(r, e);
  };
}
function Y_(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function Iv(e) {
  var t = Qr(e);
  return (t.local ? Y_ : V_)(t);
}
function K_() {
}
function mc(e) {
  return e == null ? K_ : function() {
    return this.querySelector(e);
  };
}
function W_(e) {
  typeof e != "function" && (e = mc(e));
  for (var t = this._groups, r = t.length, n = new Array(r), i = 0; i < r; ++i)
    for (var a = t[i], o = a.length, s = n[i] = new Array(o), c, u, f = 0; f < o; ++f)
      (c = a[f]) && (u = e.call(c, c.__data__, f, a)) && ("__data__" in c && (u.__data__ = c.__data__), s[f] = u);
  return new Le(n, this._parents);
}
function X_(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function Z_() {
  return [];
}
function Mv(e) {
  return e == null ? Z_ : function() {
    return this.querySelectorAll(e);
  };
}
function Q_(e) {
  return function() {
    return X_(e.apply(this, arguments));
  };
}
function J_(e) {
  typeof e == "function" ? e = Q_(e) : e = Mv(e);
  for (var t = this._groups, r = t.length, n = [], i = [], a = 0; a < r; ++a)
    for (var o = t[a], s = o.length, c, u = 0; u < s; ++u)
      (c = o[u]) && (n.push(e.call(c, c.__data__, u, o)), i.push(c));
  return new Le(n, i);
}
function Pv(e) {
  return function() {
    return this.matches(e);
  };
}
function kv(e) {
  return function(t) {
    return t.matches(e);
  };
}
var eb = Array.prototype.find;
function tb(e) {
  return function() {
    return eb.call(this.children, e);
  };
}
function rb() {
  return this.firstElementChild;
}
function nb(e) {
  return this.select(e == null ? rb : tb(typeof e == "function" ? e : kv(e)));
}
var ib = Array.prototype.filter;
function ab() {
  return Array.from(this.children);
}
function ob(e) {
  return function() {
    return ib.call(this.children, e);
  };
}
function sb(e) {
  return this.selectAll(e == null ? ab : ob(typeof e == "function" ? e : kv(e)));
}
function ub(e) {
  typeof e != "function" && (e = Pv(e));
  for (var t = this._groups, r = t.length, n = new Array(r), i = 0; i < r; ++i)
    for (var a = t[i], o = a.length, s = n[i] = [], c, u = 0; u < o; ++u)
      (c = a[u]) && e.call(c, c.__data__, u, a) && s.push(c);
  return new Le(n, this._parents);
}
function Dv(e) {
  return new Array(e.length);
}
function cb() {
  return new Le(this._enter || this._groups.map(Dv), this._parents);
}
function Br(e, t) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
Br.prototype = {
  constructor: Br,
  appendChild: function(e) {
    return this._parent.insertBefore(e, this._next);
  },
  insertBefore: function(e, t) {
    return this._parent.insertBefore(e, t);
  },
  querySelector: function(e) {
    return this._parent.querySelector(e);
  },
  querySelectorAll: function(e) {
    return this._parent.querySelectorAll(e);
  }
};
function fb(e) {
  return function() {
    return e;
  };
}
function lb(e, t, r, n, i, a) {
  for (var o = 0, s, c = t.length, u = a.length; o < u; ++o)
    (s = t[o]) ? (s.__data__ = a[o], n[o] = s) : r[o] = new Br(e, a[o]);
  for (; o < c; ++o)
    (s = t[o]) && (i[o] = s);
}
function db(e, t, r, n, i, a, o) {
  var s, c, u = /* @__PURE__ */ new Map(), f = t.length, l = a.length, d = new Array(f), h;
  for (s = 0; s < f; ++s)
    (c = t[s]) && (d[s] = h = o.call(c, c.__data__, s, t) + "", u.has(h) ? i[s] = c : u.set(h, c));
  for (s = 0; s < l; ++s)
    h = o.call(e, a[s], s, a) + "", (c = u.get(h)) ? (n[s] = c, c.__data__ = a[s], u.delete(h)) : r[s] = new Br(e, a[s]);
  for (s = 0; s < f; ++s)
    (c = t[s]) && u.get(d[s]) === c && (i[s] = c);
}
function hb(e) {
  return e.__data__;
}
function pb(e, t) {
  if (!arguments.length) return Array.from(this, hb);
  var r = t ? db : lb, n = this._parents, i = this._groups;
  typeof e != "function" && (e = fb(e));
  for (var a = i.length, o = new Array(a), s = new Array(a), c = new Array(a), u = 0; u < a; ++u) {
    var f = n[u], l = i[u], d = l.length, h = gb(e.call(f, f && f.__data__, u, n)), m = h.length, p = s[u] = new Array(m), v = o[u] = new Array(m), y = c[u] = new Array(d);
    r(f, l, p, v, y, h, t);
    for (var b = 0, E = 0, w, x; b < m; ++b)
      if (w = p[b]) {
        for (b >= E && (E = b + 1); !(x = v[E]) && ++E < m; ) ;
        w._next = x || null;
      }
  }
  return o = new Le(o, n), o._enter = s, o._exit = c, o;
}
function gb(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function vb() {
  return new Le(this._exit || this._groups.map(Dv), this._parents);
}
function yb(e, t, r) {
  var n = this.enter(), i = this, a = this.exit();
  return typeof e == "function" ? (n = e(n), n && (n = n.selection())) : n = n.append(e + ""), t != null && (i = t(i), i && (i = i.selection())), r == null ? a.remove() : r(a), n && i ? n.merge(i).order() : i;
}
function mb(e) {
  for (var t = e.selection ? e.selection() : e, r = this._groups, n = t._groups, i = r.length, a = n.length, o = Math.min(i, a), s = new Array(i), c = 0; c < o; ++c)
    for (var u = r[c], f = n[c], l = u.length, d = s[c] = new Array(l), h, m = 0; m < l; ++m)
      (h = u[m] || f[m]) && (d[m] = h);
  for (; c < i; ++c)
    s[c] = r[c];
  return new Le(s, this._parents);
}
function _b() {
  for (var e = this._groups, t = -1, r = e.length; ++t < r; )
    for (var n = e[t], i = n.length - 1, a = n[i], o; --i >= 0; )
      (o = n[i]) && (a && o.compareDocumentPosition(a) ^ 4 && a.parentNode.insertBefore(o, a), a = o);
  return this;
}
function bb(e) {
  e || (e = wb);
  function t(l, d) {
    return l && d ? e(l.__data__, d.__data__) : !l - !d;
  }
  for (var r = this._groups, n = r.length, i = new Array(n), a = 0; a < n; ++a) {
    for (var o = r[a], s = o.length, c = i[a] = new Array(s), u, f = 0; f < s; ++f)
      (u = o[f]) && (c[f] = u);
    c.sort(t);
  }
  return new Le(i, this._parents).order();
}
function wb(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Eb() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function Sb() {
  return Array.from(this);
}
function xb() {
  for (var e = this._groups, t = 0, r = e.length; t < r; ++t)
    for (var n = e[t], i = 0, a = n.length; i < a; ++i) {
      var o = n[i];
      if (o) return o;
    }
  return null;
}
function Rb() {
  let e = 0;
  for (const t of this) ++e;
  return e;
}
function Tb() {
  return !this.node();
}
function Ab(e) {
  for (var t = this._groups, r = 0, n = t.length; r < n; ++r)
    for (var i = t[r], a = 0, o = i.length, s; a < o; ++a)
      (s = i[a]) && e.call(s, s.__data__, a, i);
  return this;
}
function Cb(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function Ob(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function qb(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function Nb(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function Ib(e, t) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.removeAttribute(e) : this.setAttribute(e, r);
  };
}
function Mb(e, t) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, r);
  };
}
function Pb(e, t) {
  var r = Qr(e);
  if (arguments.length < 2) {
    var n = this.node();
    return r.local ? n.getAttributeNS(r.space, r.local) : n.getAttribute(r);
  }
  return this.each((t == null ? r.local ? Ob : Cb : typeof t == "function" ? r.local ? Mb : Ib : r.local ? Nb : qb)(r, t));
}
function Lv(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function kb(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function Db(e, t, r) {
  return function() {
    this.style.setProperty(e, t, r);
  };
}
function Lb(e, t, r) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.style.removeProperty(e) : this.style.setProperty(e, n, r);
  };
}
function $b(e, t, r) {
  return arguments.length > 1 ? this.each((t == null ? kb : typeof t == "function" ? Lb : Db)(e, t, r ?? "")) : Ft(this.node(), e);
}
function Ft(e, t) {
  return e.style.getPropertyValue(t) || Lv(e).getComputedStyle(e, null).getPropertyValue(t);
}
function Fb(e) {
  return function() {
    delete this[e];
  };
}
function Bb(e, t) {
  return function() {
    this[e] = t;
  };
}
function jb(e, t) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? delete this[e] : this[e] = r;
  };
}
function Hb(e, t) {
  return arguments.length > 1 ? this.each((t == null ? Fb : typeof t == "function" ? jb : Bb)(e, t)) : this.node()[e];
}
function $v(e) {
  return e.trim().split(/^|\s+/);
}
function _c(e) {
  return e.classList || new Fv(e);
}
function Fv(e) {
  this._node = e, this._names = $v(e.getAttribute("class") || "");
}
Fv.prototype = {
  add: function(e) {
    var t = this._names.indexOf(e);
    t < 0 && (this._names.push(e), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(e) {
    var t = this._names.indexOf(e);
    t >= 0 && (this._names.splice(t, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(e) {
    return this._names.indexOf(e) >= 0;
  }
};
function Bv(e, t) {
  for (var r = _c(e), n = -1, i = t.length; ++n < i; ) r.add(t[n]);
}
function jv(e, t) {
  for (var r = _c(e), n = -1, i = t.length; ++n < i; ) r.remove(t[n]);
}
function zb(e) {
  return function() {
    Bv(this, e);
  };
}
function Gb(e) {
  return function() {
    jv(this, e);
  };
}
function Ub(e, t) {
  return function() {
    (t.apply(this, arguments) ? Bv : jv)(this, e);
  };
}
function Vb(e, t) {
  var r = $v(e + "");
  if (arguments.length < 2) {
    for (var n = _c(this.node()), i = -1, a = r.length; ++i < a; ) if (!n.contains(r[i])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? Ub : t ? zb : Gb)(r, t));
}
function Yb() {
  this.textContent = "";
}
function Kb(e) {
  return function() {
    this.textContent = e;
  };
}
function Wb(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function Xb(e) {
  return arguments.length ? this.each(e == null ? Yb : (typeof e == "function" ? Wb : Kb)(e)) : this.node().textContent;
}
function Zb() {
  this.innerHTML = "";
}
function Qb(e) {
  return function() {
    this.innerHTML = e;
  };
}
function Jb(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function e0(e) {
  return arguments.length ? this.each(e == null ? Zb : (typeof e == "function" ? Jb : Qb)(e)) : this.node().innerHTML;
}
function t0() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function r0() {
  return this.each(t0);
}
function n0() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function i0() {
  return this.each(n0);
}
function a0(e) {
  var t = typeof e == "function" ? e : Iv(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function o0() {
  return null;
}
function s0(e, t) {
  var r = typeof e == "function" ? e : Iv(e), n = t == null ? o0 : typeof t == "function" ? t : mc(t);
  return this.select(function() {
    return this.insertBefore(r.apply(this, arguments), n.apply(this, arguments) || null);
  });
}
function u0() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function c0() {
  return this.each(u0);
}
function f0() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function l0() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function d0(e) {
  return this.select(e ? l0 : f0);
}
function h0(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function p0(e) {
  return function(t) {
    e.call(this, t, this.__data__);
  };
}
function g0(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var r = "", n = t.indexOf(".");
    return n >= 0 && (r = t.slice(n + 1), t = t.slice(0, n)), { type: t, name: r };
  });
}
function v0(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var r = 0, n = -1, i = t.length, a; r < i; ++r)
        a = t[r], (!e.type || a.type === e.type) && a.name === e.name ? this.removeEventListener(a.type, a.listener, a.options) : t[++n] = a;
      ++n ? t.length = n : delete this.__on;
    }
  };
}
function y0(e, t, r) {
  return function() {
    var n = this.__on, i, a = p0(t);
    if (n) {
      for (var o = 0, s = n.length; o < s; ++o)
        if ((i = n[o]).type === e.type && i.name === e.name) {
          this.removeEventListener(i.type, i.listener, i.options), this.addEventListener(i.type, i.listener = a, i.options = r), i.value = t;
          return;
        }
    }
    this.addEventListener(e.type, a, r), i = { type: e.type, name: e.name, value: t, listener: a, options: r }, n ? n.push(i) : this.__on = [i];
  };
}
function m0(e, t, r) {
  var n = g0(e + ""), i, a = n.length, o;
  if (arguments.length < 2) {
    var s = this.node().__on;
    if (s) {
      for (var c = 0, u = s.length, f; c < u; ++c)
        for (i = 0, f = s[c]; i < a; ++i)
          if ((o = n[i]).type === f.type && o.name === f.name)
            return f.value;
    }
    return;
  }
  for (s = t ? y0 : v0, i = 0; i < a; ++i) this.each(s(n[i], t, r));
  return this;
}
function Hv(e, t, r) {
  var n = Lv(e), i = n.CustomEvent;
  typeof i == "function" ? i = new i(t, r) : (i = n.document.createEvent("Event"), r ? (i.initEvent(t, r.bubbles, r.cancelable), i.detail = r.detail) : i.initEvent(t, !1, !1)), e.dispatchEvent(i);
}
function _0(e, t) {
  return function() {
    return Hv(this, e, t);
  };
}
function b0(e, t) {
  return function() {
    return Hv(this, e, t.apply(this, arguments));
  };
}
function w0(e, t) {
  return this.each((typeof t == "function" ? b0 : _0)(e, t));
}
function* E0() {
  for (var e = this._groups, t = 0, r = e.length; t < r; ++t)
    for (var n = e[t], i = 0, a = n.length, o; i < a; ++i)
      (o = n[i]) && (yield o);
}
var zv = [null];
function Le(e, t) {
  this._groups = e, this._parents = t;
}
function hr() {
  return new Le([[document.documentElement]], zv);
}
function S0() {
  return this;
}
Le.prototype = hr.prototype = {
  constructor: Le,
  select: W_,
  selectAll: J_,
  selectChild: nb,
  selectChildren: sb,
  filter: ub,
  data: pb,
  enter: cb,
  exit: vb,
  join: yb,
  merge: mb,
  selection: S0,
  order: _b,
  sort: bb,
  call: Eb,
  nodes: Sb,
  node: xb,
  size: Rb,
  empty: Tb,
  each: Ab,
  attr: Pb,
  style: $b,
  property: Hb,
  classed: Vb,
  text: Xb,
  html: e0,
  raise: r0,
  lower: i0,
  append: a0,
  insert: s0,
  remove: c0,
  clone: d0,
  datum: h0,
  on: m0,
  dispatch: w0,
  [Symbol.iterator]: E0
};
function Ke(e) {
  return typeof e == "string" ? new Le([[document.querySelector(e)]], [document.documentElement]) : new Le([[e]], zv);
}
function x0(e) {
  let t;
  for (; t = e.sourceEvent; ) e = t;
  return e;
}
function tt(e, t) {
  if (e = x0(e), t === void 0 && (t = e.currentTarget), t) {
    var r = t.ownerSVGElement || t;
    if (r.createSVGPoint) {
      var n = r.createSVGPoint();
      return n.x = e.clientX, n.y = e.clientY, n = n.matrixTransform(t.getScreenCTM().inverse()), [n.x, n.y];
    }
    if (t.getBoundingClientRect) {
      var i = t.getBoundingClientRect();
      return [e.clientX - i.left - t.clientLeft, e.clientY - i.top - t.clientTop];
    }
  }
  return [e.pageX, e.pageY];
}
const R0 = { passive: !1 }, or = { capture: !0, passive: !1 };
function Cn(e) {
  e.stopImmediatePropagation();
}
function kt(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function Gv(e) {
  var t = e.document.documentElement, r = Ke(e).on("dragstart.drag", kt, or);
  "onselectstart" in t ? r.on("selectstart.drag", kt, or) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function Uv(e, t) {
  var r = e.document.documentElement, n = Ke(e).on("dragstart.drag", null);
  t && (n.on("click.drag", kt, or), setTimeout(function() {
    n.on("click.drag", null);
  }, 0)), "onselectstart" in r ? n.on("selectstart.drag", null) : (r.style.MozUserSelect = r.__noselect, delete r.__noselect);
}
const Tr = (e) => () => e;
function rc(e, {
  sourceEvent: t,
  subject: r,
  target: n,
  identifier: i,
  active: a,
  x: o,
  y: s,
  dx: c,
  dy: u,
  dispatch: f
}) {
  Object.defineProperties(this, {
    type: { value: e, enumerable: !0, configurable: !0 },
    sourceEvent: { value: t, enumerable: !0, configurable: !0 },
    subject: { value: r, enumerable: !0, configurable: !0 },
    target: { value: n, enumerable: !0, configurable: !0 },
    identifier: { value: i, enumerable: !0, configurable: !0 },
    active: { value: a, enumerable: !0, configurable: !0 },
    x: { value: o, enumerable: !0, configurable: !0 },
    y: { value: s, enumerable: !0, configurable: !0 },
    dx: { value: c, enumerable: !0, configurable: !0 },
    dy: { value: u, enumerable: !0, configurable: !0 },
    _: { value: f }
  });
}
rc.prototype.on = function() {
  var e = this._.on.apply(this._, arguments);
  return e === this._ ? this : e;
};
function T0(e) {
  return !e.ctrlKey && !e.button;
}
function A0() {
  return this.parentNode;
}
function C0(e, t) {
  return t ?? { x: e.x, y: e.y };
}
function O0() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function q0() {
  var e = T0, t = A0, r = C0, n = O0, i = {}, a = Zr("start", "drag", "end"), o = 0, s, c, u, f, l = 0;
  function d(w) {
    w.on("mousedown.drag", h).filter(n).on("touchstart.drag", v).on("touchmove.drag", y, R0).on("touchend.drag touchcancel.drag", b).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function h(w, x) {
    if (!(f || !e.call(this, w, x))) {
      var R = E(this, t.call(this, w, x), w, x, "mouse");
      R && (Ke(w.view).on("mousemove.drag", m, or).on("mouseup.drag", p, or), Gv(w.view), Cn(w), u = !1, s = w.clientX, c = w.clientY, R("start", w));
    }
  }
  function m(w) {
    if (kt(w), !u) {
      var x = w.clientX - s, R = w.clientY - c;
      u = x * x + R * R > l;
    }
    i.mouse("drag", w);
  }
  function p(w) {
    Ke(w.view).on("mousemove.drag mouseup.drag", null), Uv(w.view, u), kt(w), i.mouse("end", w);
  }
  function v(w, x) {
    if (e.call(this, w, x)) {
      var R = w.changedTouches, T = t.call(this, w, x), N = R.length, O, k;
      for (O = 0; O < N; ++O)
        (k = E(this, T, w, x, R[O].identifier, R[O])) && (Cn(w), k("start", w, R[O]));
    }
  }
  function y(w) {
    var x = w.changedTouches, R = x.length, T, N;
    for (T = 0; T < R; ++T)
      (N = i[x[T].identifier]) && (kt(w), N("drag", w, x[T]));
  }
  function b(w) {
    var x = w.changedTouches, R = x.length, T, N;
    for (f && clearTimeout(f), f = setTimeout(function() {
      f = null;
    }, 500), T = 0; T < R; ++T)
      (N = i[x[T].identifier]) && (Cn(w), N("end", w, x[T]));
  }
  function E(w, x, R, T, N, O) {
    var k = a.copy(), q = tt(O || R, x), j, B, S;
    if ((S = r.call(w, new rc("beforestart", {
      sourceEvent: R,
      target: d,
      identifier: N,
      active: o,
      x: q[0],
      y: q[1],
      dx: 0,
      dy: 0,
      dispatch: k
    }), T)) != null)
      return j = S.x - q[0] || 0, B = S.y - q[1] || 0, function P(M, G, V) {
        var F = q, g;
        switch (M) {
          case "start":
            i[N] = P, g = o++;
            break;
          case "end":
            delete i[N], --o;
          // falls through
          case "drag":
            q = tt(V || G, x), g = o;
            break;
        }
        k.call(
          M,
          w,
          new rc(M, {
            sourceEvent: G,
            subject: S,
            target: d,
            identifier: N,
            active: g,
            x: q[0] + j,
            y: q[1] + B,
            dx: q[0] - F[0],
            dy: q[1] - F[1],
            dispatch: k
          }),
          T
        );
      };
  }
  return d.filter = function(w) {
    return arguments.length ? (e = typeof w == "function" ? w : Tr(!!w), d) : e;
  }, d.container = function(w) {
    return arguments.length ? (t = typeof w == "function" ? w : Tr(w), d) : t;
  }, d.subject = function(w) {
    return arguments.length ? (r = typeof w == "function" ? w : Tr(w), d) : r;
  }, d.touchable = function(w) {
    return arguments.length ? (n = typeof w == "function" ? w : Tr(!!w), d) : n;
  }, d.on = function() {
    var w = a.on.apply(a, arguments);
    return w === a ? d : w;
  }, d.clickDistance = function(w) {
    return arguments.length ? (l = (w = +w) * w, d) : Math.sqrt(l);
  }, d;
}
function bc(e, t, r) {
  e.prototype = t.prototype = r, r.constructor = e;
}
function Vv(e, t) {
  var r = Object.create(e.prototype);
  for (var n in t) r[n] = t[n];
  return r;
}
function pr() {
}
var sr = 0.7, jr = 1 / sr, Dt = "\\s*([+-]?\\d+)\\s*", ur = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", rt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", N0 = /^#([0-9a-f]{3,8})$/, I0 = new RegExp(`^rgb\\(${Dt},${Dt},${Dt}\\)$`), M0 = new RegExp(`^rgb\\(${rt},${rt},${rt}\\)$`), P0 = new RegExp(`^rgba\\(${Dt},${Dt},${Dt},${ur}\\)$`), k0 = new RegExp(`^rgba\\(${rt},${rt},${rt},${ur}\\)$`), D0 = new RegExp(`^hsl\\(${ur},${rt},${rt}\\)$`), L0 = new RegExp(`^hsla\\(${ur},${rt},${rt},${ur}\\)$`), bf = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
bc(pr, cr, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: wf,
  // Deprecated! Use color.formatHex.
  formatHex: wf,
  formatHex8: $0,
  formatHsl: F0,
  formatRgb: Ef,
  toString: Ef
});
function wf() {
  return this.rgb().formatHex();
}
function $0() {
  return this.rgb().formatHex8();
}
function F0() {
  return Yv(this).formatHsl();
}
function Ef() {
  return this.rgb().formatRgb();
}
function cr(e) {
  var t, r;
  return e = (e + "").trim().toLowerCase(), (t = N0.exec(e)) ? (r = t[1].length, t = parseInt(t[1], 16), r === 6 ? Sf(t) : r === 3 ? new ke(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : r === 8 ? Ar(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : r === 4 ? Ar(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = I0.exec(e)) ? new ke(t[1], t[2], t[3], 1) : (t = M0.exec(e)) ? new ke(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = P0.exec(e)) ? Ar(t[1], t[2], t[3], t[4]) : (t = k0.exec(e)) ? Ar(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = D0.exec(e)) ? Tf(t[1], t[2] / 100, t[3] / 100, 1) : (t = L0.exec(e)) ? Tf(t[1], t[2] / 100, t[3] / 100, t[4]) : bf.hasOwnProperty(e) ? Sf(bf[e]) : e === "transparent" ? new ke(NaN, NaN, NaN, 0) : null;
}
function Sf(e) {
  return new ke(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Ar(e, t, r, n) {
  return n <= 0 && (e = t = r = NaN), new ke(e, t, r, n);
}
function B0(e) {
  return e instanceof pr || (e = cr(e)), e ? (e = e.rgb(), new ke(e.r, e.g, e.b, e.opacity)) : new ke();
}
function nc(e, t, r, n) {
  return arguments.length === 1 ? B0(e) : new ke(e, t, r, n ?? 1);
}
function ke(e, t, r, n) {
  this.r = +e, this.g = +t, this.b = +r, this.opacity = +n;
}
bc(ke, nc, Vv(pr, {
  brighter(e) {
    return e = e == null ? jr : Math.pow(jr, e), new ke(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? sr : Math.pow(sr, e), new ke(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new ke(Et(this.r), Et(this.g), Et(this.b), Hr(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: xf,
  // Deprecated! Use color.formatHex.
  formatHex: xf,
  formatHex8: j0,
  formatRgb: Rf,
  toString: Rf
}));
function xf() {
  return `#${bt(this.r)}${bt(this.g)}${bt(this.b)}`;
}
function j0() {
  return `#${bt(this.r)}${bt(this.g)}${bt(this.b)}${bt((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Rf() {
  const e = Hr(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${Et(this.r)}, ${Et(this.g)}, ${Et(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Hr(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function Et(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function bt(e) {
  return e = Et(e), (e < 16 ? "0" : "") + e.toString(16);
}
function Tf(e, t, r, n) {
  return n <= 0 ? e = t = r = NaN : r <= 0 || r >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new We(e, t, r, n);
}
function Yv(e) {
  if (e instanceof We) return new We(e.h, e.s, e.l, e.opacity);
  if (e instanceof pr || (e = cr(e)), !e) return new We();
  if (e instanceof We) return e;
  e = e.rgb();
  var t = e.r / 255, r = e.g / 255, n = e.b / 255, i = Math.min(t, r, n), a = Math.max(t, r, n), o = NaN, s = a - i, c = (a + i) / 2;
  return s ? (t === a ? o = (r - n) / s + (r < n) * 6 : r === a ? o = (n - t) / s + 2 : o = (t - r) / s + 4, s /= c < 0.5 ? a + i : 2 - a - i, o *= 60) : s = c > 0 && c < 1 ? 0 : o, new We(o, s, c, e.opacity);
}
function H0(e, t, r, n) {
  return arguments.length === 1 ? Yv(e) : new We(e, t, r, n ?? 1);
}
function We(e, t, r, n) {
  this.h = +e, this.s = +t, this.l = +r, this.opacity = +n;
}
bc(We, H0, Vv(pr, {
  brighter(e) {
    return e = e == null ? jr : Math.pow(jr, e), new We(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? sr : Math.pow(sr, e), new We(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, r = this.l, n = r + (r < 0.5 ? r : 1 - r) * t, i = 2 * r - n;
    return new ke(
      On(e >= 240 ? e - 240 : e + 120, i, n),
      On(e, i, n),
      On(e < 120 ? e + 240 : e - 120, i, n),
      this.opacity
    );
  },
  clamp() {
    return new We(Af(this.h), Cr(this.s), Cr(this.l), Hr(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = Hr(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${Af(this.h)}, ${Cr(this.s) * 100}%, ${Cr(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function Af(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Cr(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function On(e, t, r) {
  return (e < 60 ? t + (r - t) * e / 60 : e < 180 ? r : e < 240 ? t + (r - t) * (240 - e) / 60 : t) * 255;
}
const Kv = (e) => () => e;
function z0(e, t) {
  return function(r) {
    return e + r * t;
  };
}
function G0(e, t, r) {
  return e = Math.pow(e, r), t = Math.pow(t, r) - e, r = 1 / r, function(n) {
    return Math.pow(e + n * t, r);
  };
}
function U0(e) {
  return (e = +e) == 1 ? Wv : function(t, r) {
    return r - t ? G0(t, r, e) : Kv(isNaN(t) ? r : t);
  };
}
function Wv(e, t) {
  var r = t - e;
  return r ? z0(e, r) : Kv(isNaN(e) ? t : e);
}
const Cf = function e(t) {
  var r = U0(t);
  function n(i, a) {
    var o = r((i = nc(i)).r, (a = nc(a)).r), s = r(i.g, a.g), c = r(i.b, a.b), u = Wv(i.opacity, a.opacity);
    return function(f) {
      return i.r = o(f), i.g = s(f), i.b = c(f), i.opacity = u(f), i + "";
    };
  }
  return n.gamma = e, n;
}(1);
function dt(e, t) {
  return e = +e, t = +t, function(r) {
    return e * (1 - r) + t * r;
  };
}
var ic = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, qn = new RegExp(ic.source, "g");
function V0(e) {
  return function() {
    return e;
  };
}
function Y0(e) {
  return function(t) {
    return e(t) + "";
  };
}
function K0(e, t) {
  var r = ic.lastIndex = qn.lastIndex = 0, n, i, a, o = -1, s = [], c = [];
  for (e = e + "", t = t + ""; (n = ic.exec(e)) && (i = qn.exec(t)); )
    (a = i.index) > r && (a = t.slice(r, a), s[o] ? s[o] += a : s[++o] = a), (n = n[0]) === (i = i[0]) ? s[o] ? s[o] += i : s[++o] = i : (s[++o] = null, c.push({ i: o, x: dt(n, i) })), r = qn.lastIndex;
  return r < t.length && (a = t.slice(r), s[o] ? s[o] += a : s[++o] = a), s.length < 2 ? c[0] ? Y0(c[0].x) : V0(t) : (t = c.length, function(u) {
    for (var f = 0, l; f < t; ++f) s[(l = c[f]).i] = l.x(u);
    return s.join("");
  });
}
var Of = 180 / Math.PI, ac = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Xv(e, t, r, n, i, a) {
  var o, s, c;
  return (o = Math.sqrt(e * e + t * t)) && (e /= o, t /= o), (c = e * r + t * n) && (r -= e * c, n -= t * c), (s = Math.sqrt(r * r + n * n)) && (r /= s, n /= s, c /= s), e * n < t * r && (e = -e, t = -t, c = -c, o = -o), {
    translateX: i,
    translateY: a,
    rotate: Math.atan2(t, e) * Of,
    skewX: Math.atan(c) * Of,
    scaleX: o,
    scaleY: s
  };
}
var Or;
function W0(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? ac : Xv(t.a, t.b, t.c, t.d, t.e, t.f);
}
function X0(e) {
  return e == null || (Or || (Or = document.createElementNS("http://www.w3.org/2000/svg", "g")), Or.setAttribute("transform", e), !(e = Or.transform.baseVal.consolidate())) ? ac : (e = e.matrix, Xv(e.a, e.b, e.c, e.d, e.e, e.f));
}
function Zv(e, t, r, n) {
  function i(u) {
    return u.length ? u.pop() + " " : "";
  }
  function a(u, f, l, d, h, m) {
    if (u !== l || f !== d) {
      var p = h.push("translate(", null, t, null, r);
      m.push({ i: p - 4, x: dt(u, l) }, { i: p - 2, x: dt(f, d) });
    } else (l || d) && h.push("translate(" + l + t + d + r);
  }
  function o(u, f, l, d) {
    u !== f ? (u - f > 180 ? f += 360 : f - u > 180 && (u += 360), d.push({ i: l.push(i(l) + "rotate(", null, n) - 2, x: dt(u, f) })) : f && l.push(i(l) + "rotate(" + f + n);
  }
  function s(u, f, l, d) {
    u !== f ? d.push({ i: l.push(i(l) + "skewX(", null, n) - 2, x: dt(u, f) }) : f && l.push(i(l) + "skewX(" + f + n);
  }
  function c(u, f, l, d, h, m) {
    if (u !== l || f !== d) {
      var p = h.push(i(h) + "scale(", null, ",", null, ")");
      m.push({ i: p - 4, x: dt(u, l) }, { i: p - 2, x: dt(f, d) });
    } else (l !== 1 || d !== 1) && h.push(i(h) + "scale(" + l + "," + d + ")");
  }
  return function(u, f) {
    var l = [], d = [];
    return u = e(u), f = e(f), a(u.translateX, u.translateY, f.translateX, f.translateY, l, d), o(u.rotate, f.rotate, l, d), s(u.skewX, f.skewX, l, d), c(u.scaleX, u.scaleY, f.scaleX, f.scaleY, l, d), u = f = null, function(h) {
      for (var m = -1, p = d.length, v; ++m < p; ) l[(v = d[m]).i] = v.x(h);
      return l.join("");
    };
  };
}
var Z0 = Zv(W0, "px, ", "px)", "deg)"), Q0 = Zv(X0, ", ", ")", ")"), J0 = 1e-12;
function qf(e) {
  return ((e = Math.exp(e)) + 1 / e) / 2;
}
function ew(e) {
  return ((e = Math.exp(e)) - 1 / e) / 2;
}
function tw(e) {
  return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
const rw = function e(t, r, n) {
  function i(a, o) {
    var s = a[0], c = a[1], u = a[2], f = o[0], l = o[1], d = o[2], h = f - s, m = l - c, p = h * h + m * m, v, y;
    if (p < J0)
      y = Math.log(d / u) / t, v = function(T) {
        return [
          s + T * h,
          c + T * m,
          u * Math.exp(t * T * y)
        ];
      };
    else {
      var b = Math.sqrt(p), E = (d * d - u * u + n * p) / (2 * u * r * b), w = (d * d - u * u - n * p) / (2 * d * r * b), x = Math.log(Math.sqrt(E * E + 1) - E), R = Math.log(Math.sqrt(w * w + 1) - w);
      y = (R - x) / t, v = function(T) {
        var N = T * y, O = qf(x), k = u / (r * b) * (O * tw(t * N + x) - ew(x));
        return [
          s + k * h,
          c + k * m,
          u * O / qf(t * N + x)
        ];
      };
    }
    return v.duration = y * 1e3 * t / Math.SQRT2, v;
  }
  return i.rho = function(a) {
    var o = Math.max(1e-3, +a), s = o * o, c = s * s;
    return e(o, s, c);
  }, i;
}(Math.SQRT2, 2, 4);
var Bt = 0, tr = 0, Wt = 0, Qv = 1e3, zr, rr, Gr = 0, St = 0, Jr = 0, fr = typeof performance == "object" && performance.now ? performance : Date, Jv = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function wc() {
  return St || (Jv(nw), St = fr.now() + Jr);
}
function nw() {
  St = 0;
}
function Ur() {
  this._call = this._time = this._next = null;
}
Ur.prototype = ey.prototype = {
  constructor: Ur,
  restart: function(e, t, r) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    r = (r == null ? wc() : +r) + (t == null ? 0 : +t), !this._next && rr !== this && (rr ? rr._next = this : zr = this, rr = this), this._call = e, this._time = r, oc();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, oc());
  }
};
function ey(e, t, r) {
  var n = new Ur();
  return n.restart(e, t, r), n;
}
function iw() {
  wc(), ++Bt;
  for (var e = zr, t; e; )
    (t = St - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --Bt;
}
function Nf() {
  St = (Gr = fr.now()) + Jr, Bt = tr = 0;
  try {
    iw();
  } finally {
    Bt = 0, ow(), St = 0;
  }
}
function aw() {
  var e = fr.now(), t = e - Gr;
  t > Qv && (Jr -= t, Gr = e);
}
function ow() {
  for (var e, t = zr, r, n = 1 / 0; t; )
    t._call ? (n > t._time && (n = t._time), e = t, t = t._next) : (r = t._next, t._next = null, t = e ? e._next = r : zr = r);
  rr = e, oc(n);
}
function oc(e) {
  if (!Bt) {
    tr && (tr = clearTimeout(tr));
    var t = e - St;
    t > 24 ? (e < 1 / 0 && (tr = setTimeout(Nf, e - fr.now() - Jr)), Wt && (Wt = clearInterval(Wt))) : (Wt || (Gr = fr.now(), Wt = setInterval(aw, Qv)), Bt = 1, Jv(Nf));
  }
}
function If(e, t, r) {
  var n = new Ur();
  return t = t == null ? 0 : +t, n.restart((i) => {
    n.stop(), e(i + t);
  }, t, r), n;
}
var sw = Zr("start", "end", "cancel", "interrupt"), uw = [], ty = 0, Mf = 1, sc = 2, Lr = 3, Pf = 4, uc = 5, $r = 6;
function en(e, t, r, n, i, a) {
  var o = e.__transition;
  if (!o) e.__transition = {};
  else if (r in o) return;
  cw(e, r, {
    name: t,
    index: n,
    // For context during callback.
    group: i,
    // For context during callback.
    on: sw,
    tween: uw,
    time: a.time,
    delay: a.delay,
    duration: a.duration,
    ease: a.ease,
    timer: null,
    state: ty
  });
}
function Ec(e, t) {
  var r = Qe(e, t);
  if (r.state > ty) throw new Error("too late; already scheduled");
  return r;
}
function nt(e, t) {
  var r = Qe(e, t);
  if (r.state > Lr) throw new Error("too late; already running");
  return r;
}
function Qe(e, t) {
  var r = e.__transition;
  if (!r || !(r = r[t])) throw new Error("transition not found");
  return r;
}
function cw(e, t, r) {
  var n = e.__transition, i;
  n[t] = r, r.timer = ey(a, 0, r.time);
  function a(u) {
    r.state = Mf, r.timer.restart(o, r.delay, r.time), r.delay <= u && o(u - r.delay);
  }
  function o(u) {
    var f, l, d, h;
    if (r.state !== Mf) return c();
    for (f in n)
      if (h = n[f], h.name === r.name) {
        if (h.state === Lr) return If(o);
        h.state === Pf ? (h.state = $r, h.timer.stop(), h.on.call("interrupt", e, e.__data__, h.index, h.group), delete n[f]) : +f < t && (h.state = $r, h.timer.stop(), h.on.call("cancel", e, e.__data__, h.index, h.group), delete n[f]);
      }
    if (If(function() {
      r.state === Lr && (r.state = Pf, r.timer.restart(s, r.delay, r.time), s(u));
    }), r.state = sc, r.on.call("start", e, e.__data__, r.index, r.group), r.state === sc) {
      for (r.state = Lr, i = new Array(d = r.tween.length), f = 0, l = -1; f < d; ++f)
        (h = r.tween[f].value.call(e, e.__data__, r.index, r.group)) && (i[++l] = h);
      i.length = l + 1;
    }
  }
  function s(u) {
    for (var f = u < r.duration ? r.ease.call(null, u / r.duration) : (r.timer.restart(c), r.state = uc, 1), l = -1, d = i.length; ++l < d; )
      i[l].call(e, f);
    r.state === uc && (r.on.call("end", e, e.__data__, r.index, r.group), c());
  }
  function c() {
    r.state = $r, r.timer.stop(), delete n[t];
    for (var u in n) return;
    delete e.__transition;
  }
}
function Fr(e, t) {
  var r = e.__transition, n, i, a = !0, o;
  if (r) {
    t = t == null ? null : t + "";
    for (o in r) {
      if ((n = r[o]).name !== t) {
        a = !1;
        continue;
      }
      i = n.state > sc && n.state < uc, n.state = $r, n.timer.stop(), n.on.call(i ? "interrupt" : "cancel", e, e.__data__, n.index, n.group), delete r[o];
    }
    a && delete e.__transition;
  }
}
function fw(e) {
  return this.each(function() {
    Fr(this, e);
  });
}
function lw(e, t) {
  var r, n;
  return function() {
    var i = nt(this, e), a = i.tween;
    if (a !== r) {
      n = r = a;
      for (var o = 0, s = n.length; o < s; ++o)
        if (n[o].name === t) {
          n = n.slice(), n.splice(o, 1);
          break;
        }
    }
    i.tween = n;
  };
}
function dw(e, t, r) {
  var n, i;
  if (typeof r != "function") throw new Error();
  return function() {
    var a = nt(this, e), o = a.tween;
    if (o !== n) {
      i = (n = o).slice();
      for (var s = { name: t, value: r }, c = 0, u = i.length; c < u; ++c)
        if (i[c].name === t) {
          i[c] = s;
          break;
        }
      c === u && i.push(s);
    }
    a.tween = i;
  };
}
function hw(e, t) {
  var r = this._id;
  if (e += "", arguments.length < 2) {
    for (var n = Qe(this.node(), r).tween, i = 0, a = n.length, o; i < a; ++i)
      if ((o = n[i]).name === e)
        return o.value;
    return null;
  }
  return this.each((t == null ? lw : dw)(r, e, t));
}
function Sc(e, t, r) {
  var n = e._id;
  return e.each(function() {
    var i = nt(this, n);
    (i.value || (i.value = {}))[t] = r.apply(this, arguments);
  }), function(i) {
    return Qe(i, n).value[t];
  };
}
function ry(e, t) {
  var r;
  return (typeof t == "number" ? dt : t instanceof cr ? Cf : (r = cr(t)) ? (t = r, Cf) : K0)(e, t);
}
function pw(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function gw(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function vw(e, t, r) {
  var n, i = r + "", a;
  return function() {
    var o = this.getAttribute(e);
    return o === i ? null : o === n ? a : a = t(n = o, r);
  };
}
function yw(e, t, r) {
  var n, i = r + "", a;
  return function() {
    var o = this.getAttributeNS(e.space, e.local);
    return o === i ? null : o === n ? a : a = t(n = o, r);
  };
}
function mw(e, t, r) {
  var n, i, a;
  return function() {
    var o, s = r(this), c;
    return s == null ? void this.removeAttribute(e) : (o = this.getAttribute(e), c = s + "", o === c ? null : o === n && c === i ? a : (i = c, a = t(n = o, s)));
  };
}
function _w(e, t, r) {
  var n, i, a;
  return function() {
    var o, s = r(this), c;
    return s == null ? void this.removeAttributeNS(e.space, e.local) : (o = this.getAttributeNS(e.space, e.local), c = s + "", o === c ? null : o === n && c === i ? a : (i = c, a = t(n = o, s)));
  };
}
function bw(e, t) {
  var r = Qr(e), n = r === "transform" ? Q0 : ry;
  return this.attrTween(e, typeof t == "function" ? (r.local ? _w : mw)(r, n, Sc(this, "attr." + e, t)) : t == null ? (r.local ? gw : pw)(r) : (r.local ? yw : vw)(r, n, t));
}
function ww(e, t) {
  return function(r) {
    this.setAttribute(e, t.call(this, r));
  };
}
function Ew(e, t) {
  return function(r) {
    this.setAttributeNS(e.space, e.local, t.call(this, r));
  };
}
function Sw(e, t) {
  var r, n;
  function i() {
    var a = t.apply(this, arguments);
    return a !== n && (r = (n = a) && Ew(e, a)), r;
  }
  return i._value = t, i;
}
function xw(e, t) {
  var r, n;
  function i() {
    var a = t.apply(this, arguments);
    return a !== n && (r = (n = a) && ww(e, a)), r;
  }
  return i._value = t, i;
}
function Rw(e, t) {
  var r = "attr." + e;
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (t == null) return this.tween(r, null);
  if (typeof t != "function") throw new Error();
  var n = Qr(e);
  return this.tween(r, (n.local ? Sw : xw)(n, t));
}
function Tw(e, t) {
  return function() {
    Ec(this, e).delay = +t.apply(this, arguments);
  };
}
function Aw(e, t) {
  return t = +t, function() {
    Ec(this, e).delay = t;
  };
}
function Cw(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Tw : Aw)(t, e)) : Qe(this.node(), t).delay;
}
function Ow(e, t) {
  return function() {
    nt(this, e).duration = +t.apply(this, arguments);
  };
}
function qw(e, t) {
  return t = +t, function() {
    nt(this, e).duration = t;
  };
}
function Nw(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Ow : qw)(t, e)) : Qe(this.node(), t).duration;
}
function Iw(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    nt(this, e).ease = t;
  };
}
function Mw(e) {
  var t = this._id;
  return arguments.length ? this.each(Iw(t, e)) : Qe(this.node(), t).ease;
}
function Pw(e, t) {
  return function() {
    var r = t.apply(this, arguments);
    if (typeof r != "function") throw new Error();
    nt(this, e).ease = r;
  };
}
function kw(e) {
  if (typeof e != "function") throw new Error();
  return this.each(Pw(this._id, e));
}
function Dw(e) {
  typeof e != "function" && (e = Pv(e));
  for (var t = this._groups, r = t.length, n = new Array(r), i = 0; i < r; ++i)
    for (var a = t[i], o = a.length, s = n[i] = [], c, u = 0; u < o; ++u)
      (c = a[u]) && e.call(c, c.__data__, u, a) && s.push(c);
  return new st(n, this._parents, this._name, this._id);
}
function Lw(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, r = e._groups, n = t.length, i = r.length, a = Math.min(n, i), o = new Array(n), s = 0; s < a; ++s)
    for (var c = t[s], u = r[s], f = c.length, l = o[s] = new Array(f), d, h = 0; h < f; ++h)
      (d = c[h] || u[h]) && (l[h] = d);
  for (; s < n; ++s)
    o[s] = t[s];
  return new st(o, this._parents, this._name, this._id);
}
function $w(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var r = t.indexOf(".");
    return r >= 0 && (t = t.slice(0, r)), !t || t === "start";
  });
}
function Fw(e, t, r) {
  var n, i, a = $w(t) ? Ec : nt;
  return function() {
    var o = a(this, e), s = o.on;
    s !== n && (i = (n = s).copy()).on(t, r), o.on = i;
  };
}
function Bw(e, t) {
  var r = this._id;
  return arguments.length < 2 ? Qe(this.node(), r).on.on(e) : this.each(Fw(r, e, t));
}
function jw(e) {
  return function() {
    var t = this.parentNode;
    for (var r in this.__transition) if (+r !== e) return;
    t && t.removeChild(this);
  };
}
function Hw() {
  return this.on("end.remove", jw(this._id));
}
function zw(e) {
  var t = this._name, r = this._id;
  typeof e != "function" && (e = mc(e));
  for (var n = this._groups, i = n.length, a = new Array(i), o = 0; o < i; ++o)
    for (var s = n[o], c = s.length, u = a[o] = new Array(c), f, l, d = 0; d < c; ++d)
      (f = s[d]) && (l = e.call(f, f.__data__, d, s)) && ("__data__" in f && (l.__data__ = f.__data__), u[d] = l, en(u[d], t, r, d, u, Qe(f, r)));
  return new st(a, this._parents, t, r);
}
function Gw(e) {
  var t = this._name, r = this._id;
  typeof e != "function" && (e = Mv(e));
  for (var n = this._groups, i = n.length, a = [], o = [], s = 0; s < i; ++s)
    for (var c = n[s], u = c.length, f, l = 0; l < u; ++l)
      if (f = c[l]) {
        for (var d = e.call(f, f.__data__, l, c), h, m = Qe(f, r), p = 0, v = d.length; p < v; ++p)
          (h = d[p]) && en(h, t, r, p, d, m);
        a.push(d), o.push(f);
      }
  return new st(a, o, t, r);
}
var Uw = hr.prototype.constructor;
function Vw() {
  return new Uw(this._groups, this._parents);
}
function Yw(e, t) {
  var r, n, i;
  return function() {
    var a = Ft(this, e), o = (this.style.removeProperty(e), Ft(this, e));
    return a === o ? null : a === r && o === n ? i : i = t(r = a, n = o);
  };
}
function ny(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function Kw(e, t, r) {
  var n, i = r + "", a;
  return function() {
    var o = Ft(this, e);
    return o === i ? null : o === n ? a : a = t(n = o, r);
  };
}
function Ww(e, t, r) {
  var n, i, a;
  return function() {
    var o = Ft(this, e), s = r(this), c = s + "";
    return s == null && (c = s = (this.style.removeProperty(e), Ft(this, e))), o === c ? null : o === n && c === i ? a : (i = c, a = t(n = o, s));
  };
}
function Xw(e, t) {
  var r, n, i, a = "style." + t, o = "end." + a, s;
  return function() {
    var c = nt(this, e), u = c.on, f = c.value[a] == null ? s || (s = ny(t)) : void 0;
    (u !== r || i !== f) && (n = (r = u).copy()).on(o, i = f), c.on = n;
  };
}
function Zw(e, t, r) {
  var n = (e += "") == "transform" ? Z0 : ry;
  return t == null ? this.styleTween(e, Yw(e, n)).on("end.style." + e, ny(e)) : typeof t == "function" ? this.styleTween(e, Ww(e, n, Sc(this, "style." + e, t))).each(Xw(this._id, e)) : this.styleTween(e, Kw(e, n, t), r).on("end.style." + e, null);
}
function Qw(e, t, r) {
  return function(n) {
    this.style.setProperty(e, t.call(this, n), r);
  };
}
function Jw(e, t, r) {
  var n, i;
  function a() {
    var o = t.apply(this, arguments);
    return o !== i && (n = (i = o) && Qw(e, o, r)), n;
  }
  return a._value = t, a;
}
function eE(e, t, r) {
  var n = "style." + (e += "");
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  return this.tween(n, Jw(e, t, r ?? ""));
}
function tE(e) {
  return function() {
    this.textContent = e;
  };
}
function rE(e) {
  return function() {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function nE(e) {
  return this.tween("text", typeof e == "function" ? rE(Sc(this, "text", e)) : tE(e == null ? "" : e + ""));
}
function iE(e) {
  return function(t) {
    this.textContent = e.call(this, t);
  };
}
function aE(e) {
  var t, r;
  function n() {
    var i = e.apply(this, arguments);
    return i !== r && (t = (r = i) && iE(i)), t;
  }
  return n._value = e, n;
}
function oE(e) {
  var t = "text";
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (e == null) return this.tween(t, null);
  if (typeof e != "function") throw new Error();
  return this.tween(t, aE(e));
}
function sE() {
  for (var e = this._name, t = this._id, r = iy(), n = this._groups, i = n.length, a = 0; a < i; ++a)
    for (var o = n[a], s = o.length, c, u = 0; u < s; ++u)
      if (c = o[u]) {
        var f = Qe(c, t);
        en(c, e, r, u, o, {
          time: f.time + f.delay + f.duration,
          delay: 0,
          duration: f.duration,
          ease: f.ease
        });
      }
  return new st(n, this._parents, e, r);
}
function uE() {
  var e, t, r = this, n = r._id, i = r.size();
  return new Promise(function(a, o) {
    var s = { value: o }, c = { value: function() {
      --i === 0 && a();
    } };
    r.each(function() {
      var u = nt(this, n), f = u.on;
      f !== e && (t = (e = f).copy(), t._.cancel.push(s), t._.interrupt.push(s), t._.end.push(c)), u.on = t;
    }), i === 0 && a();
  });
}
var cE = 0;
function st(e, t, r, n) {
  this._groups = e, this._parents = t, this._name = r, this._id = n;
}
function iy() {
  return ++cE;
}
var at = hr.prototype;
st.prototype = {
  constructor: st,
  select: zw,
  selectAll: Gw,
  selectChild: at.selectChild,
  selectChildren: at.selectChildren,
  filter: Dw,
  merge: Lw,
  selection: Vw,
  transition: sE,
  call: at.call,
  nodes: at.nodes,
  node: at.node,
  size: at.size,
  empty: at.empty,
  each: at.each,
  on: Bw,
  attr: bw,
  attrTween: Rw,
  style: Zw,
  styleTween: eE,
  text: nE,
  textTween: oE,
  remove: Hw,
  tween: hw,
  delay: Cw,
  duration: Nw,
  ease: Mw,
  easeVarying: kw,
  end: uE,
  [Symbol.iterator]: at[Symbol.iterator]
};
function fE(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var lE = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: fE
};
function dE(e, t) {
  for (var r; !(r = e.__transition) || !(r = r[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return r;
}
function hE(e) {
  var t, r;
  e instanceof st ? (t = e._id, e = e._name) : (t = iy(), (r = lE).time = wc(), e = e == null ? null : e + "");
  for (var n = this._groups, i = n.length, a = 0; a < i; ++a)
    for (var o = n[a], s = o.length, c, u = 0; u < s; ++u)
      (c = o[u]) && en(c, e, t, u, o, r || dE(c, t));
  return new st(n, this._parents, e, t);
}
hr.prototype.interrupt = fw;
hr.prototype.transition = hE;
const qr = (e) => () => e;
function pE(e, {
  sourceEvent: t,
  target: r,
  transform: n,
  dispatch: i
}) {
  Object.defineProperties(this, {
    type: { value: e, enumerable: !0, configurable: !0 },
    sourceEvent: { value: t, enumerable: !0, configurable: !0 },
    target: { value: r, enumerable: !0, configurable: !0 },
    transform: { value: n, enumerable: !0, configurable: !0 },
    _: { value: i }
  });
}
function ot(e, t, r) {
  this.k = e, this.x = t, this.y = r;
}
ot.prototype = {
  constructor: ot,
  scale: function(e) {
    return e === 1 ? this : new ot(this.k * e, this.x, this.y);
  },
  translate: function(e, t) {
    return e === 0 & t === 0 ? this : new ot(this.k, this.x + this.k * e, this.y + this.k * t);
  },
  apply: function(e) {
    return [e[0] * this.k + this.x, e[1] * this.k + this.y];
  },
  applyX: function(e) {
    return e * this.k + this.x;
  },
  applyY: function(e) {
    return e * this.k + this.y;
  },
  invert: function(e) {
    return [(e[0] - this.x) / this.k, (e[1] - this.y) / this.k];
  },
  invertX: function(e) {
    return (e - this.x) / this.k;
  },
  invertY: function(e) {
    return (e - this.y) / this.k;
  },
  rescaleX: function(e) {
    return e.copy().domain(e.range().map(this.invertX, this).map(e.invert, e));
  },
  rescaleY: function(e) {
    return e.copy().domain(e.range().map(this.invertY, this).map(e.invert, e));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
var gt = new ot(1, 0, 0);
ot.prototype;
function Nn(e) {
  e.stopImmediatePropagation();
}
function Xt(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function gE(e) {
  return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function vE() {
  var e = this;
  return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function kf() {
  return this.__zoom || gt;
}
function yE(e) {
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * (e.ctrlKey ? 10 : 1);
}
function mE() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function _E(e, t, r) {
  var n = e.invertX(t[0][0]) - r[0][0], i = e.invertX(t[1][0]) - r[1][0], a = e.invertY(t[0][1]) - r[0][1], o = e.invertY(t[1][1]) - r[1][1];
  return e.translate(
    i > n ? (n + i) / 2 : Math.min(0, n) || Math.max(0, i),
    o > a ? (a + o) / 2 : Math.min(0, a) || Math.max(0, o)
  );
}
function bE() {
  var e = gE, t = vE, r = _E, n = yE, i = mE, a = [0, 1 / 0], o = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], s = 250, c = rw, u = Zr("start", "zoom", "end"), f, l, d, h = 500, m = 150, p = 0, v = 10;
  function y(S) {
    S.property("__zoom", kf).on("wheel.zoom", N, { passive: !1 }).on("mousedown.zoom", O).on("dblclick.zoom", k).filter(i).on("touchstart.zoom", q).on("touchmove.zoom", j).on("touchend.zoom touchcancel.zoom", B).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  y.transform = function(S, P, M, G) {
    var V = S.selection ? S.selection() : S;
    V.property("__zoom", kf), S !== V ? x(S, P, M, G) : V.interrupt().each(function() {
      R(this, arguments).event(G).start().zoom(null, typeof P == "function" ? P.apply(this, arguments) : P).end();
    });
  }, y.scaleBy = function(S, P, M, G) {
    y.scaleTo(S, function() {
      var V = this.__zoom.k, F = typeof P == "function" ? P.apply(this, arguments) : P;
      return V * F;
    }, M, G);
  }, y.scaleTo = function(S, P, M, G) {
    y.transform(S, function() {
      var V = t.apply(this, arguments), F = this.__zoom, g = M == null ? w(V) : typeof M == "function" ? M.apply(this, arguments) : M, C = F.invert(g), L = typeof P == "function" ? P.apply(this, arguments) : P;
      return r(E(b(F, L), g, C), V, o);
    }, M, G);
  }, y.translateBy = function(S, P, M, G) {
    y.transform(S, function() {
      return r(this.__zoom.translate(
        typeof P == "function" ? P.apply(this, arguments) : P,
        typeof M == "function" ? M.apply(this, arguments) : M
      ), t.apply(this, arguments), o);
    }, null, G);
  }, y.translateTo = function(S, P, M, G, V) {
    y.transform(S, function() {
      var F = t.apply(this, arguments), g = this.__zoom, C = G == null ? w(F) : typeof G == "function" ? G.apply(this, arguments) : G;
      return r(gt.translate(C[0], C[1]).scale(g.k).translate(
        typeof P == "function" ? -P.apply(this, arguments) : -P,
        typeof M == "function" ? -M.apply(this, arguments) : -M
      ), F, o);
    }, G, V);
  };
  function b(S, P) {
    return P = Math.max(a[0], Math.min(a[1], P)), P === S.k ? S : new ot(P, S.x, S.y);
  }
  function E(S, P, M) {
    var G = P[0] - M[0] * S.k, V = P[1] - M[1] * S.k;
    return G === S.x && V === S.y ? S : new ot(S.k, G, V);
  }
  function w(S) {
    return [(+S[0][0] + +S[1][0]) / 2, (+S[0][1] + +S[1][1]) / 2];
  }
  function x(S, P, M, G) {
    S.on("start.zoom", function() {
      R(this, arguments).event(G).start();
    }).on("interrupt.zoom end.zoom", function() {
      R(this, arguments).event(G).end();
    }).tween("zoom", function() {
      var V = this, F = arguments, g = R(V, F).event(G), C = t.apply(V, F), L = M == null ? w(C) : typeof M == "function" ? M.apply(V, F) : M, H = Math.max(C[1][0] - C[0][0], C[1][1] - C[0][1]), A = V.__zoom, I = typeof P == "function" ? P.apply(V, F) : P, $ = c(A.invert(L).concat(H / A.k), I.invert(L).concat(H / I.k));
      return function(U) {
        if (U === 1) U = I;
        else {
          var Y = $(U), J = H / Y[2];
          U = new ot(J, L[0] - Y[0] * J, L[1] - Y[1] * J);
        }
        g.zoom(null, U);
      };
    });
  }
  function R(S, P, M) {
    return !M && S.__zooming || new T(S, P);
  }
  function T(S, P) {
    this.that = S, this.args = P, this.active = 0, this.sourceEvent = null, this.extent = t.apply(S, P), this.taps = 0;
  }
  T.prototype = {
    event: function(S) {
      return S && (this.sourceEvent = S), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(S, P) {
      return this.mouse && S !== "mouse" && (this.mouse[1] = P.invert(this.mouse[0])), this.touch0 && S !== "touch" && (this.touch0[1] = P.invert(this.touch0[0])), this.touch1 && S !== "touch" && (this.touch1[1] = P.invert(this.touch1[0])), this.that.__zoom = P, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(S) {
      var P = Ke(this.that).datum();
      u.call(
        S,
        this.that,
        new pE(S, {
          sourceEvent: this.sourceEvent,
          target: y,
          transform: this.that.__zoom,
          dispatch: u
        }),
        P
      );
    }
  };
  function N(S, ...P) {
    if (!e.apply(this, arguments)) return;
    var M = R(this, P).event(S), G = this.__zoom, V = Math.max(a[0], Math.min(a[1], G.k * Math.pow(2, n.apply(this, arguments)))), F = tt(S);
    if (M.wheel)
      (M.mouse[0][0] !== F[0] || M.mouse[0][1] !== F[1]) && (M.mouse[1] = G.invert(M.mouse[0] = F)), clearTimeout(M.wheel);
    else {
      if (G.k === V) return;
      M.mouse = [F, G.invert(F)], Fr(this), M.start();
    }
    Xt(S), M.wheel = setTimeout(g, m), M.zoom("mouse", r(E(b(G, V), M.mouse[0], M.mouse[1]), M.extent, o));
    function g() {
      M.wheel = null, M.end();
    }
  }
  function O(S, ...P) {
    if (d || !e.apply(this, arguments)) return;
    var M = S.currentTarget, G = R(this, P, !0).event(S), V = Ke(S.view).on("mousemove.zoom", L, !0).on("mouseup.zoom", H, !0), F = tt(S, M), g = S.clientX, C = S.clientY;
    Gv(S.view), Nn(S), G.mouse = [F, this.__zoom.invert(F)], Fr(this), G.start();
    function L(A) {
      if (Xt(A), !G.moved) {
        var I = A.clientX - g, $ = A.clientY - C;
        G.moved = I * I + $ * $ > p;
      }
      G.event(A).zoom("mouse", r(E(G.that.__zoom, G.mouse[0] = tt(A, M), G.mouse[1]), G.extent, o));
    }
    function H(A) {
      V.on("mousemove.zoom mouseup.zoom", null), Uv(A.view, G.moved), Xt(A), G.event(A).end();
    }
  }
  function k(S, ...P) {
    if (e.apply(this, arguments)) {
      var M = this.__zoom, G = tt(S.changedTouches ? S.changedTouches[0] : S, this), V = M.invert(G), F = M.k * (S.shiftKey ? 0.5 : 2), g = r(E(b(M, F), G, V), t.apply(this, P), o);
      Xt(S), s > 0 ? Ke(this).transition().duration(s).call(x, g, G, S) : Ke(this).call(y.transform, g, G, S);
    }
  }
  function q(S, ...P) {
    if (e.apply(this, arguments)) {
      var M = S.touches, G = M.length, V = R(this, P, S.changedTouches.length === G).event(S), F, g, C, L;
      for (Nn(S), g = 0; g < G; ++g)
        C = M[g], L = tt(C, this), L = [L, this.__zoom.invert(L), C.identifier], V.touch0 ? !V.touch1 && V.touch0[2] !== L[2] && (V.touch1 = L, V.taps = 0) : (V.touch0 = L, F = !0, V.taps = 1 + !!f);
      f && (f = clearTimeout(f)), F && (V.taps < 2 && (l = L[0], f = setTimeout(function() {
        f = null;
      }, h)), Fr(this), V.start());
    }
  }
  function j(S, ...P) {
    if (this.__zooming) {
      var M = R(this, P).event(S), G = S.changedTouches, V = G.length, F, g, C, L;
      for (Xt(S), F = 0; F < V; ++F)
        g = G[F], C = tt(g, this), M.touch0 && M.touch0[2] === g.identifier ? M.touch0[0] = C : M.touch1 && M.touch1[2] === g.identifier && (M.touch1[0] = C);
      if (g = M.that.__zoom, M.touch1) {
        var H = M.touch0[0], A = M.touch0[1], I = M.touch1[0], $ = M.touch1[1], U = (U = I[0] - H[0]) * U + (U = I[1] - H[1]) * U, Y = (Y = $[0] - A[0]) * Y + (Y = $[1] - A[1]) * Y;
        g = b(g, Math.sqrt(U / Y)), C = [(H[0] + I[0]) / 2, (H[1] + I[1]) / 2], L = [(A[0] + $[0]) / 2, (A[1] + $[1]) / 2];
      } else if (M.touch0) C = M.touch0[0], L = M.touch0[1];
      else return;
      M.zoom("touch", r(E(g, C, L), M.extent, o));
    }
  }
  function B(S, ...P) {
    if (this.__zooming) {
      var M = R(this, P).event(S), G = S.changedTouches, V = G.length, F, g;
      for (Nn(S), d && clearTimeout(d), d = setTimeout(function() {
        d = null;
      }, h), F = 0; F < V; ++F)
        g = G[F], M.touch0 && M.touch0[2] === g.identifier ? delete M.touch0 : M.touch1 && M.touch1[2] === g.identifier && delete M.touch1;
      if (M.touch1 && !M.touch0 && (M.touch0 = M.touch1, delete M.touch1), M.touch0) M.touch0[1] = this.__zoom.invert(M.touch0[0]);
      else if (M.end(), M.taps === 2 && (g = tt(g, this), Math.hypot(l[0] - g[0], l[1] - g[1]) < v)) {
        var C = Ke(this).on("dblclick.zoom");
        C && C.apply(this, arguments);
      }
    }
  }
  return y.wheelDelta = function(S) {
    return arguments.length ? (n = typeof S == "function" ? S : qr(+S), y) : n;
  }, y.filter = function(S) {
    return arguments.length ? (e = typeof S == "function" ? S : qr(!!S), y) : e;
  }, y.touchable = function(S) {
    return arguments.length ? (i = typeof S == "function" ? S : qr(!!S), y) : i;
  }, y.extent = function(S) {
    return arguments.length ? (t = typeof S == "function" ? S : qr([[+S[0][0], +S[0][1]], [+S[1][0], +S[1][1]]]), y) : t;
  }, y.scaleExtent = function(S) {
    return arguments.length ? (a[0] = +S[0], a[1] = +S[1], y) : [a[0], a[1]];
  }, y.translateExtent = function(S) {
    return arguments.length ? (o[0][0] = +S[0][0], o[1][0] = +S[1][0], o[0][1] = +S[0][1], o[1][1] = +S[1][1], y) : [[o[0][0], o[0][1]], [o[1][0], o[1][1]]];
  }, y.constrain = function(S) {
    return arguments.length ? (r = S, y) : r;
  }, y.duration = function(S) {
    return arguments.length ? (s = +S, y) : s;
  }, y.interpolate = function(S) {
    return arguments.length ? (c = S, y) : c;
  }, y.on = function() {
    var S = u.on.apply(u, arguments);
    return S === u ? y : S;
  }, y.clickDistance = function(S) {
    return arguments.length ? (p = (S = +S) * S, y) : Math.sqrt(p);
  }, y.tapDistance = function(S) {
    return arguments.length ? (v = +S, y) : v;
  }, y;
}
var Nr = { exports: {} }, qe = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Df;
function wE() {
  if (Df) return qe;
  Df = 1;
  var e = yt();
  function t(c) {
    var u = "https://react.dev/errors/" + c;
    if (1 < arguments.length) {
      u += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var f = 2; f < arguments.length; f++)
        u += "&args[]=" + encodeURIComponent(arguments[f]);
    }
    return "Minified React error #" + c + "; visit " + u + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function r() {
  }
  var n = {
    d: {
      f: r,
      r: function() {
        throw Error(t(522));
      },
      D: r,
      C: r,
      L: r,
      m: r,
      X: r,
      S: r,
      M: r
    },
    p: 0,
    findDOMNode: null
  }, i = Symbol.for("react.portal");
  function a(c, u, f) {
    var l = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: i,
      key: l == null ? null : "" + l,
      children: c,
      containerInfo: u,
      implementation: f
    };
  }
  var o = e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function s(c, u) {
    if (c === "font") return "";
    if (typeof u == "string")
      return u === "use-credentials" ? u : "";
  }
  return qe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = n, qe.createPortal = function(c, u) {
    var f = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!u || u.nodeType !== 1 && u.nodeType !== 9 && u.nodeType !== 11)
      throw Error(t(299));
    return a(c, u, null, f);
  }, qe.flushSync = function(c) {
    var u = o.T, f = n.p;
    try {
      if (o.T = null, n.p = 2, c) return c();
    } finally {
      o.T = u, n.p = f, n.d.f();
    }
  }, qe.preconnect = function(c, u) {
    typeof c == "string" && (u ? (u = u.crossOrigin, u = typeof u == "string" ? u === "use-credentials" ? u : "" : void 0) : u = null, n.d.C(c, u));
  }, qe.prefetchDNS = function(c) {
    typeof c == "string" && n.d.D(c);
  }, qe.preinit = function(c, u) {
    if (typeof c == "string" && u && typeof u.as == "string") {
      var f = u.as, l = s(f, u.crossOrigin), d = typeof u.integrity == "string" ? u.integrity : void 0, h = typeof u.fetchPriority == "string" ? u.fetchPriority : void 0;
      f === "style" ? n.d.S(
        c,
        typeof u.precedence == "string" ? u.precedence : void 0,
        {
          crossOrigin: l,
          integrity: d,
          fetchPriority: h
        }
      ) : f === "script" && n.d.X(c, {
        crossOrigin: l,
        integrity: d,
        fetchPriority: h,
        nonce: typeof u.nonce == "string" ? u.nonce : void 0
      });
    }
  }, qe.preinitModule = function(c, u) {
    if (typeof c == "string")
      if (typeof u == "object" && u !== null) {
        if (u.as == null || u.as === "script") {
          var f = s(
            u.as,
            u.crossOrigin
          );
          n.d.M(c, {
            crossOrigin: f,
            integrity: typeof u.integrity == "string" ? u.integrity : void 0,
            nonce: typeof u.nonce == "string" ? u.nonce : void 0
          });
        }
      } else u == null && n.d.M(c);
  }, qe.preload = function(c, u) {
    if (typeof c == "string" && typeof u == "object" && u !== null && typeof u.as == "string") {
      var f = u.as, l = s(f, u.crossOrigin);
      n.d.L(c, f, {
        crossOrigin: l,
        integrity: typeof u.integrity == "string" ? u.integrity : void 0,
        nonce: typeof u.nonce == "string" ? u.nonce : void 0,
        type: typeof u.type == "string" ? u.type : void 0,
        fetchPriority: typeof u.fetchPriority == "string" ? u.fetchPriority : void 0,
        referrerPolicy: typeof u.referrerPolicy == "string" ? u.referrerPolicy : void 0,
        imageSrcSet: typeof u.imageSrcSet == "string" ? u.imageSrcSet : void 0,
        imageSizes: typeof u.imageSizes == "string" ? u.imageSizes : void 0,
        media: typeof u.media == "string" ? u.media : void 0
      });
    }
  }, qe.preloadModule = function(c, u) {
    if (typeof c == "string")
      if (u) {
        var f = s(u.as, u.crossOrigin);
        n.d.m(c, {
          as: typeof u.as == "string" && u.as !== "script" ? u.as : void 0,
          crossOrigin: f,
          integrity: typeof u.integrity == "string" ? u.integrity : void 0
        });
      } else n.d.m(c);
  }, qe.requestFormReset = function(c) {
    n.d.r(c);
  }, qe.unstable_batchedUpdates = function(c, u) {
    return c(u);
  }, qe.useFormState = function(c, u, f) {
    return o.H.useFormState(c, u, f);
  }, qe.useFormStatus = function() {
    return o.H.useHostTransitionStatus();
  }, qe.version = "19.1.0", qe;
}
var Ne = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Lf;
function EE() {
  return Lf || (Lf = 1, process.env.NODE_ENV !== "production" && function() {
    function e() {
    }
    function t(l) {
      return "" + l;
    }
    function r(l, d, h) {
      var m = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      try {
        t(m);
        var p = !1;
      } catch {
        p = !0;
      }
      return p && (console.error(
        "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
        typeof Symbol == "function" && Symbol.toStringTag && m[Symbol.toStringTag] || m.constructor.name || "Object"
      ), t(m)), {
        $$typeof: u,
        key: m == null ? null : "" + m,
        children: l,
        containerInfo: d,
        implementation: h
      };
    }
    function n(l, d) {
      if (l === "font") return "";
      if (typeof d == "string")
        return d === "use-credentials" ? d : "";
    }
    function i(l) {
      return l === null ? "`null`" : l === void 0 ? "`undefined`" : l === "" ? "an empty string" : 'something with type "' + typeof l + '"';
    }
    function a(l) {
      return l === null ? "`null`" : l === void 0 ? "`undefined`" : l === "" ? "an empty string" : typeof l == "string" ? JSON.stringify(l) : typeof l == "number" ? "`" + l + "`" : 'something with type "' + typeof l + '"';
    }
    function o() {
      var l = f.H;
      return l === null && console.error(
        `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
      ), l;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var s = yt(), c = {
      d: {
        f: e,
        r: function() {
          throw Error(
            "Invalid form element. requestFormReset must be passed a form that was rendered by React."
          );
        },
        D: e,
        C: e,
        L: e,
        m: e,
        X: e,
        S: e,
        M: e
      },
      p: 0,
      findDOMNode: null
    }, u = Symbol.for("react.portal"), f = s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    typeof Map == "function" && Map.prototype != null && typeof Map.prototype.forEach == "function" && typeof Set == "function" && Set.prototype != null && typeof Set.prototype.clear == "function" && typeof Set.prototype.forEach == "function" || console.error(
      "React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
    ), Ne.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = c, Ne.createPortal = function(l, d) {
      var h = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!d || d.nodeType !== 1 && d.nodeType !== 9 && d.nodeType !== 11)
        throw Error("Target container is not a DOM element.");
      return r(l, d, null, h);
    }, Ne.flushSync = function(l) {
      var d = f.T, h = c.p;
      try {
        if (f.T = null, c.p = 2, l)
          return l();
      } finally {
        f.T = d, c.p = h, c.d.f() && console.error(
          "flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."
        );
      }
    }, Ne.preconnect = function(l, d) {
      typeof l == "string" && l ? d != null && typeof d != "object" ? console.error(
        "ReactDOM.preconnect(): Expected the `options` argument (second) to be an object but encountered %s instead. The only supported option at this time is `crossOrigin` which accepts a string.",
        a(d)
      ) : d != null && typeof d.crossOrigin != "string" && console.error(
        "ReactDOM.preconnect(): Expected the `crossOrigin` option (second argument) to be a string but encountered %s instead. Try removing this option or passing a string value instead.",
        i(d.crossOrigin)
      ) : console.error(
        "ReactDOM.preconnect(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
        i(l)
      ), typeof l == "string" && (d ? (d = d.crossOrigin, d = typeof d == "string" ? d === "use-credentials" ? d : "" : void 0) : d = null, c.d.C(l, d));
    }, Ne.prefetchDNS = function(l) {
      if (typeof l != "string" || !l)
        console.error(
          "ReactDOM.prefetchDNS(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
          i(l)
        );
      else if (1 < arguments.length) {
        var d = arguments[1];
        typeof d == "object" && d.hasOwnProperty("crossOrigin") ? console.error(
          "ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. It looks like the you are attempting to set a crossOrigin property for this DNS lookup hint. Browsers do not perform DNS queries using CORS and setting this attribute on the resource hint has no effect. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",
          a(d)
        ) : console.error(
          "ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",
          a(d)
        );
      }
      typeof l == "string" && c.d.D(l);
    }, Ne.preinit = function(l, d) {
      if (typeof l == "string" && l ? d == null || typeof d != "object" ? console.error(
        "ReactDOM.preinit(): Expected the `options` argument (second) to be an object with an `as` property describing the type of resource to be preinitialized but encountered %s instead.",
        a(d)
      ) : d.as !== "style" && d.as !== "script" && console.error(
        'ReactDOM.preinit(): Expected the `as` property in the `options` argument (second) to contain a valid value describing the type of resource to be preinitialized but encountered %s instead. Valid values for `as` are "style" and "script".',
        a(d.as)
      ) : console.error(
        "ReactDOM.preinit(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
        i(l)
      ), typeof l == "string" && d && typeof d.as == "string") {
        var h = d.as, m = n(h, d.crossOrigin), p = typeof d.integrity == "string" ? d.integrity : void 0, v = typeof d.fetchPriority == "string" ? d.fetchPriority : void 0;
        h === "style" ? c.d.S(
          l,
          typeof d.precedence == "string" ? d.precedence : void 0,
          {
            crossOrigin: m,
            integrity: p,
            fetchPriority: v
          }
        ) : h === "script" && c.d.X(l, {
          crossOrigin: m,
          integrity: p,
          fetchPriority: v,
          nonce: typeof d.nonce == "string" ? d.nonce : void 0
        });
      }
    }, Ne.preinitModule = function(l, d) {
      var h = "";
      if (typeof l == "string" && l || (h += " The `href` argument encountered was " + i(l) + "."), d !== void 0 && typeof d != "object" ? h += " The `options` argument encountered was " + i(d) + "." : d && "as" in d && d.as !== "script" && (h += " The `as` option encountered was " + a(d.as) + "."), h)
        console.error(
          "ReactDOM.preinitModule(): Expected up to two arguments, a non-empty `href` string and, optionally, an `options` object with a valid `as` property.%s",
          h
        );
      else
        switch (h = d && typeof d.as == "string" ? d.as : "script", h) {
          case "script":
            break;
          default:
            h = a(h), console.error(
              'ReactDOM.preinitModule(): Currently the only supported "as" type for this function is "script" but received "%s" instead. This warning was generated for `href` "%s". In the future other module types will be supported, aligning with the import-attributes proposal. Learn more here: (https://github.com/tc39/proposal-import-attributes)',
              h,
              l
            );
        }
      typeof l == "string" && (typeof d == "object" && d !== null ? (d.as == null || d.as === "script") && (h = n(
        d.as,
        d.crossOrigin
      ), c.d.M(l, {
        crossOrigin: h,
        integrity: typeof d.integrity == "string" ? d.integrity : void 0,
        nonce: typeof d.nonce == "string" ? d.nonce : void 0
      })) : d == null && c.d.M(l));
    }, Ne.preload = function(l, d) {
      var h = "";
      if (typeof l == "string" && l || (h += " The `href` argument encountered was " + i(l) + "."), d == null || typeof d != "object" ? h += " The `options` argument encountered was " + i(d) + "." : typeof d.as == "string" && d.as || (h += " The `as` option encountered was " + i(d.as) + "."), h && console.error(
        'ReactDOM.preload(): Expected two arguments, a non-empty `href` string and an `options` object with an `as` property valid for a `<link rel="preload" as="..." />` tag.%s',
        h
      ), typeof l == "string" && typeof d == "object" && d !== null && typeof d.as == "string") {
        h = d.as;
        var m = n(
          h,
          d.crossOrigin
        );
        c.d.L(l, h, {
          crossOrigin: m,
          integrity: typeof d.integrity == "string" ? d.integrity : void 0,
          nonce: typeof d.nonce == "string" ? d.nonce : void 0,
          type: typeof d.type == "string" ? d.type : void 0,
          fetchPriority: typeof d.fetchPriority == "string" ? d.fetchPriority : void 0,
          referrerPolicy: typeof d.referrerPolicy == "string" ? d.referrerPolicy : void 0,
          imageSrcSet: typeof d.imageSrcSet == "string" ? d.imageSrcSet : void 0,
          imageSizes: typeof d.imageSizes == "string" ? d.imageSizes : void 0,
          media: typeof d.media == "string" ? d.media : void 0
        });
      }
    }, Ne.preloadModule = function(l, d) {
      var h = "";
      typeof l == "string" && l || (h += " The `href` argument encountered was " + i(l) + "."), d !== void 0 && typeof d != "object" ? h += " The `options` argument encountered was " + i(d) + "." : d && "as" in d && typeof d.as != "string" && (h += " The `as` option encountered was " + i(d.as) + "."), h && console.error(
        'ReactDOM.preloadModule(): Expected two arguments, a non-empty `href` string and, optionally, an `options` object with an `as` property valid for a `<link rel="modulepreload" as="..." />` tag.%s',
        h
      ), typeof l == "string" && (d ? (h = n(
        d.as,
        d.crossOrigin
      ), c.d.m(l, {
        as: typeof d.as == "string" && d.as !== "script" ? d.as : void 0,
        crossOrigin: h,
        integrity: typeof d.integrity == "string" ? d.integrity : void 0
      })) : c.d.m(l));
    }, Ne.requestFormReset = function(l) {
      c.d.r(l);
    }, Ne.unstable_batchedUpdates = function(l, d) {
      return l(d);
    }, Ne.useFormState = function(l, d, h) {
      return o().useFormState(l, d, h);
    }, Ne.useFormStatus = function() {
      return o().useHostTransitionStatus();
    }, Ne.version = "19.1.0", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), Ne;
}
var $f;
function SE() {
  if ($f) return Nr.exports;
  $f = 1;
  function e() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
      } catch (t) {
        console.error(t);
      }
    }
  }
  return process.env.NODE_ENV === "production" ? (e(), Nr.exports = wE()) : Nr.exports = EE(), Nr.exports;
}
SE();
const tn = z.createContext(null), xE = tn.Provider, Xe = {
  error001: () => "[React Flow]: Seems like you have not used zustand provider as an ancestor. Help: https://reactflow.dev/error#001",
  error002: () => "It looks like you've created a new nodeTypes or edgeTypes object. If this wasn't on purpose please define the nodeTypes/edgeTypes outside of the component or memoize them.",
  error003: (e) => `Node type "${e}" not found. Using fallback type "default".`,
  error004: () => "The React Flow parent container needs a width and a height to render the graph.",
  error005: () => "Only child nodes can use a parent extent.",
  error006: () => "Can't create edge. An edge needs a source and a target.",
  error007: (e) => `The old edge with id=${e} does not exist.`,
  error009: (e) => `Marker type "${e}" doesn't exist.`,
  error008: (e, t) => `Couldn't create edge for ${e ? "target" : "source"} handle id: "${e ? t.targetHandle : t.sourceHandle}", edge id: ${t.id}.`,
  error010: () => "Handle: No node id found. Make sure to only use a Handle inside a custom Node.",
  error011: (e) => `Edge type "${e}" not found. Using fallback type "default".`,
  error012: (e) => `Node with id "${e}" does not exist, it may have been removed. This can happen when a node is deleted before the "onNodeClick" handler is called.`
}, ay = Xe.error001();
function we(e, t) {
  const r = z.useContext(tn);
  if (r === null)
    throw new Error(ay);
  return Nv(r, e, t);
}
const Ce = () => {
  const e = z.useContext(tn);
  if (e === null)
    throw new Error(ay);
  return z.useMemo(() => ({
    getState: e.getState,
    setState: e.setState,
    subscribe: e.subscribe,
    destroy: e.destroy
  }), [e]);
}, RE = (e) => e.userSelectionActive ? "none" : "all";
function TE({ position: e, children: t, className: r, style: n, ...i }) {
  const a = we(RE), o = `${e}`.split("-");
  return K.createElement("div", { className: He(["react-flow__panel", r, ...o]), style: { ...n, pointerEvents: a }, ...i }, t);
}
function AE({ proOptions: e, position: t = "bottom-right" }) {
  return e != null && e.hideAttribution ? null : K.createElement(
    TE,
    { position: t, className: "react-flow__attribution", "data-message": "Please only hide this attribution when you are subscribed to React Flow Pro: https://reactflow.dev/pro" },
    K.createElement("a", { href: "https://reactflow.dev", target: "_blank", rel: "noopener noreferrer", "aria-label": "React Flow attribution" }, "React Flow")
  );
}
const CE = ({ x: e, y: t, label: r, labelStyle: n = {}, labelShowBg: i = !0, labelBgStyle: a = {}, labelBgPadding: o = [2, 4], labelBgBorderRadius: s = 2, children: c, className: u, ...f }) => {
  const l = z.useRef(null), [d, h] = z.useState({ x: 0, y: 0, width: 0, height: 0 }), m = He(["react-flow__edge-textwrapper", u]);
  return z.useEffect(() => {
    if (l.current) {
      const p = l.current.getBBox();
      h({
        x: p.x,
        y: p.y,
        width: p.width,
        height: p.height
      });
    }
  }, [r]), typeof r > "u" || !r ? null : K.createElement(
    "g",
    { transform: `translate(${e - d.width / 2} ${t - d.height / 2})`, className: m, visibility: d.width ? "visible" : "hidden", ...f },
    i && K.createElement("rect", { width: d.width + 2 * o[0], x: -o[0], y: -o[1], height: d.height + 2 * o[1], className: "react-flow__edge-textbg", style: a, rx: s, ry: s }),
    K.createElement("text", { className: "react-flow__edge-text", y: d.height / 2, dy: "0.3em", ref: l, style: n }, r),
    c
  );
};
var OE = z.memo(CE);
const xc = (e) => ({
  width: e.offsetWidth,
  height: e.offsetHeight
}), jt = (e, t = 0, r = 1) => Math.min(Math.max(e, t), r), Rc = (e = { x: 0, y: 0 }, t) => ({
  x: jt(e.x, t[0][0], t[1][0]),
  y: jt(e.y, t[0][1], t[1][1])
}), Ff = (e, t, r) => e < t ? jt(Math.abs(e - t), 1, 50) / 50 : e > r ? -jt(Math.abs(e - r), 1, 50) / 50 : 0, oy = (e, t) => {
  const r = Ff(e.x, 35, t.width - 35) * 20, n = Ff(e.y, 35, t.height - 35) * 20;
  return [r, n];
}, sy = (e) => {
  var t;
  return ((t = e.getRootNode) == null ? void 0 : t.call(e)) || (window == null ? void 0 : window.document);
}, qE = (e, t) => ({
  x: Math.min(e.x, t.x),
  y: Math.min(e.y, t.y),
  x2: Math.max(e.x2, t.x2),
  y2: Math.max(e.y2, t.y2)
}), Tc = ({ x: e, y: t, width: r, height: n }) => ({
  x: e,
  y: t,
  x2: e + r,
  y2: t + n
}), NE = ({ x: e, y: t, x2: r, y2: n }) => ({
  x: e,
  y: t,
  width: r - e,
  height: n - t
}), Bf = (e) => ({
  ...e.positionAbsolute || { x: 0, y: 0 },
  width: e.width || 0,
  height: e.height || 0
}), cc = (e, t) => {
  const r = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), n = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
  return Math.ceil(r * n);
}, IE = (e) => je(e.width) && je(e.height) && je(e.x) && je(e.y), je = (e) => !isNaN(e) && isFinite(e), me = Symbol.for("internals"), uy = ["Enter", " ", "Escape"], cy = (e, t) => {
  process.env.NODE_ENV === "development" && console.warn(`[React Flow]: ${t} Help: https://reactflow.dev/error#${e}`);
}, ME = (e) => "nativeEvent" in e;
function fc(e) {
  var i, a;
  const t = ME(e) ? e.nativeEvent : e, r = ((a = (i = t.composedPath) == null ? void 0 : i.call(t)) == null ? void 0 : a[0]) || e.target;
  return ["INPUT", "SELECT", "TEXTAREA"].includes(r == null ? void 0 : r.nodeName) || (r == null ? void 0 : r.hasAttribute("contenteditable")) || !!(r != null && r.closest(".nokey"));
}
const fy = (e) => "clientX" in e, vt = (e, t) => {
  var a, o;
  const r = fy(e), n = r ? e.clientX : (a = e.touches) == null ? void 0 : a[0].clientX, i = r ? e.clientY : (o = e.touches) == null ? void 0 : o[0].clientY;
  return {
    x: n - ((t == null ? void 0 : t.left) ?? 0),
    y: i - ((t == null ? void 0 : t.top) ?? 0)
  };
}, Vr = () => {
  var e;
  return typeof navigator < "u" && ((e = navigator == null ? void 0 : navigator.userAgent) == null ? void 0 : e.indexOf("Mac")) >= 0;
}, gr = ({ id: e, path: t, labelX: r, labelY: n, label: i, labelStyle: a, labelShowBg: o, labelBgStyle: s, labelBgPadding: c, labelBgBorderRadius: u, style: f, markerEnd: l, markerStart: d, interactionWidth: h = 20 }) => K.createElement(
  K.Fragment,
  null,
  K.createElement("path", { id: e, style: f, d: t, fill: "none", className: "react-flow__edge-path", markerEnd: l, markerStart: d }),
  h && K.createElement("path", { d: t, fill: "none", strokeOpacity: 0, strokeWidth: h, className: "react-flow__edge-interaction" }),
  i && je(r) && je(n) ? K.createElement(OE, { x: r, y: n, label: i, labelStyle: a, labelShowBg: o, labelBgStyle: s, labelBgPadding: c, labelBgBorderRadius: u }) : null
);
gr.displayName = "BaseEdge";
function Zt(e, t, r) {
  return r === void 0 ? r : (n) => {
    const i = t().edges.find((a) => a.id === e);
    i && r(n, { ...i });
  };
}
function ly({ sourceX: e, sourceY: t, targetX: r, targetY: n }) {
  const i = Math.abs(r - e) / 2, a = r < e ? r + i : r - i, o = Math.abs(n - t) / 2, s = n < t ? n + o : n - o;
  return [a, s, i, o];
}
function dy({ sourceX: e, sourceY: t, targetX: r, targetY: n, sourceControlX: i, sourceControlY: a, targetControlX: o, targetControlY: s }) {
  const c = e * 0.125 + i * 0.375 + o * 0.375 + r * 0.125, u = t * 0.125 + a * 0.375 + s * 0.375 + n * 0.125, f = Math.abs(c - e), l = Math.abs(u - t);
  return [c, u, f, l];
}
var xt;
(function(e) {
  e.Strict = "strict", e.Loose = "loose";
})(xt || (xt = {}));
var wt;
(function(e) {
  e.Free = "free", e.Vertical = "vertical", e.Horizontal = "horizontal";
})(wt || (wt = {}));
var lr;
(function(e) {
  e.Partial = "partial", e.Full = "full";
})(lr || (lr = {}));
var pt;
(function(e) {
  e.Bezier = "default", e.Straight = "straight", e.Step = "step", e.SmoothStep = "smoothstep", e.SimpleBezier = "simplebezier";
})(pt || (pt = {}));
var Yr;
(function(e) {
  e.Arrow = "arrow", e.ArrowClosed = "arrowclosed";
})(Yr || (Yr = {}));
var re;
(function(e) {
  e.Left = "left", e.Top = "top", e.Right = "right", e.Bottom = "bottom";
})(re || (re = {}));
function jf({ pos: e, x1: t, y1: r, x2: n, y2: i }) {
  return e === re.Left || e === re.Right ? [0.5 * (t + n), r] : [t, 0.5 * (r + i)];
}
function hy({ sourceX: e, sourceY: t, sourcePosition: r = re.Bottom, targetX: n, targetY: i, targetPosition: a = re.Top }) {
  const [o, s] = jf({
    pos: r,
    x1: e,
    y1: t,
    x2: n,
    y2: i
  }), [c, u] = jf({
    pos: a,
    x1: n,
    y1: i,
    x2: e,
    y2: t
  }), [f, l, d, h] = dy({
    sourceX: e,
    sourceY: t,
    targetX: n,
    targetY: i,
    sourceControlX: o,
    sourceControlY: s,
    targetControlX: c,
    targetControlY: u
  });
  return [
    `M${e},${t} C${o},${s} ${c},${u} ${n},${i}`,
    f,
    l,
    d,
    h
  ];
}
const Ac = z.memo(({ sourceX: e, sourceY: t, targetX: r, targetY: n, sourcePosition: i = re.Bottom, targetPosition: a = re.Top, label: o, labelStyle: s, labelShowBg: c, labelBgStyle: u, labelBgPadding: f, labelBgBorderRadius: l, style: d, markerEnd: h, markerStart: m, interactionWidth: p }) => {
  const [v, y, b] = hy({
    sourceX: e,
    sourceY: t,
    sourcePosition: i,
    targetX: r,
    targetY: n,
    targetPosition: a
  });
  return K.createElement(gr, { path: v, labelX: y, labelY: b, label: o, labelStyle: s, labelShowBg: c, labelBgStyle: u, labelBgPadding: f, labelBgBorderRadius: l, style: d, markerEnd: h, markerStart: m, interactionWidth: p });
});
Ac.displayName = "SimpleBezierEdge";
const Hf = {
  [re.Left]: { x: -1, y: 0 },
  [re.Right]: { x: 1, y: 0 },
  [re.Top]: { x: 0, y: -1 },
  [re.Bottom]: { x: 0, y: 1 }
}, PE = ({ source: e, sourcePosition: t = re.Bottom, target: r }) => t === re.Left || t === re.Right ? e.x < r.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : e.y < r.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, zf = (e, t) => Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
function kE({ source: e, sourcePosition: t = re.Bottom, target: r, targetPosition: n = re.Top, center: i, offset: a }) {
  const o = Hf[t], s = Hf[n], c = { x: e.x + o.x * a, y: e.y + o.y * a }, u = { x: r.x + s.x * a, y: r.y + s.y * a }, f = PE({
    source: c,
    sourcePosition: t,
    target: u
  }), l = f.x !== 0 ? "x" : "y", d = f[l];
  let h = [], m, p;
  const v = { x: 0, y: 0 }, y = { x: 0, y: 0 }, [b, E, w, x] = ly({
    sourceX: e.x,
    sourceY: e.y,
    targetX: r.x,
    targetY: r.y
  });
  if (o[l] * s[l] === -1) {
    m = i.x ?? b, p = i.y ?? E;
    const T = [
      { x: m, y: c.y },
      { x: m, y: u.y }
    ], N = [
      { x: c.x, y: p },
      { x: u.x, y: p }
    ];
    o[l] === d ? h = l === "x" ? T : N : h = l === "x" ? N : T;
  } else {
    const T = [{ x: c.x, y: u.y }], N = [{ x: u.x, y: c.y }];
    if (l === "x" ? h = o.x === d ? N : T : h = o.y === d ? T : N, t === n) {
      const B = Math.abs(e[l] - r[l]);
      if (B <= a) {
        const S = Math.min(a - 1, a - B);
        o[l] === d ? v[l] = (c[l] > e[l] ? -1 : 1) * S : y[l] = (u[l] > r[l] ? -1 : 1) * S;
      }
    }
    if (t !== n) {
      const B = l === "x" ? "y" : "x", S = o[l] === s[B], P = c[B] > u[B], M = c[B] < u[B];
      (o[l] === 1 && (!S && P || S && M) || o[l] !== 1 && (!S && M || S && P)) && (h = l === "x" ? T : N);
    }
    const O = { x: c.x + v.x, y: c.y + v.y }, k = { x: u.x + y.x, y: u.y + y.y }, q = Math.max(Math.abs(O.x - h[0].x), Math.abs(k.x - h[0].x)), j = Math.max(Math.abs(O.y - h[0].y), Math.abs(k.y - h[0].y));
    q >= j ? (m = (O.x + k.x) / 2, p = h[0].y) : (m = h[0].x, p = (O.y + k.y) / 2);
  }
  return [[
    e,
    { x: c.x + v.x, y: c.y + v.y },
    ...h,
    { x: u.x + y.x, y: u.y + y.y },
    r
  ], m, p, w, x];
}
function DE(e, t, r, n) {
  const i = Math.min(zf(e, t) / 2, zf(t, r) / 2, n), { x: a, y: o } = t;
  if (e.x === a && a === r.x || e.y === o && o === r.y)
    return `L${a} ${o}`;
  if (e.y === o) {
    const u = e.x < r.x ? -1 : 1, f = e.y < r.y ? 1 : -1;
    return `L ${a + i * u},${o}Q ${a},${o} ${a},${o + i * f}`;
  }
  const s = e.x < r.x ? 1 : -1, c = e.y < r.y ? -1 : 1;
  return `L ${a},${o + i * c}Q ${a},${o} ${a + i * s},${o}`;
}
function lc({ sourceX: e, sourceY: t, sourcePosition: r = re.Bottom, targetX: n, targetY: i, targetPosition: a = re.Top, borderRadius: o = 5, centerX: s, centerY: c, offset: u = 20 }) {
  const [f, l, d, h, m] = kE({
    source: { x: e, y: t },
    sourcePosition: r,
    target: { x: n, y: i },
    targetPosition: a,
    center: { x: s, y: c },
    offset: u
  });
  return [f.reduce((v, y, b) => {
    let E = "";
    return b > 0 && b < f.length - 1 ? E = DE(f[b - 1], y, f[b + 1], o) : E = `${b === 0 ? "M" : "L"}${y.x} ${y.y}`, v += E, v;
  }, ""), l, d, h, m];
}
const rn = z.memo(({ sourceX: e, sourceY: t, targetX: r, targetY: n, label: i, labelStyle: a, labelShowBg: o, labelBgStyle: s, labelBgPadding: c, labelBgBorderRadius: u, style: f, sourcePosition: l = re.Bottom, targetPosition: d = re.Top, markerEnd: h, markerStart: m, pathOptions: p, interactionWidth: v }) => {
  const [y, b, E] = lc({
    sourceX: e,
    sourceY: t,
    sourcePosition: l,
    targetX: r,
    targetY: n,
    targetPosition: d,
    borderRadius: p == null ? void 0 : p.borderRadius,
    offset: p == null ? void 0 : p.offset
  });
  return K.createElement(gr, { path: y, labelX: b, labelY: E, label: i, labelStyle: a, labelShowBg: o, labelBgStyle: s, labelBgPadding: c, labelBgBorderRadius: u, style: f, markerEnd: h, markerStart: m, interactionWidth: v });
});
rn.displayName = "SmoothStepEdge";
const Cc = z.memo((e) => {
  var t;
  return K.createElement(rn, { ...e, pathOptions: z.useMemo(() => {
    var r;
    return { borderRadius: 0, offset: (r = e.pathOptions) == null ? void 0 : r.offset };
  }, [(t = e.pathOptions) == null ? void 0 : t.offset]) });
});
Cc.displayName = "StepEdge";
function LE({ sourceX: e, sourceY: t, targetX: r, targetY: n }) {
  const [i, a, o, s] = ly({
    sourceX: e,
    sourceY: t,
    targetX: r,
    targetY: n
  });
  return [`M ${e},${t}L ${r},${n}`, i, a, o, s];
}
const Oc = z.memo(({ sourceX: e, sourceY: t, targetX: r, targetY: n, label: i, labelStyle: a, labelShowBg: o, labelBgStyle: s, labelBgPadding: c, labelBgBorderRadius: u, style: f, markerEnd: l, markerStart: d, interactionWidth: h }) => {
  const [m, p, v] = LE({ sourceX: e, sourceY: t, targetX: r, targetY: n });
  return K.createElement(gr, { path: m, labelX: p, labelY: v, label: i, labelStyle: a, labelShowBg: o, labelBgStyle: s, labelBgPadding: c, labelBgBorderRadius: u, style: f, markerEnd: l, markerStart: d, interactionWidth: h });
});
Oc.displayName = "StraightEdge";
function Ir(e, t) {
  return e >= 0 ? 0.5 * e : t * 25 * Math.sqrt(-e);
}
function Gf({ pos: e, x1: t, y1: r, x2: n, y2: i, c: a }) {
  switch (e) {
    case re.Left:
      return [t - Ir(t - n, a), r];
    case re.Right:
      return [t + Ir(n - t, a), r];
    case re.Top:
      return [t, r - Ir(r - i, a)];
    case re.Bottom:
      return [t, r + Ir(i - r, a)];
  }
}
function py({ sourceX: e, sourceY: t, sourcePosition: r = re.Bottom, targetX: n, targetY: i, targetPosition: a = re.Top, curvature: o = 0.25 }) {
  const [s, c] = Gf({
    pos: r,
    x1: e,
    y1: t,
    x2: n,
    y2: i,
    c: o
  }), [u, f] = Gf({
    pos: a,
    x1: n,
    y1: i,
    x2: e,
    y2: t,
    c: o
  }), [l, d, h, m] = dy({
    sourceX: e,
    sourceY: t,
    targetX: n,
    targetY: i,
    sourceControlX: s,
    sourceControlY: c,
    targetControlX: u,
    targetControlY: f
  });
  return [
    `M${e},${t} C${s},${c} ${u},${f} ${n},${i}`,
    l,
    d,
    h,
    m
  ];
}
const Kr = z.memo(({ sourceX: e, sourceY: t, targetX: r, targetY: n, sourcePosition: i = re.Bottom, targetPosition: a = re.Top, label: o, labelStyle: s, labelShowBg: c, labelBgStyle: u, labelBgPadding: f, labelBgBorderRadius: l, style: d, markerEnd: h, markerStart: m, pathOptions: p, interactionWidth: v }) => {
  const [y, b, E] = py({
    sourceX: e,
    sourceY: t,
    sourcePosition: i,
    targetX: r,
    targetY: n,
    targetPosition: a,
    curvature: p == null ? void 0 : p.curvature
  });
  return K.createElement(gr, { path: y, labelX: b, labelY: E, label: o, labelStyle: s, labelShowBg: c, labelBgStyle: u, labelBgPadding: f, labelBgBorderRadius: l, style: d, markerEnd: h, markerStart: m, interactionWidth: v });
});
Kr.displayName = "BezierEdge";
const qc = z.createContext(null), $E = qc.Provider;
qc.Consumer;
const FE = () => z.useContext(qc), BE = (e) => "id" in e && "source" in e && "target" in e, jE = ({ source: e, sourceHandle: t, target: r, targetHandle: n }) => `reactflow__edge-${e}${t || ""}-${r}${n || ""}`, dc = (e, t) => typeof e > "u" ? "" : typeof e == "string" ? e : `${t ? `${t}__` : ""}${Object.keys(e).sort().map((n) => `${n}=${e[n]}`).join("&")}`, HE = (e, t) => t.some((r) => r.source === e.source && r.target === e.target && (r.sourceHandle === e.sourceHandle || !r.sourceHandle && !e.sourceHandle) && (r.targetHandle === e.targetHandle || !r.targetHandle && !e.targetHandle)), zE = (e, t) => {
  if (!e.source || !e.target)
    return cy("006", Xe.error006()), t;
  let r;
  return BE(e) ? r = { ...e } : r = {
    ...e,
    id: jE(e)
  }, HE(r, t) ? t : t.concat(r);
}, hc = ({ x: e, y: t }, [r, n, i], a, [o, s]) => {
  const c = {
    x: (e - r) / i,
    y: (t - n) / i
  };
  return a ? {
    x: o * Math.round(c.x / o),
    y: s * Math.round(c.y / s)
  } : c;
}, gy = ({ x: e, y: t }, [r, n, i]) => ({
  x: e * i + r,
  y: t * i + n
}), Lt = (e, t = [0, 0]) => {
  if (!e)
    return {
      x: 0,
      y: 0,
      positionAbsolute: {
        x: 0,
        y: 0
      }
    };
  const r = (e.width ?? 0) * t[0], n = (e.height ?? 0) * t[1], i = {
    x: e.position.x - r,
    y: e.position.y - n
  };
  return {
    ...i,
    positionAbsolute: e.positionAbsolute ? {
      x: e.positionAbsolute.x - r,
      y: e.positionAbsolute.y - n
    } : i
  };
}, Nc = (e, t = [0, 0]) => {
  if (e.length === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  const r = e.reduce((n, i) => {
    const { x: a, y: o } = Lt(i, t).positionAbsolute;
    return qE(n, Tc({
      x: a,
      y: o,
      width: i.width || 0,
      height: i.height || 0
    }));
  }, { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 });
  return NE(r);
}, vy = (e, t, [r, n, i] = [0, 0, 1], a = !1, o = !1, s = [0, 0]) => {
  const c = {
    x: (t.x - r) / i,
    y: (t.y - n) / i,
    width: t.width / i,
    height: t.height / i
  }, u = [];
  return e.forEach((f) => {
    const { width: l, height: d, selectable: h = !0, hidden: m = !1 } = f;
    if (o && !h || m)
      return !1;
    const { positionAbsolute: p } = Lt(f, s), v = {
      x: p.x,
      y: p.y,
      width: l || 0,
      height: d || 0
    }, y = cc(c, v), b = typeof l > "u" || typeof d > "u" || l === null || d === null, E = a && y > 0, w = (l || 0) * (d || 0);
    (b || E || y >= w || f.dragging) && u.push(f);
  }), u;
}, yy = (e, t) => {
  const r = e.map((n) => n.id);
  return t.filter((n) => r.includes(n.source) || r.includes(n.target));
}, my = (e, t, r, n, i, a = 0.1) => {
  const o = t / (e.width * (1 + a)), s = r / (e.height * (1 + a)), c = Math.min(o, s), u = jt(c, n, i), f = e.x + e.width / 2, l = e.y + e.height / 2, d = t / 2 - f * u, h = r / 2 - l * u;
  return { x: d, y: h, zoom: u };
}, _t = (e, t = 0) => e.transition().duration(t);
function Uf(e, t, r, n) {
  return (t[r] || []).reduce((i, a) => {
    var o, s;
    return `${e.id}-${a.id}-${r}` !== n && i.push({
      id: a.id || null,
      type: r,
      nodeId: e.id,
      x: (((o = e.positionAbsolute) == null ? void 0 : o.x) ?? 0) + a.x + a.width / 2,
      y: (((s = e.positionAbsolute) == null ? void 0 : s.y) ?? 0) + a.y + a.height / 2
    }), i;
  }, []);
}
function GE(e, t, r, n, i, a) {
  const { x: o, y: s } = vt(e), u = t.elementsFromPoint(o, s).find((m) => m.classList.contains("react-flow__handle"));
  if (u) {
    const m = u.getAttribute("data-nodeid");
    if (m) {
      const p = Ic(void 0, u), v = u.getAttribute("data-handleid"), y = a({ nodeId: m, id: v, type: p });
      if (y) {
        const b = i.find((E) => E.nodeId === m && E.type === p && E.id === v);
        return {
          handle: {
            id: v,
            type: p,
            nodeId: m,
            x: (b == null ? void 0 : b.x) || r.x,
            y: (b == null ? void 0 : b.y) || r.y
          },
          validHandleResult: y
        };
      }
    }
  }
  let f = [], l = 1 / 0;
  if (i.forEach((m) => {
    const p = Math.sqrt((m.x - r.x) ** 2 + (m.y - r.y) ** 2);
    if (p <= n) {
      const v = a(m);
      p <= l && (p < l ? f = [{ handle: m, validHandleResult: v }] : p === l && f.push({
        handle: m,
        validHandleResult: v
      }), l = p);
    }
  }), !f.length)
    return { handle: null, validHandleResult: _y() };
  if (f.length === 1)
    return f[0];
  const d = f.some(({ validHandleResult: m }) => m.isValid), h = f.some(({ handle: m }) => m.type === "target");
  return f.find(({ handle: m, validHandleResult: p }) => h ? m.type === "target" : d ? p.isValid : !0) || f[0];
}
const UE = { source: null, target: null, sourceHandle: null, targetHandle: null }, _y = () => ({
  handleDomNode: null,
  isValid: !1,
  connection: UE,
  endHandle: null
});
function by(e, t, r, n, i, a, o) {
  const s = i === "target", c = o.querySelector(`.react-flow__handle[data-id="${e == null ? void 0 : e.nodeId}-${e == null ? void 0 : e.id}-${e == null ? void 0 : e.type}"]`), u = {
    ..._y(),
    handleDomNode: c
  };
  if (c) {
    const f = Ic(void 0, c), l = c.getAttribute("data-nodeid"), d = c.getAttribute("data-handleid"), h = c.classList.contains("connectable"), m = c.classList.contains("connectableend"), p = {
      source: s ? l : r,
      sourceHandle: s ? d : n,
      target: s ? r : l,
      targetHandle: s ? n : d
    };
    u.connection = p, h && m && (t === xt.Strict ? s && f === "source" || !s && f === "target" : l !== r || d !== n) && (u.endHandle = {
      nodeId: l,
      handleId: d,
      type: f
    }, u.isValid = a(p));
  }
  return u;
}
function VE({ nodes: e, nodeId: t, handleId: r, handleType: n }) {
  return e.reduce((i, a) => {
    if (a[me]) {
      const { handleBounds: o } = a[me];
      let s = [], c = [];
      o && (s = Uf(a, o, "source", `${t}-${r}-${n}`), c = Uf(a, o, "target", `${t}-${r}-${n}`)), i.push(...s, ...c);
    }
    return i;
  }, []);
}
function Ic(e, t) {
  return e || (t != null && t.classList.contains("target") ? "target" : t != null && t.classList.contains("source") ? "source" : null);
}
function In(e) {
  e == null || e.classList.remove("valid", "connecting", "react-flow__handle-valid", "react-flow__handle-connecting");
}
function YE(e, t) {
  let r = null;
  return t ? r = "valid" : e && !t && (r = "invalid"), r;
}
function wy({ event: e, handleId: t, nodeId: r, onConnect: n, isTarget: i, getState: a, setState: o, isValidConnection: s, edgeUpdaterType: c, onReconnectEnd: u }) {
  const f = sy(e.target), { connectionMode: l, domNode: d, autoPanOnConnect: h, connectionRadius: m, onConnectStart: p, panBy: v, getNodes: y, cancelConnection: b } = a();
  let E = 0, w;
  const { x, y: R } = vt(e), T = f == null ? void 0 : f.elementFromPoint(x, R), N = Ic(c, T), O = d == null ? void 0 : d.getBoundingClientRect();
  if (!O || !N)
    return;
  let k, q = vt(e, O), j = !1, B = null, S = !1, P = null;
  const M = VE({
    nodes: y(),
    nodeId: r,
    handleId: t,
    handleType: N
  }), G = () => {
    if (!h)
      return;
    const [g, C] = oy(q, O);
    v({ x: g, y: C }), E = requestAnimationFrame(G);
  };
  o({
    connectionPosition: q,
    connectionStatus: null,
    // connectionNodeId etc will be removed in the next major in favor of connectionStartHandle
    connectionNodeId: r,
    connectionHandleId: t,
    connectionHandleType: N,
    connectionStartHandle: {
      nodeId: r,
      handleId: t,
      type: N
    },
    connectionEndHandle: null
  }), p == null || p(e, { nodeId: r, handleId: t, handleType: N });
  function V(g) {
    const { transform: C } = a();
    q = vt(g, O);
    const { handle: L, validHandleResult: H } = GE(g, f, hc(q, C, !1, [1, 1]), m, M, (A) => by(A, l, r, t, i ? "target" : "source", s, f));
    if (w = L, j || (G(), j = !0), P = H.handleDomNode, B = H.connection, S = H.isValid, o({
      connectionPosition: w && S ? gy({
        x: w.x,
        y: w.y
      }, C) : q,
      connectionStatus: YE(!!w, S),
      connectionEndHandle: H.endHandle
    }), !w && !S && !P)
      return In(k);
    B.source !== B.target && P && (In(k), k = P, P.classList.add("connecting", "react-flow__handle-connecting"), P.classList.toggle("valid", S), P.classList.toggle("react-flow__handle-valid", S));
  }
  function F(g) {
    var C, L;
    (w || P) && B && S && (n == null || n(B)), (L = (C = a()).onConnectEnd) == null || L.call(C, g), c && (u == null || u(g)), In(k), b(), cancelAnimationFrame(E), j = !1, S = !1, B = null, P = null, f.removeEventListener("mousemove", V), f.removeEventListener("mouseup", F), f.removeEventListener("touchmove", V), f.removeEventListener("touchend", F);
  }
  f.addEventListener("mousemove", V), f.addEventListener("mouseup", F), f.addEventListener("touchmove", V), f.addEventListener("touchend", F);
}
const Vf = () => !0, KE = (e) => ({
  connectionStartHandle: e.connectionStartHandle,
  connectOnClick: e.connectOnClick,
  noPanClassName: e.noPanClassName
}), WE = (e, t, r) => (n) => {
  const { connectionStartHandle: i, connectionEndHandle: a, connectionClickStartHandle: o } = n;
  return {
    connecting: (i == null ? void 0 : i.nodeId) === e && (i == null ? void 0 : i.handleId) === t && (i == null ? void 0 : i.type) === r || (a == null ? void 0 : a.nodeId) === e && (a == null ? void 0 : a.handleId) === t && (a == null ? void 0 : a.type) === r,
    clickConnecting: (o == null ? void 0 : o.nodeId) === e && (o == null ? void 0 : o.handleId) === t && (o == null ? void 0 : o.type) === r
  };
}, Ey = z.forwardRef(({ type: e = "source", position: t = re.Top, isValidConnection: r, isConnectable: n = !0, isConnectableStart: i = !0, isConnectableEnd: a = !0, id: o, onConnect: s, children: c, className: u, onMouseDown: f, onTouchStart: l, ...d }, h) => {
  var O, k;
  const m = o || null, p = e === "target", v = Ce(), y = FE(), { connectOnClick: b, noPanClassName: E } = we(KE, Me), { connecting: w, clickConnecting: x } = we(WE(y, m, e), Me);
  y || (k = (O = v.getState()).onError) == null || k.call(O, "010", Xe.error010());
  const R = (q) => {
    const { defaultEdgeOptions: j, onConnect: B, hasDefaultEdges: S } = v.getState(), P = {
      ...j,
      ...q
    };
    if (S) {
      const { edges: M, setEdges: G } = v.getState();
      G(zE(P, M));
    }
    B == null || B(P), s == null || s(P);
  }, T = (q) => {
    if (!y)
      return;
    const j = fy(q);
    i && (j && q.button === 0 || !j) && wy({
      event: q,
      handleId: m,
      nodeId: y,
      onConnect: R,
      isTarget: p,
      getState: v.getState,
      setState: v.setState,
      isValidConnection: r || v.getState().isValidConnection || Vf
    }), j ? f == null || f(q) : l == null || l(q);
  }, N = (q) => {
    const { onClickConnectStart: j, onClickConnectEnd: B, connectionClickStartHandle: S, connectionMode: P, isValidConnection: M } = v.getState();
    if (!y || !S && !i)
      return;
    if (!S) {
      j == null || j(q, { nodeId: y, handleId: m, handleType: e }), v.setState({ connectionClickStartHandle: { nodeId: y, type: e, handleId: m } });
      return;
    }
    const G = sy(q.target), V = r || M || Vf, { connection: F, isValid: g } = by({
      nodeId: y,
      id: m,
      type: e
    }, P, S.nodeId, S.handleId || null, S.type, V, G);
    g && R(F), B == null || B(q), v.setState({ connectionClickStartHandle: null });
  };
  return K.createElement("div", { "data-handleid": m, "data-nodeid": y, "data-handlepos": t, "data-id": `${y}-${m}-${e}`, className: He([
    "react-flow__handle",
    `react-flow__handle-${t}`,
    "nodrag",
    E,
    u,
    {
      source: !p,
      target: p,
      connectable: n,
      connectablestart: i,
      connectableend: a,
      connecting: x,
      // this class is used to style the handle when the user is connecting
      connectionindicator: n && (i && !w || a && w)
    }
  ]), onMouseDown: T, onTouchStart: T, onClick: b ? N : void 0, ref: h, ...d }, c);
});
Ey.displayName = "Handle";
var Wr = z.memo(Ey);
const Sy = ({ data: e, isConnectable: t, targetPosition: r = re.Top, sourcePosition: n = re.Bottom }) => K.createElement(
  K.Fragment,
  null,
  K.createElement(Wr, { type: "target", position: r, isConnectable: t }),
  e == null ? void 0 : e.label,
  K.createElement(Wr, { type: "source", position: n, isConnectable: t })
);
Sy.displayName = "DefaultNode";
var pc = z.memo(Sy);
const xy = ({ data: e, isConnectable: t, sourcePosition: r = re.Bottom }) => K.createElement(
  K.Fragment,
  null,
  e == null ? void 0 : e.label,
  K.createElement(Wr, { type: "source", position: r, isConnectable: t })
);
xy.displayName = "InputNode";
var Ry = z.memo(xy);
const Ty = ({ data: e, isConnectable: t, targetPosition: r = re.Top }) => K.createElement(
  K.Fragment,
  null,
  K.createElement(Wr, { type: "target", position: r, isConnectable: t }),
  e == null ? void 0 : e.label
);
Ty.displayName = "OutputNode";
var Ay = z.memo(Ty);
const Mc = () => null;
Mc.displayName = "GroupNode";
const XE = (e) => ({
  selectedNodes: e.getNodes().filter((t) => t.selected),
  selectedEdges: e.edges.filter((t) => t.selected).map((t) => ({ ...t }))
}), Mr = (e) => e.id;
function ZE(e, t) {
  return Me(e.selectedNodes.map(Mr), t.selectedNodes.map(Mr)) && Me(e.selectedEdges.map(Mr), t.selectedEdges.map(Mr));
}
const Cy = z.memo(({ onSelectionChange: e }) => {
  const t = Ce(), { selectedNodes: r, selectedEdges: n } = we(XE, ZE);
  return z.useEffect(() => {
    const i = { nodes: r, edges: n };
    e == null || e(i), t.getState().onSelectionChange.forEach((a) => a(i));
  }, [r, n, e]), null;
});
Cy.displayName = "SelectionListener";
const QE = (e) => !!e.onSelectionChange;
function JE({ onSelectionChange: e }) {
  const t = we(QE);
  return e || t ? K.createElement(Cy, { onSelectionChange: e }) : null;
}
const e1 = (e) => ({
  setNodes: e.setNodes,
  setEdges: e.setEdges,
  setDefaultNodesAndEdges: e.setDefaultNodesAndEdges,
  setMinZoom: e.setMinZoom,
  setMaxZoom: e.setMaxZoom,
  setTranslateExtent: e.setTranslateExtent,
  setNodeExtent: e.setNodeExtent,
  reset: e.reset
});
function Ot(e, t) {
  z.useEffect(() => {
    typeof e < "u" && t(e);
  }, [e]);
}
function ce(e, t, r) {
  z.useEffect(() => {
    typeof t < "u" && r({ [e]: t });
  }, [t]);
}
const t1 = ({ nodes: e, edges: t, defaultNodes: r, defaultEdges: n, onConnect: i, onConnectStart: a, onConnectEnd: o, onClickConnectStart: s, onClickConnectEnd: c, nodesDraggable: u, nodesConnectable: f, nodesFocusable: l, edgesFocusable: d, edgesUpdatable: h, elevateNodesOnSelect: m, minZoom: p, maxZoom: v, nodeExtent: y, onNodesChange: b, onEdgesChange: E, elementsSelectable: w, connectionMode: x, snapGrid: R, snapToGrid: T, translateExtent: N, connectOnClick: O, defaultEdgeOptions: k, fitView: q, fitViewOptions: j, onNodesDelete: B, onEdgesDelete: S, onNodeDrag: P, onNodeDragStart: M, onNodeDragStop: G, onSelectionDrag: V, onSelectionDragStart: F, onSelectionDragStop: g, noPanClassName: C, nodeOrigin: L, rfId: H, autoPanOnConnect: A, autoPanOnNodeDrag: I, onError: $, connectionRadius: U, isValidConnection: Y, nodeDragThreshold: J }) => {
  const { setNodes: ne, setEdges: le, setDefaultNodesAndEdges: Ee, setMinZoom: pe, setMaxZoom: fe, setTranslateExtent: te, setNodeExtent: de, reset: Z } = we(e1, Me), Q = Ce();
  return z.useEffect(() => {
    const ye = n == null ? void 0 : n.map((ae) => ({ ...ae, ...k }));
    return Ee(r, ye), () => {
      Z();
    };
  }, []), ce("defaultEdgeOptions", k, Q.setState), ce("connectionMode", x, Q.setState), ce("onConnect", i, Q.setState), ce("onConnectStart", a, Q.setState), ce("onConnectEnd", o, Q.setState), ce("onClickConnectStart", s, Q.setState), ce("onClickConnectEnd", c, Q.setState), ce("nodesDraggable", u, Q.setState), ce("nodesConnectable", f, Q.setState), ce("nodesFocusable", l, Q.setState), ce("edgesFocusable", d, Q.setState), ce("edgesUpdatable", h, Q.setState), ce("elementsSelectable", w, Q.setState), ce("elevateNodesOnSelect", m, Q.setState), ce("snapToGrid", T, Q.setState), ce("snapGrid", R, Q.setState), ce("onNodesChange", b, Q.setState), ce("onEdgesChange", E, Q.setState), ce("connectOnClick", O, Q.setState), ce("fitViewOnInit", q, Q.setState), ce("fitViewOnInitOptions", j, Q.setState), ce("onNodesDelete", B, Q.setState), ce("onEdgesDelete", S, Q.setState), ce("onNodeDrag", P, Q.setState), ce("onNodeDragStart", M, Q.setState), ce("onNodeDragStop", G, Q.setState), ce("onSelectionDrag", V, Q.setState), ce("onSelectionDragStart", F, Q.setState), ce("onSelectionDragStop", g, Q.setState), ce("noPanClassName", C, Q.setState), ce("nodeOrigin", L, Q.setState), ce("rfId", H, Q.setState), ce("autoPanOnConnect", A, Q.setState), ce("autoPanOnNodeDrag", I, Q.setState), ce("onError", $, Q.setState), ce("connectionRadius", U, Q.setState), ce("isValidConnection", Y, Q.setState), ce("nodeDragThreshold", J, Q.setState), Ot(e, ne), Ot(t, le), Ot(p, pe), Ot(v, fe), Ot(N, te), Ot(y, de), null;
}, Yf = { display: "none" }, r1 = {
  position: "absolute",
  width: 1,
  height: 1,
  margin: -1,
  border: 0,
  padding: 0,
  overflow: "hidden",
  clip: "rect(0px, 0px, 0px, 0px)",
  clipPath: "inset(100%)"
}, Oy = "react-flow__node-desc", qy = "react-flow__edge-desc", n1 = "react-flow__aria-live", i1 = (e) => e.ariaLiveMessage;
function a1({ rfId: e }) {
  const t = we(i1);
  return K.createElement("div", { id: `${n1}-${e}`, "aria-live": "assertive", "aria-atomic": "true", style: r1 }, t);
}
function o1({ rfId: e, disableKeyboardA11y: t }) {
  return K.createElement(
    K.Fragment,
    null,
    K.createElement(
      "div",
      { id: `${Oy}-${e}`, style: Yf },
      "Press enter or space to select a node.",
      !t && "You can then use the arrow keys to move the node around.",
      " Press delete to remove it and escape to cancel.",
      " "
    ),
    K.createElement("div", { id: `${qy}-${e}`, style: Yf }, "Press enter or space to select an edge. You can then press delete to remove it or escape to cancel."),
    !t && K.createElement(a1, { rfId: e })
  );
}
var dr = (e = null, t = { actInsideInputWithModifier: !0 }) => {
  const [r, n] = z.useState(!1), i = z.useRef(!1), a = z.useRef(/* @__PURE__ */ new Set([])), [o, s] = z.useMemo(() => {
    if (e !== null) {
      const u = (Array.isArray(e) ? e : [e]).filter((l) => typeof l == "string").map((l) => l.split("+")), f = u.reduce((l, d) => l.concat(...d), []);
      return [u, f];
    }
    return [[], []];
  }, [e]);
  return z.useEffect(() => {
    const c = typeof document < "u" ? document : null, u = (t == null ? void 0 : t.target) || c;
    if (e !== null) {
      const f = (h) => {
        if (i.current = h.ctrlKey || h.metaKey || h.shiftKey, (!i.current || i.current && !t.actInsideInputWithModifier) && fc(h))
          return !1;
        const p = Wf(h.code, s);
        a.current.add(h[p]), Kf(o, a.current, !1) && (h.preventDefault(), n(!0));
      }, l = (h) => {
        if ((!i.current || i.current && !t.actInsideInputWithModifier) && fc(h))
          return !1;
        const p = Wf(h.code, s);
        Kf(o, a.current, !0) ? (n(!1), a.current.clear()) : a.current.delete(h[p]), h.key === "Meta" && a.current.clear(), i.current = !1;
      }, d = () => {
        a.current.clear(), n(!1);
      };
      return u == null || u.addEventListener("keydown", f), u == null || u.addEventListener("keyup", l), window.addEventListener("blur", d), () => {
        u == null || u.removeEventListener("keydown", f), u == null || u.removeEventListener("keyup", l), window.removeEventListener("blur", d);
      };
    }
  }, [e, n]), r;
};
function Kf(e, t, r) {
  return e.filter((n) => r || n.length === t.size).some((n) => n.every((i) => t.has(i)));
}
function Wf(e, t) {
  return t.includes(e) ? "code" : "key";
}
function Ny(e, t, r, n) {
  var s, c;
  const i = e.parentNode || e.parentId;
  if (!i)
    return r;
  const a = t.get(i), o = Lt(a, n);
  return Ny(a, t, {
    x: (r.x ?? 0) + o.x,
    y: (r.y ?? 0) + o.y,
    z: (((s = a[me]) == null ? void 0 : s.z) ?? 0) > (r.z ?? 0) ? ((c = a[me]) == null ? void 0 : c.z) ?? 0 : r.z ?? 0
  }, n);
}
function Iy(e, t, r) {
  e.forEach((n) => {
    var a;
    const i = n.parentNode || n.parentId;
    if (i && !e.has(i))
      throw new Error(`Parent node ${i} not found`);
    if (i || r != null && r[n.id]) {
      const { x: o, y: s, z: c } = Ny(n, e, {
        ...n.position,
        z: ((a = n[me]) == null ? void 0 : a.z) ?? 0
      }, t);
      n.positionAbsolute = {
        x: o,
        y: s
      }, n[me].z = c, r != null && r[n.id] && (n[me].isParent = !0);
    }
  });
}
function Mn(e, t, r, n) {
  const i = /* @__PURE__ */ new Map(), a = {}, o = n ? 1e3 : 0;
  return e.forEach((s) => {
    var h;
    const c = (je(s.zIndex) ? s.zIndex : 0) + (s.selected ? o : 0), u = t.get(s.id), f = {
      ...s,
      positionAbsolute: {
        x: s.position.x,
        y: s.position.y
      }
    }, l = s.parentNode || s.parentId;
    l && (a[l] = !0);
    const d = (u == null ? void 0 : u.type) && (u == null ? void 0 : u.type) !== s.type;
    Object.defineProperty(f, me, {
      enumerable: !1,
      value: {
        handleBounds: d || (h = u == null ? void 0 : u[me]) == null ? void 0 : h.handleBounds,
        z: c
      }
    }), i.set(s.id, f);
  }), Iy(i, r, a), i;
}
function My(e, t = {}) {
  const { getNodes: r, width: n, height: i, minZoom: a, maxZoom: o, d3Zoom: s, d3Selection: c, fitViewOnInitDone: u, fitViewOnInit: f, nodeOrigin: l } = e(), d = t.initial && !u && f;
  if (s && c && (d || !t.initial)) {
    const m = r().filter((v) => {
      var b;
      const y = t.includeHiddenNodes ? v.width && v.height : !v.hidden;
      return (b = t.nodes) != null && b.length ? y && t.nodes.some((E) => E.id === v.id) : y;
    }), p = m.every((v) => v.width && v.height);
    if (m.length > 0 && p) {
      const v = Nc(m, l), { x: y, y: b, zoom: E } = my(v, n, i, t.minZoom ?? a, t.maxZoom ?? o, t.padding ?? 0.1), w = gt.translate(y, b).scale(E);
      return typeof t.duration == "number" && t.duration > 0 ? s.transform(_t(c, t.duration), w) : s.transform(c, w), !0;
    }
  }
  return !1;
}
function s1(e, t) {
  return e.forEach((r) => {
    const n = t.get(r.id);
    n && t.set(n.id, {
      ...n,
      [me]: n[me],
      selected: r.selected
    });
  }), new Map(t);
}
function u1(e, t) {
  return t.map((r) => {
    const n = e.find((i) => i.id === r.id);
    return n && (r.selected = n.selected), r;
  });
}
function Pr({ changedNodes: e, changedEdges: t, get: r, set: n }) {
  const { nodeInternals: i, edges: a, onNodesChange: o, onEdgesChange: s, hasDefaultNodes: c, hasDefaultEdges: u } = r();
  e != null && e.length && (c && n({ nodeInternals: s1(e, i) }), o == null || o(e)), t != null && t.length && (u && n({ edges: u1(t, a) }), s == null || s(t));
}
const qt = () => {
}, c1 = {
  zoomIn: qt,
  zoomOut: qt,
  zoomTo: qt,
  getZoom: () => 1,
  setViewport: qt,
  getViewport: () => ({ x: 0, y: 0, zoom: 1 }),
  fitView: () => !1,
  setCenter: qt,
  fitBounds: qt,
  project: (e) => e,
  screenToFlowPosition: (e) => e,
  flowToScreenPosition: (e) => e,
  viewportInitialized: !1
}, f1 = (e) => ({
  d3Zoom: e.d3Zoom,
  d3Selection: e.d3Selection
}), l1 = () => {
  const e = Ce(), { d3Zoom: t, d3Selection: r } = we(f1, Me);
  return z.useMemo(() => r && t ? {
    zoomIn: (i) => t.scaleBy(_t(r, i == null ? void 0 : i.duration), 1.2),
    zoomOut: (i) => t.scaleBy(_t(r, i == null ? void 0 : i.duration), 1 / 1.2),
    zoomTo: (i, a) => t.scaleTo(_t(r, a == null ? void 0 : a.duration), i),
    getZoom: () => e.getState().transform[2],
    setViewport: (i, a) => {
      const [o, s, c] = e.getState().transform, u = gt.translate(i.x ?? o, i.y ?? s).scale(i.zoom ?? c);
      t.transform(_t(r, a == null ? void 0 : a.duration), u);
    },
    getViewport: () => {
      const [i, a, o] = e.getState().transform;
      return { x: i, y: a, zoom: o };
    },
    fitView: (i) => My(e.getState, i),
    setCenter: (i, a, o) => {
      const { width: s, height: c, maxZoom: u } = e.getState(), f = typeof (o == null ? void 0 : o.zoom) < "u" ? o.zoom : u, l = s / 2 - i * f, d = c / 2 - a * f, h = gt.translate(l, d).scale(f);
      t.transform(_t(r, o == null ? void 0 : o.duration), h);
    },
    fitBounds: (i, a) => {
      const { width: o, height: s, minZoom: c, maxZoom: u } = e.getState(), { x: f, y: l, zoom: d } = my(i, o, s, c, u, (a == null ? void 0 : a.padding) ?? 0.1), h = gt.translate(f, l).scale(d);
      t.transform(_t(r, a == null ? void 0 : a.duration), h);
    },
    // @deprecated Use `screenToFlowPosition`.
    project: (i) => {
      const { transform: a, snapToGrid: o, snapGrid: s } = e.getState();
      return console.warn("[DEPRECATED] `project` is deprecated. Instead use `screenToFlowPosition`. There is no need to subtract the react flow bounds anymore! https://reactflow.dev/api-reference/types/react-flow-instance#screen-to-flow-position"), hc(i, a, o, s);
    },
    screenToFlowPosition: (i) => {
      const { transform: a, snapToGrid: o, snapGrid: s, domNode: c } = e.getState();
      if (!c)
        return i;
      const { x: u, y: f } = c.getBoundingClientRect(), l = {
        x: i.x - u,
        y: i.y - f
      };
      return hc(l, a, o, s);
    },
    flowToScreenPosition: (i) => {
      const { transform: a, domNode: o } = e.getState();
      if (!o)
        return i;
      const { x: s, y: c } = o.getBoundingClientRect(), u = gy(i, a);
      return {
        x: u.x + s,
        y: u.y + c
      };
    },
    viewportInitialized: !0
  } : c1, [t, r]);
};
function Py() {
  const e = l1(), t = Ce(), r = z.useCallback(() => t.getState().getNodes().map((p) => ({ ...p })), []), n = z.useCallback((p) => t.getState().nodeInternals.get(p), []), i = z.useCallback(() => {
    const { edges: p = [] } = t.getState();
    return p.map((v) => ({ ...v }));
  }, []), a = z.useCallback((p) => {
    const { edges: v = [] } = t.getState();
    return v.find((y) => y.id === p);
  }, []), o = z.useCallback((p) => {
    const { getNodes: v, setNodes: y, hasDefaultNodes: b, onNodesChange: E } = t.getState(), w = v(), x = typeof p == "function" ? p(w) : p;
    if (b)
      y(x);
    else if (E) {
      const R = x.length === 0 ? w.map((T) => ({ type: "remove", id: T.id })) : x.map((T) => ({ item: T, type: "reset" }));
      E(R);
    }
  }, []), s = z.useCallback((p) => {
    const { edges: v = [], setEdges: y, hasDefaultEdges: b, onEdgesChange: E } = t.getState(), w = typeof p == "function" ? p(v) : p;
    if (b)
      y(w);
    else if (E) {
      const x = w.length === 0 ? v.map((R) => ({ type: "remove", id: R.id })) : w.map((R) => ({ item: R, type: "reset" }));
      E(x);
    }
  }, []), c = z.useCallback((p) => {
    const v = Array.isArray(p) ? p : [p], { getNodes: y, setNodes: b, hasDefaultNodes: E, onNodesChange: w } = t.getState();
    if (E) {
      const R = [...y(), ...v];
      b(R);
    } else if (w) {
      const x = v.map((R) => ({ item: R, type: "add" }));
      w(x);
    }
  }, []), u = z.useCallback((p) => {
    const v = Array.isArray(p) ? p : [p], { edges: y = [], setEdges: b, hasDefaultEdges: E, onEdgesChange: w } = t.getState();
    if (E)
      b([...y, ...v]);
    else if (w) {
      const x = v.map((R) => ({ item: R, type: "add" }));
      w(x);
    }
  }, []), f = z.useCallback(() => {
    const { getNodes: p, edges: v = [], transform: y } = t.getState(), [b, E, w] = y;
    return {
      nodes: p().map((x) => ({ ...x })),
      edges: v.map((x) => ({ ...x })),
      viewport: {
        x: b,
        y: E,
        zoom: w
      }
    };
  }, []), l = z.useCallback(({ nodes: p, edges: v }) => {
    const { nodeInternals: y, getNodes: b, edges: E, hasDefaultNodes: w, hasDefaultEdges: x, onNodesDelete: R, onEdgesDelete: T, onNodesChange: N, onEdgesChange: O } = t.getState(), k = (p || []).map((P) => P.id), q = (v || []).map((P) => P.id), j = b().reduce((P, M) => {
      const G = M.parentNode || M.parentId, V = !k.includes(M.id) && G && P.find((g) => g.id === G);
      return (typeof M.deletable == "boolean" ? M.deletable : !0) && (k.includes(M.id) || V) && P.push(M), P;
    }, []), B = E.filter((P) => typeof P.deletable == "boolean" ? P.deletable : !0), S = B.filter((P) => q.includes(P.id));
    if (j || S) {
      const P = yy(j, B), M = [...S, ...P], G = M.reduce((V, F) => (V.includes(F.id) || V.push(F.id), V), []);
      if ((x || w) && (x && t.setState({
        edges: E.filter((V) => !G.includes(V.id))
      }), w && (j.forEach((V) => {
        y.delete(V.id);
      }), t.setState({
        nodeInternals: new Map(y)
      }))), G.length > 0 && (T == null || T(M), O && O(G.map((V) => ({
        id: V,
        type: "remove"
      })))), j.length > 0 && (R == null || R(j), N)) {
        const V = j.map((F) => ({ id: F.id, type: "remove" }));
        N(V);
      }
    }
  }, []), d = z.useCallback((p) => {
    const v = IE(p), y = v ? null : t.getState().nodeInternals.get(p.id);
    return !v && !y ? [null, null, v] : [v ? p : Bf(y), y, v];
  }, []), h = z.useCallback((p, v = !0, y) => {
    const [b, E, w] = d(p);
    return b ? (y || t.getState().getNodes()).filter((x) => {
      if (!w && (x.id === E.id || !x.positionAbsolute))
        return !1;
      const R = Bf(x), T = cc(R, b);
      return v && T > 0 || T >= b.width * b.height;
    }) : [];
  }, []), m = z.useCallback((p, v, y = !0) => {
    const [b] = d(p);
    if (!b)
      return !1;
    const E = cc(b, v);
    return y && E > 0 || E >= b.width * b.height;
  }, []);
  return z.useMemo(() => ({
    ...e,
    getNodes: r,
    getNode: n,
    getEdges: i,
    getEdge: a,
    setNodes: o,
    setEdges: s,
    addNodes: c,
    addEdges: u,
    toObject: f,
    deleteElements: l,
    getIntersectingNodes: h,
    isNodeIntersecting: m
  }), [
    e,
    r,
    n,
    i,
    a,
    o,
    s,
    c,
    u,
    f,
    l,
    h,
    m
  ]);
}
const d1 = { actInsideInputWithModifier: !1 };
var h1 = ({ deleteKeyCode: e, multiSelectionKeyCode: t }) => {
  const r = Ce(), { deleteElements: n } = Py(), i = dr(e, d1), a = dr(t);
  z.useEffect(() => {
    if (i) {
      const { edges: o, getNodes: s } = r.getState(), c = s().filter((f) => f.selected), u = o.filter((f) => f.selected);
      n({ nodes: c, edges: u }), r.setState({ nodesSelectionActive: !1 });
    }
  }, [i]), z.useEffect(() => {
    r.setState({ multiSelectionActive: a });
  }, [a]);
};
function p1(e) {
  const t = Ce();
  z.useEffect(() => {
    let r;
    const n = () => {
      var a, o;
      if (!e.current)
        return;
      const i = xc(e.current);
      (i.height === 0 || i.width === 0) && ((o = (a = t.getState()).onError) == null || o.call(a, "004", Xe.error004())), t.setState({ width: i.width || 500, height: i.height || 500 });
    };
    return n(), window.addEventListener("resize", n), e.current && (r = new ResizeObserver(() => n()), r.observe(e.current)), () => {
      window.removeEventListener("resize", n), r && e.current && r.unobserve(e.current);
    };
  }, []);
}
const Pc = {
  position: "absolute",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0
}, g1 = (e, t) => e.x !== t.x || e.y !== t.y || e.zoom !== t.k, kr = (e) => ({
  x: e.x,
  y: e.y,
  zoom: e.k
}), Nt = (e, t) => e.target.closest(`.${t}`), Xf = (e, t) => t === 2 && Array.isArray(e) && e.includes(2), Zf = (e) => {
  const t = e.ctrlKey && Vr() ? 10 : 1;
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * t;
}, v1 = (e) => ({
  d3Zoom: e.d3Zoom,
  d3Selection: e.d3Selection,
  d3ZoomHandler: e.d3ZoomHandler,
  userSelectionActive: e.userSelectionActive
}), y1 = ({ onMove: e, onMoveStart: t, onMoveEnd: r, onPaneContextMenu: n, zoomOnScroll: i = !0, zoomOnPinch: a = !0, panOnScroll: o = !1, panOnScrollSpeed: s = 0.5, panOnScrollMode: c = wt.Free, zoomOnDoubleClick: u = !0, elementsSelectable: f, panOnDrag: l = !0, defaultViewport: d, translateExtent: h, minZoom: m, maxZoom: p, zoomActivationKeyCode: v, preventScrolling: y = !0, children: b, noWheelClassName: E, noPanClassName: w }) => {
  const x = z.useRef(), R = Ce(), T = z.useRef(!1), N = z.useRef(!1), O = z.useRef(null), k = z.useRef({ x: 0, y: 0, zoom: 0 }), { d3Zoom: q, d3Selection: j, d3ZoomHandler: B, userSelectionActive: S } = we(v1, Me), P = dr(v), M = z.useRef(0), G = z.useRef(!1), V = z.useRef();
  return p1(O), z.useEffect(() => {
    if (O.current) {
      const F = O.current.getBoundingClientRect(), g = bE().scaleExtent([m, p]).translateExtent(h), C = Ke(O.current).call(g), L = gt.translate(d.x, d.y).scale(jt(d.zoom, m, p)), H = [
        [0, 0],
        [F.width, F.height]
      ], A = g.constrain()(L, H, h);
      g.transform(C, A), g.wheelDelta(Zf), R.setState({
        d3Zoom: g,
        d3Selection: C,
        d3ZoomHandler: C.on("wheel.zoom"),
        // we need to pass transform because zoom handler is not registered when we set the initial transform
        transform: [A.x, A.y, A.k],
        domNode: O.current.closest(".react-flow")
      });
    }
  }, []), z.useEffect(() => {
    j && q && (o && !P && !S ? j.on("wheel.zoom", (F) => {
      if (Nt(F, E))
        return !1;
      F.preventDefault(), F.stopImmediatePropagation();
      const g = j.property("__zoom").k || 1;
      if (F.ctrlKey && a) {
        const Y = tt(F), J = Zf(F), ne = g * Math.pow(2, J);
        q.scaleTo(j, ne, Y, F);
        return;
      }
      const C = F.deltaMode === 1 ? 20 : 1;
      let L = c === wt.Vertical ? 0 : F.deltaX * C, H = c === wt.Horizontal ? 0 : F.deltaY * C;
      !Vr() && F.shiftKey && c !== wt.Vertical && (L = F.deltaY * C, H = 0), q.translateBy(
        j,
        -(L / g) * s,
        -(H / g) * s,
        // @ts-ignore
        { internal: !0 }
      );
      const A = kr(j.property("__zoom")), { onViewportChangeStart: I, onViewportChange: $, onViewportChangeEnd: U } = R.getState();
      clearTimeout(V.current), G.current || (G.current = !0, t == null || t(F, A), I == null || I(A)), G.current && (e == null || e(F, A), $ == null || $(A), V.current = setTimeout(() => {
        r == null || r(F, A), U == null || U(A), G.current = !1;
      }, 150));
    }, { passive: !1 }) : typeof B < "u" && j.on("wheel.zoom", function(F, g) {
      if (!y && F.type === "wheel" && !F.ctrlKey || Nt(F, E))
        return null;
      F.preventDefault(), B.call(this, F, g);
    }, { passive: !1 }));
  }, [
    S,
    o,
    c,
    j,
    q,
    B,
    P,
    a,
    y,
    E,
    t,
    e,
    r
  ]), z.useEffect(() => {
    q && q.on("start", (F) => {
      var L, H;
      if (!F.sourceEvent || F.sourceEvent.internal)
        return null;
      M.current = (L = F.sourceEvent) == null ? void 0 : L.button;
      const { onViewportChangeStart: g } = R.getState(), C = kr(F.transform);
      T.current = !0, k.current = C, ((H = F.sourceEvent) == null ? void 0 : H.type) === "mousedown" && R.setState({ paneDragging: !0 }), g == null || g(C), t == null || t(F.sourceEvent, C);
    });
  }, [q, t]), z.useEffect(() => {
    q && (S && !T.current ? q.on("zoom", null) : S || q.on("zoom", (F) => {
      var C;
      const { onViewportChange: g } = R.getState();
      if (R.setState({ transform: [F.transform.x, F.transform.y, F.transform.k] }), N.current = !!(n && Xf(l, M.current ?? 0)), (e || g) && !((C = F.sourceEvent) != null && C.internal)) {
        const L = kr(F.transform);
        g == null || g(L), e == null || e(F.sourceEvent, L);
      }
    }));
  }, [S, q, e, l, n]), z.useEffect(() => {
    q && q.on("end", (F) => {
      if (!F.sourceEvent || F.sourceEvent.internal)
        return null;
      const { onViewportChangeEnd: g } = R.getState();
      if (T.current = !1, R.setState({ paneDragging: !1 }), n && Xf(l, M.current ?? 0) && !N.current && n(F.sourceEvent), N.current = !1, (r || g) && g1(k.current, F.transform)) {
        const C = kr(F.transform);
        k.current = C, clearTimeout(x.current), x.current = setTimeout(() => {
          g == null || g(C), r == null || r(F.sourceEvent, C);
        }, o ? 150 : 0);
      }
    });
  }, [q, o, l, r, n]), z.useEffect(() => {
    q && q.filter((F) => {
      const g = P || i, C = a && F.ctrlKey;
      if ((l === !0 || Array.isArray(l) && l.includes(1)) && F.button === 1 && F.type === "mousedown" && (Nt(F, "react-flow__node") || Nt(F, "react-flow__edge")))
        return !0;
      if (!l && !g && !o && !u && !a || S || !u && F.type === "dblclick" || Nt(F, E) && F.type === "wheel" || Nt(F, w) && (F.type !== "wheel" || o && F.type === "wheel" && !P) || !a && F.ctrlKey && F.type === "wheel" || !g && !o && !C && F.type === "wheel" || !l && (F.type === "mousedown" || F.type === "touchstart") || Array.isArray(l) && !l.includes(F.button) && F.type === "mousedown")
        return !1;
      const L = Array.isArray(l) && l.includes(F.button) || !F.button || F.button <= 1;
      return (!F.ctrlKey || F.type === "wheel") && L;
    });
  }, [
    S,
    q,
    i,
    a,
    o,
    u,
    l,
    f,
    P
  ]), K.createElement("div", { className: "react-flow__renderer", ref: O, style: Pc }, b);
}, m1 = (e) => ({
  userSelectionActive: e.userSelectionActive,
  userSelectionRect: e.userSelectionRect
});
function _1() {
  const { userSelectionActive: e, userSelectionRect: t } = we(m1, Me);
  return e && t ? K.createElement("div", { className: "react-flow__selection react-flow__container", style: {
    width: t.width,
    height: t.height,
    transform: `translate(${t.x}px, ${t.y}px)`
  } }) : null;
}
function Qf(e, t) {
  const r = t.parentNode || t.parentId, n = e.find((i) => i.id === r);
  if (n) {
    const i = t.position.x + t.width - n.width, a = t.position.y + t.height - n.height;
    if (i > 0 || a > 0 || t.position.x < 0 || t.position.y < 0) {
      if (n.style = { ...n.style }, n.style.width = n.style.width ?? n.width, n.style.height = n.style.height ?? n.height, i > 0 && (n.style.width += i), a > 0 && (n.style.height += a), t.position.x < 0) {
        const o = Math.abs(t.position.x);
        n.position.x = n.position.x - o, n.style.width += o, t.position.x = 0;
      }
      if (t.position.y < 0) {
        const o = Math.abs(t.position.y);
        n.position.y = n.position.y - o, n.style.height += o, t.position.y = 0;
      }
      n.width = n.style.width, n.height = n.style.height;
    }
  }
}
function ky(e, t) {
  if (e.some((n) => n.type === "reset"))
    return e.filter((n) => n.type === "reset").map((n) => n.item);
  const r = e.filter((n) => n.type === "add").map((n) => n.item);
  return t.reduce((n, i) => {
    const a = e.filter((s) => s.id === i.id);
    if (a.length === 0)
      return n.push(i), n;
    const o = { ...i };
    for (const s of a)
      if (s)
        switch (s.type) {
          case "select": {
            o.selected = s.selected;
            break;
          }
          case "position": {
            typeof s.position < "u" && (o.position = s.position), typeof s.positionAbsolute < "u" && (o.positionAbsolute = s.positionAbsolute), typeof s.dragging < "u" && (o.dragging = s.dragging), o.expandParent && Qf(n, o);
            break;
          }
          case "dimensions": {
            typeof s.dimensions < "u" && (o.width = s.dimensions.width, o.height = s.dimensions.height), typeof s.updateStyle < "u" && (o.style = { ...o.style || {}, ...s.dimensions }), typeof s.resizing == "boolean" && (o.resizing = s.resizing), o.expandParent && Qf(n, o);
            break;
          }
          case "remove":
            return n;
        }
    return n.push(o), n;
  }, r);
}
function Dy(e, t) {
  return ky(e, t);
}
function b1(e, t) {
  return ky(e, t);
}
const ht = (e, t) => ({
  id: e,
  type: "select",
  selected: t
});
function Pt(e, t) {
  return e.reduce((r, n) => {
    const i = t.includes(n.id);
    return !n.selected && i ? (n.selected = !0, r.push(ht(n.id, !0))) : n.selected && !i && (n.selected = !1, r.push(ht(n.id, !1))), r;
  }, []);
}
const Pn = (e, t) => (r) => {
  r.target === t.current && (e == null || e(r));
}, w1 = (e) => ({
  userSelectionActive: e.userSelectionActive,
  elementsSelectable: e.elementsSelectable,
  dragging: e.paneDragging
}), Ly = z.memo(({ isSelecting: e, selectionMode: t = lr.Full, panOnDrag: r, onSelectionStart: n, onSelectionEnd: i, onPaneClick: a, onPaneContextMenu: o, onPaneScroll: s, onPaneMouseEnter: c, onPaneMouseMove: u, onPaneMouseLeave: f, children: l }) => {
  const d = z.useRef(null), h = Ce(), m = z.useRef(0), p = z.useRef(0), v = z.useRef(), { userSelectionActive: y, elementsSelectable: b, dragging: E } = we(w1, Me), w = () => {
    h.setState({ userSelectionActive: !1, userSelectionRect: null }), m.current = 0, p.current = 0;
  }, x = (B) => {
    a == null || a(B), h.getState().resetSelectedElements(), h.setState({ nodesSelectionActive: !1 });
  }, R = (B) => {
    if (Array.isArray(r) && (r != null && r.includes(2))) {
      B.preventDefault();
      return;
    }
    o == null || o(B);
  }, T = s ? (B) => s(B) : void 0, N = (B) => {
    const { resetSelectedElements: S, domNode: P } = h.getState();
    if (v.current = P == null ? void 0 : P.getBoundingClientRect(), !b || !e || B.button !== 0 || B.target !== d.current || !v.current)
      return;
    const { x: M, y: G } = vt(B, v.current);
    S(), h.setState({
      userSelectionRect: {
        width: 0,
        height: 0,
        startX: M,
        startY: G,
        x: M,
        y: G
      }
    }), n == null || n(B);
  }, O = (B) => {
    const { userSelectionRect: S, nodeInternals: P, edges: M, transform: G, onNodesChange: V, onEdgesChange: F, nodeOrigin: g, getNodes: C } = h.getState();
    if (!e || !v.current || !S)
      return;
    h.setState({ userSelectionActive: !0, nodesSelectionActive: !1 });
    const L = vt(B, v.current), H = S.startX ?? 0, A = S.startY ?? 0, I = {
      ...S,
      x: L.x < H ? L.x : H,
      y: L.y < A ? L.y : A,
      width: Math.abs(L.x - H),
      height: Math.abs(L.y - A)
    }, $ = C(), U = vy(P, I, G, t === lr.Partial, !0, g), Y = yy(U, M).map((ne) => ne.id), J = U.map((ne) => ne.id);
    if (m.current !== J.length) {
      m.current = J.length;
      const ne = Pt($, J);
      ne.length && (V == null || V(ne));
    }
    if (p.current !== Y.length) {
      p.current = Y.length;
      const ne = Pt(M, Y);
      ne.length && (F == null || F(ne));
    }
    h.setState({
      userSelectionRect: I
    });
  }, k = (B) => {
    if (B.button !== 0)
      return;
    const { userSelectionRect: S } = h.getState();
    !y && S && B.target === d.current && (x == null || x(B)), h.setState({ nodesSelectionActive: m.current > 0 }), w(), i == null || i(B);
  }, q = (B) => {
    y && (h.setState({ nodesSelectionActive: m.current > 0 }), i == null || i(B)), w();
  }, j = b && (e || y);
  return K.createElement(
    "div",
    { className: He(["react-flow__pane", { dragging: E, selection: e }]), onClick: j ? void 0 : Pn(x, d), onContextMenu: Pn(R, d), onWheel: Pn(T, d), onMouseEnter: j ? void 0 : c, onMouseDown: j ? N : void 0, onMouseMove: j ? O : u, onMouseUp: j ? k : void 0, onMouseLeave: j ? q : f, ref: d, style: Pc },
    l,
    K.createElement(_1, null)
  );
});
Ly.displayName = "Pane";
function $y(e, t) {
  const r = e.parentNode || e.parentId;
  if (!r)
    return !1;
  const n = t.get(r);
  return n ? n.selected ? !0 : $y(n, t) : !1;
}
function Jf(e, t, r) {
  let n = e;
  do {
    if (n != null && n.matches(t))
      return !0;
    if (n === r.current)
      return !1;
    n = n.parentElement;
  } while (n);
  return !1;
}
function E1(e, t, r, n) {
  return Array.from(e.values()).filter((i) => (i.selected || i.id === n) && (!i.parentNode || i.parentId || !$y(i, e)) && (i.draggable || t && typeof i.draggable > "u")).map((i) => {
    var a, o;
    return {
      id: i.id,
      position: i.position || { x: 0, y: 0 },
      positionAbsolute: i.positionAbsolute || { x: 0, y: 0 },
      distance: {
        x: r.x - (((a = i.positionAbsolute) == null ? void 0 : a.x) ?? 0),
        y: r.y - (((o = i.positionAbsolute) == null ? void 0 : o.y) ?? 0)
      },
      delta: {
        x: 0,
        y: 0
      },
      extent: i.extent,
      parentNode: i.parentNode || i.parentId,
      parentId: i.parentNode || i.parentId,
      width: i.width,
      height: i.height,
      expandParent: i.expandParent
    };
  });
}
function S1(e, t) {
  return !t || t === "parent" ? t : [t[0], [t[1][0] - (e.width || 0), t[1][1] - (e.height || 0)]];
}
function Fy(e, t, r, n, i = [0, 0], a) {
  const o = S1(e, e.extent || n);
  let s = o;
  const c = e.parentNode || e.parentId;
  if (e.extent === "parent" && !e.expandParent)
    if (c && e.width && e.height) {
      const l = r.get(c), { x: d, y: h } = Lt(l, i).positionAbsolute;
      s = l && je(d) && je(h) && je(l.width) && je(l.height) ? [
        [d + e.width * i[0], h + e.height * i[1]],
        [
          d + l.width - e.width + e.width * i[0],
          h + l.height - e.height + e.height * i[1]
        ]
      ] : s;
    } else
      a == null || a("005", Xe.error005()), s = o;
  else if (e.extent && c && e.extent !== "parent") {
    const l = r.get(c), { x: d, y: h } = Lt(l, i).positionAbsolute;
    s = [
      [e.extent[0][0] + d, e.extent[0][1] + h],
      [e.extent[1][0] + d, e.extent[1][1] + h]
    ];
  }
  let u = { x: 0, y: 0 };
  if (c) {
    const l = r.get(c);
    u = Lt(l, i).positionAbsolute;
  }
  const f = s && s !== "parent" ? Rc(t, s) : t;
  return {
    position: {
      x: f.x - u.x,
      y: f.y - u.y
    },
    positionAbsolute: f
  };
}
function kn({ nodeId: e, dragItems: t, nodeInternals: r }) {
  const n = t.map((i) => ({
    ...r.get(i.id),
    position: i.position,
    positionAbsolute: i.positionAbsolute
  }));
  return [e ? n.find((i) => i.id === e) : n[0], n];
}
const el = (e, t, r, n) => {
  const i = t.querySelectorAll(e);
  if (!i || !i.length)
    return null;
  const a = Array.from(i), o = t.getBoundingClientRect(), s = {
    x: o.width * n[0],
    y: o.height * n[1]
  };
  return a.map((c) => {
    const u = c.getBoundingClientRect();
    return {
      id: c.getAttribute("data-handleid"),
      position: c.getAttribute("data-handlepos"),
      x: (u.left - o.left - s.x) / r,
      y: (u.top - o.top - s.y) / r,
      ...xc(c)
    };
  });
};
function Qt(e, t, r) {
  return r === void 0 ? r : (n) => {
    const i = t().nodeInternals.get(e);
    i && r(n, { ...i });
  };
}
function gc({ id: e, store: t, unselect: r = !1, nodeRef: n }) {
  const { addSelectedNodes: i, unselectNodesAndEdges: a, multiSelectionActive: o, nodeInternals: s, onError: c } = t.getState(), u = s.get(e);
  if (!u) {
    c == null || c("012", Xe.error012(e));
    return;
  }
  t.setState({ nodesSelectionActive: !1 }), u.selected ? (r || u.selected && o) && (a({ nodes: [u], edges: [] }), requestAnimationFrame(() => {
    var f;
    return (f = n == null ? void 0 : n.current) == null ? void 0 : f.blur();
  })) : i([e]);
}
function x1() {
  const e = Ce();
  return z.useCallback(({ sourceEvent: r }) => {
    const { transform: n, snapGrid: i, snapToGrid: a } = e.getState(), o = r.touches ? r.touches[0].clientX : r.clientX, s = r.touches ? r.touches[0].clientY : r.clientY, c = {
      x: (o - n[0]) / n[2],
      y: (s - n[1]) / n[2]
    };
    return {
      xSnapped: a ? i[0] * Math.round(c.x / i[0]) : c.x,
      ySnapped: a ? i[1] * Math.round(c.y / i[1]) : c.y,
      ...c
    };
  }, []);
}
function Dn(e) {
  return (t, r, n) => e == null ? void 0 : e(t, n);
}
function By({ nodeRef: e, disabled: t = !1, noDragClassName: r, handleSelector: n, nodeId: i, isSelectable: a, selectNodesOnDrag: o }) {
  const s = Ce(), [c, u] = z.useState(!1), f = z.useRef([]), l = z.useRef({ x: null, y: null }), d = z.useRef(0), h = z.useRef(null), m = z.useRef({ x: 0, y: 0 }), p = z.useRef(null), v = z.useRef(!1), y = z.useRef(!1), b = z.useRef(!1), E = x1();
  return z.useEffect(() => {
    if (e != null && e.current) {
      const w = Ke(e.current), x = ({ x: N, y: O }) => {
        const { nodeInternals: k, onNodeDrag: q, onSelectionDrag: j, updateNodePositions: B, nodeExtent: S, snapGrid: P, snapToGrid: M, nodeOrigin: G, onError: V } = s.getState();
        l.current = { x: N, y: O };
        let F = !1, g = { x: 0, y: 0, x2: 0, y2: 0 };
        if (f.current.length > 1 && S) {
          const L = Nc(f.current, G);
          g = Tc(L);
        }
        if (f.current = f.current.map((L) => {
          const H = { x: N - L.distance.x, y: O - L.distance.y };
          M && (H.x = P[0] * Math.round(H.x / P[0]), H.y = P[1] * Math.round(H.y / P[1]));
          const A = [
            [S[0][0], S[0][1]],
            [S[1][0], S[1][1]]
          ];
          f.current.length > 1 && S && !L.extent && (A[0][0] = L.positionAbsolute.x - g.x + S[0][0], A[1][0] = L.positionAbsolute.x + (L.width ?? 0) - g.x2 + S[1][0], A[0][1] = L.positionAbsolute.y - g.y + S[0][1], A[1][1] = L.positionAbsolute.y + (L.height ?? 0) - g.y2 + S[1][1]);
          const I = Fy(L, H, k, A, G, V);
          return F = F || L.position.x !== I.position.x || L.position.y !== I.position.y, L.position = I.position, L.positionAbsolute = I.positionAbsolute, L;
        }), !F)
          return;
        B(f.current, !0, !0), u(!0);
        const C = i ? q : Dn(j);
        if (C && p.current) {
          const [L, H] = kn({
            nodeId: i,
            dragItems: f.current,
            nodeInternals: k
          });
          C(p.current, L, H);
        }
      }, R = () => {
        if (!h.current)
          return;
        const [N, O] = oy(m.current, h.current);
        if (N !== 0 || O !== 0) {
          const { transform: k, panBy: q } = s.getState();
          l.current.x = (l.current.x ?? 0) - N / k[2], l.current.y = (l.current.y ?? 0) - O / k[2], q({ x: N, y: O }) && x(l.current);
        }
        d.current = requestAnimationFrame(R);
      }, T = (N) => {
        var G;
        const { nodeInternals: O, multiSelectionActive: k, nodesDraggable: q, unselectNodesAndEdges: j, onNodeDragStart: B, onSelectionDragStart: S } = s.getState();
        y.current = !0;
        const P = i ? B : Dn(S);
        (!o || !a) && !k && i && ((G = O.get(i)) != null && G.selected || j()), i && a && o && gc({
          id: i,
          store: s,
          nodeRef: e
        });
        const M = E(N);
        if (l.current = M, f.current = E1(O, q, M, i), P && f.current) {
          const [V, F] = kn({
            nodeId: i,
            dragItems: f.current,
            nodeInternals: O
          });
          P(N.sourceEvent, V, F);
        }
      };
      if (t)
        w.on(".drag", null);
      else {
        const N = q0().on("start", (O) => {
          const { domNode: k, nodeDragThreshold: q } = s.getState();
          q === 0 && T(O), b.current = !1;
          const j = E(O);
          l.current = j, h.current = (k == null ? void 0 : k.getBoundingClientRect()) || null, m.current = vt(O.sourceEvent, h.current);
        }).on("drag", (O) => {
          var B, S;
          const k = E(O), { autoPanOnNodeDrag: q, nodeDragThreshold: j } = s.getState();
          if (O.sourceEvent.type === "touchmove" && O.sourceEvent.touches.length > 1 && (b.current = !0), !b.current) {
            if (!v.current && y.current && q && (v.current = !0, R()), !y.current) {
              const P = k.xSnapped - (((B = l == null ? void 0 : l.current) == null ? void 0 : B.x) ?? 0), M = k.ySnapped - (((S = l == null ? void 0 : l.current) == null ? void 0 : S.y) ?? 0);
              Math.sqrt(P * P + M * M) > j && T(O);
            }
            (l.current.x !== k.xSnapped || l.current.y !== k.ySnapped) && f.current && y.current && (p.current = O.sourceEvent, m.current = vt(O.sourceEvent, h.current), x(k));
          }
        }).on("end", (O) => {
          if (!(!y.current || b.current) && (u(!1), v.current = !1, y.current = !1, cancelAnimationFrame(d.current), f.current)) {
            const { updateNodePositions: k, nodeInternals: q, onNodeDragStop: j, onSelectionDragStop: B } = s.getState(), S = i ? j : Dn(B);
            if (k(f.current, !1, !1), S) {
              const [P, M] = kn({
                nodeId: i,
                dragItems: f.current,
                nodeInternals: q
              });
              S(O.sourceEvent, P, M);
            }
          }
        }).filter((O) => {
          const k = O.target;
          return !O.button && (!r || !Jf(k, `.${r}`, e)) && (!n || Jf(k, n, e));
        });
        return w.call(N), () => {
          w.on(".drag", null);
        };
      }
    }
  }, [
    e,
    t,
    r,
    n,
    a,
    s,
    i,
    o,
    E
  ]), c;
}
function jy() {
  const e = Ce();
  return z.useCallback((r) => {
    const { nodeInternals: n, nodeExtent: i, updateNodePositions: a, getNodes: o, snapToGrid: s, snapGrid: c, onError: u, nodesDraggable: f } = e.getState(), l = o().filter((b) => b.selected && (b.draggable || f && typeof b.draggable > "u")), d = s ? c[0] : 5, h = s ? c[1] : 5, m = r.isShiftPressed ? 4 : 1, p = r.x * d * m, v = r.y * h * m, y = l.map((b) => {
      if (b.positionAbsolute) {
        const E = { x: b.positionAbsolute.x + p, y: b.positionAbsolute.y + v };
        s && (E.x = c[0] * Math.round(E.x / c[0]), E.y = c[1] * Math.round(E.y / c[1]));
        const { positionAbsolute: w, position: x } = Fy(b, E, n, i, void 0, u);
        b.position = x, b.positionAbsolute = w;
      }
      return b;
    });
    a(y, !0, !1);
  }, []);
}
const $t = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 }
};
var Jt = (e) => {
  const t = ({ id: r, type: n, data: i, xPos: a, yPos: o, xPosOrigin: s, yPosOrigin: c, selected: u, onClick: f, onMouseEnter: l, onMouseMove: d, onMouseLeave: h, onContextMenu: m, onDoubleClick: p, style: v, className: y, isDraggable: b, isSelectable: E, isConnectable: w, isFocusable: x, selectNodesOnDrag: R, sourcePosition: T, targetPosition: N, hidden: O, resizeObserver: k, dragHandle: q, zIndex: j, isParent: B, noDragClassName: S, noPanClassName: P, initialized: M, disableKeyboardA11y: G, ariaLabel: V, rfId: F, hasHandleBounds: g }) => {
    const C = Ce(), L = z.useRef(null), H = z.useRef(null), A = z.useRef(T), I = z.useRef(N), $ = z.useRef(n), U = E || b || f || l || d || h, Y = jy(), J = Qt(r, C.getState, l), ne = Qt(r, C.getState, d), le = Qt(r, C.getState, h), Ee = Qt(r, C.getState, m), pe = Qt(r, C.getState, p), fe = (Z) => {
      const { nodeDragThreshold: Q } = C.getState();
      if (E && (!R || !b || Q > 0) && gc({
        id: r,
        store: C,
        nodeRef: L
      }), f) {
        const ye = C.getState().nodeInternals.get(r);
        ye && f(Z, { ...ye });
      }
    }, te = (Z) => {
      if (!fc(Z) && !G)
        if (uy.includes(Z.key) && E) {
          const Q = Z.key === "Escape";
          gc({
            id: r,
            store: C,
            unselect: Q,
            nodeRef: L
          });
        } else b && u && Object.prototype.hasOwnProperty.call($t, Z.key) && (C.setState({
          ariaLiveMessage: `Moved selected node ${Z.key.replace("Arrow", "").toLowerCase()}. New position, x: ${~~a}, y: ${~~o}`
        }), Y({
          x: $t[Z.key].x,
          y: $t[Z.key].y,
          isShiftPressed: Z.shiftKey
        }));
    };
    z.useEffect(() => () => {
      H.current && (k == null || k.unobserve(H.current), H.current = null);
    }, []), z.useEffect(() => {
      if (L.current && !O) {
        const Z = L.current;
        (!M || !g || H.current !== Z) && (H.current && (k == null || k.unobserve(H.current)), k == null || k.observe(Z), H.current = Z);
      }
    }, [O, M, g]), z.useEffect(() => {
      const Z = $.current !== n, Q = A.current !== T, ye = I.current !== N;
      L.current && (Z || Q || ye) && (Z && ($.current = n), Q && (A.current = T), ye && (I.current = N), C.getState().updateNodeDimensions([{ id: r, nodeElement: L.current, forceUpdate: !0 }]));
    }, [r, n, T, N]);
    const de = By({
      nodeRef: L,
      disabled: O || !b,
      noDragClassName: S,
      handleSelector: q,
      nodeId: r,
      isSelectable: E,
      selectNodesOnDrag: R
    });
    return O ? null : K.createElement(
      "div",
      { className: He([
        "react-flow__node",
        `react-flow__node-${n}`,
        {
          // this is overwritable by passing `nopan` as a class name
          [P]: b
        },
        y,
        {
          selected: u,
          selectable: E,
          parent: B,
          dragging: de
        }
      ]), ref: L, style: {
        zIndex: j,
        transform: `translate(${s}px,${c}px)`,
        pointerEvents: U ? "all" : "none",
        visibility: M ? "visible" : "hidden",
        ...v
      }, "data-id": r, "data-testid": `rf__node-${r}`, onMouseEnter: J, onMouseMove: ne, onMouseLeave: le, onContextMenu: Ee, onClick: fe, onDoubleClick: pe, onKeyDown: x ? te : void 0, tabIndex: x ? 0 : void 0, role: x ? "button" : void 0, "aria-describedby": G ? void 0 : `${Oy}-${F}`, "aria-label": V },
      K.createElement(
        $E,
        { value: r },
        K.createElement(e, { id: r, data: i, type: n, xPos: a, yPos: o, selected: u, isConnectable: w, sourcePosition: T, targetPosition: N, dragging: de, dragHandle: q, zIndex: j })
      )
    );
  };
  return t.displayName = "NodeWrapper", z.memo(t);
};
const R1 = (e) => {
  const t = e.getNodes().filter((r) => r.selected);
  return {
    ...Nc(t, e.nodeOrigin),
    transformString: `translate(${e.transform[0]}px,${e.transform[1]}px) scale(${e.transform[2]})`,
    userSelectionActive: e.userSelectionActive
  };
};
function T1({ onSelectionContextMenu: e, noPanClassName: t, disableKeyboardA11y: r }) {
  const n = Ce(), { width: i, height: a, x: o, y: s, transformString: c, userSelectionActive: u } = we(R1, Me), f = jy(), l = z.useRef(null);
  if (z.useEffect(() => {
    var m;
    r || (m = l.current) == null || m.focus({
      preventScroll: !0
    });
  }, [r]), By({
    nodeRef: l
  }), u || !i || !a)
    return null;
  const d = e ? (m) => {
    const p = n.getState().getNodes().filter((v) => v.selected);
    e(m, p);
  } : void 0, h = (m) => {
    Object.prototype.hasOwnProperty.call($t, m.key) && f({
      x: $t[m.key].x,
      y: $t[m.key].y,
      isShiftPressed: m.shiftKey
    });
  };
  return K.createElement(
    "div",
    { className: He(["react-flow__nodesselection", "react-flow__container", t]), style: {
      transform: c
    } },
    K.createElement("div", { ref: l, className: "react-flow__nodesselection-rect", onContextMenu: d, tabIndex: r ? void 0 : -1, onKeyDown: r ? void 0 : h, style: {
      width: i,
      height: a,
      top: s,
      left: o
    } })
  );
}
var A1 = z.memo(T1);
const C1 = (e) => e.nodesSelectionActive, Hy = ({ children: e, onPaneClick: t, onPaneMouseEnter: r, onPaneMouseMove: n, onPaneMouseLeave: i, onPaneContextMenu: a, onPaneScroll: o, deleteKeyCode: s, onMove: c, onMoveStart: u, onMoveEnd: f, selectionKeyCode: l, selectionOnDrag: d, selectionMode: h, onSelectionStart: m, onSelectionEnd: p, multiSelectionKeyCode: v, panActivationKeyCode: y, zoomActivationKeyCode: b, elementsSelectable: E, zoomOnScroll: w, zoomOnPinch: x, panOnScroll: R, panOnScrollSpeed: T, panOnScrollMode: N, zoomOnDoubleClick: O, panOnDrag: k, defaultViewport: q, translateExtent: j, minZoom: B, maxZoom: S, preventScrolling: P, onSelectionContextMenu: M, noWheelClassName: G, noPanClassName: V, disableKeyboardA11y: F }) => {
  const g = we(C1), C = dr(l), L = dr(y), H = L || k, A = L || R, I = C || d && H !== !0;
  return h1({ deleteKeyCode: s, multiSelectionKeyCode: v }), K.createElement(
    y1,
    { onMove: c, onMoveStart: u, onMoveEnd: f, onPaneContextMenu: a, elementsSelectable: E, zoomOnScroll: w, zoomOnPinch: x, panOnScroll: A, panOnScrollSpeed: T, panOnScrollMode: N, zoomOnDoubleClick: O, panOnDrag: !C && H, defaultViewport: q, translateExtent: j, minZoom: B, maxZoom: S, zoomActivationKeyCode: b, preventScrolling: P, noWheelClassName: G, noPanClassName: V },
    K.createElement(
      Ly,
      { onSelectionStart: m, onSelectionEnd: p, onPaneClick: t, onPaneMouseEnter: r, onPaneMouseMove: n, onPaneMouseLeave: i, onPaneContextMenu: a, onPaneScroll: o, panOnDrag: H, isSelecting: !!I, selectionMode: h },
      e,
      g && K.createElement(A1, { onSelectionContextMenu: M, noPanClassName: V, disableKeyboardA11y: F })
    )
  );
};
Hy.displayName = "FlowRenderer";
var O1 = z.memo(Hy);
function q1(e) {
  return we(z.useCallback((r) => e ? vy(r.nodeInternals, { x: 0, y: 0, width: r.width, height: r.height }, r.transform, !0) : r.getNodes(), [e]));
}
function N1(e) {
  const t = {
    input: Jt(e.input || Ry),
    default: Jt(e.default || pc),
    output: Jt(e.output || Ay),
    group: Jt(e.group || Mc)
  }, r = {}, n = Object.keys(e).filter((i) => !["input", "default", "output", "group"].includes(i)).reduce((i, a) => (i[a] = Jt(e[a] || pc), i), r);
  return {
    ...t,
    ...n
  };
}
const I1 = ({ x: e, y: t, width: r, height: n, origin: i }) => !r || !n ? { x: e, y: t } : i[0] < 0 || i[1] < 0 || i[0] > 1 || i[1] > 1 ? { x: e, y: t } : {
  x: e - r * i[0],
  y: t - n * i[1]
}, M1 = (e) => ({
  nodesDraggable: e.nodesDraggable,
  nodesConnectable: e.nodesConnectable,
  nodesFocusable: e.nodesFocusable,
  elementsSelectable: e.elementsSelectable,
  updateNodeDimensions: e.updateNodeDimensions,
  onError: e.onError
}), zy = (e) => {
  const { nodesDraggable: t, nodesConnectable: r, nodesFocusable: n, elementsSelectable: i, updateNodeDimensions: a, onError: o } = we(M1, Me), s = q1(e.onlyRenderVisibleElements), c = z.useRef(), u = z.useMemo(() => {
    if (typeof ResizeObserver > "u")
      return null;
    const f = new ResizeObserver((l) => {
      const d = l.map((h) => ({
        id: h.target.getAttribute("data-id"),
        nodeElement: h.target,
        forceUpdate: !0
      }));
      a(d);
    });
    return c.current = f, f;
  }, []);
  return z.useEffect(() => () => {
    var f;
    (f = c == null ? void 0 : c.current) == null || f.disconnect();
  }, []), K.createElement("div", { className: "react-flow__nodes", style: Pc }, s.map((f) => {
    var x, R, T;
    let l = f.type || "default";
    e.nodeTypes[l] || (o == null || o("003", Xe.error003(l)), l = "default");
    const d = e.nodeTypes[l] || e.nodeTypes.default, h = !!(f.draggable || t && typeof f.draggable > "u"), m = !!(f.selectable || i && typeof f.selectable > "u"), p = !!(f.connectable || r && typeof f.connectable > "u"), v = !!(f.focusable || n && typeof f.focusable > "u"), y = e.nodeExtent ? Rc(f.positionAbsolute, e.nodeExtent) : f.positionAbsolute, b = (y == null ? void 0 : y.x) ?? 0, E = (y == null ? void 0 : y.y) ?? 0, w = I1({
      x: b,
      y: E,
      width: f.width ?? 0,
      height: f.height ?? 0,
      origin: e.nodeOrigin
    });
    return K.createElement(d, { key: f.id, id: f.id, className: f.className, style: f.style, type: l, data: f.data, sourcePosition: f.sourcePosition || re.Bottom, targetPosition: f.targetPosition || re.Top, hidden: f.hidden, xPos: b, yPos: E, xPosOrigin: w.x, yPosOrigin: w.y, selectNodesOnDrag: e.selectNodesOnDrag, onClick: e.onNodeClick, onMouseEnter: e.onNodeMouseEnter, onMouseMove: e.onNodeMouseMove, onMouseLeave: e.onNodeMouseLeave, onContextMenu: e.onNodeContextMenu, onDoubleClick: e.onNodeDoubleClick, selected: !!f.selected, isDraggable: h, isSelectable: m, isConnectable: p, isFocusable: v, resizeObserver: u, dragHandle: f.dragHandle, zIndex: ((x = f[me]) == null ? void 0 : x.z) ?? 0, isParent: !!((R = f[me]) != null && R.isParent), noDragClassName: e.noDragClassName, noPanClassName: e.noPanClassName, initialized: !!f.width && !!f.height, rfId: e.rfId, disableKeyboardA11y: e.disableKeyboardA11y, ariaLabel: f.ariaLabel, hasHandleBounds: !!((T = f[me]) != null && T.handleBounds) });
  }));
};
zy.displayName = "NodeRenderer";
var P1 = z.memo(zy);
const k1 = (e, t, r) => r === re.Left ? e - t : r === re.Right ? e + t : e, D1 = (e, t, r) => r === re.Top ? e - t : r === re.Bottom ? e + t : e, tl = "react-flow__edgeupdater", rl = ({ position: e, centerX: t, centerY: r, radius: n = 10, onMouseDown: i, onMouseEnter: a, onMouseOut: o, type: s }) => K.createElement("circle", { onMouseDown: i, onMouseEnter: a, onMouseOut: o, className: He([tl, `${tl}-${s}`]), cx: k1(t, n, e), cy: D1(r, n, e), r: n, stroke: "transparent", fill: "transparent" }), L1 = () => !0;
var It = (e) => {
  const t = ({ id: r, className: n, type: i, data: a, onClick: o, onEdgeDoubleClick: s, selected: c, animated: u, label: f, labelStyle: l, labelShowBg: d, labelBgStyle: h, labelBgPadding: m, labelBgBorderRadius: p, style: v, source: y, target: b, sourceX: E, sourceY: w, targetX: x, targetY: R, sourcePosition: T, targetPosition: N, elementsSelectable: O, hidden: k, sourceHandleId: q, targetHandleId: j, onContextMenu: B, onMouseEnter: S, onMouseMove: P, onMouseLeave: M, reconnectRadius: G, onReconnect: V, onReconnectStart: F, onReconnectEnd: g, markerEnd: C, markerStart: L, rfId: H, ariaLabel: A, isFocusable: I, isReconnectable: $, pathOptions: U, interactionWidth: Y, disableKeyboardA11y: J }) => {
    const ne = z.useRef(null), [le, Ee] = z.useState(!1), [pe, fe] = z.useState(!1), te = Ce(), de = z.useMemo(() => `url('#${dc(L, H)}')`, [L, H]), Z = z.useMemo(() => `url('#${dc(C, H)}')`, [C, H]);
    if (k)
      return null;
    const Q = (_e) => {
      var _;
      const { edges: Re, addSelectedEdges: be, unselectNodesAndEdges: Se, multiSelectionActive: Ye } = te.getState(), Be = Re.find((D) => D.id === r);
      Be && (O && (te.setState({ nodesSelectionActive: !1 }), Be.selected && Ye ? (Se({ nodes: [], edges: [Be] }), (_ = ne.current) == null || _.blur()) : be([r])), o && o(_e, Be));
    }, ye = Zt(r, te.getState, s), ae = Zt(r, te.getState, B), Ie = Zt(r, te.getState, S), Te = Zt(r, te.getState, P), ge = Zt(r, te.getState, M), Ae = (_e, Re) => {
      if (_e.button !== 0)
        return;
      const { edges: be, isValidConnection: Se } = te.getState(), Ye = Re ? b : y, Be = (Re ? j : q) || null, _ = Re ? "target" : "source", D = Se || L1, W = Re, X = be.find((ie) => ie.id === r);
      fe(!0), F == null || F(_e, X, _);
      const ee = (ie) => {
        fe(!1), g == null || g(ie, X, _);
      };
      wy({
        event: _e,
        handleId: Be,
        nodeId: Ye,
        onConnect: (ie) => V == null ? void 0 : V(X, ie),
        isTarget: W,
        getState: te.getState,
        setState: te.setState,
        isValidConnection: D,
        edgeUpdaterType: _,
        onReconnectEnd: ee
      });
    }, Pe = (_e) => Ae(_e, !0), Ue = (_e) => Ae(_e, !1), $e = () => Ee(!0), Oe = () => Ee(!1), Fe = !O && !o, Ve = (_e) => {
      var Re;
      if (!J && uy.includes(_e.key) && O) {
        const { unselectNodesAndEdges: be, addSelectedEdges: Se, edges: Ye } = te.getState();
        _e.key === "Escape" ? ((Re = ne.current) == null || Re.blur(), be({ edges: [Ye.find((_) => _.id === r)] })) : Se([r]);
      }
    };
    return K.createElement(
      "g",
      { className: He([
        "react-flow__edge",
        `react-flow__edge-${i}`,
        n,
        { selected: c, animated: u, inactive: Fe, updating: le }
      ]), onClick: Q, onDoubleClick: ye, onContextMenu: ae, onMouseEnter: Ie, onMouseMove: Te, onMouseLeave: ge, onKeyDown: I ? Ve : void 0, tabIndex: I ? 0 : void 0, role: I ? "button" : "img", "data-testid": `rf__edge-${r}`, "aria-label": A === null ? void 0 : A || `Edge from ${y} to ${b}`, "aria-describedby": I ? `${qy}-${H}` : void 0, ref: ne },
      !pe && K.createElement(e, { id: r, source: y, target: b, selected: c, animated: u, label: f, labelStyle: l, labelShowBg: d, labelBgStyle: h, labelBgPadding: m, labelBgBorderRadius: p, data: a, style: v, sourceX: E, sourceY: w, targetX: x, targetY: R, sourcePosition: T, targetPosition: N, sourceHandleId: q, targetHandleId: j, markerStart: de, markerEnd: Z, pathOptions: U, interactionWidth: Y }),
      $ && K.createElement(
        K.Fragment,
        null,
        ($ === "source" || $ === !0) && K.createElement(rl, { position: T, centerX: E, centerY: w, radius: G, onMouseDown: Pe, onMouseEnter: $e, onMouseOut: Oe, type: "source" }),
        ($ === "target" || $ === !0) && K.createElement(rl, { position: N, centerX: x, centerY: R, radius: G, onMouseDown: Ue, onMouseEnter: $e, onMouseOut: Oe, type: "target" })
      )
    );
  };
  return t.displayName = "EdgeWrapper", z.memo(t);
};
function $1(e) {
  const t = {
    default: It(e.default || Kr),
    straight: It(e.bezier || Oc),
    step: It(e.step || Cc),
    smoothstep: It(e.step || rn),
    simplebezier: It(e.simplebezier || Ac)
  }, r = {}, n = Object.keys(e).filter((i) => !["default", "bezier"].includes(i)).reduce((i, a) => (i[a] = It(e[a] || Kr), i), r);
  return {
    ...t,
    ...n
  };
}
function nl(e, t, r = null) {
  const n = ((r == null ? void 0 : r.x) || 0) + t.x, i = ((r == null ? void 0 : r.y) || 0) + t.y, a = (r == null ? void 0 : r.width) || t.width, o = (r == null ? void 0 : r.height) || t.height;
  switch (e) {
    case re.Top:
      return {
        x: n + a / 2,
        y: i
      };
    case re.Right:
      return {
        x: n + a,
        y: i + o / 2
      };
    case re.Bottom:
      return {
        x: n + a / 2,
        y: i + o
      };
    case re.Left:
      return {
        x: n,
        y: i + o / 2
      };
  }
}
function il(e, t) {
  return e ? e.length === 1 || !t ? e[0] : t && e.find((r) => r.id === t) || null : null;
}
const F1 = (e, t, r, n, i, a) => {
  const o = nl(r, e, t), s = nl(a, n, i);
  return {
    sourceX: o.x,
    sourceY: o.y,
    targetX: s.x,
    targetY: s.y
  };
};
function B1({ sourcePos: e, targetPos: t, sourceWidth: r, sourceHeight: n, targetWidth: i, targetHeight: a, width: o, height: s, transform: c }) {
  const u = {
    x: Math.min(e.x, t.x),
    y: Math.min(e.y, t.y),
    x2: Math.max(e.x + r, t.x + i),
    y2: Math.max(e.y + n, t.y + a)
  };
  u.x === u.x2 && (u.x2 += 1), u.y === u.y2 && (u.y2 += 1);
  const f = Tc({
    x: (0 - c[0]) / c[2],
    y: (0 - c[1]) / c[2],
    width: o / c[2],
    height: s / c[2]
  }), l = Math.max(0, Math.min(f.x2, u.x2) - Math.max(f.x, u.x)), d = Math.max(0, Math.min(f.y2, u.y2) - Math.max(f.y, u.y));
  return Math.ceil(l * d) > 0;
}
function al(e) {
  var n, i, a, o, s;
  const t = ((n = e == null ? void 0 : e[me]) == null ? void 0 : n.handleBounds) || null, r = t && (e == null ? void 0 : e.width) && (e == null ? void 0 : e.height) && typeof ((i = e == null ? void 0 : e.positionAbsolute) == null ? void 0 : i.x) < "u" && typeof ((a = e == null ? void 0 : e.positionAbsolute) == null ? void 0 : a.y) < "u";
  return [
    {
      x: ((o = e == null ? void 0 : e.positionAbsolute) == null ? void 0 : o.x) || 0,
      y: ((s = e == null ? void 0 : e.positionAbsolute) == null ? void 0 : s.y) || 0,
      width: (e == null ? void 0 : e.width) || 0,
      height: (e == null ? void 0 : e.height) || 0
    },
    t,
    !!r
  ];
}
const j1 = [{ level: 0, isMaxLevel: !0, edges: [] }];
function H1(e, t, r = !1) {
  let n = -1;
  const i = e.reduce((o, s) => {
    var f, l;
    const c = je(s.zIndex);
    let u = c ? s.zIndex : 0;
    if (r) {
      const d = t.get(s.target), h = t.get(s.source), m = s.selected || (d == null ? void 0 : d.selected) || (h == null ? void 0 : h.selected), p = Math.max(((f = h == null ? void 0 : h[me]) == null ? void 0 : f.z) || 0, ((l = d == null ? void 0 : d[me]) == null ? void 0 : l.z) || 0, 1e3);
      u = (c ? s.zIndex : 0) + (m ? p : 0);
    }
    return o[u] ? o[u].push(s) : o[u] = [s], n = u > n ? u : n, o;
  }, {}), a = Object.entries(i).map(([o, s]) => {
    const c = +o;
    return {
      edges: s,
      level: c,
      isMaxLevel: c === n
    };
  });
  return a.length === 0 ? j1 : a;
}
function z1(e, t, r) {
  const n = we(z.useCallback((i) => e ? i.edges.filter((a) => {
    const o = t.get(a.source), s = t.get(a.target);
    return (o == null ? void 0 : o.width) && (o == null ? void 0 : o.height) && (s == null ? void 0 : s.width) && (s == null ? void 0 : s.height) && B1({
      sourcePos: o.positionAbsolute || { x: 0, y: 0 },
      targetPos: s.positionAbsolute || { x: 0, y: 0 },
      sourceWidth: o.width,
      sourceHeight: o.height,
      targetWidth: s.width,
      targetHeight: s.height,
      width: i.width,
      height: i.height,
      transform: i.transform
    });
  }) : i.edges, [e, t]));
  return H1(n, t, r);
}
const G1 = ({ color: e = "none", strokeWidth: t = 1 }) => K.createElement("polyline", { style: {
  stroke: e,
  strokeWidth: t
}, strokeLinecap: "round", strokeLinejoin: "round", fill: "none", points: "-5,-4 0,0 -5,4" }), U1 = ({ color: e = "none", strokeWidth: t = 1 }) => K.createElement("polyline", { style: {
  stroke: e,
  fill: e,
  strokeWidth: t
}, strokeLinecap: "round", strokeLinejoin: "round", points: "-5,-4 0,0 -5,4 -5,-4" }), ol = {
  [Yr.Arrow]: G1,
  [Yr.ArrowClosed]: U1
};
function V1(e) {
  const t = Ce();
  return z.useMemo(() => {
    var i, a;
    return Object.prototype.hasOwnProperty.call(ol, e) ? ol[e] : ((a = (i = t.getState()).onError) == null || a.call(i, "009", Xe.error009(e)), null);
  }, [e]);
}
const Y1 = ({ id: e, type: t, color: r, width: n = 12.5, height: i = 12.5, markerUnits: a = "strokeWidth", strokeWidth: o, orient: s = "auto-start-reverse" }) => {
  const c = V1(t);
  return c ? K.createElement(
    "marker",
    { className: "react-flow__arrowhead", id: e, markerWidth: `${n}`, markerHeight: `${i}`, viewBox: "-10 -10 20 20", markerUnits: a, orient: s, refX: "0", refY: "0" },
    K.createElement(c, { color: r, strokeWidth: o })
  ) : null;
}, K1 = ({ defaultColor: e, rfId: t }) => (r) => {
  const n = [];
  return r.edges.reduce((i, a) => ([a.markerStart, a.markerEnd].forEach((o) => {
    if (o && typeof o == "object") {
      const s = dc(o, t);
      n.includes(s) || (i.push({ id: s, color: o.color || e, ...o }), n.push(s));
    }
  }), i), []).sort((i, a) => i.id.localeCompare(a.id));
}, Gy = ({ defaultColor: e, rfId: t }) => {
  const r = we(
    z.useCallback(K1({ defaultColor: e, rfId: t }), [e, t]),
    // the id includes all marker options, so we just need to look at that part of the marker
    (n, i) => !(n.length !== i.length || n.some((a, o) => a.id !== i[o].id))
  );
  return K.createElement("defs", null, r.map((n) => K.createElement(Y1, { id: n.id, key: n.id, type: n.type, color: n.color, width: n.width, height: n.height, markerUnits: n.markerUnits, strokeWidth: n.strokeWidth, orient: n.orient })));
};
Gy.displayName = "MarkerDefinitions";
var W1 = z.memo(Gy);
const X1 = (e) => ({
  nodesConnectable: e.nodesConnectable,
  edgesFocusable: e.edgesFocusable,
  edgesUpdatable: e.edgesUpdatable,
  elementsSelectable: e.elementsSelectable,
  width: e.width,
  height: e.height,
  connectionMode: e.connectionMode,
  nodeInternals: e.nodeInternals,
  onError: e.onError
}), Uy = ({ defaultMarkerColor: e, onlyRenderVisibleElements: t, elevateEdgesOnSelect: r, rfId: n, edgeTypes: i, noPanClassName: a, onEdgeContextMenu: o, onEdgeMouseEnter: s, onEdgeMouseMove: c, onEdgeMouseLeave: u, onEdgeClick: f, onEdgeDoubleClick: l, onReconnect: d, onReconnectStart: h, onReconnectEnd: m, reconnectRadius: p, children: v, disableKeyboardA11y: y }) => {
  const { edgesFocusable: b, edgesUpdatable: E, elementsSelectable: w, width: x, height: R, connectionMode: T, nodeInternals: N, onError: O } = we(X1, Me), k = z1(t, N, r);
  return x ? K.createElement(
    K.Fragment,
    null,
    k.map(({ level: q, edges: j, isMaxLevel: B }) => K.createElement(
      "svg",
      { key: q, style: { zIndex: q }, width: x, height: R, className: "react-flow__edges react-flow__container" },
      B && K.createElement(W1, { defaultColor: e, rfId: n }),
      K.createElement("g", null, j.map((S) => {
        const [P, M, G] = al(N.get(S.source)), [V, F, g] = al(N.get(S.target));
        if (!G || !g)
          return null;
        let C = S.type || "default";
        i[C] || (O == null || O("011", Xe.error011(C)), C = "default");
        const L = i[C] || i.default, H = T === xt.Strict ? F.target : (F.target ?? []).concat(F.source ?? []), A = il(M.source, S.sourceHandle), I = il(H, S.targetHandle), $ = (A == null ? void 0 : A.position) || re.Bottom, U = (I == null ? void 0 : I.position) || re.Top, Y = !!(S.focusable || b && typeof S.focusable > "u"), J = S.reconnectable || S.updatable, ne = typeof d < "u" && (J || E && typeof J > "u");
        if (!A || !I)
          return O == null || O("008", Xe.error008(A, S)), null;
        const { sourceX: le, sourceY: Ee, targetX: pe, targetY: fe } = F1(P, A, $, V, I, U);
        return K.createElement(L, { key: S.id, id: S.id, className: He([S.className, a]), type: C, data: S.data, selected: !!S.selected, animated: !!S.animated, hidden: !!S.hidden, label: S.label, labelStyle: S.labelStyle, labelShowBg: S.labelShowBg, labelBgStyle: S.labelBgStyle, labelBgPadding: S.labelBgPadding, labelBgBorderRadius: S.labelBgBorderRadius, style: S.style, source: S.source, target: S.target, sourceHandleId: S.sourceHandle, targetHandleId: S.targetHandle, markerEnd: S.markerEnd, markerStart: S.markerStart, sourceX: le, sourceY: Ee, targetX: pe, targetY: fe, sourcePosition: $, targetPosition: U, elementsSelectable: w, onContextMenu: o, onMouseEnter: s, onMouseMove: c, onMouseLeave: u, onClick: f, onEdgeDoubleClick: l, onReconnect: d, onReconnectStart: h, onReconnectEnd: m, reconnectRadius: p, rfId: n, ariaLabel: S.ariaLabel, isFocusable: Y, isReconnectable: ne, pathOptions: "pathOptions" in S ? S.pathOptions : void 0, interactionWidth: S.interactionWidth, disableKeyboardA11y: y });
      }))
    )),
    v
  ) : null;
};
Uy.displayName = "EdgeRenderer";
var Z1 = z.memo(Uy);
const Q1 = (e) => `translate(${e.transform[0]}px,${e.transform[1]}px) scale(${e.transform[2]})`;
function J1({ children: e }) {
  const t = we(Q1);
  return K.createElement("div", { className: "react-flow__viewport react-flow__container", style: { transform: t } }, e);
}
function eS(e) {
  const t = Py(), r = z.useRef(!1);
  z.useEffect(() => {
    !r.current && t.viewportInitialized && e && (setTimeout(() => e(t), 1), r.current = !0);
  }, [e, t.viewportInitialized]);
}
const tS = {
  [re.Left]: re.Right,
  [re.Right]: re.Left,
  [re.Top]: re.Bottom,
  [re.Bottom]: re.Top
}, Vy = ({ nodeId: e, handleType: t, style: r, type: n = pt.Bezier, CustomComponent: i, connectionStatus: a }) => {
  var R, T, N;
  const { fromNode: o, handleId: s, toX: c, toY: u, connectionMode: f } = we(z.useCallback((O) => ({
    fromNode: O.nodeInternals.get(e),
    handleId: O.connectionHandleId,
    toX: (O.connectionPosition.x - O.transform[0]) / O.transform[2],
    toY: (O.connectionPosition.y - O.transform[1]) / O.transform[2],
    connectionMode: O.connectionMode
  }), [e]), Me), l = (R = o == null ? void 0 : o[me]) == null ? void 0 : R.handleBounds;
  let d = l == null ? void 0 : l[t];
  if (f === xt.Loose && (d = d || (l == null ? void 0 : l[t === "source" ? "target" : "source"])), !o || !d)
    return null;
  const h = s ? d.find((O) => O.id === s) : d[0], m = h ? h.x + h.width / 2 : (o.width ?? 0) / 2, p = h ? h.y + h.height / 2 : o.height ?? 0, v = (((T = o.positionAbsolute) == null ? void 0 : T.x) ?? 0) + m, y = (((N = o.positionAbsolute) == null ? void 0 : N.y) ?? 0) + p, b = h == null ? void 0 : h.position, E = b ? tS[b] : null;
  if (!b || !E)
    return null;
  if (i)
    return K.createElement(i, { connectionLineType: n, connectionLineStyle: r, fromNode: o, fromHandle: h, fromX: v, fromY: y, toX: c, toY: u, fromPosition: b, toPosition: E, connectionStatus: a });
  let w = "";
  const x = {
    sourceX: v,
    sourceY: y,
    sourcePosition: b,
    targetX: c,
    targetY: u,
    targetPosition: E
  };
  return n === pt.Bezier ? [w] = py(x) : n === pt.Step ? [w] = lc({
    ...x,
    borderRadius: 0
  }) : n === pt.SmoothStep ? [w] = lc(x) : n === pt.SimpleBezier ? [w] = hy(x) : w = `M${v},${y} ${c},${u}`, K.createElement("path", { d: w, fill: "none", className: "react-flow__connection-path", style: r });
};
Vy.displayName = "ConnectionLine";
const rS = (e) => ({
  nodeId: e.connectionNodeId,
  handleType: e.connectionHandleType,
  nodesConnectable: e.nodesConnectable,
  connectionStatus: e.connectionStatus,
  width: e.width,
  height: e.height
});
function nS({ containerStyle: e, style: t, type: r, component: n }) {
  const { nodeId: i, handleType: a, nodesConnectable: o, width: s, height: c, connectionStatus: u } = we(rS, Me);
  return !(i && a && s && o) ? null : K.createElement(
    "svg",
    { style: e, width: s, height: c, className: "react-flow__edges react-flow__connectionline react-flow__container" },
    K.createElement(
      "g",
      { className: He(["react-flow__connection", u]) },
      K.createElement(Vy, { nodeId: i, handleType: a, style: t, type: r, CustomComponent: n, connectionStatus: u })
    )
  );
}
function sl(e, t) {
  const r = z.useRef(null), n = Ce();
  return z.useMemo(() => {
    var a, o;
    if (process.env.NODE_ENV === "development") {
      const s = Object.keys(e);
      Me(r.current, s) && ((o = (a = n.getState()).onError) == null || o.call(a, "002", Xe.error002())), r.current = s;
    }
    return t(e);
  }, [e]);
}
const Yy = ({ nodeTypes: e, edgeTypes: t, onMove: r, onMoveStart: n, onMoveEnd: i, onInit: a, onNodeClick: o, onEdgeClick: s, onNodeDoubleClick: c, onEdgeDoubleClick: u, onNodeMouseEnter: f, onNodeMouseMove: l, onNodeMouseLeave: d, onNodeContextMenu: h, onSelectionContextMenu: m, onSelectionStart: p, onSelectionEnd: v, connectionLineType: y, connectionLineStyle: b, connectionLineComponent: E, connectionLineContainerStyle: w, selectionKeyCode: x, selectionOnDrag: R, selectionMode: T, multiSelectionKeyCode: N, panActivationKeyCode: O, zoomActivationKeyCode: k, deleteKeyCode: q, onlyRenderVisibleElements: j, elementsSelectable: B, selectNodesOnDrag: S, defaultViewport: P, translateExtent: M, minZoom: G, maxZoom: V, preventScrolling: F, defaultMarkerColor: g, zoomOnScroll: C, zoomOnPinch: L, panOnScroll: H, panOnScrollSpeed: A, panOnScrollMode: I, zoomOnDoubleClick: $, panOnDrag: U, onPaneClick: Y, onPaneMouseEnter: J, onPaneMouseMove: ne, onPaneMouseLeave: le, onPaneScroll: Ee, onPaneContextMenu: pe, onEdgeContextMenu: fe, onEdgeMouseEnter: te, onEdgeMouseMove: de, onEdgeMouseLeave: Z, onReconnect: Q, onReconnectStart: ye, onReconnectEnd: ae, reconnectRadius: Ie, noDragClassName: Te, noWheelClassName: ge, noPanClassName: Ae, elevateEdgesOnSelect: Pe, disableKeyboardA11y: Ue, nodeOrigin: $e, nodeExtent: Oe, rfId: Fe }) => {
  const Ve = sl(e, N1), _e = sl(t, $1);
  return eS(a), K.createElement(
    O1,
    { onPaneClick: Y, onPaneMouseEnter: J, onPaneMouseMove: ne, onPaneMouseLeave: le, onPaneContextMenu: pe, onPaneScroll: Ee, deleteKeyCode: q, selectionKeyCode: x, selectionOnDrag: R, selectionMode: T, onSelectionStart: p, onSelectionEnd: v, multiSelectionKeyCode: N, panActivationKeyCode: O, zoomActivationKeyCode: k, elementsSelectable: B, onMove: r, onMoveStart: n, onMoveEnd: i, zoomOnScroll: C, zoomOnPinch: L, zoomOnDoubleClick: $, panOnScroll: H, panOnScrollSpeed: A, panOnScrollMode: I, panOnDrag: U, defaultViewport: P, translateExtent: M, minZoom: G, maxZoom: V, onSelectionContextMenu: m, preventScrolling: F, noDragClassName: Te, noWheelClassName: ge, noPanClassName: Ae, disableKeyboardA11y: Ue },
    K.createElement(
      J1,
      null,
      K.createElement(
        Z1,
        { edgeTypes: _e, onEdgeClick: s, onEdgeDoubleClick: u, onlyRenderVisibleElements: j, onEdgeContextMenu: fe, onEdgeMouseEnter: te, onEdgeMouseMove: de, onEdgeMouseLeave: Z, onReconnect: Q, onReconnectStart: ye, onReconnectEnd: ae, reconnectRadius: Ie, defaultMarkerColor: g, noPanClassName: Ae, elevateEdgesOnSelect: !!Pe, disableKeyboardA11y: Ue, rfId: Fe },
        K.createElement(nS, { style: b, type: y, component: E, containerStyle: w })
      ),
      K.createElement("div", { className: "react-flow__edgelabel-renderer" }),
      K.createElement(P1, { nodeTypes: Ve, onNodeClick: o, onNodeDoubleClick: c, onNodeMouseEnter: f, onNodeMouseMove: l, onNodeMouseLeave: d, onNodeContextMenu: h, selectNodesOnDrag: S, onlyRenderVisibleElements: j, noPanClassName: Ae, noDragClassName: Te, disableKeyboardA11y: Ue, nodeOrigin: $e, nodeExtent: Oe, rfId: Fe })
    )
  );
};
Yy.displayName = "GraphView";
var iS = z.memo(Yy);
const vc = [
  [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
  [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
], lt = {
  rfId: "1",
  width: 0,
  height: 0,
  transform: [0, 0, 1],
  nodeInternals: /* @__PURE__ */ new Map(),
  edges: [],
  onNodesChange: null,
  onEdgesChange: null,
  hasDefaultNodes: !1,
  hasDefaultEdges: !1,
  d3Zoom: null,
  d3Selection: null,
  d3ZoomHandler: void 0,
  minZoom: 0.5,
  maxZoom: 2,
  translateExtent: vc,
  nodeExtent: vc,
  nodesSelectionActive: !1,
  userSelectionActive: !1,
  userSelectionRect: null,
  connectionNodeId: null,
  connectionHandleId: null,
  connectionHandleType: "source",
  connectionPosition: { x: 0, y: 0 },
  connectionStatus: null,
  connectionMode: xt.Strict,
  domNode: null,
  paneDragging: !1,
  noPanClassName: "nopan",
  nodeOrigin: [0, 0],
  nodeDragThreshold: 0,
  snapGrid: [15, 15],
  snapToGrid: !1,
  nodesDraggable: !0,
  nodesConnectable: !0,
  nodesFocusable: !0,
  edgesFocusable: !0,
  edgesUpdatable: !0,
  elementsSelectable: !0,
  elevateNodesOnSelect: !0,
  fitViewOnInit: !1,
  fitViewOnInitDone: !1,
  fitViewOnInitOptions: void 0,
  onSelectionChange: [],
  multiSelectionActive: !1,
  connectionStartHandle: null,
  connectionEndHandle: null,
  connectionClickStartHandle: null,
  connectOnClick: !0,
  ariaLiveMessage: "",
  autoPanOnConnect: !0,
  autoPanOnNodeDrag: !0,
  connectionRadius: 20,
  onError: cy,
  isValidConnection: void 0
}, aS = () => H_((e, t) => ({
  ...lt,
  setNodes: (r) => {
    const { nodeInternals: n, nodeOrigin: i, elevateNodesOnSelect: a } = t();
    e({ nodeInternals: Mn(r, n, i, a) });
  },
  getNodes: () => Array.from(t().nodeInternals.values()),
  setEdges: (r) => {
    const { defaultEdgeOptions: n = {} } = t();
    e({ edges: r.map((i) => ({ ...n, ...i })) });
  },
  setDefaultNodesAndEdges: (r, n) => {
    const i = typeof r < "u", a = typeof n < "u", o = i ? Mn(r, /* @__PURE__ */ new Map(), t().nodeOrigin, t().elevateNodesOnSelect) : /* @__PURE__ */ new Map();
    e({ nodeInternals: o, edges: a ? n : [], hasDefaultNodes: i, hasDefaultEdges: a });
  },
  updateNodeDimensions: (r) => {
    const { onNodesChange: n, nodeInternals: i, fitViewOnInit: a, fitViewOnInitDone: o, fitViewOnInitOptions: s, domNode: c, nodeOrigin: u } = t(), f = c == null ? void 0 : c.querySelector(".react-flow__viewport");
    if (!f)
      return;
    const l = window.getComputedStyle(f), { m22: d } = new window.DOMMatrixReadOnly(l.transform), h = r.reduce((p, v) => {
      const y = i.get(v.id);
      if (y != null && y.hidden)
        i.set(y.id, {
          ...y,
          [me]: {
            ...y[me],
            // we need to reset the handle bounds when the node is hidden
            // in order to force a new observation when the node is shown again
            handleBounds: void 0
          }
        });
      else if (y) {
        const b = xc(v.nodeElement);
        !!(b.width && b.height && (y.width !== b.width || y.height !== b.height || v.forceUpdate)) && (i.set(y.id, {
          ...y,
          [me]: {
            ...y[me],
            handleBounds: {
              source: el(".source", v.nodeElement, d, u),
              target: el(".target", v.nodeElement, d, u)
            }
          },
          ...b
        }), p.push({
          id: y.id,
          type: "dimensions",
          dimensions: b
        }));
      }
      return p;
    }, []);
    Iy(i, u);
    const m = o || a && !o && My(t, { initial: !0, ...s });
    e({ nodeInternals: new Map(i), fitViewOnInitDone: m }), (h == null ? void 0 : h.length) > 0 && (n == null || n(h));
  },
  updateNodePositions: (r, n = !0, i = !1) => {
    const { triggerNodeChanges: a } = t(), o = r.map((s) => {
      const c = {
        id: s.id,
        type: "position",
        dragging: i
      };
      return n && (c.positionAbsolute = s.positionAbsolute, c.position = s.position), c;
    });
    a(o);
  },
  triggerNodeChanges: (r) => {
    const { onNodesChange: n, nodeInternals: i, hasDefaultNodes: a, nodeOrigin: o, getNodes: s, elevateNodesOnSelect: c } = t();
    if (r != null && r.length) {
      if (a) {
        const u = Dy(r, s()), f = Mn(u, i, o, c);
        e({ nodeInternals: f });
      }
      n == null || n(r);
    }
  },
  addSelectedNodes: (r) => {
    const { multiSelectionActive: n, edges: i, getNodes: a } = t();
    let o, s = null;
    n ? o = r.map((c) => ht(c, !0)) : (o = Pt(a(), r), s = Pt(i, [])), Pr({
      changedNodes: o,
      changedEdges: s,
      get: t,
      set: e
    });
  },
  addSelectedEdges: (r) => {
    const { multiSelectionActive: n, edges: i, getNodes: a } = t();
    let o, s = null;
    n ? o = r.map((c) => ht(c, !0)) : (o = Pt(i, r), s = Pt(a(), [])), Pr({
      changedNodes: s,
      changedEdges: o,
      get: t,
      set: e
    });
  },
  unselectNodesAndEdges: ({ nodes: r, edges: n } = {}) => {
    const { edges: i, getNodes: a } = t(), o = r || a(), s = n || i, c = o.map((f) => (f.selected = !1, ht(f.id, !1))), u = s.map((f) => ht(f.id, !1));
    Pr({
      changedNodes: c,
      changedEdges: u,
      get: t,
      set: e
    });
  },
  setMinZoom: (r) => {
    const { d3Zoom: n, maxZoom: i } = t();
    n == null || n.scaleExtent([r, i]), e({ minZoom: r });
  },
  setMaxZoom: (r) => {
    const { d3Zoom: n, minZoom: i } = t();
    n == null || n.scaleExtent([i, r]), e({ maxZoom: r });
  },
  setTranslateExtent: (r) => {
    var n;
    (n = t().d3Zoom) == null || n.translateExtent(r), e({ translateExtent: r });
  },
  resetSelectedElements: () => {
    const { edges: r, getNodes: n } = t(), a = n().filter((s) => s.selected).map((s) => ht(s.id, !1)), o = r.filter((s) => s.selected).map((s) => ht(s.id, !1));
    Pr({
      changedNodes: a,
      changedEdges: o,
      get: t,
      set: e
    });
  },
  setNodeExtent: (r) => {
    const { nodeInternals: n } = t();
    n.forEach((i) => {
      i.positionAbsolute = Rc(i.position, r);
    }), e({
      nodeExtent: r,
      nodeInternals: new Map(n)
    });
  },
  panBy: (r) => {
    const { transform: n, width: i, height: a, d3Zoom: o, d3Selection: s, translateExtent: c } = t();
    if (!o || !s || !r.x && !r.y)
      return !1;
    const u = gt.translate(n[0] + r.x, n[1] + r.y).scale(n[2]), f = [
      [0, 0],
      [i, a]
    ], l = o == null ? void 0 : o.constrain()(u, f, c);
    return o.transform(s, l), n[0] !== l.x || n[1] !== l.y || n[2] !== l.k;
  },
  cancelConnection: () => e({
    connectionNodeId: lt.connectionNodeId,
    connectionHandleId: lt.connectionHandleId,
    connectionHandleType: lt.connectionHandleType,
    connectionStatus: lt.connectionStatus,
    connectionStartHandle: lt.connectionStartHandle,
    connectionEndHandle: lt.connectionEndHandle
  }),
  reset: () => e({ ...lt })
}), Object.is), Ky = ({ children: e }) => {
  const t = z.useRef(null);
  return t.current || (t.current = aS()), K.createElement(xE, { value: t.current }, e);
};
Ky.displayName = "ReactFlowProvider";
const Wy = ({ children: e }) => z.useContext(tn) ? K.createElement(K.Fragment, null, e) : K.createElement(Ky, null, e);
Wy.displayName = "ReactFlowWrapper";
const oS = {
  input: Ry,
  default: pc,
  output: Ay,
  group: Mc
}, sS = {
  default: Kr,
  straight: Oc,
  step: Cc,
  smoothstep: rn,
  simplebezier: Ac
}, uS = [0, 0], cS = [15, 15], fS = { x: 0, y: 0, zoom: 1 }, lS = {
  width: "100%",
  height: "100%",
  overflow: "hidden",
  position: "relative",
  zIndex: 0
}, Xy = z.forwardRef(({ nodes: e, edges: t, defaultNodes: r, defaultEdges: n, className: i, nodeTypes: a = oS, edgeTypes: o = sS, onNodeClick: s, onEdgeClick: c, onInit: u, onMove: f, onMoveStart: l, onMoveEnd: d, onConnect: h, onConnectStart: m, onConnectEnd: p, onClickConnectStart: v, onClickConnectEnd: y, onNodeMouseEnter: b, onNodeMouseMove: E, onNodeMouseLeave: w, onNodeContextMenu: x, onNodeDoubleClick: R, onNodeDragStart: T, onNodeDrag: N, onNodeDragStop: O, onNodesDelete: k, onEdgesDelete: q, onSelectionChange: j, onSelectionDragStart: B, onSelectionDrag: S, onSelectionDragStop: P, onSelectionContextMenu: M, onSelectionStart: G, onSelectionEnd: V, connectionMode: F = xt.Strict, connectionLineType: g = pt.Bezier, connectionLineStyle: C, connectionLineComponent: L, connectionLineContainerStyle: H, deleteKeyCode: A = "Backspace", selectionKeyCode: I = "Shift", selectionOnDrag: $ = !1, selectionMode: U = lr.Full, panActivationKeyCode: Y = "Space", multiSelectionKeyCode: J = Vr() ? "Meta" : "Control", zoomActivationKeyCode: ne = Vr() ? "Meta" : "Control", snapToGrid: le = !1, snapGrid: Ee = cS, onlyRenderVisibleElements: pe = !1, selectNodesOnDrag: fe = !0, nodesDraggable: te, nodesConnectable: de, nodesFocusable: Z, nodeOrigin: Q = uS, edgesFocusable: ye, edgesUpdatable: ae, elementsSelectable: Ie, defaultViewport: Te = fS, minZoom: ge = 0.5, maxZoom: Ae = 2, translateExtent: Pe = vc, preventScrolling: Ue = !0, nodeExtent: $e, defaultMarkerColor: Oe = "#b1b1b7", zoomOnScroll: Fe = !0, zoomOnPinch: Ve = !0, panOnScroll: _e = !1, panOnScrollSpeed: Re = 0.5, panOnScrollMode: be = wt.Free, zoomOnDoubleClick: Se = !0, panOnDrag: Ye = !0, onPaneClick: Be, onPaneMouseEnter: _, onPaneMouseMove: D, onPaneMouseLeave: W, onPaneScroll: X, onPaneContextMenu: ee, children: se, onEdgeContextMenu: ie, onEdgeDoubleClick: he, onEdgeMouseEnter: ue, onEdgeMouseMove: et, onEdgeMouseLeave: ft, onEdgeUpdate: wn, onEdgeUpdateStart: En, onEdgeUpdateEnd: Qm, onReconnect: Jm, onReconnectStart: e_, onReconnectEnd: t_, reconnectRadius: r_ = 10, edgeUpdaterRadius: n_ = 10, onNodesChange: i_, onEdgesChange: a_, noDragClassName: o_ = "nodrag", noWheelClassName: s_ = "nowheel", noPanClassName: Jc = "nopan", fitView: u_ = !1, fitViewOptions: c_, connectOnClick: f_ = !0, attributionPosition: l_, proOptions: d_, defaultEdgeOptions: h_, elevateNodesOnSelect: p_ = !0, elevateEdgesOnSelect: g_ = !1, disableKeyboardA11y: ef = !1, autoPanOnConnect: v_ = !0, autoPanOnNodeDrag: y_ = !0, connectionRadius: m_ = 20, isValidConnection: __, onError: b_, style: w_, id: tf, nodeDragThreshold: E_, ...S_ }, x_) => {
  const Sn = tf || "1";
  return K.createElement(
    "div",
    { ...S_, style: { ...w_, ...lS }, ref: x_, className: He(["react-flow", i]), "data-testid": "rf__wrapper", id: tf },
    K.createElement(
      Wy,
      null,
      K.createElement(iS, { onInit: u, onMove: f, onMoveStart: l, onMoveEnd: d, onNodeClick: s, onEdgeClick: c, onNodeMouseEnter: b, onNodeMouseMove: E, onNodeMouseLeave: w, onNodeContextMenu: x, onNodeDoubleClick: R, nodeTypes: a, edgeTypes: o, connectionLineType: g, connectionLineStyle: C, connectionLineComponent: L, connectionLineContainerStyle: H, selectionKeyCode: I, selectionOnDrag: $, selectionMode: U, deleteKeyCode: A, multiSelectionKeyCode: J, panActivationKeyCode: Y, zoomActivationKeyCode: ne, onlyRenderVisibleElements: pe, selectNodesOnDrag: fe, defaultViewport: Te, translateExtent: Pe, minZoom: ge, maxZoom: Ae, preventScrolling: Ue, zoomOnScroll: Fe, zoomOnPinch: Ve, zoomOnDoubleClick: Se, panOnScroll: _e, panOnScrollSpeed: Re, panOnScrollMode: be, panOnDrag: Ye, onPaneClick: Be, onPaneMouseEnter: _, onPaneMouseMove: D, onPaneMouseLeave: W, onPaneScroll: X, onPaneContextMenu: ee, onSelectionContextMenu: M, onSelectionStart: G, onSelectionEnd: V, onEdgeContextMenu: ie, onEdgeDoubleClick: he, onEdgeMouseEnter: ue, onEdgeMouseMove: et, onEdgeMouseLeave: ft, onReconnect: Jm ?? wn, onReconnectStart: e_ ?? En, onReconnectEnd: t_ ?? Qm, reconnectRadius: r_ ?? n_, defaultMarkerColor: Oe, noDragClassName: o_, noWheelClassName: s_, noPanClassName: Jc, elevateEdgesOnSelect: g_, rfId: Sn, disableKeyboardA11y: ef, nodeOrigin: Q, nodeExtent: $e }),
      K.createElement(t1, { nodes: e, edges: t, defaultNodes: r, defaultEdges: n, onConnect: h, onConnectStart: m, onConnectEnd: p, onClickConnectStart: v, onClickConnectEnd: y, nodesDraggable: te, nodesConnectable: de, nodesFocusable: Z, edgesFocusable: ye, edgesUpdatable: ae, elementsSelectable: Ie, elevateNodesOnSelect: p_, minZoom: ge, maxZoom: Ae, nodeExtent: $e, onNodesChange: i_, onEdgesChange: a_, snapToGrid: le, snapGrid: Ee, connectionMode: F, translateExtent: Pe, connectOnClick: f_, defaultEdgeOptions: h_, fitView: u_, fitViewOptions: c_, onNodesDelete: k, onEdgesDelete: q, onNodeDragStart: T, onNodeDrag: N, onNodeDragStop: O, onSelectionDrag: S, onSelectionDragStart: B, onSelectionDragStop: P, noPanClassName: Jc, nodeOrigin: Q, rfId: Sn, autoPanOnConnect: v_, autoPanOnNodeDrag: y_, onError: b_, connectionRadius: m_, isValidConnection: __, nodeDragThreshold: E_ }),
      K.createElement(JE, { onSelectionChange: j }),
      se,
      K.createElement(AE, { proOptions: d_, position: l_ }),
      K.createElement(o1, { rfId: Sn, disableKeyboardA11y: ef })
    )
  );
});
Xy.displayName = "ReactFlow";
function Zy(e) {
  return (t) => {
    const [r, n] = z.useState(t), i = z.useCallback((a) => n((o) => e(a, o)), []);
    return [r, n, i];
  };
}
const dS = Zy(Dy), hS = Zy(b1);
function kc(e) {
  throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var Ln, ul;
function pS() {
  if (ul) return Ln;
  ul = 1;
  function e() {
    this.__data__ = [], this.size = 0;
  }
  return Ln = e, Ln;
}
var $n, cl;
function Ht() {
  if (cl) return $n;
  cl = 1;
  function e(t, r) {
    return t === r || t !== t && r !== r;
  }
  return $n = e, $n;
}
var Fn, fl;
function nn() {
  if (fl) return Fn;
  fl = 1;
  var e = Ht();
  function t(r, n) {
    for (var i = r.length; i--; )
      if (e(r[i][0], n))
        return i;
    return -1;
  }
  return Fn = t, Fn;
}
var Bn, ll;
function gS() {
  if (ll) return Bn;
  ll = 1;
  var e = nn(), t = Array.prototype, r = t.splice;
  function n(i) {
    var a = this.__data__, o = e(a, i);
    if (o < 0)
      return !1;
    var s = a.length - 1;
    return o == s ? a.pop() : r.call(a, o, 1), --this.size, !0;
  }
  return Bn = n, Bn;
}
var jn, dl;
function vS() {
  if (dl) return jn;
  dl = 1;
  var e = nn();
  function t(r) {
    var n = this.__data__, i = e(n, r);
    return i < 0 ? void 0 : n[i][1];
  }
  return jn = t, jn;
}
var Hn, hl;
function yS() {
  if (hl) return Hn;
  hl = 1;
  var e = nn();
  function t(r) {
    return e(this.__data__, r) > -1;
  }
  return Hn = t, Hn;
}
var zn, pl;
function mS() {
  if (pl) return zn;
  pl = 1;
  var e = nn();
  function t(r, n) {
    var i = this.__data__, a = e(i, r);
    return a < 0 ? (++this.size, i.push([r, n])) : i[a][1] = n, this;
  }
  return zn = t, zn;
}
var Gn, gl;
function an() {
  if (gl) return Gn;
  gl = 1;
  var e = pS(), t = gS(), r = vS(), n = yS(), i = mS();
  function a(o) {
    var s = -1, c = o == null ? 0 : o.length;
    for (this.clear(); ++s < c; ) {
      var u = o[s];
      this.set(u[0], u[1]);
    }
  }
  return a.prototype.clear = e, a.prototype.delete = t, a.prototype.get = r, a.prototype.has = n, a.prototype.set = i, Gn = a, Gn;
}
var Un, vl;
function _S() {
  if (vl) return Un;
  vl = 1;
  var e = an();
  function t() {
    this.__data__ = new e(), this.size = 0;
  }
  return Un = t, Un;
}
var Vn, yl;
function bS() {
  if (yl) return Vn;
  yl = 1;
  function e(t) {
    var r = this.__data__, n = r.delete(t);
    return this.size = r.size, n;
  }
  return Vn = e, Vn;
}
var Yn, ml;
function wS() {
  if (ml) return Yn;
  ml = 1;
  function e(t) {
    return this.__data__.get(t);
  }
  return Yn = e, Yn;
}
var Kn, _l;
function ES() {
  if (_l) return Kn;
  _l = 1;
  function e(t) {
    return this.__data__.has(t);
  }
  return Kn = e, Kn;
}
var Wn, bl;
function Qy() {
  if (bl) return Wn;
  bl = 1;
  var e = typeof wr == "object" && wr && wr.Object === Object && wr;
  return Wn = e, Wn;
}
var Xn, wl;
function Je() {
  if (wl) return Xn;
  wl = 1;
  var e = Qy(), t = typeof self == "object" && self && self.Object === Object && self, r = e || t || Function("return this")();
  return Xn = r, Xn;
}
var Zn, El;
function zt() {
  if (El) return Zn;
  El = 1;
  var e = Je(), t = e.Symbol;
  return Zn = t, Zn;
}
var Qn, Sl;
function SS() {
  if (Sl) return Qn;
  Sl = 1;
  var e = zt(), t = Object.prototype, r = t.hasOwnProperty, n = t.toString, i = e ? e.toStringTag : void 0;
  function a(o) {
    var s = r.call(o, i), c = o[i];
    try {
      o[i] = void 0;
      var u = !0;
    } catch {
    }
    var f = n.call(o);
    return u && (s ? o[i] = c : delete o[i]), f;
  }
  return Qn = a, Qn;
}
var Jn, xl;
function xS() {
  if (xl) return Jn;
  xl = 1;
  var e = Object.prototype, t = e.toString;
  function r(n) {
    return t.call(n);
  }
  return Jn = r, Jn;
}
var ei, Rl;
function Rt() {
  if (Rl) return ei;
  Rl = 1;
  var e = zt(), t = SS(), r = xS(), n = "[object Null]", i = "[object Undefined]", a = e ? e.toStringTag : void 0;
  function o(s) {
    return s == null ? s === void 0 ? i : n : a && a in Object(s) ? t(s) : r(s);
  }
  return ei = o, ei;
}
var ti, Tl;
function ze() {
  if (Tl) return ti;
  Tl = 1;
  function e(t) {
    var r = typeof t;
    return t != null && (r == "object" || r == "function");
  }
  return ti = e, ti;
}
var ri, Al;
function vr() {
  if (Al) return ri;
  Al = 1;
  var e = Rt(), t = ze(), r = "[object AsyncFunction]", n = "[object Function]", i = "[object GeneratorFunction]", a = "[object Proxy]";
  function o(s) {
    if (!t(s))
      return !1;
    var c = e(s);
    return c == n || c == i || c == r || c == a;
  }
  return ri = o, ri;
}
var ni, Cl;
function RS() {
  if (Cl) return ni;
  Cl = 1;
  var e = Je(), t = e["__core-js_shared__"];
  return ni = t, ni;
}
var ii, Ol;
function TS() {
  if (Ol) return ii;
  Ol = 1;
  var e = RS(), t = function() {
    var n = /[^.]+$/.exec(e && e.keys && e.keys.IE_PROTO || "");
    return n ? "Symbol(src)_1." + n : "";
  }();
  function r(n) {
    return !!t && t in n;
  }
  return ii = r, ii;
}
var ai, ql;
function Jy() {
  if (ql) return ai;
  ql = 1;
  var e = Function.prototype, t = e.toString;
  function r(n) {
    if (n != null) {
      try {
        return t.call(n);
      } catch {
      }
      try {
        return n + "";
      } catch {
      }
    }
    return "";
  }
  return ai = r, ai;
}
var oi, Nl;
function AS() {
  if (Nl) return oi;
  Nl = 1;
  var e = vr(), t = TS(), r = ze(), n = Jy(), i = /[\\^$.*+?()[\]{}|]/g, a = /^\[object .+?Constructor\]$/, o = Function.prototype, s = Object.prototype, c = o.toString, u = s.hasOwnProperty, f = RegExp(
    "^" + c.call(u).replace(i, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  );
  function l(d) {
    if (!r(d) || t(d))
      return !1;
    var h = e(d) ? f : a;
    return h.test(n(d));
  }
  return oi = l, oi;
}
var si, Il;
function CS() {
  if (Il) return si;
  Il = 1;
  function e(t, r) {
    return t == null ? void 0 : t[r];
  }
  return si = e, si;
}
var ui, Ml;
function Tt() {
  if (Ml) return ui;
  Ml = 1;
  var e = AS(), t = CS();
  function r(n, i) {
    var a = t(n, i);
    return e(a) ? a : void 0;
  }
  return ui = r, ui;
}
var ci, Pl;
function Dc() {
  if (Pl) return ci;
  Pl = 1;
  var e = Tt(), t = Je(), r = e(t, "Map");
  return ci = r, ci;
}
var fi, kl;
function on() {
  if (kl) return fi;
  kl = 1;
  var e = Tt(), t = e(Object, "create");
  return fi = t, fi;
}
var li, Dl;
function OS() {
  if (Dl) return li;
  Dl = 1;
  var e = on();
  function t() {
    this.__data__ = e ? e(null) : {}, this.size = 0;
  }
  return li = t, li;
}
var di, Ll;
function qS() {
  if (Ll) return di;
  Ll = 1;
  function e(t) {
    var r = this.has(t) && delete this.__data__[t];
    return this.size -= r ? 1 : 0, r;
  }
  return di = e, di;
}
var hi, $l;
function NS() {
  if ($l) return hi;
  $l = 1;
  var e = on(), t = "__lodash_hash_undefined__", r = Object.prototype, n = r.hasOwnProperty;
  function i(a) {
    var o = this.__data__;
    if (e) {
      var s = o[a];
      return s === t ? void 0 : s;
    }
    return n.call(o, a) ? o[a] : void 0;
  }
  return hi = i, hi;
}
var pi, Fl;
function IS() {
  if (Fl) return pi;
  Fl = 1;
  var e = on(), t = Object.prototype, r = t.hasOwnProperty;
  function n(i) {
    var a = this.__data__;
    return e ? a[i] !== void 0 : r.call(a, i);
  }
  return pi = n, pi;
}
var gi, Bl;
function MS() {
  if (Bl) return gi;
  Bl = 1;
  var e = on(), t = "__lodash_hash_undefined__";
  function r(n, i) {
    var a = this.__data__;
    return this.size += this.has(n) ? 0 : 1, a[n] = e && i === void 0 ? t : i, this;
  }
  return gi = r, gi;
}
var vi, jl;
function PS() {
  if (jl) return vi;
  jl = 1;
  var e = OS(), t = qS(), r = NS(), n = IS(), i = MS();
  function a(o) {
    var s = -1, c = o == null ? 0 : o.length;
    for (this.clear(); ++s < c; ) {
      var u = o[s];
      this.set(u[0], u[1]);
    }
  }
  return a.prototype.clear = e, a.prototype.delete = t, a.prototype.get = r, a.prototype.has = n, a.prototype.set = i, vi = a, vi;
}
var yi, Hl;
function kS() {
  if (Hl) return yi;
  Hl = 1;
  var e = PS(), t = an(), r = Dc();
  function n() {
    this.size = 0, this.__data__ = {
      hash: new e(),
      map: new (r || t)(),
      string: new e()
    };
  }
  return yi = n, yi;
}
var mi, zl;
function DS() {
  if (zl) return mi;
  zl = 1;
  function e(t) {
    var r = typeof t;
    return r == "string" || r == "number" || r == "symbol" || r == "boolean" ? t !== "__proto__" : t === null;
  }
  return mi = e, mi;
}
var _i, Gl;
function sn() {
  if (Gl) return _i;
  Gl = 1;
  var e = DS();
  function t(r, n) {
    var i = r.__data__;
    return e(n) ? i[typeof n == "string" ? "string" : "hash"] : i.map;
  }
  return _i = t, _i;
}
var bi, Ul;
function LS() {
  if (Ul) return bi;
  Ul = 1;
  var e = sn();
  function t(r) {
    var n = e(this, r).delete(r);
    return this.size -= n ? 1 : 0, n;
  }
  return bi = t, bi;
}
var wi, Vl;
function $S() {
  if (Vl) return wi;
  Vl = 1;
  var e = sn();
  function t(r) {
    return e(this, r).get(r);
  }
  return wi = t, wi;
}
var Ei, Yl;
function FS() {
  if (Yl) return Ei;
  Yl = 1;
  var e = sn();
  function t(r) {
    return e(this, r).has(r);
  }
  return Ei = t, Ei;
}
var Si, Kl;
function BS() {
  if (Kl) return Si;
  Kl = 1;
  var e = sn();
  function t(r, n) {
    var i = e(this, r), a = i.size;
    return i.set(r, n), this.size += i.size == a ? 0 : 1, this;
  }
  return Si = t, Si;
}
var xi, Wl;
function Lc() {
  if (Wl) return xi;
  Wl = 1;
  var e = kS(), t = LS(), r = $S(), n = FS(), i = BS();
  function a(o) {
    var s = -1, c = o == null ? 0 : o.length;
    for (this.clear(); ++s < c; ) {
      var u = o[s];
      this.set(u[0], u[1]);
    }
  }
  return a.prototype.clear = e, a.prototype.delete = t, a.prototype.get = r, a.prototype.has = n, a.prototype.set = i, xi = a, xi;
}
var Ri, Xl;
function jS() {
  if (Xl) return Ri;
  Xl = 1;
  var e = an(), t = Dc(), r = Lc(), n = 200;
  function i(a, o) {
    var s = this.__data__;
    if (s instanceof e) {
      var c = s.__data__;
      if (!t || c.length < n - 1)
        return c.push([a, o]), this.size = ++s.size, this;
      s = this.__data__ = new r(c);
    }
    return s.set(a, o), this.size = s.size, this;
  }
  return Ri = i, Ri;
}
var Ti, Zl;
function un() {
  if (Zl) return Ti;
  Zl = 1;
  var e = an(), t = _S(), r = bS(), n = wS(), i = ES(), a = jS();
  function o(s) {
    var c = this.__data__ = new e(s);
    this.size = c.size;
  }
  return o.prototype.clear = t, o.prototype.delete = r, o.prototype.get = n, o.prototype.has = i, o.prototype.set = a, Ti = o, Ti;
}
var Ai, Ql;
function $c() {
  if (Ql) return Ai;
  Ql = 1;
  function e(t, r) {
    for (var n = -1, i = t == null ? 0 : t.length; ++n < i && r(t[n], n, t) !== !1; )
      ;
    return t;
  }
  return Ai = e, Ai;
}
var Ci, Jl;
function em() {
  if (Jl) return Ci;
  Jl = 1;
  var e = Tt(), t = function() {
    try {
      var r = e(Object, "defineProperty");
      return r({}, "", {}), r;
    } catch {
    }
  }();
  return Ci = t, Ci;
}
var Oi, ed;
function cn() {
  if (ed) return Oi;
  ed = 1;
  var e = em();
  function t(r, n, i) {
    n == "__proto__" && e ? e(r, n, {
      configurable: !0,
      enumerable: !0,
      value: i,
      writable: !0
    }) : r[n] = i;
  }
  return Oi = t, Oi;
}
var qi, td;
function fn() {
  if (td) return qi;
  td = 1;
  var e = cn(), t = Ht(), r = Object.prototype, n = r.hasOwnProperty;
  function i(a, o, s) {
    var c = a[o];
    (!(n.call(a, o) && t(c, s)) || s === void 0 && !(o in a)) && e(a, o, s);
  }
  return qi = i, qi;
}
var Ni, rd;
function yr() {
  if (rd) return Ni;
  rd = 1;
  var e = fn(), t = cn();
  function r(n, i, a, o) {
    var s = !a;
    a || (a = {});
    for (var c = -1, u = i.length; ++c < u; ) {
      var f = i[c], l = o ? o(a[f], n[f], f, a, n) : void 0;
      l === void 0 && (l = n[f]), s ? t(a, f, l) : e(a, f, l);
    }
    return a;
  }
  return Ni = r, Ni;
}
var Ii, nd;
function HS() {
  if (nd) return Ii;
  nd = 1;
  function e(t, r) {
    for (var n = -1, i = Array(t); ++n < t; )
      i[n] = r(n);
    return i;
  }
  return Ii = e, Ii;
}
var Mi, id;
function it() {
  if (id) return Mi;
  id = 1;
  function e(t) {
    return t != null && typeof t == "object";
  }
  return Mi = e, Mi;
}
var Pi, ad;
function zS() {
  if (ad) return Pi;
  ad = 1;
  var e = Rt(), t = it(), r = "[object Arguments]";
  function n(i) {
    return t(i) && e(i) == r;
  }
  return Pi = n, Pi;
}
var ki, od;
function mr() {
  if (od) return ki;
  od = 1;
  var e = zS(), t = it(), r = Object.prototype, n = r.hasOwnProperty, i = r.propertyIsEnumerable, a = e(/* @__PURE__ */ function() {
    return arguments;
  }()) ? e : function(o) {
    return t(o) && n.call(o, "callee") && !i.call(o, "callee");
  };
  return ki = a, ki;
}
var Di, sd;
function xe() {
  if (sd) return Di;
  sd = 1;
  var e = Array.isArray;
  return Di = e, Di;
}
var nr = { exports: {} }, Li, ud;
function GS() {
  if (ud) return Li;
  ud = 1;
  function e() {
    return !1;
  }
  return Li = e, Li;
}
nr.exports;
var cd;
function Gt() {
  return cd || (cd = 1, function(e, t) {
    var r = Je(), n = GS(), i = t && !t.nodeType && t, a = i && !0 && e && !e.nodeType && e, o = a && a.exports === i, s = o ? r.Buffer : void 0, c = s ? s.isBuffer : void 0, u = c || n;
    e.exports = u;
  }(nr, nr.exports)), nr.exports;
}
var $i, fd;
function ln() {
  if (fd) return $i;
  fd = 1;
  var e = 9007199254740991, t = /^(?:0|[1-9]\d*)$/;
  function r(n, i) {
    var a = typeof n;
    return i = i ?? e, !!i && (a == "number" || a != "symbol" && t.test(n)) && n > -1 && n % 1 == 0 && n < i;
  }
  return $i = r, $i;
}
var Fi, ld;
function Fc() {
  if (ld) return Fi;
  ld = 1;
  var e = 9007199254740991;
  function t(r) {
    return typeof r == "number" && r > -1 && r % 1 == 0 && r <= e;
  }
  return Fi = t, Fi;
}
var Bi, dd;
function US() {
  if (dd) return Bi;
  dd = 1;
  var e = Rt(), t = Fc(), r = it(), n = "[object Arguments]", i = "[object Array]", a = "[object Boolean]", o = "[object Date]", s = "[object Error]", c = "[object Function]", u = "[object Map]", f = "[object Number]", l = "[object Object]", d = "[object RegExp]", h = "[object Set]", m = "[object String]", p = "[object WeakMap]", v = "[object ArrayBuffer]", y = "[object DataView]", b = "[object Float32Array]", E = "[object Float64Array]", w = "[object Int8Array]", x = "[object Int16Array]", R = "[object Int32Array]", T = "[object Uint8Array]", N = "[object Uint8ClampedArray]", O = "[object Uint16Array]", k = "[object Uint32Array]", q = {};
  q[b] = q[E] = q[w] = q[x] = q[R] = q[T] = q[N] = q[O] = q[k] = !0, q[n] = q[i] = q[v] = q[a] = q[y] = q[o] = q[s] = q[c] = q[u] = q[f] = q[l] = q[d] = q[h] = q[m] = q[p] = !1;
  function j(B) {
    return r(B) && t(B.length) && !!q[e(B)];
  }
  return Bi = j, Bi;
}
var ji, hd;
function dn() {
  if (hd) return ji;
  hd = 1;
  function e(t) {
    return function(r) {
      return t(r);
    };
  }
  return ji = e, ji;
}
var ir = { exports: {} };
ir.exports;
var pd;
function Bc() {
  return pd || (pd = 1, function(e, t) {
    var r = Qy(), n = t && !t.nodeType && t, i = n && !0 && e && !e.nodeType && e, a = i && i.exports === n, o = a && r.process, s = function() {
      try {
        var c = i && i.require && i.require("util").types;
        return c || o && o.binding && o.binding("util");
      } catch {
      }
    }();
    e.exports = s;
  }(ir, ir.exports)), ir.exports;
}
var Hi, gd;
function _r() {
  if (gd) return Hi;
  gd = 1;
  var e = US(), t = dn(), r = Bc(), n = r && r.isTypedArray, i = n ? t(n) : e;
  return Hi = i, Hi;
}
var zi, vd;
function tm() {
  if (vd) return zi;
  vd = 1;
  var e = HS(), t = mr(), r = xe(), n = Gt(), i = ln(), a = _r(), o = Object.prototype, s = o.hasOwnProperty;
  function c(u, f) {
    var l = r(u), d = !l && t(u), h = !l && !d && n(u), m = !l && !d && !h && a(u), p = l || d || h || m, v = p ? e(u.length, String) : [], y = v.length;
    for (var b in u)
      (f || s.call(u, b)) && !(p && // Safari 9 has enumerable `arguments.length` in strict mode.
      (b == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      h && (b == "offset" || b == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      m && (b == "buffer" || b == "byteLength" || b == "byteOffset") || // Skip index properties.
      i(b, y))) && v.push(b);
    return v;
  }
  return zi = c, zi;
}
var Gi, yd;
function hn() {
  if (yd) return Gi;
  yd = 1;
  var e = Object.prototype;
  function t(r) {
    var n = r && r.constructor, i = typeof n == "function" && n.prototype || e;
    return r === i;
  }
  return Gi = t, Gi;
}
var Ui, md;
function rm() {
  if (md) return Ui;
  md = 1;
  function e(t, r) {
    return function(n) {
      return t(r(n));
    };
  }
  return Ui = e, Ui;
}
var Vi, _d;
function VS() {
  if (_d) return Vi;
  _d = 1;
  var e = rm(), t = e(Object.keys, Object);
  return Vi = t, Vi;
}
var Yi, bd;
function jc() {
  if (bd) return Yi;
  bd = 1;
  var e = hn(), t = VS(), r = Object.prototype, n = r.hasOwnProperty;
  function i(a) {
    if (!e(a))
      return t(a);
    var o = [];
    for (var s in Object(a))
      n.call(a, s) && s != "constructor" && o.push(s);
    return o;
  }
  return Yi = i, Yi;
}
var Ki, wd;
function ut() {
  if (wd) return Ki;
  wd = 1;
  var e = vr(), t = Fc();
  function r(n) {
    return n != null && t(n.length) && !e(n);
  }
  return Ki = r, Ki;
}
var Wi, Ed;
function mt() {
  if (Ed) return Wi;
  Ed = 1;
  var e = tm(), t = jc(), r = ut();
  function n(i) {
    return r(i) ? e(i) : t(i);
  }
  return Wi = n, Wi;
}
var Xi, Sd;
function YS() {
  if (Sd) return Xi;
  Sd = 1;
  var e = yr(), t = mt();
  function r(n, i) {
    return n && e(i, t(i), n);
  }
  return Xi = r, Xi;
}
var Zi, xd;
function KS() {
  if (xd) return Zi;
  xd = 1;
  function e(t) {
    var r = [];
    if (t != null)
      for (var n in Object(t))
        r.push(n);
    return r;
  }
  return Zi = e, Zi;
}
var Qi, Rd;
function WS() {
  if (Rd) return Qi;
  Rd = 1;
  var e = ze(), t = hn(), r = KS(), n = Object.prototype, i = n.hasOwnProperty;
  function a(o) {
    if (!e(o))
      return r(o);
    var s = t(o), c = [];
    for (var u in o)
      u == "constructor" && (s || !i.call(o, u)) || c.push(u);
    return c;
  }
  return Qi = a, Qi;
}
var Ji, Td;
function At() {
  if (Td) return Ji;
  Td = 1;
  var e = tm(), t = WS(), r = ut();
  function n(i) {
    return r(i) ? e(i, !0) : t(i);
  }
  return Ji = n, Ji;
}
var ea, Ad;
function XS() {
  if (Ad) return ea;
  Ad = 1;
  var e = yr(), t = At();
  function r(n, i) {
    return n && e(i, t(i), n);
  }
  return ea = r, ea;
}
var ar = { exports: {} };
ar.exports;
var Cd;
function nm() {
  return Cd || (Cd = 1, function(e, t) {
    var r = Je(), n = t && !t.nodeType && t, i = n && !0 && e && !e.nodeType && e, a = i && i.exports === n, o = a ? r.Buffer : void 0, s = o ? o.allocUnsafe : void 0;
    function c(u, f) {
      if (f)
        return u.slice();
      var l = u.length, d = s ? s(l) : new u.constructor(l);
      return u.copy(d), d;
    }
    e.exports = c;
  }(ar, ar.exports)), ar.exports;
}
var ta, Od;
function im() {
  if (Od) return ta;
  Od = 1;
  function e(t, r) {
    var n = -1, i = t.length;
    for (r || (r = Array(i)); ++n < i; )
      r[n] = t[n];
    return r;
  }
  return ta = e, ta;
}
var ra, qd;
function am() {
  if (qd) return ra;
  qd = 1;
  function e(t, r) {
    for (var n = -1, i = t == null ? 0 : t.length, a = 0, o = []; ++n < i; ) {
      var s = t[n];
      r(s, n, t) && (o[a++] = s);
    }
    return o;
  }
  return ra = e, ra;
}
var na, Nd;
function om() {
  if (Nd) return na;
  Nd = 1;
  function e() {
    return [];
  }
  return na = e, na;
}
var ia, Id;
function Hc() {
  if (Id) return ia;
  Id = 1;
  var e = am(), t = om(), r = Object.prototype, n = r.propertyIsEnumerable, i = Object.getOwnPropertySymbols, a = i ? function(o) {
    return o == null ? [] : (o = Object(o), e(i(o), function(s) {
      return n.call(o, s);
    }));
  } : t;
  return ia = a, ia;
}
var aa, Md;
function ZS() {
  if (Md) return aa;
  Md = 1;
  var e = yr(), t = Hc();
  function r(n, i) {
    return e(n, t(n), i);
  }
  return aa = r, aa;
}
var oa, Pd;
function zc() {
  if (Pd) return oa;
  Pd = 1;
  function e(t, r) {
    for (var n = -1, i = r.length, a = t.length; ++n < i; )
      t[a + n] = r[n];
    return t;
  }
  return oa = e, oa;
}
var sa, kd;
function pn() {
  if (kd) return sa;
  kd = 1;
  var e = rm(), t = e(Object.getPrototypeOf, Object);
  return sa = t, sa;
}
var ua, Dd;
function sm() {
  if (Dd) return ua;
  Dd = 1;
  var e = zc(), t = pn(), r = Hc(), n = om(), i = Object.getOwnPropertySymbols, a = i ? function(o) {
    for (var s = []; o; )
      e(s, r(o)), o = t(o);
    return s;
  } : n;
  return ua = a, ua;
}
var ca, Ld;
function QS() {
  if (Ld) return ca;
  Ld = 1;
  var e = yr(), t = sm();
  function r(n, i) {
    return e(n, t(n), i);
  }
  return ca = r, ca;
}
var fa, $d;
function um() {
  if ($d) return fa;
  $d = 1;
  var e = zc(), t = xe();
  function r(n, i, a) {
    var o = i(n);
    return t(n) ? o : e(o, a(n));
  }
  return fa = r, fa;
}
var la, Fd;
function cm() {
  if (Fd) return la;
  Fd = 1;
  var e = um(), t = Hc(), r = mt();
  function n(i) {
    return e(i, r, t);
  }
  return la = n, la;
}
var da, Bd;
function JS() {
  if (Bd) return da;
  Bd = 1;
  var e = um(), t = sm(), r = At();
  function n(i) {
    return e(i, r, t);
  }
  return da = n, da;
}
var ha, jd;
function ex() {
  if (jd) return ha;
  jd = 1;
  var e = Tt(), t = Je(), r = e(t, "DataView");
  return ha = r, ha;
}
var pa, Hd;
function tx() {
  if (Hd) return pa;
  Hd = 1;
  var e = Tt(), t = Je(), r = e(t, "Promise");
  return pa = r, pa;
}
var ga, zd;
function fm() {
  if (zd) return ga;
  zd = 1;
  var e = Tt(), t = Je(), r = e(t, "Set");
  return ga = r, ga;
}
var va, Gd;
function rx() {
  if (Gd) return va;
  Gd = 1;
  var e = Tt(), t = Je(), r = e(t, "WeakMap");
  return va = r, va;
}
var ya, Ud;
function Ut() {
  if (Ud) return ya;
  Ud = 1;
  var e = ex(), t = Dc(), r = tx(), n = fm(), i = rx(), a = Rt(), o = Jy(), s = "[object Map]", c = "[object Object]", u = "[object Promise]", f = "[object Set]", l = "[object WeakMap]", d = "[object DataView]", h = o(e), m = o(t), p = o(r), v = o(n), y = o(i), b = a;
  return (e && b(new e(new ArrayBuffer(1))) != d || t && b(new t()) != s || r && b(r.resolve()) != u || n && b(new n()) != f || i && b(new i()) != l) && (b = function(E) {
    var w = a(E), x = w == c ? E.constructor : void 0, R = x ? o(x) : "";
    if (R)
      switch (R) {
        case h:
          return d;
        case m:
          return s;
        case p:
          return u;
        case v:
          return f;
        case y:
          return l;
      }
    return w;
  }), ya = b, ya;
}
var ma, Vd;
function nx() {
  if (Vd) return ma;
  Vd = 1;
  var e = Object.prototype, t = e.hasOwnProperty;
  function r(n) {
    var i = n.length, a = new n.constructor(i);
    return i && typeof n[0] == "string" && t.call(n, "index") && (a.index = n.index, a.input = n.input), a;
  }
  return ma = r, ma;
}
var _a, Yd;
function lm() {
  if (Yd) return _a;
  Yd = 1;
  var e = Je(), t = e.Uint8Array;
  return _a = t, _a;
}
var ba, Kd;
function Gc() {
  if (Kd) return ba;
  Kd = 1;
  var e = lm();
  function t(r) {
    var n = new r.constructor(r.byteLength);
    return new e(n).set(new e(r)), n;
  }
  return ba = t, ba;
}
var wa, Wd;
function ix() {
  if (Wd) return wa;
  Wd = 1;
  var e = Gc();
  function t(r, n) {
    var i = n ? e(r.buffer) : r.buffer;
    return new r.constructor(i, r.byteOffset, r.byteLength);
  }
  return wa = t, wa;
}
var Ea, Xd;
function ax() {
  if (Xd) return Ea;
  Xd = 1;
  var e = /\w*$/;
  function t(r) {
    var n = new r.constructor(r.source, e.exec(r));
    return n.lastIndex = r.lastIndex, n;
  }
  return Ea = t, Ea;
}
var Sa, Zd;
function ox() {
  if (Zd) return Sa;
  Zd = 1;
  var e = zt(), t = e ? e.prototype : void 0, r = t ? t.valueOf : void 0;
  function n(i) {
    return r ? Object(r.call(i)) : {};
  }
  return Sa = n, Sa;
}
var xa, Qd;
function dm() {
  if (Qd) return xa;
  Qd = 1;
  var e = Gc();
  function t(r, n) {
    var i = n ? e(r.buffer) : r.buffer;
    return new r.constructor(i, r.byteOffset, r.length);
  }
  return xa = t, xa;
}
var Ra, Jd;
function sx() {
  if (Jd) return Ra;
  Jd = 1;
  var e = Gc(), t = ix(), r = ax(), n = ox(), i = dm(), a = "[object Boolean]", o = "[object Date]", s = "[object Map]", c = "[object Number]", u = "[object RegExp]", f = "[object Set]", l = "[object String]", d = "[object Symbol]", h = "[object ArrayBuffer]", m = "[object DataView]", p = "[object Float32Array]", v = "[object Float64Array]", y = "[object Int8Array]", b = "[object Int16Array]", E = "[object Int32Array]", w = "[object Uint8Array]", x = "[object Uint8ClampedArray]", R = "[object Uint16Array]", T = "[object Uint32Array]";
  function N(O, k, q) {
    var j = O.constructor;
    switch (k) {
      case h:
        return e(O);
      case a:
      case o:
        return new j(+O);
      case m:
        return t(O, q);
      case p:
      case v:
      case y:
      case b:
      case E:
      case w:
      case x:
      case R:
      case T:
        return i(O, q);
      case s:
        return new j();
      case c:
      case l:
        return new j(O);
      case u:
        return r(O);
      case f:
        return new j();
      case d:
        return n(O);
    }
  }
  return Ra = N, Ra;
}
var Ta, eh;
function hm() {
  if (eh) return Ta;
  eh = 1;
  var e = ze(), t = Object.create, r = /* @__PURE__ */ function() {
    function n() {
    }
    return function(i) {
      if (!e(i))
        return {};
      if (t)
        return t(i);
      n.prototype = i;
      var a = new n();
      return n.prototype = void 0, a;
    };
  }();
  return Ta = r, Ta;
}
var Aa, th;
function pm() {
  if (th) return Aa;
  th = 1;
  var e = hm(), t = pn(), r = hn();
  function n(i) {
    return typeof i.constructor == "function" && !r(i) ? e(t(i)) : {};
  }
  return Aa = n, Aa;
}
var Ca, rh;
function ux() {
  if (rh) return Ca;
  rh = 1;
  var e = Ut(), t = it(), r = "[object Map]";
  function n(i) {
    return t(i) && e(i) == r;
  }
  return Ca = n, Ca;
}
var Oa, nh;
function cx() {
  if (nh) return Oa;
  nh = 1;
  var e = ux(), t = dn(), r = Bc(), n = r && r.isMap, i = n ? t(n) : e;
  return Oa = i, Oa;
}
var qa, ih;
function fx() {
  if (ih) return qa;
  ih = 1;
  var e = Ut(), t = it(), r = "[object Set]";
  function n(i) {
    return t(i) && e(i) == r;
  }
  return qa = n, qa;
}
var Na, ah;
function lx() {
  if (ah) return Na;
  ah = 1;
  var e = fx(), t = dn(), r = Bc(), n = r && r.isSet, i = n ? t(n) : e;
  return Na = i, Na;
}
var Ia, oh;
function gm() {
  if (oh) return Ia;
  oh = 1;
  var e = un(), t = $c(), r = fn(), n = YS(), i = XS(), a = nm(), o = im(), s = ZS(), c = QS(), u = cm(), f = JS(), l = Ut(), d = nx(), h = sx(), m = pm(), p = xe(), v = Gt(), y = cx(), b = ze(), E = lx(), w = mt(), x = At(), R = 1, T = 2, N = 4, O = "[object Arguments]", k = "[object Array]", q = "[object Boolean]", j = "[object Date]", B = "[object Error]", S = "[object Function]", P = "[object GeneratorFunction]", M = "[object Map]", G = "[object Number]", V = "[object Object]", F = "[object RegExp]", g = "[object Set]", C = "[object String]", L = "[object Symbol]", H = "[object WeakMap]", A = "[object ArrayBuffer]", I = "[object DataView]", $ = "[object Float32Array]", U = "[object Float64Array]", Y = "[object Int8Array]", J = "[object Int16Array]", ne = "[object Int32Array]", le = "[object Uint8Array]", Ee = "[object Uint8ClampedArray]", pe = "[object Uint16Array]", fe = "[object Uint32Array]", te = {};
  te[O] = te[k] = te[A] = te[I] = te[q] = te[j] = te[$] = te[U] = te[Y] = te[J] = te[ne] = te[M] = te[G] = te[V] = te[F] = te[g] = te[C] = te[L] = te[le] = te[Ee] = te[pe] = te[fe] = !0, te[B] = te[S] = te[H] = !1;
  function de(Z, Q, ye, ae, Ie, Te) {
    var ge, Ae = Q & R, Pe = Q & T, Ue = Q & N;
    if (ye && (ge = Ie ? ye(Z, ae, Ie, Te) : ye(Z)), ge !== void 0)
      return ge;
    if (!b(Z))
      return Z;
    var $e = p(Z);
    if ($e) {
      if (ge = d(Z), !Ae)
        return o(Z, ge);
    } else {
      var Oe = l(Z), Fe = Oe == S || Oe == P;
      if (v(Z))
        return a(Z, Ae);
      if (Oe == V || Oe == O || Fe && !Ie) {
        if (ge = Pe || Fe ? {} : m(Z), !Ae)
          return Pe ? c(Z, i(ge, Z)) : s(Z, n(ge, Z));
      } else {
        if (!te[Oe])
          return Ie ? Z : {};
        ge = h(Z, Oe, Ae);
      }
    }
    Te || (Te = new e());
    var Ve = Te.get(Z);
    if (Ve)
      return Ve;
    Te.set(Z, ge), E(Z) ? Z.forEach(function(be) {
      ge.add(de(be, Q, ye, be, Z, Te));
    }) : y(Z) && Z.forEach(function(be, Se) {
      ge.set(Se, de(be, Q, ye, Se, Z, Te));
    });
    var _e = Ue ? Pe ? f : u : Pe ? x : w, Re = $e ? void 0 : _e(Z);
    return t(Re || Z, function(be, Se) {
      Re && (Se = be, be = Z[Se]), r(ge, Se, de(be, Q, ye, Se, Z, Te));
    }), ge;
  }
  return Ia = de, Ia;
}
var Ma, sh;
function dx() {
  if (sh) return Ma;
  sh = 1;
  var e = gm(), t = 4;
  function r(n) {
    return e(n, t);
  }
  return Ma = r, Ma;
}
var Pa, uh;
function Uc() {
  if (uh) return Pa;
  uh = 1;
  function e(t) {
    return function() {
      return t;
    };
  }
  return Pa = e, Pa;
}
var ka, ch;
function hx() {
  if (ch) return ka;
  ch = 1;
  function e(t) {
    return function(r, n, i) {
      for (var a = -1, o = Object(r), s = i(r), c = s.length; c--; ) {
        var u = s[t ? c : ++a];
        if (n(o[u], u, o) === !1)
          break;
      }
      return r;
    };
  }
  return ka = e, ka;
}
var Da, fh;
function Vc() {
  if (fh) return Da;
  fh = 1;
  var e = hx(), t = e();
  return Da = t, Da;
}
var La, lh;
function Yc() {
  if (lh) return La;
  lh = 1;
  var e = Vc(), t = mt();
  function r(n, i) {
    return n && e(n, i, t);
  }
  return La = r, La;
}
var $a, dh;
function px() {
  if (dh) return $a;
  dh = 1;
  var e = ut();
  function t(r, n) {
    return function(i, a) {
      if (i == null)
        return i;
      if (!e(i))
        return r(i, a);
      for (var o = i.length, s = n ? o : -1, c = Object(i); (n ? s-- : ++s < o) && a(c[s], s, c) !== !1; )
        ;
      return i;
    };
  }
  return $a = t, $a;
}
var Fa, hh;
function gn() {
  if (hh) return Fa;
  hh = 1;
  var e = Yc(), t = px(), r = t(e);
  return Fa = r, Fa;
}
var Ba, ph;
function Ct() {
  if (ph) return Ba;
  ph = 1;
  function e(t) {
    return t;
  }
  return Ba = e, Ba;
}
var ja, gh;
function vm() {
  if (gh) return ja;
  gh = 1;
  var e = Ct();
  function t(r) {
    return typeof r == "function" ? r : e;
  }
  return ja = t, ja;
}
var Ha, vh;
function ym() {
  if (vh) return Ha;
  vh = 1;
  var e = $c(), t = gn(), r = vm(), n = xe();
  function i(a, o) {
    var s = n(a) ? e : t;
    return s(a, r(o));
  }
  return Ha = i, Ha;
}
var za, yh;
function mm() {
  return yh || (yh = 1, za = ym()), za;
}
var Ga, mh;
function gx() {
  if (mh) return Ga;
  mh = 1;
  var e = gn();
  function t(r, n) {
    var i = [];
    return e(r, function(a, o, s) {
      n(a, o, s) && i.push(a);
    }), i;
  }
  return Ga = t, Ga;
}
var Ua, _h;
function vx() {
  if (_h) return Ua;
  _h = 1;
  var e = "__lodash_hash_undefined__";
  function t(r) {
    return this.__data__.set(r, e), this;
  }
  return Ua = t, Ua;
}
var Va, bh;
function yx() {
  if (bh) return Va;
  bh = 1;
  function e(t) {
    return this.__data__.has(t);
  }
  return Va = e, Va;
}
var Ya, wh;
function _m() {
  if (wh) return Ya;
  wh = 1;
  var e = Lc(), t = vx(), r = yx();
  function n(i) {
    var a = -1, o = i == null ? 0 : i.length;
    for (this.__data__ = new e(); ++a < o; )
      this.add(i[a]);
  }
  return n.prototype.add = n.prototype.push = t, n.prototype.has = r, Ya = n, Ya;
}
var Ka, Eh;
function mx() {
  if (Eh) return Ka;
  Eh = 1;
  function e(t, r) {
    for (var n = -1, i = t == null ? 0 : t.length; ++n < i; )
      if (r(t[n], n, t))
        return !0;
    return !1;
  }
  return Ka = e, Ka;
}
var Wa, Sh;
function bm() {
  if (Sh) return Wa;
  Sh = 1;
  function e(t, r) {
    return t.has(r);
  }
  return Wa = e, Wa;
}
var Xa, xh;
function wm() {
  if (xh) return Xa;
  xh = 1;
  var e = _m(), t = mx(), r = bm(), n = 1, i = 2;
  function a(o, s, c, u, f, l) {
    var d = c & n, h = o.length, m = s.length;
    if (h != m && !(d && m > h))
      return !1;
    var p = l.get(o), v = l.get(s);
    if (p && v)
      return p == s && v == o;
    var y = -1, b = !0, E = c & i ? new e() : void 0;
    for (l.set(o, s), l.set(s, o); ++y < h; ) {
      var w = o[y], x = s[y];
      if (u)
        var R = d ? u(x, w, y, s, o, l) : u(w, x, y, o, s, l);
      if (R !== void 0) {
        if (R)
          continue;
        b = !1;
        break;
      }
      if (E) {
        if (!t(s, function(T, N) {
          if (!r(E, N) && (w === T || f(w, T, c, u, l)))
            return E.push(N);
        })) {
          b = !1;
          break;
        }
      } else if (!(w === x || f(w, x, c, u, l))) {
        b = !1;
        break;
      }
    }
    return l.delete(o), l.delete(s), b;
  }
  return Xa = a, Xa;
}
var Za, Rh;
function _x() {
  if (Rh) return Za;
  Rh = 1;
  function e(t) {
    var r = -1, n = Array(t.size);
    return t.forEach(function(i, a) {
      n[++r] = [a, i];
    }), n;
  }
  return Za = e, Za;
}
var Qa, Th;
function Kc() {
  if (Th) return Qa;
  Th = 1;
  function e(t) {
    var r = -1, n = Array(t.size);
    return t.forEach(function(i) {
      n[++r] = i;
    }), n;
  }
  return Qa = e, Qa;
}
var Ja, Ah;
function bx() {
  if (Ah) return Ja;
  Ah = 1;
  var e = zt(), t = lm(), r = Ht(), n = wm(), i = _x(), a = Kc(), o = 1, s = 2, c = "[object Boolean]", u = "[object Date]", f = "[object Error]", l = "[object Map]", d = "[object Number]", h = "[object RegExp]", m = "[object Set]", p = "[object String]", v = "[object Symbol]", y = "[object ArrayBuffer]", b = "[object DataView]", E = e ? e.prototype : void 0, w = E ? E.valueOf : void 0;
  function x(R, T, N, O, k, q, j) {
    switch (N) {
      case b:
        if (R.byteLength != T.byteLength || R.byteOffset != T.byteOffset)
          return !1;
        R = R.buffer, T = T.buffer;
      case y:
        return !(R.byteLength != T.byteLength || !q(new t(R), new t(T)));
      case c:
      case u:
      case d:
        return r(+R, +T);
      case f:
        return R.name == T.name && R.message == T.message;
      case h:
      case p:
        return R == T + "";
      case l:
        var B = i;
      case m:
        var S = O & o;
        if (B || (B = a), R.size != T.size && !S)
          return !1;
        var P = j.get(R);
        if (P)
          return P == T;
        O |= s, j.set(R, T);
        var M = n(B(R), B(T), O, k, q, j);
        return j.delete(R), M;
      case v:
        if (w)
          return w.call(R) == w.call(T);
    }
    return !1;
  }
  return Ja = x, Ja;
}
var eo, Ch;
function wx() {
  if (Ch) return eo;
  Ch = 1;
  var e = cm(), t = 1, r = Object.prototype, n = r.hasOwnProperty;
  function i(a, o, s, c, u, f) {
    var l = s & t, d = e(a), h = d.length, m = e(o), p = m.length;
    if (h != p && !l)
      return !1;
    for (var v = h; v--; ) {
      var y = d[v];
      if (!(l ? y in o : n.call(o, y)))
        return !1;
    }
    var b = f.get(a), E = f.get(o);
    if (b && E)
      return b == o && E == a;
    var w = !0;
    f.set(a, o), f.set(o, a);
    for (var x = l; ++v < h; ) {
      y = d[v];
      var R = a[y], T = o[y];
      if (c)
        var N = l ? c(T, R, y, o, a, f) : c(R, T, y, a, o, f);
      if (!(N === void 0 ? R === T || u(R, T, s, c, f) : N)) {
        w = !1;
        break;
      }
      x || (x = y == "constructor");
    }
    if (w && !x) {
      var O = a.constructor, k = o.constructor;
      O != k && "constructor" in a && "constructor" in o && !(typeof O == "function" && O instanceof O && typeof k == "function" && k instanceof k) && (w = !1);
    }
    return f.delete(a), f.delete(o), w;
  }
  return eo = i, eo;
}
var to, Oh;
function Ex() {
  if (Oh) return to;
  Oh = 1;
  var e = un(), t = wm(), r = bx(), n = wx(), i = Ut(), a = xe(), o = Gt(), s = _r(), c = 1, u = "[object Arguments]", f = "[object Array]", l = "[object Object]", d = Object.prototype, h = d.hasOwnProperty;
  function m(p, v, y, b, E, w) {
    var x = a(p), R = a(v), T = x ? f : i(p), N = R ? f : i(v);
    T = T == u ? l : T, N = N == u ? l : N;
    var O = T == l, k = N == l, q = T == N;
    if (q && o(p)) {
      if (!o(v))
        return !1;
      x = !0, O = !1;
    }
    if (q && !O)
      return w || (w = new e()), x || s(p) ? t(p, v, y, b, E, w) : r(p, v, T, y, b, E, w);
    if (!(y & c)) {
      var j = O && h.call(p, "__wrapped__"), B = k && h.call(v, "__wrapped__");
      if (j || B) {
        var S = j ? p.value() : p, P = B ? v.value() : v;
        return w || (w = new e()), E(S, P, y, b, w);
      }
    }
    return q ? (w || (w = new e()), n(p, v, y, b, E, w)) : !1;
  }
  return to = m, to;
}
var ro, qh;
function Em() {
  if (qh) return ro;
  qh = 1;
  var e = Ex(), t = it();
  function r(n, i, a, o, s) {
    return n === i ? !0 : n == null || i == null || !t(n) && !t(i) ? n !== n && i !== i : e(n, i, a, o, r, s);
  }
  return ro = r, ro;
}
var no, Nh;
function Sx() {
  if (Nh) return no;
  Nh = 1;
  var e = un(), t = Em(), r = 1, n = 2;
  function i(a, o, s, c) {
    var u = s.length, f = u, l = !c;
    if (a == null)
      return !f;
    for (a = Object(a); u--; ) {
      var d = s[u];
      if (l && d[2] ? d[1] !== a[d[0]] : !(d[0] in a))
        return !1;
    }
    for (; ++u < f; ) {
      d = s[u];
      var h = d[0], m = a[h], p = d[1];
      if (l && d[2]) {
        if (m === void 0 && !(h in a))
          return !1;
      } else {
        var v = new e();
        if (c)
          var y = c(m, p, h, a, o, v);
        if (!(y === void 0 ? t(p, m, r | n, c, v) : y))
          return !1;
      }
    }
    return !0;
  }
  return no = i, no;
}
var io, Ih;
function Sm() {
  if (Ih) return io;
  Ih = 1;
  var e = ze();
  function t(r) {
    return r === r && !e(r);
  }
  return io = t, io;
}
var ao, Mh;
function xx() {
  if (Mh) return ao;
  Mh = 1;
  var e = Sm(), t = mt();
  function r(n) {
    for (var i = t(n), a = i.length; a--; ) {
      var o = i[a], s = n[o];
      i[a] = [o, s, e(s)];
    }
    return i;
  }
  return ao = r, ao;
}
var oo, Ph;
function xm() {
  if (Ph) return oo;
  Ph = 1;
  function e(t, r) {
    return function(n) {
      return n == null ? !1 : n[t] === r && (r !== void 0 || t in Object(n));
    };
  }
  return oo = e, oo;
}
var so, kh;
function Rx() {
  if (kh) return so;
  kh = 1;
  var e = Sx(), t = xx(), r = xm();
  function n(i) {
    var a = t(i);
    return a.length == 1 && a[0][2] ? r(a[0][0], a[0][1]) : function(o) {
      return o === i || e(o, i, a);
    };
  }
  return so = n, so;
}
var uo, Dh;
function Vt() {
  if (Dh) return uo;
  Dh = 1;
  var e = Rt(), t = it(), r = "[object Symbol]";
  function n(i) {
    return typeof i == "symbol" || t(i) && e(i) == r;
  }
  return uo = n, uo;
}
var co, Lh;
function Wc() {
  if (Lh) return co;
  Lh = 1;
  var e = xe(), t = Vt(), r = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, n = /^\w*$/;
  function i(a, o) {
    if (e(a))
      return !1;
    var s = typeof a;
    return s == "number" || s == "symbol" || s == "boolean" || a == null || t(a) ? !0 : n.test(a) || !r.test(a) || o != null && a in Object(o);
  }
  return co = i, co;
}
var fo, $h;
function Tx() {
  if ($h) return fo;
  $h = 1;
  var e = Lc(), t = "Expected a function";
  function r(n, i) {
    if (typeof n != "function" || i != null && typeof i != "function")
      throw new TypeError(t);
    var a = function() {
      var o = arguments, s = i ? i.apply(this, o) : o[0], c = a.cache;
      if (c.has(s))
        return c.get(s);
      var u = n.apply(this, o);
      return a.cache = c.set(s, u) || c, u;
    };
    return a.cache = new (r.Cache || e)(), a;
  }
  return r.Cache = e, fo = r, fo;
}
var lo, Fh;
function Ax() {
  if (Fh) return lo;
  Fh = 1;
  var e = Tx(), t = 500;
  function r(n) {
    var i = e(n, function(o) {
      return a.size === t && a.clear(), o;
    }), a = i.cache;
    return i;
  }
  return lo = r, lo;
}
var ho, Bh;
function Cx() {
  if (Bh) return ho;
  Bh = 1;
  var e = Ax(), t = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, r = /\\(\\)?/g, n = e(function(i) {
    var a = [];
    return i.charCodeAt(0) === 46 && a.push(""), i.replace(t, function(o, s, c, u) {
      a.push(c ? u.replace(r, "$1") : s || o);
    }), a;
  });
  return ho = n, ho;
}
var po, jh;
function vn() {
  if (jh) return po;
  jh = 1;
  function e(t, r) {
    for (var n = -1, i = t == null ? 0 : t.length, a = Array(i); ++n < i; )
      a[n] = r(t[n], n, t);
    return a;
  }
  return po = e, po;
}
var go, Hh;
function Ox() {
  if (Hh) return go;
  Hh = 1;
  var e = zt(), t = vn(), r = xe(), n = Vt(), i = e ? e.prototype : void 0, a = i ? i.toString : void 0;
  function o(s) {
    if (typeof s == "string")
      return s;
    if (r(s))
      return t(s, o) + "";
    if (n(s))
      return a ? a.call(s) : "";
    var c = s + "";
    return c == "0" && 1 / s == -1 / 0 ? "-0" : c;
  }
  return go = o, go;
}
var vo, zh;
function Rm() {
  if (zh) return vo;
  zh = 1;
  var e = Ox();
  function t(r) {
    return r == null ? "" : e(r);
  }
  return vo = t, vo;
}
var yo, Gh;
function yn() {
  if (Gh) return yo;
  Gh = 1;
  var e = xe(), t = Wc(), r = Cx(), n = Rm();
  function i(a, o) {
    return e(a) ? a : t(a, o) ? [a] : r(n(a));
  }
  return yo = i, yo;
}
var mo, Uh;
function br() {
  if (Uh) return mo;
  Uh = 1;
  var e = Vt();
  function t(r) {
    if (typeof r == "string" || e(r))
      return r;
    var n = r + "";
    return n == "0" && 1 / r == -1 / 0 ? "-0" : n;
  }
  return mo = t, mo;
}
var _o, Vh;
function mn() {
  if (Vh) return _o;
  Vh = 1;
  var e = yn(), t = br();
  function r(n, i) {
    i = e(i, n);
    for (var a = 0, o = i.length; n != null && a < o; )
      n = n[t(i[a++])];
    return a && a == o ? n : void 0;
  }
  return _o = r, _o;
}
var bo, Yh;
function qx() {
  if (Yh) return bo;
  Yh = 1;
  var e = mn();
  function t(r, n, i) {
    var a = r == null ? void 0 : e(r, n);
    return a === void 0 ? i : a;
  }
  return bo = t, bo;
}
var wo, Kh;
function Nx() {
  if (Kh) return wo;
  Kh = 1;
  function e(t, r) {
    return t != null && r in Object(t);
  }
  return wo = e, wo;
}
var Eo, Wh;
function Tm() {
  if (Wh) return Eo;
  Wh = 1;
  var e = yn(), t = mr(), r = xe(), n = ln(), i = Fc(), a = br();
  function o(s, c, u) {
    c = e(c, s);
    for (var f = -1, l = c.length, d = !1; ++f < l; ) {
      var h = a(c[f]);
      if (!(d = s != null && u(s, h)))
        break;
      s = s[h];
    }
    return d || ++f != l ? d : (l = s == null ? 0 : s.length, !!l && i(l) && n(h, l) && (r(s) || t(s)));
  }
  return Eo = o, Eo;
}
var So, Xh;
function Am() {
  if (Xh) return So;
  Xh = 1;
  var e = Nx(), t = Tm();
  function r(n, i) {
    return n != null && t(n, i, e);
  }
  return So = r, So;
}
var xo, Zh;
function Ix() {
  if (Zh) return xo;
  Zh = 1;
  var e = Em(), t = qx(), r = Am(), n = Wc(), i = Sm(), a = xm(), o = br(), s = 1, c = 2;
  function u(f, l) {
    return n(f) && i(l) ? a(o(f), l) : function(d) {
      var h = t(d, f);
      return h === void 0 && h === l ? r(d, f) : e(l, h, s | c);
    };
  }
  return xo = u, xo;
}
var Ro, Qh;
function Cm() {
  if (Qh) return Ro;
  Qh = 1;
  function e(t) {
    return function(r) {
      return r == null ? void 0 : r[t];
    };
  }
  return Ro = e, Ro;
}
var To, Jh;
function Mx() {
  if (Jh) return To;
  Jh = 1;
  var e = mn();
  function t(r) {
    return function(n) {
      return e(n, r);
    };
  }
  return To = t, To;
}
var Ao, ep;
function Px() {
  if (ep) return Ao;
  ep = 1;
  var e = Cm(), t = Mx(), r = Wc(), n = br();
  function i(a) {
    return r(a) ? e(n(a)) : t(a);
  }
  return Ao = i, Ao;
}
var Co, tp;
function ct() {
  if (tp) return Co;
  tp = 1;
  var e = Rx(), t = Ix(), r = Ct(), n = xe(), i = Px();
  function a(o) {
    return typeof o == "function" ? o : o == null ? r : typeof o == "object" ? n(o) ? t(o[0], o[1]) : e(o) : i(o);
  }
  return Co = a, Co;
}
var Oo, rp;
function Om() {
  if (rp) return Oo;
  rp = 1;
  var e = am(), t = gx(), r = ct(), n = xe();
  function i(a, o) {
    var s = n(a) ? e : t;
    return s(a, r(o, 3));
  }
  return Oo = i, Oo;
}
var qo, np;
function kx() {
  if (np) return qo;
  np = 1;
  var e = Object.prototype, t = e.hasOwnProperty;
  function r(n, i) {
    return n != null && t.call(n, i);
  }
  return qo = r, qo;
}
var No, ip;
function qm() {
  if (ip) return No;
  ip = 1;
  var e = kx(), t = Tm();
  function r(n, i) {
    return n != null && t(n, i, e);
  }
  return No = r, No;
}
var Io, ap;
function Dx() {
  if (ap) return Io;
  ap = 1;
  var e = jc(), t = Ut(), r = mr(), n = xe(), i = ut(), a = Gt(), o = hn(), s = _r(), c = "[object Map]", u = "[object Set]", f = Object.prototype, l = f.hasOwnProperty;
  function d(h) {
    if (h == null)
      return !0;
    if (i(h) && (n(h) || typeof h == "string" || typeof h.splice == "function" || a(h) || s(h) || r(h)))
      return !h.length;
    var m = t(h);
    if (m == c || m == u)
      return !h.size;
    if (o(h))
      return !e(h).length;
    for (var p in h)
      if (l.call(h, p))
        return !1;
    return !0;
  }
  return Io = d, Io;
}
var Mo, op;
function Nm() {
  if (op) return Mo;
  op = 1;
  function e(t) {
    return t === void 0;
  }
  return Mo = e, Mo;
}
var Po, sp;
function Im() {
  if (sp) return Po;
  sp = 1;
  var e = gn(), t = ut();
  function r(n, i) {
    var a = -1, o = t(n) ? Array(n.length) : [];
    return e(n, function(s, c, u) {
      o[++a] = i(s, c, u);
    }), o;
  }
  return Po = r, Po;
}
var ko, up;
function Mm() {
  if (up) return ko;
  up = 1;
  var e = vn(), t = ct(), r = Im(), n = xe();
  function i(a, o) {
    var s = n(a) ? e : r;
    return s(a, t(o, 3));
  }
  return ko = i, ko;
}
var Do, cp;
function Lx() {
  if (cp) return Do;
  cp = 1;
  function e(t, r, n, i) {
    var a = -1, o = t == null ? 0 : t.length;
    for (i && o && (n = t[++a]); ++a < o; )
      n = r(n, t[a], a, t);
    return n;
  }
  return Do = e, Do;
}
var Lo, fp;
function $x() {
  if (fp) return Lo;
  fp = 1;
  function e(t, r, n, i, a) {
    return a(t, function(o, s, c) {
      n = i ? (i = !1, o) : r(n, o, s, c);
    }), n;
  }
  return Lo = e, Lo;
}
var $o, lp;
function Pm() {
  if (lp) return $o;
  lp = 1;
  var e = Lx(), t = gn(), r = ct(), n = $x(), i = xe();
  function a(o, s, c) {
    var u = i(o) ? e : n, f = arguments.length < 3;
    return u(o, r(s, 4), c, f, t);
  }
  return $o = a, $o;
}
var Fo, dp;
function Fx() {
  if (dp) return Fo;
  dp = 1;
  var e = Rt(), t = xe(), r = it(), n = "[object String]";
  function i(a) {
    return typeof a == "string" || !t(a) && r(a) && e(a) == n;
  }
  return Fo = i, Fo;
}
var Bo, hp;
function Bx() {
  if (hp) return Bo;
  hp = 1;
  var e = Cm(), t = e("length");
  return Bo = t, Bo;
}
var jo, pp;
function jx() {
  if (pp) return jo;
  pp = 1;
  var e = "\\ud800-\\udfff", t = "\\u0300-\\u036f", r = "\\ufe20-\\ufe2f", n = "\\u20d0-\\u20ff", i = t + r + n, a = "\\ufe0e\\ufe0f", o = "\\u200d", s = RegExp("[" + o + e + i + a + "]");
  function c(u) {
    return s.test(u);
  }
  return jo = c, jo;
}
var Ho, gp;
function Hx() {
  if (gp) return Ho;
  gp = 1;
  var e = "\\ud800-\\udfff", t = "\\u0300-\\u036f", r = "\\ufe20-\\ufe2f", n = "\\u20d0-\\u20ff", i = t + r + n, a = "\\ufe0e\\ufe0f", o = "[" + e + "]", s = "[" + i + "]", c = "\\ud83c[\\udffb-\\udfff]", u = "(?:" + s + "|" + c + ")", f = "[^" + e + "]", l = "(?:\\ud83c[\\udde6-\\uddff]){2}", d = "[\\ud800-\\udbff][\\udc00-\\udfff]", h = "\\u200d", m = u + "?", p = "[" + a + "]?", v = "(?:" + h + "(?:" + [f, l, d].join("|") + ")" + p + m + ")*", y = p + m + v, b = "(?:" + [f + s + "?", s, l, d, o].join("|") + ")", E = RegExp(c + "(?=" + c + ")|" + b + y, "g");
  function w(x) {
    for (var R = E.lastIndex = 0; E.test(x); )
      ++R;
    return R;
  }
  return Ho = w, Ho;
}
var zo, vp;
function zx() {
  if (vp) return zo;
  vp = 1;
  var e = Bx(), t = jx(), r = Hx();
  function n(i) {
    return t(i) ? r(i) : e(i);
  }
  return zo = n, zo;
}
var Go, yp;
function Gx() {
  if (yp) return Go;
  yp = 1;
  var e = jc(), t = Ut(), r = ut(), n = Fx(), i = zx(), a = "[object Map]", o = "[object Set]";
  function s(c) {
    if (c == null)
      return 0;
    if (r(c))
      return n(c) ? i(c) : c.length;
    var u = t(c);
    return u == a || u == o ? c.size : e(c).length;
  }
  return Go = s, Go;
}
var Uo, mp;
function Ux() {
  if (mp) return Uo;
  mp = 1;
  var e = $c(), t = hm(), r = Yc(), n = ct(), i = pn(), a = xe(), o = Gt(), s = vr(), c = ze(), u = _r();
  function f(l, d, h) {
    var m = a(l), p = m || o(l) || u(l);
    if (d = n(d, 4), h == null) {
      var v = l && l.constructor;
      p ? h = m ? new v() : [] : c(l) ? h = s(v) ? t(i(l)) : {} : h = {};
    }
    return (p ? e : r)(l, function(y, b, E) {
      return d(h, y, b, E);
    }), h;
  }
  return Uo = f, Uo;
}
var Vo, _p;
function Vx() {
  if (_p) return Vo;
  _p = 1;
  var e = zt(), t = mr(), r = xe(), n = e ? e.isConcatSpreadable : void 0;
  function i(a) {
    return r(a) || t(a) || !!(n && a && a[n]);
  }
  return Vo = i, Vo;
}
var Yo, bp;
function Xc() {
  if (bp) return Yo;
  bp = 1;
  var e = zc(), t = Vx();
  function r(n, i, a, o, s) {
    var c = -1, u = n.length;
    for (a || (a = t), s || (s = []); ++c < u; ) {
      var f = n[c];
      i > 0 && a(f) ? i > 1 ? r(f, i - 1, a, o, s) : e(s, f) : o || (s[s.length] = f);
    }
    return s;
  }
  return Yo = r, Yo;
}
var Ko, wp;
function Yx() {
  if (wp) return Ko;
  wp = 1;
  function e(t, r, n) {
    switch (n.length) {
      case 0:
        return t.call(r);
      case 1:
        return t.call(r, n[0]);
      case 2:
        return t.call(r, n[0], n[1]);
      case 3:
        return t.call(r, n[0], n[1], n[2]);
    }
    return t.apply(r, n);
  }
  return Ko = e, Ko;
}
var Wo, Ep;
function km() {
  if (Ep) return Wo;
  Ep = 1;
  var e = Yx(), t = Math.max;
  function r(n, i, a) {
    return i = t(i === void 0 ? n.length - 1 : i, 0), function() {
      for (var o = arguments, s = -1, c = t(o.length - i, 0), u = Array(c); ++s < c; )
        u[s] = o[i + s];
      s = -1;
      for (var f = Array(i + 1); ++s < i; )
        f[s] = o[s];
      return f[i] = a(u), e(n, this, f);
    };
  }
  return Wo = r, Wo;
}
var Xo, Sp;
function Kx() {
  if (Sp) return Xo;
  Sp = 1;
  var e = Uc(), t = em(), r = Ct(), n = t ? function(i, a) {
    return t(i, "toString", {
      configurable: !0,
      enumerable: !1,
      value: e(a),
      writable: !0
    });
  } : r;
  return Xo = n, Xo;
}
var Zo, xp;
function Wx() {
  if (xp) return Zo;
  xp = 1;
  var e = 800, t = 16, r = Date.now;
  function n(i) {
    var a = 0, o = 0;
    return function() {
      var s = r(), c = t - (s - o);
      if (o = s, c > 0) {
        if (++a >= e)
          return arguments[0];
      } else
        a = 0;
      return i.apply(void 0, arguments);
    };
  }
  return Zo = n, Zo;
}
var Qo, Rp;
function Dm() {
  if (Rp) return Qo;
  Rp = 1;
  var e = Kx(), t = Wx(), r = t(e);
  return Qo = r, Qo;
}
var Jo, Tp;
function _n() {
  if (Tp) return Jo;
  Tp = 1;
  var e = Ct(), t = km(), r = Dm();
  function n(i, a) {
    return r(t(i, a, e), i + "");
  }
  return Jo = n, Jo;
}
var es, Ap;
function Lm() {
  if (Ap) return es;
  Ap = 1;
  function e(t, r, n, i) {
    for (var a = t.length, o = n + (i ? 1 : -1); i ? o-- : ++o < a; )
      if (r(t[o], o, t))
        return o;
    return -1;
  }
  return es = e, es;
}
var ts, Cp;
function Xx() {
  if (Cp) return ts;
  Cp = 1;
  function e(t) {
    return t !== t;
  }
  return ts = e, ts;
}
var rs, Op;
function Zx() {
  if (Op) return rs;
  Op = 1;
  function e(t, r, n) {
    for (var i = n - 1, a = t.length; ++i < a; )
      if (t[i] === r)
        return i;
    return -1;
  }
  return rs = e, rs;
}
var ns, qp;
function Qx() {
  if (qp) return ns;
  qp = 1;
  var e = Lm(), t = Xx(), r = Zx();
  function n(i, a, o) {
    return a === a ? r(i, a, o) : e(i, t, o);
  }
  return ns = n, ns;
}
var is, Np;
function Jx() {
  if (Np) return is;
  Np = 1;
  var e = Qx();
  function t(r, n) {
    var i = r == null ? 0 : r.length;
    return !!i && e(r, n, 0) > -1;
  }
  return is = t, is;
}
var as, Ip;
function eR() {
  if (Ip) return as;
  Ip = 1;
  function e(t, r, n) {
    for (var i = -1, a = t == null ? 0 : t.length; ++i < a; )
      if (n(r, t[i]))
        return !0;
    return !1;
  }
  return as = e, as;
}
var os, Mp;
function tR() {
  if (Mp) return os;
  Mp = 1;
  function e() {
  }
  return os = e, os;
}
var ss, Pp;
function rR() {
  if (Pp) return ss;
  Pp = 1;
  var e = fm(), t = tR(), r = Kc(), n = 1 / 0, i = e && 1 / r(new e([, -0]))[1] == n ? function(a) {
    return new e(a);
  } : t;
  return ss = i, ss;
}
var us, kp;
function nR() {
  if (kp) return us;
  kp = 1;
  var e = _m(), t = Jx(), r = eR(), n = bm(), i = rR(), a = Kc(), o = 200;
  function s(c, u, f) {
    var l = -1, d = t, h = c.length, m = !0, p = [], v = p;
    if (f)
      m = !1, d = r;
    else if (h >= o) {
      var y = u ? null : i(c);
      if (y)
        return a(y);
      m = !1, d = n, v = new e();
    } else
      v = u ? [] : p;
    e:
      for (; ++l < h; ) {
        var b = c[l], E = u ? u(b) : b;
        if (b = f || b !== 0 ? b : 0, m && E === E) {
          for (var w = v.length; w--; )
            if (v[w] === E)
              continue e;
          u && v.push(E), p.push(b);
        } else d(v, E, f) || (v !== p && v.push(E), p.push(b));
      }
    return p;
  }
  return us = s, us;
}
var cs, Dp;
function $m() {
  if (Dp) return cs;
  Dp = 1;
  var e = ut(), t = it();
  function r(n) {
    return t(n) && e(n);
  }
  return cs = r, cs;
}
var fs, Lp;
function iR() {
  if (Lp) return fs;
  Lp = 1;
  var e = Xc(), t = _n(), r = nR(), n = $m(), i = t(function(a) {
    return r(e(a, 1, n, !0));
  });
  return fs = i, fs;
}
var ls, $p;
function aR() {
  if ($p) return ls;
  $p = 1;
  var e = vn();
  function t(r, n) {
    return e(n, function(i) {
      return r[i];
    });
  }
  return ls = t, ls;
}
var ds, Fp;
function Fm() {
  if (Fp) return ds;
  Fp = 1;
  var e = aR(), t = mt();
  function r(n) {
    return n == null ? [] : e(n, t(n));
  }
  return ds = r, ds;
}
var hs, Bp;
function Ge() {
  if (Bp) return hs;
  Bp = 1;
  var e;
  if (typeof kc == "function")
    try {
      e = {
        clone: dx(),
        constant: Uc(),
        each: mm(),
        filter: Om(),
        has: qm(),
        isArray: xe(),
        isEmpty: Dx(),
        isFunction: vr(),
        isUndefined: Nm(),
        keys: mt(),
        map: Mm(),
        reduce: Pm(),
        size: Gx(),
        transform: Ux(),
        union: iR(),
        values: Fm()
      };
    } catch {
    }
  return e || (e = window._), hs = e, hs;
}
var ps, jp;
function Zc() {
  if (jp) return ps;
  jp = 1;
  var e = Ge();
  ps = i;
  var t = "\0", r = "\0", n = "";
  function i(f) {
    this._isDirected = e.has(f, "directed") ? f.directed : !0, this._isMultigraph = e.has(f, "multigraph") ? f.multigraph : !1, this._isCompound = e.has(f, "compound") ? f.compound : !1, this._label = void 0, this._defaultNodeLabelFn = e.constant(void 0), this._defaultEdgeLabelFn = e.constant(void 0), this._nodes = {}, this._isCompound && (this._parent = {}, this._children = {}, this._children[r] = {}), this._in = {}, this._preds = {}, this._out = {}, this._sucs = {}, this._edgeObjs = {}, this._edgeLabels = {};
  }
  i.prototype._nodeCount = 0, i.prototype._edgeCount = 0, i.prototype.isDirected = function() {
    return this._isDirected;
  }, i.prototype.isMultigraph = function() {
    return this._isMultigraph;
  }, i.prototype.isCompound = function() {
    return this._isCompound;
  }, i.prototype.setGraph = function(f) {
    return this._label = f, this;
  }, i.prototype.graph = function() {
    return this._label;
  }, i.prototype.setDefaultNodeLabel = function(f) {
    return e.isFunction(f) || (f = e.constant(f)), this._defaultNodeLabelFn = f, this;
  }, i.prototype.nodeCount = function() {
    return this._nodeCount;
  }, i.prototype.nodes = function() {
    return e.keys(this._nodes);
  }, i.prototype.sources = function() {
    var f = this;
    return e.filter(this.nodes(), function(l) {
      return e.isEmpty(f._in[l]);
    });
  }, i.prototype.sinks = function() {
    var f = this;
    return e.filter(this.nodes(), function(l) {
      return e.isEmpty(f._out[l]);
    });
  }, i.prototype.setNodes = function(f, l) {
    var d = arguments, h = this;
    return e.each(f, function(m) {
      d.length > 1 ? h.setNode(m, l) : h.setNode(m);
    }), this;
  }, i.prototype.setNode = function(f, l) {
    return e.has(this._nodes, f) ? (arguments.length > 1 && (this._nodes[f] = l), this) : (this._nodes[f] = arguments.length > 1 ? l : this._defaultNodeLabelFn(f), this._isCompound && (this._parent[f] = r, this._children[f] = {}, this._children[r][f] = !0), this._in[f] = {}, this._preds[f] = {}, this._out[f] = {}, this._sucs[f] = {}, ++this._nodeCount, this);
  }, i.prototype.node = function(f) {
    return this._nodes[f];
  }, i.prototype.hasNode = function(f) {
    return e.has(this._nodes, f);
  }, i.prototype.removeNode = function(f) {
    var l = this;
    if (e.has(this._nodes, f)) {
      var d = function(h) {
        l.removeEdge(l._edgeObjs[h]);
      };
      delete this._nodes[f], this._isCompound && (this._removeFromParentsChildList(f), delete this._parent[f], e.each(this.children(f), function(h) {
        l.setParent(h);
      }), delete this._children[f]), e.each(e.keys(this._in[f]), d), delete this._in[f], delete this._preds[f], e.each(e.keys(this._out[f]), d), delete this._out[f], delete this._sucs[f], --this._nodeCount;
    }
    return this;
  }, i.prototype.setParent = function(f, l) {
    if (!this._isCompound)
      throw new Error("Cannot set parent in a non-compound graph");
    if (e.isUndefined(l))
      l = r;
    else {
      l += "";
      for (var d = l; !e.isUndefined(d); d = this.parent(d))
        if (d === f)
          throw new Error("Setting " + l + " as parent of " + f + " would create a cycle");
      this.setNode(l);
    }
    return this.setNode(f), this._removeFromParentsChildList(f), this._parent[f] = l, this._children[l][f] = !0, this;
  }, i.prototype._removeFromParentsChildList = function(f) {
    delete this._children[this._parent[f]][f];
  }, i.prototype.parent = function(f) {
    if (this._isCompound) {
      var l = this._parent[f];
      if (l !== r)
        return l;
    }
  }, i.prototype.children = function(f) {
    if (e.isUndefined(f) && (f = r), this._isCompound) {
      var l = this._children[f];
      if (l)
        return e.keys(l);
    } else {
      if (f === r)
        return this.nodes();
      if (this.hasNode(f))
        return [];
    }
  }, i.prototype.predecessors = function(f) {
    var l = this._preds[f];
    if (l)
      return e.keys(l);
  }, i.prototype.successors = function(f) {
    var l = this._sucs[f];
    if (l)
      return e.keys(l);
  }, i.prototype.neighbors = function(f) {
    var l = this.predecessors(f);
    if (l)
      return e.union(l, this.successors(f));
  }, i.prototype.isLeaf = function(f) {
    var l;
    return this.isDirected() ? l = this.successors(f) : l = this.neighbors(f), l.length === 0;
  }, i.prototype.filterNodes = function(f) {
    var l = new this.constructor({
      directed: this._isDirected,
      multigraph: this._isMultigraph,
      compound: this._isCompound
    });
    l.setGraph(this.graph());
    var d = this;
    e.each(this._nodes, function(p, v) {
      f(v) && l.setNode(v, p);
    }), e.each(this._edgeObjs, function(p) {
      l.hasNode(p.v) && l.hasNode(p.w) && l.setEdge(p, d.edge(p));
    });
    var h = {};
    function m(p) {
      var v = d.parent(p);
      return v === void 0 || l.hasNode(v) ? (h[p] = v, v) : v in h ? h[v] : m(v);
    }
    return this._isCompound && e.each(l.nodes(), function(p) {
      l.setParent(p, m(p));
    }), l;
  }, i.prototype.setDefaultEdgeLabel = function(f) {
    return e.isFunction(f) || (f = e.constant(f)), this._defaultEdgeLabelFn = f, this;
  }, i.prototype.edgeCount = function() {
    return this._edgeCount;
  }, i.prototype.edges = function() {
    return e.values(this._edgeObjs);
  }, i.prototype.setPath = function(f, l) {
    var d = this, h = arguments;
    return e.reduce(f, function(m, p) {
      return h.length > 1 ? d.setEdge(m, p, l) : d.setEdge(m, p), p;
    }), this;
  }, i.prototype.setEdge = function() {
    var f, l, d, h, m = !1, p = arguments[0];
    typeof p == "object" && p !== null && "v" in p ? (f = p.v, l = p.w, d = p.name, arguments.length === 2 && (h = arguments[1], m = !0)) : (f = p, l = arguments[1], d = arguments[3], arguments.length > 2 && (h = arguments[2], m = !0)), f = "" + f, l = "" + l, e.isUndefined(d) || (d = "" + d);
    var v = s(this._isDirected, f, l, d);
    if (e.has(this._edgeLabels, v))
      return m && (this._edgeLabels[v] = h), this;
    if (!e.isUndefined(d) && !this._isMultigraph)
      throw new Error("Cannot set a named edge when isMultigraph = false");
    this.setNode(f), this.setNode(l), this._edgeLabels[v] = m ? h : this._defaultEdgeLabelFn(f, l, d);
    var y = c(this._isDirected, f, l, d);
    return f = y.v, l = y.w, Object.freeze(y), this._edgeObjs[v] = y, a(this._preds[l], f), a(this._sucs[f], l), this._in[l][v] = y, this._out[f][v] = y, this._edgeCount++, this;
  }, i.prototype.edge = function(f, l, d) {
    var h = arguments.length === 1 ? u(this._isDirected, arguments[0]) : s(this._isDirected, f, l, d);
    return this._edgeLabels[h];
  }, i.prototype.hasEdge = function(f, l, d) {
    var h = arguments.length === 1 ? u(this._isDirected, arguments[0]) : s(this._isDirected, f, l, d);
    return e.has(this._edgeLabels, h);
  }, i.prototype.removeEdge = function(f, l, d) {
    var h = arguments.length === 1 ? u(this._isDirected, arguments[0]) : s(this._isDirected, f, l, d), m = this._edgeObjs[h];
    return m && (f = m.v, l = m.w, delete this._edgeLabels[h], delete this._edgeObjs[h], o(this._preds[l], f), o(this._sucs[f], l), delete this._in[l][h], delete this._out[f][h], this._edgeCount--), this;
  }, i.prototype.inEdges = function(f, l) {
    var d = this._in[f];
    if (d) {
      var h = e.values(d);
      return l ? e.filter(h, function(m) {
        return m.v === l;
      }) : h;
    }
  }, i.prototype.outEdges = function(f, l) {
    var d = this._out[f];
    if (d) {
      var h = e.values(d);
      return l ? e.filter(h, function(m) {
        return m.w === l;
      }) : h;
    }
  }, i.prototype.nodeEdges = function(f, l) {
    var d = this.inEdges(f, l);
    if (d)
      return d.concat(this.outEdges(f, l));
  };
  function a(f, l) {
    f[l] ? f[l]++ : f[l] = 1;
  }
  function o(f, l) {
    --f[l] || delete f[l];
  }
  function s(f, l, d, h) {
    var m = "" + l, p = "" + d;
    if (!f && m > p) {
      var v = m;
      m = p, p = v;
    }
    return m + n + p + n + (e.isUndefined(h) ? t : h);
  }
  function c(f, l, d, h) {
    var m = "" + l, p = "" + d;
    if (!f && m > p) {
      var v = m;
      m = p, p = v;
    }
    var y = { v: m, w: p };
    return h && (y.name = h), y;
  }
  function u(f, l) {
    return s(f, l.v, l.w, l.name);
  }
  return ps;
}
var gs, Hp;
function oR() {
  return Hp || (Hp = 1, gs = "2.1.8"), gs;
}
var vs, zp;
function sR() {
  return zp || (zp = 1, vs = {
    Graph: Zc(),
    version: oR()
  }), vs;
}
var ys, Gp;
function uR() {
  if (Gp) return ys;
  Gp = 1;
  var e = Ge(), t = Zc();
  ys = {
    write: r,
    read: a
  };
  function r(o) {
    var s = {
      options: {
        directed: o.isDirected(),
        multigraph: o.isMultigraph(),
        compound: o.isCompound()
      },
      nodes: n(o),
      edges: i(o)
    };
    return e.isUndefined(o.graph()) || (s.value = e.clone(o.graph())), s;
  }
  function n(o) {
    return e.map(o.nodes(), function(s) {
      var c = o.node(s), u = o.parent(s), f = { v: s };
      return e.isUndefined(c) || (f.value = c), e.isUndefined(u) || (f.parent = u), f;
    });
  }
  function i(o) {
    return e.map(o.edges(), function(s) {
      var c = o.edge(s), u = { v: s.v, w: s.w };
      return e.isUndefined(s.name) || (u.name = s.name), e.isUndefined(c) || (u.value = c), u;
    });
  }
  function a(o) {
    var s = new t(o.options).setGraph(o.value);
    return e.each(o.nodes, function(c) {
      s.setNode(c.v, c.value), c.parent && s.setParent(c.v, c.parent);
    }), e.each(o.edges, function(c) {
      s.setEdge({ v: c.v, w: c.w, name: c.name }, c.value);
    }), s;
  }
  return ys;
}
var ms, Up;
function cR() {
  if (Up) return ms;
  Up = 1;
  var e = Ge();
  ms = t;
  function t(r) {
    var n = {}, i = [], a;
    function o(s) {
      e.has(n, s) || (n[s] = !0, a.push(s), e.each(r.successors(s), o), e.each(r.predecessors(s), o));
    }
    return e.each(r.nodes(), function(s) {
      a = [], o(s), a.length && i.push(a);
    }), i;
  }
  return ms;
}
var _s, Vp;
function Bm() {
  if (Vp) return _s;
  Vp = 1;
  var e = Ge();
  _s = t;
  function t() {
    this._arr = [], this._keyIndices = {};
  }
  return t.prototype.size = function() {
    return this._arr.length;
  }, t.prototype.keys = function() {
    return this._arr.map(function(r) {
      return r.key;
    });
  }, t.prototype.has = function(r) {
    return e.has(this._keyIndices, r);
  }, t.prototype.priority = function(r) {
    var n = this._keyIndices[r];
    if (n !== void 0)
      return this._arr[n].priority;
  }, t.prototype.min = function() {
    if (this.size() === 0)
      throw new Error("Queue underflow");
    return this._arr[0].key;
  }, t.prototype.add = function(r, n) {
    var i = this._keyIndices;
    if (r = String(r), !e.has(i, r)) {
      var a = this._arr, o = a.length;
      return i[r] = o, a.push({ key: r, priority: n }), this._decrease(o), !0;
    }
    return !1;
  }, t.prototype.removeMin = function() {
    this._swap(0, this._arr.length - 1);
    var r = this._arr.pop();
    return delete this._keyIndices[r.key], this._heapify(0), r.key;
  }, t.prototype.decrease = function(r, n) {
    var i = this._keyIndices[r];
    if (n > this._arr[i].priority)
      throw new Error("New priority is greater than current priority. Key: " + r + " Old: " + this._arr[i].priority + " New: " + n);
    this._arr[i].priority = n, this._decrease(i);
  }, t.prototype._heapify = function(r) {
    var n = this._arr, i = 2 * r, a = i + 1, o = r;
    i < n.length && (o = n[i].priority < n[o].priority ? i : o, a < n.length && (o = n[a].priority < n[o].priority ? a : o), o !== r && (this._swap(r, o), this._heapify(o)));
  }, t.prototype._decrease = function(r) {
    for (var n = this._arr, i = n[r].priority, a; r !== 0 && (a = r >> 1, !(n[a].priority < i)); )
      this._swap(r, a), r = a;
  }, t.prototype._swap = function(r, n) {
    var i = this._arr, a = this._keyIndices, o = i[r], s = i[n];
    i[r] = s, i[n] = o, a[s.key] = r, a[o.key] = n;
  }, _s;
}
var bs, Yp;
function jm() {
  if (Yp) return bs;
  Yp = 1;
  var e = Ge(), t = Bm();
  bs = n;
  var r = e.constant(1);
  function n(a, o, s, c) {
    return i(
      a,
      String(o),
      s || r,
      c || function(u) {
        return a.outEdges(u);
      }
    );
  }
  function i(a, o, s, c) {
    var u = {}, f = new t(), l, d, h = function(m) {
      var p = m.v !== l ? m.v : m.w, v = u[p], y = s(m), b = d.distance + y;
      if (y < 0)
        throw new Error("dijkstra does not allow negative edge weights. Bad edge: " + m + " Weight: " + y);
      b < v.distance && (v.distance = b, v.predecessor = l, f.decrease(p, b));
    };
    for (a.nodes().forEach(function(m) {
      var p = m === o ? 0 : Number.POSITIVE_INFINITY;
      u[m] = { distance: p }, f.add(m, p);
    }); f.size() > 0 && (l = f.removeMin(), d = u[l], d.distance !== Number.POSITIVE_INFINITY); )
      c(l).forEach(h);
    return u;
  }
  return bs;
}
var ws, Kp;
function fR() {
  if (Kp) return ws;
  Kp = 1;
  var e = jm(), t = Ge();
  ws = r;
  function r(n, i, a) {
    return t.transform(n.nodes(), function(o, s) {
      o[s] = e(n, s, i, a);
    }, {});
  }
  return ws;
}
var Es, Wp;
function Hm() {
  if (Wp) return Es;
  Wp = 1;
  var e = Ge();
  Es = t;
  function t(r) {
    var n = 0, i = [], a = {}, o = [];
    function s(c) {
      var u = a[c] = {
        onStack: !0,
        lowlink: n,
        index: n++
      };
      if (i.push(c), r.successors(c).forEach(function(d) {
        e.has(a, d) ? a[d].onStack && (u.lowlink = Math.min(u.lowlink, a[d].index)) : (s(d), u.lowlink = Math.min(u.lowlink, a[d].lowlink));
      }), u.lowlink === u.index) {
        var f = [], l;
        do
          l = i.pop(), a[l].onStack = !1, f.push(l);
        while (c !== l);
        o.push(f);
      }
    }
    return r.nodes().forEach(function(c) {
      e.has(a, c) || s(c);
    }), o;
  }
  return Es;
}
var Ss, Xp;
function lR() {
  if (Xp) return Ss;
  Xp = 1;
  var e = Ge(), t = Hm();
  Ss = r;
  function r(n) {
    return e.filter(t(n), function(i) {
      return i.length > 1 || i.length === 1 && n.hasEdge(i[0], i[0]);
    });
  }
  return Ss;
}
var xs, Zp;
function dR() {
  if (Zp) return xs;
  Zp = 1;
  var e = Ge();
  xs = r;
  var t = e.constant(1);
  function r(i, a, o) {
    return n(
      i,
      a || t,
      o || function(s) {
        return i.outEdges(s);
      }
    );
  }
  function n(i, a, o) {
    var s = {}, c = i.nodes();
    return c.forEach(function(u) {
      s[u] = {}, s[u][u] = { distance: 0 }, c.forEach(function(f) {
        u !== f && (s[u][f] = { distance: Number.POSITIVE_INFINITY });
      }), o(u).forEach(function(f) {
        var l = f.v === u ? f.w : f.v, d = a(f);
        s[u][l] = { distance: d, predecessor: u };
      });
    }), c.forEach(function(u) {
      var f = s[u];
      c.forEach(function(l) {
        var d = s[l];
        c.forEach(function(h) {
          var m = d[u], p = f[h], v = d[h], y = m.distance + p.distance;
          y < v.distance && (v.distance = y, v.predecessor = p.predecessor);
        });
      });
    }), s;
  }
  return xs;
}
var Rs, Qp;
function zm() {
  if (Qp) return Rs;
  Qp = 1;
  var e = Ge();
  Rs = t, t.CycleException = r;
  function t(n) {
    var i = {}, a = {}, o = [];
    function s(c) {
      if (e.has(a, c))
        throw new r();
      e.has(i, c) || (a[c] = !0, i[c] = !0, e.each(n.predecessors(c), s), delete a[c], o.push(c));
    }
    if (e.each(n.sinks(), s), e.size(i) !== n.nodeCount())
      throw new r();
    return o;
  }
  function r() {
  }
  return r.prototype = new Error(), Rs;
}
var Ts, Jp;
function hR() {
  if (Jp) return Ts;
  Jp = 1;
  var e = zm();
  Ts = t;
  function t(r) {
    try {
      e(r);
    } catch (n) {
      if (n instanceof e.CycleException)
        return !1;
      throw n;
    }
    return !0;
  }
  return Ts;
}
var As, eg;
function Gm() {
  if (eg) return As;
  eg = 1;
  var e = Ge();
  As = t;
  function t(n, i, a) {
    e.isArray(i) || (i = [i]);
    var o = (n.isDirected() ? n.successors : n.neighbors).bind(n), s = [], c = {};
    return e.each(i, function(u) {
      if (!n.hasNode(u))
        throw new Error("Graph does not have node: " + u);
      r(n, u, a === "post", c, o, s);
    }), s;
  }
  function r(n, i, a, o, s, c) {
    e.has(o, i) || (o[i] = !0, a || c.push(i), e.each(s(i), function(u) {
      r(n, u, a, o, s, c);
    }), a && c.push(i));
  }
  return As;
}
var Cs, tg;
function pR() {
  if (tg) return Cs;
  tg = 1;
  var e = Gm();
  Cs = t;
  function t(r, n) {
    return e(r, n, "post");
  }
  return Cs;
}
var Os, rg;
function gR() {
  if (rg) return Os;
  rg = 1;
  var e = Gm();
  Os = t;
  function t(r, n) {
    return e(r, n, "pre");
  }
  return Os;
}
var qs, ng;
function vR() {
  if (ng) return qs;
  ng = 1;
  var e = Ge(), t = Zc(), r = Bm();
  qs = n;
  function n(i, a) {
    var o = new t(), s = {}, c = new r(), u;
    function f(d) {
      var h = d.v === u ? d.w : d.v, m = c.priority(h);
      if (m !== void 0) {
        var p = a(d);
        p < m && (s[h] = u, c.decrease(h, p));
      }
    }
    if (i.nodeCount() === 0)
      return o;
    e.each(i.nodes(), function(d) {
      c.add(d, Number.POSITIVE_INFINITY), o.setNode(d);
    }), c.decrease(i.nodes()[0], 0);
    for (var l = !1; c.size() > 0; ) {
      if (u = c.removeMin(), e.has(s, u))
        o.setEdge(u, s[u]);
      else {
        if (l)
          throw new Error("Input graph is not connected: " + i);
        l = !0;
      }
      i.nodeEdges(u).forEach(f);
    }
    return o;
  }
  return qs;
}
var Ns, ig;
function yR() {
  return ig || (ig = 1, Ns = {
    components: cR(),
    dijkstra: jm(),
    dijkstraAll: fR(),
    findCycles: lR(),
    floydWarshall: dR(),
    isAcyclic: hR(),
    postorder: pR(),
    preorder: gR(),
    prim: vR(),
    tarjan: Hm(),
    topsort: zm()
  }), Ns;
}
var Is, ag;
function mR() {
  if (ag) return Is;
  ag = 1;
  var e = sR();
  return Is = {
    Graph: e.Graph,
    json: uR(),
    alg: yR(),
    version: e.version
  }, Is;
}
var Ms, og;
function Ze() {
  if (og) return Ms;
  og = 1;
  var e;
  if (typeof kc == "function")
    try {
      e = mR();
    } catch {
    }
  return e || (e = window.graphlib), Ms = e, Ms;
}
var Ps, sg;
function _R() {
  if (sg) return Ps;
  sg = 1;
  var e = gm(), t = 1, r = 4;
  function n(i) {
    return e(i, t | r);
  }
  return Ps = n, Ps;
}
var ks, ug;
function bn() {
  if (ug) return ks;
  ug = 1;
  var e = Ht(), t = ut(), r = ln(), n = ze();
  function i(a, o, s) {
    if (!n(s))
      return !1;
    var c = typeof o;
    return (c == "number" ? t(s) && r(o, s.length) : c == "string" && o in s) ? e(s[o], a) : !1;
  }
  return ks = i, ks;
}
var Ds, cg;
function bR() {
  if (cg) return Ds;
  cg = 1;
  var e = _n(), t = Ht(), r = bn(), n = At(), i = Object.prototype, a = i.hasOwnProperty, o = e(function(s, c) {
    s = Object(s);
    var u = -1, f = c.length, l = f > 2 ? c[2] : void 0;
    for (l && r(c[0], c[1], l) && (f = 1); ++u < f; )
      for (var d = c[u], h = n(d), m = -1, p = h.length; ++m < p; ) {
        var v = h[m], y = s[v];
        (y === void 0 || t(y, i[v]) && !a.call(s, v)) && (s[v] = d[v]);
      }
    return s;
  });
  return Ds = o, Ds;
}
var Ls, fg;
function wR() {
  if (fg) return Ls;
  fg = 1;
  var e = ct(), t = ut(), r = mt();
  function n(i) {
    return function(a, o, s) {
      var c = Object(a);
      if (!t(a)) {
        var u = e(o, 3);
        a = r(a), o = function(l) {
          return u(c[l], l, c);
        };
      }
      var f = i(a, o, s);
      return f > -1 ? c[u ? a[f] : f] : void 0;
    };
  }
  return Ls = n, Ls;
}
var $s, lg;
function ER() {
  if (lg) return $s;
  lg = 1;
  var e = /\s/;
  function t(r) {
    for (var n = r.length; n-- && e.test(r.charAt(n)); )
      ;
    return n;
  }
  return $s = t, $s;
}
var Fs, dg;
function SR() {
  if (dg) return Fs;
  dg = 1;
  var e = ER(), t = /^\s+/;
  function r(n) {
    return n && n.slice(0, e(n) + 1).replace(t, "");
  }
  return Fs = r, Fs;
}
var Bs, hg;
function xR() {
  if (hg) return Bs;
  hg = 1;
  var e = SR(), t = ze(), r = Vt(), n = NaN, i = /^[-+]0x[0-9a-f]+$/i, a = /^0b[01]+$/i, o = /^0o[0-7]+$/i, s = parseInt;
  function c(u) {
    if (typeof u == "number")
      return u;
    if (r(u))
      return n;
    if (t(u)) {
      var f = typeof u.valueOf == "function" ? u.valueOf() : u;
      u = t(f) ? f + "" : f;
    }
    if (typeof u != "string")
      return u === 0 ? u : +u;
    u = e(u);
    var l = a.test(u);
    return l || o.test(u) ? s(u.slice(2), l ? 2 : 8) : i.test(u) ? n : +u;
  }
  return Bs = c, Bs;
}
var js, pg;
function Um() {
  if (pg) return js;
  pg = 1;
  var e = xR(), t = 1 / 0, r = 17976931348623157e292;
  function n(i) {
    if (!i)
      return i === 0 ? i : 0;
    if (i = e(i), i === t || i === -1 / 0) {
      var a = i < 0 ? -1 : 1;
      return a * r;
    }
    return i === i ? i : 0;
  }
  return js = n, js;
}
var Hs, gg;
function RR() {
  if (gg) return Hs;
  gg = 1;
  var e = Um();
  function t(r) {
    var n = e(r), i = n % 1;
    return n === n ? i ? n - i : n : 0;
  }
  return Hs = t, Hs;
}
var zs, vg;
function TR() {
  if (vg) return zs;
  vg = 1;
  var e = Lm(), t = ct(), r = RR(), n = Math.max;
  function i(a, o, s) {
    var c = a == null ? 0 : a.length;
    if (!c)
      return -1;
    var u = s == null ? 0 : r(s);
    return u < 0 && (u = n(c + u, 0)), e(a, t(o, 3), u);
  }
  return zs = i, zs;
}
var Gs, yg;
function AR() {
  if (yg) return Gs;
  yg = 1;
  var e = wR(), t = TR(), r = e(t);
  return Gs = r, Gs;
}
var Us, mg;
function Vm() {
  if (mg) return Us;
  mg = 1;
  var e = Xc();
  function t(r) {
    var n = r == null ? 0 : r.length;
    return n ? e(r, 1) : [];
  }
  return Us = t, Us;
}
var Vs, _g;
function CR() {
  if (_g) return Vs;
  _g = 1;
  var e = Vc(), t = vm(), r = At();
  function n(i, a) {
    return i == null ? i : e(i, t(a), r);
  }
  return Vs = n, Vs;
}
var Ys, bg;
function OR() {
  if (bg) return Ys;
  bg = 1;
  function e(t) {
    var r = t == null ? 0 : t.length;
    return r ? t[r - 1] : void 0;
  }
  return Ys = e, Ys;
}
var Ks, wg;
function qR() {
  if (wg) return Ks;
  wg = 1;
  var e = cn(), t = Yc(), r = ct();
  function n(i, a) {
    var o = {};
    return a = r(a, 3), t(i, function(s, c, u) {
      e(o, c, a(s, c, u));
    }), o;
  }
  return Ks = n, Ks;
}
var Ws, Eg;
function Qc() {
  if (Eg) return Ws;
  Eg = 1;
  var e = Vt();
  function t(r, n, i) {
    for (var a = -1, o = r.length; ++a < o; ) {
      var s = r[a], c = n(s);
      if (c != null && (u === void 0 ? c === c && !e(c) : i(c, u)))
        var u = c, f = s;
    }
    return f;
  }
  return Ws = t, Ws;
}
var Xs, Sg;
function NR() {
  if (Sg) return Xs;
  Sg = 1;
  function e(t, r) {
    return t > r;
  }
  return Xs = e, Xs;
}
var Zs, xg;
function IR() {
  if (xg) return Zs;
  xg = 1;
  var e = Qc(), t = NR(), r = Ct();
  function n(i) {
    return i && i.length ? e(i, r, t) : void 0;
  }
  return Zs = n, Zs;
}
var Qs, Rg;
function Ym() {
  if (Rg) return Qs;
  Rg = 1;
  var e = cn(), t = Ht();
  function r(n, i, a) {
    (a !== void 0 && !t(n[i], a) || a === void 0 && !(i in n)) && e(n, i, a);
  }
  return Qs = r, Qs;
}
var Js, Tg;
function MR() {
  if (Tg) return Js;
  Tg = 1;
  var e = Rt(), t = pn(), r = it(), n = "[object Object]", i = Function.prototype, a = Object.prototype, o = i.toString, s = a.hasOwnProperty, c = o.call(Object);
  function u(f) {
    if (!r(f) || e(f) != n)
      return !1;
    var l = t(f);
    if (l === null)
      return !0;
    var d = s.call(l, "constructor") && l.constructor;
    return typeof d == "function" && d instanceof d && o.call(d) == c;
  }
  return Js = u, Js;
}
var eu, Ag;
function Km() {
  if (Ag) return eu;
  Ag = 1;
  function e(t, r) {
    if (!(r === "constructor" && typeof t[r] == "function") && r != "__proto__")
      return t[r];
  }
  return eu = e, eu;
}
var tu, Cg;
function PR() {
  if (Cg) return tu;
  Cg = 1;
  var e = yr(), t = At();
  function r(n) {
    return e(n, t(n));
  }
  return tu = r, tu;
}
var ru, Og;
function kR() {
  if (Og) return ru;
  Og = 1;
  var e = Ym(), t = nm(), r = dm(), n = im(), i = pm(), a = mr(), o = xe(), s = $m(), c = Gt(), u = vr(), f = ze(), l = MR(), d = _r(), h = Km(), m = PR();
  function p(v, y, b, E, w, x, R) {
    var T = h(v, b), N = h(y, b), O = R.get(N);
    if (O) {
      e(v, b, O);
      return;
    }
    var k = x ? x(T, N, b + "", v, y, R) : void 0, q = k === void 0;
    if (q) {
      var j = o(N), B = !j && c(N), S = !j && !B && d(N);
      k = N, j || B || S ? o(T) ? k = T : s(T) ? k = n(T) : B ? (q = !1, k = t(N, !0)) : S ? (q = !1, k = r(N, !0)) : k = [] : l(N) || a(N) ? (k = T, a(T) ? k = m(T) : (!f(T) || u(T)) && (k = i(N))) : q = !1;
    }
    q && (R.set(N, k), w(k, N, E, x, R), R.delete(N)), e(v, b, k);
  }
  return ru = p, ru;
}
var nu, qg;
function DR() {
  if (qg) return nu;
  qg = 1;
  var e = un(), t = Ym(), r = Vc(), n = kR(), i = ze(), a = At(), o = Km();
  function s(c, u, f, l, d) {
    c !== u && r(u, function(h, m) {
      if (d || (d = new e()), i(h))
        n(c, u, m, f, s, l, d);
      else {
        var p = l ? l(o(c, m), h, m + "", c, u, d) : void 0;
        p === void 0 && (p = h), t(c, m, p);
      }
    }, a);
  }
  return nu = s, nu;
}
var iu, Ng;
function LR() {
  if (Ng) return iu;
  Ng = 1;
  var e = _n(), t = bn();
  function r(n) {
    return e(function(i, a) {
      var o = -1, s = a.length, c = s > 1 ? a[s - 1] : void 0, u = s > 2 ? a[2] : void 0;
      for (c = n.length > 3 && typeof c == "function" ? (s--, c) : void 0, u && t(a[0], a[1], u) && (c = s < 3 ? void 0 : c, s = 1), i = Object(i); ++o < s; ) {
        var f = a[o];
        f && n(i, f, o, c);
      }
      return i;
    });
  }
  return iu = r, iu;
}
var au, Ig;
function $R() {
  if (Ig) return au;
  Ig = 1;
  var e = DR(), t = LR(), r = t(function(n, i, a) {
    e(n, i, a);
  });
  return au = r, au;
}
var ou, Mg;
function Wm() {
  if (Mg) return ou;
  Mg = 1;
  function e(t, r) {
    return t < r;
  }
  return ou = e, ou;
}
var su, Pg;
function FR() {
  if (Pg) return su;
  Pg = 1;
  var e = Qc(), t = Wm(), r = Ct();
  function n(i) {
    return i && i.length ? e(i, r, t) : void 0;
  }
  return su = n, su;
}
var uu, kg;
function BR() {
  if (kg) return uu;
  kg = 1;
  var e = Qc(), t = ct(), r = Wm();
  function n(i, a) {
    return i && i.length ? e(i, t(a, 2), r) : void 0;
  }
  return uu = n, uu;
}
var cu, Dg;
function jR() {
  if (Dg) return cu;
  Dg = 1;
  var e = Je(), t = function() {
    return e.Date.now();
  };
  return cu = t, cu;
}
var fu, Lg;
function HR() {
  if (Lg) return fu;
  Lg = 1;
  var e = fn(), t = yn(), r = ln(), n = ze(), i = br();
  function a(o, s, c, u) {
    if (!n(o))
      return o;
    s = t(s, o);
    for (var f = -1, l = s.length, d = l - 1, h = o; h != null && ++f < l; ) {
      var m = i(s[f]), p = c;
      if (m === "__proto__" || m === "constructor" || m === "prototype")
        return o;
      if (f != d) {
        var v = h[m];
        p = u ? u(v, m, h) : void 0, p === void 0 && (p = n(v) ? v : r(s[f + 1]) ? [] : {});
      }
      e(h, m, p), h = h[m];
    }
    return o;
  }
  return fu = a, fu;
}
var lu, $g;
function zR() {
  if ($g) return lu;
  $g = 1;
  var e = mn(), t = HR(), r = yn();
  function n(i, a, o) {
    for (var s = -1, c = a.length, u = {}; ++s < c; ) {
      var f = a[s], l = e(i, f);
      o(l, f) && t(u, r(f, i), l);
    }
    return u;
  }
  return lu = n, lu;
}
var du, Fg;
function GR() {
  if (Fg) return du;
  Fg = 1;
  var e = zR(), t = Am();
  function r(n, i) {
    return e(n, i, function(a, o) {
      return t(n, o);
    });
  }
  return du = r, du;
}
var hu, Bg;
function UR() {
  if (Bg) return hu;
  Bg = 1;
  var e = Vm(), t = km(), r = Dm();
  function n(i) {
    return r(t(i, void 0, e), i + "");
  }
  return hu = n, hu;
}
var pu, jg;
function VR() {
  if (jg) return pu;
  jg = 1;
  var e = GR(), t = UR(), r = t(function(n, i) {
    return n == null ? {} : e(n, i);
  });
  return pu = r, pu;
}
var gu, Hg;
function YR() {
  if (Hg) return gu;
  Hg = 1;
  var e = Math.ceil, t = Math.max;
  function r(n, i, a, o) {
    for (var s = -1, c = t(e((i - n) / (a || 1)), 0), u = Array(c); c--; )
      u[o ? c : ++s] = n, n += a;
    return u;
  }
  return gu = r, gu;
}
var vu, zg;
function KR() {
  if (zg) return vu;
  zg = 1;
  var e = YR(), t = bn(), r = Um();
  function n(i) {
    return function(a, o, s) {
      return s && typeof s != "number" && t(a, o, s) && (o = s = void 0), a = r(a), o === void 0 ? (o = a, a = 0) : o = r(o), s = s === void 0 ? a < o ? 1 : -1 : r(s), e(a, o, s, i);
    };
  }
  return vu = n, vu;
}
var yu, Gg;
function WR() {
  if (Gg) return yu;
  Gg = 1;
  var e = KR(), t = e();
  return yu = t, yu;
}
var mu, Ug;
function XR() {
  if (Ug) return mu;
  Ug = 1;
  function e(t, r) {
    var n = t.length;
    for (t.sort(r); n--; )
      t[n] = t[n].value;
    return t;
  }
  return mu = e, mu;
}
var _u, Vg;
function ZR() {
  if (Vg) return _u;
  Vg = 1;
  var e = Vt();
  function t(r, n) {
    if (r !== n) {
      var i = r !== void 0, a = r === null, o = r === r, s = e(r), c = n !== void 0, u = n === null, f = n === n, l = e(n);
      if (!u && !l && !s && r > n || s && c && f && !u && !l || a && c && f || !i && f || !o)
        return 1;
      if (!a && !s && !l && r < n || l && i && o && !a && !s || u && i && o || !c && o || !f)
        return -1;
    }
    return 0;
  }
  return _u = t, _u;
}
var bu, Yg;
function QR() {
  if (Yg) return bu;
  Yg = 1;
  var e = ZR();
  function t(r, n, i) {
    for (var a = -1, o = r.criteria, s = n.criteria, c = o.length, u = i.length; ++a < c; ) {
      var f = e(o[a], s[a]);
      if (f) {
        if (a >= u)
          return f;
        var l = i[a];
        return f * (l == "desc" ? -1 : 1);
      }
    }
    return r.index - n.index;
  }
  return bu = t, bu;
}
var wu, Kg;
function JR() {
  if (Kg) return wu;
  Kg = 1;
  var e = vn(), t = mn(), r = ct(), n = Im(), i = XR(), a = dn(), o = QR(), s = Ct(), c = xe();
  function u(f, l, d) {
    l.length ? l = e(l, function(p) {
      return c(p) ? function(v) {
        return t(v, p.length === 1 ? p[0] : p);
      } : p;
    }) : l = [s];
    var h = -1;
    l = e(l, a(r));
    var m = n(f, function(p, v, y) {
      var b = e(l, function(E) {
        return E(p);
      });
      return { criteria: b, index: ++h, value: p };
    });
    return i(m, function(p, v) {
      return o(p, v, d);
    });
  }
  return wu = u, wu;
}
var Eu, Wg;
function eT() {
  if (Wg) return Eu;
  Wg = 1;
  var e = Xc(), t = JR(), r = _n(), n = bn(), i = r(function(a, o) {
    if (a == null)
      return [];
    var s = o.length;
    return s > 1 && n(a, o[0], o[1]) ? o = [] : s > 2 && n(o[0], o[1], o[2]) && (o = [o[0]]), t(a, e(o, 1), []);
  });
  return Eu = i, Eu;
}
var Su, Xg;
function tT() {
  if (Xg) return Su;
  Xg = 1;
  var e = Rm(), t = 0;
  function r(n) {
    var i = ++t;
    return e(n) + i;
  }
  return Su = r, Su;
}
var xu, Zg;
function rT() {
  if (Zg) return xu;
  Zg = 1;
  function e(t, r, n) {
    for (var i = -1, a = t.length, o = r.length, s = {}; ++i < a; ) {
      var c = i < o ? r[i] : void 0;
      n(s, t[i], c);
    }
    return s;
  }
  return xu = e, xu;
}
var Ru, Qg;
function nT() {
  if (Qg) return Ru;
  Qg = 1;
  var e = fn(), t = rT();
  function r(n, i) {
    return t(n || [], i || [], e);
  }
  return Ru = r, Ru;
}
var Tu, Jg;
function ve() {
  if (Jg) return Tu;
  Jg = 1;
  var e;
  if (typeof kc == "function")
    try {
      e = {
        cloneDeep: _R(),
        constant: Uc(),
        defaults: bR(),
        each: mm(),
        filter: Om(),
        find: AR(),
        flatten: Vm(),
        forEach: ym(),
        forIn: CR(),
        has: qm(),
        isUndefined: Nm(),
        last: OR(),
        map: Mm(),
        mapValues: qR(),
        max: IR(),
        merge: $R(),
        min: FR(),
        minBy: BR(),
        now: jR(),
        pick: VR(),
        range: WR(),
        reduce: Pm(),
        sortBy: eT(),
        uniqueId: tT(),
        values: Fm(),
        zipObject: nT()
      };
    } catch {
    }
  return e || (e = window._), Tu = e, Tu;
}
var Au, ev;
function iT() {
  if (ev) return Au;
  ev = 1, Au = e;
  function e() {
    var n = {};
    n._next = n._prev = n, this._sentinel = n;
  }
  e.prototype.dequeue = function() {
    var n = this._sentinel, i = n._prev;
    if (i !== n)
      return t(i), i;
  }, e.prototype.enqueue = function(n) {
    var i = this._sentinel;
    n._prev && n._next && t(n), n._next = i._next, i._next._prev = n, i._next = n, n._prev = i;
  }, e.prototype.toString = function() {
    for (var n = [], i = this._sentinel, a = i._prev; a !== i; )
      n.push(JSON.stringify(a, r)), a = a._prev;
    return "[" + n.join(", ") + "]";
  };
  function t(n) {
    n._prev._next = n._next, n._next._prev = n._prev, delete n._next, delete n._prev;
  }
  function r(n, i) {
    if (n !== "_next" && n !== "_prev")
      return i;
  }
  return Au;
}
var Cu, tv;
function aT() {
  if (tv) return Cu;
  tv = 1;
  var e = ve(), t = Ze().Graph, r = iT();
  Cu = i;
  var n = e.constant(1);
  function i(u, f) {
    if (u.nodeCount() <= 1)
      return [];
    var l = s(u, f || n), d = a(l.graph, l.buckets, l.zeroIdx);
    return e.flatten(e.map(d, function(h) {
      return u.outEdges(h.v, h.w);
    }), !0);
  }
  function a(u, f, l) {
    for (var d = [], h = f[f.length - 1], m = f[0], p; u.nodeCount(); ) {
      for (; p = m.dequeue(); )
        o(u, f, l, p);
      for (; p = h.dequeue(); )
        o(u, f, l, p);
      if (u.nodeCount()) {
        for (var v = f.length - 2; v > 0; --v)
          if (p = f[v].dequeue(), p) {
            d = d.concat(o(u, f, l, p, !0));
            break;
          }
      }
    }
    return d;
  }
  function o(u, f, l, d, h) {
    var m = h ? [] : void 0;
    return e.forEach(u.inEdges(d.v), function(p) {
      var v = u.edge(p), y = u.node(p.v);
      h && m.push({ v: p.v, w: p.w }), y.out -= v, c(f, l, y);
    }), e.forEach(u.outEdges(d.v), function(p) {
      var v = u.edge(p), y = p.w, b = u.node(y);
      b.in -= v, c(f, l, b);
    }), u.removeNode(d.v), m;
  }
  function s(u, f) {
    var l = new t(), d = 0, h = 0;
    e.forEach(u.nodes(), function(v) {
      l.setNode(v, { v, in: 0, out: 0 });
    }), e.forEach(u.edges(), function(v) {
      var y = l.edge(v.v, v.w) || 0, b = f(v), E = y + b;
      l.setEdge(v.v, v.w, E), h = Math.max(h, l.node(v.v).out += b), d = Math.max(d, l.node(v.w).in += b);
    });
    var m = e.range(h + d + 3).map(function() {
      return new r();
    }), p = d + 1;
    return e.forEach(l.nodes(), function(v) {
      c(m, p, l.node(v));
    }), { graph: l, buckets: m, zeroIdx: p };
  }
  function c(u, f, l) {
    l.out ? l.in ? u[l.out - l.in + f].enqueue(l) : u[u.length - 1].enqueue(l) : u[0].enqueue(l);
  }
  return Cu;
}
var Ou, rv;
function oT() {
  if (rv) return Ou;
  rv = 1;
  var e = ve(), t = aT();
  Ou = {
    run: r,
    undo: i
  };
  function r(a) {
    var o = a.graph().acyclicer === "greedy" ? t(a, s(a)) : n(a);
    e.forEach(o, function(c) {
      var u = a.edge(c);
      a.removeEdge(c), u.forwardName = c.name, u.reversed = !0, a.setEdge(c.w, c.v, u, e.uniqueId("rev"));
    });
    function s(c) {
      return function(u) {
        return c.edge(u).weight;
      };
    }
  }
  function n(a) {
    var o = [], s = {}, c = {};
    function u(f) {
      e.has(c, f) || (c[f] = !0, s[f] = !0, e.forEach(a.outEdges(f), function(l) {
        e.has(s, l.w) ? o.push(l) : u(l.w);
      }), delete s[f]);
    }
    return e.forEach(a.nodes(), u), o;
  }
  function i(a) {
    e.forEach(a.edges(), function(o) {
      var s = a.edge(o);
      if (s.reversed) {
        a.removeEdge(o);
        var c = s.forwardName;
        delete s.reversed, delete s.forwardName, a.setEdge(o.w, o.v, s, c);
      }
    });
  }
  return Ou;
}
var qu, nv;
function De() {
  if (nv) return qu;
  nv = 1;
  var e = ve(), t = Ze().Graph;
  qu = {
    addDummyNode: r,
    simplify: n,
    asNonCompoundGraph: i,
    successorWeights: a,
    predecessorWeights: o,
    intersectRect: s,
    buildLayerMatrix: c,
    normalizeRanks: u,
    removeEmptyRanks: f,
    addBorderNode: l,
    maxRank: d,
    partition: h,
    time: m,
    notime: p
  };
  function r(v, y, b, E) {
    var w;
    do
      w = e.uniqueId(E);
    while (v.hasNode(w));
    return b.dummy = y, v.setNode(w, b), w;
  }
  function n(v) {
    var y = new t().setGraph(v.graph());
    return e.forEach(v.nodes(), function(b) {
      y.setNode(b, v.node(b));
    }), e.forEach(v.edges(), function(b) {
      var E = y.edge(b.v, b.w) || { weight: 0, minlen: 1 }, w = v.edge(b);
      y.setEdge(b.v, b.w, {
        weight: E.weight + w.weight,
        minlen: Math.max(E.minlen, w.minlen)
      });
    }), y;
  }
  function i(v) {
    var y = new t({ multigraph: v.isMultigraph() }).setGraph(v.graph());
    return e.forEach(v.nodes(), function(b) {
      v.children(b).length || y.setNode(b, v.node(b));
    }), e.forEach(v.edges(), function(b) {
      y.setEdge(b, v.edge(b));
    }), y;
  }
  function a(v) {
    var y = e.map(v.nodes(), function(b) {
      var E = {};
      return e.forEach(v.outEdges(b), function(w) {
        E[w.w] = (E[w.w] || 0) + v.edge(w).weight;
      }), E;
    });
    return e.zipObject(v.nodes(), y);
  }
  function o(v) {
    var y = e.map(v.nodes(), function(b) {
      var E = {};
      return e.forEach(v.inEdges(b), function(w) {
        E[w.v] = (E[w.v] || 0) + v.edge(w).weight;
      }), E;
    });
    return e.zipObject(v.nodes(), y);
  }
  function s(v, y) {
    var b = v.x, E = v.y, w = y.x - b, x = y.y - E, R = v.width / 2, T = v.height / 2;
    if (!w && !x)
      throw new Error("Not possible to find intersection inside of the rectangle");
    var N, O;
    return Math.abs(x) * R > Math.abs(w) * T ? (x < 0 && (T = -T), N = T * w / x, O = T) : (w < 0 && (R = -R), N = R, O = R * x / w), { x: b + N, y: E + O };
  }
  function c(v) {
    var y = e.map(e.range(d(v) + 1), function() {
      return [];
    });
    return e.forEach(v.nodes(), function(b) {
      var E = v.node(b), w = E.rank;
      e.isUndefined(w) || (y[w][E.order] = b);
    }), y;
  }
  function u(v) {
    var y = e.min(e.map(v.nodes(), function(b) {
      return v.node(b).rank;
    }));
    e.forEach(v.nodes(), function(b) {
      var E = v.node(b);
      e.has(E, "rank") && (E.rank -= y);
    });
  }
  function f(v) {
    var y = e.min(e.map(v.nodes(), function(x) {
      return v.node(x).rank;
    })), b = [];
    e.forEach(v.nodes(), function(x) {
      var R = v.node(x).rank - y;
      b[R] || (b[R] = []), b[R].push(x);
    });
    var E = 0, w = v.graph().nodeRankFactor;
    e.forEach(b, function(x, R) {
      e.isUndefined(x) && R % w !== 0 ? --E : E && e.forEach(x, function(T) {
        v.node(T).rank += E;
      });
    });
  }
  function l(v, y, b, E) {
    var w = {
      width: 0,
      height: 0
    };
    return arguments.length >= 4 && (w.rank = b, w.order = E), r(v, "border", w, y);
  }
  function d(v) {
    return e.max(e.map(v.nodes(), function(y) {
      var b = v.node(y).rank;
      if (!e.isUndefined(b))
        return b;
    }));
  }
  function h(v, y) {
    var b = { lhs: [], rhs: [] };
    return e.forEach(v, function(E) {
      y(E) ? b.lhs.push(E) : b.rhs.push(E);
    }), b;
  }
  function m(v, y) {
    var b = e.now();
    try {
      return y();
    } finally {
      console.log(v + " time: " + (e.now() - b) + "ms");
    }
  }
  function p(v, y) {
    return y();
  }
  return qu;
}
var Nu, iv;
function sT() {
  if (iv) return Nu;
  iv = 1;
  var e = ve(), t = De();
  Nu = {
    run: r,
    undo: i
  };
  function r(a) {
    a.graph().dummyChains = [], e.forEach(a.edges(), function(o) {
      n(a, o);
    });
  }
  function n(a, o) {
    var s = o.v, c = a.node(s).rank, u = o.w, f = a.node(u).rank, l = o.name, d = a.edge(o), h = d.labelRank;
    if (f !== c + 1) {
      a.removeEdge(o);
      var m, p, v;
      for (v = 0, ++c; c < f; ++v, ++c)
        d.points = [], p = {
          width: 0,
          height: 0,
          edgeLabel: d,
          edgeObj: o,
          rank: c
        }, m = t.addDummyNode(a, "edge", p, "_d"), c === h && (p.width = d.width, p.height = d.height, p.dummy = "edge-label", p.labelpos = d.labelpos), a.setEdge(s, m, { weight: d.weight }, l), v === 0 && a.graph().dummyChains.push(m), s = m;
      a.setEdge(s, u, { weight: d.weight }, l);
    }
  }
  function i(a) {
    e.forEach(a.graph().dummyChains, function(o) {
      var s = a.node(o), c = s.edgeLabel, u;
      for (a.setEdge(s.edgeObj, c); s.dummy; )
        u = a.successors(o)[0], a.removeNode(o), c.points.push({ x: s.x, y: s.y }), s.dummy === "edge-label" && (c.x = s.x, c.y = s.y, c.width = s.width, c.height = s.height), o = u, s = a.node(o);
    });
  }
  return Nu;
}
var Iu, av;
function Xr() {
  if (av) return Iu;
  av = 1;
  var e = ve();
  Iu = {
    longestPath: t,
    slack: r
  };
  function t(n) {
    var i = {};
    function a(o) {
      var s = n.node(o);
      if (e.has(i, o))
        return s.rank;
      i[o] = !0;
      var c = e.min(e.map(n.outEdges(o), function(u) {
        return a(u.w) - n.edge(u).minlen;
      }));
      return (c === Number.POSITIVE_INFINITY || // return value of _.map([]) for Lodash 3
      c === void 0 || // return value of _.map([]) for Lodash 4
      c === null) && (c = 0), s.rank = c;
    }
    e.forEach(n.sources(), a);
  }
  function r(n, i) {
    return n.node(i.w).rank - n.node(i.v).rank - n.edge(i).minlen;
  }
  return Iu;
}
var Mu, ov;
function Xm() {
  if (ov) return Mu;
  ov = 1;
  var e = ve(), t = Ze().Graph, r = Xr().slack;
  Mu = n;
  function n(s) {
    var c = new t({ directed: !1 }), u = s.nodes()[0], f = s.nodeCount();
    c.setNode(u, {});
    for (var l, d; i(c, s) < f; )
      l = a(c, s), d = c.hasNode(l.v) ? r(s, l) : -r(s, l), o(c, s, d);
    return c;
  }
  function i(s, c) {
    function u(f) {
      e.forEach(c.nodeEdges(f), function(l) {
        var d = l.v, h = f === d ? l.w : d;
        !s.hasNode(h) && !r(c, l) && (s.setNode(h, {}), s.setEdge(f, h, {}), u(h));
      });
    }
    return e.forEach(s.nodes(), u), s.nodeCount();
  }
  function a(s, c) {
    return e.minBy(c.edges(), function(u) {
      if (s.hasNode(u.v) !== s.hasNode(u.w))
        return r(c, u);
    });
  }
  function o(s, c, u) {
    e.forEach(s.nodes(), function(f) {
      c.node(f).rank += u;
    });
  }
  return Mu;
}
var Pu, sv;
function uT() {
  if (sv) return Pu;
  sv = 1;
  var e = ve(), t = Xm(), r = Xr().slack, n = Xr().longestPath, i = Ze().alg.preorder, a = Ze().alg.postorder, o = De().simplify;
  Pu = s, s.initLowLimValues = l, s.initCutValues = c, s.calcCutValue = f, s.leaveEdge = h, s.enterEdge = m, s.exchangeEdges = p;
  function s(E) {
    E = o(E), n(E);
    var w = t(E);
    l(w), c(w, E);
    for (var x, R; x = h(w); )
      R = m(w, E, x), p(w, E, x, R);
  }
  function c(E, w) {
    var x = a(E, E.nodes());
    x = x.slice(0, x.length - 1), e.forEach(x, function(R) {
      u(E, w, R);
    });
  }
  function u(E, w, x) {
    var R = E.node(x), T = R.parent;
    E.edge(x, T).cutvalue = f(E, w, x);
  }
  function f(E, w, x) {
    var R = E.node(x), T = R.parent, N = !0, O = w.edge(x, T), k = 0;
    return O || (N = !1, O = w.edge(T, x)), k = O.weight, e.forEach(w.nodeEdges(x), function(q) {
      var j = q.v === x, B = j ? q.w : q.v;
      if (B !== T) {
        var S = j === N, P = w.edge(q).weight;
        if (k += S ? P : -P, y(E, x, B)) {
          var M = E.edge(x, B).cutvalue;
          k += S ? -M : M;
        }
      }
    }), k;
  }
  function l(E, w) {
    arguments.length < 2 && (w = E.nodes()[0]), d(E, {}, 1, w);
  }
  function d(E, w, x, R, T) {
    var N = x, O = E.node(R);
    return w[R] = !0, e.forEach(E.neighbors(R), function(k) {
      e.has(w, k) || (x = d(E, w, x, k, R));
    }), O.low = N, O.lim = x++, T ? O.parent = T : delete O.parent, x;
  }
  function h(E) {
    return e.find(E.edges(), function(w) {
      return E.edge(w).cutvalue < 0;
    });
  }
  function m(E, w, x) {
    var R = x.v, T = x.w;
    w.hasEdge(R, T) || (R = x.w, T = x.v);
    var N = E.node(R), O = E.node(T), k = N, q = !1;
    N.lim > O.lim && (k = O, q = !0);
    var j = e.filter(w.edges(), function(B) {
      return q === b(E, E.node(B.v), k) && q !== b(E, E.node(B.w), k);
    });
    return e.minBy(j, function(B) {
      return r(w, B);
    });
  }
  function p(E, w, x, R) {
    var T = x.v, N = x.w;
    E.removeEdge(T, N), E.setEdge(R.v, R.w, {}), l(E), c(E, w), v(E, w);
  }
  function v(E, w) {
    var x = e.find(E.nodes(), function(T) {
      return !w.node(T).parent;
    }), R = i(E, x);
    R = R.slice(1), e.forEach(R, function(T) {
      var N = E.node(T).parent, O = w.edge(T, N), k = !1;
      O || (O = w.edge(N, T), k = !0), w.node(T).rank = w.node(N).rank + (k ? O.minlen : -O.minlen);
    });
  }
  function y(E, w, x) {
    return E.hasEdge(w, x);
  }
  function b(E, w, x) {
    return x.low <= w.lim && w.lim <= x.lim;
  }
  return Pu;
}
var ku, uv;
function cT() {
  if (uv) return ku;
  uv = 1;
  var e = Xr(), t = e.longestPath, r = Xm(), n = uT();
  ku = i;
  function i(c) {
    switch (c.graph().ranker) {
      case "network-simplex":
        s(c);
        break;
      case "tight-tree":
        o(c);
        break;
      case "longest-path":
        a(c);
        break;
      default:
        s(c);
    }
  }
  var a = t;
  function o(c) {
    t(c), r(c);
  }
  function s(c) {
    n(c);
  }
  return ku;
}
var Du, cv;
function fT() {
  if (cv) return Du;
  cv = 1;
  var e = ve();
  Du = t;
  function t(i) {
    var a = n(i);
    e.forEach(i.graph().dummyChains, function(o) {
      for (var s = i.node(o), c = s.edgeObj, u = r(i, a, c.v, c.w), f = u.path, l = u.lca, d = 0, h = f[d], m = !0; o !== c.w; ) {
        if (s = i.node(o), m) {
          for (; (h = f[d]) !== l && i.node(h).maxRank < s.rank; )
            d++;
          h === l && (m = !1);
        }
        if (!m) {
          for (; d < f.length - 1 && i.node(h = f[d + 1]).minRank <= s.rank; )
            d++;
          h = f[d];
        }
        i.setParent(o, h), o = i.successors(o)[0];
      }
    });
  }
  function r(i, a, o, s) {
    var c = [], u = [], f = Math.min(a[o].low, a[s].low), l = Math.max(a[o].lim, a[s].lim), d, h;
    d = o;
    do
      d = i.parent(d), c.push(d);
    while (d && (a[d].low > f || l > a[d].lim));
    for (h = d, d = s; (d = i.parent(d)) !== h; )
      u.push(d);
    return { path: c.concat(u.reverse()), lca: h };
  }
  function n(i) {
    var a = {}, o = 0;
    function s(c) {
      var u = o;
      e.forEach(i.children(c), s), a[c] = { low: u, lim: o++ };
    }
    return e.forEach(i.children(), s), a;
  }
  return Du;
}
var Lu, fv;
function lT() {
  if (fv) return Lu;
  fv = 1;
  var e = ve(), t = De();
  Lu = {
    run: r,
    cleanup: o
  };
  function r(s) {
    var c = t.addDummyNode(s, "root", {}, "_root"), u = i(s), f = e.max(e.values(u)) - 1, l = 2 * f + 1;
    s.graph().nestingRoot = c, e.forEach(s.edges(), function(h) {
      s.edge(h).minlen *= l;
    });
    var d = a(s) + 1;
    e.forEach(s.children(), function(h) {
      n(s, c, l, d, f, u, h);
    }), s.graph().nodeRankFactor = l;
  }
  function n(s, c, u, f, l, d, h) {
    var m = s.children(h);
    if (!m.length) {
      h !== c && s.setEdge(c, h, { weight: 0, minlen: u });
      return;
    }
    var p = t.addBorderNode(s, "_bt"), v = t.addBorderNode(s, "_bb"), y = s.node(h);
    s.setParent(p, h), y.borderTop = p, s.setParent(v, h), y.borderBottom = v, e.forEach(m, function(b) {
      n(s, c, u, f, l, d, b);
      var E = s.node(b), w = E.borderTop ? E.borderTop : b, x = E.borderBottom ? E.borderBottom : b, R = E.borderTop ? f : 2 * f, T = w !== x ? 1 : l - d[h] + 1;
      s.setEdge(p, w, {
        weight: R,
        minlen: T,
        nestingEdge: !0
      }), s.setEdge(x, v, {
        weight: R,
        minlen: T,
        nestingEdge: !0
      });
    }), s.parent(h) || s.setEdge(c, p, { weight: 0, minlen: l + d[h] });
  }
  function i(s) {
    var c = {};
    function u(f, l) {
      var d = s.children(f);
      d && d.length && e.forEach(d, function(h) {
        u(h, l + 1);
      }), c[f] = l;
    }
    return e.forEach(s.children(), function(f) {
      u(f, 1);
    }), c;
  }
  function a(s) {
    return e.reduce(s.edges(), function(c, u) {
      return c + s.edge(u).weight;
    }, 0);
  }
  function o(s) {
    var c = s.graph();
    s.removeNode(c.nestingRoot), delete c.nestingRoot, e.forEach(s.edges(), function(u) {
      var f = s.edge(u);
      f.nestingEdge && s.removeEdge(u);
    });
  }
  return Lu;
}
var $u, lv;
function dT() {
  if (lv) return $u;
  lv = 1;
  var e = ve(), t = De();
  $u = r;
  function r(i) {
    function a(o) {
      var s = i.children(o), c = i.node(o);
      if (s.length && e.forEach(s, a), e.has(c, "minRank")) {
        c.borderLeft = [], c.borderRight = [];
        for (var u = c.minRank, f = c.maxRank + 1; u < f; ++u)
          n(i, "borderLeft", "_bl", o, c, u), n(i, "borderRight", "_br", o, c, u);
      }
    }
    e.forEach(i.children(), a);
  }
  function n(i, a, o, s, c, u) {
    var f = { width: 0, height: 0, rank: u, borderType: a }, l = c[a][u - 1], d = t.addDummyNode(i, "border", f, o);
    c[a][u] = d, i.setParent(d, s), l && i.setEdge(l, d, { weight: 1 });
  }
  return $u;
}
var Fu, dv;
function hT() {
  if (dv) return Fu;
  dv = 1;
  var e = ve();
  Fu = {
    adjust: t,
    undo: r
  };
  function t(u) {
    var f = u.graph().rankdir.toLowerCase();
    (f === "lr" || f === "rl") && n(u);
  }
  function r(u) {
    var f = u.graph().rankdir.toLowerCase();
    (f === "bt" || f === "rl") && a(u), (f === "lr" || f === "rl") && (s(u), n(u));
  }
  function n(u) {
    e.forEach(u.nodes(), function(f) {
      i(u.node(f));
    }), e.forEach(u.edges(), function(f) {
      i(u.edge(f));
    });
  }
  function i(u) {
    var f = u.width;
    u.width = u.height, u.height = f;
  }
  function a(u) {
    e.forEach(u.nodes(), function(f) {
      o(u.node(f));
    }), e.forEach(u.edges(), function(f) {
      var l = u.edge(f);
      e.forEach(l.points, o), e.has(l, "y") && o(l);
    });
  }
  function o(u) {
    u.y = -u.y;
  }
  function s(u) {
    e.forEach(u.nodes(), function(f) {
      c(u.node(f));
    }), e.forEach(u.edges(), function(f) {
      var l = u.edge(f);
      e.forEach(l.points, c), e.has(l, "x") && c(l);
    });
  }
  function c(u) {
    var f = u.x;
    u.x = u.y, u.y = f;
  }
  return Fu;
}
var Bu, hv;
function pT() {
  if (hv) return Bu;
  hv = 1;
  var e = ve();
  Bu = t;
  function t(r) {
    var n = {}, i = e.filter(r.nodes(), function(u) {
      return !r.children(u).length;
    }), a = e.max(e.map(i, function(u) {
      return r.node(u).rank;
    })), o = e.map(e.range(a + 1), function() {
      return [];
    });
    function s(u) {
      if (!e.has(n, u)) {
        n[u] = !0;
        var f = r.node(u);
        o[f.rank].push(u), e.forEach(r.successors(u), s);
      }
    }
    var c = e.sortBy(i, function(u) {
      return r.node(u).rank;
    });
    return e.forEach(c, s), o;
  }
  return Bu;
}
var ju, pv;
function gT() {
  if (pv) return ju;
  pv = 1;
  var e = ve();
  ju = t;
  function t(n, i) {
    for (var a = 0, o = 1; o < i.length; ++o)
      a += r(n, i[o - 1], i[o]);
    return a;
  }
  function r(n, i, a) {
    for (var o = e.zipObject(
      a,
      e.map(a, function(d, h) {
        return h;
      })
    ), s = e.flatten(e.map(i, function(d) {
      return e.sortBy(e.map(n.outEdges(d), function(h) {
        return { pos: o[h.w], weight: n.edge(h).weight };
      }), "pos");
    }), !0), c = 1; c < a.length; ) c <<= 1;
    var u = 2 * c - 1;
    c -= 1;
    var f = e.map(new Array(u), function() {
      return 0;
    }), l = 0;
    return e.forEach(s.forEach(function(d) {
      var h = d.pos + c;
      f[h] += d.weight;
      for (var m = 0; h > 0; )
        h % 2 && (m += f[h + 1]), h = h - 1 >> 1, f[h] += d.weight;
      l += d.weight * m;
    })), l;
  }
  return ju;
}
var Hu, gv;
function vT() {
  if (gv) return Hu;
  gv = 1;
  var e = ve();
  Hu = t;
  function t(r, n) {
    return e.map(n, function(i) {
      var a = r.inEdges(i);
      if (a.length) {
        var o = e.reduce(a, function(s, c) {
          var u = r.edge(c), f = r.node(c.v);
          return {
            sum: s.sum + u.weight * f.order,
            weight: s.weight + u.weight
          };
        }, { sum: 0, weight: 0 });
        return {
          v: i,
          barycenter: o.sum / o.weight,
          weight: o.weight
        };
      } else
        return { v: i };
    });
  }
  return Hu;
}
var zu, vv;
function yT() {
  if (vv) return zu;
  vv = 1;
  var e = ve();
  zu = t;
  function t(i, a) {
    var o = {};
    e.forEach(i, function(c, u) {
      var f = o[c.v] = {
        indegree: 0,
        in: [],
        out: [],
        vs: [c.v],
        i: u
      };
      e.isUndefined(c.barycenter) || (f.barycenter = c.barycenter, f.weight = c.weight);
    }), e.forEach(a.edges(), function(c) {
      var u = o[c.v], f = o[c.w];
      !e.isUndefined(u) && !e.isUndefined(f) && (f.indegree++, u.out.push(o[c.w]));
    });
    var s = e.filter(o, function(c) {
      return !c.indegree;
    });
    return r(s);
  }
  function r(i) {
    var a = [];
    function o(u) {
      return function(f) {
        f.merged || (e.isUndefined(f.barycenter) || e.isUndefined(u.barycenter) || f.barycenter >= u.barycenter) && n(u, f);
      };
    }
    function s(u) {
      return function(f) {
        f.in.push(u), --f.indegree === 0 && i.push(f);
      };
    }
    for (; i.length; ) {
      var c = i.pop();
      a.push(c), e.forEach(c.in.reverse(), o(c)), e.forEach(c.out, s(c));
    }
    return e.map(
      e.filter(a, function(u) {
        return !u.merged;
      }),
      function(u) {
        return e.pick(u, ["vs", "i", "barycenter", "weight"]);
      }
    );
  }
  function n(i, a) {
    var o = 0, s = 0;
    i.weight && (o += i.barycenter * i.weight, s += i.weight), a.weight && (o += a.barycenter * a.weight, s += a.weight), i.vs = a.vs.concat(i.vs), i.barycenter = o / s, i.weight = s, i.i = Math.min(a.i, i.i), a.merged = !0;
  }
  return zu;
}
var Gu, yv;
function mT() {
  if (yv) return Gu;
  yv = 1;
  var e = ve(), t = De();
  Gu = r;
  function r(a, o) {
    var s = t.partition(a, function(p) {
      return e.has(p, "barycenter");
    }), c = s.lhs, u = e.sortBy(s.rhs, function(p) {
      return -p.i;
    }), f = [], l = 0, d = 0, h = 0;
    c.sort(i(!!o)), h = n(f, u, h), e.forEach(c, function(p) {
      h += p.vs.length, f.push(p.vs), l += p.barycenter * p.weight, d += p.weight, h = n(f, u, h);
    });
    var m = { vs: e.flatten(f, !0) };
    return d && (m.barycenter = l / d, m.weight = d), m;
  }
  function n(a, o, s) {
    for (var c; o.length && (c = e.last(o)).i <= s; )
      o.pop(), a.push(c.vs), s++;
    return s;
  }
  function i(a) {
    return function(o, s) {
      return o.barycenter < s.barycenter ? -1 : o.barycenter > s.barycenter ? 1 : a ? s.i - o.i : o.i - s.i;
    };
  }
  return Gu;
}
var Uu, mv;
function _T() {
  if (mv) return Uu;
  mv = 1;
  var e = ve(), t = vT(), r = yT(), n = mT();
  Uu = i;
  function i(s, c, u, f) {
    var l = s.children(c), d = s.node(c), h = d ? d.borderLeft : void 0, m = d ? d.borderRight : void 0, p = {};
    h && (l = e.filter(l, function(x) {
      return x !== h && x !== m;
    }));
    var v = t(s, l);
    e.forEach(v, function(x) {
      if (s.children(x.v).length) {
        var R = i(s, x.v, u, f);
        p[x.v] = R, e.has(R, "barycenter") && o(x, R);
      }
    });
    var y = r(v, u);
    a(y, p);
    var b = n(y, f);
    if (h && (b.vs = e.flatten([h, b.vs, m], !0), s.predecessors(h).length)) {
      var E = s.node(s.predecessors(h)[0]), w = s.node(s.predecessors(m)[0]);
      e.has(b, "barycenter") || (b.barycenter = 0, b.weight = 0), b.barycenter = (b.barycenter * b.weight + E.order + w.order) / (b.weight + 2), b.weight += 2;
    }
    return b;
  }
  function a(s, c) {
    e.forEach(s, function(u) {
      u.vs = e.flatten(u.vs.map(function(f) {
        return c[f] ? c[f].vs : f;
      }), !0);
    });
  }
  function o(s, c) {
    e.isUndefined(s.barycenter) ? (s.barycenter = c.barycenter, s.weight = c.weight) : (s.barycenter = (s.barycenter * s.weight + c.barycenter * c.weight) / (s.weight + c.weight), s.weight += c.weight);
  }
  return Uu;
}
var Vu, _v;
function bT() {
  if (_v) return Vu;
  _v = 1;
  var e = ve(), t = Ze().Graph;
  Vu = r;
  function r(i, a, o) {
    var s = n(i), c = new t({ compound: !0 }).setGraph({ root: s }).setDefaultNodeLabel(function(u) {
      return i.node(u);
    });
    return e.forEach(i.nodes(), function(u) {
      var f = i.node(u), l = i.parent(u);
      (f.rank === a || f.minRank <= a && a <= f.maxRank) && (c.setNode(u), c.setParent(u, l || s), e.forEach(i[o](u), function(d) {
        var h = d.v === u ? d.w : d.v, m = c.edge(h, u), p = e.isUndefined(m) ? 0 : m.weight;
        c.setEdge(h, u, { weight: i.edge(d).weight + p });
      }), e.has(f, "minRank") && c.setNode(u, {
        borderLeft: f.borderLeft[a],
        borderRight: f.borderRight[a]
      }));
    }), c;
  }
  function n(i) {
    for (var a; i.hasNode(a = e.uniqueId("_root")); ) ;
    return a;
  }
  return Vu;
}
var Yu, bv;
function wT() {
  if (bv) return Yu;
  bv = 1;
  var e = ve();
  Yu = t;
  function t(r, n, i) {
    var a = {}, o;
    e.forEach(i, function(s) {
      for (var c = r.parent(s), u, f; c; ) {
        if (u = r.parent(c), u ? (f = a[u], a[u] = c) : (f = o, o = c), f && f !== c) {
          n.setEdge(f, c);
          return;
        }
        c = u;
      }
    });
  }
  return Yu;
}
var Ku, wv;
function ET() {
  if (wv) return Ku;
  wv = 1;
  var e = ve(), t = pT(), r = gT(), n = _T(), i = bT(), a = wT(), o = Ze().Graph, s = De();
  Ku = c;
  function c(d) {
    var h = s.maxRank(d), m = u(d, e.range(1, h + 1), "inEdges"), p = u(d, e.range(h - 1, -1, -1), "outEdges"), v = t(d);
    l(d, v);
    for (var y = Number.POSITIVE_INFINITY, b, E = 0, w = 0; w < 4; ++E, ++w) {
      f(E % 2 ? m : p, E % 4 >= 2), v = s.buildLayerMatrix(d);
      var x = r(d, v);
      x < y && (w = 0, b = e.cloneDeep(v), y = x);
    }
    l(d, b);
  }
  function u(d, h, m) {
    return e.map(h, function(p) {
      return i(d, p, m);
    });
  }
  function f(d, h) {
    var m = new o();
    e.forEach(d, function(p) {
      var v = p.graph().root, y = n(p, v, m, h);
      e.forEach(y.vs, function(b, E) {
        p.node(b).order = E;
      }), a(p, m, y.vs);
    });
  }
  function l(d, h) {
    e.forEach(h, function(m) {
      e.forEach(m, function(p, v) {
        d.node(p).order = v;
      });
    });
  }
  return Ku;
}
var Wu, Ev;
function ST() {
  if (Ev) return Wu;
  Ev = 1;
  var e = ve(), t = Ze().Graph, r = De();
  Wu = {
    positionX: m,
    findType1Conflicts: n,
    findType2Conflicts: i,
    addConflict: o,
    hasConflict: s,
    verticalAlignment: c,
    horizontalCompaction: u,
    alignCoordinates: d,
    findSmallestWidthAlignment: l,
    balance: h
  };
  function n(y, b) {
    var E = {};
    function w(x, R) {
      var T = 0, N = 0, O = x.length, k = e.last(R);
      return e.forEach(R, function(q, j) {
        var B = a(y, q), S = B ? y.node(B).order : O;
        (B || q === k) && (e.forEach(R.slice(N, j + 1), function(P) {
          e.forEach(y.predecessors(P), function(M) {
            var G = y.node(M), V = G.order;
            (V < T || S < V) && !(G.dummy && y.node(P).dummy) && o(E, M, P);
          });
        }), N = j + 1, T = S);
      }), R;
    }
    return e.reduce(b, w), E;
  }
  function i(y, b) {
    var E = {};
    function w(R, T, N, O, k) {
      var q;
      e.forEach(e.range(T, N), function(j) {
        q = R[j], y.node(q).dummy && e.forEach(y.predecessors(q), function(B) {
          var S = y.node(B);
          S.dummy && (S.order < O || S.order > k) && o(E, B, q);
        });
      });
    }
    function x(R, T) {
      var N = -1, O, k = 0;
      return e.forEach(T, function(q, j) {
        if (y.node(q).dummy === "border") {
          var B = y.predecessors(q);
          B.length && (O = y.node(B[0]).order, w(T, k, j, N, O), k = j, N = O);
        }
        w(T, k, T.length, O, R.length);
      }), T;
    }
    return e.reduce(b, x), E;
  }
  function a(y, b) {
    if (y.node(b).dummy)
      return e.find(y.predecessors(b), function(E) {
        return y.node(E).dummy;
      });
  }
  function o(y, b, E) {
    if (b > E) {
      var w = b;
      b = E, E = w;
    }
    var x = y[b];
    x || (y[b] = x = {}), x[E] = !0;
  }
  function s(y, b, E) {
    if (b > E) {
      var w = b;
      b = E, E = w;
    }
    return e.has(y[b], E);
  }
  function c(y, b, E, w) {
    var x = {}, R = {}, T = {};
    return e.forEach(b, function(N) {
      e.forEach(N, function(O, k) {
        x[O] = O, R[O] = O, T[O] = k;
      });
    }), e.forEach(b, function(N) {
      var O = -1;
      e.forEach(N, function(k) {
        var q = w(k);
        if (q.length) {
          q = e.sortBy(q, function(M) {
            return T[M];
          });
          for (var j = (q.length - 1) / 2, B = Math.floor(j), S = Math.ceil(j); B <= S; ++B) {
            var P = q[B];
            R[k] === k && O < T[P] && !s(E, k, P) && (R[P] = k, R[k] = x[k] = x[P], O = T[P]);
          }
        }
      });
    }), { root: x, align: R };
  }
  function u(y, b, E, w, x) {
    var R = {}, T = f(y, b, E, x), N = x ? "borderLeft" : "borderRight";
    function O(j, B) {
      for (var S = T.nodes(), P = S.pop(), M = {}; P; )
        M[P] ? j(P) : (M[P] = !0, S.push(P), S = S.concat(B(P))), P = S.pop();
    }
    function k(j) {
      R[j] = T.inEdges(j).reduce(function(B, S) {
        return Math.max(B, R[S.v] + T.edge(S));
      }, 0);
    }
    function q(j) {
      var B = T.outEdges(j).reduce(function(P, M) {
        return Math.min(P, R[M.w] - T.edge(M));
      }, Number.POSITIVE_INFINITY), S = y.node(j);
      B !== Number.POSITIVE_INFINITY && S.borderType !== N && (R[j] = Math.max(R[j], B));
    }
    return O(k, T.predecessors.bind(T)), O(q, T.successors.bind(T)), e.forEach(w, function(j) {
      R[j] = R[E[j]];
    }), R;
  }
  function f(y, b, E, w) {
    var x = new t(), R = y.graph(), T = p(R.nodesep, R.edgesep, w);
    return e.forEach(b, function(N) {
      var O;
      e.forEach(N, function(k) {
        var q = E[k];
        if (x.setNode(q), O) {
          var j = E[O], B = x.edge(j, q);
          x.setEdge(j, q, Math.max(T(y, k, O), B || 0));
        }
        O = k;
      });
    }), x;
  }
  function l(y, b) {
    return e.minBy(e.values(b), function(E) {
      var w = Number.NEGATIVE_INFINITY, x = Number.POSITIVE_INFINITY;
      return e.forIn(E, function(R, T) {
        var N = v(y, T) / 2;
        w = Math.max(R + N, w), x = Math.min(R - N, x);
      }), w - x;
    });
  }
  function d(y, b) {
    var E = e.values(b), w = e.min(E), x = e.max(E);
    e.forEach(["u", "d"], function(R) {
      e.forEach(["l", "r"], function(T) {
        var N = R + T, O = y[N], k;
        if (O !== b) {
          var q = e.values(O);
          k = T === "l" ? w - e.min(q) : x - e.max(q), k && (y[N] = e.mapValues(O, function(j) {
            return j + k;
          }));
        }
      });
    });
  }
  function h(y, b) {
    return e.mapValues(y.ul, function(E, w) {
      if (b)
        return y[b.toLowerCase()][w];
      var x = e.sortBy(e.map(y, w));
      return (x[1] + x[2]) / 2;
    });
  }
  function m(y) {
    var b = r.buildLayerMatrix(y), E = e.merge(
      n(y, b),
      i(y, b)
    ), w = {}, x;
    e.forEach(["u", "d"], function(T) {
      x = T === "u" ? b : e.values(b).reverse(), e.forEach(["l", "r"], function(N) {
        N === "r" && (x = e.map(x, function(j) {
          return e.values(j).reverse();
        }));
        var O = (T === "u" ? y.predecessors : y.successors).bind(y), k = c(y, x, E, O), q = u(
          y,
          x,
          k.root,
          k.align,
          N === "r"
        );
        N === "r" && (q = e.mapValues(q, function(j) {
          return -j;
        })), w[T + N] = q;
      });
    });
    var R = l(y, w);
    return d(w, R), h(w, y.graph().align);
  }
  function p(y, b, E) {
    return function(w, x, R) {
      var T = w.node(x), N = w.node(R), O = 0, k;
      if (O += T.width / 2, e.has(T, "labelpos"))
        switch (T.labelpos.toLowerCase()) {
          case "l":
            k = -T.width / 2;
            break;
          case "r":
            k = T.width / 2;
            break;
        }
      if (k && (O += E ? k : -k), k = 0, O += (T.dummy ? b : y) / 2, O += (N.dummy ? b : y) / 2, O += N.width / 2, e.has(N, "labelpos"))
        switch (N.labelpos.toLowerCase()) {
          case "l":
            k = N.width / 2;
            break;
          case "r":
            k = -N.width / 2;
            break;
        }
      return k && (O += E ? k : -k), k = 0, O;
    };
  }
  function v(y, b) {
    return y.node(b).width;
  }
  return Wu;
}
var Xu, Sv;
function xT() {
  if (Sv) return Xu;
  Sv = 1;
  var e = ve(), t = De(), r = ST().positionX;
  Xu = n;
  function n(a) {
    a = t.asNonCompoundGraph(a), i(a), e.forEach(r(a), function(o, s) {
      a.node(s).x = o;
    });
  }
  function i(a) {
    var o = t.buildLayerMatrix(a), s = a.graph().ranksep, c = 0;
    e.forEach(o, function(u) {
      var f = e.max(e.map(u, function(l) {
        return a.node(l).height;
      }));
      e.forEach(u, function(l) {
        a.node(l).y = c + f / 2;
      }), c += f + s;
    });
  }
  return Xu;
}
var Zu, xv;
function RT() {
  if (xv) return Zu;
  xv = 1;
  var e = ve(), t = oT(), r = sT(), n = cT(), i = De().normalizeRanks, a = fT(), o = De().removeEmptyRanks, s = lT(), c = dT(), u = hT(), f = ET(), l = xT(), d = De(), h = Ze().Graph;
  Zu = m;
  function m(A, I) {
    var $ = I && I.debugTiming ? d.time : d.notime;
    $("layout", function() {
      var U = $("  buildLayoutGraph", function() {
        return O(A);
      });
      $("  runLayout", function() {
        p(U, $);
      }), $("  updateInputGraph", function() {
        v(A, U);
      });
    });
  }
  function p(A, I) {
    I("    makeSpaceForEdgeLabels", function() {
      k(A);
    }), I("    removeSelfEdges", function() {
      F(A);
    }), I("    acyclic", function() {
      t.run(A);
    }), I("    nestingGraph.run", function() {
      s.run(A);
    }), I("    rank", function() {
      n(d.asNonCompoundGraph(A));
    }), I("    injectEdgeLabelProxies", function() {
      q(A);
    }), I("    removeEmptyRanks", function() {
      o(A);
    }), I("    nestingGraph.cleanup", function() {
      s.cleanup(A);
    }), I("    normalizeRanks", function() {
      i(A);
    }), I("    assignRankMinMax", function() {
      j(A);
    }), I("    removeEdgeLabelProxies", function() {
      B(A);
    }), I("    normalize.run", function() {
      r.run(A);
    }), I("    parentDummyChains", function() {
      a(A);
    }), I("    addBorderSegments", function() {
      c(A);
    }), I("    order", function() {
      f(A);
    }), I("    insertSelfEdges", function() {
      g(A);
    }), I("    adjustCoordinateSystem", function() {
      u.adjust(A);
    }), I("    position", function() {
      l(A);
    }), I("    positionSelfEdges", function() {
      C(A);
    }), I("    removeBorderNodes", function() {
      V(A);
    }), I("    normalize.undo", function() {
      r.undo(A);
    }), I("    fixupEdgeLabelCoords", function() {
      M(A);
    }), I("    undoCoordinateSystem", function() {
      u.undo(A);
    }), I("    translateGraph", function() {
      S(A);
    }), I("    assignNodeIntersects", function() {
      P(A);
    }), I("    reversePoints", function() {
      G(A);
    }), I("    acyclic.undo", function() {
      t.undo(A);
    });
  }
  function v(A, I) {
    e.forEach(A.nodes(), function($) {
      var U = A.node($), Y = I.node($);
      U && (U.x = Y.x, U.y = Y.y, I.children($).length && (U.width = Y.width, U.height = Y.height));
    }), e.forEach(A.edges(), function($) {
      var U = A.edge($), Y = I.edge($);
      U.points = Y.points, e.has(Y, "x") && (U.x = Y.x, U.y = Y.y);
    }), A.graph().width = I.graph().width, A.graph().height = I.graph().height;
  }
  var y = ["nodesep", "edgesep", "ranksep", "marginx", "marginy"], b = { ranksep: 50, edgesep: 20, nodesep: 50, rankdir: "tb" }, E = ["acyclicer", "ranker", "rankdir", "align"], w = ["width", "height"], x = { width: 0, height: 0 }, R = ["minlen", "weight", "width", "height", "labeloffset"], T = {
    minlen: 1,
    weight: 1,
    width: 0,
    height: 0,
    labeloffset: 10,
    labelpos: "r"
  }, N = ["labelpos"];
  function O(A) {
    var I = new h({ multigraph: !0, compound: !0 }), $ = H(A.graph());
    return I.setGraph(e.merge(
      {},
      b,
      L($, y),
      e.pick($, E)
    )), e.forEach(A.nodes(), function(U) {
      var Y = H(A.node(U));
      I.setNode(U, e.defaults(L(Y, w), x)), I.setParent(U, A.parent(U));
    }), e.forEach(A.edges(), function(U) {
      var Y = H(A.edge(U));
      I.setEdge(U, e.merge(
        {},
        T,
        L(Y, R),
        e.pick(Y, N)
      ));
    }), I;
  }
  function k(A) {
    var I = A.graph();
    I.ranksep /= 2, e.forEach(A.edges(), function($) {
      var U = A.edge($);
      U.minlen *= 2, U.labelpos.toLowerCase() !== "c" && (I.rankdir === "TB" || I.rankdir === "BT" ? U.width += U.labeloffset : U.height += U.labeloffset);
    });
  }
  function q(A) {
    e.forEach(A.edges(), function(I) {
      var $ = A.edge(I);
      if ($.width && $.height) {
        var U = A.node(I.v), Y = A.node(I.w), J = { rank: (Y.rank - U.rank) / 2 + U.rank, e: I };
        d.addDummyNode(A, "edge-proxy", J, "_ep");
      }
    });
  }
  function j(A) {
    var I = 0;
    e.forEach(A.nodes(), function($) {
      var U = A.node($);
      U.borderTop && (U.minRank = A.node(U.borderTop).rank, U.maxRank = A.node(U.borderBottom).rank, I = e.max(I, U.maxRank));
    }), A.graph().maxRank = I;
  }
  function B(A) {
    e.forEach(A.nodes(), function(I) {
      var $ = A.node(I);
      $.dummy === "edge-proxy" && (A.edge($.e).labelRank = $.rank, A.removeNode(I));
    });
  }
  function S(A) {
    var I = Number.POSITIVE_INFINITY, $ = 0, U = Number.POSITIVE_INFINITY, Y = 0, J = A.graph(), ne = J.marginx || 0, le = J.marginy || 0;
    function Ee(pe) {
      var fe = pe.x, te = pe.y, de = pe.width, Z = pe.height;
      I = Math.min(I, fe - de / 2), $ = Math.max($, fe + de / 2), U = Math.min(U, te - Z / 2), Y = Math.max(Y, te + Z / 2);
    }
    e.forEach(A.nodes(), function(pe) {
      Ee(A.node(pe));
    }), e.forEach(A.edges(), function(pe) {
      var fe = A.edge(pe);
      e.has(fe, "x") && Ee(fe);
    }), I -= ne, U -= le, e.forEach(A.nodes(), function(pe) {
      var fe = A.node(pe);
      fe.x -= I, fe.y -= U;
    }), e.forEach(A.edges(), function(pe) {
      var fe = A.edge(pe);
      e.forEach(fe.points, function(te) {
        te.x -= I, te.y -= U;
      }), e.has(fe, "x") && (fe.x -= I), e.has(fe, "y") && (fe.y -= U);
    }), J.width = $ - I + ne, J.height = Y - U + le;
  }
  function P(A) {
    e.forEach(A.edges(), function(I) {
      var $ = A.edge(I), U = A.node(I.v), Y = A.node(I.w), J, ne;
      $.points ? (J = $.points[0], ne = $.points[$.points.length - 1]) : ($.points = [], J = Y, ne = U), $.points.unshift(d.intersectRect(U, J)), $.points.push(d.intersectRect(Y, ne));
    });
  }
  function M(A) {
    e.forEach(A.edges(), function(I) {
      var $ = A.edge(I);
      if (e.has($, "x"))
        switch (($.labelpos === "l" || $.labelpos === "r") && ($.width -= $.labeloffset), $.labelpos) {
          case "l":
            $.x -= $.width / 2 + $.labeloffset;
            break;
          case "r":
            $.x += $.width / 2 + $.labeloffset;
            break;
        }
    });
  }
  function G(A) {
    e.forEach(A.edges(), function(I) {
      var $ = A.edge(I);
      $.reversed && $.points.reverse();
    });
  }
  function V(A) {
    e.forEach(A.nodes(), function(I) {
      if (A.children(I).length) {
        var $ = A.node(I), U = A.node($.borderTop), Y = A.node($.borderBottom), J = A.node(e.last($.borderLeft)), ne = A.node(e.last($.borderRight));
        $.width = Math.abs(ne.x - J.x), $.height = Math.abs(Y.y - U.y), $.x = J.x + $.width / 2, $.y = U.y + $.height / 2;
      }
    }), e.forEach(A.nodes(), function(I) {
      A.node(I).dummy === "border" && A.removeNode(I);
    });
  }
  function F(A) {
    e.forEach(A.edges(), function(I) {
      if (I.v === I.w) {
        var $ = A.node(I.v);
        $.selfEdges || ($.selfEdges = []), $.selfEdges.push({ e: I, label: A.edge(I) }), A.removeEdge(I);
      }
    });
  }
  function g(A) {
    var I = d.buildLayerMatrix(A);
    e.forEach(I, function($) {
      var U = 0;
      e.forEach($, function(Y, J) {
        var ne = A.node(Y);
        ne.order = J + U, e.forEach(ne.selfEdges, function(le) {
          d.addDummyNode(A, "selfedge", {
            width: le.label.width,
            height: le.label.height,
            rank: ne.rank,
            order: J + ++U,
            e: le.e,
            label: le.label
          }, "_se");
        }), delete ne.selfEdges;
      });
    });
  }
  function C(A) {
    e.forEach(A.nodes(), function(I) {
      var $ = A.node(I);
      if ($.dummy === "selfedge") {
        var U = A.node($.e.v), Y = U.x + U.width / 2, J = U.y, ne = $.x - Y, le = U.height / 2;
        A.setEdge($.e, $.label), A.removeNode(I), $.label.points = [
          { x: Y + 2 * ne / 3, y: J - le },
          { x: Y + 5 * ne / 6, y: J - le },
          { x: Y + ne, y: J },
          { x: Y + 5 * ne / 6, y: J + le },
          { x: Y + 2 * ne / 3, y: J + le }
        ], $.label.x = $.x, $.label.y = $.y;
      }
    });
  }
  function L(A, I) {
    return e.mapValues(e.pick(A, I), Number);
  }
  function H(A) {
    var I = {};
    return e.forEach(A, function($, U) {
      I[U.toLowerCase()] = $;
    }), I;
  }
  return Zu;
}
var Qu, Rv;
function TT() {
  if (Rv) return Qu;
  Rv = 1;
  var e = ve(), t = De(), r = Ze().Graph;
  Qu = {
    debugOrdering: n
  };
  function n(i) {
    var a = t.buildLayerMatrix(i), o = new r({ compound: !0, multigraph: !0 }).setGraph({});
    return e.forEach(i.nodes(), function(s) {
      o.setNode(s, { label: s }), o.setParent(s, "layer" + i.node(s).rank);
    }), e.forEach(i.edges(), function(s) {
      o.setEdge(s.v, s.w, {}, s.name);
    }), e.forEach(a, function(s, c) {
      var u = "layer" + c;
      o.setNode(u, { rank: "same" }), e.reduce(s, function(f, l) {
        return o.setEdge(f, l, { style: "invis" }), l;
      });
    }), o;
  }
  return Qu;
}
var Ju, Tv;
function AT() {
  return Tv || (Tv = 1, Ju = "0.8.5"), Ju;
}
var ec, Av;
function CT() {
  return Av || (Av = 1, ec = {
    graphlib: Ze(),
    layout: RT(),
    debug: TT(),
    util: {
      time: De().time,
      notime: De().notime
    },
    version: AT()
  }), ec;
}
var OT = CT();
const Zm = /* @__PURE__ */ yc(OT), Cv = 200, Ov = 70, Mt = new Zm.graphlib.Graph();
Mt.setDefaultEdgeLabel(() => ({}));
const qT = (e, t, r = "LR") => {
  const n = r === "LR";
  return Mt.setGraph({ rankdir: r }), e.forEach((i) => {
    Mt.setNode(i.id, { width: Cv, height: Ov });
  }), t.forEach((i) => {
    Mt.setEdge(i.source, i.target);
  }), Zm.layout(Mt), e.forEach((i) => {
    const a = Mt.node(i.id);
    i.targetPosition = n ? "left" : "top", i.sourcePosition = n ? "right" : "bottom", i.position = {
      x: a.x - Cv / 2,
      y: a.y - Ov / 2
    };
  }), { nodes: e, edges: t };
}, NT = ({ roomId: e }) => {
  const [t, r, n] = dS([]), [i, a, o] = hS([]);
  return z.useEffect(() => {
    fetch(`https://x8ki-letl-twmt.n7.xano.io/api:Dosppuhb/get_graph_by_room_id?room_id=${e}`).then((s) => s.json()).then((s) => {
      const c = qT(s.nodes, s.edges);
      r(c.nodes), a(c.edges);
    });
  }, [e, r, a]), /* @__PURE__ */ cf.jsx("div", { style: { height: "100vh", width: "100%" }, children: /* @__PURE__ */ cf.jsx(
    Xy,
    {
      nodes: t,
      edges: i,
      onNodesChange: n,
      onEdgesChange: o,
      fitView: !0
    }
  ) });
};
export {
  NT as default
};
