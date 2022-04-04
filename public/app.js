(() => {
  "use strict";
  var e = {
      402: (e, t, n) => {
        n.d(t, { Z: () => s });
        var r = n(81),
          a = n.n(r),
          o = n(645),
          i = n.n(o)()(a());
        i.push([
          e.id,
          "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap);",
        ]),
          i.push([
            e.id,
            ':root {\r\n  --blue: #8f34ff;\r\n  --red: #e54e3d;\r\n  --white: #fafafa;\r\n  --light-gray: #f2f2f2;\r\n  --gray: #6c6e70;\r\n  --text-gray: #91979b;\r\n}\r\n* {\r\n  font-family: "Roboto", sans-serif;\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nimg {\r\n  cursor: pointer;\r\n}\r\nbody {\r\n  height: 100vh;\r\n}\r\ndiv#app {\r\n  position: absolute;\r\n  left: 50%;\r\n  transform: translateX(-50%);\r\n  top: 15%;\r\n}\r\ndiv.input-select {\r\n  display: flex;\r\n  width: 700px;\r\n  justify-content: space-between;\r\n}\r\nform.input {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  width: 455px;\r\n}\r\ninput {\r\n  width: 400px;\r\n  height: 40px;\r\n  font-size: 18px;\r\n  font-weight: 500;\r\n  color: #000;\r\n  padding: 0 8px;\r\n}\r\ninput::placeholder {\r\n  color: var(--text-gray);\r\n}\r\nbutton {\r\n  border: none;\r\n  height: 41px;\r\n  width: 41px;\r\n}\r\nimg.input__add {\r\n  width: 41px;\r\n}\r\nselect {\r\n  appearance: none;\r\n  padding: 0 10px;\r\n  font-size: 18px;\r\n  width: 165px;\r\n  cursor: pointer;\r\n  height: 40px;\r\n}\r\nimg.sort {\r\n  position: relative;\r\n  left: -56px;\r\n  width: 13px;\r\n}\r\nul {\r\n  list-style-type: none;\r\n  margin-top: 30px;\r\n}\r\nli {\r\n  width: 455px;\r\n  height: 40px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  margin: 13px 0;\r\n  background-color: var(--light-gray);\r\n  padding-left: 15px;\r\n  border-radius: 2px;\r\n  transition: all 0.2s;\r\n}\r\np.task__text {\r\n  font-size: 18px;\r\n}\r\ndiv.task__icons {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  width: 130px;\r\n}\r\ndiv.task__icons img {\r\n  width: 40px;\r\n}\r\n.check {\r\n  opacity: 0.5;\r\n}\r\n.line-through {\r\n  text-decoration: line-through #fff 1px;\r\n}\r\n',
            "",
          ]);
        const s = i;
      },
      645: (e) => {
        e.exports = function (e) {
          var t = [];
          return (
            (t.toString = function () {
              return this.map(function (t) {
                var n = "",
                  r = void 0 !== t[5];
                return (
                  t[4] && (n += "@supports (".concat(t[4], ") {")),
                  t[2] && (n += "@media ".concat(t[2], " {")),
                  r &&
                    (n += "@layer".concat(
                      t[5].length > 0 ? " ".concat(t[5]) : "",
                      " {"
                    )),
                  (n += e(t)),
                  r && (n += "}"),
                  t[2] && (n += "}"),
                  t[4] && (n += "}"),
                  n
                );
              }).join("");
            }),
            (t.i = function (e, n, r, a, o) {
              "string" == typeof e && (e = [[null, e, void 0]]);
              var i = {};
              if (r)
                for (var s = 0; s < this.length; s++) {
                  var c = this[s][0];
                  null != c && (i[c] = !0);
                }
              for (var l = 0; l < e.length; l++) {
                var u = [].concat(e[l]);
                (r && i[u[0]]) ||
                  (void 0 !== o &&
                    (void 0 === u[5] ||
                      (u[1] = "@layer"
                        .concat(u[5].length > 0 ? " ".concat(u[5]) : "", " {")
                        .concat(u[1], "}")),
                    (u[5] = o)),
                  n &&
                    (u[2]
                      ? ((u[1] = "@media "
                          .concat(u[2], " {")
                          .concat(u[1], "}")),
                        (u[2] = n))
                      : (u[2] = n)),
                  a &&
                    (u[4]
                      ? ((u[1] = "@supports ("
                          .concat(u[4], ") {")
                          .concat(u[1], "}")),
                        (u[4] = a))
                      : (u[4] = "".concat(a))),
                  t.push(u));
              }
            }),
            t
          );
        };
      },
      81: (e) => {
        e.exports = function (e) {
          return e[1];
        };
      },
      379: (e) => {
        var t = [];
        function n(e) {
          for (var n = -1, r = 0; r < t.length; r++)
            if (t[r].identifier === e) {
              n = r;
              break;
            }
          return n;
        }
        function r(e, r) {
          for (var o = {}, i = [], s = 0; s < e.length; s++) {
            var c = e[s],
              l = r.base ? c[0] + r.base : c[0],
              u = o[l] || 0,
              d = "".concat(l, " ").concat(u);
            o[l] = u + 1;
            var f = n(d),
              p = {
                css: c[1],
                media: c[2],
                sourceMap: c[3],
                supports: c[4],
                layer: c[5],
              };
            if (-1 !== f) t[f].references++, t[f].updater(p);
            else {
              var h = a(p, r);
              (r.byIndex = s),
                t.splice(s, 0, { identifier: d, updater: h, references: 1 });
            }
            i.push(d);
          }
          return i;
        }
        function a(e, t) {
          var n = t.domAPI(t);
          return (
            n.update(e),
            function (t) {
              if (t) {
                if (
                  t.css === e.css &&
                  t.media === e.media &&
                  t.sourceMap === e.sourceMap &&
                  t.supports === e.supports &&
                  t.layer === e.layer
                )
                  return;
                n.update((e = t));
              } else n.remove();
            }
          );
        }
        e.exports = function (e, a) {
          var o = r((e = e || []), (a = a || {}));
          return function (e) {
            e = e || [];
            for (var i = 0; i < o.length; i++) {
              var s = n(o[i]);
              t[s].references--;
            }
            for (var c = r(e, a), l = 0; l < o.length; l++) {
              var u = n(o[l]);
              0 === t[u].references && (t[u].updater(), t.splice(u, 1));
            }
            o = c;
          };
        };
      },
      569: (e) => {
        var t = {};
        e.exports = function (e, n) {
          var r = (function (e) {
            if (void 0 === t[e]) {
              var n = document.querySelector(e);
              if (
                window.HTMLIFrameElement &&
                n instanceof window.HTMLIFrameElement
              )
                try {
                  n = n.contentDocument.head;
                } catch (e) {
                  n = null;
                }
              t[e] = n;
            }
            return t[e];
          })(e);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          r.appendChild(n);
        };
      },
      216: (e) => {
        e.exports = function (e) {
          var t = document.createElement("style");
          return e.setAttributes(t, e.attributes), e.insert(t, e.options), t;
        };
      },
      565: (e, t, n) => {
        e.exports = function (e) {
          var t = n.nc;
          t && e.setAttribute("nonce", t);
        };
      },
      795: (e) => {
        e.exports = function (e) {
          var t = e.insertStyleElement(e);
          return {
            update: function (n) {
              !(function (e, t, n) {
                var r = "";
                n.supports && (r += "@supports (".concat(n.supports, ") {")),
                  n.media && (r += "@media ".concat(n.media, " {"));
                var a = void 0 !== n.layer;
                a &&
                  (r += "@layer".concat(
                    n.layer.length > 0 ? " ".concat(n.layer) : "",
                    " {"
                  )),
                  (r += n.css),
                  a && (r += "}"),
                  n.media && (r += "}"),
                  n.supports && (r += "}");
                var o = n.sourceMap;
                o &&
                  "undefined" != typeof btoa &&
                  (r +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(o)))),
                      " */"
                    )),
                  t.styleTagTransform(r, e, t.options);
              })(t, e, n);
            },
            remove: function () {
              !(function (e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e);
              })(t);
            },
          };
        };
      },
      589: (e) => {
        e.exports = function (e, t) {
          if (t.styleSheet) t.styleSheet.cssText = e;
          else {
            for (; t.firstChild; ) t.removeChild(t.firstChild);
            t.appendChild(document.createTextNode(e));
          }
        };
      },
    },
    t = {};
  function n(r) {
    var a = t[r];
    if (void 0 !== a) return a.exports;
    var o = (t[r] = { id: r, exports: {} });
    return e[r](o, o.exports, n), o.exports;
  }
  (n.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return n.d(t, { a: t }), t;
  }),
    (n.d = (e, t) => {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      var t = (function () {
        function t() {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t);
        }
        var n, r;
        return (
          (n = t),
          (r = [
            {
              key: "getTasks",
              value: function () {
                return JSON.parse(localStorage.getItem("tasks")) || [];
              },
            },
            {
              key: "saveTask",
              value: function (e) {
                var n = t.getTasks(),
                  r = n.find(function (t) {
                    return t.id == e.id;
                  });
                r
                  ? (r.body = e.body)
                  : n.push({
                      id: new Date().getTime(),
                      body: e.body,
                      isChecked: !1,
                    }),
                  localStorage.setItem("tasks", JSON.stringify(n));
              },
            },
            {
              key: "checkTask",
              value: function (e, n) {
                var r = t.getTasks(),
                  a = r.find(function (t) {
                    return t.id == e;
                  });
                a.isChecked ? (a.isChecked = !1) : (a.isChecked = !0),
                  localStorage.setItem("tasks", JSON.stringify(r));
              },
            },
            {
              key: "deleteTask",
              value: function (e) {
                var n = t.getTasks().filter(function (t) {
                  return t.id != e;
                });
                localStorage.setItem("tasks", JSON.stringify(n));
              },
            },
          ]),
          null && e(n.prototype, null),
          r && e(n, r),
          Object.defineProperty(n, "prototype", { writable: !1 }),
          t
        );
      })();
      function r(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function a(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function o(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var i = (function () {
        function e(n) {
          var r = this;
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            o(this, "editTask", function (e) {
              var n = t.getTasks().find(function (t) {
                return t.id == e.target.dataset.id;
              });
              (r.domInput.value = n.body), (r.selected = n.id);
            }),
            o(this, "filterTasks", function (e) {
              var n = t.getTasks(),
                a = e.target.value,
                o = n.filter(function (e) {
                  return !0 === e.isChecked;
                }),
                i = n.filter(function (e) {
                  return !1 === e.isChecked;
                });
              "all" === a
                ? r.loadTasks(n)
                : "completed" === a
                ? r.loadTasks(o)
                : "uncompleted" === a && r.loadTasks(i);
            });
          var a = n.deleteTask,
            i = n.saveTask,
            s = n.checkTask;
          (this.deleteTask = a),
            (this.saveTask = i),
            (this.checkTask = s),
            (this.doc = document.getElementById("app")),
            (this.doc.innerHTML =
              '\n    <div class="input-select">\n          <form class="input">\n            <input type="text" placeholder="Add New Todo" />\n            <button type="submit" class="submit">\n              <img class="input__add" src="./assets/add.svg" />\n            </button>\n          </form>\n          <div class="select">\n        <select>\n          <option value="all">All</option>\n          <option value="completed">Completed</option>\n          <option value="uncompleted">Uncompleted</option>\n        </select>\n        </div>\n        <img class="sort" src="./assets/sort.svg" />\n      </div>\n      <ul class="tasks"></ul>\n    '),
            (this.domInput = this.doc.querySelector("input")),
            this.loadTasks(),
            (this.selected = null),
            this.doc
              .querySelector("button.submit")
              .addEventListener("click", function (e) {
                r.saveTask(e);
              }),
            this.doc
              .querySelector("div.select")
              .addEventListener("click", this.filterTasks);
        }
        var n, i;
        return (
          (n = e),
          (i = [
            {
              key: "_createTasksHtml",
              value: function (e) {
                return '\n    <li class="task '
                  .concat(
                    e.isChecked ? "check" : "",
                    '">\n      <p class="task__text '
                  )
                  .concat(e.isChecked ? "line-through" : "", '">')
                  .concat(
                    e.body,
                    '</p>\n      <div class="task__icons">\n        <img src="./assets/check.svg" class="task__check" data-id="'
                  )
                  .concat(
                    e.id,
                    '" />\n        <img src="./assets/edit.svg" class="task__edit" data-id="'
                  )
                  .concat(
                    e.id,
                    '" />\n        <img src="./assets/trash.svg" class="task__trash" data-id="'
                  )
                  .concat(e.id, '" />\n      </div>\n    </li>\n    ');
              },
            },
            {
              key: "loadTasks",
              value: function (e) {
                var n,
                  a = this,
                  o = e || t.getTasks(),
                  i = "",
                  s = this.doc.querySelector("ul.tasks"),
                  c = (function (e, t) {
                    var n =
                      ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                      e["@@iterator"];
                    if (!n) {
                      if (
                        Array.isArray(e) ||
                        (n = (function (e, t) {
                          if (e) {
                            if ("string" == typeof e) return r(e, t);
                            var n = Object.prototype.toString
                              .call(e)
                              .slice(8, -1);
                            return (
                              "Object" === n &&
                                e.constructor &&
                                (n = e.constructor.name),
                              "Map" === n || "Set" === n
                                ? Array.from(e)
                                : "Arguments" === n ||
                                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                    n
                                  )
                                ? r(e, t)
                                : void 0
                            );
                          }
                        })(e)) ||
                        (t && e && "number" == typeof e.length)
                      ) {
                        n && (e = n);
                        var a = 0,
                          o = function () {};
                        return {
                          s: o,
                          n: function () {
                            return a >= e.length
                              ? { done: !0 }
                              : { done: !1, value: e[a++] };
                          },
                          e: function (e) {
                            throw e;
                          },
                          f: o,
                        };
                      }
                      throw new TypeError(
                        "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                      );
                    }
                    var i,
                      s = !0,
                      c = !1;
                    return {
                      s: function () {
                        n = n.call(e);
                      },
                      n: function () {
                        var e = n.next();
                        return (s = e.done), e;
                      },
                      e: function (e) {
                        (c = !0), (i = e);
                      },
                      f: function () {
                        try {
                          s || null == n.return || n.return();
                        } finally {
                          if (c) throw i;
                        }
                      },
                    };
                  })(o);
                try {
                  for (c.s(); !(n = c.n()).done; ) {
                    var l = n.value;
                    i += this._createTasksHtml(l);
                  }
                } catch (e) {
                  c.e(e);
                } finally {
                  c.f();
                }
                (s.innerHTML = i),
                  this.doc
                    .querySelectorAll("img.task__edit")
                    .forEach(function (e) {
                      e.addEventListener("click", a.editTask);
                    }),
                  this.doc
                    .querySelectorAll("img.task__trash")
                    .forEach(function (e) {
                      e.addEventListener("click", a.deleteTask);
                    }),
                  this.doc
                    .querySelectorAll("img.task__check")
                    .forEach(function (e) {
                      e.addEventListener("click", a.checkTask);
                    });
              },
            },
          ]) && a(n.prototype, i),
          Object.defineProperty(n, "prototype", { writable: !1 }),
          e
        );
      })();
      function s(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      var c = (function () {
          function e() {
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
              (this.dom = new i(this.handlers()));
          }
          var n, r;
          return (
            (n = e),
            (r = [
              {
                key: "handlers",
                value: function () {
                  var e = this;
                  return {
                    checkTask: function (n) {
                      t.checkTask(n.target.dataset.id), e.dom.loadTasks();
                    },
                    saveTask: function (n) {
                      n.preventDefault(),
                        "" !== e.dom.domInput.value &&
                          (t.saveTask({
                            id: e.dom.selected,
                            body: e.dom.domInput.value,
                          }),
                          e.dom.loadTasks()),
                        (e.dom.domInput.value = ""),
                        (e.dom.selected = null);
                    },
                    deleteTask: function (n) {
                      t.deleteTask(n.target.dataset.id), e.dom.loadTasks();
                    },
                  };
                },
              },
            ]) && s(n.prototype, r),
            Object.defineProperty(n, "prototype", { writable: !1 }),
            e
          );
        })(),
        l = n(379),
        u = n.n(l),
        d = n(795),
        f = n.n(d),
        p = n(569),
        h = n.n(p),
        v = n(565),
        y = n.n(v),
        m = n(216),
        g = n.n(m),
        k = n(589),
        b = n.n(k),
        T = n(402),
        x = {};
      (x.styleTagTransform = b()),
        (x.setAttributes = y()),
        (x.insert = h().bind(null, "head")),
        (x.domAPI = f()),
        (x.insertStyleElement = g()),
        u()(T.Z, x),
        T.Z && T.Z.locals && T.Z.locals,
        new c();
    })();
})();
