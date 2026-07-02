IE.fModule({
  f: function (exports, require, module, global) {
    (function () {
      function l(a) {
        try {
          return (a.defaultView && a.defaultView.frameElement) || null;
        } catch (b) {
          return null;
        }
      }
      function v(a) {
        this.time = a.time;
        this.target = a.target;
        this.rootBounds = u(a.rootBounds);
        this.boundingClientRect = u(a.boundingClientRect);
        this.intersectionRect = u(a.intersectionRect || m());
        this.isIntersecting = !!a.intersectionRect;
        a = this.boundingClientRect;
        a = a.width * a.height;
        var b = this.intersectionRect;
        b = b.width * b.height;
        this.intersectionRatio = a
          ? Number((b / a).toFixed(4))
          : this.isIntersecting
            ? 1
            : 0;
      }
      function g(a, b) {
        var c = b || {};
        if ('function' != typeof a) throw Error('callback must be a function');
        if (c.root && 1 != c.root.nodeType && 9 != c.root.nodeType)
          throw Error('root must be a Document or Element');
        this.l = A(this.l.bind(this), this.F);
        this.H = a;
        this.g = [];
        this.h = [];
        this.v = this.M(c.rootMargin);
        this.thresholds = this.L(c.threshold);
        this.root = c.root || null;
        this.rootMargin = this.v
          .map(function (d) {
            return d.value + d.D;
          })
          .join(' ');
        this.i = [];
        this.j = [];
      }
      function A(a, b) {
        var c = null;
        return function () {
          c ||
            (c = setTimeout(function () {
              a();
              c = null;
            }, b));
        };
      }
      function w(a, b, c, d) {
        'function' == typeof a.addEventListener
          ? a.addEventListener(b, c, d || !1)
          : 'function' == typeof a.attachEvent && a.attachEvent('on' + b, c);
      }
      function x(a, b, c, d) {
        'function' == typeof a.removeEventListener
          ? a.removeEventListener(b, c, d || !1)
          : 'function' == typeof a.R && a.R('on' + b, c);
      }
      function n(a) {
        try {
          var b = a.getBoundingClientRect();
        } catch (c) {}
        if (!b) return m();
        (b.width && b.height) ||
          (b = {
            top: b.top,
            right: b.right,
            bottom: b.bottom,
            left: b.left,
            width: b.right - b.left,
            height: b.bottom - b.top,
          });
        return b;
      }
      function m() {
        return { top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0 };
      }
      function u(a) {
        return !a || 'x' in a
          ? a
          : {
              top: a.top,
              y: a.top,
              bottom: a.bottom,
              left: a.left,
              x: a.left,
              right: a.right,
              width: a.width,
              height: a.height,
            };
      }
      function y(a, b) {
        for (var c = b; c; ) {
          if (c == a) return !0;
          c = p(c);
        }
        return !1;
      }
      function p(a) {
        var b = a.parentNode;
        if (9 == a.nodeType && a != k) return l(a);
        b && b.assignedSlot && (b = b.assignedSlot.parentNode);
        return b && 11 == b.nodeType && b.host ? b.host : b;
      }
      function z(a) {
        return a && 9 === a.nodeType;
      }
      if ('object' === typeof window)
        if (
          'IntersectionObserver' in window &&
          'IntersectionObserverEntry' in window &&
          'intersectionRatio' in window.IntersectionObserverEntry.prototype
        )
          'isIntersecting' in window.IntersectionObserverEntry.prototype ||
            Object.defineProperty(
              window.IntersectionObserverEntry.prototype,
              'isIntersecting',
              {
                get: function () {
                  return 0 < this.intersectionRatio;
                },
              },
            );
        else {
          var k = (function (a) {
              for (var b = l(a); b; ) (a = b.ownerDocument), (b = l(a));
              return a;
            })(window.document),
            q = [];
          g.prototype.F = 100;
          g.prototype.m = null;
          g.prototype.G = !0;
          g.prototype.observe = function (a) {
            if (
              !this.g.some(function (b) {
                return b.element == a;
              })
            ) {
              if (!a || 1 != a.nodeType)
                throw Error('target must be an Element');
              this.N();
              this.g.push({ element: a, C: null });
              this.s(a.ownerDocument);
              this.l();
            }
          };
          g.prototype.unobserve = function (a) {
            this.g = this.g.filter(function (b) {
              return b.element != a;
            });
            this.A(a.ownerDocument);
            0 == this.g.length && this.B();
          };
          g.prototype.disconnect = function () {
            this.g = [];
            this.P();
            this.B();
          };
          g.prototype.takeRecords = function () {
            var a = this.h.slice();
            this.h = [];
            return a;
          };
          g.prototype.L = function (a) {
            a = a || [0];
            Array.isArray(a) || (a = [a]);
            return a.sort().filter(function (b, c, d) {
              if ('number' != typeof b || isNaN(b) || 0 > b || 1 < b)
                throw Error(
                  'threshold must be a number between 0 and 1 inclusively',
                );
              return b !== d[c - 1];
            });
          };
          g.prototype.M = function (a) {
            a = (a || '0px').split(/\s+/).map(function (b) {
              b = /^(-?\d*\.?\d+)(px|%)$/.exec(b);
              if (!b)
                throw Error(
                  'rootMargin must be specified in pixels or percent',
                );
              return { value: parseFloat(b[1]), D: b[2] };
            });
            a[1] = a[1] || a[0];
            a[2] = a[2] || a[0];
            a[3] = a[3] || a[1];
            return a;
          };
          g.prototype.s = function (a) {
            var b = a.defaultView;
            if (b && -1 == this.i.indexOf(a)) {
              var c = this.l,
                d = null,
                e = null;
              this.m
                ? (d = b.setInterval(c, this.m))
                : (w(b, 'resize', c, !0),
                  w(a, 'scroll', c, !0),
                  this.G &&
                    'MutationObserver' in b &&
                    ((e = new b.MutationObserver(c)),
                    e.observe(a, {
                      attributes: !0,
                      childList: !0,
                      characterData: !0,
                      subtree: !0,
                    })));
              this.i.push(a);
              this.j.push(function () {
                var f = a.defaultView;
                f && (d && f.clearInterval(d), x(f, 'resize', c, !0));
                x(a, 'scroll', c, !0);
                e && e.disconnect();
              });
              a !=
                ((this.root && (this.root.ownerDocument || this.root)) || k) &&
                (b = l(a)) &&
                this.s(b.ownerDocument);
            }
          };
          g.prototype.A = function (a) {
            var b = this.i.indexOf(a);
            if (-1 != b) {
              var c =
                (this.root && (this.root.ownerDocument || this.root)) || k;
              if (
                !this.g.some(function (e) {
                  e = e.element.ownerDocument;
                  if (e == a) return !0;
                  for (; e && e != c; )
                    if (((e = (e = l(e)) && e.ownerDocument), e == a))
                      return !0;
                  return !1;
                })
              ) {
                var d = this.j[b];
                this.i.splice(b, 1);
                this.j.splice(b, 1);
                d();
                a != c && (b = l(a)) && this.A(b.ownerDocument);
              }
            }
          };
          g.prototype.P = function () {
            var a = this.j.slice(0);
            this.i.length = 0;
            for (var b = (this.j.length = 0); b < a.length; b++) a[b]();
          };
          g.prototype.l = function () {
            var a = this.O(),
              b = a ? this.J() : m();
            this.g.forEach(function (c) {
              var d = c.element,
                e = n(d),
                f = this.u(d),
                h = c.C,
                r = a && f && this.o(d, e, b);
              var t = this.u(d) ? b : m();
              c = c.C = new v({
                time:
                  window.performance && performance.now && performance.now(),
                target: d,
                boundingClientRect: e,
                rootBounds: t,
                intersectionRect: r,
              });
              h
                ? a && f
                  ? this.K(h, c) && this.h.push(c)
                  : h && h.isIntersecting && this.h.push(c)
                : this.h.push(c);
            }, this);
            this.h.length && this.H(this.takeRecords(), this);
          };
          g.prototype.o = function (a, b, c) {
            if ('none' != window.getComputedStyle(a).display) {
              var d = b;
              b = p(a);
              for (a = !1; !a && b; ) {
                var e = null,
                  f = 1 == b.nodeType ? window.getComputedStyle(b) : {};
                if ('none' == f.display) return null;
                if (b == this.root || 9 == b.nodeType)
                  if (((a = !0), b == this.root || b == k)) e = c;
                  else {
                    var h = (b = p(b)) && n(b);
                    f = b && this.o(b, h, c);
                    h && f
                      ? ((e = f.top - h.top),
                        (h = f.left - h.left),
                        (e = {
                          top: e,
                          left: h,
                          height: f.height,
                          width: f.width,
                          bottom: e + f.height,
                          right: h + f.width,
                        }))
                      : (d = b = null);
                  }
                else
                  (h = b.ownerDocument),
                    b != h.body &&
                      b != h.documentElement &&
                      'visible' != f.overflow &&
                      (e = n(b));
                if (e) {
                  f = Math.max(e.top, d.top);
                  h = Math.min(e.bottom, d.bottom);
                  var r = Math.max(e.left, d.left);
                  d = Math.min(e.right, d.right);
                  e = d - r;
                  var t = h - f;
                  d =
                    (0 <= e &&
                      0 <= t && {
                        top: f,
                        bottom: h,
                        left: r,
                        right: d,
                        width: e,
                        height: t,
                      }) ||
                    null;
                }
                if (!d) break;
                b = b && p(b);
              }
              return d;
            }
          };
          g.prototype.J = function () {
            if (this.root && !z(this.root)) var a = n(this.root);
            else {
              var b = z(this.root) ? this.root : k;
              a = b.documentElement;
              b = b.body;
              a = {
                top: 0,
                left: 0,
                right: a.clientWidth || b.clientWidth,
                width: a.clientWidth || b.clientWidth,
                bottom: a.clientHeight || b.clientHeight,
                height: a.clientHeight || b.clientHeight,
              };
            }
            return this.I(a);
          };
          g.prototype.I = function (a) {
            var b = this.v.map(function (c, d) {
              return 'px' == c.D
                ? c.value
                : (c.value * (d % 2 ? a.width : a.height)) / 100;
            });
            b = {
              top: a.top - b[0],
              right: a.right + b[1],
              bottom: a.bottom + b[2],
              left: a.left - b[3],
            };
            b.width = b.right - b.left;
            b.height = b.bottom - b.top;
            return b;
          };
          g.prototype.K = function (a, b) {
            var c = a && a.isIntersecting ? a.intersectionRatio || 0 : -1,
              d = b.isIntersecting ? b.intersectionRatio || 0 : -1;
            if (c !== d)
              for (var e = 0; e < this.thresholds.length; e++) {
                var f = this.thresholds[e];
                if (f == c || f == d || f < c !== f < d) return !0;
              }
          };
          g.prototype.O = function () {
            return !this.root || y(k, this.root);
          };
          g.prototype.u = function (a) {
            var b = (this.root && (this.root.ownerDocument || this.root)) || k;
            return y(b, a) && (!this.root || b == a.ownerDocument);
          };
          g.prototype.N = function () {
            0 > q.indexOf(this) && q.push(this);
          };
          g.prototype.B = function () {
            var a = q.indexOf(this);
            -1 != a && q.splice(a, 1);
          };
          window.IntersectionObserver = g;
          window.IntersectionObserverEntry = v;
        }
    })();
  },
  fn: 'intersectionobserver_polyfill.js',
});