<template>
<b-card class="col-12 shadow mt-5" v-if="basladi">
    <b-card-header>Soru {{ soruNo }}
        <div class="float-right">
            Doğru: {{ dogruSayisi }} - Yanlış: {{ yanlisSayisi }}
        </div>
    </b-card-header>
    <b-card-body>
        {{ soruGetir.SoruKoku }}
        <br />
        <b-button class="mr-2 mt-2" @click="cevapVer(sec.Abcd)" v-for="sec in soruGetir.Secenekler" :key="sec.Id" variant="outline-primary">
            {{ sec.Cevap }}
        </b-button>
    </b-card-body>
    <div class="float-right bottom-row">
        <b-button class="mr-2 mt-2" @click="sinaviBitir()" variant="danger">
            <b-icon icon="power" aria-hidden="true"></b-icon>
            Bitir
        </b-button>
    </div>
</b-card>
</template>

<script>
import {
    mapGetters
} from 'vuex'
export default {
    data() {
        return {

        };
    },
    computed: mapGetters(['basladi', 'soruGetir', 'dogruSayisi', 'yanlisSayisi', 'soruNo', 'tumSorular']),
    methods: {
        cevapVer(vc) {
            let soru = this.soruGetir;
            let dogru = soru.DogruCevap;
            let cevap = vc;
console.log(cevap+ "-"+dogru)

            //verilen cevapları kaydet
            let item = {
                SoruKoku: soru.SoruKoku,
                DogruCevap: soru.DogruCevap,
                VerilenCevap: vc,
                soruNo: this.soruNo
            };
            this.$store.dispatch('sonucuIsle', item);

            //doğru yanlış sayılarını hesapla
            dogru === cevap ?
                this.$store.dispatch('dogruSayisiniArtir') :
                this.$store.dispatch('yanlisSayisiniArtir');

            //son soru değil ise soru numarasını artır
            var soruNo = this.soruNo;

            if (soruNo < this.tumSorular.length) {
                this.$store.dispatch('soruyuArtir');
            } else {
                //son soru ise bitir
                this.$store.dispatch('yarismaBaslamaDurumu', false);
            }

            //yeni soruyu getir
            this.$store.dispatch('soruGetir', this.tumSorular[this.soruNo - 1]);
        },
        sinaviBitir() {
            this.$store.dispatch('yarismaBaslamaDurumu', false);
        }
    }
}
</script>
