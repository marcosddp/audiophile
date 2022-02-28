<template>
  <div class="thereeProducts">
     <router-link to="/headphones" class="thereeProducts__product">
     
        <img
          src="@/assets/images/shared/desktop/image-headphones.png"
          alt="image-headphones"
        />
        <h3>HEADPHONES</h3>
        <p>SHOP
             <img
          src="@/assets/images/shared/desktop/icon-arrow-right.svg"
          alt="icon-arrow-right" style="width:8px; height:12px;"
        />
        </p>
      
   </router-link>

    <router-link to="/speakers"   class="thereeProducts__product">
     
        <img
          src="@/assets/images/shared/desktop/image-speakers.png"
          alt="image-speakers"
        />
        <h3>SPEAKERS</h3>
        <p>SHOP
             <img
          src="@/assets/images/shared/desktop/icon-arrow-right.svg"
          alt="icon-arrow-right" style="width:8px; height:12px;"
        />
        </p>
      
    </router-link>

    <router-link to="/earphones" class="thereeProducts__product" >
      
        <img
          src="@/assets/images/shared/desktop/image-earphones.png"
          alt="image-earphones"
        />
        <h3>EARPHONES</h3>
        <p>SHOP <img
          src="@/assets/images/shared/desktop/icon-arrow-right.svg"
          alt="icon-arrow-right" style="width:8px; height:12px;"
        /></p>
      
   </router-link>
  </div>
</template>

<style>
/*1110width*/



.thereeProducts {
  /*margin:0 150px;*/
display: flex;
 flex-wrap: nowrap;
 /*justify-content:space-between;*/
 width:100%;
 /* display: flex;
  margin: 0 auto;
  flex-wrap: nowrap;*/
  /*margin-top: 250px;
  margin-bottom: 250px;*/
  max-width: 1205px;
  height: 170px;
  /*padding: 0 3.25%;*/
}

.thereeProducts a {
   
    color: inherit;
    -webkit-text-decoration: inherit;
    text-decoration: inherit;
}

/*90 100*/
.thereeProducts__product {
  position: relative;
  flex: 1 1 350px;

  background: #f1f1f1;

  border-radius: 9.25px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.thereeProducts__product:first-child {
  margin-right: 2.7%;
}
.thereeProducts__product:last-child {
  margin-left: 2.7%;
}

.thereeProducts__product img {
  position: absolute;
  top: -57px;
  width: 110px;
  height: 130px;
  object-fit: cover;
}

.thereeProducts__product h3 {
  margin-top: 78px;
  letter-spacing: 1.1px;
}

.thereeProducts__product p {
  margin-top: 10px;
  color: rgba(0, 0, 0, 0.5);
  font-weight: bold;
  font-size: 12.75px;
  position:relative;
}

.thereeProducts__product p img{
       position: absolute;
    top: 2.8px;
    left: 45px;
}


.thereeProducts__product p:hover{
    color: #D27244;
}

</style>

<script>

export default {
    name: "ThreeProducts",
   
}
</script>