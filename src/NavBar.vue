<template>
<b-navbar toggleable="md" type="dark" style="background-color: #563F7A">
    <b-navbar-brand href="#">Bilgi Yarışması</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <router-link class="nav-link" to="/">Yarışma</router-link>
        <router-link class="nav-link" to="/kurallar">Kurallar</router-link>
        <router-link class="nav-link" to="/hakkimda">Hakkımda</router-link>
    </b-navbar-nav>
        
     <b-navbar-nav class="ml-auto">
      <b-nav-item-dropdown text="Yönetim" right>
        <b-dropdown-item href="#">Giriş {{basladi}}</b-dropdown-item>
        <b-dropdown-item href="#">Soru Yönetim</b-dropdown-item>
      </b-nav-item-dropdown>
        </b-navbar-nav>
    </b-collapse>
  </b-navbar>

</template>

<script>
import {mapGetters} from 'vuex'
export default {
computed: mapGetters([
        'basladi'
    ]),
}
</script>

<style>

</style>
