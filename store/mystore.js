export const state = () => ({
  cart: [],
  games: [{img:'banoverwarch.jpg',name:'Overwarch',color:'text-orange-600',price:'59.99',state:null,id:0},
  {img:'banugoosegame.jpg',name:'Untitle Goose Game',color:'text-blue-600',price:'19.99',state:'new',id:1},
  {img:'banpokemonswsh.jpg',name:'Pokémon Sword & Shield',color:'text-pink-600',price:'59.99',state:null,id:2},
  {img:'banluigisma3.jpg',name:"Luigi's Mansion 3" ,color:'text-green-600',price:'59.99',state:null,id:3},
  {img:'bananimacross.jpg',name:"Animal Crossing" ,color:'text-yellow-600',price:'59.99',state:'pre',id:4},
  {img:'banpapermario.jpg',name:"Paper Mario" ,color:'text-red-600',price:'59.99',state:'new',id:5}]
})


export const mutations = {
  addCart(state,payload){
    if(state.cart.includes(payload)){
      state.cart = state.cart.filter((item) =>{return item != payload})
    }else{
    state.cart.push(payload) 
  }
},
loadCart(state,cookie){
  state.cart = cookie
}
}
