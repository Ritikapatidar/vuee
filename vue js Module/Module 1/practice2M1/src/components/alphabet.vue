<script>
import {ref, reactive} from 'vue';
export default{
setup(){
    const alphabet=reactive([])
    for(let i=65; i<=90; i++)
    {
       alphabet.push(String.fromCharCode(i))
    }
    return {alphabet}
}
}
</script>

<template>
  <h2><span v-for="alpha in alphabet">{{alpha}} </span></h2>
  <h2><span v-for="alpha in alphabet">{{alpha.toLowerCase()}} </span></h2>
</template>