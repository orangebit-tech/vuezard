<template>
    <div>
        <div class="blocks">
            <div class="block block-inline block-left summary">
                <h3 class="">About</h3>
                <p>{{text.text}}</p>
            </div>
            <div class="block block-inline block-right">
                <h3 class="">Activity</h3>
                <div v-if="this.getLoading" class="loading">
                    <half-circle-spinner
                        :animation-duration="1000"
                        :size="50"
                        color="#66FCF1"
                        class="spinner"
                    />
                </div>
                <div v-else class="chart-widget">
                    <!-- <div class="gh-contributions">
                        <div class="contribs">
                            <h5 class="widget-title">Yearly Contributions: </h5>
                            <a class="widget-number">{{this.getContributions}}</a>
                        </div>
                    </div> -->
                    <div class="chart">
                        <area-chart 
                            :legend="false"
                            style="opacity: 0.8"
                            :points="false"
                            height="150px" 
                            
                            :colors="['#66FCF1']" 
                            :data="this.getChartData"
                            >
                        </area-chart>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import { HalfCircleSpinner } from 'epic-spinners'
// import TrendChart from "vue-trend-chart";
export default {
    name: 'Overview',
    components: {
        HalfCircleSpinner,
    },
    data(){
        return {
            text: {
                text: 'I am a full-stack web developer who is passionate about technology. I like to write code and make dynamic web applications with my teammates to make the best contribution to share with the world. I gained hands-on experience working with HTML, CSS, javascript, node, vuejs, and vuex. The culture and experience of that, has given me the drive to learn more and be a better developer. I am excited to see what the future holds. ',
                lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
            }
        }
    },
    computed: {
        ...mapGetters({
            getUser:            'getUser',
            getLoading:         'getLoading',
            getContributions:   'getContributions',
            getChartData:       'getChartData'
        }),
    },
    methods: {
        ...mapActions([
            'getActivity'
        ]),
        async show(){
            console.log(await this.getActivity())
        }
    },
    created(){
        this.show()
    }
}
</script>