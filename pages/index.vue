<template>
  <div class="pb-20">
    <Banner class="w-full md:mt-20"/>
    <Games class="px-10 w-full"/>
  </div>
</template>

<style>
/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
::-webkit-resizer{
  height:50px;
}
</style>

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



