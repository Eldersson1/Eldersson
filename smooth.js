import {f as N, o as b, c as rt, w as M, k as v, r as j, q as dt, l as A, D as x, i as V, s as $, u as W, m as Z, E as lt, p as pt, j as ft, V as D, F as P, C as z, A as E, B as Y, G as vt, I as mt, v as _t} from "./entry.fbe5358e.js";
import {_ as B} from "./MyPrismicLink.d434b070.js";
import {c as gt} from "./_commonjsHelpers.b1246846.js";
const yt = {
    components: {
        MyPrismicLink: B
    },
    props: {
        field: {
            type: Object,
            default: null
        }
    }
}
  , wt = v("svg", {
    class: "t-btn--primary-hover",
    width: "18",
    height: "18",
    viewBox: "0 0 18 18",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
}, [v("path", {
    d: "M1 1h16v16M1 17 17 1",
    "stroke-miterlimit": "10",
    "stroke-linecap": "round"
})], -1)
  , Ct = {
    class: "t-btn--primary-label"
}
  , bt = v("svg", {
    class: "t-btn--primary-icon",
    width: "18",
    height: "18",
    viewBox: "0 0 18 18",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
}, [v("path", {
    d: "M1 1h16v16M1 17 17 1",
    "stroke-miterlimit": "10",
    "stroke-linecap": "round"
})], -1);
function Ht(i, h, l, r, e, a) {
    return b(),
    rt(dt(l.field !== null ? "MyPrismicLink" : "button"), {
        field: l.field,
        class: "t-btn--primary"
    }, {
        default: M(()=>[wt, v("span", Ct, [j(i.$slots, "default")]), bt]),
        _: 3
    }, 8, ["field"])
}
const Vt = N(yt, [["render", Ht]]);
function $t(i) {
    let h = 0;
    do
        h += i.offsetTop,
        i = i.offsetParent;
    while (i);
    return h
}
const Mt = {
    setup() {
        return {
            savedScroll: 0,
            scroll: A("scroll")
        }
    },
    props: {
        scrolling: {
            type: Boolean,
            default: !0
        },
        theme: {
            type: String,
            default: "light"
        }
    },
    computed: {
        navActive() {
            return x.isNav
        }
    },
    watch: {
        navActive() {
            x.isNav ? (clearTimeout(this.timerNav),
            this.timerNav = setTimeout(()=>{
                this.savedScroll = this.scroll.smoothValue,
                this.navOpened = !0
            }
            , 600)) : this.navOpened = !1
        }
    },
    mounted() {
        this.navOpened = !1,
        window.addEventListener("scroll", this.onScroll),
        this.$bus.$on("resize", this.onResize),
        this.$bus.$on("update", this.onUpdate),
        this.$nextTick(()=>{
            this.onResize()
        }
        )
    },
    beforeUnmount() {
        window.removeEventListener("scroll", this.onScroll),
        this.$bus.$off("resize", this.onResize),
        this.$bus.$off("update", this.onUpdate)
    },
    methods: {
        onResize() {
            this.height = this.$el.offsetHeight
        },
        onUpdate() {
            this.scroll.smoothValue < 0 || (this.scroll.smoothValue > this.oldScrollValue ? (this.direction !== 1 && (this.direction = 1,
            this.currentScroll = this.scroll.smoothValue,
            this.currentY = this.height - this.y),
            this.scroll.smoothValue <= this.currentScroll + this.height ? this.y = -(this.currentY - (this.currentScroll + this.height - this.scroll.smoothValue)) : this.y = -this.height) : this.scroll.smoothValue !== this.oldScrollValue && (this.direction !== -1 && (this.direction = -1,
            this.currentScroll = this.scroll.smoothValue,
            this.currentY = this.height + this.y),
            this.scroll.smoothValue >= this.currentScroll - this.height && this.y < 0 ? this.y = this.currentScroll - this.height - this.scroll.smoothValue + this.currentY : this.y = 0),
            this.$refs.inner.style.transform = `translateY(${this.y}px) translateZ(0)`,
            this.oldScrollValue = this.scroll.smoothValue)
        },
        onScroll() {
            this.navOpened && Math.abs(this.savedScroll - this.scroll.smoothValue) > 10 && (x.isNav = !1)
        }
    }
}
  , F = i=>(pt("data-v-b9d73b7e"),
i = i(),
ft(),
i)
  , St = {
    ref: "inner",
    class: "Header-inner"
}
  , xt = F(()=>v("svg", {
    class: "Header-logo",
    width: "50",
    height: "50",
    viewBox: "0 0 50 50",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
}, [v("path", {
    d: "M25 0C11.193 0 0 11.193 0 25s11.193 25 25 25 25-11.193 25-25S38.807 0 25 0Zm3.64 37.298a.89.89 0 0 1-.89.89h-5.5a.89.89 0 0 1-.89-.89V19.094h-8.103a.89.89 0 0 1-.89-.89v-5.502a.89.89 0 0 1 .89-.89h4.461a3.63 3.63 0 0 1 2.575 1.067l7.281 7.281a3.63 3.63 0 0 1 1.067 2.575v14.563Zm5.422-18.204a3.641 3.641 0 1 1 0-7.282 3.641 3.641 0 0 1 0 7.282Z"
})], -1))
  , Tt = F(()=>v("svg", {
    class: "Header-logo-text-svg",
    width: "228",
    height: "15",
    viewBox: "0 0 228 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
}, [v("path", {
    d: "M6.88908 14.5982H4.90124V2.07176H0V0.24698H11.7903V2.07176H6.88908V14.5982ZM21.0149 14.5982H19.0055V8.34458L13.5528 0.24698H15.8907L20.0318 6.43828L24.1321 0.24698H26.4893L21.0149 8.34458V14.5982ZM29.2372 14.5982V0.24698H36.2294C37.1861 0.24698 38.0134 0.43881 38.7112 0.820071C39.409 1.20373 39.9413 1.72167 40.3106 2.37869C40.6798 3.0357 40.8645 3.76705 40.8645 4.57274C40.8645 5.5151 40.6583 6.33037 40.2482 7.01137C39.8382 7.69476 39.2843 8.2151 38.5865 8.56998C37.8887 8.92487 37.1022 9.10231 36.2294 9.10231H31.2466V14.5982H29.2372ZM36.2294 7.29911C37.0351 7.29911 37.6681 7.04014 38.1261 6.5198C38.5841 5.99947 38.8119 5.35204 38.8119 4.57274C38.8119 3.79343 38.5697 3.19876 38.083 2.74796C37.5962 2.29716 36.9799 2.07176 36.227 2.07176H31.2442V7.29911H36.227H36.2294ZM54.1894 14.5982H44.1016V0.24698H54.0048V2.07176H46.0894V6.27522H53.2255V8.05924H46.0894V12.7758H54.1894V14.6006V14.5982ZM65.6393 13.922C64.5794 13.3058 63.7569 12.4353 63.1694 11.3083C62.582 10.1813 62.287 8.87211 62.287 7.38064C62.287 5.88917 62.57 4.67105 63.1383 3.55604C63.7042 2.44103 64.5194 1.5706 65.5769 0.942362C66.6368 0.314121 67.8765 0 69.2984 0C70.7203 0 71.9025 0.304529 72.9695 0.91119C74.0366 1.52025 74.8615 2.38108 75.4513 3.49369C76.0388 4.6087 76.3337 5.90355 76.3337 7.37824C76.3337 8.85293 76.0508 10.1166 75.4825 11.2436C74.9142 12.3706 74.1013 13.253 73.0415 13.8885C71.9816 14.5239 70.7347 14.8428 69.3008 14.8428C67.8669 14.8428 66.6991 14.5359 65.6416 13.9196L65.6393 13.922ZM71.9552 12.3538C72.713 11.8958 73.2956 11.2388 73.6985 10.3852C74.1013 9.53153 74.3027 8.52922 74.3027 7.38064C74.3027 6.23206 74.0965 5.28011 73.6865 4.43846C73.2765 3.5992 72.6962 2.94938 71.9432 2.49139C71.1903 2.03339 70.3103 1.8056 69.2984 1.8056C68.2865 1.8056 67.4089 2.03579 66.6631 2.49139C65.9174 2.94938 65.3443 3.5992 64.9415 4.43846C64.5386 5.28011 64.3372 6.26084 64.3372 7.38064C64.3372 8.50044 64.5386 9.52913 64.9415 10.3852C65.3443 11.2412 65.9198 11.8958 66.6631 12.3538C67.4089 12.8118 68.2865 13.042 69.2984 13.042C70.3103 13.042 71.1951 12.8142 71.9528 12.3538H71.9552ZM81.8081 14.5982H79.7987V0.24698H82.0335L89.7834 11.728V0.24698H91.7712V14.5982H89.5364L81.8057 3.11723V14.5982H81.8081ZM105.981 14.5982H95.8932V0.24698H105.796V2.07176H97.881V6.27522H105.017V8.05924H97.881V12.7758H105.981V14.6006V14.5982ZM120.742 14.5982H118.611L113.033 0.24698H115.186L119.678 11.8527L124.025 0.24698H126.157L120.745 14.5982H120.742ZM139.052 14.5982H128.965V0.24698H138.868V2.07176H130.952V6.27522H138.088V8.05924H130.952V12.7758H139.052V14.6006V14.5982ZM144.445 14.5982H142.436V0.24698H144.671L152.421 11.728V0.24698H154.408V14.5982H152.174L144.443 3.11723V14.5982H144.445ZM164.455 14.5982H162.468V2.07176H157.566V0.24698H169.357V2.07176H164.455V14.5982ZM175.088 14.1786C174.205 13.735 173.531 13.1307 173.069 12.3634C172.603 11.5985 172.371 10.7448 172.371 9.80009V0.24698H174.359V9.75933C174.359 10.7712 174.718 11.5625 175.435 12.138C176.152 12.7135 177.066 12.9988 178.174 12.9988C179.281 12.9988 180.193 12.7111 180.912 12.138C181.629 11.5649 181.989 10.7712 181.989 9.75933V0.24698H183.998V9.80009C183.998 10.7305 183.768 11.5769 183.312 12.3418C182.854 13.1068 182.188 13.7158 181.312 14.1666C180.437 14.6174 179.406 14.8428 178.217 14.8428C177.027 14.8428 175.972 14.6198 175.09 14.1762L175.088 14.1786ZM187.974 14.5982V0.24698H194.7C195.601 0.24698 196.402 0.414831 197.098 0.748135C197.795 1.08384 198.335 1.55382 198.716 2.16288C199.097 2.77194 199.289 3.46492 199.289 4.24423C199.289 5.10506 199.016 5.86758 198.469 6.5294C197.922 7.19361 197.198 7.66119 196.297 7.93455C197.143 8.14076 197.711 8.63952 197.999 9.43082L199.946 14.5982H197.815L196.031 9.78091C195.798 9.16465 195.34 8.85773 194.657 8.85773H189.981V14.5982H187.971H187.974ZM194.7 7.0929C195.505 7.0929 196.138 6.84352 196.596 6.34476C197.054 5.846 197.285 5.22735 197.285 4.48881C197.285 3.75027 197.045 3.12922 196.568 2.7048C196.088 2.28037 195.467 2.06936 194.702 2.06936H189.986V7.0929H194.702H194.7ZM213.091 14.5982H203.004V0.24698H212.907V2.07176H204.991V6.27522H212.127V8.05924H204.991V12.7758H213.091V14.6006V14.5982ZM218.935 14.2601C217.993 13.8717 217.247 13.3274 216.7 12.6296C216.153 11.9318 215.851 11.1261 215.799 10.2101H217.89C218 11.0853 218.434 11.7783 219.192 12.2915C219.949 12.8046 220.937 13.0612 222.155 13.0612C223.182 13.0612 223.963 12.867 224.503 12.4761C225.042 12.0877 225.313 11.5433 225.313 10.8456C225.313 10.2293 225.098 9.75933 224.668 9.43082C224.237 9.10231 223.618 8.81457 222.812 8.56998L220.371 7.81226C220.275 7.78588 219.832 7.6492 219.038 7.40222C218.244 7.15524 217.583 6.72602 217.05 6.10977C216.518 5.49352 216.252 4.76456 216.252 3.91572C216.252 3.13641 216.453 2.45302 216.856 1.86554C217.259 1.27806 217.837 0.820071 218.587 0.491563C219.338 0.163055 220.213 0 221.213 0C222.894 0 224.234 0.417229 225.232 1.25169C226.229 2.08615 226.776 3.2611 226.872 4.77895H224.822C224.752 3.83659 224.397 3.10044 223.755 2.57531C223.112 2.05018 222.237 1.78641 221.131 1.78641C220.256 1.78641 219.556 1.96865 219.031 2.33073C218.503 2.69281 218.242 3.18917 218.242 3.81741C218.242 4.26821 218.371 4.63028 218.63 4.90364C218.889 5.177 219.177 5.37602 219.491 5.49831C219.805 5.6206 220.319 5.79325 221.028 6.01146L223.285 6.70924C224.119 6.96821 224.812 7.23677 225.366 7.50773C225.92 7.78108 226.388 8.18153 226.771 8.70666C227.155 9.23419 227.344 9.91279 227.344 10.7472C227.344 12.0181 226.884 13.0204 225.961 13.7518C225.038 14.4831 223.769 14.85 222.158 14.85C220.954 14.85 219.882 14.6558 218.94 14.2649L218.935 14.2601Z"
})], -1))
  , kt = F(()=>v("span", {
    class: "Header-burger-line"
}, null, -1))
  , Lt = F(()=>v("span", {
    class: "Header-burger-line"
}, null, -1))
  , Yt = [kt, Lt];
