<template>
    <div class="blocks">
        <div style="text-align: left" class="block block-inline block-left skills-block">
            <div class="division">
                <h3 class="label">Technologies</h3>
                <ul class="skills">
                    <li class="skill" v-for="(technology, index) in technologies" :key="index">{{technology.name}}</li>
                </ul>
            </div>
            <div class="division">
                <h3 class="label">Key Skills</h3>
                <ul class="skills">
                    <li class="skill" v-for="(skill, index) in skills" :key="index">{{skill.name}}</li>
                </ul>
            </div>
            
        </div>
    </div>
</template>

<script>
export default {
    name: 'Skills',
    data (){
        return {
            technologies: [
                {
                    name: 'Vue JS, Vuex, Axios',
                },
                {
                    name: 'Node JS, Adonis JS'
                },
                {
                    name: 'ReactJS, Redux'
                },
                {
                    name: 'Laravel'
                },
                {
                    name: 'AWS S3, R53, EC2'
                },
                {
                    name: 'Custom / Headless Wordpress'
                },
                {
                    name: 'SQL Databases'
                },

            ],
            skills: [
                {
                    name: 'HTML, CSS, JavaScript'
                },
                {
                    name: 'jQuery, Ajax'
                },
                {
                    name: 'PHP'
                },  
                {
                    name: 'Bash Scripting'
                },          
                {
                    name: 'Linux Server, VPS'
                },
                {
                    name: 'REST API'
                },
                {
                    name: 'SQL'
                },
            ],
        }
    }
}
</script>