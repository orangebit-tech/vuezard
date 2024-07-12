<template>
    <div class="blocks project-blocks" style="">
        <router-link v-for="(project, index) in projects" :key="index" class="project" :to="project.url">
            <div class="block block-inline  project-widget">
                <!-- <h3 v-if='project.name !== "GixCore"'>{{project.name}}</h3> -->
                <a v-if='project.name == "GixCore"' class="gc-logo" ><h3 class="gixcore">Gix<h3 class="gixcore" style="color: #1997C6 !important">Core</h3></h3></a>
                <a v-if='project.name == "appops.pro"' style="font-size: 32px; color: #C5C6C8;" class="gc-logo" href="/">appops.pro</a>
            </div>
        </router-link>
        <div v-if="$route.name  ==  'Gixcore'" class="description">
            <p>
                <a>Gixcore</a> is a web application that lets users build a custom PC. The app has a products compatibility checking feature, API connection to Amazon and Newegg, has a custom CMS. Built on <a>Vue JS</a> and <a>Adonis JS</a> frameworks.
                <a style=" text-decoration: none; color: #C5C6C8; display: block" href='https://alpha.gixcore.com' target="_blank" class="dynamic-link inline-link" >View <font-awesome-icon class="external-link-icon" style="margin-left: 6px;" v-if='link!==""' :icon="['fas', 'external-link-alt']" /></a>

            </p>
        </div>
        <div v-if="$route.name == 'appops.pro'" class="description">
            <p>
                <a>appops.pro</a> is web-based SQL management tool on <a>EC2/RDS</a> for writing and executing queries, now integral to the technical evaluation of new hires. Made on <a>Vue JS</a>
                <a style=" text-decoration: none; color: #C5C6C8; display: block" href='https://appops.pro' target="_blank" class="dynamic-link inline-link" >View <font-awesome-icon class="external-link-icon" style="margin-left: 6px;" v-if='link!==""' :icon="['fas', 'external-link-alt']" /></a>

            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Projects',
    data(){
        return {
            elLogo: {
                sample: require('../assets/el-logo.png')
            },
            projects: [
                {
                    name: "GixCore",
                    url: '/home/projects/gixcore',
                },
                {
                    name: "appops.pro",
                    url: '/home/projects/appops',
                }
                
            ]
        }
    }
}
</script>