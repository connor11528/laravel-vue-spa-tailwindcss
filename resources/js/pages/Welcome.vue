<template>
  <div id="welcome-page">
    <hero-component></hero-component>

    <wave-svg-component-top></wave-svg-component-top>

    <story-component></story-component>

    <featured-cards-component></featured-cards-component>

    <pricing-component></pricing-component>

    <wave-svg-component-bottom></wave-svg-component-bottom>

    <call-to-action-component></call-to-action-component>

    <footer-component></footer-component>

  </div>
</template>
<script>
  import HeroComponent from '../components/HeroComponent.vue';
  import WaveSvgComponentTop from '../components/WaveSvgComponentTop.vue'
  import StoryComponent from '../components/StoryComponent.vue';
  import FeaturedCardsComponent from '../components/FeaturedCardsComponent.vue';
  import PricingComponent from '../components/PricingComponent.vue';
  import WaveSvgComponentBottom from '../components/WaveSvgComponentBottom.vue'
  import CallToActionComponent from '../components/CallToActionComponent.vue';
  import FooterComponent from '../components/FooterComponent.vue';

  export default {
    components: {
      HeroComponent,
      WaveSvgComponentTop,
      StoryComponent,
      FeaturedCardsComponent,
      PricingComponent,
      WaveSvgComponentBottom,
      CallToActionComponent,
      FooterComponent
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
      handleScroll(event){

        var scrollpos = window.scrollY;
        var header = document.getElementById("header");
        var navcontent = document.getElementById("nav-content");
        var navaction = document.getElementById("navAction");
        var brandname = document.getElementById("brandname");
        var toToggle = document.querySelectorAll(".toggleColour");

        document.addEventListener('scroll', function() {

          /*Apply classes for slide in bar*/
          scrollpos = window.scrollY;

          if(scrollpos > 10){
            header.classList.add("bg-white");
            navaction.classList.remove("bg-white");
            navaction.classList.add("gradient");
            navaction.classList.remove("text-gray-800");
            navaction.classList.add("text-white");
            //Use to switch toggleColour colours
            for (var i = 0; i < toToggle.length; i++) {
              toToggle[i].classList.add("text-gray-800");
              toToggle[i].classList.remove("text-white");
            }
            header.classList.add("shadow");
            navcontent.classList.remove("bg-gray-100");
            navcontent.classList.add("bg-white");
          }
          else {
            header.classList.remove("bg-white");
            navaction.classList.remove("gradient");
            navaction.classList.add("bg-white");
            navaction.classList.remove("text-white");
            navaction.classList.add("text-gray-800");
            //Use to switch toggleColour colours
            for (var i = 0; i < toToggle.length; i++) {
              toToggle[i].classList.add("text-white");
              toToggle[i].classList.remove("text-gray-800");
            }

            header.classList.remove("shadow");
            navcontent.classList.remove("bg-white");
            navcontent.classList.add("bg-gray-100");
          }
        });
      }
    }

  }
</script>
