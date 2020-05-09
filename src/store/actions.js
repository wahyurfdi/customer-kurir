import Api from '../api'

export const getLayanan = ({commit}) => {
    Api.get('layanan')
    .then(res => {
        commit('LIST_LAYANAN', res.data.layanan)
    })
}

export const getPayment = ({commit}) => {
    Api.get('paymentchannel')
    .then(res => {
        commit('LIST_PAYMENT', res.data.payment_channel)
    })
}

export const cekPengirim = ({commit, dispatch}, { pengirim, next }) => {
    const respond = true

    //Start Loading
    dispatch('loadingButton', true)

    //Validate API
    setTimeout(() => {
        if(respond) {
            commit('CEK_PENGIRIM', { pengirim, next })
        } else {
            //Show Notif Bukan Wilayah kami
            dispatch('showSnackbar', true)
        }

        //Stop Loading
        dispatch('loadingButton', false)

    }, 3000)
}

export const cekPenerima = ({commit}, { penerima, next }) => {
    commit('CEK_PENERIMA', { penerima, next })
}

export const backForm = ({commit}, back) => {
    commit('BACK_FORM', back)
}

export const loadingButton = ({commit}, loading) => {
    commit('LOADING_BUTTON', loading)
}

export const showSnackbar = ({commit}, show) => {
    commit('SHOW_SNACKBAR', show)
} 

