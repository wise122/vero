const getDefaultState = () => {
    return {
        user_login: {},
    }
}

const state = () => getDefaultState()

const getters = {
    getUserCredentials: (state) => state.user_login,
};

const actions = {
    userLogin({ commit }, payload) {
        commit('setUserLogin',payload);
    },
    userLogout({ commit }) {
        console.log("otw logout store")
        commit('logout');
    }
};

const mutations = {
    setUserLogin: (state, data) => {
        state.user_login = data;
    },
    logout: (state) => {
        Object.assign(state, getDefaultState())
    },
}

export default {
    state,
    getters,
    actions,
    mutations
}