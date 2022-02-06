<template>
    <div>
      <md-toolbar class="flexbox main-toolbar" :style="{ background: '#4fdc4f' }">
        <md-button class="md-icon-button" @click="showNavigation = true">
          <md-icon>menu</md-icon>
        </md-button>
        
          <span>
            <img src="../assets/goose_transparent_invert.png" width="50vw" >
            Startseite
          </span>
          <span>
            <md-menu md-size="auto" md-align-trigger>
              <md-button md-menu-trigger>
                <md-avatar class="md-avatar-icon md-small" :style="{ background: 'blue' }">{{getProfileInitials()}}</md-avatar>
              </md-button>

              <md-menu-content class="main-menu">
                <md-menu-item @click="goToProfile()">Profil</md-menu-item>
                <md-menu-item @click="logout()">Abmelden</md-menu-item>
              </md-menu-content>
            </md-menu>
          </span>
      </md-toolbar>

      <md-drawer class="main-menu" :md-active.sync="showNavigation" md-swipeable>
        <md-toolbar class="md-transparent" md-elevation="0">
          <img src="../assets/goose_transparent.png" width="50vw" >
          <span class="md-title">Geesebunch</span>
        </md-toolbar>

        <md-list>
          <md-list-item @click="goToMain()">
            <md-icon>pets</md-icon>
            <span class="md-list-item-text">Startseite</span>
          </md-list-item>

          <md-list-item @click="goToSettings()">
            <md-icon>settings</md-icon>
            <span class="md-list-item-text" >Einstellungen</span>
          </md-list-item>
        </md-list>
      </md-drawer>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: 'MenuBar',
    data: () => ({
      showNavigation: false
    }),
    methods: {
      getProfileInitials: function () {
        return this.$cookies.get('preName').charAt(0) + this.$cookies.get('lastName').charAt(0);
      },
      logout: function () {
        this.$router.push({ path: '/' });
      },
      goToProfile: function () {
        this.$router.push({ path: '/profile' });
      },
      goToMain: function () {
        this.$router.push({ path: '/main' });
      },
      goToSettings: function () {
        this.$router.push({ path: '/settings' });
      }
    }
})
</script>

<style scoped>
.flexbox {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.main-toolbar {
  position: fixed;
  z-index: 1000;
  left: 0;
  right: 0;
}
.main-menu {
  position: fixed;
  z-index: 1001;
}

</style>
