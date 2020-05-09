<template>
    <v-form>
        <v-row>
            <v-col cols="12">
                <h3>Checkout</h3>
            </v-col>
            <v-col cols="12" class="pb-0">
                <v-divider></v-divider>
            </v-col>
            <v-col cols="12" class="py-1">
                <v-row class="mt-2">
                    <v-col cols="6" class="pb-0 pt-0">
                        <p class="font-weight-bold mb-1">Pengirim</p>
                    </v-col>
                    <v-col cols="6" class="pb-0 pt-0 text-right">
                        <p class="mb-1">{{ pengirim.nama }}</p>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="6" class="pb-0 pt-0">
                        <p class="font-weight-bold mb-1">Telepon</p>
                    </v-col>
                    <v-col cols="6" class="pb-0 pt-0 text-right">
                        <p class="mb-1">{{ pengirim.telepon }}</p>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="6" class="pb-0 pt-0">
                        <p class="font-weight-bold mb-1">Alamat</p>
                    </v-col>
                    <v-col cols="6" class="pb-0 pt-0 text-right">
                        <p class="mb-1" v-if="pengirim.alamat != undefined && pengirim.alamat.length > 16">{{ pengirim.alamat.slice(0,16)+"..." }}</p>
                        <p class="mb-1" v-else>{{ pengirim.alamat }}</p>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="6" class="pb-0 pt-0">
                        <p class="font-weight-bold mb-1">Detail Lokasi</p>
                    </v-col>
                    <v-col cols="6" class="pb-0 pt-0 text-right">
                        <p class="mb-1" v-if="pengirim.detailLokasi != undefined && pengirim.detailLokasi.length > 16">{{ pengirim.detailLokasi.slice(0,16)+"..." }}</p>
                        <p class="mb-1" v-else>{{ pengirim.detailLokasi }}</p>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="12" class="py-0">
                <v-divider></v-divider>
            </v-col>
            <v-col cols="12" class="py-1">
                <v-row class="mt-2">
                    <v-col cols="6" class="pb-0 pt-0">
                        <p class="font-weight-bold mb-1">Penerima</p>
                    </v-col>
                    <v-col cols="6" class="pb-0 pt-0 text-right">
                        <p class="mb-1">{{ penerima.nama }}</p>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="6" class="pb-0 pt-0">
                        <p class="font-weight-bold mb-1">Telepon</p>
                    </v-col>
                    <v-col cols="6" class="pb-0 pt-0 text-right">
                        <p class="mb-1">{{ penerima.telepon }}</p>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="6" class="pb-0 pt-0">
                        <p class="font-weight-bold mb-1">Alamat</p>
                    </v-col>
                    <v-col cols="6" class="pb-0 pt-0 text-right">
                        <p class="mb-1" v-if="penerima.alamat != undefined && penerima.alamat.length > 16">{{ penerima.alamat.slice(0,16)+"..." }}</p>
                        <p class="mb-1" v-else>{{ penerima.alamat }}</p>
                    </v-col>
                </v-row>
                <v-row class="mb-2">
                    <v-col cols="6" class="pb-0 pt-0">
                        <p class="font-weight-bold mb-1">Detail Lokasi</p>
                    </v-col>
                    <v-col cols="6" class="pb-0 pt-0 text-right">
                        <p class="mb-1" v-if="penerima.detailLokasi != undefined && penerima.detailLokasi.length > 16">{{ penerima.detailLokasi.slice(0,16)+"..." }}</p>
                        <p class="mb-1" v-else>{{ penerima.detailLokasi }}</p>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="12" class="pt-0">
                <v-divider></v-divider>
            </v-col>
            <v-col cols="12" class="pb-0">
                <v-select
                    v-model="selectedLayanan"
                    :items="optionLayanan"
                    item-text="nama"
                    label="Jenis Layanan"
                    return-object
                    outlined
                    :rules="[rules.notNull]"
                >
                </v-select>
            </v-col>
            <v-col cols="12" class="py-0">
                <v-textarea
                    outlined
                    label="Deskripsi Barang/Paket"
                    rows="3"
                    :rules="[rules.notNull]"
                ></v-textarea>
            </v-col>
            <v-col cols="12" class="pt-0">
                <span class="text--secondary"><small>Berat Paket</small></span>
                <v-chip-group
                    v-model="selectedSize"
                    active-class="blue--text text--accent-4"
                    mandatory
                >
                    <v-chip v-for="size in sizes" :key="size.berat" :value="size.qty">
                        {{ size.berat }}
                    </v-chip>
                </v-chip-group>
            </v-col>
            <v-col cols="12" class="pb-0">
                <v-autocomplete
                    v-model="selectedPayment"
                    :items="optionPayment"
                    outlined
                    label="Metode Pembayaran"
                    item-text="nama"
                    return-object
                    :rules="[rules.notNull]"
                >
                    <template v-slot:selection="data">
                        <v-avatar tile size="32" class="mr-2">
                            <v-img :src="data.item.image"></v-img>
                        </v-avatar>
                        <span class="country-picker-text" v-text="data.item.nama"></span>
                        &nbsp;
                    </template>
                    <template v-slot:item="data">
                        <v-list-item-avatar>
                            <img :src="data.item.image">
                        </v-list-item-avatar>
                        <v-list-item-content>
                            <v-list-item-title v-html="data.item.nama"></v-list-item-title>
                        </v-list-item-content>
                    </template>
                </v-autocomplete>
            </v-col>
            <v-col cols="12" class="py-0">
                <v-divider></v-divider>
            </v-col>
            <v-col cols="6">
                <p class="font-weight-bold mb-1">Total Pembayaran</p>
            </v-col>
            <v-col cols="6" class="text-right">
                <p class="font-weight-bold warning--text mb-1" v-if="selectedLayanan == null">RP. 0</p>
                <p class="font-weight-bold warning--text mb-1" v-else>RP. {{ selectedLayanan.harga * selectedSize }}</p>
            </v-col>
            <v-col cols="12" class="pt-0">
                <v-divider></v-divider>
            </v-col>
            <v-col cols="12" class="mt-3 text-right">
                <v-btn
                    text
                    color="grey"
                    @click="backPage"
                >
                    Kembali
                </v-btn>
                <v-btn
                    depressed
                    color="warning"
                    to="/checkout"
                >
                    Pesan Kurir
                </v-btn>
            </v-col>
        </v-row>
    </v-form>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
    data() {
        return {
            checkout: {
                paketDeskripsi: null,
                jenisLayanan: null,
                jenisPembayaran: null,
            },
            selectedLayanan: null,
            selectedPayment: null,
            paketDeskripsi: null,
            selectedSize: 1,
            sizes: [
                {
                    berat: 'Hingga 5KG',
                    qty: 1
                },
                {
                    berat: 'Hingga 10KG',
                    qty: 2
                },
                {
                    berat: 'Hingga 15KG',
                    qty: 3
                }
            ],
            rules: {
                notNull: v => !!v || 'Data tidak boleh kosong!' 
            }
        }
    },
    computed: {
        ...mapState(['optionLayanan', 'optionPayment', 'pengirim', 'penerima'])
    },
    methods: {
        ...mapActions(['backForm', 'getLayanan', 'getPayment']),
        backPage() {
            this.backForm(2)
        }
    },
    mounted() {
        this.getLayanan(),
        this.getPayment()
    }
}
</script>

<style>

</style>