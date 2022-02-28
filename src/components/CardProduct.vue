<template>
    <div class="cardProduct" :class="{'cardProduct--reverse':product.isReverse}">
        <div class="cardProduct__img">
        <img :src="product.imgs.desktop" :class="{'size-desktop':product.imgs.desktop}" alt="product-img">
        <img :src="product.imgs.tablet"  :class="{'size-tablet':product.imgs.tablet}" alt="product-img">
        <img :src="product.imgs.mobile"   :class="{'size-mobile':product.imgs.mobile}" alt="product-img">
        </div>
        <div class="cardProduct__text">
            
            <h2><strong v-if="product.newProduct">NEW PRODUCT</strong>{{product.title}}</h2>
            <p>{{product.description}}</p>
            <button>SEE PRODUCT</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "CardProduct",
    props:{
       product:Object
    }
}
</script>

<style>
.cardProduct--reverse{
    flex-direction: row-reverse;
}

@media only screen and (max-width: 991px){
    .cardProduct--reverse{
    flex-direction: column;
}
}
</style>