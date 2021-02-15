import axios from 'axios'


const user = {
    state: {
        status: '',
        token: localStorage.getItem('token') || '',
        userProfile: ""
    },
    mutations: {
        auth_request(state) {
            state.status = 'loading'
        },
        auth_success(state, token) {
            state.status = 'success'
            state.token = token
        },
        auth_error(state) {
            state.status = 'error'
        },
        logout(state) {
            state.status = ''
            state.token = ''
        },
        setUser(state, userProfile) {

            state.userProfile = userProfile
            state.status = "aaaa"
        }
    },
    actions: {
        login({
            commit
        }, user) {
            return new Promise((resolve, reject) => {
                commit('auth_request')
                axios({
                        url: 'http://ec2-35-162-116-115.us-west-2.compute.amazonaws.com/api/v2/sign-in/admin',
                        data: user,
                        method: 'POST'
                    })
                    .then(resp => {
                        const token = resp.data.token
                        localStorage.setItem('token', token)
                        axios.defaults.headers.common['Authorization'] = token
                        commit('auth_success', token)
                        resolve(resp)
                    })
                    .catch(err => {
                        commit('auth_error')
                        localStorage.removeItem('token')
                        reject(err)
                    })
            })
        },
        logout({
            commit
        }) {
            return new Promise((resolve, reject) => {
                commit('logout')
                localStorage.removeItem('token')
                delete axios.defaults.headers.common['Authorization']
                resolve()
            })
        },
        profile({
            commit
        }) {
            // GET request using axios with set headers
            const headers = {
                "x-api-key": localStorage.getItem('token')
            };
            axios.get("http://ec2-35-162-116-115.us-west-2.compute.amazonaws.com/api/v2/profile", {
                    headers

                })
                .then(response => commit('setUser', response.data))
                .catch(error => console.log(error))


        }
    },
    getters: {
        isLoggedIn: state => !!state.token,
        authStatus: state => state.status,
        userProfile: state => state.userProfile
    },
}
export default user