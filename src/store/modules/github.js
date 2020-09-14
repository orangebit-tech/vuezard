
import axios from 'axios';


const state = {
    user:               'orangebit-tech',
    token:              '5b82185450e1527059aecc1d1cc72b4a5edb9daf',
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
}
const getters = {
    getContributions:   (state) => state.totalContributions,
    getLoading:         (state) => state.loading,
    // getGithubUrl:   (state) => state.githubUrl,
    // getUserRepos:   (state) => state.userRepos,

};
const actions = {
    async getActivity({commit}){

        console.log('github fetch started...')
        commit('SET_LOADING')

        const request_gixcore = await axios( {
            url: state.githubApiUrl+'repos/'+state.username+'/'+state.repo_gixcore+'stats/participation', 
            method: 'get',
            mode: 'no-cors',
            headers: {
            'Content-Type':                 `application/json`,
            'Authorization':                `token ${state.token}`,
            }
        })
        const request_ta = await axios({
            url: state.githubApiUrl+'repos/'+state.username+'/'+state.repo_TA+'stats/participation', 
            method: 'get',
            mode: 'no-cors',
            headers: {
            'Content-Type':                 `application/json`,
            'Authorization':                `token ${state.token}`,
            }
        })
        const request_vuezard = await axios({
            url: state.githubApiUrl+'repos/'+state.username+'/'+state.repo_vuezard+'stats/participation', 
            method: 'get',
            mode: 'no-cors',
            headers: {
            'Content-Type':                 `application/json`,
            'Authorization':                `token ${state.token}`,
            }
        })

        axios.all([request_gixcore, request_ta, request_vuezard]).then(axios.spread((...responses) => {

        const responseOne = responses[0]
        const contribs_gixcore = responseOne.data.owner.reduce(function(a,b){return a+b}, 0)
        console.log(contribs_gixcore)

        const responseTwo = responses[1]
        const contribs_ta = responseTwo.data.owner.reduce(function(a,b){return a+b}, 0)
        console.log(contribs_ta)

        const responesThree = responses[2]
        const contribs_vuezard = responesThree.data.owner.reduce(function(a,b){return a+b}, 0)
        console.log(contribs_vuezard)

        const sum = contribs_gixcore + contribs_ta + contribs_vuezard
        console.log('Total Contriburions: '+sum)
        console.log('gixcore repo fetched')
        commit('UPDATE_CONTRIBUTIONS', sum)
        commit('UNSET_LOADING')
        // use/access the results 
        })).catch(errors => {
            commit('UNSET_LOADING')
            console.log(errors)
        // react on errors.
        })



        
        // return await axios({
        //     url: state.githubApiUrl+'repos/'+state.username+'/'+state.repo_gixcore+'stats/participation', 
        //     method: 'get',
        //     mode: 'no-cors',
        //     headers: {
        //     'Content-Type':                 `application/json`,
        //     // 'Access-Control-Allow-Headers': '*',
        //     'Authorization':                `token ${state.token}`,
        //     // 'username':                     `${state.username}`
        //     // 'alg': "HS256",
        //     // 'typ': "JWT"
        //     }, 
        // })
        // .then((response) => {
        //     commit('UPDATE_USER')
        //     console.log('success')
        //     console.log(response.data.owner)
        //     console.log('gixcore repo fetched')
        //     commit('UNSET_LOADING')
        
        //     return response;
    
        // }, (error) => {
        //     // commit('SET_ERROR', error)
        //     commit('UNSET_LOADING')
        //     console.log(error)
        // })
    },
    // getComtributions_W({commit}, state){

    // }
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
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}