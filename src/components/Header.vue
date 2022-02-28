<template>
  <header class="header">
    <div class="header__container">
    <div @click="menuActive" id="header__menu">
      <img
        :src="iconChoice"
        alt="iconMenu"
        id="icoMenu"
      />
      
    </div>


    <div id="header__logo">
      <img src="@/assets/images/shared/desktop/logo.svg" alt="logo" />
    </div>

    <nav id="nav">
      <router-link to="/" class="orange-c1">Home</router-link>
      <router-link to="/headphones" class="orange-c1">headphones</router-link>
      <router-link to="/speakers" class="orange-c1"> speakers </router-link>
      <router-link to="/earphones" class="orange-c1">earphones </router-link>
    </nav>

    <div id="header__cart">
      <img src="@/assets/images/shared/desktop/icon-cart.svg" alt="cart" />
    </div>
    </div>


  <div class="menu__ThereeProducts" v-if="activeMenu">
      <ThereeProducts/>
      </div>

  </header>
</template>

<script>
import ThereeProducts from "@/components/ThreeProducts.vue"

const iconClose=require('@/assets/images/shared/tablet/icon-close-menu.svg')
const iconHamburger=require('@/assets/images/shared/tablet/icon-hamburger.svg')
export default {
 name: "Header",
  data() {
    return {
      activeMenu: false,
       
       iconChoice: iconHamburger
    };
  },
   components:{
   
    ThereeProducts,
   
    
  },

  methods: {
    menuActive() {
       let menuShadow=document.getElementById("menuShadow");
        

      this.activeMenu= !this.activeMenu;
      if (this.activeMenu) {
        
        menuShadow.classList.add("menuShadow");
        this.iconChoice= iconClose;
        
      } else {
        
        menuShadow.classList.remove("menuShadow");
       this.iconChoice = iconHamburger
      }
    
    },
  },
};
</script>
