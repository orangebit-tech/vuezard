
import axios from 'axios';

const state = {
    user:               'orangebit-tech',
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
};
const actions = {
    async getActivity({commit}){
        console.log('github fetch started...')
        commit('SET_LOADING')

            await axios( {
            url: 'http://localhost:8000', 
            method: 'get',
            mode: 'no-cors',
        }).then((res) => {
            commit('UPDATE_CHART_DATA', res.data)
            console.log('github repo fetched')
            commit('UNSET_LOADING')
            console.log(res.data)
            return res.data
        })
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