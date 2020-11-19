<template>
<b-container class="mb-5">
    <b-row>

        <b-card class="col-12 shadow mt-5" v-if="!basladi">
            <b-button variant="danger" size="sm" @click="yarismayiBaslat()">
                <b-icon icon="play-fill" aria-hidden="true"></b-icon>
                Yarışmaya Başla
            </b-button>
            <div class="float-right" v-if="dogruSayisi > 0 || yanlisSayisi > 0">
                Doğru: {{ dogruSayisi }} - Yanlış: {{ yanlisSayisi }}
            </div>
            <SonucTable />
        </b-card>

        <Soru />

    </b-row>
</b-container>
</template>

<script>
import SonucTable from "./SonucTable";
import Soru from "./Soru";
import {mapGetters} from 'vuex'
export default {
    components: {
        Soru,
        SonucTable,
    },
    data() {
        return {};
    },
    computed: mapGetters([
        'basladi',
        'dogruSayisi',
        'yanlisSayisi',
        'tumSorular'
    ]),
    methods: {
        yarismayiBaslat() {
            this.$store.dispatch('dogruYanlisSifirla');
            this.$store.dispatch('sonucuTemizle');
            this.$store.dispatch('yarismaBaslamaDurumu', !this.basladi);
            this.$store.dispatch('soruGetir', this.tumSorular[0]); //ilk soru
        }
    },
    created() {
        fetch("http://localhost:49230/api/sorular")
            .then((r) => r.json())
            .then((data) => {
                this.$store.dispatch('tumSorular', data);
            });
    },
};
</script>

<style>
</style>
