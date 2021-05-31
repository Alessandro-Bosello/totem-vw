<template>
  <div class="home">
    <div v-if="play">
      <router-view />
      <div class="header-top">
        <ds-header inverted />
      </div>

      <vueper-slides
        fade
        :autoplay="false"
        :arrows="false"
        ref="myCarousel"
        fixed-height="100vh"
        :touchable="false"
      >
        <vueper-slide
          v-for="(slide, i) in slides"
          :key="i"
          ref="myVideo"
          :video="slide.video"
        />
      </vueper-slides>
    </div>

    <div v-else>
      <div class="header-top">
        <ds-header inverted />
      </div>
      <vueper-slides
        fade
        :arrows="false"
        :autoplay="true"
        :bullets="true"
        ref="autoplay"
        fixed-height="100vh"
        :slide-content-outside="false"
        :touchable="false"
        :duration="10000"
      >
        <vueper-slide
          v-for="(slide, i) in images"
          :key="i"
          :title="slide.title"
          :content="slide.content"
          :image="slide.image"
        />
      </vueper-slides>
      <router-link
        @click.native="click()"
        :to="{ path: 'device', query: { idSocket } }"
        target="_blank"
      >
        <div class="qrcode">
          <div class="bb">
            <vue-qrcode
              class="bb"
              :margin="0"
              value="https://sand-hickory-cloth.glitch.me/?fromQRcode"
            />
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import io from "socket.io-client";
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
import "@24consulting/design-system-vw/dist/design-system-vw.css";
import VueQrcode from "vue-qrcode";
export default {
  components: { VueperSlides, VueperSlide, VueQrcode },
  data() {
    return {
      idSocket: "",
      index: 0,
      play: false,
      slides: [
        {
          video: {
            mp4: require("../components/img/VID01.mp4"),
            props: {
              autoplay: false,
              loop: false,
              controls: false,
              muted: false,
            },
          },
        },
        {
          video: {
            mp4: require("../components/img/VID02.mp4"),
            props: {
              autoplay: false,
              loop: false,
              controls: false,
              muted: false,
            },
          },
        },
        {
          video: {
            mp4: require("../components/img/VID03.mp4"),
            props: {
              autoplay: false,
              loop: false,
              controls: false,
              muted: false,
            },
          },
        },
        {
          video: {
            mp4: require("../components/img/VID04.mp4"),
            props: {
              autoplay: false,
              loop: false,
              controls: false,
              muted: false,
            },
          },
        },
      ],
      images: [
        {
          title:
            "<span style='margin-left:-210px'> Scopri ID.3 </span> <br> <span style='font-size:64px;margin-left:-210px;'>100% elettrica </span>",
          content:
            "<span style='font-size:64px; margin-top:1000px;'> Scannerizza il QR code </span> <br> <span style='font-size:45px;'>Vivi un'esperinza interattiva <br> alla scoperta di ID.3</span>",
          image: require("../components/img/IMG01.png"),
        },
        {
          title:
            "<span > Batteria e autonomia </span> <br> <span style='font-size:64px;'> Massima performance. </span>",
          content:
            "<span style='font-size:64px;'> Scannerizza il QR code </span> <br> <span style='font-size:45px;'>Vivi un'esperinza interattiva <br> alla scoperta di ID.3</span>",
          image: require("../components/img/IMG02.jpg"),
        },
        {
          title:
            "<span>Ciao ID.3 </span> <br> <span style='font-size:64px;'> ID.3 ti saluta. Con la luce. </span>",
          content:
            "<span style='font-size:64px;'> Scannerizza il QR code </span> <br> <span style='font-size:45px;'>Vivi un'esperinza interattiva <br> alla scoperta di ID.3</span>",
          image: require("../components/img/IMG03.jpg"),
        },
        {
          title:
            "<span style='margin-left:150px;'> ID Light </span> <br> <span style='font-size:64px;margin-left:150px'>  Un concetto di luci intelligente </span>",
          content:
            "<span style='font-size:64px;'> Scannerizza il QR code </span> <br> <span style='font-size:45px;'>Vivi un'esperinza interattiva <br> alla scoperta di ID.3</span>",
          image: require("../components/img/IMG04.jpg"),
        },
      ],
    };
  },
  name: "totem",
  created() {
    var socket = io("http://localhost:8000");
    // server-side
    socket.on("Totem", (conn) => {
      console.log(conn);
      console.log("IdSocketTotem", socket.id);
      console.log("IdUtente", `${socket.ids}`);
      this.idSocket = socket.id;
    });
    socket.on("message", function (message) {
      console.log("Utente connesso: " + message);
    });
    socket.on("changeSlideNext", (slide) => {
      console.log(slide);
      this.slide = this.$refs.myCarousel.next();
    });
    socket.on("changeSlidePrevious", (slide) => {
      console.log(slide);
      this.slide = this.$refs.myCarousel.previous();
    });
    socket.on("play", (events) => {
      console.log(events);
      console.log("a", this.index);
      this.slide = this.$refs.myVideo[this.index].playVideo();
    });
    socket.on("stopVideo", (events) => {
      console.log(events);
      this.slide = this.$refs.myVideo[this.index].pauseVideo();
    });
    socket.on("indexSlide", (index) => {
      this.index = index;
    });
  },
  methods: {
    click() {
      this.$refs.autoplay.goToSlide(0);
      this.$refs.autoplay.previous();
      this.play = true;
    },
  },
  mounted() {
    var qrCode = "#fromQRcode";
    var check = location.hash;
    if (qrCode == check) {
      alert("its scanned !");
    }
  },
};
</script>


