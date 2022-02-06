<template>
    <div class="flexbox">
        <div class="image">
            <img src="../assets/goose_transparent_invert.png">
        </div>
        <div class="form">
            <div :style="{ textAlign: 'left', marginLeft: '15px', marginTop: '5px' }">
                <img src="../assets/goose_transparent.png" width="50px">
                <span :style="{ fontSize: 'large', fontWeight: 'bold' }">Geesebunch</span>
            </div>
            <br/>
            <h1 class="opening">
                Geesebunch - Schnattere drauf los
            </h1>
            <h2 class="opening">
                Die neue Form sich zu verbinden
            </h2>
            <br/>
            <Login :style="{ marginLeft: '10%', marginRight: '10%' }"/>
            <br/>
            <Registration :style="{ marginLeft: '10%', marginRight: '10%' }"/>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Login from '../components/Login.vue'
import Registration from '../components/Registration.vue'

export default Vue.extend({
    name: 'LoginView',
    components: {
        Login,
        Registration,
    }
})
</script>

<style scoped>
.flexbox {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    background: white;
}
.image {
    width: 50%;
    background: #4fdc4f;
}
.form {
    width: 50%;
}
.opening {
    font-weight: bold;
    text-align: left;
    margin: 20px;
}
</style>
