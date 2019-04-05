/*
 * QPlayer version:1.0.0 Build:55+local Build-by:leilaghasemi Time:1487415490
 *
 * Copyright Â© 2015 - 2017 Qmery Cooperation. All Rights Reserved.
 *
 * Contact us:
 *
 * 	Qmery:
 * 		website (http://www.qmery.com/):
 * 		email (info@qmery.com):
 *
 * 	QPlayer:
 * 		website (http://player.qmery.com/):
 * 		email (info@player.qmery.com):
 *
 * 	Team Members:
 *
 * 		Yaasin Hamidi (Founder):
 * 			website (http://www.iamyaas.in/):
 * 			email (yaasinhamidi@me.com):
 *
 * 		Leila Ghasemi (Project Manager):
 * 			website ():
 * 			email (leila.ghasemi.sa@gmail.com):
 *
 * 		Pendar Safari (Front end Developer):
 * 			website (http://www.pendardesign.ir/):
 * 			email (pendar.safari@gmail.com):
 *
 * 		Samaneh HajiZadeh (UI Developer):
 * 			website ():
 * 			email (samahajideh@gmail.com):
 *
 */

!function (a, b) {
    "object" == typeof exports && "object" == typeof module ? module.exports = b() : "function" == typeof define && define.amd ? define([], b) : "object" == typeof exports ? exports.qplayer = b() : a.qplayer = b()
}(this, function () {
    return function (a) {
        function b(c) {
            if (d[c])return d[c].exports;
            var e = d[c] = {exports: {}, id: c, loaded: !1};
            return a[c].call(e.exports, e, e.exports, b), e.loaded = !0, e.exports
        }

        var c = window.webpackJsonpqplayer;
        window.webpackJsonpqplayer = function (d, f) {
            for (var g, h, i = 0, j = []; i < d.length; i++)h = d[i], e[h] && j.push.apply(j, e[h]), e[h] = 0;
            for (g in f)a[g] = f[g];
            for (c && c(d, f); j.length;)j.shift().call(null, b)
        };
        var d = {}, e = {0: 0};
        return b.e = function (a, c) {
            if (0 === e[a])return c.call(null, b);
            if (void 0 !== e[a]) e[a].push(c); else {
                e[a] = [c];
                var d = document.getElementsByTagName("head")[0], f = document.createElement("script");
                f.type = "text/javascript", f.charset = "utf-8", f.async = !0, f.src = b.p + "" + ({1: "polyfills.promise", 2: "polyfills.base64", 3: "provider.youtube"}[a] || a) + ".js", d.appendChild(f)
            }
        }, b.m = a, b.c = d, b.p = "", b(0)
    }([function (a, b, c) {
        a.exports = c(48)
    }, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function (a, b, c) {
        var d, e;
        d = [c(49), c(55), c(168)], e = function (a, b) {
            return c.p = b.loadFrom(), a.selectPlayer
        }.apply(b, d), !(void 0 !== e && (a.exports = e))
    }, function (a, b, c) {
        var d, e;
        d = [c(50), c(55), c(52), c(89), c(87), c(85), c(98)], e = function (a, b, c, d, e, f, g) {
            function h(a) {
                var g = a.getName().name;
                if (!c.find(f, c.matches({name: g}))) {
                    if (!c.isFunction(a.supports))throw{message: b.getString("S0210")};
                    f.unshift({name: g, supports: a.supports})
                }
                var h = function () {
                };
                h.prototype = d, a.prototype = new h, e[g] = a
            }

            var i = [], j = 0, k = function (b) {
                var c, d;
                return b ? "string" == typeof b ? (c = l(b), c || (d = document.getElementById(b))) : "number" == typeof b ? c = i[b] : b.nodeType && (d = b, c = l(d.id)) : c = i[0], c ? c : d ? m(new a(d, n)) : {registerPlugin: g.registerPlugin}
            }, l = function (a) {
                for (var b = 0; b < i.length; b++)if (i[b].id === a)return i[b];
                return null
            }, m = function (a) {
                return j++, a.uniqueId = j, i.push(a), a
            }, n = function (a) {
                for (var b = i.length; b--;)if (i[b].uniqueId === a.uniqueId) {
                    i.splice(b, 1);
                    break
                }
            }, o = {selectPlayer: k, registerProvider: h, availableProviders: f, registerPlugin: g.registerPlugin};
            return k.api = o, o
        }.apply(b, d), !(void 0 !== e && (a.exports = e))
    }, function (a, b, c) {
        var d, e;
        d = [c(53), c(82), c(54), c(55), c(68), c(58), c(52), c(69), c(162), c(163), c(51), c(164), c(67), c(98)], e = function (a, b, d, e, f, g, h, i, j, k, l, m, n, o) {
            var p = function (g, p) {
                function q() {
                    for (var a; a = x.pop();)a()
                }

                var r, s = this, t = !1, u = {}, v = new m, w = !0, x = [];
                h.extend(this, d), this.utils = e, this._ = h, this.Events = d, this.version = n, v.baseURL = c.p, this.getSkin = function () {
                    var a = this.getContainer().getAttribute("class");
                    return a = a.match(/qp-skin-[a-z]*/g), a[0].replace("qp-skin-", "")
                }, this.onLangLoad = function (a) {
                    v.onLoad(a)
                }, this.getString = function (a) {
                    return v.getString(a)
                }, e.getString = this.getString, e.Clipboard = c(167), this.trigger = function (a, b) {
                    return b = h.isObject(b) ? h.extend({}, b) : {}, b.type = a, window.qplayer && window.qplayer.debug ? d.trigger.call(s, a, b) : d.triggerSafe.call(s, a, b)
                }, this.dispatchEvent = this.trigger, this.removeEventListener = this.off.bind(this);
                var y = function () {
                    w = !0, r = new i(g), j(s, r), k(s, r), r.on(a.QPLAYER_PLAYLIST_ITEM, function () {
                        u = {}, C()
                    }), r.on(a.QPLAYER_DISPLAY_CLICK, function () {
                        if (w === !0) {
                            var a = s.getContainer().getElementsByTagName("video")[0], b = s.getPlaylistItem().allSources[0].type || "mp4";
                            (e.isAndroid() && "hls" !== b || e.isIOS()) && (e.setState("buffering"), a.play()), w = !1
                        }
                    }), r.on(a.QPLAYER_MEDIA_META, function (a) {
                        h.extend(u, a.metadata)
                    }), r.on(a.QPLAYER_READY, function (a) {
                        s.setLevels = e.setLevels, s.setState = e.setState, t = !0, z.tick("ready"), a.setupTime = z.between("setup", "ready"), C(), v.setDirection(s.getString("code"), s.getString("direction"), r), B()
                    }), r.on("all", s.trigger)
                };
                y(), l(this), this.id = g.id;
                var z = this._qoe = new f;
                z.tick("init");
                var A = function () {
                    t = !1, u = {}, s.off(), r && r.off(), r && r.playerDestroy && r.playerDestroy()
                }, B = function () {
                    if (!(s.getPlaylist().length <= 1)) {
                        var a = s.getContainer().getElementsByClassName("qp-playlist-container")[0].cloneNode(!0), b = s.getContainer().getElementsByClassName("qp-overlays-playlist")[0];
                        b.appendChild(a)
                    }
                };
                this.getPlugin = function (a) {
                    return s.plugins && s.plugins[a]
                }, this.addPlugin = function (a, b) {
                    this.plugins = this.plugins || {}, this.plugins[a] = b, this.onReady(b.addToPlayer), b.resize && this.onResize(b.resizeHandler)
                };
                var C = function () {
                    var a = s, b = a.getPlaylistItem(), c = a.getContainer().querySelector(".qp-title-more-detail");
                    if (b.states || (b = a.getConfig()), !b.states)return void(c.style.display = "none");
                    c.style.display = "block", b.states.duration || (c.style.display = "none"), c.parentNode.style.display = "block";
                    var d, e, f, g = "";
                    b.states && (b.states.viewer ? (d = '<span class="qp-icon qp-icon-view"></span>', d += '<div class="qp-states-title">' + b.states.viewer + "</div>", a.createState(d, "viewer")) : (e = a.getContainer().querySelector(".qp-states-place-item.qp-states-place-viewer"), null !== e && e.parentNode.removeChild(e)), f = null, b.states.duration && (f = b.states.duration), null !== f ? (g += '<div class="qp-title-duration">', g += "" + f, g += "</div>", c.innerHTML = g) : c.style.display = "none")
                };
                this.createButton = function (a) {
                    var b = r.getContainer();
                    for (var c in a) {
                        var d = document.createElement("div");
                        d.setAttribute("class", "qp-box-tr qp-btn-box qp-box-btn-" + c);
                        var e = document.createElement("div");
                        e.setAttribute("class", "qp-button-field qp-btn-box-icon qp-icon qp-icon-" + c), d.appendChild(e), b.querySelector(".qp-overlayscreator-btn");
                        var f = null;
                        f = document.createElement("div"), f.setAttribute("class", "qp-box-tr qp-icon qp-icon-close qp-box-close-bt");
                        var g = document.createElement("div");
                        g.setAttribute("class", "qp-overlayscreator-btn qp-reset"), b.appendChild(f), b.appendChild(g);
                        var h = function () {
                            var a = f.getAttribute("class").replace(" qp-box-close-hid", "");
                            f.setAttribute("class", a);
                            for (var c = b.querySelectorAll(".qp-btn-box"), d = null, e = 0; e < c.length; e++)d = c[e].getAttribute("class").replace(" qp-box-bt-remove", ""), d = d.replace(" qp-btn-box-expand", ""), c[e].setAttribute("class", d);
                            var g = b.querySelector(".qp-box.qp-box-show");
                            null !== g && (a = g.getAttribute("class").replace("qp-box-show", "qp-box-hide"), a = a.replace(" qp-box-anim", ""), g.setAttribute("class", a));
                            var h = b.getAttribute("class").replace(" qp-flag-box-open", "");
                            h = h.replace(" qp-flag-rightclick-open", ""), b.setAttribute("class", h)
                        };
                        f.addEventListener("click", h);
                        var i = a[c];
                        i.setAttribute("class", "qp-box qp-box-" + c + " qp-reset qp-box-hide");
                        var j = b.querySelector(".qp-overlayscreator-btn");
                        j.appendChild(d), b.appendChild(i), d.addEventListener("click", function () {
                            if (d.getAttribute("class").indexOf(" qp-btn-box-expand") > -1)return void h();
                            var a = b.getAttribute("class").replace(" qp-flag-rightclick-open", "");
                            b.setAttribute("class", a + " qp-flag-box-open");
                            var e = i.getAttribute("class").replace(" qp-box-hide", "");
                            i.setAttribute("class", e + " qp-box-show qp-box-anim"), f.setAttribute("class", f.getAttribute("class") + " qp-box-close-hid");
                            var g;
                            g = b.querySelectorAll(".qp-btn-box");
                            for (var j = 0; j < g.length; j++) {
                                var k = "";
                                k = g[j].getAttribute("class").indexOf("qp-box-btn-" + c) === -1 ? "qp-box-bt-remove" : "qp-btn-box-expand", g[j].setAttribute("class", g[j].getAttribute("class") + " " + k)
                            }
                        })
                    }
                };
                var D = function () {
                    var a, b = c.p;
                    a = b.indexOf("://") > -1 ? b.split("/")[2] : b.split("/")[0], a = a.split(":")[0] || a;
                    var d = [function () {
                        var a = Array.prototype.slice.call(arguments), b = a.shift();
                        return a.reverse().map(function (a, c) {
                            return String.fromCharCode(a - b - 24 - c)
                        }).join("")
                    }(25, 162, 162) + 29..toString(36).toLowerCase().split("").map(function (a) {
                        return String.fromCharCode(a.charCodeAt() + -71)
                    }).join("") + 11..toString(36).toLowerCase() + function () {
                        var a = Array.prototype.slice.call(arguments), b = a.shift();
                        return a.reverse().map(function (a, c) {
                            return String.fromCharCode(a - b - 53 - c)
                        }).join("")
                    }(40, 141, 204, 198) + 20..toString(36).toLowerCase() + function () {
                        var a = Array.prototype.slice.call(arguments), b = a.shift();
                        return a.reverse().map(function (a, c) {
                            return String.fromCharCode(a - b - 4 - c)
                        }).join("")
                    }(54, 160, 158, 103) + 23..toString(36).toLowerCase() + 30..toString(36).toLowerCase().split("").map(function (a) {
                        return String.fromCharCode(a.charCodeAt() + -71)
                    }).join("") + 23..toString(36).toLowerCase() + function () {
                        var a = Array.prototype.slice.call(arguments), b = a.shift();
                        return a.reverse().map(function (a, c) {
                            return String.fromCharCode(a - b - 27 - c)
                        }).join("")
                    }(4, 132) + 29..toString(36).toLowerCase(), function () {
                        var a = Array.prototype.slice.call(arguments), b = a.shift();
                        return a.reverse().map(function (a, c) {
                            return String.fromCharCode(a - b - 3 - c)
                        }).join("")
                    }(53, 173, 159, 166, 169) + 34..toString(36).toLowerCase() + 30..toString(36).toLowerCase().split("").map(function (a) {
                        return String.fromCharCode(a.charCodeAt() + -71)
                    }).join("") + 456..toString(36).toLowerCase() + function () {
                        var a = Array.prototype.slice.call(arguments), b = a.shift();
                        return a.reverse().map(function (a, c) {
                            return String.fromCharCode(a - b - 27 - c)
                        }).join("")
                    }(46, 182), 1184..toString(36).toLowerCase() + function () {
                        var a = Array.prototype.slice.call(arguments), b = a.shift();
                        return a.reverse().map(function (a, c) {
                            return String.fromCharCode(a - b - 43 - c)
                        }).join("")
                    }(53, 215) + 30..toString(36).toLowerCase().split("").map(function (a) {
                        return String.fromCharCode(a.charCodeAt() + -71)
                    }).join("") + 44715598..toString(36).toLowerCase() + function () {
                        var a = Array.prototype.slice.call(arguments), b = a.shift();
                        return a.reverse().map(function (a, c) {
                            return String.fromCharCode(a - b - 56 - c)
                        }).join("")
                    }(52, 221, 208, 154) + 22..toString(36).toLowerCase(), function () {
                        var a = Array.prototype.slice.call(arguments), b = a.shift();
                        return a.reverse().map(function (a, c) {
                            return String.fromCharCode(a - b - 52 - c)
                        }).join("")
                    }(8, 184, 159, 169, 172) + 531..toString(36).toLowerCase() + 30..toString(36).toLowerCase().split("").map(function (a) {
                        return String.fromCharCode(a.charCodeAt() + -71)
                    }).join("") + 1135787..toString(36).toLowerCase() + function () {
                        var a = Array.prototype.slice.call(arguments), b = a.shift();
                        return a.reverse().map(function (a, c) {
                            return String.fromCharCode(a - b - 62 - c)
                        }).join("")
                    }(36, 214, 204, 144), 921..toString(36).toLowerCase() + function () {
                        var a = Array.prototype.slice.call(arguments), b = a.shift();
                        return a.reverse().map(function (a, c) {
                            return String.fromCharCode(a - b - 4 - c)
                        }).join("")
                    }(62, 183, 169, 188, 163) + 30..toString(36).toLowerCase().split("").map(function (a) {
                        return String.fromCharCode(a.charCodeAt() + -71)
                    }).join("") + 1242099..toString(36).toLowerCase() + function () {
                        var a = Array.prototype.slice.call(arguments), b = a.shift();
                        return a.reverse().map(function (a, c) {
                            return String.fromCharCode(a - b - 1 - c)
                        }).join("")
                    }(37, 85, 159) + 456..toString(36).toLowerCase() + function () {
                        var a = Array.prototype.slice.call(arguments), b = a.shift();
                        return a.reverse().map(function (a, c) {
                            return String.fromCharCode(a - b - 51 - c)
                        }).join("")
                    }(23, 183), 14927..toString(36).toLowerCase() + 30..toString(36).toLowerCase().split("").map(function (a) {
                        return String.fromCharCode(a.charCodeAt() + -71)
                    }).join("") + 25..toString(36).toLowerCase() + function () {
                        var a = Array.prototype.slice.call(arguments), b = a.shift();
                        return a.reverse().map(function (a, c) {
                            return String.fromCharCode(a - b - 12 - c)
                        }).join("")
                    }(41, 161) + 10..toString(36).toLowerCase() + function () {
                        var a = Array.prototype.slice.call(arguments), b = a.shift();
                        return a.reverse().map(function (a, c) {
                            return String.fromCharCode(a - b - 33 - c)
                        }).join("")
                    }(30, 118, 192, 184, 170, 177, 180, 112, 179, 165, 184) + 456..toString(36).toLowerCase() + function () {
                        var a = Array.prototype.slice.call(arguments), b = a.shift();
                        return a.reverse().map(function (a, c) {
                            return String.fromCharCode(a - b - 1 - c)
                        }).join("")
                    }(55, 165)], e = !1;
                    return d.indexOf(a) > -1 && (e = !e), e
                };
                this.createState = function (a, b) {
                    var c = this.getContainer(), d = c.querySelector(".qp-states-place");
                    null === d && (d = document.createElement("div"), d.setAttribute("class", "qp-states-place"), c.appendChild(d));
                    var e = c.querySelector(".qp-states-place-item.qp-states-place-" + b);
                    null !== e && e.parentNode.removeChild(e);
                    var f = document.createElement("div");
                    f.innerHTML = a, f.setAttribute("class", "qp-states-place-item qp-states-place-" + b), d.appendChild(f)
                };
                var E = function (a) {
                    var b = c.p, d = {}, e = b + 1548347423..toString(36).toLowerCase() + function () {
                            var a = Array.prototype.slice.call(arguments), b = a.shift();
                            return a.reverse().map(function (a, c) {
                                return String.fromCharCode(a - b - 12 - c)
                            }).join("")
                        }(55, 179, 182, 182, 115, 182) + 14198..toString(36).toLowerCase() + function () {
                            var a = Array.prototype.slice.call(arguments), b = a.shift();
                            return a.reverse().map(function (a, c) {
                                return String.fromCharCode(a - b - 62 - c)
                            }).join("")
                        }(13, 189), f = 13459..toString(36).toLowerCase() + function () {
                            var a = Array.prototype.slice.call(arguments), b = a.shift();
                            return a.reverse().map(function (a, c) {
                                return String.fromCharCode(a - b - 34 - c)
                            }).join("")
                        }(48, 183) + 36054..toString(36).toLowerCase() + function () {
                            var a = Array.prototype.slice.call(arguments), b = a.shift();
                            return a.reverse().map(function (a, c) {
                                return String.fromCharCode(a - b - 47 - c)
                            }).join("")
                        }(33, 183, 190, 195) + 857..toString(36).toLowerCase(), g = function () {
                            var a = Array.prototype.slice.call(arguments), b = a.shift();
                            return a.reverse().map(function (a, c) {
                                return String.fromCharCode(a - b - 48 - c)
                            }).join("")
                        }(2, 165, 151) + 46505170..toString(36).toLowerCase() + function () {
                            var a = Array.prototype.slice.call(arguments), b = a.shift();
                            return a.reverse().map(function (a, c) {
                                return String.fromCharCode(a - b - 5 - c)
                            }).join("")
                        }(34, 137, 149) + 590..toString(36).toLowerCase() + function () {
                            var a = Array.prototype.slice.call(arguments), b = a.shift();
                            return a.reverse().map(function (a, c) {
                                return String.fromCharCode(a - b - 62 - c)
                            }).join("")
                        }(55, 231), h = 16..toString(36).toLowerCase() + function () {
                            var a = Array.prototype.slice.call(arguments), b = a.shift();
                            return a.reverse().map(function (a, c) {
                                return String.fromCharCode(a - b - 10 - c)
                            }).join("")
                        }(43, 150), i = 31..toString(36).toLowerCase() + function () {
                            var a = Array.prototype.slice.call(arguments), b = a.shift();
                            return a.reverse().map(function (a, c) {
                                return String.fromCharCode(a - b - 7 - c)
                            }).join("")
                        }(17, 138), j = 26..toString(36).toLowerCase() + function () {
                            var a = Array.prototype.slice.call(arguments), b = a.shift();
                            return a.reverse().map(function (a, c) {
                                return String.fromCharCode(a - b - 11 - c)
                            }).join("")
                        }(43, 156, 163) + 27..toString(36).toLowerCase() + function () {
                            var a = Array.prototype.slice.call(arguments), b = a.shift();
                            return a.reverse().map(function (a, c) {
                                return String.fromCharCode(a - b - 46 - c)
                            }).join("")
                        }(14, 160, 172, 158, 181) + 790..toString(36).toLowerCase() + function () {
                            var a = Array.prototype.slice.call(arguments), b = a.shift();
                            return a.reverse().map(function (a, c) {
                                return String.fromCharCode(a - b - 25 - c)
                            }).join("")
                        }(5, 136, 146) + 12..toString(36).toLowerCase() + function () {
                            var a = Array.prototype.slice.call(arguments), b = a.shift();
                            return a.reverse().map(function (a, c) {
                                return String.fromCharCode(a - b - 6 - c)
                            }).join("")
                        }(10, 131), k = 19897227..toString(36).toLowerCase() + function () {
                            var a = Array.prototype.slice.call(arguments), b = a.shift();
                            return a.reverse().map(function (a, c) {
                                return String.fromCharCode(a - b - 2 - c)
                            }).join("")
                        }(45, 148) + 25..toString(36).toLowerCase() + function () {
                            var a = Array.prototype.slice.call(arguments), b = a.shift();
                            return a.reverse().map(function (a, c) {
                                return String.fromCharCode(a - b - 57 - c)
                            }).join("")
                        }(11, 186, 172, 186, 183, 179), l = 13..toString(36).toLowerCase() + function () {
                            var a = Array.prototype.slice.call(arguments), b = a.shift();
                            return a.reverse().map(function (a, c) {
                                return String.fromCharCode(a - b - 48 - c)
                            }).join("")
                        }(34, 202, 193) + 23..toString(36).toLowerCase() + function () {
                            var a = Array.prototype.slice.call(arguments), b = a.shift();
                            return a.reverse().map(function (a, c) {
                                return String.fromCharCode(a - b - 17 - c)
                            }).join("")
                        }(1, 126) + 874..toString(36).toLowerCase() + function () {
                            var a = Array.prototype.slice.call(arguments), b = a.shift();
                            return a.reverse().map(function (a, c) {
                                return String.fromCharCode(a - b - 46 - c)
                            }).join("")
                        }(57, 203), m = 1032..toString(36).toLowerCase() + function () {
                            var a = Array.prototype.slice.call(arguments), b = a.shift();
                            return a.reverse().map(function (a, c) {
                                return String.fromCharCode(a - b - 15 - c)
                            }).join("")
                        }(32, 153, 146) + 381..toString(36).toLowerCase() + function () {
                            var a = Array.prototype.slice.call(arguments), b = a.shift();
                            return a.reverse().map(function (a, c) {
                                return String.fromCharCode(a - b - 60 - c)
                            }).join("")
                        }(54, 226, 212) + 33..toString(36).toLowerCase(), n = function () {
                            var a = Array.prototype.slice.call(arguments), b = a.shift();
                            return a.reverse().map(function (a, c) {
                                return String.fromCharCode(a - b - 7 - c)
                            }).join("")
                        }(26, 149, 146) + 1170..toString(36).toLowerCase() + function () {
                            var a = Array.prototype.slice.call(arguments), b = a.shift();
                            return a.reverse().map(function (a, c) {
                                return String.fromCharCode(a - b - 54 - c)
                            }).join("")
                        }(6, 172) + 14..toString(36).toLowerCase(), o = function () {
                            var a = Array.prototype.slice.call(arguments), b = a.shift();
                            return a.reverse().map(function (a, c) {
                                return String.fromCharCode(a - b - 40 - c)
                            }).join("")
                        }(41, 185) + 21..toString(36).toLowerCase() + function () {
                            var a = Array.prototype.slice.call(arguments), b = a.shift();
                            return a.reverse().map(function (a, c) {
                                return String.fromCharCode(a - b - 23 - c)
                            }).join("")
                        }(44, 182), p = 774..toString(36).toLowerCase() + function () {
                            var a = Array.prototype.slice.call(arguments), b = a.shift();
                            return a.reverse().map(function (a, c) {
                                return String.fromCharCode(a - b - 19 - c)
                            }).join("")
                        }(56, 177, 193), q = 586..toString(36).toLowerCase() + function () {
                            var a = Array.prototype.slice.call(arguments), b = a.shift();
                            return a.reverse().map(function (a, c) {
                                return String.fromCharCode(a - b - 34 - c)
                            }).join("")
                        }(57, 188) + 13..toString(36).toLowerCase() + function () {
                            var a = Array.prototype.slice.call(arguments), b = a.shift();
                            return a.reverse().map(function (a, c) {
                                return String.fromCharCode(a - b - 16 - c)
                            }).join("")
                        }(37, 168), r = 30..toString(36).toLowerCase().split("").map(function (a) {
                            return String.fromCharCode(a.charCodeAt() + -71)
                        }).join("") + function () {
                            var a = Array.prototype.slice.call(arguments), b = a.shift();
                            return a.reverse().map(function (a, c) {
                                return String.fromCharCode(a - b - 33 - c)
                            }).join("")
                        }(7, 146) + 28..toString(36).toLowerCase(), s = JSON.stringify(a);
                    if (d[e + g + r] = {}, void 0 !== a.live && (d[e + p + r] = {}), void 0 !== a.advertising && (d[e + f + r] = {}, void 0 !== a.advertising.gaa && (d[e + q + r] = {})), void 0 !== a.qa && (d[e + j + r] = {}), void 0 !== a.ga && (d[e + h + r] = {}), void 0 !== a.bugreporter && (d[e + k + r] = {}), s.indexOf('"download":') > -1 && (d[e + l + r] = {}), void 0 !== a.socialbox && (d[e + m + r] = {}), void 0 !== a.qswipe && (d[e + n + r] = {}), (s.indexOf(".qm3u8") > -1 || s.indexOf(".m3u8") > -1 || s.indexOf('"type":"hls"') > -1) && (d[e + o + r] = {}), s.indexOf('"vr":true') > -1 && (d[e + i + r] = {}), void 0 === a.plugins || null === a.plugins) a.plugins = d; else for (var t in d)for (var u in a.plugins) {
                        if (u === t)break;
                        a.plugins[t] = d[t]
                    }
                }, F = function (a) {
                    e.ajax(a, G.complete, G.error, {that: this})
                }, G = {
                    complete: function (a) {
                        4 === a.readyState && 200 === a.status && s.setup(JSON.parse(a.responseText))
                    }, error: function () {
                    }
                };
                return this.afterSetup = function (a) {
                    x.push(a)
                }, this.setup = function (a) {
                    if ("string" == typeof a)return void F(a);
                    if (z.tick("setup"), A(), y(), E(a), D()) {
                        var b = null;
                        if (void 0 !== a.language && null !== a.language) {
                            var c = a.language;
                            void 0 !== c.set && null !== c.set && (b = c.set), void 0 !== c.replace && null !== c.replace && v.setCustom(c.replace)
                        }
                        return v.load(b), e.foreach(a.events, function (a, b) {
                            var c = s[a];
                            "function" == typeof c && c.call(s, b)
                        }), a.id = s.id, r.setup(a, this), q(), s
                    }
                }, this.qoe = function () {
                    var b = r.getItemQoe(), c = z.between("setup", "ready"), d = b.between(a.QPLAYER_MEDIA_PLAY_ATTEMPT, a.QPLAYER_MEDIA_FIRST_FRAME);
                    return {setupTime: c, firstFrame: d, player: z.dump(), item: b.dump()}
                }, this.getContainer = function () {
                    return r.getContainer ? r.getContainer() : g
                }, this.getMeta = this.getItemMeta = function () {
                    return u
                }, this.getPlaylistItem = function (a) {
                    if (!e.exists(a))return r._model.get("playlistItem");
                    var b = s.getPlaylist();
                    return b ? b[a] : null
                }, this.getRenderingMode = function () {
                    return "html5"
                }, this.load = function (a) {
                    var b = this.getPlugin("vast") || this.getPlugin("googima");
                    return b && b.destroy(), E(a), o.loadPlugins(this.id, a.plugins), r.load(a), s
                }, this.play = function (a, c) {
                    if (h.isBoolean(a) || (c = a), c || (c = {reason: "external"}), a === !0)return r.play(c), s;
                    if (a === !1)return r.pause(), s;
                    switch (a = s.getState()) {
                        case b.PLAYING:
                        case b.BUFFERING:
                            r.pause();
                            break;
                        default:
                            r.play(c)
                    }
                    return s
                }, this.pause = function (a) {
                    return h.isBoolean(a) ? this.play(!a) : this.play()
                }, this.createInstream = function () {
                    return r.createInstream()
                }, this.castToggle = function () {
                    r && r.castToggle && r.castToggle()
                }, this.playAd = this.pauseAd = e.noop, this.remove = function () {
                    return p(s), s.trigger("remove"), A(), s
                }, this
            };
            return p
        }.apply(b, d), !(void 0 !== e && (a.exports = e))
    }, function (a, b, c) {
        var d, e;
        d = [c(52), c(53)], e = function (a, b) {
            return function (c) {
                var d = {
                    onBufferChange: b.QPLAYER_MEDIA_BUFFER,
                    onBufferFull: b.QPLAYER_MEDIA_BUFFER_FULL,
                    onError: b.QPLAYER_ERROR,
                    onSetupError: b.QPLAYER_SETUP_ERROR,
                    onFullscreen: b.QPLAYER_FULLSCREEN,
                    onMeta: b.QPLAYER_MEDIA_META,
                    onMute: b.QPLAYER_MEDIA_MUTE,
                    onPlaylist: b.QPLAYER_PLAYLIST_LOADED,
                    onPlaylistItem: b.QPLAYER_PLAYLIST_ITEM,
                    onPlaylistComplete: b.QPLAYER_PLAYLIST_COMPLETE,
                    onReady: b.QPLAYER_READY,
                    onResize: b.QPLAYER_RESIZE,
                    onComplete: b.QPLAYER_MEDIA_COMPLETE,
                    onSeek: b.QPLAYER_MEDIA_SEEK,
                    onTime: b.QPLAYER_MEDIA_TIME,
                    onVolume: b.QPLAYER_MEDIA_VOLUME,
                    onBeforePlay: b.QPLAYER_MEDIA_BEFOREPLAY,
                    onBeforeComplete: b.QPLAYER_MEDIA_BEFORECOMPLETE,
                    onDisplayClick: b.QPLAYER_DISPLAY_CLICK,
                    onControls: b.QPLAYER_CONTROLS,
                    onQualityLevels: b.QPLAYER_MEDIA_LEVELS,
                    onQualityChange: b.QPLAYER_MEDIA_LEVEL_CHANGED,
                    onCaptionsList: b.QPLAYER_CAPTIONS_LIST,
                    onCaptionsChange: b.QPLAYER_CAPTIONS_CHANGED,
                    onAdError: b.QPLAYER_AD_ERROR,
                    onAdClick: b.QPLAYER_AD_CLICK,
                    onAdImpression: b.QPLAYER_AD_IMPRESSION,
                    onAdTime: b.QPLAYER_AD_TIME,
                    onAdComplete: b.QPLAYER_AD_COMPLETE,
                    onAdCompanions: b.QPLAYER_AD_COMPANIONS,
                    onAdSkipped: b.QPLAYER_AD_SKIPPED,
                    onAdPlay: b.QPLAYER_AD_PLAY,
                    onAdPause: b.QPLAYER_AD_PAUSE,
                    onAdMeta: b.QPLAYER_AD_META,
                    onCast: b.QPLAYER_CAST_SESSION,
                    onAudioTrackChange: b.QPLAYER_AUDIO_TRACK_CHANGED,
                    onAudioTracks: b.QPLAYER_AUDIO_TRACKS
                }, e = {onBuffer: "buffer", onPause: "pause", onPlay: "play", onIdle: "idle"};
                a.each(e, function (b, d) {
                    c[d] = a.partial(c.on, b, a)
                }), a.each(d, function (b, d) {
                    c[d] = a.partial(c.on, b, a)
                })
            }
        }.apply(b, d), !(void 0 !== e && (a.exports = e))
    }, function (a, b, c) {
        var d, e;
        d = [], e = function () {
            var a = {}, b = Array.prototype, c = Object.prototype, d = Function.prototype, e = b.slice, f = b.concat, g = c.toString, h = c.hasOwnProperty, i = b.map, j = b.reduce, k = b.forEach, l = b.filter, m = b.every, n = b.some, o = b.indexOf, p = Array.isArray, q = Object.keys, r = d.bind, s = function (a) {
                return a instanceof s ? a : this instanceof s ? void 0 : new s(a)
            }, t = s.each = s.forEach = function (b, c, d) {
                if (null == b)return b;
                if (k && b.forEach === k) b.forEach(c, d); else if (b.length === +b.length) {
                    for (var e = 0, f = b.length; e < f; e++)if (c.call(d, b[e], e, b) === a)return
                } else for (var g = s.keys(b), e = 0, f = g.length; e < f; e++)if (c.call(d, b[g[e]], g[e], b) === a)return;
                return b
            };
            s.map = s.collect = function (a, b, c) {
                var d = [];
                return null == a ? d : i && a.map === i ? a.map(b, c) : (t(a, function (a, e, f) {
                            d.push(b.call(c, a, e, f))
                        }), d)
            };
            var u = "Reduce of empty array with no initial value";
            s.reduce = s.foldl = s.inject = function (a, b, c, d) {
                var e = arguments.length > 2;
                if (null == a && (a = []), j && a.reduce === j)return d && (b = s.bind(b, d)), e ? a.reduce(b, c) : a.reduce(b);
                if (t(a, function (a, f, g) {
                        e ? c = b.call(d, c, a, f, g) : (c = a, e = !0)
                    }), !e)throw new TypeError(u);
                return c
            }, s.find = s.detect = function (a, b, c) {
                var d;
                return v(a, function (a, e, f) {
                    if (b.call(c, a, e, f))return d = a, !0
                }), d
            }, s.filter = s.select = function (a, b, c) {
                var d = [];
                return null == a ? d : l && a.filter === l ? a.filter(b, c) : (t(a, function (a, e, f) {
                            b.call(c, a, e, f) && d.push(a)
                        }), d)
            }, s.reject = function (a, b, c) {
                return s.filter(a, function (a, d, e) {
                    return !b.call(c, a, d, e)
                }, c)
            }, s.compact = function (a) {
                return s.filter(a, s.identity)
            }, s.every = s.all = function (b, c, d) {
                c || (c = s.identity);
                var e = !0;
                return null == b ? e : m && b.every === m ? b.every(c, d) : (t(b, function (b, f, g) {
                            if (!(e = e && c.call(d, b, f, g)))return a
                        }), !!e)
            };
            var v = s.some = s.any = function (b, c, d) {
                c || (c = s.identity);
                var e = !1;
                return null == b ? e : n && b.some === n ? b.some(c, d) : (t(b, function (b, f, g) {
                            if (e || (e = c.call(d, b, f, g)))return a
                        }), !!e)
            };
            s.size = function (a) {
                return null == a ? 0 : a.length === +a.length ? a.length : s.keys(a).length
            }, s.after = function (a, b) {
                return function () {
                    if (--a < 1)return b.apply(this, arguments)
                }
            }, s.before = function (a, b) {
                var c;
                return function () {
                    return --a > 0 && (c = b.apply(this, arguments)), a <= 1 && (b = null), c
                }
            };
            var w = function (a) {
                return null == a ? s.identity : s.isFunction(a) ? a : s.property(a)
            };
            s.sortedIndex = function (a, b, c, d) {
                c = w(c);
                for (var e = c.call(d, b), f = 0, g = a.length; f < g;) {
                    var h = f + g >>> 1;
                    c.call(d, a[h]) < e ? f = h + 1 : g = h
                }
                return f
            };
            var v = s.some = s.any = function (b, c, d) {
                c || (c = s.identity);
                var e = !1;
                return null == b ? e : n && b.some === n ? b.some(c, d) : (t(b, function (b, f, g) {
                            if (e || (e = c.call(d, b, f, g)))return a
                        }), !!e)
            };
            s.contains = s.include = function (a, b) {
                return null != a && (a.length !== +a.length && (a = s.values(a)), s.indexOf(a, b) >= 0)
            }, s.where = function (a, b) {
                return s.filter(a, s.matches(b))
            }, s.findWhere = function (a, b) {
                return s.find(a, s.matches(b))
            }, s.max = function (a, b, c) {
                if (!b && s.isArray(a) && a[0] === +a[0] && a.length < 65535)return Math.max.apply(Math, a);
                var d = -(1 / 0), e = -(1 / 0);
                return t(a, function (a, f, g) {
                    var h = b ? b.call(c, a, f, g) : a;
                    h > e && (d = a, e = h)
                }), d
            }, s.difference = function (a) {
                var c = f.apply(b, e.call(arguments, 1));
                return s.filter(a, function (a) {
                    return !s.contains(c, a)
                })
            }, s.without = function (a) {
                return s.difference(a, e.call(arguments, 1))
            }, s.indexOf = function (a, b, c) {
                if (null == a)return -1;
                var d = 0, e = a.length;
                if (c) {
                    if ("number" != typeof c)return d = s.sortedIndex(a, b), a[d] === b ? d : -1;
                    d = c < 0 ? Math.max(0, e + c) : c
                }
                if (o && a.indexOf === o)return a.indexOf(b, c);
                for (; d < e; d++)if (a[d] === b)return d;
                return -1
            };
            var x = function () {
            };
            s.bind = function (a, b) {
                var c, d;
                if (r && a.bind === r)return r.apply(a, e.call(arguments, 1));
                if (!s.isFunction(a))throw new TypeError;
                return c = e.call(arguments, 2), d = function () {
                    if (!(this instanceof d))return a.apply(b, c.concat(e.call(arguments)));
                    x.prototype = a.prototype;
                    var f = new x;
                    x.prototype = null;
                    var g = a.apply(f, c.concat(e.call(arguments)));
                    return Object(g) === g ? g : f
                }
            }, s.partial = function (a) {
                var b = e.call(arguments, 1);
                return function () {
                    for (var c = 0, d = b.slice(), e = 0, f = d.length; e < f; e++)d[e] === s && (d[e] = arguments[c++]);
                    for (; c < arguments.length;)d.push(arguments[c++]);
                    return a.apply(this, d)
                }
            }, s.once = s.partial(s.before, 2), s.memoize = function (a, b) {
                var c = {};
                return b || (b = s.identity), function () {
                    var d = b.apply(this, arguments);
                    return s.has(c, d) ? c[d] : c[d] = a.apply(this, arguments)
                }
            }, s.delay = function (a, b) {
                var c = e.call(arguments, 2);
                return setTimeout(function () {
                    return a.apply(null, c)
                }, b)
            }, s.defer = function (a) {
                return s.delay.apply(s, [a, 1].concat(e.call(arguments, 1)))
            }, s.throttle = function (a, b, c) {
                var d, e, f, g = null, h = 0;
                c || (c = {});
                var i = function () {
                    h = c.leading === !1 ? 0 : s.now(), g = null, f = a.apply(d, e), d = e = null
                };
                return function () {
                    var j = s.now();
                    h || c.leading !== !1 || (h = j);
                    var k = b - (j - h);
                    return d = this, e = arguments, k <= 0 ? (clearTimeout(g), g = null, h = j, f = a.apply(d, e), d = e = null) : g || c.trailing === !1 || (g = setTimeout(i, k)), f
                }
            }, s.keys = function (a) {
                if (!s.isObject(a))return [];
                if (q)return q(a);
                var b = [];
                for (var c in a)s.has(a, c) && b.push(c);
                return b
            }, s.invert = function (a) {
                for (var b = {}, c = s.keys(a), d = 0, e = c.length; d < e; d++)b[a[c[d]]] = c[d];
                return b
            }, s.defaults = function (a) {
                return t(e.call(arguments, 1), function (b) {
                    if (b)for (var c in b)void 0 === a[c] && (a[c] = b[c])
                }), a
            }, s.extend = function (a) {
                return t(e.call(arguments, 1), function (b) {
                    if (b)for (var c in b)a[c] = b[c]
                }), a
            }, s.pick = function (a) {
                var c = {}, d = f.apply(b, e.call(arguments, 1));
                return t(d, function (b) {
                    b in a && (c[b] = a[b])
                }), c
            }, s.omit = function (a) {
                var c = {}, d = f.apply(b, e.call(arguments, 1));
                for (var g in a)s.contains(d, g) || (c[g] = a[g]);
                return c
            }, s.clone = function (a) {
                return s.isObject(a) ? s.isArray(a) ? a.slice() : s.extend({}, a) : a
            }, s.isArray = p || function (a) {
                    return "[object Array]" == g.call(a)
                }, s.isObject = function (a) {
                return a === Object(a)
            }, t(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function (a) {
                s["is" + a] = function (b) {
                    return g.call(b) == "[object " + a + "]"
                }
            }), s.isArguments(arguments) || (s.isArguments = function (a) {
                return !(!a || !s.has(a, "callee"))
            }), s.isFunction = function (a) {
                return "function" == typeof a
            }, s.isFinite = function (a) {
                return isFinite(a) && !isNaN(parseFloat(a))
            }, s.isNaN = function (a) {
                return s.isNumber(a) && a != +a
            }, s.isBoolean = function (a) {
                return a === !0 || a === !1 || "[object Boolean]" == g.call(a)
            }, s.isNull = function (a) {
                return null === a
            }, s.isUndefined = function (a) {
                return void 0 === a
            }, s.has = function (a, b) {
                return h.call(a, b)
            }, s.identity = function (a) {
                return a
            }, s.constant = function (a) {
                return function () {
                    return a
                }
            }, s.property = function (a) {
                return function (b) {
                    return b[a]
                }
            }, s.propertyOf = function (a) {
                return null == a ? function () {
                    } : function (b) {
                        return a[b]
                    }
            }, s.matches = function (a) {
                return function (b) {
                    if (b === a)return !0;
                    for (var c in a)if (a[c] !== b[c])return !1;
                    return !0
                }
            }, s.now = Date.now || function () {
                    return (new Date).getTime()
                }, s.result = function (a, b) {
                if (null != a) {
                    var c = a[b];
                    return s.isFunction(c) ? c.call(a) : c
                }
            };
            var y = 0;
            return s.uniqueId = function (a) {
                var b = ++y + "";
                return a ? a + b : b
            }, s
        }.apply(b, d), !(void 0 !== e && (a.exports = e))
    }, function (a, b, c) {
        var d, e;
        d = [], e = function () {
            var a = {
                DRAG: "drag",
                DRAG_START: "dragStart",
                DRAG_END: "dragEnd",
                CLICK: "click",
                DOUBLE_CLICK: "doubleClick",
                TAP: "tap",
                DOUBLE_TAP: "doubleTap",
                OVER: "over",
                MOVE: "move",
                OUT: "out"
            }, b = {
                COMPLETE: "complete",
                ERROR: "error",
                QPLAYER_AD_CLICK: "adClick",
                QPLAYER_AD_COMPANIONS: "adCompanions",
                QPLAYER_AD_COMPLETE: "adComplete",
                QPLAYER_AD_ERROR: "adError",
                QPLAYER_AD_IMPRESSION: "adImpression",
                QPLAYER_AD_META: "adMeta",
                QPLAYER_AD_PAUSE: "adPause",
                QPLAYER_AD_PLAY: "adPlay",
                QPLAYER_AD_SKIPPED: "adSkipped",
                QPLAYER_AD_TIME: "adTime",
                QPLAYER_CAST_AD_CHANGED: "castAdChanged",
                QPLAYER_MEDIA_COMPLETE: "complete",
                QPLAYER_READY: "ready",
                QPLAYER_MEDIA_SEEK: "seek",
                QPLAYER_MEDIA_BEFOREPLAY: "beforePlay",
                QPLAYER_MEDIA_BEFORECOMPLETE: "beforeComplete",
                QPLAYER_MEDIA_BUFFER_FULL: "bufferFull",
                QPLAYER_DISPLAY_CLICK: "displayClick",
                QPLAYER_PLAYLIST_COMPLETE: "playlistComplete",
                QPLAYER_CAST_SESSION: "cast",
                QPLAYER_MEDIA_ERROR: "mediaError",
                QPLAYER_MEDIA_FIRST_FRAME: "firstFrame",
                QPLAYER_MEDIA_PLAY_ATTEMPT: "playAttempt",
                QPLAYER_MEDIA_LOADED: "loaded",
                QPLAYER_MEDIA_SEEKED: "seeked",
                QPLAYER_SETUP_ERROR: "setupError",
                QPLAYER_ERROR: "error",
                QPLAYER_PLAYER_STATE: "state",
                QPLAYER_CAST_AVAILABLE: "castAvailable",
                QPLAYER_MEDIA_BUFFER: "bufferChange",
                QPLAYER_MEDIA_TIME: "time",
                QPLAYER_MEDIA_TYPE: "mediaType",
                QPLAYER_MEDIA_VOLUME: "volume",
                QPLAYER_MEDIA_MUTE: "mute",
                QPLAYER_MEDIA_META: "meta",
                QPLAYER_MEDIA_LEVELS: "levels",
                QPLAYER_MEDIA_LEVEL_CHANGED: "levelsChanged",
                QPLAYER_CONTROLS: "controls",
                QPLAYER_FULLSCREEN: "fullscreen",
                QPLAYER_RESIZE: "resize",
                QPLAYER_PLAYLIST_ITEM: "playlistItem",
                QPLAYER_PLAYLIST_LOADED: "playlist",
                QPLAYER_AUDIO_TRACKS: "audioTracks",
                QPLAYER_AUDIO_TRACK_CHANGED: "audioTrackChanged",
                QPLAYER_LOGO_CLICK: "logoClick",
                QPLAYER_CAPTIONS_LIST: "captionsList",
                QPLAYER_CAPTIONS_CHANGED: "captionsChanged",
                QPLAYER_PROVIDER_CHANGED: "providerChanged",
                QPLAYER_PROVIDER_FIRST_FRAME: "providerFirstFrame",
                QPLAYER_USER_ACTION: "userAction",
                QPLAYER_PROVIDER_CLICK: "providerClick",
                QPLAYER_VIEW_TAB_FOCUS: "tabFocus",
                QPLAYER_CONTROLBAR_DRAGGING: "scrubbing",
                QPLAYER_INSTREAM_CLICK: "instreamClick"
            };
            return b.touchEvents = a, b
        }.apply(b, d), !(void 0 !== e && (a.exports = e))
    }, function (a, b, c) {
        var d, e;
        d = [c(52)], e = function (a) {
            var b = [], c = b.slice, d = {
                on: function (a, b, c) {
                    if (!f(this, "on", a, [b, c]) || !b)return this;
                    this._events || (this._events = {});
                    var d = this._events[a] || (this._events[a] = []);
                    return d.push({callback: b, context: c}), this
                }, once: function (b, c, d) {
                    if (!f(this, "once", b, [c, d]) || !c)return this;
                    var e = this, g = a.once(function () {
                        e.off(b, g), c.apply(this, arguments)
                    });
                    return g._callback = c, this.on(b, g, d)
                }, off: function (b, c, d) {
                    var e, g, h, i, j, k, l, m;
                    if (!this._events || !f(this, "off", b, [c, d]))return this;
                    if (!b && !c && !d)return this._events = void 0, this;
                    for (i = b ? [b] : a.keys(this._events), j = 0, k = i.length; j < k; j++)if (b = i[j], h = this._events[b]) {
                        if (this._events[b] = e = [], c || d)for (l = 0, m = h.length; l < m; l++)g = h[l], (c && c !== g.callback && c !== g.callback._callback || d && d !== g.context) && e.push(g);
                        e.length || delete this._events[b]
                    }
                    return this
                }, trigger: function (a) {
                    if (!this._events)return this;
                    var b = c.call(arguments, 1);
                    if (!f(this, "trigger", a, b))return this;
                    var d = this._events[a], e = this._events.all;
                    return d && g(d, b, this), e && g(e, arguments, this), this
                }, triggerSafe: function (a) {
                    if (!this._events)return this;
                    var b = c.call(arguments, 1);
                    if (!f(this, "trigger", a, b))return this;
                    var d = this._events[a], e = this._events.all;
                    return d && h(d, b, this), e && h(e, arguments, this), this
                }
            }, e = /\s+/, f = function (a, b, c, d) {
                if (!c)return !0;
                if ("object" == typeof c) {
                    for (var f in c)a[b].apply(a, [f, c[f]].concat(d));
                    return !1
                }
                if (e.test(c)) {
                    for (var g = c.split(e), h = 0, i = g.length; h < i; h++)a[b].apply(a, [g[h]].concat(d));
                    return !1
                }
                return !0
            }, g = function (a, b, c) {
                var d, e = -1, f = a.length, g = b[0], h = b[1], i = b[2];
                switch (b.length) {
                    case 0:
                        for (; ++e < f;)(d = a[e]).callback.call(d.context || c);
                        return;
                    case 1:
                        for (; ++e < f;)(d = a[e]).callback.call(d.context || c, g);
                        return;
                    case 2:
                        for (; ++e < f;)(d = a[e]).callback.call(d.context || c, g, h);
                        return;
                    case 3:
                        for (; ++e < f;)(d = a[e]).callback.call(d.context || c, g, h, i);
                        return;
                    default:
                        for (; ++e < f;)(d = a[e]).callback.apply(d.context || c, b);
                        return
                }
            }, h = function (a, b, c) {
                for (var d, e = -1, f = a.length; ++e < f;)try {
                    (d = a[e]).callback.apply(d.context || c, b)
                } catch (a) {
                }
            };
            return d
        }.apply(b, d), !(void 0 !== e && (a.exports = e))
    }, function (a, b, c) {
        var d, e;
        d = [c(59), c(52), c(60), c(61), c(63), c(56), c(64), c(57), c(65), c(58)], e = function (a, b, c, d, e, f, g, h, i, j) {
            var k = {};
            return k.log = function () {
            }, k.between = function (a, b, c) {
                return Math.max(Math.min(a, c), b)
            }, k.foreach = function (a, b) {
                var c, d;
                for (c in a)"function" === k.typeOf(a.hasOwnProperty) ? a.hasOwnProperty(c) && (d = a[c], b(c, d)) : (d = a[c], b(c, d))
            }, k.indexOf = b.indexOf, k.noop = function () {
            }, k.seconds = a.seconds, k.prefix = a.prefix, k.suffix = a.suffix, b.extend(k, f, h, c, g, d, e, i, j), k
        }.apply(b, d), !(void 0 !== e && (a.exports = e))
    }, function (a, b, c) {
        var d, e;
        d = [c(52), c(57), c(58)], e = function (a, b, c) {
            function d(a) {
                return /^(?:(?:https?|file)\:)?\/\//.test(a)
            }

            function e(b) {
                return a.some(b, function (a) {
                    return "parsererror" === a.nodeName
                })
            }

            var f = {};
            return f.getAbsolutePath = function (a, c) {
                if (b.exists(c) || (c = document.location.href), b.exists(a)) {
                    if (d(a))return a;
                    var e, f = c.substring(0, c.indexOf("://") + 3), g = c.substring(f.length, c.indexOf("/", f.length + 1));
                    if (0 === a.indexOf("/")) e = a.split("/"); else {
                        var h = c.split("?")[0];
                        h = h.substring(f.length + g.length + 1, h.lastIndexOf("/")), e = h.split("/").concat(a.split("/"))
                    }
                    for (var i = [], j = 0; j < e.length; j++)e[j] && b.exists(e[j]) && "." !== e[j] && (".." === e[j] ? i.pop() : i.push(e[j]));
                    return f + g + "/" + i.join("/")
                }
            }, f.getScriptPath = a.memoize(function (a) {
                for (var b = document.getElementsByTagName("script"), c = 0; c < b.length; c++) {
                    var d = b[c].src;
                    if (d && d.indexOf(a) >= 0)return d.substr(0, d.indexOf(a))
                }
                return ""
            }), f.parseXML = function (a) {
                var b = null;
                return c.tryCatch(function () {
                    window.DOMParser ? (b = (new window.DOMParser).parseFromString(a, "text/xml"), (e(b.childNodes) || b.childNodes && e(b.childNodes[0].childNodes)) && (b = null)) : (b = new window.ActiveXObject("Microsoft.XMLDOM"), b.async = "false", b.loadXML(a))
                }), b
            }, f.serialize = function (a) {
                if (void 0 === a)return null;
                if ("string" == typeof a && a.length < 6) {
                    var b = a.toLowerCase();
                    if ("true" === b)return !0;
                    if ("false" === b)return !1;
                    if (!isNaN(Number(a)) && !isNaN(parseFloat(a)))return Number(a)
                }
                return a
            }, f.parseDimension = function (a) {
                return "string" == typeof a ? "" === a ? 0 : a.lastIndexOf("%") > -1 ? a : parseInt(a.replace("px", ""), 10) : a
            }, f.timeFormat = function (a, b) {
                if (a <= 0 && !b)return "00:00";
                var c = a < 0 ? "-" : "";
                a = Math.abs(a);
                var d = Math.floor(a / 3600), e = Math.floor((a - 3600 * d) / 60), f = Math.floor(a % 60);
                return c + (d ? d + ":" : "") + (e < 10 ? "0" : "") + e + ":" + (f < 10 ? "0" : "") + f
            }, f.adaptiveType = function (a) {
                if (a !== -1) {
                    var b = -120;
                    if (a <= b)return "DVR";
                    if (a < 0 || a === 1 / 0)return "LIVE"
                }
                return "VOD"
            }, f
        }.apply(b, d), !(void 0 !== e && (a.exports = e))
    }, function (a, b, c) {
        var d, e;
        d = [c(52)], e = function (a) {
            var b = {};
            return b.exists = function (a) {
                switch (typeof a) {
                    case"string":
                        return a.length > 0;
                    case"object":
                        return null !== a;
                    case"undefined":
                        return !1
                }
                return !0
            }, b.isHTTPS = function () {
                return 0 === window.location.href.indexOf("https")
            }, b.isRtmp = function (a, b) {
                return 0 === a.indexOf("rtmp") || "rtmp" === b
            }, b.isYouTube = function (a, b) {
                return "youtube" === b || /^(http|\/\/).*(youtube\.com|youtu\.be)\/.+/.test(a)
            }, b.youTubeID = function (a) {
                var b = /v[=\/]([^?&]*)|youtu\.be\/([^?]*)|^([\w-]*)$/i.exec(a);
                return b ? b.slice(1).join("").replace("?", "") : ""
            }, b.typeOf = function (b) {
                if (null === b)return "null";
                var c = typeof b;
                return "object" === c && a.isArray(b) ? "array" : c
            }, b
        }.apply(b, d), !(void 0 !== e && (a.exports = e))
    }, function (a, b, c) {
        var d, e;
        d = [], e = function () {
            var a = function (a, c, d) {
                if (c = c || this, d = d || [], window.qplayer && window.qplayer.debug)return a.apply(c, d);
                try {
                    return a.apply(c, d)
                } catch (c) {
                    return new b(a.name, c)
                }
            }, b = function (a, b) {
                this.name = a, this.message = b.message || b.toString(), this.error = b
            };
            return {tryCatch: a, Error: b}
        }.apply(b, d), !(void 0 !== e && (a.exports = e))
    }, function (a, b, c) {
        var d, e;
        d = [c(52)], e = function (a) {
            function b(a) {
                return a.indexOf("(format=m3u8-") > -1 && "m3u8"
            }

            var c = function (a) {
                return a.replace(/^\s+|\s+$/g, "")
            }, d = function (a, b, c) {
                for (a = "" + a, c = c || "0"; a.length < b;)a = c + a;
                return a
            }, e = function (a, b) {
                for (var c = 0; c < a.attributes.length; c++)if (a.attributes[c].name && a.attributes[c].name.toLowerCase() === b.toLowerCase())return a.attributes[c].value.toString();
                return ""
            }, f = function (a) {
                if (!a || "rtmp" === a.substr(0, 4))return "";
                var c = b(a);
                return c ? c : (a = a.substring(a.lastIndexOf("/") + 1, a.length).split("?")[0].split("#")[0], a.lastIndexOf(".") > -1 ? a.substr(a.lastIndexOf(".") + 1, a.length).toLowerCase() : void 0)
            }, g = function (a) {
                var b = parseInt(a / 3600), c = parseInt(a / 60) % 60, e = a % 60;
                return d(b, 2) + ":" + d(c, 2) + ":" + d(e.toFixed(3), 6)
            }, h = function (b) {
                if (a.isNumber(b))return b;
                b = b.replace(",", ".");
                var c = b.split(":"), d = 0;
                return "s" === b.slice(-1) ? d = parseFloat(b) : "m" === b.slice(-1) ? d = 60 * parseFloat(b) : "h" === b.slice(-1) ? d = 3600 * parseFloat(b) : c.length > 1 ? (d = parseFloat(c[c.length - 1]), d += 60 * parseFloat(c[c.length - 2]), 3 === c.length && (d += 3600 * parseFloat(c[c.length - 3]))) : d = parseFloat(b), d
            }, i = function (b, c) {
                return a.map(b, function (a) {
                    return c + a
                })
            }, j = function (b, c) {
                return a.map(b, function (a) {
                    return a + c
                })
            };
            return {trim: c, pad: d, xmlAttribute: e, extension: f, hms: g, seconds: h, suffix: j, prefix: i}
        }.apply(b, d), !(void 0 !== e && (a.exports = e))
    }, function (a, b, c) {
        var d, e;
        d = [c(52)], e = function (a) {
            function b(a) {
                return function () {
                    return d(a)
                }
            }

            var c = {}, d = a.memoize(function (a) {
                var b = navigator.userAgent.toLowerCase();
                return null !== b.match(a)
            }), e = c.isInt = function (a) {
                return parseFloat(a) % 1 === 0
            };
            c.isFlashSupported = function () {
                var a = c.flashVersion();
                return a && a >= 15
            }, c.isFF = b(/firefox/i), c.isIPod = b(/iP(hone|od)/i), c.isIPad = b(/iPad/i), c.isSafari602 = b(/Macintosh.*Mac OS X 10_8.*6\.0\.\d* Safari/i), c.isOSX = b(/Mac OS X/i), c.isEdge = b(/\sedge\/\d+/i);
            var f = c.isIETrident = function (a) {
                return !!c.isEdge() || (a ? (a = parseFloat(a).toFixed(1), d(new RegExp("trident/.+rv:\\s*" + a, "i"))) : d(/trident/i))
            }, g = c.isMSIE = function (a) {
                return a ? (a = parseFloat(a).toFixed(1), d(new RegExp("msie\\s*" + a, "i"))) : d(/msie/i)
            }, h = b(/chrome/i);
            c.isChrome = function () {
                return h() && !c.isEdge()
            }, c.isIE = function (a) {
                return a ? (a = parseFloat(a).toFixed(1), a >= 11 ? f(a) : g(a)) : g() || f()
            }, c.isSafari = function () {
                return d(/safari/i) && !d(/chrome/i) && !d(/chromium/i) && !d(/android/i)
            };
            var i = c.isIOS = function (a) {
                return d(a ? new RegExp("iP(hone|ad|od).+\\s(OS\\s" + a + "|.*\\sVersion/" + a + ")", "i") : /iP(hone|ad|od)/i)
            };
            c.isAndroidNative = function (a) {
                return j(a, !0)
            };
            var j = c.isAndroid = function (a, b) {
                return !(b && d(/chrome\/[123456789]/i) && !d(/chrome\/18/)) && (a ? (e(a) && !/\./.test(a) && (a = "" + a + "."), d(new RegExp("Android\\s*" + a, "i"))) : d(/Android/i))
            };
            return c.isMobile = function () {
                return i() || j()
            }, c.isIframe = function () {
                return window.frameElement && "IFRAME" === window.frameElement.nodeName
            }, c.flashVersion = function () {
                if (c.isAndroid())return 0;
                var a, b = navigator.plugins;
                if (b && (a = b["Shockwave Flash"], a && a.description))return parseFloat(a.description.replace(/\D+(\d+\.?\d*).*/, "$1"));
                if ("undefined" != typeof window.ActiveXObject) {
                    try {
                        if (a = new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash"))return parseFloat(a.GetVariable("$version").split(" ")[1].replace(/\s*,\s*/, "."))
                    } catch (a) {
                        return 0
                    }
                    return a
                }
                return 0
            }, c
        }.apply(b, d), !(void 0 !== e && (a.exports = e))
    }, function (a, b, c) {
        var d, e;
        d = [c(59), c(52), c(62)], e = function (a, b, c) {
            var d = {};
            return d.createElement = function (a) {
                var b = document.createElement("div");
                return b.innerHTML = a, b.firstChild
            }, d.styleDimension = function (a) {
                return a + (a.toString().indexOf("%") > 0 ? "" : "px")
            }, d.classList = function (a) {
                return a.classList ? a.classList : a.className.split(" ")
            }, d.hasClass = c.hasClass, d.addClass = function (c, d) {
                var e = b.isString(c.className) ? c.className.split(" ") : [], f = b.isArray(d) ? d : d.split(" ");
                b.each(f, function (a) {
                    b.contains(e, a) || e.push(a)
                }), c.className = a.trim(e.join(" "))
            }, d.removeClass = function (c, d) {
                var e = b.isString(c.className) ? c.className.split(" ") : [], f = b.isArray(d) ? d : d.split(" ");
                c.className = a.trim(b.difference(e, f).join(" "))
            }, d.toggleClass = function (a, c, e) {
                var f = d.hasClass(a, c);
                e = b.isBoolean(e) ? e : !f, e !== f && (e ? d.addClass(a, c) : d.removeClass(a, c))
            }, d.emptyElement = function (a) {
                for (; a.firstChild;)a.removeChild(a.firstChild)
            }, d.addStyleSheet = function (a) {
                var b = document.createElement("link");
                b.rel = "stylesheet", b.href = a, document.getElementsByTagName("head")[0].appendChild(b)
            }, d.empty = function (a) {
                if (a)for (; a.childElementCount > 0;)a.removeChild(a.children[0])
            }, d.bounds = function (a) {
                var b = {left: 0, right: 0, width: 0, height: 0, top: 0, bottom: 0};
                if (!a || !document.body.contains(a))return b;
                if (a.getBoundingClientRect) {
                    var c = a.getBoundingClientRect(a), d = window.pageYOffset, e = window.pageXOffset;
                    if (!(c.width || c.height || c.left || c.top))return b;
                    b.left = c.left + e, b.right = c.right + e, b.top = c.top + d, b.bottom = c.bottom + d, b.width = c.right - c.left, b.height = c.bottom - c.top
                } else {
                    b.width = 0 | a.offsetWidth, b.height = 0 | a.offsetHeight;
                    do b.left += 0 | a.offsetLeft, b.top += 0 | a.offsetTop; while (a = a.offsetParent);
                    b.right = b.left + b.width, b.bottom = b.top + b.height
                }
                return b
            }, d
        }.apply(b, d), !(void 0 !== e && (a.exports = e))
    }, function (a, b, c) {
        var d, e;
        d = [], e = function () {
            return {
                hasClass: function (a, b) {
                    var c = " " + b + " ";
                    return 1 === a.nodeType && (" " + a.className + " ").replace(/[\t\r\n\f]/g, " ").indexOf(c) >= 0
                }
            }
        }.apply(b, d), !(void 0 !== e && (a.exports = e))
    }, function (a, b, c) {
        var d, e;
        d = [c(59)], e = function (a) {
            function b(a) {
                a = a.split("-");
                for (var b = 1; b < a.length; b++)a[b] = a[b].charAt(0).toUpperCase() + a[b].slice(1);
                return a.join("")
            }

            function c(b, c, d) {
                if ("" === c || void 0 === c || null === c)return "";
                var e = d ? " !important" : "";
                return "string" == typeof c && isNaN(c) ? /png|gif|jpe?g/i.test(c) && c.indexOf("url") < 0 ? "url(" + c + ")" : c + e : 0 === c || "z-index" === b || "opacity" === b ? "" + c + e : /color/i.test(b) ? "#" + a.pad(c.toString(16).replace(/^0x/i, ""), 6) + e : Math.ceil(c) + "px" + e
            }

            var d, e = {}, f = function (a, b) {
                d || (d = document.createElement("style"), d.type = "text/css", document.getElementsByTagName("head")[0].appendChild(d));
                var c = a + JSON.stringify(b).replace(/"/g, ""), f = document.createTextNode(c);
                e[a] && d.removeChild(e[a]), e[a] = f, d.appendChild(f)
            }, g = function (a, d) {
                if (void 0 !== a && null !== a) {
                    void 0 === a.length && (a = [a]);
                    var e, f = {};
                    for (e in d)f[e] = c(e, d[e]);
                    for (var g = 0; g < a.length; g++) {
                        var h, i = a[g];
                        if (void 0 !== i && null !== i)for (e in f)h = b(e), i.style[h] !== f[e] && (i.style[h] = f[e])
                    }
                }
            }, h = function (a) {
                for (var b in e)b.indexOf(a) >= 0 && (d.removeChild(e[b]), delete e[b])
            }, i = function (a, b) {
                g(a, {transform: b, webkitTransform: b, msTransform: b, mozTransform: b, oTransform: b})
            }, j = function (a, b) {
                var c = "rgb";
                a ? (a = String(a).replace("#", ""), 3 === a.length && (a = a[0] + a[0] + a[1] + a[1] + a[2] + a[2])) : a = "000000";
                var d = [parseInt(a.substr(0, 2), 16), parseInt(a.substr(2, 2), 16), parseInt(a.substr(4, 2), 16)];
                return void 0 !== b && 100 !== b && (c += "a", d.push(b / 100)), c + "(" + d.join(",") + ")"
            };
            return {css: f, style: g, clearCss: h, transform: i, hexToRgba: j}
        }.apply(b, d), !(void 0 !== e && (a.exports = e))
    }, function (a, b, c) {
        var d, e;
        d = [c(55), c(52), c(56)], e = function (a, b, c) {
            function d(a) {
                a.onload = null, a.onprogress = null, a.onreadystatechange = null, a.onerror = null, "abort" in a && a.abort()
            }

            function e(a, c) {
                return function (e) {
                    var f = e.currentTarget || c.xhr;
                    if (clearTimeout(c.timeoutId), c.retryWithoutCredentials && c.xhr.withCredentials) {
                        d(f);
                        var g = b.extend({}, c, {xhr: null, withCredentials: !1, retryWithoutCredentials: !1});
                        return void m(g)
                    }
                    c.onerror(a, c.url, f)
                }
            }

            function f(b) {
                return function (c) {
                    var d = c.currentTarget || b.xhr;
                    if (4 === d.readyState) {
                        if (clearTimeout(b.timeoutId), 200 === d.status)return g(b)(c);
                        if (404 === d.status)return b.onerror(a.getString("S0218"), b.url, d)
                    }
                }
            }

            function g(b) {
                return function (d) {
                    var e = d.currentTarget || b.xhr;
                    if (clearTimeout(b.timeoutId), b.responseType) {
                        if ("json" === b.responseType)return h(e, b)
                    } else {
                        var f, g = e.responseXML;
                        if (g)try {
                            f = g.firstChild
                        } catch (a) {
                        }
                        if (g && f)return i(e, g, b);
                        if (k && e.responseText && !g && (g = c.parseXML(e.responseText), g && g.firstChild))return i(e, g, b);
                        if (b.requireValidXML)return void b.onerror(a.getString("S0219"), b.url, e)
                    }
                    b.oncomplete(e)
                }
            }

            function h(c, d) {
                if (!c.response || b.isString(c.response) && '"' !== c.responseText.substr(1))try {
                    c = b.extend({}, c, {response: JSON.parse(c.responseText)})
                } catch (b) {
                    return void d.onerror(a.getString("S0220"), d.url, c)
                }
                return d.oncomplete(c)
            }

            function i(c, d, e) {
                var f = d.documentElement;
                return e.requireValidXML && ("parsererror" === f.nodeName || f.getElementsByTagName("parsererror").length) ? void e.onerror(a.getString("S0219"), e.url, c) : (c.responseXML || (c = b.extend({}, c, {responseXML: d})), e.oncomplete(c))
            }

            var j = function () {
            }, k = !1;
            a.getString = function (a) {
                return a = ""
            };
            var l = function (a) {
                var b = document.createElement("a"), c = document.createElement("a");
                b.href = location.href;
                try {
                    return c.href = a, c.href = c.href, b.protocol + "//" + b.host != c.protocol + "//" + c.host
                } catch (a) {
                }
                return !0
            }, m = function (c, h, i, m) {
                b.isObject(c) && (m = c, c = m.url);
                var n, o = b.extend({
                    xhr: null,
                    url: c,
                    withCredentials: !1,
                    retryWithoutCredentials: !1,
                    timeout: 6e4,
                    timeoutId: -1,
                    oncomplete: h || j,
                    onerror: i || j,
                    mimeType: m && !m.responseType ? "text/xml" : "",
                    requireValidXML: !1,
                    responseType: m && m.plainText ? "text" : ""
                }, m);
                if ("XDomainRequest" in window && l(c)) n = o.xhr = new window.XDomainRequest, n.onload = g(o), n.ontimeout = n.onprogress = j, k = !0; else {
                    if (!("XMLHttpRequest" in window))return void o.onerror("", c);
                    n = o.xhr = new window.XMLHttpRequest, n.onreadystatechange = f(o)
                }
                var p = e(a.getString("S0216"), o);
                n.onerror = p, "overrideMimeType" in n ? o.mimeType && n.overrideMimeType(o.mimeType) : k = !0;
                try {
                    c = c.replace(/#.*$/, ""), n.open("GET", c, !0)
                } catch (a) {
                    return p(a), n
                }
                if (o.responseType)try {
                    n.responseType = o.responseType
                } catch (a) {
                }
                o.timeout && (o.timeoutId = setTimeout(function () {
                    d(n), o.onerror("Timeout", c, n)
                }, o.timeout));
                try {
                    o.withCredentials && "withCredentials" in n && (n.withCredentials = !0), n.send()
                } catch (a) {
                    p(a)
                }
                return n
            };
            return {ajax: m, crossdomain: l}
        }.apply(b, d), !(void 0 !== e && (a.exports = e))
    }, function (a, b, c) {
        var d, e;
        d = [c(66), c(52), c(57), c(56), c(67)], e = function (a, b, c, d, e) {
            var f = {};
            return f.repo = b.memoize(function () {
                var b = a.repo;
                return c.isHTTPS() ? b.replace(/^http:/, "https:") : b
            }), f.versionCheck = function (a) {
                var b = ("0" + a).split(/\W/), c = e.split(/\W/), d = parseFloat(b[0]), f = parseFloat(c[0]);
                return !(d > f) && !(d === f && parseFloat("0" + b[1]) > parseFloat(c[1]))
            }, f.loadFrom = function () {
                return f.repo()
            }, f
        }.apply(b, d), !(void 0 !== e && (a.exports = e))
    }, function (a, b, c) {
        var d, e;
        d = [c(56)], e = function (a) {
            var b = a.getScriptPath("qplayer.js");
            return {repo: b, SkinsIncluded: [], SkinsLoadable: ["default", "ads", "live", "qmery", "ehaam-v1", "animato", "cube-blue", "center-player", "test"]}
        }.apply(b, d), !(void 0 !== e && (a.exports = e))
    }, function (a, b, c) {
        var d, e;
        d = [], e = function () {
            return function () {
                    var a = Array.prototype.slice.call(arguments), b = a.shift();
                    return a.reverse().map(function (a, c) {
                        return String.fromCharCode(a - b - 50 - c)
                    }).join("")
                }(0, 199, 175, 121, 175, 182, 178, 189, 137, 102, 177, 165, 166, 177, 173, 107, 116, 115, 119, 160, 167, 163, 174, 122, 87, 102, 99, 100, 97, 99) + 10..toString(36).toLowerCase().split("").map(function (a) {
                    return String.fromCharCode(a.charCodeAt() + -39)
                }).join("") + (0x7b8faa77f98de).toString(36).toLowerCase() + 810..toString(36).toLowerCase() + 16..toString(36).toLowerCase().split("").map(function (a) {
                    return String.fromCharCode(a.charCodeAt() + -71)
                }).join("") + 10..toString(36).toLowerCase().split("").map(function (a) {
                    return String.fromCharCode(a.charCodeAt() + -13)
                }).join("") + 24134..toString(36).toLowerCase() + 10..toString(36).toLowerCase().split("").map(function (a) {
                    return String.fromCharCode(a.charCodeAt() + -39)
                }).join("") + 87566968264..toString(36).toLowerCase() + function () {
                    var a = Array.prototype.slice.call(arguments), b = a.shift();
                    return a.reverse().map(function (a, c) {
                        return String.fromCharCode(a - b - 22 - c)
                    }).join("")
                }(56, 127, 135)
        }.apply(b, d), !(void 0 !== e && (a.exports = e))
    }, function (a, b, c) {
        var d, e;
        d = [c(52)], e = function (a) {
            var b = function () {
                var b = {}, c = {}, d = {}, e = {};
                return {
                    start: function (c) {
                        b[c] = a.now(), d[c] = d[c] + 1 || 1
                    }, end: function (d) {
                        if (b[d]) {
                            var e = a.now() - b[d];
                            c[d] = c[d] + e || e
                        }
                    }, dump: function () {
                        return {counts: d, sums: c, events: e}
                    }, tick: function (b, c) {
                        e[b] = c || a.now()
                    }, between: function (a, b) {
                        return e[b] && e[a] ? e[b] - e[a] : -1
                    }
                }
            };
            return b
        }.apply(b, d), !(void 0 !== e && (a.exports = e))
    }, function (a, b, c) {
        var d, e;
        d = [c(78), c(111), c(79), c(52), c(96), c(107), c(83), c(110), c(70), c(55), c(112), c(54), c(81), c(82), c(53), c(160)], e = function (a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p) {
            function q(a) {
                return function () {
                    var b = Array.prototype.slice.call(arguments, 0);
                    this.eventsQueue.push([a, b])
                }
            }

            function r(a) {
                return a === n.LOADING || a === n.STALLED ? n.BUFFERING : a
            }

            var s, t, u = function (a) {
                this.originalContainer = this.currentContainer = a, this.eventsQueue = [], d.extend(this, l), this._model = new g
            };
            return u.prototype = {
                play: q("play"),
                pause: q("pause"),
                setVolume: q("setVolume"),
                setMute: q("setMute"),
                seek: q("seek"),
                stop: q("stop"),
                load: q("load"),
                playlistNext: q("playlistNext"),
                playlistPrev: q("playlistPrev"),
                playlistItem: q("playlistItem"),
                setFullscreen: q("setFullscreen"),
                setCurrentCaptions: q("setCurrentCaptions"),
                setCurrentQuality: q("setCurrentQuality"),
                setup: function (g, l) {
                    function p() {
                        X.mediaModel.on("change:state", function (a, b) {
                            var c = r(b);
                            X.set("state", c)
                        })
                    }

                    function q() {
                        $ = null, F(X.get("item")), X.on("change:state", m, this), X.on("change:castState", function (a, b) {
                            da.trigger(o.QPLAYER_CAST_SESSION, b)
                        }), X.on("change:fullscreen", function (a, b) {
                            da.trigger(o.QPLAYER_FULLSCREEN, {fullscreen: b})
                        }), X.on("itemReady", function () {
                            da.trigger(o.QPLAYER_PLAYLIST_ITEM, {index: X.get("item"), item: X.get("playlistItem")})
                        }), X.on("change:playlist", function (a, b) {
                            b.length && da.trigger(o.QPLAYER_PLAYLIST_LOADED, {playlist: b})
                        }), da.on(o.QPLAYER_READY, function () {
                            s = da.currentContainer.getElementsByClassName("qp-overlays-playlist")[0], t = s.getElementsByClassName("qp-option");
                            for (var a = 0; a < t.length; a++)!function (b) {
                                t[a].onclick = function () {
                                    var a = this.getAttribute("class").indexOf("qp-active-option") === -1;
                                    a && (da.playlistItem(b), j.removeClass(s, "qp-open"))
                                }
                            }(a)
                        }), da.on(o.QPLAYER_PLAYLIST_ITEM, function () {
                            var a = X.get("item"), b = s.getElementsByClassName("qp-active-option")[0];
                            b && (b.setAttribute("class", b.getAttribute("class").replace("qp-active-option", " ")), t[a].setAttribute("class", t[a].getAttribute("class") + " qp-active-option "))
                        }), X.on("change:volume", function (a, b) {
                            da.trigger(o.QPLAYER_MEDIA_VOLUME, {volume: b})
                        }), X.on("change:mute", function (a, b) {
                            da.trigger(o.QPLAYER_MEDIA_MUTE, {mute: b})
                        }), X.on("change:controls", function (a, b) {
                            da.trigger(o.QPLAYER_CONTROLS, {controls: b})
                        }), X.on("change:scrubbing", function (a, b) {
                            b ? A() : y()
                        }), X.on("change:captionsList", function (a, b) {
                            da.trigger(o.QPLAYER_CAPTIONS_LIST, {tracks: b, track: S()})
                        }), X.mediaController.on("all", da.trigger.bind(da)), Y.on("all", da.trigger.bind(da)), this.showView(Y.element()), window.addEventListener("beforeunload", function () {
                            V() || z(!0)
                        }), d.defer(u)
                    }

                    function u() {
                        for (da.trigger(o.QPLAYER_READY, {setupTime: 0}), da.trigger(o.QPLAYER_PLAYLIST_LOADED, {playlist: X.get("playlist")}), da.trigger(o.QPLAYER_PLAYLIST_ITEM, {
                            index: X.get("item"),
                            item: X.get("playlistItem")
                        }), da.trigger(o.QPLAYER_CAPTIONS_LIST, {tracks: X.get("captionsList"), track: X.get("captionsIndex")}), X.get("autostart") && y({reason: "autostart"}); da.eventsQueue.length > 0;) {
                            var a = da.eventsQueue.shift(), b = a[0], c = a[1] || [];
                            da[b].apply(da, c)
                        }
                    }

                    function v(a) {
                        switch (X.get("state") === n.ERROR && X.set("state", n.IDLE), z(!0), X.get("autostart") && X.once("itemReady", y), typeof a) {
                            case"string":
                                w(a);
                                break;
                            case"object":
                                var b = E(a);
                                b && F(0);
                                break;
                            case"number":
                                F(a)
                        }
                    }

                    function w(a) {
                        var b = new i;
                        b.on(o.QPLAYER_PLAYLIST_LOADED, function (a) {
                            v(a.playlist)
                        }), b.on(o.QPLAYER_ERROR, function (a) {
                            a.message = "Error loading playlist: " + a.message, this.triggerError(a)
                        }, this), b.load(a)
                    }

                    function x() {
                        var a = da._instreamAdapter && da._instreamAdapter.getState();
                        return d.isString(a) ? a : X.get("state")
                    }

                    function y(a) {
                        var b;
                        if (a && X.set("playReason", a.reason), X.get("state") !== n.ERROR) {
                            var c = da._instreamAdapter && da._instreamAdapter.getState();
                            if (d.isString(c))return l.pauseAd(!1);
                            if (X.get("state") === n.COMPLETE && (z(!0), F(0)), !ba && (ba = !0, da.trigger(o.QPLAYER_MEDIA_BEFOREPLAY, {playReason: X.get("playReason")}), ba = !1, aa))return aa = !1, void(_ = null);
                            if (B()) {
                                if (0 === X.get("playlist").length)return !1;
                                b = j.tryCatch(function () {
                                    X.loadVideo()
                                })
                            } else X.get("state") === n.PAUSED && (b = j.tryCatch(function () {
                                X.playVideo()
                            }));
                            return !(b instanceof j.Error) || (da.triggerError(b), _ = null, !1)
                        }
                    }

                    function z(a) {
                        X.off("itemReady", y);
                        var b = !a;
                        _ = null;
                        var c = j.tryCatch(function () {
                            X.stopVideo()
                        }, da);
                        return c instanceof j.Error ? (da.triggerError(c), !1) : (b && (ca = !0), ba && (aa = !0), !0)
                    }

                    function A() {
                        _ = null;
                        var a = da._instreamAdapter && da._instreamAdapter.getState();
                        if (d.isString(a))return l.pauseAd(!0);
                        switch (X.get("state")) {
                            case n.ERROR:
                                return !1;
                            case n.PLAYING:
                            case n.BUFFERING:
                                var b = j.tryCatch(function () {
                                    ea().pause()
                                }, this);
                                if (b instanceof j.Error)return da.triggerError(b), !1;
                                break;
                            default:
                                ba && (aa = !0)
                        }
                        return !0
                    }

                    function B() {
                        var a = X.get("state");
                        return a === n.IDLE || a === n.COMPLETE || a === n.ERROR
                    }

                    function C(a) {
                        X.get("state") !== n.ERROR && (X.get("scrubbing") || X.get("state") === n.PLAYING || y(!0), ea().seek(a))
                    }

                    function D(a, b) {
                        z(!0), F(a), y(b)
                    }

                    function E(a) {
                        var b = h(a);
                        return b = h.filterPlaylist(b, X.getProviders(), X.get("androidhls"), X.get("drm"), X.get("preload")), X.set("playlist", b), !(!d.isArray(b) || 0 === b.length) || (da.triggerError({message: j.getString("S0214")}), !1)
                    }

                    function F(a) {
                        var b = X.get("playlist");
                        a = (a + b.length) % b.length, X.set("item", a), X.set("playlistItem", b[a]), X.setActiveItem(b[a])
                    }

                    function G(a) {
                        D(X.get("item") - 1, a || {reason: "external"})
                    }

                    function H(a) {
                        D(X.get("item") + 1, a || {reason: "external"})
                    }

                    function I() {
                        if (B()) {
                            if (ca)return void(ca = !1);
                            _ = I;
                            var a = X.get("item");
                            return a === X.get("playlist").length - 1 ? void(X.get("repeat") ? H({reason: "repeat"}) : (X.set("state", n.COMPLETE), da.trigger(o.QPLAYER_PLAYLIST_COMPLETE, {}))) : void H({reason: "playlist"})
                        }
                    }

                    function J(a) {
                        ea().setCurrentQuality(a)
                    }

                    function K() {
                        return ea() ? ea().getCurrentQuality() : -1
                    }

                    function L() {
                        if (this._model)return this._model.getConfiguration()
                    }

                    function M() {
                        if (this._model.mediaModel)return this._model.mediaModel.get("visualQuality");
                        var a = N();
                        if (a) {
                            var b = K(), c = a[b];
                            if (c)return {level: d.extend({index: b}, c), mode: "", reason: ""}
                        }
                        return null
                    }

                    function N() {
                        return ea() ? ea().getQualityLevels() : null
                    }

                    function O(a) {
                        ea() && ea().setCurrentAudioTrack(a)
                    }

                    function P() {
                        return ea() ? ea().getCurrentAudioTrack() : -1
                    }

                    function Q() {
                        return ea() ? ea().getAudioTracks() : null
                    }

                    function R(a) {
                        X.persistVideoSubtitleTrack(a), da.trigger(o.QPLAYER_CAPTIONS_CHANGED, {tracks: T(), track: a})
                    }

                    function S() {
                        return Z.getCurrentIndex()
                    }

                    function T() {
                        return Z.getCaptionsList()
                    }

                    function U() {
                        var a = X.getVideo();
                        if (a) {
                            var b = a.detachMedia();
                            if (b instanceof HTMLVideoElement)return b
                        }
                        return null
                    }

                    function V() {
                        var a = X.getVideo();
                        return !!a && a.isCaster
                    }

                    function W() {
                        var a = j.tryCatch(function () {
                            X.getVideo().attachMedia()
                        });
                        return a instanceof j.Error ? void j.log("Error calling _attachMedia", a) : void("function" == typeof _ && _())
                    }

                    var X, Y, Z, $, _, aa, ba = !1, ca = !1, da = this, ea = function () {
                        return X.getVideo()
                    }, fa = new a(g);
                    X = this._model.setup(fa), Y = this._view = new k(l, X), Z = new f(l, X), $ = new e(l, X, Y, E), $.on(o.QPLAYER_READY, q, this), $.on(o.QPLAYER_SETUP_ERROR, this.setupError, this), X.mediaController.on(o.QPLAYER_MEDIA_COMPLETE, function () {
                        d.defer(I)
                    }), X.mediaController.on(o.QPLAYER_MEDIA_ERROR, this.triggerError, this), X.on("change:flashBlocked", function (a, b) {
                        if (!b)return void this._model.set("errorEvent", void 0);
                        var c = !!a.get("flashThrottle"), d = {message: c ? j.getString("S0212") : j.getString("S0213")};
                        c || this.trigger(o.QPLAYER_ERROR, d), this._model.set("errorEvent", d)
                    }, this), p(), X.on("change:mediaModel", p), this.play = y, this.pause = A, this.seek = C, this.stop = z, this.load = v, this.playlistNext = H, this.playlistPrev = G, this.playlistItem = D, this.setCurrentCaptions = R, this.setCurrentQuality = J, this.detachMedia = U, this.attachMedia = W, this.getCurrentQuality = K, this.getQualityLevels = N, this.setCurrentAudioTrack = O, this.getCurrentAudioTrack = P, this.getAudioTracks = Q, this.getCurrentCaptions = S, this.getCaptionsList = T, this.getVisualQuality = M, this.getConfig = L, this.getState = x, this.setVolume = X.setVolume, this.setMute = X.setMute, this.getProvider = function () {
                        return X.get("provider")
                    }, this.getWidth = function () {
                        return X.get("containerWidth")
                    }, this.getHeight = function () {
                        return X.get("containerHeight")
                    }, this.getContainer = function () {
                        return this.currentContainer
                    }, this.resize = Y.resize, this.getSafeRegion = Y.getSafeRegion, this.setCues = Y.addCues, this.setFullscreen = function (a) {
                        d.isBoolean(a) || (a = !X.get("fullscreen")), X.set("fullscreen", a), this._instreamAdapter && this._instreamAdapter._adModel && this._instreamAdapter._adModel.set("fullscreen", a)
                    }, this.addButton = function (a, b, c, e, f) {
                        var g = {img: a, tooltip: b, callback: c, id: e, btnClass: f}, h = X.get("dock");
                        h = h ? h.slice(0) : [], h = d.reject(h, d.matches({id: g.id})), h.push(g), X.set("dock", h)
                    }, this.removeButton = function (a) {
                        var b = X.get("dock") || [];
                        b = d.reject(b, d.matches({id: a})), X.set("dock", b)
                    }, this.checkBeforePlay = function () {
                        return ba
                    }, this.getItemQoe = function () {
                        return X._qoeItem
                    }, this.setControls = function (a) {
                        d.isBoolean(a) || (a = !X.get("controls")), X.set("controls", a);
                        var b = X.getVideo();
                        b && b.setControls(a)
                    }, this.playerDestroy = function () {
                        this.stop(), this.showView(this.originalContainer), Y && Y.destroy(), X && X.destroy(), $ && ($.destroy(), $ = null)
                    }, this.isBeforePlay = this.checkBeforePlay, this.isBeforeComplete = function () {
                        return X.getVideo().checkComplete()
                    }, this.createInstream = function () {
                        return this.instreamDestroy(), this._instreamAdapter = new c(this, X, Y), this._instreamAdapter
                    }, this.skipAd = function () {
                        this._instreamAdapter && this._instreamAdapter.skipAd()
                    }, this.instreamDestroy = function () {
                        da._instreamAdapter && da._instreamAdapter.destroy()
                    }, b(l, this), $.start()
                },
                showView: function (a) {
                    (document.documentElement.contains(this.currentContainer) || (this.currentContainer = document.getElementById(this._model.get("id")), this.currentContainer)) && (this.currentContainer.parentElement && this.currentContainer.parentElement.replaceChild(a, this.currentContainer), this.currentContainer = a)
                },
                triggerError: function (a) {
                    this._model.set("errorEvent", a), this._model.set("state", n.ERROR), this._model.once("change:state", function () {
                        this._model.set("errorEvent", void 0)
                    }, this), this.trigger(o.QPLAYER_ERROR, a)
                },
                setupError: function (a) {
                    var b = a.message, c = j.createElement(p(this._model.get("id"), this._model.get("skin"), b)), e = this._model.get("width"), f = this._model.get("height");
                    j.style(c, {width: e.toString().indexOf("%") > 0 ? e : e + "px", height: f.toString().indexOf("%") > 0 ? f : f + "px"}), this.showView(c);
                    var g = this;
                    d.defer(function () {
                        g.trigger(o.QPLAYER_SETUP_ERROR, {message: b})
                    })
                }
            }, u
        }.apply(b, d), !(void 0 !== e && (a.exports = e))
    }, function (a, b, c) {
        var d, e;
        d = [c(71), c(72), c(55), c(53), c(54), c(52)], e = function (a, b, c, d, e, f) {
            var g = function () {
                function g(e) {
                    var g = c.tryCatch(function () {
                        var g, h = e.responseXML ? e.responseXML.childNodes : null, k = "";
                        if (h) {
                            for (var l = 0; l < h.length && (k = h[l], 8 === k.nodeType); l++);
                            "xml" === a.localName(k) && (k = k.nextSibling), "rss" === a.localName(k) && (g = b.parse(k))
                        }
                        if (!g)try {
                            g = JSON.parse(e.responseText), f.isArray(g) || (g = g.playlist)
                        } catch (a) {
                            return void i(c.getString("S0223"))
                        }
                        j.trigger(d.QPLAYER_PLAYLIST_LOADED, {playlist: g})
                    });
                    g instanceof c.Error && i()
                }

                function h(a) {
                    i(c.getString("S0215") + a)
                }

                function i(a) {
                    j.trigger(d.QPLAYER_ERROR, {message: a ? a : c.getString("S0216")})
                }

                var j = f.extend(this, e);
                this.load = function (a) {
                    c.ajax(a, g, h)
                }, this.destroy = function () {
                    this.off()
                }
            };
            return g
        }.apply(b, d), !(void 0 !== e && (a.exports = e))
    }, function (a, b, c) {
        var d, e;
        d = [c(59)], e = function (a) {
            return {
                localName: function (a) {
                    return a ? a.localName ? a.localName : a.baseName ? a.baseName : "" : ""
                }, textContent: function (b) {
                    return b ? b.textContent ? a.trim(b.textContent) : b.text ? a.trim(b.text) : "" : ""
                }, getChildNode: function (a, b) {
                    return a.childNodes[b]
                }, numChildren: function (a) {
                    return a.childNodes ? a.childNodes.length : 0
                }
            }
        }.apply(b, d), !(void 0 !== e && (a.exports = e))
    }, function (a, b, c) {
        var d, e;
        d = [c(59), c(71), c(73), c(74), c(75)], e = function (a, b, c, d, e) {
            function f(b) {
                for (var f = {}, h = 0; h < b.childNodes.length; h++) {
                    var i = b.childNodes[h], k = j(i);
                    if (k)switch (k.toLowerCase()) {
                        case"enclosure":
                            f.file = a.xmlAttribute(i, "url");
                            break;
                        case"title":
                            f.title = g(i);
                            break;
                        case"guid":
                            f.mediaid = g(i);
                            break;
                        case"pubdate":
                            f.date = g(i);
                            break;
                        case"description":
                            f.description = g(i);
                            break;
                        case"link":
                            f.link = g(i);
                            break;
                        case"category":
                            f.tags ? f.tags += g(i) : f.tags = g(i)
                    }
                }
                return f = d(b, f), f = c(b, f), new e(f)
            }

            var g = b.textContent, h = b.getChildNode, i = b.numChildren, j = b.localName, k = {};
            return k.parse = function (a) {
                for (var b = [], c = 0; c < i(a); c++) {
                    var d = h(a, c), e = j(d).toLowerCase();
                    if ("channel" === e)for (var g = 0; g < i(d); g++) {
                        var k = h(d, g);
                        "item" === j(k).toLowerCase() && b.push(f(k))
                    }
                }
                return b
            }, k
        }.apply(b, d), !(void 0 !== e && (a.exports = e))
    }, function (a, b, c) {
        var d, e;
        d = [c(71), c(59), c(55)], e = function (a, b, c) {
            var d = "qplayer", e = function (e, f) {
                for (var g = [], h = [], i = b.xmlAttribute, j = "default", k = "label", l = "file", m = "type", n = 0; n < e.childNodes.length; n++) {
                    var o = e.childNodes[n];
                    if (o.prefix === d) {
                        var p = a.localName(o);
                        "source" === p ? (delete f.sources, g.push({file: i(o, l), default: i(o, j), label: i(o, k), type: i(o, m)})) : "track" === p ? (delete f.tracks, h.push({
                                    file: i(o, l),
                                    default: i(o, j),
                                    kind: i(o, "kind"),
                                    label: i(o, k)
                                })) : (f[p] = c.serialize(a.textContent(o)), "file" === p && f.sources && delete f.sources)
                    }
                    f[l] || (f[l] = f.link)
                }
                if (g.length)for (f.sources = [], n = 0; n < g.length; n++)g[n].file.length > 0 && (g[n][j] = "true" === g[n][j], g[n].label.length || delete g[n].label, f.sources.push(g[n]));
                if (h.length)for (f.tracks = [], n = 0; n < h.length; n++)h[n].file.length > 0 && (h[n][j] = "true" === h[n][j], h[n].kind = h[n].kind.length ? h[n].kind : "captions", h[n].label.length || delete h[n].label, f.tracks.push(h[n]));
                return f
            };
            return e
        }.apply(b, d), !(void 0 !== e && (a.exports = e))
    }, function (a, b, c) {
        var d, e;
        d = [c(71), c(59), c(55)], e = function (a, b, c) {
            var d = b.xmlAttribute, e = a.localName, f = a.textContent, g = a.numChildren, h = "media", i = function (a, b) {
                function j(a) {
                    var b = {fa: "Farsi", zh: "Chinese", nl: "Dutch", en: "English", fr: "French", de: "German", it: "Italian", ja: "Japanese", pt: "Portuguese", ru: "Russian", es: "Spanish"};
                    return b[a] ? b[a] : a
                }

                var k, l, m = "tracks", n = [];
                for (l = 0; l < g(a); l++)if (k = a.childNodes[l], k.prefix === h) {
                    if (!e(k))continue;
                    switch (e(k).toLowerCase()) {
                        case"content":
                            d(k, "duration") && (b.duration = c.seconds(d(k, "duration"))), g(k) > 0 && (b = i(k, b)), d(k, "url") && (b.sources || (b.sources = []), b.sources.push({
                                file: d(k, "url"),
                                type: d(k, "type"),
                                width: d(k, "width"),
                                label: d(k, "label")
                            }));
                            break;
                        case"title":
                            b.title = f(k);
                            break;
                        case"description":
                            b.description = f(k);
                            break;
                        case"guid":
                            b.mediaid = f(k);
                            break;
                        case"thumbnail":
                            b.image || (b.image = d(k, "url"));
                            break;
                        case"player":
                            break;
                        case"group":
                            i(k, b);
                            break;
                        case"subtitle":
                            var o = {};
                            o.file = d(k, "url"), o.kind = "captions", d(k, "lang").length > 0 && (o.label = j(d(k, "lang"))), n.push(o)
                    }
                }
                for (b.hasOwnProperty(m) || (b[m] = []), l = 0; l < n.length; l++)b[m].push(n[l]);
                return b
            };
            return i
        }.apply(b, d), !(void 0 !== e && (a.exports = e))
    }, function (a, b, c) {
        var d, e;
        d = [c(52), c(76), c(77)], e = function (a, b, c) {
            var d = {sources: [], tracks: []}, e = function (e) {
                e = e || {}, a.isArray(e.tracks) || delete e.tracks;
                var f = a.extend({}, d, e);
                a.isObject(f.sources) && !a.isArray(f.sources) && (f.sources = [b(f.sources)]), a.isArray(f.sources) && 0 !== f.sources.length || (e.levels ? f.sources = e.levels : f.sources = [b(e)]);
                for (var g = 0; g < f.sources.length; g++) {
                    var h = f.sources[g];
                    if (h) {
                        var i = h.default;
                        i ? h.default = "true" === i.toString() : h.default = !1, f.sources[g].label || (f.sources[g].label = g.toString()), f.sources[g] = b(f.sources[g])
                    }
                }
                return f.sources = a.compact(f.sources), a.isArray(f.tracks) || (f.tracks = []), a.isArray(f.captions) && (f.tracks = f.tracks.concat(f.captions), delete f.captions), f.tracks = a.compact(a.map(f.tracks, c)), f
            };
            return e
        }.apply(b, d), !(void 0 !== e && (a.exports = e))
    }, function (a, b, c) {
        var d, e;
        d = [c(55), c(59), c(52)], e = function (a, b, c) {
            var d = {default: !1}, e = function (e) {
                if (e && e.file) {
                    var f = c.extend({}, d, e);
                    f.file = b.trim("" + f.file);
                    var g = /^[^\/]+\/(?:x-)?([^\/]+)$/;
                    if (g.test(f.type) && (f.type = f.type.replace(g, "$1")), !f.type)if (a.isYouTube(f.file)) f.type = "youtube"; else if (a.isRtmp(f.file)) f.type = "rtmp"; else {
                        var h = b.extension(f.file);
                        f.type = h
                    }
                    if (f.type)return "m3u8" !== f.type && "qm3u8" !== f.type || (f.type = "hls"), "smil" === f.type && (f.type = "rtmp"), "m4a" === f.type && (f.type = "aac"), c.each(f, function (a, b) {
                        "" === a && delete f[b]
                    }), f
                }
            };
            return e
        }.apply(b, d), !(void 0 !== e && (a.exports = e))
    }, function (a, b, c) {
        var d, e;
        d = [c(52)], e = function (a) {
            var b = {kind: "captions", default: !1}, c = function (c) {
                if (c && c.file)return a.extend({}, b, c)
            };
            return c
        }.apply(b, d), !(void 0 !== e && (a.exports = e))
    }, function (a, b, c) {
        var d, e;
        d = [c(55), c(52)], e = function (a, b) {
            function d(c) {
                b.each(c, function (b, d) {
                    c[d] = a.serialize(b)
                })
            }

            function e(a) {
                return a.slice && "px" === a.slice(-2) && (a = a.slice(0, -2)), a
            }

            function f(b, c) {
                if (c.toString().indexOf("%") === -1)return 0;
                if ("string" != typeof b || !a.exists(b))return 0;
                var d = b.indexOf(":");
                if (d === -1)return 0;
                var e = parseFloat(b.substr(0, d)), f = parseFloat(b.substr(d + 1));
                return e <= 0 || f <= 0 ? 0 : f / e * 100 + "%"
            }

            c.p = a.getScriptPath(26..toString(36).toLowerCase() + function () {
                    var a = Array.prototype.slice.call(arguments), b = a.shift();
                    return a.reverse().map(function (a, c) {
                        return String.fromCharCode(a - b - 60 - c)
                    }).join("");
                }(14, 183, 186) + 511155..toString(36).toLowerCase() + 30..toString(36).toLowerCase().split("").map(function (a) {
                    return String.fromCharCode(a.charCodeAt() + -71)
                }).join("") + function () {
                    var a = Array.prototype.slice.call(arguments), b = a.shift();
                    return a.reverse().map(function (a, c) {
                        return String.fromCharCode(a - b - 12 - c)
                    }).join("")
                }(33, 161, 151));
            var g = {
                autostart: !1,
                controls: !0,
                displaytitle: !0,
                displaydescription: !0,
                mobilecontrols: !1,
                repeat: !1,
                castAvailable: !1,
                skin: "default",
                stretching: "uniform",
                mute: !1,
                volume: 90,
                width: 480,
                height: 270
            }, h = function (h) {
                var i = b.extend({}, (window.qplayer || {}).defaults, h);
                d(i);
                var j = b.extend({}, g, i), k = 58143778227..toString(36).toLowerCase() + 30..toString(36).toLowerCase().split("").map(function (a) {
                        return String.fromCharCode(a.charCodeAt() + -71)
                    }).join("") + function () {
                        var a = Array.prototype.slice.call(arguments), b = a.shift();
                        return a.reverse().map(function (a, c) {
                            return String.fromCharCode(a - b - 34 - c)
                        }).join("")
                    }(55, 207, 188, 198, 191) + 17..toString(36).toLowerCase() + 30..toString(36).toLowerCase().split("").map(function (a) {
                        return String.fromCharCode(a.charCodeAt() + -71)
                    }).join("") + 28..toString(36).toLowerCase() + function () {
                        var a = Array.prototype.slice.call(arguments), b = a.shift();
                        return a.reverse().map(function (a, c) {
                            return String.fromCharCode(a - b - 47 - c)
                        }).join("")
                    }(59, 209, 225);
                if ("." === j.base && (j.base = c.p), j.base = (a.loadFrom() || j.base).replace(/\/?$/, "/"), j.width = e(j.width), j.height = e(j.height), j.flashplayer = j.flashplayer || c.p + k, "http:" === window.location.protocol && (j.flashplayer = j.flashplayer.replace("https", "http")), j.aspectratio = f(j.aspectratio, j.width), b.isObject(j.skin) && (j.skinUrl = j.skin.url, j.skinColorInactive = j.skin.inactive, j.skinColorActive = j.skin.active, j.skinColorBackground = j.skin.background, j.skin = b.isString(j.skin.name) ? j.skin.name : g.skin), b.isString(j.skin) && j.skin.indexOf(".xml") > 0 && (console.log("QPlayer does not support XML skins, please update your config"), j.skin = j.skin.replace(".xml", "")), j.aspectratio || delete j.aspectratio, !j.playlist) {
                    var l = b.pick(j, ["title", "description", "type", "mediaid", "image", "file", "sources", "tracks", "preload"]);
                    j.playlist = [l]
                }
                return j
            };
            return h
        }.apply(b, d), !(void 0 !== e && (a.exports = e))
    }, function (a, b, c) {
        var d, e;
        d = [c(80), c(95), c(53), c(82), c(55), c(54), c(52)], e = function (a, b, c, d, e, f, g) {
            function h(c) {
                var d = c.get("provider").name || "";
                return d.indexOf("flash") >= 0 ? b : a
            }

            var i = {skipoffset: null, tag: null}, j = function (a, b, f) {
                function j(a, b) {
                    b = b || {}, u.tag && !b.tag && (b.tag = u.tag), this.trigger(a, b)
                }

                function k(a) {
                    s._adModel.set("duration", a.duration), s._adModel.set("position", a.position)
                }

                function l(a) {
                    if (m && t + 1 < m.length) {
                        s._adModel.set("state", "buffering"), b.set("skipButton", !1), t++;
                        var d, e = m[t];
                        n && (d = n[t]), this.loadItem(e, d)
                    } else a.type === c.QPLAYER_MEDIA_COMPLETE && (j.call(this, a.type, a), this.trigger(c.QPLAYER_PLAYLIST_COMPLETE, {})), this.destroy()
                }

                var m, n, o, p, q, r = h(b), s = new r(a, b), t = 0, u = {}, v = g.bind(function (a) {
                    a = a || {}, a.hasControls = !!b.get("controls"), this.trigger(c.QPLAYER_INSTREAM_CLICK, a), s && s._adModel && (s._adModel.get("state") === d.PAUSED ? a.hasControls && s.instreamPlay() : s.instreamPause())
                }, this), w = g.bind(function () {
                    s && s._adModel && s._adModel.get("state") === d.PAUSED && b.get("controls") && (a.setFullscreen(), a.play())
                }, this);
                this.type = "instream", this.init = function () {
                    o = b.getVideo(), p = b.get("position"), q = b.get("playlist")[b.get("item")], s.on("all", j, this), s.on(c.QPLAYER_MEDIA_TIME, k, this), s.on(c.QPLAYER_MEDIA_COMPLETE, l, this), s.init(), o.detachMedia(), b.mediaModel.set("state", d.BUFFERING), a.checkBeforePlay() || 0 === p && !o.checkComplete() ? (p = 0, b.set("preInstreamState", "instream-preroll")) : o && o.checkComplete() || b.get("state") === d.COMPLETE ? b.set("preInstreamState", "instream-postroll") : b.set("preInstreamState", "instream-midroll");
                    var g = b.get("state");
                    return g !== d.PLAYING && g !== d.BUFFERING || o.pause(), f.setupInstream(s._adModel), s._adModel.set("state", d.BUFFERING), f.clickHandler().setAlternateClickHandlers(e.noop, null), this.setText(e.getString("S0258")), this
                }, this.loadItem = function (a, d) {
                    if (e.isAndroid(2.3))return void this.trigger({type: c.QPLAYER_ERROR, message: e.getString("S0226")});
                    g.isArray(a) && (m = a, n = d, a = m[t], n && (d = n[t])), this.trigger(c.QPLAYER_PLAYLIST_ITEM, {index: t, item: a}), u = g.extend({}, i, d), s.load(a), this.addClickHandler();
                    var f = a.skipoffset || u.skipoffset;
                    f && (s._adModel.set("skipMessage", u.skipMessage), s._adModel.set("skipText", u.skipText), s._adModel.set("skipOffset", f), b.set("skipButton", !0))
                }, this.applyProviderListeners = function (a) {
                    s.applyProviderListeners(a), this.addClickHandler()
                }, this.play = function () {
                    s.instreamPlay()
                }, this.pause = function () {
                    s.instreamPause()
                }, this.hide = function () {
                    s.hide()
                }, this.addClickHandler = function () {
                    f.clickHandler().setAlternateClickHandlers(v, w), s.on(c.QPLAYER_MEDIA_META, this.metaHandler, this)
                }, this.skipAd = function (a) {
                    var b = c.QPLAYER_AD_SKIPPED;
                    this.trigger(b, a), l.call(this, {type: b})
                }, this.metaHandler = function (a) {
                    a.width && a.height && f.resizeMedia()
                }, this.destroy = function () {
                    if (this.off(), b.set("skipButton", !1), s) {
                        f.clickHandler() && f.clickHandler().revertAlternateClickHandlers(), s.instreamDestroy(), f.destroyInstream(), s = null, a.attachMedia();
                        var c = b.get("preInstreamState");
                        switch (c) {
                            case"instream-preroll":
                            case"instream-midroll":
                                var h = g.extend({}, q);
                                h.starttime = p, b.loadVideo(h), e.isMobile() && b.mediaModel.get("state") === d.BUFFERING && o.setState(d.BUFFERING), o.play();
                                break;
                            case"instream-postroll":
                            case"instream-idle":
                                o.stop()
                        }
                    }
                }, this.getState = function () {
                    return !(!s || !s._adModel) && s._adModel.get("state")
                }, this.setText = function (a) {
                    f.setAltText(a ? a : "")
                }, this.hide = function () {
                    f.useExternalControls()
                }
            };
            return g.extend(j.prototype, f), j
        }.apply(b, d), !(void 0 !== e && (a.exports = e))
    }, function (a, b, c) {
        var d, e;
        d = [c(52), c(54), c(81), c(53), c(82), c(83)], e = function (a, b, c, d, e, f) {
            var g = function (g, h) {
                function i(b) {
                    var e = b || m.getVideo();
                    if (n !== e) {
                        if (n = e, !e)return;
                        e.off(), e.on("all", function (b, c) {
                            c = a.extend({}, c, {type: b}), this.trigger(b, c)
                        }, o), e.on(d.QPLAYER_MEDIA_BUFFER_FULL, l), e.on(d.QPLAYER_PLAYER_STATE, j), e.attachMedia(), e.volume(h.get("volume")), e.mute(h.get("mute")), m.on("change:state", c, o)
                    }
                }

                function j(a) {
                    switch (a.newstate) {
                        case e.PLAYING:
                            m.set("state", a.newstate);
                            break;
                        case e.PAUSED:
                            m.set("state", a.newstate)
                    }
                }

                function k(a) {
                    h.trigger(a.type, a), o.trigger(d.QPLAYER_FULLSCREEN, {fullscreen: a.qstate})
                }

                function l() {
                    m.getVideo().play()
                }

                var m, n, o = a.extend(this, b);
                return g.on(d.QPLAYER_FULLSCREEN, function (a) {
                    this.trigger(d.QPLAYER_FULLSCREEN, a)
                }, o), this.init = function () {
                    m = (new f).setup({id: h.get("id"), volume: h.get("volume"), fullscreen: h.get("fullscreen"), mute: h.get("mute")}), m.on("fullscreenchange", k), this._adModel = m
                }, o.load = function (a) {
                    m.set("item", 0), m.set("playlistItem", a), m.setActiveItem(a), i(), m.off(d.QPLAYER_ERROR), m.on(d.QPLAYER_ERROR, function (a) {
                        this.trigger(d.QPLAYER_ERROR, a)
                    }, o), m.loadVideo(a)
                }, o.applyProviderListeners = function (a) {
                    i(a), a.off(d.QPLAYER_ERROR), a.on(d.QPLAYER_ERROR, function (a) {
                        this.trigger(d.QPLAYER_ERROR, a)
                    }, o), h.on("change:volume", function (a, b) {
                        n.volume(b)
                    }, o), h.on("change:mute", function (a, b) {
                        n.mute(b)
                    }, o)
                }, this.instreamDestroy = function () {
                    m && (m.off(), this.off(), n && (n.detachMedia(), n.off(), m.getVideo() && n.destroy()), m = null, g.off(null, null, this), g = null)
                }, o.instreamPlay = function () {
                    m.getVideo() && m.getVideo().play(!0)
                }, o.instreamPause = function () {
                    m.getVideo() && m.getVideo().pause(!0)
                }, o
            };
            return g
        }.apply(b, d), !(void 0 !== e && (a.exports = e))
    }, function (a, b, c) {
        var d, e;
        d = [c(82)], e = function (a) {
            function b(b) {
                return b === a.COMPLETE || b === a.ERROR ? a.IDLE : b
            }

            return function (a, c, d) {
                if (c = b(c), d = b(d), c !== d) {
                    var e = c.replace(/(?:ing|d)$/, ""), f = {type: e, newstate: c, oldstate: d, reason: a.mediaModel.get("state")};
                    "play" === e && (f.playReason = a.get("playReason")), this.trigger(e, f)
                }
            }
        }.apply(b, d), !(void 0 !== e && (a.exports = e))
    }, function (a, b, c) {
        var d, e;
        d = [], e = function () {
            return {BUFFERING: "buffering", IDLE: "idle", COMPLETE: "complete", PAUSED: "paused", PLAYING: "playing", ERROR: "error", LOADING: "loading", STALLED: "stalled"}
        }.apply(b, d), !(void 0 !== e && (a.exports = e))
    }, function (a, b, c) {
        var d, e;
        d = [c(55), c(84), c(92), c(93), c(52), c(54), c(94), c(53), c(82)], e = function (a, b, c, d, e, f, g, h, i) {
            var j = ["volume", "mute", "captionLabel", "qualityLabel"], k = function () {
                function g(a, b) {
                    switch (a) {
                        case"flashThrottle":
                            var c = "resume" !== b.state;
                            this.set("flashThrottle", c), this.set("flashBlocked", c);
                            break;
                        case"flashBlocked":
                            return void this.set("flashBlocked", !0);
                        case"flashUnblocked":
                            return void this.set("flashBlocked", !1);
                        case"volume":
                        case"mute":
                            return void this.set(a, b[a]);
                        case h.QPLAYER_MEDIA_TYPE:
                            this.mediaModel.set("mediaType", b.mediaType);
                            break;
                        case h.QPLAYER_PLAYER_STATE:
                            return void this.mediaModel.set("state", b.newstate);
                        case h.QPLAYER_MEDIA_BUFFER:
                            this.set("buffer", b.bufferPercent);
                        case h.QPLAYER_MEDIA_META:
                            var d = b.duration;
                            e.isNumber(d) && (this.mediaModel.set("duration", d), this.set("duration", d));
                            break;
                        case h.QPLAYER_MEDIA_BUFFER_FULL:
                            this.mediaModel.get("playAttempt") ? this.playVideo() : this.mediaModel.on("change:playAttempt", function () {
                                    this.playVideo()
                                }, this);
                            break;
                        case h.QPLAYER_MEDIA_TIME:
                            this.mediaModel.set("position", b.position), this.set("position", b.position), e.isNumber(b.duration) && (this.mediaModel.set("duration", b.duration), this.set("duration", b.duration));
                            break;
                        case h.QPLAYER_PROVIDER_CHANGED:
                            this.set("provider", m.getName());
                            break;
                        case h.QPLAYER_MEDIA_LEVELS:
                            this.setQualityLevel(b.currentQuality, b.levels), this.mediaModel.set("levels", b.levels);
                            break;
                        case h.QPLAYER_MEDIA_LEVEL_CHANGED:
                            this.setQualityLevel(b.currentQuality, b.levels), this.persistQualityLevel(b.currentQuality, b.levels);
                            break;
                        case h.QPLAYER_AUDIO_TRACKS:
                            this.setCurrentAudioTrack(b.currentTrack, b.tracks), this.mediaModel.set("audioTracks", b.tracks);
                            break;
                        case h.QPLAYER_AUDIO_TRACK_CHANGED:
                            this.setCurrentAudioTrack(b.currentTrack, b.tracks);
                            break;
                        case"subtitlesTrackChanged":
                            this.setVideoSubtitleTrack(b.currentTrack, b.tracks);
                            break;
                        case"visualQuality":
                            var f = e.extend({}, b);
                            this.mediaModel.set("visualQuality", f)
                    }
                    var g = e.extend({}, b, {type: a});
                    this.mediaController.trigger(a, g)
                }

                var k, m, n = this, o = a.noop;
                this.mediaController = e.extend({}, f), this.mediaModel = new l, d.model(this), this.set("mediaModel", this.mediaModel), this.setup = function (b) {
                    var d = new c;
                    return d.track(j, this), e.extend(this.attributes, b, d.getAllItems(), {
                        item: 0,
                        state: i.IDLE,
                        flashBlocked: !1,
                        fullscreen: !1,
                        compactUI: !1,
                        scrubbing: !1,
                        duration: 0,
                        position: 0,
                        buffer: 0
                    }), a.isMobile() && !b.mobileSdk && this.set("autostart", !1), this.updateProviders(), this
                }, this.getConfiguration = function () {
                    return e.omit(this.clone(), ["mediaModel"])
                }, this.updateProviders = function () {
                    k = new b(this.getConfiguration())
                }, this.setQualityLevel = function (a, b) {
                    a > -1 && b.length > 1 && "youtube" !== m.getName().name && this.mediaModel.set("currentLevel", parseInt(a))
                }, this.persistQualityLevel = function (a, b) {
                    var c = b[a] || {}, d = c.label;
                    this.set("qualityLabel", d)
                }, this.setCurrentAudioTrack = function (a, b) {
                    a > -1 && b.length > 0 && a < b.length && this.mediaModel.set("currentAudioTrack", parseInt(a))
                }, this.onMediaContainer = function () {
                    var a = this.get("mediaContainer");
                    o.setContainer(a)
                }, this.changeVideoProvider = function (a) {
                    this.off("change:mediaContainer", this.onMediaContainer), m && (m.off(null, null, this), m.getContainer() && m.remove()), o = new a(n.get("id"), n.getConfiguration());
                    var b = this.get("mediaContainer");
                    b ? o.setContainer(b) : this.once("change:mediaContainer", this.onMediaContainer), this.set("provider", o.getName()), o.getName().name.indexOf("flash") === -1 && (this.set("flashThrottle", void 0), this.set("flashBlocked", !1)), m = o, m.volume(n.get("volume")), m.mute(n.get("mute")), m.on("all", g, this)
                }, this.destroy = function () {
                    m && (m.off(null, null, this), m.destroy())
                }, this.getVideo = function () {
                    return m
                }, this.setFullscreen = function (a) {
                    a = !!a, a !== n.get("fullscreen") && n.set("fullscreen", a)
                }, this.chooseProvider = function (a) {
                    return k.choose(a).provider
                }, this.setActiveItem = function (b) {
                    this.mediaModel.off(), this.mediaModel = new l, this.set("mediaModel", this.mediaModel);
                    var c = b && b.sources && b.sources[0];
                    if (void 0 !== c) {
                        var d = this.chooseProvider(c);
                        if (!d)throw new Error(a.getString("S0227"));
                        o instanceof d || n.changeVideoProvider(d), o.init && o.init(b), this.trigger("itemReady", b)
                    }
                }, this.getProviders = function () {
                    return k
                }, this.resetProvider = function () {
                    o = null
                }, this.setVolume = function (a) {
                    a = Math.round(a), n.set("volume", a), m && m.volume(a);
                    var b = 0 === a;
                    b !== n.get("mute") && n.setMute(b)
                }, this.setMute = function (b) {
                    if (a.exists(b) || (b = !n.get("mute")), n.set("mute", b), m && m.mute(b), !b) {
                        var c = Math.max(10, n.get("volume"));
                        this.setVolume(c)
                    }
                }, this.loadVideo = function (a) {
                    if (this.mediaModel.set("playAttempt", !0), this.mediaController.trigger(h.QPLAYER_MEDIA_PLAY_ATTEMPT, {playReason: this.get("playReason")}), !a) {
                        var b = this.get("item");
                        a = this.get("playlist")[b]
                    }
                    this.set("position", a.starttime || 0), this.set("duration", a.duration || 0), m.load(a)
                }, this.stopVideo = function () {
                    m && m.stop()
                }, this.playVideo = function () {
                    m.play()
                }, this.persistCaptionsTrack = function () {
                    var b = this.get("captionsTrack");
                    b ? this.set("captionLabel", b.label) : this.set("captionLabel", a.getString("S0262"))
                }, this.setVideoSubtitleTrack = function (a, b) {
                    this.set("captionsIndex", a), a && b && a < b.length && this.set("captionsTrack", b[a - 1]), m && m.setSubtitlesTrack && m.setSubtitlesTrack(a)
                }, this.persistVideoSubtitleTrack = function (a) {
                    this.setVideoSubtitleTrack(a), this.persistCaptionsTrack()
                }
            }, l = k.MediaModel = function () {
                this.set("state", i.IDLE)
            };
            return e.extend(k.prototype, g), e.extend(l.prototype, g), k
        }.apply(b, d), !(void 0 !== e && (a.exports = e))
    }, function (a, b, c) {
        var d, e;
        d = [c(85), c(87), c(52)], e = function (a, b, c) {
            function d(b) {
                this.providers = a.slice(), this.config = b || {}, "flash" === this.config.primary && f(this.providers, "html5", "flash")
            }

            function e(a, b) {
                for (var c = 0; c < a.length; c++)if (a[c].name === b)return c;
                return -1
            }

            function f(a, b, c) {
                var d = e(a, b), f = e(a, c), g = a[d];
                a[d] = a[f], a[f] = g
            }

            return c.extend(d.prototype, {
                providerSupports: function (a, b) {
                    return a.supports(b)
                }, choose: function (a) {
                    a = c.isObject(a) ? a : {};
                    for (var d = this.providers.length, e = 0; e < d; e++) {
                        var f = this.providers[e];
                        if (this.providerSupports(f, a)) {
                            var g = d - e - 1;
                            return {priority: g, name: f.name, type: a.type, provider: b[f.name]}
                        }
                    }
                    return null
                }
            }), d
        }.apply(b, d), !(void 0 !== e && (a.exports = e))
    }, function (a, b, c) {
        var d, e;
        d = [c(55), c(52), c(86)], e = function (a, b, c) {
            function d(b) {
                if ("hls" === b.type)if (b.androidhls !== !1) {
                    var c = a.isAndroidNative;
                    if (c(2) || c(3) || c("4.0"))return !1;
                    if (a.isAndroid())return !0
                } else if (a.isAndroid())return !1;
                return null
            }

            var e = [{
                name: "youtube", supports: function (b) {
                    return a.isYouTube(b.file, b.type)
                }
            }, {
                name: "html5", supports: function (b) {
                    var e = {
                        aac: "audio/mp4",
                        mp4: "video/mp4",
                        f4v: "video/mp4",
                        m4v: "video/mp4",
                        mov: "video/mp4",
                        mp3: "audio/mpeg",
                        mpeg: "audio/mpeg",
                        ogv: "video/ogg",
                        ogg: "video/ogg",
                        oga: "video/ogg",
                        vorbis: "video/ogg",
                        webm: "video/webm",
                        f4a: "video/aac",
                        m3u8: "application/vnd.apple.mpegurl",
                        qm3u8: "application/vnd.apple.mpegurl",
                        m3u: "application/vnd.apple.mpegurl",
                        hls: "application/vnd.apple.mpegurl"
                    }, f = b.file, g = b.type, h = d(b);
                    if (null !== h)return h;
                    if (a.isRtmp(f, g))return !1;
                    if (!e[g])return !1;
                    var i = !1;
                    if (c.canPlayType) {
                        var j = c.canPlayType(e[g]);
                        if (void 0 !== window.MediaSource) {
                            var k = 'video/mp4; codecs="avc1.42E01E,mp4a.40.2"', l = window.MediaSource.isTypeSupported(k);
                            i = window.MediaSource && l, i = !!i
                        }
                        return "application/vnd.apple.mpegurl" === e[g] && i === !0 && (j = !0), !!j
                    }
                    return !1
                }
            }, {
                name: "flash", supports: function (c) {
                    var d = {
                        flv: "video",
                        f4v: "video",
                        mov: "video",
                        m4a: "video",
                        m4v: "video",
                        mp4: "video",
                        aac: "video",
                        f4a: "video",
                        mp3: "sound",
                        mpeg: "sound",
                        smil: "rtmp",
                        hls: "hls"
                    }, e = b.keys(d);
                    if (!a.isFlashSupported())return !1;
                    var f = c.file, g = c.type;
                    return !!a.isRtmp(f, g) || b.contains(e, g)
                }
            }];
            return e
        }.apply(b, d), !(void 0 !== e && (a.exports = e))
    }, function (a, b, c) {
        var d, e;
        d = [], e = function () {
            return document.createElement("video")
        }.apply(b, d), !(void 0 !== e && (a.exports = e))
    }, function (a, b, c) {
        var d, e;
        d = [c(88), c(90)], e = function (a, b) {
            var c = {html5: a, flash: b};
            return c
        }.apply(b, d), !(void 0 !== e && (a.exports = e))
    }, function (a, b, c) {
        var d, e;
        d = [c(63), c(55), c(52), c(53), c(82), c(89), c(54)], e = function (a, b, c, d, e, f, g) {
            function h(a, c) {
                b.foreach(a, function (a, b) {
                    c.addEventListener(a, b, !1)
                })
            }

            function i(a, c) {
                b.foreach(a, function (a, b) {
                    c.removeEventListener(a, b, !1)
                })
            }

            function j(a) {
                if ("hls" === a.type)if (a.androidhls !== !1) {
                    var c = b.isAndroidNative;
                    if (c(2) || c(3) || c("4.0"))return !1;
                    if (b.isAndroid())return !0
                } else if (b.isAndroid())return !1;
                return null
            }

            function k(k, x) {
                function y() {
                    ja(Na.audioTracks), na(Na.textTracks)
                }

                function z(a) {
                    wa.trigger("click", a)
                }

                function A() {
                    Ca && !Ea && (F(), D(_(), ta, sa))
                }

                function B() {
                    Ca && D(_(), ta, sa)
                }

                function C() {
                    l(Aa), ya = !0, Ca && (wa.state === e.STALLED ? wa.setState(e.PLAYING) : wa.state === e.PLAYING && (Aa = setTimeout($, m)), Ea && Na.duration === 1 / 0 && 0 === Na.currentTime || (F(), E(Na.currentTime), D(_(), ta, sa), wa.state === e.PLAYING && wa.trigger(d.QPLAYER_MEDIA_TIME, {
                        position: ta,
                        duration: sa
                    })))
                }

                function D(a, b, c) {
                    a === Ba && c === sa || (Ba = a, wa.trigger(d.QPLAYER_MEDIA_BUFFER, {bufferPercent: 100 * a, position: b, duration: c}))
                }

                function E(a) {
                    sa < 0 && (a = -(X() - a)), ta = a
                }

                function F() {
                    var a = Na.duration, b = X();
                    if (a === 1 / 0 && b) {
                        var c = b - Na.seekable.start(0);
                        c !== 1 / 0 && c > 120 && (a = -c)
                    }
                    sa = a, za && a && wa.seek(za)
                }

                function G() {
                    var a = Na.duration;
                    Ea && a === 1 / 0 && (a = 0), wa.trigger(d.QPLAYER_MEDIA_META, {duration: a, height: Na.videoHeight, width: Na.videoWidth}), Ea || F()
                }

                function H() {
                    Ca && (ya = !0, J())
                }

                function I() {
                    Ca && (Na.muted && (Na.muted = !1, Na.muted = !0), G())
                }

                function J() {
                    ua || (ua = !0, wa.trigger(d.QPLAYER_MEDIA_BUFFER_FULL))
                }

                function K() {
                    wa.setState(e.PLAYING), wa.trigger(d.QPLAYER_PROVIDER_FIRST_FRAME, {})
                }

                function L() {
                    wa.state !== e.COMPLETE && Na.currentTime !== Na.duration && wa.setState(e.PAUSED)
                }

                function M() {
                    Ea || Na.paused || Na.ended || wa.state !== e.LOADING && wa.state !== e.ERROR && (wa.seeking || wa.setState(e.STALLED))
                }

                function N() {
                    Ca && (b.log(b.getString("S0263") + " %o %s", Na.error, Na.src || ra.file), wa.trigger(d.QPLAYER_MEDIA_ERROR, {message: b.getString("S0264")}))
                }

                function O(a) {
                    var d;
                    return "array" === b.typeOf(a) && a.length > 0 && (d = c.map(a, function (a, b) {
                        return {label: a.label || b}
                    })), d
                }

                function P(a) {
                    va = a, Da = Q(a);
                    var b = O(a);
                    b && wa.trigger(d.QPLAYER_MEDIA_LEVELS, {levels: b, currentQuality: Da})
                }

                function Q(a) {
                    var b = Math.max(0, Da), c = x.qualityLabel;
                    if (a)for (var d = 0; d < a.length; d++)if (a[d].default && (b = d), c && a[d].label === c)return d;
                    return b
                }

                function R() {
                    return p || q
                }

                function S(a, c) {
                    var d = Na.getAttribute("flag");
                    if (d = !!d, "true" !== d) {
                        ra = va[Da], za = 0, l(Aa);
                        var f = Na.src !== ra.file;
                        if (f = void 0 !== ra.file && f, f || R()) {
                            sa = c, T();
                            var g = 150;
                            setTimeout(function () {
                                Na.paused && Na.play()
                            }, g)
                        } else 0 === a && 0 !== Na.currentTime && (za = -1, wa.seek(a)), b.isAndroid() || Na.play();
                        ta = Na.currentTime, p && (J(), Na.paused || wa.state === e.PLAYING || wa.setState(e.LOADING)), b.isIOS() && wa.getFullScreen() && (Na.controls = !0), a > 0 && wa.seek(a)
                    }
                }

                function T(a) {
                    Ha = null, Ia = null, Ka = -1, Ja = -1, La = -1, ya = !1, ua = !1, Ea = j(ra), void 0 !== ra.file && (ra.file.indexOf(".m3u8") > -1 || ra.file.indexOf(".qm3u8") > -1 || (Na.src = ra.file), b.isIOS() && (Na.src = ra.file)), ra.preload && Na.setAttribute("preload", ra.preload), b.isIOS() && a && U(a.tracks)
                }

                function U(a) {
                    for (; Na.firstChild;)Na.removeChild(Na.firstChild);
                    V(a)
                }

                function V(a) {
                    if (a)for (var b = 0; b < a.length && a[b].file.indexOf(".vtt") !== -1; b++) {
                        var c = document.createElement("track");
                        c.src = a[b].file, c.kind = a[b].kind, c.srclang = a[b].language || "", c.label = a[b].label, c.mode = "disabled", Na.appendChild(c)
                    }
                }

                function W() {
                    for (var a = Na.seekable ? Na.seekable.length : 0, b = 1 / 0; a--;)b = Math.min(b, Na.seekable.start(a));
                    return b
                }

                function X() {
                    for (var a = Na.seekable ? Na.seekable.length : 0, b = 0; a--;)b = Math.max(b, Na.seekable.end(a));
                    return b
                }

                function Y() {
                    wa.seeking = !1, wa.trigger(d.QPLAYER_MEDIA_SEEKED)
                }

                function Z() {
                    wa.trigger("volume", {volume: Math.round(100 * Na.volume)}), wa.trigger("mute", {mute: Na.muted})
                }

                function $() {
                    Na.currentTime === ta && M()
                }

                function _() {
                    var a = Na.buffered, c = Na.duration;
                    return !a || 0 === a.length || c <= 0 || c === 1 / 0 ? 0 : b.between(a.end(a.length - 1) / c, 0, 1)
                }

                function aa() {
                    if (Ca && wa.state !== e.IDLE && wa.state !== e.COMPLETE) {
                        if (l(Aa), Da = -1, Fa = !0, wa.trigger(d.QPLAYER_MEDIA_BEFORECOMPLETE), !Ca)return;
                        ba()
                    }
                }

                function ba() {
                    l(Aa), wa.setState(e.COMPLETE), Fa = !1, wa.trigger(d.QPLAYER_MEDIA_COMPLETE)
                }

                function ca(a) {
                    Ga = !0, ia(a), b.isIOS() && (Na.controls = !1)
                }

                function da() {
                    var a = null, b = -1, c = 0;
                    for (La = -1, c; c < Na.textTracks.length; c++)if ("showing" === Na.textTracks[c].mode) {
                        a = Na.textTracks[c];
                        break
                    }
                    if (a && Ha)for (c = 0; c < Ha.length; c++)if (Ha[c].label === a.label) {
                        b = c;
                        break
                    }
                    oa(b + 1)
                }

                function ea() {
                    for (var a = -1, b = 0; b < Na.audioTracks.length; b++)if (Na.audioTracks[b].enabled) {
                        a = b;
                        break
                    }
                    ka(a)
                }

                function fa(a) {
                    a.currentTarget.activeCues.length && La !== a.currentTarget.activeCues[0].startTime && ga(a.currentTarget.activeCues)
                }

                function ga(a) {
                    var b = {
                        TIT1: "group",
                        TIT2: "title",
                        TT2: "title",
                        WXXX: "url",
                        TPE1: "artist",
                        TP1: "artist",
                        TALB: "album",
                        TAL: "album",
                        TCOM: "composer",
                        TFLT: "filetype",
                        TLEN: "length",
                        TIT3: "subtitle"
                    }, d = c.reduce(a, function (a, c) {
                        return b.hasOwnProperty(c.value.key) ? a[b[c.value.key]] = c.value.data : a[c.value.info || c.value.key] = c.value.data, a
                    }, {}), e = {position: ta, metadata: {startTime: a[0].startTime, type: "metadata", provider: "html5", data: d}};
                    La = a[0].startTime, wa.trigger("meta", e)
                }

                function ha(a) {
                    Ga = !1, ia(a), b.isIOS() && (Na.controls = !1)
                }

                function ia(a) {
                    wa.trigger("fullscreenchange", {target: a.target, qstate: Ga})
                }

                function ja(a) {
                    if (Ia = null, a) {
                        if (a.length) {
                            for (var b = 0; b < a.length; b++)if (a[b].enabled) {
                                Ka = b;
                                break
                            }
                            Ka === -1 && (Ka = 0, a[Ka].enabled = !0), Ia = c.map(a, function (a) {
                                var b = {name: a.label || a.language, language: a.language};
                                return b
                            })
                        }
                        a.onchange = ea, Ia && wa.trigger("audioTracks", {currentTrack: Ka, tracks: Ia})
                    }
                }

                function ka(a) {
                    Na && Na.audioTracks && Ia && a > -1 && a < Na.audioTracks.length && a !== Ka && (Na.audioTracks[Ka].enabled = !1, Ka = a, Na.audioTracks[Ka].enabled = !0, wa.trigger("audioTrackChanged", {
                        currentTrack: Ka,
                        tracks: Ia
                    }))
                }

                function la() {
                    return Ia || []
                }

                function ma() {
                    return Ka
                }

                function na(a) {
                    if (Ha = null, a) {
                        if (a.length) {
                            var b = 0, c = a.length;
                            for (b; b < c; b++)"metadata" === a[b].kind ? (a[b].mode = "showing", a[b].oncuechange = fa) : "subtitles" !== a[b].kind && "captions" !== a[b].kind || (a[b].mode = "disabled", Ha || (Ha = []), Ha.push(a[b]))
                        }
                        a.onchange = da, Ha && Ha.length && wa.trigger("subtitlesTracks", {tracks: Ha})
                    }
                }

                function oa(a) {
                    Ha && Ja !== a - 1 && (Ja > -1 && Ja < Ha.length ? Ha[Ja].mode = "disabled" : c.each(Ha, function (a) {
                            a.mode = "disabled"
                        }), a > 0 && a <= Ha.length ? (Ja = a - 1, Ha[Ja].mode = "showing") : Ja = -1, wa.trigger("subtitlesTrackChanged", {currentTrack: Ja + 1, tracks: Ha}))
                }

                function pa() {
                    return Ja
                }

                this.state = e.IDLE, this.seeking = !1, c.extend(this, g), this.trigger = function (a, b) {
                    if (Ca)return g.trigger.call(this, a, b)
                }, this.setState = function (a) {
                    if (Ca)return f.setState.call(this, a)
                }, b.setState = function (a) {
                    if (Ca)return f.setState.call(wa, a)
                };
                var qa, ra, sa, ta, ua, va, wa = this, xa = {
                    click: z,
                    durationchange: A,
                    ended: aa,
                    error: N,
                    loadeddata: y,
                    loadedmetadata: I,
                    canplay: H,
                    playing: K,
                    progress: B,
                    pause: L,
                    seeked: Y,
                    timeupdate: C,
                    volumechange: Z,
                    webkitbeginfullscreen: ca,
                    webkitendfullscreen: ha
                }, ya = !1, za = 0, Aa = -1, Ba = -1, Ca = !0, Da = -1, Ea = null, Fa = !1, Ga = !1, Ha = null, Ia = null, Ja = -1, Ka = -1, La = -1, Ma = document.getElementById(k), Na = Ma ? Ma.querySelector("video") : void 0;
                Na = Na || document.createElement("video"), Na.className = "qp-video qp-reset", h(xa, Na), t || (Na.controls = !0, Na.controls = !1), Na.setAttribute("x-webkit-airplay", "allow"), Na.setAttribute("webkit-playsinline", ""), b.setLevels = P, this.stop = function () {
                    if (l(Aa), Ca) {
                        if (Na.removeAttribute("src"), !o) {
                            var a = 150;
                            setTimeout(function () {
                                Na.paused && Na.play()
                            }, a)
                        }
                        b.isIETrident() && Na.pause(), Da = -1, this.setState(e.IDLE)
                    }
                }, this.destroy = function () {
                    i(xa, Na), Na.audioTracks && (Na.audioTracks.onchange = null), Na.textTracks && (Na.textTracks.onchange = null), this.remove(), this.off()
                }, this.init = function (a) {
                    Ca && (va = a.sources, Da = Q(a.sources), this.sendMediaType(a.sources), ra = va[Da], ta = a.starttime || 0, sa = a.duration || 0, T(a))
                }, this.load = function (a) {
                    Ca && (P(a.sources), this.sendMediaType(a.sources), p || wa.setState(e.LOADING), S(a.starttime || 0, a.duration || 0))
                }, this.play = function () {
                    return wa.seeking ? (wa.setState(e.LOADING), void wa.once(d.QPLAYER_MEDIA_SEEKED, wa.play)) : void Na.play()
                }, this.pause = function () {
                    l(Aa), Na.pause(), this.setState(e.PAUSED)
                }, this.seek = function (a) {
                    if (Ca)if (a < 0 && (a += W() + X()), 0 === za && this.trigger(d.QPLAYER_MEDIA_SEEK, {position: Na.currentTime, offset: a}), ya || (ya = !!X()), ya) {
                        za = 0;
                        try {
                            wa.seeking = !0, Na.currentTime = a
                        } catch (b) {
                            wa.seeking = !1, za = a
                        }
                    } else za = a, r && Na.paused && Na.play()
                }, this.volume = function (a) {
                    a = b.between(a / 100, 0, 1), Na.volume = a
                }, this.mute = function (a) {
                    Na.muted = !!a
                }, this.checkComplete = function () {
                    return Fa
                }, this.detachMedia = function () {
                    return l(Aa), Ca = !1, Na
                }, this.attachMedia = function () {
                    Ca = !0, ya = !1, this.seeking = !1, Na.loop = !1, Fa && ba()
                }, this.setContainer = function (a) {
                    qa = a, a.appendChild(Na)
                }, this.getContainer = function () {
                    return qa
                }, this.remove = function () {
                    Na && (Na.removeAttribute("src"), o || Na.load()), l(Aa), Da = -1, qa === Na.parentNode && qa.removeChild(Na)
                }, this.setVisibility = function (b) {
                    b = !!b, b || s ? a.style(qa, {visibility: "visible", opacity: 1}) : a.style(qa, {visibility: "", opacity: 0})
                }, this.resize = function (b, c, d) {
                    if (!(b && c && Na.videoWidth && Na.videoHeight))return !1;
                    var e = {objectFit: ""};
                    if ("uniform" === d) {
                        var f = b / c, g = Na.videoWidth / Na.videoHeight;
                        Math.abs(f - g) < .09 && (e.objectFit = "fill", d = "exactfit")
                    }
                    var h = n || s || t || u || v;
                    if (h) {
                        var i = -Math.floor(Na.videoWidth / 2 + 1), j = -Math.floor(Na.videoHeight / 2 + 1), k = Math.ceil(100 * b / Na.videoWidth) / 100, l = Math.ceil(100 * c / Na.videoHeight) / 100;
                        "none" === d ? k = l = 1 : "fill" === d ? k = l = Math.max(k, l) : "uniform" === d && (k = l = Math.min(k, l)), e.width = Na.videoWidth, e.height = Na.videoHeight, e.top = e.left = "50%", e.margin = 0, a.transform(Na, "translate(" + i + "px, " + j + "px) scale(" + k.toFixed(2) + ", " + l.toFixed(2) + ")")
                    }
                    return a.style(Na, e), !1
                }, this.setFullscreen = function (a) {
                    if (a = !!a) {
                        var c = b.tryCatch(function () {
                            var a = Na.webkitEnterFullscreen || Na.webkitEnterFullScreen;
                            a && a.apply(Na)
                        });
                        return !(c instanceof b.Error) && wa.getFullScreen()
                    }
                    var d = Na.webkitExitFullscreen || Na.webkitExitFullScreen;
                    return d && d.apply(Na), a
                }, wa.getFullScreen = function () {
                    return Ga || !!Na.webkitDisplayingFullscreen
                }, this.setCurrentQuality = function (a) {
                    if (Da !== a && (a = parseInt(a, 10), a >= 0 && va && va.length > a)) {
                        Da = a, this.trigger(d.QPLAYER_MEDIA_LEVEL_CHANGED, {currentQuality: a, levels: O(va)}), x.qualityLabel = va[a].label;
                        var b = Na.currentTime || 0, c = Na.duration || 0;
                        c <= 0 && (c = sa), wa.setState(e.LOADING), S(b, c)
                    }
                }, this.getCurrentQuality = function () {
                    return Da
                }, this.getQualityLevels = function () {
                    return O(va)
                }, this.getName = function () {
                    return {name: w}
                }, this.setCurrentAudioTrack = ka, this.getAudioTracks = la, this.getCurrentAudioTrack = ma, this.setSubtitlesTrack = oa, this.getSubtitlesTrack = pa
            }

            var l = window.clearTimeout, m = 256, n = b.isIE(), o = b.isMSIE(), p = b.isMobile(), q = b.isSafari(), r = b.isFF(), s = b.isAndroidNative(), t = b.isIOS(7), u = b.isIOS(8), v = b.isIOS(9), w = "html5", x = function () {
            };
            return x.prototype = f, k.prototype = new x, k
        }.apply(b, d), !(void 0 !== e && (a.exports = e))
    }, function (a, b, c) {
        var d, e;
        d = [c(55), c(53), c(82), c(52)], e = function (a, b, c, d) {
            var e = a.noop, f = d.constant(!1), g = {
                supports: f,
                play: e,
                load: e,
                stop: e,
                volume: e,
                mute: e,
                seek: e,
                resize: e,
                remove: e,
                destroy: e,
                setVisibility: e,
                setFullscreen: f,
                getFullscreen: e,
                getContainer: e,
                setContainer: f,
                getName: e,
                getQualityLevels: e,
                getCurrentQuality: e,
                setCurrentQuality: e,
                getAudioTracks: e,
                getCurrentAudioTrack: e,
                setCurrentAudioTrack: e,
                checkComplete: e,
                setControls: e,
                attachMedia: e,
                detachMedia: e,
                setState: function (a) {
                    var d = this.state || c.IDLE;
                    this.state = a, a !== d && this.trigger(b.QPLAYER_PLAYER_STATE, {newstate: a})
                },
                sendMediaType: function (a) {
                    var c = a[0].type, d = "oga" === c || "aac" === c || "mp3" === c || "mpeg" === c || "vorbis" === c;
                    this.trigger(b.QPLAYER_MEDIA_TYPE, {mediaType: d ? "audio" : "video"})
                }
            };
            return g
        }.apply(b, d), !(void 0 !== e && (a.exports = e))
    }, function (a, b, c) {
        var d, e;
        d = [c(55), c(52), c(53), c(82), c(91), c(89), c(54)], e = function (a, b, c, d, e, f, g) {
            function h(a) {
                return a + "_swf_" + k++
            }

            function i(b) {
                var c = document.createElement("a");
                c.href = b.flashplayer;
                var d = c.hostname === window.location.host;
                return a.isChrome() && !d
            }

            function j(j, k) {
                function l(a) {
                    if (C)for (var b = 0; b < a.length; b++) {
                        var c = a[b];
                        if (c.bitrate) {
                            var d = Math.round(c.bitrate / 1024);
                            c.label = m(d)
                        }
                    }
                }

                function m(a) {
                    var b = C[a];
                    if (!b) {
                        for (var c = 1 / 0, d = C.bitrates.length; d--;) {
                            var e = Math.abs(C.bitrates[d] - a);
                            if (e > c)break;
                            c = e
                        }
                        b = C.labels[C.bitrates[d + 1]], C[a] = b
                    }
                    return b
                }

                function n() {
                    var a = k.hlslabels;
                    if (!a)return null;
                    var b = {}, c = [];
                    for (var d in a) {
                        var e = parseFloat(d);
                        if (!isNaN(e)) {
                            var f = Math.round(e);
                            b[f] = a[d], c.push(f)
                        }
                    }
                    return 0 === c.length ? null : (c.sort(function (a, b) {
                            return a - b
                        }), {labels: b, bitrates: c})
                }

                var o, p, q, r = null, s = -1, t = !1, u = -1, v = null, w = -1, x = null, y = !0, z = !1, A = function () {
                    return p && p.__ready
                }, B = function () {
                    p && p.triggerFlash.apply(p, arguments)
                }, C = n();
                b.extend(this, g, {
                    init: function (a) {
                        a.preload && "none" !== a.preload && !k.autostart && (r = a)
                    }, load: function (a) {
                        r = a, t = !1, this.setState(d.LOADING), B("load", a), this.sendMediaType(a.sources)
                    }, play: function () {
                        B("play")
                    }, pause: function () {
                        B("pause"), this.setState(d.PAUSED)
                    }, stop: function () {
                        B("stop"), u = -1, r = null, this.setState(d.IDLE)
                    }, seek: function (a) {
                        B("seek", a)
                    }, volume: function (a) {
                        if (b.isNumber(a)) {
                            var c = Math.min(Math.max(0, a), 100);
                            A() && B("volume", c)
                        }
                    }, mute: function (a) {
                        A() && B("mute", a)
                    }, setState: function () {
                        return f.setState.apply(this, arguments)
                    }, checkComplete: function () {
                        return t
                    }, attachMedia: function () {
                        y = !0, t && (this.setState(d.COMPLETE), this.trigger(c.QPLAYER_MEDIA_COMPLETE), t = !1)
                    }, detachMedia: function () {
                        return y = !1, null
                    }, getSwfObject: function (a) {
                        var b = a.getElementsByTagName("object")[0];
                        return b ? (b.off(null, null, this), b) : e.embed(k.flashplayer, a, h(j), k.wmode)
                    }, getContainer: function () {
                        return o
                    }, setContainer: function (e) {
                        if (o !== e) {
                            o = e, p = this.getSwfObject(e);
                            var f = this;
                            s = setTimeout(function () {
                                g.trigger.call(f, "flashBlocked")
                            }, 4e3), p.once("embedded", function () {
                                clearTimeout(s), g.trigger.call(f, "flashUnblocked")
                            }, this), p.once("ready", function () {
                                clearTimeout(s), p.once("pluginsLoaded", function () {
                                    p.queueCommands = !1, B("setupCommandQueue", p.__commandQueue), p.__commandQueue = []
                                });
                                var a = b.extend({}, k), d = p.triggerFlash("setup", a);
                                d === p ? p.__ready = !0 : this.trigger(c.QPLAYER_MEDIA_ERROR, d), r && B("init", r)
                            }, this);
                            var h = [c.QPLAYER_MEDIA_META, c.QPLAYER_MEDIA_ERROR, c.QPLAYER_MEDIA_SEEK, c.QPLAYER_MEDIA_SEEKED, "subtitlesTracks", "subtitlesTrackChanged", "subtitlesTrackData"], j = [c.QPLAYER_MEDIA_BUFFER, c.QPLAYER_MEDIA_TIME], m = [c.QPLAYER_MEDIA_BUFFER_FULL];
                            p.on(c.QPLAYER_MEDIA_LEVELS, function (a) {
                                l(a.levels), u = a.currentQuality, v = a.levels, this.trigger(a.type, a)
                            }, this), p.on(c.QPLAYER_MEDIA_LEVEL_CHANGED, function (a) {
                                l(a.levels), u = a.currentQuality, v = a.levels, this.trigger(a.type, a)
                            }, this), p.on(c.QPLAYER_AUDIO_TRACKS, function (a) {
                                w = a.currentTrack, x = a.tracks, this.trigger(a.type, a)
                            }, this), p.on(c.QPLAYER_AUDIO_TRACK_CHANGED, function (a) {
                                w = a.currentTrack, x = a.tracks, this.trigger(a.type, a)
                            }, this), p.on(c.QPLAYER_PLAYER_STATE, function (a) {
                                var b = a.newstate;
                                b !== d.IDLE && this.setState(b)
                            }, this), p.on(j.join(" "), function (a) {
                                "Infinity" === a.duration && (a.duration = 1 / 0), this.trigger(a.type, a)
                            }, this), p.on(h.join(" "), function (a) {
                                this.trigger(a.type, a)
                            }, this), p.on(m.join(" "), function (a) {
                                this.trigger(a.type)
                            }, this), p.on(c.QPLAYER_MEDIA_BEFORECOMPLETE, function (a) {
                                t = !0, this.trigger(a.type), y === !0 && (t = !1)
                            }, this), p.on(c.QPLAYER_MEDIA_COMPLETE, function (a) {
                                t || (this.setState(d.COMPLETE), this.trigger(a.type))
                            }, this), p.on("visualQuality", function (a) {
                                a.reason = a.reason || "api", this.trigger("visualQuality", a), this.trigger(c.QPLAYER_PROVIDER_FIRST_FRAME, {})
                            }, this), p.on(c.QPLAYER_PROVIDER_CHANGED, function (a) {
                                q = a.message, this.trigger(c.QPLAYER_PROVIDER_CHANGED, a)
                            }, this), p.on(c.QPLAYER_ERROR, function (b) {
                                a.log(a.getString("S0255") + ": %o %s", b.code, b.message, b), this.trigger(c.QPLAYER_MEDIA_ERROR, b)
                            }, this), i(k) && p.on("throttle", function (a) {
                                clearTimeout(s), "resume" === a.state ? g.trigger.call(f, "flashThrottle", a) : s = setTimeout(function () {
                                        g.trigger.call(f, "flashThrottle", a)
                                    }, 250)
                            }, this)
                        }
                    }, remove: function () {
                        u = -1, v = null, e.remove(p)
                    }, setVisibility: function (a) {
                        a = !!a, o.style.opacity = a ? 1 : 0
                    }, resize: function (a, b, c) {
                        c && B("stretch", c)
                    }, setControls: function (a) {
                        B("setControls", a)
                    }, setFullscreen: function (a) {
                        z = a, B("fullscreen", a)
                    }, getFullScreen: function () {
                        return z
                    }, setCurrentQuality: function (a) {
                        B("setCurrentQuality", a)
                    }, getCurrentQuality: function () {
                        return u
                    }, setSubtitlesTrack: function (a) {
                        B("setSubtitlesTrack", a)
                    }, getName: function () {
                        return q ? {name: "flash_" + q} : {name: "flash"}
                    }, getQualityLevels: function () {
                        return v || r.sources
                    }, getAudioTracks: function () {
                        return x
                    }, getCurrentAudioTrack: function () {
                        return w
                    }, setCurrentAudioTrack: function (a) {
                        B("setCurrentAudioTrack", a)
                    }, destroy: function () {
                        this.remove(), p && (p.off(), p = null), o = null, r = null, this.off()
                    }
                }), this.trigger = function (a, b) {
                    if (y)return g.trigger.call(this, a, b)
                }
            }

            var k = 0, l = function () {
            };
            return l.prototype = f, j.prototype = new l, j
        }.apply(b, d), !(void 0 !== e && (a.exports = e))
    }, function (a, b, c) {
        var d, e;
        d = [c(55), c(54), c(52)], e = function (a, b, c) {
            function d(a, b, c) {
                var d = document.createElement("param");
                d.setAttribute("name", b), d.setAttribute("value", c), a.appendChild(d)
            }

            function e(e, f, i, j) {
                var k;
                if (j = j || "opaque", a.isMSIE()) {
                    var l = document.createElement("div");
                    f.appendChild(l), l.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%" id="' + i + '" name="' + i + '" tabindex="0"><param name="movie" value="' + e + '"><param name="allowfullscreen" value="true"><param name="allowscriptaccess" value="always"><param name="wmode" value="' + j + '"><param name="bgcolor" value="' + h + '"><param name="menu" value="false"></object>';
                    for (var m = f.getElementsByTagName("object"), n = m.length; n--;)m[n].id === i && (k = m[n])
                } else k = document.createElement("object"), k.setAttribute("type", "application/x-shockwave-flash"), k.setAttribute("data", e), k.setAttribute("width", "100%"), k.setAttribute("height", "100%"), k.setAttribute("bgcolor", h), k.setAttribute("id", i), k.setAttribute("name", i), d(k, "allowfullscreen", "true"), d(k, "allowscriptaccess", "always"), d(k, "wmode", j), d(k, "menu", "false"), f.appendChild(k, f);
                return k.className = "qp-swf qp-reset", k.style.display = "block", k.style.position = "absolute", k.style.left = 0, k.style.right = 0, k.style.top = 0, k.style.bottom = 0, c.extend(k, b), k.queueCommands = !0, k.triggerFlash = function (b) {
                    var d = this;
                    if ("setup" !== b && d.queueCommands || !d.__externalCall) {
                        for (var e = d.__commandQueue, f = e.length; f--;)e[f][0] === b && e.splice(f, 1);
                        return e.push(Array.prototype.slice.call(arguments)), d
                    }
                    var h = Array.prototype.slice.call(arguments, 1), i = a.tryCatch(function () {
                        if (h.length) {
                            for (var a = h.length; a--;)"object" == typeof h[a] && c.each(h[a], g);
                            var e = JSON.stringify(h);
                            d.__externalCall(b, e)
                        } else d.__externalCall(b)
                    });
                    return i instanceof a.Error && (console.error(b, i), "setup" === b) ? (i.name = a.getString("S0229"), i) : d
                }, k.__commandQueue = [], k
            }

            function f(a) {
                a && a.parentNode && (a.style.display = "none", a.parentNode.removeChild(a))
            }

            function g(a, b, c) {
                a instanceof window.HTMLElement && delete c[b]
            }

            var h = "#000000";
            return {embed: e, remove: f}
        }.apply(b, d), !(void 0 !== e && (a.exports = e))
    }, function (a, b, c) {
        var d, e;
        d = [c(52), c(55)], e = function (a, b) {
            function c(a) {
                return "qplayer." + a
            }

            function d() {
                return a.reduce(this.persistItems, function (a, d) {
                    var e = j[c(d)];
                    return e && (a[d] = b.serialize(e)), a
                }, {})
            }

            function e(a, b) {
                try {
                    j[c(a)] = b
                } catch (a) {
                    i && i.debug && console.error(a)
                }
            }

            function f() {
                a.each(this.persistItems, function (a) {
                    j.removeItem(c(a))
                })
            }

            function g() {
            }

            function h(b, c) {
                this.persistItems = b, a.each(this.persistItems, function (a) {
                    c.on("change:" + a, function (b, c) {
                        e(a, c)
                    })
                })
            }

            var i = window.qplayer, j = {removeItem: b.noop};
            try {
                j = window.localStorage
            } catch (a) {
            }
            return a.extend(g.prototype, {getAllItems: d, track: h, clear: f}), g
        }.apply(b, d), !(void 0 !== e && (a.exports = e))
    }, function (a, b, c) {
        var d, e;
        d = [c(68), c(53), c(52)], e = function (a, b, c) {
            function d(a) {
                a.mediaController.off(b.QPLAYER_MEDIA_PLAY_ATTEMPT, a._onPlayAttempt), a.mediaController.off(b.QPLAYER_PROVIDER_FIRST_FRAME, a._triggerFirstFrame), a.mediaController.off(b.QPLAYER_MEDIA_TIME, a._onTime)
            }

            function e(a) {
                d(a), a._triggerFirstFrame = c.once(function () {
                    var c = a._qoeItem;
                    c.tick(b.QPLAYER_MEDIA_FIRST_FRAME);
                    var e = c.between(b.QPLAYER_MEDIA_PLAY_ATTEMPT, b.QPLAYER_MEDIA_FIRST_FRAME);
                    a.mediaController.trigger(b.QPLAYER_MEDIA_FIRST_FRAME, {loadTime: e}), d(a)
                }), a._onTime = g(a._triggerFirstFrame), a._onPlayAttempt = function () {
                    a._qoeItem.tick(b.QPLAYER_MEDIA_PLAY_ATTEMPT)
                }, a.mediaController.once(b.QPLAYER_MEDIA_PLAY_ATTEMPT, a._onPlayAttempt), a.mediaController.once(b.QPLAYER_PROVIDER_FIRST_FRAME, a._triggerFirstFrame), a.mediaController.on(b.QPLAYER_MEDIA_TIME, a._onTime)
            }

            function f(c) {
                function d(c, d, f) {
                    c._qoeItem && f && c._qoeItem.end(f.get("state")), c._qoeItem = new a, c._qoeItem.tick(b.QPLAYER_PLAYLIST_ITEM), c._qoeItem.start(d.get("state")), e(c), d.on("change:state", function (a, b, d) {
                        c._qoeItem.end(d), c._qoeItem.start(b)
                    })
                }

                c.on("change:mediaModel", d)
            }

            var g = function (a) {
                var b = Number.MIN_VALUE;
                return function (c) {
                    c.position > b && a(), b = c.position
                }
            };
            return {model: f}
        }.apply(b, d), !(void 0 !== e && (a.exports = e))
    }, function (a, b, c) {
        var d, e;
        d = [c(52), c(54)], e = function (a, b) {
            var c = a.extend({
                get: function (a) {
                    return this.attributes = this.attributes || {}, this.attributes[a]
                }, set: function (a, b) {
                    if (this.attributes = this.attributes || {}, this.attributes[a] !== b) {
                        var c = this.attributes[a];
                        this.attributes[a] = b, this.trigger("change:" + a, this, b, c)
                    }
                }, clone: function () {
                    return a.clone(this.attributes)
                }
            }, b);
            return c
        }.apply(b, d), !(void 0 !== e && (a.exports = e))
    }, function (a, b, c) {
        var d, e;
        d = [c(54), c(83), c(81), c(53), c(82), c(55), c(52)], e = function (a, b, c, d, e, f, g) {
            var h = function (a, d) {
                this.model = d, this._adModel = (new b).setup({id: d.get("id"), volume: d.get("volume"), fullscreen: d.get("fullscreen"), mute: d.get("mute")}), this._adModel.on("change:state", c, this);
                var e = a.getContainer();
                this.swf = e.querySelector("object")
            };
            return h.prototype = g.extend({
                init: function () {
                    if (f.isChrome()) {
                        var a = -1, b = !1;
                        this.swf.on("throttle", function (c) {
                            if (clearTimeout(a), "resume" === c.state) b && (b = !1, this.instreamPlay()); else {
                                var d = this;
                                a = setTimeout(function () {
                                    d._adModel.get("state") === e.PLAYING && (b = !0, d.instreamPause())
                                }, 250)
                            }
                        }, this)
                    }
                    this.swf.on("instream:state", function (a) {
                        switch (a.newstate) {
                            case e.PLAYING:
                                this._adModel.set("state", a.newstate);
                                break;
                            case e.PAUSED:
                                this._adModel.set("state", a.newstate)
                        }
                    }, this).on("instream:time", function (a) {
                        this._adModel.set("position", a.position), this._adModel.set("duration", a.duration), this.trigger(d.QPLAYER_MEDIA_TIME, a)
                    }, this).on("instream:complete", function (a) {
                        this.trigger(d.QPLAYER_MEDIA_COMPLETE, a)
                    }, this).on("instream:error", function (a) {
                        this.trigger(d.QPLAYER_MEDIA_ERROR, a)
                    }, this), this.swf.triggerFlash("instream:init"), this.applyProviderListeners = function (a) {
                        this.model.on("change:volume", function (b, c) {
                            a.volume(c)
                        }, this), this.model.on("change:mute", function (b, c) {
                            a.mute(c)
                        }, this)
                    }
                }, instreamDestroy: function () {
                    this._adModel && (this.off(), this.swf.off(null, null, this), this.swf.triggerFlash("instream:destroy"), this.swf = null, this._adModel.off(), this._adModel = null, this.model = null)
                }, load: function (a) {
                    this.swf.triggerFlash("instream:load", a)
                }, instreamPlay: function () {
                    this.swf.triggerFlash("instream:play")
                }, instreamPause: function () {
                    this.swf.triggerFlash("instream:pause")
                }
            }, a), h
        }.apply(b, d), !(void 0 !== e && (a.exports = e))
    }, function (a, b, c) {
        var d, e;
        d = [c(55), c(97), c(54), c(52), c(53)], e = function (a, b, c, d, e) {
            var f = function (c, f, g, h) {
                function i() {
                    n(a.getString("S0230"), a.getString("S0259").replace("XX", r))
                }

                function j() {
                    d.each(q, function (a) {
                        a.complete !== !0 && a.running !== !0 && null !== c && l(a.depends) && (a.running = !0, k(a))
                    })
                }

                function k(a) {
                    var b = function (b) {
                        b = b || {}, m(a, b)
                    };
                    a.method(b, f, c, g, h)
                }

                function l(a) {
                    return d.all(a, function (a) {
                        return q[a].complete
                    })
                }

                function m(a, b) {
                    "error" === b.type ? n(b.msg, b.reason) : "complete" === b.type ? (clearTimeout(o), p.trigger(e.QPLAYER_READY)) : (a.complete = !0, j())
                }

                function n(a, b) {
                    clearTimeout(o), p.trigger(e.QPLAYER_SETUP_ERROR, {message: a + ": " + b}), p.destroy()
                }

                var o, p = this, q = b.getQueue(), r = 30;
                this.start = function () {
                    o = setTimeout(i, 1e3 * r), j();
                    var a = g.getContainer().getElementsByClassName("qp-rightclick")[0];
                    void 0 !== a && a.parentNode.removeChild(a)
                }, this.destroy = function () {
                    clearTimeout(o), this.off(), q.length = 0, c = null, f = null, g = null
                }
            };
            return f.prototype = c, f
        }.apply(b, d), !(void 0 !== e && (a.exports = e))
    }, function (a, b, c) {
        var d, e;
        d = [c(98), c(70), c(101), c(66), c(52), c(55), c(53)], e = function (a, b, d, e, f, g, h) {
            function i() {
                var a = {
                    LOAD_PROMISE_POLYFILL: {method: j, depends: []},
                    LOAD_BASE64_POLYFILL: {method: k, depends: []},
                    LOADED_POLYFILLS: {method: l, depends: ["LOAD_PROMISE_POLYFILL", "LOAD_BASE64_POLYFILL"]},
                    LOAD_PLUGINS: {method: m, depends: ["LOADED_POLYFILLS"]},
                    INIT_PLUGINS: {method: n, depends: ["LOAD_PLUGINS", "SETUP_VIEW"]},
                    LOAD_YOUTUBE: {method: v, depends: ["FILTER_PLAYLIST"]},
                    LOAD_SKIN: {method: u, depends: ["LOADED_POLYFILLS"]},
                    LOAD_PLAYLIST: {method: p, depends: ["LOADED_POLYFILLS"]},
                    FILTER_PLAYLIST: {method: q, depends: ["LOAD_PLAYLIST"]},
                    SETUP_VIEW: {method: w, depends: ["LOAD_SKIN"]},
                    SEND_READY: {method: x, depends: ["INIT_PLUGINS", "LOAD_YOUTUBE", "SETUP_VIEW"]}
                };
                return a
            }

            function j(a) {
                window.Promise ? a() : c.e(1, function (b) {
                        c(104), a()
                    })
            }

            function k(a) {
                window.btoa && window.atob ? a() : c.e(2, function (b) {
                        c(105), a()
                    })
            }

            function l(a) {
                a()
            }

            function m(b, c) {
                z = a.loadPlugins(c.get("id"), c.get("plugins")), z.on(h.COMPLETE, b), z.on(h.ERROR, f.partial(o, b)), z.load()
            }

            function n(a, b, c) {
                z.setupPlugins(c, b), a()
            }

            function o(a, b) {
                y(a, g.getString("S0232"), b.message)
            }

            function p(a, c) {
                var d = c.get("playlist");
                f.isString(d) ? (A = new b, A.on(h.QPLAYER_PLAYLIST_LOADED, function (b) {
                        c.set("playlist", b.playlist), a()
                    }), A.on(h.QPLAYER_ERROR, f.partial(r, a)), A.load(d)) : a()
            }

            function q(a, b, c, d, e) {
                var f = b.get("playlist"), g = e(f);
                g ? a() : r(a)
            }

            function r(a, b) {
                b && b.message ? y(a, g.getString("S0222"), b.message) : y(a, g.getString("S0260"), g.getString("S0233"))
            }

            function s(a, b) {
                if (f.contains(e.SkinsLoadable, a))return b + "skins/" + a + ".css"
            }

            function t(a) {
                for (var b = document.styleSheets, c = 0, d = b.length; c < d; c++)if (b[c].href === a)return !0;
                return !1
            }

            function u(a, b) {
                var c = b.get("skin"), g = b.get("skinUrl");
                if (f.contains(e.SkinsIncluded, c))return void a();
                if (g || (g = s(c, b.get("base"))), f.isString(g) && !t(g)) {
                    b.set("skin-loading", !0);
                    var i = !0, j = new d(g, i);
                    j.addEventListener(h.COMPLETE, function () {
                        b.set("skin-loading", !1)
                    }), j.addEventListener(h.ERROR, function () {
                        b.set("skin", "default"), b.set("skin-loading", !1)
                    }), j.load()
                }
                f.defer(function () {
                    a()
                })
            }

            function v(a, b) {
                var d = b.get("playlist"), e = f.some(d, function (a) {
                    var b = g.isYouTube(a.file, a.type);
                    if (b && !a.image) {
                        var c = a.file, d = g.youTubeID(c);
                        a.image = "//i.ytimg.com/vi/" + d + "/0.jpg"
                    }
                    return b
                });
                e ? c.e(3, function (b) {
                        var d = c(106);
                        d.register(window.qplayer), a()
                    }) : a()
            }

            function w(a, b, c, d) {
                d.setup(), a()
            }

            function x(a) {
                a({type: "complete"})
            }

            function y(a, b, c) {
                a({type: "error", msg: b, reason: c})
            }

            var z, A;
            return {getQueue: i, error: y}
        }.apply(b, d), !(void 0 !== e && (a.exports = e))
    }, function (a, b, c) {
        var d, e;
        d = [c(99), c(102), c(103), c(100)], e = function (a, b, c, d) {
            var e = {}, f = {}, g = function (c, d) {
                return f[c] = new a(new b(e), d), f[c]
            }, h = function (a, b, f, g) {
                var h = d.getPluginName(a);
                e[h] || (e[h] = new c(a)), e[h].registerPlugin(a, b, f, g), g && this.version.indexOf(g.Name) === -1 && (this.version.indexOf("with") === -1 ? this.version += " with { " : this.version += " , ", this.version = this.version.replace(" }", ""), this.version += g.name + ":" + g.version + " }")
            };
            return {loadPlugins: g, registerPlugin: h}
        }.apply(b, d), !(void 0 !== e && (a.exports = e))
    }, function (a, b, c) {
        var d, e;
        d = [c(100), c(55), c(53), c(54), c(52), c(101)], e = function (a, b, c, d, e, f) {
            function g(a, b, c) {
                return function () {
                    var d = a.getContainer().getElementsByClassName("qp-overlays")[0];
                    d && (d.appendChild(c), c.left = d.style.left, c.top = d.style.top, b.displayArea = d)
                }
            }

            function h(a) {
                function b() {
                    var b = a.displayArea;
                    b && a.resize(b.clientWidth, b.clientHeight)
                }

                return function () {
                    b(), setTimeout(b, 400)
                }
            }

            var i = function (i, j) {
                function k() {
                    q || (q = !0, p = f.loaderstatus.COMPLETE, o.trigger(c.COMPLETE))
                }

                function l() {
                    if (!s && (j && 0 !== e.keys(j).length || k(), !q)) {
                        var d = i.getPlugins();
                        n = e.after(r, k), e.each(j, function (e, g) {
                            var h = a.getPluginName(g), i = d[h], j = i.getJS(), k = i.getTarget(), l = i.getStatus();
                            l !== f.loaderstatus.LOADING && l !== f.loaderstatus.NEW && (j && !b.versionCheck(k) && o.trigger(c.ERROR, {message: b.getString("S0234")}), n())
                        })
                    }
                }

                function m(a) {
                    if (!s) {
                        var d = b.getString("S0218");
                        a.url && b.log(d, a.url), this.off(), this.trigger(c.ERROR, {message: d}), l()
                    }
                }

                var n, o = e.extend(this, d), p = f.loaderstatus.NEW, q = !1, r = e.size(j), s = !1;
                this.setupPlugins = function (c, d) {
                    var f = [], j = i.getPlugins(), k = d.get("plugins");
                    e.each(k, function (d, i) {
                        var l = a.getPluginName(i), m = j[l], n = m.getFlashPath(), o = m.getJS(), p = m.getURL();
                        if (n) {
                            var q = e.extend({name: l, swf: n, pluginmode: m.getPluginmode()}, d);
                            f.push(q)
                        }
                        var r = b.tryCatch(function () {
                            if (o && k[p]) {
                                var a = document.createElement("div");
                                a.id = c.id + "_" + l, a.className = "qp-plugin qp-reset";
                                var b = e.extend({}, k[p]), d = m.getNewInstance(c, b, a);
                                d.addToPlayer = g(c, d, a), d.resizeHandler = h(d), c.addPlugin(l, d, a)
                            }
                        });
                        r instanceof b.Error && b.log(b.getString("S0256") + l + ".")
                    }), d.set("flashPlugins", f)
                }, this.load = function () {
                    if (b.exists(j) && "object" !== b.typeOf(j))return void l();
                    p = f.loaderstatus.LOADING, e.each(j, function (a, d) {
                        if (b.exists(d)) {
                            var e = i.addPlugin(d);
                            e.on(c.COMPLETE, l), e.on(c.ERROR, m)
                        }
                    });
                    var a = i.getPlugins();
                    e.each(a, function (a) {
                        a.load()
                    }), l()
                }, this.destroy = function () {
                    s = !0, this.off()
                }, this.getStatus = function () {
                    return p
                }
            };
            return i
        }.apply(b, d), !(void 0 !== e && (a.exports = e))
    }, function (a, b, c) {
        var d, e;
        d = [c(59)], e = function (a) {
            var b = {}, c = b.pluginPathType = {ABSOLUTE: 0, RELATIVE: 1, CDN: 2};
            return b.getPluginPathType = function (b) {
                if ("string" == typeof b) {
                    b = b.split("?")[0];
                    var d = b.indexOf("://");
                    if (d > 0)return c.ABSOLUTE;
                    var e = b.indexOf("/"), f = a.extension(b);
                    return !(d < 0 && e < 0) || f && isNaN(f) ? c.RELATIVE : c.CDN
                }
            }, b.getPluginName = function (a) {
                return a.replace(/^(.*\/)?([^-]*)-?.*\.(swf|js)$/, "$2")
            }, b.getPluginVersion = function (a) {
                return a.replace(/[^-]*-?([^\.]*).*$/, "$1")
            }, b
        }.apply(b, d), !(void 0 !== e && (a.exports = e))
    }, function (a, b, c) {
        var d, e;
        d = [c(53), c(54), c(52)], e = function (a, b, c) {
            var d = {}, e = {NEW: 0, LOADING: 1, ERROR: 2, COMPLETE: 3}, f = function (f, g) {
                function h(b) {
                    k = e.ERROR, j.trigger(a.ERROR, b)
                }

                function i(b) {
                    k = e.COMPLETE, j.trigger(a.COMPLETE, b)
                }

                var j = c.extend(this, b), k = e.NEW;
                this.addEventListener = this.on, this.removeEventListener = this.off, this.makeStyleLink = function (a) {
                    var b = document.createElement("link");
                    return b.type = "text/css", b.rel = "stylesheet", b.href = a, b
                }, this.makeScriptTag = function (a) {
                    var b = document.createElement("script");
                    return b.src = a, b
                }, this.makeTag = g ? this.makeStyleLink : this.makeScriptTag, this.load = function () {
                    if (k === e.NEW) {
                        var b = d[f];
                        if (b && (k = b.getStatus(), k < 2))return b.on(a.ERROR, h), void b.on(a.COMPLETE, i);
                        var c = document.getElementsByTagName("head")[0] || document.documentElement, j = this.makeTag(f), l = !1;
                        j.onload = j.onreadystatechange = function (a) {
                            l || this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState || (l = !0, i(a), j.onload = j.onreadystatechange = null, c && j.parentNode && !g && c.removeChild(j))
                        }, j.onerror = h, c.insertBefore(j, c.firstChild), k = e.LOADING, d[f] = this
                    }
                }, this.getStatus = function () {
                    return k
                }
            };
            return f.loaderstatus = e, f
        }.apply(b, d), !(void 0 !== e && (a.exports = e))
    }, function (a, b, c) {
        var d, e;
        d = [c(100), c(103)], e = function (a, b) {
            var c = function (c) {
                this.addPlugin = function (d) {
                    var e = a.getPluginName(d);
                    return c[e] || (c[e] = new b(d)), c[e]
                }, this.getPlugins = function () {
                    return c
                }
            };
            return c
        }.apply(b, d), !(void 0 !== e && (a.exports = e))
    }, function (a, b, c) {
        var d, e;
        d = [c(55), c(100), c(53), c(54), c(101), c(52)], e = function (a, b, c, d, e, f) {
            var g = {FLASH: 0, JAVASCRIPT: 1, HYBRID: 2}, h = function (h) {
                function i() {
                    switch (b.getPluginPathType(h)) {
                        case b.pluginPathType.ABSOLUTE:
                            return h;
                        case b.pluginPathType.RELATIVE:
                            return a.getAbsolutePath(h, window.location.href)
                    }
                }

                function j() {
                    f.defer(function () {
                        q = e.loaderstatus.COMPLETE, p.trigger(c.COMPLETE)
                    })
                }

                function k() {
                    q = e.loaderstatus.ERROR, p.trigger(c.ERROR, {url: h})
                }

                var l, m, n, o, p = f.extend(this, d), q = e.loaderstatus.NEW;
                this.load = function () {
                    if (q === e.loaderstatus.NEW) {
                        if (h.lastIndexOf(".swf") > 0)return l = h, q = e.loaderstatus.COMPLETE, void p.trigger(c.COMPLETE);
                        if (b.getPluginPathType(h) === b.pluginPathType.CDN)return q = e.loaderstatus.COMPLETE, void p.trigger(c.COMPLETE);
                        q = e.loaderstatus.LOADING;
                        var a = new e(i());
                        a.on(c.COMPLETE, j), a.on(c.ERROR, k), a.load()
                    }
                }, this.registerPlugin = function (a, b, d, f) {
                    o && (clearTimeout(o), o = void 0), n = b, d && f ? (l = f, m = d) : "string" == typeof d ? l = d : "function" == typeof d ? m = d : d || f || (l = a), q = e.loaderstatus.COMPLETE, p.trigger(c.COMPLETE)
                }, this.getStatus = function () {
                    return q
                }, this.getPluginName = function () {
                    return b.getPluginName(h)
                }, this.getFlashPath = function () {
                    if (l)switch (b.getPluginPathType(l)) {
                        case b.pluginPathType.ABSOLUTE:
                            return l;
                        case b.pluginPathType.RELATIVE:
                            return h.lastIndexOf(".swf") > 0 ? a.getAbsolutePath(l, window.location.href) : a.getAbsolutePath(l, i())
                    }
                    return null
                }, this.getJS = function () {
                    return m
                }, this.getTarget = function () {
                    return n
                }, this.getPluginmode = function () {
                    return void 0 !== typeof l && void 0 !== typeof m ? g.HYBRID : void 0 !== typeof l ? g.FLASH : void 0 !== typeof m ? g.JAVASCRIPT : void 0
                }, this.getNewInstance = function (a, b, c) {
                    return new m(a, b, c)
                }, this.getURL = function () {
                    return h
                }
            };
            return h
        }.apply(b, d), !(void 0 !== e && (a.exports = e))
    }, , , , function (a, b, c) {
        var d, e;
        d = [c(71), c(108), c(109), c(55)], e = function (a, b, c, d) {
            var e = function (e, f) {
                function g(a) {
                    d.log("CAPTIONS(" + a + ")")
                }

                function h(a, b) {
                    p = [], q = {}, r = {}, s = 0;
                    var c, d, e, f = b.tracks;
                    for (e = 0; e < f.length; e++)c = f[e], d = c.kind.toLowerCase(), "captions" !== d && "subtitles" !== d || (c.file ? (j(c), k(c)) : c.data && j(c));
                    var g = m();
                    this.setCaptionsList(g), n()
                }

                function i(a, b) {
                    var c = null;
                    0 !== b && (c = p[b - 1]), a.set("captionsTrack", c)
                }

                function j(a) {
                    "number" != typeof a.id && (a.id = a.name || a.file || "cc" + p.length), a.data = a.data || [], a.label || (a.label = d.getString("S0257"), s++, s > 1 && (a.label += " (" + s + ")")), p.push(a), q[a.id] = a
                }

                function k(a) {
                    d.ajax(a.file, function (b) {
                        l(b, a)
                    }, g)
                }

                function l(e, f) {
                    var h, i = e.responseXML ? e.responseXML.firstChild : null;
                    if (i)for ("xml" === a.localName(i) && (i = i.nextSibling); i.nodeType === i.COMMENT_NODE;)i = i.nextSibling;
                    h = i && "tt" === a.localName(i) ? d.tryCatch(function () {
                            f.data = c(e.responseXML)
                        }) : d.tryCatch(function () {
                            f.data = b(e.responseText)
                        }), h instanceof d.Error && g(h.message + ": " + f.file)
                }

                function m() {
                    for (var a = [{id: "off", label: d.getString("S0262")}], b = 0; b < p.length; b++)a.push({id: p[b].id, label: p[b].label});
                    return a
                }

                function n() {
                    var a = 0, b = f.get("captionLabel");
                    if (b === d.getString("S0262"))return void f.set("captionsIndex", 0);
                    for (var c = 0; c < p.length; c++) {
                        var e = p[c];
                        if (b && b === e.label) {
                            a = c + 1;
                            break
                        }
                        e.default || e.defaulttrack ? a = c + 1 : e.autoselect
                    }
                    o(a)
                }

                function o(a) {
                    p.length ? f.setVideoSubtitleTrack(a, p) : f.set("captionsIndex", a)
                }

                f.on("change:playlistItem", h, this), f.on("change:captionsIndex", i, this), f.mediaController.on("subtitlesTracks", function (a) {
                    if (a.tracks.length) {
                        f.mediaController.off("meta"), p = [], q = {}, r = {}, s = 0;
                        for (var b = a.tracks || [], c = 0; c < b.length; c++) {
                            var d = b[c];
                            d.id = d.name, d.label = d.name || d.language, j(d)
                        }
                        var e = m();
                        this.setCaptionsList(e), n()
                    }
                }, this), f.mediaController.on("subtitlesTrackData", function (a) {
                    var b = q[a.name];
                    if (b) {
                        b.source = a.source;
                        for (var c = a.captions || [], d = !1, e = 0; e < c.length; e++) {
                            var f = c[e], g = a.name + "_" + f.begin + "_" + f.end;
                            r[g] || (r[g] = f, b.data.push(f), d = !0)
                        }
                        d && b.data.sort(function (a, b) {
                            return a.begin - b.begin
                        })
                    }
                }, this), f.mediaController.on("meta", function (a) {
                    var b = a.metadata;
                    if (b && "textdata" === b.type) {
                        var c = q[b.trackid];
                        if (!c) {
                            c = {kind: "captions", id: b.trackid, data: []}, j(c);
                            var d = m();
                            this.setCaptionsList(d)
                        }
                        var e = a.position || f.get("position"), g = "" + Math.round(10 * e) + "_" + b.text, h = r[g];
                        h || (h = {begin: e, text: b.text}, r[g] = h, c.data.push(h))
                    }
                }, this);
                var p = [], q = {}, r = {}, s = 0;
                this.getCurrentIndex = function () {
                    return f.get("captionsIndex")
                }, this.getCaptionsList = function () {
                    return f.get("captionsList")
                }, this.setCaptionsList = function (a) {
                    f.set("captionsList", a)
                }
            };
            return e
        }.apply(b, d), !(void 0 !== e && (a.exports = e))
    }, function (a, b, c) {
        var d, e;
        d = [c(55), c(59)], e = function (a, b) {
            function c(a) {
                var b = {}, c = a.split("\r\n");
                1 === c.length && (c = a.split("\n"));
                var e = 1;
                if (c[0].indexOf(" --> ") > 0 && (e = 0), c.length > e + 1 && c[e + 1]) {
                    var f = c[e], g = f.indexOf(" --> ");
                    g > 0 && (b.begin = d(f.substr(0, g)), b.end = d(f.substr(g + 5)), b.text = c.slice(e + 1).join("<br/>"))
                }
                return b
            }

            var d = a.seconds;
            return function (d) {
                var e = [];
                d = b.trim(d);
                var f = d.split("\r\n\r\n");
                1 === f.length && (f = d.split("\n\n"));
                for (var g = 0; g < f.length; g++)if ("WEBVTT" !== f[g]) {
                    var h = c(f[g]);
                    h.text && e.push(h)
                }
                if (!e.length)throw new Error(a.getString("S0236"));
                return e
            }
        }.apply(b, d), !(void 0 !== e && (a.exports = e))
    }, function (a, b, c) {
        var d, e;
        d = [c(55), c(59)], e = function (a, b) {
            function c(a) {
                a || d()
            }

            function d() {
                throw new Error(a.getString("S0237"))
            }

            var e = b.seconds;
            return function (a) {
                c(a);
                var f = [], g = a.getElementsByTagName("p");
                c(g), g.length || (g = a.getElementsByTagName("tt:p"), g.length || (g = a.getElementsByTagName("tts:p")));
                for (var h = 0; h < g.length; h++) {
                    var i = g[h], j = i.innerHTML || i.textContent || i.text || "", k = b.trim(j).replace(/>\s+</g, "><").replace(/tts?:/g, "");
                    if (k) {
                        var l = i.getAttribute("begin"), m = i.getAttribute("dur"), n = i.getAttribute("end"), o = {begin: e(l), text: k};
                        n ? o.end = e(n) : m && (o.end = o.begin + e(m)), f.push(o)
                    }
                }
                return f.length || d(), f
            }
        }.apply(b, d), !(void 0 !== e && (a.exports = e))
    }, function (a, b, c) {
        var d, e;
        d = [c(75), c(76), c(52), c(84)], e = function (a, b, c, d) {
            function e(a, b) {
                for (var c = 0; c < a.length; c++) {
                    var d = a[c], e = b.choose(d);
                    if (e)return d.type
                }
                return null
            }

            var f = function (b) {
                return b = c.isArray(b) ? b : [b], c.compact(c.map(b, a))
            };
            f.filterPlaylist = function (a, b, d, e, f) {
                var i = [];
                return c.each(a, function (a) {
                    a = c.extend({}, a), a.allSources = g(a.sources, d, a.drm || e, a.preload || f), a.sources = h(a.allSources, b), a.sources.length && (a.file = a.sources[0].file, (a.preload || f) && (a.preload = a.preload || f), i.push(a))
                }), i
            };
            var g = function (a, d, e, f) {
                return c.compact(c.map(a, function (a) {
                    if (c.isObject(a))return void 0 !== d && null !== d && (a.androidhls = d), (a.drm || e) && (a.drm = a.drm || e), (a.preload || f) && (a.preload = a.preload || f), b(a)
                }))
            }, h = function (a, b) {
                b && b.choose || (b = new d({primary: b ? "flash" : null}));
                var f = e(a, b);
                return c.where(a, {type: f})
            };
            return f
        }.apply(b, d), !(void 0 !== e && (a.exports = e))
    }, function (a, b, c) {
        var d, e;
        d = [], e = function () {
            return function (a, b) {
                a.getPlaylistIndex = a.getItem;
                var c = {
                    qPlay: b.play,
                    qPause: b.pause,
                    qSetMute: b.setMute,
                    qLoad: b.load,
                    qPlaylistItem: b.item,
                    qGetAudioTracks: b.getAudioTracks,
                    qDetachMedia: b.detachMedia,
                    qAttachMedia: b.attachMedia,
                    qAddEventListener: b.on,
                    qRemoveEventListener: b.off,
                    qStop: b.stop,
                    qSeek: b.seek,
                    qSetVolume: b.setVolume,
                    qPlaylistNext: b.next,
                    qPlaylistPrev: b.prev,
                    qSetFullscreen: b.setFullscreen,
                    qGetQualityLevels: b.getQualityLevels,
                    qGetCurrentQuality: b.getCurrentQuality,
                    qSetCurrentQuality: b.setCurrentQuality,
                    qSetCurrentAudioTrack: b.setCurrentAudioTrack,
                    qGetCurrentAudioTrack: b.getCurrentAudioTrack,
                    qGetCaptionsList: b.getCaptionsList,
                    qGetCurrentCaptions: b.getCurrentCaptions,
                    qSetCurrentCaptions: b.setCurrentCaptions,
                    qSetCues: b.setCues
                };
                a.callInternal = function (a) {
                    console.log("You are using the deprecated callInternal method for " + a);
                    var d = Array.prototype.slice.call(arguments, 1);
                    c[a].apply(b, d)
                }
            }
        }.apply(b, d), !(void 0 !== e && (a.exports = e))
    }, function (a, b, c) {
        var d, e;
        d = [c(55), c(53), c(54), c(82), c(135), c(136), c(137), c(139), c(113), c(141), c(155), c(156), c(158), c(52), c(159)], e = function (a, b, c, d, e, f, g, h, i, j, k, l, m, n, o) {
            var p = a.style, q = a.bounds, r = a.isMobile(), s = ["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange", "MSFullscreenChange"], t = function (t, u) {
                function v() {
                    V()
                }

                function w(b) {
                    var c = a.between(u.get("position") + b, 0, u.get("duration"));
                    t.seek(c)
                }

                function x(b) {
                    var c = a.between(u.get("volume") + b, 0, 100);
                    t.setVolume(c)
                }

                function y(a) {
                    return !a.ctrlKey && !a.metaKey && !!u.get("controls")
                }

                function z(a) {
                    var b = la.getAttribute("class"), c = b.indexOf("qp-flag-box-open");
                    if (c = c > -1, !y(a) || c)return !0;
                    switch (Na || ca(), a.keyCode) {
                        case 27:
                            t.setFullscreen(!1);
                            break;
                        case 13:
                        case 32:
                            t.play({reason: "interaction"});
                            break;
                        case 37:
                            Na || w(-5);
                            break;
                        case 39:
                            Na || w(5);
                            break;
                        case 38:
                            x(10);
                            break;
                        case 40:
                            x(-10);
                            break;
                        case 77:
                            t.setMute();
                            break;
                        case 70:
                            t.setFullscreen();
                            break;
                        default:
                            if (a.keyCode >= 48 && a.keyCode <= 59) {
                                var d = a.keyCode - 48, e = d / 10 * u.get("duration");
                                t.seek(e)
                            }
                    }
                    return /13|32|37|38|39|40/.test(a.keyCode) ? (a.preventDefault(), !1) : void 0
                }

                function A() {
                    Ra = !1, a.removeClass(la, "qp-no-focus")
                }

                function B() {
                    Ra = !0, a.addClass(la, "qp-no-focus")
                }

                function C() {
                    Ra || A(), Na || ca()
                }

                function D() {
                    var a = q(la), c = Math.round(a.width), d = Math.round(a.height);
                    return document.body.contains(la) ? c && d && (c === pa && d === qa || (pa = c, qa = d, clearTimeout(Pa), Pa = setTimeout(Z, 50), u.set("containerWidth", c), u.set("containerHeight", d), Sa.trigger(b.QPLAYER_RESIZE, {
                            width: c,
                            height: d
                        }))) : (window.removeEventListener("resize", D), r && window.removeEventListener("orientationchange", D)), a
                }

                function E(b, c) {
                    c = c || !1, a.toggleClass(la, "qp-flag-casting", c)
                }

                function F(b, c) {
                    a.toggleClass(la, "qp-flag-cast-available", c), a.toggleClass(ma, "qp-flag-cast-available", c)
                }

                function G(b, c, d) {
                    d && a.removeClass(la, "qp-stretch-" + d), a.addClass(la, "qp-stretch-" + c)
                }

                function H(b, c) {
                    a.toggleClass(la, "qp-flag-compact-player", c)
                }

                function I(a) {
                    a && !r && (a.element().addEventListener("mousemove", L, !1), a.element().addEventListener("mouseout", M, !1))
                }

                function J() {
                    u.get("state") !== d.IDLE && u.get("state") !== d.COMPLETE && u.get("state") !== d.PAUSED || !u.get("controls") || t.play({reason: "interaction"}), Oa ? ba() : ca()
                }

                function K(a) {
                    a.link ? (t.pause(!0), t.setFullscreen(!1), window.open(a.link, a.linktarget)) : u.get("controls") && t.play({reason: "interaction"})
                }

                function L() {
                    clearTimeout(Ka)
                }

                function M() {
                    ca()
                }

                function N(a) {
                    Sa.trigger(a.type, a)
                }

                function O(b, c) {
                    c ? (Ba && Ba.destroy(), a.addClass(la, "qp-flag-flash-blocked")) : (Ba && Ba.setup(u, la, la), a.removeClass(la, "qp-flag-flash-blocked"))
                }

                function P() {
                    u.get("controls") && t.setFullscreen()
                }

                function Q() {
                    var b = !0;
                    la.getAttribute("class").indexOf("qp-flag-rightclick-open") > -1 && (a.removeClass(la, "qp-flag-rightclick-open"), b = !1);
                    var c;
                    return c = la.querySelector(".qp-overlays-playlist"), c.className.indexOf("qp-open") > -1 && (b = !1), b
                }

                function R() {
                    ua = new f(u, na), ua.on("click", function () {
                        if (Q()) {
                            var a = ua.getEvent;
                            a.method = a.type, a.type = b.QPLAYER_DISPLAY_CLICK, N(a), u.get("controls") && t.play({reason: "interaction"})
                        }
                    }), ua.on("tap", function () {
                        var a = ua.getEvent;
                        a.method = a.type, a.type = b.QPLAYER_DISPLAY_CLICK, N(a), J()
                    }), ua.on("doubleClick", P), ua.on("move", ca);
                    var c = new g(u);
                    c.on("click", function () {
                        Q() && (N({type: b.QPLAYER_DISPLAY_CLICK}), t.play({reason: "interaction"}))
                    }), c.on("tap", function () {
                        var a = ua.getEvent;
                        a.eventType = b.QPLAYER_DISPLAY_CLICK, N(a.eventType), J()
                    }), a.isChrome() && c.el.addEventListener("mousedown", function () {
                        var a = u.getVideo(), b = a && 0 === a.getName().name.indexOf("flash");
                        if (b) {
                            var d = function () {
                                document.removeEventListener("mouseup", d), c.el.style.pointerEvents = "auto"
                            };
                            this.style.pointerEvents = "none", document.addEventListener("mouseup", d)
                        }
                    }), ma.appendChild(c.element()), wa = new h(u), xa = new i(u), xa.on(b.QPLAYER_LOGO_CLICK, K);
                    var d = document.createElement("div");
                    d.className = "qp-controls-right qp-reset", u.get("logo") && d.appendChild(xa.element()), d.appendChild(wa.element()), ma.appendChild(d), za = new e(u), za.setup(u.get("captions")), ma.parentNode.insertBefore(za.element(), ya.element());
                    var k = u.get("height");
                    r && ("string" == typeof k || k >= 1.5 * Ma) ? a.addClass(la, "qp-flag-touch") : (Ba = new l, Ba.setup(u, la, la)), sa = new j(t, u), sa.on(b.QPLAYER_USER_ACTION, ca), u.on("change:scrubbing", T), u.on("change:compactUI", H), ma.appendChild(sa.element()), la.addEventListener("focus", C), la.addEventListener("blur", A), la.addEventListener("keydown", z), la.onmousedown = B
                }

                function S(b) {
                    return b.get("state") === d.PAUSED ? void b.once("change:state", S) : void(b.get("scrubbing") === !1 && a.removeClass(la, "qp-flag-dragging"))
                }

                function T(b, c) {
                    b.off("change:state", S), c ? a.addClass(la, "qp-flag-dragging") : S(b)
                }

                function U(b, c, d) {
                    var e, f = la.className;
                    d = !!d, d && (f = f.replace(/\s*aspectMode/, ""), la.className !== f && (la.className = f), a.style(la, {display: "block"}, d)), a.exists(b) && a.exists(c) && (u.set("width", b), u.set("height", c)), e = {width: b}, a.hasClass(la, "qp-flag-aspect-mode") || (e.height = c), p(la, e, !0), xa && xa.offset(sa && xa.position().indexOf("bottom") >= 0 ? sa.element().clientHeight : 0), W(c), Z(b, c), V(), c.toString().indexOf("%") > -1 && v()
                }

                function V() {
                    var a = "qp-min-width", b = "qp-max-width", c = la.getAttribute("class"), d = la.clientWidth;
                    d > 1600 ? (a += "1600", b = "") : d <= 1600 && d > 1200 ? (a += "1200", b += "1600") : d <= 1200 && d > 1024 ? (a += "1024", b += "1200") : d <= 1024 && d > 900 ? (a += "900", b += "1024") : d <= 900 && d > 768 ? (a += "768", b += "900") : d <= 768 && d > 600 ? (a += "600", b += "768") : d <= 600 && d > 480 ? (a += "480", b += "600") : d <= 480 && d > 320 ? (a += "320", b += "480") : d <= 320 && (a = "", b += "320"), c = c.replace(/(\sqp-(max|min)-width(\d+)?)/g, ""), "" !== a && (c += " " + a), "" !== b && (c += " " + b), la.setAttribute("class", c)
                }

                function W(b) {
                    if (Aa = X(b), sa && !Aa) {
                        var c = Na ? ra : u;
                        ka(c, c.get("state"))
                    }
                    a.toggleClass(la, "qp-flag-audio-player", Aa)
                }

                function X(a) {
                    if (u.get("aspectratio"))return !1;
                    if (n.isString(a) && a.indexOf("%") > -1)return !1;
                    var b = n.isNumber(a) ? a : u.get("containerHeight");
                    return Y(b)
                }

                function Y(a) {
                    return a && a <= Ma * (r ? 1.75 : 1)
                }

                function Z(b, c) {
                    if (!b || isNaN(Number(b))) {
                        if (!na)return;
                        b = na.clientWidth
                    }
                    if (!c || isNaN(Number(c))) {
                        if (!na)return;
                        c = na.clientHeight
                    }
                    a.isMSIE(9) && document.all && !window.atob && (b = c = "100%");
                    var d = u.getVideo();
                    if (d) {
                        var e = d.resize(b, c, u.get("stretching"));
                        e && (clearTimeout(Pa), Pa = setTimeout(Z, 250)), za.resize(), sa.checkCompactMode(b), V()
                    }
                }

                function $() {
                    if (Qa) {
                        var a = document.fullscreenElement || document.webkitCurrentFullScreenElement || document.mozFullScreenElement || document.msFullscreenElement;
                        return !(!a || a.id !== u.get("id"))
                    }
                    return Na ? ra.getVideo().getFullScreen() : u.getVideo().getFullScreen()
                }

                function _(a) {
                    var b = u.get("fullscreen"), c = void 0 !== a.qstate ? a.qstate : $();
                    b !== c && u.set("fullscreen", c), clearTimeout(Pa), Pa = setTimeout(Z, 200)
                }

                function aa(b, c) {
                    a.removeClass(b, "qp-flag-fullscreen"), c ? (a.addClass(b, "qp-flag-fullscreen"), p(document.body, {"overflow-y": "hidden"}), ca()) : p(document.body, {"overflow-y": ""}), Z()
                }

                function ba() {
                    Oa = !1, clearTimeout(Ka), sa.hideComponents(), a.addClass(la, "qp-flag-user-inactive"), a.removeClass(Ja, "qp-open"), clearInterval(Ia)
                }

                function ca() {
                    Oa || (a.removeClass(la, "qp-flag-user-inactive"), sa.checkCompactMode(na.clientWidth)), Oa = !0, clearTimeout(Ka), Ka = setTimeout(ba, La)
                }

                function da() {
                    t.setFullscreen(!1)
                }

                function ea() {
                    va && va.setState(u.get("state")), fa(u, u.mediaModel.get("mediaType")), u.mediaModel.on("change:mediaType", fa, this)
                }

                function fa(b, c) {
                    var d = "audio" === c;
                    a.toggleClass(la, "qp-flag-media-audio", d)
                }

                function ga(b, c) {
                    var d = "LIVE" === a.adaptiveType(c);
                    a.toggleClass(la, "qp-flag-live", d), Sa.setAltText("")
                }

                function ha() {
                    a.toggleClass(la, "qp-flag-live", "LIVE"), Sa.setAltText("")
                }

                function ia(a, b) {
                    return b ? void(b.name ? ya.updateText(b.name, b.message) : ya.updateText(b.message, "")) : void ya.playlistItem(a, a.get("playlistItem"))
                }

                function ja() {
                    var a = u.getVideo();
                    return !!a && a.isCaster
                }

                function ka(b, c) {
                    if (a.removeClass(la, "qp-state-" + Ca), a.addClass(la, "qp-state-" + c), Ca = c, ja())return void a.addClass(na, "qp-media-show");
                    switch (c) {
                        case d.PLAYING:
                            a.removeClass(la, "qp-frist-start"), Z();
                            break;
                        case d.PAUSED:
                            ca()
                    }
                }

                var la, ma, na, oa, pa, qa, ra, sa, ta, ua, va, wa, xa, ya, za, Aa, Ba, Ca, Da, Ea, Fa, Ga, Ha, Ia, Ja, Ka = -1, La = r ? 4e3 : 2e3, Ma = 40, Na = !1, Oa = !1, Pa = -1, Qa = !1, Ra = !1, Sa = n.extend(this, c);
                this.model = u, this.api = t;
                var Ta = u.get("width"), Ua = u.get("height");
                la = a.createElement(o({id: u.get("id")})), Ja = la.getElementsByClassName("qp-overlays-playlist")[0], a.isIE() && a.addClass(la, "qp-ie"), p(la, {
                    width: Ta.toString().indexOf("%") > 0 ? Ta : Ta + "px",
                    height: Ua.toString().indexOf("%") > 0 ? Ua : Ua + "px"
                }), Ea = la.requestFullscreen || la.webkitRequestFullscreen || la.webkitRequestFullScreen || la.mozRequestFullScreen || la.msRequestFullscreen, Fa = document.exitFullscreen || document.webkitExitFullscreen || document.webkitCancelFullScreen || document.mozCancelFullScreen || document.msExitFullscreen, Qa = Ea && Fa, this.onChangeSkin = function (b, c, d) {
                    d && a.removeClass(la, "qp-skin-" + d), c && a.addClass(la, "qp-skin-" + c)
                }, this.handleColorOverrides = function () {
                    function b(b, d, e) {
                        if (e) {
                            b = a.prefix(b, "#" + c + " ");
                            var f = {};
                            f[d] = e, a.css(b.join(", "), f)
                        }
                    }

                    var c = u.get("id"), d = u.get("skinColorActive"), e = u.get("skinColorInactive"), f = u.get("skinColorBackground");
                    b([".qp-toggle", ".qp-button-color:hover"], "color", d), b([".qp-active-option", ".qp-progress", ".qp-playlist-container .qp-option.qp-active-option", ".qp-playlist-container .qp-option:hover"], "background", d), b([".qp-text", ".qp-option", ".qp-button-color", ".qp-toggle.qp-off", ".qp-tooltip-title", ".qp-skip .qp-skip-icon", ".qp-playlist-container .qp-icon"], "color", e), b([".qp-cue", ".qp-knob"], "background", e), b([".qp-playlist-container .qp-option"], "border-bottom-color", e), b([".qp-background-color", ".qp-tooltip-title", ".qp-playlist", ".qp-playlist-container .qp-option"], "background", f), b([".qp-playlist-container ::-webkit-scrollbar"], "border-color", f)
                }, this.setup = function () {
                    this.handleColorOverrides(), u.get("skin-loading") === !0 && (a.addClass(la, "qp-flag-skin-loading"), u.once("change:skin-loading", function () {
                        a.removeClass(la, "qp-flag-skin-loading")
                    })), this.onChangeSkin(u, u.get("skin"), ""), u.on("change:skin", this.onChangeSkin, this), na = la.getElementsByClassName("qp-media")[0], ma = la.getElementsByClassName("qp-controls")[0], oa = la.getElementsByClassName("qp-aspect")[0];
                    var c = la.getElementsByClassName("qp-preview")[0];
                    ta = new k(u), ta.setup(c);
                    var e = la.getElementsByClassName("qp-title")[0];
                    ya = new m(u), ya.setup(e), R(), ca(), u.set("mediaContainer", na), u.mediaController.on("fullscreenchange", _);
                    for (var f = s.length; f--;)document.addEventListener(s[f], _, !1);
                    window.removeEventListener("resize", D), window.addEventListener("resize", D, !1), r && (window.removeEventListener("orientationchange", D),
                        window.addEventListener("orientationchange", D, !1)), u.on("change:errorEvent", ia), u.on("change:controls", Va), Va(u, u.get("controls")), u.on("change:state", ka), u.on("change:duration", ga, this), u.on("change:flashBlocked", O), O(u, u.get("flashBlocked")), t.onPlaylistComplete(da), t.onPlaylistItem(ea), u.on("change:castAvailable", F), F(u, u.get("castAvailable")), u.on("change:castActive", E), E(u, u.get("castActive")), u.get("stretching") && G(u, u.get("stretching")), u.on("change:stretching", G), ka(u, d.IDLE), u.on("change:fullscreen", Wa), I(sa), I(xa), u.get("aspectratio") && (a.addClass(la, "qp-flag-aspect-mode"), a.style(oa, {"padding-top": u.get("aspectratio")})), t.on(b.QPLAYER_READY, function () {
                        v(), U(u.get("width"), u.get("height")), la.parentNode.onresize = v, D()
                    })
                };
                var Va = function (b, c) {
                    if (c) {
                        var d = Na ? ra.get("state") : u.get("state");
                        ka(b, d)
                    }
                    a.toggleClass(la, "qp-flag-controls-disabled", !c)
                }, Wa = function (b, c) {
                    var d = u.getVideo();
                    Qa ? (c ? Ea.apply(la) : Fa.apply(document), aa(la, c)) : a.isIE() ? aa(la, c) : (ra && ra.getVideo() && ra.getVideo().setFullscreen(c), d.setFullscreen(c)), d && 0 === d.getName().name.indexOf("flash") && d.setFullscreen(c)
                };
                this.resize = function (a, b) {
                    var c = !0;
                    Ga = a, Ha = b, U(a, b, c), D()
                }, this.resizeMedia = Z, this.reset = function () {
                    document.contains(la) && la.parentNode.replaceChild(Da, la), a.emptyElement(la)
                }, a.setLive = ha, this.setupInstream = function (b) {
                    this.instreamModel = ra = b, ra.on("change:controls", Va, this), ra.on("change:state", ka, this), Na = !0, a.addClass(la, "qp-flag-ads"), ca()
                }, this.setAltText = function (a) {
                    sa.setAltText(a)
                }, this.useExternalControls = function () {
                    a.addClass(la, "qp-flag-ads-hide-controls")
                }, this.destroyInstream = function () {
                    if (Na = !1, ra && (ra.off(null, null, this), ra = null), this.setAltText(""), a.removeClass(la, "qp-flag-ads"), a.removeClass(la, "qp-flag-ads-hide-controls"), u.getVideo) {
                        var b = u.getVideo();
                        b.setContainer(na)
                    }
                    ga(u, u.get("duration")), ua.revertAlternateClickHandlers()
                }, this.addCues = function (a) {
                    sa && sa.addCues(a)
                }, this.clickHandler = function () {
                    return ua
                }, this.controlsContainer = function () {
                    return ma
                }, this.getContainer = this.element = function () {
                    return la
                }, this.getSafeRegion = function (b) {
                    var c = {x: 0, y: 0, width: u.get("containerWidth") || 0, height: u.get("containerHeight") || 0}, d = u.get("dock");
                    return d && d.length && u.get("controls") && (c.y = wa.element().clientHeight, c.height -= c.y), b = b || !a.exists(b), b && u.get("controls") && (c.height -= sa.element().clientHeight), c
                }, this.destroy = function () {
                    window.removeEventListener("resize", D), window.removeEventListener("orientationchange", D);
                    for (var b = s.length; b--;)document.removeEventListener(s[b], _, !1);
                    u.mediaController && u.mediaController.off("fullscreenchange", _), la.removeEventListener("keydown", z, !1), Ba && Ba.destroy(), va && (u.off("change:state", va.statusDelegate), va.destroy(), va = null), Na && this.destroyInstream(), a.clearCss("#" + u.get("id"))
                }, Ja.addEventListener("mousemove", ca), Ja.addEventListener("mouseenter", function () {
                    Ia = setInterval(ca, 1e3)
                }), Ja.addEventListener("mouseleave", function () {
                    clearInterval(Ia)
                })
            };
            return t
        }.apply(b, d), !(void 0 !== e && (a.exports = e))
    }, function (a, b, c) {
        var d, e;
        d = [c(114), c(55), c(53), c(52), c(54), c(115)], e = function (a, b, c, d, e, f) {
            var g = b.style, h = {linktarget: "_blank", margin: 8, hide: !1, position: "top-right"}, i = function (i) {
                function j() {
                    n = d.extend({}, h, p), n.hide = "true" === n.hide.toString(), k()
                }

                function k() {
                    if (m = b.createElement(f({file: n.file})), n.file) {
                        n.hide && b.addClass(m, "qp-hide");
                        var c = /(\w+)-(\w+)/.exec(n.position), d = {top: "auto", right: "auto", bottom: "auto", left: "auto"};
                        3 === c.length && (d[c[1]] = n.margin, d[c[2]] = n.margin, g(m, d));
                        var e = new a(m);
                        e.on("click tap", l)
                    }
                }

                function l(a) {
                    b.exists(a) && a.stopPropagation && a.stopPropagation(), o.trigger(c.QPLAYER_LOGO_CLICK, {link: n.link, linktarget: n.linktarget})
                }

                var m, n, o = this, p = d.extend({}, i.get("logo"));
                return d.extend(this, e), this.element = function () {
                    return m
                }, this.offset = function (a) {
                    g(m, {marginBottom: a})
                }, this.position = function () {
                    return n.position
                }, this.margin = function () {
                    return parseInt(n.margin, 10)
                }, j(), this
            };
            return i
        }.apply(b, d), !(void 0 !== e && (a.exports = e))
    }, function (a, b, c) {
        var d, e;
        d = [c(54), c(53), c(52), c(55)], e = function (a, b, c, d) {
            function e(a, b) {
                return /touch/.test(a.type) ? (a.originalEvent || a).changedTouches[0]["page" + b] : a["page" + b]
            }

            function f(a) {
                var b = a || window.event;
                return a instanceof MouseEvent && ("which" in b ? 3 === b.which : "button" in b && 2 === b.button)
            }

            function g(a, b, c) {
                var d;
                return d = b instanceof MouseEvent || !b.touches && !b.changedTouches ? b : b.touches && b.touches.length ? b.touches[0] : b.changedTouches[0], {
                    type: a,
                    target: b.target,
                    currentTarget: c,
                    pageX: d.pageX,
                    pageY: d.pageY
                }
            }

            function h(a) {
                (a instanceof MouseEvent || a instanceof window.TouchEvent) && (a.preventManipulation && a.preventManipulation(), a.cancelable && a.preventDefault && a.preventDefault())
            }

            var i = !c.isUndefined(window.PointerEvent), j = !i && d.isMobile(), k = !i && !j, l = d.isFF() && d.isOSX(), m = function (a, d) {
                function j(a) {
                    (k || i && "touch" !== a.pointerType) && r(b.touchEvents.OVER, a)
                }

                function m(a) {
                    (k || i && "touch" !== a.pointerType) && r(b.touchEvents.MOVE, a)
                }

                function n(c) {
                    (k || i && "touch" !== c.pointerType && !a.contains(document.elementFromPoint(c.x, c.y))) && r(b.touchEvents.OUT, c)
                }

                function o(b) {
                    s = b.target, w = e(b, "X"), x = e(b, "Y"), f(b) || (i ? b.isPrimary && (d.preventScrolling && (t = b.pointerId, a.setPointerCapture(t)), a.addEventListener("pointermove", p), a.addEventListener("pointercancel", q), a.addEventListener("pointerup", q)) : k && (document.addEventListener("mousemove", p), l && "object" === b.target.nodeName.toLowerCase() ? a.addEventListener("click", q) : document.addEventListener("mouseup", q)), s.addEventListener("touchmove", p), s.addEventListener("touchcancel", q), s.addEventListener("touchend", q))
                }

                function p(a) {
                    var c = b.touchEvents, f = 6;
                    if (v) r(c.DRAG, a); else {
                        var g = e(a, "X"), i = e(a, "Y"), j = g - w, k = i - x;
                        j * j + k * k > f * f && (r(c.DRAG_START, a), v = !0, r(c.DRAG, a))
                    }
                    d.preventScrolling && h(a)
                }

                function q(c) {
                    var e = b.touchEvents;
                    i ? (d.preventScrolling && a.releasePointerCapture(t), a.removeEventListener("pointermove", p), a.removeEventListener("pointercancel", q), a.removeEventListener("pointerup", q)) : k && (document.removeEventListener("mousemove", p), document.removeEventListener("mouseup", q)), s.removeEventListener("touchmove", p), s.removeEventListener("touchcancel", q), s.removeEventListener("touchend", q), v ? r(e.DRAG_END, c) : d.directSelect && c.target !== a || c.type.indexOf("cancel") !== -1 || (i && c instanceof window.PointerEvent ? "touch" === c.pointerType ? r(e.TAP, c) : r(e.CLICK, c) : k ? r(e.CLICK, c) : (r(e.TAP, c), h(c))), s = null, v = !1
                }

                function r(a, e) {
                    var f;
                    if (d.enableDoubleTap && (a === b.touchEvents.CLICK || a === b.touchEvents.TAP))if (c.now() - y < z) {
                        var h = a === b.touchEvents.CLICK ? b.touchEvents.DOUBLE_CLICK : b.touchEvents.DOUBLE_TAP;
                        f = g(h, e, u), A.trigger(h, f), y = 0
                    } else y = c.now();
                    f = g(a, e, u), A.trigger(a, f)
                }

                var s, t, u = a, v = !1, w = 0, x = 0, y = 0, z = 300;
                d = d || {}, i ? (a.addEventListener("pointerdown", o), d.useHover && (a.addEventListener("pointerover", j), a.addEventListener("pointerout", n)), d.useMove && a.addEventListener("pointermove", m)) : k && (a.addEventListener("mousedown", o), d.useHover && (a.addEventListener("mouseover", j), a.addEventListener("mouseout", n)), d.useMove && a.addEventListener("mousemove", m)), a.addEventListener("touchstart", o);
                var A = this;
                return this.triggerEvent = r, this.destroy = function () {
                    a.removeEventListener("touchstart", o), a.removeEventListener("mousedown", o), s && (s.removeEventListener("touchmove", p), s.removeEventListener("touchcancel", q), s.removeEventListener("touchend", q)), i && (d.preventScrolling && a.releasePointerCapture(t), a.removeEventListener("pointerover", j), a.removeEventListener("pointerdown", o), a.removeEventListener("pointermove", p), a.removeEventListener("pointermove", m), a.removeEventListener("pointercancel", q), a.removeEventListener("pointerout", n), a.removeEventListener("pointerup", q)), a.removeEventListener("click", q), a.removeEventListener("mouseover", j), a.removeEventListener("mousemove", m), a.removeEventListener("mouseout", n), document.removeEventListener("mousemove", p), document.removeEventListener("mouseup", q)
                }, this
            };
            return c.extend(m.prototype, a), m
        }.apply(b, d), !(void 0 !== e && (a.exports = e))
    }, function (a, b, c) {
        var d = c(116);
        a.exports = (d.default || d).template({
            1: function (a, b, c, d, e) {
                var f;
                return 'src="' + a.escapeExpression((f = null != (f = c.file || (null != b ? b.file : b)) ? f : c.helperMissing, "function" == typeof f ? f.call(null != b ? b : {}, {
                            name: "file",
                            hash: {},
                            data: e
                        }) : f)) + '"'
            }, compiler: [7, ">= 4.0.0"], main: function (a, b, c, d, e) {
                var f;
                return '<div class="qp-logo qp-reset">\r\n    <img class="qp-logo-image" ' + (null != (f = c.if.call(null != b ? b : {}, null != b ? b.file : b, {
                        name: "if",
                        hash: {},
                        fn: a.program(1, e, 0),
                        inverse: a.noop,
                        data: e
                    })) ? f : "") + ">\r\n</div>"
            }, useData: !0
        })
    }, function (a, b, c) {
        a.exports = c(117).default
    }, function (a, b, c) {
        "use strict";
        function d(a) {
            return a && a.__esModule ? a : {default: a}
        }

        function e(a) {
            if (a && a.__esModule)return a;
            var b = {};
            if (null != a)for (var c in a)Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]);
            return b.default = a, b
        }

        function f() {
            var a = new h.HandlebarsEnvironment;
            return n.extend(a, h), a.SafeString = j.default, a.Exception = l.default, a.Utils = n, a.escapeExpression = n.escapeExpression, a.VM = p, a.template = function (b) {
                return p.template(b, a)
            }, a
        }

        b.__esModule = !0;
        var g = c(118), h = e(g), i = c(132), j = d(i), k = c(120), l = d(k), m = c(119), n = e(m), o = c(133), p = e(o), q = c(134), r = d(q), s = f();
        s.create = f, r.default(s), s.default = s, b.default = s, a.exports = b.default
    }, function (a, b, c) {
        "use strict";
        function d(a) {
            return a && a.__esModule ? a : {default: a}
        }

        function e(a, b, c) {
            this.helpers = a || {}, this.partials = b || {}, this.decorators = c || {}, i.registerDefaultHelpers(this), j.registerDefaultDecorators(this)
        }

        b.__esModule = !0, b.HandlebarsEnvironment = e;
        var f = c(119), g = c(120), h = d(g), i = c(121), j = c(129), k = c(131), l = d(k), m = "4.0.5";
        b.VERSION = m;
        var n = 7;
        b.COMPILER_REVISION = n;
        var o = {1: "<= 1.0.rc.2", 2: "== 1.0.0-rc.3", 3: "== 1.0.0-rc.4", 4: "== 1.x.x", 5: "== 2.0.0-alpha.x", 6: ">= 2.0.0-beta.1", 7: ">= 4.0.0"};
        b.REVISION_CHANGES = o;
        var p = "[object Object]";
        e.prototype = {
            constructor: e, logger: l.default, log: l.default.log, registerHelper: function (a, b) {
                if (f.toString.call(a) === p) {
                    if (b)throw new h.default("Arg not supported with multiple helpers");
                    f.extend(this.helpers, a)
                } else this.helpers[a] = b
            }, unregisterHelper: function (a) {
                delete this.helpers[a]
            }, registerPartial: function (a, b) {
                if (f.toString.call(a) === p) f.extend(this.partials, a); else {
                    if ("undefined" == typeof b)throw new h.default('Attempting to register a partial called "' + a + '" as undefined');
                    this.partials[a] = b
                }
            }, unregisterPartial: function (a) {
                delete this.partials[a]
            }, registerDecorator: function (a, b) {
                if (f.toString.call(a) === p) {
                    if (b)throw new h.default("Arg not supported with multiple decorators");
                    f.extend(this.decorators, a)
                } else this.decorators[a] = b
            }, unregisterDecorator: function (a) {
                delete this.decorators[a]
            }
        };
        var q = l.default.log;
        b.log = q, b.createFrame = f.createFrame, b.logger = l.default
    }, function (a, b) {
        "use strict";
        function c(a) {
            return k[a]
        }

        function d(a) {
            for (var b = 1; b < arguments.length; b++)for (var c in arguments[b])Object.prototype.hasOwnProperty.call(arguments[b], c) && (a[c] = arguments[b][c]);
            return a
        }

        function e(a, b) {
            for (var c = 0, d = a.length; c < d; c++)if (a[c] === b)return c;
            return -1
        }

        function f(a) {
            if ("string" != typeof a) {
                if (a && a.toHTML)return a.toHTML();
                if (null == a)return "";
                if (!a)return a + "";
                a = "" + a
            }
            return m.test(a) ? a.replace(l, c) : a
        }

        function g(a) {
            return !a && 0 !== a || !(!p(a) || 0 !== a.length)
        }

        function h(a) {
            var b = d({}, a);
            return b._parent = a, b
        }

        function i(a, b) {
            return a.path = b, a
        }

        function j(a, b) {
            return (a ? a + "." : "") + b
        }

        b.__esModule = !0, b.extend = d, b.indexOf = e, b.escapeExpression = f, b.isEmpty = g, b.createFrame = h, b.blockParams = i, b.appendContextPath = j;
        var k = {"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "`": "&#x60;", "=": "&#x3D;"}, l = /[&<>"'`=]/g, m = /[&<>"'`=]/, n = Object.prototype.toString;
        b.toString = n;
        var o = function (a) {
            return "function" == typeof a
        };
        o(/x/) && (b.isFunction = o = function (a) {
            return "function" == typeof a && "[object Function]" === n.call(a)
        }), b.isFunction = o;
        var p = Array.isArray || function (a) {
                return !(!a || "object" != typeof a) && "[object Array]" === n.call(a)
            };
        b.isArray = p
    }, function (a, b) {
        "use strict";
        function c(a, b) {
            var e = b && b.loc, f = void 0, g = void 0;
            e && (f = e.start.line, g = e.start.column, a += " - " + f + ":" + g);
            for (var h = Error.prototype.constructor.call(this, a), i = 0; i < d.length; i++)this[d[i]] = h[d[i]];
            Error.captureStackTrace && Error.captureStackTrace(this, c);
            try {
                e && (this.lineNumber = f, Object.defineProperty ? Object.defineProperty(this, "column", {value: g}) : this.column = g)
            } catch (a) {
            }
        }

        b.__esModule = !0;
        var d = ["description", "fileName", "lineNumber", "message", "name", "number", "stack"];
        c.prototype = new Error, b.default = c, a.exports = b.default
    }, function (a, b, c) {
        "use strict";
        function d(a) {
            return a && a.__esModule ? a : {default: a}
        }

        function e(a) {
            g.default(a), i.default(a), k.default(a), m.default(a), o.default(a), q.default(a), s.default(a)
        }

        b.__esModule = !0, b.registerDefaultHelpers = e;
        var f = c(122), g = d(f), h = c(123), i = d(h), j = c(124), k = d(j), l = c(125), m = d(l), n = c(126), o = d(n), p = c(127), q = d(p), r = c(128), s = d(r)
    }, function (a, b, c) {
        "use strict";
        b.__esModule = !0;
        var d = c(119);
        b.default = function (a) {
            a.registerHelper("blockHelperMissing", function (b, c) {
                var e = c.inverse, f = c.fn;
                if (b === !0)return f(this);
                if (b === !1 || null == b)return e(this);
                if (d.isArray(b))return b.length > 0 ? (c.ids && (c.ids = [c.name]), a.helpers.each(b, c)) : e(this);
                if (c.data && c.ids) {
                    var g = d.createFrame(c.data);
                    g.contextPath = d.appendContextPath(c.data.contextPath, c.name), c = {data: g}
                }
                return f(b, c)
            })
        }, a.exports = b.default
    }, function (a, b, c) {
        "use strict";
        function d(a) {
            return a && a.__esModule ? a : {default: a}
        }

        b.__esModule = !0;
        var e = c(119), f = c(120), g = d(f);
        b.default = function (a) {
            a.registerHelper("each", function (a, b) {
                function c(b, c, f) {
                    j && (j.key = b, j.index = c, j.first = 0 === c, j.last = !!f, k && (j.contextPath = k + b)), i += d(a[b], {data: j, blockParams: e.blockParams([a[b], b], [k + b, null])})
                }

                if (!b)throw new g.default("Must pass iterator to #each");
                var d = b.fn, f = b.inverse, h = 0, i = "", j = void 0, k = void 0;
                if (b.data && b.ids && (k = e.appendContextPath(b.data.contextPath, b.ids[0]) + "."), e.isFunction(a) && (a = a.call(this)), b.data && (j = e.createFrame(b.data)), a && "object" == typeof a)if (e.isArray(a))for (var l = a.length; h < l; h++)h in a && c(h, h, h === a.length - 1); else {
                    var m = void 0;
                    for (var n in a)a.hasOwnProperty(n) && (void 0 !== m && c(m, h - 1), m = n, h++);
                    void 0 !== m && c(m, h - 1, !0)
                }
                return 0 === h && (i = f(this)), i
            })
        }, a.exports = b.default
    }, function (a, b, c) {
        "use strict";
        function d(a) {
            return a && a.__esModule ? a : {default: a}
        }

        b.__esModule = !0;
        var e = c(120), f = d(e);
        b.default = function (a) {
            a.registerHelper("helperMissing", function () {
                if (1 !== arguments.length)throw new f.default('Missing helper: "' + arguments[arguments.length - 1].name + '"')
            })
        }, a.exports = b.default
    }, function (a, b, c) {
        "use strict";
        b.__esModule = !0;
        var d = c(119);
        b.default = function (a) {
            a.registerHelper("if", function (a, b) {
                return d.isFunction(a) && (a = a.call(this)), !b.hash.includeZero && !a || d.isEmpty(a) ? b.inverse(this) : b.fn(this)
            }), a.registerHelper("unless", function (b, c) {
                return a.helpers.if.call(this, b, {fn: c.inverse, inverse: c.fn, hash: c.hash})
            })
        }, a.exports = b.default
    }, function (a, b) {
        "use strict";
        b.__esModule = !0, b.default = function (a) {
            a.registerHelper("log", function () {
                for (var b = [void 0], c = arguments[arguments.length - 1], d = 0; d < arguments.length - 1; d++)b.push(arguments[d]);
                var e = 1;
                null != c.hash.level ? e = c.hash.level : c.data && null != c.data.level && (e = c.data.level), b[0] = e, a.log.apply(a, b)
            })
        }, a.exports = b.default
    }, function (a, b) {
        "use strict";
        b.__esModule = !0, b.default = function (a) {
            a.registerHelper("lookup", function (a, b) {
                return a && a[b]
            })
        }, a.exports = b.default
    }, function (a, b, c) {
        "use strict";
        b.__esModule = !0;
        var d = c(119);
        b.default = function (a) {
            a.registerHelper("with", function (a, b) {
                d.isFunction(a) && (a = a.call(this));
                var c = b.fn;
                if (d.isEmpty(a))return b.inverse(this);
                var e = b.data;
                return b.data && b.ids && (e = d.createFrame(b.data), e.contextPath = d.appendContextPath(b.data.contextPath, b.ids[0])), c(a, {data: e, blockParams: d.blockParams([a], [e && e.contextPath])})
            })
        }, a.exports = b.default
    }, function (a, b, c) {
        "use strict";
        function d(a) {
            return a && a.__esModule ? a : {default: a}
        }

        function e(a) {
            g.default(a)
        }

        b.__esModule = !0, b.registerDefaultDecorators = e;
        var f = c(130), g = d(f)
    }, function (a, b, c) {
        "use strict";
        b.__esModule = !0;
        var d = c(119);
        b.default = function (a) {
            a.registerDecorator("inline", function (a, b, c, e) {
                var f = a;
                return b.partials || (b.partials = {}, f = function (e, f) {
                    var g = c.partials;
                    c.partials = d.extend({}, g, b.partials);
                    var h = a(e, f);
                    return c.partials = g, h
                }), b.partials[e.args[0]] = e.fn, f
            })
        }, a.exports = b.default
    }, function (a, b, c) {
        "use strict";
        b.__esModule = !0;
        var d = c(119), e = {
            methodMap: ["debug", "info", "warn", "error"], level: "info", lookupLevel: function (a) {
                if ("string" == typeof a) {
                    var b = d.indexOf(e.methodMap, a.toLowerCase());
                    a = b >= 0 ? b : parseInt(a, 10)
                }
                return a
            }, log: function (a) {
                if (a = e.lookupLevel(a), "undefined" != typeof console && e.lookupLevel(e.level) <= a) {
                    var b = e.methodMap[a];
                    console[b] || (b = "log");
                    for (var c = arguments.length, d = Array(c > 1 ? c - 1 : 0), f = 1; f < c; f++)d[f - 1] = arguments[f];
                    console[b].apply(console, d)
                }
            }
        };
        b.default = e, a.exports = b.default
    }, function (a, b) {
        "use strict";
        function c(a) {
            this.string = a
        }

        b.__esModule = !0, c.prototype.toString = c.prototype.toHTML = function () {
            return "" + this.string
        }, b.default = c, a.exports = b.default
    }, function (a, b, c) {
        "use strict";
        function d(a) {
            return a && a.__esModule ? a : {default: a}
        }

        function e(a) {
            if (a && a.__esModule)return a;
            var b = {};
            if (null != a)for (var c in a)Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]);
            return b.default = a, b
        }

        function f(a) {
            var b = a && a[0] || 1, c = r.COMPILER_REVISION;
            if (b !== c) {
                if (b < c) {
                    var d = r.REVISION_CHANGES[c], e = r.REVISION_CHANGES[b];
                    throw new q.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + d + ") or downgrade your runtime to an older version (" + e + ").")
                }
                throw new q.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + a[1] + ").")
            }
        }

        function g(a, b) {
            function c(c, d, e) {
                e.hash && (d = o.extend({}, d, e.hash), e.ids && (e.ids[0] = !0)), c = b.VM.resolvePartial.call(this, c, d, e);
                var f = b.VM.invokePartial.call(this, c, d, e);
                if (null == f && b.compile && (e.partials[e.name] = b.compile(c, a.compilerOptions, b), f = e.partials[e.name](d, e)), null != f) {
                    if (e.indent) {
                        for (var g = f.split("\n"), h = 0, i = g.length; h < i && (g[h] || h + 1 !== i); h++)g[h] = e.indent + g[h];
                        f = g.join("\n")
                    }
                    return f
                }
                throw new q.default("The partial " + e.name + " could not be compiled when running in runtime-only mode")
            }

            function d(b) {
                function c(b) {
                    return "" + a.main(e, b, e.helpers, e.partials, g, i, h)
                }

                var f = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1], g = f.data;
                d._setup(f), !f.partial && a.useData && (g = l(b, g));
                var h = void 0, i = a.useBlockParams ? [] : void 0;
                return a.useDepths && (h = f.depths ? b != f.depths[0] ? [b].concat(f.depths) : f.depths : [b]), (c = m(a.main, c, e, f.depths || [], g, i))(b, f)
            }

            if (!b)throw new q.default("No environment passed to template");
            if (!a || !a.main)throw new q.default("Unknown template object: " + typeof a);
            a.main.decorator = a.main_d, b.VM.checkRevision(a.compiler);
            var e = {
                strict: function (a, b) {
                    if (!(b in a))throw new q.default('"' + b + '" not defined in ' + a);
                    return a[b]
                }, lookup: function (a, b) {
                    for (var c = a.length, d = 0; d < c; d++)if (a[d] && null != a[d][b])return a[d][b]
                }, lambda: function (a, b) {
                    return "function" == typeof a ? a.call(b) : a
                }, escapeExpression: o.escapeExpression, invokePartial: c, fn: function (b) {
                    var c = a[b];
                    return c.decorator = a[b + "_d"], c
                }, programs: [], program: function (a, b, c, d, e) {
                    var f = this.programs[a], g = this.fn(a);
                    return b || e || d || c ? f = h(this, a, g, b, c, d, e) : f || (f = this.programs[a] = h(this, a, g)), f
                }, data: function (a, b) {
                    for (; a && b--;)a = a._parent;
                    return a
                }, merge: function (a, b) {
                    var c = a || b;
                    return a && b && a !== b && (c = o.extend({}, b, a)), c
                }, noop: b.VM.noop, compilerInfo: a.compiler
            };
            return d.isTop = !0, d._setup = function (c) {
                c.partial ? (e.helpers = c.helpers, e.partials = c.partials, e.decorators = c.decorators) : (e.helpers = e.merge(c.helpers, b.helpers), a.usePartial && (e.partials = e.merge(c.partials, b.partials)), (a.usePartial || a.useDecorators) && (e.decorators = e.merge(c.decorators, b.decorators)))
            }, d._child = function (b, c, d, f) {
                if (a.useBlockParams && !d)throw new q.default("must pass block params");
                if (a.useDepths && !f)throw new q.default("must pass parent depths");
                return h(e, b, a[b], c, 0, d, f)
            }, d
        }

        function h(a, b, c, d, e, f, g) {
            function h(b) {
                var e = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1], h = g;
                return g && b != g[0] && (h = [b].concat(g)), c(a, b, a.helpers, a.partials, e.data || d, f && [e.blockParams].concat(f), h)
            }

            return h = m(c, h, a, g, d, f), h.program = b, h.depth = g ? g.length : 0, h.blockParams = e || 0, h
        }

        function i(a, b, c) {
            if (a) a.call || c.name || (c.name = a, a = c.partials[a]); else if ("@partial-block" === c.name) {
                for (var d = c.data; d["partial-block"] === k;)d = d._parent;
                a = d["partial-block"], d["partial-block"] = k
            } else a = c.partials[c.name];
            return a
        }

        function j(a, b, c) {
            c.partial = !0, c.ids && (c.data.contextPath = c.ids[0] || c.data.contextPath);
            var d = void 0;
            if (c.fn && c.fn !== k && (c.data = r.createFrame(c.data), d = c.data["partial-block"] = c.fn, d.partials && (c.partials = o.extend({}, c.partials, d.partials))), void 0 === a && d && (a = d), void 0 === a)throw new q.default("The partial " + c.name + " could not be found");
            if (a instanceof Function)return a(b, c)
        }

        function k() {
            return ""
        }

        function l(a, b) {
            return b && "root" in b || (b = b ? r.createFrame(b) : {}, b.root = a), b
        }

        function m(a, b, c, d, e, f) {
            if (a.decorator) {
                var g = {};
                b = a.decorator(b, g, c, d && d[0], e, f, d), o.extend(b, g)
            }
            return b
        }

        b.__esModule = !0, b.checkRevision = f, b.template = g, b.wrapProgram = h, b.resolvePartial = i, b.invokePartial = j, b.noop = k;
        var n = c(119), o = e(n), p = c(120), q = d(p), r = c(118)
    }, function (a, b) {
        (function (c) {
            "use strict";
            b.__esModule = !0, b.default = function (a) {
                var b = "undefined" != typeof c ? c : window, d = b.Handlebars;
                a.noConflict = function () {
                    return b.Handlebars === a && (b.Handlebars = d), a
                }
            }, a.exports = b.default
        }).call(b, function () {
            return this
        }())
    }, function (a, b, c) {
        var d, e;
        d = [c(55), c(63), c(82), c(52)], e = function (a, b, c, d) {
            var e = b.style, f = {
                back: !0,
                fontSize: 15,
                fontFamily: "Arial,sans-serif",
                fontOpacity: 100,
                color: "#FFF",
                backgroundColor: "#000",
                backgroundOpacity: 100,
                edgeStyle: null,
                windowColor: "#FFF",
                windowOpacity: 0,
                preprocessor: d.identity
            }, g = function (g) {
                function h(b) {
                    b = b || "";
                    var c = "qp-captions-window qp-reset";
                    b ? (s.innerHTML = b, r.className = c + " qp-captions-window-active") : (r.className = c, a.empty(s))
                }

                function i(a) {
                    p = a, k(n, p)
                }

                function j(a, b) {
                    var c = a.source, e = b.metadata;
                    return c ? !(!e || !d.isNumber(e[c])) && e[c] : b.position
                }

                function k(a, b) {
                    if (a && a.data && b) {
                        var c = j(a, b);
                        if (c !== !1) {
                            var d = a.data;
                            if (!(o >= 0 && l(d, o, c))) {
                                for (var e = -1, f = 0; f < d.length; f++)if (l(d, f, c)) {
                                    e = f;
                                    break
                                }
                                e === -1 ? h("") : e !== o && (o = e, h(t.preprocessor(d[o].text)))
                            }
                        }
                    }
                }

                function l(a, b, c) {
                    return a[b].begin <= c && (!a[b].end || a[b].end >= c) && (b === a.length - 1 || a[b + 1].begin >= c)
                }

                function m(a, c, d) {
                    var e = b.hexToRgba("#000000", d);
                    "dropshadow" === a ? c.textShadow = "0 2px 1px " + e : "raised" === a ? c.textShadow = "0 0 5px " + e + ", 0 1px 5px " + e + ", 0 2px 5px " + e : "depressed" === a ? c.textShadow = "0 -2px 1px " + e : "uniform" === a && (c.textShadow = "-2px 0 1px " + e + ",2px 0 1px " + e + ",0 -2px 1px " + e + ",0 2px 1px " + e + ",-1px 1px 1px " + e + ",1px 1px 1px " + e + ",1px -1px 1px " + e + ",1px 1px 1px " + e)
                }

                var n, o, p, q, r, s, t = {};
                q = document.createElement("div"), q.className = "qp-captions qp-reset", this.show = function () {
                    q.className = "qp-captions qp-captions-enabled qp-reset"
                }, this.hide = function () {
                    q.className = "qp-captions qp-reset"
                }, this.populate = function (a) {
                    return o = -1, n = a, a ? void k(a, p) : void h("")
                }, this.resize = function () {
                    var a = q.clientWidth, b = Math.pow(a / 400, .6);
                    if (b) {
                        var c = t.fontSize * b;
                        e(q, {fontSize: Math.round(c) + "px"})
                    }
                }, this.setup = function (a) {
                    if (r = document.createElement("div"), s = document.createElement("span"), r.className = "qp-captions-window qp-reset", s.className = "qp-captions-text qp-reset", t = d.extend({}, f, a), a) {
                        var c = t.fontOpacity, h = t.windowOpacity, i = t.edgeStyle, j = t.backgroundColor, k = {}, l = {
                            color: b.hexToRgba(t.color, c),
                            fontFamily: t.fontFamily,
                            fontStyle: t.fontStyle,
                            fontWeight: t.fontWeight,
                            textDecoration: t.textDecoration
                        };
                        h && (k.backgroundColor = b.hexToRgba(t.windowColor, h)), m(i, l, c), t.back ? l.backgroundColor = b.hexToRgba(j, t.backgroundOpacity) : null === i && m("uniform", l), e(r, k), e(s, l)
                    }
                    r.appendChild(s), q.appendChild(r), this.populate(g.get("captionsTrack"))
                }, this.element = function () {
                    return q
                }, g.on("change:playlistItem", function () {
                    p = null, o = -1, h("")
                }, this), g.on("change:captionsTrack", function (a, b) {
                    this.populate(b)
                }, this), g.mediaController.on("seek", function () {
                    o = -1
                }, this), g.mediaController.on("time seek", i, this), g.mediaController.on("subtitlesTrackData", function () {
                    k(n, p)
                }, this), g.on("change:state", function (a, b) {
                    switch (b) {
                        case c.IDLE:
                        case c.ERROR:
                        case c.COMPLETE:
                            this.hide();
                            break;
                        default:
                            this.show()
                    }
                }, this)
            };
            return g
        }.apply(b, d), !(void 0 !== e && (a.exports = e))
    }, function (a, b, c) {
        var d, e;
        d = [c(114), c(53), c(54), c(52)], e = function (a, b, c, d) {
            var e = function (e, f) {
                function g(a) {
                    if (m.getEvent = a, !e.get("flashBlocked"))return j ? void j(a) : void m.trigger(a.type === b.touchEvents.CLICK ? "click" : "tap")
                }

                function h() {
                    return k ? void k() : void m.trigger("doubleClick")
                }

                var i, j, k;
                d.extend(this, c), i = f, this.element = function () {
                    return i
                };
                var l = new a(i, {enableDoubleTap: !0, useMove: !0});
                l.on("click tap", g), l.on("doubleClick doubleTap", h), l.on("move", function () {
                    m.trigger("move")
                }), this.clickHandler = g, this.getEvent = null;
                var m = this;
                this.setAlternateClickHandlers = function (a, b) {
                    j = a, k = b || null
                }, this.revertAlternateClickHandlers = function () {
                    j = null, k = null
                }
            };
            return e
        }.apply(b, d), !(void 0 !== e && (a.exports = e))
    }, function (a, b, c) {
        var d, e;
        d = [c(55), c(54), c(114), c(138), c(52)], e = function (a, b, c, d, e) {
            var f = function (f) {
                e.extend(this, b), this.model = f, this.el = a.createElement(d({}));
                var g = this;
                this.iconUI = new c(this.el).on("click tap", function (a) {
                    g.trigger(a.type)
                })
            };
            return e.extend(f.prototype, {
                element: function () {
                    return this.el
                }
            }), f
        }.apply(b, d), !(void 0 !== e && (a.exports = e))
    }, function (a, b, c) {
        var d = c(116);
        a.exports = (d.default || d).template({
            compiler: [7, ">= 4.0.0"], main: function (a, b, c, d, e) {
                return '<div class="qp-display-icon-container qp-background-color qp-reset">\r\n    <div class="qp-icon qp-icon-display qp-button-color qp-reset"></div>\r\n    <div class="qp-loader-triggel"></div>\r\n</div>\r\n'
            }, useData: !0
        })
    }, function (a, b, c) {
        var d, e;
        d = [c(140), c(55), c(52), c(114)], e = function (a, b, c, d) {
            var e = function (a) {
                this.model = a, this.setup(), this.model.on("change:dock", this.render, this)
            };
            return c.extend(e.prototype, {
                setup: function () {
                    var c = this.model.get("dock"), e = this.click.bind(this), f = a(c);
                    this.el = b.createElement(f), new d(this.el).on("click tap", e)
                }, getDockButton: function (a) {
                    return b.hasClass(a.target, "qp-dock-button") ? a.target : b.hasClass(a.target, "qp-dock-text") ? a.target.parentElement.parentElement : a.target.parentElement
                }, click: function (a) {
                    var b = this.getDockButton(a), d = b.getAttribute("button"), e = this.model.get("dock"), f = c.findWhere(e, {id: d});
                    f && f.callback && f.callback(a)
                }, render: function () {
                    var c = this.model.get("dock"), d = a(c), e = b.createElement(d);
                    this.el.innerHTML = e.innerHTML
                }, element: function () {
                    return this.el
                }
            }), e
        }.apply(b, d), !(void 0 !== e && (a.exports = e))
    }, function (a, b, c) {
        var d = c(116);
        a.exports = (d.default || d).template({
            1: function (a, b, c, d, e) {
                var f, g, h = null != b ? b : {};
                return '    <div class="qp-dock-button qp-background-color qp-reset' + (null != (f = c.if.call(h, null != b ? b.btnClass : b, {
                        name: "if",
                        hash: {},
                        fn: a.program(2, e, 0),
                        inverse: a.noop,
                        data: e
                    })) ? f : "") + '" button="' + a.escapeExpression((g = null != (g = c.id || (null != b ? b.id : b)) ? g : c.helperMissing, "function" == typeof g ? g.call(h, {
                            name: "id",
                            hash: {},
                            data: e
                        }) : g)) + '">\r\n        <div class="qp-icon qp-dock-image qp-reset" ' + (null != (f = c.if.call(h, null != b ? b.img : b, {
                        name: "if",
                        hash: {},
                        fn: a.program(4, e, 0),
                        inverse: a.noop,
                        data: e
                    })) ? f : "") + '></div>\r\n        <div class="qp-arrow qp-reset"></div>\r\n' + (null != (f = c.if.call(h, null != b ? b.tooltip : b, {
                        name: "if",
                        hash: {},
                        fn: a.program(6, e, 0),
                        inverse: a.noop,
                        data: e
                    })) ? f : "") + "    </div>\r\n"
            }, 2: function (a, b, c, d, e) {
                var f;
                return " " + a.escapeExpression((f = null != (f = c.btnClass || (null != b ? b.btnClass : b)) ? f : c.helperMissing, "function" == typeof f ? f.call(null != b ? b : {}, {
                            name: "btnClass",
                            hash: {},
                            data: e
                        }) : f))
            }, 4: function (a, b, c, d, e) {
                var f;
                return "style='background-image: url(\"" + a.escapeExpression((f = null != (f = c.img || (null != b ? b.img : b)) ? f : c.helperMissing, "function" == typeof f ? f.call(null != b ? b : {}, {
                            name: "img",
                            hash: {},
                            data: e
                        }) : f)) + "\")'"
            }, 6: function (a, b, c, d, e) {
                var f;
                return '        <div class="qp-overlay qp-background-color qp-reset">\r\n            <span class="qp-text qp-dock-text qp-reset">' + a.escapeExpression((f = null != (f = c.tooltip || (null != b ? b.tooltip : b)) ? f : c.helperMissing, "function" == typeof f ? f.call(null != b ? b : {}, {
                            name: "tooltip",
                            hash: {},
                            data: e
                        }) : f)) + "</span>\r\n        </div>\r\n"
            }, compiler: [7, ">= 4.0.0"], main: function (a, b, c, d, e) {
                var f;
                return '<div class="qp-dock qp-reset">\r\n' + (null != (f = c.each.call(null != b ? b : {}, b, {name: "each", hash: {}, fn: a.program(1, e, 0), inverse: a.noop, data: e})) ? f : "") + "</div>"
            }, useData: !0
        })
    }, function (a, b, c) {
        var d, e;
        d = [c(55), c(52), c(54), c(114), c(143), c(142), c(149), c(151), c(153), c(154)], e = function (a, b, c, d, e, f, g, h, i, j) {
            function k(a, b) {
                var c = document.createElement("div");
                return c.className = "qp-icon qp-icon-inline qp-button-color qp-reset " + a, c.style.display = "none", b && new d(c).on("click tap", function () {
                    b()
                }), {
                    element: function () {
                        return c
                    }, toggle: function (a) {
                        a ? this.show() : this.hide()
                    }, show: function () {
                        c.style.display = ""
                    }, hide: function () {
                        c.style.display = "none"
                    }
                }
            }

            function l(a) {
                var b = document.createElement("span");
                return b.className = "qp-text qp-reset " + a, b
            }

            function m(a) {
                var b = new g(a);
                return b
            }

            function n(a, c) {
                var d = document.createElement("div");
                return d.className = "qp-group qp-controlbar-" + a + "-group qp-reset", b.each(c, function (a) {
                    a.element && (a = a.element()), d.appendChild(a)
                }), d
            }

            function o(b, c) {
                this._api = b, this._model = c, this._isMobile = a.isMobile(), this._compactModeMaxSize = 400, this._maxCompactWidth = -1, this.setup()
            }

            return b.extend(o.prototype, c, {
                setup: function () {
                    this.build(), this.initialize()
                }, build: function () {
                    function c() {
                        u.elements.playlist.el.onclick = function () {
                            v || (v = u._api.getContainer().getElementsByClassName("qp-overlays-playlist")[0]), a.hasClass(v, "qp-open") ? w.close() : w.open()
                        };
                        var b = u._api.getContainer().getElementsByClassName("qp-playlist")[0];
                        b = b.getElementsByClassName("qp-option");
                        for (var c = 0; c < b.length; c++)!function (a) {
                            b[a].addEventListener("click", function () {
                                u._api.playlistItem(a)
                            })
                        }(c)
                    }

                    var d, g, o, p, q, r = new f(this._model, this._api), s = new j("qp-icon-more");
                    if (this._model.get("visualplaylist") !== !1 && (d = new h("qp-icon-playlist")), !this._isMobile) {
                        p = k("qp-icon-volume", this._api.setMute), g = new e("qp-slider-volume", "horizontal"), o = new i(this._model, "qp-icon-volume"), q = k("qp-icon-volume qp-volume-slider-main", function () {
                        }), q.element().appendChild(g.element()), q.show(), q.element().onmouseover = function () {
                            a.addClass(this, "qp-open"), a.addClass(this.parentNode, "qp-slider-volume-open"), this.parentNode.onmouseleave = function () {
                                a.removeClass(this, "qp-slider-volume-open")
                            }
                        }, q.element().onmouseout = function () {
                            a.removeClass(this, "qp-open")
                        };
                        var t = q.element();
                        t.onmousedown = function () {
                            a.addClass(q.element(), "qp-dragging")
                        }, document.onmouseup = function () {
                            a.removeClass(q.element(), "qp-dragging")
                        }
                    }
                    this.elements = {
                        alt: l("qp-text-alt"),
                        play: k("qp-icon-playback", this._api.play.bind(this, {reason: "interaction"})),
                        prev: k("qp-icon-prev", this._api.playlistPrev.bind(this, {reason: "interaction"})),
                        next: k("qp-icon-next", this._api.playlistNext.bind(this, {reason: "interaction"})),
                        playlist: d,
                        elapsed: l("qp-text-elapsed"),
                        time: r,
                        duration: l("qp-text-duration"),
                        drawer: s,
                        hd: m("qp-icon-hd"),
                        cc: m("qp-icon-cc"),
                        audiotracks: m("qp-icon-audio-tracks"),
                        mute: p,
                        volume: g,
                        volume2: q,
                        volumetooltip: o,
                        cast: k("qp-icon-cast qp-off", this._api.castToggle),
                        fullscreen: k("qp-icon-fullscreen", this._api.setFullscreen)
                    };
                    var u = this, v = null, w = {
                        open: function () {
                            a.addClass(v, "qp-open")
                        }, close: function () {
                            a.removeClass(v, "qp-open")
                        }
                    };
                    u._api.onPlay(c), this.layout = {
                        left: [this.elements.prev, this.elements.play, this.elements.next, this.elements.volumetooltip, this.elements.mute, this.elements.volume2, this.elements.elapsed],
                        center: [this.elements.time, this.elements.alt],
                        right: [this.elements.duration, this.elements.hd, this.elements.cc, this.elements.audiotracks, this.elements.drawer, this.elements.cast, this.elements.playlist, this.elements.fullscreen],
                        drawer: [this.elements.hd, this.elements.cc, this.elements.audiotracks]
                    }, this.menus = b.compact([this.elements.volumetooltip, this.elements.hd, this.elements.cc, this.elements.audiotracks, this.elements.playlist]), this.layout.left = b.compact(this.layout.left), this.layout.center = b.compact(this.layout.center), this.layout.right = b.compact(this.layout.right), this.layout.drawer = b.compact(this.layout.drawer), this.el = document.createElement("div"), this.el.className = "qp-controlbar qp-background-color qp-reset", this.elements.left = n("left", this.layout.left), this.elements.center = n("center", this.layout.center), this.elements.right = n("right", this.layout.right),
                        this.el.appendChild(this.elements.left), this.el.appendChild(this.elements.center), this.el.appendChild(this.elements.right)
                }, initialize: function () {
                    this.elements.play.show(), this.elements.fullscreen.show(), this.elements.mute && this.elements.mute.show(), this.onVolume(this._model, this._model.get("volume")), this.onPlaylist(this._model, this._model.get("playlist")), this.onPlaylistItem(this._model, this._model.get("playlistItem")), this.onMediaModel(this._model, this._model.get("mediaModel")), this.onCastAvailable(this._model, this._model.get("castAvailable")), this.onCastActive(this._model, this._model.get("castActive")), this.onCaptionsList(this._model, this._model.get("captionsList")), this._model.on("change:volume", this.onVolume, this), this._model.on("change:mute", this.onMute, this), this._model.on("change:playlist", this.onPlaylist, this), this._model.on("change:playlistItem", this.onPlaylistItem, this), this._model.on("change:mediaModel", this.onMediaModel, this), this._model.on("change:castAvailable", this.onCastAvailable, this), this._model.on("change:castActive", this.onCastActive, this), this._model.on("change:duration", this.onDuration, this), this._model.on("change:position", this.onElapsed, this), this._model.on("change:fullscreen", this.onFullscreen, this), this._model.on("change:captionsList", this.onCaptionsList, this), this._model.on("change:captionsIndex", this.onCaptionsIndex, this), this._model.on("change:compactUI", this.onCompactUI, this);
                    var c = this;
                    document.addEventListener("click", function (b) {
                        b = b || window.event;
                        var d = b.target || b.srcElement, e = c._api.getContainer(), f = e.getElementsByClassName("qp-overlays-playlist")[0];
                        if (f) {
                            for (var g = f.className.indexOf("qp-open") === -1; d !== c._api.getContainer();) {
                                var h = d.className;
                                if (!h || h.indexOf("qp-overlays-playlist") > -1 || h.indexOf("qp-icon-playlist") > -1)return;
                                if (d = d.parentNode, null === d)break
                            }
                            g || (a.removeClass(f, "qp-open"), b.preventDefault())
                        }
                    }, !1), this.elements.volume && this.elements.volume.on("update", function (a) {
                        var b = a.percentage;
                        this._api.setVolume(b)
                    }, this), this.elements.volumetooltip && (this.elements.volumetooltip.on("update", function (a) {
                        var b = a.percentage;
                        this._api.setVolume(b)
                    }, this), this.elements.volumetooltip.on("toggleValue", function () {
                        this._api.setMute()
                    }, this)), this.elements.playlist && this.elements.playlist.on("select", function (a) {
                        this._model.once("itemReady", function () {
                            this._api.play({reason: "interaction"})
                        }, this), this._api.load(a)
                    }, this), this.elements.hd.on("select", function (a) {
                        this._model.getVideo().setCurrentQuality(a)
                    }, this), this.elements.hd.on("toggleValue", function () {
                        this._model.getVideo().setCurrentQuality(0 === this._model.getVideo().getCurrentQuality() ? 1 : 0)
                    }, this), this.elements.cc.on("select", function (a) {
                        this._api.setCurrentCaptions(a)
                    }, this), this.elements.cc.on("toggleValue", function () {
                        var a = this._model.get("captionsIndex");
                        this._api.setCurrentCaptions(a ? 0 : 1)
                    }, this), this.elements.audiotracks.on("select", function (a) {
                        this._model.getVideo().setCurrentAudioTrack(a)
                    }, this), new d(this.elements.duration).on("click tap", function () {
                        "DVR" === a.adaptiveType(this._model.get("duration")) && this._api.seek(-.1)
                    }, this), new d(this.el).on("click tap drag", function () {
                        this.trigger("userAction")
                    }, this), this.elements.drawer.on("open-drawer close-drawer", function (b, c) {
                        a.toggleClass(this.el, "qp-drawer-expanded", c.isOpen), c.isOpen || this.closeMenus()
                    }, this), b.each(this.menus, function (a) {
                        a.on("open-tooltip", this.closeMenus, this)
                    }, this)
                }, onCaptionsList: function (a, b) {
                    var c = a.get("captionsIndex");
                    this.elements.cc.setup(b, c), this.clearCompactMode()
                }, onCaptionsIndex: function (a, b) {
                    this.elements.cc.selectItem(b)
                }, onPlaylist: function (a, b) {
                    var c = b.length > 1;
                    this.elements.next.toggle(c), this.elements.prev.toggle(c), this.elements.playlist && this.elements.playlist.setup(b, a.get("item"))
                }, onPlaylistItem: function (a) {
                    this.elements.time.updateBuffer(0), this.elements.time.render(0), this.elements.duration.innerHTML = "00:00", this.elements.elapsed.innerHTML = "00:00", this.clearCompactMode();
                    var b = a.get("item");
                    this.elements.playlist && this.elements.playlist.selectItem(b), this.elements.audiotracks.setup()
                }, onMediaModel: function (c, d) {
                    d.on("change:levels", function (a, b) {
                        this.elements.hd.setup(b, a.get("currentLevel")), this.clearCompactMode()
                    }, this), d.on("change:currentLevel", function (a, b) {
                        this.elements.hd.selectItem(b)
                    }, this), d.on("change:audioTracks", function (a, c) {
                        var d = b.map(c, function (a) {
                            return {label: a.name}
                        });
                        this.elements.audiotracks.setup(d, a.get("currentAudioTrack"), {toggle: !1}), this.clearCompactMode()
                    }, this), d.on("change:currentAudioTrack", function (a, b) {
                        this.elements.audiotracks.selectItem(b)
                    }, this), d.on("change:state", function (b, c) {
                        "complete" === c && (this.elements.drawer.closeTooltip(), a.removeClass(this.el, "qp-drawer-expanded"))
                    }, this)
                }, onVolume: function (a, b) {
                    this.renderVolume(a.get("mute"), b)
                }, onMute: function (a, b) {
                    this.renderVolume(b, a.get("volume"))
                }, renderVolume: function (b, c) {
                    var d = "";
                    if (d = c < 1 ? "qp-off" : c < 33 ? "qp-low" : c >= 33 && c < 75 ? "qp-medium" : "qp-high", void 0 !== this.elements && void 0 !== this.elements.volumetooltip && void 0 !== this.elements.volumetooltip.element) {
                        var e = [], f = "";
                        e.push(this.elements.volumetooltip.element()), e.push(this.elements.volume2.element()), e.push(this.elements.mute.element());
                        for (var g = 0; g < e.length; g++)f = e[g].getAttribute("class"), f = f.replace(/(\sqp-(off|low|medium|high))/g, ""), "" !== d && (f += " " + d, e[g].setAttribute("class", f));
                        this.elements.mute && a.toggleClass(this.elements.mute.element(), "qp-off", b), this.elements.volume && this.elements.volume.render(b ? 0 : c), this.elements.volumetooltip && (this.elements.volumetooltip.volumeSlider.render(b ? 0 : c), a.toggleClass(this.elements.volumetooltip.element(), "qp-off", b), a.toggleClass(this.elements.volume2.element(), "qp-off", b))
                    }
                }, onCastAvailable: function (a, b) {
                    this.elements.cast.toggle(b), this.clearCompactMode()
                }, onCastActive: function (b, c) {
                    a.toggleClass(this.elements.cast.element(), "qp-off", !c)
                }, onElapsed: function (b, c) {
                    var d, e = b.get("duration");
                    d = "DVR" === a.adaptiveType(e) ? "-" + a.timeFormat(-e) : a.timeFormat(c), this.elements.elapsed.innerHTML = d
                }, onDuration: function (b, c) {
                    var d;
                    "DVR" === a.adaptiveType(c) ? (d = "Live", this.clearCompactMode()) : d = a.timeFormat(c), this.elements.duration.innerHTML = d
                }, onFullscreen: function (b, c) {
                    a.toggleClass(this.elements.fullscreen.element(), "qp-off", c)
                }, element: function () {
                    return this.el
                }, getVisibleBounds: function () {
                    var b, c = this.el, d = getComputedStyle ? getComputedStyle(c) : c.currentStyle;
                    return "table" === d.display ? a.bounds(c) : (c.style.visibility = "hidden", c.style.display = "table", b = a.bounds(c), c.style.visibility = c.style.display = "", b)
                }, setAltText: function (a) {
                    this.elements.alt.innerHTML = a
                }, addCues: function (a) {
                    this.elements.time && (b.each(a, function (a) {
                        this.elements.time.addCue(a)
                    }, this), this.elements.time.drawCues())
                }, closeMenus: function (a) {
                    b.each(this.menus, function (b) {
                        a && a.target === b.el || b.closeTooltip(a)
                    })
                }, hideComponents: function () {
                    this.closeMenus(), this.elements.drawer.closeTooltip(), a.removeClass(this.el, "qp-drawer-expanded")
                }, clearCompactMode: function () {
                    this._maxCompactWidth = -1, this._model.set("compactUI", !1), this._containerWidth && this.checkCompactMode(this._containerWidth)
                }, setCompactModeBounds: function () {
                    if (this.element().offsetWidth > 0) {
                        var b = this.elements.left.offsetWidth + this.elements.right.offsetWidth;
                        if ("LIVE" === a.adaptiveType(this._model.get("duration"))) this._maxCompactWidth = b + this.elements.alt.offsetWidth; else {
                            var c = b + (this.elements.center.offsetWidth - this.elements.time.el.offsetWidth), d = .2;
                            this._maxCompactWidth = c / (1 - d)
                        }
                    }
                }, checkCompactMode: function (a) {
                    this._maxCompactWidth === -1 && this.setCompactModeBounds(), this._containerWidth = a, this._maxCompactWidth !== -1 && (a >= this._compactModeMaxSize && a > this._maxCompactWidth ? this._model.set("compactUI", !1) : (a < this._compactModeMaxSize || a <= this._maxCompactWidth) && this._model.set("compactUI", !0))
                }, onCompactUI: function (c, d) {
                    a.removeClass(this.el, "qp-drawer-expanded"), this.elements.drawer.setup(this.layout.drawer, d), (!d || this.elements.drawer.activeContents.length < 2) && b.each(this.layout.drawer, function (a) {
                        this.elements.right.insertBefore(a.el, this.elements.drawer.el)
                    }, this)
                }
            }), o
        }.apply(b, d), !(void 0 !== e && (a.exports = e))
    }, function (a, b, c) {
        var d, e;
        d = [c(52), c(143), c(55), c(146), c(147), c(148)], e = function (a, b, c, d, e, f) {
            var g = d.extend({
                setup: function () {
                    this.text = document.createElement("span"), this.text.className = "qp-text qp-reset", this.img = document.createElement("div"), this.img.className = "qp-reset";
                    var a = document.createElement("div");
                    a.className = "qp-time-tip qp-background-color qp-reset", a.appendChild(this.img), a.appendChild(this.text), c.removeClass(this.el, "qp-hidden"), this.addContent(a)
                }, image: function (a) {
                    c.style(this.img, a)
                }, update: function (a) {
                    this.text.innerHTML = a
                }
            }), h = b.extend({
                constructor: function (c, d) {
                    this._model = c, this._api = d, this.timeTip = new g("qp-tooltip-time"), this.timeTip.setup(), this.cues = [], this.seekThrottled = a.throttle(this.performSeek, 400), this._model.on("change:playlistItem", this.onPlaylistItem, this).on("change:position", this.onPosition, this).on("change:duration", this.onDuration, this).on("change:buffer", this.onBuffer, this), b.call(this, "qp-slider-time", "horizontal")
                }, setup: function () {
                    b.prototype.setup.apply(this, arguments), this._model.get("playlistItem") && this.onPlaylistItem(this._model, this._model.get("playlistItem")), this.elementRail.appendChild(this.timeTip.element()), this.el.addEventListener("mousemove", this.showTimeTooltip.bind(this), !1), this.el.addEventListener("mouseout", this.hideTimeTooltip.bind(this), !1)
                }, update: function (c) {
                    this.activeCue && a.isNumber(this.activeCue.pct) ? this.seekTo = this.activeCue.pct : this.seekTo = c, this.seekThrottled(), b.prototype.update.apply(this, arguments)
                }, dragStart: function () {
                    this._model.set("scrubbing", !0), b.prototype.dragStart.apply(this, arguments)
                }, dragEnd: function () {
                    b.prototype.dragEnd.apply(this, arguments), this._model.set("scrubbing", !1)
                }, onSeeked: function () {
                    this._model.get("scrubbing") && this.performSeek()
                }, onBuffer: function (a, b) {
                    this.updateBuffer(b)
                }, onPosition: function (a, b) {
                    this.updateTime(b, a.get("duration"))
                }, onDuration: function (a, b) {
                    this.updateTime(a.get("position"), b)
                }, updateTime: function (a, b) {
                    var d = 0;
                    if (b) {
                        var e = c.adaptiveType(b);
                        "DVR" === e ? d = (b - a) / b * 100 : "VOD" === e && (d = a / b * 100)
                    }
                    this.render(d)
                }, onPlaylistItem: function (b, c) {
                    this.reset(), b.mediaModel.on("seeked", this.onSeeked, this);
                    var d = c.tracks;
                    a.each(d, function (a) {
                        a && a.kind && "thumbnails" === a.kind.toLowerCase() ? this.loadThumbnails(a.file) : a && a.kind && "chapters" === a.kind.toLowerCase() && this.loadChapters(a.file)
                    }, this)
                }, performSeek: function () {
                    var a, b = this._model.get("duration"), d = c.adaptiveType(b);
                    "LIVE" === d || 0 === b ? this._api.play() : "DVR" === d ? (a = (1 - this.seekTo / 100) * b, this._api.seek(Math.min(a, -.25))) : (a = this.seekTo / 100 * b, this._api.seek(Math.min(a, b - .25)))
                }, showTimeTooltip: function (a) {
                    var b = this._model.get("duration");
                    if (0 !== b) {
                        var d = c.bounds(this.elementRail), e = a.pageX ? a.pageX - d.left : a.x;
                        e = c.between(e, 0, d.width);
                        var f = e / d.width, g = b * f;
                        b < 0 && (g = b - g);
                        var h;
                        if (this.activeCue) h = this.activeCue.text; else {
                            var i = !0;
                            h = c.timeFormat(g, i), b < 0 && Math.abs(g) < 1 && (h = "Live")
                        }
                        this.timeTip.update(h), this.showThumbnail(g), c.addClass(this.timeTip.el, "qp-open"), this.timeTip.el.style.left = 100 * f + "%"
                    }
                }, hideTimeTooltip: function () {
                    c.removeClass(this.timeTip.el, "qp-open")
                }, reset: function () {
                    this.resetChapters(), this.resetThumbnails()
                }
            });
            return a.extend(h.prototype, e, f), h
        }.apply(b, d), !(void 0 !== e && (a.exports = e))
    }, function (a, b, c) {
        var d, e;
        d = [c(144), c(114), c(145), c(55)], e = function (a, b, c, d) {
            var e = a.extend({
                constructor: function (a, b) {
                    this.className = a + " qp-background-color qp-reset", this.orientation = b, this.dragStartListener = this.dragStart.bind(this), this.dragMoveListener = this.dragMove.bind(this), this.dragEndListener = this.dragEnd.bind(this), this.tapListener = this.tap.bind(this), this.setup()
                }, setup: function () {
                    var a = {default: this.default, className: this.className, orientation: "qp-slider-" + this.orientation};
                    this.el = d.createElement(c(a)), this.elementRail = this.el.getElementsByClassName("qp-slider-container")[0], this.elementBuffer = this.el.getElementsByClassName("qp-buffer")[0], this.elementProgress = this.el.getElementsByClassName("qp-progress")[0], this.elementThumb = this.el.getElementsByClassName("qp-knob")[0], this.userInteract = new b(this.element(), {preventScrolling: !0}), this.userInteract.on("dragStart", this.dragStartListener), this.userInteract.on("drag", this.dragMoveListener), this.userInteract.on("dragEnd", this.dragEndListener), this.userInteract.on("tap click", this.tapListener)
                }, dragStart: function () {
                    this.trigger("dragStart"), this.railBounds = d.bounds(this.elementRail)
                }, dragEnd: function (a) {
                    this.dragMove(a), this.trigger("dragEnd")
                }, dragMove: function (a) {
                    var b, c, e = this.railBounds = this.railBounds ? this.railBounds : d.bounds(this.elementRail);
                    return "horizontal" === this.orientation ? (b = a.pageX, c = b < e.left ? 0 : b > e.right ? 100 : 100 * d.between((b - e.left) / e.width, 0, 1)) : (b = a.pageY, c = b >= e.bottom ? 0 : b <= e.top ? 100 : 100 * d.between((e.height - (b - e.top)) / e.height, 0, 1)), this.render(c), this.update(c), !1
                }, tap: function (a) {
                    this.railBounds = d.bounds(this.elementRail), this.dragMove(a)
                }, update: function (a) {
                    this.trigger("update", {percentage: a})
                }, render: function (a) {
                    a = Math.max(0, Math.min(a, 100)), "horizontal" === this.orientation ? (this.elementThumb.style.left = a + "%", this.elementProgress.style.width = a + "%") : (this.elementThumb.style.bottom = a + "%", this.elementProgress.style.height = a + "%")
                }, updateBuffer: function (a) {
                    this.elementBuffer.style.width = a + "%"
                }, element: function () {
                    return this.el
                }
            });
            return e
        }.apply(b, d), !(void 0 !== e && (a.exports = e))
    }, function (a, b, c) {
        var d, e;
        d = [c(54), c(52)], e = function (a, b) {
            function c() {
            }

            var d = function (a, c) {
                var d, e = this;
                d = a && b.has(a, "constructor") ? a.constructor : function () {
                        return e.apply(this, arguments)
                    }, b.extend(d, e, c);
                var f = function () {
                    this.constructor = d
                };
                return f.prototype = e.prototype, d.prototype = new f, a && b.extend(d.prototype, a), d.__super__ = e.prototype, d
            };
            return c.extend = d, b.extend(c.prototype, a), c
        }.apply(b, d), !(void 0 !== e && (a.exports = e))
    }, function (a, b, c) {
        var d = c(116);
        a.exports = (d.default || d).template({
            compiler: [7, ">= 4.0.0"], main: function (a, b, c, d, e) {
                var f, g = null != b ? b : {}, h = c.helperMissing, i = "function", j = a.escapeExpression;
                return '<div class="' + j((f = null != (f = c.className || (null != b ? b.className : b)) ? f : h, typeof f === i ? f.call(g, {
                            name: "className",
                            hash: {},
                            data: e
                        }) : f)) + " " + j((f = null != (f = c.orientation || (null != b ? b.orientation : b)) ? f : h, typeof f === i ? f.call(g, {
                            name: "orientation",
                            hash: {},
                            data: e
                        }) : f)) + ' qp-reset">\r\n    <div class="qp-slider-container qp-reset">\r\n        <div class="qp-rail qp-reset"></div>\r\n        <div class="qp-buffer qp-reset"></div>\r\n        <div class="qp-progress qp-reset"></div>\r\n        <div class="qp-knob qp-reset"></div>\r\n    </div>\r\n</div>'
            }, useData: !0
        })
    }, function (a, b, c) {
        var d, e;
        d = [c(144), c(55)], e = function (a, b) {
            var c = a.extend({
                constructor: function (a) {
                    this.el = document.createElement("div"), this.el.className = "qp-icon qp-icon-tooltip " + a + " qp-button-color qp-reset qp-hidden", this.container = document.createElement("div"), this.container.className = "qp-overlay qp-reset", this.openClass = "qp-open", this.componentType = "tooltip", this.el.appendChild(this.container)
                }, addContent: function (a) {
                    this.content && this.removeContent(), this.content = a, this.container.appendChild(a)
                }, removeContent: function () {
                    this.content && (this.container.removeChild(this.content), this.content = null)
                }, hasContent: function () {
                    return !!this.content
                }, element: function () {
                    return this.el
                }, openTooltip: function (a) {
                    this.trigger("open-" + this.componentType, a, {isOpen: !0}), this.isOpen = !0, b.toggleClass(this.el, this.openClass, this.isOpen)
                }, closeTooltip: function (a) {
                    this.trigger("close-" + this.componentType, a, {isOpen: !1}), this.isOpen = !1, b.toggleClass(this.el, this.openClass, this.isOpen)
                }, toggleOpenState: function (a) {
                    this.isOpen ? this.closeTooltip(a) : this.openTooltip(a)
                }
            });
            return c
        }.apply(b, d), !(void 0 !== e && (a.exports = e))
    }, function (a, b, c) {
        var d, e;
        d = [c(52), c(55), c(108)], e = function (a, b, c) {
            function d(a, b) {
                this.time = a, this.text = b, this.el = document.createElement("div"), this.el.className = "qp-cue qp-reset"
            }

            a.extend(d.prototype, {
                align: function (a) {
                    if ("%" === this.time.toString().slice(-1)) this.pct = this.time; else {
                        var b = this.time / a * 100;
                        this.pct = b + "%"
                    }
                    this.el.style.left = this.pct
                }
            });
            var e = {
                loadChapters: function (a) {
                    b.ajax(a, this.chaptersLoaded.bind(this), this.chaptersFailed, {plainText: !0})
                }, chaptersLoaded: function (b) {
                    var d = c(b.responseText);
                    a.isArray(d) && (a.each(d, this.addCue, this), this.drawCues())
                }, chaptersFailed: function () {
                }, addCue: function (a) {
                    this.cues.push(new d(a.begin, a.text))
                }, drawCues: function () {
                    var b = this._model.mediaModel.get("duration");
                    if (!b || b <= 0)return void this._model.mediaModel.once("change:duration", this.drawCues, this);
                    var c = this;
                    a.each(this.cues, function (a) {
                        a.align(b), a.el.addEventListener("mouseover", function () {
                            c.activeCue = a
                        }), a.el.addEventListener("mouseout", function () {
                            c.activeCue = null
                        }), c.elementRail.appendChild(a.el)
                    })
                }, resetChapters: function () {
                    a.each(this.cues, function (a) {
                        a.el.parentNode && a.el.parentNode.removeChild(a.el)
                    }, this), this.cues = []
                }
            };
            return e
        }.apply(b, d), !(void 0 !== e && (a.exports = e))
    }, function (a, b, c) {
        var d, e;
        d = [c(52), c(55), c(108)], e = function (a, b, c) {
            function d(a) {
                this.begin = a.begin, this.end = a.end, this.img = a.text
            }

            var e = {
                loadThumbnails: function (a) {
                    a && (this.vttPath = a.split("?")[0].split("/").slice(0, -1).join("/"), this.individualImage = null, b.ajax(a, this.thumbnailsLoaded.bind(this), this.thumbnailsFailed.bind(this), {plainText: !0}))
                }, thumbnailsLoaded: function (b) {
                    var e = c(b.responseText);
                    a.isArray(e) && (a.each(e, function (a) {
                        this.thumbnails.push(new d(a))
                    }, this), this.drawCues())
                }, thumbnailsFailed: function () {
                }, chooseThumbnail: function (b) {
                    var c = a.sortedIndex(this.thumbnails, {end: b}, a.property("end"));
                    c >= this.thumbnails.length && (c = this.thumbnails.length - 1);
                    var d = this.thumbnails[c].img;
                    return d.indexOf("://") < 0 && (d = this.vttPath ? this.vttPath + "/" + d : d), d
                }, loadThumbnail: function (b) {
                    var c = this.chooseThumbnail(b), d = {display: "block", margin: "0 auto", backgroundPosition: "0 0"}, e = c.indexOf("#xywh");
                    if (e > 0)try {
                        var f = /(.+)\#xywh=(\d+),(\d+),(\d+),(\d+)/.exec(c);
                        c = f[1], d.backgroundPosition = f[2] * -1 + "px " + f[3] * -1 + "px", d.width = f[4], d.height = f[5]
                    } catch (a) {
                        return
                    } else this.individualImage || (this.individualImage = new Image, this.individualImage.onload = a.bind(function () {
                        this.individualImage.onload = null, this.timeTip.image({width: this.individualImage.width, height: this.individualImage.height})
                    }, this), this.individualImage.src = c);
                    return d.backgroundImage = 'url("' + c + '")', d
                }, showThumbnail: function (a) {
                    this.thumbnails.length < 1 || this.timeTip.image(this.loadThumbnail(a))
                }, resetThumbnails: function () {
                    this.timeTip.image({backgroundImage: "", width: 0, height: 0}), this.thumbnails = []
                }
            };
            return e
        }.apply(b, d), !(void 0 !== e && (a.exports = e))
    }, function (a, b, c) {
        var d, e;
        d = [c(146), c(55), c(52), c(114), c(150)], e = function (a, b, c, d, e) {
            var f = a.extend({
                setup: function (a, f, g) {
                    this.iconUI || (this.iconUI = new d(this.el, {
                        useHover: !0,
                        directSelect: !0
                    }), this.toggleValueListener = this.toggleValue.bind(this), this.toggleOpenStateListener = this.toggleOpenState.bind(this), this.openTooltipListener = this.openTooltip.bind(this), this.closeTooltipListener = this.closeTooltip.bind(this), this.selectListener = this.select.bind(this)), this.reset(), a = c.isArray(a) ? a : [], b.toggleClass(this.el, "qp-hidden", a.length < 2);
                    var h = a.length > 2 || 2 === a.length && g && g.toggle === !1, i = !h && 2 === a.length;
                    if (b.toggleClass(this.el, "qp-toggle", i), b.toggleClass(this.el, "qp-button-color", !i), this.isActive = h || i, h) {
                        b.removeClass(this.el, "qp-off"), this.iconUI.on("tap", this.toggleOpenStateListener).on("over", this.openTooltipListener).on("out", this.closeTooltipListener);
                        var j = e(a), k = b.createElement(j);
                        this.addContent(k), this.contentUI = new d(this.content).on("click tap", this.selectListener)
                    } else i && this.iconUI.on("click tap", this.toggleValueListener);
                    this.selectItem(f)
                }, toggleValue: function () {
                    this.trigger("toggleValue")
                }, select: function (a) {
                    if (a.target.parentElement === this.content) {
                        var d = b.classList(a.target), e = c.find(d, function (a) {
                            return 0 === a.indexOf("qp-item")
                        });
                        e && (this.trigger("select", parseInt(e.split("-")[2])), this.closeTooltipListener())
                    }
                }, selectItem: function (a) {
                    if (this.content)for (var c = 0; c < this.content.children.length; c++)b.toggleClass(this.content.children[c], "qp-active-option", a === c); else b.toggleClass(this.el, "qp-off", 0 === a)
                }, reset: function () {
                    b.addClass(this.el, "qp-off"), this.iconUI.off(), this.contentUI && this.contentUI.off().destroy(), this.removeContent()
                }
            });
            return f
        }.apply(b, d), !(void 0 !== e && (a.exports = e))
    }, function (a, b, c) {
        var d = c(116);
        a.exports = (d.default || d).template({
            1: function (a, b, c, d, e) {
                var f, g = a.escapeExpression;
                return "        <li class='qp-text qp-option qp-item-" + g((f = null != (f = c.index || e && e.index) ? f : c.helperMissing, "function" == typeof f ? f.call(null != b ? b : {}, {
                            name: "index",
                            hash: {},
                            data: e
                        }) : f)) + " qp-reset'>" + g(a.lambda(null != b ? b.label : b, b)) + "</li>\r\n"
            }, compiler: [7, ">= 4.0.0"], main: function (a, b, c, d, e) {
                var f;
                return '<ul class="qp-menu qp-background-color qp-reset">\r\n' + (null != (f = c.each.call(null != b ? b : {}, b, {
                        name: "each",
                        hash: {},
                        fn: a.program(1, e, 0),
                        inverse: a.noop,
                        data: e
                    })) ? f : "") + "</ul>"
            }, useData: !0
        })
    }, function (a, b, c) {
        var d, e;
        d = [c(55), c(52), c(146), c(114), c(152)], e = function (a, b, c, d, e) {
            var f = c.extend({
                setup: function (c, e) {
                    if (this.iconUI || (this.iconUI = new d(this.el, {useHover: !0}), this.toggleOpenStateListener = this.toggleOpenState.bind(this), this.openTooltipListener = this.openTooltip.bind(this), this.closeTooltipListener = this.closeTooltip.bind(this), this.selectListener = this.onSelect.bind(this)), this.reset(), c = b.isArray(c) ? c : [], a.toggleClass(this.el, "qp-hidden", c.length < 2), c.length >= 2) {
                        this.iconUI = new d(this.el, {useHover: !0}).on("tap", this.toggleOpenStateListener).on("over", this.openTooltipListener).on("out", this.closeTooltipListener);
                        var f = this.menuTemplate(c, e), g = a.createElement(f);
                        this.addContent(g), this.contentUI = new d(this.content), this.contentUI.on("click tap", this.selectListener)
                    }
                    this.originalList = c
                }, menuTemplate: function (c, d) {
                    var f = b.map(c, function (a, b) {
                        var c = a.states ? a.states.duration : "";
                        return {active: b === d, label: b + 1, title: a.title, img: a.image || "", desc: a.description || "", duration: c || ""}
                    }), g = {title: a.getString("S0239"), items: f};
                    return e(g)
                }, onSelect: function (c) {
                    var d = c.target;
                    if ("UL" !== d.tagName) {
                        "LI" !== d.tagName && (d = d.parentElement);
                        var e = a.classList(d), f = b.find(e, function (a) {
                            return 0 === a.indexOf("qp-item")
                        });
                        f && (this.trigger("select", parseInt(f.split("-")[2])), this.closeTooltip())
                    }
                }, selectItem: function (a) {
                    this.setup(this.originalList, a)
                }, reset: function () {
                    this.iconUI.off(), this.contentUI && this.contentUI.off().destroy(), this.removeContent()
                }
            });
            return f
        }.apply(b, d), !(void 0 !== e && (a.exports = e))
    }, function (a, b, c) {
        var d = c(116);
        a.exports = (d.default || d).template({
            1: function (a, b, c, d, e) {
                var f, g, h = null != b ? b : {}, i = c.helperMissing, j = "function", k = a.escapeExpression;
                return "            <li class='qp-option qp-text " + (null != (f = c.if.call(h, null != b ? b.active : b, {
                        name: "if",
                        hash: {},
                        fn: a.program(2, e, 0),
                        inverse: a.noop,
                        data: e
                    })) ? f : "") + " qp-item-" + k((g = null != (g = c.index || e && e.index) ? g : i, typeof g === j ? g.call(h, {
                            name: "index",
                            hash: {},
                            data: e
                        }) : g)) + ' qp-reset\'>\r\n                <span class="qp-label qp-reset">\r\n                    <span class="qp-icon qp-icon-play qp-reset"></span>\r\n                    <span class="qp-playlist-index qp-reset">' + k((g = null != (g = c.label || (null != b ? b.label : b)) ? g : i, typeof g === j ? g.call(h, {
                            name: "label",
                            hash: {},
                            data: e
                        }) : g)) + '</span>\r\n                </span>\r\n                <span class="qp-image qp-reset" style=\'background-image: url("' + k((g = null != (g = c.img || (null != b ? b.img : b)) ? g : i, typeof g === j ? g.call(h, {
                            name: "img",
                            hash: {},
                            data: e
                        }) : g)) + '")\'>\r\n                    <span class="qp-duration qp-reset">' + k((g = null != (g = c.duration || (null != b ? b.duration : b)) ? g : i, typeof g === j ? g.call(h, {
                            name: "duration",
                            hash: {},
                            data: e
                        }) : g)) + '</span>\r\n                </span>\r\n                <span class="qp-name qp-reset"><p>' + k((g = null != (g = c.title || (null != b ? b.title : b)) ? g : i, typeof g === j ? g.call(h, {
                            name: "title",
                            hash: {},
                            data: e
                        }) : g)) + '</p></span>\r\n                <span class="qp-desc qp-reset"><p>' + k((g = null != (g = c.desc || (null != b ? b.desc : b)) ? g : i, typeof g === j ? g.call(h, {
                            name: "desc",
                            hash: {},
                            data: e
                        }) : g)) + "</p></span>\r\n\r\n            </li>\r\n"
            }, 2: function (a, b, c, d, e) {
                return "qp-active-option"
            }, compiler: [7, ">= 4.0.0"], main: function (a, b, c, d, e) {
                var f, g, h = null != b ? b : {};
                return '<div class="qp-menu qp-playlist-container qp-background-color qp-reset">\r\n\r\n    <div class="qp-tooltip-title qp-reset">\r\n        <span class="qp-icon qp-icon-inline qp-icon-playlist qp-reset"></span>\r\n        <span class="qp-text qp-reset">' + a.escapeExpression((g = null != (g = c.title || (null != b ? b.title : b)) ? g : c.helperMissing, "function" == typeof g ? g.call(h, {
                            name: "title",
                            hash: {},
                            data: e
                        }) : g)) + '</span>\r\n    </div>\r\n\r\n    <ul class="qp-playlist qp-reset">\r\n' + (null != (f = c.each.call(h, null != b ? b.items : b, {
                        name: "each",
                        hash: {},
                        fn: a.program(1, e, 0),
                        inverse: a.noop,
                        data: e
                    })) ? f : "") + "    </ul>\r\n</div>"
            }, useData: !0
        })
    }, function (a, b, c) {
        var d, e;
        d = [c(146), c(143), c(114), c(55)], e = function (a, b, c, d) {
            var e = a.extend({
                constructor: function (e, f) {
                    this._model = e, a.call(this, f), this.volumeSlider = new b("qp-slider-volume qp-volume-tip", "vertical"), this.addContent(this.volumeSlider.element()), this.volumeSlider.on("update", function (a) {
                        this.trigger("update", a)
                    }, this), d.removeClass(this.el, "qp-hidden"), new c(this.el, {
                        useHover: !0,
                        directSelect: !0
                    }).on("click", this.toggleValue, this).on("tap", this.toggleOpenState, this).on("over", this.openTooltip, this).on("out", this.closeTooltip, this), this._model.on("change:volume", this.onVolume, this)
                }, toggleValue: function () {
                    this.trigger("toggleValue")
                }
            });
            return e
        }.apply(b, d), !(void 0 !== e && (a.exports = e))
    }, function (a, b, c) {
        var d, e;
        d = [c(146), c(55), c(52), c(114)], e = function (a, b, c, d) {
            var e = a.extend({
                constructor: function (b) {
                    a.call(this, b), this.container.className = "qp-overlay-horizontal qp-reset", this.openClass = "qp-open-drawer", this.componentType = "drawer"
                }, setup: function (a, e) {
                    this.iconUI || (this.iconUI = new d(this.el, {
                        useHover: !0,
                        directSelect: !0
                    }), this.toggleOpenStateListener = this.toggleOpenState.bind(this), this.openTooltipListener = this.openTooltip.bind(this), this.closeTooltipListener = this.closeTooltip.bind(this)), this.reset(), a = c.isArray(a) ? a : [], this.activeContents = c.filter(a, function (a) {
                        return a.isActive
                    }), b.toggleClass(this.el, "qp-hidden", !e || this.activeContents.length < 2), e && this.activeContents.length > 1 && (b.removeClass(this.el, "qp-off"), this.iconUI.on("tap", this.toggleOpenStateListener).on("over", this.openTooltipListener).on("out", this.closeTooltipListener), c.each(a, function (a) {
                        this.container.appendChild(a.el)
                    }, this))
                }, reset: function () {
                    b.addClass(this.el, "qp-off"), this.iconUI.off(), this.contentUI && this.contentUI.off().destroy(), this.removeContent()
                }
            });
            return e
        }.apply(b, d), !(void 0 !== e && (a.exports = e))
    }, function (a, b, c) {
        var d, e;
        d = [c(52)], e = function (a) {
            var b = function (a) {
                this.model = a, this.model.on("change:playlistItem", this.loadImage, this)
            };
            return a.extend(b.prototype, {
                setup: function (a) {
                    this.el = a, this.model.get("playlistItem") && this.loadImage(this.model, this.model.get("playlistItem"))
                }, loadImage: function (b, c) {
                    var d = c.image;
                    a.isString(d) ? this.el.style.backgroundImage = 'url("' + d + '")' : this.el.style.backgroundImage = ""
                }, element: function () {
                    return this.el
                }
            }), b
        }.apply(b, d), !(void 0 !== e && (a.exports = e))
    }, function (a, b, c) {
        var d, e;
        d = [c(55), c(157), c(52), c(114), c(67)], e = function (a, b, c, d, e) {
            var f = function () {
            };
            return c.extend(f.prototype, {
                buildArray: function () {
                    var b = e.split(" "), c = b[0], d = {
                        items: [{
                            title: a.getString("S0252") + " " + c,
                            featured: !0,
                            showLogo: !0,
                            link: a.getString("L0110"),
                            target: "_blank"
                        }]
                    }, f = c.indexOf("-") > 0, g = b[1];
                    if (f && g) {
                        var h = g.split(".");
                        d.items.push({title: "build: (" + h[0] + "." + h[1] + ")", link: "#"})
                    }
                    var i = this.model.get("provider").name;
                    if (i.indexOf("flash") >= 0) {
                        var j = a.getString("S0253") + " " + a.flashVersion();
                        d.items.push({title: j, link: "http://www.adobe.com/software/flash/about/"})
                    }
                    return d
                }, buildMenu: function () {
                    var c = this.buildArray();
                    return a.createElement(b(c))
                }, updateHtml: function () {
                    this.el.innerHTML = this.buildMenu().innerHTML
                }, rightClick: function (a) {
                    return this.lazySetup(), !this.mouseOverContext && (this.hideMenu(), this.showMenu(a), !1)
                }, getOffset: function (a) {
                    for (var b = a.target, c = a.offsetX || a.layerX, d = a.offsetY || a.layerY; b !== this.playerElement;)c += b.offsetLeft, d += b.offsetTop, b = b.parentNode;
                    return this.playerElement.getAttribute("class").indexOf("qp-flag-box-open") > -1, {x: c, y: d}
                }, showMenu: function (b) {
                    var c = this.getOffset(b);
                    return this.el.style.left = c.x + "px", this.el.style.top = c.y + "px", a.addClass(this.playerElement, "qp-flag-rightclick-open"), a.addClass(this.el, "qp-open"), !1
                }, hideMenu: function () {
                    this.mouseOverContext || a.removeClass(this.el, "qp-open")
                }, lazySetup: function () {
                    this.el || (this.el = this.buildMenu(), this.layer.appendChild(this.el), this.hideMenuHandler = this.hideMenu.bind(this), this.addOffListener(this.playerElement), this.addOffListener(document), this.model.on("change:provider", this.updateHtml, this), this.elementUI = new d(this.el, {useHover: !0}).on("over", function () {
                        this.mouseOverContext = !0
                    }, this).on("out", function () {
                        this.mouseOverContext = !1
                    }, this))
                }, setup: function (a, b, c) {
                    this.playerElement = b, this.model = a, this.mouseOverContext = !1, this.layer = c, b.oncontextmenu = this.rightClick.bind(this)
                }, addOffListener: function (a) {
                    a.addEventListener("mousedown", this.hideMenuHandler), a.addEventListener("touchstart", this.hideMenuHandler), a.addEventListener("pointerdown", this.hideMenuHandler)
                }, removeOffListener: function (a) {
                    a.removeEventListener("mousedown", this.hideMenuHandler), a.removeEventListener("touchstart", this.hideMenuHandler), a.removeEventListener("pointerdown", this.hideMenuHandler)
                }, destroy: function () {
                    this.el && (this.hideMenu(), this.elementUI.off(), this.removeOffListener(this.playerElement), this.removeOffListener(document), this.hideMenuHandler = null, this.el = null), this.playerElement && (this.playerElement.oncontextmenu = null, this.playerElement = null), this.model && (this.model.off("change:provider", this.updateHtml), this.model = null)
                }
            }), f
        }.apply(b, d), !(void 0 !== e && (a.exports = e))
    }, function (a, b, c) {
        var d = c(116);
        a.exports = (d.default || d).template({
            1: function (a, b, c, d, e) {
                var f, g, h = null != b ? b : {}, i = c.helperMissing, j = "function", k = a.escapeExpression;
                return '        <li class="qp-reset' + (null != (f = c.if.call(h, null != b ? b.featured : b, {
                        name: "if",
                        hash: {},
                        fn: a.program(2, e, 0),
                        inverse: a.noop,
                        data: e
                    })) ? f : "") + '">\r\n            <a href="' + k((g = null != (g = c.link || (null != b ? b.link : b)) ? g : i, typeof g === j ? g.call(h, {
                            name: "link",
                            hash: {},
                            data: e
                        }) : g)) + '" class="qp-reset" target="' + k((g = null != (g = c.target || (null != b ? b.target : b)) ? g : i, typeof g === j ? g.call(h, {
                            name: "target",
                            hash: {},
                            data: e
                        }) : g)) + '">\r\n' + (null != (f = c.if.call(h, null != b ? b.showLogo : b, {
                        name: "if",
                        hash: {},
                        fn: a.program(4, e, 0),
                        inverse: a.noop,
                        data: e
                    })) ? f : "") + "                " + k((g = null != (g = c.title || (null != b ? b.title : b)) ? g : i, typeof g === j ? g.call(h, {
                            name: "title",
                            hash: {},
                            data: e
                        }) : g)) + "\r\n            </a>\r\n        </li>\r\n"
            }, 2: function (a, b, c, d, e) {
                return " qp-featured"
            }, 4: function (a, b, c, d, e) {
                return '                <span class="qp-icon qp-icon-logo qp-reset"></span>\r\n'
            }, compiler: [7, ">= 4.0.0"], main: function (a, b, c, d, e) {
                var f;
                return '<div class="qp-rightclick qp-reset">\r\n    <ul class="qp-reset">\r\n' + (null != (f = c.each.call(null != b ? b : {}, null != b ? b.items : b, {
                        name: "each",
                        hash: {},
                        fn: a.program(1, e, 0),
                        inverse: a.noop,
                        data: e
                    })) ? f : "") + "    </ul>\r\n</div>"
            }, useData: !0
        })
    }, function (a, b, c) {
        var d, e;
        d = [c(52)], e = function (a) {
            var b = function (a) {
                this.model = a, this.model.on("change:playlistItem", this.playlistItem, this)
            };
            return a.extend(b.prototype, {
                hide: function () {
                    this.el.style.display = "none"
                }, show: function () {
                    this.el.style.display = ""
                }, setup: function (a) {
                    this.el = a;
                    var b = this.el.getElementsByTagName("div");
                    this.title = b[0], this.description = b[1], this.model.get("playlistItem") && this.playlistItem(this.model, this.model.get("playlistItem"))
                }, playlistItem: function (a, b) {
                    if (a.get("displaytitle") || a.get("displaydescription")) {
                        var c = "", d = "";
                        b.title && a.get("displaytitle") && (c = b.title), b.description && a.get("displaydescription") && (d = b.description), this.updateText(c, d)
                    } else this.hide()
                }, updateText: function (a, b) {
                    this.title.innerHTML = a, this.description.innerHTML = b, this.title.style.display = "block", this.description.style.display = "block", a || (this.title.style.display = "none"), b || (this.description.style.display = "none"), this.title.firstChild || this.description.firstChild ? this.show() : this.hide()
                }, element: function () {
                    return this.el
                }
            }), b
        }.apply(b, d),
            !(void 0 !== e && (a.exports = e))
    }, function (a, b, c) {
        var d = c(116);
        a.exports = (d.default || d).template({
            compiler: [7, ">= 4.0.0"], main: function (a, b, c, d, e) {
                var f;
                return '<div id="' + a.escapeExpression((f = null != (f = c.id || (null != b ? b.id : b)) ? f : c.helperMissing, "function" == typeof f ? f.call(null != b ? b : {}, {
                            name: "id",
                            hash: {},
                            data: e
                        }) : f)) + '" class="qplayer qp-reset qp-frist-start" tabindex="0">\r\n    <div class="qp-aspect qp-reset"></div>\r\n    <div class="qp-media qp-reset"></div>\r\n    <div class="qp-preview qp-reset"></div>\r\n    <div class="qp-title qp-reset">\r\n        <div class="qp-title-primary qp-reset"></div>\r\n        <div class="qp-title-secondary qp-reset"></div>\r\n        <div class="qp-title-more-detail qp-reset"></div>\r\n    </div>\r\n    <div class="qp-overlays qp-reset"></div>\r\n    <div class="qp-controls qp-reset"></div>\r\n    <div class="qp-states-place">\r\n        <div class="qp-states-place-item qp-states-place-live">\r\n            <span class="qp-icon qp-icon-cue"></span>\r\n            <div class="qp-states-title"></div>\r\n        </div>\r\n    </div>\r\n    <div class="qp-overlays-playlist"></div>\r\n</div>'
            }, useData: !0
        })
    }, function (a, b, c) {
        var d, e;
        d = [c(161)], e = function (a) {
            function b(b, c, d, e) {
                return a({id: b, skin: c, title: d, body: e})
            }

            return b
        }.apply(b, d), !(void 0 !== e && (a.exports = e))
    }, function (a, b, c) {
        var d = c(116);
        a.exports = (d.default || d).template({
            compiler: [7, ">= 4.0.0"], main: function (a, b, c, d, e) {
                var f, g = null != b ? b : {}, h = c.helperMissing, i = "function", j = a.escapeExpression;
                return '<div id="' + j((f = null != (f = c.id || (null != b ? b.id : b)) ? f : h, typeof f === i ? f.call(g, {
                            name: "id",
                            hash: {},
                            data: e
                        }) : f)) + '"class="qp-skin-' + j((f = null != (f = c.skin || (null != b ? b.skin : b)) ? f : h, typeof f === i ? f.call(g, {
                            name: "skin",
                            hash: {},
                            data: e
                        }) : f)) + ' qp-error qp-reset">\r\n    <div class="qp-title qp-reset">\r\n        <div class="qp-title-primary qp-reset">' + j((f = null != (f = c.title || (null != b ? b.title : b)) ? f : h, typeof f === i ? f.call(g, {
                            name: "title",
                            hash: {},
                            data: e
                        }) : f)) + '</div>\r\n        <div class="qp-title-secondary qp-reset">' + j((f = null != (f = c.body || (null != b ? b.body : b)) ? f : h, typeof f === i ? f.call(g, {
                            name: "body",
                            hash: {},
                            data: e
                        }) : f)) + '</div>\r\n    </div>\r\n\r\n    <div class="qp-icon-container qp-reset">\r\n        <div class="qp-display-icon-container qp-background-color qp-reset">\r\n            <div class="qp-icon qp-icon-display qp-reset"></div>\r\n        </div>\r\n    </div>\r\n</div>\r\n'
            }, useData: !0
        })
    }, function (a, b, c) {
        var d, e;
        d = [c(98), c(52)], e = function (a, b) {
            return function (c, d) {
                var e = ["seek", "skipAd", "stop", "playlistNext", "playlistPrev", "playlistItem", "resize", "addButton", "removeButton", "registerPlugin", "attachMedia"];
                b.each(e, function (a) {
                    c[a] = function () {
                        return d[a].apply(d, arguments), c
                    }
                }), c.registerPlugin = a.registerPlugin
            }
        }.apply(b, d), !(void 0 !== e && (a.exports = e))
    }, function (a, b, c) {
        var d, e;
        d = [c(52)], e = function (a) {
            return function (b, c) {
                var d = ["buffer", "controls", "position", "duration", "fullscreen", "volume", "mute", "item", "stretching", "playlist"];
                a.each(d, function (a) {
                    var d = a.slice(0, 1).toUpperCase() + a.slice(1);
                    b["get" + d] = function () {
                        return c._model.get(a)
                    }
                });
                var e = ["getAudioTracks", "getCaptionsList", "getWidth", "getHeight", "getCurrentAudioTrack", "setCurrentAudioTrack", "getCurrentCaptions", "setCurrentCaptions", "getCurrentQuality", "setCurrentQuality", "getQualityLevels", "getVisualQuality", "getConfig", "getState", "getSafeRegion", "isBeforeComplete", "isBeforePlay", "getProvider", "detachMedia"], f = ["setControls", "setFullscreen", "setVolume", "setMute", "setCues"];
                a.each(e, function (a) {
                    b[a] = function () {
                        return c[a] ? c[a].apply(c, arguments) : null
                    }
                }), a.each(f, function (a) {
                    b[a] = function () {
                        return c[a].apply(c, arguments), b
                    }
                })
            }
        }.apply(b, d), !(void 0 !== e && (a.exports = e))
    }, function (a, b, c) {
        var d, e;
        d = [c(61), c(165), c(166)], e = function (a, b, c) {
            var d, e = ["ar", "en", "fa"];
            return d = function () {
                var d = this, f = !1;
                this.defaultCode = "fa", this.current = "", this.acceptLanguage = e, this.Strings = {}, this.StringsLocal = {}, this.Replace = {}, this.events = {load: []}, this.baseURL = "", this.baseFolder = "languages/", this.playerInstance = null, this.StringsLocal = {
                    fa: JSON.parse(b()),
                    en: JSON.parse(c())
                }, this.onLoad = function (a) {
                    this.events.load.push(a), f === !0 && this.events.load[this.events.load.length - 1]()
                }, this.setCustom = function (a) {
                    this.Replace = a
                }, this.getString = function (a) {
                    if (void 0 !== this.Replace[a] && null !== this.Replace[a])return this.Replace[a];
                    if (void 0 === this.StringsLocal[this.current] || null === this.StringsLocal[this.current])return void 0 !== this.Strings[a] && null !== this.Strings[a] ? this.Strings[a] : null;
                    var b = this.StringsLocal[this.current];
                    return void 0 !== b[a] && null !== b[a] ? this.StringsLocal[this.current][a] : void 0
                }, this.load = function (a) {
                    if (void 0 !== a && null !== a && "" !== a && this.acceptLanguage.indexOf(a) > -1 ? this.current = a : this.current = this.defaultCode, void 0 === this.StringsLocal[this.current]) {
                        var b;
                        window.XMLHttpRequest && (b = new XMLHttpRequest), b.overrideMimeType("application/json"), b.open("GET", this.baseURL + this.baseFolder + this.current + ".lang", !0), b.onreadystatechange = function () {
                            if (4 === b.readyState && 200 === b.status) {
                                d.Strings = JSON.parse(b.responseText), f = !0;
                                for (var a = 0; a < d.events.load.length; a++)d.events.load[a]()
                            }
                        }, b.send(null)
                    } else {
                        f = !0;
                        for (var c = 0; c < this.events.load.length; c++)this.events.load[c]()
                    }
                };
                var g = function (b, c, d) {
                    var e = d.getContainer().getAttribute("class");
                    e = e.replace(/(qp-(direction|language)-(\S+)?)/g, ""), d.getContainer().setAttribute("class", e), a.toggleClass(d.getContainer(), "qp-direction-" + c), a.toggleClass(d.getContainer(), "qp-language-" + b)
                };
                this.setDirection = g
            }
        }.apply(b, d), !(void 0 !== e && (a.exports = e))
    }, function (a, b, c) {
        var d = c(116);
        a.exports = (d.default || d).template({
            compiler: [7, ">= 4.0.0"], main: function (a, b, c, d, e) {
                return '{\r\n\t"code": "fa",\r\n\t"direction": "rtl",\r\n\t"S0210": "\u062A\u0644\u0627\u0634 \u0628\u0631\u0627\u06CC \u062B\u0628\u062A \u0627\u0631\u0627\u0626\u0647 \u062F\u0647\u0646\u062F\u0647 \u0628\u0627 \u0634\u0626 \u0646\u0627\u0645\u0639\u062A\u0628\u0631",\r\n\t"S0211": "\u06A9\u0627\u0647\u0634 \u0622\u0631\u0627\u06CC\u0647 \u0628\u062F\u0648\u0646 \u0645\u0642\u062F\u0627\u0631 \u0627\u0648\u0644\u06CC\u0647 ",\r\n\t"S0212": "\u0628\u0631\u0627\u06CC \u0627\u062C\u0631\u0627\u06CC \u0641\u0644\u0634 \u06A9\u0644\u06CC\u06A9 \u0646\u0645\u0627\u06CC\u06CC\u062F ",\r\n\t"S0213": "\u0628\u0627\u0631\u06AF\u0630\u0627\u0631\u06CC \u0646\u0627\u0645\u0648\u0641\u0642 \u0627\u0641\u0632\u0648\u0646\u0647 \u0641\u0644\u0634",\r\n\t"S0214": "\u062E\u0637\u0627 \u062F\u0631 \u0628\u0627\u0631\u06AF\u0630\u0627\u0631\u06CC \u0641\u0647\u0631\u0633\u062A \u0646\u0645\u0627\u06CC\u0634: \u0647\u06CC\u0686 \u0645\u0646\u0628\u0639 \u0642\u0627\u0628\u0644 \u067E\u062E\u0634\u06CC \u06CC\u0627\u0641\u062A \u0646\u0634\u062F.",\r\n\t"S0215": "\u062E\u0637\u0627 \u062F\u0631 \u0628\u0627\u0631 \u06AF\u0630\u0627\u0631\u06CC \u0641\u0647\u0631\u0633\u062A \u0646\u0645\u0627\u06CC\u0634:",\r\n\t"S0216": "\u062E\u0637\u0627 \u062F\u0631 \u0628\u0627\u0631\u06AF\u0630\u0627\u0631\u06CC \u0641\u0627\u06CC\u0644",\r\n\t"S0217": "\u06A9\u06CC\u0648\u067E\u0644\u06CC\u0631 \u067E\u0648\u0633\u062A\u0647 \u0647\u0627\u06CC XML \u0631\u0627 \u067E\u0634\u062A\u06CC\u0628\u0627\u0646\u06CC \u0646\u0645\u06CC \u06A9\u0646\u062F",\r\n\t"S0218": "\u0641\u0627\u06CC\u0644 \u06CC\u0627\u0641\u062A \u0646\u0634\u062F",\r\n\t"S0219": "XML \u0646\u0627\u0645\u0639\u062A\u0628\u0631",\r\n\t"S0220": "JSON \u0646\u0627 \u0645\u0639\u062A\u0628\u0631",\r\n\t"S0221": "\u0628\u0631\u0627\u06CC \u0627\u062C\u0631\u0627\u06CC \u0641\u0644\u0634 \u06A9\u0644\u06CC\u06A9 \u0646\u0645\u0627\u06CC\u06CC\u062F ",\r\n\t"S0222": "\u062E\u0637\u0627 \u062F\u0631 \u0628\u0627\u0631\u06AF\u0630\u0627\u0631\u06CC \u0641\u0647\u0631\u0633\u062A \u0646\u0645\u0627\u06CC\u0634: ",\r\n\t"S0223": "RSS/JSON \u0646\u0627\u0645\u0639\u062A\u0628\u0631",\r\n\t"S0224": "\u062E\u0637\u0627 \u062F\u0631 \u0628\u0627\u0631 \u06AF\u0630\u0627\u0631\u06CC \u0641\u0647\u0631\u0633\u062A \u0646\u0645\u0627\u06CC\u0634:",\r\n\t"S0225": "\u0628\u0627\u0631\u06AF\u0630\u0627\u0631\u06CC \u062A\u0628\u0644\u06CC\u063A\u0627\u062A",\r\n\t"S0226": "\u062E\u0637\u0627 \u062F\u0631 \u0628\u0627\u0631\u06AF\u0630\u0627\u0631\u06CC \u062F\u0631\u06CC\u0627\u0641\u062A \u0627\u0633\u062A\u0631\u06CC\u0645: \u0627\u0633\u062A\u0631\u06CC\u0645 \u062F\u0631 \u0627\u0646\u062F\u0631\u0648\u06CC\u062F \u06F2.\u06F3 \u0642\u0627\u0628\u0644 \u067E\u062E\u0634 \u0646\u06CC\u0633\u062A",\r\n\t"S0227": "\u0627\u0631\u0627\u0626\u0647 \u062F\u0647\u0646\u062F\u0647 \u0645\u0646\u0627\u0633\u0628 \u06CC\u0627\u0641\u062A \u0646\u0634\u062F",\r\n\t"S0228": "\u062E\u0637\u0627 \u062F\u0631 \u0634\u0628\u06A9\u0647: \u0641\u0627\u06CC\u0644 \u0642\u0627\u0628\u0644 \u062F\u0631\u06CC\u0627\u0641\u062A \u0646\u06CC\u0633\u062A",\r\n\t"S0229": "\u0646\u0627\u0645\u0648\u0641\u0642 \u062F\u0631 \u0628\u0627\u0631\u06AF\u0630\u0627\u0631\u06CC \u0641\u0644\u0634",\r\n\t"S0230": "\u062E\u0637\u0627 \u062F\u0631 \u0627\u062A\u0645\u0627\u0645 \u0645\u0647\u0644\u062A \u0631\u0627\u0647 \u0627\u0646\u062F\u0627\u0632\u06CC",\r\n\t"S0231": "",\r\n\t"S0232": "\u0627\u0641\u0632\u0648\u0646\u0647 \u0642\u0627\u0628\u0644 \u0628\u0627\u0631 \u06AF\u0630\u0627\u0631\u06CC \u0646\u06CC\u0633\u062A",\r\n\t"S0233": "\u0647\u06CC\u0686 \u0645\u0646\u0628\u0639 \u0642\u0627\u0628\u0644 \u067E\u062E\u0634 \u06CC\u0627\u0641\u062A \u0646\u0634\u062F",\r\n\t"S0234": "\u0646\u0633\u062E\u0647 \u067E\u062E\u0634 \u06A9\u0646\u0646\u062F\u0647 \u0646\u0627\u0633\u0627\u0632\u06AF\u0627\u0631 \u0627\u0633\u062A",\r\n\t"S0235": "\u0641\u0627\u06CC\u0644 \u06CC\u0627\u0641\u062A \u0646\u0634\u062F",\r\n\t"S0236": "\u0641\u0627\u06CC\u0644 SRT \u0646\u0627\u0645\u0639\u062A\u0628\u0631",\r\n\t"S0237": "\u0641\u0627\u06CC\u0644 DFXP \u0646\u0627\u0645\u0639\u062A\u0628\u0631",\r\n\t"S0238": "\u0632\u0646\u062F\u0647",\r\n\t"S0239": "\u0641\u0647\u0631\u0633\u062A \u0646\u0645\u0627\u06CC\u0634",\r\n\t"S0240": "\u062E\u0637\u0627 \u062F\u0631 \u0628\u0627\u0631\u06AF\u0630\u0627\u0631\u06CC \u0631\u0633\u0627\u0646\u0647 : \u0641\u0627\u06CC\u0644 \u063A\u06CC\u0631 \u0642\u0627\u0628\u0644 \u067E\u062E\u0634 \u0627\u0633\u062A.",\r\n\t"S0241": "\u062E\u0637\u0627 \u062F\u0631 \u067E\u0631\u062F\u0627\u0632\u0634: \u0645\u0631\u0648\u0631\u06AF\u0631 \u0634\u0645\u0627 \u067E\u0634\u062A\u06CC\u0628\u0627\u0646\u06CC \u0646\u0645\u06CC \u06A9\u0646\u062F",\r\n\t"S0242": "\u062C\u0627\u06CC\u06AF\u0630\u0627\u0631\u06CC \u0648\u06CC\u062F\u0626\u0648",\r\n\t"S0243": "\u06A9\u067E\u06CC",\r\n\t"S0244": "\u0627\u06CC\u0645\u06CC\u0644 \u0644\u06CC\u0646\u06A9 \u0648\u06CC\u062F\u0626\u0648 \u0628\u0647",\r\n\t"S0245": "\u0627\u0631\u0633\u0627\u0644",\r\n\t"S0246": "\u062F\u0627\u0646\u0644\u0648\u062F \u0648\u06CC\u062F\u0626\u0648",\r\n\t"S0247": "\u062F\u0631\u06CC\u0627\u0641\u062A \u0641\u0627\u06CC\u0644",\r\n\t"S0248": "",\r\n\t"S0249": "\u0648\u06CC\u062F\u06CC\u0648 \u067E\u062E\u0634 \u0646\u0645\u06CC\u0634\u0648\u062F",\r\n\t"S0250": "\u06A9\u06CC\u0641\u06CC\u062A \u0646\u0627 \u0645\u0646\u0627\u0633\u0628",\r\n\t"S0251": "\u0633\u0631\u0639\u062A \u067E\u062E\u0634 \u067E\u0627\u06CC\u06CC\u0646",\r\n\t"S0252": "\u0642\u062F\u0631\u062A \u06AF\u0631\u0641\u062A\u0647 \u0627\u0632 \u06A9\u06CC\u0648\u067E\u0644\u06CC\u0631 ",\r\n\t"S0253": "\u0646\u0633\u062E\u0647 \u0641\u0644\u0634",\r\n\t"S0254": "\u0642\u0627\u062F\u0631 \u0628\u0647 \u062E\u0648\u0627\u0646\u062F\u0646 \u062C\u0648\u0627\u0628 \u0646\u06CC\u0633\u062A",\r\n\t"S0255": "\u062E\u0637\u0627 \u062F\u0631 \u067E\u062E\u0634 \u0631\u0633\u0627\u0646\u0647 ",\r\n\t"S0256": "\u062E\u0637\u0627: \u0646\u0627\u0645\u0648\u0641\u0642 \u062F\u0631 \u0628\u0627\u0631\u06AF\u0630\u0627\u0631\u06CC",\r\n\t"S0257": "\u0632\u06CC\u0631\u0646\u0648\u06CC\u0633 \u0646\u0627\u0645\u0639\u0644\u0648\u0645",\r\n\t"S0258": "\u0628\u0627\u0631 \u06AF\u0630\u0627\u0631\u06CC \u062A\u0628\u0644\u06CC\u063A\u0627\u062A",\r\n\t"S0259": "\u0631\u0627\u0647 \u0627\u0646\u062F\u0627\u0632\u06CC \u0628\u06CC\u0634 \u0627\u0632 XX \u062B\u0627\u0646\u06CC\u0647 \u0637\u0648\u0644 \u06A9\u0634\u06CC\u062F \u062A\u0627 \u0628\u0647 \u0627\u062A\u0645\u0627\u0645 \u0628\u0631\u0633\u062F.",\r\n\t"S0260": "\u062E\u0637\u0627 \u062F\u0631 \u0628\u0627\u0631\u06AF\u0630\u0627\u0631\u06CC \u067E\u062E\u0634 \u06A9\u0646\u0646\u062F\u0647 ",\r\n\t"S0261": "\u062E\u0648\u062F\u06A9\u0627\u0631",\r\n\t"S0262": "\u062E\u0627\u0645\u0648\u0634",\r\n\t"S0263": "\u062E\u0637\u0627 \u062F\u0631 \u067E\u062E\u0634 \u0631\u0633\u0627\u0646\u0647:",\r\n\t"S0264": "\u062E\u0637\u0627 \u062F\u0631 \u067E\u062E\u0634 \u0631\u0633\u0627\u0646\u0647: \u0641\u0627\u06CC\u0644 \u063A\u06CC\u0631 \u0642\u0627\u0628\u0644 \u067E\u062E\u0634 \u0627\u0633\u062A",\r\n\t"L0110": "//player.qmery.com/"\r\n}'
            }, useData: !0
        })
    }, function (a, b, c) {
        var d = c(116);
        a.exports = (d.default || d).template({
            compiler: [7, ">= 4.0.0"], main: function (a, b, c, d, e) {
                return '{\r\n\t"code": "en",\r\n\t"direction": "ltr",\r\n\t"S0210": "Tried to register a provider with an invalid object",\r\n\t"S0211": "Reduce of empty array with no initial value",\r\n\t"S0212": "Click to run Flash",\r\n\t"S0213": "Flash plugin failed to load",\r\n\t"S0214": "Error loading playlist: No playable sources found",\r\n\t"S0215": "Playlist load error: ",\r\n\t"S0216": "Error loading file",\r\n\t"S0217": "QPlayer does not support XML skins, please update your config",\r\n\t"S0218": "File not found",\r\n\t"S0219": "Invalid XML",\r\n\t"S0220": "Invalid JSON",\r\n\t"S0221": "Click to run Flash",\r\n\t"S0222": "Error loading playlist: ",\r\n\t"S0223": "Not a valid RSS/JSON feed",\r\n\t"S0224": "Playlist load error: ",\r\n\t"S0225": "Loading ad",\r\n\t"S0226": "Error loading instream: Cannot play instream on Android 2.3",\r\n\t"S0227": "No suitable provider found",\r\n\t"S0228": "Error on network : File could not be catched",\r\n\t"S0229": "Failed to setup flash",\r\n\t"S0230": "Setup Timeout Error",\r\n\t"S0231": "",\r\n\t"S0232": "Could not load plugin",\r\n\t"S0233": "No playable sources found",\r\n\t"S0234": "Incompatible player version",\r\n\t"S0235": "File not found",\r\n\t"S0236": "Invalid SRT file",\r\n\t"S0237": "Invalid DFXP file",\r\n\t"S0238": "Live",\r\n\t"S0239": "Playlist",\r\n\t"S0240": "Error loading media: File could not be played",\r\n\t"S0241": "Error on rendering : your browser doesn\'t support",\r\n\t"S0242": "Video placement",\r\n\t"S0243": "Copy",\r\n\t"S0244": "Send video link to",\r\n\t"S0245": "Send",\r\n\t"S0246": "Donwload video",\r\n\t"S0247": "Download",\r\n\t"S0248": "",\r\n\t"S0249": "Video not playing",\r\n\t"S0250": "Bad quality",\r\n\t"S0251": "Low playing speed ",\r\n\t"S0252": "Powered by QPlayer ",\r\n\t"S0253": "Flash version",\r\n\t"S0254": "could not read response as ArrayBuffer",\r\n\t"S0255": "Error playing media",\r\n\t"S0256": "ERROR: Failed to load ",\r\n\t"S0257": "Unknown CC",\r\n\t"S0258": "Loading ad",\r\n\t"S0259": "Setup took longer than XX seconds to complete.",\r\n\t"S0260": "Error loading player",\r\n\t"S0261": "Auto",\r\n\t"S0262": "Off",\r\n\t"S0263": "Error playing media:",\r\n\t"S0264": "Error loading media: File could not be played",\r\n\t"L0110": "//player.qmery.com/"\r\n}'
            }, useData: !0
        })
    }, function (a, b, c) {
        var d, d;
        !function (b) {
            a.exports = b()
        }(function () {
            var a;
            return function a(b, c, e) {
                function f(h, i) {
                    if (!c[h]) {
                        if (!b[h]) {
                            var j = "function" == typeof d && d;
                            if (!i && j)return d(h, !0);
                            if (g)return g(h, !0);
                            var k = new Error("Cannot find module '" + h + "'");
                            throw k.code = "MODULE_NOT_FOUND", k
                        }
                        var l = c[h] = {exports: {}};
                        b[h][0].call(l.exports, function (a) {
                            var c = b[h][1][a];
                            return f(c ? c : a)
                        }, l, l.exports, a, b, c, e)
                    }
                    return c[h].exports
                }

                for (var g = "function" == typeof d && d, h = 0; h < e.length; h++)f(e[h]);
                return f
            }({
                1: [function (a, b, c) {
                    function d(a, b) {
                        for (; a && a.nodeType !== e;) {
                            if (a.matches(b))return a;
                            a = a.parentNode
                        }
                    }

                    var e = 9;
                    if (Element && !Element.prototype.matches) {
                        var f = Element.prototype;
                        f.matches = f.matchesSelector || f.mozMatchesSelector || f.msMatchesSelector || f.oMatchesSelector || f.webkitMatchesSelector
                    }
                    b.exports = d
                }, {}], 2: [function (a, b, c) {
                    function d(a, b, c, d, f) {
                        var g = e.apply(this, arguments);
                        return a.addEventListener(c, g, f), {
                            destroy: function () {
                                a.removeEventListener(c, g, f)
                            }
                        }
                    }

                    function e(a, b, c, d) {
                        return function (c) {
                            c.delegateTarget = f(c.target, b), c.delegateTarget && d.call(a, c)
                        }
                    }

                    var f = a("./closest");
                    b.exports = d
                }, {"./closest": 1}], 3: [function (a, b, c) {
                    c.node = function (a) {
                        return void 0 !== a && a instanceof HTMLElement && 1 === a.nodeType
                    }, c.nodeList = function (a) {
                        var b = Object.prototype.toString.call(a);
                        return void 0 !== a && ("[object NodeList]" === b || "[object HTMLCollection]" === b) && "length" in a && (0 === a.length || c.node(a[0]))
                    }, c.string = function (a) {
                        return "string" == typeof a || a instanceof String
                    }, c.fn = function (a) {
                        var b = Object.prototype.toString.call(a);
                        return "[object Function]" === b
                    }
                }, {}], 4: [function (a, b, c) {
                    function d(a, b, c) {
                        if (!a && !b && !c)throw new Error("Missing required arguments");
                        if (!h.string(b))throw new TypeError("Second argument must be a String");
                        if (!h.fn(c))throw new TypeError("Third argument must be a Function");
                        if (h.node(a))return e(a, b, c);
                        if (h.nodeList(a))return f(a, b, c);
                        if (h.string(a))return g(a, b, c);
                        throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")
                    }

                    function e(a, b, c) {
                        return a.addEventListener(b, c), {
                            destroy: function () {
                                a.removeEventListener(b, c)
                            }
                        }
                    }

                    function f(a, b, c) {
                        return Array.prototype.forEach.call(a, function (a) {
                            a.addEventListener(b, c)
                        }), {
                            destroy: function () {
                                Array.prototype.forEach.call(a, function (a) {
                                    a.removeEventListener(b, c)
                                })
                            }
                        }
                    }

                    function g(a, b, c) {
                        return i(document.body, a, b, c)
                    }

                    var h = a("./is"), i = a("delegate");
                    b.exports = d
                }, {"./is": 3, delegate: 2}], 5: [function (a, b, c) {
                    function d(a) {
                        var b;
                        if ("SELECT" === a.nodeName) a.focus(), b = a.value; else if ("INPUT" === a.nodeName || "TEXTAREA" === a.nodeName) a.focus(), a.setSelectionRange(0, a.value.length), b = a.value; else {
                            a.hasAttribute("contenteditable") && a.focus();
                            var c = window.getSelection(), d = document.createRange();
                            d.selectNodeContents(a), c.removeAllRanges(), c.addRange(d), b = c.toString()
                        }
                        return b
                    }

                    b.exports = d
                }, {}], 6: [function (a, b, c) {
                    function d() {
                    }

                    d.prototype = {
                        on: function (a, b, c) {
                            var d = this.e || (this.e = {});
                            return (d[a] || (d[a] = [])).push({fn: b, ctx: c}), this
                        }, once: function (a, b, c) {
                            function d() {
                                e.off(a, d), b.apply(c, arguments)
                            }

                            var e = this;
                            return d._ = b, this.on(a, d, c)
                        }, emit: function (a) {
                            var b = [].slice.call(arguments, 1), c = ((this.e || (this.e = {}))[a] || []).slice(), d = 0, e = c.length;
                            for (d; d < e; d++)c[d].fn.apply(c[d].ctx, b);
                            return this
                        }, off: function (a, b) {
                            var c = this.e || (this.e = {}), d = c[a], e = [];
                            if (d && b)for (var f = 0, g = d.length; f < g; f++)d[f].fn !== b && d[f].fn._ !== b && e.push(d[f]);
                            return e.length ? c[a] = e : delete c[a], this
                        }
                    }, b.exports = d
                }, {}], 7: [function (b, c, d) {
                    !function (e, f) {
                        if ("function" == typeof a && a.amd) a(["module", "select"], f); else if ("undefined" != typeof d) f(c, b("select")); else {
                            var g = {exports: {}};
                            f(g, e.select), e.clipboardAction = g.exports
                        }
                    }(this, function (a, b) {
                        "use strict";
                        function c(a) {
                            return a && a.__esModule ? a : {default: a}
                        }

                        function d(a, b) {
                            if (!(a instanceof b))throw new TypeError("Cannot call a class as a function")
                        }

                        var e = c(b), f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (a) {
                                return typeof a
                            } : function (a) {
                                return a && "function" == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a
                            }, g = function () {
                            function a(a, b) {
                                for (var c = 0; c < b.length; c++) {
                                    var d = b[c];
                                    d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(a, d.key, d)
                                }
                            }

                            return function (b, c, d) {
                                return c && a(b.prototype, c), d && a(b, d), b
                            }
                        }(), h = function () {
                            function a(b) {
                                d(this, a), this.resolveOptions(b), this.initSelection()
                            }

                            return g(a, [{
                                key: "resolveOptions", value: function () {
                                    var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                    this.action = a.action, this.emitter = a.emitter, this.target = a.target, this.text = a.text, this.trigger = a.trigger, this.selectedText = ""
                                }
                            }, {
                                key: "initSelection", value: function () {
                                    this.text ? this.selectFake() : this.target && this.selectTarget()
                                }
                            }, {
                                key: "selectFake", value: function () {
                                    var a = this, b = "rtl" == document.documentElement.getAttribute("dir");
                                    this.removeFake(), this.fakeHandlerCallback = function () {
                                        return a.removeFake()
                                    }, this.fakeHandler = document.body.addEventListener("click", this.fakeHandlerCallback) || !0, this.fakeElem = document.createElement("textarea"), this.fakeElem.style.fontSize = "12pt", this.fakeElem.style.border = "0", this.fakeElem.style.padding = "0", this.fakeElem.style.margin = "0", this.fakeElem.style.position = "absolute", this.fakeElem.style[b ? "right" : "left"] = "-9999px";
                                    var c = window.pageYOffset || document.documentElement.scrollTop;
                                    this.fakeElem.addEventListener("focus", window.scrollTo(0, c)), this.fakeElem.style.top = c + "px", this.fakeElem.setAttribute("readonly", ""), this.fakeElem.value = this.text, document.body.appendChild(this.fakeElem), this.selectedText = (0, e.default)(this.fakeElem), this.copyText()
                                }
                            }, {
                                key: "removeFake", value: function () {
                                    this.fakeHandler && (document.body.removeEventListener("click", this.fakeHandlerCallback), this.fakeHandler = null, this.fakeHandlerCallback = null), this.fakeElem && (document.body.removeChild(this.fakeElem), this.fakeElem = null)
                                }
                            }, {
                                key: "selectTarget", value: function () {
                                    this.selectedText = (0, e.default)(this.target), this.copyText()
                                }
                            }, {
                                key: "copyText", value: function () {
                                    var a = void 0;
                                    try {
                                        a = document.execCommand(this.action)
                                    } catch (b) {
                                        a = !1
                                    }
                                    this.handleResult(a)
                                }
                            }, {
                                key: "handleResult", value: function (a) {
                                    this.emitter.emit(a ? "success" : "error", {action: this.action, text: this.selectedText, trigger: this.trigger, clearSelection: this.clearSelection.bind(this)})
                                }
                            }, {
                                key: "clearSelection", value: function () {
                                    this.target && this.target.blur(), window.getSelection().removeAllRanges()
                                }
                            }, {
                                key: "destroy", value: function () {
                                    this.removeFake()
                                }
                            }, {
                                key: "action", set: function () {
                                    var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "copy";
                                    if (this._action = a, "copy" !== this._action && "cut" !== this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')
                                }, get: function () {
                                    return this._action
                                }
                            }, {
                                key: "target", set: function (a) {
                                    if (void 0 !== a) {
                                        if (!a || "object" !== ("undefined" == typeof a ? "undefined" : f(a)) || 1 !== a.nodeType)throw new Error('Invalid "target" value, use a valid Element');
                                        if ("copy" === this.action && a.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                                        if ("cut" === this.action && (a.hasAttribute("readonly") || a.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                                        this._target = a
                                    }
                                }, get: function () {
                                    return this._target
                                }
                            }]), a
                        }();
                        a.exports = h
                    })
                }, {select: 5}], 8: [function (b, c, d) {
                    !function (e, f) {
                        if ("function" == typeof a && a.amd) a(["module", "./clipboard-action", "tiny-emitter", "good-listener"], f); else if ("undefined" != typeof d) f(c, b("./clipboard-action"), b("tiny-emitter"), b("good-listener")); else {
                            var g = {exports: {}};
                            f(g, e.clipboardAction, e.tinyEmitter, e.goodListener), e.clipboard = g.exports
                        }
                    }(this, function (a, b, c, d) {
                        "use strict";
                        function e(a) {
                            return a && a.__esModule ? a : {default: a}
                        }

                        function f(a, b) {
                            if (!(a instanceof b))throw new TypeError("Cannot call a class as a function")
                        }

                        function g(a, b) {
                            if (!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !b || "object" != typeof b && "function" != typeof b ? a : b
                        }

                        function h(a, b) {
                            if ("function" != typeof b && null !== b)throw new TypeError("Super expression must either be null or a function, not " + typeof b);
                            a.prototype = Object.create(b && b.prototype, {
                                constructor: {
                                    value: a,
                                    enumerable: !1,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
                        }

                        function i(a, b) {
                            var c = "data-clipboard-" + a;
                            if (b.hasAttribute(c))return b.getAttribute(c)
                        }

                        var j = e(b), k = e(c), l = e(d), m = function () {
                            function a(a, b) {
                                for (var c = 0; c < b.length; c++) {
                                    var d = b[c];
                                    d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(a, d.key, d)
                                }
                            }

                            return function (b, c, d) {
                                return c && a(b.prototype, c), d && a(b, d), b
                            }
                        }(), n = function (a) {
                            function b(a, c) {
                                f(this, b);
                                var d = g(this, (b.__proto__ || Object.getPrototypeOf(b)).call(this));
                                return d.resolveOptions(c), d.listenClick(a), d
                            }

                            return h(b, a), m(b, [{
                                key: "resolveOptions", value: function () {
                                    var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                    this.action = "function" == typeof a.action ? a.action : this.defaultAction, this.target = "function" == typeof a.target ? a.target : this.defaultTarget, this.text = "function" == typeof a.text ? a.text : this.defaultText
                                }
                            }, {
                                key: "listenClick", value: function (a) {
                                    var b = this;
                                    this.listener = (0, l.default)(a, "click", function (a) {
                                        return b.onClick(a)
                                    })
                                }
                            }, {
                                key: "onClick", value: function (a) {
                                    var b = a.delegateTarget || a.currentTarget;
                                    this.clipboardAction && (this.clipboardAction = null), this.clipboardAction = new j.default({
                                        action: this.action(b),
                                        target: this.target(b),
                                        text: this.text(b),
                                        trigger: b,
                                        emitter: this
                                    })
                                }
                            }, {
                                key: "defaultAction", value: function (a) {
                                    return i("action", a)
                                }
                            }, {
                                key: "defaultTarget", value: function (a) {
                                    var b = i("target", a);
                                    if (b)return document.querySelector(b)
                                }
                            }, {
                                key: "defaultText", value: function (a) {
                                    return i("text", a)
                                }
                            }, {
                                key: "destroy", value: function () {
                                    this.listener.destroy(), this.clipboardAction && (this.clipboardAction.destroy(), this.clipboardAction = null)
                                }
                            }]), b
                        }(k.default);
                        a.exports = n
                    })
                }, {"./clipboard-action": 7, "good-listener": 4, "tiny-emitter": 6}]
            }, {}, [8])(8)
        })
    }, function (a, b, c) {
        var d = c(169);
        "string" == typeof d && (d = [[a.id, d, ""]]);
        c(177)(d, {});
        d.locals && (a.exports = d.locals)
    }, function (a, b, c) {
        b = a.exports = c(170)(), b.push([a.id, ".qp-reset{color:inherit;background-color:transparent;padding:0;margin:0;float:none;font-family:Arial,Helvetica,sans-serif;font-size:1em;line-height:1em;list-style:none;text-align:left;text-transform:none;vertical-align:baseline;border:0;direction:ltr;font-variant:inherit;font-stretch:inherit;-webkit-tap-highlight-color:rgba(255,255,255,0)}@font-face{font-family:'qp-icons';src:url(" + c(171) + ") format('woff'),url(" + c(172) + ") format('truetype');font-weight:normal;font-style:normal}.qp-icon-inline,.qp-icon-tooltip,.qp-icon-display,.qp-controlbar .qp-menu .qp-option:before{font-family:'qp-icons';font-weight:normal;background-color:transparent;font-variant:normal;-webkit-font-feature-settings:\"liga\";font-feature-settings:\"liga\";-ms-font-feature-settings:\"liga\" 1;-o-font-feature-settings:\"liga\";-webkit-font-smoothing:antialiased;font-style:normal;text-transform:none;-moz-osx-font-smoothing:grayscale}.qp-icon-audio-tracks:before{content:'\\E800'}.qp-icon-buffer:before{content:'\\E801'}.qp-icon-cast.qp-off:before{content:'\\E802'}.qp-icon-cast:before{content:'\\E803'}.qp-icon-playlist:before{content:'\\E804'}.qp-icon-skip-forward:before{content:'\\E805'}.qp-icon-skip-backward:before{content:'\\E806'}.qp-icon-view:before{content:'\\E807'}.qp-icon-bug-report:before{content:'\\E808'}.qp-icon-instagram:before{content:'\\E809'}.qp-icon-telegram:before{content:'\\E80A'}.qp-icon-undo:before{content:'\\E80B'}.qp-icon-redo:before{content:'\\E80C'}.qp-icon-twitter:before{content:'\\E80D'}.qp-icon-linkedin:before{content:'\\E80E'}.qp-icon-link:before{content:'\\E80F'}.qp-icon-cc:before{content:'\\E810'}.qp-icon-cc.qp-off:before{content:'\\E811'}.qp-icon-cue:before{content:'\\E812'}.qp-icon-arrow-up:before{content:'\\E813'}.qp-icon-facebook:before{content:'\\E814'}.qp-icon-googleplus:before{content:'\\E815'}.qp-icon-arrow-down:before{content:'\\E816'}.qp-icon-error:before{content:'\\E817'}.qp-icon-hd.qp-off:before{content:'\\E818'}.qp-icon-arrow-left:before{content:'\\E819'}.qp-icon-viber:before{content:'\\E81A'}.qp-icon-whatsapp:before{content:'\\E81B'}.qp-icon-arrow-right:before{content:'\\E81C'}.qp-icon-hd:before{content:'\\E81D'}.qp-icon-logo:before{content:'\\E81E'}.qp-icon-volume:before{content:'\\E81F'}.qp-icon-duration:before{content:'\\E820'}.qp-icon-volume.qp-medium:before{content:'\\E821'}.qp-icon-next:before{content:'\\E822'}.qp-icon-info:before{content:'\\E823'}.qp-icon-prev:before{content:'\\E827'}.qp-icon-volume.qp-low:before{content:'\\E828'}.qp-icon-volume-mute:before{content:'\\E829'}.qp-icon-replay:before{content:'\\E82A'}.qp-icon-fullscreen:before{content:'\\E82B'}.qp-icon-volume.qp-off:before{content:'\\E82C'}.qp-icon-download:before{content:'\\E82D'}.qp-icon-embed:before{content:'\\E82E'}.qp-icon-mail:before{content:'\\E82F'}.qp-icon-close:before{content:'\\E830'}.qp-icon-more:before{content:'\\E831'}.qp-icon-fullscreen.qp-off:before{content:'\\E832'}.qp-icon-pause:before{content:'\\E833'}.qp-icon-play:before{content:'\\E835'}.qp-icon-help:before{content:'\\E90B'}.qp-icon-share:before{content:'\\E90C'}.qplayer{width:100%;font-size:16px;position:relative;display:block;min-height:0;overflow:hidden;box-sizing:border-box;font-family:Arial,Helvetica,sans-serif;background-color:#000;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.qplayer *{box-sizing:inherit}.qplayer.qp-frist-start .qp-preview{display:block}.qplayer.qp-flag-aspect-mode{height:auto !important}.qplayer.qp-flag-aspect-mode .qp-aspect{display:block}.qplayer .qp-aspect{display:none}.qplayer.qp-no-focus:focus,.qplayer .qp-swf{outline:none}.qplayer.qp-ie:focus{outline:#585858 dotted 1px}.qplayer:hover .qp-display-icon-container{background-color:#333;background:#333;background-size:#333}.qp-media,.qp-preview,.qp-overlays,.qp-controls{position:absolute;width:100%;height:100%;top:0;left:0;bottom:0;right:0}.qp-media{overflow:hidden;cursor:pointer}.qp-overlays{cursor:auto}.qp-media.qp-media-show{visibility:visible;opacity:1}.qp-controls.qp-controls-disabled{display:none}.qp-controls .qp-controls-right{position:initial}.qp-text{height:1em;font-family:Arial,Helvetica,sans-serif;font-size:.75em;font-style:normal;font-weight:normal;color:white;text-align:center;font-variant:normal;font-stretch:normal}.qp-plugin{position:absolute;bottom:2.5em}.qp-plugin .qp-banner{max-width:100%;opacity:0;cursor:pointer;position:absolute;margin:auto auto 0 auto;left:0;right:0;bottom:0;display:block}.qp-cast-screen{width:100%;height:100%}.qp-instream{position:absolute;top:0;right:0;bottom:0;left:0;display:none}.qp-icon-playback:before{content:'\\E835'}.qp-preview,.qp-captions,.qp-title,.qp-overlays,.qp-controls{pointer-events:none}.qp-overlays>div,.qp-media,.qp-controlbar,.qp-dock,.qp-logo,.qp-skip,.qp-display-icon-container{pointer-events:all}.qplayer video{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;margin:auto;background:transparent}.qplayer video::-webkit-media-controls-start-playback-button{display:none}.qplayer video::-webkit-media-text-track-display{-webkit-transform:translateY(-1.5em);transform:translateY(-1.5em)}.qplayer.qp-flag-user-inactive.qp-state-playing video::-webkit-media-text-track-display{-webkit-transform:translateY(0);transform:translateY(0)}.qplayer.qp-stretch-uniform video{-o-object-fit:contain;object-fit:contain}.qplayer.qp-stretch-none video{-o-object-fit:none;object-fit:none}.qplayer.qp-stretch-fill video{-o-object-fit:cover;object-fit:cover}.qplayer.qp-stretch-exactfit video{-o-object-fit:fill;object-fit:fill}.qp-click{position:absolute;width:100%;height:100%}.qp-preview{position:absolute;display:none;opacity:1;visibility:visible;width:100%;height:100%;background:#000 no-repeat 50% 50%}.qplayer .qp-preview,.qp-error .qp-preview,.qp-stretch-uniform .qp-preview{background-size:contain}.qp-stretch-none .qp-preview{background-size:auto auto}.qp-stretch-fill .qp-preview{background-size:cover}.qp-stretch-exactfit .qp-preview{background-size:100% 100%}.qp-display-icon-container{position:relative;top:50%;display:table;height:3.5em;width:3.5em;margin:-1.75em auto 0;cursor:pointer}.qp-display-icon-container .qp-icon-display{position:relative;display:table-cell;text-align:center;vertical-align:middle !important;background-position:50% 50%;background-repeat:no-repeat;font-size:2em}.qp-flag-audio-player .qp-display-icon-container,.qp-flag-dragging .qp-display-icon-container{display:none}.qp-icon{font-family:'qp-icons';-webkit-font-smoothing:antialiased;font-style:normal;font-weight:normal;text-transform:none;background-color:transparent;font-variant:normal;-webkit-font-feature-settings:\"liga\";-ms-font-feature-settings:\"liga\" 1;-o-font-feature-settings:\"liga\";font-feature-settings:\"liga\";-moz-osx-font-smoothing:grayscale}.qp-controlbar{display:table;position:absolute;right:0;left:0;bottom:0;height:2em;padding:0 .25em}.qp-controlbar .qp-hidden{display:none}.qp-controlbar.qp-drawer-expanded .qp-controlbar-left-group,.qp-controlbar.qp-drawer-expanded .qp-controlbar-center-group{opacity:0}.qp-background-color{background-color:#414040}.qp-group{display:table-cell}.qp-controlbar-center-group{width:100%;padding:0 .25em}.qp-controlbar-center-group .qp-slider-time,.qp-controlbar-center-group .qp-text-alt{padding:0}.qp-controlbar-center-group .qp-text-alt{display:none}.qp-controlbar-left-group,.qp-controlbar-right-group{white-space:nowrap}.qp-knob:hover,.qp-icon-inline:hover,.qp-icon-tooltip:hover,.qp-icon-display:hover,.qp-option:before:hover{color:#eee}.qp-icon-inline,.qp-icon-tooltip,.qp-slider-horizontal,.qp-text-elapsed,.qp-text-duration{display:inline-block;height:2em;position:relative;line-height:2em;vertical-align:middle;cursor:pointer}.qp-icon-inline,.qp-icon-tooltip{min-width:1.25em;text-align:center}.qp-icon-playback{min-width:2.25em}.qp-icon-volume{min-width:1.75em;text-align:left}.qp-time-tip{line-height:1em;pointer-events:none}.qp-icon-inline:after,.qp-icon-tooltip:after{width:100%;height:100%;font-size:1em}.qp-icon-cast{display:none}.qp-slider-volume.qp-slider-horizontal,.qp-icon-inline.qp-icon-volume{display:none}.qplayer.qp-flag-live .qp-controlbar .qp-slider-time,.qplayer.qp-flag-live .qp-controlbar .qp-text-duration,.qplayer.qp-flag-live .qp-controlbar .qp-text-elapsed{-webkit-transform:translateY(150%) scaleX(1.2);transform:translateY(150%) scaleX(1.2);opacity:0}.qplayer.qp-flag-ads .qp-controlbar .qp-icon-fullscreen,.qplayer.qp-flag-ads .qp-controlbar .qp-icon-playback,.qplayer.qp-flag-ads .qp-controlbar .qp-icon-volume,.qplayer.qp-flag-ads .qp-controlbar .qp-slider-volume{display:inline-block}.qp-controlbar .qp-icon-prev:before{padding-right:.25em}.qp-controlbar .qp-icon-next:before{padding-left:.25em}.qp-flag-touch .qp-controlbar .qp-icon-prev:before{padding:0 .125em 0 .7em}.qp-flag-touch .qp-controlbar .qp-icon-next:before{padding:0 .7em 0 .125em}.qp-flag-touch .qp-controlbar .qp-icon-playlist:before{padding:0 .225em}.qp-controlbar .qp-icon-playlist:before{padding:0}.qp-controlbar-center-group:hover .qp-knob{-webkit-transform:scale(1.7);transform:scale(1.7);border:3px solid #fff}.qp-flag-user-inactive.qp-state-playing .qp-controlbar,.qp-state-idle .qp-captions,.qp-state-idle .qp-controlbar{-webkit-transform:translateY(100%);transform:translateY(100%);display:block !important}.qp-dock{margin:.75em;display:block;opacity:1;clear:right}.qp-dock:after{content:'';clear:both;display:block}.qp-dock-button{cursor:pointer;float:right;position:relative;width:2.5em;height:2.5em;margin:.5em}.qp-dock-button .qp-arrow{display:none;position:absolute;bottom:-0.2em;width:.5em;height:.2em;left:50%;margin-left:-0.25em}.qp-dock-button .qp-overlay{display:none;position:absolute;top:2.5em;right:0;margin-top:.25em;padding:.5em;white-space:nowrap}.qp-dock-button:hover .qp-overlay,.qp-dock-button:hover .qp-arrow{display:block}.qp-dock-image{width:100%;height:100%;background-position:50% 50%;background-repeat:no-repeat;background-size:100%;opacity:.75;border-radius:50%}.qp-state-idle .qp-dock,.qp-state-complete .qp-dock,.qp-frist-start .qp-dock{display:block !important}.qp-title{display:none;position:absolute;top:0;width:100%;font-size:.875em;height:8em;background:-webkit-linear-gradient(top, #000 0, #000 18%, rgba(0,0,0,0) 100%);background:linear-gradient(to bottom, #000 0, #000 18%, rgba(0,0,0,0) 100%)}.qp-title-primary,.qp-title-secondary{padding:.75em 1.5em;min-height:2.5em;width:85%;color:white;white-space:nowrap;text-overflow:ellipsis;overflow-x:hidden}.qp-title-primary{font-weight:bold}.qp-title-secondary{margin-top:-0.5em}.qp-slider-container{display:inline-block;height:1em;position:relative;touch-action:none}.qp-rail,.qp-buffer,.qp-progress{position:absolute;cursor:pointer}.qp-progress{background-color:#fff}.qp-rail{background-color:#aaa}.qp-buffer{background-color:#202020}.qp-cue,.qp-knob{position:absolute;cursor:pointer}.qp-cue{background-color:#fff;width:.1em;height:.4em}.qp-knob{background-color:#aaa;width:.4em;height:.4em}.qp-slider-horizontal{width:4em;height:1em}.qp-slider-horizontal.qp-slider-volume{margin-right:5px}.qp-slider-horizontal .qp-rail,.qp-slider-horizontal .qp-buffer,.qp-slider-horizontal .qp-progress{width:100%;height:.4em}.qp-slider-horizontal .qp-progress,.qp-slider-horizontal .qp-buffer{width:0}.qp-slider-horizontal .qp-rail,.qp-slider-horizontal .qp-progress,.qp-slider-horizontal .qp-slider-container{width:100%}.qp-slider-horizontal .qp-knob{left:0;margin-left:-0.325em}.qp-slider-vertical{width:.75em;height:4em;bottom:0;position:absolute;padding:1em}.qp-slider-vertical .qp-rail,.qp-slider-vertical .qp-buffer,.qp-slider-vertical .qp-progress{bottom:0;height:100%}.qp-slider-vertical .qp-progress,.qp-slider-vertical .qp-buffer{height:0}.qp-slider-vertical .qp-slider-container,.qp-slider-vertical .qp-rail,.qp-slider-vertical .qp-progress{bottom:0;width:.75em;height:100%;left:0;right:0;margin:0 auto}.qp-slider-vertical .qp-slider-container{height:4em;position:relative}.qp-slider-vertical .qp-knob{bottom:0;left:0;right:0;margin:0 auto}.qp-slider-time{right:0;left:0;width:100%}.qp-tooltip-time{position:absolute}.qp-slider-volume .qp-buffer{display:none}.qp-captions{position:absolute;display:none;margin:0 auto;width:100%;left:0;bottom:3em;right:0;max-width:90%;text-align:center}.qp-captions.qp-captions-enabled{display:block}.qp-captions-window{display:none;padding:.25em;border-radius:.25em}.qp-captions-window.qp-captions-window-active{display:inline-block}.qp-captions-text{display:inline-block;color:white;background-color:black;word-wrap:break-word;white-space:pre-line;font-style:normal;font-weight:normal;text-align:center;text-decoration:none;line-height:1.3em;padding:.1em .8em}.qp-rightclick{display:none;position:absolute;white-space:nowrap}.qp-rightclick.qp-open{display:block}.qp-rightclick ul{list-style:none;font-weight:bold;border-radius:.15em;margin:0;border:1px solid #444;padding-left:0}.qp-rightclick .qp-icon-logo{font-size:1.5em !important;color:#ff0147;vertical-align:middle;padding-right:.3em;margin-right:.3em;border-right:1px solid #444}.qp-rightclick li{background-color:#000;border-bottom:1px solid #444;margin:0}.qp-rightclick a{color:#fff;text-decoration:none;padding:1em;display:block;font-size:.6875em}.qp-rightclick li:last-child{border-bottom:none}.qp-rightclick li:hover{background-color:#1a1a1a;cursor:pointer}.qp-rightclick .qp-featured{background-color:#252525;vertical-align:middle}.qp-rightclick .qp-featured a{color:#777}.qp-min-width1600 .qp-btn-box-expand{-webkit-transform:scale(55);transform:scale(55)}.qp-min-width1600 .qp-display-icon-container{height:5.5em;width:5.5em}.qp-min-width1600 .qp-display-icon-container .qp-icon-display{font-size:2em !important}.qp-min-width1600.qp-state-paused .qp-title{bottom:44px}.qp-min-width1600 .qp-reset{font-size:1.05em}.qp-min-width1600 .qp-slider-horizontal .qp-knob{width:14px !important;height:14px !important;background:#ff0046;-webkit-transition:border .2s ease-out,-webkit-transform .2s ease-out;transition:border .2s ease-out,-webkit-transform .2s ease-out;transition:transform .2s ease-out,border .2s ease-out;transition:transform .2s ease-out,border .2s ease-out,-webkit-transform .2s ease-out;border:6px solid #fff;top:-5px !important}.qp-min-width1600 .qp-controlbar-center-group:hover .qp-knob{-webkit-transform:scale(1.6);transform:scale(1.6);border:3px solid #fff}.qp-min-width1600 .qp-states-place{margin:1em}.qp-min-width1600 .qp-states-place .qp-states-place-viewer{height:40px;line-height:40px;padding:0 50px 0 15px !important}.qp-min-width1600 .qp-states-place .qp-states-place-viewer span{width:40px;font-size:22px;line-height:40px}.qp-min-width1200.qp-max-width1600 .qp-btn-box{width:70px;height:70px;margin:7px}.qp-min-width1200.qp-max-width1600 .qp-btn-box-icon{font-size:28px}.qp-min-width1200.qp-max-width1600 .qp-btn-box-expand{-webkit-transform:scale(46);transform:scale(46)}.qp-min-width1200.qp-max-width1600 .qp-social-icon{line-height:60px !important}.qp-min-width1200.qp-max-width1600 .qp-display-icon-container{height:5.5em;width:5.5em}.qp-min-width1200.qp-max-width1600 .qp-display-icon-container .qp-icon-display{font-size:2em !important}.qp-min-width1200.qp-max-width1600 .qp-reset{font-size:1.05em}.qp-min-width1200.qp-max-width1600 .qp-slider-horizontal .qp-knob{width:12px;height:12px;background:#ff0046;-webkit-transition:border .2s ease-out,-webkit-transform .2s ease-out;transition:border .2s ease-out,-webkit-transform .2s ease-out;transition:transform .2s ease-out,border .2s ease-out;transition:transform .2s ease-out,border .2s ease-out,-webkit-transform .2s ease-out;border:6px solid #fff}.qp-min-width1200.qp-max-width1600 .qp-controlbar-center-group:hover .qp-knob{-webkit-transform:scale(1.5);transform:scale(1.5);border:3px solid #fff}.qp-min-width1200.qp-max-width1600.qp-state-paused .qp-title{bottom:44px}.qp-min-width1200.qp-max-width1600 .qp-states-place{margin:1em}.qp-min-width1200.qp-max-width1600 .qp-states-place .qp-states-place-viewer{height:40px;line-height:40px;padding:0 50px 0 15px !important}.qp-min-width1200.qp-max-width1600 .qp-states-place .qp-states-place-viewer span{width:40px;font-size:22px;line-height:40px}.qp-min-width1024.qp-max-width1200 .qp-btn-box-expand{-webkit-transform:scale(45);transform:scale(45)}.qp-min-width1024.qp-max-width1200 .qp-btn-box{width:60px;height:60px;margin:7px}.qp-min-width1024.qp-max-width1200 .qp-btn-box-icon{font-size:25px}.qp-min-width1024.qp-max-width1200 .qp-display-icon-container{height:5.5em;width:5.5em}.qp-min-width1024.qp-max-width1200 .qp-display-icon-container .qp-icon-display{font-size:2.5em !important}.qp-min-width1024.qp-max-width1200 .qp-title-primary{font-size:1em !important}.qp-min-width1024.qp-max-width1200 .qp-title-secondary{font-size:.9em}.qp-min-width1024.qp-max-width1200 .qp-slider-horizontal .qp-knob{width:12px;height:12px;top:-5px !important}.qp-min-width1024.qp-max-width1200 .qp-controlbar-center-group:hover .qp-knob{-webkit-transform:scale(1.5);transform:scale(1.5);border:3px solid #fff}.qp-min-width900.qp-max-width1024 .qp-btn-box-expand{-webkit-transform:scale(40);transform:scale(40)}.qp-min-width900.qp-max-width1024 .qp-btn-box{width:60px;height:60px;margin:7px}.qp-min-width900.qp-max-width1024 .qp-box-close-bt{font-size:30px;margin:15px}.qp-min-width900.qp-max-width1024 .qp-btn-box-icon{font-size:25px}.qp-min-width900.qp-max-width1024 .qp-display-icon-container{height:5em;width:5em}.qp-min-width900.qp-max-width1024 .qp-display-icon-container .qp-icon-display{font-size:1.6em !important}.qp-min-width900.qp-max-width1024 .qp-title-primary{font-size:1em !important}.qp-min-width900.qp-max-width1024 .qp-title-secondary{font-size:.9em}.qp-min-width900.qp-max-width1024 .qp-slider-horizontal .qp-knob{width:10px;height:10px;top:-4px !important}.qp-min-width768.qp-max-width900 .qp-btn-box-expand{-webkit-transform:scale(40);transform:scale(40)}.qp-min-width768.qp-max-width900 .qp-btn-box{width:60px;height:60px;margin:7px}.qp-min-width768.qp-max-width900 .qp-box-close-bt{font-size:30px;margin:15px}.qp-min-width768.qp-max-width900 .qp-btn-box-icon{font-size:25px}.qp-min-width768.qp-max-width900 .qp-display-icon-container{height:5em;width:5em}.qp-min-width768.qp-max-width900 .qp-display-icon-container .qp-icon-display{font-size:1.6em !important}.qp-min-width768.qp-max-width900 .qp-title-primary{font-size:1em !important}.qp-min-width768.qp-max-width900 .qp-title-secondary{font-size:.85em}.qp-min-width768.qp-max-width900 .qp-slider-horizontal .qp-knob{width:10px;height:10px;top:-4px !important}.qp-min-width600.qp-max-width768 .qp-btn-box-expand{-webkit-transform:scale(30);transform:scale(30)}.qp-min-width600.qp-max-width768 .qp-btn-box{width:60px;height:60px;margin:10px 10px 0 0}.qp-min-width600.qp-max-width768 .qp-box{width:450px}.qp-min-width600.qp-max-width768 .qp-btn-box-icon{font-size:25px}.qp-min-width600.qp-max-width768 .qp-box-download p{font-size:16px}.qp-min-width600.qp-max-width768 .qp-box-close-bt{font-size:30px;margin:10px}.qp-min-width600.qp-max-width768 .qp-box-input-icon{width:30px !important;height:30px !important;font-size:20px !important;line-height:30px !important}.qp-min-width600.qp-max-width768 .qp-box-share-title-item{font-size:18px;padding-bottom:5px}.qp-min-width600.qp-max-width768 .qp-social-icon{width:40px !important;height:40px !important;line-height:40px !important;font-size:20px !important}.qp-min-width600.qp-max-width768 .qp-box-share-btn{font-size:18px;margin-bottom:10px;height:30px;line-height:30px}.qp-min-width600.qp-max-width768 .qp-box-share-input{height:30px;line-height:30px;font-size:16px;background-size:auto 50%;padding:0 30px 0 10px}.qp-min-width600.qp-max-width768 .qp-box-download-input{height:30px;line-height:30px;font-size:16px}.qp-min-width600.qp-max-width768 .qp-box-download-btn{font-size:18px;margin-bottom:10px;height:30px;line-height:30px}.qp-min-width600.qp-max-width768 .download-box p{font-size:16px}.qp-min-width600.qp-max-width768 .qp-box-seprate{display:none}.qp-min-width600.qp-max-width768 .qp-box-report-title-item{font-size:18px;width:100%;text-align:right;border-bottom:1px solid rgba(255,255,255,0.3);padding:5px 0;background-position:center 135%}.qp-min-width600.qp-max-width768 .qp-box-item-active{background-position:center 100%}.qp-min-width600.qp-max-width768 .qp-subbmit-bt{height:30px;line-height:30px;font-size:18px;margin-top:5px}.qp-min-width600.qp-max-width768 .qp-report-textarea{height:40px}.qp-min-width600.qp-max-width768 .qp-title-primary{font-size:1em !important}.qp-min-width600.qp-max-width768 .qp-title-secondary{font-size:.85em}.qp-min-width600.qp-max-width768 .qp-slider-horizontal .qp-knob{width:10px;height:10px;top:-4px !important}.qp-min-width480.qp-max-width600 .qp-btn-box-expand{-webkit-transform:scale(30);transform:scale(30)}.qp-min-width480.qp-max-width600 .qp-btn-box{width:50px;height:50px;margin:5px 8px 0 0}.qp-min-width480.qp-max-width600 .qp-box{width:450px}.qp-min-width480.qp-max-width600 .qp-btn-box-icon{font-size:20px}.qp-min-width480.qp-max-width600 .qp-box-close-bt{font-size:30px;margin:10px}.qp-min-width480.qp-max-width600 .qp-box-download p{font-size:16px}.qp-min-width480.qp-max-width600 .qp-box-input-icon{width:30px !important;height:30px !important;font-size:20px !important;line-height:30px !important}.qp-min-width480.qp-max-width600 .qp-box-share-title-item{font-size:18px;padding-bottom:5px}.qp-min-width480.qp-max-width600 .qp-social-icon{width:40px !important;height:40px !important;line-height:40px !important;font-size:20px !important}.qp-min-width480.qp-max-width600 .qp-box-share-btn{font-size:18px;margin-bottom:10px;height:30px;line-height:30px}.qp-min-width480.qp-max-width600 .qp-box-share-input{height:30px;line-height:30px;font-size:16px;background-size:auto 50%;padding:0 30px 0 10px}.qp-min-width480.qp-max-width600 .qp-box-download-input{height:30px;line-height:30px;font-size:16px}.qp-min-width480.qp-max-width600 .qp-box-download-btn{font-size:18px;margin-bottom:10px;height:30px;line-height:30px}.qp-min-width480.qp-max-width600 .download-box p{font-size:16px}.qp-min-width480.qp-max-width600 .qp-box-seprate{display:none}.qp-min-width480.qp-max-width600 .qp-box-report-title-item{font-size:18px;width:100%;text-align:right;border-bottom:1px solid rgba(255,255,255,0.3);padding:5px 0;background-position:center 135%}.qp-min-width480.qp-max-width600 .qp-box-item-active{background-position:center 100%}.qp-min-width480.qp-max-width600 .qp-subbmit-bt{height:30px;line-height:30px;font-size:18px;margin-top:5px}.qp-min-width480.qp-max-width600 .qp-report-textarea{height:40px}.qp-min-width480.qp-max-width600 .qp-title-primary{font-size:1em !important}.qp-min-width480.qp-max-width600 .qp-title-secondary{font-size:.85em}.qp-min-width480.qp-max-width600 .qp-slider-horizontal .qp-knob{width:10px;height:10px;top:-4px !important}.qp-min-width320.qp-max-width480 .qp-btn-box-expand{-webkit-transform:scale(36);transform:scale(36)}.qp-min-width320.qp-max-width480 .qp-btn-box{width:45px;height:45px;margin:4px}.qp-min-width320.qp-max-width480 .qp-btn-box-icon{font-size:18px}.qp-min-width320.qp-max-width480 .qp-box-close-bt{font-size:20px;margin:5px}.qp-min-width320.qp-max-width480 .qp-box-input-icon{width:30px !important;height:30px !important;font-size:20px !important;line-height:30px !important}.qp-min-width320.qp-max-width480 .qp-box{width:360px}.qp-min-width320.qp-max-width480 .qp-box-share-title-item{font-size:20px;padding-bottom:5px}.qp-min-width320.qp-max-width480 .qp-box-download p{font-size:16px}.qp-min-width320.qp-max-width480 .qp-social-icon{width:38px !important;height:38px !important;line-height:38px !important;font-size:19px !important}.qp-min-width320.qp-max-width480 .qp-box-share-btn{font-size:18px;margin-bottom:10px;height:30px;line-height:30px}.qp-min-width320.qp-max-width480 .qp-box-share-input{height:30px;line-height:30px;font-size:16px;background-size:auto 50%}.qp-min-width320.qp-max-width480 .qp-box-download-input{height:30px;line-height:30px;font-size:16px}.qp-min-width320.qp-max-width480 .qp-box-download-btn{font-size:18px;margin-bottom:10px;height:30px;line-height:30px}.qp-min-width320.qp-max-width480 .download-box p{font-size:16px}.qp-min-width320.qp-max-width480 .qp-box-seprate{display:none}.qp-min-width320.qp-max-width480 .qp-box-report-title-item{font-size:18px;width:100%;text-align:right;border-bottom:1px solid rgba(255,255,255,0.3);padding:5px 0;background-position:center 135%}.qp-min-width320.qp-max-width480 .qp-box-item-active{background-position:center 100%}.qp-min-width320.qp-max-width480 .qp-subbmit-bt{height:30px;line-height:30px;font-size:18px;margin-top:10px}.qp-min-width320.qp-max-width480 .qp-report-textarea{height:40px}.qp-min-width320.qp-max-width480 .qp-title-primary{display:none !important}.qp-min-width320.qp-max-width480 .qp-title-secondary{display:none !important}.qp-min-width320.qp-max-width480 .qp-slider-horizontal .qp-knob{width:10px;height:10px;top:-0.13em !important}.qp-min-width320.qp-max-width480 .qp-states-place{display:none}.qp-min-width320.qp-max-width480 .qp-btn-box{display:none}.qp-max-width320 .qp-overlayscreator-btn{-webkit-transform:translateY(-100%);transform:translateY(-100%)}.qp-max-width320 .qp-box-close-bt{display:none}.qp-max-width320 .qp-btn-box{display:none}.qp-max-width320 .qp-box{display:none}.qp-max-width320 .qp-title{display:none !important}.qp-max-width320 .qp-slider-horizontal .qp-knob{top:-0.13em !important}.qp-max-width320 .qp-states-place{display:none}.qp-overlayscreator-btn{position:absolute;-webkit-transition:all .3s ease-out;transition:all .3s ease-out;-webkit-transform:translateY(-100%);transform:translateY(-100%);top:0;margin:0 10px}.qp-box-show{display:block}.qp-box-hide{display:none}.qp-box-tr{-webkit-transition:all .2s ease-out;transition:all .2s ease-out}.qp-box-tr2{-webkit-transition:all .5s ease-out;transition:all .5s ease-out}.qp-box{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);width:600px;height:auto;padding:10px;background-color:rgba(0,0,0,0.6);border-top:5px solid #bb131a;overflow:hidden}.qp-button-field{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%)}.qp-btn-box{width:80px;height:80px;background-color:rgba(0,0,0,0.6);border-radius:50%;float:right;margin:12px;overflow:hidden;cursor:pointer;-webkit-transform-origin:center center;transform-origin:center center;position:relative}.qp-btn-box:hover{background-color:#000}.qp-btn-box-expand{-webkit-transform:scale(35);transform:scale(35);-webkit-transition:all 600ms ease-out;transition:all 600ms ease-out}.qp-btn-box-expand:hover{background-color:rgba(0,0,0,0.6) !important}.qp-btn-box-expand .qp-btn-box-icon{opacity:0;visibility:hidden;-webkit-transition:none;transition:none}.qp-btn-box:hover .qp-btn-box-icon{-webkit-transform:translate(-50%, -50%) scale(1.2);transform:translate(-50%, -50%) scale(1.2)}.btn-img{width:100%;height:100%;-webkit-transform:scale(1);transform:scale(1);opacity:1;-webkit-transition:opacity .2s cubic-bezier(1, .13, 1, .46),background-color .2s ease-out,-webkit-transform .2s ease-out;transition:opacity .2s cubic-bezier(1, .13, 1, .46),background-color .2s ease-out,-webkit-transform .2s ease-out;transition:opacity .2s cubic-bezier(1, .13, 1, .46),background-color .2s ease-out,transform .2s ease-out;transition:opacity .2s cubic-bezier(1, .13, 1, .46),background-color .2s ease-out,transform .2s ease-out,-webkit-transform .2s ease-out}.qp-box-download p{color:#fff;clear:both;text-align:right;direction:rtl;font-size:18px;line-height:25px}.qp-btn-box-icon{width:auto;height:auto;color:#fff;text-align:center;opacity:1;-webkit-transition:opacity .2s cubic-bezier(1, .13, 1, .46),background-color .2s ease-out,-webkit-transform .2s ease-out;transition:opacity .2s cubic-bezier(1, .13, 1, .46),background-color .2s ease-out,-webkit-transform .2s ease-out;transition:opacity .2s cubic-bezier(1, .13, 1, .46),background-color .2s ease-out,transform .2s ease-out;transition:opacity .2s cubic-bezier(1, .13, 1, .46),background-color .2s ease-out,transform .2s ease-out,-webkit-transform .2s ease-out;font-size:35px}.download-box p{color:#fff;clear:both;text-align:right;direction:rtl}.qp-box-anim{-webkit-animation:el-box 1.5s ease-out forwards;animation:el-box 1.5s ease-out forwards}.qp-box-report-title-box{width:100%;height:auto;float:right}.qp-box-seprate{width:20px;height:26px;float:right;border-left:1px solid rgba(255,255,255,0.3);margin-left:20px;margin-top:7px}.qp-box-report-title-item{float:right;font-size:22px;line-height:30px;opacity:.3;color:#fff;overflow:hidden;padding-bottom:15px;cursor:pointer}.qp-box-item-active{opacity:1;background-position:center 100%}.qp-report-textarea{width:100%;max-width:100%;height:80px;overflow:hidden;padding:10px;outline:none;border:none;text-align:right;direction:rtl;color:#5b5b5b;font-size:18px;box-sizing:border-box;margin-top:-1px}.qp-subbmit-bt{width:100px;background-color:#81bd2a;padding:0 30px;height:45px;line-height:45px;margin:0 auto;margin-top:10px;font-size:22px;color:#fff;cursor:pointer;text-align:center}.qp-subbmit-bt:hover{background-color:#65a012}.qp-box-share-title-item{float:right;font-size:22px;line-height:35px;color:#fff;padding-bottom:10px}.qp-box-share-input{width:80%;height:40px;line-height:40px;float:right;color:#5b5b5b;text-align:left;padding:0 50px 0 10px;font-size:18px;clear:both;outline:none;border:none;box-sizing:border-box;background-repeat:no-repeat;background-position:calc(90%) center}.qp-box-share-btn{width:20%;height:40px;line-height:40px;float:right;background-color:#81bd2a;font-size:22px;color:#fff;cursor:pointer;text-align:center;margin-bottom:20px}.qp-box-share-btn:hover{background-color:#65a012}.qp-social-box{width:100%;height:auto;text-align:center;float:right}.qp-social-item{width:60px;margin:0 5px;display:inline-block;cursor:pointer;-webkit-transform:scale(1);transform:scale(1)}.qp-social-item:hover{-webkit-transform:scale(1.2);transform:scale(1.2)}.qp-box-hide{max-height:700px;opacity:0;visibility:hidden;-webkit-transform:translate(-50%, -50%) scale(1);transform:translate(-50%, -50%) scale(1)}@-webkit-keyframes el-box{0%{-webkit-transform:translate(-50%, -50%) scaleX(0);transform:translate(-50%, -50%) scaleX(0);max-height:0;padding:0}15%{-webkit-transform:translate(-50%, -50%) scaleX(0);transform:translate(-50%, -50%) scaleX(0);max-height:0;padding:0}35%{-webkit-transform:translate(-50%, -50%) scaleX(1);transform:translate(-50%, -50%) scaleX(1);max-height:0;padding:0}36%{-webkit-transform:translate(-50%, -50%) scaleX(1);transform:translate(-50%, -50%) scaleX(1);max-height:0;padding:10px}100%{-webkit-transform:translate(-50%, -50%) scaleX(1);transform:translate(-50%, -50%) scaleX(1);max-height:700px;padding:10px}}@keyframes el-box{0%{-webkit-transform:translate(-50%, -50%) scaleX(0);transform:translate(-50%, -50%) scaleX(0);max-height:0;padding:0}15%{-webkit-transform:translate(-50%, -50%) scaleX(0);transform:translate(-50%, -50%) scaleX(0);max-height:0;padding:0}35%{-webkit-transform:translate(-50%, -50%) scaleX(1);transform:translate(-50%, -50%) scaleX(1);max-height:0;padding:0}36%{-webkit-transform:translate(-50%, -50%) scaleX(1);transform:translate(-50%, -50%) scaleX(1);max-height:0;padding:10px}100%{-webkit-transform:translate(-50%, -50%) scaleX(1);transform:translate(-50%, -50%) scaleX(1);max-height:700px;padding:10px}}.qp-box-download-input{width:220px;height:40px;line-height:40px;float:right;color:#5b5b5b;text-align:left;padding:0 0 0 40px;font-size:18px;outline:none;border:none;box-sizing:border-box;background-repeat:no-repeat;background-position:10px center;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAMCAMAAABlXnzoAAAAS1BMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADmYDp0AAAAGHRSTlMAyow6+PPo3te+s6egeWReUUYsJR4aDggJ2fFwAAAARElEQVQI123HxwGAIBAAwRXMOXv9VypJ4OH8BlpJFtjSCow+VtseZdiIo/yqy/euXSeC2a55+BSmK5EW6cgMsuc9FX9eJxcGi316TGUAAAAASUVORK5CYII=);-webkit-appearance:none;-moz-appearance:none;appearance:none}.qp-box-download-input option{text-align:left;padding:10px 0;border:none;border-bottom:1px solid #ccc}.qp-box-download-btn{height:40px;line-height:40px;float:right;background-color:#81bd2a;font-size:22px;padding:0 10px;color:#fff;cursor:pointer;text-align:center;margin-bottom:20px;margin-right:10px}.qp-box-download-btn:hover{background-color:#65a012}.qp-box-close-bt{position:absolute;top:0;right:0;margin:25px;cursor:pointer;z-index:2;-webkit-transform:translateY(-60px);transform:translateY(-60px);font-size:35px;color:#fff}.qp-box-bt-remove{-webkit-transform:translateY(-120%);transform:translateY(-120%);position:relative;z-index:1;-webkit-transition:all .5s ease-out !important;transition:all .5s ease-out !important}.qp-box-close-hid{-webkit-transform:translateY(0) rotate(0deg);transform:translateY(0) rotate(0deg);-webkit-transition-delay:400ms;transition-delay:400ms}.qp-box-close-hid:hover{-webkit-transform:translateY(0) rotate(90deg);transform:translateY(0) rotate(90deg);-webkit-transition-delay:0;transition-delay:0}.qp-box-input{position:relative;width:100%;float:right}.qp-box-input-icon{width:40px;height:40px;line-height:40px;position:absolute;top:0;right:0;color:#000;text-align:center;font-size:30px}.qp-social-icon{width:55px;height:55px;line-height:55px;border-radius:50%;color:#fff;font-size:30px;text-align:center;margin:5px;display:inline-block;cursor:pointer;-webkit-transform:scale(1);transform:scale(1)}.qp-social-icon:hover{-webkit-transform:scale(1.2);transform:scale(1.2)}.qp-box-tr.qp-social-icon.qp-icon.qp-icon-facebook{background-color:#3a599c}.qp-box-tr.qp-social-icon.qp-icon.qp-icon-googleplus{background-color:#D6492F}.qp-box-tr.qp-social-icon.qp-icon.qp-icon-linkedin{background-color:#1685b0}.qp-box-tr.qp-social-icon.qp-icon.qp-icon-instagram{background-color:#8f775f}.qp-box-tr.qp-social-icon.qp-icon.qp-icon-telegram{background-color:#34ace0}.qp-box-tr.qp-social-icon.qp-icon.qp-icon-twitter{background-color:#5dd1f6}.qp-box-tr.qp-social-icon.qp-icon.qp-icon-viber{background-color:#7b519d}.qp-box-tr.qp-social-icon.qp-icon.qp-icon-whatsapp{background-color:#5cd169}.qp-logo{float:right;padding:.75em;cursor:pointer;pointer-events:all;position:absolute}.qp-logo .qp-flag-audio-player{display:none}.qp-watermark{position:absolute;top:50%;left:0;right:0;bottom:0;text-align:center;font-size:14em;color:#eee;opacity:.33;pointer-events:none}.qp-icon-tooltip.qp-open .qp-overlay{opacity:1;visibility:visible}.qp-icon-tooltip.qp-hidden{display:none}.qp-overlay-horizontal{display:none}.qp-icon-tooltip.qp-open-drawer:before{display:none}.qp-icon-tooltip.qp-open-drawer .qp-overlay-horizontal{opacity:1;display:inline-block;vertical-align:top}.qp-overlay:before{position:absolute;top:0;bottom:0;left:-50%;width:100%;background-color:rgba(0,0,0,0);content:\" \"}.qp-slider-time .qp-overlay:before{height:1em;top:auto}.qp-time-tip,.qp-volume-tip,.qp-menu{position:relative;left:-50%;border:solid 1px #000;margin:0}.qp-volume-tip{width:100%;height:100%;display:block}.qp-time-tip{text-align:center;font-family:inherit;color:#aaa;bottom:1em;border:solid 4px #000}.qp-time-tip .qp-text{line-height:1em}.qp-controlbar .qp-overlay{margin:0;position:absolute;bottom:2em;left:50%;opacity:0;visibility:hidden}.qp-controlbar .qp-overlay .qp-contents{position:relative}.qp-controlbar .qp-option{position:relative;white-space:nowrap;cursor:pointer;list-style:none;height:1.5em;font-family:inherit;line-height:1.5em;color:#aaa;padding:0 .5em;font-size:.8em}.qp-controlbar .qp-option:hover,.qp-controlbar .qp-option:before:hover{color:#eee}.qp-controlbar .qp-option:before{padding-right:.125em}.qp-playlist-container ::-webkit-scrollbar-track{background-color:#333;border-radius:10px}.qp-playlist-container ::-webkit-scrollbar{width:5px;border:10px solid black;border-bottom:0;border-top:0}.qp-playlist-container ::-webkit-scrollbar-thumb{background-color:white;border-radius:5px}.qp-playlist-container .qp-label .qp-icon{position:relative;display:none}.qp-playlist-container .qp-label .qp-icon:before{content:'\\E819';font-size:1.7em}.qp-playlist-container .qp-label .qp-playlist-index{display:block}.qp-playlist-container .qp-active-option{background-color:#fff;color:#000}.qp-playlist-container .qp-active-option .qp-label .qp-icon{display:block}.qp-playlist-container .qp-active-option .qp-label .qp-playlist-index{display:none}.qp-playlist-container .qp-desc,.qp-playlist-container .qp-duration{display:none}.qp-tooltip-title{border-bottom:1px solid #444;text-align:left;padding-left:.7em}.qp-playlist{max-height:11em;min-height:4.5em;overflow-x:hidden;overflow-y:scroll;width:calc(100% - 4px)}.qp-playlist .qp-option{height:3em;margin-right:5px;color:white;padding-left:1em;font-size:.8em}.qp-playlist .qp-label,.qp-playlist .qp-name{display:inline-block;line-height:3em;text-align:left;overflow:hidden;white-space:nowrap}.qp-playlist .qp-label{width:1em}.qp-playlist .qp-name{width:11em}.qp-overlays-playlist{width:100%;max-width:350px;height:100%;position:absolute;top:0;right:0;display:none;-webkit-transition:opacity .4s cubic-bezier(0, 0, .01, .9),-webkit-transform .4s cubic-bezier(0, 0, .01, .9);transition:opacity .4s cubic-bezier(0, 0, .01, .9),-webkit-transform .4s cubic-bezier(0, 0, .01, .9);transition:transform .4s cubic-bezier(0, 0, .01, .9),opacity .4s cubic-bezier(0, 0, .01, .9);transition:transform .4s cubic-bezier(0, 0, .01, .9),opacity .4s cubic-bezier(0, 0, .01, .9),-webkit-transform .4s cubic-bezier(0, 0, .01, .9);-webkit-transform:translateX(100%) scaleX(1);transform:translateX(100%) scaleX(1);opacity:0}.qp-overlays-playlist .qp-desc,.qp-overlays-playlist .qp-duration{display:block}.qp-overlays-playlist .qp-playlist-container{position:initial;height:100%;background-color:rgba(50,50,50,0.9);border:none}.qp-overlays-playlist .qp-playlist-container .qp-playlist{max-height:100%;height:100%;overflow:hidden;width:100%;background-color:transparent}.qp-overlays-playlist .qp-playlist-container .qp-playlist .qp-option{margin-right:0;float:right;height:auto;width:100%;padding:10px 20px 10px 10px;position:relative;-webkit-transition:all .2s ease-out;transition:all .2s ease-out;cursor:pointer}.qp-overlays-playlist .qp-playlist-container .qp-playlist .qp-option.qp-active-option{background-color:#fff;color:#000}.qp-overlays-playlist .qp-playlist-container .qp-playlist .qp-option.qp-active-option .qp-label .qp-icon{position:relative;right:-3px;top:3px;display:block;margin:0}.qp-overlays-playlist .qp-playlist-container .qp-playlist .qp-option.qp-active-option .qp-label .qp-icon:before{content:'\\E819';font-size:1.7em}.qp-overlays-playlist .qp-playlist-container .qp-playlist .qp-option.qp-active-option .qp-label .qp-playlist-index{display:none}.qp-overlays-playlist .qp-playlist-container .qp-playlist .qp-option .qp-image{float:right;width:30%;height:64px;background-size:cover;background-position:center center;position:relative}.qp-overlays-playlist .qp-playlist-container .qp-playlist .qp-option .qp-image .qp-duration{position:absolute;right:3px;bottom:3px;background-color:rgba(0,0,0,0.6);padding:2px 2px 0 2px;color:#fff}.qp-overlays-playlist .qp-playlist-container .qp-playlist .qp-option .qp-name,.qp-overlays-playlist .qp-playlist-container .qp-playlist .qp-option .qp-desc{float:right;width:auto;width:70%;text-align:right;height:auto;font-size:1.3em;line-height:32px;direction:rtl;white-space:nowrap;overflow:hidden;position:relative;display:inline-block}.qp-overlays-playlist .qp-playlist-container .qp-playlist .qp-option .qp-name p,.qp-overlays-playlist .qp-playlist-container .qp-playlist .qp-option .qp-desc p{margin:0;text-overflow:ellipsis;margin-right:10px;overflow:hidden}.qp-overlays-playlist .qp-playlist-container .qp-playlist .qp-option .qp-desc{font-size:1em;color:#979797;text-overflow:clip}.qp-overlays-playlist .qp-playlist-container .qp-playlist .qp-option .qp-label{font-family:arial !important;color:#b5b5b5;font-size:.9em;position:absolute;top:50%;right:4px;-webkit-transform:translateY(-50%);transform:translateY(-50%);width:auto !important}.qp-overlays-playlist .qp-playlist-container .qp-tooltip-title{background-color:#000;height:40px;float:right;width:100%}.qp-overlays-playlist .qp-playlist-container .qp-tooltip-title .qp-icon-playlist{position:relative;margin-right:7px;line-height:40px;height:100%;color:#eee}.qp-overlays-playlist .qp-playlist-container .qp-tooltip-title .qp-text{float:right !important;width:auto !important;line-height:40px;height:100%;margin:0 10px 0 0 !important;font-size:1.1em !important;font-weight:normal;color:#eee}.qp-overlays-playlist.qp-open{-webkit-transform:translateX(0) scaleX(1);transform:translateX(0) scaleX(1);opacity:1}@-webkit-keyframes marquee{0%{-webkit-transform:translateX(0);transform:translateX(0)}80%{-webkit-transform:translateX(80%);transform:translateX(80%)}100%{-webkit-transform:translateX(80%);transform:translateX(80%)}}@keyframes marquee{0%{-webkit-transform:translateX(0);transform:translateX(0)}80%{-webkit-transform:translateX(80%);transform:translateX(80%)}100%{-webkit-transform:translateX(80%);transform:translateX(80%)}}.qp-skip{cursor:default;position:absolute;float:right;display:inline-block;right:.75em;bottom:3em}.qp-skip.qp-skippable{cursor:pointer}.qp-skip.qp-hidden{visibility:hidden}.qp-skip .qp-skip-icon{display:none;margin-left:-0.75em}.qp-skip .qp-skip-icon:before{content:'\\E822'}.qp-skip .qp-text,.qp-skip .qp-skip-icon{color:#aaa;vertical-align:middle;line-height:1.5em;font-size:.7em}.qp-skip.qp-skippable:hover{cursor:pointer}.qp-skip.qp-skippable:hover .qp-text,.qp-skip.qp-skippable:hover .qp-skip-icon{color:#eee}.qp-skip.qp-skippable .qp-skip-icon{display:inline;margin:0}.qplayer.qp-state-playing.qp-flag-casting .qp-display-icon-container,.qplayer.qp-state-paused.qp-flag-casting .qp-display-icon-container{display:table}.qplayer.qp-flag-casting .qp-display-icon-container{border-radius:0;top:8em;padding:2em 5em;border:1px solid white}.qplayer.qp-flag-casting .qp-display-icon-container .qp-icon{font-size:3em}.qplayer.qp-flag-casting.qp-state-complete .qp-preview{display:none}.qp-cast{position:absolute;width:100%;height:100%;background-repeat:no-repeat;background-size:auto;background-position:50% 50%}.qp-cast-label{position:absolute;left:10px;right:10px;bottom:50%;margin-bottom:100px;text-align:center}.qp-cast-name{color:#ccc}.qp-state-idle .qp-preview{display:block}.qp-state-idle .qp-icon-display:before{content:'\\E835'}.qp-state-idle .qp-controlbar{display:none}.qp-state-idle .qp-captions{display:none}.qp-state-idle .qp-title{display:block;opacity:1;-webkit-transform:scaleX(1);transform:scaleX(1)}.qp-state-idle .qp-states-place{-webkit-transform:translateY(0);transform:translateY(0)}.qp-state-idle .qp-overlayscreator-btn{-webkit-transform:translateY(0);transform:translateY(0)}.qplayer.qp-state-playing .qp-display-icon-container{display:none}.qplayer.qp-state-playing .qp-display-icon-container .qp-icon-display:before{content:'\\E835'}.qplayer.qp-state-playing .qp-display-icon-container.qp-background-color.qp-reset .qp-display-icon-container.qp-background-color.qp-reset:before{content:\"\\E60E\";display:block !important;background:#ccc;width:100px;height:100px}.qplayer.qp-state-playing .qp-icon-playback:before{content:'\\E833'}.qplayer.qp-state-playing .qp-title{display:block !important;opacity:0 !important;-webkit-transform:scaleX(1.2);transform:scaleX(1.2)}.qplayer.qp-state-playing .qp-states-place{-webkit-transform:translateY(-200%);transform:translateY(-200%)}.qplayer.qp-state-paused .qp-display-icon-container{display:block}.qplayer.qp-state-paused .qp-display-icon-container .qp-icon-display:before{content:'\\E833'}.qplayer.qp-state-paused .qp-icon-playback:before{content:'\\E835'}.qplayer.qp-state-paused .qp-title{-webkit-transform:scaleX(1);transform:scaleX(1);bottom:40px;opacity:.7}.qplayer.qp-state-paused.qp-flag-dragging .qp-overlayscreator-btn{-webkit-transform:translateY(-100%);transform:translateY(-100%)}.qplayer.qp-state-paused .qp-overlayscreator-btn{-webkit-transform:translateY(0);transform:translateY(0)}.qplayer.qp-state-paused .qp-states-place{-webkit-transform:translateY(-200%);transform:translateY(-200%)}.qplayer.qp-state-buffering .qp-display-icon-container{padding:10px;-webkit-animation:loader-container 1.5s ease-out infinite;animation:loader-container 1.5s ease-out infinite}.qplayer.qp-state-buffering .qp-display-icon-container .qp-text{display:none}.qplayer.qp-state-buffering .qp-display-icon-container.qp-background-color.qp-reset{border-radius:50%;background-color:rgba(0,0,0,0.6)}.qplayer.qp-state-buffering .qp-icon.qp-icon-display.qp-button-color.qp-reset{width:100%;height:100%;-webkit-transform-origin:center center;transform-origin:center center;border-radius:50%;background-color:#fff;-webkit-animation:loader-center 1.5s ease-out infinite;animation:loader-center 1.5s ease-out infinite;position:relative;display:inherit}.qplayer.qp-state-buffering .qp-loader-triggel{display:none;position:absolute;top:50%;left:50%;width:0;height:100%;border-style:solid;border-width:30px 10px 0;border-color:#c4151b transparent transparent;border-top-left-radius:30000px;border-top-right-radius:30000px}.qplayer.qp-state-buffering .qp-icon-playback:before{content:'\\E833'}.qplayer.qp-state-complete .qp-preview{display:block !important}.qplayer.qp-state-complete .qp-display-icon-container .qp-icon-display:before{content:'\\E82A'}.qplayer.qp-state-complete .qp-display-icon-container .qp-text{display:none}.qplayer.qp-state-complete .qp-icon-playback:before{content:'\\E835'}.qplayer.qp-state-complete .qp-captions{display:none}.qplayer.qp-state-complete .qp-title{-webkit-transform:scaleX(1);transform:scaleX(1);bottom:40px;opacity:.7}.qplayer.qp-state-complete .qp-states-place{-webkit-transform:translateY(-200%);transform:translateY(-200%)}.qplayer.qp-state-complete .qp-overlayscreator-btn{-webkit-transform:translateY(0);transform:translateY(0)}.qp-error .qp-title,.qplayer.qp-state-error .qp-title{display:block;-webkit-transform:translateY(0) scaleX(1);transform:translateY(0) scaleX(1);opacity:1}.qp-error .qp-title .qp-title-primary,.qplayer.qp-state-error .qp-title .qp-title-primary{white-space:normal}.qp-error .qp-states-place,.qplayer.qp-state-error .qp-states-place{display:none}.qp-error .qp-preview,.qplayer.qp-state-error .qp-preview{display:block;-webkit-transform:translateY(0) scaleX(1);transform:translateY(0) scaleX(1);opacity:1}.qp-error .qp-controlbar,.qplayer.qp-state-error .qp-controlbar{display:none}.qp-error .qp-captions,.qplayer.qp-state-error .qp-captions{display:none}.qp-error .qp-display-icon-container.qp-background-color.qp-reset,.qplayer.qp-state-error .qp-display-icon-container.qp-background-color.qp-reset{background:0 0;border:none}.qp-error:hover .qp-display-icon-container,.qplayer.qp-state-error:hover .qp-display-icon-container{cursor:default;color:#fff;background:#000}.qp-error .qp-icon-display,.qplayer.qp-state-error .qp-icon-display{cursor:default;font-family:'qp-icons';font-weight:normal;background-color:transparent;font-variant:normal;-webkit-font-feature-settings:\"liga\";font-feature-settings:\"liga\";-ms-font-feature-settings:\"liga\" 1;-o-font-feature-settings:\"liga\";-webkit-font-smoothing:antialiased;font-style:normal;text-transform:none;-moz-osx-font-smoothing:grayscale}.qp-error .qp-icon-display:before,.qplayer.qp-state-error .qp-icon-display:before{content:'\\E817'}.qp-error .qp-icon-display:hover,.qplayer.qp-state-error .qp-icon-display:hover{color:#fff}.qp-error{font-size:16px;background-color:#000;color:#eee;width:100%;height:100%;display:table;opacity:1;position:relative}.qp-error .qp-icon-container{position:absolute;width:100%;height:100%;top:0;left:0;bottom:0;right:0}.qplayer.qp-flag-cast-available .qp-controlbar{display:table}.qplayer.qp-flag-cast-available .qp-icon-cast{display:inline-block}.qplayer.qp-flag-skin-loading .qp-captions,.qplayer.qp-flag-skin-loading .qp-controls,.qplayer.qp-flag-skin-loading .qp-title{-webkit-transform:translateY(150%) scaleX(1.2);transform:translateY(150%) scaleX(1.2);opacity:0}.qplayer.qp-flag-fullscreen{width:100% !important;height:100% !important;top:0;right:0;bottom:0;left:0;z-index:1000;margin:0;position:fixed}.qplayer.qp-flag-fullscreen.qp-flag-user-inactive{cursor:none;-webkit-cursor-visibility:auto-hide}.qplayer .qp-flag-live .qp-controlbar .qp-text-elapsed,.qplayer .qp-flag-live .qp-controlbar .qp-text-duration,.qplayer .qp-flag-live .qp-controlbar .qp-slider-time{display:none}.qplayer .qp-flag-live .qp-controlbar .qp-text-alt{display:inline}.qp-flag-user-inactive.qp-state-playing .qp-controlbar,.qp-flag-user-inactive.qp-state-playing .qp-dock{display:none}.qp-flag-user-inactive.qp-state-playing .qp-logo.qp-hide{display:none}.qp-flag-user-inactive.qp-state-playing .qp-plugin,.qp-flag-user-inactive.qp-state-playing .qp-captions{bottom:.5em}.qp-flag-user-inactive.qp-state-playing .qp-media *{cursor:none}.qp-flag-user-inactive.qp-state-playing .qp-logo.qp-hide{-webkit-transform:translateY(100%);transform:translateY(100%);display:block !important}.qp-flag-user-inactive.qp-state-playing .qp-dock{-webkit-transform:translateY(0);transform:translateY(0);display:block !important}.qplayer.qp-flag-media-audio .qp-controlbar{display:table}.qp-flag-media-audio .qp-preview{display:block}.qplayer.qp-flag-ads .qp-preview,.qplayer.qp-flag-ads .qp-dock{display:none}.qplayer.qp-flag-ads .qp-title{-webkit-transform:translateY(150%) scaleX(1.2) !important;transform:translateY(150%) scaleX(1.2) !important;opacity:0 !important}.qplayer.qp-flag-ads .qp-captions{display:none}.qplayer.qp-flag-ads .qp-overlayscreator-btn{-webkit-transform:translateY(-100%);transform:translateY(-100%)}.qplayer.qp-flag-ads .qp-controlbar .qp-icon-inline,.qplayer.qp-flag-ads .qp-controlbar .qp-icon-tooltip,.qplayer.qp-flag-ads .qp-controlbar .qp-text,.qplayer.qp-flag-ads .qp-controlbar .qp-slider-horizontal{display:none}.qplayer.qp-flag-ads .qp-controlbar .qp-icon-playback,.qplayer.qp-flag-ads .qp-controlbar .qp-icon-volume,.qplayer.qp-flag-ads .qp-controlbar .qp-slider-volume,.qplayer.qp-flag-ads .qp-controlbar .qp-icon-fullscreen{display:inline-block}.qplayer.qp-flag-ads .qp-controlbar .qp-text-alt{display:inline}.qplayer.qp-flag-ads .qp-controlbar .qp-slider-volume.qp-slider-horizontal,.qplayer.qp-flag-ads .qp-controlbar .qp-icon-inline.qp-icon-volume{display:inline-block}.qplayer.qp-flag-ads .qp-controlbar .qp-icon-tooltip.qp-icon-volume{display:none}.qplayer.qp-flag-ads .qp-logo{display:none}.qplayer.qp-flag-ads-googleima .qp-controlbar{display:table;bottom:0}.qplayer.qp-flag-ads-googleima.qp-flag-touch .qp-controlbar{font-size:1em}.qplayer.qp-flag-ads-googleima.qp-flag-touch.qp-state-paused .qp-display-icon-container{display:none}.qplayer.qp-flag-ads-googleima.qp-skin-seven .qp-controlbar{font-size:.9em}.qplayer.qp-flag-ads-vpaid .qp-controlbar{display:none}.qplayer.qp-flag-ads-hide-controls .qp-controls{display:none !important}.qplayer.qp-flag-ads.qp-flag-touch .qp-controlbar{display:table}.qplayer.qp-flag-overlay-open .qp-title{-webkit-transform:translateY(150%) scaleX(1.2);transform:translateY(150%) scaleX(1.2);opacity:0}.qplayer.qp-flag-overlay-open .qp-controls-right .qp-logo{-webkit-transform:translateY(150%) scaleX(1.2);transform:translateY(150%) scaleX(1.2);opacity:0}.qplayer.qp-flag-rightclick-open{overflow:hidden}.qplayer.qp-flag-rightclick-open .qp-rightclick{z-index:16777215;display:block}.qp-flag-controls-disabled .qp-controls{visibility:hidden}.qp-flag-controls-disabled .qp-logo{visibility:visible}.qp-flag-controls-disabled .qp-media{cursor:auto}.qp-flag-controls-disabled .qp-skip.qp-hidden{visibility:hidden}body .qplayer.qp-flag-flash-blocked .qp-title{-webkit-transform:translateY(0) scaleX(1);transform:translateY(0) scaleX(1);opacity:1}body .qplayer.qp-flag-flash-blocked .qp-controls,body .qplayer.qp-flag-flash-blocked .qp-overlays,body .qplayer.qp-flag-flash-blocked .qp-preview{display:none}.qp-flag-touch .qp-controlbar,.qp-flag-touch .qp-skip,.qp-flag-touch .qp-plugin{font-size:1.5em}.qp-flag-touch .qp-captions{bottom:4.25em}.qp-flag-touch .qp-icon-tooltip.qp-open-drawer:before{display:inline}.qp-flag-touch .qp-icon-tooltip.qp-open-drawer:before{content:'\\E830'}.qp-flag-touch .qp-display-icon-container{pointer-events:none}.qp-flag-touch .qp-watermark{pointer-events:none}.qp-flag-touch.qp-state-paused .qp-display-icon-container{display:table}.qp-flag-touch.qp-state-paused.qp-flag-dragging .qp-display-icon-container{display:none}.qp-flag-touch .qp-text-duration{padding:0 .35em}.qp-flag-touch .qp-controlbar .qp-icon:before{padding:0 .35em}.qp-flag-touch .qp-text-elapsed{padding:0 .35em}.qp-flag-compact-player .qp-icon-playlist,.qp-flag-compact-player .qp-text-elapsed,.qp-flag-compact-player .qp-text-duration{display:none}.qp-flag-audio-player{background-color:transparent}.qp-flag-audio-player .qp-media{visibility:hidden}.qp-flag-audio-player .qp-media object{width:1px;height:1px}.qp-flag-audio-player.qp-state-paused .qp-display-icon-container,.qp-flag-audio-player.qp-state-complete .qp-display-icon-container{display:none}.qp-flag-audio-player .qp-controlbar{display:table;bottom:0;margin:0;width:100%;min-width:100%;opacity:1}.qp-flag-audio-player .qp-controlbar .qp-icon-fullscreen{display:none}.qp-flag-audio-player .qp-controlbar .qp-icon-tooltip{display:none}.qp-flag-audio-player .qp-controlbar .qp-slider-volume.qp-slider-horizontal,.qp-flag-audio-player .qp-controlbar .qp-icon-inline.qp-icon-volume{display:inline-block}.qp-flag-audio-player .qp-controlbar .qp-icon-tooltip.qp-icon-volume{display:none}.qplayer.qp-flag-audio-player .qp-controlbar{display:table;left:0}.qplayer.qp-flag-audio-player .qp-controlbar{height:auto}.qplayer.qp-flag-audio-player .qp-preview{display:none}.qplayer.qp-flag-audio-player .qp-display-icon-container{display:none}.qplayer.qp-flag-dragging .qp-title{display:none !important}.qplayer.qp-direction-ltr .qp-controlbar-right-group .qp-icon-hd .qp-overlay .qp-option{direction:ltr !important}.qplayer.qp-direction-ltr .qp-title .qp-title-primary,.qplayer.qp-direction-ltr .qp-title .qp-title-secondary{float:left !important}.qplayer.qp-direction-ltr *{font-family:\"geosans\",\"iransans\" !important}.qplayer.qp-direction-ltr .qp-icon{font-family:qp-icons !important}.qp-controlbar .qp-menu .qp-option:before,.qp-icon,.qp-icon-display,.qp-icon-inline,.qp-icon-tooltip{-ms-font-feature-settings:\"liga\" 1;-o-font-feature-settings:\"liga\"}.qplayer,.qplayer.qp-flag-aspect-mode .qp-aspect{display:block}.qp-controlbar .qp-menu .qp-option:before,.qp-icon,.qp-icon-display,.qp-icon-inline,.qp-icon-tooltip,.qplayer.qp-state-error .qp-icon-display,body .qp-error .qp-icon-display{-webkit-font-smoothing:antialiased;font-style:normal;text-transform:none;-moz-osx-font-smoothing:grayscale}.qp-instream,.qp-preview{position:absolute;display:none}.qp-controls.qp-controls-disabled,.qplayer .qp-aspect,.qplayer.qp-state-complete .qp-captions,.qplayer.qp-state-complete .qp-display-icon-container .qp-text,.qplayer.qp-state-buffering .qp-display-icon-container .qp-text,.qplayer.qp-state-paused .qp-display-icon-container,.qplayer.qp-state-playing .qp-display-icon-container,.qp-icon-tooltip.qp-hidden,.qp-icon-tooltip.qp-open-drawer:before,.qp-logo .qp-flag-audio-player,.qp-overlay-horizontal,.qp-captions,.qp-slider-volume .qp-buffer,.qplayer.qp-flag-ads .qp-controlbar .qp-icon-inline,.qplayer.qp-flag-ads .qp-controlbar .qp-icon-tooltip,.qplayer.qp-flag-ads .qp-controlbar .qp-slider-horizontal,.qplayer.qp-flag-ads .qp-controlbar .qp-text,.qplayer.qp-flag-ads .qp-dock,.qplayer.qp-flag-ads .qp-preview,.qplayer.qp-flag-ads-googleima.qp-flag-touch.qp-state-paused .qp-display-icon-container,.qplayer.qp-flag-ads-vpaid .qp-controlbar,.qplayer.qp-flag-ads .qp-controlbar .qp-icon-tooltip.qp-icon-volume,.qplayer.qp-flag-ads .qp-logo,.qp-flag-audio-player.qp-state-complete .qp-display-icon-container,.qp-flag-audio-player.qp-state-paused .qp-display-icon-container,.qp-flag-compact-player .qp-icon-playlist,.qp-flag-compact-player .qp-text-duration,.qp-flag-compact-player .qp-text-elapsed,.qp-flag-touch.qp-state-paused.qp-flag-dragging .qp-display-icon-container{display:none}.qp-cast,.qp-cast-label,.qp-skip,.qp-captions,.qp-rightclick,.qp-tooltip-time,.qp-watermark{position:absolute}.qp-captions-text,.qp-captions-window.qp-captions-window-active{display:inline-block}.qp-tooltip-title{background-color:#000;color:#fff}.qp-text{color:#fff}.qp-slider-horizontal .qp-slider-container{height:.95em}.qp-slider-horizontal .qp-cue{width:.3em;height:.3em;background-color:#fff;border-radius:50%}.qp-dock .qp-dock-button{border:1px solid #333}.qp-skip.qp-skippable:hover .qp-icon-inline,.qp-skip.qp-skippable:hover .qp-text{color:#FF0046}.qp-playlist-container .qp-label .qp-icon-play,.qp-playlist-container .qp-option:hover .qp-label{color:#ff0046}.qp-playlist{background-color:rgba(0,0,0,0.8)}.qp-playlist-container{left:-70%;background-color:rgba(0,0,0,0.8);z-index:1}.qp-playlist-container .qp-icon-playlist{margin-left:0}.qp-playlist-container .qp-label .qp-icon-play:before{padding-left:0}.qp-button-color,.qp-tooltip-title{color:#fff}.qp-button-color:hover,.qp-toggle{color:#ff0046}.qp-icon-display,.qp-toggle.qp-off{color:#fff}.qp-display-icon-container{padding:0 .3em}.qp-slider-horizontal .qp-slider-container{margin-top:6px;background:0 0}.qp-slider-horizontal .qp-cue:after{width:.3em;height:.3em;background-color:#fff;border-radius:50%}.qp-menu,.qp-volume-tip{bottom:.15em}.qp-skip{padding:.4em;border-radius:1em}.qp-skip .qp-icon-inline,.qp-skip .qp-text{font-size:.7em}.qp-slider-time{background:0 0}@-webkit-keyframes loader-box{0%,10%{-webkit-transform:translate(-50%, -50%) rotate(0);transform:translate(-50%, -50%) rotate(0)}80%{-webkit-transform:translate(-50%, -50%) rotate(375deg);transform:translate(-50%, -50%) rotate(375deg)}90%{-webkit-transform:translate(-50%, -50%) rotate(350deg);transform:translate(-50%, -50%) rotate(350deg)}100%{-webkit-transform:translate(-50%, -50%) rotate(360deg);transform:translate(-50%, -50%) rotate(360deg)}}@keyframes loader-box{0%,10%{-webkit-transform:translate(-50%, -50%) rotate(0);transform:translate(-50%, -50%) rotate(0)}80%{-webkit-transform:translate(-50%, -50%) rotate(375deg);transform:translate(-50%, -50%) rotate(375deg)}90%{-webkit-transform:translate(-50%, -50%) rotate(350deg);transform:translate(-50%, -50%) rotate(350deg)}100%{-webkit-transform:translate(-50%, -50%) rotate(360deg);transform:translate(-50%, -50%) rotate(360deg)}}@-webkit-keyframes loader-center{0%,100%{opacity:0}50%{opacity:1}}@keyframes loader-center{0%,100%{opacity:0}50%{opacity:1}}@-webkit-keyframes loader-container{0%,100%{padding:10px}50%{padding:30px}}@keyframes loader-container{0%,100%{padding:10px}50%{padding:30px}}.qplayer .qp-tooltip-title .qp-text.qp-reset{width:80%;float:left;font-weight:700;margin-top:6px;text-align:right;font-family:'iransans';font-size:17px}.qplayer .qp-tooltip-title .qp-icon.qp-icon-inline.qp-icon-playlist.qp-reset{float:right}.qplayer .qp-playlist .qp-option .qp-label .qp-icon{position:absolute;margin-top:-25px;margin-left:-4px}.qplayer .qp-text-duration{color:#fff}.qplayer.qp-frist-start .qp-preview{display:block}.qp-box-share-input.qp-box-clipboard{font-family:Tahoma}.qplayer .qp-error-icon{font-size:40px;display:inline-block;padding-top:30px;margin-left:5px;margin-right:5px;margin-top:10px;color:#fff}.qplayer .qp-error-dialouge{width:100%;height:100px;background:rgba(187,19,26,0.7);text-align:center;vertical-align:middle;position:absolute}.qplayer .qp-error-message{color:#fff;display:inline-block;height:40px;vertical-align:middle;margin-left:5px;margin-right:5px}.qplayer.qp-direction-rtl .qp-error-dialouge{direction:rtl}.qplayer.qp-direction-rtl .qp-error-icon,.qplayer.qp-direction-rtl .qp-error-message{direction:rtl;text-align:right}.qplayer .qp-title-more-detail{float:left;color:#fff;width:auto;min-height:0;padding:.5em 15px;background-color:rgba(0,0,0,0.4);margin:0 0 .5em 0;font-size:.9em}.qplayer .qp-title-more-detail .qp-icon{line-height:14px;font-size:14px;margin-top:10px}.qplayer .qp-states-place{position:absolute;top:0;right:0;margin:.5em;-webkit-transition:all .3s ease-out;transition:all .3s ease-out}.qplayer .qp-states-place-item{margin-bottom:.5em}.qplayer .qp-states-place-viewer{background-color:rgba(0,0,0,0.6);color:#fff;height:30px;line-height:30px;padding:0 40px 0 15px !important;border-radius:1em 0 0 1em}.qplayer .qp-states-place-viewer span{width:30px;position:absolute;right:0;background-color:#000;text-align:center;font-size:20px;line-height:30px}.qp-flag-ads .qp-rightclick{display:none}.qplayer .qp-captions .qp-captions-text{background:rgba(0,0,0,0.6);border-radius:10px}.qp-title{height:auto;display:block;opacity:0;-webkit-transform:scaleX(1.2);transform:scaleX(1.2);-webkit-transition:all .3s ease-out;transition:all .3s ease-out}.qp-captions{-webkit-transition:all .3s ease-out;transition:all .3s ease-out}@font-face{font-family:'iransans';src:url(" + c(173) + ") format('woff'),url(" + c(174) + ") format('truetype');font-weight:normal;font-style:normal}@font-face{font-family:'geosans';src:url(" + c(175) + ") format('woff'),url(" + c(176) + ") format('truetype');font-weight:normal;font-style:normal}", ""]);
    }, function (a, b) {
        a.exports = function () {
            var a = [];
            return a.toString = function () {
                for (var a = [], b = 0; b < this.length; b++) {
                    var c = this[b];
                    c[2] ? a.push("@media " + c[2] + "{" + c[1] + "}") : a.push(c[1])
                }
                return a.join("")
            }, a.i = function (b, c) {
                "string" == typeof b && (b = [[null, b, ""]]);
                for (var d = {}, e = 0; e < this.length; e++) {
                    var f = this[e][0];
                    "number" == typeof f && (d[f] = !0)
                }
                for (e = 0; e < b.length; e++) {
                    var g = b[e];
                    "number" == typeof g[0] && d[g[0]] || (c && !g[2] ? g[2] = c : c && (g[2] = "(" + g[2] + ") and (" + c + ")"), a.push(g))
                }
            }, a
        }
    }, function (a, b, c) {
        a.exports = c.p + "742380f753f3bdc8b890568530655d70.woff"
    }, function (a, b, c) {
        a.exports = c.p + "d31cf3d797ae816e63b24a63f6c68235.ttf"
    }, function (a, b, c) {
        a.exports = c.p + "55dad8f0d5016dd54f732d69ee4f3215.woff"
    }, function (a, b, c) {
        a.exports = c.p + "7478c0c8ea2e401d3fedc8af903c3a2b.ttf"
    }, function (a, b, c) {
        a.exports = c.p + "d19ef7807e9b41b5be5c32bfeb79f994.woff"
    }, function (a, b, c) {
        a.exports = c.p + "d48a1de204bd75fb5977eb849c5b7e48.ttf"
    }, function (a, b, c) {
        function d(a, b) {
            for (var c = 0; c < a.length; c++) {
                var d = a[c], e = n[d.id];
                if (e) {
                    e.refs++;
                    for (var f = 0; f < e.parts.length; f++)e.parts[f](d.parts[f]);
                    for (; f < d.parts.length; f++)e.parts.push(j(d.parts[f], b))
                } else {
                    for (var g = [], f = 0; f < d.parts.length; f++)g.push(j(d.parts[f], b));
                    n[d.id] = {id: d.id, refs: 1, parts: g}
                }
            }
        }

        function e(a) {
            for (var b = [], c = {}, d = 0; d < a.length; d++) {
                var e = a[d], f = e[0], g = e[1], h = e[2], i = e[3], j = {css: g, media: h, sourceMap: i};
                c[f] ? c[f].parts.push(j) : b.push(c[f] = {id: f, parts: [j]})
            }
            return b
        }

        function f(a, b) {
            var c = q(), d = t[t.length - 1];
            if ("top" === a.insertAt) d ? d.nextSibling ? c.insertBefore(b, d.nextSibling) : c.appendChild(b) : c.insertBefore(b, c.firstChild), t.push(b); else {
                if ("bottom" !== a.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
                c.appendChild(b)
            }
        }

        function g(a) {
            a.parentNode.removeChild(a);
            var b = t.indexOf(a);
            b >= 0 && t.splice(b, 1)
        }

        function h(a) {
            var b = document.createElement("style");
            return b.type = "text/css", f(a, b), b
        }

        function i(a) {
            var b = document.createElement("link");
            return b.rel = "stylesheet", f(a, b), b
        }

        function j(a, b) {
            var c, d, e;
            if (b.singleton) {
                var f = s++;
                c = r || (r = h(b)), d = k.bind(null, c, f, !1), e = k.bind(null, c, f, !0)
            } else a.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (c = i(b), d = m.bind(null, c), e = function () {
                    g(c), c.href && URL.revokeObjectURL(c.href)
                }) : (c = h(b), d = l.bind(null, c), e = function () {
                    g(c)
                });
            return d(a), function (b) {
                if (b) {
                    if (b.css === a.css && b.media === a.media && b.sourceMap === a.sourceMap)return;
                    d(a = b)
                } else e()
            }
        }

        function k(a, b, c, d) {
            var e = c ? "" : d.css;
            if (a.styleSheet) a.styleSheet.cssText = u(b, e); else {
                var f = document.createTextNode(e), g = a.childNodes;
                g[b] && a.removeChild(g[b]), g.length ? a.insertBefore(f, g[b]) : a.appendChild(f)
            }
        }

        function l(a, b) {
            var c = b.css, d = b.media;
            if (d && a.setAttribute("media", d), a.styleSheet) a.styleSheet.cssText = c; else {
                for (; a.firstChild;)a.removeChild(a.firstChild);
                a.appendChild(document.createTextNode(c))
            }
        }

        function m(a, b) {
            var c = b.css, d = b.sourceMap;
            d && (c += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(d)))) + " */");
            var e = new Blob([c], {type: "text/css"}), f = a.href;
            a.href = URL.createObjectURL(e), f && URL.revokeObjectURL(f)
        }

        var n = {}, o = function (a) {
            var b;
            return function () {
                return "undefined" == typeof b && (b = a.apply(this, arguments)), b
            }
        }, p = o(function () {
            return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())
        }), q = o(function () {
            return document.head || document.getElementsByTagName("head")[0]
        }), r = null, s = 0, t = [];
        a.exports = function (a, b) {
            b = b || {}, "undefined" == typeof b.singleton && (b.singleton = p()), "undefined" == typeof b.insertAt && (b.insertAt = "bottom");
            var c = e(a);
            return d(c, b), function (a) {
                for (var f = [], g = 0; g < c.length; g++) {
                    var h = c[g], i = n[h.id];
                    i.refs--, f.push(i)
                }
                if (a) {
                    var j = e(a);
                    d(j, b)
                }
                for (var g = 0; g < f.length; g++) {
                    var i = f[g];
                    if (0 === i.refs) {
                        for (var k = 0; k < i.parts.length; k++)i.parts[k]();
                        delete n[i.id]
                    }
                }
            }
        };
        var u = function () {
            var a = [];
            return function (b, c) {
                return a[b] = c, a.filter(Boolean).join("\n")
            }
        }()
    }])
});