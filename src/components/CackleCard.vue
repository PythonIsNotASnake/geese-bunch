<template>
    <div>
        <md-card md-with-hover>
        <md-ripple>
            <md-card-header>
            <div class="md-title" :style="{ fontSize: 'xx-large', lineHeight: '2.0', textAlign: 'left', marginLeft: '5%' }">{{$data.author}} cackled {{$data.subject}}</div>
            </md-card-header>

            <md-card-content :style="{ fontSize: 'x-large', lineHeight: '2.0', textAlign: 'left', marginLeft: '5%' }">
            {{$data.content}}
            </md-card-content>

            <div class="phone-viewport">
                <md-bottom-bar class="md-accent" md-sync-route>
                    <md-bottom-bar-item disabled v-if="pressedDislike || pressedFav || pressedCelebration || pressedOnFire">
                        <md-badge class="md-primary" :md-content=$data.likes>
                            <md-button class="md-icon-button">
                                <md-icon>thumb_up</md-icon>
                            </md-button>
                        </md-badge>
                    </md-bottom-bar-item>
                    <md-bottom-bar-item v-else @click="like()">
                        <md-badge class="md-primary" :md-content=$data.likes>
                            <md-button class="md-icon-button">
                                <md-icon>thumb_up</md-icon>
                            </md-button>
                        </md-badge>
                    </md-bottom-bar-item>

                    <md-bottom-bar-item  disabled v-if="pressedLike || pressedFav || pressedCelebration || pressedOnFire">
                        <md-badge class="md-primary" :md-content=$data.dislikes>
                            <md-button class="md-icon-button">
                                <md-icon>thumb_down</md-icon>
                            </md-button>
                        </md-badge>
                    </md-bottom-bar-item>
                    <md-bottom-bar-item v-else @click="dislike()">
                        <md-badge class="md-primary" :md-content=$data.dislikes>
                            <md-button class="md-icon-button">
                                <md-icon>thumb_down</md-icon>
                            </md-button>
                        </md-badge>
                    </md-bottom-bar-item>

                    <md-bottom-bar-item  disabled v-if="pressedLike || pressedDislike || pressedCelebration || pressedOnFire">
                        <md-badge class="md-primary" :md-content=$data.favorites>
                            <md-button class="md-icon-button">
                                <md-icon>favorite</md-icon>
                            </md-button>
                        </md-badge>
                    </md-bottom-bar-item>
                    <md-bottom-bar-item v-else @click="fav()">
                        <md-badge class="md-primary" :md-content=$data.favorites>
                            <md-button class="md-icon-button">
                                <md-icon>favorite</md-icon>
                            </md-button>
                        </md-badge>
                    </md-bottom-bar-item>

                    <md-bottom-bar-item  disabled v-if="pressedLike || pressedDislike || pressedFav || pressedOnFire">
                        <md-badge class="md-primary" :md-content=$data.celebrations>
                            <md-button class="md-icon-button">
                                <md-icon>celebration</md-icon>
                            </md-button>
                        </md-badge>
                    </md-bottom-bar-item>
                    <md-bottom-bar-item v-else @click="celebrate()">
                        <md-badge class="md-primary" :md-content=$data.celebrations>
                            <md-button class="md-icon-button">
                                <md-icon>celebration</md-icon>
                            </md-button>
                        </md-badge>
                    </md-bottom-bar-item>

                    <md-bottom-bar-item  disabled v-if="pressedLike || pressedDislike || pressedFav || pressedCelebration">
                        <md-badge class="md-primary" :md-content=$data.onFires>
                            <md-button class="md-icon-button">
                                <md-icon>local_fire_department</md-icon>
                            </md-button>
                        </md-badge>
                    </md-bottom-bar-item>
                    <md-bottom-bar-item v-else @click="fireUp()">
                        <md-badge class="md-primary" :md-content=$data.onFires>
                            <md-button class="md-icon-button">
                                <md-icon>local_fire_department</md-icon>
                            </md-button>
                        </md-badge>
                    </md-bottom-bar-item>
                </md-bottom-bar>
                </div>
        </md-ripple>
        </md-card>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: 'CackleCard',
    data: function () {
        return {
            author: 'Bob Dylan',
            subject: 'Betreff',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non.',
            pressedLike: false,
            pressedDislike: false,
            pressedFav: false,
            pressedCelebration: false,
            pressedOnFire: false,
            likes: 0,
            dislikes: 0,
            favorites: 0,
            celebrations: 0,
            onFires: 0
        }
    },
    methods: {
        like: function () {
            if (this.$data.pressedLike) {
                this.$data.likes--;
                this.$data.pressedLike = false;
            } else {
                this.$data.likes++;
                this.$data.pressedLike = true;
            }
        },
        dislike: function () {
            if (this.$data.pressedDislike) {
                this.$data.dislikes--;
                this.$data.pressedDislike = false;
            } else {
                this.$data.dislikes++;
                this.$data.pressedDislike = true;
            }
        },
        fav: function () {
            if (this.$data.pressedFav) {
                this.$data.favorites--;
                this.$data.pressedFav = false;
            } else {
                this.$data.favorites++;
                this.$data.pressedFav = true;
            }
        },
        celebrate: function () {
            if (this.$data.pressedCelebration) {
                this.$data.celebrations--;
                this.$data.pressedCelebration = false;
            } else {
                this.$data.celebrations++;
                this.$data.pressedCelebration = true;
            }
        },
        fireUp: function () {
            if (this.$data.pressedOnFire) {
                this.$data.onFires--;
                this.$data.pressedOnFire = false;
            } else {
                this.$data.onFires++;
                this.$data.pressedOnFire = true;
            }
        }
    }
})
</script>

<style scoped>
.md-card {
    width: 80%;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
}
</style>
