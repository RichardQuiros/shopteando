<template>
  <div
    class="grid grid-cols-none md:grid-cols-2 grid-rows-2 md:grid-rows-none  "
  >
    <div
      class="text-6xl font-bold text-gray-800 h-0 p-5 row-start-2 md:row-start-1 h-auto"
    >
      Nintendo Switch
      <div class="text-base text-gray-600 grid grid-cols-1 h-1">
        <span class="text-xl" lang="en"
          >Better battery,clearer screen, and even more fun.</span
        >
        <div class="flex my-4">
          <img
            class=""
            src="~/assets/img/start.svg"
            width="100px"
	    height="100px"
            alt="calification"
          />(5367) reviews
        </div>
      </div>
      <div class="my-16">
        <button
          @click="add_one()"
          class="ripple border-solid border-2 border-red-800 text-sm text-center text-white font-medium bg-red-700 rounded-md item-center glow"
          style="height:3rem;width:8rem;filter: saturate(1.3);"
        >
          Buy now
        </button>
      </div>
    </div>
    <img
      class="img row-start-1 m-auto"
      src="~/assets/img/consolaSwich.png"
      alt="nintendo switch"
      style="filter: saturate(1.5);"
      width="300px"
      height="300px"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      jsonLd: {
        "@context": "https://schema.org/",
        "@type": "Product",
        name: "Nintendo Switch",
        image:
          "https://www.nintendo.com/content/dam/noa/en_US/images/switch/split-cta-system.png",
        description: `Get the gaming system that lets you play the games you want, wherever you are, however you like.

Includes the Nintendo Switch console and Nintendo Switch dock in black, with contrasting left and right Joy‑Con controllers—one red, one blue. Also includes all the extras you need to get started.

Model number: HAC-001(-01) (product serial number begins with “XKW”)

This model includes battery life of approximately 4.5 - 9 hours*.

*The battery life will depend on the games you play. For instance, the battery will last approximately 5.5 hours for The Legend of Zelda: Breath of the Wild.`,
        brand: "Nintendo",
        gtin13: "0 045496 590086",
        sku: "110477",
        offers: {
          "@type": "Offer",
          url: "https://www.nintendo.com/switch/buy-now/",
          priceCurrency: "USD",
          price: "299.99",
          priceValidUntil: "2021-03-26",
          availability: "https://schema.org/InStock",
          itemCondition: "https://schema.org/NewCondition",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4",
          bestRating: "4",
          worstRating: "3",
          ratingCount: "1",
          reviewCount: "1",
        },
        review: {
          "@type": "Review",
          name: "Richard J",
          reviewBody: "It is an amazing console and also very compact.",
          reviewRating: {
            "@type": "Rating",
            ratingValue: "4",
            bestRating: "4",
            worstRating: "3",
          },
          datePublished: "2020-11-10",
          author: { "@type": "Person", name: "Richard" },
          publisher: { "@type": "Organization", name: "Richard" },
        },
      },
    };
  },
  head() {
    return {
      script: [
        {
          type: "application/ld+json",
          json: this.jsonLd,
        },
      ],
    };
  },
  methods: {
    add_one() {
      this.$store.commit("mystore/addCart", 69);
      document.cookie = `${String(this.$store.state.mystore.cart)}`;
    },
  },
};
</script>

<style scoped>
.img {
  -webkit-animation: zoomeffect 2s forwards;
  -moz-animation: zoomeffect 2s forwards;
  animation: zoomeffect 2s forwards;
  width: 100%;
}

@media screen and (min-width: 768px) {
  .img {
    position: relative;
    top: -8.6rem;
    width: 600px;
    margin: auto;
  }
}

@-webkit-keyframes zoomeffect {
  0% {
    transform: scale(0.5, 0.5);
  }

  55% {
    transform: scale(1.1, 1.1);
  }

  100% {
    transform: scale(1, 1);
  }
}

@keyframes zoomeffect {
  0% {
    transform: scale(0.5, 0.5);
  }

  55% {
    transform: scale(1.1, 1.1);
  }

  100% {
    transform: scale(1, 1);
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
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #fff,
      0 0 50px #fff, 0 0 60px #fff, 0 0 70px #e60073;
  }

  to {
    text-shadow: 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #fff, 0 0 50px #fff,
      0 0 60px #fff, 0 0 70px #fff, 0 0 80px #ff4da6;
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
</style>
