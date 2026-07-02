IE.fModule({
  f: function (exports, require, module, global) {
    (function (n, l) {
      'object' === typeof exports && 'undefined' !== typeof module
        ? (module.exports = l())
        : 'function' === typeof define && define.amd
          ? define(l)
          : (n.ResizeObserver = l());
    })(this, function () {
      function n(b) {
        for (var a = [], c = arguments.length - 1; 0 < c--; )
          a[c] = arguments[c + 1];
        return a.reduce(function (a, c) {
          return a + (parseFloat(b['border-' + c + '-width']) || 0);
        }, 0);
      }
      var l = (function () {
          function b(b, c) {
            var a = -1;
            b.some(function (b, e) {
              return b[0] === c ? ((a = e), !0) : !1;
            });
            return a;
          }
          return 'undefined' !== typeof Map
            ? Map
            : (function () {
                function a() {
                  this.__entries__ = [];
                }
                var c = { size: { configurable: !0 } };
                c.size.get = function () {
                  return this.__entries__.length;
                };
                a.prototype.get = function (a) {
                  a = b(this.__entries__, a);
                  return (a = this.__entries__[a]) && a[1];
                };
                a.prototype.set = function (a, c) {
                  var e = b(this.__entries__, a);
                  ~e
                    ? (this.__entries__[e][1] = c)
                    : this.__entries__.push([a, c]);
                };
                a.prototype['delete'] = function (a) {
                  var c = this.__entries__;
                  a = b(c, a);
                  ~a && c.splice(a, 1);
                };
                a.prototype.has = function (a) {
                  return !!~b(this.__entries__, a);
                };
                a.prototype.clear = function () {
                  this.__entries__.splice(0);
                };
                a.prototype.forEach = function (a, b) {
                  void 0 === b && (b = null);
                  for (var c = 0, e = this.__entries__; c < e.length; c += 1) {
                    var g = e[c];
                    a.call(b, g[1], g[0]);
                  }
                };
                Object.defineProperties(a.prototype, c);
                return a;
              })();
        })(),
        q =
          'undefined' !== typeof window &&
          'undefined' !== typeof document &&
          window.document === document,
        p =
          'undefined' !== typeof global && global.Math === Math
            ? global
            : 'undefined' !== typeof self && self.Math === Math
              ? self
              : 'undefined' !== typeof window && Math === Math
                ? window
                : Function('return this')(),
        x = (function () {
          return 'function' === typeof requestAnimationFrame
            ? requestAnimationFrame.bind(p)
            : function (b) {
                return setTimeout(function () {
                  return b(Date.now());
                }, 1e3 / 60);
              };
        })(),
        y = function (b, a) {
          function c() {
            f && ((f = !1), b());
            h && g();
          }
          function e() {
            x(c);
          }
          function g() {
            var b = Date.now();
            if (f) {
              if (2 > b - d) return;
              h = !0;
            } else (f = !0), (h = !1), setTimeout(e, a);
            d = b;
          }
          var f = !1,
            h = !1,
            d = 0;
          return g;
        },
        z = 'top right bottom left width height size weight'.split(' '),
        A = 'undefined' !== typeof MutationObserver,
        d = function () {
          this.mutationEventsAdded_ = this.connected_ = !1;
          this.mutationsObserver_ = null;
          this.observers_ = [];
          this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
          this.refresh = y(this.refresh.bind(this), 20);
        };
      d.prototype.addObserver = function (b) {
        ~this.observers_.indexOf(b) || this.observers_.push(b);
        this.connected_ || this.connect_();
      };
      d.prototype.removeObserver = function (b) {
        var a = this.observers_;
        b = a.indexOf(b);
        ~b && a.splice(b, 1);
        !a.length && this.connected_ && this.disconnect_();
      };
      d.prototype.refresh = function () {
        this.updateObservers_() && this.refresh();
      };
      d.prototype.updateObservers_ = function () {
        var b = this.observers_.filter(function (a) {
          return a.gatherActive(), a.hasActive();
        });
        b.forEach(function (a) {
          return a.broadcastActive();
        });
        return 0 < b.length;
      };
      d.prototype.connect_ = function () {
        q &&
          !this.connected_ &&
          (document.addEventListener('transitionend', this.onTransitionEnd_),
          window.addEventListener('resize', this.refresh),
          A
            ? ((this.mutationsObserver_ = new MutationObserver(this.refresh)),
              this.mutationsObserver_.observe(document, {
                attributes: !0,
                childList: !0,
                characterData: !0,
                subtree: !0,
              }))
            : (document.addEventListener('DOMSubtreeModified', this.refresh),
              (this.mutationEventsAdded_ = !0)),
          (this.connected_ = !0));
      };
      d.prototype.disconnect_ = function () {
        q &&
          this.connected_ &&
          (document.removeEventListener('transitionend', this.onTransitionEnd_),
          window.removeEventListener('resize', this.refresh),
          this.mutationsObserver_ && this.mutationsObserver_.disconnect(),
          this.mutationEventsAdded_ &&
            document.removeEventListener('DOMSubtreeModified', this.refresh),
          (this.mutationsObserver_ = null),
          (this.connected_ = this.mutationEventsAdded_ = !1));
      };
      d.prototype.onTransitionEnd_ = function (b) {
        var a = b.propertyName;
        void 0 === a && (a = '');
        z.some(function (b) {
          return !!~a.indexOf(b);
        }) && this.refresh();
      };
      d.getInstance = function () {
        this.instance_ || (this.instance_ = new d());
        return this.instance_;
      };
      d.instance_ = null;
      var u = function (b, a) {
          for (var c = 0, e = Object.keys(a); c < e.length; c += 1) {
            var g = e[c];
            Object.defineProperty(b, g, {
              value: a[g],
              enumerable: !1,
              writable: !1,
              configurable: !0,
            });
          }
          return b;
        },
        m = function (b) {
          return (b && b.ownerDocument && b.ownerDocument.defaultView) || p;
        },
        v = { x: 0, y: 0, width: 0, height: 0 },
        B = (function () {
          return 'undefined' !== typeof SVGGraphicsElement
            ? function (b) {
                return b instanceof m(b).SVGGraphicsElement;
              }
            : function (b) {
                return (
                  b instanceof m(b).SVGElement &&
                  'function' === typeof b.getBBox
                );
              };
        })(),
        r = function (b) {
          this.broadcastHeight = this.broadcastWidth = 0;
          this.contentRect_ = { x: 0, y: 0, width: 0, height: 0 };
          this.target = b;
        };
      r.prototype.isActive = function () {
        var b = this.target;
        if (q)
          if (B(b)) {
            var a = b.getBBox();
            a = { x: 0, y: 0, width: a.width, height: a.height };
          } else {
            var c = b.clientWidth,
              e = b.clientHeight;
            if (c || e) {
              var g = m(b).getComputedStyle(b);
              a = {};
              for (
                var f = 0, h = ['top', 'right', 'bottom', 'left'];
                f < h.length;
                f += 1
              ) {
                var d = h[f];
                a[d] = parseFloat(g['padding-' + d]) || 0;
              }
              var k = a.left + a.right;
              d = a.top + a.bottom;
              f = parseFloat(g.width) || 0;
              h = parseFloat(g.height) || 0;
              'border-box' === g.boxSizing &&
                (Math.round(f + k) !== c && (f -= n(g, 'left', 'right') + k),
                Math.round(h + d) !== e && (h -= n(g, 'top', 'bottom') + d));
              b !== m(b).document.documentElement &&
                ((b = Math.round(f + k) - c),
                (e = Math.round(h + d) - e),
                1 !== Math.abs(b) && (f -= b),
                1 !== Math.abs(e) && (h -= e));
              a = { x: a.left, y: a.top, width: f, height: h };
            } else a = v;
          }
        else a = v;
        this.contentRect_ = a;
        return (
          a.width !== this.broadcastWidth || a.height !== this.broadcastHeight
        );
      };
      r.prototype.broadcastRect = function () {
        var b = this.contentRect_;
        this.broadcastWidth = b.width;
        this.broadcastHeight = b.height;
        return b;
      };
      var C = function (b, a) {
          var c = a.x,
            e = a.y,
            d = a.width,
            f = a.height,
            h = Object.create(
              ('undefined' !== typeof DOMRectReadOnly
                ? DOMRectReadOnly
                : Object
              ).prototype,
            );
          u(h, {
            x: c,
            y: e,
            width: d,
            height: f,
            top: e,
            right: c + d,
            bottom: f + e,
            left: c,
          });
          u(this, { target: b, contentRect: h });
        },
        k = function (b, a, c) {
          this.activeObservations_ = [];
          this.observations_ = new l();
          if ('function' !== typeof b)
            throw new TypeError(
              'The callback provided as parameter 1 is not a function.',
            );
          this.callback_ = b;
          this.controller_ = a;
          this.callbackCtx_ = c;
        };
      k.prototype.observe = function (b) {
        if (!arguments.length)
          throw new TypeError('1 argument required, but only 0 present.');
        if ('undefined' !== typeof Element && Element instanceof Object) {
          if (!(b instanceof m(b).Element))
            throw new TypeError('parameter 1 is not of type "Element".');
          var a = this.observations_;
          a.has(b) ||
            (a.set(b, new r(b)),
            this.controller_.addObserver(this),
            this.controller_.refresh());
        }
      };
      k.prototype.unobserve = function (b) {
        if (!arguments.length)
          throw new TypeError('1 argument required, but only 0 present.');
        if ('undefined' !== typeof Element && Element instanceof Object) {
          if (!(b instanceof m(b).Element))
            throw new TypeError('parameter 1 is not of type "Element".');
          var a = this.observations_;
          a.has(b) &&
            (a['delete'](b), a.size || this.controller_.removeObserver(this));
        }
      };
      k.prototype.disconnect = function () {
        this.clearActive();
        this.observations_.clear();
        this.controller_.removeObserver(this);
      };
      k.prototype.gatherActive = function () {
        var b = this;
        this.clearActive();
        this.observations_.forEach(function (a) {
          a.isActive() && b.activeObservations_.push(a);
        });
      };
      k.prototype.broadcastActive = function () {
        if (this.hasActive()) {
          var b = this.callbackCtx_,
            a = this.activeObservations_.map(function (a) {
              return new C(a.target, a.broadcastRect());
            });
          this.callback_.call(b, a, b);
          this.clearActive();
        }
      };
      k.prototype.clearActive = function () {
        this.activeObservations_.splice(0);
      };
      k.prototype.hasActive = function () {
        return 0 < this.activeObservations_.length;
      };
      var w = 'undefined' !== typeof WeakMap ? new WeakMap() : new l(),
        t = function (b) {
          if (!(this instanceof t))
            throw new TypeError('Cannot call a class as a function.');
          if (!arguments.length)
            throw new TypeError('1 argument required, but only 0 present.');
          var a = d.getInstance();
          a = new k(b, a, this);
          w.set(this, a);
        };
      ['observe', 'unobserve', 'disconnect'].forEach(function (b) {
        t.prototype[b] = function () {
          var a;
          return (a = w.get(this))[b].apply(a, arguments);
        };
      });
      var D = 'undefined' !== typeof p.ResizeObserver ? p.ResizeObserver : t;
      return D;
    });
  },
  fn: 'resizeobserver_polyfill.js',
});