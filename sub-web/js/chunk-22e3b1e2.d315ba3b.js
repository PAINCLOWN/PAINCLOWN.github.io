(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-22e3b1e2"], {
    "14c3": function(e, t, o) {
        var r = o("c6b6"),
        n = o("9263");
        e.exports = function(e, t) {
            var o = e.exec;
            if ("function" === typeof o) {
                var a = o.call(e, t);
                if ("object" !== typeof a) throw TypeError("RegExp exec method returned something other than an Object or null");
                return a
            }
            if ("RegExp" !== r(e)) throw TypeError("RegExp#exec called on incompatible receiver");
            return n.call(e, t)
        }
    },
    "25f0": function(e, t, o) {
        "use strict";
        var r = o("6eeb"),
        n = o("825a"),
        a = o("d039"),
        l = o("ad6d"),
        i = "toString",
        s = RegExp.prototype,
        c = s[i],
        u = a((function() {
            return "/a/b" != c.call({
                source: "a",
                flags: "b"
            })
        })),
        f = c.name != i; (u || f) && r(RegExp.prototype, i, (function() {
            var e = n(this),
            t = String(e.source),
            o = e.flags,
            r = String(void 0 === o && e instanceof RegExp && !("flags" in s) ? l.call(e) : o);
            return "/" + t + "/" + r
        }), {
            unsafe: !0
        })
    },
    5319 : function(e, t, o) {
        "use strict";
        var r = o("d784"),
        n = o("825a"),
        a = o("7b0b"),
        l = o("50c4"),
        i = o("a691"),
        s = o("1d80"),
        c = o("8aa5"),
        u = o("14c3"),
        f = Math.max,
        d = Math.min,
        m = Math.floor,
        p = /\$([$&'`]|\d\d?|<[^>]*>)/g,
        h = /\$([$&'`]|\d\d?)/g,
        b = function(e) {
            return void 0 === e ? e: String(e)
        };
        r("replace", 2, (function(e, t, o, r) {
            var g = r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,
            v = r.REPLACE_KEEPS_$0,
            x = g ? "$": "$0";
            return [function(o, r) {
                var n = s(this),
                a = void 0 == o ? void 0 : o[e];
                return void 0 !== a ? a.call(o, n, r) : t.call(String(n), o, r)
            },
            function(e, r) {
                if (!g && v || "string" === typeof r && -1 === r.indexOf(x)) {
                    var a = o(t, e, this, r);
                    if (a.done) return a.value
                }
                var s = n(e),
                m = String(this),
                p = "function" === typeof r;
                p || (r = String(r));
                var h = s.global;
                if (h) {
                    var y = s.unicode;
                    s.lastIndex = 0
                }
                var C = [];
                while (1) {
                    var w = u(s, m);
                    if (null === w) break;
                    if (C.push(w), !h) break;
                    var k = String(w[0]);
                    "" === k && (s.lastIndex = c(m, l(s.lastIndex), y))
                }
                for (var R = "",
                U = 0,
                _ = 0; _ < C.length; _++) {
                    w = C[_];
                    for (var E = String(w[0]), $ = f(d(i(w.index), m.length), 0), A = [], T = 1; T < w.length; T++) A.push(b(w[T]));
                    var I = w.groups;
                    if (p) {
                        var L = [E].concat(A, $, m);
                        void 0 !== I && L.push(I);
                        var O = String(r.apply(void 0, L))
                    } else O = S(E, m, $, A, I, r);
                    $ >= U && (R += m.slice(U, $) + O, U = $ + E.length)
                }
                return R + m.slice(U)
            }];
            function S(e, o, r, n, l, i) {
                var s = r + e.length,
                c = n.length,
                u = h;
                return void 0 !== l && (l = a(l), u = p),
                t.call(i, u, (function(t, a) {
                    var i;
                    switch (a.charAt(0)) {
                    case "$":
                        return "$";
                    case "&":
                        return e;
                    case "`":
                        return o.slice(0, r);
                    case "'":
                        return o.slice(s);
                    case "<":
                        i = l[a.slice(1, -1)];
                        break;
                    default:
                        var u = +a;
                        if (0 === u) return t;
                        if (u > c) {
                            var f = m(u / 10);
                            return 0 === f ? t: f <= c ? void 0 === n[f - 1] ? a.charAt(1) : n[f - 1] + a.charAt(1) : t
                        }
                        i = n[u - 1]
                    }
                    return void 0 === i ? "": i
                }))
            }
        }))
    },
    6547 : function(e, t, o) {
        var r = o("a691"),
        n = o("1d80"),
        a = function(e) {
            return function(t, o) {
                var a, l, i = String(n(t)),
                s = r(o),
                c = i.length;
                return s < 0 || s >= c ? e ? "": void 0 : (a = i.charCodeAt(s), a < 55296 || a > 56319 || s + 1 === c || (l = i.charCodeAt(s + 1)) < 56320 || l > 57343 ? e ? i.charAt(s) : a: e ? i.slice(s, s + 2) : l - 56320 + (a - 55296 << 10) + 65536)
            }
        };
        e.exports = {
            codeAt: a(!1),
            charAt: a(!0)
        }
    },
    "8aa5": function(e, t, o) {
        "use strict";
        var r = o("6547").charAt;
        e.exports = function(e, t, o) {
            return t + (o ? r(e, t).length: 1)
        }
    },
    9263 : function(e, t, o) {
        "use strict";
        var r = o("ad6d"),
        n = o("9f7f"),
        a = RegExp.prototype.exec,
        l = String.prototype.replace,
        i = a,
        s = function() {
            var e = /a/,
            t = /b*/g;
            return a.call(e, "a"),
            a.call(t, "a"),
            0 !== e.lastIndex || 0 !== t.lastIndex
        } (),
        c = n.UNSUPPORTED_Y || n.BROKEN_CARET,
        u = void 0 !== /()??/.exec("")[1],
        f = s || u || c;
        f && (i = function(e) {
            var t, o, n, i, f = this,
            d = c && f.sticky,
            m = r.call(f),
            p = f.source,
            h = 0,
            b = e;
            return d && (m = m.replace("y", ""), -1 === m.indexOf("g") && (m += "g"), b = String(e).slice(f.lastIndex), f.lastIndex > 0 && (!f.multiline || f.multiline && "\n" !== e[f.lastIndex - 1]) && (p = "(?: " + p + ")", b = " " + b, h++), o = new RegExp("^(?:" + p + ")", m)),
            u && (o = new RegExp("^" + p + "$(?!\\s)", m)),
            s && (t = f.lastIndex),
            n = a.call(d ? o: f, b),
            d ? n ? (n.input = n.input.slice(h), n[0] = n[0].slice(h), n.index = f.lastIndex, f.lastIndex += n[0].length) : f.lastIndex = 0 : s && n && (f.lastIndex = f.global ? n.index + n[0].length: t),
            u && n && n.length > 1 && l.call(n[0], o, (function() {
                for (i = 1; i < arguments.length - 2; i++) void 0 === arguments[i] && (n[i] = void 0)
            })),
            n
        }),
        e.exports = i
    },
    "9f7f": function(e, t, o) {
        "use strict";
        var r = o("d039");
        function n(e, t) {
            return RegExp(e, t)
        }
        t.UNSUPPORTED_Y = r((function() {
            var e = n("a", "y");
            return e.lastIndex = 2,
            null != e.exec("abcd")
        })),
        t.BROKEN_CARET = r((function() {
            var e = n("^r", "gy");
            return e.lastIndex = 2,
            null != e.exec("str")
        }))
    },
    a640: function(e, t, o) {
        "use strict";
        var r = o("d039");
        e.exports = function(e, t) {
            var o = [][e];
            return !! o && r((function() {
                o.call(null, t ||
                function() {
                    throw 1
                },
                1)
            }))
        }
    },
    a9c7: function(e, t, o) {
        "use strict";
        o.r(t);
        var r = function() {
            var e = this,
            t = e.$createElement,
            o = e._self._c || t;
            return o("div", [o("el-row", {
                staticStyle: {
                    "margin-top": "10px"
                }
            },
            [o("el-col", [o("el-card", [o("div", {
                attrs: {
                    slot: "header"
                },
                slot: "header"
            },
            [e._v("Subscription Converter")]), o("el-container", [o("el-form", {
                staticStyle: {
                    width: "100%"
                },
                attrs: {
                    model: e.form,
                    "label-width": "120px",
                    "label-position": "left"
                }
            },
            [o("el-form-item", {
                attrs: {
                    label: "模式设置:"
                }
            },
            [o("el-radio", {
                attrs: {
                    label: "1"
                },
                model: {
                    value: e.advanced,
                    callback: function(t) {
                        e.advanced = t
                    },
                    expression: "advanced"
                }
            },
            [e._v("基础模式")]), o("el-radio", {
                attrs: {
                    label: "2"
                },
                model: {
                    value: e.advanced,
                    callback: function(t) {
                        e.advanced = t
                    },
                    expression: "advanced"
                }
            },
            [e._v("进阶模式")])], 1), o("el-form-item", {
                attrs: {
                    label: "订阅链接:"
                }
            },
            [o("el-input", {
                attrs: {
                    type: "textarea",
                    rows: "3",
                    placeholder: "支持订阅或ss/ssr/vmess单链接。多个链接请每行一个或用 | 分隔"
                },
                model: {
                    value: e.form.sourceSubUrl,
                    callback: function(t) {
                        e.$set(e.form, "sourceSubUrl", t)
                    },
                    expression: "form.sourceSubUrl"
                }
            })], 1), o("el-form-item", {
                attrs: {
                    label: "客户端:"
                }
            },
            [o("el-select", {
                staticStyle: {
                    width: "100%"
                },
                model: {
                    value: e.form.clientType,
                    callback: function(t) {
                        e.$set(e.form, "clientType", t)
                    },
                    expression: "form.clientType"
                }
            },
            e._l(e.options.clientTypes, (function(e, t) {
                return o("el-option", {
                    key: t,
                    attrs: {
                        label: t,
                        value: e
                    }
                })
            })), 1)], 1), o("el-form-item", {
                attrs: {
                    label: "远程配置:"
                }
            },
            [o("el-select", {
                staticStyle: {
                    width: "100%"
                },
                attrs: {
                    "allow-create": "",
                    filterable: "",
                    placeholder: "请选择"
                },
                model: {
                    value: e.form.remoteConfig,
                    callback: function(t) {
                        e.$set(e.form, "remoteConfig", t)
                    },
                    expression: "form.remoteConfig"
                }
            },
            e._l(e.options.remoteConfig, (function(t) {
                return o("el-option-group", {
                    key: t.label,
                    attrs: {
                        label: t.label
                    }
                },
                e._l(t.options, (function(e) {
                    return o("el-option", {
                        key: e.value,
                        attrs: {
                            label: e.label,
                            value: e.value
                        }
                    })
                })), 1)
            })), 1)], 1), o("el-form-item", {
                attrs: {
                    label: "后端地址:"
                }
            },
            [o("el-select", {
                staticStyle: {
                    width: "100%"
                },
                attrs: {
                    "allow-create": "",
                    filterable: "",
                    placeholder: "请选择"
                },
                model: {
                    value: e.form.customBackend,
                    callback: function(t) {
                        e.$set(e.form, "customBackend", t)
                    },
                    expression: "form.customBackend"
                }
            },
            e._l(e.options.customBackend, (function(e, t) {
                return o("el-option", {
                    key: t,
                    attrs: {
                        label: t,
                        value: e
                    }
                })
            })), 1)], 1), "2" === e.advanced ? o("div", [o("el-form-item", {
                attrs: {
                    label: "IncludeRemarks:"
                }
            },
            [o("el-input", {
                attrs: {
                    placeholder: "节点名包含的关键字，支持正则"
                },
                model: {
                    value: e.form.includeRemarks,
                    callback: function(t) {
                        e.$set(e.form, "includeRemarks", t)
                    },
                    expression: "form.includeRemarks"
                }
            })], 1), o("el-form-item", {
                attrs: {
                    label: "ExcludeRemarks:"
                }
            },
            [o("el-input", {
                attrs: {
                    placeholder: "节点名不包含的关键字，支持正则"
                },
                model: {
                    value: e.form.excludeRemarks,
                    callback: function(t) {
                        e.$set(e.form, "excludeRemarks", t)
                    },
                    expression: "form.excludeRemarks"
                }
            })], 1), o("el-form-item", {
                attrs: {
                    label: "FileName:"
                }
            },
            [o("el-input", {
                attrs: {
                    placeholder: "返回的订阅文件名"
                },
                model: {
                    value: e.form.filename,
                    callback: function(t) {
                        e.$set(e.form, "filename", t)
                    },
                    expression: "form.filename"
                }
            })], 1), o("el-form-item", {
                attrs: {
                    "label-width": "0px"
                }
            },
            [o("el-row", {
                attrs: {
                    type: "flex"
                }
            },
            [o("el-col", [o("el-checkbox", {
                attrs: {
                    label: "输出为 Node List",
                    border: ""
                },
                model: {
                    value: e.form.nodeList,
                    callback: function(t) {
                        e.$set(e.form, "nodeList", t)
                    },
                    expression: "form.nodeList"
                }
            }), o("el-checkbox", {
                attrs: {
                    label: "Emoji",
                    border: ""
                },
                model: {
                    value: e.form.emoji,
                    callback: function(t) {
                        e.$set(e.form, "emoji", t)
                    },
                    expression: "form.emoji"
                }
            })], 1), o("el-popover", {
                model: {
                    value: e.form.extraset,
                    callback: function(t) {
                        e.$set(e.form, "extraset", t)
                    },
                    expression: "form.extraset"
                }
            },
            [o("el-row", [o("el-checkbox", {
                attrs: {
                    label: "排序节点"
                },
                model: {
                    value: e.form.sort,
                    callback: function(t) {
                        e.$set(e.form, "sort", t)
                    },
                    expression: "form.sort"
                }
            })], 1), o("el-row", [o("el-checkbox", {
                attrs: {
                    label: "启用 UDP"
                },
                model: {
                    value: e.form.udp,
                    callback: function(t) {
                        e.$set(e.form, "udp", t)
                    },
                    expression: "form.udp"
                }
            })], 1), o("el-row", [o("el-checkbox", {
                attrs: {
                    label: "启用 TFO"
                },
                model: {
                    value: e.form.tfo,
                    callback: function(t) {
                        e.$set(e.form, "tfo", t)
                    },
                    expression: "form.tfo"
                }
            })], 1), o("el-row", [o("el-checkbox", {
                attrs: {
                    label: "跳过证书验证"
                },
                model: {
                    value: e.form.scv,
                    callback: function(t) {
                        e.$set(e.form, "scv", t)
                    },
                    expression: "form.scv"
                }
            })], 1), o("el-row", [o("el-checkbox", {
                attrs: {
                    label: "过滤非法节点"
                },
                model: {
                    value: e.form.fdn,
                    callback: function(t) {
                        e.$set(e.form, "fdn", t)
                    },
                    expression: "form.fdn"
                }
            })], 1), o("el-button", {
                attrs: {
                    slot: "reference"
                },
                slot: "reference"
            },
            [e._v("更多选项")])], 1)], 1)], 1)], 1) : e._e(), o("div", {
                staticStyle: {
                    "margin-top": "50px"
                }
            }), o("el-divider", {
                attrs: {
                    "content-position": "center"
                }
            },
            [o("i", {
                staticClass: "el-icon-magic-stick"
            })]), o("el-form-item", {
                attrs: {
                    label: "定制订阅:"
                }
            },
            [o("el-input", {
                staticClass: "copy-content",
                attrs: {
                    disabled: ""
                },
                model: {
                    value: e.customSubUrl,
                    callback: function(t) {
                        e.customSubUrl = t
                    },
                    expression: "customSubUrl"
                }
            },
            [o("el-button", {
                directives: [{
                    name: "clipboard",
                    rawName: "v-clipboard:copy",
                    value: e.customSubUrl,
                    expression: "customSubUrl",
                    arg: "copy"
                },
                {
                    name: "clipboard",
                    rawName: "v-clipboard:success",
                    value: e.onCopy,
                    expression: "onCopy",
                    arg: "success"
                }],
                ref: "copy-btn",
                attrs: {
                    slot: "append",
                    icon: "el-icon-document-copy"
                },
                slot: "append"
            },
            [e._v("复制")])], 1)], 1), o("el-form-item", {
                staticStyle: {
                    "margin-top": "40px",
                    "text-align": "center"
                },
                attrs: {
                    "label-width": "0px"
                }
            },
            [o("el-button", {
                staticStyle: {
                    width: "120px"
                },
                attrs: {
                    type: "danger",
                    disabled: 0 === e.form.sourceSubUrl.length
                },
                on: {
                    click: e.makeUrl
                }
            },
            [e._v("生成订阅链接")]), o("el-button", {
                staticStyle: {
                    width: "120px"
                },
                attrs: {
                    type: "danger",
                    loading: e.loading,
                    disabled: 0 === e.customSubUrl.length
                },
                on: {
                    click: e.makeShortUrl
                }
            },
            [e._v("生成短链接")])], 1), o("el-form-item", {
                staticStyle: {
                    "text-align": "center"
                },
                attrs: {
                    "label-width": "0px"
                }
            },
            [o("el-button", {
                staticStyle: {
                    width: "120px"
                },
                attrs: {
                    type: "primary",
                    icon: "el-icon-upload",
                    loading: e.loading
                },
                on: {
                    click: function(t) {
                        e.dialogUploadConfigVisible = !0
                    }
                }
            },
            [e._v("上传配置")]), o("el-button", {
                staticStyle: {
                    width: "120px"
                },
                attrs: {
                    type: "primary",
                    icon: "el-icon-connection",
                    disabled: 0 === e.customSubUrl.length
                },
                on: {
                    click: e.clashInstall
                }
            },
            [e._v("一键导入Clash")])], 1)], 1)], 1)], 1)], 1)], 1), o("el-dialog", {
                attrs: {
                    title: "Remote config upload",
                    visible: e.dialogUploadConfigVisible,
                    "show-close": !1,
                    "close-on-click-modal": !1,
                    "close-on-press-escape": !1,
                    width: "700px"
                },
                on: {
                    "update:visible": function(t) {
                        e.dialogUploadConfigVisible = t
                    }
                }
            },
            [o("el-form", {
                attrs: {
                    "label-position": "left",
                    "label-width": "150px"
                }
            },
            [o("el-form-item", {
                attrs: {
                    prop: "uploadPasswordItem"
                }
            },
            [o("div", {
                attrs: {
                    slot: "label"
                },
                slot: "label"
            },
            [e._v(" 密码： "), o("el-popover", {
                attrs: {
                    trigger: "hover",
                    placement: "right"
                }
            },
            [o("el-link", {
                attrs: {
                    type: "primary",
                    href: e.myBot,
                    target: "_blank",
                    icon: "el-icon-s-promotion"
                }
            },
            [e._v("@CareyWong_bot")]), o("i", {
                staticClass: "el-icon-question",
                attrs: {
                    slot: "reference"
                },
                slot: "reference"
            })], 1)], 1), o("el-input", {
                staticStyle: {
                    width: "250px"
                },
                attrs: {
                    "show-password": "",
                    placeholder: "请输入密码"
                },
                model: {
                    value: e.uploadPassword,
                    callback: function(t) {
                        e.uploadPassword = t
                    },
                    expression: "uploadPassword"
                }
            })], 1), o("el-form-item", {
                attrs: {
                    prop: "uploadConfig"
                }
            },
            [o("div", {
                attrs: {
                    slot: "label"
                },
                slot: "label"
            },
            [e._v(" RemoteConfig： "), o("el-popover", {
                attrs: {
                    trigger: "hover",
                    placement: "right"
                }
            },
            [o("el-link", {
                attrs: {
                    type: "primary",
                    href: e.sampleConfig,
                    target: "_blank",
                    icon: "el-icon-info"
                }
            },
            [e._v("参考配置")]), o("i", {
                staticClass: "el-icon-question",
                attrs: {
                    slot: "reference"
                },
                slot: "reference"
            })], 1)], 1), o("el-input", {
                attrs: {
                    type: "textarea",
                    autosize: {
                        minRows: 15,
                        maxRows: 15
                    },
                    maxlength: "3000",
                    "show-word-limit": ""
                },
                model: {
                    value: e.uploadConfig,
                    callback: function(t) {
                        e.uploadConfig = t
                    },
                    expression: "uploadConfig"
                }
            })], 1)], 1), o("div", {
                staticClass: "dialog-footer",
                attrs: {
                    slot: "footer"
                },
                slot: "footer"
            },
            [o("el-button", {
                on: {
                    click: function(t) {
                        e.uploadConfig = "",
                        e.dialogUploadConfigVisible = !1
                    }
                }
            },
            [e._v("取 消")]), o("el-button", {
                attrs: {
                    type: "primary",
                    disabled: 0 === e.uploadConfig.length
                },
                on: {
                    click: e.confirmUploadConfig
                }
            },
            [e._v("确 定")])], 1)], 1)], 1)
        },
        n = [],
        a = (o("c975"), o("d3b7"), o("ac1f"), o("25f0"), o("5319"), "https://raw.githubusercontent.com/tindy2013/subconverter/master/base/config/example_external_config.ini"),
        l = "https://github.com/tindy2013/subconverter/releases",
        i = "http://localhost:25500/sub?",
        s = "https://api.wcc.best/short2",
        c = "http://localhost:25500/config/upload",
        u = "https://t.me/niconewbeeeapi",
        f = {
            data: function() {
                return {
                    advanced: "1",
                    options: {
                        clientTypes: {
                            Clash: "clash",
                            ClashR: "clashr",
                            Surge2: "surge&ver=2",
                            Surge3: "surge&ver=3",
                            Surge4: "surge&ver=4",
                            Quantumult: "quan",
                            QuantumultX: "quanx",
                            Surfboard: "surfboard",
                            Loon: "loon",
                            ss: "ss",
                            ssr: "ssr",
                            ssd: "ssd"
                        },
                        customBackend: {
                            "localhost:25500 本地版": "http://localhost:25500/sub?",
                            "gfwsb.114514.best(subconverter作者提供1)": "https://gfwsb.114514.best/sub?",
                            "poxx.ml:25500(POXX本站提供)": "https://poxx.ml:25500/sub?",
                            "api.wcc.best(sub-web作者提供)": "https://api.wcc.best/sub?"
                        },
                        backendOptions: [{
                            value: "http://localhost:25500/sub?"
                        },
                        {
                            value: "https://gfwsb.114514.best/sub?"
                        },
                        {
                            value: "https://api.wcc.best/sub?"
                        }],
                        remoteConfig: [{
                            label: "默认",
                            options: [{
                                label: "不选，由接口提供方提供",
                                value: ""
                            }]
                        },
                        {
                            label: "ACL4SSR",
                            options: [{
                                label: "ACL4SSR_Online 默认版 分组比较全 (与Github同步)",
                                value: "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online.ini"
                            },
                            {
                                label: "ACL4SSR_Online_AdblockPlus 更多去广告 (与Github同步)",
                                value: "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_AdblockPlus.ini"
                            },
                            {
                                label: "ACL4SSR_Online_NoAuto 无自动测速 (与Github同步)",
                                value: "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_NoAuto.ini"
                            },
                            {
                                label: "ACL4SSR_Online_Mini 精简版 (与Github同步)",
                                value: "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini.ini"
                            },
                            {
                                label: "ACL4SSR_Online_Mini_AdblockPlus.ini 精简版 更多去广告 (与Github同步)",
                                value: "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini_AdblockPlus.ini"
                            },
                            {
                                label: "ACL4SSR_Online_Mini_NoAuto.ini 精简版 不带自动测速 (与Github同步)",
                                value: "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini_NoAuto.ini"
                            },
                            {
                                label: "ACL4SSR_Online_Mini_Fallback.ini 精简版 带故障转移 (与Github同步)",
                                value: "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini_Fallback.ini"
                            },
                            {
                                label: "ACL4SSR_Online_Mini_MultiMode.ini 精简版 自动测速、故障转移、负载均衡 (与Github同步)",
                                value: "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini_MultiMode.ini"
                            },
                            {
                                label: "ACL4SSR_Online_Full 全分组 重度用户使用 (与Github同步)",
                                value: "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Full.ini"
                            },
                            {
                                label: "ACL4SSR_Online_Full_AdblockPlus 全分组 重度用户使用 更多去广告 (与Github同步)",
                                value: "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Full_AdblockPlus.ini"
                            },
                            {
                                label: "ACL4SSR 本地 默认版 分组比较全",
                                value: "config/ACL4SSR.ini"
                            },
                            {
                                label: "ACL4SSR_Mini 本地 精简版",
                                value: "config/ACL4SSR_Mini.ini"
                            },
                            {
                                label: "ACL4SSR_Mini_NoAuto.ini 本地 精简版+无自动测速",
                                value: "config/ACL4SSR_Mini_NoAuto.ini"
                            },
                            {
                                label: "ACL4SSR_Mini_Fallback.ini 本地 精简版+fallback",
                                value: "config/ACL4SSR_Mini_Fallback.ini"
                            },
                            {
                                label: "ACL4SSR_BackCN 本地 回国",
                                value: "config/ACL4SSR_BackCN.ini"
                            },
                            {
                                label: "ACL4SSR_NoApple 本地 无苹果分流",
                                value: "config/ACL4SSR_NoApple.ini"
                            },
                            {
                                label: "ACL4SSR_NoAuto 本地 无自动测速 ",
                                value: "config/ACL4SSR_NoAuto.ini"
                            },
                            {
                                label: "ACL4SSR_NoAuto_NoApple 本地 无自动测速&无苹果分流",
                                value: "config/ACL4SSR_NoAuto_NoApple.ini"
                            },
                            {
                                label: "ACL4SSR_NoMicrosoft 本地 无微软分流",
                                value: "config/ACL4SSR_NoMicrosoft.ini"
                            },
                            {
                                label: "ACL4SSR_WithGFW 本地 GFW列表",
                                value: "config/ACL4SSR_WithGFW.ini"
                            }]
                        },
                        {
                            label: "universal",
                            options: [{
                                label: "No-Urltest",
                                value: "https://raw.githubusercontent.com/CareyWang/Rules/master/RemoteConfig/universal/no-urltest.ini"
                            },
                            {
                                label: "Urltest",
                                value: "https://raw.githubusercontent.com/CareyWang/Rules/master/RemoteConfig/universal/urltest.ini"
                            }]
                        },
                        {
                            label: "customized",
                            options: [{
                                label: "Maying",
                                value: "https://raw.githubusercontent.com/CareyWang/Rules/master/RemoteConfig/customized/maying.ini"
                            },
                            {
                                label: "Nexitally",
                                value: "https://raw.githubusercontent.com/CareyWang/Rules/master/RemoteConfig/customized/nexitally.ini"
                            },
                            {
                                label: "YoYu",
                                value: "https://raw.githubusercontent.com/CareyWang/Rules/master/RemoteConfig/customized/yoyu.ini"
                            },
                            {
                                label: "Ytoo",
                                value: "https://raw.githubusercontent.com/CareyWang/Rules/master/RemoteConfig/customized/ytoo.ini"
                            },
                            {
                                label: "NyanCAT",
                                value: "https://raw.githubusercontent.com/CareyWang/Rules/master/RemoteConfig/customized/nyancat.ini"
                            },
                            {
                                label: "贼船",
                                value: "https://raw.githubusercontent.com/CareyWang/Rules/master/RemoteConfig/customized/zeichuan.ini"
                            }]
                        },
                        {
                            label: "Special",
                            options: [{
                                label: "NeteaseUnblock(仅规则，No-Urltest)",
                                value: "https://raw.githubusercontent.com/CareyWang/Rules/master/RemoteConfig/special/netease.ini"
                            }]
                        }]
                    },
                    form: {
                        sourceSubUrl: "",
                        clientType: "",
                        customBackend: "",
                        remoteConfig: "",
                        excludeRemarks: "",
                        includeRemarks: "",
                        filename: "",
                        emoji: !0,
                        nodeList: !1,
                        extraset: !1,
                        sort: !1,
                        udp: !1,
                        tfo: !1,
                        scv: !1,
                        fdn: !1
                    },
                    loading: !1,
                    customSubUrl: "",
                    dialogUploadConfigVisible: !1,
                    uploadConfig: "",
                    uploadPassword: "",
                    myBot: u,
                    sampleConfig: a
                }
            },
            created: function() {
                document.title = "POZZ Subscription Converter"
            },
            mounted: function() {
                this.form.clientType = "clashr",
                this.form.customBackend = "http://localhost:25500/sub?",
                this.form.remoteConfig = "不选，默认本地处理",
                this.notify()
            },
            methods: {
                onCopy: function() {
                    this.$message.success("Copied!")
                },
                gotoGayhub: function() {
                    window.open(l)
                },
                gotoRemoteConfig: function() {
                    window.open(a)
                },
                createFilter: function(e) {
                    return function(t) {
                        return 0 === t.value.toLowerCase().indexOf(e.toLowerCase())
                    }
                },
                clashInstall: function() {
                    if ("" === this.customSubUrl) return this.$message.error("请先填写必填项，生成订阅链接"),
                    !1;
                    var e = "clash://install-config?url=";
                    window.open(e + encodeURIComponent(this.customSubUrl))
                },
                surgeInstall: function() {
                    if ("" === this.customSubUrl) return this.$message.error("请先填写必填项，生成订阅链接"),
                    !1;
                    var e = "surge://install-config?url=";
                    window.open(e + this.customSubUrl)
                },
                makeUrl: function() {
                    if ("" === this.form.sourceSubUrl || "" === this.form.clientType) return this.$message.error("订阅链接与客户端为必填项"),
                    !1;
                    var e = "" === this.form.customBackend ? i: this.form.customBackend,
                    t = "" === this.form.remoteConfig ? "": this.form.remoteConfig,
                    o = this.form.sourceSubUrl;
                    o = o.replace(/[\n|\r|\n\r]/g, "|"),
                    this.customSubUrl = e + "target=" + this.form.clientType + "&url=" + encodeURIComponent(o),
                    "" !== t && (this.customSubUrl += "&config=" + encodeURIComponent(t)),
                    "2" === this.advanced && ("" !== this.form.excludeRemarks && (this.customSubUrl += "&exclude=" + encodeURIComponent(this.form.excludeRemarks)), "" !== this.form.includeRemarks && (this.customSubUrl += "&include=" + encodeURIComponent(this.form.includeRemarks)), "" !== this.form.filename && (this.customSubUrl += "&filename=" + encodeURIComponent(this.form.filename)), this.customSubUrl += "&emoji=" + this.form.emoji.toString() + "&list=" + this.form.nodeList.toString() + "&udp=" + this.form.udp.toString() + "&tfo=" + this.form.tfo.toString() + "&scv=" + this.form.scv.toString() + "&fdn=" + this.form.fdn.toString() + "&sort=" + this.form.sort.toString()),
                    this.$copyText(this.customSubUrl),
                    this.$message.success("定制订阅已复制到剪贴板")
                },
                makeShortUrl: function() {
                    var e = this;
                    if ("" === this.customSubUrl) return this.$message.warning("请先生成订阅链接，再获取对应短链接"),
                    !1;
                    this.loading = !0,
                    this.$axios.get(s + "?longUrl=" + btoa(this.customSubUrl)).then((function(t) {
                        1 === t.data.Code && "" !== t.data.ShortUrl ? (e.$copyText(t.data.ShortUrl), e.$message.success("短链接已复制到剪贴板")) : e.$message.error("短链接获取失败：" + t.data.Message)
                    })).
                    catch((function() {
                        e.$message.error("短链接获取失败")
                    })).
                    finally((function() {
                        e.loading = !1
                    }))
                },
                notify: function() {
                    var e = this.$createElement;
                    this.$notify({
                        title: "隐私提示",
                        type: "warning",
                        message: e("i", {
                            style: "color: teal"
                        },
                        "各种订阅链接（短链接服务除外）生成纯前端实现，无隐私问题。默认提供后端转换服务，隐私担忧者请自行搭建后端服务。")
                    })
                },
                confirmUploadConfig: function() {
                    var e = this;
                    if ("" === this.uploadConfig) return this.$message.warning("远程配置不能为空"),
                    !1;
                    this.loading = !0;
                    var t = new FormData;
                    t.append("password", this.uploadPassword),
                    t.append("config", this.uploadConfig),
                    this.$axios.post(c, t, {
                        header: {
                            "Content-Type": "application/form-data; charset=utf-8"
                        }
                    }).then((function(t) {
                        1 === t.data.Code && "" !== t.data.url ? (e.$message.success("远程配置上传成功，配置链接已复制到剪贴板，有效期三个月望知悉"), e.form.remoteConfig = t.data.Url, e.$copyText(e.form.remoteConfig), e.dialogUploadConfigVisible = !1) : e.$message.error("远程配置上传失败：" + t.data.Message)
                    })).
                    catch((function() {
                        e.$message.error("远程配置上传失败")
                    })).
                    finally((function() {
                        e.loading = !1
                    }))
                }
            }
        },
        d = f,
        m = o("2877"),
        p = Object(m["a"])(d, r, n, !1, null, null, null);
        t["default"] = p.exports
    },
    ac1f: function(e, t, o) {
        "use strict";
        var r = o("23e7"),
        n = o("9263");
        r({
            target: "RegExp",
            proto: !0,
            forced: /./.exec !== n
        },
        {
            exec: n
        })
    },
    ad6d: function(e, t, o) {
        "use strict";
        var r = o("825a");
        e.exports = function() {
            var e = r(this),
            t = "";
            return e.global && (t += "g"),
            e.ignoreCase && (t += "i"),
            e.multiline && (t += "m"),
            e.dotAll && (t += "s"),
            e.unicode && (t += "u"),
            e.sticky && (t += "y"),
            t
        }
    },
    ae40: function(e, t, o) {
        var r = o("83ab"),
        n = o("d039"),
        a = o("5135"),
        l = Object.defineProperty,
        i = {},
        s = function(e) {
            throw e
        };
        e.exports = function(e, t) {
            if (a(i, e)) return i[e];
            t || (t = {});
            var o = [][e],
            c = !!a(t, "ACCESSORS") && t.ACCESSORS,
            u = a(t, 0) ? t[0] : s,
            f = a(t, 1) ? t[1] : void 0;
            return i[e] = !!o && !n((function() {
                if (c && !r) return ! 0;
                var e = {
                    length: -1
                };
                c ? l(e, 1, {
                    enumerable: !0,
                    get: s
                }) : e[1] = 1,
                o.call(e, u, f)
            }))
        }
    },
    c975: function(e, t, o) {
        "use strict";
        var r = o("23e7"),
        n = o("4d64").indexOf,
        a = o("a640"),
        l = o("ae40"),
        i = [].indexOf,
        s = !!i && 1 / [1].indexOf(1, -0) < 0,
        c = a("indexOf"),
        u = l("indexOf", {
            ACCESSORS: !0,
            1 : 0
        });
        r({
            target: "Array",
            proto: !0,
            forced: s || !c || !u
        },
        {
            indexOf: function(e) {
                return s ? i.apply(this, arguments) || 0 : n(this, e, arguments.length > 1 ? arguments[1] : void 0)
            }
        })
    },
    d784: function(e, t, o) {
        "use strict";
        o("ac1f");
        var r = o("6eeb"),
        n = o("d039"),
        a = o("b622"),
        l = o("9263"),
        i = o("9112"),
        s = a("species"),
        c = !n((function() {
            var e = /./;
            return e.exec = function() {
                var e = [];
                return e.groups = {
                    a: "7"
                },
                e
            },
            "7" !== "".replace(e, "$<a>")
        })),
        u = function() {
            return "$0" === "a".replace(/./, "$0")
        } (),
        f = a("replace"),
        d = function() {
            return !! /./ [f] && "" === /./ [f]("a", "$0")
        } (),
        m = !n((function() {
            var e = /(?:)/,
            t = e.exec;
            e.exec = function() {
                return t.apply(this, arguments)
            };
            var o = "ab".split(e);
            return 2 !== o.length || "a" !== o[0] || "b" !== o[1]
        }));
        e.exports = function(e, t, o, f) {
            var p = a(e),
            h = !n((function() {
                var t = {};
                return t[p] = function() {
                    return 7
                },
                7 != "" [e](t)
            })),
            b = h && !n((function() {
                var t = !1,
                o = /a/;
                return "split" === e && (o = {},
                o.constructor = {},
                o.constructor[s] = function() {
                    return o
                },
                o.flags = "", o[p] = /./ [p]),
                o.exec = function() {
                    return t = !0,
                    null
                },
                o[p](""),
                !t
            }));
            if (!h || !b || "replace" === e && (!c || !u || d) || "split" === e && !m) {
                var g = /./ [p],
                v = o(p, "" [e], (function(e, t, o, r, n) {
                    return t.exec === l ? h && !n ? {
                        done: !0,
                        value: g.call(t, o, r)
                    }: {
                        done: !0,
                        value: e.call(o, t, r)
                    }: {
                        done: !1
                    }
                }), {
                    REPLACE_KEEPS_$0: u,
                    REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: d
                }),
                x = v[0],
                S = v[1];
                r(String.prototype, e, x),
                r(RegExp.prototype, p, 2 == t ?
                function(e, t) {
                    return S.call(e, this, t)
                }: function(e) {
                    return S.call(e, this)
                })
            }
            f && i(RegExp.prototype[p], "sham", !0)
        }
    }
}]);
//# sourceMappingURL=chunk-22e3b1e2.d315ba3b.js.map
