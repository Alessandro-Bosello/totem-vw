(function(e){function t(t){for(var i,a,r=t[0],l=t[1],c=t[2],u=0,d=[];u<r.length;u++)a=r[u],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);p&&p(t);while(d.length)d.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],i=!0,r=1;r<n.length;r++){var l=n[r];0!==o[l]&&(i=!1)}i&&(s.splice(t--,1),e=a(a.s=n[0]))}return e}var i={},o={app:0},s=[];function a(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=i,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)a.d(n,i,function(t){return e[t]}.bind(null,i));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=t,r=r.slice();for(var c=0;c<r.length;c++)t(r[c]);var p=l;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"037e":function(e,t,n){e.exports=n.p+"media/VID02.355a7663.mp4"},"0bbb":function(e,t,n){e.exports=n.p+"img/IMG03.b0ed6e20.jpg"},3183:function(e,t,n){e.exports=n.p+"img/IMG02.8b6a88b1.jpg"},"3e0f":function(e,t,n){e.exports=n.p+"media/VID03.87e7e811.mp4"},4230:function(e,t,n){e.exports=n.p+"img/screen-video04.ec8b0bac.jpg"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},s=[],a={name:"App"},r=a,l=n("2877"),c=Object(l["a"])(r,o,s,!1,null,null,null),p=c.exports,u=n("8c4f"),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[e.play?n("div",[n("router-view"),n("div",{staticClass:"header-top"},[n("ds-header",{attrs:{inverted:""}})],1),n("vueper-slides",{ref:"myCarousel",attrs:{fade:"",autoplay:!1,arrows:!1,"fixed-height":"100vh",touchable:!1}},e._l(e.slides,(function(e,t){return n("vueper-slide",{key:t,ref:"myVideo",refInFor:!0,attrs:{video:e.video}})})),1)],1):n("div",[n("div",{staticClass:"header-top"},[n("ds-header",{attrs:{inverted:""}})],1),n("vueper-slides",{ref:"autoplay",attrs:{fade:"",arrows:!1,autoplay:!0,bullets:!0,"fixed-height":"100vh","slide-content-outside":!1,touchable:!1,duration:1e4}},e._l(e.images,(function(e,t){return n("vueper-slide",{key:t,attrs:{title:e.title,content:e.content,image:e.image}})})),1),n("router-link",{attrs:{to:{path:"device",query:{idSocket:e.idSocket}},target:"_blank"},nativeOn:{click:function(t){return e.click()}}},[n("div",{staticClass:"qrcode"},[n("div",{staticClass:"bb"},[n("vue-qrcode",{staticClass:"bb",attrs:{margin:0,value:"https://sand-hickory-cloth.glitch.me/?fromQRcode"}})],1)])])],1)])},f=[],v=n("8e27"),m=n.n(v),g=n("b1b5"),b=(n("2ec8"),n("5082"),n("9a13")),h={components:{VueperSlides:g["VueperSlides"],VueperSlide:g["VueperSlide"],VueQrcode:b["a"]},data:function(){return{idSocket:"",index:0,play:!1,slides:[{video:{mp4:n("9f49"),props:{autoplay:!1,loop:!1,controls:!1,muted:!1}}},{video:{mp4:n("037e"),props:{autoplay:!1,loop:!1,controls:!1,muted:!1}}},{video:{mp4:n("3e0f"),props:{autoplay:!1,loop:!1,controls:!1,muted:!1}}},{video:{mp4:n("d070"),props:{autoplay:!1,loop:!1,controls:!1,muted:!1}}}],images:[{title:"<span style='margin-left:-210px'> Scopri ID.3 </span> <br> <span style='font-size:64px;margin-left:-210px;'>100% elettrica </span>",content:"<span style='font-size:64px; margin-top:1000px;'> Scannerizza il QR code </span> <br> <span style='font-size:45px;'>Vivi un'esperinza interattiva <br> alla scoperta di ID.3</span>",image:n("b21e")},{title:"<span > Batteria e autonomia </span> <br> <span style='font-size:64px;'> Massima performance. </span>",content:"<span style='font-size:64px;'> Scannerizza il QR code </span> <br> <span style='font-size:45px;'>Vivi un'esperinza interattiva <br> alla scoperta di ID.3</span>",image:n("3183")},{title:"<span>Ciao ID.3 </span> <br> <span style='font-size:64px;'> ID.3 ti saluta. Con la luce. </span>",content:"<span style='font-size:64px;'> Scannerizza il QR code </span> <br> <span style='font-size:45px;'>Vivi un'esperinza interattiva <br> alla scoperta di ID.3</span>",image:n("0bbb")},{title:"<span style='margin-left:150px;'> ID Light </span> <br> <span style='font-size:64px;margin-left:150px'>  Un concetto di luci intelligente </span>",content:"<span style='font-size:64px;'> Scannerizza il QR code </span> <br> <span style='font-size:45px;'>Vivi un'esperinza interattiva <br> alla scoperta di ID.3</span>",image:n("d18c")}]}},name:"totem",created:function(){var e=this,t=m()("https://totem-vw-test.glitch.me");t.on("Totem",(function(n){console.log(n),console.log("IdSocketTotem",t.id),console.log("IdUtente","".concat(t.ids)),e.idSocket=t.id})),t.on("message",(function(e){console.log("Utente connesso: "+e)})),t.on("changeSlideNext",(function(t){console.log(t),e.slide=e.$refs.myCarousel.next()})),t.on("changeSlidePrevious",(function(t){console.log(t),e.slide=e.$refs.myCarousel.previous()})),t.on("play",(function(t){console.log(t),console.log("a",e.index),e.slide=e.$refs.myVideo[e.index].playVideo()})),t.on("stopVideo",(function(t){console.log(t),e.slide=e.$refs.myVideo[e.index].pauseVideo()})),t.on("indexSlide",(function(t){e.index=t}))},methods:{click:function(){this.$refs.autoplay.goToSlide(0),this.$refs.autoplay.previous(),this.play=!0}},mounted:function(){var e="#fromQRcode",t=location.hash;e==t&&alert("its scanned !")}},y=h,x=(n("a698"),Object(l["a"])(y,d,f,!1,null,null,null)),S=x.exports,V=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"buttons"},[e.playing?n("div",[n("ds-button",{staticClass:"btn_custom",attrs:{variant:"minimal",icon:"pause-circle"},on:{click:function(t){return e.stopVideo()}}})],1):n("div",[n("ds-button",{staticClass:"btn_custom",attrs:{variant:"minimal",icon:"play-circle"},on:{click:function(t){return e.play()}}})],1)]),n("router-view"),n("div",{staticClass:"header-top"},[n("ds-header",{attrs:{inverted:""}})],1),n("vueper-slides",{attrs:{"slide-ratio":.5,"fixed-height":"100vh","slide-content-outside":!1,touchable:!1},on:{slide:function(t){return e.logEvents("slide",t)},previous:function(t){return e.logEvents("previous",t)},next:function(t){return e.logEvents("next",t)}},scopedSlots:e._u([{key:"content",fn:function(){return[n("div",{staticClass:"vueperslide__title"},[e._v(e._s(e.i.toString()))])]},proxy:!0}])},e._l(e.slides,(function(e,t){return n("vueper-slide",{key:t,ref:"index",refInFor:!0,attrs:{content:e.content,image:e.image}})})),1),[e._v(" prova ")]],2)},z=[],I=(n("99af"),m()("https://totem-vw-test.glitch.me")),_={components:{VueperSlides:g["VueperSlides"],VueperSlide:g["VueperSlide"]},data:function(){return{playing:!1,slides:[{content:"Vivi un esperienza interattiva alla scoperta di ID.3",image:n("996c")},{content:"Vivi un esperienza interattiva alla scoperta di ID.3",image:n("df84")},{content:"Vivi un esperienza interattiva alla scoperta di ID.3",image:n("d46b")},{content:"Vivi un esperienza interattiva alla scoperta di ID.3",image:n("4230")}]}},name:"device",methods:{connectServer:function(){var e=this.$route.query.idSocket;console.log(e),I.emit("idSocketTotem",e)},logEvents:function(e,t){console.log(this.events="<strong>".concat(e,"</strong>, ").concat(JSON.stringify(t),"<br>")),"next"==e?I.emit("changeSlideNext",this.events):"previous"==e?I.emit("changeSlidePrevious",this.events):"slide"==e&&(this.events=t.currentSlide.index,I.emit("indexSlide",this.events),console.log(t.currentSlide.index))},play:function(){I.emit("playVideo",this.events),this.playing=!0},stopVideo:function(){I.emit("stopVideo",this.events),this.playing=!1}}},k=_,j=(n("aeb9"),Object(l["a"])(k,V,z,!1,null,null,null)),w=j.exports;i["default"].use(u["a"]);var C=new u["a"]({routes:[{path:"/",name:"Totem",component:S},{path:"/device",name:"device",component:w}]}),D=n("34df"),O=n.n(D);i["default"].use(O.a),i["default"].config.productionTip=!1,new i["default"]({router:C,render:function(e){return e(p)}}).$mount("#app")},"996c":function(e,t,n){e.exports=n.p+"img/screen-video01.1e278310.jpg"},"9f49":function(e,t,n){e.exports=n.p+"media/VID01.864778ee.mp4"},a698:function(e,t,n){"use strict";n("ffce")},aeb9:function(e,t,n){"use strict";n("fe98")},b21e:function(e,t,n){e.exports=n.p+"img/IMG01.e44f1d2f.png"},d070:function(e,t,n){e.exports=n.p+"media/VID04.b923a2bb.mp4"},d18c:function(e,t,n){e.exports=n.p+"img/IMG04.7d6bb1ff.jpg"},d46b:function(e,t,n){e.exports=n.p+"img/screen-video03.223bb2b9.jpg"},df84:function(e,t,n){e.exports=n.p+"img/screen-video02.930c7b9b.jpg"},fe98:function(e,t,n){},ffce:function(e,t,n){}});
//# sourceMappingURL=app.adb01334.js.map