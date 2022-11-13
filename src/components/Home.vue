<template>
    <div> 
        <div class="header">
            <Header class="wide"/>
            <NavbarMob :buttons="buttons"/>
        </div>
        <div class="main-frame">
            <div class="info">
                <div class="image">
                    <!-- <img class="png" src="../assets/alien.png" alt=""> -->
                    <!-- <h1 class="initials">A A</h1>
                    <div class="smile"></div> -->
                    <h1 class="initials">{{code}}</h1>
                </div>
                <div class="title">
                    <h1 style="margin-bottom: 12px;">Aziz F</h1>
                    <h3 class="webdev" href="">Web Developer</h3>
                </div>
            </div>
        </div>
        <div class="page-title">
            <h2 style="font-weight: 400; margin-bottom: 0px;">{{this.$route.name}}</h2>
        </div>
        <div class="buttons">
            <router-link is-active="is-active" :class="{'is-still-active': $route.path.includes(button.name.toLowerCase() + '/')}" class="button" v-for="(button, index) in buttons" :key="index" :to="button.url" >{{button.name}}</router-link>
        </div>
        <div class="router-2">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import Header from './Header'
import NavbarMob from './NavbarMob.vue'
export default {
    name: 'Home',
    components: {
        Header,
        NavbarMob
    },
    data() {
        return {
            show: false,
            code: '<>',
            buttons: [
                {
                name: 'Overview',
                url: '/home/overview'
                },
                {
                name: 'Skills & Technologies',
                url: '/home/skills'
                },
                {
                name: 'Projects',
                url: '/home/projects'
                },
                {
                name: 'Contact',
                url: '/home/contacts'
                }
            ]
        }
    }
}
</script>

<style scoped>


</style>