<template>
  <BannerHero :title="'SPEAKERS'" />
  <div class="main__shared">
  <CardProduct
    :product="{
      imgs:ZX9_imgs,
      description:
        'Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.',
      title: 'ZX9 SPEAKER',
      isReverse: false,
      newProduct:true
    }"
  />

  <CardProduct
    :product="{
      imgs: ZX7_imgs,
      description:
        'Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.',
      title: 'ZX7 SPEAKER',
      isReverse: true,
        newProduct:false
    }"
  />


  
  </div>
</template>

<script>
import BannerHero from "@/components/BannerHero";
import CardProduct from "@/components/CardProduct";
export default {
  name: "Speakers",
  components: {
    BannerHero,
    CardProduct,
  },
   data() {
    return {
      ZX9_imgs:{
              desktop:require('@/assets/images/category-speakers/desktop/image-zx9.jpg'),
              tablet:require('@/assets/images/category-speakers/tablet/image-zx9.jpg'),
              mobile:require('@/assets/images/category-speakers/mobile/image-zx9.jpg')
            },
      ZX7_imgs:{
              desktop:require('@/assets/images/category-speakers/desktop/image-zx7.jpg'),
              tablet:require('@/assets/images/category-speakers/tablet/image-zx7.jpg'),
              mobile:require('@/assets/images/category-speakers/mobile/image-zx7.jpg')
            },
         
    }
  },
  
};
</script>