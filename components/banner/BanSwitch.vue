<template>
<div class="grid grid-cols-1 md:grid-cols-2 ">
  <img class="img visible md:hidden imgsm" src="~/assets/img/consolaSwich.png" style="filter: saturate(1.5);" width="500" height="600"/>
    <div class="text-6xl font-bold text-gray-800 h-0 p-5">Nintento Switch
        <div class="text-base text-gray-600 grid grid-cols-1 h-1">
        <span class="text-xl ">Better battery,clearer screen, and even more fun.</span>
        <div class="flex my-4">
        <span class="mx-1" v-for="n in 5" :key="n"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" fill="#fcd055"/> </svg></span>(5367) review
        </div>
        </div>
        <div class="my-16">
        <button @click="add_one()" class="ripple border-solid border-2 border-red-800 text-sm text-center text-white font-medium bg-red-700 rounded-md item-center glow" style="height:3rem;width:8rem;filter: saturate(1.3);">Buy now</button>
        
        </div>
    </div>

        <img class="img invisible md:visible" style="position:relative;top:-8.3rem;filter: saturate(1.5);" src="~/assets/img/consolaSwich.png" width="500" height="600"/>
        

    
</div>
</template>

<script>
export default {
  methods:{
    add_one(){
      this.$store.commit('mystore/addCart',69)
      document.cookie = `${String(this.$store.state.mystore.cart)}`
    }
  }
}
</script>

<style scoped>
.img{
    -webkit-animation: zoomeffect 2s forwards;
    -moz-animation: zoomeffect 2s forwards;
    animation:zoomeffect 2s forwards;
}

@-webkit-keyframes zoomeffect{
    0%{
        transform: scale(0.5,0.5);
    }

    55%{
        transform: scale(1.1,1.1);
    }

    100%{
        transform: scale(1,1);
    }

}

@keyframes zoomeffect{
    0%{
        transform: scale(0.5,0.5);
    }

    55%{
        transform: scale(1.1,1.1);
    }

    100%{
        transform: scale(1,1);
    }

}

.glow {
  color: #fff;
  text-align: center;
  -webkit-animation: glow 1s ease-in-out infinite alternate;
  -moz-animation: glow 1s ease-in-out infinite alternate;
  animation: glow 1s ease-in-out infinite alternate;
}

@-webkit-keyframes glow {
  from {
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #fff, 0 0 50px #fff, 0 0 60px #fff, 0 0 70px #e60073;
  }
  
  to {
    text-shadow: 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #fff, 0 0 50px #fff, 0 0 60px #fff, 0 0 70px #fff, 0 0 80px #ff4da6;
  }
}
 .ripple {
  background-position: center;
  transition: background 0.8s;
}

.ripple:active {
  background-color: #ff9898;
  background-size: 100%;
  transition: background 0s;
}

/* Button style */
button {
  border: none;
  border-radius: 2px;
  padding: 12px 18px;
  font-size: 16px;
  text-transform: uppercase;
  cursor: pointer;
  color: white;
  box-shadow: 0 0 4px #999;
  outline: none;
}


@media (max-width: 768px) {.imgsm{visibility: gonne;}}

</style>