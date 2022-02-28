<template>
  <BannerHero :title="'HEADPHONES'" />
  <div class="main__shared">
  <CardProduct
    :product="{
      imgs:XX99II_imgs,
      description:
        'The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.',
      title: 'XX99 MARK II HEADPHONES',
      isReverse: false,
      newProduct:true
    }"
  />

  <CardProduct
    :product="{
      imgs:XX99I_imgs,
      description:
        'As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.',
      title: 'XX99 MARK I HEADPHONES',
      isReverse: true,
        newProduct:false
    }"
  />


   <CardProduct
    :product="{
      imgs:XX59_imgs,
      description:
        'Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.',
      title: 'XX59 HEADPHONES',
      isReverse: false,
        newProduct:false
    }"
  />
  
  </div>
</template>

<script>
import BannerHero from "@/components/BannerHero";
import CardProduct from "@/components/CardProduct";
export default {
  name: "HeadPhones",
  components: {
    BannerHero,
    CardProduct,
  },
   data() {
    return {
      XX99II_imgs:{
              desktop:require('@/assets/images/category-headphones/desktop/image-xx99-mark-two.jpg'),
              tablet:require('@/assets/images/category-headphones/tablet/image-xx99-mark-two.jpg'),
              mobile:require('@/assets/images/category-headphones/mobile/image-xx99-mark-two.jpg')
            },
      XX99I_imgs:{
              desktop:require('@/assets/images/category-headphones/desktop/image-xx99-mark-one.jpg'),
              tablet:require('@/assets/images/category-headphones/tablet/image-xx99-mark-one.jpg'),
              mobile:require('@/assets/images/category-headphones/mobile/image-xx99-mark-one.jpg')
            },
            XX59_imgs:{
              desktop:require('@/assets/images/category-headphones/desktop/image-xx59.jpg'),
              tablet:require('@/assets/images/category-headphones/tablet/image-xx59.jpg'),
              mobile:require('@/assets/images/category-headphones/mobile/image-xx59.jpg')
            }
    }
  },
  
};
</script>
