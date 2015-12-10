"use strict";
! function() {
    function r(a, b, f) {
        return a.getAttribute(b) || f
    }

    function e() {
        var h = document.getElementsByTagName("script"),
            f = h.length,
            a = h[f - 1],
            g, b, j;
        g = r(a, "zIndex", -1);
        b = r(a, "opacity", 0.5);
        j = r(a, "color", "0,0,0");
        return {
            l: f,
            z: g,
            o: b,
            c: j
        }
    }

    function E() {
        m.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth, m.height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
    }

    function F() {
        c.clearRect(0, 0, m.width, m.height);
        var a = [z].concat(l);
        l.forEach(function(f) {
            f.x += f.xa, f.y += f.ya, f.xa *= f.x > m.width || f.x < 0 ? -1 : 1, f.ya *= f.y > m.height || f.y < 0 ? -1 : 1, c.fillRect(f.x - 0.5, f.y - 0.5, 1, 1);
            for (var k = 0; k < a.length; k++) {
                var b = a[k];
                if (f !== b && null !== b.x && null !== b.y) {
                    var g, o = f.x - b.x,
                        h = f.y - b.y,
                        j = o * o + h * h;
                    j < b.max && (b === z && j >= b.max / 2 && (f.x -= 0.03 * o, f.y -= 0.03 * h), g = (b.max - j) / b.max, c.beginPath(), c.lineWidth = g / 2, c.strokeStyle = "rgba(" + d.c + "," + (g + 0.2) + ")", c.moveTo(f.x, f.y), c.lineTo(b.x, b.y), c.stroke())
                }
            }
            a.splice(a.indexOf(f), 1)
        }), A(F)
    }
    var u = document.createElement("canvas"),
        d = e(),
        B = "c_n" + d.l;
    u.id = B;
    u.style.cssText = "position:fixed;top:0;left:0;z-index:" + d.z + ";opacity:" + d.o;
    document.getElementsByTagName("body")[0].appendChild(u);
    var m = document.getElementById(B),
        c = m.getContext("2d");
    E(), window.onresize = E;
    var A = function() {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(a) {
            window.setTimeout(a, 1000 / 60)
        }
    }(),
        z = {
            x: null,
            y: null,
            max: 20000
        };
    window.onmousemove = function(a) {
        a = a || window.event, z.x = a.clientX, z.y = a.clientY
    }, window.onmouseout = function(a) {
        z.x = null, z.y = null
    };
    for (var l = [], t = 0; 150 > t; t++) {
        var n = Math.random() * m.width,
            D = Math.random() * m.height,
            C = 2 * Math.random() - 1,
            i = 2 * Math.random() - 1;
        l.push({
            x: n,
            y: D,
            xa: C,
            ya: i,
            max: 6000
        })
    }
    setTimeout(function() {
        F()
    }, 100)
}();