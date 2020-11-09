<template>
  <div class="container mx-auto" style="max-width:100%">
    <ShapeCir style="position:absolute;overflow:hidden;max-width:100%" baseSize="40rem" posY="-57rem" posX="60%"/>

    <NavNitento class="z-10" style="max-width:100%"/>   
    
    <BanSwitch class="transform scale-90 mt-20 " style="max-width:100%" />
    <SlideGameNintento class="transform scale-90 " style="max-width:100%"/>


  </div>
</template>

<script>
export default {
  data() {
    return {
      cookie: ''
    }
  },
  created() {
    this.cookie = document.cookie
    console.log(this.cookie)
  },
}
</script>



