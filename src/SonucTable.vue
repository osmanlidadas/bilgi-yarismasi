<template>
  <b-row v-if="dogru>0||yanlis>0">
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
      <tr v-for="s in sonuc" :class="s.dogru_cevap==s.verilen_cevap?'table-success':'table-danger'">
        <td>{{s.soru_koku}}</td>
        <td>{{s.dogru_cevap}}</td>
        <td>{{s.verilen_cevap}}</td>
      </tr>
      </tbody>
    </table>
  </b-row>
</template>
<script>
export default {
  props:{
    dogru:Number,
    yanlis:Number,
    sonuc:Array
  }
}
</script>
