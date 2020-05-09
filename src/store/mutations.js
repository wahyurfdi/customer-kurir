
export const LIST_LAYANAN = (state, listLayanan) => {
    state.optionLayanan = listLayanan
}

export const LIST_PAYMENT = (state, listPayment) => {
    state.optionPayment = listPayment
}

export const CEK_PENGIRIM = (state, { pengirim, next }) => {
    state.pengirim = pengirim
    state.progres = next
    state.loading = false
}

export const CEK_PENERIMA = (state, { penerima, next }) => {
    state.penerima = penerima
    state.progres = next
}

export const BACK_FORM = (state, back) => {
    state.progres = back
}

export const LOADING_BUTTON = (state, loading) => {
    state.loading = loading
}

export const SHOW_SNACKBAR = (state, show) => {
    state.snackbar = show

    setTimeout(() => {
        state.snackbar = false
    }, 3000) 
}