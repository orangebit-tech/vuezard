<template>
    <div>
        <div class="blocks">
            <div class="block block-inline block-left summary">
                <h3 >About</h3>
                <p>{{text.text}}</p>
            </div>
            <div class="block block-inline block-right">
                <h3 style="padding-bottom: 20px; display: flex; justify-content: center;">
                    Github Activity
                    <a target="_blank" class="dynamic-link inline-link" href="https://github.com/orangebit-tech">
                        <font-awesome-icon class="external-link-icon" style="margin-left: 10px;" v-if='link!==""' :icon="['fas', 'external-link-alt']" />
                    </a>
                </h3>                
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
                            style="opacity: 0.8"
                            :points="false"
                            height="170px" 
                            :colors='["#66FCF1"]'
                            :data="this.getChartData"
                            :dataset='{borderWidth: 3, borderColor: "#45A29F"}'
                            :library= lib
                            >
                        </area-chart>
                        <div class="y-axis">
                            <a style='float: left'>{{this.month[date.monthOne()-2]}}</a>
                            <a>{{this.month[date.monthOne()-1]}}</a> 
                            <a style="float: right">{{this.month[date.monthOne()]}}</a>
                        </div>
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
                text: 'I\'ve been deeply involved in tech, building systems from scratch and creating tools that streamline our workflows. My toolkit includes  Node.js, Vue.js, Express.js, Docker, Linux, SQL and AWS, which I\'ve used not just for the sake of technology, but to solve real problems and make a difference. Developing applications that address real-world challenges has been my focus, alongside a commitment to continuous learning and improvement. It\'s never been about the titles for me, but about the journey, the collaboration, and the meaningful impact we can make.',
                lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
            },

            // Chart Styling
            lib: {
                legend: {
                    labels: {
                        fontColor: "#C5C6C8"
                    }
                },
                scales: {
                    yAxes: [
                        {
                        ticks: { fontColor: "#C5C6C8" },
                        scaleLabel: { fontColor: "#202833" }
                        }
                    ],
                    xAxes: [
                        {
                            ticks: { fontColor: "#0B0C10"}
                        }
                    ]
                }
            },

            date: {
                monthOne: () => new Date().getMonth(),
            },
            month: [],
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
           await this.getActivity()
        }
    },
    beforeMount(){
        this.month[0] = "Jan";
        this.month[1] = "Feb";
        this.month[2] = "Mar";
        this.month[3] = "Apr";
        this.month[4] = "May";
        this.month[5] = "Jun";
        this.month[6] = "Jul";
        this.month[7] = "Aug";
        this.month[8] = "Sep";
        this.month[9] = "Oct";
        this.month[10] = "Nov";
        this.month[11] = "Dec";
    },
    created(){
        this.show()
    }
}
</script>