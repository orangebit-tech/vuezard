<template>
    <div class="blocks project-blocks" style="">
        <router-link v-for="(project, index) in projects" :key="index" class="project" :to="project.url">
            <div class="block block-inline  project-widget">
                <!-- <h3 v-if='project.name !== "GixCore"'>{{project.name}}</h3> -->
                <a v-if='project.name == "GixCore"' class="gc-logo" ><h3 class="gixcore">Gix<h3 class="gixcore" style="color: #1997C6 !important">Core</h3></h3></a>
                <a v-if='project.name == "The Assistant"' class="gc-logo" href="/"><img :src="taLogo.sample" alt="The Assistant Logo"></a>
                <a v-if='project.name == "Electrominer"' class="gc-logo" href="/"><img style="margin-top: -3px"  :src="elLogo.sample" alt="Electrominer Logo"></a>
            </div>
        </router-link>
        <div v-if="$route.name  ==  'Gixcore'" class="description">
            <p>
                <a>Gixcore</a> is a web application that lets users build a custom PC. The app has a products compatibility checking feature, API connection to Amazon and Newegg, has a custom CMS. Built on <a>Vue JS</a> and <a>Adonis JS</a> frameworks.
            </p>
        </div>
        <div v-if="$route.name == 'The Assistant'" class="description">
            <p>
                <a>The Assistant</a> is a web application connects customers with local businesses, services and freelancers. Made on <a>Vue JS</a> and headless <a>WordPress</a>
                
            </p>
        </div>
        <div v-if="$route.name == 'Electrominer'" class="description">
            <p>
                Cryptocurrency mining web platform with own hardware and public access(POS). Participated in datacenter creation, network implementation, building local API server and further cloud integration. Coordinated a team of frontend/backend/mobile developers, gaining hands-on experience in building multilingual website(Laravel), news page with Twitter API integration, building user's dashboard (AngularJS) and third party API providers integration. Work with domains, subdomains, AWS and VPS setup and management.  Managed development process of a multiplatform mobile app(Ionic Cordova JS). Hands-on assistance in writing and deploying Ethereum Smart Contracts.
               
                <a style=" text-decoration: none; color: #C5C6C8; display: block" href='https://demoapp.rocks/electrominer' class="dynamic-link inline-link" >View <font-awesome-icon class="external-link-icon" style="margin-left: 6px;" v-if='link!==""' :icon="['fas', 'external-link-alt']" /></a>
              
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Projects',
    data(){
        return {
            taLogo: {
                sample: require('../assets/ta-logo.png')
            },
            elLogo: {
                sample: require('../assets/el-logo.png')
            },
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
        // console.log(this.$parent)
    }

}
</script>