var Zepto = (function () {
  function u(t) {
    return null == t ? String(t) : z[Z.call(t)] || 'object';
  }
  function o(t) {
    return 'function' == u(t);
  }
  function s(t) {
    return null != t && t == t.window;
  }
  function a(t) {
    return null != t && t.nodeType == t.DOCUMENT_NODE;
  }
  function i(t) {
    return 'object' == u(t);
  }
  function c(t) {
    return i(t) && !s(t) && Object.getPrototypeOf(t) == Object.prototype;
  }
  function f(t) {
    var e = !!t && 'length' in t && t.length,
      n = E.type(t);
    return (
      'function' != n &&
      !s(t) &&
      ('array' == n || 0 === e || ('number' == typeof e && 0 < e && e - 1 in t))
    );
  }
  function l(t) {
    return t
      .replace(/::/g, '/')
      .replace(/([A-Z]+)([A-Z][a-z])/g, '$1_$2')
      .replace(/([a-z\d])([A-Z])/g, '$1_$2')
      .replace(/_/g, '-')
      .toLowerCase();
  }
  function n(t) {
    return t in e ? e[t] : (e[t] = new RegExp('(^|\\s)' + t + '(\\s|$)'));
  }
  function h(t, e) {
    return 'number' != typeof e || F[l(t)] ? e : e + 'px';
  }
  function r(t) {
    return 'children' in t
      ? N.call(t.children)
      : E.map(t.childNodes, function (t) {
          return 1 == t.nodeType ? t : void 0;
        });
  }
  function d(t, e) {
    for (var n = t ? t.length : 0, r = 0; r < n; r++) this[r] = t[r];
    (this.length = n), (this.selector = e || '');
  }
  function p(t, e) {
    return null == e ? E(t) : E(t).filter(e);
  }
  function y(t, e, n, r) {
    return o(e) ? e.call(t, n, r) : e;
  }
  function m(t, e, n) {
    null == n ? t.removeAttribute(e) : t.setAttribute(e, n);
  }
  function v(t, e) {
    var n = t.className || '',
      r = n && n.baseVal !== w;
    return e === w
      ? r
        ? n.baseVal
        : n
      : void (r ? (n.baseVal = e) : (t.className = e));
  }
  function g(e) {
    try {
      return (
        e &&
        ('true' == e ||
          ('false' != e &&
            ('null' == e
              ? null
              : +e + '' == e
              ? +e
              : /^[\[\{]/.test(e)
              ? E.parseJSON(e)
              : e)))
      );
    } catch (t) {
      return e;
    }
  }
  var w,
    b,
    E,
    _,
    x,
    T,
    A = [],
    P = A.concat,
    C = A.filter,
    N = A.slice,
    O = window.document,
    S = {},
    e = {},
    F = {
      'column-count': 1,
      columns: 1,
      'font-weight': 1,
      'line-height': 1,
      opacity: 1,
      'z-index': 1,
      zoom: 1,
    },
    B = /^\s*<(\w+|!)[^>]*>/,
    $ = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    j =
      /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    D = /^(?:body|html)$/i,
    R = /([A-Z])/g,
    L = ['val', 'css', 'html', 'text', 'data', 'width', 'height', 'offset'],
    t = O.createElement('table'),
    k = O.createElement('tr'),
    I = {
      tr: O.createElement('tbody'),
      tbody: t,
      thead: t,
      tfoot: t,
      td: k,
      th: k,
      '*': O.createElement('div'),
    },
    U = /^[\w-]*$/,
    z = {},
    Z = z.toString,
    M = {},
    q = O.createElement('div'),
    V = {
      tabindex: 'tabIndex',
      readonly: 'readOnly',
      for: 'htmlFor',
      class: 'className',
      maxlength: 'maxLength',
      cellspacing: 'cellSpacing',
      cellpadding: 'cellPadding',
      rowspan: 'rowSpan',
      colspan: 'colSpan',
      usemap: 'useMap',
      frameborder: 'frameBorder',
      contenteditable: 'contentEditable',
    },
    H =
      Array.isArray ||
      function (t) {
        return t instanceof Array;
      };
  return (
    (M.matches = function (t, e) {
      if (!e || !t || 1 !== t.nodeType) return !1;
      var n =
        t.matches ||
        t.webkitMatchesSelector ||
        t.mozMatchesSelector ||
        t.oMatchesSelector ||
        t.matchesSelector;
      if (n) return n.call(t, e);
      var r = t.parentNode,
        n = !r;
      return (
        n && (r = q).appendChild(t),
        (e = ~M.qsa(r, e).indexOf(t)),
        n && q.removeChild(t),
        e
      );
    }),
    (x = function (t) {
      return t.replace(/-+(.)?/g, function (t, e) {
        return e ? e.toUpperCase() : '';
      });
    }),
    (T = function (n) {
      return C.call(n, function (t, e) {
        return n.indexOf(t) == e;
      });
    }),
    (M.fragment = function (t, e, n) {
      var r, i, o;
      return (
        (r = $.test(t) ? E(O.createElement(RegExp.$1)) : r) ||
          (t.replace && (t = t.replace(j, '<$1></$2>')),
          e === w && (e = B.test(t) && RegExp.$1),
          ((o = I[(e = !(e in I) ? '*' : e)]).innerHTML = '' + t),
          (r = E.each(N.call(o.childNodes), function () {
            o.removeChild(this);
          }))),
        c(n) &&
          ((i = E(r)),
          E.each(n, function (t, e) {
            -1 < L.indexOf(t) ? i[t](e) : i.attr(t, e);
          })),
        r
      );
    }),
    (M.Z = function (t, e) {
      return new d(t, e);
    }),
    (M.isZ = function (t) {
      return t instanceof M.Z;
    }),
    (M.init = function (t, e) {
      var n, r;
      if (!t) return M.Z();
      if ('string' == typeof t)
        if ('<' == (t = t.trim())[0] && B.test(t))
          (n = M.fragment(t, RegExp.$1, e)), (t = null);
        else {
          if (e !== w) return E(e).find(t);
          n = M.qsa(O, t);
        }
      else {
        if (o(t)) return E(O).ready(t);
        if (M.isZ(t)) return t;
        if (H(t))
          (r = t),
            (n = C.call(r, function (t) {
              return null != t;
            }));
        else if (i(t)) (n = [t]), (t = null);
        else if (B.test(t))
          (n = M.fragment(t.trim(), RegExp.$1, e)), (t = null);
        else {
          if (e !== w) return E(e).find(t);
          n = M.qsa(O, t);
        }
      }
      return M.Z(n, t);
    }),
    ((E = function (t, e) {
      return M.init(t, e);
    }).extend = function (e) {
      var n,
        t = N.call(arguments, 1);
      return (
        'boolean' == typeof e && ((n = e), (e = t.shift())),
        t.forEach(function (t) {
          !(function t(e, n, r) {
            for (b in n)
              r && (c(n[b]) || H(n[b]))
                ? (c(n[b]) && !c(e[b]) && (e[b] = {}),
                  H(n[b]) && !H(e[b]) && (e[b] = []),
                  t(e[b], n[b], r))
                : n[b] !== w && (e[b] = n[b]);
          })(e, t, n);
        }),
        e
      );
    }),
    (M.qsa = function (t, e) {
      var n,
        r = '#' == e[0],
        i = !r && '.' == e[0],
        o = r || i ? e.slice(1) : e,
        s = U.test(o);
      return t.getElementById && s && r
        ? (n = t.getElementById(o))
          ? [n]
          : []
        : 1 !== t.nodeType && 9 !== t.nodeType && 11 !== t.nodeType
        ? []
        : N.call(
            s && !r && t.getElementsByClassName
              ? i
                ? t.getElementsByClassName(o)
                : t.getElementsByTagName(e)
              : t.querySelectorAll(e)
          );
    }),
    (E.contains = O.documentElement.contains
      ? function (t, e) {
          return t !== e && t.contains(e);
        }
      : function (t, e) {
          for (; (e = e && e.parentNode); ) if (e === t) return !0;
          return !1;
        }),
    (E.type = u),
    (E.isFunction = o),
    (E.isWindow = s),
    (E.isArray = H),
    (E.isPlainObject = c),
    (E.isEmptyObject = function (t) {
      for (var e in t) return !1;
      return !0;
    }),
    (E.isNumeric = function (t) {
      var e = Number(t),
        n = typeof t;
      return (
        (null != t &&
          'boolean' != n &&
          ('string' != n || t.length) &&
          !isNaN(e) &&
          isFinite(e)) ||
        !1
      );
    }),
    (E.inArray = function (t, e, n) {
      return A.indexOf.call(e, t, n);
    }),
    (E.camelCase = x),
    (E.trim = function (t) {
      return null == t ? '' : String.prototype.trim.call(t);
    }),
    (E.uuid = 0),
    (E.support = {}),
    (E.expr = {}),
    (E.noop = function () {}),
    (E.map = function (t, e) {
      var n,
        r,
        i,
        o,
        s = [];
      if (f(t))
        for (r = 0; r < t.length; r++) null != (n = e(t[r], r)) && s.push(n);
      else for (i in t) (n = e(t[i], i)), null != n && s.push(n);
      return 0 < (o = s).length ? E.fn.concat.apply([], o) : o;
    }),
    (E.each = function (t, e) {
      var n, r;
      if (f(t)) {
        for (n = 0; n < t.length; n++)
          if (!1 === e.call(t[n], n, t[n])) return t;
      } else for (r in t) if (!1 === e.call(t[r], r, t[r])) return t;
      return t;
    }),
    (E.grep = function (t, e) {
      return C.call(t, e);
    }),
    window.JSON && (E.parseJSON = JSON.parse),
    E.each(
      'Boolean Number String Function Array Date RegExp Object Error'.split(
        ' '
      ),
      function (t, e) {
        z['[object ' + e + ']'] = e.toLowerCase();
      }
    ),
    (E.fn = {
      constructor: M.Z,
      length: 0,
      forEach: A.forEach,
      reduce: A.reduce,
      push: A.push,
      sort: A.sort,
      splice: A.splice,
      indexOf: A.indexOf,
      concat: function () {
        for (var t, e = [], n = 0; n < arguments.length; n++)
          e[n] = M.isZ((t = arguments[n])) ? t.toArray() : t;
        return P.apply(M.isZ(this) ? this.toArray() : this, e);
      },
      map: function (n) {
        return E(
          E.map(this, function (t, e) {
            return n.call(t, e, t);
          })
        );
      },
      slice: function () {
        return E(N.apply(this, arguments));
      },
      ready: function (t) {
        var e;
        return (
          'complete' === O.readyState ||
          ('loading' !== O.readyState && !O.documentElement.doScroll)
            ? setTimeout(function () {
                t(E);
              }, 0)
            : ((e = function () {
                O.removeEventListener('DOMContentLoaded', e, !1),
                  window.removeEventListener('load', e, !1),
                  t(E);
              }),
              O.addEventListener('DOMContentLoaded', e, !1),
              window.addEventListener('load', e, !1)),
          this
        );
      },
      get: function (t) {
        return t === w ? N.call(this) : this[0 <= t ? t : t + this.length];
      },
      toArray: function () {
        return this.get();
      },
      size: function () {
        return this.length;
      },
      remove: function () {
        return this.each(function () {
          null != this.parentNode && this.parentNode.removeChild(this);
        });
      },
      each: function (n) {
        return (
          A.every.call(this, function (t, e) {
            return !1 !== n.call(t, e, t);
          }),
          this
        );
      },
      filter: function (e) {
        return o(e)
          ? this.not(this.not(e))
          : E(
              C.call(this, function (t) {
                return M.matches(t, e);
              })
            );
      },
      add: function (t, e) {
        return E(T(this.concat(E(t, e))));
      },
      is: function (t) {
        return 0 < this.length && M.matches(this[0], t);
      },
      not: function (e) {
        var n,
          r = [];
        return (
          o(e) && e.call !== w
            ? this.each(function (t) {
                e.call(this, t) || r.push(this);
              })
            : ((n =
                'string' == typeof e
                  ? this.filter(e)
                  : f(e) && o(e.item)
                  ? N.call(e)
                  : E(e)),
              this.forEach(function (t) {
                n.indexOf(t) < 0 && r.push(t);
              })),
          E(r)
        );
      },
      has: function (t) {
        return this.filter(function () {
          return i(t) ? E.contains(this, t) : E(this).find(t).size();
        });
      },
      eq: function (t) {
        return -1 === t ? this.slice(t) : this.slice(t, +t + 1);
      },
      first: function () {
        var t = this[0];
        return t && !i(t) ? t : E(t);
      },
      last: function () {
        var t = this[this.length - 1];
        return t && !i(t) ? t : E(t);
      },
      find: function (t) {
        var n = this;
        return t
          ? 'object' == typeof t
            ? E(t).filter(function () {
                var e = this;
                return A.some.call(n, function (t) {
                  return E.contains(t, e);
                });
              })
            : 1 == this.length
            ? E(M.qsa(this[0], t))
            : this.map(function () {
                return M.qsa(this, t);
              })
          : E();
      },
      closest: function (n, r) {
        var i = [],
          o = 'object' == typeof n && E(n);
        return (
          this.each(function (t, e) {
            for (; e && !(o ? 0 <= o.indexOf(e) : M.matches(e, n)); )
              e = e !== r && !a(e) && e.parentNode;
            e && i.indexOf(e) < 0 && i.push(e);
          }),
          E(i)
        );
      },
      parents: function (t) {
        for (var e = [], n = this; 0 < n.length; )
          n = E.map(n, function (t) {
            return (t = t.parentNode) && !a(t) && e.indexOf(t) < 0
              ? (e.push(t), t)
              : void 0;
          });
        return p(e, t);
      },
      parent: function (t) {
        return p(T(this.pluck('parentNode')), t);
      },
      children: function (t) {
        return p(
          this.map(function () {
            return r(this);
          }),
          t
        );
      },
      contents: function () {
        return this.map(function () {
          return this.contentDocument || N.call(this.childNodes);
        });
      },
      siblings: function (t) {
        return p(
          this.map(function (t, e) {
            return C.call(r(e.parentNode), function (t) {
              return t !== e;
            });
          }),
          t
        );
      },
      empty: function () {
        return this.each(function () {
          this.innerHTML = '';
        });
      },
      pluck: function (e) {
        return E.map(this, function (t) {
          return t[e];
        });
      },
      show: function () {
        return this.each(function () {
          var t, e, n;
          'none' == this.style.display && (this.style.display = ''),
            'none' == getComputedStyle(this, '').getPropertyValue('display') &&
              (this.style.display =
                ((t = this.nodeName),
                S[t] ||
                  ((e = O.createElement(t)),
                  O.body.appendChild(e),
                  (n = getComputedStyle(e, '').getPropertyValue('display')),
                  e.parentNode.removeChild(e),
                  (S[t] = n = 'none' == n ? 'block' : n)),
                S[t]));
        });
      },
      replaceWith: function (t) {
        return this.before(t).remove();
      },
      wrap: function (e) {
        var n,
          r,
          i = o(e);
        return (
          this[0] &&
            !i &&
            ((n = E(e).get(0)), (r = n.parentNode || 1 < this.length)),
          this.each(function (t) {
            E(this).wrapAll(i ? e.call(this, t) : r ? n.cloneNode(!0) : n);
          })
        );
      },
      wrapAll: function (t) {
        if (this[0]) {
          E(this[0]).before((t = E(t)));
          for (var e; (e = t.children()).length; ) t = e.first();
          E(t).append(this);
        }
        return this;
      },
      wrapInner: function (r) {
        var i = o(r);
        return this.each(function (t) {
          var e = E(this),
            n = e.contents(),
            t = i ? r.call(this, t) : r;
          n.length ? n.wrapAll(t) : e.append(t);
        });
      },
      unwrap: function () {
        return (
          this.parent().each(function () {
            E(this).replaceWith(E(this).children());
          }),
          this
        );
      },
      clone: function () {
        return this.map(function () {
          return this.cloneNode(!0);
        });
      },
      hide: function () {
        return this.css('display', 'none');
      },
      toggle: function (e) {
        return this.each(function () {
          var t = E(this);
          (e === w ? 'none' == t.css('display') : e) ? t.show() : t.hide();
        });
      },
      prev: function (t) {
        return E(this.pluck('previousElementSibling')).filter(t || '*');
      },
      next: function (t) {
        return E(this.pluck('nextElementSibling')).filter(t || '*');
      },
      html: function (n) {
        return 0 in arguments
          ? this.each(function (t) {
              var e = this.innerHTML;
              E(this).empty().append(y(this, n, t, e));
            })
          : 0 in this
          ? this[0].innerHTML
          : null;
      },
      text: function (e) {
        return 0 in arguments
          ? this.each(function (t) {
              t = y(this, e, t, this.textContent);
              this.textContent = null == t ? '' : '' + t;
            })
          : 0 in this
          ? this.pluck('textContent').join('')
          : null;
      },
      attr: function (e, n) {
        var t;
        return 'string' != typeof e || 1 in arguments
          ? this.each(function (t) {
              if (1 === this.nodeType)
                if (i(e)) for (b in e) m(this, b, e[b]);
                else m(this, e, y(this, n, t, this.getAttribute(e)));
            })
          : 0 in this &&
            1 == this[0].nodeType &&
            null != (t = this[0].getAttribute(e))
          ? t
          : w;
      },
      removeAttr: function (t) {
        return this.each(function () {
          1 === this.nodeType &&
            t.split(' ').forEach(function (t) {
              m(this, t);
            }, this);
        });
      },
      prop: function (e, n) {
        return (
          (e = V[e] || e),
          1 in arguments
            ? this.each(function (t) {
                this[e] = y(this, n, t, this[e]);
              })
            : this[0] && this[0][e]
        );
      },
      removeProp: function (t) {
        return (
          (t = V[t] || t),
          this.each(function () {
            delete this[t];
          })
        );
      },
      data: function (t, e) {
        var n = 'data-' + t.replace(R, '-$1').toLowerCase(),
          n = 1 in arguments ? this.attr(n, e) : this.attr(n);
        return null !== n ? g(n) : w;
      },
      val: function (e) {
        return 0 in arguments
          ? (null == e && (e = ''),
            this.each(function (t) {
              this.value = y(this, e, t, this.value);
            }))
          : this[0] &&
              (this[0].multiple
                ? E(this[0])
                    .find('option')
                    .filter(function () {
                      return this.selected;
                    })
                    .pluck('value')
                : this[0].value);
      },
      offset: function (r) {
        if (r)
          return this.each(function (t) {
            var e = E(this),
              n = y(this, r, t, e.offset()),
              t = e.offsetParent().offset(),
              t = { top: n.top - t.top, left: n.left - t.left };
            'static' == e.css('position') && (t.position = 'relative'),
              e.css(t);
          });
        if (!this.length) return null;
        if (
          O.documentElement !== this[0] &&
          !E.contains(O.documentElement, this[0])
        )
          return { top: 0, left: 0 };
        var t = this[0].getBoundingClientRect();
        return {
          left: t.left + window.pageXOffset,
          top: t.top + window.pageYOffset,
          width: Math.round(t.width),
          height: Math.round(t.height),
        };
      },
      css: function (t, e) {
        if (arguments.length < 2) {
          var n = this[0];
          if ('string' == typeof t)
            return n
              ? n.style[x(t)] || getComputedStyle(n, '').getPropertyValue(t)
              : void 0;
          if (H(t)) {
            if (!n) return;
            var r = {},
              i = getComputedStyle(n, '');
            return (
              E.each(t, function (t, e) {
                r[e] = n.style[x(e)] || i.getPropertyValue(e);
              }),
              r
            );
          }
        }
        var o = '';
        if ('string' == u(t))
          e || 0 === e
            ? (o = l(t) + ':' + h(t, e))
            : this.each(function () {
                this.style.removeProperty(l(t));
              });
        else
          for (b in t)
            t[b] || 0 === t[b]
              ? (o += l(b) + ':' + h(b, t[b]) + ';')
              : this.each(function () {
                  this.style.removeProperty(l(b));
                });
        return this.each(function () {
          this.style.cssText += ';' + o;
        });
      },
      index: function (t) {
        return t
          ? this.indexOf(E(t)[0])
          : this.parent().children().indexOf(this[0]);
      },
      hasClass: function (t) {
        return (
          !!t &&
          A.some.call(
            this,
            function (t) {
              return this.test(v(t));
            },
            n(t)
          )
        );
      },
      addClass: function (n) {
        return n
          ? this.each(function (t) {
              var e;
              'className' in this &&
                ((_ = []),
                (e = v(this)),
                y(this, n, t, e)
                  .split(/\s+/g)
                  .forEach(function (t) {
                    E(this).hasClass(t) || _.push(t);
                  }, this),
                _.length && v(this, e + (e ? ' ' : '') + _.join(' ')));
            })
          : this;
      },
      removeClass: function (e) {
        return this.each(function (t) {
          if ('className' in this) {
            if (e === w) return v(this, '');
            (_ = v(this)),
              y(this, e, t, _)
                .split(/\s+/g)
                .forEach(function (t) {
                  _ = _.replace(n(t), ' ');
                }),
              v(this, _.trim());
          }
        });
      },
      toggleClass: function (n, r) {
        return n
          ? this.each(function (t) {
              var e = E(this);
              y(this, n, t, v(this))
                .split(/\s+/g)
                .forEach(function (t) {
                  (r === w ? !e.hasClass(t) : r)
                    ? e.addClass(t)
                    : e.removeClass(t);
                });
            })
          : this;
      },
      scrollTop: function (t) {
        if (this.length) {
          var e = 'scrollTop' in this[0];
          return t === w
            ? e
              ? this[0].scrollTop
              : this[0].pageYOffset
            : this.each(
                e
                  ? function () {
                      this.scrollTop = t;
                    }
                  : function () {
                      this.scrollTo(this.scrollX, t);
                    }
              );
        }
      },
      scrollLeft: function (t) {
        if (this.length) {
          var e = 'scrollLeft' in this[0];
          return t === w
            ? e
              ? this[0].scrollLeft
              : this[0].pageXOffset
            : this.each(
                e
                  ? function () {
                      this.scrollLeft = t;
                    }
                  : function () {
                      this.scrollTo(t, this.scrollY);
                    }
              );
        }
      },
      position: function () {
        if (this.length) {
          var t = this[0],
            e = this.offsetParent(),
            n = this.offset(),
            r = D.test(e[0].nodeName) ? { top: 0, left: 0 } : e.offset();
          return (
            (n.top -= parseFloat(E(t).css('margin-top')) || 0),
            (n.left -= parseFloat(E(t).css('margin-left')) || 0),
            (r.top += parseFloat(E(e[0]).css('border-top-width')) || 0),
            (r.left += parseFloat(E(e[0]).css('border-left-width')) || 0),
            { top: n.top - r.top, left: n.left - r.left }
          );
        }
      },
      offsetParent: function () {
        return this.map(function () {
          for (
            var t = this.offsetParent || O.body;
            t && !D.test(t.nodeName) && 'static' == E(t).css('position');

          )
            t = t.offsetParent;
          return t;
        });
      },
    }),
    (E.fn.detach = E.fn.remove),
    ['width', 'height'].forEach(function (r) {
      var i = r.replace(/./, function (t) {
        return t[0].toUpperCase();
      });
      E.fn[r] = function (e) {
        var t,
          n = this[0];
        return e === w
          ? s(n)
            ? n['inner' + i]
            : a(n)
            ? n.documentElement['scroll' + i]
            : (t = this.offset()) && t[r]
          : this.each(function (t) {
              (n = E(this)).css(r, y(this, e, t, n[r]()));
            });
      };
    }),
    ['after', 'prepend', 'before', 'append'].forEach(function (e, s) {
      var a = s % 2;
      (E.fn[e] = function () {
        var n,
          r,
          i = E.map(arguments, function (t) {
            var e = [];
            return 'array' == (n = u(t))
              ? (t.forEach(function (t) {
                  return t.nodeType !== w
                    ? e.push(t)
                    : E.zepto.isZ(t)
                    ? (e = e.concat(t.get()))
                    : void (e = e.concat(M.fragment(t)));
                }),
                e)
              : 'object' == n || null == t
              ? t
              : M.fragment(t);
          }),
          o = 1 < this.length;
        return i.length < 1
          ? this
          : this.each(function (t, e) {
              (r = a ? e : e.parentNode),
                (e =
                  0 == s
                    ? e.nextSibling
                    : 1 == s
                    ? e.firstChild
                    : 2 == s
                    ? e
                    : null);
              var n = E.contains(O.documentElement, r);
              i.forEach(function (t) {
                if (o) t = t.cloneNode(!0);
                else if (!r) return E(t).remove();
                r.insertBefore(t, e),
                  n &&
                    (function t(e, n) {
                      n(e);
                      for (var r = 0, i = e.childNodes.length; r < i; r++)
                        t(e.childNodes[r], n);
                    })(t, function (t) {
                      var e;
                      null == t.nodeName ||
                        'SCRIPT' !== t.nodeName.toUpperCase() ||
                        (t.type && 'text/javascript' !== t.type) ||
                        t.src ||
                        (e = t.ownerDocument
                          ? t.ownerDocument.defaultView
                          : window).eval.call(e, t.innerHTML);
                    });
              });
            });
      }),
        (E.fn[a ? e + 'To' : 'insert' + (s ? 'Before' : 'After')] = function (
          t
        ) {
          return E(t)[e](this), this;
        });
    }),
    (M.Z.prototype = d.prototype = E.fn),
    (M.uniq = T),
    (M.deserializeValue = g),
    (E.zepto = M),
    E
  );
})();
(window.Zepto = Zepto),
  void 0 === window.$ && (window.$ = Zepto),
  (function (f) {
    function l(t) {
      return t._zid || (t._zid = e++);
    }
    function s(t, e, n, r) {
      var i, o;
      return (
        (e = h(e)).ns &&
          ((o = e.ns),
          (i = new RegExp('(?:^| )' + o.replace(' ', ' .* ?') + '(?: |$)'))),
        (_[l(t)] || []).filter(function (t) {
          return (
            t &&
            (!e.e || t.e == e.e) &&
            (!e.ns || i.test(t.ns)) &&
            (!n || l(t.fn) === l(n)) &&
            (!r || t.sel == r)
          );
        })
      );
    }
    function h(t) {
      t = ('' + t).split('.');
      return { e: t[0], ns: t.slice(1).sort().join(' ') };
    }
    function d(t, e) {
      return (t.del && !n && t.e in r) || !!e;
    }
    function p(t) {
      return x[t] || (n && r[t]) || t;
    }
    function c(i, t, e, o, s, a, u) {
      var n = l(i),
        c = _[n] || (_[n] = []);
      t.split(/\s/).forEach(function (t) {
        if ('ready' == t) return f(document).ready(e);
        var n = h(t);
        (n.fn = e),
          (n.sel = s),
          n.e in x &&
            (e = function (t) {
              var e = t.relatedTarget;
              return !e || (e !== this && !f.contains(this, e))
                ? n.fn.apply(this, arguments)
                : void 0;
            });
        var r = (n.del = a) || e;
        (n.proxy = function (t) {
          if (!(t = m(t)).isImmediatePropagationStopped()) {
            t.data = o;
            var e = r.apply(i, t._args == w ? [t] : [t].concat(t._args));
            return !1 === e && (t.preventDefault(), t.stopPropagation()), e;
          }
        }),
          (n.i = c.length),
          c.push(n),
          'addEventListener' in i &&
            i.addEventListener(p(n.e), n.proxy, d(n, u));
      });
    }
    function y(e, t, n, r, i) {
      var o = l(e);
      (t || '').split(/\s/).forEach(function (t) {
        s(e, t, n, r).forEach(function (t) {
          delete _[o][t.i],
            'removeEventListener' in e &&
              e.removeEventListener(p(t.e), t.proxy, d(t, i));
        });
      });
    }
    function m(r, i) {
      if (i || !r.isDefaultPrevented) {
        (i = i || r),
          f.each(t, function (t, e) {
            var n = i[t];
            (r[t] = function () {
              return (this[e] = a), n && n.apply(i, arguments);
            }),
              (r[e] = T);
          });
        try {
          r.timeStamp || (r.timeStamp = Date.now());
        } catch (t) {}
        (i.defaultPrevented !== w
          ? i.defaultPrevented
          : 'returnValue' in i
          ? !1 === i.returnValue
          : i.getPreventDefault && i.getPreventDefault()) &&
          (r.isDefaultPrevented = a);
      }
      return r;
    }
    function v(t) {
      var e,
        n = { originalEvent: t };
      for (e in t) i.test(e) || t[e] === w || (n[e] = t[e]);
      return m(n, t);
    }
    function g(t) {
      return 'string' == typeof t;
    }
    var w,
      e = 1,
      b = Array.prototype.slice,
      E = f.isFunction,
      _ = {},
      o = {},
      n = 'onfocusin' in window,
      r = { focus: 'focusin', blur: 'focusout' },
      x = { mouseenter: 'mouseover', mouseleave: 'mouseout' };
    (o.click = o.mousedown = o.mouseup = o.mousemove = 'MouseEvents'),
      (f.event = { add: c, remove: y }),
      (f.proxy = function (t, e) {
        var n = 2 in arguments && b.call(arguments, 2);
        if (E(t)) {
          function r() {
            return t.apply(e, n ? n.concat(b.call(arguments)) : arguments);
          }
          return (r._zid = l(t)), r;
        }
        if (g(e))
          return n
            ? (n.unshift(t[e], t), f.proxy.apply(null, n))
            : f.proxy(t[e], t);
        throw new TypeError('expected function');
      }),
      (f.fn.bind = function (t, e, n) {
        return this.on(t, e, n);
      }),
      (f.fn.unbind = function (t, e) {
        return this.off(t, e);
      }),
      (f.fn.one = function (t, e, n, r) {
        return this.on(t, e, n, r, 1);
      });
    var a = function () {
        return !0;
      },
      T = function () {
        return !1;
      },
      i = /^([A-Z]|returnValue$|layer[XY]$|webkitMovement[XY]$)/,
      t = {
        preventDefault: 'isDefaultPrevented',
        stopImmediatePropagation: 'isImmediatePropagationStopped',
        stopPropagation: 'isPropagationStopped',
      };
    (f.fn.delegate = function (t, e, n) {
      return this.on(e, t, n);
    }),
      (f.fn.undelegate = function (t, e, n) {
        return this.off(e, t, n);
      }),
      (f.fn.live = function (t, e) {
        return f(document.body).delegate(this.selector, t, e), this;
      }),
      (f.fn.die = function (t, e) {
        return f(document.body).undelegate(this.selector, t, e), this;
      }),
      (f.fn.on = function (e, i, n, o, s) {
        var a,
          u,
          r = this;
        return e && !g(e)
          ? (f.each(e, function (t, e) {
              r.on(t, i, n, e, s);
            }),
            r)
          : (g(i) || E(o) || !1 === o || ((o = n), (n = i), (i = w)),
            (o !== w && !1 !== n) || ((o = n), (n = w)),
            !1 === o && (o = T),
            r.each(function (t, r) {
              s &&
                (a = function (t) {
                  return y(r, t.type, o), o.apply(this, arguments);
                }),
                i &&
                  (u = function (t) {
                    var e,
                      n = f(t.target).closest(i, r).get(0);
                    return n && n !== r
                      ? ((e = f.extend(v(t), {
                          currentTarget: n,
                          liveFired: r,
                        })),
                        (a || o).apply(n, [e].concat(b.call(arguments, 1))))
                      : void 0;
                  }),
                c(r, e, o, n, i, u || a);
            }));
      }),
      (f.fn.off = function (t, n, e) {
        var r = this;
        return t && !g(t)
          ? (f.each(t, function (t, e) {
              r.off(t, n, e);
            }),
            r)
          : (g(n) || E(e) || !1 === e || ((e = n), (n = w)),
            !1 === e && (e = T),
            r.each(function () {
              y(this, t, e, n);
            }));
      }),
      (f.fn.trigger = function (t, e) {
        return (
          ((t = g(t) || f.isPlainObject(t) ? f.Event(t) : m(t))._args = e),
          this.each(function () {
            t.type in r && 'function' == typeof this[t.type]
              ? this[t.type]()
              : 'dispatchEvent' in this
              ? this.dispatchEvent(t)
              : f(this).triggerHandler(t, e);
          })
        );
      }),
      (f.fn.triggerHandler = function (n, r) {
        var i, o;
        return (
          this.each(function (t, e) {
            ((i = v(g(n) ? f.Event(n) : n))._args = r),
              (i.target = e),
              f.each(s(e, n.type || n), function (t, e) {
                return (
                  (o = e.proxy(i)), !i.isImmediatePropagationStopped() && void 0
                );
              });
          }),
          o
        );
      }),
      'focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error'
        .split(' ')
        .forEach(function (e) {
          f.fn[e] = function (t) {
            return 0 in arguments ? this.bind(e, t) : this.trigger(e);
          };
        }),
      (f.Event = function (t, e) {
        g(t) || (t = (e = t).type);
        var n = document.createEvent(o[t] || 'Events'),
          r = !0;
        if (e) for (var i in e) 'bubbles' == i ? (r = !!e[i]) : (n[i] = e[i]);
        return n.initEvent(t, r, !0), m(n);
      });
  })(Zepto),
  (function (o) {
    (o.fn.serializeArray = function () {
      function n(t) {
        return t.forEach ? t.forEach(n) : void e.push({ name: r, value: t });
      }
      var r,
        i,
        e = [];
      return (
        this[0] &&
          o.each(this[0].elements, function (t, e) {
            (i = e.type),
              (r = e.name) &&
                'fieldset' != e.nodeName.toLowerCase() &&
                !e.disabled &&
                'submit' != i &&
                'reset' != i &&
                'button' != i &&
                'file' != i &&
                (('radio' != i && 'checkbox' != i) || e.checked) &&
                n(o(e).val());
          }),
        e
      );
    }),
      (o.fn.serialize = function () {
        var e = [];
        return (
          this.serializeArray().forEach(function (t) {
            e.push(
              encodeURIComponent(t.name) + '=' + encodeURIComponent(t.value)
            );
          }),
          e.join('&')
        );
      }),
      (o.fn.submit = function (t) {
        var e;
        return (
          0 in arguments
            ? this.bind('submit', t)
            : this.length &&
              ((e = o.Event('submit')),
              this.eq(0).trigger(e),
              e.isDefaultPrevented() || this.get(0).submit()),
          this
        );
      });
  })(Zepto),
  (function () {
    try {
      getComputedStyle(void 0);
    } catch (t) {
      var n = getComputedStyle;
      window.getComputedStyle = function (t, e) {
        try {
          return n(t, e);
        } catch (t) {
          return null;
        }
      };
    }
  })(),
  (function (t) {
    function r() {}
    function o(t) {
      if ('object' != typeof this)
        throw new TypeError('Promises must be constructed via new');
      if ('function' != typeof t) throw new TypeError('not a function');
      (this._state = 0),
        (this._handled = !1),
        (this._value = void 0),
        (this._deferreds = []),
        f(t, this);
    }
    function i(n, r) {
      for (; 3 === n._state; ) n = n._value;
      return 0 === n._state
        ? void n._deferreds.push(r)
        : ((n._handled = !0),
          void o._immediateFn(function () {
            var t,
              e = 1 === n._state ? r.onFulfilled : r.onRejected;
            if (null !== e) {
              try {
                t = e(n._value);
              } catch (t) {
                return void a(r.promise, t);
              }
              s(r.promise, t);
            } else (1 === n._state ? s : a)(r.promise, n._value);
          }));
    }
    function s(e, t) {
      try {
        if (t === e)
          throw new TypeError('A promise cannot be resolved with itself.');
        if (t && ('object' == typeof t || 'function' == typeof t)) {
          var n = t.then;
          if (t instanceof o) return (e._state = 3), (e._value = t), void u(e);
          if ('function' == typeof n)
            return void f(
              ((r = n),
              (i = t),
              function () {
                r.apply(i, arguments);
              }),
              e
            );
        }
        (e._state = 1), (e._value = t), u(e);
      } catch (t) {
        a(e, t);
      }
      var r, i;
    }
    function a(t, e) {
      (t._state = 2), (t._value = e), u(t);
    }
    function u(t) {
      2 === t._state &&
        0 === t._deferreds.length &&
        o._immediateFn(function () {
          t._handled || o._unhandledRejectionFn(t._value);
        });
      for (var e = 0, n = t._deferreds.length; e < n; e++)
        i(t, t._deferreds[e]);
      t._deferreds = null;
    }
    function c(t, e, n) {
      (this.onFulfilled = 'function' == typeof t ? t : null),
        (this.onRejected = 'function' == typeof e ? e : null),
        (this.promise = n);
    }
    function f(t, e) {
      var n = !1;
      try {
        t(
          function (t) {
            n || ((n = !0), s(e, t));
          },
          function (t) {
            n || ((n = !0), a(e, t));
          }
        );
      } catch (t) {
        if (n) return;
        (n = !0), a(e, t);
      }
    }
    var e = setTimeout;
    (o.prototype.catch = function (t) {
      return this.then(null, t);
    }),
      (o.prototype.then = function (t, e) {
        var n = new this.constructor(r);
        return i(this, new c(t, e, n)), n;
      }),
      (o.all = function (t) {
        var a = Array.prototype.slice.call(t);
        return new o(function (i, o) {
          if (0 === a.length) return i([]);
          for (var s = a.length, t = 0; t < a.length; t++)
            !(function e(n, t) {
              try {
                if (t && ('object' == typeof t || 'function' == typeof t)) {
                  var r = t.then;
                  if ('function' == typeof r)
                    return (
                      r.call(
                        t,
                        function (t) {
                          e(n, t);
                        },
                        o
                      ),
                      0
                    );
                }
                (a[n] = t), 0 == --s && i(a);
              } catch (t) {
                o(t);
              }
            })(t, a[t]);
        });
      }),
      (o.resolve = function (e) {
        return e && 'object' == typeof e && e.constructor === o
          ? e
          : new o(function (t) {
              t(e);
            });
      }),
      (o.reject = function (n) {
        return new o(function (t, e) {
          e(n);
        });
      }),
      (o.race = function (i) {
        return new o(function (t, e) {
          for (var n = 0, r = i.length; n < r; n++) i[n].then(t, e);
        });
      }),
      (o._immediateFn =
        'function' == typeof setImmediate
          ? function (t) {
              setImmediate(t);
            }
          : function (t) {
              e(t, 0);
            }),
      (o._unhandledRejectionFn = function (t) {
        'undefined' != typeof console &&
          console &&
          console.warn('Possible Unhandled Promise Rejection:', t);
      }),
      (o._setImmediateFn = function (t) {
        o._immediateFn = t;
      }),
      (o._setUnhandledRejectionFn = function (t) {
        o._unhandledRejectionFn = t;
      }),
      'undefined' != typeof module && module.exports
        ? (module.exports = o)
        : t.Promise || (t.Promise = o);
  })(this),
  (function (t) {
    'use strict';
    function r(t) {
      if (
        ('string' != typeof t && (t += ''),
        /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t))
      )
        throw new TypeError('Invalid character in header field name');
      return t.toLowerCase();
    }
    function i(t) {
      return 'string' != typeof t && (t += ''), t;
    }
    function o(e) {
      var t = {
        next: function () {
          var t = e.shift();
          return { done: void 0 === t, value: t };
        },
      };
      return (
        p &&
          (t[Symbol.iterator] = function () {
            return t;
          }),
        t
      );
    }
    function s(e) {
      (this.map = {}),
        e instanceof s
          ? e.forEach(function (t, e) {
              this.append(e, t);
            }, this)
          : e &&
            Object.getOwnPropertyNames(e).forEach(function (t) {
              this.append(t, e[t]);
            }, this);
    }
    function a(t) {
      return t.bodyUsed
        ? Promise.reject(new TypeError('Already read'))
        : void (t.bodyUsed = !0);
    }
    function u(n) {
      return new Promise(function (t, e) {
        (n.onload = function () {
          t(n.result);
        }),
          (n.onerror = function () {
            e(n.error);
          });
      });
    }
    function e(t) {
      var e = new FileReader(),
        n = u(e);
      return e.readAsArrayBuffer(t), n;
    }
    function n(t) {
      if (t.slice) return t.slice(0);
      var e = new Uint8Array(t.byteLength);
      return e.set(new Uint8Array(t)), e.buffer;
    }
    function c() {
      return (
        (this.bodyUsed = !1),
        (this._initBody = function (t) {
          if ((this._bodyInit = t))
            if ('string' == typeof t) this._bodyText = t;
            else if (y && Blob.prototype.isPrototypeOf(t)) this._bodyBlob = t;
            else if (m && FormData.prototype.isPrototypeOf(t))
              this._bodyFormData = t;
            else if (d && URLSearchParams.prototype.isPrototypeOf(t))
              this._bodyText = '' + t;
            else if (v && y && w(t))
              (this._bodyArrayBuffer = n(t.buffer)),
                (this._bodyInit = new Blob([this._bodyArrayBuffer]));
            else {
              if (!v || (!ArrayBuffer.prototype.isPrototypeOf(t) && !b(t)))
                throw Error('unsupported BodyInit type');
              this._bodyArrayBuffer = n(t);
            }
          else this._bodyText = '';
          this.headers.get('content-type') ||
            ('string' == typeof t
              ? this.headers.set('content-type', 'text/plain;charset=UTF-8')
              : this._bodyBlob && this._bodyBlob.type
              ? this.headers.set('content-type', this._bodyBlob.type)
              : d &&
                URLSearchParams.prototype.isPrototypeOf(t) &&
                this.headers.set(
                  'content-type',
                  'application/x-www-form-urlencoded;charset=UTF-8'
                ));
        }),
        y &&
          ((this.blob = function () {
            var t = a(this);
            if (t) return t;
            if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
            if (this._bodyArrayBuffer)
              return Promise.resolve(new Blob([this._bodyArrayBuffer]));
            if (this._bodyFormData)
              throw Error('could not read FormData body as blob');
            return Promise.resolve(new Blob([this._bodyText]));
          }),
          (this.arrayBuffer = function () {
            return this._bodyArrayBuffer
              ? a(this) || Promise.resolve(this._bodyArrayBuffer)
              : this.blob().then(e);
          })),
        (this.text = function () {
          var t,
            e,
            n = a(this);
          if (n) return n;
          if (this._bodyBlob)
            return (
              (t = this._bodyBlob),
              (e = new FileReader()),
              (n = u(e)),
              e.readAsText(t),
              n
            );
          if (this._bodyArrayBuffer)
            return Promise.resolve(
              (function (t) {
                for (
                  var e = new Uint8Array(t), n = Array(e.length), r = 0;
                  r < e.length;
                  r++
                )
                  n[r] = String.fromCharCode(e[r]);
                return n.join('');
              })(this._bodyArrayBuffer)
            );
          if (this._bodyFormData)
            throw Error('could not read FormData body as text');
          return Promise.resolve(this._bodyText);
        }),
        m &&
          (this.formData = function () {
            return this.text().then(l);
          }),
        (this.json = function () {
          return this.text().then(JSON.parse);
        }),
        this
      );
    }
    function f(t, e) {
      var n,
        r = (e = e || {}).body;
      if (t instanceof f) {
        if (t.bodyUsed) throw new TypeError('Already read');
        (this.url = t.url),
          (this.credentials = t.credentials),
          e.headers || (this.headers = new s(t.headers)),
          (this.method = t.method),
          (this.mode = t.mode),
          r || null == t._bodyInit || ((r = t._bodyInit), (t.bodyUsed = !0));
      } else this.url = t + '';
      if (
        ((this.credentials = e.credentials || this.credentials || 'omit'),
        (!e.headers && this.headers) || (this.headers = new s(e.headers)),
        (this.method =
          ((n = e.method || this.method || 'GET'),
          (t = n.toUpperCase()),
          -1 < E.indexOf(t) ? t : n)),
        (this.mode = e.mode || this.mode || null),
        (this.referrer = null),
        ('GET' === this.method || 'HEAD' === this.method) && r)
      )
        throw new TypeError('Body not allowed for GET or HEAD requests');
      this._initBody(r);
    }
    function l(t) {
      var n = new FormData();
      return (
        t
          .trim()
          .split('&')
          .forEach(function (t) {
            var e;
            t &&
              ((t = (e = t.split('=')).shift().replace(/\+/g, ' ')),
              (e = e.join('=').replace(/\+/g, ' ')),
              n.append(decodeURIComponent(t), decodeURIComponent(e)));
          }),
        n
      );
    }
    function h(t, e) {
      (e = e || {}),
        (this.type = 'default'),
        (this.status = 'status' in e ? e.status : 200),
        (this.ok = 200 <= this.status && this.status < 300),
        (this.statusText = 'statusText' in e ? e.statusText : 'OK'),
        (this.headers = new s(e.headers)),
        (this.url = e.url || ''),
        this._initBody(t);
    }
    var d, p, y, m, v, g, w, b, E, _;
    t.fetch ||
      ((d = 'URLSearchParams' in t),
      (p = 'Symbol' in t && 'iterator' in Symbol),
      (y =
        'FileReader' in t &&
        'Blob' in t &&
        (function () {
          try {
            return new Blob(), !0;
          } catch (t) {
            return !1;
          }
        })()),
      (m = 'FormData' in t),
      (v = 'ArrayBuffer' in t) &&
        ((g = [
          '[object Int8Array]',
          '[object Uint8Array]',
          '[object Uint8ClampedArray]',
          '[object Int16Array]',
          '[object Uint16Array]',
          '[object Int32Array]',
          '[object Uint32Array]',
          '[object Float32Array]',
          '[object Float64Array]',
        ]),
        (w = function (t) {
          return t && DataView.prototype.isPrototypeOf(t);
        }),
        (b =
          ArrayBuffer.isView ||
          function (t) {
            return t && -1 < g.indexOf(Object.prototype.toString.call(t));
          })),
      (s.prototype.append = function (t, e) {
        (t = r(t)), (e = i(e));
        var n = this.map[t];
        this.map[t] = n ? n + ',' + e : e;
      }),
      (s.prototype.delete = function (t) {
        delete this.map[r(t)];
      }),
      (s.prototype.get = function (t) {
        return (t = r(t)), this.has(t) ? this.map[t] : null;
      }),
      (s.prototype.has = function (t) {
        return this.map.hasOwnProperty(r(t));
      }),
      (s.prototype.set = function (t, e) {
        this.map[r(t)] = i(e);
      }),
      (s.prototype.forEach = function (t, e) {
        for (var n in this.map)
          this.map.hasOwnProperty(n) && t.call(e, this.map[n], n, this);
      }),
      (s.prototype.keys = function () {
        var n = [];
        return (
          this.forEach(function (t, e) {
            n.push(e);
          }),
          o(n)
        );
      }),
      (s.prototype.values = function () {
        var e = [];
        return (
          this.forEach(function (t) {
            e.push(t);
          }),
          o(e)
        );
      }),
      (s.prototype.entries = function () {
        var n = [];
        return (
          this.forEach(function (t, e) {
            n.push([e, t]);
          }),
          o(n)
        );
      }),
      p && (s.prototype[Symbol.iterator] = s.prototype.entries),
      (E = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']),
      (f.prototype.clone = function () {
        return new f(this, { body: this._bodyInit });
      }),
      c.call(f.prototype),
      c.call(h.prototype),
      (h.prototype.clone = function () {
        return new h(this._bodyInit, {
          status: this.status,
          statusText: this.statusText,
          headers: new s(this.headers),
          url: this.url,
        });
      }),
      (h.error = function () {
        var t = new h(null, { status: 0, statusText: '' });
        return (t.type = 'error'), t;
      }),
      (_ = [301, 302, 303, 307, 308]),
      (h.redirect = function (t, e) {
        if (-1 === _.indexOf(e)) throw new RangeError('Invalid status code');
        return new h(null, { status: e, headers: { location: t } });
      }),
      (t.Headers = s),
      (t.Request = f),
      (t.Response = h),
      (t.fetch = function (n, o) {
        return new Promise(function (r, t) {
          var e = new f(n, o),
            i = new XMLHttpRequest();
          (i.onload = function () {
            var n,
              t = {
                status: i.status,
                statusText: i.statusText,
                headers:
                  ((e = i.getAllResponseHeaders() || ''),
                  (n = new s()),
                  e.split(/\r?\n/).forEach(function (t) {
                    var e = t.split(':'),
                      t = e.shift().trim();
                    t && ((e = e.join(':').trim()), n.append(t, e));
                  }),
                  n),
              };
            t.url =
              'responseURL' in i
                ? i.responseURL
                : t.headers.get('X-Request-URL');
            var e = 'response' in i ? i.response : i.responseText;
            r(new h(e, t));
          }),
            (i.onerror = function () {
              t(new TypeError('Network request failed'));
            }),
            (i.ontimeout = function () {
              t(new TypeError('Network request failed'));
            }),
            i.open(e.method, e.url, !0),
            'include' === e.credentials && (i.withCredentials = !0),
            'responseType' in i && y && (i.responseType = 'blob'),
            e.headers.forEach(function (t, e) {
              i.setRequestHeader(e, t);
            }),
            i.send(void 0 === e._bodyInit ? null : e._bodyInit);
        });
      }),
      (t.fetch.polyfill = !0));
  })('undefined' != typeof self ? self : this),
  (window.trackDonation = function (t, e, n) {
    'one-time' === t &&
      plausible('donation', {
        props: { type: 'one-time', amount: e, method: n },
      }),
      'recurring' === t &&
        plausible('donation', {
          props: { type: 'recurring', amount: e, method: n },
        });
  }),
  window.razorpayId &&
    ((window.donate = function (n) {
      var r = $('#donateOneTimeFullname').val(),
        i = $('#donateOneTimePan').val(),
        o = $('#donateOneTimeAddress').val(),
        t = new Promise(function (t, e) {
          new Razorpay({
            key: window.razorpayId,
            amount: 100 * n,
            name: window.razorpayName,
            description: window.razorpayDescription,
            prefill: { name: r },
            notes: { NAME: r, PAN: i, ADDRESS: o },
            handler: t,
          }).open();
        }).then(() => {
          window.trackDonation('one-time', n, 'unknown');
        });
      return window.onDonate ? t.then(onDonate) : t;
    }),
    (window.donateRecurring = function () {
      var t = $('input[name="plan_id"]:checked').val(),
        r = $('#donateFullname').val(),
        i = parseInt($('#donateMobile').val()),
        o = $('#donateEmail').val(),
        e = $('#donatePan').val(),
        n = $('#donateAddress').val(),
        s = $('input[name="donateMethod"]:checked').val(),
        a = parseInt($('#pinCode').val()),
        u = {
          plan_BuFEw6LkoTdbzE: 100,
          plan_BuFF8DNcNbgZbw: 250,
          plan_BuFFMbAG0vCm51: 600,
          plan_BuFFaLWJtfFsQW: 1e3,
          plan_BuFFo1NQ7Lakem: 1500,
          plan_GV1ma2L2YFL0h9: 2e3,
        }[t];
      'credit' === s &&
        $.ajax({
          data: JSON.stringify({
            plan: t,
            name: r,
            email: o,
            contact: i,
            pan: e,
            max_amount: u,
            address: { address_line1: n, pincode: a },
          }),
          type: 'POST',
          processData: !1,
          contentType: 'application/json',
          url: 'https://api.internetfreedom.in/recurring/',
        })
          .then(function (t) {
            return t.id;
          })
          .then(function (n) {
            var t = new Promise(function (t, e) {
              new Razorpay({
                key: window.razorpaySubscriptionId,
                subscription_id: n,
                name: window.razorpayName,
                description: window.razorpayDescription,
                prefill: { name: r, email: o, contact: i },
                handler: t,
              }).open();
            }).then(() => {
              window.trackDonation('recurring', u, s);
            });
            return window.onDonate ? t.then(onDonate) : t;
          });
    })),
  $(function () {
    $('.toggle-menu').click(function (t) {
      return (
        $('.menu').toggleClass('show'),
        $('.close-menu').toggleClass('show'),
        $('.toggle-menu').toggleClass('hide'),
        !1
      );
    }),
      $('.close-menu').click(function (t) {
        return (
          $('.menu').toggleClass('show'),
          $('.close-menu').toggleClass('show'),
          $('.toggle-menu').toggleClass('hide'),
          !1
        );
      }),
      $('input[type=radio]').change(function (t) {
        t.target.checked &&
          $('input[type=radio][name=' + t.target.name + ']').each(function () {
            this !== t.target && $(this).change();
          });
      }),
      $('[data-toggle]')
        .change(function (t) {
          var e = t.target.getAttribute('data-toggle'),
            t = t.target.checked;
          $('.if-' + e)[t ? 'addClass' : 'removeClass']('show');
        })
        .change();
  });
//# sourceMappingURL=base.js.map
