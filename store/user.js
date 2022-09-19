const getDefaultState = () => {
    return {
        user_data: {
            id_user:'',
            email:'',
            nama_depan:'',
            nama_belakang:'',
            role:'',
            no_hp:'',
            asal_kota:'',
            profesi:'',
            tujuan:'',
            minat:'',
            nama_perusahaan:'',
            kategori_perusahaan:'',
            alamat_perusahaan:'',
            foto_perusahaan:'',
            foto_profil:'',
        },
    }
}

const state = () => getDefaultState()

const getters = {
    getUserData: (state) => state.user_data,
    getUserRole: (state) => state.user_data.role,
};

const actions = {
    async updateUserData({ commit }, payload) {
        commit('setUserData',payload);
    },
};

const mutations = {
    setUserData: (state, data) => {
        state.user_data = data;
    },
}

export default {
    state,
    getters,
    actions,
    mutations
}