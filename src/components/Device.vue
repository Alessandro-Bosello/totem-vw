<template>
  <div>
    <div class="buttons">
      <div v-if="playing">
        <ds-button
          class="btn_custom"
          @click="stopVideo()"
          variant="minimal"
          icon="pause-circle"
        ></ds-button>
      </div>

      <div v-else>
        <ds-button
          class="btn_custom"
          @click="play()"
          variant="minimal"
          icon="play-circle"
        ></ds-button>
      </div>
    </div>
    <router-view />
    <div class="header-top">
      <ds-header inverted />
    </div>
    <vueper-slides
      @slide="logEvents('slide', $event)"
      @previous="logEvents('previous', $event)"
      @next="logEvents('next', $event)"
      :slide-ratio="1 / 2"
      fixed-height="100vh"
      :slide-content-outside="false"
      :touchable="false"
    >
      <vueper-slide
        v-for="(slide, i) in slides"
        :key="i"
        ref="index"
        :content="slide.content"
        :image="slide.image"
      />
      <template v-slot:content>
        <div class="vueperslide__title">{{ i.toString() }}</div>
      </template>
    </vueper-slides>
    <!-- Connect server <button @click="connectServer()">Connect Server</button>-->
    <template> prova </template>
  </div>
</template>

<script>
import io from "socket.io-client";
var socket = io("http://localhost:8000");
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

export default {
  components: { VueperSlides, VueperSlide },
  data() {
    return {
      playing: false,
      slides: [
        {
          content: "Vivi un esperienza interattiva alla scoperta di ID.3",
          image: require("../components/img/screen-video01.jpg"),
        },
        {
          content: "Vivi un esperienza interattiva alla scoperta di ID.3",
          image: require("../components/img/screen-video02.jpg"),
        },
        {
          content: "Vivi un esperienza interattiva alla scoperta di ID.3",
          image: require("../components/img/screen-video03.jpg"),
        },
        {
          content: "Vivi un esperienza interattiva alla scoperta di ID.3",
          image: require("../components/img/screen-video04.jpg"),
        },
      ],
    };
  },
  name: "device",

  methods: {
    connectServer() {
      var idSocket = this.$route.query.idSocket;
      console.log(idSocket);

      socket.emit("idSocketTotem", idSocket);

      //console.log("Id totem" + " "+ this.$route.query.idSocket);
    },
    logEvents(eventName, params) {
      console.log(
        (this.events = `<strong>${eventName}</strong>, ${JSON.stringify(
          params
        )}<br>`)
      );
      if (eventName == "next") {
        socket.emit("changeSlideNext", this.events);
      } else if (eventName == "previous") {
        socket.emit("changeSlidePrevious", this.events);
      } else if (eventName == "slide") {
        this.events = params.currentSlide.index;
        socket.emit("indexSlide", this.events);
        console.log(params.currentSlide.index);
      }
    },
    play() {
      socket.emit("playVideo", this.events);
      this.playing = true;
    },
    stopVideo() {
      socket.emit("stopVideo", this.events);
      this.playing = false;
    },
  },
};
</script>

<style>
.vueperslides__bullet .default {
  background-color: rgba(255, 255, 255, 0.6);
  border: none;
  box-shadow: none;
  transition: 0.3s;
  width: 15px;
  height: 15px;
}

.vueperslides__bullet--active .default {
  background-color: #eee;
  width: 25px;
  height: 25px;
}

.vueperslides__bullet span {
  display: block;
  color: #fff;
  opacity: 0.8;
}
/** 
.vueperslide__video {
  transform: scale(1, 2.6);
}
*/
@media only screen and (max-width: 600px) {
  .vueperslide__image {
    background-position: left;
  }
}

.vueperslide__content {
  font-size: 30px;
  color: #ffffff;
  text-align: left;
  margin-top: 550px;
}
@media only screen and (max-width: 1380px) {
  .vueperslide__content {
    margin-left: 30px;
    font-size: 35px;
    margin-top: 860px;
  }
}
@media only screen and (max-width: 1024px) {
  .vueperslide__content {
    margin-left: 30px;
    font-size: 45px;
    margin-top: 1200px;
  }
  @media only screen and (max-width: 900px) {
    .vueperslide__content {
      margin-left: 30px;
      font-size: 25px;
      margin-top: 430px;
    }
    @media only screen and (max-width: 600px) {
      .vueperslide__content {
        margin-left: 30px;
        font-size: 25px;
        margin-top: 540px;
      }
      .vueperslides__bullet .default {
        background-color: rgba(255, 255, 255, 0.6);
        border: none;
        box-shadow: none;
        transition: 0.3s;
        width: 8px;
        height: 8px;
      }

      .vueperslides__bullet--active .default {
        background-color: #eee;
        width: 16px;
        height: 16px;
      }
      .vueperslides__bullet,
      .vueperslides__bullets button {
        margin-bottom: 150px;
      }
    }
  }
}
.vueperslides__arrow {
  background: #000000;
  opacity: 0.5;
  border-radius: 50%;
  font-size: 8px;
}

h2 {
  font: 33px sans-serif;
  margin-top: 30px;
  text-align: center;
}
h2.background {
  position: relative;
  z-index: 1;
}
h2.background:before {
  border-top: 2px solid #dfdfdf;
  content: "";
  margin: 0 auto;
  /* this centers the line to the full width specified */
  position: absolute;
  /* positioning must be absolute here, and relative positioning must be applied to the parent */
  top: 50%;
  left: 0;
  right: 0;
  bottom: 0;
  width: 95%;
  z-index: -1;
}
h2.background span {
  /* to hide the lines from behind the text, you have to set the background color the same as the container */

  padding: 15px;
}
h2.double:before {
  /* this is just to undo the :before styling from above */
  border-top: none;
}
h2.double:after {
  border-bottom: 1px solid #eee;
  -webkit-box-shadow: 0 1px 0 0 #eee;
  -moz-box-shadow: 0 1px 0 0 #eee;
  box-shadow: 0 1px 0 0 #eee;
  content: "";
  margin: 0 auto;
  /* this centers the line to the full width specified */
  position: absolute;
  top: 45%;
  left: 0;
  right: 0;
  width: 100%;
  z-index: -1;
}
.header-top {
  margin-top: 10px;
  position: absolute;
  z-index: 99;
  width: 100%;
}
.buttons {
  position: absolute;
  z-index: 99;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.btn_custom {
  font-size: 200px;
  color: #ffffff;
  stroke-width: 2px;
}

@media only screen and (max-width: 900px) {
  .btn_custom {
    font-size: 200px;
  }
}
@media only screen and (max-width: 600px) {
  .btn_custom {
    font-size: 180px;
  }
}
@media only screen and (max-width: 400px) {
  .btn_custom {
    font-size: 150px;
  }
}
</style>