<style >
.vueperslide__content-wrapper:not(.vueperslide__content-wrapper--outside-top):not(.vueperslide__content-wrapper--outside-bottom) {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: baseline;
  margin-left: -420px;
  text-align: left;
  margin-top: 180px;
}
.vueperslide__title {
  font-size: 50px;
  color: #ffffff;
  text-align: left;
  margin-left: 100px;
}
.vueperslide__image {
  width: 100%;
  height: 80%;
}
.vueperslide--active {
  background-repeat: no-repeat;
}
.header-top {
  margin-top: 50px;
  position: absolute;
  z-index: 99;
  width: 100%;
}
.qrcode {
  position: absolute;
  bottom: 150px;
  right: 240px;
}
.bb::after,
.bb {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.bb {
  width: 200px;
  height: 200px;
  margin: auto;
  padding: 5px;
  color: #ffffff;
  box-shadow: inset 0 0 0 2px rgba(238, 238, 238, 0.5);
  z-index: 99;
}
.bb::after {
  content: "";
  z-index: 99;
  margin: -6%;
  box-shadow: inset 0 0 0 6px;
  animation: clipMe 8s linear infinite;
}

@keyframes clipMe {
  0%,
  100% {
    clip: rect(0px, 220px, 2px, 0px);
  }
  75% {
    clip: rect(0px, 2px, 220px, 0px);
  }
  50% {
    clip: rect(218px, 220px, 250px, 0px);
  }
  25% {
    clip: rect(0px, 250px, 220px, 218px);
  }
}

.vueperslide {
  background-color: #00437a;
}
@media only screen and (max-width: 1080px) {
  .vueperslide__content {
    padding: 30px;
    background-repeat: no-repeat;
    margin-top: 1000px !important;
  }
  .vueperslide__content-wrapper:not(.vueperslide__content-wrapper--outside-top):not(.vueperslide__content-wrapper--outside-bottom) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: baseline;
    margin-left: -30%;
    text-align: left;
    margin-top: 180px;
  }
  .vueperslide__title {
    font-size: 88px;
    color: #ffffff;
    text-align: left;
    margin-left: 150px;
    font-weight: "bold";
  }
  .vueperslides__bullet,
  .vueperslides__bullets button {
    margin-bottom: 350px;
  }
}
</style>
