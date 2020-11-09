<template>
<div :class="`circle p-4 h-full ${bgColor} w-full font-bold ${color} rounded-full text-center transform items-center`" :style="`height:${baseSize};width:${baseSize};position:static;top:${posY};right:${posX};`">
   <p :style="`font-size:${fontSize}`">{{text}}</p>
</div>
</template>

<script>
export default {
    props:{
        text: {default:'',
                type:String},
        bgColor: {default:'bg-red-600',
                type:String},
        color: {default:'text-blue-500',
                type:String},
        baseSize: {default:'20rem',
                type:String},
        fontSize: {default:'7rem',
                type:String},
        posX: {default:'auto',
                type:String},
        posY: {default:'auto',
                type:String}
    }
}
</script>

<style scoped>
.circle{
    -webkit-animation: zoomeffect 2s forwards;
    -moz-animation: zoomeffect 2s forwards;
    animation:zoomeffect 2s forwards;
}

@-webkit-keyframes zoomeffect{
    0%{
        transform: scale(1,1);
    }

    100%{
        transform: scale(2.2,2.2);
    }

}

@keyframes zoomeffect{
    0%{
        transform: scale(1,1);
    }

    100%{
        transform: scale(2.2,2.2);
    }

}


</style>