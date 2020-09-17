<template>
    <div> 
        <div class="header">
            <Header/>
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
                <div class="inner-title">
                    <h1>Aziz Aznabakiyev</h1>
                    <h3 class="webdev" href="">Web Developer</h3>
                </div>
            </div>
        </div>
    </div>
    <div class="buttons">
      <router-link is-active="is-active" class="button" v-for="(button, index) in buttons" :key="index" :to="button.url" >{{button.name}}</router-link>
    </div>
    <div class="router-2">
      <router-view></router-view>
    </div>
    </div>
</template>

<script>
import Header from './Header'
export default {
    name: 'Home',
    components: {
        Header
    },
    data() {
        return {
            code: ' </>',
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