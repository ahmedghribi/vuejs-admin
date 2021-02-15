import axios from 'axios'
let ApiUrl = "http://ec2-35-162-116-115.us-west-2.compute.amazonaws.com/";

const traduction = {
    state: {
        status: '',
        token: localStorage.getItem('token') || '',
        TradList: '',
        TradListEn: '',
        LangList: '',
    },
    mutations: {

        post_error(state) {
            state.status = 'error'
        },
        setTrad(state, TradList) {

            state.TradList = TradList
            state.status = "Liste traduction"
        },
        setLangList(state, LangList) {

            state.LangList = LangList
            state.status = "Liste languages"
        }
    },
    actions: {

        addKey({
            commit
        }, values) {
            return new Promise((resolve, reject) => {
                const headers = {
                    "x-api-key": localStorage.getItem('token')
                };
                const item = {
                    name: values.name,
                    context: values.context,
                    note: values.note,
                }
                console.log(values);
                axios({
                        url: ApiUrl + 'api/v2/admin/localization/keys',

                        data: item,
                        headers,
                        method: 'POST'
                    })
                    .then(resolve)

                .catch(err => {
                    commit('post_error')
                    reject(err)
                })
            })
        },
        addTranslation({
            commit
        }, values) {
            return new Promise((resolve, reject) => {
                const headers = {
                    "x-api-key": localStorage.getItem('token')
                };
                const item = {
                    keyId: values.keyId,
                    languageId: values.languageId,
                    value: values.value,
                }
                console.log(values);
                axios({
                        url: ApiUrl + 'api/v2/admin/localization/translations',

                        data: item,
                        headers,
                        method: 'POST'
                    })
                    .then(resolve)

                .catch(err => {
                    commit('post_error')
                    reject(err)
                })
            })
        },
        updateTrans({
            commit
        }, values) {
            return new Promise((resolve, reject) => {
                const headers = {
                    "x-api-key": localStorage.getItem('token')
                };
                const item = {
                    language: values.language,
                    target: "webapp",
                    translation: {
                        key: values.key,
                        value: values.value,

                    },
                }
                console.log(values);
                axios({
                        url: ApiUrl + 'api/v2/admin/localization',

                        data: item,
                        headers,
                        method: 'PATCH'
                    })
                    .then(resolve)

                .catch(err => {
                    commit('post_error')
                    reject(err)
                })
            })
        },
        addlanguage({
            commit
        }, values) {
            return new Promise((resolve, reject) => {
                const headers = {
                    "x-api-key": localStorage.getItem('token')
                };
                const item = {
                        code: values.code,
                        name: values.name,
                    }
                    //console.log(values);
                axios({
                    url: ApiUrl + 'api/v2/admin/localization/languages',

                    data: item,
                    headers,
                    method: 'POST'
                })

                .catch(err => {
                    commit('post_error')
                    reject(err)
                })
            })
        },
        tradlist({
            commit
        }, LangID) {
            const headers = {
                "x-api-key": localStorage.getItem('token')
            };

            //console.log(LangID);
            axios.get(ApiUrl + "api/v2/admin/localization/languages/" + LangID + "/keys", {

                    headers

                })
                .then(response => commit('setTrad', response.data))
                .catch(error => console.log(error))


        },
        tradlisten({
            commit
        }, LangID) {
            const headers = {
                "x-api-key": localStorage.getItem('token')
            };

            //console.log(LangID);
            axios.get(ApiUrl + "api/v2/admin/localization/languages/1/keys", {

                    headers

                })
                .then(response => commit('setTradEn', response.data))
                .catch(error => console.log(error))


        },
        languageList({
            commit
        }) {
            const headers = {
                "x-api-key": localStorage.getItem('token')
            };
            //console.log(headers);
            axios.get(ApiUrl + "api/v2/admin/localization/languages", {

                    headers

                })
                .then(response => commit('setLangList', response.data))
                .catch(error => console.log(error))


        },
        updateLanguage({
            commit
        }, values) {
            return new Promise((resolve, reject) => {
                const headers = {
                    "x-api-key": localStorage.getItem('token')
                };
                console.log(values);
                const item = {
                    code: values.code,
                    name: values.name,
                }

                axios({
                        url: ApiUrl + 'api/v2/admin/localization/languages/' + values.id,
                        data: item,
                        headers,
                        method: 'PATCH'
                    })
                    .then(resolve)

                .catch(err => {
                    commit('post_error')
                    reject(err)
                })
            })
        },
        UpdateKey({
            commit
        }, values) {
            return new Promise((resolve, reject) => {
                const headers = {
                    "x-api-key": localStorage.getItem('token')
                };

                const item = {
                    name: values.name,
                    note: values.note,
                    context: values.context,
                }
                console.log(values);
                axios({
                        url: ApiUrl + 'api/v2/admin/localization/keys/' + values.id,

                        data: item,
                        headers,
                        method: 'PATCH'
                    })
                    .then(resolve)

                .catch(err => {
                    commit('post_error')
                    reject(err)
                })
            })
        },
        DeleteKey({
            commit
        }, TradID) {
            return new Promise((resolve, reject) => {
                const headers = {
                    "x-api-key": localStorage.getItem('token')
                };

                axios({
                        url: ApiUrl + 'api/v2/admin/localization/keys/' + TradID,
                        headers,
                        method: 'DELETE'
                    })
                    .then(resolve)

                .catch(err => {
                    commit('post_error')
                    reject(err)
                })
            })
        },
        DeleteLanguage({
            commit
        }, LangID) {
            return new Promise((resolve, reject) => {
                const headers = {
                    "x-api-key": localStorage.getItem('token')
                };

                axios({
                        url: ApiUrl + 'api/v2/admin/localization/languages/' + LangID,
                        headers,
                        method: 'DELETE'
                    })
                    .then(resolve)

                .catch(err => {
                    commit('post_error')
                    reject(err)
                })
            })
        },
    },
    getters: {
        TradList: state => state.TradList,
        LangList: state => state.LangList,
    },
}
export default traduction