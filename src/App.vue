<template>
  <Header />
  <div class="container-line">
    <hr class="container-line__line" />
  </div>
  <div id="menuShadow"></div>
  <main>
      
    <router-view />
   
    <div class="main__shared">
      <div class="shared__ThereeProducts">
        <ThreeProducts />
      </div>
      <CompanyDescription />
    </div>
  </main>
  <Footer />
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import ThreeProducts from "@/components/ThreeProducts.vue";
import CompanyDescription from "@/components/CompanyDescription.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
    CompanyDescription,
     ThreeProducts
  },
};
</script>

<style>
@import "'./../src/styles/style.css";

</style>
