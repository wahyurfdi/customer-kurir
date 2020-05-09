<template>
    <v-card class="ma-3">
        <v-card-text class="text-center">
            <v-icon class="success--text icon-payment mt-2">mdi-check-circle</v-icon>
            <h2>Berhasil!</h2>
            <p class="font-weight-bold mt-5">
                Transaksi ID <b>00000</b> berhasil! <br>
                Silahkan tunggu notifikasi berikutnya
            </p>
            <v-btn
                depressed
                color="primary"
                width="100%"
            >
                Kembali ke form
            </v-btn>
        </v-card-text>
    </v-card>
</template>

<script>
export default {

}
</script>

<style scoped>
    .icon-payment {
        font-size: 100px !important;
    }
</style>