<template>
<b-container>
    <b-row>
        <b-card class="col-12 shadow mt-5" v-if="!basladi">
            <b-button variant="danger" size="sm" @click="yarismayiBaslat()">
                <b-icon icon="play-fill" aria-hidden="true"></b-icon>
                Yarışmaya Başla
            </b-button>
            <div class="float-right" v-if="dogru > 0 || yanlis > 0">
                Doğru: {{ dogru }} - Yanlış: {{ yanlis }}
            </div>
            <SonucTable :dogru="dogru" :yanlis="yanlis" :sonuc="sonuc" />
        </b-card>

        <b-card class="col-12 shadow mt-5" v-if="basladi">
            <b-card-header>Soru {{ soruno }}
                <div class="float-right">
                    Doğru: {{ dogru }} - Yanlış: {{ yanlis }}
                </div>
            </b-card-header>
            <b-card-body>
                {{ soru.soru_koku }} {{ soru.cevap }}
                <br />

                <b-button class="mr-2 mt-2" @click="cevapVer(sec.secenek)" v-for="sec in soru.secenekler" :key="sec.id" variant="outline-primary">{{ sec.cevap }}
                </b-button>
            </b-card-body>
            <div class="float-right bottom-row">
                <b-button class="mr-2 mt-2" @click="sinaviBitir()" variant="danger">
                    <b-icon icon="power" aria-hidden="true"></b-icon>
                    Bitir
                </b-button>
            </div>
        </b-card>
    </b-row>
</b-container>
</template>

<script>
import SonucTable from "./SonucTable";

export default {
    components: {
        SonucTable,
    },
    data() {
        return {
            sorular: [],
            soru: [],
            basladi: false,
            soruno: 1,
            dogru: 0,
            yanlis: 0,
            sonuc: [],
        };
    },
    methods: {
        yarismayiBaslat() {
            this.dogru = 0;
            this.yanlis = 0;
            this.soruno = 1;
            this.sonuc = [];
            this.basladi = !this.basladi;
            this.soru = this.sorular[this.soruno - 1]; //indis numarası 0 dan başladığı için -1 kullanıyoruz.
        },
        cevapVer(v) {
            let dogru = this.soru.cevap;
            let cevap = v;

            //verilen cevapları kaydet
            let item = {
                soru_koku: this.soru.soru_koku,
                dogru_cevap: this.soru.cevap,
                verilen_cevap: v,
            };
            this.sonuc.push(item);

            //doğru yanlış sayılarını hesapla
            dogru === cevap ? this.dogru++ : this.yanlis++;

            //son soru değil ise soru numarasını artır
            if (this.soruno < this.sorular.length) {
                this.soruno++;
            } else {
                //son soru ise bitir
                this.basladi = false;
            }
            //yeni soruyu getir
            this.soru = this.sorular[this.soruno - 1];
        },
        sinaviBitir() {
            this.basladi = !this.basladi;
        },
    },
    created() {
        fetch("/db.json")
            .then((r) => r.json())
            .then((data) => {
                this.sorular = data;
            });
    },
};
</script>

<style>
</style>
