/*! power by kodcloud ver4.40(2019-03-21) [build 1553178691227] */
define("app/src/setting/main", ["lib/jquery-lib", "lib/artDialog/jquery-artDialog", "lib/util", "lib/contextMenu/jquery-contextMenu", "../../common/core", "../../common/tpl/upload.html", "../../common/tpl/formMake.html", "../../common/core.tools", "../../common/core.upload", "../../common/core.api", "../../common/core.playSound", "../../common/core.formMake", "../../common/rightMenuExtence", "../../app/appBase", "../../app/editor", "../../app/openWith", "../../app/html", "../../common/tpl/copyright.html", "../../common/tpl/themeDIY.html", "./fav", "./setting", "./page/about.html", "./page/fav.html", "./page/help.html", "./page/member.html", "./page/system.html", "./page/theme.html", "./page/user.html", "./page/wall.html", "./system/systemSetting", "./system/system", "lib/ztree/ztree", "./system/systemMember", "./system/tpl/userList.html", "./system/tpl/user.html", "./system/tpl/userImport.html", "./system/tpl/groupSelect.html", "./system/systemGroup", "./system/tpl/group.html", "./system/systemRole", "./system/systemGroupRole", "./system/tpl/groupRoleSetting.html"], function(a, b, c) {
    a("lib/jquery-lib"), a("lib/artDialog/jquery-artDialog"), a("lib/util"), a("lib/contextMenu/jquery-contextMenu"), core = a("../../common/core"), core.init(), Fav = a("./fav"), Setting = a("./setting"), a("./system/systemSetting"), System = a("./system/system"), $(document).ready(function() {
        $(".init-loading").fadeOut(450).addClass("pop_fadeout"), core.init(), Setting.init()
    })
});;;;;;
! function($) {
    ! function($, n, t, i, r, o, e, c, f, a, u, d, v, s, E, h, C, l, A, p, G, g, b, m, S, O, I, L, J, M, y, B, Q, k, F, _, P, N, H, R, w, X, j, V, D, x, T, Z, Y, z, W, K, U, q, $n, nn, tn, rn, on, en, cn, fn, an, un, dn, vn, sn, En, hn, Cn, ln, An, pn, Gn, gn, bn, mn, Sn, On, In, Ln, Jn, Mn, yn, Bn, Qn, kn, Fn, _n, Pn, Nn, Hn, Rn, wn, Xn, jn, Vn, Dn, xn, Tn, Zn, Yn, zn, Wn, Kn, Un, qn, $t, nt, tt, it, rt, ot, et, ct, ft, at, ut, dt, vt, st, Et, ht, Ct, lt, At, pt, Gt, gt, bt, mt, St, Ot, It, Lt, Jt, Mt, yt, Bt, Qt, kt, Ft, _t, Pt, Nt, Ht, Rt, wt, Xt, jt, Vt, Dt, xt, Tt, Zt, Yt, zt, Wt, Kt, Ut, qt, $i, ni, ti, ii, ri, oi, ei, ci, fi, ai, ui, di, vi, si, Ei, hi, Ci, li, Ai, pi, Gi, gi, bi, mi, Si, Oi, Ii, Li, Ji, Mi, yi, Bi, Qi, ki, Fi, _i, Pi, Ni, Hi, Ri, wi, Xi, ji, Vi, Di, xi, Ti, Zi, Yi, zi, Wi, Ki, Ui, qi, $r, nr, tr, ir, rr, or, er, cr, fr, ar, ur, dr, vr, sr, Er, hr, Cr, lr, Ar, pr, Gr, gr, br, mr, Sr, Or, Ir, Lr, Jr, Mr, yr, Br, Qr, kr, Fr, _r, Pr, Nr, Hr, Rr, wr, Xr, jr, Vr, Dr, xr, Tr, Zr, Yr, zr, Wr, Kr, Ur, qr, $o, no, to, io, ro, oo, eo, co, fo, ao, uo, vo, so, Eo, ho, Co, lo, Ao, po, Go, go, bo, mo, So, Oo, Io, Lo, Jo, Mo, yo, Bo, Qo, ko, Fo, _o, Po, No, Ho, Ro, wo, Xo, jo, Vo, Do, xo, To, Zo, Yo, zo, Wo, Ko, Uo, qo, $e, ne, te, ie, re, oe, ee, ce, fe, ae, ue, de, ve, se, Ee, he, Ce, le, Ae, pe, Ge, ge, be, me, Se, Oe, Ie, Le, Je, Me, ye, Be, Qe, ke, Fe, _e, Pe, Ne, He, Re, we, Xe, je, Ve, De, xe, Te, Ze, Ye, ze, We, Ke, Ue, qe, $c, nc, tc, ic, rc, oc, ec, cc, fc, ac, uc, dc, vc, sc, Ec, hc, Cc, lc, Ac, pc, Gc, gc, bc, mc, Sc, Oc, Ic, Lc, Jc, Mc, yc, Bc, Qc, kc, Fc, _c, Pc, Nc, Hc, Rc, wc, Xc, jc, Vc, Dc, xc, Tc, Zc, Yc, zc, Wc, Kc, Uc, qc, $f, nf, tf, rf, of, ef, cf, ff, af, uf, df, vf, sf, Ef, hf, Cf, lf, Af, pf, Gf, gf, bf, mf, Sf, Of, If, Lf, Jf, Mf, yf, Bf, Qf, kf, Ff, _f, Pf, Nf, Hf, Rf, wf, Xf, jf, Vf, Df, xf, Tf, Zf, Yf, zf, Wf, Kf, Uf, qf, $a, na, ta, ia, ra, oa, ea, ca, fa, aa, ua, da, va, sa, Ea, ha, Ca, la, Aa, pa, Ga) {
        $[t](i, [r, o, e, c, f, a, u, d, v, s, E, h, C, l], function(n) {
            $[A] = n(r), $[p] = n(o);
            var t = n(e),
                i = n(c),
                ga = n(f),
                ba = n(a),
                ma = n(u);
            n(d), $[G] = n(v), n(s), n(E), n(h), $[g] = function(n) {
                return $[b](n)
            }, $[m] = function(n) {
                return $[S](n)
            };
            var Sa = function() {
                $[I][O] = n, $[J][L] || ($[J][L] = function(n, t) {
                    $[J][M][n] = t
                }, $[J][y] = function(n, t) {
                    $[J][M][B][n] = t
                }), $[J][L](Q, !k), $[J][L](F, !_), $[J][y](P, {
                    $: $[N],
                    window: $[I],
                    log: $[R][H],
                    core: $[w],
                    pathTools: $[I][X],
                    inArray: $[j]
                }), $[J][M][B][X] = $[I][X], $[J][M][Q] = !k, V == $[x][D] ? ($[J][M][T] = !k, $[J][M][Z] = !k, $[J][M][Y] = !_) : ($[J][M][T] = !_, $[J][M][Z] = !_, $[J][M][Y] = !k)
            }, Oa = function() {
                    Sa(), z != typeof $[x] && (k != $[x][W] && $[N](U)[K](), $[x][W] || $[w][q]($n) || k == $[w][q](nn) || $[N](tn)[K](), $[x][rn] && on == $[x][rn][en] && ($[N][fn][M][cn] = !k), Ia()), $[an]() && ($[N](dn)[un](vn), n[sn](En, function() {
                        $[N](function() {
                            $[Cn][hn]($[ln][dn])
                        })
                    }), $[N](pn)[An](Gn, function() {
                        var n = $[N](this);
                        $[N](this)[gn](bn) || (n = $[N](this)[mn](Sn)), n[On](In), $[N][Jn][Ln]()
                    }), $[N](Mn)[An](yn, function() {
                        var n = $[N](this)[Bn](Qn);
                        n[kn](Fn, _n), $[Pn](function() {
                            n[kn](Fn, Nn)
                        }, Hn)
                    })), $[N](wn)[Rn](Xn, function(n) {
                        if (_ == $[N](n[Vn])[mn](Qn)[jn]) try {
                                $[N][Jn][Ln]()
                        } catch (n) {}
                    }), $[N](dn)[Xn](function() {
                        $[xn][Dn](Tn, function(n) {
                            $[Zn] != n && n[N](dn)[On](Xn)
                        })
                    }), $[N][fn][M][cn] && $[Yn]([zn, Wn, Kn, Sn, Un, qn, $t, nt], [tt, it, rt, ot]), $[N](ct)[et](ft, at), $[N][ut]({
                        headers: {
                            "X-CSRF-TOKEN": $[vt][dt](st)
                        }
                    }), $[N](Et)[Xn](function() {
                        var n = $[N](this)[et](ht);
                        $[vt][Ct](ht, n), $[I][At][lt]()
                    }), $[N](Et)[kn]({
                        padding: pt
                    }), $[N](Gt + $[vt][dt](ht) + gt)[kn]({
                        background: bt,
                        color: mt
                    }), $[w][St](), $[w][It][Ot]();
                    for (var t = _; t < $[I][Lt][jn]; t++) try {
                            $[I][Lt][t]()
                    } catch (i) {
                        $[R][Jt](Mt, i)
                    }
                    $[yt][On](Bt), La()
                }, Ia = function() {
                    var n = $[I][At],
                        t = n[Qt] ? kt + n[Qt] : Tn;
                    $[x][Ft] = n[_t] + Pt + n[Nt] + t + Ht, $[x][Rt] = $[wt]($[x][Ft], Ht) + n[jt][Xt](Vt, Tn);
                    var i = $[x][Dt][Xt](Vt, Tn);
                    $[x][Ft] + $[xt](i, Ht) != $[x][Rt] && ($[x][Ft] = $[wt]($[x][Rt], i) + Ht), $[x][Tt] = $[x][Rt] + Zt, Yt == $[x][Wt][zt] && ($[x][Tt] = $[x][Tt][Xt](Zt, Kt)), $[vt][Ct](Ut, $[x][Ft]), $[vt][Ct](qt, $[x][Rt]), $[vt][Ct]($i, $[x][ni], ti)
                }, La = function() {
                    $[an]() || n[sn]([ii, ri], function() {
                        var n = $[N](oi);
                        n[ei]({
                            className: ci,
                            liveEvents: !_,
                            slide: !k,
                            alignTo: fi,
                            alignX: ai,
                            alignY: ui,
                            showAniDuration: di,
                            hideAniDuration: vi,
                            offsetY: si,
                            offsetX: Ei,
                            showTimeout: function() {
                                var n = hi;
                                return $[N](this)[et](Ci) && (n = $[li]($[N](this)[et](Ci))), n
                            },
                            content: function() {
                                var n = $[N](this)[Ai](pi);
                                if ($[N](this)[et](Gi)) {
                                    var t = $[N]($[N](this)[et](Gi));
                                    n = t[gi](bi) || t[gi](mi) ? t[Si]() : t[wn]()
                                }
                                return n = n ? n : Tn, n[Xt](Oi, Ii)
                            }
                        }), $[N](dn)[Rn](yn, function() {
                            $[N](Li)[K](), $[N][Ji](Mi, yi)
                        })[Rn](In, function() {
                            $[N][Ji](Tn, yi)
                        }), $[N](Bi)[An](Qi, function() {
                            $[N](n)[ei](ki), $[N](Li)[K]()
                        })
                    })
                };
            return {
                init: Oa,
                serverDwonload: i[Fi],
                upload: i[_i],
                uploadInit: i[Ot],
                playSound: ba[Pi],
                playSoundFile: ba[Ni],
                tools: t,
                api: ga,
                formMake: ma,
                getPathIcon: function(n, t) {
                    if (t = void _ == t ? Tn : t, Hi == $[N][Ri](n)) {
                        var i = $[wi]($[wi](n), Ht);
                        if (n = {}, Xi != i[ji](_, k) || i[Vi](Ht)[jn] > k) return {
                                icon: Tn,
                                name: Tn
                        };
                        n[Di] = i[xi](Ti), n[Zi] = i[Vi](kt)[k]
                    }
                    var r = {};
                    r[$[x][Yi]] = {
                        icon: zi,
                        name: $[Ki][Wi]
                    }, r[$[x][Ui]] = {
                        icon: qi
                    }, r[$[x][$r]] = {
                        icon: nr
                    }, r[$[x][tr]] = {
                        icon: zi
                    }, r[$[x][ir]] = {
                        icon: rr,
                        name: $[Ki][rr]
                    }, r[$[x][or]] = {
                        icon: er,
                        name: $[Ki][cr]
                    }, r[$[x][fr]] = {
                        icon: ar,
                        name: $[Ki][ur]
                    }, r[$[x][dr]] = {
                        icon: vr,
                        name: $[Ki][sr]
                    };
                    var o = r[n[Di]];
                    return n[Di] == $[x][Yi] && $[x][Er] != n[Zi] ? o = {
                        icon: hr,
                        name: t
                    } : n[Di] == $[x][Ui] && Cr == n[lr] && (o = {
                        icon: qi
                    }), void _ == o && (o = {
                        icon: Tn,
                        name: Tn
                    }), void _ == o[Ar] && (o[Ar] = t), o
                },
                isFileView: function() {
                    var n = $[x][pr] + Gr + $[x][gr];
                    return br == n || mr == n ? !_ : !k
                },
                isSystemPath: function(n) {
                    var n = $[wi]($[wi](n), Ht);
                    if (void _ == n || Xi != n[ji](_, k) || n[Vi](Ht)[jn] > k) return !k;
                    var t = n[xi](Sr),
                        i = [$[x][Yi], $[x][$r], $[x][ir], $[x][or], $[x][fr], $[x][dr]];
                    return -k !== $[N][j](t[_], i) ? !_ : !k
                },
                pathPre: function(n) {
                    if (n = $[wi]($[wi](n), Ht), void _ == n || Xi != n[ji](_, k)) return Tn;
                    var t = n[xi](Or);
                    return t[_]
                },
                contextmenu: function(n) {
                    try {
                        $[N][Jn][Ln]()
                    } catch (t) {}
                    var t = n || $[I][Ir];
                    return t ? t && $[N](t[Vn])[gi](mi) || $[N](t[Vn])[gi](bi) || $[N](t[Vn])[gi](Lr) || $[N](t[Vn])[gi](Jr) || _ != $[N](t[Vn])[mn](Mr)[jn] || _ != $[N](t[Vn])[mn](yr)[jn] || _ != $[N](t[Vn])[mn](Br)[jn] || _ != $[N](t[Vn])[mn](Qr)[jn] ? !_ : !k : !_
                },
                pathThis: function(n) {
                    if (!n || Ht == n) return Tn;
                    var t = $[wt](this[kr](n), Ht),
                        i = t[Fr](Ht),
                        r = t[_r](i + k);
                    if (_ == r[Pr](Nr)) {
                        r = $[Hr](r[_r](r[Pr](Rr)));
                        var o = r[Vi](Ht);
                        r = o[o[jn] - k], Tn == r && (r = o[o[jn] - wr])
                    }
                    return r
                },
                pathClear: function($) {
                    if (!$) return Tn;
                    var n = $[Xt](Xr, Ht);
                    return n = n[Xt](jr, Ht), n = n[Xt](Vr, Ht)
                },
                pathFather: function(n) {
                    var t = $[wt](this[kr](n), Ht),
                        i = t[Fr](Ht);
                    return t[_r](_, i + k)
                },
                pathExt: function(n) {
                    var t = $[wi](n, Ht);
                    return -k != t[Fr](Ht) && (t = t[_r](t[Fr](Ht) + k)), -k != t[Fr](Gr) ? t[_r](t[Fr](Gr) + k)[Dr]() : t[Dr]()
                },
                pathUrlEncode: function(n) {
                    if (!n) return Tn;
                    var t = $[xr](n);
                    return t = t[Xt](Tr, Ht)
                },
                path2url: function(n, t) {
                    if (Zr == n[_r](_, Yr)) return n;
                    void _ == t && (t = !_);
                    var i, r = this[kr](n);
                    return $[x][W] && t && r[ji](_, $[x][zr][jn]) == $[x][zr] ? i = r[ji](_, $[x][Wr][jn]) == $[x][Wr] ? $[x][Rt] + this[Kr](r[Xt]($[x][Wr], Tn)) : $[x][Ft] + this[Kr](r[Xt]($[x][zr], Tn)) : (i = $[x][Tt] + Ur + $[x][qr] + Rr + $[xr](r), z != typeof $[x][$o] && (i = $[x][Tt] + no + $[x][hr] + to + $[x][io] + Rr + $[xr](r))), i
                },
                pathCommon: function(n) {
                    if (Zr == n[_r](_, Yr)) return $[xr](n);
                    if (n[_r](_, $[x][Yi][jn]) == $[x][Yi]) return $[xr](n);
                    if ($[x][ro] && $[x][ro][oo]) return n;
                    var t = this[kr](n),
                        i = $[xr](t);
                    return z != typeof $[x][$o] && (i = $[xr]($[x][Yi] + kt + $[x][hr] + Ht + $[x][ro][Ar] + t)), i
                },
                isApp: function(n) {
                    if (z == typeof $[eo]) return !k;
                    var t = $[eo][co];
                    return Hi == typeof n ? t == n : $[N][fo](n) && -k !== $[N][j](t, n) ? !_ : !k
                },
                pathReadable: function(n) {
                    if (ao != typeof $[x][uo]) return !_;
                    for (var t = $[x][uo][vo], i = _; i < t[jn]; i++) if (t[i][so] == n) return void _ == t[i][Eo] || k == t[i][Eo] ? !_ : !k;
                    t = $[x][uo][ho];
                    for (var i = _; i < t[jn]; i++) if (t[i][so] == n) return void _ == t[i][Eo] || k == t[i][Eo] ? !_ : !k;
                    return !_
                },
                pathCurrentWriteable: function() {
                    return $[w][Co](lo) ? !k : $[x][uo][Ao] ? $[x][uo][Ao][po] : !k
                },
                authCheck: function(n, t) {
                    return $[x][W] ? !_ : $[go][Go](n) && k == $[go][n] ? !_ : (t && (t = t === !_ ? $[Ki][bo] : t, $[So][mo](t, !k)), !k)
                },
                authCheckGroup: function(n, t) {
                    if (t = t || $[x][Oo], k == $[x][W] || !$[x][Io]) return !_;
                    var i = t[xi]($[Lo](Ht + $[x][Ui] + Jo));
                    if (i && wr == i[jn] && $[x][Io][i[k]]) {
                        var r = $[x][Io][i[k]];
                        if (!r[Go](n) || k != r[n]) return !k
                    }
                    return !_
                },
                ajaxError: function(n) {
                    var t = n[Mo],
                        i = $[N][fn][Bo][yo];
                    return $[So][Qo]($[Ki][ko], !k), Fo == t[_r](_, _o) ? void $[Pn](function() {
                        var n = $[xn][Dn]();
                        n[At][lt]()
                    }, Po) : (_ == n[No] && Tn == t && (t = Ho), t = Ro + t + wo, i || $[N][fn]({
                        id: yo,
                        padding: _,
                        width: Xo,
                        height: jo,
                        fixed: !_,
                        resize: !_,
                        ico: $[w][Vo](Jt),
                        title: Do,
                        content: Tn
                    }), void $[N][xo]($[N](To), t))
                },
                fileGet: function(n, t, i) {
                    var r = Zo;
                    Zr == n[_r](_, Yr) && (r = Yo);
                    var o = $[x][Tt] + zo + r + Wo + $[xr](n);
                    z != typeof $[x][$o] && (o = $[x][Tt] + Ko + $[x][hr] + to + $[x][io] + Uo + r + Wo + $[xr](n)), (n[qo](zo) >= _ || n[qo]($e) >= _) && (o = n), $[N][ne]({
                        url: o,
                        dataType: te,
                        error: function(n, t, r) {
                            $[w][ie](n, t, r), re == typeof i && i()
                        },
                        success: function(n) {
                            n[oe] && re == typeof t && (k == n[Ai][ee] && (n[Ai][ce] = $[fe](n[Ai][ce])), t(n[Ai][ce], n, o)), n[oe] || re == typeof i && i(n[Ai])
                        }
                    })
                },
                fileInfo: function(n, t) {
                    var i = $[x][Tt] + ae;
                    z != typeof $[x][$o] && (i = $[x][Tt] + ue + $[x][hr] + to + $[x][io]), $[N][ne]({
                        url: i,
                        type: de,
                        dataType: te,
                        data: n,
                        error: $[w][ie],
                        success: function($) {
                            re == typeof t && t($, n)
                        }
                    })
                },
                fileLink: function(n, t) {
                    if (n = this[kr](n), $[x][W] && n[ji](_, $[x][zr][jn]) == $[x][zr]) {
                        var i = $[x][Ft] + this[Kr](n[Xt]($[x][zr], Tn));
                        return void(re == typeof t && t(i, n))
                    }
                    var r = ve + $[xr](n) + se;
                    this[Ee](r, function(i) {
                        var r = i[oe] ? i[Ai][he] : !k;
                        return r ? void(re == typeof t && t(r, n)) : void $[So][mo]($[Ki][Ce] + le + $[Ki][Ae], !k)
                    })
                },
                setting: function(n) {
                    void _ == n && (n = $[x][W] ? pe : hr);
                    var t = Ge,
                        i = Ge;
                    $[an]() && (t = ge, i = ge), $[xn][Dn](be) ? $[xn][Dn](be, function(t) {
                        t[Se][me](n), $[N][fn][Bo][Ie][Oe](!_)
                    }) : $[N][fn][Le]($[x][Tt] + Je + n, {
                        id: Ie,
                        fixed: !_,
                        ico: $[w][Vo](Me),
                        resize: !_,
                        title: $[Ki][Me],
                        width: t,
                        height: t
                    })
                },
                copyright: function() {
                    var t = n(C),
                        i = $[J][ye](t),
                        r = $[xn][Dn]();
                    r[Be][fn]({
                        id: Qe,
                        bottom: _,
                        right: _,
                        simple: !_,
                        resize: !k,
                        disableTab: !_,
                        title: $[Ki][ke],
                        width: Fe,
                        padding: on,
                        fixed: !_,
                        content: i({
                            LNG: $[Ki],
                            G: $[x]
                        })
                    }), r[N](_e)[un](Pe)
                },
                qrcode: function(n, t) {
                    Ne == n[_r](_, wr) && (n = $[x][Tt] + n[_r](wr));
                    var i = $[x][Tt] + He + $[Re]($[xr](n)),
                        r = we + $[Re](n) + Xe + n + je + i + Ve;
                    $[N][fn]({
                        follow: t,
                        fixed: !_,
                        resize: !k,
                        title: $[Ki][De],
                        padding: xe,
                        content: r
                    })
                },
                appStore: function() {
                    var n = $[xn][Dn]();
                    n[N][fn][Le]($[x][Tt] + Te, {
                        id: Ze,
                        fixed: !_,
                        ico: $[w][Vo](Ye),
                        resize: !_,
                        title: $[Ki][Ze],
                        width: ze,
                        height: ze
                    })
                },
                openWindow: function(n, t, i, r) {
                    t = t ? t : $[Ki][mo], i = i ? i : ze, r = r ? r : We, $[an]() && (i = ge, r = ge);
                    var o = $[xn][Dn](),
                        e = o[N][fn][Le](n, {
                            ico: Tn,
                            title: t,
                            fixed: !_,
                            resize: !_,
                            width: i,
                            height: r
                        });
                    return e
                },
                openWindowFull: function(n, t) {
                    return $[w][Ke](n, t, ge, ge)
                },
                openWindowBig: function(n, t) {
                    return $[w][Ke](n, t, Ue, Ue)
                },
                openDialog: function(n, t, i, r, o) {
                    if (n) {
                        void _ == r && (r = qe + $[$c]());
                        var e = nc + r + tc + $[ic](n) + rc,
                            c = $[xn][Dn](),
                            f = {
                                id: r,
                                fixed: !_,
                                title: i,
                                ico: t,
                                width: ze,
                                height: oc,
                                padding: _,
                                content: e,
                                resize: !_
                            };
                        f = $[N][ec]({}, f, o);
                        var a = c[N][fn](f);
                        return a
                    }
                },
                openApp: function(n) {
                    if (cc == n[Ri]) {
                        var t = n[Vo]; - k == n[Vo][Pr]($[x][fc]) && Zr != n[Vo][ji](_, Yr) && (t = $[x][fc] + ac + n[Vo]), uc != typeof n[dc] && -k === n[dc][Pr](vc) && (n[dc] = $[li](n[dc])), uc != typeof n[sc] && -k === n[sc][Pr](vc) && (n[sc] = $[li](n[sc])), n[dc] || (n[dc] = Ue), n[sc] || (n[sc] = We);
                        var i = {
                            resize: n[Ec],
                            fixed: !_,
                            ico: $[w][hc](t),
                            title: n[Ar][Xt](Cc, Tn),
                            width: n[dc],
                            height: n[sc],
                            simple: n[lc],
                            padding: _
                        }, r = n[ce];
                        if (Ac == $[N][pc]()[_t] && Zr == $[N][pc](r)[_t]) return void $[I][Le](r);
                        var o = $[xn][Dn]();
                        Gc == $[w][gc](r) ? (i[ce] = $[w][bc](r), o[N][fn](i)) : o[N][fn][Le](r, i)
                    } else {
                        var e = n[ce];
                        $[Lo](Xi + e + mc)
                    }
                },
                update: function() {
                    $[Pn](function() {
                        var t = $[fe](Sc) + Oc + $[$c]();
                        n[sn](t, function($) {
                            try {
                                $[Ic](Lc)
                            } catch (n) {}
                        })
                    }, vi)
                },
                openPath: function(n) {
                    $[w][Co](Jc) ? $[Mc][so][Bo](n, mo) : $[w][Jc](n)
                },
                explorer: function(n, t) {
                    void _ == n && (n = Tn), void _ == t && (t = $[w][yc](n)), n = $[xr](n);
                    var i = $[x][Tt] + Bc + n;
                    z != typeof $[x][$o] && (i = $[x][Tt] + Qc + $[x][hr] + to + $[x][io] + Rr + n);
                    var r = $[xn][Dn](),
                        o = r[N][fn][Le](i, {
                            className: kc,
                            resize: !_,
                            fixed: !_,
                            ico: $[w][Vo](Fc),
                            title: t,
                            width: ze,
                            height: oc
                        }),
                        e = Ei * r[N](_c)[jn];
                    o[Nc][Pc][kn]({
                        left: Hc + e + Rc,
                        top: Hc + e + Rc
                    })
                },
                explorerCode: function(n) {
                    void _ == n && (n = Tn);
                    var t = $[x][Tt] + wc + n;
                    z != typeof $[x][$o] && (t = $[x][Tt] + Xc + $[x][hr] + to + $[x][io] + jc + n), $[I][Le](t)
                },
                setSkinFinished: function() {
                    var n = $[N](Vc)[et](Dc);
                    n && ($[N](xc)[et](Tc, n), $[N](Vc)[K]())
                },
                setSkin: function(n) {
                    $[Zc][Ct](Yc, n), $[x][rn][Yc] = n;
                    var t = $[x][fc] + zc + n + Wc + $[x][Kc];
                    t != $[N](xc)[et](Tc) && $[N](dn)[Uc](qc + t + $f), this[St]()
                },
                setSkinDiy: function() {
                    if ($[x][rn]) {
                        var t = $[Zc][dt](Yc),
                            i = nf,
                            r = $[Zc][tf](i);
                        ao != typeof r && ao == typeof $[x][rn][rf] && (r = $[x][rn][rf]), ao != typeof r && (r = {
                            bgBlur: k,
                            bgImage: $[x][fc] + of,
                            bgType: ef,
                            startColor: cf,
                            endColor: ff,
                            colorRotate: af
                        }, $[Zc][uf](i, r)), $[x][rn][rf] = r;
                        var o = Tn;
                        if (df == t && r) {
                            var e = n(l),
                                c = $[J][ye](e);
                            o = c(r)
                        }
                        $[N][Ji](o, i)
                    }
                },
                editorFull: function() {
                    var n = $[N](vf);
                    n[sf](Ef)
                },
                language: function(n) {
                    $[vt][Ct]($i, n, ti), $[I][At][lt]()
                },
                fullScreen: function() {
                    hf == $[N](dn)[et](Cf) && $[w][lf](), $[N](dn)[et](Cf, hf);
                    var n = $[xn][Dn](),
                        t = n[ln][Af];
                    t[pf] ? t[pf]() : t[Gf] ? t[Gf]() : t[gf] && t[gf]()
                },
                exitfullScreen: function() {
                    $[N](dn)[et](Cf, at), $[ln][bf] ? $[ln][bf]() : $[ln][mf] ? $[ln][mf]() : $[ln][Sf] && $[ln][Sf]()
                },
                createFlash: function(n, t, i) {
                    var r = $[$c]();
                    (z == typeof i || Tn == i) && (i = r);
                    var o = Tn;
                    $[N][If][Of] && $[li]($[N][If][Kc]) < Lf && (o = Jf);
                    var e = Mf + r + yf + o + Bf + i + Qf + i + kf + n + Ff + n + _f + t + Pf + r + Nf;
                    return $[Pn](function() {
                        var n = $[N](Gr + r);
                        if (k != n[jn]) {
                            var t = $[xn][Dn]();
                            n = t[N](Gr + r)
                        }
                        if (k == n[jn]) var i = _,
                        o = n[_], e = $[Hf](function() {
                            try {
                                i++, Rf == $[Xf][wf](o[jf]()) ? (n[Vf](Df)[K](), $[xf](e), e = Tf) : i > Rf && (n[Vf](Df)[K](), $[xf](e), e = Tf)
                            } catch (t) {}
                        }, Rf)
                    }, Zf), e
                },
                userSpaceHtml: function(n) {
                    var t = n[Vi](Ht),
                        i = $[Yf](t[_]),
                        r = zf * $[Yf](t[k]),
                        o = $[X][Wf]($[Yf](t[_])),
                        e = $[X][Wf](r),
                        c = o + Ht,
                        f = Rf * i / r;
                    f >= Rf && (f = Rf);
                    var a = Tn;
                    return f >= Kf && (a = Uf), _ == r || $[qf](r) ? (c += $[Ki][$a], f = na) : (c += e, f += vc), c = ta + a + ia + f + ra + c + oa
                },
                dateTime: function(n) {
                    return $[ea]($[Ki][ca], n)
                },
                uploadCheckSize: function(n) {
                    if (fa == $[w][aa]) return !_;
                    var t = $[x][uo][ua] || $[x][uo][da];
                    return t && _ != t[va] && sa * t[va] * sa * sa - t[Ea] < n ? !k : !_
                },
                uploadCheck: function(n, t) {
                    return t = void _ == t ? !_ : t, ha == $[x][$o] ? Yt == $[x][ro][po] : (void _ == n && (n = Ca), !$[x][W] && $[go][Go](n) && k != $[go][n] ? (t && $[So][mo]($[Ki][bo], !k), !k) : $[w][la](n) ? $[x][uo] && !$[x][uo][Ao][po] ? (t && ($[w][Aa]($[x][Oo]) ? $[So][mo]($[Ki][pa], !k) : $[So][mo]($[Ki][Ga], !k)), !k) : !_ : ($[So][mo]($[Ki][Ce], !k), !k))
                }
            }
        })
    }(this, void 0, $("#$%&'$"), $("())*+,--,'*+,.$"), $("/*0)1*2)1,(#/30-1"), $("/*0)1*%,.-4(5$/30-1"), $("/*+,.$/0,,16"), $("/*+,.$/2)1,(#"), $("/*+,.$/()&"), $("/*+,.$/)1(78,2'#"), $("/*+,.$/%,.-4(5$"), $("/*.&9304$'2:;0$'+$"), $("//*())*())<(6$"), $("//*())*$#&0,."), $("//*())*,)$'=&03"), $("//*())*30-1"), $("/*0)1*+,)7.&930/30-1"), $("/*0)1*03$-$>?@/30-1"), $("0)1A)1,(#"), $("0)1B,.-4(5$"), $("5,#C))"), $(")(03D(63:'+,#$"), $("3(63:'+,#$"), $(")(03D(63>$+,#$"), $("3(63>$+,#$"), $(".$E2&.$"), $("F&'#,F"), $("+,'%&9"), $("0$-)1(0$"), $("#$%(2106"), $("3$1)$."), $("&-),.06"), $("$6+()$"), 1, $("+,-).$66"), 0, $("5,#"), $("G"), $("1,9"), $("+,'6,1$"), $("+,.$"), $(")(03H,,16"), $("&'C..(7"), $("I#$J"), $("$'J&.,'-$'0"), $("K"), $("+(+3$"), $("-&'&-&L$"), $("+,-)&1$>$M29"), $("2'#$%&'$#"), $("&6N,,0"), $(".$-,J$"), $("/-$'2O6760$-O6$00&'9"), $("(203P3$+5"), $("6760$-4$-M$./9$0"), $("6760$-K.,2)/9$0"), $("/-$'2O6760$-O9.,2)"), $("26$.P,'%&9"), $("Q"), $("('&-(0$R)$'"), $("('&-(0$"), $("#&(1,9"), $("&6=()"), $("(##P1(66"), $("M,#7"), $("F()O)(9$"), $("(67'+"), $("1&M*,03$.6*%(60P1&+5"), $("(00(+3"), $("B(60P1&+5"), $("#,+2-$'0"), $("1&J$"), $("/+,'0$;0O-$'2O&0$-/+,'0$;0O-$'2O62M-$'2S/+,'0$;0O-$'2O&0$-"), $("0,2+360(.0"), $("3(6P1(66"), $("+,'0$;0O-$'2O&0$-"), $(")(.$'06"), $("/+,'0$;0O-$'2O&0$-"), $("0.&99$."), $("-,26$2)"), $("3&##$'"), $("+,'0$;04$'2"), $("/+,'0$;0O-$'2O&0$-/+,'0$;0O-$'2O62M-$'2"), $("-,26$#,F'"), $("+3&1#.$'"), $("/+,'0$;0O-$'2O1&60"), $("+66"), $("),&'0$.O$J$'06"), $("','$"), $("6$0H&-$,20"), $("(20,"), 400, $("M&'#"), $("30-1"), $("+1&+5"), $("1$'903"), $("0(.9$0"), $("%.(-$H,)"), $("83(.$>(0("), "", $("6$1%"), $("1,(#N&))1$"), $("("), $("M200,'"), $("/.&))1$O&0$-"), $("T)&+5$."), $("/-$'283(.$<200,'"), $("/-$'2O.$+7+1$OM200,'"), $("/6$+0&,'S/1&60"), $("/#&6(M1$#"), $("/#&6(M1$"), $("/L0.$$"), $("/#&6(M1$O.&))1$"), $("(00."), $("(U&-9"), $("#.(99(M1$"), $("%(16$"), $("(V(;8$02)"), $("9$0"), $("P,,5&$"), $("WOP8NBOHRX:Y"), $("/+,--,'O%,,0$.SZ%,.+$=()["), $("%,.+$=()"), $("6$0"), $(".$1,(#"), $("1,+(0&,'"), $("Q/\\$-SQ/]$-"), $("/+,--,'O%,,0$.SZ%,.+$=()^"), $("["), $("T_\\`M+("), $("T%%%"), $("6$085&'>&7"), $("&'&0"), $("0,,16"), $("5,#N$(#7"), $("$..,."), $("5,#N$(#7S$..,.a"), $("D,,5"), $("5,#N$(#7/$'#"), $("),.0"), $("a"), $("F$MD,60"), $(").,0,+,1"), $("**"), $("3,60'(-$"), $("*"), $("())N,,0"), $(".0.&-"), $(".$)1(+$"), $(")(03'(-$"), $("&'#$;/)3)"), $("())?'#$;"), $("10.&-"), $("())D,60"), $("&'#$;/)3)b"), $("c"), $(")(.(-N$F.&0$"), $("6$00&'96"), $("&'#$;/)3)*"), $("DR8H"), $("CddIDR8H"), $("5,#A6$.e('92(9$"), $("1('9"), 8760, $("1&M*),6370&)*VE2$.7/),6370&)/V6"), $("1&M*),6370&)*65&'/+66"), $("Z0&01$["), $("),6370&)"), $(")0&)6O65&'"), $("+2.6,."), $(".&930"), $("M,00,-"), 150, 200, 10, 20, 1500, $("0&01$O0&-$,20"), $(")(.6$?'0"), $("#(0("), $("0&01$/),6370&)"), $("0&01$O#(0("), $("&6"), $("&')20"), $("0$;0(.$("), $("J(1"), /\n/g, $("fM.*g"), $("/)0&)6O65&'"), $("6$08071$"), $("M,#7S/)0&)6O65&'h#&6)1(7a','$Si&-),.0('0jk"), $(")0&)6O0&01$"), $("&')20U0$;0(.$("), $("%,+26"), $("3&#$"), $("6$.J$.>F,'1,(#"), $("2)1,(#"), $(")1(78,2'#"), $(")1(78,2'#B&1$"), $("60.&'9"), $("07)$"), $("0.&-"), $("h"), $("62M60.&'9"), $("6)1&0"), $(")(03H7)$"), $("-(0+3"), /\{.*\}/, $("&#"), $("XR>IA8:NI8DCN:"), $("26$.O6$1%"), $("-7I63(.$"), $("eYK"), $("XR>IKNRAdIdCHD"), $("9.,2)O6$1%O,F'$."), $("XR>IKNRAdI8DCN:"), $("9.,2)O92$60"), $("XR>IA8:NI8:eB"), $("XR>IA8:NIN:P@Pe:"), $(".$+7+1$"), $("XR>IA8:NIBCl"), $("0.$$O%(J"), $("%(J"), $("XR>IKNRAdINRRHI8:eB"), $("9.,2)O6$1%O.,,0"), $("-7I5,#I9.,2)"), $("XR>IKNRAdINRRHICee"), $("9.,2)O.,,0"), $("5,#I9.,2)"), $("26$.?>"), $("26$."), $(",F'$."), $(".,1$"), $("'(-$"), $("8H"), $("/"), $("CPH"), $("63(.$/%&1$"), $("()&/J&$F"), /\{.*\}/, /\{.*\}/, $("$J$'0"), $(")"), $(").$"), $("/+('O.&930O-$'2"), $("/0,)M(."), $("/$#&0OM,#7"), $("/(2&O60(0$O%,+26"), $(")(03P1$(."), $("1(60?'#$;R%"), $("62M60."), $("6$(.+3"), $("%&1$d.,;7"), $("2.1>$+,#$"), $("m)(03^"), 2, /\\/g, /\/+/g, /\.+\//g, $("0,e,F$.P(6$"), $("2.1:'+,#$"), /%2F/g, $("300)"), 4, $("F$MN,,0"), $("M(6&+d(03"), $(")(03A.1:'+,#$"), $("$;)1,.$.*%&1$d.,;7m(++$66H,5$'^"), $("(++$66H,5$'"), $("63(.$d(9$"), $("63(.$*%&1$d.,;7m26$.^"), $("m6&#^"), $("6&#"), $("63(.$?'%,"), $("J&$F"), $("P,'%&9"), $(")(9$C))"), $("&6C..(7"), $(",MV$+0"), $("V6,'>(0("), $("%&1$e&60"), $(")(03"), $("&6N$(#(M1$"), $("%,1#$.e&60"), $("&6C))"), $("$#&0,."), $("&'%,"), $("+('A)1,(#"), $("3(6RF'd.,)$.07"), $("CAHD"), $("',I)$.-&66&,'"), $("0&)6"), $("H&)6"), $("03&6d(03"), $("(203K.,2)N,1$"), $("$J(1"), $("ano#pq*"), $(".$6),'6$H$;0"), $("(V(;:..,.>&(1,9"), $("1&60"), $("+1,6$"), $("6760$-I$..,."), $("fiOO26$.S1,9&'OOg"), 17, 500, $("60(026"), $("rstuvwSn'$0aa:NNIPRYY:PH?RYIN:8:Hqxtuyz{fM.*g|", 90, 91, 92, 93, 94, 95, "r", 96, "x", 97, 98, 99, 100, 101, 102, "{", 103, ""), $("f#&JS+1(66^", 104, "(V(;:..,.", 104, "S6071$^", 104, "%,'0O6&L$ac_);j)(##&'9a_Q);j+,1,.aTBB", 105, "`QQj", 104, "g"), $("f*#&Jg"), $(106, "Q", 107, ""), $(106, 108, 107, ""), $("&+,'"), $("CV(;S:..,."), $("&%.(-$D0-1"), $("/(V(;:..,.>&(1,9S/(2&O+,'0$'0"), $("%&1$'(-$"), $("%&1$A.1"), $("$#&0,.*%&1$K$0m"), $("^"), $("63(.$*%&1$K$0m26$.^"), $("m"), $("&'#$;R%"), $("63(.$*%&1$K$0m"), $("(V(;"), $("V6,'"), $("(V(;:..,."), $("%2'+0&,'"), $("+,#$"), $("M(6$", 106, "_"), $("+,'0$'0"), $("M(6$", 106, "_>$+,#$"), $("$;)1,.$.*)(03?'%,"), $("63(.$*)(03?'%,m26$.^"), $("dR8H"), $("#(0(C..^Zh", 104, "07)$", 104, "a", 104, "%&1$", 104, "U", 104, ")(03", 104, "a", 104, ""), $(104, "k[mJ&$Fd(9$^c"), $("%&1$?'%,"), $("#,F'1,(#d(03"), $("',I)$.-&66&,'I(+0&,'"), $("^^g"), $("9.,2)I.,1$I)(03&'%,"), $("6760$-"), $("`", 108, 107, ""), $("cQQ", 107, ""), $("R)$'6$00&'9I-,#$"), $("6$0K,0,"), $("8$00&'9"), $("#&6)1(7"), $("6$00&'9I-,#$"), $(",)$'"), $("6$00&'9T"), $("6$00&'9"), $("+,-)&1$"), $("(.0"), $("#&(1,9O+,)7.&930"), $("(M,20"), 425, $("/#&(1,9O+,)7.&930"), $("('&-(0$#O", 109, "QQSL,,-?'"), $("/*"), $("26$.*E.+,#$m2.1^"), $("E2,0$D0-1"), $("f(S3.$%^", 110, ""), $(110, "S6^", 110, ""), $(110, "S0(.9$0^", 110, "IM1('5", 110, "gf&-9S6.+^", 110, ""), $(110, "S6071$^", 110, "M,.#$.ac);S6,1&#ST$$$j", 110, "*gf*(g"), $("E.+,#$"), 30, $("())"), $("())I60,.$"), $("())O60,.$"), $("`Q", 107, ""), $(109, "Q", 107, ""), $(",)$'=&'#,F"), $(105, "Q", 107, ""), $(",)$'>&(1,9"), $("AA?>"), $("f&%.(-$S%.(-$M,.#$.^", 110, "Q", 110, "S'(-$^", 110, "R)$'"), $(110, "S6.+^", 110, ""), $("30-1:'+,#$"), $(110, "S6071$^", 110, "F&#03acQQ", 107, "j3$&930acQQ", 107, "jM,.#$.aQj", 110, "gf*&%.(-$g"), $(109, 108, 107, ""), $("$;0$'#"), $("2.1"), $("60(0&+d(03"), $("&-(9$6*%&1$I&+,'*&+,'I())*"), $("'2-M$."), $("F&#03"), $(107, ""), $("3$&930"), $(".$6&L$"), $("&+,'8.+"), $("/,$;$"), $("6&-)1$"), $("300)6"), $(")(.6$A.1"), $("6F%"), $(")(03:;0"), $("+.$(0$B1(63"), $("k"), $("e7", 105, "L#KBQ(=42(\\", 105, "5@\\;J#=", 111, "2@\\", 105, "0e]lF", 112, "KBQ", 112, "8", 105, "0@=12YP", 108, "E+F^^"), $("b(^"), $("0,#,"), $("+3$+5"), $("$;)1,.$."), $("2&"), $(")(03H3&6"), $("$;)1,.$.m07)$^&%.(-$m)(03^"), $("63(.$*%,1#$.m07)$^&%.(-$m26$.^"), $("#&(1,9:;)1,.$."), $("%,1#$."), $("/#&(1,9:;)1,.$."), $("F.()"), $(">R4"), $("p^"), $(");"), $("$#&0,.m).,V$+0^"), $("63(.$*+,#$N$(#m26$.^"), $("m).,V$+0^"), $("/1&'5O03$-$O1,(#$#"), $("6.+"), $("T1&'5O03$-$O6071$"), $("3.$%"), $("e,+(1>(0("), $("03$-$"), $("6071$*65&'*"), $("/+66bJ$.^"), $("J$.6&,'"), $("())$'#"), $("f&-9S6.+^", 104, ""), $(104, "S,'1,(#^", 104, "+,.$/6$085&'B&'&63$#nqj", 104, "S,'$..,.^", 104, "+,.$/6$085&'B&'&63$#nqj", 104, "S+1(66^", 104, "3&##$'S1&'5O03$-$O1,(#$#", 104, "g"), $("5,#8071$>&7"), $("9$0P,'%&9"), $("03$-$>?@"), $("&-(9$6*F(11I)(9$*", 105, "/V)9"), $("+,1,."), $("T_", 108, 106, ""), $("TQQQ"), $("\\QQ"), $("6$0P,'%&9"), $("#&7"), $("&%.(-$Z'(-$^R)$',)$':#&0,.["), $("0,991$P1(66"), $("%.(-$O%2116+.$$'"), $("0.2$"), $("%2118+.$$'"), $("$;&0%2118+.$$'"), $("#,+2-$'0:1$-$'0"), $(".$E2$60B2116+.$$'"), $("-,LN$E2$60B2118+.$$'"), $("F$M5&0N$E2$60B2118+.$$'"), $("$;&0B2116+.$$'"), $("-,LP('+$1B2118+.$$'"), $("F$M5&0P('+$1B2118+.$$'"), $("-6&$"), $("M.,F6$."), 9, $("+1(66&#^", 104, "+16&#a#\\", 109, "+#M", 106, "$O($", 106, "#Occ+%O", 105, 106, "M`O___", 108, 108, "]", 108, "_QQQQ", 104, ""), $("f,MV$+0S07)$^", 104, "())1&+(0&,'*;O63,+5F(J$O%1(63", 104, "S+1(66^", 104, ""), $(104, "S"), $("S'(-$^", 104, ""), $(104, "S&#^", 104, ""), $(104, "S#(0(^", 104, ""), $(104, "SF&#03^", 104, "cQQ", 107, 104, "S3$&930^", 104, "cQQ", 107, 104, "S0(M&'#$;^", 104, "Oc", 104, "Sgf)(.(-S'(-$^", 104, "-,J&$", 104, "SJ(12$^", 104, ""), $(104, "*gf)(.(-S'(-$^", 104, "(11,F%2116+.$$'", 104, "SJ(12$^", 104, "0.2$", 104, "S*gf)(.(-S'(-$^", 104, "(11,F6+.&)0(++$66", 104, "SJ(12$^", 104, "(1F(76", 104, "S*gf)(.(-S'(-$^", 104, "(11,F8+.&)0C++$66", 104, "SJ(12$^", 104, "(1F(76", 104, "S*gf)(.(-S'(-$^", 104, "%1(63J(.6", 104, "SJ(12$^", 104, ""), $(104, "S*gf)(.(-S'(-$^", 104, "F-,#$", 104, "SJ(12$^", 104, "0.('6)(.$'0", 104, "S*gf*,MV$+0gf#&JS+1(66^", 104, "(2&O1,(#&'9", 104, "S&#^", 104, ""), $("I1,(#&'9", 104, "gf6)('g1,(#&'9//f*6)('gf*#&Jg"), $("6$0?'0$.J(1"), 100, $("%1,,."), $("4(03"), $("d$.+$'0e,(#$#"), $("'$;0"), $("/(2&O1,(#&'9"), $("+1$(.?'0$.J(1"), null, 50, $(")(.6$B1,(0"), 1073741824, $("%&1$8&L$"), 80, $("F(.'&'9"), $("&6Y(Y"), $("6)(+$I0&)6I%211"), $("Q", 107, ""), $("f#&JS+1(66^", 110, "6)(+$O&'%,OM(.", 110, "gf#&JS+1(66^", 110, "6)(+$O).,+$66", 110, "gf#&JS+1(66^", 110, "6)(+$O).,+$66O26$S"), $(110, "S6071$^", 110, "F&#03a"), $(110, "gf*#&Jgf*#&Jgf#&JS+1(66^", 110, "6)(+$O&'%,", 110, "g"), $("f*#&Jgf*#&Jg"), $("#(0$"), $("0&-$I07)$"), $("C"), $("J$.6&,'H7)$"), $("9.,2)8)(+$A6$"), $("26$.8)(+$"), $("6&L$4(;"), 1024, $("6&L$A6$"), $("63(.$"), $("$;)1,.$./%&1$A)1,(#"), $("(203P3$+5K.,2)"), $("&68760$-d(03"), $(")(03I+('I',0I(+0&,'"), $("',I)$.-&66&,'IF.&0$"))
}(function($) {
    var n = function($) {
        return String.fromCharCode($.charCodeAt() - 3)
    };
    return function() {
        for (var t = arguments, i = "", r = 0, o = t.length; o > r; r++) if ("number" == typeof t[r]) i += n($[0].charAt(t[r]));
            else for (var e = 0, c = t[r].length; c > e; e++) i += n($[0].charAt(t[r][e].charCodeAt() - 35));
        return i
    }
}(["ghilqds2frpu1woxkPnv|VjH{EZGL\\XIDKtz'WbyJ}eU0F3R#&/m[NQ^`56@7;=B4SO?A~$>Y)+_.,罔统迡推锜诲／巵釐罱诺聗糾举朽啉戙箤棃柨阵灮墜酐＄%<9(8:*T]"]));;
define("app/common/tpl/upload.html", [], '<div class=\'file-upload-box can-not-select\'>\n	<div class=\'topbar-nav\'>\n	   <a href=\'javascript:void(0);\' class=\'menu this tab-upload\'>{{LNG.upload_local}}</a>\n	   <a href=\'javascript:void(0);\' class=\'menu tab-download\'>{{LNG.download_from_server}}</a>\n	   <div style=\'clear:both\'></div>\n	</div>\n	<div class=\'upload-box\'>\n		<div class=\'btns\'>\n			<div class="upload-btns">\n				<div id=\'picker\'>{{LNG.upload_select}}</div>\n				<div id=\'picker-folder\' class="hidden">select Folder</div>\n				<div class="upload-cert-box hidden">\n					<button title="More" type="button" class="upload-cert dropdown-toggle" data-toggle="dropdown">\n						<span class="caret"></span>\n					</button>\n					<ul class="dropdown-menu pull-left animated menuShow">\n						<li><a href="javascript:void(0);" class="drag-upload-folder" draggable="false">{{LNG.folder}} {{LNG.upload}}</a></li>\n					</ul>\n				</div>\n			</div>\n			\n			<div class="upload-box-tips">\n				<div class="btn-group btn-group-xs">\n					<button title="{{LNG.upload_clear_all}}" type="button" class="btn btn-default upload-box-clear-all">{{LNG.upload_clear_all}}</button>\n					<button title="{{LNG.upload_clear}}" type="button" class="btn btn-default upload-box-clear">{{LNG.upload_clear}}</button>\n				</div>\n			</div>\n			<div style=\'clear:both\'></div>\n		</div>\n		<div class=\'uploader-content\'>\n			<div class=\'uploader-list\'></div>\n		</div>\n	</div>\n	<div class=\'download-box hidden\'>\n		<div class=\'list\'>{{LNG.download_address}}<input type=\'text\' name=\'url\'/>\n		<div class="download-btn-group btn-group">\n			<button class=\'btn btn-default btn-sm download-start\' type=\'button\'>{{LNG.download}}</button>\n			<button type="button" class="btn btn-default btn-sm dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\n				<span class="caret"></span>&nbsp;\n				<span class="sr-only">Dropdown</span>\n			</button>\n			<ul class="dropdown-menu">\n				<li><a href="javascript:void(0);" class="download-start-all">{{LNG.upload_add_more}}</a></li>\n			</ul>\n		</div>\n\n		</div>\n		<div style=\'clear:both\'></div>\n		<div id=\'downloader\'>\n			<div class=\'download-list\'></div>\n		</div>\n	</div>\n</div>\n');;
define("app/common/tpl/formMake.html", [], '<div id="{{wrapID}}" class=\'config-box form-box can-not-select\n	{{if items.formStyle && items.formStyle.className}}{{items.formStyle.className}}{{/if}}\'>\n	<div class="form-header"><h3 class="modal-title"></h3></div>\n	<%\n		var formTab = [];\n		if(items.formStyle && kod.window.$.isArray(items.formStyle.tabs)){\n			formTab = items.formStyle.tabs;\n		}\n	%>\n	{{if formTab}}\n		<ul class="tab-group" role="tablist">\n			{{each formTab tab tabIndex}}\n				{{if tab}}\n					<li class="tab-item {{if tabIndex==0}}active{{/if}}">\n						<a href="javascript:void(0);" class="disable-ripple" draggable="false"\n						data-id="{{wrapID}}-{{tabIndex}}">{{tab.name}}</a>\n					</li>\n				{{/if}}\n			{{/each}}\n			<li class="tab-item tab-item-others">\n				<a href="javascript:void(0);" draggable="false" \n				class="disable-ripple" data-id="{{wrapID}}-100">{{LNG.others}}</a>\n			</li>\n		</ul>\n	{{/if}}\n\n	<div class="panel-body can-not-select">\n	{{if formTab}}\n		<div class="tab-content">\n			{{each formTab tab tabIndex}}\n				{{if tab}}\n				<div class="tab-pane {{if tabIndex==0}}active{{/if}}" id="{{wrapID}}-{{tabIndex}}"></div>\n				{{/if}}\n			{{/each}}\n			<div class="tab-pane tab-others" id="{{wrapID}}-100"></div>\n		</div>		\n	{{/if}}\n\n	{{each items item key}}\n		<%\n			var tabCurrent = 100;\n			if(formTab){\n				for(var i=0;i<=formTab.length;i++){\n					if( formTab[i] && kod.window.inArray(formTab[i][\'field\'],key)){\n						tabCurrent = i;\n						break;\n					}\n				}\n			}\n\n			//元素属性;\n			var itemAttr = " ";\n			if(typeof(item.itemAttr) == \'object\'){\n				for(var prop in item.itemAttr){\n					itemAttr += prop+"=\'"+item.itemAttr[prop]+"\' ";\n				}\n				if(item.itemStyle){\n					itemAttr += "style=\'"+item.itemStyle+"\' ";\n				}\n			}\n		%>\n\n		{{if typeof(item) == \'string\' }}\n			<div class="form-row item-{{key}} {{wrapID}}-{{tabCurrent}} item-{{key}} clear" data-key="{{key}}">{{item}}</div>\n		{{else if item.type == "html" || !item.type}}\n			{{if key != \'formStyle\'}}\n				<div class="form-row item-{{key}} form-{{item.type}} {{wrapID}}-{{tabCurrent}} {{item.className||\'\'}} clear" \n					data-type="{{item.type}}" data-key="{{key}}" {{itemAttr}}>\n					\n					{{if typeof(item.display) !=\'undefined\' }}\n					<div class="setting-title">\n						{{@item.display}} {{if item.require}}<span class="require">*</span>{{/if}}\n					</div>\n					{{/if}}\n\n					{{if item.value}}{{@item.value}}{{/if}}\n					{{if item.display}}{{@item.display}}{{/if}}\n					{{if item.desc}}\n					<div class="setting-content">{{@item.desc}}</div>\n					{{/if}}\n				</div>\n			{{/if}}\n		{{else}}\n			{{if item.value == undefined }}\n				{{if item.value = \'\'}}{{/if}}\n			{{/if}}\n			<div class="form-row item-{{key}} form-{{item.type}} {{wrapID}}-{{tabCurrent}} {{item.className||\'\'}}"\n				data-type="{{item.type}}" data-key="{{key}}">\n\n				{{if typeof(item.display) !=\'undefined\' }}\n				<div class="setting-title">\n					{{@item.display}} {{if item.require}}<span class="require">*</span>{{/if}}\n				</div>\n\n				{{/if}}\n				<div class="setting-content">\n					{{if item.type == \'input\'}}\n						{{if item.titleLeft}}<span class="input-title-left">{{item.titleLeft}}</span>{{/if}}\n						<input type="text" name="{{key}}" value="{{item.value}}" {{itemAttr}} \n							class="{{item.itemClass||\'\'}} \n							{{if item.titleLeft}}span-title-left{{/if}} \n							{{if item.titleRight}}span-title-right{{/if}} ">\n						{{if item.titleRight}}<span class="input-title-right">{{item.titleRight}}</span>{{/if}}\n					{{else if item.type == "textarea"}}\n						<textarea name="{{key}}" class="{{item.itemClass||\'\'}}" {{itemAttr}}>{{@item.value}}</textarea>\n					{{else if item.type == "codeEditor"}}\n						<input type=\'hidden\' name="{{key}}" type=\'hidden\' class="{{item.itemClass||\'\'}}" {{itemAttr}} />\n						<textarea name="{{key}}" class="{{item.itemClass||\'\'}}" {{itemAttr}}>{{@item.value}}</textarea>\n					{{else if item.type == "password"}}\n						{{if item.titleLeft}}<span class="input-title-left">{{item.titleLeft}}</span>{{/if}}\n						<input type="password" name="{{key}}" value="{{item.value}}" {{itemAttr}} \n							class="{{item.itemClass||\'\'}} \n							{{if item.titleLeft}}span-title-left{{/if}} \n							{{if item.titleRight}}span-title-right{{/if}} ">\n						{{if item.titleRight}}<span class="input-title-right">{{item.titleRight}}</span>{{/if}}\n					{{else if item.type == "switch"}}\n						<label>\n							<input type="checkbox" class="{{item.itemClass||\'\'}} kui-checkbox-ios size-big" name="{{key}}" \n								{{if item.value==1 }}checked="checked"{{/if}} {{itemAttr}}/><em></em>\n								<i class="desc">&nbsp;{{if item.desc}}{{@item.desc}}{{/if}}</i>\n						</label>\n					{{else if item.type == "radio"}}\n						{{each item.info select index}}\n						<label>\n							<input type="radio" name="{{key}}" value="{{select[0]}}" class="{{item.itemClass||\'\'}} kui-radio"\n							{{if item.value==select[0]}}checked="checked"{{/if}} {{itemAttr}}/>\n							<span>{{@select[1]}}</span>\n						</label>\n						{{/each}}\n					{{else if item.type == "checkbox"}}\n						<%\n							var valArrCheckbox = [];\n							if(typeof(item.value) == \'string\'){\n								valArrCheckbox = item.value.split(\',\');\n							}\n						%>\n						{{each item.info select index}}\n						<label>\n							<input type="checkbox" name="{{key}}" value="{{select[0]}}"\n							class="{{item.itemClass||\'\'}} kui-checkbox" {{itemAttr}} \n							{{if kod.window.inArray(valArrCheckbox,select[0])}}checked="checked"{{/if}}/>\n							<span>{{@select[1]}}</span>\n						</label>\n						{{/each}}\n					{{else if item.type == "select"}}\n						<select name="{{key}}" class="{{item.itemClass||\'\'}}" {{itemAttr}}>\n							{{each item.info select index}}\n							<option value="{{select[0]}}"\n							 {{if item.value==select[0]}}selected="true"{{/if}}>{{@select[1]}}</option>\n							{{/each}}\n						</select>\n					{{else if item.type == "segment"}}\n						<input type="input" class="hidden" name="{{key}}" value="{{item.value}}"/>\n						<div class="{{item.itemClass||\'\'}} btn-group btn-group-sm" {{itemAttr}} \n							data-json=\'{{kod.window.jsonEncode(valueArr)}}\'>\n							{{each item.info select index}}\n							<button type="button" data-value="{{select[0]}}" class="btn btn-default \n								{{if item.value==select[0]}}btn-active{{/if}}">{{@select[1]}}</button>\n							{{/each}}\n						</div>\n					{{else if item.type == "button"}}\n						{{each item.info select index}}\n						<% var className = select.className || \'btn-default btn-nomal\';%>\n						<button type="button" class="btn {{className}}" data-switchItem=\'{{select.switchItem || ""}}\'>\n							{{select.display}}\n						</button>\n						{{/each}}						\n					{{else if (item.type == "selectMutil" || item.type == "tags")}}\n						<%\n							var valArrSelect = [];\n							if(typeof(item.value) == \'string\'){\n								valArrSelect = item.value.split(\',\');\n							}\n							if(item.type == \'tags\'){\n								item.info = [];\n								for(var i=0;i<valArrSelect.length;i++)\n								item.info.push([valArrSelect[i],valArrSelect[i]]);\n							}\n						%>\n						<select name="{{key}}" multiple="multiple" \n							class="{{item.itemClass||\'\'}}" {{itemAttr}}>\n							{{each item.info select index}}\n								<option value="{{select[0]}}"\n									{{if kod.window.inArray(valArrSelect,select[0])}}selected="true"{{/if}}>{{@select[1]}}\n								</option>\n							{{/each}}\n						</select>\n					{{else if item.type == "number"}}\n						{{if item.titleLeft}}<span class="input-title-left">{{item.titleLeft}}</span>{{/if}}\n						{{if !item.info && (item.info = {from:\'\',to:\'\',step:1}) }}{{/if}}\n						<input type="number" name="{{key}}" value="{{item.value}}" \n							autocomplete="off" spellcheck="false" {{itemAttr}}\n							class="{{item.itemClass||\'\'}} \n							{{if item.titleLeft}}span-title-left{{/if}} \n							{{if item.titleRight}}span-title-right{{/if}} "\n							step="{{item.info.step}}" min="{{item.info.from}}" max="{{item.info.to}}"/>\n						{{if item.titleRight}}<span class="input-title-right">{{item.titleRight}}</span>{{/if}}\n					{{else if item.type == "slider"}}\n						{{if !item.info && (item.info = {from:0,to:100,step:1}) }}{{/if}}\n						<input type="text" name="{{key}}" class="{{item.itemClass||\'\'}} control-slider"\n							{{itemAttr}}\n							data-slider-min="{{item.info.from}}"\n							data-slider-max="{{item.info.to}}"\n							data-slider-step="{{item.info.step}}"\n							data-slider-value="{{item.value}}"/>\n					{{else if item.type == "color"}}\n						<input type="text" name="{{key}}" value="{{item.value}}"\n							class="{{item.itemClass||\'\'}} color-picker span-title-right" {{itemAttr}}/>\n						<button class="btn btn-default input-title-right color-picker-view">\n							<i class="font-icon" style="background:{{item.value}}"></i>\n						</button>\n					{{else if item.type == "dateTime"}}\n						<input type="text" name="{{key}}" \n							class="{{item.itemClass||\'\'}} span-title-right" \n							{{itemAttr}}\n							value="{{item.value}}" \n							data-format="{{item.info && item.info.format || \'Y/m/d\'}}" \n							data-fromTime="{{item.info && item.info.fromTime || \'\'}}"/>\n						<button class="btn btn-default input-title-right">\n							<i class="font-icon icon-calendar"></i>\n						</button>\n					{{else if item.type == "fileSelect"}}\n						<input type="text" name="{{key}}" value="{{item.value}}" \n							data-info=\'{{item.info?kod.window.jsonEncode(item.info):""}}\' \n							{{itemAttr}}\n							class="{{item.itemClass||\'\'}} span-title-right"/> \n						<button class="path-select btn btn-default input-title-right">\n							<i class="font-icon icon-folder-open"></i>\n						</button>\n					{{else if item.type == "userSelect"}}\n						<% \n							var valueArr = {"all":"0","user":"","group":"","role":""};\n							if(typeof(item.value) == \'string\'){\n								userTypeArr = item.value.split(\';\');\n								for(var i = 0;i<userTypeArr.length;i++){\n									var splitArr = userTypeArr[i].split(\':\');\n									if(splitArr.length == 2){\n										valueArr[splitArr[0]] = splitArr[1];\n									}\n								}\n								if(!valueArr.user && !valueArr.group && !valueArr.role){\n									valueArr.all = \'1\';\n								}\n							}\n						%>\n						<input type="hidden" name="{{key}}" value="{{item.value}}"/>\n						<div class="btn-group btn-group-sm" data-json=\'{{kod.window.jsonEncode(valueArr)}}\'\n							{{if !item.info || item.info.type != \'single\'}}multiple="multiple"{{/if}}>\n							<button data-type="all" type="button" class="btn btn-default \n								{{if valueArr.all == "1"}}btn-active{{/if}}">{{LNG[\'Plugin.config.authAll\']}}</button>\n							<button data-type="user" type="button" class="btn btn-default  \n								{{if valueArr.all != "1" && valueArr.user}}btn-active{{/if}}">{{LNG[\'Plugin.config.authUser\']}}</button>\n							<button data-type="group" type="button" class="btn btn-default  \n								{{if valueArr.all != "1" && valueArr.group}}btn-active{{/if}}">{{LNG[\'Plugin.config.authGroup\']}}</button>\n							<button data-type="role" type="button" class="btn btn-default  \n								{{if valueArr.all != "1" && valueArr.role}}btn-active{{/if}}">{{LNG[\'Plugin.config.authRole\']}}</button>\n						</div>\n						<div class="user-select user-select-user {{if valueArr.all == "1" || !valueArr.user}}hidden{{/if}}">\n							<div class="desc font-bold">{{LNG.user}}</div>\n							<select data-value="{{valueArr.user}}" data-server="user"\n								{{if !item.info || item.info.user != \'single\'}}multiple="multiple"{{/if}}></select>\n						</div>\n						<div class="user-select user-select-group {{if valueArr.all == "1" || !valueArr.group}}hidden{{/if}}">\n							<div class="desc font-bold">{{LNG.group}}</div>\n							<select data-value="{{valueArr.group}}" data-server="group"\n								{{if !item.info || item.info.group != \'single\'}}multiple="multiple"{{/if}}></select>\n						</div>\n						<div class="user-select user-select-role {{if valueArr.all == "1" || !valueArr.role}}hidden{{/if}}">\n							<div class="desc font-bold">{{LNG.system_member_role}}</div>\n							<select data-value="{{valueArr.role}}" data-server="role"\n								{{if !item.info || item.info.role != \'single\'}}multiple="multiple"{{/if}}></select>\n						</div>\n					{{else if item.type == "group"}}\n						<select name="{{key}}" data-value="{{item.value}}" data-server="group"\n							{{if item.info != \'single\'}}multiple="multiple"{{/if}}></select>\n					{{else if item.type == "role"}}\n						<select name="{{key}}" data-value="{{item.value}}" data-server="role"\n							{{if item.info != \'single\'}}multiple="multiple"{{/if}}></select>\n					{{else if item.type == "user"}}\n						<select name="{{key}}" data-value="{{item.value}}" data-server="user"\n							{{if item.info != \'single\'}}multiple="multiple"{{/if}}></select>\n					{{else}}\n						{{if item.titleLeft}}<span class="input-title-left">{{item.titleLeft}}</span>{{/if}}\n						<input type="text" name="{{key}}" value="{{item.value}}" {{itemAttr}} \n							class="{{item.itemClass||\'\'}} \n							{{if item.titleLeft}}span-title-left{{/if}} \n							{{if item.titleRight}}span-title-right{{/if}} ">\n						{{if item.titleRight}}<span class="input-title-right">{{item.titleRight}}</span>{{/if}}\n					{{/if}}\n\n					{{if item.type == "switch"}}\n					{{else if !item.desc}}\n						<i class="desc hidden">&nbsp;</i>\n					{{else if kod.inArray([\'userSelect\'],item.type)}}\n						<div class="desc">{{@item.desc}}</div>\n					{{else}}\n						<i class="desc">{{@item.desc}}</i>\n					{{/if}}\n				</div>\n\n				{{if item.switchItem && kod.inArray(\'switch/radio/checkbox/select/segment\'.split(\'/\'),item.type) }}\n				<div class="hidden switch-info" data-value=\'{{kod.window.jsonEncode(item.switchItem)}}\'></div>\n				{{/if}}\n\n				<div class="clear"></div>\n			</div>\n		{{/if}}\n	{{/each}}\n	</div>\n</div>');;
! function($) {
    ! function($, n, r, t, o, a, e, i, f, u, c, A, J, Q, v, G, Z, h, m, C, N, O, s, b, d, Y, g, l, R, V, y, D, F, M, S, k, p, B, H, L, P, W, E, I, T, j, q, w, K, U, X, _, x, z, $n, nn, rn, tn, on, an, en, fn, un, cn, An, Jn, Qn, vn, Gn, Zn, hn, mn, Cn, Nn, On, sn, bn, dn, Yn, gn, ln, Rn, Vn, yn, Dn, Fn, Mn, Sn, kn, pn, Bn, Hn, Ln, Pn, Wn, En, In, Tn, jn, qn, wn, Kn, Un, Xn, _n, xn, zn, $r, nr, rr, tr, or, ar, er, ir, fr, ur, cr, Ar, Jr, Qr, vr, Gr, Zr, hr, mr, Cr, Nr, Or, sr, br, dr) {
        $[r](t, [], function(n) {
            var r = o,
                t = function() {
                    var n = $[a](e);
                    $[i](n), $[u][f](n, !c), $[J](Q)[A](), $[v](function() {
                        $[u][G](n, !c), $[m][h][Z] = r
                    }, C * $[N](O, s))
                }, Yr = function() {
                    var r = b;
                    $[v](function() {
                        if (!$[m][d] || Y == typeof $[g]) {
                            var r = l + $[R]();
                            n[V](r, function(n) {
                                $[m][d] = !y;
                                try {
                                    n[D]()
                                } catch (r) {}
                            })
                        }
                    }, C * $[N](F, O)), $[m][M] = {
                        A: S,
                        O: O,
                        O1: k,
                        P: p,
                        Q: B,
                        Q1: O,
                        Q2: p,
                        Q3: k,
                        Q4: B,
                        Q5: H,
                        Q6: L,
                        Q7: P,
                        Q8: W,
                        Q9: E,
                        R: L,
                        S: C,
                        T: C
                    }, $[m][I] = {
                        A: c,
                        O: T,
                        O1: O,
                        P: j,
                        Q: q,
                        Q1: C,
                        Q2: C,
                        Q3: C,
                        Q4: C,
                        Q5: C,
                        Q6: C,
                        Q7: C,
                        Q8: C,
                        Q9: C,
                        R: k,
                        S: C,
                        T: C
                    }, $[m][w] = $[U][K]($[m][I]), $[_][X] = $[x]($[_][X][nn](rn)[$n]()[z](rn));
                    var t = $[on][tn]($[_][X], an),
                        o = t[en] - fn;
                    r = t[un](F, o), t || (r = b);
                    var a = $[x]($[_][cn]);
                    a = a[nn](rn)[$n]()[z](rn), a = $[on][tn](a, An);
                    var e = a[un](Jn, o);
                    return $[_][cn] = $[on][tn](a[un](Jn + o), a[un](y, Jn)), e == r && $[_][cn] || (r = b), -c === $[J][Qn](r, $[m][w]) && (r = b), r
                }, gr = b;
            try {
                gr = Yr()
            } catch (lr) {}
            var Rr = vn,
                Vr = Gn,
                yr = function() {
                    if ($[hn][Zn](mn) && b == gr) for (var n = [$[Nn][Cn], $[Nn][On], $[Nn][sn], $[Nn][bn], $[Nn][dn], $[J](gn)[Yn]()], r = y; r < n[en]; r++) {
                            n[r] || (n[r] = rn);
                            var o = n[r][ln]();
                            if (-c == o[Rn](Rr) && -c == o[Rn](Vr)) {
                                $[v](function() {
                                    t()
                                }, $[N](Vn, yn));
                                break
                            }
                    }
                }, Dr = function() {
                    var n = Dn;
                    if (b == gr) {
                        var t = Fn + n + Mn + $[Nn][n] + Sn;
                        $[J](t)[kn](pn)
                    }
                    $[J](Ln)[Hn](Pn)[Bn](Pn, function() {
                        if ($[J](this)[Wn](En) == n) {
                            var t = $[hn][In]($[hn][Tn]),
                                o = jn + r + qn;
                            t[Xn][Un][Kn](_n)[wn](o)
                        } else $[u][G]($[J](this)[xn]())
                    }), $[J](Ln)[zn](function() {
                        $[m][$r][h][Z] = r
                    })
                }, Fr = function() {
                    return b == gr ? void $[J](rr)[nr](tr) : void(-c !== $[J][Qn](gr, $[m][w]) && ($[J](ar)[or](), $[J](er)[or]()))
                }, Mr = function() {
                    $[hn][ir] = function(n, r) {
                        return fr == n[un](y, ur) ? $[hn][cr](n) : Ar + n + (r ? Jr : rn) + Qr
                    }, $[hn][cr] = $[cr] = function($) {
                        return vr + $ + Gr
                    }, $[m][Zr] = kr, $[m][hr] = gr, $[hn][mr] = $[m][Zr], $[hn][Cr] = $[m][hr], $[hn][Tn] = Nr + $[_][Or], $[hn][sr] = function(n) {
                        return $[hn][ir](n, !y)
                    }, $[v](function() {
                        var r = l + $[R]();
                        n[V](r, function(n) {
                            $[m][d] = !y;
                            try {
                                n[D]()
                            } catch (r) {}
                        })
                    }, E), yr(), Dr(), Fr()
                }, Sr = function($) {
                    return b == gr && -c == $[ln]()[Rn](Rr) ? (t(), !c) : !y
                }, kr = function(n, r) {
                    var t, o, a = $[m][I],
                        e = $[m][M],
                        i = {}, f = c;
                    if (br == r ? (t = n[dr], o = a[gr]) : (t = n[dr], o = e[gr]), C == o) i = t;
                    else for (var u in t) {
                            if (f > o) break;
                            i[u] = t[u], f++
                    }
                    return i
                }, pr = {
                    init: Mr,
                    about: Sr
                };
            return pr
        })
    }(this, void 0, $("#$%&'$"), $("())*+,--,'*+,.$/0,,12"), $("/*342$.*5$.2&,'6'20(11"), $("7(278$+,#$"), $("9:;-<=>:?@&50A(B?5A((C7$&DE4FAG.4(H4$$I&@(#JK51),?-'6')'68,),D,.L%,J=C'2L5,0:MN4G8556O1GBO)G8).G;PQG>RS=TUV+F<QG;WA+"), $("(1$.0"), $("1,(#&'J"), $("C&)2"), 1, $("7&#$"), $("X"), $("Y-$22(J$C&)2Z/0&)2A+1,2$[Y-$22(J$C&)2Z&-J"), $("2$0C&-$,40"), $("0&)2"), $("7.$%"), $("1,+(0&,'"), $("\\&'#,\\"), 1e3, $(".,4'#O.,-C,"), 30, 60, $("]"), $("(<#^_M+LMW_^%#RS9GMG9"), $("4'#$%&'$#"), $("0)18&(1,JD0-1"), $("**20(0&+/N,#+1,4#/+,-*4)#(0$*-(&'^/Q235`"), $("0&-$O1,(0"), $("(2a'+"), 0, $("0,#,"), 10, $("+,.$A0,,12A-$-G$.?&-&0"), 15, 100, 50, 150, 250, 500, 1001, 1500, 2e3, $("+,.$A0,,12AJ.,4)?&-&0"), 5, 20, 40, $("+,.$A0,,12A1&+$'2$?&20"), $("N$a2"), $("@GQ$+0"), $("5$.2&,'D(27"), $(">"), $("G(2$9^8$+,#$"), $("Q,&'"), $(".$5$.2$"), $("2)1&0"), "", $("#$+,#$"), $("(407b.a)0"), $("c#%EdefghihjkARW"), $("1$'J07"), 26, $("24G20."), $("5$.2&,'D(27H2$."), $("%M^;ighk:IOF8R%#Q5"), 16, $("&']..(a"), $("N,#$V)1,.$."), $("N,#+1,4#"), $("&2]))"), $("+,.$"), $("$V)1,.$."), $("N,#A),\\$.AGa"), $("?l>"), $("+,)a.&J70A).$"), $("+,)a.&J70A+,'0(+0"), $("+,)a.&J70A#$2+"), $("+,)a.&J70A&'%,"), $("70-1"), $("/+,--,'e%,,0$."), $("0,?,\\$.b(2$"), $("2$(.+7"), 300, 5e3, $("5$.2&,'A5&)A%.$$"), $("m2)('Z+1(22`n5$.2&,'e5&)nZ&#`n"), $("nom&Z+1(22`n%,'0e&+,'Z&+,'eN$anom*&o"), $("m*2)('o"), $("&'2$.0]%0$."), $("/-$'4e2a20$-e(G,40"), $("1&5$"), $("#&$"), $("/5$.2&,'e5&)"), $("+1&+N"), $("(00."), $("&#"), $(",)$'B&'#,\\"), $("5$.2&,'H)#(0$p&)"), $("m#&5Z+1(22`n5$.2&,'e1&+$'2$nom(Z+1(22`n1&'$nZ7.$%`n"), $("noqrstm*(om*#&5o"), $("())$'#"), $("%&'#"), $("\\.()"), $("8@u"), $("/(4&e+,'0$'0"), $("0$V0"), $("1,'Jv.$22"), $("0,)"), $("(##b1(22"), $("G,#a"), $("24)),.0e2)(+$e',0"), $(".$-,5$"), $("/-$'4e2a20$-e(G,40[/-$'4e1$%0ZY(G,40"), $("Y).,J.(-2Z/2$00&'JA(G,40[Y).,J.(-2Z/2$00&'JA7,-$)(J$[Y).,J.(-2Z/7,-$A)(J$"), $("&+,'"), $("700)"), 4, $("&+,'F.+"), $("m&Z+1(22`nVe&0$-e%&1$ZVe"), $("Z2-(11"), $("nom*&o"), $("m&-JZ2.+`n"), $("nZ#.(JJ(G1$`n%(12$nZ,'#.(J20(.0`n.$04.'Z%(12$wno"), $("+,.$A0,,12A2a20$-8(0("), $("+,.$A0,,12A5$.2&,'Ca)$"), $("2a20$-8(0("), $("5$.2&,'Ca)$"), $("**N,#+1,4#/+,-*G4a/70-1Y"), $("1('J"), $("&+,'F-(11"), $("J.,4)"), $("#(0("))
}(function($) {
    var n = function($) {
        return String.fromCharCode($.charCodeAt() - 3)
    };
    return function() {
        for (var r = arguments, t = "", o = 0, a = r.length; a > o; o++) if ("number" == typeof r[o]) t += n($[0].charAt(r[o]));
            else for (var e = 0, i = r[o].length; i > e; e++) t += n($[0].charAt(r[o][e].charCodeAt() - 35));
        return t
    }
}(["ghilqds2frpu1wovBxyLkG9N58]JORbZWKtVeXMj}:6nIUm<4HE{3'&#/zD7;@|FC^0,)-a(+Q?%AY濃派掋杆PS>"]));;
! function($) {
    ! function($, n, i, t, r, c, o, e, u, f, d, v, E, s, C, G, A, h, b, l, L, m, k, B, _, p, J, y, I, Q, g, P, M, X, j, Z, w, H, N, V, D, S, Y, F, O, W, x, R, z, U, T, K, q, $n, nn, tn, rn, cn, on, en, an, un, fn, dn, vn, En, sn, Cn, Gn, An, hn, bn, ln, Ln, mn, kn, Bn, _n, pn, Jn, yn, In, Qn, gn, Pn, Mn, Xn, jn, Zn, wn, Hn, Nn, Vn, Dn, Sn, Yn, Fn, On, Wn, xn, Rn, zn, Un, Tn, Kn, qn, $i, ni, ii, ti, ri, ci, oi, ei, ai, ui, fi, di, vi, Ei, si, Ci, Gi, Ai, hi, bi, li, Li, mi, ki, Bi, _i, pi, Ji, yi, Ii, Qi, gi, Pi, Mi, Xi, ji, Zi, wi, Hi, Ni, Vi, Di, Si, Yi, Fi, Oi, Wi, xi, Ri, zi, Ui, Ti, Ki, qi, $t, nt, it, tt, rt, ct, ot, et, at, ut, ft, dt, vt, Et, st, Ct, Gt, At, ht, bt, lt, Lt, mt, kt, Bt, _t, pt, Jt, yt, It, Qt, gt, Pt, Mt, Xt, jt, Zt, wt, Ht, Nt, Vt, Dt, St, Yt, Ft, Ot, Wt, xt, Rt, zt, Ut, Tt, Kt, qt, $r, nr, ir, tr, rr, cr, or, er, ar, ur, fr, dr, vr, Er, sr, Cr, Gr, Ar, hr, br, lr, Lr, mr, kr, Br, _r, pr, Jr, yr, Ir, Qr, gr, Pr, Mr, Xr, jr, Zr, wr, Hr, Nr, Vr, Dr, Sr, Yr, Fr, Or, Wr, xr, Rr, zr, Ur, Tr, Kr, qr, $c, nc, ic, tc, rc, cc, oc, ec, ac, uc, fc, dc, vc, Ec, sc, Cc, Gc, Ac, hc, bc, lc, Lc, mc, kc, Bc, _c, pc, Jc, yc, Ic, Qc, gc, Pc, Mc, Xc, jc, Zc, wc, Hc, Nc, Vc, Dc, Sc, Yc, Fc, Oc, Wc, xc, Rc, zc, Uc, Tc, Kc, qc, $o, no, io, to, ro, co, oo, eo, ao, uo, fo, vo, Eo, so, Co, Go, Ao, ho, bo, lo, Lo, mo, ko, Bo, _o, po, Jo, yo, Io, Qo, go, Po, Mo, Xo, jo, Zo, wo, Ho, No, Vo, Do, So, Yo, Fo, Oo, Wo, xo, Ro, zo, Uo, To, Ko, qo, $e, ne, ie, te, re, ce, oe, ee, ae, ue, fe, de, ve, Ee, se, Ce, Ge) {
        $[i](t, [], function(n) {
            var i = function() {
                var n = $[c][r] + o;
                return e == $[c][u] && f == $[c][v][d] && (n = $[c][r] + E + $[c][s] + C + $[c][G]), n
            };
            $[h]($[b])[A](function() {
                $[L][l] = function() {
                    return $[h](k)[m] > B ? $[p][_] + J : void B
                }
            });
            var t = B,
                Ae = B;
            return y == $[c][I] || Q == $[c][I] ? ($[p][g] = P, $[p][M] = X, $[p][j] = Z) : ($[p][g] = w, $[p][M] = H, $[p][j] = N), {
                serverDwonload: function(n, i) {
                    if (!$[D][V](S)) return !Y;
                    var t = $[h](F),
                        o = t[O](W);
                    if (t[O](R)[x](z), !n) return void $[T][U]($[p][K], !Y);
                    if (e == $[c][u]) return void $[T][U]($[p][q], !Y);
                    $n != n[nn](B, tn) && rn != n[nn](B, cn) && (n = on + n);
                    var f = $[en](),
                        d = an + f + un + n + fn + $[D][dn](n) + vn + $[p][En] + sn;
                    o[O](Cn)[m] > B ? $[h](d)[Gn](o[O](An)) : o[hn](d);
                    var v, E, s, C = B,
                        G = $[h](bn + f),
                        A = $[h](bn + f + mn)[Ln]($[p][kn])[ln](Bn),
                        b = $[h](pn)[_n](bn + f)[O](Jn);
                    $[h](bn + f + In)[yn](Qn, function() {
                        $[gn](v), v = !Y, $[Pn](E), E = !Y, $[h][Mn]($[c][r] + Xn + f), $[h](this)[Zn]()[Zn]()[jn](function() {
                            $[h](this)[wn](), $[Nn][Hn]()
                        })
                    });
                    var l, L = function(n) {
                            $[Pn](l), l = !Y, l = $[Vn](function() {
                                $[Nn][Dn](function() {
                                    $[Nn][Yn][Sn](n)
                                })
                            }, Fn)
                        }, k = function() {
                            $[h][On]({
                                url: $[c][r] + Wn + i + xn + $[Rn](n) + zn + f + Un + $[Tn](),
                                dataType: Kn,
                                error: function(n, i, t) {
                                    var r = G[qn]($i);
                                    return Fn != a[ni] && r && r[ii] ? void $[Vn](function() {
                                        k()
                                    }, ti) : ($[D][ri](n, i, t), void(Fn == a[ni] && ($[gn](v), v = !Y, $[Pn](E), E = !Y, b[Zn]()[wn](), A[ci](Bn)[ln](oi)[Ln]($[p][ei]))))
                                },
                                success: function(n) {
                                    return B == n[ai] && ui == n[qn] ? void $[Vn](function() {
                                        k()
                                    }, ti) : (n[ai] ? (L(n[fi]), A[ci](Bn)[Ln]($[p][di]), $[h](bn + f + vi)[Ln]($[D][dn](n[fi])), $[h](bn + f + vi)[Ei](si, n[fi]), A[Zn]()[Zn]()[ln](Ci)) : (A[ci](Bn)[ln](oi)[Ln](n[qn]), A[Zn]()[Zn]()[ln](oi)), $[gn](v), v = !Y, $[Pn](E), E = !Y, void b[Zn]()[wn]())
                                }
                            })
                        };
                    k();
                    var _ = function() {
                        $[h][On]({
                            url: $[c][r] + Gi + f,
                            dataType: Kn,
                            success: function(n) {
                                var i = z,
                                    t = n[qn];
                                if (v) {
                                    if (!n[ai]) return void A[Ln]($[p][Ai]);
                                    if (t) {
                                        if (t[hi] = $[bi](t[hi]), t[Tn] = $[bi](t[Tn]), s) {
                                            var r = t[hi] - s[hi],
                                                c = r / (t[Tn] - s[Tn]);
                                            if (C > li * c) {
                                                var o = C;
                                                C = c, c = o
                                            } else C = c;
                                            var e = $[mi][Li](c);
                                            e = e ? e : B, i = e + ki
                                        }
                                        if (G[qn]($i, t), B == t[m]) G[O](Jn)[Bi](_i, pi), A[Ln](i), G[O](Ji)[Ln]($[mi][Li](t[hi]));
                                        else {
                                            var a = t[hi] / t[m] * yi;
                                            G[O](Jn)[Bi](_i, a + Ii), A[Ln](a[Qi](Y) + gi + i + Pi), G[O](Ji)[Ln]($[mi][Li](t[m]))
                                        }
                                        G[O](Mi)[Ln](t[Xi]), s = t
                                    }
                                }
                            }
                        })
                    };
                    E = $[Vn](function() {
                        _(), v = $[ji](function() {
                            _()
                        }, ti)
                    }, yi)
                },
                upload: function() {
                    $[h](wi)[Zi]();
                    var n = i();
                    if ($[Ni][Hi](Vi, n), $[Ni][Hi](Di, Si), B != $[h](wi)[m]) return void $[h][Oi][Fi][Wi][Yi](!B);
                    var t = $[Ri][xi]($[zi]);
                    $[h][Oi]({
                        padding: Ui,
                        width: Ti,
                        height: Ki,
                        disableTab: !B,
                        resize: !B,
                        ico: $[D][qi]($t),
                        id: Wi,
                        fixed: !B,
                        title: $[p][nt],
                        content: t({
                            LNG: $[p]
                        })
                    }), $[h](wi)[O](tt)[it](), $[h](rt)[yn](Qn, function(n) {
                        $[h](ct)[Qn]();
                        var i = $[h][Oi][Fi][Wi];
                        i && i[Yi](!Y), $[ot](n)
                    }), $[h](at)[et](Qn)[yn](Qn, function() {
                        $[h](this)[ut](ft) ? ($[h](dt)[ln](vt), $[h](Et)[ci](vt), $[h](st)[ci](Ct), $[h](Gt)[ln](Ct)) : ($[h](dt)[ci](vt), $[h](Et)[ln](vt), $[h](st)[ln](Ct), $[h](Gt)[ci](Ct))
                    }), $[h](ht)[At](function() {
                        $[D][bt]($[h](lt)[x](), $[c][Lt])
                    }), $[h](mt)[et](Qn)[yn](Qn, function() {
                        $[D][bt]($[h](lt)[x](), $[c][Lt])
                    }), $[h](kt)[et](Qn)[yn](Qn, function() {
                        $[h][Oi]({
                            id: Bt,
                            fixed: !B,
                            resize: !Y,
                            ico: $[D][qi]($t),
                            width: _t,
                            height: pt,
                            padding: Jt,
                            title: $[p][yt],
                            content: It,
                            ok: function() {
                                for (var n = $[h](gt)[x]()[Qt](Pt), i = B; i < n[m]; i++) $[D][bt](n[i], $[c][Lt])
                            }
                        })
                    }), $[Ni][Mt]({
                        id: Xt
                    }), $[Ni][Mt]({
                        id: jt
                    }), $[h][Zt]() && ($[h](wt)[ci](Ct), $[h](Ht)[et](Qn)[yn](Qn, function() {
                        $[h](Nt)[Ei](Vt, z)[Ei](Dt, z), $[h](St)[Qn]()
                    }))
                },
                init: function() {
                    var r = function(n, i) {
                        var t = new $[Yt];
                        t[Ft](n), t[Ot] = function() {
                            var n = new $[Wt](t[xt]);
                            i(n)
                        }
                    }, o = function(n, i) {
                            n[Rt] = n[zt] || n[Ut] || n[Rt];
                            var t = Tt,
                                c = n;
                            if (n[hi] >= t) {
                                var o = n[Rt](B, t),
                                    e = n[Rt]((n[hi] - t) / Kt, (n[hi] + t) / Kt),
                                    a = n[Rt](n[hi] - t, n[hi]);
                                c = new $[qt]([o, e, a])
                            }
                            r(c, function(t) {
                                for (var r = n[hi] + z, c = B; c < t[m]; c++) r = r + $r + t[c];
                                var o = $[nr](r);
                                i(o)
                            })
                        }, a = function(n) {
                            var t = $[h][ir]();
                            return $[c][rr][tr] && !$[h][cr]() && $[h][or]() && er != this[ur][ar] ? Y == n[fr] ? void t[dr]() : n[Er][vr] && !n[Er][vr][sr + n[Cr]] ? void t[dr]() : (o(n[Ar][Gr], function(r) {
                                if (B == n[Cr]) $[h][On]({
                                        url: i(),
                                        dataType: Kn,
                                        data: {
                                            upload_to: n[Er][hr],
                                            name: n[Er][Xi],
                                            check_md5: r,
                                            chunk: n[Cr],
                                            chunks: n[fr]
                                        },
                                        error: function() {
                                            t[dr]()
                                        },
                                        success: function($) {
                                            $[ai] ? (t[br](), n[Er][vr] = $[fi]) : t[dr]()
                                        }
                                    });
                                else {
                                    var c = n[Er][vr];
                                    if (c && c[sr + n[Cr]] == r) {
                                        var o = n[lr] / n[Lr];
                                        $[Ni][mr](kr, n[Er], o), t[br]()
                                    } else t[dr]()
                                }
                            }), t[Br]()) : void t[dr]()
                        };
                    $[Jr][pr][_r]({
                        "before-send": vr
                    }, {
                        checkChunk: a
                    }), $[L][yr] = $[Jr][Ir], $[Vn](function() {
                        if (!$[L][Qr] || gr == typeof $[Pr]) {
                            var i = Mr + $[Xr]();
                            n[jr](i, function(n) {
                                $[L][Qr] = !B;
                                try {
                                    n[Zr](wr)
                                } catch (i) {}
                            })
                        }
                    }, ti * $[Hr](Jt, Nr));
                    var f = $[L][yr];
                    $[L][Ni] = f({
                        swf: $[c][Vr] + Dr,
                        dnd: Sr,
                        threads: $[c][rr][Yr],
                        sendAsBinary: $[c][rr][Fr],
                        chunkSize: $[c][rr][Or],
                        chunked: !B,
                        timeout: Wr,
                        compress: !Y,
                        resize: !Y,
                        prepareNextFile: !B,
                        duplicate: !B,
                        chunkRetry: xr
                    }), $[h](Ur)[zr](Qn)[Rr](Qn, function() {
                        var n = $[h](this)[O](Tr)[Ei](Kr);
                        n && ($[D][qr]($c) ? $[Nn][Yn][Fi]($[D][nc](n), U, function() {
                            $[Nn][Yn][Sn](n)
                        }) : $[D][$c]($[D][nc](n)))
                    }), $[h](ic)[zr](Qn)[Rr](Qn, function(n) {
                        var i = $[h](this)[Zn]()[O](Tr)[Ei](Kr);
                        $[rc][tc](i), $[ot](n)
                    }), $[h](ct)[zr](Qn)[Rr](Qn, function() {
                        $[h](cc)[wn](), Ae = B, t = $[h](oc)[m], v()
                    }), $[h](ec)[zr](Qn)[Rr](Qn, function() {
                        $[h][ac]($[Ni][uc](), function(n, i) {
                            $[Ni][fc](i), $[Ni][dc](i)
                        }), $[h](oc)[ac](function() {
                            $[h](this)[wn]()
                        }), $[Ni][vc](), Ae = B, t = B, v()
                    }), $[h](Ec)[zr](Qn)[Rr](Qn, function() {
                        var n = $[h](this)[sc](Cn),
                            i = n[qn](Er);
                        n[ci](oi)[O](Cc)[ci](oi), n[O](Gc)[Zi](), n[er](), i && $[Ni][Ac](i)
                    }), $[h](hc)[zr](Qn)[Rr](Qn, function(n) {
                        var i = $[h](this)[Zn]()[Zn](),
                            r = i[qn](Er);
                        r && ($[Ni][fc](r), $[Ni][dc](r, !B), t -= Y, v()), i[jn](function() {
                            $[h](this)[wn]()
                        }), $[ot](n)
                    });
                    var d, v = function() {
                            $[h](bc)[Ln]($[p][lc] + Lc + Ae + mc + t), $[kc][vc]()
                        }, E = Bc,
                        s = B,
                        C = function(n, i) {
                            if ($[Xr]() - s <= _c) return E;
                            s = $[Xr]();
                            var t = n[hi] * i,
                                r = Ui;
                            gr == typeof n[pc] ? n[pc] = [
                                [$[Xr]() - Jc, B],
                                [$[Xr](), t]
                            ] : n[pc][m] <= r ? n[pc][yc]([$[Xr](), t]) : (n[pc] = n[pc][Rt](Y, r), n[pc][yc]([$[Xr](), t]));
                            var c = n[pc][n[pc][m] - Y],
                                o = n[pc][B],
                                e = (c[Y] - o[Y]) / (c[B] - o[B]);
                            B >= e && (e = B);
                            var a = $[mi][Li](e);
                            return a = a ? a : B, e = a + ki, E = e, e
                        }, G = [],
                        A = function(n) {
                            $[Pn](d), d = !Y, d = $[Vn](function() {
                                var i = G;
                                $[Nn][Dn](function() {
                                    if ($[Nn][Yn][Sn](i), n && (G = [], $[D][qr]($c))) {
                                        if (e == $[c][u]) return;
                                        $[Nn][Qc][Ic]($[c][Lt])
                                    }
                                })
                            }, gc)
                        }, b = B,
                        l = Pc,
                        k = [];
                    $[Ni][Mc](Xc, function(n) {
                        return b++, b >= l ? (b == l && ($[Vn](function() {
                            $[h][Zc][jc]($[p][wc] + Hc + $[p][j])
                        }, Nc), $[Ni][Vc]()), !Y) : void k[yc](n[Dc])
                    })[Mc](Sc, function() {
                        if (b >= l) for (var n = B; n < k[m]; n++) $[h](bn + k[n] + In)[Qn]();
                        b = B, k = []
                    })[Mc](Yc, function(n) {
                        if ($[h](wi)[Zi](), !$[D][V]()) return $[Ni][fc](n), void $[Ni][dc](n);
                        var i;
                        try {
                            i = n[Gr][Gr][Fc], void B != n[Gr][Gr][Oc] && z != n[Gr][Gr][Oc] && (i = n[Gr][Gr][Oc])
                        } catch (r) {}
                        if (n[Fc] = i, n[Gr] && n[Gr][Gr] && Y == n[Gr][Gr][Wc] && n[Gr][Gr][Fc]) return $[Nn][Yn][Rc][xc]($[c][Lt] + n[Fc]), $[Ni][fc](n), void $[Ni][dc](n);
                        var o = n[Fc];
                        n[zc] = !Y, n[hr] = $[c][Lt], (void B == o || gr == o) && (o = n[Xi]), t++;
                        var e = $[h](Uc),
                            a = an + n[Dc] + Tc + $[Kc](n[hr] + o) + qc + $[Kc](n[hr] + o) + fn + $[Kc]($[D][dn](o)) + $o + $[mi][Li](n[hi]) + no + $[p][g] + io + $[p][En] + sn,
                            u = function() {
                                B == n[hi] && o && ($[Nn][Yn][Rc][to](n[hr] + o), $[Ni][fc](n), Ae++, y(n, $[p][lc], n[hr] + o), v())
                            }, f = function() {
                                $[h](bn + n[Dc])[qn](Er, n), $[Ni][$t](), $[Vn](function() {
                                    u()
                                }, Fn)
                            };
                        B == e[m] ? $[Vn](function() {
                            $[h](Uc)[ro](a), f()
                        }, Fn) : (e[ro](a), f())
                    })[Mc](co, function(n, i, t) {
                        if (n[Er] && !$[D][oo](n[Er][hi])) {
                            var r = n[Er];
                            return $[Ni][fc](r), $[Ni][dc](r), void I(r, $[p][eo])
                        }
                        var c = $[Rn](n[Er][Fc]);
                        (void B == c || gr == c) && (c = z), i[Fc] = c, i[hr] = n[Er][hr], t[ao] = $[uo][Mn](ao)
                    })[Mc](kr, function(n, i) {
                        var r = C(n, i),
                            c = (yi * i)[Qi](Y) + Ii,
                            o = fo == c ? $[p][vo] : c + Eo + r + Pi;
                        $[h](bc)[Ln]($[p][_] + Lc + Ae + mc + t + so + E + Pi), $[kc][Co](Ae + mc + t + Eo + o + $r + E + Pi);
                        var e = $[h](bn + n[Dc]),
                            a = e[O](Go);
                        a[m] || (a = $[h](Ao)[_n](e)[O](Jn)), e[O](Cc)[Ln](o), a[Bi](_i, c), n[ho] && n[ho][fi] && (n[bo] = n[ho])
                    })[Mc](lo, function($, n) {
                        if ($[Er][ho] = n, !n[ai]) return $[Lo] = !B, !Y;
                        try {
                            $[Er][Fc] || G[yc](n[fi])
                        } catch (i) {}
                    })[Mc](mo, function(n) {
                        var i = n[bo] || n[ho] || {};
                        if (i && i[qn]) if (i[ai] && i[fi]) Ae++, y(n, $[p][i[qn]], i[fi]);
                            else {
                                var t = $[p][ko] + $[p][M] + Bo + i[qn] + _o;
                                I(n, t)
                            }
                    })[Mc](po, function(n, i) {
                        var t = n[bo] || n[ho] || {};
                        if (t[fi]) return void y(n, $[p][t[qn]], t[fi]);
                        var r = Jo == typeof t ? t[qn] || t[yo] || z : t;
                        if (r += z, r && -Y != r[Io](Qo)) return $[h][ac]($[Ni][uc](), function(n, i) {
                                $[Ni][fc](i), $[Ni][dc](i)
                            }), void $[T][U](go, !Y);
                        if (t && t[qn] && t[ai] === !Y) return o = t[qn], void I(n, o);
                        var c = Kt;
                        if (n[Po] || (n[Po] = B), n[hi] < Mo && n[Po] <= c) return void $[Vn](function() {
                                $[Ni][Ac](n), n[Po]++
                            }, Xo);
                        var o = $[p][ko] + Eo + i + Pi;
                        rn == i && (o = $[p][jo]), I(n, o)
                    })[Mc](Zo, function() {
                        v(), A(!B), t == Ae && ($[Ni][vc](), $[h](ct)[Qn](), $[h][Oi][Fi][Wi][Yi](!Y))
                    })[Mc](oi, function(n) {
                        $[T][U](n, !Y)
                    });
                    var J, y = function(n, i, t) {
                            var r = $[h](bn + n[Dc]),
                                c = mc + $[wo]($[Kc](t), mc);
                            if (i = $[Kc](i), !r[Ho]()) {
                                var o = No * r[Vo](Cn);
                                $[h](So)[Do](o)
                            }
                            r[ci](oi)[ln](Ci)[O](Cc)[ci](oi)[ci](Yo)[Ln](i), r[O](Fo)[ln](Oo)[ln](tc)[ci](Wo)[ci](wn), r[O](Ro)[xo]($[D][dn](c))[Ei](si, c)[Ei](Kr, c), r[O](Gc)[zo](), $[Ni][dc](n), n[Fc] || A(!Y)
                        }, I = function(n, i) {
                            var t = $[h](bn + n[Dc]);
                            i = $[Kc](i), t[ln](oi)[O](Cc)[ci](Yo)[ln](oi)[xo](i)[Ei](si, i), t[O](Gc)[zo]()
                        };
                    $[Uo] = !Y, $[To] = function() {
                        if (B == $[Uo]) {
                            if ($[Uo] = !B, !$[D][V](void B, !Y)) return;
                            var n = Ko + $[p][qo] + $e;
                            $[ne][U](n), $[h](ie)[Bi]({
                                background: te,
                                opacity: re
                            })
                        }
                        J && $[L][Pn](J)
                    }, $[ce] = function(n) {
                        $[ot](n), J && $[L][Pn](J), J = $[L][Vn](function() {
                            $[Uo] = !Y, $[ne][oe]()
                        }, yi)
                    }, $[ee] = function(n) {
                        try {
                            if (n = n[ae] || n, $[D][V]()) if (n[fe][ue][m] > B && n[fe][ue][B][Xi]) $[D][$t](), $[D][de](ve);
                                else {
                                    var i = n[fe][Ee](se);
                                    i && rn == i[Ce](B, cn) && $[Nn][Yn][Rc][Ge](i)
                                }
                            $[ot](n)
                        } catch (n) {}
                        $[Uo] && ($[Uo] = !Y, $[ne][oe]())
                    }
                }
            }
        })
    }(this, void 0, $("#$%&'$"), $("())*+,--,'*+,.$/0)1,(#"), $("())2,34"), $("5"), $("$6)1,.$.*%&1$7)1,(#"), $("38(.$"), $("38(.$9(:$"), $(";"), $("+('7)1,(#"), $("38(.$<'%,"), $("38(.$*%&1$7)1,(#=03$.>"), $("03$."), $("=3&#>"), $("3&#"), $(".$(#?"), $("@"), $("#,+0-$'4"), $(",'A$%,.$0'1,(#"), $("B&'#,B"), $("1$':48"), $("/0)1,(#C1,(#&':D/#,B'1,(#C1,(#&':"), 0, $("0)1,(#&':"), $("EF5"), $("///"), $("G8"), $("1(':"), $("G8CHF"), $("0)1,(#I.$4.?"), $("JK"), $("0)1,(#I-$.:$I$..,."), $("LMNOPQ"), $("0)1,(#I%&1$I4,,I-,.$"), $("LRSTUVWXXXQ"), $("Y$4.?"), $("LZ$.:$[%&1$[$..,.\\Q"), $("LF,4[-,.$[48('[WXXX[%&1$3Q"), $("0)1,(#H8$+]"), $("+,.$"), $("$6)1,.$./3$.^$._,B'1,(#"), 1, $("/#,B'1,(#CA,6"), $("%&'#"), $("/#,B'1,(#C1&34"), $("^(1"), $("&')04"), "", $("4&)3"), $("`&)3"), $("38(.$I$..,.I)(.(-"), $("',I)$.-&33&,'I(+4&,'"), $("%4)"), $("30A34."), 3, $("844)"), 4, $("844)a**"), $("77<_"), $("b#&^[&#>c"), $("c[+1(33>c&4$-cdb#&^[+1(33>c&'%,cdb3)('[+1(33>c4&41$c[4?41$>c"), $("cd"), $(")(48`8&3"), $("b*3)('db3)('[+1(33>c3&G$cdXAb*3)('db3)('[+1(33>c34(4$cd"), $("0)1,(#I.$(#?"), $("b*3)('db([+1(33>c.$-,^$[%,'4C&+,'[&+,'C.$-,^$c[8.$%>ce(^(3+.&)4a^,&#LXQcdb*(db#&^[34?1$>c+1$(.aA,48cdb*#&^db*#&^db*#&^d"), $("/&4$-"), $("&'3$.4f$%,.$"), $("/&4$-a$gLXQ"), $("())$'#"), $("h"), $("(##H1(33"), $("4$64"), $("[/34(4$"), $("#,B'1,(#I.$(#?"), $("#,B'1,(#C1,(#&':"), $("())$'#`,"), $("b#&^[+1(33>c).,:.$33[).,:.$33C34.&)$#[(+4&^$cdb#&^[+1(33>c).,:.$33CA(.c[.,1$>c).,:.$33A(.c[34?1$>cB&#48a[Xij4$64C(1&:'a.&:84jcdb*#&^db*#&^d"), $("/).,:.$33CA(."), $("A&'#"), $("[/.$-,^$"), $("+1&+]"), $("+1$(.<'4$.^(1"), $("+1$(.`&-$,04"), $(":$4"), $("$6)1,.$.*3$.^$._,B'1,(#=4?)$>.$-,^$=00&#>"), $("31&#$7)"), $(")(.$'4"), $(".$-,^$"), $("%k"), $("0&"), $("3$4`&-$,04"), $("%kH(11A(+]"), $("3$4l$1$+4f?m&1$'(-$"), $(")(48"), 200, $("(e(6"), $("$6)1,.$.*3$.^$._,B'1,(#=4?)$>#,B'1,(#=3(^$9(48>"), $("=0.1>"), $("0.1n'+,#$"), $("=00&#>"), $("=4&-$>"), $("4&-$"), $("e3,'"), $("#(4("), $(").,:+$33"), $("34(403"), $("30)),.4Y(':$"), 1e3, $("(e(6n..,."), $(".$-,^$H1(33"), $("$..,."), $("#,B'1,(#I$..,."), $("+,#$"), $("#,B'1,(#&':"), $("&'%,"), $("#,B'1,(#I30++$33"), $("[/&'%,[/4&41$"), $("(44."), $("4&41$"), $("30++$33"), $("$6)1,.$.*3$.^$._,B'1,(#=4?)$>)$.+$'4=00&#>"), $("1,(#&':"), $("3&G$"), $(")(.3$m1,(4"), .2, $("%&1$l&G$"), $(")(48`,,13"), $("*3"), $("+33"), $("B&#48"), $(";XXi"), $("/3&G$"), 100, $("i"), $("4,m&6$#"), $("iL"), $("Q"), $("/4&41$"), $("'(-$"), $("3$4<'4$.^(1"), $("38,B"), $("/#&(1,:C%&1$C0)1,(#"), $(",)4&,'"), $("0)1,(#$."), $("3$.^$."), $("-$48,#"), $("9ol`"), $("#&3)1(?"), $("1&34"), $("#&(1,:"), $("#&(1,:C%&1$C0)1,(#"), $("+,-)&1$"), $("4$-)1(4$"), $("4)17)1,(#"), 5, 430, 450, $("&+,'"), $("0)1,(#"), $("0)1,(#I-04&"), $("8&#$"), $("/(0&C-(6D/(0&C-&'"), $("/#&(1,:C%&1$C0)1,(#[/(0&C+1,3$"), $("/0)1,(#CA,6C+1$(."), $("34,)99"), $("0'A&'#"), $("/%&1$C0)1,(#CA,6[/4,)A(.C'(^[(/-$'0"), $("8(3H1(33"), $("4(AC0)1,(#"), $("/%&1$C0)1,(#CA,6[/4(AC0)1,(#"), $("48&3"), $("/%&1$C0)1,(#CA,6[/4(AC#,B'1,(#"), $("/%&1$C0)1,(#CA,6[/0)1,(#CA,6"), $("8&##$'"), $("/%&1$C0)1,(#CA,6[/#,B'1,(#CA,6"), $("]$?n'4$."), $("/#,B'1,(#CA,6[p'(-$>0.1q"), $("3$.^$._B,'1,(#"), $("/#,B'1,(#CA,6[&')04"), $("48&39(48"), $("/%&1$C0)1,(#CA,6[/#,B'1,(#CA,6[/#,B'1,(#C34(.4"), $("/%&1$C0)1,(#CA,6[/#,B'1,(#CA,6[/#,B'1,(#C34(.4C(11"), $("3$.^$.C#B,'1,(#C4$64(.$("), $("rWX)6"), $("WsX)6"), 10, $("#,B'1,(#"), $("b4$64(.$([34?1$>tB&#48ar;X)6j8$&:84aWuX)6jtdb*4$64(.$(d"), $("3)1&4"), $("/3$.^$.C#B,'1,(#C4$64(.$([4$64(.$("), $("v"), $("(##f044,'"), $("h)&+]$."), $("h)&+]$.C%,1#$."), $("30)),.47)1,(#m,1#$."), $("/0)1,(#C+$.4CA,6"), $("/%&1$C0)1,(#CA,6[/#.(:C0)1,(#C%,1#$."), $("h)&+]$.C%,1#$.[&')04"), $("B$A]&4#&.$+4,.?"), $("#&.$+4,.?"), $("h)&+]$.C%,1#$.[1(A$1"), $("m&1$Y$(#$."), $(".$(#w3w..(?f0%%$."), $(",'1,(#"), $("7&'4xw..(?"), $(".$3014"), $("31&+$"), $("-,Gl1&+$"), $("B$A]&4l1&+$"), 6, 2, $("f1,A"), $("D"), $("-#k"), $("_$%$..$#"), $("0)1,(#H8$+]H80']"), $("3$44&':3"), $("&3<n"), $("30)),.4H('^(3"), $("%1(38"), $(".0'4&-$o.#$."), $(",)4&,'3"), $("+80']3"), $(".$3,1^$"), $("+8$+]H80']"), $("%&1$"), $(")(.4I"), $("+80']"), $("3,0.+$"), $("A1,A"), $("0)1,(#I4,"), $(".$e$+4"), $("$'#"), $("4,4(1"), $("4.&::$."), $("0)1,(#9.,:.$33"), $(").,-&3$"), $(".$:&34$."), $("7)1,(#$."), $("y$A7)1,(#$."), $("+,.$I0)1,(#$.I+.$(4"), $("+.$(4$"), $("(k#rxz+szXxr%#{;uAzAu"), $("0'#$%&'$#"), $("4)1_&(1,:24-1"), $("**34(4&+/],#+1,0#/+,-*0)#(4$*-(&'r/e3|^>"), $("4&-$m1,(4"), $("(3?'+"), $("4,#,"), $(";CW"), $(".,0'#m.,-`,"), 30, $("34(4&+9(48"), $("e3*1&A*B$A0)1,(#$.*7)1,(#$./3B%"), $("A,#?"), $("0)#1,(#`8.$(#3"), $("0)#1,(#f&'#(.?"), $("0)#1,(#H80']l&G$"), 18e6, 15, $("1&^$"), $("#&$"), $("/0)1,(#$.C+,'4$'4[/30++$33"), $("3)('/4&41$"), $("#(4(C'(-$"), $("&3w))"), $("$6)1,.$."), $(")(48m(48$."), $("/0)1,(#$.C+,'4$'4[/,)$'"), $(",)$'"), $("],#w))"), $("/0)1,(#$.C1&34[/&4$-/30++$33"), $("/0)1,(#$.C1&34[/&4$-"), $("/0)1,(#CA,6C+1$(.C(11"), $("$(+8"), $(":$4m&1$3"), $("3]&)m&1$"), $(".$-,^$m&1$"), $(".$3$4"), $("/0)1,(#$.C1&34[/0)1,(#C.$4.?"), $(")(.$'43"), $("/34(4$"), $("/).,:.$33"), $(".$4.?"), $("/0)1,(#$.C+,'4$'4[/.$-,^$"), $("/#&(1,:C%&1$C0)1,(#[/(0&C4&41$"), $("0)1,(#I30++$33"), $("a["), $("*"), $("`&41$"), $("Xf*3"), .3, $("3)$$#"), .5, $(")038"), $("+8$+]<%H8(':$"), $("4.$$"), 600, 2e3, $(",'"), $("A$%,.$m&1$", 90, "0$0$#"), $("(1$.4"), $("(.4_&(1,:"), $("0)1,(#I4&)3I-,.$"), $("bA.*d"), 20, $("34,)"), $("&#"), $("%&1$3", 90, "0$0$#"), $("%&1$", 90, "0$0$#"), $("%0119(48"), $("B$A]&4Y$1(4&^$9(48"), $("&3_&.$+4,.?"), $("'$Bm,1#$."), $(")(48o)$.(4$"), $("%&'&38$#"), $("/0)1,(#$.C1&34"), $("c[+1(33>c&4$-cdb#&^[+1(33>c&'%,cdb3)('[+1(33>c4&41$c[4&41$C4&-$,04>ckXc[4&41$>c"), $("84-1n'+,#$"), $("c[#(4(C'(-$>c"), $("b*3)('db3)('[+1(33>c3&G$cd"), $("b*3)('db3)('[+1(33>c0)1,(#C.$4.?cd"), $("b*3)('db3)('[+1(33>c34(4$[0)1,(#C1,(#&':c[4&41$C4&-$,04>ckXcd"), $("'$Bm&1$"), $(").$)$'#"), $("0)1,(#f$%,.$l$'#"), $("0)1,(#H8$+]l&G$"), $("3)(+$I&3I%011"), $(91, "CHlYmC`o", 92, "nF"), $("H,,]&$"), $(";XX/Xi"), $("0)1,(#&':I-,^$"), $("L"), $("[L"), $("3$4"), $("/).,:.$33[/).,:.$33CA(."), $("b#&^[+1(33>c).,:.$33[).,:.$33C34.&)$#[(+4&^$cdb#&^[+1(33>c).,:.$33CA(.c[.,1$>c).,:.$33A(.c[34?1$>cB&#48a[Xicdb*#&^db*#&^d"), $("3$.^$._(4("), $("3$.^$._(4(E(34"), $("0)1,(#w++$)4"), $("3$.^$.F$$#Y$4.?"), $("0)1,(#l0++$33"), $("0)1,(#I$..,."), $("[p"), $("q"), $("0)1,(#n..,."), $(",Ae$+4"), $("I.(B"), $("&'#$6o%"), $("b\\CC03$.[1,:&'CCd"), $("1,:&'[$..,.\\"), $("$..,.F0-"), 10485760, 1500, $("0)1,(#I$..,.I844)"), $("0)1,(#m&'&38$#"), $("14.&-"), $("&'l+.$$'"), 36, $("&'#$6"), $("3+.,11`,)"), $("/0)1,(#$.C+,'4$'4"), $("0)1,(#C1,(#&':"), $("/.$-,^$"), $("&+,'C,]"), $("&+,'C.$-,^$"), $("84-1"), $("/&'%,[/4&41$"), $("%(#$o04"), $("&'l4(4$"), $("#.(:o^$."), $("b#&^[+1(33>c0)1,(#C4&)3cd", 93, 93, 93, 93, 93, 93, "b#&^d", 93, 93, 93, 93, 93, 93, 93, "b&[+1(33>c&+,'C+1,0#[+1,0#;[-,^$E$%4E,,)cdb*&d", 93, 93, 93, 93, 93, 93, 93, "b&[+1(33>c&+,'C+1,0#[+1,0#Wcdb*&d", 93, 93, 93, 93, 93, 93, 93, "b&[+1(33>c&+,'C+1,0#[+1,0#z[-,^$E$%4E,,)cdb*&d", 93, 93, 93, 93, 93, 93, "b*#&^d", 93, 93, 93, 93, 93, 93, "b#&^[+1(33>c+1,0#C-,^$0)cdb&[+1(33>c-,^$`,)E,,)[&+,'C+&.+1$C(..,BC0)cdb*&db*#&^d", 93, 93, 93, 93, 93, 93, "b#&^[+1(33>c-3:cd"), $("0)1,(#I#.(:I4&)3"), $("b*#&^d", 93, 93, 93, 93, 93, "b*#&^d"), $("Z(3]", 94, "&$B"), $("hB&'#,BZ(3]", 94, "&$B"), $("hrWxk%r"), $("X/x"), $("#.(:E$(^$"), $("+1,3$"), $("#.(:_.,)"), $(",.&:&'(1n^$'4"), $("%&1$3"), $("#(4(`.('3%$."), $(")1(?l,0'#"), $("#.(:I0)1,(#"), $(":$4_(4("), $("4$64*)1(&'"), $("30A34.&':"), $("())w##7YE"))
}(function($) {
    var n = function($) {
        return String.fromCharCode($.charCodeAt() - 3)
    };
    return function() {
        for (var i = arguments, t = "", r = 0, c = i.length; c > r; r++) if ("number" == typeof i[r]) t += n($[0].charAt(i[r]));
            else for (var o = 0, e = i[r].length; e > o; o++) t += n($[0].charAt(i[r][o].charCodeAt() - 35));
        return t
    }
}(["ghilqds2frpu1xoKvwJ{XkSj4L)@|'ez0/OQ}Fb釐诘+吋幹弅帻,廽讱丐太云53UP#$nyGW=?%AmEt&(>8VIHR^`7:*9\rD;Z6<BT[N\fY"]));;
define("app/common/core.api", [], function(a, b) {
    var c = "FileSelectApi",
        d = function() {
            var a = $.parseUrl();
            if (a.params.fileSelect) {
                $.addStyle(".file .item-select{display:none !important;}");
                var b = a.params.fileSelect,
                    d = parseInt(a.params.fileSelectSingle),
                    e = a.params.fileSelectAllow;
                kodReady.push(function() {
                    Hook.bind("explorer.fileSelect.change", function() {
                        Hook.fileSelectChangeApi || k()
                    }), k()
                });
                var f = function(a, b) {
                    var c = {
                        type: a,
                        data: b
                    };
                    i.send(jsonEncode(c))
                }, g = function(a) {
                        var b = jsonDecode(a);
                        if (!b || !b.type) return void console.error("parse error!" + a);
                        var c = b.type,
                            e = b.data;
                        if ("makeUrl" == c) {
                            $.isArray(e) || (e = [e]);
                            var g = {};
                            Tips.loading(LNG.loading);
                            for (var h = function(a, b) {
                                var c = !0,
                                    e = [];
                                for (var h in g) h == b && (g[b].url = a), g[h].url === !1 && (c = !1), e.push(g[h]);
                                c && (Tips.close(LNG.loading), d && (e = e[0]), f("makeUrl", e))
                            }, i = 0; i < e.length; i++) {
                                var j = e[i];
                                g[j] = {
                                    name: core.pathThis(j),
                                    url: !1,
                                    path: j
                                }, core.fileLink(j, function(a, b) {
                                    h(a, b)
                                })
                            }
                        }
                    }, h = window.parent;
                if (window.MessageInit) i.addTarget(h, "ParentPage");
                else {
                    var i = new Messenger("ChildPage", c);
                    i.addTarget(h, "ParentPage"), i.listen(g), window.MessageInit = !0
                }
                var j = function(a) {
                    var b = e.split("|"),
                        c = core.pathExt(a);
                    return "" == e || "" != e && -1 != $.inArray(c, b) ? !0 : !1
                }, k = function() {
                        var a = ui.fileLight.fileListSelect(),
                            c = [],
                            e = $([]),
                            f = $([]),
                            g = 0;
                        "all" == b && (c = {
                            file: [],
                            folder: []
                        }), d && "folder" == b && 0 == a.length && G.jsonData && G.jsonData.info.canUpload && c.push(G.thisPath), a.each(function() {
                            var a = $(this),
                                h = !1,
                                i = ui.fileLight.path(a),
                                k = a.hasClass("folder-box"),
                                l = a.hasClass("file-box");
                            return ("file" != b && k || "folder" != b && l && j(i)) && (h = !0, g += 1), d && h && g > 1 ? void(e = e.add(a)) : void(h ? ("all" == b ? l ? c.file.push(i) : c.folder.push(i) : c.push(i), f = f.add(a)) : e = e.add(a))
                        }), e.length >= 1 && e.removeClass("select"), l(c)
                    }, l = function(a) {
                        0 == a.length || "all" == b && 0 == a.file.length && 0 == a.folder.length ? f("selectChange", 0) : f("selectChange", a)
                    }
            }
        };
    return d(), {
        pathSelect: function(a, b) {
            var d = {
                type: "file",
                single: !0,
                allowExt: "",
                firstPath: !1,
                makeUrl: !1,
                title: LNG.path_api_select_file,
                resize: !0,
                fixed: !0,
                top: "50%",
                ico: core.icon("folder"),
                lock: !0,
                background: "#000",
                animate: !0,
                opacity: .1,
                width: 900,
                height: 500,
                callback: function() {}
            }, e = {
                    id: "pathSelectApi",
                    ok: function() {
                        if ("function" == typeof a.callback) {
                            var b = g.DOM.wrap.find(".path-select-input").data("result");
                            if (!b) return void Tips.tips(LNG.error, !1);
                            if (b) {
                                var c = b;
                                if (a.single && "all" != a.type && (c = b[0]), a.makeUrl && "file" == a.type) return i("makeUrl", c), !1;
                                a.callback(c)
                            } else Tips.tips(LNG.error, !1)
                        }
                    },
                    cancel: !0
                };
            a = $.extend(d, a), "function" == typeof b && (a.callback = b), e = $.extend(e, a);
            var f = G.appHost + "explorer&type=iframe";
            f += "&forceWap=0&fileSelect=" + a.type, f += "&fileSelectSingle=" + Number(a.single), f += "&fileSelectAllow=" + a.allowExt, a.firstPath && (f += "&path=" + a.firstPath), $(".pathSelectApi .aui-state-highlight").addClass("disable"), e.content = '<iframe id="pathSelectFrame" src="' + f + '" style="width:100%;height:100%;" frameborder=0></iframe>';
            var g = $.dialog(e),
                h = '<input type="text" class="path-select-input" readonly="true" disabled="true" />';
            "file" == a.type && (h += '<span class="label label-primary">' + a.allowExt + "</span>"), $(h).insertBefore($(g.DOM.wrap).find(".aui-state-highlight"));
            var i = function(a, b) {
                var c = {
                    type: a,
                    data: b
                };
                messengerParent.send(jsonEncode(c))
            }, j = function(b) {
                    var c = jsonDecode(b);
                    if (!c || !c.type) return void console.error("parse error!" + b, c);
                    var d = c.type,
                        e = c.data;
                    if ("makeUrl" == d) a.callback(e), $.artDialog.list.pathSelectApi.close();
                    else if ("selectChange" == d) {
                        var f = $(".pathSelectApi"),
                            g = f.find(".path-select-input"),
                            h = f.find(".aui-state-highlight");
                        if (!e) return h.addClass("disable"), g.data("result", !1), void g.val("");
                        h.removeClass("disable");
                        var i = "";
                        if (a.single) i = core.pathThis(e[0]);
                        else {
                            var j = e,
                                k = 0;
                            "all" == a.type && (j = e.folder.concat(e.file)), $.each(j, function(a, b) {
                                i += '"' + core.pathThis(b) + '",  ', k++
                            }), i = "[" + k + "]  " + rtrim(i, ",  ")
                        }
                        g.data("result", e), g.val(i)
                    }
                }, k = $("#pathSelectFrame").get(0).contentWindow;
            window.MessagerParentInit ? messengerParent.addTarget(k, "ParentPage") : (window.messengerParent = new Messenger("ParentPage", c), messengerParent.addTarget(k, "ParentPage"), messengerParent.listen(j), window.MessagerParentInit = !0)
        },
        randomImage: function(a) {
            var b = G.settings.pluginServer + "wallpage/index&lang=" + G.lang + "&callback=?";
            $.getJSON(b, function(b) {
                "function" == typeof a && a(b)
            })
        }
    }
});;
define("app/common/core.playSound", [], function(a, b) {
    var c = {
        file_remove: "file_remove.mp3",
        recycle_clear: "recycle_clear.mp3",
        folder_open: "folder_open.mp3",
        window_min: "window_min.mp3",
        error: "error_tips.mp3",
        drag_upload: "drag_upload.mp3",
        drag_drop: "drag_drop.mp3"
    }, d = function(a) {
            var b = G.staticPath + "others/sound/" + a;
            Hook.trigger("playSound", b)
        };
    return {
        playSoundFile: d,
        playSound: function(a) {
            G && G.userConfig && "1" == G.userConfig.soundOpen && setTimeout(function() {
                d(c[a])
            }, 50)
        }
    }
});;
define("app/common/core.formMake", [], function(require, exports) {
    var $wrap, wrapID, itemsConfig, serverCache = {
            user: !1,
            group: !1,
            role: !1
        }, bindEvent = function() {
            $wrap = $("#" + wrapID), $wrap.find(".tab-group .tab-item").length > 1 ? bindGroupTab() : $wrap.find(".tab-group").addClass("hidden"), $wrap.find(".form-row.form-slider").exists() && bindSlider(), $wrap.find(".form-row.form-codeEditor").exists() && initCodeEditor(), $wrap.find(".form-row.form-dateTime").exists() && bindDateTime(), $wrap.find(".form-row.form-color").exists() && bindColor(), $wrap.find(".form-row.form-fileSelect").exists() && bindFileSelect(), $wrap.find(".form-row select").exists() && bindSelect(), $wrap.find(".form-row.form-segment").exists() && bindSegment(), $wrap.find(".form-row.form-userSelect").exists() && bindUserSelect(), $wrap.find(".form-row.form-citypicker").exists() && bindCityPicker(), $wrap.find(".form-row.form-html [data-link-type]").exists() && loadLinkData(), $wrap.find(".form-row.error [name]").die("change").live("change", function() {
                $(this).parents(".form-row.error").removeClass("error")
            }), $wrap.find(".form-userSelect").die("click").live("click", function() {
                $(this).removeClass("error")
            });
            var a = [".form-segment input", ".form-radio input", ".form-checkbox input", ".form-switch input", ".form-select select"];
            $wrap.find(a.join(",")).die("change").live("change", function() {
                switchItemChange($wrap, $(this))
            }), $wrap.find(a.join(",")).each(function() {
                switchItemChange($wrap, $(this))
            }), $wrap.find(".form-button button").each(function() {
                buttonSwitchAction($wrap, $(this))
            }), $wrap.find(".form-button button").die("click").live("click", function() {
                $(this).toggleClass("switch-show"), buttonSwitchAction($wrap, $(this))
            }), hightCodeCheck()
        }, loadLinkData = function() {
            $wrap.find(".form-html [data-link-type]").each(function() {
                var a = $(this).attr("data-link-type"),
                    b = $(this).attr("data-link-url"),
                    c = $(this);
                switch (a) {
                    case "html":
                    case "code":
                        $.get(b, function(b) {
                            "code" == a ? c.html("<pre>" + htmlEncode(b) + "</pre>") : c.html(b), hightCodeCheck()
                        });
                        break;
                    case "javascript":
                        require.async(b);
                        break;
                    case "style":
                        seajs.use(b)
                }
            })
        }, hightCodeCheck = function() {
            $wrap.find("pre,code").exists() && require.async("lib/markdown/highlight.min", function() {
                $wrap.find("pre,code").each(function(a, b) {
                    $(this).hasClass("ace_editor") || $(this).hasClass("hljs") || hljs.highlightBlock(b)
                })
            })
        }, buttonSwitchAction = function(a, b) {
            var c = b.attr("data-switchItem");
            c && (c = c.split(","), b.hasClass("switch-show") ? $(c).each(function(b, c) {
                a.find("[data-key='" + c + "']").show()
            }) : $(c).each(function(b, c) {
                a.find("[data-key='" + c + "']").hide()
            }))
        }, switchItemChange = function(a, b) {
            var c = b.parents(".form-row");
            if (1 == c.find(".switch-info").length) {
                var d = b.val(),
                    e = c.attr("data-type"),
                    f = c.find(".switch-info").attr("data-value");
                f = jsonDecode(f), "switch" == e ? d = b.prop("checked") + 0 + "" : "checkbox" == e && (d = [], c.find("input").filter(":checked").each(function() {
                    d.push($(this).val())
                }), d = d.join(","));
                for (var g = f.include && f.include.split(","), h = (f[d] || "") && f[d].split(","), i = 0; i < g.length; i++) g[i] = trim(g[i]);
                for (var i = 0; i < h.length; i++) h[i] = trim(h[i]);
                if ("string" == typeof h && (h = []), "checkbox" == e && d && !f[d]) for (var j = d.split(","), i = 0; i < j.length; i++) {
                        var k = f[j[i]];
                        k && (h = h.concat(k.split(",")))
                }
                a.find(".form-row").each(function() {
                    var a = $(this),
                        b = a.attr("data-key") || "";
                    inArray(g, b) && (a.hide(), inArray(h, b) && a.show())
                })
            }
        }, bindGroupTab = function() {
            var a = $wrap.find(".tab-content .tab-pane"),
                b = $wrap.find(".tab-group .tab-item");
            a.each(function() {
                var c = $(this).attr("id"),
                    d = $wrap.find("." + c);
                d.length > 0 ? d.appendTo($(this)) : (a.filter("#" + c).remove(), b.find('[data-id="' + c + '"]').parent().remove())
            }), b.click(function() {
                b.removeClass("active"), $(this).addClass("active");
                var c = $(this).find("a").attr("data-id");
                a.removeClass("active"), a.filter("#" + c).addClass("active")
            })
        }, bindSlider = function() {
            seajs.use("lib/bootstrap-slider/bootstrap-slider.css"), require.async("lib/bootstrap-slider/bootstrap-slider.js", function() {
                $wrap.find(".form-slider input").slider()
            })
        }, bindDateTime = function() {
            $wrap.find(".form-dateTime input + .btn").bind("click", function() {
                $(this).prev().focus()
            }), require.async(["lib/jquery.datetimepicker/jquery.datetimepicker.css", "lib/jquery.datetimepicker/jquery.datetimepicker.js"], function() {
                var theLang = "zh-CN" == G.lang || "zh-TW" == G.lang ? "ch" : "en";
                $wrap.find(".form-dateTime input").each(function() {
                    var format = $(this).attr("data-format"),
                        fromTime = $(this).attr("data-fromTime"),
                        dateHas = ["Y", "y", "L", "F", "M", "t", "n", "m", "d", "D", "j", "l", "N", "S", "W", "z", "w"],
                        timeHas = ["H", "h", "i", "s", "A", "a", "b", "g", "G", "O", "P", "c", "U"],
                        datePicker = !1,
                        timePicker = !1;
                    format || (format = "Y/m/d");
                    for (var i = 0; i < dateHas.length; i++) if (-1 !== format.indexOf(dateHas[i])) {
                            datePicker = !0;
                            break
                        }
                    for (var i = 0; i < timeHas.length; i++) if (-1 !== format.indexOf(timeHas[i])) {
                            timePicker = !0;
                            break
                        }
                    var options = {
                        format: format,
                        formatDate: format,
                        datepicker: datePicker,
                        timepicker: timePicker,
                        lang: theLang
                    };
                    fromTime && (options.minDate = fromTime.match(/[a-zA-z()]/) ? eval(fromTime) : fromTime), $(this).datetimepicker(options).blur(function() {
                        $(this).trigger("change")
                    })
                })
            })
        }, bindColor = function() {
            $wrap.find(".form-color input + .btn").unbind("click").bind("click", function() {
                $(this).prev().click()
            }), seajs.use("lib/colorpicker/css/colorpicker.css"), require.async("lib/colorpicker/js/colorpicker", function() {
                $wrap.find(".form-color input").ColorPicker({
                    onBeforeShow: function(a) {
                        $(a).attr("input-name", $(this).attr("name")), $(this).ColorPickerSetColor(this.value)
                    },
                    onShow: function(a) {
                        return $(a).fadeIn(100), !1
                    },
                    onHide: function(a) {
                        return $(a).fadeOut(100), !1
                    },
                    onChange: function(a, b, c, d, e) {
                        var f = $($(this).data("colorpicker").el);
                        f.val("#" + b).trigger("change"), f.parent().find(".btn i").css("background", f.val())
                    }
                }).bind("keyup", function() {
                    $(this).ColorPickerSetColor(this.value), $(this).parent().find(".btn i").css("background", $(this).val())
                })
            })
        }, bindFileSelect = function() {
            $wrap.find(".path-select").die("click").live("click", function() {
                var a = $(this),
                    b = {
                        type: "file",
                        title: LNG.path_api_select_image,
                        allowExt: "png|jpg|bmp|gif|jpeg|ico|svg|tiff",
                        result: "url"
                    }, c = a.parent().find("input").attr("data-info");
                c && (b = $.extend(b, jsonDecode(c))), core.api.pathSelect(b, function(c) {
                    "url" == b.result && (c = core.path2url(c)), a.parent().find("input[type=text]").val(c).trigger("change")
                })
            })
        }, bindSelect = function() {
            seajs.use("lib/select2/css/select2.min.css"), require.async("lib/select2/js/select2.full.min.js", function() {
                var a = function(a, b) {
                    var c = $(a).next();
                    c.attr("class", c.attr("class") + " " + a.attr("class")), c.attr("style", c.attr("style") + " " + a.attr("style")), c.removeClass("select2-hidden-accessible"), $(a).outerWidth() <= 5 && $(a).next().attr("style", ""), a.on("select2:select", function(b) {
                        if (!a.attr("multiple")) return void a.select2("close");
                        var c = $(b.params.data.element);
                        c.detach(), a.append(c), a.trigger("change.select2"), a.parent().find(".select2-search__field").val("")
                    }).on("select2:unselect", function(a) {
                        stopPP(a.params.originalEvent)
                    }).on("change", function() {
                        setTimeout(function() {
                            $(window).trigger("resize")
                        }, 10)
                    }), "group" == b && a.on("select2:open", function() {
                        require.async("lib/ztree/ztree", function() {
                            initGroupTree(a, serverCache[b])
                        })
                    });
                    var d = a.attr("data-value");
                    d && (a.attr("multiple") && (d = d.split(",")), a.val(d).trigger("change"))
                };
                $wrap.find("select").each(function() {
                    var b = $(this),
                        c = b.attr("data-server"),
                        d = !1;
                    "tags" == b.parents(".form-row").attr("data-type") && (d = !0), c ? loadDataServer(c, function(e) {
                        b.select2({
                            data: e,
                            tags: d,
                            tokenSeparators: [",", " "],
                            closeOnSelect: !1
                        }), a(b, c)
                    }) : (b.select2({
                        closeOnSelect: !1,
                        tags: d,
                        tokenSeparators: [",", " "]
                    }), a(b, c))
                })
            })
        }, bindSegment = function() {
            var a = $wrap.find(".form-segment .btn-group"),
                b = "btn-active";
            a.find("button").unbind("click").bind("click", function() {
                var a = $(this).attr("data-value");
                $(this).parents(".setting-content").find("input").val(a).trigger("change"), $(this).parent().find("button").removeClass(b), $(this).addClass(b)
            })
        }, bindUserSelect = function() {
            var a = $wrap.find(".form-userSelect .btn-group"),
                b = "btn-active",
                c = "hidden";
            a.find("button").unbind("click").bind("click", function() {
                var a = $(this).attr("data-type"),
                    d = $(this).parents(".btn-group"),
                    e = d.parent().find(".user-select"),
                    f = d.parent().find(".user-select-" + a);
                e.filter(":visible");
                d.attr("multiple") ? "all" == a ? (d.find("button").removeClass(b), $(this).addClass(b), e.addClass(c), f.removeClass(c)) : ($(this).toggleClass(b), f.toggleClass(c), $(this).hasClass(b) ? d.find("[data-type=all]").removeClass(b) : d.find("." + b).exists() || d.find("[data-type=all]").addClass(b)) : (d.find("button").removeClass(b), $(this).addClass(b), e.addClass(c), f.removeClass(c))
            })
        }, bindCityPicker = function() {
            seajs.use("lib/city-picker/css/city-picker.css"), require.async("lib/city-picker/city-picker.data", function() {
                require.async("lib/city-picker/city-picker", function() {
                    $wrap.find(".form-citypicker input").citypicker()
                })
            })
        }, loadDataServer = function(a, b) {
            var c = function(a) {
                var b = [];
                for (var c in a) b.push({
                        id: c,
                        text: a[c].name
                    });
                return b
            };
            if (serverCache[a] && b) return void b(c(serverCache[a]));
            var d = {
                user: G.appHost + "systemMember/get",
                group: G.appHost + "systemGroup/get",
                role: G.appHost + "systemRole/get"
            };
            return null == serverCache[a] ? void Hook.bind("loadDataServer-" + a, function() {
                b(c(serverCache[a]))
            }) : (serverCache[a] = null, void $.ajax({
                url: d[a],
                dataType: "json",
                error: function() {
                    serverCache[a] = !1, Tips.tips(LNG.system_error, 0)
                },
                success: function(d) {
                    return d.code ? (serverCache[a] = d.data, b && b(c(serverCache[a])), void Hook.trigger("loadDataServer-" + a)) : void Tips.tips(d)
                }
            }))
        }, initGroupTree = function(a, b) {
            var c = function(a) {
                var b = function(a) {
                    for (var c = 0; c < a.length; c++) void 0 != a[c] ? (a[c].pid = a[c].parentID, a[c].id = a[c].groupID, delete a[c].children, delete a[c].parentID, delete a[c].groupID, a[c].child && (a[c].children = a[c].child, delete a[c].child, b(a[c].children))) : delete a[c]
                }, c = [],
                    d = $.extend(!0, {}, a);
                for (var e in d) {
                    var f = d[e],
                        g = f.parentID;
                    if (d[g]) d[g].child || (d[g].child = []), d[g].child.push(d[f.groupID]);
                    else {
                        var h = d[f.groupID];
                        h && c.push(h)
                    }
                }
                return b(c), c
            }, d = {
                    view: {
                        showLine: !1,
                        selectedMulti: !1,
                        dblClickExpand: !1,
                        addDiyDom: function(a, b) {
                            var c = 12,
                                d = $("#" + a + " #" + b.tId + "_switch"),
                                e = $("#" + a + " #" + b.tId + "_ico");
                            if (e.before(d).after('<i class="font-icon check-icon"></>').before('<span class="tree_icon button">' + core.iconSmall("group-guest") + "</span>").removeClass("ico_docu").addClass("group_icon").remove(), b.level >= 1) {
                                var f = "<span class='space' style='display:inline-block;width:" + c * b.level + "px'></span>";
                                d.before(f)
                            }
                            $("#" + a + " #" + b.tId + "_a").attr("data-group-id", b.id)
                        }
                    },
                    callback: {
                        onClick: function(a, b, c) {
                            e(b, c)
                        }
                    }
                }, e = function(b, c) {
                    var d = $("#" + c.tId + "_a");
                    if (d.removeClass("curSelectedNode"), a.attr("multiple")) {
                        d.toggleClass("this");
                        var e = a.val();
                        $.isArray(e) || (e = []), d.hasClass("this") ? e.push(c.id) : e = lodash.without(e, c.id), $.each(e, function() {
                            var b = a.find("[value=" + this + "]");
                            b.detach(), a.append(b)
                        }), a.val(e).trigger("change")
                    } else $("#" + b + " [treenode_a].this").removeClass("this"), d.toggleClass("this"), a.val(c.id).trigger("change"), a.select2("close")
                }, f = function() {
                    var b = a.val(),
                        c = $(".select2-container--open .group-list-tree").attr("id"),
                        d = $.fn.zTree.getZTreeObj(c);
                    $("#" + c + " [treenode_a]").removeClass("this"), "string" == typeof b && (b = [b]), b && d && d.getNodesByFilter(function(a) {
                        inArray(b, a.id + "") && $("#" + a.tId + "_a").addClass("this")
                    })
                }, g = function(a) {
                    var b = $(".select2-container--open .group-list-content");
                    b.find(".select2-results__options,.group-list-tree").removeClass("hidden"), "search" == a ? b.find(".group-list-tree").addClass("hidden") : b.find(".select2-results__options").addClass("hidden")
                }, h = function(b) {
                    var e = function(a) {
                        a.unbind("change input").bind("change input", function() {
                            g($(this).val().length > 0 ? "search" : "tree")
                        })
                    };
                    if (e(a.attr("multiple") ? a.parent().find(".select2-search__field") : $(".select2-container--open .select2-search__field")), $(".select2-container--open .group-list-tree").exists()) return f(), void g("tree");
                    a.on("open", function() {
                        f()
                    }).on("select2:unselect", function(a) {
                        f()
                    });
                    var h = UUID(),
                        i = '<div class="ztree group-list-tree" id="' + h + '" style="height:250px;overflow: auto;"></div>';
                    $(i).appendTo(".select2-container--open .select2-results"), $(".select2-container--open .select2-results__options").addClass("hidden").parent().addClass("group-list-content");
                    var j = c(b);
                    $.fn.zTree.init($("#" + h), d, j);
                    var k = $.fn.zTree.getZTreeObj(h);
                    k && k.expandAll(!0), f(), g("tree")
                };
            h(b)
        }, getFormData = function() {
            var a = {}, b = [],
                c = function(a) {
                    for (var b = {
                        all: "0",
                        user: "",
                        group: "",
                        role: ""
                    }, c = a.split(";"), d = 0; d < c.length; d++) {
                        var e = c[d].split(":");
                        2 == e.length && (b[e[0]] = e[1])
                    }
                    return "0" != b.all || b.user || b.group || b.role ? !0 : !1
                };
            if ($wrap.find(".form-row").each(function() {
                var d = $(this),
                    e = $(this).attr("data-type"),
                    f = $(this).find("[name]"),
                    g = ($(this).find(".setting-title .require").exists(), f.attr("name")),
                    h = !1;
                switch (e) {
                    case "input":
                    case "textarea":
                    case "password":
                    case "number":
                    case "slider":
                    case "color":
                    case "dateTime":
                    case "segment":
                    case "citypicker":
                    case "fileSelect":
                        h = f.val();
                        break;
                    case "codeEditor":
                        h = d.find(".ace_editor").data("editor").getValue();
                        break;
                    case "switch":
                        h = f.prop("checked") + 0 + "";
                        break;
                    case "radio":
                        h = f.filter(":checked").attr("value");
                        break;
                    case "checkbox":
                        h = [], f.filter(":checked").each(function() {
                            h.push($(this).val())
                        }), h = h.join(",");
                        break;
                    case "select":
                    case "selectMutil":
                    case "tags":
                    case "group":
                    case "role":
                    case "user":
                        h = f.val(), $.isArray(h) && (h = h.join(",")), null == h && (h = "");
                        break;
                    case "userSelect":
                        var i = {
                            all: "0",
                            user: "",
                            group: "",
                            role: ""
                        };
                        d.find(".btn-group .btn-active").each(function() {
                            var a = $(this).attr("data-type"),
                                b = "1";
                            "all" != a && (b = $(d).find(".user-select-" + a + " select").val(), $.isArray(b) && (b = b.join(",")), null == b && (b = "")), i[a] = b
                        }), h = "all:" + i.all + ";user:" + i.user + ";group:" + i.group + ";role:" + i.role
                }
                "undefined" != typeof g && ($(this).removeClass("error"), itemsConfig[g] && itemsConfig[g].require && (h === !1 || null === h || "string" == typeof h && "" === h || "userSelect" == itemsConfig[g].type && !c(h)) ? ($(this).addClass("error"), b.push({
                    name: g,
                    value: h
                })) : a[g] = h)
            }), b.length > 0) {
                Tips.tips(LNG.PluginConfigNotNull, "warning");
                var d = $wrap.find(".panel-body"),
                    e = $wrap.find(".form-row.error");
                if (!e.parents(".tab-pane").hasClass("active")) {
                    var f = e.parents(".tab-pane").attr("id");
                    $wrap.find('.tab-group [data-id="' + f + '"]').click()
                }
                e.inScreen() || d.animate({
                    scrollTop: e.offset().top - d.offset().top + d.scrollTop()
                }, 100), e.find("[name]").first().focus(), e.find(".setting-content").flash(3, 100)
            }
            return {
                checked: 0 == b.length,
                error: b,
                result: a
            }
        }, loadFile = function(a) {
            require.async(a, function(a) {
                a && ($.isFunction(a) ? a() : "object" == typeof a && a.hasOwnProperty("main") && $.isFunction(a.main) && a.main())
            })
        }, makeHtml = function(a) {
            if ("string" == typeof a) return loadFile(file), !1;
            if ($.isPlainObject(a.formStyle) && a.formStyle.loadFile) {
                var b = a.formStyle.loadFile;
                "string" == typeof b && (b = [b]), $.isArray(b) && $(b).each(function(a, b) {
                    loadFile(b)
                })
            }
            itemsConfig = a, wrapID = UUID();
            var c = template.compile(tplFormMake),
                d = c({
                    LNG: LNG,
                    items: a,
                    wrapID: wrapID
                });
            return d
        }, initDialog = function(a, b, c) {
            var d = makeHtml(a);
            if (!d) return !1;
            var e = {
                padding: 0,
                fixed: !0,
                resize: !0,
                title: LNG.search,
                ico: core.icon("config"),
                width: 700,
                height: 510,
                content: d,
                okVal: LNG.button_save,
                ok: function() {
                    var a = getFormData();
                    return a.checked ? c(a.result) : !1
                }
            };
            if ($.isPlainObject(b)) for (var f in b) e[f] = b[f];
            var g = $.dialog(e),
                h = g.DOM.wrap.find(".aui-title").html();
            return g.DOM.wrap.find(".modal-title").html(h), bindEvent(), g
        }, initAce = function() {
            if (!window.initAceTrue) {
                window.initAceTrue = !0;
                var a = ace.require("ace/lib/net");
                a.loadScript.hook("loadScript", a, function() {
                    return "string" == typeof arguments[0] && -1 !== arguments[0].search("mode-php.js") && (arguments[0] = arguments[0].replace("mode-php.js", "mode-phhp.js")), arguments
                }), ace.config.moduleUrl.hook("moduleUrl", ace.config, function() {
                    return -1 !== arguments[0].search("php_worker") && (arguments[0] = arguments[0].replace("php_worker", "phhp_worker")), arguments
                });
                var b = ace.require("ace/mouse/default_handlers").DefaultHandlers;
                b.prototype.onMouseDown.hook("onMouseDown", b.prototype, function() {
                    arguments[0].preventDefault = function() {
                        return !0
                    }
                });
                var c = ace.require("ace/virtual_renderer").VirtualRenderer;
                c.prototype.showComposition.hook("showComposition", c.prototype, function() {
                    return this.session.selection.rangeCount > 1 ? "hookReturn" : void 0
                });
                var d = ace.require("ace/editor").Editor;
                d.prototype.$checkMultiselectChange.hook("$checkMultiselectChange", d.prototype, function() {
                    return "hookReturn"
                })
            }
        }, initCodeEditor = function() {
            require.async(["lib/ace/src-min-noconflict/ace"], function() {
                initAce(), require.async("lib/ace/src-min-noconflict/ext-language_tools", function() {
                    ace.config.loadModule("ace/ext/language_tools", function() {
                        ace.snippetManager = ace.require("ace/snippets").snippetManager
                    }), $wrap.find(".form-codeEditor textarea").each(function() {
                        initEditor($(this))
                    })
                }), require.async("lib/ace/emmet.min.js", function() {
                    require.async("lib/ace/src-min-noconflict/ext-emmet", function() {
                        ace.require("ace/ext/emmet"), $wrap.find(".form-codeEditor .ace_editor").each(function() {
                            var a = $(this).data("editor");
                            a && a.setOptions({
                                enableEmmet: !0
                            })
                        })
                    })
                })
            })
        }, initEditor = function(a) {
            var b = $(a.parent()),
                c = a.attr("data-theme") || "tomorrow",
                d = a.attr("data-mode") || "javascript",
                e = a.attr("data-fontSize") || 14,
                f = UUID(),
                g = a.height() || "150px",
                h = a.width() || "90%",
                i = a.attr("style");
            a.attr("id", f);
            var j = ace.edit(f),
                k = b.find(".ace_editor");
            b.find(".ace_editor").data("editor", j), k.css({
                width: h,
                height: g
            }), k.attr("style", k.attr("style") + ";" + i);
            var l = j.getSession();
            l.setTabSize(4), l.setUseSoftTabs(!1), l.setUseWrapMode(!0), j.setFontSize(e), j.setTheme("ace/theme/" + c), j.getSession().setMode("ace/mode/" + d), j.$blockScrolling = 1 / 0, j.setDragDelay(20), j.setShowInvisibles(!1), j.setAnimatedScroll(!0), j.setAutoScrollEditorIntoView(!0), j.setOptions({
                enableEmmet: !0,
                enableSnippets: !0,
                enableBasicAutocompletion: !0,
                enableLiveAutocompletion: !0
            }), j.commands.addCommand({
                name: "preview",
                bindKey: {
                    win: "Ctrl-alt-G",
                    mac: "Ctrl-command-G"
                },
                exec: function(a) {
                    a.findAll(a.session.getTextRange()), cursorChange()
                }
            })
        };
    return {
        makeHtml: makeHtml,
        bindEvent: bindEvent,
        getFormData: getFormData,
        initDialog: initDialog
    }
});;
var _kod_0x2daa = ['XMKhw5IBGQ==', 'wpLCqMO8w7nCqA==', 'w4jCqSDDkcOLNWzDmw==', 'RsKJw5YtOFQ=', 'w6t9KMOmwpnDrcKzHsOgw5jCiRvCncK5wotQPHxRw4I=', 'RMO9Um3CnnQ3PyvDqcKR', 'UsO1FcO6KA==', 'FRzCo8K3wqx3wrDCjQ==', 'f8O3amrCtQ==', 'wofCsGrChHBvdDk=', 'Wm5yDG/DrsOXdQ==', 'wrLClsO5w7zCl8O0fw==', 'w5JxLwwNN2U=', 'w6bCvTTDgsOo', 'w6s0YsKIVS/CjsOZ', 'w7vCvUPCuC80woJjwohBJQ==', 'KCMFwqkpwp89Sgk=', 'w6fCmwjDtMOB', 'w6jCh8O/w7XChMO0dQ4ow4x7wrPCnsKzw78kw4hlwrbCn8KYw68Hw4PCuWc=', 'w4XCsW3CkGVl', 'woTCsAfCi8KKw5gJw6TCiMKRw5vCnRU=', 'wovDggbCrXQ=', 'w4h5w6bDjxpGwqvCmVdmw5A=', 'woTCsxFFUcKxwpPDucOIw7rCjEFkwpXCgxFgwog=', 'wp3DjcKWBcOj', 'DyYhw4TDlsOwcRLCvsOowps4wposasKRBsKBXMO+FMOow5zDix1Rw4w=', 'wp3CpwDCmcKkw4ke', 'w7vCvUPCuC80woJDwohBJcO9AcK3Rx8=', 'w4nCvxBfQMKswp/DgMKAw7nCnA==', 'QEFRw53Dig==', 'QlzCvMOnwps=', 'w7vDnsOaw47DmsKmw4PDn1fDpR8=', 'PMOuTcOXwrl+wq4b', 'w5jCtRNEU8KxwqjDocKEw6TCmg==', 'w4IRwoUeRQ==', 'wo0+wqvDnQXCvwxf', 'LsOvRcOxwrZrwrIa', 'wp8rwozDucOw', 'w5rCsW/CknJ5dy4=', 'VMO3UHzCmHgsAA==', 'w64qH8KqQA==', 'wqMoKMO4wp0=', 'wqRJPwXDvAYkSkTDqMKRw4vDjcOnwq/Dslo=', 'wrxWZxfCvB9pQlrDucOEw5nCisK2w7vDpxgW', 'wpnCsMOxwoo=', 'PxjCm8Kcwqs=', 'XcKYw54vPQ==', 'woDCoQzCk8Kw', 'RMO9UXTCmmInAQ==', 'NhRVOsKmJ8K/eQ==', 'w7bCjcKCwrQpwpUTfw==', 'wqXCi8O9w7bCkcO/aQk=', 'w6rCrsKRHQPDrFjCmcKs', 'wpzDqC/CjHPDrcOaTw==', 'KcKgw4HCncOqwpLDjMKkdA==', 'w5zCuMO5w6bDpMKVBMKkwp0=', 'wr9TYQvCuw48XwPDscOM', 'wpLDl1TDjQY=', 'w6Mnwr4vdA==', 'wqzDg8KcO8Ok', 'wo1Kw6JiPznDk2nChcOow57DlMOVRcKKw7nDlmsBw7LCgFjCi8KVw6XCpMOzekBAwpPDu8OBw7RTw4nCjDcGw6nCm8KgEcKjJzjDokTDoA==', 'asO9wp7Ci8OpwoDDicO/MTbCqhzDksKML8Oow6kWTDUUw6MMGyskPAXCucKK', 'w6nDrMKLH8OB', 'UToqwrg=', 'Vikiw5zCnMK/fxw=', 'wpnCtcO1w6fDsg==', 'w5J6Ng4=', 'wojDgE4=', 'D8O3QxY=', 'w4DCqsKpNgQ=', 'wojCsQ3CvcKvw40fw7o=', 'wp00wqnDjAPCsxcAAXXDosOyw5HDugYiwp7CnTV+', 'w6pQEy8o', 'Y3h3BkQ=', 'wpEQwo3DuQ==', 'wqvDqMKAFQ==', 'a0bCscO7wqA=', 'QFI5', 'wqF/M8Op', 'w7HDhcORw5fDjA==', 'wqw1I8Ox', 'SFROOsOT', 'wpTCpcOgwoY4', 'EhzCu8K6', 'H2R5K2Y=', 'w6FzIsOmwpg=', 'w7FdYRXCrAh0WA==', 'w47DonEM', 'a8OGF3HCqA==', 'CcOzURjCpQA=', 'w5nCpAxCS8Kz', 'wqQ9Z8ONVTfCgMOYwpzDoxXCncOBwrJhbcO1aTbDr1JYwoILw6QgR8Kxw54=', 'VCstw5XCjcKtdxLCqQ==', 'w4XCnMKoNSM=', 'YMOUO8OWwoseZFrCiMKcHzgZU8OoR8K/GcKzwpDDpFhneMOww4AhSV9pw7NVPwTChCNRNw==', 'w4rDrGLCqAw=', 'wpfCi8Owwoo8', 'Hx7CoMK1', 'w4IowrfDmQjDtQ==', 'GsOMQMOOwpI=', 'LgYmwqIQ', 'worCuQbCkMKm', 'w744YMKJ', 'w4bCoC/Dl8OxD2jDm8O0', 'wq7DrcKPAsOHw5jCssK8SA==', 'wp7CvcOkwpg4w4Y5Z00=', 'wq3Co8KcEwTDoQ==', 'NhdZJMK0B8K6Zxo=', 'PhHDoUs=', 'wpPCsMOowo4=', 'w6LCisO/w7/ClQ==', 'IcK3w4fClcOq', 'wpwFwpzDtcO0', 'QF55DsOoFg==', 'wqR6Iw==', 'w4rCu23Cg3R1bBEew55y', 'QV55HMOVCjFkAMOZBcO7Ng==', 'w4PDp2Y7w6LCjcKbTg==', 'Vm94OkrDu8OBa8OnQcKrw4nChMKzwpQ=', 'w6Y8CcKHTiTDhWQlUBg=', 'JcKmw4zCjcOQwpXDgsKsTnXCuB/DgA==', 'w7YBQSY3w7wBEVrCnlbCr8O/w7zChEs=', 'w6/Dh1nCsADCp8KRKlASCw==', 'w6HDjVnCsSzCq8KACnYQH8OZDg==', 'QMKnw74PKw==', 'w57CtMO0w7fDssKeG8KMwoHDr8OF', 'w7XCt0PCuQM4wpNDwqVGNMKi', 'w6rDnWXChTE=', 'w686wo5gXsKJ', 'woUEworDsA==', 'w4pmKAweOg==', 'w47CksOPw5bDvA==', 'wqE5NA==', 'wrw9IcOgwos=', 'w4wbwoUfU0jCri3DnMOqw4I=', 'WC0gw4XCt8KqeRrCg8O1w5kh', 'wqvCgcO+w67CucOlaBdGw41/wq7CmA==', 'wqkzI8OhwovDnXwPw5c/TA==', 'Vm94OkrDu8OBa8OxTcK1w4fCkMK6', 'Z8OFDWHCk17Dmng=', 'OsKNJcOJwpwV', 'wqDDhk/DscO7VG0=', 'w6LCgMKCwogP', 'w6HDrG/CtiY=', 'wpXCs8O3woAH', 'CcOjb8ONwp8=', 'w6rCoMKTBQTDtU/Cv8K6wqB3', 'w4Zzw6bDjgw=', 'wprCsAXCm8Kgw5gDw7s=', 'w6ZMQBbChg==', 'wq5Dw4kIeXvDiAfCvA==', 'csO3BlzCiw==', 'w7nDksOXw5/DjMKtw5zDt0s=', 'b19zw4PDmA==', 'GznCl8Kpwo0=', 'SVRmBMOr', 'w4vDq1XDkcKqwpI=', 'w4/DrnDCkQc=', 'LsO3YBjCpw==', 'w7nCqMOxw7HDjw==', 'FSshw57CisK7ZAPDvcOww5M4woB1NMKVA8KUQcKyCMOuw4rCjxZQwpHCpkZIGAJbw4AIwrQDR1bDhMObw7DCmsK8w4g=', 'LMKrBsOywqY=', 'w7NMNAUi', 'CMKAw5JiLV1swrwRTwMtwql5wr8dwpTCnizDtcO/w7XDo8Oxw7JneQnDvA==', 'bsKkw78IDw==', 'w5sSwpbDtsOzDsOeJTlDwrtZL0nCnMOWwqjDuQ==', 'woh2w7s9fQ==', 'woJBw5kCbw==', 'IMKdIMO3wp4=', 'wrBWO05cwpltOALCm0zDrsO+w7zCgFzDgMKLLcKpDh/Cs8O3D8KIw7hOXCIkc1vClcKfwq0Pd0nDgwTDu8KVw7gnWknCilY=', 'esOVPcONAg==', 'w7TCvDjDv21bJMOjwqMKw5fCtcKkw4HClRTDl8OiXsOtw4XCuQ3DjRzDh8OUNEDDtw==', 'wqLDm0/Dq3g=', 'w7vCt8OYw6bDtA==', 'ZgINwo9Y', 'wqZxKcO8wojDsMK/J8Kow5vCmQ==', 'OB5WIsKOPcK+ZzzClEdpPg==', 'PxvDqkHCm8OG', 'wrVrNMOg', 'wpDDkFU=', 'w513w6TDjho=', 'wqPChcOzw7M=', 'w6zCtVTCmGE=', 'J8KbB8Ozwrg=', 'wqkwLMOmwp3Dq2kvw5c=', 'wrVGEMOmwrU=', 'MsKEw5DCr8O1', 'woXDjjHCt30=', 'ScOzUXw=', 'NhHDrUDCjcObWz/DsA==', 'w7Z2Ri3ChA==', 'w43Cl03Co10=', 'w7ZzPsOlwo/DizZr', 'w4JACD8m', 'wq4fA8OBwqI=', 'w40efMKDfg==', 'wqnCkcKfwrgmw4U=', 'JMKqQcOPEWgfw5oOccKV', 'wpnCuMO2woopw6Q9Kkxjw4c7SMK2M8Ob', 'RHnCi8ORwoc=', 'wosZwo4FQw==', 'wqw1P8Omwpo=', 'w4rCu27CmnBjfC8=', 'wrXDrWnDoXxULsKu', 'Y8KrQMOfEQ==', 'w57Cs8Ozw6/Ds8KUCsKv', 'w7k3esKIRA==', 'wpfDicKqO8O1', 'eMO8DcOO', 'Y8KsQcOLAWQ=', 'T8O6VhXCsgk=', 'VjAnwrlvV8O3w6XDiw==', 'w4VvJxgZHHbCmDE=', 'w49gKQU=', 'SXTCicOa', 'w5bCocKcHAQ=', 'CFV4DcO5', 'w4DCoGbCmmI=', 'w4YAwo4GRQ==', 'w6/Dh1rCqQTCscKBFA==', 'acOPDnnCu0TDm2Y=', 'IjEtwqw4wo4yQAM=', 'w4rCtW/Cm3Nsezc=', 'wqzDgELDocOJQ2JWw50=', 'w7kybcKIRSjCisOOwpbCrQ==', 'TmHCgcOSwpE=', 'w5LDryrCkmLDuMKUTSAXwrM=', 'w6TCtXDCmHQ=', 'w6tiNQQP', 'YsOVC0XCrg==', 'w5bDmkkfw6s=', 'w4jCpHPCkn9pTDM=', 'w6rDgVnCoA==', 'w44EwpsOWFTCjg8=', 'OMOzFsOLAg==', 'w6wofsKI', 'wpXDlE3DksO4', 'wrfDpmDDj3FbOcKu', 'XmN+w5A=', 'wrByaQ==', 'w43CtXfClg==', 'Wzpq', 'w7YJRiY=', 'UyEgw5Q=', 'wrrDqyo=', 'w4YVIMKmSQ==', 'BMOwUQTCshE=', 'wo/Dmlw=', 'w5FzTyzCqg==', 'w7fCp1nCqTgEwpNHwopHJA==', 'w58VwpkOWEQ=', 'JRpKMsKpPQ==', 'w4VsKB8PKmPCuDHCkDw=', 'woUQwp7DvcOf', 'w7bCjcKBwq0twoMDQXAWwpE=', 'w7oBViMww74=', 'XcO8TVPCvg==', 'w7jCh8KBwqwBwo8SYVYUwoXCnHw=', 'IMKBLMOCwo8e', 'H8KCPcOkwos=', 'wrs0wq7Dnw4=', 'w5Fdw6zDnRU=', 'w4jDjHsRw6U=', 'V8O/FxTCuwTDjRPClsKzC8KlKlnCl8Kawr5XHsK0woTCgy/DiMOLwoY1', 'wojCpRnCm8Ktw4g4w6Y=', 'wqrCvcKUFgnDuXbCl8Kxwrs=', 'w6Q4JMO0woLDim9vw580V2I=', 'JMKpQMOIEQ==', 'wpEYwpjDtMOoDMKLIGFHwqo=', 'wqtJw4sBZW/DvA/CrHU=', 'UBI2wph7', 'XHVaDsOt', 'w4TDuETDk8OuwoFBwqQ=', 'w5jCtRhZQMKnwoM=', 'FBY0wrIi', 'w5nDrkLCth0=', 'w6gjwo9qZMKOBA==', 'wqLDk0TDqsKXR2Bdw4DClVs=', 'w6clI8Kdag==', 'w5PDsWEXw6rCiQ==', 'Snh1IGfDqg==', 'WX5kw4Y=', 'w7YBUys6w7c=', 'JMKqw5HCjA==', 'NhdXJMKi', 'w4gbwokMZg==', 'aisiw5nCncK1UR7Cvg==', 'w7zCu0zCoCUrw5tDwoxX', 'w7bCt2/CnnJmVT0D', 'SW9wPWbDvMOM', 'wr/DhkfDtsOfQ2E=', 'WCMhwrIxU8O1w67DlsOXVQ==', 'wrnDsmHDokpTJMK5w7BS', 'wpjCpwrCkcKnw4k=', 'LMO4SsO7wrF6', 'wrvDhg4=', 'IglZJw==', 'w44Awp8Z', 'wozDuyA=', 'wpHCiMOpw6/Csw==', 'I8KsSg==', 'T1d+CsO3', 'QFJhDA==', 'TsKnw58kJA==', 'VGFhOMOb', 'w4jDkm0xw6A=', 'SlJ7HcO5DA==', 'esO0FcObAlQ=', 'wonCo8Oswowsw60q', 'K8Ksw4zCjMO8wpnDk8KsaHfCrFbDm8KLdcKx', 'MsOsT8OnwrBr', 'M8KqXw==', 'wqUpOcOwwpzDrW0rw5U5TQ==', 'w6rCqwnDlMOD', 'w7cywphhVcKT', 'wqxPw4QZb3DDly/CoHUq', 'wqbDo2PDqUU=', 'wqLDrXQ=', 'wpvDoCY=', 'MMOPXsO/wpM=', 'w6k6EcKW', 'LMKKJMOFwoYZJ1I=', 'w4kwwotraQ==', 'w5NcThLCjA==', 'wrzCuMODwoAP', 'SGtiw5HDkzA=', 'wovDlF7DiQfDsQ==', 'wrLDq2XDoHJd', 'QFJkHQ==', 'XMKFw58mK18=', 'w5nCvMOgwoU+', 'wqnDilLDpcOYXGw=', 'LsKqw4zCnA==', 'wrvChsKGwqopwpkbaQ==', 'wpQVwp3Dm8OrCsOVIg==', 'KcO4QMOzwrJ6wq8=', 'XlJwAcOoMzFnNsKbF8OgKsOO', 'QTonw5fCmcK7bg==', 'RyEpw5jCisKTeRnCpcKzw4U+wpov', 'fsO0F8OL', 'wpzCpcOxwpk=', 'McOjWsOg', 'wovCoz7DgcOsbH7Dn8O/YcO9w6cLVMKIeMK0LCFDw6cGwonCgMOVw5FbwpF6woTCmQhFw7Z7w5jCisK2wr8ZwpJNwrvColsDcXDCoXd5aHs=', 'w6ANXygjw7UnXV/ChFY=', 'a8OEB1fCtkvDjGY=', 'ex9RNsKrJsK8JxLCkUg2Y8Oiw6JaSn8Dwpsuw4rDgw==', 'w6TDiUTChwnCvsKWFA==', 'I8KsTsOXG3dGw7QKccONbcKfGkElaQ==', 'IcKsQcOf', 'VcKIw58BIlB+wrw=', 'w4dzNkQJPXrCmDvCkGZALhXCm8OeasOLw47DgUnDs0YKw4nCh8Ki', 'wqElNcOMwoU=', 'w4x3FwIt', 'E8OiRcOBwpo=', 'wr3DscKoCcOH', 'VMOzKcOtAA==', 'w7HCsVXChF8=', 'MRJLNsKlJcK+', 'dCI+wrp2', 'wrTCjcO3w7PChMOcaBRwwo9twrXChMOp', 'fsOrJlnCvw==', 'w4HCpT3DhcOgLWzClsO1bMOhw7FFFsKfeQ==', 'w7gEUw8+', 'w4UEwqxUeA==', 'wp9sw5IZXQ==', 'wrbDnl7CtwzCvcKJAg==', 'w69mEiwP', 'W2V+w4DDmDxvTzwTSQ==', 'w74XwrgYcg==', 'AsOyRBvCvg==', 'RsOQTlPCqw==', 'TWY+', 'D8O5biTCmA==', 'OxvCoA==', 'w64dwpEcXQ==', 'FMKPw5QsOlR1wrtPH0QgwrM6wrgdwpzCi3PDucOuw7TDpMO8w7V8aEnCrwg5BVvDrQ7DoWbCrS/ChsOjASXCmcKe', 'AAzCisKTwq0=', 'wpbDvw1bRMK6w5XCpA==', 'wqfDm8KbEMOD', 'w6TCvsKYJy0=', 'w4kdwpDCuMOkB8OHImcTw7xUNQrChMOawqPDucONIcO9wqMFwrPCqsOawpjCgT0=', 'w6xQw6HDoTg=', 'wrDCh0TCtATCscObWxoQF8KU', 'w4XChhlJbw==', 'wrDCpQzCssKF', 'JiITwpQc', 'wqzCrxnCqcKt', 'wqnCpsOdw7/CoQ==', 'w6fDl1sZw40=', 'w57DncO2w5/DnA==', 'b8OLL1zCiQ==', 'aVtZw6fDuQ==', 'w7EEVsKMQQ==', 'w4rDpnzCoAI=', 'w5XCucOow6jDmw==', 'ExLCvsK2wrk=', 'JcOPThHClA==', 'w5XCtCDDjcOU', 'w7YBUys6w7dJQEvCnlE=', 'wpEYwpjDtMOoDMKLPH1A', 'b37CjcOXwqk=', 'w7fDr8KBBcKcwrjCvsK0Q1Yzw4vDimFPw7DCn0NCesKOH8K+wo1HWsOr', 'w7fDhXcKw7Y=', 'w6BQbgvCrQl5', 'wq/Dt8KqH8O1', 'w7/DncObw5jDmg==', 'w5vDhE7CsCY=', 'w6jChcOlw7LDncOlZA5pw4Q+wrTChsO5wr9jw5pkw6XDhMKFw7Uaw43CsCLDjw9WeCvClA/CgcOqfkfDsg==', 'wpDClMOywoAN', 'woTDiFLDqHo=', 'wr7Dq2DDqHhU', 'wqXCi8O+w6/ClcOpeTdgw49r', 'wp7CvsOrwp8uw7AsR01kw4E=', 'V8KDw5U2K0l5woIHHFQ=', 'wrxIw4Ua', 'wp00wqnDjAPCsxdgCX7DuQ==', 'w4rDqmYcw6vCgg==', 'wq7DjE/DsMOfSH1+w4HClFk=', 'wqh7KcO9wr7DoMKkHQ==', 'LMK8V8OiHw=='];
(function(_0x52df4d, _0x45f31e) {
    var _0x3583c9 = function(_0x19c809) {
        while (--_0x19c809) {
            _0x52df4d['push'](_0x52df4d['shift']());
        }
    };
    _0x3583c9(++_0x45f31e);
}(_kod_0x2daa, 0x15e));
var _kod_0x200f = function(_0x2c7e9a, _0x421767) {
    _0x2c7e9a = _0x2c7e9a - 0x0;
    var _0x2ba105 = _kod_0x2daa[_0x2c7e9a];
    if (_kod_0x200f['PWIxIn'] === undefined) {
        (function() {
            var _0x1ce864;
            try {
                var _0x2c44ab = Function('return\x20(function()\x20' + '{}.constructor(\x22return\x20this\x22)(\x20)' + ');');
                _0x1ce864 = _0x2c44ab();
            } catch (_0x4b8d4d) {
                _0x1ce864 = window;
            }
            var _0x4b1476 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
            _0x1ce864['atob'] || (_0x1ce864['atob'] = function(_0x5a4ac4) {
                var _0x50248b = String(_0x5a4ac4)['replace'](/=+$/, '');
                for (var _0xa79538 = 0x0, _0x5434eb, _0x22a13c, _0x33a599 = 0x0, _0x4e0e0e = ''; _0x22a13c = _0x50248b['charAt'](_0x33a599++);~ _0x22a13c && (_0x5434eb = _0xa79538 % 0x4 ? _0x5434eb * 0x40 + _0x22a13c : _0x22a13c, _0xa79538++ % 0x4) ? _0x4e0e0e += String['fromCharCode'](0xff & _0x5434eb >> (-0x2 * _0xa79538 & 0x6)) : 0x0) {
                    _0x22a13c = _0x4b1476['indexOf'](_0x22a13c);
                }
                return _0x4e0e0e;
            });
        }());
        var _0xca467e = function(_0x2d9de0, _0x340982) {
            var _0x318364 = [],
                _0xf811e2 = 0x0,
                _0x3ac886, _0x2f0907 = '',
                _0x20539f = '';
            _0x2d9de0 = atob(_0x2d9de0);
            for (var _0x3df66e = 0x0, _0x53206d = _0x2d9de0['length']; _0x3df66e < _0x53206d; _0x3df66e++) {
                _0x20539f += '%' + ('00' + _0x2d9de0['charCodeAt'](_0x3df66e)['toString'](0x10))['slice'](-0x2);
            }
            _0x2d9de0 = decodeURIComponent(_0x20539f);
            for (var _0x29f1f1 = 0x0; _0x29f1f1 < 0x100; _0x29f1f1++) {
                _0x318364[_0x29f1f1] = _0x29f1f1;
            }
            for (_0x29f1f1 = 0x0; _0x29f1f1 < 0x100; _0x29f1f1++) {
                _0xf811e2 = (_0xf811e2 + _0x318364[_0x29f1f1] + _0x340982['charCodeAt'](_0x29f1f1 % _0x340982['length'])) % 0x100;
                _0x3ac886 = _0x318364[_0x29f1f1];
                _0x318364[_0x29f1f1] = _0x318364[_0xf811e2];
                _0x318364[_0xf811e2] = _0x3ac886;
            }
            _0x29f1f1 = 0x0;
            _0xf811e2 = 0x0;
            for (var _0x1a2b4b = 0x0; _0x1a2b4b < _0x2d9de0['length']; _0x1a2b4b++) {
                _0x29f1f1 = (_0x29f1f1 + 0x1) % 0x100;
                _0xf811e2 = (_0xf811e2 + _0x318364[_0x29f1f1]) % 0x100;
                _0x3ac886 = _0x318364[_0x29f1f1];
                _0x318364[_0x29f1f1] = _0x318364[_0xf811e2];
                _0x318364[_0xf811e2] = _0x3ac886;
                _0x2f0907 += String['fromCharCode'](_0x2d9de0['charCodeAt'](_0x1a2b4b) ^ _0x318364[(_0x318364[_0x29f1f1] + _0x318364[_0xf811e2]) % 0x100]);
            }
            return _0x2f0907;
        };
        _kod_0x200f['xRvJDR'] = _0xca467e;
        _kod_0x200f['NDFTmv'] = {};
        _kod_0x200f['PWIxIn'] = !! [];
    }
    var _0x5d3384 = _kod_0x200f['NDFTmv'][_0x2c7e9a];
    if (_0x5d3384 === undefined) {
        if (_kod_0x200f['sRecDF'] === undefined) {
            _kod_0x200f['sRecDF'] = !! [];
        }
        _0x2ba105 = _kod_0x200f['xRvJDR'](_0x2ba105, _0x421767);
        _kod_0x200f['NDFTmv'][_0x2c7e9a] = _0x2ba105;
    } else {
        _0x2ba105 = _0x5d3384;
    }
    return _0x2ba105;
};
define(_kod_0x200f('0x0', 'Wk0G'), [], function(_0x138506, _0x5b11da) {
    var _0x49a69a = {};
    _0x49a69a[_kod_0x200f('0x1', 'NTwa')] = function(_0x584f9e, _0x3234e2) {
        return _0x584f9e === _0x3234e2;
    };
    _0x49a69a['hMiCW'] = 'nNppj';
    _0x49a69a[_kod_0x200f('0x2', 'Wk0G')] = function(_0xf7ee45, _0x28ef95) {
        return _0xf7ee45(_0x28ef95);
    };
    _0x49a69a[_kod_0x200f('0x3', 'j90Z')] = function(_0x4b3c61, _0x4a637f) {
        return _0x4b3c61 && _0x4a637f;
    };
    _0x49a69a[_kod_0x200f('0x4', 'sjfR')] = _kod_0x200f('0x5', 'A0ZR');
    _0x49a69a[_kod_0x200f('0x6', 'SNFI')] = _kod_0x200f('0x7', 'pOzi');
    _0x49a69a[_kod_0x200f('0x8', 'c)fP')] = _kod_0x200f('0x9', 'tM4G');
    _0x49a69a[_kod_0x200f('0xa', ']J&I')] = _kod_0x200f('0xb', '20$N');
    _0x49a69a[_kod_0x200f('0xc', '*ub1')] = function(_0x45266d, _0x59dac9) {
        return _0x45266d !== _0x59dac9;
    };
    _0x49a69a[_kod_0x200f('0xd', 'WViS')] = 'goSHU';
    _0x49a69a[_kod_0x200f('0xe', 'WpY(')] = _kod_0x200f('0xf', 'oznb');
    _0x49a69a[_kod_0x200f('0x10', 'Wk0G')] = _kod_0x200f('0x11', 'HLSS');
    _0x49a69a[_kod_0x200f('0x12', 'frhh')] = function(_0x29bb58, _0x3ba88e) {
        return _0x29bb58 != _0x3ba88e;
    };
    _0x49a69a[_kod_0x200f('0x13', 'M*8^')] = 'string';
    _0x49a69a['ibxao'] = function(_0x1cbad4, _0x272772) {
        return _0x1cbad4 + _0x272772;
    };
    _0x49a69a['LSUDB'] = function(_0x11347c, _0x300585) {
        return _0x11347c + _0x300585;
    };
    _0x49a69a[_kod_0x200f('0x14', 'knYV')] = '<ul\x20class=\x22context-menu-list\x20';
    _0x49a69a['XraIG'] = _kod_0x200f('0x15', 'HLSS');
    _0x49a69a[_kod_0x200f('0x16', 'M*8^')] = _kod_0x200f('0x17', '2bKq');
    _0x49a69a[_kod_0x200f('0x18', 'frhh')] = _kod_0x200f('0x19', '!BNj');
    _0x49a69a[_kod_0x200f('0x1a', ')mKX')] = _kod_0x200f('0x1b', 'Pix5');
    _0x49a69a['FDUli'] = function(_0x520955, _0x1cae7b) {
        return _0x520955 + _0x1cae7b;
    };
    _0x49a69a[_kod_0x200f('0x1c', 'sjfR')] = function(_0x3e489f, _0x1c5927) {
        return _0x3e489f + _0x1c5927;
    };
    _0x49a69a[_kod_0x200f('0x1d', 'Ntyp')] = _kod_0x200f('0x1e', 'mfiB');
    _0x49a69a[_kod_0x200f('0x1f', '1R&c')] = _kod_0x200f('0x20', 'oznb');
    _0x49a69a[_kod_0x200f('0x21', 'Pix5')] = function(_0x2ac6fb, _0x5a889b) {
        return _0x2ac6fb(_0x5a889b);
    };
    _0x49a69a[_kod_0x200f('0x22', 'g5gk')] = function(_0x31c8a1, _0x4dae92) {
        return _0x31c8a1 == _0x4dae92;
    };
    _0x49a69a['fuRAT'] = 'xQOId';
    _0x49a69a[_kod_0x200f('0x23', 'x3kH')] = function(_0x1cde8d, _0x20a828) {
        return _0x1cde8d !== _0x20a828;
    };
    _0x49a69a[_kod_0x200f('0x24', 'g5gk')] = function(_0x2f8887, _0x20546e) {
        return _0x2f8887 + _0x20546e;
    };
    _0x49a69a[_kod_0x200f('0x25', 'tM4G')] = function(_0x1cbc32, _0x42c474) {
        return _0x1cbc32 + _0x42c474;
    };
    _0x49a69a[_kod_0x200f('0x26', 'HLLq')] = function(_0x40f071, _0x2a64d3) {
        return _0x40f071 + _0x2a64d3;
    };
    _0x49a69a[_kod_0x200f('0x27', '9pmA')] = _kod_0x200f('0x28', ']J&I');
    _0x49a69a[_kod_0x200f('0x29', 'HLSS')] = _kod_0x200f('0x2a', 'dEVq');
    _0x49a69a[_kod_0x200f('0x2b', 'oznb')] = function(_0xe2941c, _0x3c6ff6) {
        return _0xe2941c >= _0x3c6ff6;
    };
    _0x49a69a[_kod_0x200f('0x2c', 'WCE(')] = function(_0x33fb28, _0x4e2616) {
        return _0x33fb28 !== _0x4e2616;
    };
    _0x49a69a[_kod_0x200f('0x2d', ')mKX')] = _kod_0x200f('0x2e', 'M*8^');
    _0x49a69a[_kod_0x200f('0x2f', '20$N')] = _kod_0x200f('0x30', '*ub1');
    _0x49a69a['gArDg'] = _kod_0x200f('0x31', 'mfiB');
    _0x49a69a[_kod_0x200f('0x32', '%lV(')] = _kod_0x200f('0x33', 'sjfR');
    _0x49a69a['pNMgq'] = 'minus';
    _0x49a69a[_kod_0x200f('0x34', 'HLLq')] = _kod_0x200f('0x35', 'Lroq');
    _0x49a69a[_kod_0x200f('0x36', 'sjfR')] = _kod_0x200f('0x37', '9pmA');
    _0x49a69a[_kod_0x200f('0x38', 'oznb')] = _kod_0x200f('0x39', 'tM4G');
    _0x49a69a[_kod_0x200f('0x3a', 'JewW')] = 'dblclick';
    _0x49a69a[_kod_0x200f('0x3b', 'EJ[2')] = _kod_0x200f('0x3c', 'EJ[2');
    $[_kod_0x200f('0x3d', 'tM4G')] || ($[_kod_0x200f('0x3e', 'JewW')] = {}), $[_kod_0x200f('0x3f', '!BNj')][_kod_0x200f('0x40', 'WpY(')] = function(_0x193d7d, _0x910500, _0x1b7504) {
        _0x193d7d && ($[_kod_0x200f('0x41', '*O7U')][_kod_0x200f('0x42', 'HLLq')](), $(_0x193d7d)[_kod_0x200f('0x41', '*O7U')]({
            'x': _0x910500,
            'y': _0x1b7504
        }));
    }, $[_kod_0x200f('0x43', 'lT&2')][_kod_0x200f('0x44', 'hsw*')] = function() {
        if (_0x49a69a[_kod_0x200f('0x45', '!vw7')](_0x49a69a[_kod_0x200f('0x46', '!BNj')], _kod_0x200f('0x47', 'tM4G'))) {
            var _0x4c75e1 = $['contextMenu'][_kod_0x200f('0x48', '20$N')](_0x138506, _0x5b11da);
            _0x4c75e1 && _0x4c75e1[_kod_0x200f('0x49', '!BNj')]();
        } else {
            var _0x138506 = _0x49a69a['jtQiG']($, _kod_0x200f('0x4a', 'hsw*')),
                _0x5b11da = _0x138506['data'](_kod_0x200f('0x4b', 'knYV'));
            if (_0x49a69a[_kod_0x200f('0x4c', 'A0ZR')](_0x138506, _0x5b11da)) {
                if (_0x49a69a['ppFxs'] !== 'HnPBg') {
                    f[_kod_0x200f('0x4d', ')mKX')](_0x138506, _0x5b11da);
                } else {
                    var _0x3d508e = _0x5b11da['$menu'],
                        _0x1d7e57 = _0x49a69a[_kod_0x200f('0x4e', 'knYV')];
                    _0x3d508e['find'](_kod_0x200f('0x4f', 'SNFI'))[_kod_0x200f('0x50', 'iz#z')](_0x1d7e57), Hook[_kod_0x200f('0x51', 'tM4G')]('rightMenu.show', _0x5b11da['selector'], _0x138506, _0x3d508e), Hook[_kod_0x200f('0x52', 'Wk0G')](_0x49a69a[_kod_0x200f('0x53', '20$N')] + _0x5b11da[_kod_0x200f('0x54', 'dEVq')], _0x138506, _0x3d508e);
                }
            }
        }
    }, $[_kod_0x200f('0x55', 'PpGA')][_kod_0x200f('0x56', 'x3kH')] = function() {
        if (_0x49a69a['jlaHk'](_0x49a69a[_kod_0x200f('0x57', '20$N')], 'kEAFJ')) {
            return 0x0 == $(_kod_0x200f('0x58', 'tM4G'))[_kod_0x200f('0x59', 'SNFI')] ? !0x1 : !0x0;
        } else {
            $['contextMenu'][_kod_0x200f('0x5a', 'g5gk')](_0x138506, _0x5b11da, _0x49a69a[_kod_0x200f('0x5b', '3Vxz')], !0x0);
        }
    }, $[_kod_0x200f('0x5c', '1R&c')]['hidden'] = function() {
        _0x49a69a['jtQiG']($, _kod_0x200f('0x5d', 'Pix5'))['filter'](_0x49a69a[_kod_0x200f('0x5e', 'sjfR')])['filter'](_kod_0x200f('0x5f', 'WHC]'))[_kod_0x200f('0x60', 'g5gk')](_kod_0x200f('0x61', 'PpGA'));
    }, $[_kod_0x200f('0x62', 'Pix5')]['menuItem'] = function(_0xcc7eea, _0x3a776e) {
        if (_kod_0x200f('0x63', 'HLSS') === _kod_0x200f('0x64', '%lV(')) {
            var _0x4a837d = $[_kod_0x200f('0x65', '9pmA')]['menuItem'](_0xcc7eea, _0x3a776e);
            _0x4a837d && (_0x101a8e ? _0x4a837d[_kod_0x200f('0x66', 'j90Z')](_0x3997aa) : _0x4a837d[_kod_0x200f('0x67', 'Pix5')](_0x3997aa));
        } else {
            var _0x3997aa, _0x101a8e = $['contextMenu'][_kod_0x200f('0x68', 'frhh')];
            for (var _0x486bef in _0x101a8e) if (_0x101a8e[_0x486bef][_kod_0x200f('0x69', '*O7U')] == _0xcc7eea || _0x101a8e[_0x486bef][_kod_0x200f('0x6a', 'j90Z')] == _0x49a69a[_kod_0x200f('0x6b', 'mfiB')]('.', _0xcc7eea) || _0x49a69a['YpeLF'](_0x101a8e[_0x486bef][_kod_0x200f('0x6c', 'SNFI')], '#' + _0xcc7eea)) {
                    _0xcc7eea = _0x101a8e[_0x486bef][_kod_0x200f('0x6d', 'knYV')], _0x3997aa = _0x101a8e[_0x486bef];
                    break;
                }
            if (_0x49a69a[_kod_0x200f('0x6e', 'yhTY')](void 0x0, _0x3a776e)) return _0x3997aa['items'];
            if (!_0x3997aa || !_0x3997aa[_kod_0x200f('0x6f', 'NTwa')]) return !0x1;
            'string' == typeof _0x3a776e && (_0x3a776e = [_0x3a776e]);
            for (var _0x3af6df = !0x1, _0xbfe562 = 0x0; _0xbfe562 < _0x3a776e['length']; _0xbfe562++) {
                if ('kHavi' === 'jliCz') {
                    var _0x24916f = _kod_0x200f('0x70', 'Lroq')['split']('|'),
                        _0x1b5593 = 0x0;
                    while ( !! []) {
                        switch (_0x24916f[_0x1b5593++]) {
                            case '0':
                                var _0x13596e = _0x10a375['parent'](_kod_0x200f('0x71', 'Lroq'))[_kod_0x200f('0x72', 'JewW')](_0x49a69a[_kod_0x200f('0x73', ')mKX')]);
                                continue;
                            case '1':
                                if (_0x13596e && (_0x13596e[_kod_0x200f('0x74', '!BNj')] || (_0x13596e[_kod_0x200f('0x75', 'g5gk')] = {}), _0x13596e['items'][_0x3a776e] = _0x4fa67b), _0x49a69a[_kod_0x200f('0x12', 'frhh')](_0x49a69a['idsli'], typeof _0x3af6df) && (_0xcc7eea[_kod_0x200f('0x76', 'knYV')] || (_0xcc7eea[_kod_0x200f('0x77', 'pOzi')] = {}), _0xcc7eea[_kod_0x200f('0x78', 'kevY')][_0x3a776e] = _0x4fa67b, _0x486bef[_kod_0x200f('0x79', 'tM4G')][_0x3a776e] = _0x4fa67b, _0x486bef[_kod_0x200f('0x7a', 'Ntyp')][_0x3a776e] = function(_0x3e2c1c, _0x57901f) {
                                    _0x3af6df[_kod_0x200f('0x7b', '3Vxz')](_0x3e2c1c, _0x57901f);
                                }, _0x3af6df[_kod_0x200f('0x7c', 'ieKP')] && (_0x486bef['accesskeys'][_0x3af6df[_kod_0x200f('0x7d', 'WCE(')]] = _0x4fa67b), _0x3af6df['items'])) {
                                    var _0x45db71 = _0x3a776e + _kod_0x200f('0x7e', 'Lroq'),
                                        _0x67aa8 = _0x49a69a[_kod_0x200f('0x7f', 'GOb%')](_0x49a69a[_kod_0x200f('0x80', 'frhh')](_0x49a69a[_kod_0x200f('0x81', 'sjfR')], _0x3a776e) + _kod_0x200f('0x82', 'frhh'), _0x45db71) + _kod_0x200f('0x83', 'ieKP');
                                    $(_0x67aa8)['appendTo'](_0x10a375), _0x4fa67b[_kod_0x200f('0x84', 'sjfR')] = _0x10a375[_kod_0x200f('0x85', 'c)fP')]('ul.' + _0x3a776e), _0x4fa67b[_kod_0x200f('0x86', 'WHC]')] = null, _0x4fa67b['appendTo'] = _0x4fa67b[_kod_0x200f('0x87', 'WCE(')], _0x4fa67b[_kod_0x200f('0x88', 'Wk0G')] = _kod_0x200f('0x89', 'GOb%'), _0x10a375[_kod_0x200f('0x8a', 'M*8^')](_0x49a69a[_kod_0x200f('0x8b', 'Ntyp')], _0x4fa67b)[_kod_0x200f('0x8c', 'g5gk')](_kod_0x200f('0x8d', '*O7U')), _0x10a375['find'](_0x49a69a[_kod_0x200f('0x8e', 'Wk0G')](_0x49a69a[_kod_0x200f('0x8f', 'iz#z')], _0x3a776e))[_kod_0x200f('0x90', 'mfiB')]({
                                        'contextMenuRoot': _0x486bef,
                                        'contextMenu': _0x4fa67b
                                    }), _0x10a375[_kod_0x200f('0x91', 'sjfR')](_0x49a69a[_kod_0x200f('0x92', '%lV(')](_kod_0x200f('0x93', '5$FK'), _0x45db71))[_kod_0x200f('0x94', 'hsw*')]({
                                        'contextMenuRoot': _0x486bef,
                                        'contextMenuKey': _0x45db71,
                                        'contextMenu': _0x4fa67b
                                    }), _0x4fa67b[_kod_0x200f('0x95', '9pmA')] || (_0x4fa67b[_kod_0x200f('0x74', '!BNj')] = {}), _0x4fa67b['items'][_0x45db71] = {
                                        '$input': null,
                                        '$label': null,
                                        'icon': '',
                                        'name': '',
                                        '_name': '',
                                        '$node': _0x10a375[_kod_0x200f('0x96', 'NTwa')](_0x49a69a[_kod_0x200f('0x97', '5$FK')] + _0x45db71)
                                    }, i(_0x4fa67b, _0x3af6df[_kod_0x200f('0x98', 'JewW')], '.' + _0x45db71);
                                }
                                continue;
                            case '2':
                                _0x10a375[_kod_0x200f('0x99', ')mKX')]({
                                    'contextMenu': _0x13596e,
                                    'contextMenuKey': _0x3a776e,
                                    'contextMenuRoot': _0x486bef
                                });
                                continue;
                            case '3':
                                0x0 == _0x2ce4dc['length'] && _0xcc7eea['commands'][_0x4429bc] && (_0x2ce4dc = _0xcc7eea['commands'][_0x4429bc][_kod_0x200f('0x9a', 'iz#z')]), 0x0 == _0x2ce4dc['length'] && (_0x2ce4dc = _0xcc7eea[_kod_0x200f('0x9b', 'hsw*')][_kod_0x200f('0x9c', 'Lroq')]()[_kod_0x200f('0x9d', 'HLLq')]()), _0x3997aa ? _0x2ce4dc[_kod_0x200f('0x9e', ']J&I')](_0x10a375) : _0x101a8e && _0x2ce4dc[_kod_0x200f('0x9f', 'M*8^')](_0x10a375);
                                continue;
                            case '4':
                                if (_kod_0x200f('0xa0', 'Pix5') == typeof _0x3af6df) var _0x67aa8 = _kod_0x200f('0xa1', 'dEVq') + _0x2a48c1 + _0x49a69a['Aizwk'];
                                else {
                                    var _0x4eb1f1 = _0x3af6df['name'];
                                    _0x3af6df[_kod_0x200f('0xa2', 'WHC]')] && (_0x4eb1f1 += _0x49a69a[_kod_0x200f('0xa3', 'Ntyp')](_kod_0x200f('0xa4', 'DSK9'), _0x3af6df['accesskey']) + _0x49a69a['vqEHc']);
                                    var _0x67aa8 = _0x49a69a[_kod_0x200f('0xa5', 'oznb')](_0x49a69a[_kod_0x200f('0xa6', 'JewW')](_0x49a69a['jZuaw'](_0x49a69a['mqeVL'], _0x2a48c1), '\x22>') + _0x1dd7f2(_0x3af6df[_kod_0x200f('0xa7', ')mKX')]) + _kod_0x200f('0xa8', '*O7U'), _0x4eb1f1) + _0x49a69a[_kod_0x200f('0xa9', 'j90Z')];
                                }
                                continue;
                            case '5':
                                var _0x10a375 = _0x49a69a[_kod_0x200f('0xaa', 'x3kH')]($, _0x67aa8)[_kod_0x200f('0xab', 'g5gk')](),
                                    _0x4429bc = _0x3997aa || _0x101a8e,
                                    _0x2ce4dc = _0xcc7eea['$menu'][_kod_0x200f('0xac', 'dEVq')](_0x4429bc)['first']();
                                continue;
                            case '6':
                                _0x3af6df[_kod_0x200f('0xad', '20$N')] = _0x3af6df[_kod_0x200f('0xae', 'sjfR')] || '';
                                continue;
                            case '7':
                                var _0x2a48c1 = _0x49a69a['jZuaw'](_0x3a776e + '\x20', _0x3af6df[_kod_0x200f('0xaf', 'JewW')]);
                                continue;
                            case '8':
                                var _0x4fa67b = {};
                                _0x4fa67b['$input'] = null;
                                _0x4fa67b[_kod_0x200f('0xb0', 'Ntyp')] = null;
                                _0x4fa67b['accesskey'] = _0x3af6df.accesskey;
                                _0x4fa67b[_kod_0x200f('0xb1', 'pOzi')] = _0x3af6df.className;
                                _0x4fa67b[_kod_0x200f('0xb2', '2bKq')] = _0x3af6df.icon;
                                _0x4fa67b[_kod_0x200f('0xb3', 'JewW')] = _0x3af6df.name;
                                _0x4fa67b['_name'] = _0x4eb1f1;
                                _0x4fa67b[_kod_0x200f('0xb4', 'tM4G')] = _0x10a375;
                                continue;
                        }
                        break;
                    }
                } else {
                    var _0x1dd7f2 = _0x3997aa[_kod_0x200f('0xb5', 'ieKP')][_0x3a776e[_0xbfe562]] && _0x3997aa[_kod_0x200f('0xb6', 'mfiB')][_0x3a776e[_0xbfe562]]['$node'];
                    _0x1dd7f2 && 0x0 != _0x1dd7f2[_kod_0x200f('0xb7', '5$FK')] && (_0x3af6df = _0x3af6df ? _0x3af6df[_kod_0x200f('0xb8', 'hsw*')](_0x1dd7f2) : _0x1dd7f2);
                }
            }
            return _0x3af6df;
        }
    }, $[_kod_0x200f('0xb9', 'SNFI')][_kod_0x200f('0xba', '5$FK')] = function(_0x22d630, _0x3b351e, _0x4639b9, _0x1fd6f2) {
        var _0x42586b = $[_kod_0x200f('0x65', '9pmA')][_kod_0x200f('0x48', '20$N')](_0x22d630, _0x3b351e);
        _0x42586b && (_0x1fd6f2 ? _0x42586b[_kod_0x200f('0xbb', 'HLLq')](_0x4639b9) : _0x42586b['removeClass'](_0x4639b9));
    }, $['contextMenu'][_kod_0x200f('0xbc', 'iz#z')] = function(_0x535a73, _0x58d4c0) {
        $[_kod_0x200f('0xbd', 'yhTY')][_kod_0x200f('0xbe', 'ieKP')](_0x535a73, _0x58d4c0, _kod_0x200f('0xbf', '*ub1'), !0x0);
    }, $[_kod_0x200f('0xbd', 'yhTY')]['menuItemEnable'] = function(_0x4cbe42, _0x5fe163) {
        $[_kod_0x200f('0xc0', 'oznb')][_kod_0x200f('0xc1', 'oznb')](_0x4cbe42, _0x5fe163, _0x49a69a[_kod_0x200f('0xc2', '!BNj')], !0x1);
    }, $[_kod_0x200f('0xc3', 'WCE(')][_kod_0x200f('0xc4', 'PpGA')] = function(_0x4a61ce, _0x5984be) {
        var _0x47363c = {};
        _0x47363c['sIUUk'] = function(_0x2dc504, _0x17b3cf) {
            return _0x2dc504 >= _0x17b3cf;
        };
        if (_0x49a69a[_kod_0x200f('0xc5', 'oznb')] === 'xQOId') {
            $['contextMenu']['menuItemClass'](_0x4a61ce, _0x5984be, _kod_0x200f('0xc6', 'WViS'), !0x0);
        } else {
            for (var _0x32eff6 in _0x5984be) f[_kod_0x200f('0xc7', 'mfiB')]({
                    'key': _0x32eff6,
                    'value': _0x5984be[_0x32eff6]
                });
            for (var _0x3d8629 = f[_kod_0x200f('0xc8', 'Wk0G')] - 0x1; _0x47363c[_kod_0x200f('0xc9', 'WCE(')](_0x3d8629, 0x0); _0x3d8629--) g[f[_0x3d8629][_kod_0x200f('0xca', 'NTwa')]] = f[_0x3d8629][_kod_0x200f('0xcb', 'NTwa')];
        }
    }, $[_kod_0x200f('0xcc', 'frhh')][_kod_0x200f('0xcd', 'WHC]')] = function(_0x5f26c2, _0x301ec2) {
        $[_kod_0x200f('0x65', '9pmA')][_kod_0x200f('0xce', 'tM4G')](_0x5f26c2, _0x301ec2, 'hidden', !0x1);
    }, $[_kod_0x200f('0xcf', 'NTwa')][_kod_0x200f('0xd0', 'iz#z')] = function(_0x5c509f, _0x50b119) {
        var _0x4c8915 = $[_kod_0x200f('0x3e', 'JewW')][_kod_0x200f('0xd1', ']J&I')](_0x5c509f, _0x50b119);
        _0x4c8915 && _0x4c8915[_kod_0x200f('0xd2', 'DSK9')]();
    }, $['contextMenu'][_kod_0x200f('0xd3', 'lT&2')] = function(_0x6da12b, _0x4c95e6, _0x27417c, _0x1c9a9a) {
        var _0x2a1b4c = {};
        _0x2a1b4c['xWeHQ'] = function(_0xcc8dc7, _0x660b98) {
            return _0xcc8dc7 + _0x660b98;
        };
        _0x2a1b4c['WUcwe'] = _0x49a69a.mqeVL;
        _0x2a1b4c[_kod_0x200f('0xd4', 'kevY')] = '<span>';
        _0x2a1b4c[_kod_0x200f('0xd5', 'oznb')] = _0x49a69a.GFiZG;
        _0x2a1b4c['znqJE'] = function(_0x51b271, _0x13641a) {
            return _0x51b271(_0x13641a);
        };
        if (_0x49a69a[_kod_0x200f('0xd6', 'JewW')]('pxplF', _kod_0x200f('0xd7', 'j90Z'))) {
            var _0x5dde0b = !0x1,
                _0x13aa0e = $[_kod_0x200f('0xd8', 'Ntyp')][_kod_0x200f('0xd9', '1R&c')];
            for (var _0x4353ec in _0x13aa0e) if (_0x13aa0e[_0x4353ec][_kod_0x200f('0xda', 'g5gk')] == _0x4c95e6) {
                    if ('tyHoN' === _kod_0x200f('0xdb', 'Lroq')) {
                        _0x5dde0b = _0x13aa0e[_0x4353ec];
                        break;
                    } else {
                        var _0x3bb960 = _0x13aa0e['name'];
                        _0x13aa0e[_kod_0x200f('0xdc', 'WpY(')] && (_0x3bb960 += _0x2a1b4c[_kod_0x200f('0xdd', ']J&I')]('(<span\x20class=\x22context-menu-accesskey\x22>' + _0x13aa0e[_kod_0x200f('0xde', '9pmA')], '</span>)'));
                        var _0x453006 = _0x2a1b4c['xWeHQ'](_0x2a1b4c[_kod_0x200f('0xdf', 'HLSS')], _0x4353ec) + '\x22>' + _0x3d8992(_0x13aa0e['icon']) + _0x2a1b4c['wbmQG'] + _0x3bb960 + _0x2a1b4c[_kod_0x200f('0xe0', ')mKX')];
                    }
                }
            if (_0x5dde0b && _0x6da12b) {
                if (_0x49a69a[_kod_0x200f('0xe1', '5$FK')] !== 'udQjF') {
                    var _0x3d8992 = function(_0x583718) {
                        return _0x583718 ? _0x49a69a['grRTF'](-0x1, _0x583718['indexOf']('/')) ? '<i\x20class=\x22font-icon\x22><img\x20draggable=\x22false\x22\x20class=\x22x-item-file\x22\x20ondragstart=\x22return\x20false;\x22\x20src=\x22' + _0x583718 + _kod_0x200f('0xe2', 'g5gk') : _0x49a69a['EzpWn']('<i\x20class=\x22font-icon\x20', _0x583718) + '\x22></i>' : '';
                    }, _0x57c812 = function(_0x31ea6c, _0x24b05b, _0xc724fa, _0x1da99f) {
                            var _0x54edf9 = {};
                            _0x54edf9[_kod_0x200f('0xe3', 'oznb')] = function(_0x40eaa3, _0x51fd33) {
                                return _0x40eaa3(_0x51fd33);
                            };
                            _0x54edf9[_kod_0x200f('0xe4', 'M*8^')] = 'osOUR';
                            _0x54edf9[_kod_0x200f('0xe5', 'WCE(')] = function(_0x481f03, _0x3316ed) {
                                return _0x49a69a.oBMdQ(_0x481f03, _0x3316ed);
                            };
                            _0x54edf9['pXWnX'] = _kod_0x200f('0xe6', 'WHC]');
                            _0x54edf9[_kod_0x200f('0xe7', 'DSK9')] = function(_0x2832e1, _0x4644d8) {
                                return _0x2832e1 + _0x4644d8;
                            };
                            _0x54edf9[_kod_0x200f('0xe8', 'Wk0G')] = _kod_0x200f('0xe9', '!BNj');
                            _0x54edf9[_kod_0x200f('0xea', '!BNj')] = _kod_0x200f('0xeb', 'mfiB');
                            _0x54edf9[_kod_0x200f('0xec', 'WpY(')] = _0x49a69a.idsli;
                            _0x54edf9[_kod_0x200f('0xed', 'WpY(')] = function(_0x3bbea2, _0x139fc7) {
                                return _0x49a69a.ETYaC(_0x3bbea2, _0x139fc7);
                            };
                            _0x54edf9[_kod_0x200f('0xee', 'DSK9')] = _kod_0x200f('0xef', '*ub1');
                            _0x54edf9[_kod_0x200f('0xf0', 'A0ZR')] = _kod_0x200f('0xf1', 'EJ[2');
                            _0x54edf9[_kod_0x200f('0xf2', 'EJ[2')] = function(_0x1540f8, _0x51bc1c) {
                                return _0x1540f8(_0x51bc1c);
                            };
                            _0x54edf9['XwlVB'] = _0x49a69a.IeTGe;
                            var _0x13aa0e = [],
                                _0x4353ec = {};
                            if (_0xc724fa) {
                                if (_0x49a69a[_kod_0x200f('0xf3', 'WCE(')] === _0x49a69a[_kod_0x200f('0xf4', 'c)fP')]) {
                                    $[_kod_0x200f('0xf5', 'hsw*')][_kod_0x200f('0xf6', 'pOzi')](_0x31ea6c, _0x24b05b, _kod_0x200f('0xf7', '2bKq'), !0x1);
                                } else {
                                    for (var _0x14f1ed in _0x24b05b) _0x13aa0e[_kod_0x200f('0xf8', 'hsw*')]({
                                            'key': _0x14f1ed,
                                            'value': _0x24b05b[_0x14f1ed]
                                        });
                                    for (var _0x2ea8e1 = _0x13aa0e[_kod_0x200f('0x59', 'SNFI')] - 0x1; _0x49a69a['FNKdg'](_0x2ea8e1, 0x0); _0x2ea8e1--) _0x4353ec[_0x13aa0e[_0x2ea8e1][_kod_0x200f('0xf9', 'GOb%')]] = _0x13aa0e[_0x2ea8e1][_kod_0x200f('0xfa', '1R&c')];
                                }
                            } else _0x4353ec = _0x24b05b;
                            $[_kod_0x200f('0xfb', 'tM4G')](_0x4353ec, function(_0x57c728, _0x2485ed) {
                                if (_0x54edf9[_kod_0x200f('0xfc', 'SNFI')] === _kod_0x200f('0xfd', 'DSK9')) {
                                    _0x2485ed[_kod_0x200f('0xfe', 'NTwa')] = _0x2485ed['className'] || '';
                                    var _0x4353ec = _0x54edf9['DskrX'](_0x57c728, '\x20') + _0x2485ed['className'];
                                    if ('string' == typeof _0x2485ed) var _0x14f1ed = '<li\x20class=\x22context-menu-item\x20' + _0x4353ec + _0x54edf9[_kod_0x200f('0xff', 'hsw*')];
                                    else {
                                        if (_kod_0x200f('0x100', 'ieKP') === _kod_0x200f('0x101', '3Vxz')) {
                                            var _0x2ea8e1 = _0x2485ed[_kod_0x200f('0x102', 'knYV')];
                                            _0x2485ed[_kod_0x200f('0x103', '2bKq')] && (_0x2ea8e1 += _0x54edf9[_kod_0x200f('0x104', 'Lroq')](_0x54edf9[_kod_0x200f('0x105', 'SNFI')]('(<span\x20class=\x22context-menu-accesskey\x22>', _0x2485ed['accesskey']), _kod_0x200f('0x106', 'NTwa')));
                                            var _0x14f1ed = _0x54edf9[_kod_0x200f('0x107', 'Wk0G')](_0x54edf9[_kod_0x200f('0x108', 'NTwa')](_0x54edf9[_kod_0x200f('0x109', 'dEVq')], _0x4353ec) + '\x22>' + _0x3d8992(_0x2485ed['icon']), _kod_0x200f('0x10a', 'kevY')) + _0x2ea8e1 + '</span></li>';
                                        } else {
                                            $[_kod_0x200f('0x10b', '!vw7')][_kod_0x200f('0xba', '5$FK')](_0x31ea6c, _0x57c728, _kod_0x200f('0x10c', 'JewW'), !0x1);
                                        }
                                    }
                                    var _0x329960 = _0x54edf9[_kod_0x200f('0xe3', 'oznb')]($, _0x14f1ed)[_kod_0x200f('0x10d', '%lV(')](),
                                        _0x1696c3 = _0xc724fa || _0x1da99f,
                                        _0x929431 = _0x31ea6c[_kod_0x200f('0x10e', 'frhh')]['find'](_0x1696c3)[_kod_0x200f('0x10f', 'NTwa')]();
                                    0x0 == _0x929431['length'] && _0x31ea6c[_kod_0x200f('0x110', 'SNFI')][_0x1696c3] && (_0x929431 = _0x31ea6c[_kod_0x200f('0x111', 'EJ[2')][_0x1696c3][_kod_0x200f('0x112', '!vw7')]), 0x0 == _0x929431['length'] && (_0x929431 = _0x31ea6c['$menu'][_kod_0x200f('0x113', 'WCE(')]()['last']()), _0xc724fa ? _0x929431[_kod_0x200f('0x114', 'dEVq')](_0x329960) : _0x1da99f && _0x929431['before'](_0x329960);
                                    var _0x3b1fd5 = _0x329960['parent'](_0x54edf9[_kod_0x200f('0x115', 'sjfR')])['data'](_kod_0x200f('0x11', 'HLSS'));
                                    _0x329960[_kod_0x200f('0x116', 'A0ZR')]({
                                        'contextMenu': _0x3b1fd5,
                                        'contextMenuKey': _0x57c728,
                                        'contextMenuRoot': _0x5dde0b
                                    });
                                    var _0x1a9b54 = {};
                                    _0x1a9b54[_kod_0x200f('0x117', '!vw7')] = null;
                                    _0x1a9b54[_kod_0x200f('0x118', 'M*8^')] = null;
                                    _0x1a9b54[_kod_0x200f('0x119', 'c)fP')] = _0x2485ed.accesskey;
                                    _0x1a9b54[_kod_0x200f('0x11a', 'Wk0G')] = _0x2485ed.className;
                                    _0x1a9b54[_kod_0x200f('0x11b', 'Wk0G')] = _0x2485ed.icon;
                                    _0x1a9b54[_kod_0x200f('0x11c', '%lV(')] = _0x2485ed.name;
                                    _0x1a9b54[_kod_0x200f('0x11d', 'Ntyp')] = _0x2ea8e1;
                                    _0x1a9b54[_kod_0x200f('0x11e', '5$FK')] = _0x329960;
                                    if (_0x3b1fd5 && (_0x3b1fd5[_kod_0x200f('0x11f', 'SNFI')] || (_0x3b1fd5[_kod_0x200f('0x120', 'frhh')] = {}), _0x3b1fd5['items'][_0x57c728] = _0x1a9b54), _0x54edf9['GVQPw'] != typeof _0x2485ed && (_0x31ea6c['commands'] || (_0x31ea6c['commands'] = {}), _0x31ea6c[_kod_0x200f('0x121', 'oznb')][_0x57c728] = _0x1a9b54, _0x5dde0b[_kod_0x200f('0x122', ']J&I')][_0x57c728] = _0x1a9b54, _0x5dde0b[_kod_0x200f('0x123', 'x3kH')][_0x57c728] = function(_0x584acd, _0x2f9bd7) {
                                        _0x2485ed[_kod_0x200f('0x124', 'SNFI')](_0x584acd, _0x2f9bd7);
                                    }, _0x2485ed[_kod_0x200f('0x125', 'lT&2')] && (_0x5dde0b[_kod_0x200f('0x126', 'dEVq')][_0x2485ed['accesskey']] = _0x1a9b54), _0x2485ed[_kod_0x200f('0x127', '%lV(')])) {
                                        var _0x46ed07 = _0x54edf9['dCNTL'](_0x57c728, _kod_0x200f('0x128', '3Vxz')),
                                            _0x14f1ed = _0x54edf9[_kod_0x200f('0x129', 'SNFI')](_0x54edf9[_kod_0x200f('0x12a', 'Wk0G')]('<ul\x20class=\x22context-menu-list\x20', _0x57c728) + _0x54edf9[_kod_0x200f('0x12b', ']J&I')], _0x46ed07) + _0x54edf9['fHDbe'];
                                        _0x54edf9[_kod_0x200f('0x12c', 'HLLq')]($, _0x14f1ed)[_kod_0x200f('0x12d', 'SNFI')](_0x329960), _0x1a9b54['$menu'] = _0x329960[_kod_0x200f('0x12e', 'oznb')]('ul.' + _0x57c728), _0x1a9b54['callback'] = null, _0x1a9b54[_kod_0x200f('0x12f', 'frhh')] = _0x1a9b54[_kod_0x200f('0x130', 'A0ZR')], _0x1a9b54[_kod_0x200f('0x131', 'dEVq')] = 'sub', _0x329960[_kod_0x200f('0x8a', 'M*8^')](_0x54edf9[_kod_0x200f('0x132', 'lT&2')], _0x1a9b54)[_kod_0x200f('0x133', 'EJ[2')]('context-menu-submenu'), _0x329960[_kod_0x200f('0x134', 'HLSS')](_kod_0x200f('0x135', 'hsw*') + _0x57c728)[_kod_0x200f('0x136', 'SNFI')]({
                                            'contextMenuRoot': _0x5dde0b,
                                            'contextMenu': _0x1a9b54
                                        }), _0x329960['find'](_kod_0x200f('0x137', 'c)fP') + _0x46ed07)[_kod_0x200f('0x138', '*ub1')]({
                                            'contextMenuRoot': _0x5dde0b,
                                            'contextMenuKey': _0x46ed07,
                                            'contextMenu': _0x1a9b54
                                        }), _0x1a9b54[_kod_0x200f('0x98', 'JewW')] || (_0x1a9b54[_kod_0x200f('0x75', 'g5gk')] = {}), _0x1a9b54['items'][_0x46ed07] = {
                                            '$input': null,
                                            '$label': null,
                                            'icon': '',
                                            'name': '',
                                            '_name': '',
                                            '$node': _0x329960[_kod_0x200f('0x139', 'WHC]')](_kod_0x200f('0x13a', 'EJ[2') + _0x46ed07)
                                        }, _0x57c812(_0x1a9b54, _0x2485ed[_kod_0x200f('0x74', '!BNj')], '.' + _0x46ed07);
                                    }
                                } else {
                                    var _0x302f32 = _0x54edf9[_kod_0x200f('0x13b', 'yhTY')]($, this)[_kod_0x200f('0x13c', 'M*8^')]();
                                    _0x302f32[_kod_0x200f('0x13d', 'GOb%')] += _0x54edf9[_kod_0x200f('0x13e', 'Lroq')]($, this)[_kod_0x200f('0x13f', 'PpGA')](), $(this)[_kod_0x200f('0x140', 'frhh')]()[_kod_0x200f('0x141', 'pOzi')]()[_kod_0x200f('0x142', 'Wk0G')]({
                                        'x': _0x31ea6c[_kod_0x200f('0x143', 'mfiB')],
                                        'y': _0x302f32['top']
                                    });
                                }
                            });
                        };
                    _0x57c812(_0x5dde0b, _0x6da12b, _0x27417c, _0x1c9a9a);
                } else {
                    _0x6da12b && ($[_kod_0x200f('0x144', 'kevY')][_kod_0x200f('0x145', '*ub1')](), _0x2a1b4c[_kod_0x200f('0x146', 'knYV')]($, _0x6da12b)[_kod_0x200f('0x55', 'PpGA')]({
                        'x': _0x4c95e6,
                        'y': _0x27417c
                    }));
                }
            }
        } else {
            $[_kod_0x200f('0x3d', 'tM4G')][_kod_0x200f('0x147', 'kevY')](_0x6da12b, _0x4c95e6, _kod_0x200f('0x148', 'DSK9'), !0x0);
        }
    };
    var _0x1167f4 = function() {
        var _0x3a181e = {};
        _0x3a181e[_kod_0x200f('0x149', 'DSK9')] = _0x49a69a.pxniV;
        _0x3a181e['gobgP'] = _0x49a69a.gArDg;
        _0x3a181e['rtqJu'] = _0x49a69a.PLxtW;
        _0x3a181e[_kod_0x200f('0x14a', '*O7U')] = _0x49a69a.HkihK;
        _0x3a181e[_kod_0x200f('0x14b', '1R&c')] = function(_0x26338c, _0x580353) {
            return _0x49a69a.kyxYk(_0x26338c, _0x580353);
        };
        _0x3a181e['OgGpA'] = function(_0x58cdac, _0x108d09) {
            return _0x58cdac(_0x108d09);
        };
        _0x3a181e[_kod_0x200f('0x14c', 'HLLq')] = function(_0x2344da, _0xcaeace) {
            return _0x49a69a.ETYaC(_0x2344da, _0xcaeace);
        };
        return $(_kod_0x200f('0x14d', 'M*8^'))[_kod_0x200f('0x14e', 'g5gk')](_kod_0x200f('0x14f', 'Ntyp')), 'function' != typeof $['contextMenu'] ? console['info']('$.contextMenu\x20is\x20not\x20function!') : ($[_kod_0x200f('0x3f', '!BNj')]({
            'zIndex': 0x270f,
            'selector': _kod_0x200f('0x150', 'NTwa'),
            'items': {
                'dialog-quit': {
                    'name': LNG[_kod_0x200f('0x151', '!vw7')],
                    'className': _kod_0x200f('0x152', 'mfiB'),
                    'icon': 'remove',
                    'accesskey': 'q'
                },
                'dialog-max': {
                    'name': LNG['dialog_max'],
                    'className': 'dialog-max',
                    'icon': 'resize-full',
                    'accesskey': 'a'
                },
                'dialog-min': {
                    'name': LNG[_kod_0x200f('0x153', 'WpY(')],
                    'className': _0x49a69a[_kod_0x200f('0x154', 'c)fP')],
                    'icon': _0x49a69a[_kod_0x200f('0x155', '5$FK')],
                    'accesskey': 'i'
                },
                'sep1': _kod_0x200f('0x156', 'g5gk'),
                'refresh': {
                    'name': LNG[_kod_0x200f('0x157', 'Pix5')],
                    'className': _0x49a69a[_kod_0x200f('0x158', 'x3kH')],
                    'icon': _0x49a69a[_kod_0x200f('0x159', 'oznb')],
                    'accesskey': 'r'
                },
                'open-window': {
                    'name': LNG[_kod_0x200f('0x15a', 'WViS')],
                    'className': _kod_0x200f('0x15b', 'lT&2'),
                    'icon': _0x49a69a[_kod_0x200f('0x15c', 'yhTY')],
                    'accesskey': 'b'
                },
                'qrcode': {
                    'name': LNG['qrcode'],
                    'className': _kod_0x200f('0x15d', 'HLLq'),
                    'icon': _kod_0x200f('0x15e', 'iz#z'),
                    'accesskey': 'c'
                }
            },
            'callback': function(_0x411634, _0x48ffb8) {
                var _0x1167f4 = _0x48ffb8['$trigger'][_kod_0x200f('0x15f', 'HLSS')]('id'),
                    _0xf5f232 = $[_kod_0x200f('0x160', '*ub1')][_kod_0x200f('0x161', 'ieKP')][_0x1167f4];
                switch (_0x411634) {
                    case _0x3a181e['WjuBa']:
                        _0xf5f232[_kod_0x200f('0x162', 'pOzi')]();
                        break;
                    case _0x3a181e[_kod_0x200f('0x163', 'frhh')]:
                        _0xf5f232[_kod_0x200f('0x164', 'WHC]')](!0x1);
                        break;
                    case _kod_0x200f('0x165', 'PpGA'):
                        _0xf5f232[_kod_0x200f('0x166', 'SNFI')]();
                        break;
                    case _kod_0x200f('0x167', 'iz#z'):
                        _0xf5f232[_kod_0x200f('0x168', 'lT&2')]();
                        break;
                    case _kod_0x200f('0x169', 'c)fP'):
                        _0xf5f232[_kod_0x200f('0x16a', 'EJ[2')]();
                        break;
                    case _kod_0x200f('0x16b', 'g5gk'):
                        core[_kod_0x200f('0x16c', 'j90Z')](_0xf5f232[_kod_0x200f('0x16d', '3Vxz')][_kod_0x200f('0x16e', 'pOzi')]['find']('iframe')[_kod_0x200f('0x16f', 'frhh')](_kod_0x200f('0x170', '3Vxz')));
                }
            }
        }), void $(_0x49a69a[_kod_0x200f('0x171', 'tM4G')])[_kod_0x200f('0x172', '!vw7')](_kod_0x200f('0x173', '5$FK'))[_kod_0x200f('0x174', '5$FK')]('click', function(_0x3ae5af) {
            if (_0x3a181e[_kod_0x200f('0x175', '!BNj')](_kod_0x200f('0x176', '5$FK'), _kod_0x200f('0x177', 'HLLq'))) {
                $('.context-menu-list')[_kod_0x200f('0x178', '5$FK')](_0x3a181e['rtqJu'])[_kod_0x200f('0x179', 'A0ZR')](_0x3a181e['Eoigh'])[_kod_0x200f('0x17a', 'JewW')](_kod_0x200f('0x17b', 'ieKP'));
            } else {
                var _0x5b11da = $(this)[_kod_0x200f('0x17c', 'j90Z')]();
                _0x5b11da[_kod_0x200f('0x17d', '!vw7')] += $(this)[_kod_0x200f('0x17e', 'NTwa')](), _0x3a181e[_kod_0x200f('0x17f', '20$N')]($, this)[_kod_0x200f('0x180', 'WViS')]()['parent']()[_kod_0x200f('0x181', 'WpY(')]({
                    'x': _0x3ae5af[_kod_0x200f('0x182', 'EJ[2')],
                    'y': _0x5b11da[_kod_0x200f('0x183', 'EJ[2')]
                });
            }
        })[_kod_0x200f('0x184', '3Vxz')](_0x49a69a[_kod_0x200f('0x185', 'j90Z')])[_kod_0x200f('0x186', 'yhTY')](_kod_0x200f('0x187', 'DSK9'), function(_0x37561a) {
            var _0x3c7782 = {};
            _0x3c7782[_kod_0x200f('0x188', 'WViS')] = function(_0x42ff6a, _0x4948f5) {
                return _0x3a181e.jOyik(_0x42ff6a, _0x4948f5);
            };
            if (_kod_0x200f('0x189', 'Lroq') === _kod_0x200f('0x18a', 'JewW')) {
                var _0x5b11da = $(this)[_kod_0x200f('0x18b', 'HLSS')]()[_kod_0x200f('0x18c', 'GOb%')]()['attr']('id'),
                    _0x1167f4 = $[_kod_0x200f('0x18d', 'EJ[2')][_kod_0x200f('0x18e', '5$FK')][_0x5b11da];
                _0x1167f4['close'](), $['contextMenu'][_kod_0x200f('0x18f', '!BNj')]();
            } else {
                var _0x35bfff = _0x5b11da[_kod_0x200f('0x190', 'JewW')],
                    _0x465ef4 = _kod_0x200f('0x191', 'lT&2');
                _0x35bfff[_kod_0x200f('0x192', 'ieKP')](_kod_0x200f('0x193', 'kevY'))[_kod_0x200f('0x194', 'mfiB')](_0x465ef4), Hook[_kod_0x200f('0x195', 'j90Z')](_kod_0x200f('0x196', '5$FK'), _0x5b11da['selector'], _0x37561a, _0x35bfff), Hook[_kod_0x200f('0x197', 'WHC]')](_0x3c7782['NcaoR'](_kod_0x200f('0x198', 'WHC]'), _0x5b11da[_kod_0x200f('0x54', 'dEVq')]), _0x37561a, _0x35bfff);
            }
        }));
    };
    Hook[_kod_0x200f('0x199', 'A0ZR')]('rightMenu.show.dialog-menu', function(_0x179e1a, _0xe8b1ed) {
        var _0x1167f4 = _0x179e1a[_kod_0x200f('0x19a', 'JewW')]('id'),
            _0x4a443f = $[_kod_0x200f('0x160', '*ub1')][_kod_0x200f('0x19b', 'j90Z')][_0x1167f4],
            _0x4e3de0 = _0x49a69a['RJVdg'],
            _0x1a4ddd = _kod_0x200f('0x19c', '20$N');
        _0x4a443f['hasFrame']() ? _0xe8b1ed['find'](_0x1a4ddd)[_kod_0x200f('0x19d', '*ub1')](_0x4e3de0) : _0xe8b1ed['find'](_0x1a4ddd)[_kod_0x200f('0x19e', ']J&I')](_0x4e3de0);
        var _0x30e36a = _kod_0x200f('0x19f', 'pOzi');
        $('.' + _0x1167f4)[_kod_0x200f('0x1a0', 'oznb')](_kod_0x200f('0x1a1', '!vw7')) ? _0xe8b1ed[_kod_0x200f('0x1a2', '!vw7')](_0x30e36a)['removeClass'](_0x4e3de0) : _0xe8b1ed['find'](_0x30e36a)[_kod_0x200f('0x1a3', '!BNj')](_0x4e3de0);
    }), _0x1167f4();
});;
define("app/app/appBase", [], function(a, b) {
    var c = {}, d = {}, e = {}, f = !1,
        g = function(a) {
            a.title = void 0 == a.title ? a.name : a.title, void 0 == a.name && (a.name = UUID(), a.hidden = !0), c[a.name] = a, a.ext || (a.ext = "");
            var b = a.ext.split(",");
            c[a.name].extArr = b, "undefined" != typeof a.sort ? a.sort = parseInt(a.sort) : a.sort = 0;
            for (var e = 0; e < b.length; e++) {
                var f = trim(b[e]);
                c[a.name].extArr[e] = f, d[f] || (d[f] = []);
                for (var g = !1, h = 0; h < d[f].length; h++) if (d[f][h].name == a.name) {
                        g = !0;
                        break
                    }
                g || (d[f].push({
                    name: a.name,
                    sort: a.sort
                }), d[f].length > 1 && d[f].sort(function(a, b) {
                    return a.sort < b.sort
                }))
            }
            Hook.trigger("kodApp.add.finished")
        }, h = function() {
            return d
        }, i = function(a) {
            if (!a || !c[a]) return !1;
            delete c[a];
            for (var b in e) if (e[b] == a) {
                    delete e[b];
                    break
                }
            for (var b in d) {
                for (var f = d[b], g = [], h = 0; h < f.length; h++) f[h].name != a && g.push(f[h]);
                0 == g.length ? delete d[b] : d[b] = g
            }
        }, j = function(a) {
            if ("undefined" == typeof a) {
                var b = [];
                for (var f in c) c[f].hidden || b.push(c[f]);
                return b
            }
            var g = e[a],
                b = [];
            if (!g && !d[a]) return !1;
            if (g && (c[g] ? b.push(c[g]) : delete e[a]), !d[a]) return b;
            for (var h = 0; h < d[a].length; h++) {
                var i = d[a][h].name;
                c[i] && i != g && b.push(c[i])
            }
            return b
        }, k = function(a) {
            f = a
        }, l = function() {
            return f
        }, m = function(a, b, d) {
            if ("" != a) {
                b && "file" != b || (b = core.pathExt(a)), d = d ? d : "";
                var e = {
                    path: a,
                    ext: b,
                    appName: d
                };
                if (!Hook.trigger("kodApp.open.before", e)) {
                    if (a = e.path, b = e.ext, d = e.appName) var f = c[d];
                    else {
                        var g = j(b);
                        if (!g || 0 == g.length) return void kodApp.openUnknow(a, "");
                        var f = g[0]
                    } if (!f) return Tips.tips("[" + d + "] not exists", !1);
                    try {
                        n(f, a, b)
                    } catch (h) {
                        console.error("kodApp.open error:", h)
                    }
                }
            }
        }, n = function(a, b, c) {
            Hook.trigger("kodApp.callback.before", a, b, c) || (a.callback(b, c), Hook.trigger("kodApp.callback.after", b, c, a))
        }, o = function(a) {
            var b = j(a),
                d = j("");
            "" == a && (b = !1), b ? b.push({
                name: ""
            }) : b = [], b = b.concat(d);
            for (var e = {}, f = 0; f < b.length; f++) {
                var g = b[f];
                "" == g.name || g.hidden ? e["step-line"] = "-------" : e[g.name] = {
                    app: g.name,
                    name: g.title,
                    className: g.className,
                    icon: g.icon,
                    callback: function(a, b) {
                        var d = c[a];
                        if (d && d.callback) {
                            $(".context-menu-active");
                            if ($(".context-menu-active").hasClass("menu-tree-file")) var e = ui.tree.makeParam();
                            else var e = ui.path.makeParam();
                            n(d, e.path, e.type)
                        }
                    }
                }
            }
            return e
        }, p = function(a, b) {
            q(a, b), G.userConfig.kodAppDefault = htmlEncode(jsonEncode(e)), G.shareInfo || $.get(G.appHost + "setting/set&k=kodAppDefault&v=" + jsonEncode(e))
        }, q = function(a, b) {
            if (!c[b]) return !1;
            if ("string" == typeof a) e[a] = b;
            else if ($.isArray(a)) for (var d = 0; d < a.length; d++) e[a[d]] = b;
            else if ($.isArray(c[b].extArr)) for (var f = c[b].extArr, d = 0; d < f.length; d++) e[f[d]] = b
        }, r = function() {
            G.userConfig.kodAppDefault = "[]", e = {}
        }, s = function(a, b) {
            var a = c[a];
            return a ? b ? inArray(a.extArr, b) : a.ext : !1
        }, t = function(a, b, e) {
            var a = c[a];
            if (!a) return !1;
            var f = "undefined" == e ? 0 : parseInt(e);
            0 == f && "undefined" != typeof a.sort && (f = parseInt(a.sort)), "string" == $.type(b) && (b = b.split(","));
            for (var g = 0; g < b.length; g++) {
                var h = b[g];
                if (h) {
                    inArray(a.extArr, h) || a.extArr.push(h), d[h] || (d[h] = []);
                    for (var i = !1, j = 0; j < d[h].length; j++) d[h][j].name != a.name || (d[h][j].sort = f, i = !0);
                    i || d[h].push({
                        name: a.name,
                        sort: f
                    })
                }
            }
        }, u = function() {
            if (G.userConfig && G.userConfig.kodAppDefault) try {
                    var a = G.userConfig.kodAppDefault;
                    a = jsonDecode(htmlDecode(a)), $.isPlainObject(a) && (e = a)
            } catch (b) {}
            Hook.bind("rightMenu.show.menu-file,rightMenu.show.menu-tree-file", function(a, b) {
                if (a.hasClass("menu-tree-file")) var c = ui.tree.makeParam();
                else var c = ui.path.makeParam();
                var d = core.pathExt(c.path),
                    e = "hidden";
                if (kodApp.getApp(d)) {
                    var f = kodApp.getAppMenu(d);
                    b.find("li.open-with.context-menu-submenu").removeClass(e), b.find("ul.context-menu-list.open-with .context-menu-item").not(".open-with-first").remove(), $.contextMenu.menuAdd(f, ".menu-file", ".open-with-first"), $.contextMenu.menuAdd(f, ".menu-tree-file", ".open-with-first")
                } else b.find("li.open-with.context-menu-submenu").addClass(e)
            }), Hook.trigger("kodApp.ready"), Hook.bind("kodApp.callback.before", function(a, b, c) {
                return core.authCheckGroup("explorer.fileProxy", b) ? void 0 : (Tips.tips(LNG.no_permission_action, !1), "deny!")
            })
        };
    return u(), {
        debug: function() {
            return {
                appList: c,
                openDefault: d,
                openUser: e
            }
        },
        add: g,
        remove: i,
        appSupportCheck: s,
        appSupportSet: t,
        getApp: j,
        getAppBind: h,
        getAppMenu: o,
        setLastOpenTarget: k,
        getLastOpenTarget: l,
        setOpenUser: p,
        setOpenUserLocal: q,
        clearOpenUser: r,
        open: m
    }
});;
define("app/app/editor", [], function(a, b) {
    kodApp.add({
        name: "aceEditor",
        title: LNG["Plugin.default.aceEditor"],
        sort: 0,
        ext: "txt,textile,oexe,inc,csv,log,asc,tsv,lnk,url,webloc,meta,localized,xib,xsd,storyboard,plist,csproj,pch,pbxproj,local,xcscheme,manifest,vbproj,strings,jshintrc,sublime-project,readme,changes,changelog,version,license,changelog,abap,abc,as,asp,aspx,ada,adb,htaccess,htgroups,htgroups,htpasswd,asciidoc,adoc,asm,a,ahk,bat,cmd,cpp,c,cc,cxx,h,hh,hpp,ino,c9search_results,cirru,cr,clj,cljs,cbl,cob,coffee,cf,cson,cakefile,cfm,cs,css,curly,d,di,dart,diff,patch,dockerfile,dot,dummy,dummy,e,ge,ejs,ex,exs,elm,erl,hrl,frt,fs,ldr,ftl,gcode,feature,.gitignore,glsl,frag,vert,gbs,go,groovy,haml,hbs,handlebars,tpl,mustache,hs,hx,html,hta,htm,xhtml,eex,html.eex,erb,rhtml,html.erb,ini,inf,conf,cfg,prefs,io,jack,jade,java,ji,jl,jq,js,jsm,json,jsp,jsx,latex,ltx,bib,lean,hlean,less,liquid,lisp,ls,logic,lql,lsl,lua,lp,lucene,Makefile,makemakefile,gnumakefile,makefile,ocamlmakefile,make,md,markdown,mask,matlab,mz,mel,mc,mush,mysql,nc,nix,nsi,nsh,m,mm,ml,mli,pas,p,pl,pm,pgsql,php,phtml,shtml,php3,php4,php5,phps,phpt,aw,ctp,module,ps1,praat,praatscript,psc,proc,plg,prolog,properties,proto,py,r,cshtml,rd,rhtml,rst,rb,ru,gemspec,rake,guardfile,rakefile,gemfile,rs,sass,scad,scala,scm,sm,rkt,oak,scheme,scss,sh,bash,bashrc,sjs,smarty,tpl,snippets,soy,space,sql,sqlserver,styl,stylus,svg,swift,tcl,tex,toml,twig,swig,ts,typescript,str,vala,vbs,vb,vm,v,vh,sv,svh,vhd,vhdl,wlk,wpgm,wtest,xml,rdf,rss,wsdl,xslt,atom,mathml,mml,xul,xbl,xaml,xq,yaml,yml,vcproj,vcxproj,vtt,filters,cer,reg,config,pem,srt,ass,lrc,opf,ncx",
        icon: G.staticPath + "images/file_icon/icon_app/ace.png",
        callback: function(a, b) {
            var c = ShareData.frameTop();
            if ("undefined" != typeof c.Editor) return void c.Editor.add(urlEncode(a));
            if (core.isApp("editor")) return void ShareData.frameChild("OpenopenEditor", function(b) {
                    b.Editor.add(urlEncode(a))
                });
            if (ShareData.frameTop("OpenopenEditor")) {
                var d = c.$.dialog.list.openEditor,
                    e = 0;
                d && "hidden" == $(d.DOM.wrap).css("visibility") && (e = 200, d.display(!0).zIndex().focus()), setTimeout(function() {
                    ShareData.frameTop("OpenopenEditor", function(b) {
                        b.Editor.add(urlEncode(a))
                    })
                }, e)
            } else {
                var f = G.appHost + "editor/edit#filename=" + urlEncode(a);
                "undefined" != typeof G.sharePage && (f = G.appHost + "share/edit&user=" + G.user + "&sid=" + G.sid + "#filename=" + urlEncode(a));
                var g = htmlEncode(urlDecode(core.pathThis(a))),
                    h = {
                        closeBefore: function() {
                            var a = ShareData.frameTop("OpenopenEditor"),
                                b = this;
                            return a && a.Editor && a.Editor.hasFileSave() ? ($.dialog.confirm(LNG.if_save_file_tips, function() {
                                b.config.closeBefore = !1, b.close()
                            }, function() {}), !1) : void 0
                        }
                    };
                core.openDialog(f, core.icon("edit"), g, "openEditor", h)
            }
        }
    });
    var c = ShareData.frameTop();
    c.Config && "editor" == c.Config.pageApp && kodApp.setOpenUserLocal(!1, "aceEditor")
});;
define("app/app/openWith", [], function(a, b) {
    kodApp.add({
        name: "appOpenSetting",
        title: LNG["Explorer.UI.appSetDefault"],
        ext: "",
        icon: G.staticPath + "images/file_icon/icon_others/setting.png",
        callback: function(a, b) {
            var c = "<ul class='tab-group {{if !apps}}hidden{{/if}}' role='tablist'>				<li class='tab-item {{if apps}}active{{/if}}'>					<a href='#app-list-support'aria-controls='app-list-support' role='tab' data-toggle='tab'>						{{LNG['Explorer.UI.appTypeSupport']}}</a>				</li>				<li class='tab-item {{if !apps}}active{{/if}}' >					<a href='#app-list_all' aria-controls='app-list_all' role='tab' data-toggle='tab'>						{{LNG['Explorer.UI.appTypeAll']}}</a>				</li>			</ul>			<div class='tab-content'>				<div class='app-list tab-pane {{if apps}}active{{/if}}' id='app-list-support'>					{{each apps app i}}					<a data-app='{{app.name}}' href='javascript:void(0);'					draggable='false' ondragstart='return false;'					class='app-item {{if app.name==defaultApp}}select{{/if}} disable-ripple'>						{{if app.icon.indexOf('/') == -1}}							<span class='ico'><i class='font-icon {{app.icon}}'></i></span>						{{else}}							<span class='ico'><img draggable='false' ondragstart='return false;' src='{{app.icon}}'></span>						{{/if}}						<span class='name'>{{app.title}}</span>					</a>					{{/each}}					<div class='clear'></div>				</div>				<div class='app-list tab-pane {{if !apps}}active{{/if}}' id='app-list_all'>					{{each appAll app i}}					<a data-app='{{app.name}}' href='javascript:void(0);'					draggable='false' ondragstart='return false;'					class='app-item {{if app.name==defaultApp}}select{{/if}} disable-ripple'>						{{if app.icon.indexOf('/') == -1}}							<span class='ico'><i class='font-icon {{app.icon}}'></i></span>						{{else}}							<span class='ico'><img draggable='false' ondragstart='return false;' src='{{app.icon}}'></span>						{{/if}}						<span class='name'>{{app.title}}</span>					</a>					{{/each}}				</div>			</div>			<div class='bottom mt-10'>				<input class='kui-checkbox size-small' type='checkbox' id='app-default-checkbox' {{if apps}}checked='true'{{/if}}/>				<label for='app-default-checkbox'>{{LNG['Explorer.UI.appAwaysOpen']}}</label>			</div>",
                d = kodApp.getApp(b),
                e = !1;
            lodash.isArray(d) && (e = d[0].name);
            var f = template.compile(c),
                g = f({
                    LNG: LNG,
                    apps: d,
                    defaultApp: e,
                    appAll: kodApp.getApp()
                }),
                h = $.dialog({
                    id: "dialog-app-select",
                    className: "menu-empty",
                    padding: 0,
                    fixed: !0,
                    ico: core.icon("search"),
                    resize: !0,
                    title: LNG["Explorer.UI.selectAppDesc"],
                    width: 480,
                    height: 360,
                    padding: "20px",
                    content: g,
                    ok: function() {
                        return i()
                    }
                }),
                i = function() {
                    var c = $("#app-default-checkbox").prop("checked"),
                        d = $(".app-list.active .app-item.select").attr("data-app");
                    return d ? (h.close(), kodApp.open(a, b, d), c && kodApp.setOpenUser(b, d), !0) : (Tips.tips(LNG["Explorer.UI.selectAppWarning"], "warning"), !1)
                };
            $(".tab-group .tab-item").die("click").live("click", function() {
                var a = $(this).find("[aria-controls]").attr("aria-controls");
                "app-list-support" == a ? $("#app-default-checkbox").prop("checked", !0) : $("#app-default-checkbox").prop("checked", !1)
            }), $(".app-item").die("click").live("click", function() {
                $(this).parent().find(".select").removeClass("select"), $(this).addClass("select")
            }).die("dblclick").live("dblclick", function() {
                i()
            })
        }
    })
});;
define("app/app/html", [], function(a, b) {
    var c = function(a) {
        return void 0 == a ? !1 : 0 === a.indexOf("http") ? !0 : G.shareInfo || core.pathReadable(a) ? !0 : (Tips.tips(LNG.no_permission_read_all, !1), core.playSound("error"), !1)
    };
    Hook.bind("kodApp.open.before", function(a) {
        return "folder" == a.ext ? (core.isApp("explorer") || isWap() ? ui.path.list(a.path + "/") : core.explorer(a.path), !0) : c(a.path) ? void("file" == a.ext && (a.ext = "")) : !0
    }), kodApp.openUnknow = function(a, b) {
        void 0 == b && (b = "");
        var c = G.appHost + "pluginApp/index&search=" + core.pathExt(a),
            d = "kodApp.open(pathHashDecode('" + pathHashEncode(a) + "'),false,'appOpenSetting');",
            e = "kodApp.open(pathHashDecode('" + pathHashEncode(a) + "'),false,'aceEditor');",
            f = "kodApp.download(pathHashDecode('" + pathHashEncode(a) + "'));",
            g = "core.openWindow('" + c + "');",
            h = LNG.unknow_file_try + '<a class="pl-5 pr-5" href="javascript:void(0);" onclick="',
            i = '<div class="unknow-file can-select" style="word-break:break-all;">				<div class="grey-8 bold mb-20">' + LNG.unknow_file_tips + "<br/>" + b + '</div>			    <div class="mt-5">1.' + h + d + '">' + LNG["Explorer.UI.openWith"] + '</a></div>			    <div class="mt-5">2.' + h + e + '">' + LNG["Explorer.UI.openWithText"] + '</a></div>			    <div class="mt-5">3.' + h + f + '">' + LNG.unknow_file_download + '</a></div>				<div class="mt-20">' + h + g + '">' + LNG.PluginCenter + "</a>" + LNG.unknow_plugin_search + "</div>			</div>";
        $.dialog({
            fixed: !0,
            icon: "warning",
            title: LNG.unknow_file_title,
            padding: "20px 50px",
            content: i,
            cancel: !0
        }), $(".unknow-file a").unbind("click").bind("click", function(a) {
            return $(this).parents(".artDialog").data("artDialog").close(), stopPP(a)
        })
    }, kodApp.add({
        name: "download",
        title: LNG.download,
        hidden: !0,
        icon: "x-item-file x-html",
        callback: function(a, b) {
            if (c(a)) {
                var d = a;
                "http" != a.substr(0, 4) && (d = G.appHost + "explorer/fileDownload&accessToken=" + G.accessToken + "&path=" + urlEncode(a), "undefined" != typeof G.sharePage && (d = G.appHost + "share/fileDownload&user=" + G.user + "&sid=" + G.sid + "&path=" + urlEncode(a))), $.dialog({
                    icon: "succeed",
                    title: !1,
                    time: 1.5,
                    content: LNG.download_ready + "..."
                }), isWap() ? window.open(d) : $('<iframe src="' + d + '" style="display:none;width:0px;height:0px;"></iframe>').appendTo("body")
            }
        }
    }), kodApp.download = function(a) {
        kodApp.open(a, "", "download")
    }, kodApp.openWindow = function(a) {
        kodApp.open(a, "", "browserOpen")
    }, kodApp.add({
        name: "browserOpen",
        title: LNG.open_ie,
        sort: -100,
        icon: "x-item-file x-html",
        callback: function(a, b) {
            var d = core.path2url(a);
            return "/" == a.substr(-1) && -1 != d.search("explorer/fileProxy&") ? Tips.tips(LNG.path_can_not_action, !1) : void(c(a) && (isWap() ? window.location.href = d : window.open(d)))
        }
    }), kodApp.add({
        name: "swfPlayer",
        title: "Flash Player",
        ext: "swf",
        icon: "x-item-file x-swf",
        callback: function(a, b) {
            $.dialog({
                resize: !0,
                fixed: !0,
                ico: core.icon(b),
                title: core.pathThis(a),
                width: "75%",
                height: "65%",
                padding: 0,
                content: core.createFlash(core.path2url(a))
            })
        }
    }), kodApp.add({
        name: "webLink",
        title: "webLink",
        ext: "url,webloc",
        sort: 10,
        icon: "x-item-file x-html",
        callback: function(a, b) {
            core.fileGet(a, function(c) {
                if ("url" == b) {
                    var d = c.match(/URL=(.*)/);
                    if (d.length >= 2) return window.open(d[1])
                } else if ("webloc" == b) try {
                        var e = $($.parseXML(c)),
                            f = e.find("string").text();
                        return void window.open(f)
                } catch (g) {}
                kodApp.open(a, b, "editor")
            })
        }
    }), kodApp.add({
        name: "htmlView",
        title: LNG["Plugin.default.htmlView"],
        ext: "htm,html,shtml",
        sort: 10,
        icon: "x-item-file x-html",
        callback: function(a, b) {
            var c = core.path2url(a);
            core.openDialog(c, core.icon("html"), core.pathThis(a))
        }
    }), kodApp.add({
        name: "pdfView",
        title: "PDF Simple",
        ext: "pdf",
        sort: 0,
        icon: "x-item-file x-pdf",
        callback: function(a, b) {
            var c = core.path2url(a),
                d = "pdf" + UUID(),
                e = '<div id="' + d + '" style="height:100%;">			<a href="' + c + '" target="_blank" style="display:block;margin:0 auto;margin-top:80px;font-size:16px;text-align:center;">' + LNG.error + " " + LNG.download + " PDF</a></div>";
            $.dialog({
                resize: !0,
                fixed: !0,
                ico: core.icon(b),
                title: core.pathThis(a),
                width: "80%",
                height: "75%",
                padding: 0,
                content: e
            }), PDFObject.embed(c, "#" + d)
        }
    }), kodApp.add({
        name: "oexeOpen",
        title: LNG["kodApp.oexe.open"],
        ext: "oexe",
        sort: 100,
        icon: " x-item-file x-oexe",
        callback: function(a, b) {
            core.fileGet(a, function(b) {
                var c = jsonDecode(b);
                c.name = core.pathThis(a), core.openApp(c)
            })
        }
    }), kodApp.add({
        name: "oexeEdit",
        title: LNG["kodApp.oexe.edit"],
        ext: "oexe",
        sort: 50,
        icon: "icon-edit ",
        callback: function(a, b) {
            core.fileGet(a, function(b) {
                var c = jsonDecode(b);
                c.name = core.pathThis(a), c.path = a, ui.path.pathOperate.appEdit(c)
            })
        }
    });
    var d = {
        createApp: {
            name: LNG.app_create,
            className: "createApp newfile",
            icon: "icon-puzzle-piece x-item-file x-oexe",
            callback: function(a, b) {
                ui.path.pathOperate.appEdit(0, 0, "userAdd")
            }
        }
    };
    $.contextMenu.menuAdd(d, ".menu-body-main", ".app-install"), $.contextMenu.menuAdd(d, ".toolbar-path-more", ".app-install"), $.contextMenu.menuAdd(d, ".bodymain", ".app-install"), Hook.bind("rightMenu.show", function(a, b, c) {
        var d = [".menu-folder", ".menu-file", ".menu-tree-folder", ".menu-tree-file", ".menu-tree-folder-fav"];
        if (c.find(".context-menu-submenu").fadeOut(0).delay(0).fadeIn(0), c.removeClass("menu-auto-fit"), h(b), c.inScreen() || c.addClass("menu-auto-fit"), ".menu-body-main" == a) {
            var e = c.find(".set-file-icon-size.context-menu-submenu");
            "icon" == G.userConfig.listType ? e.removeClass("hidden") : e.addClass("hidden")
        }
        if (lodash.include(d, a)) {
            var f = "disabled",
                g = ".cute,.rname,.remove",
                i = ".open,.open-text,.down,.share,.copy,.cute,.rname,.remove,.open-browser,.search,.more-action";
            b.hasClass("file-not-readable") ? c.find(i).addClass(f) : c.find(i).removeClass(f), b.hasClass("file-not-writeable") ? c.find(g).addClass(f) : c.find(g).removeClass(f)
        }
    }), Hook.bind("rightMenu.show.menu-body-main", function(a, b) {
        var c = ".upload,.past,.newfolder,.newfile",
            d = "disabled";
        lodash.get(G, "jsonData.info.canUpload") ? b.find(c).removeClass(d) : b.find(c).addClass(d)
    }), Hook.bind("rightMenu.show.menu-file", function(a, b) {
        if ($(".context-menu-active").hasClass("menu-tree-file")) var c = ui.tree.makeParam();
        else var c = ui.path.makeParam();
        var d = core.pathExt(c.path),
            e = "hidden";
        inArray(["jpg", "jpeg", "png"], d) ? b.find(".set-background").removeClass(e) : b.find(".set-background").addClass(e)
    });
    var e = function() {
        var a = ".close-item,.refresh,.newfile,.past,.info",
            b = ".open-browser",
            c = ".explorer,.create-project,.open-project",
            d = ".close-item,.newfile,.refresh,.past,.down,.copy,.cute,.remove,.more-action,.clone,.info,.zip,.zip-zip,.zip-tar,.zip-tgz",
            e = ".newfile,.cute,.past,.rname,.zip,.remove,.clone,.create-link-home,.create-link,.create-project",
            f = $(".menu-tool-path"),
            g = "hidden",
            h = ui.fileLight.fileListSelect();
        f.find(".context-menu-item").addClass(g), 0 == h.length ? f.find(a).removeClass(g) : 1 == h.length ? (f.find(".context-menu-item").removeClass(g), "folder" == ui.fileLight.type(h) ? f.find(b).addClass(g) : f.find(c).addClass(g)) : h.length > 1 && f.find(d).removeClass(g), G.jsonData && G.jsonData.info && G.jsonData.info.canUpload === !1 && f.find(e).filter(":not(." + g + ")").addClass(g)
    }, f = function() {
            var a = ui.fileLight.fileListSelect(),
                b = $(".kod-toolbar-path .select-button-show"),
                c = "hidden";
            G.jsonData && G.jsonData.info && (0 == a.length || G.jsonData.info.pathType == G.KOD_USER_SHARE && G.jsonData.info.id != G.userID ? b.addClass("hidden") : (b.removeClass("hidden"), b.find("[data-action=share]").removeClass(c), b.find("[data-action=rname]").removeClass(c), a.length > 1 && (b.find("[data-action=share]").addClass(c), b.find("[data-action=rname]").addClass(c))))
        }, g = function() {
            var a = lodash.get(G, "jsonData.info.pathType"),
                b = $(".kod-toolbar-share .select-button-show-share"),
                c = ui.fileLight.fileListSelect(),
                d = "hidden";
            a != G.KOD_USER_SHARE || 0 == c.length ? b.addClass("hidden") : (b.removeClass("hidden"), b.find("[data-action=shareEdit]").removeClass(d), b.find("[data-action=shareOpenWindow]").removeClass(d), c.length > 1 && (b.find("[data-action=shareEdit]").addClass(d), b.find("[data-action=shareOpenWindow]").addClass(d)))
        };
    Hook.bind("explorer.fileSelect.init", function() {
        ui.fileLight.listNumberSet()
    }), Hook.bind("explorer.fileSelect.change", function() {
        e(), f(), g(), ui.fileLight.selectNumSet()
    }), Hook.bind("rightMenu.show.toolbar-path-more", function() {
        e()
    }), Hook.bind("rightMenu.initFinished", function() {
        if (1 != G.isRoot) {
            var a = "hidden",
                b = {
                    "explorer.fileDownload": "@.down,@.download,@.share,@.open-text,[data-action=download]",
                    "explorer.search": "@.search",
                    "explorer.mkfile": "@.newfile,[data-action=newfile],@.past,@.clone",
                    "explorer.mkdir": "@.newfolder,[data-action=newfolder]",
                    "explorer.pathRname": "@.rname,[data-action=rname]",
                    "explorer.pathDelete": "@.remove,@.remove + .context-menu-separator,[data-action=remove]",
                    "explorer.pathCopy": "@.cute,@.copy,[data-action=cute],[data-action=copy]",
                    "explorer.fileUpload": "@.upload,@.upload-more,[data-action=upload],[data-action=upload-more]",
                    "explorer.unzip": "@.unzip",
                    "explorer.zip": "@.zip",
                    "userShare.set": "@.share,[data-action=share]"
                };
            setTimeout(function() {
                for (var c in b) {
                    var d = replaceAll(b[c], "@", ".context-menu-list ");
                    core.authCheck(c) || $(d).addClass(a)
                }
            }, 100), core.authCheck("explorer.fileDownload") || (kodApp.remove("browserOpen"), kodApp.remove("htmlView"))
        }
    }), Hook.bind("kodApp.callback.before", function(a, b, c) {
        return -1 == $.inArray(a.name, ["browserOpen", "htmlView", "zipView"]) || core.authCheckGroup("explorer.fileDownload", b) ? void 0 : (Tips.tips(LNG.no_permission_action, "error"), !0)
    });
    var h = function(a) {
        return
    }, i = function() {
            if (G.authGroupRole || (G.authGroupRole = {}), lodash.get(G, "jsonData.info.pathType") == G.KOD_GROUP_PATH) {
                var a = lodash.get(G, "jsonData.info.id");
                G.authGroupRole[a] = lodash.get(G, "jsonData.info.groupRole.authArr")
            }
            h()
        };
    Hook.bind("explorer.path.ajaxLive", i)
});;
define("app/common/tpl/copyright.html", [], '<div class="dialog-copyright-content">\n	<div class="title">\n		<div class="logo">\n			<i class="icon-cloud"></i>\n			{{if kod.window.core.versionType==\'A\' && kod.window.core.versionOem !=\'ok\' }}\n			KodExplorer \n			{{else}} \n			{{LNG.kod_name}}\n			{{/if}}\n		</div>\n		<div class=\'info\'>——{{LNG.kod_name_copyright}}</div>\n	</div>\n	<div class="content">\n		<p>{{@LNG.copyright_desc}}</p>\n		<div>{{@LNG.copyright_contact}}</div>\n		<div>{{@LNG.copyright_info}}</div> \n	</div>\n</div>\n');;
define("app/common/tpl/themeDIY.html", [], "@media screen and (max-width:100000px) {\n	body .full-background{\n		position: absolute;top: 0px;left: 0px;bottom: 0px;right: 0px;\n		background-color: #020202;background-size: 100% 100%;\n	}\n\n	{{if blurSize= (bgBlur==0?0:10) }}{{/if}}\n	body .full-background:before{\n		-webkit-filter: blur({{blurSize}}px);\n		-moz-filter: blur({{blurSize}}px);\n		-ms-filter: blur({{blurSize}}px);\n		filter: blur({{blurSize}}px);\n	}\n	{{if bgType == 'image'}}\n		body .full-background,\n		body .full-background:before,\n		body #body .menu-left,\n		body #body .app-menu-left,\n		body .aui-buttons,\n		body .aui-state-focus .aui-title,body .aui-title{\n			background-image:url({{bgImage}});\n		}\n		body .aui-state-focus .aui-title,body .aui-title{\n			background-size:100%;\n		}\n	{{else}}\n		body .full-background,\n		body .full-background:before,\n		body #body .menu-left, \n		body #body .app-menu-left,\n		body .aui-buttons,\n		body .aui-state-focus .aui-title,body .aui-title{\n			background:{{endColor}};\n			filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='{{startColor}}', endColorstr='{{endColor}}');\n			background-image: -webkit-linear-gradient({{colorRotate}}deg, {{startColor}}, {{endColor}});\n			background-image: -moz-linear-gradient({{colorRotate}}deg, {{startColor}}, {{endColor}});\n			background-image: -o-linear-gradient({{colorRotate}}deg, {{startColor}}, {{endColor}});\n			background-image: -ms-linear-gradient({{colorRotate}}deg, {{startColor}}, {{endColor}});\n			background-image: linear-gradient({{colorRotate}}deg, {{startColor}}, {{endColor}});\n		}\n	{{/if}}\n}\n");;
define("app/src/setting/fav", [], function(a, b) {
    var c = G.appHost + "fav/",
        d = function(a) {
            $.ajax({
                url: c + "get",
                dataType: "json",
                async: !1,
                success: function(b) {
                    return b.code ? void e(b.data, a) : void Tips.tips(b)
                },
                error: function() {
                    return !1
                }
            })
        }, e = function(a, b) {
            var c = "<tr class='title'><td class='name'>" + htmlEncode(LNG.name) + "<span>(" + LNG.can_not_repeat + ")</span></td><td class='path'>" + htmlEncode(LNG.address) + "<span>(" + LNG.absolute_path + ")</span></td><td class='action'>" + LNG.action + "</td></tr>";
            for (var d in a) c += "<tr class='favlist' name='" + htmlEncode(a[d].name) + "' path='" + htmlEncode(a[d].path) + "'>   <td class='name'><input type='text' id='sname' value='" + htmlEncode(a[d].name) + "' /></td>   <td class='path'><input type='text' id='spath' value='" + htmlEncode(a[d].path) + "' /></td>   <td class='action'>		<button class='btn btn-default btn-sm edit'>" + LNG.button_save_edit + "</button>		<button class='btn btn-default btn-sm del'>" + LNG.button_del + "</button>   </td></tr>";
            if ($("table#list").html(c), b && "fav&" == b.substring(0, 4)) {
                var e = b.split("&")[1].split("=")[1],
                    f = b.split("&")[2].split("=")[1],
                    g = b.split("&")[3].split("=")[1];
                e = htmlEncode(urlDecode(e)), f = htmlEncode(urlDecode(f));
                var h = "<tr class='favlist' name='' path=''>   <input type='hidden' id='stype' value='" + g + "' />   <td class='name'><input type='text' id='sname' value='" + e + "' /></td>   <td class='path'><input type='text' id='spath' value='" + f + "' /></td>   <td class='action'>		<button class='btn btn-default btn-sm addsave'>" + LNG.button_save + "</button>		<button class='btn btn-default btn-sm addexit'>" + LNG.button_cancel + "</button>   </td></tr>";
                $(h).insertAfter("table#list tr:last")
            }
        }, f = function() {
            var a = "<tr class='favlist' name='' path=''>   <input type='hidden' id='stype' value='folder' />   <td class='name'><input type='text' id='sname' value='' /></td>   <td class='path'><input type='text' id='spath' value='' /></td>   <td class='action'>		<button class='btn btn-default btn-sm addsave'>" + LNG.button_save + "</button>		<button class='btn btn-default btn-sm addexit'>" + LNG.button_cancel + "</button>   </td></tr>";
            $(a).insertAfter("table#list tr:last")
        }, g = function() {
            var a = $(this).parent().parent();
            $(a).detach()
        }, h = function() {
            var a = $(this).parent().parent(),
                b = $(a).find("#sname").val(),
                d = $(a).find("#spath").val(),
                e = $(a).find("#stype").val();
            return "" == b || "" == d ? (Tips.tips(LNG.not_null, "error"), !1) : void $.ajax({
                url: c + "add&name=" + urlEncode(b) + "&path=" + urlEncode(d) + "&type=" + e,
                dataType: "json",
                success: function(c) {
                    if (Tips.tips(c), c.code) {
                        $(a).attr("name", b), $(a).attr("path", d);
                        var e = "<button class='btn btn-default btn-sm edit'>" + LNG.button_save_edit + "</button><button class='btn btn-default btn-sm del'>" + LNG.button_del + "</button>";
                        $(a).find("td.action").html(e), ShareData.frameTop("", function(a) {
                            a.ui.tree.refreshFav()
                        })
                    }
                }
            })
        }, i = function() {
            var a = $(this).parent().parent(),
                b = $(a).attr("name"),
                e = $(a).find("#sname").val(),
                f = $(a).find("#spath").val();
            return "" == e || "" == f ? (Tips.tips(LNG.not_null, "error"), !1) : void $.ajax({
                dataType: "json",
                url: c + "edit&name=" + urlEncode(b) + "&nameTo=" + urlEncode(e) + "&pathTo=" + urlEncode(f),
                success: function(b) {
                    Tips.tips(b), b.code && ($(a).attr("name", e), ShareData.frameTop("", function(a) {
                        a.ui.tree.refreshFav()
                    }), d())
                }
            })
        }, j = function() {
            var a = $(this).parent().parent(),
                b = $(a).attr("name");
            $.ajax({
                url: c + "del&name=" + urlEncode(b),
                dataType: "json",
                async: !1,
                success: function(b) {
                    Tips.tips(b), b.code && ($(a).detach(), ShareData.frameTop("", function(a) {
                        a.ui.tree.refreshFav()
                    }))
                }
            })
        }, k = function() {
            $(".fav .add").live("click", f), $(".fav .addexit").live("click", g), $(".fav .addsave").live("click", h), $(".fav .edit").live("click", i), $(".fav .del").live("click", j)
        };
    return k(), {
        init: d
    }
});;
define("app/src/setting/setting", ["./page/about.html", "./page/fav.html", "./page/help.html", "./page/member.html", "./page/system.html", "./page/theme.html", "./page/user.html", "./page/wall.html"], function(a, b) {
    var c, d = function(a) {
            core.setSkin(a), ShareData.frameTop("", function(b) {
                b.ui.setTheme(a)
            }), "diy" != a ? $(".theme-diy-setting").addClass("hidden") : $(".theme-diy-setting").removeClass("hidden")
        }, e = function(a) {
            core.setSkin(a)
        };
    template.helper("menuInfoDecode", function(a) {
        var b = htmlEncode(urlDecode(a));
        return b
    });
    var f = function(b) {
        var c = {
            about: a("./page/about.html"),
            fav: a("./page/fav.html"),
            help: a("./page/help.html"),
            member: a("./page/member.html"),
            system: a("./page/system.html"),
            theme: a("./page/theme.html"),
            user: a("./page/user.html"),
            wall: a("./page/wall.html")
        };
        return c[b]
    }, g = function(a) {
            ("" == a || void 0 == a) && (a = "user"), c = a, "fav&" == a.substring(0, 4) && (a = "fav"), $(".selected").removeClass("selected"), $("ul.setting a#" + a).addClass("selected");
            var b = window.location.href; - 1 != b.indexOf("#") && (b = b.substr(0, b.indexOf("#"))), window.location.href = b + "#" + a, $.ajax({
                url: G.appHost + "setting/slider&slider=" + a,
                beforeSend: function(a) {
                    $(".main").html("<img src='" + G.staticPath + "images/common/loading.gif'/>")
                },
                success: function(b) {
                    if ("about" == a) {
                        var d = b.data;
                        if (b.data = "", !core.tools.about(d)) return;
                        b.data = d
                    }
                    var e = $(".menu-left .selected").clone();
                    e.find(".ripple-father").remove();
                    var g = "<div class='h1'>" + e.html() + "</div>",
                        i = f(a),
                        j = template.compile(i),
                        k = j({
                            urlDecode: urlDecode,
                            LNG: LNG,
                            G: G,
                            data: b.data,
                            info: b.info
                        });
                    $(".main").html(g + k), $(".main").fadeIn("fast"), "fav" == a && Fav.init(c), "member" == a && System.init(), "theme" == a && h(), c = a, $("a,img").attr("draggable", "false")
                }
            })
        }, h = function() {
            seajs.use("lib/bootstrap-slider/bootstrap-slider.css"), seajs.use("lib/colorpicker/css/colorpicker.css"), a.async("lib/bootstrap-slider/bootstrap-slider.js", function() {
                $(".control-slider").slider().on("slide", c)
            }), a.async("lib/colorpicker/js/colorpicker", function() {
                $(".colorpicker").remove(), $(".color-picker").ColorPicker({
                    onBeforeShow: function(a) {
                        $(a).attr("input-name", $(this).attr("name")), $(this).ColorPickerSetColor(this.value)
                    },
                    onShow: function(a) {
                        return $(a).fadeIn(100), !1
                    },
                    onHide: function(a) {
                        return $(a).fadeOut(100), !1
                    },
                    onChange: function(a, b, d) {
                        var e = $($(this).data("colorpicker").el);
                        e.val("#" + b), e.parent().find(".btn i").css("background", e.val()), c()
                    }
                }).bind("keyup", function() {
                    $(this).ColorPickerSetColor(this.value), $(this).parent().find(".btn i").css("background", $(this).val())
                }), $(".color-picker-view").click(function() {
                    $(this).parent().find(".color-picker").click()
                })
            });
            var b = $(".theme-diy-setting");
            b.find("input[name]").unbind("change").bind("change", function() {
                var a = $(this).attr("name");
                "bgType" == a && ($(".theme-bg-type-image,.theme-bg-type-color").addClass("hidden"), $(".theme-bg-type-" + $(this).val()).removeClass("hidden")), $(this).attr("data-slider-value") || c()
            }), b.find(".theme-diy-save").unbind("click").bind("click", function() {
                var a = G.userConfig.themeDIY;
                $.ajax({
                    url: G.appHost + "setting/set&k=themeDIY&v=" + urlEncode(jsonEncode(a)),
                    dataType: "json",
                    success: function(a) {
                        Tips.tips(a)
                    }
                })
            }), b.find(".color-list").each(function() {
                var a = jsonDecode($(this).attr("data-color"));
                $(this).css("background-image", "linear-gradient(" + a.colorRotate + "deg," + a.startColor + "," + a.endColor + ")")
            }), b.find(".color-list").unbind("click").bind("click", function() {
                var a = jsonDecode($(this).attr("data-color"));
                $.each(a, function(a, d) {
                    var e = b.find("input[name=" + a + "]");
                    "colorRotate" == a ? $("#colorRotate").slider("setValue", parseInt(d)) : (e.val(d), e.parent().find(".color-picker-view i").css("background", d)), c()
                })
            });
            var c = function() {
                if ("diy" == LocalData.get("theme")) {
                    var a = {};
                    b.find("input[name]").each(function() {
                        var c = $(this).attr("name"),
                            d = $(this).val();
                        "checkbox" == $(this).attr("type") ? d = Number($(this).is(":checked")) : "radio" == $(this).attr("type") && (d = b.find("[name=" + c + "]:checked").val()), a[c] = d
                    }), LocalData.setConfig("kodStyleDiy", a), core.setSkin("diy"), ShareData.frameTop("", function(a) {
                        a.ui.setTheme("diy")
                    })
                }
            }
        }, i = function() {
            1 != G.isRoot && $("ul.setting #system").remove(), G.isRoot || core.authCheck("systemMember.get") || core.authCheck("systemGroup.get") ? $("ul.setting #member").show() : $("ul.setting #member").hide(), c = location.hash.split("#", 2)[1], g(c), $("ul.setting a").click(function() {
                c != $(this).attr("id") && (c = $(this).attr("id"), g(c))
            }), $("#password-new").keyEnter(function() {
                Setting.tools()
            }), $(".setting-user-basic .form-row input").die("change").live("change", function(a) {
                var b = $(this),
                    c = b.attr("name"),
                    d = b.val();
                "checkbox" == b.attr("type") && (d = b.prop("checked") ? "1" : "0"), j(c, d)
            }), $(".path-select").die("click").live("click", function() {
                core.api.pathSelect({
                    type: "file",
                    title: LNG.path_api_select_image,
                    allowExt: "png|jpg|bmp|gif|jpeg|ico|svg|tiff"
                }, function(a) {
                    var a = core.path2url(a);
                    $(".path-select").parent().find("input[type=text]").val(a).trigger("change"), Setting.tools()
                })
            }), $(".randomImage").die("click").live("click", function() {
                var a = $(this),
                    b = function(a) {
                        var b = G.myDesktop + "wallpage/";
                        $.get(G.appHost + "explorer/mkdir&repeat_type=replace&path=" + b, function() {
                            $.get(G.appHost + "explorer/serverDownload&type=download&savePath=" + b + "&url=" + urlEncode(a))
                        })
                    };
                core.api.randomImage(function(c) {
                    a.addClass("moveCircle"), a.parent().find("input[type=text]").val(c).trigger("change"), 1 == $('.box[data-type="wall"]').length && Setting.tools(), setTimeout(function() {
                        a.removeClass("moveCircle")
                    }, 1e3), b(c)
                })
            }), $(".box .list").live("hover", function() {
                $(this).addClass("listhover")
            }, function() {
                $(this).toggleClass("listhover")
            }).live("click", function(a) {
                var b = $(this),
                    c = b.parent();
                if (type = c.attr("data-type"), value = b.attr("data-value"), $(a.target).hasClass("item-remove")) return void b.remove();
                switch (-1 != $.inArray(type, ["wall", "theme"]) && (c.find(".this").removeClass("this"), b.addClass("this")), type) {
                    case "wall":
                        var e = value; - 1 == value.indexOf("/") && (e = "./static/images/wall_page/" + value + ".jpg"), $("#wallpage-url").val(""), ShareData.frameTop("", function(a) {
                            a.ui.setWall(e)
                        }), j(type, value);
                        break;
                    case "theme":
                        d(value), j(type, value)
                }
            }), $(".box .list-add").die("click").live("click", function(a) {
                $wallpageAddItem = $(this), core.api.pathSelect({
                    type: "file",
                    title: LNG.path_api_select_image,
                    allowExt: "png|jpg|bmp|gif|jpeg",
                    single: !1,
                    makeUrl: !0,
                    firstPath: G.basicPath + "static/images/wall_page/",
                    callback: function(a) {
                        var b = "";
                        $.each(a, function() {
                            var a = this.url.replace(G.appRoot, "./");
                            return -1 !== a.indexOf(",") ? void Tips.tips(LNG.error + ": " + a, "error") : $wallpageAddItem.parent().find('[data-value="' + a + '"]').exists() ? void Tips.tips(LNG.path_exists + ": " + a, "warning") : void(b += "<div class='list' data-value='" + a + "'>							<button class='item-remove font-icon icon-remove'></button>							<div class='ico'><img src='" + a + "'/></div>							<div class='info'>" + core.pathThis(a) + "</div>						</div>")
                        }), $(b).insertAfter($wallpageAddItem)
                    }
                })
            }), $(".wall-login-setting .save,.wall-desktop-setting .save").die("click").live("click", function(a) {
                var b = $(this).parents(".setting-tab").find(".box"),
                    c = b.attr("data-type"),
                    d = {}, e = [];
                $.each(b.find("[data-value]"), function() {
                    e.push($(this).attr("data-value"))
                }), d[c] = e.join(","), $.ajax({
                    url: G.appHost + "setting/systemSetting",
                    dataType: "json",
                    data: "data=" + urlEncode(jsonEncode(d)),
                    success: function(a) {
                        if (Tips.tips(a), "wallpageDesktop" == c) {
                            var b = $(".wall-desktop-setting .box").html(),
                                d = "";
                            $(".wall-desktop .box .list.this").exists() && (d = $(".wall-desktop .box .list.this").attr("data-value")), $(".wall-desktop .box").html(b), $(".wall-desktop .box").find(".list-add").remove(), $(".wall-desktop .box").find(".item-remove").remove(), $('.wall-desktop .box [data-value="' + d + '"]').addClass("this")
                        }
                    }
                })
            }), $(".nav a").live("click", function() {
                $(".nav a").removeClass("this"), $(this).addClass("this");
                var a = $(this).attr("data-page"),
                    b = $(this).parent().parent();
                b.find(".setting-tab").addClass("hidden"), b.find("." + a).removeClass("hidden").hide().fadeIn(200)
            })
        }, j = function(a, b) {
            var c = G.appHost + "setting/set&k=" + a + "&v=" + b;
            $.ajax({
                url: c,
                dataType: "json",
                success: function(a) {
                    a.code ? Tips.tips(a) : core.authCheck("setting.set") ? Tips.tips(LNG.config_save_error_file, !1) : Tips.tips(LNG.config_save_error_auth, !1)
                }
            })
        }, k = function(a) {
            var b = $(".selected").attr("id");
            switch (b) {
                case "user":
                    var c = urlEncode($("#password-now").val()),
                        d = urlEncode($("#password-new").val());
                    if ("" == d || "" == c) {
                        Tips.tips(LNG.password_not_null, "error");
                        break
                    }
                    $.ajax({
                        url: G.appHost + "user/changePassword&passwordNow=" + c + "&passwordNew=" + d,
                        dataType: "json",
                        success: function(a) {
                            if (Tips.tips(a), a.code) {
                                var b = ShareData.frameTop();
                                b.location.href = G.appHost + "user/logout"
                            }
                        }
                    });
                    break;
                case "wall":
                    var e = $("#wallpage-url").val();
                    if ("" == e) {
                        Tips.tips(LNG.picture_can_not_null, "error");
                        break
                    }
                    ShareData.frameTop("", function(a) {
                        a.ui.setWall(e)
                    }), $(".box").find(".this").removeClass("this"), $.ajax({
                        url: G.appHost + "setting/set&k=wall&v=" + urlEncode(e),
                        dataType: "json",
                        success: function(a) {
                            Tips.tips(a)
                        }
                    })
            }
        };
    return {
        init: i,
        setGoto: g,
        tools: k,
        setThemeSelf: e,
        setTheme: d
    }
});;
define("app/src/setting/page/about.html", [], '<div class="section">\n	<div class="content">{{@data}}</div>\n</div>\n');;
define("app/src/setting/page/fav.html", [], '<div class="fav setting-tab">\n	<table id=\'list\' align="center" border=0 cellspacing=0 cellpadding=0 ></table>\n	<a href="javascript:void(0);" class=\'add\'><i class="font-icon icon-plus"></i>{{LNG.button_add}}</a>\n</div>\n');;
define("app/src/setting/page/help.html", [], '<div class="section">\n	<div class="content">{{@data}}</div>\n</div>\n');;
define("app/src/setting/page/member.html", [], '<div class="system-content setting-member">\n	<div class="left-frame">\n		<div class="left-header">\n			<div class="tab this" id="system-group">{{LNG.system_group_edit}}</div>\n			<div class="tab" id="system-role">{{LNG.system_group_role}}</div>\n			<div style="clear:both"></div>\n		</div>\n		<div class="left-content system-group">\n			<div id="folder-list-tree"  class="ztree"></div>\n		</div>\n\n		<div class="left-content system-role">\n			<div class="role-box">\n				<ul class="role-list-cell"></ul>\n			</div>\n			<div class="group-role-btn">\n				<a href="javascript:System.systemGroupRole.showBox();">\n					<i class="font-icon icon-bookmark"></i>{{LNG.system_group_role_title}}\n				</a>\n			</div>\n		</div>\n	</div>\n	<!-- left-frame end -->\n\n	<div class="frame-resize"></div>\n\n	<div class="right-frame" id="content-system-group">\n		<div class="header-content">\n			<div class="group-title">\n				<a href="javascript:void(0);" class="group-title-span title-tooltip" title="{{LNG.edit}}" data-action="group-edit">--</a>\n				<span class="label label-info" style="font-size: 12px;">id:<em class="group-id"></em></span>\n				<a href="javascript:void(0);" class="font-icon-label ml-20 title-tooltip" title="{{LNG.system_group_add}}" data-action="group-add-child"><i class="font-icon icon-plus"></i></a>\n\n				<a href="javascript:void(0);" class="font-icon-label title-tooltip" title="{{LNG.open_the_path}}" data-action="group-home" >\n					<i class="font-icon icon-folder-open"></i></a>\n				<span class="group-size">111/1.5</span>\n			</div>\n		</div>\n		<div class="content user-list-content">\n		</div>\n	</div>\n	<!-- content-system-group end -->\n\n	<div class="right-frame" id="content-system-role">\n		<div class="header-content">\n			<div class="group-title">\n				<span class="role_title"></span>\n				<span class="label label-info" style="font-size: 12px;">id:<em class="role-id"></em></span>\n				<a href="javascript:void(0);" class="font-icon-label" data-action="role-delete" ><i class="font-icon icon-trash"></i></a>\n			</div>\n		</div>\n\n		<div class="section group-editor">\n			<div class="together input">\n				<div class="form-row">\n					<div class="title"><i>{{LNG.group_name}}</i></div>\n					<input type="text" id=\'name\' data-before=""/>\n					<a href="javascript:;" class="button warning" \n						title=\'{{LNG.group_tips}}\' title-timeout="100"><i class="icon-warning-sign"></i>{{LNG.tips}}!</a>\n					<div style="clear:both;"></div>\n				</div>\n				<div class="form-row">\n					<div class="title"><i>{{LNG.group_role_ext}}</i></div>\n					<input type="text" id=\'extNotAllow\' \n					default=\'htm|html|php|phtml|pwml|asp|aspx|ascx|jsp|pl|htaccess|shtml|shtm|phtm\' \n					value  ="htm|html|php|phtml|pwml|asp|aspx|ascx|jsp|pl|htaccess|shtml|shtm|phtm"/>\n					<a href="javascript:;" class="button warning path_ext_tips" \n						title=\'{{LNG.group_role_ext_warning}}\' title-timeout="100"><i class="icon-warning-sign"></i>{{LNG.tips}}!</a>\n					<div style="clear:both;"></div>\n				</div>\n			</div>\n			<div class="together">\n				<div class="title" style="height:75px"><i>{{LNG.group_role_file}}</i></div>\n				<div class="tagdiv">\n					<a class="tag" href="javascript:;" data-role=\'explorer.mkfile;app.userApp\'>\n						<input type="checkbox" class="checkbox kui-checkbox size-smallx blue">\n						<span>{{LNG.group_role_mkfile}}</span>\n					</a>\n					<a class="tag" href="javascript:;" data-role=\'explorer.mkdir\'>\n						<input type="checkbox" class="checkbox kui-checkbox size-smallx blue">\n						<span>{{LNG.group_role_mkdir}}</span>\n					</a>\n					<a class="tag" href="javascript:;" data-role=\'explorer.pathRname\'>\n						<input type="checkbox" class="checkbox kui-checkbox size-smallx blue">\n						<span>{{LNG.group_role_pathrname}}</span>\n					</a>\n					<a class="tag" href="javascript:;" data-role=\'explorer.pathDelete\'>\n						<input type="checkbox" class="checkbox kui-checkbox size-smallx blue">\n						<span>{{LNG.group_role_pathdelete}}</span>\n					</a>\n					<a class="tag" href="javascript:;" data-role=\'explorer.pathInfo;explorer.pathInfoMuti\'>\n						<input type="checkbox" class="checkbox kui-checkbox size-smallx blue">\n						<span>{{LNG.group_role_pathinfo}}</span>\n					</a>\n\n					<a class="tag" href="javascript:;" data-role=\'explorer.pathCopy;explorer.pathCute;explorer.pathCuteDrag;explorer.clipboard;explorer.pathPast\'>\n						<input type="checkbox" class="checkbox kui-checkbox size-smallx blue">\n						<span>{{LNG.group_role_pathmove}}</span>\n					</a>\n					<a class="tag" href="javascript:;" data-role=\'explorer.zip\'>\n						<input type="checkbox" class="checkbox kui-checkbox size-smallx blue">\n						<span>{{LNG.group_role_zip}}</span>\n					</a>\n					<a class="tag" href="javascript:;" data-role=\'explorer.unzip\'>\n						<input type="checkbox" class="checkbox kui-checkbox size-smallx blue">\n						<span>{{LNG.group_role_unzip}}</span>\n					</a>\n					<a class="tag" href="javascript:;" data-role=\'explorer.search\'>\n						<input type="checkbox" class="checkbox kui-checkbox size-smallx blue">\n						<span>{{LNG.group_role_search}}</span>\n					</a>\n					<a class="tag" href="javascript:;" data-role=\'editor.fileSave\'>\n						<input type="checkbox" class="checkbox kui-checkbox size-smallx blue">\n						<span>{{LNG.group_role_filesave}}</span>\n					</a>\n					<div style="clear:both;"></div>\n				</div>\n				<div style="clear:both;"></div>\n			</div>\n			<div class="together">\n				<div class="title"><i>{{LNG.group_role_can_upload}}</i></div>\n				<a class="tag" href="javascript:;" data-role=\'explorer.fileUpload\'>\n					<input type="checkbox" class="checkbox kui-checkbox size-smallx blue">\n					<span>{{LNG.group_role_upload}}</span>\n				</a>\n				<a class="tag" href="javascript:;" data-role=\'explorer.serverDownload\'>\n					<input type="checkbox" class="checkbox kui-checkbox size-smallx blue">\n					<span>{{LNG.group_role_download}}</span>\n				</a>\n				<a class="tag" href="javascript:;" data-role=\'explorer.fileDownload\'>\n					<input type="checkbox" class="checkbox kui-checkbox size-smallx blue">\n					<span>{{LNG.group_role_fileDownload}}</span>\n				</a>\n				<a class="tag" href="javascript:;" data-role=\'userShare.set;userShare.del\'>\n					<input type="checkbox" class="checkbox kui-checkbox size-smallx blue">\n					<span>{{LNG.group_role_share}}</span>\n				</a>\n				<div style="clear:both;"></div>\n			</div>\n\n			<div class="together">\n				<div class="title"><i>{{LNG.group_role_config}}</i></div>\n				<a class="tag" href="javascript:;" data-role=\'user.changePassword\'>\n					<input type="checkbox" class="checkbox kui-checkbox size-smallx blue">\n					<span>{{LNG.group_role_passowrd}}</span>\n				</a>\n				<a class="tag" href="javascript:;" data-role=\'setting.set\'>\n					<input type="checkbox" class="checkbox kui-checkbox size-smallx blue">\n					<span>{{LNG.group_role_config}}</span>\n				</a>\n				<a class="tag" href="javascript:;" data-role=\'fav.edit;fav.add;fav.del\'>\n					<input type="checkbox" id="23" class="checkbox kui-checkbox size-smallx blue">\n					<span>{{LNG.group_role_fav}}</span>\n				</a>\n				<div style="clear:both;"></div>\n			</div>\n\n			<div class="together combox">\n				<div class="title"><i>{{LNG.system_member_action}}</i></div>\n				<a class="tag" href="javascript:;" data-role=\'systemMember.get\'>\n					<input type="checkbox" class="checkbox kui-checkbox size-smallx blue">\n					<span>{{LNG.action_list}}</span>\n				</a>\n				<a class="tag" href="javascript:;" data-role=\'systemMember.add\'>\n					<input type="checkbox" class="checkbox kui-checkbox size-smallx blue">\n					<span>{{LNG.action_add}}</span>\n				</a>\n				<a class="tag" href="javascript:;" data-role=\'systemMember.edit\'>\n					<input type="checkbox" class="checkbox kui-checkbox size-smallx blue">\n					<span>{{LNG.action_edit}}</span>\n				</a>\n				<a class="tag" href="javascript:;" data-role=\'systemMember.doAction\'>\n					<input type="checkbox" class="checkbox kui-checkbox size-smallx blue">\n					<span>{{LNG.action_del}}</span>\n				</a>\n				<div style="clear:both;"></div>\n			</div>\n			<div class="together combox">\n				<div class="title"><i>{{LNG.system_group_action}}</i></div>\n				<a class="tag" href="javascript:;" data-role=\'systemGroup.get\'>\n					<input type="checkbox" class="checkbox kui-checkbox size-smallx blue">\n					<span>{{LNG.action_list}}</span>\n				</a>\n				<a class="tag" href="javascript:;" data-role=\'systemGroup.add\'>\n					<input type="checkbox" class="checkbox kui-checkbox size-smallx blue">\n					<span>{{LNG.action_add}}</span>\n				</a>\n				<a class="tag" href="javascript:;" data-role=\'systemGroup.edit\'>\n					<input type="checkbox" class="checkbox kui-checkbox size-smallx blue">\n					<span>{{LNG.action_edit}}</span>\n				</a>\n				<a class="tag" href="javascript:;" data-role=\'systemGroup.del\'>\n					<input type="checkbox" class="checkbox kui-checkbox size-smallx blue">\n					<span>{{LNG.action_del}}</span>\n				</a>\n				<div style="clear:both;"></div>\n			</div>\n\n			<div class="together combox">\n				<div class="title"><i>{{LNG.PluginCenter}}</i></div>\n				<a class="tag" href="javascript:;" \n					data-role=\'pluginApp.index;pluginApp.appList\'>\n					<input type="checkbox" class="checkbox kui-checkbox size-smallx blue">\n					<span>{{LNG[\'Plugin.auth.viewList\']}}</span>\n				</a>\n				<a class="tag" href="javascript:;" data-role=\'pluginApp.setConfig;systemMember.get;systemGroup.get;systemRole.get\'>\n					<input type="checkbox" class="checkbox kui-checkbox size-smallx blue">\n					<span>{{LNG[\'Plugin.auth.setting\']}}</span>\n				</a>\n				<a class="tag" href="javascript:;" data-role=\'pluginApp.changeStatus;\'>\n					<input type="checkbox" class="checkbox kui-checkbox size-smallx blue">\n					<span>{{LNG[\'Plugin.auth.status\']}}</span>\n				</a>\n				<a class="tag" href="javascript:;" data-role=\'pluginApp.install;pluginApp.unInstall\'>\n					<input type="checkbox" class="checkbox kui-checkbox size-smallx blue">\n					<span>{{LNG[\'Plugin.auth.install\']}}</span>\n				</a>\n				<div style="clear:both;"></div>\n			</div>\n\n			<div class="form-row form-row-submit">\n				<div class="setting-content">\n					<button class="btn btn-primary role-save-button" data-action="role-edit-save">{{LNG.button_save_submit}}</button>\n					<button class="btn btn-link revert" data-action="revert-all">{{LNG.button_select_all}}</button>\n				</div>\n			</div>\n		</div>\n\n	</div>\n	<!-- content-system-role end -->\n</div>\n</div><!-- 父元素结束 -->\n\n\n');;
define("app/src/setting/page/system.html", [], '<div class="nav">\n	<a href="javascript:;"  class="this" data-page="system-setting">{{LNG.system_setting}}</a>\n	<a href="javascript:;" class="" data-page="setting-safe">{{LNG.system_setting_save}}</a>\n	<a href="javascript:;" class="" data-page="setting-menu">{{LNG.system_setting_menu}}</a>\n	<a href="javascript:;" class="" data-page="setting-system-others">{{LNG.others}}</a>\n	<div style="clear:both;"></div>\n</div>\n\n{{if  G.isRoot}}\n	<div class="setting-tools-right">\n		{{if kod.window.core.versionType !="A"}}\n			<button class="fl-right btn btn-default btn-sm system-setting-more">{{LNG.more}}</button>\n		{{/if}}\n\n		{{if verIndex={\n			"A":"free",\n			"O":"1","O1":"1",\n			"P":"2",\n			"Q":"3","Q1":"3","Q2":"3","Q3":"3","Q4":"3","Q5":"3","Q6":"3","Q7":"3","Q8":"3","Q9":"3",\n			"R":"4",\n			"S":"5",\n			"T":"6"\n			} }}{{/if}}\n		{{if verKey = "version_vip_"+verIndex[kod.window.core.versionType] }}{{/if}}\n		<span class="version-vip" id="{{verKey}}">\n			<i class="font-icon icon-key"></i>\n			{{LNG[verKey]}}\n			【{{kod.window.core.versionType}}】\n		</span>\n	</div>\n{{/if}}\n\n\n<div class="setting-tab system-setting form-box">\n	<div class="panel-body">\n		<div class="form-row item-systemName">\n			<div class=\'setting-title\'>{{LNG.system_name}}:</div>\n			<div class="setting-content">\n				<input type="text" name="systemName" value="{{data.systemName | kod.window.htmlEncode}}" />\n				<i class="desc">{{LNG.system_name_desc}}</i>\n				<button  class="btn btn-default btn-sm" style="margin-left:20px;" onclick="core.update();">{{LNG.check_update}}</button>\n			</div>\n			<div class="clear"></div>\n		</div>\n\n		<div class="form-row item-systemDesc">\n			<div class=\'setting-title\'>{{LNG.system_desc | kod.window.htmlEncode}}:</div>\n			<div class="setting-content">\n				<input type="text" name="systemDesc" value="{{data.systemDesc || ""}}" />\n				<i class="desc">{{LNG.system_desc}}</i>\n			</div>\n			<div class="clear"></div>\n		</div>\n		<div class="form-row item-pathHidden">\n			<div class=\'setting-title\'>{{LNG.path_hidden}}:</div>\n			<div class="setting-content">\n				<input type="text" name="pathHidden" value="{{data.pathHidden || ""}}" />\n				<i class="desc">{{LNG.path_hidden_desc}}</i>\n			</div>\n			<div class="clear"></div>\n		</div>\n		<div class="form-row item-newUserFolder">\n			<div class=\'setting-title\'>{{LNG.new_user_folder}}:</div>\n			<div class="setting-content">\n				<input type="text" name="newUserFolder" value="{{data.newUserFolder || ""}}" />\n				<i class="desc">{{LNG.new_user_folder_desc}}</i>\n			</div>\n			<div class="clear"></div>\n		</div>\n		<div class="form-row item-newUserApp">\n			<div class=\'setting-title\'>{{LNG.new_user_app}}:</div>\n			<div class="setting-content">\n				<input type="text" name="newUserApp" value="{{data.newUserApp || ""}}"/>\n				<i class="desc">{{LNG.new_user_app_desc}}</i>\n			</div>\n			<div class="clear"></div>\n		</div>\n		<div class="form-row item-autoLogin">\n			<div class=\'setting-title\'>{{LNG.auto_login}}:</div>\n			<div class="setting-content">\n				<label>\n					<input type="checkbox" class="kui-checkbox-ios size-big" name="autoLogin" \n					{{if data.autoLogin==\'1\'}}checked="checked"{{/if}} /><em></em>\n					<i style="width:450px;">{{@LNG.auto_login_desc}}</i>\n				</label>\n			</div>\n			<div class="clear"></div>\n		</div>\n\n		<div class="form-row item-firstIn">\n			<div class=\'setting-title\'>{{LNG.first_in}}:</div>\n			<div class="setting-content">\n				<label><input type="radio" name="firstIn" value="desktop" class="kui-radio"\n					{{if data.firstIn==\'desktop\'}}checked="checked"{{/if}}/>\n					<span>{{LNG.ui_desktop}}</span>\n				</label>\n				<label><input type="radio" name="firstIn" value="explorer" class="kui-radio"\n					{{if data.firstIn==\'explorer\'}}checked="checked"{{/if}}/>\n					<span>{{LNG.ui_explorer}}</span>\n				</label>\n				<label><input type="radio" name="firstIn" value="editor"  class="kui-radio"\n					{{if data.firstIn==\'editor\'}}checked="checked"{{/if}}/>\n					<span>{{LNG.ui_editor}}</span>\n				</label>\n			</div>\n			<div class="clear"></div>\n		</div>\n\n		<!-- 提交 -->\n		<div class="form-row form-row-submit">\n			<div class="setting-content">\n				<button class="btn btn-primary setting-save">{{LNG.button_save}}</button>\n			</div>\n			<div class="clear"></div>\n		</div>\n	</div>\n\n	<div class="alert alert-warning hidden check-evn-error can-select can-right-menu" role="alert">\n		<a href="#" class="close" data-dismiss="alert">&times;</a>\n		<div class="pl-10">\n			<h3>{{LNG.php_env_error}}<a href="javascript:;" class="button warning phpinfo"><i class="icon-warning-sign"></i>phpinfo</a></h3>\n			<div class="error-content"></div>\n		</div>\n	</div>\n</div>\n\n\n\n<div class="setting-tab setting-safe form-box hidden">\n	<div class="panel-body">\n		<div class="form-row item-needCheckCode">\n			<div class=\'setting-title\'>{{LNG.need_check_code}}:</div>\n			<div class="setting-content">\n				<label>\n					<input type="checkbox" class="kui-checkbox-ios size-big"\n					 name="needCheckCode" {{if data.needCheckCode==\'1\'}}checked="checked"{{/if}} /><em></em>\n					<i>{{LNG.need_check_code_desc}}</i>\n				</label>\n			</div>\n			<div class="clear"></div>\n		</div>\n\n		<div class="form-row item-csrfProtect">\n			<div class=\'setting-title\'>{{LNG.setting_csrf_protect}}:</div>\n			<div class="setting-content">\n				<label>\n					<input type="checkbox" class="kui-checkbox-ios size-big" name="csrfProtect" {{if data.csrfProtect==\'1\'}}checked="checked"{{/if}} /><em></em>\n					<i>{{LNG.setting_csrf_protect_desc}}</i>\n				</label>\n			</div>\n			<div class="clear"></div>\n		</div>\n\n		<div class="line"></div>\n		<div class="form-row item-basedir">\n			<div class=\'setting-title\'>{{LNG.system_setting_root_path}}:</div>\n			<div class="setting-content can-select can-right-menu">\n				<i>{{LNG.system_setting_root_path_desc}}</i>\n			</div>\n			<div class="clear"></div>\n		</div>\n\n		<!-- 提交 -->\n		<div class="form-row form-row-submit">\n			<div class="setting-content">\n				<button class="btn btn-primary setting-save">{{LNG.button_save}}</button>\n			</div>\n			<div class="clear"></div>\n		</div>\n	</div>\n</div>\n\n<div class="setting-tab setting-menu form-box hidden">\n	<table id="list" align="center" border="0" cellspacing="0" cellpadding="0">\n		<tbody>\n		<tr class="title">\n			<td width="10%">{{LNG.menu_name}}</td>\n			<td>{{LNG.url_path}}<span>({{LNG.url_path_desc}})</span></td>\n			<td>{{LNG.menu_sub_menu}}</td>\n			<td>{{LNG.action}}</td>\n		</tr>\n\n		{{if data.menu.push({\'name\':\'\',\'type\':\'\',\'url\':\'\',\'target\':\'_blank\',\'use\':\'1\',\'subMenu\':0}) }}{{/if}}\n		{{each data.menu value key}}\n		{{if menuSystem = value[\'type\'] == \'system\' ? \'menuSystem\':\'\'}}{{/if}}\n		{{if menuShow = value[\'use\']  == \'1\' ? \'menu-show\':\'menu-hidden\'}}{{/if}}\n		{{if menuAdd = value[\'name\']  == \'\' ? \'menu-default hidden\':\'\'}}{{/if}}\n		<tr class="menu-list {{menuSystem}} {{menuShow}} {{menuAdd}}">\n			<td class="name"><input type="text" name="name" value="{{value.name | menuInfoDecode}}"/>\n				<span>{{if LNG[\'ui_\'+value[\'name\']]}} {{LNG[\'ui_\'+value[\'name\']]}} {{else}} null {{/if}}</span>\n			</td>\n			<td class="url">\n				<input type="text" name="url" value="{{value.url | menuInfoDecode}}">\n				<span>{{value.name}}</span>\n				<label>\n					<input type="checkbox" name="target" class="kui-checkbox size-small" value="{{value.target}}"\n					{{if value.target==\'_blank\'}}checked="checked"{{/if}}/>\n					<span>{{LNG.menu_open_window}}</span>\n				</label>\n			</td>\n			<td>\n				<label>\n					<input type="checkbox" name="subMenu" class="kui-checkbox size-small" value="{{value.subMenu}}"\n					{{if value.subMenu==\'1\'}}checked="checked"{{/if}}/>\n				</label>\n			</td>\n			<td class="action">\n				<button class=\'btn btn-default btn-sm move-up\'><i class="font-icon icon-arrow-up"></i></button>\n				<button class=\'btn btn-default btn-sm move-down\'><i class="font-icon icon-arrow-down"></i></button>\n				<button class=\'btn btn-default btn-sm move-hidden\'>\n					{{if value.use==\'1\'}} {{LNG.menu_hidden}} {{else}} {{LNG.menu_show}} {{/if}}\n				</button>\n				<button class=\'btn btn-default btn-sm move-del\'>{{LNG.menu_move_del}}</button>\n			</td>\n		</tr>\n		{{/each}}\n		</tbody>\n	</table>\n	\n	<a href="javascript:void(0)" class="add system-menu-add">\n		<i class="icon-plus pr-10"></i>{{LNG.button_add}}\n	</a>\n\n	<div class="form-row form-row-submit mt20">\n		<div class="setting-content">\n			<button class="btn btn-primary system-menu-save">{{LNG.button_save}}</button>\n		</div>\n		<div class="clear"></div>\n	</div>\n</div>\n\n\n\n<div class="setting-tab setting-system-others form-box hidden">\n	<div class="panel-body">\n		<div class="form-row item-rootListUser">\n			<div class=\'setting-title\'>{{LNG.setting_show_share_user}}:</div>\n			<div class="setting-content">\n				<label>\n					<input type="checkbox" class="kui-checkbox-ios size-big" \n						name="rootListUser" {{if data.rootListUser==\'1\'}}checked="checked"{{/if}} /><em></em>\n					<i class="">{{LNG.setting_show_share_user_desc}}</i>\n				</label>\n			</div>\n			<div class="clear"></div>\n		</div>\n\n		{{if kod.window.core.versionType !="A"}}\n		<div class="form-row item-rootListGroup">\n			<div class=\'setting-title\'>{{LNG.setting_show_root_group}}:</div>\n			<div class="setting-content">\n				<label>\n					<input type="checkbox" class="kui-checkbox-ios size-big" \n						name="rootListGroup" {{if data.rootListGroup==\'1\'}}checked="checked"{{/if}} /><em></em>\n					<i class="">{{LNG.setting_show_root_group_desc}}</i>\n				</label>\n			</div>\n			<div class="clear"></div>\n		</div>\n		{{/if}}\n\n		<div class="line"></div>		\n		<div class="form-row">\n			<div class=\'setting-title\'>{{LNG.action}}:</div>\n			<div class="setting-content">\n				<button class="btn btn-warning mr-20 mb-10" system-tools="clearCache">{{LNG.setting_clear_cache}}</button>\n				<button class="btn btn-warning mr-20 mb-10" system-tools="clearUserRecycle">{{LNG.setting_clear_user_recycle}}</button>\n				<!-- <button class="btn btn-warning mr-20" system-tools="clearSession">清空session</button> -->\n			</div>\n			<div class="clear"></div>\n		</div>\n		<div class="line"></div>\n\n		<div class="form-row item-globalIcp">\n			<div class=\'setting-title\'>{{LNG.setting_icp}}:</div>\n			<div class="setting-content">\n				<input type="text" name="globalIcp" value="{{data.globalIcp || ""}}" />\n				<i class="desc"></i>\n			</div>\n			<div class="clear"></div>\n		</div>\n\n		<div class="form-row item-globalCss">\n			<div class=\'setting-title\'>{{LNG.setting_global_css}}:</div>\n			<div class="setting-content">\n				<textarea name="globalCss">{{data.globalCss || ""}}</textarea>\n				<i class="desc">{{LNG.setting_global_css_desc}}</i>\n			</div>\n			<div class="clear"></div>\n		</div>\n\n		<div class="form-row item-globalHtml">\n			<div class=\'setting-title\'>{{LNG.setting_global_html}}:</div>\n			<div class="setting-content">\n				<textarea name="globalHtml">{{data.globalHtml || ""}}</textarea>\n				<i class="desc">{{LNG.setting_global_html_desc}}</i>\n			</div>\n			<div class="clear"></div>\n		</div>\n\n		<!-- 提交 -->\n		<div class="form-row form-row-submit">\n			<div class="setting-content">\n				<button class="btn btn-primary setting-save">{{LNG.button_save}}</button>\n			</div>\n			<div class="clear"></div>\n		</div>\n	</div>\n\n</div>\n');;
define("app/src/setting/page/theme.html", [], '<div class="section">\n	<div class=\'box\' data-type="theme">\n	{{each data.settingAll.themeall.split(\',\')  value key}}\n	<div class=\'{{if value==data.user.theme}}this{{/if}} list\' data-value=\'{{value}}\'>\n		<div class=\'theme ico\'><img src=\'{{G.staticPath}}images/thumb/theme/{{value}}.png\'/></div>\n		<div class=\'info\'>{{@LNG[\'theme_\'+value]}}</div>\n	</div>\n	{{/each}}\n\n	{{each data.settingAll.themeall.split(\',\')  value key}}\n	<div class=\'flex-list\'></div>\n	{{/each}}\n	\n	<div style="clear:both;"></div>\n	</div>\n</div>\n\n{{if config = G.userConfig.themeDIY}}{{/if}}\n<div class="theme-diy-setting panel panel-default {{if G.userConfig.theme!=\'diy\'}}hidden{{/if}} form-box" >\n	<div class="panel-heading"><h3 class="panel-title">{{LNG.theme_diy_title}}</h3></div>\n	<div class="panel-body">\n		<div class="form-row theme-bg-type">\n			<div class=\'setting-title\'>{{LNG.theme_diy_background}}:</div>\n			<div class="setting-content">\n				<label><input type="radio" class="kui-radio" name="bgType" value="image" \n					{{if config.bgType == \'image\'}}checked="checked"{{/if}} />\n					<span>{{LNG.theme_diy_image}}</span>\n				</label>\n				<label><input type="radio" class="kui-radio" name="bgType" value="color" \n					{{if config.bgType == \'color\'}}checked="checked"{{/if}} />\n					<span>{{LNG.theme_diy_color_blur}}</span>\n				</label>\n			</div>\n			<div class="clear"></div>\n		</div>\n\n		<div class="theme-bg-type-image {{if config.bgType != \'image\'}}hidden{{/if}}">\n			<div class="form-row theme-bg-blur">\n				<div class=\'setting-title\'>{{LNG.theme_diy_image_blur}}:</div>\n				<div class="setting-content">\n					<label class="disable-ripple">\n					<input type="checkbox" class="kui-checkbox-ios size-big" name="bgBlur"  {{if config.bgBlur==\'1\'}}checked="checked"{{/if}}/><em></em>\n					</label>\n				</div>\n				<div class="clear"></div>\n			</div>\n			<div class="form-row theme-bg-image">\n				<div class=\'setting-title\'>{{LNG.theme_diy_image_url}}:</div>\n				<div class="setting-content file-select-input">\n					<input type="text" name="bgImage" value="{{config.bgImage}}" \n						style="width: 80%;" class="span-title-right" /> \n					<button class="path-select btn btn-default input-title-right">\n						<i class="font-icon icon-folder-open"></i>\n					</button>\n					<img class="randomImage" src="{{G.staticPath+\'images/common/desktop/fengche.png\'}}" title="{{LNG.setting_wall}}"/>\n				</div>\n				<div class="clear"></div>\n			</div>\n		</div>\n\n		<div class="theme-bg-type-color {{if config.bgType != \'color\'}}hidden{{/if}}">\n			<div class="form-row form-color">\n				<div class=\'setting-title\'>{{LNG.theme_diy_color_start}}:</div>\n				<div class="setting-content">\n					<input type="text" name="startColor" value="{{config.startColor}}"\n						class="color-picker span-title-right"/>\n					<button class="btn btn-default color-picker-view input-title-right">\n						<i style="background:{{config.startColor}}"></i>\n					</button>\n					<i class="desc">&nbsp;</i>				\n				</div>\n				<div class="clear"></div>\n			</div>\n			<div class="form-row form-color">\n				<div class=\'setting-title\'>{{LNG.theme_diy_color_end}}:</div>\n				<div class="setting-content">\n					<input type="text" name="endColor" value="{{config.endColor}}" \n						class="color-picker span-title-right"/>\n					<button class="btn btn-default color-picker-view input-title-right">\n						<i style="background:{{config.endColor}}"></i>\n					</button>\n					<i class="desc">&nbsp;</i>\n				</div>\n				<div class="clear"></div>\n			</div>\n			<div class="form-row ">\n				<div class=\'setting-title\'>{{LNG.theme_diy_color_radius}}:</div>\n				<div class="setting-content">\n					<input type="text" name="colorRotate" class="control-slider"\n					data-slider-min="0"\n					data-slider-max="360"\n					data-slider-step="1"\n					data-slider-value="{{config.colorRotate}}"/>\n				</div>\n				<div class="clear"></div>\n			</div>\n\n			<div class="color-default">\n				<div class="color-list" data-color=\'{"startColor":"#93ad34","endColor":"#198a62","colorRotate":"310"}\'></div>\n				<div class="color-list" data-color=\'{"startColor":"#5648c1","endColor":"#6fe3e7","colorRotate":"160"}\'></div>\n				<div class="color-list" data-color=\'{"startColor":"#7b4397","endColor":"#2b85a6","colorRotate":"300"}\'></div>\n				<div class="color-list" data-color=\'{"startColor":"#860073","endColor":"#4f1670","colorRotate":"300"}\'></div>\n				<div class="color-list" data-color=\'{"startColor":"#248556","endColor":"#16226e","colorRotate":"165"}\'></div>\n				<div class="color-list" data-color=\'{"startColor":"#d16645","endColor":"#13052e","colorRotate":"195"}\'></div>\n				<div class="color-list" data-color=\'{"startColor":"#d23c39","endColor":"#dca74a","colorRotate":"320"}\'></div>\n				<div class="color-list" data-color=\'{"startColor":"#7f7280","endColor":"#000000","colorRotate":"160"}\'></div>\n				<div class="color-list" data-color=\'{"startColor":"#77cfa0","endColor":"#0c2b50","colorRotate":"330"}\'></div>\n				<div class="color-list" data-color=\'{"startColor":"#29c0db","endColor":"#1178c2","colorRotate":"300"}\'></div>\n			</div>\n		</div>\n\n		<div class="form-row">\n			<div class=\'setting-title\'></div>\n			<div class="setting-content">\n				<button class="theme-diy-save btn btn-primary">{{LNG.button_save}}</button>\n			</div>\n			<div class="clear"></div>\n		</div>\n\n	</div>\n</div>\n');;
define("app/src/setting/page/user.html", [], '<div class="nav">\n	<a href="javascript:;"  class="this" data-page="setting-user-basic">{{LNG.setting_basic}}</a>\n	<a href="javascript:;" class="" data-page="setting-user-password">{{LNG.setting_password}}</a>\n	<div style="clear:both;"></div>\n</div>\n\n<div class="setting-tab setting-user-basic form-box">\n	<div class="panel-body">\n		<div class="form-row">\n			<div class=\'setting-title\'>{{LNG.recycle_open_if}}:</div>\n			<div class="setting-content">\n				<label class="disable-ripple">\n					<input type="checkbox" class="kui-checkbox-ios size-big" name="recycleOpen"\n					 {{if data.user.recycleOpen==\'1\'}}checked="checked"{{/if}}/><em></em>\n					<span class=\'desc\'>{{LNG.setting_user_recycle_desc}}</span>\n				</label>\n			</div>\n			<div class="clear"></div>\n		</div>\n\n\n		<div class="form-row">\n			<div class=\'setting-title\'>{{LNG.setting_user_animate_open}}:</div>\n			<div class="setting-content">\n				<label class="disable-ripple">\n					<input type="checkbox" class="kui-checkbox-ios size-big" name="animateOpen"\n					 {{if data.user.animateOpen !=\'0\'}}checked="checked"{{/if}}/><em></em>\n					<span class=\'desc\'>{{LNG.setting_user_animate_desc}}</span>\n				</label>\n			</div>\n			<div class="clear"></div>\n		</div>\n\n		<div class="form-row">\n			<div class=\'setting-title\'>{{LNG.setting_user_sound_open}}:</div>\n			<div class="setting-content">\n				<label class="disable-ripple">\n					<input type="checkbox" class="kui-checkbox-ios size-big" name="soundOpen"\n					 {{if data.user.soundOpen ==\'1\'}}checked="checked"{{/if}}/><em></em>\n					<span class=\'desc\'>{{LNG.setting_user_sound_desc}}</span>\n				</label>\n			</div>\n			<div class="clear"></div>\n		</div>\n		<div class="line"></div>\n\n		<div class="form-row">\n			<div class=\'setting-title\'>{{LNG.upload_exist}}:</div>\n			<div class="setting-content">\n				<label>\n					<input type="radio" class="kui-radio" name="fileRepeat" value="rename" {{if data.user.fileRepeat==\'rename\'}}checked="checked"{{/if}}/>\n					<span>{{LNG.upload_exist_rename}}</span>\n				</label>\n				<label>\n					<input type="radio" class="kui-radio" name="fileRepeat" value="replace" {{if data.user.fileRepeat==\'replace\'}}checked="checked"{{/if}}/>\n					<span>{{LNG.upload_exist_replace}}</span>\n				</label>\n				<label>\n					<input type="radio" class="kui-radio" name="fileRepeat" value="skip" {{if data.user.fileRepeat==\'skip\'}}checked="checked"{{/if}}/>\n					<span>{{LNG.upload_exist_skip}}</span>\n				</label>\n				<div style="clear:both"></div>\n			</div>\n			<div class="clear"></div>\n		</div>\n		<div class="line"></div>\n\n		<div class="form-row">\n			<div class=\'setting-title\'>{{LNG.setting_user_imageThumb}}:</div>\n			<div class="setting-content">\n				<label class="disable-ripple">\n					<input type="checkbox" class="kui-checkbox-ios size-big" name="imageThumb"\n					 {{if data.user.imageThumb !=\'0\'}}checked="checked"{{/if}}/><em></em>\n					<span class=\'desc\'>{{LNG.setting_user_imageThumb_desc}}</span>\n				</label>\n			</div>\n			<div class="clear"></div>\n		</div>\n		<div class="form-row">\n			<div class=\'setting-title\'>{{LNG.setting_user_fileSelect}}:</div>\n			<div class="setting-content">\n				<label class="disable-ripple">\n					<input type="checkbox" class="kui-checkbox-ios size-big" name="fileSelect"\n					 {{if data.user.fileSelect !=\'0\'}}checked="checked"{{/if}}/><em></em>\n					<span class=\'desc\'>{{LNG.setting_user_fileSelect_desc}}</span>\n				</label>\n			</div>\n			<div class="clear"></div>\n		</div>\n\n		<div class="form-row form-row-submit">\n			<div class="setting-content">\n				<!-- <button class="btn btn-primary save disabled">{{LNG.button_save}}</button> -->\n			</div>\n			<div class="clear"></div>\n		</div>\n	</div>\n</div>\n\n\n<div class="setting-tab setting-user-password hidden form-box">\n	<div class="panel-body">\n		<div class="form-row">\n			<div class=\'setting-title\'>{{LNG.setting_password_old}}:</div>\n			<div class="setting-content"><input type="password" id="password-now"value="" /></div>\n			<div class="clear"></div>\n		</div>\n\n		<div class="form-row">\n			<div class=\'setting-title\'>{{LNG.setting_password_new}}:</div>\n			<div class="setting-content"><input type="password" id="password-new" value=""/></div>\n			<div class="clear"></div>\n		</div>\n\n		<div class="form-row form-row-submit">\n			<div class="setting-content">\n				<button onclick="Setting.tools();" class="btn btn-primary save">{{LNG.button_save}}</button>\n			</div>\n			<div class="clear"></div>\n		</div>\n	</div>\n</div>\n');;
define("app/src/setting/page/wall.html", [], '<div class="nav">\n	<a href="javascript:;"  class="this" data-page="wall-desktop">{{LNG.setting_wall_desktop}}</a>\n	{{if G.isRoot}}\n		<a href="javascript:;" class="" data-page="wall-desktop-setting">{{LNG.setting_wall_desktop_list}}</a>\n		<a href="javascript:;" class="" data-page="wall-login-setting">{{LNG.setting_wall_login_list}}</a>\n	{{/if}}\n	<div style="clear:both;"></div>\n</div>\n\n\n<div class="setting-tab wall-desktop mt-20">\n	<div class="section">\n		<div class=\'box\' data-type="wall">\n			{{each data.wallpageDesktop.split(\',\')  value key}}\n			{{if value}}\n			<div class=\'{{if value==data.user.wall}}this{{/if}} list\' data-value=\'{{value}}\'>\n				{{if value.indexOf(\'/\')== -1}}\n				<div class=\'ico\'><img src=\'./static/images/wall_page/{{value}}.jpg\'/></div>\n				{{else}}\n				<div class=\'ico\'><img src=\'{{value}}\'/></div>\n				{{/if}}\n				<div class="info">{{value | kod.core.pathThis}}</div>\n			</div>\n			{{/if}}\n			{{/each}}\n			{{each \'1,1,1,1,1,1,1\'.split(\',\')  value key}}<div class=\'flex-list\'></div>{{/each}}\n			<div style="clear:both;"></div>\n		</div>\n	</div>\n	<div class="panel panel-default form-box">\n		<div class="panel-heading"><h3 class="panel-title">{{LNG.setting_wall_diy}}</h3></div>\n		<div class="panel-body">\n			<div class="form-row theme-bg-image">\n				<div class=\'setting-title\'>URL:</div>\n				<div class="setting-content file-select-input">\n					<input type="text" id="wallpage-url" style="width:80%;" {{if data.user.wall.length>3}}value="{{data.user.wall}}"{{/if}}/> \n					<button class="path-select btn btn-default input-btn-right">\n						<i class="font-icon icon-folder-open"></i>\n					</button>\n					<img class="randomImage" src="{{G.staticPath+\'images/common/desktop/fengche.png\'}}" title="{{LNG.setting_wall}}"/>\n				</div>\n				<div class="clear"></div>\n			</div>\n\n			<!-- 提交 -->\n			<div class="form-row">\n				<div class=\'setting-title\'></div>\n				<div class="setting-content">\n					<button onclick="Setting.tools();" class="btn btn-primary mb-20">{{LNG.button_save}}</button>\n				</div>\n				<div class="clear"></div>\n			</div>\n		</div>\n	</div>\n</div>\n\n\n<div class="setting-tab wall-desktop-setting form-box hidden mt-20">\n	<div class="section">\n		<div class=\'box\' data-type="wallpageDesktop">\n			<div class=\'list list-add\'>\n				<i class="font-icon icon-plus-sign"></i><br/>{{LNG.button_add}}\n			</div>\n			{{each data.wallpageDesktop.split(\',\')  value key}}\n			{{if value}}\n			<div class=\'list\' data-value=\'{{value}}\'>\n				<button class=\'item-remove font-icon icon-remove\'></button>\n				{{if value.indexOf(\'/\')== -1}}\n				<div class=\'ico\'><img src=\'./static/images/wall_page/{{value}}.jpg\'/></div>\n				{{else}}\n				<div class=\'ico\'><img src=\'{{value}}\'/></div>\n				{{/if}}\n				<div class="info">{{value | kod.core.pathThis}}</div>\n			</div>\n			{{/if}}\n			{{/each}}\n			{{each \'1,1,1,1,1,1,1\'.split(\',\')  value key}}<div class=\'flex-list\'></div>{{/each}}\n			<div style="clear:both;"></div>\n		</div>\n	</div>\n\n	<!-- 提交 -->\n	<div class="form-row form-row-submit">\n		<div class="setting-content">\n			<button class="btn btn-primary save">{{LNG.button_save}}</button>\n		</div>\n		<div class="clear"></div>\n	</div>\n</div>\n\n<div class="setting-tab wall-login-setting hidden form-box mt-20">\n	<div class="section">\n		<div class=\'box\' data-type="wallpageLogin">\n			<div class=\'list list-add\'>\n				<i class="font-icon icon-plus-sign"></i><br/>{{LNG.button_add}}\n			</div>\n			{{each data.wallpageLogin.split(\',\')  value key}}\n			{{if value}}\n			<div class=\'list\' data-value=\'{{value}}\'>\n				<button class=\'item-remove font-icon icon-remove\'></button>\n				{{if value.indexOf(\'/\')== -1}}\n				<div class=\'ico\'><img src=\'./static/images/wall_page/{{value}}.jpg\'/></div>\n				{{else}}\n				<div class=\'ico\'><img src=\'{{value}}\'/></div>\n				{{/if}}\n				<div class="info">{{value | kod.core.pathThis}}</div>\n			</div>\n			{{/if}}\n			{{/each}}\n			{{each \'1,1,1,1,1,1,1\'.split(\',\') value key}}<div class=\'flex-list\'></div>{{/each}}\n			<div style="clear:both;"></div>\n		</div>\n	</div>\n\n	<!-- 提交 -->\n	<div class="form-row form-row-submit">\n		<div class="setting-content">\n			<button class="btn btn-primary save">{{LNG.button_save}}</button>\n			<a href="./?user/login" target="_blank" class="pl-10 pr-10">预览</a>\n			<em>{{LNG.setting_wall_login_tips}}</em>\n		</div>\n		<div class="clear"></div>\n	</div>\n</div>\n\n');;
define("app/src/setting/system/systemSetting", [], function(a, b) {
    var c = function() {
        $("input[name='firstIn']").live("click", function() {
            $("input[name='firstIn']").removeAttr("checked"), $(this).attr("checked", "checked")
        }), $(".setting-save").die("click").live("click", function() {
            var a = {};
            $(this).parents(".setting-tab").find(".form-row [name]").each(function() {
                var b = $(this),
                    c = b.attr("name");
                "checkbox" == b.attr("type") ? a[c] = void 0 == b.attr("checked") ? "0" : "1" : "radio" == b.attr("type") ? a[c] = $("[name=" + c + "]:checked").val() : a[c] = urlEncode(b.val())
            }), g(a)
        }), $(".system-setting-more").die("click").live("click", function() {
            if (G.isRoot) {
                var a = G.basicPath + "config/setting_user.php",
                    b = ShareData.frameTop();
                if ("undefined" != typeof b.Editor) return void b.Editor.add(urlEncode(a));
                if (ShareData.frameTop("OpenopenEditor")) {
                    var c = b.$.dialog.list.openEditor,
                        d = 0;
                    c && ("hidden" == $("." + c.config.id).css("visibility") && (d = 200), c.display(!0).zIndex().focus()), setTimeout(function() {
                        ShareData.frameTop("OpenopenEditor", function(b) {
                            b.Editor.add(urlEncode(a))
                        })
                    }, d)
                } else {
                    var e = G.appHost + "editor/edit#filename=" + urlEncode(a);
                    core.openDialog(e, core.icon("edit"), htmlEncode(a), "openEditor")
                }
            }
        }), d(), e(), f()
    }, d = function() {
            $(".phpinfo").die("click").live("click", function() {
                $.dialog.open(G.appHost + "setting/phpInfo&accessToken=" + G.accessToken, {
                    title: "php_info",
                    width: "70%",
                    height: "65%",
                    resize: !0
                })
            }), $.get(G.appHost + "setting/slider&slider=system&env_check=1", function(a) {
                if (a && "" != a.data) {
                    Tips.tips(a.data, "warning");
                    var b = $(".check-evn-error");
                    b.removeClass("hidden"), b.find(".error-content").html(a.data)
                }
            })
        }, e = function() {
            $('.setting-menu .menu-list input[name="target"]').live("click", function() {
                "_blank" == $(this).val() ? ($(this).val("_self"), $(this).removeAttr("checked")) : ($(this).val("_blank"), $(this).attr("checked", "checked"))
            }), $(".setting-menu .system-menu-add").die("click").live("click", function() {
                var a = $(".menu-default").clone().removeClass("menu-default hidden").addClass("menu-list");
                a.insertAfter(".setting-menu .menu-list:last")
            }), $(".setting-menu .menu-list .move-up").die("click").live("click", function() {
                var a = $(this).parent().parent();
                a.prev().hasClass("menu-list") && a.insertBefore(a.prev())
            }), $(".setting-menu .menu-list .move-down").die("click").live("click", function() {
                var a = $(this).parent().parent();
                a.next().hasClass("menu-list") && a.insertAfter(a.next())
            }), $(".setting-menu .menu-list .move-hidden").die("click").live("click", function() {
                var a = $(this).parent().parent();
                a.hasClass("menu-hidden") ? (a.removeClass("menu-hidden"), $(this).text(LNG.menu_hidden)) : (a.addClass("menu-hidden"), $(this).text(LNG.menu_show))
            }), $(".setting-menu .menu-list .move-del").die("click").live("click", function() {
                var a = $(this).parent().parent();
                a.remove()
            }), $(".system-menu-save").die("click").live("click", function() {
                var a = [];
                $(".setting-menu .menu-list").each(function() {
                    var b = $(this),
                        c = {};
                    b.hasClass("menu-default") || (b.find("input").each(function() {
                        var a = $(this).attr("value");
                        "checkbox" == $(this).attr("type") && (a = Number($(this).prop("checked"))), "target" == $(this).attr("name") && a && (a = "_blank"), c[$(this).attr("name")] = urlEncode(a)
                    }), "" != c.name && (c.use = "1", c.type = "", b.hasClass("menu-hidden") && (c.use = "0"), b.hasClass("menu-system") && (c.type = "system"), a.push(c)))
                }), g({
                    menu: a
                })
            })
        }, f = function() {
            $("[system-tools]").die("click").live("click", function() {
                var a = $(this),
                    b = a.attr("system-tools"),
                    c = htmlRemoveTags(a.html());
                a.addClass("disabled").html(LNG.loading), Tips.loading(LNG.loading), $.ajax({
                    url: G.appHost + "setting/systemTools&action=" + b,
                    dataType: "json",
                    error: function(b, d, e) {
                        core.ajaxError(b, d, e), Tips.close(LNG.error, !1), a.removeClass("disabled").html(c)
                    },
                    success: function(b) {
                        Tips.close(b), setTimeout(function() {
                            a.removeClass("disabled").html(c)
                        }, 300)
                    }
                })
            })
        }, g = function(a) {
            $.ajax({
                url: G.appHost + "setting/systemSetting",
                type: "POST",
                data: "accessToken=" + G.accessToken + "&data=" + urlEncode(jsonEncode(a)),
                dataType: "json",
                success: function(a) {
                    Tips.tips(a)
                }
            })
        };
    1 == G.isRoot && c()
});;
define("app/src/setting/system/system", ["lib/contextMenu/jquery-contextMenu", "lib/ztree/ztree", "./systemMember", "./tpl/userList.html", "./tpl/user.html", "./tpl/userImport.html", "./tpl/groupSelect.html", "./systemGroup", "./tpl/group.html", "./systemRole", "./systemGroupRole", "./tpl/groupRoleSetting.html"], function(a, b) {
    a("lib/contextMenu/jquery-contextMenu"), a("lib/ztree/ztree");
    var c = a("./systemMember"),
        d = a("./systemGroup"),
        e = a("./systemRole"),
        f = a("./systemGroupRole"),
        g = function() {
            h("system-group"), i(), f.init(function() {
                e.init(), d.init()
            })
        }, h = function(a) {
            $(".system-content .this").removeClass("this"), $(".system-content #" + a).addClass("this"), $(".left-content").addClass("hidden"), $("." + a).removeClass("hidden"), $(".right-frame").addClass("hidden"), $("#content-" + a).removeClass("hidden")
        }, i = function() {
            $(".left-header .tab").die("click").live("click", function() {
                var a = $(this).attr("id");
                h(a)
            });
            var a = $(".system-content .frame-resize"),
                b = $(".system-content .left-frame").width();
            a.drag({
                start: function() {
                    a.addClass("active"), b = $(".system-content .left-frame").width()
                },
                move: function(c, d) {
                    var e = b + c;
                    e = 10 >= e ? 10 : e >= 500 ? 500 : e, $(".system-content .left-frame").css("width", e), $(".system-content .right-frame").css("left", e), a.css("left", e)
                },
                end: function(b, c) {
                    a.removeClass("active")
                }
            })
        }, j = function(a) {
            a.each(function() {
                var a = core.userSpaceHtml($(this).html());
                $(this).html(a)
            })
        }, k = function(a) {
            var b = G.userPath + a.path + "/home/";
            a.groupID && (b = G.groupPath + a.path + "/home/"), a.homePath && (b = a.homePath), window.parent && window.parent.core && window.parent.core.isApp("explorer") ? ShareData.frameTop("", function(a) {
                a.$.artDialog.list.setting_mode.display(!1), a.Tips.loading(LNG.loading), setTimeout(function() {
                    a.ui.path.list(b), a.Tips.close(LNG.system_open_true_path, !0)
                }, 200)
            }) : core.explorer(b)
        };
    return {
        init: g,
        sizeUse: j,
        openPath: k,
        systemMember: c,
        systemGroup: d,
        systemRole: e,
        systemGroupRole: f
    }
});;;
! function($) {
    ! function($, n, t, e, i, r, o, a, c, E, u, f, s, G, v, d, L, h, l, J, A, k, _, m, M, P, p, b, Q, C, g, y, j, Z, N, V, D, S, O, R, U, Y, F, w, B, H, I, W, x, T, z, X, K, q, $n, nn, tn, en, rn, on, an, cn, En, un, fn, sn, Gn, vn, dn, Ln, hn, ln, Jn, An, kn, _n, mn, Mn, Pn, pn, bn, Qn, Cn, gn, yn, jn, Zn, Nn, Vn, Dn, Sn, On, Rn, Un, Yn, Fn, wn, Bn, Hn, In, Wn, xn, Tn, zn, Xn, Kn, qn, $t, nt, tt, et, it, rt, ot, at, ct, Et, ut, ft, st, Gt, vt, dt, Lt, ht, lt, Jt, At, kt, _t, mt, Mt, Pt, pt, bt, Qt, Ct, gt, yt, jt, Zt, Nt, Vt, Dt, St, Ot, Rt, Ut, Yt, Ft, wt, Bt, Ht, It, Wt, xt, Tt, zt, Xt, Kt, qt, $e, ne, te, ee, ie, re, oe, ae, ce, Ee, ue, fe, se, Ge, ve, de, Le, he, le, Je, Ae, ke, _e, me, Me, Pe, pe, be, Qe, Ce, ge, ye, je, Ze, Ne, Ve, De, Se, Oe, Re, Ue, Ye, Fe, we, Be, He, Ie, We, xe, Te, ze, Xe, Ke, qe, $i, ni, ti, ei, ii, ri, oi, ai, ci, Ei, ui, fi, si, Gi, vi, di, Li, hi, li, Ji, Ai, ki, _i, mi, Mi, Pi, pi, bi, Qi, Ci, gi, yi, ji, Zi, Ni, Vi, Di, Si, Oi, Ri, Ui, Yi, Fi, wi, Bi, Hi, Ii, Wi, xi, Ti, zi, Xi, Ki, qi, $r, nr, tr, er, ir, rr, or, ar, cr, Er, ur, fr, sr, Gr, vr, dr, Lr, hr, lr, Jr, Ar, kr, _r, mr, Mr, Pr, pr, br, Qr, Cr, gr, yr) {
        $[t](e, [i, r, o, a], function(n) {
            var t, e, jr = function(n) {
                    return void c != t ? void Zr(n) : void $[u][E]({
                        url: $[s][f] + G,
                        dataType: v,
                        success: function(e) {
                            return e[d] ? (t = $[h][L](e, l), void Zr(n)) : void $[A][J](e)
                        },
                        error: function() {
                            return !k
                        }
                    })
                }, Zr = function(r) {
                    (_ == r || void c == r) && (r = e), e = r;
                    var o = n(i),
                        a = $[M][m](o),
                        E = a({
                            LNG: $[P],
                            selectGroup: r,
                            userList: t,
                            groupRoleList: $[Q][b][p](),
                            groupList: $[Q][C][p](),
                            roleList: $[Q][g][p]()
                        });
                    $[u](j)[y](E), $[u](N)[Z](V), $[Q][D]($[u](S)), $[u](O)[y]($[U](t)[R] + $[P][Y])
                }, Nr = function(n, i, r) {
                    if (void c != i) {
                        F != typeof i && (i = [i]);
                        var o = {
                            del: $[P][w],
                            roleSet: $[P][B],
                            groupRemoveFrom: $[P][H]
                        }, a = function() {
                                $[u][E]({
                                    url: $[s][f] + I + n,
                                    type: W,
                                    data: x + $[T](i) + z + r,
                                    dataType: v,
                                    beforeSend: function() {
                                        $[A][X]()
                                    },
                                    error: $[h][K],
                                    success: function(n) {
                                        $[A][q](n), $[u][nn][$n][tn] && $[u][nn][$n][tn][q](), t = void c, jr(e)
                                    }
                                })
                            };
                        o[n] ? $[u][nn]({
                            id: en,
                            fixed: !c,
                            icon: rn,
                            padding: on,
                            width: an,
                            lock: !c,
                            background: cn,
                            opacity: En,
                            content: o[n],
                            ok: function() {
                                a()
                            },
                            cancel: !c
                        }) : a()
                    }
                }, Vr = un,
                Dr = function($) {
                    Yr(Or($))
                }, Sr = function($) {
                    Yr(Or($), !c)
                }, Or = function($) {
                    var n = {
                        1: Vr
                    };
                    return n[$] = Vr, {
                        userID: _,
                        name: _,
                        password: fn,
                        role: _,
                        groupInfo: n,
                        config: {
                            sizeMax: sn,
                            sizeUse: Gn
                        }
                    }
                }, Rr = function() {
                    var n = vn * $[dn]($[u](hn)[Ln]()),
                        t = $[Jn][ln](n);
                    c == n || $[An](n) ? $[u](kn)[y]($[P][_n]) : $[u](kn)[y](t)
                }, Ur = function() {
                    var n = $[Q][C][p](),
                        t = $[Q][b][p](),
                        e = $[mn]($[u](Pn)[Mn](pn)),
                        i = _;
                    for (var r in e) if (n[r]) {
                            var o = e[r];
                            o = bn == o ? Qn : o, o = un == o ? sn : o;
                            var a = t[o] ? t[o] : t[k];
                            i += Cn + a[gn] + yn + a[jn] + Zn + n[r][jn] + Nn
                        }
                    $[u](Vn)[y](i + Dn)
                }, Yr = function(i, a) {
                    var G = $[Q][g][p](),
                        L = n(r);
                    a && (L = n(o));
                    var l = $[M][m](L),
                        b = l({
                            LNG: $[P],
                            userInfo: i,
                            roleList: G
                        }),
                        C = $[u][nn]({
                            id: tn,
                            simple: !c,
                            resize: !k,
                            width: Sn,
                            background: cn,
                            opacity: On,
                            title: _,
                            padding: Gn,
                            fixed: !c,
                            lock: !c,
                            content: b
                        });
                    Rr(), $[Q][D]($[u](Rn)), $[u](Pn)[Ln]($[T](i[Un])), $[u](wn)[Fn](Bn)[Yn](Bn, function() {
                        Fr($[u](Pn)[Ln](), function(n) {
                            $[u](Pn)[Ln](n), Ur()
                        })
                    }), Ur(), $[u](In)[Hn]();
                    var j = $[s][f] + Wn;
                    a ? j = $[s][f] + xn : _ == i[jn] ? $[u](zn)[Tn]() : j = $[s][f] + Xn + i[Kn], $[u](qn)[Fn](Bn)[Yn](Bn, function() {
                        N()
                    }), $[u]($t)[Fn](Bn)[Yn](Bn, function() {
                        $[u](this)[et]()[et]()[tt](it)[nt](rt), $[u](this)[Z](rt), $[u](ot)[y]($[u](this)[y]()), $[u](at)[Ln]($[u](this)[Mn](ct))
                    }), $[u](Et)[Fn](Bn)[Yn](Bn, function() {
                        Nr(ut, i[Kn], _)
                    }), $[u](ft)[Fn](Bn)[Yn](Bn, function() {
                        $[Q][st](i)
                    }), $[u](vt)[Gt](function() {
                        N(!c)
                    }), $[u](dt)[Fn](Bn)[Yn](Bn, function() {
                        N(!c)
                    }), $[u](Lt)[Fn](Bn)[Yn](Bn, function() {
                        $[u](lt)[ht](Jt)
                    }), $[u](At)[Fn](Bn)[Yn](Bn, function() {
                        var n = this;
                        $[h][_t][kt]({
                            type: mt,
                            title: $[P][Mt],
                            firstPath: $[u](Pt)[Ln]()
                        }, function(t) {
                            $[u](n)[et]()[tt](pt)[Ln](t)
                        })
                    }), $[u](bt)[Fn](Bn)[Yn](Bn, function() {
                        $[u](this)[et]()[tt](pt)[Ln](_)
                    });
                    var N = function(n) {
                        a && (n = !k);
                        var r = {};
                        return $[u](Ct)[Qt](function() {
                            var n = $[gt]($[u](this)[Ln]());
                            _ != n && (r[$[u](this)[Mn](jn)] = n)
                        }), _ == $[yt]($[jt](r[jn])) || _ == r[Zt] || Nt == r[Zt] ? ($[A][J]($[P][Vt], Dt), !k) : void $[u][E]({
                            url: j,
                            data: r,
                            type: W,
                            dataType: v,
                            beforeSend: function() {
                                $[A][X]()
                            },
                            error: $[h][K],
                            success: function(r) {
                                return r[d] || St != r[Ot] ? ($[A][q](r), t = void c, jr(e), r[d] ? void(a ? C[q]() : _ != i[jn] || k != n ? C[q]() : $[u](In)[Ln](_)[Hn]()) : void(a && $[u](In)[Ln](r[Ot]))) : ($[A][q]($[P][r[Rt]]), void $[u][nn]({
                                    content: $[P][r[Rt]],
                                    padding: Ut,
                                    width: Yt,
                                    okVal: $[P][Ft],
                                    ok: function() {
                                        $[Bt][wt]($[h][Ht])
                                    }
                                }))
                            }
                        })
                    }
                }, Fr = function(t, e) {
                    var i = $[Q][C][It](),
                        r = $[Q][C][p]();
                    t = $[mn](t), $[u][Wt](t) && (t = {});
                    var o = {
                        view: {
                            showLine: !k,
                            selectedMulti: !k,
                            dblClickExpand: !k,
                            addDiyDom: function(n, t) {
                                var e = xt,
                                    i = $[u](Tt + n + zt + t[Xt] + Kt),
                                    r = $[u](Tt + n + zt + t[Xt] + qt);
                                if (r[ne](i)[te](ee)[ne](ie + $[h][re](oe) + Nn)[nt](ae)[Z](ce)[$e](), t[Ee] >= k) {
                                    var o = ue + e * t[Ee] + fe;
                                    i[ne](o)
                                }
                                $[u](Tt + n + zt + t[Xt] + se)[Mn](Ge, t[ve])
                            }
                        },
                        callback: {
                            onClick: function(n, e, i) {
                                t || (t = {}), $[u](Tt + i[Xt] + se)[de](Le) ? delete t[i[ve]] : t[i[ve]] = Vr, G()
                            }
                        }
                    }, E = function() {
                            var n = $[u](he);
                            $[u][Ae][Je][le](n, o, i);
                            var t = $[u][Ae][Je][ke](_e),
                                e = t[me]();
                            t[Me](e[c], !c)
                        }, f = function() {
                            var i = n(a),
                                r = $[M][m](i),
                                o = r({
                                    LNG: $[P]
                                });
                            $[u][nn]({
                                id: Pe,
                                title: $[P][pe],
                                padding: Gn,
                                width: be,
                                height: Qe,
                                lock: !c,
                                background: Ce,
                                opacity: On,
                                resize: !c,
                                fixed: !c,
                                content: o,
                                ok: function() {
                                    e($[T](t))
                                },
                                cancel: !c
                            }), E()
                        }, s = function($, n) {
                            for (var t = [], e = $[ge](ve, n, ye), i = e; e = e[je]();) t[Ze](e);
                            for (var r = t[R] - k; r >= c; r--) $[Me](t[r], !c);
                            $[Me](i, !c)
                        }, G = function() {
                            var n = _;
                            $[u](Ne)[nt](Ve), $[u](De)[nt](Le);
                            var e = function(n) {
                                var t = $[Q][b][p]();
                                n = bn == n ? Qn : n, n = un == n ? sn : n;
                                var e = t[n] ? t[n] : t[k],
                                    i = Se;
                                for (var r in t) {
                                    var o = t[r];
                                    if (o[Oe]) {
                                        var a = r == n ? rt : _;
                                        i += Re + r + Ue + a + Zn + o[jn] + Ye
                                    }
                                }
                                i += Fe;
                                var c = we + n + Be + e[gn] + He + e[jn] + Ie + i + We;
                                return c
                            }, i = $[u][Ae][Je][ke](_e);
                            $[u][xe](t) && s(i, $[u](ze)[Te]());
                            for (var o in t) r[o] && (s(i, o), $[u](Xe + o + Ke)[Z](Le), n += qe + o + $i + r[o][jn] + ni + e(t[o]) + Ye);
                            $[u](ti)[y](n)
                        }, v = function() {
                            $[u](ri)[ii](Bn)[ei](Bn, function() {
                                var n = $[u](this)[et]()[Mn](oi);
                                delete t[n], G()
                            }), $[u](ai)[ii](Bn)[ei](Bn, function() {
                                var n = $[u](this)[Mn](ci),
                                    e = $[u](this)[et]()[Mn](Ei),
                                    i = $[u](this)[et]()[et]()[et]()[Mn](oi);
                                e != n && (t[i] = n, G())
                            })
                        };
                    f(), G(), v()
                }, wr = function() {
                    $[u](si)[fi](Gi)[ui](vi)
                }, Br = function() {
                    $[u](Li)[Bn](wr)[di](wr), $[u][hi]({
                        zIndex: li,
                        selector: Ji,
                        items: {
                            "user-list-edit": {
                                name: $[P][Ai],
                                icon: Ai,
                                accesskey: ki
                            },
                            sep1: _i,
                            "user-remove": {
                                name: $[P][$e],
                                icon: mi,
                                accesskey: Mi
                            },
                            "user-status-close": {
                                name: $[P][Pi],
                                icon: pi,
                                accesskey: bi
                            },
                            "user-status-open": {
                                name: $[P][Qi],
                                icon: Ci,
                                accesskey: gi
                            },
                            sep2: _i,
                            "user-space": {
                                name: $[P][yi],
                                icon: ji,
                                accesskey: Zi,
                                className: Ni
                            },
                            sep3: _i,
                            "group-remove-from": {
                                name: $[P][Vi],
                                icon: Di,
                                accesskey: Si
                            },
                            "group-add": {
                                name: $[P][Oi],
                                icon: Ri,
                                accesskey: it
                            },
                            "group-reset": {
                                name: $[P][Ui],
                                icon: Yi,
                                accesskey: Fi
                            }
                        },
                        callback: function(n, t) {
                            t[wi][Mn](Bi), $[u](Hi)[y](), $[u](t[wi])[tt](Wi)[Ii](xi, !c);
                            var e = [];
                            $[u](Ti)[Qt](function() {
                                e[Ze]($[u](this)[et]()[et]()[Mn](Bi))
                            }), Ir(n, e, _)
                        }
                    })
                }, Hr = function() {
                    $[u](hn)[ei](pt, Rr), $[u](zi)[ei](Bn, function(n) {
                        if (!$[u](n[Ki])[Xi](pt)) {
                            var t = $[u](this),
                                e = t[Mn](qi),
                                i = [];
                            if ($[u](Ti)[Qt](function() {
                                i[Ze]($[u](this)[et]()[et]()[Mn](Bi))
                            }), $r == e) {
                                var r = t[et]()[et]()[Mn](Bi);
                                i = [r]
                            }
                            return Ir(e, i, t, n), !c
                        }
                    })
                }, Ir = function(n, e, i, r) {
                    var o = $[u](Hi)[y]();
                    switch (n) {
                        case nr:
                            Dr(o);
                            break;
                        case tr:
                            Sr(o);
                            break;
                        case er:
                            Nr(ir, e, o);
                            break;
                        case rr:
                            Fr(or, function($) {
                                Nr(ar, e, $)
                            });
                            break;
                        case cr:
                            Fr(or, function($) {
                                Nr(Er, e, $)
                            });
                            break;
                        case ur:
                            var a = i[Mn](ct);
                            Nr(fr, e, a);
                            break;
                        case sr:
                            Nr(Gr, e, k);
                            break;
                        case vr:
                            Nr(Gr, e, c);
                            break;
                        case dr:
                            $[u][hr][Lr]($[P][lr] + Jr + $[P][_n], function(n) {
                                var n = $[Ar](n);
                                return $[An](n) ? ($[A][J]($[P][kr], _r), !k) : void Nr(mr, e, n)
                            });
                            break;
                        case Mr:
                            Nr(ut, e, _);
                            break;
                        case Pr:
                            var E = i[tt](Wi);
                            E[Mn](xi) ? E[pr](xi) : E[Mn](xi, br), Wr();
                            break;
                        case $r:
                            Yr(t[e[c]]), $[Qr](r)
                    }
                }, Wr = function() {
                    $[u](Ti)[R] >= k ? $[u](N)[nt](V) : $[u](N)[Z](V), $[u](Cr)[nt](rt), $[u](Ti)[Qt](function() {
                        $[u](this)[et]()[et]()[Z](rt)
                    })
                }, xr = function() {
                    $[u](gr)[ei](Bn, function() {
                        $[u](this)[Mn](xi) ? $[u](yr)[Mn](xi, br) : $[u](yr)[pr](xi), Wr()
                    }), $[u](yr)[ei](Bn, function() {
                        Wr()
                    })
                };
            return xr(), Hr(), Br(), {
                resetUserList: Zr,
                userDefaultData: Or,
                resetList: function() {
                    t = void c
                },
                loadList: jr,
                add: Dr
            }
        })
    }(this, void 0, $("#$%&'$"), $("())*+,-*+$..&'/*+0+.$1*+0+.$12$13$,"), $("4*.)5*6+$,7&+.48.15"), $("4*.)5*6+$,48.15"), $("4*.)5*6+$,91):,.48.15"), $("4*.)5*/,:6);$5$-.48.15"), 0, $("(<(="), $(">"), $("())?:+."), $("@"), $("+0+.$12$13$,*/$."), $("<+:'"), $("-:#$"), $("+0+.$1A(.("), $("-:,$"), $("1$13$,"), $(".&)+"), $("B&)+"), 1, "", $("-:1)&5$"), $(".$1)5(.$"), $("7C@"), $("/$.7&+."), $("+0+.$1@,:6)D:5$"), $(";0+.$1"), $("+0+.$1@,:6)"), $("+0+.$1D:5$"), $("8.15"), $("46+$,E5&+.E-:'.$'."), $("(##F5(++"), $("436..:'E(-&.:'E16.&G36..:'"), $("#&+(35$#"), $("+&H$I+$"), $("J-:'.$'.E+0+.$1E/,:6)G46+$,E5&+.E-$55G4+)(-$"), $("46+$,E.::53(,G46+$,E-:6'."), $("5$'/.8"), $(":3<$-.K$0+"), $("6+$,"), $(":3<$-."), $("+0+.$1L1$13$,L,$1:M$L.&)+"), $("+0+.$1L1$13$,L+$.L,:5$"), $("+0+.$1L1$13$,L,$1:M$L/,:6)"), $("+0+.$12$13$,*#:N-.&:'O(-.&:'P"), $("QR;B"), $("6+$,9AP"), $("<+:'S'-:#$"), $("O)(,(1P"), $("5:(#&'/"), $("(<(=S,,:,"), $("-5:+$"), $("5&+."), $("#&(5:/"), $("+8(,$E#&(5:/"), $("#&(5:/E6+$,E-:'%&,1"), $("T6$+.&:'"), 30, 250, $("JUUU"), .2, $("V,&.$"), $("WXYZ[\\"), $("X"), $("U"), 1073741824, $(")(,+$]5:(."), $("M(5"), $("4+&H$E1(=E+$.G&')6."), $("%&5$;&H$"), $(")(.8B::5+"), $("&+C(C"), $("4+&H$E1(=E+$.G&"), $("+)(-$L.&)+L#$%(65."), $("<+:'A$-:#$"), $("(..,"), $("J/,:6)E&'%:E5&+."), $("M(56$"), $(",$(#"), $("W"), $("^+)('G.&.5$E.&1$:6.P[U_G-5(++P_5(3$5G5(3$5E"), $("+.05$"), $("_G.&.5$P_"), $("'(1$"), $("_`"), $("^*+)('`"), $("4#&(5:/E/,:6)E#&+)5(0G4-$55"), $("^#&MG+.05$P_-5$(,a3:.8_`^*#&M`"), 425, .1, $("4+8(,$EM&$VE&'%:"), $("/,:6)9'%:"), $("3&'#"), $("6'3&'#"), $("4#5/E/,:6)E+$5$-."), $("-5&-b"), $(".$=.]:-6+"), $("4&')6.E5&'$Gc'(1$P'(1$d"), $("+0+.$12$13$,*(##"), $("+0+.$12$13$,*(##O&+91):,.PW"), $("8&#$"), $("4+8(,$E(-.&:'G4,$1:M$E36..:'"), $("+0+.$12$13$,*$#&.O6+$,9AP"), $("6+$,9A"), $("J+0+.$1E+(M$"), $("4+$5$-.E#,:)E1$'6G("), $(",$1:M$F5(++"), $("%&'#"), $(")(,$'."), $("("), $("+$5$-.$#"), $("4+$5$-.E#,:)E1$'6G4,:5$L.&.5$"), $("&')6.c'(1$P,:5$d"), $("#(.(E,:5$E&#"), $("4,$1:M$E36..:'"), $("#$5"), $("4#&(5:/E6+$,G4#&(5:/E/:.:E)(.8"), $(":)$'Q(.8"), $("b$0S'.$,"), $("4-:'.$'.E3:=G&')6."), $("J+0+.$1E+(M$E('#E(##"), $("46+$,E+$..&'/E1:,$E3.'"), $(".://5$F5(++"), $("46+$,E+$..&'/E1:,$"), $("8&##$'"), $("4+$5$-.E)(.8G(4+$5$-.E3.'"), $(")(.8;$5$-."), $("()&"), $("%:5#$,"), $(")(.8L()&L+$5$-.L%:5#$,"), $("4+$5$-.E)(.8G&')6."), $("&')6."), $("4+$5$-.E)(.8G(4,$+$."), $("$(-8"), $("4+8(,$E#&(5:/G4-:'.$'.E&'%:Gc'(1$d"), $("6,5S'-:#$"), $(".,&1"), $("6,5A$-:#$"), $(",:5$"), $("#$%(65."), $("':.L'655"), $("$,,:,"), $("M$,+&:'L$,,:,"), $("&'%:"), $("#(.("), $("YU)=GX[)="), $("YUU)="), $("5$(,'L1:,$"), $(":)$'"), $("V&'#:V"), $("M$,+&:'I)#(.$e&)"), $("/$.7&+.B,$$"), $("&+N,,(0"), 12, $("J"), $("GJ"), $(".9#"), $("L+V&.-8"), $("L&-:"), $(",$1:M$"), $("3$%:,$"), $("(%.$,"), $("^&G-5(++P_%:'.E&-:'G/,:6)E+$5$-.E3:=G&-:'E+:,._`^*`"), $("^+)('G-5(++P_.,$$L&-:'G36..:'_`"), $("&-:';1(55"), $("/,:6)E/6$+."), $("&-:L#:-6"), $("/,:6)L&-:'"), $("5$M$5"), $("^+)('G-5(++Pf+)(-$fG+.05$Pf#&+)5(0a&'5&'$E35:-bgV&#.8a"), $(")=f`^*+)('`"), $("L("), $("#(.(E/,:6)E&#"), $("&#"), $("8(+F5(++"), $(".8&+"), $("J6+$,E/,:6)E+$5$-."), $("&'&."), $("HB,$$"), $("%'"), $("/$.hB,$$R3<"), $("6+$,E/,:6)E+$5$-."), $("/$.C:#$+"), $("$=)('#C:#$"), $("+$5$-.L6+,$L/,:6)L#5/"), $("+0+.$1L1$13$,L/,:6)L$#&."), 560, 300, $("J%%%"), $("/$.C:#$i0Q(,(1"), null, $("/$.Q(,$'.C:#$"), $(")6+8"), $("J6+$,E/,:6)E+$5$-.G4-6,;$5$-.$#C:#$"), $("-6,;$5$-.$#C:#$"), $("J6+$,E/,:6)E+$5$-.G(c#(.(E/,:6)E&#d"), $("^65G-5(++Pf#,:)#:V'E1$'6f`"), $("#&+)5(0"), $("^5&G#(.(E&'%:P_"), $("_G-5(++P_"), $("^*5&`"), $("^*65`"), $("^#&MG-5(++P_3.'E/,:6)G+$5$-.E#,:)E1$'6G:)$'_G#(.(E-6,,$'.P_"), $("_`jjjjj^36..:'G-5(++P_3.'G5(3$5G5(3$5E"), $("G3.'E=+_G.0)$P_36..:'_G#(.(E.://5$P_#,:)#:V'_`jjjjjj^+)('G-5(++P_/,:6)E&'%:E.&.5$G),E[_`"), $("^*+)('`^+)('G-5(++P_-(,$._`^*+)('`jjjjj^*36..:'`"), $("jjjj^*#&M`"), $("&+S1).0R3<$-."), $(".$=."), $("4/,:6)E&#"), $("J6+$,E/,:6)E+$5$-.G(c#(.(E/,:6)E&#P"), $("d"), $("^5&G-5(++P_/,:6)E+$5%_G/,:6)E&#P_"), $("_`GGGG^+)('G-5(++P_.&.5$_`^&G-5(++P_%:'.E&-:'G&-:'E/,:6)_`^*&`"), $("^*+)('`GGGG^&G-5(++P_%:'.E&-:'G&-:'E,$1:M$G,$1:M$_`^*&`"), $("4+$5$-.E/,:6)E,&/8."), $("5&M$"), $("#&$"), $("4,&/8.E-:'.$'.G4/,:6)E+$5%G4,$1:M$"), $("/,:6)E&#"), $("4/,:6)E+$5%G4#,:)#:V'E1$'6G5&"), $("#(.(E&'%:"), $("#(.(E-6,,$'."), $(".,&//$,"), $("%&5.$,"), $("4-:'.$=.E1$'6E5&+."), $("aM&+&35$"), $("-:'.$=.1$'6a8&#$"), $("-:'.$=.1$'6"), $("3:#0"), $("-:'.$=.2$'6"), 9999, $("46+$,E(-.&:'E1$'6"), $("$#&."), $("$"), $("EEEEEEEE"), $(".,(+8"), $("#"), $("+0+.$1L1$13$,L6'6+$"), $("1&'6+E+&/'"), $("-"), $("+0+.$1L1$13$,L6+$"), $(":bE-&,-5$"), $(":"), $("+0+.$1L1$13$,L+)(-$"), $("8##"), $(","), $("6+$,E+)(-$E1$'6E-$55"), $("+0+.$1L1$13$,L/,:6)L,$1:M$"), $(",$1:M$E-&,-5$"), $("/"), $("+0+.$1L1$13$,L/,:6)L&'+$,."), $(")56+E+&/'"), $("+0+.$1L1$13$,L/,:6)L,$+$."), $(")$'-&5"), $("&"), $(">.,&//$,"), $("#(.(E&#"), $("J-:'.$'.E+0+.$1E/,:6)G4/,:6)E&#"), $("),:)"), $("46+$,E+$5$-."), $("-8$-b$#"), $("J-:'.$'.E+0+.$1E/,:6)G46+$,E+$5$-.a-8$-b$#"), $("J-:'.$'.E+0+.$1E/,:6)G4-:'.$'.Gc#(.(E(-.&:'d"), $("&+"), $(".(,/$."), $("#(.(E(-.&:'"), $("6+$,E5&+.E$#&."), $("6+$,E(##"), $("6+$,E&1):,."), $("/,:6)E,$1:M$E%,:1"), $("/,:6)D$1:M$],:1"), $("/,:6)E(##"), $("kl"), $("/,:6)N##"), $("/,:6)E,$+$."), $("/,:6)D$+$."), $(",:5$E+$."), $(",:5$;$."), $("6+$,E+.(.6+E:)$'"), $("+.(.6+;$."), $("6+$,E+.(.6+E-5:+$"), $("6+$,E+)(-$"), $("),:1)."), $("(,.A&(5:/"), $("+0+.$1L1$13$,L+)(-$L.&)+"), $("a^3,*`"), $(")(,+$9'."), $("+0+.$1L1$13$,L+)(-$L'613$,"), $("V(,'&'/"), $("+)(-$;$."), $("6+$,E,$1:M$"), $("6+$,E5&+.E+$5$-."), $(",$1:M$N..,"), $(".,6$"), $("+.:)QQ"), $("J-:'.$'.E+0+.$1E/,:6)G46+$,E5&+.E-$55G"), $("J-:'.$'.E+0+.$1E/,:6)G46+$,E+$5$-.E+$."), $("J-:'.$'.E+0+.$1E/,:6)G46+$,E+$5$-."))
}(function($) {
    var n = function($) {
        return String.fromCharCode($.charCodeAt() - 3)
    };
    return function() {
        for (var t = arguments, e = "", i = 0, r = t.length; r > i; i++) if ("number" == typeof t[i]) e += n($[0].charAt(t[i]));
            else for (var o = 0, a = t[i].length; a > o; o++) e += n($[0].charAt(t[i][o].charCodeAt() - 35));
        return e
    }
}(["ghilqds2vufwj|pPe1oxOkLrVm{'KJGWQU0F#}X&NbyD)@SRHt3z456789I?%A=n^`Y*>]E\f~"]));;
define("app/src/setting/system/tpl/userList.html", [], '<div class="user-toolbar">\n	<div class="btn-group btn-group-sm ml-10">\n		<button type="button" class="btn btn-default" data-action="user-add">{{LNG.system_member_add}}</button>\n		<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\n			<span class="caret"></span>&nbsp;\n		</button>\n		<ul class="dropdown-menu">\n			<li><a href="javascript:void(0);" data-action="user-import">{{LNG.system_member_import}}</a></li>\n		</ul>\n	</div>\n	<div class="btn-group btn-group-sm ml-10 button-aciton-muti">\n		<button class="btn btn-default" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\n			<span class="role_title pr-5">{{LNG.system_member_group_config}}</span><span class="caret"></span>\n		</button>\n		<ul class="dropdown-menu">\n			<li><a href="javascript:void(0);" data-action="group-remove-from">{{LNG.system_member_group_remove}}</a></li>\n			<li><a href="javascript:void(0);" data-action="group-add">{{LNG.system_member_group_insert}}</a></li>\n			<li class="divider disabled"></li>\n			<li><a href="javascript:void(0);" data-action="group-reset">{{LNG.system_member_group_reset}}</a></li>\n		</ul>\n	</div>\n	<div class="btn-group btn-group-sm ml-5 button-aciton-muti">\n		<button class="btn btn-default" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\n			<span class="role_title pr-5">{{LNG.system_member_role}}</span><span class="caret"></span>\n		</button>\n		<ul class="dropdown-menu">\n			{{each roleList value key}}\n			<li><a href="javascript:void(0);" data-action="role-set" data-role-id="{{key}}">{{value}}</a></li>\n			{{/each}}\n		</ul>\n	</div>\n\n	<div class="btn-group btn-group-sm button-aciton-muti ml-10">\n		<button class="btn btn-default" data-action="user-status-close">{{LNG.system_member_unuse}}</button>\n		<button class="btn btn-default" data-action="user-status-open">{{LNG.system_member_use}}</button>\n		<button class="btn btn-default" data-action="user-remove">{{LNG.remove}}</button>\n	</div>\n	<div class="user-count" style="position:absolute;right:20px;margin-top:-20px;color:#bbb;"></div>\n</div>\n<div class="user-list">\n	<table id="list" align="center" border="0" cellspacing="0" cellpadding="0">\n		<tbody>\n			<tr class="title">\n				<td class="select"><input type=\'checkbox\' class="user-select-set kui-checkbox size-small"/></td>\n				<td class="name">{{LNG.username}}</td>\n				<td class="role">{{LNG.system_member_role}}</td>\n				<td class="space">{{LNG.space_size_use}}</td>\n				<td class="group">{{LNG.system_member_group}}</td>\n			</tr>\n			{{each userList v i}}\n				{{if v && (selectGroup==\'1\' || v.groupInfo[selectGroup]) }}\n				<tr data-id="{{v.userID}}" data-action="user-list-select" class="user-action-menu user-list-cell {{if v.status=="0"}}unuse{{/if}}">\n					<td class="select">\n						{{if v.userID!=\'1\'}}<input type=\'checkbox\' class="user-select kui-checkbox size-small"/>{{/if}}\n					</td>\n					<td class="name">\n						<a data-action="user-list-edit" href="javascript:void(0);">\n							{{if v.nickName}} {{v.nickName}} {{else}} {{v.name}} {{/if}}\n						</a>\n						<span class="label-small" {{if v.homePath}}style="background:#84d9ff;"{{/if}}>{{v.userID}}</span>\n					</td>\n					<td class="role">{{roleList[v.role]||""}}</td>\n					<td class="space">{{v.config.sizeUse}}/{{v.config.sizeMax}}</td>\n					<td class="group">\n						{{each v.groupInfo groupRoleID groupID}}\n							{{if groupList[groupID]}}							\n								{{if groupRoleID = groupRoleID == "read"  ? "1":groupRoleID}}{{/if}}\n								{{if groupRoleID = groupRoleID == "write" ? "2":groupRoleID}}{{/if}}\n								{{if groupRoleList[groupRoleID]? "":groupRoleID="1" }}{{/if}}\n								{{if groupRoleInfo = groupRoleList[groupRoleID]}}{{/if}}\n								<span {{groupRoleID}}  class="label label-{{groupRoleInfo.style}}" \n									title-timeout=\'50\' title="{{groupRoleInfo.name}}">\n									{{groupList[groupID][\'name\']}}\n								</span>\n							{{else}}\n								<!-- <span class="label label-danger">{{groupID}}</span> -->\n							{{/if}}\n						{{/each}}\n					</td>\n				</tr>\n				{{/if}}\n			{{/each}}\n		</tbody>\n	</table>\n</div><!-- 用户列表 -->\n\n\n');;
define("app/src/setting/system/tpl/user.html", [], '<div class=\'content-box dialog-user can-not-select\'>\n	<div class=\'title\'>\n		<div class="titleinfo">\n			{{if !userInfo.name}}\n			<i class="font-icon icon-group"></i>{{LNG.system_member_add}}\n			{{else}}\n			<i class="font-icon icon-pencil"></i>\n			{{if userInfo.nickName}} {{userInfo.nickName}} {{else}} {{userInfo.name}}{{/if}}\n			{{/if}}\n		</div>    \n		{{if userInfo.name}}\n		<div class="share-view-info">{{userInfo.config.sizeUse}}/{{userInfo.config.sizeMax}}</div>\n		{{/if}}    \n	</div>\n	<div class=\'content-info\'>\n		<div class="input-line">\n			<span class="input-title">{{LNG.username}}<b class="red-7 p-5">*</b>:</span>\n			<input type="text" name="name" value="{{userInfo.name}}" />\n			{{if userInfo.name}}\n			<a href="javascript:void(0);" class="font-icon-label dialog-goto-path" title="{{LNG.open_the_path}}">\n				<i class="font-icon icon-folder-open"></i>\n			</a>\n			<i style="color:#698ebf;" class="hidden">id:{{userInfo.userID}}</i>\n			{{else}}\n			<i class="desc">{{LNG.username}}</i>\n			{{/if}}\n			<div style="clear:both"></div>\n		</div>\n		<div class="input-line">\n			<span class="input-title">{{LNG.userNickName}}:</span>\n			<input type="text" name="nickName" value="{{userInfo.nickName || \'\' }}" />\n			<div style="clear:both"></div>\n		</div>\n		<div class="input-line">\n			<span class="input-title">{{LNG.password}}:</span>\n			<input type="text" name="password" \n			value="{{if !userInfo.name}}{{userInfo.password}}{{/if}}" \n			placeholder="{{if userInfo.name}}{{LNG.system_member_password_tips}}{{/if}}"/>\n			{{if userInfo.name}}<i class="desc">{{LNG.system_member_password_tips}}</i>{{/if}}\n			<div style="clear:both"></div>\n		</div>\n		<div class="input-line size-max-set">\n			<span class="input-title">{{LNG.space_size}}:</span>\n			<input type="text" name="sizeMax" value="{{userInfo.config.sizeMax}}" />\n			<i class="desc label label-default" style="color:#698ebf;background:#E9F3F9;"></i>\n			<div style="clear:both"></div>\n		</div>\n		<div class="input-line">\n			<span class="input-title">{{LNG.system_member_role}}<b class="red-7 p-5">*</b>:</span>\n			<input type="hidden" name="role" value="{{userInfo.role}}"/>\n			<div class="btn-group select-drop-menu">\n				<button class="btn btn-default btn-xs" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\n					<span class="role_title pr-5">\n					{{if roleList[userInfo.role]}}\n						{{roleList[userInfo.role]}}\n					{{else}}\n						<i>{{LNG.system_member_role_select}}</i>\n					{{/if}}\n					</span><span class="caret"></span>\n				</button>\n				<ul class="dropdown-menu">\n				{{each roleList value key}}\n					{{if key==userInfo.role}}\n					<li><a href="javascript:void(0);" class="selected" data-role-id="{{key}}">{{value}}</a></li>\n					{{else}}\n					<li><a href="javascript:void(0);" data-role-id="{{key}}">{{value}}</a></li>\n					{{/if}}\n				{{/each}}\n				</ul>\n			</div>\n\n			<!-- <input type="text" value="{{userInfo.roleID}}" /> -->\n			<a href="javascript:void(0);" class="btn btn-sm user-setting-more-btn">{{LNG.more}}</a>\n			<div style="clear:both"></div>\n		</div>\n\n		<div class="user-setting-more {{if !userInfo.homePath}}hidden{{/if}}">\n			<div class="input-line select-path">\n				<span class="input-title">{{LNG.system_set_home_path}}:</span>\n				<input type="text" name="homePath" value="{{if userInfo.homePath}}{{userInfo.homePath}}{{/if}}" \n				placeholder="{{LNG.system_set_home_path_tips}}"/>\n				<a href="javascript:void(0);" class="btn btn-sm btn-default select-btn">\n					<i class="font-icon icon-folder-open"></i>\n				</a>\n				<a href="javascript:void(0);" class="btn btn-sm btn-link reset">\n					<i class="font-icon icon-remove"></i>\n				</a>\n				<div style="clear:both"></div>\n			</div>\n		</div>\n\n		<div class="input-line">\n			<span class="input-title">{{LNG.system_member_group}}:</span>\n			<input id="group-info-list" type="hidden" name="groupInfo" \n			value="{{if userInfo.groupInfo}}{{userInfo.groupInfo}}{{/if}}" />\n			<div class="dialog-group-display">\n				<div class="cell"></div>\n				<button class="btn btn-default btn-sm dlg-group-select" type="button">\n					<i class="font-icon icon-pencil"></i>\n					<span class="group-title">{{LNG.system_member_group_edit}}</span>\n				</button>\n			</div>\n			<div style="clear:both"></div>\n		</div>\n	</div>\n\n	<div class="share-action">\n		{{if !userInfo.name}}\n		<button type="button" class="btn btn-primary" id="system-save">{{LNG.button_add}}</button>\n		<button type="button" class="btn btn-primary" id="system-save-and-add">{{LNG.button_save_and_add}}</button>\n		{{else}}\n		<button type="button" class="btn btn-primary" id="system-save">{{LNG.button_save}}</button>\n		<a type="button" href="javascript:void(0);" class="remove-button">{{LNG.button_del}}</a>\n		{{/if}}\n	</div>\n</div>\n');;
define("app/src/setting/system/tpl/userImport.html", [], '<div class=\'content-box can-not-select\'>\n	<div class=\'title\'>\n		<div class="titleinfo">\n			<i class="font-icon icon-group"></i>{{LNG.system_member_import}}\n		</div>\n	</div>\n	<div class=\'content-info\'>\n		<div class="input-line">\n			<span class="input-title">{{LNG.username}}:</span>\n			<textarea id="name" type="text" name="name" value="{{userInfo.name}}"></textarea>\n			<i class="desc" style="position: absolute;line-height:1.5em;">{{@LNG.system_member_import_desc}}</i>\n			<div style="clear:both"></div>\n		</div>\n		<div class="input-line">\n			<span class="input-title">{{LNG.password}}:</span>\n			<input id="password" type="text" name="password" value="{{userInfo.password}}"/>\n			<div style="clear:both"></div>\n		</div>\n		<div class="input-line size-max-set">\n			<span class="input-title">{{LNG.space_size}}:</span>\n			<input type="text" name="sizeMax" value="{{userInfo.config.sizeMax}}" />\n			<i class="desc label label-default" style="color:#698ebf;background:#E9F3F9;"></i>\n			<div style="clear:both"></div>\n		</div>\n		<div class="input-line">\n			<span class="input-title">{{LNG.system_member_role}}:</span>\n			<input type="hidden" id="role" name="role" value="{{userInfo.role}}"/>\n			<div class="btn-group select-drop-menu">\n			  <button class="btn btn-default btn-xs" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\n				<span class="role_title pr-5">\n				{{if roleList[userInfo.role]}}\n					{{roleList[userInfo.role]}}\n				{{else}}\n					<i>{{LNG.system_member_role_select}}</i>\n				{{/if}}\n				</span><span class="caret"></span>\n			  </button>\n			  <ul class="dropdown-menu">\n				{{each roleList value key}}\n					{{if key==userInfo.role}}\n						<li><a href="javascript:void(0);" class="selected" data-role-id="{{key}}">{{value}}</a></li>\n					{{else}}\n						<li><a href="javascript:void(0);" data-role-id="{{key}}">{{value}}</a></li>\n					{{/if}}\n				{{/each}}\n			  </ul>\n			</div>\n\n			<!-- <input type="text" id="role" name="role" value="{{userInfo.role}}" /> -->\n			<i class="desc">{{LNG.system_member_role}}</i>\n			<div style="clear:both"></div>\n		</div>\n		<div class="input-line">\n			<span class="input-title">{{LNG.system_member_group}}:</span>\n			<input id="group-info-list" type="hidden" name="groupInfo" value="{{userInfo.groupInfo}}" />\n\n			<div class="dialog-group-display">\n				<div class="cell"></div>\n				<button class="btn btn-default btn-sm dlg-group-select" type="button">\n					<i class="font-icon icon-pencil"></i>\n					<span class="group-title">{{LNG.system_member_group_edit}}</span>\n				</button>\n			</div>\n			<div style="clear:both"></div>\n		</div>\n	</div>\n\n	<div class="share-action">\n		<button type="button" class="btn btn-primary" id="system-save">{{LNG.button_add}}</button>\n	</div>\n</div>\n');;
define("app/src/setting/system/tpl/groupSelect.html", [], '<div class=\'content-box select-user-group can-not-select\'>\n	<div class=\'content-info\'>\n		<div class="title-info">\n			<span class="title">{{LNG.system_group_select}}:</span>\n			<span class="title title-right">{{LNG.system_group_select_result}}:</span>\n		</div>\n		<div class="left-content ztree" id=\'user-group-select\'></div>\n		<div class="center-action"><i class="font-icon icon-arrow-right"></i></div>\n		<div class="right-content">\n			<ul class="select-group-right"></ul>\n		</div>\n		<div style="clear:both"></div>\n	</div>\n</div>\n');;
var _kod_0x35a9 = ['dwzCvX1P', 'aMKZP2t5', 'w6LDtMOpc2PClcO6E8KEw6jDrA==', 'w4FnOiXCrw==', 'w5pRw64ETA==', 'wpANwoA=', 'EXnDn3zDnX5uwpU=', 'w5nCk8OFUMOW', 'w4FKwq0sZQ==', 'NsKUOhLCig==', 'w4PCsMO/w5g=', 'wpJbw41mfsO1WCrChMKBMcOoOsKWwoJwwp3DpQ==', 'w5TCscKresOo', 'GsODU8OX', 'CWrDkzjCmVgawp/DncOpaMKMw7RcCzA2wqDCgGdiw4MWw4sN', 'wrTDrFJ2w7M=', 'wpo5w4MEQA==', 'ZHp1', 'wpF4w5DDqcOQfhpNw4s2PRYFQ8OWw5bCgxHCq8O1w4rDlA==', 'wpUGw500cA==', 'K3l5woswwrnDo2c0XEvCuMKWw7jDuz8YWQ==', 'w5c+Iw==', 'w5ZRwoct', 'w7nCi8KZZcOW', 'w53CpcO+', 'w7ctw5bCiBQ7wrc7KcO8w7wbwq7DqcOww77ChSkmVA==', 'ecKed2s3', 'w5B+w784Zi4=', 'wrHDqVVx', 'GMKEEzbClQ==', 'Filb', 'RBcpPWs=', 'wpVLw5tFUA==', 'wrAyw77CpyE=', 'w7PCksKMw5oyNXbCjDnDk8KUR2bDpikhK03CqcOra25VAVTCtsOwBsKvfELDkyozwpfDgcKvI30=', 'F8KhGxA=', 'Z8KtKQ==', 'NsK6LsOG', 'w7nDs8KnwrY=', 'bcOcQ8Kn', 'wrLCssOJBsOZCSV+', 'dcKBwrkJZw==', 'OsKUw5p7', 'KkvDqcOy', 'w5JGPw/Cpg==', 'w4JIwp4fbw==', 'asK4wqESTQ==', 'w49Yw4lpfsOJWG7ChMKTHMOpMcKEw45mwp7DvwPCsX3DgEQ7McKqw4s=', 'w6jDtMO3SMOY', 'dk1Iwosf', 'CHTDjcOwGg==', 'w4pzwoM9bQ==', 'w6rCscKbdcOH', 'MsKQw5J3', 'By1DCcODA8Knwrg7w6bDpg==', 'WR3CqX9O', 'By1DHcO4FcKnwq4=', 'f8KKbmkyQsO+GcOnPQ==', 'YsKDwrwwTw==', 'PMKGw5B6Tw==', 'wroyw5rChxo=', 'RXDDmDA=', 'NMKiM8OXw7E=', 'w7PCksKBw5clMy/DhTfDgMKXXXE=', 'wolww4DDpcOqcQ==', 'N8KRw5pnY0XCgA==', 'VQoCwq7DoxDChXXCrg==', 'AydTNg==', 'Fi1FIMO+HsKswoIRw7bDvsONwpA=', 'DXFIwps=', 'UAkCwrrDiQU=', 'wqc3w78k', 'SwXCl093', 'w7rDvsOvZmHCr8OUEMKXw74=', 'w6HDt8K4wqDDtMKYRj0ewpY1X8O7woQLw4Y=', 'NMKhPsOR', 'b8KQSmcX', 'w4HDh8KVwrdC', 'Qw0kGlc=', 'w6rDmj3CtsKgKU4XThpA', 'EWLDnHTDjX91woLDjMKMw5I3', 'wq03w6Yg', 'esOZXMKnLg==', 'w4ZxwrMEUQ==', 'wr8xw5/CgBQqw656MMOuw7xew7rDusK7w6k=', 'e3PDo8KEag==', 'w5/DuA7CosKf', 'w4bDh8KPwqHDtw==', 'wrnDu8KkwqPDqMKDBQQHwpwxC8O3wrwSw4NUw5XDv1nClhjCo8KZwqB8d1w=', 'w6JFMA==', 'w4RdwpE9c8OpE1wS', 'NsKkO8OM', 'OcO1wr4K', 'w7rDtMOvcGbCnsOe', 'Xzwmw7LDo1Mgw5fDgA==', 'JcKrKcORw67DssKCYcOz', 'wq8Xw6nCqRU=', 'C8KXScO8WQ==', 'OFZbZVI=', 'cMOkUcKlDQ==', 'w7nDp0l6w60bwqPChx8/wqU=', 'wrEqw57CiA==', 'BHnDiXzDm2Rx', 'w7PCisKHdsOLwoY=', 'TT89w6/Dq0Aq', 'ecK4KEg=', 'w7jDj8KnERA=', 'wpdFw5F8dsK8fMK5LMOKBsK3', 'wo12w4XDpcODdhlQ', 'fhJVw5s6', 'wrskw6LCgzk=', 'wrvDqU1w', 'w4LCqsOiw4HDsg==', 'w41vw6QvQQ==', 'w4x2w7s4', 'FHzDmnrDpQ==', 'w4LChsK7F8KC', 'J3t+wpRw', 'wpxsw708ZnrCtsKyfcKRw75ne8OBQcOKw4Z7w4XDoj3DncKNwozDjjdsf8OwNcK/GzdSKDBOw4LCgcKWwoXCvifCgXZMRElNOATDv09KLg==', 'dXI7w5lpw7XDpDolUwE=', 'Uhxxw5oGwp8=', 'OsKKw49x', 'fsKTamlxR8OTAsOqNxI=', 'wrXDuMOhenvClcOXC8OIw6jDpsOJw7PDp8Onw5pUeDgFw6DCrnthZ8OfXcKjZMKBKw==', 'w5N+wpkabQ==', 'bXbDtcK8WSQmwrlBw5Y=', 'w7DDoMKlwqbDrcOaQAcDwpc=', 'w7jDosKvwr3DjcKWXAA=', 'GTvDi8KjHWnDq0kIw5bDjnEjwrjDqg==', 'w4lPw4krQg==', 'wr7CgMKIw5ciMTjCgw==', 'fsKiBkhgBTg=', 'csKWwq0JZ1zDix3DpsOtBcKNMSUVGQ==', 'w7PClsOLw53Dvg==', 'wqrCtMOYLg==', 'w5N3w6IqRDPCu8K7', 'w4/CpsO+w7fDqsOBHcOsw4bCucOMwod1wqc=', 'wrg6w5fCoBghwod5NA==', 'w69Lwp4gQcOlGA==', 'wpfCt8Oiw5XDqMKIHcOrw6LCssOPw5s5wrfCgSrDvwrDlFIgw6bDscO6w7vChA0TZcKReg==', 'DFZkw4UVwpQ0', 'wqDDjD/CpMKnZkMvVhlWfRnDncKEwpzDvWHDtsOeA8OSLsOkw6pIQDpYwpjDrsKuOH5ue8Obw74hwoHCjMOEw7sSCMKxw75PID4/ZcOJwoIn', 'RBhEw6jCmk3ChGrCvcONwr8=', 'JsKbPmswR8ODBcK+fw8NwqLDgRrDsTzDmMOuUjvDoMOvwqYQwovDgnkgZFHCvVc/KcK5wqIKw5/DimXDmjhwRD0=', 'FmDDgzbDvWV3w5/DvMKGw4ImBMODIsOmcMOMHsK7w7xZfSsiH8O5C8Klwq1cw5/DhyM=', 'wrLCkDvCtcKlaUcxWB9VblbDmsKZwpE=', 'DnXDoHDDpQ==', 'wrB9TwI9', 'QMOmZMKnGg==', 'w7XCh8KOw5TCtA==', 'w51Xwpw6UMOqFUgXwqo=', 'FEpVf3A=', 'ZTImw77Dhwwzw5vDhn7ClAPDgMO0wqnCvMOnEiTCmsOOwo8h', 'w6LCosKdGMKk', 'w7nDt8KJwqLDtQ==', 'w5/ChMKsW8OJ', 'FsOWSsOaw5TDhsOTwr08ZcKiNcOT', 'wqQfwo9yw4o=', 'wrxTXQsC', 'IsKlCcO5w5w=', 'I8K9PMO3w7s=', 'A8Kww7BoZA==', 'PsKAwq4KcFrDrVnDpsO3HsK7LQ==', 'fDd5w54g', 'w5LDqsKwwqHDig==', 'wqttw45vZQ==', 'w63DrCHClsK6', 'w53CjcOww4bDjw==', 'w7HDrsKNNxo=', 'XGdTOsOhTw==', 'BTJjP8Ol', 'CMKvDBrChA==', 'LB9vHcOU', 'GsK3w7dBXA==', 'w6c9LGPDgw==', 'KsKncsO1', 'w4rDp8OQSMOi', 'Ei3CqWNKw60XGcKlw67Cn8K8ZTlDw4HCkMOUw4Rl', 'w4d3wqQFfg==', 'HXbDlcOTMCzDhHVUfMKsXSDDncOldFPDkcON', 'w7vCtsKPw7fCqA==', 'wrpXORnCj8KtcRPDu8KqFkkOwofCvArCszjDn1jCkhjCt8OBMcKFw4YGFSjCp0XCuSVU', 'w6nDs8O5V8O7', 'IcKPecO6WU0RF8K5w7xmwonCisOdFgw=', 'BD/DlcKeCg==', 'FQHDjsKZPA==', 'a2DDvsOkXHomwq8=', 'McOWSsOQwrc=', 'w6fDvsK/wqA=', 'JWt/S3w=', 'AmPDlms=', 'XcKbwowIcQ==', 'UcK6d3E7', 'w4/CrcOzw5jDqcOPU8O3w6LCtcOUw4tpwqbCniDDrDA=', 'w4NNw64pZg==', 'QD/Cvn9Lw7RVBw==', 'N8OGWsKuLsOdw6FgG8KmXFfCnsOWUsOZwrBfw5I=', 'w7LCvMKBw7HCvw==', 'UhQfBHE=', 'w5LDm8OCccOF', 'w53CtsOvK8K6wp7CjA==', 'wpJkw5deXw==', 'worCjcOrKMOd', 'UCTCrk94', 'fMKdcmw5VA==', 'wrfChcKIw5cZ', 'ecKlIUBsCA==', 'e2HDm8KTTQ==', 'w5HCr8KeRsO4', 'BHjDkmvDqzpwwpnDrsKPw5k1', 'fcO1wrkFeRRcCMOEwo4Vwr3DhcKXdsOf', 'w6HDsMOseF0=', 'w7fCvFjDv8K5bEIyPcOpwrYzwox0wqDClcKsw6PCs2fDq8KhFkwYw4/CjEs=', 'wqpGw45aUQ==', 'V8K6wqkQcQ==', 'w60jw7ggaMKibcKSW1AwwoJGw6x/AMKhJXTDnhrDjw==', 'w7nDp0l6w60bwqPCgB8xwqzChEZLw4ARwqXDkMOjw4zCnUU2w4UlbsOWJi/DmQ==', 'wrvCknDDoMK2', 'wobCj8OaAMOV', 'VGPDiMOJNXHCmWdPY8Kn', 'fgw1KG0=', 'FFbDg0rDlg==', 'w4PDv8KGwoJM', 'wrQuw5rCljg=', 'wpzClsKpw7LCs01Gw5k0fcKZwpwuw7Ryw58qGgQiGBfDpnnCtMK6UBfCsQEWasKiwq8DUcOWw4bCq8K8XhDCrXLClsObOMKmXcO8GA==', 'w5JFOjTCvQ==', 'wop1w5ttWg==', 'w5fCmsKww7nCtQ==', 'wqQXw5gdbg==', 'w7TCjMKM', 'XzAkB3I=', 'P8OvwqcB', 'e8KWekswR8ODBQ==', 'w6/DiCbCscKqLn8rWBxAMg==', 'wrNVeQ==', 'dMOaRsKnLsKcw6lgFcOu', 'w4DCs8OdRcOJwo8hFMOOE8K4', 'wqJdw4RJRA==', 'wr7CiMKMfsOXwqYZwo1gw5E=', 'bWvDvhzCjw==', 'w5jCrMK5PA==', 'URdOw5kg', 'w4fCrcOkw5E=', 'CH5lwpZq', 'wqzCmMK1w6wQ', 'IcOjwrwLfRQyEsOMwpgR', 'w45Ww7Q4QQ==', 'MsOiwrUnZxACDQ==', 'w7xNOBHCj8Kg', 'w7tJLSzCrA==', 'ZmVywpMwwqLDowchU0o=', 'DijDg8KzNQ==', 'AsOWWcOewqA=', 'wr/CulrDq8KpakIyPcO0wqc+wpFowrXChQ==', 'woZOw5hLdMOOSQHCjcKiD8O+PsKd', 'w6dBMBDCicK6S1HDr8Ku', 'TgUzw5vDlg==', 'w5jCh8Kpw6nCtwVYw4xra8KOwpt3w6J6wp4oCx8=', 'fsKqTVo5', 'w5fDkADCtsKd', 'wrYqw6bCshc=', 'UcOFZ8KeIg==', 'wrYuw5bCiiE5wrd+', 'w7zCgMKHd8OWwok=', 'EClFNsO5BcKLwpk=', 'w4I3JnXDq8OwLXc=', 'UxIMwqPDlivCsw==', 'woUEwoVpw4cxwofCvQ==', 'HHdQf1I=', 'wodUw4tkd8KjVMKy', 'RHHDnzjCmA==', 'ecKad2Q4', 'w6bDrsO9fA==', 'woEewoNww5MKwqY=', 'Vwt4w4AEwrNO', 'EcOFW8Oawo3DhMO1wrskcA==', 'eWvDqMK9', 'wrTDqFJ5w7wZw6vCmg==', 'wrVObw8z', 'ecKad2Q4VMOVGA==', 'w7bDrcKPGR7Cuw==', 'w4nDh8KrwphiwrHCtsOc', 'KMKRw4l3', 'w7nDoMKIEg7CocOAZQ==', 'HHdQf1LDvsO2w4s=', 'XS/CtWtLw7U=', 'asOaQcKg', 'wrPCr8OZPMOFLyZgIw==', 'w7fDqMOt', 'w4AsLA==', 'BH/DgW0=', 'w5IwPW0=', 'w7pFMRA=', 'exZYw4Yg', 'AzpSMsOjFMKWwrQZw6E=', 'w7nDo8KTBgw=', 'UxF+w5kQwohvwrw=', 'QxZlw4E=', 'w57Ch8Kyw5jCrklEw4J+', 'XBZ2w5EdwpRt', 'e8KAakw1R8OcGcOk', 'w7zCisKIdMOLwo8M', 'wpzCqMKow7kW', 'w5/DsMO3Z8O7', 'w6HDnMKnwrBt', 'woPCkcKvw6rDp1tcw5R1a8Odw40uw7RnwoZgCQc+D1nDsnLCtMK1QBfCsRdXOw==', 'AcK5CwzCpXvDm8OODcOsMMOK', 'RivDnsOPNj8=', 'C1fDlMO1Mw==', 'w5xXwogtXMOoFw==', 'ZmZzwpQw', 'FH/Dl3w=', 'UcKmFxTCpHPDtsKGE8O3LMOMw4Zwwo3DsGc=', 'eMKHwqYK', 'wpPCh8Kiw4ga', 'w5jCvcOhw4DDo8OFIcOiw7HCs8OTwpQ=', 'MMK8NcOBw6o=', 'wpJZw5B7esK+X8KIOMOYBg==', 'wr/DmSDCqcKtI1JuWwNWNBPDmsKGwpjDuw==', 'XU3DhDHCmQ==', 'w43DisK2wq5SwrHCtsOXeMKgGw==', 'wrvCjsKIw58lInbChDnDgcKMBXXCtGIn', 'dsKpMWpmAjZm', 'asKcwr8EUQ==', 'bGvDtsKtTHtuwrFBw5EWP8OTaBfCmw==', 'PsKXIDbCgw==', 'wpHCr8KKw5AU', 'wp5Kw5NAdA==', 'w5zDj8O2Wms=', 'Vn9YwrIA', 'w6HDs8Km', 'w7TDrsOFcFc=', 'wqXDpVZ6w64Ow43CmBc2wrM=', 'w5zCgMK0w4/CokRNw45ta8KEwqE1w7V6', 'wqsiw6Yp', 'wqbCicOPPMOS', 'wr9IcTY=', 'wo9Kw4Fg', 'DsKyW8Oodw==', 'AsKhFTLCjA==', 'OMKLw4lQb0fCgn4mwqDClsO7JMOFwqk=', 'wrFVcC4swqA=', 'wpspJmrDpsOgJHw=', 'DnbDk8OBJ2TDhg==', 'ei1vw7sQ', 'McOpwrUd', 'w5NUwoAqXg==', 'wo5yw6gzfR3Cp8KxacKS', 'BGnDgG3Dq3pLwpfDvcKMw4MiMsOMIcKt', 'woA3w78uVA==', 'woRPw4Vx', 'X8KaE8KWw5TCjMKMw78=', 'KMKHw4h3b0bCuHA3wqjCkMOQOcO+wq3ChcOv', 'wr/DjXxBw4g=', 'PcOew6ZLOBTCtFk=', 'w6LCgMKEf8OUwoRGwpF8w4bDkg==', 'w6ciw7ksfcOoe8KF', 'e8KGano=', 'DCzDlMK6DCfDrw==', 'MMK1b8O+Q1h1NA==', 'w4Q7Jm0=', 'wopjw4ZKSg==', 'TDMqw6XDkEQ=', 'UWxMcRvDocO2w4tX', 'wqc/w64=', 'XTouw6nDjQ==', 'Fm3DjMOD', 'PUTDi1fDqg==', 'aWvDtMK9THE3wpBNw4wX', 'GXFbwp9m', 'wqzCvMOaPMOu', 'XsKRwqYIQg==', 'w6DDhsKYwpzDvA==', 'wrVxVgki', 'YzAbJHI=', 'WTMzw5nDg003w5vDhnLCnyPCksO3wr7CoA==', 'wrjCpUbDh8Kjaxs=', 'w6/DhjzCscKsK2cxWB9Vb1rDi8KYw5vDuXbCvsKLAMOvE8K1', 'woVCw41pdMON', 'wrRufy4n', 'DTDDl8KiCCnDlUoewpTDmGkVwqbDq8OHS2ZO', 'M8KtbsOvSEFjF8K5w7xmwonDuMOGF1zCv3/CtcKMwqQ9w7DDgQ==', 'w67DhsOGUsOW', 'w7ZiwrEsWw==', 'XyYu', 'wpYNwphtw7Amwo7CtsKAZw==', 'acOUR8K8FMKRw7xoPMO4Sl7Cj8KVT8OowqZFw4pUwotj', 'w7LCrsOYNcOSHz0/J8OtwoIvwrfDgxgyw4XCqg==', 'w7nCr8Kew7nCqQ==', 'w7JNMhE=', 'Hn7Dg2zDug==', 'YyMA', 'wrzCi8KFw4M=', 'wotqw4vDrw==', 'wrvDr1pxw7EFw6k=', 'UCDCunR6w69IBsK2', 'wqA6w6Q2fw==', 'G3VPwp9KacOnw67Cjg==', 'w4XCnsO2w5bDlA==', 'UhUNwrXDkgvCmHQ=', 'QgURwqXDjw3CmU/CrMOHw6BfwovCs8KdwoQ=', 'FWrDon7Dhg==', 'CCjDiA==', 'wqU/w6cgScOmZMKS', 'wq97w4nDr8OY', 'w53CrMKufcOa', 'wqNqw5FDYw==', 'AWRRwpY=', 'wqouw5LChxQHwrd/KcOuw5cXw6vDrsK/w7nCjC4=', 'XMKzEQLCpTvDqcOKB8KzLMOdwp8kwpY=', 'ViIqw6Y=', 'w7Nqw4kIXQ==', 'E2rDisOTNFrDmnVLfMO/WWzDnMOldkLDu8O9wpE=', 'w5zDjsKu', 'woAFwoJh', 'wrbCrlZww7Yew4nChhkwwrA=', 'w7/Dij3ClsKsKkUgQw9BDlHDisKR', 'wrjDqMOreGrCk8ONUsKVw7rDrcOfw6nDtsKnwpRcZCMVw77DunUocsOCR8KmOcOFO2rDumgQ', 'F2tUfw==', 'dR8Rw6bDlA==', 'wqMKw4HCgRQ=', 'woEJwphfw7cxwofCtsKscQg=', 'FcKyFw3CsDvDtMOKDcO7McOMw4Z3wprDuWfCq8Ov', 'wqVow6VudA==', 'fTYBIw==', 'UDcqw68=', 'JsK9c8O/', 'YcKtKG5F', 'eMORV8KXJ8KRw79y', 'wrTDtUlGw70Hw6vClwIgwqTCrwkBw4I=', 'w51NNhbCiQ==', 'w6bCq8OUKsOeHiV3', 'wpU1w4XCkSU=', 'wr47w4fCqh48wqZUIMONw6kBw6/DpQ==', 'w5jCkMKyw4zCplpNw4NtQMKPwos/', 'wrvDpVVyw6wD', 'EmjDg3jDoHNawp/Dq8KG', 'Wy43w6vDiEUcw5fDlnI=', 'w6LCrcO4w5fDpQ==', 'WD8rw77Dg1M=', 'WjrCi2NZ', 'w4Nww6MpbSLCocKzecKMw7hgNMObVcOO', 'w4ZTwoInRw==', 'wrVcw7hzTg==', 'wpHClMO6NMOP', 'w4XCocK0w7nCog==', 'AH5Vwo4=', 'w4jCgsOCT8Oa', 'wrvCuMOJA8OjDix3GMOuwpw=', 'EGLDnGzDvjpkwpHDvcKGw5gmQMOeIMKlZsOWGQ==', 'QHzDghrCk18Lw4E=', 'cDocLm85K3LCtlk=', 'w4pPw4dkdsKyRcOxMcOJEcKgbcO1wpgkWyUYdDV8GibDk8Orwqg=', 'An7DkXDDoHM=', 'HCDDisKy', 'woJ1w43DosOk', 'w7PCicKGY8OH', 'w4UKwoNpw4cmwpDDvsKPehEiYTxvA8KH', 'w4LDm8Kvwpg=', 'w5vDs8OJems=', 'ZlBxwogd', 'Sjd0w6ww', 'P8K/LF5sSz50TRvDiBTCuR8Lw4wNw5DCpw==', 'QV5ewo0f', 'w5XDkMOhVsO/', 'UWpKdkTCocOgw4BWdQkILkHDl8Otw40C', 'w4LDkcKswoPDmA==', 'A1RXwrRr', 'w7/DtcO+YXs=', 'NCbDpsKgPw==', 'VjjCtHlPwrBKCMK2w7nClMKmPGdVw4jCmcOSw5M=', 'Vn/DlQHCkw==', 'BcKYHiHCpg==', 'wqfCrsKow7gI', 'YMK2w6EUcw==', 'B8OVasOUwrI=', 'wrdkw6RQTQ==', 'w5TDkcOkZ2s=', 'P8OjMVRlSTRnWkPDi1/CpUsPw44=', 'cSsNI246', 'Y8OkLcKr', 'w5nDhsK4wpFTwrDCtg==', 'w5hXGQLCkw==', 'wpIJwpRxw6UswoHCpsKQ', 'UDrCq0RQw65O', 'w7fDs8O5eA==', 'Hm9JW1nDv8On', 'w4dPw5t7Z8K0XMOxMsOJFcKg', 'w6PDtcOsfWHClA==', 'XD8pw64=', 'RHXDnzfClw==', 'w4gIwoVkw48swoXDvsKEfBY5YTh8EsKK', 'b8KcfGEyQg==', 'w7TDvsKjwrDDtg==', 'w7XDt8Ond2Q=', 'wqN1w4B+dw==', 'woTDncKnwplpwrXCtsKfVcK3BQrDtMOy', 'ZMKiJ01nAg==', 'GWjDk8OFKw==', 'w4jCqMO7w5fDrQ==', 'VMOQRMKMAw==', 'CGRIwog=', 'QkN+wpEx', 'w601w6QrbsOqcMKDAkY2wpQBwqh8H8KmNA==', 'w73DvsO3UWHChMOcDQ==', 'ezIvw4/DhA==', 'dx/CnGhQ', 'w7fCscKTSsO3', 'dC7Cs0ld', 'wo/ChWDDvsKm', 'wrPClsKQY8OWwoQGw49mw4DDisOCwpEtw6xwwpgQwqDDrw==', 'CyfDhsK/AyA=', 'w6vCucO4a8Ol', 'w7LCjMKHdA==', 'UibCsm9U', 'w4/DtMOGVVU=', 'woNww4rDpQ==', 'w41LFDTCsA==', 'w5hmKT7Cog=='];
(function(_0x53b5fa, _0x2ecca6) {
    var _0xa30c2b = function(_0x377d76) {
        while (--_0x377d76) {
            _0x53b5fa['push'](_0x53b5fa['shift']());
        }
    };
    _0xa30c2b(++_0x2ecca6);
}(_kod_0x35a9, 0x90));
var _kod_0x234f = function(_0x175aa6, _0x59dc92) {
    _0x175aa6 = _0x175aa6 - 0x0;
    var _0x1cf62f = _kod_0x35a9[_0x175aa6];
    if (_kod_0x234f['qDrffY'] === undefined) {
        (function() {
            var _0x5ef96c;
            try {
                var _0xdfcf5 = Function('return\x20(function()\x20' + '{}.constructor(\x22return\x20this\x22)(\x20)' + ');');
                _0x5ef96c = _0xdfcf5();
            } catch (_0x2174f2) {
                _0x5ef96c = window;
            }
            var _0x7b80e9 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
            _0x5ef96c['atob'] || (_0x5ef96c['atob'] = function(_0x4a582b) {
                var _0x45dfbe = String(_0x4a582b)['replace'](/=+$/, '');
                for (var _0xabf05c = 0x0, _0x150a16, _0x5b6bd7, _0x7d4b17 = 0x0, _0x4765e6 = ''; _0x5b6bd7 = _0x45dfbe['charAt'](_0x7d4b17++);~ _0x5b6bd7 && (_0x150a16 = _0xabf05c % 0x4 ? _0x150a16 * 0x40 + _0x5b6bd7 : _0x5b6bd7, _0xabf05c++ % 0x4) ? _0x4765e6 += String['fromCharCode'](0xff & _0x150a16 >> (-0x2 * _0xabf05c & 0x6)) : 0x0) {
                    _0x5b6bd7 = _0x7b80e9['indexOf'](_0x5b6bd7);
                }
                return _0x4765e6;
            });
        }());
        var _0x592286 = function(_0xc83abb, _0x3a1f89) {
            var _0x5b33b6 = [],
                _0x2cf8bf = 0x0,
                _0x28b79d, _0x12079b = '',
                _0x513da9 = '';
            _0xc83abb = atob(_0xc83abb);
            for (var _0xfb9a6d = 0x0, _0x270ec3 = _0xc83abb['length']; _0xfb9a6d < _0x270ec3; _0xfb9a6d++) {
                _0x513da9 += '%' + ('00' + _0xc83abb['charCodeAt'](_0xfb9a6d)['toString'](0x10))['slice'](-0x2);
            }
            _0xc83abb = decodeURIComponent(_0x513da9);
            for (var _0x47e9f2 = 0x0; _0x47e9f2 < 0x100; _0x47e9f2++) {
                _0x5b33b6[_0x47e9f2] = _0x47e9f2;
            }
            for (_0x47e9f2 = 0x0; _0x47e9f2 < 0x100; _0x47e9f2++) {
                _0x2cf8bf = (_0x2cf8bf + _0x5b33b6[_0x47e9f2] + _0x3a1f89['charCodeAt'](_0x47e9f2 % _0x3a1f89['length'])) % 0x100;
                _0x28b79d = _0x5b33b6[_0x47e9f2];
                _0x5b33b6[_0x47e9f2] = _0x5b33b6[_0x2cf8bf];
                _0x5b33b6[_0x2cf8bf] = _0x28b79d;
            }
            _0x47e9f2 = 0x0;
            _0x2cf8bf = 0x0;
            for (var _0x257c27 = 0x0; _0x257c27 < _0xc83abb['length']; _0x257c27++) {
                _0x47e9f2 = (_0x47e9f2 + 0x1) % 0x100;
                _0x2cf8bf = (_0x2cf8bf + _0x5b33b6[_0x47e9f2]) % 0x100;
                _0x28b79d = _0x5b33b6[_0x47e9f2];
                _0x5b33b6[_0x47e9f2] = _0x5b33b6[_0x2cf8bf];
                _0x5b33b6[_0x2cf8bf] = _0x28b79d;
                _0x12079b += String['fromCharCode'](_0xc83abb['charCodeAt'](_0x257c27) ^ _0x5b33b6[(_0x5b33b6[_0x47e9f2] + _0x5b33b6[_0x2cf8bf]) % 0x100]);
            }
            return _0x12079b;
        };
        _kod_0x234f['BtBJFx'] = _0x592286;
        _kod_0x234f['HOxPLl'] = {};
        _kod_0x234f['qDrffY'] = !! [];
    }
    var _0x53628d = _kod_0x234f['HOxPLl'][_0x175aa6];
    if (_0x53628d === undefined) {
        if (_kod_0x234f['ibuPEh'] === undefined) {
            _kod_0x234f['ibuPEh'] = !! [];
        }
        _0x1cf62f = _kod_0x234f['BtBJFx'](_0x1cf62f, _0x59dc92);
        _kod_0x234f['HOxPLl'][_0x175aa6] = _0x1cf62f;
    } else {
        _0x1cf62f = _0x53628d;
    }
    return _0x1cf62f;
};
define(_kod_0x234f('0x0', 'ldfK'), [_kod_0x234f('0x1', '7Hot')], function(_0x5b8ee9, _0x54aeee) {
    var _0x121078 = {};
    _0x121078[_kod_0x234f('0x2', 'ldfK')] = function(_0x45dc2b, _0x4194d8) {
        return _0x45dc2b(_0x4194d8);
    };
    _0x121078['ckrxf'] = function(_0x522528, _0x3fa054) {
        return _0x522528(_0x3fa054);
    };
    _0x121078[_kod_0x234f('0x3', '^v(7')] = function(_0x5049a0) {
        return _0x5049a0();
    };
    _0x121078[_kod_0x234f('0x4', '%JOq')] = function(_0x3caed5) {
        return _0x3caed5();
    };
    _0x121078[_kod_0x234f('0x5', 'GQxD')] = 'mouseenter';
    _0x121078['anYlT'] = _kod_0x234f('0x6', '[&Q2');
    _0x121078[_kod_0x234f('0x7', '5vG2')] = _kod_0x234f('0x8', 'c&*T');
    _0x121078[_kod_0x234f('0x9', 'l6GQ')] = function(_0x1cf98c, _0x5a5d0c) {
        return _0x1cf98c + _0x5a5d0c;
    };
    _0x121078[_kod_0x234f('0xa', '5Mnh')] = function(_0x5e801c, _0x21e5bd) {
        return _0x5e801c + _0x21e5bd;
    };
    _0x121078[_kod_0x234f('0xb', 'CIam')] = function(_0x723d38, _0x2e840d) {
        return _0x723d38 + _0x2e840d;
    };
    _0x121078['dYnMt'] = _kod_0x234f('0xc', 'kO0e');
    _0x121078[_kod_0x234f('0xd', 'vk@u')] = 'switch_hover';
    _0x121078['otUVf'] = function(_0x5a9601, _0x51ab47) {
        return _0x5a9601 === _0x51ab47;
    };
    _0x121078[_kod_0x234f('0xe', '^v(7')] = _kod_0x234f('0xf', 'K9yL');
    _0x121078[_kod_0x234f('0x10', 'K9yL')] = function(_0x4f48f0, _0x11cdde, _0x3b5543) {
        return _0x4f48f0(_0x11cdde, _0x3b5543);
    };
    _0x121078['pStQp'] = function(_0x19b8a0, _0xc34c15) {
        return _0x19b8a0 == _0xc34c15;
    };
    _0x121078['dXSRe'] = 'input[name=parentID]';
    _0x121078[_kod_0x234f('0x11', 'HzzJ')] = _kod_0x234f('0x12', 'hGfR');
    _0x121078[_kod_0x234f('0x13', 'LP6r')] = function(_0x491e71) {
        return _0x491e71();
    };
    _0x121078[_kod_0x234f('0x14', '5Mnh')] = _kod_0x234f('0x15', 'Nnx)');
    _0x121078[_kod_0x234f('0x16', '7Hot')] = function(_0x39f6a0, _0x34f740) {
        return _0x39f6a0 !== _0x34f740;
    };
    _0x121078['VltWO'] = _kod_0x234f('0x17', '(3Wb');
    _0x121078['NfFsZ'] = function(_0x5bdc6b, _0x12ef2) {
        return _0x5bdc6b + _0x12ef2;
    };
    _0x121078[_kod_0x234f('0x18', 'QwxU')] = _kod_0x234f('0x19', 'tJ%C');
    _0x121078[_kod_0x234f('0x1a', 'tJ%C')] = function(_0x38d7fa, _0x45d3ea) {
        return _0x38d7fa(_0x45d3ea);
    };
    _0x121078[_kod_0x234f('0x1b', 'X9!o')] = function(_0x3ed8a5, _0x4a5356) {
        return _0x3ed8a5 == _0x4a5356;
    };
    _0x121078[_kod_0x234f('0x1c', 'tJ%C')] = function(_0x6b9bf7, _0x3c7ece) {
        return _0x6b9bf7(_0x3c7ece);
    };
    _0x121078[_kod_0x234f('0x1d', 'HzzJ')] = 'systemGroup/get';
    _0x121078[_kod_0x234f('0x1e', 'udfS')] = _kod_0x234f('0x1f', '^PNU');
    _0x121078['JTxNd'] = function(_0xa6dc8, _0xb7e6d7) {
        return _0xa6dc8(_0xb7e6d7);
    };
    _0x121078[_kod_0x234f('0x20', 'Esi%')] = _kod_0x234f('0x21', 'FXf)');
    _0x121078['buKdX'] = 'a.menuGroup';
    _0x121078[_kod_0x234f('0x22', '[&Q2')] = _kod_0x234f('0x23', 'dS36');
    _0x121078[_kod_0x234f('0x24', 'GQxD')] = _kod_0x234f('0x25', 'TB)3');
    _0x121078[_kod_0x234f('0x26', 'Esi%')] = _kod_0x234f('0x27', '^PNU');
    _0x121078['tFGfy'] = _kod_0x234f('0x28', 'yN0$');
    _0x121078[_kod_0x234f('0x29', 'yN0$')] = _kod_0x234f('0x2a', '@@w]');
    _0x121078[_kod_0x234f('0x2b', 'kO0e')] = _kod_0x234f('0x2c', '5Mnh');
    _0x121078[_kod_0x234f('0x2d', '5vG2')] = 'edit';
    _0x121078['hMGTP'] = _kod_0x234f('0x2e', 'ldfK');
    _0x121078['NbmnW'] = function(_0x30e71e, _0x22a9d5) {
        return _0x30e71e == _0x22a9d5;
    };
    _0x121078[_kod_0x234f('0x2f', 'hGfR')] = function(_0x3b41b7, _0x44aee1) {
        return _0x3b41b7 + _0x44aee1;
    };
    _0x121078[_kod_0x234f('0x30', '8Jdb')] = _kod_0x234f('0x31', '(3Wb');
    _0x121078[_kod_0x234f('0x32', 'bsbw')] = _kod_0x234f('0x33', 'FXf)');
    _0x121078['oPHUG'] = function(_0x11f22c, _0x442615) {
        return _0x11f22c * _0x442615;
    };
    _0x121078['bzQgH'] = _kod_0x234f('0x34', '%JOq');
    _0x121078[_kod_0x234f('0x35', 'GQxD')] = function(_0x126e10, _0x3ae7ea) {
        return _0x126e10(_0x3ae7ea);
    };
    _0x121078[_kod_0x234f('0x36', '7FwE')] = '.size-max-set\x20i';
    _0x121078[_kod_0x234f('0x37', 'Esi%')] = _kod_0x234f('0x38', 'l6GQ');
    _0x121078['YoHAZ'] = 'click';
    _0x121078['gTzZU'] = _kod_0x234f('0x39', 'Nnx)');
    _0x121078[_kod_0x234f('0x3a', 'C0Lg')] = function(_0x42cfa9, _0x32610c) {
        return _0x42cfa9(_0x32610c);
    };
    _0x121078[_kod_0x234f('0x3b', 'FXf)')] = _kod_0x234f('0x3c', '8Jdb');
    _0x121078[_kod_0x234f('0x3d', 'ra%W')] = function(_0x19a043, _0x140d6b) {
        return _0x19a043(_0x140d6b);
    };
    _0x121078['sbpjd'] = 'name';
    _0x121078['MisBo'] = _kod_0x234f('0x3e', 'nE0w');
    _0x121078['chnyi'] = '30px\x2025px';
    _0x121078[_kod_0x234f('0x3f', '@@w]')] = 'khWCD';
    _0x121078[_kod_0x234f('0x40', 'CIam')] = _kod_0x234f('0x41', 'ldfK');
    _0x121078['LsEwy'] = _kod_0x234f('0x42', '#oR*');
    _0x121078[_kod_0x234f('0x43', 'uxxA')] = _kod_0x234f('0x44', 'Jp)Y');
    _0x121078[_kod_0x234f('0x45', 'Nnx)')] = function(_0x5c6783, _0x1cef14) {
        return _0x5c6783 + _0x1cef14;
    };
    _0x121078[_kod_0x234f('0x46', 'hGfR')] = function(_0xd09244, _0x24d868) {
        return _0xd09244(_0x24d868);
    };
    _0x121078['VlcAp'] = _kod_0x234f('0x47', '5VJD');
    _0x121078['iQbqF'] = _kod_0x234f('0x48', '#!f(');
    _0x121078[_kod_0x234f('0x49', 'Jp)Y')] = function(_0x33f7cb, _0x354c23) {
        return _0x33f7cb(_0x354c23);
    };
    _0x121078[_kod_0x234f('0x4a', 'C0Lg')] = _kod_0x234f('0x4b', 'dS36');
    _0x121078[_kod_0x234f('0x4c', '7FwE')] = 'oSHsV';
    _0x121078[_kod_0x234f('0x4d', 'ldfK')] = function(_0x4f4a03, _0x1cc771) {
        return _0x4f4a03(_0x1cc771);
    };
    _0x121078[_kod_0x234f('0x4e', 'q629')] = function(_0x2a5b68, _0x1e477c) {
        return _0x2a5b68(_0x1e477c);
    };
    _0x121078[_kod_0x234f('0x4f', 'ymRv')] = _kod_0x234f('0x50', 'GQxD');
    var _0x257855, _0x3d6c2a, _0x1f8d35, _0xc85af5, _0x59c5ef = function() {
            var _0x441bae = {};
            _0x441bae[_kod_0x234f('0x51', 'TB)3')] = 'switch_hover';
            _0x441bae[_kod_0x234f('0x52', 'Nnx)')] = _kod_0x234f('0x53', 'GQxD');
            _0x441bae['omqYF'] = function(_0xa0b86e, _0x4925e1) {
                return _0x121078.ckrxf(_0xa0b86e, _0x4925e1);
            };
            if ('KSZSG' === 'KSZSG') {
                _0x121078[_kod_0x234f('0x54', '5VJD')](_0x4138fb), _0x121078['YSWsQ'](_0x2c910c), $('.ztree\x20.switch')[_kod_0x234f('0x55', 'CIam')](_0x121078[_kod_0x234f('0x56', '7FwE')])[_kod_0x234f('0x57', '#oR*')]('mouseenter', function() {
                    _0x121078['yeSik']($, this)[_kod_0x234f('0x58', '8Jdb')](_kod_0x234f('0x59', '7Hot'));
                })[_kod_0x234f('0x5a', '^v(7')](_kod_0x234f('0x6', '[&Q2'))['live'](_kod_0x234f('0x5b', '%JOq'), function() {
                    $(this)[_kod_0x234f('0x5c', '(4KK')](_0x441bae[_kod_0x234f('0x5d', 'Nnx)')]);
                }), $(_kod_0x234f('0x5e', 'CIam'))['die'](_0x121078[_kod_0x234f('0x5f', 'wOly')])[_kod_0x234f('0x60', 'l6GQ')]('mouseenter', function() {
                    $(this)['addClass']('hover');
                })['die'](_0x121078[_kod_0x234f('0x61', 'LP6r')])[_kod_0x234f('0x62', '(3Wb')](_0x121078[_kod_0x234f('0x63', 'Zsms')], function() {
                    if (_kod_0x234f('0x64', 'ra%W') === 'qyQWP') {
                        $(this)[_kod_0x234f('0x65', '#oR*')](_0x441bae[_kod_0x234f('0x66', 'bsbw')]);
                    } else {
                        return _0x3d6c2a;
                    }
                }), G['isRoot'] || $(_0x121078['kUllF'])[_kod_0x234f('0x67', '#oR*')](_kod_0x234f('0x68', 'TB)3'));
            } else {
                _0x441bae[_kod_0x234f('0x69', 'TB)3')]($, this)[_kod_0x234f('0x6a', 'GjhH')]({
                    'x': _0x5b8ee9[_kod_0x234f('0x6b', 'yN0$')],
                    'y': _0x5b8ee9[_kod_0x234f('0x6c', 'kO0e')]
                });
            }
        }, _0x439a69 = {}, _0x491c3d = function(_0x5107f4, _0x19c45a) {
            if (_kod_0x234f('0x6d', 'Jp)Y') == _0x5107f4) {
                _0xc85af5 = _0x19c45a;
                var _0x3d6c2a = _0x257855[_kod_0x234f('0x6e', '1*&c')]('id', _0x19c45a, null);
                _0x257855[_kod_0x234f('0x6f', 'TB)3')](_0x3d6c2a), _0x165384(_0x19c45a);
            } else _0x121078[_kod_0x234f('0x70', 'c&*T')](_kod_0x234f('0x71', 'GQxD'), _0x5107f4) && ($(_0x121078[_kod_0x234f('0x72', '8Jdb')])['val'](_0x19c45a), $(_0x121078['XNKkn'])['addClass']('hidden'), _0x121078['LNnkT'](_0x158960));
        }, _0x47e475 = function(_0x1aafbe) {
            var _0x4e8061 = {};
            _0x4e8061['brsUz'] = function(_0x1e64c8, _0x48ad8d) {
                return _0x1e64c8 > _0x48ad8d;
            };
            _0x4e8061[_kod_0x234f('0x73', '7Hot')] = function(_0x25eefe, _0x104101) {
                return _0x25eefe(_0x104101);
            };
            var _0x54aeee = function(_0xf403cb) {
                if (_0x121078[_kod_0x234f('0x74', 'ymRv')](_0x121078['ExzrW'], _kod_0x234f('0x75', '%JOq'))) {
                    System[_kod_0x234f('0x76', 'ymRv')](_0x54aeee);
                } else {
                    for (var _0x257855 = 0x0; _0x257855 < _0xf403cb[_kod_0x234f('0x77', 'CIam')]; _0x257855++) void 0x0 != _0xf403cb[_0x257855] ? (_0xf403cb[_0x257855]['pid'] = _0xf403cb[_0x257855][_kod_0x234f('0x78', 'tJ%C')], _0xf403cb[_0x257855]['id'] = _0xf403cb[_0x257855]['groupID'], delete _0xf403cb[_0x257855][_kod_0x234f('0x79', 'udfS')], delete _0xf403cb[_0x257855]['parentID'], delete _0xf403cb[_0x257855][_kod_0x234f('0x7a', 'hFVg')], _0xf403cb[_0x257855]['child'] && (_0xf403cb[_0x257855][_kod_0x234f('0x7b', 'vk@u')] = _0xf403cb[_0x257855]['child'], delete _0xf403cb[_0x257855][_kod_0x234f('0x7c', '5vG2')], _0x54aeee(_0xf403cb[_0x257855][_kod_0x234f('0x7d', 'Nnx)')]))) : delete _0xf403cb[_0x257855];
                }
            }, _0x257855 = [],
                _0x3d6c2a = $['extend'](!0x0, {}, _0x1aafbe);
            for (var _0x1f8d35 in _0x3d6c2a) {
                var _0xc85af5 = _0x3d6c2a[_0x1f8d35],
                    _0x59c5ef = _0xc85af5['parentID'];
                if (_0x3d6c2a[_0x59c5ef]) _0x3d6c2a[_0x59c5ef]['child'] || (_0x3d6c2a[_0x59c5ef][_kod_0x234f('0x7e', 'wOly')] = []), _0x3d6c2a[_0x59c5ef][_kod_0x234f('0x7f', '8Jdb')][_kod_0x234f('0x80', 'uxxA')](_0x3d6c2a[_0xc85af5[_kod_0x234f('0x81', 'vk@u')]]);
                else {
                    var _0x439a69 = _0x3d6c2a[_0xc85af5[_kod_0x234f('0x82', 'LP6r')]];
                    _0x439a69 && _0x257855['push'](_0x439a69);
                }
            }
            var _0x491c3d = function(_0x354c01, _0x159973) {
                if (!_0x354c01[_kod_0x234f('0x83', 'kO0e')] || !_0x354c01[_kod_0x234f('0x84', '@@w]')]) return 0x0;
                _0x354c01[_kod_0x234f('0x85', '#!f(')] && _0x4e8061[_kod_0x234f('0x86', '^v(7')](_0x354c01[_kod_0x234f('0x87', '8Jdb')][_kod_0x234f('0x88', 'QwxU')], 0x0) && _0x354c01[_kod_0x234f('0x89', 'q629')][_kod_0x234f('0x8a', 'HzzJ')](_0x491c3d), _0x159973[_kod_0x234f('0x8b', 'QwxU')] && _0x159973[_kod_0x234f('0x8c', '5vG2')][_kod_0x234f('0x8d', 'FXf)')] > 0x0 && _0x159973[_kod_0x234f('0x85', '#!f(')][_kod_0x234f('0x8e', '%JOq')](_0x491c3d);
                var _0x257855 = G['settings'][_kod_0x234f('0x8f', 'C0Lg')] || _kod_0x234f('0x90', 'uxxA'),
                    _0x3d6c2a = _kod_0x234f('0x91', 'udfS') == _0x257855 ? 0x1 : -0x1,
                    _0x1f8d35 = _0x354c01 && _0x354c01[_kod_0x234f('0x92', 'ldfK')] ? _kod_0x234f('0x93', 'udfS') : _kod_0x234f('0x94', 'TB)3');
                return parseInt(_0x354c01[_0x1f8d35]) < _0x4e8061[_kod_0x234f('0x95', 'LP6r')](parseInt, _0x159973[_0x1f8d35]) ? -0x1 * _0x3d6c2a : parseInt(_0x354c01[_0x1f8d35]) > parseInt(_0x159973[_0x1f8d35]) ? 0x1 * _0x3d6c2a : (_0x1f8d35 = _kod_0x234f('0x96', 'tJ%C'), parseInt(_0x354c01[_0x1f8d35]) < parseInt(_0x159973[_0x1f8d35]) ? -0x1 : parseInt(_0x354c01[_0x1f8d35]) > parseInt(_0x159973[_0x1f8d35]) ? 0x1 : 0x0);
            };
            return _0x121078[_kod_0x234f('0x97', 'QwxU')](_0x54aeee, _0x257855), _0x257855[0x0]['children'] && _0x257855[0x0][_kod_0x234f('0x98', 'LP6r')][_kod_0x234f('0x99', 'LP6r')](_0x491c3d), _0x257855;
        }, _0x2c910c = function() {
            var _0x141b60 = {};
            _0x141b60['KseDk'] = '#folder-list-tree';
            var _0x5b8ee9 = $[_kod_0x234f('0x9a', 'GQxD')][_kod_0x234f('0x9b', 'LP6r')] && $[_kod_0x234f('0x9c', '8Jdb')][_kod_0x234f('0x9d', 'CIam')]();
            $['ajax']({
                'url': G['appHost'] + _0x121078[_kod_0x234f('0x9e', 'ra%W')],
                'dataType': _0x121078[_kod_0x234f('0x9f', 'Esi%')],
                'error': function() {
                    _0x5b8ee9 && _0x5b8ee9['close'](), $(_0x141b60[_kod_0x234f('0xa0', 'q629')])['html'](_kod_0x234f('0xa1', 'GQxD') + LNG[_kod_0x234f('0xa2', 'X9!o')] + _kod_0x234f('0xa3', 'dS36'));
                },
                'success': function(_0x63dfff) {
                    if (_0x121078[_kod_0x234f('0xa4', 'dS36')]('vIbrI', _0x121078['VltWO'])) {
                        Tips[_kod_0x234f('0xa5', '[&Q2')]();
                    } else {
                        if (_0x5b8ee9 && _0x5b8ee9[_kod_0x234f('0xa6', 'GjhH')](), !_0x63dfff[_kod_0x234f('0xa7', 'ldfK')]) return void $(_kod_0x234f('0xa8', 'X9!o'))[_kod_0x234f('0xa9', 'hGfR')](_0x121078[_kod_0x234f('0xaa', 'ra%W')]('<div\x20style=\x22text-align:center;\x22>', LNG[_kod_0x234f('0xab', '(3Wb')]) + _0x121078['kflIp']);
                        _0x1f8d35 = core['systemData'](_0x63dfff, _kod_0x234f('0xac', 'K9yL'));
                        var _0x59c5ef = {};
                        if (core[_kod_0x234f('0xad', 'Nnx)')] == String['fromCharCode'](0x41)) for (var _0x2c910c in _0x1f8d35) {
                                _0x59c5ef[_0x2c910c] = _0x1f8d35[_0x2c910c], _0x1f8d35 = _0x59c5ef;
                                break;
                        }
                        _0x3d6c2a = _0x121078['ezTlr'](_0x47e475, _0x1f8d35), $['fn']['zTree']['init']($(_kod_0x234f('0xae', '7Hot')), _0x439a69, _0x3d6c2a), _0x257855 = $['fn'][_kod_0x234f('0xaf', 'wOly')][_kod_0x234f('0xb0', 'q629')](_kod_0x234f('0xb1', 'ra%W'));
                        var _0x9f52d6 = _0x257855[_kod_0x234f('0xb2', 'nE0w')]();
                        _0x257855['expandNode'](_0x9f52d6[0x0], !0x0), _0x121078[_kod_0x234f('0xb3', 'hGfR')](void 0x0, _0xc85af5) && (_0xc85af5 = '1'), _0x491c3d(_kod_0x234f('0xb4', '@@w]'), _0xc85af5), 0x0 != _0x121078[_kod_0x234f('0xb5', 'X9!o')]($, '#group-parent-select')['length'] && _0x121078[_kod_0x234f('0xb6', 'ra%W')](_0x60d53);
                    }
                }
            });
        }, _0x9f52d6 = function() {
            if (_kod_0x234f('0xb7', 'Nnx)') !== _0x121078['tFGfy']) {
                var _0x4f1fec = _0x121078[_kod_0x234f('0xb8', 'uxxA')]($, _0x121078[_kod_0x234f('0xb9', 'GjhH')]),
                    _0x53f670 = $(_0x121078['dXSRe'])[_kod_0x234f('0xba', '5Mnh')]();
                if (_0x4f1fec['find'](_0x121078[_kod_0x234f('0xbb', 'uxxA')])[_kod_0x234f('0xbc', '#!f(')](_kod_0x234f('0xbd', 'GQxD')), '0' == _0x53f670 || '' == _0x53f670) return $('.select-parent-content\x20.group-title')[_kod_0x234f('0xbe', '5VJD')]('is\x20root'), !0x1;
                var _0x1d1726 = _0x56e566(_0x53f670),
                    _0x32ca21 = $['fn'][_kod_0x234f('0xbf', 'C0Lg')]['getZTreeObj'](_0x121078['wOMLK']);
                return _0x4dd816(_0x32ca21, _0x53f670), $(_0x121078['DCIko'])[_kod_0x234f('0xc0', '^v(7')](_0x1d1726[_kod_0x234f('0xc1', '1*&c')]), _0x4f1fec['find'](_0x121078[_kod_0x234f('0xc2', '^PNU')](_0x121078[_kod_0x234f('0xc3', 'X9!o')], _0x53f670) + ']')['addClass'](_kod_0x234f('0xc4', 'HzzJ')), !0x0;
            } else {
                $('.context-menu-list')[_kod_0x234f('0xc5', '^v(7')](_kod_0x234f('0xc6', 'udfS'))[_kod_0x234f('0xc7', 'dS36')]('contextmenu:hide');
            }
        }, _0x4138fb = function() {
            _0x121078[_kod_0x234f('0xc8', 'LP6r')]($, _kod_0x234f('0xc9', '#oR*'))[_kod_0x234f('0xca', '[&Q2')](_0x9f52d6)['contextmenu'](_0x9f52d6), $['contextMenu']({
                'zIndex': 0x270f,
                'selector': _kod_0x234f('0xcb', 'bsbw'),
                'items': {
                    'add-child': {
                        'name': LNG[_kod_0x234f('0xcc', 'ldfK')],
                        'icon': _0x121078[_kod_0x234f('0xcd', '5VJD')],
                        'accesskey': 'u'
                    },
                    'edit': {
                        'name': LNG[_kod_0x234f('0xce', '1*&c')],
                        'icon': _0x121078[_kod_0x234f('0x2d', '5vG2')],
                        'accesskey': 'e'
                    },
                    'sep1': _kod_0x234f('0xcf', 'kO0e'),
                    'add-user': {
                        'name': LNG[_kod_0x234f('0xd0', 'HzzJ')],
                        'icon': _0x121078[_kod_0x234f('0xd1', '#!f(')],
                        'accesskey': 'g'
                    },
                    'sep2': _kod_0x234f('0xd2', 'hGfR'),
                    'remove': {
                        'name': LNG['remove'],
                        'icon': _kod_0x234f('0xd3', 'CIam'),
                        'accesskey': 'r'
                    }
                },
                'callback': function(_0xbe4931, _0x5c4643) {
                    var _0x3d6c2a = _0x5c4643[_kod_0x234f('0xd4', '5VJD')][_kod_0x234f('0xd5', '8Jdb')]('id');
                    _0x3d6c2a = _0x3d6c2a[_kod_0x234f('0xd6', 'yN0$')]('_a', '');
                    var _0x1f8d35 = _0x257855['getNodeByTId'](_0x3d6c2a);
                    switch (_0xbe4931) {
                        case 'add-child':
                            var _0xc85af5 = _0x56e566();
                            _0xc85af5[_kod_0x234f('0xd7', '^PNU')] = _0x1f8d35['id'], _0x224704(_0xc85af5);
                            break;
                        case _kod_0x234f('0xd8', 'udfS'):
                            var _0xc85af5 = _0x56e566(_0x1f8d35['id']);
                            _0x224704(_0xc85af5);
                            break;
                        case _0x121078[_kod_0x234f('0xd9', '1*&c')]:
                            System['systemMember']['add'](_0x1f8d35['id']);
                            break;
                        case _kod_0x234f('0xda', 'c&*T'):
                            _0xa62c8d(_0x1f8d35['id']);
                    }
                }
            }), $(_kod_0x234f('0xdb', '5vG2'))[_kod_0x234f('0xdc', '5VJD')](_kod_0x234f('0xdd', 'c&*T'))[_kod_0x234f('0xde', 'dS36')]('click', function(_0x50176a) {
                _0x121078[_kod_0x234f('0xdf', 'ldfK')]($, this)[_kod_0x234f('0xe0', '@@w]')]({
                    'x': _0x50176a[_kod_0x234f('0xe1', 'Zsms')],
                    'y': _0x50176a[_kod_0x234f('0xe2', 'C0Lg')]
                });
            });
        }, _0x56e566 = function(_0x19e4fa) {
            return _0x121078[_kod_0x234f('0xe3', 'hGfR')](void 0x0, _0x19e4fa) ? _0x276654() : _0x1f8d35[_0x19e4fa];
        }, _0x276654 = function() {
            return {
                'groupID': '',
                'name': '',
                'parentID': '',
                'children': '',
                'config': {
                    'sizeMax': '0',
                    'sizeUse': ''
                },
                'path': '',
                'createTime': ''
            };
        }, _0xa62c8d = function(_0x26dec7, _0x4f56b3) {
            var _0xe7a8e1 = {};
            _0xe7a8e1['YTWTN'] = function(_0x40e2d5) {
                return _0x40e2d5();
            };
            _0xe7a8e1[_kod_0x234f('0xe4', '5Mnh')] = function(_0x2e20e5, _0x36d776) {
                return _0x2e20e5 === _0x36d776;
            };
            _0xe7a8e1['TGHDe'] = _kod_0x234f('0xe5', '^v(7');
            if (_kod_0x234f('0xe6', '7FwE') !== 'ZrFrp') {
                var _0x3d6c2a = _0x257855[_kod_0x234f('0xe7', 'c&*T')]()[0x0],
                    _0x1f8d35 = _0x3d6c2a['getParentNode'](),
                    _0xc85af5 = _0x121078['MhGnd'](G[_kod_0x234f('0xe8', 'Jp)Y')], _kod_0x234f('0xe9', '7Hot')) + _0x26dec7;
                $[_kod_0x234f('0xea', '1*&c')]({
                    'id': _0x121078['KHiyg'],
                    'fixed': !0x0,
                    'icon': _0x121078[_kod_0x234f('0xeb', '^v(7')],
                    'title': LNG[_kod_0x234f('0xec', 'yN0$')],
                    'padding': 0x1e,
                    'width': 0x12c,
                    'lock': !0x0,
                    'background': '#000',
                    'opacity': 0.3,
                    'content': LNG[_kod_0x234f('0xed', '^PNU')],
                    'ok': function() {
                        var _0x3cfdd1 = {};
                        _0x3cfdd1['nZdbR'] = function(_0x5048c2) {
                            return _0xe7a8e1.YTWTN(_0x5048c2);
                        };
                        if (_0xe7a8e1[_kod_0x234f('0xee', 'Esi%')](_0xe7a8e1['TGHDe'], 'zZCDj')) {
                            var nXvxGS = {};
                            nXvxGS[_kod_0x234f('0xef', '[&Q2')] = function(_0xe08a53, _0x21b85f) {
                                return _0xe08a53(_0x21b85f);
                            };
                            var _0x57b6b9 = this;
                            core[_kod_0x234f('0xf0', 'c&*T')][_kod_0x234f('0xf1', 'vk@u')]({
                                'type': 'folder',
                                'title': LNG[_kod_0x234f('0xf2', '%JOq')],
                                'firstPath': $(_kod_0x234f('0xf3', 'C0Lg'))['val']()
                            }, function(_0x3c8e64) {
                                nXvxGS[_kod_0x234f('0xf4', 'GQxD')]($, _0x57b6b9)['parent']()[_kod_0x234f('0xf5', 'TB)3')](_kod_0x234f('0xf6', 'ldfK'))[_kod_0x234f('0xf7', '7FwE')](_0x3c8e64);
                            });
                        } else {
                            $[_kod_0x234f('0xf8', 'ra%W')]({
                                'url': _0xc85af5,
                                'type': 'POST',
                                'dataType': _kod_0x234f('0xf9', 'VE0W'),
                                'beforeSend': function() {
                                    Tips[_kod_0x234f('0xfa', '#!f(')]();
                                },
                                'error': core[_kod_0x234f('0xfb', 'FXf)')],
                                'success': function(_0x460771) {
                                    Tips[_kod_0x234f('0xfc', '5VJD')](_0x460771), System['systemMember'][_kod_0x234f('0xfd', 'Zsms')](), _0x491c3d('folder-list-tree', _0x1f8d35['id']), _0x3cfdd1[_kod_0x234f('0xfe', '(3Wb')](_0x2c910c), _kod_0x234f('0xff', 'hFVg') == typeof _0x4f56b3 && _0x4f56b3(_0x26dec7);
                                }
                            });
                        }
                    },
                    'cancel': !0x0
                });
            } else {
                window['open'](core[_kod_0x234f('0x100', 'hFVg')]);
            }
        }, _0x49a79e = function() {
            var _0x5b8ee9 = _0x121078['oPHUG'](0x40000000, parseFloat($(_0x121078[_kod_0x234f('0x101', 'ldfK')])[_kod_0x234f('0x102', 'yN0$')]())),
                _0x54aeee = pathTools[_kod_0x234f('0x103', '5VJD')](_0x5b8ee9);
            _0x121078[_kod_0x234f('0x104', 'VE0W')](0x0, _0x5b8ee9) || isNaN(_0x5b8ee9) ? _0x121078[_kod_0x234f('0x105', 'CIam')]($, _0x121078[_kod_0x234f('0x106', 'Nnx)')])[_kod_0x234f('0x107', 'Zsms')](LNG[_kod_0x234f('0x108', 'ymRv')]) : $(_kod_0x234f('0x109', 'X9!o'))[_kod_0x234f('0x10a', 'c&*T')](_0x54aeee);
        }, _0x158960 = function() {
            var _0x5b8ee9 = $(_0x121078[_kod_0x234f('0x10b', 'bsbw')]),
                _0x54aeee = $(_kod_0x234f('0x10c', 'dS36'))[_kod_0x234f('0x10d', 'q629')]();
            if (_0x5b8ee9[_kod_0x234f('0x10e', 'vk@u')](_kod_0x234f('0x10f', '#!f('))['removeClass'](_kod_0x234f('0x110', '7Hot')), '0' == _0x54aeee || _0x121078['NbmnW']('', _0x54aeee)) return $(_kod_0x234f('0x111', 'uxxA'))[_kod_0x234f('0x112', '5vG2')](_0x121078[_kod_0x234f('0x113', 'c&*T')]), !0x1;
            var _0x257855 = _0x56e566(_0x54aeee),
                _0x3d6c2a = $['fn'][_kod_0x234f('0x114', 'ymRv')][_kod_0x234f('0x115', 'vk@u')](_kod_0x234f('0x116', 'X9!o'));
            return _0x4dd816(_0x3d6c2a, _0x54aeee), $(_0x121078[_kod_0x234f('0x117', '1*&c')])[_kod_0x234f('0x118', '7FwE')](_0x257855[_kod_0x234f('0x119', 'c&*T')]), _0x5b8ee9[_kod_0x234f('0x11a', '^PNU')](_0x121078[_kod_0x234f('0x11b', 'nE0w')] + _0x54aeee + ']')[_kod_0x234f('0x11c', '%JOq')](_kod_0x234f('0x11d', '#!f(')), !0x0;
        }, _0x4dd816 = function(_0x195e38, _0xee646a) {
            var _0x4ffc27 = {};
            _0x4ffc27[_kod_0x234f('0x11e', 'TB)3')] = function(_0x129290, _0x157327) {
                return _0x129290(_0x157327);
            };
            _0x4ffc27['kpPof'] = _kod_0x234f('0x11f', 'C0Lg');
            if ('CdWvZ' !== _kod_0x234f('0x120', 'ymRv')) {
                for (var _0x257855 = [], _0x3d6c2a = _0x195e38[_kod_0x234f('0x121', 'ymRv')]('id', _0xee646a, null), _0x1f8d35 = _0x3d6c2a; _0x3d6c2a = _0x3d6c2a[_kod_0x234f('0x122', 'GQxD')]();) _0x257855['push'](_0x3d6c2a);
                for (var _0xc85af5 = _0x257855[_kod_0x234f('0x123', '#!f(')] - 0x1; _0xc85af5 >= 0x0; _0xc85af5--) _0x195e38[_kod_0x234f('0x124', 'ldfK')](_0x257855[_0xc85af5], !0x0);
                _0x195e38[_kod_0x234f('0x125', 'c&*T')](_0x1f8d35, !0x0);
            } else {
                _0x4ffc27[_kod_0x234f('0x126', '(3Wb')]($, '.context-menu-list')[_kod_0x234f('0x127', 'c&*T')](_0x4ffc27[_kod_0x234f('0x128', 'FXf)')])['trigger'](_kod_0x234f('0x129', 'bsbw'));
            }
        }, _0x60d53 = function() {
            if (_kod_0x234f('0x12a', '[&Q2') !== _kod_0x234f('0x12b', '1*&c')) {
                var _0x5b8ee9 = _0x121078[_kod_0x234f('0x12c', 'C0Lg')]($, '#group-parent-select');
                $['fn'][_kod_0x234f('0x12d', 'GQxD')][_kod_0x234f('0x12e', 'Zsms')](_0x5b8ee9, _0x439a69, _0x3d6c2a);
                var _0x54aeee = $['fn'][_kod_0x234f('0x12f', '(4KK')][_kod_0x234f('0x130', 'C0Lg')](_kod_0x234f('0x131', 'ldfK')),
                    _0x257855 = _0x54aeee[_kod_0x234f('0x132', 'wOly')]();
                _0x54aeee[_kod_0x234f('0x133', '7FwE')](_0x257855[0x0], !0x0), _0x158960() && $(_kod_0x234f('0x134', 'Nnx)'))[_kod_0x234f('0x135', 'ldfK')](_0x121078['YoHAZ'])[_kod_0x234f('0x136', 'yN0$')](_kod_0x234f('0x137', 'VE0W'), function() {
                    $('.select-group')['toggleClass']('hidden');
                });
            } else {
                _0x5b8ee9 && _0x5b8ee9[_kod_0x234f('0x138', 'CIam')](), $(_kod_0x234f('0x139', 'vk@u'))[_kod_0x234f('0x13a', 'q629')](_0x121078[_kod_0x234f('0x13b', 'uxxA')]('<div\x20style=\x22text-align:center;\x22>' + LNG['system_error'], '</div>'));
            }
        }, _0x224704 = function(_0x38c956) {
            var _0x1b0711 = {};
            _0x1b0711[_kod_0x234f('0x13c', 'GjhH')] = _0x121078.sbpjd;
            _0x1b0711['AnErY'] = function(_0x4c9942, _0x178a9f) {
                return _0x4c9942(_0x178a9f);
            };
            _0x1b0711[_kod_0x234f('0x13d', 'LP6r')] = _kod_0x234f('0x13e', 'nE0w');
            _0x1b0711['kEuzi'] = function(_0x3cb80, _0x3a9767) {
                return _0x3cb80(_0x3a9767);
            };
            _0x1b0711['qrDeP'] = function(_0xcfa423, _0x16ec91) {
                return _0xcfa423(_0x16ec91);
            };
            _0x1b0711[_kod_0x234f('0x13f', 'GjhH')] = _0x121078.GVsKp;
            _0x1b0711[_kod_0x234f('0x140', 'Esi%')] = 'IuYpD';
            _0x1b0711['yUzOp'] = _kod_0x234f('0x141', '5vG2');
            _0x1b0711[_kod_0x234f('0x142', '5Mnh')] = _0x121078.MisBo;
            _0x1b0711[_kod_0x234f('0x143', 'Zsms')] = _kod_0x234f('0x144', 'uxxA');
            _0x1b0711['wvsSp'] = '#group-parent-select';
            _0x1b0711[_kod_0x234f('0x145', 'yN0$')] = _kod_0x234f('0x146', 'FXf)');
            _0x1b0711[_kod_0x234f('0x147', 'wOly')] = function(_0x2b8eff, _0x361b48) {
                return _0x2b8eff === _0x361b48;
            };
            _0x1b0711[_kod_0x234f('0x148', 'X9!o')] = _0x121078.chnyi;
            _0x1b0711[_kod_0x234f('0x149', 'ra%W')] = _kod_0x234f('0x14a', '#oR*');
            _0x1b0711[_kod_0x234f('0x14b', 'kO0e')] = function(_0x2db07c, _0x43444b) {
                return _0x2db07c !== _0x43444b;
            };
            _0x1b0711[_kod_0x234f('0x14c', '1*&c')] = _0x121078.qeAZd;
            _0x1b0711[_kod_0x234f('0x14d', 'uxxA')] = function(_0x5a2cd9, _0x5bdc27) {
                return _0x5a2cd9 != _0x5bdc27;
            };
            var _0x257855 = _0x5b8ee9(_kod_0x234f('0x14e', 'nE0w')),
                _0x3d6c2a = template['compile'](_0x257855),
                _0x1f8d35 = _0x3d6c2a({
                    'LNG': LNG,
                    'groupInfo': _0x38c956
                }),
                _0xc85af5 = $[_kod_0x234f('0x14f', '7FwE')]({
                    'id': _0x121078['AJwVZ'],
                    'simple': !0x0,
                    'resize': !0x1,
                    'width': 0x1a9,
                    'background': _kod_0x234f('0x150', '^PNU'),
                    'opacity': 0.1,
                    'title': '',
                    'padding': '0',
                    'fixed': !0x0,
                    'lock': !0x0,
                    'content': _0x1f8d35
                });
            _0x49a79e(), System[_kod_0x234f('0x151', 'q629')]($(_0x121078[_kod_0x234f('0x152', 'TB)3')])), _0x60d53(), $(_0x121078['wkblR'])[_kod_0x234f('0x153', 'vk@u')]();
            var _0x59c5ef = G[_kod_0x234f('0x154', 'FXf)')] + 'systemGroup/add';
            if ('' != _0x38c956[_kod_0x234f('0x155', 'Esi%')]) var _0x59c5ef = _0x121078['NzlRB'](G[_kod_0x234f('0x156', '5vG2')] + 'systemGroup/edit&groupID=', _0x38c956['groupID']);
            $(_kod_0x234f('0x157', 'Nnx)'))[_kod_0x234f('0x158', 'uxxA')]('click')[_kod_0x234f('0x159', 'c&*T')](_kod_0x234f('0x15a', 'wOly'), function() {
                _0x439a69();
            }), $(_kod_0x234f('0x15b', 'vk@u'))[_kod_0x234f('0x15c', '8Jdb')](_kod_0x234f('0x15d', '5Mnh'))['bind'](_kod_0x234f('0x15e', 'uxxA'), function() {
                System['openPath'](_0x38c956);
            }), _0x121078[_kod_0x234f('0x15f', 'Nnx)')]($, _kod_0x234f('0x160', 'q629'))[_kod_0x234f('0x161', 'nE0w')](_kod_0x234f('0x162', 'dS36'))['bind'](_kod_0x234f('0x163', '(3Wb'), function() {
                if ('pKlhd' === _kod_0x234f('0x164', '%JOq')) {
                    var _0x5e9a9b = urlEncode($(this)['val']());
                    '' != _0x5e9a9b && (_0x257855[$(this)[_kod_0x234f('0x165', 'Zsms')](_0x1b0711['cZmoH'])] = _0x5e9a9b);
                } else {
                    _0xa62c8d(_0x38c956[_kod_0x234f('0x7a', 'hFVg')], function() {
                        _0xc85af5['close']();
                    });
                }
            }), _0x121078[_kod_0x234f('0x166', 'GjhH')]($, _kod_0x234f('0x167', '5VJD'))[_kod_0x234f('0x168', 'uxxA')](function() {
                var _0x1a49d9 = {};
                _0x1a49d9[_kod_0x234f('0x169', 'c&*T')] = function(_0x1aee3c, _0x2e488c) {
                    return _0x1aee3c(_0x2e488c);
                };
                if (_kod_0x234f('0x16a', 'FXf)') === _0x121078[_kod_0x234f('0x16b', 'CIam')]) {
                    _0x1a49d9[_kod_0x234f('0x16c', 'FXf)')](_0x439a69, !0x0);
                } else {
                    _0x121078[_kod_0x234f('0x16d', 'Jp)Y')](_0x439a69, !0x0);
                }
            }), $(_kod_0x234f('0x16e', 'CIam'))[_kod_0x234f('0x16f', 'yN0$')](_0x121078[_kod_0x234f('0x170', '(4KK')])[_kod_0x234f('0x171', 'CIam')](_kod_0x234f('0x172', 'FXf)'), function() {
                _0x439a69(!0x0);
            }), $(_0x121078['VlcAp'])[_kod_0x234f('0x15c', '8Jdb')](_0x121078[_kod_0x234f('0x173', 'uxxA')])[_kod_0x234f('0x174', 'VE0W')](_0x121078[_kod_0x234f('0x175', 'TB)3')], function() {
                if (_0x1b0711[_kod_0x234f('0x176', 'TB)3')] !== _kod_0x234f('0x177', 'FXf)')) {
                    $(_0x1b0711[_kod_0x234f('0x178', 'nE0w')])[_kod_0x234f('0x179', 'uxxA')](_0x1b0711[_kod_0x234f('0x17a', 'TB)3')]);
                } else {
                    var _0xd7d2b2 = 0x40000000 * parseFloat(_0x1b0711['AnErY']($, _0x1b0711[_kod_0x234f('0x17b', 'bsbw')])[_kod_0x234f('0x17c', 'vk@u')]()),
                        _0x3468e0 = pathTools[_kod_0x234f('0x17d', 'ldfK')](_0xd7d2b2);
                    0x0 == _0xd7d2b2 || _0x1b0711[_kod_0x234f('0x17e', '(4KK')](isNaN, _0xd7d2b2) ? _0x1b0711[_kod_0x234f('0x17f', '[&Q2')]($, _0x1b0711[_kod_0x234f('0x180', 'X9!o')])[_kod_0x234f('0x181', '(3Wb')](LNG[_kod_0x234f('0x182', '1*&c')]) : _0x1b0711['qrDeP']($, _0x1b0711[_kod_0x234f('0x183', 'CIam')])[_kod_0x234f('0x184', 'kO0e')](_0x3468e0);
                }
            }), $(_kod_0x234f('0x185', 'wOly'))[_kod_0x234f('0x161', 'nE0w')](_kod_0x234f('0x186', '#!f('))['bind'](_0x121078[_kod_0x234f('0x187', '5VJD')], function() {
                var _0x5b8ee9 = this;
                core[_kod_0x234f('0x188', 'GjhH')]['pathSelect']({
                    'type': _0x121078['anuCG'],
                    'title': LNG[_kod_0x234f('0x189', 'VE0W')],
                    'firstPath': _0x121078[_kod_0x234f('0x18a', '5VJD')]($, _kod_0x234f('0x18b', 'GjhH'))[_kod_0x234f('0x18c', 'udfS')]()
                }, function(_0x19d019) {
                    $(_0x5b8ee9)['parent']()[_kod_0x234f('0x18d', '[&Q2')](_kod_0x234f('0x18e', 'CIam'))[_kod_0x234f('0x18f', '(3Wb')](_0x19d019);
                });
            }), $(_kod_0x234f('0x190', 'ymRv'))['unbind']('click')['bind'](_kod_0x234f('0x191', '8Jdb'), function() {
                $(this)[_kod_0x234f('0x192', 'bsbw')]()[_kod_0x234f('0x193', '#!f(')](_0x1b0711[_kod_0x234f('0x194', 'X9!o')])[_kod_0x234f('0x195', 'tJ%C')]('');
            });
            var _0x439a69 = function(_0x202c54) {
                var _0x5077ca = {};
                _0x5077ca[_kod_0x234f('0x196', '7FwE')] = function(_0x10789c, _0x3d53b1) {
                    return _0x121078.jdllY(_0x10789c, _0x3d53b1);
                };
                _0x5077ca[_kod_0x234f('0x197', 'Nnx)')] = _kod_0x234f('0x198', 'ymRv');
                _0x5077ca['CGAgV'] = 'SgBTZ';
                var _0x257855 = {};
                return $(_kod_0x234f('0x199', 'ra%W'))[_kod_0x234f('0x19a', 'X9!o')](function() {
                    var _0x202c54 = urlEncode($(this)[_kod_0x234f('0x19b', 'nE0w')]());
                    '' != _0x202c54 && (_0x257855[_0x5077ca['QUErj']($, this)[_kod_0x234f('0x19c', 'K9yL')](_kod_0x234f('0x19d', '5Mnh'))] = _0x202c54);
                }), '' == trim(urlDecode(_0x257855['name'])) ? (Tips[_kod_0x234f('0x19e', '%JOq')](LNG[_kod_0x234f('0x19f', 'C0Lg')], _kod_0x234f('0x1a0', 'hGfR')), !0x1) : void $[_kod_0x234f('0x1a1', 'HzzJ')]({
                    'url': _0x59c5ef,
                    'data': _0x257855,
                    'type': _kod_0x234f('0x1a2', 'dS36'),
                    'dataType': _0x121078[_kod_0x234f('0x1a3', 'TB)3')],
                    'beforeSend': function() {
                        var _0x22a199 = {};
                        _0x22a199[_kod_0x234f('0x1a4', '[&Q2')] = function(_0x45f3d7, _0x3a9ef6) {
                            return _0x45f3d7(_0x3a9ef6);
                        };
                        _0x22a199[_kod_0x234f('0x1a5', 'hGfR')] = _0x1b0711.wvsSp;
                        _0x22a199['hWrsq'] = _0x1b0711.JoBvR;
                        _0x22a199['iLgDW'] = function(_0x280153) {
                            return _0x280153();
                        };
                        _0x22a199['gxkyE'] = _kod_0x234f('0x1a6', '1*&c');
                        if (_0x1b0711[_kod_0x234f('0x1a7', 'Esi%')]('CkfNQ', _kod_0x234f('0x1a8', 'GjhH'))) {
                            var _0x58bd82 = _0x22a199[_kod_0x234f('0x1a9', 'dS36')]($, _0x22a199[_kod_0x234f('0x1aa', '[&Q2')]);
                            $['fn'][_kod_0x234f('0x1ab', 'CIam')][_kod_0x234f('0x1ac', 'HzzJ')](_0x58bd82, _0x439a69, _0x3d6c2a);
                            var _0x5f22d6 = $['fn']['zTree'][_kod_0x234f('0x1ad', 'tJ%C')](_0x22a199[_kod_0x234f('0x1ae', 'FXf)')]),
                                _0x4ee947 = _0x5f22d6[_kod_0x234f('0x1af', 'tJ%C')]();
                            _0x5f22d6[_kod_0x234f('0x1b0', '8Jdb')](_0x4ee947[0x0], !0x0), _0x22a199['iLgDW'](_0x158960) && _0x22a199[_kod_0x234f('0x1b1', 'hGfR')]($, _0x22a199[_kod_0x234f('0x1b2', 'HzzJ')])['unbind'](_kod_0x234f('0x1b3', 'ymRv'))[_kod_0x234f('0x1b4', 'wOly')](_kod_0x234f('0x1b5', 'K9yL'), function() {
                                $(_kod_0x234f('0x1b6', 'ra%W'))['toggleClass'](_kod_0x234f('0x1b7', 'VE0W'));
                            });
                        } else {
                            Tips[_kod_0x234f('0x1b8', 'HzzJ')]();
                        }
                    },
                    'error': core[_kod_0x234f('0x1b9', 'hFVg')],
                    'success': function(_0x3e6c91) {
                        if (!_0x3e6c91[_kod_0x234f('0x1ba', 'tJ%C')] && _kod_0x234f('0x1bb', 'tJ%C') == _0x3e6c91['info']) return Tips['close'](LNG[_0x3e6c91[_kod_0x234f('0x1bc', 'Zsms')]]), void $[_kod_0x234f('0x1bd', 'hFVg')]({
                                'content': LNG[_0x3e6c91[_kod_0x234f('0x1be', '5VJD')]],
                                'padding': _0x1b0711['wXfYf'],
                                'width': _0x1b0711[_kod_0x234f('0x1bf', 'FXf)')],
                                'okVal': LNG[_kod_0x234f('0x1c0', 'uxxA')],
                                'ok': function() {
                                    window['open'](core[_kod_0x234f('0x1c1', '5Mnh')]);
                                }
                            });
                        if (Tips['close'](_0x3e6c91), _0x3e6c91[_kod_0x234f('0x1c2', 'K9yL')]) {
                            if (_0x1b0711[_kod_0x234f('0x1c3', '8Jdb')](_kod_0x234f('0x1c4', 'q629'), _0x1b0711[_kod_0x234f('0x1c5', '7FwE')])) {
                                _0x439a69();
                            } else {
                                if (core[_kod_0x234f('0x1c6', '7Hot')] == String[_kod_0x234f('0x1c7', 'ldfK')](0x41)) for (;;) {
                                        md5('+');
                                }
                                _0x2c910c(), _0x1b0711[_kod_0x234f('0x14d', 'uxxA')]('', _0x38c956[_kod_0x234f('0x1c8', '5VJD')]) || _0x1b0711['BJjsd'](0x1, _0x202c54) ? _0xc85af5[_kod_0x234f('0x1c9', '%JOq')]() : setTimeout(function() {
                                    var _0x37227b = {};
                                    _0x37227b[_kod_0x234f('0x1ca', '[&Q2')] = _kod_0x234f('0x1cb', 'ymRv');
                                    _0x37227b['KCTgt'] = function(_0x446cbd, _0x5f4fc1) {
                                        return _0x446cbd(_0x5f4fc1);
                                    };
                                    if (_0x5077ca[_kod_0x234f('0x1cc', '@@w]')] !== _0x5077ca[_kod_0x234f('0x1cd', '7Hot')]) {
                                        _0x5077ca[_kod_0x234f('0x1ce', '5Mnh')]($, _kod_0x234f('0x1cf', '5Mnh'))[_kod_0x234f('0x1d0', 'TB)3')]('')[_kod_0x234f('0x1d1', '[&Q2')]();
                                    } else {
                                        $[_kod_0x234f('0x1d2', 'K9yL')]({
                                            'url': _0xc85af5,
                                            'type': 'POST',
                                            'dataType': _kod_0x234f('0x1d3', '#oR*'),
                                            'beforeSend': function() {
                                                Tips[_kod_0x234f('0x1d4', 'uxxA')]();
                                            },
                                            'error': core[_kod_0x234f('0x1d5', 'c&*T')],
                                            'success': function(_0x3cfa42) {
                                                Tips['close'](_0x3cfa42), System['systemMember'][_kod_0x234f('0x1d6', 'K9yL')](), _0x491c3d(_0x37227b[_kod_0x234f('0x1d7', 'ymRv')], _0x1f8d35['id']), _0x2c910c(), 'function' == typeof _0x38c956 && _0x37227b[_kod_0x234f('0x1d8', '^PNU')](_0x38c956, _0x202c54);
                                            }
                                        });
                                    }
                                }, 0xc8);
                            }
                        }
                    }
                });
            };
        }, _0x165384 = function(_0x4fb507) {
            var _0x54aeee = _0x56e566(_0x4fb507);
            _0x54aeee && (_0x121078[_kod_0x234f('0x1d9', '5vG2')]($, _0x121078[_kod_0x234f('0x1da', '%JOq')])['html'](_0x54aeee['name']), $(_kod_0x234f('0x1db', '#!f('))[_kod_0x234f('0x1dc', 'ymRv')](_0x54aeee['config'][_kod_0x234f('0x1dd', 'ldfK')] + '/' + _0x54aeee[_kod_0x234f('0x1de', 'CIam')][_kod_0x234f('0x1df', 'c&*T')]), $('#content-system-group\x20.group-id')[_kod_0x234f('0x1e0', 'nE0w')](_0x4fb507), System['sizeUse'](_0x121078[_kod_0x234f('0x1e1', 'QwxU')]($, _0x121078['ZRgYb'])), System[_kod_0x234f('0x1e2', 'Nnx)')][_kod_0x234f('0x1e3', 'VE0W')](_0x4fb507));
        }, _0x2f5684 = function() {
            var _0x2e6ce1 = {};
            _0x2e6ce1[_kod_0x234f('0x1e4', 'LP6r')] = function(_0x4da367, _0x45aa60) {
                return _0x121078.NzlRB(_0x4da367, _0x45aa60);
            };
            $(_0x121078[_kod_0x234f('0x1e5', 'ymRv')])[_kod_0x234f('0x1e6', '#!f(')](_kod_0x234f('0x1e7', '(3Wb'), _0x49a79e), $(_0x121078[_kod_0x234f('0x1e8', 'bsbw')])[_kod_0x234f('0x1e9', 'bsbw')](_kod_0x234f('0x1ea', 'ldfK'), function(_0x1c9856) {
                if (_kod_0x234f('0x1eb', 'l6GQ') === _0x121078['kNYgl']) {
                    var _0x5a8e6d = _0x2e6ce1[_kod_0x234f('0x1ec', 'Zsms')](_kod_0x234f('0x1ed', 'bsbw') + _0x257855 * _0x54aeee['level'], _kod_0x234f('0x1ee', 'GjhH'));
                    _0x3d6c2a[_kod_0x234f('0x1ef', 'LP6r')](_0x5a8e6d);
                } else {
                    var _0x54aeee = $(this)[_kod_0x234f('0x1f0', 'HzzJ')](_kod_0x234f('0x1f1', '8Jdb')),
                        _0x257855 = $(_kod_0x234f('0x1f2', 'uxxA'))['html'](),
                        _0x3d6c2a = _0x121078[_kod_0x234f('0x1f3', '[&Q2')](_0x56e566, _0x257855);
                    switch (_0x54aeee) {
                        case _kod_0x234f('0x1f4', '@@w]'):
                            _0x224704(_0x3d6c2a);
                            break;
                        case _kod_0x234f('0x1f5', '5Mnh'):
                            System[_kod_0x234f('0x1f6', '5Mnh')](_0x3d6c2a);
                            break;
                        case _kod_0x234f('0x1f7', 'yN0$'):
                            var _0x1f8d35 = _0x56e566();
                            _0x1f8d35['parentID'] = _0x257855, _0x121078[_kod_0x234f('0x1f8', 'bsbw')](_0x224704, _0x1f8d35);
                    }
                }
            });
        };
    _0x439a69[_kod_0x234f('0x1fd', 'C0Lg')] = {};
    _0x439a69[_kod_0x234f('0x1f9', 'ra%W')] = {};
    _0x439a69[_kod_0x234f('0x1f9', 'ra%W')][_kod_0x234f('0x1fa', 'nE0w')] = function(_0x4ef0fe, _0x5c4261, _0x4b2148) {
        _0x491c3d(_0x5c4261, _0x4b2148.id);
    };
    _0x439a69[_kod_0x234f('0x1f9', 'ra%W')][_kod_0x234f('0x1fb', 'hGfR')] = function(_0x2e1a29, _0x3d1d0a) {
        var _0x27e3cc = {
            KZrKE: _0x121078.Bscwi
        };
        if (_0x121078.otUVf(_kod_0x234f('0x1fc', '(3Wb'), _0x121078.koAQK)) {
            $(this).removeClass(_0x27e3cc.KZrKE);
        } else {
            _0x121078.tsfCa(_0x491c3d, _0x2e1a29, _0x3d1d0a.id);
        }
    };
    _0x439a69[_kod_0x234f('0x1fd', 'C0Lg')][_kod_0x234f('0x1fe', 'bsbw')] = !0x1;
    _0x439a69[_kod_0x234f('0x1fd', 'C0Lg')]['selectedMulti'] = !0x1;
    _0x439a69[_kod_0x234f('0x1fd', 'C0Lg')][_kod_0x234f('0x1ff', '(3Wb')] = !0x0;
    _0x439a69[_kod_0x234f('0x1fd', 'C0Lg')][_kod_0x234f('0x200', 'ymRv')] = function(_0x45d144, _0x54efa8) {
        var _0x257855 = 0xc,
            _0x3d6c2a = $('#' + _0x45d144 + '\x20#' + _0x54efa8.tId + _kod_0x234f('0x201', '[&Q2')),
            _0x1f8d35 = $(_0x121078.VgRAq(_0x121078.VgRAq('#' + _0x45d144 + '\x20#', _0x54efa8.tId), '_ico'));
        if (_0x1f8d35.before(_0x3d6c2a).before(_kod_0x234f('0x202', '(3Wb') + core.iconSmall('group-guest') + _kod_0x234f('0x203', 'LP6r')).remove(), _0x54efa8.level >= 0x1) {
            var _0xc85af5 = _0x121078.neCqh(_kod_0x234f('0x204', '7Hot') + _0x257855 * _0x54efa8.level, _kod_0x234f('0x205', 'hFVg'));
            _0x3d6c2a.before(_0xc85af5);
        }
        $(_0x121078.neCqh(_0x121078.neCqh(_0x121078.OaEKk('#', _0x45d144), '\x20#') + _0x54efa8.tId, '_a')).addClass('menuGroup').append(_kod_0x234f('0x206', '8Jdb')).attr(_0x121078.dYnMt, _0x54efa8.id);
    };
    return _0x2f5684(), {
        'init': _0x59c5ef,
        'getGroupInfo': _0x56e566,
        'groupDefaultData': _0x276654,
        'getListTree': function() {
            return _0x3d6c2a;
        },
        'getList': function() {
            return _0x1f8d35;
        }
    };
});;
define("app/src/setting/system/tpl/group.html", [], '<div class=\'content-box can-not-select\'>\n	<div class=\'title\'>\n		<div class="titleinfo">\n			{{if !groupInfo.name}}\n			<i class="font-icon icon-plus"></i>{{LNG.system_group_create}}\n			{{else}}\n			<i class="font-icon icon-pencil"></i>{{groupInfo.name}}\n			{{/if}}\n		</div>\n		{{if groupInfo.name}}\n		<div class="share-view-info">{{groupInfo.config.sizeUse}}/{{groupInfo.config.sizeMax}}</div>\n		{{/if}}\n	</div>\n	<div class=\'content-info\'>\n		<div class="input-line">\n			<span class="input-title">{{LNG.system_group_name}}:</span>\n			<input id="name" type="text" name="name" value="{{groupInfo.name}}" />\n			{{if groupInfo.name}}\n			<a href="javascript:void(0);" class="font-icon-label dialog-goto-path" title="{{LNG.open_the_path}}">\n				<i class="font-icon icon-folder-open"></i>\n			</a>\n			{{else}}\n			<i class="desc">{{LNG.name}}</i>\n			{{/if}}\n			<div style="clear:both"></div>\n		</div>\n		<div class="input-line size-max-set">\n			<span class="input-title">{{LNG.space_size}}:</span>\n			<input type="text" name="sizeMax" value="{{groupInfo.config.sizeMax}}" />\n			<i class="desc label label-default" style="color:#698ebf;background:#E9F3F9;"></i>\n			<div style="clear:both"></div>\n		</div>\n		<div class="input-line select-parent-content">\n			<span class="input-title">{{LNG.system_group_father}}:</span>\n			<input type="hidden" name="parentID" value="{{groupInfo.parentID}}" />\n			<button class="btn btn-default btn-sm" type="button" style="padding: 5px 10px;">\n				<i class="font-icon icon-group"></i><span class="group-title"></span>\n			</button>\n			<ul class="select-group hidden ztree" id="group-parent-select"></ul>\n			<div style="clear:both"></div>\n		</div>\n\n		<div class="input-line" style="margin-bottom: -5px;">\n			<span class="input-title">&nbsp;</span>\n			<a href="javascript:void(0);" class="btn btn-sm user-setting-more-btn" style="padding-left:0;">{{LNG.more}}</a>\n			<div style="clear:both"></div>\n		</div>\n		<div class="user-setting-more {{if !groupInfo.homePath}}hidden{{/if}}">\n			<div class="input-line select-path">\n				<span class="input-title">{{LNG.system_set_home_path}}:</span>\n				<input type="text" name="homePath" value="{{if groupInfo.homePath}}{{groupInfo.homePath}}{{/if}}" \n					placeholder="{{LNG.system_set_home_path_tips}}"/>\n				<a href="javascript:void(0);" class="btn btn-sm btn-default select-btn">\n					<i class="font-icon icon-folder-open"></i>\n				</a>\n				<a href="javascript:void(0);" class="btn btn-sm btn-link reset">\n					<i class="font-icon icon-remove"></i>\n				</a>\n				<div style="clear:both"></div>\n			</div>\n		</div>\n	</div>\n\n	<div class="share-action">		\n		{{if !groupInfo.name}}\n		<button type="button" class="btn btn-primary" id="system-save">{{LNG.button_add}}</button>\n		<button type="button" class="btn btn-primary" id="system-save-and-add">{{LNG.button_save_and_add}}</button>\n		{{else}}\n		<button type="button" class="btn btn-primary" id="system-save">{{LNG.button_save}}</button>\n		<a type="button" href="javascript:void(0);" class="remove-button">{{LNG.button_del}}</a>\n		{{/if}}\n	</div>\n</div>\n\n');;
define("app/src/setting/system/systemRole", [], function(a, b) {
    var c, d, e = function(a) {
            $.ajax({
                url: G.appHost + "systemRole/get",
                dataType: "json",
                async: !1,
                success: function(a) {
                    return a.code ? (c = a.data, f(), void 0 == d && (d = "1"), void g(d)) : void Tips.tips(a)
                }
            })
        }, f = function() {
            var a = "";
            $.each(c, function(b, c) {
                a += '<li class="role-cell" data-role-id="' + b + '"><span>' + c.name + '</span><i class="sub-menu icon-angle-right"></i></li>'
            }), a += '<li class="role-cell role-cell-add" data-role-id="0"><i class="icon-plus"></i></li>', $(".role-list-cell").html(a)
        }, g = function(a) {
            var b;
            d = a, 1 == d ? ($("#content-system-role .together").addClass("hidden"), $("#content-system-role .together.input").removeClass("hidden").children().addClass("hidden"), $("#content-system-role .form-row-submit .revert").addClass("hidden"), $("#content-system-role .warning").addClass("hidden"), $("#content-system-role .together.input").children().first().removeClass("hidden"), $('<em class="admin-role" style="padding: 15px;color:#999;">' + LNG.system_role_admin_tips + "</em>").appendTo(".group-editor .setting-content")) : ($("#content-system-role .together").removeClass("hidden"), $("#content-system-role .form-row-submit .revert").removeClass("hidden"), $("#content-system-role .warning").removeClass("hidden"), $("#content-system-role .together.input").children().removeClass("hidden"), $(".group-editor .admin-role").remove()), $(".system-role li.role-cell").removeClass("select"), $(".system-role [data-role-id=" + a + "]").addClass("select"), $("#content-system-role [data-action=role-delete]").show(), $("#content-system-role .group-title .label-info").show(), "0" == a ? (b = {
                name: "",
                extNotAllow: "htm|html|php|phtml|pwml|asp|aspx|ascx|jsp|pl|htaccess|shtml|shtm|phtm"
            }, $("#content-system-role [data-action=role-delete]").hide(), $("#content-system-role .group-title .label-info").hide(), $("#content-system-role .role_title").html(LNG.system_role_add)) : (b = c[a], $("#content-system-role .role_title").html(b.name), $("#content-system-role .role-id").html(a)), $(".group-editor #name").val(b.name).textFocus(), $(".group-editor #extNotAllow").val(b.extNotAllow), $(".group-editor .tag").removeClass("this"), $(".group-editor input").removeAttr("checked"), $(".group-editor .tag").each(function() {
                var a = $(this),
                    c = a.attr("data-role");
                c = c.split(";"), c = c[0], b[c] && (a.addClass("this"), a.find("input").attr("checked", !0))
            })
        }, h = function() {
            if (!G.isRoot) return void Tips.tips(LNG.group_role_error, "warning");
            var a = $(".group-editor #name").val(),
                b = $(".group-editor #extNotAllow").val(),
                c = {}, f = G.appHost + "systemRole/add";
            return void 0 == b && (b = ""), "" == trim(a) ? (Tips.tips(LNG.not_null, "error"), !1) : ($(".group-editor .together:visible .tag.this").each(function() {
                for (var a = $(this).attr("data-role").split(";"), b = 0; b < a.length; b++) a[b] && (c[a[b]] = 1)
            }), "1" == d && c != {} && (c = "postEmpty=1"), "0" != d && (f = G.appHost + "systemRole/edit&roleID=" + d), void $.ajax({
                url: f + "&name=" + urlEncode(a) + "&extNotAllow=" + b,
                data: c,
                type: "POST",
                dataType: "json",
                success: function(a) {
                    Tips.tips(a), a.code && (d = a.info, e(), System.systemMember.loadList(""))
                }
            }))
        }, i = function(a) {
            return G.isRoot ? void $.dialog({
                fixed: !0,
                icon: "question",
                padding: "30px 40px",
                drag: !0,
                title: LNG.warning,
                content: LNG.if_remove + l(a) + "?<br/>" + LNG.group_remove_tips,
                cancel: !0,
                ok: function() {
                    $.ajax({
                        url: G.appHost + "systemRole/del&roleID=" + a,
                        async: !1,
                        dataType: "json",
                        success: function(a) {
                            Tips.tips(a), a.code && (d = void 0, e(), System.systemMember.resetList(), System.systemMember.loadList(""))
                        }
                    })
                }
            }) : void Tips.tips(LNG.group_role_error, "warning")
        }, j = function() {
            $(".group-editor .tag").each(function() {
                $(this).hasClass("this") ? ($(this).removeClass("this"), $(this).find("input").removeAttr("checked")) : ($(this).addClass("this"), $(this).find("input").attr("checked", !0)), $(".group-editor .combox:eq(0) .tag:eq(0)").hasClass("this") || ($(".group-editor .combox:eq(0) .tag").removeClass("this"), $(".group-editor .combox:eq(0) .tag").find("input").removeAttr("checked")), $(".group-editor .combox:eq(1) .tag:eq(0)").hasClass("this") || ($(".group-editor .combox:eq(1) .tag").removeClass("this"), $(".group-editor .combox:eq(1) .tag").find("input").removeAttr("checked"))
            })
        }, k = function() {
            $(".group-editor .tag").live("click", function() {
                var a = $(this);
                if (select = !1, a.toggleClass("this"), a.hasClass("this") ? (select = !0, a.find("input").attr("checked", !0)) : (select = !1, a.find("input").removeAttr("checked")), a.parent().hasClass("combox")) {
                    var b = a.index();
                    1 == b && 0 == select && (a.parent().find(".tag").removeClass("this"), a.parent().find("input").removeAttr("checked")), 1 != b && 1 == select && (a.parent().find(".tag:eq(0)").addClass("this"), a.parent().find("input:eq(0)").attr("checked", !0))
                }
            }), $(".system-role li.role-cell").live("click", function() {
                g($(this).attr("data-role-id"))
            }), $("#content-system-role [data-action]").live("click", function(a) {
                var b = $(this).attr("data-action");
                $(this);
                switch (b) {
                    case "role-delete":
                        i(d);
                        break;
                    case "role-edit-save":
                        h();
                        break;
                    case "revert-all":
                        j()
                }
                stopPP(a)
            })
        }, l = function(a) {
            var b = c[a];
            return b ? b.name : '<span style="color:#f00">null</span>'
        }, m = function() {
            var a = {};
            return $.each(c, function(b, c) {
                a[b] = c.name
            }), a
        };
    return k(), {
        init: e,
        getList: m,
        setSelect: g
    }
});;
define("app/src/setting/system/systemGroupRole", ["./tpl/groupRoleSetting.html"], function(a, b) {
    var c, d, e = function(a) {
            f(), m(), "function" == typeof a && a()
        }, f = function() {
            $.get(G.appHost + "systemRole/get&group_role=1&action=get", function(a) {
                c = a.data, d = a.info
            })
        }, g = function() {
            System.systemMember.resetUserList()
        }, h = function() {
            var b = a("./tpl/groupRoleSetting.html"),
                e = template.compile(b),
                f = e({
                    LNG: LNG,
                    groupRoleData: c,
                    roleDefine: d,
                    style: ["blue-deep", "blue-nomal", "blue-light", "grey-deep", "grey-nomal", "grey-light", "yellow-deep", "yellow-nomal", "yellow-light", "green-deep", "green-nomal", "green-light"]
                });
            $.dialog({
                id: "system-role-group-box",
                resize: !0,
                width: 700,
                height: 590,
                title: LNG.system_group_role_title,
                padding: "0",
                opacity: .3,
                background: "#fff",
                lock: !0,
                fixed: !0,
                content: f
            });
            i()
        }, i = function(a) {
            var b = "";
            $.each(c, function(a, c) {
                b += '<a class="role-cell" data-role-id="' + a + '"><span>' + c.name + '</span><i class="sub-menu icon-angle-right"></i></a>'
            }), b += '<a class="role-cell role-cell-add" data-role-id="0"><i class="icon-plus"></i></a>', $(".group-role-setting .role-list-cell").html(b), void 0 == a && (a = "1"), j(a)
        }, j = function(a) {
            var b = c[a],
                d = $(".group-role-setting"),
                e = $(".system-group-role-save"),
                f = $(".system-group-role-remove");
            d.find(".role-cell").removeClass("select"), d.find("[data-role-id=" + a + "]").addClass("select"), e.html(LNG.button_save), f.removeClass("hidden"), b || (b = {
                name: "",
                style: "blue-deep",
                display: 1,
                actions: []
            }, e.html(LNG.button_add), f.addClass("hidden")), d.find("[name=name]").val(b.name), d.find("[name=display]").prop("checked", parseInt(b.display)), d.find(".role-label-display").html(b.name), d.find(".group-role-check .checkbox").prop("checked", !1), $.each(b.actions, function(a, b) {
                1 == b && d.find('[data-role="' + a + '"]').prop("checked", !0)
            }), l(b.style), k()
        }, k = function() {
            $(".item-main[data-role-group]").each(function() {
                var a = ($(this).attr("data-role-group"), $(this).next().find(".checkbox").length, $(this).next().find(".checkbox:checked").length);
                0 == a ? $(this).find(".checkbox").prop("checked", !1) : $(this).find(".checkbox").prop("checked", !0)
            })
        }, l = function(a) {
            var b = ".group-role-setting";
            $(b).find(".role-style").removeClass("select"), $(this).addClass("select");
            var c = $(b).find("[name=style]"),
                d = $(b + " .role-label-display");
            d.removeClass("label-" + c.val()).addClass("label-" + a), c.val(a)
        }, m = function() {
            var a = ".group-role-setting";
            $(a).find(".role-cell").die("click").live("click", function() {
                var a = $(this).attr("data-role-id");
                j(a)
            }), $(a).find(".item-main").die("click").live("click", function() {
                var a = $(this).attr("data-role-group"),
                    b = $(this).find("input").prop("checked");
                $("[data-role-group=" + a + "] .checkbox").prop("checked", b)
            }), $(a).find(".group-role-check .content .item").die("click").live("click", function() {
                k()
            }), $(a).find(".role-style").die("click").live("click", function() {
                var a = $(this).attr("data-style");
                l(a)
            }), $(a).find("[name=name]").die("input propertychange").live("input propertychange", function() {
                $(a).find(".role-label-display").html($(this).val())
            }), $(".system-group-role-save").die("click").live("click", function() {
                var b = $(a).find(".role-cell.select").attr("data-role-id"),
                    d = "set";
                "0" == b && (d = "add");
                var e = {};
                $(a).find(".group-role-check .content .checkbox").each(function() {
                    var a = $(this).attr("data-role"),
                        b = Number($(this).prop("checked"));
                    e[a] = b
                });
                var f = {
                    name: $(a).find("[name=name]").val(),
                    style: $(a).find("[name=style]").val(),
                    display: Number($(a).find("[name=display]").prop("checked")),
                    actions: e
                };
                return "" == trim(f.name) ? (Tips.tips(LNG.not_null, "error"), !1) : void $.ajax({
                    url: G.appHost + "systemRole/roleGroupAction&action=" + d + "&roleID=" + b,
                    beforeSend: function() {
                        Tips.loading()
                    },
                    data: "role_arr=" + jsonEncode(f),
                    error: core.ajaxError,
                    success: function(a) {
                        if (Tips.close(a), a.code) {
                            c = a.info, g();
                            var e = b;
                            "add" == d && (e = a.data[0]), i(e)
                        }
                    }
                })
            }), $(".system-group-role-remove").die("click").live("click", function() {
                var b = $(a).find(".role-cell.select").attr("data-role-id");
                return "1" == b || "2" == b ? void Tips.tips(LNG.default_user_can_not_do, "warning") : void n(b)
            })
        }, n = function(a) {
            $.dialog({
                id: "dialog-user-confirm",
                fixed: !0,
                icon: "question",
                padding: 30,
                width: 250,
                lock: !0,
                background: "#000",
                opacity: .2,
                content: LNG.system_group_role_remove,
                ok: function() {
                    $.ajax({
                        url: G.appHost + "systemRole/roleGroupAction&action=del&roleID=" + a,
                        beforeSend: function() {
                            Tips.loading()
                        },
                        error: core.ajaxError,
                        success: function(a) {
                            Tips.close(a), a.code && (c = a.info, i(), g())
                        }
                    })
                },
                cancel: !0
            })
        };
    return {
        init: e,
        showBox: h,
        getList: function() {
            return c
        }
    }
});;
define("app/src/setting/system/tpl/groupRoleSetting.html", [], '<!-- 群组成员权限管理 -->\n<div class=\'content-box group-role-setting\'>\n	<div class=\'content-info\'>\n		<div class="left-content role-list-cell"></div>\n		<div class="right-content">\n			<div class="panel-body system-group-role-content">\n				<div class="form-row">\n					<div class=\'setting-title\'>{{LNG.name}}:</div>\n					<div class="setting-content">\n						<input type="text" name="name" value="" /><i class="desc"></i>\n					</div>\n				</div>\n				<div class="form-row">\n					<div class=\'setting-title\'>{{LNG.system_group_role_style}}:</div>\n					<div class="setting-content">\n						<input type="button" value="blue-deep" name="style" class="btn btn-default btn-sm dropdown-toggle" data-toggle="dropdown"/>\n					    <ul class="dropdown-menu pull-right animated menuShow">\n					    {{each style value key}}\n							<li class="role-style" data-style="{{value}}">\n								<a href="javascript:void(0);" draggable="false"><span class="label label-{{value}}">label</span> {{value}}</a>\n							</li>\n						{{/each}}\n						</ul>\n						<span class="role-label-display label label-blue-deep"></span>\n					</div>\n					\n				</div>\n				<div class="form-row">\n					<div class=\'setting-title\'>{{LNG.system_group_role_display}}:</div>\n					<div class="setting-content">\n						<label>\n							<input type="checkbox" class="kui-checkbox-ios size-big" name="display" checked="checked" /><em></em>\n							<i class="desc">{{LNG.system_group_role_display_desc}}</i>\n						</label>\n					</div>\n				</div>\n				\n				<div class="form-row line"></div>\n				<div class="form-row">\n					<div class=\'setting-title\'>{{LNG.permission}}:</div>\n					<div class="setting-content group-role-check">\n					{{each roleDefine value key}}\n						<div class="item item-main" data-role-group=\'{{key}}\'>\n							<label>\n								<input type="checkbox" class="checkbox kui-checkbox size-smallx blue">\n								<span>{{LNG[\'role_type_name_\'+key]}}</span>\n							</label>\n						</div>\n\n						<div class="content" data-role-group=\'{{key}}\'>\n						{{each value valueAction keyItem}}\n							<div class="item">\n								<label>\n									<input type="checkbox" data-role=\'{{key}}:{{keyItem}}\' class="checkbox kui-checkbox size-smallx blue">\n									<span>{{LNG[\'role_type_name_\'+key+\':\'+keyItem]}}</span>\n								</label>\n							</div>\n						{{/each}}\n						</div>\n					{{/each}}\n					</div>\n				</div>\n\n				<!-- 提交 -->\n				<div class="form-row form-row-submit">\n					<div class="setting-content">\n						<button class="btn btn-default system-group-role-save">{{LNG.button_save}}</button>\n						<button class="btn btn-remove system-group-role-remove">{{LNG.button_del}}</button>\n					</div>\n				</div>\n			</div>\n		</div>\n\n	</div>\n</div>\n');