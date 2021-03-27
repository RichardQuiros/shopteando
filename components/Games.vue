<template>
  <div v-if="menuGames" class="slide h-auto relative">
    <div class="font-bold text-gray-800 mb-4" style="width:fit-content">
      <a @click="filterMenu = !filterMenu" class="flex cursor-pointer">
        Featured Games
        <svg
          class="fill-current text-red-700"
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="17"
          viewBox="0 0 24 24"
        >
          <path d="M1 0h22l-9 15.094v8.906l-4-3v-5.906z" />
        </svg>
      </a>
    </div>

    <div
      @mouseleave="filterMenu = false"
      @mouseover="filterMenu = true"
      v-if="filterMenu"
      class="absolute p-5 inset-y-0 bg-white shadow-lg mr-2 mt-10 v-24 w-64 z-10 grid"
    >
      <span
        @click="returnAll()"
        class="font-black border rounded-md p-2 border-gray-600 text-gray-600 hover:border-red-700 hover:bg-red-700 hover:text-white cursor-pointer uppercase my-2 text-center"
        >ALL</span
      >
      <span
        @click="filterGames('new')"
        class="font-black border rounded-md p-2 border-gray-600 text-gray-600 hover:border-red-700 hover:bg-red-700 hover:text-white cursor-pointer uppercase my-2 text-center"
        >NEW</span
      >
      <span
        @click="filterGames('pre')"
        class="font-black border rounded-md p-2 border-gray-600 text-gray-600 hover:border-red-700 hover:bg-red-700 hover:text-white cursor-pointer uppercase my-2 text-center"
        >PRE-order</span
      >
    </div>
    <VueSlickCarousel v-bind="setting">
      <a
        @click="add_game(item.id)"
        class="cursor-pointer transform hover:scale-95 transition duration-150 ease-in-out"
        v-for="(item, key) in gamesFilter"
        :key="key"
      >
        <img class="rounded-3xl shadow-lg object-cover" :alt="`Nintento games ${item.name}`" :src="getImage(item)" />
        <svg
          v-if="$store.state.mystore.cart.includes(item.id)"
          class="absolute inset-0" 
          xmlns="http://www.w3.org/2000/svg"
          width="74"
          height="74"
          viewBox="0 0 24 24"
        >
          <path
            d="M10 20.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm6.305-15l-3.432 12h-10.428l-3.777-9h-2.168l4.615 11h13.239l3.474-12h1.929l.743-2h-4.195zm-5.805 0h-2v-2h-2v2h-2v2h2v2h2v-2h2v-2zm0 5h-6v2h6v-2zm0 3h-6v2h6v-2z"
            fill="red"
          />
        </svg>
        <div class="grid grid-colums-1 mt-4">
          <div class="flex justify-between">
            <span :class="`${item.color} font-bold`">{{ item.name }}</span>
            <span
              v-if="item.state == 'new'"
              class="text-green-600 uppercase pr-5 text-xs font-bold"
              >new</span
            >
            <span
              v-if="item.state == 'pre'"
              class="text-gray-600 uppercase pr-5 text-xs font-bold"
              >pre-order</span
            >
          </div>
          <span class="text-gray-600 text-lg font-medium"
            >${{ item.price }}</span
          >
        </div>
      </a>
    </VueSlickCarousel>
  </div>
</template>
 
<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  name: 'carousel',
  components: { VueSlickCarousel },
  data() {
    return {
      menuGames: true,
      filterMenu: false,
      cart: this.$store.state.mystore.cart,
      setting: {
        slidesToShow: 4,
        centerPadding: '20px',
        arrows: true,
        infinite: true,
        autoplay: true,
        speed: 2000,
        centerMode: true,
        autoplaySpeed: 5000,
        pauseOnDotsHover: true,
        pauseOnHover: true,
        slidesToScroll: 1,
        touchThreshold: 5,
        responsive: [
          {
            breakpoint: 1324,
            settings: {
              slidesToShow: 3,
              centerPadding: '40px',
            },
          },
          {
            breakpoint: 1000,
            settings: {
              slidesToShow: 2,
              centerPadding: '20px',
            },
          },
          {
            breakpoint: 770,
            settings: {
              slidesToShow: 2,
              centerPadding: '0px',
              centerMode: true,
            },
          },
        ],
      },
      gamesFilter: this.$store.state.mystore.games,
    }
  },
  methods: {
    getImage(item) {
      return require(`~/assets/img/${item.img}`)
    },
    filterGames(filt) {
      this.gamesFilter = this.$store.state.mystore.games.filter((item) => {
        return item.state == filt
      })
    },
    returnAll(){
      this.menuGames = false
      let state = this.gamesFilter[0].state
      this.gamesFilter = this.gamesFilter.concat(this.$store.state.mystore.games.filter((item) => {
        return item.state != state
      }))
      setTimeout(()=>this.menuGames = true,100)
    },
    add_game(id) {
      this.$store.commit('mystore/addCart', id)
      document.cookie = String(this.$store.state.mystore.cart)
    },
  },
}
</script>

<style scoped>
img {
  height: 150px;
  width: 300px;
}
:focus {
  outline: none;
}



@media screen and (max-width:380px){
  .slide{
    margin-top:80px;
  }
}
</style>
