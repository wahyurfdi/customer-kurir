<template>
    <v-snackbar
      v-model="snackbar"
      top
      :timeout="5000"
      color="error"
      class="snackbar"
    >
      <p class="font-weight-bold">Layanan ini belum tersedia di wilayah Anda!</p>
    </v-snackbar>
</template>

<script>

import { mapState } from 'vuex'

export default {
    computed: {
        ...mapState(['snackbar'])
    }
}
</script>

<style scoped>
    .snackbar {
        margin-top: 50px !important
    }
</style>