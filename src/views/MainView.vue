<template>
    <div>
      <MenuBar></MenuBar>
      <div :style="{ height: '70px' }"></div>
      <div>{{$cookies.get('email')}}</div>
      <div>{{$cookies.get('preName')}}</div>
      <div>{{$cookies.get('lastName')}}</div>
      <div>{{$cookies.get('password')}}</div>
      <div v-for="card in cards" :key="card" :style="{marginLeft: '10%', marginRight: '10%'}">
        <CackleCard/>
      </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import MenuBar from '../components/MenuBar.vue'
import CackleCard from '../components/CackleCard.vue'

export default Vue.extend({
    name: 'MainView',
    components: {
      MenuBar,
      CackleCard,
    },
    data: () => ({
      cards: [1,2,3,4,5,6,7,8,9]
    })
});
</script>

<style scoped>

</style>
