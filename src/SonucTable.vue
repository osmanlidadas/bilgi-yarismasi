<template>
<b-row v-if="dogruSayisi>0||yanlisSayisi>0">
    <h3 class="title mb-2 mt-5">Cevap Verdiğiniz Sorular...</h3>
    <table class="table table-hover">
        <thead class="thead-dark">
            <tr>
                <th>Soru</th>
                <th>Doğru Cevap</th>
                <th>Cevabınız</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="s in sonuc" :class="s.DogruCevap==s.VerilenCevap?'table-success':'table-danger'" :key="s.Id">
                <td>{{ s.soruNo }} - {{s.SoruKoku}}</td>
                <td>{{s.DogruCevap}}</td>
                <td>{{s.VerilenCevap}}</td>
            </tr>
        </tbody>
    </table>
</b-row>
</template>

<script>
import {
    mapGetters
} from 'vuex';
export default {
    computed: mapGetters(['sonuc', 'dogruSayisi', 'yanlisSayisi'])
}
</script>
