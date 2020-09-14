<template>
    <div>
        <div class="main-frame">
      <div class="info">
        <div class="image" :style="{'background-image': `url(${imageUrl.sample})`}">
            <!-- <img class="png" src="../assets/alien.png" alt=""> -->
            <h1 class="initials">A A</h1>
            <div class="smile"></div>
        </div>
        <div class="title">
          <div class="inner-title">
            <h1>Aziz Aznabakiyev</h1>
            <h3 class="green" href="">Web Developer | UX Engineer</h3>
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
export default {
    name: 'Home',
    data() {
        return {
            imageUrl:{
                sample: require( '../assets/img_190852.png')
            },
            buttons: [
                {
                name: 'Overview',
                url: '/home/overview'
                },
                {
                name: 'Job Experience',
                url: '/home/jobexperience'
                },
                {
                name: 'Skills',
                url: '/home/skills'
                },
                {
                name: 'Projects',
                url: '/home/projects'
                },
                {
                name: 'Contacts',
                url: '/home/contacts'
                }
            ]
        }
    }
}
</script>

<style scoped>


</style>