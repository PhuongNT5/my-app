<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <nav class="navbar navbar-expand-lg navbar-light position-fixed navbar-classic">
      <div class="container">
      <a class="navbar-brand" href="#">Legator</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-item nav-link active" href="/">Home <span class="sr-only">(current)</span></a>
          <a class="nav-item nav-link" href="/about">About</a>
          <a class="nav-item nav-link" href="/contact">Contact</a>
        </div>
      </div>
      </div>
    </nav>
    <router-view/>
    <div class="btn-to-top">
      <a class="to-top" v-on:click="toTop">
        <font-awesome-icon icon="arrow-up" class="icon-arrow-up"/>
      </a>
    </div>
  </div>
</template>

<script>
// import _ from 'lodash';
import JQuery from 'jquery'
import AOS from 'aos'
import 'aos/dist/aos.css' // You can also use <link> for styles
let $ = JQuery

AOS.init()
export default {
  mounted () {
    $(window).scroll(function () {
      if ($(window).scrollTop() > 150) {
        $('.to-top').addClass('active')
        $('.navbar').addClass('bg-light')
        $('.navbar').removeClass('navbar-classic')
        $('.navbar').addClass('navbar-static')
      } else {
        $('.to-top').removeClass('active')
        $('.navbar').removeClass('bg-light')
        $('.navbar').addClass('navbar-classic')
        $('.navbar').removeClass('navbar-static')
      }
    })
  },
  methods: {
    toTop: () => {
      $('html, body').animate({ scrollTop: 0 }, 600)
    }
  }
}
</script>

<style lang="scss">
  @import './assets/styles/main.scss';
</style>
