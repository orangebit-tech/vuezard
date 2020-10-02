
import axios from 'axios';

// import {GITHUB_TOKEN} from '../../.env'


const state = {
    user:               'orangebit-tech',
    // token:              process.env.VUE_APP_GITHUB_TOKEN,
    token:              null,
    githubApiUrl:       'https://api.github.com/',
    username:           'orangebit-tech',
    repo_gixcore:       'guide/',
    repo_TA:            'theassistant/',
    repo_vuezard:       'vuezard/',
    commits_gixcore:    0,
    commits_ta:         0,
    commits_vuezard:    0,
    totalContributions: 'Loading...',
    loading:            false,
    chartData:          {},
}
const getters = {
    getContributions:   (state) => state.totalContributions,
    getChartData:       (state) => state.chartData,
    getLoading:         (state) => state.loading,
    // getGithubUrl:   (state) => state.githubUrl,
    // getUserRepos:   (state) => state.userRepos,

};
const actions = {
    async getActivity({commit}){
        console.log('github fetch started...')
        commit('SET_LOADING')

        // const data = await axios.get('localhost:8000').then((res) => {
        //     commit('UPDATE_CHART_DATA', data)
        //     console.log('gixcore repo fetched')
        //     commit('UNSET_LOADING')
        //     console.log(res)
        //     return res
        // })
            await axios( {
            url: 'http://localhost:8000', 
            method: 'get',
            mode: 'no-cors',
        }).then((res) => {
            commit('UPDATE_CHART_DATA', res.data)
            console.log('gixcore repo fetched')
            commit('UNSET_LOADING')
            console.log(res)
            return res.data
        })


        // const request_gixcore = await axios( {
        //     url: state.githubApiUrl+'repos/'+state.username+'/'+state.repo_gixcore+'stats/participation', 
        //     method: 'get',
        //     mode: 'no-cors',
        //     headers: {
        //     'Content-Type':                 `application/json`,
        //     'Authorization':                `token ${state.token}`,
        //     }
        // })
        // const request_ta = await axios({
        //     url: state.githubApiUrl+'repos/'+state.username+'/'+state.repo_TA+'stats/participation', 
        //     method: 'get',
        //     mode: 'no-cors',
        //     headers: {
        //     'Content-Type':                 `application/json`,
        //     'Authorization':                `token ${state.token}`,
        //     }
        // })
        // const request_vuezard = await axios({
        //     url: state.githubApiUrl+'repos/'+state.username+'/'+state.repo_vuezard+'stats/participation', 
        //     method: 'get',
        //     mode: 'no-cors',
        //     headers: {
        //     'Content-Type':                 `application/json`,
        //     'Authorization':                `token ${state.token}`,
        //     }
        // })

        // axios.all([request_gixcore, request_ta, request_vuezard]).then(axios.spread((...responses) => {
        // const responseOne = responses[0]
        // const contribs_gixcore = responseOne.data.owner.reduce(function(a,b){return a+b}, 0)
        // console.log(contribs_gixcore)

        // const responseTwo = responses[1]
        // const contribs_ta = responseTwo.data.owner.reduce(function(a,b){return a+b}, 0)
        // console.log(contribs_ta)

        // const responesThree = responses[2]
        // const contribs_vuezard = responesThree.data.owner.reduce(function(a,b){return a+b}, 0)
        // console.log(contribs_vuezard)

        // var chartData = [];

        // for(var i=0; i<responses[0].data.owner.length; i++){
        //     chartData[i] = responses[0].data.owner[i] + responses[1].data.owner[i] + responses[2].data.owner[i]
        // }
        // chartData.splice(0, 35)
        // const chartDataObj = Object.assign({}, chartData);

        // const sum = contribs_gixcore + contribs_ta + contribs_vuezard
        // console.log('Total Contriburions: '+sum)
        // commit('UPDATE_CHART_DATA', chartDataObj)
        // console.log('chart data array: ')
        // console.log(chartDataObj)
        // console.log('gixcore repo fetched')
        // commit('UPDATE_CONTRIBUTIONS', sum)
        // commit('UNSET_LOADING')
        // // use/access the results 
        // })).catch(errors => {
        //     commit('UNSET_LOADING')
        //     console.log(errors)
        // // react on errors.
        // })
    },

};

const mutations = {
    SET_LOADING(state){
        state.loading = true
    },
    UNSET_LOADING(state){
        state.loading = false
    },
    UPDATE_USER(state){
        state.user
    },
    UPDATE_CONTRIBUTIONS(state, sum){
        state.totalContributions = sum
    },
    UPDATE_CHART_DATA(state, data){
        state.chartData = data
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}