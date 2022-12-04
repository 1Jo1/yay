!function(e) {
    var r = {};
    function o(t) {
        if (r[t])
            return r[t].exports;
        var n = r[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(n.exports, n, n.exports, o),
            n.l = !0,
            n.exports
    }
    console.log("line 15");
    o.m = e,
        o.c = r,
        o.d = function(t, n, e) {
            o.o(t, n) || Object.defineProperty(t, n, {
                enumerable: !0,
                get: e
            })
        }
        ,
        o.r = function(t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }),
                Object.defineProperty(t, "__esModule", {
                    value: !0
                })
        }
        ,
        o.t = function(n, t) {
            if (1 & t && (n = o(n)),
            8 & t)
                return n;
            if (4 & t && "object" == typeof n && n && n.__esModule)
                return n;
            var e = Object.create(null);
            if (o.r(e),
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: n
                }),
            2 & t && "string" != typeof n)
                for (var r in n)
                    o.d(e, r, function(t) {
                        return n[t]
                    }
                        .bind(null, r));
            return e
        }
        ,
        o.n = function(t) {
            var n = t && t.__esModule ? function() {
                        return t.default
                    }
                    : function() {
                        return t
                    }
            ;
            return o.d(n, "a", n),
                n
        }
        ,
        o.o = function(t, n) {
            return Object.prototype.hasOwnProperty.call(t, n)
        }
        ,
        o.p = "",
        o(o.s = 58)
}([function(t, n, e) {
    t.exports = e(26)
}
    , function(t, n, e) {
        "use strict";
        function r(t, n) {
            return t + n
        }
        e.d(n, "a", function() {
            return a
        }),
            e.d(n, "b", function() {
                return c
            }),
            e.d(n, "c", function() {
                return u
            }),
            e.d(n, "d", function() {
                return s
            }),
            e.d(n, "e", function() {
                return i
            }),
            e.d(n, "f", function() {
                return f
            }),
            e.d(n, "g", function() {
                return l
            }),
            e.d(n, "h", function() {
                return d
            }),
            e.d(n, "i", function() {
                return h
            }),
            e.d(n, "j", function() {
                return p
            }),
            e.d(n, "k", function() {
                return m
            }),
            e.d(n, "l", function() {
                return v
            });
        var o = {}.hasOwnProperty;
        function i(t, n) {
            return o.call(n, t)
        }
        Array.isArray;
        function a(t, n) {
            for (var e = 0; e < n.length; e++)
                if (t(n[e]))
                    return e;
            return -1
        }
        function c(n, e) {
            return Object.keys(e).forEach(function(t) {
                n(e[t], t)
            })
        }
        function u(t) {
            return t.reduce(function(t, n) {
                var e = n[0]
                    , r = n[1];
                return t[e] = r,
                    t
            }, {})
        }
        function s() {
            return Math.random().toString(36).substring(2)
        }
        function f(e, r) {
            return Object.keys(r).reduce(function(t, n) {
                return t[n] = e(r[n], n),
                    t
            }, {})
        }
        function l() {}
        function d(t) {
            var n, e = !1;
            return function() {
                return e ? n : (e = !0,
                    n = t.apply(void 0, arguments))
            }
        }
        function h(e, r) {
            return Object.keys(r).reduce(function(t, n) {
                return t[e(r[n]) ? 0 : 1][n] = r[n],
                    t
            }, [{}, {}])
        }
        function p(t, e) {
            return t.reduce(function(t, n) {
                return t[n] = e[n],
                    t
            }, {})
        }
        function m(t) {
            return t.reduce(r, 0)
        }
        var v = function(n) {
            return Object.keys(n).map(function(t) {
                return [t, n[t]]
            })
        }
    }
    , function(t, n) {
        t.exports = function(t, n, e) {
            return n in t ? Object.defineProperty(t, n, {
                value: e,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = e,
                t
        }
    }
    , function(t, n, e) {
        "use strict";
        e.d(n, "b", function() {
            return a
        }),
            e.d(n, "c", function() {
                return c
            }),
            e.d(n, "a", function() {
                return u
            });
        var r = e(12)
            , o = "object" === ("undefined" == typeof console ? "undefined" : e.n(r)()(console))
            , i = function(t) {
            console.log("204");
            console.log("[chatbot.com] - %s ".replace("%s", t));
            return "[chatbot.com] - %s ".replace("%s", t)
        }
            , a = function(t) {
            var n = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1];
            return o && console.error(n ? i(t) : t),
                !1
        }
            , c = function(t) {
            return o && console.warn(i(t)),
                !1
        }
            , u = function(t) {
            throw i(t)
        }
    }
    , , function(t, n) {
        function u(t, n, e, r, o, i, a) {
            try {
                var c = t[i](a)
                    , u = c.value
            } catch (t) {
                return void e(t)
            }
            c.done ? n(u) : Promise.resolve(u).then(r, o)
        }
        t.exports = function(c) {
            return function() {
                var t = this
                    , a = arguments;
                return new Promise(function(n, e) {
                        var r = c.apply(t, a);
                        function o(t) {
                            u(r, n, e, o, i, "next", t)
                        }
                        function i(t) {
                            u(r, n, e, o, i, "throw", t)
                        }
                        o(void 0)
                    }
                )
            }
        }
    }
    , function(t, n, e) {
        var o = e(2);
        t.exports = function(n) {
            for (var t = 1; t < arguments.length; t++) {
                var e = null != arguments[t] ? arguments[t] : {}
                    , r = Object.keys(e);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(e).filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))),
                    r.forEach(function(t) {
                        o(n, t, e[t])
                    })
            }
            return n
        }
    }
    , , function(t, n, e) {
        "use strict";
        e.d(n, "a", function() {
            return r
        });
        var r = function() {}
    }
    , function(t, n, e) {
        "use strict";
        e.d(n, "b", function() {
            console.log("273");
            console.log(r);
            return r
        }),
            e.d(n, "a", function() {
                console.log("280");
                console.log(o);
                return o
            });
        var r = "URL_CHANGED"
            , o = "CHAT_OPENED"
    }
    , function(t, n, e) {
        "use strict";
        function r() {
            return (r = Object.assign || function(t) {
                    for (var n = 1; n < arguments.length; n++) {
                        var e = arguments[n];
                        for (var r in e)
                            Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r])
                    }
                    return t
                }
            ).apply(this, arguments)
        }
        var o = function(r) {
            return r = r || Object.create(null),
                {
                    on: function(t, n) {
                        (r[t] || (r[t] = [])).push(n)
                    },
                    off: function(t, n) {
                        r[t] && r[t].splice(r[t].indexOf(n) >>> 0, 1)
                    },
                    emit: function(n, e) {
                        (r[n] || []).slice().map(function(t) {
                            t(e)
                        }),
                            (r["*"] || []).slice().map(function(t) {
                                t(n, e)
                            })
                    }
                }
        };
        n.a = function() {
            var e = Object.create(null)
                , i = o(e);
            return r({}, i, {
                off: function(t, n) {
                    t ? i.off(t, n) : Object.keys(e).forEach(function(t) {
                        delete e[t]
                    })
                },
                once: function(r, o) {
                    i.on(r, function t(n, e) {
                        i.off(r, t),
                            o(n, e)
                    })
                }
            })
        }
    }
    , function(t, n, e) {
        "use strict";
        e(1),
        "undefined" == typeof Element || Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
        e.d(n, "a", function() {
            return r
        });
        document.documentElement.currentStyle;
        function r(t) {
            var n = t.parentNode;
            n && n.removeChild(t)
        }
    }
    , function(n, t) {
        function e(t) {
            return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                        return typeof t
                    }
                    : function(t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                    }
            )(t)
        }
        function r(t) {
            return "function" == typeof Symbol && "symbol" === e(Symbol.iterator) ? n.exports = r = function(t) {
                    return e(t)
                }
                : n.exports = r = function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : e(t)
                }
                ,
                r(t)
        }
        n.exports = r
    }
    , function(t) {
        t.exports = {
            polyfillUrl: "https://cdn.chatbot.com/widget/polyfill.js",
            apiUrl: "https://cdn.chatbot.com/widget/api",
            appUrl: "https://app.chatbot.com",
            cdnUrl: "https://cdn.chatbot.com/widget",
            linkPrefix: "https://url.chatbot.com"
        }
    }
    , function(t, n, e) {
        "use strict";
        e.d(n, "a", function() {
            return i
        });
        var r = e(12)
            , o = e.n(r)
            , i = function(t) {
            return null !== t && "object" === o()(t)
        }
    }
    , , function(t, n, e) {
        "use strict";
        n.a = function(n) {
            return new Promise(function(t) {
                    t(n())
                }
            )
        }
    }
    , function(t, n, e) {
        var a = e(28);
        t.exports = function(t, n) {
            if (null == t)
                return {};
            var e, r, o = a(t, n);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                for (r = 0; r < i.length; r++)
                    e = i[r],
                    0 <= n.indexOf(e) || Object.prototype.propertyIsEnumerable.call(t, e) && (o[e] = t[e])
            }
            return o
        }
    }
    , function(t, n, e) {
        var r = e(29)
            , o = e(30)
            , i = e(31);
        t.exports = function(t, n) {
            return r(t) || o(t, n) || i()
        }
    }
    , function(t, n) {
        t.exports = function(t, n) {
            if (!(t instanceof n))
                throw new TypeError("Cannot call a class as a function")
        }
    }
    , function(t, n) {
        function r(t, n) {
            for (var e = 0; e < n.length; e++) {
                var r = n[e];
                r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                "value"in r && (r.writable = !0),
                    Object.defineProperty(t, r.key, r)
            }
        }
        t.exports = function(t, n, e) {
            return n && r(t.prototype, n),
            e && r(t, e),
                t
        }
    }
    , function(t, n, e) {
        "use strict";
        var u = e(1);
        function p() {
            return (p = Object.assign || function(t) {
                    for (var n = 1; n < arguments.length; n++) {
                        var e = arguments[n];
                        for (var r in e)
                            Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r])
                    }
                    return t
                }
            ).apply(this, arguments)
        }
        var s = e(16)
            , O = e(10);
        function f(t, n) {
            if (null == t)
                return {};
            var e, r, o = {}, i = Object.keys(t);
            for (r = 0; r < i.length; r++)
                e = i[r],
                0 <= n.indexOf(e) || (o[e] = t[e]);
            return o
        }
        var l = e(11);
        e.d(n, "a", function() {
            return H
        }),
            e.d(n, "b", function() {
                return F
            });
        var d = function(r) {
            return function(n) {
                return function(t, e) {
                    0 === t && n(0, function(t, n) {
                        e(t, 1 === t ? r(n) : n)
                    })
                }
            }
        };
        var r = function(a) {
            return void 0 === a && (a = {}),
                function(t) {
                    "function" == typeof a && (a = {
                        next: a
                    });
                    var e, n = a, r = n.next, o = n.error, i = n.complete;
                    t(0, function(t, n) {
                        0 === t && (e = n),
                        1 === t && r && r(n),
                        1 !== t && 0 !== t || e(1),
                        2 === t && !n && i && i(),
                        2 === t && n && o && o(n)
                    });
                    return function() {
                        e && e(2)
                    }
                }
        };
        function m(e) {
            return new Promise(function(t, n) {
                    var c;
                    r({
                        next: t,
                        error: n,
                        complete: function() {
                            var t = new Error("No elements in sequence.");
                            t.code = "NO_ELEMENTS",
                                n(t)
                        }
                    })((c = e,
                            function(t, e) {
                                if (0 === t) {
                                    var r, o, i = !1, a = !1;
                                    c(0, function(t, n) {
                                        return 0 === t ? (r = n,
                                            void e(0, function(t, n) {
                                                2 === t && (a = !0),
                                                    r(t, n)
                                            })) : 1 === t ? (i = !0,
                                            o = n,
                                            void r(1)) : void (2 === t && !n && i && (e(1, o),
                                            a) || e(t, n))
                                    })
                                }
                            }
                    ))
                }
            )
        }
        var x = function(o) {
            return function(n) {
                return function(t, e) {
                    var r;
                    0 === t && n(0, function(t, n) {
                        0 === t ? e(t, r = n) : 1 === t ? o(n) ? e(t, n) : r(1) : e(t, n)
                    })
                }
            }
        }
            , j = function(r) {
            return function(t) {
                var e;
                t(0, function(t, n) {
                    0 === t && (e = n),
                    1 === t && r(n),
                    1 !== t && 0 !== t || e(1)
                })
            }
        };
        function E(e) {
            return void 0 === e && (e = -1),
                function(n) {
                    return function(t, r) {
                        if (0 === t) {
                            var o, i = !1, a = e, c = function(t, n) {
                                o(t, n)
                            };
                            !function e() {
                                n(0, function(t, n) {
                                    return 0 === t ? (o = n,
                                        i ? void c(1) : (i = !0,
                                            void r(0, c))) : 2 === t && n && 0 !== a ? (a--,
                                        void e()) : void r(t, n)
                                })
                            }()
                        }
                    }
                }
        }
        var S = function(n) {
            var u, s = [];
            return function(t, a) {
                if (0 === t) {
                    s.push(a);
                    var c = function(t, n) {
                        if (2 === t) {
                            var e = s.indexOf(a);
                            -1 < e && s.splice(e, 1),
                            s.length || u(2)
                        } else
                            u(t, n)
                    };
                    1 !== s.length ? a(0, c) : n(0, function(t, n) {
                        if (0 === t)
                            u = n,
                                a(0, c);
                        else {
                            var e = s.slice(0)
                                , r = Array.isArray(e)
                                , o = 0;
                            for (e = r ? e : e[Symbol.iterator](); ; ) {
                                var i;
                                if (r) {
                                    if (o >= e.length)
                                        break;
                                    i = e[o++]
                                } else {
                                    if ((o = e.next()).done)
                                        break;
                                    i = o.value
                                }
                                i(t, n)
                            }
                        }
                        2 === t && (s = [])
                    })
                }
            }
        }
            , C = function(a) {
            return function(n) {
                return function(t, e) {
                    if (0 === t) {
                        var r, o = 0;
                        n(0, function(t, n) {
                            0 === t ? (r = n,
                                e(0, i)) : 1 === t ? o < a && (o++,
                                e(t, n),
                            o === a && (e(2),
                                r(2))) : e(t, n)
                        })
                    }
                    function i(t, n) {
                        o < a && r(t, n)
                    }
                }
            }
        }
            , h = {}
            , k = function(c) {
            return function(n) {
                return function(t, e) {
                    if (0 === t) {
                        var r, o, i = !1, a = h;
                        n(0, function(t, n) {
                            if (0 === t)
                                return r = n,
                                    c(0, function(t, n) {
                                        if (0 !== t)
                                            return 1 === t ? (a = void 0,
                                                o(2),
                                                r(2),
                                                void (i && e(2))) : void (2 === t && (o = null,
                                            n && (a = n,
                                                r(2),
                                            i && e(t, n))));
                                        (o = n)(1)
                                    }),
                                    i = !0,
                                    e(0, function(t, n) {
                                        a === h && (2 === t && o && o(2),
                                            r(t, n))
                                    }),
                                    void (a !== h && e(2, a));
                            2 === t && o(2),
                                e(t, n)
                        })
                    }
                }
            }
        };
        function L(c) {
            return function(n) {
                return function(t, e) {
                    if (0 === t) {
                        var r, o, i = c instanceof Date;
                        n(0, function(t, n) {
                            if (0 === t)
                                return r = n,
                                    a(i ? c - Date.now() : c),
                                    void e(0, function(t, n) {
                                        2 === t && clearTimeout(o),
                                            r(t, n)
                                    });
                            2 === t ? clearTimeout(o) : 1 !== t || i || (clearTimeout(o),
                                a(c)),
                                e(t, n)
                        })
                    }
                    function a(t) {
                        o = setTimeout(function() {
                            r(2);
                            var t = new Error("Timeout.");
                            t.code = "TIMEOUT",
                                e(2, t)
                        }, t)
                    }
                }
            }
        }
        var o = "@@livechat/postmessenger"
            , P = "handshake"
            , v = "response"
            , i = function(n) {
            return function(t, r) {
                if (0 === t) {
                    var o, i, a = !1;
                    n(0, function(t, n) {
                        if (0 === t)
                            o = n,
                                r(0, c);
                        else if (1 === t) {
                            var e = n;
                            i && i(2),
                                e(0, function(t, n) {
                                    0 === t ? (i = n)(1) : 1 === t ? r(1, n) : 2 === t && n ? (o(2),
                                        r(2, n)) : 2 === t && (a ? r(2) : (i = void 0,
                                        o(1)))
                                })
                        } else
                            2 === t && n ? (i && i(2),
                                r(2, n)) : 2 === t && (i ? a = !0 : r(2))
                    })
                }
                function c(t, n) {
                    1 === t && (i || o)(1, n),
                    2 === t && (i && i(2),
                        o(2))
                }
            }
        };
        function a(r) {
            return function(t, n) {
                if (0 === t) {
                    var e = !1;
                    n(0, function(t) {
                        2 === t && (e = !0)
                    }),
                    e || n(2, r || new Error)
                }
            }
        }
        var y = function(o, i, a) {
            return function(t, n) {
                if (0 === t) {
                    var e = !1
                        , r = function(t) {
                        n(1, t)
                    };
                    n(0, function(t) {
                        2 === t && (e = !0,
                            o.removeEventListener(i, r, a))
                    }),
                    e || o.addEventListener(i, r, a)
                }
            }
        }
            , c = function(t) {
            return !!t.data && t.data[o]
        }
            , M = Object(u.h)(function() {
            return S(d(function(t) {
                return t.data.origin = t.origin,
                    t.data
            })(x(c)(y(window, "message"))))
        });
        function _(n) {
            return function(t) {
                return i(d(n)(t))
            }
        }
        var b = 0
            , T = function(t, e, r) {
            return i((o = function() {
                    var n = b++;
                    return r.request = n,
                        e(r),
                        C(1)(_(function(t) {
                            if (!t.data.error)
                                return r = function() {
                                    return t.data.result
                                }
                                    ,
                                    function(t, n) {
                                        if (0 === t) {
                                            var e = !1;
                                            n(0, function(t) {
                                                2 === t && (e = !0)
                                            }),
                                                n(1, r()),
                                            e || n(2)
                                        }
                                    }
                                    ;
                            var r, n = t.data.result, e = n.real, o = n.error;
                            if (!e)
                                return a(o);
                            var i = new Error(o.message);
                            return Object(u.e)("code", o) && (i.code = o.code),
                                a(i)
                        })(x(function(t) {
                            return t.type === v && t.request === n
                        })(t)))
                }
                    ,
                    function(t, n) {
                        if (0 === t) {
                            var e = !1;
                            n(0, function(t) {
                                2 === t && (e = !0)
                            }),
                                n(1, o()),
                            e || n(2)
                        }
                    }
            ));
            var o
        }
            , A = function(t, o, i, a, n) {
            return void 0 === n && (n = null),
                p({}, t, {
                    call: function(t) {
                        for (var n = arguments.length, e = new Array(1 < n ? n - 1 : 0), r = 1; r < n; r++)
                            e[r - 1] = arguments[r];
                        return m(T(o, a, i("call", {
                            method: t,
                            args: e
                        })))
                    },
                    emit: function(t, n) {
                        a(i("emit", {
                            event: t,
                            arg: n
                        }))
                    },
                    data: n
                })
        };
        var g = function() {
            var c = [];
            return function(t, n) {
                if (0 === t) {
                    var e = n;
                    c.push(e),
                        e(0, function(t) {
                            if (2 === t) {
                                var n = c.indexOf(e);
                                -1 < n && c.splice(n, 1)
                            }
                        })
                } else
                    for (var r, o = c.slice(0), i = 0, a = o.length; i < a; i++)
                        r = o[i],
                        -1 < c.indexOf(r) && r(t, n)
            }
        };
        function N() {
            var n = g();
            return [n, function() {
                var t = new Error("Destroyed.");
                t.code = "DESTROYED",
                    n(2, t)
            }
            ]
        }
        var I = function(t, n, e, r) {
            var o;
            return (o = {
                "@@livechat/postmessenger": !0
            }).owner = t,
                o.instance = n,
                o.type = e,
                o.data = r,
                o
        }
            , R = function(o, i, a, c) {
            return function(r) {
                switch (r.type) {
                    case "call":
                        return void Object(s.a)(function() {
                            var t = r.data
                                , n = t.method
                                , e = t.args;
                            return c[n].apply(o, e)
                        }).then(function(t) {
                            r.type = v,
                                r.data = {
                                    error: !1,
                                    result: t
                                },
                                a(r)
                        }, function(t) {
                            var n;
                            r.type = v,
                                t instanceof Error ? (n = {
                                    real: !0,
                                    error: {
                                        message: t.message
                                    }
                                },
                                Object(u.e)("code", t) && (n.error.code = t.code)) : n = {
                                    real: !1,
                                    error: t
                                },
                                r.data = {
                                    error: !0,
                                    result: n
                                },
                                a(r)
                        });
                    case "emit":
                        var t = r.data
                            , n = t.event
                            , e = t.arg;
                        return void i(n, e);
                    default:
                        return
                }
            }
        }
            , W = function(t) {
            return Object(u.i)(function(t) {
                return "function" == typeof t
            }, t)
        }
            , U = Object(u.d)()
            , D = 0
            , G = function(t) {
            var n = document.createElement("a");
            return n.href = t,
                n.origin ? "null" === n.origin ? "*" : n.origin : (4 < n.protocol.length ? n.protocol : window.location.protocol) + "//" + (n.host.length ? "80" === n.port || "443" === n.port ? n.hostname : n.host : window.location.host)
        };
        function w(t, n) {
            console.log("929");
            console.log(t.strictOrigin);
            var e = t.frame
                , r = t.strictOrigin
                , o = void 0 === r || r;
            console.log(e.src);
            void 0 === n && (n = {});
            var i = W(n)
                , a = i[0]
                , c = i[1]
                , u = N()
                , s = u[0]
                , f = u[1]
                , l = D++
                , d = e.contentWindow
                , h = o ? G(e.src) : "*"
                , p = Object(O.a)()
                , m = function(t, n) {
                return I(U, l, t, n)
            }
                , v = function(t) {
                d.postMessage(t, h)
            }
                , y = S(x(function(t) {
                return t.owner === U && t.instance === l
            })(k(s)(M())))
                , b = A(p, y, m, v)
                , g = S(C(1)(E(5)(L(500)(k(s)(T(y, v, m(P, c)))))))
                , w = R(b, p.emit, v, a);
            return j(w)(_(function() {
                return y
            })(g)),
                {
                    api: b,
                    destroy: f,
                    handshake$: g
                }
        }
        function H(h) {
            void 0 === h && (h = {});
            var t = C(1)(L(3e3)(x(function(t) {
                return t.type === P
            })(M())));
            return {
                promise: m(d(function(t) {
                    var e = t.instance
                        , r = t.owner
                        , n = t.origin
                        , o = W(h)
                        , i = o[0]
                        , a = o[1]
                        , c = window.parent
                        , u = Object(O.a)()
                        , s = function(t) {
                        c.postMessage(t, n)
                    }
                        , f = x(function(t) {
                        return t.owner === r
                    })(M())
                        , l = A(u, f, function(t, n) {
                        return I(r, e, t, n)
                    }, s, t.data)
                        , d = R(l, u.emit, s, i);
                    return j(d)(f),
                        s(p({}, t, {
                            type: v,
                            data: {
                                error: !1,
                                result: a
                            }
                        })),
                        l
                })(t))
            }
        }
        var B = function(t, n) {
            var e = document.createElement("iframe");
            return t.appendChild(e),
                e.src = n,
                e
        };
        function F(t, n) {
            var e, r = t.container, o = t.url, i = f(t, ["container", "url"]), a = B(r, o), c = function() {
                Object(l.a)(a),
                e && e.destroy()
            };
            return {
                destroy: c,
                frame: a,
                promise: m(C(1)(d(function(t) {
                    var n = e.api;
                    return n.data = t,
                        n.destroy = c,
                        n.frame = a,
                        n
                })(_(function() {
                    return (e = w(p({}, i, {
                        frame: a
                    }), n)).handshake$
                })(y(a, "load")))))
            }
        }
    }
    , , , , function(t) {
        t.exports = {
            root: {
                border: 0,
                "background-color": "transparent",
                "pointer-events": "none",
                "z-index": 2147483639,
                position: "fixed",
                bottom: 0,
                width: 0,
                height: 0,
                overflow: "hidden",
                opacity: 1
            },
            frame: {
                "pointer-events": "all",
                background: "none",
                border: 0,
                float: "none",
                position: "absolute",
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                width: "100%",
                height: "100%",
                margin: 0,
                padding: 0,
                minHeight: 0
            }
        }
    }
    , function(t, n, e) {
        var r = function() {
            return this || "object" == typeof self && self
        }() || Function("return this")()
            , o = r.regeneratorRuntime && 0 <= Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")
            , i = o && r.regeneratorRuntime;
        if (r.regeneratorRuntime = void 0,
            t.exports = e(27),
            o)
            r.regeneratorRuntime = i;
        else
            try {
                delete r.regeneratorRuntime
            } catch (t) {
                r.regeneratorRuntime = void 0
            }
    }
    , function(T, t) {
        !function(t) {
            "use strict";
            var u, n = Object.prototype, s = n.hasOwnProperty, e = "function" == typeof Symbol ? Symbol : {}, o = e.iterator || "@@iterator", r = e.asyncIterator || "@@asyncIterator", i = e.toStringTag || "@@toStringTag", a = "object" == typeof T, c = t.regeneratorRuntime;
            if (c)
                a && (T.exports = c);
            else {
                (c = t.regeneratorRuntime = a ? T.exports : {}).wrap = g;
                var l = "suspendedStart"
                    , d = "suspendedYield"
                    , h = "executing"
                    , p = "completed"
                    , m = {}
                    , f = {};
                f[o] = function() {
                    return this
                }
                ;
                var v = Object.getPrototypeOf
                    , y = v && v(v(M([])));
                y && y !== n && s.call(y, o) && (f = y);
                var b = j.prototype = O.prototype = Object.create(f);
                x.prototype = b.constructor = j,
                    j.constructor = x,
                    j[i] = x.displayName = "GeneratorFunction",
                    c.isGeneratorFunction = function(t) {
                        var n = "function" == typeof t && t.constructor;
                        return !!n && (n === x || "GeneratorFunction" === (n.displayName || n.name))
                    }
                    ,
                    c.mark = function(t) {
                        return Object.setPrototypeOf ? Object.setPrototypeOf(t, j) : (t.__proto__ = j,
                        i in t || (t[i] = "GeneratorFunction")),
                            t.prototype = Object.create(b),
                            t
                    }
                    ,
                    c.awrap = function(t) {
                        return {
                            __await: t
                        }
                    }
                    ,
                    E(S.prototype),
                    S.prototype[r] = function() {
                        return this
                    }
                    ,
                    c.AsyncIterator = S,
                    c.async = function(t, n, e, r) {
                        var o = new S(g(t, n, e, r));
                        return c.isGeneratorFunction(n) ? o : o.next().then(function(t) {
                            return t.done ? t.value : o.next()
                        })
                    }
                    ,
                    E(b),
                    b[i] = "Generator",
                    b[o] = function() {
                        return this
                    }
                    ,
                    b.toString = function() {
                        return "[object Generator]"
                    }
                    ,
                    c.keys = function(e) {
                        var r = [];
                        for (var t in e)
                            r.push(t);
                        return r.reverse(),
                            function t() {
                                for (; r.length; ) {
                                    var n = r.pop();
                                    if (n in e)
                                        return t.value = n,
                                            t.done = !1,
                                            t
                                }
                                return t.done = !0,
                                    t
                            }
                    }
                    ,
                    c.values = M,
                    P.prototype = {
                        constructor: P,
                        reset: function(t) {
                            if (this.prev = 0,
                                this.next = 0,
                                this.sent = this._sent = u,
                                this.done = !1,
                                this.delegate = null,
                                this.method = "next",
                                this.arg = u,
                                this.tryEntries.forEach(L),
                                !t)
                                for (var n in this)
                                    "t" === n.charAt(0) && s.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = u)
                        },
                        stop: function() {
                            this.done = !0;
                            var t = this.tryEntries[0].completion;
                            if ("throw" === t.type)
                                throw t.arg;
                            return this.rval
                        },
                        dispatchException: function(e) {
                            if (this.done)
                                throw e;
                            var r = this;
                            function t(t, n) {
                                return i.type = "throw",
                                    i.arg = e,
                                    r.next = t,
                                n && (r.method = "next",
                                    r.arg = u),
                                    !!n
                            }
                            for (var n = this.tryEntries.length - 1; 0 <= n; --n) {
                                var o = this.tryEntries[n]
                                    , i = o.completion;
                                if ("root" === o.tryLoc)
                                    return t("end");
                                if (o.tryLoc <= this.prev) {
                                    var a = s.call(o, "catchLoc")
                                        , c = s.call(o, "finallyLoc");
                                    if (a && c) {
                                        if (this.prev < o.catchLoc)
                                            return t(o.catchLoc, !0);
                                        if (this.prev < o.finallyLoc)
                                            return t(o.finallyLoc)
                                    } else if (a) {
                                        if (this.prev < o.catchLoc)
                                            return t(o.catchLoc, !0)
                                    } else {
                                        if (!c)
                                            throw new Error("try statement without catch or finally");
                                        if (this.prev < o.finallyLoc)
                                            return t(o.finallyLoc)
                                    }
                                }
                            }
                        },
                        abrupt: function(t, n) {
                            for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
                                var r = this.tryEntries[e];
                                if (r.tryLoc <= this.prev && s.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                                    var o = r;
                                    break
                                }
                            }
                            o && ("break" === t || "continue" === t) && o.tryLoc <= n && n <= o.finallyLoc && (o = null);
                            var i = o ? o.completion : {};
                            return i.type = t,
                                i.arg = n,
                                o ? (this.method = "next",
                                    this.next = o.finallyLoc,
                                    m) : this.complete(i)
                        },
                        complete: function(t, n) {
                            if ("throw" === t.type)
                                throw t.arg;
                            return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg,
                                this.method = "return",
                                this.next = "end") : "normal" === t.type && n && (this.next = n),
                                m
                        },
                        finish: function(t) {
                            for (var n = this.tryEntries.length - 1; 0 <= n; --n) {
                                var e = this.tryEntries[n];
                                if (e.finallyLoc === t)
                                    return this.complete(e.completion, e.afterLoc),
                                        L(e),
                                        m
                            }
                        },
                        catch: function(t) {
                            for (var n = this.tryEntries.length - 1; 0 <= n; --n) {
                                var e = this.tryEntries[n];
                                if (e.tryLoc === t) {
                                    var r = e.completion;
                                    if ("throw" === r.type) {
                                        var o = r.arg;
                                        L(e)
                                    }
                                    return o
                                }
                            }
                            throw new Error("illegal catch attempt")
                        },
                        delegateYield: function(t, n, e) {
                            return this.delegate = {
                                iterator: M(t),
                                resultName: n,
                                nextLoc: e
                            },
                            "next" === this.method && (this.arg = u),
                                m
                        }
                    }
            }
            function g(t, n, e, r) {
                var i, a, c, u, o = n && n.prototype instanceof O ? n : O, s = Object.create(o.prototype), f = new P(r || []);
                return s._invoke = (i = t,
                        a = e,
                        c = f,
                        u = l,
                        function(t, n) {
                            if (u === h)
                                throw new Error("Generator is already running");
                            if (u === p) {
                                if ("throw" === t)
                                    throw n;
                                return _()
                            }
                            for (c.method = t,
                                     c.arg = n; ; ) {
                                var e = c.delegate;
                                if (e) {
                                    var r = C(e, c);
                                    if (r) {
                                        if (r === m)
                                            continue;
                                        return r
                                    }
                                }
                                if ("next" === c.method)
                                    c.sent = c._sent = c.arg;
                                else if ("throw" === c.method) {
                                    if (u === l)
                                        throw u = p,
                                            c.arg;
                                    c.dispatchException(c.arg)
                                } else
                                    "return" === c.method && c.abrupt("return", c.arg);
                                u = h;
                                var o = w(i, a, c);
                                if ("normal" === o.type) {
                                    if (u = c.done ? p : d,
                                    o.arg === m)
                                        continue;
                                    return {
                                        value: o.arg,
                                        done: c.done
                                    }
                                }
                                "throw" === o.type && (u = p,
                                    c.method = "throw",
                                    c.arg = o.arg)
                            }
                        }
                ),
                    s
            }
            function w(t, n, e) {
                try {
                    return {
                        type: "normal",
                        arg: t.call(n, e)
                    }
                } catch (t) {
                    return {
                        type: "throw",
                        arg: t
                    }
                }
            }
            function O() {}
            function x() {}
            function j() {}
            function E(t) {
                ["next", "throw", "return"].forEach(function(n) {
                    t[n] = function(t) {
                        return this._invoke(n, t)
                    }
                })
            }
            function S(u) {
                var n;
                this._invoke = function(e, r) {
                    function t() {
                        return new Promise(function(t, n) {
                                !function n(t, e, r, o) {
                                    var i = w(u[t], u, e);
                                    if ("throw" !== i.type) {
                                        var a = i.arg
                                            , c = a.value;
                                        return c && "object" == typeof c && s.call(c, "__await") ? Promise.resolve(c.__await).then(function(t) {
                                            n("next", t, r, o)
                                        }, function(t) {
                                            n("throw", t, r, o)
                                        }) : Promise.resolve(c).then(function(t) {
                                            a.value = t,
                                                r(a)
                                        }, function(t) {
                                            return n("throw", t, r, o)
                                        })
                                    }
                                    o(i.arg)
                                }(e, r, t, n)
                            }
                        )
                    }
                    return n = n ? n.then(t, t) : t()
                }
            }
            function C(t, n) {
                var e = t.iterator[n.method];
                if (e === u) {
                    if (n.delegate = null,
                    "throw" === n.method) {
                        if (t.iterator.return && (n.method = "return",
                            n.arg = u,
                            C(t, n),
                        "throw" === n.method))
                            return m;
                        n.method = "throw",
                            n.arg = new TypeError("The iterator does not provide a 'throw' method")
                    }
                    return m
                }
                var r = w(e, t.iterator, n.arg);
                if ("throw" === r.type)
                    return n.method = "throw",
                        n.arg = r.arg,
                        n.delegate = null,
                        m;
                var o = r.arg;
                return o ? o.done ? (n[t.resultName] = o.value,
                    n.next = t.nextLoc,
                "return" !== n.method && (n.method = "next",
                    n.arg = u),
                    n.delegate = null,
                    m) : o : (n.method = "throw",
                    n.arg = new TypeError("iterator result is not an object"),
                    n.delegate = null,
                    m)
            }
            function k(t) {
                var n = {
                    tryLoc: t[0]
                };
                1 in t && (n.catchLoc = t[1]),
                2 in t && (n.finallyLoc = t[2],
                    n.afterLoc = t[3]),
                    this.tryEntries.push(n)
            }
            function L(t) {
                var n = t.completion || {};
                n.type = "normal",
                    delete n.arg,
                    t.completion = n
            }
            function P(t) {
                this.tryEntries = [{
                    tryLoc: "root"
                }],
                    t.forEach(k, this),
                    this.reset(!0)
            }
            function M(n) {
                if (n) {
                    var t = n[o];
                    if (t)
                        return t.call(n);
                    if ("function" == typeof n.next)
                        return n;
                    if (!isNaN(n.length)) {
                        var e = -1
                            , r = function t() {
                            for (; ++e < n.length; )
                                if (s.call(n, e))
                                    return t.value = n[e],
                                        t.done = !1,
                                        t;
                            return t.value = u,
                                t.done = !0,
                                t
                        };
                        return r.next = r
                    }
                }
                return {
                    next: _
                }
            }
            function _() {
                return {
                    value: u,
                    done: !0
                }
            }
        }(function() {
            return this || "object" == typeof self && self
        }() || Function("return this")())
    }
    , function(t, n) {
        t.exports = function(t, n) {
            if (null == t)
                return {};
            var e, r, o = {}, i = Object.keys(t);
            for (r = 0; r < i.length; r++)
                e = i[r],
                0 <= n.indexOf(e) || (o[e] = t[e]);
            return o
        }
    }
    , function(t, n) {
        t.exports = function(t) {
            if (Array.isArray(t))
                return t
        }
    }
    , function(t, n) {
        t.exports = function(t, n) {
            var e = []
                , r = !0
                , o = !1
                , i = void 0;
            try {
                for (var a, c = t[Symbol.iterator](); !(r = (a = c.next()).done) && (e.push(a.value),
                !n || e.length !== n); r = !0)
                    ;
            } catch (t) {
                o = !0,
                    i = t
            } finally {
                try {
                    r || null == c.return || c.return()
                } finally {
                    if (o)
                        throw i
                }
            }
            return e
        }
    }
    , function(t, n) {
        t.exports = function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
    }
    , , , , , , function(t, n) {
        t.exports = "html.chatbot-mobile-opened {\n    height: 100vh;\n}\n\nhtml.chatbot-mobile-opened > body {\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    overflow-y: hidden;\n}\n"
    }
    , , , , , , , , , , , , , , , , , , , , , function(t, n, e) {
        "use strict";
        e.r(n);
        var r = {};
        e.r(r),
            e.d(r, "create", function() {
                return vt
            }),
            e.d(r, "destroy", function() {
                return yt
            }),
            e.d(r, "openChatWindow", function() {
                return bt
            }),
            e.d(r, "closeChatWindow", function() {
                return gt
            }),
            e.d(r, "hideChatWindow", function() {
                return wt
            }),
            e.d(r, "isChatWindowOpened", function() {
                return Ot
            }),
            e.d(r, "isChatWindowClosed", function() {
                return xt
            }),
            e.d(r, "isChatWindowHidden", function() {
                return jt
            }),
            e.d(r, "isInitialized", function() {
                return Et
            }),
            e.d(r, "resetSession", function() {
                return St
            }),
            e.d(r, "sendMessage", function() {
                return Ct
            }),
            e.d(r, "sendTrigger", function() {
                return kt
            }),
            e.d(r, "openMoment", function() {
                return Lt
            }),
            e.d(r, "closeMoment", function() {
                return Pt
            }),
            e.d(r, "setSessionAttributes", function() {
                return Mt
            }),
            e.d(r, "setUserAttributes", function() {
                return _t
            }),
            e.d(r, "getUserData", function() {
                return Tt
            }),
            e.d(r, "endChat", function() {
                return At
            }),
            e.d(r, "hideGreeting", function() {
                return Nt
            }),
            e.d(r, "showGreeting", function() {
                return It
            });
        var o = e(19)
            , i = e.n(o)
            , a = e(20)
            , c = e.n(a)
            , u = window.__be = window.__be || {}
            , s = window.BE_API = window.BE_API || {}
            , f = window.BE_CONFIG;
        delete window.BE_CONFIG;
        var l, d, h, p, m, v, y, b, g, w, O, x, j, E = function() {
            function t() {
                i()(this, t),
                    this.hidden = !1,
                    this.moment = !1,
                    this.opened = !1,
                    this.mobile = !!(window.innerWidth <= 450 || window.innerHeight <= 450 || navigator.userAgent.match(/Android|webOs|iPhone|iPod|BlackBerry|Windows Phone/i))
            }
            return c()(t, [{
                key: "setHidden",
                value: function(t) {
                    this.hidden = t
                }
            }, {
                key: "setMoment",
                value: function(t) {
                    t && this.setHidden(!t),
                        this.moment = t
                }
            }, {
                key: "setOpened",
                value: function(t) {
                    t && this.setHidden(!t),
                        this.opened = t
                }
            }]),
                t
        }(), S = null, C = e(3), k = ["onBeforeLoad", "onLoad", "onSessionReset", "onChatWindowOpen", "onChatWindowClose", "onChatWindowHide", "onDestroy", "onMessage", "onStartConversation", "onConversationStart", "onConversationEnd", "onMomentOpen", "onMomentClose", "onMomentLoad"], L = e(0), P = e.n(L), M = e(5), _ = e.n(M), T = e(18), A = e.n(T), N = e(6), I = e.n(N), R = e(25), W = e(37), U = e.n(W), D = e(13), G = e(21), H = function(t) {
            t = function(n) {
                if (!n.startsWith(D.linkPrefix))
                    return n;
                try {
                    return decodeURIComponent(JSON.parse(atob(new URL(n).searchParams.get("p"))).url)
                } catch (t) {
                    return n
                }
            }(t);
            var n = Object.assign(document.createElement("a"), {
                href: t
            }).hostname;
            return Boolean(n && n === window.location.hostname)
        }, B = function() {
            return {
                documentReferrer: document.referrer,
                language: u.language,
                userId: u.userId,
                config: f,
                mobile: S.mobile,
                updateFrame: function(t, n) {
                    nt(t),
                        X(n)
                },
                openUrl: function(t) {
                    var n, e;
                    n = (e = n = t).startsWith("http") ? e : "http://".concat(e),
                        H(n) ? window.location.href = n : window.open(n, "_blank")
                },
                callNumber: function(t) {
                    var n;
                    n = t,
                        window.location.assign("tel:".concat(n))
                },
                onConversationStart: function() {
                    Wt("onStartConversation"),
                        Wt("onConversationStart")
                },
                onConversationEnd: function() {
                    Wt("onConversationEnd")
                },
                onChatOpen: function() {
                    S.setOpened(!0),
                        Wt("onChatWindowOpen"),
                        rt(!0)
                },
                onChatClose: function() {
                    S.setOpened(!1),
                        Wt("onChatWindowClose"),
                        rt(!1)
                },
                onMessage: function(t) {
                    Wt("onMessage", t)
                },
                onMomentOpen: function() {
                    S.setMoment(!0),
                        Wt("onMomentOpen")
                },
                onMomentClose: function() {
                    S.setMoment(!1),
                        Wt("onMomentClose")
                },
                onMomentLoad: function() {
                    Wt("onMomentLoad")
                }
            }
        }, F = {}, q = (l = _()(P.a.mark(function t(n) {
                var e, r, o, i;
                return P.a.wrap(function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                            case 0:
                                return e = "".concat(D.cdnUrl, "/v2/chat.html?id=").concat(u.id, "&v=").concat("19"),
                                    r = Object(G.b)({
                                        container: n,
                                        url: e
                                    }, B()),
                                    o = r.frame,
                                    i = r.promise,
                                    t.prev = 2,
                                    t.t0 = Object,
                                    t.t1 = F,
                                    t.next = 7,
                                    i;
                            case 7:
                                t.t2 = t.sent,
                                    t.t0.assign.call(t.t0, t.t1, t.t2),
                                    t.next = 14;
                                break;
                            case 11:
                                return t.prev = 11,
                                    t.t3 = t.catch(2),
                                    t.abrupt("return", Object(C.b)("Something went wrong [CODE V2-1]"));
                            case 14:
                                return t.abrupt("return", o);
                            case 15:
                            case "end":
                                return t.stop()
                        }
                }, t, this, [[2, 11]])
            })),
                function(t) {
                    return l.apply(this, arguments)
                }
        ), V = e(17), Y = e.n(V), $ = function(n, t) {
            var e, r = t.id, o = t.classes, i = t.style, a = Y()(t, ["id", "classes", "style"]);
            return r && (n.id = "#" === (e = r).charAt(0) ? e.substring(1) : e),
            name && (n.name = name),
            o && o.forEach(function(t) {
                return n.classList.add(t)
            }),
            i && K(n, i),
                Object.assign(n, a)
        }, z = function(t) {
            var n = t.tag
                , e = void 0 === n ? "div" : n
                , r = t.parent
                , o = void 0 === r ? document.body : r
                , i = Y()(t, ["tag", "parent"]);
            return o.appendChild($(document.createElement(e), i))
        }, J = function(t) {
            return !!t && (t.remove(),
                !0)
        }, K = function(t, n) {
            if (!t)
                return t;
            for (var e in n)
                n.hasOwnProperty(e) && (t.style[e] = n[e]);
            return t
        }, Q = "#chatbot-chat", X = function(t) {
            d && (d.content = t ? "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" : "")
        }, Z = (m = _()(P.a.mark(function t() {
                var n;
                return P.a.wrap(function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2,
                                    q(tt());
                            case 2:
                                if (n = t.sent) {
                                    t.next = 5;
                                    break
                                }
                                return t.abrupt("return", !1);
                            case 5:
                                return $(n, {
                                    id: "#chatbot-chat-frame",
                                    style: R.frame,
                                    name: "chat-widget",
                                    title: "ChatBot chat widget"
                                }),
                                    t.abrupt("return", !0);
                            case 7:
                            case "end":
                                return t.stop()
                        }
                }, t, this)
            })),
                function() {
                    return m.apply(this, arguments)
                }
        ), tt = function() {
            return document.querySelector(Q)
        }, nt = function(t) {
            var n = I()({}, R.root, t, {
                maxWidth: "100%"
            })
                , e = f.position;
            S.mobile && S.opened ? (n[e.align] = 0,
                n.bottom = 0,
                n.maxHeight = "100%") : (n[e.align] = e.sideSpacing + "px",
                n.bottom = e.bottomSpacing + "px",
                n.maxHeight = e.bottomSpacing ? "calc(100% - ".concat(e.bottomSpacing, "px)") : "100%"),
            S.hidden && (n.width = 0,
                n.height = 0,
                n.opacity = 0),
                K(tt(), n)
        }, et = (v = _()(P.a.mark(function t() {
                return P.a.wrap(function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                            case 0:
                                return (h = z({
                                    tag: "style",
                                    type: "text/css",
                                    id: "#chatbot-stylesheet",
                                    parent: document.head
                                })).appendChild(document.createTextNode(U.a)),
                                    z({
                                        id: Q,
                                        style: R.root
                                    }),
                                !document.querySelector("meta[name=viewport]") && (d = z({
                                    parent: document.head,
                                    tag: "meta",
                                    name: "viewport"
                                })),
                                    t.abrupt("return", Z());
                            case 4:
                            case "end":
                                return t.stop()
                        }
                }, t, this)
            })),
                function() {
                    return v.apply(this, arguments)
                }
        ), rt = function(t) {
            var n, e, r = document.body, o = document.documentElement, i = "chatbot-mobile-opened";
            t && !S.mobile && (t = !1),
                t ? (p = window.pageYOffset,
                    e = i,
                    o.classList.add(e)) : (n = i,
                    o.classList.remove(n),
                "number" == typeof p && (r.scrollTop = o.scrollTop = p,
                    p = void 0))
        }, ot = e(8), it = history, at = it.pushState, ct = it.replaceState, ut = function() {
            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : ot.a
                , r = function() {
                t(window.location.href)
            };
            return history.pushState = function() {
                for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++)
                    n[e] = arguments[e];
                at.apply(history, n),
                    r()
            }
                ,
                history.replaceState = function() {
                    for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++)
                        n[e] = arguments[e];
                    ct.apply(history, n),
                        r()
                }
                ,
                window.addEventListener("hashchange", r),
                r(),
                function() {
                    history.pushState = at,
                        history.replaceState = ct,
                        window.removeEventListener("hashchange", r)
                }
        }, st = e(9), ft = function(t) {
            return "string" == typeof t
        }, lt = e(14), dt = function(t) {
            return "number" == typeof t ? "".concat(t) : t
        }, ht = !1, pt = function() {
            ht || Object(C.a)("The widget is not initialized.")
        }, mt = function(t) {
            Object(lt.a)(t) || Object(C.a)('Parameters must be an object that matches the schema: \n { parameter_name: "parameter value" }');
            var n = Object.entries(t);
            n.length || Object(C.a)("At least one parameter is required.");
            var o = {};
            return 99 < n.length && Object(C.a)("The maximum number of custom attributes is 99."),
                n.forEach(function(t) {
                    var n = A()(t, 2)
                        , e = n[0]
                        , r = n[1];
                    e = dt(e),
                        r = dt(r),
                        /^[\w-]{1,128}$/g.test(e) ? ft(r) ? (!r.length || 1024 < r.length) && Object(C.a)('Custom parameter "'.concat(e, '" is incorrect. Value can not be empty and can be up to 1024 characters long.')) : Object(C.a)('Custom parameter "'.concat(e, '" is incorrect. Value must be string or number.')) : Object(C.a)('Custom parameter "'.concat(e, '" is incorrect. Name must be between 1-128 characters long and can only contain alpha-numeric, underscore and dash characters.')),
                        o[e] = r
                }),
                o
        }, vt = (b = _()(P.a.mark(function t() {
                var n, e = arguments;
                return P.a.wrap(function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                            case 0:
                                return n = !(0 < e.length && void 0 !== e[0]) || e[0],
                                    S = new E,
                                u.id || Object(C.a)("Invalid id parameter."),
                                "string" != typeof u.userId || /^[\w.-]{1,256}$/.test(u.userId) || Object(C.a)('Property "userId" must be string between 1-256 characters long and can only contain alpha-numeric, underscore, dash and dot characters.'),
                                tt() && Object(C.a)("Chat container already exists."),
                                    t.next = 7,
                                    et();
                            case 7:
                                if (t.sent) {
                                    t.next = 9;
                                    break
                                }
                                Object(C.a)("Something went wrong [CODE V2-3]");
                            case 9:
                                y = new ut(function(t) {
                                        F.emit(st.b, t)
                                    }
                                ),
                                    ht = !0,
                                n && Wt("onLoad");
                            case 12:
                            case "end":
                                return t.stop()
                        }
                }, t, this)
            })),
                function() {
                    return b.apply(this, arguments)
                }
        ), yt = function() {
            var t = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0];
            pt(),
                F.destroy(),
                J(d),
                J(h),
                J(tt()),
                rt(!1),
                y(),
                ht = !1,
            t && Wt("onDestroy")
        }, bt = function() {
            pt(),
            S.opened && Object(C.a)("Chat is already opened"),
                F.call("toggleChat", !0)
        }, gt = function() {
            pt(),
            S.opened || Object(C.a)("Chat is already closed"),
                F.call("toggleChat", !1)
        }, wt = function() {
            pt(),
            S.hidden && Object(C.a)("Chat is already hidden"),
                S.setHidden(!0),
                Wt("onChatWindowHide"),
                S.opened ? F.call("toggleChat", !1) : nt()
        }, Ot = function() {
            return pt(),
                S.opened
        }, xt = function() {
            return pt(),
                !S.opened
        }, jt = function() {
            return pt(),
                S.hidden
        }, Et = function() {
            return ht
        }, St = (g = _()(P.a.mark(function t() {
                return P.a.wrap(function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                            case 0:
                                return pt(),
                                    t.next = 3,
                                    F.call("resetSession");
                            case 3:
                                return yt(!1),
                                    t.next = 6,
                                    vt(!1);
                            case 6:
                                Wt("onSessionReset");
                            case 7:
                            case "end":
                                return t.stop()
                        }
                }, t, this)
            })),
                function() {
                    return g.apply(this, arguments)
                }
        ), Ct = function() {
            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}
                , n = t.message
                , e = t.postback;
            pt();
            n = dt(n),
            ft(n) || Object(C.a)("Message must be string or number."),
            (!(n = n.trim()).length || 256 < n.length) && Object(C.a)("Message can not be empty and can be up to ".concat(256, " characters long.")),
            void 0 !== e && (ft(e) ? (!e.length || 256 < e.length) && Object(C.a)("Postback can not be empty and can be up to ".concat(256, " characters long.")) : Object(C.a)("Postback must be string or number.")),
                S.opened ? F.call("sendMessage", n, e) : (F.once(st.a, function() {
                    return F.call("sendMessage", n, e)
                }),
                    F.call("toggleChat", !0))
        }, kt = function() {
            pt(),
            S.opened || F.call("toggleChat", !0),
                F.call("triggerChat")
        }, Lt = function() {
            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}
                , n = t.url
                , e = t.height;
            pt(),
            S.moment && Object(C.a)("Moment is already opened");
            ft(n) && n ? (!n.length || 2048 < n.length) && Object(C.a)("URL can not be empty and can be up to ".concat(2048, " characters long.")) : Object(C.a)("URL must be string and can not be empty."),
            ["full", "tall", "compact"].includes(e) || Object(C.a)('The value of the field "height" must be one of the following: "full", "tall or "compact"'),
            S.opened || F.call("toggleChat", !0),
                F.call("openMoment", n, e)
        }, Pt = function() {
            pt(),
            S.moment || Object(C.a)("Moment is already closed"),
                F.call("closeMoment")
        }, Mt = (w = _()(P.a.mark(function t(n) {
                var e;
                return P.a.wrap(function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                            case 0:
                                return pt(),
                                    mt(n),
                                    t.next = 4,
                                    F.call("setSessionAttributes", n);
                            case 4:
                                if ((e = t.sent)instanceof Error)
                                    return t.abrupt("return", Object(C.a)(e.message));
                                t.next = 7;
                                break;
                            case 7:
                                return t.abrupt("return", !0);
                            case 8:
                            case "end":
                                return t.stop()
                        }
                }, t, this)
            })),
                function(t) {
                    return w.apply(this, arguments)
                }
        ), _t = (O = _()(P.a.mark(function t(n) {
                var e;
                return P.a.wrap(function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                            case 0:
                                return pt(),
                                    mt(n),
                                    t.next = 4,
                                    F.call("setUserAttributes", n);
                            case 4:
                                if ((e = t.sent)instanceof Error)
                                    return t.abrupt("return", Object(C.a)(e.message));
                                t.next = 7;
                                break;
                            case 7:
                                return t.abrupt("return", !0);
                            case 8:
                            case "end":
                                return t.stop()
                        }
                }, t, this)
            })),
                function(t) {
                    return O.apply(this, arguments)
                }
        ), Tt = (x = _()(P.a.mark(function t() {
                var n;
                return P.a.wrap(function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                            case 0:
                                return pt(),
                                    t.next = 3,
                                    F.call("getUserData");
                            case 3:
                                return (n = t.sent)instanceof Error && Object(C.a)(n.message),
                                    t.abrupt("return", n);
                            case 6:
                            case "end":
                                return t.stop()
                        }
                }, t, this)
            })),
                function() {
                    return x.apply(this, arguments)
                }
        ), At = (j = _()(P.a.mark(function t() {
                return P.a.wrap(function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                            case 0:
                                pt(),
                                    F.call("endChat");
                            case 2:
                            case "end":
                                return t.stop()
                        }
                }, t, this)
            })),
                function() {
                    return j.apply(this, arguments)
                }
        ), Nt = function() {
            pt(),
                F.call("hideGreeting")
        }, It = function(t) {
            pt();
            ft(t) ? (!t.length || 256 < t.length) && Object(C.a)("Message can not be empty and can be up to ".concat(256, " characters long.")) : Object(C.a)("Message must be string."),
                F.call("showGreeting", t)
        }, Rt = function() {
            (u.defined ? Object(C.c)("The widget code has been loaded more than once.") : (u.defined = !0,
            window.postMessage && document.querySelector || Object(C.b)("Not supported browser type."))) && (!function() {
                var t = !0
                    , n = !1
                    , e = void 0;
                try {
                    for (var r, o = k[Symbol.iterator](); !(t = (r = o.next()).done); t = !0) {
                        var i = r.value;
                        s[i] = "function" == typeof s[i] ? s[i] : null
                    }
                } catch (t) {
                    n = !0,
                        e = t
                } finally {
                    try {
                        t || null == o.return || o.return()
                    } finally {
                        if (n)
                            throw e
                    }
                }
            }(),
                Object.keys(r).forEach(function(t) {
                    return Object.defineProperty(s, t, {
                        writable: !1,
                        enumerable: !0,
                        value: r[t]
                    })
                }),
            Wt("onBeforeLoad") && Ut("create").catch(function(t) {
                return Object(C.b)(t, !1)
            }))
        }, Wt = function(t) {
            var n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : void 0;
            return "onBeforeLoad" === t ? null === s[t] || !1 !== s[t].call(s) : "function" == typeof s[t] && ("onStartConversation" === t && Object(C.c)('Hook "onStartConversation" is deprecated and will be removed soon. Please use the "onConversationStart" instead.'),
                s[t].call(s, n))
        }, Ut = function(t, n) {
            if (s.hasOwnProperty(t))
                return s[t](n)
        };
        document.body ? Rt() : window.addEventListener("DOMContentLoaded", Rt)
    }
]);
