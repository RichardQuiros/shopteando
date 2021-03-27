<template>
<div class="grid place-items-center" style="height:90vh">
<nuxt-link to="/">
    <ShapeCircle text="404" baseSize="8rem" color="text-white" fontSize="3rem" posY="0" posX="0"/>
    <span class="m-auto text-white relative return">Return to the store</span>
</nuxt-link>
    </div>
</template>

<style scoped>
  .return{
    opacity:0;
    animation: fade 2s 2s  forwards; 
  }

  @keyframes fade{
    to{opacity:1;}
  }
</style>
