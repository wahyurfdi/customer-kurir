<template>
    <v-form ref="form">
        <snackbar />
        <v-row>
            <v-col cols="12">
                <h4>Data Pengirim</h4>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" class="pb-0">
                <v-text-field
                    outlined
                    label="Nama Lengkap"
                    v-model="pengirim.nama"
                    :rules="[rules.notNull]" 
                >
                </v-text-field>
            </v-col>
            <v-col cols="12" class="pb-0">
                <v-text-field
                    outlined
                    type="number"
                    label="Nomor Telepon"
                    v-model="pengirim.telepon"
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
                            v-model="pengirim.alamat"
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
                                Lokasi Pengirim
                            </v-toolbar-title>
                        </v-toolbar>
                        <v-card-text class="pa-0">
                            <GmapAutocomplete
                                class="google-search-location"
                                placeholder="Cari lokasi disini ..."
                                :options="{componentRestrictions:{
                                    country: ['id']
                                    }}"
                                @place_changed="getPlacePengirim"
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
                    v-model="pengirim.detailLokasi"
                    rows="3"
                    :rules="[rules.notNull]" 
                >
                </v-textarea>
            </v-col>
            <v-col cols="12" style="text-align: right">
                <v-btn
                    depressed
                    right
                    color="warning"
                    :loading="loading"
                    @click="cekForm()"
                >
                    Selanjutnya
                </v-btn>
            </v-col>
        </v-row>
    </v-form>
</template>

<script>

// import geocoding from "reverse-geocoding"
import { mapActions, mapState } from 'vuex' 
import Snackbar from '../components/Snackbar.vue'

export default {
    data() {
        return {
            dialog: false,
            center: {},
            marker: {},
            pengirim: {
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
    components: {
        Snackbar
    },
    computed: {
        ...mapState(['loading'])
    },
    created() {
        if(!("geolocation" in navigator)) {
            console.log('Not Support!')
            return
        }

        navigator.geolocation.getCurrentPosition(myPosition => {
        var myLocation = { lat: myPosition.coords.latitude, lng: myPosition.coords.longitude }

        // var config = {
        //     'latitude': myPosition.coords.latitude,
        //     'longitude': myPosition.coords.longitude,
        //     'key': 'AIzaSyCfyJJEcEMWXVtB1c2e9rxaI6X8ZCfAOKA'
        // }

        // geocoding(config, (err, data) => {
        //     console.log(err ? err : data)
        // })

        this.marker = myLocation
        this.center = myLocation

        }, error => {
            console.log(error)
        })

    },
    methods: {
        ...mapActions(['cekPengirim']),
        cekForm() {
            if(this.$refs.form.validate()) {
                console.log(this.pengirim)
                this.cekPengirim({
                    pengirim: this.pengirim,
                    next: 2
                })
            }
        },
        updatePosition(location) {
            console.log(location)
        },
        getPlacePengirim(place) {
            console.log(place)

            this.pengirim.alamat = place.formatted_address

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