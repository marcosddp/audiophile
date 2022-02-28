<template>
  <BannerHero :title="'EARPHONES'" />
  <div class="main__shared">
  <CardProduct
    :product="{
      imgs:YX1_imgs,
      description:
        'Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.',
      title: 'YX1 WIRELESS EARPHONES',
      isReverse: false,
      newProduct:true
    }"
  />



  
  </div>
</template>

<script>
import BannerHero from "@/components/BannerHero";
import CardProduct from "@/components/CardProduct";
export default {
  name: "Earphones",
  components: {
    BannerHero,
    CardProduct,
  },
   data() {
    return {
      YX1_imgs:{
              desktop:require('@/assets/images/category-earphones/desktop/image-yx1-earphones.jpg'),
              tablet:require('@/assets/images/category-earphones/tablet/image-yx1-earphones.jpg'),
              mobile:require('@/assets/images/category-earphones/mobile/image-yx1-earphones.jpg')
            },
     
         
    }
  },
  
};
</script>