function Nt(i, h, l, r, e, a) {
    const m = lt;
    return b(),
    V("header", {
        class: Z([["is-" + l.theme, W(x).isNav ? "is-open" : ""], "Header container"]),
        "data-fixed": ""
    }, [v("div", St, [$(m, {
        to: "/",
        class: "t-link"
    }, {
        default: M(()=>[xt]),
        _: 1
    }), $(m, {
        to: "/",
        class: "Header-logo-text t-link"
    }, {
        default: M(()=>[Tt]),
        _: 1
    }), v("button", {
        onClick: h[0] || (h[0] = c=>W(x).isNav = !W(x).isNav),
        class: "Header-burger t-btn",
        type: "button"
    }, Yt)], 512)], 2)
}
const Ot = N(Mt, [["render", Nt], ["__scopeId", "data-v-b9d73b7e"]]);
const Pt = {
    setup() {
        return {
            width: 0,
            height: 0,
            layout: A("layout")
        }
    },
    computed: {
        active() {
            return x.isNav
        }
    },
    watch: {
        active: "onActiveChange"
    },
    mounted() {
        this.$bus.$on("resize", this.onResize),
        this.$nextTick(()=>{
            this.onResize()
        }
        )
    },
    unmounted() {
        this.$bus.$off("resize", this.onResize)
    },
    methods: {
        onResize() {
            this.width = this.$refs.inner.offsetWidth,
            this.height = this.$refs.inner.offsetHeight,
            this.onActiveChange()
        },
        onActiveChange() {
            D.sm || (this.active ? this.$refs.inner.style.clipPath = "inset(0 round 10px)" : this.$refs.inner.style.clipPath = `inset(0% 0% ${this.height - 50}px ${this.width - 50}px round 50px)`)
        }
    }
}
  , zt = {
    ref: "inner",
    class: "Navigation-inner"
}
  , Et = {
    class: "Navigation-links t-list"
}
  , Rt = {
    class: "Navigation-sublinks t-list"
};
function Wt(i, h, l, r, e, a) {
    const m = B;
    return b(),
    V("nav", {
        class: Z([{
            "is-active": a.active
        }, "Navigation"])
    }, [v("div", {
        onClick: h[0] || (h[0] = c=>W(x).isNav = !1),
        class: "Navigation-bg"
    }), v("div", zt, [v("ul", Et, [(b(!0),
    V(P, null, z(r.layout.data.main_navigation, (c,g)=>(b(),
    V("li", {
        key: g
    }, [$(m, {
        field: c.link,
        class: "t-link--primary"
    }, {
        default: M(()=>[E(Y(c.label), 1)]),
        _: 2
    }, 1032, ["field"])]))), 128))]), v("ul", Rt, [(b(!0),
    V(P, null, z(r.layout.data.social_links, (c,g)=>(b(),
    V("li", {
        key: g
    }, [$(m, {
        field: c.link,
        class: "t-link--secondary"
    }, {
        default: M(()=>[E(Y(c.label), 1)]),
        _: 2
    }, 1032, ["field"])]))), 128))])], 512)], 2)
}
const Dt = N(Pt, [["render", Wt]]);
const jt = {
    setup() {
        return {
            height: 0,
            offsetY: 0,
            translateY: 0,
            scroll: A("scroll")
        }
    },
    props: {
        active: {
            type: Boolean,
            default: !0
        },
        ratio: {
            type: Number,
            default: .1
        },
        screenPos: {
            type: Number,
            default: .5
        },
        debug: {
            type: Boolean,
            default: !1
        }
    },
    watch: {
        "scroll.active": "onResize"
    },
    mounted() {
        this.$bus.$on("resize", this.onResize),
        this.$bus.$on("update", this.onUpdate),
        this.$nextTick(()=>{
            this.onResize()
        }
        )
    },
    unmounted() {
        this.$bus.$off("resize", this.onResize),
        this.$bus.$off("update", this.onUpdate)
    },
    methods: {
        onResize() {
            if (!this.scroll.active || !this.active) {
                this.$el.style.transform = "none";
                return
            }
            this.height = this.$el.offsetHeight,
            this.offsetY = $t(this.$el),
            this.calcY(),
            this.debug && console.log(D.svh, this.scroll.smoothValue, this.height, this.offsetY, this.translateY),
            this.$el.style.transform = ` matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ${-this.translateY}, 0, 1)`
        },
        calcY() {
            const i = this.scroll.smoothValue + D.svh * this.screenPos
              , h = this.offsetY + this.height * this.screenPos - i;
            this.translateY = h * -1 * this.ratio,
            this.translateY = Math.round(this.translateY * 100) / 100
        },
        onUpdate() {
            !this.scroll.active || !this.active || (this.calcY(),
            this.offsetY - this.translateY - this.scroll.smoothValue - D.svh < 0 && this.offsetY - this.translateY - this.scroll.smoothValue + this.height > 0 && (this.$el.style.transform = `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ${-this.translateY}, 0, 1)`))
        }
    }
}
  , At = {
    class: "ParallaxObject"
};
function Zt(i, h, l, r, e, a) {
    return b(),
    V("div", At, [j(i.$slots, "default")])
}
const Ft = N(jt, [["render", Zt]]);
const Xt = {
    setup() {
        return {
            layout: A("layout")
        }
    },
    props: {
        theme: {
            type: String,
            default: "light"
        }
    }
}
  , Bt = {
    class: "Footer-hat grid-12 grid-sm-6"
}
  , Kt = {
    class: "col-4 col-sm-3"
}
  , Ut = v("svg", {
    class: "Footer-hat-logo",
    width: "50",
    height: "50",
    viewBox: "0 0 50 50",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
}, [v("path", {
    d: "M25 0C11.1926 0 0 11.1926 0 25C0 38.8074 11.1926 50 25 50C38.8074 50 50 38.8074 50 25C50 11.1926 38.8074 0 25 0ZM28.6408 37.2977C28.6408 37.7896 28.2427 38.1877 27.7508 38.1877H22.2492C21.7573 38.1877 21.3592 37.7896 21.3592 37.2977V19.0939H13.2573C12.7654 19.0939 12.3673 18.6958 12.3673 18.2039V12.7023C12.3673 12.2104 12.7654 11.8123 13.2573 11.8123H17.7184C18.7241 11.8123 19.6343 12.2201 20.2929 12.8786L27.5744 20.1602C28.233 20.8188 28.6408 21.729 28.6408 22.7346V37.2977ZM34.0615 19.0939C32.051 19.0939 30.4207 17.4636 30.4207 15.4531C30.4207 13.4426 32.051 11.8123 34.0615 11.8123C36.072 11.8123 37.7023 13.4426 37.7023 15.4531C37.7023 17.4636 36.072 19.0939 34.0615 19.0939Z"
})], -1)
  , It = {
    class: "col-4 start-9 col-md-6 start-md-7 grid-2 grid-sm-2 col-sm-3"
}
  , qt = {
    class: "Footer-hat-nav t-list col-sm-2"
}
  , Gt = {
    class: "Footer-hat-socials t-list col-sm-2"
}
  , Jt = {
    class: "Footer-inner"
}
  , Qt = {
    class: "Footer-content grid-12"
}
  , te = {
    class: "col-10 col-sm-12"
}
  , ee = {
    class: "Footer-content-text t-h4"
}
  , ie = {
    class: "Footer-content-links t-list"
}
  , oe = {
    class: "Footer-credits t-text"
};
function se(i, h, l, r, e, a) {
    const m = lt
      , c = B
      , g = Vt
      , t = Ft;
    return b(),
    V("footer", {
        class: Z(["is-" + l.theme, "Footer container"]),
        "data-scroll-section": ""
    }, [v("div", Bt, [v("div", Kt, [$(m, {
        to: "/",
        class: "t-link"
    }, {
        default: M(()=>[Ut]),
        _: 1
    })]), v("div", It, [v("ul", qt, [(b(!0),
    V(P, null, z(r.layout.data.main_navigation, (o,u)=>(b(),
    V("li", {
        key: u
    }, [$(c, {
        field: o.link,
        class: "t-link--primary"
    }, {
        default: M(()=>[E(Y(o.label), 1)]),
        _: 2
    }, 1032, ["field"])]))), 128))]), v("ul", Gt, [(b(!0),
    V(P, null, z(r.layout.data.social_links, (o,u)=>(b(),
    V("li", {
        key: u
    }, [$(c, {
        field: o.link,
        class: "t-link--secondary"
    }, {
        default: M(()=>[E(Y(o.label), 1)]),
        _: 2
    }, 1032, ["field"])]))), 128))])])]), v("div", Jt, [$(t, {
        ratio: -.3,
        screenPos: 1
    }, {
        default: M(()=>[v("div", Qt, [v("div", te, [v("p", ee, Y(i.$prismic.asText(r.layout.data.footer_title)), 1), v("ul", ie, [(b(!0),
        V(P, null, z(r.layout.data.footer_links, (o,u)=>(b(),
        V("li", {
            key: u
        }, [$(g, {
            field: o.link
        }, {
            default: M(()=>[E(Y(o.label), 1)]),
            _: 2
        }, 1032, ["field"])]))), 128))])])]), v("p", oe, Y(r.layout.data.credits), 1)]),
        _: 1
    }, 8, ["ratio"])])], 2)
}
const ne = N(Xt, [["render", se]]);
var at = {
    exports: {}
};
(function(i, h) {
    (function(l, r) {
        i.exports = r()
    }
    )(gt, function() {
        var l = 0;
        function r(_) {
            return "__private_" + l++ + "_" + _
        }
        function e(_, d) {
            if (!Object.prototype.hasOwnProperty.call(_, d))
                throw new TypeError("attempted to use private field on non-instance");
            return _
        }
        function a() {}
        a.prototype = {
            on: function(_, d, f) {
                var s = this.e || (this.e = {});
                return (s[_] || (s[_] = [])).push({
                    fn: d,
                    ctx: f
                }),
                this
            },
            once: function(_, d, f) {
                var s = this;
                function n() {
                    s.off(_, n),
                    d.apply(f, arguments)
                }
                return n._ = d,
                this.on(_, n, f)
            },
            emit: function(_) {
                for (var d = [].slice.call(arguments, 1), f = ((this.e || (this.e = {}))[_] || []).slice(), s = 0, n = f.length; s < n; s++)
                    f[s].fn.apply(f[s].ctx, d);
                return this
            },
            off: function(_, d) {
                var f = this.e || (this.e = {})
                  , s = f[_]
                  , n = [];
                if (s && d)
                    for (var p = 0, H = s.length; p < H; p++)
                        s[p].fn !== d && s[p].fn._ !== d && n.push(s[p]);
                return n.length ? f[_] = n : delete f[_],
                this
            }
        };
        var m = a;
        m.TinyEmitter = a;
        var c, g = "virtualscroll", t = r("options"), o = r("el"), u = r("emitter"), w = r("event"), y = r("touchStart"), C = r("bodyTouchAction");
        return function() {
            function _(f) {
                var s = this;
                Object.defineProperty(this, t, {
                    writable: !0,
                    value: void 0
                }),
                Object.defineProperty(this, o, {
                    writable: !0,
                    value: void 0
                }),
                Object.defineProperty(this, u, {
                    writable: !0,
                    value: void 0
                }),
                Object.defineProperty(this, w, {
                    writable: !0,
                    value: void 0
                }),
                Object.defineProperty(this, y, {
                    writable: !0,
                    value: void 0
                }),
                Object.defineProperty(this, C, {
                    writable: !0,
                    value: void 0
                }),
                this._onWheel = function(n) {
                    var p = e(s, t)[t]
                      , H = e(s, w)[w];
                    H.deltaX = n.wheelDeltaX || -1 * n.deltaX,
                    H.deltaY = n.wheelDeltaY || -1 * n.deltaY,
                    c.isFirefox && n.deltaMode === 1 && (H.deltaX *= p.firefoxMultiplier,
                    H.deltaY *= p.firefoxMultiplier),
                    H.deltaX *= p.mouseMultiplier,
                    H.deltaY *= p.mouseMultiplier,
                    s._notify(n)
                }
                ,
                this._onMouseWheel = function(n) {
                    var p = e(s, w)[w];
                    p.deltaX = n.wheelDeltaX ? n.wheelDeltaX : 0,
                    p.deltaY = n.wheelDeltaY ? n.wheelDeltaY : n.wheelDelta,
                    s._notify(n)
                }
                ,
                this._onTouchStart = function(n) {
                    var p = n.targetTouches ? n.targetTouches[0] : n;
                    e(s, y)[y].x = p.pageX,
                    e(s, y)[y].y = p.pageY
                }
                ,
                this._onTouchMove = function(n) {
                    var p = e(s, t)[t];
                    p.preventTouch && !n.target.classList.contains(p.unpreventTouchClass) && n.preventDefault();
                    var H = e(s, w)[w]
                      , L = n.targetTouches ? n.targetTouches[0] : n;
                    H.deltaX = (L.pageX - e(s, y)[y].x) * p.touchMultiplier,
                    H.deltaY = (L.pageY - e(s, y)[y].y) * p.touchMultiplier,
                    e(s, y)[y].x = L.pageX,
                    e(s, y)[y].y = L.pageY,
                    s._notify(n)
                }
                ,
                this._onKeyDown = function(n) {
                    var p = e(s, w)[w];
                    p.deltaX = p.deltaY = 0;
                    var H = window.innerHeight - 40;
                    switch (n.keyCode) {
                    case 37:
                    case 38:
                        p.deltaY = e(s, t)[t].keyStep;
                        break;
                    case 39:
                    case 40:
                        p.deltaY = -e(s, t)[t].keyStep;
                        break;
                    case 32:
                        p.deltaY = H * (n.shiftKey ? 1 : -1);
                        break;
                    default:
                        return
                    }
                    s._notify(n)
                }
                ,
                e(this, o)[o] = window,
                f && f.el && (e(this, o)[o] = f.el,
                delete f.el),
                c || (c = {
                    hasWheelEvent: "onwheel"in document,
                    hasMouseWheelEvent: "onmousewheel"in document,
                    hasTouch: "ontouchstart"in document,
                    hasTouchWin: navigator.msMaxTouchPoints && navigator.msMaxTouchPoints > 1,
                    hasPointer: !!window.navigator.msPointerEnabled,
                    hasKeyDown: "onkeydown"in document,
                    isFirefox: navigator.userAgent.indexOf("Firefox") > -1
                }),
                e(this, t)[t] = Object.assign({
                    mouseMultiplier: 1,
                    touchMultiplier: 2,
                    firefoxMultiplier: 15,
                    keyStep: 120,
                    preventTouch: !1,
                    unpreventTouchClass: "vs-touchmove-allowed",
                    useKeyboard: !0,
                    useTouch: !0
                }, f),
                e(this, u)[u] = new m,
                e(this, w)[w] = {
                    y: 0,
                    x: 0,
                    deltaX: 0,
                    deltaY: 0
                },
                e(this, y)[y] = {
                    x: null,
                    y: null
                },
                e(this, C)[C] = null,
                e(this, t)[t].passive !== void 0 && (this.listenerOptions = {
                    passive: e(this, t)[t].passive
                })
            }
            var d = _.prototype;
            return d._notify = function(f) {
                var s = e(this, w)[w];
                s.x += s.deltaX,
                s.y += s.deltaY,
                e(this, u)[u].emit(g, {
                    x: s.x,
                    y: s.y,
                    deltaX: s.deltaX,
                    deltaY: s.deltaY,
                    originalEvent: f
                })
            }
            ,
            d._bind = function() {
                c.hasWheelEvent && e(this, o)[o].addEventListener("wheel", this._onWheel, this.listenerOptions),
                c.hasMouseWheelEvent && e(this, o)[o].addEventListener("mousewheel", this._onMouseWheel, this.listenerOptions),
                c.hasTouch && e(this, t)[t].useTouch && (e(this, o)[o].addEventListener("touchstart", this._onTouchStart, this.listenerOptions),
                e(this, o)[o].addEventListener("touchmove", this._onTouchMove, this.listenerOptions)),
                c.hasPointer && c.hasTouchWin && (e(this, C)[C] = document.body.style.msTouchAction,
                document.body.style.msTouchAction = "none",
                e(this, o)[o].addEventListener("MSPointerDown", this._onTouchStart, !0),
                e(this, o)[o].addEventListener("MSPointerMove", this._onTouchMove, !0)),
                c.hasKeyDown && e(this, t)[t].useKeyboard && document.addEventListener("keydown", this._onKeyDown)
            }
            ,
            d._unbind = function() {
                c.hasWheelEvent && e(this, o)[o].removeEventListener("wheel", this._onWheel),
                c.hasMouseWheelEvent && e(this, o)[o].removeEventListener("mousewheel", this._onMouseWheel),
                c.hasTouch && (e(this, o)[o].removeEventListener("touchstart", this._onTouchStart),
                e(this, o)[o].removeEventListener("touchmove", this._onTouchMove)),
                c.hasPointer && c.hasTouchWin && (document.body.style.msTouchAction = e(this, C)[C],
                e(this, o)[o].removeEventListener("MSPointerDown", this._onTouchStart, !0),
                e(this, o)[o].removeEventListener("MSPointerMove", this._onTouchMove, !0)),
                c.hasKeyDown && e(this, t)[t].useKeyboard && document.removeEventListener("keydown", this._onKeyDown)
            }
            ,
            d.on = function(f, s) {
                e(this, u)[u].on(g, f, s);
                var n = e(this, u)[u].e;
                n && n[g] && n[g].length === 1 && this._bind()
            }
            ,
            d.off = function(f, s) {
                e(this, u)[u].off(g, f, s);
                var n = e(this, u)[u].e;
                (!n[g] || n[g].length <= 0) && this._unbind()
            }
            ,
            d.destroy = function() {
                e(this, u)[u].off(),
                this._unbind()
            }
            ,
            _
        }()
    })
}
)(at);
const re = at.exports;
function st(i, h) {
    for (var l = 0; l < h.length; l++) {
        var r = h[l];
        r.enumerable = r.enumerable || !1,
        r.configurable = !0,
        "value"in r && (r.writable = !0),
        Object.defineProperty(i, r.key, r)
    }
}
function ht(i, h, l) {
    return h && st(i.prototype, h),
    l && st(i, l),
    Object.defineProperty(i, "prototype", {
        writable: !1
    }),
    i
}
function R() {
    return R = Object.assign ? Object.assign.bind() : function(i) {
        for (var h = 1; h < arguments.length; h++) {
            var l = arguments[h];
            for (var r in l)
                Object.prototype.hasOwnProperty.call(l, r) && (i[r] = l[r])
        }
        return i
    }
    ,
    R.apply(this, arguments)
}
function X(i, h) {
    return X = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(l, r) {
        return l.__proto__ = r,
        l
    }
    ,
    X(i, h)
}
function nt(i, h) {
    var l = i % h;
    return l < 0 && (l += h),
    l
}
var le = ["duration", "easing"]
  , ae = function() {
    function i() {}
    var h = i.prototype;
    return h.to = function(l, r) {
        var e = this
          , a = r === void 0 ? {} : r
          , m = a.duration
          , c = m === void 0 ? 1 : m
          , g = a.easing
          , t = g === void 0 ? function(u) {
            return u
        }
        : g
          , o = function(u, w) {
            if (u == null)
                return {};
            var y, C, _ = {}, d = Object.keys(u);
            for (C = 0; C < d.length; C++)
                w.indexOf(y = d[C]) >= 0 || (_[y] = u[y]);
            return _
        }(a, le);
        this.target = l,
        this.fromKeys = R({}, o),
        this.toKeys = R({}, o),
        this.keys = Object.keys(R({}, o)),
        this.keys.forEach(function(u) {
            e.fromKeys[u] = l[u]
        }),
        this.duration = c,
        this.easing = t,
        this.currentTime = 0,
        this.isRunning = !0
    }
    ,
    h.stop = function() {
        this.isRunning = !1
    }
    ,
    h.raf = function(l) {
        var r = this;
        if (this.isRunning) {
            this.currentTime = Math.min(this.currentTime + l, this.duration);
            var e = this.easing(this.progress);
            this.keys.forEach(function(a) {
                var m = r.fromKeys[a];
                r.target[a] = m + (r.toKeys[a] - m) * e
            }),
            e === 1 && this.stop()
        }
    }
    ,
    ht(i, [{
        key: "progress",
        get: function() {
            return this.currentTime / this.duration
        }
    }]),
    i
}()
  , he = function(i) {
    var h, l;
    function r(a) {
        var m, c, g, t, o = a === void 0 ? {} : a, u = o.duration, w = u === void 0 ? 1.2 : u, y = o.easing, C = y === void 0 ? function(S) {
            return Math.min(1, 1.001 - Math.pow(2, -10 * S))
        }
        : y, _ = o.smooth, d = _ === void 0 || _, f = o.mouseMultiplier, s = f === void 0 ? 1 : f, n = o.smoothTouch, p = n !== void 0 && n, H = o.touchMultiplier, L = H === void 0 ? 2 : H, K = o.direction, U = K === void 0 ? "vertical" : K, I = o.gestureDirection, q = I === void 0 ? "vertical" : I, G = o.infinite, J = G !== void 0 && G, Q = o.wrapper, tt = Q === void 0 ? window : Q, et = o.content, it = et === void 0 ? document.body : et;
        (t = i.call(this) || this).onWindowResize = function() {
            t.wrapperWidth = window.innerWidth,
            t.wrapperHeight = window.innerHeight
        }
        ,
        t.onWrapperResize = function(S) {
            var T = S[0];
            if (T) {
                var k = T.contentRect;
                t.wrapperWidth = k.width,
                t.wrapperHeight = k.height
            }
        }
        ,
        t.onContentResize = function(S) {
            var T = S[0];
            if (T) {
                var k = T.contentRect;
                t.contentWidth = k.width,
                t.contentHeight = k.height
            }
        }
        ,
        t.onVirtualScroll = function(S) {
            var T = S.deltaY
              , k = S.deltaX
              , O = S.originalEvent
              , ut = !!O.composedPath().find(function(ot) {
                return ot.hasAttribute && ot.hasAttribute("data-lenis-prevent")
            });
            O.ctrlKey || ut || (t.smooth = O.changedTouches ? t.smoothTouch : t.options.smooth,
            t.stopped ? O.preventDefault() : t.smooth && O.buttons !== 4 && (t.smooth && O.preventDefault(),
            t.targetScroll -= t.gestureDirection === "both" ? k + T : t.gestureDirection === "horizontal" ? k : T,
            t.scrollTo(t.targetScroll)))
        }
        ,
        t.onScroll = function(S) {
            t.isScrolling && t.smooth || (t.targetScroll = t.scroll = t.lastScroll = t.wrapperNode[t.scrollProperty],
            t.notify())
        }
        ,
        window.lenisVersion = "0.2.24",
        t.options = {
            duration: w,
            easing: C,
            smooth: d,
            mouseMultiplier: s,
            smoothTouch: p,
            touchMultiplier: L,
            direction: U,
            gestureDirection: q,
            infinite: J,
            wrapper: tt,
            content: it
        },
        t.duration = w,
        t.easing = C,
        t.smooth = d,
        t.mouseMultiplier = s,
        t.smoothTouch = p,
        t.touchMultiplier = L,
        t.direction = U,
        t.gestureDirection = q,
        t.infinite = J,
        t.wrapperNode = tt,
        t.contentNode = it,
        t.wrapperNode.addEventListener("scroll", t.onScroll),
        t.wrapperNode === window ? (t.wrapperNode.addEventListener("resize", t.onWindowResize),
        t.onWindowResize()) : (t.wrapperHeight = t.wrapperNode.offsetHeight,
        t.wrapperWidth = t.wrapperNode.offsetWidth,
        t.wrapperObserver = new ResizeObserver(t.onWrapperResize),
        t.wrapperObserver.observe(t.wrapperNode)),
        t.contentHeight = t.contentNode.offsetHeight,
        t.contentWidth = t.contentNode.offsetWidth,
        t.contentObserver = new ResizeObserver(t.onContentResize),
        t.contentObserver.observe(t.contentNode),
        t.targetScroll = t.scroll = t.lastScroll = t.wrapperNode[t.scrollProperty],
        t.animate = new ae;
        var ct = ((m = navigator) == null || (c = m.userAgentData) == null ? void 0 : c.platform) || ((g = navigator) == null ? void 0 : g.platform) || "unknown";
        return t.virtualScroll = new re({
            el: t.wrapperNode,
            firefoxMultiplier: 50,
            mouseMultiplier: t.mouseMultiplier * (ct.includes("Win") ? .84 : .4),
            touchMultiplier: t.touchMultiplier,
            passive: !1,
            useKeyboard: !1,
            useTouch: !0
        }),
        t.virtualScroll.on(t.onVirtualScroll),
        t
    }
    l = i,
    (h = r).prototype = Object.create(l.prototype),
    h.prototype.constructor = h,
    X(h, l);
    var e = r.prototype;
    return e.start = function() {
        this.stopped = !1
    }
    ,
    e.stop = function() {
        this.stopped = !0,
        this.animate.stop()
    }
    ,
    e.destroy = function() {
        var a;
        this.wrapperNode === window && this.wrapperNode.removeEventListener("resize", this.onWindowResize),
        this.wrapperNode.removeEventListener("scroll", this.onScroll),
        this.virtualScroll.destroy(),
        (a = this.wrapperObserver) == null || a.disconnect(),
        this.contentObserver.disconnect()
    }
    ,
    e.raf = function(a) {
        var m = a - (this.now || 0);
        this.now = a,
        !this.stopped && this.smooth && (this.lastScroll = this.scroll,
        this.animate.raf(.001 * m),
        this.scroll === this.targetScroll && (this.lastScroll = this.scroll),
        this.isScrolling && (this.setScroll(this.scroll),
        this.notify()),
        this.isScrolling = this.scroll !== this.targetScroll)
    }
    ,
    e.setScroll = function(a) {
        var m = this.infinite ? nt(a, this.limit) : a;
        this.direction === "horizontal" ? this.wrapperNode.scrollTo(m, 0) : this.wrapperNode.scrollTo(0, m)
    }
    ,
    e.notify = function() {
        var a = this.infinite ? nt(this.scroll, this.limit) : this.scroll;
        this.emit("scroll", {
            scroll: a,
            limit: this.limit,
            velocity: this.velocity,
            direction: this.velocity === 0 ? 0 : this.velocity > 0 ? 1 : -1,
            progress: a / this.limit
        })
    }
    ,
    e.scrollTo = function(a, m) {
        var c = m === void 0 ? {} : m
          , g = c.offset
          , t = g === void 0 ? 0 : g
          , o = c.immediate
          , u = o !== void 0 && o
          , w = c.duration
          , y = w === void 0 ? this.duration : w
          , C = c.easing
          , _ = C === void 0 ? this.easing : C;
        if (a != null) {
            var d;
            if (typeof a == "number")
                d = a;
            else if (a === "top" || a === "#top")
                d = 0;
            else if (a === "bottom")
                d = this.limit;
            else {
                var f;
                if (typeof a == "string")
                    f = document.querySelector(a);
                else {
                    if (a == null || !a.nodeType)
                        return;
                    f = a
                }
                if (!f)
                    return;
                var s = 0;
                if (this.wrapperNode !== window) {
                    var n = this.wrapperNode.getBoundingClientRect();
                    s = this.direction === "horizontal" ? n.left : n.top
                }
                var p = f.getBoundingClientRect();
                d = (this.direction === "horizontal" ? p.left : p.top) + this.scroll - s
            }
            d += t,
            this.targetScroll = this.infinite ? d : Math.max(0, Math.min(d, this.limit)),
            !this.smooth || u ? (this.animate.stop(),
            this.scroll = this.lastScroll = this.targetScroll,
            this.setScroll(this.targetScroll)) : this.animate.to(this, {
                duration: y,
                easing: _,
                scroll: this.targetScroll
            })
        }
    }
    ,
    ht(r, [{
        key: "scrollProperty",
        get: function() {
            return this.wrapperNode === window ? this.direction === "horizontal" ? "scrollX" : "scrollY" : this.direction === "horizontal" ? "scrollLeft" : "scrollTop"
        }
    }, {
        key: "limit",
        get: function() {
            return this.direction === "horizontal" ? this.contentWidth - this.wrapperWidth : this.contentHeight - this.wrapperHeight
        }
    }, {
        key: "velocity",
        get: function() {
            return this.scroll - this.lastScroll
        }
    }]),
    r
}(vt);
const ce = {
    setup() {
        const i = {
            smoothValue: 0,
            active: !0,
            lenis: null
        };
        return mt("scroll", i),
        {
            scroll: i
        }
    },
    mounted() {
        const i = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
        this.scroll.lenis = new he({
            duration: 1.2,
            easing: h=>1 - Math.pow(1 - h, 4),
            direction: "vertical",
            gestureDirection: "vertical",
            smooth: !0,
            mouseMultiplier: i ? .6 : 1,
            smoothTouch: !1,
            touchMultiplier: 2,
            infinite: !1
        }),
        x.lenis = this.scroll.lenis,
        this.scroll.lenis.on("scroll", this.onScroll),
        this.scroll.active = !0,
        this.scrollRaf = requestAnimationFrame(this.onUpdate)
    },
    beforeUnmount() {
        this.scroll.lenis.destroy(),
        cancelAnimationFrame(this.scrollRaf)
    },
    methods: {
        onScroll({scroll: i, limit: h, velocity: l, direction: r, progress: e}) {
            this.scroll.smoothValue = i
        },
        onUpdate(i) {
            this.scroll.lenis.raf(i),
            this.scrollRaf = requestAnimationFrame(this.onUpdate),
            this.$bus.$emit("update")
        }
    }
}
  , ue = {
    class: "SmoothScroll"
};
function de(i, h, l, r, e, a) {
    return b(),
    V("div", ue, [j(i.$slots, "default")])
}
const pe = N(ce, [["render", de]])
  , fe = {
    props: {
        withHeader: {
            type: Boolean,
            default: !0
        },
        headerTheme: {
            type: String,
            default: "light"
        },
        footerTheme: {
            type: String,
            default: "light"
        }
    }
}
  , ve = {
    class: "DefaultLayout"
};
function me(i, h, l, r, e, a) {
    const m = Ot
      , c = Dt
      , g = ne
      , t = pe;
    return b(),
    V("div", ve, [$(t, null, {
        default: M(()=>[l.withHeader ? (b(),
        rt(m, {
            key: 0,
            theme: l.headerTheme,
            scrolling: !0
        }, null, 8, ["theme"])) : _t("", !0), $(c, {
            class: Z("is-" + l.headerTheme)
        }, null, 8, ["class"]), j(i.$slots, "default"), $(g, {
            theme: l.footerTheme
        }, null, 8, ["theme"])]),
        _: 3
    })])
}
const we = N(fe, [["render", me]]);
export {we as _, Vt as a, Ft as b, $t as g};
