<template>
    <div>
        <router-link v-for="(project, index) in projects" :key="index" class="project" :to="project.url">
            <div class="block block-inline project-widget">
                <h3>{{project.name}}</h3>
            </div>
        </router-link>
        <div v-if="$route.name == 'Gixcore'" class="description">
            <p>
                <a>Gixcore</a> is a web application that lets users build a custom PC. The app has a products compatibility check feature, API connection to Amazon and Newegg, custom CMS. Built on <a>Vue JS</a> and <a>Adonis JS</a> frameworks.
            </p>
        </div>
        <div v-if="$route.name == 'The Assistant'" class="description">
            <p>
                <a>The Assistant</a> is a web application connects customers with local businesses and freelancers. Made on <a>Vue JS</a> and headless <a>WordPress</a>
            </p>
        </div>
        <div v-if="$route.name == 'Electrominer'" class="description">
            <p>
                lorem ipsum Electrominer...
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Projects',
    data(){
        return {
            projects: [
                {
                    name: "GixCore",
                    url: '/home/projects/gixcore',
                },
                {
                    name: "The Assistant",
                    url: '/home/projects/theassistant',
                },
                {
                    name: "Electrominer",
                    url: '/home/projects/electrominer',
                },
                
            ]
        }
    },
    methods: {

    },
    created(){
        console.log(this.$parent)
    }

}
</script>