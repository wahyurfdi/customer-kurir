<template>
    <v-row class="pa-3">
        <v-col cols="12">
            <v-card>
                <v-card-title>Pembayaran</v-card-title>
                <v-divider></v-divider>
                <v-card-text>
                    <v-row>
                        <v-col cols="6" class="py-1">
                            <p class="font-weight-bold mb-0">Pengirim</p>
                        </v-col>
                        <v-col cols="6" class="text-right py-1">
                            <p class="mb-0">Wahyu</p>
                        </v-col>
                        <v-col cols="6" class="py-1">
                            <p class="font-weight-bold mb-0">Penerima</p>
                        </v-col>
                        <v-col cols="6" class="text-right py-1">
                            <p class="mb-0">Rifaldi</p>
                        </v-col>
                        <v-col cols="6" class="py-1">
                            <p class="font-weight-bold mb-0">Deskripsi Paket</p>
                        </v-col>
                        <v-col cols="6" class="text-right py-1">
                            <p class="mb-0">Sabun</p>
                        </v-col>
                        <v-col cols="6" class="py-1">
                            <p class="font-weight-bold mb-0">Berat Paket</p>
                        </v-col>
                        <v-col cols="6" class="text-right py-1">
                            <p class="mb-0">Hingga 5KG</p>
                        </v-col>
                        <v-col cols="6" class="py-1">
                            <p class="font-weight-bold mb-0">Jeni Layanan</p>
                        </v-col>
                        <v-col cols="6" class="text-right py-1">
                            <p class="mb-0">SAMEDAY</p>
                        </v-col>
                        <v-col cols="6" class="py-1">
                            <p class="font-weight-bold mb-0">Metode Pembayaran</p>
                        </v-col>
                        <v-col cols="6" class="text-right py-1">
                            <p class="mb-0">OVO</p>
                        </v-col>
                    </v-row>
                </v-card-text>
            </v-card>
        </v-col>
        <v-col cols="12">
            <v-card>
                <v-card-text class="py-0">
                    <v-row>
                        <v-col cols="6">
                            <p class="font-weight-bold mb-0">Total Pembayaran</p>
                        </v-col>
                        <v-col cols="6" class="text-right">
                            <p class="font-weight-bold mb-0 warning--text">RP 8000</p>
                        </v-col>
                        <v-col cols="12">
                            <v-btn
                                depressed
                                color="primary"
                                width="100%"
                                to="/callback"
                            >
                                Lakukan Pembayaran
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
export default {
    data() {
        return {
            dialog: false
        }
    }
}
</script>

<style>

</style>