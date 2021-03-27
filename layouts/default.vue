<template>
  <div class="container h-screen relative max-w-7xl m-auto overflow-x-hidden">
    <Navbar class="relative z-10" style="max-width:100%" />
    <Nuxt />
    <a
      class="text-center fixed bottom-0 container max-w-7xl w-full text-white font-bold p-2 block bg-red-600"
      href="mailto:anytec2020@gmail.com?subject=Hi%20CSP%20&Body=I have seen your work and I would like to contact you"
    >
      Contact with Code Solution Panamá
    </a>
  </div>
</template>

<script>
export default {
  created() {
    let cookie = document.cookie;
    if (cookie) {
      this.$store.commit("mystore/loadCart", cookie.split(",").map(Number));
    }
  },
};
</script>

<style>
html,
body {
  overflow-x: hidden;
}
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #2d374817;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
.slick-next{
  background:#e53e3e !important;
  border-radius:50% !important;
}
.slick-prev{
  background:#e53e3e !important;
  border-radius:50% !important;
}
</style>
