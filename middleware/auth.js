import axios from 'axios'

export default async ({app, redirect, store, route}) => {
    console.log("masuk auth auth")
    // if(false) {
        const checkStore = store.state.auth.user_login.id_user ? true : false
        if (!checkStore) {
            if(app.$cookies.get('token')) {
                await axios.post(`${process.env.API_URL}/user/check-token`,{},{
                    headers: {
                        "auth-token":app.$cookies.get('token')
                    }
                }).then(res => {
                    console.log("masuk sini, berhasil check token")
                    let dataLogin = res.data.user
                    store.state.auth.user_login.id_user = dataLogin.id_user
                    store.state.auth.user_login.email = dataLogin.email
                    store.state.auth.user_login.nama_depan = dataLogin.nama_depan
                    store.state.auth.user_login.nama_belakang = dataLogin.nama_belakang
                    store.state.auth.user_login.role = dataLogin.role
                }).catch(err => {
                    app.$cookies.removeAll()
                    store.state.auth.user_login = {}
                    redirect({name:'index'})
                })
            } else {
                console.log("auth gagal: g ada token")
                redirect({name:'index'})
            }
        } else {
            console.log("masuk sini")
            // redirect({name:'index'})
        }
    // } else {
        // if(!['maintenance','quickregister'].includes(route.name)) redirect({name:'maintenance'})
    // }
}