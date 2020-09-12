
// import axios from 'axios';


const state = {
    menuOptions: {
        home: {
            type: 'home',
            name: "Home",
            url: 'home',
            item: {
                type: 'home',
                id: 1,
                contents: null,
            },
        },
    }
}
const getters = {
    allMenuOptions:     (state) => state.menuOptions,
};
const actions = {

};

const mutations = {

};

export default {
    state,
    getters,
    actions,
    mutations
}