<template>
    <v-stepper v-model="progres" class="ma-3">
        <v-stepper-header>
            <v-stepper-step :complete="progres > 1" step="1">Data Pengirim</v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step :complete="progres > 2" step="2">Data Penerima</v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step step="3">Checkout</v-stepper-step>
        </v-stepper-header>

        <v-stepper-items>
            <v-stepper-content step="1">
                <Pengirim />
            </v-stepper-content>

            <v-stepper-content step="2">
                <Penerima />
            </v-stepper-content>

            <v-stepper-content step="3">
                <Checkout />
            </v-stepper-content>
        </v-stepper-items>
    </v-stepper>
</template>

<script>

import { mapState } from 'vuex' 
import Pengirim from '../components/Pengirim'
import Penerima from '../components/Penerima'
import Checkout from '../components/Checkout'

export default {
    data() {
        return {
            el1: 1
        }
    },
    components: {
        Pengirim,
        Penerima,
        Checkout
    },
    computed: {
        ...mapState(['progres'])
    }
}
</script>

<style>

</style>