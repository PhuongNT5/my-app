<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
    <Banner/>
    <Background/>
    <Information/>
    <OurProject/>
    <Skills/>
    <Summary/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Banner from '@/components/Banner.vue';
import Background from '@/components/Background.vue';
import Information from '@/components/Information.vue';
import OurProject from '@/components/OurProject.vue';
import Skills from '@/components/Skills.vue';
import Summary from '@/components/Summary.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: "home",
  components: {
    HelloWorld,
    Banner,
    Background,
    Information,
    OurProject,
    Skills,
    Summary,
    Footer
  }
};
</script>
