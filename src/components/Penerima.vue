<template>
    <v-form ref="form">
        <v-row>
            <v-col cols="12">
                <h4>Data Penerima</h4>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" class="pb-0">
                <v-text-field
                    outlined
                    label="Nama Lengkap"
                    v-model="penerima.nama"
                    :rules="[rules.notNull]" 
                >
                </v-text-field>
            </v-col>
            <v-col cols="12" class="pb-0">
                <v-text-field
                    outlined
                    type="number"
                    label="Nomor Telepon"
                    v-model="penerima.telepon"
                    :rules="[rules.notNull]"
                    @keydown.space.prevent 
                >
                </v-text-field>
            </v-col>
            <v-col cols="12" class="pb-0">
                <v-dialog v-model="dialog" persistent fullscreen hide-overlay>
                    <template v-slot:activator="{ on }">
                        <v-text-field
                            outlined
                            append-icon="mdi-google-maps"
                            label="Alamat"
                            v-model="penerima.alamat"
                            v-on="on"
                        >
                        </v-text-field>
                    </template>
                    <v-card>
                        <v-toolbar dark color="primary">
                            <v-btn icon dark @click="dialog = false">
                                <v-icon>mdi-arrow-left</v-icon>
                            </v-btn>
                            <v-toolbar-title>
                                Lokasi Penerima
                            </v-toolbar-title>
                        </v-toolbar>
                        <v-card-text class="pa-0">
                            <GmapAutocomplete
                                class="google-search-location"
                                placeholder="Cari lokasi disini ..."
                                @place_changed="getMyPlace"
                            >
                            </GmapAutocomplete>
                            <GmapMap
                                :center="center"
                                :zoom="20"
                                map-type-id="roadmap"
                                class="map-view"
                            >
                                <GmapMarker
                                    :position="marker"
                                    :draggable="true"
                                    @dragend="updatePosition"
                                />
                            </GmapMap>
                        </v-card-text>
                    </v-card>
                </v-dialog>
            </v-col>
            <v-col cols="12" class="pb-0">
                <v-textarea
                    outlined
                    label="Detail Lokasi"
                    v-model="penerima.detailLokasi"
                    rows="3"
                    :rules="[rules.notNull]" 
                >
                </v-textarea>
            </v-col>
            <v-col cols="12" style="text-align: right">
                <v-btn
                    text
                    right
                    color="grey"
                    @click="backPage()"
                >
                    Kembali
                </v-btn>

                <v-btn
                    depressed
                    right
                    color="warning"
                    @click="cekForm()"
                >
                    Selanjutnya
                </v-btn>
            </v-col>
        </v-row>
    </v-form>
</template>

<script>

import { mapActions } from 'vuex' 

export default {
    data() {
        return {
            dialog: false,
            center: {},
            marker: {},
            penerima: {
                nama: '',
                telepon: '',
                alamat: '',
                detailLokasi: ''
            },
            rules: {
                notNull: v => !!v || "Data tidak boleh kosong!"
            }
        }
    },
    created() {
        if(!("geolocation" in navigator)) {
            console.log('Not Support!')
            return
        }

        navigator.geolocation.getCurrentPosition(myPosition => {
        var myLocation = { lat: myPosition.coords.latitude, lng: myPosition.coords.longitude }

        this.marker = myLocation
        this.center = myLocation

        }, error => {
            console.log(error)
        })

    },
    methods: {
        ...mapActions(['cekPenerima', 'backForm']),
        cekForm() {
            if(this.$refs.form.validate()) {
                this.cekPenerima({
                    penerima: this.penerima,
                    next: 3
                })
            }
        },
        backPage() {
            this.backForm(1)
        },
        updatePosition(location) {
            console.log(location)
        },
        getMyPlace(place) {
            console.log(place)

            this.penerima.alamat = place.formatted_address

            var myLocation = { lat: place.geometry.location.lat(), lng: place.geometry.location.lng() }

            this.marker = myLocation
            this.center = myLocation
        }
    }
}
</script>

<style>
    .google-search-location {
        width: 100%;
        height: 56px;
        padding: 10px;
        background: #FFFFFF;
    }

    .map-view {
        height: 100% !important;
        padding-bottom: 180%;
        position: relative;
        width: 100%;
    }
</style>